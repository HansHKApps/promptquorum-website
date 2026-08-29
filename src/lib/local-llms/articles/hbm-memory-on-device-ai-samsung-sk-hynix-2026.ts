// Slug: hbm-memory-on-device-ai-samsung-sk-hynix-2026
import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-27',
    last_full_refresh: '2026-08-28',
    current_hardware_mentioned: ['LPDDR5X', 'LPDDR5X-PIM', 'HBM3E', 'HBM4', 'HBM4E', 'Exynos 2600', 'Nvidia H100/H200/B200'],
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-en.webp',
    title: 'On-Device AI & Memory: Why HBM Memory Drives Local AI Speed (2026)',
    seoTitle: 'HBM vs LPDDR5X Memory: On-Device AI Bandwidth Explained',
    intro: 'Memory bandwidth, not compute TOPS, is the bottleneck for AI inference. The Galaxy S26 (Exynos 2600) has LPDDR5X at 85.6 GB/s; data centers use HBM3E at 1.229 TB/s—a 14x difference. This gap explains why 7B-parameter models run on phones at 8–15 tokens/sec but data-center GPUs handle 100+ tokens/sec. Samsung and SK Hynix are the key players: SK Hynix holds roughly half to two-thirds of the HBM market depending on the quarter, while Samsung shipped the industry\'s first 12-layer HBM4E samples (3.6 TB/s per stack) in May 2026 and, in August 2026, demonstrated a validated LPDDR5X-PIM (Processing-In-Memory) chip that triples on-device inference throughput. This guide explains the memory bottleneck, the role of Samsung and SK Hynix, and what it means for on-device AI in 2026 and beyond.',
    metaDescription: 'HBM vs LPDDR5X: Memory bandwidth is the AI bottleneck. SK Hynix HBM4 vs Samsung LPDDR5X-PIM (3x faster, validated Aug 2026). Why on-device AI is slow and data-center AI is fast.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '11 min read',
    educationalLevel: 'Advanced',
    audience: 'AI engineers, hardware designers, anyone curious about why local AI is slower than cloud AI',
    primaryTerm: 'HBM memory on-device AI',
    targetKeywords: ['hbm memory', 'hbm4 bandwidth', 'lpddr5x bandwidth', 'lpddr5x-pim', 'memory bandwidth bottleneck', 'on device ai speed', 'sk hynix', 'samsung hbm'],
    leadAnswerBlock: '**The decode phase of LLM inference is bandwidth-bound, not compute-bound: tokens/sec ≈ memory_bandwidth / model_size_in_bytes. Galaxy S26 LPDDR5X (85.6 GB/s) limits a 7B model to ~24 tokens/sec max. Data-center H100 GPU HBM3E (1.229 TB/s) hits 100+ tokens/sec — HBM4, now in mass production (SK Hynix 16-layer, >2 TB/s; Samsung 12-layer HBM4E samples, 3.6 TB/s), pushes that further. SK Hynix still leads HBM shipments (roughly 50–62% share depending on the quarter in 2026); Samsung answered on the phone side instead: at Hot Chips 2026 (August 25, 2026) it showed a pin-compatible LPDDR5X-PIM chip that ran Llama-3.1-8B at 81.3 tokens/sec versus 27.0 tokens/sec on standard LPDDR5X — a 3.01x real, measured gain, not a lab projection. This memory bottleneck is still fundamental to why local AI trails cloud AI, but the gap on phones just got meaningfully smaller than it was a quarter ago.',
    quickAnswerTop: {
      en: {
        question: 'Why is on-device AI so much slower than cloud AI?',
        answer: 'Memory bandwidth. Decode phase is bandwidth-bound (not compute-bound). On-device (LPDDR5X 85.6 GB/s) vs data-center (HBM3E 1.229 TB/s) = 14x gap. That explains why Galaxy S26 does ~15 tokens/sec vs data-center GPU at 100+ tokens/sec. You cannot fit HBM into a phone, but Samsung\'s LPDDR5X-PIM (validated August 2026) narrows the gap by computing inside the memory chip instead of trying to match HBM bandwidth.',
        bullets: [
          'tokens/sec = memory_bandwidth / model_size_in_bytes (simplified, true for decode phase)',
          '7B model at FP16 (14 GB): LPDDR5X 85.6 GB/s ÷ 14 GB = ~6 tokens/sec (theory); Quantized Q4 (3.5 GB) = ~24 tokens/sec',
          'Data center H100 HBM3E (1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 tokens/sec (theory)',
          'SK Hynix leads HBM shipments (roughly 50–62% share across 2026 quarters), supplying Nvidia H100, H200, B200 GPUs',
          'Samsung shipped 12-layer HBM4E samples at 3.6 TB/s per stack in May 2026, and demonstrated LPDDR5X-PIM (compute inside memory) running Llama-3.1-8B at 81.3 tokens/sec vs 27.0 tokens/sec on standard LPDDR5X — a 3.01x measured gain, shown at Hot Chips 2026 (Aug 25, 2026)',
          'HBM4 (>2 TB/s) is now in mass production: SK Hynix targeting its 16-layer variant for Q3 2026, Samsung already sampling 12-layer HBM4E; both remain irrelevant for phones—cost + power prohibitive'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Memory Bandwidth Determines AI Speed', anchor: '#why-memory-matters' },
      { label: 'Memory Bandwidth Comparison: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: 'Samsung and SK Hynix: Who Makes What', anchor: '#samsung-sk-hynix-roles' },
      { label: 'On-Device AI Limits on the Galaxy S26', anchor: '#on-device-limits' },
      { label: 'Data Center vs. Phone: The 14x Bandwidth Gap', anchor: '#datacenter-vs-phone' },
      { label: 'Memory Roadmap: HBM4 and LPDDR6', anchor: '#future-roadmap' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Memory bandwidth, not TOPS, is the bottleneck for AI inference decode phase. Formula: tokens/sec ≈ memory_bandwidth / model_size_in_bytes. A 7B model in FP16 (14 GB) at LPDDR5X 85.6 GB/s = ~6 tokens/sec. Same model quantized Q4 (3.5 GB) = ~24 tokens/sec. Data-center H100 HBM3E (1.229 TB/s) = ~88 tokens/sec. The gap is 14x, not because of compute—both have fast FLOPS—but because of how fast you can feed data to the compute units.',
          'SK Hynix leads HBM shipments (roughly 50–62% share depending on the 2026 quarter measured) and supplies Nvidia H100, H200, B200 GPUs. HBM4 (>2 TB/s) is now in mass production, not just a roadmap item: SK Hynix is targeting its 16-layer, 48 GB HBM4 variant for Q3 2026, while Samsung shipped the industry\'s first 12-layer HBM4E samples at 3.6 TB/s per stack in May 2026, ahead of SK Hynix on that specific spec.',
          'Samsung validated LPDDR5X-PIM (Processing-In-Memory) as real, tested silicon at Hot Chips 2026 (August 25, 2026) — not a lab concept. Running Llama-3.1-8B on an edge AI accelerator SoC, it hit 81.3 tokens/sec versus 27.0 tokens/sec on standard LPDDR5X: a measured 3.01x inference speedup with up to 8x the internal bandwidth in PIM mode. The chip is pin-compatible with standard LPDDR5X (same 561-ball package), so it is a drop-in upgrade, not a redesign.',
          'On-device AI will still be slower than cloud AI for large models — you cannot fit HBM into a phone — but the gap on phones just narrowed. LPDDR5X-PIM does not match HBM bandwidth; it reduces data movement instead, which is why the throughput gain (3x) is smaller than the raw bandwidth gap (14x) but still meaningful for real workloads.',
          'Exynos 2600 (Galaxy S26) still ships with standard LPDDR5X, achieving ~8–15 tokens/sec realistic for a quantized 7B model. LPDDR5X-PIM is validated but not yet in a shipping phone SoC — expect it to appear in edge AI accelerators first, then phones in later hardware cycles.',
          'The memory-bandwidth bottleneck still explains why fine-tuning or distillation doesn\'t help: you still have to load every parameter into memory on every forward pass. Smaller models help (3B, 1B), and quantization remains the baseline solution for phones — PIM is an additional lever, not a replacement for it.'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: 'Why Memory Bandwidth Determines AI Speed',
        content: [
          'During the decode phase of LLM inference, the GPU/NPU must load the entire model into memory, perform one forward pass per token, and write the output. The bottleneck: how fast can you feed parameters to the compute units? This is memory bandwidth, not compute TOPS.',
          'Simplified formula: tokens/sec = memory_bandwidth / (model_size_in_bytes × bytes_per_precision). For FP16 (2 bytes per parameter), a 7B model = 14 GB. At LPDDR5X 85.6 GB/s: 85.6 GB/s ÷ 14 GB = ~6 tokens/sec theoretical maximum. In practice, 3–5 tokens/sec due to compute and cache overhead.',
          'Quantization changes the equation dramatically. Q4 (4-bit, 0.5 bytes per parameter) shrinks a 7B model to 3.5 GB. 85.6 GB/s ÷ 3.5 GB = ~24 tokens/sec theoretical. Real-world ~8–15 tokens/sec, a 3–4x improvement.',
          'Data-center H100 with HBM3E (1.229 TB/s) can sustain 100+ tokens/sec for the same model, because HBM is 14x faster. This is why frontier models (70B, 405B) run only in data centers—you need HBM bandwidth.',
          'Inference is different from training. Training is compute-bound (you do 1000+ passes to update weights). Inference (especially once a model is prompt-cached) is a single forward pass, pure memory-bandwidth bound. This is why inference on phones is so much slower than on servers—you cannot engineer your way out of the bandwidth gap.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LLM decode is memory-bandwidth-bound: tokens/sec = bandwidth / model_size. On-device 85.6 GB/s vs data-center 1.229 TB/s = 14x gap.' },
          { type: 'plain-terms', text: 'Think of a factory assembly line: compute is the workers, memory is the supply chain. Workers are fast, but if supplies arrive slowly, they get bottlenecked. More workers (more FLOPS) doesn\'t help if supplies (data) arrive at the same rate. Phones lack "fast supply chains" (HBM).' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: 'Memory Bandwidth Comparison: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-en.svg',
        imageCaption: 'Memory bandwidth by type: LPDDR5X 85.6 GB/s (phones), LPDDR5X-PIM (validated Aug 2026, 3.01x tokens/sec vs standard LPDDR5X) vs HBM2E 460 GB/s, HBM3 819 GB/s, HBM3E 1.229 TB/s (Nvidia H100/H200/B200), and HBM4/HBM4E now shipping at 2–3.6 TB/s per stack. SK Hynix leads HBM shipments (~50–62% share across 2026 quarters).',
        columns: ['Memory Type', 'Bandwidth', 'Used In', 'Tokens/sec (7B FP16)', 'Tokens/sec (7B Q4)'],
        rows: [
          {
            'Memory Type': 'LPDDR5X 10.7 Gbps',
            'Bandwidth': '85.6 GB/s (x64 bus)',
            'Used In': 'Galaxy S26, Snapdragon 8 Elite Gen 5, most phones',
            'Tokens/sec (7B FP16)': '~6 tokens/sec (theory); ~3–5 realistic',
            'Tokens/sec (7B Q4)': '~24 tokens/sec (theory); ~8–15 realistic'
          },
          {
            'Memory Type': 'HBM2E',
            'Bandwidth': '~460 GB/s per stack',
            'Used In': 'Older GPUs (P100, V100 pre-2020)',
            'Tokens/sec (7B FP16)': '~33 tokens/sec (theory)',
            'Tokens/sec (7B Q4)': '~131 tokens/sec (theory)'
          },
          {
            'Memory Type': 'HBM3 19.2 Gbps',
            'Bandwidth': '~819 GB/s per stack',
            'Used In': 'Nvidia A100, 80GB variant',
            'Tokens/sec (7B FP16)': '~59 tokens/sec (theory)',
            'Tokens/sec (7B Q4)': '~234 tokens/sec (theory)'
          },
          {
            'Memory Type': 'HBM3E 21.4 Gbps',
            'Bandwidth': '1.18–1.229 TB/s per stack',
            'Used In': 'Nvidia H100, H200, B200 (2+ stacks common)',
            'Tokens/sec (7B FP16)': '~88 tokens/sec (theory); ~60–80 realistic',
            'Tokens/sec (7B Q4)': '~352 tokens/sec (theory); ~200+ realistic'
          },
          {
            'Memory Type': 'HBM4 (SK Hynix, 16-layer)',
            'Bandwidth': '>2 TB/s per stack, 48 GB',
            'Used In': 'Nvidia next-gen GPUs (mass prod. Q3 2026)',
            'Tokens/sec (7B FP16)': '~143 tokens/sec (theory)',
            'Tokens/sec (7B Q4)': '~571 tokens/sec (theory)'
          },
          {
            'Memory Type': 'HBM4E (Samsung, 12-layer)',
            'Bandwidth': '3.6 TB/s per stack',
            'Used In': 'Samples shipped May 2026 (ahead of SK Hynix)',
            'Tokens/sec (7B FP16)': '~257 tokens/sec (theory)',
            'Tokens/sec (7B Q4)': '~1,029 tokens/sec (theory)'
          },
          {
            'Memory Type': 'LPDDR5X-PIM (Samsung, validated)',
            'Bandwidth': '85.6 GB/s + up to 8x internal (PIM mode)',
            'Used In': 'Shown at Hot Chips 2026 / edge AI SoC, pin-compatible',
            'Tokens/sec (7B FP16)': 'Not measured for 7B FP16',
            'Tokens/sec (7B Q4)': 'Llama-3.1-8B: 81.3 vs 27.0 tok/sec (3.01x)'
          },
          {
            'Memory Type': 'LPDDR6 (announced)',
            'Bandwidth': '~200+ GB/s (estimated)',
            'Used In': 'Phones (2027–2028)',
            'Tokens/sec (7B FP16)': '~14 tokens/sec (theory)',
            'Tokens/sec (7B Q4)': '~57 tokens/sec (theory)'
          }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: 'Samsung and SK Hynix: Who Makes What',
        content: [
          '**SK Hynix — HBM Volume Leader**: SK leads HBM shipments, with reported share ranging roughly 50–62% across different 2026 quarters and measurement methodologies (revenue vs. bit-share vs. quarter). SK supplies HBM3E to Nvidia for H100, H200, and B200 GPUs, and is targeting mass production of its 16-layer HBM4 (48 GB, >2 TB/s) for Q3 2026. HBM revenue remains critical for SK\'s data-center division.',
          '**Samsung — HBM4E Speed Lead, LPDDR5X-PIM Validated**: Samsung shipped the industry\'s first 12-layer HBM4E samples on May 29, 2026, at 3.6 TB/s per stack — ahead of SK Hynix\'s HBM4 spec on that metric, though SK still ships more total HBM volume. On the phone side, Samsung presented LPDDR5X-PIM at Hot Chips 2026 (August 25, 2026) as validated, tested silicon: an edge AI accelerator SoC ran Llama-3.1-8B at 81.3 tokens/sec versus 27.0 tokens/sec on standard LPDDR5X (3.01x), with up to 8x internal bandwidth in PIM mode. The chip uses the same 561-ball package as standard LPDDR5X, so it is a drop-in replacement, not a new form factor.',
          '**Competitive Dynamics**: Samsung continues to sample HBM (HBM3E, now HBM4E) but has historically trailed SK on yield and total HBM volume. Samsung\'s positioning for LPDDR5X-PIM is explicit: a complement to HBM, not a replacement — targeting smartphones, AI PCs, and edge accelerators where HBM\'s cost, power draw, and packaging complexity are prohibitive, rather than trying to match HBM bandwidth directly.',
          '**Both companies supply Nvidia**: SK Hynix and Samsung both provide HBM for Nvidia GPU VRAM; standard DRAM (LPDDR/DDR) covers host/CPU memory. Neither supplies the compute (Nvidia designs the GPU cores). The ecosystem stays specialized: design, memory, compute are separate.',
          '**Timeline**: HBM4 is in mass production now (SK Hynix targeting Q3 2026 for its 16-layer part; Samsung already sampling 12-layer HBM4E). LPDDR5X-PIM is validated silicon as of August 2026, ahead of the 2027-2028 production estimate given at last refresh — expect it in edge AI accelerators before phones. LPDDR6/LPDDR6X-PIM is Samsung\'s next target, with an initial JEDEC spec hoped for later in 2026.'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'On-Device AI Limits on the Galaxy S26',
        content: [
          'The Galaxy S26 Exynos 2600 with LPDDR5X 85.6 GB/s defines the practical ceiling for on-device LLM inference. A quantized 7B model at Q4 reaches ~8–15 tokens/sec realistic performance. This is suitable for latency-sensitive tasks (autocomplete, real-time transcription, simple tasks) but impractical for long conversations.',
          'Model size limits: A 7B model is practical (3–4 hour latency per 100-token response). A 13B model at Q4 (~6.5 GB) hits 85.6 GB/s ÷ 6.5 GB = ~13 tokens/sec, barely an improvement. A 70B model at Q4 (~35 GB) hits 85.6 GB/s ÷ 35 GB = ~2 tokens/sec—unusable.',
          'Quantization is essential: FP16 (2 bytes/param) is impractical. Q4 (0.5 bytes/param) is the sweet spot—4x smaller models with acceptable quality loss. Q3 (3-bit) saves more space but loses quality; Q5 loses less quality but gains little bandwidth improvement.',
          'Speed vs quality tradeoff: 7B Q4 is ~8–15 tokens/sec (acceptable for some use cases). 3B Q4 is ~24–36 tokens/sec (excellent for simple tasks). 1B Q4 is ~60+ tokens/sec (real-time, Pixel 3 era performance on modern hardware).',
          'Practical use cases: autocomplete, real-time code suggestion, on-device transcription, local summarization. Not practical: long conversations, complex reasoning, multi-turn dialogue without caching.',
          'The bottleneck is bandwidth, not compute or weight size. Even if you reduce model parameters to 0, the memory still needs to transfer them, and the bandwidth is fixed. This is why on-device AI is architecturally limited—you cannot engineer yourself out of 85.6 GB/s on a phone form factor.'
        ],
        items: [
          'Use LPDDR5X 85.6 GB/s bandwidth to estimate max tokens/sec: divide by model size in GB',
          '7B Q4 (3.5 GB): ~24 tokens/sec theory; ~8–15 realistic (practical)',
          '13B Q4 (6.5 GB): ~13 tokens/sec theory; ~4–8 realistic (slow)',
          '1B Q4 (~500 MB): ~171 tokens/sec theory; ~50–100 realistic (fast)',
          'Quantization is mandatory: Q4 is the baseline for usable on-device models',
          'Trade off model size against latency; no model size fits the "good enough" window below 5 tokens/sec'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: 'Data Center vs. Phone: The 14x Bandwidth Gap',
        image: '/images/hbm-datacenter-vs-phone-gap-en.svg',
        imageCaption: 'Phone (LPDDR5X 85.6 GB/s) vs data-center GPU (HBM3E 1.229 TB/s) for the same 7B Q4 model (3.5 GB): ~8-15 tok/s real-world on-device vs ~200+ tok/s in the data center, a 14x bandwidth gap.',
        content: [
          'A Nvidia H100 GPU with HBM3E (1.229 TB/s) is 14x faster at inference throughput than a Galaxy S26 (LPDDR5X 85.6 GB/s). This gap is not due to compute FLOPS (both are fast), but pure memory bandwidth. The H100 can do 100+ tokens/sec; the S26 does 8–15 tokens/sec for the same 7B Q4 model.',
          'Why the gap exists: HBM is physically different. LPDDR5X is a thin film sitting next to the CPU (power-efficient for phones). HBM is a stack of memory chips directly bonded to the GPU using through-silicon vias (TSVs), creating massive bandwidth. HBM stacks are 2+ inches tall; impossible to fit in a phone.',
          'Why it can\'t be closed: Phones are thermally and power-constrained. HBM consumes significant power (~100+ W for a full stack). LPDDR5X is ~5–10 W. Phones run on batteries; data centers have unlimited power/cooling. You cannot physically fit HBM bandwidth into a phone without destroying battery life.',
          'Consequence: On-device AI will always be slower than cloud AI for large models. This is not a technology gap that will close—it\'s a physical constraint (power, thermal, form factor). Smaller models, aggressive quantization, and clever caching are the solutions, not hoping for better memory.',
          'The flip side: on-device is private, offline-capable, and zero-latency for privacy-sensitive tasks. The 14x speed penalty is the price of privacy. Data-center AI trades speed for privacy loss.',
          'Update: Samsung validated LPDDR5X-PIM at Hot Chips 2026 (August 25, 2026) — 3.01x measured throughput (27.0 → 81.3 tokens/sec on Llama-3.1-8B) on a pin-compatible chip, well ahead of the 2027-2028 timeline this page previously cited. LPDDR6 (still 2027-2028) targets ~200 GB/s, ~6x slower than HBM3E. Together, PIM now and LPDDR6 later meaningfully narrow the phone-vs-data-center gap without closing it — the 14x raw bandwidth gap becomes closer to 4-6x in practice once PIM ships in phone SoCs.'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: 'Memory Roadmap: HBM4 and LPDDR6',
        content: [
          '**HBM4 / HBM4E (SK Hynix + Samsung, now in mass production)**: >2 TB/s per stack for SK Hynix\'s 16-layer HBM4 (targeting Q3 2026 mass production); 3.6 TB/s per stack for Samsung\'s 12-layer HBM4E, already sampling since May 2026. Arriving first in Nvidia next-gen GPUs (post-B200). Still irrelevant for phones — it will push data-center inference even faster while phones stay bandwidth-starved.',
          '**LPDDR5X-PIM (Samsung, validated August 2026)**: Processing-In-Memory embeds compute inside the DRAM die. Instead of only loading every model weight from memory, the chip computes some operations (matrix multiplies) inside memory itself, eliminating round-trips. This moved from "developing" to "demonstrated, tested silicon" at Hot Chips 2026: 3.01x measured inference speedup (27.0 → 81.3 tokens/sec on Llama-3.1-8B) with up to 8x internal bandwidth in PIM mode, on a pin-compatible chip. It will not match HBM bandwidth, but it is real and ahead of the prior 2027-2028 production estimate.',
          '**LPDDR6 / LPDDR6X-PIM (2027-2028)**: ~200+ GB/s estimated for plain LPDDR6 (x64 bus, 12.8 Gbps) — roughly 2.3x LPDDR5X bandwidth. For a 7B Q4 model: 200 GB/s ÷ 3.5 GB ≈ 57 tokens/sec theoretical (up from 24), ~20–35 tokens/sec realistic. Samsung is already looking past LPDDR5X-PIM to LPDDR6X-PIM, and hopes for an initial JEDEC specification later in 2026. LPDDR6 itself is expected in the Galaxy S27/S28 era.',
          '**Reality**: Even with LPDDR5X-PIM shipping and LPDDR6 on the roadmap, phones will still be several times slower than data centers for inference — Samsung itself positions PIM as a complement to HBM for cost/power-constrained devices, not a bandwidth-parity solution. This is a physical-design gap (form factor, power, heat), not one that a single generation of memory closes.',
          '**For on-device AI, late 2026**: Exynos 2600 + standard LPDDR5X is still the shipping baseline for Galaxy S26. LPDDR5X-PIM is validated but has not yet appeared in a shipping phone SoC — expect edge AI accelerators to get it first. Track the next Exynos/Snapdragon generation for whether PIM reaches phones before LPDDR6 does.'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is LPDDR5X memory bandwidth?',
            a: "LPDDR5X at 10.7 Gbps on a x64 bus delivers 85.6 GB/s — the memory speed used in the Galaxy S26, Snapdragon 8 Elite Gen 5, and most 2026 flagship phones. That's roughly 5.4x to 14x slower than data-center HBM (HBM2E at 460 GB/s up to HBM4/HBM4E at 2-3.6 TB/s per stack), which is why on-device AI inference is much slower than data-center inference for the same model size. Samsung's LPDDR5X-PIM variant, validated August 2026, closes part of that gap — it ran Llama-3.1-8B at 3.01x the tokens/sec of standard LPDDR5X in Samsung's own Hot Chips 2026 demonstration.",
          },
          {
            q: 'Why is memory bandwidth the bottleneck for AI inference?',
            a: 'Because the decode phase (generating each token) requires loading the entire model into memory for one forward pass. The compute units finish quickly, but memory can\'t feed them data fast enough. FLOPS are not the bottleneck; data delivery is.'
          },
          {
            q: 'What\'s the tokens/sec formula for on-device AI?',
            a: 'Simplified: tokens/sec = memory_bandwidth / (model_size × bytes_per_precision). For a 7B FP16 model (14 GB) at 85.6 GB/s: 85.6 ÷ 14 = ~6 tokens/sec. Quantized Q4 (3.5 GB): 85.6 ÷ 3.5 = ~24 tokens/sec. Real-world ~40–60% of theoretical.'
          },
          {
            q: 'Does SK Hynix dominate HBM?',
            a: 'SK Hynix leads HBM shipments, with reported share ranging roughly 50–62% depending on the 2026 quarter and measurement method. SK supplies Nvidia H100, H200, B200 GPUs and is targeting mass production of its 16-layer HBM4 for Q3 2026. Samsung has closed some of the gap: it shipped 12-layer HBM4E samples at 3.6 TB/s per stack in May 2026, ahead of SK Hynix on that specific spec, though SK still ships more total HBM volume.'
          },
          {
            q: 'Can Samsung catch up to SK Hynix in HBM?',
            a: 'Samsung is closer than it was: its 12-layer HBM4E samples (3.6 TB/s, shipped May 2026) beat SK Hynix\'s HBM4 bandwidth spec on paper, though SK still leads on total shipped volume and yield track record. For phones, Samsung isn\'t trying to match HBM bandwidth at all — it validated LPDDR5X-PIM (computing inside memory) instead, shown at Hot Chips 2026.'
          },
          {
            q: 'When does LPDDR6 ship?',
            a: 'Still estimated 2027-2028 in the Galaxy S27/S28 era, unchanged since last refresh. ~200+ GB/s (2.3x LPDDR5X). It will roughly double on-device token throughput but stays 3–6x slower than HBM3E data-center GPUs. LPDDR5X-PIM, by contrast, is already validated silicon as of August 2026 — it will likely reach edge devices before LPDDR6 does.'
          },
          {
            q: 'Why can\'t you put HBM in a phone?',
            a: 'Physical constraints: HBM stacks are 2+ inches tall (form factor). HBM power consumption (~100+ W) kills battery life. LPDDR5X is thin-film, 5–10 W. Phones need to fit pockets and last 24 hours. This has not changed with HBM4/HBM4E — the new generations are faster but not smaller or lower-power.'
          },
          {
            q: 'Will LPDDR5X-PIM close the gap with HBM?',
            a: 'Partially, and it is now measured, not projected. Samsung showed a real chip at Hot Chips 2026 (Aug 25, 2026) running Llama-3.1-8B at 81.3 tokens/sec vs. 27.0 tokens/sec on standard LPDDR5X — a 3.01x gain, with up to 8x internal bandwidth in PIM mode. That still falls well short of the 14x raw bandwidth gap to HBM3E, but it is a bigger real-world improvement than the "~50%" estimate this page previously cited, and the chip is pin-compatible so it can be adopted without a system redesign.'
          },
          {
            q: 'Is compute FLOPS relevant for on-device AI?',
            a: 'Not as much as people think. Decode is memory-bound, not compute-bound. A slower compute unit with faster memory beats a faster compute unit with slower memory. This is why Exynos 2600 (2nm) > Snapdragon 8 Elite Gen 5 (3nm) for inference: Exynos bandwidth and cache are better tuned.'
          },
          {
            q: 'Can I run a 70B model on Galaxy S26?',
            a: 'Technically yes; practically no. 70B Q4 (~35 GB) gives 85.6 GB/s ÷ 35 GB = ~2 tokens/sec. That\'s 1 token per second—unusable for any interactive task. Stick to 7B or smaller.'
          },
          {
            q: 'What\'s the best model size for on-device?',
            a: '7B Q4 is the Goldilocks zone: 8–15 tokens/sec, acceptable quality. 3B Q4 is faster (24–36 tokens/sec) but lower quality. 1B Q4 is ultra-fast (50+ tokens/sec) but very limited. 13B+ is too slow.'
          },
          {
            q: 'Will LPDDR5X-PIM be in the Galaxy S27?',
            a: 'Unclear, but more likely than previously assumed. Samsung showed LPDDR5X-PIM at Hot Chips 2026 in August 2026 as a validated, tested chip (3.01x throughput gain), pin-compatible with standard LPDDR5X. It is not yet built into any shipping phone SoC — edge AI accelerators are likely to get it first, and the Galaxy S27 (2027) could follow.'
          },
          {
            q: 'Can memory bandwidth for AI inference be increased?',
            a: 'Yes, but within limits. LPDDR6 (~200 GB/s, 2027-2028) and the now-validated LPDDR5X-PIM (3.01x measured throughput gain, August 2026) both improve on-device inference noticeably. But physical constraints prevent HBM-class bandwidth in phones. The 14x raw-bandwidth gap narrows to roughly 4-6x in practice rather than disappearing.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Running Local AI on the Galaxy S26: On-Device AI Explained (2026)](/local-llms/galaxy-s26-local-ai-on-device-2026) -- on-device AI on the Galaxy S26',
          '[MRAM and In-Memory Computing: The Next Leap for On-Device AI?](/local-llms/mram-in-memory-computing-local-ai-2026) -- MRAM and in-memory computing for AI',
          '[How Much VRAM Do You Need for Local LLMs?](/local-llms/how-much-vram-local-llm) -- how much VRAM you need for local LLMs',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- local LLM hardware guide 2026',
          '[Mobile Local LLMs 2026: iPhone 16 Pro, iPad M4 & Snapdragon X](/local-llms/mobile-local-llms) -- local LLMs on mobile',
        ],
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'On-Device AI & Memory: Why HBM Memory Drives Local AI Speed (2026)',
      'description': 'HBM vs LPDDR5X: Memory bandwidth is the AI bottleneck. SK Hynix HBM4 vs Samsung LPDDR5X-PIM (3x faster, validated Aug 2026). Why on-device AI is slow and data-center AI is fast.',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'en',
      'url': 'https://www.promptquorum.com/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': 'Memory bandwidth, not compute TOPS, is the bottleneck for AI inference. The Galaxy S26 has LPDDR5X at 85.6 GB/s; data centers use HBM3E at 1.229 TB/s—a 14x difference. Samsung validated LPDDR5X-PIM at Hot Chips 2026, tripling on-device throughput.',

      'proficiencyLevel': 'Advanced',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'en',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Why is memory bandwidth the bottleneck for AI inference?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The decode phase requires loading the entire model into memory for one forward pass. Memory cannot feed data fast enough to compute units. FLOPS are fast; bandwidth is slow.'
          }
        }
      ]
    }
  },
  ko: {
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-ko.webp',
    title: 'HBM과 온디바이스 AI: 삼성·SK하이닉스 메모리가 AI 속도를 결정하는 이유 (2026)',
    seoTitle: 'HBM vs LPDDR5X 메모리: 온디바이스 AI 대역폭 완전 가이드',
    intro: '메모리 대역폭, 계산 TOPS가 아니라, AI 추론의 병목입니다. Galaxy S26(Exynos 2600)은 LPDDR5X 85.6 GB/s를 가집니다. 데이터 센터는 HBM3E 1.229 TB/s를 사용합니다—14배 차이. 이 간격은 7B 매개변수 모델이 폰에서 8–15 tokens/sec로 실행되지만 데이터 센터 GPU는 100+ tokens/sec를 처리하는 이유를 설명합니다. 삼성과 SK하이닉스는 핵심 플레이어입니다: SK하이닉스는 여전히 HBM 출하량에서 선두를 지키고 있지만(2026년 분기별로 약 50–62% 점유율), Samsung은 2026년 5월 업계 최초로 12단 HBM4E 샘플(스택당 3.6 TB/s)을 출하했고, 2026년 8월 25일 Hot Chips 2026에서 온디바이스 추론을 3배 가속하는 검증된 LPDDR5X-PIM(메모리 내 처리) 칩을 시연했습니다. 이 가이드는 메모리 병목, Samsung과 SK하이닉스의 역할, 2026 이후 온디바이스 AI의 의미를 설명합니다.',
    metaDescription: 'HBM vs LPDDR5X: 메모리 대역폭은 AI 병목입니다. SK하이닉스 HBM4 vs Samsung LPDDR5X-PIM(3배 빠름, 2026년 8월 검증). 온디바이스 AI가 느리고 데이터 센터 AI가 빠른 이유.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '11분 읽기',
    educationalLevel: 'Advanced',
    audience: 'AI 엔지니어, 하드웨어 디자이너, 로컬 AI가 클라우드 AI보다 느린 이유에 관심 있는 사람',
    primaryTerm: 'HBM 메모리 온디바이스 AI',
    leadAnswerBlock: '**LLM 추론의 디코드 단계는 대역폭 제약이고, 계산 제약이 아닙니다: tokens/sec ≈ memory_bandwidth / model_size_in_bytes. Galaxy S26 LPDDR5X(85.6 GB/s)는 7B 모델을 최대 ~24 tokens/sec로 제한합니다. 데이터 센터 H100 GPU HBM3E(1.229 TB/s)는 100+ tokens/sec를 칩니다—HBM4는 이제 양산 단계(SK하이닉스 16단, >2 TB/s; Samsung 12단 HBM4E 샘플, 3.6 TB/s)로 이를 더 밀어붙입니다. SK하이닉스는 여전히 HBM 출하량에서 선두이지만(2026년 분기별 약 50–62% 점유율), Samsung은 폰 쪽에서 응답했습니다: 2026년 8월 25일 Hot Chips 2026에서 핀 호환 LPDDR5X-PIM 칩이 Llama-3.1-8B를 표준 LPDDR5X 27.0 tokens/sec 대비 81.3 tokens/sec로 실행—실험실 예측이 아닌 실측된 3.01배 향상입니다. 이 메모리 병목은 로컬 AI가 클라우드 AI에 뒤처지는 근본적 이유로 남아 있지만, 폰에서의 격차는 지난 분기 대비 눈에 띄게 좁혀졌습니다.**',
    quickAnswerTop: {
      ko: {
        question: '온디바이스 AI가 클라우드 AI보다 훨씬 느린 이유는?',
        answer: '메모리 대역폭입니다. 디코드 단계는 대역폭 제약(계산 제약 아님). 온디바이스(LPDDR5X 85.6 GB/s) vs 데이터 센터(HBM3E 1.229 TB/s) = 14배 차이. 그것이 Galaxy S26이 ~15 tokens/sec를 하는 이유이고 데이터 센터 GPU는 100+ tokens/sec입니다. HBM을 폰에 넣을 수 없지만, 2026년 8월 검증된 Samsung의 LPDDR5X-PIM은 HBM 대역폭을 따라잡는 대신 메모리 칩 내부에서 계산하여 격차를 줄입니다.',
        bullets: [
          'tokens/sec = memory_bandwidth / model_size_in_bytes(간단히, 디코드 단계에 대해 참)',
          '7B 모델 FP16(14 GB): LPDDR5X 85.6 GB/s ÷ 14 GB = ~6 tokens/sec(이론); Q4 양자화(3.5 GB) = ~24 tokens/sec',
          '데이터 센터 H100 HBM3E(1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 tokens/sec(이론)',
          'SK하이닉스가 HBM 출하량 선도(2026년 분기별로 약 50–62% 점유율), Nvidia H100, H200, B200 GPU 공급',
          'Samsung은 2026년 5월 12단 HBM4E 샘플(스택당 3.6 TB/s)을 출하했고, 2026년 8월 25일 Hot Chips 2026에서 Llama-3.1-8B를 표준 LPDDR5X 27.0 tokens/sec 대비 81.3 tokens/sec로 실행하는 LPDDR5X-PIM(메모리 내 계산)을 시연—실측 3.01배 향상',
          'HBM4(>2 TB/s)는 이제 양산 단계: SK하이닉스는 16단 버전을 2026년 3분기 목표, Samsung은 이미 12단 HBM4E 샘플링 중; 둘 다 폰에는 여전히 무관—비용+전력 금지'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '메모리 대역폭이 AI 속도를 결정하는 이유', anchor: '#why-memory-matters' },
      { label: '메모리 대역폭 비교: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: '삼성과 SK하이닉스: 누가 무엇을 만드나?', anchor: '#samsung-sk-hynix-roles' },
      { label: 'Galaxy S26의 온디바이스 AI 제한', anchor: '#on-device-limits' },
      { label: '데이터 센터 vs 폰: 14배 대역폭 간격', anchor: '#datacenter-vs-phone' },
      { label: '메모리 로드맵: HBM4 및 LPDDR6', anchor: '#future-roadmap' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'LLM 추론 디코드 단계의 병목은 메모리 대역폭이지 TOPS가 아닙니다. 공식: tokens/sec ≈ memory_bandwidth / model_size_in_bytes. FP16 7B 모델(14 GB) LPDDR5X 85.6 GB/s = ~6 tokens/sec. 양자화 Q4(3.5 GB) = ~24 tokens/sec. 데이터 센터 H100 HBM3E(1.229 TB/s) = ~88 tokens/sec. 간격은 14배, 계산 때문이 아니라 데이터를 계산 단위로 얼마나 빨리 공급할 수 있는지 때문입니다.',
          'SK하이닉스는 HBM 출하량에서 선두를 유지합니다(2026년 분기별로 약 50–62% 점유율). SK는 Nvidia H100, H200, B200 GPU를 공급합니다. HBM4(>2 TB/s)는 이제 로드맵 항목이 아니라 실제 양산 단계입니다: SK하이닉스는 16단·48 GB HBM4를 2026년 3분기 양산 목표로 하고, Samsung은 2026년 5월 업계 최초 12단 HBM4E 샘플(스택당 3.6 TB/s)을 출하하며 이 특정 스펙에서 SK하이닉스를 앞섰습니다.',
          'Samsung은 2026년 8월 25일 Hot Chips 2026에서 LPDDR5X-PIM(메모리 내 처리)을 실험실 개념이 아닌 실제 검증·테스트된 실리콘으로 입증했습니다. 엣지 AI 가속기 SoC에서 Llama-3.1-8B를 실행한 결과 표준 LPDDR5X의 27.0 tokens/sec 대비 81.3 tokens/sec를 달성—실측 3.01배 향상이며, PIM 모드에서는 내부 대역폭이 최대 8배입니다. 이 칩은 표준 LPDDR5X와 핀 호환(동일한 561볼 패키지)되어 드롭인 교체가 가능합니다.',
          '온디바이스 AI는 대형 모델에서 여전히 클라우드 AI보다 느릴 것입니다—폰에 HBM을 맞출 수 없기 때문입니다—하지만 폰에서의 격차는 방금 좁혀졌습니다. LPDDR5X-PIM은 HBM 대역폭을 따라잡는 것이 아니라 데이터 이동을 줄이는 방식이므로, 처리량 향상(3배)이 원시 대역폭 간격(14배)보다는 작지만 실제 워크로드에서는 의미가 있습니다.',
          'Exynos 2600(Galaxy S26)은 여전히 표준 LPDDR5X로 출하되며, 양자화 7B 모델에서 현실적으로 ~8–15 tokens/sec를 달성합니다. LPDDR5X-PIM은 검증되었지만 아직 출하된 폰 SoC에는 탑재되지 않았습니다—엣지 AI 가속기에 먼저 등장할 것으로 예상됩니다.',
          '메모리 대역폭 병목은 여전히 미세 조정이나 증류가 도움이 되지 않는 이유를 설명합니다: 매 순전파마다 모든 매개변수를 메모리에 로드해야 합니다. 더 작은 모델(3B, 1B)이 도움이 되며, 양자화는 여전히 폰의 기본 솔루션입니다—PIM은 추가 수단이지 대체재가 아닙니다.'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: '메모리 대역폭이 AI 속도를 결정하는 이유',
        content: [
          'LLM 추론의 디코드 단계에서 GPU/NPU는 전체 모델을 메모리에 로드하고, 토큰당 한 번의 전향 패스를 수행하고, 출력을 작성합니다. 병목: 얼마나 빨리 계산 단위로 매개변수를 공급할 수 있습니까? 이것은 메모리 대역폭이지 계산 TOPS가 아닙니다.',
          '단순화된 공식: tokens/sec = memory_bandwidth / (model_size_in_bytes × bytes_per_precision). FP16(매개변수당 2 바이트)의 경우, 7B 모델 = 14 GB. LPDDR5X 85.6 GB/s에서: 85.6 GB/s ÷ 14 GB = ~6 tokens/sec 이론적 최대치. 실제로 계산과 캐시 오버헤드로 인해 3–5 tokens/sec.',
          '양자화는 방정식을 극적으로 변경합니다. Q4(4비트, 매개변수당 0.5 바이트)는 7B 모델을 3.5 GB로 축소합니다. 85.6 GB/s ÷ 3.5 GB = ~24 tokens/sec 이론적. 실제 세계 ~8–15 tokens/sec, 3–4배 개선.',
          '데이터 센터 H100 HBM3E(1.229 TB/s)는 같은 모델에 대해 100+ tokens/sec을 유지할 수 있습니다. HBM이 14배 빠르기 때문입니다. 이것이 최첨단 모델(70B, 405B)이 데이터 센터에서만 실행되는 이유입니다—HBM 대역폭이 필요합니다.',
          '추론은 훈련과 다릅니다. 훈련은 계산 제약(무게 업데이트를 위해 1000+ 패스). 추론(특히 모델이 프롬프트 캐시되면)은 단일 전향 패스, 순수 메모리 대역폭 제약입니다. 이것이 폰의 추론이 서버보다 훨씬 느린 이유입니다—대역폭 간격을 엔지니어링할 수 없습니다.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LLM 디코드는 메모리 대역폭 제약: tokens/sec = 대역폭 / 모델 크기. 온디바이스 85.6 GB/s vs 데이터 센터 1.229 TB/s = 14배 간격.' },
          { type: 'plain-terms', text: '공장 어셈블리 라인으로 생각하세요: 계산은 근로자, 메모리는 공급망입니다. 근로자는 빠르지만 공급이 천천히 도착하면 병목입니다. 더 많은 근로자(더 많은 FLOPS)는 공급이 같은 속도로 도착하면 도움이 되지 않습니다. 폰은 "빠른 공급망"(HBM)이 부족합니다.' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: '메모리 대역폭 비교: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-ko.svg',
        imageCaption: '메모리 유형별 대역폭: LPDDR5X 85.6 GB/s(폰), LPDDR5X-PIM(2026년 8월 검증, 3.01배 tokens/sec) vs HBM2E 460 GB/s, HBM3 819 GB/s, HBM3E 1.229 TB/s(Nvidia H100/H200/B200), 그리고 이제 스택당 2–3.6 TB/s인 HBM4/HBM4E. SK하이닉스가 HBM 출하량의 약 50–62%를 주도합니다.',
        columns: ['메모리 유형', '대역폭', '사용처', 'Tokens/sec(7B FP16)', 'Tokens/sec(7B Q4)'],
        rows: [
          { '메모리 유형': 'LPDDR5X 10.7 Gbps', '대역폭': '85.6 GB/s(x64 버스)', '사용처': 'Galaxy S26, Snapdragon 8 Elite Gen 5, 대부분 폰', 'Tokens/sec(7B FP16)': '~6 tokens/sec(이론); ~3–5 현실', 'Tokens/sec(7B Q4)': '~24 tokens/sec(이론); ~8–15 현실' },
          { '메모리 유형': 'HBM2E', '대역폭': '~460 GB/s 스택당', '사용처': '구형 GPU(P100, V100 2020년 전)', 'Tokens/sec(7B FP16)': '~33 tokens/sec(이론)', 'Tokens/sec(7B Q4)': '~131 tokens/sec(이론)' },
          { '메모리 유형': 'HBM3 19.2 Gbps', '대역폭': '~819 GB/s 스택당', '사용처': 'Nvidia A100, 80GB 변형', 'Tokens/sec(7B FP16)': '~59 tokens/sec(이론)', 'Tokens/sec(7B Q4)': '~234 tokens/sec(이론)' },
          { '메모리 유형': 'HBM3E 21.4 Gbps', '대역폭': '1.18–1.229 TB/s 스택당', '사용처': 'Nvidia H100, H200, B200(2+ 스택 공통)', 'Tokens/sec(7B FP16)': '~88 tokens/sec(이론); ~60–80 현실', 'Tokens/sec(7B Q4)': '~352 tokens/sec(이론); ~200+ 현실' },
          { '메모리 유형': 'HBM4(SK하이닉스, 16단)', '대역폭': '스택당 >2 TB/s, 48 GB', '사용처': 'Nvidia 차세대 GPU(2026년 3분기 양산 목표)', 'Tokens/sec(7B FP16)': '~143 tokens/sec(이론)', 'Tokens/sec(7B Q4)': '~571 tokens/sec(이론)' },
          { '메모리 유형': 'HBM4E(Samsung, 12단)', '대역폭': '스택당 3.6 TB/s', '사용처': '2026년 5월 샘플 출하', 'Tokens/sec(7B FP16)': '~257 tokens/sec(이론)', 'Tokens/sec(7B Q4)': '~1,029 tokens/sec(이론)' },
          { '메모리 유형': 'LPDDR5X-PIM(Samsung, 검증됨)', '대역폭': '85.6 GB/s + PIM 모드 내부 최대 8배', '사용처': 'Hot Chips 2026 공개, 핀 호환', 'Tokens/sec(7B FP16)': '7B FP16 미측정', 'Tokens/sec(7B Q4)': 'Llama-3.1-8B: 81.3 vs 27.0 tok/sec(3.01배)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: '삼성과 SK하이닉스: 누가 무엇을 만드나?',
        content: [
          '**SK하이닉스 — HBM 출하량 리더**: SK는 2026년 분기와 측정 방식에 따라 약 50–62%의 HBM 점유율을 보고합니다. SK는 H100, H200, B200 GPU에 대해 Nvidia로 HBM3E를 공급하며, 16단·48 GB HBM4(>2 TB/s)를 2026년 3분기 양산 목표로 합니다.',
          '**Samsung — HBM4E 속도 우위, LPDDR5X-PIM 검증**: Samsung은 2026년 5월 29일 업계 최초로 12단 HBM4E 샘플을 스택당 3.6 TB/s로 출하—이 지표에서 SK하이닉스의 HBM4 스펙을 앞섰지만, SK는 여전히 총 출하량에서 우위입니다. 폰 쪽에서는 Samsung이 2026년 8월 25일 Hot Chips 2026에서 LPDDR5X-PIM을 검증·테스트된 실리콘으로 발표: 엣지 AI 가속기 SoC가 Llama-3.1-8B를 표준 LPDDR5X의 27.0 tokens/sec 대비 81.3 tokens/sec로 실행(3.01배), PIM 모드에서 내부 대역폭 최대 8배. 이 칩은 표준 LPDDR5X와 동일한 561볼 패키지를 사용해 새로운 폼팩터가 아닌 직접 교체가 가능합니다.',
          '**경쟁 역학**: Samsung은 HBM(HBM3E, 이제 HBM4E) 샘플링을 계속하지만 수율과 총 HBM 물량에서 역사적으로 SK에 뒤처져 왔습니다. LPDDR5X-PIM에 대한 Samsung의 포지셔닝은 명확합니다: HBM의 대체가 아닌 보완재—HBM의 비용, 전력, 패키징 복잡성이 걸림돌이 되는 스마트폰, AI PC, 엣지 가속기를 타깃으로 합니다.',
          '**양사 모두 Nvidia에 공급**: SK하이닉스와 Samsung 모두 Nvidia GPU VRAM용 HBM을 공급합니다; 표준 DRAM(LPDDR/DDR)은 호스트/CPU 메모리를 담당합니다. 두 회사 모두 연산 자체는 공급하지 않습니다(Nvidia가 GPU 코어를 설계).',
          '**타임라인**: HBM4는 이제 양산 단계입니다(SK하이닉스는 16단 파트를 2026년 3분기 목표; Samsung은 이미 12단 HBM4E 샘플링 중). LPDDR5X-PIM은 2026년 8월 기준 검증된 실리콘으로, 지난 업데이트 때 제시된 2027-2028년 양산 추정치를 크게 앞당겼습니다. LPDDR6/LPDDR6X-PIM이 Samsung의 다음 목표이며, 2026년 내 JEDEC 초기 스펙을 기대하고 있습니다.'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'Galaxy S26의 온디바이스 AI 제한',
        content: [
          'Galaxy S26 Exynos 2600 LPDDR5X 85.6 GB/s는 온디바이스 LLM 추론의 실질적 천정을 정의합니다. Q4로 양자화된 7B 모델은 ~8–15 tokens/sec 현실 성능에 도달합니다. 이것은 지연 시간에 민감한 작업(자동완성, 실시간 필사, 간단한 작업)에 적합하지만 긴 대화에는 비실용적입니다.',
          '모델 크기 제한: 7B 모델은 실용적(100 토큰 응답당 3–4시간 지연). 13B Q4 모델(~6.5 GB)은 85.6 GB/s ÷ 6.5 GB = ~13 tokens/sec에 도달합니다. 70B Q4 모델(~35 GB)은 85.6 GB/s ÷ 35 GB = ~2 tokens/sec—사용 불가능합니다.',
          '양자화는 필수: FP16은 비실용적. Q4는 스윗 스팟—4배 더 작은 모델, 수용 가능한 품질 손실. Q3는 더 저장하지만 품질 손실; Q5는 품질 손실 적지만 대역폭 개선 미미.',
          '속도 vs 품질 트레이드오프: 7B Q4는 ~8–15 tokens/sec(일부 사용 사례에 수용). 3B Q4는 ~24–36 tokens/sec(간단한 작업에 훌륭). 1B Q4는 ~60+ tokens/sec(실시간, Pixel 3 시대 성능).',
          '실제 사용 사례: 자동완성, 실시간 코드 제안, 온디바이스 필사, 로컬 요약. 비실용적: 긴 대화, 복잡한 추론, 캐싱 없는 다중 회전 대화.',
          '병목은 대역폭이고 계산이나 무게 크기가 아닙니다. 모델 매개변수를 0으로 줄이더라도 메모리는 여전히 전송해야 하고 대역폭은 고정되어 있습니다. 이것이 온디바이스 AI가 아키텍처적으로 제한되는 이유입니다—폰 폼 팩터에서 85.6 GB/s를 벗어날 수 없습니다.'
        ],
        items: [
          'LPDDR5X 85.6 GB/s 대역폭을 사용하여 최대 tokens/sec를 추정: GB 단위 모델 크기로 나누기',
          '7B Q4(3.5 GB): ~24 tokens/sec 이론; ~8–15 현실(실용적)',
          '13B Q4(6.5 GB): ~13 tokens/sec 이론; ~4–8 현실(느림)',
          '1B Q4(~500 MB): ~171 tokens/sec 이론; ~50–100 현실(빠름)',
          '양자화는 필수: Q4는 사용 가능한 온디바이스 모델의 기준선',
          '모델 크기를 지연 시간으로 트레이드오프; "충분히 좋은" 창 아래 5 tokens/sec에 맞는 모델 크기 없음'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: '데이터 센터 vs 폰: 14배 대역폭 간격',
        image: '/images/hbm-datacenter-vs-phone-gap-ko.svg',
        imageCaption: '폰(LPDDR5X 85.6 GB/s) vs 데이터센터 GPU(HBM3E 1.229 TB/s), 동일한 7B Q4 모델(3.5 GB) 기준: 온디바이스 실제 ~8-15 tok/s vs 데이터센터 ~200+ tok/s, 14배 대역폭 차이.',
        content: [
          'HBM3E(1.229 TB/s)를 가진 Nvidia H100 GPU는 Galaxy S26(LPDDR5X 85.6 GB/s)보다 추론 처리량에서 14배 빠릅니다. 이 간격은 계산 FLOPS 때문이 아니라(둘 다 빠름), 순수 메모리 대역폭입니다. H100은 100+ tokens/sec을 할 수 있습니다; S26은 같은 7B Q4 모델에 대해 8–15 tokens/sec을 합니다.',
          '간격이 존재하는 이유: HBM은 물리적으로 다릅니다. LPDDR5X는 CPU 옆에 있는 얇은 필름(폰의 전력 효율). HBM은 through-silicon via(TSV)를 사용하여 GPU에 직접 본딩된 메모리 칩의 스택입니다. HBM 스택은 2+ 인치 높음; 폰에 맞출 수 없습니다.',
          '왜 닫을 수 없는가: 폰은 열과 전력 제약입니다. HBM은 상당한 전력(~100+ W 전체 스택). LPDDR5X는 ~5–10 W. 폰은 배터리로 실행; 데이터 센터는 무한 전력/냉각. 배터리 수명을 파괴하지 않고 폰에 HBM 대역폭을 물리적으로 맞출 수 없습니다.',
          '결과: 온디바이스 AI는 항상 큰 모델에 대해 클라우드 AI보다 느릴 것입니다. 이것은 닫힐 기술 간격이 아니라 물리적 제약(전력, 열, 폼 팩터)입니다. 더 작은 모델, 적극적 양자화, 똑똑한 캐싱이 솔루션이고 더 나은 메모리에 희망을 갖는 것이 아닙니다.',
          '플립 측면: 온디바이스는 프라이빗, 오프라인 가능, 프라이버시 민감 작업의 0 지연입니다. 14배 속도 페널티는 프라이버시의 가격입니다. 데이터 센터 AI는 속도를 트레이드오프합니다 프라이버시 손실.',
          '업데이트: Samsung은 2026년 8월 25일 Hot Chips 2026에서 LPDDR5X-PIM을 검증했습니다—핀 호환 칩에서 실측 3.01배 처리량 향상(Llama-3.1-8B 기준 27.0 → 81.3 tokens/sec), 이 페이지가 이전에 인용한 2027-2028년 일정보다 크게 앞당겨진 것입니다. LPDDR6(여전히 2027-2028년)은 ~200 GB/s를 목표로 하며 HBM3E보다 ~6배 느립니다. 지금의 PIM과 나중의 LPDDR6이 합쳐져 폰 대 데이터 센터 격차를 의미 있게 좁히지만 완전히 없애지는 못합니다—PIM이 폰 SoC에 탑재되면 원시 14배 대역폭 격차는 실제로는 4-6배에 가까워집니다.'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: '메모리 로드맵: HBM4 및 LPDDR6',
        content: [
          '**HBM4 / HBM4E(SK하이닉스 + Samsung, 이제 양산 단계)**: SK하이닉스 16단 HBM4는 스택당 >2 TB/s(2026년 3분기 양산 목표); Samsung 12단 HBM4E는 스택당 3.6 TB/s로 2026년 5월부터 샘플링 중. Nvidia 차세대 GPU에 가장 먼저 탑재됩니다. 폰과는 여전히 무관합니다.',
          '**LPDDR5X-PIM(Samsung, 2026년 8월 검증)**: 메모리 내 처리는 DRAM 다이 내부에 직접 연산을 포함합니다. Hot Chips 2026에서 "개발 중"에서 "실증, 테스트된 실리콘"으로 바뀌었습니다: 실측 추론 향상 3.01배(Llama-3.1-8B 기준 27.0 → 81.3 tokens/sec), PIM 모드에서 내부 대역폭 최대 8배, 핀 호환 칩. HBM 대역폭에는 미치지 못하지만 실제이며 이전의 2027-2028년 추정보다 앞당겨졌습니다.',
          '**LPDDR6 / LPDDR6X-PIM(2027-2028)**: 표준 LPDDR6은 ~200+ GB/s 추정—LPDDR5X 대역폭의 약 2.3배. 7B Q4 모델의 경우: 200 GB/s ÷ 3.5 GB ≈ 이론상 57 tokens/sec(24에서 상승), 현실 ~20–35 tokens/sec. Samsung은 이미 LPDDR5X-PIM 너머 LPDDR6X-PIM을 보고 있으며, 2026년 내 JEDEC 초기 스펙을 기대합니다.',
          '**현실**: LPDDR5X-PIM이 출하되고 LPDDR6이 로드맵에 있어도, 폰은 추론에서 여전히 데이터 센터보다 여러 배 느릴 것입니다—Samsung 스스로도 PIM을 비용/전력 제약 기기를 위한 HBM 보완재로 포지셔닝하고 있으며, 대역폭 동등화 솔루션은 아닙니다.',
          '**2026년 하반기 온디바이스 AI 기준**: Exynos 2600 + 표준 LPDDR5X가 여전히 Galaxy S26의 출하 기준선입니다. LPDDR5X-PIM은 검증되었지만 아직 출하된 폰 SoC에 등장하지 않았습니다—엣지 AI 가속기가 먼저 이를 탑재할 것으로 예상됩니다.'
        ]
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'LPDDR5X 메모리 대역폭은 얼마입니까?', a: 'x64 버스에서 10.7 Gbps로 동작하는 LPDDR5X는 85.6 GB/s를 제공합니다 — Galaxy S26, Snapdragon 8 Elite Gen 5, 그리고 2026년 대부분의 플래그십 폰에서 사용되는 메모리 속도입니다. 이는 데이터센터용 HBM(HBM2E의 460 GB/s부터 HBM4/HBM4E의 스택당 2~3.6 TB/s까지)보다 약 5.4배에서 14배 느립니다. 이 때문에 동일한 모델 크기라도 온디바이스 AI 추론이 데이터센터 추론보다 훨씬 느립니다. 2026년 8월 검증된 삼성의 LPDDR5X-PIM 변형은 이 격차의 일부를 좁혔습니다 — 삼성 자체의 Hot Chips 2026 시연에서 Llama-3.1-8B를 표준 LPDDR5X 대비 3.01배의 tokens/sec로 실행했습니다.' },
          { q: '왜 AI 추론에 메모리 대역폭이 병목인가?', a: '디코드 단계(각 토큰 생성)는 한 번의 전향 패스에 대해 전체 모델을 메모리에 로드해야 하기 때문. 계산 단위가 빨리 끝나지만 메모리가 충분히 빨리 데이터를 공급할 수 없습니다. FLOPS가 병목이 아니라 데이터 배달입니다.' },
          { q: '온디바이스 AI의 tokens/sec 공식은 무엇입니까?', a: '단순화: tokens/sec = memory_bandwidth / (model_size × bytes_per_precision). 7B FP16 모델(14 GB) 85.6 GB/s에서: 85.6 ÷ 14 = ~6 tokens/sec. Q4 양자화(3.5 GB): 85.6 ÷ 3.5 = ~24 tokens/sec.' },
          { q: 'SK하이닉스가 HBM 시장을 지배하나요?', a: 'SK하이닉스는 HBM 출하량에서 선두이며, 2026년 분기에 따라 50–62%의 점유율이 보고됩니다. Samsung은 격차 일부를 좁혔습니다: 2026년 5월 스택당 3.6 TB/s의 12단 HBM4E 샘플을 출하해 이 특정 지표에서 SK하이닉스의 HBM4 스펙을 앞섰습니다.' },
          { q: 'Samsung이 HBM에서 SK하이닉스를 따라잡을 수 있나요?', a: 'Samsung은 예전보다 가까워졌습니다: 12단 HBM4E 샘플(3.6 TB/s, 2026년 5월)이 문서상 SK하이닉스의 HBM4 대역폭 스펙을 능가하지만, SK는 여전히 총 출하량에서 앞섭니다. 폰의 경우 Samsung은 HBM 대역폭을 따라잡으려 하지 않고 대신 LPDDR5X-PIM을 검증했습니다.' },
          { q: 'LPDDR6는 언제 배송되나요?', a: '지난 업데이트 이후 변함없이 여전히 2027-2028년 Galaxy S27/S28 시대로 추정됩니다. ~200+ GB/s(2.3x LPDDR5X). 반면 LPDDR5X-PIM은 이미 2026년 8월 기준 검증된 실리콘이며, LPDDR6보다 먼저 엣지 기기에 도달할 가능성이 높습니다.' },
          { q: '왜 폰에 HBM을 넣을 수 없나요?', a: '물리적 제약: HBM 스택은 2인치 이상 높습니다. HBM 전력 소비(~100+ W)는 배터리 수명을 파괴합니다. LPDDR5X는 얇은 필름으로 5–10 W입니다. HBM4/HBM4E에서도 이는 바뀌지 않았습니다—신세대는 더 빠르지만 더 작거나 저전력이지는 않습니다.' },
          { q: 'LPDDR5X-PIM이 HBM과의 격차를 좁힐까요?', a: '부분적으로, 그리고 이제는 예측이 아니라 실측입니다. Samsung은 Hot Chips 2026에서 실제 칩이 Llama-3.1-8B를 표준 LPDDR5X 27.0 tokens/sec 대비 81.3 tokens/sec로 실행하는 것을 보여주었습니다—3.01배 향상. HBM3E와의 원시 14배 격차에는 여전히 크게 못 미치지만, 이 페이지가 이전에 인용한 "약 50%" 추정치보다 큰 실제 개선입니다.' },
          { q: '계산 FLOPS가 온디바이스 AI에 중요한가요?', a: '생각보다는 아닙니다. 디코딩은 메모리 제약이지 계산 제약이 아닙니다. 더 빠른 메모리를 가진 느린 계산 유닛이 더 느린 메모리를 가진 빠른 계산 유닛을 이깁니다.' },
          { q: 'Galaxy S26에서 70B 모델을 실행할 수 있나요?', a: '기술적으로는 가능하지만 실질적으로는 불가능합니다. 70B Q4(~35 GB)는 85.6 GB/s ÷ 35 GB = ~2 tokens/sec입니다. 초당 1토큰으로, 어떤 대화형 작업에도 사용할 수 없습니다. 7B 이하를 사용하세요.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[갤럭시 S26 온디바이스 AI 완벽 가이드: Galaxy AI·NPU 작동 원리 (2026)](/ko/local-llms/galaxy-s26-local-ai-on-device-2026) -- 갤럭시 S26 온디바이스 AI',
          '[MRAM과 인메모리 컴퓨팅: 온디바이스 AI의 다음 도약?](/ko/local-llms/mram-in-memory-computing-local-ai-2026) -- AI를 위한 MRAM과 인메모리 컴퓨팅',
          '[로컬 LLM에 VRAM이 얼마나 필요한가?](/ko/local-llms/how-much-vram-local-llm) -- 로컬 LLM에 필요한 VRAM 용량',
          '[로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026) -- 로컬 LLM 하드웨어 가이드 2026',
          '[모바일 로컬 LLM 2026: iPhone 16 Pro, iPad M4 & Snapdragon X](/ko/local-llms/mobile-local-llms) -- 모바일에서 로컬 LLM',
        ],
      }
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'HBM과 온디바이스 AI: 삼성·SK하이닉스 메모리가 AI 속도를 결정하는 이유 (2026)',
      'description': 'HBM vs LPDDR5X: 메모리 대역폭은 AI 병목입니다. SK하이닉스 HBM4 vs Samsung LPDDR5X-PIM(3배 빠름, 2026년 8월 검증). 온디바이스 AI가 느리고 데이터 센터 AI가 빠른 이유.',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'ko',
      'url': 'https://www.promptquorum.com/ko/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': '메모리 대역폭, 계산 TOPS가 아니라, AI 추론의 병목입니다. Samsung은 Hot Chips 2026에서 LPDDR5X-PIM을 검증해 온디바이스 처리량을 3배로 높였습니다.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ko',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '왜 AI 추론에 메모리 대역폭이 병목인가?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '디코드 단계가 한 번의 전향 패스에 대해 전체 모델을 로드해야 하기 때문. 메모리가 계산 단위에 충분히 빨리 데이터를 공급할 수 없습니다. FLOPS가 빠르고 대역폭이 느립니다.'
          }
        }
      ]
    }
  },
  es: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-es.webp',
    title: 'IA en Dispositivo y Memoria: Por Qué HBM Determina la Velocidad de IA Local (2026)',
    seoTitle: 'HBM vs LPDDR5X: Ancho de Banda para IA en Dispositivo Explicado',
    intro: 'El ancho de banda de memoria, no TOPS de cálculo, es el cuello de botella para la inferencia de IA. Galaxy S26 (Exynos 2600) tiene LPDDR5X a 85.6 GB/s; los centros de datos usan HBM3E a 1.229 TB/s—una diferencia de 14x. Esta brecha explica por qué modelos de 7B parámetros se ejecutan en teléfonos a 8–15 tokens/seg pero las GPU de centros de datos manejan 100+ tokens/seg. Samsung y SK Hynix son los actores clave: SK Hynix domina HBM (62% de cuota de mercado), mientras que Samsung impulsa LPDDR5X-PIM (Procesamiento en Memoria) para reducir la brecha. Esta guía explica el cuello de botella de memoria, el papel de Samsung y SK Hynix, y qué significa para IA en dispositivo en 2026 y más allá.',
    metaDescription: 'HBM vs LPDDR5X: El ancho de banda de memoria es el cuello de botella de IA. SK Hynix HBM3E vs Samsung LPDDR5X-PIM. Por qué la IA en dispositivo es lenta y la IA en centro de datos es rápida.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: 'Lectura de 11 min',
    educationalLevel: 'Intermedio',
    audience: 'Ingenieros de IA, diseñadores de hardware, cualquiera curioso sobre por qué la IA local es más lenta que la IA en la nube',
    primaryTerm: 'Memoria HBM en IA en dispositivo',
    targetKeywords: ['memoria hbm', 'ancho de banda hbm3e', 'ancho de banda lpddr5x', 'cuello de botella ancho de banda memoria', 'velocidad ia en dispositivo', 'sk hynix', 'samsung hbm'],
    leadAnswerBlock: '**La fase de decodificación de la inferencia de LLM está limitada por ancho de banda, no por cálculo: tokens/seg ≈ ancho_banda_memoria / tamaño_modelo_en_bytes. Galaxy S26 LPDDR5X (85.6 GB/s) limita un modelo 7B a ~24 tokens/seg máximo. GPU H100 de centro de datos HBM3E (1.229 TB/s) alcanza 100+ tokens/seg — HBM4, ya en producción en masa (SK Hynix de 16 capas, >2 TB/s; muestras HBM4E de Samsung de 12 capas, 3.6 TB/s), lo lleva más lejos. SK Hynix sigue liderando el volumen de HBM (aproximadamente 50–62% de cuota según el trimestre de 2026), pero Samsung respondió por el lado del teléfono: en Hot Chips 2026 (25 de agosto de 2026) mostró un chip LPDDR5X-PIM compatible con pines que ejecutó Llama-3.1-8B a 81.3 tokens/seg frente a 27.0 tokens/seg en LPDDR5X estándar—una ganancia real y medida de 3.01x, no una proyección de laboratorio. Este cuello de botella de memoria sigue siendo la razón fundamental por la que la IA local va por detrás de la IA en la nube, pero la brecha en los teléfonos acaba de reducirse de forma significativa respecto al trimestre anterior.',
    quickAnswerTop: {
      es: {
        question: '¿Por qué la IA en dispositivo es mucho más lenta que la IA en la nube?',
        answer: 'Ancho de banda de memoria. La fase de decodificación está limitada por ancho de banda (no por cálculo). En dispositivo (LPDDR5X 85,6 GB/s) vs centro de datos (HBM3E 1.229 TB/s) = brecha 14x. Eso explica por qué Galaxy S26 hace ~15 tokens/seg vs GPU centro de datos >100 tokens/seg. No puede colocar HBM en un teléfono, pero el LPDDR5X-PIM de Samsung, validado en agosto de 2026, reduce la brecha al calcular dentro del propio chip de memoria en lugar de igualar el ancho de banda de HBM.',
        bullets: [
          'tokens/seg = ancho de banda memoria / tamaño modelo en bytes(simplificado, verdad para fase decodificación)',
          'Modelo 7B FP16 (14 GB): LPDDR5X 85,6 GB/s ÷ 14 GB = ~6 tokens/seg(teoría); Q4 (3,5 GB) = ~24 tokens/seg',
          'Centro de datos H100 HBM3E (1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 tokens/seg(teoría)',
          'SK Hynix lidera los envíos de HBM (aproximadamente 50–62% de cuota según el trimestre de 2026), provee Nvidia H100, H200, B200 GPUs',
          'Samsung envió muestras de HBM4E de 12 capas a 3,6 TB/s por stack en mayo de 2026, y en Hot Chips 2026 (25 de agosto de 2026) mostró LPDDR5X-PIM ejecutando Llama-3.1-8B a 81,3 tokens/seg frente a 27,0 tokens/seg en LPDDR5X estándar — una ganancia medida de 3,01x',
          'HBM4 (>2 TB/s) ya está en producción en masa: SK Hynix apunta a su variante de 16 capas para el T3 2026, Samsung ya muestrea HBM4E de 12 capas; ambos siguen siendo irrelevantes para teléfonos—costo+potencia prohibitivos'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: 'Puntos Clave', anchor: '#key-takeaways' },
      { label: 'Por Qué el Ancho de Banda Determina la Velocidad de IA', anchor: '#why-memory-matters' },
      { label: 'Comparación de Ancho de Banda: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: 'Samsung y SK Hynix: Quién Hace Qué', anchor: '#samsung-sk-hynix-roles' },
      { label: 'Límites de IA en Dispositivo en el Galaxy S26', anchor: '#on-device-limits' },
      { label: 'Centro de Datos vs. Teléfono: La Brecha de 14x', anchor: '#datacenter-vs-phone' },
      { label: 'Hoja de Ruta de Memoria: HBM4 y LPDDR6', anchor: '#future-roadmap' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'El ancho de banda de memoria, no los TOPS, es el cuello de botella en la fase de decodificación de la inferencia de IA. Fórmula: tokens/seg ≈ ancho_banda_memoria / tamaño_modelo_en_bytes. Un modelo 7B en FP16 (14 GB) a LPDDR5X 85.6 GB/s = ~6 tokens/seg. El mismo modelo cuantizado Q4 (3.5 GB) = ~24 tokens/seg. Centro de datos H100 HBM3E (1.229 TB/s) = ~88 tokens/seg.',
          'SK Hynix lidera los envíos de HBM (aproximadamente 50–62% de cuota según el trimestre de 2026) y suministra a Nvidia H100, H200, B200. HBM4 (>2 TB/s) ya está en producción en masa: SK Hynix apunta a su variante de 16 capas y 48 GB para el T3 2026, mientras Samsung envió las primeras muestras de HBM4E de 12 capas del sector a 3.6 TB/s por stack en mayo de 2026, adelantándose a SK Hynix en esa métrica concreta.',
          'Samsung validó LPDDR5X-PIM (Procesamiento en Memoria) como silicio real y probado en Hot Chips 2026 (25 de agosto de 2026), no un concepto de laboratorio. Ejecutando Llama-3.1-8B en un SoC acelerador de IA de borde, alcanzó 81.3 tokens/seg frente a 27.0 tokens/seg en LPDDR5X estándar: una mejora medida de 3.01x, con hasta 8x más ancho de banda interno en modo PIM. El chip es compatible con pines con el LPDDR5X estándar (mismo encapsulado de 561 bolas), así que es una actualización directa.',
          'La IA en dispositivo seguirá siendo más lenta que la IA en la nube para modelos grandes—no se puede meter HBM en un teléfono—pero la brecha en los teléfonos acaba de estrecharse. LPDDR5X-PIM no iguala el ancho de banda de HBM; reduce el movimiento de datos, por eso la ganancia de rendimiento (3x) es menor que la brecha de ancho de banda bruta (14x) pero sigue siendo relevante para cargas de trabajo reales.',
          'Exynos 2600 (Galaxy S26) sigue enviándose con LPDDR5X estándar, logrando ~8–15 tokens/seg realistas para un modelo 7B cuantizado. LPDDR5X-PIM está validado pero aún no está en un SoC de teléfono enviado—es probable que aparezca primero en aceleradores de IA de borde.',
          'El cuello de botella de ancho de banda de memoria sigue explicando por qué el ajuste fino o la destilación no ayudan: aún hay que cargar cada parámetro en memoria en cada pasada. Los modelos más pequeños ayudan (3B, 1B), y la cuantización sigue siendo la solución base para teléfonos—PIM es una palanca adicional, no un sustituto.'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: 'Por Qué el Ancho de Banda de Memoria Determina la Velocidad de IA',
        content: [
          'Durante la fase de decodificación de la inferencia LLM, la GPU/NPU debe cargar todo el modelo en memoria, realizar una pasada hacia adelante por token, y escribir la salida. El cuello de botella: ¿qué tan rápido se pueden alimentar parámetros a las unidades de cálculo? Esto es ancho de banda de memoria, no TOPS de cálculo.',
          'Fórmula simplificada: tokens/seg = ancho_banda_memoria / (tamaño_modelo_en_bytes × bytes_por_precisión). Para FP16 (2 bytes por parámetro), un modelo 7B = 14 GB. A LPDDR5X 85.6 GB/s: 85.6 GB/s ÷ 14 GB = ~6 tokens/seg máximo teórico. En la práctica, 3–5 tokens/seg debido a la sobrecarga de cálculo y caché.',
          'La cuantización cambia drásticamente la ecuación. Q4 (4 bits, 0.5 bytes por parámetro) reduce un modelo 7B a 3.5 GB. 85.6 GB/s ÷ 3.5 GB = ~24 tokens/seg teóricos. En el mundo real ~8–15 tokens/seg, una mejora de 3–4x.',
          'El centro de datos H100 con HBM3E (1.229 TB/s) puede sostener 100+ tokens/seg para el mismo modelo, porque HBM es 14x más rápido. Por eso los modelos de frontera (70B, 405B) solo se ejecutan en centros de datos—se necesita el ancho de banda de HBM.',
          'La inferencia es diferente del entrenamiento. El entrenamiento está limitado por cálculo (se hacen 1000+ pasadas para actualizar pesos). La inferencia (especialmente con caché de prompt) es una sola pasada hacia adelante, puramente limitada por ancho de banda de memoria.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'La decodificación de LLM está limitada por ancho de banda de memoria: tokens/seg = ancho de banda / tamaño del modelo. En dispositivo 85.6 GB/s vs centro de datos 1.229 TB/s = brecha de 14x.' },
          { type: 'plain-terms', text: 'Piense en una línea de ensamblaje: el cálculo son los trabajadores, la memoria es la cadena de suministro. Más trabajadores (más FLOPS) no ayuda si los suministros (datos) llegan a la misma velocidad. Los teléfonos carecen de una "cadena de suministro rápida" (HBM).' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: 'Comparación de Ancho de Banda de Memoria: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-es.svg',
        imageCaption: 'Ancho de banda de memoria por tipo: LPDDR5X 85.6 GB/s (teléfonos), LPDDR5X-PIM (validado ago. 2026, 3.01x tokens/seg) vs HBM2E 460 GB/s, HBM3 819 GB/s, HBM3E 1.229 TB/s (Nvidia H100/H200/B200), y HBM4/HBM4E ya en 2–3.6 TB/s por stack. SK Hynix lidera envíos de HBM (~50–62%).',
        columns: ['Tipo de Memoria', 'Ancho de Banda', 'Usado En', 'Tokens/seg (7B FP16)', 'Tokens/seg (7B Q4)'],
        rows: [
          { 'Tipo de Memoria': 'LPDDR5X 10.7 Gbps', 'Ancho de Banda': '85.6 GB/s (bus x64)', 'Usado En': 'Galaxy S26, Snapdragon 8 Elite Gen 5', 'Tokens/seg (7B FP16)': '~6 tokens/seg (teoría); ~3–5 real', 'Tokens/seg (7B Q4)': '~24 tokens/seg (teoría); ~8–15 real' },
          { 'Tipo de Memoria': 'HBM2E', 'Ancho de Banda': '~460 GB/s por stack', 'Usado En': 'GPUs antiguas (P100, V100)', 'Tokens/seg (7B FP16)': '~33 tokens/seg (teoría)', 'Tokens/seg (7B Q4)': '~131 tokens/seg (teoría)' },
          { 'Tipo de Memoria': 'HBM3 19.2 Gbps', 'Ancho de Banda': '~819 GB/s por stack', 'Usado En': 'Nvidia A100, variante 80GB', 'Tokens/seg (7B FP16)': '~59 tokens/seg (teoría)', 'Tokens/seg (7B Q4)': '~234 tokens/seg (teoría)' },
          { 'Tipo de Memoria': 'HBM3E 21.4 Gbps', 'Ancho de Banda': '1.18–1.229 TB/s por stack', 'Usado En': 'Nvidia H100, H200, B200', 'Tokens/seg (7B FP16)': '~88 tokens/seg (teoría); ~60–80 real', 'Tokens/seg (7B Q4)': '~352 tokens/seg (teoría); ~200+ real' },
          { 'Tipo de Memoria': 'HBM4 (SK Hynix, 16 capas)', 'Ancho de Banda': '>2 TB/s por stack, 48 GB', 'Usado En': 'GPUs Nvidia (prod. en masa T3 2026)', 'Tokens/seg (7B FP16)': '~143 tokens/seg (teoría)', 'Tokens/seg (7B Q4)': '~571 tokens/seg (teoría)' },
          { 'Tipo de Memoria': 'HBM4E (Samsung, 12 capas)', 'Ancho de Banda': '3.6 TB/s por stack', 'Usado En': 'Muestras enviadas may. 2026', 'Tokens/seg (7B FP16)': '~257 tokens/seg (teoría)', 'Tokens/seg (7B Q4)': '~1,029 tokens/seg (teoría)' },
          { 'Tipo de Memoria': 'LPDDR5X-PIM (Samsung, validado)', 'Ancho de Banda': '85.6 GB/s + hasta 8x interno (modo PIM)', 'Usado En': 'Hot Chips 2026, compatible con pines', 'Tokens/seg (7B FP16)': 'No medido para 7B FP16', 'Tokens/seg (7B Q4)': 'Llama-3.1-8B: 81.3 vs 27.0 tok/seg (3.01x)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: 'Samsung y SK Hynix: Quién Hace Qué',
        content: [
          '**SK Hynix — Líder en Volumen de HBM**: SK lidera los envíos de HBM, con una cuota reportada de entre 50–62% aproximadamente según el trimestre de 2026 y la metodología de medición. SK suministra HBM3E a Nvidia para GPUs H100, H200 y B200, y apunta a la producción en masa de su HBM4 de 16 capas (48 GB, >2 TB/s) para el T3 2026.',
          '**Samsung — Liderazgo en Velocidad HBM4E, LPDDR5X-PIM Validado**: Samsung envió las primeras muestras del sector de HBM4E de 12 capas el 29 de mayo de 2026, a 3.6 TB/s por stack—por delante de la especificación HBM4 de SK Hynix en esa métrica, aunque SK sigue enviando más volumen total. En el lado móvil, Samsung presentó LPDDR5X-PIM en Hot Chips 2026 (25 de agosto de 2026) como silicio validado y probado: un SoC acelerador de IA de borde ejecutó Llama-3.1-8B a 81.3 tokens/seg frente a 27.0 tokens/seg en LPDDR5X estándar (3.01x), con hasta 8x de ancho de banda interno en modo PIM. El chip usa el mismo encapsulado de 561 bolas que el LPDDR5X estándar, así que es un reemplazo directo, no un nuevo factor de forma.',
          '**Dinámica Competitiva**: Samsung sigue muestreando HBM (HBM3E, ahora HBM4E) pero históricamente ha quedado por detrás de SK en rendimiento y volumen total de HBM. El posicionamiento de Samsung para LPDDR5X-PIM es explícito: un complemento de HBM, no un reemplazo—apuntando a smartphones, PCs con IA y aceleradores de borde donde el costo, consumo y complejidad de empaquetado de HBM son prohibitivos.',
          '**Ambas empresas suministran a Nvidia**: SK Hynix y Samsung proporcionan HBM para VRAM de GPU Nvidia; la DRAM estándar (LPDDR/DDR) cubre la memoria host/CPU. Ninguna suministra el cálculo (Nvidia diseña los núcleos de GPU).',
          '**Cronología**: HBM4 está en producción en masa ahora (SK Hynix apuntando al T3 2026 para su parte de 16 capas; Samsung ya muestreando HBM4E de 12 capas). LPDDR5X-PIM es silicio validado desde agosto de 2026, adelantado respecto a la estimación de producción de 2027-2028 dada en la actualización anterior. LPDDR6/LPDDR6X-PIM es el siguiente objetivo de Samsung, con una especificación JEDEC inicial esperada para finales de 2026.'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'Límites de IA en Dispositivo en el Galaxy S26',
        content: [
          'El Galaxy S26 Exynos 2600 con LPDDR5X 85.6 GB/s define el techo práctico para la inferencia LLM en dispositivo. Un modelo 7B cuantizado a Q4 alcanza ~8–15 tokens/seg de rendimiento realista. Esto es adecuado para tareas sensibles a la latencia (autocompletado, transcripción en tiempo real) pero poco práctico para conversaciones largas.',
          'Límites de tamaño de modelo: un modelo 7B es práctico. Un modelo 13B a Q4 (~6.5 GB) alcanza 85.6 GB/s ÷ 6.5 GB = ~13 tokens/seg, apenas una mejora. Un modelo 70B a Q4 (~35 GB) alcanza 85.6 GB/s ÷ 35 GB = ~2 tokens/seg—inutilizable.',
          'La cuantización es esencial: FP16 (2 bytes/parámetro) es poco práctico. Q4 (0.5 bytes/parámetro) es el punto óptimo—modelos 4x más pequeños con pérdida de calidad aceptable.',
          'Compromiso velocidad vs. calidad: 7B Q4 es ~8–15 tokens/seg (aceptable para algunos casos). 3B Q4 es ~24–36 tokens/seg (excelente para tareas simples). 1B Q4 es ~60+ tokens/seg (tiempo real).',
          'Casos de uso prácticos: autocompletado, sugerencia de código en tiempo real, transcripción en dispositivo, resumen local. No prácticos: conversaciones largas, razonamiento complejo, diálogo multi-turno sin caché.',
          'El cuello de botella es el ancho de banda, no el cálculo ni el tamaño de peso. Incluso reduciendo los parámetros del modelo a 0, la memoria aún necesitaría transferirlos, y el ancho de banda es fijo. LPDDR5X-PIM ayuda reduciendo el movimiento de datos necesario, pero no elimina el límite de ancho de banda base.'
        ],
        items: [
          'Use el ancho de banda LPDDR5X 85.6 GB/s para estimar tokens/seg máximos: divida por el tamaño del modelo en GB',
          '7B Q4 (3.5 GB): ~24 tokens/seg teoría; ~8–15 real (práctico)',
          '13B Q4 (6.5 GB): ~13 tokens/seg teoría; ~4–8 real (lento)',
          '1B Q4 (~500 MB): ~171 tokens/seg teoría; ~50–100 real (rápido)',
          'La cuantización es obligatoria: Q4 es la base para modelos usables en dispositivo',
          'LPDDR5X-PIM (validado, aún no en el Galaxy S26) podría añadir ~3x de rendimiento cuando llegue a un SoC de teléfono'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: 'Centro de Datos vs. Teléfono: La Brecha de Ancho de Banda de 14x',
        image: '/images/hbm-datacenter-vs-phone-gap-es.svg',
        imageCaption: 'Teléfono (LPDDR5X 85.6 GB/s) vs GPU de centro de datos (HBM3E 1.229 TB/s) para el mismo modelo 7B Q4 (3.5 GB): ~8-15 tok/s real en dispositivo vs ~200+ tok/s en centro de datos, una brecha de 14x.',
        content: [
          'Una GPU Nvidia H100 con HBM3E (1.229 TB/s) es 14x más rápida en rendimiento de inferencia que un Galaxy S26 (LPDDR5X 85.6 GB/s). Esta brecha no se debe a FLOPS de cálculo (ambos son rápidos), sino a ancho de banda de memoria puro.',
          'Por qué existe la brecha: HBM es físicamente diferente. LPDDR5X es una película delgada junto a la CPU (eficiente en energía para teléfonos). HBM es una pila de chips de memoria unidos directamente a la GPU mediante vías a través de silicio (TSV), creando un ancho de banda masivo. Los stacks HBM tienen 2+ pulgadas de altura; imposible de meter en un teléfono.',
          'Por qué no se puede cerrar del todo: los teléfonos tienen restricciones térmicas y de energía. HBM consume energía significativa (~100+ W por stack completo). LPDDR5X es ~5–10 W. No se puede meter físicamente el ancho de banda de HBM en un teléfono sin destruir la duración de la batería.',
          'Consecuencia: la IA en dispositivo seguirá siendo más lenta que la IA en la nube para modelos grandes. Modelos más pequeños, cuantización agresiva y almacenamiento en caché inteligente son las soluciones.',
          'El lado positivo: en dispositivo es privado, funciona sin conexión, y con latencia cero para tareas sensibles a la privacidad. La penalización de velocidad de 14x es el precio de la privacidad.',
          'Actualización: Samsung validó LPDDR5X-PIM en Hot Chips 2026 (25 de agosto de 2026)—3.01x de rendimiento medido (27.0 → 81.3 tokens/seg en Llama-3.1-8B) en un chip compatible con pines, muy por delante del cronograma de 2027-2028 citado anteriormente en esta página. LPDDR6 (aún 2027-2028) apunta a ~200 GB/s, ~6x más lento que HBM3E. Juntos, PIM ahora y LPDDR6 después reducen significativamente la brecha teléfono-vs-centro-de-datos sin cerrarla del todo—la brecha bruta de 14x se acerca a 4-6x en la práctica una vez que PIM llegue a SoCs de teléfono.'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: 'Hoja de Ruta de Memoria: HBM4 y LPDDR6',
        content: [
          '**HBM4 / HBM4E (SK Hynix + Samsung, ya en producción en masa)**: >2 TB/s por stack para el HBM4 de 16 capas de SK Hynix (producción en masa objetivo T3 2026); 3.6 TB/s por stack para el HBM4E de 12 capas de Samsung, muestreando desde mayo de 2026. Llega primero a las GPUs de próxima generación de Nvidia. Sigue siendo irrelevante para teléfonos.',
          '**LPDDR5X-PIM (Samsung, validado en agosto de 2026)**: Processing-In-Memory integra cálculo dentro del die DRAM. Esto pasó de "en desarrollo" a "demostrado, silicio probado" en Hot Chips 2026: 3.01x de mejora de inferencia medida (27.0 → 81.3 tokens/seg en Llama-3.1-8B) con hasta 8x de ancho de banda interno en modo PIM, en un chip compatible con pines. No igualará el ancho de banda de HBM, pero es real y está adelantado respecto a la estimación previa de producción de 2027-2028.',
          '**LPDDR6 / LPDDR6X-PIM (2027-2028)**: ~200+ GB/s estimados para LPDDR6 estándar—aproximadamente 2.3x el ancho de banda de LPDDR5X. Para un modelo 7B Q4: 200 GB/s ÷ 3.5 GB ≈ 57 tokens/seg teóricos (subiendo desde 24), ~20–35 tokens/seg reales. Samsung ya está mirando más allá de LPDDR5X-PIM hacia LPDDR6X-PIM, y espera una especificación JEDEC inicial para finales de 2026.',
          '**Realidad**: Incluso con LPDDR5X-PIM enviándose y LPDDR6 en la hoja de ruta, los teléfonos seguirán siendo varias veces más lentos que los centros de datos para inferencia—Samsung mismo posiciona PIM como un complemento de HBM para dispositivos limitados por costo/energía, no una solución de paridad de ancho de banda.',
          '**Para IA en dispositivo, finales de 2026**: Exynos 2600 + LPDDR5X estándar sigue siendo la base de envío para el Galaxy S26. LPDDR5X-PIM está validado pero aún no ha aparecido en un SoC de teléfono enviado—espere que los aceleradores de IA de borde lo obtengan primero.'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          { q: '¿Cuál es el ancho de banda de memoria de LPDDR5X?', a: 'LPDDR5X a 10.7 Gbps en un bus x64 ofrece 85.6 GB/s, la velocidad de memoria usada en el Galaxy S26, el Snapdragon 8 Elite Gen 5 y la mayoría de los teléfonos flagship de 2026. Eso es entre 5.4x y 14x más lento que el HBM de centro de datos (desde HBM2E a 460 GB/s hasta HBM4/HBM4E a 2-3.6 TB/s por stack), por lo que la inferencia de IA en el dispositivo es mucho más lenta que en un centro de datos para el mismo tamaño de modelo. La variante LPDDR5X-PIM de Samsung, validada en agosto de 2026, cierra parte de esa brecha: ejecutó Llama-3.1-8B a 3.01x los tokens/seg del LPDDR5X estándar en la propia demostración de Samsung en Hot Chips 2026.' },
          { q: '¿Por qué el ancho de banda de memoria es el cuello de botella para la inferencia de IA?', a: 'Porque la fase de decodificación (generar cada token) requiere cargar todo el modelo en memoria para una pasada hacia adelante. Las unidades de cálculo terminan rápido, pero la memoria no puede alimentarlas con datos lo suficientemente rápido.' },
          { q: '¿Cuál es la fórmula de tokens/seg para IA en dispositivo?', a: 'Simplificada: tokens/seg = ancho_banda_memoria / (tamaño_modelo × bytes_por_precisión). Para un modelo 7B FP16 (14 GB) a 85.6 GB/s: 85.6 ÷ 14 = ~6 tokens/seg. Cuantizado Q4 (3.5 GB): 85.6 ÷ 3.5 = ~24 tokens/seg.' },
          { q: '¿Domina SK Hynix el mercado de HBM?', a: 'SK Hynix lidera los envíos de HBM, con una cuota reportada de entre 50–62% según el trimestre de 2026. Samsung cerró parte de la brecha: envió muestras de HBM4E de 12 capas a 3.6 TB/s en mayo de 2026, superando la especificación de HBM4 de SK en ese punto concreto.' },
          { q: '¿Puede Samsung alcanzar a SK Hynix en HBM?', a: 'Samsung está más cerca que antes: sus muestras de HBM4E de 12 capas (3.6 TB/s, mayo de 2026) superan sobre el papel la especificación de HBM4 de SK Hynix, aunque SK sigue liderando en volumen total. Para teléfonos, Samsung ni siquiera intenta igualar el ancho de banda de HBM—validó LPDDR5X-PIM en su lugar.' },
          { q: '¿Cuándo se lanza LPDDR6?', a: 'Aún estimado para 2027-2028 en la era Galaxy S27/S28, sin cambios desde la última actualización. ~200+ GB/s (2.3x LPDDR5X). LPDDR5X-PIM, en cambio, ya es silicio validado desde agosto de 2026—es probable que llegue a dispositivos de borde antes que LPDDR6.' },
          { q: '¿Por qué no se puede poner HBM en un teléfono?', a: 'Restricciones físicas: los stacks HBM tienen 2+ pulgadas de altura. El consumo de energía de HBM (~100+ W) acaba con la duración de la batería. LPDDR5X es película delgada, 5–10 W. Esto no ha cambiado con HBM4/HBM4E—las nuevas generaciones son más rápidas pero no más pequeñas ni de menor consumo.' },
          { q: '¿LPDDR5X-PIM cerrará la brecha con HBM?', a: 'Parcialmente, y ahora está medido, no proyectado. Samsung mostró un chip real en Hot Chips 2026 ejecutando Llama-3.1-8B a 81.3 tokens/seg frente a 27.0 tokens/seg en LPDDR5X estándar—una ganancia de 3.01x. Sigue quedando lejos de la brecha bruta de 14x con HBM3E, pero es una mejora real mayor que la estimación de "~50%" que esta página citaba antes.' },
          { q: '¿Es relevante el cálculo FLOPS para la IA en dispositivo?', a: 'No tanto como se piensa. La decodificación está limitada por memoria, no por cálculo. Una unidad de cálculo más lenta con memoria más rápida vence a una más rápida con memoria más lenta.' },
          { q: '¿Puedo ejecutar un modelo 70B en el Galaxy S26?', a: 'Técnicamente sí; prácticamente no. 70B Q4 (~35 GB) da 85.6 GB/s ÷ 35 GB = ~2 tokens/seg. Eso es 1 token por segundo—inutilizable para cualquier tarea interactiva. Quédese con 7B o menos.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Ejecutar IA Local en Galaxy S26: IA en Dispositivo Explicada (2026)](/es/local-llms/galaxy-s26-local-ai-on-device-2026) -- IA en dispositivo en el Galaxy S26',
          '[MRAM e Informática en Memoria: ¿El próximo salto para IA en dispositivo?](/es/local-llms/mram-in-memory-computing-local-ai-2026) -- MRAM e informática en memoria para IA',
          '[¿Cuánta VRAM necesitas para LLMs locales?](/es/local-llms/how-much-vram-local-llm) -- cuánta VRAM necesitas para LLMs locales',
          '[Guía de hardware para LLM locales 2026](/es/local-llms/local-llm-hardware-guide-2026) -- guía de hardware para LLM locales 2026',
          '[LLMs locales en móviles 2026: iPhone 16 Pro, iPad M4 y Snapdragon X](/es/local-llms/mobile-local-llms) -- LLMs locales en móvil',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'IA en Dispositivo y Memoria: Por Qué HBM Determina la Velocidad de IA Local (2026)',
      'description': 'HBM vs LPDDR5X: El ancho de banda de memoria es el cuello de botella de IA. SK Hynix HBM4 vs Samsung LPDDR5X-PIM (3x más rápido, validado ago. 2026). Por qué la IA en dispositivo es lenta y la IA en centro de datos es rápida.',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'es',
      'url': 'https://www.promptquorum.com/es/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': 'El ancho de banda de memoria, no TOPS de cálculo, es el cuello de botella para la inferencia de IA. Galaxy S26 tiene LPDDR5X a 85.6 GB/s; los centros de datos usan HBM3E a 1.229 TB/s—una diferencia de 14x. Samsung validó LPDDR5X-PIM en Hot Chips 2026, triplicando el rendimiento en dispositivo.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'es',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Por qué el ancho de banda de memoria es el cuello de botella para la inferencia de IA?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La fase de decodificación requiere cargar todo el modelo en memoria para una pasada hacia adelante. La memoria no puede alimentar datos lo suficientemente rápido a las unidades de cálculo. Los FLOPS son rápidos; el ancho de banda es lento.'
          }
        }
      ]
    }
  },
  de: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-de.webp',
    title: 'On-Device KI und Speicher: Warum HBM die Geschwindigkeit lokaler KI antreibt (2026)',
    seoTitle: 'HBM vs LPDDR5X-Speicher: On-Device KI-Bandbreite erklärt',
    intro: 'Speicherbandbreite, nicht Rechen-TOPS, ist der Engpass für KI-Inferenz. Das Galaxy S26 (Exynos 2600) hat LPDDR5X mit 85,6 GB/s; Rechenzentren verwenden HBM3E mit 1.229 TB/s—ein 14-facher Unterschied. Diese Lücke erklärt, warum 7B-Parameter-Modelle auf Telefonen mit 8–15 Tokens/Sekunde laufen, Rechenzentrum-GPUs aber 100+ Tokens/Sekunde verarbeiten. Samsung und SK Hynix sind die Schlüsselbeteiligten: SK Hynix dominiert HBM (62% Marktanteil), während Samsung LPDDR5X-PIM (Processing-In-Memory) voranbringt. Dieser Leitfaden erklärt den Speicherengpass, die Rolle von Samsung und SK Hynix und was es für On-Device KI 2026 und darüber hinaus bedeutet.',
    metaDescription: 'HBM vs LPDDR5X: Speicherbandbreite ist der KI-Engpass. SK Hynix HBM3E vs Samsung LPDDR5X-PIM. Warum On-Device KI langsam und Rechenzentrum-KI schnell ist.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '11 Min Lesedauer',
    educationalLevel: 'Intermediate',
    audience: 'KI-Ingenieure, Hardware-Designer, alle, die neugierig sind, warum lokale KI langsamer als Cloud KI ist',
    primaryTerm: 'HBM-Speicher On-Device KI',
    targetKeywords: ['hbm speicher', 'hbm3e bandbreite', 'lpddr5x bandbreite', 'speicherbandbreite engpass', 'on device ki geschwindigkeit', 'sk hynix', 'samsung hbm'],
    leadAnswerBlock: '**Die Dekodierungsphase der LLM-Inferenz ist bandbreitenbegrenzt, nicht rechenbegrenzt: Tokens/Sekunde ≈ Speicherbandbreite / Modellgröße_in_Bytes. Galaxy S26 LPDDR5X (85,6 GB/s) begrenzt ein 7B-Modell auf ~24 Tokens/Sekunde maximum. Rechenzentrum H100 GPU HBM3E (1.229 TB/s) erreicht 100+ Tokens/Sekunde — HBM4, jetzt in Massenproduktion (SK Hynix 16-Layer, >2 TB/s; Samsung 12-Layer-HBM4E-Samples, 3,6 TB/s), treibt das weiter voran. SK Hynix führt weiterhin beim HBM-Volumen (je nach Quartal 2026 etwa 50–62% Marktanteil); Samsung antwortete stattdessen auf der Telefon-Seite: auf der Hot Chips 2026 (25. August 2026) zeigte das Unternehmen einen pinkompatiblen LPDDR5X-PIM-Chip, der Llama-3.1-8B mit 81,3 Tokens/Sekunde statt 27,0 Tokens/Sekunde auf Standard-LPDDR5X ausführte — ein gemessener, realer 3,01x-Gewinn, keine Laborprojektion. Dieser Speicherengpass bleibt der Grundgrund, warum lokale KI hinter Cloud-KI zurückbleibt, aber die Lücke auf Telefonen ist gerade spürbar kleiner geworden als noch vor einem Quartal.',
    quickAnswerTop: {
      de: {
        question: 'Warum ist On-Device KI viel langsamer als Cloud KI?',
        answer: 'Speicherbandbreite. Dekodier-Phase ist bandbreitenbegrenzt (nicht rechenbegrenzt). On-Device (LPDDR5X 85,6 GB/s) vs Datenzentrum (HBM3E 1.229 TB/s) = 14x Unterschied. Das erklärt, warum Galaxy S26 ~15 tokens/sec macht vs Datenzentrum GPU >100 tokens/sec. Sie können HBM nicht in ein Telefon passen, aber Samsungs im August 2026 validiertes LPDDR5X-PIM verkleinert die Lücke, indem es im Speicherchip selbst rechnet statt HBM-Bandbreite nachzuahmen.',
        bullets: [
          'tokens/sec = memory_bandwidth / model_size_in_bytes (vereinfacht, wahr für Dekodier-Phase)',
          '7B Modell FP16 (14 GB): LPDDR5X 85,6 GB/s ÷ 14 GB = ~6 tokens/sec (Theorie); Q4 (3,5 GB) = ~24 tokens/sec',
          'Datenzentrum H100 HBM3E (1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 tokens/sec (Theorie)',
          'SK Hynix führt bei HBM-Lieferungen (je nach Quartal 2026 etwa 50–62% Marktanteil), liefert Nvidia H100, H200, B200 GPUs',
          'Samsung lieferte im Mai 2026 12-Layer-HBM4E-Samples mit 3,6 TB/s pro Stack und zeigte auf der Hot Chips 2026 (25. August 2026) LPDDR5X-PIM: Llama-3.1-8B lief mit 81,3 tokens/sec statt 27,0 tokens/sec auf Standard-LPDDR5X — ein gemessener 3,01x-Gewinn',
          'HBM4 (>2 TB/s) ist jetzt in Massenproduktion: SK Hynix zielt auf die 16-Layer-Variante für Q3 2026, Samsung samplet bereits 12-Layer-HBM4E; beide bleiben für Telefone irrelevant—Kosten+Leistung verboten'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: 'Wichtige Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Warum Speicherbandbreite die KI-Geschwindigkeit bestimmt', anchor: '#why-memory-matters' },
      { label: 'Speicherbandbreite im Vergleich: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: 'Samsung und SK Hynix: Wer macht was', anchor: '#samsung-sk-hynix-roles' },
      { label: 'On-Device-KI-Grenzen beim Galaxy S26', anchor: '#on-device-limits' },
      { label: 'Rechenzentrum vs. Telefon: Die 14x-Bandbreitenlücke', anchor: '#datacenter-vs-phone' },
      { label: 'Speicher-Roadmap: HBM4 und LPDDR6', anchor: '#future-roadmap' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Speicherbandbreite, nicht TOPS, ist der Engpass in der Dekodierungsphase der KI-Inferenz. Formel: Tokens/Sekunde ≈ Speicherbandbreite / Modellgröße_in_Bytes. Ein 7B-Modell in FP16 (14 GB) bei LPDDR5X 85,6 GB/s = ~6 Tokens/Sekunde. Dasselbe Modell quantisiert Q4 (3,5 GB) = ~24 Tokens/Sekunde. Rechenzentrum H100 HBM3E (1.229 TB/s) = ~88 Tokens/Sekunde.',
          'SK Hynix führt bei HBM-Lieferungen (je nach Quartal 2026 etwa 50–62% Marktanteil) und beliefert Nvidia H100, H200, B200. HBM4 (>2 TB/s) ist bereits in Massenproduktion: SK Hynix zielt auf seine 16-Layer-Variante mit 48 GB für Q3 2026, während Samsung im Mai 2026 als Erster der Branche 12-Layer-HBM4E-Samples mit 3,6 TB/s pro Stack auslieferte — bei dieser konkreten Kennzahl vor SK Hynix.',
          'Samsung validierte LPDDR5X-PIM (Processing-In-Memory) auf der Hot Chips 2026 (25. August 2026) als reales, getestetes Silizium, nicht als Laborkonzept. Auf einem Edge-KI-Beschleuniger-SoC lief Llama-3.1-8B mit 81,3 Tokens/Sekunde statt 27,0 Tokens/Sekunde auf Standard-LPDDR5X: eine gemessene Verbesserung um 3,01x, mit bis zu 8x interner Bandbreite im PIM-Modus. Der Chip ist pinkompatibel mit Standard-LPDDR5X (gleiches 561-Ball-Package), also ein Drop-in-Upgrade.',
          'On-Device-KI wird für große Modelle weiterhin langsamer als Cloud-KI sein — HBM passt nicht in ein Telefon —, aber die Lücke auf Telefonen ist gerade kleiner geworden. LPDDR5X-PIM erreicht nicht die HBM-Bandbreite; es reduziert stattdessen Datenbewegung, weshalb der Durchsatzgewinn (3x) kleiner ist als die rohe Bandbreitenlücke (14x), aber für reale Workloads dennoch relevant.',
          'Exynos 2600 (Galaxy S26) wird weiterhin mit Standard-LPDDR5X ausgeliefert und erreicht ~8–15 Tokens/Sekunde realistisch für ein quantisiertes 7B-Modell. LPDDR5X-PIM ist validiert, aber noch nicht in einem ausgelieferten Telefon-SoC — erwarten Sie es zuerst in Edge-KI-Beschleunigern.',
          'Der Speicherbandbreiten-Engpass erklärt weiterhin, warum Fine-Tuning oder Distillation nicht helfen: Jeder Parameter muss bei jedem Forward-Pass in den Speicher geladen werden. Kleinere Modelle helfen (3B, 1B), und Quantisierung bleibt die Basislösung für Telefone — PIM ist ein zusätzlicher Hebel, kein Ersatz dafür.'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: 'Warum Speicherbandbreite die KI-Geschwindigkeit bestimmt',
        content: [
          'Während der Dekodierungsphase der LLM-Inferenz muss die GPU/NPU das gesamte Modell in den Speicher laden, pro Token einen Forward-Pass durchführen und die Ausgabe schreiben. Der Engpass: Wie schnell können Parameter an die Recheneinheiten geliefert werden? Das ist Speicherbandbreite, nicht Rechen-TOPS.',
          'Vereinfachte Formel: Tokens/Sekunde = Speicherbandbreite / (Modellgröße_in_Bytes × Bytes_pro_Präzision). Bei FP16 (2 Bytes pro Parameter) ist ein 7B-Modell = 14 GB. Bei LPDDR5X 85,6 GB/s: 85,6 GB/s ÷ 14 GB = ~6 Tokens/Sekunde theoretisches Maximum. In der Praxis 3–5 Tokens/Sekunde durch Rechen- und Cache-Overhead.',
          'Quantisierung verändert die Gleichung drastisch. Q4 (4-Bit, 0,5 Bytes pro Parameter) verkleinert ein 7B-Modell auf 3,5 GB. 85,6 GB/s ÷ 3,5 GB = ~24 Tokens/Sekunde theoretisch. Real ~8–15 Tokens/Sekunde, eine 3–4-fache Verbesserung.',
          'Rechenzentrum-H100 mit HBM3E (1.229 TB/s) kann für dasselbe Modell 100+ Tokens/Sekunde halten, weil HBM 14x schneller ist. Deshalb laufen Frontier-Modelle (70B, 405B) nur in Rechenzentren—man braucht die HBM-Bandbreite.',
          'Inferenz unterscheidet sich vom Training. Training ist rechenbegrenzt (1000+ Pässe zur Gewichtsaktualisierung). Inferenz (besonders bei Prompt-Caching) ist ein einzelner Forward-Pass, rein speicherbandbreitenbegrenzt.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LLM-Dekodierung ist speicherbandbreitenbegrenzt: Tokens/Sekunde = Bandbreite / Modellgröße. On-Device 85,6 GB/s vs Rechenzentrum 1.229 TB/s = 14x-Lücke.' },
          { type: 'plain-terms', text: 'Denken Sie an ein Fließband: Rechnen sind die Arbeiter, Speicher ist die Lieferkette. Mehr Arbeiter (mehr FLOPS) hilft nicht, wenn Nachschub (Daten) gleich langsam ankommt. Telefonen fehlt eine "schnelle Lieferkette" (HBM).' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: 'Speicherbandbreite im Vergleich: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-de.svg',
        imageCaption: 'Speicherbandbreite nach Typ: LPDDR5X 85,6 GB/s (Telefone), LPDDR5X-PIM (validiert Aug. 2026, 3,01x Tokens/Sekunde) vs HBM2E 460 GB/s, HBM3 819 GB/s, HBM3E 1.229 TB/s (Nvidia H100/H200/B200), und HBM4/HBM4E jetzt bei 2–3,6 TB/s pro Stack. SK Hynix führt bei HBM-Lieferungen (~50–62%).',
        columns: ['Speichertyp', 'Bandbreite', 'Verwendet In', 'Tokens/Sek (7B FP16)', 'Tokens/Sek (7B Q4)'],
        rows: [
          { 'Speichertyp': 'LPDDR5X 10,7 Gbps', 'Bandbreite': '85,6 GB/s (x64-Bus)', 'Verwendet In': 'Galaxy S26, Snapdragon 8 Elite Gen 5', 'Tokens/Sek (7B FP16)': '~6 Tokens/Sek (Theorie); ~3–5 real', 'Tokens/Sek (7B Q4)': '~24 Tokens/Sek (Theorie); ~8–15 real' },
          { 'Speichertyp': 'HBM2E', 'Bandbreite': '~460 GB/s pro Stack', 'Verwendet In': 'Ältere GPUs (P100, V100)', 'Tokens/Sek (7B FP16)': '~33 Tokens/Sek (Theorie)', 'Tokens/Sek (7B Q4)': '~131 Tokens/Sek (Theorie)' },
          { 'Speichertyp': 'HBM3 19,2 Gbps', 'Bandbreite': '~819 GB/s pro Stack', 'Verwendet In': 'Nvidia A100, 80GB-Variante', 'Tokens/Sek (7B FP16)': '~59 Tokens/Sek (Theorie)', 'Tokens/Sek (7B Q4)': '~234 Tokens/Sek (Theorie)' },
          { 'Speichertyp': 'HBM3E 21,4 Gbps', 'Bandbreite': '1,18–1,229 TB/s pro Stack', 'Verwendet In': 'Nvidia H100, H200, B200', 'Tokens/Sek (7B FP16)': '~88 Tokens/Sek (Theorie); ~60–80 real', 'Tokens/Sek (7B Q4)': '~352 Tokens/Sek (Theorie); ~200+ real' },
          { 'Speichertyp': 'HBM4 (SK Hynix, 16-Layer)', 'Bandbreite': '>2 TB/s pro Stack, 48 GB', 'Verwendet In': 'Nvidia-GPUs (Massenprod. Q3 2026)', 'Tokens/Sek (7B FP16)': '~143 Tokens/Sek (Theorie)', 'Tokens/Sek (7B Q4)': '~571 Tokens/Sek (Theorie)' },
          { 'Speichertyp': 'HBM4E (Samsung, 12-Layer)', 'Bandbreite': '3,6 TB/s pro Stack', 'Verwendet In': 'Samples ausgeliefert Mai 2026', 'Tokens/Sek (7B FP16)': '~257 Tokens/Sek (Theorie)', 'Tokens/Sek (7B Q4)': '~1.029 Tokens/Sek (Theorie)' },
          { 'Speichertyp': 'LPDDR5X-PIM (Samsung, validiert)', 'Bandbreite': '85,6 GB/s + bis zu 8x intern (PIM-Modus)', 'Verwendet In': 'Hot Chips 2026, pinkompatibel', 'Tokens/Sek (7B FP16)': 'Nicht gemessen für 7B FP16', 'Tokens/Sek (7B Q4)': 'Llama-3.1-8B: 81,3 vs 27,0 Tok/Sek (3,01x)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: 'Samsung und SK Hynix: Wer macht was',
        content: [
          '**SK Hynix — Führend beim HBM-Volumen**: SK führt bei HBM-Lieferungen, mit einem berichteten Anteil von etwa 50–62% je nach Quartal 2026 und Messmethode. SK beliefert Nvidia mit HBM3E für H100-, H200- und B200-GPUs und zielt auf Massenproduktion seines 16-Layer-HBM4 (48 GB, >2 TB/s) für Q3 2026.',
          '**Samsung — HBM4E-Geschwindigkeitsvorsprung, LPDDR5X-PIM validiert**: Samsung lieferte am 29. Mai 2026 als Erster der Branche 12-Layer-HBM4E-Samples mit 3,6 TB/s pro Stack aus — bei dieser Kennzahl vor der HBM4-Spezifikation von SK Hynix, obwohl SK weiterhin mehr Gesamtvolumen ausliefert. Auf der Telefon-Seite präsentierte Samsung LPDDR5X-PIM auf der Hot Chips 2026 (25. August 2026) als validiertes, getestetes Silizium: ein Edge-KI-Beschleuniger-SoC führte Llama-3.1-8B mit 81,3 Tokens/Sekunde statt 27,0 Tokens/Sekunde auf Standard-LPDDR5X aus (3,01x), mit bis zu 8x interner Bandbreite im PIM-Modus. Der Chip nutzt dasselbe 561-Ball-Package wie Standard-LPDDR5X, also ein direkter Ersatz, kein neuer Formfaktor.',
          '**Wettbewerbsdynamik**: Samsung sampelt weiterhin HBM (HBM3E, jetzt HBM4E), lag aber historisch bei Ausbeute und Gesamtvolumen hinter SK. Samsungs Positionierung für LPDDR5X-PIM ist explizit: eine Ergänzung zu HBM, kein Ersatz — mit Fokus auf Smartphones, KI-PCs und Edge-Beschleuniger, wo Kosten, Stromverbrauch und Packaging-Komplexität von HBM zu hoch sind.',
          '**Beide Unternehmen beliefern Nvidia**: SK Hynix und Samsung liefern HBM für Nvidia-GPU-VRAM; Standard-DRAM (LPDDR/DDR) deckt Host-/CPU-Speicher ab. Keines liefert das Rechenwerk (Nvidia entwirft die GPU-Kerne).',
          '**Zeitplan**: HBM4 ist jetzt in Massenproduktion (SK Hynix zielt auf Q3 2026 für seinen 16-Layer-Teil; Samsung sampelt bereits 12-Layer-HBM4E). LPDDR5X-PIM ist seit August 2026 validiertes Silizium, deutlich früher als die zuletzt genannte Produktionsschätzung von 2027-2028. LPDDR6/LPDDR6X-PIM ist Samsungs nächstes Ziel, mit einer ersten JEDEC-Spezifikation, die für Ende 2026 erhofft wird.'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'On-Device-KI-Grenzen beim Galaxy S26',
        content: [
          'Das Galaxy S26 Exynos 2600 mit LPDDR5X 85,6 GB/s definiert die praktische Obergrenze für On-Device-LLM-Inferenz. Ein auf Q4 quantisiertes 7B-Modell erreicht ~8–15 Tokens/Sekunde realistische Leistung. Das eignet sich für latenzsensible Aufgaben, ist aber für lange Gespräche unpraktisch.',
          'Modellgrößengrenzen: Ein 7B-Modell ist praktikabel. Ein 13B-Modell bei Q4 (~6,5 GB) erreicht 85,6 GB/s ÷ 6,5 GB = ~13 Tokens/Sekunde, kaum eine Verbesserung. Ein 70B-Modell bei Q4 (~35 GB) erreicht 85,6 GB/s ÷ 35 GB = ~2 Tokens/Sekunde—unbrauchbar.',
          'Quantisierung ist essenziell: FP16 (2 Bytes/Parameter) ist unpraktisch. Q4 (0,5 Bytes/Parameter) ist der Sweet Spot—4x kleinere Modelle mit akzeptablem Qualitätsverlust.',
          'Geschwindigkeit-vs-Qualität-Kompromiss: 7B Q4 ist ~8–15 Tokens/Sekunde. 3B Q4 ist ~24–36 Tokens/Sekunde. 1B Q4 ist ~60+ Tokens/Sekunde.',
          'Praktische Anwendungsfälle: Autovervollständigung, Echtzeit-Code-Vorschläge, On-Device-Transkription, lokale Zusammenfassung. Nicht praktikabel: lange Gespräche, komplexes Reasoning, Multi-Turn-Dialog ohne Caching.',
          'Der Engpass ist Bandbreite, nicht Rechenleistung oder Gewichtsgröße. LPDDR5X-PIM hilft, indem es die nötige Datenbewegung reduziert, beseitigt aber nicht die grundlegende Bandbreitengrenze.'
        ],
        items: [
          'Nutzen Sie die LPDDR5X-85,6-GB/s-Bandbreite, um maximale Tokens/Sekunde zu schätzen: teilen Sie durch die Modellgröße in GB',
          '7B Q4 (3,5 GB): ~24 Tokens/Sekunde Theorie; ~8–15 real (praktikabel)',
          '13B Q4 (6,5 GB): ~13 Tokens/Sekunde Theorie; ~4–8 real (langsam)',
          '1B Q4 (~500 MB): ~171 Tokens/Sekunde Theorie; ~50–100 real (schnell)',
          'Quantisierung ist Pflicht: Q4 ist die Basis für nutzbare On-Device-Modelle',
          'LPDDR5X-PIM (validiert, noch nicht im Galaxy S26) könnte bei Ankunft in einem Telefon-SoC ~3x Durchsatz hinzufügen'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: 'Rechenzentrum vs. Telefon: Die 14x-Bandbreitenlücke',
        image: '/images/hbm-datacenter-vs-phone-gap-de.svg',
        imageCaption: 'Telefon (LPDDR5X 85,6 GB/s) vs Rechenzentrum-GPU (HBM3E 1.229 TB/s) für dasselbe 7B-Q4-Modell (3,5 GB): ~8-15 Tok/s real On-Device vs ~200+ Tok/s im Rechenzentrum, eine 14x-Bandbreitenlücke.',
        content: [
          'Eine Nvidia H100 GPU mit HBM3E (1.229 TB/s) ist bei der Inferenz-Durchsatzleistung 14x schneller als ein Galaxy S26 (LPDDR5X 85,6 GB/s). Diese Lücke liegt nicht an Rechen-FLOPS (beide sind schnell), sondern an reiner Speicherbandbreite.',
          'Warum die Lücke besteht: HBM ist physisch anders. LPDDR5X ist ein dünner Film neben der CPU (energieeffizient für Telefone). HBM ist ein Stapel von Speicherchips, direkt mit der GPU über Through-Silicon-Vias (TSVs) verbunden. HBM-Stacks sind 2+ Zoll hoch; unmöglich, in ein Telefon zu passen.',
          'Warum sie sich nicht schließen lässt: Telefone sind thermisch und energetisch begrenzt. HBM verbraucht erhebliche Leistung (~100+ W pro vollem Stack). LPDDR5X ~5–10 W. Man kann HBM-Bandbreite nicht physisch in ein Telefon packen, ohne die Akkulaufzeit zu zerstören.',
          'Konsequenz: On-Device-KI wird für große Modelle weiterhin langsamer sein als Cloud-KI. Kleinere Modelle, aggressive Quantisierung und cleveres Caching sind die Lösungen.',
          'Die Kehrseite: On-Device ist privat, offline-fähig, und latenzfrei für datenschutzsensible Aufgaben. Die 14x-Geschwindigkeitseinbuße ist der Preis der Privatsphäre.',
          'Update: Samsung validierte LPDDR5X-PIM auf der Hot Chips 2026 (25. August 2026) — 3,01x gemessener Durchsatzgewinn (27,0 → 81,3 Tokens/Sekunde bei Llama-3.1-8B) auf einem pinkompatiblen Chip, deutlich früher als der zuvor auf dieser Seite genannte Zeitplan von 2027-2028. LPDDR6 (weiterhin 2027-2028) zielt auf ~200 GB/s, ~6x langsamer als HBM3E. Zusammen verkleinern PIM jetzt und LPDDR6 später die Telefon-vs-Rechenzentrum-Lücke spürbar, ohne sie zu schließen — die rohe 14x-Bandbreitenlücke nähert sich in der Praxis eher 4-6x, sobald PIM in Telefon-SoCs ankommt.'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: 'Speicher-Roadmap: HBM4 und LPDDR6',
        content: [
          '**HBM4 / HBM4E (SK Hynix + Samsung, jetzt in Massenproduktion)**: >2 TB/s pro Stack für SK Hynix\' 16-Layer-HBM4 (Massenproduktion angestrebt Q3 2026); 3,6 TB/s pro Stack für Samsungs 12-Layer-HBM4E, seit Mai 2026 im Sampling. Kommt zuerst in Nvidias Next-Gen-GPUs. Für Telefone weiterhin irrelevant.',
          '**LPDDR5X-PIM (Samsung, validiert im August 2026)**: Processing-In-Memory integriert Rechenoperationen direkt in den DRAM-Die. Das bewegte sich von "in Entwicklung" zu "demonstriert, getestetes Silizium" auf der Hot Chips 2026: gemessener 3,01x-Inferenzgewinn (27,0 → 81,3 Tokens/Sekunde bei Llama-3.1-8B) mit bis zu 8x interner Bandbreite im PIM-Modus, auf einem pinkompatiblen Chip. Es wird die HBM-Bandbreite nicht erreichen, ist aber real und früher als die vorherige Schätzung von 2027-2028.',
          '**LPDDR6 / LPDDR6X-PIM (2027-2028)**: ~200+ GB/s geschätzt für reguläres LPDDR6 — etwa 2,3x LPDDR5X-Bandbreite. Für ein 7B-Q4-Modell: 200 GB/s ÷ 3,5 GB ≈ 57 Tokens/Sekunde theoretisch (hoch von 24), ~20–35 real. Samsung blickt bereits über LPDDR5X-PIM hinaus auf LPDDR6X-PIM und hofft auf eine erste JEDEC-Spezifikation noch 2026.',
          '**Realität**: Selbst mit LPDDR5X-PIM in Auslieferung und LPDDR6 auf der Roadmap werden Telefone für Inferenz weiterhin mehrfach langsamer sein als Rechenzentren — Samsung selbst positioniert PIM als Ergänzung zu HBM für kosten-/energiebegrenzte Geräte, nicht als Bandbreitenparität.',
          '**Für On-Device-KI, Ende 2026**: Exynos 2600 + Standard-LPDDR5X bleibt die Auslieferungsbasis für das Galaxy S26. LPDDR5X-PIM ist validiert, aber noch nicht in einem ausgelieferten Telefon-SoC—erwarten Sie, dass Edge-KI-Beschleuniger es zuerst erhalten.'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Wie hoch ist die Speicherbandbreite von LPDDR5X?', a: 'LPDDR5X liefert bei 10,7 Gbps auf einem x64-Bus 85,6 GB/s — die Speichergeschwindigkeit im Galaxy S26, Snapdragon 8 Elite Gen 5 und den meisten Flaggschiff-Handys von 2026. Das ist etwa 5,4- bis 14-mal langsamer als Rechenzentrums-HBM (von HBM2E mit 460 GB/s bis HBM4/HBM4E mit 2-3,6 TB/s pro Stack) — deshalb ist On-Device-KI-Inferenz bei gleicher Modellgröße deutlich langsamer als im Rechenzentrum. Samsungs im August 2026 validierte LPDDR5X-PIM-Variante schließt einen Teil dieser Lücke: In Samsungs eigener Hot-Chips-2026-Demonstration lief Llama-3.1-8B mit dem 3,01-Fachen der Tokens/Sekunde von Standard-LPDDR5X.' },
          { q: 'Warum ist Speicherbandbreite der Engpass für KI-Inferenz?', a: 'Weil die Dekodierungsphase (jeden Token erzeugen) das Laden des gesamten Modells in den Speicher für einen Forward-Pass erfordert. Die Recheneinheiten sind schnell fertig, aber der Speicher kann sie nicht schnell genug mit Daten versorgen.' },
          { q: 'Was ist die Tokens/Sekunde-Formel für On-Device-KI?', a: 'Vereinfacht: Tokens/Sekunde = Speicherbandbreite / (Modellgröße × Bytes_pro_Präzision). Für ein 7B-FP16-Modell (14 GB) bei 85,6 GB/s: 85,6 ÷ 14 = ~6 Tokens/Sekunde. Quantisiert Q4 (3,5 GB): 85,6 ÷ 3,5 = ~24 Tokens/Sekunde.' },
          { q: 'Dominiert SK Hynix den HBM-Markt?', a: 'SK Hynix führt bei HBM-Lieferungen, mit einem berichteten Anteil von 50–62% je nach Quartal 2026. Samsung hat einen Teil der Lücke geschlossen: Es lieferte im Mai 2026 12-Layer-HBM4E-Samples mit 3,6 TB/s aus, bei dieser Kennzahl vor SK Hynix\' HBM4-Spezifikation.' },
          { q: 'Kann Samsung SK Hynix bei HBM einholen?', a: 'Samsung ist näher dran als zuvor: Seine 12-Layer-HBM4E-Samples (3,6 TB/s, Mai 2026) übertreffen auf dem Papier die HBM4-Bandbreitenspezifikation von SK Hynix, obwohl SK weiterhin beim Gesamtvolumen führt. Bei Telefonen versucht Samsung gar nicht erst, die HBM-Bandbreite zu erreichen—stattdessen validierte es LPDDR5X-PIM.' },
          { q: 'Wann kommt LPDDR6?', a: 'Weiterhin geschätzt für 2027-2028 in der Galaxy-S27/S28-Ära, unverändert seit der letzten Aktualisierung. ~200+ GB/s (2,3x LPDDR5X). LPDDR5X-PIM hingegen ist bereits seit August 2026 validiertes Silizium—es wird wahrscheinlich vor LPDDR6 Edge-Geräte erreichen.' },
          { q: 'Warum kann man kein HBM in ein Telefon packen?', a: 'Physische Beschränkungen: HBM-Stacks sind 2+ Zoll hoch. Der HBM-Stromverbrauch (~100+ W) zerstört die Akkulaufzeit. LPDDR5X ist Dünnfilm, 5–10 W. Das hat sich mit HBM4/HBM4E nicht geändert—die neuen Generationen sind schneller, aber nicht kleiner oder sparsamer.' },
          { q: 'Wird LPDDR5X-PIM die Lücke zu HBM schließen?', a: 'Teilweise, und jetzt gemessen, nicht projiziert. Samsung zeigte auf der Hot Chips 2026 einen echten Chip, der Llama-3.1-8B mit 81,3 Tokens/Sekunde gegenüber 27,0 Tokens/Sekunde auf Standard-LPDDR5X ausführte—ein 3,01x-Gewinn. Das bleibt weit unter der rohen 14x-Lücke zu HBM3E, ist aber eine größere reale Verbesserung als die zuvor auf dieser Seite genannte "~50%"-Schätzung.' },
          { q: 'Ist FLOPS-Rechenleistung für On-Device-KI relevant?', a: 'Nicht so sehr wie gedacht. Dekodierung ist speicherbegrenzt, nicht rechenbegrenzt. Eine langsamere Recheneinheit mit schnellerem Speicher schlägt eine schnellere mit langsamerem Speicher.' },
          { q: 'Kann ich ein 70B-Modell auf dem Galaxy S26 ausführen?', a: 'Technisch ja; praktisch nein. 70B Q4 (~35 GB) ergibt 85,6 GB/s ÷ 35 GB = ~2 Tokens/Sekunde. Das ist 1 Token pro Sekunde—unbrauchbar für interaktive Aufgaben. Bleiben Sie bei 7B oder kleiner.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Galaxy S26 Lokale KI Leitfaden: Galaxy AI & NPU erklärt (2026)](/de/local-llms/galaxy-s26-local-ai-on-device-2026) -- On-Device-KI auf dem Galaxy S26',
          '[MRAM und In-Memory-Computing: Der nächste Sprung für On-Device-KI?](/de/local-llms/mram-in-memory-computing-local-ai-2026) -- MRAM und In-Memory-Computing für KI',
          '[Wie viel VRAM braucht man für lokale LLMs?](/de/local-llms/how-much-vram-local-llm) -- Wie viel VRAM für lokale LLMs benötigt wird',
          '[Lokale LLM Hardware Guide 2026](/de/local-llms/local-llm-hardware-guide-2026) -- lokaler LLM Hardware-Guide 2026',
          '[Mobile lokale LLMs 2026: iPhone 16 Pro, iPad M4 & Snapdragon X](/de/local-llms/mobile-local-llms) -- lokale LLMs auf Mobilgeräten',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'On-Device KI und Speicher: Warum HBM die Geschwindigkeit lokaler KI antreibt (2026)',
      'description': 'HBM vs LPDDR5X: Speicherbandbreite ist der KI-Engpass. SK Hynix HBM4 vs Samsung LPDDR5X-PIM (3x schneller, validiert Aug. 2026). Warum On-Device KI langsam und Rechenzentrum-KI schnell ist.',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'de',
      'url': 'https://www.promptquorum.com/de/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': 'Speicherbandbreite, nicht Rechen-TOPS, ist der Engpass für KI-Inferenz. Das Galaxy S26 hat LPDDR5X mit 85,6 GB/s; Rechenzentren verwenden HBM3E mit 1.229 TB/s—ein 14-facher Unterschied. Samsung validierte LPDDR5X-PIM auf der Hot Chips 2026 und verdreifachte damit den On-Device-Durchsatz.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'de',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Warum ist Speicherbandbreite der Engpass für KI-Inferenz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die Dekodierungsphase erfordert das Laden des gesamten Modells in den Speicher für einen Forward-Pass. Der Speicher kann Daten nicht schnell genug an die Recheneinheiten liefern. FLOPS sind schnell; Bandbreite ist langsam.'
          }
        }
      ]
    }
  },
  fr: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-fr.webp',
    title: 'IA Sur Appareil et Mémoire: Pourquoi HBM Détermine la Vitesse de l\'IA Locale (2026)',
    seoTitle: 'HBM vs LPDDR5X: Bande Passante IA Sur Appareil Expliquée',
    intro: 'La bande passante mémoire, pas les TOPS de calcul, est le goulot d\'étranglement pour l\'inférence IA. Le Galaxy S26 (Exynos 2600) a LPDDR5X à 85,6 GB/s; les data centers utilisent HBM3E à 1.229 TB/s—un écart de 14x. Cet écart explique pourquoi les modèles 7B paramètres s\'exécutent sur les téléphones à 8–15 tokens/sec mais les GPU du data center gèrent 100+ tokens/sec. Samsung et SK Hynix sont les acteurs clés: SK Hynix domine HBM (62% de part de marché), tandis que Samsung pousse LPDDR5X-PIM (Processing-In-Memory) pour réduire l\'écart. Ce guide explique le goulot d\'étranglement mémoire, le rôle de Samsung et SK Hynix, et ce que cela signifie pour l\'IA sur appareil en 2026 et au-delà.',
    metaDescription: 'HBM vs LPDDR5X: La bande passante mémoire est le goulot d\'étranglement IA. SK Hynix HBM3E vs Samsung LPDDR5X-PIM. Pourquoi l\'IA sur appareil est lente et l\'IA data center est rapide.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: 'Lecture 11 min',
    educationalLevel: 'Intermediate',
    audience: 'Ingénieurs IA, concepteurs matériel, quiconque curieux de savoir pourquoi l\'IA locale est plus lente que l\'IA cloud',
    primaryTerm: 'Mémoire HBM IA sur appareil',
    targetKeywords: ['mémoire hbm', 'bande passante hbm3e', 'bande passante lpddr5x', 'goulot d\'étranglement bande passante mémoire', 'vitesse ia sur appareil', 'sk hynix', 'samsung hbm'],
    leadAnswerBlock: '**La phase de décodage de l\'inférence LLM est limitée par la bande passante, pas par le calcul: tokens/sec ≈ bande_passante_mémoire / taille_modèle_en_octets. Galaxy S26 LPDDR5X (85,6 GB/s) limite un modèle 7B à ~24 tokens/sec maximum. GPU H100 data-center HBM3E (1.229 TB/s) atteint 100+ tokens/sec — le HBM4, désormais en production de masse (SK Hynix 16 couches, >2 TB/s; échantillons HBM4E Samsung 12 couches, 3,6 TB/s), pousse encore plus loin. SK Hynix reste en tête du volume HBM (environ 50–62% de part selon le trimestre 2026); Samsung a répondu côté téléphone: au Hot Chips 2026 (25 août 2026), l\'entreprise a montré une puce LPDDR5X-PIM compatible broche par broche faisant tourner Llama-3.1-8B à 81,3 tokens/sec contre 27,0 tokens/sec en LPDDR5X standard — un gain réel et mesuré de 3,01x, pas une projection de laboratoire. Ce goulot d\'étranglement mémoire reste la raison fondamentale pour laquelle l\'IA locale reste derrière l\'IA cloud, mais l\'écart sur téléphone vient de se réduire sensiblement par rapport au trimestre précédent.',
    quickAnswerTop: {
      fr: {
        question: 'Pourquoi l\'IA on-device est-elle beaucoup plus lente que l\'IA cloud?',
        answer: 'Bande passante mémoire. La phase de décodage est limitative en bande passante (non en calcul). On-device (LPDDR5X 85,6 GB/s) vs data-center (HBM3E 1.229 TB/s) = 14x écart. Cela explique pourquoi Galaxy S26 fait ~15 tokens/sec vs GPU data-center >100 tokens/sec. Vous ne pouvez pas mettre HBM dans un téléphone, mais le LPDDR5X-PIM de Samsung, validé en août 2026, réduit l\'écart en calculant à l\'intérieur même de la puce mémoire plutôt qu\'en cherchant à égaler la bande passante HBM.',
        bullets: [
          'tokens/sec = memory_bandwidth / model_size_in_bytes (simplifié, vrai pour phase décodage)',
          'Modèle 7B FP16 (14 GB): LPDDR5X 85,6 GB/s ÷ 14 GB = ~6 tokens/sec (théorie); Q4 (3,5 GB) = ~24 tokens/sec',
          'Data-center H100 HBM3E (1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 tokens/sec (théorie)',
          'SK Hynix domine les livraisons HBM (environ 50–62% de part de marché selon le trimestre 2026), fournit Nvidia H100, H200, B200 GPUs',
          'Samsung a livré des échantillons HBM4E 12 couches à 3,6 TB/s par stack en mai 2026, et a démontré au Hot Chips 2026 (25 août 2026) un LPDDR5X-PIM faisant tourner Llama-3.1-8B à 81,3 tokens/sec contre 27,0 tokens/sec en LPDDR5X standard — un gain mesuré de 3,01x',
          'HBM4 (>2 TB/s) est désormais en production de masse : SK Hynix vise sa variante 16 couches pour le T3 2026, Samsung échantillonne déjà le HBM4E 12 couches ; les deux restent hors de portée des téléphones—coût+puissance prohibitifs'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: 'Points Clés', anchor: '#key-takeaways' },
      { label: 'Pourquoi la Bande Passante Détermine la Vitesse IA', anchor: '#why-memory-matters' },
      { label: 'Comparaison de Bande Passante: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: 'Samsung et SK Hynix: Qui Fait Quoi', anchor: '#samsung-sk-hynix-roles' },
      { label: 'Limites de l\'IA Sur Appareil sur le Galaxy S26', anchor: '#on-device-limits' },
      { label: 'Data Center vs. Téléphone: L\'Écart de 14x', anchor: '#datacenter-vs-phone' },
      { label: 'Feuille de Route Mémoire: HBM4 et LPDDR6', anchor: '#future-roadmap' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures Recommandées', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'La bande passante mémoire, pas les TOPS, est le goulot d\'étranglement de la phase de décodage de l\'inférence IA. Formule: tokens/sec ≈ bande_passante_mémoire / taille_modèle_en_octets. Un modèle 7B en FP16 (14 GB) à LPDDR5X 85,6 GB/s = ~6 tokens/sec. Le même modèle quantifié Q4 (3,5 GB) = ~24 tokens/sec. Data-center H100 HBM3E (1.229 TB/s) = ~88 tokens/sec.',
          'SK Hynix domine les livraisons HBM (environ 50–62% de part selon le trimestre 2026) et fournit Nvidia H100, H200, B200. Le HBM4 (>2 TB/s) est désormais en production de masse: SK Hynix vise sa variante 16 couches de 48 GB pour le T3 2026, tandis que Samsung a livré en mai 2026 les premiers échantillons HBM4E 12 couches du secteur à 3,6 TB/s par stack — devançant SK Hynix sur cette métrique précise.',
          'Samsung a validé LPDDR5X-PIM (Processing-In-Memory) comme du silicium réel et testé au Hot Chips 2026 (25 août 2026), pas un concept de laboratoire. En faisant tourner Llama-3.1-8B sur un SoC accélérateur IA en périphérie, la puce a atteint 81,3 tokens/sec contre 27,0 tokens/sec en LPDDR5X standard: une amélioration mesurée de 3,01x, avec jusqu\'à 8x de bande passante interne en mode PIM. La puce est compatible broche par broche avec le LPDDR5X standard (même boîtier 561 billes), donc une mise à niveau directe.',
          'L\'IA sur appareil restera plus lente que l\'IA cloud pour les gros modèles — impossible de mettre du HBM dans un téléphone — mais l\'écart sur téléphone vient de se réduire. LPDDR5X-PIM n\'égale pas la bande passante du HBM; il réduit le mouvement de données, d\'où un gain de débit (3x) plus petit que l\'écart de bande passante brut (14x) mais tout de même significatif.',
          'L\'Exynos 2600 (Galaxy S26) est toujours livré avec du LPDDR5X standard, atteignant ~8–15 tokens/sec réalistes pour un modèle 7B quantifié. LPDDR5X-PIM est validé mais pas encore dans un SoC de téléphone commercialisé — attendez-vous à le voir d\'abord dans des accélérateurs IA en périphérie.',
          'Le goulot d\'étranglement de bande passante mémoire explique toujours pourquoi le fine-tuning ou la distillation n\'aident pas: chaque paramètre doit encore être chargé en mémoire à chaque passe. Les modèles plus petits aident (3B, 1B), et la quantification reste la solution de base pour les téléphones — PIM est un levier supplémentaire, pas un remplacement.'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: 'Pourquoi la Bande Passante Mémoire Détermine la Vitesse IA',
        content: [
          'Pendant la phase de décodage de l\'inférence LLM, le GPU/NPU doit charger le modèle entier en mémoire, effectuer une passe avant par token, et écrire la sortie. Le goulot d\'étranglement: à quelle vitesse peut-on alimenter les unités de calcul en paramètres? C\'est la bande passante mémoire, pas les TOPS de calcul.',
          'Formule simplifiée: tokens/sec = bande_passante_mémoire / (taille_modèle_en_octets × octets_par_précision). Pour FP16 (2 octets par paramètre), un modèle 7B = 14 GB. À LPDDR5X 85,6 GB/s: 85,6 GB/s ÷ 14 GB = ~6 tokens/sec maximum théorique. En pratique, 3–5 tokens/sec en raison du calcul et du cache.',
          'La quantification change radicalement l\'équation. Q4 (4 bits, 0,5 octet par paramètre) réduit un modèle 7B à 3,5 GB. 85,6 GB/s ÷ 3,5 GB = ~24 tokens/sec théoriques. En conditions réelles ~8–15 tokens/sec, une amélioration de 3–4x.',
          'Le data-center H100 avec HBM3E (1.229 TB/s) peut soutenir 100+ tokens/sec pour le même modèle, car HBM est 14x plus rapide. C\'est pourquoi les modèles de pointe (70B, 405B) ne tournent qu\'en data center—il faut la bande passante HBM.',
          'L\'inférence diffère de l\'entraînement. L\'entraînement est limité par le calcul (1000+ passes pour mettre à jour les poids). L\'inférence (surtout avec cache de prompt) est une seule passe avant, purement limitée par la bande passante mémoire.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Le décodage LLM est limité par la bande passante mémoire: tokens/sec = bande passante / taille du modèle. Sur appareil 85,6 GB/s vs data-center 1.229 TB/s = écart de 14x.' },
          { type: 'plain-terms', text: 'Pensez à une chaîne de montage: le calcul est les ouvriers, la mémoire est la chaîne d\'approvisionnement. Plus d\'ouvriers (plus de FLOPS) n\'aide pas si les fournitures (données) arrivent au même rythme. Les téléphones manquent d\'une "chaîne d\'approvisionnement rapide" (HBM).' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: 'Comparaison de Bande Passante Mémoire: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-fr.svg',
        imageCaption: 'Bande passante mémoire par type: LPDDR5X 85,6 GB/s (téléphones), LPDDR5X-PIM (validé août 2026, 3,01x tokens/sec) vs HBM2E 460 GB/s, HBM3 819 GB/s, HBM3E 1.229 TB/s (Nvidia H100/H200/B200), et HBM4/HBM4E désormais à 2–3,6 TB/s par stack. SK Hynix domine les livraisons HBM (~50–62%).',
        columns: ['Type de Mémoire', 'Bande Passante', 'Utilisé Dans', 'Tokens/sec (7B FP16)', 'Tokens/sec (7B Q4)'],
        rows: [
          { 'Type de Mémoire': 'LPDDR5X 10,7 Gbps', 'Bande Passante': '85,6 GB/s (bus x64)', 'Utilisé Dans': 'Galaxy S26, Snapdragon 8 Elite Gen 5', 'Tokens/sec (7B FP16)': '~6 tokens/sec (théorie); ~3–5 réel', 'Tokens/sec (7B Q4)': '~24 tokens/sec (théorie); ~8–15 réel' },
          { 'Type de Mémoire': 'HBM2E', 'Bande Passante': '~460 GB/s par stack', 'Utilisé Dans': 'GPU anciens (P100, V100)', 'Tokens/sec (7B FP16)': '~33 tokens/sec (théorie)', 'Tokens/sec (7B Q4)': '~131 tokens/sec (théorie)' },
          { 'Type de Mémoire': 'HBM3 19,2 Gbps', 'Bande Passante': '~819 GB/s par stack', 'Utilisé Dans': 'Nvidia A100, variante 80GB', 'Tokens/sec (7B FP16)': '~59 tokens/sec (théorie)', 'Tokens/sec (7B Q4)': '~234 tokens/sec (théorie)' },
          { 'Type de Mémoire': 'HBM3E 21,4 Gbps', 'Bande Passante': '1,18–1,229 TB/s par stack', 'Utilisé Dans': 'Nvidia H100, H200, B200', 'Tokens/sec (7B FP16)': '~88 tokens/sec (théorie); ~60–80 réel', 'Tokens/sec (7B Q4)': '~352 tokens/sec (théorie); ~200+ réel' },
          { 'Type de Mémoire': 'HBM4 (SK Hynix, 16 couches)', 'Bande Passante': '>2 TB/s par stack, 48 GB', 'Utilisé Dans': 'GPU Nvidia (prod. masse T3 2026)', 'Tokens/sec (7B FP16)': '~143 tokens/sec (théorie)', 'Tokens/sec (7B Q4)': '~571 tokens/sec (théorie)' },
          { 'Type de Mémoire': 'HBM4E (Samsung, 12 couches)', 'Bande Passante': '3,6 TB/s par stack', 'Utilisé Dans': 'Échantillons livrés mai 2026', 'Tokens/sec (7B FP16)': '~257 tokens/sec (théorie)', 'Tokens/sec (7B Q4)': '~1 029 tokens/sec (théorie)' },
          { 'Type de Mémoire': 'LPDDR5X-PIM (Samsung, validé)', 'Bande Passante': '85,6 GB/s + jusqu\'à 8x interne (mode PIM)', 'Utilisé Dans': 'Hot Chips 2026, compatible broches', 'Tokens/sec (7B FP16)': 'Non mesuré pour 7B FP16', 'Tokens/sec (7B Q4)': 'Llama-3.1-8B: 81,3 vs 27,0 tok/sec (3,01x)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: 'Samsung et SK Hynix: Qui Fait Quoi',
        content: [
          '**SK Hynix — Leader en Volume HBM**: SK domine les livraisons HBM, avec une part rapportée d\'environ 50–62% selon le trimestre 2026 et la méthode de mesure. SK fournit HBM3E à Nvidia pour les GPU H100, H200 et B200, et vise la production de masse de son HBM4 16 couches (48 GB, >2 TB/s) pour le T3 2026.',
          '**Samsung — Avance de Vitesse HBM4E, LPDDR5X-PIM Validé**: Samsung a livré le 29 mai 2026 les premiers échantillons HBM4E 12 couches du secteur, à 3,6 TB/s par stack — devançant la spécification HBM4 de SK Hynix sur cette métrique, même si SK reste en tête sur le volume total. Côté téléphone, Samsung a présenté LPDDR5X-PIM au Hot Chips 2026 (25 août 2026) comme du silicium validé et testé: un SoC accélérateur IA en périphérie a fait tourner Llama-3.1-8B à 81,3 tokens/sec contre 27,0 tokens/sec en LPDDR5X standard (3,01x), avec jusqu\'à 8x de bande passante interne en mode PIM. La puce utilise le même boîtier 561 billes que le LPDDR5X standard, donc un remplacement direct.',
          '**Dynamique Concurrentielle**: Samsung continue d\'échantillonner du HBM (HBM3E, maintenant HBM4E) mais a historiquement pris du retard sur SK en rendement et en volume total. Le positionnement de Samsung pour LPDDR5X-PIM est explicite: un complément au HBM, pas un remplacement — ciblant smartphones, PC IA et accélérateurs en périphérie où le coût, la consommation et la complexité du HBM sont prohibitifs.',
          '**Les deux entreprises fournissent Nvidia**: SK Hynix et Samsung fournissent tous deux du HBM pour la VRAM des GPU Nvidia; la DRAM standard (LPDDR/DDR) couvre la mémoire hôte/CPU. Aucune ne fournit le calcul (Nvidia conçoit les cœurs GPU).',
          '**Calendrier**: Le HBM4 est en production de masse maintenant (SK Hynix vise le T3 2026 pour sa partie 16 couches; Samsung échantillonne déjà du HBM4E 12 couches). LPDDR5X-PIM est du silicium validé depuis août 2026, en avance sur l\'estimation de production 2027-2028 donnée lors de la dernière mise à jour. LPDDR6/LPDDR6X-PIM est la prochaine cible de Samsung, avec une spécification JEDEC initiale espérée fin 2026.'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'Limites de l\'IA Sur Appareil sur le Galaxy S26',
        content: [
          'Le Galaxy S26 Exynos 2600 avec LPDDR5X 85,6 GB/s définit le plafond pratique pour l\'inférence LLM sur appareil. Un modèle 7B quantifié à Q4 atteint ~8–15 tokens/sec de performance réaliste. Cela convient aux tâches sensibles à la latence mais reste peu pratique pour de longues conversations.',
          'Limites de taille de modèle: un modèle 7B est pratique. Un modèle 13B à Q4 (~6,5 GB) atteint 85,6 GB/s ÷ 6,5 GB = ~13 tokens/sec, à peine une amélioration. Un modèle 70B à Q4 (~35 GB) atteint 85,6 GB/s ÷ 35 GB = ~2 tokens/sec—inutilisable.',
          'La quantification est essentielle: FP16 (2 octets/paramètre) est peu pratique. Q4 (0,5 octet/paramètre) est le point idéal—modèles 4x plus petits avec une perte de qualité acceptable.',
          'Compromis vitesse vs qualité: 7B Q4 est ~8–15 tokens/sec. 3B Q4 est ~24–36 tokens/sec. 1B Q4 est ~60+ tokens/sec.',
          'Cas d\'usage pratiques: autocomplétion, suggestion de code en temps réel, transcription sur appareil, résumé local. Peu pratiques: longues conversations, raisonnement complexe, dialogue multi-tours sans cache.',
          'Le goulot d\'étranglement est la bande passante, pas le calcul ni la taille des poids. LPDDR5X-PIM aide en réduisant le mouvement de données nécessaire, mais n\'élimine pas la limite de bande passante de base.'
        ],
        items: [
          'Utilisez la bande passante LPDDR5X 85,6 GB/s pour estimer les tokens/sec maximum: divisez par la taille du modèle en GB',
          '7B Q4 (3,5 GB): ~24 tokens/sec théorie; ~8–15 réel (pratique)',
          '13B Q4 (6,5 GB): ~13 tokens/sec théorie; ~4–8 réel (lent)',
          '1B Q4 (~500 MB): ~171 tokens/sec théorie; ~50–100 réel (rapide)',
          'La quantification est obligatoire: Q4 est la base pour des modèles utilisables sur appareil',
          'LPDDR5X-PIM (validé, pas encore sur Galaxy S26) pourrait ajouter ~3x de débit à son arrivée dans un SoC de téléphone'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: 'Data Center vs. Téléphone: L\'Écart de Bande Passante de 14x',
        image: '/images/hbm-datacenter-vs-phone-gap-fr.svg',
        imageCaption: 'Téléphone (LPDDR5X 85,6 GB/s) vs GPU data-center (HBM3E 1.229 TB/s) pour le même modèle 7B Q4 (3,5 GB): ~8-15 tok/s réel sur appareil vs ~200+ tok/s en data center, un écart de 14x.',
        content: [
          'Un GPU Nvidia H100 avec HBM3E (1.229 TB/s) est 14x plus rapide en débit d\'inférence qu\'un Galaxy S26 (LPDDR5X 85,6 GB/s). Cet écart n\'est pas dû aux FLOPS de calcul (les deux sont rapides), mais à la pure bande passante mémoire.',
          'Pourquoi l\'écart existe: HBM est physiquement différent. LPDDR5X est un film mince à côté du CPU (économe en énergie pour les téléphones). HBM est un empilement de puces mémoire directement liées au GPU via des vias traversants en silicium (TSV). Les stacks HBM font 2+ pouces de haut; impossible de les mettre dans un téléphone.',
          'Pourquoi il ne peut être comblé: les téléphones sont contraints thermiquement et énergétiquement. Le HBM consomme une puissance significative (~100+ W par stack complet). LPDDR5X est ~5–10 W. Impossible d\'intégrer physiquement la bande passante HBM dans un téléphone sans détruire l\'autonomie.',
          'Conséquence: l\'IA sur appareil restera plus lente que l\'IA cloud pour les gros modèles. Modèles plus petits, quantification agressive et mise en cache intelligente sont les solutions.',
          'L\'autre côté de la médaille: sur appareil, c\'est privé, utilisable hors ligne, et à latence zéro pour les tâches sensibles à la confidentialité. La pénalité de vitesse de 14x est le prix de la confidentialité.',
          'Mise à jour: Samsung a validé LPDDR5X-PIM au Hot Chips 2026 (25 août 2026) — gain de débit mesuré de 3,01x (27,0 → 81,3 tokens/sec sur Llama-3.1-8B) sur une puce compatible broches, bien en avance sur le calendrier 2027-2028 précédemment cité sur cette page. LPDDR6 (toujours 2027-2028) vise ~200 GB/s, ~6x plus lent que HBM3E. Ensemble, PIM maintenant et LPDDR6 plus tard réduisent significativement l\'écart téléphone-vs-data-center sans le combler — l\'écart brut de 14x se rapproche de 4-6x en pratique une fois PIM déployé dans les SoC de téléphone.'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: 'Feuille de Route Mémoire: HBM4 et LPDDR6',
        content: [
          '**HBM4 / HBM4E (SK Hynix + Samsung, désormais en production de masse)**: >2 TB/s par stack pour le HBM4 16 couches de SK Hynix (production de masse visée T3 2026); 3,6 TB/s par stack pour le HBM4E 12 couches de Samsung, échantillonné depuis mai 2026. Arrive d\'abord dans les GPU Nvidia nouvelle génération. Toujours hors de portée des téléphones.',
          '**LPDDR5X-PIM (Samsung, validé en août 2026)**: Le Processing-In-Memory intègre le calcul directement dans la puce DRAM. C\'est passé de "en développement" à "démontré, silicium testé" au Hot Chips 2026: gain d\'inférence mesuré de 3,01x (27,0 → 81,3 tokens/sec sur Llama-3.1-8B) avec jusqu\'à 8x de bande passante interne en mode PIM, sur une puce compatible broches. Cela n\'égalera pas la bande passante HBM, mais c\'est réel et en avance sur l\'estimation précédente de 2027-2028.',
          '**LPDDR6 / LPDDR6X-PIM (2027-2028)**: ~200+ GB/s estimés pour le LPDDR6 standard — environ 2,3x la bande passante du LPDDR5X. Pour un modèle 7B Q4: 200 GB/s ÷ 3,5 GB ≈ 57 tokens/sec théoriques (contre 24), ~20–35 réels. Samsung regarde déjà au-delà de LPDDR5X-PIM vers LPDDR6X-PIM, avec l\'espoir d\'une spécification JEDEC initiale fin 2026.',
          '**Réalité**: Même avec LPDDR5X-PIM déployé et LPDDR6 sur la feuille de route, les téléphones resteront plusieurs fois plus lents que les data centers pour l\'inférence — Samsung positionne lui-même PIM comme un complément au HBM pour les appareils contraints en coût/énergie, pas une parité de bande passante.',
          '**Pour l\'IA sur appareil, fin 2026**: Exynos 2600 + LPDDR5X standard reste la base commercialisée pour le Galaxy S26. LPDDR5X-PIM est validé mais pas encore apparu dans un SoC de téléphone commercialisé—attendez-vous à ce que les accélérateurs IA en périphérie l\'obtiennent en premier.'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Questions Fréquentes',
        faqs: [
          { q: "Quelle est la bande passante mémoire du LPDDR5X ?", a: "Le LPDDR5X à 10,7 Gbps sur un bus x64 offre 85,6 Go/s — la vitesse mémoire utilisée dans le Galaxy S26, le Snapdragon 8 Elite Gen 5 et la plupart des téléphones haut de gamme de 2026. C'est environ 5,4 à 14 fois plus lent que le HBM des centres de données (du HBM2E à 460 Go/s jusqu'au HBM4/HBM4E à 2-3,6 To/s par stack), ce qui explique pourquoi l'inférence IA sur l'appareil est bien plus lente qu'en centre de données pour une même taille de modèle. La variante LPDDR5X-PIM de Samsung, validée en août 2026, comble une partie de cet écart : elle a fait tourner Llama-3.1-8B à 3,01 fois le débit en tokens/s du LPDDR5X standard lors de la démonstration de Samsung à Hot Chips 2026." },
          { q: 'Pourquoi la bande passante mémoire est-elle le goulot d\'étranglement pour l\'inférence IA?', a: 'Parce que la phase de décodage (générer chaque token) nécessite de charger le modèle entier en mémoire pour une passe avant. Les unités de calcul finissent vite, mais la mémoire ne peut pas les alimenter assez vite.' },
          { q: 'Quelle est la formule tokens/sec pour l\'IA sur appareil?', a: 'Simplifiée: tokens/sec = bande_passante_mémoire / (taille_modèle × octets_par_précision). Pour un modèle 7B FP16 (14 GB) à 85,6 GB/s: 85,6 ÷ 14 = ~6 tokens/sec. Quantifié Q4 (3,5 GB): 85,6 ÷ 3,5 = ~24 tokens/sec.' },
          { q: 'SK Hynix domine-t-il le marché HBM?', a: 'SK Hynix domine les livraisons HBM, avec une part rapportée de 50–62% selon le trimestre 2026. Samsung a comblé une partie de l\'écart: il a livré des échantillons HBM4E 12 couches à 3,6 TB/s en mai 2026, devançant la spécification HBM4 de SK sur ce point précis.' },
          { q: 'Samsung peut-il rattraper SK Hynix en HBM?', a: 'Samsung est plus proche qu\'avant: ses échantillons HBM4E 12 couches (3,6 TB/s, mai 2026) dépassent sur le papier la spécification de bande passante HBM4 de SK Hynix, même si SK reste en tête sur le volume total. Pour les téléphones, Samsung n\'essaie même pas d\'égaler la bande passante HBM—il a validé LPDDR5X-PIM à la place.' },
          { q: 'Quand LPDDR6 sera-t-il disponible?', a: 'Toujours estimé pour 2027-2028 dans l\'ère Galaxy S27/S28, inchangé depuis la dernière mise à jour. ~200+ GB/s (2,3x LPDDR5X). LPDDR5X-PIM, en revanche, est déjà du silicium validé depuis août 2026—il atteindra probablement les appareils en périphérie avant LPDDR6.' },
          { q: 'Pourquoi ne peut-on pas mettre du HBM dans un téléphone?', a: 'Contraintes physiques: les stacks HBM font 2+ pouces de haut. La consommation HBM (~100+ W) détruit l\'autonomie. LPDDR5X est un film mince, 5–10 W. Cela n\'a pas changé avec HBM4/HBM4E—les nouvelles générations sont plus rapides mais pas plus petites ni moins gourmandes.' },
          { q: 'LPDDR5X-PIM comblera-t-il l\'écart avec HBM?', a: 'Partiellement, et c\'est maintenant mesuré, pas projeté. Samsung a montré une vraie puce au Hot Chips 2026 faisant tourner Llama-3.1-8B à 81,3 tokens/sec contre 27,0 tokens/sec en LPDDR5X standard—un gain de 3,01x. Cela reste loin de l\'écart brut de 14x avec HBM3E, mais c\'est une amélioration réelle plus importante que l\'estimation "~50%" précédemment citée sur cette page.' },
          { q: 'Les FLOPS de calcul sont-ils pertinents pour l\'IA sur appareil?', a: 'Pas autant qu\'on le pense. Le décodage est limité par la mémoire, pas par le calcul. Une unité de calcul plus lente avec une mémoire plus rapide bat une unité plus rapide avec une mémoire plus lente.' },
          { q: 'Puis-je exécuter un modèle 70B sur le Galaxy S26?', a: 'Techniquement oui; en pratique non. 70B Q4 (~35 GB) donne 85,6 GB/s ÷ 35 GB = ~2 tokens/sec. C\'est 1 token par seconde—inutilisable pour toute tâche interactive. Restez sur 7B ou moins.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures recommandées',
        items: [
          '[Guide Galaxy S26 IA Locale: Galaxy AI et NPU Expliqués (2026)](/fr/local-llms/galaxy-s26-local-ai-on-device-2026) -- IA locale sur le Galaxy S26',
          '[MRAM et informatique en mémoire: le prochain bond pour l\'IA sur appareil?](/fr/local-llms/mram-in-memory-computing-local-ai-2026) -- MRAM et informatique en mémoire pour IA',
          '[Combien de VRAM faut-il pour les LLM locaux ?](/fr/local-llms/how-much-vram-local-llm) -- VRAM nécessaire pour les LLM locaux',
          '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) -- guide matériel LLM local 2026',
          '[LLMs locaux mobiles 2026 : iPhone 16 Pro, iPad M4 & Snapdragon X](/fr/local-llms/mobile-local-llms) -- LLMs locaux sur mobile',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'IA Sur Appareil et Mémoire: Pourquoi HBM Détermine la Vitesse de l\'IA Locale (2026)',
      'description': 'HBM vs LPDDR5X: La bande passante mémoire est le goulot d\'étranglement IA. SK Hynix HBM4 vs Samsung LPDDR5X-PIM (3x plus rapide, validé août 2026). Pourquoi l\'IA sur appareil est lente et l\'IA data center est rapide.',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'fr',
      'url': 'https://www.promptquorum.com/fr/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': 'La bande passante mémoire, pas les TOPS de calcul, est le goulot d\'étranglement pour l\'inférence IA. Le Galaxy S26 a LPDDR5X à 85,6 GB/s; les data centers utilisent HBM3E à 1.229 TB/s—un écart de 14x. Samsung a validé LPDDR5X-PIM au Hot Chips 2026, triplant le débit sur appareil.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'fr',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Pourquoi la bande passante mémoire est-elle le goulot d\'étranglement pour l\'inférence IA?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La phase de décodage nécessite de charger le modèle entier en mémoire pour une passe avant. La mémoire ne peut pas alimenter les unités de calcul assez vite en données. Les FLOPS sont rapides; la bande passante est lente.'
          }
        }
      ]
    }
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-ja.webp',
    title: 'オンデバイスAIとメモリ: HBMメモリがローカルAIを加速する理由 (2026)',
    seoTitle: 'HBM vs LPDDR5X: オンデバイスAI帯域幅の完全ガイド',
    intro: 'メモリ帯域幅はAI推論のボトルネックです。計算TOPSではなく帯域幅が問題です。Galaxy S26(Exynos 2600)はLPDDR5Xで85.6 GB/s、データセンターはHBM3Eで1.229 TB/s—14倍の差があります。このギャップが、7Bパラメータモデルが電話では8〜15トークン/秒で動作し、データセンターGPUは100+トークン/秒を処理する理由を説明しています。SamsungとSK Hynixが主要プレイヤーです。SK HynixはHBMを支配し(62%市場シェア)、SamsungはLPDDR5X-PIM(メモリ内処理)を推進しています。このガイドでは、メモリボトルネック、SamsungとSK Hynixの役割、2026以降のオンデバイスAIの意味について説明します。',
    metaDescription: 'HBM vs LPDDR5X: メモリ帯域幅はAIボトルネック。SK Hynix HBM3E vs Samsung LPDDR5X-PIM。オンデバイスAIが遅い理由、データセンターAIが速い理由。',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '11分で読了',
    educationalLevel: 'Intermediate',
    audience: 'AIエンジニア、ハードウェア設計者、ローカルAIがクラウドAIより遅い理由に関心のある人',
    primaryTerm: 'HBMメモリ オンデバイスAI',
    targetKeywords: ['hbm memory', 'hbm3e bandwidth', 'lpddr5x bandwidth', 'memory bandwidth bottleneck', 'on device ai speed', 'sk hynix', 'samsung hbm'],
    leadAnswerBlock: '**LLMのデコード段階は帯域幅制約であり、計算制約ではありません。tokens/sec ≈ memory_bandwidth / model_size_in_bytes。Galaxy S26のLPDDR5X(85.6 GB/s)は7Bモデルを最大~24トークン/秒に制限します。データセンターH100 GPU HBM3E(1.229 TB/s)は100+トークン/秒を達成します——HBM4は現在量産段階に入り(SK Hynixの16層版は>2 TB/s、Samsungの12層HBM4Eサンプルは3.6 TB/s)、さらに先へ進んでいます。SK Hynixは依然HBM出荷量で首位(2026年は四半期により約50〜62%のシェア)ですが、Samsungは電話側で応えました:2026年8月25日のHot Chips 2026で、ピン互換のLPDDR5X-PIMチップがLlama-3.1-8Bを標準LPDDR5Xの27.0トークン/秒に対し81.3トークン/秒で実行——ラボの予測ではなく、実測された3.01倍の向上です。このメモリボトルネックは、ローカルAIがクラウドAIに遅れをとる根本的な理由であり続けますが、電話上のギャップは前四半期から大幅に縮まりました。',
    quickAnswerTop: {
      ja: {
        question: 'なぜオンデバイスAIはクラウドAIより非常に遅いのですか?',
        answer: 'メモリ帯域幅です。デコード段階は帯域幅制約(計算制約ではない)。オンデバイス(LPDDR5X 85.6 GB/s) vs データセンター(HBM3E 1.229 TB/s) = 14倍ギャップ。それがGalaxy S26が~15 tokens/secをしている理由でありデータセンターGPUは100+ tokens/secです。HBMを電話に収納できませんが、2026年8月に実証されたSamsungのLPDDR5X-PIMは、HBM帯域幅に追いつこうとする代わりにメモリチップ内部で計算することでギャップを縮めています。',
        bullets: [
          'tokens/sec = メモリ帯域幅 / モデルサイズバイト(簡略、デコード段階に対して真)',
          '7Bモデル FP16(14 GB): LPDDR5X 85.6 GB/s ÷ 14 GB = ~6 tokens/sec(理論); Q4(3.5 GB) = ~24 tokens/sec',
          'データセンター H100 HBM3E(1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 tokens/sec(理論)',
          'SK HynixがHBM出荷を主導(2026年は四半期により約50〜62%のシェア)、Nvidia H100, H200, B200 GPUに供給',
          'Samsungは2026年5月に12層HBM4Eサンプル(スタックあたり3.6 TB/s)を出荷し、2026年8月25日のHot Chips 2026でLPDDR5X-PIMを実演—Llama-3.1-8Bを標準LPDDR5Xの27.0 tokens/secに対し81.3 tokens/secで実行、実測3.01倍の向上',
          'HBM4(>2 TB/s)は量産段階に入った:SK Hynixは16層版を2026年第3四半期に照準、Samsungはすでに12層HBM4Eをサンプリング中;どちらも電話には依然無関係—コスト+電力の制約'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'メモリ帯域幅がAI速度を決定する理由', anchor: '#why-memory-matters' },
      { label: 'メモリ帯域幅比較: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: 'SamsungとSK Hynix: 誰が何を作るか', anchor: '#samsung-sk-hynix-roles' },
      { label: 'Galaxy S26のオンデバイスAI制限', anchor: '#on-device-limits' },
      { label: 'データセンター vs 電話: 14倍の帯域幅ギャップ', anchor: '#datacenter-vs-phone' },
      { label: 'メモリロードマップ: HBM4とLPDDR6', anchor: '#future-roadmap' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'メモリ帯域幅こそが、TOPSではなく、AI推論のデコード段階のボトルネックです。公式:tokens/sec ≈ memory_bandwidth / model_size_in_bytes。FP16の7Bモデル(14 GB)をLPDDR5X 85.6 GB/sで実行すると~6トークン/秒。同モデルをQ4量子化(3.5 GB)すると~24トークン/秒。データセンターH100 HBM3E(1.229 TB/s)は~88トークン/秒。',
          'SK HynixがHBM出荷を主導(2026年は四半期により約50〜62%のシェア)し、Nvidia H100, H200, B200に供給。HBM4(>2 TB/s)はすでに量産段階:SK Hynixは16層・48 GB版を2026年第3四半期の量産目標とし、一方Samsungは2026年5月、業界初となる12層HBM4Eサンプル(スタックあたり3.6 TB/s)を出荷し、この特定の指標ではSK Hynixに先行しました。',
          'Samsungは2026年8月25日のHot Chips 2026で、LPDDR5X-PIM(メモリ内処理)を実際にテストされたシリコンとして検証しました——ラボのコンセプトではありません。エッジAIアクセラレータSoCでLlama-3.1-8Bを実行したところ、標準LPDDR5Xの27.0トークン/秒に対し81.3トークン/秒を達成:実測3.01倍の向上で、PIMモードでは内部帯域幅が最大8倍になります。チップは標準LPDDR5Xとピン互換(同じ561ボールパッケージ)のため、ドロップイン型のアップグレードです。',
          'オンデバイスAIは大規模モデルでは依然クラウドAIより遅いままです——電話にHBMは収まりません——が、電話上のギャップはちょうど縮まったところです。LPDDR5X-PIMはHBM帯域幅に匹敵するわけではなく、データ移動を減らすことで実現しているため、スループット向上(3倍)は生の帯域幅ギャップ(14倍)より小さいものの、実際のワークロードには意味があります。',
          'Exynos 2600(Galaxy S26)は依然標準LPDDR5Xで出荷され、量子化7Bモデルで現実的には~8〜15トークン/秒を達成します。LPDDR5X-PIMは検証済みですが、まだ出荷済みの電話SoCには搭載されていません——まずエッジAIアクセラレータに登場すると見られます。',
          'メモリ帯域幅ボトルネックは、なぜファインチューニングや蒸留が役立たないかを引き続き説明します:すべてのパラメータを毎回のフォワードパスでメモリにロードする必要があります。より小さいモデル(3B、1B)は役立ち、量子化は電話向けの基本解決策であり続けます——PIMは追加の手段であり、置き換えではありません。'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: 'メモリ帯域幅がAI速度を決定する理由',
        content: [
          'LLM推論のデコード段階では、GPU/NPUはモデル全体をメモリにロードし、トークンごとに1回のフォワードパスを実行し、出力を書き込む必要があります。ボトルネック:パラメータを計算ユニットにどれだけ速く供給できるか?これはメモリ帯域幅であり、計算TOPSではありません。',
          '簡略化した公式:tokens/sec = memory_bandwidth / (model_size_in_bytes × bytes_per_precision)。FP16(パラメータあたり2バイト)では、7Bモデル = 14 GB。LPDDR5X 85.6 GB/sでは:85.6 GB/s ÷ 14 GB = 理論最大値~6トークン/秒。実際には計算とキャッシュのオーバーヘッドにより3〜5トークン/秒。',
          '量子化は方程式を劇的に変えます。Q4(4ビット、パラメータあたり0.5バイト)は7Bモデルを3.5 GBに縮小します。85.6 GB/s ÷ 3.5 GB = 理論上~24トークン/秒。現実世界では~8〜15トークン/秒、3〜4倍の改善です。',
          'HBM3E(1.229 TB/s)搭載のデータセンターH100は、同じモデルで100+トークン/秒を維持できます。HBMが14倍速いためです。これがフロンティアモデル(70B、405B)がデータセンターでのみ動作する理由です——HBM帯域幅が必要です。',
          '推論は訓練と異なります。訓練は計算制約(重み更新のため1000+回のパス)です。推論(特にプロンプトキャッシュ後)は単一のフォワードパスであり、純粋にメモリ帯域幅制約です。'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LLMデコードはメモリ帯域幅制約:tokens/sec = 帯域幅 / モデルサイズ。オンデバイス85.6 GB/s vs データセンター1.229 TB/s = 14倍のギャップ。' },
          { type: 'plain-terms', text: '組立ラインを想像してください:計算は労働者、メモリはサプライチェーンです。労働者が増えても(FLOPSが増えても)、供給(データ)が同じ速度でしか届かなければ意味がありません。電話には「速いサプライチェーン」(HBM)がありません。' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: 'メモリ帯域幅比較: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-ja.svg',
        imageCaption: 'メモリタイプ別帯域幅:LPDDR5X 85.6 GB/s(電話)、LPDDR5X-PIM(2026年8月検証済み、3.01倍のトークン/秒)vs HBM2E 460 GB/s、HBM3 819 GB/s、HBM3E 1.229 TB/s(Nvidia H100/H200/B200)、そしてHBM4/HBM4Eはスタックあたり2〜3.6 TB/sで出荷中。SK Hynixが約50〜62%のHBM出荷を主導。',
        columns: ['メモリタイプ', '帯域幅', '使用先', 'Tokens/sec(7B FP16)', 'Tokens/sec(7B Q4)'],
        rows: [
          { 'メモリタイプ': 'LPDDR5X 10.7 Gbps', '帯域幅': '85.6 GB/s(x64バス)', '使用先': 'Galaxy S26、Snapdragon 8 Elite Gen 5', 'Tokens/sec(7B FP16)': '~6 tokens/sec(理論); ~3–5 現実', 'Tokens/sec(7B Q4)': '~24 tokens/sec(理論); ~8–15 現実' },
          { 'メモリタイプ': 'HBM2E', '帯域幅': '~460 GB/s(スタックあたり)', '使用先': '旧世代GPU(P100、V100)', 'Tokens/sec(7B FP16)': '~33 tokens/sec(理論)', 'Tokens/sec(7B Q4)': '~131 tokens/sec(理論)' },
          { 'メモリタイプ': 'HBM3 19.2 Gbps', '帯域幅': '~819 GB/s(スタックあたり)', '使用先': 'Nvidia A100、80GB版', 'Tokens/sec(7B FP16)': '~59 tokens/sec(理論)', 'Tokens/sec(7B Q4)': '~234 tokens/sec(理論)' },
          { 'メモリタイプ': 'HBM3E 21.4 Gbps', '帯域幅': '1.18–1.229 TB/s(スタックあたり)', '使用先': 'Nvidia H100、H200、B200', 'Tokens/sec(7B FP16)': '~88 tokens/sec(理論); ~60–80 現実', 'Tokens/sec(7B Q4)': '~352 tokens/sec(理論); ~200+ 現実' },
          { 'メモリタイプ': 'HBM4(SK Hynix、16層)', '帯域幅': '>2 TB/s(スタックあたり)、48 GB', '使用先': 'Nvidia次世代GPU(2026年Q3量産目標)', 'Tokens/sec(7B FP16)': '~143 tokens/sec(理論)', 'Tokens/sec(7B Q4)': '~571 tokens/sec(理論)' },
          { 'メモリタイプ': 'HBM4E(Samsung、12層)', '帯域幅': '3.6 TB/s(スタックあたり)', '使用先': '2026年5月にサンプル出荷', 'Tokens/sec(7B FP16)': '~257 tokens/sec(理論)', 'Tokens/sec(7B Q4)': '~1,029 tokens/sec(理論)' },
          { 'メモリタイプ': 'LPDDR5X-PIM(Samsung、検証済み)', '帯域幅': '85.6 GB/s + PIMモードで内部最大8倍', '使用先': 'Hot Chips 2026で公開、ピン互換', 'Tokens/sec(7B FP16)': '7B FP16では未測定', 'Tokens/sec(7B Q4)': 'Llama-3.1-8B: 81.3 vs 27.0 tok/sec(3.01倍)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: 'SamsungとSK Hynix: 誰が何を作るか',
        content: [
          '**SK Hynix — HBM出荷量のリーダー**: SKはHBM出荷を主導しており、2026年の四半期や測定方法によって約50〜62%のシェアが報告されています。SKはH100、H200、B200 GPU向けにHBM3EをNvidiaに供給し、16層HBM4(48 GB、>2 TB/s)を2026年第3四半期の量産目標としています。',
          '**Samsung — HBM4E速度で先行、LPDDR5X-PIM検証済み**: Samsungは2026年5月29日、業界初となる12層HBM4Eサンプルをスタックあたり3.6 TB/sで出荷しました——この指標ではSK HynixのHBM4仕様を上回りますが、SKは依然総出荷量で優位です。電話側では、Samsungは2026年8月25日のHot Chips 2026でLPDDR5X-PIMを検証済み・テスト済みのシリコンとして発表:エッジAIアクセラレータSoCがLlama-3.1-8Bを標準LPDDR5Xの27.0トークン/秒に対し81.3トークン/秒で実行(3.01倍)、PIMモードでは内部帯域幅が最大8倍。チップは標準LPDDR5Xと同じ561ボールパッケージを使用しており、新しいフォームファクタではなく直接的な置き換えです。',
          '**競争力学**: SamsungはHBM(HBM3E、現在はHBM4E)のサンプリングを続けていますが、歩留まりと総HBM量では歴史的にSKに遅れをとってきました。SamsungのLPDDR5X-PIMに対する位置づけは明確です:HBMの置き換えではなく補完——HBMのコスト、消費電力、パッケージング複雑性が障壁となるスマートフォン、AI PC、エッジアクセラレータをターゲットにしています。',
          '**両社ともNvidiaに供給**: SK HynixとSamsungはどちらもNvidia GPUのVRAM向けにHBMを供給しています;標準DRAM(LPDDR/DDR)はホスト/CPUメモリをカバーします。どちらも計算部分は供給しません(Nvidiaが GPUコアを設計)。',
          '**タイムライン**: HBM4は現在量産段階(SK Hynixは16層版を2026年第3四半期目標;Samsungはすでに12層HBM4Eをサンプリング中)。LPDDR5X-PIMは2026年8月時点で検証済みシリコンであり、前回の更新で示された2027-2028年の量産見積もりを大きく前倒ししています。LPDDR6/LPDDR6X-PIMがSamsungの次のターゲットで、2026年内にJEDECの初期仕様を望んでいます。'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'Galaxy S26のオンデバイスAI制限',
        content: [
          'Galaxy S26 Exynos 2600のLPDDR5X 85.6 GB/sは、オンデバイスLLM推論の実質的な上限を定義しています。Q4に量子化された7Bモデルは現実的に~8〜15トークン/秒の性能に達します。これはレイテンシに敏感なタスクには適していますが、長い会話には実用的ではありません。',
          'モデルサイズの制限:7Bモデルは実用的です。13B Q4モデル(~6.5 GB)は85.6 GB/s ÷ 6.5 GB = ~13トークン/秒に達し、ほとんど改善しません。70B Q4モデル(~35 GB)は85.6 GB/s ÷ 35 GB = ~2トークン/秒——使用不可能です。',
          '量子化は不可欠です:FP16(パラメータあたり2バイト)は非実用的です。Q4(パラメータあたり0.5バイト)がスイートスポットです——4倍小さいモデルで許容可能な品質低下です。',
          '速度対品質のトレードオフ:7B Q4は~8〜15トークン/秒。3B Q4は~24〜36トークン/秒。1B Q4は~60+トークン/秒。',
          '実用的なユースケース:自動補完、リアルタイムコード提案、オンデバイス文字起こし、ローカル要約。実用的でない:長い会話、複雑な推論、キャッシュなしのマルチターン対話。',
          'ボトルネックは帯域幅であり、計算や重みサイズではありません。LPDDR5X-PIMは必要なデータ移動を減らすことで役立ちますが、基本的な帯域幅の限界を排除するわけではありません。'
        ],
        items: [
          'LPDDR5X 85.6 GB/sの帯域幅を使って最大トークン/秒を推定:GB単位のモデルサイズで割る',
          '7B Q4(3.5 GB):理論~24 tokens/sec;現実~8–15(実用的)',
          '13B Q4(6.5 GB):理論~13 tokens/sec;現実~4–8(遅い)',
          '1B Q4(~500 MB):理論~171 tokens/sec;現実~50–100(速い)',
          '量子化は必須:Q4が使用可能なオンデバイスモデルの基準',
          'LPDDR5X-PIM(検証済み、まだGalaxy S26には未搭載)は電話SoCに到達すればスループットを~3倍にできる可能性'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: 'データセンター vs 電話: 14倍の帯域幅ギャップ',
        image: '/images/hbm-datacenter-vs-phone-gap-ja.svg',
        imageCaption: '電話(LPDDR5X 85.6 GB/s)vs データセンターGPU(HBM3E 1.229 TB/s)、同じ7B Q4モデル(3.5 GB)基準:オンデバイス実測~8-15 tok/s vs データセンター~200+ tok/s、14倍の帯域幅ギャップ。',
        content: [
          'HBM3E(1.229 TB/s)搭載のNvidia H100 GPUは、Galaxy S26(LPDDR5X 85.6 GB/s)より推論スループットで14倍速いです。このギャップは計算FLOPS(両方とも高速)によるものではなく、純粋なメモリ帯域幅によるものです。',
          'ギャップが存在する理由:HBMは物理的に異なります。LPDDR5XはCPUの隣にある薄膜(電話向けに電力効率が良い)です。HBMはシリコン貫通ビア(TSV)を使用してGPUに直接ボンディングされたメモリチップのスタックで、膨大な帯域幅を生み出します。HBMスタックは2インチ以上の高さで、電話には収まりません。',
          'なぜ埋められないのか:電話は熱と電力の制約を受けます。HBMは大きな電力を消費します(フルスタックで~100+ W)。LPDDR5Xは~5〜10 Wです。バッテリー寿命を破壊せずに物理的にHBM帯域幅を電話に収めることはできません。',
          '結果:オンデバイスAIは大規模モデルでは常にクラウドAIより遅いままです。より小さいモデル、積極的な量子化、賢いキャッシングが解決策です。',
          '裏を返せば:オンデバイスはプライベートで、オフラインで使用でき、プライバシーに敏感なタスクでレイテンシゼロです。14倍の速度ペナルティはプライバシーの対価です。',
          '更新:Samsungは2026年8月25日のHot Chips 2026でLPDDR5X-PIMを検証しました——ピン互換のチップで実測3.01倍のスループット向上(27.0 → 81.3トークン/秒、Llama-3.1-8B)、このページが以前引用していた2027-2028年のタイムラインより大幅に前倒しです。LPDDR6(依然2027-2028年)は~200 GB/sを目指し、HBM3Eより~6倍遅いです。今のPIMと将来のLPDDR6を合わせると、電話対データセンターのギャップは埋まりはしないものの大幅に縮まります——生の14倍の帯域幅ギャップは、PIMが電話SoCに搭載されれば実質的に4〜6倍程度に近づきます。'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: 'メモリロードマップ: HBM4とLPDDR6',
        content: [
          '**HBM4 / HBM4E(SK Hynix + Samsung、現在量産中)**: SK Hynixの16層HBM4はスタックあたり>2 TB/s(2026年第3四半期量産目標);Samsungの12層HBM4Eはスタックあたり3.6 TB/sで、2026年5月からサンプリング中。Nvidiaの次世代GPUに最初に搭載されます。電話には依然無関係です。',
          '**LPDDR5X-PIM(Samsung、2026年8月検証済み)**: Processing-In-MemoryはDRAMダイ内部に計算を組み込みます。これはHot Chips 2026で「開発中」から「実証済み、テスト済みシリコン」に変わりました:実測3.01倍の推論向上(27.0 → 81.3トークン/秒、Llama-3.1-8B)、PIMモードで内部帯域幅最大8倍、ピン互換チップ上で実現。HBM帯域幅には及びませんが、実物であり、以前の2027-2028年見積もりより前倒しです。',
          '**LPDDR6 / LPDDR6X-PIM(2027-2028年)**: 標準LPDDR6は~200+ GB/s推定——LPDDR5Xの約2.3倍の帯域幅。7B Q4モデルの場合:200 GB/s ÷ 3.5 GB ≈ 理論57トークン/秒(24から上昇)、現実~20〜35トークン/秒。SamsungはすでにLPDDR5X-PIMの先、LPDDR6X-PIMに目を向けており、2026年内にJEDECの初期仕様を期待しています。',
          '**現実**: LPDDR5X-PIMの出荷とLPDDR6のロードマップがあっても、電話は推論においてデータセンターより依然数倍遅いままです——Samsung自身、PIMをコスト/電力制約デバイス向けのHBM補完と位置づけており、帯域幅の同等性を目指すものではありません。',
          '**2026年後半のオンデバイスAIについて**: Exynos 2600 + 標準LPDDR5XがGalaxy S26の出荷基準であり続けています。LPDDR5X-PIMは検証済みですが、まだ出荷済み電話SoCには登場していません——エッジAIアクセラレータが最初に搭載すると予想されます。'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'LPDDR5Xのメモリ帯域幅はどれくらいですか?', a: 'x64バスで10.7GbpsのLPDDR5Xは85.6GB/sを実現します——Galaxy S26、Snapdragon 8 Elite Gen 5、2026年の主要フラッグシップスマートフォンで使われているメモリ速度です。これはデータセンター向けHBM(HBM2Eの460GB/sからHBM4/HBM4Eのスタックあたり2〜3.6TB/sまで)より約5.4倍〜14倍遅く、同じモデルサイズでもオンデバイスAI推論がデータセンター推論よりはるかに遅い理由です。2026年8月に検証されたSamsungのLPDDR5X-PIM版は、このギャップの一部を埋めます——SamsungのHot Chips 2026でのデモでは、Llama-3.1-8Bを標準LPDDR5Xの3.01倍のtokens/secで実行しました。' },
          { q: 'なぜメモリ帯域幅がAI推論のボトルネックなのですか?', a: 'デコード段階(各トークンの生成)は、1回のフォワードパスのためにモデル全体をメモリにロードする必要があるためです。計算ユニットはすぐに終わりますが、メモリが十分な速さでデータを供給できません。' },
          { q: 'オンデバイスAIのtokens/sec公式は何ですか?', a: '簡略化:tokens/sec = memory_bandwidth / (model_size × bytes_per_precision)。85.6 GB/sでの7B FP16モデル(14 GB):85.6 ÷ 14 = ~6 tokens/sec。Q4量子化(3.5 GB):85.6 ÷ 3.5 = ~24 tokens/sec。' },
          { q: 'SK HynixはHBM市場を支配していますか?', a: 'SK HynixはHBM出荷を主導しており、2026年の四半期によって50〜62%のシェアが報告されています。Samsungは一部のギャップを埋めました:2026年5月に12層HBM4Eサンプル(3.6 TB/s)を出荷し、この特定の指標ではSK HynixのHBM4仕様を上回りました。' },
          { q: 'SamsungはHBMでSK Hynixに追いつけますか?', a: 'Samsungは以前より近づいています:その12層HBM4Eサンプル(3.6 TB/s、2026年5月)は紙の上ではSK HynixのHBM4帯域幅仕様を上回っていますが、SKは総出荷量で依然リードしています。電話向けには、SamsungはHBM帯域幅に匹敵しようとすらしておらず、代わりにLPDDR5X-PIMを検証しました。' },
          { q: 'LPDDR6はいつ出荷されますか?', a: '依然として2027-2028年、Galaxy S27/S28時代の見込みで、前回の更新から変更はありません。~200+ GB/s(LPDDR5Xの2.3倍)。一方、LPDDR5X-PIMはすでに2026年8月時点で検証済みシリコンであり、LPDDR6より先にエッジデバイスに到達する可能性が高いです。' },
          { q: 'なぜ電話にHBMを入れられないのですか?', a: '物理的制約:HBMスタックは2インチ以上の高さです。HBMの消費電力(~100+ W)はバッテリー寿命を破壊します。LPDDR5Xは薄膜で5〜10 Wです。これはHBM4/HBM4Eでも変わっていません——新世代は高速になりましたが、小型化や低消費電力化はしていません。' },
          { q: 'LPDDR5X-PIMはHBMとのギャップを埋めますか?', a: '部分的にはい、そして今や実測値であり予測ではありません。SamsungはHot Chips 2026で実際のチップを見せ、Llama-3.1-8Bを標準LPDDR5Xの27.0トークン/秒に対し81.3トークン/秒で実行しました——3.01倍の向上です。HBM3Eとの生の14倍のギャップには遠く及びませんが、このページが以前引用していた「約50%」の見積もりよりも大きな実世界の改善です。' },
          { q: '計算FLOPSはオンデバイスAIに関連がありますか?', a: '思われているほどではありません。デコードはメモリ制約であり、計算制約ではありません。より速いメモリを持つ遅い計算ユニットは、より遅いメモリを持つ速い計算ユニットに勝ります。' },
          { q: 'Galaxy S26で70Bモデルを実行できますか?', a: '技術的には可能ですが、実用的ではありません。70B Q4(~35 GB)は85.6 GB/s ÷ 35 GB = ~2トークン/秒になります。これは1秒に1トークンで、対話型タスクには使用不可能です。7B以下にとどめてください。' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Galaxy S26 でのローカル AI 実行: オンデバイス AI を完全解説 (2026)](/ja/local-llms/galaxy-s26-local-ai-on-device-2026) -- Galaxy S26のオンデバイスAI',
          '[MRAMとメモリ内コンピューティング：オンデバイスAIの次のステップ?](/ja/local-llms/mram-in-memory-computing-local-ai-2026) -- AIのためのMRAMとメモリ内コンピューティング',
          '[ローカルLLMに必要なVRAM容量は？](/ja/local-llms/how-much-vram-local-llm) -- ローカルLLMに必要なVRAM',
          '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) -- ローカルLLMハードウェアガイド2026',
          '[モバイル向けローカルLLM 2026：iPhone 16 Pro・iPad M4・Snapdragon X](/ja/local-llms/mobile-local-llms) -- モバイルのローカルLLM',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'オンデバイスAIとメモリ: HBMメモリがローカルAIを加速する理由 (2026)',
      'description': 'HBM vs LPDDR5X: メモリ帯域幅はAIボトルネック。SK Hynix HBM4 vs Samsung LPDDR5X-PIM(3倍速い、2026年8月検証済み)。オンデバイスAIが遅い理由、データセンターAIが速い理由。',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'ja',
      'url': 'https://www.promptquorum.com/ja/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': 'メモリ帯域幅はAI推論のボトルネックです。Galaxy S26はLPDDR5Xで85.6 GB/s、データセンターはHBM3Eで1.229 TB/s—14倍の差。SamsungはHot Chips 2026でLPDDR5X-PIMを検証し、オンデバイススループットを3倍にしました。'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ja',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'なぜメモリ帯域幅がAI推論のボトルネックなのですか?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'デコード段階は1回のフォワードパスのためにモデル全体をロードする必要があります。メモリは計算ユニットに十分な速さでデータを供給できません。FLOPSは速く、帯域幅は遅いです。'
          }
        }
      ]
    }
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-zh.webp',
    title: '设备上的AI和内存：为什么HBM内存驱动本地AI速度 (2026)',
    seoTitle: 'HBM与LPDDR5X内存：设备上AI带宽解释',
    intro: '内存带宽而非计算TOPS是AI推理的瓶颈。Galaxy S26(Exynos 2600)具有LPDDR5X 85.6 GB/s;数据中心使用HBM3E 1.229 TB/s—14倍差异。这个差异解释了为什么7B参数模型在手机上以8–15 tokens/sec运行,而数据中心GPU处理100+ tokens/sec。Samsung和SK Hynix是关键参与者:SK Hynix主导HBM(62%市场份额),而Samsung正在推LPDDR5X-PIM(内存内处理)以缩小差距。本指南解释了内存瓶颈、Samsung和SK Hynix的角色,以及2026年及以后设备上AI的含义。',
    metaDescription: 'HBM与LPDDR5X:内存带宽是AI瓶颈。SK Hynix HBM3E vs Samsung LPDDR5X-PIM。为什么设备上AI缓慢而数据中心AI快速。',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    audience: 'AI工程师、硬件设计师、对为什么本地AI比云AI慢感到好奇的任何人',
    primaryTerm: 'HBM内存设备上AI',
    targetKeywords: ['hbm内存', 'hbm3e带宽', 'lpddr5x带宽', '内存带宽瓶颈', '设备上ai速度', 'sk海力士', '三星hbm'],
    leadAnswerBlock: '**LLM解码阶段是带宽限制的,而非计算限制的:tokens/sec ≈ memory_bandwidth / model_size_in_bytes。Galaxy S26 LPDDR5X(85.6 GB/s)将7B模型限制到最多~24 tokens/sec。数据中心H100 GPU HBM3E(1.229 TB/s)达到100+ tokens/sec——HBM4现已量产(SK海力士16层版>2 TB/s;三星12层HBM4E样品3.6 TB/s),将差距进一步拉大。SK海力士仍在HBM出货量上领先(2026年各季度份额约50–62%),但三星在手机端做出回应:在2026年8月25日的Hot Chips 2026上,展示了引脚兼容的LPDDR5X-PIM芯片,运行Llama-3.1-8B达到81.3 tokens/sec,而标准LPDDR5X仅27.0 tokens/sec——这是实测的3.01倍真实提升,而非实验室预测。这一内存瓶颈仍是本地AI落后于云AI的根本原因,但手机上的差距刚刚较上一季度明显缩小。',
    quickAnswerTop: {
      zh: {
        question: '为什么设备上的AI远慢于云AI?',
        answer: '内存带宽。解码阶段受带宽限制(非计算限制)。设备上(LPDDR5X 85.6 GB/s) vs 数据中心(HBM3E 1.229 TB/s) = 14倍差异。这解释了为什么Galaxy S26做~15 tokens/sec而数据中心GPU做100+ tokens/sec。您无法将HBM放入手机,但三星于2026年8月验证的LPDDR5X-PIM通过在内存芯片内部直接计算(而非追赶HBM带宽)缩小了差距。',
        bullets: [
          'tokens/sec = 内存带宽 / 模型大小字节(简化,对于解码阶段为真)',
          '7B模型 FP16(14 GB): LPDDR5X 85.6 GB/s ÷ 14 GB = ~6 tokens/sec(理论); Q4(3.5 GB) = ~24 tokens/sec',
          '数据中心 H100 HBM3E(1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 tokens/sec(理论)',
          'SK海力士主导HBM出货(2026年各季度份额约50–62%),供应Nvidia H100, H200, B200 GPU',
          '三星于2026年5月出货12层HBM4E样品(每堆栈3.6 TB/s),并在2026年8月25日的Hot Chips 2026上演示LPDDR5X-PIM:运行Llama-3.1-8B达到81.3 tokens/sec,而标准LPDDR5X仅27.0 tokens/sec——实测提升3.01倍',
          'HBM4(>2 TB/s)现已进入量产阶段:SK海力士的16层版本目标2026年第三季度,三星已在样品阶段供应12层HBM4E;两者对手机仍不相关—成本+功率限制'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '为什么内存带宽决定AI速度', anchor: '#why-memory-matters' },
      { label: '内存带宽对比: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: '三星与SK海力士: 谁做什么', anchor: '#samsung-sk-hynix-roles' },
      { label: 'Galaxy S26上的设备端AI限制', anchor: '#on-device-limits' },
      { label: '数据中心 vs 手机: 14倍带宽差距', anchor: '#datacenter-vs-phone' },
      { label: '内存路线图: HBM4与LPDDR6', anchor: '#future-roadmap' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '内存带宽,而非TOPS,是AI推理解码阶段的瓶颈。公式:tokens/sec ≈ memory_bandwidth / model_size_in_bytes。FP16的7B模型(14 GB)在LPDDR5X 85.6 GB/s下 = ~6 tokens/sec。同模型Q4量化(3.5 GB) = ~24 tokens/sec。数据中心H100 HBM3E(1.229 TB/s) = ~88 tokens/sec。',
          'SK海力士主导HBM出货(2026年各季度份额约50–62%),供应Nvidia H100、H200、B200。HBM4(>2 TB/s)现已量产:SK海力士的16层、48 GB版本目标2026年第三季度量产,而三星于2026年5月率先出货业界首批12层HBM4E样品(每堆栈3.6 TB/s),在这一具体指标上领先SK海力士。',
          '三星在2026年8月25日的Hot Chips 2026上,将LPDDR5X-PIM(内存内处理)验证为真实、经过测试的芯片——而非实验室概念。在边缘AI加速器SoC上运行Llama-3.1-8B,达到81.3 tokens/sec,相比标准LPDDR5X的27.0 tokens/sec:实测提升3.01倍,PIM模式下内部带宽最高提升8倍。该芯片与标准LPDDR5X引脚兼容(相同的561球封装),因此是即插即用的升级。',
          '对于大型模型,设备端AI仍将比云AI慢——手机装不下HBM——但手机上的差距刚刚缩小。LPDDR5X-PIM并未达到HBM带宽;它通过减少数据移动实现提升,因此吞吐量增益(3倍)小于原始带宽差距(14倍),但对实际工作负载仍有实质意义。',
          'Exynos 2600(Galaxy S26)仍搭载标准LPDDR5X,对于量化7B模型现实中可达~8–15 tokens/sec。LPDDR5X-PIM已通过验证,但尚未出现在已出货的手机SoC中——预计边缘AI加速器会先采用。',
          '内存带宽瓶颈仍然解释了为什么微调或蒸馏无济于事:每次前向传递仍需将每个参数加载到内存。更小的模型(3B、1B)有帮助,量化仍是手机的基础解决方案——PIM是额外的手段,而非替代方案。'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: '为什么内存带宽决定AI速度',
        content: [
          '在LLM推理的解码阶段,GPU/NPU必须将整个模型加载到内存中,每个token执行一次前向传递,并写出输出。瓶颈在于:能以多快的速度向计算单元供给参数?这是内存带宽,而非计算TOPS。',
          '简化公式:tokens/sec = memory_bandwidth / (model_size_in_bytes × bytes_per_precision)。对于FP16(每参数2字节),7B模型 = 14 GB。在LPDDR5X 85.6 GB/s下:85.6 GB/s ÷ 14 GB = 理论最大值~6 tokens/sec。实际中因计算和缓存开销约为3–5 tokens/sec。',
          '量化极大地改变了这个方程。Q4(4位,每参数0.5字节)将7B模型缩小到3.5 GB。85.6 GB/s ÷ 3.5 GB = 理论上~24 tokens/sec。实际中约~8–15 tokens/sec,提升3–4倍。',
          '配备HBM3E(1.229 TB/s)的数据中心H100可为同一模型维持100+ tokens/sec,因为HBM快14倍。这就是为什么前沿模型(70B、405B)只能在数据中心运行——需要HBM带宽。',
          '推理与训练不同。训练受计算限制(需要1000多次传递来更新权重)。推理(特别是提示缓存后)是单次前向传递,纯粹受内存带宽限制。'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'LLM解码受内存带宽限制:tokens/sec = 带宽 / 模型大小。设备端85.6 GB/s vs 数据中心1.229 TB/s = 14倍差距。' },
          { type: 'plain-terms', text: '想象一条装配线:计算是工人,内存是供应链。更多工人(更多FLOPS)如果供应(数据)到达速度不变则没有帮助。手机缺少"快速供应链"(HBM)。' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: '内存带宽对比: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-zh.svg',
        imageCaption: '按类型划分的内存带宽:LPDDR5X 85.6 GB/s(手机)、LPDDR5X-PIM(2026年8月验证,3.01倍tokens/sec)对比HBM2E 460 GB/s、HBM3 819 GB/s、HBM3E 1.229 TB/s(Nvidia H100/H200/B200),以及HBM4/HBM4E目前每堆栈2–3.6 TB/s。SK海力士主导HBM出货(约50–62%)。',
        columns: ['内存类型', '带宽', '使用场景', 'Tokens/sec(7B FP16)', 'Tokens/sec(7B Q4)'],
        rows: [
          { '内存类型': 'LPDDR5X 10.7 Gbps', '带宽': '85.6 GB/s(x64总线)', '使用场景': 'Galaxy S26、Snapdragon 8 Elite Gen 5', 'Tokens/sec(7B FP16)': '~6 tokens/sec(理论);~3–5 实际', 'Tokens/sec(7B Q4)': '~24 tokens/sec(理论);~8–15 实际' },
          { '内存类型': 'HBM2E', '带宽': '每堆栈~460 GB/s', '使用场景': '旧款GPU(P100、V100)', 'Tokens/sec(7B FP16)': '~33 tokens/sec(理论)', 'Tokens/sec(7B Q4)': '~131 tokens/sec(理论)' },
          { '内存类型': 'HBM3 19.2 Gbps', '带宽': '每堆栈~819 GB/s', '使用场景': 'Nvidia A100、80GB版本', 'Tokens/sec(7B FP16)': '~59 tokens/sec(理论)', 'Tokens/sec(7B Q4)': '~234 tokens/sec(理论)' },
          { '内存类型': 'HBM3E 21.4 Gbps', '带宽': '每堆栈1.18–1.229 TB/s', '使用场景': 'Nvidia H100、H200、B200', 'Tokens/sec(7B FP16)': '~88 tokens/sec(理论);~60–80 实际', 'Tokens/sec(7B Q4)': '~352 tokens/sec(理论);~200+ 实际' },
          { '内存类型': 'HBM4(SK海力士,16层)', '带宽': '每堆栈>2 TB/s,48 GB', '使用场景': 'Nvidia下一代GPU(2026年Q3量产)', 'Tokens/sec(7B FP16)': '~143 tokens/sec(理论)', 'Tokens/sec(7B Q4)': '~571 tokens/sec(理论)' },
          { '内存类型': 'HBM4E(三星,12层)', '带宽': '每堆栈3.6 TB/s', '使用场景': '2026年5月出货样品', 'Tokens/sec(7B FP16)': '~257 tokens/sec(理论)', 'Tokens/sec(7B Q4)': '~1,029 tokens/sec(理论)' },
          { '内存类型': 'LPDDR5X-PIM(三星,已验证)', '带宽': '85.6 GB/s + PIM模式下内部最高8倍', '使用场景': 'Hot Chips 2026展示,引脚兼容', 'Tokens/sec(7B FP16)': '未针对7B FP16测量', 'Tokens/sec(7B Q4)': 'Llama-3.1-8B: 81.3 vs 27.0 tok/sec(3.01倍)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: '三星与SK海力士: 谁做什么',
        content: [
          '**SK海力士 — HBM出货量领导者**:SK在HBM出货量上领先,根据2026年不同季度和统计口径,报告份额约在50–62%之间。SK为Nvidia的H100、H200、B200 GPU供应HBM3E,并以2026年第三季度量产其16层HBM4(48 GB,>2 TB/s)为目标。',
          '**三星 — HBM4E速度领先,LPDDR5X-PIM已验证**:三星于2026年5月29日率先出货业界首批12层HBM4E样品,每堆栈3.6 TB/s——在这一具体指标上超过SK海力士的HBM4规格,尽管SK仍在总出货量上领先。在手机方面,三星在2026年8月25日的Hot Chips 2026上展示了LPDDR5X-PIM,作为已验证、经过测试的芯片:边缘AI加速器SoC运行Llama-3.1-8B达到81.3 tokens/sec,相比标准LPDDR5X的27.0 tokens/sec(3.01倍),PIM模式下内部带宽最高提升8倍。该芯片使用与标准LPDDR5X相同的561球封装,因此是直接替换,而非新的外形规格。',
          '**竞争格局**:三星继续送样HBM(HBM3E,现为HBM4E),但历来在良率和总HBM出货量上落后于SK。三星对LPDDR5X-PIM的定位很明确:作为HBM的补充而非替代——瞄准智能手机、AI PC和边缘加速器,这些场景中HBM的成本、功耗和封装复杂度过于高昂。',
          '**两家公司都为Nvidia供货**:SK海力士和三星都为Nvidia GPU的显存提供HBM;标准DRAM(LPDDR/DDR)覆盖主机/CPU内存。两者都不提供计算部分(Nvidia设计GPU核心)。',
          '**时间表**:HBM4现已量产(SK海力士以2026年第三季度实现其16层部分量产为目标;三星已在送样12层HBM4E)。LPDDR5X-PIM自2026年8月起已是经过验证的芯片,远早于上次更新时给出的2027-2028年量产预估。LPDDR6/LPDDR6X-PIM是三星的下一个目标,希望在2026年内获得JEDEC的初步规范。'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'Galaxy S26上的设备端AI限制',
        content: [
          'Galaxy S26 Exynos 2600搭配LPDDR5X 85.6 GB/s,定义了设备端LLM推理的实际上限。经Q4量化的7B模型可实现约~8–15 tokens/sec的现实性能。这适合对延迟敏感的任务,但对长对话并不实用。',
          '模型大小限制:7B模型是可行的。13B Q4模型(~6.5 GB)可达85.6 GB/s ÷ 6.5 GB = ~13 tokens/sec,几乎没有改善。70B Q4模型(~35 GB)可达85.6 GB/s ÷ 35 GB = ~2 tokens/sec——不可用。',
          '量化是必不可少的:FP16(每参数2字节)不实用。Q4(每参数0.5字节)是最佳平衡点——模型缩小4倍,质量损失可接受。',
          '速度与质量的权衡:7B Q4约~8–15 tokens/sec。3B Q4约~24–36 tokens/sec。1B Q4约~60+ tokens/sec。',
          '实际使用场景:自动补全、实时代码建议、设备端转录、本地摘要。不实用的场景:长对话、复杂推理、无缓存的多轮对话。',
          '瓶颈是带宽,而非计算或权重大小。LPDDR5X-PIM通过减少所需的数据移动来提供帮助,但并未消除基本的带宽限制。'
        ],
        items: [
          '使用LPDDR5X 85.6 GB/s带宽估算最大tokens/sec:除以模型大小(GB)',
          '7B Q4(3.5 GB):理论~24 tokens/sec;现实~8–15(实用)',
          '13B Q4(6.5 GB):理论~13 tokens/sec;现实~4–8(慢)',
          '1B Q4(~500 MB):理论~171 tokens/sec;现实~50–100(快)',
          '量化是强制性的:Q4是可用设备端模型的基准',
          'LPDDR5X-PIM(已验证,尚未进入Galaxy S26)一旦进入手机SoC,可能带来约3倍的吞吐量提升'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: '数据中心 vs 手机: 14倍带宽差距',
        image: '/images/hbm-datacenter-vs-phone-gap-zh.svg',
        imageCaption: '手机(LPDDR5X 85.6 GB/s)对比数据中心GPU(HBM3E 1.229 TB/s),同为7B Q4模型(3.5 GB):设备端实际~8-15 tok/s对比数据中心~200+ tok/s,14倍带宽差距。',
        content: [
          '配备HBM3E(1.229 TB/s)的Nvidia H100 GPU在推理吞吐量上比Galaxy S26(LPDDR5X 85.6 GB/s)快14倍。这一差距并非源于计算FLOPS(两者都很快),而是纯粹的内存带宽。',
          '差距存在的原因:HBM在物理上截然不同。LPDDR5X是CPU旁边的薄膜(对手机而言更省电)。HBM是通过硅通孔(TSV)直接键合到GPU上的内存芯片堆栈,产生巨大的带宽。HBM堆栈高达2英寸以上;不可能塞进手机。',
          '为什么无法完全弥合:手机受到散热和功耗限制。HBM消耗大量功率(整个堆栈约~100+ W)。LPDDR5X约~5–10 W。在不摧毁电池续航的前提下,无法在物理上将HBM带宽塞进手机。',
          '结果:对于大型模型,设备端AI将始终比云AI慢。更小的模型、激进的量化和智能缓存才是解决方案。',
          '另一面:设备端是私密的、可离线使用的,对隐私敏感的任务实现零延迟。14倍的速度代价是隐私的成本。',
          '更新:三星在2026年8月25日的Hot Chips 2026上验证了LPDDR5X-PIM——在引脚兼容的芯片上实测吞吐量提升3.01倍(27.0 → 81.3 tokens/sec,基于Llama-3.1-8B),远早于本页此前引用的2027-2028年时间线。LPDDR6(仍为2027-2028年)目标~200 GB/s,比HBM3E慢约6倍。现在的PIM加上未来的LPDDR6,将大幅缩小手机与数据中心的差距,但无法完全消除——一旦PIM进入手机SoC,原始的14倍带宽差距在实践中将接近4-6倍。'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: '内存路线图: HBM4与LPDDR6',
        content: [
          '**HBM4 / HBM4E(SK海力士 + 三星,现已量产)**:SK海力士16层HBM4每堆栈>2 TB/s(目标2026年第三季度量产);三星12层HBM4E每堆栈3.6 TB/s,自2026年5月起送样。首先出现在Nvidia下一代GPU中。对手机仍不相关。',
          '**LPDDR5X-PIM(三星,2026年8月验证)**:内存内处理将计算嵌入DRAM芯片内部。这在Hot Chips 2026上从"开发中"变为"已验证、经过测试的芯片":实测推理提升3.01倍(27.0 → 81.3 tokens/sec,基于Llama-3.1-8B),PIM模式下内部带宽最高提升8倍,芯片引脚兼容。它不会达到HBM带宽,但这是真实的,且远早于此前的2027-2028年量产预估。',
          '**LPDDR6 / LPDDR6X-PIM(2027-2028年)**:标准LPDDR6估计~200+ GB/s——约为LPDDR5X带宽的2.3倍。对于7B Q4模型:200 GB/s ÷ 3.5 GB ≈ 理论57 tokens/sec(从24上升),现实约~20–35 tokens/sec。三星已经将目光投向LPDDR5X-PIM之后的LPDDR6X-PIM,并希望在2026年内获得JEDEC的初步规范。',
          '**现实**:即便LPDDR5X-PIM已出货、LPDDR6在路线图上,手机在推理上仍将比数据中心慢数倍——三星自己也将PIM定位为在成本/功耗受限设备上对HBM的补充,而非带宽对等的解决方案。',
          '**关于2026年下半年的设备端AI**:Exynos 2600 + 标准LPDDR5X仍是Galaxy S26的出货基准。LPDDR5X-PIM已通过验证,但尚未出现在已出货的手机SoC中——预计边缘AI加速器会率先采用。'
        ]
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'LPDDR5X的内存带宽是多少?', a: 'LPDDR5X在x64总线上以10.7 Gbps运行,提供85.6 GB/s的带宽——这是Galaxy S26、骁龙8 Elite Gen 5以及2026年大多数旗舰手机所使用的内存速度。这比数据中心用的HBM(从HBM2E的460 GB/s到HBM4/HBM4E每堆栈2-3.6 TB/s)慢约5.4到14倍,这也是为什么在相同模型规模下,端侧AI推理比数据中心推理慢得多。三星于2026年8月验证的LPDDR5X-PIM变体缩小了部分差距——在三星自己的Hot Chips 2026演示中,该方案以标准LPDDR5X 3.01倍的tokens/sec运行了Llama-3.1-8B。' },
          { q: '为什么内存带宽是AI推理的瓶颈?', a: '因为解码阶段(生成每个token)需要为一次前向传递将整个模型加载到内存中。计算单元很快完成,但内存无法足够快地供给数据。' },
          { q: '设备端AI的tokens/sec公式是什么?', a: '简化版:tokens/sec = memory_bandwidth / (model_size × bytes_per_precision)。对于85.6 GB/s下的7B FP16模型(14 GB):85.6 ÷ 14 = ~6 tokens/sec。Q4量化(3.5 GB):85.6 ÷ 3.5 = ~24 tokens/sec。' },
          { q: 'SK海力士主导HBM市场吗?', a: 'SK海力士主导HBM出货,根据2026年不同季度报告份额为50–62%。三星缩小了部分差距:2026年5月出货12层HBM4E样品,每堆栈3.6 TB/s,在这一具体指标上超过了SK海力士的HBM4规格。' },
          { q: '三星能在HBM上追上SK海力士吗?', a: '三星比以前更接近了:其12层HBM4E样品(3.6 TB/s,2026年5月)在纸面上超过了SK海力士的HBM4带宽规格,尽管SK仍在总出货量上领先。对于手机,三星根本不打算追赶HBM带宽——而是转而验证了LPDDR5X-PIM。' },
          { q: 'LPDDR6何时出货?', a: '仍预计在2027-2028年、Galaxy S27/S28时代出货,自上次更新以来没有变化。~200+ GB/s(LPDDR5X的2.3倍)。相比之下,LPDDR5X-PIM自2026年8月起已是经过验证的芯片——很可能先于LPDDR6到达边缘设备。' },
          { q: '为什么不能把HBM装进手机?', a: '物理限制:HBM堆栈高达2英寸以上。HBM功耗(~100+ W)会摧毁电池续航。LPDDR5X是薄膜,功耗5–10 W。HBM4/HBM4E并未改变这一点——新一代更快,但没有更小或更省电。' },
          { q: 'LPDDR5X-PIM能缩小与HBM的差距吗?', a: '部分可以,而且现在是实测数据而非预测。三星在Hot Chips 2026上展示了真实芯片,运行Llama-3.1-8B达到81.3 tokens/sec,相比标准LPDDR5X的27.0 tokens/sec——提升3.01倍。这仍远低于与HBM3E的14倍原始差距,但比本页此前引用的"约50%"预估有更大的实际改善。' },
          { q: '计算FLOPS对设备端AI重要吗?', a: '不像人们想象的那么重要。解码受内存限制,而非计算限制。配备更快内存的较慢计算单元胜过配备较慢内存的更快计算单元。' },
          { q: '我能在Galaxy S26上运行70B模型吗?', a: '技术上可以;实际上不行。70B Q4(~35 GB)得出85.6 GB/s ÷ 35 GB = ~2 tokens/sec。这是每秒1个token——对任何交互式任务都不可用。请坚持使用7B或更小的模型。' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[在Galaxy S26上运行本地AI: 本地设备AI解析指南 (2026)](/zh/local-llms/galaxy-s26-local-ai-on-device-2026) -- Galaxy S26上的本地AI',
          '[MRAM与内存计算：片上AI的下一个飞跃？](/zh/local-llms/mram-in-memory-computing-local-ai-2026) -- AI的MRAM与内存计算',
          '[本地LLM需要多少VRAM？](/zh/local-llms/how-much-vram-local-llm) -- 本地LLM所需VRAM',
          '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) -- 本地LLM硬件指南2026',
          '[移动本地LLM 2026：iPhone 16 Pro、iPad M4与Snapdragon X对比](/zh/local-llms/mobile-local-llms) -- 移动端本地LLM',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '设备上的AI和内存：为什么HBM内存驱动本地AI速度 (2026)',
      'description': 'HBM与LPDDR5X:内存带宽是AI瓶颈。SK Hynix HBM4 vs Samsung LPDDR5X-PIM(快3倍,2026年8月验证)。为什么设备上AI缓慢而数据中心AI快速。',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'zh',
      'url': 'https://www.promptquorum.com/zh/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': '内存带宽而非计算TOPS是AI推理的瓶颈。Galaxy S26具有LPDDR5X 85.6 GB/s;数据中心使用HBM3E 1.229 TB/s—14倍差异。三星在Hot Chips 2026上验证了LPDDR5X-PIM,将设备端吞吐量提升三倍。'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'zh',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '为什么内存带宽是AI推理的瓶颈?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '解码阶段需要为一次前向传递将整个模型加载到内存中。内存无法足够快地向计算单元供给数据。FLOPS很快;带宽很慢。'
          }
        }
      ]
    }
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-pt.webp',
    title: 'IA no Dispositivo e Memória: Por que a Memória HBM Impulsiona a Velocidade de IA Local (2026)',
    seoTitle: 'HBM vs LPDDR5X: Largura de Banda de IA no Dispositivo Explicada',
    intro: 'Largura de banda de memória, não TOPS de computação, é o gargalo para inferência de IA. O Galaxy S26 (Exynos 2600) tem LPDDR5X em 85,6 GB/s; data centers usam HBM3E em 1,229 TB/s—uma diferença de 14x. Essa lacuna explica por que modelos de 7B parâmetros executam em telefones a 8–15 tokens/seg, mas GPUs de data center lidam com 100+ tokens/seg. Samsung e SK Hynix são os principais players: SK Hynix domina HBM (62% de participação de mercado), enquanto Samsung está impulsionando LPDDR5X-PIM (Processamento em Memória) para estreitar a lacuna. Este guia explica o gargalo de memória, o papel da Samsung e SK Hynix, e o que isso significa para IA no dispositivo em 2026 e além.',
    metaDescription: 'HBM vs LPDDR5X: Largura de banda de memória é o gargalo de IA. SK Hynix HBM3E vs Samsung LPDDR5X-PIM. Por que IA no dispositivo é lenta e IA em data center é rápida.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Engenheiros de IA, designers de hardware, qualquer pessoa curiosa sobre por que IA local é mais lenta que IA em nuvem',
    primaryTerm: 'Memória HBM IA no dispositivo',
    targetKeywords: ['memória hbm', 'largura de banda hbm3e', 'largura de banda lpddr5x', 'gargalo largura de banda memória', 'velocidade ia dispositivo', 'sk hynix', 'samsung hbm'],
    leadAnswerBlock: '**A fase de decodificação de inferência LLM é limitada por largura de banda, não por computação: tokens/seg ≈ memory_bandwidth / model_size_in_bytes. Galaxy S26 LPDDR5X (85,6 GB/s) limita um modelo de 7B a ~24 tokens/seg máximo. GPU H100 data-center HBM3E (1,229 TB/s) atinge 100+ tokens/seg — o HBM4, agora em produção em massa (SK Hynix de 16 camadas, >2 TB/s; amostras HBM4E da Samsung de 12 camadas, 3,6 TB/s), leva isso ainda mais longe. A SK Hynix continua liderando o volume de HBM (cerca de 50–62% de participação, dependendo do trimestre de 2026); a Samsung respondeu do lado do celular: na Hot Chips 2026 (25 de agosto de 2026), mostrou um chip LPDDR5X-PIM compatível pino a pino rodando Llama-3.1-8B a 81,3 tokens/seg contra 27,0 tokens/seg em LPDDR5X padrão — um ganho real e medido de 3,01x, não uma projeção de laboratório. Esse gargalo de memória continua sendo o motivo fundamental pelo qual a IA local fica atrás da IA em nuvem, mas a diferença nos celulares acabou de encolher de forma significativa em relação ao trimestre anterior.',
    quickAnswerTop: {
      pt: {
        question: 'Por que a IA no dispositivo é muito mais lenta que a IA na nuvem?',
        answer: 'Largura de banda de memória. A fase de decodificação é limitada pela largura de banda (não por cálculo). No dispositivo (LPDDR5X 85,6 GB/s) vs data center (HBM3E 1,229 TB/s) = lacuna de 14x. Isso explica por que o Galaxy S26 faz ~15 tokens/seg vs GPU de data center >100 tokens/seg. Você não pode encaixar HBM em um celular, mas o LPDDR5X-PIM da Samsung, validado em agosto de 2026, reduz essa lacuna ao calcular dentro do próprio chip de memória, em vez de tentar igualar a largura de banda do HBM.',
        bullets: [
          'tokens/seg = largura de banda de memória / tamanho do modelo em bytes (simplificado, válido para a fase de decodificação)',
          'Modelo 7B FP16 (14 GB): LPDDR5X 85,6 GB/s ÷ 14 GB = ~6 tokens/seg (teoria); Q4 (3,5 GB) = ~24 tokens/seg',
          'Data center H100 HBM3E (1,229 TB/s): 1,229 TB/s ÷ 14 GB = ~88 tokens/seg (teoria)',
          'SK Hynix lidera os envios de HBM (cerca de 50–62% de participação, dependendo do trimestre de 2026), fornece Nvidia H100, H200, B200 GPUs',
          'A Samsung enviou amostras de HBM4E de 12 camadas a 3,6 TB/s por stack em maio de 2026, e demonstrou na Hot Chips 2026 (25 de agosto de 2026) o LPDDR5X-PIM rodando Llama-3.1-8B a 81,3 tokens/seg contra 27,0 tokens/seg em LPDDR5X padrão — um ganho medido de 3,01x',
          'HBM4 (>2 TB/s) já está em produção em massa: a SK Hynix mira sua variante de 16 camadas para o 3º trimestre de 2026, a Samsung já amostra HBM4E de 12 camadas; ambos permanecem irrelevantes para celulares—custo+energia proibitivos'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: 'Principais Conclusões', anchor: '#key-takeaways' },
      { label: 'Por Que a Largura de Banda Determina a Velocidade de IA', anchor: '#why-memory-matters' },
      { label: 'Comparação de Largura de Banda: LPDDR5X vs HBM', anchor: '#bandwidth-table' },
      { label: 'Samsung e SK Hynix: Quem Faz o Quê', anchor: '#samsung-sk-hynix-roles' },
      { label: 'Limites da IA no Dispositivo no Galaxy S26', anchor: '#on-device-limits' },
      { label: 'Data Center vs. Celular: A Lacuna de 14x', anchor: '#datacenter-vs-phone' },
      { label: 'Roteiro de Memória: HBM4 e LPDDR6', anchor: '#future-roadmap' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Largura de banda de memória, não TOPS, é o gargalo na fase de decodificação da inferência de IA. Fórmula: tokens/seg ≈ memory_bandwidth / model_size_in_bytes. Um modelo 7B em FP16 (14 GB) em LPDDR5X 85,6 GB/s = ~6 tokens/seg. O mesmo modelo quantizado em Q4 (3,5 GB) = ~24 tokens/seg. Data center H100 HBM3E (1,229 TB/s) = ~88 tokens/seg.',
          'A SK Hynix lidera os envios de HBM (cerca de 50–62% de participação dependendo do trimestre de 2026) e fornece para Nvidia H100, H200, B200. O HBM4 (>2 TB/s) já está em produção em massa: a SK Hynix mira sua variante de 16 camadas e 48 GB para o 3º trimestre de 2026, enquanto a Samsung enviou as primeiras amostras do setor de HBM4E de 12 camadas em maio de 2026, a 3,6 TB/s por stack — à frente da SK Hynix nessa métrica específica.',
          'A Samsung validou o LPDDR5X-PIM (Processamento em Memória) como silício real e testado na Hot Chips 2026 (25 de agosto de 2026) — não um conceito de laboratório. Rodando Llama-3.1-8B em um SoC acelerador de IA de borda, atingiu 81,3 tokens/seg contra 27,0 tokens/seg em LPDDR5X padrão: uma melhoria medida de 3,01x, com até 8x mais largura de banda interna no modo PIM. O chip é compatível pino a pino com o LPDDR5X padrão (mesmo encapsulamento de 561 pinos), então é uma atualização direta.',
          'A IA no dispositivo ainda será mais lenta que a IA em nuvem para modelos grandes — você não consegue encaixar HBM em um celular — mas a diferença nos celulares acabou de diminuir. O LPDDR5X-PIM não iguala a largura de banda do HBM; ele reduz o movimento de dados, por isso o ganho de throughput (3x) é menor que a lacuna bruta de largura de banda (14x), mas ainda relevante para cargas de trabalho reais.',
          'O Exynos 2600 (Galaxy S26) continua sendo lançado com LPDDR5X padrão, alcançando ~8–15 tokens/seg realistas para um modelo 7B quantizado. O LPDDR5X-PIM está validado, mas ainda não apareceu em um SoC de celular lançado comercialmente — espera-se que apareça primeiro em aceleradores de IA de borda.',
          'O gargalo de largura de banda de memória continua explicando por que fine-tuning ou destilação não ajudam: cada parâmetro ainda precisa ser carregado na memória a cada passagem. Modelos menores ajudam (3B, 1B), e a quantização continua sendo a solução base para celulares — PIM é uma alavanca adicional, não um substituto.'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: 'Por Que a Largura de Banda de Memória Determina a Velocidade de IA',
        content: [
          'Durante a fase de decodificação da inferência LLM, a GPU/NPU precisa carregar o modelo inteiro na memória, executar uma passagem direta por token e escrever a saída. O gargalo: com que rapidez você consegue alimentar parâmetros para as unidades de computação? Isso é largura de banda de memória, não TOPS de computação.',
          'Fórmula simplificada: tokens/seg = largura_banda_memória / (tamanho_modelo_em_bytes × bytes_por_precisão). Para FP16 (2 bytes por parâmetro), um modelo 7B = 14 GB. Em LPDDR5X 85,6 GB/s: 85,6 GB/s ÷ 14 GB = ~6 tokens/seg máximo teórico. Na prática, 3–5 tokens/seg devido ao overhead de computação e cache.',
          'A quantização muda drasticamente a equação. Q4 (4 bits, 0,5 byte por parâmetro) reduz um modelo 7B para 3,5 GB. 85,6 GB/s ÷ 3,5 GB = ~24 tokens/seg teóricos. No mundo real, ~8–15 tokens/seg, uma melhoria de 3–4x.',
          'O data center H100 com HBM3E (1,229 TB/s) consegue sustentar 100+ tokens/seg para o mesmo modelo, porque o HBM é 14x mais rápido. É por isso que modelos de fronteira (70B, 405B) só rodam em data centers—você precisa da largura de banda do HBM.',
          'Inferência é diferente de treinamento. Treinamento é limitado por computação (1000+ passagens para atualizar pesos). Inferência (especialmente com cache de prompt) é uma única passagem direta, puramente limitada por largura de banda de memória.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'A decodificação LLM é limitada por largura de banda de memória: tokens/seg = largura de banda / tamanho do modelo. No dispositivo 85,6 GB/s vs data center 1,229 TB/s = lacuna de 14x.' },
          { type: 'plain-terms', text: 'Pense em uma linha de montagem: computação são os trabalhadores, memória é a cadeia de suprimentos. Mais trabalhadores (mais FLOPS) não ajuda se os suprimentos (dados) chegam na mesma velocidade. Celulares não têm uma "cadeia de suprimentos rápida" (HBM).' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: 'Comparação de Largura de Banda de Memória: LPDDR5X vs HBM',
        image: '/images/hbm-bandwidth-comparison-pt.svg',
        imageCaption: 'Largura de banda de memória por tipo: LPDDR5X 85,6 GB/s (celulares), LPDDR5X-PIM (validado ago. 2026, 3,01x tokens/seg) vs HBM2E 460 GB/s, HBM3 819 GB/s, HBM3E 1,229 TB/s (Nvidia H100/H200/B200), e HBM4/HBM4E agora a 2–3,6 TB/s por stack. SK Hynix lidera os envios de HBM (~50–62%).',
        columns: ['Tipo de Memória', 'Largura de Banda', 'Usado Em', 'Tokens/seg (7B FP16)', 'Tokens/seg (7B Q4)'],
        rows: [
          { 'Tipo de Memória': 'LPDDR5X 10,7 Gbps', 'Largura de Banda': '85,6 GB/s (barramento x64)', 'Usado Em': 'Galaxy S26, Snapdragon 8 Elite Gen 5', 'Tokens/seg (7B FP16)': '~6 tokens/seg (teoria); ~3–5 real', 'Tokens/seg (7B Q4)': '~24 tokens/seg (teoria); ~8–15 real' },
          { 'Tipo de Memória': 'HBM2E', 'Largura de Banda': '~460 GB/s por stack', 'Usado Em': 'GPUs antigas (P100, V100)', 'Tokens/seg (7B FP16)': '~33 tokens/seg (teoria)', 'Tokens/seg (7B Q4)': '~131 tokens/seg (teoria)' },
          { 'Tipo de Memória': 'HBM3 19,2 Gbps', 'Largura de Banda': '~819 GB/s por stack', 'Usado Em': 'Nvidia A100, versão 80GB', 'Tokens/seg (7B FP16)': '~59 tokens/seg (teoria)', 'Tokens/seg (7B Q4)': '~234 tokens/seg (teoria)' },
          { 'Tipo de Memória': 'HBM3E 21,4 Gbps', 'Largura de Banda': '1,18–1,229 TB/s por stack', 'Usado Em': 'Nvidia H100, H200, B200', 'Tokens/seg (7B FP16)': '~88 tokens/seg (teoria); ~60–80 real', 'Tokens/seg (7B Q4)': '~352 tokens/seg (teoria); ~200+ real' },
          { 'Tipo de Memória': 'HBM4 (SK Hynix, 16 camadas)', 'Largura de Banda': '>2 TB/s por stack, 48 GB', 'Usado Em': 'GPUs Nvidia (produção em massa T3 2026)', 'Tokens/seg (7B FP16)': '~143 tokens/seg (teoria)', 'Tokens/seg (7B Q4)': '~571 tokens/seg (teoria)' },
          { 'Tipo de Memória': 'HBM4E (Samsung, 12 camadas)', 'Largura de Banda': '3,6 TB/s por stack', 'Usado Em': 'Amostras enviadas mai. 2026', 'Tokens/seg (7B FP16)': '~257 tokens/seg (teoria)', 'Tokens/seg (7B Q4)': '~1.029 tokens/seg (teoria)' },
          { 'Tipo de Memória': 'LPDDR5X-PIM (Samsung, validado)', 'Largura de Banda': '85,6 GB/s + até 8x interno (modo PIM)', 'Usado Em': 'Mostrado na Hot Chips 2026, compatível pino a pino', 'Tokens/seg (7B FP16)': 'Não medido para 7B FP16', 'Tokens/seg (7B Q4)': 'Llama-3.1-8B: 81,3 vs 27,0 tok/seg (3,01x)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: 'Samsung e SK Hynix: Quem Faz o Quê',
        content: [
          '**SK Hynix — Líder em Volume de HBM**: a SK lidera os envios de HBM, com participação reportada entre 50–62% aproximadamente, dependendo do trimestre de 2026 e da metodologia de medição. A SK fornece HBM3E para a Nvidia usar em GPUs H100, H200 e B200, e mira a produção em massa de seu HBM4 de 16 camadas (48 GB, >2 TB/s) para o 3º trimestre de 2026.',
          '**Samsung — Liderança de Velocidade com HBM4E, LPDDR5X-PIM Validado**: a Samsung enviou as primeiras amostras do setor de HBM4E de 12 camadas em 29 de maio de 2026, a 3,6 TB/s por stack — à frente da especificação HBM4 da SK Hynix nessa métrica, embora a SK ainda envie mais volume total. No lado dos celulares, a Samsung apresentou o LPDDR5X-PIM na Hot Chips 2026 (25 de agosto de 2026) como silício validado e testado: um SoC acelerador de IA de borda rodou Llama-3.1-8B a 81,3 tokens/seg contra 27,0 tokens/seg em LPDDR5X padrão (3,01x), com até 8x de largura de banda interna no modo PIM. O chip usa o mesmo encapsulamento de 561 pinos que o LPDDR5X padrão, então é um substituto direto, não um novo formato.',
          '**Dinâmica Competitiva**: a Samsung continua enviando amostras de HBM (HBM3E, agora HBM4E), mas historicamente ficou atrás da SK em rendimento e volume total. O posicionamento da Samsung para o LPDDR5X-PIM é explícito: um complemento ao HBM, não um substituto — mirando smartphones, PCs com IA e aceleradores de borda, onde o custo, consumo de energia e complexidade de encapsulamento do HBM são proibitivos.',
          '**As duas empresas fornecem para a Nvidia**: a SK Hynix e a Samsung fornecem HBM para a VRAM das GPUs Nvidia; DRAM padrão (LPDDR/DDR) cobre a memória host/CPU. Nenhuma das duas fornece a computação (a Nvidia projeta os núcleos da GPU).',
          '**Cronograma**: o HBM4 está em produção em massa agora (a SK Hynix mira o 3º trimestre de 2026 para sua parte de 16 camadas; a Samsung já está amostrando HBM4E de 12 camadas). O LPDDR5X-PIM é silício validado desde agosto de 2026, bem à frente da estimativa de produção de 2027-2028 dada na última atualização. LPDDR6/LPDDR6X-PIM é o próximo alvo da Samsung, com uma especificação inicial da JEDEC esperada para o final de 2026.'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'Limites da IA no Dispositivo no Galaxy S26',
        content: [
          'O Galaxy S26 Exynos 2600 com LPDDR5X 85,6 GB/s define o teto prático para inferência LLM no dispositivo. Um modelo 7B quantizado em Q4 alcança ~8–15 tokens/seg de desempenho realista. Isso é adequado para tarefas sensíveis à latência, mas pouco prático para conversas longas.',
          'Limites de tamanho de modelo: um modelo 7B é prático. Um modelo 13B em Q4 (~6,5 GB) alcança 85,6 GB/s ÷ 6,5 GB = ~13 tokens/seg, quase nenhuma melhoria. Um modelo 70B em Q4 (~35 GB) alcança 85,6 GB/s ÷ 35 GB = ~2 tokens/seg—inutilizável.',
          'A quantização é essencial: FP16 (2 bytes/parâmetro) é pouco prático. Q4 (0,5 byte/parâmetro) é o ponto ideal—modelos 4x menores com perda de qualidade aceitável.',
          'Troca entre velocidade e qualidade: 7B Q4 é ~8–15 tokens/seg. 3B Q4 é ~24–36 tokens/seg. 1B Q4 é ~60+ tokens/seg.',
          'Casos de uso práticos: autocompletar, sugestão de código em tempo real, transcrição no dispositivo, resumo local. Não práticos: conversas longas, raciocínio complexo, diálogo de múltiplos turnos sem cache.',
          'O gargalo é a largura de banda, não a computação ou o tamanho dos pesos. O LPDDR5X-PIM ajuda reduzindo o movimento de dados necessário, mas não elimina o limite fundamental de largura de banda.'
        ],
        items: [
          'Use a largura de banda LPDDR5X 85,6 GB/s para estimar tokens/seg máximos: divida pelo tamanho do modelo em GB',
          '7B Q4 (3,5 GB): ~24 tokens/seg teoria; ~8–15 real (prático)',
          '13B Q4 (6,5 GB): ~13 tokens/seg teoria; ~4–8 real (lento)',
          '1B Q4 (~500 MB): ~171 tokens/seg teoria; ~50–100 real (rápido)',
          'A quantização é obrigatória: Q4 é a base para modelos utilizáveis no dispositivo',
          'O LPDDR5X-PIM (validado, ainda não no Galaxy S26) pode adicionar ~3x de throughput quando chegar a um SoC de celular'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: 'Data Center vs. Celular: A Lacuna de Largura de Banda de 14x',
        image: '/images/hbm-datacenter-vs-phone-gap-pt.svg',
        imageCaption: 'Celular (LPDDR5X 85,6 GB/s) vs GPU de data center (HBM3E 1,229 TB/s) para o mesmo modelo 7B Q4 (3,5 GB): ~8-15 tok/s real no dispositivo vs ~200+ tok/s no data center, uma lacuna de 14x.',
        content: [
          'Uma GPU Nvidia H100 com HBM3E (1,229 TB/s) é 14x mais rápida em throughput de inferência que um Galaxy S26 (LPDDR5X 85,6 GB/s). Essa lacuna não se deve a FLOPS de computação (ambos são rápidos), mas à pura largura de banda de memória.',
          'Por que a lacuna existe: o HBM é fisicamente diferente. O LPDDR5X é um filme fino ao lado da CPU (eficiente em energia para celulares). O HBM é uma pilha de chips de memória conectados diretamente à GPU usando vias através de silício (TSVs), criando largura de banda massiva. Stacks de HBM têm 2+ polegadas de altura; impossível encaixar em um celular.',
          'Por que não pode ser fechada: celulares têm restrições térmicas e de energia. O HBM consome energia significativa (~100+ W para um stack completo). O LPDDR5X é ~5–10 W. Você não consegue encaixar fisicamente a largura de banda do HBM em um celular sem destruir a duração da bateria.',
          'Consequência: a IA no dispositivo sempre será mais lenta que a IA em nuvem para modelos grandes. Modelos menores, quantização agressiva e cache inteligente são as soluções.',
          'O outro lado: no dispositivo é privado, funciona offline e tem latência zero para tarefas sensíveis à privacidade. A penalidade de velocidade de 14x é o preço da privacidade.',
          'Atualização: a Samsung validou o LPDDR5X-PIM na Hot Chips 2026 (25 de agosto de 2026) — ganho de throughput medido de 3,01x (27,0 → 81,3 tokens/seg em Llama-3.1-8B) em um chip compatível pino a pino, bem à frente do cronograma de 2027-2028 citado anteriormente nesta página. O LPDDR6 (ainda 2027-2028) mira ~200 GB/s, ~6x mais lento que o HBM3E. Juntos, o PIM agora e o LPDDR6 depois reduzem significativamente a lacuna celular-vs-data-center sem fechá-la — a lacuna bruta de 14x se aproxima de 4-6x na prática assim que o PIM chegar aos SoCs de celular.'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: 'Roteiro de Memória: HBM4 e LPDDR6',
        content: [
          '**HBM4 / HBM4E (SK Hynix + Samsung, agora em produção em massa)**: >2 TB/s por stack para o HBM4 de 16 camadas da SK Hynix (produção em massa visada para o 3º trimestre de 2026); 3,6 TB/s por stack para o HBM4E de 12 camadas da Samsung, em amostragem desde maio de 2026. Chega primeiro nas GPUs de próxima geração da Nvidia. Continua irrelevante para celulares.',
          '**LPDDR5X-PIM (Samsung, validado em agosto de 2026)**: o Processing-In-Memory embute computação dentro do die DRAM. Isso passou de "em desenvolvimento" para "demonstrado, silício testado" na Hot Chips 2026: ganho de inferência medido de 3,01x (27,0 → 81,3 tokens/seg em Llama-3.1-8B) com até 8x de largura de banda interna no modo PIM, em um chip compatível pino a pino. Não vai igualar a largura de banda do HBM, mas é real e está à frente da estimativa anterior de produção de 2027-2028.',
          '**LPDDR6 / LPDDR6X-PIM (2027-2028)**: ~200+ GB/s estimados para o LPDDR6 padrão — cerca de 2,3x a largura de banda do LPDDR5X. Para um modelo 7B Q4: 200 GB/s ÷ 3,5 GB ≈ 57 tokens/seg teóricos (subindo de 24), ~20–35 tokens/seg reais. A Samsung já está olhando além do LPDDR5X-PIM para o LPDDR6X-PIM, e espera uma especificação inicial da JEDEC ainda em 2026.',
          '**Realidade**: mesmo com o LPDDR5X-PIM sendo lançado e o LPDDR6 no roteiro, os celulares continuarão sendo várias vezes mais lentos que data centers para inferência — a própria Samsung posiciona o PIM como um complemento ao HBM para dispositivos limitados por custo/energia, não uma solução de paridade de largura de banda.',
          '**Para IA no dispositivo, no final de 2026**: Exynos 2600 + LPDDR5X padrão continua sendo a base lançada para o Galaxy S26. O LPDDR5X-PIM está validado, mas ainda não apareceu em um SoC de celular lançado comercialmente—espere que os aceleradores de IA de borda o recebam primeiro.'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          { q: 'Qual é a largura de banda de memória do LPDDR5X?', a: 'O LPDDR5X a 10,7 Gbps em um barramento x64 entrega 85,6 GB/s — a velocidade de memória usada no Galaxy S26, Snapdragon 8 Elite Gen 5 e na maioria dos celulares topo de linha de 2026. Isso é cerca de 5,4x a 14x mais lento que o HBM de data center (do HBM2E a 460 GB/s até o HBM4/HBM4E a 2-3,6 TB/s por stack), por isso a inferência de IA no dispositivo é muito mais lenta que a de data center para o mesmo tamanho de modelo. A variante LPDDR5X-PIM da Samsung, validada em agosto de 2026, fecha parte dessa lacuna — rodou o Llama-3.1-8B a 3,01x os tokens/seg do LPDDR5X padrão na própria demonstração da Samsung na Hot Chips 2026.' },
          { q: 'Por que a largura de banda de memória é o gargalo para inferência de IA?', a: 'Porque a fase de decodificação (gerar cada token) exige carregar o modelo inteiro na memória para uma passagem direta. As unidades de computação terminam rápido, mas a memória não consegue alimentá-las com dados rápido o suficiente.' },
          { q: 'Qual é a fórmula de tokens/seg para IA no dispositivo?', a: 'Simplificada: tokens/seg = largura_banda_memória / (tamanho_modelo × bytes_por_precisão). Para um modelo 7B FP16 (14 GB) a 85,6 GB/s: 85,6 ÷ 14 = ~6 tokens/seg. Quantizado Q4 (3,5 GB): 85,6 ÷ 3,5 = ~24 tokens/seg.' },
          { q: 'A SK Hynix domina o mercado de HBM?', a: 'A SK Hynix lidera os envios de HBM, com participação reportada de 50–62% dependendo do trimestre de 2026. A Samsung fechou parte da lacuna: enviou amostras de HBM4E de 12 camadas a 3,6 TB/s em maio de 2026, à frente da especificação HBM4 da SK nesse ponto específico.' },
          { q: 'A Samsung pode alcançar a SK Hynix em HBM?', a: 'A Samsung está mais próxima do que antes: suas amostras de HBM4E de 12 camadas (3,6 TB/s, maio de 2026) superam no papel a especificação de largura de banda HBM4 da SK Hynix, embora a SK ainda lidere no volume total. Para celulares, a Samsung nem tenta igualar a largura de banda do HBM—validou o LPDDR5X-PIM em vez disso.' },
          { q: 'Quando o LPDDR6 será lançado?', a: 'Ainda estimado para 2027-2028 na era Galaxy S27/S28, sem mudanças desde a última atualização. ~200+ GB/s (2,3x LPDDR5X). O LPDDR5X-PIM, por outro lado, já é silício validado desde agosto de 2026—provavelmente chegará a dispositivos de borda antes do LPDDR6.' },
          { q: 'Por que não é possível colocar HBM em um celular?', a: 'Restrições físicas: stacks de HBM têm 2+ polegadas de altura. O consumo de energia do HBM (~100+ W) acaba com a duração da bateria. O LPDDR5X é filme fino, 5–10 W. Isso não mudou com HBM4/HBM4E—as novas gerações são mais rápidas, mas não menores nem mais eficientes em energia.' },
          { q: 'O LPDDR5X-PIM vai fechar a lacuna com o HBM?', a: 'Parcialmente, e agora é medido, não projetado. A Samsung mostrou um chip real na Hot Chips 2026 rodando Llama-3.1-8B a 81,3 tokens/seg contra 27,0 tokens/seg em LPDDR5X padrão—um ganho de 3,01x. Isso ainda fica bem abaixo da lacuna bruta de 14x com o HBM3E, mas é uma melhoria real maior que a estimativa de "~50%" citada anteriormente nesta página.' },
          { q: 'O FLOPS de computação é relevante para IA no dispositivo?', a: 'Não tanto quanto se pensa. A decodificação é limitada por memória, não por computação. Uma unidade de computação mais lenta com memória mais rápida vence uma mais rápida com memória mais lenta.' },
          { q: 'Posso rodar um modelo 70B no Galaxy S26?', a: 'Tecnicamente sim; na prática não. 70B Q4 (~35 GB) dá 85,6 GB/s ÷ 35 GB = ~2 tokens/seg. Isso é 1 token por segundo—inutilizável para qualquer tarefa interativa. Fique com 7B ou menor.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[Executar IA Local no Galaxy S26: IA no Dispositivo Explicada (2026)](/pt/local-llms/galaxy-s26-local-ai-on-device-2026) -- IA no dispositivo no Galaxy S26',
          '[MRAM e Computação em Memória: O próximo salto para IA em dispositivo?](/pt/local-llms/mram-in-memory-computing-local-ai-2026) -- MRAM e computação em memória para IA',
          '[Quanta VRAM você precisa para LLMs locais?](/pt/local-llms/how-much-vram-local-llm) -- VRAM necessária para LLMs locais',
          '[Guia de Hardware para LLM Local 2026](/pt/local-llms/local-llm-hardware-guide-2026) -- guia de hardware LLM local 2026',
          '[LLMs Locais em Celulares 2026: iPhone 16 Pro, iPad M4 e Snapdragon X](/pt/local-llms/mobile-local-llms) -- LLMs locais em celular',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'IA no Dispositivo e Memória: Por que a Memória HBM Impulsiona a Velocidade de IA Local (2026)',
      'description': 'HBM vs LPDDR5X: Largura de banda de memória é o gargalo de IA. SK Hynix HBM4 vs Samsung LPDDR5X-PIM (3x mais rápido, validado ago. 2026). Por que IA no dispositivo é lenta e IA em data center é rápida.',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'pt',
      'url': 'https://www.promptquorum.com/pt/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': 'Largura de banda de memória, não TOPS de computação, é o gargalo para inferência de IA. O Galaxy S26 tem LPDDR5X em 85,6 GB/s; data centers usam HBM3E em 1,229 TB/s—uma diferença de 14x. A Samsung validou o LPDDR5X-PIM na Hot Chips 2026, triplicando o throughput no dispositivo.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'pt',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Por que a largura de banda de memória é o gargalo para inferência de IA?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A fase de decodificação exige carregar o modelo inteiro na memória para uma passagem direta. A memória não consegue alimentar dados rápido o suficiente para as unidades de computação. FLOPS são rápidos; largura de banda é lenta.'
          }
        }
      ]
    }
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-09-29',
    last_full_refresh: '2026-08-29',
    theme: 'Hardware & Performance',
    heroImage: '/images/hbm-memory-on-device-ai-samsung-sk-hynix-2026-overview-hero-ar.webp',
    title: 'الذكاء الاصطناعي على الجهاز والذاكرة: لماذا تدفع ذاكرة ⁨HBM⁩ سرعة الذكاء الاصطناعي المحلي (⁨2026⁩)',
    seoTitle: 'ذاكرة ⁨HBM⁩ مقابل ⁨LPDDR5X⁩: النطاق للذكاء على الجهاز',
    intro: 'عرض النطاق الترددي للذاكرة، وليس حساب TOPS، هو الاختناق في الاستدلال بالذكاء الاصطناعي. يحتوي Galaxy S26 (Exynos 2600) على LPDDR5X بـ 85.6 GB/s؛ مراكز البيانات تستخدم HBM3E بـ 1.229 TB/s—فارق 14 مرة. هذا الفارق يفسر لماذا تعمل نماذج المعاملات 7B على الهواتف بـ 8–15 رموز/ثانية لكن وحدات GPU في مراكز البيانات تتعامل مع 100+ رموز/ثانية. Samsung و SK Hynix هما اللاعبان الرئيسيان: SK Hynix تهيمن على HBM (حصة سوقية 62%)، بينما تدفع Samsung LPDDR5X-PIM (المعالجة داخل الذاكرة) لتضييق الفارق. يشرح هذا الدليل اختناق الذاكرة، ودور Samsung و SK Hynix، وما يعنيه الذكاء الاصطناعي على الجهاز في 2026 وما بعده.',
    metaDescription: 'عرض النطاق الترددي للذاكرة هو اختناق الذكاء الاصطناعي. ⁨SK Hynix HBM3E⁩ مقابل ⁨Samsung LPDDR5X⁩: لماذا الذكاء على الجهاز أبطأ من مراكز البيانات.',
    publishDate: '2026-06-15',
    dateModified: '2026-08-29',
    readTime: 'قراءة 11 دقيقة',
    educationalLevel: 'Intermediate',
    audience: 'مهندسو الذكاء الاصطناعي، مصممو الأجهزة، أي شخص فضولي حول سبب كون الذكاء الاصطناعي المحلي أبطأ من الذكاء الاصطناعي بالسحابة',
    primaryTerm: 'ذاكرة HBM الذكاء الاصطناعي على الجهاز',
    targetKeywords: ['ذاكرة hbm', 'عرض النطاق الترددي hbm3e', 'عرض النطاق الترددي lpddr5x', 'اختناق عرض النطاق الترددي للذاكرة', 'سرعة ذكاء اصطناعي على الجهاز', 'sk hynix', 'samsung hbm'],
    leadAnswerBlock: '**مرحلة فك التشفير في استدلال LLM مقيدة بعرض النطاق الترددي، وليست مقيدة بالحساب: رموز/ثانية ≈ عرض_النطاق_الترددي_للذاكرة / حجم_النموذج_بالبايت. LPDDR5X في Galaxy S26 (85.6 GB/s) يحد من نموذج 7B إلى ~24 رموز/ثانية كحد أقصى. وحدة GPU H100 في مركز البيانات HBM3E (1.229 TB/s) تحقق 100+ رموز/ثانية — HBM4، وهو الآن في الإنتاج الضخم (SK Hynix بـ16 طبقة، >2 TB/s؛ عينات Samsung HBM4E بـ12 طبقة، 3.6 TB/s)، يدفع ذلك أبعد. لا تزال SK Hynix تتصدر حجم شحنات HBM (حوالي 50–62% من الحصة حسب ربع 2026)؛ ردت Samsung من جانب الهاتف: في مؤتمر Hot Chips 2026 (25 أغسطس 2026)، عرضت شريحة LPDDR5X-PIM متوافقة مع الدبابيس شغّلت Llama-3.1-8B بمعدل 81.3 رمز/ثانية مقابل 27.0 رمز/ثانية على LPDDR5X القياسية — تحسّن حقيقي ومُقاس بمقدار 3.01 ضعف، وليس توقعاً مخبرياً. يظل هذا الاختناق في الذاكرة السبب الأساسي لتأخر الذكاء الاصطناعي المحلي عن الذكاء الاصطناعي السحابي، لكن الفجوة على الهواتف انكمشت للتو بشكل ملحوظ مقارنة بالربع السابق.',
    quickAnswerTop: {
      ar: {
        question: 'لماذا الذكاء الاصطناعي على الجهاز أبطأ بكثير من الذكاء الاصطناعي في السحابة؟',
        answer: 'عرض النطاق الترددي للذاكرة. مرحلة الفك هي محدودة بعرض النطاق (ليست محدودة بالحساب). على الجهاز (LPDDR5X 85.6 GB/s) مقابل مركز بيانات (HBM3E 1.229 TB/s) = فجوة 14x. هذا يفسر لماذا يقوم Galaxy S26 بـ ~15 رموز/ثانية مقابل وحدة GPU في مركز البيانات >100 رموز/ثانية. لا يمكنك وضع HBM في الهاتف، لكن تقنية LPDDR5X-PIM من Samsung، التي تم التحقق منها في أغسطس 2026، تُقلّص الفجوة عبر الحساب داخل شريحة الذاكرة نفسها بدلاً من مجاراة عرض نطاق HBM.',
        bullets: [
          'رموز/ثانية = عرض النطاق الترددي للذاكرة / حجم النموذج بالبايت(مبسط، صحيح لمرحلة الفك)',
          'نموذج 7B FP16 (14 GB): LPDDR5X 85.6 GB/s ÷ 14 GB = ~6 رموز/ثانية(نظرية); Q4 (3.5 GB) = ~24 رموز/ثانية',
          'مركز بيانات H100 HBM3E (1.229 TB/s): 1.229 TB/s ÷ 14 GB = ~88 رموز/ثانية(نظرية)',
          'SK Hynix تتصدر شحنات HBM (حوالي 50–62% من الحصة حسب ربع 2026)، وتزود وحدات GPU Nvidia H100 و H200 و B200',
          'شحنت Samsung عينات HBM4E بـ 12 طبقة بعرض نطاق 3.6 TB/s لكل حزمة في مايو 2026، وعرضت في مؤتمر Hot Chips 2026 (25 أغسطس 2026) شريحة LPDDR5X-PIM التي شغّلت نموذج Llama-3.1-8B بمعدل 81.3 رمز/ثانية مقابل 27.0 رمز/ثانية على LPDDR5X القياسية — تحسّن مُقاس بمقدار 3.01 ضعف',
          'HBM4 (>2 TB/s) دخلت الآن مرحلة الإنتاج الضخم: تستهدف SK Hynix نسختها ذات 16 طبقة للربع الثالث من 2026، بينما تعرض Samsung بالفعل عينات HBM4E ذات 12 طبقة؛ يبقى كلاهما غير ذي صلة بالهواتف—التكلفة والطاقة عائق محظور'
        ],
        updatedDate: '2026-08-28'
      }
    },
    toc: [
      { label: 'أبرز النقاط', anchor: '#key-takeaways' },
      { label: 'لماذا يحدد عرض النطاق الترددي سرعة الذكاء الاصطناعي', anchor: '#why-memory-matters' },
      { label: 'مقارنة عرض النطاق الترددي: LPDDR5X مقابل HBM', anchor: '#bandwidth-table' },
      { label: 'Samsung وSK Hynix: من يصنع ماذا', anchor: '#samsung-sk-hynix-roles' },
      { label: 'حدود الذكاء الاصطناعي على الجهاز في Galaxy S26', anchor: '#on-device-limits' },
      { label: 'مركز البيانات مقابل الهاتف: فجوة الـ14x', anchor: '#datacenter-vs-phone' },
      { label: 'خارطة طريق الذاكرة: HBM4 وLPDDR6', anchor: '#future-roadmap' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' }
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'عرض النطاق الترددي للذاكرة، وليس TOPS، هو الاختناق في مرحلة فك تشفير استدلال الذكاء الاصطناعي. الصيغة: رموز/ثانية ≈ عرض_النطاق_الترددي_للذاكرة / حجم_النموذج_بالبايت. نموذج 7B بصيغة FP16 (14 GB) على LPDDR5X 85.6 GB/s = ~6 رموز/ثانية. نفس النموذج مُكمَّم Q4 (3.5 GB) = ~24 رموز/ثانية. مركز بيانات H100 HBM3E (1.229 TB/s) = ~88 رموز/ثانية.',
          'تتصدر SK Hynix شحنات HBM (حوالي 50–62% حسب ربع 2026) وتزود Nvidia H100 وH200 وB200. HBM4 (>2 TB/s) دخل الآن مرحلة الإنتاج الضخم: تستهدف SK Hynix نسختها ذات 16 طبقة و48 GB للربع الثالث من 2026، بينما شحنت Samsung في مايو 2026 أول عينات HBM4E ذات 12 طبقة في القطاع بعرض نطاق 3.6 TB/s لكل حزمة — متقدمة على SK Hynix في هذا المقياس تحديداً.',
          'تحققت Samsung من LPDDR5X-PIM (المعالجة داخل الذاكرة) كشريحة حقيقية ومُختبرة في مؤتمر Hot Chips 2026 (25 أغسطس 2026) — وليس مفهوماً مخبرياً. أثناء تشغيل Llama-3.1-8B على شريحة SoC مسرّعة للذكاء الاصطناعي الطرفي، حققت 81.3 رمز/ثانية مقابل 27.0 رمز/ثانية على LPDDR5X القياسية: تحسّن مُقاس بمقدار 3.01 ضعف، مع عرض نطاق داخلي يصل حتى 8 أضعاف في وضع PIM. الشريحة متوافقة من حيث الدبابيس مع LPDDR5X القياسية (نفس حزمة 561 دبوساً)، فهي ترقية مباشرة.',
          'سيبقى الذكاء الاصطناعي على الجهاز أبطأ من الذكاء الاصطناعي السحابي للنماذج الكبيرة — لا يمكن وضع HBM في هاتف — لكن الفجوة على الهواتف انكمشت للتو. لا يضاهي LPDDR5X-PIM عرض نطاق HBM؛ بل يقلل حركة البيانات بدلاً من ذلك، ولهذا يكون تحسّن الإنتاجية (3 أضعاف) أصغر من فجوة عرض النطاق الترددي الخام (14 ضعفاً) لكنه لا يزال مهماً لأعباء العمل الحقيقية.',
          'لا يزال Exynos 2600 (Galaxy S26) يُشحن مع LPDDR5X القياسي، محققاً ~8–15 رموز/ثانية واقعياً لنموذج 7B مُكمَّم. LPDDR5X-PIM تم التحقق منه لكنه لم يظهر بعد في شريحة SoC هاتف مشحونة — من المتوقع أن يظهر أولاً في مسرّعات الذكاء الاصطناعي الطرفية.',
          'لا يزال اختناق عرض النطاق الترددي للذاكرة يفسر لماذا لا يساعد الضبط الدقيق أو التقطير: لا يزال يتعين تحميل كل معامل في الذاكرة في كل تمريرة أمامية. النماذج الأصغر تساعد (3B، 1B)، ويظل التكميم الحل الأساسي للهواتف — PIM رافعة إضافية، وليس بديلاً عنه.'
        ]
      },
      'why-memory-matters': {
        id: 'why-memory-matters',
        title: 'لماذا يحدد عرض النطاق الترددي للذاكرة سرعة الذكاء الاصطناعي',
        content: [
          'أثناء مرحلة فك التشفير في استدلال LLM، يجب على GPU/NPU تحميل النموذج بأكمله في الذاكرة، وإجراء تمريرة أمامية واحدة لكل رمز، وكتابة الناتج. الاختناق: ما مدى سرعة تغذية وحدات الحساب بالمعاملات؟ هذا عرض النطاق الترددي للذاكرة، وليس TOPS الحسابية.',
          'صيغة مبسطة: رموز/ثانية = عرض_النطاق_الترددي_للذاكرة / (حجم_النموذج_بالبايت × بايت_لكل_دقة). بصيغة FP16 (2 بايت لكل معامل)، نموذج 7B = 14 GB. على LPDDR5X 85.6 GB/s: 85.6 GB/s ÷ 14 GB = الحد الأقصى النظري ~6 رموز/ثانية. عملياً، 3–5 رموز/ثانية بسبب حمل الحساب والذاكرة المؤقتة.',
          'يغيّر التكميم المعادلة بشكل كبير. Q4 (4 بت، 0.5 بايت لكل معامل) يقلّص نموذج 7B إلى 3.5 GB. 85.6 GB/s ÷ 3.5 GB = ~24 رموز/ثانية نظرياً. في العالم الحقيقي ~8–15 رموز/ثانية، تحسّن بمقدار 3–4 أضعاف.',
          'يمكن لمركز بيانات H100 المزوّد بـHBM3E (1.229 TB/s) الحفاظ على 100+ رموز/ثانية لنفس النموذج، لأن HBM أسرع بـ14 ضعفاً. لهذا تعمل النماذج المتطورة (70B، 405B) فقط في مراكز البيانات—تحتاج إلى عرض نطاق HBM.',
          'يختلف الاستدلال عن التدريب. التدريب مقيد بالحساب (1000+ تمريرة لتحديث الأوزان). الاستدلال (خاصة بعد التخزين المؤقت للموجّه) هو تمريرة أمامية واحدة، مقيدة بشكل خالص بعرض النطاق الترددي للذاكرة.'
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'فك تشفير LLM مقيد بعرض النطاق الترددي للذاكرة: رموز/ثانية = عرض النطاق الترددي / حجم النموذج. على الجهاز 85.6 GB/s مقابل مركز البيانات 1.229 TB/s = فجوة 14x.' },
          { type: 'plain-terms', text: 'تخيل خط تجميع: الحساب هو العمال، والذاكرة هي سلسلة التوريد. المزيد من العمال (المزيد من FLOPS) لا يساعد إذا وصلت الإمدادات (البيانات) بنفس السرعة. تفتقر الهواتف إلى "سلسلة توريد سريعة" (HBM).' }
        ]
      },
      'bandwidth-table': {
        id: 'bandwidth-table',
        title: 'مقارنة عرض النطاق الترددي للذاكرة: LPDDR5X مقابل HBM',
        image: '/images/hbm-bandwidth-comparison-ar.svg',
        imageCaption: 'عرض النطاق الترددي للذاكرة حسب النوع: LPDDR5X 85.6 GB/s (الهواتف)، LPDDR5X-PIM (تم التحقق منه أغسطس 2026، 3.01 ضعف رموز/ثانية) مقابل HBM2E 460 GB/s، HBM3 819 GB/s، HBM3E 1.229 TB/s (Nvidia H100/H200/B200)، وHBM4/HBM4E الآن بين 2–3.6 TB/s لكل حزمة. تتصدر SK Hynix شحنات HBM (~50–62%).',
        columns: ['نوع الذاكرة', 'عرض النطاق الترددي', 'يُستخدم في', 'رموز/ثانية (7B FP16)', 'رموز/ثانية (7B Q4)'],
        rows: [
          { 'نوع الذاكرة': 'LPDDR5X 10.7 Gbps', 'عرض النطاق الترددي': '85.6 GB/s (ناقل x64)', 'يُستخدم في': 'Galaxy S26، Snapdragon 8 Elite Gen 5', 'رموز/ثانية (7B FP16)': '~6 رموز/ثانية (نظرية)؛ ~3–5 واقعياً', 'رموز/ثانية (7B Q4)': '~24 رموز/ثانية (نظرية)؛ ~8–15 واقعياً' },
          { 'نوع الذاكرة': 'HBM2E', 'عرض النطاق الترددي': '~460 GB/s لكل حزمة', 'يُستخدم في': 'وحدات GPU قديمة (P100، V100)', 'رموز/ثانية (7B FP16)': '~33 رموز/ثانية (نظرية)', 'رموز/ثانية (7B Q4)': '~131 رموز/ثانية (نظرية)' },
          { 'نوع الذاكرة': 'HBM3 19.2 Gbps', 'عرض النطاق الترددي': '~819 GB/s لكل حزمة', 'يُستخدم في': 'Nvidia A100، إصدار 80GB', 'رموز/ثانية (7B FP16)': '~59 رموز/ثانية (نظرية)', 'رموز/ثانية (7B Q4)': '~234 رموز/ثانية (نظرية)' },
          { 'نوع الذاكرة': 'HBM3E 21.4 Gbps', 'عرض النطاق الترددي': '1.18–1.229 TB/s لكل حزمة', 'يُستخدم في': 'Nvidia H100، H200، B200', 'رموز/ثانية (7B FP16)': '~88 رموز/ثانية (نظرية)؛ ~60–80 واقعياً', 'رموز/ثانية (7B Q4)': '~352 رموز/ثانية (نظرية)؛ ~200+ واقعياً' },
          { 'نوع الذاكرة': 'HBM4 (SK Hynix، 16 طبقة)', 'عرض النطاق الترددي': '>2 TB/s لكل حزمة، 48 GB', 'يُستخدم في': 'وحدات GPU من Nvidia (إنتاج ضخم Q3 2026)', 'رموز/ثانية (7B FP16)': '~143 رموز/ثانية (نظرية)', 'رموز/ثانية (7B Q4)': '~571 رموز/ثانية (نظرية)' },
          { 'نوع الذاكرة': 'HBM4E (Samsung، 12 طبقة)', 'عرض النطاق الترددي': '3.6 TB/s لكل حزمة', 'يُستخدم في': 'عينات شُحنت مايو 2026', 'رموز/ثانية (7B FP16)': '~257 رموز/ثانية (نظرية)', 'رموز/ثانية (7B Q4)': '~1,029 رموز/ثانية (نظرية)' },
          { 'نوع الذاكرة': 'LPDDR5X-PIM (Samsung، تم التحقق)', 'عرض النطاق الترددي': '85.6 GB/s + حتى 8 أضعاف داخلياً (وضع PIM)', 'يُستخدم في': 'عُرض في Hot Chips 2026، متوافق مع الدبابيس', 'رموز/ثانية (7B FP16)': 'لم يُقاس لـ7B FP16', 'رموز/ثانية (7B Q4)': 'Llama-3.1-8B: 81.3 مقابل 27.0 رمز/ثانية (3.01x)' }
        ]
      },
      'samsung-sk-hynix-roles': {
        id: 'samsung-sk-hynix-roles',
        title: 'Samsung وSK Hynix: من يصنع ماذا',
        content: [
          '**SK Hynix — الرائدة في حجم HBM**: تتصدر SK شحنات HBM، بحصة مُبلَّغ عنها تتراوح بين 50–62% تقريباً حسب ربع 2026 ومنهجية القياس. تزود SK شركة Nvidia بـHBM3E لوحدات GPU H100 وH200 وB200، وتستهدف الإنتاج الضخم لـHBM4 ذي 16 طبقة (48 GB، >2 TB/s) للربع الثالث من 2026.',
          '**Samsung — الريادة في سرعة HBM4E، LPDDR5X-PIM تم التحقق منها**: شحنت Samsung في 29 مايو 2026 أول عينات HBM4E ذات 12 طبقة في القطاع، بعرض نطاق 3.6 TB/s لكل حزمة — متقدمة على مواصفة HBM4 من SK Hynix في هذا المقياس تحديداً، رغم أن SK لا تزال تشحن حجماً إجمالياً أكبر. من جانب الهواتف، عرضت Samsung LPDDR5X-PIM في مؤتمر Hot Chips 2026 (25 أغسطس 2026) كشريحة تم التحقق منها واختبارها: شغّلت شريحة SoC مسرّعة للذكاء الاصطناعي الطرفي نموذج Llama-3.1-8B بمعدل 81.3 رمز/ثانية مقابل 27.0 رمز/ثانية على LPDDR5X القياسية (3.01x)، مع عرض نطاق داخلي يصل حتى 8 أضعاف في وضع PIM. تستخدم الشريحة نفس حزمة 561 دبوساً مثل LPDDR5X القياسية، فهي بديل مباشر وليست شكلاً جديداً.',
          '**الديناميكيات التنافسية**: تواصل Samsung أخذ عينات HBM (HBM3E، والآن HBM4E)، لكنها تأخرت تاريخياً عن SK في العائد والحجم الإجمالي. موقع Samsung من LPDDR5X-PIM واضح: مكمّل لـHBM، وليس بديلاً — يستهدف الهواتف الذكية وأجهزة الكمبيوتر بالذكاء الاصطناعي والمسرّعات الطرفية حيث تكون تكلفة واستهلاك طاقة وتعقيد تغليف HBM باهظة.',
          '**كلتا الشركتين تزودان Nvidia**: توفر SK Hynix وSamsung ذاكرة HBM لذاكرة VRAM في وحدات GPU من Nvidia؛ تغطي ذاكرة DRAM القياسية (LPDDR/DDR) ذاكرة المضيف/المعالج. لا توفر أي منهما الحوسبة (تصمم Nvidia أنوية GPU).',
          '**الجدول الزمني**: HBM4 في الإنتاج الضخم الآن (تستهدف SK Hynix الربع الثالث من 2026 لجزئها ذي 16 طبقة؛ وتأخذ Samsung بالفعل عينات من HBM4E ذي 12 طبقة). LPDDR5X-PIM شريحة تم التحقق منها منذ أغسطس 2026، متقدمة كثيراً على تقدير الإنتاج 2027-2028 المُعطى في التحديث الأخير. LPDDR6/LPDDR6X-PIM هو الهدف التالي لـSamsung، مع أمل بمواصفة JEDEC أولية بحلول نهاية 2026.'
        ]
      },
      'on-device-limits': {
        id: 'on-device-limits',
        title: 'حدود الذكاء الاصطناعي على الجهاز في Galaxy S26',
        content: [
          'يحدد Galaxy S26 Exynos 2600 مع LPDDR5X 85.6 GB/s السقف العملي لاستدلال LLM على الجهاز. يصل نموذج 7B مُكمَّم بـQ4 إلى أداء واقعي ~8–15 رموز/ثانية. هذا مناسب للمهام الحساسة لزمن الاستجابة لكنه غير عملي للمحادثات الطويلة.',
          'حدود حجم النموذج: نموذج 7B عملي. يصل نموذج 13B بـQ4 (~6.5 GB) إلى 85.6 GB/s ÷ 6.5 GB = ~13 رموز/ثانية، تحسّن ضئيل بالكاد. يصل نموذج 70B بـQ4 (~35 GB) إلى 85.6 GB/s ÷ 35 GB = ~2 رموز/ثانية—غير قابل للاستخدام.',
          'التكميم أساسي: FP16 (2 بايت/معامل) غير عملي. Q4 (0.5 بايت/معامل) هو النقطة المثلى—نماذج أصغر بـ4 أضعاف مع خسارة جودة مقبولة.',
          'المقايضة بين السرعة والجودة: 7B Q4 هو ~8–15 رموز/ثانية. 3B Q4 هو ~24–36 رموز/ثانية. 1B Q4 هو ~60+ رموز/ثانية.',
          'حالات الاستخدام العملية: الإكمال التلقائي، اقتراح الشيفرة في الوقت الفعلي، النسخ على الجهاز، التلخيص المحلي. غير عملية: المحادثات الطويلة، الاستدلال المعقد، الحوار متعدد الأدوار بدون تخزين مؤقت.',
          'الاختناق هو عرض النطاق الترددي، وليس الحساب أو حجم الأوزان. تساعد LPDDR5X-PIM من خلال تقليل حركة البيانات اللازمة، لكنها لا تلغي حد عرض النطاق الترددي الأساسي.'
        ],
        items: [
          'استخدم عرض نطاق LPDDR5X 85.6 GB/s لتقدير رموز/ثانية القصوى: اقسم على حجم النموذج بالجيجابايت',
          '7B Q4 (3.5 GB): ~24 رموز/ثانية نظرياً؛ ~8–15 واقعياً (عملي)',
          '13B Q4 (6.5 GB): ~13 رموز/ثانية نظرياً؛ ~4–8 واقعياً (بطيء)',
          '1B Q4 (~500 MB): ~171 رموز/ثانية نظرياً؛ ~50–100 واقعياً (سريع)',
          'التكميم إلزامي: Q4 هو الأساس للنماذج القابلة للاستخدام على الجهاز',
          'قد تضيف LPDDR5X-PIM (تم التحقق منها، لم تصل بعد إلى Galaxy S26) ~3 أضعاف الإنتاجية عند وصولها إلى شريحة SoC هاتف'
        ]
      },
      'datacenter-vs-phone': {
        id: 'datacenter-vs-phone',
        title: 'مركز البيانات مقابل الهاتف: فجوة عرض النطاق الترددي 14x',
        image: '/images/hbm-datacenter-vs-phone-gap-ar.svg',
        imageCaption: 'الهاتف (LPDDR5X 85.6 GB/s) مقابل وحدة GPU لمركز البيانات (HBM3E 1.229 TB/s) لنفس نموذج 7B Q4 (3.5 GB): ~8-15 رمز/ثانية واقعياً على الجهاز مقابل ~200+ رمز/ثانية في مركز البيانات، فجوة عرض نطاق ترددي 14x.',
        content: [
          'وحدة GPU من نوع Nvidia H100 مزودة بـHBM3E (1.229 TB/s) أسرع بـ14 ضعفاً في إنتاجية الاستدلال من Galaxy S26 (LPDDR5X 85.6 GB/s). لا تعود هذه الفجوة إلى FLOPS الحسابية (كلاهما سريع)، بل إلى عرض النطاق الترددي الخالص للذاكرة.',
          'لماذا توجد الفجوة: HBM مختلفة فيزيائياً. LPDDR5X هي طبقة رقيقة بجانب المعالج (فعالة من حيث الطاقة للهواتف). HBM هي كومة من شرائح الذاكرة مرتبطة مباشرة بوحدة GPU باستخدام ممرات عبر السيليكون (TSVs)، ما يخلق عرض نطاق ترددي هائل. حزم HBM ارتفاعها 2+ إنش؛ يستحيل وضعها في هاتف.',
          'لماذا لا يمكن سدها: الهواتف مقيدة حرارياً وطاقوياً. تستهلك HBM طاقة كبيرة (~100+ واط للحزمة الكاملة). LPDDR5X تستهلك ~5–10 واط. لا يمكنك وضع عرض نطاق HBM فيزيائياً في هاتف دون تدمير عمر البطارية.',
          'النتيجة: سيبقى الذكاء الاصطناعي على الجهاز أبطأ من الذكاء الاصطناعي السحابي للنماذج الكبيرة. النماذج الأصغر، والتكميم العدواني، والتخزين المؤقت الذكي هي الحلول.',
          'الجانب الآخر: على الجهاز خاص، يعمل دون اتصال، وبزمن استجابة صفري للمهام الحساسة للخصوصية. عقوبة السرعة بمقدار 14 ضعفاً هي ثمن الخصوصية.',
          'تحديث: تحققت Samsung من LPDDR5X-PIM في مؤتمر Hot Chips 2026 (25 أغسطس 2026) — تحسّن إنتاجية مُقاس بمقدار 3.01 ضعف (27.0 → 81.3 رمز/ثانية على Llama-3.1-8B) على شريحة متوافقة مع الدبابيس، متقدمة كثيراً على الجدول الزمني 2027-2028 المذكور سابقاً في هذه الصفحة. تستهدف LPDDR6 (لا تزال 2027-2028) ~200 GB/s، أبطأ بحوالي 6 أضعاف من HBM3E. معاً، تقلص PIM الآن وLPDDR6 لاحقاً الفجوة بين الهاتف ومركز البيانات بشكل كبير دون سدها بالكامل — تقترب فجوة الـ14x الخام من 4-6x عملياً بمجرد وصول PIM إلى شرائح SoC الهواتف.'
        ]
      },
      'future-roadmap': {
        id: 'future-roadmap',
        title: 'خارطة طريق الذاكرة: HBM4 وLPDDR6',
        content: [
          '**HBM4 / HBM4E (SK Hynix + Samsung، الآن في الإنتاج الضخم)**: >2 TB/s لكل حزمة لـHBM4 ذي 16 طبقة من SK Hynix (إنتاج ضخم مستهدف Q3 2026)؛ 3.6 TB/s لكل حزمة لـHBM4E ذي 12 طبقة من Samsung، تؤخذ منه عينات منذ مايو 2026. يصل أولاً في وحدات GPU الجيل التالي من Nvidia. لا يزال غير ذي صلة بالهواتف.',
          '**LPDDR5X-PIM (Samsung، تم التحقق في أغسطس 2026)**: تُضمّن المعالجة داخل الذاكرة عمليات الحساب داخل شريحة DRAM نفسها. تحوّل هذا من "قيد التطوير" إلى "تم عرضه، شريحة مُختبرة" في مؤتمر Hot Chips 2026: تحسّن استدلال مُقاس بمقدار 3.01 ضعف (27.0 → 81.3 رمز/ثانية على Llama-3.1-8B) مع عرض نطاق داخلي يصل حتى 8 أضعاف في وضع PIM، على شريحة متوافقة مع الدبابيس. لن تضاهي عرض نطاق HBM، لكنها حقيقية ومتقدمة على تقدير الإنتاج السابق 2027-2028.',
          '**LPDDR6 / LPDDR6X-PIM (2027-2028)**: ~200+ GB/s مقدرة لـLPDDR6 القياسية — حوالي 2.3 ضعف عرض نطاق LPDDR5X. لنموذج 7B Q4: 200 GB/s ÷ 3.5 GB ≈ 57 رموز/ثانية نظرياً (ارتفاعاً من 24)، ~20–35 واقعياً. تنظر Samsung بالفعل إلى ما بعد LPDDR5X-PIM نحو LPDDR6X-PIM، وتأمل بمواصفة JEDEC أولية بحلول نهاية 2026.',
          '**الواقع**: حتى مع شحن LPDDR5X-PIM ووجود LPDDR6 على خارطة الطريق، ستظل الهواتف أبطأ بعدة أضعاف من مراكز البيانات في الاستدلال — تضع Samsung نفسها PIM كمكمّل لـHBM للأجهزة المقيدة بالتكلفة/الطاقة، وليس حلاً لتكافؤ عرض النطاق الترددي.',
          '**بالنسبة للذكاء الاصطناعي على الجهاز، أواخر 2026**: يظل Exynos 2600 + LPDDR5X القياسي هو الأساس المشحون لـGalaxy S26. تم التحقق من LPDDR5X-PIM لكنها لم تظهر بعد في شريحة SoC هاتف مشحونة—من المتوقع أن تحصل عليها مسرّعات الذكاء الاصطناعي الطرفية أولاً.'
        ]
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما هو عرض النطاق الترددي لذاكرة LPDDR5X؟', a: 'توفر LPDDR5X بسرعة 10.7 جيجابت/ثانية على ناقل x64 عرض نطاق ترددي يبلغ 85.6 جيجابايت/ثانية — وهي سرعة الذاكرة المستخدمة في Galaxy S26 وSnapdragon 8 Elite Gen 5 ومعظم هواتف 2026 الرائدة. هذا أبطأ بنحو 5.4 إلى 14 مرة من ذاكرة HBM المخصصة لمراكز البيانات (من HBM2E بسرعة 460 جيجابايت/ثانية إلى HBM4/HBM4E بسرعة 2-3.6 تيرابايت/ثانية لكل حزمة)، وهو ما يفسر كون استدلال الذكاء الاصطناعي على الجهاز أبطأ بكثير من الاستدلال في مراكز البيانات لنفس حجم النموذج. يسدّ متغير LPDDR5X-PIM من سامسونج، الذي تم التحقق منه في أغسطس 2026، جزءاً من هذه الفجوة — إذ شغّل Llama-3.1-8B بمعدل 3.01 أضعاف عدد الرموز في الثانية مقارنة بـ LPDDR5X القياسي في عرض سامسونج التوضيحي الخاص بمؤتمر Hot Chips 2026.' },
          { q: 'لماذا يمثل عرض النطاق الترددي للذاكرة اختناقاً لاستدلال الذكاء الاصطناعي؟', a: 'لأن مرحلة فك التشفير (توليد كل رمز) تتطلب تحميل النموذج بأكمله في الذاكرة لتمريرة أمامية واحدة. تنتهي وحدات الحساب بسرعة، لكن الذاكرة لا يمكنها تغذيتها بالبيانات بالسرعة الكافية.' },
          { q: 'ما هي صيغة رموز/ثانية للذكاء الاصطناعي على الجهاز؟', a: 'مبسطة: رموز/ثانية = عرض_النطاق_الترددي_للذاكرة / (حجم_النموذج × بايت_لكل_دقة). لنموذج 7B FP16 (14 GB) على 85.6 GB/s: 85.6 ÷ 14 = ~6 رموز/ثانية. مُكمَّم Q4 (3.5 GB): 85.6 ÷ 3.5 = ~24 رموز/ثانية.' },
          { q: 'هل تهيمن SK Hynix على سوق HBM؟', a: 'تتصدر SK Hynix شحنات HBM، بحصة مُبلَّغ عنها 50–62% حسب ربع 2026. سدت Samsung جزءاً من الفجوة: شحنت عينات HBM4E ذات 12 طبقة بعرض نطاق 3.6 TB/s في مايو 2026، متقدمة على مواصفة HBM4 من SK في هذه النقطة تحديداً.' },
          { q: 'هل يمكن لـSamsung اللحاق بـSK Hynix في HBM؟', a: 'أصبحت Samsung أقرب مما كانت عليه: عيناتها من HBM4E ذات 12 طبقة (3.6 TB/s، مايو 2026) تتفوق نظرياً على مواصفة عرض نطاق HBM4 من SK Hynix، رغم أن SK لا تزال تتصدر الحجم الإجمالي. بالنسبة للهواتف، لا تحاول Samsung حتى مضاهاة عرض نطاق HBM—بل تحققت من LPDDR5X-PIM بدلاً من ذلك.' },
          { q: 'متى تُشحن LPDDR6؟', a: 'لا تزال مقدرة لـ2027-2028 في عصر Galaxy S27/S28، دون تغيير منذ آخر تحديث. ~200+ GB/s (2.3 ضعف LPDDR5X). أما LPDDR5X-PIM فهي بالفعل شريحة تم التحقق منها منذ أغسطس 2026—من المرجح أن تصل إلى الأجهزة الطرفية قبل LPDDR6.' },
          { q: 'لماذا لا يمكن وضع HBM في هاتف؟', a: 'قيود فيزيائية: ارتفاع حزم HBM 2+ إنش. استهلاك طاقة HBM (~100+ واط) يدمر عمر البطارية. LPDDR5X طبقة رقيقة، 5–10 واط. لم يتغير هذا مع HBM4/HBM4E—الأجيال الجديدة أسرع لكنها ليست أصغر أو أقل استهلاكاً للطاقة.' },
          { q: 'هل ستسد LPDDR5X-PIM الفجوة مع HBM؟', a: 'جزئياً، والآن هذا مُقاس وليس متوقعاً. عرضت Samsung شريحة حقيقية في Hot Chips 2026 تشغّل Llama-3.1-8B بمعدل 81.3 رمز/ثانية مقابل 27.0 رمز/ثانية على LPDDR5X القياسية—تحسّن بمقدار 3.01 ضعف. لا يزال هذا بعيداً عن الفجوة الخام 14x مع HBM3E، لكنه تحسّن حقيقي أكبر من تقدير "~50%" المذكور سابقاً في هذه الصفحة.' },
          { q: 'هل FLOPS الحسابية مهمة للذكاء الاصطناعي على الجهاز؟', a: 'ليست بقدر ما يُعتقد. فك التشفير مقيد بالذاكرة، وليس بالحساب. وحدة حساب أبطأ مع ذاكرة أسرع تتفوق على وحدة أسرع مع ذاكرة أبطأ.' },
          { q: 'هل يمكنني تشغيل نموذج 70B على Galaxy S26؟', a: 'من الناحية التقنية نعم؛ عملياً لا. 70B Q4 (~35 GB) يعطي 85.6 GB/s ÷ 35 GB = ~2 رموز/ثانية. هذا رمز واحد في الثانية—غير قابل للاستخدام لأي مهمة تفاعلية. التزم بـ7B أو أصغر.' }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[تشغيل الذكاء الاصطناعي المحلي على Galaxy S26: شرح الذكاء الاصطناعي على الجهاز (2026)](/ar/local-llms/galaxy-s26-local-ai-on-device-2026) -- الذكاء الاصطناعي على الجهاز في Galaxy S26',
          '[MRAM والحوسبة داخل الذاكرة: الخطوة التالية لذكاء اصطناعي على الجهاز؟](/ar/local-llms/mram-in-memory-computing-local-ai-2026) -- MRAM والحوسبة داخل الذاكرة للذكاء الاصطناعي',
          '[كم من VRAM تحتاج لنماذج LLM المحلية؟](/ar/local-llms/how-much-vram-local-llm) -- VRAM المطلوبة لنماذج LLM المحلية',
          '[دليل أجهزة LLM المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026) -- دليل أجهزة LLM المحلية 2026',
          '[نماذج LLM المحلية على الهواتف 2026: iPhone 16 Pro وiPad M4 وSnapdragon X](/ar/local-llms/mobile-local-llms) -- نماذج LLM المحلية على الهاتف',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'الذكاء الاصطناعي على الجهاز والذاكرة: لماذا تدفع ذاكرة HBM سرعة الذكاء الاصطناعي المحلي (2026)',
      'description': 'HBM مقابل LPDDR5X: عرض النطاق الترددي للذاكرة هو اختناق الذكاء الاصطناعي. SK Hynix HBM4 مقابل Samsung LPDDR5X-PIM (أسرع 3 أضعاف، تم التحقق أغسطس 2026). لماذا الذكاء الاصطناعي على الجهاز بطيء والذكاء الاصطناعي في مركز البيانات سريع.',
      'image': 'https://www.promptquorum.com/og-images/hbm-memory-on-device-ai-samsung-sk-hynix-2026.png',
      'datePublished': '2026-06-15',
      'dateModified': '2026-08-29',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'inLanguage': 'ar',
      'url': 'https://www.promptquorum.com/ar/local-llms/hbm-memory-on-device-ai-samsung-sk-hynix-2026',
      'articleBody': 'عرض النطاق الترددي للذاكرة، وليس حساب TOPS، هو الاختناق في الاستدلال بالذكاء الاصطناعي. Galaxy S26 لديها LPDDR5X بـ 85.6 GB/s؛ مراكز البيانات تستخدم HBM3E بـ 1.229 TB/s—فارق 14 مرة. تحققت Samsung من LPDDR5X-PIM في Hot Chips 2026، مضاعفة الإنتاجية على الجهاز ثلاث مرات.'
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ar',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'لماذا يمثل عرض النطاق الترددي للذاكرة اختناقاً لاستدلال الذكاء الاصطناعي؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'تتطلب مرحلة فك التشفير تحميل النموذج بأكمله في الذاكرة لتمريرة أمامية واحدة. لا يمكن للذاكرة تغذية وحدات الحساب بالبيانات بالسرعة الكافية. FLOPS سريعة؛ عرض النطاق الترددي بطيء.'
          }
        }
      ]
    }
  }
};
