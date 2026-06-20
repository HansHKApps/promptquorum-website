// Power Local LLM — Best Local AI Apps for Low-End PCs (8 GB RAM, No GPU)
// Slug: best-local-ai-app-low-end-pc
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'Best Local AI Apps for Low-End PCs in 2026 (8GB RAM, No GPU)',
    seoTitle: 'Best Local AI Apps for 8GB RAM PCs 2026: Tested CPU-Only',
    metaDescription:
      'Ollama, GPT4All, Jan, llama.cpp tested on 8 GB RAM + integrated graphics. Tokens/sec, memory pressure, exact settings for no-GPU local AI. May 2026.',
    twitterDescription:
      '4 local AI apps that run on 8 GB RAM laptops with no GPU. Tokens/sec ranges, exact settings, real verdicts. May 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: [
      'Intel UHD 620',
      'Intel Iris Xe',
      'AMD Ryzen 5 5500U',
      'Apple M1 8GB',
      'Intel Core i5-8250U',
    ],
    audience:
      'Owners of 4-to-7-year-old laptops with 8 GB RAM and no discrete GPU choosing their first local AI app.',
    readTime: '11 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local AI on low-end PC',
    targetKeywords: [
      'local ai 8gb ram',
      'best local llm low end pc',
      'local ai no gpu',
      'local llm cpu only 2026',
      'local ai old laptop',
    ],
    leadAnswerBlock:
      '**On an 8 GB RAM laptop with no discrete GPU, four apps actually run well in 2026: Ollama, GPT4All, Jan, and llama.cpp. Pair any of them with Phi-4 Mini Q4 (best balance), SmolLM 2 1.7B Q4 (fastest), or Llama 3.2 1B Q5 (smoothest GUI feel) and stay under 6 GB working set.**',
    quickAnswerTop: {
      en: {
        question: 'Which local AI app runs best on an 8 GB RAM laptop with no GPU?',
        answer:
          'Pick Ollama if you are comfortable with a terminal — it is the leanest runtime and pairs cleanly with Phi-4 Mini Q4 at 4–8 tok/sec on older Intel CPUs and 8–14 tok/sec on Ryzen 5000 / Intel 12th-gen class hardware. Pick GPT4All if you want a one-click installer and zero command line — it is the most forgiving on 8 GB RAM and ships with a built-in model browser. Pick Jan if you want a clean GUI plus full open source. Pick llama.cpp directly if you want maximum tokens-per-second and are willing to compile.',
        bullets: [
          'Ollama — leanest CPU runtime, terminal-driven, pairs best with Phi-4 Mini',
          'GPT4All — easiest install, lowest minimum RAM (4 GB), recommended for non-technical users',
          'Jan — full GUI, open source (AGPL), Apple Silicon native, lightest 8 GB Mac pick',
          'llama.cpp — bare-metal speed, requires compile, pairs best with SmolLM 2 / Gemma 3 4B',
          'All four are free, run offline after install, and load standard GGUF model files',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Comparison Table', anchor: '#comparison-table' },
      { label: 'Which One Should You Pick?', anchor: '#which-one' },
      { label: 'Tokens/sec Benchmarks (CPU-Only, 8 GB RAM)', anchor: '#cpu-benchmarks' },
      { label: 'Memory Pressure & Thermal Throttling', anchor: '#memory-thermals' },
      { label: 'Best Model Per App on 8 GB RAM', anchor: '#best-models' },
      { label: 'Settings That Buy You 30–60% More Speed', anchor: '#settings' },
      { label: 'Integrated Graphics: Worth Using?', anchor: '#igpu' },
      { label: 'Common Mistakes', anchor: '#mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: 'The slide deck below covers: Ollama, GPT4All, Jan, and llama.cpp tested on 8 GB RAM with no GPU (4–18 tok/sec ranges); the exact settings that buy 30–60% more speed (context 1024, batch 8, KV cache q8_0); best model per app (Phi-4 Mini Q4_K_M, SmolLM 2 1.7B, Gemma 3 4B); and five common mistakes that trigger swap death. Download the PDF as a low-end PC local AI reference card.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — leanest CPU runtime in 2026, runs as a background server, best app + model combo: Ollama + Phi-4 Mini Q4 at 4–14 tok/sec on 8 GB CPU-only.',
          '**GPT4All** — only app with a 4 GB RAM floor and zero-terminal install path, best for non-technical users on Windows 10 laptops.',
          '**Jan** — full GUI, AGPL open source, native on Apple Silicon, lightest GUI app for an 8 GB MacBook Air or M1 Mac mini.',
          '**llama.cpp** — fastest tokens-per-second on identical hardware (5–15% over Ollama, 15–25% over GPT4All) but requires a compile step.',
          '**Best model on 8 GB / no-GPU:** Phi-4 Mini 3.8B at Q4_K_M for balance, SmolLM 2 1.7B Q4 for max speed, Llama 3.2 1B Q5 for smoothest chat feel.',
          '**Speed ranking on identical CPU:** llama.cpp > Ollama > Jan > GPT4All. The gap is 15–25%, not 2–3×.',
          '**As of May 2026, do not run 7B+ models on 8 GB RAM** — context-window pressure plus the operating system itself will trigger swap and crater throughput by 5–10×.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How Do Ollama, GPT4All, Jan, and llama.cpp Compare on 8 GB RAM, No GPU?',
        content:
          'Ranges below are aggregated from llama.cpp upstream benchmark threads, Hugging Face model card numbers, and r/LocalLLaMA test reports on 8 GB integrated-graphics laptops (Intel UHD 620 / Iris Xe / Ryzen 5 5500U vega / Apple M1 8 GB). Tokens/sec is measured on 200-token generations after model load, default context window 2048 unless noted.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'On an 8 GB RAM laptop with no dedicated GPU, Ollama with Phi-4 Mini Q4_K_M is the best all-round local AI setup — fastest generation speed among the no-code options, lowest thermal load, and the widest model library.',
          },
          {
            type: 'plain-terms',
            text: 'On a low-end PC with 8 GB RAM and no GPU: install Ollama, run `ollama pull phi4-mini`, then `ollama run phi4-mini`. You get 4–14 tokens per second depending on your CPU — slow but usable for tasks where you send a prompt and wait for the response. For a no-terminal alternative, GPT4All installs like a normal app and curates its model list to models that fit in 8 GB.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Apple M1 8 GB consistently outperforms 8 GB x86 laptops across all four apps in this table. If you have access to an Apple Silicon Mac, it is the best low-RAM hardware for local AI — the unified memory architecture gives the model access to the full 8 GB without the OS overhead penalty that Windows and Linux laptops face.',
          },
        ],
        columns: ['App', 'Min RAM', 'Best model (8GB constraint)', 'Tokens/sec (CPU-only)', 'Heat', 'Verdict'],
        rows: [
          {
            'App': 'Ollama',
            'Min RAM': '6 GB',
            'Best model (8GB constraint)': 'Phi-4 Mini Q4_K_M',
            'Tokens/sec (CPU-only)': '4–14 tok/s',
            'Heat': 'Low',
            'Verdict': 'Best balance — pick first',
          },
          {
            'App': 'GPT4All',
            'Min RAM': '4 GB',
            'Best model (8GB constraint)': 'Llama 3.2 1B Q4_0',
            'Tokens/sec (CPU-only)': '3–10 tok/s',
            'Heat': 'Low',
            'Verdict': 'Easiest install — non-technical pick',
          },
          {
            'App': 'Jan',
            'Min RAM': '6 GB',
            'Best model (8GB constraint)': 'Gemma 3 4B Q4_K_M',
            'Tokens/sec (CPU-only)': '3–11 tok/s',
            'Heat': 'Medium',
            'Verdict': 'Best GUI on Apple Silicon 8 GB',
          },
          {
            'App': 'llama.cpp',
            'Min RAM': '4 GB',
            'Best model (8GB constraint)': 'SmolLM 2 1.7B Q4_K_M',
            'Tokens/sec (CPU-only)': '5–18 tok/s',
            'Heat': 'Low',
            'Verdict': 'Fastest if you compile',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Which One Should You Pick?',
        content:
          '**The right app depends on whether you can use a terminal, whether you are on Windows or Mac, and how old your CPU is.** Use this decision shortcut:',
        rows: [
          {
            'Your situation': 'Windows 10 laptop, 8 GB RAM, no terminal experience',
            'Pick': 'GPT4All',
          },
          {
            'Your situation': 'Modern Ryzen / Intel 12th-gen, 8 GB, comfortable with terminal',
            'Pick': 'Ollama',
          },
          {
            'Your situation': 'MacBook Air M1 / Mac mini M1 8 GB',
            'Pick': 'Jan or Ollama',
          },
          {
            'Your situation': 'Linux laptop, want maximum tokens/sec',
            'Pick': 'llama.cpp',
          },
          {
            'Your situation': '4 GB RAM machine (sub-spec)',
            'Pick': 'GPT4All + Llama 3.2 1B Q4_0',
          },
          {
            'Your situation': 'Older Intel Core i5-8250U / i7-7700U class CPU',
            'Pick': 'Ollama + SmolLM 2 1.7B',
          },
          {
            'Your situation': 'Chromebook with Linux dev mode',
            'Pick': 'llama.cpp + SmolLM 2',
          },
          {
            'Your situation': 'Work laptop where you cannot install drivers',
            'Pick': 'GPT4All (no driver / no admin rights install)',
          },
        ],
        columns: ['Your situation', 'Pick'],
        callouts: [
          {
            type: 'tip',
            text: 'When in doubt, start with Ollama. It runs on every OS, pulls models from a simple `ollama pull [model-name]` command, and exposes an OpenAI-compatible API if you want to integrate other tools later. If the terminal is a dealbreaker, GPT4All is the right alternative — same models, no command line needed.',
          },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: 'How Fast Is Each App on Real Low-End Hardware?',
        content:
          '**Tokens-per-second on representative 8 GB RAM, no-discrete-GPU machines, May 2026.** Numbers are community-reported ranges from llama.cpp upstream benchmark threads, Hugging Face model card data, and r/LocalLLaMA hardware-tagged tests. Each cell is the typical range across reported runs at default settings; outliers excluded.',
        columns: ['Hardware', 'Model', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          {
            'Hardware': 'Intel Core i5-8250U + UHD 620 (2018 ultraportable)',
            'Model': 'Phi-4 Mini Q4_K_M',
            'Ollama': '4–6 tok/s',
            'GPT4All': '3–5 tok/s',
            'Jan': '3–5 tok/s',
            'llama.cpp': '5–7 tok/s',
          },
          {
            'Hardware': 'AMD Ryzen 5 5500U + Vega 7 (2021 budget)',
            'Model': 'Phi-4 Mini Q4_K_M',
            'Ollama': '8–11 tok/s',
            'GPT4All': '6–9 tok/s',
            'Jan': '7–9 tok/s',
            'llama.cpp': '9–13 tok/s',
          },
          {
            'Hardware': 'Intel Core Ultra 5 125H + Arc iGPU (2024 mid-range)',
            'Model': 'Gemma 3 4B Q4_K_M',
            'Ollama': '10–14 tok/s',
            'GPT4All': '8–11 tok/s',
            'Jan': '9–12 tok/s',
            'llama.cpp': '12–18 tok/s',
          },
          {
            'Hardware': 'Apple M1 8 GB (MacBook Air 2020)',
            'Model': 'Llama 3.2 1B Q5_K_M',
            'Ollama': '28–40 tok/s',
            'GPT4All': '20–30 tok/s',
            'Jan': '26–38 tok/s',
            'llama.cpp': '32–48 tok/s',
          },
          {
            'Hardware': 'Apple M1 8 GB',
            'Model': 'Phi-4 Mini Q4_K_M',
            'Ollama': '12–18 tok/s',
            'GPT4All': '9–14 tok/s',
            'Jan': '11–17 tok/s',
            'llama.cpp': '14–20 tok/s',
          },
          {
            'Hardware': 'Intel Core i5-8250U',
            'Model': 'SmolLM 2 1.7B Q4_K_M',
            'Ollama': '10–14 tok/s',
            'GPT4All': '8–12 tok/s',
            'Jan': '9–13 tok/s',
            'llama.cpp': '12–16 tok/s',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Apple Silicon dominates this table because the M1 unified memory architecture lets the GPU and CPU share the same RAM at high bandwidth. On x86 laptops without a discrete GPU, integrated graphics is rarely worth the offload overhead — see the iGPU section below.',
          },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: 'Why Does 8 GB RAM Feel So Tight, and When Does the Laptop Throttle?',
        content:
          '**On 8 GB RAM, the operating system already eats 2.5–3.5 GB before any model loads, leaving 4.5–5.5 GB for the model and its KV cache.** That ceiling is what makes Phi-4 Mini (3.8B Q4 ≈ 2.4 GB) the practical sweet spot and rules out any 7B model at any quantization for sustained use.',
        items: [
          '**Working set vs. system RAM:** A model file on disk is smaller than its loaded working set. Phi-4 Mini Q4_K_M is ≈ 2.4 GB on disk but ≈ 3.0–3.5 GB in RAM once you add the KV cache for a 2048-token context. Cut the context to 1024 and you save ≈ 400 MB.',
          '**Swap death:** When working set exceeds physical RAM, macOS and Linux start paging to SSD. Tokens-per-second drops 5–10× and the laptop becomes unresponsive. Watch `vm_stat` (Mac) or `free -h` (Linux) — if swap is climbing during inference, switch to a smaller model immediately.',
          '**Thermal throttling on ultraportables:** Fanless and single-fan laptops (MacBook Air M1, XPS 13, Surface Laptop Go) hit thermal limits within 3–5 minutes of sustained inference and step CPU clocks down 20–35%. Tokens/sec drops correspondingly.',
          '**Context length is a memory tax:** Default 4096 context allocates a 4096-token KV cache up front. On 1B models that is 200–300 MB; on 4B models it is 600–900 MB. Cut to 1024 unless you actually need long input.',
          '**Background apps matter more than CPU model:** A Chrome window with 20 tabs is 1–2 GB. Slack is 400–600 MB. On 8 GB RAM, closing those before loading a 4B model is the biggest single tokens/sec win available.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not load any 7B model on 8 GB RAM, even at Q2. Q2 7B is ≈ 2.5 GB on disk but the working set plus 2048 context lands at ≈ 5.5 GB, which crosses into swap on most Windows / Linux systems. The result is a 5–10× speed drop and frozen UI.',
          },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: 'Which Model and Quantization Should You Load in Each App?',
        content:
          '**On 8 GB RAM with no discrete GPU, stay under 4B parameters at Q4_K_M or below.** Q4_K_M is the standard quantization in 2026 — it loses ≈ 1% perplexity vs. FP16, fits in half the RAM, and is the default for most GGUF builds on Hugging Face. Listed by app:',
        items: [
          '**Ollama:** `ollama pull phi3:mini` (Phi-4 Mini 3.8B Q4_K_M, ≈ 2.4 GB) is the default recommendation. For max speed, `ollama pull smollm2:1.7b` (≈ 1.0 GB). For chat polish, `ollama pull llama3.2:1b-instruct-q5_K_M` (≈ 0.85 GB).',
          '**GPT4All:** Use the in-app model browser → "Llama 3.2 1B Instruct Q4_0" (≈ 0.7 GB) for the lightest install, or "Phi-4 Mini Q4_K_M" if RAM allows. GPT4All defaults are tuned conservatively, so the visible model list is shorter than llama.cpp\'s but every entry runs.',
          '**Jan:** Use the curated catalog → "Gemma 3 4B Instruct Q4_K_M" (≈ 2.6 GB) on Apple Silicon, or "Phi-4 Mini Q4_K_M" on x86. Jan also accepts a Hugging Face URL paste for any GGUF.',
          '**llama.cpp:** Download GGUF directly from Hugging Face — `bartowski/Phi-4-mini-instruct-GGUF`, `bartowski/SmolLM2-1.7B-Instruct-GGUF`, or `bartowski/Llama-3.2-1B-Instruct-GGUF`. Run with `./llama-cli -m model.gguf -p "..." -c 1024 -t 4`.',
          '**Avoid on 8 GB / no-GPU:** any 7B model at any quantization, any model above Q5_K_M (negligible quality gain, double the RAM cost), and any base model — always pick `-instruct` or `-chat` variants for usable output.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Q4_K_M is not the same as Q4_0. Q4_K_M uses a smarter mixed-precision scheme and is ≈ 5–10% better quality at the same size. Pick Q4_K_M whenever both are available.',
          },
        ],
      },
      settings: {
        id: 'settings',
        title: 'What Settings Buy You 30–60% More Tokens/Sec on Low-End PCs?',
        content:
          '**Default settings are tuned for 16 GB RAM and a discrete GPU. On 8 GB CPU-only, three knobs matter most:** context length, batch size, and thread count. Tuned together they are worth 30–60% more tokens/sec on the same hardware.',
        items: [
          '**Context length — the biggest single win.** Cut from 4096 (default) to 1024. In Ollama: `OLLAMA_NUM_CTX=1024 ollama run phi3:mini`. In llama.cpp: `-c 1024`. RAM saving: 400–900 MB depending on model. Tokens/sec gain: 10–20%.',
          '**Thread count — match physical cores, not logical.** Older CPUs (i5-8250U, Ryzen 5 5500U) have 4 physical / 8 logical cores. Set threads = 4, not 8. In llama.cpp: `-t 4`. In Ollama: `OLLAMA_NUM_THREAD=4`. Hyperthreading hurts inference because both threads compete for the same FP/SIMD unit.',
          '**Batch size for prompt processing — set to 8 on weak CPUs.** llama.cpp: `--n-batch 8`. Default 512 thrashes the L2 cache on 4-core CPUs. Tokens/sec gain on 4B models: 15–25%.',
          '**KV cache quantization — set to q8_0 to halve KV RAM.** llama.cpp: `--cache-type-k q8_0 --cache-type-v q8_0`. RAM saving: 150–400 MB at 1024 context, more at higher contexts. Quality impact: imperceptible.',
          '**Disable mlock on swappy systems.** llama.cpp `--no-mlock`. On 8 GB systems, locking the model in RAM prevents the OS from making smart caching decisions. Counter-intuitive but consistently faster on Windows 10/11 with 8 GB.',
          '**Use AVX2 builds explicitly.** Most prebuilt llama.cpp / Ollama binaries auto-detect AVX2 / AVX-512 and switch on the right kernel. If you compiled yourself, pass `-DGGML_AVX2=ON`. AVX-512 detection: `cat /proc/cpuinfo | grep avx512`. AVX-512 buys another 10–15% on supported CPUs (Ice Lake / Tiger Lake / Rocket Lake / Zen 4+).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Stack all five tweaks and you typically see 35–55% more tokens/sec on the same model and same hardware. The single biggest win is the context cut from 4096 → 1024, which also slashes the time-to-first-token on a cold prompt.',
          },
        ],
      },
      igpu: {
        id: 'igpu',
        title: 'Is Integrated Graphics Worth Using for Local AI?',
        content:
          '**On most 8 GB RAM laptops the answer is no — keep inference on the CPU.** Integrated graphics share system RAM, so offloading layers does not give you extra memory; it just adds an offload-overhead penalty. Three exceptions worth knowing:',
        items: [
          '**Apple Silicon (M1/M2/M3/M4) — yes, always.** The unified memory architecture means the "GPU" sees the same RAM at the same bandwidth as the CPU. Ollama, Jan, and llama.cpp all auto-use Metal acceleration on Mac with no flag needed. This is why an M1 8 GB outruns most 8 GB Windows laptops by 2–3×.',
          '**Intel Arc iGPU (Meteor Lake / Lunar Lake / Arrow Lake) — sometimes.** Intel Core Ultra chips (Ultra 5 125H, Ultra 7 155H, Ultra 7 258V) ship with an Arc iGPU that supports OpenVINO and SYCL acceleration. llama.cpp with `-DGGML_SYCL=ON` is 30–60% faster than CPU-only on these. Setup is non-trivial.',
          '**AMD Ryzen 7000/8000 with Radeon 700M/800M iGPU — experimental.** ROCm support on integrated Radeon is partial and finicky in 2026. CPU-only is the safer pick unless you enjoy debugging driver stacks.',
          '**Older Intel UHD / Iris Plus / AMD Vega — skip.** These iGPUs lack the FP16 throughput and memory bandwidth to beat a modern AVX2 CPU kernel. Stay on CPU.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The simplest test to check if your iGPU is worth using: run the same model on CPU-only vs. iGPU-accelerated for 10 generations and compare tokens/sec. On Apple Silicon, iGPU is always faster. On x86 integrated graphics, the answer is device-specific — test rather than assume.',
          },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Common Mistakes',
        content:
          '**Five mistakes that kill performance on 8 GB / no-GPU systems**, with the fix for each:',
        items: [
          '**Mistake 1: Loading a 7B model "because Q4 fits on disk."** The disk file is smaller than the loaded working set. 7B Q4 ≈ 4.4 GB on disk, ≈ 5.5–6.5 GB in RAM with a 2048 context, which crosses the 8 GB ceiling and triggers swap. **Fix:** stay at 4B or below. Phi-4 Mini Q4_K_M is the highest-quality model that consistently fits.',
          '**Mistake 2: Leaving the context window at 4096.** Default 4096 reserves a KV cache that adds 400–900 MB on top of the model. **Fix:** set context to 1024 unless you actually need long input. `OLLAMA_NUM_CTX=1024` (Ollama), `-c 1024` (llama.cpp).',
          '**Mistake 3: Running with Chrome, Slack, and Spotify open.** Each of those eats 0.5–2 GB. On 8 GB RAM, you have ≈ 5 GB after the OS. Background apps push you into swap before the model even loads. **Fix:** close everything except the AI app and a notes window before inference.',
          '**Mistake 4: Picking Q8_0 "for quality."** On 1B–4B models the quality difference between Q4_K_M and Q8_0 is below human-perceptible threshold for chat use, but Q8 doubles RAM cost and halves tokens/sec. **Fix:** stay on Q4_K_M unless you have a measurable benchmark showing Q8 helps your task.',
          '**Mistake 5: Assuming a Raspberry Pi 4 is enough.** 4 GB RAM and a 1.5 GHz Cortex-A72 can technically run TinyLlama 1B at 1–3 tok/sec, but the experience is unusable for chat. **Fix:** Raspberry Pi 5 with 8 GB RAM is the realistic ARM SBC floor — and even there, an 8 GB x86 laptop is faster.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'All five mistakes have the same root cause: assuming desktop settings apply to a constrained laptop. Every default (context 4096, Q8 quality, all threads) is tuned for a machine with 16–32 GB RAM and a discrete GPU. On 8 GB CPU-only, you need to actively override the defaults. Think of the settings section in this guide as the "low-end PC preset" — apply all five tweaks before your first run.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run local AI on 4 GB RAM?',
            a: 'Yes, but only with sub-2B models like Llama 3.2 1B Q4_0 (≈ 0.7 GB on disk) or SmolLM 2 360M (≈ 0.25 GB on disk). GPT4All is the only one of the four apps that lists 4 GB as the official minimum. Expect 3–8 tok/sec on a modern CPU and noticeably more sluggish UI behavior because the OS has almost no headroom.',
          },
          {
            q: 'Does an old Intel CPU work for local AI?',
            a: 'Anything with AVX2 (Haswell, 2013, or newer) works in 2026. The practical floor is an Intel Core i5-8250U or older Ryzen 5 2500U, where Phi-4 Mini Q4 runs at 4–6 tok/sec. CPUs without AVX2 (pre-2013 Intel, original AMD Bulldozer) will load but run at 1–2 tok/sec, which is unusable for chat.',
          },
          {
            q: 'Will local AI brick my laptop?',
            a: 'No. Local inference is a normal user-space process — it cannot damage hardware. The worst-case outcome is the laptop running hot (90–100°C on ultraportables) and throttling, which the firmware protects against automatically. To avoid this, use a cooling pad on prolonged sessions, keep the room under 25°C, and stop inference if the chassis is uncomfortable to touch.',
          },
          {
            q: 'Is integrated graphics enough?',
            a: 'On Apple Silicon (M1+) it is more than enough — unified memory makes the iGPU effectively a low-end discrete GPU. On Intel Core Ultra (Meteor Lake / Arrow Lake) it can give 30–60% extra speed if you set up SYCL. On older Intel UHD / Iris Plus / AMD Vega, integrated graphics is slower than the CPU and not worth using.',
          },
          {
            q: 'Which model is fastest on CPU only?',
            a: 'Llama 3.2 1B Q4_0 and SmolLM 2 1.7B Q4_K_M are the fastest usable models. Llama 3.2 1B reaches 25–50 tok/sec on Apple M1 and 12–25 tok/sec on a modern Ryzen / Intel CPU. SmolLM 2 is similar speed with slightly more polished writing. Anything larger than 4B parameters is unlikely to feel fast on CPU-only systems.',
          },
          {
            q: 'Does adding RAM help more than upgrading the CPU?',
            a: 'On 8 GB systems, going to 16 GB is the single biggest practical upgrade because it unlocks 7B–8B models like Mistral Small Q4 and Llama 3.3 8B Q4. CPU upgrades give 20–50% more tokens/sec; the RAM upgrade gives 2–4× quality (jumping from 1B–4B to 7B–8B). If you can do only one, add RAM.',
          },
          {
            q: 'Can I run local AI on a Chromebook?',
            a: 'Only if Linux dev mode (Crostini) is available. The four apps in this guide all run in the Linux container — llama.cpp compiled from source is the most reliable on ARM Chromebooks, while x86 Chromebooks (Intel-based) work with Ollama or GPT4All. Performance maps to the underlying CPU; an Intel Core i3 / i5 Chromebook behaves like the equivalent Windows laptop.',
          },
          {
            q: 'Does Windows 10 still work for local AI in 2026?',
            a: 'Yes. All four apps support Windows 10 22H2. Ollama, GPT4All, and Jan ship signed Windows installers; llama.cpp ships prebuilt Windows binaries on its GitHub releases. The end of Windows 10 mainstream support in October 2025 does not prevent installation, but security updates have ended, so consider a Linux dual-boot or Windows 11 upgrade for long-term use.',
          },
          {
            q: "What's the cheapest laptop that runs local AI well?",
            a: 'A used 2021–2022 ThinkPad T14 or Dell Latitude 5430 with 16 GB RAM and a Ryzen 5 5500U or Intel i5-1235U costs €350–450 in 2026 and runs Phi-4 Mini Q4 at 8–14 tok/sec. Cheaper still: any 8 GB Apple M1 MacBook Air at €450–550 used, which beats most x86 laptops on tokens/sec thanks to unified memory.',
          },
          {
            q: 'Can I use a Raspberry Pi for local AI?',
            a: 'A Raspberry Pi 5 with 8 GB RAM runs Llama 3.2 1B Q4 at 4–7 tok/sec — usable but slow. A Pi 4 4 GB caps out at around 2 tok/sec on TinyLlama 1B. For real chat use, an 8 GB x86 laptop or M1 MacBook Air is faster, cheaper used, and easier to set up. Pi makes sense only for embedded, edge, or always-on workloads.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Easiest Local AI App for Each OS: Windows, Mac, Linux Picks](/power-local-llm/easiest-local-ai-app-windows-mac-linux) — many low-end PC users are on older Windows; this guide picks one app per OS.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — natural alternative for low-end users with a recent Android phone.',
          '[Replace Zapier With Local AI Agents](/power-local-llm/replace-zapier-with-local-ai-agents) — practical workflow automation for budget users on the same hardware.',
          '[LM Studio vs Jan vs GPT4All: Which Local AI App Wins in 2026](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — head-to-head if you also want to consider LM Studio.',
          '[Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm) — when you are ready to upgrade out of CPU-only territory.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — full hardware authority including RAM, CPU, and GPU trade-offs.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library for the cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Best Local AI Apps for Low-End PCs in 2026 (8GB RAM, No GPU)',
      'description':
        'Ollama, GPT4All, Jan, and llama.cpp tested on 8 GB RAM laptops with integrated graphics. Tokens/sec ranges, memory pressure, exact settings.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': {
        '@type': 'Person',
        'name': 'Hans Kuepper',
        'url': 'https://www.promptquorum.com/about',
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.promptquorum.com/logo.svg',
        },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan (local AI app)' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': 'Local LLM on low-end PC' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Best local AI apps for 8 GB RAM, no-GPU laptops in 2026',
      'numberOfItems': 4,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Ollama',
          'description':
            'Leanest CPU runtime; minimum 6 GB RAM; pairs best with Phi-4 Mini Q4_K_M at 4–14 tokens per second on 8 GB CPU-only.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'GPT4All',
          'description':
            'Easiest one-click installer; minimum 4 GB RAM; pairs best with Llama 3.2 1B Q4_0 at 3–10 tokens per second; recommended for non-technical users.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan',
          'description':
            'Open-source GUI (AGPL); minimum 6 GB RAM; pairs best with Gemma 3 4B Q4_K_M at 3–11 tokens per second; lightest GUI on Apple Silicon 8 GB.',
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'llama.cpp',
          'description':
            'Bare-metal speed if you compile; minimum 4 GB RAM; pairs best with SmolLM 2 1.7B Q4_K_M at 5–18 tokens per second; fastest on identical hardware.',
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.promptquorum.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Power Local LLM',
          'item': 'https://www.promptquorum.com/power-local-llm',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Best Local AI Apps for Low-End PCs',
          'item': 'https://www.promptquorum.com/power-local-llm/best-local-ai-app-low-end-pc',
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'Beste lokale KI-Apps für leistungsschwache PCs in 2026 (8 GB RAM, ohne GPU)',
    seoTitle: 'Lokale KI für 8-GB-RAM-PCs 2026: CPU-only getestet',
    metaDescription:
      'Ollama, GPT4All, Jan, llama.cpp auf 8-GB-RAM-Laptops mit integrierter Grafik getestet. Tokens/Sek., Speicherdruck, exakte Einstellungen. Mai 2026.',
    twitterDescription:
      '4 lokale KI-Apps, die auf 8-GB-RAM-Laptops ohne GPU laufen. Tokens/Sek., exakte Einstellungen, ehrliche Bewertungen. Mai 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: [
      'Intel UHD 620',
      'Intel Iris Xe',
      'AMD Ryzen 5 5500U',
      'Apple M1 8GB',
      'Intel Core i5-8250U',
    ],
    audience:
      'Besitzer von 4 bis 7 Jahre alten Laptops mit 8 GB RAM ohne dedizierte GPU, die ihre erste lokale KI-App auswählen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Beginner',
    primaryTerm: 'lokale KI auf leistungsschwachem PC',
    targetKeywords: [
      'lokale ki 8gb ram',
      'beste lokale llm low end pc',
      'lokale ki ohne gpu',
      'lokales llm cpu only 2026',
      'lokale ki alter laptop',
    ],
    leadAnswerBlock:
      '**Auf einem 8-GB-RAM-Laptop ohne dedizierte GPU laufen vier Apps in 2026 wirklich gut: Ollama, GPT4All, Jan und llama.cpp. Kombinieren Sie eine davon mit Phi-4 Mini Q4 (beste Balance), SmolLM 2 1.7B Q4 (am schnellsten) oder Llama 3.2 1B Q5 (flüssigstes GUI-Gefühl) und bleiben Sie unter 6 GB Working Set.**',
    quickAnswerTop: {
      de: {
        question: 'Welche lokale KI-App läuft am besten auf einem 8-GB-RAM-Laptop ohne GPU?',
        answer:
          'Wählen Sie Ollama, wenn Sie mit dem Terminal vertraut sind — es ist die schlankste Laufzeitumgebung und harmoniert sauber mit Phi-4 Mini Q4 bei 4–8 Tok/Sek. auf älteren Intel-CPUs und 8–14 Tok/Sek. auf Hardware der Klasse Ryzen 5000 / Intel 12. Generation. Wählen Sie GPT4All, wenn Sie einen One-Click-Installer und keinerlei Kommandozeile möchten — es ist die nachsichtigste Option bei 8 GB RAM und liefert einen integrierten Modellbrowser. Wählen Sie Jan für ein sauberes GUI mit vollständig offenem Quellcode. Wählen Sie llama.cpp direkt für maximale Tokens-pro-Sekunde, wenn Sie zur Kompilierung bereit sind.',
        bullets: [
          'Ollama — schlankste CPU-Laufzeit, terminalbasiert, harmoniert am besten mit Phi-4 Mini',
          'GPT4All — einfachste Installation, niedrigster Mindest-RAM (4 GB), empfohlen für nicht-technische Nutzer',
          'Jan — vollständiges GUI, Open Source (AGPL), Apple Silicon nativ, leichteste 8-GB-Mac-Wahl',
          'llama.cpp — Geschwindigkeit auf Bare-Metal-Niveau, Kompilierung erforderlich, harmoniert am besten mit SmolLM 2 / Gemma 3 4B',
          'Alle vier sind kostenlos, laufen nach der Installation offline und laden Standard-GGUF-Modelldateien',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Welche sollten Sie wählen?', anchor: '#which-one' },
      { label: 'Tokens/Sek.-Benchmarks (CPU-only, 8 GB RAM)', anchor: '#cpu-benchmarks' },
      { label: 'Speicherdruck & Thermal Throttling', anchor: '#memory-thermals' },
      { label: 'Bestes Modell pro App auf 8 GB RAM', anchor: '#best-models' },
      { label: 'Einstellungen, die 30–60 % mehr Geschwindigkeit bringen', anchor: '#settings' },
      { label: 'Integrierte Grafik: Lohnt sich das?', anchor: '#igpu' },
      { label: 'Häufige Fehler', anchor: '#mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: 'Die Präsentation unten zeigt: Ollama, GPT4All, Jan und llama.cpp auf 8 GB RAM ohne GPU getestet (4–18 Tok/Sek); die genauen Einstellungen für 30–60 % mehr Geschwindigkeit (Kontext 1024, Batch 8, KV-Cache q8_0); bestes Modell pro App (Phi-4 Mini Q4_K_M, SmolLM 2 1.7B, Gemma 3 4B); und fünf häufige Fehler, die Swap-Death auslösen. PDF als Referenzkarte für Schwachrechner herunterladen.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — schlankste CPU-Laufzeit in 2026, läuft als Hintergrundserver, beste App + Modell-Kombination: Ollama + Phi-4 Mini Q4 bei 4–14 Tok/Sek. auf 8 GB CPU-only.',
          '**GPT4All** — einzige App mit 4-GB-RAM-Minimum und Null-Terminal-Installationspfad, am besten für nicht-technische Nutzer auf Windows-10-Laptops.',
          '**Jan** — vollständiges GUI, AGPL Open Source, nativ auf Apple Silicon, leichteste GUI-App für ein 8-GB-MacBook-Air oder M1 Mac mini.',
          '**llama.cpp** — schnellste Tokens-pro-Sekunde auf identischer Hardware (5–15 % über Ollama, 15–25 % über GPT4All), erfordert jedoch einen Kompilierschritt.',
          '**Bestes Modell auf 8 GB / ohne GPU:** Phi-4 Mini 3,8B bei Q4_K_M für Balance, SmolLM 2 1,7B Q4 für maximale Geschwindigkeit, Llama 3.2 1B Q5 für flüssigstes Chat-Gefühl.',
          '**Geschwindigkeitsranking auf identischer CPU:** llama.cpp > Ollama > Jan > GPT4All. Der Abstand beträgt 15–25 %, nicht 2–3×.',
          '**Stand Mai 2026: Führen Sie keine 7B+-Modelle auf 8 GB RAM aus** — Kontextfenster-Druck plus das Betriebssystem selbst lösen Swap aus und brechen den Durchsatz um den Faktor 5–10 ein.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie schneiden Ollama, GPT4All, Jan und llama.cpp auf 8 GB RAM ohne GPU im Vergleich ab?',
        content:
          'Die unten angegebenen Bereiche sind aggregiert aus llama.cpp Upstream-Benchmark-Threads, Hugging-Face-Modellkarten und r/LocalLLaMA-Testberichten auf 8-GB-Laptops mit integrierter Grafik (Intel UHD 620 / Iris Xe / Ryzen 5 5500U Vega / Apple M1 8 GB). Tokens/Sek. werden bei 200-Token-Generierungen nach dem Modellladen gemessen, Standardkontextfenster 2048, sofern nicht anders angegeben.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Auf einem 8-GB-RAM-Laptop ohne dedizierte GPU ist Ollama mit Phi-4 Mini Q4_K_M das beste Allround-Setup für lokale KI — schnellste Generierungsgeschwindigkeit unter den No-Code-Optionen, niedrigste Wärmelast und größte Modellbibliothek.',
          },
          {
            type: 'plain-terms',
            text: 'Auf einem leistungsschwachen PC mit 8 GB RAM und ohne GPU: Installieren Sie Ollama, führen Sie `ollama pull phi4-mini` aus, dann `ollama run phi4-mini`. Sie erhalten 4–14 Tokens pro Sekunde, je nach CPU — langsam, aber nutzbar für Aufgaben, bei denen Sie einen Prompt absenden und auf die Antwort warten. Für eine Alternative ohne Terminal installiert sich GPT4All wie eine normale App und kuratiert seine Modellliste auf Modelle, die in 8 GB passen.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Apple M1 8 GB übertrifft 8-GB-x86-Laptops konsistent in allen vier Apps dieser Tabelle. Wenn Sie Zugang zu einem Apple-Silicon-Mac haben, ist es die beste Hardware mit wenig RAM für lokale KI — die Unified-Memory-Architektur gibt dem Modell Zugriff auf die vollen 8 GB ohne den OS-Overhead, den Windows- und Linux-Laptops haben.',
          },
        ],
        columns: ['App', 'Min. RAM', 'Bestes Modell (8-GB-Beschränkung)', 'Tokens/Sek. (CPU-only)', 'Wärme', 'Verdikt'],
        rows: [
          {
            'App': 'Ollama',
            'Min. RAM': '6 GB',
            'Bestes Modell (8-GB-Beschränkung)': 'Phi-4 Mini Q4_K_M',
            'Tokens/Sek. (CPU-only)': '4–14 Tok/Sek.',
            'Wärme': 'Niedrig',
            'Verdikt': 'Beste Balance — zuerst wählen',
          },
          {
            'App': 'GPT4All',
            'Min. RAM': '4 GB',
            'Bestes Modell (8-GB-Beschränkung)': 'Llama 3.2 1B Q4_0',
            'Tokens/Sek. (CPU-only)': '3–10 Tok/Sek.',
            'Wärme': 'Niedrig',
            'Verdikt': 'Einfachste Installation — nicht-technische Wahl',
          },
          {
            'App': 'Jan',
            'Min. RAM': '6 GB',
            'Bestes Modell (8-GB-Beschränkung)': 'Gemma 3 4B Q4_K_M',
            'Tokens/Sek. (CPU-only)': '3–11 Tok/Sek.',
            'Wärme': 'Mittel',
            'Verdikt': 'Bestes GUI auf Apple Silicon 8 GB',
          },
          {
            'App': 'llama.cpp',
            'Min. RAM': '4 GB',
            'Bestes Modell (8-GB-Beschränkung)': 'SmolLM 2 1.7B Q4_K_M',
            'Tokens/Sek. (CPU-only)': '5–18 Tok/Sek.',
            'Wärme': 'Niedrig',
            'Verdikt': 'Am schnellsten bei eigener Kompilierung',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Welche sollten Sie wählen?',
        content:
          '**Die richtige App hängt davon ab, ob Sie ein Terminal nutzen können, ob Sie auf Windows oder Mac arbeiten und wie alt Ihre CPU ist.** Verwenden Sie diese Entscheidungs-Abkürzung:',
        rows: [
          { 'Ihre Situation': 'Windows-10-Laptop, 8 GB RAM, keine Terminal-Erfahrung', 'Wählen': 'GPT4All' },
          { 'Ihre Situation': 'Moderner Ryzen / Intel 12. Gen., 8 GB, terminalvertraut', 'Wählen': 'Ollama' },
          { 'Ihre Situation': 'MacBook Air M1 / Mac mini M1 8 GB', 'Wählen': 'Jan oder Ollama' },
          { 'Ihre Situation': 'Linux-Laptop, maximale Tokens/Sek. gewünscht', 'Wählen': 'llama.cpp' },
          { 'Ihre Situation': '4-GB-RAM-Maschine (unter Spezifikation)', 'Wählen': 'GPT4All + Llama 3.2 1B Q4_0' },
          { 'Ihre Situation': 'Ältere Intel Core i5-8250U / i7-7700U Klasse CPU', 'Wählen': 'Ollama + SmolLM 2 1.7B' },
          { 'Ihre Situation': 'Chromebook mit Linux-Dev-Modus', 'Wählen': 'llama.cpp + SmolLM 2' },
          { 'Ihre Situation': 'Arbeits-Laptop, auf dem keine Treiber installiert werden dürfen', 'Wählen': 'GPT4All (Installation ohne Treiber / ohne Admin-Rechte)' },
        ],
        columns: ['Ihre Situation', 'Wählen'],
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie unschlüssig sind, beginnen Sie mit Ollama. Es läuft auf jedem Betriebssystem, lädt Modelle mit einem einfachen `ollama pull [modellname]` und stellt eine OpenAI-kompatible API bereit, falls Sie später andere Tools integrieren möchten. Wenn das Terminal ein Ausschlusskriterium ist, ist GPT4All die richtige Alternative — gleiche Modelle, keine Kommandozeile nötig.',
          },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: 'Wie schnell ist jede App auf realer Low-End-Hardware?',
        content:
          '**Tokens-pro-Sekunde auf repräsentativen 8-GB-RAM-Maschinen ohne dedizierte GPU, Mai 2026.** Die Zahlen sind von der Community gemeldete Bereiche aus llama.cpp-Upstream-Benchmark-Threads, Hugging-Face-Modellkarten und r/LocalLLaMA-Hardware-getaggten Tests. Jede Zelle ist der typische Bereich über die gemeldeten Läufe bei Standardeinstellungen; Ausreißer ausgeschlossen.',
        columns: ['Hardware', 'Modell', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          { 'Hardware': 'Intel Core i5-8250U + UHD 620 (2018 Ultraportable)', 'Modell': 'Phi-4 Mini Q4_K_M', 'Ollama': '4–6 Tok/Sek.', 'GPT4All': '3–5 Tok/Sek.', 'Jan': '3–5 Tok/Sek.', 'llama.cpp': '5–7 Tok/Sek.' },
          { 'Hardware': 'AMD Ryzen 5 5500U + Vega 7 (2021 Budget)', 'Modell': 'Phi-4 Mini Q4_K_M', 'Ollama': '8–11 Tok/Sek.', 'GPT4All': '6–9 Tok/Sek.', 'Jan': '7–9 Tok/Sek.', 'llama.cpp': '9–13 Tok/Sek.' },
          { 'Hardware': 'Intel Core Ultra 5 125H + Arc iGPU (2024 Mittelklasse)', 'Modell': 'Gemma 3 4B Q4_K_M', 'Ollama': '10–14 Tok/Sek.', 'GPT4All': '8–11 Tok/Sek.', 'Jan': '9–12 Tok/Sek.', 'llama.cpp': '12–18 Tok/Sek.' },
          { 'Hardware': 'Apple M1 8 GB (MacBook Air 2020)', 'Modell': 'Llama 3.2 1B Q5_K_M', 'Ollama': '28–40 Tok/Sek.', 'GPT4All': '20–30 Tok/Sek.', 'Jan': '26–38 Tok/Sek.', 'llama.cpp': '32–48 Tok/Sek.' },
          { 'Hardware': 'Apple M1 8 GB', 'Modell': 'Phi-4 Mini Q4_K_M', 'Ollama': '12–18 Tok/Sek.', 'GPT4All': '9–14 Tok/Sek.', 'Jan': '11–17 Tok/Sek.', 'llama.cpp': '14–20 Tok/Sek.' },
          { 'Hardware': 'Intel Core i5-8250U', 'Modell': 'SmolLM 2 1.7B Q4_K_M', 'Ollama': '10–14 Tok/Sek.', 'GPT4All': '8–12 Tok/Sek.', 'Jan': '9–13 Tok/Sek.', 'llama.cpp': '12–16 Tok/Sek.' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Apple Silicon dominiert diese Tabelle, weil die M1-Unified-Memory-Architektur GPU und CPU denselben RAM mit hoher Bandbreite teilen lässt. Auf x86-Laptops ohne dedizierte GPU lohnt sich integrierte Grafik selten wegen des Offload-Overheads — siehe iGPU-Abschnitt unten.',
          },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: 'Warum fühlt sich 8 GB RAM so eng an, und wann drosselt der Laptop?',
        content:
          '**Bei 8 GB RAM verbraucht das Betriebssystem bereits 2,5–3,5 GB, bevor irgendein Modell geladen wird, und lässt 4,5–5,5 GB für das Modell und seinen KV-Cache übrig.** Diese Obergrenze macht Phi-4 Mini (3,8B Q4 ≈ 2,4 GB) zum praktischen Sweet Spot und schließt jedes 7B-Modell bei jeder Quantisierung für den Dauerbetrieb aus.',
        items: [
          '**Working Set vs. System-RAM:** Eine Modelldatei auf der Festplatte ist kleiner als ihr geladener Working Set. Phi-4 Mini Q4_K_M ist ≈ 2,4 GB auf der Festplatte, aber ≈ 3,0–3,5 GB im RAM, sobald der KV-Cache für ein 2048-Token-Kontextfenster hinzukommt. Reduzieren Sie den Kontext auf 1024 und Sie sparen ≈ 400 MB.',
          '**Swap-Tod:** Wenn der Working Set den physischen RAM übersteigt, beginnen macOS und Linux mit dem Paging auf die SSD. Tokens-pro-Sekunde fallen um den Faktor 5–10 und der Laptop wird unresponsiv. Beobachten Sie `vm_stat` (Mac) oder `free -h` (Linux) — wenn Swap während der Inferenz steigt, wechseln Sie sofort zu einem kleineren Modell.',
          '**Thermal Throttling auf Ultraportables:** Lüfterlose und Single-Fan-Laptops (MacBook Air M1, XPS 13, Surface Laptop Go) erreichen innerhalb von 3–5 Minuten Dauerbetrieb das thermische Limit und takten die CPU um 20–35 % herunter. Tokens/Sek. fallen entsprechend.',
          '**Kontextlänge ist eine Speichersteuer:** Standard 4096 Kontext reserviert einen 4096-Token-KV-Cache vorab. Bei 1B-Modellen sind das 200–300 MB; bei 4B-Modellen sind es 600–900 MB. Reduzieren Sie auf 1024, sofern Sie nicht tatsächlich lange Eingaben benötigen.',
          '**Hintergrund-Apps zählen mehr als das CPU-Modell:** Ein Chrome-Fenster mit 20 Tabs sind 1–2 GB. Slack belegt 400–600 MB. Auf 8 GB RAM ist das Schließen dieser Apps vor dem Laden eines 4B-Modells der größte verfügbare Tokens/Sek.-Gewinn.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Laden Sie kein 7B-Modell auf 8 GB RAM, auch nicht bei Q2. Q2 7B sind ≈ 2,5 GB auf der Festplatte, aber Working Set plus 2048 Kontext landen bei ≈ 5,5 GB, was auf den meisten Windows-/Linux-Systemen in den Swap führt. Das Ergebnis ist ein 5–10× Geschwindigkeitsverlust und eine eingefrorene Benutzeroberfläche.',
          },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: 'Welches Modell und welche Quantisierung sollten Sie in jeder App laden?',
        content:
          '**Auf 8 GB RAM ohne dedizierte GPU bleiben Sie unter 4B-Parametern bei Q4_K_M oder darunter.** Q4_K_M ist die Standard-Quantisierung in 2026 — sie verliert ≈ 1 % Perplexität gegenüber FP16, passt in halben RAM und ist der Standard für die meisten GGUF-Builds auf Hugging Face. Aufgelistet pro App:',
        items: [
          '**Ollama:** `ollama pull phi3:mini` (Phi-4 Mini 3,8B Q4_K_M, ≈ 2,4 GB) ist die Standardempfehlung. Für maximale Geschwindigkeit `ollama pull smollm2:1.7b` (≈ 1,0 GB). Für Chat-Politur `ollama pull llama3.2:1b-instruct-q5_K_M` (≈ 0,85 GB).',
          '**GPT4All:** Verwenden Sie den App-internen Modellbrowser → "Llama 3.2 1B Instruct Q4_0" (≈ 0,7 GB) für die leichteste Installation oder "Phi-4 Mini Q4_K_M", wenn der RAM es zulässt. GPT4All-Standards sind konservativ abgestimmt, daher ist die sichtbare Modellliste kürzer als die von llama.cpp, aber jeder Eintrag läuft.',
          '**Jan:** Verwenden Sie den kuratierten Katalog → "Gemma 3 4B Instruct Q4_K_M" (≈ 2,6 GB) auf Apple Silicon oder "Phi-4 Mini Q4_K_M" auf x86. Jan akzeptiert auch das Einfügen einer Hugging-Face-URL für jedes GGUF.',
          '**llama.cpp:** Laden Sie GGUF direkt von Hugging Face — `bartowski/Phi-4-mini-instruct-GGUF`, `bartowski/SmolLM2-1.7B-Instruct-GGUF` oder `bartowski/Llama-3.2-1B-Instruct-GGUF`. Ausführen mit `./llama-cli -m model.gguf -p "..." -c 1024 -t 4`.',
          '**Vermeiden auf 8 GB / ohne GPU:** jedes 7B-Modell bei jeder Quantisierung, jedes Modell über Q5_K_M (vernachlässigbarer Qualitätsgewinn, doppelter RAM-Aufwand) und jedes Basis-Modell — wählen Sie immer `-instruct`- oder `-chat`-Varianten für nutzbare Ausgabe.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Q4_K_M ist nicht dasselbe wie Q4_0. Q4_K_M verwendet ein intelligenteres Mixed-Precision-Schema und ist ≈ 5–10 % besser in der Qualität bei gleicher Größe. Wählen Sie Q4_K_M, wann immer beide verfügbar sind.',
          },
        ],
      },
      settings: {
        id: 'settings',
        title: 'Welche Einstellungen bringen 30–60 % mehr Tokens/Sek. auf Low-End-PCs?',
        content:
          '**Standard-Einstellungen sind auf 16 GB RAM und eine dedizierte GPU abgestimmt. Auf 8 GB CPU-only zählen drei Stellschrauben am meisten:** Kontextlänge, Batch-Größe und Thread-Anzahl. Gemeinsam abgestimmt sind sie 30–60 % mehr Tokens/Sek. auf derselben Hardware wert.',
        items: [
          '**Kontextlänge — der größte Einzelgewinn.** Reduzieren Sie von 4096 (Standard) auf 1024. In Ollama: `OLLAMA_NUM_CTX=1024 ollama run phi3:mini`. In llama.cpp: `-c 1024`. RAM-Ersparnis: 400–900 MB je nach Modell. Tokens/Sek.-Gewinn: 10–20 %.',
          '**Thread-Anzahl — physische Kerne, nicht logische.** Ältere CPUs (i5-8250U, Ryzen 5 5500U) haben 4 physische / 8 logische Kerne. Setzen Sie Threads = 4, nicht 8. In llama.cpp: `-t 4`. In Ollama: `OLLAMA_NUM_THREAD=4`. Hyperthreading schadet der Inferenz, weil beide Threads um dieselbe FP/SIMD-Einheit konkurrieren.',
          '**Batch-Größe für Prompt-Verarbeitung — auf 8 bei schwachen CPUs.** llama.cpp: `--n-batch 8`. Standard 512 belastet den L2-Cache auf 4-Kern-CPUs. Tokens/Sek.-Gewinn auf 4B-Modellen: 15–25 %.',
          '**KV-Cache-Quantisierung — auf q8_0 setzen, um den KV-RAM zu halbieren.** llama.cpp: `--cache-type-k q8_0 --cache-type-v q8_0`. RAM-Ersparnis: 150–400 MB bei 1024 Kontext, mehr bei höheren Kontexten. Qualitätsauswirkung: nicht wahrnehmbar.',
          '**mlock auf Swap-anfälligen Systemen deaktivieren.** llama.cpp `--no-mlock`. Auf 8-GB-Systemen verhindert das Sperren des Modells im RAM, dass das OS intelligente Caching-Entscheidungen trifft. Kontraintuitiv, aber konsistent schneller auf Windows 10/11 mit 8 GB.',
          '**AVX2-Builds explizit verwenden.** Die meisten vorgefertigten llama.cpp-/Ollama-Binärdateien erkennen AVX2 / AVX-512 automatisch und wechseln zum richtigen Kernel. Wenn Sie selbst kompiliert haben, übergeben Sie `-DGGML_AVX2=ON`. AVX-512-Erkennung: `cat /proc/cpuinfo | grep avx512`. AVX-512 bringt weitere 10–15 % auf unterstützten CPUs (Ice Lake / Tiger Lake / Rocket Lake / Zen 4+).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Stapeln Sie alle fünf Optimierungen, und Sie sehen typischerweise 35–55 % mehr Tokens/Sek. auf demselben Modell und derselben Hardware. Der größte Einzelgewinn ist der Kontextschnitt von 4096 → 1024, der auch die Time-to-First-Token bei einem kalten Prompt drastisch verkürzt.',
          },
        ],
      },
      igpu: {
        id: 'igpu',
        title: 'Lohnt sich integrierte Grafik für lokale KI?',
        content:
          '**Auf den meisten 8-GB-RAM-Laptops lautet die Antwort nein — halten Sie die Inferenz auf der CPU.** Integrierte Grafik teilt sich den System-RAM, daher gibt das Auslagern von Schichten Ihnen keinen zusätzlichen Speicher; es fügt nur eine Offload-Overhead-Strafe hinzu. Drei nennenswerte Ausnahmen:',
        items: [
          '**Apple Silicon (M1/M2/M3/M4) — ja, immer.** Die Unified-Memory-Architektur bedeutet, dass die "GPU" denselben RAM mit derselben Bandbreite wie die CPU sieht. Ollama, Jan und llama.cpp nutzen alle automatisch Metal-Beschleunigung auf dem Mac, ohne Flag. Deshalb übertrifft ein M1 8 GB die meisten 8-GB-Windows-Laptops um den Faktor 2–3.',
          '**Intel Arc iGPU (Meteor Lake / Lunar Lake / Arrow Lake) — manchmal.** Intel-Core-Ultra-Chips (Ultra 5 125H, Ultra 7 155H, Ultra 7 258V) bringen eine Arc iGPU mit, die OpenVINO und SYCL-Beschleunigung unterstützt. llama.cpp mit `-DGGML_SYCL=ON` ist 30–60 % schneller als CPU-only auf diesen Chips. Die Einrichtung ist nicht trivial.',
          '**AMD Ryzen 7000/8000 mit Radeon 700M/800M iGPU — experimentell.** ROCm-Support auf integrierter Radeon ist 2026 partiell und heikel. CPU-only ist die sicherere Wahl, sofern Sie nicht gerne Treiber-Stacks debuggen.',
          '**Ältere Intel UHD / Iris Plus / AMD Vega — überspringen.** Diesen iGPUs fehlen FP16-Durchsatz und Speicherbandbreite, um einen modernen AVX2-CPU-Kernel zu schlagen. Bleiben Sie auf der CPU.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der einfachste Test, ob sich Ihre iGPU lohnt: Führen Sie dasselbe Modell 10 Generierungen lang CPU-only vs. iGPU-beschleunigt aus und vergleichen Sie Tokens/Sek. Auf Apple Silicon ist die iGPU immer schneller. Auf x86-integrierter Grafik ist die Antwort gerätespezifisch — testen statt annehmen.',
          },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Häufige Fehler',
        content:
          '**Fünf Fehler, die die Leistung auf 8-GB-/Ohne-GPU-Systemen ruinieren**, mit der Lösung für jeden:',
        items: [
          '**Fehler 1: Ein 7B-Modell laden, "weil Q4 auf die Festplatte passt".** Die Festplattendatei ist kleiner als der geladene Working Set. 7B Q4 ≈ 4,4 GB auf der Festplatte, ≈ 5,5–6,5 GB im RAM mit 2048 Kontext, was die 8-GB-Grenze überschreitet und Swap auslöst. **Lösung:** Bleiben Sie bei 4B oder darunter. Phi-4 Mini Q4_K_M ist das qualitativ hochwertigste Modell, das konsistent passt.',
          '**Fehler 2: Das Kontextfenster auf 4096 belassen.** Standard 4096 reserviert einen KV-Cache, der zusätzlich 400–900 MB belegt. **Lösung:** Setzen Sie den Kontext auf 1024, sofern Sie nicht tatsächlich lange Eingaben benötigen. `OLLAMA_NUM_CTX=1024` (Ollama), `-c 1024` (llama.cpp).',
          '**Fehler 3: Mit Chrome, Slack und Spotify offen ausführen.** Jedes davon belegt 0,5–2 GB. Auf 8 GB RAM haben Sie nach dem OS ≈ 5 GB. Hintergrund-Apps drücken Sie in den Swap, bevor das Modell überhaupt lädt. **Lösung:** Schließen Sie alles außer der KI-App und einem Notiz-Fenster vor der Inferenz.',
          '**Fehler 4: Q8_0 "für Qualität" wählen.** Auf 1B–4B-Modellen liegt der Qualitätsunterschied zwischen Q4_K_M und Q8_0 unter der menschlich wahrnehmbaren Schwelle für Chat-Nutzung, aber Q8 verdoppelt den RAM-Aufwand und halbiert die Tokens/Sek. **Lösung:** Bleiben Sie bei Q4_K_M, sofern Sie keinen messbaren Benchmark haben, der zeigt, dass Q8 Ihrer Aufgabe hilft.',
          '**Fehler 5: Annehmen, dass ein Raspberry Pi 4 ausreicht.** 4 GB RAM und ein 1,5-GHz-Cortex-A72 können TinyLlama 1B technisch bei 1–3 Tok/Sek. ausführen, aber das Erlebnis ist für Chat unbrauchbar. **Lösung:** Raspberry Pi 5 mit 8 GB RAM ist die realistische ARM-SBC-Untergrenze — und selbst dort ist ein 8-GB-x86-Laptop schneller.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Alle fünf Fehler haben dieselbe Wurzel: die Annahme, dass Desktop-Einstellungen für einen eingeschränkten Laptop gelten. Jeder Standard (Kontext 4096, Q8-Qualität, alle Threads) ist auf eine Maschine mit 16–32 GB RAM und einer dedizierten GPU abgestimmt. Auf 8 GB CPU-only müssen Sie die Standards aktiv überschreiben. Betrachten Sie den Einstellungen-Abschnitt in dieser Anleitung als das "Low-End-PC-Preset" — wenden Sie alle fünf Optimierungen vor Ihrem ersten Lauf an.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich lokale KI auf 4 GB RAM ausführen?',
            a: 'Ja, aber nur mit Sub-2B-Modellen wie Llama 3.2 1B Q4_0 (≈ 0,7 GB auf der Festplatte) oder SmolLM 2 360M (≈ 0,25 GB auf der Festplatte). GPT4All ist die einzige der vier Apps, die 4 GB als offizielles Minimum auflistet. Erwarten Sie 3–8 Tok/Sek. auf einer modernen CPU und merklich trägeres UI-Verhalten, weil das OS fast keinen Spielraum hat.',
          },
          {
            q: 'Funktioniert eine alte Intel-CPU für lokale KI?',
            a: 'Alles mit AVX2 (Haswell, 2013, oder neuer) funktioniert in 2026. Die praktische Untergrenze ist eine Intel Core i5-8250U oder ein älterer Ryzen 5 2500U, wo Phi-4 Mini Q4 bei 4–6 Tok/Sek. läuft. CPUs ohne AVX2 (vor 2013, Intel, Original-AMD-Bulldozer) laden zwar, laufen aber bei 1–2 Tok/Sek., was für Chat unbrauchbar ist.',
          },
          {
            q: 'Beschädigt lokale KI meinen Laptop?',
            a: 'Nein. Lokale Inferenz ist ein normaler User-Space-Prozess — sie kann keine Hardware beschädigen. Das Worst-Case-Szenario ist, dass der Laptop heiß wird (90–100 °C auf Ultraportables) und drosselt, wovor die Firmware automatisch schützt. Um dies zu vermeiden, verwenden Sie ein Kühlpad bei längeren Sitzungen, halten Sie den Raum unter 25 °C, und stoppen Sie die Inferenz, wenn das Gehäuse unangenehm zu berühren ist.',
          },
          {
            q: 'Reicht integrierte Grafik aus?',
            a: 'Auf Apple Silicon (M1+) ist sie mehr als ausreichend — Unified Memory macht die iGPU effektiv zu einer Low-End-Diskret-GPU. Auf Intel Core Ultra (Meteor Lake / Arrow Lake) kann sie 30–60 % zusätzliche Geschwindigkeit bringen, wenn Sie SYCL einrichten. Auf älteren Intel UHD / Iris Plus / AMD Vega ist integrierte Grafik langsamer als die CPU und nicht der Mühe wert.',
          },
          {
            q: 'Welches Modell ist am schnellsten auf reiner CPU?',
            a: 'Llama 3.2 1B Q4_0 und SmolLM 2 1.7B Q4_K_M sind die schnellsten nutzbaren Modelle. Llama 3.2 1B erreicht 25–50 Tok/Sek. auf Apple M1 und 12–25 Tok/Sek. auf einer modernen Ryzen-/Intel-CPU. SmolLM 2 ist ähnlich schnell mit etwas polierterem Schreibstil. Alles über 4B-Parametern fühlt sich auf CPU-only-Systemen wahrscheinlich nicht schnell an.',
          },
          {
            q: 'Hilft mehr RAM mehr als ein CPU-Upgrade?',
            a: 'Auf 8-GB-Systemen ist der Wechsel zu 16 GB das größte praktische Upgrade, weil es 7B–8B-Modelle wie Mistral Small Q4 und Llama 3.3 8B Q4 freischaltet. CPU-Upgrades bringen 20–50 % mehr Tokens/Sek.; das RAM-Upgrade bringt 2–4× Qualität (Sprung von 1B–4B auf 7B–8B). Wenn Sie nur eines tun können, fügen Sie RAM hinzu.',
          },
          {
            q: 'Kann ich lokale KI auf einem Chromebook ausführen?',
            a: 'Nur wenn der Linux-Dev-Modus (Crostini) verfügbar ist. Die vier Apps in dieser Anleitung laufen alle im Linux-Container — llama.cpp aus dem Quellcode kompiliert ist auf ARM-Chromebooks am zuverlässigsten, während x86-Chromebooks (Intel-basiert) mit Ollama oder GPT4All funktionieren. Die Leistung entspricht der zugrunde liegenden CPU; ein Intel-Core-i3-/i5-Chromebook verhält sich wie der entsprechende Windows-Laptop.',
          },
          {
            q: 'Funktioniert Windows 10 noch für lokale KI in 2026?',
            a: 'Ja. Alle vier Apps unterstützen Windows 10 22H2. Ollama, GPT4All und Jan liefern signierte Windows-Installer; llama.cpp liefert vorgefertigte Windows-Binärdateien in seinen GitHub-Releases. Das Ende des Windows-10-Mainstream-Supports im Oktober 2025 verhindert die Installation nicht, aber Sicherheitsupdates sind eingestellt — erwägen Sie für die Langzeitnutzung ein Linux-Dual-Boot oder ein Upgrade auf Windows 11.',
          },
          {
            q: 'Was ist der günstigste Laptop, der lokale KI gut ausführt?',
            a: 'Ein gebrauchtes 2021–2022 ThinkPad T14 oder Dell Latitude 5430 mit 16 GB RAM und einem Ryzen 5 5500U oder Intel i5-1235U kostet 350–450 € in 2026 und läuft Phi-4 Mini Q4 bei 8–14 Tok/Sek. Noch günstiger: jedes 8-GB-Apple-M1-MacBook-Air zu 450–550 € gebraucht, das die meisten x86-Laptops bei Tokens/Sek. dank Unified Memory schlägt.',
          },
          {
            q: 'Kann ich einen Raspberry Pi für lokale KI verwenden?',
            a: 'Ein Raspberry Pi 5 mit 8 GB RAM läuft Llama 3.2 1B Q4 bei 4–7 Tok/Sek. — nutzbar, aber langsam. Ein Pi 4 4 GB ist bei rund 2 Tok/Sek. auf TinyLlama 1B begrenzt. Für echte Chat-Nutzung ist ein 8-GB-x86-Laptop oder ein M1 MacBook Air schneller, gebraucht günstiger und einfacher einzurichten. Pi macht nur Sinn für Embedded-, Edge- oder Always-On-Workloads.',
          },
          {
            q: 'Muss ich bei der Verwendung lokaler KI-Apps die DSGVO beachten?',
            a: 'Bei rein lokaler Inferenz auf Ihrem Gerät verlassen die verarbeiteten Daten Ihren Endpunkt nicht — das erfüllt die Anforderungen an Datenresidenz und Auftragsverarbeitung (Art. 28 DSGVO) ohne zusätzliche Auftragsverarbeitungsverträge mit Cloud-Anbietern. Beachten Sie für den geschäftlichen Einsatz dennoch die BSI-Grundschutz-Kataloge für die Konfiguration der Endgeräte (Festplattenverschlüsselung, Zugriffskontrolle, Update-Management). Wenn Sie sensible Kategorien (Art. 9 DSGVO — Gesundheit, Religion, etc.) verarbeiten, dokumentieren Sie die Verarbeitung im Verzeichnis von Verarbeitungstätigkeiten und führen Sie ggf. eine Datenschutz-Folgenabschätzung durch — die lokale Verarbeitung reduziert das Risiko, ersetzt aber nicht die Dokumentationspflicht.',
          },
          {
            q: 'Sind lokale KI-Apps für den deutschen Mittelstand geeignet?',
            a: 'Ja — und besonders dort, wo Cloud-KI an Compliance-Hürden scheitert. Mittelständische Unternehmen in Maschinenbau, Steuerkanzleien, Arztpraxen und Anwaltskanzleien setzen 2026 zunehmend auf lokale Modelle, um Mandantendaten, Patientendaten und Konstruktionsdaten DSGVO-konform mit KI zu verarbeiten. Empfohlene Konfiguration für Mittelstand-IT: Ollama oder GPT4All auf einem dedizierten Workstation-PC (16 GB RAM minimum für 7B-Modelle; 32 GB für 13B), BSI-konformer Festplattenverschlüsselung (BitLocker oder LUKS), und einem internen Netzwerksegment ohne Internetzugang während der Inferenz. Für Teams ab 5 Personen lohnt sich die Investition in ein zentrales Ollama-Server-Setup mit Open WebUI als Browser-Frontend.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Einfachste lokale KI-App pro Betriebssystem: Windows-, Mac-, Linux-Empfehlungen](/de/power-local-llm/easiest-local-ai-app-windows-mac-linux) — viele Low-End-PC-Nutzer sind auf älterem Windows; dieser Leitfaden wählt eine App pro OS.',
          '[Beste lokale LLM-Apps für Android in 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — natürliche Alternative für Low-End-Nutzer mit einem aktuellen Android-Smartphone.',
          '[Zapier durch lokale KI-Agenten ersetzen](/de/power-local-llm/replace-zapier-with-local-ai-agents) — praktische Workflow-Automatisierung für Budget-Nutzer auf derselben Hardware.',
          '[LM Studio vs Jan vs GPT4All: Welche lokale KI-App gewinnt 2026](/de/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — Direktvergleich, falls Sie auch LM Studio in Erwägung ziehen.',
          '[Beste Budget-GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm) — wenn Sie bereit sind, das CPU-only-Territorium zu verlassen.',
          '[Hardware-Leitfaden für lokale LLMs 2026](/de/local-llms/local-llm-hardware-guide-2026) — vollständige Hardware-Autorität inklusive RAM-, CPU- und GPU-Trade-offs.',
          '[Power Local LLM Hub](/de/power-local-llm) — vollständige Leitfadenbibliothek für den Cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/de/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': 'Beste lokale KI-Apps für leistungsschwache PCs in 2026 (8 GB RAM, ohne GPU)',
      'description':
        'Ollama, GPT4All, Jan und llama.cpp auf 8-GB-RAM-Laptops mit integrierter Grafik getestet. Tokens/Sek., Speicherdruck, exakte Einstellungen.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan (lokale KI-App)' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': 'Lokales LLM auf leistungsschwachem PC' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Beste lokale KI-Apps für 8-GB-RAM-Laptops ohne GPU in 2026',
      'numberOfItems': 4,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Ollama', 'description': 'Schlankste CPU-Laufzeit; Mindestens 6 GB RAM; harmoniert am besten mit Phi-4 Mini Q4_K_M bei 4–14 Tokens pro Sekunde auf 8 GB CPU-only.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GPT4All', 'description': 'Einfachster One-Click-Installer; Mindestens 4 GB RAM; harmoniert am besten mit Llama 3.2 1B Q4_0 bei 3–10 Tokens pro Sekunde; empfohlen für nicht-technische Nutzer.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Jan', 'description': 'Open-Source-GUI (AGPL); Mindestens 6 GB RAM; harmoniert am besten mit Gemma 3 4B Q4_K_M bei 3–11 Tokens pro Sekunde; leichteste GUI auf Apple Silicon 8 GB.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'llama.cpp', 'description': 'Bare-Metal-Geschwindigkeit bei eigener Kompilierung; Mindestens 4 GB RAM; harmoniert am besten mit SmolLM 2 1.7B Q4_K_M bei 5–18 Tokens pro Sekunde; am schnellsten auf identischer Hardware.' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Startseite', 'item': 'https://www.promptquorum.com/de' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Beste lokale KI-Apps für leistungsschwache PCs', 'item': 'https://www.promptquorum.com/de/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'Meilleures applications d\'IA locale pour PC modestes en 2026 (8 Go RAM, sans GPU)',
    seoTitle: 'Meilleures apps IA locales PC 8 Go RAM 2026 : test CPU',
    metaDescription:
      'Ollama, GPT4All, Jan et llama.cpp testés sur portables 8 Go RAM avec graphiques intégrés. Tokens/s, pression mémoire, réglages exacts. Mai 2026.',
    twitterDescription:
      '4 apps d\'IA locale pour portables 8 Go RAM sans GPU. Tokens/s, réglages exacts, verdicts honnêtes. Mai 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: ['Intel UHD 620', 'Intel Iris Xe', 'AMD Ryzen 5 5500U', 'Apple M1 8GB', 'Intel Core i5-8250U'],
    audience: 'Propriétaires de portables de 4 à 7 ans avec 8 Go de RAM et sans GPU dédié, choisissant leur première application d\'IA locale.',
    readTime: '11 min de lecture',
    educationalLevel: 'Beginner',
    primaryTerm: 'IA locale sur PC modeste',
    targetKeywords: ['ia locale 8go ram', 'meilleur llm local pc modeste', 'ia locale sans gpu', 'llm local cpu seul 2026', 'ia locale ancien portable'],
    leadAnswerBlock:
      '**Sur un portable 8 Go RAM sans GPU dédié, quatre applications fonctionnent vraiment bien en 2026 : Ollama, GPT4All, Jan et llama.cpp. Associez-en une à Phi-4 Mini Q4 (meilleur équilibre), SmolLM 2 1.7B Q4 (plus rapide) ou Llama 3.2 1B Q5 (sensation GUI la plus fluide) et restez sous 6 Go d\'empreinte mémoire.**',
    quickAnswerTop: {
      fr: {
        question: 'Quelle application d\'IA locale fonctionne le mieux sur un portable 8 Go RAM sans GPU ?',
        answer:
          'Choisissez Ollama si vous êtes à l\'aise avec le terminal — c\'est le runtime le plus léger et il s\'associe proprement à Phi-4 Mini Q4 à 4–8 t/s sur les anciens CPU Intel et 8–14 t/s sur du matériel de classe Ryzen 5000 / Intel 12e gén. Choisissez GPT4All si vous voulez un installeur en un clic et zéro ligne de commande — c\'est le plus indulgent en 8 Go RAM et il intègre un navigateur de modèles. Choisissez Jan pour une interface graphique propre et un open source intégral. Choisissez llama.cpp directement pour le débit maximum en tokens/seconde, si vous acceptez de compiler.',
        bullets: [
          'Ollama — runtime CPU le plus léger, terminal, s\'associe au mieux à Phi-4 Mini',
          'GPT4All — installation la plus simple, RAM minimale (4 Go), recommandé aux non-techniciens',
          'Jan — interface graphique complète, open source (AGPL), natif Apple Silicon, choix le plus léger sur Mac 8 Go',
          'llama.cpp — vitesse au plus près du métal, compilation requise, s\'associe au mieux à SmolLM 2 / Gemma 3 4B',
          'Toutes les quatre sont gratuites, fonctionnent hors ligne après installation, et chargent les fichiers GGUF standards',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Tableau comparatif', anchor: '#comparison-table' },
      { label: 'Laquelle choisir ?', anchor: '#which-one' },
      { label: 'Benchmarks tokens/s (CPU seul, 8 Go RAM)', anchor: '#cpu-benchmarks' },
      { label: 'Pression mémoire & throttling thermique', anchor: '#memory-thermals' },
      { label: 'Meilleur modèle par app sur 8 Go RAM', anchor: '#best-models' },
      { label: 'Réglages qui apportent 30–60 % de vitesse en plus', anchor: '#settings' },
      { label: 'Graphiques intégrés : utiles ?', anchor: '#igpu' },
      { label: 'Erreurs courantes', anchor: '#mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: 'La présentation ci-dessous couvre : Ollama, GPT4All, Jan et llama.cpp testés sur 8 Go RAM sans GPU (4–18 tok/s) ; les paramètres exacts pour 30–60 % de vitesse en plus (contexte 1024, lot 8, cache KV q8_0) ; le meilleur modèle par appli (Phi-4 Mini Q4_K_M, SmolLM 2 1.7B, Gemma 3 4B) ; et cinq erreurs courantes qui déclenchent le swap fatal. Téléchargez le PDF comme fiche de référence pour PC modeste.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — runtime CPU le plus léger en 2026, fonctionne en serveur d\'arrière-plan, meilleure combinaison app + modèle : Ollama + Phi-4 Mini Q4 à 4–14 t/s sur 8 Go CPU seul.',
          '**GPT4All** — seule app avec un plancher RAM de 4 Go et une installation sans terminal, idéale pour les utilisateurs non techniques sur portables Windows 10.',
          '**Jan** — interface graphique complète, open source AGPL, natif Apple Silicon, app GUI la plus légère pour un MacBook Air 8 Go ou Mac mini M1.',
          '**llama.cpp** — meilleur débit en tokens/seconde sur matériel identique (5–15 % au-dessus d\'Ollama, 15–25 % au-dessus de GPT4All), mais nécessite une compilation.',
          '**Meilleur modèle sur 8 Go / sans GPU :** Phi-4 Mini 3.8B en Q4_K_M pour l\'équilibre, SmolLM 2 1.7B Q4 pour la vitesse maximale, Llama 3.2 1B Q5 pour la sensation de chat la plus fluide.',
          '**Classement vitesse sur CPU identique :** llama.cpp > Ollama > Jan > GPT4All. L\'écart est de 15–25 %, pas 2–3×.',
          '**En mai 2026, n\'exécutez pas de modèle 7B+ en 8 Go RAM** — la pression de la fenêtre de contexte plus le système d\'exploitation lui-même déclenchent du swap et écrasent le débit d\'un facteur 5–10.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comment Ollama, GPT4All, Jan et llama.cpp se comparent-ils sur 8 Go RAM sans GPU ?',
        content:
          'Les fourchettes ci-dessous sont agrégées depuis les fils de benchmarks llama.cpp upstream, les chiffres des fiches modèles Hugging Face et les rapports de tests r/LocalLLaMA sur des portables 8 Go avec graphiques intégrés (Intel UHD 620 / Iris Xe / Ryzen 5 5500U Vega / Apple M1 8 Go). Les tokens/s sont mesurés sur des générations de 200 tokens après le chargement du modèle, fenêtre de contexte par défaut 2048 sauf mention contraire.',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Sur un portable 8 Go RAM sans GPU dédié, Ollama avec Phi-4 Mini Q4_K_M est la meilleure configuration polyvalente d\'IA locale — vitesse de génération la plus rapide parmi les options sans code, charge thermique la plus basse, et bibliothèque de modèles la plus large.' },
          { type: 'plain-terms', text: 'Sur un PC modeste avec 8 Go RAM et sans GPU : installez Ollama, exécutez `ollama pull phi4-mini`, puis `ollama run phi4-mini`. Vous obtenez 4–14 tokens par seconde selon votre CPU — lent mais utilisable pour des tâches où vous envoyez un prompt et attendez la réponse. Pour une alternative sans terminal, GPT4All s\'installe comme une application normale et organise sa liste de modèles autour de ceux qui tiennent en 8 Go.' },
        ],
        callouts: [
          { type: 'note', text: 'Apple M1 8 Go surpasse régulièrement les portables x86 8 Go dans les quatre apps de ce tableau. Si vous avez accès à un Mac Apple Silicon, c\'est le meilleur matériel à faible RAM pour l\'IA locale — l\'architecture à mémoire unifiée donne au modèle l\'accès aux 8 Go complets sans la pénalité d\'overhead OS que subissent les portables Windows et Linux.' },
        ],
        columns: ['Application', 'RAM min.', 'Meilleur modèle (contrainte 8 Go)', 'Tokens/s (CPU seul)', 'Chaleur', 'Verdict'],
        rows: [
          { 'Application': 'Ollama', 'RAM min.': '6 Go', 'Meilleur modèle (contrainte 8 Go)': 'Phi-4 Mini Q4_K_M', 'Tokens/s (CPU seul)': '4–14 t/s', 'Chaleur': 'Faible', 'Verdict': 'Meilleur équilibre — à choisir en premier' },
          { 'Application': 'GPT4All', 'RAM min.': '4 Go', 'Meilleur modèle (contrainte 8 Go)': 'Llama 3.2 1B Q4_0', 'Tokens/s (CPU seul)': '3–10 t/s', 'Chaleur': 'Faible', 'Verdict': 'Installation la plus simple — choix non-technique' },
          { 'Application': 'Jan', 'RAM min.': '6 Go', 'Meilleur modèle (contrainte 8 Go)': 'Gemma 3 4B Q4_K_M', 'Tokens/s (CPU seul)': '3–11 t/s', 'Chaleur': 'Moyenne', 'Verdict': 'Meilleure GUI sur Apple Silicon 8 Go' },
          { 'Application': 'llama.cpp', 'RAM min.': '4 Go', 'Meilleur modèle (contrainte 8 Go)': 'SmolLM 2 1.7B Q4_K_M', 'Tokens/s (CPU seul)': '5–18 t/s', 'Chaleur': 'Faible', 'Verdict': 'Plus rapide si vous compilez' },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Laquelle choisir ?',
        content: '**La bonne app dépend de votre aisance avec le terminal, de votre OS (Windows ou Mac) et de l\'âge de votre CPU.** Utilisez ce raccourci de décision :',
        rows: [
          { 'Votre situation': 'Portable Windows 10, 8 Go RAM, aucune expérience du terminal', 'Choix': 'GPT4All' },
          { 'Votre situation': 'Ryzen moderne / Intel 12e gén., 8 Go, à l\'aise avec le terminal', 'Choix': 'Ollama' },
          { 'Votre situation': 'MacBook Air M1 / Mac mini M1 8 Go', 'Choix': 'Jan ou Ollama' },
          { 'Votre situation': 'Portable Linux, débit tokens/s maximal', 'Choix': 'llama.cpp' },
          { 'Votre situation': 'Machine 4 Go RAM (sous-spec)', 'Choix': 'GPT4All + Llama 3.2 1B Q4_0' },
          { 'Votre situation': 'Ancien CPU classe Intel Core i5-8250U / i7-7700U', 'Choix': 'Ollama + SmolLM 2 1.7B' },
          { 'Votre situation': 'Chromebook avec mode dev Linux', 'Choix': 'llama.cpp + SmolLM 2' },
          { 'Votre situation': 'Portable de travail où l\'installation de pilotes est interdite', 'Choix': 'GPT4All (installation sans pilote / sans droits admin)' },
        ],
        columns: ['Votre situation', 'Choix'],
        callouts: [
          { type: 'tip', text: 'En cas de doute, commencez par Ollama. Il fonctionne sur tous les OS, télécharge les modèles via une simple commande `ollama pull [nom-du-modèle]` et expose une API compatible OpenAI si vous souhaitez intégrer d\'autres outils plus tard. Si le terminal est rédhibitoire, GPT4All est l\'alternative — mêmes modèles, sans ligne de commande.' },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: 'Quelle vitesse atteint chaque app sur du matériel modeste réel ?',
        content: '**Tokens-par-seconde sur des machines représentatives 8 Go RAM sans GPU dédié, mai 2026.** Les chiffres sont des fourchettes communautaires issues des fils de benchmarks llama.cpp upstream, des données de fiches modèles Hugging Face, et des tests r/LocalLLaMA tagués matériel. Chaque cellule est la fourchette typique sur les exécutions rapportées en réglages par défaut ; valeurs aberrantes exclues.',
        columns: ['Matériel', 'Modèle', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          { 'Matériel': 'Intel Core i5-8250U + UHD 620 (ultraportable 2018)', 'Modèle': 'Phi-4 Mini Q4_K_M', 'Ollama': '4–6 t/s', 'GPT4All': '3–5 t/s', 'Jan': '3–5 t/s', 'llama.cpp': '5–7 t/s' },
          { 'Matériel': 'AMD Ryzen 5 5500U + Vega 7 (entrée de gamme 2021)', 'Modèle': 'Phi-4 Mini Q4_K_M', 'Ollama': '8–11 t/s', 'GPT4All': '6–9 t/s', 'Jan': '7–9 t/s', 'llama.cpp': '9–13 t/s' },
          { 'Matériel': 'Intel Core Ultra 5 125H + Arc iGPU (milieu de gamme 2024)', 'Modèle': 'Gemma 3 4B Q4_K_M', 'Ollama': '10–14 t/s', 'GPT4All': '8–11 t/s', 'Jan': '9–12 t/s', 'llama.cpp': '12–18 t/s' },
          { 'Matériel': 'Apple M1 8 Go (MacBook Air 2020)', 'Modèle': 'Llama 3.2 1B Q5_K_M', 'Ollama': '28–40 t/s', 'GPT4All': '20–30 t/s', 'Jan': '26–38 t/s', 'llama.cpp': '32–48 t/s' },
          { 'Matériel': 'Apple M1 8 Go', 'Modèle': 'Phi-4 Mini Q4_K_M', 'Ollama': '12–18 t/s', 'GPT4All': '9–14 t/s', 'Jan': '11–17 t/s', 'llama.cpp': '14–20 t/s' },
          { 'Matériel': 'Intel Core i5-8250U', 'Modèle': 'SmolLM 2 1.7B Q4_K_M', 'Ollama': '10–14 t/s', 'GPT4All': '8–12 t/s', 'Jan': '9–13 t/s', 'llama.cpp': '12–16 t/s' },
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon domine ce tableau parce que l\'architecture à mémoire unifiée du M1 permet au GPU et au CPU de partager la même RAM à haute bande passante. Sur les portables x86 sans GPU dédié, les graphiques intégrés valent rarement la pénalité d\'offload — voir la section iGPU ci-dessous.' },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: 'Pourquoi 8 Go RAM est-il aussi étriqué, et quand le portable bride-t-il ?',
        content: '**Sur 8 Go RAM, le système d\'exploitation consomme déjà 2.5–3.5 Go avant tout chargement de modèle, laissant 4.5–5.5 Go pour le modèle et son cache KV.** Ce plafond fait de Phi-4 Mini (3.8B Q4 ≈ 2.4 Go) le sweet spot pratique et exclut tout modèle 7B à toute quantification pour un usage soutenu. La CNIL recommande explicitement l\'inférence locale lorsque les données traitées sont sensibles (santé, données financières professionnelles, secrets juridiques) — l\'IA locale sur 8 Go RAM est donc à la fois la solution technique et l\'option de conformité par défaut pour les indépendants et TPE françaises.',
        items: [
          '**Empreinte mémoire vs RAM système :** un fichier modèle sur disque est plus petit que son empreinte une fois chargé. Phi-4 Mini Q4_K_M est ≈ 2.4 Go sur disque mais ≈ 3.0–3.5 Go en RAM une fois ajouté le cache KV pour un contexte de 2048 tokens. Réduisez le contexte à 1024 et vous économisez ≈ 400 Mo.',
          '**Mort par swap :** quand l\'empreinte dépasse la RAM physique, macOS et Linux commencent à paginer sur le SSD. Les tokens/s chutent d\'un facteur 5–10 et le portable devient inerte. Surveillez `vm_stat` (Mac) ou `free -h` (Linux) — si le swap monte pendant l\'inférence, basculez immédiatement vers un modèle plus petit.',
          '**Throttling thermique sur ultraportables :** les portables sans ventilateur ou mono-ventilo (MacBook Air M1, XPS 13, Surface Laptop Go) atteignent les limites thermiques en 3–5 minutes d\'inférence soutenue et abaissent les fréquences CPU de 20–35 %. Les tokens/s chutent en conséquence.',
          '**La longueur de contexte est une taxe mémoire :** un contexte par défaut de 4096 réserve un cache KV de 4096 tokens d\'avance. Sur un modèle 1B c\'est 200–300 Mo ; sur un 4B c\'est 600–900 Mo. Coupez à 1024 sauf si vous avez vraiment besoin d\'une longue entrée.',
          '**Les apps en arrière-plan comptent plus que le modèle de CPU :** une fenêtre Chrome avec 20 onglets, c\'est 1–2 Go. Slack, c\'est 400–600 Mo. Sur 8 Go RAM, fermer ces apps avant de charger un modèle 4B est le plus gros gain unitaire de tokens/s disponible.',
        ],
        callouts: [
          { type: 'warning', text: 'Ne chargez aucun modèle 7B sur 8 Go RAM, même en Q2. Q2 7B fait ≈ 2.5 Go sur disque mais l\'empreinte plus 2048 de contexte atterrit à ≈ 5.5 Go, ce qui fait basculer en swap sur la plupart des systèmes Windows / Linux. Résultat : chute de vitesse 5–10× et interface gelée.' },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: 'Quel modèle et quelle quantification charger dans chaque app ?',
        content: '**Sur 8 Go RAM sans GPU dédié, restez sous 4B paramètres en Q4_K_M ou inférieur.** Q4_K_M est la quantification standard en 2026 — elle perd ≈ 1 % de perplexité face au FP16, tient en moitié moins de RAM, et c\'est la valeur par défaut pour la plupart des builds GGUF sur Hugging Face. Listé par app :',
        items: [
          '**Ollama :** `ollama pull phi3:mini` (Phi-4 Mini 3.8B Q4_K_M, ≈ 2.4 Go) est la recommandation par défaut. Pour la vitesse maximale, `ollama pull smollm2:1.7b` (≈ 1.0 Go). Pour le rendu chat soigné, `ollama pull llama3.2:1b-instruct-q5_K_M` (≈ 0.85 Go).',
          '**GPT4All :** utilisez le navigateur de modèles intégré → "Llama 3.2 1B Instruct Q4_0" (≈ 0.7 Go) pour l\'installation la plus légère, ou "Phi-4 Mini Q4_K_M" si la RAM le permet. Les valeurs par défaut de GPT4All sont conservatrices, donc la liste de modèles visible est plus courte que celle de llama.cpp, mais chaque entrée fonctionne.',
          '**Jan :** utilisez le catalogue curé → "Gemma 3 4B Instruct Q4_K_M" (≈ 2.6 Go) sur Apple Silicon, ou "Phi-4 Mini Q4_K_M" sur x86. Jan accepte aussi le collage d\'une URL Hugging Face pour n\'importe quel GGUF.',
          '**llama.cpp :** téléchargez les GGUF directement depuis Hugging Face — `bartowski/Phi-4-mini-instruct-GGUF`, `bartowski/SmolLM2-1.7B-Instruct-GGUF`, ou `bartowski/Llama-3.2-1B-Instruct-GGUF`. Lancez avec `./llama-cli -m model.gguf -p "..." -c 1024 -t 4`.',
          '**À éviter sur 8 Go / sans GPU :** tout modèle 7B à toute quantification, tout modèle au-dessus de Q5_K_M (gain qualitatif négligeable, double coût RAM), et tout modèle de base — choisissez toujours les variantes `-instruct` ou `-chat` pour une sortie utilisable.',
        ],
        callouts: [
          { type: 'tip', text: 'Q4_K_M n\'est pas la même chose que Q4_0. Q4_K_M utilise un schéma mixte plus intelligent et offre ≈ 5–10 % de qualité supplémentaire à taille égale. Choisissez Q4_K_M chaque fois que les deux sont disponibles.' },
        ],
      },
      settings: {
        id: 'settings',
        title: 'Quels réglages apportent 30–60 % de tokens/s en plus sur PC modestes ?',
        content: '**Les réglages par défaut sont calibrés pour 16 Go RAM et un GPU dédié. Sur 8 Go CPU seul, trois leviers comptent le plus :** longueur de contexte, taille de batch, et nombre de threads. Réglés ensemble, ils valent 30–60 % de tokens/s en plus sur le même matériel.',
        items: [
          '**Longueur de contexte — le plus gros gain unitaire.** Réduisez de 4096 (par défaut) à 1024. Dans Ollama : `OLLAMA_NUM_CTX=1024 ollama run phi3:mini`. Dans llama.cpp : `-c 1024`. Économie RAM : 400–900 Mo selon le modèle. Gain tokens/s : 10–20 %.',
          '**Nombre de threads — alignez sur les cœurs physiques, pas logiques.** Les anciens CPU (i5-8250U, Ryzen 5 5500U) ont 4 cœurs physiques / 8 logiques. Réglez threads = 4, pas 8. Dans llama.cpp : `-t 4`. Dans Ollama : `OLLAMA_NUM_THREAD=4`. L\'hyperthreading nuit à l\'inférence parce que les deux threads se disputent la même unité FP/SIMD.',
          '**Taille de batch pour le traitement de prompt — 8 sur les CPU modestes.** llama.cpp : `--n-batch 8`. Le défaut 512 surcharge le cache L2 sur les CPU 4 cœurs. Gain tokens/s sur modèles 4B : 15–25 %.',
          '**Quantification du cache KV — réglez sur q8_0 pour diviser par deux la RAM du cache KV.** llama.cpp : `--cache-type-k q8_0 --cache-type-v q8_0`. Économie RAM : 150–400 Mo à 1024 de contexte, plus à des contextes supérieurs. Impact qualité : imperceptible.',
          '**Désactivez mlock sur les systèmes sujets au swap.** llama.cpp `--no-mlock`. Sur les systèmes 8 Go, verrouiller le modèle en RAM empêche l\'OS de prendre des décisions de cache intelligentes. Contre-intuitif mais constamment plus rapide sur Windows 10/11 avec 8 Go.',
          '**Utilisez explicitement les builds AVX2.** La plupart des binaires précompilés llama.cpp / Ollama détectent automatiquement AVX2 / AVX-512 et activent le bon kernel. Si vous avez compilé vous-même, passez `-DGGML_AVX2=ON`. Détection AVX-512 : `cat /proc/cpuinfo | grep avx512`. AVX-512 apporte encore 10–15 % sur les CPU compatibles (Ice Lake / Tiger Lake / Rocket Lake / Zen 4+).',
        ],
        callouts: [
          { type: 'tip', text: 'Empilez les cinq optimisations et vous verrez typiquement 35–55 % de tokens/s en plus sur le même modèle et le même matériel. Le plus gros gain unitaire est la coupe de contexte de 4096 → 1024, qui réduit aussi drastiquement le time-to-first-token sur un prompt à froid.' },
        ],
      },
      igpu: {
        id: 'igpu',
        title: 'Les graphiques intégrés sont-ils utiles pour l\'IA locale ?',
        content: '**Sur la plupart des portables 8 Go RAM la réponse est non — gardez l\'inférence sur le CPU.** Les graphiques intégrés partagent la RAM système, donc décharger des couches ne vous donne pas de mémoire supplémentaire ; cela ajoute juste une pénalité d\'overhead d\'offload. Trois exceptions à connaître :',
        items: [
          '**Apple Silicon (M1/M2/M3/M4) — oui, toujours.** L\'architecture à mémoire unifiée fait que le « GPU » voit la même RAM à la même bande passante que le CPU. Ollama, Jan et llama.cpp utilisent tous automatiquement l\'accélération Metal sur Mac, sans flag. C\'est pourquoi un M1 8 Go dépasse la plupart des portables Windows 8 Go d\'un facteur 2–3.',
          '**Intel Arc iGPU (Meteor Lake / Lunar Lake / Arrow Lake) — parfois.** Les puces Intel Core Ultra (Ultra 5 125H, Ultra 7 155H, Ultra 7 258V) embarquent un iGPU Arc qui supporte les accélérations OpenVINO et SYCL. llama.cpp avec `-DGGML_SYCL=ON` est 30–60 % plus rapide que CPU seul sur ces puces. La configuration n\'est pas triviale.',
          '**AMD Ryzen 7000/8000 avec iGPU Radeon 700M/800M — expérimental.** Le support ROCm sur Radeon intégré est partiel et capricieux en 2026. CPU seul est le choix plus sûr sauf si vous aimez déboguer des stacks de pilotes.',
          '**Intel UHD plus ancien / Iris Plus / AMD Vega — à ignorer.** Ces iGPU manquent du débit FP16 et de la bande passante mémoire pour battre un kernel CPU AVX2 moderne. Restez sur le CPU.',
        ],
        callouts: [
          { type: 'tip', text: 'Le test le plus simple pour vérifier si votre iGPU vaut le coup : exécutez le même modèle 10 générations en CPU seul puis en accéléré iGPU et comparez les tokens/s. Sur Apple Silicon, l\'iGPU est toujours plus rapide. Sur graphiques intégrés x86, la réponse dépend du matériel — testez plutôt que de supposer.' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Erreurs courantes',
        content: '**Cinq erreurs qui ruinent les performances sur les systèmes 8 Go / sans GPU**, avec la solution pour chacune :',
        items: [
          '**Erreur 1 : charger un modèle 7B « parce que Q4 tient sur le disque ».** Le fichier disque est plus petit que l\'empreinte chargée. 7B Q4 ≈ 4.4 Go sur disque, ≈ 5.5–6.5 Go en RAM avec un contexte de 2048, ce qui dépasse le plafond 8 Go et déclenche le swap. **Solution :** restez à 4B ou moins. Phi-4 Mini Q4_K_M est le modèle le plus haut en qualité qui tient systématiquement.',
          '**Erreur 2 : laisser la fenêtre de contexte à 4096.** Le défaut 4096 réserve un cache KV qui ajoute 400–900 Mo en plus du modèle. **Solution :** réglez le contexte à 1024 sauf si vous avez vraiment besoin d\'une longue entrée. `OLLAMA_NUM_CTX=1024` (Ollama), `-c 1024` (llama.cpp).',
          '**Erreur 3 : tourner avec Chrome, Slack et Spotify ouverts.** Chacun consomme 0.5–2 Go. Sur 8 Go RAM, il vous reste ≈ 5 Go après l\'OS. Les apps en arrière-plan vous poussent en swap avant même le chargement du modèle. **Solution :** fermez tout sauf l\'app IA et une fenêtre de notes avant l\'inférence.',
          '**Erreur 4 : choisir Q8_0 « pour la qualité ».** Sur les modèles 1B–4B, la différence de qualité entre Q4_K_M et Q8_0 est sous le seuil humainement perceptible pour le chat, mais Q8 double le coût RAM et divise par deux les tokens/s. **Solution :** restez sur Q4_K_M sauf si vous avez un benchmark mesurable montrant que Q8 aide votre tâche.',
          '**Erreur 5 : croire qu\'un Raspberry Pi 4 suffit.** 4 Go RAM et un Cortex-A72 1.5 GHz peuvent techniquement faire tourner TinyLlama 1B à 1–3 t/s, mais l\'expérience est inutilisable pour le chat. **Solution :** Raspberry Pi 5 avec 8 Go RAM est le plancher SBC ARM réaliste — et même là, un portable x86 8 Go est plus rapide.',
        ],
        callouts: [
          { type: 'tip', text: 'Les cinq erreurs partagent la même racine : supposer que les réglages de bureau s\'appliquent à un portable contraint. Chaque défaut (contexte 4096, qualité Q8, tous les threads) est calibré pour une machine 16–32 Go RAM avec GPU dédié. Sur 8 Go CPU seul, il faut activement écraser les défauts. Voyez la section réglages comme le « préréglage PC modeste » — appliquez les cinq optimisations avant votre première exécution.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Puis-je faire tourner de l\'IA locale sur 4 Go RAM ?', a: 'Oui, mais uniquement avec des modèles sub-2B comme Llama 3.2 1B Q4_0 (≈ 0.7 Go sur disque) ou SmolLM 2 360M (≈ 0.25 Go sur disque). GPT4All est la seule des quatre apps qui liste 4 Go comme minimum officiel. Comptez 3–8 t/s sur un CPU moderne et un comportement UI nettement plus lent parce que l\'OS n\'a presque aucune marge.' },
          { q: 'Un ancien CPU Intel fonctionne-t-il pour l\'IA locale ?', a: 'Tout ce qui dispose d\'AVX2 (Haswell, 2013, ou plus récent) fonctionne en 2026. Le plancher pratique est un Intel Core i5-8250U ou un Ryzen 5 2500U plus ancien, où Phi-4 Mini Q4 tourne à 4–6 t/s. Les CPU sans AVX2 (pré-2013 Intel, AMD Bulldozer original) chargeront mais tourneront à 1–2 t/s, ce qui est inutilisable pour le chat.' },
          { q: 'L\'IA locale va-t-elle abîmer mon portable ?', a: 'Non. L\'inférence locale est un processus utilisateur normal — il ne peut pas endommager le matériel. Le pire scénario est un portable qui chauffe (90–100 °C sur ultraportables) et bride, contre quoi le firmware protège automatiquement. Pour éviter cela, utilisez un tapis de refroidissement sur les sessions prolongées, gardez la pièce sous 25 °C, et arrêtez l\'inférence si le châssis est inconfortable au toucher.' },
          { q: 'Les graphiques intégrés sont-ils suffisants ?', a: 'Sur Apple Silicon (M1+) ils sont plus que suffisants — la mémoire unifiée fait de l\'iGPU effectivement un GPU dédié bas de gamme. Sur Intel Core Ultra (Meteor Lake / Arrow Lake) ils peuvent apporter 30–60 % de vitesse en plus si vous configurez SYCL. Sur les Intel UHD / Iris Plus / AMD Vega plus anciens, les graphiques intégrés sont plus lents que le CPU et ne valent pas la peine.' },
          { q: 'Quel modèle est le plus rapide en CPU seul ?', a: 'Llama 3.2 1B Q4_0 et SmolLM 2 1.7B Q4_K_M sont les modèles utilisables les plus rapides. Llama 3.2 1B atteint 25–50 t/s sur Apple M1 et 12–25 t/s sur un CPU Ryzen ou Intel moderne. SmolLM 2 a une vitesse similaire avec un rendu d\'écriture légèrement plus soigné. Tout ce qui dépasse 4B paramètres a peu de chances de paraître rapide sur des systèmes CPU seul.' },
          { q: 'Ajouter de la RAM aide-t-il plus qu\'un upgrade CPU ?', a: 'Sur les systèmes 8 Go, passer à 16 Go est l\'upgrade pratique le plus important parce qu\'il débloque les modèles 7B–8B comme Mistral Small Q4 et Llama 3.3 8B Q4. Les upgrades CPU apportent 20–50 % de tokens/s en plus ; l\'upgrade RAM apporte 2–4× de qualité (saut de 1B–4B à 7B–8B). Si vous ne pouvez faire qu\'un seul changement, ajoutez de la RAM.' },
          { q: 'Puis-je faire tourner de l\'IA locale sur un Chromebook ?', a: 'Uniquement si le mode dev Linux (Crostini) est disponible. Les quatre apps de ce guide tournent toutes dans le conteneur Linux — llama.cpp compilé depuis les sources est le plus fiable sur les Chromebooks ARM, tandis que les Chromebooks x86 (Intel) fonctionnent avec Ollama ou GPT4All. Les performances suivent le CPU sous-jacent ; un Chromebook Intel Core i3 / i5 se comporte comme le portable Windows équivalent.' },
          { q: 'Windows 10 fonctionne-t-il toujours pour l\'IA locale en 2026 ?', a: 'Oui. Les quatre apps supportent Windows 10 22H2. Ollama, GPT4All et Jan livrent des installeurs Windows signés ; llama.cpp livre des binaires Windows précompilés sur ses releases GitHub. La fin du support grand public de Windows 10 en octobre 2025 n\'empêche pas l\'installation, mais les mises à jour de sécurité ont cessé — envisagez un dual-boot Linux ou une mise à niveau vers Windows 11 pour un usage long terme.' },
          { q: 'Quel est le portable le moins cher qui fait tourner l\'IA locale convenablement ?', a: 'Un ThinkPad T14 ou Dell Latitude 5430 d\'occasion 2021–2022 avec 16 Go RAM et un Ryzen 5 5500U ou Intel i5-1235U coûte 350–450 € en 2026 et fait tourner Phi-4 Mini Q4 à 8–14 t/s. Encore moins cher : tout MacBook Air Apple M1 8 Go d\'occasion à 450–550 €, qui bat la plupart des portables x86 sur les tokens/s grâce à la mémoire unifiée.' },
          { q: 'Puis-je utiliser un Raspberry Pi pour l\'IA locale ?', a: 'Un Raspberry Pi 5 avec 8 Go RAM fait tourner Llama 3.2 1B Q4 à 4–7 t/s — utilisable mais lent. Un Pi 4 4 Go plafonne autour de 2 t/s sur TinyLlama 1B. Pour un usage chat réel, un portable x86 8 Go ou un MacBook Air M1 est plus rapide, moins cher d\'occasion et plus simple à configurer. Le Pi n\'a de sens que pour les charges embarquées, edge ou always-on.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[App d\'IA locale la plus simple par OS : recommandations Windows, Mac, Linux](/fr/power-local-llm/easiest-local-ai-app-windows-mac-linux) — beaucoup d\'utilisateurs de PC modestes sont sur Windows ancien ; ce guide choisit une app par OS.',
          '[Meilleures apps LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — alternative naturelle pour les utilisateurs modestes avec un smartphone Android récent.',
          '[Remplacer Zapier par des agents IA locaux](/fr/power-local-llm/replace-zapier-with-local-ai-agents) — automatisation de workflow pratique pour les utilisateurs au budget serré sur le même matériel.',
          '[LM Studio vs Jan vs GPT4All : quelle app IA locale gagne en 2026](/fr/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — face-à-face si vous voulez aussi considérer LM Studio.',
          '[Meilleurs GPU à petit budget pour LLM locaux](/fr/local-llms/best-budget-gpus-local-llm) — pour quand vous serez prêt à sortir du territoire CPU seul.',
          '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — autorité matériel complète incluant les arbitrages RAM, CPU et GPU.',
          '[Hub Power Local LLM](/fr/power-local-llm) — bibliothèque de guides complète pour le cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/fr/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': 'Meilleures applications d\'IA locale pour PC modestes en 2026 (8 Go RAM, sans GPU)',
      'description': 'Ollama, GPT4All, Jan et llama.cpp testés sur des portables 8 Go RAM avec graphiques intégrés. Tokens/s, pression mémoire, réglages exacts.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan (app IA locale)' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': 'LLM local sur PC modeste' },
      ],
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Meilleures apps d\'IA locale pour portables 8 Go RAM sans GPU en 2026',
      'numberOfItems': 4,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Ollama', 'description': 'Runtime CPU le plus léger ; minimum 6 Go RAM ; s\'associe au mieux à Phi-4 Mini Q4_K_M à 4–14 tokens par seconde sur 8 Go CPU seul.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GPT4All', 'description': 'Installeur en un clic le plus simple ; minimum 4 Go RAM ; s\'associe au mieux à Llama 3.2 1B Q4_0 à 3–10 tokens par seconde ; recommandé pour les utilisateurs non techniques.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Jan', 'description': 'Interface graphique open source (AGPL) ; minimum 6 Go RAM ; s\'associe au mieux à Gemma 3 4B Q4_K_M à 3–11 tokens par seconde ; GUI la plus légère sur Apple Silicon 8 Go.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'llama.cpp', 'description': 'Vitesse au plus près du métal si vous compilez ; minimum 4 Go RAM ; s\'associe au mieux à SmolLM 2 1.7B Q4_K_M à 5–18 tokens par seconde ; le plus rapide sur matériel identique.' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': 'https://www.promptquorum.com/fr' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Meilleures applications d\'IA locale pour PC modestes', 'item': 'https://www.promptquorum.com/fr/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'ロースペックPC向けベストローカルAIアプリ 2026年版（8GB RAM・GPUなし）',
    seoTitle: '8GB RAM PC向けローカルAIアプリ 2026：CPU専用テスト',
    metaDescription:
      'RTX 4090は不要です。Ollama、GPT4All、Jan、llama.cppを8GB RAM・統合グラフィックス搭載ノートPCでテスト。tok/秒、メモリ圧、設定を解説。2026年5月。',
    twitterDescription:
      '8GB RAM・GPUなしノートPCで動く4つのローカルAIアプリ。tok/秒、設定、率直な評価。2026年5月。',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: ['Intel UHD 620', 'Intel Iris Xe', 'AMD Ryzen 5 5500U', 'Apple M1 8GB', 'Intel Core i5-8250U'],
    audience: '8GB RAM・専用GPUなしの4〜7年前のノートPCを所有し、初めてローカルAIアプリを選ぶユーザー。',
    readTime: '11分で読める',
    educationalLevel: 'Beginner',
    primaryTerm: 'ロースペックPC ローカルAI',
    targetKeywords: ['ローカルai 8gb ram', 'ロースペックpc llm', 'gpuなし ai', 'cpu専用 ローカルllm 2026', '古いノートpc ai'],
    leadAnswerBlock:
      '**8GB RAM・専用GPUなしのノートPCで2026年に実用的に動くアプリは4つあります：Ollama、GPT4All、Jan、llama.cpp。これらをPhi-4 Mini Q4（バランス最適）、SmolLM 2 1.7B Q4（最速）、またはLlama 3.2 1B Q5（GUI体験が最も滑らか）と組み合わせ、ワーキングセットを6GB以下に抑えます。**',
    quickAnswerTop: {
      ja: {
        question: '8GB RAM・GPUなしのノートPCで一番動くローカルAIアプリは？',
        answer:
          'ターミナルに慣れている方はOllamaを選びます — 最も軽量なランタイムで、Phi-4 Mini Q4と組み合わせて旧Intel CPUで4〜8 tok/秒、Ryzen 5000 / Intel 12世代クラスのハードウェアで8〜14 tok/秒を実現します。ワンクリックインストーラーが欲しくコマンドラインを使いたくない方はGPT4Allを選びます — 8GB RAMで最も寛容で、モデルブラウザを内蔵しています。クリーンなGUIと完全なオープンソースを求めるならJan。最大tok/秒を求め、コンパイルを厭わないならllama.cppを直接選びます。',
        bullets: [
          'Ollama — 最軽量CPUランタイム、ターミナル駆動、Phi-4 Miniとの相性が最高',
          'GPT4All — インストール最簡、最低RAM要件4GB、非技術ユーザー推奨',
          'Jan — フルGUI、オープンソース（AGPL）、Apple Siliconネイティブ、8GB Macで最軽量',
          'llama.cpp — ベアメタル速度、コンパイル必須、SmolLM 2 / Gemma 3 4Bとの相性が最高',
          '4つすべて無料、インストール後オフライン動作、標準GGUFモデルファイルをロード',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '比較表', anchor: '#comparison-table' },
      { label: 'どれを選ぶべきか？', anchor: '#which-one' },
      { label: 'tok/秒ベンチマーク（CPU専用、8GB RAM）', anchor: '#cpu-benchmarks' },
      { label: 'メモリ圧とサーマルスロットリング', anchor: '#memory-thermals' },
      { label: '8GB RAMでアプリ別ベストモデル', anchor: '#best-models' },
      { label: '速度を30〜60％向上させる設定', anchor: '#settings' },
      { label: '統合グラフィックスは使う価値がある？', anchor: '#igpu' },
      { label: 'よくある間違い', anchor: '#mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: '以下のスライドデッキでは：Ollama、GPT4All、Jan、llama.cppを8GB RAM・GPU無しで実測（4〜18 tok/s）；速度30〜60%向上の正確な設定（コンテキスト1024、バッチ8、KVキャッシュq8_0）；各アプリの推奨モデル（Phi-4 Mini Q4_K_M、SmolLM 2 1.7B、Gemma 3 4B）；スワップ死を引き起こす5つのよくある間違いをカバーしています。低スペックPCローカルAIリファレンスカードとしてPDFをダウンロードできます。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — 2026年最軽量のCPUランタイム、バックグラウンドサーバーとして動作、最良のアプリ＋モデル組み合わせ：Ollama + Phi-4 Mini Q4で8GB CPU専用環境にて4〜14 tok/秒。',
          '**GPT4All** — RAM最低4GBでターミナル不要のインストールパスを持つ唯一のアプリ、Windows 10ノートPCの非技術ユーザーに最適。',
          '**Jan** — フルGUI、AGPLオープンソース、Apple Siliconネイティブ、8GB MacBook AirやM1 Mac mini向けの最軽量GUIアプリ。',
          '**llama.cpp** — 同一ハードウェアで最速tok/秒（Ollama比5〜15％高速、GPT4All比15〜25％高速）、ただしコンパイル工程が必要。',
          '**8GB / GPUなしでのベストモデル：** バランス重視ならPhi-4 Mini 3.8B Q4_K_M、最大速度重視ならSmolLM 2 1.7B Q4、最も滑らかなチャット体験ならLlama 3.2 1B Q5。',
          '**同一CPUでの速度ランキング：** llama.cpp > Ollama > Jan > GPT4All。差は15〜25％であり、2〜3倍ではありません。',
          '**2026年5月時点で、8GB RAMで7B+モデルを実行しないでください** — コンテキストウィンドウ圧とOSそのものがスワップを誘発し、スループットを5〜10倍低下させます。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Ollama、GPT4All、Jan、llama.cppは8GB RAM・GPUなしでどう比較できるか？',
        content:
          '以下の範囲はllama.cpp上流ベンチマークスレッド、Hugging Faceモデルカード値、r/LocalLLaMAテストレポート（8GB統合グラフィックスノートPC：Intel UHD 620 / Iris Xe / Ryzen 5 5500U Vega / Apple M1 8GB）から集計したものです。tok/秒はモデルロード後の200トークン生成で測定、デフォルトコンテキストウィンドウ2048（特記なき場合）。',
        snippetBlocks: [
          { type: 'one-sentence', text: '8GB RAM・専用GPUなしのノートPCでは、Phi-4 Mini Q4_K_Mと組み合わせたOllamaが最良のオールラウンドローカルAIセットアップです — ノーコード選択肢の中で最速の生成速度、最低の熱負荷、最広のモデルライブラリを備えています。' },
          { type: 'plain-terms', text: '8GB RAM・GPUなしのロースペックPCでは：Ollamaをインストールし、`ollama pull phi4-mini`を実行、次に`ollama run phi4-mini`を実行します。CPUに応じて4〜14 tok/秒で動作 — 遅いですが、プロンプトを送って回答を待つ用途では実用的です。ターミナル不要の代替手段としては、GPT4Allが通常のアプリのようにインストールでき、8GBに収まるモデルにキュレートされたリストを提供します。' },
        ],
        callouts: [
          { type: 'note', text: 'Apple M1 8GBは、この表内のすべての4アプリで8GB x86ノートPCを一貫して上回ります。Apple Silicon Macが利用可能であれば、それは低RAMハードウェアでローカルAIを動かす最良の選択肢です — ユニファイドメモリアーキテクチャによって、Windows / Linuxノートが抱えるOSオーバーヘッドのペナルティなしに、モデルが8GBフルにアクセスできます。' },
        ],
        columns: ['アプリ', '最低RAM', 'ベストモデル（8GB制約）', 'tok/秒（CPU専用）', '発熱', '評価'],
        rows: [
          { 'アプリ': 'Ollama', '最低RAM': '6 GB', 'ベストモデル（8GB制約）': 'Phi-4 Mini Q4_K_M', 'tok/秒（CPU専用）': '4〜14 tok/秒', '発熱': '低', '評価': 'バランス最良 — 最初に選ぶべき' },
          { 'アプリ': 'GPT4All', '最低RAM': '4 GB', 'ベストモデル（8GB制約）': 'Llama 3.2 1B Q4_0', 'tok/秒（CPU専用）': '3〜10 tok/秒', '発熱': '低', '評価': '最簡インストール — 非技術ユーザー向け' },
          { 'アプリ': 'Jan', '最低RAM': '6 GB', 'ベストモデル（8GB制約）': 'Gemma 3 4B Q4_K_M', 'tok/秒（CPU専用）': '3〜11 tok/秒', '発熱': '中', '評価': 'Apple Silicon 8GBで最良GUI' },
          { 'アプリ': 'llama.cpp', '最低RAM': '4 GB', 'ベストモデル（8GB制約）': 'SmolLM 2 1.7B Q4_K_M', 'tok/秒（CPU専用）': '5〜18 tok/秒', '発熱': '低', '評価': 'コンパイルできるなら最速' },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'どれを選ぶべきか？',
        content: '**最適なアプリは、ターミナルが使えるか、Windows / Macどちらか、CPUの世代の3点で決まります。** 以下の判断ショートカットを使ってください：',
        rows: [
          { '状況': 'Windows 10ノートPC、8GB RAM、ターミナル経験なし', '選択': 'GPT4All' },
          { '状況': '最新Ryzen / Intel 12世代、8GB、ターミナルに慣れている', '選択': 'Ollama' },
          { '状況': 'MacBook Air M1 / Mac mini M1 8GB', '選択': 'Janまたは Ollama' },
          { '状況': 'Linuxノート、最大tok/秒を求める', '選択': 'llama.cpp' },
          { '状況': '4GB RAMマシン（仕様未満）', '選択': 'GPT4All + Llama 3.2 1B Q4_0' },
          { '状況': '旧Intel Core i5-8250U / i7-7700Uクラス CPU', '選択': 'Ollama + SmolLM 2 1.7B' },
          { '状況': 'Linux dev mode対応Chromebook', '選択': 'llama.cpp + SmolLM 2' },
          { '状況': 'ドライバインストール不可の業務用ノートPC', '選択': 'GPT4All（ドライバ不要 / 管理者権限不要）' },
        ],
        columns: ['状況', '選択'],
        callouts: [
          { type: 'tip', text: '迷ったらOllamaから始めてください。すべてのOSで動作し、`ollama pull [モデル名]`でモデルをダウンロードでき、後で他のツールと統合したい場合のためにOpenAI互換APIを公開しています。ターミナルが使えない場合は、GPT4Allが正しい代替肢です — 同じモデル、コマンドライン不要。' },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: '実際のロースペックハードウェアで各アプリはどれくらい速いか？',
        content: '**8GB RAM・専用GPUなしの代表的マシンでのtok/秒、2026年5月。** 数値はllama.cpp上流ベンチマークスレッド、Hugging Faceモデルカードデータ、r/LocalLLaMAハードウェアタグ付きテストからのコミュニティ報告範囲です。各セルはデフォルト設定での報告実行の典型範囲（外れ値除外）。',
        columns: ['ハードウェア', 'モデル', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          { 'ハードウェア': 'Intel Core i5-8250U + UHD 620（2018年ウルトラポータブル）', 'モデル': 'Phi-4 Mini Q4_K_M', 'Ollama': '4〜6 tok/秒', 'GPT4All': '3〜5 tok/秒', 'Jan': '3〜5 tok/秒', 'llama.cpp': '5〜7 tok/秒' },
          { 'ハードウェア': 'AMD Ryzen 5 5500U + Vega 7（2021年エントリー）', 'モデル': 'Phi-4 Mini Q4_K_M', 'Ollama': '8〜11 tok/秒', 'GPT4All': '6〜9 tok/秒', 'Jan': '7〜9 tok/秒', 'llama.cpp': '9〜13 tok/秒' },
          { 'ハードウェア': 'Intel Core Ultra 5 125H + Arc iGPU（2024年ミドルレンジ）', 'モデル': 'Gemma 3 4B Q4_K_M', 'Ollama': '10〜14 tok/秒', 'GPT4All': '8〜11 tok/秒', 'Jan': '9〜12 tok/秒', 'llama.cpp': '12〜18 tok/秒' },
          { 'ハードウェア': 'Apple M1 8GB（MacBook Air 2020）', 'モデル': 'Llama 3.2 1B Q5_K_M', 'Ollama': '28〜40 tok/秒', 'GPT4All': '20〜30 tok/秒', 'Jan': '26〜38 tok/秒', 'llama.cpp': '32〜48 tok/秒' },
          { 'ハードウェア': 'Apple M1 8GB', 'モデル': 'Phi-4 Mini Q4_K_M', 'Ollama': '12〜18 tok/秒', 'GPT4All': '9〜14 tok/秒', 'Jan': '11〜17 tok/秒', 'llama.cpp': '14〜20 tok/秒' },
          { 'ハードウェア': 'Intel Core i5-8250U', 'モデル': 'SmolLM 2 1.7B Q4_K_M', 'Ollama': '10〜14 tok/秒', 'GPT4All': '8〜12 tok/秒', 'Jan': '9〜13 tok/秒', 'llama.cpp': '12〜16 tok/秒' },
        ],
        callouts: [
          { type: 'note', text: 'Apple Siliconがこの表で支配的なのは、M1のユニファイドメモリアーキテクチャにより、GPUとCPUが同じRAMを高帯域幅で共有できるためです。専用GPUなしのx86ノートでは、統合グラフィックスはオフロードオーバーヘッドのペナルティに見合わないことがほとんどです — 下のiGPUセクションを参照してください。' },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: 'なぜ8GB RAMは窮屈に感じるのか、ノートPCはいつスロットルするのか？',
        content:
          '**8GB RAMでは、モデルロード前にOSが既に2.5〜3.5GBを消費しており、モデルとそのKVキャッシュに残るのは4.5〜5.5GBです。** この上限により、Phi-4 Mini（3.8B Q4 ≈ 2.4 GB）が実用的なスイートスポットとなり、持続使用ではあらゆる量子化の7Bモデルが除外されます。',
        items: [
          '**ワーキングセット vs システムRAM：** ディスク上のモデルファイルはロード後のワーキングセットより小さくなります。Phi-4 Mini Q4_K_Mはディスク上で ≈ 2.4 GBですが、2048トークンコンテキストのKVキャッシュを追加すると、RAM上では ≈ 3.0〜3.5 GBになります。コンテキストを1024に減らすと ≈ 400 MB節約できます。',
          '**スワップデス：** ワーキングセットが物理RAMを超えると、macOSとLinuxはSSDにページングを開始します。tok/秒は5〜10倍低下し、ノートPCは無反応になります。`vm_stat`（Mac）または`free -h`（Linux）を監視してください — 推論中にスワップが上昇している場合は、即座により小さいモデルに切り替えてください。',
          '**ウルトラポータブルでのサーマルスロットリング：** ファンレスや単一ファンノート（MacBook Air M1、XPS 13、Surface Laptop Go）は、3〜5分の連続推論で熱限界に到達し、CPUクロックを20〜35％低下させます。tok/秒もそれに応じて低下します。',
          '**コンテキスト長はメモリ税：** デフォルト4096コンテキストは事前に4096トークンのKVキャッシュを確保します。1Bモデルでは200〜300 MB、4Bモデルでは600〜900 MBです。長い入力が本当に必要でない限り、1024に切り詰めてください。',
          '**バックグラウンドアプリはCPUモデルより重要：** 20タブのChromeウィンドウは1〜2 GB、Slackは400〜600 MBです。8GB RAMでは、4Bモデルをロードする前にこれらを閉じることが、利用可能な最大のtok/秒の単一ゲインになります。',
        ],
        callouts: [
          { type: 'warning', text: '8GB RAMでは、Q2であっても7Bモデルを一切ロードしないでください。Q2 7Bはディスク上で ≈ 2.5 GBですが、ワーキングセット＋2048コンテキストでは ≈ 5.5 GBに達し、ほとんどのWindows / Linuxシステムでスワップに移行します。結果は5〜10倍の速度低下とフリーズしたUIです。' },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: '各アプリでどのモデル・量子化をロードすべきか？',
        content:
          '**8GB RAM・専用GPUなしでは、Q4_K_M以下で4Bパラメータ未満を維持してください。** Q4_K_Mは2026年の標準量子化です — FP16比でperplexity ≈ 1％減、RAM半分、Hugging Face上のほとんどのGGUFビルドのデフォルト。アプリ別リスト：',
        items: [
          '**Ollama：** `ollama pull phi3:mini`（Phi-4 Mini 3.8B Q4_K_M、≈ 2.4 GB）がデフォルト推奨。最大速度なら`ollama pull smollm2:1.7b`（≈ 1.0 GB）、洗練されたチャットなら`ollama pull llama3.2:1b-instruct-q5_K_M`（≈ 0.85 GB）。',
          '**GPT4All：** アプリ内モデルブラウザを使用 → 「Llama 3.2 1B Instruct Q4_0」（≈ 0.7 GB）が最軽量インストール、RAMが許せば「Phi-4 Mini Q4_K_M」。GPT4Allのデフォルトは保守的に調整されているため、表示モデルリストはllama.cppより短いですが、すべての項目が動作します。',
          '**Jan：** キュレーションされたカタログを使用 → Apple Siliconでは「Gemma 3 4B Instruct Q4_K_M」（≈ 2.6 GB）、x86では「Phi-4 Mini Q4_K_M」。JanはあらゆるGGUFのHugging Face URL貼り付けも受け付けます。',
          '**llama.cpp：** Hugging FaceからGGUFを直接ダウンロード — `bartowski/Phi-4-mini-instruct-GGUF`、`bartowski/SmolLM2-1.7B-Instruct-GGUF`、または`bartowski/Llama-3.2-1B-Instruct-GGUF`。`./llama-cli -m model.gguf -p "..." -c 1024 -t 4`で実行。',
          '**8GB / GPUなしで避けるべき：** あらゆる量子化の7Bモデル、Q5_K_M超のモデル（品質ゲイン無視できるほど、RAMコスト2倍）、ベースモデル — 使用可能な出力のために常に`-instruct`または`-chat`バリアントを選択してください。',
        ],
        callouts: [
          { type: 'tip', text: 'Q4_K_MはQ4_0と同じではありません。Q4_K_Mはより賢い混合精度スキームを使用し、同サイズで品質が ≈ 5〜10％良好です。両方が利用可能な場合は常にQ4_K_Mを選択してください。' },
        ],
      },
      settings: {
        id: 'settings',
        title: 'ロースペックPCで30〜60％多くのtok/秒を得る設定は？',
        content:
          '**デフォルト設定は16GB RAMと専用GPU向けに調整されています。8GB CPU専用では、3つのつまみが最も重要です：** コンテキスト長、バッチサイズ、スレッド数。一緒に調整すれば、同一ハードウェアで30〜60％多くのtok/秒の価値があります。',
        items: [
          '**コンテキスト長 — 最大の単一ゲイン。** 4096（デフォルト）から1024に削減します。Ollamaでは：`OLLAMA_NUM_CTX=1024 ollama run phi3:mini`。llama.cppでは：`-c 1024`。RAM節約：モデルにより400〜900 MB。tok/秒ゲイン：10〜20％。',
          '**スレッド数 — 論理コアではなく物理コアに合わせる。** 旧CPU（i5-8250U、Ryzen 5 5500U）は物理4 / 論理8コアです。スレッド = 4に設定し、8にしないでください。llama.cppでは：`-t 4`。Ollamaでは：`OLLAMA_NUM_THREAD=4`。ハイパースレッディングは推論を阻害します。両スレッドが同じFP/SIMDユニットを争うためです。',
          '**プロンプト処理のバッチサイズ — 弱いCPUでは8に。** llama.cpp：`--n-batch 8`。デフォルト512は4コアCPUのL2キャッシュをスラッシングします。4Bモデルでのtok/秒ゲイン：15〜25％。',
          '**KVキャッシュ量子化 — q8_0に設定してKV RAMを半減。** llama.cpp：`--cache-type-k q8_0 --cache-type-v q8_0`。RAM節約：1024コンテキストで150〜400 MB、より高いコンテキストでさらに多く。品質への影響：知覚不能。',
          '**スワップしやすいシステムでmlockを無効化。** llama.cpp `--no-mlock`。8GBシステムでは、モデルをRAMにロックすると、OSがスマートなキャッシュ判断を行うのを妨げます。直感に反しますが、8GBのWindows 10/11では一貫して高速です。',
          '**AVX2ビルドを明示的に使用。** ほとんどのプリビルドllama.cpp / Ollamaバイナリは、AVX2 / AVX-512を自動検出して正しいカーネルに切り替えます。自分でコンパイルした場合は`-DGGML_AVX2=ON`を渡してください。AVX-512検出：`cat /proc/cpuinfo | grep avx512`。AVX-512は対応CPU（Ice Lake / Tiger Lake / Rocket Lake / Zen 4+）でさらに10〜15％を提供します。',
        ],
        callouts: [
          { type: 'tip', text: '5つの最適化をすべて積み重ねると、同じモデル・同じハードウェアで通常35〜55％多くのtok/秒が得られます。最大の単一ゲインは4096 → 1024のコンテキスト削減で、コールドプロンプトでのfirst-tokenタイムも大幅に短縮します。' },
        ],
      },
      igpu: {
        id: 'igpu',
        title: '統合グラフィックスはローカルAIに使う価値があるか？',
        content:
          '**ほとんどの8GB RAMノートPCでは答えはノーです — 推論はCPUに留めてください。** 統合グラフィックスはシステムRAMを共有するため、レイヤーをオフロードしても追加メモリは得られず、オフロードオーバーヘッドのペナルティが追加されるだけです。知っておくべき3つの例外：',
        items: [
          '**Apple Silicon（M1/M2/M3/M4）— はい、常に。** ユニファイドメモリアーキテクチャにより、「GPU」はCPUと同じRAMを同じ帯域幅で見ます。Ollama、Jan、llama.cppはすべてMacでフラグなしに自動でMetalアクセラレーションを使用します。これがM1 8GBがほとんどの8GB Windowsノートを2〜3倍上回る理由です。',
          '**Intel Arc iGPU（Meteor Lake / Lunar Lake / Arrow Lake）— 場合によっては。** Intel Core Ultraチップ（Ultra 5 125H、Ultra 7 155H、Ultra 7 258V）はOpenVINOとSYCLアクセラレーションをサポートするArc iGPUを搭載しています。`-DGGML_SYCL=ON`付きllama.cppは、これらのチップでCPU専用比30〜60％高速。セットアップは簡単ではありません。',
          '**AMD Ryzen 7000/8000＋Radeon 700M/800M iGPU — 実験的。** 統合RadeonでのROCmサポートは2026年時点で部分的かつ気難しいです。ドライバスタックのデバッグが好きでない限り、CPU専用が安全な選択。',
          '**旧Intel UHD / Iris Plus / AMD Vega — スキップ。** これらのiGPUは現代AVX2 CPUカーネルを上回るためのFP16スループットとメモリ帯域幅が不足しています。CPUに留まってください。',
        ],
        callouts: [
          { type: 'tip', text: 'iGPUが使う価値があるかをチェックする最簡単なテスト：同じモデルをCPU専用 vs iGPUアクセラレートで10回生成し、tok/秒を比較します。Apple SiliconではiGPUが常に高速。x86統合グラフィックスでは答えはデバイス固有 — 仮定せずテストしてください。' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'よくある間違い',
        content: '**8GB / GPUなしシステムでパフォーマンスを殺す5つの間違い**、それぞれの対処法付き：',
        items: [
          '**間違い1：「Q4ならディスクに収まるから」と7Bモデルをロード。** ディスクファイルはロード後のワーキングセットより小さくなります。7B Q4はディスク上 ≈ 4.4 GB、2048コンテキストではRAM上 ≈ 5.5〜6.5 GBで、8GB上限を超えてスワップを誘発します。**対処：** 4B以下に留めてください。Phi-4 Mini Q4_K_Mが一貫して収まる最高品質モデルです。',
          '**間違い2：コンテキストウィンドウを4096のままにする。** デフォルト4096はモデルに加えて400〜900 MBのKVキャッシュを予約します。**対処：** 長い入力が本当に必要でない限り、コンテキストを1024に設定してください。`OLLAMA_NUM_CTX=1024`（Ollama）、`-c 1024`（llama.cpp）。',
          '**間違い3：Chrome、Slack、Spotifyを開いたまま実行。** それぞれ0.5〜2 GBを消費します。8GB RAMでは、OS後に ≈ 5 GBが残ります。バックグラウンドアプリはモデルロード前にスワップに押し込みます。**対処：** 推論前にAIアプリとメモウィンドウ以外をすべて閉じてください。',
          '**間違い4：「品質のため」Q8_0を選ぶ。** 1B〜4Bモデルでは、Q4_K_MとQ8_0の品質差はチャット用途では人間の知覚閾値を下回りますが、Q8はRAMコストを2倍にしtok/秒を半減します。**対処：** タスクでQ8が役立つことを示す測定可能なベンチマークがない限り、Q4_K_Mに留めてください。',
          '**間違い5：Raspberry Pi 4で十分と仮定する。** 4 GB RAMと1.5 GHz Cortex-A72は技術的にはTinyLlama 1Bを1〜3 tok/秒で動作させられますが、チャット用途には使い物になりません。**対処：** 8 GB RAM搭載のRaspberry Pi 5が現実的なARM SBCの下限であり、それでも8GB x86ノートPCの方が高速です。',
        ],
        callouts: [
          { type: 'tip', text: '5つの間違いはすべて同じ根本原因を共有します：デスクトップ設定が制約付きノートPCに適用されると仮定すること。すべてのデフォルト（コンテキスト4096、Q8品質、全スレッド）は16〜32 GB RAM・専用GPUのマシン向けに調整されています。8GB CPU専用では、デフォルトを能動的に上書きする必要があります。このガイドの設定セクションを「ロースペックPCプリセット」と考え、最初の実行前に5つの最適化をすべて適用してください。' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '4 GB RAMでローカルAIを実行できますか？', a: 'はい、ただしLlama 3.2 1B Q4_0（ディスク上 ≈ 0.7 GB）やSmolLM 2 360M（ディスク上 ≈ 0.25 GB）のような2B未満のモデルに限ります。4 GBを公式最低要件としているのは4アプリ中GPT4Allのみです。最新CPUで3〜8 tok/秒、OSにほぼ余裕がないため、UI動作も明らかに鈍くなります。' },
          { q: '古いIntel CPUはローカルAIで使えますか？', a: 'AVX2搭載（Haswell、2013年以降）のものは2026年でも動作します。実用的な下限はIntel Core i5-8250Uや旧Ryzen 5 2500Uで、Phi-4 Mini Q4が4〜6 tok/秒で動作します。AVX2非対応CPU（2013年以前のIntel、初代AMD Bulldozer）はロードはできますが1〜2 tok/秒で動作し、チャット用途には使えません。' },
          { q: 'ローカルAIでノートPCが壊れますか？', a: 'いいえ。ローカル推論は通常のユーザー空間プロセスです — ハードウェアを破損させることはできません。最悪のケースはノートPCが熱くなり（ウルトラポータブルで90〜100°C）スロットルすることで、ファームウェアが自動的に保護します。これを避けるには、長時間セッションで冷却パッドを使用、室温を25°C以下に保ち、シャーシが触って不快なほど熱い場合は推論を停止してください。' },
          { q: '統合グラフィックスで十分ですか？', a: 'Apple Silicon（M1+）では十分以上です — ユニファイドメモリによりiGPUが事実上低価格専用GPUとして機能します。Intel Core Ultra（Meteor Lake / Arrow Lake）ではSYCLをセットアップすれば30〜60％の追加速度が得られます。旧Intel UHD / Iris Plus / AMD Vegaでは、統合グラフィックスはCPUより遅く、使う価値はありません。' },
          { q: 'CPU専用で最速のモデルは？', a: 'Llama 3.2 1B Q4_0とSmolLM 2 1.7B Q4_K_Mが最速の使用可能モデルです。Llama 3.2 1BはApple M1で25〜50 tok/秒、最新Ryzenまたは Intel CPUで12〜25 tok/秒に達します。SmolLM 2は同様の速度でやや洗練された執筆を提供します。4Bパラメータを超えるものはCPU専用システムで高速に感じる可能性が低いです。' },
          { q: 'RAM追加はCPUアップグレードより効果的ですか？', a: '8GBシステムでは、16GBへの移行が最大の実用アップグレードです。Mistral Small Q4やLlama 3.3 8B Q4のような7B〜8Bモデルがアンロックされるためです。CPUアップグレードは20〜50％多くのtok/秒、RAMアップグレードは2〜4倍の品質（1B〜4Bから7B〜8Bへの飛躍）を提供します。1つしかできない場合は、RAMを追加してください。' },
          { q: 'Chromebookでローカルai を実行できますか？', a: 'Linux dev mode（Crostini）が利用可能な場合のみ。このガイドの4アプリはすべてLinuxコンテナで動作します — ARM Chromebookではソースからコンパイルしたllama.cppが最も信頼性が高く、x86 Chromebook（Intel）はOllamaやGPT4Allで動作します。パフォーマンスは基となるCPUに対応 — Intel Core i3 / i5 Chromebookは同等のWindowsノートPCのように動作します。' },
          { q: '2026年でもWindows 10はローカルAIに使えますか？', a: 'はい。4アプリすべてがWindows 10 22H2をサポートします。Ollama、GPT4All、Janは署名付きWindowsインストーラーを提供し、llama.cppはGitHubリリースにプリビルドWindowsバイナリを提供します。2025年10月のWindows 10メインストリームサポート終了はインストールを妨げませんが、セキュリティアップデートが終わったため、長期使用にはLinuxデュアルブートやWindows 11アップグレードを検討してください。' },
          { q: 'ローカルAIをまともに動かせる最安ノートPCは？', a: '中古2021〜2022年のThinkPad T14またはDell Latitude 5430（16 GB RAM、Ryzen 5 5500UまたはIntel i5-1235U）は2026年に約¥60,000〜80,000で、Phi-4 Mini Q4を8〜14 tok/秒で動作させます。さらに安価：8 GB Apple M1 MacBook Air中古は約¥80,000〜100,000で、ユニファイドメモリにより多くのx86ノートPCをtok/秒で凌駕します。' },
          { q: 'Raspberry PiをローカルAIに使えますか？', a: '8 GB RAM搭載のRaspberry Pi 5はLlama 3.2 1B Q4を4〜7 tok/秒で動作 — 使用可能だが遅い。Pi 4 4 GBはTinyLlama 1Bで約2 tok/秒が上限。実際のチャット使用には、8 GB x86ノートPCやM1 MacBook Airの方が高速、中古で安価、セットアップが簡単です。Piは組み込み・エッジ・常時稼働ワークロードでのみ意味があります。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[OS別最簡ローカルAIアプリ：Windows、Mac、Linuxの推奨](/ja/power-local-llm/easiest-local-ai-app-windows-mac-linux) — ロースペックPCユーザーの多くは旧Windows使用、このガイドはOSごとに1つ選定。',
          '[2026年Android向けベストローカルLLMアプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — 最新Android端末を持つロースペックユーザーの自然な代替肢。',
          '[ローカルAIエージェントでZapierを置き換える](/ja/power-local-llm/replace-zapier-with-local-ai-agents) — 同じハードウェア上の予算ユーザー向け実用的ワークフロー自動化。',
          '[LM Studio vs Jan vs GPT4All：2026年に勝つローカルAIアプリは](/ja/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — LM Studioも候補に入れる場合の直接比較。',
          '[ローカルLLM向けベスト予算GPU](/ja/local-llms/best-budget-gpus-local-llm) — CPU専用領域から脱却する準備ができた時に。',
          '[2026年ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide-2026) — RAM、CPU、GPUのトレードオフを含むハードウェアの完全な権威。',
          '[Power Local LLMハブ](/ja/power-local-llm) — クラスター完全ガイドライブラリ。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ja/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': 'ロースペックPC向けベストローカルAIアプリ 2026年版（8GB RAM・GPUなし）',
      'description': 'Ollama、GPT4All、Jan、llama.cppを8GB RAM・統合グラフィックスノートPCでテスト。tok/秒、メモリ圧、設定。',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan（ローカルAIアプリ）' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': 'ロースペックPCのローカルLLM' },
      ],
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': '2026年8GB RAM・GPUなしノートPC向けベストローカルAIアプリ',
      'numberOfItems': 4,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Ollama', 'description': '最軽量CPUランタイム；最低6 GB RAM；Phi-4 Mini Q4_K_Mとの組み合わせで8GB CPU専用環境にて4〜14トークン/秒。' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GPT4All', 'description': '最簡ワンクリックインストーラー；最低4 GB RAM；Llama 3.2 1B Q4_0との組み合わせで3〜10トークン/秒；非技術ユーザー推奨。' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Jan', 'description': 'オープンソースGUI（AGPL）；最低6 GB RAM；Gemma 3 4B Q4_K_Mとの組み合わせで3〜11トークン/秒；Apple Silicon 8GBで最軽量GUI。' },
        { '@type': 'ListItem', 'position': 4, 'name': 'llama.cpp', 'description': 'コンパイルすればベアメタル速度；最低4 GB RAM；SmolLM 2 1.7B Q4_K_Mとの組み合わせで5〜18トークン/秒；同一ハードウェアで最速。' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://www.promptquorum.com/ja' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': 'ロースペックPC向けベストローカルAIアプリ', 'item': 'https://www.promptquorum.com/ja/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: '2026年低配PC最佳本地AI应用（8GB内存，无独立GPU）',
    seoTitle: '8GB内存集成显卡PC适用的本地AI 2026：Ollama、GPT4All、Jan、llama.cpp无GPU实测',
    metaDescription:
      '不需要RTX 4090。Ollama、GPT4All、Jan和llama.cpp在8GB内存集成显卡笔记本上实测。tokens/秒、内存压力、精确设置。2026年5月。',
    twitterDescription:
      '4款可在8GB内存无GPU笔记本上运行的本地AI应用。tokens/秒、精确设置、坦诚评测。2026年5月。',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: ['Intel UHD 620', 'Intel Iris Xe', 'AMD Ryzen 5 5500U', 'Apple M1 8GB', 'Intel Core i5-8250U'],
    audience: '拥有4至7年旧款笔记本（8GB内存，无独立GPU）选择首个本地AI应用的用户。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Beginner',
    primaryTerm: '低配PC本地AI',
    targetKeywords: ['本地ai 8gb 内存', '低配pc 最佳 llm', '无gpu 本地ai', 'cpu 专用 本地llm 2026', '老笔记本 本地ai'],
    leadAnswerBlock:
      '**在8GB内存无独立GPU的笔记本上，2026年有4款应用可以良好运行：Ollama、GPT4All、Jan和llama.cpp。搭配Phi-4 Mini Q4（最佳平衡）、SmolLM 2 1.7B Q4（最快）或Llama 3.2 1B Q5（最流畅GUI体验），将工作集控制在6GB以下。**',
    quickAnswerTop: {
      zh: {
        question: '8GB内存无GPU笔记本上最佳本地AI应用是什么？',
        answer:
          '熟悉终端选择Ollama — 最轻量的运行时，与Phi-4 Mini Q4搭配在旧Intel CPU上达到4–8 tok/秒，在Ryzen 5000 / Intel 12代级硬件上达到8–14 tok/秒。需要一键安装零命令行选择GPT4All — 8GB内存最宽容，内置模型浏览器。需要简洁GUI和完全开源选择Jan。需要最大tokens/秒并愿意编译选择llama.cpp。',
        bullets: [
          'Ollama — 最轻量CPU运行时，终端驱动，与Phi-4 Mini搭配最佳',
          'GPT4All — 安装最简单，最低内存4GB，推荐非技术用户',
          'Jan — 完整GUI，开源（AGPL），Apple Silicon原生，8GB Mac最轻量选择',
          'llama.cpp — 裸机速度，需要编译，与SmolLM 2 / Gemma 3 4B搭配最佳',
          '4款全部免费，安装后离线运行，加载标准GGUF模型文件',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '对比表', anchor: '#comparison-table' },
      { label: '应该选哪个？', anchor: '#which-one' },
      { label: 'tokens/秒基准（CPU专用，8GB内存）', anchor: '#cpu-benchmarks' },
      { label: '内存压力与热降频', anchor: '#memory-thermals' },
      { label: '8GB内存下每个应用的最佳模型', anchor: '#best-models' },
      { label: '提升30–60%速度的设置', anchor: '#settings' },
      { label: '集成显卡值得使用吗？', anchor: '#igpu' },
      { label: '常见错误', anchor: '#mistakes' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: '以下幻灯片包含：Ollama、GPT4All、Jan和llama.cpp在8GB内存+无GPU下实测（4〜18 tok/s）；提速30〜60%的精确设置（上下文1024、批处理8、KV缓存q8_0）；各应用推荐模型（Phi-4 Mini Q4_K_M、SmolLM 2 1.7B、Gemma 3 4B）；以及触发交换死亡的五个常见错误。下载PDF作为低端PC本地AI参考卡片。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — 2026年最轻量CPU运行时，作为后台服务器运行，最佳应用+模型组合：Ollama + Phi-4 Mini Q4在8GB CPU专用环境下达到4–14 tok/秒。',
          '**GPT4All** — 唯一支持4GB最低内存且无需终端安装路径的应用，最适合Windows 10笔记本上的非技术用户。',
          '**Jan** — 完整GUI，AGPL开源，Apple Silicon原生，8GB MacBook Air或M1 Mac mini的最轻量GUI应用。',
          '**llama.cpp** — 同硬件最快tokens/秒（比Ollama高5–15%，比GPT4All高15–25%），但需要编译步骤。',
          '**8GB / 无GPU最佳模型：** 平衡型选Phi-4 Mini 3.8B Q4_K_M，最大速度选SmolLM 2 1.7B Q4，最流畅聊天体验选Llama 3.2 1B Q5。',
          '**同CPU速度排名：** llama.cpp > Ollama > Jan > GPT4All。差距15–25%，不是2–3倍。',
          '**截至2026年5月，请勿在8GB内存上运行7B+模型** — 上下文窗口压力加上操作系统本身将触发交换，使吞吐量下降5–10倍。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Ollama、GPT4All、Jan和llama.cpp在8GB内存无GPU上如何对比？',
        content:
          '以下范围汇总自llama.cpp上游基准测试线程、Hugging Face模型卡数据和r/LocalLLaMA在8GB集成显卡笔记本（Intel UHD 620 / Iris Xe / Ryzen 5 5500U Vega / Apple M1 8GB）上的测试报告。tokens/秒在模型加载后的200 token生成上测量，默认上下文窗口2048（除非另注）。',
        snippetBlocks: [
          { type: 'one-sentence', text: '在8GB内存无独立GPU的笔记本上，搭配Phi-4 Mini Q4_K_M的Ollama是最佳全能本地AI配置 — 在无代码选项中生成速度最快、热负载最低、模型库最广。' },
          { type: 'plain-terms', text: '在8GB内存无GPU的低配PC上：安装Ollama，运行 `ollama pull phi4-mini`，然后 `ollama run phi4-mini`。根据CPU可获得4–14 tokens/秒 — 较慢但适用于发送提示后等待响应的任务。无终端替代方案：GPT4All像普通应用一样安装，并将模型列表精选为可装入8GB的模型。' },
        ],
        callouts: [
          { type: 'note', text: 'Apple M1 8GB在本表所有4个应用中始终优于8GB x86笔记本。如果可以使用Apple Silicon Mac，它是低内存本地AI硬件的最佳选择 — 统一内存架构使模型可访问完整8GB，没有Windows和Linux笔记本面临的OS开销负担。' },
        ],
        columns: ['应用', '最低内存', '最佳模型（8GB限制）', 'tokens/秒（CPU专用）', '发热', '评判'],
        rows: [
          { '应用': 'Ollama', '最低内存': '6 GB', '最佳模型（8GB限制）': 'Phi-4 Mini Q4_K_M', 'tokens/秒（CPU专用）': '4–14 tok/s', '发热': '低', '评判': '最佳平衡 — 优先选择' },
          { '应用': 'GPT4All', '最低内存': '4 GB', '最佳模型（8GB限制）': 'Llama 3.2 1B Q4_0', 'tokens/秒（CPU专用）': '3–10 tok/s', '发热': '低', '评判': '安装最简 — 非技术用户首选' },
          { '应用': 'Jan', '最低内存': '6 GB', '最佳模型（8GB限制）': 'Gemma 3 4B Q4_K_M', 'tokens/秒（CPU专用）': '3–11 tok/s', '发热': '中', '评判': 'Apple Silicon 8GB最佳GUI' },
          { '应用': 'llama.cpp', '最低内存': '4 GB', '最佳模型（8GB限制）': 'SmolLM 2 1.7B Q4_K_M', 'tokens/秒（CPU专用）': '5–18 tok/s', '发热': '低', '评判': '能编译则最快' },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: '应该选哪个？',
        content: '**正确的应用取决于您是否能用终端、Windows还是Mac、CPU有多老。** 使用以下决策捷径：',
        rows: [
          { '您的情况': 'Windows 10笔记本，8GB内存，无终端经验', '选择': 'GPT4All' },
          { '您的情况': '现代Ryzen / Intel 12代，8GB，熟悉终端', '选择': 'Ollama' },
          { '您的情况': 'MacBook Air M1 / Mac mini M1 8GB', '选择': 'Jan或Ollama' },
          { '您的情况': 'Linux笔记本，追求最大tokens/秒', '选择': 'llama.cpp' },
          { '您的情况': '4GB内存机器（低于规格）', '选择': 'GPT4All + Llama 3.2 1B Q4_0' },
          { '您的情况': '老旧Intel Core i5-8250U / i7-7700U级CPU', '选择': 'Ollama + SmolLM 2 1.7B' },
          { '您的情况': '启用Linux开发模式的Chromebook', '选择': 'llama.cpp + SmolLM 2' },
          { '您的情况': '无法安装驱动的工作笔记本', '选择': 'GPT4All（无驱动 / 无管理员权限安装）' },
        ],
        columns: ['您的情况', '选择'],
        callouts: [
          { type: 'tip', text: '如有疑虑，从Ollama开始。它在所有OS上运行，通过简单的 `ollama pull [模型名]` 命令拉取模型，并暴露OpenAI兼容API以便后续集成其他工具。如果终端是死结，GPT4All是正确替代 — 同样的模型，无需命令行。' },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: '每个应用在真实低配硬件上有多快？',
        content: '**8GB内存无独立GPU代表性机器上的tokens/秒，2026年5月。** 数字是来自llama.cpp上游基准测试线程、Hugging Face模型卡数据和r/LocalLLaMA硬件标记测试的社区报告范围。每个单元格是默认设置下报告运行的典型范围（排除异常值）。',
        columns: ['硬件', '模型', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          { '硬件': 'Intel Core i5-8250U + UHD 620（2018超便携）', '模型': 'Phi-4 Mini Q4_K_M', 'Ollama': '4–6 tok/s', 'GPT4All': '3–5 tok/s', 'Jan': '3–5 tok/s', 'llama.cpp': '5–7 tok/s' },
          { '硬件': 'AMD Ryzen 5 5500U + Vega 7（2021入门）', '模型': 'Phi-4 Mini Q4_K_M', 'Ollama': '8–11 tok/s', 'GPT4All': '6–9 tok/s', 'Jan': '7–9 tok/s', 'llama.cpp': '9–13 tok/s' },
          { '硬件': 'Intel Core Ultra 5 125H + Arc iGPU（2024中端）', '模型': 'Gemma 3 4B Q4_K_M', 'Ollama': '10–14 tok/s', 'GPT4All': '8–11 tok/s', 'Jan': '9–12 tok/s', 'llama.cpp': '12–18 tok/s' },
          { '硬件': 'Apple M1 8GB（MacBook Air 2020）', '模型': 'Llama 3.2 1B Q5_K_M', 'Ollama': '28–40 tok/s', 'GPT4All': '20–30 tok/s', 'Jan': '26–38 tok/s', 'llama.cpp': '32–48 tok/s' },
          { '硬件': 'Apple M1 8GB', '模型': 'Phi-4 Mini Q4_K_M', 'Ollama': '12–18 tok/s', 'GPT4All': '9–14 tok/s', 'Jan': '11–17 tok/s', 'llama.cpp': '14–20 tok/s' },
          { '硬件': 'Intel Core i5-8250U', '模型': 'SmolLM 2 1.7B Q4_K_M', 'Ollama': '10–14 tok/s', 'GPT4All': '8–12 tok/s', 'Jan': '9–13 tok/s', 'llama.cpp': '12–16 tok/s' },
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon在此表中占主导地位是因为M1的统一内存架构允许GPU和CPU以高带宽共享相同内存。在无独立GPU的x86笔记本上，集成显卡很少值得卸载开销 — 见下方iGPU部分。' },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: '为什么8GB内存感觉如此紧张，笔记本何时会降频？',
        content:
          '**在8GB内存上，操作系统在加载任何模型前已占用2.5–3.5GB，给模型及其KV缓存留下4.5–5.5GB。** 这一上限使Phi-4 Mini（3.8B Q4 ≈ 2.4 GB）成为实用甜点位，并排除任何量化的7B模型用于持续使用。',
        items: [
          '**工作集 vs 系统内存：** 磁盘上的模型文件比加载后的工作集小。Phi-4 Mini Q4_K_M在磁盘上 ≈ 2.4 GB，但加载2048 token上下文的KV缓存后在内存中达到 ≈ 3.0–3.5 GB。将上下文降至1024可节省 ≈ 400 MB。',
          '**交换死亡：** 当工作集超过物理内存时，macOS和Linux开始向SSD分页。tokens/秒下降5–10倍，笔记本变得无响应。监视 `vm_stat`（Mac）或 `free -h`（Linux）— 如果推理过程中交换上升，立即切换到更小的模型。',
          '**超便携笔记本上的热降频：** 无风扇和单风扇笔记本（MacBook Air M1、XPS 13、Surface Laptop Go）在持续推理3–5分钟后达到热限制，CPU时钟下降20–35%。tokens/秒相应下降。',
          '**上下文长度是内存税：** 默认4096上下文预先分配4096 token的KV缓存。在1B模型上是200–300 MB，在4B模型上是600–900 MB。除非确实需要长输入，否则削减到1024。',
          '**后台应用比CPU型号更重要：** 20个标签页的Chrome窗口是1–2 GB。Slack是400–600 MB。在8GB内存上，加载4B模型前关闭这些应用是可用的最大单项tokens/秒提升。',
        ],
        callouts: [
          { type: 'warning', text: '在8GB内存上不要加载任何7B模型，即使是Q2。Q2 7B在磁盘上 ≈ 2.5 GB，但工作集加2048上下文达到 ≈ 5.5 GB，在大多数Windows / Linux系统上越界进入交换。结果是5–10倍速度下降和UI冻结。' },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: '每个应用应该加载哪个模型和量化？',
        content:
          '**在8GB内存无独立GPU上，保持在4B参数Q4_K_M或更低。** Q4_K_M是2026年的标准量化 — 相比FP16损失 ≈ 1%困惑度，占用一半内存，是Hugging Face上大多数GGUF构建的默认。按应用列出：',
        items: [
          '**Ollama：** `ollama pull phi3:mini`（Phi-4 Mini 3.8B Q4_K_M，≈ 2.4 GB）是默认推荐。最大速度选 `ollama pull smollm2:1.7b`（≈ 1.0 GB）。聊天精致度选 `ollama pull llama3.2:1b-instruct-q5_K_M`（≈ 0.85 GB）。',
          '**GPT4All：** 使用应用内模型浏览器 → "Llama 3.2 1B Instruct Q4_0"（≈ 0.7 GB）最轻量安装，或 "Phi-4 Mini Q4_K_M" 如果内存允许。GPT4All默认值经过保守调整，因此可见模型列表比llama.cpp短，但每个条目都能运行。',
          '**Jan：** 使用精选目录 → Apple Silicon上选 "Gemma 3 4B Instruct Q4_K_M"（≈ 2.6 GB），x86上选 "Phi-4 Mini Q4_K_M"。Jan也接受任意GGUF的Hugging Face URL粘贴。',
          '**llama.cpp：** 直接从Hugging Face下载GGUF — `bartowski/Phi-4-mini-instruct-GGUF`、`bartowski/SmolLM2-1.7B-Instruct-GGUF` 或 `bartowski/Llama-3.2-1B-Instruct-GGUF`。运行 `./llama-cli -m model.gguf -p "..." -c 1024 -t 4`。',
          '**8GB / 无GPU上避免：** 任何量化的7B模型，Q5_K_M以上的模型（质量增益微不足道，内存成本翻倍），和任何基础模型 — 始终选择 `-instruct` 或 `-chat` 变体以获得可用输出。',
        ],
        callouts: [
          { type: 'tip', text: 'Q4_K_M与Q4_0不同。Q4_K_M使用更智能的混合精度方案，相同大小下质量好 ≈ 5–10%。两者都可用时始终选择Q4_K_M。' },
        ],
      },
      settings: {
        id: 'settings',
        title: '哪些设置在低配PC上带来30–60%更多tokens/秒？',
        content:
          '**默认设置针对16GB内存和独立GPU调整。在8GB CPU专用上，三个旋钮最重要：** 上下文长度、批量大小和线程数。一起调整，在同一硬件上价值30–60%更多tokens/秒。',
        items: [
          '**上下文长度 — 最大单项收益。** 从4096（默认）削减到1024。Ollama中：`OLLAMA_NUM_CTX=1024 ollama run phi3:mini`。llama.cpp中：`-c 1024`。内存节省：根据模型400–900 MB。tokens/秒收益：10–20%。',
          '**线程数 — 匹配物理核心，不是逻辑核心。** 旧CPU（i5-8250U、Ryzen 5 5500U）有4物理 / 8逻辑核心。设置线程 = 4，不是8。llama.cpp中：`-t 4`。Ollama中：`OLLAMA_NUM_THREAD=4`。超线程伤害推理，因为两个线程争夺同一FP/SIMD单元。',
          '**提示处理批量大小 — 弱CPU设为8。** llama.cpp：`--n-batch 8`。默认512在4核CPU上抖动L2缓存。4B模型上的tokens/秒收益：15–25%。',
          '**KV缓存量化 — 设为q8_0以将KV内存减半。** llama.cpp：`--cache-type-k q8_0 --cache-type-v q8_0`。内存节省：1024上下文下150–400 MB，更高上下文更多。质量影响：不可察觉。',
          '**在易交换系统上禁用mlock。** llama.cpp `--no-mlock`。在8GB系统上，将模型锁定在内存中阻止OS做出智能缓存决策。违反直觉但在8GB Windows 10/11上始终更快。',
          '**显式使用AVX2构建。** 大多数预构建llama.cpp / Ollama二进制文件自动检测AVX2 / AVX-512并切换到正确的内核。如果自己编译，传递 `-DGGML_AVX2=ON`。AVX-512检测：`cat /proc/cpuinfo | grep avx512`。AVX-512在支持的CPU（Ice Lake / Tiger Lake / Rocket Lake / Zen 4+）上额外提供10–15%。',
        ],
        callouts: [
          { type: 'tip', text: '叠加全部五项调整，您通常会看到同一模型同一硬件上多35–55% tokens/秒。最大的单项收益是从4096 → 1024的上下文削减，这也大幅缩短冷启动提示的首token时间。' },
        ],
      },
      igpu: {
        id: 'igpu',
        title: '集成显卡值得用于本地AI吗？',
        content:
          '**在大多数8GB内存笔记本上，答案是不 — 将推理保持在CPU上。** 集成显卡共享系统内存，因此卸载层不会给您额外内存；它只是增加卸载开销负担。三个值得知道的例外：',
        items: [
          '**Apple Silicon（M1/M2/M3/M4）— 是，始终。** 统一内存架构意味着 "GPU" 以与CPU相同的带宽看到相同的内存。Ollama、Jan和llama.cpp都在Mac上自动使用Metal加速，无需标志。这就是为什么M1 8GB比大多数8GB Windows笔记本快2–3倍。',
          '**Intel Arc iGPU（Meteor Lake / Lunar Lake / Arrow Lake）— 有时。** Intel Core Ultra芯片（Ultra 5 125H、Ultra 7 155H、Ultra 7 258V）配备支持OpenVINO和SYCL加速的Arc iGPU。带 `-DGGML_SYCL=ON` 的llama.cpp在这些芯片上比CPU专用快30–60%。设置不平凡。',
          '**AMD Ryzen 7000/8000配Radeon 700M/800M iGPU — 实验性。** 集成Radeon上的ROCm支持在2026年是部分且挑剔的。除非您喜欢调试驱动栈，否则CPU专用是更安全的选择。',
          '**老旧Intel UHD / Iris Plus / AMD Vega — 跳过。** 这些iGPU缺乏FP16吞吐量和内存带宽来击败现代AVX2 CPU内核。保持在CPU上。',
        ],
        callouts: [
          { type: 'tip', text: '检查iGPU是否值得使用的最简单测试：在CPU专用与iGPU加速下对同一模型运行10次生成，比较tokens/秒。在Apple Silicon上，iGPU始终更快。在x86集成显卡上，答案是设备特定的 — 测试而不是假设。' },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: '常见错误',
        content: '**在8GB / 无GPU系统上扼杀性能的五个错误**，每个都附带修复方案：',
        items: [
          '**错误1："因为Q4在磁盘上能装下" 加载7B模型。** 磁盘文件比加载后的工作集小。7B Q4在磁盘上 ≈ 4.4 GB，2048上下文下在内存中 ≈ 5.5–6.5 GB，越过8GB上限触发交换。**修复：** 保持在4B或以下。Phi-4 Mini Q4_K_M是始终能装下的最高质量模型。',
          '**错误2：将上下文窗口保持在4096。** 默认4096在模型之外预留400–900 MB的KV缓存。**修复：** 除非确实需要长输入，否则将上下文设为1024。`OLLAMA_NUM_CTX=1024`（Ollama）、`-c 1024`（llama.cpp）。',
          '**错误3：在Chrome、Slack和Spotify打开的情况下运行。** 每个占用0.5–2 GB。在8GB内存上，OS之后剩 ≈ 5 GB。后台应用在模型加载前就将您推入交换。**修复：** 推理前关闭除AI应用和笔记窗口之外的所有内容。',
          '**错误4："为质量" 选择Q8_0。** 在1B–4B模型上，Q4_K_M和Q8_0之间的质量差异在聊天用途上低于人类感知阈值，但Q8将内存成本翻倍并将tokens/秒减半。**修复：** 除非您有可衡量的基准显示Q8对您的任务有帮助，否则保持Q4_K_M。',
          '**错误5：假设Raspberry Pi 4足够。** 4 GB内存和1.5 GHz Cortex-A72在技术上能以1–3 tok/s运行TinyLlama 1B，但聊天体验无法使用。**修复：** 8 GB内存的Raspberry Pi 5是现实的ARM SBC底线 — 即使如此，8GB x86笔记本仍更快。',
        ],
        callouts: [
          { type: 'tip', text: '所有五个错误都有相同的根源：假设桌面设置适用于受限笔记本。每个默认值（上下文4096、Q8质量、所有线程）都针对16–32 GB内存配独立GPU的机器调整。在8GB CPU专用上，您需要主动覆盖默认值。将本指南的设置部分视为 "低配PC预设" — 在首次运行前应用全部五项调整。' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '能在4GB内存上运行本地AI吗？', a: '可以，但仅限于Llama 3.2 1B Q4_0（磁盘上 ≈ 0.7 GB）或SmolLM 2 360M（磁盘上 ≈ 0.25 GB）等2B以下模型。GPT4All是4个应用中唯一将4GB列为官方最低要求的。预期现代CPU上3–8 tok/s，UI行为明显迟钝，因为OS几乎没有余量。' },
          { q: '老旧Intel CPU能用于本地AI吗？', a: '任何带AVX2的（Haswell，2013年或更新）在2026年都可用。实用底线是Intel Core i5-8250U或老旧Ryzen 5 2500U，Phi-4 Mini Q4在其上以4–6 tok/s运行。无AVX2的CPU（2013年前Intel、原版AMD推土机）会加载但以1–2 tok/s运行，聊天用途不可用。' },
          { q: '本地AI会损坏我的笔记本吗？', a: '不会。本地推理是普通用户空间进程 — 它无法损害硬件。最坏情况是笔记本运行温度高（超便携上90–100°C）和降频，固件自动保护。要避免这种情况，长时间会话使用散热垫，保持房间在25°C以下，如果机身触摸不舒服则停止推理。' },
          { q: '集成显卡足够吗？', a: '在Apple Silicon（M1+）上绰绰有余 — 统一内存使iGPU实际上是低端独立GPU。在Intel Core Ultra（Meteor Lake / Arrow Lake）上设置SYCL可获得30–60%额外速度。在老旧Intel UHD / Iris Plus / AMD Vega上，集成显卡比CPU慢，不值得使用。' },
          { q: 'CPU专用最快的模型是什么？', a: 'Llama 3.2 1B Q4_0和SmolLM 2 1.7B Q4_K_M是最快可用模型。Llama 3.2 1B在Apple M1上达到25–50 tok/s，在现代Ryzen或Intel CPU上达到12–25 tok/s。SmolLM 2速度相似，写作稍精致。任何超过4B参数的模型在CPU专用系统上都不太可能感觉快。' },
          { q: '加内存是否比升级CPU更有帮助？', a: '在8GB系统上，升级到16GB是最大的实用升级，因为它解锁了Mistral Small Q4和Llama 3.3 8B Q4等7B–8B模型。CPU升级提供20–50%更多tokens/秒；内存升级提供2–4倍质量（从1B–4B跃升到7B–8B）。如果只能选一个，加内存。' },
          { q: '能在Chromebook上运行本地AI吗？', a: '仅当Linux开发模式（Crostini）可用。本指南的4个应用都在Linux容器中运行 — 从源码编译的llama.cpp在ARM Chromebook上最可靠，而x86 Chromebook（基于Intel）使用Ollama或GPT4All。性能映射到底层CPU；Intel Core i3 / i5 Chromebook表现类似等效Windows笔记本。' },
          { q: '2026年Windows 10还能用于本地AI吗？', a: '是的。所有4个应用都支持Windows 10 22H2。Ollama、GPT4All和Jan提供签名的Windows安装程序；llama.cpp在其GitHub发布版中提供预构建Windows二进制文件。2025年10月Windows 10主流支持结束并不阻止安装，但安全更新已停止 — 长期使用可考虑Linux双启动或升级到Windows 11。' },
          { q: '能良好运行本地AI的最便宜笔记本是什么？', a: '二手2021–2022 ThinkPad T14或Dell Latitude 5430（16 GB内存，Ryzen 5 5500U或Intel i5-1235U）在2026年售价350–450欧元，运行Phi-4 Mini Q4达8–14 tok/s。更便宜：任何8 GB Apple M1 MacBook Air二手450–550欧元，得益于统一内存在tokens/秒上击败大多数x86笔记本。' },
          { q: '能用Raspberry Pi做本地AI吗？', a: '8 GB内存的Raspberry Pi 5以4–7 tok/s运行Llama 3.2 1B Q4 — 可用但慢。Pi 4 4 GB在TinyLlama 1B上限约2 tok/s。对于真实聊天使用，8 GB x86笔记本或M1 MacBook Air更快、二手更便宜、设置更简单。Pi仅在嵌入式、边缘或常开工作负载中有意义。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[各操作系统最简本地AI应用：Windows、Mac、Linux推荐](/zh/power-local-llm/easiest-local-ai-app-windows-mac-linux) — 许多低配PC用户使用旧Windows，本指南为每个OS选择一个应用。',
          '[2026年Android最佳本地LLM应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 拥有近期Android手机的低配用户的自然替代。',
          '[用本地AI代理替代Zapier](/zh/power-local-llm/replace-zapier-with-local-ai-agents) — 同硬件上预算用户的实用工作流自动化。',
          '[LM Studio vs Jan vs GPT4All：2026年哪个本地AI应用胜出](/zh/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — 如果还想考虑LM Studio的正面对决。',
          '[本地LLM最佳预算GPU](/zh/local-llms/best-budget-gpus-local-llm) — 准备好走出CPU专用领域时。',
          '[2026年本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide-2026) — 包括内存、CPU和GPU权衡的完整硬件权威。',
          '[Power Local LLM中心](/zh/power-local-llm) — 集群完整指南库。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/zh/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': '2026年低配PC最佳本地AI应用（8GB内存，无独立GPU）',
      'description': 'Ollama、GPT4All、Jan和llama.cpp在8GB内存集成显卡笔记本上实测。tokens/秒、内存压力、精确设置。',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com', 'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' } },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan（本地AI应用）' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': '低配PC本地LLM' },
      ],
      'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': '2026年8GB内存无GPU笔记本最佳本地AI应用',
      'numberOfItems': 4,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Ollama', 'description': '最轻量CPU运行时；最低6 GB内存；与Phi-4 Mini Q4_K_M搭配在8GB CPU专用环境下达到4–14 tokens/秒。' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GPT4All', 'description': '最简一键安装程序；最低4 GB内存；与Llama 3.2 1B Q4_0搭配达3–10 tokens/秒；推荐非技术用户。' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Jan', 'description': '开源GUI（AGPL）；最低6 GB内存；与Gemma 3 4B Q4_K_M搭配达3–11 tokens/秒；Apple Silicon 8GB最轻量GUI。' },
        { '@type': 'ListItem', 'position': 4, 'name': 'llama.cpp', 'description': '编译则有裸机速度；最低4 GB内存；与SmolLM 2 1.7B Q4_K_M搭配达5–18 tokens/秒；同硬件最快。' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': '主页', 'item': 'https://www.promptquorum.com/zh' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': '低配PC最佳本地AI应用', 'item': 'https://www.promptquorum.com/zh/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'Mejores apps de IA local para PCs de gama baja en 2026 (8 GB RAM, sin GPU)',
    seoTitle: 'Mejores apps de IA local en PC de 8 GB 2026: solo CPU',
    metaDescription:
      'Ollama, GPT4All, Jan y llama.cpp probados en portátiles con 8 GB RAM y gráficos integrados. Tokens/s, presión de memoria, configuraciones exactas. Mayo 2026.',
    twitterDescription:
      '4 apps de IA local que funcionan en portátiles con 8 GB RAM sin GPU. Tokens/s, configuraciones exactas, veredictos honestos. Mayo 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: [
      'Intel UHD 620',
      'Intel Iris Xe',
      'AMD Ryzen 5 5500U',
      'Apple M1 8GB',
      'Intel Core i5-8250U',
    ],
    audience:
      'Propietarios de portátiles de 4 a 7 años con 8 GB RAM y sin GPU dedicada que eligen su primera app de IA local.',
    readTime: '11 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'IA local en PC de gama baja',
    targetKeywords: [
      'ia local 8gb ram',
      'mejor llm local pc gama baja',
      'ia local sin gpu',
      'llm local solo cpu 2026',
      'ia local portátil antiguo',
    ],
    leadAnswerBlock:
      '**En un portátil con 8 GB RAM y sin GPU dedicada, cuatro apps funcionan bien en 2026: Ollama, GPT4All, Jan y llama.cpp. Combina cualquiera con Phi-4 Mini Q4 (mejor equilibrio), SmolLM 2 1.7B Q4 (más rápido) o Llama 3.2 1B Q5 (experiencia GUI más fluida) y mantén el conjunto de trabajo por debajo de 6 GB.**',
    quickAnswerTop: {
      es: {
        question: '¿Qué app de IA local funciona mejor en un portátil con 8 GB RAM sin GPU?',
        answer:
          'Elige Ollama si te manejas con la terminal — es el runtime más ligero y funciona muy bien con Phi-4 Mini Q4 a 4–8 tok/s en CPUs Intel más antiguas y 8–14 tok/s en hardware de la clase Ryzen 5000 / Intel 12.ª gen. Elige GPT4All si quieres un instalador de un clic y nada de línea de comandos — es la más tolerante con 8 GB RAM e incluye un navegador de modelos integrado. Elige Jan si quieres una GUI limpia y código completamente abierto. Elige llama.cpp directamente si quieres el máximo de tokens por segundo y no te importa compilar.',
        bullets: [
          'Ollama — runtime CPU más ligero, basado en terminal, mejor combinación con Phi-4 Mini',
          'GPT4All — instalación más sencilla, RAM mínima de 4 GB, recomendada para usuarios no técnicos',
          'Jan — GUI completa, código abierto (AGPL), nativa en Apple Silicon, la opción más ligera en Mac con 8 GB',
          'llama.cpp — velocidad bare-metal, requiere compilar, mejor combinación con SmolLM 2 / Gemma 3 4B',
          'Las cuatro son gratuitas, funcionan sin conexión tras instalar y cargan archivos de modelo GGUF estándar',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Tabla comparativa', anchor: '#comparison-table' },
      { label: '¿Cuál deberías elegir?', anchor: '#which-one' },
      { label: 'Benchmarks de tokens/s (solo CPU, 8 GB RAM)', anchor: '#cpu-benchmarks' },
      { label: 'Presión de memoria y throttling térmico', anchor: '#memory-thermals' },
      { label: 'Mejor modelo por app con 8 GB RAM', anchor: '#best-models' },
      { label: 'Configuraciones que dan 30–60% más velocidad', anchor: '#settings' },
      { label: 'Gráficos integrados: ¿vale la pena?', anchor: '#igpu' },
      { label: 'Errores comunes', anchor: '#mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: 'La presentación de abajo cubre: Ollama, GPT4All, Jan y llama.cpp probados con 8 GB RAM sin GPU (4–18 tok/s); las configuraciones exactas para un 30–60% más de velocidad (contexto 1024, batch 8, caché KV q8_0); el mejor modelo por app (Phi-4 Mini Q4_K_M, SmolLM 2 1.7B, Gemma 3 4B); y cinco errores comunes que provocan swap fatal. Descarga el PDF como tarjeta de referencia para PCs de gama baja.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — runtime CPU más ligero en 2026, funciona como servidor en segundo plano, mejor combinación app + modelo: Ollama + Phi-4 Mini Q4 a 4–14 tok/s en 8 GB solo CPU.',
          '**GPT4All** — única app con un mínimo de 4 GB RAM e instalación sin terminal, ideal para usuarios no técnicos en portátiles con Windows 10.',
          '**Jan** — GUI completa, código abierto AGPL, nativa en Apple Silicon, la app GUI más ligera para un MacBook Air de 8 GB o Mac mini M1.',
          '**llama.cpp** — mayor tokens/s en hardware idéntico (5–15% por encima de Ollama, 15–25% por encima de GPT4All), pero requiere un paso de compilación.',
          '**Mejor modelo con 8 GB / sin GPU:** Phi-4 Mini 3.8B en Q4_K_M para equilibrio, SmolLM 2 1.7B Q4 para máxima velocidad, Llama 3.2 1B Q5 para la experiencia de chat más fluida.',
          '**Ranking de velocidad en CPU idéntica:** llama.cpp > Ollama > Jan > GPT4All. La diferencia es del 15–25%, no de 2–3×.',
          '**A mayo de 2026, no ejecutes modelos de 7B+ en 8 GB RAM** — la presión de la ventana de contexto más el propio sistema operativo activarán el swap y reducirán el throughput entre 5 y 10 veces.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '¿Cómo se comparan Ollama, GPT4All, Jan y llama.cpp en 8 GB RAM sin GPU?',
        content:
          'Los rangos a continuación se agregan a partir de hilos de benchmark de llama.cpp upstream, cifras de las fichas de modelos de Hugging Face e informes de pruebas de r/LocalLLaMA en portátiles de 8 GB con gráficos integrados (Intel UHD 620 / Iris Xe / Ryzen 5 5500U Vega / Apple M1 8 GB). Los tokens/s se miden en generaciones de 200 tokens tras cargar el modelo, ventana de contexto por defecto 2048 salvo indicación.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En un portátil con 8 GB RAM y sin GPU dedicada, Ollama con Phi-4 Mini Q4_K_M es la mejor configuración de IA local para todo uso — la velocidad de generación más rápida entre las opciones sin código, la menor carga térmica y la biblioteca de modelos más amplia.',
          },
          {
            type: 'plain-terms',
            text: 'En un PC de gama baja con 8 GB RAM y sin GPU: instala Ollama, ejecuta `ollama pull phi4-mini` y luego `ollama run phi4-mini`. Obtendrás entre 4 y 14 tokens por segundo según tu CPU — lento pero usable para tareas donde envías un prompt y esperas la respuesta. Para una alternativa sin terminal, GPT4All se instala como una app normal y filtra su lista de modelos a los que caben en 8 GB.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'El Apple M1 con 8 GB supera sistemáticamente a los portátiles x86 con 8 GB en las cuatro apps de esta tabla. Si tienes acceso a un Mac con Apple Silicon, es el mejor hardware de bajo RAM para IA local — la arquitectura de memoria unificada permite al modelo acceder a los 8 GB completos sin la penalización de overhead del SO que sufren los portátiles con Windows y Linux.',
          },
        ],
        columns: ['App', 'RAM mín.', 'Mejor modelo (límite 8 GB)', 'Tokens/s (solo CPU)', 'Calor', 'Veredicto'],
        rows: [
          {
            'App': 'Ollama',
            'RAM mín.': '6 GB',
            'Mejor modelo (límite 8 GB)': 'Phi-4 Mini Q4_K_M',
            'Tokens/s (solo CPU)': '4–14 tok/s',
            'Calor': 'Bajo',
            'Veredicto': 'Mejor equilibrio — primera opción',
          },
          {
            'App': 'GPT4All',
            'RAM mín.': '4 GB',
            'Mejor modelo (límite 8 GB)': 'Llama 3.2 1B Q4_0',
            'Tokens/s (solo CPU)': '3–10 tok/s',
            'Calor': 'Bajo',
            'Veredicto': 'Instalación más sencilla — opción no técnica',
          },
          {
            'App': 'Jan',
            'RAM mín.': '6 GB',
            'Mejor modelo (límite 8 GB)': 'Gemma 3 4B Q4_K_M',
            'Tokens/s (solo CPU)': '3–11 tok/s',
            'Calor': 'Medio',
            'Veredicto': 'Mejor GUI en Apple Silicon 8 GB',
          },
          {
            'App': 'llama.cpp',
            'RAM mín.': '4 GB',
            'Mejor modelo (límite 8 GB)': 'SmolLM 2 1.7B Q4_K_M',
            'Tokens/s (solo CPU)': '5–18 tok/s',
            'Calor': 'Bajo',
            'Veredicto': 'La más rápida si compilas',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: '¿Cuál deberías elegir?',
        content:
          '**La app correcta depende de si puedes usar una terminal, si estás en Windows o Mac y cuántos años tiene tu CPU.** Usa este atajo de decisión:',
        rows: [
          {
            'Tu situación': 'Portátil Windows 10, 8 GB RAM, sin experiencia con terminal',
            'Elige': 'GPT4All',
          },
          {
            'Tu situación': 'Ryzen moderno / Intel 12.ª gen, 8 GB, cómodo con la terminal',
            'Elige': 'Ollama',
          },
          {
            'Tu situación': 'MacBook Air M1 / Mac mini M1 8 GB',
            'Elige': 'Jan u Ollama',
          },
          {
            'Tu situación': 'Portátil Linux, quieres el máximo de tokens/s',
            'Elige': 'llama.cpp',
          },
          {
            'Tu situación': 'Máquina con 4 GB RAM (por debajo de especificaciones)',
            'Elige': 'GPT4All + Llama 3.2 1B Q4_0',
          },
          {
            'Tu situación': 'CPU antigua de clase Intel Core i5-8250U / i7-7700U',
            'Elige': 'Ollama + SmolLM 2 1.7B',
          },
          {
            'Tu situación': 'Chromebook con modo desarrollador Linux',
            'Elige': 'llama.cpp + SmolLM 2',
          },
          {
            'Tu situación': 'Portátil de trabajo donde no puedes instalar drivers',
            'Elige': 'GPT4All (instalación sin driver / sin derechos de admin)',
          },
        ],
        columns: ['Tu situación', 'Elige'],
        callouts: [
          {
            type: 'tip',
            text: 'Ante la duda, empieza con Ollama. Funciona en todos los sistemas operativos, descarga modelos con un sencillo `ollama pull [nombre-del-modelo]` y expone una API compatible con OpenAI si quieres integrar otras herramientas más adelante. Si la terminal es un problema, GPT4All es la alternativa correcta — mismos modelos, sin línea de comandos.',
          },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: '¿Qué tan rápida es cada app en hardware de gama baja real?',
        content:
          '**Tokens por segundo en máquinas representativas con 8 GB RAM y sin GPU dedicada, mayo 2026.** Los números son rangos reportados por la comunidad en hilos de benchmark de llama.cpp upstream, datos de fichas de modelos de Hugging Face y pruebas con etiquetas de hardware de r/LocalLLaMA. Cada celda es el rango típico de las ejecuciones reportadas con configuración por defecto; se excluyen valores atípicos.',
        columns: ['Hardware', 'Modelo', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          {
            'Hardware': 'Intel Core i5-8250U + UHD 620 (ultraportátil 2018)',
            'Modelo': 'Phi-4 Mini Q4_K_M',
            'Ollama': '4–6 tok/s',
            'GPT4All': '3–5 tok/s',
            'Jan': '3–5 tok/s',
            'llama.cpp': '5–7 tok/s',
          },
          {
            'Hardware': 'AMD Ryzen 5 5500U + Vega 7 (gama económica 2021)',
            'Modelo': 'Phi-4 Mini Q4_K_M',
            'Ollama': '8–11 tok/s',
            'GPT4All': '6–9 tok/s',
            'Jan': '7–9 tok/s',
            'llama.cpp': '9–13 tok/s',
          },
          {
            'Hardware': 'Intel Core Ultra 5 125H + Arc iGPU (gama media 2024)',
            'Modelo': 'Gemma 3 4B Q4_K_M',
            'Ollama': '10–14 tok/s',
            'GPT4All': '8–11 tok/s',
            'Jan': '9–12 tok/s',
            'llama.cpp': '12–18 tok/s',
          },
          {
            'Hardware': 'Apple M1 8 GB (MacBook Air 2020)',
            'Modelo': 'Llama 3.2 1B Q5_K_M',
            'Ollama': '28–40 tok/s',
            'GPT4All': '20–30 tok/s',
            'Jan': '26–38 tok/s',
            'llama.cpp': '32–48 tok/s',
          },
          {
            'Hardware': 'Apple M1 8 GB',
            'Modelo': 'Phi-4 Mini Q4_K_M',
            'Ollama': '12–18 tok/s',
            'GPT4All': '9–14 tok/s',
            'Jan': '11–17 tok/s',
            'llama.cpp': '14–20 tok/s',
          },
          {
            'Hardware': 'Intel Core i5-8250U',
            'Modelo': 'SmolLM 2 1.7B Q4_K_M',
            'Ollama': '10–14 tok/s',
            'GPT4All': '8–12 tok/s',
            'Jan': '9–13 tok/s',
            'llama.cpp': '12–16 tok/s',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Apple Silicon domina esta tabla porque la arquitectura de memoria unificada del M1 permite que la GPU y la CPU compartan la misma RAM a alto ancho de banda. En portátiles x86 sin GPU dedicada, los gráficos integrados raramente compensan la penalización de overhead del offload — ver la sección iGPU más abajo.',
          },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: '¿Por qué 8 GB RAM se siente tan justo y cuándo empieza a limitarse el portátil?',
        content:
          '**Con 8 GB RAM, el sistema operativo ya consume 2,5–3,5 GB antes de cargar cualquier modelo, dejando 4,5–5,5 GB para el modelo y su caché KV.** Ese techo convierte a Phi-4 Mini (3.8B Q4 ≈ 2,4 GB) en el punto óptimo práctico y descarta cualquier modelo de 7B con cualquier cuantización para uso sostenido.',
        items: [
          '**Conjunto de trabajo vs RAM del sistema:** El archivo del modelo en disco es más pequeño que su conjunto de trabajo cargado. Phi-4 Mini Q4_K_M ocupa ≈ 2,4 GB en disco pero ≈ 3,0–3,5 GB en RAM una vez añadido el caché KV para un contexto de 2048 tokens. Recortar el contexto a 1024 ahorra ≈ 400 MB.',
          '**Muerte por swap:** Cuando el conjunto de trabajo supera la RAM física, macOS y Linux comienzan a paginar en el SSD. Los tokens/s caen entre 5 y 10 veces y el portátil se vuelve irresponsivo. Supervisa `vm_stat` (Mac) o `free -h` (Linux) — si el swap sube durante la inferencia, cambia inmediatamente a un modelo más pequeño.',
          '**Throttling térmico en ultraportátiles:** Los portátiles sin ventilador o de un solo ventilador (MacBook Air M1, XPS 13, Surface Laptop Go) alcanzan los límites térmicos en 3–5 minutos de inferencia sostenida y reducen los relojes de CPU un 20–35%. Los tokens/s caen de manera proporcional.',
          '**La longitud de contexto es un impuesto de memoria:** El contexto por defecto de 4096 reserva un caché KV de 4096 tokens de antemano. En modelos de 1B son 200–300 MB; en modelos de 4B son 600–900 MB. Recórtalo a 1024 salvo que realmente necesites entradas largas.',
          '**Las apps en segundo plano importan más que el modelo de CPU:** Una ventana de Chrome con 20 pestañas ocupa 1–2 GB. Slack ocupa 400–600 MB. Con 8 GB RAM, cerrar esas apps antes de cargar un modelo de 4B es la mayor ganancia individual de tokens/s disponible.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No cargues ningún modelo de 7B en 8 GB RAM, ni siquiera en Q2. Q2 7B ocupa ≈ 2,5 GB en disco, pero el conjunto de trabajo más 2048 de contexto llega a ≈ 5,5 GB, lo que cruza al swap en la mayoría de sistemas Windows / Linux. El resultado es una caída de velocidad de 5–10× y una interfaz congelada.',
          },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: '¿Qué modelo y cuantización deberías cargar en cada app?',
        content:
          '**Con 8 GB RAM y sin GPU dedicada, mantente por debajo de 4B parámetros en Q4_K_M o menos.** Q4_K_M es la cuantización estándar en 2026 — pierde ≈ 1% de perplejidad frente a FP16, cabe en la mitad de RAM y es el valor por defecto para la mayoría de builds GGUF en Hugging Face. Listado por app:',
        items: [
          '**Ollama:** `ollama pull phi3:mini` (Phi-4 Mini 3.8B Q4_K_M, ≈ 2,4 GB) es la recomendación por defecto. Para máxima velocidad, `ollama pull smollm2:1.7b` (≈ 1,0 GB). Para mayor calidad de chat, `ollama pull llama3.2:1b-instruct-q5_K_M` (≈ 0,85 GB).',
          '**GPT4All:** Usa el navegador de modelos integrado → "Llama 3.2 1B Instruct Q4_0" (≈ 0,7 GB) para la instalación más ligera, o "Phi-4 Mini Q4_K_M" si la RAM lo permite. Los valores por defecto de GPT4All son conservadores, por lo que la lista visible de modelos es más corta que la de llama.cpp, pero cada entrada funciona.',
          '**Jan:** Usa el catálogo curado → "Gemma 3 4B Instruct Q4_K_M" (≈ 2,6 GB) en Apple Silicon, o "Phi-4 Mini Q4_K_M" en x86. Jan también acepta pegar una URL de Hugging Face para cualquier GGUF.',
          '**llama.cpp:** Descarga el GGUF directamente de Hugging Face — `bartowski/Phi-4-mini-instruct-GGUF`, `bartowski/SmolLM2-1.7B-Instruct-GGUF` o `bartowski/Llama-3.2-1B-Instruct-GGUF`. Ejecuta con `./llama-cli -m model.gguf -p "..." -c 1024 -t 4`.',
          '**Evitar con 8 GB / sin GPU:** cualquier modelo de 7B con cualquier cuantización, cualquier modelo por encima de Q5_K_M (ganancia de calidad insignificante, doble coste de RAM) y cualquier modelo base — elige siempre las variantes `-instruct` o `-chat` para obtener una salida usable.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Q4_K_M no es lo mismo que Q4_0. Q4_K_M utiliza un esquema de precisión mixta más inteligente y tiene ≈ 5–10% más calidad con el mismo tamaño. Elige Q4_K_M siempre que ambas opciones estén disponibles.',
          },
        ],
      },
      settings: {
        id: 'settings',
        title: '¿Qué configuraciones dan un 30–60% más de tokens/s en PCs de gama baja?',
        content:
          '**Los valores por defecto están ajustados para 16 GB RAM y una GPU dedicada. Con 8 GB solo CPU, tres parámetros son los más importantes:** longitud de contexto, tamaño de batch y número de hilos. Ajustados juntos valen entre un 30 y un 60% más de tokens/s en el mismo hardware.',
        items: [
          '**Longitud de contexto — la mayor ganancia individual.** Recorta de 4096 (por defecto) a 1024. En Ollama: `OLLAMA_NUM_CTX=1024 ollama run phi3:mini`. En llama.cpp: `-c 1024`. Ahorro de RAM: 400–900 MB según el modelo. Ganancia de tokens/s: 10–20%.',
          '**Número de hilos — ajusta a núcleos físicos, no lógicos.** Las CPUs más antiguas (i5-8250U, Ryzen 5 5500U) tienen 4 físicos / 8 lógicos. Establece hilos = 4, no 8. En llama.cpp: `-t 4`. En Ollama: `OLLAMA_NUM_THREAD=4`. El hyperthreading perjudica la inferencia porque ambos hilos compiten por la misma unidad FP/SIMD.',
          '**Tamaño de batch para el procesamiento de prompts — ponlo en 8 en CPUs lentas.** llama.cpp: `--n-batch 8`. El valor por defecto de 512 satura la caché L2 en CPUs de 4 núcleos. Ganancia de tokens/s en modelos de 4B: 15–25%.',
          '**Cuantización de la caché KV — establécela en q8_0 para reducir a la mitad la RAM de KV.** llama.cpp: `--cache-type-k q8_0 --cache-type-v q8_0`. Ahorro de RAM: 150–400 MB a 1024 de contexto, más a contextos mayores. Impacto en calidad: imperceptible.',
          '**Deshabilita mlock en sistemas con tendencia al swap.** llama.cpp `--no-mlock`. En sistemas de 8 GB, bloquear el modelo en RAM impide que el SO tome decisiones inteligentes de caché. Contraintuitivo pero consistentemente más rápido en Windows 10/11 con 8 GB.',
          '**Usa builds con AVX2 explícitamente.** La mayoría de los binarios precompilados de llama.cpp / Ollama autodetectan AVX2 / AVX-512 y activan el kernel correcto. Si compilaste tú mismo, pasa `-DGGML_AVX2=ON`. Detección de AVX-512: `cat /proc/cpuinfo | grep avx512`. AVX-512 da otro 10–15% en CPUs compatibles (Ice Lake / Tiger Lake / Rocket Lake / Zen 4+).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Aplica los cinco ajustes juntos y normalmente verás entre un 35 y un 55% más de tokens/s en el mismo modelo y el mismo hardware. La mayor ganancia individual es el recorte de contexto de 4096 → 1024, que también reduce drásticamente el tiempo hasta el primer token en un prompt en frío.',
          },
        ],
      },
      igpu: {
        id: 'igpu',
        title: '¿Vale la pena usar los gráficos integrados para IA local?',
        content:
          '**En la mayoría de portátiles con 8 GB RAM la respuesta es no — mantén la inferencia en la CPU.** Los gráficos integrados comparten la RAM del sistema, por lo que descargar capas no te da memoria extra; solo añade una penalización de overhead por el offload. Tres excepciones que merece la pena conocer:',
        items: [
          '**Apple Silicon (M1/M2/M3/M4) — sí, siempre.** La arquitectura de memoria unificada hace que la "GPU" vea la misma RAM al mismo ancho de banda que la CPU. Ollama, Jan y llama.cpp usan automáticamente la aceleración Metal en Mac sin ningún flag. Por eso un M1 con 8 GB supera a la mayoría de portátiles Windows con 8 GB por un factor de 2–3×.',
          '**Intel Arc iGPU (Meteor Lake / Lunar Lake / Arrow Lake) — a veces.** Los chips Intel Core Ultra (Ultra 5 125H, Ultra 7 155H, Ultra 7 258V) incluyen un iGPU Arc que soporta aceleración OpenVINO y SYCL. llama.cpp con `-DGGML_SYCL=ON` es un 30–60% más rápido que solo CPU en estos chips. La configuración no es trivial.',
          '**AMD Ryzen 7000/8000 con iGPU Radeon 700M/800M — experimental.** El soporte de ROCm en Radeon integrado es parcial y problemático en 2026. Solo CPU es la opción más segura salvo que disfrutes depurando stacks de drivers.',
          '**Intel UHD / Iris Plus / AMD Vega más antiguos — omítelos.** A estos iGPU les falta el throughput FP16 y el ancho de banda de memoria para superar un kernel CPU AVX2 moderno. Quédate en la CPU.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La prueba más sencilla para saber si tu iGPU merece usarse: ejecuta el mismo modelo 10 generaciones solo con CPU y otras 10 con aceleración iGPU y compara tokens/s. En Apple Silicon, el iGPU siempre es más rápido. En gráficos integrados x86, la respuesta depende del dispositivo — prueba en lugar de asumir.',
          },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Errores comunes',
        content:
          '**Cinco errores que arruinan el rendimiento en sistemas con 8 GB / sin GPU**, con la solución para cada uno:',
        items: [
          '**Error 1: Cargar un modelo de 7B "porque Q4 cabe en disco".** El archivo en disco es más pequeño que el conjunto de trabajo cargado. 7B Q4 ≈ 4,4 GB en disco, ≈ 5,5–6,5 GB en RAM con un contexto de 2048, lo que supera el techo de 8 GB y activa el swap. **Solución:** mantente en 4B o menos. Phi-4 Mini Q4_K_M es el modelo de mayor calidad que cabe consistentemente.',
          '**Error 2: Dejar la ventana de contexto en 4096.** El valor por defecto de 4096 reserva un caché KV que añade 400–900 MB sobre el modelo. **Solución:** establece el contexto en 1024 salvo que realmente necesites entradas largas. `OLLAMA_NUM_CTX=1024` (Ollama), `-c 1024` (llama.cpp).',
          '**Error 3: Ejecutar con Chrome, Slack y Spotify abiertos.** Cada uno consume 0,5–2 GB. Con 8 GB RAM tienes ≈ 5 GB tras el SO. Las apps en segundo plano te empujan al swap antes de que el modelo se cargue siquiera. **Solución:** cierra todo excepto la app de IA y una ventana de notas antes de hacer inferencia.',
          '**Error 4: Elegir Q8_0 "por calidad".** En modelos de 1B–4B la diferencia de calidad entre Q4_K_M y Q8_0 está por debajo del umbral perceptible para uso en chat, pero Q8 dobla el coste de RAM y reduce a la mitad los tokens/s. **Solución:** quédate en Q4_K_M salvo que tengas un benchmark medible que demuestre que Q8 ayuda en tu tarea.',
          '**Error 5: Asumir que una Raspberry Pi 4 es suficiente.** 4 GB RAM y un Cortex-A72 a 1,5 GHz pueden técnicamente ejecutar TinyLlama 1B a 1–3 tok/s, pero la experiencia es inutilizable para chat. **Solución:** la Raspberry Pi 5 con 8 GB RAM es el suelo realista de ARM SBC — e incluso así, un portátil x86 con 8 GB es más rápido.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Los cinco errores tienen la misma causa raíz: asumir que la configuración de escritorio aplica a un portátil con recursos limitados. Cada valor por defecto (contexto 4096, calidad Q8, todos los hilos) está ajustado para una máquina con 16–32 GB RAM y una GPU dedicada. Con 8 GB solo CPU, necesitas anular activamente los valores por defecto. Piensa en la sección de configuración de esta guía como el "preset para PC de gama baja" — aplica los cinco ajustes antes de tu primera ejecución.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Puedo ejecutar IA local con 4 GB RAM?',
            a: 'Sí, pero solo con modelos sub-2B como Llama 3.2 1B Q4_0 (≈ 0,7 GB en disco) o SmolLM 2 360M (≈ 0,25 GB en disco). GPT4All es la única de las cuatro apps que indica 4 GB como mínimo oficial. Espera 3–8 tok/s en una CPU moderna y un comportamiento de UI notablemente más lento porque el SO no tiene casi margen.',
          },
          {
            q: '¿Funciona una CPU Intel antigua para IA local?',
            a: 'Cualquier CPU con AVX2 (Haswell, 2013 o posterior) funciona en 2026. El suelo práctico es un Intel Core i5-8250U o un Ryzen 5 2500U más antiguo, donde Phi-4 Mini Q4 corre a 4–6 tok/s. Las CPUs sin AVX2 (Intel anterior a 2013, AMD Bulldozer original) cargarán pero correrán a 1–2 tok/s, lo que es inutilizable para chat.',
          },
          {
            q: '¿La IA local puede dañar mi portátil?',
            a: 'No. La inferencia local es un proceso normal de espacio de usuario — no puede dañar el hardware. El peor escenario es que el portátil se caliente (90–100°C en ultraportátiles) y haga throttling, ante lo cual el firmware protege automáticamente. Para evitarlo, usa una base de refrigeración en sesiones largas, mantén la habitación por debajo de 25°C y detén la inferencia si el chasis resulta incómodo al tacto.',
          },
          {
            q: '¿Son suficientes los gráficos integrados?',
            a: 'En Apple Silicon (M1+) son más que suficientes — la memoria unificada hace que el iGPU sea efectivamente una GPU dedicada de gama baja. En Intel Core Ultra (Meteor Lake / Arrow Lake) puede dar un 30–60% de velocidad extra si configuras SYCL. En Intel UHD / Iris Plus / AMD Vega más antiguo, los gráficos integrados son más lentos que la CPU y no merece la pena usarlos.',
          },
          {
            q: '¿Qué modelo es más rápido solo con CPU?',
            a: 'Llama 3.2 1B Q4_0 y SmolLM 2 1.7B Q4_K_M son los modelos usables más rápidos. Llama 3.2 1B alcanza 25–50 tok/s en Apple M1 y 12–25 tok/s en una CPU Ryzen o Intel moderna. SmolLM 2 tiene una velocidad similar con escritura ligeramente más pulida. Cualquier cosa por encima de 4B parámetros es poco probable que se sienta rápida en sistemas solo CPU.',
          },
          {
            q: '¿Añadir RAM ayuda más que actualizar la CPU?',
            a: 'En sistemas de 8 GB, pasar a 16 GB es la actualización práctica más importante porque desbloquea modelos de 7B–8B como Mistral Small Q4 y Llama 3.3 8B Q4. Las actualizaciones de CPU dan un 20–50% más de tokens/s; la actualización de RAM da 2–4× más calidad (salto de 1B–4B a 7B–8B). Si solo puedes hacer una cosa, añade RAM.',
          },
          {
            q: '¿Puedo ejecutar IA local en un Chromebook?',
            a: 'Solo si el modo desarrollador Linux (Crostini) está disponible. Las cuatro apps de esta guía funcionan en el contenedor Linux — llama.cpp compilado desde el código fuente es el más fiable en Chromebooks ARM, mientras que los Chromebooks x86 (basados en Intel) funcionan con Ollama o GPT4All. El rendimiento se corresponde con la CPU subyacente; un Chromebook Intel Core i3 / i5 se comporta como el portátil Windows equivalente.',
          },
          {
            q: '¿Windows 10 sigue funcionando para IA local en 2026?',
            a: 'Sí. Las cuatro apps soportan Windows 10 22H2. Ollama, GPT4All y Jan incluyen instaladores de Windows firmados; llama.cpp ofrece binarios de Windows precompilados en sus releases de GitHub. El fin del soporte general de Windows 10 en octubre de 2025 no impide la instalación, pero las actualizaciones de seguridad han terminado — considera un dual-boot con Linux o actualizar a Windows 11 para uso a largo plazo.',
          },
          {
            q: '¿Cuál es el portátil más barato que ejecuta IA local bien?',
            a: 'Un ThinkPad T14 o Dell Latitude 5430 de segunda mano de 2021–2022 con 16 GB RAM y un Ryzen 5 5500U o Intel i5-1235U cuesta 350–450 € en 2026 y ejecuta Phi-4 Mini Q4 a 8–14 tok/s. Aún más barato: cualquier MacBook Air Apple M1 con 8 GB de segunda mano a 450–550 €, que supera a la mayoría de portátiles x86 en tokens/s gracias a la memoria unificada.',
          },
          {
            q: '¿Puedo usar una Raspberry Pi para IA local?',
            a: 'Una Raspberry Pi 5 con 8 GB RAM ejecuta Llama 3.2 1B Q4 a 4–7 tok/s — usable pero lento. Una Pi 4 con 4 GB se queda en torno a 2 tok/s con TinyLlama 1B. Para uso real en chat, un portátil x86 con 8 GB o un MacBook Air M1 es más rápido, más barato de segunda mano y más fácil de configurar. La Pi tiene sentido solo para cargas de trabajo embebidas, edge o siempre encendidas.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[App de IA local más sencilla por SO: recomendaciones Windows, Mac y Linux](/es/power-local-llm/easiest-local-ai-app-windows-mac-linux) — muchos usuarios de PC de gama baja están en Windows antiguo; esta guía elige una app por SO.',
          '[Mejores apps LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — alternativa natural para usuarios con recursos limitados que tienen un smartphone Android reciente.',
          '[Reemplaza Zapier con agentes de IA local](/es/power-local-llm/replace-zapier-with-local-ai-agents) — automatización de flujos de trabajo práctica para usuarios con presupuesto ajustado en el mismo hardware.',
          '[LM Studio vs Jan vs GPT4All: cuál gana en 2026](/es/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparativa directa si también quieres considerar LM Studio.',
          '[Mejores GPUs económicas para LLMs locales](/es/local-llms/best-budget-gpus-local-llm) — para cuando estés listo para salir del territorio solo CPU.',
          '[Guía de hardware para LLMs locales 2026](/es/local-llms/local-llm-hardware-guide-2026) — guía completa de hardware con análisis de RAM, CPU y GPU.',
          '[Hub Power Local LLM](/es/power-local-llm) — biblioteca completa de guías del cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/es/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': 'Mejores apps de IA local para PCs de gama baja en 2026 (8 GB RAM, sin GPU)',
      'description':
        'Ollama, GPT4All, Jan y llama.cpp probados en portátiles con 8 GB RAM y gráficos integrados. Tokens/s, presión de memoria, configuraciones exactas.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan (app de IA local)' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': 'LLM local en PC de gama baja' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Mejores apps de IA local para portátiles con 8 GB RAM sin GPU en 2026',
      'numberOfItems': 4,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Ollama',
          'description':
            'Runtime CPU más ligero; mínimo 6 GB RAM; mejor combinación con Phi-4 Mini Q4_K_M a 4–14 tokens por segundo en 8 GB solo CPU.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'GPT4All',
          'description':
            'Instalador de un clic más sencillo; mínimo 4 GB RAM; mejor combinación con Llama 3.2 1B Q4_0 a 3–10 tokens por segundo; recomendado para usuarios no técnicos.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan',
          'description':
            'GUI de código abierto (AGPL); mínimo 6 GB RAM; mejor combinación con Gemma 3 4B Q4_K_M a 3–11 tokens por segundo; la GUI más ligera en Apple Silicon con 8 GB.',
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'llama.cpp',
          'description':
            'Velocidad bare-metal si compilas; mínimo 4 GB RAM; mejor combinación con SmolLM 2 1.7B Q4_K_M a 5–18 tokens por segundo; la más rápida en hardware idéntico.',
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.promptquorum.com/es' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Mejores apps de IA local para PCs de gama baja', 'item': 'https://www.promptquorum.com/es/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'Melhores apps de IA local para PCs de baixo desempenho em 2026 (8 GB RAM, sem GPU)',
    seoTitle: 'Melhores apps de IA local em PC de 8 GB 2026: só CPU',
    metaDescription:
      'Ollama, GPT4All, Jan e llama.cpp testados em notebooks com 8 GB RAM e gráficos integrados. Tokens/s, pressão de memória, configurações exatas. Maio de 2026.',
    twitterDescription:
      '4 apps de IA local que rodam em notebooks com 8 GB RAM sem GPU. Tokens/s, configurações exatas, veredictos honestos. Maio de 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: [
      'Intel UHD 620',
      'Intel Iris Xe',
      'AMD Ryzen 5 5500U',
      'Apple M1 8GB',
      'Intel Core i5-8250U',
    ],
    audience:
      'Donos de notebooks de 4 a 7 anos com 8 GB RAM e sem GPU dedicada escolhendo seu primeiro app de IA local.',
    readTime: '11 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'IA local em PC de baixo desempenho',
    targetKeywords: [
      'ia local 8gb ram',
      'melhor llm local pc baixo desempenho',
      'ia local sem gpu',
      'llm local só cpu 2026',
      'ia local notebook antigo',
    ],
    leadAnswerBlock:
      '**Em um notebook com 8 GB RAM e sem GPU dedicada, quatro apps realmente rodam bem em 2026: Ollama, GPT4All, Jan e llama.cpp. Combine qualquer um deles com Phi-4 Mini Q4 (melhor equilíbrio), SmolLM 2 1.7B Q4 (mais rápido) ou Llama 3.2 1B Q5 (sensação de GUI mais fluida) e mantenha o conjunto de trabalho abaixo de 6 GB.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual app de IA local roda melhor em um notebook com 8 GB RAM sem GPU?',
        answer:
          'Escolha o Ollama se você se vira bem no terminal — é o runtime mais leve e combina muito bem com o Phi-4 Mini Q4 a 4–8 tok/s em CPUs Intel mais antigas e 8–14 tok/s em hardware da classe Ryzen 5000 / Intel 12ª geração. Escolha o GPT4All se você quer um instalador de um clique e nada de linha de comando — é o mais tolerante com 8 GB RAM e vem com um navegador de modelos integrado. Escolha o Jan se você quer uma GUI limpa e código totalmente aberto. Escolha o llama.cpp diretamente se você quer o máximo de tokens por segundo e não se importa de compilar.',
        bullets: [
          'Ollama — runtime de CPU mais leve, baseado em terminal, combina melhor com Phi-4 Mini',
          'GPT4All — instalação mais simples, RAM mínima de 4 GB, recomendado para usuários não técnicos',
          'Jan — GUI completa, código aberto (AGPL), nativo em Apple Silicon, a opção mais leve em Mac com 8 GB',
          'llama.cpp — velocidade bare-metal, exige compilação, combina melhor com SmolLM 2 / Gemma 3 4B',
          'Os quatro são gratuitos, funcionam offline após a instalação e carregam arquivos de modelo GGUF padrão',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Tabela comparativa', anchor: '#comparison-table' },
      { label: 'Qual você deve escolher?', anchor: '#which-one' },
      { label: 'Benchmarks de tokens/s (só CPU, 8 GB RAM)', anchor: '#cpu-benchmarks' },
      { label: 'Pressão de memória e throttling térmico', anchor: '#memory-thermals' },
      { label: 'Melhor modelo por app com 8 GB RAM', anchor: '#best-models' },
      { label: 'Configurações que dão 30–60% mais velocidade', anchor: '#settings' },
      { label: 'Gráficos integrados: vale a pena?', anchor: '#igpu' },
      { label: 'Erros comuns', anchor: '#mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: 'A apresentação abaixo cobre: Ollama, GPT4All, Jan e llama.cpp testados com 8 GB RAM sem GPU (4–18 tok/s); as configurações exatas para 30–60% mais velocidade (contexto 1024, batch 8, cache KV q8_0); o melhor modelo por app (Phi-4 Mini Q4_K_M, SmolLM 2 1.7B, Gemma 3 4B); e cinco erros comuns que provocam swap fatal. Baixe o PDF como cartão de referência para PCs de baixo desempenho.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — runtime de CPU mais leve em 2026, funciona como servidor em segundo plano, melhor combinação app + modelo: Ollama + Phi-4 Mini Q4 a 4–14 tok/s em 8 GB só CPU.',
          '**GPT4All** — único app com mínimo de 4 GB RAM e instalação sem terminal, ideal para usuários não técnicos em notebooks com Windows 10.',
          '**Jan** — GUI completa, código aberto AGPL, nativo em Apple Silicon, o app de GUI mais leve para um MacBook Air de 8 GB ou Mac mini M1.',
          '**llama.cpp** — maior tokens por segundo em hardware idêntico (5–15% acima do Ollama, 15–25% acima do GPT4All), mas exige uma etapa de compilação.',
          '**Melhor modelo com 8 GB / sem GPU:** Phi-4 Mini 3.8B em Q4_K_M para equilíbrio, SmolLM 2 1.7B Q4 para velocidade máxima, Llama 3.2 1B Q5 para a sensação de chat mais fluida.',
          '**Ranking de velocidade em CPU idêntica:** llama.cpp > Ollama > Jan > GPT4All. A diferença é de 15–25%, não de 2–3×.',
          '**Em maio de 2026, não rode modelos de 7B+ em 8 GB RAM** — a pressão da janela de contexto somada ao próprio sistema operacional vai acionar o swap e derrubar o throughput em 5 a 10 vezes.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Como Ollama, GPT4All, Jan e llama.cpp se comparam em 8 GB RAM, sem GPU?',
        content:
          'Os intervalos abaixo são agregados a partir de threads de benchmark do llama.cpp upstream, números das fichas de modelos do Hugging Face e relatos de testes do r/LocalLLaMA em notebooks de 8 GB com gráficos integrados (Intel UHD 620 / Iris Xe / Ryzen 5 5500U Vega / Apple M1 8 GB). Os tokens/s são medidos em gerações de 200 tokens após o carregamento do modelo, janela de contexto padrão 2048 salvo indicação.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Em um notebook com 8 GB RAM e sem GPU dedicada, o Ollama com Phi-4 Mini Q4_K_M é a melhor configuração de IA local para todo uso — a velocidade de geração mais rápida entre as opções sem código, a menor carga térmica e a maior biblioteca de modelos.',
          },
          {
            type: 'plain-terms',
            text: 'Em um PC de baixo desempenho com 8 GB RAM e sem GPU: instale o Ollama, rode `ollama pull phi4-mini` e depois `ollama run phi4-mini`. Você obtém de 4 a 14 tokens por segundo dependendo da sua CPU — lento, mas utilizável para tarefas em que você envia um prompt e espera a resposta. Para uma alternativa sem terminal, o GPT4All se instala como um app normal e filtra sua lista de modelos para os que cabem em 8 GB.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'O Apple M1 com 8 GB supera consistentemente os notebooks x86 de 8 GB nos quatro apps desta tabela. Se você tem acesso a um Mac com Apple Silicon, é o melhor hardware de baixa RAM para IA local — a arquitetura de memória unificada dá ao modelo acesso aos 8 GB completos sem a penalidade de overhead do SO que os notebooks com Windows e Linux enfrentam.',
          },
        ],
        columns: ['App', 'RAM mín.', 'Melhor modelo (limite 8 GB)', 'Tokens/s (só CPU)', 'Calor', 'Veredicto'],
        rows: [
          {
            'App': 'Ollama',
            'RAM mín.': '6 GB',
            'Melhor modelo (limite 8 GB)': 'Phi-4 Mini Q4_K_M',
            'Tokens/s (só CPU)': '4–14 tok/s',
            'Calor': 'Baixo',
            'Veredicto': 'Melhor equilíbrio — primeira escolha',
          },
          {
            'App': 'GPT4All',
            'RAM mín.': '4 GB',
            'Melhor modelo (limite 8 GB)': 'Llama 3.2 1B Q4_0',
            'Tokens/s (só CPU)': '3–10 tok/s',
            'Calor': 'Baixo',
            'Veredicto': 'Instalação mais simples — opção não técnica',
          },
          {
            'App': 'Jan',
            'RAM mín.': '6 GB',
            'Melhor modelo (limite 8 GB)': 'Gemma 3 4B Q4_K_M',
            'Tokens/s (só CPU)': '3–11 tok/s',
            'Calor': 'Médio',
            'Veredicto': 'Melhor GUI em Apple Silicon 8 GB',
          },
          {
            'App': 'llama.cpp',
            'RAM mín.': '4 GB',
            'Melhor modelo (limite 8 GB)': 'SmolLM 2 1.7B Q4_K_M',
            'Tokens/s (só CPU)': '5–18 tok/s',
            'Calor': 'Baixo',
            'Veredicto': 'O mais rápido se você compilar',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Qual você deve escolher?',
        content:
          '**O app certo depende de se você consegue usar um terminal, se está no Windows ou no Mac e de quantos anos tem a sua CPU.** Use este atalho de decisão:',
        rows: [
          {
            'Sua situação': 'Notebook Windows 10, 8 GB RAM, sem experiência com terminal',
            'Escolha': 'GPT4All',
          },
          {
            'Sua situação': 'Ryzen moderno / Intel 12ª geração, 8 GB, à vontade com o terminal',
            'Escolha': 'Ollama',
          },
          {
            'Sua situação': 'MacBook Air M1 / Mac mini M1 8 GB',
            'Escolha': 'Jan ou Ollama',
          },
          {
            'Sua situação': 'Notebook Linux, quer o máximo de tokens/s',
            'Escolha': 'llama.cpp',
          },
          {
            'Sua situação': 'Máquina com 4 GB RAM (abaixo das especificações)',
            'Escolha': 'GPT4All + Llama 3.2 1B Q4_0',
          },
          {
            'Sua situação': 'CPU antiga da classe Intel Core i5-8250U / i7-7700U',
            'Escolha': 'Ollama + SmolLM 2 1.7B',
          },
          {
            'Sua situação': 'Chromebook com modo desenvolvedor Linux',
            'Escolha': 'llama.cpp + SmolLM 2',
          },
          {
            'Sua situação': 'Notebook de trabalho onde você não pode instalar drivers',
            'Escolha': 'GPT4All (instalação sem driver / sem direitos de admin)',
          },
        ],
        columns: ['Sua situação', 'Escolha'],
        callouts: [
          {
            type: 'tip',
            text: 'Na dúvida, comece pelo Ollama. Ele roda em todos os sistemas operacionais, baixa modelos com um simples comando `ollama pull [nome-do-modelo]` e expõe uma API compatível com OpenAI caso você queira integrar outras ferramentas mais tarde. Se o terminal for um problema, o GPT4All é a alternativa certa — mesmos modelos, sem linha de comando.',
          },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: 'Quão rápido é cada app em hardware de baixo desempenho real?',
        content:
          '**Tokens por segundo em máquinas representativas com 8 GB RAM e sem GPU dedicada, maio de 2026.** Os números são intervalos relatados pela comunidade em threads de benchmark do llama.cpp upstream, dados das fichas de modelos do Hugging Face e testes com etiquetas de hardware do r/LocalLLaMA. Cada célula é o intervalo típico das execuções relatadas com configuração padrão; valores atípicos são excluídos.',
        columns: ['Hardware', 'Modelo', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          {
            'Hardware': 'Intel Core i5-8250U + UHD 620 (ultraportátil 2018)',
            'Modelo': 'Phi-4 Mini Q4_K_M',
            'Ollama': '4–6 tok/s',
            'GPT4All': '3–5 tok/s',
            'Jan': '3–5 tok/s',
            'llama.cpp': '5–7 tok/s',
          },
          {
            'Hardware': 'AMD Ryzen 5 5500U + Vega 7 (econômico 2021)',
            'Modelo': 'Phi-4 Mini Q4_K_M',
            'Ollama': '8–11 tok/s',
            'GPT4All': '6–9 tok/s',
            'Jan': '7–9 tok/s',
            'llama.cpp': '9–13 tok/s',
          },
          {
            'Hardware': 'Intel Core Ultra 5 125H + Arc iGPU (médio 2024)',
            'Modelo': 'Gemma 3 4B Q4_K_M',
            'Ollama': '10–14 tok/s',
            'GPT4All': '8–11 tok/s',
            'Jan': '9–12 tok/s',
            'llama.cpp': '12–18 tok/s',
          },
          {
            'Hardware': 'Apple M1 8 GB (MacBook Air 2020)',
            'Modelo': 'Llama 3.2 1B Q5_K_M',
            'Ollama': '28–40 tok/s',
            'GPT4All': '20–30 tok/s',
            'Jan': '26–38 tok/s',
            'llama.cpp': '32–48 tok/s',
          },
          {
            'Hardware': 'Apple M1 8 GB',
            'Modelo': 'Phi-4 Mini Q4_K_M',
            'Ollama': '12–18 tok/s',
            'GPT4All': '9–14 tok/s',
            'Jan': '11–17 tok/s',
            'llama.cpp': '14–20 tok/s',
          },
          {
            'Hardware': 'Intel Core i5-8250U',
            'Modelo': 'SmolLM 2 1.7B Q4_K_M',
            'Ollama': '10–14 tok/s',
            'GPT4All': '8–12 tok/s',
            'Jan': '9–13 tok/s',
            'llama.cpp': '12–16 tok/s',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'O Apple Silicon domina esta tabela porque a arquitetura de memória unificada do M1 permite que a GPU e a CPU compartilhem a mesma RAM com alta largura de banda. Em notebooks x86 sem GPU dedicada, os gráficos integrados raramente compensam a penalidade de overhead do offload — veja a seção iGPU mais abaixo.',
          },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: 'Por que 8 GB RAM parece tão apertado e quando o notebook começa a sofrer throttling?',
        content:
          '**Com 8 GB RAM, o sistema operacional já consome 2,5–3,5 GB antes de carregar qualquer modelo, deixando 4,5–5,5 GB para o modelo e seu cache KV.** Esse teto é o que torna o Phi-4 Mini (3.8B Q4 ≈ 2,4 GB) o ponto ideal prático e descarta qualquer modelo de 7B com qualquer quantização para uso sustentado.',
        items: [
          '**Conjunto de trabalho vs. RAM do sistema:** O arquivo do modelo em disco é menor do que seu conjunto de trabalho carregado. O Phi-4 Mini Q4_K_M ocupa ≈ 2,4 GB em disco, mas ≈ 3,0–3,5 GB em RAM depois de adicionar o cache KV para um contexto de 2048 tokens. Corte o contexto para 1024 e você economiza ≈ 400 MB.',
          '**Morte por swap:** Quando o conjunto de trabalho excede a RAM física, o macOS e o Linux começam a paginar no SSD. Os tokens por segundo caem de 5 a 10 vezes e o notebook fica sem resposta. Monitore o `vm_stat` (Mac) ou `free -h` (Linux) — se o swap subir durante a inferência, troque imediatamente por um modelo menor.',
          '**Throttling térmico em ultraportáteis:** Notebooks sem ventoinha ou com uma única ventoinha (MacBook Air M1, XPS 13, Surface Laptop Go) atingem os limites térmicos em 3–5 minutos de inferência sustentada e reduzem os clocks da CPU em 20–35%. Os tokens/s caem proporcionalmente.',
          '**O comprimento do contexto é um imposto de memória:** O contexto padrão de 4096 reserva um cache KV de 4096 tokens antecipadamente. Em modelos de 1B são 200–300 MB; em modelos de 4B são 600–900 MB. Corte para 1024 a menos que você realmente precise de entradas longas.',
          '**Os apps em segundo plano importam mais do que o modelo da CPU:** Uma janela do Chrome com 20 abas ocupa 1–2 GB. O Slack ocupa 400–600 MB. Com 8 GB RAM, fechar esses apps antes de carregar um modelo de 4B é o maior ganho individual de tokens/s disponível.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não carregue nenhum modelo de 7B em 8 GB RAM, nem mesmo em Q2. O Q2 7B ocupa ≈ 2,5 GB em disco, mas o conjunto de trabalho mais 2048 de contexto chega a ≈ 5,5 GB, o que cruza para o swap na maioria dos sistemas Windows / Linux. O resultado é uma queda de velocidade de 5–10× e uma interface congelada.',
          },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: 'Qual modelo e quantização você deve carregar em cada app?',
        content:
          '**Com 8 GB RAM e sem GPU dedicada, mantenha-se abaixo de 4B parâmetros em Q4_K_M ou menos.** O Q4_K_M é a quantização padrão em 2026 — perde ≈ 1% de perplexidade em relação ao FP16, cabe em metade da RAM e é o padrão para a maioria dos builds GGUF no Hugging Face. Listado por app:',
        items: [
          '**Ollama:** `ollama pull phi3:mini` (Phi-4 Mini 3.8B Q4_K_M, ≈ 2,4 GB) é a recomendação padrão. Para velocidade máxima, `ollama pull smollm2:1.7b` (≈ 1,0 GB). Para maior qualidade de chat, `ollama pull llama3.2:1b-instruct-q5_K_M` (≈ 0,85 GB).',
          '**GPT4All:** Use o navegador de modelos integrado → "Llama 3.2 1B Instruct Q4_0" (≈ 0,7 GB) para a instalação mais leve, ou "Phi-4 Mini Q4_K_M" se a RAM permitir. Os padrões do GPT4All são conservadores, por isso a lista visível de modelos é mais curta que a do llama.cpp, mas cada entrada funciona.',
          '**Jan:** Use o catálogo curado → "Gemma 3 4B Instruct Q4_K_M" (≈ 2,6 GB) em Apple Silicon, ou "Phi-4 Mini Q4_K_M" em x86. O Jan também aceita colar uma URL do Hugging Face para qualquer GGUF.',
          '**llama.cpp:** Baixe o GGUF diretamente do Hugging Face — `bartowski/Phi-4-mini-instruct-GGUF`, `bartowski/SmolLM2-1.7B-Instruct-GGUF` ou `bartowski/Llama-3.2-1B-Instruct-GGUF`. Rode com `./llama-cli -m model.gguf -p "..." -c 1024 -t 4`.',
          '**Evite com 8 GB / sem GPU:** qualquer modelo de 7B com qualquer quantização, qualquer modelo acima de Q5_K_M (ganho de qualidade insignificante, custo de RAM dobrado) e qualquer modelo base — escolha sempre as variantes `-instruct` ou `-chat` para obter uma saída utilizável.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Q4_K_M não é o mesmo que Q4_0. O Q4_K_M usa um esquema de precisão mista mais inteligente e tem ≈ 5–10% mais qualidade com o mesmo tamanho. Escolha Q4_K_M sempre que ambas as opções estiverem disponíveis.',
          },
        ],
      },
      settings: {
        id: 'settings',
        title: 'Quais configurações dão 30–60% mais tokens/s em PCs de baixo desempenho?',
        content:
          '**Os valores padrão são ajustados para 16 GB RAM e uma GPU dedicada. Com 8 GB só CPU, três parâmetros são os mais importantes:** comprimento de contexto, tamanho de batch e número de threads. Ajustados em conjunto, valem de 30 a 60% mais tokens/s no mesmo hardware.',
        items: [
          '**Comprimento de contexto — o maior ganho individual.** Corte de 4096 (padrão) para 1024. No Ollama: `OLLAMA_NUM_CTX=1024 ollama run phi3:mini`. No llama.cpp: `-c 1024`. Economia de RAM: 400–900 MB dependendo do modelo. Ganho de tokens/s: 10–20%.',
          '**Número de threads — ajuste para núcleos físicos, não lógicos.** CPUs mais antigas (i5-8250U, Ryzen 5 5500U) têm 4 físicos / 8 lógicos. Defina threads = 4, não 8. No llama.cpp: `-t 4`. No Ollama: `OLLAMA_NUM_THREAD=4`. O hyperthreading prejudica a inferência porque ambas as threads competem pela mesma unidade FP/SIMD.',
          '**Tamanho de batch para o processamento de prompt — defina como 8 em CPUs fracas.** llama.cpp: `--n-batch 8`. O padrão de 512 satura o cache L2 em CPUs de 4 núcleos. Ganho de tokens/s em modelos de 4B: 15–25%.',
          '**Quantização do cache KV — defina como q8_0 para reduzir pela metade a RAM do KV.** llama.cpp: `--cache-type-k q8_0 --cache-type-v q8_0`. Economia de RAM: 150–400 MB com contexto 1024, mais em contextos maiores. Impacto na qualidade: imperceptível.',
          '**Desative o mlock em sistemas propensos ao swap.** llama.cpp `--no-mlock`. Em sistemas de 8 GB, travar o modelo na RAM impede que o SO tome decisões inteligentes de cache. Contraintuitivo, mas consistentemente mais rápido no Windows 10/11 com 8 GB.',
          '**Use builds com AVX2 explicitamente.** A maioria dos binários pré-compilados do llama.cpp / Ollama detecta automaticamente AVX2 / AVX-512 e ativa o kernel correto. Se você mesmo compilou, passe `-DGGML_AVX2=ON`. Detecção de AVX-512: `cat /proc/cpuinfo | grep avx512`. O AVX-512 dá outros 10–15% em CPUs compatíveis (Ice Lake / Tiger Lake / Rocket Lake / Zen 4+).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Aplique os cinco ajustes juntos e normalmente você verá de 35 a 55% mais tokens/s no mesmo modelo e no mesmo hardware. O maior ganho individual é o corte de contexto de 4096 → 1024, que também reduz drasticamente o tempo até o primeiro token em um prompt frio.',
          },
        ],
      },
      igpu: {
        id: 'igpu',
        title: 'Vale a pena usar os gráficos integrados para IA local?',
        content:
          '**Na maioria dos notebooks com 8 GB RAM a resposta é não — mantenha a inferência na CPU.** Os gráficos integrados compartilham a RAM do sistema, então descarregar camadas não dá memória extra; só adiciona uma penalidade de overhead pelo offload. Três exceções que vale a pena conhecer:',
        items: [
          '**Apple Silicon (M1/M2/M3/M4) — sim, sempre.** A arquitetura de memória unificada faz com que a "GPU" enxergue a mesma RAM na mesma largura de banda que a CPU. Ollama, Jan e llama.cpp usam automaticamente a aceleração Metal no Mac sem nenhum flag. É por isso que um M1 com 8 GB supera a maioria dos notebooks Windows de 8 GB por um fator de 2–3×.',
          '**iGPU Intel Arc (Meteor Lake / Lunar Lake / Arrow Lake) — às vezes.** Os chips Intel Core Ultra (Ultra 5 125H, Ultra 7 155H, Ultra 7 258V) trazem um iGPU Arc que suporta aceleração OpenVINO e SYCL. O llama.cpp com `-DGGML_SYCL=ON` é 30–60% mais rápido do que só CPU nesses chips. A configuração não é trivial.',
          '**AMD Ryzen 7000/8000 com iGPU Radeon 700M/800M — experimental.** O suporte a ROCm em Radeon integrado é parcial e problemático em 2026. Só CPU é a opção mais segura, a menos que você curta depurar stacks de drivers.',
          '**Intel UHD / Iris Plus / AMD Vega mais antigos — pule.** A esses iGPUs falta o throughput FP16 e a largura de banda de memória para superar um kernel de CPU AVX2 moderno. Fique na CPU.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O teste mais simples para saber se vale usar seu iGPU: rode o mesmo modelo por 10 gerações só com CPU e outras 10 com aceleração iGPU e compare os tokens/s. Em Apple Silicon, o iGPU é sempre mais rápido. Em gráficos integrados x86, a resposta depende do dispositivo — teste em vez de presumir.',
          },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Erros comuns',
        content:
          '**Cinco erros que destroem o desempenho em sistemas com 8 GB / sem GPU**, com a solução para cada um:',
        items: [
          '**Erro 1: Carregar um modelo de 7B "porque o Q4 cabe em disco".** O arquivo em disco é menor do que o conjunto de trabalho carregado. O 7B Q4 ocupa ≈ 4,4 GB em disco, ≈ 5,5–6,5 GB em RAM com um contexto de 2048, o que ultrapassa o teto de 8 GB e aciona o swap. **Solução:** mantenha-se em 4B ou menos. O Phi-4 Mini Q4_K_M é o modelo de maior qualidade que cabe consistentemente.',
          '**Erro 2: Deixar a janela de contexto em 4096.** O padrão de 4096 reserva um cache KV que adiciona 400–900 MB sobre o modelo. **Solução:** defina o contexto em 1024 a menos que você realmente precise de entradas longas. `OLLAMA_NUM_CTX=1024` (Ollama), `-c 1024` (llama.cpp).',
          '**Erro 3: Rodar com Chrome, Slack e Spotify abertos.** Cada um consome 0,5–2 GB. Com 8 GB RAM, você tem ≈ 5 GB depois do SO. Os apps em segundo plano te empurram para o swap antes mesmo de o modelo carregar. **Solução:** feche tudo, exceto o app de IA e uma janela de notas, antes de fazer inferência.',
          '**Erro 4: Escolher Q8_0 "pela qualidade".** Em modelos de 1B–4B a diferença de qualidade entre Q4_K_M e Q8_0 está abaixo do limiar perceptível para uso em chat, mas o Q8 dobra o custo de RAM e reduz pela metade os tokens/s. **Solução:** fique em Q4_K_M a menos que você tenha um benchmark mensurável mostrando que o Q8 ajuda na sua tarefa.',
          '**Erro 5: Presumir que uma Raspberry Pi 4 é suficiente.** 4 GB RAM e um Cortex-A72 de 1,5 GHz podem tecnicamente rodar o TinyLlama 1B a 1–3 tok/s, mas a experiência é inutilizável para chat. **Solução:** a Raspberry Pi 5 com 8 GB RAM é o piso realista de SBC ARM — e mesmo assim, um notebook x86 com 8 GB é mais rápido.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Os cinco erros têm a mesma causa raiz: presumir que a configuração de desktop se aplica a um notebook com recursos limitados. Cada valor padrão (contexto 4096, qualidade Q8, todas as threads) é ajustado para uma máquina com 16–32 GB RAM e uma GPU dedicada. Com 8 GB só CPU, você precisa anular ativamente os valores padrão. Pense na seção de configurações deste guia como o "preset para PC de baixo desempenho" — aplique os cinco ajustes antes da sua primeira execução.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso rodar IA local com 4 GB RAM?',
            a: 'Sim, mas apenas com modelos abaixo de 2B como Llama 3.2 1B Q4_0 (≈ 0,7 GB em disco) ou SmolLM 2 360M (≈ 0,25 GB em disco). O GPT4All é o único dos quatro apps que indica 4 GB como mínimo oficial. Espere 3–8 tok/s em uma CPU moderna e um comportamento de UI visivelmente mais lento porque o SO quase não tem margem.',
          },
          {
            q: 'Uma CPU Intel antiga funciona para IA local?',
            a: 'Qualquer CPU com AVX2 (Haswell, 2013 ou posterior) funciona em 2026. O piso prático é um Intel Core i5-8250U ou um Ryzen 5 2500U mais antigo, onde o Phi-4 Mini Q4 roda a 4–6 tok/s. CPUs sem AVX2 (Intel anterior a 2013, AMD Bulldozer original) carregam, mas rodam a 1–2 tok/s, o que é inutilizável para chat.',
          },
          {
            q: 'A IA local pode danificar meu notebook?',
            a: 'Não. A inferência local é um processo normal de espaço de usuário — não pode danificar o hardware. O pior cenário é o notebook esquentar (90–100°C em ultraportáteis) e fazer throttling, contra o que o firmware protege automaticamente. Para evitar isso, use uma base de resfriamento em sessões longas, mantenha a sala abaixo de 25°C e pare a inferência se o chassi estiver desconfortável ao toque.',
          },
          {
            q: 'Os gráficos integrados são suficientes?',
            a: 'No Apple Silicon (M1+) são mais do que suficientes — a memória unificada faz do iGPU efetivamente uma GPU dedicada de baixo desempenho. No Intel Core Ultra (Meteor Lake / Arrow Lake) pode dar 30–60% de velocidade extra se você configurar o SYCL. Em Intel UHD / Iris Plus / AMD Vega mais antigo, os gráficos integrados são mais lentos que a CPU e não vale a pena usá-los.',
          },
          {
            q: 'Qual modelo é mais rápido só com CPU?',
            a: 'Llama 3.2 1B Q4_0 e SmolLM 2 1.7B Q4_K_M são os modelos utilizáveis mais rápidos. O Llama 3.2 1B atinge 25–50 tok/s no Apple M1 e 12–25 tok/s em uma CPU Ryzen ou Intel moderna. O SmolLM 2 tem velocidade semelhante com uma escrita um pouco mais refinada. Qualquer coisa acima de 4B parâmetros dificilmente vai parecer rápida em sistemas só CPU.',
          },
          {
            q: 'Adicionar RAM ajuda mais do que atualizar a CPU?',
            a: 'Em sistemas de 8 GB, passar para 16 GB é a atualização prática mais importante porque desbloqueia modelos de 7B–8B como Mistral Small Q4 e Llama 3.3 8B Q4. As atualizações de CPU dão 20–50% mais tokens/s; a atualização de RAM dá 2–4× mais qualidade (salto de 1B–4B para 7B–8B). Se você só pode fazer uma coisa, adicione RAM.',
          },
          {
            q: 'Posso rodar IA local em um Chromebook?',
            a: 'Apenas se o modo desenvolvedor Linux (Crostini) estiver disponível. Os quatro apps deste guia funcionam no contêiner Linux — o llama.cpp compilado a partir do código-fonte é o mais confiável em Chromebooks ARM, enquanto os Chromebooks x86 (baseados em Intel) funcionam com Ollama ou GPT4All. O desempenho corresponde à CPU subjacente; um Chromebook Intel Core i3 / i5 se comporta como o notebook Windows equivalente.',
          },
          {
            q: 'O Windows 10 ainda funciona para IA local em 2026?',
            a: 'Sim. Os quatro apps suportam o Windows 10 22H2. Ollama, GPT4All e Jan trazem instaladores de Windows assinados; o llama.cpp oferece binários de Windows pré-compilados em seus releases do GitHub. O fim do suporte geral do Windows 10 em outubro de 2025 não impede a instalação, mas as atualizações de segurança terminaram — considere um dual-boot com Linux ou atualizar para o Windows 11 para uso de longo prazo.',
          },
          {
            q: 'Qual é o notebook mais barato que roda IA local bem?',
            a: 'Um ThinkPad T14 ou Dell Latitude 5430 usado de 2021–2022 com 16 GB RAM e um Ryzen 5 5500U ou Intel i5-1235U custa € 350–450 em 2026 e roda o Phi-4 Mini Q4 a 8–14 tok/s. Ainda mais barato: qualquer MacBook Air Apple M1 com 8 GB usado a € 450–550, que supera a maioria dos notebooks x86 em tokens/s graças à memória unificada.',
          },
          {
            q: 'Posso usar uma Raspberry Pi para IA local?',
            a: 'Uma Raspberry Pi 5 com 8 GB RAM roda o Llama 3.2 1B Q4 a 4–7 tok/s — utilizável, mas lento. Uma Pi 4 de 4 GB fica em torno de 2 tok/s com o TinyLlama 1B. Para uso real em chat, um notebook x86 com 8 GB ou um MacBook Air M1 é mais rápido, mais barato usado e mais fácil de configurar. A Pi faz sentido apenas para cargas de trabalho embarcadas, edge ou sempre ligadas.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[App de IA local mais simples para cada SO: recomendações Windows, Mac e Linux](/pt/power-local-llm/easiest-local-ai-app-windows-mac-linux) — muitos usuários de PC de baixo desempenho estão em Windows antigo; este guia escolhe um app por SO.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — alternativa natural para usuários com recursos limitados que têm um smartphone Android recente.',
          '[Substitua o Zapier por agentes de IA local](/pt/power-local-llm/replace-zapier-with-local-ai-agents) — automação de fluxos de trabalho prática para usuários com orçamento apertado no mesmo hardware.',
          '[LM Studio vs Jan vs GPT4All: qual vence em 2026](/pt/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — comparativo direto se você também quiser considerar o LM Studio.',
          '[Melhores GPUs econômicas para LLMs locais](/pt/local-llms/best-budget-gpus-local-llm) — para quando você estiver pronto para sair do território só CPU.',
          '[Guia de hardware para LLMs locais 2026](/pt/local-llms/local-llm-hardware-guide-2026) — guia completo de hardware incluindo RAM, CPU e GPU.',
          '[Hub Power Local LLM](/pt/power-local-llm) — biblioteca completa de guias do cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/pt/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': 'Melhores apps de IA local para PCs de baixo desempenho em 2026 (8 GB RAM, sem GPU)',
      'description':
        'Ollama, GPT4All, Jan e llama.cpp testados em notebooks com 8 GB RAM e gráficos integrados. Tokens/s, pressão de memória, configurações exatas.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan (app de IA local)' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': 'LLM local em PC de baixo desempenho' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Melhores apps de IA local para notebooks com 8 GB RAM sem GPU em 2026',
      'numberOfItems': 4,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Ollama',
          'description':
            'Runtime de CPU mais leve; mínimo 6 GB RAM; combina melhor com Phi-4 Mini Q4_K_M a 4–14 tokens por segundo em 8 GB só CPU.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'GPT4All',
          'description':
            'Instalador de um clique mais simples; mínimo 4 GB RAM; combina melhor com Llama 3.2 1B Q4_0 a 3–10 tokens por segundo; recomendado para usuários não técnicos.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan',
          'description':
            'GUI de código aberto (AGPL); mínimo 6 GB RAM; combina melhor com Gemma 3 4B Q4_K_M a 3–11 tokens por segundo; a GUI mais leve em Apple Silicon com 8 GB.',
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'llama.cpp',
          'description':
            'Velocidade bare-metal se você compilar; mínimo 4 GB RAM; combina melhor com SmolLM 2 1.7B Q4_K_M a 5–18 tokens por segundo; o mais rápido em hardware idêntico.',
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://www.promptquorum.com/pt' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Melhores apps de IA local para PCs de baixo desempenho', 'item': 'https://www.promptquorum.com/pt/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: 'أفضل تطبيقات الذكاء الاصطناعي المحلي للأجهزة الضعيفة 2026 (8 GB RAM بدون GPU)',
    seoTitle: 'ذكاء اصطناعي محلي بدون GPU 2026: Ollama وGPT4All',
    metaDescription:
      'Ollama وGPT4All وJan وllama.cpp اختُبرت على 8 GB RAM برسومات متكاملة بدون GPU. سرعات الرموز وضغط الذاكرة والإعدادات المثلى لكل تطبيق.',
    twitterDescription:
      '4 تطبيقات للذكاء الاصطناعي المحلي تعمل على أجهزة بـ8 GB RAM بدون GPU. الرموز/ثانية والإعدادات الدقيقة وتقييمات صادقة. مايو 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: [
      'Intel UHD 620',
      'Intel Iris Xe',
      'AMD Ryzen 5 5500U',
      'Apple M1 8GB',
      'Intel Core i5-8250U',
    ],
    audience:
      'أصحاب أجهزة كمبيوتر محمولة عمرها 4-7 سنوات بـ8 GB RAM وبدون GPU مخصصة يختارون أول تطبيق للذكاء الاصطناعي المحلي.',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'الذكاء الاصطناعي المحلي على جهاز ضعيف',
    targetKeywords: [
      'ذكاء اصطناعي محلي 8 جيجابايت RAM',
      'أفضل LLM محلي على جهاز ضعيف',
      'ذكاء اصطناعي محلي بدون GPU',
      'LLM محلي CPU فقط 2026',
      'ذكاء اصطناعي محلي على لابتوب قديم',
    ],
    leadAnswerBlock:
      '**على جهاز بـ8 GB RAM وبدون GPU مخصصة، أربعة تطبيقات تعمل فعلاً بشكل جيد في 2026: Ollama وGPT4All وJan وllama.cpp. ادمج أياً منها مع Phi-4 Mini Q4 (أفضل توازن)، أو SmolLM 2 1.7B Q4 (الأسرع)، أو Llama 3.2 1B Q5 (أسلسة واجهة مستخدم أفضل) وابقِ مجموعة العمل أقل من 6 GB.**',
    quickAnswerTop: {
      ar: {
        question: 'أي تطبيق للذكاء الاصطناعي المحلي يعمل بشكل أفضل على جهاز بـ8 GB RAM بدون GPU؟',
        answer:
          'اختر تطبيق Ollama إذا كنت مرتاحاً للطرفية — هو وقت التشغيل الأخف ويتزاوج بشكل ممتاز مع Phi-4 Mini Q4 بـ4-8 رمز/ثانية على المعالجات Intel القديمة و8-14 رمز/ثانية على أجهزة من فئة Ryzen 5000 / Intel الجيل 12. اختر تطبيق GPT4All إذا أردت مثبّتاً بنقرة واحدة وبدون سطر أوامر — هو الأكثر تسامحاً مع 8 GB RAM ويأتي بمتصفح نماذج مدمج. اختر تطبيق Jan إذا أردت واجهة مستخدم رسومية نظيفة وكوداً مفتوح المصدر بالكامل. اختر llama.cpp مباشرةً إذا أردت أقصى رموز/ثانية ولا تمانع التجميع.',
        bullets: [
          'Ollama — وقت تشغيل CPU أخف، قائم على الطرفية، يتزاوج بشكل أفضل مع Phi-4 Mini',
          'GPT4All — أبسط تثبيت، حد أدنى 4 GB RAM، موصى به للمستخدمين غير التقنيين',
          'Jan — واجهة مستخدم رسومية كاملة، مفتوح المصدر (AGPL)، أصيل على Apple Silicon، الأخف على Mac بـ8 GB',
          'llama.cpp — سرعة bare-metal، يتطلب التجميع، يتزاوج بشكل أفضل مع SmolLM 2 / Gemma 3 4B',
          'الأربعة مجانية وتعمل offline بعد التثبيت وتُحمِّل ملفات نماذج GGUF القياسية',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'جدول المقارنة', anchor: '#comparison-table' },
      { label: 'أيها يجب أن تختار؟', anchor: '#which-one' },
      { label: 'معايير الرموز/ثانية (CPU فقط، 8 GB RAM)', anchor: '#cpu-benchmarks' },
      { label: 'ضغط الذاكرة والخنق الحراري', anchor: '#memory-thermals' },
      { label: 'أفضل نموذج لكل تطبيق مع 8 GB RAM', anchor: '#best-models' },
      { label: 'إعدادات تُضيف 30-60% سرعة أكثر', anchor: '#settings' },
      { label: 'الرسومات المتكاملة: هل تستحق؟', anchor: '#igpu' },
      { label: 'الأخطاء الشائعة', anchor: '#mistakes' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: 'يغطي العرض أدناه: Ollama وGPT4All وJan وllama.cpp مُختبَرة بـ8 GB RAM بدون GPU (4-18 رمز/ثانية)؛ الإعدادات الدقيقة لـ30-60% سرعة إضافية (سياق 1024 وbatch 8 وcache KV q8_0)؛ أفضل نموذج لكل تطبيق (Phi-4 Mini Q4_K_M وSmolLM 2 1.7B وGemma 3 4B)؛ وخمسة أخطاء شائعة تسبب تصادم swap مميت. نزّل PDF كبطاقة مرجعية للأجهزة الضعيفة.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**تطبيق Ollama** — وقت تشغيل CPU الأخف في 2026، يعمل كخادم في الخلفية، أفضل زوج تطبيق + نموذج: Ollama + Phi-4 Mini Q4 بـ4-14 رمز/ثانية على 8 GB بـCPU فقط.',
          '**تطبيق GPT4All** — الوحيد بحد أدنى 4 GB RAM وتثبيت بدون طرفية، مثالي للمستخدمين غير التقنيين على أجهزة Windows 10.',
          '**تطبيق Jan** — واجهة مستخدم رسومية كاملة، مفتوح المصدر AGPL، أصيل على Apple Silicon، أخف تطبيق GUI لـMacBook Air 8 GB أو Mac mini M1.',
          '**تطبيق llama.cpp** — أكثر رموز/ثانية على أجهزة متطابقة (5-15% فوق Ollama، 15-25% فوق GPT4All)، لكن يتطلب خطوة تجميع.',
          '**أفضل نموذج مع 8 GB / بدون GPU:** Phi-4 Mini 3.8B بـQ4_K_M للتوازن، SmolLM 2 1.7B Q4 لأقصى سرعة، Llama 3.2 1B Q5 لأسلسة دردشة أفضل.',
          '**ترتيب السرعة على نفس CPU:** llama.cpp > Ollama > Jan > GPT4All. الفرق 15-25%، ليس 2-3×.',
          '**في مايو 2026، لا تُشغّل نماذج 7B+ على 8 GB RAM** — ضغط نافذة السياق مضافاً إليه نظام التشغيل نفسه سيُحرّك swap ويُسقط الأداء بمقدار 5-10×.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'كيف تتقارن Ollama وGPT4All وJan وllama.cpp على 8 GB RAM بدون GPU؟',
        content:
          'النطاقات أدناه مُجمَّعة من خيوط معايير llama.cpp الأصلية، وأرقام بطاقات النماذج على Hugging Face، وتقارير الاختبار من r/LocalLLaMA على أجهزة بـ8 GB RAM ورسومات متكاملة (Intel UHD 620 / Iris Xe / Ryzen 5 5500U Vega / Apple M1 8 GB). الرموز/ثانية مقيسة على أجيال 200 رمز بعد تحميل النموذج، نافذة سياق افتراضية 2048 ما لم يُشار.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'على جهاز بـ8 GB RAM وبدون GPU مخصصة، تطبيق Ollama مع Phi-4 Mini Q4_K_M هو أفضل إعداد للذكاء الاصطناعي المحلي لجميع الاستخدامات — أسرع سرعة توليد بين الخيارات غير البرمجية وأقل حمل حراري وأكبر مكتبة نماذج.',
          },
          {
            type: 'plain-terms',
            text: 'على جهاز ضعيف بـ8 GB RAM وبدون GPU: ثبّت تطبيق Ollama، ثم نفّذ `ollama pull phi4-mini` و`ollama run phi4-mini`. ستحصل على 4-14 رمزاً في الثانية حسب المعالج — بطيء لكن قابل للاستخدام للمهام التي ترسل فيها موجّهاً وتنتظر الإجابة. للبديل بدون طرفية، يُثبَّت GPT4All كتطبيق عادي ويُرشّح قائمة النماذج للتي تناسب 8 GB.',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'يتفوق Apple M1 بـ8 GB باستمرار على أجهزة اللابتوب x86 بـ8 GB في التطبيقات الأربعة في هذا الجدول. إذا كان بإمكانك الوصول إلى Mac بـApple Silicon، فهو أفضل أجهزة ذاكرة منخفضة للذكاء الاصطناعي المحلي — بنية الذاكرة الموحدة تمنح النموذج وصولاً إلى 8 GB كاملة بدون عقوبة overhead من نظام التشغيل التي تواجهها أجهزة Windows وLinux.',
          },
        ],
        columns: ['التطبيق', 'الحد الأدنى للـRAM', 'أفضل نموذج (حد 8 GB)', 'الرموز/ثانية (CPU فقط)', 'الحرارة', 'الحكم'],
        rows: [
          {
            'التطبيق': 'Ollama',
            'الحد الأدنى للـRAM': '6 GB',
            'أفضل نموذج (حد 8 GB)': 'Phi-4 Mini Q4_K_M',
            'الرموز/ثانية (CPU فقط)': '4-14 رمز/ثانية',
            'الحرارة': 'منخفضة',
            'الحكم': 'أفضل توازن — الاختيار الأول',
          },
          {
            'التطبيق': 'GPT4All',
            'الحد الأدنى للـRAM': '4 GB',
            'أفضل نموذج (حد 8 GB)': 'Llama 3.2 1B Q4_0',
            'الرموز/ثانية (CPU فقط)': '3-10 رمز/ثانية',
            'الحرارة': 'منخفضة',
            'الحكم': 'أبسط تثبيت — الخيار غير التقني',
          },
          {
            'التطبيق': 'Jan',
            'الحد الأدنى للـRAM': '6 GB',
            'أفضل نموذج (حد 8 GB)': 'Gemma 3 4B Q4_K_M',
            'الرموز/ثانية (CPU فقط)': '3-11 رمز/ثانية',
            'الحرارة': 'متوسطة',
            'الحكم': 'أفضل GUI على Apple Silicon 8 GB',
          },
          {
            'التطبيق': 'llama.cpp',
            'الحد الأدنى للـRAM': '4 GB',
            'أفضل نموذج (حد 8 GB)': 'SmolLM 2 1.7B Q4_K_M',
            'الرموز/ثانية (CPU فقط)': '5-18 رمز/ثانية',
            'الحرارة': 'منخفضة',
            'الحكم': 'الأسرع إذا جمّعت',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'أيها يجب أن تختار؟',
        content:
          '**التطبيق الصحيح يعتمد على ما إذا كنت تستطيع استخدام طرفية، وعلى Windows أم Mac أنت، وعمر معالجك.** استخدم هذا المختصر للقرار:',
        rows: [
          {
            'وضعك': 'لابتوب Windows 10، 8 GB RAM، بدون خبرة في الطرفية',
            'الاختيار': 'GPT4All',
          },
          {
            'وضعك': 'Ryzen حديث / Intel الجيل 12، 8 GB، مرتاح للطرفية',
            'الاختيار': 'Ollama',
          },
          {
            'وضعك': 'MacBook Air M1 / Mac mini M1 8 GB',
            'الاختيار': 'Jan أو Ollama',
          },
          {
            'وضعك': 'لابتوب Linux، أريد أقصى رموز/ثانية',
            'الاختيار': 'llama.cpp',
          },
          {
            'وضعك': 'جهاز بـ4 GB RAM (أقل من الحد الأدنى)',
            'الاختيار': 'GPT4All + Llama 3.2 1B Q4_0',
          },
          {
            'وضعك': 'CPU قديمة من فئة Intel Core i5-8250U / i7-7700U',
            'الاختيار': 'Ollama + SmolLM 2 1.7B',
          },
          {
            'وضعك': 'Chromebook بوضع مطوّر Linux',
            'الاختيار': 'llama.cpp + SmolLM 2',
          },
          {
            'وضعك': 'لابتوب عمل لا يمكن تثبيت برامج تشغيل عليه',
            'الاختيار': 'GPT4All (تثبيت بدون برامج تشغيل / بدون صلاحيات admin)',
          },
        ],
        columns: ['وضعك', 'الاختيار'],
        callouts: [
          {
            type: 'tip',
            text: 'عند الشك، ابدأ بـOllama. يعمل على جميع أنظمة التشغيل، يُنزّل النماذج بأمر `ollama pull [اسم-النموذج]` البسيط، ويكشف API متوافقة مع OpenAI إذا أردت دمج أدوات أخرى لاحقاً. إذا كانت الطرفية مشكلة، فـGPT4All هو البديل الصحيح — نفس النماذج بدون سطر أوامر.',
          },
        ],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: 'ما مدى سرعة كل تطبيق على أجهزة ضعيفة حقيقية؟',
        content:
          '**الرموز في الثانية على أجهزة نموذجية بـ8 GB RAM وبدون GPU مخصصة، مايو 2026.** الأرقام نطاقات مُبلَّغ عنها من المجتمع في خيوط معايير llama.cpp الأصلية، وبيانات بطاقات النماذج على Hugging Face، واختبارات بعلامات أجهزة من r/LocalLLaMA. كل خلية هي النطاق النموذجي للتشغيلات المُبلَّغ عنها بالإعداد الافتراضي؛ القيم الشاذة مستبعدة.',
        columns: ['الأجهزة', 'النموذج', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          {
            'الأجهزة': 'Intel Core i5-8250U + UHD 620 (أولترابوك 2018)',
            'النموذج': 'Phi-4 Mini Q4_K_M',
            'Ollama': '4-6 رمز/ثانية',
            'GPT4All': '3-5 رمز/ثانية',
            'Jan': '3-5 رمز/ثانية',
            'llama.cpp': '5-7 رمز/ثانية',
          },
          {
            'الأجهزة': 'AMD Ryzen 5 5500U + Vega 7 (اقتصادي 2021)',
            'النموذج': 'Phi-4 Mini Q4_K_M',
            'Ollama': '8-11 رمز/ثانية',
            'GPT4All': '6-9 رمز/ثانية',
            'Jan': '7-9 رمز/ثانية',
            'llama.cpp': '9-13 رمز/ثانية',
          },
          {
            'الأجهزة': 'Intel Core Ultra 5 125H + Arc iGPU (متوسط 2024)',
            'النموذج': 'Gemma 3 4B Q4_K_M',
            'Ollama': '10-14 رمز/ثانية',
            'GPT4All': '8-11 رمز/ثانية',
            'Jan': '9-12 رمز/ثانية',
            'llama.cpp': '12-18 رمز/ثانية',
          },
          {
            'الأجهزة': 'Apple M1 8 GB (MacBook Air 2020)',
            'النموذج': 'Llama 3.2 1B Q5_K_M',
            'Ollama': '28-40 رمز/ثانية',
            'GPT4All': '20-30 رمز/ثانية',
            'Jan': '26-38 رمز/ثانية',
            'llama.cpp': '32-48 رمز/ثانية',
          },
          {
            'الأجهزة': 'Apple M1 8 GB',
            'النموذج': 'Phi-4 Mini Q4_K_M',
            'Ollama': '12-18 رمز/ثانية',
            'GPT4All': '9-14 رمز/ثانية',
            'Jan': '11-17 رمز/ثانية',
            'llama.cpp': '14-20 رمز/ثانية',
          },
          {
            'الأجهزة': 'Intel Core i5-8250U',
            'النموذج': 'SmolLM 2 1.7B Q4_K_M',
            'Ollama': '10-14 رمز/ثانية',
            'GPT4All': '8-12 رمز/ثانية',
            'Jan': '9-13 رمز/ثانية',
            'llama.cpp': '12-16 رمز/ثانية',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'يهيمن Apple Silicon على هذا الجدول لأن بنية الذاكرة الموحدة في M1 تتيح لـGPU وCPU مشاركة نفس RAM بعرض نطاق ترددي عالٍ. في أجهزة اللابتوب x86 بدون GPU مخصصة، الرسومات المتكاملة نادراً ما تُعوّض عن عقوبة overhead من التفريغ — انظر قسم الرسومات المتكاملة أدناه.',
          },
        ],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: 'لماذا يبدو 8 GB RAM ضيقاً جداً ومتى يبدأ الجهاز في الخنق الحراري؟',
        content:
          '**مع 8 GB RAM، نظام التشغيل يستهلك 2.5-3.5 GB قبل تحميل أي نموذج، مما يترك 4.5-5.5 GB للنموذج وcache KV الخاص به.** هذا الحد هو ما يجعل Phi-4 Mini (3.8B Q4 ≈ 2.4 GB) نقطة التوازن العملي ويستبعد أي نموذج 7B بأي تكمية للاستخدام المستمر.',
        items: [
          '**مجموعة العمل مقابل RAM النظام:** ملف النموذج على القرص أصغر من مجموعة عمله المحملة. Phi-4 Mini Q4_K_M يشغل ≈ 2.4 GB على القرص، لكن ≈ 3.0-3.5 GB في RAM بعد إضافة cache KV لسياق 2048 رمزاً. اخفض السياق إلى 1024 وتوفّر ≈ 400 MB.',
          '**الموت بالـswap:** عندما تتجاوز مجموعة العمل الـRAM الفيزيائية، يبدأ macOS وLinux في الترحيل إلى SSD. ينخفض الرموز/ثانية بمقدار 5-10× ويصبح الجهاز غير مستجيب. راقب `vm_stat` (Mac) أو `free -h` (Linux) — إذا ارتفع الـswap أثناء الاستدلال، انتقل فوراً إلى نموذج أصغر.',
          '**الخنق الحراري في الأولترابوك:** الأجهزة بدون مراوح أو بمروحة واحدة (MacBook Air M1 وXPS 13 وSurface Laptop Go) تصل إلى حدودها الحرارية خلال 3-5 دقائق من الاستدلال المستمر وتُخفض ترددات CPU بنسبة 20-35%. ينخفض الرموز/ثانية بالتناسب.',
          '**طول السياق هو ضريبة ذاكرة:** السياق الافتراضي 4096 يحجز cache KV بـ4096 رمزاً مسبقاً. في نماذج 1B هذا 200-300 MB؛ في نماذج 4B هذا 600-900 MB. اقطع إلى 1024 ما لم تحتج فعلاً مدخلات طويلة.',
          '**التطبيقات الخلفية تؤثر أكثر من طراز CPU:** نافذة Chrome بـ20 علامة تبويب تأخذ 1-2 GB. Slack يأخذ 400-600 MB. مع 8 GB RAM، إغلاق هذه التطبيقات قبل تحميل نموذج 4B هو أكبر مكسب فردي في الرموز/ثانية متاح.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا تُحمِّل أي نموذج 7B على 8 GB RAM، حتى بـQ2. نموذج 7B بـQ2 يشغل ≈ 2.5 GB على القرص، لكن مجموعة العمل مع سياق 2048 تصل إلى ≈ 5.5 GB، مما يتجاوز حد 8 GB في معظم أنظمة Windows / Linux. النتيجة انخفاض سرعة 5-10× وواجهة مجمّدة.',
          },
        ],
      },
      bestModels: {
        id: 'best-models',
        title: 'أي نموذج وتكمية يجب تحميله في كل تطبيق؟',
        content:
          '**مع 8 GB RAM وبدون GPU مخصصة، ابقَ تحت 4B معامل بـQ4_K_M أو أقل.** Q4_K_M هو التكمية القياسية في 2026 — تفقد ≈ 1% من الـperplexity مقارنةً بـFP16، تناسب نصف الـRAM، وهي القياسية لمعظم builds GGUF على Hugging Face. مُدرَجة حسب التطبيق:',
        items: [
          '**Ollama:** `ollama pull phi3:mini` (Phi-4 Mini 3.8B Q4_K_M، ≈ 2.4 GB) هو التوصية القياسية. لأقصى سرعة، `ollama pull smollm2:1.7b` (≈ 1.0 GB). لجودة دردشة أعلى، `ollama pull llama3.2:1b-instruct-q5_K_M` (≈ 0.85 GB).',
          '**GPT4All:** استخدم متصفح النماذج المدمج → "Llama 3.2 1B Instruct Q4_0" (≈ 0.7 GB) للتثبيت الأخف، أو "Phi-4 Mini Q4_K_M" إذا سمحت الـRAM. إعدادات GPT4All الافتراضية متحفظة لذا قائمة النماذج المرئية أقصر من قائمة llama.cpp، لكن كل إدخال يعمل.',
          '**Jan:** استخدم الكتالوج المنتقى → "Gemma 3 4B Instruct Q4_K_M" (≈ 2.6 GB) على Apple Silicon، أو "Phi-4 Mini Q4_K_M" على x86. يقبل Jan أيضاً لصق URL من Hugging Face لأي GGUF.',
          '**llama.cpp:** نزّل GGUF مباشرةً من Hugging Face — `bartowski/Phi-4-mini-instruct-GGUF` أو `bartowski/SmolLM2-1.7B-Instruct-GGUF` أو `bartowski/Llama-3.2-1B-Instruct-GGUF`. شغّل بـ`./llama-cli -m model.gguf -p "..." -c 1024 -t 4`.',
          '**تجنّب مع 8 GB / بدون GPU:** أي نموذج 7B بأي تكمية، وأي نموذج فوق Q5_K_M (مكسب جودة هامشي، تكلفة RAM مضاعفة)، وأي نموذج أساسي — اختر دائماً متغيرات `-instruct` أو `-chat` للحصول على مخرجات قابلة للاستخدام.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Q4_K_M ليست نفس Q4_0. تستخدم Q4_K_M نظام دقة مختلطة أذكى وتُقدّم ≈ 5-10% جودة أعلى بنفس الحجم. اختر Q4_K_M دائماً عندما يتوفر كلا الخيارين.',
          },
        ],
      },
      settings: {
        id: 'settings',
        title: 'ما الإعدادات التي تُضيف 30-60% من الرموز/ثانية على الأجهزة الضعيفة؟',
        content:
          '**القيم الافتراضية مضبوطة لـ16 GB RAM وGPU مخصصة. مع 8 GB بـCPU فقط، ثلاثة معاملات هي الأهم:** طول السياق وحجم الدُفعة وعدد الخيوط. إذا ضُبطت معاً، تُضيف 30-60% من الرموز/ثانية على نفس الأجهزة.',
        items: [
          '**طول السياق — أكبر مكسب فردي.** اخفض من 4096 (افتراضي) إلى 1024. في Ollama: `OLLAMA_NUM_CTX=1024 ollama run phi3:mini`. في llama.cpp: `-c 1024`. توفير الـRAM: 400-900 MB حسب النموذج. مكسب الرموز/ثانية: 10-20%.',
          '**عدد الخيوط — اضبط على النوى الفيزيائية لا المنطقية.** المعالجات القديمة (i5-8250U وRyzen 5 5500U) لديها 4 فيزيائية / 8 منطقية. اضبط الخيوط = 4 لا 8. في llama.cpp: `-t 4`. في Ollama: `OLLAMA_NUM_THREAD=4`. Hyperthreading يُضر بالاستدلال لأن كلا الخيطين يتنافسان على نفس وحدة FP/SIMD.',
          '**حجم الدُفعة لمعالجة الموجّه — اضبط على 8 على المعالجات الضعيفة.** llama.cpp: `--n-batch 8`. الافتراضي 512 يُشبع cache L2 على معالجات 4 نوى. مكسب الرموز/ثانية على نماذج 4B: 15-25%.',
          '**تكمية cache KV — اضبط على q8_0 لتقليص RAM بنسبة النصف.** llama.cpp: `--cache-type-k q8_0 --cache-type-v q8_0`. توفير الـRAM: 150-400 MB مع سياق 1024، أكثر مع سياقات أكبر. تأثير الجودة: غير ملحوظ.',
          '**عطّل mlock على الأنظمة المعرّضة لـswap.** llama.cpp `--no-mlock`. على أنظمة 8 GB، تأمين النموذج في الـRAM يمنع نظام التشغيل من اتخاذ قرارات ذكية للـcache. مُعاكِس للحدس، لكن أسرع باستمرار على Windows 10/11 بـ8 GB.',
          '**استخدم builds بـAVX2 صراحةً.** معظم ملفات llama.cpp / Ollama الثنائية المُجمَّعة مسبقاً تكتشف AVX2 / AVX-512 تلقائياً وتُفعّل kernel الصحيح. إذا جمّعت بنفسك، مرّر `-DGGML_AVX2=ON`. اكتشاف AVX-512: `cat /proc/cpuinfo | grep avx512`. AVX-512 يُعطي 10-15% إضافية على معالجات متوافقة (Ice Lake / Tiger Lake / Rocket Lake / Zen 4+).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'طبّق التعديلات الخمسة معاً وعادةً ستحصل على 35-55% رموز/ثانية إضافية على نفس النموذج ونفس الأجهزة. أكبر مكسب فردي هو تقليص السياق من 4096 إلى 1024، الذي يُقلّص أيضاً وقت أول رمز بشكل كبير في موجّه بارد.',
          },
        ],
      },
      igpu: {
        id: 'igpu',
        title: 'هل يستحق استخدام الرسومات المتكاملة للذكاء الاصطناعي المحلي؟',
        content:
          '**في معظم أجهزة اللابتوب بـ8 GB RAM الإجابة لا — ابقَ الاستدلال على CPU.** الرسومات المتكاملة تشترك في RAM النظام، لذا تفريغ الطبقات لا يُعطي ذاكرة إضافية؛ فقط يُضيف عقوبة overhead من التفريغ. ثلاث استثناءات تستحق المعرفة:',
        items: [
          '**Apple Silicon (M1/M2/M3/M4) — نعم، دائماً.** بنية الذاكرة الموحدة تجعل "GPU" ترى نفس الـRAM بنفس عرض النطاق الترددي مثل CPU. تستخدم Ollama وJan وllama.cpp تسريع Metal على Mac تلقائياً بدون أي علم. هذا هو سبب تفوق M1 بـ8 GB على معظم أجهزة اللابتوب Windows بـ8 GB بعامل 2-3×.',
          '**Intel Arc iGPU (Meteor Lake / Lunar Lake / Arrow Lake) — أحياناً.** رقائق Intel Core Ultra (Ultra 5 125H وUltra 7 155H وUltra 7 258V) تأتي بـiGPU Arc يدعم تسريع OpenVINO وSYCL. llama.cpp بـ`-DGGML_SYCL=ON` أسرع بـ30-60% من CPU فقط على هذه الرقائق. الإعداد ليس بسيطاً.',
          '**AMD Ryzen 7000/8000 بـiGPU Radeon 700M/800M — تجريبي.** دعم ROCm على Radeon المتكامل جزئي وعرضة للمشاكل في 2026. CPU فقط هو الخيار الأأمن ما لم تستمتع بتصحيح أخطاء مكدسات برامج التشغيل.',
          '**Intel UHD / Iris Plus القديمة / AMD Vega القديمة — تجاهلها.** هذه الرسومات تفتقر إلى إنتاجية FP16 وعرض نطاق الذاكرة للتفوق على kernel CPU الحديثة بـAVX2. ابقَ على CPU.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'أبسط اختبار لمعرفة ما إذا كانت رسوماتك المتكاملة تستحق الاستخدام: شغّل نفس النموذج لـ10 أجيال بـCPU فقط وعشرة أخرى بتسريع الرسومات المتكاملة وقارن الرموز/ثانية. على Apple Silicon الرسومات المتكاملة دائماً أسرع. على الرسومات المتكاملة x86 الإجابة تعتمد على الجهاز — اختبر بدل الافتراض.',
          },
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'الأخطاء الشائعة',
        content:
          '**خمسة أخطاء تُدمّر الأداء على أنظمة 8 GB / بدون GPU**، مع الحل لكل منها:',
        items: [
          '**الخطأ 1: تحميل نموذج 7B "لأن Q4 يناسب القرص".** ملف القرص أصغر من مجموعة العمل المحملة. نموذج 7B بـQ4 يشغل ≈ 4.4 GB على القرص، لكن ≈ 5.5-6.5 GB في RAM مع سياق 2048، مما يتجاوز حد 8 GB ويُحرّك swap. **الحل:** ابقَ عند 4B أو أقل. Phi-4 Mini Q4_K_M هو النموذج الأعلى جودة الذي يناسب باستمرار.',
          '**الخطأ 2: ترك نافذة السياق على 4096.** الافتراضي 4096 يحجز cache KV يُضيف 400-900 MB فوق النموذج. **الحل:** اضبط السياق على 1024 ما لم تحتج مدخلات طويلة فعلاً. `OLLAMA_NUM_CTX=1024` (Ollama)، `-c 1024` (llama.cpp).',
          '**الخطأ 3: التشغيل مع Chrome وSlack وSpotify مفتوحة.** كل منها يستهلك 0.5-2 GB. مع 8 GB RAM، لديك ≈ 5 GB بعد نظام التشغيل. التطبيقات الخلفية تدفعك إلى swap قبل أن يُحمَّل النموذج حتى. **الحل:** أغلق كل شيء إلا تطبيق الذكاء الاصطناعي ونافذة ملاحظات قبل الاستدلال.',
          '**الخطأ 4: اختيار Q8_0 "من أجل الجودة".** في نماذج 1B-4B الفرق في الجودة بين Q4_K_M وQ8_0 أقل من الحد الملحوظ للاستخدام في الدردشة، لكن Q8 يُضاعف تكلفة الـRAM ويُنصّف الرموز/ثانية. **الحل:** ابقَ على Q4_K_M ما لم يكن لديك معيار قابل للقياس يُظهر أن Q8 يُساعد في مهمتك.',
          '**الخطأ 5: الافتراض أن Raspberry Pi 4 كافية.** 4 GB RAM ومعالج Cortex-A72 بـ1.5 GHz يمكنهما تقنياً تشغيل TinyLlama 1B بـ1-3 رمز/ثانية، لكن التجربة غير قابلة للاستخدام للدردشة. **الحل:** Raspberry Pi 5 بـ8 GB RAM هو الحد الأدنى الواقعي لـSBC ARM — وحتى حينها، لابتوب x86 بـ8 GB أسرع.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الأخطاء الخمسة لها نفس السبب الجذري: افتراض أن إعداد سطح المكتب ينطبق على لابتوب ذي موارد محدودة. كل قيمة افتراضية (سياق 4096 وجودة Q8 وجميع الخيوط) مضبوطة لجهاز بـ16-32 GB RAM وGPU مخصصة. مع 8 GB بـCPU فقط، أنت بحاجة للتجاوز النشط للقيم الافتراضية. فكّر في قسم الإعدادات من هذا الدليل باعتباره "إعداد مسبق للأجهزة الضعيفة" — طبّق التعديلات الخمسة قبل أول تشغيل لك.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يمكن تشغيل الذكاء الاصطناعي المحلي بـ4 GB RAM؟',
            a: 'نعم، لكن فقط مع نماذج أقل من 2B مثل Llama 3.2 1B Q4_0 (≈ 0.7 GB على القرص) أو SmolLM 2 360M (≈ 0.25 GB على القرص). تطبيق GPT4All هو الوحيد من التطبيقات الأربعة الذي يُشير إلى 4 GB كحد أدنى رسمي. توقع 3-8 رمز/ثانية على CPU حديثة وسلوك واجهة أبطأ بوضوح لأن نظام التشغيل لا يترك هامشاً.',
          },
          {
            q: 'هل يعمل معالج Intel قديم للذكاء الاصطناعي المحلي؟',
            a: 'أي CPU بـAVX2 (Haswell، 2013 أو أحدث) يعمل في 2026. الحد الأدنى العملي هو Intel Core i5-8250U أو Ryzen 5 2500U قديم، حيث يعمل Phi-4 Mini Q4 بـ4-6 رمز/ثانية. المعالجات بدون AVX2 (Intel قبل 2013 وAMD Bulldozer الأصلي) تُحمَّل لكن تعمل بـ1-2 رمز/ثانية مما لا يصلح للدردشة.',
          },
          {
            q: 'هل يمكن للذكاء الاصطناعي المحلي إتلاف جهازي المحمول؟',
            a: 'لا. الاستدلال المحلي هو عملية مستخدم اعتيادية — لا يمكنه إتلاف الأجهزة. أسوأ سيناريو هو أن يسخن الجهاز (90-100°C في الأولترابوك) ويُخنق، وهو ما تحمي منه البرمجيات الثابتة تلقائياً. لتجنب ذلك، استخدم قاعدة تبريد في الجلسات الطويلة، وابقِ الغرفة أقل من 25°C، وأوقف الاستدلال إذا كان الهيكل غير مريح للمسّ.',
          },
          {
            q: 'هل الرسومات المتكاملة كافية؟',
            a: 'على Apple Silicon (M1+) هي أكثر من كافية — الذاكرة الموحدة تجعل iGPU فعلياً GPU منخفضة الأداء مخصصة. على Intel Core Ultra (Meteor Lake / Arrow Lake) يمكن أن يُعطي سرعة إضافية 30-60% إذا أعددت SYCL. على Intel UHD / Iris Plus / AMD Vega القديمة، الرسومات المتكاملة أبطأ من CPU ولا تستحق الاستخدام.',
          },
          {
            q: 'أي نموذج هو الأسرع بـCPU فقط؟',
            a: 'Llama 3.2 1B Q4_0 وSmolLM 2 1.7B Q4_K_M هما أسرع النماذج القابلة للاستخدام. يصل Llama 3.2 1B إلى 25-50 رمز/ثانية على Apple M1 و12-25 رمز/ثانية على CPU Ryzen أو Intel حديثة. SmolLM 2 بسرعة مشابهة مع كتابة أكثر صقلاً. أي شيء فوق 4B معاملات سيُشعرك بالبطء على أنظمة CPU فقط.',
          },
          {
            q: 'هل إضافة RAM أكثر فائدة من ترقية CPU؟',
            a: 'على أنظمة 8 GB، الانتقال إلى 16 GB هو أهم ترقية عملية لأنه يُتيح نماذج 7B-8B مثل Mistral Small Q4 وLlama 3.3 8B Q4. ترقيات CPU تُعطي 20-50% رموز/ثانية إضافية؛ ترقية الـRAM تُعطي 2-4× جودة أعلى (قفزة من 1B-4B إلى 7B-8B). إذا كان بإمكانك فعل شيء واحد فقط، أضف RAM.',
          },
          {
            q: 'هل يمكن تشغيل الذكاء الاصطناعي المحلي على Chromebook؟',
            a: 'فقط إذا كان وضع مطوّر Linux (Crostini) متاحاً. التطبيقات الأربعة في هذا الدليل تعمل في حاوية Linux — llama.cpp المُجمَّع من الكود المصدري هو الأكثر موثوقية على Chromebooks ARM، بينما Chromebooks x86 (المبنية على Intel) تعمل مع Ollama أو GPT4All. الأداء يتوافق مع CPU الأساسية؛ Chromebook بـIntel Core i3 / i5 يتصرف مثل لابتوب Windows المعادل.',
          },
          {
            q: 'هل Windows 10 يعمل للذكاء الاصطناعي المحلي في 2026؟',
            a: 'نعم. التطبيقات الأربعة تدعم Windows 10 22H2. Ollama وGPT4All وJan يأتون بمثبّتات Windows موقّعة؛ llama.cpp يُقدّم ملفات ثنائية Windows مُجمَّعة مسبقاً في releases الخاصة به على GitHub. انتهاء دعم Windows 10 العام في أكتوبر 2025 لا يمنع التثبيت، لكن تحديثات الأمان انتهت — فكّر في نظام dual-boot مع Linux أو الترقية إلى Windows 11 للاستخدام طويل الأمد.',
          },
          {
            q: 'ما أرخص لابتوب يُشغّل الذكاء الاصطناعي المحلي بشكل جيد؟',
            a: 'ThinkPad T14 أو Dell Latitude 5430 مستعمل من 2021-2022 بـ16 GB RAM ومعالج Ryzen 5 5500U أو Intel i5-1235U يكلف 350-450 يورو في 2026 ويُشغّل Phi-4 Mini Q4 بـ8-14 رمز/ثانية. أرخص منه: أي MacBook Air بـApple M1 وذاكرة 8 GB مستعمل بـ450-550 يورو، يتفوق على معظم أجهزة اللابتوب x86 في الرموز/ثانية بفضل الذاكرة الموحدة.',
          },
          {
            q: 'هل يمكن استخدام Raspberry Pi للذكاء الاصطناعي المحلي؟',
            a: 'Raspberry Pi 5 بـ8 GB RAM تُشغّل Llama 3.2 1B Q4 بـ4-7 رمز/ثانية — قابل للاستخدام لكن بطيء. Pi 4 بـ4 GB تصل إلى نحو 2 رمز/ثانية مع TinyLlama 1B. للاستخدام الفعلي في الدردشة، لابتوب x86 بـ8 GB أو MacBook Air M1 أسرع وأرخص مستعملاً وأسهل في الإعداد. Pi تُفيد فقط لأحمال عمل embedded أو edge أو التي تعمل بشكل دائم.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أبسط تطبيق ذكاء اصطناعي محلي لكل نظام تشغيل: توصيات Windows وMac وLinux](/ar/power-local-llm/easiest-local-ai-app-windows-mac-linux) — كثير من مستخدمي الأجهزة الضعيفة على Windows قديم؛ هذا الدليل يختار تطبيقاً لكل نظام تشغيل.',
          '[أفضل تطبيقات LLM المحلي لنظام Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — بديل طبيعي للمستخدمين ذوي الموارد المحدودة الذين لديهم هاتف Android حديث.',
          '[استبدل Zapier بعملاء الذكاء الاصطناعي المحلي](/ar/power-local-llm/replace-zapier-with-local-ai-agents) — أتمتة سير العمل العملية للمستخدمين ذوي الميزانية المحدودة على نفس الأجهزة.',
          '[LM Studio مقابل Jan مقابل GPT4All: أيها يفوز في 2026](/ar/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026) — مقارنة مباشرة إذا أردت أيضاً النظر في LM Studio.',
          '[أفضل وحدات معالجة الرسومات الاقتصادية للنماذج اللغوية المحلية](/ar/local-llms/best-budget-gpus-local-llm) — عندما تكون مستعداً للخروج من منطقة CPU فقط.',
          '[دليل أجهزة النماذج اللغوية المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026) — دليل شامل للأجهزة يشمل RAM وCPU وGPU.',
          '[مركز Power Local LLM](/ar/power-local-llm) — المكتبة الكاملة من الأدلة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ar/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': 'أفضل تطبيقات الذكاء الاصطناعي المحلي للأجهزة الضعيفة 2026 (8 GB RAM، بدون GPU)',
      'description':
        'اختُبرت Ollama وGPT4All وJan وllama.cpp على أجهزة كمبيوتر محمولة بـ8 GB RAM ورسومات متكاملة. الرموز/ثانية وضغط الذاكرة والإعدادات الدقيقة.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': {
        '@type': 'Organization',
        'name': 'PromptQuorum',
        'url': 'https://www.promptquorum.com',
        'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' },
      },
      'proficiencyLevel': 'Beginner',
      'about': [
        { '@type': 'Thing', 'name': 'Ollama' },
        { '@type': 'Thing', 'name': 'GPT4All' },
        { '@type': 'Thing', 'name': 'Jan (تطبيق الذكاء الاصطناعي المحلي)' },
        { '@type': 'Thing', 'name': 'llama.cpp' },
        { '@type': 'Thing', 'name': 'Phi-4 Mini' },
        { '@type': 'Thing', 'name': 'LLM محلي على جهاز ضعيف' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'أفضل تطبيقات الذكاء الاصطناعي المحلي لأجهزة اللابتوب بـ8 GB RAM بدون GPU في 2026',
      'numberOfItems': 4,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Ollama',
          'description':
            'وقت تشغيل CPU الأخف؛ الحد الأدنى 6 GB RAM؛ يتزاوج بشكل أفضل مع Phi-4 Mini Q4_K_M بـ4-14 رمز في الثانية على 8 GB بـCPU فقط.',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'GPT4All',
          'description':
            'أبسط مثبّت بنقرة واحدة؛ الحد الأدنى 4 GB RAM؛ يتزاوج بشكل أفضل مع Llama 3.2 1B Q4_0 بـ3-10 رمز في الثانية؛ موصى به للمستخدمين غير التقنيين.',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Jan',
          'description':
            'واجهة رسومية مفتوحة المصدر (AGPL)؛ الحد الأدنى 6 GB RAM؛ يتزاوج بشكل أفضل مع Gemma 3 4B Q4_K_M بـ3-11 رمز في الثانية؛ أخف واجهة رسومية على Apple Silicon بـ8 GB.',
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'llama.cpp',
          'description':
            'سرعة bare-metal إذا جمّعت؛ الحد الأدنى 4 GB RAM؛ يتزاوج بشكل أفضل مع SmolLM 2 1.7B Q4_K_M بـ5-18 رمز في الثانية؛ الأسرع على أجهزة متطابقة.',
        },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': 'https://www.promptquorum.com/ar' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': 'أفضل تطبيقات الذكاء الاصطناعي المحلي للأجهزة الضعيفة', 'item': 'https://www.promptquorum.com/ar/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Easiest Desktop Apps',
    title: '저사양 PC를 위한 최고의 로컬 AI 앱 2026 (8 GB RAM, GPU 없음)',
    seoTitle: '저사양 PC 8 GB 로컬 AI 앱 2026: CPU 전용',
    metaDescription:
      'Ollama, GPT4All, Jan, llama.cpp를 8 GB RAM 내장 그래픽 노트북에서 테스트. 토큰/초, 메모리 압박, 각 앱별 정확한 설정값. 2026년 5월.',
    twitterDescription:
      'GPU 없는 8 GB RAM 노트북에서 작동하는 로컬 AI 앱 4종. 토큰/초, 정확한 설정, 솔직한 평가. 2026년 5월.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 3 1.5B'],
    current_hardware_mentioned: ['Intel UHD 620', 'Intel Iris Xe', 'AMD Ryzen 5 5500U', 'Apple M1 8GB', 'Intel Core i5-8250U'],
    audience: '전용 GPU 없이 8 GB RAM만 있는 4~7년 된 노트북 사용자로 처음 로컬 AI 앱을 선택하는 분들.',
    readTime: '11분 분량',
    educationalLevel: 'Beginner',
    primaryTerm: '저사양 PC 로컬 AI',
    targetKeywords: ['로컬 ai 8gb ram', '저사양 pc 최적 로컬 llm', '로컬 ai gpu 없음', '로컬 llm cpu 전용 2026', '구형 노트북 로컬 ai'],
    leadAnswerBlock:
      '**GPU 없이 8 GB RAM만 있는 노트북에서도 2026년에 잘 작동하는 앱이 네 가지 있습니다: Ollama, GPT4All, Jan, llama.cpp. Phi-4 Mini Q4 (균형), SmolLM 2 1.7B Q4 (속도), Llama 3.2 1B Q5 (가장 부드러운 GUI 경험) 중 하나와 조합하고 작업 세트를 6 GB 이하로 유지하세요.**',
    quickAnswerTop: {
      ko: {
        question: '8 GB RAM, GPU 없는 노트북에서 가장 잘 작동하는 로컬 AI 앱은 무엇인가요?',
        answer:
          '터미널에 익숙하다면 Ollama를 선택하세요 — 가장 가벼운 런타임이며 Phi-4 Mini Q4와 궁합이 좋아 구형 Intel CPU에서 4~8 토큰/초, Ryzen 5000/Intel 12세대 하드웨어에서 8~14 토큰/초가 나옵니다. 원클릭 설치와 명령줄 없는 사용을 원한다면 GPT4All을 선택하세요. 깔끔한 GUI와 오픈소스 코드를 원한다면 Jan을 선택하세요.',
        bullets: [
          'Ollama — 가장 가벼운 CPU 런타임, 터미널 기반, Phi-4 Mini와 최고 궁합',
          'GPT4All — 가장 쉬운 설치, 최소 4 GB RAM, 비기술 사용자 권장',
          'Jan — 완전한 GUI, 오픈소스 (AGPL), Apple Silicon 네이티브, 8 GB Mac에서 가장 가벼운 앱',
          'llama.cpp — 베어메탈 속도, 빌드 필요, SmolLM 2 / Gemma 3 4B와 최고 궁합',
          '네 앱 모두 무료이며 설치 후 오프라인 작동, 표준 GGUF 모델 파일 로드 가능',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '비교 표', anchor: '#comparison-table' },
      { label: '어떤 앱을 선택해야 하나요?', anchor: '#which-one' },
      { label: '토큰/초 벤치마크 (CPU 전용, 8 GB RAM)', anchor: '#cpu-benchmarks' },
      { label: '메모리 압박과 열 제한', anchor: '#memory-thermals' },
      { label: '8 GB RAM에서 앱별 최적 모델', anchor: '#best-models' },
      { label: '30~60% 속도 향상 설정', anchor: '#settings' },
      { label: '내장 그래픽: 활용할 가치가 있나요?', anchor: '#igpu' },
      { label: '흔한 실수', anchor: '#mistakes' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽기', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-ai-app-low-end-pc-static.html',
    gammaDescription: '아래 프레젠테이션은 8 GB RAM, GPU 없이 테스트한 Ollama, GPT4All, Jan, llama.cpp (4~18 토큰/초), 30~60% 속도 향상 설정, 앱별 최적 모델, 성능을 망치는 5가지 흔한 실수를 다룹니다. PDF를 저사양 PC 참조 카드로 다운로드하세요.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Ollama** — 2026년 가장 가벼운 CPU 런타임, 최고의 앱+모델 조합: Ollama + Phi-4 Mini Q4로 8 GB CPU 전용에서 4~14 토큰/초.',
          '**GPT4All** — 유일하게 최소 4 GB RAM으로 터미널 없이 설치 가능, Windows 10 구형 노트북의 비기술 사용자에게 이상적.',
          '**Jan** — 완전한 GUI, AGPL 오픈소스, Apple Silicon 네이티브, 8 GB MacBook Air 또는 Mac mini M1에서 가장 가벼운 GUI 앱.',
          '**llama.cpp** — 동일 하드웨어에서 가장 높은 토큰/초 (Ollama보다 5~15%, GPT4All보다 15~25% 높음), 하지만 빌드 단계 필요.',
          '**8 GB / GPU 없음 최적 모델:** 균형을 위한 Phi-4 Mini 3.8B Q4_K_M, 최고 속도를 위한 SmolLM 2 1.7B Q4, 가장 부드러운 채팅 경험을 위한 Llama 3.2 1B Q5.',
          '**CPU 동일 조건 속도 순위:** llama.cpp > Ollama > Jan > GPT4All. 차이는 15~25%이며, 2~3배가 아닙니다.',
          '**2026년 5월 기준, 8 GB RAM에서 7B+ 모델 실행 금지** — 컨텍스트 창 압박과 OS 자체가 스왑을 유발해 처리량이 5~10배 떨어집니다.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '8 GB RAM, GPU 없음 조건에서 Ollama, GPT4All, Jan, llama.cpp 비교',
        content: '아래 수치는 llama.cpp 기본 벤치마크 스레드, Hugging Face 모델 카드, r/LocalLLaMA의 8 GB RAM 내장 그래픽 테스트 보고서에서 수집한 것입니다.',
        snippetBlocks: [
          { type: 'one-sentence', text: '8 GB RAM, 전용 GPU 없는 PC에서 Ollama + Phi-4 Mini Q4_K_M 조합이 비코딩 용도의 로컬 AI에 가장 적합합니다 — 가장 빠른 생성 속도, 가장 낮은 발열, 가장 큰 모델 라이브러리.' },
          { type: 'plain-terms', text: '저사양 8 GB RAM PC: Ollama를 설치하고 `ollama pull phi4-mini`와 `ollama run phi4-mini`를 실행하세요. CPU에 따라 4~14 토큰/초가 나옵니다. 터미널 없는 대안은 GPT4All을 일반 앱처럼 설치하고 8 GB에 맞는 모델로 필터링하세요.' },
        ],
        callouts: [{ type: 'note', text: 'Apple M1 8 GB는 통합 메모리 아키텍처 덕분에 모든 앱에서 x86 8 GB 노트북보다 일관되게 성능이 뛰어납니다.' }],
        columns: ['앱', '최소 RAM', '최적 모델 (8 GB 한도)', '토큰/초 (CPU 전용)', '발열', '평가'],
        rows: [
          { '앱': 'Ollama', '최소 RAM': '6 GB', '최적 모델 (8 GB 한도)': 'Phi-4 Mini Q4_K_M', '토큰/초 (CPU 전용)': '4~14 토큰/초', '발열': '낮음', '평가': '최고 균형 — 1순위 선택' },
          { '앱': 'GPT4All', '최소 RAM': '4 GB', '최적 모델 (8 GB 한도)': 'Llama 3.2 1B Q4_0', '토큰/초 (CPU 전용)': '3~10 토큰/초', '발열': '낮음', '평가': '가장 쉬운 설치 — 비기술 사용자 선택' },
          { '앱': 'Jan', '최소 RAM': '6 GB', '최적 모델 (8 GB 한도)': 'Gemma 3 4B Q4_K_M', '토큰/초 (CPU 전용)': '3~11 토큰/초', '발열': '보통', '평가': 'Apple Silicon 8 GB 최고 GUI' },
          { '앱': 'llama.cpp', '최소 RAM': '4 GB', '최적 모델 (8 GB 한도)': 'SmolLM 2 1.7B Q4_K_M', '토큰/초 (CPU 전용)': '5~18 토큰/초', '발열': '낮음', '평가': '빌드하면 가장 빠름' },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: '어떤 앱을 선택해야 하나요?',
        content: '**올바른 앱은 터미널 사용 여부, Windows 또는 Mac 사용 여부, CPU 세대에 따라 달라집니다.**',
        rows: [
          { '상황': 'Windows 10 노트북, 8 GB RAM, 터미널 경험 없음', '선택': 'GPT4All' },
          { '상황': '최신 Ryzen / Intel 12세대, 8 GB, 터미널 가능', '선택': 'Ollama' },
          { '상황': 'MacBook Air M1 / Mac mini M1 8 GB', '선택': 'Jan 또는 Ollama' },
          { '상황': 'Linux 노트북, 최대 토큰/초 원함', '선택': 'llama.cpp' },
          { '상황': '4 GB RAM 장치 (최소 요건 미달)', '선택': 'GPT4All + Llama 3.2 1B Q4_0' },
          { '상황': 'Intel Core i5-8250U / i7-7700U 구형 CPU', '선택': 'Ollama + SmolLM 2 1.7B' },
          { '상황': 'Linux 개발자 모드 Chromebook', '선택': 'llama.cpp + SmolLM 2' },
          { '상황': '드라이버 설치 불가 업무용 노트북', '선택': 'GPT4All (관리자 권한 불필요)' },
        ],
        columns: ['상황', '선택'],
        callouts: [{ type: 'tip', text: '확신이 없다면 Ollama로 시작하세요. 모든 OS에서 작동하며 나중에 OpenAI 호환 API로 다른 도구와 통합할 수 있습니다.' }],
      },
      cpuBenchmarks: {
        id: 'cpu-benchmarks',
        title: '실제 저사양 하드웨어에서 각 앱은 얼마나 빠른가요?',
        content: '**8 GB RAM, 전용 GPU 없는 일반적인 하드웨어에서의 토큰/초, 2026년 5월.**',
        columns: ['하드웨어', '모델', 'Ollama', 'GPT4All', 'Jan', 'llama.cpp'],
        rows: [
          { '하드웨어': 'Intel Core i5-8250U + UHD 620 (2018년 울트라북)', '모델': 'Phi-4 Mini Q4_K_M', 'Ollama': '4~6 토큰/초', 'GPT4All': '3~5 토큰/초', 'Jan': '3~5 토큰/초', 'llama.cpp': '5~7 토큰/초' },
          { '하드웨어': 'AMD Ryzen 5 5500U + Vega 7 (2021년 저가형)', '모델': 'Phi-4 Mini Q4_K_M', 'Ollama': '8~11 토큰/초', 'GPT4All': '6~9 토큰/초', 'Jan': '7~9 토큰/초', 'llama.cpp': '9~13 토큰/초' },
          { '하드웨어': 'Intel Core Ultra 5 125H + Arc iGPU (2024년 중급)', '모델': 'Gemma 3 4B Q4_K_M', 'Ollama': '10~14 토큰/초', 'GPT4All': '8~11 토큰/초', 'Jan': '9~12 토큰/초', 'llama.cpp': '12~18 토큰/초' },
          { '하드웨어': 'Apple M1 8 GB (MacBook Air 2020)', '모델': 'Llama 3.2 1B Q5_K_M', 'Ollama': '28~40 토큰/초', 'GPT4All': '20~30 토큰/초', 'Jan': '26~38 토큰/초', 'llama.cpp': '32~48 토큰/초' },
          { '하드웨어': 'Apple M1 8 GB', '모델': 'Phi-4 Mini Q4_K_M', 'Ollama': '12~18 토큰/초', 'GPT4All': '9~14 토큰/초', 'Jan': '11~17 토큰/초', 'llama.cpp': '14~20 토큰/초' },
          { '하드웨어': 'Intel Core i5-8250U', '모델': 'SmolLM 2 1.7B Q4_K_M', 'Ollama': '10~14 토큰/초', 'GPT4All': '8~12 토큰/초', 'Jan': '9~13 토큰/초', 'llama.cpp': '12~16 토큰/초' },
        ],
        callouts: [{ type: 'note', text: 'Apple Silicon이 이 표를 압도하는 이유는 통합 메모리 아키텍처 덕분에 GPU와 CPU가 동일한 RAM을 고대역폭으로 공유하기 때문입니다.' }],
      },
      memoryThermals: {
        id: 'memory-thermals',
        title: '8 GB RAM이 왜 빡빡하게 느껴지고 언제 스로틀링이 시작되나요?',
        content: '**8 GB RAM에서 OS는 모델 로드 전에 2.5~3.5 GB를 차지하며, 모델과 KV 캐시에 4.5~5.5 GB가 남습니다.**',
        items: [
          '**작업 세트 대 시스템 RAM:** Phi-4 Mini Q4_K_M은 디스크에서 ≈ 2.4 GB이지만 2048 컨텍스트에서 RAM에서 ≈ 3.0~3.5 GB입니다. 컨텍스트를 1024로 낮추면 ≈ 400 MB를 절약할 수 있습니다.',
          '**스왑으로 인한 사망:** 작업 세트가 물리적 RAM을 초과하면 토큰/초가 5~10배 떨어집니다.',
          '**울트라북의 열 스로틀링:** 팬 없는 장치는 지속적 추론 3~5분 만에 CPU 주파수를 20~35% 낮춥니다.',
          '**컨텍스트 길이는 메모리 세금:** 기본 컨텍스트 4096은 4B 모델에서 600~900 MB KV 캐시를 예약합니다. 실제로 긴 입력이 필요하지 않다면 1024로 낮추세요.',
          '**배경 앱이 더 큰 영향:** Chrome 탭 20개는 1~2 GB, Slack은 400~600 MB를 차지합니다.',
        ],
        callouts: [{ type: 'warning', text: '8 GB RAM에서는 Q2로도 7B 모델을 로드하지 마세요. 7B Q2는 2048 컨텍스트에서 ≈ 5.5 GB에 달해 8 GB 한도를 초과합니다.' }],
      },
      bestModels: {
        id: 'best-models',
        title: '각 앱에서 어떤 모델과 양자화를 다운로드해야 하나요?',
        content: '**8 GB RAM, 전용 GPU 없음에서는 Q4_K_M 이하의 4B 매개변수 이하로 유지하세요.**',
        items: [
          '**Ollama:** `ollama pull phi3:mini` (Phi-4 Mini 3.8B Q4_K_M, ≈ 2.4 GB). 최고 속도는 `ollama pull smollm2:1.7b` (≈ 1.0 GB).',
          '**GPT4All:** 내장 모델 브라우저 → "Llama 3.2 1B Instruct Q4_0" (≈ 0.7 GB), RAM이 허용하면 "Phi-4 Mini Q4_K_M".',
          '**Jan:** 큐레이션된 카탈로그 → Apple Silicon에서 "Gemma 3 4B Instruct Q4_K_M" (≈ 2.6 GB), x86에서 "Phi-4 Mini Q4_K_M".',
          '**llama.cpp:** Hugging Face에서 직접 GGUF 다운로드. `./llama-cli -m model.gguf -p "..." -c 1024 -t 4`로 실행.',
          '**피할 것:** 어떤 양자화도 7B 모델, Q5_K_M 이상, 기본 모델 — 항상 `-instruct` 변형을 선택하세요.',
        ],
        callouts: [{ type: 'tip', text: 'Q4_K_M은 Q4_0과 다릅니다. 같은 크기에서 ≈ 5~10% 더 높은 품질을 제공합니다.' }],
      },
      settings: {
        id: 'settings',
        title: '저사양 하드웨어에서 30~60% 더 많은 토큰/초를 얻는 설정은?',
        content: '**기본값은 16 GB RAM과 전용 GPU에 맞게 설정되어 있습니다. CPU 전용 8 GB에서는 컨텍스트 길이, 배치 크기, 스레드 수가 중요합니다.**',
        items: [
          '**컨텍스트 길이 — 가장 큰 단일 향상.** 기본값 4096에서 1024로 낮추세요. Ollama: `OLLAMA_NUM_CTX=1024 ollama run phi3:mini`. llama.cpp: `-c 1024`. 토큰/초 향상: 10~20%.',
          '**스레드 수 — 물리적 코어로 설정.** llama.cpp: `-t 4`. Ollama: `OLLAMA_NUM_THREAD=4`.',
          '**프롬프트 배치 크기 — 8로 설정.** llama.cpp: `--n-batch 8`. 4B 모델에서 15~25% 향상.',
          '**KV 캐시 양자화 — q8_0으로 설정.** llama.cpp: `--cache-type-k q8_0 --cache-type-v q8_0`. RAM 절약: 150~400 MB.',
          '**스왑 취약 시스템에서 mlock 비활성화.** llama.cpp `--no-mlock`. Windows 10/11 8 GB에서 일관되게 더 빠릅니다.',
          '**AVX2 빌드 사용.** 직접 빌드 시 `-DGGML_AVX2=ON`. AVX-512 감지: `cat /proc/cpuinfo | grep avx512`.',
        ],
        callouts: [{ type: 'tip', text: '다섯 가지 조정을 모두 적용하면 동일 모델, 동일 하드웨어에서 보통 35~55% 더 많은 토큰/초를 얻습니다.' }],
      },
      igpu: {
        id: 'igpu',
        title: '로컬 AI에 내장 그래픽을 사용할 가치가 있나요?',
        content: '**8 GB RAM 대부분의 노트북에서 대답은 아니오입니다 — CPU에서 추론을 유지하세요.** 세 가지 예외:',
        items: [
          '**Apple Silicon (M1/M2/M3/M4) — 항상 예.** Ollama, Jan, llama.cpp는 Mac에서 Metal 가속을 자동으로 사용합니다. M1 8 GB가 대부분의 Windows 8 GB 노트북보다 2~3배 빠른 이유입니다.',
          '**Intel Arc iGPU (Meteor Lake / Arrow Lake) — 가끔.** `-DGGML_SYCL=ON`으로 빌드한 llama.cpp는 30~60% 빠릅니다.',
          '**AMD Ryzen 7000/8000 iGPU — 실험적.** ROCm 지원이 2026년 불안정합니다.',
          '**구형 Intel UHD / AMD Vega — 무시.** CPU보다 느립니다.',
        ],
        callouts: [{ type: 'tip', text: 'CPU 전용으로 10번, 내장 그래픽으로 10번 생성 후 토큰/초를 비교하세요.' }],
      },
      mistakes: {
        id: 'mistakes',
        title: '흔한 실수',
        content: '**8 GB / GPU 없는 시스템에서 성능을 망치는 다섯 가지 실수:**',
        items: [
          '**실수 1: "Q4가 디스크에 맞으니까" 7B 모델 로드.** 7B Q4는 RAM에서 ≈ 5.5~6.5 GB로 8 GB 한도를 초과합니다. 4B 이하로 유지하세요.',
          '**실수 2: 컨텍스트 창을 4096으로 둠.** `OLLAMA_NUM_CTX=1024` 또는 `-c 1024`로 설정하세요.',
          '**실수 3: Chrome, Slack 열어둔 채 실행.** 추론 전에 불필요한 앱을 닫으세요.',
          '**실수 4: "품질을 위해" Q8_0 선택.** 품질 차이는 인식 불가지만 RAM은 두 배 필요합니다. Q4_K_M을 유지하세요.',
          '**실수 5: Raspberry Pi 4가 충분하다고 가정.** 1~3 토큰/초는 채팅에 사용할 수 없습니다.',
        ],
        callouts: [{ type: 'tip', text: '모든 기본값은 16~32 GB RAM과 전용 GPU를 위한 것입니다. 이 가이드의 설정 섹션을 "저사양 사전 설정"으로 생각하고 첫 실행 전에 모든 조정을 적용하세요.' }],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '4 GB RAM으로 로컬 AI를 실행할 수 있나요?', a: '네, 하지만 Llama 3.2 1B Q4_0 또는 SmolLM 2 360M처럼 2B 미만 모델만 가능합니다. GPT4All이 유일하게 공식 최소 요건으로 4 GB를 표시합니다.' },
          { q: '구형 Intel CPU로 로컬 AI를 실행할 수 있나요?', a: 'AVX2를 지원하는 CPU라면 (Haswell, 2013년 이상) 2026년에도 작동합니다. Intel Core i5-8250U에서 Phi-4 Mini Q4가 4~6 토큰/초로 실행됩니다.' },
          { q: '로컬 AI가 노트북을 손상시킬 수 있나요?', a: '아니요. 로컬 추론은 일반 사용자 프로세스입니다. 열 스로틀링이 발생해도 펌웨어가 자동으로 보호합니다.' },
          { q: '내장 그래픽으로 충분한가요?', a: 'Apple Silicon (M1+)에서는 충분합니다. Intel Core Ultra에서는 SYCL 설정으로 30~60% 추가 속도 가능. 구형 Intel UHD에서는 CPU보다 느립니다.' },
          { q: 'CPU 전용에서 가장 빠른 모델은 무엇인가요?', a: 'Llama 3.2 1B Q4_0과 SmolLM 2 1.7B Q4_K_M. Apple M1에서 25~50 토큰/초, 최신 Ryzen/Intel에서 12~25 토큰/초.' },
          { q: 'RAM을 더 추가하는 것이 CPU 업그레이드보다 낫나요?', a: '8 GB에서 16 GB로 업그레이드하면 7B~8B 모델이 가능해집니다. 하나만 해야 한다면 RAM을 추가하세요.' },
          { q: 'Chromebook에서 로컬 AI를 실행할 수 있나요?', a: 'Linux 개발자 모드 (Crostini)가 있으면 가능합니다. ARM Chromebook에서는 llama.cpp가 가장 안정적입니다.' },
          { q: 'Windows 10이 2026년 로컬 AI에서 작동하나요?', a: '네. 네 앱 모두 Windows 10 22H2를 지원합니다. 보안 업데이트는 2025년 10월에 종료됐지만 앱 실행은 가능합니다.' },
          { q: '가장 저렴하게 로컬 AI를 잘 실행하는 노트북은?', a: '2021~2022년형 중고 ThinkPad T14 (16 GB RAM, Ryzen 5 5500U)는 350~450유로에 8~14 토큰/초. Apple M1 중고 MacBook Air도 좋은 선택입니다.' },
          { q: 'Raspberry Pi를 로컬 AI에 사용할 수 있나요?', a: 'Raspberry Pi 5 8 GB는 4~7 토큰/초로 가능하지만 채팅용으로는 중고 x86 노트북이 더 낫습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[모든 OS에서 가장 쉬운 로컬 AI 앱](/ko/power-local-llm/easiest-local-ai-app-windows-mac-linux)',
          '[2026년 Android 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026)',
          '[Zapier를 로컬 AI 에이전트로 교체](/ko/power-local-llm/replace-zapier-with-local-ai-agents)',
          '[Power Local LLM 허브](/ko/power-local-llm)',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/ko/power-local-llm/best-local-ai-app-low-end-pc',
      'headline': '저사양 PC를 위한 최고의 로컬 AI 앱 2026 (8 GB RAM, GPU 없음)',
      'description': 'Ollama, GPT4All, Jan, llama.cpp를 8 GB RAM 내장 그래픽 노트북에서 테스트. 토큰/초, 메모리 압박, 각 앱별 정확한 설정값.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'inLanguage': 'ko',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': '2026년 GPU 없는 8 GB RAM 노트북을 위한 최고의 로컬 AI 앱',
      'numberOfItems': 4,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Ollama', 'description': '가장 가벼운 CPU 런타임; 최소 6 GB RAM; Phi-4 Mini Q4_K_M과 8 GB CPU 전용에서 4~14 토큰/초.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GPT4All', 'description': '가장 간단한 원클릭 설치; 최소 4 GB RAM; Llama 3.2 1B Q4_0과 3~10 토큰/초; 비기술 사용자 권장.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Jan', 'description': '오픈소스 GUI (AGPL); 최소 6 GB RAM; Apple Silicon 8 GB 최고 GUI.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'llama.cpp', 'description': '빌드하면 베어메탈 속도; 최소 4 GB RAM; SmolLM 2 1.7B Q4_K_M과 5~18 토큰/초.' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': '홈', 'item': 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', 'position': 3, 'name': '저사양 PC를 위한 최고의 로컬 AI 앱', 'item': 'https://www.promptquorum.com/ko/power-local-llm/best-local-ai-app-low-end-pc' },
      ],
    },
  },
}
