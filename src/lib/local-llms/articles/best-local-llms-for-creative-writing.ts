// Slug: best-local-llms-for-creative-writing
// Refreshed 2026-11-15 (page-updater run). Editorial ranking from model cards, the Ollama library and public leaderboards; no PromptQuorum scored test.

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-15',
    last_full_refresh: '2026-11-15',
    designSkin: 'hub',
    theme: 'Best Models',
    title: 'Best Local LLMs for Creative Writing in 2026: Fiction, Poetry and Long-Form Picks by VRAM',
    seoTitle: 'Best Local LLMs for Creative Writing 2026: Picks by VRAM',
    intro: 'Gemma 4 31B and Qwen3.8-27B are the two local models to start with for creative writing: both fit one 24 GB GPU. This guide ranks open-weight models for fiction, poetry and long-form writing by memory tier (8, 12, 16, 24 and 48 GB), with Ollama tags, licences and a clear statement of what the ranking is based on.',
    metaDescription: 'Best local LLMs for creative writing and poetry in 2026: Gemma 4 31B and Qwen3.8-27B on 24 GB, plus picks for 8, 12, 16 and 48 GB with Ollama tags.',
    twitterDescription: 'Best local LLMs for creative writing in 2026 by VRAM tier: Gemma 4 31B, Qwen3.8-27B, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B. Licences and Ollama tags included.',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-en.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**Gemma 4 31B and Qwen3.8-27B are the two local LLMs to start with for creative writing; both fit one 24 GB GPU.** Gemma 4 31B is the prose pick, Qwen3.8-27B the long-project pick. Smaller tiers are below. Editorial ranking from model cards and public leaderboards, not a PromptQuorum test.',
    audience: 'Beginners running their first local LLM on consumer hardware',
    dateModified: '2026-11-17',
    readTime: '9 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'local LLM creative writing',
    targetKeywords: [
      'best local llm for creative writing',
      'best local llm for writing',
      'best llm for creative writing',
      'best local llm for story writing',
      'best open source models for poetry',
      'best ollama model for creative writing',
    ],
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B A4B',
      'Gemma 4 12B',
      'Qwen3.5 9B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Fimbulvetr-11B-v2',
      'Midnight-Rose-70B',
    ],
    current_benchmarks_used: [
      'EQ-Bench Creative Writing v3',
    ],
    current_hardware_mentioned: [
      '8 GB GPU',
      '12 GB GPU',
      '16 GB GPU',
      '24 GB GPU',
      '32 GB Mac',
      '48 GB GPU',
      '64 GB Mac',
    ],
    toc: [
      {
        label: 'Key Takeaways',
        anchor: '#key-takeaways',
      },
      {
        label: 'How This Ranking Is Made',
        anchor: '#ranking-basis',
      },
      {
        label: 'Best Model by Memory Tier',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 Picks for 8, 12 and 16 GB',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 Community and Low-Refusal Models',
        anchor: '#community-models',
      },
      {
        label: 'Local vs Cloud Models',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Settings and Prompts',
        anchor: '#prompting-settings',
      },
      {
        label: 'Best Models for Poetry',
        anchor: '#poetry-writing',
      },
      {
        label: 'Bad Prompt vs Good Prompt',
        anchor: '#prompt-examples',
      },
      {
        label: 'Common Mistakes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Related Reading',
        anchor: '#related-reading',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Sources',
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
            text: 'Gemma 4 31B (prose) and Qwen3.8-27B (long projects) are the best local starting points for creative writing on one 24 GB GPU; use Qwen3.5 9B, Gemma 4 12B, Mistral Small 3 24B or Llama 3.3 70B on other memory tiers.',
          },
          {
            type: 'plain-terms',
            text: 'Pick the biggest model that fits your memory with room left for context. On a 24 GB card that is Gemma 4 31B for prose or Qwen3.8-27B for long projects. Creative writing has no single right answer, so test two candidates on your own scenes and keep the voice you prefer.',
          },
        ],
        items: [
          '**Gemma 4 31B is the prose pick for a 24 GB GPU.** About 19–20 GB of weights, 256K context, Apache 2.0, and the only model in this guide with a published EQ-Bench Creative Writing v3 score (reported by Featherless: rubric 16.01, Elo 1407.6).',
          '**Qwen3.8-27B is the long-project pick.** 18 GB on Ollama, 256K context, Apache 2.0. Its model card does not mention creative writing and no creative score is published, so test its voice on your own scenes.',
          '**Match the model to your memory first.** 8 GB: Qwen3.5 9B. 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B or Qwen3.8-27B. 48 GB or more: Llama 3.3 70B.',
          '**Older community models are no longer the default.** Fimbulvetr-11B (CC BY-NC 4.0, non-commercial) and Midnight-Rose-70B (a Llama 2 merge) predate the models above; use them only if you prefer their voice.',
          '**Sample for prose, not for code.** Start at temperature 0.9–1.1 (an editorial range; Google lists 1.0 for Gemma 4) and switch thinking mode off.',
          '**Closed cloud models still lead creative-writing leaderboards.** On the EQ-Bench Creative Writing v3 list read via evals.report (data snapshot 2026-11-15), Claude Opus 4.7 scores 2206 Elo and the best open-weight entry, Kimi K2.6, 1782. Local models win on privacy, cost and control.',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: 'How This Ranking Is Made (and What It Is Not)',
        content: [
          '**This is an editorial ranking compiled from model cards, the Ollama library and public leaderboards. PromptQuorum did not run a new scored writing test for it.** Creative writing has no single right answer, so benchmarks measure it imperfectly and leaderboards disagree.',
        ],
        items: [
          '**Sizes and context:** read from the Ollama library pages for [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.5](https://ollama.com/library/qwen3.5), [Mistral Small](https://ollama.com/library/mistral-small) and [Llama 3.3](https://ollama.com/library/llama3.3). Sizes are the download sizes of the default 4-bit builds; context memory is extra.',
          '**Licences and sampling defaults:** read from the Hugging Face model cards listed under Sources.',
          '**Creative-writing scores:** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html), an LLM-judged benchmark. The Gemma 4 figures come from a [Featherless article](https://featherless.ai/blog/best-ai-for-creative-writing-2026) dated 2026-09-17; Qwen3.8-27B has no published score. Scores from different trackers are not directly comparable, so compare within one list only.',
          '**"Best for" labels** are editorial recommendations built on these sources, not measured results.',
          '**Test any pick yourself with four prompts:** continue a scene for 500 words (tone and voice), write a paragraph in a named author\'s style (does the style shift?), write a 1,000-word story with a twist ending (setup and payoff), and write a two-character dialogue (are the voices distinct?).',
          'For frontends, worldbuilding and low-refusal models in more depth, see the [extended creative writing guide](/power-local-llm/best-local-llm-creative-writing).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Treat every pick as a starting hypothesis: run the same three scenes through two candidates and keep the one whose voice you prefer.',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: 'Best Local AI Model for Creative Writing by Memory Tier',
        content: [
          '**Pick by memory first: the model has to fit with room left for context.** Sizes are Ollama download sizes at the default 4-bit quantization; context memory (the KV cache) is extra, roughly 2–6 GB for long scenes (estimate).',
        ],
        columns: [
          'Your memory',
          'Model (Ollama tag)',
          'Weights',
          'Context',
        ],
        rows: [
          {
            'Your memory': '8 GB GPU',
            'Model (Ollama tag)': 'Qwen3.5 9B (qwen3.5:9b)',
            Weights: '6.6–7.6 GB',
            Context: '256K',
          },
          {
            'Your memory': '12 GB GPU',
            'Model (Ollama tag)': 'Gemma 4 12B (gemma4:12b)',
            Weights: '7.7–8.0 GB',
            Context: '256K',
          },
          {
            'Your memory': '16 GB GPU',
            'Model (Ollama tag)': 'Mistral Small 3 24B (mistral-small:24b)',
            Weights: '14 GB',
            Context: '32K',
          },
          {
            'Your memory': '24 GB GPU / 32 GB Mac',
            'Model (Ollama tag)': 'Gemma 4 31B (gemma4:31b)',
            Weights: '19–20 GB',
            Context: '256K',
          },
          {
            'Your memory': '24 GB GPU / 32 GB Mac',
            'Model (Ollama tag)': 'Qwen3.8-27B (qwen3.8:27b)',
            Weights: '18 GB',
            Context: '256K',
          },
          {
            'Your memory': '24 GB GPU, faster output',
            'Model (Ollama tag)': 'Gemma 4 26B A4B (gemma4:26b)',
            Weights: '16–19 GB',
            Context: '256K',
          },
          {
            'Your memory': '48 GB GPU / 64 GB Mac',
            'Model (Ollama tag)': 'Llama 3.3 70B (llama3.3:70b)',
            Weights: '43 GB',
            Context: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'On a Mac, unified memory is shared with macOS. On a 32 GB Mac plan for roughly 24 GB usable for model plus context, which fits Gemma 4 31B or Qwen3.8-27B with only a few GB left for context.',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B: Prose Pick for a 24 GB GPU',
        content: [
          '**Gemma 4 31B is our first pick for prose on a 24 GB GPU or a 32 GB Mac.** It is a dense 30.7B model (19–20 GB on Ollama) with 256K context under Apache 2.0, and the only model in this guide with a published EQ-Bench Creative Writing v3 result: rubric 16.01, Elo 1407.6, as reported by Featherless.',
          'Google\'s model card lists text generation such as poems and scripts as an intended use and recommends temperature 1.0, top-p 0.95, top-k 64. At 19–20 GB the model leaves little room for context on a 24 GB card, so keep the context window modest or choose Gemma 4 26B A4B (16–19 GB), a mixture-of-experts model that activates about 4B parameters per token and scored 1286.9 Elo on the same Featherless list.',
        ],
        columns: [
          'Spec',
          'Value',
        ],
        rows: [
          {
            Spec: 'Best for',
            Value: 'Prose on a 24 GB GPU',
          },
          {
            Spec: 'Weights (Ollama)',
            Value: '19–20 GB',
          },
          {
            Spec: 'Context',
            Value: '256K tokens',
          },
          {
            Spec: 'Licence',
            Value: 'Apache 2.0',
          },
          {
            Spec: 'Ollama command',
            Value: 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B: Long-Project Pick on the Same Hardware',
        content: [
          '**Qwen3.8-27B is the pick for long projects on a 24 GB GPU.** It is a dense 27B model at 18 GB on Ollama with 262,144 tokens of native context (extensible to 1,000,000 tokens per the model card) under Apache 2.0.',
          'Alibaba positions it for coding, agents and research; the model card does not mention creative writing and no creative-writing score is published, so treat its prose as unverified. Thinking mode is on by default; switch it off for fiction.',
        ],
        columns: [
          'Spec',
          'Value',
        ],
        rows: [
          {
            Spec: 'Best for',
            Value: 'Novel-length projects, instructions',
          },
          {
            Spec: 'Weights (Ollama)',
            Value: '18 GB',
          },
          {
            Spec: 'Context',
            Value: '256K tokens',
          },
          {
            Spec: 'Licence',
            Value: 'Apache 2.0',
          },
          {
            Spec: 'Ollama command',
            Value: 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 Picks for 8, 12 and 16 GB',
        content: [
          '**Below 24 GB the choice is smaller and less proven, so test before you commit.** Smaller models generally keep long scenes consistent less reliably than larger ones.',
        ],
        items: [
          '**8 GB: Qwen3.5 9B** (`qwen3.5:9b`, 6.6–7.6 GB, 256K context). A recent model in the 8 GB class on Ollama. No creative-writing score is published for it, so run your own scenes.',
          '**12 GB: Gemma 4 12B** (`gemma4:12b`, 7.7–8.0 GB, 256K context, Apache 2.0). Featherless lists a rubric of 15.71 and 1270.4 Elo for it on EQ-Bench Creative Writing v3.',
          '**16 GB: Mistral Small 3 24B** (`mistral-small:24b`, 14 GB, 32K context, Apache 2.0). An older model that stays on the list because few newer models fit 16 GB. It leaves only about 2 GB for context, so keep prompts short.',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B: Reference Model for 48 GB or More',
        content: [
          '**Llama 3.3 70B (`llama3.3:70b`, 43 GB, 128K context) is the largest model in this guide and needs a 48 GB GPU setup or a Mac with 64 GB of unified memory.** It was released by Meta in December 2024 under the Meta Llama 3.3 Community License, a custom licence rather than an OSI open-source licence.',
          'Earlier versions of this page ranked it first for prose. We no longer do: no creative-writing score for it appears on the lists we read, while newer models that fit 24 GB do have one, and newer Llama releases score low on EQ-Bench (Llama 4 Maverick 927, Llama 4 Scout 883 on the evals.report list). Keep it if you have the memory and like its voice.',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 Community and Low-Refusal Models',
        content: [
          '**Community fiction models are now a second layer, not the default.** Check each model\'s licence before commercial use.',
        ],
        items: [
          '**Hermes 4.3 36B** (Nous Research, Apache 2.0): built on ByteDance Seed-OSS-36B-Base, with 4- to 8-bit GGUF files on Hugging Face. Nous reports that it answered 74.60% (non-reasoning) and 72.29% (reasoning) of prompts on its own RefusalBench (developer-reported; higher means fewer refusals). Use it when an instruct model declines a legitimate fiction scene, and raise temperature above the card\'s 0.6 for prose.',
          '**Fimbulvetr-11B-v2** (Sao10K): a Solar-based model under CC BY-NC 4.0, so non-commercial use only. The card recommends SillyTavern presets. We found no creative-writing benchmark score for it.',
          '**Midnight-Rose-70B** (sophosympatheia): a merge built on Llama 2 70B, under the Llama 2 licence plus inherited restrictions; the card advises about 6144 tokens of context. It is not a Llama 3.3 model.',
          'If a GGUF conversion exists for an older model, you can load it in LM Studio or through `ollama run hf.co/<user>/<repo>`; check the licence of that specific repository first.',
          'For refusal behaviour, ethics and limits, see [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics). Local hosting does not change the law, and the writer stays responsible for what they publish.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Local vs Cloud Models for Writing',
        content: [
          '**Closed cloud models score higher on creative-writing leaderboards; local models win on privacy, cost and control.**',
        ],
        items: [
          'On the EQ-Bench Creative Writing v3 list read via [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) (data snapshot 2026-11-15), Claude Opus 4.7 leads at 2206 Elo, followed by GPT-5.5 at 2035.',
          'The best open-weight entry on that list is Kimi K2.6 at 1782 Elo. Featherless lists the open models it recommends at that level at 753B (GLM-5.3), 763B (DeepSeek-V4.1-Flash) and 2.8T (Kimi K3) parameters, far beyond the 8–48 GB tiers in this guide.',
          '**When local is the right call:** unpublished manuscripts, client work under NDA, offline work, and projects where per-token cost matters.',
          '**Hybrid workflow:** draft and brainstorm locally; use a cloud model only for non-sensitive polish, after checking the provider\'s data terms.',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: 'Settings and Prompts That Improve Local LLM Creative Writing',
        content: [
          'Five habits change output more than switching models.',
        ],
        numberedItems: [
          '**Set sampling for prose, not for code.** Vendor defaults: Gemma 4 temperature 1.0, top-p 0.95, top-k 64; Qwen3.8 1.0 / 0.95 / top-k 20 in thinking mode and 0.7 / 0.8 / top-k 20 in non-thinking mode; Hermes 4.3 0.6 / 0.95 / top-k 20. As an editorial starting range, try temperature 0.9–1.1 for prose and 0.7–0.85 for tight dialogue.',
          '**Turn thinking mode off for fiction.** Reasoning models plan before they write, which can make scenes feel assembled. Qwen3.8 thinks by default; in the Ollama API set `think` to `false`, or use your frontend\'s thinking toggle.',
          '**Name the style concretely.** "Write in second person, present tense, short sentences, no adverbs" works better than "write literary fiction". Naming an author gives a style hint; do not publish text that reproduces a living author\'s wording.',
          '**Use a persistent system prompt** with point of view, tense, genre, a character sheet and voice samples, and re-paste it at the start of each session.',
          '**Work in sections and raise the context window.** Generate about 500 words at a time and re-state a short story summary in each new session, because a model only sees what fits in its context. Ollama\'s default context is limited; in an interactive session type `/set parameter num_ctx 16384`. Larger values use more memory.',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: 'Best Open-Weight Models for Poetry',
        content: [
          '**No leaderboard scores poetry separately, so the poetry pick follows the memory-tier ranking above.** For strict forms (sonnets, haiku, villanelles) lower the temperature to 0.7–0.85 (editorial range), because high temperatures tend to break meter and rhyme; for free verse the prose range applies.',
        ],
        items: [
          '**24 GB:** Gemma 4 31B or Qwen3.8-27B. Run the same short poem prompt on both and keep the voice you prefer.',
          '**Smaller tiers:** Gemma 4 12B (12 GB) or Qwen3.5 9B (8 GB).',
          '**Strict forms:** models work on tokens, not syllables, so count syllables and check rhyme by hand.',
          '**State the form explicitly:** "Write a haiku (5-7-5 syllables) about autumn rain" or "Write a Shakespearean sonnet (ABAB CDCD EFEF GG, iambic pentameter) about loss". Vague prompts such as "write a poem about love" produce generic free verse.',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: 'Bad Prompt vs Good Prompt',
        items: [
          '❌ "Write a fantasy story" → ✅ "Write a 500-word fantasy scene where a smuggler negotiates with a dragon over ancient artifacts. Use sensory details and make the dialogue tense."',
          '❌ "Write something interesting" → ✅ "Write a 300-word opening scene of a heist gone wrong. The protagonist discovers their partner betrayed them mid-mission. Use short, punchy sentences to match the pace."',
          '❌ "Write a mystery" → ✅ "Continue this detective scene: [previous text]. The detective realizes the suspect is lying based on one detail. Show, do not tell, how she catches the inconsistency."',
          '❌ "Make it more interesting" → ✅ "Rewrite the previous paragraph as noir fiction: sparse dialogue, cynical internal monologue, specific sensory details (sounds, smells, textures)."',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the best local LLM for creative writing?',
            a: 'Gemma 4 31B and Qwen3.8-27B are the best local starting points in this ranking, and both fit one 24 GB GPU (19–20 GB and 18 GB of weights). Gemma 4 31B is the prose pick because it has a published EQ-Bench Creative Writing v3 score; Qwen3.8-27B is the long-project pick. On smaller cards use Gemma 4 12B (12 GB) or Mistral Small 3 24B (16 GB). This is an editorial ranking, so test two candidates on your own scenes.',
          },
          {
            q: 'What is the best local LLM for story writing and novels?',
            a: 'Pick the largest model that fits your memory with room for context. Gemma 4 31B suits prose on 24 GB, Qwen3.8-27B suits novel-length projects with its 256K context, and Llama 3.3 70B is the reference on 48 GB or more. The bottleneck is usually structure: an outline, a character sheet and short chapter summaries keep a long project consistent.',
          },
          {
            q: 'Which Ollama model is best for creative writing?',
            a: 'On 24 GB, `ollama run gemma4:31b` for prose or `ollama run qwen3.8:27b` for long projects. On 12 GB, `gemma4:12b`; on 16 GB, `mistral-small:24b`; on 8 GB, `qwen3.5:9b`; on 48 GB or more, `llama3.3:70b`. Raise `num_ctx` for long scenes and turn thinking off for fiction.',
          },
          {
            q: 'Which local LLMs work best for writing with only 8 GB of VRAM?',
            a: 'Qwen3.5 9B (6.6–7.6 GB, 256K context) is a recent model in the 8 GB class on Ollama. No creative-writing score is published for it, so run your own test scenes, and expect smaller models to hold long scenes together less reliably than the 24 GB models.',
          },
          {
            q: 'What are the best open-source models for poetry?',
            a: 'Most models people call open source are open-weight releases, and no leaderboard scores poetry separately, so use the memory-tier ranking: Gemma 4 31B or Qwen3.8-27B on 24 GB, Gemma 4 12B on 12 GB, Qwen3.5 9B on 8 GB. For strict forms such as sonnets or haiku, lower the temperature to 0.7–0.85 and check syllables and rhyme by hand.',
          },
          {
            q: 'Which model should I load in LM Studio for creative writing?',
            a: 'The same ranking applies. LM Studio and Ollama both run GGUF quantized files, so there is no separate LM Studio model: search for the model name in LM Studio\'s model browser and load the build that fits your memory.',
          },
          {
            q: 'Does the model remember earlier parts of my story?',
            a: 'Only within its context window. The models in this guide offer 32K to 256K tokens, but longer context uses more memory, and a model forgets anything outside the window. For long projects, start each session with a short story summary and the character sheet.',
          },
          {
            q: 'Can a local LLM replace Claude or ChatGPT for fiction?',
            a: 'Not on creative-writing leaderboards: on the EQ-Bench Creative Writing v3 list read via evals.report, closed models lead (Claude Opus 4.7 at 2206 Elo, GPT-5.5 at 2035). A 24 GB local model can still be good enough for drafting, and it keeps manuscripts on your machine. Sampling settings and a strong system prompt close part of the practical gap.',
          },
          {
            q: 'Is quantization noticeable in creative writing?',
            a: 'It can be, because lower-bit builds lose some precision. We cite no creative-writing study on this. Ollama\'s default builds are 4-bit; if you have memory headroom, compare a higher-bit build with the 4-bit build on the same scene and keep the one you prefer.',
          },
          {
            q: 'What temperature should I use for creative writing?',
            a: 'As an editorial starting range, 0.9–1.1 for prose and 0.7–0.85 for tight dialogue or strict poetic forms. Vendor defaults are a sound anchor: Google lists 1.0 (top-p 0.95, top-k 64) for Gemma 4, and Alibaba lists 1.0 in thinking mode and 0.7 in non-thinking mode for Qwen3.8. Turn thinking mode off for fiction.',
          },
          {
            q: 'Can I use local LLM output in commercial work?',
            a: 'It depends on the licence. Gemma 4, Qwen3.8, Mistral Small 3 and Hermes 4.3 are listed under Apache 2.0, Llama 3.3 uses the custom Meta Llama 3.3 Community License, and Fimbulvetr-11B is CC BY-NC 4.0 (non-commercial). Read the licence on the model card for the exact build you use. This is not legal advice.',
          },
          {
            q: 'Are Fimbulvetr and Midnight-Rose still worth using?',
            a: 'Only if you prefer their voice. Fimbulvetr-11B-v2 is a Solar-based model under a non-commercial licence, and Midnight-Rose-70B is a Llama 2 70B merge; both predate the 2026 models in this guide, and we found no creative-writing benchmark score for either.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama library: Gemma 4](https://ollama.com/library/gemma4) -- tags, download sizes and context windows',
          '[Ollama library: Qwen3.8](https://ollama.com/library/qwen3.8) and [Qwen3.5](https://ollama.com/library/qwen3.5) -- tags, sizes and context windows',
          '[Ollama library: Mistral Small](https://ollama.com/library/mistral-small) and [Llama 3.3](https://ollama.com/library/llama3.3) -- tags, sizes, context and licence notes',
          '[Hugging Face: Gemma 4 31B model card](https://huggingface.co/google/gemma-4-31B-it) and [Gemma 4 12B model card](https://huggingface.co/google/gemma-4-12B-it) -- licence, context length, sampling defaults',
          '[Hugging Face: Qwen3.8-27B model card](https://huggingface.co/Qwen/Qwen3.8-27B) -- licence, native context, recommended sampling',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- base model, licence, RefusalBench figures, GGUF files',
          '[Hugging Face: Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) and [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- base models and licences',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) and [evals.report EQ-Bench scores](https://evals.report/benchmarks/eq-bench?tab=scores) -- leaderboard figures (data snapshot 2026-11-15)',
          '[Featherless: best open models for creative writing](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- Gemma 4 EQ-Bench figures and open-weight model sizes (dated 2026-09-17)',
          '[Ollama documentation: thinking](https://docs.ollama.com/capabilities/thinking) -- the `think` parameter',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Choosing and Using Local Models for Writing',
        items: [
          '**Picking by a general benchmark rank.** Coding and reasoning leaderboards say little about prose. Look at creative-writing lists such as EQ-Bench, then test on your own scenes.',
          '**Using coding-style sampling.** Temperature 0.2–0.4 tends to produce flat prose; creative work wants roughly 0.9–1.1 (editorial range).',
          '**Leaving thinking mode on.** Planning-first output can read as assembled. Turn it off for fiction.',
          '**Ignoring context memory.** A 19–20 GB model leaves little room on a 24 GB card once you raise the context window.',
          '**Thin prompts.** "Write a story" produces generic output; add point of view, tense, length, a character sheet and an explicit constraint.',
          '**Editing inside the chat window.** Generate in the chat, revise in a text editor; revising the prose yourself is what keeps the voice yours.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) -- Overall ranking across all use cases',
          '[How Much VRAM Do Local LLMs Need?](/local-llms/how-much-vram-local-llm) -- Calculate memory requirements for any model and quantization',
          '[Local LLM Fine-Tuning Guide](/local-llms/fine-tuning-local-llms-lora) -- How LoRA fine-tuning works on consumer hardware',
          '[Ollama vs LM Studio Comparison](/local-llms/ollama-vs-lm-studio) -- Which tool suits creative workflows',
          '[Temperature and Top-P Explained](/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- Control creative output',
          '[Best Local LLMs for Creative Writing: Extended Guide](/power-local-llm/best-local-llm-creative-writing) -- Frontends, worldbuilding and low-refusal models by VRAM tier',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- Refusal behaviour and limits',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: 'Mejores LLM locales para escritura creativa en 2026: ficción, poesía y textos largos según tu VRAM',
    seoTitle: 'Mejores LLM locales para escritura creativa 2026 por VRAM',
    intro: 'Gemma 4 31B y Qwen3.8-27B son los dos modelos locales con los que conviene empezar en escritura creativa: ambos caben en una GPU de 24 GB. Esta guía ordena modelos de pesos abiertos para ficción, poesía y textos largos por nivel de memoria (8, 12, 16, 24 y 48 GB), con etiquetas de Ollama, licencias y la base del ranking.',
    metaDescription: 'Mejores LLM locales para escritura creativa, relatos y poesía en 2026: Gemma 4 31B y Qwen3.8-27B con 24 GB, más opciones para 8, 12, 16 y 48 GB.',
    twitterDescription: 'Mejores LLM locales para escritura creativa en 2026 por VRAM: Gemma 4 31B, Qwen3.8-27B, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B. Con licencias y etiquetas de Ollama.',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-es.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**Gemma 4 31B y Qwen3.8-27B son los dos LLM locales para empezar en escritura creativa; ambos caben en una GPU de 24 GB.** Gemma 4 31B es la opción para prosa y Qwen3.8-27B para proyectos largos. Los niveles menores están abajo. Ranking editorial, no una prueba de PromptQuorum.',
    audience: 'Principiantes que ejecutan su primer LLM local en hardware de consumo',
    dateModified: '2026-11-17',
    readTime: '9 min de lectura',
    educationalLevel: 'Beginner',
    primaryTerm: 'LLM local escritura creativa',
    toc: [
      {
        label: 'Puntos clave',
        anchor: '#key-takeaways',
      },
      {
        label: 'Base del ranking',
        anchor: '#ranking-basis',
      },
      {
        label: 'Mejor modelo por nivel de memoria',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 Opciones para 8, 12 y 16 GB',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 Modelos de la comunidad y de bajo rechazo',
        anchor: '#community-models',
      },
      {
        label: 'Local frente a nube',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Ajustes y prompts',
        anchor: '#prompting-settings',
      },
      {
        label: 'Mejores modelos para poesía',
        anchor: '#poetry-writing',
      },
      {
        label: 'Prompt malo frente a prompt bueno',
        anchor: '#prompt-examples',
      },
      {
        label: 'Errores comunes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: '#related-reading',
      },
      {
        label: 'Preguntas frecuentes',
        anchor: '#faq',
      },
      {
        label: 'Fuentes',
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
            text: 'Gemma 4 31B (prosa) y Qwen3.8-27B (proyectos largos) son los mejores puntos de partida locales para escritura creativa en una GPU de 24 GB; en otros niveles de memoria usa Qwen3.5 9B, Gemma 4 12B, Mistral Small 3 24B o Llama 3.3 70B.',
          },
          {
            type: 'plain-terms',
            text: 'Elige el modelo más grande que quepa en tu memoria con margen para el contexto. En una tarjeta de 24 GB eso es Gemma 4 31B para prosa o Qwen3.8-27B para proyectos largos. La escritura creativa no tiene una única respuesta correcta: prueba dos candidatos con tus propias escenas y quédate con la voz que prefieras.',
          },
        ],
        items: [
          '**Gemma 4 31B es la opción para prosa en una GPU de 24 GB.** Unos 19–20 GB de pesos, contexto de 256K, Apache 2.0 y el único modelo de esta guía con una puntuación publicada en EQ-Bench Creative Writing v3 (según Featherless: rúbrica 16.01, Elo 1407.6).',
          '**Qwen3.8-27B es la opción para proyectos largos.** 18 GB en Ollama, contexto de 256K, Apache 2.0. Su ficha de modelo no menciona la escritura creativa y no hay puntuación creativa publicada, así que prueba su voz con tus propias escenas.',
          '**Elige primero según tu memoria.** 8 GB: Qwen3.5 9B. 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B o Qwen3.8-27B. 48 GB o más: Llama 3.3 70B.',
          '**Los modelos antiguos de la comunidad ya no son la opción por defecto.** Fimbulvetr-11B (CC BY-NC 4.0, no comercial) y Midnight-Rose-70B (una fusión de Llama 2) son anteriores a los modelos de arriba; úsalos solo si prefieres su voz.',
          '**Configura el muestreo para prosa, no para código.** Empieza con temperatura 0.9–1.1 (rango editorial; Google indica 1.0 para Gemma 4) y desactiva el modo de pensamiento.',
          '**Los modelos cerrados en la nube siguen liderando las clasificaciones de escritura creativa.** En la lista EQ-Bench Creative Writing v3 consultada vía evals.report (datos del 2026-11-15), Claude Opus 4.7 obtiene 2206 Elo y la mejor entrada de pesos abiertos, Kimi K2.6, 1782. Los modelos locales ganan en privacidad, coste y control.',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: 'Base del ranking (y lo que no es)',
        content: [
          '**Este es un ranking editorial elaborado a partir de fichas de modelo, la biblioteca de Ollama y clasificaciones públicas. PromptQuorum no realizó una nueva prueba de escritura con puntuación para él.** La escritura creativa no tiene una única respuesta correcta, por lo que los benchmarks la miden de forma imperfecta y las clasificaciones discrepan.',
        ],
        items: [
          '**Tamaños y contexto:** leídos en las páginas de la biblioteca de Ollama de [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.5](https://ollama.com/library/qwen3.5), [Mistral Small](https://ollama.com/library/mistral-small) y [Llama 3.3](https://ollama.com/library/llama3.3). Los tamaños son los de descarga de las versiones de 4 bits por defecto; la memoria de contexto es adicional.',
          '**Licencias y valores de muestreo:** leídos en las fichas de modelo de Hugging Face indicadas en Fuentes.',
          '**Puntuaciones de escritura creativa:** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html), un benchmark evaluado por un LLM. Las cifras de Gemma 4 proceden de un [artículo de Featherless](https://featherless.ai/blog/best-ai-for-creative-writing-2026) del 2026-09-17; Qwen3.8-27B no tiene puntuación publicada. Las puntuaciones de distintos rastreadores no son directamente comparables, así que compara solo dentro de una misma lista.',
          '**Las etiquetas «mejor para»** son recomendaciones editoriales basadas en estas fuentes, no resultados medidos.',
          '**Prueba cada opción con cuatro prompts:** continuar una escena durante 500 palabras (tono y voz), escribir un párrafo al estilo de un autor concreto (¿cambia el estilo?), escribir un relato de 1,000 palabras con final sorpresa (planteamiento y desenlace) y escribir un diálogo entre dos personajes (¿suenan distintas las voces?).',
          'Para saber más sobre frontends, construcción de mundos y modelos de bajo rechazo, consulta la [guía ampliada de escritura creativa](/es/power-local-llm/best-local-llm-creative-writing).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Trata cada opción como una hipótesis de partida: pasa las mismas tres escenas por dos candidatos y quédate con el que tenga la voz que prefieras.',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: 'Mejor LLM local para escritura creativa por nivel de memoria',
        content: [
          '**Elige primero según la memoria: el modelo debe caber con margen para el contexto.** Los tamaños son de descarga en Ollama con la cuantización de 4 bits por defecto; la memoria de contexto (caché KV) es adicional, aproximadamente 2–6 GB en escenas largas (estimación).',
        ],
        columns: [
          'Tu memoria',
          'Modelo (etiqueta Ollama)',
          'Pesos',
          'Contexto',
        ],
        rows: [
          {
            'Tu memoria': 'GPU de 8 GB',
            'Modelo (etiqueta Ollama)': 'Qwen3.5 9B (qwen3.5:9b)',
            Pesos: '6.6–7.6 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU de 12 GB',
            'Modelo (etiqueta Ollama)': 'Gemma 4 12B (gemma4:12b)',
            Pesos: '7.7–8.0 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU de 16 GB',
            'Modelo (etiqueta Ollama)': 'Mistral Small 3 24B (mistral-small:24b)',
            Pesos: '14 GB',
            Contexto: '32K',
          },
          {
            'Tu memoria': 'GPU de 24 GB / Mac de 32 GB',
            'Modelo (etiqueta Ollama)': 'Gemma 4 31B (gemma4:31b)',
            Pesos: '19–20 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU de 24 GB / Mac de 32 GB',
            'Modelo (etiqueta Ollama)': 'Qwen3.8-27B (qwen3.8:27b)',
            Pesos: '18 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU de 24 GB, más rápido',
            'Modelo (etiqueta Ollama)': 'Gemma 4 26B A4B (gemma4:26b)',
            Pesos: '16–19 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU de 48 GB / Mac de 64 GB',
            'Modelo (etiqueta Ollama)': 'Llama 3.3 70B (llama3.3:70b)',
            Pesos: '43 GB',
            Contexto: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'En un Mac, la memoria unificada se comparte con macOS. En un Mac de 32 GB cuenta con unos 24 GB utilizables para modelo y contexto, lo que alcanza para Gemma 4 31B o Qwen3.8-27B pero deja pocos GB para el contexto.',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B: la opción para prosa en una GPU de 24 GB',
        content: [
          '**Gemma 4 31B es nuestra primera opción para prosa en una GPU de 24 GB o un Mac de 32 GB.** Es un modelo denso de 30.7B parámetros (19–20 GB en Ollama) con contexto de 256K bajo Apache 2.0, y el único modelo de esta guía con un resultado publicado en EQ-Bench Creative Writing v3: rúbrica 16.01, Elo 1407.6, según Featherless.',
          'La ficha de modelo de Google menciona la generación de texto, como poemas y guiones, entre sus usos previstos y recomienda temperatura 1.0, top-p 0.95 y top-k 64. Con 19–20 GB queda poco margen para el contexto en una tarjeta de 24 GB, así que mantén la ventana de contexto moderada o elige Gemma 4 26B A4B (16–19 GB), un modelo de mezcla de expertos que activa unos 4B parámetros por token y obtuvo 1286.9 Elo en la misma lista de Featherless.',
        ],
        columns: [
          'Característica',
          'Valor',
        ],
        rows: [
          {
            'Característica': 'Ideal para',
            Valor: 'Prosa en una GPU de 24 GB',
          },
          {
            'Característica': 'Pesos (Ollama)',
            Valor: '19–20 GB',
          },
          {
            'Característica': 'Contexto',
            Valor: '256K tokens',
          },
          {
            'Característica': 'Licencia',
            Valor: 'Apache 2.0',
          },
          {
            'Característica': 'Comando de Ollama',
            Valor: 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B: la opción para proyectos largos con el mismo hardware',
        content: [
          '**Qwen3.8-27B es la opción para proyectos largos en una GPU de 24 GB.** Es un modelo denso de 27B con 18 GB en Ollama y 262,144 tokens de contexto nativo (ampliable a 1,000,000 de tokens según la ficha de modelo) bajo Apache 2.0.',
          'Alibaba lo orienta a programación, agentes e investigación; la ficha de modelo no menciona la escritura creativa y no hay puntuación creativa publicada, así que trata su prosa como no verificada. El modo de pensamiento viene activado por defecto; desactívalo para ficción.',
        ],
        columns: [
          'Característica',
          'Valor',
        ],
        rows: [
          {
            'Característica': 'Ideal para',
            Valor: 'Proyectos de novela, instrucciones',
          },
          {
            'Característica': 'Pesos (Ollama)',
            Valor: '18 GB',
          },
          {
            'Característica': 'Contexto',
            Valor: '256K tokens',
          },
          {
            'Característica': 'Licencia',
            Valor: 'Apache 2.0',
          },
          {
            'Característica': 'Comando de Ollama',
            Valor: 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 Opciones para 8, 12 y 16 GB',
        content: [
          '**Por debajo de 24 GB la oferta es menor y está menos contrastada, así que prueba antes de decidir.** Los modelos pequeños suelen mantener la coherencia de escenas largas peor que los grandes.',
        ],
        items: [
          '**8 GB: Qwen3.5 9B** (`qwen3.5:9b`, 6.6–7.6 GB, contexto de 256K). Un modelo reciente de la clase de 8 GB en Ollama. No hay puntuación creativa publicada, así que prueba tus propias escenas.',
          '**12 GB: Gemma 4 12B** (`gemma4:12b`, 7.7–8.0 GB, contexto de 256K, Apache 2.0). Featherless indica una rúbrica de 15.71 y 1270.4 Elo en EQ-Bench Creative Writing v3.',
          '**16 GB: Mistral Small 3 24B** (`mistral-small:24b`, 14 GB, contexto de 32K, Apache 2.0). Un modelo más antiguo que sigue en la lista porque pocos modelos más nuevos caben en 16 GB. Deja solo unos 2 GB para el contexto, así que mantén los prompts cortos.',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B: modelo de referencia con 48 GB o más',
        content: [
          '**Llama 3.3 70B (`llama3.3:70b`, 43 GB, contexto de 128K) es el modelo más grande de esta guía y requiere una configuración de GPU de 48 GB o un Mac con 64 GB de memoria unificada.** Meta lo publicó en diciembre de 2024 bajo la Meta Llama 3.3 Community License, una licencia propia y no una licencia de código abierto aprobada por la OSI.',
          'Versiones anteriores de esta página lo situaban primero en prosa. Ya no lo hacemos: en las listas que consultamos no aparece una puntuación creativa para este modelo, mientras que modelos más nuevos que caben en 24 GB sí la tienen, y las versiones recientes de Llama puntúan bajo en EQ-Bench (Llama 4 Maverick 927, Llama 4 Scout 883 en la lista de evals.report). Consérvalo si tienes la memoria y te gusta su voz.',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 Modelos de la comunidad y de bajo rechazo',
        content: [
          '**Los modelos de ficción de la comunidad son ahora una segunda capa, no la opción por defecto.** Comprueba la licencia de cada modelo antes de un uso comercial.',
        ],
        items: [
          '**Hermes 4.3 36B** (Nous Research, Apache 2.0): basado en ByteDance Seed-OSS-36B-Base, con archivos GGUF de 4 a 8 bits en Hugging Face. Nous indica que respondió el 74.60 % (sin razonamiento) y el 72.29 % (con razonamiento) de los prompts en su propio RefusalBench (dato del desarrollador; un valor más alto significa menos rechazos). Úsalo cuando un modelo instruct rechace una escena de ficción legítima, y sube la temperatura por encima del 0.6 de la ficha para prosa.',
          '**Fimbulvetr-11B-v2** (Sao10K): un modelo basado en Solar con licencia CC BY-NC 4.0, por lo que solo permite uso no comercial. La ficha recomienda presets de SillyTavern. No encontramos puntuación de benchmark de escritura creativa para él.',
          '**Midnight-Rose-70B** (sophosympatheia): una fusión basada en Llama 2 70B, con la licencia de Llama 2 más restricciones heredadas; la ficha aconseja unos 6144 tokens de contexto. No es un modelo Llama 3.3.',
          'Si existe una conversión GGUF de un modelo antiguo, puedes cargarla en LM Studio o con `ollama run hf.co/<user>/<repo>`; comprueba antes la licencia de ese repositorio concreto.',
          'Sobre comportamiento de rechazo, ética y límites, consulta [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics). Alojar el modelo en local no cambia la ley, y quien escribe sigue siendo responsable de lo que publica.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Modelos locales frente a modelos en la nube para escribir',
        content: [
          '**Los modelos cerrados en la nube puntúan más alto en las clasificaciones de escritura creativa; los modelos locales ganan en privacidad, coste y control.**',
        ],
        items: [
          'En la lista EQ-Bench Creative Writing v3 consultada vía [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) (datos del 2026-11-15), Claude Opus 4.7 lidera con 2206 Elo, seguido de GPT-5.5 con 2035.',
          'La mejor entrada de pesos abiertos de esa lista es Kimi K2.6 con 1782 Elo. Featherless indica para los modelos abiertos que recomienda a ese nivel 753B (GLM-5.3), 763B (DeepSeek-V4.1-Flash) y 2.8T (Kimi K3) parámetros, muy por encima de los niveles de 8 a 48 GB de esta guía.',
          '**Cuándo conviene lo local:** manuscritos inéditos, trabajo para clientes bajo NDA, trabajo sin conexión y proyectos en los que importa el coste por token.',
          '**Flujo híbrido:** esboza y haz lluvia de ideas en local; usa un modelo en la nube solo para el pulido de textos no sensibles, tras revisar las condiciones de datos del proveedor.',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: 'Ajustes y prompts que mejoran la escritura creativa con LLM locales',
        content: [
          'Cinco hábitos cambian el resultado más que cambiar de modelo.',
        ],
        numberedItems: [
          '**Configura el muestreo para prosa, no para código.** Valores de los fabricantes: Gemma 4 temperatura 1.0, top-p 0.95, top-k 64; Qwen3.8 1.0 / 0.95 / top-k 20 en modo de pensamiento y 0.7 / 0.8 / top-k 20 sin pensamiento; Hermes 4.3 0.6 / 0.95 / top-k 20. Como rango editorial de partida, prueba temperatura 0.9–1.1 para prosa y 0.7–0.85 para diálogos ajustados.',
          '**Desactiva el modo de pensamiento para ficción.** Los modelos de razonamiento planifican antes de escribir, lo que puede hacer que las escenas parezcan armadas. Qwen3.8 piensa por defecto; en la API de Ollama establece `think` en `false` o usa el interruptor de pensamiento de tu frontend.',
          '**Nombra el estilo de forma concreta.** «Escribe en segunda persona, presente, frases cortas, sin adverbios» funciona mejor que «escribe ficción literaria». Nombrar a un autor da una pista de estilo; no publiques textos que reproduzcan la redacción de un autor vivo.',
          '**Usa un prompt de sistema persistente** con punto de vista, tiempo verbal, género, una ficha de personaje y muestras de voz, y vuelve a pegarlo al inicio de cada sesión.',
          '**Trabaja por secciones y amplía la ventana de contexto.** Genera unas 500 palabras cada vez y repite un breve resumen de la historia en cada sesión nueva, porque un modelo solo ve lo que cabe en su contexto. El contexto por defecto de Ollama es limitado; en una sesión interactiva escribe `/set parameter num_ctx 16384`. Los valores mayores usan más memoria.',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: 'Mejores modelos de pesos abiertos para poesía',
        content: [
          '**Ninguna clasificación puntúa la poesía por separado, así que la recomendación para poesía sigue el ranking por nivel de memoria.** Para formas estrictas (sonetos, haikus, villanelas) baja la temperatura a 0.7–0.85 (rango editorial), porque las temperaturas altas tienden a romper la métrica y la rima; para verso libre vale el rango de prosa.',
        ],
        items: [
          '**24 GB:** Gemma 4 31B o Qwen3.8-27B. Pide el mismo poema corto a ambos y quédate con la voz que prefieras.',
          '**Niveles menores:** Gemma 4 12B (12 GB) o Qwen3.5 9B (8 GB).',
          '**Formas estrictas:** los modelos trabajan con tokens, no con sílabas, así que cuenta las sílabas y revisa la rima a mano.',
          '**Indica la forma de manera explícita:** «Escribe un haiku (5-7-5 sílabas) sobre la lluvia de otoño» o «Escribe un soneto shakespeariano (ABAB CDCD EFEF GG, pentámetro yámbico) sobre la pérdida». Prompts vagos como «escribe un poema sobre el amor» dan verso libre genérico.',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: 'Prompt malo frente a prompt bueno',
        items: [
          '❌ «Escribe una historia de fantasía» → ✅ «Escribe una escena de fantasía de 500 palabras en la que un contrabandista negocia con un dragón por artefactos antiguos. Usa detalles sensoriales y mantén el diálogo tenso.»',
          '❌ «Escribe algo interesante» → ✅ «Escribe una escena inicial de 300 palabras sobre un atraco que sale mal. El protagonista descubre en plena misión que su compañero lo traicionó. Usa frases cortas y contundentes que acompañen el ritmo.»',
          '❌ «Escribe un misterio» → ✅ «Continúa esta escena de detectives: [texto anterior]. La detective se da cuenta de que el sospechoso miente por un detalle. Muestra, no cuentes, cómo detecta la incoherencia.»',
          '❌ «Hazlo más interesante» → ✅ «Reescribe el párrafo anterior como ficción noir: diálogo escueto, monólogo interior cínico, detalles sensoriales concretos (sonidos, olores, texturas).»',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es el mejor LLM local para escritura creativa?',
            a: 'Gemma 4 31B y Qwen3.8-27B son los mejores puntos de partida locales de este ranking, y ambos caben en una GPU de 24 GB (19–20 GB y 18 GB de pesos). Gemma 4 31B es la opción para prosa porque tiene una puntuación publicada en EQ-Bench Creative Writing v3; Qwen3.8-27B es la opción para proyectos largos. En tarjetas más pequeñas usa Gemma 4 12B (12 GB) o Mistral Small 3 24B (16 GB). Es un ranking editorial: prueba dos candidatos con tus propias escenas.',
          },
          {
            q: '¿Cuál es el mejor LLM local para escribir relatos y novelas?',
            a: 'Elige el modelo más grande que quepa en tu memoria con margen para el contexto. Gemma 4 31B encaja para prosa en 24 GB, Qwen3.8-27B para proyectos de novela con su contexto de 256K, y Llama 3.3 70B es la referencia con 48 GB o más. El cuello de botella suele ser la estructura: un esquema, una ficha de personajes y resúmenes breves de capítulo mantienen la coherencia de un proyecto largo.',
          },
          {
            q: '¿Qué modelo de Ollama es el mejor para escritura creativa?',
            a: 'Con 24 GB, `ollama run gemma4:31b` para prosa o `ollama run qwen3.8:27b` para proyectos largos. Con 12 GB, `gemma4:12b`; con 16 GB, `mistral-small:24b`; con 8 GB, `qwen3.5:9b`; con 48 GB o más, `llama3.3:70b`. Sube `num_ctx` para escenas largas y desactiva el pensamiento para ficción.',
          },
          {
            q: '¿Qué LLM locales funcionan mejor para escribir con solo 8 GB de VRAM?',
            a: 'Qwen3.5 9B (6.6–7.6 GB, contexto de 256K) es un modelo reciente de la clase de 8 GB en Ollama. No hay puntuación creativa publicada, así que haz tus propias escenas de prueba y espera que los modelos pequeños mantengan las escenas largas con menos fiabilidad que los de 24 GB.',
          },
          {
            q: '¿Qué modelo de pesos abiertos es el mejor para poesía?',
            a: 'Ninguna clasificación puntúa la poesía por separado, así que usa el ranking por nivel de memoria: Gemma 4 31B o Qwen3.8-27B con 24 GB, Gemma 4 12B con 12 GB, Qwen3.5 9B con 8 GB. Para formas estrictas como sonetos o haikus, baja la temperatura a 0.7–0.85 y revisa sílabas y rima a mano.',
          },
          {
            q: '¿Qué modelo debo cargar en LM Studio para escritura creativa?',
            a: 'Vale el mismo ranking. LM Studio y Ollama ejecutan archivos GGUF cuantizados, así que no existe un modelo propio de LM Studio: busca el nombre del modelo en el explorador de modelos de LM Studio y carga la versión que quepa en tu memoria.',
          },
          {
            q: '¿El modelo recuerda las partes anteriores de mi historia?',
            a: 'Solo dentro de su ventana de contexto. Los modelos de esta guía ofrecen de 32K a 256K tokens, pero un contexto mayor usa más memoria, y el modelo olvida lo que queda fuera de la ventana. En proyectos largos, empieza cada sesión con un breve resumen de la historia y la ficha de personajes.',
          },
          {
            q: '¿Puede un LLM local sustituir a Claude o ChatGPT en ficción?',
            a: 'No en las clasificaciones de escritura creativa: en la lista EQ-Bench Creative Writing v3 consultada vía evals.report lideran los modelos cerrados (Claude Opus 4.7 con 2206 Elo, GPT-5.5 con 2035). Un modelo local de 24 GB puede bastar para esbozar y mantiene los manuscritos en tu equipo. Los ajustes de muestreo y un buen prompt de sistema cierran parte de la brecha práctica.',
          },
          {
            q: '¿Se nota la cuantización en la escritura creativa?',
            a: 'Puede notarse, porque las versiones de menos bits pierden algo de precisión. No citamos ningún estudio sobre escritura creativa. Las versiones por defecto de Ollama son de 4 bits; si tienes margen de memoria, compara una versión de más bits con la de 4 bits en la misma escena y quédate con la que prefieras.',
          },
          {
            q: '¿Qué temperatura debo usar para escritura creativa?',
            a: 'Como rango editorial de partida, 0.9–1.1 para prosa y 0.7–0.85 para diálogos ajustados o formas poéticas estrictas. Los valores de los fabricantes son un buen ancla: Google indica 1.0 (top-p 0.95, top-k 64) para Gemma 4, y Alibaba indica 1.0 en modo de pensamiento y 0.7 sin pensamiento para Qwen3.8. Desactiva el modo de pensamiento para ficción.',
          },
          {
            q: '¿Puedo usar en trabajos comerciales lo que generan los LLM locales?',
            a: 'Depende de la licencia. Gemma 4, Qwen3.8, Mistral Small 3 y Hermes 4.3 figuran bajo Apache 2.0, Llama 3.3 usa la Meta Llama 3.3 Community License propia, y Fimbulvetr-11B es CC BY-NC 4.0 (no comercial). Lee la licencia en la ficha del modelo concreto que uses. Esto no es asesoría legal.',
          },
          {
            q: '¿Siguen valiendo la pena Fimbulvetr y Midnight-Rose?',
            a: 'Solo si prefieres su voz. Fimbulvetr-11B-v2 es un modelo basado en Solar con licencia no comercial, y Midnight-Rose-70B es una fusión basada en Llama 2 70B; ambos son anteriores a los modelos de 2026 de esta guía, y no encontramos puntuación de benchmark de escritura creativa para ninguno.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Biblioteca de Ollama: Gemma 4](https://ollama.com/library/gemma4) -- etiquetas, tamaños de descarga y ventanas de contexto',
          '[Biblioteca de Ollama: Qwen3.8](https://ollama.com/library/qwen3.8) y [Qwen3.5](https://ollama.com/library/qwen3.5) -- etiquetas, tamaños y ventanas de contexto',
          '[Biblioteca de Ollama: Mistral Small](https://ollama.com/library/mistral-small) y [Llama 3.3](https://ollama.com/library/llama3.3) -- etiquetas, tamaños, contexto y notas de licencia',
          '[Hugging Face: ficha de Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) y [Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- licencia, longitud de contexto, valores de muestreo',
          '[Hugging Face: ficha de Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) -- licencia, contexto nativo, muestreo recomendado',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- modelo base, licencia, cifras de RefusalBench, archivos GGUF',
          '[Hugging Face: Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) y [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- modelos base y licencias',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) y [puntuaciones EQ-Bench en evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) -- cifras de clasificación (datos del 2026-11-15)',
          '[Featherless: mejores modelos abiertos para escritura creativa](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- cifras de Gemma 4 en EQ-Bench y tamaños de modelos abiertos (del 2026-09-17)',
          '[Documentación de Ollama: thinking](https://docs.ollama.com/capabilities/thinking) -- el parámetro `think`',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al elegir y usar modelos locales para escribir',
        items: [
          '**Elegir por una posición general en benchmarks.** Las clasificaciones de programación y razonamiento dicen poco sobre la prosa. Mira listas creativas como EQ-Bench y luego prueba con tus propias escenas.',
          '**Usar un muestreo de programación.** Una temperatura de 0.2–0.4 tiende a producir prosa plana; la escritura creativa pide aproximadamente 0.9–1.1 (rango editorial).',
          '**Dejar activado el modo de pensamiento.** Una salida basada en planificación puede parecer armada. Desactívalo para ficción.',
          '**Ignorar la memoria de contexto.** Un modelo de 19–20 GB deja poco margen en una tarjeta de 24 GB en cuanto amplías la ventana de contexto.',
          '**Prompts escuetos.** «Escribe una historia» da resultados genéricos; añade punto de vista, tiempo verbal, extensión, una ficha de personaje y una restricción explícita.',
          '**Editar dentro de la ventana de chat.** Genera en el chat y revisa en un editor de texto; revisar la prosa tú mismo es lo que mantiene la voz como tuya.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) -- Ranking general para todos los usos',
          '[¿Cuánta VRAM necesitan los LLM locales?](/es/local-llms/how-much-vram-local-llm) -- Calcula los requisitos de memoria de cualquier modelo y cuantización',
          '[Guía de fine-tuning de LLM locales](/es/local-llms/fine-tuning-local-llms-lora) -- Cómo funciona el fine-tuning con LoRA en hardware de consumo',
          '[Ollama frente a LM Studio](/es/local-llms/ollama-vs-lm-studio) -- Qué herramienta encaja con flujos creativos',
          '[Temperatura y Top-P explicados](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- Controla la salida creativa',
          '[Mejores LLM locales para escritura creativa: guía ampliada](/es/power-local-llm/best-local-llm-creative-writing) -- Frontends, construcción de mundos y modelos de bajo rechazo por nivel de VRAM',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- Comportamiento de rechazo y límites',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: 'أفضل نماذج LLM المحلية للكتابة الإبداعية في 2026: الخيال والشعر والنصوص الطويلة حسب VRAM',
    seoTitle: 'أفضل LLM محلي للكتابة الإبداعية 2026 حسب VRAM',
    intro: 'نموذجا Gemma 4 31B وQwen3.8-27B هما أفضل نقطة انطلاق محلية للكتابة الإبداعية، ويعمل كلاهما على بطاقة GPU واحدة بذاكرة 24 GB. يرتّب هذا الدليل نماذج الأوزان المفتوحة للخيال والشعر والنصوص الطويلة حسب فئة الذاكرة (8 و12 و16 و24 و48 GB) مع وسوم Ollama والتراخيص وأساس الترتيب.',
    metaDescription: 'أفضل نماذج LLM المحلية للكتابة الإبداعية والقصص والشعر في 2026: Gemma 4 31B وQwen3.8-27B لذاكرة 24 GB، مع اختيارات لـ 8 و12 و16 و48 GB ووسوم Ollama.',
    twitterDescription: 'أفضل نماذج LLM المحلية للكتابة الإبداعية في 2026 حسب VRAM: Gemma 4 31B وQwen3.8-27B وGemma 4 12B وMistral Small 3 24B وLlama 3.3 70B، مع التراخيص ووسوم Ollama.',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-ar.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**نموذجا Gemma 4 31B وQwen3.8-27B هما أفضل بداية محلية للكتابة الإبداعية، ويعمل كلاهما على GPU بذاكرة 24 GB.** الأول خيار النثر والثاني خيار المشاريع الطويلة. مع 8 و12 و16 GB استخدم Qwen3.5 9B أو Gemma 4 12B أو Mistral Small 3 24B. ترتيب تحريري وليس اختبارًا من PromptQuorum.',
    audience: 'المبتدئون الذين يشغّلون أول نموذج LLM محلي لهم على عتاد استهلاكي',
    dateModified: '2026-11-17',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Beginner',
    primaryTerm: 'LLM محلي للكتابة الإبداعية',
    toc: [
      {
        label: 'النقاط الرئيسية',
        anchor: '#key-takeaways',
      },
      {
        label: 'أساس الترتيب',
        anchor: '#ranking-basis',
      },
      {
        label: 'أفضل نموذج حسب فئة الذاكرة',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 اختيارات لـ 8 و12 و16 GB',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 نماذج المجتمع ونماذج الرفض المنخفض',
        anchor: '#community-models',
      },
      {
        label: 'المحلي مقابل السحابي',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'الإعدادات والمطالبات',
        anchor: '#prompting-settings',
      },
      {
        label: 'أفضل النماذج للشعر',
        anchor: '#poetry-writing',
      },
      {
        label: 'مطالبة ضعيفة مقابل مطالبة جيدة',
        anchor: '#prompt-examples',
      },
      {
        label: 'أخطاء شائعة',
        anchor: '#common-mistakes',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: '#related-reading',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: '#faq',
      },
      {
        label: 'المصادر',
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
            text: 'نموذجا Gemma 4 31B (للنثر) وQwen3.8-27B (للمشاريع الطويلة) هما أفضل نقطة بداية محلية للكتابة الإبداعية على GPU بذاكرة 24 GB؛ وفي الفئات الأخرى استخدم Qwen3.5 9B أو Gemma 4 12B أو Mistral Small 3 24B أو Llama 3.3 70B.',
          },
          {
            type: 'plain-terms',
            text: 'اختر أكبر نموذج يتسع في ذاكرتك مع مساحة كافية للسياق. على بطاقة 24 GB هذا يعني Gemma 4 31B للنثر أو Qwen3.8-27B للمشاريع الطويلة. ليس للكتابة الإبداعية جواب صحيح واحد، لذا جرّب مرشحَين على مشاهدك الخاصة واحتفظ بالصوت الذي تفضله.',
          },
        ],
        items: [
          '**Gemma 4 31B هو خيار النثر لبطاقة GPU بذاكرة 24 GB.** نحو 19–20 GB من الأوزان، وسياق 256K، ورخصة Apache 2.0، وهو النموذج الوحيد في هذا الدليل الذي له درجة منشورة في EQ-Bench Creative Writing v3 (بحسب Featherless: المعيار 16.01، وElo 1407.6).',
          '**Qwen3.8-27B هو خيار المشاريع الطويلة.** حجمه 18 GB على Ollama، وسياقه 256K، ورخصته Apache 2.0. لا تذكر بطاقة النموذج الكتابة الإبداعية ولا توجد درجة إبداعية منشورة، لذا جرّب أسلوبه على مشاهدك.',
          '**اختر حسب ذاكرتك أولًا.** 8 GB: Qwen3.5 9B. 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B أو Qwen3.8-27B. 48 GB فأكثر: Llama 3.3 70B.',
          '**لم تعد نماذج المجتمع القديمة هي الخيار الافتراضي.** Fimbulvetr-11B (رخصة CC BY-NC 4.0، غير تجارية) وMidnight-Rose-70B (دمج مبني على Llama 2) أقدم من النماذج أعلاه؛ استخدمهما فقط إذا فضّلت أسلوبهما.',
          '**اضبط أخذ العينات للنثر لا للبرمجة.** ابدأ بدرجة حرارة 0.9–1.1 (نطاق تحريري؛ تذكر Google القيمة 1.0 لـ Gemma 4) وأوقف وضع التفكير.',
          '**لا تزال النماذج السحابية المغلقة تتصدر لوحات الكتابة الإبداعية.** في قائمة EQ-Bench Creative Writing v3 المقروءة عبر evals.report (بيانات 2026-11-15) يسجّل Claude Opus 4.7 ما قيمته 2206 Elo، وأفضل نموذج مفتوح الأوزان Kimi K2.6 يسجّل 1782. وتتفوق النماذج المحلية في الخصوصية والتكلفة والتحكم.',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: 'أساس الترتيب (وما لا يمثّله)',
        content: [
          '**هذا ترتيب تحريري مُعدّ من بطاقات النماذج ومكتبة Ollama ولوحات المتصدرين العامة. لم تُجرِ PromptQuorum اختبار كتابة جديدًا بدرجات لإعداده.** ليس للكتابة الإبداعية جواب صحيح واحد، لذا تقيسها المعايير قياسًا ناقصًا وتتباين لوحات المتصدرين.',
        ],
        items: [
          '**الأحجام والسياق:** مأخوذة من صفحات مكتبة Ollama لـ [Gemma 4](https://ollama.com/library/gemma4) و[Qwen3.8](https://ollama.com/library/qwen3.8) و[Qwen3.5](https://ollama.com/library/qwen3.5) و[Mistral Small](https://ollama.com/library/mistral-small) و[Llama 3.3](https://ollama.com/library/llama3.3). الأحجام هي أحجام التنزيل للنسخ الافتراضية بدقة 4 بت؛ وذاكرة السياق تُضاف عليها.',
          '**التراخيص وقيم أخذ العينات:** مقروءة من بطاقات نماذج Hugging Face المذكورة في المصادر.',
          '**درجات الكتابة الإبداعية:** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html)، وهو معيار يقيّمه نموذج LLM. أرقام Gemma 4 مأخوذة من [مقال Featherless](https://featherless.ai/blog/best-ai-for-creative-writing-2026) بتاريخ 2026-09-17؛ ولا توجد درجة منشورة لـ Qwen3.8-27B. الدرجات من متتبّعات مختلفة غير قابلة للمقارنة المباشرة، فقارن داخل قائمة واحدة فقط.',
          '**تسميات «الأفضل لـ»** توصيات تحريرية مبنية على هذه المصادر، وليست نتائج مقيسة.',
          '**جرّب أي اختيار بنفسك بأربع مطالبات:** إكمال مشهد بنحو 500 كلمة (النبرة والصوت)، وكتابة فقرة بأسلوب مؤلف مسمّى (هل يتغير الأسلوب؟)، وكتابة قصة من 1,000 كلمة بنهاية مفاجئة (التمهيد والحل)، وكتابة حوار بين شخصيتين (هل الأصوات متمايزة؟).',
          'لمزيد من التفاصيل حول الواجهات وبناء العوالم ونماذج الرفض المنخفض، راجع [الدليل الموسّع للكتابة الإبداعية](/ar/power-local-llm/best-local-llm-creative-writing).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تعامل مع كل اختيار على أنه فرضية أولية: مرّر المشاهد الثلاثة نفسها على مرشحَين واحتفظ بالنموذج الذي يعجبك صوته أكثر.',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: 'أفضل LLM محلي للكتابة الإبداعية حسب فئة الذاكرة',
        content: [
          '**اختر حسب الذاكرة أولًا: يجب أن يتسع النموذج مع مساحة متبقية للسياق.** الأحجام هي أحجام تنزيل Ollama بالتكميم الافتراضي 4 بت؛ وذاكرة السياق (KV cache) تُضاف عليها، بنحو 2–6 GB في المشاهد الطويلة (تقدير).',
        ],
        columns: [
          'ذاكرتك',
          'النموذج (وسم Ollama)',
          'الأوزان',
          'السياق',
        ],
        rows: [
          {
            'ذاكرتك': 'GPU بذاكرة 8 GB',
            'النموذج (وسم Ollama)': 'Qwen3.5 9B (qwen3.5:9b)',
            'الأوزان': '6.6–7.6 GB',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'GPU بذاكرة 12 GB',
            'النموذج (وسم Ollama)': 'Gemma 4 12B (gemma4:12b)',
            'الأوزان': '7.7–8.0 GB',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'GPU بذاكرة 16 GB',
            'النموذج (وسم Ollama)': 'Mistral Small 3 24B (mistral-small:24b)',
            'الأوزان': '14 GB',
            'السياق': '32K',
          },
          {
            'ذاكرتك': 'GPU 24 GB / Mac 32 GB',
            'النموذج (وسم Ollama)': 'Gemma 4 31B (gemma4:31b)',
            'الأوزان': '19–20 GB',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'GPU 24 GB / Mac 32 GB',
            'النموذج (وسم Ollama)': 'Qwen3.8-27B (qwen3.8:27b)',
            'الأوزان': '18 GB',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'GPU 24 GB، أسرع',
            'النموذج (وسم Ollama)': 'Gemma 4 26B A4B (gemma4:26b)',
            'الأوزان': '16–19 GB',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'GPU 48 GB / Mac 64 GB',
            'النموذج (وسم Ollama)': 'Llama 3.3 70B (llama3.3:70b)',
            'الأوزان': '43 GB',
            'السياق': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'في أجهزة Mac تُشارَك الذاكرة الموحدة مع macOS. في جهاز Mac بذاكرة 32 GB احسب نحو 24 GB صالحة للنموذج والسياق معًا، وهذا يكفي لـ Gemma 4 31B أو Qwen3.8-27B لكنه يترك بضعة GB فقط للسياق.',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B: خيار النثر لبطاقة GPU بذاكرة 24 GB',
        content: [
          '**Gemma 4 31B هو خيارنا الأول للنثر على بطاقة GPU بذاكرة 24 GB أو جهاز Mac بذاكرة 32 GB.** هو نموذج كثيف بحجم 30.7B معامل (19–20 GB على Ollama) بسياق 256K ورخصة Apache 2.0، وهو النموذج الوحيد في هذا الدليل الذي له نتيجة منشورة في EQ-Bench Creative Writing v3: المعيار 16.01 وElo 1407.6، بحسب Featherless.',
          'تذكر بطاقة نموذج Google توليد النصوص، مثل القصائد والسيناريوهات، ضمن الاستخدامات المقصودة وتوصي بدرجة حرارة 1.0 وtop-p 0.95 وtop-k 64. مع 19–20 GB تبقى مساحة قليلة للسياق على بطاقة 24 GB، لذا أبقِ نافذة السياق معتدلة أو اختر Gemma 4 26B A4B (16–19 GB)، وهو نموذج مزيج خبراء ينشّط نحو 4B معامل لكل رمز وسجّل 1286.9 Elo في قائمة Featherless نفسها.',
        ],
        columns: [
          'الخاصية',
          'القيمة',
        ],
        rows: [
          {
            'الخاصية': 'مناسب لـ',
            'القيمة': 'النثر على GPU بذاكرة 24 GB',
          },
          {
            'الخاصية': 'الأوزان (Ollama)',
            'القيمة': '19–20 GB',
          },
          {
            'الخاصية': 'السياق',
            'القيمة': '256K رمز',
          },
          {
            'الخاصية': 'الرخصة',
            'القيمة': 'Apache 2.0',
          },
          {
            'الخاصية': 'أمر Ollama',
            'القيمة': 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B: خيار المشاريع الطويلة على العتاد نفسه',
        content: [
          '**Qwen3.8-27B هو خيار المشاريع الطويلة على GPU بذاكرة 24 GB.** هو نموذج كثيف بحجم 27B بحجم 18 GB على Ollama وسياق أصلي قدره 262,144 رمزًا (قابل للتمديد إلى 1,000,000 رمز بحسب بطاقة النموذج) ورخصة Apache 2.0.',
          'تقدّمه Alibaba للبرمجة والوكلاء والبحث؛ ولا تذكر بطاقة النموذج الكتابة الإبداعية ولا توجد درجة إبداعية منشورة، لذا اعتبر نثره غير موثّق. وضع التفكير مفعّل افتراضيًا؛ أوقفه عند كتابة الخيال.',
        ],
        columns: [
          'الخاصية',
          'القيمة',
        ],
        rows: [
          {
            'الخاصية': 'مناسب لـ',
            'القيمة': 'مشاريع الروايات، اتباع التعليمات',
          },
          {
            'الخاصية': 'الأوزان (Ollama)',
            'القيمة': '18 GB',
          },
          {
            'الخاصية': 'السياق',
            'القيمة': '256K رمز',
          },
          {
            'الخاصية': 'الرخصة',
            'القيمة': 'Apache 2.0',
          },
          {
            'الخاصية': 'أمر Ollama',
            'القيمة': 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 اختيارات لـ 8 و12 و16 GB',
        content: [
          '**دون 24 GB تكون الخيارات أقل وأقل اختبارًا، لذا جرّب قبل أن تلتزم.** النماذج الأصغر تحافظ عمومًا على اتساق المشاهد الطويلة بدرجة أقل من الأكبر.',
        ],
        items: [
          '**8 GB: Qwen3.5 9B** (`qwen3.5:9b`، 6.6–7.6 GB، سياق 256K). نموذج حديث في فئة 8 GB على Ollama. لا توجد درجة إبداعية منشورة له، فجرّب مشاهدك الخاصة.',
          '**12 GB: Gemma 4 12B** (`gemma4:12b`، 7.7–8.0 GB، سياق 256K، Apache 2.0). تذكر Featherless له معيارًا قدره 15.71 و1270.4 Elo في EQ-Bench Creative Writing v3.',
          '**16 GB: Mistral Small 3 24B** (`mistral-small:24b`، 14 GB، سياق 32K، Apache 2.0). نموذج أقدم يبقى في القائمة لأن قلة من النماذج الأحدث تتسع في 16 GB. يترك نحو 2 GB فقط للسياق، فأبقِ المطالبات قصيرة.',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B: النموذج المرجعي لذاكرة 48 GB فأكثر',
        content: [
          '**Llama 3.3 70B (`llama3.3:70b`، 43 GB، سياق 128K) هو أكبر نموذج في هذا الدليل ويحتاج إلى إعداد GPU بذاكرة 48 GB أو جهاز Mac بذاكرة موحدة 64 GB.** أصدرته Meta في ديسمبر 2024 برخصة Meta Llama 3.3 Community License، وهي رخصة خاصة وليست رخصة مفتوحة المصدر معتمدة من OSI.',
          'كانت النسخ السابقة من هذه الصفحة تضعه أولًا في النثر. لم نعد نفعل ذلك: لا تظهر له درجة إبداعية في القوائم التي قرأناها، بينما للنماذج الأحدث التي تتسع في 24 GB درجة، وتسجّل إصدارات Llama الأحدث درجات منخفضة في EQ-Bench (Llama 4 Maverick 927 وLlama 4 Scout 883 في قائمة evals.report). احتفظ به إذا كانت لديك الذاكرة وأعجبك أسلوبه.',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 نماذج المجتمع ونماذج الرفض المنخفض',
        content: [
          '**نماذج الخيال من المجتمع أصبحت الآن طبقة ثانية، لا الخيار الافتراضي.** تحقق من رخصة كل نموذج قبل أي استخدام تجاري.',
        ],
        items: [
          '**Hermes 4.3 36B** (من Nous Research، رخصة Apache 2.0): مبني على ByteDance Seed-OSS-36B-Base، مع ملفات GGUF بدقة 4 إلى 8 بت على Hugging Face. تذكر Nous أنه أجاب على 74.60 % (دون استدلال) و72.29 % (مع استدلال) من مطالبات RefusalBench الخاص بها (رقم من المطوّر؛ القيمة الأعلى تعني رفضًا أقل). استخدمه عندما يرفض نموذج instruct مشهدًا خياليًا مشروعًا، وارفع درجة الحرارة فوق 0.6 المذكورة في البطاقة للنثر.',
          '**Fimbulvetr-11B-v2** (من Sao10K): نموذج مبني على Solar برخصة CC BY-NC 4.0، أي للاستخدام غير التجاري فقط. توصي البطاقة بإعدادات SillyTavern المسبقة. لم نجد له درجة معيار للكتابة الإبداعية.',
          '**Midnight-Rose-70B** (من sophosympatheia): دمج مبني على Llama 2 70B برخصة Llama 2 مع قيود موروثة؛ وتنصح البطاقة بنحو 6144 رمزًا من السياق. وهو ليس نموذج Llama 3.3.',
          'إذا وُجد تحويل GGUF لنموذج قديم فيمكنك تحميله في LM Studio أو عبر `ollama run hf.co/<user>/<repo>`؛ تحقق أولًا من رخصة ذلك المستودع تحديدًا.',
          'للاطلاع على سلوك الرفض والأخلاقيات والحدود راجع [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics). الاستضافة المحلية لا تغيّر القانون، ويبقى الكاتب مسؤولًا عمّا ينشره.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'النماذج المحلية مقابل السحابية للكتابة',
        content: [
          '**تحقق النماذج السحابية المغلقة درجات أعلى في لوحات الكتابة الإبداعية؛ وتتفوق النماذج المحلية في الخصوصية والتكلفة والتحكم.**',
        ],
        items: [
          'في قائمة EQ-Bench Creative Writing v3 المقروءة عبر [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) (بيانات 2026-11-15) يتصدر Claude Opus 4.7 بـ 2206 Elo، يليه GPT-5.5 بـ 2035.',
          'أفضل نموذج مفتوح الأوزان في تلك القائمة هو Kimi K2.6 بـ 1782 Elo. وتذكر Featherless للنماذج المفتوحة التي توصي بها عند هذا المستوى أحجامًا قدرها 753B (GLM-5.3) و763B (DeepSeek-V4.1-Flash) و2.8T (Kimi K3) معامل، أي أعلى بكثير من فئات 8 إلى 48 GB في هذا الدليل.',
          '**متى يكون المحلي هو الخيار الصحيح:** مخطوطات غير منشورة، وأعمال العملاء الخاضعة لاتفاقية NDA، والعمل دون اتصال، والمشاريع التي تهمّ فيها تكلفة الرمز.',
          '**سير العمل الهجين:** اكتب المسوّدات وولّد الأفكار محليًا؛ واستخدم نموذجًا سحابيًا فقط لصقل النصوص غير الحساسة بعد مراجعة شروط البيانات لدى المزوّد.',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: 'إعدادات ومطالبات تحسّن الكتابة الإبداعية بنماذج LLM المحلية',
        content: [
          'خمس عادات تغيّر الناتج أكثر من تبديل النموذج.',
        ],
        numberedItems: [
          '**اضبط أخذ العينات للنثر لا للبرمجة.** القيم الافتراضية لدى المطوّرين: Gemma 4 درجة حرارة 1.0 وtop-p 0.95 وtop-k 64؛ Qwen3.8 القيم 1.0 / 0.95 / top-k 20 في وضع التفكير و0.7 / 0.8 / top-k 20 دون تفكير؛ Hermes 4.3 القيم 0.6 / 0.95 / top-k 20. وكنطاق تحريري للبدء جرّب درجة حرارة 0.9–1.1 للنثر و0.7–0.85 للحوار المحكم.',
          '**أوقف وضع التفكير عند كتابة الخيال.** تخطّط نماذج الاستدلال قبل أن تكتب، مما قد يجعل المشاهد تبدو مصنوعة. يفكر Qwen3.8 افتراضيًا؛ في واجهة Ollama البرمجية اضبط `think` على `false` أو استخدم مفتاح التفكير في واجهتك.',
          '**سمِّ الأسلوب بدقة.** عبارة «اكتب بضمير المخاطب في زمن المضارع بجمل قصيرة ودون ظروف» تعمل أفضل من «اكتب خيالًا أدبيًا». ذكر اسم مؤلف يعطي تلميحًا أسلوبيًا؛ لا تنشر نصوصًا تعيد صياغة كلمات مؤلف حي.',
          '**استخدم مطالبة نظام ثابتة** تتضمن وجهة النظر والزمن النحوي والنوع الأدبي وبطاقة الشخصية وعينات من الصوت، وألصقها من جديد في بداية كل جلسة.',
          '**اعمل على أقسام وكبّر نافذة السياق.** ولّد نحو 500 كلمة في كل مرة وأعد ذكر ملخص قصير للقصة في كل جلسة جديدة، لأن النموذج لا يرى إلا ما يتسع له السياق. سياق Ollama الافتراضي محدود؛ اكتب في جلسة تفاعلية `/set parameter num_ctx 16384`. القيم الأكبر تستهلك ذاكرة أكثر.',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: 'أفضل النماذج مفتوحة الأوزان للشعر',
        content: [
          '**لا توجد لوحة متصدرين تقيّم الشعر على حدة، لذا يتبع اختيار الشعر الترتيب حسب فئة الذاكرة أعلاه.** للأشكال الصارمة (السوناتا والهايكو والفيلانيل) اخفض درجة الحرارة إلى 0.7–0.85 (نطاق تحريري) لأن الدرجات العالية تميل إلى كسر الوزن والقافية؛ أما الشعر الحر فينطبق عليه نطاق النثر.',
        ],
        items: [
          '**24 GB:** Gemma 4 31B أو Qwen3.8-27B. اطلب القصيدة القصيرة نفسها من كليهما واحتفظ بالصوت الذي تفضله.',
          '**الفئات الأصغر:** Gemma 4 12B (12 GB) أو Qwen3.5 9B (8 GB).',
          '**الأشكال الصارمة:** تعمل النماذج بالرموز لا بالمقاطع الصوتية، لذا عُدّ المقاطع وتحقق من القافية يدويًا.',
          '**حدّد الشكل صراحةً:** «اكتب هايكو (5-7-5 مقاطع) عن مطر الخريف» أو «اكتب سوناتة شكسبيرية (ABAB CDCD EFEF GG، بحر خماسي أيامبي) عن الفقد». المطالبات الغامضة مثل «اكتب قصيدة عن الحب» تعطي شعرًا حرًا عامًا.',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: 'مطالبة ضعيفة مقابل مطالبة جيدة',
        items: [
          '❌ «اكتب قصة خيال فانتازي» → ✅ «اكتب مشهدًا فانتازيًا من 500 كلمة يفاوض فيه مهرّب تنينًا على قطع أثرية قديمة. استخدم تفاصيل حسية واجعل الحوار متوترًا.»',
          '❌ «اكتب شيئًا مثيرًا للاهتمام» → ✅ «اكتب مشهد افتتاحي من 300 كلمة عن عملية سطو تسوء. يكتشف البطل في منتصف المهمة أن شريكه خانه. استخدم جملًا قصيرة وحادة تناسب الإيقاع.»',
          '❌ «اكتب لغزًا» → ✅ «أكمل مشهد المحقق هذا: [النص السابق]. تدرك المحققة من تفصيلة واحدة أن المشتبه به يكذب. أظهر ولا تحكِ كيف تكتشف التناقض.»',
          '❌ «اجعله أكثر إثارة» → ✅ «أعد كتابة الفقرة السابقة بأسلوب الخيال النوار: حوار مقتضب، ومناجاة داخلية ساخرة، وتفاصيل حسية محددة (أصوات وروائح وملامس).»',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما أفضل LLM محلي للكتابة الإبداعية؟',
            a: 'يُعد Gemma 4 31B وQwen3.8-27B أفضل نقطتي بداية محليتين في هذا الترتيب، ويعمل كلاهما على GPU بذاكرة 24 GB (أوزان بحجم 19–20 GB و18 GB). Gemma 4 31B هو خيار النثر لأن له درجة منشورة في EQ-Bench Creative Writing v3؛ أما Qwen3.8-27B فهو خيار المشاريع الطويلة. على البطاقات الأصغر استخدم Gemma 4 12B (12 GB) أو Mistral Small 3 24B (16 GB). هذا ترتيب تحريري، لذا جرّب مرشحَين على مشاهدك الخاصة.',
          },
          {
            q: 'ما أفضل LLM محلي لكتابة القصص والروايات؟',
            a: 'اختر أكبر نموذج يتسع في ذاكرتك مع مساحة للسياق. يناسب Gemma 4 31B النثر على 24 GB، ويناسب Qwen3.8-27B مشاريع الروايات بسياقه 256K، ويُعد Llama 3.3 70B المرجع عند 48 GB فأكثر. وغالبًا ما تكون العقبة هي البنية: مخطط للأحداث وبطاقة للشخصيات وملخصات قصيرة للفصول تحافظ على اتساق مشروع طويل.',
          },
          {
            q: 'ما أفضل نموذج Ollama للكتابة الإبداعية؟',
            a: 'على 24 GB استخدم `ollama run gemma4:31b` للنثر أو `ollama run qwen3.8:27b` للمشاريع الطويلة. وعلى 12 GB استخدم `gemma4:12b`، وعلى 16 GB `mistral-small:24b`، وعلى 8 GB `qwen3.5:9b`، وعلى 48 GB فأكثر `llama3.3:70b`. ارفع `num_ctx` للمشاهد الطويلة وأوقف التفكير عند كتابة الخيال.',
          },
          {
            q: 'ما أفضل نماذج LLM المحلية للكتابة بذاكرة VRAM لا تتجاوز 8 GB؟',
            a: 'يُعد Qwen3.5 9B (6.6–7.6 GB، سياق 256K) نموذجًا حديثًا في فئة 8 GB على Ollama. لا توجد له درجة إبداعية منشورة، فجرّب مشاهد اختبار خاصة بك وتوقع أن تحافظ النماذج الأصغر على تماسك المشاهد الطويلة بدرجة أقل من نماذج 24 GB.',
          },
          {
            q: 'ما أفضل نموذج مفتوح الأوزان للشعر؟',
            a: 'لا توجد لوحة متصدرين تقيّم الشعر على حدة، لذا اتبع الترتيب حسب فئة الذاكرة: Gemma 4 31B أو Qwen3.8-27B على 24 GB، وGemma 4 12B على 12 GB، وQwen3.5 9B على 8 GB. وللأشكال الصارمة مثل السوناتا والهايكو اخفض درجة الحرارة إلى 0.7–0.85 وتحقق من المقاطع والقافية يدويًا.',
          },
          {
            q: 'أي نموذج أحمّل في LM Studio للكتابة الإبداعية؟',
            a: 'ينطبق الترتيب نفسه. يشغّل LM Studio وOllama كلاهما ملفات GGUF المكمّمة، فلا يوجد نموذج خاص بـ LM Studio: ابحث عن اسم النموذج في متصفح النماذج في LM Studio وحمّل النسخة التي تتسع في ذاكرتك.',
          },
          {
            q: 'هل يتذكر النموذج الأجزاء السابقة من قصتي؟',
            a: 'فقط داخل نافذة السياق. تقدّم نماذج هذا الدليل من 32K إلى 256K رمز، لكن السياق الأطول يستهلك ذاكرة أكثر، وينسى النموذج كل ما هو خارج النافذة. في المشاريع الطويلة ابدأ كل جلسة بملخص قصير للقصة وبطاقة الشخصيات.',
          },
          {
            q: 'هل يمكن أن يحل LLM محلي محل Claude أو ChatGPT في الخيال؟',
            a: 'ليس في لوحات الكتابة الإبداعية: ففي قائمة EQ-Bench Creative Writing v3 المقروءة عبر evals.report تتصدر النماذج المغلقة (Claude Opus 4.7 بـ 2206 Elo وGPT-5.5 بـ 2035). ومع ذلك قد يكفي نموذج محلي بذاكرة 24 GB لكتابة المسوّدات، ويُبقي المخطوطات على جهازك. وتسدّ إعدادات أخذ العينات ومطالبة النظام القوية جزءًا من الفجوة العملية.',
          },
          {
            q: 'هل يظهر أثر التكميم في الكتابة الإبداعية؟',
            a: 'قد يظهر، لأن النسخ ذات البتات الأقل تفقد بعض الدقة. لا نستشهد بدراسة عن الكتابة الإبداعية في هذا الشأن. النسخ الافتراضية في Ollama بدقة 4 بت؛ وإذا توفرت لديك مساحة ذاكرة فقارن نسخة بعدد بتات أعلى مع نسخة 4 بت على المشهد نفسه واحتفظ بما تفضله.',
          },
          {
            q: 'ما درجة الحرارة التي أستخدمها للكتابة الإبداعية؟',
            a: 'كنطاق تحريري للبدء: 0.9–1.1 للنثر و0.7–0.85 للحوار المحكم أو الأشكال الشعرية الصارمة. وقيم المطوّرين مرجع جيد: تذكر Google القيمة 1.0 (مع top-p 0.95 وtop-k 64) لـ Gemma 4، وتذكر Alibaba القيمة 1.0 في وضع التفكير و0.7 دون تفكير لـ Qwen3.8. أوقف وضع التفكير عند كتابة الخيال.',
          },
          {
            q: 'هل يمكنني استخدام مخرجات نماذج LLM المحلية في عمل تجاري؟',
            a: 'يعتمد ذلك على الرخصة. تُدرج Gemma 4 وQwen3.8 وMistral Small 3 وHermes 4.3 برخصة Apache 2.0، ويستخدم Llama 3.3 رخصة Meta Llama 3.3 Community License الخاصة، ورخصة Fimbulvetr-11B هي CC BY-NC 4.0 (غير تجارية). اقرأ الرخصة في بطاقة النموذج الذي تستخدمه تحديدًا. هذه ليست استشارة قانونية.',
          },
          {
            q: 'هل ما زال Fimbulvetr وMidnight-Rose يستحقان الاستخدام؟',
            a: 'فقط إذا فضّلت أسلوبهما. Fimbulvetr-11B-v2 نموذج مبني على Solar برخصة غير تجارية، وMidnight-Rose-70B دمج مبني على Llama 2 70B؛ وكلاهما أقدم من نماذج 2026 في هذا الدليل، ولم نجد درجة معيار للكتابة الإبداعية لأي منهما.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مكتبة Ollama: Gemma 4](https://ollama.com/library/gemma4) -- الوسوم وأحجام التنزيل ونوافذ السياق',
          '[مكتبة Ollama: Qwen3.8](https://ollama.com/library/qwen3.8) و[Qwen3.5](https://ollama.com/library/qwen3.5) -- الوسوم والأحجام ونوافذ السياق',
          '[مكتبة Ollama: Mistral Small](https://ollama.com/library/mistral-small) و[Llama 3.3](https://ollama.com/library/llama3.3) -- الوسوم والأحجام والسياق وملاحظات الترخيص',
          '[Hugging Face: بطاقة Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) و[Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- الرخصة وطول السياق وقيم أخذ العينات',
          '[Hugging Face: بطاقة Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) -- الرخصة والسياق الأصلي وأخذ العينات الموصى به',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- النموذج الأساسي والرخصة وأرقام RefusalBench وملفات GGUF',
          '[Hugging Face: Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) و[Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- النماذج الأساسية والتراخيص',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) و[درجات EQ-Bench على evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) -- أرقام لوحة المتصدرين (بيانات 2026-11-15)',
          '[Featherless: أفضل النماذج المفتوحة للكتابة الإبداعية](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- أرقام Gemma 4 في EQ-Bench وأحجام النماذج المفتوحة (بتاريخ 2026-09-17)',
          '[وثائق Ollama: thinking](https://docs.ollama.com/capabilities/thinking) -- المعامل `think`',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'أخطاء شائعة عند اختيار النماذج المحلية واستخدامها للكتابة',
        items: [
          '**الاختيار حسب ترتيب معيار عام.** لوحات البرمجة والاستدلال لا تقول الكثير عن النثر. راجع قوائم الإبداع مثل EQ-Bench ثم جرّب على مشاهدك.',
          '**استخدام أخذ عينات خاص بالبرمجة.** درجة الحرارة 0.2–0.4 تميل إلى نثر مسطّح؛ والكتابة الإبداعية تحتاج نحو 0.9–1.1 (نطاق تحريري).',
          '**ترك وضع التفكير مفعّلًا.** المخرجات المبنية على التخطيط قد تبدو مصنوعة. أوقفه عند كتابة الخيال.',
          '**تجاهل ذاكرة السياق.** نموذج بحجم 19–20 GB يترك مساحة قليلة على بطاقة 24 GB بمجرد تكبير نافذة السياق.',
          '**مطالبات هزيلة.** «اكتب قصة» يعطي ناتجًا عامًا؛ أضف وجهة النظر والزمن والطول وبطاقة الشخصية وقيدًا صريحًا.',
          '**التحرير داخل نافذة الدردشة.** ولّد في الدردشة وراجع في محرر نصوص؛ فمراجعتك للنثر بنفسك هي ما يبقي الصوت صوتك.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) -- ترتيب عام لجميع الاستخدامات',
          '[كم VRAM تحتاج نماذج LLM المحلية؟](/ar/local-llms/how-much-vram-local-llm) -- احسب متطلبات الذاكرة لأي نموذج وتكميم',
          '[دليل الضبط الدقيق لنماذج LLM المحلية](/ar/local-llms/fine-tuning-local-llms-lora) -- كيف يعمل الضبط الدقيق بـ LoRA على عتاد استهلاكي',
          '[مقارنة Ollama وLM Studio](/ar/local-llms/ollama-vs-lm-studio) -- أي أداة تناسب مسارات العمل الإبداعية',
          '[شرح درجة الحرارة وTop-P](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- تحكّم في المخرجات الإبداعية',
          '[أفضل نماذج LLM المحلية للكتابة الإبداعية: الدليل الموسّع](/ar/power-local-llm/best-local-llm-creative-writing) -- الواجهات وبناء العوالم ونماذج الرفض المنخفض حسب فئة VRAM',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- سلوك الرفض والحدود',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: 'Melhores LLMs locais para escrita criativa em 2026: ficção, poesia e textos longos por VRAM',
    seoTitle: 'Melhores LLMs locais para escrita criativa 2026 por VRAM',
    intro: 'Gemma 4 31B e Qwen3.8-27B são os dois modelos locais para começar na escrita criativa: ambos cabem em uma GPU de 24 GB. Este guia classifica modelos de pesos abertos para ficção, poesia e textos longos por faixa de memória (8, 12, 16, 24 e 48 GB), com tags do Ollama, licenças e a base do ranking.',
    metaDescription: 'Melhores LLMs locais para escrita criativa, contos e poesia em 2026: Gemma 4 31B e Qwen3.8-27B com 24 GB, mais opções para 8, 12, 16 e 48 GB com tags.',
    twitterDescription: 'Melhores LLMs locais para escrita criativa em 2026 por VRAM: Gemma 4 31B, Qwen3.8-27B, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B. Com licenças e tags do Ollama.',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-pt.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**Gemma 4 31B e Qwen3.8-27B são os dois LLMs locais para começar na escrita criativa; ambos cabem em uma GPU de 24 GB.** O Gemma 4 31B é a escolha de prosa e o Qwen3.8-27B a de projetos longos. Ranking editorial, não um teste da PromptQuorum.',
    audience: 'Iniciantes rodando o primeiro LLM local em hardware de consumo',
    dateModified: '2026-11-17',
    readTime: '9 min de leitura',
    educationalLevel: 'Beginner',
    primaryTerm: 'LLM local escrita criativa',
    toc: [
      {
        label: 'Pontos principais',
        anchor: '#key-takeaways',
      },
      {
        label: 'Base do ranking',
        anchor: '#ranking-basis',
      },
      {
        label: 'Melhor modelo por faixa de memória',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 Opções para 8, 12 e 16 GB',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 Modelos da comunidade e de baixa recusa',
        anchor: '#community-models',
      },
      {
        label: 'Local versus nuvem',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Ajustes e prompts',
        anchor: '#prompting-settings',
      },
      {
        label: 'Melhores modelos para poesia',
        anchor: '#poetry-writing',
      },
      {
        label: 'Prompt ruim versus prompt bom',
        anchor: '#prompt-examples',
      },
      {
        label: 'Erros comuns',
        anchor: '#common-mistakes',
      },
      {
        label: 'Leitura relacionada',
        anchor: '#related-reading',
      },
      {
        label: 'Perguntas frequentes',
        anchor: '#faq',
      },
      {
        label: 'Fontes',
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
            text: 'Gemma 4 31B (prosa) e Qwen3.8-27B (projetos longos) são os melhores pontos de partida locais para escrita criativa em uma GPU de 24 GB; em outras faixas de memória use Qwen3.5 9B, Gemma 4 12B, Mistral Small 3 24B ou Llama 3.3 70B.',
          },
          {
            type: 'plain-terms',
            text: 'Escolha o maior modelo que caiba na sua memória com folga para o contexto. Em uma placa de 24 GB, isso significa Gemma 4 31B para prosa ou Qwen3.8-27B para projetos longos. A escrita criativa não tem uma única resposta certa: teste dois candidatos com suas próprias cenas e fique com a voz de que você mais gosta.',
          },
        ],
        items: [
          '**O Gemma 4 31B é a escolha de prosa para uma GPU de 24 GB.** Cerca de 19–20 GB de pesos, contexto de 256K, Apache 2.0 e o único modelo deste guia com pontuação publicada no EQ-Bench Creative Writing v3 (segundo a Featherless: rubrica 16.01, Elo 1407.6).',
          '**O Qwen3.8-27B é a escolha para projetos longos.** 18 GB no Ollama, contexto de 256K, Apache 2.0. A ficha do modelo não menciona escrita criativa e não há pontuação criativa publicada; teste a voz dele com suas próprias cenas.',
          '**Escolha primeiro pela memória.** 8 GB: Qwen3.5 9B. 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B ou Qwen3.8-27B. 48 GB ou mais: Llama 3.3 70B.',
          '**Modelos antigos da comunidade deixaram de ser o padrão.** Fimbulvetr-11B (CC BY-NC 4.0, não comercial) e Midnight-Rose-70B (uma mescla de Llama 2) são anteriores aos modelos acima; use-os só se preferir a voz deles.',
          '**Ajuste a amostragem para prosa, não para código.** Comece com temperatura 0.9–1.1 (faixa editorial; o Google indica 1.0 para o Gemma 4) e desligue o modo de raciocínio.',
          '**Modelos fechados na nuvem ainda lideram os placares de escrita criativa.** Na lista EQ-Bench Creative Writing v3 consultada via evals.report (dados de 2026-11-15), o Claude Opus 4.7 marca 2206 Elo e a melhor entrada de pesos abertos, o Kimi K2.6, 1782. Os modelos locais ganham em privacidade, custo e controle.',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: 'Base do ranking (e o que ele não é)',
        content: [
          '**Este é um ranking editorial montado a partir de fichas de modelo, da biblioteca do Ollama e de placares públicos. A PromptQuorum não executou um novo teste de escrita com pontuação para ele.** A escrita criativa não tem uma única resposta certa; por isso os benchmarks a medem de forma imperfeita e os placares divergem.',
        ],
        items: [
          '**Tamanhos e contexto:** lidos nas páginas da biblioteca do Ollama de [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.5](https://ollama.com/library/qwen3.5), [Mistral Small](https://ollama.com/library/mistral-small) e [Llama 3.3](https://ollama.com/library/llama3.3). Os tamanhos são os de download das versões de 4 bits padrão; a memória de contexto é adicional.',
          '**Licenças e valores de amostragem:** lidos nas fichas de modelo do Hugging Face listadas em Fontes.',
          '**Pontuações de escrita criativa:** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html), um benchmark avaliado por um LLM. Os números do Gemma 4 vêm de um [artigo da Featherless](https://featherless.ai/blog/best-ai-for-creative-writing-2026) de 2026-09-17; o Qwen3.8-27B não tem pontuação publicada. Pontuações de rastreadores diferentes não são diretamente comparáveis; compare apenas dentro de uma mesma lista.',
          '**Os rótulos «melhor para»** são recomendações editoriais baseadas nessas fontes, não resultados medidos.',
          '**Teste cada escolha você mesmo com quatro prompts:** continuar uma cena por 500 palavras (tom e voz), escrever um parágrafo no estilo de um autor citado (o estilo muda?), escrever um conto de 1.000 palavras com final surpreendente (preparação e desfecho) e escrever um diálogo entre dois personagens (as vozes são distintas?).',
          'Para mais detalhes sobre interfaces, construção de mundos e modelos de baixa recusa, veja o [guia ampliado de escrita criativa](/pt/power-local-llm/best-local-llm-creative-writing).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Trate cada escolha como uma hipótese inicial: passe as mesmas três cenas por dois candidatos e fique com aquele cuja voz você prefere.',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: 'Melhor LLM local para escrita criativa por faixa de memória',
        content: [
          '**Escolha primeiro pela memória: o modelo precisa caber com folga para o contexto.** Os tamanhos são de download no Ollama com a quantização padrão de 4 bits; a memória de contexto (cache KV) é adicional, cerca de 2–6 GB em cenas longas (estimativa).',
        ],
        columns: [
          'Sua memória',
          'Modelo (tag do Ollama)',
          'Pesos',
          'Contexto',
        ],
        rows: [
          {
            'Sua memória': 'GPU de 8 GB',
            'Modelo (tag do Ollama)': 'Qwen3.5 9B (qwen3.5:9b)',
            Pesos: '6.6–7.6 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU de 12 GB',
            'Modelo (tag do Ollama)': 'Gemma 4 12B (gemma4:12b)',
            Pesos: '7.7–8.0 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU de 16 GB',
            'Modelo (tag do Ollama)': 'Mistral Small 3 24B (mistral-small:24b)',
            Pesos: '14 GB',
            Contexto: '32K',
          },
          {
            'Sua memória': 'GPU de 24 GB / Mac de 32 GB',
            'Modelo (tag do Ollama)': 'Gemma 4 31B (gemma4:31b)',
            Pesos: '19–20 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU de 24 GB / Mac de 32 GB',
            'Modelo (tag do Ollama)': 'Qwen3.8-27B (qwen3.8:27b)',
            Pesos: '18 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU de 24 GB, mais rápido',
            'Modelo (tag do Ollama)': 'Gemma 4 26B A4B (gemma4:26b)',
            Pesos: '16–19 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU de 48 GB / Mac de 64 GB',
            'Modelo (tag do Ollama)': 'Llama 3.3 70B (llama3.3:70b)',
            Pesos: '43 GB',
            Contexto: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'No Mac, a memória unificada é compartilhada com o macOS. Em um Mac de 32 GB, conte com cerca de 24 GB utilizáveis para modelo e contexto, o que comporta o Gemma 4 31B ou o Qwen3.8-27B, mas deixa poucos GB para o contexto.',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B: escolha de prosa para uma GPU de 24 GB',
        content: [
          '**O Gemma 4 31B é nossa primeira escolha para prosa em uma GPU de 24 GB ou um Mac de 32 GB.** É um modelo denso de 30.7B parâmetros (19–20 GB no Ollama) com contexto de 256K sob Apache 2.0, e o único modelo deste guia com resultado publicado no EQ-Bench Creative Writing v3: rubrica 16.01, Elo 1407.6, segundo a Featherless.',
          'A ficha do modelo do Google lista geração de texto, como poemas e roteiros, entre os usos previstos e recomenda temperatura 1.0, top-p 0.95 e top-k 64. Com 19–20 GB sobra pouco espaço para contexto em uma placa de 24 GB; por isso mantenha a janela de contexto moderada ou escolha o Gemma 4 26B A4B (16–19 GB), um modelo de mistura de especialistas que ativa cerca de 4B parâmetros por token e marcou 1286.9 Elo na mesma lista da Featherless.',
        ],
        columns: [
          'Característica',
          'Valor',
        ],
        rows: [
          {
            'Característica': 'Ideal para',
            Valor: 'Prosa em uma GPU de 24 GB',
          },
          {
            'Característica': 'Pesos (Ollama)',
            Valor: '19–20 GB',
          },
          {
            'Característica': 'Contexto',
            Valor: '256K tokens',
          },
          {
            'Característica': 'Licença',
            Valor: 'Apache 2.0',
          },
          {
            'Característica': 'Comando do Ollama',
            Valor: 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B: escolha para projetos longos no mesmo hardware',
        content: [
          '**O Qwen3.8-27B é a escolha para projetos longos em uma GPU de 24 GB.** É um modelo denso de 27B com 18 GB no Ollama e 262,144 tokens de contexto nativo (extensível a 1,000,000 de tokens segundo a ficha do modelo) sob Apache 2.0.',
          'A Alibaba o posiciona para programação, agentes e pesquisa; a ficha do modelo não menciona escrita criativa e não há pontuação criativa publicada, então trate a prosa dele como não verificada. O modo de raciocínio vem ligado por padrão; desligue-o para ficção.',
        ],
        columns: [
          'Característica',
          'Valor',
        ],
        rows: [
          {
            'Característica': 'Ideal para',
            Valor: 'Projetos de romance, instruções',
          },
          {
            'Característica': 'Pesos (Ollama)',
            Valor: '18 GB',
          },
          {
            'Característica': 'Contexto',
            Valor: '256K tokens',
          },
          {
            'Característica': 'Licença',
            Valor: 'Apache 2.0',
          },
          {
            'Característica': 'Comando do Ollama',
            Valor: 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 Opções para 8, 12 e 16 GB',
        content: [
          '**Abaixo de 24 GB a escolha é menor e menos comprovada; por isso teste antes de se decidir.** Modelos menores costumam manter cenas longas coerentes com menos confiabilidade do que os maiores.',
        ],
        items: [
          '**8 GB: Qwen3.5 9B** (`qwen3.5:9b`, 6.6–7.6 GB, contexto de 256K). Um modelo recente da classe de 8 GB no Ollama. Não há pontuação criativa publicada; rode suas próprias cenas.',
          '**12 GB: Gemma 4 12B** (`gemma4:12b`, 7.7–8.0 GB, contexto de 256K, Apache 2.0). A Featherless lista rubrica de 15.71 e 1270.4 Elo para ele no EQ-Bench Creative Writing v3.',
          '**16 GB: Mistral Small 3 24B** (`mistral-small:24b`, 14 GB, contexto de 32K, Apache 2.0). Um modelo mais antigo que permanece na lista porque poucos modelos mais novos cabem em 16 GB. Sobram só cerca de 2 GB para o contexto; mantenha os prompts curtos.',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B: modelo de referência com 48 GB ou mais',
        content: [
          '**O Llama 3.3 70B (`llama3.3:70b`, 43 GB, contexto de 128K) é o maior modelo deste guia e exige uma configuração de GPU de 48 GB ou um Mac com 64 GB de memória unificada.** A Meta o lançou em dezembro de 2024 sob a Meta Llama 3.3 Community License, uma licença própria e não uma licença de código aberto aprovada pela OSI.',
          'Versões anteriores desta página o colocavam em primeiro lugar em prosa. Não fazemos mais isso: nas listas que lemos não aparece pontuação criativa para ele, enquanto modelos mais novos que cabem em 24 GB têm uma, e os lançamentos recentes do Llama pontuam baixo no EQ-Bench (Llama 4 Maverick 927, Llama 4 Scout 883 na lista do evals.report). Mantenha-o se você tem a memória e gosta da voz dele.',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 Modelos da comunidade e de baixa recusa',
        content: [
          '**Os modelos de ficção da comunidade agora são uma segunda camada, não o padrão.** Verifique a licença de cada modelo antes de qualquer uso comercial.',
        ],
        items: [
          '**Hermes 4.3 36B** (Nous Research, Apache 2.0): baseado no ByteDance Seed-OSS-36B-Base, com arquivos GGUF de 4 a 8 bits no Hugging Face. A Nous informa que ele respondeu 74.60 % (sem raciocínio) e 72.29 % (com raciocínio) dos prompts do próprio RefusalBench (dado do desenvolvedor; valor maior significa menos recusas). Use-o quando um modelo instruct recusar uma cena de ficção legítima e aumente a temperatura acima dos 0.6 da ficha para prosa.',
          '**Fimbulvetr-11B-v2** (Sao10K): um modelo baseado em Solar sob CC BY-NC 4.0, ou seja, só para uso não comercial. A ficha recomenda presets do SillyTavern. Não encontramos pontuação de benchmark de escrita criativa para ele.',
          '**Midnight-Rose-70B** (sophosympatheia): uma mescla baseada no Llama 2 70B, sob a licença do Llama 2 mais restrições herdadas; a ficha aconselha cerca de 6144 tokens de contexto. Não é um modelo Llama 3.3.',
          'Se existir uma conversão GGUF de um modelo antigo, você pode carregá-la no LM Studio ou com `ollama run hf.co/<user>/<repo>`; verifique antes a licença desse repositório específico.',
          'Sobre comportamento de recusa, ética e limites, veja [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics). Hospedar localmente não muda a lei, e quem escreve continua responsável pelo que publica.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Modelos locais versus modelos na nuvem para escrever',
        content: [
          '**Modelos fechados na nuvem pontuam mais alto nos placares de escrita criativa; modelos locais ganham em privacidade, custo e controle.**',
        ],
        items: [
          'Na lista EQ-Bench Creative Writing v3 consultada via [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) (dados de 2026-11-15), o Claude Opus 4.7 lidera com 2206 Elo, seguido pelo GPT-5.5 com 2035.',
          'A melhor entrada de pesos abertos dessa lista é o Kimi K2.6, com 1782 Elo. A Featherless indica, para os modelos abertos que recomenda nesse nível, 753B (GLM-5.3), 763B (DeepSeek-V4.1-Flash) e 2.8T (Kimi K3) parâmetros, muito acima das faixas de 8 a 48 GB deste guia.',
          '**Quando o local é a escolha certa:** manuscritos inéditos, trabalho para clientes sob NDA, trabalho offline e projetos em que o custo por token pesa.',
          '**Fluxo híbrido:** esboce e faça brainstorming localmente; use um modelo na nuvem apenas para o polimento de textos não sensíveis, depois de conferir os termos de dados do provedor.',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: 'Ajustes e prompts que melhoram a escrita criativa com LLMs locais',
        content: [
          'Cinco hábitos mudam mais o resultado do que trocar de modelo.',
        ],
        numberedItems: [
          '**Ajuste a amostragem para prosa, não para código.** Valores dos fabricantes: Gemma 4 temperatura 1.0, top-p 0.95, top-k 64; Qwen3.8 1.0 / 0.95 / top-k 20 no modo de raciocínio e 0.7 / 0.8 / top-k 20 sem raciocínio; Hermes 4.3 0.6 / 0.95 / top-k 20. Como faixa editorial inicial, experimente temperatura 0.9–1.1 para prosa e 0.7–0.85 para diálogos enxutos.',
          '**Desligue o modo de raciocínio para ficção.** Modelos de raciocínio planejam antes de escrever, o que pode fazer as cenas parecerem montadas. O Qwen3.8 raciocina por padrão; na API do Ollama defina `think` como `false` ou use o botão de raciocínio da sua interface.',
          '**Nomeie o estilo de forma concreta.** «Escreva em segunda pessoa, no presente, frases curtas, sem advérbios» funciona melhor do que «escreva ficção literária». Citar um autor dá uma pista de estilo; não publique textos que reproduzam a redação de um autor vivo.',
          '**Use um prompt de sistema persistente** com ponto de vista, tempo verbal, gênero, ficha de personagem e amostras de voz, e cole-o de novo no início de cada sessão.',
          '**Trabalhe em seções e aumente a janela de contexto.** Gere cerca de 500 palavras por vez e repita um resumo curto da história em cada nova sessão, pois o modelo só vê o que cabe no contexto. O contexto padrão do Ollama é limitado; em uma sessão interativa digite `/set parameter num_ctx 16384`. Valores maiores usam mais memória.',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: 'Melhores modelos de pesos abertos para poesia',
        content: [
          '**Nenhum placar pontua poesia separadamente; por isso a escolha para poesia segue o ranking por faixa de memória.** Para formas rígidas (sonetos, haicais, vilanelas), reduza a temperatura para 0.7–0.85 (faixa editorial), porque temperaturas altas tendem a quebrar métrica e rima; para verso livre vale a faixa da prosa.',
        ],
        items: [
          '**24 GB:** Gemma 4 31B ou Qwen3.8-27B. Peça o mesmo poema curto aos dois e fique com a voz de que mais gosta.',
          '**Faixas menores:** Gemma 4 12B (12 GB) ou Qwen3.5 9B (8 GB).',
          '**Formas rígidas:** os modelos trabalham com tokens, não com sílabas; conte as sílabas e confira a rima manualmente.',
          '**Indique a forma explicitamente:** «Escreva um haicai (5-7-5 sílabas) sobre a chuva de outono» ou «Escreva um soneto shakespeariano (ABAB CDCD EFEF GG, pentâmetro iâmbico) sobre a perda». Prompts vagos como «escreva um poema sobre amor» geram verso livre genérico.',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: 'Prompt ruim versus prompt bom',
        items: [
          '❌ «Escreva uma história de fantasia» → ✅ «Escreva uma cena de fantasia de 500 palavras em que um contrabandista negocia com um dragão por artefatos antigos. Use detalhes sensoriais e mantenha o diálogo tenso.»',
          '❌ «Escreva algo interessante» → ✅ «Escreva uma cena de abertura de 300 palavras sobre um assalto que dá errado. O protagonista descobre, no meio da missão, que o parceiro o traiu. Use frases curtas e incisivas para acompanhar o ritmo.»',
          '❌ «Escreva um mistério» → ✅ «Continue esta cena de detetive: [texto anterior]. A detetive percebe, por um único detalhe, que o suspeito está mentindo. Mostre, não conte, como ela flagra a inconsistência.»',
          '❌ «Deixe mais interessante» → ✅ «Reescreva o parágrafo anterior como ficção noir: diálogo enxuto, monólogo interior cínico, detalhes sensoriais específicos (sons, cheiros, texturas).»',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é o melhor LLM local para escrita criativa?',
            a: 'Gemma 4 31B e Qwen3.8-27B são os melhores pontos de partida locais deste ranking, e ambos cabem em uma GPU de 24 GB (19–20 GB e 18 GB de pesos). O Gemma 4 31B é a escolha de prosa porque tem pontuação publicada no EQ-Bench Creative Writing v3; o Qwen3.8-27B é a escolha para projetos longos. Em placas menores use Gemma 4 12B (12 GB) ou Mistral Small 3 24B (16 GB). O ranking é editorial: teste dois candidatos com suas próprias cenas.',
          },
          {
            q: 'Qual é o melhor LLM local para escrever contos e romances?',
            a: 'Escolha o maior modelo que caiba na sua memória com folga para o contexto. O Gemma 4 31B serve para prosa em 24 GB, o Qwen3.8-27B para projetos de romance com seu contexto de 256K, e o Llama 3.3 70B é a referência com 48 GB ou mais. O gargalo costuma ser a estrutura: um esboço, uma ficha de personagens e resumos curtos de capítulos mantêm um projeto longo coerente.',
          },
          {
            q: 'Qual modelo do Ollama é o melhor para escrita criativa?',
            a: 'Com 24 GB, `ollama run gemma4:31b` para prosa ou `ollama run qwen3.8:27b` para projetos longos. Com 12 GB, `gemma4:12b`; com 16 GB, `mistral-small:24b`; com 8 GB, `qwen3.5:9b`; com 48 GB ou mais, `llama3.3:70b`. Aumente `num_ctx` para cenas longas e desligue o raciocínio para ficção.',
          },
          {
            q: 'Quais LLMs locais funcionam melhor para escrever com apenas 8 GB de VRAM?',
            a: 'O Qwen3.5 9B (6.6–7.6 GB, contexto de 256K) é um modelo recente da classe de 8 GB no Ollama. Não há pontuação criativa publicada; faça suas próprias cenas de teste e espere que modelos menores segurem cenas longas com menos confiabilidade do que os de 24 GB.',
          },
          {
            q: 'Qual modelo de pesos abertos é o melhor para poesia?',
            a: 'Nenhum placar pontua poesia separadamente; use o ranking por faixa de memória: Gemma 4 31B ou Qwen3.8-27B com 24 GB, Gemma 4 12B com 12 GB, Qwen3.5 9B com 8 GB. Para formas rígidas como sonetos ou haicais, reduza a temperatura para 0.7–0.85 e confira sílabas e rimas manualmente.',
          },
          {
            q: 'Qual modelo devo carregar no LM Studio para escrita criativa?',
            a: 'Vale o mesmo ranking. O LM Studio e o Ollama executam arquivos GGUF quantizados, então não existe um modelo exclusivo do LM Studio: procure o nome do modelo no navegador de modelos do LM Studio e carregue a versão que caiba na sua memória.',
          },
          {
            q: 'O modelo lembra das partes anteriores da minha história?',
            a: 'Somente dentro da janela de contexto. Os modelos deste guia oferecem de 32K a 256K tokens, mas um contexto maior usa mais memória, e o modelo esquece o que fica fora da janela. Em projetos longos, comece cada sessão com um resumo curto da história e a ficha de personagens.',
          },
          {
            q: 'Um LLM local pode substituir o Claude ou o ChatGPT na ficção?',
            a: 'Não nos placares de escrita criativa: na lista EQ-Bench Creative Writing v3 consultada via evals.report, os modelos fechados lideram (Claude Opus 4.7 com 2206 Elo, GPT-5.5 com 2035). Um modelo local de 24 GB ainda pode bastar para rascunhos e mantém os manuscritos no seu computador. Ajustes de amostragem e um bom prompt de sistema fecham parte da diferença prática.',
          },
          {
            q: 'A quantização é perceptível na escrita criativa?',
            a: 'Pode ser, porque versões com menos bits perdem alguma precisão. Não citamos nenhum estudo sobre escrita criativa a esse respeito. As versões padrão do Ollama são de 4 bits; se você tem folga de memória, compare uma versão com mais bits com a de 4 bits na mesma cena e fique com a que preferir.',
          },
          {
            q: 'Qual temperatura devo usar para escrita criativa?',
            a: 'Como faixa editorial inicial, 0.9–1.1 para prosa e 0.7–0.85 para diálogos enxutos ou formas poéticas rígidas. Os valores dos fabricantes são uma boa âncora: o Google indica 1.0 (top-p 0.95, top-k 64) para o Gemma 4, e a Alibaba indica 1.0 no modo de raciocínio e 0.7 sem raciocínio para o Qwen3.8. Desligue o modo de raciocínio para ficção.',
          },
          {
            q: 'Posso usar o texto de LLMs locais em trabalhos comerciais?',
            a: 'Depende da licença. Gemma 4, Qwen3.8, Mistral Small 3 e Hermes 4.3 constam sob Apache 2.0, o Llama 3.3 usa a Meta Llama 3.3 Community License própria, e o Fimbulvetr-11B é CC BY-NC 4.0 (não comercial). Leia a licença na ficha do modelo exato que você usa. Isto não é aconselhamento jurídico.',
          },
          {
            q: 'Fimbulvetr e Midnight-Rose ainda valem a pena?',
            a: 'Só se você preferir a voz deles. O Fimbulvetr-11B-v2 é um modelo baseado em Solar sob licença não comercial, e o Midnight-Rose-70B é uma mescla baseada no Llama 2 70B; ambos são anteriores aos modelos de 2026 deste guia, e não encontramos pontuação de benchmark de escrita criativa para nenhum dos dois.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Biblioteca do Ollama: Gemma 4](https://ollama.com/library/gemma4) -- tags, tamanhos de download e janelas de contexto',
          '[Biblioteca do Ollama: Qwen3.8](https://ollama.com/library/qwen3.8) e [Qwen3.5](https://ollama.com/library/qwen3.5) -- tags, tamanhos e janelas de contexto',
          '[Biblioteca do Ollama: Mistral Small](https://ollama.com/library/mistral-small) e [Llama 3.3](https://ollama.com/library/llama3.3) -- tags, tamanhos, contexto e notas de licença',
          '[Hugging Face: ficha do Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) e do [Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- licença, tamanho de contexto, valores de amostragem',
          '[Hugging Face: ficha do Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) -- licença, contexto nativo, amostragem recomendada',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- modelo base, licença, números do RefusalBench, arquivos GGUF',
          '[Hugging Face: Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) e [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- modelos base e licenças',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) e [pontuações EQ-Bench no evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) -- números do placar (dados de 2026-11-15)',
          '[Featherless: melhores modelos abertos para escrita criativa](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- números do Gemma 4 no EQ-Bench e tamanhos de modelos abertos (de 2026-09-17)',
          '[Documentação do Ollama: thinking](https://docs.ollama.com/capabilities/thinking) -- o parâmetro `think`',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao escolher e usar modelos locais para escrever',
        items: [
          '**Escolher por uma posição geral em benchmarks.** Placares de programação e raciocínio dizem pouco sobre prosa. Consulte listas criativas como o EQ-Bench e depois teste com suas próprias cenas.',
          '**Usar amostragem de programação.** Temperatura de 0.2–0.4 tende a produzir prosa chapada; a escrita criativa pede cerca de 0.9–1.1 (faixa editorial).',
          '**Deixar o modo de raciocínio ligado.** Uma saída guiada por planejamento pode parecer montada. Desligue-o para ficção.',
          '**Ignorar a memória de contexto.** Um modelo de 19–20 GB deixa pouca folga em uma placa de 24 GB assim que você aumenta a janela de contexto.',
          '**Prompts magros.** «Escreva uma história» gera resultado genérico; acrescente ponto de vista, tempo verbal, extensão, ficha de personagem e uma restrição explícita.',
          '**Editar dentro da janela do chat.** Gere no chat e revise em um editor de texto; revisar a prosa você mesmo é o que mantém a voz sua.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) -- Ranking geral para todos os usos',
          '[Quanta VRAM os LLMs locais precisam?](/pt/local-llms/how-much-vram-local-llm) -- Calcule a memória necessária para qualquer modelo e quantização',
          '[Guia de fine-tuning de LLMs locais](/pt/local-llms/fine-tuning-local-llms-lora) -- Como o fine-tuning com LoRA funciona em hardware de consumo',
          '[Ollama versus LM Studio](/pt/local-llms/ollama-vs-lm-studio) -- Qual ferramenta combina com fluxos criativos',
          '[Temperatura e Top-P explicados](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- Controle a saída criativa',
          '[Melhores LLMs locais para escrita criativa: guia ampliado](/pt/power-local-llm/best-local-llm-creative-writing) -- Interfaces, construção de mundos e modelos de baixa recusa por faixa de VRAM',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- Comportamento de recusa e limites',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: 'Beste lokale LLMs für kreatives Schreiben 2026: Fiktion, Poesie und Langtexte nach VRAM',
    seoTitle: 'Beste lokale LLMs für kreatives Schreiben 2026 nach VRAM',
    intro: 'Gemma 4 31B und Qwen3.8-27B sind die beiden lokalen Modelle, mit denen Sie beim kreativen Schreiben starten sollten: Beide passen auf eine 24-GB-GPU. Dieser Ratgeber ordnet Open-Weight-Modelle für Fiktion, Poesie und Langtexte nach Speicherstufe (8, 12, 16, 24 und 48 GB) und nennt Ollama-Tags, Lizenzen und die Grundlage der Rangliste.',
    metaDescription: 'Beste lokale LLMs für kreatives Schreiben, Geschichten und Poesie 2026: Gemma 4 31B und Qwen3.8-27B für 24 GB, dazu Empfehlungen für 8, 12, 16 und 48 GB.',
    twitterDescription: 'Beste lokale LLMs für kreatives Schreiben 2026 nach VRAM: Gemma 4 31B, Qwen3.8-27B, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B. Mit Lizenzen und Ollama-Tags.',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-de.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**Gemma 4 31B und Qwen3.8-27B sind die beiden lokalen LLMs für den Start beim kreativen Schreiben; beide passen auf eine 24-GB-GPU.** Gemma 4 31B ist die Prosa-Wahl, Qwen3.8-27B die Wahl für lange Projekte. Kleinere Stufen folgen unten. Redaktionelle Rangliste aus Modellkarten und Leaderboards, kein PromptQuorum-Test.',
    audience: 'Einsteiger, die ihr erstes lokales LLM auf Consumer-Hardware betreiben',
    dateModified: '2026-11-17',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Anfänger',
    primaryTerm: 'lokales LLM kreatives Schreiben',
    toc: [
      {
        label: 'Zusammenfassung',
        anchor: '#key-takeaways',
      },
      {
        label: 'Grundlage der Rangliste',
        anchor: '#ranking-basis',
      },
      {
        label: 'Bestes Modell nach Speicherstufe',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 Empfehlungen für 8, 12 und 16 GB',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 Community- und Low-Refusal-Modelle',
        anchor: '#community-models',
      },
      {
        label: 'Lokal vs. Cloud-Modelle',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Einstellungen und Prompts',
        anchor: '#prompting-settings',
      },
      {
        label: 'Beste Modelle für Poesie',
        anchor: '#poetry-writing',
      },
      {
        label: 'Schlechter vs. guter Prompt',
        anchor: '#prompt-examples',
      },
      {
        label: 'Häufige Fehler',
        anchor: '#common-mistakes',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: '#related-reading',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Quellen',
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
            text: 'Gemma 4 31B (Prosa) und Qwen3.8-27B (lange Projekte) sind die besten lokalen Startpunkte für kreatives Schreiben auf einer 24-GB-GPU; für andere Speicherstufen eignen sich Qwen3.5 9B, Gemma 4 12B, Mistral Small 3 24B oder Llama 3.3 70B.',
          },
          {
            type: 'plain-terms',
            text: 'Wählen Sie das größte Modell, das mit Reserve für den Kontext in Ihren Speicher passt. Auf einer 24-GB-Karte ist das Gemma 4 31B für Prosa oder Qwen3.8-27B für lange Projekte. Kreatives Schreiben hat keine einzig richtige Antwort: Testen Sie zwei Kandidaten an eigenen Szenen und behalten Sie den Stil, der Ihnen besser gefällt.',
          },
        ],
        items: [
          '**Gemma 4 31B ist die Prosa-Wahl für eine 24-GB-GPU.** Rund 19–20 GB Gewichte, 256K Kontext, Apache 2.0 und das einzige Modell in diesem Ratgeber mit veröffentlichtem EQ-Bench-Creative-Writing-v3-Wert (laut Featherless: Rubrik 16,01, Elo 1407,6).',
          '**Qwen3.8-27B ist die Wahl für lange Projekte.** 18 GB bei Ollama, 256K Kontext, Apache 2.0. Die Modellkarte erwähnt kreatives Schreiben nicht, und es gibt keinen veröffentlichten Kreativwert; prüfen Sie den Stil an eigenen Szenen.',
          '**Wählen Sie zuerst nach Speicher.** 8 GB: Qwen3.5 9B. 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B oder Qwen3.8-27B. Ab 48 GB: Llama 3.3 70B.',
          '**Ältere Community-Modelle sind nicht mehr die Standardwahl.** Fimbulvetr-11B (CC BY-NC 4.0, nicht kommerziell) und Midnight-Rose-70B (ein Llama-2-Merge) sind älter als die obigen Modelle; nutzen Sie sie nur, wenn Ihnen ihr Stil besser gefällt.',
          '**Sampling für Prosa, nicht für Code.** Beginnen Sie bei Temperatur 0,9–1,1 (redaktioneller Bereich; Google nennt 1,0 für Gemma 4) und schalten Sie den Thinking-Modus aus.',
          '**Geschlossene Cloud-Modelle führen weiterhin die Leaderboards für kreatives Schreiben an.** In der EQ-Bench-Creative-Writing-v3-Liste über evals.report (Datenstand 2026-11-15) erreicht Claude Opus 4.7 2206 Elo, der beste Open-Weight-Eintrag Kimi K2.6 1782. Lokale Modelle punkten bei Datenschutz, Kosten und Kontrolle.',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: 'Grundlage der Rangliste (und was sie nicht ist)',
        content: [
          '**Dies ist eine redaktionelle Rangliste aus Modellkarten, der Ollama-Bibliothek und öffentlichen Leaderboards. PromptQuorum hat dafür keinen neuen bewerteten Schreibtest durchgeführt.** Kreatives Schreiben hat keine einzig richtige Antwort; Benchmarks messen es nur unvollkommen, und Leaderboards widersprechen sich.',
        ],
        items: [
          '**Größen und Kontext:** entnommen aus den Ollama-Bibliotheksseiten zu [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.5](https://ollama.com/library/qwen3.5), [Mistral Small](https://ollama.com/library/mistral-small) und [Llama 3.3](https://ollama.com/library/llama3.3). Die Größen sind Download-Größen der 4-Bit-Standardbuilds; Kontextspeicher kommt hinzu.',
          '**Lizenzen und Sampling-Vorgaben:** entnommen aus den Hugging-Face-Modellkarten unter Quellen.',
          '**Kreativ-Scores:** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html), ein von einem LLM bewerteter Benchmark. Die Gemma-4-Werte stammen aus einem [Featherless-Artikel](https://featherless.ai/blog/best-ai-for-creative-writing-2026) vom 2026-09-17; für Qwen3.8-27B gibt es keinen veröffentlichten Wert. Werte verschiedener Tracker sind nicht direkt vergleichbar; vergleichen Sie nur innerhalb einer Liste.',
          '**Die Kennzeichnungen „am besten für“** sind redaktionelle Empfehlungen auf Basis dieser Quellen, keine Messergebnisse.',
          '**Testen Sie jede Empfehlung selbst mit vier Prompts:** eine Szene über 500 Wörter fortsetzen (Ton und Stimme), einen Absatz im Stil eines genannten Autors schreiben (ändert sich der Stil?), eine Geschichte mit 1.000 Wörtern und Wendung am Ende (Aufbau und Auflösung) und einen Dialog zweier Figuren (klingen die Stimmen verschieden?).',
          'Mehr zu Frontends, Worldbuilding und Low-Refusal-Modellen finden Sie im [erweiterten Ratgeber zum kreativen Schreiben](/de/power-local-llm/best-local-llm-creative-writing).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Betrachten Sie jede Empfehlung als Arbeitshypothese: Lassen Sie dieselben drei Szenen von zwei Kandidaten schreiben und behalten Sie das Modell, dessen Stimme Ihnen besser gefällt.',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: 'Bestes lokales LLM für kreatives Schreiben nach Speicherstufe',
        content: [
          '**Wählen Sie zuerst nach Speicher: Das Modell muss mit Reserve für den Kontext hineinpassen.** Die Größen sind Ollama-Download-Größen bei der standardmäßigen 4-Bit-Quantisierung; der Kontextspeicher (KV-Cache) kommt hinzu, bei langen Szenen grob 2–6 GB (Schätzung).',
        ],
        columns: [
          'Ihr Speicher',
          'Modell (Ollama-Tag)',
          'Gewichte',
          'Kontext',
        ],
        rows: [
          {
            'Ihr Speicher': '8-GB-GPU',
            'Modell (Ollama-Tag)': 'Qwen3.5 9B (qwen3.5:9b)',
            Gewichte: '6,6–7,6 GB',
            Kontext: '256K',
          },
          {
            'Ihr Speicher': '12-GB-GPU',
            'Modell (Ollama-Tag)': 'Gemma 4 12B (gemma4:12b)',
            Gewichte: '7,7–8,0 GB',
            Kontext: '256K',
          },
          {
            'Ihr Speicher': '16-GB-GPU',
            'Modell (Ollama-Tag)': 'Mistral Small 3 24B (mistral-small:24b)',
            Gewichte: '14 GB',
            Kontext: '32K',
          },
          {
            'Ihr Speicher': '24-GB-GPU / 32-GB-Mac',
            'Modell (Ollama-Tag)': 'Gemma 4 31B (gemma4:31b)',
            Gewichte: '19–20 GB',
            Kontext: '256K',
          },
          {
            'Ihr Speicher': '24-GB-GPU / 32-GB-Mac',
            'Modell (Ollama-Tag)': 'Qwen3.8-27B (qwen3.8:27b)',
            Gewichte: '18 GB',
            Kontext: '256K',
          },
          {
            'Ihr Speicher': '24-GB-GPU, schneller',
            'Modell (Ollama-Tag)': 'Gemma 4 26B A4B (gemma4:26b)',
            Gewichte: '16–19 GB',
            Kontext: '256K',
          },
          {
            'Ihr Speicher': '48-GB-GPU / 64-GB-Mac',
            'Modell (Ollama-Tag)': 'Llama 3.3 70B (llama3.3:70b)',
            Gewichte: '43 GB',
            Kontext: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Beim Mac teilt sich der Unified Memory mit macOS. Bei einem 32-GB-Mac sollten Sie mit rund 24 GB nutzbar für Modell plus Kontext rechnen; das reicht für Gemma 4 31B oder Qwen3.8-27B, lässt aber nur wenige GB für den Kontext.',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B: Prosa-Wahl für eine 24-GB-GPU',
        content: [
          '**Gemma 4 31B ist unsere erste Wahl für Prosa auf einer 24-GB-GPU oder einem 32-GB-Mac.** Es ist ein dichtes Modell mit 30,7B Parametern (19–20 GB bei Ollama) und 256K Kontext unter Apache 2.0 und das einzige Modell in diesem Ratgeber mit veröffentlichtem EQ-Bench-Creative-Writing-v3-Ergebnis: Rubrik 16,01, Elo 1407,6, laut Featherless.',
          'Die Modellkarte von Google nennt Textgenerierung wie Gedichte und Skripte als vorgesehenen Einsatz und empfiehlt Temperatur 1,0, top-p 0,95, top-k 64. Mit 19–20 GB bleibt auf einer 24-GB-Karte wenig Platz für Kontext; halten Sie das Kontextfenster daher moderat oder wählen Sie Gemma 4 26B A4B (16–19 GB), ein Mixture-of-Experts-Modell, das pro Token etwa 4B Parameter aktiviert und in derselben Featherless-Liste 1286,9 Elo erreichte.',
        ],
        columns: [
          'Merkmal',
          'Wert',
        ],
        rows: [
          {
            Merkmal: 'Geeignet für',
            Wert: 'Prosa auf einer 24-GB-GPU',
          },
          {
            Merkmal: 'Gewichte (Ollama)',
            Wert: '19–20 GB',
          },
          {
            Merkmal: 'Kontext',
            Wert: '256K Token',
          },
          {
            Merkmal: 'Lizenz',
            Wert: 'Apache 2.0',
          },
          {
            Merkmal: 'Ollama-Befehl',
            Wert: 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B: Wahl für lange Projekte auf gleicher Hardware',
        content: [
          '**Qwen3.8-27B ist die Wahl für lange Projekte auf einer 24-GB-GPU.** Es ist ein dichtes 27B-Modell mit 18 GB bei Ollama und 262.144 Token nativem Kontext (laut Modellkarte auf 1.000.000 Token erweiterbar) unter Apache 2.0.',
          'Alibaba positioniert es für Coding, Agenten und Recherche; die Modellkarte erwähnt kreatives Schreiben nicht, und es gibt keinen veröffentlichten Kreativwert. Betrachten Sie seine Prosa daher als ungeprüft. Der Thinking-Modus ist standardmäßig aktiv; schalten Sie ihn für Fiktion aus.',
        ],
        columns: [
          'Merkmal',
          'Wert',
        ],
        rows: [
          {
            Merkmal: 'Geeignet für',
            Wert: 'Romanprojekte, Anweisungstreue',
          },
          {
            Merkmal: 'Gewichte (Ollama)',
            Wert: '18 GB',
          },
          {
            Merkmal: 'Kontext',
            Wert: '256K Token',
          },
          {
            Merkmal: 'Lizenz',
            Wert: 'Apache 2.0',
          },
          {
            Merkmal: 'Ollama-Befehl',
            Wert: 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 Empfehlungen für 8, 12 und 16 GB',
        content: [
          '**Unterhalb von 24 GB ist die Auswahl kleiner und weniger erprobt; testen Sie daher vor der Entscheidung.** Kleinere Modelle halten lange Szenen in der Regel weniger zuverlässig konsistent als größere.',
        ],
        items: [
          '**8 GB: Qwen3.5 9B** (`qwen3.5:9b`, 6,6–7,6 GB, 256K Kontext). Ein aktuelles Modell der 8-GB-Klasse bei Ollama. Für das Modell ist kein Kreativwert veröffentlicht; testen Sie eigene Szenen.',
          '**12 GB: Gemma 4 12B** (`gemma4:12b`, 7,7–8,0 GB, 256K Kontext, Apache 2.0). Featherless nennt für EQ-Bench Creative Writing v3 eine Rubrik von 15,71 und 1270,4 Elo.',
          '**16 GB: Mistral Small 3 24B** (`mistral-small:24b`, 14 GB, 32K Kontext, Apache 2.0). Ein älteres Modell, das auf der Liste bleibt, weil nur wenige neuere Modelle in 16 GB passen. Es lässt nur etwa 2 GB für den Kontext, halten Sie Prompts daher kurz.',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B: Referenzmodell ab 48 GB',
        content: [
          '**Llama 3.3 70B (`llama3.3:70b`, 43 GB, 128K Kontext) ist das größte Modell in diesem Ratgeber und braucht ein 48-GB-GPU-Setup oder einen Mac mit 64 GB Unified Memory.** Meta hat es im Dezember 2024 unter der Meta Llama 3.3 Community License veröffentlicht, einer eigenen Lizenz und keiner OSI-Open-Source-Lizenz.',
          'Frühere Versionen dieser Seite führten es bei Prosa an erster Stelle. Das tun wir nicht mehr: In den von uns gelesenen Listen taucht für das Modell kein Kreativwert auf, für neuere Modelle, die in 24 GB passen, dagegen schon, und neuere Llama-Releases schneiden bei EQ-Bench schwach ab (Llama 4 Maverick 927, Llama 4 Scout 883 in der evals.report-Liste). Behalten Sie es, wenn Sie den Speicher haben und seinen Stil mögen.',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 Community- und Low-Refusal-Modelle',
        content: [
          '**Community-Fiktionsmodelle sind jetzt eine zweite Ebene, nicht mehr die Standardwahl.** Prüfen Sie vor kommerzieller Nutzung die Lizenz des jeweiligen Modells.',
        ],
        items: [
          '**Hermes 4.3 36B** (Nous Research, Apache 2.0): basiert auf ByteDance Seed-OSS-36B-Base, mit GGUF-Dateien von 4 bis 8 Bit auf Hugging Face. Nous gibt an, dass es im eigenen RefusalBench 74,60 % (ohne Reasoning) bzw. 72,29 % (mit Reasoning) der Prompts beantwortet hat (Herstellerangabe; höher bedeutet weniger Ablehnungen). Nutzen Sie es, wenn ein Instruct-Modell eine legitime Fiktionsszene ablehnt, und erhöhen Sie die Temperatur über die 0,6 der Modellkarte hinaus.',
          '**Fimbulvetr-11B-v2** (Sao10K): ein Solar-basiertes Modell unter CC BY-NC 4.0, also nur nicht kommerziell nutzbar. Die Modellkarte empfiehlt SillyTavern-Presets. Einen Creative-Writing-Benchmark-Wert haben wir dafür nicht gefunden.',
          '**Midnight-Rose-70B** (sophosympatheia): ein Merge auf Basis von Llama 2 70B, unter der Llama-2-Lizenz plus geerbten Einschränkungen; die Modellkarte rät zu etwa 6144 Token Kontext. Es ist kein Llama-3.3-Modell.',
          'Gibt es für ein älteres Modell eine GGUF-Konvertierung, können Sie sie in LM Studio oder über `ollama run hf.co/<user>/<repo>` laden; prüfen Sie zuvor die Lizenz dieses konkreten Repositorys.',
          'Zu Ablehnungsverhalten, Ethik und Grenzen siehe [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics). Lokales Hosting ändert nichts an der Rechtslage, und die schreibende Person bleibt für Veröffentlichtes verantwortlich.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Lokal vs. Cloud-Modelle fürs Schreiben',
        content: [
          '**Geschlossene Cloud-Modelle erzielen in Leaderboards für kreatives Schreiben höhere Werte; lokale Modelle punkten bei Datenschutz, Kosten und Kontrolle.**',
        ],
        items: [
          'In der EQ-Bench-Creative-Writing-v3-Liste über [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) (Datenstand 2026-11-15) führt Claude Opus 4.7 mit 2206 Elo, gefolgt von GPT-5.5 mit 2035.',
          'Der beste Open-Weight-Eintrag der Liste ist Kimi K2.6 mit 1782 Elo. Featherless nennt für die offenen Modelle, die es auf diesem Niveau empfiehlt, 753B (GLM-5.3), 763B (DeepSeek-V4.1-Flash) und 2,8T (Kimi K3) Parameter, weit jenseits der Speicherstufen von 8 bis 48 GB in diesem Ratgeber.',
          '**Wann lokal die richtige Wahl ist:** unveröffentlichte Manuskripte, Kundenarbeit unter NDA, Offline-Arbeit und Projekte, bei denen Kosten pro Token zählen.',
          '**Hybrid-Workflow:** Entwerfen und Brainstorming lokal; ein Cloud-Modell nur für unkritisches Polishing, nachdem Sie die Datenbedingungen des Anbieters geprüft haben.',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: 'Einstellungen und Prompts, die lokales kreatives Schreiben verbessern',
        content: [
          'Fünf Gewohnheiten verändern das Ergebnis stärker als ein Modellwechsel.',
        ],
        numberedItems: [
          '**Stellen Sie das Sampling auf Prosa ein, nicht auf Code.** Herstellervorgaben: Gemma 4 Temperatur 1,0, top-p 0,95, top-k 64; Qwen3.8 1,0 / 0,95 / top-k 20 im Thinking-Modus und 0,7 / 0,8 / top-k 20 im Nicht-Thinking-Modus; Hermes 4.3 0,6 / 0,95 / top-k 20. Als redaktionellen Startbereich probieren Sie Temperatur 0,9–1,1 für Prosa und 0,7–0,85 für knappe Dialoge.',
          '**Schalten Sie den Thinking-Modus für Fiktion aus.** Reasoning-Modelle planen vor dem Schreiben, wodurch Szenen konstruiert wirken können. Qwen3.8 denkt standardmäßig; setzen Sie in der Ollama-API `think` auf `false` oder nutzen Sie den Thinking-Schalter Ihres Frontends.',
          '**Benennen Sie den Stil konkret.** „Schreibe in der zweiten Person, Präsens, kurze Sätze, keine Adverbien“ funktioniert besser als „schreibe literarische Fiktion“. Die Nennung eines Autors liefert einen Stilhinweis; veröffentlichen Sie keine Texte, die Formulierungen lebender Autoren nachbilden.',
          '**Nutzen Sie einen festen System-Prompt** mit Erzählperspektive, Zeitform, Genre, Figurenbogen-Steckbrief und Stilproben, und fügen Sie ihn zu Beginn jeder Sitzung erneut ein.',
          '**Arbeiten Sie abschnittsweise und erhöhen Sie das Kontextfenster.** Erzeugen Sie jeweils etwa 500 Wörter und nennen Sie in jeder neuen Sitzung eine kurze Zusammenfassung der Geschichte, denn ein Modell sieht nur, was in seinen Kontext passt. Der Standardkontext von Ollama ist begrenzt; tippen Sie in einer interaktiven Sitzung `/set parameter num_ctx 16384`. Größere Werte brauchen mehr Speicher.',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: 'Beste Open-Weight-Modelle für Poesie',
        content: [
          '**Kein Leaderboard bewertet Poesie getrennt; die Poesie-Empfehlung folgt daher der Rangliste nach Speicherstufe.** Für strenge Formen (Sonette, Haiku, Villanellen) senken Sie die Temperatur auf 0,7–0,85 (redaktioneller Bereich), weil hohe Temperaturen Metrum und Reim eher brechen; für freie Verse gilt der Prosa-Bereich.',
        ],
        items: [
          '**24 GB:** Gemma 4 31B oder Qwen3.8-27B. Lassen Sie beide denselben kurzen Gedicht-Prompt schreiben und behalten Sie die Stimme, die Ihnen besser gefällt.',
          '**Kleinere Stufen:** Gemma 4 12B (12 GB) oder Qwen3.5 9B (8 GB).',
          '**Strenge Formen:** Modelle arbeiten mit Token, nicht mit Silben; zählen Sie Silben und prüfen Sie Reime daher von Hand.',
          '**Nennen Sie die Form ausdrücklich:** „Schreibe ein Haiku (5-7-5 Silben) über Herbstregen“ oder „Schreibe ein Shakespeare-Sonett (ABAB CDCD EFEF GG, Jambus) über Verlust“. Vage Prompts wie „schreibe ein Gedicht über Liebe“ führen zu generischen freien Versen.',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: 'Schlechter vs. guter Prompt',
        items: [
          '❌ „Schreibe eine Fantasy-Geschichte“ → ✅ „Schreibe eine Fantasy-Szene mit 500 Wörtern, in der ein Schmuggler mit einem Drachen um antike Artefakte verhandelt. Nutze sinnliche Details und halte den Dialog angespannt.“',
          '❌ „Schreibe etwas Interessantes“ → ✅ „Schreibe eine Eröffnungsszene mit 300 Wörtern über einen schiefgegangenen Raub. Die Hauptfigur merkt mitten im Einsatz, dass ihr Partner sie verraten hat. Nutze kurze, knappe Sätze passend zum Tempo.“',
          '❌ „Schreibe einen Krimi“ → ✅ „Setze diese Detektivszene fort: [vorheriger Text]. Die Detektivin erkennt an einem Detail, dass der Verdächtige lügt. Zeige, erzähle nicht, wie sie den Widerspruch bemerkt.“',
          '❌ „Mach es interessanter“ → ✅ „Schreibe den vorherigen Absatz als Noir-Fiktion um: knappe Dialoge, zynischer innerer Monolog, konkrete sinnliche Details (Geräusche, Gerüche, Texturen).“',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welches lokale LLM ist das beste für kreatives Schreiben?',
            a: 'Gemma 4 31B und Qwen3.8-27B sind in dieser Rangliste die besten lokalen Startpunkte, und beide passen auf eine 24-GB-GPU (19–20 GB bzw. 18 GB Gewichte). Gemma 4 31B ist die Prosa-Wahl, weil es einen veröffentlichten EQ-Bench-Creative-Writing-v3-Wert hat; Qwen3.8-27B ist die Wahl für lange Projekte. Auf kleineren Karten eignen sich Gemma 4 12B (12 GB) oder Mistral Small 3 24B (16 GB). Es ist eine redaktionelle Rangliste: Testen Sie zwei Kandidaten an eigenen Szenen.',
          },
          {
            q: 'Welches lokale LLM eignet sich am besten für Geschichten und Romane?',
            a: 'Wählen Sie das größte Modell, das mit Reserve für den Kontext in Ihren Speicher passt. Gemma 4 31B eignet sich für Prosa auf 24 GB, Qwen3.8-27B mit 256K Kontext für Romanprojekte, und Llama 3.3 70B ist die Referenz ab 48 GB. Der Engpass ist meist die Struktur: Gliederung, Figurensteckbrief und kurze Kapitelzusammenfassungen halten ein langes Projekt konsistent.',
          },
          {
            q: 'Welches Ollama-Modell ist das beste für kreatives Schreiben?',
            a: 'Auf 24 GB `ollama run gemma4:31b` für Prosa oder `ollama run qwen3.8:27b` für lange Projekte. Auf 12 GB `gemma4:12b`, auf 16 GB `mistral-small:24b`, auf 8 GB `qwen3.5:9b`, ab 48 GB `llama3.3:70b`. Erhöhen Sie `num_ctx` für lange Szenen und schalten Sie Thinking für Fiktion aus.',
          },
          {
            q: 'Welche lokalen LLMs eignen sich zum Schreiben mit nur 8 GB VRAM?',
            a: 'Qwen3.5 9B (6,6–7,6 GB, 256K Kontext) ist ein aktuelles Modell der 8-GB-Klasse bei Ollama. Für das Modell ist kein Kreativwert veröffentlicht; führen Sie daher eigene Testszenen durch und rechnen Sie damit, dass kleinere Modelle lange Szenen weniger zuverlässig zusammenhalten als die 24-GB-Modelle.',
          },
          {
            q: 'Welches Open-Weight-Modell ist am besten für Poesie?',
            a: 'Kein Leaderboard bewertet Poesie getrennt, nutzen Sie daher die Rangliste nach Speicherstufe: Gemma 4 31B oder Qwen3.8-27B auf 24 GB, Gemma 4 12B auf 12 GB, Qwen3.5 9B auf 8 GB. Senken Sie für strenge Formen wie Sonette oder Haiku die Temperatur auf 0,7–0,85 und prüfen Sie Silben und Reime von Hand.',
          },
          {
            q: 'Welches Modell sollte ich in LM Studio für kreatives Schreiben laden?',
            a: 'Es gilt dieselbe Rangliste. LM Studio und Ollama führen beide quantisierte GGUF-Dateien aus, es gibt also kein eigenes LM-Studio-Modell: Suchen Sie im Modellbrowser von LM Studio nach dem Modellnamen und laden Sie den Build, der in Ihren Speicher passt.',
          },
          {
            q: 'Erinnert sich das Modell an frühere Teile meiner Geschichte?',
            a: 'Nur innerhalb seines Kontextfensters. Die Modelle in diesem Ratgeber bieten 32K bis 256K Token, doch längerer Kontext braucht mehr Speicher, und ein Modell vergisst alles außerhalb des Fensters. Beginnen Sie bei langen Projekten jede Sitzung mit einer kurzen Zusammenfassung der Geschichte und dem Figurensteckbrief.',
          },
          {
            q: 'Kann ein lokales LLM Claude oder ChatGPT für Fiktion ersetzen?',
            a: 'Nicht in den Leaderboards für kreatives Schreiben: In der EQ-Bench-Creative-Writing-v3-Liste über evals.report führen geschlossene Modelle (Claude Opus 4.7 mit 2206 Elo, GPT-5.5 mit 2035). Ein lokales 24-GB-Modell kann fürs Entwerfen dennoch genügen und hält Manuskripte auf Ihrem Rechner. Sampling-Einstellungen und ein guter System-Prompt schließen einen Teil der praktischen Lücke.',
          },
          {
            q: 'Fällt die Quantisierung beim kreativen Schreiben auf?',
            a: 'Das kann sein, weil Builds mit niedrigerer Bit-Zahl etwas Präzision verlieren. Eine Studie speziell zum kreativen Schreiben zitieren wir nicht. Die Standardbuilds von Ollama sind 4-Bit; wenn Sie Speicherreserve haben, vergleichen Sie einen Build mit höherer Bit-Zahl mit dem 4-Bit-Build an derselben Szene und behalten Sie den, der Ihnen besser gefällt.',
          },
          {
            q: 'Welche Temperatur sollte ich für kreatives Schreiben verwenden?',
            a: 'Als redaktioneller Startbereich: 0,9–1,1 für Prosa und 0,7–0,85 für knappe Dialoge oder strenge Gedichtformen. Herstellervorgaben sind ein solider Anker: Google nennt 1,0 (top-p 0,95, top-k 64) für Gemma 4, Alibaba nennt für Qwen3.8 1,0 im Thinking-Modus und 0,7 im Nicht-Thinking-Modus. Schalten Sie den Thinking-Modus für Fiktion aus.',
          },
          {
            q: 'Darf ich die Ausgaben lokaler LLMs kommerziell nutzen?',
            a: 'Das hängt von der Lizenz ab. Gemma 4, Qwen3.8, Mistral Small 3 und Hermes 4.3 sind unter Apache 2.0 aufgeführt, Llama 3.3 nutzt die eigene Meta Llama 3.3 Community License, und Fimbulvetr-11B steht unter CC BY-NC 4.0 (nicht kommerziell). Lesen Sie die Lizenz auf der Modellkarte des konkret genutzten Builds. Das ist keine Rechtsberatung.',
          },
          {
            q: 'Lohnen sich Fimbulvetr und Midnight-Rose noch?',
            a: 'Nur, wenn Ihnen ihr Stil besser gefällt. Fimbulvetr-11B-v2 ist ein Solar-basiertes Modell unter nicht kommerzieller Lizenz, und Midnight-Rose-70B ist ein Merge auf Basis von Llama 2 70B; beide sind älter als die 2026er Modelle in diesem Ratgeber, und für keines haben wir einen Creative-Writing-Benchmark-Wert gefunden.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ollama-Bibliothek: Gemma 4](https://ollama.com/library/gemma4) -- Tags, Download-Größen und Kontextfenster',
          '[Ollama-Bibliothek: Qwen3.8](https://ollama.com/library/qwen3.8) und [Qwen3.5](https://ollama.com/library/qwen3.5) -- Tags, Größen und Kontextfenster',
          '[Ollama-Bibliothek: Mistral Small](https://ollama.com/library/mistral-small) und [Llama 3.3](https://ollama.com/library/llama3.3) -- Tags, Größen, Kontext und Lizenzhinweise',
          '[Hugging Face: Modellkarte Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) und [Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- Lizenz, Kontextlänge, Sampling-Vorgaben',
          '[Hugging Face: Modellkarte Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) -- Lizenz, nativer Kontext, empfohlenes Sampling',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- Basismodell, Lizenz, RefusalBench-Werte, GGUF-Dateien',
          '[Hugging Face: Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) und [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- Basismodelle und Lizenzen',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) und [evals.report EQ-Bench-Werte](https://evals.report/benchmarks/eq-bench?tab=scores) -- Leaderboard-Werte (Datenstand 2026-11-15)',
          '[Featherless: beste offene Modelle für kreatives Schreiben](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- Gemma-4-EQ-Bench-Werte und Größen offener Modelle (vom 2026-09-17)',
          '[Ollama-Dokumentation: Thinking](https://docs.ollama.com/capabilities/thinking) -- der Parameter `think`',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei Auswahl und Einsatz lokaler Modelle zum Schreiben',
        items: [
          '**Auswahl nach einem allgemeinen Benchmark-Rang.** Coding- und Reasoning-Leaderboards sagen wenig über Prosa. Nutzen Sie Kreativ-Listen wie EQ-Bench und testen Sie dann an eigenen Szenen.',
          '**Sampling wie beim Coding.** Temperatur 0,2–0,4 führt tendenziell zu flacher Prosa; kreatives Schreiben braucht grob 0,9–1,1 (redaktioneller Bereich).',
          '**Thinking-Modus eingeschaltet lassen.** Planungsgetriebene Ausgabe kann konstruiert wirken. Schalten Sie ihn für Fiktion aus.',
          '**Kontextspeicher ignorieren.** Ein Modell mit 19–20 GB lässt auf einer 24-GB-Karte wenig Platz, sobald Sie das Kontextfenster vergrößern.',
          '**Dünne Prompts.** „Schreibe eine Geschichte“ liefert generische Ergebnisse; ergänzen Sie Erzählperspektive, Zeitform, Länge, Figurensteckbrief und eine ausdrückliche Vorgabe.',
          '**Im Chatfenster überarbeiten.** Erzeugen Sie im Chat und überarbeiten Sie im Texteditor; wer die Prosa selbst überarbeitet, behält seine Stimme.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) -- Gesamtranking über alle Einsatzzwecke',
          '[Wie viel VRAM brauchen lokale LLMs?](/de/local-llms/how-much-vram-local-llm) -- Speicherbedarf für jedes Modell und jede Quantisierung berechnen',
          '[Leitfaden: LLM-Fine-Tuning lokal](/de/local-llms/fine-tuning-local-llms-lora) -- Wie LoRA-Fine-Tuning auf Consumer-Hardware funktioniert',
          '[Ollama vs. LM Studio im Vergleich](/de/local-llms/ollama-vs-lm-studio) -- Welches Tool zu kreativen Workflows passt',
          '[Temperatur und Top-P erklärt](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- Kreative Ausgabe steuern',
          '[Beste lokale LLMs für kreatives Schreiben: erweiterter Ratgeber](/de/power-local-llm/best-local-llm-creative-writing) -- Frontends, Worldbuilding und Low-Refusal-Modelle nach VRAM-Stufe',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- Ablehnungsverhalten und Grenzen',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: 'Meilleurs LLM locaux pour l\'écriture créative en 2026 : fiction, poésie et textes longs selon votre VRAM',
    seoTitle: 'Meilleurs LLM locaux d\'écriture créative 2026 par VRAM',
    intro: 'Gemma 4 31B et Qwen3.8-27B sont les deux modèles locaux par lesquels commencer en écriture créative : tous deux tiennent sur un GPU de 24 Go. Ce guide classe des modèles à poids ouverts pour la fiction, la poésie et les textes longs par palier de mémoire (8, 12, 16, 24 et 48 Go), avec balises Ollama, licences et base du classement.',
    metaDescription: 'Meilleurs LLM locaux pour l\'écriture créative, histoires et poésie en 2026 : Gemma 4 31B et Qwen3.8-27B pour 24 Go, plus des choix pour 8 à 48 Go.',
    twitterDescription: 'Meilleurs LLM locaux pour l\'écriture créative en 2026 par VRAM : Gemma 4 31B, Qwen3.8-27B, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B. Licences et balises Ollama incluses.',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-fr.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**Gemma 4 31B et Qwen3.8-27B sont les deux LLM locaux pour débuter en écriture créative ; tous deux tiennent sur un GPU de 24 Go.** Gemma 4 31B est le choix prose, Qwen3.8-27B le choix projets longs. Les paliers inférieurs suivent. Classement éditorial, pas un test PromptQuorum.',
    audience: 'Débutants qui lancent leur premier LLM local sur du matériel grand public',
    dateModified: '2026-11-17',
    readTime: '9 min de lecture',
    educationalLevel: 'Débutant',
    primaryTerm: 'LLM local écriture créative',
    toc: [
      {
        label: 'Points clés',
        anchor: '#key-takeaways',
      },
      {
        label: 'Base du classement',
        anchor: '#ranking-basis',
      },
      {
        label: 'Meilleur modèle par palier de mémoire',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 Choix pour 8, 12 et 16 Go',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 Modèles communautaires et à faible refus',
        anchor: '#community-models',
      },
      {
        label: 'Local ou cloud',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Réglages et prompts',
        anchor: '#prompting-settings',
      },
      {
        label: 'Meilleurs modèles pour la poésie',
        anchor: '#poetry-writing',
      },
      {
        label: 'Mauvais prompt et bon prompt',
        anchor: '#prompt-examples',
      },
      {
        label: 'Erreurs courantes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Lectures complémentaires',
        anchor: '#related-reading',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Sources',
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
            text: 'Gemma 4 31B (prose) et Qwen3.8-27B (projets longs) sont les meilleurs points de départ locaux pour l\'écriture créative sur un GPU de 24 Go ; pour les autres paliers de mémoire, choisissez Qwen3.5 9B, Gemma 4 12B, Mistral Small 3 24B ou Llama 3.3 70B.',
          },
          {
            type: 'plain-terms',
            text: 'Choisissez le plus grand modèle qui tient dans votre mémoire avec de la marge pour le contexte. Sur une carte de 24 Go, c\'est Gemma 4 31B pour la prose ou Qwen3.8-27B pour les projets longs. L\'écriture créative n\'a pas de réponse unique : testez deux candidats sur vos propres scènes et gardez la voix que vous préférez.',
          },
        ],
        items: [
          '**Gemma 4 31B est le choix prose pour un GPU de 24 Go.** Environ 19–20 Go de poids, contexte de 256K, Apache 2.0, et le seul modèle de ce guide avec un score EQ-Bench Creative Writing v3 publié (selon Featherless : rubrique 16.01, Elo 1407.6).',
          '**Qwen3.8-27B est le choix pour les projets longs.** 18 Go sur Ollama, contexte de 256K, Apache 2.0. Sa fiche de modèle ne mentionne pas l\'écriture créative et aucun score créatif n\'est publié : testez sa voix sur vos propres scènes.',
          '**Choisissez d\'abord selon votre mémoire.** 8 Go : Qwen3.5 9B. 12 Go : Gemma 4 12B. 16 Go : Mistral Small 3 24B. 24 Go : Gemma 4 31B ou Qwen3.8-27B. 48 Go ou plus : Llama 3.3 70B.',
          '**Les anciens modèles communautaires ne sont plus le choix par défaut.** Fimbulvetr-11B (CC BY-NC 4.0, non commercial) et Midnight-Rose-70B (une fusion de Llama 2) sont antérieurs aux modèles ci-dessus ; ne les utilisez que si vous préférez leur voix.',
          '**Réglez l\'échantillonnage pour la prose, pas pour le code.** Commencez à une température de 0.9–1.1 (plage éditoriale ; Google indique 1.0 pour Gemma 4) et désactivez le mode de réflexion.',
          '**Les modèles cloud fermés dominent toujours les classements d\'écriture créative.** Dans la liste EQ-Bench Creative Writing v3 consultée via evals.report (données du 2026-11-15), Claude Opus 4.7 obtient 2206 Elo et la meilleure entrée à poids ouverts, Kimi K2.6, 1782. Les modèles locaux l\'emportent sur la confidentialité, le coût et le contrôle.',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: 'Base du classement (et ce qu\'il n\'est pas)',
        content: [
          '**Il s\'agit d\'un classement éditorial établi à partir de fiches de modèles, de la bibliothèque Ollama et de classements publics. PromptQuorum n\'a pas réalisé de nouveau test d\'écriture noté pour l\'établir.** L\'écriture créative n\'a pas de réponse unique : les benchmarks la mesurent imparfaitement et les classements divergent.',
        ],
        items: [
          '**Tailles et contexte :** relevés sur les pages de la bibliothèque Ollama pour [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.5](https://ollama.com/library/qwen3.5), [Mistral Small](https://ollama.com/library/mistral-small) et [Llama 3.3](https://ollama.com/library/llama3.3). Les tailles sont celles de téléchargement des versions 4 bits par défaut ; la mémoire de contexte s\'ajoute.',
          '**Licences et réglages d\'échantillonnage :** relevés sur les fiches de modèles Hugging Face citées dans les Sources.',
          '**Scores d\'écriture créative :** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html), un benchmark évalué par un LLM. Les chiffres de Gemma 4 proviennent d\'un [article de Featherless](https://featherless.ai/blog/best-ai-for-creative-writing-2026) daté du 2026-09-17 ; Qwen3.8-27B n\'a pas de score publié. Les scores de différents trackers ne sont pas directement comparables : comparez uniquement au sein d\'une même liste.',
          '**Les mentions « idéal pour »** sont des recommandations éditoriales fondées sur ces sources, pas des résultats mesurés.',
          '**Testez chaque choix vous-même avec quatre prompts :** poursuivre une scène sur 500 mots (ton et voix), écrire un paragraphe dans le style d\'un auteur nommé (le style change-t-il ?), écrire une histoire de 1,000 mots avec une chute (mise en place et dénouement) et écrire un dialogue à deux personnages (les voix sont-elles distinctes ?).',
          'Pour approfondir les interfaces, la construction de mondes et les modèles à faible refus, voir le [guide complet de l\'écriture créative](/fr/power-local-llm/best-local-llm-creative-writing).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Considérez chaque choix comme une hypothèse de départ : passez les mêmes trois scènes dans deux candidats et gardez celui dont la voix vous convient le mieux.',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: 'Meilleur LLM local pour l\'écriture créative par palier de mémoire',
        content: [
          '**Choisissez d\'abord selon la mémoire : le modèle doit tenir avec de la marge pour le contexte.** Les tailles sont celles de téléchargement sur Ollama avec la quantification 4 bits par défaut ; la mémoire de contexte (cache KV) s\'ajoute, environ 2–6 Go pour les scènes longues (estimation).',
        ],
        columns: [
          'Votre mémoire',
          'Modèle (balise Ollama)',
          'Poids',
          'Contexte',
        ],
        rows: [
          {
            'Votre mémoire': 'GPU 8 Go',
            'Modèle (balise Ollama)': 'Qwen3.5 9B (qwen3.5:9b)',
            Poids: '6.6–7.6 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 12 Go',
            'Modèle (balise Ollama)': 'Gemma 4 12B (gemma4:12b)',
            Poids: '7.7–8.0 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 16 Go',
            'Modèle (balise Ollama)': 'Mistral Small 3 24B (mistral-small:24b)',
            Poids: '14 Go',
            Contexte: '32K',
          },
          {
            'Votre mémoire': 'GPU 24 Go / Mac 32 Go',
            'Modèle (balise Ollama)': 'Gemma 4 31B (gemma4:31b)',
            Poids: '19–20 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 24 Go / Mac 32 Go',
            'Modèle (balise Ollama)': 'Qwen3.8-27B (qwen3.8:27b)',
            Poids: '18 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 24 Go, plus rapide',
            'Modèle (balise Ollama)': 'Gemma 4 26B A4B (gemma4:26b)',
            Poids: '16–19 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 48 Go / Mac 64 Go',
            'Modèle (balise Ollama)': 'Llama 3.3 70B (llama3.3:70b)',
            Poids: '43 Go',
            Contexte: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sur un Mac, la mémoire unifiée est partagée avec macOS. Sur un Mac de 32 Go, comptez environ 24 Go utilisables pour le modèle et le contexte : c\'est suffisant pour Gemma 4 31B ou Qwen3.8-27B, mais il reste peu de Go pour le contexte.',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B : le choix prose pour un GPU de 24 Go',
        content: [
          '**Gemma 4 31B est notre premier choix pour la prose sur un GPU de 24 Go ou un Mac de 32 Go.** C\'est un modèle dense de 30.7B paramètres (19–20 Go sur Ollama) avec un contexte de 256K sous Apache 2.0, et le seul modèle de ce guide avec un résultat EQ-Bench Creative Writing v3 publié : rubrique 16.01, Elo 1407.6, selon Featherless.',
          'La fiche de modèle de Google cite la génération de texte, comme les poèmes et les scénarios, parmi les usages prévus et recommande une température de 1.0, top-p 0.95, top-k 64. Avec 19–20 Go, il reste peu de place pour le contexte sur une carte de 24 Go : gardez une fenêtre de contexte modérée ou choisissez Gemma 4 26B A4B (16–19 Go), un modèle à mélange d\'experts qui active environ 4B paramètres par token et a obtenu 1286.9 Elo dans la même liste Featherless.',
        ],
        columns: [
          'Caractéristique',
          'Valeur',
        ],
        rows: [
          {
            'Caractéristique': 'Idéal pour',
            Valeur: 'Prose sur un GPU de 24 Go',
          },
          {
            'Caractéristique': 'Poids (Ollama)',
            Valeur: '19–20 Go',
          },
          {
            'Caractéristique': 'Contexte',
            Valeur: '256K tokens',
          },
          {
            'Caractéristique': 'Licence',
            Valeur: 'Apache 2.0',
          },
          {
            'Caractéristique': 'Commande Ollama',
            Valeur: 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B : le choix projets longs sur le même matériel',
        content: [
          '**Qwen3.8-27B est le choix pour les projets longs sur un GPU de 24 Go.** C\'est un modèle dense de 27B à 18 Go sur Ollama, avec 262,144 tokens de contexte natif (extensible à 1,000,000 de tokens selon la fiche de modèle) sous Apache 2.0.',
          'Alibaba le positionne pour le code, les agents et la recherche ; la fiche de modèle ne mentionne pas l\'écriture créative et aucun score créatif n\'est publié : considérez sa prose comme non vérifiée. Le mode de réflexion est actif par défaut ; désactivez-le pour la fiction.',
        ],
        columns: [
          'Caractéristique',
          'Valeur',
        ],
        rows: [
          {
            'Caractéristique': 'Idéal pour',
            Valeur: 'Projets de roman, consignes',
          },
          {
            'Caractéristique': 'Poids (Ollama)',
            Valeur: '18 Go',
          },
          {
            'Caractéristique': 'Contexte',
            Valeur: '256K tokens',
          },
          {
            'Caractéristique': 'Licence',
            Valeur: 'Apache 2.0',
          },
          {
            'Caractéristique': 'Commande Ollama',
            Valeur: 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 Choix pour 8, 12 et 16 Go',
        content: [
          '**En dessous de 24 Go, le choix est plus restreint et moins éprouvé : testez avant de vous engager.** Les petits modèles gardent généralement moins bien la cohérence des scènes longues que les grands.',
        ],
        items: [
          '**8 Go : Qwen3.5 9B** (`qwen3.5:9b`, 6.6–7.6 Go, contexte de 256K). Un modèle récent de la classe 8 Go sur Ollama. Aucun score créatif n\'est publié : essayez vos propres scènes.',
          '**12 Go : Gemma 4 12B** (`gemma4:12b`, 7.7–8.0 Go, contexte de 256K, Apache 2.0). Featherless indique une rubrique de 15.71 et 1270.4 Elo sur EQ-Bench Creative Writing v3.',
          '**16 Go : Mistral Small 3 24B** (`mistral-small:24b`, 14 Go, contexte de 32K, Apache 2.0). Un modèle plus ancien qui reste dans la liste parce que peu de modèles plus récents tiennent en 16 Go. Il ne laisse qu\'environ 2 Go pour le contexte : gardez des prompts courts.',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B : modèle de référence à partir de 48 Go',
        content: [
          '**Llama 3.3 70B (`llama3.3:70b`, 43 Go, contexte de 128K) est le plus grand modèle de ce guide et demande une configuration GPU de 48 Go ou un Mac avec 64 Go de mémoire unifiée.** Meta l\'a publié en décembre 2024 sous la Meta Llama 3.3 Community License, une licence propre et non une licence open source approuvée par l\'OSI.',
          'Les versions précédentes de cette page le plaçaient en tête pour la prose. Ce n\'est plus le cas : aucun score créatif le concernant n\'apparaît dans les listes que nous avons lues, alors que des modèles plus récents qui tiennent en 24 Go en ont un, et les versions récentes de Llama obtiennent de faibles scores sur EQ-Bench (Llama 4 Maverick 927, Llama 4 Scout 883 dans la liste evals.report). Gardez-le si vous avez la mémoire et aimez sa voix.',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 Modèles communautaires et à faible refus',
        content: [
          '**Les modèles de fiction communautaires sont désormais une deuxième couche, pas le choix par défaut.** Vérifiez la licence de chaque modèle avant un usage commercial.',
        ],
        items: [
          '**Hermes 4.3 36B** (Nous Research, Apache 2.0) : basé sur ByteDance Seed-OSS-36B-Base, avec des fichiers GGUF de 4 à 8 bits sur Hugging Face. Nous indique qu\'il a répondu à 74.60 % (sans raisonnement) et 72.29 % (avec raisonnement) des prompts de son propre RefusalBench (donnée du développeur ; plus c\'est élevé, moins il y a de refus). Utilisez-le lorsqu\'un modèle instruct refuse une scène de fiction légitime, et relevez la température au-dessus des 0.6 de la fiche pour la prose.',
          '**Fimbulvetr-11B-v2** (Sao10K) : un modèle basé sur Solar sous licence CC BY-NC 4.0, donc réservé à un usage non commercial. La fiche recommande des préréglages SillyTavern. Nous n\'avons trouvé aucun score de benchmark d\'écriture créative pour ce modèle.',
          '**Midnight-Rose-70B** (sophosympatheia) : une fusion basée sur Llama 2 70B, sous la licence Llama 2 avec des restrictions héritées ; la fiche conseille environ 6144 tokens de contexte. Ce n\'est pas un modèle Llama 3.3.',
          'Si une conversion GGUF existe pour un ancien modèle, vous pouvez la charger dans LM Studio ou via `ollama run hf.co/<user>/<repo>` ; vérifiez d\'abord la licence de ce dépôt précis.',
          'Sur le comportement de refus, l\'éthique et les limites, voir [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics). L\'hébergement local ne change pas la loi, et l\'auteur reste responsable de ce qu\'il publie.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Modèles locaux ou modèles cloud pour écrire',
        content: [
          '**Les modèles cloud fermés obtiennent de meilleurs scores dans les classements d\'écriture créative ; les modèles locaux l\'emportent sur la confidentialité, le coût et le contrôle.**',
        ],
        items: [
          'Dans la liste EQ-Bench Creative Writing v3 consultée via [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) (données du 2026-11-15), Claude Opus 4.7 mène avec 2206 Elo, suivi de GPT-5.5 avec 2035.',
          'La meilleure entrée à poids ouverts de cette liste est Kimi K2.6 avec 1782 Elo. Featherless indique pour les modèles ouverts qu\'il recommande à ce niveau 753B (GLM-5.3), 763B (DeepSeek-V4.1-Flash) et 2.8T (Kimi K3) paramètres, très au-delà des paliers de 8 à 48 Go de ce guide.',
          '**Quand le local s\'impose :** manuscrits inédits, travaux clients sous NDA, travail hors ligne et projets où le coût par token compte.',
          '**Flux hybride :** rédigez et faites du brainstorming en local ; n\'utilisez un modèle cloud que pour le polissage de textes non sensibles, après avoir vérifié les conditions de traitement des données du fournisseur.',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: 'Réglages et prompts qui améliorent l\'écriture créative avec un LLM local',
        content: [
          'Cinq habitudes changent davantage le résultat que le changement de modèle.',
        ],
        numberedItems: [
          '**Réglez l\'échantillonnage pour la prose, pas pour le code.** Valeurs des éditeurs : Gemma 4 température 1.0, top-p 0.95, top-k 64 ; Qwen3.8 1.0 / 0.95 / top-k 20 en mode de réflexion et 0.7 / 0.8 / top-k 20 hors réflexion ; Hermes 4.3 0.6 / 0.95 / top-k 20. Comme plage éditoriale de départ, essayez une température de 0.9–1.1 pour la prose et 0.7–0.85 pour les dialogues serrés.',
          '**Désactivez le mode de réflexion pour la fiction.** Les modèles de raisonnement planifient avant d\'écrire, ce qui peut donner des scènes d\'allure construite. Qwen3.8 réfléchit par défaut ; dans l\'API Ollama, mettez `think` à `false`, ou utilisez le commutateur de réflexion de votre interface.',
          '**Nommez le style de façon concrète.** « Écris à la deuxième personne, au présent, phrases courtes, sans adverbes » fonctionne mieux que « écris de la fiction littéraire ». Citer un auteur donne une indication de style ; ne publiez pas de textes qui reproduisent la formulation d\'un auteur vivant.',
          '**Utilisez un prompt système persistant** avec point de vue, temps, genre, fiche de personnage et échantillons de voix, et recollez-le au début de chaque session.',
          '**Travaillez par sections et agrandissez la fenêtre de contexte.** Générez environ 500 mots à la fois et rappelez un court résumé de l\'histoire à chaque nouvelle session, car un modèle ne voit que ce qui tient dans son contexte. Le contexte par défaut d\'Ollama est limité ; dans une session interactive, tapez `/set parameter num_ctx 16384`. Des valeurs plus grandes consomment plus de mémoire.',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: 'Meilleurs modèles à poids ouverts pour la poésie',
        content: [
          '**Aucun classement ne note la poésie séparément ; le choix pour la poésie suit donc le classement par palier de mémoire.** Pour les formes strictes (sonnets, haïkus, villanelles), abaissez la température à 0.7–0.85 (plage éditoriale), car les températures élevées tendent à casser la métrique et la rime ; pour le vers libre, la plage de la prose s\'applique.',
        ],
        items: [
          '**24 Go :** Gemma 4 31B ou Qwen3.8-27B. Soumettez le même court poème aux deux et gardez la voix que vous préférez.',
          '**Paliers inférieurs :** Gemma 4 12B (12 Go) ou Qwen3.5 9B (8 Go).',
          '**Formes strictes :** les modèles travaillent avec des tokens et non des syllabes ; comptez donc les syllabes et vérifiez les rimes à la main.',
          '**Indiquez la forme explicitement :** « Écris un haïku (5-7-5 syllabes) sur la pluie d\'automne » ou « Écris un sonnet shakespearien (ABAB CDCD EFEF GG, pentamètre iambique) sur la perte ». Des prompts vagues comme « écris un poème sur l\'amour » donnent un vers libre générique.',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: 'Mauvais prompt et bon prompt',
        items: [
          '❌ « Écris une histoire de fantasy » → ✅ « Écris une scène de fantasy de 500 mots où un contrebandier négocie avec un dragon des artefacts anciens. Utilise des détails sensoriels et garde le dialogue tendu. »',
          '❌ « Écris quelque chose d\'intéressant » → ✅ « Écris une scène d\'ouverture de 300 mots sur un braquage qui tourne mal. Le protagoniste découvre en pleine mission que son partenaire l\'a trahi. Utilise des phrases courtes et percutantes pour suivre le rythme. »',
          '❌ « Écris une enquête » → ✅ « Poursuis cette scène de détective : [texte précédent]. La détective comprend, grâce à un détail, que le suspect ment. Montre, ne dis pas, comment elle repère l\'incohérence. »',
          '❌ « Rends-le plus intéressant » → ✅ « Réécris le paragraphe précédent en fiction noire : dialogue sec, monologue intérieur cynique, détails sensoriels précis (sons, odeurs, textures). »',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quel est le meilleur LLM local pour l\'écriture créative ?',
            a: 'Gemma 4 31B et Qwen3.8-27B sont les meilleurs points de départ locaux de ce classement, et tous deux tiennent sur un GPU de 24 Go (19–20 Go et 18 Go de poids). Gemma 4 31B est le choix prose car il a un score EQ-Bench Creative Writing v3 publié ; Qwen3.8-27B est le choix pour les projets longs. Sur des cartes plus petites, utilisez Gemma 4 12B (12 Go) ou Mistral Small 3 24B (16 Go). Le classement est éditorial : testez deux candidats sur vos propres scènes.',
          },
          {
            q: 'Quel est le meilleur LLM local pour écrire des histoires et des romans ?',
            a: 'Choisissez le plus grand modèle qui tient dans votre mémoire avec de la marge pour le contexte. Gemma 4 31B convient à la prose sur 24 Go, Qwen3.8-27B aux projets de roman grâce à son contexte de 256K, et Llama 3.3 70B est la référence à partir de 48 Go. Le goulot d\'étranglement est souvent la structure : un plan, une fiche de personnages et de courts résumés de chapitres maintiennent la cohérence d\'un long projet.',
          },
          {
            q: 'Quel modèle Ollama est le meilleur pour l\'écriture créative ?',
            a: 'Sur 24 Go, `ollama run gemma4:31b` pour la prose ou `ollama run qwen3.8:27b` pour les projets longs. Sur 12 Go, `gemma4:12b` ; sur 16 Go, `mistral-small:24b` ; sur 8 Go, `qwen3.5:9b` ; à partir de 48 Go, `llama3.3:70b`. Augmentez `num_ctx` pour les scènes longues et désactivez la réflexion pour la fiction.',
          },
          {
            q: 'Quels LLM locaux conviennent le mieux pour écrire avec seulement 8 Go de VRAM ?',
            a: 'Qwen3.5 9B (6.6–7.6 Go, contexte de 256K) est un modèle récent de la classe 8 Go sur Ollama. Aucun score créatif n\'est publié : faites vos propres scènes de test, et attendez-vous à ce que les petits modèles tiennent moins bien les scènes longues que les modèles de 24 Go.',
          },
          {
            q: 'Quel modèle à poids ouverts est le meilleur pour la poésie ?',
            a: 'Aucun classement ne note la poésie séparément ; suivez donc le classement par palier de mémoire : Gemma 4 31B ou Qwen3.8-27B sur 24 Go, Gemma 4 12B sur 12 Go, Qwen3.5 9B sur 8 Go. Pour les formes strictes comme les sonnets ou les haïkus, abaissez la température à 0.7–0.85 et vérifiez syllabes et rimes à la main.',
          },
          {
            q: 'Quel modèle charger dans LM Studio pour l\'écriture créative ?',
            a: 'Le même classement s\'applique. LM Studio et Ollama exécutent tous deux des fichiers GGUF quantifiés ; il n\'existe donc pas de modèle propre à LM Studio : cherchez le nom du modèle dans le navigateur de modèles de LM Studio et chargez la version qui tient dans votre mémoire.',
          },
          {
            q: 'Le modèle se souvient-il des parties précédentes de mon histoire ?',
            a: 'Uniquement dans sa fenêtre de contexte. Les modèles de ce guide offrent de 32K à 256K tokens, mais un contexte plus long consomme plus de mémoire, et le modèle oublie tout ce qui sort de la fenêtre. Pour les longs projets, commencez chaque session par un court résumé de l\'histoire et la fiche de personnages.',
          },
          {
            q: 'Un LLM local peut-il remplacer Claude ou ChatGPT pour la fiction ?',
            a: 'Pas dans les classements d\'écriture créative : dans la liste EQ-Bench Creative Writing v3 consultée via evals.report, les modèles fermés dominent (Claude Opus 4.7 à 2206 Elo, GPT-5.5 à 2035). Un modèle local de 24 Go peut suffire pour rédiger des premiers jets et garde vos manuscrits sur votre machine. Les réglages d\'échantillonnage et un bon prompt système comblent une partie de l\'écart pratique.',
          },
          {
            q: 'La quantification se remarque-t-elle en écriture créative ?',
            a: 'Cela peut arriver, car les versions à moins de bits perdent un peu de précision. Nous ne citons aucune étude sur l\'écriture créative à ce sujet. Les versions par défaut d\'Ollama sont en 4 bits ; si vous avez de la marge de mémoire, comparez une version à plus de bits avec la version 4 bits sur la même scène et gardez celle que vous préférez.',
          },
          {
            q: 'Quelle température utiliser pour l\'écriture créative ?',
            a: 'Comme plage éditoriale de départ, 0.9–1.1 pour la prose et 0.7–0.85 pour les dialogues serrés ou les formes poétiques strictes. Les valeurs des éditeurs sont un bon repère : Google indique 1.0 (top-p 0.95, top-k 64) pour Gemma 4, et Alibaba indique 1.0 en mode de réflexion et 0.7 hors réflexion pour Qwen3.8. Désactivez le mode de réflexion pour la fiction.',
          },
          {
            q: 'Puis-je utiliser les textes d\'un LLM local dans un cadre commercial ?',
            a: 'Cela dépend de la licence. Gemma 4, Qwen3.8, Mistral Small 3 et Hermes 4.3 sont indiqués sous Apache 2.0, Llama 3.3 utilise la Meta Llama 3.3 Community License propre à Meta, et Fimbulvetr-11B est sous CC BY-NC 4.0 (non commercial). Lisez la licence sur la fiche du modèle précis que vous utilisez. Ceci ne constitue pas un conseil juridique.',
          },
          {
            q: 'Fimbulvetr et Midnight-Rose valent-ils encore le coup ?',
            a: 'Seulement si vous préférez leur voix. Fimbulvetr-11B-v2 est un modèle basé sur Solar sous licence non commerciale, et Midnight-Rose-70B est une fusion basée sur Llama 2 70B ; tous deux sont antérieurs aux modèles de 2026 de ce guide, et nous n\'avons trouvé de score de benchmark d\'écriture créative pour aucun des deux.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Bibliothèque Ollama : Gemma 4](https://ollama.com/library/gemma4) -- balises, tailles de téléchargement et fenêtres de contexte',
          '[Bibliothèque Ollama : Qwen3.8](https://ollama.com/library/qwen3.8) et [Qwen3.5](https://ollama.com/library/qwen3.5) -- balises, tailles et fenêtres de contexte',
          '[Bibliothèque Ollama : Mistral Small](https://ollama.com/library/mistral-small) et [Llama 3.3](https://ollama.com/library/llama3.3) -- balises, tailles, contexte et notes de licence',
          '[Hugging Face : fiche de Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) et [Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- licence, longueur de contexte, réglages d\'échantillonnage',
          '[Hugging Face : fiche de Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) -- licence, contexte natif, échantillonnage recommandé',
          '[Hugging Face : Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- modèle de base, licence, chiffres RefusalBench, fichiers GGUF',
          '[Hugging Face : Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) et [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- modèles de base et licences',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) et [scores EQ-Bench sur evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) -- chiffres du classement (données du 2026-11-15)',
          '[Featherless : meilleurs modèles ouverts pour l\'écriture créative](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- chiffres EQ-Bench de Gemma 4 et tailles de modèles ouverts (du 2026-09-17)',
          '[Documentation Ollama : thinking](https://docs.ollama.com/capabilities/thinking) -- le paramètre `think`',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes dans le choix et l\'usage des modèles locaux pour écrire',
        items: [
          '**Choisir selon un rang de benchmark général.** Les classements de code et de raisonnement disent peu de la prose. Consultez des listes créatives comme EQ-Bench, puis testez sur vos propres scènes.',
          '**Utiliser un échantillonnage de code.** Une température de 0.2–0.4 tend à produire une prose plate ; l\'écriture créative demande environ 0.9–1.1 (plage éditoriale).',
          '**Laisser le mode de réflexion actif.** Une sortie axée sur la planification peut sembler construite. Désactivez-le pour la fiction.',
          '**Ignorer la mémoire de contexte.** Un modèle de 19–20 Go laisse peu de marge sur une carte de 24 Go dès que vous agrandissez la fenêtre de contexte.',
          '**Des prompts trop minces.** « Écris une histoire » donne un résultat générique ; ajoutez point de vue, temps, longueur, fiche de personnage et une contrainte explicite.',
          '**Éditer dans la fenêtre de chat.** Générez dans le chat, révisez dans un éditeur de texte ; réviser la prose vous-même garde la voix la vôtre.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) -- Classement général tous usages',
          '[De combien de VRAM les LLM locaux ont-ils besoin ?](/fr/local-llms/how-much-vram-local-llm) -- Calculer la mémoire requise pour tout modèle et toute quantification',
          '[Guide du fine-tuning de LLM local](/fr/local-llms/fine-tuning-local-llms-lora) -- Comment fonctionne le fine-tuning LoRA sur du matériel grand public',
          '[Ollama ou LM Studio](/fr/local-llms/ollama-vs-lm-studio) -- Quel outil convient aux usages créatifs',
          '[Température et Top-P expliqués](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- Contrôler la sortie créative',
          '[Meilleurs LLM locaux pour l\'écriture créative : guide complet](/fr/power-local-llm/best-local-llm-creative-writing) -- Interfaces, construction de mondes et modèles à faible refus par palier de VRAM',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- Comportement de refus et limites',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: '2026年版 創作・小説向けローカルLLMのおすすめ: フィクション、詩、長編をVRAM別に紹介',
    seoTitle: '創作向けローカルLLM 2026年版: VRAM別おすすめ',
    intro: '創作文章でまず試したいローカルモデルは Gemma 4 31B と Qwen3.8-27B です。どちらも24 GBのGPU 1枚に収まります。このガイドでは、フィクション、詩、長編向けのオープンウェイトモデルをメモリ帯（8、12、16、24、48 GB）別に整理し、Ollamaのタグ、ライセンス、順位の根拠を示します。',
    metaDescription: '2026年の創作・小説・詩向けローカルLLMを紹介。24 GBなら Gemma 4 31B と Qwen3.8-27B、8・12・16・48 GB向けの候補とOllamaタグもまとめました。',
    twitterDescription: '2026年の創作向けローカルLLMをVRAM別に紹介: Gemma 4 31B、Qwen3.8-27B、Gemma 4 12B、Mistral Small 3 24B、Llama 3.3 70B。ライセンスとOllamaタグ付き。',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-ja.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**創作で最初に試すローカルLLMは Gemma 4 31B と Qwen3.8-27B で、どちらも24 GBのGPU 1枚に収まります。** 散文は Gemma 4 31B、長編は Qwen3.8-27B です。8、12、16 GBでは Qwen3.5 9B、Gemma 4 12B、Mistral Small 3 24B を選びます。編集部の順位で、PromptQuorumの検証結果ではありません。',
    audience: '一般向けハードウェアで初めてローカルLLMを動かす初心者',
    dateModified: '2026-11-17',
    readTime: '9分読',
    educationalLevel: '初心者',
    primaryTerm: 'ローカルLLM創作',
    toc: [
      {
        label: '重要ポイント',
        anchor: '#key-takeaways',
      },
      {
        label: '順位の根拠',
        anchor: '#ranking-basis',
      },
      {
        label: 'メモリ帯別のおすすめモデル',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 8・12・16 GB向けの候補',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 コミュニティモデルと低拒否モデル',
        anchor: '#community-models',
      },
      {
        label: 'ローカルとクラウドの比較',
        anchor: '#cloud-vs-local',
      },
      {
        label: '設定とプロンプト',
        anchor: '#prompting-settings',
      },
      {
        label: '詩に向くモデル',
        anchor: '#poetry-writing',
      },
      {
        label: '悪いプロンプトと良いプロンプト',
        anchor: '#prompt-examples',
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
        label: 'よくある質問',
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
            text: '24 GBのGPUで創作を始めるなら、散文は Gemma 4 31B、長編は Qwen3.8-27B が出発点です。ほかのメモリ帯では Qwen3.5 9B、Gemma 4 12B、Mistral Small 3 24B、Llama 3.3 70B を使います。',
          },
          {
            type: 'plain-terms',
            text: 'コンテキスト用の余裕を残して、メモリに収まる最大のモデルを選びます。24 GBのカードなら、散文は Gemma 4 31B、長編は Qwen3.8-27B です。創作に唯一の正解はないため、2つの候補を自分の場面で試し、声が好みに合う方を残してください。',
          },
        ],
        items: [
          '**Gemma 4 31B は24 GB GPUの散文向けです。** 重みは約19〜20 GB、256Kコンテキスト、Apache 2.0。このガイドで EQ-Bench Creative Writing v3 のスコアが公開されている唯一のモデルです（Featherless報告: ルーブリック16.01、Elo 1407.6）。',
          '**Qwen3.8-27B は長編プロジェクト向けです。** Ollamaで18 GB、256Kコンテキスト、Apache 2.0。モデルカードに創作の記載はなく、創作スコアも公開されていないため、自分の場面で文体を確認してください。',
          '**まずメモリで選びます。** 8 GB: Qwen3.5 9B。12 GB: Gemma 4 12B。16 GB: Mistral Small 3 24B。24 GB: Gemma 4 31B または Qwen3.8-27B。48 GB以上: Llama 3.3 70B。',
          '**古いコミュニティモデルは既定の選択ではなくなりました。** Fimbulvetr-11B（CC BY-NC 4.0、非商用）と Midnight-Rose-70B（Llama 2のマージ）は上記モデルより前のものです。文体が好みの場合のみ使います。',
          '**サンプリングはコード用ではなく散文用にします。** 温度は0.9〜1.1から始め（編集部の目安。GoogleはGemma 4で1.0を示しています）、思考モードはオフにします。',
          '**クローズドなクラウドモデルが創作リーダーボードの上位です。** evals.report経由で見たEQ-Bench Creative Writing v3の一覧（データ基準日2026-11-15）では、Claude Opus 4.7が2206 Elo、オープンウェイト最上位のKimi K2.6が1782です。ローカルモデルの強みはプライバシー、コスト、制御です。',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: '順位の根拠（と、根拠ではないもの）',
        content: [
          '**この順位は、モデルカード、Ollamaライブラリ、公開リーダーボードをもとにした編集部のまとめです。PromptQuorumが新たに採点付きの執筆テストを実施したわけではありません。** 創作に唯一の正解はなく、ベンチマークでは測りきれず、リーダーボード同士も食い違います。',
        ],
        items: [
          '**サイズとコンテキスト:** Ollamaライブラリの [Gemma 4](https://ollama.com/library/gemma4)、[Qwen3.8](https://ollama.com/library/qwen3.8)、[Qwen3.5](https://ollama.com/library/qwen3.5)、[Mistral Small](https://ollama.com/library/mistral-small)、[Llama 3.3](https://ollama.com/library/llama3.3) のページから読み取りました。サイズは既定の4ビット版のダウンロードサイズで、コンテキスト用メモリは別に必要です。',
          '**ライセンスとサンプリング既定値:** 出典欄に挙げたHugging Faceのモデルカードから読み取りました。',
          '**創作スコア:** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) はLLMが採点するベンチマークです。Gemma 4の数値は2026-09-17付の [Featherlessの記事](https://featherless.ai/blog/best-ai-for-creative-writing-2026) によるもので、Qwen3.8-27Bのスコアは公開されていません。異なる集計元のスコアは直接比較できないため、同じ一覧の中だけで比べてください。',
          '**「向いている用途」** は、これらの出典に基づく編集部の推奨であり、実測結果ではありません。',
          '**4つのプロンプトで自分でも試してください:** 場面を500語続ける（トーンと声）、指定した作家の文体で1段落書く（文体が変わるか）、どんでん返しのある1,000語の短編を書く（伏線と回収）、2人の会話を書く（声が区別できるか）。',
          'フロントエンド、世界観づくり、低拒否モデルについては [創作文章の詳細ガイド](/ja/power-local-llm/best-local-llm-creative-writing) をご覧ください。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'どの推奨も出発点の仮説として扱ってください。同じ3つの場面を2つの候補に書かせ、声が好みに合う方を残します。',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: 'メモリ帯別の創作向けローカルLLM',
        content: [
          '**まずメモリで選びます。コンテキスト用の余裕を残してモデルが収まる必要があります。** サイズは既定の4ビット量子化でのOllamaのダウンロードサイズです。コンテキスト用メモリ（KVキャッシュ）は別で、長い場面では約2〜6 GBです（推定）。',
        ],
        columns: [
          'メモリ',
          'モデル（Ollamaタグ）',
          '重み',
          'コンテキスト',
        ],
        rows: [
          {
            'メモリ': '8 GB GPU',
            'モデル（Ollamaタグ）': 'Qwen3.5 9B (qwen3.5:9b)',
            '重み': '6.6〜7.6 GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '12 GB GPU',
            'モデル（Ollamaタグ）': 'Gemma 4 12B (gemma4:12b)',
            '重み': '7.7〜8.0 GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '16 GB GPU',
            'モデル（Ollamaタグ）': 'Mistral Small 3 24B (mistral-small:24b)',
            '重み': '14 GB',
            'コンテキスト': '32K',
          },
          {
            'メモリ': '24 GB GPU / 32 GB Mac',
            'モデル（Ollamaタグ）': 'Gemma 4 31B (gemma4:31b)',
            '重み': '19〜20 GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '24 GB GPU / 32 GB Mac',
            'モデル（Ollamaタグ）': 'Qwen3.8-27B (qwen3.8:27b)',
            '重み': '18 GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '24 GB GPU、速度重視',
            'モデル（Ollamaタグ）': 'Gemma 4 26B A4B (gemma4:26b)',
            '重み': '16〜19 GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '48 GB GPU / 64 GB Mac',
            'モデル（Ollamaタグ）': 'Llama 3.3 70B (llama3.3:70b)',
            '重み': '43 GB',
            'コンテキスト': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'MacではユニファイドメモリをmacOSと共有します。32 GBのMacでは、モデルとコンテキストに使えるのは約24 GBと見てください。Gemma 4 31B または Qwen3.8-27B は収まりますが、コンテキスト用には数GBしか残りません。',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B: 24 GB GPUの散文向け',
        content: [
          '**Gemma 4 31B は、24 GBのGPUまたは32 GBのMacでの散文向けの第一候補です。** 30.7Bパラメータの密モデル（Ollamaで19〜20 GB）で、256KコンテキストをApache 2.0で使えます。このガイドで EQ-Bench Creative Writing v3 の結果が公開されている唯一のモデルです（Featherless報告: ルーブリック16.01、Elo 1407.6）。',
          'Googleのモデルカードは、詩や脚本などのテキスト生成を想定用途として挙げ、温度1.0、top-p 0.95、top-k 64を推奨しています。19〜20 GBでは24 GBのカードにコンテキスト用の余裕がほとんど残らないため、コンテキストウィンドウは控えめにするか、Gemma 4 26B A4B（16〜19 GB）を選んでください。これはトークンごとに約4Bパラメータを有効にするMixture-of-Expertsモデルで、同じFeatherlessの一覧で1286.9 Eloでした。',
        ],
        columns: [
          '項目',
          '内容',
        ],
        rows: [
          {
            '項目': '向いている用途',
            '内容': '24 GB GPUでの散文',
          },
          {
            '項目': '重み（Ollama）',
            '内容': '19〜20 GB',
          },
          {
            '項目': 'コンテキスト',
            '内容': '256Kトークン',
          },
          {
            '項目': 'ライセンス',
            '内容': 'Apache 2.0',
          },
          {
            '項目': 'Ollamaコマンド',
            '内容': 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B: 同じハードウェアでの長編向け',
        content: [
          '**Qwen3.8-27B は、24 GBのGPUでの長編プロジェクト向けです。** 27Bの密モデルでOllamaでは18 GB、ネイティブで262,144トークンのコンテキスト（モデルカードによると1,000,000トークンまで拡張可能）をApache 2.0で使えます。',
          'Alibabaはコーディング、エージェント、リサーチ向けとして位置づけており、モデルカードに創作の記載はなく、創作スコアも公開されていません。散文の質は未確認として扱ってください。思考モードは既定でオンなので、フィクションではオフにします。',
        ],
        columns: [
          '項目',
          '内容',
        ],
        rows: [
          {
            '項目': '向いている用途',
            '内容': '長編小説、指示への追従',
          },
          {
            '項目': '重み（Ollama）',
            '内容': '18 GB',
          },
          {
            '項目': 'コンテキスト',
            '内容': '256Kトークン',
          },
          {
            '項目': 'ライセンス',
            '内容': 'Apache 2.0',
          },
          {
            '項目': 'Ollamaコマンド',
            '内容': 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 8・12・16 GB向けの候補',
        content: [
          '**24 GB未満では選択肢が少なく、実績も十分ではないため、決める前に試してください。** 小型モデルは一般に、長い場面の一貫性を大型モデルほど保てません。',
        ],
        items: [
          '**8 GB: Qwen3.5 9B**（`qwen3.5:9b`、6.6〜7.6 GB、256Kコンテキスト）。Ollamaで8 GBクラスの比較的新しいモデルです。創作スコアは公開されていないため、自分の場面で試してください。',
          '**12 GB: Gemma 4 12B**（`gemma4:12b`、7.7〜8.0 GB、256Kコンテキスト、Apache 2.0）。FeatherlessはEQ-Bench Creative Writing v3でルーブリック15.71、1270.4 Eloと報告しています。',
          '**16 GB: Mistral Small 3 24B**（`mistral-small:24b`、14 GB、32Kコンテキスト、Apache 2.0）。16 GBに収まる新しいモデルが少ないため、古いながら残しています。コンテキスト用の余裕は約2 GBなので、プロンプトは短くしてください。',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B: 48 GB以上の基準モデル',
        content: [
          '**Llama 3.3 70B（`llama3.3:70b`、43 GB、128Kコンテキスト）は、このガイドで最大のモデルで、48 GBのGPU構成または64 GBユニファイドメモリのMacが必要です。** Metaが2024年12月にMeta Llama 3.3 Community Licenseで公開しました。これは独自ライセンスで、OSIのオープンソースライセンスではありません。',
          'このページの以前の版では散文で1位にしていましたが、今は1位にしていません。確認した一覧にはこのモデルの創作スコアがなく、24 GBに収まる新しいモデルにはスコアがあります。また、新しいLlamaはEQ-Benchで低いスコアです（evals.reportの一覧でLlama 4 Maverickが927、Llama 4 Scoutが883）。メモリがあり、文体が好みなら使い続けて構いません。',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 コミュニティモデルと低拒否モデル',
        content: [
          '**コミュニティのフィクションモデルは、既定の選択ではなく第二の選択肢になりました。** 商用利用の前に、各モデルのライセンスを確認してください。',
        ],
        items: [
          '**Hermes 4.3 36B**（Nous Research、Apache 2.0）: ByteDance Seed-OSS-36B-Baseが土台で、Hugging Faceに4〜8ビットのGGUFがあります。Nousは自社のRefusalBenchで、プロンプトの74.60 %（非推論）と72.29 %（推論）に回答したと報告しています（開発元の報告値で、高いほど拒否が少ない）。instructモデルが正当なフィクション場面を断るときに使い、散文ではモデルカードの0.6より温度を上げてください。',
          '**Fimbulvetr-11B-v2**（Sao10K）: Solarベースで、ライセンスはCC BY-NC 4.0のため非商用に限られます。モデルカードはSillyTavernのプリセットを推奨しています。創作ベンチマークのスコアは見つかりませんでした。',
          '**Midnight-Rose-70B**（sophosympatheia）: Llama 2 70Bをもとにしたマージで、ライセンスはLlama 2ライセンスに継承された制限が加わります。モデルカードは約6144トークンのコンテキストを勧めています。Llama 3.3のモデルではありません。',
          '古いモデルにGGUF変換版がある場合は、LM Studio、または `ollama run hf.co/<user>/<repo>` で読み込めます。その際は、そのリポジトリ固有のライセンスを先に確認してください。',
          '拒否の挙動、倫理、限界については [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) をご覧ください。ローカルで動かしても法律は変わらず、公開する内容の責任は書き手にあります。',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'ローカルモデルとクラウドモデルの比較',
        content: [
          '**クローズドなクラウドモデルは創作リーダーボードで高いスコアを出します。ローカルモデルの強みはプライバシー、コスト、制御です。**',
        ],
        items: [
          '[evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) 経由で見たEQ-Bench Creative Writing v3の一覧（データ基準日2026-11-15）では、Claude Opus 4.7が2206 Eloで首位、GPT-5.5が2035で続きます。',
          'その一覧のオープンウェイト最上位はKimi K2.6の1782 Eloです。Featherlessがこのレベルで推奨するオープンモデルのサイズは、753B（GLM-5.3）、763B（DeepSeek-V4.1-Flash）、2.8T（Kimi K3）パラメータで、このガイドの8〜48 GB帯をはるかに超えています。',
          '**ローカルが適している場面:** 未公開の原稿、NDAのもとでの顧客案件、オフライン作業、トークン単価が問題になるプロジェクト。',
          '**ハイブリッド運用:** 下書きとブレインストーミングはローカルで行い、クラウドモデルは機密でない文章の推敲だけに使います。事前にプロバイダーのデータ取り扱い条件を確認してください。',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: 'ローカルLLMの創作を良くする設定とプロンプト',
        content: [
          'モデルを替えるより、次の5つの習慣のほうが出力を大きく変えます。',
        ],
        numberedItems: [
          '**サンプリングはコード用ではなく散文用にします。** 開発元の既定値は、Gemma 4が温度1.0・top-p 0.95・top-k 64、Qwen3.8が思考モードで1.0 / 0.95 / top-k 20、非思考モードで0.7 / 0.8 / top-k 20、Hermes 4.3が0.6 / 0.95 / top-k 20です。編集部の出発点として、散文は温度0.9〜1.1、引き締まった会話は0.7〜0.85を試してください。',
          '**フィクションでは思考モードをオフにします。** 推論モデルは書く前に計画するため、場面が組み立てたように見えることがあります。Qwen3.8は既定で思考します。OllamaのAPIでは `think` を `false` にするか、フロントエンドの思考切り替えを使ってください。',
          '**文体は具体的に指定します。**「二人称、現在形、短い文、副詞なしで書いて」のほうが「文学的なフィクションを書いて」より効果があります。作家名は文体のヒントになりますが、存命の作家の表現をなぞった文章は公開しないでください。',
          '**固定のシステムプロンプトを使います。** 視点、時制、ジャンル、キャラクターシート、文体のサンプルを入れ、セッションの冒頭で貼り直します。',
          '**セクションごとに書き、コンテキストウィンドウを広げます。** 一度に約500語ずつ生成し、新しいセッションでは短いあらすじを改めて伝えます。モデルはコンテキストに収まる範囲しか見えないためです。Ollamaの既定のコンテキストは限られているので、対話セッションで `/set parameter num_ctx 16384` と入力します。値を大きくするほどメモリを使います。',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: '詩に向くオープンウェイトモデル',
        content: [
          '**詩を別に採点するリーダーボードはないため、詩向けの選び方も上のメモリ帯別の順位に従います。** ソネット、俳句、ヴィラネルなど厳格な形式では、温度を0.7〜0.85に下げます（編集部の目安）。高い温度は韻律や脚韻を崩しやすいためです。自由詩には散文の範囲を使います。',
        ],
        items: [
          '**24 GB:** Gemma 4 31B または Qwen3.8-27B。同じ短い詩のプロンプトを両方に出し、声が好みに合う方を残します。',
          '**小さいメモリ帯:** Gemma 4 12B（12 GB）または Qwen3.5 9B（8 GB）。',
          '**厳格な形式:** モデルは音節ではなくトークンで処理するため、音節数と脚韻は手作業で確認してください。',
          '**形式を明示します:**「秋の雨についての俳句（5-7-5）を書いて」や「喪失についてシェイクスピア風ソネット（ABAB CDCD EFEF GG、弱強五歩格）を書いて」。「愛についての詩を書いて」のような曖昧な指示では、ありきたりな自由詩になります。',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: '悪いプロンプトと良いプロンプト',
        items: [
          '❌「ファンタジーの物語を書いて」→ ✅「密輸業者がドラゴンと古代の遺物をめぐって交渉する500語のファンタジー場面を書いて。五感の描写を使い、会話に緊張感を持たせて。」',
          '❌「何か面白いものを書いて」→ ✅「失敗した強盗の冒頭場面を300語で書いて。主人公は作戦の途中で相棒の裏切りに気づく。テンポに合わせて短く鋭い文を使って。」',
          '❌「ミステリーを書いて」→ ✅「この探偵の場面の続きを書いて: [前の文章]。探偵は一つの手がかりから容疑者の嘘に気づく。矛盾に気づく様子を、説明せず描写で見せて。」',
          '❌「もっと面白くして」→ ✅「直前の段落をノワール小説風に書き直して。会話は切り詰め、内面の独白は皮肉っぽく、音・におい・手触りなど具体的な感覚描写を入れて。」',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '創作文章に最適なローカルLLMはどれですか？',
            a: 'この順位では Gemma 4 31B と Qwen3.8-27B が最良の出発点で、どちらも24 GBのGPUに収まります（重みは19〜20 GBと18 GB）。Gemma 4 31B は EQ-Bench Creative Writing v3 のスコアが公開されているため散文向け、Qwen3.8-27B は長編プロジェクト向けです。小さいカードでは Gemma 4 12B（12 GB）か Mistral Small 3 24B（16 GB）を使います。編集部の順位なので、2つの候補を自分の場面で試してください。',
          },
          {
            q: '物語や小説を書くのに最適なローカルLLMはどれですか？',
            a: 'コンテキスト用の余裕を残してメモリに収まる最大のモデルを選びます。24 GBでは散文なら Gemma 4 31B、256Kコンテキストの Qwen3.8-27B は長編向け、48 GB以上では Llama 3.3 70B が基準です。ボトルネックはたいてい構成です。プロット、キャラクターシート、章ごとの短い要約があると、長いプロジェクトの一貫性が保てます。',
          },
          {
            q: '創作に最適なOllamaのモデルはどれですか？',
            a: '24 GBでは、散文なら `ollama run gemma4:31b`、長編なら `ollama run qwen3.8:27b`。12 GBでは `gemma4:12b`、16 GBでは `mistral-small:24b`、8 GBでは `qwen3.5:9b`、48 GB以上では `llama3.3:70b` です。長い場面では `num_ctx` を上げ、フィクションでは思考をオフにします。',
          },
          {
            q: 'VRAMが8 GBだけの場合、執筆に向くローカルLLMは？',
            a: 'Qwen3.5 9B（6.6〜7.6 GB、256Kコンテキスト）は、Ollamaの8 GBクラスで比較的新しいモデルです。創作スコアは公開されていないため、自分の場面で試してください。小型モデルは、24 GBクラスのモデルより長い場面をまとめる力が弱いと考えておきましょう。',
          },
          {
            q: '詩に最適なオープンウェイトモデルはどれですか？',
            a: '詩を別に採点するリーダーボードはないため、メモリ帯別の順位に従います。24 GBなら Gemma 4 31B または Qwen3.8-27B、12 GBなら Gemma 4 12B、8 GBなら Qwen3.5 9B です。ソネットや俳句など厳格な形式では温度を0.7〜0.85に下げ、音節と脚韻は手作業で確認してください。',
          },
          {
            q: 'LM Studioで創作に使うにはどのモデルを読み込めばよいですか？',
            a: '同じ順位が当てはまります。LM StudioもOllamaも量子化されたGGUFファイルを実行するため、LM Studio専用のモデルはありません。LM Studioのモデルブラウザでモデル名を検索し、メモリに収まるビルドを読み込んでください。',
          },
          {
            q: 'モデルは物語の前の部分を覚えていますか？',
            a: 'コンテキストウィンドウの範囲内だけです。このガイドのモデルは32K〜256Kトークンですが、コンテキストが長いほどメモリを使い、ウィンドウの外のことは忘れます。長いプロジェクトでは、各セッションの冒頭で短いあらすじとキャラクターシートを渡してください。',
          },
          {
            q: 'ローカルLLMはフィクションでClaudeやChatGPTの代わりになりますか？',
            a: '創作リーダーボードでは及びません。evals.report経由で見たEQ-Bench Creative Writing v3の一覧では、クローズドモデルが上位です（Claude Opus 4.7が2206 Elo、GPT-5.5が2035）。それでも24 GBのローカルモデルは下書きには十分なことがあり、原稿を自分のマシンに留められます。サンプリング設定と良いシステムプロンプトで、実用上の差の一部は埋められます。',
          },
          {
            q: '量子化は創作文章で目立ちますか？',
            a: '目立つことはあります。ビット数が低いビルドは精度が少し落ちるためです。創作に特化した研究は引用していません。Ollamaの既定ビルドは4ビットです。メモリに余裕があれば、より高いビット数のビルドと4ビットのビルドを同じ場面で比べ、好みの方を残してください。',
          },
          {
            q: '創作には温度をいくつにすればよいですか？',
            a: '編集部の出発点として、散文は0.9〜1.1、引き締まった会話や厳格な詩の形式は0.7〜0.85です。開発元の既定値が目安になります。GoogleはGemma 4で1.0（top-p 0.95、top-k 64）、AlibabaはQwen3.8で思考モード1.0、非思考モード0.7を示しています。フィクションでは思考モードをオフにします。',
          },
          {
            q: 'ローカルLLMの出力を商用で使えますか？',
            a: 'ライセンス次第です。Gemma 4、Qwen3.8、Mistral Small 3、Hermes 4.3 はApache 2.0と記載されており、Llama 3.3 は独自のMeta Llama 3.3 Community Licenseで、Fimbulvetr-11B はCC BY-NC 4.0（非商用）です。実際に使うビルドのモデルカードでライセンスを確認してください。これは法的助言ではありません。',
          },
          {
            q: 'FimbulvetrとMidnight-Roseは今も使う価値がありますか？',
            a: '文体が好みの場合だけです。Fimbulvetr-11B-v2 は非商用ライセンスのSolarベースのモデル、Midnight-Rose-70B はLlama 2 70Bベースのマージで、どちらもこのガイドの2026年のモデルより前のものです。どちらも創作ベンチマークのスコアは見つかりませんでした。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Ollamaライブラリ: Gemma 4](https://ollama.com/library/gemma4) -- タグ、ダウンロードサイズ、コンテキストウィンドウ',
          '[Ollamaライブラリ: Qwen3.8](https://ollama.com/library/qwen3.8) と [Qwen3.5](https://ollama.com/library/qwen3.5) -- タグ、サイズ、コンテキストウィンドウ',
          '[Ollamaライブラリ: Mistral Small](https://ollama.com/library/mistral-small) と [Llama 3.3](https://ollama.com/library/llama3.3) -- タグ、サイズ、コンテキスト、ライセンスの注記',
          '[Hugging Face: Gemma 4 31Bのモデルカード](https://huggingface.co/google/gemma-4-31B-it) と [Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- ライセンス、コンテキスト長、サンプリング既定値',
          '[Hugging Face: Qwen3.8-27Bのモデルカード](https://huggingface.co/Qwen/Qwen3.8-27B) -- ライセンス、ネイティブコンテキスト、推奨サンプリング',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- ベースモデル、ライセンス、RefusalBenchの数値、GGUFファイル',
          '[Hugging Face: Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) と [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- ベースモデルとライセンス',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) と [evals.reportのEQ-Benchスコア](https://evals.report/benchmarks/eq-bench?tab=scores) -- リーダーボードの数値（データ基準日2026-11-15）',
          '[Featherless: 創作向けのベストオープンモデル](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- Gemma 4のEQ-Bench数値とオープンモデルのサイズ（2026-09-17付）',
          '[Ollamaドキュメント: thinking](https://docs.ollama.com/capabilities/thinking) -- `think` パラメータ',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '創作用ローカルモデルの選び方・使い方でよくある間違い',
        items: [
          '**一般的なベンチマーク順位で選ぶ。** コーディングや推論のリーダーボードは散文の質をあまり示しません。EQ-Benchなど創作向けの一覧を見たうえで、自分の場面で試してください。',
          '**コーディング用のサンプリングを使う。** 温度0.2〜0.4は平板な散文になりがちです。創作には約0.9〜1.1が目安です（編集部の目安）。',
          '**思考モードをオンのままにする。** 計画先行の出力は、組み立てたように読めることがあります。フィクションではオフにします。',
          '**コンテキスト用メモリを見落とす。** 19〜20 GBのモデルは、コンテキストウィンドウを広げると24 GBのカードでは余裕がほとんど残りません。',
          '**薄いプロンプト。**「物語を書いて」では平凡な出力になります。視点、時制、長さ、キャラクターシート、明確な制約を加えてください。',
          '**チャット画面の中で推敲する。** 生成はチャットで、推敲はテキストエディタで行います。散文を自分で直すことが、声を自分のものに保ちます。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[2026年のベストローカルLLM](/ja/local-llms/best-local-llms-2026) -- 全用途の総合ランキング',
          '[ローカルLLMに必要なVRAMはどれくらい？](/ja/local-llms/how-much-vram-local-llm) -- モデルと量子化ごとのメモリ要件を計算',
          '[ローカルLLMのファインチューニングガイド](/ja/local-llms/fine-tuning-local-llms-lora) -- 一般向けハードウェアでのLoRAファインチューニングの仕組み',
          '[OllamaとLM Studioの比較](/ja/local-llms/ollama-vs-lm-studio) -- 創作ワークフローに合うツール',
          '[温度とTop-Pの解説](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- 創作出力の制御',
          '[創作文章向けローカルLLM: 詳細ガイド](/ja/power-local-llm/best-local-llm-creative-writing) -- フロントエンド、世界観づくり、低拒否モデルをVRAM帯別に解説',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- 拒否の挙動と限界',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: '2026年创意写作本地LLM推荐：小说、诗歌与长篇内容，按显存选择',
    seoTitle: '2026年创意写作本地LLM推荐：按显存选型指南',
    intro: 'Gemma 4 31B 和 Qwen3.8-27B 是创意写作最值得先试的两款本地模型，两者都能放进一张24 GB显卡。本指南按内存档位（8、12、16、24、48 GB）为小说、诗歌和长篇写作整理开放权重模型，并给出Ollama标签、许可证和排名依据。',
    metaDescription: '2026年创意写作、小说与诗歌本地LLM推荐：24 GB显存选Gemma 4 31B或Qwen3.8-27B，另附8、12、16、48 GB档位推荐与Ollama标签。',
    twitterDescription: '2026年创意写作本地LLM按显存推荐：Gemma 4 31B、Qwen3.8-27B、Gemma 4 12B、Mistral Small 3 24B、Llama 3.3 70B，附许可证与Ollama标签。',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-zh.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**创意写作最值得先试的本地LLM是 Gemma 4 31B 和 Qwen3.8-27B，两者都能放进一张24 GB显卡。** 散文选 Gemma 4 31B，长篇项目选 Qwen3.8-27B。8、12、16 GB分别用 Qwen3.5 9B、Gemma 4 12B 和 Mistral Small 3 24B。这是编辑排名，不是PromptQuorum的测试结果。',
    audience: '在消费级硬件上运行首个本地LLM的初学者',
    dateModified: '2026-11-17',
    readTime: '阅读约9分钟',
    educationalLevel: '初学者',
    primaryTerm: '本地LLM创意写作',
    toc: [
      {
        label: '核心要点',
        anchor: '#key-takeaways',
      },
      {
        label: '排名依据',
        anchor: '#ranking-basis',
      },
      {
        label: '按内存档位选择模型',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 8、12、16 GB档位推荐',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 社区模型与低拒答模型',
        anchor: '#community-models',
      },
      {
        label: '本地与云端模型对比',
        anchor: '#cloud-vs-local',
      },
      {
        label: '设置与提示词',
        anchor: '#prompting-settings',
      },
      {
        label: '适合写诗的模型',
        anchor: '#poetry-writing',
      },
      {
        label: '差提示词与好提示词',
        anchor: '#prompt-examples',
      },
      {
        label: '常见错误',
        anchor: '#common-mistakes',
      },
      {
        label: '相关阅读',
        anchor: '#related-reading',
      },
      {
        label: '常见问题',
        anchor: '#faq',
      },
      {
        label: '来源',
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
            text: '在一张24 GB显卡上做创意写作，散文选 Gemma 4 31B，长篇项目选 Qwen3.8-27B；其他内存档位可选 Qwen3.5 9B、Gemma 4 12B、Mistral Small 3 24B 或 Llama 3.3 70B。',
          },
          {
            type: 'plain-terms',
            text: '选能放进你内存、并为上下文留出余量的最大模型。24 GB显卡上，散文选 Gemma 4 31B，长篇项目选 Qwen3.8-27B。创意写作没有唯一正确答案，请用自己的场景测试两个候选，保留文风更合你心意的那个。',
          },
        ],
        items: [
          '**Gemma 4 31B 是24 GB显卡上的散文首选。** 权重约19–20 GB，256K上下文，Apache 2.0，也是本指南中唯一公开了EQ-Bench Creative Writing v3得分的模型（Featherless报告：评分细则16.01，Elo 1407.6）。',
          '**Qwen3.8-27B 是长篇项目首选。** Ollama上18 GB，256K上下文，Apache 2.0。其模型卡未提及创意写作，也没有公开的创作得分，请用自己的场景测试它的文风。',
          '**先按内存选型。** 8 GB：Qwen3.5 9B。12 GB：Gemma 4 12B。16 GB：Mistral Small 3 24B。24 GB：Gemma 4 31B 或 Qwen3.8-27B。48 GB及以上：Llama 3.3 70B。',
          '**较早的社区模型已不再是默认选择。** Fimbulvetr-11B（CC BY-NC 4.0，仅限非商业）和 Midnight-Rose-70B（Llama 2合并模型）早于上述模型；只有偏爱它们的文风时才使用。',
          '**采样参数按散文设置，而不是按代码设置。** 温度从0.9–1.1开始（编辑建议范围；Google为Gemma 4给出的是1.0），并关闭思考模式。',
          '**闭源云端模型仍领跑创意写作排行榜。** 在通过evals.report查看的EQ-Bench Creative Writing v3榜单中（数据日期2026-11-15），Claude Opus 4.7为2206 Elo，开放权重最高的Kimi K2.6为1782。本地模型的优势在隐私、成本和可控性。',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: '排名依据（以及它不是什么）',
        content: [
          '**这是依据模型卡、Ollama模型库和公开排行榜整理的编辑排名。PromptQuorum没有为此运行新的带评分写作测试。** 创意写作没有唯一正确答案，基准测试只能不完美地衡量它，不同排行榜之间也会不一致。',
        ],
        items: [
          '**大小与上下文：** 取自Ollama模型库中 [Gemma 4](https://ollama.com/library/gemma4)、[Qwen3.8](https://ollama.com/library/qwen3.8)、[Qwen3.5](https://ollama.com/library/qwen3.5)、[Mistral Small](https://ollama.com/library/mistral-small) 和 [Llama 3.3](https://ollama.com/library/llama3.3) 的页面。大小是默认4位版本的下载大小；上下文内存另计。',
          '**许可证与采样默认值：** 取自“来源”中列出的Hugging Face模型卡。',
          '**创作得分：** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) 是由LLM评分的基准。Gemma 4的数字来自2026-09-17的 [Featherless文章](https://featherless.ai/blog/best-ai-for-creative-writing-2026)；Qwen3.8-27B没有公开得分。不同榜单的得分不能直接比较，请只在同一榜单内比较。',
          '**“适合用途”标签** 是基于这些来源的编辑建议，不是实测结果。',
          '**用四个提示词自己测试：** 续写一段500字的场景（语气与声音）、用指定作家的文风写一段（文风是否变化）、写一篇1,000字带反转结局的短篇（铺垫与回收）、写两个角色的对话（声音是否有区分）。',
          '关于前端、世界观构建和低拒答模型的更多内容，请见 [创意写作进阶指南](/zh/power-local-llm/best-local-llm-creative-writing)。',
        ],
        callouts: [
          {
            type: 'note',
            text: '把每个推荐都当作起点假设：用同样的三个场景测试两个候选，保留文风更合你心意的那个。',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: '按内存档位选择创意写作本地LLM',
        content: [
          '**先按内存选型：模型必须放得下，并为上下文留出余量。** 大小是默认4位量化下的Ollama下载大小；上下文内存（KV缓存）另计，长场景约2–6 GB（估算）。',
        ],
        columns: [
          '你的内存',
          '模型（Ollama标签）',
          '权重',
          '上下文',
        ],
        rows: [
          {
            '你的内存': '8 GB显卡',
            '模型（Ollama标签）': 'Qwen3.5 9B (qwen3.5:9b)',
            '权重': '6.6–7.6 GB',
            '上下文': '256K',
          },
          {
            '你的内存': '12 GB显卡',
            '模型（Ollama标签）': 'Gemma 4 12B (gemma4:12b)',
            '权重': '7.7–8.0 GB',
            '上下文': '256K',
          },
          {
            '你的内存': '16 GB显卡',
            '模型（Ollama标签）': 'Mistral Small 3 24B (mistral-small:24b)',
            '权重': '14 GB',
            '上下文': '32K',
          },
          {
            '你的内存': '24 GB显卡 / 32 GB Mac',
            '模型（Ollama标签）': 'Gemma 4 31B (gemma4:31b)',
            '权重': '19–20 GB',
            '上下文': '256K',
          },
          {
            '你的内存': '24 GB显卡 / 32 GB Mac',
            '模型（Ollama标签）': 'Qwen3.8-27B (qwen3.8:27b)',
            '权重': '18 GB',
            '上下文': '256K',
          },
          {
            '你的内存': '24 GB显卡，更快输出',
            '模型（Ollama标签）': 'Gemma 4 26B A4B (gemma4:26b)',
            '权重': '16–19 GB',
            '上下文': '256K',
          },
          {
            '你的内存': '48 GB显卡 / 64 GB Mac',
            '模型（Ollama标签）': 'Llama 3.3 70B (llama3.3:70b)',
            '权重': '43 GB',
            '上下文': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mac的统一内存与macOS共用。32 GB的Mac上，可供模型和上下文使用的大约是24 GB；这能放下 Gemma 4 31B 或 Qwen3.8-27B，但留给上下文的只有几GB。',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B：24 GB显卡上的散文首选',
        content: [
          '**Gemma 4 31B 是24 GB显卡或32 GB Mac上写散文的首选。** 它是一个30.7B参数的稠密模型（Ollama上19–20 GB），具备256K上下文，采用Apache 2.0许可，也是本指南中唯一公开了EQ-Bench Creative Writing v3结果的模型：评分细则16.01，Elo 1407.6（Featherless报告）。',
          'Google的模型卡将诗歌、剧本等文本生成列为预期用途，并推荐温度1.0、top-p 0.95、top-k 64。19–20 GB在24 GB显卡上几乎不给上下文留空间，因此请把上下文窗口设得适中，或选择 Gemma 4 26B A4B（16–19 GB）：它是每个token约激活4B参数的混合专家模型，在同一份Featherless榜单上得分1286.9 Elo。',
        ],
        columns: [
          '项目',
          '内容',
        ],
        rows: [
          {
            '项目': '适合用途',
            '内容': '24 GB显卡上的散文',
          },
          {
            '项目': '权重（Ollama）',
            '内容': '19–20 GB',
          },
          {
            '项目': '上下文',
            '内容': '256K tokens',
          },
          {
            '项目': '许可证',
            '内容': 'Apache 2.0',
          },
          {
            '项目': 'Ollama命令',
            '内容': 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B：同一硬件上的长篇项目首选',
        content: [
          '**Qwen3.8-27B 是24 GB显卡上做长篇项目的首选。** 它是27B稠密模型，Ollama上18 GB，原生上下文262,144 tokens（据模型卡可扩展到1,000,000 tokens），采用Apache 2.0许可。',
          '阿里巴巴将其定位于编程、智能体和研究；模型卡未提及创意写作，也没有公开的创作得分，因此其散文质量应视为未经验证。思考模式默认开启；写小说时请关闭。',
        ],
        columns: [
          '项目',
          '内容',
        ],
        rows: [
          {
            '项目': '适合用途',
            '内容': '长篇小说项目、指令遵循',
          },
          {
            '项目': '权重（Ollama）',
            '内容': '18 GB',
          },
          {
            '项目': '上下文',
            '内容': '256K tokens',
          },
          {
            '项目': '许可证',
            '内容': 'Apache 2.0',
          },
          {
            '项目': 'Ollama命令',
            '内容': 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 8、12、16 GB档位推荐',
        content: [
          '**24 GB以下的选择更少，也更缺乏验证，请先测试再决定。** 小模型通常比大模型更难在长场景中保持前后一致。',
        ],
        items: [
          '**8 GB：Qwen3.5 9B**（`qwen3.5:9b`，6.6–7.6 GB，256K上下文）。Ollama上8 GB档位较新的模型。没有公开的创作得分，请用自己的场景测试。',
          '**12 GB：Gemma 4 12B**（`gemma4:12b`，7.7–8.0 GB，256K上下文，Apache 2.0）。Featherless给出其在EQ-Bench Creative Writing v3上的评分细则为15.71、1270.4 Elo。',
          '**16 GB：Mistral Small 3 24B**（`mistral-small:24b`，14 GB，32K上下文，Apache 2.0）。这是一款较早的模型，因为能放进16 GB的新模型很少而保留在列表中。它只给上下文留约2 GB，请保持提示词简短。',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B：48 GB及以上的参照模型',
        content: [
          '**Llama 3.3 70B（`llama3.3:70b`，43 GB，128K上下文）是本指南中最大的模型，需要48 GB显卡配置或64 GB统一内存的Mac。** Meta于2024年12月发布，采用Meta Llama 3.3 Community License，这是自定义许可证，而不是OSI认可的开源许可证。',
          '本页早先版本曾把它列为散文第一名，现在不再这样做：我们查阅的榜单中没有它的创作得分，而能放进24 GB的较新模型有得分，且较新的Llama版本在EQ-Bench上得分偏低（evals.report榜单中Llama 4 Maverick为927，Llama 4 Scout为883）。如果你有足够内存并喜欢它的文风，可以继续使用。',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 社区模型与低拒答模型',
        content: [
          '**社区小说模型现在是第二层选择，而不是默认选择。** 商用前请检查每个模型的许可证。',
        ],
        items: [
          '**Hermes 4.3 36B**（Nous Research，Apache 2.0）：基于ByteDance Seed-OSS-36B-Base，Hugging Face上有4至8位GGUF文件。Nous报告称，在其自有的RefusalBench中，它回答了74.60%（非推理）和72.29%（推理）的提示词（开发者报告；数值越高表示拒答越少）。当instruct模型拒绝合理的小说场景时可以使用，写散文时请把温度调到高于模型卡建议的0.6。',
          '**Fimbulvetr-11B-v2**（Sao10K）：基于Solar的模型，许可证为CC BY-NC 4.0，仅限非商业使用。模型卡推荐使用SillyTavern预设。我们没有找到它的创意写作基准得分。',
          '**Midnight-Rose-70B**（sophosympatheia）：基于Llama 2 70B的合并模型，采用Llama 2许可证并继承了额外限制；模型卡建议上下文约6144 tokens。它不是Llama 3.3模型。',
          '如果某个较早的模型有GGUF转换版本，可以在LM Studio中加载，或用 `ollama run hf.co/<user>/<repo>` 加载；请先确认该具体仓库的许可证。',
          '关于拒答行为、伦理与边界，请见 [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics)。本地部署不会改变法律，作者仍需对其发布的内容负责。',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: '本地与云端模型对比',
        content: [
          '**闭源云端模型在创意写作排行榜上得分更高；本地模型的优势在隐私、成本和可控性。**',
        ],
        items: [
          '在通过 [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) 查看的EQ-Bench Creative Writing v3榜单中（数据日期2026-11-15），Claude Opus 4.7以2206 Elo领先，GPT-5.5为2035。',
          '该榜单中开放权重最高的是Kimi K2.6，为1782 Elo。Featherless给出其在这一水平推荐的开放模型的大小为753B（GLM-5.3）、763B（DeepSeek-V4.1-Flash）和2.8T（Kimi K3）参数，远超本指南中的8至48 GB档位。',
          '**适合本地的情形：** 未发表的稿件、受NDA约束的客户项目、离线工作，以及按token计费成为负担的项目。',
          '**混合工作流：** 草稿和头脑风暴在本地完成；仅在检查服务商的数据条款之后，用云端模型润色非敏感内容。',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: '提升本地LLM创意写作效果的设置与提示词',
        content: [
          '这五个习惯对输出的影响比换模型更大。',
        ],
        numberedItems: [
          '**采样参数按散文设置，而不是按代码设置。** 厂商默认值：Gemma 4 温度1.0、top-p 0.95、top-k 64；Qwen3.8 在思考模式下为1.0 / 0.95 / top-k 20，非思考模式下为0.7 / 0.8 / top-k 20；Hermes 4.3 为0.6 / 0.95 / top-k 20。作为编辑建议的起点，散文试温度0.9–1.1，紧凑的对话试0.7–0.85。',
          '**写小说时关闭思考模式。** 推理模型会先规划再写作，场景可能显得像拼装出来的。Qwen3.8默认会思考；在Ollama API中把 `think` 设为 `false`，或使用前端的思考开关。',
          '**把文风说具体。** “用第二人称、现在时、短句、不用副词写”比“写文学小说”更有效。提到作家名字只是文风提示；请勿发布复述在世作家原文措辞的文本。',
          '**使用固定的系统提示词**，写明视角、时态、体裁、角色设定表和文风样例，并在每次会话开头重新粘贴。',
          '**分段写作并扩大上下文窗口。** 每次生成约500字，并在每次新会话中重述简短的故事摘要，因为模型只能看到上下文能容纳的内容。Ollama的默认上下文有限；在交互会话中输入 `/set parameter num_ctx 16384`。数值越大，占用内存越多。',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: '适合写诗的开放权重模型',
        content: [
          '**没有排行榜单独评测诗歌，因此诗歌推荐沿用上面按内存档位的排名。** 写格律严格的形式（十四行诗、俳句、维拉内拉诗）时，把温度降到0.7–0.85（编辑建议范围），因为高温更容易破坏格律和韵脚；写自由诗则用散文的温度范围。',
        ],
        items: [
          '**24 GB：** Gemma 4 31B 或 Qwen3.8-27B。用同一个短诗提示词分别测试，保留文风更合你心意的那个。',
          '**较小档位：** Gemma 4 12B（12 GB）或 Qwen3.5 9B（8 GB）。',
          '**严格形式：** 模型按token而不是按音节处理文本，请手动数音节并检查韵脚。',
          '**明确写出形式：** “写一首关于秋雨的俳句（5-7-5音节）”或“写一首关于失去的莎士比亚十四行诗（ABAB CDCD EFEF GG，抑扬格五音步）”。像“写一首关于爱的诗”这样含糊的提示词只会得到泛泛的自由诗。',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: '差提示词与好提示词',
        items: [
          '❌ “写一个奇幻故事” → ✅ “写一个500字的奇幻场景：走私者与巨龙就古代文物讨价还价。使用感官细节，让对话保持紧张。”',
          '❌ “写点有意思的东西” → ✅ “写一个300字的开场场景：一次出了岔子的劫案。主角在行动中途发现搭档背叛了自己。用简短有力的句子配合节奏。”',
          '❌ “写一个悬疑故事” → ✅ “续写这段侦探场景：[前文]。侦探凭一个细节发现嫌疑人在说谎。请用画面展示而不是直接叙述她如何发现矛盾。”',
          '❌ “让它更有意思” → ✅ “把上一段改写成黑色小说风格：对白简短，内心独白带着愤世嫉俗，加入具体的感官细节（声音、气味、触感）。”',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '创意写作最好的本地LLM是哪个？',
            a: '在本排名中，Gemma 4 31B 和 Qwen3.8-27B 是最好的本地起点，两者都能放进一张24 GB显卡（权重19–20 GB和18 GB）。Gemma 4 31B 因有公开的EQ-Bench Creative Writing v3得分而成为散文首选；Qwen3.8-27B 是长篇项目首选。显卡更小时，用 Gemma 4 12B（12 GB）或 Mistral Small 3 24B（16 GB）。这是编辑排名，请用自己的场景测试两个候选。',
          },
          {
            q: '写故事和小说最好的本地LLM是哪个？',
            a: '选能放进你内存并为上下文留余量的最大模型。24 GB上写散文适合 Gemma 4 31B，长篇小说项目适合256K上下文的 Qwen3.8-27B，48 GB及以上则以 Llama 3.3 70B 为参照。瓶颈通常是结构：大纲、角色设定表和简短的章节摘要能让长篇项目保持一致。',
          },
          {
            q: '创意写作用哪个Ollama模型最好？',
            a: '24 GB上，散文用 `ollama run gemma4:31b`，长篇项目用 `ollama run qwen3.8:27b`。12 GB用 `gemma4:12b`，16 GB用 `mistral-small:24b`，8 GB用 `qwen3.5:9b`，48 GB及以上用 `llama3.3:70b`。写长场景时调高 `num_ctx`，写小说时关闭思考。',
          },
          {
            q: '只有8 GB显存时，哪些本地LLM最适合写作？',
            a: 'Qwen3.5 9B（6.6–7.6 GB，256K上下文）是Ollama上8 GB档位较新的模型。它没有公开的创作得分，请用自己的测试场景验证，并预期小模型在长场景中的连贯性不如24 GB的模型。',
          },
          {
            q: '写诗用哪个开放权重模型最好？',
            a: '没有排行榜单独评测诗歌，所以沿用按内存档位的排名：24 GB用 Gemma 4 31B 或 Qwen3.8-27B，12 GB用 Gemma 4 12B，8 GB用 Qwen3.5 9B。写十四行诗或俳句等严格形式时，把温度降到0.7–0.85，并手动检查音节和韵脚。',
          },
          {
            q: '在LM Studio里做创意写作应该加载哪个模型？',
            a: '适用同一份排名。LM Studio和Ollama运行的都是量化后的GGUF文件，所以并不存在LM Studio专用模型：在LM Studio的模型浏览器中搜索模型名称，加载能放进你内存的版本即可。',
          },
          {
            q: '模型会记住故事前面的内容吗？',
            a: '只在其上下文窗口之内。本指南中的模型提供32K到256K tokens，但上下文越长占用内存越多，窗口之外的内容模型都会忘记。长篇项目请在每次会话开头提供简短的故事摘要和角色设定表。',
          },
          {
            q: '本地LLM能在小说创作上取代Claude或ChatGPT吗？',
            a: '在创意写作排行榜上不能：在通过evals.report查看的EQ-Bench Creative Writing v3榜单中，闭源模型领先（Claude Opus 4.7为2206 Elo，GPT-5.5为2035）。不过24 GB的本地模型写初稿可能已经够用，并且稿件留在你自己的机器上。采样设置和好的系统提示词能弥补一部分实际差距。',
          },
          {
            q: '量化在创意写作中会被察觉吗？',
            a: '可能会，因为位数更低的版本会损失一些精度。我们没有引用关于创意写作的专门研究。Ollama的默认版本是4位；如果内存有余量，可以在同一场景上对比更高位数版本和4位版本，保留你更喜欢的那个。',
          },
          {
            q: '创意写作应该用多高的温度？',
            a: '作为编辑建议的起点，散文用0.9–1.1，紧凑的对话或严格的诗歌形式用0.7–0.85。厂商默认值是可靠的参照：Google为Gemma 4给出1.0（top-p 0.95，top-k 64），阿里巴巴为Qwen3.8给出思考模式1.0、非思考模式0.7。写小说时请关闭思考模式。',
          },
          {
            q: '本地LLM生成的内容可以用于商业用途吗？',
            a: '取决于许可证。Gemma 4、Qwen3.8、Mistral Small 3 和 Hermes 4.3 标注为Apache 2.0，Llama 3.3 使用Meta自定义的Meta Llama 3.3 Community License，Fimbulvetr-11B 为CC BY-NC 4.0（非商业）。请阅读你所用具体版本的模型卡上的许可证。这不构成法律建议。',
          },
          {
            q: 'Fimbulvetr和Midnight-Rose现在还值得用吗？',
            a: '只有当你偏爱它们的文风时。Fimbulvetr-11B-v2 是采用非商业许可证、基于Solar的模型，Midnight-Rose-70B 是基于Llama 2 70B的合并模型；两者都早于本指南中的2026年模型，我们也没有找到它们的创意写作基准得分。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Ollama模型库：Gemma 4](https://ollama.com/library/gemma4) -- 标签、下载大小和上下文窗口',
          '[Ollama模型库：Qwen3.8](https://ollama.com/library/qwen3.8) 和 [Qwen3.5](https://ollama.com/library/qwen3.5) -- 标签、大小和上下文窗口',
          '[Ollama模型库：Mistral Small](https://ollama.com/library/mistral-small) 和 [Llama 3.3](https://ollama.com/library/llama3.3) -- 标签、大小、上下文和许可证说明',
          '[Hugging Face：Gemma 4 31B模型卡](https://huggingface.co/google/gemma-4-31B-it) 和 [Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- 许可证、上下文长度、采样默认值',
          '[Hugging Face：Qwen3.8-27B模型卡](https://huggingface.co/Qwen/Qwen3.8-27B) -- 许可证、原生上下文、推荐采样参数',
          '[Hugging Face：Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- 基础模型、许可证、RefusalBench数据、GGUF文件',
          '[Hugging Face：Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) 和 [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- 基础模型和许可证',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) 和 [evals.report的EQ-Bench得分](https://evals.report/benchmarks/eq-bench?tab=scores) -- 排行榜数据（数据日期2026-11-15）',
          '[Featherless：创意写作最佳开放模型](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- Gemma 4的EQ-Bench数据和开放模型大小（2026-09-17）',
          '[Ollama文档：thinking](https://docs.ollama.com/capabilities/thinking) -- `think` 参数',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '选择和使用本地写作模型时的常见错误',
        items: [
          '**按通用基准排名选型。** 编程和推理排行榜很难说明散文质量。请参考EQ-Bench等创作类榜单，再用自己的场景测试。',
          '**使用编程式采样参数。** 温度0.2–0.4往往使文字平淡；创意写作大约需要0.9–1.1（编辑建议范围）。',
          '**一直开着思考模式。** 先规划式的输出读起来可能像拼装的。写小说时请关闭。',
          '**忽视上下文内存。** 一旦扩大上下文窗口，19–20 GB的模型在24 GB显卡上几乎没有余量。',
          '**提示词太单薄。** “写一个故事”只会得到泛泛的结果；请补充视角、时态、长度、角色设定表和明确的限制条件。',
          '**在聊天窗口里修改文字。** 在聊天中生成，在文本编辑器里修改；自己修改文字才能让文风保持是你的。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) -- 覆盖所有用途的综合排名',
          '[本地LLM需要多少显存？](/zh/local-llms/how-much-vram-local-llm) -- 计算任意模型和量化方式的内存需求',
          '[本地LLM微调指南](/zh/local-llms/fine-tuning-local-llms-lora) -- LoRA微调在消费级硬件上如何运作',
          '[Ollama与LM Studio对比](/zh/local-llms/ollama-vs-lm-studio) -- 哪个工具更适合创作工作流',
          '[温度与Top-P详解](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- 控制创作输出',
          '[创意写作本地LLM：进阶指南](/zh/power-local-llm/best-local-llm-creative-writing) -- 按显存档位介绍前端、世界观构建和低拒答模型',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- 拒答行为与边界',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Best Models',
    title: '2026년 창작 글쓰기용 로컬 LLM 추천: 소설, 시, 장편을 VRAM별로 정리',
    seoTitle: '창작 글쓰기 로컬 LLM 2026: VRAM별 추천',
    intro: '창작 글쓰기에서 가장 먼저 써 볼 로컬 모델은 Gemma 4 31B와 Qwen3.8-27B이며, 둘 다 24 GB GPU 한 장에 들어갑니다. 이 가이드는 소설, 시, 장편 글쓰기용 오픈 웨이트 모델을 메모리 구간(8, 12, 16, 24, 48 GB)별로 정리하고 Ollama 태그, 라이선스, 순위의 근거를 밝힙니다.',
    metaDescription: '2026년 창작 글쓰기, 소설, 시에 맞는 로컬 LLM 추천. 24 GB는 Gemma 4 31B와 Qwen3.8-27B, 8·12·16·48 GB 구간 추천과 Ollama 태그를 정리했습니다.',
    twitterDescription: '2026년 창작 글쓰기용 로컬 LLM을 VRAM별로 추천: Gemma 4 31B, Qwen3.8-27B, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B. 라이선스와 Ollama 태그 포함.',
    heroImage: '/images/best-local-llms-for-creative-writing-hero-ko.webp',
    publishDate: '2026-04-04',
    leadAnswerBlock: '**창작 글쓰기에서 가장 먼저 써 볼 로컬 LLM은 Gemma 4 31B와 Qwen3.8-27B이며, 둘 다 24 GB GPU 한 장에 들어갑니다.** 산문은 Gemma 4 31B, 장편은 Qwen3.8-27B입니다. 8, 12, 16 GB에서는 Qwen3.5 9B, Gemma 4 12B, Mistral Small 3 24B를 사용합니다. 편집 순위이며 PromptQuorum의 테스트 결과가 아닙니다.',
    audience: '일반 소비자용 하드웨어에서 처음으로 로컬 LLM을 실행하는 초보자',
    dateModified: '2026-11-17',
    readTime: '9분 읽기',
    educationalLevel: '초급',
    primaryTerm: '로컬 LLM 창작 글쓰기',
    toc: [
      {
        label: '핵심 내용',
        anchor: '#key-takeaways',
      },
      {
        label: '순위의 근거',
        anchor: '#ranking-basis',
      },
      {
        label: '메모리 구간별 추천 모델',
        anchor: '#best-by-memory',
      },
      {
        label: '#1 Gemma 4 31B',
        anchor: '#gemma-4-31b',
      },
      {
        label: '#2 Qwen3.8-27B',
        anchor: '#qwen3-8-27b',
      },
      {
        label: '#3 8·12·16 GB 구간 추천',
        anchor: '#smaller-tiers',
      },
      {
        label: '#4 Llama 3.3 70B',
        anchor: '#llama-3-3-70b',
      },
      {
        label: '#5 커뮤니티 모델과 저거부 모델',
        anchor: '#community-models',
      },
      {
        label: '로컬 모델과 클라우드 모델 비교',
        anchor: '#cloud-vs-local',
      },
      {
        label: '설정과 프롬프트',
        anchor: '#prompting-settings',
      },
      {
        label: '시에 적합한 모델',
        anchor: '#poetry-writing',
      },
      {
        label: '나쁜 프롬프트와 좋은 프롬프트',
        anchor: '#prompt-examples',
      },
      {
        label: '흔한 실수',
        anchor: '#common-mistakes',
      },
      {
        label: '관련 글',
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
            text: '24 GB GPU 한 장으로 창작 글쓰기를 시작한다면 산문은 Gemma 4 31B, 장편은 Qwen3.8-27B가 출발점이며, 다른 메모리 구간에서는 Qwen3.5 9B, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B를 사용합니다.',
          },
          {
            type: 'plain-terms',
            text: '컨텍스트용 여유를 남기고 메모리에 들어가는 가장 큰 모델을 고릅니다. 24 GB 카드에서는 산문에 Gemma 4 31B, 장편 프로젝트에 Qwen3.8-27B입니다. 창작 글쓰기에는 유일한 정답이 없으므로 후보 두 개를 본인의 장면으로 테스트하고 문체가 더 마음에 드는 쪽을 남기십시오.',
          },
        ],
        items: [
          '**Gemma 4 31B는 24 GB GPU의 산문용입니다.** 가중치 약 19–20 GB, 256K 컨텍스트, Apache 2.0이며, 이 가이드에서 EQ-Bench Creative Writing v3 점수가 공개된 유일한 모델입니다(Featherless 보고: 루브릭 16.01, Elo 1407.6).',
          '**Qwen3.8-27B는 장편 프로젝트용입니다.** Ollama에서 18 GB, 256K 컨텍스트, Apache 2.0입니다. 모델 카드에는 창작 글쓰기 언급이 없고 창작 점수도 공개되어 있지 않으므로 본인의 장면으로 문체를 확인하십시오.',
          '**먼저 메모리로 고릅니다.** 8 GB: Qwen3.5 9B. 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B 또는 Qwen3.8-27B. 48 GB 이상: Llama 3.3 70B.',
          '**오래된 커뮤니티 모델은 더 이상 기본 선택이 아닙니다.** Fimbulvetr-11B(CC BY-NC 4.0, 비상업용)와 Midnight-Rose-70B(Llama 2 병합 모델)는 위 모델들보다 앞선 모델이므로 문체가 마음에 들 때만 사용하십시오.',
          '**샘플링은 코드용이 아니라 산문용으로 설정합니다.** 온도는 0.9–1.1에서 시작하고(편집 권장 범위이며 Google은 Gemma 4에 1.0을 제시합니다) 사고 모드는 끕니다.',
          '**폐쇄형 클라우드 모델이 여전히 창작 글쓰기 리더보드 상위입니다.** evals.report로 본 EQ-Bench Creative Writing v3 목록(데이터 기준일 2026-11-15)에서 Claude Opus 4.7은 2206 Elo, 오픈 웨이트 최고 항목인 Kimi K2.6은 1782입니다. 로컬 모델의 강점은 개인정보 보호, 비용, 제어권입니다.',
        ],
      },
      rankingBasis: {
        id: 'ranking-basis',
        title: '순위의 근거(그리고 근거가 아닌 것)',
        content: [
          '**이 순위는 모델 카드, Ollama 라이브러리, 공개 리더보드를 바탕으로 정리한 편집 순위입니다. PromptQuorum이 점수를 매기는 새 글쓰기 테스트를 실행한 것은 아닙니다.** 창작 글쓰기에는 유일한 정답이 없어 벤치마크로는 불완전하게만 측정되고 리더보드끼리도 결과가 엇갈립니다.',
        ],
        items: [
          '**크기와 컨텍스트:** Ollama 라이브러리의 [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.5](https://ollama.com/library/qwen3.5), [Mistral Small](https://ollama.com/library/mistral-small), [Llama 3.3](https://ollama.com/library/llama3.3) 페이지에서 확인했습니다. 크기는 기본 4비트 빌드의 다운로드 크기이며 컨텍스트 메모리는 별도입니다.',
          '**라이선스와 샘플링 기본값:** 출처에 나열한 Hugging Face 모델 카드에서 확인했습니다.',
          '**창작 점수:** [EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html)는 LLM이 채점하는 벤치마크입니다. Gemma 4 수치는 2026-09-17자 [Featherless 글](https://featherless.ai/blog/best-ai-for-creative-writing-2026)에서 가져왔으며 Qwen3.8-27B는 공개된 점수가 없습니다. 집계처가 다른 점수는 직접 비교할 수 없으므로 하나의 목록 안에서만 비교하십시오.',
          '**"적합한 용도" 표기**는 이 출처들을 바탕으로 한 편집 권장일 뿐 실측 결과가 아닙니다.',
          '**프롬프트 네 개로 직접 테스트하십시오:** 장면을 500단어 이어 쓰기(어조와 목소리), 지정한 작가의 문체로 한 단락 쓰기(문체가 바뀌는지), 반전 결말이 있는 1,000단어 단편 쓰기(복선과 회수), 두 인물의 대화 쓰기(목소리가 구분되는지).',
          '프런트엔드, 세계관 구축, 저거부 모델에 대한 자세한 내용은 [창작 글쓰기 확장 가이드](/ko/power-local-llm/best-local-llm-creative-writing)를 참고하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '모든 추천을 출발점이 되는 가설로 다루십시오. 같은 장면 세 개를 후보 두 개에 돌려 보고 목소리가 더 마음에 드는 쪽을 남기십시오.',
          },
        ],
      },
      bestByMemory: {
        id: 'best-by-memory',
        title: '메모리 구간별 창작 글쓰기용 로컬 LLM 순위',
        content: [
          '**먼저 메모리로 고릅니다. 모델이 컨텍스트용 여유를 남기고 들어가야 합니다.** 크기는 기본 4비트 양자화 기준 Ollama 다운로드 크기이며, 컨텍스트 메모리(KV 캐시)는 별도로 긴 장면에서 대략 2–6 GB입니다(추정).',
        ],
        columns: [
          '메모리',
          '모델(Ollama 태그)',
          '가중치',
          '컨텍스트',
        ],
        rows: [
          {
            '메모리': '8 GB GPU',
            '모델(Ollama 태그)': 'Qwen3.5 9B (qwen3.5:9b)',
            '가중치': '6.6–7.6 GB',
            '컨텍스트': '256K',
          },
          {
            '메모리': '12 GB GPU',
            '모델(Ollama 태그)': 'Gemma 4 12B (gemma4:12b)',
            '가중치': '7.7–8.0 GB',
            '컨텍스트': '256K',
          },
          {
            '메모리': '16 GB GPU',
            '모델(Ollama 태그)': 'Mistral Small 3 24B (mistral-small:24b)',
            '가중치': '14 GB',
            '컨텍스트': '32K',
          },
          {
            '메모리': '24 GB GPU / 32 GB Mac',
            '모델(Ollama 태그)': 'Gemma 4 31B (gemma4:31b)',
            '가중치': '19–20 GB',
            '컨텍스트': '256K',
          },
          {
            '메모리': '24 GB GPU / 32 GB Mac',
            '모델(Ollama 태그)': 'Qwen3.8-27B (qwen3.8:27b)',
            '가중치': '18 GB',
            '컨텍스트': '256K',
          },
          {
            '메모리': '24 GB GPU, 빠른 출력',
            '모델(Ollama 태그)': 'Gemma 4 26B A4B (gemma4:26b)',
            '가중치': '16–19 GB',
            '컨텍스트': '256K',
          },
          {
            '메모리': '48 GB GPU / 64 GB Mac',
            '모델(Ollama 태그)': 'Llama 3.3 70B (llama3.3:70b)',
            '가중치': '43 GB',
            '컨텍스트': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Mac에서는 통합 메모리를 macOS와 공유합니다. 32 GB Mac에서는 모델과 컨텍스트에 쓸 수 있는 메모리를 약 24 GB로 보십시오. Gemma 4 31B나 Qwen3.8-27B는 들어가지만 컨텍스트용으로는 몇 GB만 남습니다.',
          },
        ],
      },
      gemma31: {
        id: 'gemma-4-31b',
        title: '#1 Gemma 4 31B: 24 GB GPU의 산문용',
        content: [
          '**Gemma 4 31B는 24 GB GPU 또는 32 GB Mac에서 산문을 쓸 때의 첫 번째 추천입니다.** 파라미터 30.7B의 밀집(dense) 모델(Ollama에서 19–20 GB)이며 256K 컨텍스트를 Apache 2.0으로 제공합니다. 이 가이드에서 EQ-Bench Creative Writing v3 결과가 공개된 유일한 모델입니다(Featherless 보고: 루브릭 16.01, Elo 1407.6).',
          'Google의 모델 카드는 시와 대본 같은 텍스트 생성을 의도된 용도로 나열하고 온도 1.0, top-p 0.95, top-k 64를 권장합니다. 19–20 GB로는 24 GB 카드에 컨텍스트용 여유가 거의 남지 않으므로 컨텍스트 창을 적당히 유지하거나 Gemma 4 26B A4B(16–19 GB)를 선택하십시오. 이는 토큰당 약 4B 파라미터를 활성화하는 전문가 혼합(MoE) 모델이며 같은 Featherless 목록에서 1286.9 Elo였습니다.',
        ],
        columns: [
          '항목',
          '내용',
        ],
        rows: [
          {
            '항목': '적합한 용도',
            '내용': '24 GB GPU의 산문',
          },
          {
            '항목': '가중치(Ollama)',
            '내용': '19–20 GB',
          },
          {
            '항목': '컨텍스트',
            '내용': '256K 토큰',
          },
          {
            '항목': '라이선스',
            '내용': 'Apache 2.0',
          },
          {
            '항목': 'Ollama 명령',
            '내용': 'ollama run gemma4:31b',
          },
        ],
      },
      qwen27: {
        id: 'qwen3-8-27b',
        title: '#2 Qwen3.8-27B: 같은 하드웨어의 장편 프로젝트용',
        content: [
          '**Qwen3.8-27B는 24 GB GPU에서 장편 프로젝트를 할 때의 추천입니다.** 27B 밀집 모델로 Ollama에서 18 GB이며, 기본 컨텍스트 262,144 토큰(모델 카드에 따르면 1,000,000 토큰까지 확장 가능)을 Apache 2.0으로 제공합니다.',
          'Alibaba는 코딩, 에이전트, 리서치용으로 포지셔닝하며 모델 카드에는 창작 글쓰기 언급이 없고 창작 점수도 공개되어 있지 않으므로 산문 품질은 검증되지 않은 것으로 보십시오. 사고 모드는 기본으로 켜져 있으므로 소설을 쓸 때는 끄십시오.',
        ],
        columns: [
          '항목',
          '내용',
        ],
        rows: [
          {
            '항목': '적합한 용도',
            '내용': '장편 소설 프로젝트, 지시 이행',
          },
          {
            '항목': '가중치(Ollama)',
            '내용': '18 GB',
          },
          {
            '항목': '컨텍스트',
            '내용': '256K 토큰',
          },
          {
            '항목': '라이선스',
            '내용': 'Apache 2.0',
          },
          {
            '항목': 'Ollama 명령',
            '내용': 'ollama run qwen3.8:27b',
          },
        ],
      },
      smallerTiers: {
        id: 'smaller-tiers',
        title: '#3 8·12·16 GB 구간 추천',
        content: [
          '**24 GB 미만에서는 선택지가 적고 검증도 덜 되어 있으므로 결정하기 전에 테스트하십시오.** 작은 모델은 일반적으로 긴 장면의 일관성을 큰 모델만큼 유지하지 못합니다.',
        ],
        items: [
          '**8 GB: Qwen3.5 9B**(`qwen3.5:9b`, 6.6–7.6 GB, 256K 컨텍스트). Ollama의 8 GB급에서 비교적 최근에 나온 모델입니다. 창작 점수는 공개되어 있지 않으므로 본인의 장면으로 시험하십시오.',
          '**12 GB: Gemma 4 12B**(`gemma4:12b`, 7.7–8.0 GB, 256K 컨텍스트, Apache 2.0). Featherless는 EQ-Bench Creative Writing v3에서 루브릭 15.71, 1270.4 Elo로 보고합니다.',
          '**16 GB: Mistral Small 3 24B**(`mistral-small:24b`, 14 GB, 32K 컨텍스트, Apache 2.0). 16 GB에 들어가는 최신 모델이 적어서 목록에 남긴 오래된 모델입니다. 컨텍스트용으로 약 2 GB만 남으므로 프롬프트를 짧게 유지하십시오.',
        ],
      },
      llama70: {
        id: 'llama-3-3-70b',
        title: '#4 Llama 3.3 70B: 48 GB 이상의 기준 모델',
        content: [
          '**Llama 3.3 70B(`llama3.3:70b`, 43 GB, 128K 컨텍스트)는 이 가이드에서 가장 큰 모델이며 48 GB GPU 구성 또는 통합 메모리 64 GB Mac이 필요합니다.** Meta가 2024년 12월에 Meta Llama 3.3 Community License로 공개했습니다. 이는 자체 라이선스이며 OSI 오픈소스 라이선스가 아닙니다.',
          '이 페이지의 이전 버전에서는 산문 1위로 꼽았지만 지금은 그렇게 하지 않습니다. 확인한 목록에는 이 모델의 창작 점수가 없고 24 GB에 들어가는 더 새로운 모델에는 점수가 있으며, 최신 Llama 릴리스는 EQ-Bench에서 낮은 점수를 받았습니다(evals.report 목록에서 Llama 4 Maverick 927, Llama 4 Scout 883). 메모리가 있고 문체가 마음에 든다면 계속 사용해도 좋습니다.',
        ],
      },
      communityModels: {
        id: 'community-models',
        title: '#5 커뮤니티 모델과 저거부 모델',
        content: [
          '**커뮤니티 소설 모델은 이제 기본 선택이 아니라 두 번째 계층입니다.** 상업적으로 사용하기 전에 각 모델의 라이선스를 확인하십시오.',
        ],
        items: [
          '**Hermes 4.3 36B**(Nous Research, Apache 2.0): ByteDance Seed-OSS-36B-Base를 기반으로 하며 Hugging Face에 4~8비트 GGUF 파일이 있습니다. Nous는 자체 RefusalBench에서 프롬프트의 74.60%(비추론)와 72.29%(추론)에 응답했다고 보고합니다(개발사 보고 수치이며 높을수록 거부가 적음). instruct 모델이 정당한 소설 장면을 거절할 때 사용하고, 산문용으로는 모델 카드의 0.6보다 온도를 높이십시오.',
          '**Fimbulvetr-11B-v2**(Sao10K): Solar 기반 모델이며 라이선스는 CC BY-NC 4.0이므로 비상업적 사용만 가능합니다. 모델 카드는 SillyTavern 프리셋을 권장합니다. 이 모델의 창작 벤치마크 점수는 찾지 못했습니다.',
          '**Midnight-Rose-70B**(sophosympatheia): Llama 2 70B 기반 병합 모델로, Llama 2 라이선스에 상속된 제한이 추가됩니다. 모델 카드는 컨텍스트를 약 6144 토큰으로 권장합니다. Llama 3.3 모델이 아닙니다.',
          '오래된 모델에 GGUF 변환본이 있다면 LM Studio에서 불러오거나 `ollama run hf.co/<user>/<repo>`로 불러올 수 있습니다. 먼저 해당 저장소의 라이선스를 확인하십시오.',
          '거부 동작, 윤리, 한계에 대해서는 [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics)를 참고하십시오. 로컬에서 실행해도 법은 달라지지 않으며 게시하는 내용에 대한 책임은 작성자에게 있습니다.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: '로컬 모델과 클라우드 모델 비교',
        content: [
          '**폐쇄형 클라우드 모델은 창작 글쓰기 리더보드에서 더 높은 점수를 받고, 로컬 모델은 개인정보 보호, 비용, 제어권에서 앞섭니다.**',
        ],
        items: [
          '[evals.report](https://evals.report/benchmarks/eq-bench?tab=scores)로 본 EQ-Bench Creative Writing v3 목록(데이터 기준일 2026-11-15)에서 Claude Opus 4.7이 2206 Elo로 1위, GPT-5.5가 2035로 뒤를 잇습니다.',
          '그 목록에서 오픈 웨이트 최고 항목은 Kimi K2.6의 1782 Elo입니다. Featherless는 이 수준에서 추천하는 오픈 모델의 크기를 753B(GLM-5.3), 763B(DeepSeek-V4.1-Flash), 2.8T(Kimi K3) 파라미터로 제시하며, 이는 이 가이드의 8~48 GB 구간을 훨씬 넘습니다.',
          '**로컬이 맞는 경우:** 미발표 원고, NDA 하의 고객 작업, 오프라인 작업, 토큰당 비용이 중요한 프로젝트.',
          '**하이브리드 워크플로:** 초안과 브레인스토밍은 로컬에서 하고, 클라우드 모델은 민감하지 않은 문장 다듬기에만 사용하십시오. 먼저 제공업체의 데이터 약관을 확인하십시오.',
        ],
      },
      promptingSettings: {
        id: 'prompting-settings',
        title: '로컬 LLM 창작 글쓰기를 개선하는 설정과 프롬프트',
        content: [
          '모델을 바꾸는 것보다 다음 다섯 가지 습관이 결과를 더 크게 바꿉니다.',
        ],
        numberedItems: [
          '**샘플링은 코드용이 아니라 산문용으로 설정합니다.** 개발사 기본값은 Gemma 4가 온도 1.0, top-p 0.95, top-k 64, Qwen3.8이 사고 모드에서 1.0 / 0.95 / top-k 20, 비사고 모드에서 0.7 / 0.8 / top-k 20, Hermes 4.3이 0.6 / 0.95 / top-k 20입니다. 편집 권장 출발점으로 산문은 온도 0.9–1.1, 간결한 대화는 0.7–0.85를 시도하십시오.',
          '**소설에서는 사고 모드를 끕니다.** 추론 모델은 쓰기 전에 계획을 세우므로 장면이 조립된 것처럼 느껴질 수 있습니다. Qwen3.8은 기본적으로 사고합니다. Ollama API에서는 `think`를 `false`로 설정하거나 프런트엔드의 사고 전환 기능을 사용하십시오.',
          '**문체를 구체적으로 지정합니다.** "2인칭, 현재 시제, 짧은 문장, 부사 없이 써라"가 "문학적인 소설을 써라"보다 효과적입니다. 작가 이름은 문체의 힌트일 뿐이며, 생존 작가의 표현을 그대로 따라 한 글은 게시하지 마십시오.',
          '**고정된 시스템 프롬프트를 사용합니다.** 시점, 시제, 장르, 인물 시트, 문체 샘플을 넣고 세션이 시작될 때마다 다시 붙여 넣으십시오.',
          '**구간별로 쓰고 컨텍스트 창을 늘립니다.** 한 번에 약 500단어씩 생성하고 새 세션마다 짧은 줄거리 요약을 다시 알려 주십시오. 모델은 컨텍스트에 들어가는 내용만 볼 수 있기 때문입니다. Ollama의 기본 컨텍스트는 제한적이므로 대화형 세션에서 `/set parameter num_ctx 16384`를 입력하십시오. 값이 클수록 메모리를 더 사용합니다.',
        ],
      },
      poetryTips: {
        id: 'poetry-writing',
        title: '시에 적합한 오픈 웨이트 모델',
        content: [
          '**시를 따로 채점하는 리더보드는 없으므로 시 추천도 위의 메모리 구간별 순위를 따릅니다.** 소네트, 하이쿠, 빌라넬 같은 엄격한 형식에서는 온도를 0.7–0.85로 낮추십시오(편집 권장 범위). 높은 온도는 운율과 압운을 깨뜨리기 쉽기 때문입니다. 자유시에는 산문 범위를 적용합니다.',
        ],
        items: [
          '**24 GB:** Gemma 4 31B 또는 Qwen3.8-27B. 같은 짧은 시 프롬프트를 둘 다에 주고 목소리가 더 마음에 드는 쪽을 남기십시오.',
          '**더 작은 구간:** Gemma 4 12B(12 GB) 또는 Qwen3.5 9B(8 GB).',
          '**엄격한 형식:** 모델은 음절이 아니라 토큰 단위로 처리하므로 음절 수와 압운은 직접 확인하십시오.',
          '**형식을 명시하십시오:** "가을비에 대한 하이쿠(5-7-5 음절)를 써라" 또는 "상실에 대한 셰익스피어식 소네트(ABAB CDCD EFEF GG, 약강 5보격)를 써라". "사랑에 대한 시를 써라" 같은 모호한 프롬프트는 평범한 자유시를 만듭니다.',
        ],
      },
      promptExamples: {
        id: 'prompt-examples',
        title: '나쁜 프롬프트와 좋은 프롬프트',
        items: [
          '❌ "판타지 이야기를 써라" → ✅ "밀수업자가 용과 고대 유물을 두고 협상하는 500단어 분량의 판타지 장면을 써라. 감각적 묘사를 쓰고 대화에 긴장감을 유지하라."',
          '❌ "재미있는 걸 써라" → ✅ "실패한 강도 작전의 오프닝 장면을 300단어로 써라. 주인공은 작전 도중 동료의 배신을 알게 된다. 속도에 맞게 짧고 날카로운 문장을 써라."',
          '❌ "미스터리를 써라" → ✅ "이 탐정 장면을 이어 써라: [이전 글]. 탐정은 단서 하나로 용의자가 거짓말을 한다는 것을 깨닫는다. 모순을 알아채는 과정을 설명하지 말고 장면으로 보여 줘라."',
          '❌ "더 재미있게 만들어라" → ✅ "앞 단락을 누아르 소설풍으로 다시 써라: 절제된 대화, 냉소적인 내면 독백, 구체적인 감각 묘사(소리, 냄새, 질감)."',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '창작 글쓰기에 가장 좋은 로컬 LLM은 무엇인가요?',
            a: '이 순위에서는 Gemma 4 31B와 Qwen3.8-27B가 가장 좋은 로컬 출발점이며 둘 다 24 GB GPU 한 장에 들어갑니다(가중치 19–20 GB와 18 GB). Gemma 4 31B는 EQ-Bench Creative Writing v3 점수가 공개되어 있어 산문용으로, Qwen3.8-27B는 장편 프로젝트용으로 추천합니다. 더 작은 카드에서는 Gemma 4 12B(12 GB) 또는 Mistral Small 3 24B(16 GB)를 사용하십시오. 편집 순위이므로 후보 두 개를 본인의 장면으로 테스트하십시오.',
          },
          {
            q: '소설과 이야기 쓰기에 가장 좋은 로컬 AI(LLM)는 무엇인가요?',
            a: '컨텍스트용 여유를 남기고 메모리에 들어가는 가장 큰 모델을 고르십시오. 24 GB에서는 산문에 Gemma 4 31B, 256K 컨텍스트의 Qwen3.8-27B는 장편 프로젝트에 적합하며, 48 GB 이상에서는 Llama 3.3 70B가 기준입니다. 병목은 대개 구조입니다. 개요, 인물 시트, 짧은 챕터 요약이 긴 프로젝트의 일관성을 유지해 줍니다.',
          },
          {
            q: '창작 글쓰기에 가장 좋은 Ollama 모델은 무엇인가요?',
            a: '24 GB에서는 산문에 `ollama run gemma4:31b`, 장편에 `ollama run qwen3.8:27b`를 사용하십시오. 12 GB는 `gemma4:12b`, 16 GB는 `mistral-small:24b`, 8 GB는 `qwen3.5:9b`, 48 GB 이상은 `llama3.3:70b`입니다. 긴 장면에는 `num_ctx`를 높이고 소설에서는 사고를 끄십시오.',
          },
          {
            q: 'VRAM이 8 GB뿐일 때 글쓰기에 맞는 로컬 LLM은 무엇인가요?',
            a: 'Qwen3.5 9B(6.6–7.6 GB, 256K 컨텍스트)가 Ollama의 8 GB급에서 비교적 최근에 나온 모델입니다. 창작 점수는 공개되어 있지 않으므로 본인의 테스트 장면으로 확인하고, 작은 모델은 긴 장면을 24 GB급 모델만큼 안정적으로 유지하지 못할 수 있다고 생각하십시오.',
          },
          {
            q: '시에 가장 좋은 오픈 웨이트 모델은 무엇인가요?',
            a: '시를 따로 채점하는 리더보드가 없으므로 메모리 구간별 순위를 따르십시오. 24 GB는 Gemma 4 31B 또는 Qwen3.8-27B, 12 GB는 Gemma 4 12B, 8 GB는 Qwen3.5 9B입니다. 소네트나 하이쿠 같은 엄격한 형식에서는 온도를 0.7–0.85로 낮추고 음절과 압운을 직접 확인하십시오.',
          },
          {
            q: '창작 글쓰기를 위해 LM Studio에는 어떤 모델을 불러와야 하나요?',
            a: '같은 순위가 적용됩니다. LM Studio와 Ollama는 모두 양자화된 GGUF 파일을 실행하므로 LM Studio 전용 모델은 따로 없습니다. LM Studio의 모델 브라우저에서 모델 이름을 검색해 메모리에 들어가는 빌드를 불러오십시오.',
          },
          {
            q: '모델이 이야기의 앞부분을 기억하나요?',
            a: '컨텍스트 창 안에서만 기억합니다. 이 가이드의 모델은 32K~256K 토큰을 제공하지만 컨텍스트가 길수록 메모리를 더 쓰고, 창 밖의 내용은 잊어버립니다. 긴 프로젝트에서는 세션마다 짧은 줄거리 요약과 인물 시트로 시작하십시오.',
          },
          {
            q: '로컬 LLM이 소설 쓰기에서 Claude나 ChatGPT를 대체할 수 있나요?',
            a: '창작 글쓰기 리더보드에서는 어렵습니다. evals.report로 본 EQ-Bench Creative Writing v3 목록에서는 폐쇄형 모델이 앞섭니다(Claude Opus 4.7 2206 Elo, GPT-5.5 2035). 그래도 24 GB 로컬 모델은 초안 작성에는 충분할 수 있고 원고를 내 기기에 두게 해 줍니다. 샘플링 설정과 좋은 시스템 프롬프트가 실제 격차의 일부를 줄여 줍니다.',
          },
          {
            q: '양자화가 창작 글쓰기에서 눈에 띄나요?',
            a: '눈에 띌 수 있습니다. 비트 수가 낮은 빌드는 정밀도를 조금 잃기 때문입니다. 창작 글쓰기에 관한 전용 연구는 인용하지 않습니다. Ollama의 기본 빌드는 4비트이며, 메모리 여유가 있다면 같은 장면에서 더 높은 비트 빌드와 4비트 빌드를 비교해 마음에 드는 쪽을 남기십시오.',
          },
          {
            q: '창작 글쓰기에는 어떤 온도를 써야 하나요?',
            a: '편집 권장 출발점은 산문 0.9–1.1, 간결한 대화나 엄격한 시 형식은 0.7–0.85입니다. 개발사 기본값이 좋은 기준이 됩니다. Google은 Gemma 4에 1.0(top-p 0.95, top-k 64)을, Alibaba는 Qwen3.8에 사고 모드 1.0, 비사고 모드 0.7을 제시합니다. 소설에서는 사고 모드를 끄십시오.',
          },
          {
            q: '로컬 LLM의 출력을 상업적으로 사용할 수 있나요?',
            a: '라이선스에 따라 다릅니다. Gemma 4, Qwen3.8, Mistral Small 3, Hermes 4.3은 Apache 2.0으로 표기되어 있고, Llama 3.3은 자체 Meta Llama 3.3 Community License를 사용하며, Fimbulvetr-11B는 CC BY-NC 4.0(비상업용)입니다. 실제로 사용하는 빌드의 모델 카드에서 라이선스를 확인하십시오. 법률 자문이 아닙니다.',
          },
          {
            q: 'Fimbulvetr와 Midnight-Rose는 아직 쓸 만한가요?',
            a: '문체가 마음에 들 때만 그렇습니다. Fimbulvetr-11B-v2는 비상업 라이선스의 Solar 기반 모델이고 Midnight-Rose-70B는 Llama 2 70B 기반 병합 모델입니다. 둘 다 이 가이드의 2026년 모델보다 앞선 모델이며 창작 벤치마크 점수는 찾지 못했습니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Ollama 라이브러리: Gemma 4](https://ollama.com/library/gemma4) -- 태그, 다운로드 크기, 컨텍스트 창',
          '[Ollama 라이브러리: Qwen3.8](https://ollama.com/library/qwen3.8) 및 [Qwen3.5](https://ollama.com/library/qwen3.5) -- 태그, 크기, 컨텍스트 창',
          '[Ollama 라이브러리: Mistral Small](https://ollama.com/library/mistral-small) 및 [Llama 3.3](https://ollama.com/library/llama3.3) -- 태그, 크기, 컨텍스트, 라이선스 안내',
          '[Hugging Face: Gemma 4 31B 모델 카드](https://huggingface.co/google/gemma-4-31B-it) 및 [Gemma 4 12B](https://huggingface.co/google/gemma-4-12B-it) -- 라이선스, 컨텍스트 길이, 샘플링 기본값',
          '[Hugging Face: Qwen3.8-27B 모델 카드](https://huggingface.co/Qwen/Qwen3.8-27B) -- 라이선스, 기본 컨텍스트, 권장 샘플링',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) -- 기반 모델, 라이선스, RefusalBench 수치, GGUF 파일',
          '[Hugging Face: Fimbulvetr-11B-v2](https://huggingface.co/Sao10K/Fimbulvetr-11B-v2) 및 [Midnight-Rose-70B](https://huggingface.co/sophosympatheia/Midnight-Rose-70B-v2.0.3) -- 기반 모델과 라이선스',
          '[EQ-Bench Creative Writing v3](https://eqbench.com/creative_writing.html) 및 [evals.report의 EQ-Bench 점수](https://evals.report/benchmarks/eq-bench?tab=scores) -- 리더보드 수치(데이터 기준일 2026-11-15)',
          '[Featherless: 창작 글쓰기를 위한 최고의 오픈 모델](https://featherless.ai/blog/best-ai-for-creative-writing-2026) -- Gemma 4의 EQ-Bench 수치와 오픈 모델 크기(2026-09-17자)',
          '[Ollama 문서: thinking](https://docs.ollama.com/capabilities/thinking) -- `think` 매개변수',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '글쓰기용 로컬 모델을 고르고 사용할 때의 흔한 실수',
        items: [
          '**일반 벤치마크 순위로 고르기.** 코딩이나 추론 리더보드는 산문 품질에 대해 알려 주는 바가 적습니다. EQ-Bench 같은 창작 목록을 보고 본인의 장면으로 테스트하십시오.',
          '**코딩용 샘플링 사용하기.** 온도 0.2–0.4는 밋밋한 산문이 되기 쉽고, 창작 글쓰기에는 대략 0.9–1.1이 필요합니다(편집 권장 범위).',
          '**사고 모드를 켜 둔 채 쓰기.** 계획 중심의 출력은 조립된 것처럼 읽힐 수 있습니다. 소설에서는 끄십시오.',
          '**컨텍스트 메모리 무시하기.** 19–20 GB 모델은 컨텍스트 창을 늘리면 24 GB 카드에서 여유가 거의 없습니다.',
          '**빈약한 프롬프트.** "이야기를 써라"는 평범한 결과를 냅니다. 시점, 시제, 분량, 인물 시트, 명확한 제약을 더하십시오.',
          '**채팅 창 안에서 고치기.** 생성은 채팅에서, 퇴고는 텍스트 편집기에서 하십시오. 산문을 직접 고쳐야 문체가 내 것으로 남습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) -- 모든 용도의 종합 순위',
          '[로컬 LLM에는 VRAM이 얼마나 필요한가요?](/ko/local-llms/how-much-vram-local-llm) -- 모델과 양자화별 메모리 요구량 계산',
          '[로컬 LLM 파인튜닝 가이드](/ko/local-llms/fine-tuning-local-llms-lora) -- 일반 소비자용 하드웨어에서 LoRA 파인튜닝이 작동하는 방식',
          '[Ollama와 LM Studio 비교](/ko/local-llms/ollama-vs-lm-studio) -- 창작 워크플로에 맞는 도구',
          '[온도와 Top-P 설명](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity) -- 창작 출력 제어',
          '[창작 글쓰기용 로컬 LLM: 확장 가이드](/ko/power-local-llm/best-local-llm-creative-writing) -- 프런트엔드, 세계관 구축, 저거부 모델을 VRAM 구간별로 설명',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics) -- 거부 동작과 한계',
        ],
      },
    },
  },
};
