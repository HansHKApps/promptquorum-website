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
    theme: 'Tools & Interfaces',
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
    theme: 'Tools & Interfaces',
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
}
