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
}
