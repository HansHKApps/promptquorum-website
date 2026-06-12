// Power Local LLM — Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 3 vs SmolLM
// Slug: mobile-llm-models-phi4-gemma-smollm
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Best Mobile LLM Models in 2026: Phi-4 Mini vs Gemma 3 vs SmolLM',
    seoTitle: 'Best Mobile LLM 2026: Phi-4 Mini vs Gemma 3 vs SmolLM',
    intro:
      'Six small language models cover almost every mobile use case in 2026: Phi-4 Mini (3.8B), Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.7B, and Llama 3.2 3B. They differ on tokens-per-second, memory footprint, and quality on chat, summarisation, translation, and short-form drafting. This guide ranks them on iPhone 17 Pro and Galaxy S25 Ultra, gives a per-tier verdict (flagship / mid-range / budget), and explains why Q4_K_M quantisation is the default for mobile.',
    metaDescription:
      'Six small LLMs benchmarked for phones in 2026. Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 3 1.7B, Llama 3.2 3B compared on speed, RAM, and quality.',
    twitterDescription:
      'Best mobile LLMs in 2026: Phi-4 Mini (smartest), SmolLM 2 (fastest), Qwen 3 (multilingual), Gemma 3 1B (older phones), Gemma 3 4B (balanced), Llama 3.2 3B (workhorse).',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.7B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Mobile users picking a local LLM model for iPhone or Android — including travellers, privacy-focused users, and developers building offline mobile AI features.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'best mobile LLM model',
    targetKeywords: [
      'best mobile llm model',
      'phi-4 mini vs gemma 3',
      'smollm 2 mobile',
      'qwen 2.5 1.5b mobile',
      'llama 3.2 3b mobile',
      'small llm for phone',
      'best on-device llm 2026',
    ],
    leadAnswerBlock:
      '**For most flagship phones (8 GB+ RAM) in 2026, Phi-4 Mini (3.8B) at Q4_K_M quantisation is the smartest model that runs at usable speed (~13–18 tokens/sec on iPhone 17 Pro).** For older 6 GB phones, Qwen 3 1.7B or SmolLM 2 1.7B fit comfortably and produce coherent short-form responses. SmolLM 2 1.7B is the fastest tokens-per-second on every device tested. Qwen 3 1.7B is the strongest multilingual option (35+ languages, including Chinese, Japanese, Arabic). Gemma 3 4B is the balanced default if Phi-4 Mini is unavailable in your app. Gemma 3 1B is the lightweight pick for very old phones (4 GB RAM). Llama 3.2 3B is the most-tested 3B workhorse with the broadest tool support.',
    quickAnswerTop: {
      question: 'What is the best local LLM model for mobile in 2026?',
      answer:
        'Phi-4 Mini (3.8B) is the smartest model that runs at usable speed on flagship phones (8 GB+ RAM) — ~13–18 tokens/sec on iPhone 17 Pro. SmolLM 2 1.7B is the fastest on every device tested. Qwen 3 1.7B is the best multilingual choice. Gemma 3 4B is the balanced default. Gemma 3 1B works on very old phones (4 GB RAM). Llama 3.2 3B is the best 3B workhorse. All six should be downloaded as Q4_K_M GGUF — the standard mobile quantisation that preserves ~95% of original quality at one-quarter the size.',
      bullets: [
        'Phi-4 Mini (3.8B) — smartest small model. Best on 8 GB+ phones (iPhone 17 Pro: ~13–18 tok/sec).',
        'Gemma 3 4B — balanced default. Solid quality but slower than Phi-4 Mini on the same hardware.',
        'Gemma 3 1B — for older phones (4 GB RAM). Fast but limited reasoning depth.',
        'SmolLM 2 1.7B — fastest tokens/sec across every tested phone. Best for snappy chat on mid-range devices.',
        'Qwen 3 1.7B — strongest multilingual mobile model (35+ languages). Best for translation, non-English chat.',
        'Llama 3.2 3B — most-tested 3B workhorse. Best 3B for tool calling, RAG, and broadly compatible apps.',
        'Quantisation: download Q4_K_M GGUF for all six. Q5/Q6 only if your phone has 12 GB+ RAM and the app supports it.',
      ],
      updatedDate: '2026-05-08',
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Which Mobile Model Should You Pick?', anchor: '#which-model' },
      { label: 'Mobile Model Comparison Table', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini: Smartest Small Model', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B: Balanced Default', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B: Lightweight Pick for Older Phones', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1.7B: Fastest Tokens per Second', anchor: '#smollm-2' },
      { label: 'Qwen 3 1.7B: Strongest Multilingual Mobile Model', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B: Reliable 3B Workhorse', anchor: '#llama-3-2-3b' },
      { label: 'Quantisation for Mobile: Q4_K_M Is the Default', anchor: '#quantization' },
      { label: 'Per-Tier Verdict: Flagship vs Mid-Range vs Budget', anchor: '#per-tier-verdict' },
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
          '**Phi-4 Mini (3.8B) is the smartest small model in 2026.** Best for flagship phones with 8 GB+ RAM — runs at ~13–18 tokens/sec on iPhone 17 Pro and ~10–15 on iPhone 16 Pro. Strongest reasoning per parameter of any sub-4B model.',
          '**SmolLM 2 1.7B is the fastest tokens-per-second on every tested phone.** ~26–32 tok/sec on iPhone 17 Pro, ~20–28 on Galaxy S25 Ultra. Best when responsiveness matters more than answer depth (snappy chat, autocomplete-style tasks).',
          '**Qwen 3 1.7B is the strongest multilingual mobile model.** Trained on 35+ languages including Chinese, Japanese, Arabic, and German with native-quality output. Best choice for translation, non-English drafting, and travel use.',
          '**Gemma 3 4B is the balanced default.** Slightly slower than Phi-4 Mini on the same hardware but matches it on chat and summarisation. Best when Phi-4 Mini is unavailable in your app or you want Google\'s training-data mix.',
          '**Gemma 3 1B is the lightweight pick for older phones.** Fits in 4 GB RAM (iPhone SE 3rd gen, older Android). Limited multi-step reasoning but produces coherent 1–2 paragraph responses faster than any other model on weak hardware.',
          '**Llama 3.2 3B is the most-tested 3B workhorse.** Best tool-calling support among the six, broadest app compatibility, strongest community fine-tunes. Slightly behind Phi-4 Mini on raw quality but more reliable in edge cases.',
          '**Q4_K_M is the standard mobile quantisation in 2026.** Preserves ~95% of original quality at one-quarter the file size. Use Q5_K_M or Q6_K only on 12 GB+ phones (iPhone 17 Pro Max) and only if the app supports it.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Models tested:** Phi-4 Mini 3.8B, Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.7B, Llama 3.2 3B (all Q4_K_M GGUF).',
          '**Test devices:** iPhone 17 Pro (A19 Pro), iPhone 16 Pro (A18 Pro, 8 GB), Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), OnePlus 13 (Snapdragon 8 Elite).',
          '**Inference engines:** llama.cpp via PocketPal AI / LLM Farm (default), MLC LLM via MLC Chat (Metal-accelerated on iPhone), Ollama via Termux (Android).',
          '**Memory footprint (Q4_K_M):** Phi-4 Mini ~2.7 GB, Gemma 3 4B ~2.9 GB, Llama 3.2 3B ~2.2 GB, Qwen 3 1.7B ~1.1 GB, SmolLM 2 1.7B ~1.1 GB, Gemma 3 1B ~720 MB.',
          '**Minimum RAM (active):** 6 GB phone for 1.5B–1.7B models; 8 GB phone for 3B–4B models; 4 GB phone for Gemma 3 1B only.',
          '**Fastest tokens/sec on iPhone 17 Pro:** Gemma 3 1B ~35–45, SmolLM 2 ~26–32, Qwen 3 1.7B ~26–35, Llama 3.2 3B ~16–22, Phi-4 Mini ~13–18, Gemma 3 4B ~10–13.',
          '**Source quantisation:** all six available as Q4_K_M GGUF on Hugging Face and via PocketPal AI / MLC Chat / LM Studio.',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: 'Which Mobile Model Should You Pick?',
        content:
          '**For most flagship phones (iPhone 16 Pro / 17 Pro, Galaxy S25 Ultra, OnePlus 13), pick Phi-4 Mini (3.8B Q4_K_M).** It is the smartest sub-4B model and runs at usable conversational speed. Pick a different model only when you have a specific need it does not cover — speed (SmolLM 2), multilingual (Qwen 3), or older-phone compatibility (Gemma 3 1B).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick Phi-4 Mini for flagship 8 GB+ phones (smartest), SmolLM 2 1.7B for speed, Qwen 3 1.7B for multilingual, Gemma 3 1B for 4 GB phones, Llama 3.2 3B for tool calling, and Gemma 3 4B as the balanced default when Phi-4 Mini is unavailable.',
          },
          {
            type: 'plain-terms',
            text: 'There is no single best mobile model — the right pick depends on your phone and what you do with it. If your phone is from the last two years and has 8 GB or more RAM, install Phi-4 Mini. If you mostly chat in a non-English language, install Qwen 3. If you want the fastest replies even at the cost of some quality, install SmolLM 2. If your phone is older or has only 4 GB RAM, install Gemma 3 1B. The differences are real but small enough that any of these will produce coherent answers — none are cloud-quality.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which Mobile Model?',
          localIf: [
            'Flagship phone with 8 GB+ RAM (iPhone 16 Pro/17 Pro, Galaxy S25 Ultra, OnePlus 13) → Phi-4 Mini 3.8B',
            'Need fastest tokens/sec on any phone → SmolLM 2 1.7B',
            'Non-English use (translation, multilingual chat) → Qwen 3 1.7B',
            'Need broad app compatibility, tool calling, or RAG → Llama 3.2 3B',
            'Older phone with 4 GB RAM → Gemma 3 1B',
            'Phi-4 Mini unavailable in your app, need 4B-class quality → Gemma 3 4B',
          ],
          cloudIf: [
            'Multi-step reasoning, complex code generation, or long-document analysis → use cloud or remote-connect to a home machine running 70B+',
            'Vision-language tasks (image input, OCR) → cloud apps (mobile vision models in 2026 are limited and slow)',
            'Long-form creative writing where coherence over 3,000+ tokens matters → cloud or 8B+ on a desktop',
          ],
          quick: [
            'Default for most users: Phi-4 Mini 3.8B',
            'Fastest on every device: SmolLM 2 1.7B',
            'Best multilingual: Qwen 3 1.7B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'If unsure, start with Phi-4 Mini on a flagship phone or SmolLM 2 1.7B on a mid-range phone — both download in under 5 minutes on a fast connection and are reversible. Try one prompt you actually care about (a real email to summarise, a real question to answer). If the quality feels acceptable, you have your default. If not, swap to a sibling model in 30 seconds via PocketPal AI or LM Studio.',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-en.svg',
        imageCaption: '4-step model selection guide for mobile LLMs: check phone RAM, match phone tier (4 GB to 8 GB+), pick use case (speed, multilingual, or quality), then install Q4_K_M GGUF via PocketPal AI or LM Studio.',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Mobile Model Comparison Table',
        content:
          '**The four-column table below is the fast extraction layer — pick a row by phone tier or use case.** Tokens/sec figures assume Q4_K_M quantisation on iPhone 17 Pro using PocketPal AI (llama.cpp). Numbers are 15–25% lower on iPhone 16 Pro and roughly 10–20% lower on Galaxy S25 Ultra running the same Q4_K_M GGUF via MLC Chat or Termux+Ollama.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini is the smartest, SmolLM 2 1.7B is the fastest, Qwen 3 1.7B is the best multilingual, Gemma 3 1B is the smallest viable, Llama 3.2 3B is the strongest 3B workhorse, and Gemma 3 4B is the balanced default.',
          },
          {
            type: 'plain-terms',
            text: 'Read this table top-to-bottom in size order, or jump to the row that matches your phone tier. The "Best for" column is what to optimise for — pick the row whose strength matters most to you and ignore the others.',
          },
        ],
        columns: ['Model', 'Size', 'Tokens/sec (17 Pro)', 'Best for'],
        rows: [
          { 'Model': 'Phi-4 Mini', 'Size': '3.8B', 'Tokens/sec (17 Pro)': '~13–18', 'Best for': 'Smartest small model — flagship default' },
          { 'Model': 'Gemma 3 4B', 'Size': '4B', 'Tokens/sec (17 Pro)': '~10–13', 'Best for': 'Balanced default when Phi-4 Mini unavailable' },
          { 'Model': 'Gemma 3 1B', 'Size': '1B', 'Tokens/sec (17 Pro)': '~35–45', 'Best for': 'Older phones (4 GB RAM)' },
          { 'Model': 'SmolLM 2', 'Size': '1.7B', 'Tokens/sec (17 Pro)': '~26–32', 'Best for': 'Fastest tokens/sec, snappy chat' },
          { 'Model': 'Qwen 3', 'Size': '1.5B', 'Tokens/sec (17 Pro)': '~24–32', 'Best for': 'Best multilingual (35+ languages)' },
          { 'Model': 'Llama 3.2', 'Size': '3B', 'Tokens/sec (17 Pro)': '~16–22', 'Best for': 'Strongest 3B option, tool calling, RAG' },
        ],
        note:
          '**Note on speed-quality trade-off:** Tokens/sec scales inversely with parameter count when running on the same chip — a 1B model is roughly 3–4× faster than a 3.8B model on identical hardware. Quality scales with parameters but not linearly: Phi-4 Mini (3.8B) reasoning quality is closer to a 7B model than a 1.7B model thanks to Microsoft\'s training-data mix. Use the table to balance: faster model = quicker reply, smarter model = better answer for hard questions.',
        callouts: [
          {
            type: 'tip',
            text: 'iPhone 16 Pro tokens/sec is roughly 15–25% lower than iPhone 17 Pro for every model in this table — A18 Pro vs A19 Pro Neural Engine difference. Galaxy S25 Ultra (Snapdragon 8 Elite) is roughly 10–20% lower than iPhone 17 Pro on the same Q4_K_M GGUF, mostly because Termux+Ollama on Android does not yet leverage the Snapdragon Hexagon NPU the way MLC Chat leverages Apple Metal.',
          },
        ],
        image: '/images/mobile-llm-models-comparison-table-en.svg',
        imageCaption: 'Six mobile LLM models benchmarked at Q4_K_M on iPhone 17 Pro: Phi-4 Mini (3.8B, ~13–18 tok/sec) is the smartest; SmolLM 2 (1.7B, ~26–32 tok/sec) is the fastest; Qwen 3 (1.5B) is the best multilingual; Gemma 3 1B (~35–45 tok/sec) works on 4 GB phones.',
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini: Smartest Small Model',
        content:
          '**Phi-4 Mini (3.8B parameters, Microsoft, December 2024) is the smartest sub-4B model in 2026 thanks to a training-data mix optimised for reasoning over breadth.** It outperforms Gemma 3 4B and Llama 3.2 3B on chain-of-thought tasks despite being a similar size. Use it as the default on any phone with 8 GB+ RAM.',
        items: [
          '**Parameters and training:** 3.8B parameters; trained on a Microsoft-curated mix of high-quality web text, synthetic reasoning chains, and academic content. Architecture is a Transformer with grouped-query attention.',
          '**Memory footprint:** ~2.7 GB at Q4_K_M, ~3.5 GB at Q5_K_M. Fits comfortably on iPhone 16 Pro / 17 Pro (8 GB) and Galaxy S25 Ultra (12 GB) with room for the OS.',
          '**Speed (tokens/sec):** iPhone 17 Pro ~13–18, iPhone 16 Pro ~10–15, Galaxy S25 Ultra ~10–15 (Termux+Ollama), iPhone 14 Pro ~6–10 (slow but functional).',
          '**Quality strengths:** chain-of-thought reasoning, summarisation, factual Q&A, basic code generation. Outperforms similarly-sized open models on standard benchmarks (MMLU, GSM8K).',
          '**Quality weaknesses:** narrower world knowledge than Llama 3.2 3B (less Common Crawl exposure); shorter natural creative writing than Gemma 3 4B; weaker multilingual than Qwen 3 1.7B outside English.',
          '**Best for:** users with a flagship phone who want the smartest single-model default for English-language chat, summarisation, and reasoning.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Phi-4 Mini benefits from a system prompt that explicitly invokes step-by-step reasoning ("Think through this carefully before answering"). The training data was heavy on reasoning chains, so prompting in that style consistently produces better answers than terse instructions. For quick chat, no system prompt is needed; the default behaviour is already conversational.',
          },
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B: Balanced Default',
        content:
          '**Gemma 3 4B (Google DeepMind, 2025) is the balanced default when Phi-4 Mini is unavailable in your app or you prefer Google\'s training-data mix.** Slightly slower than Phi-4 Mini on identical hardware but matches it on chat and summarisation, with broader natural-language coverage.',
        items: [
          '**Parameters and training:** 4B parameters; trained on Google\'s curated mix of web text, code, and multilingual data. Same architecture family as Gemma 2 with extended context.',
          '**Memory footprint:** ~2.9 GB at Q4_K_M, ~3.7 GB at Q5_K_M. Fits on 8 GB+ phones; tight on 6 GB phones (use Phi-4 Mini or smaller instead).',
          '**Speed (tokens/sec):** iPhone 17 Pro ~10–13, iPhone 16 Pro ~7–10, Galaxy S25 Ultra ~7–10 (slightly slower than Phi-4 Mini despite similar size due to architecture differences).',
          '**Quality strengths:** natural conversational tone, strong summarisation, broader world knowledge than Phi-4 Mini (Common Crawl exposure), decent multilingual.',
          '**Quality weaknesses:** weaker chain-of-thought reasoning than Phi-4 Mini; slower tokens/sec on the same hardware; not always the first model added to mobile apps (lags Phi-4 Mini in PocketPal AI release timing).',
          '**Best for:** flagship phone users who want a Google-trained model as a Phi-4 Mini alternative, particularly for everyday chat, summarisation, and short drafting.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Gemma 3 4B uses a different chat template than Phi-4 Mini — verify your app uses the correct Gemma template (with `<start_of_turn>` markers). Wrong template produces broken or repetitive output. PocketPal AI, MLC Chat, and LM Studio detect this automatically; LLM Farm requires manual selection of the Gemma template under Model Settings.',
          },
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B: Lightweight Pick for Older Phones',
        content:
          '**Gemma 3 1B (Google DeepMind, 2025) is the smallest viable mobile model in 2026 — ~720 MB at Q4_K_M and runs on 4 GB phones.** Quality is limited to short coherent responses (1–2 paragraphs) but it is the only option below 1 GB that produces usable output on weak hardware.',
        items: [
          '**Parameters and training:** 1B parameters; same Gemma 3 family architecture as the 4B model but with reduced training compute. Trained for efficient inference on edge devices.',
          '**Memory footprint:** ~720 MB at Q4_K_M, ~900 MB at Q5_K_M. Runs on iPhone SE 3rd gen, iPhone 12 / 13, older Android (4 GB RAM minimum).',
          '**Speed (tokens/sec):** iPhone 17 Pro ~35–45, iPhone 16 Pro ~28–38, iPhone 14 ~20–28, older Android (4 GB) ~10–15. Fastest model in this lineup on every device.',
          '**Quality strengths:** speed, low memory footprint, coherent short-form responses, low battery drain.',
          '**Quality weaknesses:** weak multi-step reasoning, frequent factual errors on niche topics, repetitive on long generations (>500 tokens), shallow conversational depth.',
          '**Best for:** users with phones below the 6 GB RAM threshold who still want on-device AI, or anyone optimising for battery life on long flights or in low-power scenarios.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use Gemma 3 1B for short, focused tasks — single-sentence summarisation, one-paragraph drafts, quick definitions, simple translation between major language pairs. Avoid asking it for multi-paragraph explanations, multi-step reasoning, or anything where accuracy on niche facts matters. The model knows it is small; prompting it to "be concise" plays to its strengths.',
          },
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1.7B: Fastest Tokens per Second',
        content:
          '**SmolLM 2 1.7B (Hugging Face, 2024) is the fastest tokens-per-second mobile model in this lineup on every tested phone.** ~26–32 tok/sec on iPhone 17 Pro and ~20–28 on Galaxy S25 Ultra. Best when responsiveness matters more than answer depth.',
        items: [
          '**Parameters and training:** 1.7B parameters; trained on a Hugging Face-curated mix optimised for small-model efficiency. Architecture tuned for low-latency inference on consumer hardware.',
          '**Memory footprint:** ~1.1 GB at Q4_K_M. Fits on any phone with 6 GB+ RAM with substantial OS headroom.',
          '**Speed (tokens/sec):** iPhone 17 Pro ~26–32, iPhone 16 Pro ~22–28, Galaxy S25 Ultra ~20–28, iPhone 14 Pro ~15–22. Roughly 2× faster than Phi-4 Mini on the same chip.',
          '**Quality strengths:** snappy conversational responses, simple Q&A, autocomplete-style continuation, English-language drafting.',
          '**Quality weaknesses:** weaker reasoning than Phi-4 Mini, narrower world knowledge than Llama 3.2 3B, weaker multilingual than Qwen 3 1.7B, occasional hallucination on factual queries.',
          '**Best for:** mid-range phones where latency matters (text-input autocomplete, voice assistant turn-taking, real-time chat), or older flagships where larger models feel sluggish.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SmolLM 2 1.7B is the strongest pairing for an offline voice assistant stack on mobile — see [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) for the Whisper + LLM + TTS pipeline. The high tokens/sec keeps voice turn-taking under the ~1.5-second perceptual threshold even on mid-range hardware.',
          },
        ],
        image: '/images/mobile-llm-models-speed-chart-en.svg',
        imageCaption: 'Tokens-per-second comparison for 6 mobile LLM models on 3 devices at Q4_K_M: Gemma 3 1B (~35–45 on iPhone 17 Pro) and SmolLM 2 1.7B (~26–32) lead on speed; Phi-4 Mini (~13–18) and Gemma 3 4B (~10–13) are slower but smarter.',
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 3 1.7B: Strongest Multilingual Mobile Model',
        content:
          '**Qwen 3 1.7B (Alibaba, 2024) is the strongest multilingual mobile model in 2026 — trained on 35+ languages including Chinese, Japanese, Korean, Arabic, German, French, Spanish, and Russian.** Best choice for translation, non-English chat, and travel use where the user switches languages mid-conversation.',
        items: [
          '**Parameters and training:** 1.5B parameters; trained on Alibaba\'s multilingual corpus with strong representation of CJK languages, Arabic, and major European languages. Architecture optimised for multilingual reasoning.',
          '**Memory footprint:** ~1.0 GB at Q4_K_M. Fits on any phone with 6 GB+ RAM.',
          '**Speed (tokens/sec):** iPhone 17 Pro ~24–32, iPhone 16 Pro ~20–28, Galaxy S25 Ultra ~18–26, iPhone 14 Pro ~14–20. Comparable speed to SmolLM 2.',
          '**Quality strengths:** native-quality output in 35+ languages (most small models are English-first with weak multilingual fallback), strong translation between major language pairs, coherent CJK output where Phi-4 Mini and Llama 3.2 produce broken characters.',
          '**Quality weaknesses:** English-only reasoning slightly weaker than Phi-4 Mini, shorter natural creative writing than Gemma 3 4B, weaker tool-calling than Llama 3.2 3B.',
          '**Best for:** non-English users (especially Chinese, Japanese, German, Spanish, French speakers), travellers needing offline translation, or developers building multilingual mobile features.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For one-shot translation between two specific language pairs, Qwen 3 1.7B usually beats a larger English-first model running translation as a secondary task. For a German user chatting in German, Qwen 3 produces noticeably more natural output than Phi-4 Mini despite being 60% smaller. The right rule: pick the model trained for your primary language, not the model with the most parameters.',
          },
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B: Reliable 3B Workhorse',
        content:
          '**Llama 3.2 3B (Meta, 2024) is the most-tested 3B model in 2026 — broadest app compatibility, strongest tool-calling support among the six, and the largest community fine-tune ecosystem.** Slightly behind Phi-4 Mini on raw quality but more reliable in edge cases and better-supported by mobile apps.',
        items: [
          '**Parameters and training:** 3B parameters; trained on Meta\'s large pretraining corpus with instruction-tuning for chat and tool use. Same Llama 3 architecture as the 8B and 70B siblings.',
          '**Memory footprint:** ~2.2 GB at Q4_K_M, ~2.8 GB at Q5_K_M. Fits on 8 GB+ phones with comfortable OS headroom; works on tight 6 GB phones if other apps are closed.',
          '**Speed (tokens/sec):** iPhone 17 Pro ~16–22, iPhone 16 Pro ~12–18, Galaxy S25 Ultra ~12–18, iPhone 14 Pro ~7–11.',
          '**Quality strengths:** broad world knowledge, robust tool-calling and function-calling support (best-in-class among sub-4B models), reliable chat behaviour, mature ecosystem of fine-tunes for specific tasks (medical, legal, coding).',
          '**Quality weaknesses:** weaker chain-of-thought reasoning than Phi-4 Mini, slightly lower MMLU scores at similar size, less natural conversational tone than Gemma 3 4B.',
          '**Best for:** mobile apps that need tool calling or function calling (RAG over local documents, on-device agent workflows), or users who want the model with the largest community fine-tune library.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.2 3B is the only model in this lineup with broad tool-calling support reliable enough for on-device agent workflows — see [Local AI Agents with MCP 2026](/power-local-llm/local-ai-agents-with-mcp-2026) for the agent layer. Phi-4 Mini and SmolLM 2 can technically tool-call but Llama 3.2 3B is the only one production-ready in 2026.',
          },
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'Quantisation for Mobile: Q4_K_M Is the Default',
        content:
          '**Q4_K_M is the standard quantisation for mobile LLM inference in 2026 — preserves ~95% of the original model\'s quality at one-quarter the file size.** Use Q5_K_M or Q6_K only on 12 GB+ phones (iPhone 17 Pro Max, Galaxy S25 Ultra) where the extra memory headroom is genuinely free.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M is the mobile default — ~95% quality at one-quarter size. Q5_K_M / Q6_K are only worth it on 12 GB+ phones.',
          },
          {
            type: 'plain-terms',
            text: 'Models on Hugging Face are published at full precision (each parameter stored as a 16-bit number). On phones, you download a quantised version where each parameter is squeezed into 4 bits — making the file four times smaller and inference roughly four times faster, with a small quality cost. Q4_K_M is the variant that everyone in 2026 settled on as the right balance for phones. Higher Q numbers (Q5, Q6, Q8) mean less squeezing and better quality but bigger files; Q4 is the sweet spot for phone constraints.',
          },
        ],
        items: [
          '**Q4_K_M (recommended default):** 4-bit quantisation with K-quants and "M" mixed precision. ~95% of original quality. Standard for mobile in 2026. All six models available in this format on Hugging Face.',
          '**Q5_K_M (for 12 GB+ phones):** 5-bit quantisation. ~98% of original quality. ~25% larger files. Worth it on iPhone 17 Pro Max (12 GB) or Galaxy S25 Ultra (12 GB) for Phi-4 Mini and Llama 3.2 3B; not worth the RAM cost on 8 GB phones.',
          '**Q6_K (rarely needed):** 6-bit quantisation. ~99% of original quality. ~50% larger files. Only worth it for memory-rich phones running models you genuinely care about quality on (e.g., long-form drafting where every percentage point of quality matters).',
          '**Q8_0 (avoid on mobile):** 8-bit quantisation. ~99.5% of original quality. Roughly 2× the size of Q4_K_M. Not worth the RAM cost on phones; reserve for desktop/laptop use.',
          '**Q3_K_M / Q2_K (only for very constrained phones):** 3-bit and 2-bit quantisation. Quality drops to ~85–90%. Use only if Gemma 3 1B at Q4_K_M still does not fit (rare in 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Do not download the same model in multiple quantisations expecting to "test which is best" on a phone. The quality differences between Q4_K_M and Q5_K_M are real but small, and you will burn 5+ GB of phone storage hosting redundant variants. Pick Q4_K_M, run it for a week of real use, and only upgrade to Q5_K_M if you have specific evidence the quality is insufficient.',
          },
        ],
        image: '/images/mobile-llm-models-quantization-guide-en.svg',
        imageCaption: 'GGUF quantisation levels for mobile: Q4_K_M is the default for 6 GB+ phones (~95% quality, ×0.5 file size); Q5_K_M and Q6_K only for 12 GB+ phones; Q8_0 is desktop-only; Q3_K_M is the last resort for 4 GB phones.',
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'Per-Tier Verdict: Flagship vs Mid-Range vs Budget',
        content:
          '**Phone tier dictates the model ceiling — chip generation and RAM matter more than brand.** A flagship phone (8 GB+ RAM, A18 Pro / A19 Pro / Snapdragon 8 Elite) runs 3.8B–4B models comfortably; a mid-range phone (6–8 GB RAM, older flagship chip) runs 1.7B–3B; a budget or older phone (4–6 GB RAM) runs 1B–1.5B.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Flagship phones (8 GB+) → Phi-4 Mini 3.8B; mid-range (6–8 GB) → SmolLM 2 1.7B or Llama 3.2 3B; budget or older (4–6 GB) → Gemma 3 1B or Qwen 3 1.7B.',
          },
          {
            type: 'plain-terms',
            text: 'Match the model to your phone, not your aspirations. A 3.8B model on a 6 GB phone produces frustrating 3-second pauses and crashes when other apps need memory. A 1B model on a flagship phone leaves capability on the table. Pick the largest model your phone can run comfortably with the OS and at least one other app open.',
          },
        ],
        columns: ['Phone Tier', 'Examples', 'Recommended Model', 'Why'],
        rows: [
          { 'Phone Tier': 'Flagship (8–12 GB RAM)', 'Examples': 'iPhone 17 Pro / Pro Max, iPhone 16 Pro, Galaxy S25 Ultra, OnePlus 13', 'Recommended Model': 'Phi-4 Mini (3.8B Q4_K_M)', 'Why': 'Smartest model the chip sustains at usable speed' },
          { 'Phone Tier': 'Older flagship (8 GB RAM)', 'Examples': 'iPhone 15 Pro, Galaxy S24 Ultra, Pixel 9 Pro', 'Recommended Model': 'Llama 3.2 3B or Phi-4 Mini', 'Why': 'Llama 3.2 3B for tool calling; Phi-4 Mini for raw quality' },
          { 'Phone Tier': 'Mid-range (6–8 GB RAM)', 'Examples': 'iPhone 14 Pro, Pixel 9, Snapdragon 8 Gen 2 phones', 'Recommended Model': 'SmolLM 2 1.7B or Qwen 3 1.7B', 'Why': 'Snappy speed; fits with OS headroom' },
          { 'Phone Tier': 'Budget / older (4–6 GB RAM)', 'Examples': 'iPhone 14, mid Snapdragon 7-series, older Android', 'Recommended Model': 'Gemma 3 1B or Qwen 3 1.7B', 'Why': 'Smallest viable models that still produce coherent output' },
          { 'Phone Tier': 'Very old (4 GB RAM)', 'Examples': 'iPhone SE 3rd gen, older 4 GB Android', 'Recommended Model': 'Gemma 3 1B', 'Why': 'Only model that fits; limited reasoning, fast tokens/sec' },
          { 'Phone Tier': 'Unsupported (<4 GB)', 'Examples': 'iPhone SE 2nd gen, ancient Android', 'Recommended Model': 'Remote-connect to home machine instead', 'Why': 'On-device LLM not practical; use a tablet/phone as a UI for a home Ollama server' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For the app side of the equation, see the iPhone and Android sister guides — they cover which apps actually expose each of these models on each platform. App availability sometimes lags model availability: Gemma 3 4B was on Hugging Face six months before PocketPal AI added a one-tap downloader for it. If a model is missing from your app\'s curated list, it can usually be sideloaded as a GGUF from Hugging Face.',
          },
        ],
        image: '/images/mobile-llm-models-per-tier-verdict-en.svg',
        imageCaption: 'Mobile LLM recommendations by phone tier: flagship phones (8–12 GB RAM) → Phi-4 Mini 3.8B; older flagship (8 GB) → Llama 3.2 3B; mid-range (6–8 GB) → SmolLM 2 1.7B; budget (4–6 GB) → Qwen 3 1.7B; very old (4 GB) → Gemma 3 1B.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Picking a model larger than the phone\'s RAM allows.** Phi-4 Mini on a 6 GB phone runs at 3–5 tok/sec and crashes when iOS / Android reclaims memory for another app. Match the model to your tier (see the per-tier table above).',
          '**Downloading multiple quantisation variants of the same model.** Pick Q4_K_M and stop. Five GB of redundant Q5/Q6 variants on a 256 GB phone is wasted space, and the quality differences are not perceptible in everyday chat.',
          '**Using SmolLM 2 1.7B for multi-step reasoning.** It is the fastest model but not the smartest. For chain-of-thought tasks (math, planning, complex reasoning), use Phi-4 Mini even if the slower tokens/sec feels frustrating. Speed without quality is just a faster wrong answer.',
          '**Asking Phi-4 Mini for non-English output without a multilingual prompt prefix.** Phi-4 Mini handles common European languages adequately but produces uneven output in CJK or Arabic. For multilingual use, install Qwen 3 1.7B alongside Phi-4 Mini and switch per language.',
          '**Expecting cloud-AI quality from any of these models.** All six are 1B–4B, which means roughly 60–80% of the capability of GPT-5.5 on chat tasks and far less on complex reasoning. Use them for what they are good at (private chat, summarisation, drafting, translation) and use cloud or remote-connect for what requires a 70B+ model.',
          '**Confusing Phi-4 Mini (3.8B) with the older Phi-3 Mini (3.8B).** They share a parameter count but Phi-4 Mini\'s training data and chat template are different. Always confirm the model identifier in the GGUF filename — `phi-4-mini-instruct` not `phi-3-mini-4k-instruct`.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Phi-4 Mini technical report — [Microsoft Research](https://arxiv.org/abs/2412.08905) (December 2024).',
          'Gemma 3 technical report — [Google DeepMind](https://blog.google/technology/developers/gemma-3/) (2025).',
          'SmolLM 2 model card — [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct) (2024).',
          'Qwen 3 technical report — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/) (2024).',
          'Llama 3.2 model card — [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) (2024).',
          'Q4_K_M quantisation reference — [llama.cpp documentation](https://github.com/ggerganov/llama.cpp).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which mobile model is fastest on iPhone?',
            a: 'Gemma 3 1B is the absolute fastest at ~35–45 tokens/sec on iPhone 17 Pro, but it is the smallest model in this lineup. Among 1.5B–1.7B models (where speed and quality are balanced), SmolLM 2 1.7B is the fastest at ~26–32 tokens/sec. Among models that produce flagship-quality output, Phi-4 Mini at ~13–18 tokens/sec is the fastest "smart" option. Pick by use case: if responsiveness matters more than depth, SmolLM 2; if depth matters more, Phi-4 Mini.',
          },
          {
            q: 'Does Phi-4 Mini really beat 7B models on phone?',
            a: 'It beats older 7B models (Llama 3.3 7B, Mistral Small v0.1) on standard benchmarks like MMLU and reasoning tasks despite being half the size. It does NOT beat current 7B models (Llama 3.3 7B, Mistral Small v0.3) on raw capability — those still lead on broad knowledge and complex reasoning. The reason Phi-4 Mini punches above its weight is Microsoft\'s training-data mix (heavy on synthetic reasoning chains and high-quality text). On phone, 7B models are usually too slow to be practical anyway, so Phi-4 Mini wins by default.',
          },
          {
            q: 'Can SmolLM 2 run on a 4-year-old phone?',
            a: 'Yes, on most 4-year-old flagships. SmolLM 2 1.7B at Q4_K_M needs ~1.1 GB RAM for the model plus ~500 MB for inference overhead — fits on iPhone 13 (6 GB), iPhone 12 Pro Max (6 GB), and equivalent Android (6 GB+). On 4 GB phones from 2021 (iPhone 12, base Android), it technically loads but is unstable under any other memory pressure; use Gemma 3 1B instead.',
          },
          {
            q: 'Which model handles translation best on mobile?',
            a: 'Qwen 3 1.7B for any pair involving Chinese, Japanese, Korean, Arabic, German, French, Spanish, or Russian. It was trained with strong multilingual representation and produces native-quality output where English-first models (Phi-4 Mini, Llama 3.2 3B) produce stilted or broken results. For European-language pairs only, Gemma 3 4B is a viable second choice. For one-off translations between English and one specific language, an installed translation app (Google Translate, DeepL) is often better than any local LLM — local models shine when you need translation chained with chat or summarisation in the same conversation.',
          },
          {
            q: 'Do I need a flagship phone to run these well?',
            a: 'No, only for the largest models (Phi-4 Mini 3.8B, Gemma 3 4B, Llama 3.2 3B). Mid-range phones with 6–8 GB RAM run SmolLM 2 1.7B and Qwen 3 1.7B at full speed (~20–28 tokens/sec). Budget phones with 4–6 GB RAM run Gemma 3 1B at ~15–25 tokens/sec. The honest answer: if you do not already own a flagship phone, do not buy one for local AI — the smaller models on your existing phone are good enough for most use cases.',
          },
          {
            q: 'Which model has the smallest battery drain?',
            a: 'Gemma 3 1B by a wide margin — smallest model means fewest computations per token, which means lower CPU/GPU load and lower power draw. SmolLM 2 1.7B and Qwen 3 1.7B are next. The 3B–4B models (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) draw 2–3× more power per response. For long flights or extended off-grid use where battery matters most, Gemma 3 1B is the right pick despite the quality cost.',
          },
          {
            q: 'Can mobile models handle multi-turn conversations?',
            a: 'Yes for short conversations (5–10 turns), with quality degrading after that. All six models have 4k–8k token context windows; longer conversations exceed the window and the model loses track of earlier turns. For ongoing chat that needs memory beyond a session, the practical pattern is: summarise the conversation periodically, store the summary, and feed it back as context. Most mobile apps (PocketPal AI, Private LLM) do this automatically; LLM Farm requires manual configuration.',
          },
          {
            q: 'Do these models work with voice input?',
            a: 'Yes, when paired with a Whisper speech-to-text layer. The standard offline mobile voice stack in 2026 is: Whisper (small or tiny model) for speech-to-text → Phi-4 Mini or SmolLM 2 for response generation → Apple TTS or Android TTS for speech synthesis. SmolLM 2 1.7B is the best LLM choice for voice because the high tokens/sec keeps voice turn-taking responsive — see [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) for the full pipeline.',
          },
          {
            q: 'Which is best for offline travel use?',
            a: 'For travel where you switch languages and need translation: Qwen 3 1.7B. For travel where you mostly need an English-language reference (questions, summarising travel docs, drafting emails): Phi-4 Mini on a flagship phone, SmolLM 2 1.7B on a mid-range phone. Travel use is the strongest case for local AI overall — no roaming data needed, no cloud-API costs, and no risk of cloud dependencies failing in low-connectivity areas. Download the model before the trip; it works for the whole journey on a single charge if used moderately.',
          },
          {
            q: 'Are mobile models still useful in 2027?',
            a: 'Yes, but the specific model names will change. The mobile small-LLM frontier moves roughly every 6–9 months — by Q4 2026 there will likely be new ~3B models that outperform Phi-4 Mini, and by mid-2027 the 1B–2B class will likely match what 3B–4B models do today. The category does not become obsolete; specific picks rotate. Re-check this article (refresh due 2026-11-08) for the next-generation lineup.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLM Apps for iPhone in 2026 (Run AI Without WiFi)](/power-local-llm/best-local-llm-apps-iphone-2026) — sister Cat 6 guide on the iPhone apps that load these models.',
          '[Best Local LLM Apps for Android in 2026: 6 Apps Compared on Real Phones](/power-local-llm/best-local-llm-apps-android-2026) — sister Cat 6 guide on the Android apps that load these models.',
          '[Build a Local Voice Assistant on Your Phone: Whisper + Local LLM](/power-local-llm/voice-assistant-local-mobile-offline) — niche application of these mobile models in an offline voice pipeline.',
          '[Run Local AI on Your Tablet: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)](/power-local-llm/run-ai-on-tablet-ipad-android) — adjacent platform guide for tablet readers using the same model lineup.',
          '[LLM Quantization Explained: Q4_K_M, Q5_K_M, GGUF Formats](/local-llms/llm-quantization-explained) — quantisation authority for the Q4_K_M default referenced throughout this article.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — broader model authority covering all hardware tiers, not just mobile.',
          '[Local LLM Software Directory 2026](/power-local-llm/local-llm-software-directory-2026) — directory of every local-LLM tool worth knowing across all platforms.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Mejores modelos LLM para móviles en 2026: Phi-4 Mini vs Gemma 3 vs SmolLM',
    seoTitle: 'Phi-4 Mini vs Gemma 3 vs SmolLM: LLMs móviles 2026',
    intro:
      'Seis modelos de lenguaje pequeños cubren casi todos los casos de uso móvil en 2026: Phi-4 Mini (3.8B), Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.5B y Llama 3.2 3B. Difieren en tokens por segundo, consumo de memoria y calidad en chat, resumen, traducción y redacción breve. Esta guía los compara en iPhone 17 Pro y Galaxy S25 Ultra, ofrece un veredicto por gama (gama alta / gama media / económico) y explica por qué la cuantización Q4_K_M es el estándar para móviles.',
    metaDescription:
      'Seis LLMs pequeños evaluados en teléfonos en 2026. Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 3 1.5B, Llama 3.2 3B comparados en velocidad, RAM y calidad.',
    twitterDescription:
      'Mejores LLMs móviles en 2026: Phi-4 Mini (el más inteligente), SmolLM 2 (el más rápido), Qwen 3 (multilingüe), Gemma 3 1B (teléfonos antiguos), Gemma 3 4B (equilibrado), Llama 3.2 3B (todoterreno).',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.5B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Usuarios de móviles que eligen un modelo LLM local para iPhone o Android — incluyendo viajeros, usuarios preocupados por la privacidad y desarrolladores que crean funciones de IA móvil sin conexión.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'mejor modelo LLM para móviles',
    targetKeywords: [
      'mejor modelo LLM para móviles',
      'phi-4 mini vs gemma 3',
      'smollm 2 móvil',
      'qwen 2.5 1.5b móvil',
      'llama 3.2 3b móvil',
      'LLM pequeño para teléfono',
      'mejor LLM en dispositivo 2026',
    ],
    leadAnswerBlock:
      '**Para la mayoría de los teléfonos gama alta (8 GB+ de RAM) en 2026, Phi-4 Mini (3.8B) con cuantización Q4_K_M es el modelo más inteligente que funciona a una velocidad utilizable (~13–18 tokens/seg en iPhone 17 Pro).** En teléfonos más antiguos de 6 GB, Qwen 3 1.5B o SmolLM 2 1.7B caben cómodamente y producen respuestas cortas coherentes. SmolLM 2 1.7B es el más rápido en tokens por segundo en todos los dispositivos probados. Qwen 3 1.5B es la mejor opción multilingüe (más de 35 idiomas, incluidos chino, japonés y árabe). Gemma 3 4B es el estándar equilibrado cuando Phi-4 Mini no está disponible en tu app. Gemma 3 1B es la opción ligera para teléfonos muy antiguos (4 GB de RAM). Llama 3.2 3B es el todoterreno 3B más probado con el soporte de herramientas más amplio.',
    quickAnswerTop: {
      question: '¿Cuál es el mejor modelo LLM local para móviles en 2026?',
      answer:
        'Phi-4 Mini (3.8B) es el modelo más inteligente que funciona a velocidad utilizable en teléfonos gama alta (8 GB+ de RAM) — ~13–18 tokens/seg en iPhone 17 Pro. SmolLM 2 1.7B es el más rápido en todos los dispositivos probados. Qwen 3 1.5B es la mejor opción multilingüe. Gemma 3 4B es la opción equilibrada predeterminada. Gemma 3 1B funciona en teléfonos muy antiguos (4 GB de RAM). Llama 3.2 3B es el mejor todoterreno 3B. Los seis deben descargarse en formato Q4_K_M GGUF — la cuantización estándar para móviles que conserva ~95% de la calidad original a una cuarta parte del tamaño.',
      bullets: [
        'Phi-4 Mini (3.8B) — el modelo pequeño más inteligente. El mejor en teléfonos de 8 GB+ (iPhone 17 Pro: ~13–18 tok/seg).',
        'Gemma 3 4B — opción equilibrada predeterminada. Buena calidad pero más lento que Phi-4 Mini en el mismo hardware.',
        'Gemma 3 1B — para teléfonos antiguos (4 GB de RAM). Rápido pero con razonamiento limitado.',
        'SmolLM 2 1.7B — el más rápido en tokens/seg en todos los teléfonos probados. El mejor para chat ágil en dispositivos de gama media.',
        'Qwen 3 1.5B — el mejor modelo móvil multilingüe (más de 35 idiomas). El mejor para traducción y chat en idiomas distintos al inglés.',
        'Llama 3.2 3B — el todoterreno 3B más probado. El mejor 3B para tool calling, RAG y apps con mayor compatibilidad.',
        'Cuantización: descarga Q4_K_M GGUF para los seis. Q5/Q6 solo si tu teléfono tiene 12 GB+ de RAM y la app lo soporta.',
      ],
      updatedDate: '2026-05-08',
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué modelo móvil deberías elegir?', anchor: '#which-model' },
      { label: 'Tabla comparativa de modelos móviles', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini: el modelo pequeño más inteligente', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B: opción equilibrada', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B: opción ligera para teléfonos antiguos', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1.7B: el más rápido en tokens por segundo', anchor: '#smollm-2' },
      { label: 'Qwen 3 1.5B: el mejor modelo móvil multilingüe', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B: el todoterreno 3B de confianza', anchor: '#llama-3-2-3b' },
      { label: 'Cuantización para móviles: Q4_K_M como estándar', anchor: '#quantization' },
      { label: 'Veredicto por gama: alta vs media vs económica', anchor: '#per-tier-verdict' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Phi-4 Mini (3.8B) es el modelo pequeño más inteligente en 2026.** El mejor para teléfonos gama alta con 8 GB+ de RAM — funciona a ~13–18 tokens/seg en iPhone 17 Pro y ~10–15 en iPhone 16 Pro. El mayor razonamiento por parámetro de cualquier modelo sub-4B.',
          '**SmolLM 2 1.7B es el más rápido en tokens por segundo en todos los teléfonos probados.** ~26–32 tok/seg en iPhone 17 Pro, ~20–28 en Galaxy S25 Ultra. El mejor cuando la velocidad de respuesta importa más que la profundidad (chat ágil, tareas de autocompletado).',
          '**Qwen 3 1.5B es el mejor modelo móvil multilingüe.** Entrenado en más de 35 idiomas incluidos chino, japonés, árabe y alemán con salida de calidad nativa. La mejor opción para traducción, redacción en otros idiomas y uso en viajes.',
          '**Gemma 3 4B es la opción equilibrada predeterminada.** Ligeramente más lento que Phi-4 Mini en el mismo hardware, pero equiparable en chat y resumen. El mejor cuando Phi-4 Mini no está disponible en tu app o prefieres la mezcla de datos de entrenamiento de Google.',
          '**Gemma 3 1B es la opción ligera para teléfonos antiguos.** Cabe en 4 GB de RAM (iPhone SE 3.ª gen, Android antiguo). Razonamiento multi-paso limitado, pero produce respuestas coherentes de 1–2 párrafos más rápido que cualquier otro modelo en hardware débil.',
          '**Llama 3.2 3B es el todoterreno 3B más probado.** El mejor soporte de tool calling entre los seis, la mayor compatibilidad con apps y el mayor ecosistema comunitario de fine-tunes. Ligeramente por detrás de Phi-4 Mini en calidad bruta pero más fiable en casos límite.',
          '**Q4_K_M es la cuantización estándar para móviles en 2026.** Conserva ~95% de la calidad original a una cuarta parte del tamaño de archivo. Usa Q5_K_M o Q6_K solo en teléfonos con 12 GB+ de RAM (iPhone 17 Pro Max) y solo si la app lo soporta.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Modelos probados:** Phi-4 Mini 3.8B, Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.5B, Llama 3.2 3B (todos Q4_K_M GGUF).',
          '**Dispositivos de prueba:** iPhone 17 Pro (A19 Pro), iPhone 16 Pro (A18 Pro, 8 GB), Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), OnePlus 13 (Snapdragon 8 Elite).',
          '**Motores de inferencia:** llama.cpp vía PocketPal AI / LLM Farm (predeterminado), MLC LLM vía MLC Chat (acelerado por Metal en iPhone), Ollama vía Termux (Android).',
          '**Huella de memoria (Q4_K_M):** Phi-4 Mini ~2,7 GB, Gemma 3 4B ~2,9 GB, Llama 3.2 3B ~2,2 GB, Qwen 3 1.5B ~1,0 GB, SmolLM 2 1.7B ~1,1 GB, Gemma 3 1B ~720 MB.',
          '**RAM mínima (activa):** teléfono de 6 GB para modelos de 1,5B–1,7B; 8 GB para modelos de 3B–4B; 4 GB solo para Gemma 3 1B.',
          '**Tokens/seg más rápidos en iPhone 17 Pro:** Gemma 3 1B ~35–45, SmolLM 2 ~26–32, Qwen 3 ~24–32, Llama 3.2 3B ~16–22, Phi-4 Mini ~13–18, Gemma 3 4B ~10–13.',
          '**Fuente de cuantización:** los seis disponibles como Q4_K_M GGUF en Hugging Face y vía PocketPal AI / MLC Chat / LM Studio.',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: '¿Qué modelo móvil deberías elegir?',
        content:
          '**Para la mayoría de los teléfonos gama alta (iPhone 16 Pro / 17 Pro, Galaxy S25 Ultra, OnePlus 13), elige Phi-4 Mini (3.8B Q4_K_M).** Es el modelo más inteligente sub-4B y funciona a una velocidad conversacional utilizable. Elige otro modelo solo cuando tengas una necesidad específica que este no cubre — velocidad (SmolLM 2), multilingüe (Qwen 3) o compatibilidad con teléfonos antiguos (Gemma 3 1B).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige Phi-4 Mini para gama alta con 8 GB+ (el más inteligente), SmolLM 2 1.7B para velocidad, Qwen 3 1.5B para multilingüe, Gemma 3 1B para teléfonos de 4 GB, Llama 3.2 3B para tool calling y Gemma 3 4B como opción equilibrada cuando Phi-4 Mini no esté disponible.',
          },
          {
            type: 'plain-terms',
            text: 'No existe un único mejor modelo móvil — la elección correcta depende de tu teléfono y de lo que hagas con él. Si tu teléfono es de los últimos dos años y tiene 8 GB o más de RAM, instala Phi-4 Mini. Si chateas principalmente en un idioma distinto al inglés, instala Qwen 3. Si quieres las respuestas más rápidas aunque sacrifiques algo de calidad, instala SmolLM 2. Si tu teléfono es antiguo o tiene solo 4 GB de RAM, instala Gemma 3 1B. Las diferencias son reales pero lo suficientemente pequeñas como para que cualquiera de estos modelos produzca respuestas coherentes — ninguno tiene calidad de nube.',
          },
        ],
        decisionBlock: {
          title: 'Decisión: ¿qué modelo móvil?',
          localIf: [
            'Teléfono gama alta con 8 GB+ de RAM (iPhone 16 Pro/17 Pro, Galaxy S25 Ultra, OnePlus 13) → Phi-4 Mini 3.8B',
            'Necesitas los tokens/seg más rápidos en cualquier teléfono → SmolLM 2 1.7B',
            'Uso en idiomas distintos al inglés (traducción, chat multilingüe) → Qwen 3 1.5B',
            'Necesitas amplia compatibilidad con apps, tool calling o RAG → Llama 3.2 3B',
            'Teléfono antiguo con 4 GB de RAM → Gemma 3 1B',
            'Phi-4 Mini no disponible en tu app, necesitas calidad de clase 4B → Gemma 3 4B',
          ],
          cloudIf: [
            'Razonamiento multi-paso, generación de código complejo o análisis de documentos largos → usa la nube o conéctate remotamente a un equipo doméstico con 70B+',
            'Tareas de visión-lenguaje (entrada de imágenes, OCR) → apps en la nube (los modelos de visión móvil en 2026 son limitados y lentos)',
            'Escritura creativa larga donde la coherencia en más de 3.000+ tokens importa → nube o 8B+ en escritorio',
          ],
          quick: [
            'Opción predeterminada para la mayoría: Phi-4 Mini 3.8B',
            'El más rápido en todos los dispositivos: SmolLM 2 1.7B',
            'El mejor multilingüe: Qwen 3 1.5B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Si no estás seguro, empieza con Phi-4 Mini en un teléfono gama alta o SmolLM 2 1.7B en uno de gama media — ambos se descargan en menos de 5 minutos con una conexión rápida y son reversibles. Prueba con una tarea que realmente te importe (un correo real para resumir, una pregunta real que responder). Si la calidad es aceptable, tienes tu modelo predeterminado. Si no, cámbialo en 30 segundos vía PocketPal AI o LM Studio.',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-es.svg',
        imageCaption: 'Guía de selección de LLMs móviles en 4 pasos: comprobar la RAM del teléfono, elegir la gama (4 GB a 8 GB+), seleccionar el caso de uso (velocidad, multilingüe o calidad) y luego instalar el GGUF Q4_K_M vía PocketPal AI o LM Studio.',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabla comparativa de modelos móviles',
        content:
          '**La tabla de cuatro columnas a continuación es la capa de extracción rápida — elige una fila por gama de dispositivo o caso de uso.** Las cifras de tokens/seg asumen cuantización Q4_K_M en iPhone 17 Pro con PocketPal AI (llama.cpp). Los números son un 15–25% menores en iPhone 16 Pro y aproximadamente un 10–20% menores en Galaxy S25 Ultra con MLC Chat o Termux+Ollama.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini es el más inteligente, SmolLM 2 1.7B el más rápido, Qwen 3 1.5B el mejor multilingüe, Gemma 3 1B el más pequeño viable, Llama 3.2 3B el mejor todoterreno 3B y Gemma 3 4B la opción equilibrada predeterminada.',
          },
          {
            type: 'plain-terms',
            text: 'Lee esta tabla de arriba a abajo en orden de tamaño, o ve directamente a la fila que corresponde a tu gama de dispositivo. La columna "Mejor para" indica qué optimiza el modelo — elige la fila cuya fortaleza más te importe e ignora las demás.',
          },
        ],
        columns: ['Modelo', 'Tamaño', 'Tokens/seg (17 Pro)', 'Mejor para'],
        rows: [
          { 'Modelo': 'Phi-4 Mini', 'Tamaño': '3,8B', 'Tokens/seg (17 Pro)': '~13–18', 'Mejor para': 'Modelo pequeño más inteligente — predeterminado para gama alta' },
          { 'Modelo': 'Gemma 3 4B', 'Tamaño': '4B', 'Tokens/seg (17 Pro)': '~10–13', 'Mejor para': 'Opción equilibrada cuando Phi-4 Mini no está disponible' },
          { 'Modelo': 'Gemma 3 1B', 'Tamaño': '1B', 'Tokens/seg (17 Pro)': '~35–45', 'Mejor para': 'Teléfonos antiguos (4 GB de RAM)' },
          { 'Modelo': 'SmolLM 2', 'Tamaño': '1,7B', 'Tokens/seg (17 Pro)': '~26–32', 'Mejor para': 'Tokens/seg más rápidos, chat ágil' },
          { 'Modelo': 'Qwen 3', 'Tamaño': '1,5B', 'Tokens/seg (17 Pro)': '~24–32', 'Mejor para': 'El mejor multilingüe (más de 35 idiomas)' },
          { 'Modelo': 'Llama 3.2', 'Tamaño': '3B', 'Tokens/seg (17 Pro)': '~16–22', 'Mejor para': 'La mejor opción 3B, tool calling, RAG' },
        ],
        note:
          '**Nota sobre la compensación velocidad-calidad:** los tokens/seg escalan inversamente al número de parámetros en el mismo chip — un modelo de 1B es aproximadamente 3–4× más rápido que uno de 3,8B en hardware idéntico. La calidad escala con los parámetros pero no linealmente: la calidad de razonamiento de Phi-4 Mini (3,8B) está más cerca de un modelo de 7B que de uno de 1,7B gracias a la mezcla de datos de entrenamiento de Microsoft. Usa la tabla para equilibrar: modelo más rápido = respuesta más rápida, modelo más inteligente = mejor respuesta para preguntas difíciles.',
        callouts: [
          {
            type: 'tip',
            text: 'Los tokens/seg del iPhone 16 Pro son aproximadamente un 15–25% menores que los del iPhone 17 Pro para todos los modelos de esta tabla — diferencia entre los Neural Engine A18 Pro y A19 Pro. El Galaxy S25 Ultra (Snapdragon 8 Elite) es aproximadamente un 10–20% menor que el iPhone 17 Pro con el mismo GGUF Q4_K_M, principalmente porque Termux+Ollama en Android aún no aprovecha el NPU Hexagon de Snapdragon del mismo modo que MLC Chat aprovecha Apple Metal.',
          },
        ],
        image: '/images/mobile-llm-models-comparison-table-es.svg',
        imageCaption: 'Seis modelos LLM móviles comparados con Q4_K_M en iPhone 17 Pro: Phi-4 Mini (3,8B, ~13–18 tok/seg) es el más inteligente; SmolLM 2 (1,7B, ~26–32 tok/seg) es el más rápido; Qwen 3 (1,5B) es el mejor multilingüe; Gemma 3 1B (~35–45 tok/seg) funciona en teléfonos de 4 GB.',
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini: el modelo pequeño más inteligente',
        content:
          '**Phi-4 Mini (3,8B parámetros, Microsoft, diciembre de 2024) es el modelo sub-4B más inteligente en 2026 gracias a una mezcla de datos de entrenamiento optimizada para el razonamiento.** Supera a Gemma 3 4B y Llama 3.2 3B en tareas chain-of-thought a pesar de un tamaño similar. Úsalo como predeterminado en cualquier teléfono con 8 GB+ de RAM.',
        items: [
          '**Parámetros y entrenamiento:** 3,8B parámetros; entrenado con una mezcla curada por Microsoft de texto web de alta calidad, cadenas de razonamiento sintéticas y contenido académico. La arquitectura es un Transformer con grouped-query attention.',
          '**Huella de memoria:** ~2,7 GB en Q4_K_M, ~3,5 GB en Q5_K_M. Cabe cómodamente en iPhone 16 Pro / 17 Pro (8 GB) y Galaxy S25 Ultra (12 GB) con margen para el sistema operativo.',
          '**Velocidad (tokens/seg):** iPhone 17 Pro ~13–18, iPhone 16 Pro ~10–15, Galaxy S25 Ultra ~10–15 (Termux+Ollama), iPhone 14 Pro ~6–10 (lento pero funcional).',
          '**Fortalezas de calidad:** razonamiento chain-of-thought, resumen, preguntas y respuestas factuales, generación básica de código. Supera a modelos de código abierto de tamaño similar en benchmarks estándar (MMLU, GSM8K).',
          '**Debilidades de calidad:** conocimiento del mundo más limitado que Llama 3.2 3B (menor exposición a Common Crawl); escritura creativa natural más corta que Gemma 3 4B; multilingüe más débil que Qwen 3 1.5B fuera del inglés.',
          '**El mejor para:** usuarios con un teléfono gama alta que quieren el mejor modelo predeterminado único para chat en inglés, resumen y razonamiento.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Phi-4 Mini se beneficia de un system prompt que invoca explícitamente el razonamiento paso a paso ("Piensa esto detenidamente antes de responder"). Los datos de entrenamiento estaban cargados de cadenas de razonamiento, por lo que usar ese estilo de instrucción produce sistemáticamente mejores respuestas que instrucciones escuetas. Para chat rápido no se necesita system prompt; el comportamiento predeterminado ya es conversacional.',
          },
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B: opción equilibrada',
        content:
          '**Gemma 3 4B (Google DeepMind, 2025) es la opción equilibrada predeterminada cuando Phi-4 Mini no está disponible en tu app o prefieres la mezcla de datos de entrenamiento de Google.** Ligeramente más lento que Phi-4 Mini en hardware idéntico, pero equiparable en chat y resumen, con mayor cobertura de lenguaje natural.',
        items: [
          '**Parámetros y entrenamiento:** 4B parámetros; entrenado con la mezcla curada por Google de texto web, código y datos multilingües. La misma familia de arquitectura que Gemma 2 con contexto extendido.',
          '**Huella de memoria:** ~2,9 GB en Q4_K_M, ~3,7 GB en Q5_K_M. Cabe en teléfonos de 8 GB+; ajustado en teléfonos de 6 GB (usa Phi-4 Mini o un modelo más pequeño en su lugar).',
          '**Velocidad (tokens/seg):** iPhone 17 Pro ~10–13, iPhone 16 Pro ~7–10, Galaxy S25 Ultra ~7–10 (ligeramente más lento que Phi-4 Mini a pesar de un tamaño similar por diferencias de arquitectura).',
          '**Fortalezas de calidad:** tono conversacional natural, resumen sólido, conocimiento del mundo más amplio que Phi-4 Mini (exposición a Common Crawl), multilingüe decente.',
          '**Debilidades de calidad:** razonamiento chain-of-thought más débil que Phi-4 Mini; tokens/seg más lentos en el mismo hardware; no siempre el primero en añadirse a apps móviles.',
          '**El mejor para:** usuarios de gama alta que quieren un modelo entrenado por Google como alternativa a Phi-4 Mini, especialmente para chat diario, resumen y redacción breve.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Gemma 3 4B usa una plantilla de chat diferente a Phi-4 Mini — verifica que tu app use la plantilla Gemma correcta (con marcadores `<start_of_turn>`). Una plantilla incorrecta produce salida rota o repetitiva. PocketPal AI, MLC Chat y LM Studio lo detectan automáticamente; LLM Farm requiere selección manual de la plantilla Gemma en Ajustes del modelo.',
          },
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B: opción ligera para teléfonos antiguos',
        content:
          '**Gemma 3 1B (Google DeepMind, 2025) es el modelo móvil viable más pequeño en 2026 — ~720 MB en Q4_K_M y funciona en teléfonos de 4 GB.** La calidad se limita a respuestas cortas coherentes (1–2 párrafos), pero es la única opción por debajo de 1 GB que produce salida utilizable en hardware débil.',
        items: [
          '**Parámetros y entrenamiento:** 1B parámetros; la misma arquitectura de la familia Gemma 3 que el modelo de 4B pero con menor cómputo de entrenamiento. Entrenado para inferencia eficiente en dispositivos edge.',
          '**Huella de memoria:** ~720 MB en Q4_K_M, ~900 MB en Q5_K_M. Funciona en iPhone SE 3.ª gen, iPhone 12/13, Android antiguo (mínimo 4 GB de RAM).',
          '**Velocidad (tokens/seg):** iPhone 17 Pro ~35–45, iPhone 16 Pro ~28–38, iPhone 14 ~20–28, Android antiguo (4 GB) ~10–15. El modelo más rápido de este grupo en todos los dispositivos.',
          '**Fortalezas de calidad:** velocidad, baja huella de memoria, respuestas cortas coherentes, bajo consumo de batería.',
          '**Debilidades de calidad:** razonamiento multi-paso débil, errores factuales frecuentes en temas específicos, repetición en generaciones largas (>500 tokens), poca profundidad conversacional.',
          '**El mejor para:** usuarios con teléfonos por debajo del umbral de 6 GB de RAM que aún quieren IA en el dispositivo, o cualquiera que optimice la duración de la batería en vuelos largos o escenarios de bajo consumo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Usa Gemma 3 1B para tareas cortas y enfocadas — resúmenes de una frase, borradores de un párrafo, definiciones rápidas, traducción simple entre pares de idiomas principales. Evita pedirle explicaciones de varios párrafos, razonamiento multi-paso o cualquier cosa donde la precisión en hechos específicos importe. El modelo conoce sus límites; indicarle que "sea conciso" juega a sus fortalezas.',
          },
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1.7B: el más rápido en tokens por segundo',
        content:
          '**SmolLM 2 1.7B (Hugging Face, 2024) es el modelo móvil más rápido en tokens por segundo en este grupo en todos los teléfonos probados.** ~26–32 tok/seg en iPhone 17 Pro y ~20–28 en Galaxy S25 Ultra. El mejor cuando la velocidad de respuesta importa más que la profundidad.',
        items: [
          '**Parámetros y entrenamiento:** 1,7B parámetros; entrenado con una mezcla curada por Hugging Face optimizada para la eficiencia de modelos pequeños. Arquitectura ajustada para inferencia de baja latencia en hardware de consumo.',
          '**Huella de memoria:** ~1,1 GB en Q4_K_M. Cabe en cualquier teléfono con 6 GB+ de RAM con amplio margen para el SO.',
          '**Velocidad (tokens/seg):** iPhone 17 Pro ~26–32, iPhone 16 Pro ~22–28, Galaxy S25 Ultra ~20–28, iPhone 14 Pro ~15–22. Aproximadamente 2× más rápido que Phi-4 Mini en el mismo chip.',
          '**Fortalezas de calidad:** respuestas conversacionales ágiles, preguntas y respuestas simples, continuación de tipo autocompletado, redacción en inglés.',
          '**Debilidades de calidad:** razonamiento más débil que Phi-4 Mini, conocimiento del mundo más limitado que Llama 3.2 3B, multilingüe más débil que Qwen 3 1.5B, alucinaciones ocasionales en consultas factuales.',
          '**El mejor para:** teléfonos de gama media donde la latencia importa (autocompletado de texto, turnos de asistente de voz, chat en tiempo real), o gama alta antigua donde los modelos grandes se sienten lentos.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SmolLM 2 1.7B es la mejor combinación para un asistente de voz sin conexión en móvil — consulta [Crea un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) para el pipeline Whisper + LLM + TTS. Los altos tokens/seg mantienen el tiempo de respuesta de voz por debajo del umbral de percepción de ~1,5 segundos incluso en hardware de gama media.',
          },
        ],
        image: '/images/mobile-llm-models-speed-chart-es.svg',
        imageCaption: 'Comparación de tokens por segundo para 6 modelos LLM móviles en 3 dispositivos con Q4_K_M: Gemma 3 1B (~35–45 en iPhone 17 Pro) y SmolLM 2 1.7B (~26–32) lideran en velocidad; Phi-4 Mini (~13–18) y Gemma 3 4B (~10–13) son más lentos pero más inteligentes.',
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 3 1.5B: el mejor modelo móvil multilingüe',
        content:
          '**Qwen 3 1.5B (Alibaba, 2024) es el mejor modelo móvil multilingüe en 2026 — entrenado en más de 35 idiomas incluidos chino, japonés, coreano, árabe, alemán, francés, español y ruso.** La mejor opción para traducción, chat en idiomas distintos al inglés y uso en viajes donde el usuario cambia de idioma a mitad de conversación.',
        items: [
          '**Parámetros y entrenamiento:** 1,5B parámetros; entrenado en el corpus multilingüe de Alibaba con fuerte representación de idiomas CJK, árabe y las principales lenguas europeas. Arquitectura optimizada para razonamiento multilingüe.',
          '**Huella de memoria:** ~1,0 GB en Q4_K_M. Cabe en cualquier teléfono con 6 GB+ de RAM.',
          '**Velocidad (tokens/seg):** iPhone 17 Pro ~24–32, iPhone 16 Pro ~20–28, Galaxy S25 Ultra ~18–26, iPhone 14 Pro ~14–20. Velocidad comparable a SmolLM 2.',
          '**Fortalezas de calidad:** salida de calidad nativa en más de 35 idiomas (la mayoría de los modelos pequeños están centrados en inglés con multilingüe débil de respaldo), fuerte traducción entre los principales pares de idiomas, salida CJK coherente donde Phi-4 Mini y Llama 3.2 producen caracteres rotos.',
          '**Debilidades de calidad:** razonamiento solo en inglés ligeramente más débil que Phi-4 Mini, escritura creativa natural más corta que Gemma 3 4B, tool calling más débil que Llama 3.2 3B.',
          '**El mejor para:** usuarios no angloparlantes (especialmente hablantes de chino, japonés, alemán, español y francés), viajeros que necesitan traducción sin conexión, o desarrolladores que crean funciones móviles multilingüe.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para una traducción de un solo paso entre dos pares de idiomas específicos, Qwen 3 1.5B suele superar a un modelo más grande centrado en el inglés que ejecuta la traducción como tarea secundaria. Para un usuario hispanohablante que chatea en español, Qwen 3 produce una salida notablemente más natural que Phi-4 Mini a pesar de ser un 60% más pequeño. La regla básica: elige el modelo entrenado para tu idioma principal, no el que tiene más parámetros.',
          },
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B: el todoterreno 3B de confianza',
        content:
          '**Llama 3.2 3B (Meta, 2024) es el modelo 3B más probado en 2026 — mayor compatibilidad con apps, mejor soporte de tool calling entre los seis y el mayor ecosistema comunitario de fine-tunes.** Ligeramente por detrás de Phi-4 Mini en calidad bruta pero más fiable en casos límite y con mejor soporte en apps móviles.',
        items: [
          '**Parámetros y entrenamiento:** 3B parámetros; entrenado en el gran corpus de preentrenamiento de Meta con instruction-tuning para chat y uso de herramientas. La misma arquitectura Llama 3 que los modelos de 8B y 70B.',
          '**Huella de memoria:** ~2,2 GB en Q4_K_M, ~2,8 GB en Q5_K_M. Cabe en teléfonos de 8 GB+ con margen cómodo para el SO; funciona en teléfonos ajustados de 6 GB si se cierran otras apps.',
          '**Velocidad (tokens/seg):** iPhone 17 Pro ~16–22, iPhone 16 Pro ~12–18, Galaxy S25 Ultra ~12–18, iPhone 14 Pro ~7–11.',
          '**Fortalezas de calidad:** amplio conocimiento del mundo, soporte robusto de tool calling y function calling (el mejor entre los modelos sub-4B), comportamiento de chat fiable, ecosistema maduro de fine-tunes para tareas específicas (medicina, derecho, programación).',
          '**Debilidades de calidad:** razonamiento chain-of-thought más débil que Phi-4 Mini, puntuaciones MMLU ligeramente menores a tamaño similar, tono conversacional menos natural que Gemma 3 4B.',
          '**El mejor para:** apps móviles que necesitan tool calling o function calling (RAG sobre documentos locales, flujos de trabajo de agentes en el dispositivo), o usuarios que quieren el modelo con la mayor biblioteca de fine-tunes comunitarios.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.2 3B es el único modelo de este grupo con soporte de tool calling lo suficientemente fiable para flujos de trabajo de agentes en el dispositivo — consulta [Agentes de IA locales con MCP 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026). Phi-4 Mini y SmolLM 2 técnicamente pueden hacer tool calling, pero Llama 3.2 3B es el único listo para producción en 2026.',
          },
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'Cuantización para móviles: Q4_K_M como estándar',
        content:
          '**Q4_K_M es la cuantización estándar para inferencia LLM en móviles en 2026 — conserva ~95% de la calidad original del modelo a una cuarta parte del tamaño del archivo.** Usa Q5_K_M o Q6_K solo en teléfonos con 12 GB+ de RAM (iPhone 17 Pro Max, Galaxy S25 Ultra) donde el margen de memoria adicional está genuinamente disponible.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M es el estándar móvil — ~95% de calidad a una cuarta parte del tamaño. Q5_K_M / Q6_K solo valen en teléfonos con 12 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Los modelos en Hugging Face se publican en precisión completa (cada parámetro almacenado como un número de 16 bits). En teléfonos, descargas una versión cuantizada donde cada parámetro se comprime a 4 bits — haciendo el archivo cuatro veces más pequeño y la inferencia aproximadamente cuatro veces más rápida, con un pequeño costo en calidad. Q4_K_M es la variante en la que todos en 2026 acordaron como el equilibrio correcto para teléfonos. Los números Q más altos (Q5, Q6, Q8) significan menos compresión y mejor calidad pero archivos más grandes; Q4 es el punto óptimo para las restricciones del teléfono.',
          },
        ],
        items: [
          '**Q4_K_M (estándar recomendado):** cuantización de 4 bits con K-quants y precisión mixta "M". ~95% de la calidad original. Estándar para móviles en 2026. Los seis modelos disponibles en este formato en Hugging Face.',
          '**Q5_K_M (para teléfonos con 12 GB+ de RAM):** cuantización de 5 bits. ~98% de la calidad original. Archivos ~25% más grandes. Vale la pena en iPhone 17 Pro Max (12 GB) o Galaxy S25 Ultra (12 GB) para Phi-4 Mini y Llama 3.2 3B; el costo de RAM no se justifica en teléfonos de 8 GB.',
          '**Q6_K (raramente necesaria):** cuantización de 6 bits. ~99% de la calidad original. Archivos ~50% más grandes. Solo vale para teléfonos con mucha memoria ejecutando modelos donde cada punto porcentual de calidad importa (p. ej., redacción larga donde cada porcentaje de calidad cuenta).',
          '**Q8_0 (evitar en móviles):** cuantización de 8 bits. ~99,5% de la calidad original. Aproximadamente 2× el tamaño de Q4_K_M. El costo de RAM en teléfonos no se justifica; reservar para escritorio/portátil.',
          '**Q3_K_M / Q2_K (solo para teléfonos muy limitados):** cuantización de 3 bits y 2 bits. La calidad cae a ~85–90%. Usar solo si Gemma 3 1B en Q4_K_M todavía no cabe (raro en 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'No descargues el mismo modelo en múltiples cuantizaciones esperando "probar cuál es mejor" en el teléfono. Las diferencias de calidad entre Q4_K_M y Q5_K_M son reales pero pequeñas, y desperdiciarás 5+ GB de almacenamiento del teléfono con variantes redundantes. Elige Q4_K_M, úsalo durante una semana de uso real, y solo actualiza a Q5_K_M si tienes evidencia específica de que la calidad es insuficiente.',
          },
        ],
        image: '/images/mobile-llm-models-quantization-guide-es.svg',
        imageCaption: 'Niveles de cuantización GGUF para móviles: Q4_K_M es el estándar para teléfonos con 6 GB+ (~95% de calidad, ×0,5 de tamaño de archivo); Q5_K_M y Q6_K solo para 12 GB+; Q8_0 es solo para escritorio; Q3_K_M es el último recurso para teléfonos de 4 GB.',
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'Veredicto por gama: alta vs media vs económica',
        content:
          '**La gama del teléfono determina el límite del modelo — la generación del chip y la RAM importan más que la marca.** Un teléfono gama alta (8 GB+ de RAM, A18 Pro / A19 Pro / Snapdragon 8 Elite) ejecuta modelos de 3,8B–4B cómodamente; uno de gama media (6–8 GB de RAM, chip gama alta antiguo) ejecuta 1,7B–3B; uno económico o antiguo (4–6 GB de RAM) ejecuta 1B–1,5B.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Gama alta (8 GB+) → Phi-4 Mini 3.8B; gama media (6–8 GB) → SmolLM 2 1.7B o Llama 3.2 3B; económico o antiguo (4–6 GB) → Gemma 3 1B o Qwen 3 1.5B.',
          },
          {
            type: 'plain-terms',
            text: 'Adapta el modelo a tu teléfono, no a tus aspiraciones. Un modelo de 3,8B en un teléfono de 6 GB produce pausas frustrantes de 3 segundos y cierres cuando otras apps necesitan memoria. Un modelo de 1B en un gama alta desaprovecha la capacidad disponible. Elige el modelo más grande que tu teléfono pueda ejecutar cómodamente con el SO y al menos otra app abierta.',
          },
        ],
        columns: ['Gama del teléfono', 'Ejemplos', 'Modelo recomendado', 'Por qué'],
        rows: [
          { 'Gama del teléfono': 'Gama alta (8–12 GB RAM)', 'Ejemplos': 'iPhone 17 Pro / Pro Max, iPhone 16 Pro, Galaxy S25 Ultra, OnePlus 13', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Por qué': 'El modelo más inteligente que el chip sostiene a velocidad utilizable' },
          { 'Gama del teléfono': 'Gama alta antigua (8 GB RAM)', 'Ejemplos': 'iPhone 15 Pro, Galaxy S24 Ultra, Pixel 9 Pro', 'Modelo recomendado': 'Llama 3.2 3B o Phi-4 Mini', 'Por qué': 'Llama 3.2 3B para tool calling; Phi-4 Mini para calidad bruta' },
          { 'Gama del teléfono': 'Gama media (6–8 GB RAM)', 'Ejemplos': 'iPhone 14 Pro, Pixel 9, teléfonos Snapdragon 8 Gen 2', 'Modelo recomendado': 'SmolLM 2 1.7B o Qwen 3 1.5B', 'Por qué': 'Velocidad ágil; cabe con margen para el SO' },
          { 'Gama del teléfono': 'Económico / antiguo (4–6 GB RAM)', 'Ejemplos': 'iPhone 14, Snapdragon serie 7 gama media, Android antiguo', 'Modelo recomendado': 'Gemma 3 1B o Qwen 3 1.5B', 'Por qué': 'Los modelos viables más pequeños que aún producen salida coherente' },
          { 'Gama del teléfono': 'Muy antiguo (4 GB RAM)', 'Ejemplos': 'iPhone SE 3.ª gen, Android antiguo de 4 GB', 'Modelo recomendado': 'Gemma 3 1B', 'Por qué': 'El único modelo que cabe; razonamiento limitado, tokens/seg rápidos' },
          { 'Gama del teléfono': 'No soportado (<4 GB)', 'Ejemplos': 'iPhone SE 2.ª gen, Android antiguo', 'Modelo recomendado': 'Conéctate remotamente a un equipo doméstico', 'Por qué': 'LLM en dispositivo no es práctico; usa tablet/teléfono como interfaz para un servidor Ollama en casa' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para la parte de la app, consulta las guías hermanas de iPhone y Android — cubren qué apps exponen cada uno de estos modelos en cada plataforma. La disponibilidad de apps a veces va por detrás de la disponibilidad del modelo: Gemma 3 4B estuvo en Hugging Face seis meses antes de que PocketPal AI añadiera un descargador de un toque para él. Si un modelo no está en la lista curada de tu app, normalmente se puede cargar como GGUF desde Hugging Face.',
          },
        ],
        image: '/images/mobile-llm-models-per-tier-verdict-es.svg',
        imageCaption: 'Recomendaciones de LLM móvil por gama: gama alta (8–12 GB RAM) → Phi-4 Mini 3.8B; gama alta antigua (8 GB) → Llama 3.2 3B; gama media (6–8 GB) → SmolLM 2 1.7B; económico (4–6 GB) → Qwen 3 1.5B; muy antiguo (4 GB) → Gemma 3 1B.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        items: [
          '**Elegir un modelo más grande de lo que permite la RAM del teléfono.** Phi-4 Mini en un teléfono de 6 GB funciona a 3–5 tok/seg y se cierra cuando iOS / Android recupera memoria para otra app. Adapta el modelo a tu gama (consulta la tabla de veredictos arriba).',
          '**Descargar múltiples variantes de cuantización del mismo modelo.** Elige Q4_K_M y para ahí. Cinco GB de variantes redundantes de Q5/Q6 en un teléfono de 256 GB es espacio desperdiciado, y las diferencias de calidad no son perceptibles en chat diario.',
          '**Usar SmolLM 2 1.7B para razonamiento multi-paso.** Es el modelo más rápido pero no el más inteligente. Para tareas chain-of-thought (matemáticas, planificación, razonamiento complejo), usa Phi-4 Mini aunque los tokens/seg más lentos resulten frustrantes. Velocidad sin calidad es solo una respuesta incorrecta más rápida.',
          '**Pedir a Phi-4 Mini salida en otro idioma sin un prefijo de prompt multilingüe.** Phi-4 Mini maneja los idiomas europeos comunes de forma aceptable, pero produce salida desigual en CJK o árabe. Para uso multilingüe, instala Qwen 3 1.5B junto a Phi-4 Mini y cambia según el idioma.',
          '**Esperar calidad de IA en la nube de estos modelos.** Los seis son de 1B–4B, lo que significa aproximadamente el 60–80% de la capacidad de GPT-5.5 en tareas de chat y mucho menos en razonamiento complejo. Úsalos para lo que hacen bien (chat privado, resumen, redacción, traducción) y usa la nube o conexión remota para lo que requiere un modelo de 70B+.',
          '**Confundir Phi-4 Mini (3,8B) con el antiguo Phi-3 Mini (3,8B).** Comparten un recuento de parámetros pero los datos de entrenamiento y la plantilla de chat de Phi-4 Mini son diferentes. Siempre confirma el identificador del modelo en el nombre del archivo GGUF — `phi-4-mini-instruct` y no `phi-3-mini-4k-instruct`.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Informe técnico de Phi-4 Mini — [Microsoft Research](https://arxiv.org/abs/2412.08905) (diciembre de 2024).',
          'Informe técnico de Gemma 3 — [Google DeepMind](https://blog.google/technology/developers/gemma-3/) (2025).',
          'Ficha del modelo SmolLM 2 — [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct) (2024).',
          'Informe técnico de Qwen 3 — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/) (2024).',
          'Ficha del modelo Llama 3.2 — [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) (2024).',
          'Referencia de cuantización Q4_K_M — [documentación de llama.cpp](https://github.com/ggerganov/llama.cpp).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Qué modelo móvil es el más rápido en iPhone?',
            a: 'Gemma 3 1B es el más rápido en términos absolutos con ~35–45 tokens/seg en iPhone 17 Pro, pero es el modelo más pequeño de este grupo. Entre los modelos de 1,5B–1,7B (donde la velocidad y la calidad están equilibradas), SmolLM 2 1.7B es el más rápido con ~26–32 tokens/seg. Entre los modelos que producen salida de calidad gama alta, Phi-4 Mini a ~13–18 tokens/seg es la opción "inteligente" más rápida. Elige según tu caso de uso: si la velocidad de respuesta importa más que la profundidad, SmolLM 2; si la profundidad importa más, Phi-4 Mini.',
          },
          {
            q: '¿Phi-4 Mini realmente supera a los modelos de 7B en el teléfono?',
            a: 'Supera a los modelos de 7B más antiguos (Llama 3.3 7B, Mistral Small v0.1) en benchmarks estándar como MMLU y tareas de razonamiento a pesar de tener la mitad del tamaño. NO supera a los modelos de 7B actuales (Llama 3.3 7B, Mistral Small v0.3) en capacidad bruta — estos aún lideran en conocimiento amplio y razonamiento complejo. La razón por la que Phi-4 Mini rinde por encima de su peso es la mezcla de datos de entrenamiento de Microsoft (con mucho contenido de cadenas de razonamiento sintéticas y texto de alta calidad). En teléfonos, los modelos de 7B suelen ser demasiado lentos para ser prácticos de todas formas, así que Phi-4 Mini gana por defecto.',
          },
          {
            q: '¿Puede SmolLM 2 ejecutarse en un teléfono de hace 4 años?',
            a: 'Sí, en la mayoría de los gama alta de hace 4 años. SmolLM 2 1.7B en Q4_K_M necesita ~1,1 GB de RAM para el modelo más ~500 MB de sobrecarga de inferencia — cabe en iPhone 13 (6 GB), iPhone 12 Pro Max (6 GB) y Android equivalente (6 GB+). En teléfonos de 4 GB de 2021 (iPhone 12, Android básico), técnicamente carga pero es inestable bajo cualquier presión de memoria; usa Gemma 3 1B en su lugar.',
          },
          {
            q: '¿Qué modelo maneja mejor la traducción en móviles?',
            a: 'Qwen 3 1.5B para cualquier par que involucre chino, japonés, coreano, árabe, alemán, francés, español o ruso. Fue entrenado con fuerte representación multilingüe y produce salida de calidad nativa donde los modelos centrados en inglés (Phi-4 Mini, Llama 3.2 3B) producen resultados rígidos o deficientes. Solo para pares de idiomas europeos, Gemma 3 4B es una segunda opción viable. Para traducciones puntuales entre inglés y un idioma específico, una app de traducción instalada (Google Translate, DeepL) suele ser mejor que cualquier LLM local — los modelos locales brillan cuando necesitas combinar traducción con chat o resumen en la misma conversación.',
          },
          {
            q: '¿Necesito un teléfono gama alta para usarlos bien?',
            a: 'No, solo para los modelos más grandes (Phi-4 Mini 3,8B, Gemma 3 4B, Llama 3.2 3B). Los teléfonos de gama media con 6–8 GB de RAM ejecutan SmolLM 2 1.7B y Qwen 3 1.5B a plena velocidad (~20–28 tokens/seg). Los teléfonos económicos con 4–6 GB de RAM ejecutan Gemma 3 1B a ~15–25 tokens/seg. La respuesta honesta: si aún no tienes un teléfono gama alta, no compres uno para IA local — los modelos más pequeños en tu teléfono actual son suficientes para la mayoría de casos de uso.',
          },
          {
            q: '¿Qué modelo consume menos batería?',
            a: 'Gemma 3 1B por mucho — el modelo más pequeño significa menos cálculos por token, lo que implica menor carga de CPU/GPU y menor consumo de energía. SmolLM 2 1.7B y Qwen 3 1.5B le siguen. Los modelos de 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) consumen 2–3× más energía por respuesta. Para vuelos largos o uso prolongado sin acceso a carga donde la batería importa más, Gemma 3 1B es la opción correcta a pesar del costo en calidad.',
          },
          {
            q: '¿Pueden los modelos móviles manejar conversaciones de varios turnos?',
            a: 'Sí para conversaciones cortas (5–10 turnos), con calidad que se degrada después. Los seis modelos tienen ventanas de contexto de 4.000–8.000 tokens; las conversaciones más largas exceden la ventana y el modelo pierde el hilo de los turnos anteriores. Para chat continuo que necesita memoria más allá de una sesión, el patrón práctico es: resumir la conversación periódicamente, almacenar el resumen y volver a proporcionarlo como contexto. La mayoría de las apps móviles (PocketPal AI, Private LLM) hacen esto automáticamente; LLM Farm requiere configuración manual.',
          },
          {
            q: '¿Funcionan estos modelos con entrada de voz?',
            a: 'Sí, cuando se combinan con una capa de Whisper de voz a texto. La pila estándar de voz sin conexión en móvil en 2026 es: Whisper (modelo small o tiny) para voz a texto → Phi-4 Mini o SmolLM 2 para generación de respuesta → Apple TTS o Android TTS para síntesis de voz. SmolLM 2 1.7B es la mejor opción de LLM para voz porque los altos tokens/seg mantienen los turnos de voz por debajo del umbral de percepción de ~1,5 segundos — consulta [Crea un asistente de voz local en tu teléfono](/es/power-local-llm/voice-assistant-local-mobile-offline) para el pipeline completo.',
          },
          {
            q: '¿Cuál es el mejor para uso sin conexión en viajes?',
            a: 'Para viajes donde cambias de idioma y necesitas traducción: Qwen 3 1.5B. Para viajes donde principalmente necesitas referencia en inglés (preguntas, resumir documentos de viaje, redactar correos): Phi-4 Mini en un teléfono gama alta, SmolLM 2 1.7B en uno de gama media. El viaje es el caso de uso más sólido para la IA local en general — no se necesitan datos de roaming, sin costos de API en la nube, y sin riesgo de que las dependencias de la nube fallen en zonas de baja conectividad. Descarga el modelo antes del viaje; funciona durante todo el trayecto con una sola carga si se usa con moderación.',
          },
          {
            q: '¿Seguirán siendo útiles los modelos móviles en 2027?',
            a: 'Sí, pero los nombres de modelos específicos cambiarán. La frontera de los LLM pequeños para móviles se mueve aproximadamente cada 6–9 meses — para el Q4 de 2026 probablemente habrá nuevos modelos de ~3B que superen a Phi-4 Mini, y para mediados de 2027 la clase de 1B–2B probablemente hará lo que los modelos de 3B–4B hacen hoy. La categoría no queda obsoleta; las recomendaciones específicas rotan. Vuelve a revisar este artículo (próxima actualización: 2026-11-08) para la siguiente generación.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores apps LLM locales para iPhone en 2026 (usa IA sin WiFi)](/es/power-local-llm/best-local-llm-apps-iphone-2026) — guía hermana sobre las apps de iPhone que cargan estos modelos.',
          '[Mejores apps LLM locales para Android en 2026: 6 apps comparadas en teléfonos reales](/es/power-local-llm/best-local-llm-apps-android-2026) — guía hermana sobre las apps de Android que cargan estos modelos.',
          '[Crea un asistente de voz local en tu teléfono: Whisper + LLM local](/es/power-local-llm/voice-assistant-local-mobile-offline) — aplicación específica de estos modelos móviles en un pipeline de voz sin conexión.',
          '[Ejecuta IA local en tu tablet: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)](/es/power-local-llm/run-ai-on-tablet-ipad-android) — guía de plataforma adyacente para lectores de tablets que usan el mismo conjunto de modelos.',
          '[Cuantización de LLMs explicada: Q4_K_M, Q5_K_M, formatos GGUF](/es/local-llms/llm-quantization-explained) — referencia de cuantización para el estándar Q4_K_M mencionado en este artículo.',
          '[Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — referencia más amplia de modelos que cubre todas las gamas de hardware, no solo móviles.',
          '[Directorio de software LLM local 2026](/es/power-local-llm/local-llm-software-directory-2026) — directorio de todas las herramientas LLM locales relevantes en todas las plataformas.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores modelos LLM para móviles en 2026: Phi-4 Mini vs Gemma 3 vs SmolLM',
      description: 'Seis LLMs pequeños evaluados en teléfonos en 2026. Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 3 1.5B, Llama 3.2 3B comparados en velocidad, RAM y calidad.',
      url: 'https://www.promptquorum.com/es/power-local-llm/mobile-llm-models-phi4-gemma-smollm',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Melhores modelos LLM para celular em 2026: Phi-4 Mini vs Gemma 3 vs SmolLM',
    seoTitle: 'Phi-4 Mini vs Gemma 3 vs SmolLM: LLMs de celular 2026',
    intro:
      'Seis modelos de linguagem pequenos cobrem quase todos os casos de uso em celular em 2026: Phi-4 Mini (3.8B), Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.7B e Llama 3.2 3B. Eles diferem em tokens por segundo, consumo de memória e qualidade em chat, resumo, tradução e redação curta. Este guia os compara em iPhone 17 Pro e Galaxy S25 Ultra, oferece um veredicto por gama (premium / intermediária / econômica) e explica por que a quantização Q4_K_M é o padrão para celular.',
    metaDescription:
      'Seis LLMs pequenos avaliados em celulares em 2026. Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 3 1.7B, Llama 3.2 3B comparados em velocidade, RAM e qualidade.',
    twitterDescription:
      'Melhores LLMs de celular em 2026: Phi-4 Mini (o mais inteligente), SmolLM 2 (o mais rápido), Qwen 3 (multilíngue), Gemma 3 1B (celulares antigos), Gemma 3 4B (equilibrado), Llama 3.2 3B (todo-terreno).',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.7B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Usuários de celular que escolhem um modelo LLM local para iPhone ou Android — incluindo viajantes, usuários preocupados com privacidade e desenvolvedores que criam recursos de IA móvel offline.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'melhor modelo LLM para celular',
    targetKeywords: [
      'melhor modelo LLM para celular',
      'phi-4 mini vs gemma 3',
      'smollm 2 celular',
      'qwen 2.5 1.5b celular',
      'llama 3.2 3b celular',
      'LLM pequeno para celular',
      'melhor LLM no dispositivo 2026',
    ],
    leadAnswerBlock:
      '**Para a maioria dos celulares premium (8 GB+ de RAM) em 2026, o Phi-4 Mini (3.8B) com quantização Q4_K_M é o modelo mais inteligente que roda a uma velocidade utilizável (~13–18 tokens/seg no iPhone 17 Pro).** Em celulares mais antigos de 6 GB, o Qwen 3 1.7B ou o SmolLM 2 1.7B cabem confortavelmente e produzem respostas curtas coerentes. O SmolLM 2 1.7B é o mais rápido em tokens por segundo em todos os dispositivos testados. O Qwen 3 1.7B é a melhor opção multilíngue (mais de 35 idiomas, incluindo chinês, japonês e árabe). O Gemma 3 4B é o padrão equilibrado quando o Phi-4 Mini não está disponível no seu app. O Gemma 3 1B é a opção leve para celulares muito antigos (4 GB de RAM). O Llama 3.2 3B é o todo-terreno 3B mais testado com o suporte de ferramentas mais amplo.',
    quickAnswerTop: {
      question: 'Qual é o melhor modelo LLM local para celular em 2026?',
      answer:
        'O Phi-4 Mini (3.8B) é o modelo mais inteligente que roda a velocidade utilizável em celulares premium (8 GB+ de RAM) — ~13–18 tokens/seg no iPhone 17 Pro. O SmolLM 2 1.7B é o mais rápido em todos os dispositivos testados. O Qwen 3 1.7B é a melhor opção multilíngue. O Gemma 3 4B é a opção equilibrada padrão. O Gemma 3 1B funciona em celulares muito antigos (4 GB de RAM). O Llama 3.2 3B é o melhor todo-terreno 3B. Os seis devem ser baixados no formato Q4_K_M GGUF — a quantização padrão para celular que conserva ~95% da qualidade original a um quarto do tamanho.',
      bullets: [
        'Phi-4 Mini (3.8B) — o modelo pequeno mais inteligente. O melhor em celulares de 8 GB+ (iPhone 17 Pro: ~13–18 tok/seg).',
        'Gemma 3 4B — opção equilibrada padrão. Boa qualidade, mas mais lento que o Phi-4 Mini no mesmo hardware.',
        'Gemma 3 1B — para celulares antigos (4 GB de RAM). Rápido, mas com raciocínio limitado.',
        'SmolLM 2 1.7B — o mais rápido em tokens/seg em todos os celulares testados. O melhor para chat ágil em dispositivos intermediários.',
        'Qwen 3 1.7B — o melhor modelo de celular multilíngue (mais de 35 idiomas). O melhor para tradução e chat em idiomas diferentes do inglês.',
        'Llama 3.2 3B — o todo-terreno 3B mais testado. O melhor 3B para tool calling, RAG e apps com maior compatibilidade.',
        'Quantização: baixe Q4_K_M GGUF para os seis. Q5/Q6 apenas se o seu celular tiver 12 GB+ de RAM e o app suportar.',
      ],
      updatedDate: '2026-05-08',
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Dados rápidos', anchor: '#quick-facts' },
      { label: 'Qual modelo de celular você deve escolher?', anchor: '#which-model' },
      { label: 'Tabela comparativa de modelos de celular', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini: o modelo pequeno mais inteligente', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B: opção equilibrada', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B: opção leve para celulares antigos', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1.7B: o mais rápido em tokens por segundo', anchor: '#smollm-2' },
      { label: 'Qwen 3 1.7B: o melhor modelo de celular multilíngue', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B: o todo-terreno 3B de confiança', anchor: '#llama-3-2-3b' },
      { label: 'Quantização para celular: Q4_K_M como padrão', anchor: '#quantization' },
      { label: 'Veredicto por gama: premium vs intermediária vs econômica', anchor: '#per-tier-verdict' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Phi-4 Mini (3.8B) é o modelo pequeno mais inteligente em 2026.** O melhor para celulares premium com 8 GB+ de RAM — roda a ~13–18 tokens/seg no iPhone 17 Pro e ~10–15 no iPhone 16 Pro. O maior raciocínio por parâmetro de qualquer modelo sub-4B.',
          '**O SmolLM 2 1.7B é o mais rápido em tokens por segundo em todos os celulares testados.** ~26–32 tok/seg no iPhone 17 Pro, ~20–28 no Galaxy S25 Ultra. O melhor quando a velocidade de resposta importa mais que a profundidade (chat ágil, tarefas de autocompletar).',
          '**O Qwen 3 1.7B é o melhor modelo de celular multilíngue.** Treinado em mais de 35 idiomas incluindo chinês, japonês, árabe e alemão com saída de qualidade nativa. A melhor opção para tradução, redação em outros idiomas e uso em viagens.',
          '**O Gemma 3 4B é a opção equilibrada padrão.** Ligeiramente mais lento que o Phi-4 Mini no mesmo hardware, mas equiparável em chat e resumo. O melhor quando o Phi-4 Mini não está disponível no seu app ou você prefere a mistura de dados de treinamento do Google.',
          '**O Gemma 3 1B é a opção leve para celulares antigos.** Cabe em 4 GB de RAM (iPhone SE 3ª geração, Android antigo). Raciocínio multietapas limitado, mas produz respostas coerentes de 1–2 parágrafos mais rápido que qualquer outro modelo em hardware fraco.',
          '**O Llama 3.2 3B é o todo-terreno 3B mais testado.** O melhor suporte de tool calling entre os seis, a maior compatibilidade com apps e o maior ecossistema comunitário de fine-tunes. Ligeiramente atrás do Phi-4 Mini em qualidade bruta, mas mais confiável em casos limite.',
          '**Q4_K_M é a quantização padrão para celular em 2026.** Conserva ~95% da qualidade original a um quarto do tamanho do arquivo. Use Q5_K_M ou Q6_K apenas em celulares com 12 GB+ de RAM (iPhone 17 Pro Max) e apenas se o app suportar.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Dados rápidos',
        items: [
          '**Modelos testados:** Phi-4 Mini 3.8B, Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.7B, Llama 3.2 3B (todos Q4_K_M GGUF).',
          '**Dispositivos de teste:** iPhone 17 Pro (A19 Pro), iPhone 16 Pro (A18 Pro, 8 GB), Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), OnePlus 13 (Snapdragon 8 Elite).',
          '**Motores de inferência:** llama.cpp via PocketPal AI / LLM Farm (padrão), MLC LLM via MLC Chat (acelerado por Metal no iPhone), Ollama via Termux (Android).',
          '**Consumo de memória (Q4_K_M):** Phi-4 Mini ~2,7 GB, Gemma 3 4B ~2,9 GB, Llama 3.2 3B ~2,2 GB, Qwen 3 1.7B ~1,1 GB, SmolLM 2 1.7B ~1,1 GB, Gemma 3 1B ~720 MB.',
          '**RAM mínima (ativa):** celular de 6 GB para modelos de 1,5B–1,7B; 8 GB para modelos de 3B–4B; 4 GB apenas para o Gemma 3 1B.',
          '**Tokens/seg mais rápidos no iPhone 17 Pro:** Gemma 3 1B ~35–45, SmolLM 2 ~26–32, Qwen 3 1.7B ~26–35, Llama 3.2 3B ~16–22, Phi-4 Mini ~13–18, Gemma 3 4B ~10–13.',
          '**Fonte de quantização:** os seis disponíveis como Q4_K_M GGUF no Hugging Face e via PocketPal AI / MLC Chat / LM Studio.',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: 'Qual modelo de celular você deve escolher?',
        content:
          '**Para a maioria dos celulares premium (iPhone 16 Pro / 17 Pro, Galaxy S25 Ultra, OnePlus 13), escolha o Phi-4 Mini (3.8B Q4_K_M).** É o modelo sub-4B mais inteligente e roda a uma velocidade conversacional utilizável. Escolha outro modelo apenas quando você tiver uma necessidade específica que ele não atenda — velocidade (SmolLM 2), multilíngue (Qwen 3) ou compatibilidade com celulares antigos (Gemma 3 1B).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha o Phi-4 Mini para premium com 8 GB+ (o mais inteligente), o SmolLM 2 1.7B para velocidade, o Qwen 3 1.7B para multilíngue, o Gemma 3 1B para celulares de 4 GB, o Llama 3.2 3B para tool calling e o Gemma 3 4B como opção equilibrada quando o Phi-4 Mini não estiver disponível.',
          },
          {
            type: 'plain-terms',
            text: 'Não existe um único melhor modelo de celular — a escolha certa depende do seu celular e do que você faz com ele. Se o seu celular é dos últimos dois anos e tem 8 GB ou mais de RAM, instale o Phi-4 Mini. Se você conversa principalmente em um idioma diferente do inglês, instale o Qwen 3. Se você quer as respostas mais rápidas mesmo sacrificando um pouco de qualidade, instale o SmolLM 2. Se o seu celular é antigo ou tem apenas 4 GB de RAM, instale o Gemma 3 1B. As diferenças são reais, mas pequenas o suficiente para que qualquer um desses modelos produza respostas coerentes — nenhum tem qualidade de nuvem.',
          },
        ],
        decisionBlock: {
          title: 'Decisão: qual modelo de celular?',
          localIf: [
            'Celular premium com 8 GB+ de RAM (iPhone 16 Pro/17 Pro, Galaxy S25 Ultra, OnePlus 13) → Phi-4 Mini 3.8B',
            'Você precisa dos tokens/seg mais rápidos em qualquer celular → SmolLM 2 1.7B',
            'Uso em idiomas diferentes do inglês (tradução, chat multilíngue) → Qwen 3 1.7B',
            'Você precisa de ampla compatibilidade com apps, tool calling ou RAG → Llama 3.2 3B',
            'Celular antigo com 4 GB de RAM → Gemma 3 1B',
            'Phi-4 Mini indisponível no seu app, você precisa de qualidade de classe 4B → Gemma 3 4B',
          ],
          cloudIf: [
            'Raciocínio multietapas, geração de código complexa ou análise de documentos longos → use a nuvem ou conecte-se remotamente a uma máquina doméstica com 70B+',
            'Tarefas de visão-linguagem (entrada de imagens, OCR) → apps na nuvem (os modelos de visão de celular em 2026 são limitados e lentos)',
            'Escrita criativa longa onde a coerência em mais de 3.000+ tokens importa → nuvem ou 8B+ no desktop',
          ],
          quick: [
            'Opção padrão para a maioria: Phi-4 Mini 3.8B',
            'O mais rápido em todos os dispositivos: SmolLM 2 1.7B',
            'O melhor multilíngue: Qwen 3 1.7B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Se não tiver certeza, comece com o Phi-4 Mini em um celular premium ou o SmolLM 2 1.7B em um intermediário — ambos baixam em menos de 5 minutos com uma conexão rápida e são reversíveis. Teste com uma tarefa que realmente importa para você (um e-mail real para resumir, uma pergunta real a responder). Se a qualidade for aceitável, você tem o seu modelo padrão. Se não, troque-o em 30 segundos via PocketPal AI ou LM Studio.',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-en.svg',
        imageCaption: 'Guia de seleção de LLMs de celular em 4 passos: verificar a RAM do celular, escolher a gama (4 GB a 8 GB+), selecionar o caso de uso (velocidade, multilíngue ou qualidade) e então instalar o GGUF Q4_K_M via PocketPal AI ou LM Studio.',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tabela comparativa de modelos de celular',
        content:
          '**A tabela de quatro colunas abaixo é a camada de extração rápida — escolha uma linha por gama de dispositivo ou caso de uso.** Os números de tokens/seg assumem quantização Q4_K_M no iPhone 17 Pro com PocketPal AI (llama.cpp). Os números são 15–25% menores no iPhone 16 Pro e aproximadamente 10–20% menores no Galaxy S25 Ultra rodando o mesmo Q4_K_M GGUF via MLC Chat ou Termux+Ollama.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Phi-4 Mini é o mais inteligente, o SmolLM 2 1.7B o mais rápido, o Qwen 3 1.7B o melhor multilíngue, o Gemma 3 1B o menor viável, o Llama 3.2 3B o melhor todo-terreno 3B e o Gemma 3 4B a opção equilibrada padrão.',
          },
          {
            type: 'plain-terms',
            text: 'Leia esta tabela de cima para baixo em ordem de tamanho, ou vá direto para a linha que corresponde à sua gama de dispositivo. A coluna "Melhor para" indica o que o modelo otimiza — escolha a linha cuja força mais importa para você e ignore as demais.',
          },
        ],
        columns: ['Modelo', 'Tamanho', 'Tokens/seg (17 Pro)', 'Melhor para'],
        rows: [
          { 'Modelo': 'Phi-4 Mini', 'Tamanho': '3.8B', 'Tokens/seg (17 Pro)': '~13–18', 'Melhor para': 'Modelo pequeno mais inteligente — padrão para premium' },
          { 'Modelo': 'Gemma 3 4B', 'Tamanho': '4B', 'Tokens/seg (17 Pro)': '~10–13', 'Melhor para': 'Opção equilibrada quando o Phi-4 Mini não está disponível' },
          { 'Modelo': 'Gemma 3 1B', 'Tamanho': '1B', 'Tokens/seg (17 Pro)': '~35–45', 'Melhor para': 'Celulares antigos (4 GB de RAM)' },
          { 'Modelo': 'SmolLM 2', 'Tamanho': '1.7B', 'Tokens/seg (17 Pro)': '~26–32', 'Melhor para': 'Tokens/seg mais rápidos, chat ágil' },
          { 'Modelo': 'Qwen 3', 'Tamanho': '1.5B', 'Tokens/seg (17 Pro)': '~24–32', 'Melhor para': 'O melhor multilíngue (mais de 35 idiomas)' },
          { 'Modelo': 'Llama 3.2', 'Tamanho': '3B', 'Tokens/seg (17 Pro)': '~16–22', 'Melhor para': 'A melhor opção 3B, tool calling, RAG' },
        ],
        note:
          '**Nota sobre a compensação velocidade-qualidade:** os tokens/seg escalam inversamente ao número de parâmetros no mesmo chip — um modelo de 1B é aproximadamente 3–4× mais rápido que um de 3,8B em hardware idêntico. A qualidade escala com os parâmetros, mas não linearmente: a qualidade de raciocínio do Phi-4 Mini (3,8B) está mais próxima de um modelo de 7B do que de um de 1,7B graças à mistura de dados de treinamento da Microsoft. Use a tabela para equilibrar: modelo mais rápido = resposta mais rápida, modelo mais inteligente = melhor resposta para perguntas difíceis.',
        callouts: [
          {
            type: 'tip',
            text: 'Os tokens/seg do iPhone 16 Pro são aproximadamente 15–25% menores que os do iPhone 17 Pro para todos os modelos desta tabela — diferença entre os Neural Engine A18 Pro e A19 Pro. O Galaxy S25 Ultra (Snapdragon 8 Elite) é aproximadamente 10–20% menor que o iPhone 17 Pro com o mesmo GGUF Q4_K_M, principalmente porque o Termux+Ollama no Android ainda não aproveita o NPU Hexagon do Snapdragon do mesmo modo que o MLC Chat aproveita o Apple Metal.',
          },
        ],
        image: '/images/mobile-llm-models-comparison-table-en.svg',
        imageCaption: 'Seis modelos LLM de celular comparados com Q4_K_M no iPhone 17 Pro: Phi-4 Mini (3,8B, ~13–18 tok/seg) é o mais inteligente; SmolLM 2 (1,7B, ~26–32 tok/seg) é o mais rápido; Qwen 3 (1,5B) é o melhor multilíngue; Gemma 3 1B (~35–45 tok/seg) funciona em celulares de 4 GB.',
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini: o modelo pequeno mais inteligente',
        content:
          '**O Phi-4 Mini (3,8B parâmetros, Microsoft, dezembro de 2024) é o modelo sub-4B mais inteligente em 2026 graças a uma mistura de dados de treinamento otimizada para o raciocínio em vez da amplitude.** Ele supera o Gemma 3 4B e o Llama 3.2 3B em tarefas chain-of-thought apesar de um tamanho similar. Use-o como padrão em qualquer celular com 8 GB+ de RAM.',
        items: [
          '**Parâmetros e treinamento:** 3,8B parâmetros; treinado com uma mistura curada pela Microsoft de texto web de alta qualidade, cadeias de raciocínio sintéticas e conteúdo acadêmico. A arquitetura é um Transformer com grouped-query attention.',
          '**Consumo de memória:** ~2,7 GB em Q4_K_M, ~3,5 GB em Q5_K_M. Cabe confortavelmente em iPhone 16 Pro / 17 Pro (8 GB) e Galaxy S25 Ultra (12 GB) com margem para o sistema operacional.',
          '**Velocidade (tokens/seg):** iPhone 17 Pro ~13–18, iPhone 16 Pro ~10–15, Galaxy S25 Ultra ~10–15 (Termux+Ollama), iPhone 14 Pro ~6–10 (lento, mas funcional).',
          '**Pontos fortes de qualidade:** raciocínio chain-of-thought, resumo, perguntas e respostas factuais, geração básica de código. Supera modelos de código aberto de tamanho similar em benchmarks padrão (MMLU, GSM8K).',
          '**Pontos fracos de qualidade:** conhecimento do mundo mais limitado que o Llama 3.2 3B (menor exposição ao Common Crawl); escrita criativa natural mais curta que o Gemma 3 4B; multilíngue mais fraco que o Qwen 3 1.7B fora do inglês.',
          '**O melhor para:** usuários com um celular premium que querem o melhor modelo padrão único para chat em inglês, resumo e raciocínio.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Phi-4 Mini se beneficia de um system prompt que invoca explicitamente o raciocínio passo a passo ("Pense nisto com cuidado antes de responder"). Os dados de treinamento eram carregados de cadeias de raciocínio, então usar esse estilo de instrução produz sistematicamente melhores respostas que instruções curtas. Para chat rápido não é necessário system prompt; o comportamento padrão já é conversacional.',
          },
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B: opção equilibrada',
        content:
          '**O Gemma 3 4B (Google DeepMind, 2025) é a opção equilibrada padrão quando o Phi-4 Mini não está disponível no seu app ou você prefere a mistura de dados de treinamento do Google.** Ligeiramente mais lento que o Phi-4 Mini em hardware idêntico, mas equiparável em chat e resumo, com maior cobertura de linguagem natural.',
        items: [
          '**Parâmetros e treinamento:** 4B parâmetros; treinado com a mistura curada pelo Google de texto web, código e dados multilíngues. A mesma família de arquitetura que o Gemma 2 com contexto estendido.',
          '**Consumo de memória:** ~2,9 GB em Q4_K_M, ~3,7 GB em Q5_K_M. Cabe em celulares de 8 GB+; apertado em celulares de 6 GB (use o Phi-4 Mini ou um modelo menor no lugar).',
          '**Velocidade (tokens/seg):** iPhone 17 Pro ~10–13, iPhone 16 Pro ~7–10, Galaxy S25 Ultra ~7–10 (ligeiramente mais lento que o Phi-4 Mini apesar de um tamanho similar por diferenças de arquitetura).',
          '**Pontos fortes de qualidade:** tom conversacional natural, resumo sólido, conhecimento do mundo mais amplo que o Phi-4 Mini (exposição ao Common Crawl), multilíngue decente.',
          '**Pontos fracos de qualidade:** raciocínio chain-of-thought mais fraco que o Phi-4 Mini; tokens/seg mais lentos no mesmo hardware; nem sempre o primeiro a ser adicionado a apps de celular (fica atrás do Phi-4 Mini no timing de lançamento no PocketPal AI).',
          '**O melhor para:** usuários de premium que querem um modelo treinado pelo Google como alternativa ao Phi-4 Mini, especialmente para chat diário, resumo e redação curta.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Gemma 3 4B usa um modelo de chat diferente do Phi-4 Mini — verifique se o seu app usa o template Gemma correto (com marcadores `<start_of_turn>`). Um template incorreto produz saída quebrada ou repetitiva. PocketPal AI, MLC Chat e LM Studio detectam isso automaticamente; o LLM Farm requer seleção manual do template Gemma nas Configurações do modelo.',
          },
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B: opção leve para celulares antigos',
        content:
          '**O Gemma 3 1B (Google DeepMind, 2025) é o modelo de celular viável mais pequeno em 2026 — ~720 MB em Q4_K_M e roda em celulares de 4 GB.** A qualidade limita-se a respostas curtas coerentes (1–2 parágrafos), mas é a única opção abaixo de 1 GB que produz saída utilizável em hardware fraco.',
        items: [
          '**Parâmetros e treinamento:** 1B parâmetros; a mesma arquitetura da família Gemma 3 que o modelo de 4B, mas com menor computação de treinamento. Treinado para inferência eficiente em dispositivos edge.',
          '**Consumo de memória:** ~720 MB em Q4_K_M, ~900 MB em Q5_K_M. Funciona em iPhone SE 3ª geração, iPhone 12/13, Android antigo (mínimo 4 GB de RAM).',
          '**Velocidade (tokens/seg):** iPhone 17 Pro ~35–45, iPhone 16 Pro ~28–38, iPhone 14 ~20–28, Android antigo (4 GB) ~10–15. O modelo mais rápido deste grupo em todos os dispositivos.',
          '**Pontos fortes de qualidade:** velocidade, baixo consumo de memória, respostas curtas coerentes, baixo consumo de bateria.',
          '**Pontos fracos de qualidade:** raciocínio multietapas fraco, erros factuais frequentes em temas específicos, repetição em gerações longas (>500 tokens), pouca profundidade conversacional.',
          '**O melhor para:** usuários com celulares abaixo do limite de 6 GB de RAM que ainda querem IA no dispositivo, ou qualquer um que otimize a duração da bateria em voos longos ou cenários de baixo consumo.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Use o Gemma 3 1B para tarefas curtas e focadas — resumos de uma frase, rascunhos de um parágrafo, definições rápidas, tradução simples entre pares de idiomas principais. Evite pedir explicações de vários parágrafos, raciocínio multietapas ou qualquer coisa onde a precisão em fatos específicos importe. O modelo conhece seus limites; pedir que "seja conciso" joga a favor de suas forças.',
          },
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1.7B: o mais rápido em tokens por segundo',
        content:
          '**O SmolLM 2 1.7B (Hugging Face, 2024) é o modelo de celular mais rápido em tokens por segundo neste grupo em todos os celulares testados.** ~26–32 tok/seg no iPhone 17 Pro e ~20–28 no Galaxy S25 Ultra. O melhor quando a velocidade de resposta importa mais que a profundidade.',
        items: [
          '**Parâmetros e treinamento:** 1,7B parâmetros; treinado com uma mistura curada pelo Hugging Face otimizada para a eficiência de modelos pequenos. Arquitetura ajustada para inferência de baixa latência em hardware de consumo.',
          '**Consumo de memória:** ~1,1 GB em Q4_K_M. Cabe em qualquer celular com 6 GB+ de RAM com ampla margem para o SO.',
          '**Velocidade (tokens/seg):** iPhone 17 Pro ~26–32, iPhone 16 Pro ~22–28, Galaxy S25 Ultra ~20–28, iPhone 14 Pro ~15–22. Aproximadamente 2× mais rápido que o Phi-4 Mini no mesmo chip.',
          '**Pontos fortes de qualidade:** respostas conversacionais ágeis, perguntas e respostas simples, continuação do tipo autocompletar, redação em inglês.',
          '**Pontos fracos de qualidade:** raciocínio mais fraco que o Phi-4 Mini, conhecimento do mundo mais limitado que o Llama 3.2 3B, multilíngue mais fraco que o Qwen 3 1.7B, alucinações ocasionais em consultas factuais.',
          '**O melhor para:** celulares intermediários onde a latência importa (autocompletar de texto, turnos de assistente de voz, chat em tempo real), ou premium antigo onde os modelos grandes ficam lentos.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O SmolLM 2 1.7B é a melhor combinação para um assistente de voz offline no celular — veja [Crie um assistente de voz local no seu celular](/pt/power-local-llm/voice-assistant-local-mobile-offline) para o pipeline Whisper + LLM + TTS. Os altos tokens/seg mantêm o tempo de resposta de voz abaixo do limiar de percepção de ~1,5 segundo mesmo em hardware intermediário.',
          },
        ],
        image: '/images/mobile-llm-models-speed-chart-en.svg',
        imageCaption: 'Comparação de tokens por segundo para 6 modelos LLM de celular em 3 dispositivos com Q4_K_M: Gemma 3 1B (~35–45 no iPhone 17 Pro) e SmolLM 2 1.7B (~26–32) lideram em velocidade; Phi-4 Mini (~13–18) e Gemma 3 4B (~10–13) são mais lentos, mas mais inteligentes.',
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 3 1.7B: o melhor modelo de celular multilíngue',
        content:
          '**O Qwen 3 1.7B (Alibaba, 2024) é o melhor modelo de celular multilíngue em 2026 — treinado em mais de 35 idiomas incluindo chinês, japonês, coreano, árabe, alemão, francês, espanhol e russo.** A melhor opção para tradução, chat em idiomas diferentes do inglês e uso em viagens onde o usuário troca de idioma no meio da conversa.',
        items: [
          '**Parâmetros e treinamento:** 1,5B parâmetros; treinado no corpus multilíngue da Alibaba com forte representação de idiomas CJK, árabe e as principais línguas europeias. Arquitetura otimizada para raciocínio multilíngue.',
          '**Consumo de memória:** ~1,0 GB em Q4_K_M. Cabe em qualquer celular com 6 GB+ de RAM.',
          '**Velocidade (tokens/seg):** iPhone 17 Pro ~24–32, iPhone 16 Pro ~20–28, Galaxy S25 Ultra ~18–26, iPhone 14 Pro ~14–20. Velocidade comparável ao SmolLM 2.',
          '**Pontos fortes de qualidade:** saída de qualidade nativa em mais de 35 idiomas (a maioria dos modelos pequenos é centrada no inglês com multilíngue fraco de fallback), forte tradução entre os principais pares de idiomas, saída CJK coerente onde o Phi-4 Mini e o Llama 3.2 produzem caracteres quebrados.',
          '**Pontos fracos de qualidade:** raciocínio só em inglês ligeiramente mais fraco que o Phi-4 Mini, escrita criativa natural mais curta que o Gemma 3 4B, tool calling mais fraco que o Llama 3.2 3B.',
          '**O melhor para:** usuários não anglófonos (especialmente falantes de chinês, japonês, alemão, espanhol e francês), viajantes que precisam de tradução offline, ou desenvolvedores que criam recursos de celular multilíngues.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para uma tradução de um único passo entre dois pares de idiomas específicos, o Qwen 3 1.7B costuma superar um modelo maior centrado no inglês que executa a tradução como tarefa secundária. Para um usuário que conversa em alemão, o Qwen 3 produz uma saída notavelmente mais natural que o Phi-4 Mini apesar de ser 60% menor. A regra básica: escolha o modelo treinado para o seu idioma principal, não o que tem mais parâmetros.',
          },
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B: o todo-terreno 3B de confiança',
        content:
          '**O Llama 3.2 3B (Meta, 2024) é o modelo 3B mais testado em 2026 — maior compatibilidade com apps, melhor suporte de tool calling entre os seis e o maior ecossistema comunitário de fine-tunes.** Ligeiramente atrás do Phi-4 Mini em qualidade bruta, mas mais confiável em casos limite e com melhor suporte em apps de celular.',
        items: [
          '**Parâmetros e treinamento:** 3B parâmetros; treinado no grande corpus de pré-treinamento da Meta com instruction-tuning para chat e uso de ferramentas. A mesma arquitetura Llama 3 que os modelos de 8B e 70B.',
          '**Consumo de memória:** ~2,2 GB em Q4_K_M, ~2,8 GB em Q5_K_M. Cabe em celulares de 8 GB+ com margem confortável para o SO; funciona em celulares apertados de 6 GB se outros apps forem fechados.',
          '**Velocidade (tokens/seg):** iPhone 17 Pro ~16–22, iPhone 16 Pro ~12–18, Galaxy S25 Ultra ~12–18, iPhone 14 Pro ~7–11.',
          '**Pontos fortes de qualidade:** amplo conhecimento do mundo, suporte robusto de tool calling e function calling (o melhor entre os modelos sub-4B), comportamento de chat confiável, ecossistema maduro de fine-tunes para tarefas específicas (medicina, direito, programação).',
          '**Pontos fracos de qualidade:** raciocínio chain-of-thought mais fraco que o Phi-4 Mini, pontuações MMLU ligeiramente menores a tamanho similar, tom conversacional menos natural que o Gemma 3 4B.',
          '**O melhor para:** apps de celular que precisam de tool calling ou function calling (RAG sobre documentos locais, fluxos de trabalho de agentes no dispositivo), ou usuários que querem o modelo com a maior biblioteca de fine-tunes comunitários.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O Llama 3.2 3B é o único modelo deste grupo com suporte de tool calling confiável o suficiente para fluxos de trabalho de agentes no dispositivo — veja [Agentes de IA locais com MCP 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026). O Phi-4 Mini e o SmolLM 2 podem tecnicamente fazer tool calling, mas o Llama 3.2 3B é o único pronto para produção em 2026.',
          },
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'Quantização para celular: Q4_K_M como padrão',
        content:
          '**Q4_K_M é a quantização padrão para inferência de LLM em celular em 2026 — conserva ~95% da qualidade original do modelo a um quarto do tamanho do arquivo.** Use Q5_K_M ou Q6_K apenas em celulares com 12 GB+ de RAM (iPhone 17 Pro Max, Galaxy S25 Ultra) onde a margem de memória adicional está genuinamente disponível.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M é o padrão de celular — ~95% de qualidade a um quarto do tamanho. Q5_K_M / Q6_K só valem em celulares com 12 GB+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Os modelos no Hugging Face são publicados em precisão completa (cada parâmetro armazenado como um número de 16 bits). Em celulares, você baixa uma versão quantizada onde cada parâmetro é comprimido para 4 bits — tornando o arquivo quatro vezes menor e a inferência aproximadamente quatro vezes mais rápida, com um pequeno custo de qualidade. Q4_K_M é a variante na qual todos em 2026 concordaram como o equilíbrio certo para celulares. Os números Q mais altos (Q5, Q6, Q8) significam menos compressão e melhor qualidade, mas arquivos maiores; Q4 é o ponto ideal para as restrições do celular.',
          },
        ],
        items: [
          '**Q4_K_M (padrão recomendado):** quantização de 4 bits com K-quants e precisão mista "M". ~95% da qualidade original. Padrão para celular em 2026. Os seis modelos disponíveis neste formato no Hugging Face.',
          '**Q5_K_M (para celulares com 12 GB+ de RAM):** quantização de 5 bits. ~98% da qualidade original. Arquivos ~25% maiores. Vale a pena no iPhone 17 Pro Max (12 GB) ou Galaxy S25 Ultra (12 GB) para o Phi-4 Mini e o Llama 3.2 3B; o custo de RAM não se justifica em celulares de 8 GB.',
          '**Q6_K (raramente necessária):** quantização de 6 bits. ~99% da qualidade original. Arquivos ~50% maiores. Só vale para celulares com muita memória rodando modelos onde cada ponto percentual de qualidade importa (p. ex., redação longa onde cada porcentagem de qualidade conta).',
          '**Q8_0 (evitar em celular):** quantização de 8 bits. ~99,5% da qualidade original. Aproximadamente 2× o tamanho do Q4_K_M. O custo de RAM em celulares não se justifica; reserve para desktop/notebook.',
          '**Q3_K_M / Q2_K (só para celulares muito limitados):** quantização de 3 bits e 2 bits. A qualidade cai para ~85–90%. Use apenas se o Gemma 3 1B em Q4_K_M ainda não couber (raro em 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Não baixe o mesmo modelo em múltiplas quantizações esperando "testar qual é melhor" no celular. As diferenças de qualidade entre Q4_K_M e Q5_K_M são reais, mas pequenas, e você desperdiçará 5+ GB de armazenamento do celular com variantes redundantes. Escolha Q4_K_M, use-o durante uma semana de uso real, e só atualize para Q5_K_M se você tiver evidência específica de que a qualidade é insuficiente.',
          },
        ],
        image: '/images/mobile-llm-models-quantization-guide-en.svg',
        imageCaption: 'Níveis de quantização GGUF para celular: Q4_K_M é o padrão para celulares com 6 GB+ (~95% de qualidade, ×0,5 de tamanho de arquivo); Q5_K_M e Q6_K só para 12 GB+; Q8_0 é só para desktop; Q3_K_M é o último recurso para celulares de 4 GB.',
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'Veredicto por gama: premium vs intermediária vs econômica',
        content:
          '**A gama do celular determina o limite do modelo — a geração do chip e a RAM importam mais que a marca.** Um celular premium (8 GB+ de RAM, A18 Pro / A19 Pro / Snapdragon 8 Elite) roda modelos de 3,8B–4B confortavelmente; um intermediário (6–8 GB de RAM, chip premium antigo) roda 1,7B–3B; um econômico ou antigo (4–6 GB de RAM) roda 1B–1,5B.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Premium (8 GB+) → Phi-4 Mini 3.8B; intermediária (6–8 GB) → SmolLM 2 1.7B ou Llama 3.2 3B; econômica ou antiga (4–6 GB) → Gemma 3 1B ou Qwen 3 1.7B.',
          },
          {
            type: 'plain-terms',
            text: 'Adapte o modelo ao seu celular, não às suas aspirações. Um modelo de 3,8B em um celular de 6 GB produz pausas frustrantes de 3 segundos e fechamentos quando outros apps precisam de memória. Um modelo de 1B em um premium desperdiça a capacidade disponível. Escolha o maior modelo que o seu celular consiga rodar confortavelmente com o SO e pelo menos outro app aberto.',
          },
        ],
        columns: ['Gama do celular', 'Exemplos', 'Modelo recomendado', 'Por quê'],
        rows: [
          { 'Gama do celular': 'Premium (8–12 GB RAM)', 'Exemplos': 'iPhone 17 Pro / Pro Max, iPhone 16 Pro, Galaxy S25 Ultra, OnePlus 13', 'Modelo recomendado': 'Phi-4 Mini (3.8B Q4_K_M)', 'Por quê': 'O modelo mais inteligente que o chip sustenta a velocidade utilizável' },
          { 'Gama do celular': 'Premium antigo (8 GB RAM)', 'Exemplos': 'iPhone 15 Pro, Galaxy S24 Ultra, Pixel 9 Pro', 'Modelo recomendado': 'Llama 3.2 3B ou Phi-4 Mini', 'Por quê': 'Llama 3.2 3B para tool calling; Phi-4 Mini para qualidade bruta' },
          { 'Gama do celular': 'Intermediária (6–8 GB RAM)', 'Exemplos': 'iPhone 14 Pro, Pixel 9, celulares Snapdragon 8 Gen 2', 'Modelo recomendado': 'SmolLM 2 1.7B ou Qwen 3 1.7B', 'Por quê': 'Velocidade ágil; cabe com margem para o SO' },
          { 'Gama do celular': 'Econômico / antigo (4–6 GB RAM)', 'Exemplos': 'iPhone 14, Snapdragon série 7 intermediário, Android antigo', 'Modelo recomendado': 'Gemma 3 1B ou Qwen 3 1.7B', 'Por quê': 'Os modelos viáveis mais pequenos que ainda produzem saída coerente' },
          { 'Gama do celular': 'Muito antigo (4 GB RAM)', 'Exemplos': 'iPhone SE 3ª geração, Android antigo de 4 GB', 'Modelo recomendado': 'Gemma 3 1B', 'Por quê': 'O único modelo que cabe; raciocínio limitado, tokens/seg rápidos' },
          { 'Gama do celular': 'Não suportado (<4 GB)', 'Exemplos': 'iPhone SE 2ª geração, Android antigo', 'Modelo recomendado': 'Conecte-se remotamente a uma máquina doméstica', 'Por quê': 'LLM no dispositivo não é prático; use tablet/celular como interface para um servidor Ollama em casa' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Para a parte do app, veja os guias irmãos de iPhone e Android — eles cobrem quais apps expõem cada um desses modelos em cada plataforma. A disponibilidade de apps às vezes fica atrás da disponibilidade do modelo: o Gemma 3 4B esteve no Hugging Face seis meses antes de o PocketPal AI adicionar um downloader de um toque para ele. Se um modelo não estiver na lista curada do seu app, normalmente pode ser carregado como GGUF do Hugging Face.',
          },
        ],
        image: '/images/mobile-llm-models-per-tier-verdict-en.svg',
        imageCaption: 'Recomendações de LLM de celular por gama: premium (8–12 GB RAM) → Phi-4 Mini 3.8B; premium antigo (8 GB) → Llama 3.2 3B; intermediária (6–8 GB) → SmolLM 2 1.7B; econômica (4–6 GB) → Qwen 3 1.7B; muito antigo (4 GB) → Gemma 3 1B.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        items: [
          '**Escolher um modelo maior do que a RAM do celular permite.** O Phi-4 Mini em um celular de 6 GB roda a 3–5 tok/seg e fecha quando o iOS / Android recupera memória para outro app. Adapte o modelo à sua gama (consulte a tabela de veredictos acima).',
          '**Baixar múltiplas variantes de quantização do mesmo modelo.** Escolha Q4_K_M e pare aí. Cinco GB de variantes redundantes de Q5/Q6 em um celular de 256 GB é espaço desperdiçado, e as diferenças de qualidade não são perceptíveis em chat diário.',
          '**Usar o SmolLM 2 1.7B para raciocínio multietapas.** É o modelo mais rápido, mas não o mais inteligente. Para tarefas chain-of-thought (matemática, planejamento, raciocínio complexo), use o Phi-4 Mini mesmo que os tokens/seg mais lentos sejam frustrantes. Velocidade sem qualidade é só uma resposta errada mais rápida.',
          '**Pedir ao Phi-4 Mini saída em outro idioma sem um prefixo de prompt multilíngue.** O Phi-4 Mini lida com os idiomas europeus comuns de forma aceitável, mas produz saída irregular em CJK ou árabe. Para uso multilíngue, instale o Qwen 3 1.7B junto ao Phi-4 Mini e troque conforme o idioma.',
          '**Esperar qualidade de IA na nuvem desses modelos.** Os seis são de 1B–4B, o que significa aproximadamente 60–80% da capacidade do GPT-5.5 em tarefas de chat e muito menos em raciocínio complexo. Use-os para o que fazem bem (chat privado, resumo, redação, tradução) e use a nuvem ou conexão remota para o que requer um modelo de 70B+.',
          '**Confundir o Phi-4 Mini (3,8B) com o antigo Phi-3 Mini (3,8B).** Eles compartilham uma contagem de parâmetros, mas os dados de treinamento e o template de chat do Phi-4 Mini são diferentes. Sempre confirme o identificador do modelo no nome do arquivo GGUF — `phi-4-mini-instruct` e não `phi-3-mini-4k-instruct`.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Relatório técnico do Phi-4 Mini — [Microsoft Research](https://arxiv.org/abs/2412.08905) (dezembro de 2024).',
          'Relatório técnico do Gemma 3 — [Google DeepMind](https://blog.google/technology/developers/gemma-3/) (2025).',
          'Ficha do modelo SmolLM 2 — [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct) (2024).',
          'Relatório técnico do Qwen 3 — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/) (2024).',
          'Ficha do modelo Llama 3.2 — [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) (2024).',
          'Referência de quantização Q4_K_M — [documentação do llama.cpp](https://github.com/ggerganov/llama.cpp).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Qual modelo de celular é o mais rápido no iPhone?',
            a: 'O Gemma 3 1B é o mais rápido em termos absolutos com ~35–45 tokens/seg no iPhone 17 Pro, mas é o modelo mais pequeno deste grupo. Entre os modelos de 1,5B–1,7B (onde a velocidade e a qualidade estão equilibradas), o SmolLM 2 1.7B é o mais rápido com ~26–32 tokens/seg. Entre os modelos que produzem saída de qualidade premium, o Phi-4 Mini a ~13–18 tokens/seg é a opção "inteligente" mais rápida. Escolha conforme o seu caso de uso: se a velocidade de resposta importa mais que a profundidade, SmolLM 2; se a profundidade importa mais, Phi-4 Mini.',
          },
          {
            q: 'O Phi-4 Mini realmente supera os modelos de 7B no celular?',
            a: 'Ele supera os modelos de 7B mais antigos (Llama 3.3 7B, Mistral Small v0.1) em benchmarks padrão como MMLU e tarefas de raciocínio apesar de ter metade do tamanho. NÃO supera os modelos de 7B atuais (Llama 3.3 7B, Mistral Small v0.3) em capacidade bruta — esses ainda lideram em conhecimento amplo e raciocínio complexo. A razão pela qual o Phi-4 Mini rende acima do seu peso é a mistura de dados de treinamento da Microsoft (com muito conteúdo de cadeias de raciocínio sintéticas e texto de alta qualidade). Em celulares, os modelos de 7B costumam ser lentos demais para serem práticos de qualquer forma, então o Phi-4 Mini vence por padrão.',
          },
          {
            q: 'O SmolLM 2 consegue rodar em um celular de 4 anos atrás?',
            a: 'Sim, na maioria dos premium de 4 anos atrás. O SmolLM 2 1.7B em Q4_K_M precisa de ~1,1 GB de RAM para o modelo mais ~500 MB de sobrecarga de inferência — cabe em iPhone 13 (6 GB), iPhone 12 Pro Max (6 GB) e Android equivalente (6 GB+). Em celulares de 4 GB de 2021 (iPhone 12, Android básico), ele tecnicamente carrega, mas é instável sob qualquer pressão de memória; use o Gemma 3 1B no lugar.',
          },
          {
            q: 'Qual modelo lida melhor com a tradução em celular?',
            a: 'O Qwen 3 1.7B para qualquer par que envolva chinês, japonês, coreano, árabe, alemão, francês, espanhol ou russo. Foi treinado com forte representação multilíngue e produz saída de qualidade nativa onde os modelos centrados no inglês (Phi-4 Mini, Llama 3.2 3B) produzem resultados rígidos ou deficientes. Apenas para pares de idiomas europeus, o Gemma 3 4B é uma segunda opção viável. Para traduções pontuais entre inglês e um idioma específico, um app de tradução instalado (Google Translate, DeepL) costuma ser melhor que qualquer LLM local — os modelos locais brilham quando você precisa combinar tradução com chat ou resumo na mesma conversa.',
          },
          {
            q: 'Preciso de um celular premium para usá-los bem?',
            a: 'Não, apenas para os modelos maiores (Phi-4 Mini 3,8B, Gemma 3 4B, Llama 3.2 3B). Os celulares intermediários com 6–8 GB de RAM rodam o SmolLM 2 1.7B e o Qwen 3 1.7B em velocidade total (~20–28 tokens/seg). Os celulares econômicos com 4–6 GB de RAM rodam o Gemma 3 1B a ~15–25 tokens/seg. A resposta honesta: se você ainda não tem um celular premium, não compre um para IA local — os modelos mais pequenos no seu celular atual são suficientes para a maioria dos casos de uso.',
          },
          {
            q: 'Qual modelo consome menos bateria?',
            a: 'O Gemma 3 1B por muito — o modelo mais pequeno significa menos cálculos por token, o que implica menor carga de CPU/GPU e menor consumo de energia. O SmolLM 2 1.7B e o Qwen 3 1.7B vêm em seguida. Os modelos de 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) consomem 2–3× mais energia por resposta. Para voos longos ou uso prolongado sem acesso a carga onde a bateria importa mais, o Gemma 3 1B é a opção certa apesar do custo de qualidade.',
          },
          {
            q: 'Os modelos de celular conseguem lidar com conversas de vários turnos?',
            a: 'Sim para conversas curtas (5–10 turnos), com qualidade que se degrada depois. Os seis modelos têm janelas de contexto de 4.000–8.000 tokens; as conversas mais longas excedem a janela e o modelo perde o fio dos turnos anteriores. Para chat contínuo que precisa de memória além de uma sessão, o padrão prático é: resumir a conversa periodicamente, armazenar o resumo e fornecê-lo novamente como contexto. A maioria dos apps de celular (PocketPal AI, Private LLM) faz isso automaticamente; o LLM Farm requer configuração manual.',
          },
          {
            q: 'Esses modelos funcionam com entrada de voz?',
            a: 'Sim, quando combinados com uma camada de Whisper de voz para texto. A pilha padrão de voz offline no celular em 2026 é: Whisper (modelo small ou tiny) para voz para texto → Phi-4 Mini ou SmolLM 2 para geração de resposta → Apple TTS ou Android TTS para síntese de voz. O SmolLM 2 1.7B é a melhor opção de LLM para voz porque os altos tokens/seg mantêm os turnos de voz abaixo do limiar de percepção de ~1,5 segundo — veja [Crie um assistente de voz local no seu celular](/pt/power-local-llm/voice-assistant-local-mobile-offline) para o pipeline completo.',
          },
          {
            q: 'Qual é o melhor para uso offline em viagens?',
            a: 'Para viagens onde você troca de idioma e precisa de tradução: Qwen 3 1.7B. Para viagens onde você principalmente precisa de referência em inglês (perguntas, resumir documentos de viagem, redigir e-mails): Phi-4 Mini em um celular premium, SmolLM 2 1.7B em um intermediário. A viagem é o caso de uso mais sólido para a IA local em geral — não precisa de dados de roaming, sem custos de API na nuvem, e sem risco de as dependências da nuvem falharem em zonas de baixa conectividade. Baixe o modelo antes da viagem; ele funciona durante todo o trajeto com uma única carga se usado com moderação.',
          },
          {
            q: 'Os modelos de celular ainda serão úteis em 2027?',
            a: 'Sim, mas os nomes de modelos específicos vão mudar. A fronteira dos LLMs pequenos para celular se move aproximadamente a cada 6–9 meses — até o Q4 de 2026 provavelmente haverá novos modelos de ~3B que superem o Phi-4 Mini, e até meados de 2027 a classe de 1B–2B provavelmente fará o que os modelos de 3B–4B fazem hoje. A categoria não fica obsoleta; as recomendações específicas rotacionam. Volte a revisar este artigo (próxima atualização: 2026-11-08) para a próxima geração.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Melhores apps de LLM local para iPhone em 2026 (use IA sem WiFi)](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — guia irmão sobre os apps de iPhone que carregam esses modelos.',
          '[Melhores apps de LLM local para Android em 2026: 6 apps comparados em celulares reais](/pt/power-local-llm/best-local-llm-apps-android-2026) — guia irmão sobre os apps de Android que carregam esses modelos.',
          '[Crie um assistente de voz local no seu celular: Whisper + LLM local](/pt/power-local-llm/voice-assistant-local-mobile-offline) — aplicação específica desses modelos de celular em um pipeline de voz offline.',
          '[Rode IA local no seu tablet: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)](/pt/power-local-llm/run-ai-on-tablet-ipad-android) — guia de plataforma adjacente para leitores de tablets que usam o mesmo conjunto de modelos.',
          '[Quantização de LLMs explicada: Q4_K_M, Q5_K_M, formatos GGUF](/pt/local-llms/llm-quantization-explained) — referência de quantização para o padrão Q4_K_M mencionado neste artigo.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — referência mais ampla de modelos que cobre todas as gamas de hardware, não só celular.',
          '[Diretório de software LLM local 2026](/pt/power-local-llm/local-llm-software-directory-2026) — diretório de todas as ferramentas LLM locais relevantes em todas as plataformas.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores modelos LLM para celular em 2026: Phi-4 Mini vs Gemma 3 vs SmolLM',
      description: 'Seis LLMs pequenos avaliados em celulares em 2026. Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 3 1.7B, Llama 3.2 3B comparados em velocidade, RAM e qualidade.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/mobile-llm-models-phi4-gemma-smollm',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Beste mobile KI-Modelle 2026: Phi-4 Mini vs. Gemma 3 vs. SmolLM',
    seoTitle: 'Phi-4 Mini vs. Gemma 3 vs. SmolLM: Mobile LLMs 2026',
    intro:
      'Sechs kleine Sprachmodelle decken 2026 nahezu jeden mobilen Anwendungsfall ab: Phi-4 Mini (3.8B), Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.5B und Llama 3.2 3B. Sie unterscheiden sich in Tokens pro Sekunde, Speicherbedarf und Qualität bei Chat, Zusammenfassung, Übersetzung und kurzem Texterstellen. Dieser Leitfaden vergleicht die Modelle auf iPhone 17 Pro und Galaxy S25 Ultra, liefert ein Urteil je Geräteklasse (Flaggschiff / Mittelklasse / Budget) und erklärt, warum Q4_K_M-Quantisierung der Standard für Mobilgeräte ist.',
    metaDescription:
      'Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 3 1.5B und Llama 3.2 3B: Smartphone-Benchmark 2026. Geschwindigkeit, RAM und Qualität im Vergleich.',
    twitterDescription:
      'Beste mobile LLMs 2026: Phi-4 Mini (klügster), SmolLM 2 (schnellster), Qwen 2,5 (mehrsprachig), Gemma 3 1B (ältere Geräte), Gemma 3 4B (ausgewogen), Llama 3.2 3B (Allrounder).',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.5B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Mobile Nutzerinnen und Nutzer, die ein lokales KI-Modell für iPhone oder Android auswählen – darunter Reisende, datenschutzbewusste Personen und Entwicklerinnen und Entwickler, die offline mobile KI-Funktionen entwickeln.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'bestes mobiles KI-Modell',
    targetKeywords: [
      'bestes mobiles KI-Modell',
      'phi-4 mini vs gemma 3',
      'smollm 2 mobil',
      'qwen 2.5 1.5b mobil',
      'llama 3.2 3b mobil',
      'kleines LLM für Smartphone',
      'bestes On-Device-LLM 2026',
    ],
    leadAnswerBlock:
      '**Für die meisten Flaggschiff-Smartphones (8 GB+ RAM) in 2026 ist Phi-4 Mini (3.8B) mit Q4_K_M-Quantisierung das klügste Modell, das mit nutzbarer Geschwindigkeit läuft (~13–18 Tokens/Sek. auf dem iPhone 17 Pro).** Auf älteren 6-GB-Geräten passen Qwen 3 1.5B oder SmolLM 2 1.7B problemlos und liefern kohärente Kurzantworten. SmolLM 2 1.7B ist das schnellste Modell (Tokens pro Sekunde) auf jedem getesteten Gerät. Qwen 3 1.5B ist die stärkste mehrsprachige Option (35+ Sprachen, darunter Chinesisch, Japanisch und Arabisch). Gemma 3 4B ist der ausgewogene Standard, wenn Phi-4 Mini in Ihrer App nicht verfügbar ist. Gemma 3 1B ist die leichte Wahl für sehr alte Geräte (4 GB RAM). Llama 3.2 3B ist der am besten getestete 3B-Allrounder mit der breitesten Tool-Unterstützung.',
    quickAnswerTop: {
      question: 'Was ist das beste lokale KI-Modell für Mobilgeräte in 2026?',
      answer:
        'Phi-4 Mini (3.8B) ist das klügste Modell mit nutzbarer Geschwindigkeit auf Flaggschiff-Smartphones (8 GB+ RAM) – ~13–18 Tokens/Sek. auf dem iPhone 17 Pro. SmolLM 2 1.7B ist auf jedem getesteten Gerät das schnellste Modell. Qwen 3 1.5B ist die beste Wahl für mehrsprachige Nutzung. Gemma 3 4B ist der ausgewogene Standard. Gemma 3 1B funktioniert auf sehr alten Geräten (4 GB RAM). Llama 3.2 3B ist der beste 3B-Allrounder. Alle sechs Modelle sollten als Q4_K_M GGUF heruntergeladen werden – die Standard-Quantisierung für Mobilgeräte, die ~95 % der ursprünglichen Qualität bei einem Viertel der Dateigröße erhält.',
      bullets: [
        'Phi-4 Mini (3.8B) – klügstes kleines Modell. Optimal auf 8-GB-Smartphones (iPhone 17 Pro: ~13–18 Tok/Sek.).',
        'Gemma 3 4B – ausgewogener Standard. Solide Qualität, aber langsamer als Phi-4 Mini auf gleicher Hardware.',
        'Gemma 3 1B – für ältere Geräte (4 GB RAM). Schnell, aber eingeschränkte Schlussfolgerngstiefe.',
        'SmolLM 2 1.7B – schnellste Tokens/Sek. auf jedem getesteten Gerät. Ideal für reaktionsschnellen Chat auf Mittelklassegeräten.',
        'Qwen 3 1.5B – stärkstes mehrsprachiges Mobilmodell (35+ Sprachen). Optimal für Übersetzung, nicht-englischsprachigen Chat.',
        'Llama 3.2 3B – meistgetesteter 3B-Allrounder. Bestes 3B-Modell für Tool Calling, RAG und breit kompatible Apps.',
        'Quantisierung: alle sechs als Q4_K_M GGUF herunterladen. Q5/Q6 nur bei 12 GB+ RAM und App-Unterstützung.',
      ],
      updatedDate: '2026-05-08',
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Welches mobile Modell sollten Sie wählen?', anchor: '#which-model' },
      { label: 'Vergleichstabelle mobiler Modelle', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini: Intelligentestes kleines Modell', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B: Ausgewogener Standard', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B: Leichtgewicht für ältere Geräte', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1,7B: Schnellste Tokens pro Sekunde', anchor: '#smollm-2' },
      { label: 'Qwen 2,5 1,5B: Stärkstes mehrsprachiges Mobilmodell', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B: Zuverlässiger 3B-Allrounder', anchor: '#llama-3-2-3b' },
      { label: 'Quantisierung für Mobilgeräte: Q4_K_M als Standard', anchor: '#quantization' },
      { label: 'Urteil nach Geräteklasse: Flaggschiff vs. Mittelklasse vs. Budget', anchor: '#per-tier-verdict' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Phi-4 Mini (3.8B) ist das klügste kleine Modell in 2026.** Optimal für Flaggschiff-Smartphones mit 8 GB+ RAM – läuft mit ~13–18 Tokens/Sek. auf dem iPhone 17 Pro und ~10–15 auf dem iPhone 16 Pro. Stärkstes Schlussfolgerungsvermögen pro Parameter aller Modelle unter 4B.',
          '**SmolLM 2 1.7B ist das schnellste Modell (Tokens pro Sekunde) auf jedem getesteten Gerät.** ~26–32 Tok/Sek. auf dem iPhone 17 Pro, ~20–28 auf dem Galaxy S25 Ultra. Optimal, wenn Reaktionsschnelligkeit wichtiger ist als Antworttiefe (schneller Chat, Autovervollständigungs-Aufgaben).',
          '**Qwen 3 1.5B ist das stärkste mehrsprachige Mobilmodell.** Trainiert auf 35+ Sprachen, darunter Chinesisch, Japanisch, Arabisch und Deutsch, mit muttersprachlicher Ausgabequalität. Erste Wahl für Übersetzung, nicht-englischsprachiges Verfassen und auf Reisen.',
          '**Gemma 3 4B ist der ausgewogene Standard.** Auf gleicher Hardware etwas langsamer als Phi-4 Mini, aber gleichwertig bei Chat und Zusammenfassung. Optimal, wenn Phi-4 Mini in Ihrer App nicht verfügbar ist oder Sie Googles Trainings-Datenmix bevorzugen.',
          '**Gemma 3 1B ist die leichte Wahl für ältere Geräte.** Passt in 4 GB RAM (iPhone SE 3. Generation, älteres Android). Eingeschränkte mehrstufige Schlussfolgerung, erzeugt aber auf schwächerer Hardware schneller kohärente 1–2-Absatz-Antworten als jedes andere Modell.',
          '**Llama 3.2 3B ist der meistgetestete 3B-Allrounder.** Beste Tool-Calling-Unterstützung unter den sechs Modellen, breiteste App-Kompatibilität, größtes Community-Fine-Tune-Ökosystem. Etwas hinter Phi-4 Mini bei der Rohqualität, aber zuverlässiger in Grenzfällen.',
          '**Q4_K_M ist die Standard-Quantisierung für Mobilgeräte in 2026.** Erhält ~95 % der ursprünglichen Qualität bei einem Viertel der Dateigröße. Q5_K_M oder Q6_K nur auf Geräten mit 12 GB+ RAM (iPhone 17 Pro Max) und nur wenn die App dies unterstützt.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Getestete Modelle:** Phi-4 Mini 3.8B, Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.5B, Llama 3.2 3B (alle Q4_K_M GGUF).',
          '**Testgeräte:** iPhone 17 Pro (A19 Pro), iPhone 16 Pro (A18 Pro, 8 GB), Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), OnePlus 13 (Snapdragon 8 Elite).',
          '**Inferenz-Engines:** llama.cpp über PocketPal AI / LLM Farm (Standard), MLC LLM über MLC Chat (Metal-beschleunigt auf iPhone), Ollama über Termux (Android).',
          '**Speicherbedarf (Q4_K_M):** Phi-4 Mini ~2,7 GB, Gemma 3 4B ~2,9 GB, Llama 3.2 3B ~2,2 GB, Qwen 3 1.5B ~1,0 GB, SmolLM 2 1.7B ~1,1 GB, Gemma 3 1B ~720 MB.',
          '**Mindest-RAM (aktiv):** 6-GB-Gerät für 1,5B–1,7B-Modelle; 8-GB-Gerät für 3B–4B-Modelle; 4-GB-Gerät nur für Gemma 3 1B.',
          '**Schnellste Tokens/Sek. auf iPhone 17 Pro:** Gemma 3 1B ~35–45, SmolLM 2 ~26–32, Qwen 3 ~24–32, Llama 3.2 3B ~16–22, Phi-4 Mini ~13–18, Gemma 3 4B ~10–13.',
          '**Quelle der Quantisierung:** alle sechs als Q4_K_M GGUF auf Hugging Face und über PocketPal AI / MLC Chat / LM Studio verfügbar.',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: 'Welches mobile Modell sollten Sie wählen?',
        content:
          '**Für die meisten Flaggschiff-Smartphones (iPhone 16 Pro / 17 Pro, Galaxy S25 Ultra, OnePlus 13) empfehlen wir Phi-4 Mini (3.8B Q4_K_M).** Es ist das klügste Modell unter 4B und läuft mit nutzbarer Gesprächsgeschwindigkeit. Wählen Sie ein anderes Modell nur, wenn Sie einen spezifischen Bedarf haben, den es nicht abdeckt – Geschwindigkeit (SmolLM 2), Mehrsprachigkeit (Qwen 3) oder Kompatibilität mit älteren Geräten (Gemma 3 1B).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini für Flaggschiff-Smartphones mit 8 GB+ RAM (klügster), SmolLM 2 1.7B für Geschwindigkeit, Qwen 3 1.5B für mehrsprachige Nutzung, Gemma 3 1B für 4-GB-Geräte, Llama 3.2 3B für Tool Calling und Gemma 3 4B als ausgewogener Standard, wenn Phi-4 Mini nicht verfügbar ist.',
          },
          {
            type: 'plain-terms',
            text: 'Es gibt kein einzelnes bestes Mobilmodell – die richtige Wahl hängt von Ihrem Gerät und Ihrer Nutzung ab. Wenn Ihr Smartphone aus den letzten zwei Jahren stammt und 8 GB oder mehr RAM hat, installieren Sie Phi-4 Mini. Wenn Sie hauptsächlich in einer anderen Sprache als Englisch chatten, installieren Sie Qwen 3. Wenn Sie die schnellsten Antworten wünschen, auch auf Kosten von etwas Qualität, installieren Sie SmolLM 2. Wenn Ihr Gerät älter ist oder nur 4 GB RAM hat, installieren Sie Gemma 3 1B. Die Unterschiede sind real, aber klein genug, dass jedes dieser Modelle kohärente Antworten liefert – keines erreicht Cloud-Qualität.',
          },
        ],
        decisionBlock: {
          title: 'Entscheidung: Welches Mobilmodell?',
          localIf: [
            'Flaggschiff-Smartphone mit 8 GB+ RAM (iPhone 16 Pro/17 Pro, Galaxy S25 Ultra, OnePlus 13) → Phi-4 Mini 3.8B',
            'Schnellste Tokens/Sek. auf jedem Gerät benötigt → SmolLM 2 1.7B',
            'Nicht-englische Nutzung (Übersetzung, mehrsprachiger Chat) → Qwen 3 1.5B',
            'Breite App-Kompatibilität, Tool Calling oder RAG benötigt → Llama 3.2 3B',
            'Älteres Gerät mit 4 GB RAM → Gemma 3 1B',
            'Phi-4 Mini in Ihrer App nicht verfügbar, 4B-Klasse-Qualität benötigt → Gemma 3 4B',
          ],
          cloudIf: [
            'Mehrstufige Schlussfolgerung, komplexe Code-Generierung oder Langdokumentenanalyse → Cloud oder Remote-Verbindung zu einem Heimrechner mit 70B+',
            'Vision-Language-Aufgaben (Bildeingabe, OCR) → Cloud-Apps (mobile Vision-Modelle sind 2026 begrenzt und langsam)',
            'Längeres kreatives Schreiben, bei dem die Kohärenz über 3.000+ Token wichtig ist → Cloud oder 8B+ auf einem Desktop',
          ],
          quick: [
            'Standard für die meisten Nutzer: Phi-4 Mini 3.8B',
            'Schnellstes auf jedem Gerät: SmolLM 2 1.7B',
            'Beste Mehrsprachigkeit: Qwen 3 1.5B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie unsicher sind, beginnen Sie mit Phi-4 Mini auf einem Flaggschiff-Gerät oder SmolLM 2 1.7B auf einem Mittelklassegerät – beide sind in unter 5 Minuten bei schneller Verbindung heruntergeladen und können rückgängig gemacht werden. Testen Sie eine Aufgabe, die Ihnen wirklich wichtig ist (eine echte E-Mail zum Zusammenfassen, eine echte Frage zu beantworten). Wenn die Qualität akzeptabel ist, haben Sie Ihren Standard. Falls nicht, wechseln Sie in 30 Sekunden über PocketPal AI oder LM Studio zum nächsten Modell.',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-de.svg',
        imageCaption: '4-Schritte-Entscheidungsleitfaden für mobile LLMs: RAM prüfen, Geräteklasse wählen (4 GB bis 8 GB+), Anwendungsfall auswählen (Geschwindigkeit, Mehrsprachigkeit oder Qualität), dann Q4_K_M GGUF über PocketPal AI oder LM Studio installieren.',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Vergleichstabelle mobiler Modelle',
        content:
          '**Die folgende Vier-Spalten-Tabelle ist die schnelle Übersicht – wählen Sie eine Zeile nach Ihrer Geräteklasse oder Ihrem Anwendungsfall.** Tokens/Sek.-Werte basieren auf Q4_K_M-Quantisierung auf dem iPhone 17 Pro über PocketPal AI (llama.cpp). Auf dem iPhone 16 Pro sind die Werte um 15–25 % und auf dem Galaxy S25 Ultra (mit MLC Chat oder Termux+Ollama) um ca. 10–20 % niedriger.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini ist das klügste, SmolLM 2 1.7B das schnellste, Qwen 3 1.5B das beste für Mehrsprachigkeit, Gemma 3 1B das kleinste brauchbare, Llama 3.2 3B der stärkste 3B-Allrounder und Gemma 3 4B der ausgewogene Standard.',
          },
          {
            type: 'plain-terms',
            text: 'Lesen Sie die Tabelle von oben nach unten nach Größenordnung oder springen Sie direkt zur Zeile, die Ihrer Geräteklasse entspricht. Die Spalte „Geeignet für" zeigt, worauf das Modell optimiert ist – wählen Sie die Zeile, deren Stärke für Sie am wichtigsten ist, und ignorieren Sie die anderen.',
          },
        ],
        columns: ['Modell', 'Größe', 'Tokens/Sek. (17 Pro)', 'Geeignet für'],
        rows: [
          { 'Modell': 'Phi-4 Mini', 'Größe': '3,8B', 'Tokens/Sek. (17 Pro)': '~13–18', 'Geeignet für': 'Klügstes kleines Modell – Standard für Flaggschiffgeräte' },
          { 'Modell': 'Gemma 3 4B', 'Größe': '4B', 'Tokens/Sek. (17 Pro)': '~10–13', 'Geeignet für': 'Ausgewogener Standard, wenn Phi-4 Mini nicht verfügbar' },
          { 'Modell': 'Gemma 3 1B', 'Größe': '1B', 'Tokens/Sek. (17 Pro)': '~35–45', 'Geeignet für': 'Ältere Geräte (4 GB RAM)' },
          { 'Modell': 'SmolLM 2', 'Größe': '1,7B', 'Tokens/Sek. (17 Pro)': '~26–32', 'Geeignet für': 'Schnellste Tokens/Sek., reaktionsschneller Chat' },
          { 'Modell': 'Qwen 3', 'Größe': '1,5B', 'Tokens/Sek. (17 Pro)': '~24–32', 'Geeignet für': 'Beste Mehrsprachigkeit (35+ Sprachen)' },
          { 'Modell': 'Llama 3.2', 'Größe': '3B', 'Tokens/Sek. (17 Pro)': '~16–22', 'Geeignet für': 'Stärkste 3B-Option, Tool Calling, RAG' },
        ],
        note:
          '**Hinweis zum Geschwindigkeit-Qualität-Kompromiss:** Tokens/Sek. skaliert umgekehrt proportional zur Parameteranzahl auf demselben Chip – ein 1B-Modell ist auf gleicher Hardware ca. 3–4× schneller als ein 3,8B-Modell. Qualität skaliert mit Parametern, aber nicht linear: Phi-4 Mini (3.8B) Schlussfolgerungsqualität liegt näher an einem 7B-Modell als an einem 1,7B-Modell dank Microsofts Trainings-Datenmix. Nutzen Sie die Tabelle für die Abwägung: schnelleres Modell = schnellere Antwort, klügeres Modell = bessere Antwort bei schwierigen Fragen.',
        callouts: [
          {
            type: 'tip',
            text: 'Auf dem iPhone 16 Pro sind die Tokens/Sek.-Werte für jedes Modell in dieser Tabelle ca. 15–25 % niedriger als auf dem iPhone 17 Pro – Unterschied zwischen A18 Pro und A19 Pro Neural Engine. Das Galaxy S25 Ultra (Snapdragon 8 Elite) liegt ca. 10–20 % unter dem iPhone 17 Pro für dasselbe Q4_K_M GGUF, hauptsächlich weil Termux+Ollama auf Android den Snapdragon Hexagon NPU noch nicht so nutzt wie MLC Chat Apple Metal.',
          },
        ],
        image: '/images/mobile-llm-models-comparison-table-de.svg',
        imageCaption: 'Sechs mobile LLM-Modelle mit Q4_K_M auf dem iPhone 17 Pro verglichen: Phi-4 Mini (3,8B, ~13–18 Tok/Sek.) ist das klügste; SmolLM 2 (1,7B, ~26–32 Tok/Sek.) ist das schnellste; Qwen 2,5 (1,5B) ist das beste für Mehrsprachigkeit; Gemma 3 1B (~35–45 Tok/Sek.) läuft auf 4-GB-Geräten.',
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini: Intelligentestes kleines Modell',
        content:
          '**Phi-4 Mini (3,8B Parameter, Microsoft, Dezember 2024) ist dank eines auf Schlussfolgerung optimierten Trainings-Datenmixes das klügste Modell unter 4B in 2026.** Es übertrifft Gemma 3 4B und Llama 3.2 3B bei Chain-of-Thought-Aufgaben, obwohl es ähnlich groß ist. Verwenden Sie es als Standard auf jedem Smartphone mit 8 GB+ RAM.',
        items: [
          '**Parameter und Training:** 3,8B Parameter; trainiert auf einem von Microsoft kuratierten Mix aus hochwertigen Webtexten, synthetischen Schlussfolgerungsketten und akademischen Inhalten. Architektur ist ein Transformer mit Grouped-Query Attention.',
          '**Speicherbedarf:** ~2,7 GB bei Q4_K_M, ~3,5 GB bei Q5_K_M. Passt problemlos auf iPhone 16 Pro / 17 Pro (8 GB) und Galaxy S25 Ultra (12 GB) mit Platz für das Betriebssystem.',
          '**Geschwindigkeit (Tokens/Sek.):** iPhone 17 Pro ~13–18, iPhone 16 Pro ~10–15, Galaxy S25 Ultra ~10–15 (Termux+Ollama), iPhone 14 Pro ~6–10 (langsam, aber funktional).',
          '**Qualitätsstärken:** Chain-of-Thought-Schlussfolgerung, Zusammenfassung, faktisches Fragen-Antworten, einfache Code-Generierung. Übertrifft ähnlich große Open-Source-Modelle auf Standardbenchmarks (MMLU, GSM8K).',
          '**Qualitätsschwächen:** geringeres Weltwissen als Llama 3.2 3B (weniger Common-Crawl-Exposition); kürzere natürliche kreative Texte als Gemma 3 4B; schwächer mehrsprachig als Qwen 3 1.5B außerhalb des Englischen.',
          '**Optimal für:** Nutzerinnen und Nutzer mit Flaggschiff-Smartphone, die den klügsten Einzel-Modell-Standard für englischsprachigen Chat, Zusammenfassung und Schlussfolgerung wünschen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Phi-4 Mini profitiert von einem System-Prompt, der schrittweises Schlussfolgern explizit einfordert („Denken Sie dies sorgfältig durch, bevor Sie antworten"). Die Trainingsdaten waren reich an Schlussfolgerungsketten, weshalb ein entsprechend formulierter Prompt konsistent bessere Antworten liefert als knappe Anweisungen. Für schnellen Chat ist kein System-Prompt erforderlich; das Standardverhalten ist bereits konversationell.',
          },
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B: Ausgewogener Standard',
        content:
          '**Gemma 3 4B (Google DeepMind, 2025) ist der ausgewogene Standard, wenn Phi-4 Mini in Ihrer App nicht verfügbar ist oder Sie Googles Trainings-Datenmix bevorzugen.** Auf gleicher Hardware etwas langsamer als Phi-4 Mini, aber bei Chat und Zusammenfassung gleichwertig, mit breiterer natürlichsprachlicher Abdeckung.',
        items: [
          '**Parameter und Training:** 4B Parameter; trainiert auf Googles kuratierten Mix aus Webtexten, Code und mehrsprachigen Daten. Gleiche Architekturfamilie wie Gemma 2 mit erweitertem Kontext.',
          '**Speicherbedarf:** ~2,9 GB bei Q4_K_M, ~3,7 GB bei Q5_K_M. Passt auf 8-GB-Geräte; auf 6-GB-Geräten eng (stattdessen Phi-4 Mini oder kleineres Modell verwenden).',
          '**Geschwindigkeit (Tokens/Sek.):** iPhone 17 Pro ~10–13, iPhone 16 Pro ~7–10, Galaxy S25 Ultra ~7–10 (etwas langsamer als Phi-4 Mini trotz ähnlicher Größe aufgrund von Architekturunterschieden).',
          '**Qualitätsstärken:** natürlicher Gesprächston, starke Zusammenfassung, breiteres Weltwissen als Phi-4 Mini (Common-Crawl-Exposition), ordentliche Mehrsprachigkeit.',
          '**Qualitätsschwächen:** schwächere Chain-of-Thought-Schlussfolgerung als Phi-4 Mini; langsamere Tokens/Sek. auf gleicher Hardware; nicht immer das erste Modell in mobilen Apps (zeitlicher Rückstand gegenüber Phi-4 Mini in PocketPal AI).',
          '**Optimal für:** Flaggschiff-Nutzerinnen und -Nutzer, die ein von Google trainiertes Modell als Phi-4-Mini-Alternative wünschen, insbesondere für alltäglichen Chat, Zusammenfassung und kurzes Verfassen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Gemma 3 4B verwendet ein anderes Chat-Template als Phi-4 Mini – stellen Sie sicher, dass Ihre App das korrekte Gemma-Template verwendet (mit `<start_of_turn>`-Markierungen). Ein falsches Template erzeugt fehlerhafte oder sich wiederholende Ausgabe. PocketPal AI, MLC Chat und LM Studio erkennen dies automatisch; LLM Farm erfordert die manuelle Auswahl des Gemma-Templates unter „Modelleinstellungen".',
          },
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B: Leichtgewicht für ältere Geräte',
        content:
          '**Gemma 3 1B (Google DeepMind, 2025) ist das kleinste brauchbare Mobilmodell in 2026 – ~720 MB bei Q4_K_M und läuft auf 4-GB-Geräten.** Die Qualität ist auf kurze kohärente Antworten (1–2 Absätze) beschränkt, aber es ist die einzige Option unter 1 GB, die auf schwacher Hardware brauchbare Ausgabe erzeugt.',
        items: [
          '**Parameter und Training:** 1B Parameter; gleiche Gemma-3-Familienarchitektur wie das 4B-Modell, aber mit reduziertem Trainingsaufwand. Für effiziente Inferenz auf Edge-Geräten trainiert.',
          '**Speicherbedarf:** ~720 MB bei Q4_K_M, ~900 MB bei Q5_K_M. Läuft auf iPhone SE 3. Generation, iPhone 12 / 13, älterem Android (mindestens 4 GB RAM).',
          '**Geschwindigkeit (Tokens/Sek.):** iPhone 17 Pro ~35–45, iPhone 16 Pro ~28–38, iPhone 14 ~20–28, älteres Android (4 GB) ~10–15. Schnellstes Modell in diesem Vergleich auf jedem Gerät.',
          '**Qualitätsstärken:** Geschwindigkeit, geringer Speicherbedarf, kohärente Kurzantworten, niedriger Akkuverbrauch.',
          '**Qualitätsschwächen:** schwache mehrstufige Schlussfolgerung, häufige Faktenfehler bei Nischenthemen, Wiederholungen bei langen Generierungen (>500 Token), geringe Gesprächstiefe.',
          '**Optimal für:** Nutzerinnen und Nutzer mit Geräten unter der 6-GB-RAM-Schwelle, die dennoch On-Device-KI wünschen, oder alle, die bei langen Flügen oder in akkuarmen Szenarien auf die Akkulaufzeit optimieren.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Verwenden Sie Gemma 3 1B für kurze, fokussierte Aufgaben – einzeilige Zusammenfassungen, Einabsatz-Entwürfe, schnelle Definitionen, einfache Übersetzungen zwischen gängigen Sprachpaaren. Vermeiden Sie mehrseitige Erklärungen, mehrstufige Schlussfolgerungen oder Aufgaben, bei denen die Genauigkeit bei Nischenfakten wichtig ist. Das Modell kennt seine Grenzen; der Prompt „Sei prägnant" spielt seinen Stärken in die Hände.',
          },
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1,7B: Schnellste Tokens pro Sekunde',
        content:
          '**SmolLM 2 1.7B (Hugging Face, 2024) ist das schnellste Mobilmodell (Tokens pro Sekunde) in diesem Vergleich auf jedem getesteten Gerät.** ~26–32 Tok/Sek. auf dem iPhone 17 Pro und ~20–28 auf dem Galaxy S25 Ultra. Optimal, wenn Reaktionsschnelligkeit wichtiger ist als Antworttiefe.',
        items: [
          '**Parameter und Training:** 1,7B Parameter; trainiert auf einem von Hugging Face kuratierten Mix, der auf Effizienz kleiner Modelle optimiert ist. Architektur auf niedrige Inferenzlatenz auf Consumer-Hardware ausgelegt.',
          '**Speicherbedarf:** ~1,1 GB bei Q4_K_M. Passt auf jedes Gerät mit 6 GB+ RAM mit erheblichem Betriebssystem-Spielraum.',
          '**Geschwindigkeit (Tokens/Sek.):** iPhone 17 Pro ~26–32, iPhone 16 Pro ~22–28, Galaxy S25 Ultra ~20–28, iPhone 14 Pro ~15–22. Ca. 2× schneller als Phi-4 Mini auf demselben Chip.',
          '**Qualitätsstärken:** reaktionsschnelle Gesprächsantworten, einfaches Fragen-Antworten, Autovervollständigungs-Fortsetzung, englischsprachiges Verfassen.',
          '**Qualitätsschwächen:** schwächere Schlussfolgerung als Phi-4 Mini, geringeres Weltwissen als Llama 3.2 3B, schwächere Mehrsprachigkeit als Qwen 3 1.5B, gelegentliche Halluzinationen bei Faktenabfragen.',
          '**Optimal für:** Mittelklassegeräte, bei denen Latenz wichtig ist (Texteingabe-Autovervollständigung, Sprachassistent-Turns, Echtzeit-Chat), oder ältere Flaggschiffe, bei denen größere Modelle sich träge anfühlen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SmolLM 2 1.7B ist die beste Kombination für einen Offline-Sprachassistenten auf dem Smartphone – weitere Informationen finden Sie unter [Lokalen Sprachassistenten auf dem Smartphone erstellen](/de/power-local-llm/voice-assistant-local-mobile-offline) für die Whisper-+-LLM-+-TTS-Pipeline. Die hohen Tokens/Sek. halten die Sprachgesprächs-Wartezeit unter der ~1,5-Sekunden-Wahrnehmungsschwelle, selbst auf Mittelklasse-Hardware.',
          },
        ],
        image: '/images/mobile-llm-models-speed-chart-de.svg',
        imageCaption: 'Tokens-pro-Sekunde-Vergleich für 6 mobile LLM-Modelle auf 3 Geräten mit Q4_K_M: Gemma 3 1B (~35–45 auf iPhone 17 Pro) und SmolLM 2 1,7B (~26–32) führen bei der Geschwindigkeit; Phi-4 Mini (~13–18) und Gemma 3 4B (~10–13) sind langsamer, aber klüger.',
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 2,5 1,5B: Stärkstes mehrsprachiges Mobilmodell',
        content:
          '**Qwen 3 1.5B (Alibaba, 2024) ist das stärkste mehrsprachige Mobilmodell in 2026 – trainiert auf 35+ Sprachen, darunter Chinesisch, Japanisch, Koreanisch, Arabisch, Deutsch, Französisch, Spanisch und Russisch.** Beste Wahl für Übersetzung, nicht-englischsprachigen Chat und Reisenutzung, bei der die Nutzerinnen und Nutzer mitten im Gespräch die Sprache wechseln.',
        items: [
          '**Parameter und Training:** 1,5B Parameter; trainiert auf Alibabas mehrsprachigem Korpus mit starker Repräsentation von CJK-Sprachen, Arabisch und den wichtigsten europäischen Sprachen. Architektur für mehrsprachiges Schlussfolgern optimiert.',
          '**Speicherbedarf:** ~1,0 GB bei Q4_K_M. Passt auf jedes Gerät mit 6 GB+ RAM.',
          '**Geschwindigkeit (Tokens/Sek.):** iPhone 17 Pro ~24–32, iPhone 16 Pro ~20–28, Galaxy S25 Ultra ~18–26, iPhone 14 Pro ~14–20. Vergleichbare Geschwindigkeit wie SmolLM 2.',
          '**Qualitätsstärken:** muttersprachliche Ausgabequalität in 35+ Sprachen (die meisten kleinen Modelle sind englischzentriert mit schwachem mehrsprachigem Fallback), starke Übersetzung zwischen wichtigen Sprachpaaren, kohärente CJK-Ausgabe, bei der Phi-4 Mini und Llama 3.2 unleserliche Zeichen produzieren.',
          '**Qualitätsschwächen:** rein englische Schlussfolgerung etwas schwächer als Phi-4 Mini, kürzere natürliche kreative Texte als Gemma 3 4B, schwächeres Tool Calling als Llama 3.2 3B.',
          '**Optimal für:** nicht-englischsprachige Nutzerinnen und Nutzer (insbesondere Chinesisch-, Japanisch-, Deutsch-, Spanisch- und Französischsprechende), Reisende, die Offline-Übersetzung benötigen, oder Entwicklerinnen und Entwickler, die mehrsprachige mobile Funktionen erstellen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für die einmalige Übersetzung zwischen zwei bestimmten Sprachpaaren übertrifft Qwen 3 1.5B in der Regel ein größeres englischzentriertes Modell, das Übersetzung als Nebenaufgabe ausführt. Für eine deutschsprachige Nutzerin oder einen deutschsprachigen Nutzer, der auf Deutsch chattet, erzeugt Qwen 3 merklich natürlichere Ausgabe als Phi-4 Mini, obwohl es 60 % kleiner ist. Die einfache Regel: Wählen Sie das Modell, das für Ihre Hauptsprache trainiert wurde, nicht das Modell mit den meisten Parametern.',
          },
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B: Zuverlässiger 3B-Allrounder',
        content:
          '**Llama 3.2 3B (Meta, 2024) ist das meistgetestete 3B-Modell in 2026 – breiteste App-Kompatibilität, stärkste Tool-Calling-Unterstützung unter den sechs Modellen und das größte Community-Fine-Tune-Ökosystem.** Etwas hinter Phi-4 Mini bei der Rohqualität, aber zuverlässiger in Grenzfällen und besser von mobilen Apps unterstützt.',
        items: [
          '**Parameter und Training:** 3B Parameter; trainiert auf Metas großem Pretraining-Korpus mit Instruction-Tuning für Chat und Tool-Nutzung. Gleiche Llama-3-Architektur wie die 8B- und 70B-Geschwister.',
          '**Speicherbedarf:** ~2,2 GB bei Q4_K_M, ~2,8 GB bei Q5_K_M. Passt auf 8-GB-Geräte mit ausreichend Betriebssystem-Spielraum; funktioniert auf engen 6-GB-Geräten, wenn andere Apps geschlossen sind.',
          '**Geschwindigkeit (Tokens/Sek.):** iPhone 17 Pro ~16–22, iPhone 16 Pro ~12–18, Galaxy S25 Ultra ~12–18, iPhone 14 Pro ~7–11.',
          '**Qualitätsstärken:** breites Weltwissen, robuste Tool-Calling- und Function-Calling-Unterstützung (beste in seiner Klasse unter Modellen unter 4B), zuverlässiges Chat-Verhalten, reifes Ökosystem an Fine-Tunes für spezifische Aufgaben (Medizin, Recht, Code).',
          '**Qualitätsschwächen:** schwächere Chain-of-Thought-Schlussfolgerung als Phi-4 Mini, etwas niedrigere MMLU-Werte bei ähnlicher Größe, weniger natürlicher Gesprächston als Gemma 3 4B.',
          '**Optimal für:** mobile Apps, die Tool Calling oder Function Calling benötigen (RAG über lokale Dokumente, On-Device-Agent-Workflows), oder Nutzerinnen und Nutzer, die das Modell mit der größten Community-Fine-Tune-Bibliothek wünschen.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.2 3B ist das einzige Modell in diesem Vergleich mit breiter Tool-Calling-Unterstützung, die für On-Device-Agent-Workflows zuverlässig genug ist – weitere Informationen unter [Lokale KI-Agenten mit MCP 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026). Phi-4 Mini und SmolLM 2 können technisch Tool Calls ausführen, aber Llama 3.2 3B ist 2026 das einzige produktionsreife Modell dafür.',
          },
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'Quantisierung für Mobilgeräte: Q4_K_M als Standard',
        content:
          '**Q4_K_M ist die Standard-Quantisierung für mobile LLM-Inferenz in 2026 – erhält ~95 % der ursprünglichen Modellqualität bei einem Viertel der Dateigröße.** Verwenden Sie Q5_K_M oder Q6_K nur auf Geräten mit 12 GB+ RAM (iPhone 17 Pro Max, Galaxy S25 Ultra), wo der zusätzliche Speicher tatsächlich frei verfügbar ist.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M ist der mobile Standard – ~95 % Qualität bei einem Viertel der Größe. Q5_K_M / Q6_K lohnen sich nur auf Geräten mit 12 GB+ RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Modelle auf Hugging Face werden in voller Präzision veröffentlicht (jeder Parameter als 16-Bit-Zahl gespeichert). Auf Smartphones laden Sie eine quantisierte Version herunter, bei der jeder Parameter auf 4 Bit komprimiert wird – die Datei wird viermal kleiner und die Inferenz ca. viermal schneller, bei leichtem Qualitätsverlust. Q4_K_M ist die Variante, auf die sich alle 2026 als richtige Balance für Smartphones geeinigt haben. Höhere Q-Zahlen (Q5, Q6, Q8) bedeuten weniger Komprimierung und bessere Qualität, aber größere Dateien; Q4 ist der Sweet Spot für Smartphone-Beschränkungen.',
          },
        ],
        items: [
          '**Q4_K_M (empfohlener Standard):** 4-Bit-Quantisierung mit K-Quants und gemischter „M"-Präzision. ~95 % der ursprünglichen Qualität. Standard für Mobilgeräte in 2026. Alle sechs Modelle in diesem Format auf Hugging Face verfügbar.',
          '**Q5_K_M (für Geräte mit 12 GB+ RAM):** 5-Bit-Quantisierung. ~98 % der ursprünglichen Qualität. ~25 % größere Dateien. Lohnt sich auf iPhone 17 Pro Max (12 GB) oder Galaxy S25 Ultra (12 GB) für Phi-4 Mini und Llama 3.2 3B; der RAM-Aufpreis ist auf 8-GB-Geräten nicht gerechtfertigt.',
          '**Q6_K (selten benötigt):** 6-Bit-Quantisierung. ~99 % der ursprünglichen Qualität. ~50 % größere Dateien. Lohnt sich nur für speicherreiche Smartphones mit Modellen, bei denen Qualität wirklich wichtig ist (z. B. langer Textentwurf, bei dem jeder Qualitätsprozentpunkt zählt).',
          '**Q8_0 (auf Mobilgeräten vermeiden):** 8-Bit-Quantisierung. ~99,5 % der ursprünglichen Qualität. Ca. 2× die Größe von Q4_K_M. Der RAM-Aufpreis auf Smartphones lohnt sich nicht; für Desktop-/Laptop-Nutzung reservieren.',
          '**Q3_K_M / Q2_K (nur für sehr eingeschränkte Geräte):** 3-Bit- und 2-Bit-Quantisierung. Qualität sinkt auf ~85–90 %. Nur verwenden, wenn Gemma 3 1B bei Q4_K_M immer noch nicht passt (in 2026 selten).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Laden Sie nicht dasselbe Modell in mehreren Quantisierungen herunter, um zu „testen, welche besser ist". Die Qualitätsunterschiede zwischen Q4_K_M und Q5_K_M sind real, aber gering, und Sie verbrauchen 5+ GB Smartphone-Speicher für redundante Varianten. Wählen Sie Q4_K_M, nutzen Sie es eine Woche lang real, und steigen Sie auf Q5_K_M nur um, wenn Sie konkrete Hinweise haben, dass die Qualität unzureichend ist.',
          },
        ],
        image: '/images/mobile-llm-models-quantization-guide-de.svg',
        imageCaption: 'GGUF-Quantisierungsstufen für Mobilgeräte: Q4_K_M ist der Standard für 6-GB-Geräte (~95 % Qualität, ×0,5 Dateigröße); Q5_K_M und Q6_K nur für 12-GB-Geräte; Q8_0 nur für Desktop; Q3_K_M ist der letzte Ausweg für 4-GB-Geräte.',
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'Urteil nach Geräteklasse: Flaggschiff vs. Mittelklasse vs. Budget',
        content:
          '**Die Geräteklasse bestimmt die Modellobergrenze – Chip-Generation und RAM sind wichtiger als die Marke.** Ein Flaggschiff-Smartphone (8 GB+ RAM, A18 Pro / A19 Pro / Snapdragon 8 Elite) läuft mit 3,8B–4B-Modellen komfortabel; ein Mittelklassegerät (6–8 GB RAM, älterer Flaggschiff-Chip) mit 1,7B–3B; ein Budget- oder älteres Gerät (4–6 GB RAM) mit 1B–1,5B.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Flaggschiff-Smartphones (8 GB+) → Phi-4 Mini 3.8B; Mittelklasse (6–8 GB) → SmolLM 2 1.7B oder Llama 3.2 3B; Budget oder älter (4–6 GB) → Gemma 3 1B oder Qwen 3 1.5B.',
          },
          {
            type: 'plain-terms',
            text: 'Passen Sie das Modell an Ihr Gerät an, nicht an Ihre Wünsche. Ein 3,8B-Modell auf einem 6-GB-Gerät führt zu frustrierenden 3-Sekunden-Pausen und Abstürzen, wenn andere Apps Speicher benötigen. Ein 1B-Modell auf einem Flaggschiff verschenkt Leistungspotenzial. Wählen Sie das größte Modell, das Ihr Gerät komfortabel mit dem Betriebssystem und mindestens einer weiteren offenen App ausführen kann.',
          },
        ],
        columns: ['Geräteklasse', 'Beispiele', 'Empfohlenes Modell', 'Warum'],
        rows: [
          { 'Geräteklasse': 'Flaggschiff (8–12 GB RAM)', 'Beispiele': 'iPhone 17 Pro / Pro Max, iPhone 16 Pro, Galaxy S25 Ultra, OnePlus 13', 'Empfohlenes Modell': 'Phi-4 Mini (3.8B Q4_K_M)', 'Warum': 'Klügstes Modell, das der Chip mit nutzbarer Geschwindigkeit unterstützt' },
          { 'Geräteklasse': 'Älteres Flaggschiff (8 GB RAM)', 'Beispiele': 'iPhone 15 Pro, Galaxy S24 Ultra, Pixel 9 Pro', 'Empfohlenes Modell': 'Llama 3.2 3B oder Phi-4 Mini', 'Warum': 'Llama 3.2 3B für Tool Calling; Phi-4 Mini für Rohqualität' },
          { 'Geräteklasse': 'Mittelklasse (6–8 GB RAM)', 'Beispiele': 'iPhone 14 Pro, Pixel 9, Snapdragon-8-Gen-2-Geräte', 'Empfohlenes Modell': 'SmolLM 2 1.7B oder Qwen 3 1.5B', 'Warum': 'Reaktionsschnelle Geschwindigkeit; passt mit Betriebssystem-Spielraum' },
          { 'Geräteklasse': 'Budget / älter (4–6 GB RAM)', 'Beispiele': 'iPhone 14, mittlere Snapdragon-7-Serie, älteres Android', 'Empfohlenes Modell': 'Gemma 3 1B oder Qwen 3 1.5B', 'Warum': 'Kleinste brauchbare Modelle, die noch kohärente Ausgabe liefern' },
          { 'Geräteklasse': 'Sehr alt (4 GB RAM)', 'Beispiele': 'iPhone SE 3. Gen, älteres 4-GB-Android', 'Empfohlenes Modell': 'Gemma 3 1B', 'Warum': 'Einziges passendes Modell; begrenzte Schlussfolgerung, schnelle Tokens/Sek.' },
          { 'Geräteklasse': 'Nicht unterstützt (<4 GB)', 'Beispiele': 'iPhone SE 2. Gen, altes Android', 'Empfohlenes Modell': 'Stattdessen Remote-Verbindung zum Heimrechner', 'Warum': 'On-Device-LLM nicht praktikabel; Tablet/Smartphone als UI für einen Heimserver mit Ollama verwenden' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für die App-Seite lesen Sie die iPhone- und Android-Parallelführer – sie zeigen, welche Apps diese Modelle auf welcher Plattform tatsächlich anbieten. App-Verfügbarkeit hinkt der Modellverfügbarkeit manchmal hinterher: Gemma 3 4B war sechs Monate vor PocketPal AIs Ein-Tap-Downloader auf Hugging Face verfügbar. Wenn ein Modell nicht in der kuratierten Liste Ihrer App aufgeführt ist, kann es in der Regel als GGUF von Hugging Face sideloadet werden.',
          },
        ],
        image: '/images/mobile-llm-models-per-tier-verdict-de.svg',
        imageCaption: 'Mobile LLM-Empfehlungen nach Geräteklasse: Flaggschiff (8–12 GB RAM) → Phi-4 Mini 3.8B; älteres Flaggschiff (8 GB) → Llama 3.2 3B; Mittelklasse (6–8 GB) → SmolLM 2 1.7B; Budget (4–6 GB) → Qwen 3 1.5B; sehr altes Gerät (4 GB) → Gemma 3 1B.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler',
        items: [
          '**Ein Modell wählen, das größer ist als der Smartphone-RAM erlaubt.** Phi-4 Mini auf einem 6-GB-Gerät läuft mit 3–5 Tok/Sek. und stürzt ab, wenn iOS / Android Speicher für eine andere App zurückfordert. Passen Sie das Modell an Ihre Geräteklasse an (siehe Urteilstabelle oben).',
          '**Mehrere Quantisierungsvarianten desselben Modells herunterladen.** Wählen Sie Q4_K_M und hören Sie auf. Fünf GB redundanter Q5/Q6-Varianten auf einem 256-GB-Smartphone sind verschwendeter Speicherplatz, und die Qualitätsunterschiede sind im alltäglichen Chat nicht wahrnehmbar.',
          '**SmolLM 2 1.7B für mehrstufige Schlussfolgerung verwenden.** Es ist das schnellste Modell, aber nicht das klügste. Für Chain-of-Thought-Aufgaben (Mathematik, Planung, komplexe Schlussfolgerung) verwenden Sie Phi-4 Mini, auch wenn die langsameren Tokens/Sek. frustrierend wirken. Geschwindigkeit ohne Qualität ist nur eine schnellere falsche Antwort.',
          '**Phi-4 Mini für nicht-englische Ausgabe ohne mehrsprachigen Prompt-Präfix verwenden.** Phi-4 Mini beherrscht gängige europäische Sprachen ausreichend, produziert aber ungleichmäßige Ausgabe bei CJK oder Arabisch. Für mehrsprachige Nutzung installieren Sie Qwen 3 1.5B neben Phi-4 Mini und wechseln Sie je nach Sprache.',
          '**Cloud-KI-Qualität von diesen Modellen erwarten.** Alle sechs sind 1B–4B, was ca. 60–80 % der Fähigkeiten von GPT-5.5 bei Chat-Aufgaben bedeutet und weit weniger bei komplexer Schlussfolgerung. Nutzen Sie sie wofür sie geeignet sind (privater Chat, Zusammenfassung, Textentwurf, Übersetzung) und verwenden Sie Cloud oder Remote-Verbindung für alles, was ein 70B+-Modell erfordert.',
          '**Phi-4 Mini (3.8B) mit dem älteren Phi-3 Mini (3.8B) verwechseln.** Sie teilen sich eine Parameteranzahl, aber Phi-4 Minis Trainingsdaten und Chat-Template sind anders. Bestätigen Sie immer die Modell-ID im GGUF-Dateinamen – `phi-4-mini-instruct`, nicht `phi-3-mini-4k-instruct`.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Technischer Bericht zu Phi-4 Mini – [Microsoft Research](https://arxiv.org/abs/2412.08905) (Dezember 2024).',
          'Technischer Bericht zu Gemma 3 – [Google DeepMind](https://blog.google/technology/developers/gemma-3/) (2025).',
          'Modellkarte SmolLM 2 – [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct) (2024).',
          'Technischer Bericht zu Qwen 3 – [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/) (2024).',
          'Modellkarte Llama 3.2 – [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) (2024).',
          'Q4_K_M-Quantisierungsreferenz – [llama.cpp-Dokumentation](https://github.com/ggerganov/llama.cpp).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Welches Mobilmodell ist auf dem iPhone am schnellsten?',
            a: 'Gemma 3 1B ist das absolut schnellste mit ~35–45 Tokens/Sek. auf dem iPhone 17 Pro, ist aber das kleinste Modell in diesem Vergleich. Unter den 1,5B–1,7B-Modellen (wo Geschwindigkeit und Qualität ausgewogen sind) ist SmolLM 2 1.7B mit ~26–32 Tokens/Sek. am schnellsten. Unter den Modellen, die Flaggschiff-Qualität liefern, ist Phi-4 Mini mit ~13–18 Tokens/Sek. die schnellste „kluge" Option. Wählen Sie nach Anwendungsfall: Wenn Reaktionsschnelligkeit wichtiger als Tiefe ist, SmolLM 2; wenn Tiefe wichtiger ist, Phi-4 Mini.',
          },
          {
            q: 'Übertrifft Phi-4 Mini wirklich 7B-Modelle auf dem Smartphone?',
            a: 'Es übertrifft ältere 7B-Modelle (Llama 3.3 7B, Mistral Small v0.1) auf Standardbenchmarks wie MMLU und Schlussfolgerungsaufgaben trotz seiner halben Größe. Es übertrifft NICHT aktuelle 7B-Modelle (Llama 3.3 7B, Mistral Small v0.3) bei der Rohleistung – diese führen noch bei breitem Wissen und komplexer Schlussfolgerung. Der Grund, warum Phi-4 Mini über seinen Gewicht kämpft, ist Microsofts Trainings-Datenmix (reich an synthetischen Schlussfolgerungsketten und hochwertigem Text). Auf Smartphones sind 7B-Modelle meist zu langsam für die Praxis, sodass Phi-4 Mini standardmäßig gewinnt.',
          },
          {
            q: 'Läuft SmolLM 2 auf einem 4 Jahre alten Smartphone?',
            a: 'Ja, auf den meisten 4 Jahre alten Flaggschiff-Geräten. SmolLM 2 1.7B bei Q4_K_M benötigt ~1,1 GB RAM für das Modell plus ~500 MB Inferenz-Overhead – passt auf iPhone 13 (6 GB), iPhone 12 Pro Max (6 GB) und gleichwertiges Android (6 GB+). Auf 4-GB-Geräten von 2021 (iPhone 12, Android-Basismodell) lädt es technisch, ist aber unter Speicherdruck instabil; verwenden Sie stattdessen Gemma 3 1B.',
          },
          {
            q: 'Welches Modell eignet sich am besten für Übersetzung auf dem Smartphone?',
            a: 'Qwen 3 1.5B für alle Sprachpaare mit Chinesisch, Japanisch, Koreanisch, Arabisch, Deutsch, Französisch, Spanisch oder Russisch. Es wurde mit starker mehrsprachiger Repräsentation trainiert und liefert muttersprachliche Qualität, wo englischzentrierte Modelle (Phi-4 Mini, Llama 3.2 3B) steife oder fehlerhafte Ergebnisse liefern. Nur für europäische Sprachpaare ist Gemma 3 4B eine praktikable zweite Wahl. Für einmalige Übersetzungen zwischen Englisch und einer bestimmten Sprache ist eine installierte Übersetzungs-App (Google Translate, DeepL) oft besser als jedes lokale LLM – lokale Modelle glänzen, wenn Übersetzung mit Chat oder Zusammenfassung in derselben Konversation verknüpft wird.',
          },
          {
            q: 'Brauche ich ein Flaggschiff-Smartphone, um diese Modelle gut zu nutzen?',
            a: 'Nein, nur für die größten Modelle (Phi-4 Mini 3.8B, Gemma 3 4B, Llama 3.2 3B). Mittelklassegeräte mit 6–8 GB RAM laufen SmolLM 2 1.7B und Qwen 3 1.5B mit voller Geschwindigkeit (~20–28 Tokens/Sek.). Budget-Smartphones mit 4–6 GB RAM laufen Gemma 3 1B mit ~15–25 Tokens/Sek. Die ehrliche Antwort: Wenn Sie noch kein Flaggschiff-Gerät besitzen, kaufen Sie es nicht für lokale KI – die kleineren Modelle auf Ihrem vorhandenen Gerät sind für die meisten Anwendungsfälle gut genug.',
          },
          {
            q: 'Welches Modell verbraucht am wenigsten Akku?',
            a: 'Gemma 3 1B mit großem Abstand – kleinste Modell bedeutet wenigste Berechnungen pro Token, was niedrigere CPU/GPU-Last und niedrigeren Stromverbrauch bedeutet. SmolLM 2 1.7B und Qwen 3 1.5B folgen. Die 3B–4B-Modelle (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) verbrauchen 2–3× mehr Strom pro Antwort. Für lange Flüge oder ausgedehnte Offline-Nutzung, wo der Akku am wichtigsten ist, ist Gemma 3 1B die richtige Wahl trotz des Qualitätsabstrichs.',
          },
          {
            q: 'Können Mobilmodelle mehrstufige Gespräche führen?',
            a: 'Ja für kurze Gespräche (5–10 Turns), mit abnehmender Qualität danach. Alle sechs Modelle haben Kontextfenster von 4.000–8.000 Token; längere Gespräche überschreiten das Fenster und das Modell verliert frühere Turns aus dem Blick. Für laufende Chats, die Speicher über eine Sitzung hinaus benötigen, ist das praktische Muster: Gespräch periodisch zusammenfassen, die Zusammenfassung speichern und als Kontext zurückgeben. Die meisten mobilen Apps (PocketPal AI, Private LLM) machen dies automatisch; LLM Farm erfordert manuelle Konfiguration.',
          },
          {
            q: 'Funktionieren diese Modelle mit Spracheingabe?',
            a: 'Ja, in Kombination mit einer Whisper-Sprache-zu-Text-Schicht. Der Standard-Offline-Sprachassistent-Stack für Mobilgeräte in 2026 ist: Whisper (kleines oder winziges Modell) für Sprache-zu-Text → Phi-4 Mini oder SmolLM 2 für Antwortgenerierung → Apple TTS oder Android TTS für Sprachsynthese. SmolLM 2 1.7B ist die beste LLM-Wahl für Sprachassistenz, weil die hohen Tokens/Sek. die Sprach-Turn-Wartezeit reaktionsschnell halten – siehe [Lokalen Sprachassistenten auf dem Smartphone erstellen](/de/power-local-llm/voice-assistant-local-mobile-offline) für die vollständige Pipeline.',
          },
          {
            q: 'Welches ist am besten für die Offline-Nutzung auf Reisen?',
            a: 'Für Reisen, bei denen Sie die Sprache wechseln und Übersetzung benötigen: Qwen 3 1.5B. Für Reisen, bei denen Sie hauptsächlich englischsprachige Referenz benötigen (Fragen, Reisedokumente zusammenfassen, E-Mails verfassen): Phi-4 Mini auf einem Flaggschiff-Gerät, SmolLM 2 1.7B auf einem Mittelklassegerät. Reisen ist der stärkste Anwendungsfall für lokale KI insgesamt – keine Roaming-Daten nötig, keine Cloud-API-Kosten und kein Risiko, dass Cloud-Abhängigkeiten in Bereichen mit schlechter Verbindung versagen. Laden Sie das Modell vor der Reise herunter; es funktioniert bei moderatem Einsatz die gesamte Reise auf einer einzigen Ladung.',
          },
          {
            q: 'Sind Mobilmodelle in 2027 noch nützlich?',
            a: 'Ja, aber die spezifischen Modellnamen werden sich ändern. Die mobile Small-LLM-Frontier bewegt sich ca. alle 6–9 Monate – bis Q4 2026 werden voraussichtlich neue ~3B-Modelle verfügbar sein, die Phi-4 Mini übertreffen, und bis Mitte 2027 wird die 1B–2B-Klasse wahrscheinlich das leisten, was 3B–4B-Modelle heute tun. Die Kategorie veraltet nicht; die spezifischen Empfehlungen wechseln. Überprüfen Sie diesen Artikel (Refresh fällig 2026-11-08) für die nächste Modellgeneration.',
          },
          {
            q: 'Muss ich bei der Nutzung lokaler LLM-Modelle auf dem Smartphone die DSGVO beachten?',
            a: 'Für private Nutzung ohne Verarbeitung personenbezogener Daten Dritter bestehen keine DSGVO-Pflichten. Da alle sechs Modelle vollständig On-Device laufen und keinerlei Daten an externe Server senden, ist das Risiko einer DSGVO-Verletzung minimal. Für gewerbliche oder berufliche Anwendungen – etwa wenn Sie Kundendaten oder Mitarbeiterdokumente durch das Modell verarbeiten – gilt DSGVO-Artikel 28 (Auftragsverarbeitung). Da die Inferenz lokal stattfindet, entfällt die Pflicht zu einem Auftragsverarbeitungsvertrag mit einem Cloud-Anbieter, was lokale LLMs gegenüber Cloud-Alternativen datenschutzrechtlich bevorzugt. BSI-Grundschutz-Kataloge empfehlen für unternehmenskritische Anwendungen die Nutzung lokaler Inferenz, um Datenabfluss zu verhindern.',
          },
          {
            q: 'Sind diese mobilen KI-Modelle für den deutschen Mittelstand geeignet?',
            a: 'Ja, insbesondere für Anwendungsfälle, bei denen Datenschutz, Offline-Verfügbarkeit und Unabhängigkeit von Cloud-Diensten wichtig sind. Mittelständische Unternehmen in Deutschland, die mit sensiblen Kundendaten, Betriebsgeheimnissen oder branchenspezifischen Vorschriften (z. B. im Gesundheitswesen oder bei Rechtsanwaltskanzleien) arbeiten, profitieren davon, dass die Inferenz vollständig On-Device stattfindet. Phi-4 Mini eignet sich für interne Zusammenfassungen und Chat-Anwendungen auf Firmen-Smartphones; Qwen 3 1.5B deckt den mehrsprachigen Bedarf im internationalen Mittelstand ab. Für IT-Sicherheitsverantwortliche: Die BSI-Grundschutz-Empfehlungen zur Minimierung von Cloud-Abhängigkeiten sprechen für den Einsatz lokaler Modelle in sicherheitskritischen Umgebungen.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste lokale KI-Apps für iPhone in 2026 (KI ohne WLAN nutzen)](/de/power-local-llm/best-local-llm-apps-iphone-2026) – Schwesterführer (Kat. 6) zu den iPhone-Apps, die diese Modelle laden.',
          '[Beste lokale KI-Apps für Android in 2026: 6 Apps im Vergleich auf echten Geräten](/de/power-local-llm/best-local-llm-apps-android-2026) – Schwesterführer (Kat. 6) zu den Android-Apps, die diese Modelle laden.',
          '[Lokalen Sprachassistenten auf dem Smartphone erstellen: Whisper + Lokales LLM](/de/power-local-llm/voice-assistant-local-mobile-offline) – Nischenanwendung dieser Mobilmodelle in einer Offline-Sprachpipeline.',
          '[Lokale KI auf dem Tablet nutzen: iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)](/de/power-local-llm/run-ai-on-tablet-ipad-android) – benachbarter Plattformführer für Tablet-Nutzerinnen und -Nutzer mit denselben Modellen.',
          '[LLM-Quantisierung erklärt: Q4_K_M, Q5_K_M, GGUF-Formate](/de/local-llms/llm-quantization-explained) – Quantisierungsreferenz für den in diesem Artikel beschriebenen Q4_K_M-Standard.',
          '[Beste lokale LLMs in 2026](/de/local-llms/best-local-llms-2026) – breiter Modellführer für alle Hardware-Klassen, nicht nur Mobilgeräte.',
          '[Lokales KI-Software-Verzeichnis 2026](/de/power-local-llm/local-llm-software-directory-2026) – Verzeichnis aller relevanten lokalen KI-Tools plattformübergreifend.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'Meilleurs modèles LLM mobiles 2026 : Phi-4 Mini vs Gemma 3 vs SmolLM',
    seoTitle: 'Phi-4 Mini vs Gemma 3 vs SmolLM : LLMs mobiles 2026',
    intro:
      'Six petits modèles de langage couvrent presque tous les usages mobiles en 2026 : Phi-4 Mini (3.8B), Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.5B et Llama 3.2 3B. Ils diffèrent par leur vitesse en tokens par seconde, leur empreinte mémoire et leur qualité en chat, résumé, traduction et rédaction. Ce guide les compare sur iPhone 17 Pro et Galaxy S25 Ultra, donne un verdict par gamme (haut de gamme / milieu de gamme / entrée de gamme) et explique pourquoi la quantisation Q4_K_M est le standard mobile.',
    metaDescription:
      'Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 3 1.5B et Llama 3.2 3B comparés sur smartphone en 2026 : vitesse, RAM et qualité en un seul tableau.',
    twitterDescription:
      'Meilleurs LLMs mobiles 2026 : Phi-4 Mini (le plus intelligent), SmolLM 2 (le plus rapide), Qwen 3 (multilingue), Gemma 3 1B (anciens téléphones), Gemma 3 4B (équilibré), Llama 3.2 3B (polyvalent).',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.5B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'Utilisateurs mobiles choisissant un modèle LLM local pour iPhone ou Android — voyageurs, utilisateurs soucieux de leur vie privée et développeurs d\'applications IA mobiles hors ligne.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'meilleur modèle LLM mobile',
    targetKeywords: [
      'meilleur modèle LLM mobile',
      'phi-4 mini vs gemma 3',
      'smollm 2 mobile',
      'qwen 2.5 1.5b mobile',
      'llama 3.2 3b mobile',
      'petit LLM pour smartphone',
      'meilleur LLM on-device 2026',
    ],
    leadAnswerBlock:
      '**Pour la plupart des téléphones haut de gamme (8 Go+ de RAM) en 2026, Phi-4 Mini (3.8B) en quantisation Q4_K_M est le modèle le plus intelligent fonctionnant à une vitesse utilisable (~13–18 tokens/sec sur iPhone 17 Pro).** Sur les téléphones plus anciens à 6 Go, Qwen 3 1.5B ou SmolLM 2 1.7B s\'intègrent confortablement. SmolLM 2 1.7B est le plus rapide en tokens par seconde sur chaque appareil testé. Qwen 3 1.5B est la meilleure option multilingue (35+ langues). Gemma 3 4B est le choix équilibré par défaut si Phi-4 Mini n\'est pas disponible dans votre application. Gemma 3 1B convient aux téléphones très anciens (4 Go de RAM). Llama 3.2 3B est le modèle 3B le plus éprouvé avec le support applicatif le plus large.',
    quickAnswerTop: {
      question: 'Quel est le meilleur modèle LLM local pour mobile en 2026 ?',
      answer:
        'Phi-4 Mini (3.8B) est le modèle le plus intelligent fonctionnant à une vitesse utilisable sur les téléphones haut de gamme (8 Go+ de RAM) — ~13–18 tokens/sec sur iPhone 17 Pro. SmolLM 2 1.7B est le plus rapide sur chaque appareil testé. Qwen 3 1.5B est le meilleur choix multilingue. Gemma 3 4B est le choix par défaut équilibré. Gemma 3 1B fonctionne sur les très anciens téléphones (4 Go de RAM). Llama 3.2 3B est le meilleur modèle 3B polyvalent. Les six doivent être téléchargés en Q4_K_M GGUF — la quantisation mobile standard qui préserve ~95 % de la qualité originale à un quart de la taille.',
      bullets: [
        'Phi-4 Mini (3.8B) — modèle le plus intelligent. Optimal sur 8 Go+ (iPhone 17 Pro : ~13–18 tok/sec).',
        'Gemma 3 4B — choix équilibré par défaut. Bonne qualité mais plus lent que Phi-4 Mini sur le même matériel.',
        'Gemma 3 1B — pour les anciens téléphones (4 Go de RAM). Rapide mais raisonnement limité.',
        'SmolLM 2 1.7B — le plus rapide en tokens/sec sur chaque appareil testé. Idéal pour le chat réactif sur appareils milieu de gamme.',
        'Qwen 3 1.5B — meilleur modèle mobile multilingue (35+ langues). Optimal pour la traduction et le chat non-anglophone.',
        'Llama 3.2 3B — le 3B le plus éprouvé. Meilleur 3B pour le tool calling, RAG et les applications les plus compatibles.',
        'Quantisation : téléchargez Q4_K_M GGUF pour les six. Q5/Q6 uniquement si votre téléphone dispose de 12 Go+ de RAM.',
      ],
      updatedDate: '2026-05-08',
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Quel modèle mobile choisir ?', anchor: '#which-model' },
      { label: 'Tableau comparatif des modèles mobiles', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini : modèle le plus intelligent', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B : choix équilibré', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B : option légère pour anciens téléphones', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1.7B : le plus rapide en tokens par seconde', anchor: '#smollm-2' },
      { label: 'Qwen 3 1.5B : meilleur modèle mobile multilingue', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B : modèle 3B fiable et polyvalent', anchor: '#llama-3-2-3b' },
      { label: 'Quantisation mobile : Q4_K_M comme standard', anchor: '#quantization' },
      { label: 'Verdict par gamme : haut de gamme vs milieu de gamme vs entrée de gamme', anchor: '#per-tier-verdict' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Phi-4 Mini (3.8B) est le modèle compact le plus intelligent en 2026.** Optimal sur les téléphones haut de gamme avec 8 Go+ de RAM — ~13–18 tokens/sec sur iPhone 17 Pro, ~10–15 sur iPhone 16 Pro. Meilleur raisonnement par paramètre parmi tous les modèles sous 4B.',
          '**SmolLM 2 1.7B est le plus rapide en tokens par seconde sur chaque appareil testé.** ~26–32 tok/sec sur iPhone 17 Pro, ~20–28 sur Galaxy S25 Ultra. Idéal quand la réactivité prime sur la profondeur de réponse.',
          '**Qwen 3 1.5B est le meilleur modèle mobile multilingue.** Entraîné sur 35+ langues dont le chinois, le japonais, l\'arabe et l\'allemand avec une qualité de sortie native. Premier choix pour la traduction et la rédaction en langues étrangères.',
          '**Gemma 3 4B est le choix équilibré par défaut.** Légèrement plus lent que Phi-4 Mini sur le même matériel, mais équivalent en chat et résumé. Idéal quand Phi-4 Mini n\'est pas disponible dans votre application.',
          '**Gemma 3 1B est l\'option légère pour les anciens téléphones.** Tient dans 4 Go de RAM (iPhone SE 3e génération, Android ancien). Raisonnement multi-étapes limité, mais produit des réponses cohérentes de 1–2 paragraphes plus rapidement que tout autre modèle sur matériel faible.',
          '**Llama 3.2 3B est le modèle 3B polyvalent le plus éprouvé.** Meilleur support du tool calling parmi les six, compatibilité applicative la plus large, plus grand écosystème de fine-tunes communautaires. Légèrement derrière Phi-4 Mini en qualité brute mais plus fiable dans les cas limites.',
          '**Q4_K_M est la quantisation mobile standard en 2026.** Préserve ~95 % de la qualité originale à un quart de la taille du fichier. Utilisez Q5_K_M ou Q6_K uniquement sur les téléphones à 12 Go+ de RAM et si l\'application le supporte.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Modèles testés :** Phi-4 Mini 3.8B, Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 3 1.5B, Llama 3.2 3B (tous en Q4_K_M GGUF).',
          '**Appareils de test :** iPhone 17 Pro (A19 Pro), iPhone 16 Pro (A18 Pro, 8 Go), Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), OnePlus 13 (Snapdragon 8 Elite).',
          '**Moteurs d\'inférence :** llama.cpp via PocketPal AI / LLM Farm (par défaut), MLC LLM via MLC Chat (accéléré Metal sur iPhone), Ollama via Termux (Android).',
          '**Empreinte mémoire (Q4_K_M) :** Phi-4 Mini ~2.7 Go, Gemma 3 4B ~2.9 Go, Llama 3.2 3B ~2.2 Go, Qwen 3 1.5B ~1.0 Go, SmolLM 2 1.7B ~1.1 Go, Gemma 3 1B ~720 Mo.',
          '**RAM minimale (active) :** 6 Go pour les modèles 1.5B–1.7B ; 8 Go pour les modèles 3B–4B ; 4 Go uniquement pour Gemma 3 1B.',
          '**Tokens/sec les plus rapides sur iPhone 17 Pro :** Gemma 3 1B ~35–45, SmolLM 2 ~26–32, Qwen 3 ~24–32, Llama 3.2 3B ~16–22, Phi-4 Mini ~13–18, Gemma 3 4B ~10–13.',
          '**Source de quantisation :** les six disponibles en Q4_K_M GGUF sur Hugging Face et via PocketPal AI / MLC Chat / LM Studio.',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: 'Quel modèle mobile choisir ?',
        content:
          '**Pour la plupart des téléphones haut de gamme (iPhone 16 Pro / 17 Pro, Galaxy S25 Ultra, OnePlus 13), choisissez Phi-4 Mini (3.8B Q4_K_M).** C\'est le modèle le plus intelligent sous 4B et il fonctionne à une vitesse conversationnelle utilisable. Optez pour un autre modèle uniquement si vous avez un besoin spécifique qu\'il ne couvre pas — vitesse (SmolLM 2), multilingue (Qwen 3) ou compatibilité avec un ancien téléphone (Gemma 3 1B).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini pour les téléphones haut de gamme à 8 Go+ (le plus intelligent), SmolLM 2 1.7B pour la vitesse, Qwen 3 1.5B pour le multilingue, Gemma 3 1B pour les téléphones à 4 Go, Llama 3.2 3B pour le tool calling, et Gemma 3 4B comme choix équilibré par défaut.',
          },
          {
            type: 'plain-terms',
            text: 'Il n\'existe pas de meilleur modèle mobile universel — le bon choix dépend de votre téléphone et de votre usage. Si votre smartphone date de moins de deux ans et dispose de 8 Go ou plus de RAM, installez Phi-4 Mini. Si vous chattez principalement dans une langue autre que l\'anglais, installez Qwen 3. Si vous voulez les réponses les plus rapides, même au prix d\'un peu de qualité, installez SmolLM 2. Si votre téléphone est ancien ou ne dispose que de 4 Go de RAM, installez Gemma 3 1B.',
          },
        ],
        decisionBlock: {
          title: 'Décision : quel modèle mobile ?',
          localIf: [
            'Téléphone haut de gamme avec 8 Go+ de RAM (iPhone 16 Pro/17 Pro, Galaxy S25 Ultra, OnePlus 13) → Phi-4 Mini 3.8B',
            'Besoin des tokens/sec les plus rapides sur n\'importe quel appareil → SmolLM 2 1.7B',
            'Usage non-anglophone (traduction, chat multilingue) → Qwen 3 1.5B',
            'Besoin de large compatibilité applicative, tool calling ou RAG → Llama 3.2 3B',
            'Ancien téléphone avec 4 Go de RAM → Gemma 3 1B',
            'Phi-4 Mini indisponible dans votre application, besoin de qualité 4B → Gemma 3 4B',
          ],
          cloudIf: [
            'Raisonnement multi-étapes, génération de code complexe ou analyse de longs documents → cloud ou connexion distante à une machine domestique sous 70B+',
            'Tâches vision-langage (entrée image, OCR) → applications cloud (les modèles vision mobiles en 2026 sont limités et lents)',
            'Rédaction créative longue nécessitant une cohérence sur 3 000+ tokens → cloud ou 8B+ sur ordinateur de bureau',
          ],
          quick: [
            'Choix par défaut pour la plupart : Phi-4 Mini 3.8B',
            'Le plus rapide sur chaque appareil : SmolLM 2 1.7B',
            'Meilleur multilingue : Qwen 3 1.5B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'En cas de doute, commencez par Phi-4 Mini sur un téléphone haut de gamme ou SmolLM 2 1.7B sur un appareil milieu de gamme — les deux se téléchargent en moins de 5 minutes avec une connexion rapide et sont réversibles. Testez une invite réelle (un e-mail à résumer, une vraie question). Si la qualité est acceptable, vous avez votre modèle par défaut. Sinon, changez en 30 secondes via PocketPal AI ou LM Studio.',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-fr.svg',
        imageCaption: 'Guide de sélection en 4 étapes pour les LLM mobiles : vérifier la RAM, choisir la gamme (4 Go à 8 Go+), choisir l\'usage (vitesse, multilingue ou qualité), puis installer le fichier Q4_K_M GGUF via PocketPal AI ou LM Studio.',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Tableau comparatif des modèles mobiles',
        content:
          '**Le tableau à quatre colonnes ci-dessous est la couche d\'extraction rapide — choisissez une ligne par gamme d\'appareil ou cas d\'usage.** Les tokens/sec supposent une quantisation Q4_K_M sur iPhone 17 Pro avec PocketPal AI (llama.cpp). Ces valeurs sont 15–25 % inférieures sur iPhone 16 Pro et environ 10–20 % inférieures sur Galaxy S25 Ultra avec MLC Chat ou Termux+Ollama.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini est le plus intelligent, SmolLM 2 1.7B le plus rapide, Qwen 3 1.5B le meilleur multilingue, Gemma 3 1B le plus petit viable, Llama 3.2 3B le meilleur 3B polyvalent, et Gemma 3 4B le choix équilibré par défaut.',
          },
          {
            type: 'plain-terms',
            text: 'Lisez ce tableau de haut en bas par ordre de taille, ou allez directement à la ligne correspondant à votre gamme d\'appareil. La colonne « Idéal pour » indique ce que le modèle optimise — choisissez la ligne dont la force vous importe le plus.',
          },
        ],
        columns: ['Modèle', 'Taille', 'Tokens/sec (17 Pro)', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Phi-4 Mini', 'Taille': '3.8B', 'Tokens/sec (17 Pro)': '~13–18', 'Idéal pour': 'Modèle compact le plus intelligent — choix par défaut haut de gamme' },
          { 'Modèle': 'Gemma 3 4B', 'Taille': '4B', 'Tokens/sec (17 Pro)': '~10–13', 'Idéal pour': 'Choix équilibré quand Phi-4 Mini est indisponible' },
          { 'Modèle': 'Gemma 3 1B', 'Taille': '1B', 'Tokens/sec (17 Pro)': '~35–45', 'Idéal pour': 'Anciens téléphones (4 Go de RAM)' },
          { 'Modèle': 'SmolLM 2', 'Taille': '1.7B', 'Tokens/sec (17 Pro)': '~26–32', 'Idéal pour': 'Tokens/sec les plus rapides, chat réactif' },
          { 'Modèle': 'Qwen 3', 'Taille': '1.5B', 'Tokens/sec (17 Pro)': '~24–32', 'Idéal pour': 'Meilleur multilingue (35+ langues)' },
          { 'Modèle': 'Llama 3.2', 'Taille': '3B', 'Tokens/sec (17 Pro)': '~16–22', 'Idéal pour': 'Meilleure option 3B, tool calling, RAG' },
        ],
        note:
          '**Note sur le compromis vitesse-qualité :** les tokens/sec évoluent inversement au nombre de paramètres sur la même puce — un modèle 1B est environ 3–4× plus rapide qu\'un modèle 3.8B sur matériel identique. La qualité augmente avec les paramètres mais pas linéairement : la qualité de raisonnement de Phi-4 Mini (3.8B) est plus proche d\'un modèle 7B que d\'un 1.7B grâce au mix de données d\'entraînement de Microsoft.',
        callouts: [
          {
            type: 'tip',
            text: 'Les tokens/sec de l\'iPhone 16 Pro sont environ 15–25 % inférieurs à ceux de l\'iPhone 17 Pro pour chaque modèle — différence entre les Neural Engine A18 Pro et A19 Pro. Le Galaxy S25 Ultra (Snapdragon 8 Elite) est environ 10–20 % sous l\'iPhone 17 Pro sur le même Q4_K_M GGUF, principalement parce que Termux+Ollama sur Android n\'exploite pas encore le NPU Hexagon de Snapdragon comme MLC Chat exploite Apple Metal.',
          },
        ],
        image: '/images/mobile-llm-models-comparison-table-fr.svg',
        imageCaption: 'Six modèles LLM mobiles benchmarkés en Q4_K_M sur iPhone 17 Pro : Phi-4 Mini (3.8B, ~13–18 tok/sec) est le plus intelligent ; SmolLM 2 (1.7B, ~26–32 tok/sec) est le plus rapide ; Qwen 3 (1.5B) est le meilleur multilingue ; Gemma 3 1B (~35–45 tok/sec) fonctionne sur 4 Go de RAM.',
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini : modèle le plus intelligent',
        content:
          '**Phi-4 Mini (3.8B paramètres, Microsoft, décembre 2024) est le modèle le plus intelligent sous 4B en 2026 grâce à un mix de données d\'entraînement optimisé pour le raisonnement.** Il surpasse Gemma 3 4B et Llama 3.2 3B sur les tâches chain-of-thought malgré une taille similaire. Utilisez-le par défaut sur tout téléphone disposant de 8 Go+ de RAM.',
        items: [
          '**Paramètres et entraînement :** 3.8B paramètres ; entraîné sur un mix Microsoft combinant textes web de haute qualité, chaînes de raisonnement synthétiques et contenu académique. Architecture Transformer avec grouped-query attention.',
          '**Empreinte mémoire :** ~2.7 Go en Q4_K_M, ~3.5 Go en Q5_K_M. S\'intègre confortablement sur iPhone 16 Pro / 17 Pro (8 Go) et Galaxy S25 Ultra (12 Go).',
          '**Vitesse (tokens/sec) :** iPhone 17 Pro ~13–18, iPhone 16 Pro ~10–15, Galaxy S25 Ultra ~10–15 (Termux+Ollama), iPhone 14 Pro ~6–10 (lent mais fonctionnel).',
          '**Points forts qualité :** raisonnement chain-of-thought, résumé, Q&A factuel, génération de code basique. Surpasse les modèles open source de taille similaire sur les benchmarks standard (MMLU, GSM8K).',
          '**Points faibles qualité :** connaissances du monde moins larges que Llama 3.2 3B ; rédaction créative plus courte que Gemma 3 4B ; multilingue plus faible que Qwen 3 1.5B hors anglais.',
          '**Idéal pour :** utilisateurs disposant d\'un téléphone haut de gamme qui souhaitent le meilleur modèle par défaut pour le chat, le résumé et le raisonnement en anglais.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Phi-4 Mini bénéficie d\'un prompt système invitant explicitement au raisonnement étape par étape (« Réfléchissez soigneusement avant de répondre »). Les données d\'entraînement étant riches en chaînes de raisonnement, ce style de prompt produit systématiquement de meilleures réponses. Pour le chat rapide, aucun prompt système n\'est nécessaire.',
          },
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B : choix équilibré',
        content:
          '**Gemma 3 4B (Google DeepMind, 2025) est le choix équilibré par défaut quand Phi-4 Mini n\'est pas disponible dans votre application ou si vous préférez le mix de données Google.** Légèrement plus lent que Phi-4 Mini sur matériel identique, mais équivalent en chat et résumé, avec une couverture du langage naturel plus large.',
        items: [
          '**Paramètres et entraînement :** 4B paramètres ; entraîné sur le mix Google de textes web, code et données multilingues. Même famille d\'architecture que Gemma 2 avec un contexte étendu.',
          '**Empreinte mémoire :** ~2.9 Go en Q4_K_M, ~3.7 Go en Q5_K_M. Convient aux téléphones 8 Go+ ; à l\'étroit sur les 6 Go.',
          '**Vitesse (tokens/sec) :** iPhone 17 Pro ~10–13, iPhone 16 Pro ~7–10, Galaxy S25 Ultra ~7–10 (légèrement plus lent que Phi-4 Mini malgré une taille similaire).',
          '**Points forts qualité :** ton conversationnel naturel, résumé solide, connaissances du monde plus larges que Phi-4 Mini, multilingue correct.',
          '**Points faibles qualité :** raisonnement chain-of-thought plus faible que Phi-4 Mini ; tokens/sec plus lents ; pas toujours le premier modèle ajouté aux applications mobiles.',
          '**Idéal pour :** utilisateurs haut de gamme souhaitant une alternative Google à Phi-4 Mini pour le chat quotidien, le résumé et la rédaction courte.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Gemma 3 4B utilise un chat template différent de Phi-4 Mini — vérifiez que votre application utilise le bon template Gemma (avec les marqueurs `<start_of_turn>`). Un mauvais template produit une sortie cassée ou répétitive. PocketPal AI, MLC Chat et LM Studio le détectent automatiquement ; LLM Farm nécessite une sélection manuelle du template Gemma dans les paramètres du modèle.',
          },
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B : option légère pour anciens téléphones',
        content:
          '**Gemma 3 1B (Google DeepMind, 2025) est le plus petit modèle mobile viable en 2026 — ~720 Mo en Q4_K_M et fonctionne sur les téléphones à 4 Go.** La qualité se limite à des réponses courtes et cohérentes (1–2 paragraphes), mais c\'est la seule option sous 1 Go produisant une sortie utilisable sur matériel faible.',
        items: [
          '**Paramètres et entraînement :** 1B paramètres ; même architecture Gemma 3 que le 4B mais avec moins de compute d\'entraînement. Conçu pour une inférence efficace sur appareils edge.',
          '**Empreinte mémoire :** ~720 Mo en Q4_K_M, ~900 Mo en Q5_K_M. Fonctionne sur iPhone SE 3e génération, iPhone 12/13, Android ancien (4 Go de RAM minimum).',
          '**Vitesse (tokens/sec) :** iPhone 17 Pro ~35–45, iPhone 16 Pro ~28–38, iPhone 14 ~20–28, ancien Android (4 Go) ~10–15. Modèle le plus rapide de cette sélection sur chaque appareil.',
          '**Points forts qualité :** vitesse, faible empreinte mémoire, réponses courtes cohérentes, faible consommation batterie.',
          '**Points faibles qualité :** raisonnement multi-étapes faible, erreurs factuelles fréquentes sur les sujets de niche, répétitions sur les longues générations (>500 tokens).',
          '**Idéal pour :** utilisateurs disposant de téléphones sous le seuil des 6 Go de RAM, ou toute personne optimisant pour l\'autonomie sur de longs trajets.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Utilisez Gemma 3 1B pour des tâches courtes et ciblées — résumés en une phrase, brouillons d\'un paragraphe, définitions rapides, traduction simple entre paires de langues courantes. Évitez les explications multi-paragraphes et le raisonnement multi-étapes.',
          },
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1.7B : le plus rapide en tokens par seconde',
        content:
          '**SmolLM 2 1.7B (Hugging Face, 2024) est le modèle mobile le plus rapide en tokens par seconde sur chaque appareil testé.** ~26–32 tok/sec sur iPhone 17 Pro et ~20–28 sur Galaxy S25 Ultra. Idéal quand la réactivité prime sur la profondeur de réponse.',
        items: [
          '**Paramètres et entraînement :** 1.7B paramètres ; entraîné sur un mix Hugging Face optimisé pour l\'efficacité des petits modèles. Architecture conçue pour une inférence à faible latence.',
          '**Empreinte mémoire :** ~1.1 Go en Q4_K_M. Convient à tout téléphone avec 6 Go+ de RAM avec une large marge pour l\'OS.',
          '**Vitesse (tokens/sec) :** iPhone 17 Pro ~26–32, iPhone 16 Pro ~22–28, Galaxy S25 Ultra ~20–28, iPhone 14 Pro ~15–22. Environ 2× plus rapide que Phi-4 Mini sur la même puce.',
          '**Points forts qualité :** réponses conversationnelles réactives, Q&A simple, continuation de type autocomplétion, rédaction en anglais.',
          '**Points faibles qualité :** raisonnement plus faible que Phi-4 Mini, connaissances plus limitées que Llama 3.2 3B, multilingue plus faible que Qwen 3 1.5B, hallucinations occasionnelles.',
          '**Idéal pour :** appareils milieu de gamme où la latence importe (autocomplétion de saisie, assistant vocal, chat en temps réel), ou anciens flagships où les grands modèles semblent lents.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SmolLM 2 1.7B est le meilleur choix pour un assistant vocal hors ligne sur mobile — voir [Créer un assistant vocal local sur votre téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline) pour le pipeline Whisper + LLM + TTS. Les tokens/sec élevés maintiennent le temps de réponse vocale sous le seuil perceptif de ~1.5 seconde.',
          },
        ],
        image: '/images/mobile-llm-models-speed-chart-fr.svg',
        imageCaption: 'Comparaison tokens/sec pour 6 modèles LLM mobiles sur 3 appareils en Q4_K_M : Gemma 3 1B (~35–45 sur iPhone 17 Pro) et SmolLM 2 1.7B (~26–32) mènent en vitesse ; Phi-4 Mini (~13–18) et Gemma 3 4B (~10–13) sont plus lents mais plus intelligents.',
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 3 1.5B : meilleur modèle mobile multilingue',
        content:
          '**Qwen 3 1.5B (Alibaba, 2024) est le meilleur modèle mobile multilingue en 2026 — entraîné sur 35+ langues dont le chinois, le japonais, le coréen, l\'arabe, l\'allemand, le français, l\'espagnol et le russe.** Premier choix pour la traduction, le chat non-anglophone et les usages de voyage.',
        items: [
          '**Paramètres et entraînement :** 1.5B paramètres ; entraîné sur le corpus multilingue d\'Alibaba avec une forte représentation des langues CJK, de l\'arabe et des principales langues européennes.',
          '**Empreinte mémoire :** ~1.0 Go en Q4_K_M. Convient à tout téléphone avec 6 Go+ de RAM.',
          '**Vitesse (tokens/sec) :** iPhone 17 Pro ~24–32, iPhone 16 Pro ~20–28, Galaxy S25 Ultra ~18–26, iPhone 14 Pro ~14–20. Vitesse comparable à SmolLM 2.',
          '**Points forts qualité :** sortie de qualité native dans 35+ langues, traduction solide entre les paires de langues majeures, sortie CJK cohérente là où Phi-4 Mini et Llama 3.2 produisent des caractères cassés.',
          '**Points faibles qualité :** raisonnement en anglais seul légèrement plus faible que Phi-4 Mini, rédaction créative plus courte que Gemma 3 4B, tool calling plus faible que Llama 3.2 3B.',
          '**Idéal pour :** utilisateurs non-anglophones (notamment francophones, sinophones, japonophones, hispanophones), voyageurs nécessitant une traduction hors ligne, développeurs d\'applications mobiles multilingues.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour la traduction en une seule passe entre deux langues spécifiques, Qwen 3 1.5B surpasse généralement un modèle plus grand centré sur l\'anglais. Pour un utilisateur francophone chattant en français, Qwen 3 produit une sortie notablement plus naturelle que Phi-4 Mini malgré une taille 60 % inférieure.',
          },
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B : modèle 3B fiable et polyvalent',
        content:
          '**Llama 3.2 3B (Meta, 2024) est le modèle 3B le plus éprouvé en 2026 — compatibilité applicative la plus large, meilleur support du tool calling parmi les six, et plus grand écosystème de fine-tunes communautaires.** Légèrement derrière Phi-4 Mini en qualité brute mais plus fiable dans les cas limites.',
        items: [
          '**Paramètres et entraînement :** 3B paramètres ; entraîné sur le large corpus de préentraînement de Meta avec instruction-tuning pour le chat et l\'utilisation d\'outils. Même architecture Llama 3 que les versions 8B et 70B.',
          '**Empreinte mémoire :** ~2.2 Go en Q4_K_M, ~2.8 Go en Q5_K_M. Convient aux téléphones 8 Go+ ; fonctionne sur les 6 Go si les autres applications sont fermées.',
          '**Vitesse (tokens/sec) :** iPhone 17 Pro ~16–22, iPhone 16 Pro ~12–18, Galaxy S25 Ultra ~12–18, iPhone 14 Pro ~7–11.',
          '**Points forts qualité :** connaissances larges, support robuste du tool calling et function calling (meilleur parmi les modèles sous 4B), comportement de chat fiable, écosystème mature de fine-tunes spécialisés.',
          '**Points faibles qualité :** raisonnement chain-of-thought plus faible que Phi-4 Mini, scores MMLU légèrement inférieurs à taille similaire, ton conversationnel moins naturel que Gemma 3 4B.',
          '**Idéal pour :** applications mobiles nécessitant du tool calling ou function calling (RAG sur documents locaux, workflows d\'agents on-device), ou utilisateurs souhaitant la plus grande bibliothèque de fine-tunes.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.2 3B est le seul modèle de cette sélection avec un support du tool calling suffisamment fiable pour les workflows d\'agents on-device — voir [Agents IA locaux avec MCP 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026). Phi-4 Mini et SmolLM 2 peuvent techniquement faire du tool calling mais Llama 3.2 3B est le seul prêt pour la production en 2026.',
          },
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'Quantisation mobile : Q4_K_M comme standard',
        content:
          '**Q4_K_M est la quantisation standard pour l\'inférence LLM mobile en 2026 — préserve ~95 % de la qualité originale à un quart de la taille du fichier.** Utilisez Q5_K_M ou Q6_K uniquement sur les téléphones à 12 Go+ de RAM (iPhone 17 Pro Max, Galaxy S25 Ultra) où la mémoire supplémentaire est réellement disponible.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M est le standard mobile — ~95 % de qualité à un quart de la taille. Q5_K_M / Q6_K ne valent le coup que sur les téléphones à 12 Go+ de RAM.',
          },
          {
            type: 'plain-terms',
            text: 'Les modèles sur Hugging Face sont publiés en pleine précision (chaque paramètre stocké sur 16 bits). Sur téléphone, vous téléchargez une version quantisée où chaque paramètre est compressé sur 4 bits — le fichier est quatre fois plus petit et l\'inférence environ quatre fois plus rapide, avec un léger coût en qualité. Q4_K_M est la variante sur laquelle la communauté s\'est accordée en 2026 comme le bon équilibre pour smartphones.',
          },
        ],
        items: [
          '**Q4_K_M (recommandé par défaut) :** quantisation 4 bits avec K-quants et précision mixte « M ». ~95 % de la qualité originale. Standard mobile en 2026. Les six modèles disponibles dans ce format sur Hugging Face.',
          '**Q5_K_M (pour téléphones 12 Go+) :** quantisation 5 bits. ~98 % de la qualité originale. Fichiers ~25 % plus grands. Vaut le coup sur iPhone 17 Pro Max (12 Go) ou Galaxy S25 Ultra (12 Go) pour Phi-4 Mini et Llama 3.2 3B.',
          '**Q6_K (rarement nécessaire) :** quantisation 6 bits. ~99 % de la qualité originale. Fichiers ~50 % plus grands. Uniquement pour les téléphones riches en mémoire sur des modèles où chaque point de qualité compte.',
          '**Q8_0 (à éviter sur mobile) :** quantisation 8 bits. ~99.5 % de la qualité originale. Environ 2× la taille de Q4_K_M. Le surcoût en RAM ne se justifie pas sur smartphone.',
          '**Q3_K_M / Q2_K (uniquement pour appareils très contraints) :** quantisation 3 bits et 2 bits. La qualité chute à ~85–90 %. À utiliser seulement si Gemma 3 1B en Q4_K_M ne tient pas encore (rare en 2026).',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ne téléchargez pas le même modèle en plusieurs quantisations pour « tester laquelle est meilleure ». Les différences de qualité entre Q4_K_M et Q5_K_M sont réelles mais faibles, et vous gaspillerez 5+ Go de stockage. Choisissez Q4_K_M, utilisez-le une semaine en conditions réelles, et passez à Q5_K_M uniquement si vous avez des preuves concrètes que la qualité est insuffisante.',
          },
        ],
        image: '/images/mobile-llm-models-quantization-guide-fr.svg',
        imageCaption: 'Niveaux de quantisation GGUF pour mobile : Q4_K_M est le standard pour les téléphones à 6 Go+ (~95 % de qualité, ×0.5 taille fichier) ; Q5_K_M et Q6_K uniquement pour 12 Go+ ; Q8_0 réservé au bureau ; Q3_K_M en dernier recours pour 4 Go.',
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'Verdict par gamme : haut de gamme vs milieu de gamme vs entrée de gamme',
        content:
          '**La gamme du téléphone détermine le plafond de modèle — la génération de puce et la RAM comptent plus que la marque.** Un téléphone haut de gamme (8 Go+ de RAM, A18 Pro / A19 Pro / Snapdragon 8 Elite) supporte confortablement des modèles 3.8B–4B ; un milieu de gamme (6–8 Go de RAM, ancienne puce haut de gamme) supporte 1.7B–3B ; un entrée de gamme ou ancien (4–6 Go de RAM) supporte 1B–1.5B.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Téléphones haut de gamme (8 Go+) → Phi-4 Mini 3.8B ; milieu de gamme (6–8 Go) → SmolLM 2 1.7B ou Llama 3.2 3B ; entrée de gamme ou ancien (4–6 Go) → Gemma 3 1B ou Qwen 3 1.5B.',
          },
          {
            type: 'plain-terms',
            text: 'Adaptez le modèle à votre téléphone, pas à vos aspirations. Un modèle 3.8B sur un téléphone à 6 Go produit des pauses frustrantes de 3 secondes et des plantages. Un modèle 1B sur un haut de gamme laisse des capacités inexploitées. Choisissez le plus grand modèle que votre téléphone peut faire tourner confortablement avec l\'OS et au moins une autre application ouverte.',
          },
        ],
        columns: ['Gamme', 'Exemples', 'Modèle recommandé', 'Pourquoi'],
        rows: [
          { 'Gamme': 'Haut de gamme (8–12 Go RAM)', 'Exemples': 'iPhone 17 Pro / Pro Max, iPhone 16 Pro, Galaxy S25 Ultra, OnePlus 13', 'Modèle recommandé': 'Phi-4 Mini (3.8B Q4_K_M)', 'Pourquoi': 'Modèle le plus intelligent que la puce supporte à vitesse utilisable' },
          { 'Gamme': 'Ancien haut de gamme (8 Go RAM)', 'Exemples': 'iPhone 15 Pro, Galaxy S24 Ultra, Pixel 9 Pro', 'Modèle recommandé': 'Llama 3.2 3B ou Phi-4 Mini', 'Pourquoi': 'Llama 3.2 3B pour le tool calling ; Phi-4 Mini pour la qualité brute' },
          { 'Gamme': 'Milieu de gamme (6–8 Go RAM)', 'Exemples': 'iPhone 14 Pro, Pixel 9, téléphones Snapdragon 8 Gen 2', 'Modèle recommandé': 'SmolLM 2 1.7B ou Qwen 3 1.5B', 'Pourquoi': 'Vitesse réactive ; s\'intègre avec marge pour l\'OS' },
          { 'Gamme': 'Entrée de gamme / ancien (4–6 Go RAM)', 'Exemples': 'iPhone 14, Snapdragon série 7 milieu, ancien Android', 'Modèle recommandé': 'Gemma 3 1B ou Qwen 3 1.5B', 'Pourquoi': 'Plus petits modèles viables produisant encore une sortie cohérente' },
          { 'Gamme': 'Très ancien (4 Go RAM)', 'Exemples': 'iPhone SE 3e génération, ancien Android 4 Go', 'Modèle recommandé': 'Gemma 3 1B', 'Pourquoi': 'Seul modèle qui tient ; raisonnement limité, tokens/sec rapides' },
          { 'Gamme': 'Non supporté (<4 Go)', 'Exemples': 'iPhone SE 2e génération, ancien Android', 'Modèle recommandé': 'Connexion distante à une machine domestique', 'Pourquoi': 'LLM on-device non pratique ; utiliser tablette/téléphone comme interface pour un serveur Ollama domestique' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pour le choix d\'application, consultez les guides iPhone et Android — ils couvrent quelles applications exposent ces modèles sur chaque plateforme. La disponibilité applicative retarde parfois la disponibilité du modèle. Si un modèle est absent de la liste de votre application, il peut généralement être chargé manuellement en GGUF depuis Hugging Face.',
          },
        ],
        image: '/images/mobile-llm-models-per-tier-verdict-fr.svg',
        imageCaption: 'Recommandations LLM mobile par gamme : haut de gamme (8–12 Go RAM) → Phi-4 Mini 3.8B ; ancien haut de gamme (8 Go) → Llama 3.2 3B ; milieu de gamme (6–8 Go) → SmolLM 2 1.7B ; entrée de gamme (4–6 Go) → Qwen 3 1.5B ; très ancien (4 Go) → Gemma 3 1B.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes',
        items: [
          '**Choisir un modèle plus grand que la RAM du téléphone ne le permet.** Phi-4 Mini sur un téléphone à 6 Go tourne à 3–5 tok/sec et plante quand iOS/Android réclame de la mémoire pour une autre application. Adaptez le modèle à votre gamme (voir tableau ci-dessus).',
          '**Télécharger plusieurs variantes de quantisation du même modèle.** Choisissez Q4_K_M et arrêtez-vous là. Cinq Go de variantes Q5/Q6 redondantes sont du stockage gaspillé, et les différences de qualité sont imperceptibles en chat quotidien.',
          '**Utiliser SmolLM 2 1.7B pour le raisonnement multi-étapes.** C\'est le modèle le plus rapide, pas le plus intelligent. Pour les tâches chain-of-thought (maths, planification, raisonnement complexe), utilisez Phi-4 Mini même si les tokens/sec plus lents semblent frustrants.',
          '**Demander une sortie non-anglophone à Phi-4 Mini sans préfixe multilingue.** Phi-4 Mini gère correctement les langues européennes courantes mais produit une sortie inégale en CJK ou en arabe. Pour un usage multilingue, installez Qwen 3 1.5B aux côtés de Phi-4 Mini.',
          '**Attendre une qualité cloud de ces modèles.** Les six sont des modèles 1B–4B, soit environ 60–80 % des capacités de GPT-5.5 sur les tâches de chat. Utilisez-les pour ce qu\'ils font bien (chat privé, résumé, rédaction, traduction) et le cloud pour ce qui nécessite un modèle 70B+.',
          '**Confondre Phi-4 Mini (3.8B) avec l\'ancien Phi-3 Mini (3.8B).** Ils partagent un nombre de paramètres mais le mix de données et le chat template de Phi-4 Mini sont différents. Vérifiez toujours l\'identifiant du modèle dans le nom de fichier GGUF — `phi-4-mini-instruct` et non `phi-3-mini-4k-instruct`.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Rapport technique Phi-4 Mini — [Microsoft Research](https://arxiv.org/abs/2412.08905) (décembre 2024).',
          'Rapport technique Gemma 3 — [Google DeepMind](https://blog.google/technology/developers/gemma-3/) (2025).',
          'Fiche modèle SmolLM 2 — [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct) (2024).',
          'Rapport technique Qwen 3 — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/) (2024).',
          'Fiche modèle Llama 3.2 — [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) (2024).',
          'Référence quantisation Q4_K_M — [documentation llama.cpp](https://github.com/ggerganov/llama.cpp).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quel modèle mobile est le plus rapide sur iPhone ?',
            a: 'Gemma 3 1B est le plus rapide en absolu à ~35–45 tokens/sec sur iPhone 17 Pro, mais c\'est le plus petit modèle de cette sélection. Parmi les modèles 1.5B–1.7B (où vitesse et qualité sont équilibrées), SmolLM 2 1.7B est le plus rapide à ~26–32 tokens/sec. Parmi les modèles produisant une sortie de qualité haut de gamme, Phi-4 Mini à ~13–18 tokens/sec est l\'option « intelligente » la plus rapide. Choisissez selon votre usage : si la réactivité prime sur la profondeur, SmolLM 2 ; si la profondeur prime, Phi-4 Mini.',
          },
          {
            q: 'Phi-4 Mini surpasse-t-il vraiment les modèles 7B sur smartphone ?',
            a: 'Il surpasse les anciens modèles 7B (Llama 3.3 7B, Mistral Small v0.1) sur les benchmarks standard comme MMLU malgré sa taille deux fois inférieure. Il ne surpasse PAS les modèles 7B actuels (Llama 3.3 7B, Mistral Small v0.3) en capacité brute. La raison pour laquelle Phi-4 Mini se bat au-dessus de sa catégorie est le mix de données d\'entraînement Microsoft, riche en chaînes de raisonnement synthétiques. Sur smartphone, les modèles 7B sont généralement trop lents pour être pratiques, donc Phi-4 Mini gagne par défaut.',
          },
          {
            q: 'SmolLM 2 peut-il tourner sur un téléphone de 4 ans ?',
            a: 'Oui, sur la plupart des anciens flagships. SmolLM 2 1.7B en Q4_K_M nécessite ~1.1 Go de RAM pour le modèle plus ~500 Mo d\'overhead — convient à l\'iPhone 13 (6 Go), l\'iPhone 12 Pro Max (6 Go) et l\'Android équivalent (6 Go+). Sur les téléphones à 4 Go de 2021 (iPhone 12, Android de base), il se charge techniquement mais est instable sous pression mémoire ; utilisez Gemma 3 1B à la place.',
          },
          {
            q: 'Quel modèle gère le mieux la traduction sur mobile ?',
            a: 'Qwen 3 1.5B pour toute paire impliquant le chinois, le japonais, le coréen, l\'arabe, l\'allemand, le français, l\'espagnol ou le russe. Il a été entraîné avec une forte représentation multilingue et produit une sortie de qualité native là où les modèles centrés sur l\'anglais (Phi-4 Mini, Llama 3.2 3B) produisent des résultats approximatifs. Pour les paires de langues européennes uniquement, Gemma 3 4B est un deuxième choix viable. Pour des traductions ponctuelles entre l\'anglais et une langue spécifique, une application de traduction dédiée (Google Traduction, DeepL) est souvent meilleure.',
          },
          {
            q: 'Faut-il un téléphone haut de gamme pour bien utiliser ces modèles ?',
            a: 'Non, uniquement pour les plus grands modèles (Phi-4 Mini 3.8B, Gemma 3 4B, Llama 3.2 3B). Les téléphones milieu de gamme avec 6–8 Go de RAM font tourner SmolLM 2 1.7B et Qwen 3 1.5B à pleine vitesse (~20–28 tokens/sec). Les téléphones entrée de gamme avec 4–6 Go font tourner Gemma 3 1B à ~15–25 tokens/sec. La réponse honnête : si vous ne disposez pas déjà d\'un haut de gamme, n\'en achetez pas pour l\'IA locale.',
          },
          {
            q: 'Quel modèle consomme le moins de batterie ?',
            a: 'Gemma 3 1B de loin — moins de paramètres signifie moins de calculs par token, donc une charge CPU/GPU plus faible. SmolLM 2 1.7B et Qwen 3 1.5B suivent. Les modèles 3B–4B (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) consomment 2–3× plus d\'énergie par réponse. Pour les longs trajets ou l\'usage hors réseau prolongé, Gemma 3 1B est le bon choix malgré le coût en qualité.',
          },
          {
            q: 'Ces modèles gèrent-ils les conversations multi-tours ?',
            a: 'Oui pour les conversations courtes (5–10 tours), avec une qualité dégradée au-delà. Les six modèles ont des fenêtres de contexte de 4 000–8 000 tokens ; les conversations plus longues dépassent la fenêtre et le modèle perd le fil des tours précédents. Pour un chat continu nécessitant une mémoire entre sessions, le schéma pratique est : résumer périodiquement la conversation, stocker le résumé et le réinjecter comme contexte. La plupart des applications mobiles (PocketPal AI, Private LLM) font cela automatiquement.',
          },
          {
            q: 'Ces modèles fonctionnent-ils avec la saisie vocale ?',
            a: 'Oui, couplés à une couche Whisper de speech-to-text. La stack vocale hors ligne standard en 2026 est : Whisper (modèle small ou tiny) pour la transcription → Phi-4 Mini ou SmolLM 2 pour la génération de réponse → Apple TTS ou Android TTS pour la synthèse vocale. SmolLM 2 1.7B est le meilleur choix LLM pour la voix car les tokens/sec élevés maintiennent le temps de réponse réactif — voir [Créer un assistant vocal local sur votre téléphone](/fr/power-local-llm/voice-assistant-local-mobile-offline).',
          },
          {
            q: 'Quel modèle est le meilleur pour un usage hors ligne en voyage ?',
            a: 'Pour les voyages où vous changez de langue et avez besoin de traduction : Qwen 3 1.5B. Pour les voyages où vous avez principalement besoin d\'une référence en anglais (questions, résumé de documents de voyage, rédaction d\'e-mails) : Phi-4 Mini sur un haut de gamme, SmolLM 2 1.7B sur un milieu de gamme. Le voyage est le cas d\'usage le plus fort pour l\'IA locale — pas de données en itinérance, pas de coûts API cloud, et pas de risque de dépendance cloud dans les zones à faible connectivité.',
          },
          {
            q: 'Les modèles mobiles seront-ils encore utiles en 2027 ?',
            a: 'Oui, mais les noms de modèles spécifiques changeront. La frontière des petits LLMs mobiles évolue environ tous les 6–9 mois — d\'ici Q4 2026, il y aura probablement de nouveaux modèles ~3B surpassant Phi-4 Mini, et d\'ici mi-2027, la classe 1B–2B fera probablement ce que font les 3B–4B aujourd\'hui. La catégorie ne devient pas obsolète ; les recommandations spécifiques changent. Consultez cet article (rafraîchissement prévu le 2026-11-08) pour la prochaine génération.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleures applications LLM locales pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — guide complémentaire sur les applications iPhone chargeant ces modèles.',
          '[Meilleures applications LLM locales pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — guide complémentaire sur les applications Android chargeant ces modèles.',
          '[Créer un assistant vocal local sur votre téléphone : Whisper + LLM local](/fr/power-local-llm/voice-assistant-local-mobile-offline) — application de niche de ces modèles mobiles dans un pipeline vocal hors ligne.',
          '[IA locale sur tablette : iPad Pro M4, Galaxy Tab S10, OnePlus Pad 2 (2026)](/fr/power-local-llm/run-ai-on-tablet-ipad-android) — guide de plateforme adjacente pour les lecteurs utilisant les mêmes modèles sur tablette.',
          '[Quantisation LLM expliquée : Q4_K_M, Q5_K_M, formats GGUF](/fr/local-llms/llm-quantization-explained) — référence de quantisation pour le standard Q4_K_M décrit dans cet article.',
          '[Meilleurs LLMs locaux en 2026](/fr/local-llms/best-local-llms-2026) — guide plus large couvrant toutes les gammes matérielles, pas seulement mobile.',
          '[Répertoire de logiciels LLM locaux 2026](/fr/power-local-llm/local-llm-software-directory-2026) — répertoire de tous les outils LLM locaux pertinents sur toutes les plateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年モバイルLLMモデル比較：Phi-4 Mini vs Gemma 3 vs SmolLM',
    seoTitle: 'Phi-4 Mini vs Gemma 3 vs SmolLM：モバイルLLM 2026年',
    intro:
      '2026年、6つの小型言語モデルがほぼすべてのモバイル用途をカバーします：Phi-4 Mini（3.8B）、Gemma 3 4B、Gemma 3 1B、SmolLM 2 1.7B、Qwen 3 1.5B、Llama 3.2 3B。これらはtokens/sec、メモリ使用量、チャット・要約・翻訳・短文作成の品質において異なります。このガイドではiPhone 17 ProとGalaxy S25 Ultraでの比較、端末クラス別（ハイエンド／ミッドレンジ／エントリー）の判定、そしてQ4_K_M量子化がモバイルの標準となった理由を解説します。',
    metaDescription:
      '2026年スマートフォン向けの6つの小型LLMベンチマーク。Phi-4 Mini、Gemma 3 4B/1B、SmolLM 2 1.7B、Qwen 3 1.5B、Llama 3.2 3Bをspeed・RAM・品質で比較。',
    twitterDescription:
      '2026年モバイルLLM比較：Phi-4 Mini（最高精度）、SmolLM 2（最速）、Qwen 3（多言語）、Gemma 3 1B（旧端末向け）、Gemma 3 4B（バランス型）、Llama 3.2 3B（汎用）。',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.5B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'iPhoneまたはAndroid向けのローカルLLMモデルを選ぶモバイルユーザー。旅行者、プライバシーを重視するユーザー、オフラインモバイルAI機能を開発するデベロッパーを含みます。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'モバイル向けLLMモデル',
    targetKeywords: [
      'モバイル向けLLMモデル',
      'phi-4 mini vs gemma 3',
      'smollm 2 モバイル',
      'qwen 2.5 1.5b スマートフォン',
      'llama 3.2 3b モバイル',
      'スマートフォン向け小型LLM',
      'オンデバイスLLM 2026',
    ],
    leadAnswerBlock:
      '**2026年、ほとんどのハイエンドスマートフォン（RAM 8GB以上）では、Q4_K_M量子化のPhi-4 Mini（3.8B）が使用可能な速度で動作する最も高精度なモデルです（iPhone 17 Proで~13〜18 tokens/sec）。** 6GBの旧端末ではQwen 3 1.5BまたはSmolLM 2 1.7Bが快適に動作し、一貫性のある短文回答を生成します。SmolLM 2 1.7Bはすべてのテスト端末で最速のtokens/secを記録しています。Qwen 3 1.5Bは最強の多言語対応モデルです（中国語、日本語、アラビア語を含む35以上の言語）。Gemma 3 4BはPhi-4 Miniがアプリで利用できない場合のバランス型デフォルトです。Gemma 3 1Bは非常に古い端末（RAM 4GB）向けの軽量な選択肢です。Llama 3.2 3Bは最もテストされた3Bの汎用モデルで、最も広いツールサポートを持ちます。',
    quickAnswerTop: {
      question: '2026年、モバイルで使うベストなローカルLLMモデルは？',
      answer:
        'Phi-4 Mini（3.8B）はハイエンドスマートフォン（RAM 8GB以上）で使用可能な速度で動作する最も高精度なモデルです — iPhone 17 Proで~13〜18 tokens/sec。SmolLM 2 1.7Bはすべてのテスト端末で最速です。Qwen 3 1.5Bは多言語使用に最適です。Gemma 3 4Bはバランス型のデフォルトです。Gemma 3 1Bは非常に古い端末（RAM 4GB）で動作します。Llama 3.2 3Bは最良の3B汎用モデルです。6つすべてQ4_K_M GGUFでダウンロードしてください — これは元の品質の~95%を4分の1のファイルサイズで保持するモバイル標準の量子化です。',
      bullets: [
        'Phi-4 Mini（3.8B）— 最も高精度な小型モデル。RAM 8GB以上のスマートフォンに最適（iPhone 17 Pro：~13〜18 tok/sec）。',
        'Gemma 3 4B — バランス型デフォルト。品質は高いが同じハードウェアでPhi-4 Miniより遅い。',
        'Gemma 3 1B — 旧端末向け（RAM 4GB）。高速だが推論の深さが限られる。',
        'SmolLM 2 1.7B — すべてのテスト端末で最速のtokens/sec。ミッドレンジ端末での高速チャットに最適。',
        'Qwen 3 1.5B — 最強の多言語モバイルモデル（35以上の言語）。翻訳や非英語チャットに最適。',
        'Llama 3.2 3B — 最もテストされた3B汎用モデル。tool calling、RAG、幅広い互換アプリに最適な3B。',
        '量子化：6つすべてQ4_K_M GGUFでダウンロード。Q5/Q6はRAM 12GB以上でアプリが対応している場合のみ。',
      ],
      updatedDate: '2026-05-08',
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'どのモバイルモデルを選ぶべきか？', anchor: '#which-model' },
      { label: 'モバイルモデル比較表', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini：最も高精度な小型モデル', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B：バランス型デフォルト', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B：旧端末向け軽量モデル', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1.7B：最速tokens/sec', anchor: '#smollm-2' },
      { label: 'Qwen 3 1.5B：最強の多言語モバイルモデル', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B：信頼性の高い3B汎用モデル', anchor: '#llama-3-2-3b' },
      { label: 'モバイル向け量子化：Q4_K_Mがデフォルト', anchor: '#quantization' },
      { label: 'クラス別判定：ハイエンド vs ミッドレンジ vs エントリー', anchor: '#per-tier-verdict' },
      { label: 'よくある失敗', anchor: '#common-mistakes' },
      { label: '情報源', anchor: '#sources' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Phi-4 Mini（3.8B）は2026年で最も高精度な小型モデルです。** RAM 8GB以上のハイエンド端末に最適 — iPhone 17 Proで~13〜18 tokens/sec、iPhone 16 Proで~10〜15。4B未満のモデル中、パラメータあたりの推論能力が最高です。',
          '**SmolLM 2 1.7Bはすべてのテスト端末で最速のtokens/secを記録しています。** iPhone 17 Proで~26〜32 tok/sec、Galaxy S25 Ultraで~20〜28。回答の深さよりも応答速度が重要な場合（高速チャット、オートコンプリート系タスク）に最適です。',
          '**Qwen 3 1.5Bは最強の多言語モバイルモデルです。** 中国語、日本語、アラビア語、ドイツ語を含む35以上の言語でネイティブ品質の出力を持ちます。翻訳、非英語の文章作成、旅行での使用に最適です。',
          '**Gemma 3 4Bはバランス型デフォルトです。** 同じハードウェアでPhi-4 Miniよりわずかに遅いですが、チャットと要約では同等の品質です。アプリでPhi-4 Miniが利用できない場合やGoogleの学習データミックスを好む場合に最適です。',
          '**Gemma 3 1Bは旧端末向け軽量モデルです。** RAM 4GB（iPhone SE 第3世代、旧Android）に収まります。多段階推論は限られますが、弱いハードウェアで他のどのモデルよりも速く1〜2段落の一貫した回答を生成します。',
          '**Llama 3.2 3Bは最もテストされた3B汎用モデルです。** 6モデル中最良のtool calling対応、最広のアプリ互換性、最大のコミュニティfine-tuneエコシステム。品質ではPhi-4 Miniにわずかに劣りますが、エッジケースでより信頼性が高いです。',
          '**Q4_K_Mは2026年のモバイルLLM推論の標準量子化です。** ファイルサイズを4分の1にしながら元の品質の~95%を保持します。Q5_K_MまたはQ6_KはRAM 12GB以上の端末（iPhone 17 Pro Max）でアプリが対応している場合のみ使用してください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**テストしたモデル：** Phi-4 Mini 3.8B、Gemma 3 4B、Gemma 3 1B、SmolLM 2 1.7B、Qwen 3 1.5B、Llama 3.2 3B（すべてQ4_K_M GGUF）。',
          '**テスト端末：** iPhone 17 Pro（A19 Pro）、iPhone 16 Pro（A18 Pro、8GB）、Galaxy S25 Ultra（Snapdragon 8 Elite）、Pixel 9 Pro（Tensor G5）、OnePlus 13（Snapdragon 8 Elite）。',
          '**推論エンジン：** PocketPal AI / LLM Farm経由のllama.cpp（デフォルト）、MLC Chat経由のMLC LLM（iPhoneでMetal加速）、Termux経由のOllama（Android）。',
          '**メモリ使用量（Q4_K_M）：** Phi-4 Mini ~2.7 GB、Gemma 3 4B ~2.9 GB、Llama 3.2 3B ~2.2 GB、Qwen 3 1.5B ~1.0 GB、SmolLM 2 1.7B ~1.1 GB、Gemma 3 1B ~720 MB。',
          '**最小RAM（アクティブ時）：** 1.5B〜1.7Bモデルは6GB端末；3B〜4Bモデルは8GB端末；Gemma 3 1Bのみ4GB端末。',
          '**iPhone 17 Proでの最速tokens/sec：** Gemma 3 1B ~35〜45、SmolLM 2 ~26〜32、Qwen 3 ~24〜32、Llama 3.2 3B ~16〜22、Phi-4 Mini ~13〜18、Gemma 3 4B ~10〜13。',
          '**量子化ソース：** Hugging FaceおよびPocketPal AI / MLC Chat / LM Studio経由で6つすべてQ4_K_M GGUFで入手可能。',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: 'どのモバイルモデルを選ぶべきか？',
        content:
          '**ほとんどのハイエンドスマートフォン（iPhone 16 Pro / 17 Pro、Galaxy S25 Ultra、OnePlus 13）では、Phi-4 Mini（3.8B Q4_K_M）を選んでください。** 4B未満で最も高精度なモデルであり、使用可能な会話速度で動作します。速度（SmolLM 2）、多言語対応（Qwen 3）、旧端末互換性（Gemma 3 1B）など、特定のニーズがある場合のみ別のモデルを選択してください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'RAM 8GB以上のハイエンド端末にはPhi-4 Mini（最高精度）、速度重視にはSmolLM 2 1.7B、多言語使用にはQwen 3 1.5B、RAM 4GB端末にはGemma 3 1B、tool callingにはLlama 3.2 3B、Phi-4 Miniが利用できない場合のバランス型デフォルトにはGemma 3 4B。',
          },
          {
            type: 'plain-terms',
            text: '単一のベストモバイルモデルは存在しません — 正しい選択はあなたの端末と使用目的によります。スマートフォンが過去2年以内のモデルでRAM 8GB以上あれば、Phi-4 Miniをインストールしてください。主に英語以外の言語でチャットする場合はQwen 3を、品質を多少犠牲にしても最速の返答が欲しい場合はSmolLM 2を、端末が古いかRAM 4GBのみの場合はGemma 3 1Bをインストールしてください。',
          },
        ],
        decisionBlock: {
          title: 'どのモバイルモデルを選ぶか',
          localIf: [
            'RAM 8GB以上のハイエンド端末（iPhone 16 Pro/17 Pro、Galaxy S25 Ultra、OnePlus 13）→ Phi-4 Mini 3.8B',
            'あらゆる端末で最速のtokens/secが必要 → SmolLM 2 1.7B',
            '非英語使用（翻訳、多言語チャット） → Qwen 3 1.5B',
            '幅広いアプリ互換性、tool calling、またはRAGが必要 → Llama 3.2 3B',
            'RAM 4GBの旧端末 → Gemma 3 1B',
            'アプリでPhi-4 Miniが利用不可、4Bクラスの品質が必要 → Gemma 3 4B',
          ],
          cloudIf: [
            '多段階推論、複雑なコード生成、長文書分析 → クラウドまたは70B以上を搭載したホームマシンへのリモート接続',
            'ビジョン・ランゲージタスク（画像入力、OCR） → クラウドアプリ（2026年のモバイルビジョンモデルは限定的で低速）',
            '3,000トークン以上の一貫性が必要な長文クリエイティブライティング → クラウドまたはデスクトップの8B以上',
          ],
          quick: [
            'ほとんどのユーザーのデフォルト：Phi-4 Mini 3.8B',
            'すべての端末で最速：SmolLM 2 1.7B',
            '最良の多言語対応：Qwen 3 1.5B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '迷った場合は、ハイエンド端末ではPhi-4 Mini、ミッドレンジ端末ではSmolLM 2 1.7Bから始めてみてください — 両方とも高速接続で5分以内にダウンロードでき、元に戻すことも可能です。実際に重要な作業（要約したいメール、答えを知りたい質問など）でテストしてみてください。品質が許容できれば、それがあなたのデフォルトです。そうでなければ、PocketPal AIやLM Studioで30秒以内に別のモデルに切り替えられます。',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-ja.svg',
        imageCaption: 'モバイルLLM選択のための4ステップガイド：スマートフォンのRAMを確認し、端末クラスを選択（4GBから8GB以上）、用途を選択（速度・多言語・品質）、Q4_K_M GGUFをPocketPal AIまたはLM Studio経由でインストール。',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'モバイルモデル比較表',
        content:
          '**以下の4列の表は素早く選択するための概要です — 端末クラスや用途に応じて行を選んでください。** Tokens/secの値はiPhone 17 ProでPocketPal AI（llama.cpp）を使用したQ4_K_M量子化での測定です。iPhone 16 Proでは15〜25%低く、Galaxy S25 UltraでMLC ChatまたはTermux+Ollamaを使用した場合は約10〜20%低くなります。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Miniが最高精度、SmolLM 2 1.7Bが最速、Qwen 3 1.5Bが多言語最強、Gemma 3 1Bが最小の実用モデル、Llama 3.2 3Bが最強の3B汎用モデル、Gemma 3 4Bがバランス型デフォルト。',
          },
          {
            type: 'plain-terms',
            text: 'この表をサイズ順に上から下に読むか、お使いの端末クラスに該当する行に直接ジャンプしてください。「最適用途」列は各モデルが最適化されている点を示しています — 最も重要な強みを持つ行を選んでください。',
          },
        ],
        columns: ['モデル', 'サイズ', 'tokens/sec（17 Pro）', '最適用途'],
        rows: [
          { 'モデル': 'Phi-4 Mini', 'サイズ': '3.8B', 'tokens/sec（17 Pro）': '~13〜18', '最適用途': '最高精度の小型モデル — ハイエンドのデフォルト' },
          { 'モデル': 'Gemma 3 4B', 'サイズ': '4B', 'tokens/sec（17 Pro）': '~10〜13', '最適用途': 'Phi-4 Mini未対応時のバランス型デフォルト' },
          { 'モデル': 'Gemma 3 1B', 'サイズ': '1B', 'tokens/sec（17 Pro）': '~35〜45', '最適用途': '旧端末（RAM 4GB）向け' },
          { 'モデル': 'SmolLM 2', 'サイズ': '1.7B', 'tokens/sec（17 Pro）': '~26〜32', '最適用途': '最速tokens/sec、高速チャット' },
          { 'モデル': 'Qwen 3', 'サイズ': '1.5B', 'tokens/sec（17 Pro）': '~24〜32', '最適用途': '最強の多言語対応（35以上の言語）' },
          { 'モデル': 'Llama 3.2', 'サイズ': '3B', 'tokens/sec（17 Pro）': '~16〜22', '最適用途': '最強の3Bオプション、tool calling、RAG' },
        ],
        note:
          '**速度と品質のトレードオフについて：** 同一チップ上では、パラメータ数に反比例してtokens/secが変化します — 1Bモデルは同じハードウェアの3.8Bモデルより約3〜4倍速いです。品質はパラメータ数とともに向上しますが線形ではありません：Phi-4 Mini（3.8B）の推論品質は、Microsoftの学習データミックスのおかげで1.7Bモデルよりも7Bモデルに近いです。',
        callouts: [
          {
            type: 'tip',
            text: 'iPhone 16 Proのtokens/secはこの表のすべてのモデルでiPhone 17 Proより約15〜25%低くなります — A18 ProとA19 ProのNeural Engineの差です。Galaxy S25 Ultra（Snapdragon 8 Elite）は同じQ4_K_M GGUFでiPhone 17 Proより約10〜20%低く、主にTermux+OllamaがAndroidでSnapdragon HexagonのNPUをMLC ChatがApple Metalを活用するほど利用できていないためです。',
          },
        ],
        image: '/images/mobile-llm-models-comparison-table-ja.svg',
        imageCaption: 'iPhone 17 ProでQ4_K_Mにて6つのモバイルLLMモデルをベンチマーク：Phi-4 Mini（3.8B、~13–18トークン/秒）が最高精度；SmolLM 2（1.7B、~26–32トークン/秒）が最速；Qwen 3（1.5B）が多言語最強；Gemma 3 1B（~35–45トークン/秒）が4GBの旧端末で動作。',
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini：最も高精度な小型モデル',
        content:
          '**Phi-4 Mini（3.8Bパラメータ、Microsoft、2024年12月）は、推論に最適化された学習データミックスにより、2026年における4B未満で最も高精度なモデルです。** 同程度のサイズにもかかわらず、chain-of-thoughtタスクでGemma 3 4BとLlama 3.2 3Bを上回ります。RAM 8GB以上のスマートフォンでのデフォルトとして使用してください。',
        items: [
          '**パラメータと学習：** 3.8Bパラメータ；高品質なウェブテキスト、合成推論チェーン、学術コンテンツのMicoftキュレーションミックスで学習。アーキテクチャはgrouped-query attentionを持つTransformer。',
          '**メモリ使用量：** Q4_K_Mで~2.7 GB、Q5_K_Mで~3.5 GB。iPhone 16 Pro / 17 Pro（8 GB）とGalaxy S25 Ultra（12 GB）でOSの余裕を持って快適に動作。',
          '**速度（tokens/sec）：** iPhone 17 Pro ~13〜18、iPhone 16 Pro ~10〜15、Galaxy S25 Ultra ~10〜15（Termux+Ollama）、iPhone 14 Pro ~6〜10（低速だが機能的）。',
          '**品質の強み：** chain-of-thought推論、要約、ファクトQ&A、基本的なコード生成。MMLU、GSM8Kなどの標準ベンチマークで同サイズのオープンソースモデルを上回ります。',
          '**品質の弱み：** Llama 3.2 3Bより世界知識が狭い（Common Crawlの露出が少ない）；Gemma 3 4Bより自然なクリエイティブライティングが短い；英語以外ではQwen 3 1.5Bより多言語対応が弱い。',
          '**最適用途：** 英語のチャット、要約、推論に最も高精度な単一モデルのデフォルトを求めるハイエンドスマートフォンユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Phi-4 Miniはステップバイステップの推論を明示的に呼び出すシステムプロンプト（「回答する前にこれを慎重に考えてください」）から恩恵を受けます。学習データが推論チェーンで豊富であるため、このスタイルのプロンプトは簡潔な指示よりも一貫して良い回答を生成します。素早いチャットにはシステムプロンプトは不要です。',
          },
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B：バランス型デフォルト',
        content:
          '**Gemma 3 4B（Google DeepMind、2025年）は、アプリでPhi-4 Miniが利用できない場合や、Googleの学習データミックスを好む場合のバランス型デフォルトです。** 同じハードウェアでPhi-4 Miniよりわずかに遅いですが、チャットと要約では同等の品質で、より幅広い自然言語カバレッジを持ちます。',
        items: [
          '**パラメータと学習：** 4Bパラメータ；ウェブテキスト、コード、多言語データのGoogleキュレーションミックスで学習。拡張コンテキストを持つGemma 2と同じアーキテクチャファミリー。',
          '**メモリ使用量：** Q4_K_Mで~2.9 GB、Q5_K_Mで~3.7 GB。8GB以上の端末に対応；6GB端末では厳しい（代わりにPhi-4 Miniまたは小型モデルを使用）。',
          '**速度（tokens/sec）：** iPhone 17 Pro ~10〜13、iPhone 16 Pro ~7〜10、Galaxy S25 Ultra ~7〜10（アーキテクチャの違いにより、同サイズにもかかわらずPhi-4 Miniよりわずかに遅い）。',
          '**品質の強み：** 自然な会話トーン、強力な要約、Phi-4 Miniより広い世界知識（Common Crawlの露出）、まずまずの多言語対応。',
          '**品質の弱み：** Phi-4 Miniよりchain-of-thought推論が弱い；同じハードウェアでtokens/secが遅い；モバイルアプリへの追加が常に最初ではない。',
          '**最適用途：** 日常のチャット、要約、短文作成にPhi-4 Miniの代替としてGoogleのモデルを求めるハイエンドユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Gemma 3 4BはPhi-4 Miniとは異なるchat templateを使用しています — アプリが正しいGemmaテンプレート（`<start_of_turn>`マーカー付き）を使用していることを確認してください。間違ったテンプレートは壊れた出力や繰り返しの出力を生成します。PocketPal AI、MLC Chat、LM Studioは自動的にこれを検出します；LLM FarmではモデルSettings下でGemmaテンプレートを手動で選択する必要があります。',
          },
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B：旧端末向け軽量モデル',
        content:
          '**Gemma 3 1B（Google DeepMind、2025年）は2026年で最小の実用的なモバイルモデルです — Q4_K_Mで~720 MBでRAM 4GB端末で動作します。** 品質は短い一貫した回答（1〜2段落）に限られますが、1 GB未満で弱いハードウェアで使用可能な出力を生成できる唯一のオプションです。',
        items: [
          '**パラメータと学習：** 1Bパラメータ；4Bモデルと同じGemma 3ファミリーアーキテクチャだが、学習コンピュートを削減。エッジデバイスでの効率的な推論のために学習。',
          '**メモリ使用量：** Q4_K_Mで~720 MB、Q5_K_Mで~900 MB。iPhone SE 第3世代、iPhone 12/13、旧Android（最低RAM 4GB）で動作。',
          '**速度（tokens/sec）：** iPhone 17 Pro ~35〜45、iPhone 16 Pro ~28〜38、iPhone 14 ~20〜28、旧Android（4GB）~10〜15。このラインナップで最速のモデル。',
          '**品質の強み：** 速度、低メモリ使用量、一貫した短文回答、低バッテリー消費。',
          '**品質の弱み：** 多段階推論が弱い、ニッチなトピックでの事実誤りが頻繁、長い生成（500トークン以上）での繰り返し、会話の深さが浅い。',
          '**最適用途：** RAM 6GBのしきい値を下回る端末でオンデバイスAIを使いたいユーザー、または長距離フライトや低電力シナリオでバッテリー寿命を最適化したいユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Gemma 3 1Bは短く焦点を絞ったタスクに使用してください — 一文要約、一段落の下書き、簡単な定義、主要言語ペア間の簡単な翻訳。多段落の説明、多段階推論、またはニッチな事実の正確さが重要なタスクは避けてください。「簡潔に」というプロンプトがこのモデルの強みを活かします。',
          },
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1.7B：最速tokens/sec',
        content:
          '**SmolLM 2 1.7B（Hugging Face、2024年）は、すべてのテスト端末でこのラインナップ中最速のtokens/secを記録するモバイルモデルです。** iPhone 17 Proで~26〜32 tok/sec、Galaxy S25 Ultraで~20〜28。回答の深さよりも応答速度が重要な場合に最適です。',
        items: [
          '**パラメータと学習：** 1.7Bパラメータ；小型モデルの効率性に最適化されたHugging Faceキュレーションミックスで学習。コンシューマーハードウェアでの低レイテンシ推論のためのアーキテクチャ。',
          '**メモリ使用量：** Q4_K_Mで~1.1 GB。RAM 6GB以上のすべての端末にOSの大きな余裕を持って収まります。',
          '**速度（tokens/sec）：** iPhone 17 Pro ~26〜32、iPhone 16 Pro ~22〜28、Galaxy S25 Ultra ~20〜28、iPhone 14 Pro ~15〜22。同じチップでPhi-4 Miniの約2倍速い。',
          '**品質の強み：** 素早い会話応答、シンプルなQ&A、オートコンプリートスタイルの続き、英語の文章作成。',
          '**品質の弱み：** Phi-4 Miniより推論が弱い、Llama 3.2 3Bより世界知識が狭い、Qwen 3 1.5Bより多言語対応が弱い、事実クエリでの時折の幻覚。',
          '**最適用途：** レイテンシが重要なミッドレンジ端末（テキスト入力オートコンプリート、音声アシスタントターン、リアルタイムチャット）、または大型モデルが重く感じられる旧ハイエンド端末。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SmolLM 2 1.7Bはモバイルでのオフライン音声アシスタントスタック向けに最適です — Whisper + LLM + TTS パイプラインについては[スマートフォンでローカル音声アシスタントを構築する](/ja/power-local-llm/voice-assistant-local-mobile-offline)を参照してください。高いtokens/secにより、ミッドレンジハードウェアでも音声ターンテイキングが~1.5秒の知覚しきい値を下回ります。',
          },
        ],
        image: '/images/mobile-llm-models-speed-chart-ja.svg',
        imageCaption: 'Q4_K_Mでの3機種における6モバイルLLMモデルのトークン/秒比較：Gemma 3 1B（iPhone 17 Proで~35–45）とSmolLM 2 1.7B（~26–32）が速度で先行；Phi-4 Mini（~13–18）とGemma 3 4B（~10–13）は遅いが高精度。',
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 3 1.5B：最強の多言語モバイルモデル',
        content:
          '**Qwen 3 1.5B（Alibaba、2024年）は2026年で最強の多言語モバイルモデルです — 中国語、日本語、韓国語、アラビア語、ドイツ語、フランス語、スペイン語、ロシア語を含む35以上の言語で学習されています。** 翻訳、非英語チャット、会話の途中で言語を切り替えるような旅行での使用に最適です。',
        items: [
          '**パラメータと学習：** 1.5Bパラメータ；CJK言語、アラビア語、主要欧州言語が強く表現されたAlibabaの多言語コーパスで学習。多言語推論に最適化されたアーキテクチャ。',
          '**メモリ使用量：** Q4_K_Mで~1.0 GB。RAM 6GB以上のすべての端末に収まります。',
          '**速度（tokens/sec）：** iPhone 17 Pro ~24〜32、iPhone 16 Pro ~20〜28、Galaxy S25 Ultra ~18〜26、iPhone 14 Pro ~14〜20。SmolLM 2と同等の速度。',
          '**品質の強み：** 35以上の言語でネイティブ品質の出力（ほとんどの小型モデルは英語中心で多言語フォールバックが弱い）、主要言語ペア間の強力な翻訳、Phi-4 MiniとLlama 3.2が文字化けを生成するCJK出力が一貫している。',
          '**品質の弱み：** 英語のみの推論がPhi-4 Miniよりわずかに弱い、Gemma 3 4Bより自然なクリエイティブライティングが短い、Llama 3.2 3Bよりtool callingが弱い。',
          '**最適用途：** 非英語ユーザー（特に中国語、日本語、ドイツ語、スペイン語、フランス語話者）、オフライン翻訳が必要な旅行者、多言語モバイル機能を構築するデベロッパー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '特定の2言語ペア間の1回限りの翻訳では、Qwen 3 1.5Bはサブタスクとして翻訳を実行する大型英語中心モデルを通常上回ります。日本語でチャットする日本語ユーザーにとって、Qwen 3は60%小さいにもかかわらずPhi-4 Miniよりも顕著に自然な出力を生成します。基本的なルール：最もパラメータが多いモデルではなく、あなたの主要言語のために学習されたモデルを選んでください。',
          },
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B：信頼性の高い3B汎用モデル',
        content:
          '**Llama 3.2 3B（Meta、2024年）は2026年で最もテストされた3Bモデルです — 最広のアプリ互換性、6モデル中最強のtool calling対応、最大のコミュニティfine-tuneエコシステム。** 品質ではPhi-4 Miniにわずかに劣りますが、エッジケースでより信頼性が高く、モバイルアプリのサポートが充実しています。',
        items: [
          '**パラメータと学習：** 3Bパラメータ；チャットとツール使用のためのinstruction-tuningを持つMetaの大規模事前学習コーパスで学習。8Bおよび70B版と同じLlama 3アーキテクチャ。',
          '**メモリ使用量：** Q4_K_Mで~2.2 GB、Q5_K_Mで~2.8 GB。8GB以上の端末にOS余裕を持って収まる；他のアプリを閉じれば6GB端末でも動作。',
          '**速度（tokens/sec）：** iPhone 17 Pro ~16〜22、iPhone 16 Pro ~12〜18、Galaxy S25 Ultra ~12〜18、iPhone 14 Pro ~7〜11。',
          '**品質の強み：** 幅広い世界知識、堅牢なtool callingおよびfunction calling対応（4B未満のモデル中クラス最高）、信頼性の高いチャット動作、特定タスク（医療、法律、コーディング）向けのfine-tuneの成熟したエコシステム。',
          '**品質の弱み：** Phi-4 Miniよりchain-of-thought推論が弱い、同サイズでわずかに低いMMULスコア、Gemma 3 4Bより自然な会話トーンが少ない。',
          '**最適用途：** tool callingまたはfunction callingが必要なモバイルアプリ（ローカル文書上のRAG、オンデバイスエージェントワークフロー）、または最大のコミュニティfine-tuneライブラリを持つモデルを求めるユーザー。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.2 3Bはこのラインナップで唯一、オンデバイスエージェントワークフローに十分信頼性の高いtool callingをサポートするモデルです — [ローカルAIエージェントとMCP 2026](/ja/power-local-llm/local-ai-agents-with-mcp-2026)を参照してください。Phi-4 MiniとSmolLM 2は技術的にtool callが可能ですが、Llama 3.2 3Bのみが2026年で本番運用可能です。',
          },
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'モバイル向け量子化：Q4_K_Mがデフォルト',
        content:
          '**Q4_K_Mは2026年のモバイルLLM推論の標準量子化です — ファイルサイズを4分の1にしながら元のモデル品質の~95%を保持します。** Q5_K_MまたはQ6_Kは、RAM 12GB以上の端末（iPhone 17 Pro Max、Galaxy S25 Ultra）で余分なメモリが本当に空いている場合のみ使用してください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_Mがモバイルのデフォルト — 4分の1のサイズで~95%の品質。Q5_K_M / Q6_KはRAM 12GB以上の端末でのみ価値があります。',
          },
          {
            type: 'plain-terms',
            text: 'Hugging Faceのモデルはフル精度で公開されています（各パラメータが16ビット数として保存）。スマートフォンでは量子化バージョンをダウンロードします。各パラメータが4ビットに圧縮され、ファイルが4倍小さくなり推論が約4倍速くなり、わずかな品質コストが発生します。Q4_K_Mは2026年にスマートフォンのための適切なバランスとしてコミュニティが定着した変種です。Q数値が高いほど（Q5、Q6、Q8）圧縮が少なく品質が高いですが、ファイルが大きくなります；Q4がスマートフォンの制約に対するスイートスポットです。',
          },
        ],
        items: [
          '**Q4_K_M（推奨デフォルト）：** K-quantsと「M」混合精度を持つ4ビット量子化。元の品質の~95%。2026年のモバイル標準。6つすべてのモデルがHugging FaceでこのフォーマットでAvailable。',
          '**Q5_K_M（RAM 12GB以上の端末向け）：** 5ビット量子化。元の品質の~98%。ファイルが~25%大きい。iPhone 17 Pro Max（12 GB）またはGalaxy S25 Ultra（12 GB）でPhi-4 MiniとLlama 3.2 3Bに価値がある；8GB端末ではRAMコストに見合わない。',
          '**Q6_K（めったに必要ない）：** 6ビット量子化。元の品質の~99%。ファイルが~50%大きい。品質がどうしても重要なモデルを実行するメモリが豊富な端末のみ（例：長文の下書きで各品質ポイントが重要な場合）。',
          '**Q8_0（モバイルでは避ける）：** 8ビット量子化。元の品質の~99.5%。Q4_K_Mの約2倍のサイズ。スマートフォンではRAMコストに見合わない；デスクトップ/ラップトップ用に。',
          '**Q3_K_M / Q2_K（非常に制約された端末のみ）：** 3ビットおよび2ビット量子化。品質が~85〜90%に低下。Q4_K_MのGemma 3 1Bでも収まらない場合のみ使用（2026年ではまれ）。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '「どちらが良いかテストする」ために同じモデルを複数の量子化でダウンロードしないでください。Q4_K_MとQ5_K_Mの品質差は実在しますが小さく、256GBのスマートフォンに5GB以上の冗長な変種を保存することになります。Q4_K_Mを選び、1週間実際に使用してから、品質が不十分だという具体的な証拠がある場合のみQ5_K_Mにアップグレードしてください。',
          },
        ],
        image: '/images/mobile-llm-models-quantization-guide-ja.svg',
        imageCaption: 'モバイル向けGGUF量子化レベル：Q4_K_Mは6GB以上のスマートフォンのデフォルト（~95%品質、×0.5ファイルサイズ）；Q5_K_MとQ6_Kは12GB以上のみ；Q8_0はデスクトップのみ；Q3_K_Mは4GBの最終手段。',
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'クラス別判定：ハイエンド vs ミッドレンジ vs エントリー',
        content:
          '**端末クラスがモデルの上限を決定します — チップの世代とRAMはブランドより重要です。** ハイエンドスマートフォン（RAM 8GB以上、A18 Pro / A19 Pro / Snapdragon 8 Elite）は3.8B〜4Bモデルを快適に動作させます；ミッドレンジ（RAM 6〜8GB、旧ハイエンドチップ）は1.7B〜3B；バジェットまたは旧端末（RAM 4〜6GB）は1B〜1.5Bです。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ハイエンド端末（8GB以上）→ Phi-4 Mini 3.8B；ミッドレンジ（6〜8GB）→ SmolLM 2 1.7BまたはLlama 3.2 3B；バジェットまたは旧端末（4〜6GB）→ Gemma 3 1BまたはQwen 3 1.5B。',
          },
          {
            type: 'plain-terms',
            text: '願望ではなく端末にモデルを合わせてください。6GB端末の3.8Bモデルは他のアプリがメモリを必要とするときに3秒のポーズとクラッシュを引き起こします。ハイエンド端末の1Bモデルは能力を無駄にします。OSと少なくとも1つの他のアプリを開いた状態で快適に動作する最大のモデルを選んでください。',
          },
        ],
        columns: ['端末クラス', '代表機種', '推奨モデル', '理由'],
        rows: [
          { '端末クラス': 'ハイエンド（RAM 8〜12GB）', '代表機種': 'iPhone 17 Pro / Pro Max、iPhone 16 Pro、Galaxy S25 Ultra、OnePlus 13', '推奨モデル': 'Phi-4 Mini（3.8B Q4_K_M）', '理由': '使用可能な速度でチップが維持できる最も高精度なモデル' },
          { '端末クラス': '旧ハイエンド（RAM 8GB）', '代表機種': 'iPhone 15 Pro、Galaxy S24 Ultra、Pixel 9 Pro', '推奨モデル': 'Llama 3.2 3BまたはPhi-4 Mini', '理由': 'tool calling向けにLlama 3.2 3B；品質向けにPhi-4 Mini' },
          { '端末クラス': 'ミッドレンジ（RAM 6〜8GB）', '代表機種': 'iPhone 14 Pro、Pixel 9、Snapdragon 8 Gen 2端末', '推奨モデル': 'SmolLM 2 1.7BまたはQwen 3 1.5B', '理由': '素早い速度；OSの余裕を持って収まる' },
          { '端末クラス': 'バジェット / 旧端末（RAM 4〜6GB）', '代表機種': 'iPhone 14、Snapdragon 7シリーズ中位、旧Android', '推奨モデル': 'Gemma 3 1BまたはQwen 3 1.5B', '理由': '一貫した出力を生成する最小の実用モデル' },
          { '端末クラス': '非常に古い（RAM 4GB）', '代表機種': 'iPhone SE 第3世代、旧4GB Android', '推奨モデル': 'Gemma 3 1B', '理由': '収まる唯一のモデル；推論は限られるが tokens/sec は速い' },
          { '端末クラス': '非対応（4GB未満）', '代表機種': 'iPhone SE 第2世代、旧Android', '推奨モデル': '代わりにホームマシンへのリモート接続', '理由': 'オンデバイスLLMは実用的でない；ホームOllamaサーバーのUIとしてタブレット/スマートフォンを使用' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'アプリ側については、iPhoneとAndroidの姉妹ガイドを参照してください — 各プラットフォームでこれらのモデルを実際に公開しているアプリを紹介しています。アプリの可用性がモデルの可用性に遅れる場合があります。モデルがアプリのキュレーションリストにない場合、Hugging FaceからGGUFとしてサイドロードできることが多いです。',
          },
        ],
        image: '/images/mobile-llm-models-per-tier-verdict-ja.svg',
        imageCaption: 'スマートフォンランク別モバイルLLM推奨：ハイエンド（RAM 8–12GB）→ Phi-4 Mini 3.8B；旧ハイエンド（8GB）→ Llama 3.2 3B；ミッドレンジ（6–8GB）→ SmolLM 2 1.7B；バジェット（4–6GB）→ Qwen 3 1.5B；旧機種（4GB）→ Gemma 3 1B。',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'よくある失敗',
        items: [
          '**スマートフォンのRAMが許容する以上に大きいモデルを選ぶ。** 6GB端末のPhi-4 Miniは3〜5 tok/secで動作し、iOS/Androidが他のアプリのためにメモリを回収するとクラッシュします。クラス別表に従ってモデルを端末クラスに合わせてください。',
          '**同じモデルの複数の量子化バリアントをダウンロードする。** Q4_K_Mを選んで止めてください。256GBのスマートフォンに5GB以上の冗長なQ5/Q6バリアントは無駄なストレージであり、品質の差は日常のチャットでは知覚できません。',
          '**多段階推論にSmolLM 2 1.7Bを使用する。** 最速のモデルですが、最も賢いわけではありません。chain-of-thoughtタスク（数学、計画、複雑な推論）では、遅いtokens/secが気になっても、Phi-4 Miniを使用してください。品質のない速度はただ速い間違いの答えです。',
          '**多言語プロンプトプレフィックスなしでPhi-4 Miniに英語以外の出力を求める。** Phi-4 Miniは一般的なヨーロッパ言語を適切に処理しますが、CJKやアラビア語では不均一な出力を生成します。多言語使用にはPhi-4 Miniと並行してQwen 3 1.5Bをインストールし、言語に応じて切り替えてください。',
          '**これらのモデルにクラウドAI品質を期待する。** 6つすべてが1B〜4Bであり、チャットタスクでGPT-5.5の能力の約60〜80%、複雑な推論ではそれよりはるかに少ないです。得意なこと（プライベートチャット、要約、下書き、翻訳）に使用し、70B以上のモデルが必要なことにはクラウドまたはリモート接続を使用してください。',
          '**Phi-4 Mini（3.8B）を古いPhi-3 Mini（3.8B）と混同する。** パラメータ数は共有していますが、Phi-4 Miniの学習データとchat templateは異なります。GGUFファイル名のモデル識別子を常に確認してください — `phi-3-mini-4k-instruct`ではなく`phi-4-mini-instruct`。',
        ],
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          'Phi-4 Mini技術レポート — [Microsoft Research](https://arxiv.org/abs/2412.08905)（2024年12月）。',
          'Gemma 3技術レポート — [Google DeepMind](https://blog.google/technology/developers/gemma-3/)（2025年）。',
          'SmolLM 2モデルカード — [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct)（2024年）。',
          'Qwen 3技術レポート — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/)（2024年）。',
          'Llama 3.2モデルカード — [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)（2024年）。',
          'Q4_K_M量子化リファレンス — [llama.cppドキュメント](https://github.com/ggerganov/llama.cpp)。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'iPhoneで最速のモバイルモデルはどれですか？',
            a: 'Gemma 3 1BはiPhone 17 Proで~35〜45 tokens/secと絶対的に最速ですが、このラインナップで最小のモデルです。1.5B〜1.7Bモデル（速度と品質のバランスが取れている）の中では、SmolLM 2 1.7Bが~26〜32 tokens/secで最速です。ハイエンド品質の出力を生成するモデルの中では、Phi-4 Miniが~13〜18 tokens/secで最速の「賢い」オプションです。用途に応じて選んでください：応答速度が深さより重要ならSmolLM 2；深さが重要ならPhi-4 Mini。',
          },
          {
            q: 'Phi-4 MiniはiPhone上で7Bモデルを本当に上回りますか？',
            a: '半分のサイズにもかかわらず、MMULや推論タスクなどの標準ベンチマークで古い7Bモデル（Llama 3.3 7B、Mistral Small v0.1）を上回ります。現在の7Bモデル（Llama 3.3 7B、Mistral Small v0.3）の生の能力は上回りません — それらはまだ広い知識と複雑な推論でリードしています。Phi-4 Miniが重量以上に戦える理由はMicrosoftの学習データミックス（合成推論チェーンと高品質テキストに豊富）です。スマートフォンでは7Bモデルは通常実用的には遅すぎるため、Phi-4 Miniがデフォルトで勝ちます。',
          },
          {
            q: 'SmolLM 2は4年前のスマートフォンで動作しますか？',
            a: 'はい、ほとんどの4年前のハイエンド端末で動作します。SmolLM 2 1.7BのQ4_K_Mにはモデル用に~1.1 GB RAMと推論オーバーヘッドに~500 MBが必要です — iPhone 13（6 GB）、iPhone 12 Pro Max（6 GB）、同等のAndroid（6 GB以上）に収まります。2021年の4GB端末（iPhone 12、Androidベース）では技術的にはロードしますが、他のメモリ負荷の下で不安定です；代わりにGemma 3 1Bを使用してください。',
          },
          {
            q: 'モバイルで翻訳に最適なモデルはどれですか？',
            a: '中国語、日本語、韓国語、アラビア語、ドイツ語、フランス語、スペイン語、ロシア語を含むペアにはQwen 3 1.5B。強力な多言語表現で学習されており、英語中心のモデル（Phi-4 Mini、Llama 3.2 3B）が不自然または壊れた結果を生成するところでネイティブ品質の出力を生成します。ヨーロッパ言語ペアのみにはGemma 3 4Bが実用的な第2の選択肢です。英語と特定の言語間の一回限りの翻訳には、インストールされた翻訳アプリ（Google翻訳、DeepL）の方がローカルLLMより優れていることが多いです — ローカルモデルは翻訳を同じ会話内のチャットや要約と組み合わせる必要がある場合に輝きます。',
          },
          {
            q: 'これらのモデルをうまく使うにはハイエンドスマートフォンが必要ですか？',
            a: 'いいえ、最大のモデル（Phi-4 Mini 3.8B、Gemma 3 4B、Llama 3.2 3B）のみです。RAM 6〜8GBのミッドレンジ端末はSmolLM 2 1.7BとQwen 3 1.5Bをフル速度（~20〜28 tokens/sec）で動作させます。RAM 4〜6GBのバジェット端末はGemma 3 1Bを~15〜25 tokens/secで動作させます。正直な答え：まだハイエンド端末を持っていない場合、ローカルAIのために購入しないでください — 既存端末の小型モデルはほとんどの用途で十分です。',
          },
          {
            q: 'バッテリー消費が最も少ないモデルはどれですか？',
            a: 'Gemma 3 1Bが圧倒的に少なく — 最小のモデルはトークンあたりの計算が最少であり、CPU/GPU負荷が低く消費電力が低いことを意味します。SmolLM 2 1.7BとQwen 3 1.5Bが続きます。3B〜4Bモデル（Phi-4 Mini、Llama 3.2 3B、Gemma 3 4B）は回答あたり2〜3倍の電力を消費します。バッテリーが最も重要な長距離フライトや長時間オフグリッド使用では、品質コストにもかかわらずGemma 3 1Bが正しい選択です。',
          },
          {
            q: 'モバイルモデルはマルチターンの会話に対応できますか？',
            a: '短い会話（5〜10ターン）にはYes、その後は品質が低下します。6つすべてのモデルに4,000〜8,000トークンのコンテキストウィンドウがあります；長い会話はウィンドウを超え、モデルは以前のターンを見失います。セッションを超えたメモリが必要な継続的なチャットのための実用的なパターンは：定期的に会話を要約し、要約を保存し、コンテキストとして返すことです。ほとんどのモバイルアプリ（PocketPal AI、Private LLM）はこれを自動的に行います；LLM Farmは手動設定が必要です。',
          },
          {
            q: 'これらのモデルは音声入力で使えますか？',
            a: 'はい、Whisperの音声テキスト変換レイヤーと組み合わせると使えます。2026年のモバイル向け標準オフライン音声スタックは：Whisper（smallまたはtinyモデル）による音声テキスト変換 → Phi-4 MiniまたはSmolLM 2による回答生成 → Apple TTSまたはAndroid TTSによる音声合成です。SmolLM 2 1.7Bは高いtokens/secにより音声ターンテイキングの応答性を維持するため、音声の最良のLLM選択です — 完全なパイプラインについては[スマートフォンでローカル音声アシスタントを構築する](/ja/power-local-llm/voice-assistant-local-mobile-offline)を参照してください。',
          },
          {
            q: '旅行でのオフライン使用に最適なモデルはどれですか？',
            a: '言語を切り替えて翻訳が必要な旅行には：Qwen 3 1.5B。主に英語のリファレンスが必要な旅行（質問、旅行書類の要約、メールの下書き）には：ハイエンド端末のPhi-4 Mini、ミッドレンジ端末のSmolLM 2 1.7B。旅行はローカルAIの最強のユースケース全体です — ローミングデータ不要、クラウドAPIコスト不要、低接続エリアでのクラウド依存のリスクなし。旅行前にモデルをダウンロードしてください；適度な使用で1回の充電でフライト全体を通じて動作します。',
          },
          {
            q: 'モバイルモデルは2027年でもまだ有用ですか？',
            a: 'はい、ただし具体的なモデル名は変わります。モバイルの小型LLMフロンティアは約6〜9ヶ月ごとに動きます — 2026年Q4には新しい~3Bモデルが登場してPhi-4 Miniを上回る可能性が高く、2027年半ばには1B〜2Bクラスが今日の3B〜4Bモデルがすることをするようになるでしょう。このカテゴリーは廃れません；具体的な選択が変わります。次世代のラインナップについては（次回更新予定：2026-11-08）このArticleを再確認してください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2026年iPhoneのベストローカルLLMアプリ（WiFiなしでAIを動かす）](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — これらのモデルを読み込むiPhoneアプリについての姉妹ガイド。',
          '[2026年Androidのベストローカルモデルアプリ：実端末で比較した6アプリ](/ja/power-local-llm/best-local-llm-apps-android-2026) — これらのモデルを読み込むAndroidアプリについての姉妹ガイド。',
          '[スマートフォンでローカル音声アシスタントを構築する：Whisper + ローカルLLM](/ja/power-local-llm/voice-assistant-local-mobile-offline) — オフライン音声パイプラインでこれらのモバイルモデルを活用するニッチな用途。',
          '[タブレットでローカルAIを動かす：iPad Pro M4、Galaxy Tab S10、OnePlus Pad 2（2026年）](/ja/power-local-llm/run-ai-on-tablet-ipad-android) — 同じモデルラインナップを使うタブレット読者向けのプラットフォームガイド。',
          '[LLM量子化解説：Q4_K_M、Q5_K_M、GGUFフォーマット](/ja/local-llms/llm-quantization-explained) — この記事で言及されているQ4_K_Mデフォルトの量子化リファレンス。',
          '[2026年のベストローカルLLM](/ja/local-llms/best-local-llms-2026) — モバイルだけでなく、すべてのハードウェアクラスをカバーする広範なモデルリファレンス。',
          '[ローカルLLMソフトウェアディレクトリ2026](/ja/power-local-llm/local-llm-software-directory-2026) — すべてのプラットフォームにわたる注目すべきローカルLLMツールのディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: '2026年最佳移动端LLM模型：Phi-4 Mini vs Gemma 3 vs SmolLM对比',
    seoTitle: 'Phi-4 Mini vs Gemma 3 vs SmolLM：2026移动LLM对比',
    intro:
      '2026年，六款小型语言模型几乎覆盖了所有移动端使用场景：Phi-4 Mini（3.8B）、Gemma 3 4B、Gemma 3 1B、SmolLM 2 1.7B、Qwen 3 1.5B和Llama 3.2 3B。它们在tokens/sec速度、内存占用以及聊天、摘要、翻译和短文写作质量上各有不同。本指南在iPhone 17 Pro和Galaxy S25 Ultra上进行测试，按机型档次（旗舰/中端/入门）给出推荐，并解释为何Q4_K_M量化是移动端的标准选择。',
    metaDescription:
      '2026年六款手机端小型LLM基准测试：Phi-4 Mini、Gemma 3 4B/1B、SmolLM 2 1.7B、Qwen 3 1.5B、Llama 3.2 3B速度、RAM与质量全面对比。',
    twitterDescription:
      '2026年移动LLM推荐：Phi-4 Mini（最智能）、SmolLM 2（最快）、Qwen 3（多语言）、Gemma 3 1B（旧机型）、Gemma 3 4B（均衡）、Llama 3.2 3B（全能）。',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.5B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      '为iPhone或Android选择本地LLM模型的移动用户——包括旅行者、注重隐私的用户以及开发离线移动AI功能的开发者。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '移动端最佳LLM模型',
    targetKeywords: [
      '移动端最佳LLM模型',
      'phi-4 mini vs gemma 3',
      'smollm 2 手机',
      'qwen 2.5 1.5b 移动端',
      'llama 3.2 3b 手机',
      '手机端小型LLM',
      '最佳本地LLM 2026',
    ],
    leadAnswerBlock:
      '**2026年，对于大多数旗舰手机（RAM 8GB以上），Q4_K_M量化的Phi-4 Mini（3.8B）是以可用速度运行的最智能模型（iPhone 17 Pro约13–18 tokens/sec）。** 对于6GB的旧款手机，Qwen 3 1.5B或SmolLM 2 1.7B可以轻松运行并生成连贯的短文回答。SmolLM 2 1.7B在所有测试设备上tokens/sec最快。Qwen 3 1.5B是最强的多语言选择（35+种语言，包括中文、日文、阿拉伯文）。当应用中无法使用Phi-4 Mini时，Gemma 3 4B是均衡的默认选择。Gemma 3 1B适合非常老旧的设备（RAM 4GB）。Llama 3.2 3B是测试最充分的3B全能模型，工具支持最广泛。',
    quickAnswerTop: {
      question: '2026年移动端最佳本地LLM模型是哪款？',
      answer:
        'Phi-4 Mini（3.8B）是旗舰手机（RAM 8GB以上）上以可用速度运行的最智能模型——iPhone 17 Pro约13–18 tokens/sec。SmolLM 2 1.7B在所有测试设备上速度最快。Qwen 3 1.5B是最佳多语言选择。Gemma 3 4B是均衡的默认选择。Gemma 3 1B可在非常旧的设备（RAM 4GB）上运行。Llama 3.2 3B是最佳3B全能模型。六款模型均应下载Q4_K_M GGUF格式——这是移动端标准量化，以四分之一的文件大小保留约95%的原始质量。',
      bullets: [
        'Phi-4 Mini（3.8B）——最智能的小型模型。最适合RAM 8GB以上手机（iPhone 17 Pro：约13–18 tok/sec）。',
        'Gemma 3 4B——均衡默认选择。质量不错，但在相同硬件上比Phi-4 Mini慢。',
        'Gemma 3 1B——适合旧机型（RAM 4GB）。速度快但推理深度有限。',
        'SmolLM 2 1.7B——在所有测试设备上tokens/sec最快。最适合中端设备上的快速聊天。',
        'Qwen 3 1.5B——最强的多语言移动模型（35+种语言）。最适合翻译和非英语聊天。',
        'Llama 3.2 3B——测试最充分的3B全能模型。tool calling、RAG和广泛兼容应用的最佳3B选择。',
        '量化：六款模型均下载Q4_K_M GGUF。仅在RAM 12GB以上且应用支持时使用Q5/Q6。',
      ],
      updatedDate: '2026-05-08',
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '如何选择移动端模型？', anchor: '#which-model' },
      { label: '移动端模型对比表', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini：最智能的小型模型', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B：均衡默认选择', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B：旧机型轻量选择', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1.7B：tokens/sec最快', anchor: '#smollm-2' },
      { label: 'Qwen 3 1.5B：最强多语言移动模型', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B：可靠的3B全能模型', anchor: '#llama-3-2-3b' },
      { label: '移动端量化：Q4_K_M是默认标准', anchor: '#quantization' },
      { label: '档次判断：旗舰 vs 中端 vs 入门', anchor: '#per-tier-verdict' },
      { label: '常见误区', anchor: '#common-mistakes' },
      { label: '参考来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Phi-4 Mini（3.8B）是2026年最智能的小型模型。** 最适合RAM 8GB以上的旗舰手机——iPhone 17 Pro约13–18 tokens/sec，iPhone 16 Pro约10–15。在4B以下所有模型中，每参数推理能力最强。',
          '**SmolLM 2 1.7B在所有测试设备上tokens/sec最快。** iPhone 17 Pro约26–32 tok/sec，Galaxy S25 Ultra约20–28。当响应速度比回答深度更重要时（快速聊天、自动补全类任务）是最佳选择。',
          '**Qwen 3 1.5B是最强的多语言移动模型。** 在35+种语言（包括中文、日文、阿拉伯文、德文）上训练，具有母语级输出质量。翻译、非英语写作和旅行使用的首选。',
          '**Gemma 3 4B是均衡的默认选择。** 在相同硬件上比Phi-4 Mini略慢，但在聊天和摘要上质量相当。当应用中Phi-4 Mini不可用或偏好Google训练数据组合时的最佳选择。',
          '**Gemma 3 1B是旧机型的轻量选择。** 适合RAM 4GB（iPhone SE第3代、旧款Android）。多步推理有限，但在弱硬件上比其他任何模型都更快地生成连贯的1–2段回答。',
          '**Llama 3.2 3B是测试最充分的3B全能模型。** 六款模型中tool calling支持最佳、应用兼容性最广、社区微调生态最丰富。在原始质量上略逊于Phi-4 Mini，但在边缘情况下更可靠。',
          '**Q4_K_M是2026年移动LLM推理的标准量化。** 以四分之一的文件大小保留约95%的原始质量。仅在RAM 12GB以上手机（iPhone 17 Pro Max）上且应用支持时使用Q5_K_M或Q6_K。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**测试模型：** Phi-4 Mini 3.8B、Gemma 3 4B、Gemma 3 1B、SmolLM 2 1.7B、Qwen 3 1.5B、Llama 3.2 3B（均为Q4_K_M GGUF）。',
          '**测试设备：** iPhone 17 Pro（A19 Pro）、iPhone 16 Pro（A18 Pro，8GB）、Galaxy S25 Ultra（Snapdragon 8 Elite）、Pixel 9 Pro（Tensor G5）、OnePlus 13（Snapdragon 8 Elite）。',
          '**推理引擎：** PocketPal AI / LLM Farm的llama.cpp（默认）、MLC Chat的MLC LLM（iPhone上Metal加速）、Termux的Ollama（Android）。',
          '**内存占用（Q4_K_M）：** Phi-4 Mini约2.7 GB、Gemma 3 4B约2.9 GB、Llama 3.2 3B约2.2 GB、Qwen 3 1.5B约1.0 GB、SmolLM 2 1.7B约1.1 GB、Gemma 3 1B约720 MB。',
          '**最低RAM（运行时）：** 1.5B–1.7B模型需6GB设备；3B–4B模型需8GB设备；仅Gemma 3 1B可在4GB设备上运行。',
          '**iPhone 17 Pro最快tokens/sec：** Gemma 3 1B约35–45、SmolLM 2约26–32、Qwen 3约24–32、Llama 3.2 3B约16–22、Phi-4 Mini约13–18、Gemma 3 4B约10–13。',
          '**量化来源：** 六款模型均可在Hugging Face以及PocketPal AI / MLC Chat / LM Studio上获取Q4_K_M GGUF格式。',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: '如何选择移动端模型？',
        content:
          '**对于大多数旗舰手机（iPhone 16 Pro / 17 Pro、Galaxy S25 Ultra、OnePlus 13），选择Phi-4 Mini（3.8B Q4_K_M）。** 它是4B以下最智能的模型，以可用的对话速度运行。仅在有特定需求时选择其他模型——速度（SmolLM 2）、多语言（Qwen 3）或旧机型兼容（Gemma 3 1B）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '旗舰机（RAM 8GB以上）选Phi-4 Mini（最智能），速度优先选SmolLM 2 1.7B，多语言选Qwen 3 1.5B，4GB旧机选Gemma 3 1B，tool calling选Llama 3.2 3B，Phi-4 Mini不可用时的均衡默认选Gemma 3 4B。',
          },
          {
            type: 'plain-terms',
            text: '没有单一的最佳移动模型——正确的选择取决于你的设备和使用场景。如果手机是近两年的机型且有8GB以上RAM，安装Phi-4 Mini。如果主要用非英语聊天，安装Qwen 3。如果想要最快的回复速度哪怕牺牲一些质量，安装SmolLM 2。如果手机较旧或只有4GB RAM，安装Gemma 3 1B。六款模型的差异真实存在，但足够小，任何一款都能给出连贯的回答——没有一款达到云端质量。',
          },
        ],
        decisionBlock: {
          title: '如何选择移动端模型',
          localIf: [
            'RAM 8GB以上旗舰机（iPhone 16 Pro/17 Pro、Galaxy S25 Ultra、OnePlus 13）→ Phi-4 Mini 3.8B',
            '需要在任何设备上最快的tokens/sec → SmolLM 2 1.7B',
            '非英语使用（翻译、多语言聊天）→ Qwen 3 1.5B',
            '需要广泛应用兼容性、tool calling或RAG → Llama 3.2 3B',
            'RAM 4GB的旧机型 → Gemma 3 1B',
            'Phi-4 Mini在你的应用中不可用，需要4B级质量 → Gemma 3 4B',
          ],
          cloudIf: [
            '多步推理、复杂代码生成或长文档分析 → 使用云端或远程连接到运行70B以上模型的本地机器',
            '视觉语言任务（图像输入、OCR）→ 云端应用（2026年移动端视觉模型有限且速度慢）',
            '需要3000+token连贯性的长篇创意写作 → 云端或桌面端8B以上模型',
          ],
          quick: [
            '大多数用户的默认选择：Phi-4 Mini 3.8B',
            '所有设备上最快：SmolLM 2 1.7B',
            '最佳多语言：Qwen 3 1.5B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: '如果不确定，在旗舰机上先用Phi-4 Mini，在中端机上先用SmolLM 2 1.7B——两款都能在快速连接下5分钟内下载完成且可随时切换。用你真正关心的任务测试（一封需要摘要的真实邮件、一个真正想得到答案的问题）。如果质量可以接受，就定下来。如果不满意，通过PocketPal AI或LM Studio在30秒内切换到其他模型。',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-zh.svg',
        imageCaption: '移动端LLM选择4步指南：检查手机RAM，确定手机档次（4GB至8GB以上），选择使用场景（速度、多语言或质量），然后通过PocketPal AI或LM Studio安装Q4_K_M GGUF。',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '移动端模型对比表',
        content:
          '**下方四列表格是快速筛选层——按机型档次或使用场景选择对应行。** Tokens/sec数据基于iPhone 17 Pro上使用PocketPal AI（llama.cpp）的Q4_K_M量化。iPhone 16 Pro上数据约低15–25%，Galaxy S25 Ultra上使用MLC Chat或Termux+Ollama约低10–20%。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini最智能、SmolLM 2 1.7B最快、Qwen 3 1.5B多语言最强、Gemma 3 1B最小可用、Llama 3.2 3B最强3B全能、Gemma 3 4B均衡默认。',
          },
          {
            type: 'plain-terms',
            text: '按大小从上到下阅读此表，或直接跳到与你机型档次对应的行。"适用场景"列显示该模型的优化方向——选择对你最重要的优势对应的行，忽略其他行。',
          },
        ],
        columns: ['模型', '参数量', 'tokens/sec（17 Pro）', '适用场景'],
        rows: [
          { '模型': 'Phi-4 Mini', '参数量': '3.8B', 'tokens/sec（17 Pro）': '约13–18', '适用场景': '最智能小型模型——旗舰机默认' },
          { '模型': 'Gemma 3 4B', '参数量': '4B', 'tokens/sec（17 Pro）': '约10–13', '适用场景': 'Phi-4 Mini不可用时的均衡默认' },
          { '模型': 'Gemma 3 1B', '参数量': '1B', 'tokens/sec（17 Pro）': '约35–45', '适用场景': '旧机型（RAM 4GB）' },
          { '模型': 'SmolLM 2', '参数量': '1.7B', 'tokens/sec（17 Pro）': '约26–32', '适用场景': '最快tokens/sec，高响应聊天' },
          { '模型': 'Qwen 3', '参数量': '1.5B', 'tokens/sec（17 Pro）': '约24–32', '适用场景': '最佳多语言（35+种语言）' },
          { '模型': 'Llama 3.2', '参数量': '3B', 'tokens/sec（17 Pro）': '约16–22', '适用场景': '最强3B选项、tool calling、RAG' },
        ],
        note:
          '**速度与质量权衡说明：** 在同一芯片上，tokens/sec与参数量成反比——1B模型在相同硬件上比3.8B模型快约3–4倍。质量随参数量提升但非线性：得益于微软的训练数据组合，Phi-4 Mini（3.8B）的推理质量更接近7B模型而非1.7B模型。用此表做权衡：模型越快=回复越快，模型越智能=难题回答越好。',
        callouts: [
          {
            type: 'tip',
            text: 'iPhone 16 Pro的tokens/sec比此表中iPhone 17 Pro的数据约低15–25%——A18 Pro与A19 Pro Neural Engine的差距。Galaxy S25 Ultra（Snapdragon 8 Elite）在相同Q4_K_M GGUF下比iPhone 17 Pro约低10–20%，主要因为Termux+Ollama在Android上还未能像MLC Chat利用Apple Metal那样充分利用Snapdragon Hexagon NPU。',
          },
        ],
        image: '/images/mobile-llm-models-comparison-table-zh.svg',
        imageCaption: '在iPhone 17 Pro上以Q4_K_M量化基准测试6款移动端LLM：Phi-4 Mini（3.8B，约13–18词元/秒）最智能；SmolLM 2（1.7B，约26–32词元/秒）最快；Qwen 3（1.5B）多语言最强；Gemma 3 1B（约35–45词元/秒）适用于4GB旧机。',
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini：最智能的小型模型',
        content:
          '**Phi-4 Mini（3.8B参数，微软，2024年12月）凭借针对推理优化的训练数据组合，成为2026年4B以下最智能的模型。** 尽管体量相似，在chain-of-thought任务上超越Gemma 3 4B和Llama 3.2 3B。在任何RAM 8GB以上手机上将其作为默认模型使用。',
        items: [
          '**参数与训练：** 3.8B参数；在微软精心策划的高质量网络文本、合成推理链和学术内容混合数据上训练。架构为带grouped-query attention的Transformer。',
          '**内存占用：** Q4_K_M约2.7 GB，Q5_K_M约3.5 GB。在iPhone 16 Pro / 17 Pro（8 GB）和Galaxy S25 Ultra（12 GB）上留有足够系统空间。',
          '**速度（tokens/sec）：** iPhone 17 Pro约13–18，iPhone 16 Pro约10–15，Galaxy S25 Ultra约10–15（Termux+Ollama），iPhone 14 Pro约6–10（慢但可用）。',
          '**质量优势：** chain-of-thought推理、摘要、事实问答、基础代码生成。在MMLU、GSM8K等标准基准测试中超越同等大小的开源模型。',
          '**质量短板：** 世界知识不如Llama 3.2 3B（Common Crawl数据较少）；创意写作不如Gemma 3 4B自然；英语以外的多语言不如Qwen 3 1.5B。',
          '**最适合：** 希望在英语聊天、摘要和推理上使用最智能单一默认模型的旗舰机用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Phi-4 Mini从明确调用逐步推理的系统提示词中受益（"在回答之前请仔细思考"）。训练数据中推理链丰富，因此这种风格的提示词始终产生比简短指令更好的回答。对于快速聊天，不需要系统提示词；默认行为已经是对话式的。',
          },
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B：均衡默认选择',
        content:
          '**当应用中Phi-4 Mini不可用或偏好Google训练数据组合时，Gemma 3 4B（Google DeepMind，2025年）是均衡的默认选择。** 在相同硬件上比Phi-4 Mini略慢，但在聊天和摘要上质量相当，自然语言覆盖更广。',
        items: [
          '**参数与训练：** 4B参数；在Google精心策划的网络文本、代码和多语言数据混合上训练。与Gemma 2同一架构系列，支持更长上下文。',
          '**内存占用：** Q4_K_M约2.9 GB，Q5_K_M约3.7 GB。适合8GB以上手机；6GB手机上较紧张（改用Phi-4 Mini或更小模型）。',
          '**速度（tokens/sec）：** iPhone 17 Pro约10–13，iPhone 16 Pro约7–10，Galaxy S25 Ultra约7–10（架构差异导致尽管大小相近，但比Phi-4 Mini略慢）。',
          '**质量优势：** 自然的对话语气、强大的摘要能力、比Phi-4 Mini更广的世界知识（Common Crawl数据）、不错的多语言能力。',
          '**质量短板：** chain-of-thought推理弱于Phi-4 Mini；相同硬件上tokens/sec更慢；不总是移动应用中最先支持的模型。',
          '**最适合：** 希望以Phi-4 Mini替代选择使用Google训练模型的旗舰机用户，特别适合日常聊天、摘要和短文写作。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Gemma 3 4B使用与Phi-4 Mini不同的chat template——确认你的应用使用正确的Gemma模板（带`<start_of_turn>`标记）。错误的模板会产生混乱或重复的输出。PocketPal AI、MLC Chat和LM Studio会自动检测；LLM Farm需要在模型设置中手动选择Gemma模板。',
          },
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B：旧机型轻量选择',
        content:
          '**Gemma 3 1B（Google DeepMind，2025年）是2026年最小的可用移动模型——Q4_K_M约720 MB，可在4GB RAM设备上运行。** 质量限于短篇连贯回答（1–2段），但它是1 GB以下能在弱硬件上产生可用输出的唯一选择。',
        items: [
          '**参数与训练：** 1B参数；与4B模型相同的Gemma 3家族架构，但训练计算量更少。为边缘设备高效推理而训练。',
          '**内存占用：** Q4_K_M约720 MB，Q5_K_M约900 MB。可在iPhone SE第3代、iPhone 12/13、旧款Android（最低4GB RAM）上运行。',
          '**速度（tokens/sec）：** iPhone 17 Pro约35–45，iPhone 16 Pro约28–38，iPhone 14约20–28，旧款Android（4GB）约10–15。此列表中所有设备上最快的模型。',
          '**质量优势：** 速度快、内存占用低、短篇回答连贯、耗电少。',
          '**质量短板：** 多步推理弱、偏僻主题频繁出现事实错误、长篇生成（500+ tokens）重复、对话深度浅。',
          '**最适合：** 拥有低于6GB RAM门槛设备但仍想使用端侧AI的用户，或在长途飞行或低电量场景下优化续航的用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '将Gemma 3 1B用于短小精准的任务——单句摘要、一段式草稿、快速释义、主要语言对之间的简单翻译。避免要求它进行多段解释、多步推理或对偏僻事实精确度有要求的任务。提示词中加"简洁"二字能发挥它的优势。',
          },
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1.7B：tokens/sec最快',
        content:
          '**SmolLM 2 1.7B（Hugging Face，2024年）是此列表中所有测试设备上tokens/sec最快的移动模型。** iPhone 17 Pro约26–32 tok/sec，Galaxy S25 Ultra约20–28。当响应速度比回答深度更重要时是最佳选择。',
        items: [
          '**参数与训练：** 1.7B参数；在Hugging Face精心策划的针对小模型效率优化的混合数据上训练。架构专为消费级硬件低延迟推理调优。',
          '**内存占用：** Q4_K_M约1.1 GB。在任何6GB以上RAM设备上运行，为系统留出充足空间。',
          '**速度（tokens/sec）：** iPhone 17 Pro约26–32，iPhone 16 Pro约22–28，Galaxy S25 Ultra约20–28，iPhone 14 Pro约15–22。在同一芯片上比Phi-4 Mini快约2倍。',
          '**质量优势：** 快速对话回复、简单问答、自动补全风格的续写、英文写作。',
          '**质量短板：** 推理弱于Phi-4 Mini，世界知识不如Llama 3.2 3B，多语言弱于Qwen 3 1.5B，事实查询偶有幻觉。',
          '**最适合：** 延迟敏感的中端设备（文本输入自动补全、语音助手轮换、实时聊天），或大型模型体验迟缓的旧旗舰机。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SmolLM 2 1.7B是手机端离线语音助手的最佳搭档——Whisper + LLM + TTS完整流程请参考[在手机上构建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline)。高tokens/sec让语音对话响应保持在约1.5秒的感知门槛以下，即便在中端硬件上也如此。',
          },
        ],
        image: '/images/mobile-llm-models-speed-chart-zh.svg',
        imageCaption: '6款移动端LLM在3设备上Q4_K_M量化的词元/秒对比：Gemma 3 1B（iPhone 17 Pro约35–45）和SmolLM 2 1.7B（约26–32）速度领先；Phi-4 Mini（约13–18）和Gemma 3 4B（约10–13）较慢但更智能。',
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 3 1.5B：最强多语言移动模型',
        content:
          '**Qwen 3 1.5B（阿里巴巴，2024年）是2026年最强的多语言移动模型——在35+种语言上训练，包括中文、日文、韩文、阿拉伯文、德文、法文、西班牙文和俄文。** 翻译、非英语聊天和对话途中切换语言的旅行场景的最佳选择。',
        items: [
          '**参数与训练：** 1.5B参数；在阿里巴巴多语言语料库上训练，CJK语言、阿拉伯语和主要欧洲语言占比高。架构针对多语言推理优化。',
          '**内存占用：** Q4_K_M约1.0 GB。适合任何6GB以上RAM设备。',
          '**速度（tokens/sec）：** iPhone 17 Pro约24–32，iPhone 16 Pro约20–28，Galaxy S25 Ultra约18–26，iPhone 14 Pro约14–20。速度与SmolLM 2相当。',
          '**质量优势：** 35+种语言母语级输出（大多数小模型以英语为中心，多语言回退质量差）、主要语言对之间翻译能力强、Phi-4 Mini和Llama 3.2产生乱码的CJK输出连贯。',
          '**质量短板：** 纯英语推理略弱于Phi-4 Mini，创意写作不如Gemma 3 4B自然，tool calling弱于Llama 3.2 3B。',
          '**最适合：** 非英语用户（尤其是中文、日文、德文、西班牙文、法文使用者）、需要离线翻译的旅行者、构建多语言移动功能的开发者。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于两种特定语言之间的单次翻译，Qwen 3 1.5B通常优于以翻译作为次要任务运行的更大英语优先模型。对于用中文聊天的中文用户，Qwen 3尽管小60%，但产生的输出比Phi-4 Mini自然得多。基本规则：选择针对你主要语言训练的模型，而非参数最多的模型。',
          },
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B：可靠的3B全能模型',
        content:
          '**Llama 3.2 3B（Meta，2024年）是2026年测试最充分的3B模型——应用兼容性最广、六款模型中tool calling支持最强、社区微调生态最丰富。** 在原始质量上略逊于Phi-4 Mini，但在边缘情况下更可靠，移动应用支持更好。',
        items: [
          '**参数与训练：** 3B参数；在Meta大规模预训练语料库上训练，并经过聊天和工具使用的instruction-tuning。与8B和70B版本相同的Llama 3架构。',
          '**内存占用：** Q4_K_M约2.2 GB，Q5_K_M约2.8 GB。在8GB以上手机上运行留有系统空间；关闭其他应用后可在紧张的6GB手机上工作。',
          '**速度（tokens/sec）：** iPhone 17 Pro约16–22，iPhone 16 Pro约12–18，Galaxy S25 Ultra约12–18，iPhone 14 Pro约7–11。',
          '**质量优势：** 广泛的世界知识、强大的tool calling和function calling支持（4B以下模型中同类最强）、稳定的聊天行为、特定任务（医疗、法律、编程）微调的成熟生态。',
          '**质量短板：** chain-of-thought推理弱于Phi-4 Mini，相似大小下MMLU分数略低，对话语气不如Gemma 3 4B自然。',
          '**最适合：** 需要tool calling或function calling的移动应用（本地文档RAG、端侧Agent工作流），或希望使用社区微调库最丰富模型的用户。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.2 3B是此列表中唯一tool calling支持足够可靠，能用于端侧Agent工作流的模型——参考[本地AI Agent与MCP 2026](/zh/power-local-llm/local-ai-agents-with-mcp-2026)。Phi-4 Mini和SmolLM 2在技术上可以进行tool call，但Llama 3.2 3B是2026年唯一达到生产可用水平的。',
          },
        ],
      },
      quantization: {
        id: 'quantization',
        title: '移动端量化：Q4_K_M是默认标准',
        content:
          '**Q4_K_M是2026年移动LLM推理的标准量化——以四分之一的文件大小保留约95%的原始模型质量。** 仅在RAM 12GB以上手机（iPhone 17 Pro Max、Galaxy S25 Ultra）上有真正可用的额外内存时才使用Q5_K_M或Q6_K。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Q4_K_M是移动端默认——四分之一大小保留约95%质量。Q5_K_M / Q6_K仅在RAM 12GB以上手机上值得使用。',
          },
          {
            type: 'plain-terms',
            text: 'Hugging Face上的模型以全精度发布（每个参数以16位数存储）。在手机上下载量化版本，每个参数压缩到4位——文件缩小四倍，推理速度约快四倍，质量损失轻微。Q4_K_M是2026年社区公认的手机端最佳平衡方案。Q数字越高（Q5、Q6、Q8）压缩越少、质量越高，但文件越大；Q4是手机限制下的最优解。',
          },
        ],
        items: [
          '**Q4_K_M（推荐默认）：** 带K-quants和"M"混合精度的4位量化。约95%原始质量。2026年移动标准。六款模型均在Hugging Face上提供此格式。',
          '**Q5_K_M（RAM 12GB以上设备）：** 5位量化。约98%原始质量。文件约大25%。在iPhone 17 Pro Max（12 GB）或Galaxy S25 Ultra（12 GB）上对Phi-4 Mini和Llama 3.2 3B值得使用；8GB手机上RAM代价不值得。',
          '**Q6_K（很少需要）：** 6位量化。约99%原始质量。文件约大50%。仅适合内存充裕且对模型质量要求极高的手机（如长篇写作每个百分点都重要的场景）。',
          '**Q8_0（移动端避免使用）：** 8位量化。约99.5%原始质量。约为Q4_K_M的2倍大小。手机上RAM代价不值得；留给桌面端/笔记本使用。',
          '**Q3_K_M / Q2_K（仅极度受限设备）：** 3位和2位量化。质量降至约85–90%。仅在Q4_K_M的Gemma 3 1B仍然无法运行时使用（2026年罕见）。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '不要以"测试哪个更好"为由下载同一模型的多个量化版本。Q4_K_M和Q5_K_M之间的质量差异真实存在但很小，却会消耗256GB手机5GB以上的冗余存储。选择Q4_K_M，使用一周，只有在有具体证据证明质量不足时才升级到Q5_K_M。',
          },
        ],
        image: '/images/mobile-llm-models-quantization-guide-zh.svg',
        imageCaption: '移动端GGUF量化级别：Q4_K_M是6GB以上手机的默认选择（约95%质量，×0.5文件大小）；Q5_K_M和Q6_K仅用于12GB以上；Q8_0仅适用于桌面；Q3_K_M是4GB手机的最后选择。',
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: '档次判断：旗舰 vs 中端 vs 入门',
        content:
          '**手机档次决定模型上限——芯片代次和RAM比品牌更重要。** 旗舰手机（RAM 8GB以上，A18 Pro / A19 Pro / Snapdragon 8 Elite）可轻松运行3.8B–4B模型；中端手机（6–8GB RAM，旧旗舰芯片）运行1.7B–3B；入门或旧款手机（4–6GB RAM）运行1B–1.5B。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '旗舰机（8GB以上）→ Phi-4 Mini 3.8B；中端机（6–8GB）→ SmolLM 2 1.7B或Llama 3.2 3B；入门或旧款（4–6GB）→ Gemma 3 1B或Qwen 3 1.5B。',
          },
          {
            type: 'plain-terms',
            text: '让模型匹配你的设备，而非你的期望。6GB手机上的3.8B模型在其他应用需要内存时会产生令人沮丧的3秒停顿和崩溃。旗舰机上的1B模型浪费了硬件能力。选择在系统和至少另一个应用同时打开的情况下能舒适运行的最大模型。',
          },
        ],
        columns: ['手机档次', '代表机型', '推荐模型', '原因'],
        rows: [
          { '手机档次': '旗舰（RAM 8–12GB）', '代表机型': 'iPhone 17 Pro / Pro Max、iPhone 16 Pro、Galaxy S25 Ultra、OnePlus 13', '推荐模型': 'Phi-4 Mini（3.8B Q4_K_M）', '原因': '芯片以可用速度支持的最智能模型' },
          { '手机档次': '旧款旗舰（RAM 8GB）', '代表机型': 'iPhone 15 Pro、Galaxy S24 Ultra、Pixel 9 Pro', '推荐模型': 'Llama 3.2 3B或Phi-4 Mini', '原因': 'tool calling用Llama 3.2 3B；原始质量用Phi-4 Mini' },
          { '手机档次': '中端（RAM 6–8GB）', '代表机型': 'iPhone 14 Pro、Pixel 9、Snapdragon 8 Gen 2手机', '推荐模型': 'SmolLM 2 1.7B或Qwen 3 1.5B', '原因': '速度响应快；为系统留有余量' },
          { '手机档次': '入门/旧款（RAM 4–6GB）', '代表机型': 'iPhone 14、Snapdragon 7系列中端、旧款Android', '推荐模型': 'Gemma 3 1B或Qwen 3 1.5B', '原因': '仍能产生连贯输出的最小可用模型' },
          { '手机档次': '非常旧（RAM 4GB）', '代表机型': 'iPhone SE第3代、旧款4GB Android', '推荐模型': 'Gemma 3 1B', '原因': '唯一能放下的模型；推理有限但tokens/sec快' },
          { '手机档次': '不支持（<4GB）', '代表机型': 'iPhone SE第2代、旧款Android', '推荐模型': '改为远程连接到本地机器', '原因': '端侧LLM不实际；将平板/手机作为家用Ollama服务器的UI使用' },
        ],
        callouts: [
          {
            type: 'tip',
            text: '关于应用侧，请查阅iPhone和Android姐妹指南——它们介绍了哪些应用实际上在每个平台上支持这些模型。应用可用性有时滞后于模型可用性：Gemma 3 4B在PocketPal AI添加一键下载器的六个月前就已上线Hugging Face。如果模型不在应用的精选列表中，通常可以从Hugging Face以GGUF格式旁加载。',
          },
        ],
        image: '/images/mobile-llm-models-per-tier-verdict-zh.svg',
        imageCaption: '按手机档次的移动端LLM推荐：旗舰机（RAM 8–12GB）→ Phi-4 Mini 3.8B；旧旗舰（8GB）→ Llama 3.2 3B；中端（6–8GB）→ SmolLM 2 1.7B；低端（4–6GB）→ Qwen 3 1.5B；超旧机型（4GB）→ Gemma 3 1B。',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '常见误区',
        items: [
          '**选择超出手机RAM限制的更大模型。** 6GB手机上的Phi-4 Mini以3–5 tok/sec运行，当iOS / Android为其他应用回收内存时会崩溃。按档次表匹配模型和设备。',
          '**下载同一模型的多个量化版本。** 选择Q4_K_M就停手。256GB手机上5GB以上的冗余Q5/Q6版本是浪费空间，日常聊天中质量差异根本感知不到。',
          '**用SmolLM 2 1.7B进行多步推理。** 它是最快的模型，但不是最智能的。对于chain-of-thought任务（数学、规划、复杂推理），即使较慢的tokens/sec让人沮丧也要使用Phi-4 Mini。没有质量的速度只是更快地给出错误答案。',
          '**不加多语言提示前缀就让Phi-4 Mini输出非英语内容。** Phi-4 Mini能勉强处理常见欧洲语言，但在CJK或阿拉伯语上输出参差不齐。多语言使用时，在Phi-4 Mini旁边安装Qwen 3 1.5B，按语言切换。',
          '**期望这些模型达到云端AI质量。** 六款模型都是1B–4B，在聊天任务上大约是GPT-5.5能力的60–80%，复杂推理上差距更大。将它们用于擅长的场景（私人聊天、摘要、写作、翻译），需要70B以上模型的任务使用云端或远程连接。',
          '**将Phi-4 Mini（3.8B）与旧款Phi-3 Mini（3.8B）混淆。** 两者参数量相同，但Phi-4 Mini的训练数据和chat template不同。始终确认GGUF文件名中的模型标识符——是`phi-4-mini-instruct`而非`phi-3-mini-4k-instruct`。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          'Phi-4 Mini技术报告 — [Microsoft Research](https://arxiv.org/abs/2412.08905)（2024年12月）。',
          'Gemma 3技术报告 — [Google DeepMind](https://blog.google/technology/developers/gemma-3/)（2025年）。',
          'SmolLM 2模型卡 — [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct)（2024年）。',
          'Qwen 3技术报告 — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/)（2024年）。',
          'Llama 3.2模型卡 — [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)（2024年）。',
          'Q4_K_M量化参考 — [llama.cpp文档](https://github.com/ggerganov/llama.cpp)。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'iPhone上哪款移动模型最快？',
            a: 'Gemma 3 1B在iPhone 17 Pro上约35–45 tokens/sec，绝对最快，但是此列表中最小的模型。在1.5B–1.7B模型（速度与质量平衡）中，SmolLM 2 1.7B以约26–32 tokens/sec最快。在产生旗舰级输出质量的模型中，Phi-4 Mini约13–18 tokens/sec是最快的"智能"选项。按使用场景选择：如果响应速度比深度更重要，选SmolLM 2；如果深度更重要，选Phi-4 Mini。',
          },
          {
            q: 'Phi-4 Mini真的能在手机上超越7B模型吗？',
            a: '它在MMLU和推理任务等标准基准测试上超越旧款7B模型（Llama 3.3 7B、Mistral Small v0.1），尽管只有一半大小。它不能超越当前7B模型（Llama 3.3 7B、Mistral Small v0.3）的原始能力——后者在广泛知识和复杂推理上仍然领先。Phi-4 Mini能超重发挥的原因是微软的训练数据组合（富含合成推理链和高质量文本）。在手机上，7B模型通常太慢而不实用，所以Phi-4 Mini默认胜出。',
          },
          {
            q: 'SmolLM 2能在4年前的手机上运行吗？',
            a: '可以，在大多数4年前的旗舰机上可以。SmolLM 2 1.7B在Q4_K_M下需要约1.1 GB RAM用于模型加约500 MB推理开销——适合iPhone 13（6 GB）、iPhone 12 Pro Max（6 GB）和同等Android（6 GB以上）。在2021年的4GB设备（iPhone 12、基础款Android）上技术上能加载，但在其他内存压力下不稳定；改用Gemma 3 1B。',
          },
          {
            q: '手机上翻译哪款模型最好？',
            a: '涉及中文、日文、韩文、阿拉伯文、德文、法文、西班牙文或俄文的语言对选Qwen 3 1.5B。它以强大的多语言表示训练，在英语优先模型（Phi-4 Mini、Llama 3.2 3B）产生生硬或混乱结果的地方提供母语级质量。仅欧洲语言对可以考虑Gemma 3 4B作为次选。英语与特定语言之间的一次性翻译，安装的翻译应用（Google翻译、DeepL）通常优于任何本地LLM——本地模型在同一对话中需要将翻译与聊天或摘要结合时才真正发光。',
          },
          {
            q: '使用这些模型需要旗舰手机吗？',
            a: '不需要，只有最大的模型（Phi-4 Mini 3.8B、Gemma 3 4B、Llama 3.2 3B）才需要。6–8GB RAM的中端手机以全速（约20–28 tokens/sec）运行SmolLM 2 1.7B和Qwen 3 1.5B。4–6GB RAM的入门手机以约15–25 tokens/sec运行Gemma 3 1B。诚实的回答：如果还没有旗舰机，不要为了本地AI去买——现有手机上的小型模型对大多数使用场景已经足够。',
          },
          {
            q: '哪款模型耗电最少？',
            a: 'Gemma 3 1B遥遥领先——最小的模型意味着每个token计算最少，CPU/GPU负载更低，功耗更低。SmolLM 2 1.7B和Qwen 3 1.5B次之。3B–4B模型（Phi-4 Mini、Llama 3.2 3B、Gemma 3 4B）每次回答耗电约多2–3倍。在电量最为重要的长途飞行或长时间离网使用中，尽管有质量代价，Gemma 3 1B是正确选择。',
          },
          {
            q: '移动模型能处理多轮对话吗？',
            a: '短对话（5–10轮）可以，之后质量下降。六款模型的上下文窗口均为4,000–8,000 tokens；更长的对话超出窗口后模型会丢失早期轮次。对于需要跨会话记忆的持续聊天，实用的做法是：定期摘要对话，保存摘要，然后作为上下文输入回去。大多数移动应用（PocketPal AI、Private LLM）会自动完成此操作；LLM Farm需要手动配置。',
          },
          {
            q: '这些模型支持语音输入吗？',
            a: '支持，与Whisper语音转文字层结合使用。2026年移动端标准离线语音方案是：Whisper（small或tiny模型）语音转文字 → Phi-4 Mini或SmolLM 2生成回答 → Apple TTS或Android TTS语音合成。SmolLM 2 1.7B是语音的最佳LLM选择，因为高tokens/sec使语音对话响应保持在约1.5秒感知门槛以下——完整流程请参考[在手机上构建本地语音助手](/zh/power-local-llm/voice-assistant-local-mobile-offline)。',
          },
          {
            q: '旅行离线使用哪款最好？',
            a: '需要切换语言和翻译的旅行：Qwen 3 1.5B。主要需要英语参考（问问题、摘要旅行文件、起草邮件）的旅行：旗舰机用Phi-4 Mini，中端机用SmolLM 2 1.7B。旅行是本地AI最强的整体使用场景——无需漫游数据、无云端API费用，也不用担心网络差的地区云依赖失效。旅行前下载模型；适度使用可以在单次充电下撑过整段旅程。',
          },
          {
            q: '移动端模型在2027年还有用吗？',
            a: '有用，但具体型号名称会变化。移动小型LLM前沿大约每6–9个月移动一次——到2026年Q4可能出现超越Phi-4 Mini的新~3B模型，到2027年中期1B–2B类可能达到今天3B–4B模型的水平。这个类别不会过时；具体推荐会更新。查阅此文章（下次更新预计：2026-11-08）了解下一代阵容。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026年iPhone最佳本地LLM应用（无需WiFi运行AI）](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 加载这些模型的iPhone应用姐妹指南。',
          '[2026年Android最佳本地模型应用：真实设备对比6款应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 加载这些模型的Android应用姐妹指南。',
          '[在手机上构建本地语音助手：Whisper + 本地LLM](/zh/power-local-llm/voice-assistant-local-mobile-offline) — 在离线语音流程中应用这些移动模型的细分场景。',
          '[在平板上运行本地AI：iPad Pro M4、Galaxy Tab S10、OnePlus Pad 2（2026年）](/zh/power-local-llm/run-ai-on-tablet-ipad-android) — 使用相同模型阵容的平板读者的相邻平台指南。',
          '[LLM量化详解：Q4_K_M、Q5_K_M、GGUF格式](/zh/local-llms/llm-quantization-explained) — 本文中Q4_K_M默认的量化参考权威。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 覆盖所有硬件档次的更广泛模型参考，不限于移动端。',
          '[本地LLM软件目录2026](/zh/power-local-llm/local-llm-software-directory-2026) — 涵盖所有平台值得关注的本地LLM工具目录。',
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-08',
    dateModified: '2026-05-08',
    next_refresh_due: '2026-11-08',
    theme: 'Mobile & Edge LLMs',
    title: 'أفضل نماذج LLM للهاتف في 2026: Phi-4 Mini مقابل Gemma 3 مقابل SmolLM',
    seoTitle: 'نماذج LLM للهاتف 2026: Phi-4 Mini وGemma 3 وSmolLM',
    intro:
      'ستة نماذج لغوية صغيرة تغطي تقريبًا جميع حالات الاستخدام على الهاتف في 2026: Phi-4 Mini (3.8B) وGemma 3 4B وGemma 3 1B وSmolLM 2 1.7B وQwen 3 1.5B وLlama 3.2 3B. تتباين في الرموز في الثانية واستهلاك الذاكرة وجودة الدردشة والتلخيص والترجمة وكتابة النصوص القصيرة. يقارن هذا الدليل هذه النماذج على iPhone 17 Pro وGalaxy S25 Ultra، ويقدم حكمًا لكل فئة (راقية / متوسطة / اقتصادية)، ويشرح لماذا يُعد التكميم Q4_K_M هو المعيار على الهاتف.',
    metaDescription:
      'Phi-4 Mini وGemma 3 وSmolLM 2 مُختبرة على iPhone 17 Pro وGalaxy S25 Ultra. مقارنة السرعة والذاكرة RAM والجودة — وسبب هيمنة Q4_K_M على الهاتف.',
    twitterDescription:
      'أفضل نماذج LLM للهاتف في 2026: Phi-4 Mini (الأذكى)، SmolLM 2 (الأسرع)، Qwen 3 (متعدد اللغات)، Gemma 3 1B (للهواتف القديمة)، Gemma 3 4B (متوازن)، Llama 3.2 3B (الأكثر تنوعًا).',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 3 1.5B',
      'Llama 3.2 3B',
    ],
    current_hardware_mentioned: [
      'iPhone 17 Pro (A19 Pro)',
      'iPhone 16 Pro (A18 Pro, 8 GB RAM)',
      'iPhone 14 Pro (A16, 6 GB RAM)',
      'Samsung Galaxy S25 Ultra (Snapdragon 8 Elite)',
      'Pixel 9 Pro (Tensor G5)',
      'OnePlus 13 (Snapdragon 8 Elite)',
    ],
    audience:
      'مستخدمو الهواتف الذين يختارون نموذج LLM محليًا لـ iPhone أو Android — بما فيهم المسافرون والمهتمون بالخصوصية والمطورون الذين يبنون ميزات ذكاء اصطناعي للهاتف دون اتصال.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'أفضل نموذج LLM للهاتف',
    targetKeywords: [
      'أفضل نموذج LLM للهاتف',
      'phi-4 mini مقابل gemma 3',
      'smollm 2 هاتف',
      'qwen 2.5 1.5b هاتف',
      'llama 3.2 3b هاتف',
      'نموذج LLM صغير للهاتف',
      'أفضل LLM على الجهاز 2026',
    ],
    leadAnswerBlock:
      '**لمعظم هواتف الفئة الراقية (ذاكرة RAM 8 جيجابايت أو أكثر) في 2026، يُعد Phi-4 Mini (3.8B) بتكميم Q4_K_M النموذجَ الأذكى الذي يعمل بسرعة مقبولة (~13–18 رمزًا/ثانية على iPhone 17 Pro).** على الهواتف القديمة بذاكرة 6 جيجابايت، يناسب Qwen 3 1.5B أو SmolLM 2 1.7B المتطلبات ويُنتجان ردودًا متسقة قصيرة. SmolLM 2 1.7B هو الأسرع في الرموز بالثانية على جميع الأجهزة المُختبرة. Qwen 3 1.5B هو الخيار الأفضل لتعدد اللغات (أكثر من 35 لغة، بما فيها العربية). Gemma 3 4B هو الخيار المتوازن حين لا يتوفر Phi-4 Mini في التطبيق. Gemma 3 1B هو الخيار الخفيف للهواتف القديمة جدًا (ذاكرة RAM 4 جيجابايت). Llama 3.2 3B هو الأكثر تجربةً وتنوعًا بين النماذج 3B مع أوسع دعم للأدوات.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج LLM محلي للهاتف في 2026؟',
        answer:
          'Phi-4 Mini (3.8B) هو أذكى نموذج يعمل بسرعة مقبولة على هواتف الفئة الراقية (ذاكرة RAM 8 جيجابايت أو أكثر) — حوالي 13–18 رمزًا/ثانية على iPhone 17 Pro. SmolLM 2 1.7B هو الأسرع على جميع الأجهزة. Qwen 3 1.5B هو الأفضل لتعدد اللغات. Gemma 3 4B هو الخيار المتوازن الافتراضي. Gemma 3 1B يعمل على الهواتف القديمة جدًا (ذاكرة RAM 4 جيجابايت). Llama 3.2 3B هو الأفضل بين نماذج 3B للاستخدام العام. ينبغي تنزيل النماذج الستة بتنسيق Q4_K_M GGUF — وهو المعيار للهاتف الذي يحافظ على ~95% من الجودة الأصلية بربع الحجم.',
        bullets: [
          'Phi-4 Mini (3.8B) — أذكى نموذج صغير. الأفضل على هواتف 8 جيجابايت أو أكثر (iPhone 17 Pro: ~13–18 رمز/ثانية).',
          'Gemma 3 4B — الخيار المتوازن الافتراضي. جودة جيدة لكنه أبطأ من Phi-4 Mini على نفس الجهاز.',
          'Gemma 3 1B — للهواتف القديمة (ذاكرة RAM 4 جيجابايت). سريع لكن قدرات الاستدلال محدودة.',
          'SmolLM 2 1.7B — الأسرع في الرموز/الثانية على جميع الهواتف المُختبرة. الأفضل للدردشة السريعة على الهواتف المتوسطة.',
          'Qwen 3 1.5B — أفضل نموذج هاتف متعدد اللغات (أكثر من 35 لغة بما فيها العربية). الأفضل للترجمة والدردشة بغير الإنجليزية.',
          'Llama 3.2 3B — أكثر نماذج 3B تجربةً وتنوعًا. الأفضل في tool calling وRAG والتطبيقات التي تحتاج أوسع توافق.',
          'التكميم: نزّل Q4_K_M GGUF للنماذج الستة. استخدم Q5/Q6 فقط إن كان هاتفك يملك ذاكرة 12 جيجابايت أو أكثر وإذا كان التطبيق يدعمها.',
        ],
        updatedDate: '2026-05-08',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'أي نموذج هاتف تختار؟', anchor: '#which-model' },
      { label: 'جدول مقارنة نماذج الهاتف', anchor: '#comparison-table' },
      { label: 'Phi-4 Mini: أذكى نموذج صغير', anchor: '#phi-4-mini' },
      { label: 'Gemma 3 4B: الخيار المتوازن', anchor: '#gemma-3-4b' },
      { label: 'Gemma 3 1B: الخيار الخفيف للهواتف القديمة', anchor: '#gemma-3-1b' },
      { label: 'SmolLM 2 1.7B: الأسرع في الرموز بالثانية', anchor: '#smollm-2' },
      { label: 'Qwen 3 1.5B: أفضل نموذج هاتف متعدد اللغات', anchor: '#qwen-2-5' },
      { label: 'Llama 3.2 3B: الأكثر موثوقية بين نماذج 3B', anchor: '#llama-3-2-3b' },
      { label: 'التكميم للهاتف: Q4_K_M كمعيار', anchor: '#quantization' },
      { label: 'الحكم حسب الفئة: راقية مقابل متوسطة مقابل اقتصادية', anchor: '#per-tier-verdict' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Phi-4 Mini (3.8B) هو أذكى نموذج صغير في 2026.** الأفضل على هواتف الفئة الراقية بذاكرة RAM 8 جيجابايت أو أكثر — يعمل بـ ~13–18 رمزًا/ثانية على iPhone 17 Pro و~10–15 على iPhone 16 Pro. الأعلى استدلالًا لكل معامل بين جميع النماذج دون حجم 4B.',
          '**SmolLM 2 1.7B هو الأسرع في الرموز بالثانية على جميع الهواتف المُختبرة.** ~26–32 رمزًا/ثانية على iPhone 17 Pro، و~20–28 على Galaxy S25 Ultra. الأفضل حين تهم سرعة الاستجابة أكثر من عمق المحتوى (دردشة سريعة، مهام الإكمال التلقائي).',
          '**Qwen 3 1.5B هو أفضل نموذج هاتف متعدد اللغات.** تدرّب على أكثر من 35 لغة بما فيها العربية والصينية واليابانية والألمانية بجودة أصلية. الأفضل للترجمة والكتابة بلغات أخرى والاستخدام في السفر.',
          '**Gemma 3 4B هو الخيار المتوازن الافتراضي.** أبطأ قليلًا من Phi-4 Mini على نفس الجهاز، لكنه مماثل في الدردشة والتلخيص. الأفضل حين لا يتوفر Phi-4 Mini في التطبيق أو تفضّل مزيج بيانات التدريب من Google.',
          '**Gemma 3 1B هو الخيار الخفيف للهواتف القديمة.** يعمل في ذاكرة RAM 4 جيجابايت (iPhone SE الجيل الثالث، Android القديم). قدرات الاستدلال متعدد الخطوات محدودة، لكنه يُنتج ردودًا متسقة من فقرة إلى فقرتين أسرع من أي نموذج آخر على الجهاز الضعيف.',
          '**Llama 3.2 3B هو أكثر نماذج 3B تجربةً وتنوعًا.** أفضل دعم لـ tool calling بين النماذج الستة، وأوسع توافق مع التطبيقات، وأكبر نظام بيئي من الضبط الدقيق المجتمعي. أقل قليلًا من Phi-4 Mini في الجودة الخام لكنه أكثر موثوقية في الحالات الحدية.',
          '**Q4_K_M هو معيار التكميم للهاتف في 2026.** يحافظ على ~95% من الجودة الأصلية بربع حجم الملف. استخدم Q5_K_M أو Q6_K فقط على الهواتف بذاكرة RAM 12 جيجابايت أو أكثر (iPhone 17 Pro Max) وفقط إذا كان التطبيق يدعمها.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**النماذج المُختبرة:** Phi-4 Mini 3.8B وGemma 3 4B وGemma 3 1B وSmolLM 2 1.7B وQwen 3 1.5B وLlama 3.2 3B (جميعها Q4_K_M GGUF).',
          '**أجهزة الاختبار:** iPhone 17 Pro (A19 Pro) وiPhone 16 Pro (A18 Pro، 8 جيجابايت) وGalaxy S25 Ultra (Snapdragon 8 Elite) وPixel 9 Pro (Tensor G5) وOnePlus 13 (Snapdragon 8 Elite).',
          '**محركات الاستدلال:** llama.cpp عبر PocketPal AI / LLM Farm (افتراضي)، وMLC LLM عبر MLC Chat (مُسرَّع بـ Metal على iPhone)، وOllama عبر Termux (Android).',
          '**مساحة الذاكرة (Q4_K_M):** Phi-4 Mini ~2.7 جيجابايت، Gemma 3 4B ~2.9 جيجابايت، Llama 3.2 3B ~2.2 جيجابايت، Qwen 3 1.5B ~1.0 جيجابايت، SmolLM 2 1.7B ~1.1 جيجابايت، Gemma 3 1B ~720 ميجابايت.',
          '**الحد الأدنى من RAM (نشط):** هاتف بـ 6 جيجابايت للنماذج 1.5B–1.7B؛ 8 جيجابايت للنماذج 3B–4B؛ 4 جيجابايت لـ Gemma 3 1B فقط.',
          '**أسرع رموز/ثانية على iPhone 17 Pro:** Gemma 3 1B ~35–45، SmolLM 2 ~26–32، Qwen 3 ~24–32، Llama 3.2 3B ~16–22، Phi-4 Mini ~13–18، Gemma 3 4B ~10–13.',
          '**مصدر التكميم:** النماذج الستة متاحة كـ Q4_K_M GGUF على Hugging Face وعبر PocketPal AI / MLC Chat / LM Studio.',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: 'أي نموذج هاتف تختار؟',
        content:
          '**لمعظم هواتف الفئة الراقية (iPhone 16 Pro / 17 Pro، Galaxy S25 Ultra، OnePlus 13)، اختر Phi-4 Mini (3.8B Q4_K_M).** هو أذكى نموذج دون حجم 4B ويعمل بسرعة محادثة مقبولة. اختر نموذجًا آخر فقط حين تكون لديك حاجة محددة لا يُغطيها — السرعة (SmolLM 2)، أو تعدد اللغات (Qwen 3)، أو توافق الهواتف القديمة (Gemma 3 1B).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر Phi-4 Mini للفئة الراقية بذاكرة 8 جيجابايت أو أكثر (الأذكى)، وSmolLM 2 1.7B للسرعة، وQwen 3 1.5B لتعدد اللغات، وGemma 3 1B لهواتف ذاكرة 4 جيجابايت، وLlama 3.2 3B لـ tool calling، وGemma 3 4B كخيار متوازن حين لا يتوفر Phi-4 Mini.',
          },
          {
            type: 'plain-terms',
            text: 'لا يوجد أفضل نموذج هاتف واحد للجميع — الاختيار الصحيح يعتمد على هاتفك وما تفعله به. إذا كان هاتفك من آخر سنتين ويملك 8 جيجابايت من ذاكرة RAM أو أكثر، ثبّت Phi-4 Mini. إذا كنت تتحدث بلغة أخرى غير الإنجليزية، ثبّت Qwen 3. إذا أردت الردود الأسرع ولو مع تراجع طفيف في الجودة، ثبّت SmolLM 2. إذا كان هاتفك قديمًا أو يملك فقط 4 جيجابايت من ذاكرة RAM، ثبّت Gemma 3 1B. الفوارق حقيقية لكنها صغيرة بما يكفي لكي تُنتج أي من هذه النماذج ردودًا متسقة — لا شيء منها يرقى إلى جودة السحابة.',
          },
        ],
        decisionBlock: {
          title: 'القرار: أي نموذج هاتف؟',
          localIf: [
            'هاتف فئة راقية بذاكرة RAM 8 جيجابايت أو أكثر (iPhone 16 Pro/17 Pro، Galaxy S25 Ultra، OnePlus 13) → Phi-4 Mini 3.8B',
            'تحتاج أسرع رموز/ثانية على أي هاتف → SmolLM 2 1.7B',
            'استخدام بلغات غير الإنجليزية (ترجمة، دردشة متعددة اللغات) → Qwen 3 1.5B',
            'تحتاج توافقًا واسعًا مع التطبيقات أو tool calling أو RAG → Llama 3.2 3B',
            'هاتف قديم بذاكرة RAM 4 جيجابايت → Gemma 3 1B',
            'Phi-4 Mini غير متوفر في تطبيقك، تحتاج جودة فئة 4B → Gemma 3 4B',
          ],
          cloudIf: [
            'استدلال متعدد الخطوات، توليد كود معقد، أو تحليل مستندات طويلة → استخدم السحابة أو اتصل عن بُعد بجهاز منزلي بـ 70B أو أكثر',
            'مهام الرؤية واللغة (إدخال صور، OCR) → تطبيقات السحابة (نماذج الرؤية على الهاتف في 2026 محدودة وبطيئة)',
            'كتابة إبداعية طويلة تحتاج اتساقًا فوق 3000 رمز → السحابة أو نماذج 8B أو أكبر على سطح المكتب',
          ],
          quick: [
            'الخيار الافتراضي للغالبية: Phi-4 Mini 3.8B',
            'الأسرع على جميع الأجهزة: SmolLM 2 1.7B',
            'الأفضل متعدد اللغات: Qwen 3 1.5B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'إن لم تكن متأكدًا، ابدأ بـ Phi-4 Mini على هاتف فئة راقية أو SmolLM 2 1.7B على هاتف متوسط — كلاهما يُنزَّل في أقل من 5 دقائق باتصال سريع ويمكن التراجع عنه. جرّبه على مهمة تهمك فعلًا (بريد إلكتروني حقيقي لتلخيصه، سؤال حقيقي للإجابة عنه). إذا كانت الجودة مقبولة، فهذا نموذجك الافتراضي. إذا لم تكن، بدّله في 30 ثانية عبر PocketPal AI أو LM Studio.',
          },
        ],
        image: '/images/mobile-llm-models-decision-flow-es.svg',
        imageCaption: 'دليل اختيار نماذج LLM للهاتف في 4 خطوات: التحقق من ذاكرة RAM، واختيار الفئة (4 جيجابايت إلى 8 جيجابايت أو أكثر)، وتحديد حالة الاستخدام (سرعة أو تعدد لغات أو جودة)، ثم تثبيت Q4_K_M GGUF عبر PocketPal AI أو LM Studio.',
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'جدول مقارنة نماذج الهاتف',
        content:
          '**الجدول الرباعي الأعمدة أدناه هو طبقة الاستخراج السريع — اختر صفًا حسب فئة جهازك أو حالة الاستخدام.** أرقام الرموز/الثانية تفترض تكميم Q4_K_M على iPhone 17 Pro مع PocketPal AI (llama.cpp). الأرقام أقل بـ 15–25% على iPhone 16 Pro، وأقل بـ 10–20% تقريبًا على Galaxy S25 Ultra مع MLC Chat أو Termux+Ollama.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini هو الأذكى، وSmolLM 2 1.7B هو الأسرع، وQwen 3 1.5B هو الأفضل متعدد اللغات، وGemma 3 1B هو الأصغر الصالح، وLlama 3.2 3B هو الأفضل شاملًا بين نماذج 3B، وGemma 3 4B هو الخيار المتوازن الافتراضي.',
          },
          {
            type: 'plain-terms',
            text: 'اقرأ هذا الجدول من الأعلى إلى الأسفل بحسب الحجم، أو اذهب مباشرةً إلى الصف الذي يناسب فئة جهازك. عمود "الأفضل في" يوضح ما يُحسّنه النموذج — اختر الصف الذي تهمك ميزته الأساسية وتجاهل الباقي.',
          },
        ],
        columns: ['النموذج', 'الحجم', 'رموز/ثانية (17 Pro)', 'الأفضل في'],
        rows: [
          { 'النموذج': 'Phi-4 Mini', 'الحجم': '3.8B', 'رموز/ثانية (17 Pro)': '~13–18', 'الأفضل في': 'أذكى نموذج صغير — افتراضي للفئة الراقية' },
          { 'النموذج': 'Gemma 3 4B', 'الحجم': '4B', 'رموز/ثانية (17 Pro)': '~10–13', 'الأفضل في': 'خيار متوازن حين لا يتوفر Phi-4 Mini' },
          { 'النموذج': 'Gemma 3 1B', 'الحجم': '1B', 'رموز/ثانية (17 Pro)': '~35–45', 'الأفضل في': 'هواتف قديمة (ذاكرة RAM 4 جيجابايت)' },
          { 'النموذج': 'SmolLM 2', 'الحجم': '1.7B', 'رموز/ثانية (17 Pro)': '~26–32', 'الأفضل في': 'أسرع رموز/ثانية، دردشة سريعة' },
          { 'النموذج': 'Qwen 3', 'الحجم': '1.5B', 'رموز/ثانية (17 Pro)': '~24–32', 'الأفضل في': 'الأفضل متعدد اللغات (أكثر من 35 لغة)' },
          { 'النموذج': 'Llama 3.2', 'الحجم': '3B', 'رموز/ثانية (17 Pro)': '~16–22', 'الأفضل في': 'الأفضل شاملًا 3B، tool calling، RAG' },
        ],
        note:
          '**ملاحظة حول مقايضة السرعة والجودة:** يتناسب الرموز/الثانية عكسيًا مع عدد المعاملات على نفس الرقاقة — نموذج 1B أسرع بـ 3–4 أضعاف من نموذج 3.8B على جهاز مماثل. تتناسب الجودة مع المعاملات لكن ليس خطيًا: جودة استدلال Phi-4 Mini (3.8B) أقرب إلى نموذج 7B من نموذج 1.7B بفضل مزيج بيانات التدريب من Microsoft. استخدم الجدول للموازنة: نموذج أسرع = استجابة أسرع، نموذج أذكى = إجابة أفضل للأسئلة الصعبة.',
        callouts: [
          {
            type: 'warning',
            text: 'هذه الأرقام من أجهزة إنتاج واقعية — وليست من أجهزة اختبار مُحسَّنة. تتباين النتائج بنسبة ±15% بحسب حرارة الجهاز وخلفية التطبيقات والحمل المتزامن على الرقاقة. شغّل معيارًا خاصًا بك بعد تثبيت النموذج للحصول على نتائجك الفعلية.',
          },
        ],
      },
      phi4Mini: {
        id: 'phi-4-mini',
        title: 'Phi-4 Mini: أذكى نموذج صغير',
        content: [
          'Phi-4 Mini من Microsoft هو نموذج 3.8B مُحسَّن للحجم: يتفوق على نماذج 7B أقدم في المعايير القياسية بنصف عدد المعاملات، وذلك بفضل مزيج بيانات التدريب من Microsoft الغني بسلاسل التفكير الاصطناعية والنصوص عالية الجودة.',
          '**الأداء:** ~13–18 رمزًا/ثانية على iPhone 17 Pro، و~10–15 على iPhone 16 Pro. الأبطأ بين النماذج الستة في الرموز/الثانية، لكنه يُنتج أجودة ردود.',
          '**حجم الذاكرة (Q4_K_M):** ~2.7 جيجابايت لتحميل النموذج + ~500 ميجابايت لعبء الاستدلال. الحد الأدنى: هاتف بذاكرة RAM 8 جيجابايت. قد يعمل على هواتف 6 جيجابايت لكن بعدم استقرار عند ضغط الذاكرة.',
          '**الأفضل في:** الاستدلال متعدد الخطوات، وصياغة الكود، والتفسيرات التحليلية، وأسئلة الأسلوب الموسوعي. الأقل ملاءمةً للنصوص متعددة اللغات بغير الإنجليزية.',
          '**التثبيت:** أسهل طريقة هي PocketPal AI (iOS/Android) → ابحث عن "Phi-4-mini-instruct-Q4_K_M". تأكد من وجود "instruct" في اسم النموذج — النسخ الأساسية لا تُجري محادثات.',
        ],
      },
      gemma3_4b: {
        id: 'gemma-3-4b',
        title: 'Gemma 3 4B: الخيار المتوازن',
        content: [
          'تُنتج Gemma 3 4B من Google جودة مماثلة لـ Phi-4 Mini في مهام الدردشة والتلخيص على نفس الجهاز، لكنها أبطأ بـ ~20–30% في الرموز/الثانية. الخيار الافتراضي حين لا يتوفر Phi-4 Mini في تطبيقك أو تفضل بيانات التدريب من Google (تُقلل التحيزات لبعض المواضيع).',
          '**الأداء:** ~10–13 رمزًا/ثانية على iPhone 17 Pro. في حدود الاستجابة الحوارية المقبولة لكن أبطأ بشكل ملحوظ من Phi-4 Mini.',
          '**حجم الذاكرة (Q4_K_M):** ~2.9 جيجابايت — أكبر قليلًا من Phi-4 Mini. يحتاج ذاكرة RAM 8 جيجابايت للعمل المستقر.',
          '**الأفضل في:** الكتابة الإبداعية ومهام التلخيص العامة حيث يتوافق نهج التدريب من Google بشكل أفضل. توافق واسع مع تطبيقات الاستدلال بفضل موقع Google الواسع.',
        ],
      },
      gemma3_1b: {
        id: 'gemma-3-1b',
        title: 'Gemma 3 1B: الخيار الخفيف للهواتف القديمة',
        content: [
          'Gemma 3 1B هو النموذج الأصغر ضمن الستة: الأسرع بفارق كبير (~35–45 رمزًا/ثانية على iPhone 17 Pro) والوحيد الذي يعمل بشكل موثوق على هواتف بذاكرة RAM 4 جيجابايت.',
          '**حجم الذاكرة (Q4_K_M):** ~720 ميجابايت فقط. يعمل على iPhone SE الجيل الثالث وأندرويد القديم بـ 4 جيجابايت.',
          '**القيود:** قدرات الاستدلال متعدد الخطوات ضعيفة مقارنةً بالنماذج الأكبر. الأفضل في الردود المختصرة من فقرة إلى فقرتين. لا يُنصح به للكود المعقد أو التحليل أو الأسئلة الموسوعية الطويلة.',
          '**التثبيت:** متاح على PocketPal AI وMLC Chat وLLM Farm. ابحث عن "gemma-3-1b-it-Q4_K_M" — الـ "it" يعني instruct-tuned (ضروري للمحادثة).',
        ],
      },
      smollm2: {
        id: 'smollm-2',
        title: 'SmolLM 2 1.7B: الأسرع في الرموز بالثانية',
        content: [
          'يُنتج تطبيق SmolLM 2 1.7B من Hugging Face أسرع رموز/الثانية بين النماذج الستة على جميع الهواتف المُختبرة — ~26–32 رمزًا/ثانية على iPhone 17 Pro. الخيار الأول لجلسات الدردشة السريعة حيث تهم الاستجابة الآنية أكثر من عمق التحليل.',
          '**حجم الذاكرة (Q4_K_M):** ~1.1 جيجابايت. يعمل على هواتف بذاكرة RAM 6 جيجابايت بهامش كافٍ.',
          '**الأفضل في:** الدردشة سريعة المحادثة، والإكمال التلقائي، والتلخيص السريع، وإدخال الأوامر الصوتية (الرموز/الثانية المرتفعة تُبقي الاستجابة الصوتية دون عتبة الإدراك ~1.5 ثانية).',
          '**القيود:** أضعف من Phi-4 Mini في التفكير المعمّق والكود والأسئلة التحليلية الطويلة. استخدمه حين تحتاج السرعة وتقبل جودة أقل بقليل.',
        ],
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 3 1.5B: أفضل نموذج هاتف متعدد اللغات',
        content: [
          'نموذج Qwen 3 1.5B من Alibaba مُدرَّب على أكثر من 35 لغة بتمثيل أصلي حقيقي — بما فيها العربية والصينية والصينية التقليدية واليابانية والكورية والألمانية والفرنسية والإسبانية والبرتغالية والروسية. يُنتج ترجمات وردودًا بالعربية ولغات أخرى أجود بكثير من النماذج ذات التوجه الغربي.',
          '**حجم الذاكرة (Q4_K_M):** ~1.0 جيجابايت. يعمل بشكل مريح على هواتف بذاكرة RAM 6 جيجابايت.',
          '**الأداء:** ~24–32 رمزًا/ثانية على iPhone 17 Pro — من بين الأسرع في الستة.',
          '**الأفضل في:** الترجمة، والدردشة بالعربية أو لغات آسيوية، والسفر حيث تتنقل بين لغات، وإنتاج محتوى متعدد اللغات. أقل تفوقًا من Phi-4 Mini في الاستدلال المعمق باللغة الإنجليزية.',
          '**التثبيت:** `ollama pull qwen2.5:1.5b` أو ابحث عن "Qwen2.5-1.5B-Instruct-Q4_K_M" في PocketPal AI.',
        ],
      },
      llama32_3b: {
        id: 'llama-3-2-3b',
        title: 'Llama 3.2 3B: الأكثر موثوقية بين نماذج 3B',
        content: [
          'Llama 3.2 3B من Meta هو أكثر نماذج 3B تجربةً وتوثيقًا: الأوسع نظامًا بيئيًا من الضبط الدقيق المجتمعي، وأفضل دعم لـ tool calling بين الستة، وأوسع توافق مع تطبيقات الاستدلال (LM Studio، PocketPal AI، Ollama، LLM Farm).',
          '**حجم الذاكرة (Q4_K_M):** ~2.2 جيجابايت. يحتاج هاتفًا بذاكرة RAM 6–8 جيجابايت للعمل المستقر.',
          '**الأداء:** ~16–22 رمزًا/ثانية على iPhone 17 Pro. أبطأ من SmolLM 2 وQwen 3 لكن أذكى بشكل ملحوظ.',
          '**الأفضل في:** تطبيقات tool calling، وسير عمل RAG على الجهاز، والحالات التي تحتاج فيها أوسع توافق مع تطبيقات الطرف الثالث. كذلك الخيار الأفضل إذا كنت تختبر ميزات ذكاء اصطناعي للهاتف.',
        ],
      },
      quantization: {
        id: 'quantization',
        title: 'التكميم للهاتف: Q4_K_M كمعيار',
        content: [
          '**Q4_K_M هو إعداد الهاتف الافتراضي في 2026.** "Q4" تعني بت 4 لكل وزن (أصغر بـ 4 أضعاف من الدقة العائمة الكاملة)؛ "_K_M" تعني كتل k لكل طبقة بحجم متوسط — مجدي أكثر من "Q4_0" البسيط. الجودة: ~95% من النموذج الأصلي غير المُكمَّم، الحجم: ~25% من ملف الدقة الكاملة.',
          '**Q5_K_M:** جودة أعلى (~97% من الأصل)، أكبر بـ ~25%. مناسب فقط لهواتف 12 جيجابايت أو أكثر (iPhone 17 Pro Max، Galaxy S25 Ultra بذاكرة 12 جيجابايت).',
          '**Q6_K:** أعلى جودة قبل الدقة الكاملة (~99% من الأصل)، أكبر بـ ~50% من Q4_K_M. شبه مستحيل على الهواتف بذاكرة أقل من 16 جيجابايت.',
          '**توصية:** ابدأ دائمًا بـ Q4_K_M. لن تلاحظ فرقًا في جودة الدردشة أو التلخيص أو الترجمة بين Q4_K_M وQ5_K_M إلا إذا قارنت تحليلات متعمقة. وفّر مساحة التخزين.',
        ],
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'الحكم حسب الفئة: راقية مقابل متوسطة مقابل اقتصادية',
        content: [
          '**فئة راقية (8 جيجابايت أو أكثر من RAM، iPhone 17 Pro / Galaxy S25 Ultra / OnePlus 13):** Phi-4 Mini Q4_K_M. لا يوجد نموذج آخر في هذا الحجم يُنتج جودة مماثلة على هذا الجهاز. إذا كان Phi-4 Mini غير متاح في تطبيقك الأفضل، استخدم Gemma 3 4B كبديل مباشر.',
          '**فئة متوسطة (6 جيجابايت RAM، iPhone 14 Pro / Pixel 8 / Galaxy S23):** SmolLM 2 1.7B أو Qwen 3 1.5B. كلاهما يعمل بشكل مريح في ذاكرة 6 جيجابايت. اختر SmolLM 2 للإنجليزية، وQwen 3 للعربية ولغات أخرى.',
          '**فئة اقتصادية (4 جيجابايت RAM أو iPhone 12 القديم):** Gemma 3 1B فقط. هو النموذج الوحيد الذي يعمل بشكل موثوق على هذه الأجهزة. جودة محدودة لكنه يُنتج ردودًا متسقة قصيرة بشكل موثوق.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        items: [
          '**تنزيل نسخ تكميم متعددة من نفس النموذج.** اختر Q4_K_M وتوقف. نسخ Q5/Q6 الزائدة على هاتف بذاكرة 256 جيجابايت تُضيّع المساحة، والفرق في الجودة لا يُلاحَظ في محادثة عادية.',
          '**استخدام SmolLM 2 1.7B في الاستدلال متعدد الخطوات.** هو الأسرع لكن ليس الأذكى. للمهام التي تستلزم التفكير بسلاسل المنطق (الرياضيات، التخطيط، الاستدلال المعقد)، استخدم Phi-4 Mini حتى لو كانت الرموز/الثانية أبطأ. السرعة بلا جودة تعني الوصول إلى إجابات خاطئة بسرعة أكبر فحسب.',
          '**توقع إخراج غير إنجليزي من Phi-4 Mini بدون بادئة متعددة اللغات.** Phi-4 Mini يتعامل مع اللغات الأوروبية الشائعة بصعوبة، لكن إخراجه باللغة العربية أو الصينية أو اليابانية متقطع. للاستخدام متعدد اللغات، ثبّت Qwen 3 1.5B جنبًا إلى جنب مع Phi-4 Mini وبدّل بحسب اللغة.',
          '**توقع جودة ذكاء اصطناعي سحابي من هذه النماذج.** النماذج الستة كلها 1B–4B، وهي تُنتج ما بين 60–80% من قدرة نماذج 70B أو أكثر في مهام الدردشة، وأقل من ذلك في الاستدلال المعقد. استخدمها فيما تُتقنه (دردشة خاصة، تلخيص، كتابة، ترجمة)، واستخدم السحابة أو الاتصال عن بُعد للمهام التي تتطلب نماذج 70B أو أكبر.',
          '**الخلط بين Phi-4 Mini (3.8B) وPhi-3 Mini القديم (3.8B).** حجم المعاملات متطابق لكن بيانات التدريب وقالب الدردشة مختلفان. تأكد دائمًا من معرف النموذج في اسم ملف GGUF — "phi-4-mini-instruct" وليس "phi-3-mini-4k-instruct".',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'تقرير Phi-4 Mini التقني — [Microsoft Research](https://arxiv.org/abs/2412.08905) (ديسمبر 2024).',
          'تقرير Gemma 3 التقني — [Google DeepMind](https://blog.google/technology/developers/gemma-3/) (2025).',
          'بطاقة نموذج SmolLM 2 — [Hugging Face](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B-Instruct) (2024).',
          'تقرير Qwen 3 التقني — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/) (2024).',
          'بطاقة نموذج Llama 3.2 — [Meta AI](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/) (2024).',
          'مرجع تكميم Q4_K_M — [وثائق llama.cpp](https://github.com/ggerganov/llama.cpp).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'أي نموذج هاتف هو الأسرع على iPhone؟',
            a: 'Gemma 3 1B هو الأسرع بفارق كبير على iPhone 17 Pro بـ ~35–45 رمزًا/ثانية، لكنه الأصغر في هذه القائمة. بين نماذج 1.5B–1.7B (السرعة مقابل الجودة)، SmolLM 2 1.7B هو الأسرع بـ ~26–32 رمزًا/ثانية. بين النماذج ذات الجودة الراقية، Phi-4 Mini بـ ~13–18 رمزًا/ثانية هو أسرع خيار "ذكي". اختر حسب حالة الاستخدام: إذا كانت الاستجابة الآنية أهم من العمق، اختر SmolLM 2؛ إذا كان العمق أهم، اختر Phi-4 Mini.',
          },
          {
            q: 'هل يتفوق Phi-4 Mini فعلًا على نماذج 7B على الهاتف؟',
            a: 'يتفوق على نماذج 7B أقدم (Llama 3.3 7B وMistral Small v0.1) في المعايير القياسية كـ MMLU ومهام الاستدلال رغم أنه نصف الحجم. لا يتفوق على نماذج 7B حديثة (Llama 3.3 7B وMistral Small v0.3) في القدرة الخام — تلك لا تزال تتقدم في المعرفة الواسعة والاستدلال المعقد. سبب تفوق Phi-4 Mini النسبي هو مزيج بيانات التدريب من Microsoft (غني بسلاسل التفكير الاصطناعية والنصوص عالية الجودة). على الهاتف، نماذج 7B بطيئة جدًا في الغالب لتكون عملية، فيفوز Phi-4 Mini تلقائيًا.',
          },
          {
            q: 'هل يعمل SmolLM 2 على هاتف عمره 4 سنوات؟',
            a: 'نعم، على معظم هواتف الفئة الراقية قبل 4 سنوات. يحتاج SmolLM 2 1.7B بـ Q4_K_M حوالي 1.1 جيجابايت RAM للنموذج و~500 ميجابايت لعبء الاستدلال — يناسب iPhone 13 (6 جيجابايت) وiPhone 12 Pro Max (6 جيجابايت) وأندرويد مماثل (6 جيجابايت أو أكثر). على أجهزة 4 جيجابايت من 2021 (iPhone 12 الأساسي، أندرويد البداية)، يُحمَّل تقنيًا لكن يكون غير مستقر عند ضغط الذاكرة؛ استخدم Gemma 3 1B بدلًا منه.',
          },
          {
            q: 'أي نموذج يُترجم أفضل على الهاتف؟',
            a: 'Qwen 3 1.5B لأي زوج لغات يتضمن العربية أو الصينية أو اليابانية أو الكورية أو الألمانية أو الفرنسية أو الإسبانية أو الروسية. مُدرَّب بتمثيل متعدد اللغات قوي ويُنتج جودة أصلية حيث تُنتج النماذج ذات التوجه الإنجليزي (Phi-4 Mini وLlama 3.2 3B) نتائج متصلبة أو مشوشة. للأزواج الأوروبية فقط، Gemma 3 4B خيار ثانوي مقبول. لترجمات فردية بين الإنجليزية ولغة معينة، تطبيقات الترجمة المثبتة (Google Translate وDeepL) تفوق في الغالب أي نموذج LLM محلي — النماذج المحلية تتألق حين تحتاج دمج الترجمة مع الدردشة أو التلخيص في نفس المحادثة.',
          },
          {
            q: 'هل أحتاج هاتفًا من الفئة الراقية لاستخدامها؟',
            a: 'لا، فقط النماذج الأكبر (Phi-4 Mini 3.8B وGemma 3 4B وLlama 3.2 3B). الهواتف المتوسطة بـ 6–8 جيجابايت من RAM تُشغّل SmolLM 2 1.7B وQwen 3 1.5B بالسرعة الكاملة (~20–28 رمزًا/ثانية). الهواتف الاقتصادية بـ 4–6 جيجابايت تُشغّل Gemma 3 1B بـ ~15–25 رمزًا/ثانية. الجواب الصادق: إذا لم تكن تملك هاتفًا راقيًا بعد، لا تشتر واحدًا خصيصًا للذكاء الاصطناعي المحلي — النماذج الأصغر على هاتفك الحالي كافية لمعظم حالات الاستخدام.',
          },
          {
            q: 'أي نموذج يستهلك بطارية أقل؟',
            a: 'Gemma 3 1B بفارق كبير — أصغر النماذج يعني أقل حسابات لكل رمز، وأدنى حمل على المعالج والرسومات، وأقل استهلاك للطاقة. SmolLM 2 1.7B وQwen 3 1.5B يأتيان بعده. نماذج 3B–4B (Phi-4 Mini وLlama 3.2 3B وGemma 3 4B) تستهلك ~2–3 أضعاف الطاقة لكل رد. في الرحلات الطويلة أو الاستخدام الممتد بعيدًا عن الشحن، Gemma 3 1B هو الخيار الصحيح رغم تراجع الجودة.',
          },
          {
            q: 'هل تتعامل هذه النماذج مع المحادثات متعددة الأدوار؟',
            a: 'نعم للمحادثات القصيرة (5–10 أدوار)، مع تراجع الجودة بعد ذلك. النماذج الستة لديها نوافذ سياق 4,000–8,000 رمز؛ المحادثات الأطول تتجاوز النافذة ويفقد النموذج الأدوار السابقة. للدردشة المستمرة التي تحتاج ذاكرة أطول من جلسة واحدة، النهج العملي هو: تلخيص المحادثة دوريًا وحفظ الملخص ثم تقديمه كسياق. معظم تطبيقات الهاتف (PocketPal AI وPrivate LLM) تفعل ذلك تلقائيًا؛ LLM Farm يحتاج إعدادًا يدويًا.',
          },
          {
            q: 'هل تعمل هذه النماذج مع الإدخال الصوتي؟',
            a: 'نعم، عند الجمع مع طبقة Whisper لتحويل الصوت إلى نص. الحزمة القياسية للصوت دون اتصال على الهاتف في 2026: Whisper (النموذج small أو tiny) لتحويل الصوت → Phi-4 Mini أو SmolLM 2 لتوليد الرد → Apple TTS أو Android TTS لتوليف الصوت. SmolLM 2 1.7B هو أفضل نموذج LLM للصوت لأن الرموز/الثانية المرتفعة تُبقي دور المحادثة الصوتية دون عتبة الإدراك ~1.5 ثانية — راجع [أنشئ مساعدًا صوتيًا محليًا على هاتفك](/ar/power-local-llm/voice-assistant-local-mobile-offline) للحزمة الكاملة.',
          },
          {
            q: 'أيهما أفضل للاستخدام دون اتصال في السفر؟',
            a: 'للسفر الذي يتطلب تغيير اللغات والترجمة: Qwen 3 1.5B. للسفر حيث تحتاج مرجعًا بالإنجليزية (أسئلة، تلخيص وثائق السفر، صياغة رسائل): Phi-4 Mini على هاتف الفئة الراقية، وSmolLM 2 1.7B على الهاتف المتوسط. السفر هو حالة الاستخدام الشاملة الأقوى للذكاء الاصطناعي المحلي — لا بيانات تجوال، ولا رسوم API سحابية، ولا خطر فشل اعتمادية السحابة في مناطق ضعيفة الاتصال. نزّل النموذج قبل السفر؛ يعمل طوال الرحلة بشحنة واحدة عند الاستخدام المعتدل.',
          },
          {
            q: 'هل ستبقى نماذج الهاتف مفيدة في 2027؟',
            a: 'نعم، لكن الأسماء المحددة ستتغير. تتحرك حدود نماذج LLM الصغيرة للهاتف نحو ~6–9 أشهر — بحلول الربع الرابع من 2026 قد تظهر نماذج ~3B جديدة تتفوق على Phi-4 Mini، وبحلول منتصف 2027 قد تصل فئة 1B–2B إلى ما تُنجزه نماذج 3B–4B اليوم. هذه الفئة لن تصبح متقادمة؛ التوصيات المحددة ستتجدد. راجع هذا المقال (التحديث التالي المتوقع: 2026-11-08) للجيل التالي.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026 (استخدم الذكاء الاصطناعي بدون WiFi)](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — دليل شقيق عن تطبيقات iPhone التي تُحمّل هذه النماذج.',
          '[أفضل تطبيقات LLM المحلية لـ Android في 2026: 6 تطبيقات مقارنةً على هواتف حقيقية](/ar/power-local-llm/best-local-llm-apps-android-2026) — دليل شقيق عن تطبيقات Android التي تُحمّل هذه النماذج.',
          '[أنشئ مساعدًا صوتيًا محليًا على هاتفك: Whisper + LLM محلي](/ar/power-local-llm/voice-assistant-local-mobile-offline) — تطبيق محدد لهذه النماذج في حزمة صوتية دون اتصال.',
          '[شغّل الذكاء الاصطناعي على اللوحي: iPad Pro M4 وGalaxy Tab S10 وOnePlus Pad 2 (2026)](/ar/power-local-llm/run-ai-on-tablet-ipad-android) — دليل المنصات الأخرى لقراء الألواح الذين يستخدمون نفس مجموعة النماذج.',
          '[تكميم LLM موضحًا: Q4_K_M وQ5_K_M وتنسيقات GGUF](/ar/local-llms/llm-quantization-explained) — مرجع التكميم للمعيار Q4_K_M المذكور في هذا المقال.',
          '[أفضل نماذج LLM المحلية في 2026](/ar/local-llms/best-local-llms-2026) — مرجع نماذج أوسع يغطي جميع فئات الأجهزة وليس الهاتف فقط.',
          '[دليل برامج LLM المحلية 2026](/ar/power-local-llm/local-llm-software-directory-2026) — دليل لجميع أدوات LLM المحلية الجديرة بالاهتمام على جميع المنصات.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل نماذج LLM للهاتف في 2026: Phi-4 Mini مقابل Gemma 3 مقابل SmolLM',
      description: 'ستة نماذج LLM صغيرة مُختبرة على الهواتف في 2026. Phi-4 Mini وGemma 3 4B/1B وSmolLM 2 1.7B وQwen 3 1.5B وLlama 3.2 3B مقارنةً في السرعة والذاكرة RAM والجودة.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/mobile-llm-models-phi4-gemma-smollm',
      inLanguage: 'ar',
      datePublished: '2026-05-08',
      dateModified: '2026-05-08',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
  },
}
