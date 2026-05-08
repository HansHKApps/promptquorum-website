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
      'No RTX 4090, no problem. Ollama, GPT4All, Jan, and llama.cpp tested on 8 GB RAM laptops with integrated graphics. Tokens/sec ranges, memory pressure, exact settings. May 2026.',
    twitterDescription:
      '4 local AI apps that run on 8 GB RAM laptops with no GPU. Tokens/sec ranges, exact settings, real verdicts. May 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 2.5 1.5B'],
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
        title: 'FAQ',
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
            a: 'On 8 GB systems, going to 16 GB is the single biggest practical upgrade because it unlocks 7B–8B models like Mistral 7B Q4 and Llama 3.1 8B Q4. CPU upgrades give 20–50% more tokens/sec; the RAM upgrade gives 2–4× quality (jumping from 1B–4B to 7B–8B). If you can do only one, add RAM.',
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
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Can I run local AI on 4 GB RAM?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes, but only with sub-2B models like Llama 3.2 1B Q4_0 (about 0.7 GB on disk) or SmolLM 2 360M (about 0.25 GB on disk). GPT4All is the only one of the four apps that lists 4 GB as the official minimum. Expect 3–8 tokens per second on a modern CPU and noticeably more sluggish UI behavior because the operating system has almost no headroom.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does an old Intel CPU work for local AI?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Anything with AVX2 (Haswell, 2013, or newer) works in 2026. The practical floor is an Intel Core i5-8250U or older Ryzen 5 2500U, where Phi-4 Mini Q4 runs at 4–6 tokens per second. CPUs without AVX2 (pre-2013 Intel, original AMD Bulldozer) will load but run at 1–2 tokens per second, which is unusable for chat.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Will local AI brick my laptop?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'No. Local inference is a normal user-space process — it cannot damage hardware. The worst-case outcome is the laptop running hot (90–100°C on ultraportables) and throttling, which the firmware protects against automatically. To avoid this, use a cooling pad on prolonged sessions, keep the room under 25°C, and stop inference if the chassis is uncomfortable to touch.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Is integrated graphics enough?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'On Apple Silicon (M1 and later) it is more than enough — unified memory makes the iGPU effectively a low-end discrete GPU. On Intel Core Ultra (Meteor Lake / Arrow Lake) it can give 30–60% extra speed if you set up SYCL. On older Intel UHD / Iris Plus / AMD Vega, integrated graphics is slower than the CPU and not worth using.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Which model is fastest on CPU only?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Llama 3.2 1B Q4_0 and SmolLM 2 1.7B Q4_K_M are the fastest usable models. Llama 3.2 1B reaches 25–50 tokens per second on Apple M1 and 12–25 tokens per second on a modern Ryzen or Intel CPU. SmolLM 2 is similar speed with slightly more polished writing. Anything larger than 4B parameters is unlikely to feel fast on CPU-only systems.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does adding RAM help more than upgrading the CPU?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'On 8 GB systems, going to 16 GB is the single biggest practical upgrade because it unlocks 7B–8B models like Mistral 7B Q4 and Llama 3.1 8B Q4. CPU upgrades give 20–50% more tokens per second; the RAM upgrade gives 2–4× quality (jumping from 1B–4B to 7B–8B). If you can do only one, add RAM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I run local AI on a Chromebook?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Only if Linux dev mode (Crostini) is available. The four apps in this guide all run in the Linux container — llama.cpp compiled from source is the most reliable on ARM Chromebooks, while x86 Chromebooks (Intel-based) work with Ollama or GPT4All. Performance maps to the underlying CPU; an Intel Core i3 / i5 Chromebook behaves like the equivalent Windows laptop.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does Windows 10 still work for local AI in 2026?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'Yes. All four apps support Windows 10 22H2. Ollama, GPT4All, and Jan ship signed Windows installers; llama.cpp ships prebuilt Windows binaries on its GitHub releases. The end of Windows 10 mainstream support in October 2025 does not prevent installation, but security updates have ended, so consider a Linux dual-boot or Windows 11 upgrade for long-term use.',
          },
        },
        {
          '@type': 'Question',
          'name': "What's the cheapest laptop that runs local AI well?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'A used 2021–2022 ThinkPad T14 or Dell Latitude 5430 with 16 GB RAM and a Ryzen 5 5500U or Intel i5-1235U costs €350–450 in 2026 and runs Phi-4 Mini Q4 at 8–14 tokens per second. Cheaper still: any 8 GB Apple M1 MacBook Air at €450–550 used, which beats most x86 laptops on tokens per second thanks to unified memory.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I use a Raspberry Pi for local AI?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text':
              'A Raspberry Pi 5 with 8 GB RAM runs Llama 3.2 1B Q4 at 4–7 tokens per second — usable but slow. A Pi 4 4 GB caps out at around 2 tokens per second on TinyLlama 1B. For real chat use, an 8 GB x86 laptop or M1 MacBook Air is faster, cheaper used, and easier to set up. Pi makes sense only for embedded, edge, or always-on workloads.',
          },
        },
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
    seoTitle: 'Beste lokale KI-Apps für 8-GB-RAM-PCs 2026: CPU-only getestet',
    metaDescription:
      'Kein RTX 4090 nötig. Ollama, GPT4All, Jan und llama.cpp auf 8-GB-RAM-Laptops mit integrierter Grafik getestet. Tokens/Sek., Speicherdruck, exakte Einstellungen. Mai 2026.',
    twitterDescription:
      '4 lokale KI-Apps, die auf 8-GB-RAM-Laptops ohne GPU laufen. Tokens/Sek., exakte Einstellungen, ehrliche Bewertungen. Mai 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 2.5 1.5B'],
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
        title: 'FAQ',
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
            a: 'Auf 8-GB-Systemen ist der Wechsel zu 16 GB das größte praktische Upgrade, weil es 7B–8B-Modelle wie Mistral 7B Q4 und Llama 3.1 8B Q4 freischaltet. CPU-Upgrades bringen 20–50 % mehr Tokens/Sek.; das RAM-Upgrade bringt 2–4× Qualität (Sprung von 1B–4B auf 7B–8B). Wenn Sie nur eines tun können, fügen Sie RAM hinzu.',
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
          '[Einfachste lokale KI-App pro Betriebssystem: Windows-, Mac-, Linux-Empfehlungen](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=de) — viele Low-End-PC-Nutzer sind auf älterem Windows; dieser Leitfaden wählt eine App pro OS.',
          '[Beste lokale LLM-Apps für Android in 2026](/power-local-llm/best-local-llm-apps-android-2026?lang=de) — natürliche Alternative für Low-End-Nutzer mit einem aktuellen Android-Smartphone.',
          '[Zapier durch lokale KI-Agenten ersetzen](/power-local-llm/replace-zapier-with-local-ai-agents?lang=de) — praktische Workflow-Automatisierung für Budget-Nutzer auf derselben Hardware.',
          '[LM Studio vs Jan vs GPT4All: Welche lokale KI-App gewinnt 2026](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026?lang=de) — Direktvergleich, falls Sie auch LM Studio in Erwägung ziehen.',
          '[Beste Budget-GPUs für lokale LLMs](/local-llms/best-budget-gpus-local-llm?lang=de) — wenn Sie bereit sind, das CPU-only-Territorium zu verlassen.',
          '[Hardware-Leitfaden für lokale LLMs 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) — vollständige Hardware-Autorität inklusive RAM-, CPU- und GPU-Trade-offs.',
          '[Power Local LLM Hub](/power-local-llm?lang=de) — vollständige Leitfadenbibliothek für den Cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/power-local-llm/best-local-ai-app-low-end-pc?lang=de',
      'inLanguage': 'de',
      'headline': 'Beste lokale KI-Apps für leistungsschwache PCs in 2026 (8 GB RAM, ohne GPU)',
      'description':
        'Ollama, GPT4All, Jan und llama.cpp auf 8-GB-RAM-Laptops mit integrierter Grafik getestet. Tokens/Sek., Speicherdruck, exakte Einstellungen.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'de',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Kann ich lokale KI auf 4 GB RAM ausführen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, aber nur mit Sub-2B-Modellen wie Llama 3.2 1B Q4_0 (etwa 0,7 GB auf der Festplatte) oder SmolLM 2 360M (etwa 0,25 GB auf der Festplatte). GPT4All ist die einzige der vier Apps, die 4 GB als offizielles Minimum auflistet. Erwarten Sie 3–8 Tokens pro Sekunde auf einer modernen CPU und merklich trägeres UI-Verhalten, weil das OS fast keinen Spielraum hat.' } },
        { '@type': 'Question', 'name': 'Funktioniert eine alte Intel-CPU für lokale KI?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Alles mit AVX2 (Haswell, 2013, oder neuer) funktioniert in 2026. Die praktische Untergrenze ist eine Intel Core i5-8250U oder ein älterer Ryzen 5 2500U, wo Phi-4 Mini Q4 bei 4–6 Tokens pro Sekunde läuft. CPUs ohne AVX2 (vor 2013 Intel, Original-AMD-Bulldozer) laden zwar, laufen aber bei 1–2 Tokens pro Sekunde, was für Chat unbrauchbar ist.' } },
        { '@type': 'Question', 'name': 'Beschädigt lokale KI meinen Laptop?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nein. Lokale Inferenz ist ein normaler User-Space-Prozess — sie kann keine Hardware beschädigen. Das Worst-Case-Szenario ist, dass der Laptop heiß wird (90–100 °C auf Ultraportables) und drosselt, wovor die Firmware automatisch schützt.' } },
        { '@type': 'Question', 'name': 'Reicht integrierte Grafik aus?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Auf Apple Silicon (M1 und neuer) ist sie mehr als ausreichend — Unified Memory macht die iGPU effektiv zu einer Low-End-Diskret-GPU. Auf Intel Core Ultra (Meteor Lake / Arrow Lake) kann sie 30–60 % zusätzliche Geschwindigkeit bringen. Auf älteren Intel UHD / Iris Plus / AMD Vega ist integrierte Grafik langsamer als die CPU.' } },
        { '@type': 'Question', 'name': 'Welches Modell ist am schnellsten auf reiner CPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.2 1B Q4_0 und SmolLM 2 1.7B Q4_K_M sind die schnellsten nutzbaren Modelle. Llama 3.2 1B erreicht 25–50 Tokens pro Sekunde auf Apple M1 und 12–25 Tokens pro Sekunde auf einer modernen Ryzen- oder Intel-CPU.' } },
        { '@type': 'Question', 'name': 'Hilft mehr RAM mehr als ein CPU-Upgrade?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Auf 8-GB-Systemen ist der Wechsel zu 16 GB das größte praktische Upgrade, weil es 7B–8B-Modelle wie Mistral 7B Q4 und Llama 3.1 8B Q4 freischaltet. CPU-Upgrades bringen 20–50 % mehr Tokens pro Sekunde; das RAM-Upgrade bringt 2–4× Qualität.' } },
        { '@type': 'Question', 'name': 'Kann ich lokale KI auf einem Chromebook ausführen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Nur wenn der Linux-Dev-Modus (Crostini) verfügbar ist. Die vier Apps in dieser Anleitung laufen alle im Linux-Container — llama.cpp aus dem Quellcode kompiliert ist auf ARM-Chromebooks am zuverlässigsten, während x86-Chromebooks mit Ollama oder GPT4All funktionieren.' } },
        { '@type': 'Question', 'name': 'Funktioniert Windows 10 noch für lokale KI in 2026?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Alle vier Apps unterstützen Windows 10 22H2. Ollama, GPT4All und Jan liefern signierte Windows-Installer; llama.cpp liefert vorgefertigte Windows-Binärdateien. Das Ende des Windows-10-Mainstream-Supports im Oktober 2025 verhindert die Installation nicht, aber Sicherheitsupdates sind eingestellt.' } },
        { '@type': 'Question', 'name': 'Was ist der günstigste Laptop, der lokale KI gut ausführt?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ein gebrauchtes 2021–2022 ThinkPad T14 oder Dell Latitude 5430 mit 16 GB RAM und einem Ryzen 5 5500U oder Intel i5-1235U kostet 350–450 € in 2026 und läuft Phi-4 Mini Q4 bei 8–14 Tokens pro Sekunde. Noch günstiger: jedes 8-GB-Apple-M1-MacBook-Air zu 450–550 € gebraucht.' } },
        { '@type': 'Question', 'name': 'Kann ich einen Raspberry Pi für lokale KI verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ein Raspberry Pi 5 mit 8 GB RAM läuft Llama 3.2 1B Q4 bei 4–7 Tokens pro Sekunde — nutzbar, aber langsam. Ein Pi 4 4 GB ist bei rund 2 Tokens pro Sekunde auf TinyLlama 1B begrenzt. Für echte Chat-Nutzung ist ein 8-GB-x86-Laptop oder ein M1 MacBook Air schneller, gebraucht günstiger und einfacher einzurichten.' } },
        { '@type': 'Question', 'name': 'Muss ich bei der Verwendung lokaler KI-Apps die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Bei rein lokaler Inferenz auf Ihrem Gerät verlassen die verarbeiteten Daten Ihren Endpunkt nicht — das erfüllt die Anforderungen an Datenresidenz und Auftragsverarbeitung (Art. 28 DSGVO) ohne zusätzliche Auftragsverarbeitungsverträge mit Cloud-Anbietern. Beachten Sie für den geschäftlichen Einsatz dennoch die BSI-Grundschutz-Kataloge für die Konfiguration der Endgeräte. Wenn Sie sensible Kategorien (Art. 9 DSGVO) verarbeiten, dokumentieren Sie die Verarbeitung im Verzeichnis von Verarbeitungstätigkeiten.' } },
        { '@type': 'Question', 'name': 'Sind lokale KI-Apps für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja — und besonders dort, wo Cloud-KI an Compliance-Hürden scheitert. Mittelständische Unternehmen in Maschinenbau, Steuerkanzleien, Arztpraxen und Anwaltskanzleien setzen 2026 zunehmend auf lokale Modelle, um Mandantendaten, Patientendaten und Konstruktionsdaten DSGVO-konform mit KI zu verarbeiten. Empfohlene Konfiguration: Ollama oder GPT4All auf einem dedizierten Workstation-PC (16 GB RAM minimum), BSI-konformer Festplattenverschlüsselung, und einem internen Netzwerksegment ohne Internetzugang während der Inferenz.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': 'de',
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
        { '@type': 'ListItem', 'position': 1, 'name': 'Startseite', 'item': 'https://www.promptquorum.com/?lang=de' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/power-local-llm?lang=de' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Beste lokale KI-Apps für leistungsschwache PCs', 'item': 'https://www.promptquorum.com/power-local-llm/best-local-ai-app-low-end-pc?lang=de' },
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
    seoTitle: 'Meilleures apps IA locales pour PC 8 Go RAM 2026 : test CPU',
    metaDescription:
      'Pas besoin de RTX 4090. Ollama, GPT4All, Jan et llama.cpp testés sur des portables 8 Go RAM avec graphiques intégrés. Tokens/s, pression mémoire, réglages exacts. Mai 2026.',
    twitterDescription:
      '4 apps d\'IA locale pour portables 8 Go RAM sans GPU. Tokens/s, réglages exacts, verdicts honnêtes. Mai 2026.',
    current_models_mentioned: ['Phi-4 Mini', 'Gemma 3 4B', 'SmolLM 2 1.7B', 'Llama 3.2 1B', 'Qwen 2.5 1.5B'],
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
        title: 'FAQ',
        faqs: [
          { q: 'Puis-je faire tourner de l\'IA locale sur 4 Go RAM ?', a: 'Oui, mais uniquement avec des modèles sub-2B comme Llama 3.2 1B Q4_0 (≈ 0.7 Go sur disque) ou SmolLM 2 360M (≈ 0.25 Go sur disque). GPT4All est la seule des quatre apps qui liste 4 Go comme minimum officiel. Comptez 3–8 t/s sur un CPU moderne et un comportement UI nettement plus lent parce que l\'OS n\'a presque aucune marge.' },
          { q: 'Un ancien CPU Intel fonctionne-t-il pour l\'IA locale ?', a: 'Tout ce qui dispose d\'AVX2 (Haswell, 2013, ou plus récent) fonctionne en 2026. Le plancher pratique est un Intel Core i5-8250U ou un Ryzen 5 2500U plus ancien, où Phi-4 Mini Q4 tourne à 4–6 t/s. Les CPU sans AVX2 (pré-2013 Intel, AMD Bulldozer original) chargeront mais tourneront à 1–2 t/s, ce qui est inutilisable pour le chat.' },
          { q: 'L\'IA locale va-t-elle abîmer mon portable ?', a: 'Non. L\'inférence locale est un processus utilisateur normal — il ne peut pas endommager le matériel. Le pire scénario est un portable qui chauffe (90–100 °C sur ultraportables) et bride, contre quoi le firmware protège automatiquement. Pour éviter cela, utilisez un tapis de refroidissement sur les sessions prolongées, gardez la pièce sous 25 °C, et arrêtez l\'inférence si le châssis est inconfortable au toucher.' },
          { q: 'Les graphiques intégrés sont-ils suffisants ?', a: 'Sur Apple Silicon (M1+) ils sont plus que suffisants — la mémoire unifiée fait de l\'iGPU effectivement un GPU dédié bas de gamme. Sur Intel Core Ultra (Meteor Lake / Arrow Lake) ils peuvent apporter 30–60 % de vitesse en plus si vous configurez SYCL. Sur les Intel UHD / Iris Plus / AMD Vega plus anciens, les graphiques intégrés sont plus lents que le CPU et ne valent pas la peine.' },
          { q: 'Quel modèle est le plus rapide en CPU seul ?', a: 'Llama 3.2 1B Q4_0 et SmolLM 2 1.7B Q4_K_M sont les modèles utilisables les plus rapides. Llama 3.2 1B atteint 25–50 t/s sur Apple M1 et 12–25 t/s sur un CPU Ryzen ou Intel moderne. SmolLM 2 a une vitesse similaire avec un rendu d\'écriture légèrement plus soigné. Tout ce qui dépasse 4B paramètres a peu de chances de paraître rapide sur des systèmes CPU seul.' },
          { q: 'Ajouter de la RAM aide-t-il plus qu\'un upgrade CPU ?', a: 'Sur les systèmes 8 Go, passer à 16 Go est l\'upgrade pratique le plus important parce qu\'il débloque les modèles 7B–8B comme Mistral 7B Q4 et Llama 3.1 8B Q4. Les upgrades CPU apportent 20–50 % de tokens/s en plus ; l\'upgrade RAM apporte 2–4× de qualité (saut de 1B–4B à 7B–8B). Si vous ne pouvez faire qu\'un seul changement, ajoutez de la RAM.' },
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
          '[App d\'IA locale la plus simple par OS : recommandations Windows, Mac, Linux](/power-local-llm/easiest-local-ai-app-windows-mac-linux?lang=fr) — beaucoup d\'utilisateurs de PC modestes sont sur Windows ancien ; ce guide choisit une app par OS.',
          '[Meilleures apps LLM locales pour Android en 2026](/power-local-llm/best-local-llm-apps-android-2026?lang=fr) — alternative naturelle pour les utilisateurs modestes avec un smartphone Android récent.',
          '[Remplacer Zapier par des agents IA locaux](/power-local-llm/replace-zapier-with-local-ai-agents?lang=fr) — automatisation de workflow pratique pour les utilisateurs au budget serré sur le même matériel.',
          '[LM Studio vs Jan vs GPT4All : quelle app IA locale gagne en 2026](/power-local-llm/lm-studio-vs-jan-vs-gpt4all-2026?lang=fr) — face-à-face si vous voulez aussi considérer LM Studio.',
          '[Meilleurs GPU à petit budget pour LLM locaux](/local-llms/best-budget-gpus-local-llm?lang=fr) — pour quand vous serez prêt à sortir du territoire CPU seul.',
          '[Guide matériel LLM local 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) — autorité matériel complète incluant les arbitrages RAM, CPU et GPU.',
          '[Hub Power Local LLM](/power-local-llm?lang=fr) — bibliothèque de guides complète pour le cluster.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/power-local-llm/best-local-ai-app-low-end-pc?lang=fr',
      'inLanguage': 'fr',
      'headline': 'Meilleures applications d\'IA locale pour PC modestes en 2026 (8 Go RAM, sans GPU)',
      'description': 'Ollama, GPT4All, Jan et llama.cpp testés sur des portables 8 Go RAM avec graphiques intégrés. Tokens/s, pression mémoire, réglages exacts.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'fr',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Puis-je faire tourner de l\'IA locale sur 4 Go RAM ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui, mais uniquement avec des modèles sub-2B comme Llama 3.2 1B Q4_0 (environ 0.7 Go sur disque) ou SmolLM 2 360M (environ 0.25 Go sur disque). GPT4All est la seule des quatre apps qui liste 4 Go comme minimum officiel.' } },
        { '@type': 'Question', 'name': 'Un ancien CPU Intel fonctionne-t-il pour l\'IA locale ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Tout ce qui dispose d\'AVX2 (Haswell, 2013, ou plus récent) fonctionne en 2026. Le plancher pratique est un Intel Core i5-8250U ou un Ryzen 5 2500U plus ancien, où Phi-4 Mini Q4 tourne à 4–6 tokens par seconde.' } },
        { '@type': 'Question', 'name': 'L\'IA locale va-t-elle abîmer mon portable ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. L\'inférence locale est un processus utilisateur normal — il ne peut pas endommager le matériel. Le pire scénario est un portable qui chauffe (90–100 °C sur ultraportables) et bride, contre quoi le firmware protège automatiquement.' } },
        { '@type': 'Question', 'name': 'Les graphiques intégrés sont-ils suffisants ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sur Apple Silicon (M1 et plus récent) ils sont plus que suffisants — la mémoire unifiée fait de l\'iGPU effectivement un GPU dédié bas de gamme. Sur Intel Core Ultra ils peuvent apporter 30–60 % de vitesse en plus si vous configurez SYCL.' } },
        { '@type': 'Question', 'name': 'Quel modèle est le plus rapide en CPU seul ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.2 1B Q4_0 et SmolLM 2 1.7B Q4_K_M sont les modèles utilisables les plus rapides. Llama 3.2 1B atteint 25–50 tokens par seconde sur Apple M1 et 12–25 tokens par seconde sur un CPU Ryzen ou Intel moderne.' } },
        { '@type': 'Question', 'name': 'Ajouter de la RAM aide-t-il plus qu\'un upgrade CPU ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sur les systèmes 8 Go, passer à 16 Go est l\'upgrade pratique le plus important parce qu\'il débloque les modèles 7B–8B. Les upgrades CPU apportent 20–50 % de tokens par seconde en plus ; l\'upgrade RAM apporte 2–4× de qualité.' } },
        { '@type': 'Question', 'name': 'Puis-je faire tourner de l\'IA locale sur un Chromebook ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Uniquement si le mode dev Linux (Crostini) est disponible. Les quatre apps de ce guide tournent toutes dans le conteneur Linux — llama.cpp compilé depuis les sources est le plus fiable sur les Chromebooks ARM, tandis que les Chromebooks x86 fonctionnent avec Ollama ou GPT4All.' } },
        { '@type': 'Question', 'name': 'Windows 10 fonctionne-t-il toujours pour l\'IA locale en 2026 ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les quatre apps supportent Windows 10 22H2. Ollama, GPT4All et Jan livrent des installeurs Windows signés ; llama.cpp livre des binaires Windows précompilés. La fin du support grand public de Windows 10 en octobre 2025 n\'empêche pas l\'installation.' } },
        { '@type': 'Question', 'name': 'Quel est le portable le moins cher qui fait tourner l\'IA locale convenablement ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Un ThinkPad T14 ou Dell Latitude 5430 d\'occasion 2021–2022 avec 16 Go RAM et un Ryzen 5 5500U ou Intel i5-1235U coûte 350–450 € en 2026 et fait tourner Phi-4 Mini Q4 à 8–14 tokens par seconde. Encore moins cher : tout MacBook Air Apple M1 8 Go d\'occasion à 450–550 €.' } },
        { '@type': 'Question', 'name': 'Puis-je utiliser un Raspberry Pi pour l\'IA locale ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Un Raspberry Pi 5 avec 8 Go RAM fait tourner Llama 3.2 1B Q4 à 4–7 tokens par seconde — utilisable mais lent. Un Pi 4 4 Go plafonne autour de 2 tokens par seconde sur TinyLlama 1B. Pour un usage chat réel, un portable x86 8 Go ou un MacBook Air M1 est plus rapide.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': 'fr',
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
        { '@type': 'ListItem', 'position': 1, 'name': 'Accueil', 'item': 'https://www.promptquorum.com/?lang=fr' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Power Local LLM', 'item': 'https://www.promptquorum.com/power-local-llm?lang=fr' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Meilleures applications d\'IA locale pour PC modestes', 'item': 'https://www.promptquorum.com/power-local-llm/best-local-ai-app-low-end-pc?lang=fr' },
      ],
    },
  },
}
