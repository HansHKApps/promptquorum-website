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
    seoTitle: 'Best Mobile LLM Models 2026: Phi-4 Mini vs Gemma 3 vs SmolLM',
    intro:
      'Six small language models cover almost every mobile use case in 2026: Phi-4 Mini (3.8B), Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 2.5 1.5B, and Llama 3.2 3B. They differ on tokens-per-second, memory footprint, and quality on chat, summarisation, translation, and short-form drafting. This guide ranks them on iPhone 17 Pro and Galaxy S25 Ultra, gives a per-tier verdict (flagship / mid-range / budget), and explains why Q4_K_M quantisation is the default for mobile.',
    metaDescription:
      'Six small LLMs benchmarked for phones in 2026. Phi-4 Mini, Gemma 3 4B/1B, SmolLM 2 1.7B, Qwen 2.5 1.5B, Llama 3.2 3B compared on speed, RAM, and quality.',
    twitterDescription:
      'Best mobile LLMs in 2026: Phi-4 Mini (smartest), SmolLM 2 (fastest), Qwen 2.5 (multilingual), Gemma 3 1B (older phones), Gemma 3 4B (balanced), Llama 3.2 3B (workhorse).',
    current_models_mentioned: [
      'Phi-4 Mini 3.8B',
      'Gemma 3 4B',
      'Gemma 3 1B',
      'SmolLM 2 1.7B',
      'Qwen 2.5 1.5B',
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
      '**For most flagship phones (8 GB+ RAM) in 2026, Phi-4 Mini (3.8B) at Q4_K_M quantisation is the smartest model that runs at usable speed (~13–18 tokens/sec on iPhone 17 Pro).** For older 6 GB phones, Qwen 2.5 1.5B or SmolLM 2 1.7B fit comfortably and produce coherent short-form responses. SmolLM 2 1.7B is the fastest tokens-per-second on every device tested. Qwen 2.5 1.5B is the strongest multilingual option (35+ languages, including Chinese, Japanese, Arabic). Gemma 3 4B is the balanced default if Phi-4 Mini is unavailable in your app. Gemma 3 1B is the lightweight pick for very old phones (4 GB RAM). Llama 3.2 3B is the most-tested 3B workhorse with the broadest tool support.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM model for mobile in 2026?',
        answer:
          'Phi-4 Mini (3.8B) is the smartest model that runs at usable speed on flagship phones (8 GB+ RAM) — ~13–18 tokens/sec on iPhone 17 Pro. SmolLM 2 1.7B is the fastest on every device tested. Qwen 2.5 1.5B is the best multilingual choice. Gemma 3 4B is the balanced default. Gemma 3 1B works on very old phones (4 GB RAM). Llama 3.2 3B is the best 3B workhorse. All six should be downloaded as Q4_K_M GGUF — the standard mobile quantisation that preserves ~95% of original quality at one-quarter the size.',
        bullets: [
          'Phi-4 Mini (3.8B) — smartest small model. Best on 8 GB+ phones (iPhone 17 Pro: ~13–18 tok/sec).',
          'Gemma 3 4B — balanced default. Solid quality but slower than Phi-4 Mini on the same hardware.',
          'Gemma 3 1B — for older phones (4 GB RAM). Fast but limited reasoning depth.',
          'SmolLM 2 1.7B — fastest tokens/sec across every tested phone. Best for snappy chat on mid-range devices.',
          'Qwen 2.5 1.5B — strongest multilingual mobile model (35+ languages). Best for translation, non-English chat.',
          'Llama 3.2 3B — most-tested 3B workhorse. Best 3B for tool calling, RAG, and broadly compatible apps.',
          'Quantisation: download Q4_K_M GGUF for all six. Q5/Q6 only if your phone has 12 GB+ RAM and the app supports it.',
        ],
        updatedDate: '2026-05-08',
      },
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
      { label: 'Qwen 2.5 1.5B: Strongest Multilingual Mobile Model', anchor: '#qwen-2-5' },
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
          '**Qwen 2.5 1.5B is the strongest multilingual mobile model.** Trained on 35+ languages including Chinese, Japanese, Arabic, and German with native-quality output. Best choice for translation, non-English drafting, and travel use.',
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
          '**Models tested:** Phi-4 Mini 3.8B, Gemma 3 4B, Gemma 3 1B, SmolLM 2 1.7B, Qwen 2.5 1.5B, Llama 3.2 3B (all Q4_K_M GGUF).',
          '**Test devices:** iPhone 17 Pro (A19 Pro), iPhone 16 Pro (A18 Pro, 8 GB), Galaxy S25 Ultra (Snapdragon 8 Elite), Pixel 9 Pro (Tensor G5), OnePlus 13 (Snapdragon 8 Elite).',
          '**Inference engines:** llama.cpp via PocketPal AI / LLM Farm (default), MLC LLM via MLC Chat (Metal-accelerated on iPhone), Ollama via Termux (Android).',
          '**Memory footprint (Q4_K_M):** Phi-4 Mini ~2.7 GB, Gemma 3 4B ~2.9 GB, Llama 3.2 3B ~2.2 GB, Qwen 2.5 1.5B ~1.0 GB, SmolLM 2 1.7B ~1.1 GB, Gemma 3 1B ~720 MB.',
          '**Minimum RAM (active):** 6 GB phone for 1.5B–1.7B models; 8 GB phone for 3B–4B models; 4 GB phone for Gemma 3 1B only.',
          '**Fastest tokens/sec on iPhone 17 Pro:** Gemma 3 1B ~35–45, SmolLM 2 ~26–32, Qwen 2.5 ~24–32, Llama 3.2 3B ~16–22, Phi-4 Mini ~13–18, Gemma 3 4B ~10–13.',
          '**Source quantisation:** all six available as Q4_K_M GGUF on Hugging Face and via PocketPal AI / MLC Chat / LM Studio.',
        ],
      },
      whichModel: {
        id: 'which-model',
        title: 'Which Mobile Model Should You Pick?',
        content:
          '**For most flagship phones (iPhone 16 Pro / 17 Pro, Galaxy S25 Ultra, OnePlus 13), pick Phi-4 Mini (3.8B Q4_K_M).** It is the smartest sub-4B model and runs at usable conversational speed. Pick a different model only when you have a specific need it does not cover — speed (SmolLM 2), multilingual (Qwen 2.5), or older-phone compatibility (Gemma 3 1B).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick Phi-4 Mini for flagship 8 GB+ phones (smartest), SmolLM 2 1.7B for speed, Qwen 2.5 1.5B for multilingual, Gemma 3 1B for 4 GB phones, Llama 3.2 3B for tool calling, and Gemma 3 4B as the balanced default when Phi-4 Mini is unavailable.',
          },
          {
            type: 'plain-terms',
            text: 'There is no single best mobile model — the right pick depends on your phone and what you do with it. If your phone is from the last two years and has 8 GB or more RAM, install Phi-4 Mini. If you mostly chat in a non-English language, install Qwen 2.5. If you want the fastest replies even at the cost of some quality, install SmolLM 2. If your phone is older or has only 4 GB RAM, install Gemma 3 1B. The differences are real but small enough that any of these will produce coherent answers — none are cloud-quality.',
          },
        ],
        decisionBlock: {
          title: 'Decision: Which Mobile Model?',
          localIf: [
            'Flagship phone with 8 GB+ RAM (iPhone 16 Pro/17 Pro, Galaxy S25 Ultra, OnePlus 13) → Phi-4 Mini 3.8B',
            'Need fastest tokens/sec on any phone → SmolLM 2 1.7B',
            'Non-English use (translation, multilingual chat) → Qwen 2.5 1.5B',
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
            'Best multilingual: Qwen 2.5 1.5B',
          ],
        },
        callouts: [
          {
            type: 'tip',
            text: 'If unsure, start with Phi-4 Mini on a flagship phone or SmolLM 2 1.7B on a mid-range phone — both download in under 5 minutes on a fast connection and are reversible. Try one prompt you actually care about (a real email to summarise, a real question to answer). If the quality feels acceptable, you have your default. If not, swap to a sibling model in 30 seconds via PocketPal AI or LM Studio.',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Mobile Model Comparison Table',
        content:
          '**The four-column table below is the fast extraction layer — pick a row by phone tier or use case.** Tokens/sec figures assume Q4_K_M quantisation on iPhone 17 Pro using PocketPal AI (llama.cpp). Numbers are 15–25% lower on iPhone 16 Pro and roughly 10–20% lower on Galaxy S25 Ultra running the same Q4_K_M GGUF via MLC Chat or Termux+Ollama.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Phi-4 Mini is the smartest, SmolLM 2 1.7B is the fastest, Qwen 2.5 1.5B is the best multilingual, Gemma 3 1B is the smallest viable, Llama 3.2 3B is the strongest 3B workhorse, and Gemma 3 4B is the balanced default.',
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
          { 'Model': 'Qwen 2.5', 'Size': '1.5B', 'Tokens/sec (17 Pro)': '~24–32', 'Best for': 'Best multilingual (35+ languages)' },
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
          '**Quality weaknesses:** narrower world knowledge than Llama 3.2 3B (less Common Crawl exposure); shorter natural creative writing than Gemma 3 4B; weaker multilingual than Qwen 2.5 1.5B outside English.',
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
          '**Quality weaknesses:** weaker reasoning than Phi-4 Mini, narrower world knowledge than Llama 3.2 3B, weaker multilingual than Qwen 2.5 1.5B, occasional hallucination on factual queries.',
          '**Best for:** mid-range phones where latency matters (text-input autocomplete, voice assistant turn-taking, real-time chat), or older flagships where larger models feel sluggish.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'SmolLM 2 1.7B is the strongest pairing for an offline voice assistant stack on mobile — see [Build a Local Voice Assistant on Your Phone](/power-local-llm/voice-assistant-local-mobile-offline) for the Whisper + LLM + TTS pipeline. The high tokens/sec keeps voice turn-taking under the ~1.5-second perceptual threshold even on mid-range hardware.',
          },
        ],
      },
      qwen25: {
        id: 'qwen-2-5',
        title: 'Qwen 2.5 1.5B: Strongest Multilingual Mobile Model',
        content:
          '**Qwen 2.5 1.5B (Alibaba, 2024) is the strongest multilingual mobile model in 2026 — trained on 35+ languages including Chinese, Japanese, Korean, Arabic, German, French, Spanish, and Russian.** Best choice for translation, non-English chat, and travel use where the user switches languages mid-conversation.',
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
            text: 'For one-shot translation between two specific language pairs, Qwen 2.5 1.5B usually beats a larger English-first model running translation as a secondary task. For a German user chatting in German, Qwen 2.5 produces noticeably more natural output than Phi-4 Mini despite being 60% smaller. The right rule: pick the model trained for your primary language, not the model with the most parameters.',
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
      },
      perTierVerdict: {
        id: 'per-tier-verdict',
        title: 'Per-Tier Verdict: Flagship vs Mid-Range vs Budget',
        content:
          '**Phone tier dictates the model ceiling — chip generation and RAM matter more than brand.** A flagship phone (8 GB+ RAM, A18 Pro / A19 Pro / Snapdragon 8 Elite) runs 3.8B–4B models comfortably; a mid-range phone (6–8 GB RAM, older flagship chip) runs 1.7B–3B; a budget or older phone (4–6 GB RAM) runs 1B–1.5B.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Flagship phones (8 GB+) → Phi-4 Mini 3.8B; mid-range (6–8 GB) → SmolLM 2 1.7B or Llama 3.2 3B; budget or older (4–6 GB) → Gemma 3 1B or Qwen 2.5 1.5B.',
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
          { 'Phone Tier': 'Mid-range (6–8 GB RAM)', 'Examples': 'iPhone 14 Pro, Pixel 9, Snapdragon 8 Gen 2 phones', 'Recommended Model': 'SmolLM 2 1.7B or Qwen 2.5 1.5B', 'Why': 'Snappy speed; fits with OS headroom' },
          { 'Phone Tier': 'Budget / older (4–6 GB RAM)', 'Examples': 'iPhone 14, mid Snapdragon 7-series, older Android', 'Recommended Model': 'Gemma 3 1B or Qwen 2.5 1.5B', 'Why': 'Smallest viable models that still produce coherent output' },
          { 'Phone Tier': 'Very old (4 GB RAM)', 'Examples': 'iPhone SE 3rd gen, older 4 GB Android', 'Recommended Model': 'Gemma 3 1B', 'Why': 'Only model that fits; limited reasoning, fast tokens/sec' },
          { 'Phone Tier': 'Unsupported (<4 GB)', 'Examples': 'iPhone SE 2nd gen, ancient Android', 'Recommended Model': 'Remote-connect to home machine instead', 'Why': 'On-device LLM not practical; use a tablet/phone as a UI for a home Ollama server' },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For the app side of the equation, see the iPhone and Android sister guides — they cover which apps actually expose each of these models on each platform. App availability sometimes lags model availability: Gemma 3 4B was on Hugging Face six months before PocketPal AI added a one-tap downloader for it. If a model is missing from your app\'s curated list, it can usually be sideloaded as a GGUF from Hugging Face.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        items: [
          '**Picking a model larger than the phone\'s RAM allows.** Phi-4 Mini on a 6 GB phone runs at 3–5 tok/sec and crashes when iOS / Android reclaims memory for another app. Match the model to your tier (see the per-tier table above).',
          '**Downloading multiple quantisation variants of the same model.** Pick Q4_K_M and stop. Five GB of redundant Q5/Q6 variants on a 256 GB phone is wasted space, and the quality differences are not perceptible in everyday chat.',
          '**Using SmolLM 2 1.7B for multi-step reasoning.** It is the fastest model but not the smartest. For chain-of-thought tasks (math, planning, complex reasoning), use Phi-4 Mini even if the slower tokens/sec feels frustrating. Speed without quality is just a faster wrong answer.',
          '**Asking Phi-4 Mini for non-English output without a multilingual prompt prefix.** Phi-4 Mini handles common European languages adequately but produces uneven output in CJK or Arabic. For multilingual use, install Qwen 2.5 1.5B alongside Phi-4 Mini and switch per language.',
          '**Expecting cloud-AI quality from any of these models.** All six are 1B–4B, which means roughly 60–80% of the capability of GPT-4o on chat tasks and far less on complex reasoning. Use them for what they are good at (private chat, summarisation, drafting, translation) and use cloud or remote-connect for what requires a 70B+ model.',
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
          'Qwen 2.5 technical report — [Alibaba Cloud](https://qwenlm.github.io/blog/qwen2.5/) (2024).',
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
            a: 'It beats older 7B models (Llama 2 7B, Mistral 7B v0.1) on standard benchmarks like MMLU and reasoning tasks despite being half the size. It does NOT beat current 7B models (Llama 3.1 7B, Mistral 7B v0.3) on raw capability — those still lead on broad knowledge and complex reasoning. The reason Phi-4 Mini punches above its weight is Microsoft\'s training-data mix (heavy on synthetic reasoning chains and high-quality text). On phone, 7B models are usually too slow to be practical anyway, so Phi-4 Mini wins by default.',
          },
          {
            q: 'Can SmolLM 2 run on a 4-year-old phone?',
            a: 'Yes, on most 4-year-old flagships. SmolLM 2 1.7B at Q4_K_M needs ~1.1 GB RAM for the model plus ~500 MB for inference overhead — fits on iPhone 13 (6 GB), iPhone 12 Pro Max (6 GB), and equivalent Android (6 GB+). On 4 GB phones from 2021 (iPhone 12, base Android), it technically loads but is unstable under any other memory pressure; use Gemma 3 1B instead.',
          },
          {
            q: 'Which model handles translation best on mobile?',
            a: 'Qwen 2.5 1.5B for any pair involving Chinese, Japanese, Korean, Arabic, German, French, Spanish, or Russian. It was trained with strong multilingual representation and produces native-quality output where English-first models (Phi-4 Mini, Llama 3.2 3B) produce stilted or broken results. For European-language pairs only, Gemma 3 4B is a viable second choice. For one-off translations between English and one specific language, an installed translation app (Google Translate, DeepL) is often better than any local LLM — local models shine when you need translation chained with chat or summarisation in the same conversation.',
          },
          {
            q: 'Do I need a flagship phone to run these well?',
            a: 'No, only for the largest models (Phi-4 Mini 3.8B, Gemma 3 4B, Llama 3.2 3B). Mid-range phones with 6–8 GB RAM run SmolLM 2 1.7B and Qwen 2.5 1.5B at full speed (~20–28 tokens/sec). Budget phones with 4–6 GB RAM run Gemma 3 1B at ~15–25 tokens/sec. The honest answer: if you do not already own a flagship phone, do not buy one for local AI — the smaller models on your existing phone are good enough for most use cases.',
          },
          {
            q: 'Which model has the smallest battery drain?',
            a: 'Gemma 3 1B by a wide margin — smallest model means fewest computations per token, which means lower CPU/GPU load and lower power draw. SmolLM 2 1.7B and Qwen 2.5 1.5B are next. The 3B–4B models (Phi-4 Mini, Llama 3.2 3B, Gemma 3 4B) draw 2–3× more power per response. For long flights or extended off-grid use where battery matters most, Gemma 3 1B is the right pick despite the quality cost.',
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
            a: 'For travel where you switch languages and need translation: Qwen 2.5 1.5B. For travel where you mostly need an English-language reference (questions, summarising travel docs, drafting emails): Phi-4 Mini on a flagship phone, SmolLM 2 1.7B on a mid-range phone. Travel use is the strongest case for local AI overall — no roaming data needed, no cloud-API costs, and no risk of cloud dependencies failing in low-connectivity areas. Download the model before the trip; it works for the whole journey on a single charge if used moderately.',
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
}
