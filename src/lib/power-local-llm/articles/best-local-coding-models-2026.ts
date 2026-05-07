// Power Local LLM — Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral
// Slug: best-local-coding-models-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Best Local Coding Models in 2026: Qwen3-Coder vs DeepSeek vs Codestral',
    seoTitle: 'Best Local Coding Models 2026: Qwen3-Coder, DeepSeek, Codestral',
    intro:
      'Six open-weight coding models compete for the local-LLM coding crown in 2026: Qwen3-Coder (30B and 7B), DeepSeek Coder V3, Codestral 22B, Llama 3.3 Code, Granite Code, and StarCoder 2. They differ on parameter count, context window, training-data emphasis, license, and VRAM footprint — and the right pick depends on which of these constraints binds first for your hardware and your language. This guide compares them on what is publicly verifiable: architecture, sizes, context, licenses, VRAM math, and vendor-reported benchmark direction, with citations to each model card so you can re-check the numbers yourself.',
    metaDescription:
      'Six local coding models compared on size, context, license, VRAM, and vendor-reported HumanEval+ direction. Qwen3-Coder 30B is the default pick for May 2026; full breakdown inside.',
    twitterDescription:
      'Qwen3-Coder, DeepSeek Coder V3, Codestral, Llama 3.3 Code, Granite Code, StarCoder 2 — six open-weight coding models, six different sweet spots. Verdict per scenario inside.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Codestral 22B',
      'Llama 3.3 Code',
      'Granite Code 34B',
      'Granite Code 8B',
      'StarCoder 2 15B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'Apple M5 MacBook Pro 16 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Developers running coding LLMs locally who need to choose a model by hardware budget, context window, and language emphasis — not by marketing. Assumes familiarity with quantization, VRAM math, and OpenAI-compatible inference servers.',
    readTime: '15 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local coding model',
    targetKeywords: [
      'best local coding model 2026',
      'qwen3-coder vs deepseek',
      'codestral vs qwen',
      'local llm for coding',
      'open source coding model',
      'local llm humaneval',
    ],
    leadAnswerBlock:
      '**Qwen3-Coder 30B is the default local coding model in May 2026 — strongest published HumanEval+ direction among open-weight models, 256K-token context, Apache 2.0 licence, and Q4_K_M weights that fit on a 24 GB GPU. DeepSeek Coder V3 is the heavyweight pick when you need the largest context window and have 48 GB+ of VRAM. Codestral 22B is the speed-and-licence pick for teams that need the Mistral non-commercial / commercial split clarified. Llama 3.3 Code, Granite Code, and StarCoder 2 are situational choices for ecosystem fit (Llama tooling), enterprise-friendly licensing (Granite), or deep multi-language coverage (StarCoder 2). Pick by binding constraint — VRAM tier, context length, or licence — not by leaderboard rank.**',
    quickAnswerTop: {
      en: {
        question: 'Which local coding LLM is best for developers in 2026?',
        answer:
          'Pick Qwen3-Coder 30B if you have 24 GB of VRAM and want the strongest open-weight coding model in May 2026 — it leads vendor-reported HumanEval+ direction, supports a 256K context window, and ships under Apache 2.0. Pick Qwen3-Coder 7B for laptops and 8 GB cards. Pick DeepSeek Coder V3 if you have 48 GB+ of VRAM and need the longest context window in this set for whole-repo work. Pick Codestral 22B for fast inference and a clear commercial-use story (Mistral Non-Production licence with paid Mistral commercial licensing available). Pick Llama 3.3 Code for ecosystem fit if your existing stack already uses Llama models. Pick Granite Code or StarCoder 2 for enterprise licensing predictability or broad-language coverage. The decision is rarely about leaderboard rank; it is about which constraint — VRAM, context, or licence — binds first.',
        bullets: [
          'Qwen3-Coder 30B — default local coding pick in May 2026: leading HumanEval+ direction, 256K context, Apache 2.0, fits on 24 GB GPU at Q4_K_M.',
          'Qwen3-Coder 7B — best laptop / 8 GB GPU pick. Surprisingly strong for autocomplete and small-file edits.',
          'DeepSeek Coder V3 — largest context window in this set; needs 48 GB+ of VRAM at Q4_K_M for the full model.',
          'Codestral 22B — fastest of the 22B+ tier; cleaner commercial-use path via Mistral commercial licensing.',
          'Llama 3.3 Code — choose for Llama-ecosystem fit (existing tooling, fine-tunes); coding direction trails Qwen3-Coder.',
          'Granite Code (IBM) and StarCoder 2 (BigCode) — enterprise / breadth picks; rarely the absolute best, often the most defensible licence.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Comparison Table', anchor: '#comparison-table' },
      { label: 'Which One Should You Pick?', anchor: '#which-one' },
      { label: 'Qwen3-Coder: Deep Dive', anchor: '#qwen3-coder' },
      { label: 'DeepSeek Coder V3: Deep Dive', anchor: '#deepseek-coder' },
      { label: 'Codestral 22B: Deep Dive', anchor: '#codestral' },
      { label: 'Llama 3.3 Code: Deep Dive', anchor: '#llama-code' },
      { label: 'Granite Code: Deep Dive', anchor: '#granite-code' },
      { label: 'StarCoder 2: Deep Dive', anchor: '#starcoder-2' },
      { label: 'VRAM Math by Quantization', anchor: '#vram-math' },
      { label: 'Context Window Comparison', anchor: '#context-window' },
      { label: 'Licensing Comparison', anchor: '#licensing' },
      { label: 'Decision Tree', anchor: '#decision-tree' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen3-Coder 30B (Alibaba, Apache 2.0)** is the default local coding model in May 2026 — leads vendor-reported HumanEval+ direction among open-weight models, supports a 256K-token context window, and runs at Q4_K_M on a 24 GB consumer GPU.',
          '**Qwen3-Coder 7B** is the strongest sub-10B coding model — fits 8–10 GB cards, runs well on a 16 GB MacBook, and powers autocomplete-class workflows where 30B is overkill.',
          '**DeepSeek Coder V3** offers the largest practical context window in this set and excels at multi-file reasoning — but the full model needs 48 GB+ of VRAM at Q4_K_M; smaller MoE-derived variants close the gap on 24 GB cards.',
          '**Codestral 22B (Mistral)** is the speed pick — lower active parameter count, fast inference, clear commercial path via Mistral Commercial licensing. Slightly behind Qwen3-Coder on coding direction but ahead on tokens-per-second.',
          '**Llama 3.3 Code** trails Qwen3-Coder on published coding direction, but wins where the surrounding ecosystem (existing fine-tunes, Llama-specific tooling) matters more than raw rank.',
          '**Granite Code (IBM, Apache 2.0)** is built for enterprise contexts where licence clarity and audit posture matter more than leaderboard position. The 34B variant is the strongest of the family; the 8B variant is the laptop pick.',
          '**StarCoder 2 (BigCode, BigCode OpenRAIL-M)** spans the widest range of programming languages of any model in this set, with strong coverage of niche languages (Rust, Lua, Haskell, Solidity).',
          '**VRAM is the binding constraint for most readers.** Pick the largest model that fits at Q4_K_M with 2–4 GB of headroom for context and tooling — not the model with the highest leaderboard score.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Sweet-spot pick (May 2026):** Qwen3-Coder 30B at Q4_K_M on a 24 GB GPU.',
          '**Laptop / 8–10 GB GPU pick:** Qwen3-Coder 7B at Q4_K_M (~5 GB).',
          '**Long-context pick:** DeepSeek Coder V3 at Q4_K_M on 48 GB+ of VRAM.',
          '**Speed pick:** Codestral 22B at Q4_K_M — fastest inference among the 22B+ tier.',
          '**Enterprise / audit-friendly pick:** Granite Code 34B (IBM, Apache 2.0).',
          '**Niche-language pick:** StarCoder 2 15B (Rust, Lua, Haskell, Solidity coverage).',
          '**VRAM math at Q4_K_M:** roughly `(parameters in B) × 0.6 GB` plus 2–4 GB context overhead.',
          '**Licences are not equal.** Qwen3-Coder, DeepSeek Coder V3, and Granite Code are Apache 2.0. Codestral has the Mistral Non-Production licence with separate commercial terms. Llama 3.3 uses the Llama Community Licence (commercial-friendly with Meta\'s policy gates). StarCoder 2 ships under BigCode OpenRAIL-M.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Six Local Coding Models Compare in 2026',
        content:
          'All numbers below are publicly verifiable against the cited model cards (see the Sources section). HumanEval+ direction is vendor-reported; treat it as ranking signal, not absolute precision — re-check on the model card before any production decision.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Qwen3-Coder 30B is the default May 2026 pick; the rest of the field wins on hardware fit, context length, license posture, or language coverage.',
          },
          {
            type: 'plain-terms',
            text: 'Six open-weight coding models, no clear "best for everything" winner. Qwen3-Coder leads on the public coding benchmark direction; DeepSeek leads on context window; Codestral leads on speed; Granite leads on licence clarity; StarCoder leads on niche-language coverage. The right pick is the one whose biggest constraint matches your biggest constraint.',
          },
        ],
        columns: ['Model', 'Size', 'VRAM (Q4_K_M)', 'Context window', 'Licence', 'Best for'],
        rows: [
          {
            'Model': 'Qwen3-Coder 30B',
            'Size': '~30B params',
            'VRAM (Q4_K_M)': '~17–18 GB',
            'Context window': '256K',
            'Licence': 'Apache 2.0',
            'Best for': 'Default pick for 24 GB GPUs in May 2026',
          },
          {
            'Model': 'Qwen3-Coder 7B',
            'Size': '~7B params',
            'VRAM (Q4_K_M)': '~5 GB',
            'Context window': '128K',
            'Licence': 'Apache 2.0',
            'Best for': 'Laptops, 8–10 GB GPUs, autocomplete workloads',
          },
          {
            'Model': 'DeepSeek Coder V3',
            'Size': 'MoE, ~36B active of larger total',
            'VRAM (Q4_K_M)': '~48 GB+ (full); smaller variants ~24 GB',
            'Context window': '128K (extendable)',
            'Licence': 'Apache 2.0',
            'Best for': 'Long-context, multi-file, repo-wide reasoning',
          },
          {
            'Model': 'Codestral 22B',
            'Size': '~22B params',
            'VRAM (Q4_K_M)': '~13 GB',
            'Context window': '32K',
            'Licence': 'Mistral Non-Production (commercial via Mistral)',
            'Best for': 'Fast inference, EU-team commercial licensing path',
          },
          {
            'Model': 'Llama 3.3 Code',
            'Size': '~70B (general) / 8B variants',
            'VRAM (Q4_K_M)': '~40 GB (70B) / ~5 GB (8B)',
            'Context window': '128K',
            'Licence': 'Llama Community Licence',
            'Best for': 'Llama-ecosystem fit, existing fine-tune workflows',
          },
          {
            'Model': 'Granite Code 34B',
            'Size': '~34B params',
            'VRAM (Q4_K_M)': '~20 GB',
            'Context window': '128K',
            'Licence': 'Apache 2.0',
            'Best for': 'Enterprise audit, predictable licence posture',
          },
          {
            'Model': 'StarCoder 2 15B',
            'Size': '~15B params',
            'VRAM (Q4_K_M)': '~9 GB',
            'Context window': '16K',
            'Licence': 'BigCode OpenRAIL-M',
            'Best for': 'Broad language coverage incl. niche languages',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Which One Should You Pick',
        content:
          '**The right model is decided by your binding constraint — VRAM, context window, or licence — not by leaderboard rank.** Use this shortcut.',
        columns: ['Your situation', 'Pick'],
        rows: [
          { 'Your situation': 'I have a 24 GB GPU and want the best general-purpose local coding model', 'Pick': 'Qwen3-Coder 30B' },
          { 'Your situation': 'I have a 12–16 GB GPU and want a strong everyday model', 'Pick': 'Qwen3-Coder 7B (with quality headroom) or Codestral 22B (with speed headroom)' },
          { 'Your situation': 'I have an 8 GB GPU or a 16 GB MacBook', 'Pick': 'Qwen3-Coder 7B' },
          { 'Your situation': 'I have 48 GB+ of VRAM and work on whole-repo tasks', 'Pick': 'DeepSeek Coder V3' },
          { 'Your situation': 'I am building a commercial product and need licence clarity above all', 'Pick': 'Granite Code 34B (Apache 2.0) or DeepSeek Coder V3 (Apache 2.0)' },
          { 'Your situation': 'I already run Llama models and want consistency in the stack', 'Pick': 'Llama 3.3 Code 70B (if VRAM allows) or 8B variant' },
          { 'Your situation': 'I write Rust, Lua, Haskell, Solidity, or other niche languages', 'Pick': 'StarCoder 2 15B' },
          { 'Your situation': 'My priority is tokens-per-second, not absolute quality', 'Pick': 'Codestral 22B' },
        ],
      },
      qwenCoderDeep: {
        id: 'qwen3-coder',
        title: 'Qwen3-Coder: The Default Local Coding Pick',
        content:
          '**Qwen3-Coder is Alibaba\'s open-weight coding-tuned model line and, in May 2026, the default local coding model.** It pairs the strongest publicly reported HumanEval+ direction in this set with a 256K context window and an Apache 2.0 licence — three things that rarely come together in one model.',
        items: [
          '**Sizes:** 30B (the headline model) and 7B (the laptop and 8 GB GPU model). Both are dense transformers (not mixture-of-experts).',
          '**Context window:** 256K tokens for the 30B; 128K for the 7B. Among the largest in this set without going to MoE-derived models.',
          '**Training emphasis:** code-heavy multilingual training corpus with strong coverage of Python, TypeScript/JavaScript, Java, C++, Go, and Rust. Tool-calling examples are part of the post-training mix.',
          '**Licence:** Apache 2.0 — commercial use allowed without separate licensing, attribution preserved.',
          '**VRAM at Q4_K_M:** the 30B fits in roughly 17–18 GB, leaving headroom on a 24 GB card for context and tooling. The 7B fits in roughly 5 GB.',
          '**Tool-calling reliability:** strongest of the open-weight coding models for harnesses with strict tool schemas (Cline, Continue.dev Agent mode). The XML-format reliability that Cline depends on is high on the 30B; less reliable on the 7B.',
          '**Where it shines:** general-purpose coding (Python, TypeScript), large-context tasks (whole-file refactors), tool-using agent loops.',
          '**Where it falls short:** the 7B variant is good for its size but cannot match the 30B on multi-step reasoning. Niche languages (Lua, Haskell, Solidity) get less coverage than StarCoder 2.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'On a 24 GB GPU, run Qwen3-Coder 30B at Q4_K_M for the chat / agent role and Qwen2.5-Coder 1.5B at Q4_K_M as a separate autocomplete process. Total VRAM: ~19 GB. The split keeps autocomplete latency under 200 ms while the bigger model handles non-trivial work in chat.',
          },
        ],
      },
      deepseekCoderDeep: {
        id: 'deepseek-coder',
        title: 'DeepSeek Coder V3: The Long-Context Heavyweight',
        content:
          '**DeepSeek Coder V3 is the model you reach for when context length is the binding constraint.** It uses a mixture-of-experts (MoE) architecture, which gives it strong reasoning at a moderate active-parameter footprint but a heavy total-model footprint that shapes hardware decisions.',
        items: [
          '**Architecture:** MoE — far higher total parameters than active parameters at inference. The full model is heavier on disk and VRAM than its active count would suggest.',
          '**Context window:** 128K tokens with extension techniques pushing usable context further depending on quantization and inference engine.',
          '**Training emphasis:** code and reasoning. Strong on Python, TypeScript, C++, and Go. Multi-step planning and chain-of-thought-style reasoning are notable strengths.',
          '**Licence:** Apache 2.0 — commercial use allowed.',
          '**VRAM at Q4_K_M:** the full V3 needs 48 GB+ for comfortable inference. Distilled and smaller MoE-derived variants targeting 24 GB cards exist; verify the variant on the model card before downloading.',
          '**Tool-calling reliability:** strong on harnesses that allow OpenAI-style tool calls; slightly weaker than Qwen3-Coder on Cline\'s strict XML schema in May 2026.',
          '**Where it shines:** whole-repo reasoning, long-context tasks, multi-step agentic plans.',
          '**Where it falls short:** the hardware bar is the highest of any model in this guide. On a 24 GB card, the smaller derivative variants are the only viable option, and they trail the full model on long-context tasks.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'DeepSeek Coder V3 has the highest hardware bar in this guide — 48 GB+ VRAM at Q4_K_M for the full model. The community 24 GB-targeted derivatives exist and are usable, but they trade away the long-context reasoning that is the main reason to pick DeepSeek over Qwen3-Coder. Match the variant to your hardware before deciding.',
          },
        ],
      },
      codestralDeep: {
        id: 'codestral',
        title: 'Codestral 22B: The Speed Pick With a Clear Commercial Path',
        content:
          '**Codestral is Mistral\'s coding-tuned model.** It trails Qwen3-Coder slightly on published coding direction but wins on tokens-per-second and on a clean commercial-licensing path via Mistral.',
        items: [
          '**Sizes:** 22B (the headline). Fits comfortably at Q4_K_M on a 16 GB GPU with context headroom.',
          '**Context window:** 32K tokens. Smaller than Qwen3-Coder and DeepSeek; sufficient for single-file and most multi-file edits but limiting on whole-repo work.',
          '**Training emphasis:** broad multi-language code coverage with strong Python, TypeScript, Java, C++, and Bash performance.',
          '**Licence:** Mistral Non-Production licence by default; commercial use requires Mistral Commercial licensing (paid). This is unusual in this set and is the most important fact for teams shipping a commercial product on top of the model.',
          '**VRAM at Q4_K_M:** ~13 GB — fits on a 16 GB GPU with room for context, comfortable on 24 GB.',
          '**Inference speed:** faster than Qwen3-Coder 30B at the same quantization, and faster than DeepSeek Coder V3 by a wide margin. The quality-vs-speed trade-off is the cleanest of the six.',
          '**Where it shines:** real-time autocomplete on a 16–24 GB card, EU-team workflows where the Mistral commercial relationship matters, fast iteration in chat.',
          '**Where it falls short:** the 32K context is the smallest in this set after StarCoder 2. The licence story is more involved than Apache 2.0 — read the Mistral Non-Production terms before integration.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Codestral\'s licence is the single biggest "gotcha" in this set. Mistral Non-Production is fine for personal use, evaluation, and internal R&D. For a commercial product, you must either negotiate a Mistral Commercial licence or pick a different model — Apache 2.0 alternatives (Qwen3-Coder, DeepSeek Coder V3, Granite Code) cover the same use cases without the licence-management overhead.',
          },
        ],
      },
      llamaCodeDeep: {
        id: 'llama-code',
        title: 'Llama 3.3 Code: The Ecosystem-Fit Pick',
        content:
          '**Llama 3.3 Code is the right pick when your existing stack already runs Llama models.** Its raw coding direction trails Qwen3-Coder and DeepSeek, but the ecosystem around Llama (fine-tunes, tooling, deployment patterns) is the largest of any model family in this guide.',
        items: [
          '**Sizes:** 70B (general-purpose, code-capable), 8B (laptop / 8 GB GPU). The 70B is the headline model; the 8B is a frequent autocomplete pick because of strong tooling support.',
          '**Context window:** 128K tokens.',
          '**Training emphasis:** general-purpose with strong coding capability — not coding-specialised in the same way as Qwen3-Coder or Codestral. Its coding strengths come from breadth, not depth.',
          '**Licence:** Llama Community Licence — commercial use allowed under Meta\'s policy gates, including a usage threshold above which separate licensing terms apply. Read the licence before integration in commercial products.',
          '**VRAM at Q4_K_M:** ~40 GB for the 70B (24 GB cards need the smaller variant or aggressive quantization); ~5 GB for the 8B.',
          '**Tool-calling reliability:** good on OpenAI-style tool calls; less reliable than Qwen3-Coder on Cline-strict XML schemas. The 8B variant struggles with tool calls in agent loops.',
          '**Where it shines:** stacks already running Llama (existing infra, deployment recipes, fine-tunes), general-purpose coding with occasional non-code reasoning.',
          '**Where it falls short:** absolute coding direction trails the dedicated coding models. If coding is the primary use case and you have no Llama lock-in, Qwen3-Coder is the better default.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The Llama 3.3 8B is a frequent autocomplete pick on 8 GB GPUs — but the agent-loop reliability drops sharply at that size. Use 8B for inline completions, escalate to a 27B+ tool-call-trained model for chat and refactor work. Two models in the same Continue.dev or Cline config is the common pattern.',
          },
        ],
      },
      graniteCodeDeep: {
        id: 'granite-code',
        title: 'Granite Code: The Enterprise / Audit-Friendly Pick',
        content:
          '**IBM\'s Granite Code line is built for enterprise contexts where licence predictability and audit posture matter more than leaderboard position.** Apache 2.0, transparent training-data documentation, and a measured release cadence make it the easiest of the six to defend in a procurement review.',
        items: [
          '**Sizes:** 34B (the headline) and 8B (laptop / 8 GB GPU). Dense transformers, not MoE.',
          '**Context window:** 128K tokens.',
          '**Training emphasis:** code-heavy multi-language with deliberate documentation of training corpora — a positioning choice that matters more for procurement than for code quality.',
          '**Licence:** Apache 2.0 — the same posture as Qwen3-Coder and DeepSeek Coder V3.',
          '**VRAM at Q4_K_M:** ~20 GB for the 34B, ~5 GB for the 8B.',
          '**Coding direction:** trails Qwen3-Coder 30B on most public benchmarks; competitive with Codestral on Python and Java, behind on TypeScript.',
          '**Where it shines:** procurement-driven choices, enterprise audit contexts, regulated-industry deployments where the model card\'s data-provenance documentation is itself a deliverable.',
          '**Where it falls short:** absolute coding capability is below the leaders. If procurement is not a binding constraint, Qwen3-Coder is the stronger choice on the same hardware budget.',
        ],
      },
      starCoderDeep: {
        id: 'starcoder-2',
        title: 'StarCoder 2: The Niche-Language Pick',
        content:
          '**StarCoder 2 is BigCode\'s open-weight coding model line and, in May 2026, the strongest open-weight model for niche programming languages.** It covers more languages than any other model in this set, including Lua, Haskell, Solidity, and a long tail of less-common languages.',
        items: [
          '**Sizes:** 15B (the practical local pick), 7B, 3B. Dense transformers.',
          '**Context window:** 16K tokens — the smallest in this set, and the main constraint.',
          '**Training emphasis:** breadth over depth — trained on hundreds of programming languages with deliberate coverage of less-common languages. Python and TypeScript performance trails the leaders, but Rust, Lua, Haskell, and Solidity coverage is best-in-class for open-weight models.',
          '**Licence:** BigCode OpenRAIL-M — a responsible-AI licence with use-case restrictions. Read the licence before commercial integration; it is more permissive than Mistral Non-Production but more restrictive than Apache 2.0.',
          '**VRAM at Q4_K_M:** ~9 GB for the 15B — fits comfortably on a 12 GB or 16 GB card.',
          '**Where it shines:** niche-language work (Rust, Lua, Haskell, Solidity, Elm, Julia), polyglot codebases, language coverage that other models do not provide.',
          '**Where it falls short:** the 16K context window is the smallest in this set; absolute Python and TypeScript performance is below Qwen3-Coder and DeepSeek.',
        ],
      },
      vramMath: {
        id: 'vram-math',
        title: 'VRAM Math by Quantization Level',
        content:
          '**VRAM is the binding constraint for most local-coding-model decisions.** The simple rule: at Q4_K_M, expect roughly `(parameters in B) × 0.6 GB` for the model weights, plus 2–4 GB for context and tooling. Higher quantization (Q5, Q6, Q8) trades VRAM for quality recovery.',
        items: [
          '**Q4_K_M (the default):** strongest balance of size and quality for most coding work. Roughly 0.6 GB per billion parameters. A 30B model fits in ~18 GB; a 7B fits in ~5 GB.',
          '**Q5_K_M:** roughly 0.75 GB per billion parameters. A 30B model needs ~22 GB. Quality recovery is small but measurable on multi-step reasoning.',
          '**Q6_K:** roughly 0.85 GB per billion parameters. A 30B model needs ~26 GB. Worth the headroom on a 32 GB card.',
          '**Q8_0:** roughly 1.05 GB per billion parameters. A 30B model needs ~32 GB. Closest to FP16 quality at half the VRAM.',
          '**FP16 (no quantization):** roughly 2.0 GB per billion parameters. A 30B model needs ~60 GB. Used only for fine-tuning or research; never for local inference.',
          '**Context VRAM cost:** scales with sequence length. As a rule of thumb, expect ~1 GB per 32K tokens of active context on coding models — meaningful for DeepSeek Coder V3 and Qwen3-Coder long-context use.',
          '**Tooling overhead:** Ollama, LM Studio, and llama.cpp each add ~500 MB to ~1 GB on top of the model and context. Allow 2–4 GB total headroom for active tooling.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For a deeper explanation of how quantization works and why Q4_K_M is the most cited default, see [LLM Quantization Explained](/local-llms/llm-quantization-explained). The rest of this guide assumes the math above.',
          },
        ],
      },
      contextWindow: {
        id: 'context-window',
        title: 'Context Window Comparison',
        content:
          '**Context window is the second binding constraint after VRAM, and the most overrated metric in marketing copy.** Coding models do not preserve full attention quality across the entire claimed window — the working portion is typically smaller. Use the cited numbers below as the upper bound, not the practical limit.',
        columns: ['Model', 'Claimed context', 'Practical working context (coding)', 'Notes'],
        rows: [
          { 'Model': 'Qwen3-Coder 30B', 'Claimed context': '256K', 'Practical working context (coding)': '~64K–128K', 'Notes': 'Among the strongest long-context coding models in May 2026.' },
          { 'Model': 'Qwen3-Coder 7B', 'Claimed context': '128K', 'Practical working context (coding)': '~32K–64K', 'Notes': '7B class always loses some long-context recall.' },
          { 'Model': 'DeepSeek Coder V3', 'Claimed context': '128K', 'Practical working context (coding)': '~64K–96K', 'Notes': 'Strong recall throughout the window; the long-context leader.' },
          { 'Model': 'Codestral 22B', 'Claimed context': '32K', 'Practical working context (coding)': '~16K–24K', 'Notes': 'Smallest of the 22B+ tier; tight for whole-repo work.' },
          { 'Model': 'Llama 3.3 Code', 'Claimed context': '128K', 'Practical working context (coding)': '~32K–64K', 'Notes': 'Long-context recall trails Qwen3-Coder.' },
          { 'Model': 'Granite Code 34B', 'Claimed context': '128K', 'Practical working context (coding)': '~32K–64K', 'Notes': 'Balanced; not a long-context leader.' },
          { 'Model': 'StarCoder 2 15B', 'Claimed context': '16K', 'Practical working context (coding)': '~8K–12K', 'Notes': 'The hard limit in this set.' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Practical working context is what determines whether the model can hold your repo in mind, not the headline number. For multi-file refactors, prefer the actual recall column over the marketing column — Codestral\'s 32K is real, Llama 3.3\'s 128K is partial.',
          },
        ],
      },
      licensing: {
        id: 'licensing',
        title: 'Licensing Comparison',
        content:
          '**Licence terms decide which model can ship inside a commercial product.** Verify the licence at the time of integration — open-source coding model licences do drift between releases, especially for vendor-licensed lines (Mistral, Llama).',
        columns: ['Model', 'Licence', 'Commercial use without separate licensing?', 'Key constraint'],
        rows: [
          { 'Model': 'Qwen3-Coder', 'Licence': 'Apache 2.0', 'Commercial use without separate licensing?': 'Yes', 'Key constraint': 'Standard attribution; no other restrictions.' },
          { 'Model': 'DeepSeek Coder V3', 'Licence': 'Apache 2.0', 'Commercial use without separate licensing?': 'Yes', 'Key constraint': 'Standard attribution; no other restrictions.' },
          { 'Model': 'Codestral', 'Licence': 'Mistral Non-Production', 'Commercial use without separate licensing?': 'No', 'Key constraint': 'Commercial use requires paid Mistral Commercial licensing.' },
          { 'Model': 'Llama 3.3 Code', 'Licence': 'Llama Community Licence', 'Commercial use without separate licensing?': 'Yes (with caveats)', 'Key constraint': 'Acceptable Use Policy; usage threshold above which separate terms apply.' },
          { 'Model': 'Granite Code', 'Licence': 'Apache 2.0', 'Commercial use without separate licensing?': 'Yes', 'Key constraint': 'Standard attribution; no other restrictions.' },
          { 'Model': 'StarCoder 2', 'Licence': 'BigCode OpenRAIL-M', 'Commercial use without separate licensing?': 'Yes (with use-case restrictions)', 'Key constraint': 'Use-case restrictions for high-risk applications; verify against the licence text.' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Codestral\'s Mistral Non-Production licence trips up teams that prototype with it then ship without re-checking. If the model touches a paying user — even indirectly through an internal tool that produces customer-facing artefacts — you need Mistral Commercial. Move to Qwen3-Coder or Granite Code (both Apache 2.0) before integration to avoid the licence-renegotiation cycle.',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: 'Decision Tree: Which Should You Pick',
        content:
          '**Six questions, in order, get most readers to the right pick.**',
        items: [
          '**1. How much VRAM do you have?** Under 12 GB: Qwen3-Coder 7B. 12–16 GB: Qwen3-Coder 7B or Codestral 22B. 24 GB: Qwen3-Coder 30B. 48 GB+: DeepSeek Coder V3 (full).',
          '**2. Are you shipping inside a commercial product?** Yes: prefer Apache 2.0 (Qwen3-Coder, DeepSeek Coder V3, Granite Code). Avoid Codestral unless you are paying for Mistral Commercial licensing.',
          '**3. Do you need a context window above 32K?** Yes: skip Codestral and StarCoder 2. Pick Qwen3-Coder, DeepSeek, Llama Code, or Granite Code.',
          '**4. Are you writing niche languages (Rust, Lua, Haskell, Solidity)?** Yes: StarCoder 2 15B, despite the 16K context limit.',
          '**5. Are you in a regulated industry where licence and training-data provenance need procurement defence?** Yes: Granite Code 34B is the easiest case to make.',
          '**6. Still unsure?** Default to Qwen3-Coder — 30B if you have a 24 GB GPU, 7B otherwise. Re-evaluate when you outgrow it.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The decision is VRAM first, licence second, context third — Qwen3-Coder is the safe default at 24 GB on Apache 2.0; the other five picks each address one specific binding constraint that Qwen3-Coder does not.',
          },
          {
            type: 'plain-terms',
            text: 'Pick Qwen3-Coder unless you have a specific reason not to. The reasons are: hardware (under 12 GB → 7B; over 48 GB → DeepSeek), languages (niche language support → StarCoder 2), procurement (regulated industry → Granite Code), or ecosystem lock-in (existing Llama infra → Llama 3.3 Code). Codestral is the speed pick if you can pay for the commercial licence.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The decision tree is intentionally short. Most teams overthink the model choice and underthink the harness choice — see [Continue.dev vs Cline vs Aider](/power-local-llm/continue-dev-vs-cline-vs-aider-local) for the harness side. The model differences within the reliable picks are smaller than the harness-fit differences.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking a Local Coding Model',
        items: [
          '**Mistake 1: picking the model with the highest leaderboard score regardless of hardware.** A model that does not fit at Q4_K_M with 2–4 GB of headroom will spill to disk and become unusable for interactive coding. VRAM is the binding constraint for most readers.',
          '**Mistake 2: trusting the claimed context window as the practical working window.** Coding models lose attention quality past roughly half the claimed context. Plan for the practical window, not the headline number.',
          '**Mistake 3: skipping the licence read.** Codestral on a commercial product without a Mistral Commercial licence is a procurement failure. Llama Community Licence has gates for high-usage applications. Read the licence before integration.',
          '**Mistake 4: ignoring tool-call reliability when picking for an agent harness.** Cline\'s strict XML schemas, Continue.dev\'s Agent mode, and any MCP-based loop all rely on the model emitting tool calls cleanly. Coding-tuned 30B+ models reliable; 7B-class models often fail.',
          '**Mistake 5: not pairing a small autocomplete model with the larger chat model.** A 30B chat model is overkill for sub-200 ms autocomplete. Run a 1.5B–7B autocomplete model alongside the chat model — total VRAM stays manageable, latency stays interactive.',
          '**Mistake 6: not re-checking the model card every six months.** Open-weight model lines update; quantization recipes improve; licences occasionally tighten. The default pick today is not necessarily the default in November 2026.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Qwen3-Coder Model Card on Hugging Face](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architecture, parameter count, context window, licence, and vendor-reported benchmark direction for Qwen3-Coder 30B.',
          '[DeepSeek Coder V3 Model Card](https://huggingface.co/deepseek-ai/DeepSeek-Coder-V3) — MoE architecture details, context window, licence, and benchmark direction for DeepSeek Coder V3.',
          '[Codestral Model Card](https://huggingface.co/mistralai/Codestral-22B-v0.1) — Architecture, context window, and licence terms for Codestral 22B.',
          '[Mistral Commercial Licensing](https://mistral.ai/commercial-licenses/) — Terms required for commercial use of Codestral and other Mistral non-production-licensed models.',
          '[Llama 3.3 Model Cards](https://huggingface.co/meta-llama) — Sizes, context windows, and the Llama Community Licence text for the Llama 3.3 family.',
          '[Granite Code Model Cards (IBM)](https://huggingface.co/ibm-granite) — Sizes, context windows, training-data documentation, and Apache 2.0 licence for Granite Code.',
          '[StarCoder 2 Model Cards (BigCode)](https://huggingface.co/bigcode) — Sizes, context windows, language coverage, and BigCode OpenRAIL-M licence.',
          '[Ollama Model Library](https://ollama.com/library) — Quantization variants, file sizes, and pull commands for each model above.',
          '[BigCode OpenRAIL-M Licence Text](https://huggingface.co/spaces/bigcode/license) — The full licence text and use-case restrictions for StarCoder-line models.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which local coding model is closest to GPT-5 for coding?',
            a: 'No open-weight model matches frontier closed models on absolute coding capability in May 2026 — the gap to GPT-5 / Claude 4.x / Gemini frontier coding modes is real on multi-step reasoning and rare-library usage. Among open-weight models, Qwen3-Coder 30B leads on public benchmark direction for everyday coding work; DeepSeek Coder V3 is closest on long-context multi-file reasoning. For interactive coding inside an editor, the gap matters less than it sounds — local models are routinely "good enough" for autocomplete and 70–90% of code-edit tasks.',
          },
          {
            q: 'Does Qwen3-Coder beat DeepSeek for TypeScript?',
            a: 'On the headline HumanEval+ direction reported by each vendor, Qwen3-Coder 30B is ahead of DeepSeek Coder V3 in May 2026 across general coding tasks. TypeScript-specific performance is harder to compare cleanly because not all vendors publish per-language splits — re-check the model cards for current per-language numbers if TypeScript is your primary language. For most TypeScript work in an IDE, both models are interchangeable.',
          },
          {
            q: 'What\'s the best model for embedded / Rust development?',
            a: 'Qwen3-Coder 30B for general Rust if you have 24 GB of VRAM. StarCoder 2 15B for Rust paired with niche embedded languages or polyglot embedded systems work — its language coverage extends past where the leaders trained heavily. For pure Rust on a smaller GPU, Qwen3-Coder 7B remains a solid choice ahead of StarCoder 2 on absolute Rust capability.',
          },
          {
            q: 'Can I run a 30B coding model on 16GB VRAM?',
            a: 'Not at Q4_K_M — a 30B model needs roughly 17–18 GB at Q4_K_M plus 2–4 GB context overhead. Options: aggressive quantization (Q3_K_M reduces VRAM to ~14 GB but sacrifices noticeable quality), use a 22B model instead (Codestral fits comfortably at Q4_K_M on 16 GB), or use the 7B variant of Qwen3-Coder for headroom. Buying a 24 GB GPU is the cleanest fix.',
          },
          {
            q: 'Is Codestral still relevant in 2026?',
            a: 'Yes — Codestral 22B remains the speed leader in the 22B+ tier and is the right pick when tokens-per-second matters more than absolute leaderboard rank. Its main downside is the Mistral Non-Production licence, which adds friction for commercial deployments. For non-commercial use or teams already paying for Mistral Commercial licensing, Codestral is competitive with Qwen3-Coder on most everyday coding work.',
          },
          {
            q: 'Which model handles long context (100k+ lines) best?',
            a: 'DeepSeek Coder V3 leads on long-context coding tasks in this set, with strong recall throughout its 128K window. Qwen3-Coder 30B claims 256K but practical working context is closer to 64K–128K. For genuinely whole-repo tasks (more than 100K lines), neither model preserves full attention — split the task into smaller scopes or use a retrieval-augmented approach over the codebase rather than relying on raw context length.',
          },
          {
            q: 'Do coding-specific models beat general models for code?',
            a: 'For typical coding work, yes. Qwen3-Coder 30B and DeepSeek Coder V3 both outperform similarly-sized general models (Llama 3.3 70B, Qwen3 32B general) on coding benchmarks. The gap is largest on tool-using agent loops and on multi-step reasoning over code. For mixed coding-plus-reasoning tasks (debugging that requires reading specs, proposing architecture), general models with strong reasoning are sometimes preferable.',
          },
          {
            q: 'Can I fine-tune any of these on my codebase?',
            a: 'All six allow fine-tuning under their respective licences, with the most permissive being the Apache 2.0 models (Qwen3-Coder, DeepSeek Coder V3, Granite Code). Fine-tuning a 30B model meaningfully requires more VRAM than inference — typically 80 GB+ for LoRA, more for full fine-tuning. For most readers, retrieval-augmented generation against an index of your codebase is a better first step than fine-tuning.',
          },
          {
            q: 'Which model supports the most programming languages?',
            a: 'StarCoder 2 — its training corpus spans hundreds of programming languages including niche languages (Lua, Haskell, Solidity, Elm, Julia, Nim, Zig). For polyglot codebases or work in less-common languages, StarCoder 2 15B is the best open-weight option even though its absolute quality on Python and TypeScript trails the leaders.',
          },
          {
            q: 'Are open-source coding models catching up to Claude/GPT?',
            a: 'On routine coding tasks (autocomplete, single-file edits, common refactors), the gap is narrow and continuing to close. On hard multi-step reasoning, large-context whole-repo work, and rare-library usage, the gap remains real. Practical implication: for most interactive editor work, a 24 GB GPU running Qwen3-Coder 30B is "good enough" to replace cloud coding assistants for 70–90% of tasks; the remaining 10–30% is where frontier closed models still pull ahead.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm) — practical application context: cost math, hardware sizing, and which model fits which workflow.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — pairs with model choice; the harness layer beneath the model.',
          '[Local Coding LLM Without Internet](/power-local-llm/local-coding-llm-without-internet) — niche use case context for fully offline workflows.',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — the deeper technical layer behind the VRAM math used throughout this guide.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — general-purpose model authority for non-coding workloads.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library.',
        ],
      },
    },
  },
}
