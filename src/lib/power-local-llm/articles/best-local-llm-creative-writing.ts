// Power Local LLM — Best Local LLMs for Creative Writing (2026): Fiction, Dialogue & Worldbuilding
// Slug: best-local-llm-creative-writing

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: 'Best Local LLMs for Creative Writing (2026): Fiction, Dialogue & Worldbuilding',
    seoTitle: 'Best Local LLM for Creative Writing (2026): 6 Picks',
    intro: 'Creative writing is the workload where local LLMs win on more than privacy and cost: no refusals you cannot configure, no per-token bill, and drafts that never leave your machine. This guide ranks the open-weight models worth running in 2026 — Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, plus the Hermes 4.3 and Dolphin 3.0 low-refusal fine-tunes — by hardware tier, with Ollama pull commands and sampling settings for prose.',
    metaDescription: 'Gemma 4 31B and Qwen3.8-27B fit one 24 GB GPU. See the best local LLM for fiction, dialogue and worldbuilding per VRAM tier, with Ollama commands.',
    heroImage: '/images/best-local-llm-creative-writing-hero-en.webp',
    twitterDescription: 'Best local LLMs for creative writing in 2026, by VRAM tier: Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, Hermes 4.3. Ollama commands and sampling settings included.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: 'Fiction writers, screenwriters, game designers, worldbuilders, and roleplay enthusiasts running local LLMs for creative work where privacy, voice consistency, and willingness to handle mature themes matter more than benchmark scores.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local LLM creative writing',
    targetKeywords: [
      'best local llm for creative writing',
      'best local llm for writing fiction',
      'best ollama model for creative writing',
      'local llm for story writing',
      'best local llm for worldbuilding',
      'uncensored local llm',
    ],
    leadAnswerBlock: '**Gemma 4 31B and Qwen3.8-27B are the best local starting points for creative writing in 2026, and both run on a single 24 GB GPU (about 18–20 GB of weights each).** Gemma 4 31B is the prose pick: it is the only model in this set with its own published EQ-Bench Creative Writing v3 score. Qwen3.8-27B is the long-context and instruction-following pick (256K tokens). On 12 GB, use Gemma 4 12B; on 16 GB, Mistral Small 3 24B; on 48 GB or more, Llama 3.3 70B. When an instruct model refuses a scene you framed as fiction, Hermes 4.3 36B is the low-refusal option. Use temperature 0.9–1.1, not coding-style 0.2–0.4. Closed cloud models still score higher on creative-writing benchmarks; local models win on privacy, cost, and control.**',
    quickAnswerTop: {
      en: {
        question: 'Which local LLM is best for creative writing?',
        answer: 'Gemma 4 31B and Qwen3.8-27B are the best local picks for creative writing in 2026. Both fit a 24 GB GPU (about 18–20 GB of weights). Gemma 4 31B is the prose pick; Qwen3.8-27B is the long-context pick. On 12 GB use Gemma 4 12B, on 16 GB Mistral Small 3 24B, on 48 GB or more Llama 3.3 70B. For fewer refusals, use Hermes 4.3 36B.',
        bullets: [
          '24 GB GPU: Gemma 4 31B (~19–20 GB) or Qwen3.8-27B (~18 GB).',
          '12 GB GPU: Gemma 4 12B (~8 GB) with room for long context.',
          '16 GB GPU: Mistral Small 3 24B (~14 GB), 32K context.',
          '48 GB or more: Llama 3.3 70B (~43 GB at Q4_K_M).',
          'Prose sampling: temperature 0.9–1.1, top-p 0.92–0.95, thinking mode off.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Key Takeaways',
        anchor: '#key-takeaways',
      },
      {
        label: 'Quick Facts',
        anchor: '#quick-facts',
      },
      {
        label: 'How These Picks Were Made',
        anchor: '#how-we-tested',
      },
      {
        label: 'Best Model by VRAM Tier',
        anchor: '#hardware',
      },
      {
        label: 'Head-to-Head Comparison',
        anchor: '#comparison',
      },
      {
        label: 'Per-Model Verdicts',
        anchor: '#verdicts',
      },
      {
        label: 'Best Ollama Models for Creative Writing',
        anchor: '#ollama',
      },
      {
        label: 'Local vs Cloud Models for Writing',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Temperature and Top-P for Creative Work',
        anchor: '#sampling',
      },
      {
        label: 'Uncensored Models: What They Are',
        anchor: '#uncensored',
      },
      {
        label: 'Frontends for Creative Work',
        anchor: '#frontends',
      },
      {
        label: 'Decision: Pick Your Model',
        anchor: '#decision',
      },
      {
        label: 'Common Mistakes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Sources',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Related Reading',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 31B is the prose pick for a 24 GB GPU.** About 19–20 GB of weights, 256K context, Apache 2.0, and the only model in this set with its own published EQ-Bench Creative Writing v3 score (rubric 16.01, Elo 1407.6).',
          '**Qwen3.8-27B is the long-context and instruction-following pick.** About 18 GB on Ollama, 256K context, Apache 2.0. No creative-writing score is published for it yet, so treat prose quality as unverified and test it on your own scenes.',
          '**Match the model to your VRAM, not to a leaderboard.** 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B or Qwen3.8-27B. 48 GB or more: Llama 3.3 70B.',
          '**Hermes 4.3 36B is the low-refusal pick.** Apache 2.0, built on ByteDance Seed-OSS-36B, with Nous Research describing sharply reduced refusals. Dolphin 3.0 is the older alternative.',
          '**Sampling matters more than the model switch.** Temperature 0.9–1.1 and top-p 0.92–0.95 for prose; turn thinking mode off for fiction. Coding-style settings (0.2–0.4) produce flat prose.',
          '**Closed cloud models still lead the creative-writing benchmarks.** The top EQ-Bench Creative Writing v3 entry is Claude Opus 4.7 at 2,206 Elo; the best open-weight entry listed is Kimi K2.6 at 1,782, far beyond consumer hardware. Local wins on privacy, cost, and control.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**24 GB GPU or 32 GB Mac:** Gemma 4 31B (`gemma4:31b`, 19–20 GB) or Qwen3.8-27B (`qwen3.8:27b`, 18 GB). Both Apache 2.0, both 256K context.',
          '**12 GB GPU:** Gemma 4 12B (`gemma4:12b`, 7.7–8.0 GB), 256K context.',
          '**16 GB GPU:** Mistral Small 3 24B (`mistral-small:24b`, 14 GB), 32K context, Apache 2.0. Released 2025.',
          '**48 GB or more:** Llama 3.3 70B (`llama3.3:70b`, about 43 GB at Q4_K_M). Released December 2024; Meta community license.',
          '**Low-refusal fine-tunes:** Hermes 4.3 36B (Apache 2.0) and Dolphin 3.0 (Mistral 24B variant, February 2025).',
          '**Prose sampling baseline:** temperature 1.0, top-p 0.95, min-p 0.05; add a repeat or DRY penalty if scenes loop.',
          '**Memory rule:** Ollama sizes are weights only. Add 2–6 GB for the KV cache once you raise the context window for long scenes.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'How These Picks Were Made',
        content: '**This ranking is an editorial synthesis of published sources, not a new PromptQuorum test run.** We compared official model cards, the Ollama library (sizes, context, tags), and public creative-writing leaderboards, then matched each model to a hardware tier.',
        items: [
          '**Sizes and context:** read from the Ollama library pages for [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Mistral Small](https://ollama.com/library/mistral-small), and the Hugging Face model cards. Weights only; context memory is extra.',
          '**Creative-writing scores:** EQ-Bench Creative Writing v3 and the Open Writing Leaderboard, as mirrored by third-party trackers. Gemma 4 31B has its own score; Qwen3.8-27B does not yet. Where a score belongs to a sibling model, we say so.',
          '**Release dates:** Qwen3.8-27B (August 2026), Gemma 4 (July 2026), Mistral Small 3 (2025), Llama 3.3 70B (December 2024), Hermes 4.3 36B (December 2025), Dolphin 3.0 (February 2025).',
          '**What we did not do:** we have not run a fresh scored prompt set on these models. The per-model verdicts below follow the cited sources and the model cards; "best for" labels are recommendations, not measured results.',
          'For prompting techniques that improve creative output on any model, see [temperature and top-p control](/prompt-engineering/temperature-and-top-p-control-ai-creativity) and [persona prompting](/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Creative-writing benchmarks are subjective and models disagree between boards. Treat every pick here as a starting hypothesis: run the same three scenes through two candidates and keep the one whose voice you prefer.',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Best Local Model by VRAM Tier',
        content: '**Pick by memory first: the model has to fit with room left for context.** Sizes are Ollama download sizes at the default 4-bit quantization; add 2–6 GB for the KV cache on long scenes.',
        columns: [
          'Your memory',
          'Model',
          'Weights',
          'Context',
        ],
        rows: [
          {
            'Your memory': '8 GB GPU',
            Model: 'Qwen3.5 9B (`qwen3.5:9b`)',
            Weights: '6.6–7.6 GB',
            Context: '256K',
          },
          {
            'Your memory': '12 GB GPU',
            Model: 'Gemma 4 12B (`gemma4:12b`)',
            Weights: '7.7–8.0 GB',
            Context: '256K',
          },
          {
            'Your memory': '16 GB GPU',
            Model: 'Mistral Small 3 24B (`mistral-small:24b`)',
            Weights: '14 GB',
            Context: '32K',
          },
          {
            'Your memory': '24 GB GPU / 32 GB Mac',
            Model: 'Gemma 4 31B (`gemma4:31b`)',
            Weights: '19–20 GB',
            Context: '256K',
          },
          {
            'Your memory': '24 GB GPU / 32 GB Mac',
            Model: 'Qwen3.8-27B (`qwen3.8:27b`)',
            Weights: '18 GB',
            Context: '256K',
          },
          {
            'Your memory': '24 GB GPU, faster output',
            Model: 'Gemma 4 26B-A4B (`gemma4:26b`)',
            Weights: '16–19 GB',
            Context: '256K',
          },
          {
            'Your memory': '48 GB or more',
            Model: 'Llama 3.3 70B (`llama3.3:70b`)',
            Weights: '~43 GB',
            Context: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'On a 32 GB Mac, unified memory is shared with macOS. Plan for roughly 24 GB usable for the model plus context, which keeps Gemma 4 31B and Qwen3.8-27B comfortable.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Head-to-Head: Local Models for Creative Writing',
        content: '**No single model wins every task; pick by hardware tier and by what is load-bearing in your work.** The table lists the models in this guide with size, weights, and release date.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Gemma 4 31B and Qwen3.8-27B are the best local picks for creative writing on a 24 GB GPU; Gemma 4 12B, Mistral Small 3 24B, and Llama 3.3 70B cover the 12 GB, 16 GB, and 48 GB tiers; Hermes 4.3 36B is the low-refusal option.',
          },
          {
            type: 'plain-terms',
            text: 'Choose the biggest model that fits your memory with room for context. On a 24 GB card that is Gemma 4 31B for prose or Qwen3.8-27B for long projects. Add a low-refusal fine-tune only if the instruct model refuses scenes you need to write.',
          },
        ],
        columns: [
          'Model',
          'Size',
          'Weights (Ollama)',
          'Released',
          'Best for',
        ],
        rows: [
          {
            Model: 'Gemma 4 31B',
            Size: '31B dense',
            'Weights (Ollama)': '19–20 GB',
            Released: 'Jul 2026',
            'Best for': 'Prose on 24 GB; has own EQ-Bench score',
          },
          {
            Model: 'Qwen3.8-27B',
            Size: '27B dense',
            'Weights (Ollama)': '18 GB',
            Released: 'Aug 2026',
            'Best for': 'Long projects, instruction-following',
          },
          {
            Model: 'Gemma 4 26B-A4B',
            Size: '26B MoE, 4B active',
            'Weights (Ollama)': '16–19 GB',
            Released: 'Jul 2026',
            'Best for': 'Faster generation on 24 GB',
          },
          {
            Model: 'Gemma 4 12B',
            Size: '12B',
            'Weights (Ollama)': '7.7–8.0 GB',
            Released: 'Jul 2026',
            'Best for': '12 GB GPUs, long context',
          },
          {
            Model: 'Mistral Small 3 24B',
            Size: '24B dense',
            'Weights (Ollama)': '14 GB',
            Released: '2025',
            'Best for': '16 GB GPUs; older but proven',
          },
          {
            Model: 'Llama 3.3 70B',
            Size: '70B dense',
            'Weights (Ollama)': '~43 GB',
            Released: 'Dec 2024',
            'Best for': '48 GB or more; older reference',
          },
          {
            Model: 'Hermes 4.3 36B',
            Size: '36B dense',
            'Weights (Ollama)': '~21–23 GB (est.)',
            Released: 'Dec 2025',
            'Best for': 'Fewer refusals, Apache 2.0',
          },
          {
            Model: 'Dolphin 3.0',
            Size: '24B (Mistral variant)',
            'Weights (Ollama)': '~14 GB',
            Released: 'Feb 2025',
            'Best for': 'Older low-refusal option',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Two-model setup is the common pattern: one instruct model as the daily driver, plus Hermes 4.3 36B for scenes the instruct model refuses. Both can sit in `ollama list` at the same time.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Per-Model Verdicts',
        items: [
          '**Gemma 4 31B** — prose pick for 24 GB. It is the only model in this set with its own EQ-Bench Creative Writing v3 result (rubric 16.01, Elo 1407.6, as reported by a third-party tracker). 256K context and Apache 2.0. Google lists temperature 1.0, top-p 0.95, top-k 64 as its default.',
          '**Qwen3.8-27B** — long-project pick. 262,144 tokens of native context (extensible to 1M with YaRN), Apache 2.0, about 18 GB on Ollama. Alibaba positions it for coding, agents, and research; the model card says nothing about creative writing and no creative score is published, so verify voice on your own scenes. Thinking mode is on by default; turn it off for prose.',
          '**Gemma 4 26B-A4B and 12B** — same family, different trade-offs. The 26B mixture-of-experts model activates about 4B parameters per token, so it generates faster than the 31B at similar memory. The 12B fits 12 GB cards and still offers 256K context.',
          '**Mistral Small 3 24B** — the 16 GB option. Apache 2.0, about 14 GB, 32K context. It is a 2025 model and the oldest recommendation here other than Llama; it stays on the list because few newer models fit 16 GB. Its successor, Mistral Small 4 (March 2026, Apache 2.0), is a 119B mixture-of-experts model with about 6B active parameters, far beyond 16 GB.',
          '**Llama 3.3 70B** — the 48 GB reference. A December 2024 model under the Meta community license. For machines with 48 GB or more it remains a strong, widely supported choice; below that tier it is not practical.',
          '**Hermes 4.3 36B** — low-refusal pick. Built on ByteDance Seed-OSS-36B under Apache 2.0, with GGUF quantizations on Hugging Face. Nous Research describes sharply reduced refusals; Hermes 4.3 answered 72–75% of prompts on its own RefusalBench. Its card suggests temperature 0.6, top-p 0.95, top-k 20; raise temperature for prose.',
          '**Dolphin 3.0** — older low-refusal option. The newest Dolphin generation we could confirm is Dolphin 3.0 (February 2025, including a Mistral 24B variant). Use it when you want a Mistral-family uncensored model; Hermes 4.3 is the more recent choice.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Voice consistency is the metric most writers underweight. A model that writes one brilliant paragraph but loses the character\'s speech pattern by paragraph five is worse than a steady one. Test long-session continuity, not just one-shot quality.',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Best Ollama Models for Creative Writing',
        content: '**Five `ollama pull` commands cover every hardware tier in this guide.** Run `ollama list` afterwards to confirm the model is installed.',
        items: [
          '**24 GB, prose:** `ollama pull gemma4:31b` — then `ollama run gemma4:31b`.',
          '**24 GB, long projects:** `ollama pull qwen3.8:27b` — run with `ollama run qwen3.8:27b --think=false` to switch thinking off for prose.',
          '**12 GB:** `ollama pull gemma4:12b`.',
          '**16 GB:** `ollama pull mistral-small:24b`.',
          '**48 GB or more:** `ollama pull llama3.3:70b`.',
          '**Low-refusal fine-tune:** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF` pulls the Hermes 4.3 GGUF from Hugging Face; choose a 4-bit quant on a 24 GB card.',
          '**Raise the context window for long scenes.** Ollama\'s default context is small. In an interactive session type `/set parameter num_ctx 16384`, or set `num_ctx` in a Modelfile. Larger values use more VRAM.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Local vs Cloud Models for Writing',
        content: '**Closed cloud models score higher on creative-writing benchmarks; local models win on privacy, cost, and control.** If a reader searches for "best LLM for writing" without "local", the leaderboards answer differently from this guide.',
        items: [
          '**Closed models lead.** On EQ-Bench Creative Writing v3, as mirrored by [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores), Claude Opus 4.7 sits first at 2,206 Elo, ahead of GPT-5.5 at 2,035.',
          '**The best open-weight entries need a datacenter.** Kimi K2.6 (1,782 Elo) is the highest open-weight entry on that list. Featherless lists GLM-5.3 at 753B parameters and DeepSeek-V4.1-Flash at 763B, which no consumer machine runs.',
          '**What runs on one GPU.** Gemma 4 31B scored 1,407.6 Elo and a 16.01 rubric on the same benchmark. Scores from different trackers do not share a scale, so compare within one list only.',
          '**When local is the right call.** Unpublished manuscripts, client work under NDA, content a cloud provider would refuse, offline work, and projects where a monthly API bill is the constraint.',
          '**Hybrid workflow.** Draft and brainstorm locally; use a cloud model only for non-sensitive final polish if you want the extra quality.',
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperature and Top-P for Creative Work',
        content: '**Creative writing wants higher sampling temperatures than coding does.** Defaults in most chat UIs are tuned for question answering; a temperature of 0.7 produces flat, predictable prose on creative prompts.',
        items: [
          '**Vendor defaults are a floor, not a target.** Google lists temperature 1.0, top-p 0.95, top-k 64 for Gemma 4; Alibaba lists 1.0 / 0.95 / top-k 20 for Qwen3.8 in thinking mode and 0.7 / 0.8 in non-thinking mode; Nous lists 0.6 / 0.95 / top-k 20 for Hermes 4.3. Start there, then tune for prose.',
          '**Baseline for prose:** temperature 0.95–1.0, top-p 0.92–0.95, repeat penalty 1.05–1.1. Adjust per task from here.',
          '**Tight dialogue:** temperature 0.7–0.85, top-p 0.9. Lower temperatures keep character voices consistent across exchanges.',
          '**Lyrical prose and poetry:** temperature 1.0–1.2, top-p 0.95. Higher temperatures unlock unexpected word choices.',
          '**Surreal or genre fiction:** temperature 1.1–1.3, top-p 0.95–0.98.',
          '**Plot-driven scenes (action, mystery, twists):** temperature 0.85–0.95, top-p 0.9. These want direction-following more than novelty.',
          '**Turn thinking mode off for fiction.** Reasoning tokens add latency and tend to produce planned, tidy prose. Qwen3.8 accepts `enable_thinking: false`; in Ollama use `--think=false`.',
          '**min_p (0.05–0.1):** an alternative to top-p that scales the cutoff to the top token\'s probability. It is more permissive on creative prompts without the incoherence of a very high top-p. Use it where your backend exposes the setting.',
          '**DRY repetition penalty (multiplier 0.8, base 1.75, allowed length 2):** catches phrase-level repetition that a standard repeat penalty misses, which helps long sessions. It is available in llama.cpp-based backends such as KoboldCpp; check whether your frontend exposes it.',
          'For a fuller treatment of why these parameters matter and how they interact, see [temperature and top-p control](/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Test sampling on one short scene per model: three runs at each setting, then pick the temperature where the model sounds most alive without losing the prompt. Settings do not transfer perfectly between models.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored Models: What They Are and When They Matter',
        content: '**Uncensored does not mean unethical.** It means the model\'s refusal behaviour has been reduced by fine-tuning, so it follows the prompt instead of declining. The writer is still the author.',
        items: [
          '**What it means technically.** Models such as Hermes 4.3 and Dolphin 3.0 are fine-tunes whose post-training reduces refusals on mature, violent, or morally complex prompts. Nous Research describes sharply reduced refusals and reports that Hermes 4.3 answered 72–75% of prompts on its own RefusalBench. Community "abliterated" or "heretic" variants of newer models also exist on Ollama; their quality is unaudited.',
          '**When they matter for creative work.** Mature fiction, crime fiction with graphic violence, horror, historically accurate writing about war or atrocity, and morally complex antagonists the instruct model will not voice convincingly.',
          '**Where they fall short.** They follow the prompt, including badly written prompts. Instruct models often soften a vague prompt into something publishable; low-refusal models give you exactly what you asked for.',
          '**Ethical and legal boundaries.** A model that will write something is not a licence to write content that targets real people, depicts non-consensual scenarios involving identifiable individuals, or is illegal where you live. Local hosting does not change the law; it changes who can see the draft. Laws differ by country, and this is not legal advice.',
          '**For a longer treatment** of ethics, legality, and best practice, see [Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored is a workflow choice, not an identity. Many writers draft with the instruct model and switch to a low-refusal fine-tune only for specific scenes. Two models installed side by side is the usual pattern.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Frontends for Creative Work',
        content: '**The chat UI you write in matters as much as the model.** Four options cover most workflows; pick by workflow shape.',
        items: [
          '**Open WebUI** — the general-purpose pick. ChatGPT-style interface, one-click model switching, system-prompt character notes, document upload for context. Best for prose-heavy drafting.',
          '**SillyTavern** — the roleplay and dialogue pick. Character cards, persona management, lorebooks for worldbuilding, and group chat for multi-character scenes. Best for dialogue-driven work and long-running world projects.',
          '**Agnai and RisuAI** — lighter SillyTavern alternatives with easier first run and less customisation.',
          '**Plain Ollama CLI plus a text editor** — the minimal pick. `ollama run gemma4:31b` and paste scenes into your draft. It loses persistent character context but wins on focus.',
          'For the head-to-head comparison of the roleplay-focused frontends, see [SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Drafting and editing want different tools. Generate in the chat frontend, then export to a plain text editor for revision. Editing inside the chat window teaches you to ask the model to fix prose instead of revising it yourself.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decision: Which Model for Your Work',
        content: '**Match your memory first, then your task.**',
        columns: [
          'Your situation',
          'Pick',
        ],
        rows: [
          {
            'Your situation': '24 GB GPU or 32 GB Mac, prose-first',
            Pick: 'Gemma 4 31B',
          },
          {
            'Your situation': '24 GB GPU, novel-length project',
            Pick: 'Qwen3.8-27B (256K context)',
          },
          {
            'Your situation': '24 GB GPU, want faster output',
            Pick: 'Gemma 4 26B-A4B',
          },
          {
            'Your situation': '12 GB GPU',
            Pick: 'Gemma 4 12B',
          },
          {
            'Your situation': '16 GB GPU',
            Pick: 'Mistral Small 3 24B',
          },
          {
            'Your situation': '48 GB or more, one model for everything',
            Pick: 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            'Your situation': 'Instruct model refuses scenes I need',
            Pick: 'Hermes 4.3 36B (keep an instruct model too)',
          },
          {
            'Your situation': 'I want one model to start and will iterate',
            Pick: 'Gemma 4 31B or Qwen3.8-27B, whichever fits',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick Gemma 4 31B or Qwen3.8-27B on a 24 GB GPU, Gemma 4 12B on 12 GB, Mistral Small 3 24B on 16 GB, Llama 3.3 70B on 48 GB or more, and Hermes 4.3 36B for scenes the instruct models refuse.',
          },
          {
            type: 'plain-terms',
            text: 'Start with the largest model that fits your memory with room for context. Switch to a specialist only when one task, such as long-form continuity or mature scenes, becomes the bottleneck. Two installs cost nothing but disk space.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Most writers overthink the model and underthink the prompt. A system prompt with character notes, voice samples, and explicit POV does more than switching models. See [persona prompting](/prompt-engineering/persona-prompting).',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking and Using Local Models for Creative Writing',
        items: [
          '**Mistake 1: picking by general benchmark rank.** Coding and reasoning leaderboards correlate poorly with prose quality. Look at creative-writing boards such as EQ-Bench, then test on your own scenes.',
          '**Mistake 2: using coding-style sampling.** Temperature 0.2–0.4 produces flat prose. Creative work wants roughly 0.9–1.1.',
          '**Mistake 3: leaving thinking mode on.** Reasoning-first models plan before they write, which can make fiction feel assembled. Turn thinking off for prose.',
          '**Mistake 4: ignoring context memory.** A 31B model at 19–20 GB leaves little room on a 24 GB card once you raise the context window. Budget 2–6 GB for the KV cache.',
          '**Mistake 5: thin system prompts.** "You are a helpful assistant" is the worst prompt for creative work. Pair character notes, POV, and tense with [negative prompting](/prompt-engineering/negative-prompting) to rule out clichés.',
          '**Mistake 6: editing inside the chat window.** Generate in chat; revise in an editor. Writers who let the model revise lose their voice quickly.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The biggest skill risk with creative-writing AI is outsourcing the revision pass. Generation is mechanical work that benefits from a model; revision is what makes the prose yours.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama library: Gemma 4](https://ollama.com/library/gemma4) — tags, download sizes, and context windows.',
          '[Ollama library: Qwen3.8](https://ollama.com/library/qwen3.8) — tag, size, and capabilities.',
          '[Hugging Face: Qwen3.8-27B model card](https://huggingface.co/Qwen/Qwen3.8-27B) — license, context length, recommended sampling.',
          '[Hugging Face: Gemma 4 31B model card](https://huggingface.co/google/gemma-4-31B-it) — license, context length, sampling defaults.',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — base model, license, refusal benchmark, GGUF quantizations.',
          '[Ollama library: Mistral Small](https://ollama.com/library/mistral-small) — Mistral Small 3 24B size, context, and license.',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html) and [evals.report EQ-Bench scores](https://evals.report/benchmarks/eq-bench?tab=scores) — creative-writing leaderboard figures cited above.',
          '[Featherless: best open models for creative writing](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — open-weight sizes and Gemma 4 31B EQ-Bench figures.',
          '[SillyTavern documentation](https://docs.sillytavern.app/) — character cards, personas, group chat.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the best local LLM for creative writing?',
            a: 'Gemma 4 31B and Qwen3.8-27B are the best local starting points in 2026, and both fit a 24 GB GPU (about 18–20 GB of weights). Gemma 4 31B is the prose pick with its own published EQ-Bench score; Qwen3.8-27B is the long-context pick. On smaller cards use Gemma 4 12B (12 GB) or Mistral Small 3 24B (16 GB).',
          },
          {
            q: 'What is the best Ollama model for creative writing?',
            a: 'On a 24 GB GPU, `ollama pull gemma4:31b` for prose or `ollama pull qwen3.8:27b` for long projects. On 12 GB, `gemma4:12b`; on 16 GB, `mistral-small:24b`; on 48 GB or more, `llama3.3:70b`. Raise `num_ctx` for long scenes and turn thinking off for fiction.',
          },
          {
            q: 'What is the best local LLM for writing fiction and stories?',
            a: 'Pick the largest model that fits your memory with room for context. Gemma 4 31B is the prose pick on 24 GB, Qwen3.8-27B suits novel-length projects with its 256K context, and Llama 3.3 70B is the reference on 48 GB or more. Use temperature 0.9–1.1 and a system prompt with POV, tense, and voice samples.',
          },
          {
            q: 'Which local model is best for worldbuilding?',
            a: 'Long context matters most: Qwen3.8-27B and Gemma 4 both offer 256K tokens, enough to keep a lore bible and chapter summaries in the prompt. Pair either with SillyTavern lorebooks or a pinned world document, and keep factions, rules, and names in one reference block.',
          },
          {
            q: 'Which LLM is best for writing a novel?',
            a: 'For local use, Qwen3.8-27B (256K context) or Gemma 4 31B (256K context) on a 24 GB GPU. The bottleneck is structure, not model size: an outline, a character bible, and chapter summaries keep continuity. Closed cloud models score higher on creative benchmarks, but they send your manuscript to a third party.',
          },
          {
            q: 'What is the best local model with 32 GB of VRAM or unified memory?',
            a: 'Gemma 4 31B (19–20 GB) or Qwen3.8-27B (18 GB) with a larger context window; the extra memory over 24 GB pays for the KV cache. Gemma 4 26B-A4B is the faster alternative. A 70B model does not fit comfortably below 48 GB.',
          },
          {
            q: 'What is an uncensored local LLM and when should I use one?',
            a: 'It is a fine-tune whose post-training reduces refusals on mature or morally complex prompts, so the model follows the prompt instead of declining. Hermes 4.3 36B is the most recent option we could confirm; Dolphin 3.0 is older. Use one for mature fiction or historically accurate writing, and keep an instruct model for everything else.',
          },
          {
            q: 'What temperature should I use for creative writing?',
            a: 'Temperature 0.9–1.1 with top-p 0.92–0.95 for prose. Tight dialogue wants 0.7–0.85; poetry 1.0–1.2; surreal or genre work 1.1–1.3. Vendor defaults such as Gemma 4\'s 1.0 / 0.95 / top-k 64 are a sound starting point. Turn thinking mode off for fiction.',
          },
          {
            q: 'Are local creative-writing models as good as ChatGPT or Claude?',
            a: 'Not on benchmarks. On EQ-Bench Creative Writing v3, closed models such as Claude Opus 4.7 (2,206 Elo) lead, and the best open-weight entries need datacenter hardware. A 24 GB local model can still be good enough for drafting, and it keeps manuscripts private. Calibrated sampling and a strong system prompt close much of the practical gap.',
          },
          {
            q: 'Can a local model write a full novel?',
            a: 'It can help draft one. A 256K-context model such as Qwen3.8-27B or Gemma 4 can hold a long outline and several chapters in memory, but the KV cache grows with context, so check VRAM. Draft section by section with a character bible and a lorebook; without them, any model drifts.',
          },
          {
            q: 'Do uncensored models produce illegal content?',
            a: 'They produce the text the prompt asks for, and legal responsibility sits with the writer and the publication, not the model. Laws such as the EU AI Act, German StGB §184/§184c, and national obscenity rules apply regardless of how text was generated. Local hosting changes who sees the draft, not what is legal. This is not legal advice.',
          },
          {
            q: 'How do I avoid the "shiver down their spine" cliché?',
            a: 'List 8–12 banned phrases in the system prompt ("do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'"). Keep temperature at 0.85–1.0 rather than 1.2+, and add a DRY penalty where your backend supports it; a plain repeat penalty does not catch phrase-level clichés. A manual revision pass is the final filter. See [negative prompting](/prompt-engineering/negative-prompting).',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — the authoritative model landscape guide for coding, reasoning, and general use.',
          '[Best Local LLMs for Creative Writing in 2026](/local-llms/best-local-llms-for-creative-writing) — a broader model roundup for fiction, poetry, and long-form writing.',
          '[Backyard AI Review: Local AI Character Chat and Roleplay](/power-local-llm/backyard-ai-review-local-roleplay) — free desktop app with a built-in Character Hub; the low-friction alternative to the frontends above.',
          '[SillyTavern vs Agnai vs RisuAI: Best Local Roleplay Frontend](/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — head-to-head comparison of the roleplay-focused frontends.',
          '[Local LLM Prompts for Fiction Writers: Templates & Techniques](/power-local-llm/local-llm-prompts-for-fiction-writers) — copy-paste prompt templates for character development, dialogue, and revision.',
          '[Uncensored Local LLMs for Creative Writing: Ethics, Legality & Best Practices](/power-local-llm/uncensored-local-llm-creative-writing-ethics) — where the legal and ethical lines are.',
          '[Temperature and Top-P: Control AI Creativity](/prompt-engineering/temperature-and-top-p-control-ai-creativity) — the prompt-engineering side of sampling parameters.',
          '[Negative Prompting](/prompt-engineering/negative-prompting) — specifying what not to do; a force-multiplier for system prompts on creative work.',
          '[Locally Uncensored Review: Local Chat, Image, and Video in One App](/power-local-llm/locally-uncensored-review) — an all-in-one desktop app built around uncensored local models, if you prefer an app over a model list.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: 'Beste lokale LLMs für kreatives Schreiben (2026): Belletristik, Dialog & Weltenbau',
    seoTitle: 'Bestes lokales LLM für kreatives Schreiben (2026): 6 Tipps',
    intro: 'Beim kreativen Schreiben punkten lokale LLMs nicht nur bei Datenschutz und Kosten: keine Ablehnungen, die du nicht konfigurieren kannst, keine Rechnung pro Token und Entwürfe, die deinen Rechner nie verlassen. Dieser Leitfaden ordnet die Open-Weight-Modelle, die 2026 einen Versuch wert sind — Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B sowie die ablehnungsarmen Feintunes Hermes 4.3 und Dolphin 3.0 — nach Hardware-Stufe, mit Ollama-Befehlen und Sampling-Einstellungen für Prosa.',
    metaDescription: 'Gemma 4 31B und Qwen3.8-27B passen auf eine 24-GB-GPU. Das beste lokale LLM für Prosa, Dialog und Weltenbau je VRAM-Stufe, mit Ollama-Befehlen.',
    heroImage: '/images/best-local-llm-creative-writing-hero-de.webp',
    twitterDescription: 'Die besten lokalen LLMs für kreatives Schreiben 2026 nach VRAM-Stufe: Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, Hermes 4.3. Mit Ollama-Befehlen und Sampling-Einstellungen.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: 'Belletristik-Autoren, Drehbuchautoren, Game-Designer, Weltenbauer und Roleplay-Enthusiasten, die lokale LLMs für kreative Arbeit nutzen, bei der Datenschutz, Stimmkonsistenz und die Bereitschaft für reife Themen wichtiger sind als Benchmark-Werte.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'lokale LLMs kreatives Schreiben',
    targetKeywords: [
      'bestes lokales llm für kreatives schreiben',
      'bestes lokales llm für belletristik',
      'bestes ollama modell für kreatives schreiben',
      'lokales llm für geschichten schreiben',
      'bestes lokales llm für weltenbau',
      'uncensored lokale llm',
    ],
    leadAnswerBlock: '**Gemma 4 31B und Qwen3.8-27B sind 2026 die besten lokalen Ausgangspunkte für kreatives Schreiben, und beide laufen auf einer einzelnen 24-GB-GPU (je etwa 18–20 GB Gewichte).** Gemma 4 31B ist die Prosa-Wahl: Es ist das einzige Modell dieser Auswahl mit eigenem veröffentlichtem EQ-Bench-Creative-Writing-v3-Wert. Qwen3.8-27B ist die Wahl für Langkontext und Anweisungstreue (256K Token). Mit 12 GB nimmst du Gemma 4 12B, mit 16 GB Mistral Small 3 24B, ab 48 GB Llama 3.3 70B. Lehnt ein Instruct-Modell eine als Fiktion gerahmte Szene ab, ist Hermes 4.3 36B die ablehnungsarme Option. Nutze Temperatur 0,9–1,1, nicht die Coding-Werte 0,2–0,4. Geschlossene Cloud-Modelle erzielen in Kreativ-Benchmarks weiterhin höhere Werte; lokale Modelle gewinnen bei Datenschutz, Kosten und Kontrolle.**',
    quickAnswerTop: {
      de: {
        question: 'Welches lokale LLM ist das beste für kreatives Schreiben?',
        answer: 'Gemma 4 31B und Qwen3.8-27B sind 2026 die besten lokalen Modelle für kreatives Schreiben. Beide passen auf eine 24-GB-GPU (etwa 18–20 GB Gewichte). Gemma 4 31B ist die Prosa-Wahl, Qwen3.8-27B die Langkontext-Wahl. Mit 12 GB nimmst du Gemma 4 12B, mit 16 GB Mistral Small 3 24B, ab 48 GB Llama 3.3 70B. Für weniger Ablehnungen: Hermes 4.3 36B.',
        bullets: [
          '24-GB-GPU: Gemma 4 31B (~19–20 GB) oder Qwen3.8-27B (~18 GB).',
          '12-GB-GPU: Gemma 4 12B (~8 GB) mit Platz für langen Kontext.',
          '16-GB-GPU: Mistral Small 3 24B (~14 GB), 32K Kontext.',
          'Ab 48 GB: Llama 3.3 70B (~43 GB bei Q4_K_M).',
          'Prosa-Sampling: Temperatur 0,9–1,1, Top-p 0,92–0,95, Thinking-Modus aus.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Kernaussagen',
        anchor: '#key-takeaways',
      },
      {
        label: 'Schnellfakten',
        anchor: '#quick-facts',
      },
      {
        label: 'So entstanden die Empfehlungen',
        anchor: '#how-we-tested',
      },
      {
        label: 'Bestes Modell je VRAM-Stufe',
        anchor: '#hardware',
      },
      {
        label: 'Direktvergleich',
        anchor: '#comparison',
      },
      {
        label: 'Urteile je Modell',
        anchor: '#verdicts',
      },
      {
        label: 'Beste Ollama-Modelle für kreatives Schreiben',
        anchor: '#ollama',
      },
      {
        label: 'Lokale vs. Cloud-Modelle zum Schreiben',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Temperatur und Top-p für kreative Arbeit',
        anchor: '#sampling',
      },
      {
        label: 'Uncensored-Modelle: Was sie sind',
        anchor: '#uncensored',
      },
      {
        label: 'Oberflächen für kreative Arbeit',
        anchor: '#frontends',
      },
      {
        label: 'Entscheidung: Dein Modell',
        anchor: '#decision',
      },
      {
        label: 'Häufige Fehler',
        anchor: '#common-mistakes',
      },
      {
        label: 'Quellen',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Weiterführende Artikel',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 31B ist die Prosa-Wahl für eine 24-GB-GPU.** Etwa 19–20 GB Gewichte, 256K Kontext, Apache 2.0 und als einziges Modell dieser Auswahl mit eigenem veröffentlichtem EQ-Bench-Creative-Writing-v3-Wert (Rubrik 16,01, Elo 1407,6).',
          '**Qwen3.8-27B ist die Wahl für Langkontext und Anweisungstreue.** Etwa 18 GB bei Ollama, 256K Kontext, Apache 2.0. Für das Modell ist noch kein Kreativ-Wert veröffentlicht; die Prosa-Qualität gilt daher als ungeprüft — teste es an deinen eigenen Szenen.',
          '**Wähle nach VRAM, nicht nach Rangliste.** 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B oder Qwen3.8-27B. Ab 48 GB: Llama 3.3 70B.',
          '**Hermes 4.3 36B ist die ablehnungsarme Wahl.** Apache 2.0, basiert auf ByteDance Seed-OSS-36B; Nous Research beschreibt deutlich reduzierte Ablehnungen. Dolphin 3.0 ist die ältere Alternative.',
          '**Sampling wirkt stärker als der Modellwechsel.** Temperatur 0,9–1,1 und Top-p 0,92–0,95 für Prosa; Thinking-Modus bei Fiktion ausschalten. Coding-Werte (0,2–0,4) erzeugen flache Prosa.',
          '**Geschlossene Cloud-Modelle führen die Kreativ-Benchmarks weiter an.** Spitzenreiter bei EQ-Bench Creative Writing v3 ist Claude Opus 4.7 mit 2.206 Elo; der beste gelistete Open-Weight-Eintrag ist Kimi K2.6 mit 1.782 — weit jenseits von Consumer-Hardware. Lokal gewinnt bei Datenschutz, Kosten und Kontrolle.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellfakten',
        items: [
          '**24-GB-GPU oder 32-GB-Mac:** Gemma 4 31B (`gemma4:31b`, 19–20 GB) oder Qwen3.8-27B (`qwen3.8:27b`, 18 GB). Beide Apache 2.0, beide 256K Kontext.',
          '**12-GB-GPU:** Gemma 4 12B (`gemma4:12b`, 7,7–8,0 GB), 256K Kontext.',
          '**16-GB-GPU:** Mistral Small 3 24B (`mistral-small:24b`, 14 GB), 32K Kontext, Apache 2.0. Erschienen 2025.',
          '**Ab 48 GB:** Llama 3.3 70B (`llama3.3:70b`, etwa 43 GB bei Q4_K_M). Erschienen im Dezember 2024; Meta-Community-Lizenz.',
          '**Ablehnungsarme Feintunes:** Hermes 4.3 36B (Apache 2.0) und Dolphin 3.0 (Mistral-24B-Variante, Februar 2025).',
          '**Prosa-Sampling-Basis:** Temperatur 1,0, Top-p 0,95, Min-p 0,05; bei Schleifen in Szenen eine Repeat- oder DRY-Penalty ergänzen.',
          '**Speicherregel:** Ollama-Größen sind nur Gewichte. Rechne 2–6 GB für den KV-Cache hinzu, sobald du das Kontextfenster für lange Szenen vergrößerst.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'So entstanden die Empfehlungen',
        content: '**Diese Rangliste ist eine redaktionelle Synthese veröffentlichter Quellen, kein neuer PromptQuorum-Testlauf.** Wir haben offizielle Modellkarten, die Ollama-Bibliothek (Größen, Kontext, Tags) und öffentliche Kreativ-Leaderboards verglichen und jedes Modell einer Hardware-Stufe zugeordnet.',
        items: [
          '**Größen und Kontext:** aus den Ollama-Seiten zu [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Mistral Small](https://ollama.com/library/mistral-small) und den Hugging-Face-Modellkarten. Nur Gewichte; Kontextspeicher kommt hinzu.',
          '**Kreativ-Werte:** EQ-Bench Creative Writing v3 und das Open Writing Leaderboard, wie sie Drittanbieter-Tracker spiegeln. Gemma 4 31B hat einen eigenen Wert, Qwen3.8-27B noch nicht. Gehört ein Wert zu einem Schwestermodell, sagen wir das.',
          '**Erscheinungsdaten:** Qwen3.8-27B (August 2026), Gemma 4 (Juli 2026), Mistral Small 3 (2025), Llama 3.3 70B (Dezember 2024), Hermes 4.3 36B (Dezember 2025), Dolphin 3.0 (Februar 2025).',
          '**Was wir nicht getan haben:** Wir haben keinen neuen bewerteten Prompt-Satz auf diesen Modellen laufen lassen. Die Urteile unten folgen den zitierten Quellen und Modellkarten; „am besten für“ sind Empfehlungen, keine Messergebnisse.',
          'Prompting-Techniken, die kreative Ausgaben bei jedem Modell verbessern, findest du unter [Temperatur und Top-p steuern](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity) und [Persona-Prompting](/de/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Kreativ-Benchmarks sind subjektiv, und die Ranglisten widersprechen sich. Verstehe jede Empfehlung als Arbeitshypothese: Lass dieselben drei Szenen durch zwei Kandidaten laufen und behalte das Modell, dessen Stimme dir besser gefällt.',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Bestes Modell je VRAM-Stufe',
        content: '**Wähle zuerst nach Speicher: Das Modell muss passen und Platz für den Kontext lassen.** Die Größen sind Ollama-Downloadgrößen bei der Standard-4-Bit-Quantisierung; rechne bei langen Szenen 2–6 GB für den KV-Cache hinzu.',
        columns: [
          'Dein Speicher',
          'Modell',
          'Gewichte',
          'Kontext',
        ],
        rows: [
          {
            'Dein Speicher': '8-GB-GPU',
            Modell: 'Qwen3.5 9B (`qwen3.5:9b`)',
            Gewichte: '6,6–7,6 GB',
            Kontext: '256K',
          },
          {
            'Dein Speicher': '12-GB-GPU',
            Modell: 'Gemma 4 12B (`gemma4:12b`)',
            Gewichte: '7,7–8,0 GB',
            Kontext: '256K',
          },
          {
            'Dein Speicher': '16-GB-GPU',
            Modell: 'Mistral Small 3 24B (`mistral-small:24b`)',
            Gewichte: '14 GB',
            Kontext: '32K',
          },
          {
            'Dein Speicher': '24-GB-GPU / 32-GB-Mac',
            Modell: 'Gemma 4 31B (`gemma4:31b`)',
            Gewichte: '19–20 GB',
            Kontext: '256K',
          },
          {
            'Dein Speicher': '24-GB-GPU / 32-GB-Mac',
            Modell: 'Qwen3.8-27B (`qwen3.8:27b`)',
            Gewichte: '18 GB',
            Kontext: '256K',
          },
          {
            'Dein Speicher': '24-GB-GPU, schnellere Ausgabe',
            Modell: 'Gemma 4 26B-A4B (`gemma4:26b`)',
            Gewichte: '16–19 GB',
            Kontext: '256K',
          },
          {
            'Dein Speicher': 'Ab 48 GB',
            Modell: 'Llama 3.3 70B (`llama3.3:70b`)',
            Gewichte: '~43 GB',
            Kontext: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Beim 32-GB-Mac teilt sich der Unified Memory mit macOS. Rechne mit etwa 24 GB nutzbar für Modell plus Kontext; damit laufen Gemma 4 31B und Qwen3.8-27B komfortabel.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Direktvergleich: Lokale Modelle für kreatives Schreiben',
        content: '**Kein Modell gewinnt jede Aufgabe; wähle nach Hardware-Stufe und danach, was in deiner Arbeit tragend ist.** Die Tabelle zeigt die Modelle dieses Leitfadens mit Größe, Gewichten und Erscheinungsdatum.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Gemma 4 31B und Qwen3.8-27B sind die besten lokalen Modelle für kreatives Schreiben auf einer 24-GB-GPU; Gemma 4 12B, Mistral Small 3 24B und Llama 3.3 70B decken die Stufen 12 GB, 16 GB und 48 GB ab; Hermes 4.3 36B ist die ablehnungsarme Option.',
          },
          {
            type: 'plain-terms',
            text: 'Nimm das größte Modell, das mit Platz für Kontext in deinen Speicher passt. Auf einer 24-GB-Karte ist das Gemma 4 31B für Prosa oder Qwen3.8-27B für lange Projekte. Ergänze einen ablehnungsarmen Feintune nur, wenn das Instruct-Modell Szenen verweigert, die du schreiben musst.',
          },
        ],
        columns: [
          'Modell',
          'Größe',
          'Gewichte (Ollama)',
          'Erschienen',
          'Am besten für',
        ],
        rows: [
          {
            Modell: 'Gemma 4 31B',
            'Größe': '31B dicht',
            'Gewichte (Ollama)': '19–20 GB',
            Erschienen: 'Jul 2026',
            'Am besten für': 'Prosa auf 24 GB; eigener EQ-Bench-Wert',
          },
          {
            Modell: 'Qwen3.8-27B',
            'Größe': '27B dicht',
            'Gewichte (Ollama)': '18 GB',
            Erschienen: 'Aug 2026',
            'Am besten für': 'Lange Projekte, Anweisungstreue',
          },
          {
            Modell: 'Gemma 4 26B-A4B',
            'Größe': '26B MoE, 4B aktiv',
            'Gewichte (Ollama)': '16–19 GB',
            Erschienen: 'Jul 2026',
            'Am besten für': 'Schnellere Ausgabe auf 24 GB',
          },
          {
            Modell: 'Gemma 4 12B',
            'Größe': '12B',
            'Gewichte (Ollama)': '7,7–8,0 GB',
            Erschienen: 'Jul 2026',
            'Am besten für': '12-GB-GPUs, langer Kontext',
          },
          {
            Modell: 'Mistral Small 3 24B',
            'Größe': '24B dicht',
            'Gewichte (Ollama)': '14 GB',
            Erschienen: '2025',
            'Am besten für': '16-GB-GPUs; älter, bewährt',
          },
          {
            Modell: 'Llama 3.3 70B',
            'Größe': '70B dicht',
            'Gewichte (Ollama)': '~43 GB',
            Erschienen: 'Dez 2024',
            'Am besten für': 'Ab 48 GB; ältere Referenz',
          },
          {
            Modell: 'Hermes 4.3 36B',
            'Größe': '36B dicht',
            'Gewichte (Ollama)': '~21–23 GB (gesch.)',
            Erschienen: 'Dez 2025',
            'Am besten für': 'Weniger Ablehnungen, Apache 2.0',
          },
          {
            Modell: 'Dolphin 3.0',
            'Größe': '24B (Mistral-Variante)',
            'Gewichte (Ollama)': '~14 GB',
            Erschienen: 'Feb 2025',
            'Am besten für': 'Ältere ablehnungsarme Option',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Üblich ist ein Zwei-Modell-Setup: ein Instruct-Modell als Alltagsmodell plus Hermes 4.3 36B für Szenen, die das Instruct-Modell verweigert. Beide stehen gleichzeitig in `ollama list`.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Urteile je Modell',
        items: [
          '**Gemma 4 31B** — Prosa-Wahl für 24 GB. Es ist das einzige Modell dieser Auswahl mit eigenem EQ-Bench-Creative-Writing-v3-Ergebnis (Rubrik 16,01, Elo 1407,6, laut Drittanbieter-Tracker). 256K Kontext und Apache 2.0. Google nennt Temperatur 1,0, Top-p 0,95, Top-k 64 als Standard.',
          '**Qwen3.8-27B** — Wahl für lange Projekte. 262.144 Token nativer Kontext (mit YaRN bis 1M erweiterbar), Apache 2.0, etwa 18 GB bei Ollama. Alibaba positioniert es für Coding, Agenten und Recherche; die Modellkarte sagt nichts zu kreativem Schreiben, und es gibt keinen Kreativ-Wert — prüfe die Stimme also an eigenen Szenen. Der Thinking-Modus ist standardmäßig an; für Prosa ausschalten.',
          '**Gemma 4 26B-A4B und 12B** — gleiche Familie, andere Kompromisse. Das 26B-Mixture-of-Experts-Modell aktiviert etwa 4B Parameter pro Token und erzeugt deshalb bei ähnlichem Speicher schneller als das 31B. Das 12B passt auf 12-GB-Karten und bietet weiterhin 256K Kontext.',
          '**Mistral Small 3 24B** — die 16-GB-Option. Apache 2.0, etwa 14 GB, 32K Kontext. Es ist ein Modell von 2025 und neben Llama die älteste Empfehlung hier; es bleibt, weil nur wenige neuere Modelle auf 16 GB passen. Der Nachfolger Mistral Small 4 (März 2026, Apache 2.0) ist ein 119B-Mixture-of-Experts-Modell mit etwa 6B aktiven Parametern und liegt weit über 16 GB.',
          '**Llama 3.3 70B** — die 48-GB-Referenz. Ein Modell vom Dezember 2024 unter der Meta-Community-Lizenz. Auf Rechnern ab 48 GB bleibt es eine starke, breit unterstützte Wahl; darunter ist es nicht praktikabel.',
          '**Hermes 4.3 36B** — ablehnungsarme Wahl. Basiert auf ByteDance Seed-OSS-36B unter Apache 2.0, mit GGUF-Quantisierungen auf Hugging Face. Nous Research beschreibt deutlich reduzierte Ablehnungen; Hermes 4.3 beantwortete im eigenen RefusalBench 72–75 % der Prompts. Die Karte empfiehlt Temperatur 0,6, Top-p 0,95, Top-k 20; für Prosa die Temperatur erhöhen.',
          '**Dolphin 3.0** — ältere ablehnungsarme Option. Die neueste bestätigbare Dolphin-Generation ist Dolphin 3.0 (Februar 2025, u. a. mit Mistral-24B-Variante). Nutze es, wenn du ein unzensiertes Modell der Mistral-Familie willst; Hermes 4.3 ist die aktuellere Wahl.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Stimmkonsistenz ist die Kennzahl, die Autoren am häufigsten unterschätzen. Ein Modell, das einen brillanten Absatz schreibt, aber ab Absatz fünf das Sprechmuster der Figur verliert, ist schlechter als ein stetiges. Teste die Kontinuität über lange Sitzungen, nicht nur die Einzelausgabe.',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Beste Ollama-Modelle für kreatives Schreiben',
        content: '**Fünf `ollama pull`-Befehle decken jede Hardware-Stufe dieses Leitfadens ab.** Prüfe danach mit `ollama list`, ob das Modell installiert ist.',
        items: [
          '**24 GB, Prosa:** `ollama pull gemma4:31b` — dann `ollama run gemma4:31b`.',
          '**24 GB, lange Projekte:** `ollama pull qwen3.8:27b` — starte mit `ollama run qwen3.8:27b --think=false`, um das Thinking für Prosa auszuschalten.',
          '**12 GB:** `ollama pull gemma4:12b`.',
          '**16 GB:** `ollama pull mistral-small:24b`.',
          '**Ab 48 GB:** `ollama pull llama3.3:70b`.',
          '**Ablehnungsarmer Feintune:** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF` lädt das Hermes-4.3-GGUF von Hugging Face; wähle auf einer 24-GB-Karte eine 4-Bit-Quantisierung.',
          '**Vergrößere das Kontextfenster für lange Szenen.** Der Standardkontext von Ollama ist klein. In einer interaktiven Sitzung gibst du `/set parameter num_ctx 16384` ein oder setzt `num_ctx` in einem Modelfile. Größere Werte brauchen mehr VRAM.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Lokale vs. Cloud-Modelle zum Schreiben',
        content: '**Geschlossene Cloud-Modelle erzielen in Kreativ-Benchmarks höhere Werte; lokale Modelle gewinnen bei Datenschutz, Kosten und Kontrolle.** Wer nach „bestes LLM zum Schreiben“ ohne „lokal“ sucht, bekommt von den Ranglisten andere Antworten als aus diesem Leitfaden.',
        items: [
          '**Geschlossene Modelle führen.** Bei EQ-Bench Creative Writing v3, gespiegelt von [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores), steht Claude Opus 4.7 mit 2.206 Elo vorn, vor GPT-5.5 mit 2.035.',
          '**Die besten Open-Weight-Einträge brauchen ein Rechenzentrum.** Kimi K2.6 (1.782 Elo) ist der höchste Open-Weight-Eintrag dieser Liste. Featherless nennt GLM-5.3 mit 753B und DeepSeek-V4.1-Flash mit 763B Parametern — beides läuft auf keinem Consumer-Rechner.',
          '**Was auf einer GPU läuft.** Gemma 4 31B erreichte im selben Benchmark 1407,6 Elo und eine Rubrik von 16,01. Werte verschiedener Tracker teilen keine Skala; vergleiche nur innerhalb einer Liste.',
          '**Wann lokal die richtige Wahl ist.** Unveröffentlichte Manuskripte, Kundenarbeit unter NDA, Inhalte, die ein Cloud-Anbieter ablehnen würde, Offline-Arbeit und Projekte, bei denen die monatliche API-Rechnung die Grenze setzt.',
          '**Hybrid-Workflow.** Entwerfen und Brainstormen lokal; ein Cloud-Modell nur für unkritischen Feinschliff, wenn du die zusätzliche Qualität willst.',
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperatur und Top-p für kreative Arbeit',
        content: '**Kreatives Schreiben braucht höhere Sampling-Temperaturen als Coding.** Die Standardwerte der meisten Chat-Oberflächen sind auf Frage-Antwort getrimmt; Temperatur 0,7 erzeugt bei kreativen Prompts flache, vorhersehbare Prosa.',
        items: [
          '**Herstellerwerte sind eine Untergrenze, kein Ziel.** Google nennt für Gemma 4 Temperatur 1,0, Top-p 0,95, Top-k 64; Alibaba für Qwen3.8 im Thinking-Modus 1,0 / 0,95 / Top-k 20 und im Non-Thinking-Modus 0,7 / 0,8; Nous für Hermes 4.3 0,6 / 0,95 / Top-k 20. Starte dort und justiere dann für Prosa.',
          '**Basis für Prosa:** Temperatur 0,95–1,0, Top-p 0,92–0,95, Repeat-Penalty 1,05–1,1. Von hier aus pro Aufgabe anpassen.',
          '**Straffer Dialog:** Temperatur 0,7–0,85, Top-p 0,9. Niedrigere Temperaturen halten Figurenstimmen über Wortwechsel konsistent.',
          '**Lyrische Prosa und Gedichte:** Temperatur 1,0–1,2, Top-p 0,95. Höhere Temperaturen eröffnen überraschende Wortwahl.',
          '**Surreale Texte oder Genre-Fiktion:** Temperatur 1,1–1,3, Top-p 0,95–0,98.',
          '**Handlungsgetriebene Szenen (Action, Krimi, Wendungen):** Temperatur 0,85–0,95, Top-p 0,9. Sie brauchen mehr Anweisungstreue als Neuheit.',
          '**Schalte den Thinking-Modus bei Fiktion aus.** Reasoning-Token kosten Latenz und führen oft zu geplanter, aufgeräumter Prosa. Qwen3.8 akzeptiert `enable_thinking: false`; in Ollama nutzt du `--think=false`.',
          '**min_p (0,05–0,1):** eine Alternative zu Top-p, die den Schwellenwert an die Wahrscheinlichkeit des Top-Tokens koppelt. Sie ist bei kreativen Prompts großzügiger, ohne die Inkohärenz eines sehr hohen Top-p. Nutze sie, wo dein Backend die Einstellung anbietet.',
          '**DRY-Wiederholungsstrafe (Multiplikator 0,8, Basis 1,75, erlaubte Länge 2):** fängt Wiederholungen auf Phrasenebene, die eine normale Repeat-Penalty übersieht, und hilft in langen Sitzungen. Sie ist in llama.cpp-basierten Backends wie KoboldCpp verfügbar; prüfe, ob deine Oberfläche sie anbietet.',
          'Eine ausführlichere Darstellung, warum diese Parameter wichtig sind und wie sie zusammenwirken, findest du unter [Temperatur und Top-p steuern](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Teste das Sampling an einer kurzen Szene pro Modell: drei Läufe je Einstellung, dann die Temperatur wählen, bei der das Modell am lebendigsten klingt, ohne den Prompt zu verlieren. Einstellungen lassen sich nicht perfekt von Modell zu Modell übertragen.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored-Modelle: Was sie sind und wann sie wichtig sind',
        content: '**Uncensored heißt nicht unethisch.** Es bedeutet, dass das Ablehnungsverhalten des Modells per Feintuning reduziert wurde, sodass es dem Prompt folgt, statt abzulehnen. Der Autor bleibt der Autor.',
        items: [
          '**Technisch gesehen.** Modelle wie Hermes 4.3 und Dolphin 3.0 sind Feintunes, deren Post-Training Ablehnungen bei reifen, gewalttätigen oder moralisch komplexen Prompts verringert. Nous Research beschreibt deutlich reduzierte Ablehnungen und gibt an, dass Hermes 4.3 im eigenen RefusalBench 72–75 % der Prompts beantwortete. Von der Community gibt es auch „abliterated“- oder „heretic“-Varianten neuerer Modelle auf Ollama; ihre Qualität ist ungeprüft.',
          '**Wann sie für kreative Arbeit wichtig sind.** Reife Belletristik, Kriminalfiktion mit expliziter Gewalt, Horror, historisch genaues Schreiben über Krieg oder Gräueltaten und moralisch komplexe Gegenspieler, die das Instruct-Modell nicht überzeugend spricht.',
          '**Wo sie schwächeln.** Sie folgen dem Prompt — auch schlecht geschriebenen. Instruct-Modelle entschärfen einen vagen Prompt oft zu etwas Veröffentlichbarem; ablehnungsarme Modelle liefern genau das, worum du gebeten hast.',
          '**Ethische und rechtliche Grenzen.** Dass ein Modell etwas schreibt, ist keine Erlaubnis für Inhalte, die reale Personen ins Visier nehmen, nicht einvernehmliche Szenarien mit identifizierbaren Personen darstellen oder an deinem Wohnort illegal sind. Lokales Hosting ändert nicht das Recht, sondern wer den Entwurf sehen kann. Die Rechtslage ist von Land zu Land verschieden; dies ist keine Rechtsberatung.',
          '**Ausführlicher** zu Ethik, Rechtslage und bewährter Praxis: [Uncensored lokale LLMs für kreatives Schreiben: Ethik, Recht & Best Practices](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored ist eine Workflow-Entscheidung, keine Identität. Viele Autoren entwerfen mit dem Instruct-Modell und wechseln nur für bestimmte Szenen zu einem ablehnungsarmen Feintune. Zwei Modelle nebeneinander sind das übliche Muster.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Oberflächen für kreative Arbeit',
        content: '**Die Chat-Oberfläche, in der du schreibst, ist so wichtig wie das Modell.** Vier Optionen decken die meisten Workflows ab; wähle nach Workflow-Form.',
        items: [
          '**Open WebUI** — die Allzweck-Wahl. ChatGPT-ähnliche Oberfläche, Modellwechsel mit einem Klick, Figurennotizen im System-Prompt, Dokument-Upload für Kontext. Am besten für prosalastiges Entwerfen.',
          '**SillyTavern** — die Wahl für Roleplay und Dialog. Character Cards, Persona-Verwaltung, Lorebooks für Weltenbau und Gruppenchat für Szenen mit mehreren Figuren. Am besten für dialoggetriebene Arbeit und langlaufende Weltprojekte.',
          '**Agnai und RisuAI** — leichtere SillyTavern-Alternativen mit einfacherem Einstieg und weniger Anpassung.',
          '**Reine Ollama-CLI plus Texteditor** — die minimale Wahl. `ollama run gemma4:31b` und Szenen in den Entwurf kopieren. Der dauerhafte Figurenkontext fehlt, dafür gewinnt der Fokus.',
          'Den Direktvergleich der Roleplay-Oberflächen findest du unter [SillyTavern vs Agnai vs RisuAI: Beste lokale Roleplay-Oberfläche](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Entwerfen und Überarbeiten brauchen unterschiedliche Werkzeuge. Erzeuge in der Chat-Oberfläche und exportiere dann in einen reinen Texteditor zur Überarbeitung. Das Bearbeiten im Chatfenster gewöhnt dich daran, das Modell Prosa „reparieren“ zu lassen, statt sie selbst zu überarbeiten.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Entscheidung: Welches Modell für deine Arbeit',
        content: '**Erst der Speicher, dann die Aufgabe.**',
        columns: [
          'Deine Situation',
          'Empfehlung',
        ],
        rows: [
          {
            'Deine Situation': '24-GB-GPU oder 32-GB-Mac, Prosa zuerst',
            Empfehlung: 'Gemma 4 31B',
          },
          {
            'Deine Situation': '24-GB-GPU, romanlanges Projekt',
            Empfehlung: 'Qwen3.8-27B (256K Kontext)',
          },
          {
            'Deine Situation': '24-GB-GPU, schnellere Ausgabe gewünscht',
            Empfehlung: 'Gemma 4 26B-A4B',
          },
          {
            'Deine Situation': '12-GB-GPU',
            Empfehlung: 'Gemma 4 12B',
          },
          {
            'Deine Situation': '16-GB-GPU',
            Empfehlung: 'Mistral Small 3 24B',
          },
          {
            'Deine Situation': 'Ab 48 GB, ein Modell für alles',
            Empfehlung: 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            'Deine Situation': 'Instruct-Modell verweigert nötige Szenen',
            Empfehlung: 'Hermes 4.3 36B (Instruct-Modell behalten)',
          },
          {
            'Deine Situation': 'Ein Modell zum Start, später anpassen',
            Empfehlung: 'Gemma 4 31B oder Qwen3.8-27B, je nach Speicher',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nimm Gemma 4 31B oder Qwen3.8-27B auf einer 24-GB-GPU, Gemma 4 12B mit 12 GB, Mistral Small 3 24B mit 16 GB, Llama 3.3 70B ab 48 GB und Hermes 4.3 36B für Szenen, die Instruct-Modelle verweigern.',
          },
          {
            type: 'plain-terms',
            text: 'Starte mit dem größten Modell, das mit Platz für Kontext in deinen Speicher passt. Wechsle erst zu einem Spezialisten, wenn eine Aufgabe, etwa Langform-Kontinuität oder reife Szenen, zum Engpass wird. Zwei Installationen kosten nur Speicherplatz.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die meisten Autoren grübeln zu viel über das Modell und zu wenig über den Prompt. Ein System-Prompt mit Figurennotizen, Stimmproben und klarer Perspektive bewirkt mehr als ein Modellwechsel. Siehe [Persona-Prompting](/de/prompt-engineering/persona-prompting).',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei Auswahl und Nutzung lokaler Modelle für kreatives Schreiben',
        items: [
          '**Fehler 1: Auswahl nach allgemeinem Benchmark-Rang.** Coding- und Reasoning-Ranglisten korrelieren schlecht mit Prosa-Qualität. Schau auf Kreativ-Ranglisten wie EQ-Bench und teste dann an eigenen Szenen.',
          '**Fehler 2: Coding-Sampling verwenden.** Temperatur 0,2–0,4 erzeugt flache Prosa. Kreative Arbeit braucht etwa 0,9–1,1.',
          '**Fehler 3: Thinking-Modus angelassen.** Reasoning-Modelle planen vor dem Schreiben, was Fiktion zusammengesetzt wirken lässt. Schalte Thinking für Prosa aus.',
          '**Fehler 4: Kontextspeicher ignorieren.** Ein 31B-Modell mit 19–20 GB lässt auf einer 24-GB-Karte wenig Platz, sobald du das Kontextfenster vergrößerst. Plane 2–6 GB für den KV-Cache ein.',
          '**Fehler 5: dünne System-Prompts.** „Du bist ein hilfreicher Assistent“ ist der schlechteste Prompt für kreative Arbeit. Kombiniere Figurennotizen, Perspektive und Zeitform mit [Negativ-Prompting](/de/prompt-engineering/negative-prompting), um Klischees auszuschließen.',
          '**Fehler 6: Im Chatfenster überarbeiten.** Im Chat erzeugen, im Editor überarbeiten. Autoren, die das Modell überarbeiten lassen, verlieren schnell ihre Stimme.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Das größte Kompetenzrisiko bei KI für kreatives Schreiben ist das Auslagern der Überarbeitung. Das Erzeugen ist mechanische Arbeit, bei der ein Modell hilft; die Überarbeitung macht den Text zu deinem.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ollama-Bibliothek: Gemma 4](https://ollama.com/library/gemma4) — Tags, Downloadgrößen und Kontextfenster.',
          '[Ollama-Bibliothek: Qwen3.8](https://ollama.com/library/qwen3.8) — Tag, Größe und Fähigkeiten.',
          '[Hugging Face: Qwen3.8-27B-Modellkarte](https://huggingface.co/Qwen/Qwen3.8-27B) — Lizenz, Kontextlänge, empfohlenes Sampling.',
          '[Hugging Face: Gemma 4 31B-Modellkarte](https://huggingface.co/google/gemma-4-31B-it) — Lizenz, Kontextlänge, Sampling-Standards.',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — Basismodell, Lizenz, Ablehnungs-Benchmark, GGUF-Quantisierungen.',
          '[Ollama-Bibliothek: Mistral Small](https://ollama.com/library/mistral-small) — Größe, Kontext und Lizenz von Mistral Small 3 24B.',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html) und [evals.report EQ-Bench-Werte](https://evals.report/benchmarks/eq-bench?tab=scores) — oben zitierte Leaderboard-Werte.',
          '[Featherless: beste offene Modelle für kreatives Schreiben](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — Open-Weight-Größen und EQ-Bench-Werte von Gemma 4 31B.',
          '[SillyTavern-Dokumentation](https://docs.sillytavern.app/) — Character Cards, Personas, Gruppenchat.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist das beste lokale LLM für kreatives Schreiben?',
            a: 'Gemma 4 31B und Qwen3.8-27B sind 2026 die besten lokalen Ausgangspunkte, und beide passen auf eine 24-GB-GPU (etwa 18–20 GB Gewichte). Gemma 4 31B ist die Prosa-Wahl mit eigenem veröffentlichtem EQ-Bench-Wert; Qwen3.8-27B ist die Langkontext-Wahl. Auf kleineren Karten nimmst du Gemma 4 12B (12 GB) oder Mistral Small 3 24B (16 GB).',
          },
          {
            q: 'Was ist das beste Ollama-Modell für kreatives Schreiben?',
            a: 'Auf einer 24-GB-GPU `ollama pull gemma4:31b` für Prosa oder `ollama pull qwen3.8:27b` für lange Projekte. Mit 12 GB `gemma4:12b`, mit 16 GB `mistral-small:24b`, ab 48 GB `llama3.3:70b`. Erhöhe `num_ctx` für lange Szenen und schalte Thinking bei Fiktion aus.',
          },
          {
            q: 'Was ist das beste lokale LLM zum Schreiben von Belletristik und Geschichten?',
            a: 'Nimm das größte Modell, das mit Platz für Kontext in deinen Speicher passt. Gemma 4 31B ist die Prosa-Wahl auf 24 GB, Qwen3.8-27B eignet sich mit 256K Kontext für romanlange Projekte, Llama 3.3 70B ist die Referenz ab 48 GB. Nutze Temperatur 0,9–1,1 und einen System-Prompt mit Perspektive, Zeitform und Stimmproben.',
          },
          {
            q: 'Welches lokale Modell eignet sich am besten für Weltenbau?',
            a: 'Am wichtigsten ist langer Kontext: Qwen3.8-27B und Gemma 4 bieten beide 256K Token, genug für eine Lore-Bibel und Kapitelzusammenfassungen im Prompt. Kombiniere eines von beiden mit SillyTavern-Lorebooks oder einem angehefteten Weltdokument und halte Fraktionen, Regeln und Namen in einem Referenzblock.',
          },
          {
            q: 'Welches LLM ist am besten zum Schreiben eines Romans?',
            a: 'Lokal: Qwen3.8-27B (256K Kontext) oder Gemma 4 31B (256K Kontext) auf einer 24-GB-GPU. Der Engpass ist die Struktur, nicht die Modellgröße: Ein Outline, eine Figurenbibel und Kapitelzusammenfassungen sichern die Kontinuität. Geschlossene Cloud-Modelle erzielen in Kreativ-Benchmarks höhere Werte, senden dein Manuskript aber an Dritte.',
          },
          {
            q: 'Was ist das beste lokale Modell mit 32 GB VRAM oder Unified Memory?',
            a: 'Gemma 4 31B (19–20 GB) oder Qwen3.8-27B (18 GB) mit größerem Kontextfenster; der Mehrspeicher gegenüber 24 GB bezahlt den KV-Cache. Gemma 4 26B-A4B ist die schnellere Alternative. Ein 70B-Modell passt unter 48 GB nicht komfortabel.',
          },
          {
            q: 'Was ist ein uncensored lokales LLM und wann sollte ich eines nutzen?',
            a: 'Es ist ein Feintune, dessen Post-Training Ablehnungen bei reifen oder moralisch komplexen Prompts verringert, sodass das Modell dem Prompt folgt, statt abzulehnen. Hermes 4.3 36B ist die jüngste bestätigbare Option; Dolphin 3.0 ist älter. Nutze eines für reife Belletristik oder historisch genaues Schreiben und behalte für alles andere ein Instruct-Modell.',
          },
          {
            q: 'Welche Temperatur sollte ich für kreatives Schreiben verwenden?',
            a: 'Temperatur 0,9–1,1 mit Top-p 0,92–0,95 für Prosa. Straffer Dialog braucht 0,7–0,85, Lyrik 1,0–1,2, surreale oder Genre-Texte 1,1–1,3. Herstellerwerte wie 1,0 / 0,95 / Top-k 64 bei Gemma 4 sind ein guter Startpunkt. Schalte den Thinking-Modus bei Fiktion aus.',
          },
          {
            q: 'Sind lokale Modelle für kreatives Schreiben so gut wie ChatGPT oder Claude?',
            a: 'Nicht in Benchmarks. Bei EQ-Bench Creative Writing v3 führen geschlossene Modelle wie Claude Opus 4.7 (2.206 Elo), und die besten Open-Weight-Einträge brauchen Rechenzentrums-Hardware. Ein lokales 24-GB-Modell kann fürs Entwerfen trotzdem gut genug sein und hält Manuskripte privat. Kalibriertes Sampling und ein starker System-Prompt schließen einen großen Teil der praktischen Lücke.',
          },
          {
            q: 'Kann ein lokales Modell einen ganzen Roman schreiben?',
            a: 'Es kann beim Entwurf helfen. Ein Modell mit 256K Kontext wie Qwen3.8-27B oder Gemma 4 kann ein langes Outline und mehrere Kapitel im Speicher halten, aber der KV-Cache wächst mit dem Kontext — prüfe den VRAM. Entwirf abschnittsweise mit Figurenbibel und Lorebook; ohne sie driftet jedes Modell.',
          },
          {
            q: 'Erzeugen uncensored Modelle illegale Inhalte?',
            a: 'Sie erzeugen den Text, den der Prompt verlangt; die rechtliche Verantwortung liegt bei Autor und Veröffentlichung, nicht beim Modell. Regelwerke wie der EU AI Act, §184/§184c StGB und nationales Obszönitätsrecht gelten unabhängig davon, wie ein Text entstanden ist. Lokales Hosting ändert, wer den Entwurf sieht, nicht, was legal ist. Dies ist keine Rechtsberatung.',
          },
          {
            q: 'Wie vermeide ich das Klischee „shiver down their spine“?',
            a: 'Liste 8–12 verbotene Phrasen im System-Prompt („do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'“). Halte die Temperatur bei 0,85–1,0 statt 1,2+ und ergänze eine DRY-Penalty, wo dein Backend sie unterstützt; eine einfache Repeat-Penalty erfasst Klischees auf Phrasenebene nicht. Eine manuelle Überarbeitung ist der letzte Filter. Siehe [Negativ-Prompting](/de/prompt-engineering/negative-prompting).',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) — der maßgebliche Überblick über Coding, Reasoning und allgemeine Nutzung.',
          '[Beste lokale LLMs für kreatives Schreiben 2026](/de/local-llms/best-local-llms-for-creative-writing) — ein breiterer Modellüberblick für Belletristik, Lyrik und Langform.',
          '[Backyard AI Review: Lokaler KI-Charakter-Chat und Roleplay](/de/power-local-llm/backyard-ai-review-local-roleplay) — kostenlose Desktop-App mit integriertem Character Hub; die einfache Alternative zu den obigen Oberflächen.',
          '[SillyTavern vs Agnai vs RisuAI: Beste lokale Roleplay-Oberfläche](/de/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — Direktvergleich der Roleplay-Oberflächen.',
          '[Lokale LLM-Prompts für Belletristik-Autoren: Vorlagen & Techniken](/de/power-local-llm/local-llm-prompts-for-fiction-writers) — Prompt-Vorlagen zum Kopieren für Figurenentwicklung, Dialog und Überarbeitung.',
          '[Uncensored lokale LLMs für kreatives Schreiben: Ethik, Recht & Best Practices](/de/power-local-llm/uncensored-local-llm-creative-writing-ethics) — wo die rechtlichen und ethischen Grenzen verlaufen.',
          '[Temperatur und Top-p: KI-Kreativität steuern](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity) — die Prompt-Engineering-Seite der Sampling-Parameter.',
          '[Negativ-Prompting](/de/prompt-engineering/negative-prompting) — festlegen, was nicht geschehen soll; ein Hebel für System-Prompts bei kreativer Arbeit.',
          '[Locally Uncensored im Test: lokaler Chat, Bild und Video in einer App](/de/power-local-llm/locally-uncensored-review) — eine All-in-one-Desktop-App rund um unzensierte lokale Modelle, falls Sie eine App einer Modellliste vorziehen.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: 'Meilleurs LLM locaux pour l\'écriture créative (2026) : fiction, dialogue et worldbuilding',
    seoTitle: 'Meilleur LLM local pour l\'écriture créative (2026) : 6 choix',
    intro: 'L\'écriture créative est la charge de travail où les LLM locaux l\'emportent sur plus que la confidentialité et le coût : pas de refus impossibles à configurer, pas de facture au token, et des brouillons qui ne quittent jamais votre machine. Ce guide classe par palier matériel les modèles open-weight qui valent d\'être lancés en 2026 — Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, ainsi que les fine-tunings à faibles refus Hermes 4.3 et Dolphin 3.0 — avec les commandes Ollama et les réglages d\'échantillonnage pour la prose.',
    metaDescription: 'Gemma 4 31B et Qwen3.8-27B tiennent sur un GPU de 24 Go. Le meilleur LLM local pour fiction, dialogue et worldbuilding par palier de VRAM, avec commandes Ollama.',
    heroImage: '/images/best-local-llm-creative-writing-hero-fr.webp',
    twitterDescription: 'Les meilleurs LLM locaux pour l\'écriture créative en 2026, par palier de VRAM : Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, Hermes 4.3. Commandes Ollama et réglages inclus.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: 'Auteurs de fiction, scénaristes, game designers, créateurs de mondes et passionnés de jeu de rôle qui utilisent des LLM locaux pour un travail créatif où la confidentialité, la cohérence de voix et l\'acceptation des thèmes matures comptent plus que les scores de benchmark.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM local écriture créative',
    targetKeywords: [
      'meilleur llm local pour écriture créative',
      'meilleur llm local pour écrire de la fiction',
      'meilleur modèle ollama pour écriture créative',
      'llm local pour écrire des histoires',
      'meilleur llm local pour worldbuilding',
      'llm local uncensored',
    ],
    leadAnswerBlock: '**Gemma 4 31B et Qwen3.8-27B sont les meilleurs points de départ locaux pour l\'écriture créative en 2026, et tous deux tournent sur un seul GPU de 24 Go (environ 18–20 Go de poids chacun).** Gemma 4 31B est le choix pour la prose : c\'est le seul modèle de cette sélection à avoir son propre score EQ-Bench Creative Writing v3 publié. Qwen3.8-27B est le choix pour le long contexte et le respect des consignes (256K tokens). Avec 12 Go, prenez Gemma 4 12B ; avec 16 Go, Mistral Small 3 24B ; à partir de 48 Go, Llama 3.3 70B. Quand un modèle instruct refuse une scène cadrée comme fiction, Hermes 4.3 36B est l\'option à faibles refus. Utilisez une température de 0,9–1,1, pas les 0,2–0,4 du code. Les modèles cloud fermés obtiennent encore de meilleurs scores sur les benchmarks créatifs ; les modèles locaux gagnent sur la confidentialité, le coût et le contrôle.**',
    quickAnswerTop: {
      fr: {
        question: 'Quel LLM local est le meilleur pour l\'écriture créative ?',
        answer: 'Gemma 4 31B et Qwen3.8-27B sont les meilleurs modèles locaux pour l\'écriture créative en 2026. Tous deux tiennent sur un GPU de 24 Go (environ 18–20 Go de poids). Gemma 4 31B est le choix pour la prose, Qwen3.8-27B pour le long contexte. Avec 12 Go : Gemma 4 12B ; 16 Go : Mistral Small 3 24B ; 48 Go et plus : Llama 3.3 70B. Pour moins de refus : Hermes 4.3 36B.',
        bullets: [
          'GPU 24 Go : Gemma 4 31B (~19–20 Go) ou Qwen3.8-27B (~18 Go).',
          'GPU 12 Go : Gemma 4 12B (~8 Go), avec de la marge pour un long contexte.',
          'GPU 16 Go : Mistral Small 3 24B (~14 Go), contexte 32K.',
          '48 Go et plus : Llama 3.3 70B (~43 Go en Q4_K_M).',
          'Échantillonnage prose : température 0,9–1,1, top-p 0,92–0,95, mode thinking désactivé.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Points clés',
        anchor: '#key-takeaways',
      },
      {
        label: 'Faits rapides',
        anchor: '#quick-facts',
      },
      {
        label: 'Comment ces choix ont été faits',
        anchor: '#how-we-tested',
      },
      {
        label: 'Meilleur modèle par palier de VRAM',
        anchor: '#hardware',
      },
      {
        label: 'Comparatif direct',
        anchor: '#comparison',
      },
      {
        label: 'Verdict par modèle',
        anchor: '#verdicts',
      },
      {
        label: 'Meilleurs modèles Ollama pour l\'écriture créative',
        anchor: '#ollama',
      },
      {
        label: 'Modèles locaux ou cloud pour écrire',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Température et top-p pour le travail créatif',
        anchor: '#sampling',
      },
      {
        label: 'Modèles uncensored : ce que c\'est',
        anchor: '#uncensored',
      },
      {
        label: 'Interfaces pour le travail créatif',
        anchor: '#frontends',
      },
      {
        label: 'Décision : choisir son modèle',
        anchor: '#decision',
      },
      {
        label: 'Erreurs courantes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Sources',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Lectures complémentaires',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 31B est le choix prose pour un GPU de 24 Go.** Environ 19–20 Go de poids, contexte 256K, Apache 2.0, et seul modèle de cette sélection avec son propre score EQ-Bench Creative Writing v3 publié (rubrique 16,01, Elo 1407,6).',
          '**Qwen3.8-27B est le choix long contexte et respect des consignes.** Environ 18 Go sur Ollama, contexte 256K, Apache 2.0. Aucun score créatif n\'est publié pour lui ; sa qualité de prose reste non vérifiée, testez-le sur vos propres scènes.',
          '**Choisissez selon votre VRAM, pas selon un classement.** 12 Go : Gemma 4 12B. 16 Go : Mistral Small 3 24B. 24 Go : Gemma 4 31B ou Qwen3.8-27B. 48 Go et plus : Llama 3.3 70B.',
          '**Hermes 4.3 36B est le choix à faibles refus.** Apache 2.0, bâti sur ByteDance Seed-OSS-36B ; Nous Research décrit des refus fortement réduits. Dolphin 3.0 est l\'alternative plus ancienne.',
          '**L\'échantillonnage compte plus que le changement de modèle.** Température 0,9–1,1 et top-p 0,92–0,95 pour la prose ; désactivez le mode thinking pour la fiction. Les réglages de code (0,2–0,4) donnent une prose plate.',
          '**Les modèles cloud fermés dominent encore les benchmarks créatifs.** En tête d\'EQ-Bench Creative Writing v3 : Claude Opus 4.7 avec 2 206 Elo ; la meilleure entrée open-weight listée est Kimi K2.6 avec 1 782, très au-delà du matériel grand public. Le local gagne sur la confidentialité, le coût et le contrôle.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**GPU 24 Go ou Mac 32 Go :** Gemma 4 31B (`gemma4:31b`, 19–20 Go) ou Qwen3.8-27B (`qwen3.8:27b`, 18 Go). Tous deux Apache 2.0, tous deux contexte 256K.',
          '**GPU 12 Go :** Gemma 4 12B (`gemma4:12b`, 7,7–8,0 Go), contexte 256K.',
          '**GPU 16 Go :** Mistral Small 3 24B (`mistral-small:24b`, 14 Go), contexte 32K, Apache 2.0. Sorti en 2025.',
          '**48 Go et plus :** Llama 3.3 70B (`llama3.3:70b`, environ 43 Go en Q4_K_M). Sorti en décembre 2024 ; licence communautaire Meta.',
          '**Fine-tunings à faibles refus :** Hermes 4.3 36B (Apache 2.0) et Dolphin 3.0 (variante Mistral 24B, février 2025).',
          '**Base d\'échantillonnage prose :** température 1,0, top-p 0,95, min-p 0,05 ; ajoutez une pénalité de répétition ou DRY si les scènes bouclent.',
          '**Règle mémoire :** les tailles Ollama ne comptent que les poids. Ajoutez 2–6 Go pour le cache KV dès que vous agrandissez la fenêtre de contexte pour de longues scènes.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Comment ces choix ont été faits',
        content: '**Ce classement est une synthèse éditoriale de sources publiées, pas une nouvelle campagne de tests PromptQuorum.** Nous avons comparé les fiches de modèles officielles, la bibliothèque Ollama (tailles, contexte, tags) et les classements publics d\'écriture créative, puis associé chaque modèle à un palier matériel.',
        items: [
          '**Tailles et contexte :** relevés sur les pages Ollama de [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Mistral Small](https://ollama.com/library/mistral-small) et sur les fiches Hugging Face. Poids seulement ; la mémoire de contexte s\'ajoute.',
          '**Scores créatifs :** EQ-Bench Creative Writing v3 et Open Writing Leaderboard, tels que les reprennent des trackers tiers. Gemma 4 31B a son propre score, Qwen3.8-27B pas encore. Quand un score appartient à un modèle voisin, nous le précisons.',
          '**Dates de sortie :** Qwen3.8-27B (août 2026), Gemma 4 (juillet 2026), Mistral Small 3 (2025), Llama 3.3 70B (décembre 2024), Hermes 4.3 36B (décembre 2025), Dolphin 3.0 (février 2025).',
          '**Ce que nous n\'avons pas fait :** nous n\'avons pas fait tourner un nouveau jeu de prompts noté sur ces modèles. Les verdicts ci-dessous suivent les sources citées et les fiches ; les mentions « idéal pour » sont des recommandations, pas des résultats mesurés.',
          'Pour les techniques de prompt qui améliorent la sortie créative sur n\'importe quel modèle, voir [contrôle de la température et du top-p](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity) et [prompting par persona](/fr/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Les benchmarks d\'écriture créative sont subjectifs et les classements se contredisent. Considérez chaque choix comme une hypothèse de départ : faites passer les trois mêmes scènes par deux candidats et gardez celui dont la voix vous plaît le plus.',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Meilleur modèle par palier de VRAM',
        content: '**Choisissez d\'abord selon la mémoire : le modèle doit tenir avec de la marge pour le contexte.** Les tailles sont celles des téléchargements Ollama en quantification 4 bits par défaut ; ajoutez 2–6 Go de cache KV pour les longues scènes.',
        columns: [
          'Votre mémoire',
          'Modèle',
          'Poids',
          'Contexte',
        ],
        rows: [
          {
            'Votre mémoire': 'GPU 8 Go',
            'Modèle': 'Qwen3.5 9B (`qwen3.5:9b`)',
            Poids: '6,6–7,6 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 12 Go',
            'Modèle': 'Gemma 4 12B (`gemma4:12b`)',
            Poids: '7,7–8,0 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 16 Go',
            'Modèle': 'Mistral Small 3 24B (`mistral-small:24b`)',
            Poids: '14 Go',
            Contexte: '32K',
          },
          {
            'Votre mémoire': 'GPU 24 Go / Mac 32 Go',
            'Modèle': 'Gemma 4 31B (`gemma4:31b`)',
            Poids: '19–20 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 24 Go / Mac 32 Go',
            'Modèle': 'Qwen3.8-27B (`qwen3.8:27b`)',
            Poids: '18 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': 'GPU 24 Go, sortie plus rapide',
            'Modèle': 'Gemma 4 26B-A4B (`gemma4:26b`)',
            Poids: '16–19 Go',
            Contexte: '256K',
          },
          {
            'Votre mémoire': '48 Go et plus',
            'Modèle': 'Llama 3.3 70B (`llama3.3:70b`)',
            Poids: '~43 Go',
            Contexte: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Sur un Mac de 32 Go, la mémoire unifiée est partagée avec macOS. Comptez environ 24 Go utilisables pour le modèle et le contexte, ce qui laisse Gemma 4 31B et Qwen3.8-27B à l\'aise.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparatif direct : modèles locaux pour l\'écriture créative',
        content: '**Aucun modèle ne gagne toutes les tâches ; choisissez selon le palier matériel et ce qui porte votre travail.** Le tableau liste les modèles de ce guide avec taille, poids et date de sortie.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Gemma 4 31B et Qwen3.8-27B sont les meilleurs choix locaux pour l\'écriture créative sur un GPU de 24 Go ; Gemma 4 12B, Mistral Small 3 24B et Llama 3.3 70B couvrent les paliers 12 Go, 16 Go et 48 Go ; Hermes 4.3 36B est l\'option à faibles refus.',
          },
          {
            type: 'plain-terms',
            text: 'Prenez le plus grand modèle qui tient dans votre mémoire avec de la marge pour le contexte. Sur une carte de 24 Go, c\'est Gemma 4 31B pour la prose ou Qwen3.8-27B pour les longs projets. N\'ajoutez un fine-tuning à faibles refus que si le modèle instruct refuse des scènes que vous devez écrire.',
          },
        ],
        columns: [
          'Modèle',
          'Taille',
          'Poids (Ollama)',
          'Sortie',
          'Idéal pour',
        ],
        rows: [
          {
            'Modèle': 'Gemma 4 31B',
            Taille: '31B dense',
            'Poids (Ollama)': '19–20 Go',
            Sortie: 'Juil. 2026',
            'Idéal pour': 'Prose sur 24 Go ; score EQ-Bench propre',
          },
          {
            'Modèle': 'Qwen3.8-27B',
            Taille: '27B dense',
            'Poids (Ollama)': '18 Go',
            Sortie: 'Août 2026',
            'Idéal pour': 'Longs projets, respect des consignes',
          },
          {
            'Modèle': 'Gemma 4 26B-A4B',
            Taille: '26B MoE, 4B actifs',
            'Poids (Ollama)': '16–19 Go',
            Sortie: 'Juil. 2026',
            'Idéal pour': 'Génération plus rapide sur 24 Go',
          },
          {
            'Modèle': 'Gemma 4 12B',
            Taille: '12B',
            'Poids (Ollama)': '7,7–8,0 Go',
            Sortie: 'Juil. 2026',
            'Idéal pour': 'GPU 12 Go, long contexte',
          },
          {
            'Modèle': 'Mistral Small 3 24B',
            Taille: '24B dense',
            'Poids (Ollama)': '14 Go',
            Sortie: '2025',
            'Idéal pour': 'GPU 16 Go ; ancien mais éprouvé',
          },
          {
            'Modèle': 'Llama 3.3 70B',
            Taille: '70B dense',
            'Poids (Ollama)': '~43 Go',
            Sortie: 'Déc. 2024',
            'Idéal pour': '48 Go et plus ; référence ancienne',
          },
          {
            'Modèle': 'Hermes 4.3 36B',
            Taille: '36B dense',
            'Poids (Ollama)': '~21–23 Go (est.)',
            Sortie: 'Déc. 2025',
            'Idéal pour': 'Moins de refus, Apache 2.0',
          },
          {
            'Modèle': 'Dolphin 3.0',
            Taille: '24B (variante Mistral)',
            'Poids (Ollama)': '~14 Go',
            Sortie: 'Févr. 2025',
            'Idéal pour': 'Ancienne option à faibles refus',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Le montage à deux modèles est courant : un modèle instruct au quotidien, plus Hermes 4.3 36B pour les scènes que le modèle instruct refuse. Les deux coexistent dans `ollama list`.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Verdict par modèle',
        items: [
          '**Gemma 4 31B** — choix prose pour 24 Go. C\'est le seul modèle de cette sélection avec son propre résultat EQ-Bench Creative Writing v3 (rubrique 16,01, Elo 1407,6, selon un tracker tiers). Contexte 256K et Apache 2.0. Google indique température 1,0, top-p 0,95, top-k 64 par défaut.',
          '**Qwen3.8-27B** — choix pour longs projets. 262 144 tokens de contexte natif (extensible à 1M avec YaRN), Apache 2.0, environ 18 Go sur Ollama. Alibaba le positionne pour le code, les agents et la recherche ; la fiche ne dit rien de l\'écriture créative et aucun score créatif n\'est publié, vérifiez donc la voix sur vos scènes. Le mode thinking est activé par défaut ; désactivez-le pour la prose.',
          '**Gemma 4 26B-A4B et 12B** — même famille, compromis différents. Le modèle 26B en mixture of experts active environ 4B de paramètres par token ; il génère donc plus vite que le 31B à mémoire comparable. Le 12B tient sur les cartes de 12 Go et offre toujours un contexte 256K.',
          '**Mistral Small 3 24B** — l\'option 16 Go. Apache 2.0, environ 14 Go, contexte 32K. C\'est un modèle de 2025 et, avec Llama, la plus ancienne recommandation ici ; il reste car peu de modèles plus récents tiennent sur 16 Go. Son successeur, Mistral Small 4 (mars 2026, Apache 2.0), est un modèle mixture of experts de 119B avec environ 6B de paramètres actifs, très au-delà de 16 Go.',
          '**Llama 3.3 70B** — la référence 48 Go. Modèle de décembre 2024 sous licence communautaire Meta. Sur les machines de 48 Go et plus, il reste un choix solide et très bien supporté ; en dessous, il n\'est pas praticable.',
          '**Hermes 4.3 36B** — choix à faibles refus. Bâti sur ByteDance Seed-OSS-36B sous Apache 2.0, avec des quantifications GGUF sur Hugging Face. Nous Research décrit des refus fortement réduits ; Hermes 4.3 a répondu à 72–75 % des prompts de son propre RefusalBench. Sa fiche suggère température 0,6, top-p 0,95, top-k 20 ; augmentez la température pour la prose.',
          '**Dolphin 3.0** — ancienne option à faibles refus. La plus récente génération Dolphin que nous ayons pu confirmer est Dolphin 3.0 (février 2025, dont une variante Mistral 24B). Utilisez-le si vous voulez un modèle non censuré de la famille Mistral ; Hermes 4.3 est le choix plus récent.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La cohérence de voix est la mesure que les auteurs sous-estiment le plus. Un modèle qui écrit un paragraphe brillant mais perd le débit du personnage au cinquième paragraphe est moins bon qu\'un modèle régulier. Testez la continuité sur de longues sessions, pas seulement la qualité d\'une sortie isolée.',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Meilleurs modèles Ollama pour l\'écriture créative',
        content: '**Cinq commandes `ollama pull` couvrent chaque palier matériel de ce guide.** Lancez ensuite `ollama list` pour vérifier que le modèle est installé.',
        items: [
          '**24 Go, prose :** `ollama pull gemma4:31b` — puis `ollama run gemma4:31b`.',
          '**24 Go, longs projets :** `ollama pull qwen3.8:27b` — lancez avec `ollama run qwen3.8:27b --think=false` pour désactiver le thinking en prose.',
          '**12 Go :** `ollama pull gemma4:12b`.',
          '**16 Go :** `ollama pull mistral-small:24b`.',
          '**48 Go et plus :** `ollama pull llama3.3:70b`.',
          '**Fine-tuning à faibles refus :** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF` récupère le GGUF de Hermes 4.3 sur Hugging Face ; choisissez une quantification 4 bits sur une carte de 24 Go.',
          '**Augmentez la fenêtre de contexte pour les longues scènes.** Le contexte par défaut d\'Ollama est petit. Dans une session interactive, saisissez `/set parameter num_ctx 16384` ou définissez `num_ctx` dans un Modelfile. Des valeurs plus grandes consomment plus de VRAM.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Modèles locaux ou cloud pour écrire',
        content: '**Les modèles cloud fermés obtiennent de meilleurs scores sur les benchmarks créatifs ; les modèles locaux gagnent sur la confidentialité, le coût et le contrôle.** Qui cherche « meilleur LLM pour écrire » sans « local » obtient des classements différents de ce guide.',
        items: [
          '**Les modèles fermés mènent.** Sur EQ-Bench Creative Writing v3, repris par [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores), Claude Opus 4.7 est premier avec 2 206 Elo, devant GPT-5.5 à 2 035.',
          '**Les meilleures entrées open-weight demandent un datacenter.** Kimi K2.6 (1 782 Elo) est la meilleure entrée open-weight de cette liste. Featherless donne GLM-5.3 à 753B et DeepSeek-V4.1-Flash à 763B de paramètres, ce qu\'aucune machine grand public ne fait tourner.',
          '**Ce qui tourne sur un GPU.** Gemma 4 31B a obtenu 1407,6 Elo et une rubrique de 16,01 sur le même benchmark. Les scores de trackers différents ne partagent pas d\'échelle ; comparez au sein d\'une même liste.',
          '**Quand le local s\'impose.** Manuscrits non publiés, travaux clients sous NDA, contenus qu\'un fournisseur cloud refuserait, travail hors ligne et projets où la facture API mensuelle est la contrainte.',
          '**Flux hybride.** Brouillon et brainstorming en local ; un modèle cloud seulement pour une finition non sensible si vous voulez la qualité supplémentaire.',
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Température et top-p pour le travail créatif',
        content: '**L\'écriture créative demande des températures d\'échantillonnage plus élevées que le code.** Les valeurs par défaut de la plupart des interfaces de chat sont réglées pour les questions-réponses ; une température de 0,7 donne une prose plate et prévisible sur des prompts créatifs.',
        items: [
          '**Les valeurs des éditeurs sont un plancher, pas une cible.** Google indique température 1,0, top-p 0,95, top-k 64 pour Gemma 4 ; Alibaba indique 1,0 / 0,95 / top-k 20 pour Qwen3.8 en mode thinking et 0,7 / 0,8 hors thinking ; Nous indique 0,6 / 0,95 / top-k 20 pour Hermes 4.3. Partez de là, puis ajustez pour la prose.',
          '**Base pour la prose :** température 0,95–1,0, top-p 0,92–0,95, pénalité de répétition 1,05–1,1. Ajustez ensuite selon la tâche.',
          '**Dialogue serré :** température 0,7–0,85, top-p 0,9. Des températures plus basses gardent les voix des personnages cohérentes d\'une réplique à l\'autre.',
          '**Prose lyrique et poésie :** température 1,0–1,2, top-p 0,95. Des températures plus hautes débloquent des choix de mots inattendus.',
          '**Fiction surréaliste ou de genre :** température 1,1–1,3, top-p 0,95–0,98.',
          '**Scènes menées par l\'intrigue (action, enquête, rebondissements) :** température 0,85–0,95, top-p 0,9. Elles demandent plus de respect des consignes que de nouveauté.',
          '**Désactivez le mode thinking pour la fiction.** Les tokens de raisonnement ajoutent de la latence et donnent souvent une prose planifiée et lisse. Qwen3.8 accepte `enable_thinking: false` ; dans Ollama, utilisez `--think=false`.',
          '**min_p (0,05–0,1) :** une alternative au top-p qui ajuste le seuil à la probabilité du meilleur token. Plus permissif sur les prompts créatifs, sans l\'incohérence d\'un top-p très élevé. Utilisez-le là où votre backend expose le réglage.',
          '**Pénalité de répétition DRY (multiplicateur 0,8, base 1,75, longueur autorisée 2) :** détecte les répétitions au niveau des expressions que la pénalité de répétition standard laisse passer, ce qui aide en session longue. Disponible dans les backends basés sur llama.cpp comme KoboldCpp ; vérifiez si votre interface l\'expose.',
          'Pour une analyse plus complète de l\'intérêt de ces paramètres et de leurs interactions, voir [contrôle de la température et du top-p](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Testez l\'échantillonnage sur une courte scène par modèle : trois essais par réglage, puis choisissez la température où le modèle sonne le plus vivant sans perdre le prompt. Les réglages ne se transfèrent pas parfaitement d\'un modèle à l\'autre.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Modèles uncensored : ce que c\'est et quand ils comptent',
        content: '**Uncensored ne veut pas dire contraire à l\'éthique.** Cela signifie que le comportement de refus du modèle a été réduit par fine-tuning, de sorte qu\'il suit le prompt au lieu de décliner. L\'auteur reste l\'auteur.',
        items: [
          '**Techniquement.** Des modèles comme Hermes 4.3 et Dolphin 3.0 sont des fine-tunings dont le post-entraînement réduit les refus sur les prompts matures, violents ou moralement complexes. Nous Research décrit des refus fortement réduits et indique que Hermes 4.3 a répondu à 72–75 % des prompts de son propre RefusalBench. Des variantes communautaires « abliterated » ou « heretic » de modèles plus récents existent aussi sur Ollama ; leur qualité n\'est pas auditée.',
          '**Quand ils comptent pour le travail créatif.** Fiction adulte, polar avec violence explicite, horreur, écriture historiquement exacte sur la guerre ou les atrocités, et antagonistes moralement complexes que le modèle instruct ne voudra pas incarner de façon convaincante.',
          '**Leurs limites.** Ils suivent le prompt, y compris un prompt mal écrit. Les modèles instruct adoucissent souvent un prompt vague en quelque chose de publiable ; les modèles à faibles refus donnent exactement ce que vous avez demandé.',
          '**Limites éthiques et légales.** Qu\'un modèle écrive quelque chose n\'est pas un permis d\'écrire des contenus qui visent des personnes réelles, mettent en scène des situations non consenties impliquant des personnes identifiables, ou sont illégaux là où vous vivez. L\'hébergement local ne change pas la loi ; il change qui peut voir le brouillon. Les lois varient selon les pays, et ceci n\'est pas un conseil juridique.',
          '**Pour approfondir** l\'éthique, la légalité et les bonnes pratiques, voir [LLM locaux uncensored pour l\'écriture créative : éthique, légalité et bonnes pratiques](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored est un choix de workflow, pas une identité. Beaucoup d\'auteurs rédigent avec le modèle instruct et ne passent à un fine-tuning à faibles refus que pour certaines scènes. Deux modèles installés côte à côte est le schéma habituel.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Interfaces pour le travail créatif',
        content: '**L\'interface de chat dans laquelle vous écrivez compte autant que le modèle.** Quatre options couvrent la plupart des usages ; choisissez selon la forme de votre workflow.',
        items: [
          '**Open WebUI** — le choix généraliste. Interface de type ChatGPT, changement de modèle en un clic, notes de personnage dans le prompt système, import de documents comme contexte. Idéal pour la rédaction riche en prose.',
          '**SillyTavern** — le choix jeu de rôle et dialogue. Cartes de personnage, gestion de personas, lorebooks pour le worldbuilding et chat de groupe pour les scènes à plusieurs personnages. Idéal pour le travail centré sur le dialogue et les projets de monde au long cours.',
          '**Agnai et RisuAI** — alternatives plus légères à SillyTavern, prise en main plus simple, moins de personnalisation.',
          '**CLI Ollama seule plus un éditeur de texte** — le choix minimal. `ollama run gemma4:31b` et collez les scènes dans votre brouillon. On perd le contexte de personnage persistant, mais on gagne en concentration.',
          'Pour le comparatif direct des interfaces orientées jeu de rôle, voir [SillyTavern vs Agnai vs RisuAI : meilleure interface locale de jeu de rôle](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Rédiger et corriger demandent des outils différents. Générez dans l\'interface de chat, puis exportez vers un éditeur de texte brut pour la révision. Corriger dans la fenêtre de chat apprend à demander au modèle de réparer la prose au lieu de la réviser soi-même.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Décision : quel modèle pour votre travail',
        content: '**D\'abord votre mémoire, ensuite votre tâche.**',
        columns: [
          'Votre situation',
          'Choix',
        ],
        rows: [
          {
            'Votre situation': 'GPU 24 Go ou Mac 32 Go, prose d\'abord',
            Choix: 'Gemma 4 31B',
          },
          {
            'Votre situation': 'GPU 24 Go, projet de la taille d\'un roman',
            Choix: 'Qwen3.8-27B (contexte 256K)',
          },
          {
            'Votre situation': 'GPU 24 Go, sortie plus rapide voulue',
            Choix: 'Gemma 4 26B-A4B',
          },
          {
            'Votre situation': 'GPU 12 Go',
            Choix: 'Gemma 4 12B',
          },
          {
            'Votre situation': 'GPU 16 Go',
            Choix: 'Mistral Small 3 24B',
          },
          {
            'Votre situation': '48 Go et plus, un modèle pour tout',
            Choix: 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            'Votre situation': 'Le modèle instruct refuse des scènes utiles',
            Choix: 'Hermes 4.3 36B (gardez un modèle instruct)',
          },
          {
            'Votre situation': 'Un modèle pour commencer, ajuster ensuite',
            Choix: 'Gemma 4 31B ou Qwen3.8-27B, selon la mémoire',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisissez Gemma 4 31B ou Qwen3.8-27B sur un GPU de 24 Go, Gemma 4 12B avec 12 Go, Mistral Small 3 24B avec 16 Go, Llama 3.3 70B à partir de 48 Go et Hermes 4.3 36B pour les scènes que les modèles instruct refusent.',
          },
          {
            type: 'plain-terms',
            text: 'Commencez par le plus grand modèle qui tient dans votre mémoire avec de la marge pour le contexte. Ne passez à un spécialiste que lorsqu\'une tâche, comme la continuité longue ou les scènes matures, devient le goulot d\'étranglement. Deux installations ne coûtent que de l\'espace disque.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La plupart des auteurs réfléchissent trop au modèle et pas assez au prompt. Un prompt système avec notes de personnage, échantillons de voix et point de vue explicite fait plus que changer de modèle. Voir [prompting par persona](/fr/prompt-engineering/persona-prompting).',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes dans le choix et l\'usage des modèles locaux pour l\'écriture créative',
        items: [
          '**Erreur 1 : choisir selon le rang général aux benchmarks.** Les classements de code et de raisonnement corrèlent mal avec la qualité de prose. Regardez les classements créatifs comme EQ-Bench, puis testez sur vos propres scènes.',
          '**Erreur 2 : utiliser l\'échantillonnage du code.** Une température de 0,2–0,4 donne une prose plate. Le travail créatif demande environ 0,9–1,1.',
          '**Erreur 3 : laisser le mode thinking activé.** Les modèles à raisonnement planifient avant d\'écrire, ce qui peut rendre la fiction construite. Désactivez le thinking pour la prose.',
          '**Erreur 4 : ignorer la mémoire de contexte.** Un modèle 31B à 19–20 Go laisse peu de place sur une carte de 24 Go dès que vous agrandissez la fenêtre de contexte. Prévoyez 2–6 Go de cache KV.',
          '**Erreur 5 : des prompts système trop maigres.** « Tu es un assistant utile » est le pire prompt pour le travail créatif. Associez notes de personnage, point de vue et temps au [prompting négatif](/fr/prompt-engineering/negative-prompting) pour écarter les clichés.',
          '**Erreur 6 : corriger dans la fenêtre de chat.** Générez dans le chat ; révisez dans un éditeur. Les auteurs qui laissent le modèle réviser perdent vite leur voix.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le principal risque de compétence avec l\'IA d\'écriture créative est de déléguer la passe de révision. La génération est un travail mécanique qui profite d\'un modèle ; la révision est ce qui rend la prose vôtre.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Bibliothèque Ollama : Gemma 4](https://ollama.com/library/gemma4) — tags, tailles de téléchargement et fenêtres de contexte.',
          '[Bibliothèque Ollama : Qwen3.8](https://ollama.com/library/qwen3.8) — tag, taille et capacités.',
          '[Hugging Face : fiche du modèle Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — licence, longueur de contexte, échantillonnage recommandé.',
          '[Hugging Face : fiche du modèle Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — licence, longueur de contexte, valeurs d\'échantillonnage par défaut.',
          '[Hugging Face : Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — modèle de base, licence, benchmark de refus, quantifications GGUF.',
          '[Bibliothèque Ollama : Mistral Small](https://ollama.com/library/mistral-small) — taille, contexte et licence de Mistral Small 3 24B.',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html) et [scores EQ-Bench d\'evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) — chiffres de classement cités plus haut.',
          '[Featherless : meilleurs modèles ouverts pour l\'écriture créative](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — tailles open-weight et chiffres EQ-Bench de Gemma 4 31B.',
          '[Documentation SillyTavern](https://docs.sillytavern.app/) — cartes de personnage, personas, chat de groupe.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quel est le meilleur LLM local pour l\'écriture créative ?',
            a: 'Gemma 4 31B et Qwen3.8-27B sont les meilleurs points de départ locaux en 2026, et tous deux tiennent sur un GPU de 24 Go (environ 18–20 Go de poids). Gemma 4 31B est le choix prose avec son propre score EQ-Bench publié ; Qwen3.8-27B est le choix long contexte. Sur des cartes plus petites, prenez Gemma 4 12B (12 Go) ou Mistral Small 3 24B (16 Go).',
          },
          {
            q: 'Quel est le meilleur modèle Ollama pour l\'écriture créative ?',
            a: 'Sur un GPU de 24 Go, `ollama pull gemma4:31b` pour la prose ou `ollama pull qwen3.8:27b` pour les longs projets. Avec 12 Go, `gemma4:12b` ; avec 16 Go, `mistral-small:24b` ; à partir de 48 Go, `llama3.3:70b`. Augmentez `num_ctx` pour les longues scènes et désactivez le thinking pour la fiction.',
          },
          {
            q: 'Quel est le meilleur LLM local pour écrire de la fiction et des histoires ?',
            a: 'Prenez le plus grand modèle qui tient dans votre mémoire avec de la marge pour le contexte. Gemma 4 31B est le choix prose sur 24 Go, Qwen3.8-27B convient aux projets de la taille d\'un roman grâce à son contexte 256K, et Llama 3.3 70B est la référence à partir de 48 Go. Utilisez une température de 0,9–1,1 et un prompt système avec point de vue, temps et échantillons de voix.',
          },
          {
            q: 'Quel modèle local est le meilleur pour le worldbuilding ?',
            a: 'Le long contexte compte le plus : Qwen3.8-27B et Gemma 4 offrent tous deux 256K tokens, assez pour garder une bible de lore et des résumés de chapitres dans le prompt. Associez l\'un ou l\'autre à des lorebooks SillyTavern ou à un document de monde épinglé, et regroupez factions, règles et noms dans un seul bloc de référence.',
          },
          {
            q: 'Quel LLM est le meilleur pour écrire un roman ?',
            a: 'En local : Qwen3.8-27B (contexte 256K) ou Gemma 4 31B (contexte 256K) sur un GPU de 24 Go. Le goulot d\'étranglement est la structure, pas la taille du modèle : un plan, une bible des personnages et des résumés de chapitres assurent la continuité. Les modèles cloud fermés obtiennent de meilleurs scores créatifs, mais envoient votre manuscrit à un tiers.',
          },
          {
            q: 'Quel est le meilleur modèle local avec 32 Go de VRAM ou de mémoire unifiée ?',
            a: 'Gemma 4 31B (19–20 Go) ou Qwen3.8-27B (18 Go) avec une fenêtre de contexte plus grande ; la mémoire supplémentaire par rapport à 24 Go finance le cache KV. Gemma 4 26B-A4B est l\'alternative plus rapide. Un modèle 70B ne tient pas confortablement sous 48 Go.',
          },
          {
            q: 'Qu\'est-ce qu\'un LLM local uncensored et quand en utiliser un ?',
            a: 'C\'est un fine-tuning dont le post-entraînement réduit les refus sur les prompts matures ou moralement complexes, de sorte que le modèle suit le prompt au lieu de décliner. Hermes 4.3 36B est l\'option la plus récente que nous ayons pu confirmer ; Dolphin 3.0 est plus ancien. Utilisez-en un pour la fiction adulte ou l\'écriture historiquement exacte, et gardez un modèle instruct pour le reste.',
          },
          {
            q: 'Quelle température utiliser pour l\'écriture créative ?',
            a: 'Température 0,9–1,1 avec top-p 0,92–0,95 pour la prose. Le dialogue serré demande 0,7–0,85, la poésie 1,0–1,2, le surréalisme ou la fiction de genre 1,1–1,3. Les valeurs des éditeurs, comme 1,0 / 0,95 / top-k 64 pour Gemma 4, sont un bon point de départ. Désactivez le mode thinking pour la fiction.',
          },
          {
            q: 'Les modèles locaux d\'écriture créative valent-ils ChatGPT ou Claude ?',
            a: 'Pas sur les benchmarks. Sur EQ-Bench Creative Writing v3, les modèles fermés comme Claude Opus 4.7 (2 206 Elo) mènent, et les meilleures entrées open-weight demandent du matériel de datacenter. Un modèle local de 24 Go peut pourtant suffire pour rédiger, et il garde les manuscrits privés. Un échantillonnage calibré et un bon prompt système comblent une grande part de l\'écart pratique.',
          },
          {
            q: 'Un modèle local peut-il écrire un roman entier ?',
            a: 'Il peut aider à en rédiger un. Un modèle à contexte 256K comme Qwen3.8-27B ou Gemma 4 peut garder en mémoire un long plan et plusieurs chapitres, mais le cache KV grandit avec le contexte : vérifiez la VRAM. Rédigez section par section avec une bible des personnages et un lorebook ; sans eux, tout modèle dérive.',
          },
          {
            q: 'Les modèles uncensored produisent-ils du contenu illégal ?',
            a: 'Ils produisent le texte que le prompt demande ; la responsabilité juridique incombe à l\'auteur et à la publication, pas au modèle. Des cadres comme l\'EU AI Act, le § 184/§ 184c StGB allemand et le droit national sur l\'obscénité s\'appliquent quelle que soit la façon dont le texte a été généré. L\'hébergement local change qui voit le brouillon, pas ce qui est légal. Ceci n\'est pas un conseil juridique.',
          },
          {
            q: 'Comment éviter le cliché « shiver down their spine » ?',
            a: 'Listez 8–12 expressions interdites dans le prompt système (« do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\' »). Gardez la température à 0,85–1,0 plutôt qu\'à 1,2+ et ajoutez une pénalité DRY là où votre backend la gère ; une simple pénalité de répétition n\'attrape pas les clichés au niveau des expressions. Une révision manuelle est le dernier filtre. Voir [prompting négatif](/fr/prompt-engineering/negative-prompting).',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) — le guide de référence du paysage des modèles pour le code, le raisonnement et l\'usage général.',
          '[Meilleurs LLM locaux pour l\'écriture créative en 2026](/fr/local-llms/best-local-llms-for-creative-writing) — un panorama plus large pour la fiction, la poésie et l\'écriture longue.',
          '[Test de Backyard AI : chat de personnages et jeu de rôle IA en local](/fr/power-local-llm/backyard-ai-review-local-roleplay) — application de bureau gratuite avec Character Hub intégré ; l\'alternative simple aux interfaces ci-dessus.',
          '[SillyTavern vs Agnai vs RisuAI : meilleure interface locale de jeu de rôle](/fr/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparatif direct des interfaces orientées jeu de rôle.',
          '[Prompts de LLM local pour auteurs de fiction : modèles et techniques](/fr/power-local-llm/local-llm-prompts-for-fiction-writers) — modèles de prompts prêts à copier pour le développement de personnages, le dialogue et la révision.',
          '[LLM locaux uncensored pour l\'écriture créative : éthique, légalité et bonnes pratiques](/fr/power-local-llm/uncensored-local-llm-creative-writing-ethics) — où passent les limites légales et éthiques.',
          '[Température et top-p : contrôler la créativité de l\'IA](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity) — le versant prompt engineering des paramètres d\'échantillonnage.',
          '[Prompting négatif](/fr/prompt-engineering/negative-prompting) — préciser ce qu\'il ne faut pas faire ; un multiplicateur de force pour les prompts système en création.',
          '[Test de Locally Uncensored : chat, image et vidéo locaux dans une seule app](/fr/power-local-llm/locally-uncensored-review) — une application de bureau tout-en-un construite autour de modèles locaux non censurés, si vous préférez une app à une liste de modèles.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: '創作向けベストローカルLLM（2026年）：小説・対話・世界観構築',
    seoTitle: '創作向けベストローカルLLM（2026年）：6つの選択肢',
    intro: '創作は、ローカルLLMがプライバシーとコスト以上の価値を発揮する用途です。設定できない拒否がなく、トークン課金もなく、下書きがマシンの外に出ません。このガイドでは、2026年に試す価値のあるオープンウェイトモデル（Gemma 4、Qwen3.8-27B、Mistral Small 3、Llama 3.3 70B、および拒否の少ないファインチューンのHermes 4.3とDolphin 3.0）を、ハードウェア帯ごとにOllamaの取得コマンドと散文向けサンプリング設定付きで整理します。',
    metaDescription: 'Gemma 4 31BとQwen3.8-27Bは24GB GPU1枚で動作。小説・対話・世界観構築に向くローカルLLMをVRAM帯別にOllamaコマンド付きで紹介します。',
    heroImage: '/images/best-local-llm-creative-writing-hero-ja.webp',
    twitterDescription: '2026年の創作向けベストローカルLLMをVRAM帯別に紹介：Gemma 4、Qwen3.8-27B、Mistral Small 3、Llama 3.3 70B、Hermes 4.3。Ollamaコマンドとサンプリング設定付き。',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: 'プライバシー、声の一貫性、成熟したテーマへの対応がベンチマークのスコアより重要な創作作業にローカルLLMを使う、小説家、脚本家、ゲームデザイナー、世界観設計者、ロールプレイ愛好者。',
    readTime: '読了目安12分',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルLLM 創作',
    targetKeywords: [
      '創作 ローカルLLM おすすめ',
      '小説執筆 ローカルLLM',
      '創作 Ollama おすすめモデル',
      '物語執筆 ローカルLLM',
      '世界観構築 ローカルLLM',
      'uncensored ローカルLLM',
    ],
    leadAnswerBlock: '**2026年の創作向けローカルLLMの出発点として最適なのはGemma 4 31BとQwen3.8-27Bで、どちらも24GB GPU 1枚で動作します（重みはそれぞれ約18〜20GB）。** Gemma 4 31Bは散文向けの選択で、この一覧で唯一、EQ-Bench Creative Writing v3の独自スコアが公開されています。Qwen3.8-27Bは長文脈と指示追従向けの選択です（256Kトークン）。12GBならGemma 4 12B、16GBならMistral Small 3 24B、48GB以上ならLlama 3.3 70Bを選びます。インストラクトモデルがフィクションとして設定した場面を拒否する場合は、拒否の少ない選択肢としてHermes 4.3 36Bがあります。温度はコーディング用の0.2〜0.4ではなく0.9〜1.1にします。クローズドなクラウドモデルは創作ベンチマークで依然として高スコアですが、ローカルモデルはプライバシー、コスト、制御で優れています。**',
    quickAnswerTop: {
      ja: {
        question: '創作に最適なローカルLLMは？',
        answer: '2026年の創作向けローカルLLMの最有力はGemma 4 31BとQwen3.8-27Bです。どちらも24GB GPUに収まります（重みは約18〜20GB）。散文ならGemma 4 31B、長文脈ならQwen3.8-27Bです。12GBならGemma 4 12B、16GBならMistral Small 3 24B、48GB以上ならLlama 3.3 70Bを使います。拒否を減らしたい場合はHermes 4.3 36Bです。',
        bullets: [
          '24GB GPU：Gemma 4 31B（約19〜20GB）またはQwen3.8-27B（約18GB）。',
          '12GB GPU：Gemma 4 12B（約8GB）。長い文脈の余裕あり。',
          '16GB GPU：Mistral Small 3 24B（約14GB）、32Kコンテキスト。',
          '48GB以上：Llama 3.3 70B（Q4_K_Mで約43GB）。',
          '散文のサンプリング：温度0.9〜1.1、top-p 0.92〜0.95、thinkingモードはオフ。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: '重要ポイント',
        anchor: '#key-takeaways',
      },
      {
        label: 'クイックファクト',
        anchor: '#quick-facts',
      },
      {
        label: '選定の方法',
        anchor: '#how-we-tested',
      },
      {
        label: 'VRAM帯別のおすすめモデル',
        anchor: '#hardware',
      },
      {
        label: '直接比較',
        anchor: '#comparison',
      },
      {
        label: 'モデル別の評価',
        anchor: '#verdicts',
      },
      {
        label: '創作向けOllamaモデル',
        anchor: '#ollama',
      },
      {
        label: '執筆用のローカルモデルとクラウドモデル',
        anchor: '#cloud-vs-local',
      },
      {
        label: '創作向けの温度とtop-p',
        anchor: '#sampling',
      },
      {
        label: 'Uncensoredモデルとは',
        anchor: '#uncensored',
      },
      {
        label: '創作向けフロントエンド',
        anchor: '#frontends',
      },
      {
        label: '判断：モデルの選び方',
        anchor: '#decision',
      },
      {
        label: 'よくある間違い',
        anchor: '#common-mistakes',
      },
      {
        label: '出典',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: '関連記事',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 31Bは24GB GPU向けの散文の選択です。** 重みは約19〜20GB、256Kコンテキスト、Apache 2.0で、この一覧で唯一、EQ-Bench Creative Writing v3の独自スコア（ルーブリック16.01、Elo 1407.6）が公開されています。',
          '**Qwen3.8-27Bは長文脈と指示追従向けの選択です。** Ollamaで約18GB、256Kコンテキスト、Apache 2.0。創作スコアはまだ公開されておらず、散文の品質は未検証です。自分の場面で試してください。',
          '**ランキングではなくVRAMでモデルを選びます。** 12GB：Gemma 4 12B。16GB：Mistral Small 3 24B。24GB：Gemma 4 31BまたはQwen3.8-27B。48GB以上：Llama 3.3 70B。',
          '**Hermes 4.3 36Bは拒否の少ない選択です。** Apache 2.0で、ByteDance Seed-OSS-36Bがベース。Nous Researchは拒否が大幅に減ったと説明しています。Dolphin 3.0は旧世代の代替です。',
          '**モデルを替えるよりサンプリングのほうが効きます。** 散文は温度0.9〜1.1、top-p 0.92〜0.95。小説ではthinkingモードをオフに。コーディング用設定（0.2〜0.4）は平板な文章になります。',
          '**クローズドなクラウドモデルが創作ベンチマークでは依然として首位です。** EQ-Bench Creative Writing v3の最上位はClaude Opus 4.7（2,206 Elo）。掲載中で最高のオープンウェイトはKimi K2.6（1,782）ですが、一般向けハードウェアでは動かせません。ローカルはプライバシー、コスト、制御で勝ります。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**24GB GPUまたは32GB Mac：** Gemma 4 31B（`gemma4:31b`、19〜20GB）またはQwen3.8-27B（`qwen3.8:27b`、18GB）。どちらもApache 2.0、256Kコンテキスト。',
          '**12GB GPU：** Gemma 4 12B（`gemma4:12b`、7.7〜8.0GB）、256Kコンテキスト。',
          '**16GB GPU：** Mistral Small 3 24B（`mistral-small:24b`、14GB）、32Kコンテキスト、Apache 2.0。2025年公開。',
          '**48GB以上：** Llama 3.3 70B（`llama3.3:70b`、Q4_K_Mで約43GB）。2024年12月公開、Metaコミュニティライセンス。',
          '**拒否の少ないファインチューン：** Hermes 4.3 36B（Apache 2.0）とDolphin 3.0（Mistral 24Bバリアント、2025年2月）。',
          '**散文のサンプリング基準：** 温度1.0、top-p 0.95、min-p 0.05。場面がループする場合はリピートペナルティまたはDRYを追加。',
          '**メモリの目安：** Ollamaのサイズは重みのみです。長い場面のためにコンテキストを広げると、KVキャッシュとして2〜6GBが追加で必要です。',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '選定の方法',
        content: '**このランキングは公開情報の編集上の総合であり、PromptQuorumの新規テストではありません。** 公式モデルカード、Ollamaライブラリ（サイズ、コンテキスト、タグ）、公開されている創作リーダーボードを比較し、各モデルをハードウェア帯に対応させました。',
        items: [
          '**サイズとコンテキスト：** [Gemma 4](https://ollama.com/library/gemma4)、[Qwen3.8](https://ollama.com/library/qwen3.8)、[Mistral Small](https://ollama.com/library/mistral-small)のOllamaページとHugging Faceのモデルカードから取得。重みのみで、コンテキスト用メモリは別途必要です。',
          '**創作スコア：** EQ-Bench Creative Writing v3とOpen Writing Leaderboard（第三者のトラッカー経由）。Gemma 4 31Bには独自スコアがあり、Qwen3.8-27Bにはまだありません。スコアが兄弟モデルのものである場合は明記します。',
          '**公開時期：** Qwen3.8-27B（2026年8月）、Gemma 4（2026年7月）、Mistral Small 3（2025年）、Llama 3.3 70B（2024年12月）、Hermes 4.3 36B（2025年12月）、Dolphin 3.0（2025年2月）。',
          '**行っていないこと：** これらのモデルで新たに採点付きプロンプトセットを実行してはいません。以下のモデル別評価は引用した出典とモデルカードに基づき、「最適な用途」は測定結果ではなく推奨です。',
          'どのモデルでも創作出力を改善するプロンプト技法については、[温度とtop-pの制御](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity)と[ペルソナプロンプティング](/ja/prompt-engineering/persona-prompting)を参照してください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '創作ベンチマークは主観的で、リーダーボード間でも結果が食い違います。ここでの推奨はすべて仮説として扱ってください。同じ3つの場面を2つの候補に通し、声が好みのほうを残します。',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'VRAM帯別のおすすめモデル',
        content: '**まずメモリで選びます。モデルはコンテキスト用の余裕を残して収まる必要があります。** サイズはデフォルトの4ビット量子化でのOllamaダウンロードサイズです。長い場面ではKVキャッシュ用に2〜6GBを加えてください。',
        columns: [
          'メモリ',
          'モデル',
          '重み',
          'コンテキスト',
        ],
        rows: [
          {
            'メモリ': '8GB GPU',
            'モデル': 'Qwen3.5 9B（`qwen3.5:9b`）',
            '重み': '6.6〜7.6GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '12GB GPU',
            'モデル': 'Gemma 4 12B（`gemma4:12b`）',
            '重み': '7.7〜8.0GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '16GB GPU',
            'モデル': 'Mistral Small 3 24B（`mistral-small:24b`）',
            '重み': '14GB',
            'コンテキスト': '32K',
          },
          {
            'メモリ': '24GB GPU / 32GB Mac',
            'モデル': 'Gemma 4 31B（`gemma4:31b`）',
            '重み': '19〜20GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '24GB GPU / 32GB Mac',
            'モデル': 'Qwen3.8-27B（`qwen3.8:27b`）',
            '重み': '18GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '24GB GPU、高速出力',
            'モデル': 'Gemma 4 26B-A4B（`gemma4:26b`）',
            '重み': '16〜19GB',
            'コンテキスト': '256K',
          },
          {
            'メモリ': '48GB以上',
            'モデル': 'Llama 3.3 70B（`llama3.3:70b`）',
            '重み': '約43GB',
            'コンテキスト': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '32GBのMacではユニファイドメモリをmacOSと共有します。モデルとコンテキストに使えるのは約24GBと見込むと、Gemma 4 31BとQwen3.8-27Bが余裕を持って動きます。',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '直接比較：創作向けローカルモデル',
        content: '**すべての作業で勝つモデルはありません。ハードウェア帯と、作業の中心になる要素で選びます。** 表にはこのガイドのモデルをサイズ、重み、公開時期とともにまとめています。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24GB GPUでの創作にはGemma 4 31BとQwen3.8-27Bが最有力で、Gemma 4 12B、Mistral Small 3 24B、Llama 3.3 70Bがそれぞれ12GB、16GB、48GBの帯を担い、Hermes 4.3 36Bが拒否の少ない選択肢です。',
          },
          {
            type: 'plain-terms',
            text: 'コンテキストの余裕を残してメモリに収まる最大のモデルを選びます。24GBのカードなら、散文はGemma 4 31B、長期プロジェクトはQwen3.8-27Bです。インストラクトモデルが必要な場面を拒否する場合にのみ、拒否の少ないファインチューンを追加します。',
          },
        ],
        columns: [
          'モデル',
          'サイズ',
          '重み（Ollama）',
          '公開',
          '最適な用途',
        ],
        rows: [
          {
            'モデル': 'Gemma 4 31B',
            'サイズ': '31B Dense',
            '重み（Ollama）': '19〜20GB',
            '公開': '2026年7月',
            '最適な用途': '24GBの散文。独自のEQ-Benchスコア',
          },
          {
            'モデル': 'Qwen3.8-27B',
            'サイズ': '27B Dense',
            '重み（Ollama）': '18GB',
            '公開': '2026年8月',
            '最適な用途': '長期プロジェクト、指示追従',
          },
          {
            'モデル': 'Gemma 4 26B-A4B',
            'サイズ': '26B MoE、4B稼働',
            '重み（Ollama）': '16〜19GB',
            '公開': '2026年7月',
            '最適な用途': '24GBでの高速生成',
          },
          {
            'モデル': 'Gemma 4 12B',
            'サイズ': '12B',
            '重み（Ollama）': '7.7〜8.0GB',
            '公開': '2026年7月',
            '最適な用途': '12GB GPU、長い文脈',
          },
          {
            'モデル': 'Mistral Small 3 24B',
            'サイズ': '24B Dense',
            '重み（Ollama）': '14GB',
            '公開': '2025年',
            '最適な用途': '16GB GPU。古いが実績あり',
          },
          {
            'モデル': 'Llama 3.3 70B',
            'サイズ': '70B Dense',
            '重み（Ollama）': '約43GB',
            '公開': '2024年12月',
            '最適な用途': '48GB以上。旧世代の基準',
          },
          {
            'モデル': 'Hermes 4.3 36B',
            'サイズ': '36B Dense',
            '重み（Ollama）': '約21〜23GB（推定）',
            '公開': '2025年12月',
            '最適な用途': '拒否が少ない、Apache 2.0',
          },
          {
            'モデル': 'Dolphin 3.0',
            'サイズ': '24B（Mistral版）',
            '重み（Ollama）': '約14GB',
            '公開': '2025年2月',
            '最適な用途': '旧世代の拒否の少ない選択',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '2モデル構成が一般的です。普段使いのインストラクトモデルと、それが拒否する場面用のHermes 4.3 36B。両方を`ollama list`に同時に置けます。',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'モデル別の評価',
        items: [
          '**Gemma 4 31B** — 24GB向けの散文の選択。この一覧で唯一、EQ-Bench Creative Writing v3の独自結果（ルーブリック16.01、Elo 1407.6、第三者トラッカーによる）があります。256Kコンテキスト、Apache 2.0。Googleはデフォルトとして温度1.0、top-p 0.95、top-k 64を示しています。',
          '**Qwen3.8-27B** — 長期プロジェクト向け。ネイティブで262,144トークンのコンテキスト（YaRNで1Mまで拡張可）、Apache 2.0、Ollamaで約18GB。Alibabaはコーディング、エージェント、リサーチ向けと位置づけており、モデルカードに創作の記述はなく、創作スコアも公開されていません。自分の場面で声を確認してください。thinkingモードはデフォルトでオンなので、散文ではオフにします。',
          '**Gemma 4 26B-A4Bと12B** — 同じファミリーで、トレードオフが異なります。26BのMixture-of-Expertsモデルは1トークンあたり約4Bパラメータを稼働させるため、同程度のメモリで31Bより高速に生成します。12Bは12GBカードに収まり、256Kコンテキストも備えます。',
          '**Mistral Small 3 24B** — 16GBの選択肢。Apache 2.0、約14GB、32Kコンテキスト。2025年のモデルで、Llama以外では最も古い推奨ですが、16GBに収まる新しいモデルが少ないため残しています。後継のMistral Small 4（2026年3月、Apache 2.0）は、稼働パラメータ約6Bの119B Mixture-of-Expertsモデルで、16GBをはるかに超えます。',
          '**Llama 3.3 70B** — 48GBの基準。2024年12月のモデルで、Metaコミュニティライセンス。48GB以上のマシンでは強力で対応も広い選択肢ですが、それ未満では現実的ではありません。',
          '**Hermes 4.3 36B** — 拒否の少ない選択。ByteDance Seed-OSS-36BをベースにApache 2.0で提供され、Hugging FaceにGGUF量子化があります。Nous Researchは拒否が大幅に減ったと説明し、独自のRefusalBenchでHermes 4.3がプロンプトの72〜75%に回答したとしています。カードの推奨は温度0.6、top-p 0.95、top-k 20。散文では温度を上げてください。',
          '**Dolphin 3.0** — 旧世代の拒否の少ない選択。確認できた最新のDolphin世代はDolphin 3.0（2025年2月、Mistral 24Bバリアントを含む）です。Mistral系の無検閲モデルが欲しい場合に使います。より新しい選択はHermes 4.3です。',
        ],
        callouts: [
          {
            type: 'note',
            text: '声の一貫性は、書き手が最も過小評価しやすい指標です。1段落は見事でも、5段落目で登場人物の話し方を見失うモデルは、安定したモデルより劣ります。単発の品質ではなく、長いセッションでの連続性を試してください。',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: '創作向けOllamaモデル',
        content: '**5つの`ollama pull`コマンドで、このガイドのすべてのハードウェア帯をカバーできます。** 取得後は`ollama list`でインストールを確認します。',
        items: [
          '**24GB、散文：** `ollama pull gemma4:31b` — その後`ollama run gemma4:31b`。',
          '**24GB、長期プロジェクト：** `ollama pull qwen3.8:27b` — 散文ではthinkingをオフにするため`ollama run qwen3.8:27b --think=false`で起動。',
          '**12GB：** `ollama pull gemma4:12b`。',
          '**16GB：** `ollama pull mistral-small:24b`。',
          '**48GB以上：** `ollama pull llama3.3:70b`。',
          '**拒否の少ないファインチューン：** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF`でHugging FaceからHermes 4.3のGGUFを取得します。24GBカードでは4ビット量子化を選びます。',
          '**長い場面ではコンテキストウィンドウを広げます。** Ollamaのデフォルトのコンテキストは小さめです。対話セッションで`/set parameter num_ctx 16384`と入力するか、Modelfileに`num_ctx`を設定します。大きな値ほどVRAMを使います。',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: '執筆用のローカルモデルとクラウドモデル',
        content: '**クローズドなクラウドモデルは創作ベンチマークで高スコアですが、ローカルモデルはプライバシー、コスト、制御で優れています。** 「ローカル」なしで「執筆に最適なLLM」と検索する人には、リーダーボードがこのガイドとは異なる答えを示します。',
        items: [
          '**クローズドモデルが上位。** [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores)が反映するEQ-Bench Creative Writing v3では、Claude Opus 4.7が2,206 Eloで首位、GPT-5.5が2,035で続きます。',
          '**最高のオープンウェイトにはデータセンターが必要です。** Kimi K2.6（1,782 Elo）はこの一覧で最高のオープンウェイトです。FeatherlessはGLM-5.3を753B、DeepSeek-V4.1-Flashを763Bパラメータとしており、一般向けマシンでは動きません。',
          '**1枚のGPUで動くもの。** Gemma 4 31Bは同じベンチマークで1407.6 Elo、ルーブリック16.01でした。トラッカーが違えばスケールも異なるため、比較は同じ一覧の中だけで行ってください。',
          '**ローカルが適切な場合。** 未発表の原稿、NDA下のクライアント案件、クラウド事業者が拒否する内容、オフライン作業、月額API料金が制約になるプロジェクト。',
          '**ハイブリッドの進め方。** 下書きとブレインストーミングはローカルで行い、機密でない最終仕上げにだけクラウドモデルを使い、追加の品質を得ます。',
        ],
      },
      sampling: {
        id: 'sampling',
        title: '創作向けの温度とtop-p',
        content: '**創作はコーディングより高いサンプリング温度を必要とします。** 多くのチャットUIのデフォルトは質疑応答向けに調整されており、創作プロンプトで温度0.7だと平板で予測しやすい文章になります。',
        items: [
          '**ベンダーの値は下限であり目標ではありません。** GoogleはGemma 4に温度1.0、top-p 0.95、top-k 64、AlibabaはQwen3.8のthinkingモードに1.0 / 0.95 / top-k 20、非thinkingモードに0.7 / 0.8、NousはHermes 4.3に0.6 / 0.95 / top-k 20を示しています。ここから始め、散文向けに調整します。',
          '**散文の基準：** 温度0.95〜1.0、top-p 0.92〜0.95、リピートペナルティ1.05〜1.1。ここから作業ごとに調整します。',
          '**引き締まった対話：** 温度0.7〜0.85、top-p 0.9。低めの温度は、やり取りを通じて登場人物の声を一貫させます。',
          '**叙情的な散文と詩：** 温度1.0〜1.2、top-p 0.95。高めの温度は意外な言葉選びを引き出します。',
          '**シュールまたはジャンル小説：** 温度1.1〜1.3、top-p 0.95〜0.98。',
          '**プロット主導の場面（アクション、ミステリー、どんでん返し）：** 温度0.85〜0.95、top-p 0.9。目新しさより指示追従が求められます。',
          '**小説ではthinkingモードをオフにします。** 推論トークンは遅延を増やし、計画されて整いすぎた文章になりがちです。Qwen3.8は`enable_thinking: false`を受け付け、Ollamaでは`--think=false`を使います。',
          '**min_p（0.05〜0.1）：** 最上位トークンの確率に合わせてカットオフを調整する、top-pの代替です。top-pを極端に高くしたときの支離滅裂さを避けつつ、創作プロンプトでより寛容です。バックエンドが設定を公開している場合に使います。',
          '**DRY繰り返しペナルティ（multiplier 0.8、base 1.75、allowed length 2）：** 通常のリピートペナルティでは見逃すフレーズ単位の繰り返しを検出し、長いセッションに役立ちます。KoboldCppなどllama.cppベースのバックエンドで利用でき、フロントエンドが対応しているか確認してください。',
          'これらのパラメータが重要な理由と相互作用の詳細は、[温度とtop-pの制御](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity)を参照してください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'モデルごとに短い場面1つでサンプリングを試します。設定ごとに3回実行し、プロンプトを失わずに最も生き生きと聞こえる温度を選びます。設定はモデル間で完全には引き継げません。',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensoredモデルとは何か、いつ重要か',
        content: '**Uncensoredは非倫理的という意味ではありません。** ファインチューンによってモデルの拒否挙動が減らされ、断る代わりにプロンプトに従うという意味です。作者はあくまで書き手です。',
        items: [
          '**技術的には。** Hermes 4.3やDolphin 3.0のようなモデルは、成熟した内容、暴力、道徳的に複雑なプロンプトへの拒否をポストトレーニングで減らしたファインチューンです。Nous Researchは拒否が大幅に減ったと説明し、独自のRefusalBenchでHermes 4.3がプロンプトの72〜75%に回答したと報告しています。新しいモデルのコミュニティ版である「abliterated」や「heretic」もOllamaにありますが、品質は検証されていません。',
          '**創作で重要になる場面。** 成熟した小説、露骨な暴力のある犯罪小説、ホラー、戦争や残虐行為についての史実に忠実な執筆、そしてインストラクトモデルが説得力をもって演じない道徳的に複雑な敵役。',
          '**弱点。** プロンプトに従うため、出来の悪いプロンプトにも従います。インストラクトモデルは曖昧なプロンプトを出版可能な形に和らげがちですが、拒否の少ないモデルは求めたとおりのものを返します。',
          '**倫理的・法的な境界。** モデルが書けることは、実在の人物を標的にする内容、特定可能な個人を巻き込む同意のない場面の描写、居住地で違法な内容を書いてよいという許可ではありません。ローカルでのホスティングは法律を変えず、下書きを誰が見られるかだけを変えます。法律は国によって異なり、これは法的助言ではありません。',
          '**さらに詳しく** 倫理、合法性、ベストプラクティスについては、[創作向けUncensoredローカルLLM：倫理、合法性、ベストプラクティス](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics)を参照してください。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensoredはアイデンティティではなくワークフローの選択です。多くの書き手はインストラクトモデルで下書きし、特定の場面でのみ拒否の少ないファインチューンに切り替えます。2つのモデルを並べて入れておくのが一般的です。',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: '創作向けフロントエンド',
        content: '**書き込むチャットUIはモデルと同じくらい重要です。** 4つの選択肢でほとんどのワークフローをカバーできます。ワークフローの形で選びます。',
        items: [
          '**Open WebUI** — 汎用の選択。ChatGPT風のUI、ワンクリックのモデル切替、システムプロンプトでのキャラクターメモ、文脈用のドキュメントアップロード。散文中心の下書きに最適です。',
          '**SillyTavern** — ロールプレイと対話の選択。キャラクターカード、ペルソナ管理、世界観構築用のロアブック、複数キャラクターの場面向けグループチャット。対話中心の作業や長期の世界観プロジェクトに最適です。',
          '**AgnaiとRisuAI** — より軽量なSillyTavernの代替。始めやすく、カスタマイズは少なめです。',
          '**Ollama CLIとテキストエディタのみ** — 最小構成。`ollama run gemma4:31b`で場面を生成し、下書きに貼り付けます。永続的なキャラクター文脈は失われますが、集中しやすくなります。',
          'ロールプレイ向けフロントエンドの直接比較は、[SillyTavern vs Agnai vs RisuAI：ベストなローカルロールプレイ用フロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)を参照してください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '下書きと推敲では適したツールが異なります。チャットのフロントエンドで生成し、推敲のためにプレーンテキストエディタへ書き出します。チャットウィンドウ内で編集すると、自分で推敲する代わりにモデルに直させる癖がつきます。',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '判断：作業に合うモデルは',
        content: '**まずメモリ、次に作業内容で決めます。**',
        columns: [
          '状況',
          'おすすめ',
        ],
        rows: [
          {
            '状況': '24GB GPUまたは32GB Mac、散文優先',
            'おすすめ': 'Gemma 4 31B',
          },
          {
            '状況': '24GB GPU、長編小説規模のプロジェクト',
            'おすすめ': 'Qwen3.8-27B（256Kコンテキスト）',
          },
          {
            '状況': '24GB GPU、より高速な出力が欲しい',
            'おすすめ': 'Gemma 4 26B-A4B',
          },
          {
            '状況': '12GB GPU',
            'おすすめ': 'Gemma 4 12B',
          },
          {
            '状況': '16GB GPU',
            'おすすめ': 'Mistral Small 3 24B',
          },
          {
            '状況': '48GB以上、1つのモデルですべて',
            'おすすめ': 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            '状況': 'インストラクトモデルが必要な場面を拒否',
            'おすすめ': 'Hermes 4.3 36B（インストラクトモデルも残す）',
          },
          {
            '状況': 'まず1つ使い、後で調整したい',
            'おすすめ': 'Gemma 4 31BまたはQwen3.8-27B（収まるほう）',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24GB GPUならGemma 4 31BまたはQwen3.8-27B、12GBならGemma 4 12B、16GBならMistral Small 3 24B、48GB以上ならLlama 3.3 70B、インストラクトモデルが拒否する場面にはHermes 4.3 36Bを選びます。',
          },
          {
            type: 'plain-terms',
            text: 'コンテキストの余裕を残してメモリに収まる最大のモデルから始めます。長編の連続性や成熟した場面など、特定の作業がボトルネックになってから専門モデルに切り替えます。2つインストールしても、かかるのはディスク容量だけです。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '多くの書き手はモデルを考えすぎ、プロンプトを考えなさすぎます。キャラクターメモ、声のサンプル、明示的な視点を含むシステムプロンプトは、モデルの乗り換えより効果的です。[ペルソナプロンプティング](/ja/prompt-engineering/persona-prompting)を参照してください。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '創作向けローカルモデルの選び方と使い方でよくある間違い',
        items: [
          '**間違い1：一般的なベンチマーク順位で選ぶ。** コーディングや推論のランキングは、散文の品質とあまり相関しません。EQ-Benchのような創作向けボードを見たうえで、自分の場面で試します。',
          '**間違い2：コーディング用のサンプリングを使う。** 温度0.2〜0.4は平板な文章になります。創作には約0.9〜1.1が必要です。',
          '**間違い3：thinkingモードをオンのままにする。** 推論型モデルは書く前に計画するため、小説が組み立てられたように感じられることがあります。散文ではthinkingをオフにします。',
          '**間違い4：コンテキストメモリを無視する。** 19〜20GBの31Bモデルは、コンテキストを広げると24GBカードにほとんど余裕が残りません。KVキャッシュに2〜6GBを見込みます。',
          '**間違い5：薄いシステムプロンプト。** 「あなたは役に立つアシスタントです」は創作で最悪のプロンプトです。キャラクターメモ、視点、時制を[ネガティブプロンプティング](/ja/prompt-engineering/negative-prompting)と組み合わせ、陳腐な表現を排除します。',
          '**間違い6：チャットウィンドウで編集する。** 生成はチャットで、推敲はエディタで行います。モデルに推敲させる書き手は、すぐに自分の声を失います。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '創作AIの最大のスキルリスクは、推敲を丸投げすることです。生成はモデルの恩恵を受ける機械的な作業であり、推敲こそが文章を自分のものにします。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Ollamaライブラリ：Gemma 4](https://ollama.com/library/gemma4) — タグ、ダウンロードサイズ、コンテキストウィンドウ。',
          '[Ollamaライブラリ：Qwen3.8](https://ollama.com/library/qwen3.8) — タグ、サイズ、機能。',
          '[Hugging Face：Qwen3.8-27Bモデルカード](https://huggingface.co/Qwen/Qwen3.8-27B) — ライセンス、コンテキスト長、推奨サンプリング。',
          '[Hugging Face：Gemma 4 31Bモデルカード](https://huggingface.co/google/gemma-4-31B-it) — ライセンス、コンテキスト長、サンプリングのデフォルト。',
          '[Hugging Face：Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — ベースモデル、ライセンス、拒否ベンチマーク、GGUF量子化。',
          '[Ollamaライブラリ：Mistral Small](https://ollama.com/library/mistral-small) — Mistral Small 3 24Bのサイズ、コンテキスト、ライセンス。',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html)と[evals.reportのEQ-Benchスコア](https://evals.report/benchmarks/eq-bench?tab=scores) — 上記で引用したリーダーボードの数値。',
          '[Featherless：創作向けのおすすめオープンモデル](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — オープンウェイトのサイズとGemma 4 31BのEQ-Bench数値。',
          '[SillyTavernドキュメント](https://docs.sillytavern.app/) — キャラクターカード、ペルソナ、グループチャット。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '創作に最適なローカルLLMは？',
            a: '2026年のローカルでの出発点として最適なのはGemma 4 31BとQwen3.8-27Bで、どちらも24GB GPUに収まります（重みは約18〜20GB）。Gemma 4 31Bは独自のEQ-Benchスコアが公開された散文向けの選択、Qwen3.8-27Bは長文脈向けの選択です。小さいカードならGemma 4 12B（12GB）かMistral Small 3 24B（16GB）を使います。',
          },
          {
            q: '創作に最適なOllamaモデルは？',
            a: '24GB GPUでは、散文なら`ollama pull gemma4:31b`、長期プロジェクトなら`ollama pull qwen3.8:27b`。12GBなら`gemma4:12b`、16GBなら`mistral-small:24b`、48GB以上なら`llama3.3:70b`です。長い場面では`num_ctx`を上げ、小説ではthinkingをオフにします。',
          },
          {
            q: '小説や物語の執筆に最適なローカルLLMは？',
            a: 'コンテキストの余裕を残してメモリに収まる最大のモデルを選びます。24GBでの散文はGemma 4 31B、長編規模のプロジェクトには256KコンテキストのQwen3.8-27B、48GB以上ではLlama 3.3 70Bが基準です。温度は0.9〜1.1、システムプロンプトには視点、時制、声のサンプルを入れます。',
          },
          {
            q: '世界観構築に最適なローカルモデルは？',
            a: '最も重要なのは長いコンテキストです。Qwen3.8-27BもGemma 4も256Kトークンに対応し、設定資料と章の要約をプロンプトに入れておけます。どちらかをSillyTavernのロアブックや固定した世界設定ドキュメントと組み合わせ、勢力、ルール、名前を1つの参照ブロックにまとめます。',
          },
          {
            q: '長編小説の執筆に最適なLLMは？',
            a: 'ローカルなら、24GB GPUでQwen3.8-27B（256Kコンテキスト）またはGemma 4 31B（256Kコンテキスト）です。ボトルネックはモデルの大きさではなく構成です。アウトライン、キャラクター設定集、章ごとの要約が連続性を支えます。クローズドなクラウドモデルは創作ベンチマークで高スコアですが、原稿を第三者に送ることになります。',
          },
          {
            q: 'VRAMまたはユニファイドメモリ32GBでの最適なローカルモデルは？',
            a: 'Gemma 4 31B（19〜20GB）またはQwen3.8-27B（18GB）を広めのコンテキストウィンドウで使います。24GBを超える分のメモリがKVキャッシュに回ります。Gemma 4 26B-A4Bはより高速な代替です。70Bモデルは48GB未満では快適に収まりません。',
          },
          {
            q: 'uncensoredなローカルLLMとは何で、いつ使うべきですか？',
            a: '成熟した内容や道徳的に複雑なプロンプトへの拒否をポストトレーニングで減らし、断らずにプロンプトに従うようにしたファインチューンです。確認できた最新の選択肢はHermes 4.3 36Bで、Dolphin 3.0はより古い世代です。成熟した小説や史実に忠実な執筆に使い、それ以外にはインストラクトモデルを残します。',
          },
          {
            q: '創作ではどの温度を使うべきですか？',
            a: '散文は温度0.9〜1.1、top-p 0.92〜0.95です。引き締まった対話は0.7〜0.85、詩は1.0〜1.2、シュールやジャンル作品は1.1〜1.3。Gemma 4の1.0 / 0.95 / top-k 64のようなベンダーのデフォルトは良い出発点です。小説ではthinkingモードをオフにします。',
          },
          {
            q: 'ローカルの創作モデルはChatGPTやClaudeと同等ですか？',
            a: 'ベンチマークでは同等ではありません。EQ-Bench Creative Writing v3ではClaude Opus 4.7（2,206 Elo）などクローズドモデルが上位で、最高のオープンウェイトにはデータセンター級のハードウェアが必要です。それでも24GBのローカルモデルは下書きには十分なことがあり、原稿を非公開に保てます。調整したサンプリングと優れたシステムプロンプトで、実用上の差の多くは埋まります。',
          },
          {
            q: 'ローカルモデルで長編小説を1冊書けますか？',
            a: '下書きの手伝いはできます。Qwen3.8-27BやGemma 4のような256Kコンテキストのモデルは、長いアウトラインと複数章をメモリに保持できますが、KVキャッシュはコンテキストとともに増えるためVRAMを確認してください。キャラクター設定集とロアブックを用意して節ごとに書き進めます。それがなければどのモデルも逸れていきます。',
          },
          {
            q: 'uncensoredモデルは違法なコンテンツを生成しますか？',
            a: 'プロンプトが求めるテキストを生成します。法的責任はモデルではなく、書き手と公開物にあります。EU AI Act、ドイツ刑法第184条／第184c条、各国のわいせつ規制などは、テキストの生成方法にかかわらず適用されます。ローカルでのホスティングが変えるのは下書きを誰が見るかであって、何が合法かではありません。これは法的助言ではありません。',
          },
          {
            q: '「shiver down their spine」のような陳腐な表現を避けるには？',
            a: 'システムプロンプトに禁止フレーズを8〜12個挙げます（「do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'」）。温度は1.2以上ではなく0.85〜1.0に保ち、バックエンドが対応していればDRYペナルティを追加します。通常のリピートペナルティではフレーズ単位の陳腐さは捉えられません。最後の関門は手作業での推敲です。[ネガティブプロンプティング](/ja/prompt-engineering/negative-prompting)を参照してください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ベストローカルLLM 2026](/ja/local-llms/best-local-llms-2026) — コーディング、推論、汎用向けの決定版モデルガイド。',
          '[2026年創作向けベストローカルLLM](/ja/local-llms/best-local-llms-for-creative-writing) — 小説、詩、長編執筆向けの幅広いモデル一覧。',
          '[Backyard AIレビュー：ローカルAIキャラクターチャットとロールプレイ](/ja/power-local-llm/backyard-ai-review-local-roleplay) — Character Hub内蔵の無料デスクトップアプリ。上記フロントエンドの手軽な代替。',
          '[SillyTavern vs Agnai vs RisuAI：ベストなローカルロールプレイ用フロントエンド](/ja/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — ロールプレイ向けフロントエンドの直接比較。',
          '[小説家のためのローカルLLMプロンプト：テンプレートと技法](/ja/power-local-llm/local-llm-prompts-for-fiction-writers) — キャラクター造形、対話、推敲向けのコピー用プロンプトテンプレート。',
          '[創作向けUncensoredローカルLLM：倫理、合法性、ベストプラクティス](/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 法的・倫理的な境界線はどこか。',
          '[温度とtop-p：AIの創造性を制御する](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity) — サンプリングパラメータのプロンプトエンジニアリング面。',
          '[ネガティブプロンプティング](/ja/prompt-engineering/negative-prompting) — やってはいけないことを指定する。創作用システムプロンプトの強力な補強。',
          '[Locally Uncensoredレビュー：ローカルのチャット・画像・動画を1つのアプリで](/ja/power-local-llm/locally-uncensored-review) — モデル一覧よりアプリを好む方向けの、無検閲ローカルモデルを軸にしたオールインワンのデスクトップアプリです。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: '2026年创意写作最佳本地LLM：小说、对话与世界观构建',
    seoTitle: '2026年创意写作最佳本地LLM：6个推荐',
    intro: '创意写作是本地LLM优势超越隐私和成本的场景：没有无法配置的拒绝，没有按token计费，草稿也不会离开你的电脑。本指南按硬件档位梳理2026年值得运行的开放权重模型——Gemma 4、Qwen3.8-27B、Mistral Small 3、Llama 3.3 70B，以及低拒绝率微调模型Hermes 4.3和Dolphin 3.0——并附带Ollama拉取命令和适合散文的采样设置。',
    metaDescription: 'Gemma 4 31B和Qwen3.8-27B可在单张24GB显卡上运行。按显存档位推荐适合小说、对话与世界观构建的最佳本地LLM，附Ollama命令。',
    heroImage: '/images/best-local-llm-creative-writing-hero-zh.webp',
    twitterDescription: '2026年创意写作最佳本地LLM（按显存档位）：Gemma 4、Qwen3.8-27B、Mistral Small 3、Llama 3.3 70B、Hermes 4.3。含Ollama命令和采样设置。',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: '使用本地LLM进行创意工作的小说作者、编剧、游戏设计师、世界观构建者和角色扮演爱好者——对他们而言，隐私、声音一致性和处理成熟主题的意愿比基准分数更重要。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '本地LLM创意写作',
    targetKeywords: [
      '创意写作最佳本地llm',
      '小说写作本地llm',
      '创意写作最佳ollama模型',
      '故事写作本地llm',
      '世界观构建本地llm',
      'uncensored本地llm',
    ],
    leadAnswerBlock: '**Gemma 4 31B和Qwen3.8-27B是2026年创意写作最佳的本地起点，两者都能在单张24GB显卡上运行（权重各约18–20GB）。** Gemma 4 31B是散文之选：它是本组中唯一拥有自己公开的EQ-Bench Creative Writing v3分数的模型。Qwen3.8-27B是长上下文和指令遵循之选（256K token）。12GB用Gemma 4 12B，16GB用Mistral Small 3 24B，48GB及以上用Llama 3.3 70B。当instruct模型拒绝你设定为虚构的场景时，Hermes 4.3 36B是低拒绝率的选择。温度用0.9–1.1，而不是编程用的0.2–0.4。闭源云端模型在创意写作基准上仍然得分更高；本地模型胜在隐私、成本和可控性。**',
    quickAnswerTop: {
      zh: {
        question: '创意写作最好的本地LLM是哪个？',
        answer: '2026年创意写作最佳的本地模型是Gemma 4 31B和Qwen3.8-27B。两者都能放进24GB显卡（权重约18–20GB）。Gemma 4 31B适合散文，Qwen3.8-27B适合长上下文。12GB用Gemma 4 12B，16GB用Mistral Small 3 24B，48GB及以上用Llama 3.3 70B。想减少拒绝，用Hermes 4.3 36B。',
        bullets: [
          '24GB显卡：Gemma 4 31B（约19–20GB）或Qwen3.8-27B（约18GB）。',
          '12GB显卡：Gemma 4 12B（约8GB），留有长上下文余量。',
          '16GB显卡：Mistral Small 3 24B（约14GB），32K上下文。',
          '48GB及以上：Llama 3.3 70B（Q4_K_M约43GB）。',
          '散文采样：温度0.9–1.1，top-p 0.92–0.95，关闭thinking模式。',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: '核心要点',
        anchor: '#key-takeaways',
      },
      {
        label: '速览',
        anchor: '#quick-facts',
      },
      {
        label: '推荐是如何得出的',
        anchor: '#how-we-tested',
      },
      {
        label: '按显存档位选模型',
        anchor: '#hardware',
      },
      {
        label: '横向对比',
        anchor: '#comparison',
      },
      {
        label: '各模型评价',
        anchor: '#verdicts',
      },
      {
        label: '创意写作最佳Ollama模型',
        anchor: '#ollama',
      },
      {
        label: '写作用本地模型与云端模型',
        anchor: '#cloud-vs-local',
      },
      {
        label: '创意写作的温度与Top-P',
        anchor: '#sampling',
      },
      {
        label: 'Uncensored模型：它们是什么',
        anchor: '#uncensored',
      },
      {
        label: '创意写作前端',
        anchor: '#frontends',
      },
      {
        label: '决策：选择你的模型',
        anchor: '#decision',
      },
      {
        label: '常见错误',
        anchor: '#common-mistakes',
      },
      {
        label: '来源',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: '相关阅读',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 31B是24GB显卡的散文之选。** 权重约19–20GB，256K上下文，Apache 2.0，是本组中唯一拥有自己公开的EQ-Bench Creative Writing v3分数的模型（评分标准16.01，Elo 1407.6）。',
          '**Qwen3.8-27B是长上下文和指令遵循之选。** Ollama上约18GB，256K上下文，Apache 2.0。目前尚无公开的创意写作分数，散文质量未经验证，请用自己的场景测试。',
          '**按显存而不是排行榜选模型。** 12GB：Gemma 4 12B。16GB：Mistral Small 3 24B。24GB：Gemma 4 31B或Qwen3.8-27B。48GB及以上：Llama 3.3 70B。',
          '**Hermes 4.3 36B是低拒绝率之选。** Apache 2.0，基于字节跳动Seed-OSS-36B；Nous Research称其拒绝大幅减少。Dolphin 3.0是较老的替代。',
          '**采样比换模型更重要。** 散文用温度0.9–1.1、top-p 0.92–0.95；写小说时关闭thinking模式。编程式设置（0.2–0.4）会让文字平淡。',
          '**闭源云端模型仍领跑创意写作基准。** EQ-Bench Creative Writing v3榜首是Claude Opus 4.7，2,206 Elo；榜上最好的开放权重条目是Kimi K2.6，1,782，远超消费级硬件。本地胜在隐私、成本和可控性。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览',
        items: [
          '**24GB显卡或32GB Mac：** Gemma 4 31B（`gemma4:31b`，19–20GB）或Qwen3.8-27B（`qwen3.8:27b`，18GB）。两者均为Apache 2.0，均为256K上下文。',
          '**12GB显卡：** Gemma 4 12B（`gemma4:12b`，7.7–8.0GB），256K上下文。',
          '**16GB显卡：** Mistral Small 3 24B（`mistral-small:24b`，14GB），32K上下文，Apache 2.0。2025年发布。',
          '**48GB及以上：** Llama 3.3 70B（`llama3.3:70b`，Q4_K_M约43GB）。2024年12月发布；Meta社区许可证。',
          '**低拒绝率微调：** Hermes 4.3 36B（Apache 2.0）和Dolphin 3.0（Mistral 24B版本，2025年2月）。',
          '**散文采样基线：** 温度1.0，top-p 0.95，min-p 0.05；场景出现循环时加重复惩罚或DRY。',
          '**内存规则：** Ollama列出的大小只是权重。为长场景扩大上下文窗口后，还要加2–6GB的KV缓存。',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '推荐是如何得出的',
        content: '**本排名是对已发布资料的编辑性综合，不是PromptQuorum的新一轮测试。** 我们对比了官方模型卡、Ollama库（大小、上下文、标签）和公开的创意写作排行榜，再把每个模型对应到一个硬件档位。',
        items: [
          '**大小与上下文：** 取自[Gemma 4](https://ollama.com/library/gemma4)、[Qwen3.8](https://ollama.com/library/qwen3.8)、[Mistral Small](https://ollama.com/library/mistral-small)的Ollama页面以及Hugging Face模型卡。仅含权重，上下文内存另算。',
          '**创意写作分数：** EQ-Bench Creative Writing v3和Open Writing Leaderboard，经第三方追踪站转载。Gemma 4 31B有自己的分数，Qwen3.8-27B暂时没有。若分数属于同系列的其他模型，我们会注明。',
          '**发布时间：** Qwen3.8-27B（2026年8月）、Gemma 4（2026年7月）、Mistral Small 3（2025年）、Llama 3.3 70B（2024年12月）、Hermes 4.3 36B（2025年12月）、Dolphin 3.0（2025年2月）。',
          '**我们没有做的事：** 我们没有在这些模型上重新跑一套打分的提示词。下面的各模型评价依据所引用的来源和模型卡；“最适合”是推荐，不是实测结果。',
          '关于能在任何模型上提升创意输出的提示技巧，请参阅[温度与top-p控制](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity)和[角色提示](/zh/prompt-engineering/persona-prompting)。',
        ],
        callouts: [
          {
            type: 'note',
            text: '创意写作基准具有主观性，各排行榜之间也会互相矛盾。请把这里的每个推荐当作起始假设：用同样的三个场景测试两个候选，保留声音更合你心意的那个。',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: '按显存档位选模型',
        content: '**先按内存选：模型必须放得下，并为上下文留出余量。** 大小为Ollama默认4位量化下的下载大小；长场景请再加2–6GB的KV缓存。',
        columns: [
          '你的内存',
          '模型',
          '权重',
          '上下文',
        ],
        rows: [
          {
            '你的内存': '8GB显卡',
            '模型': 'Qwen3.5 9B（`qwen3.5:9b`）',
            '权重': '6.6–7.6GB',
            '上下文': '256K',
          },
          {
            '你的内存': '12GB显卡',
            '模型': 'Gemma 4 12B（`gemma4:12b`）',
            '权重': '7.7–8.0GB',
            '上下文': '256K',
          },
          {
            '你的内存': '16GB显卡',
            '模型': 'Mistral Small 3 24B（`mistral-small:24b`）',
            '权重': '14GB',
            '上下文': '32K',
          },
          {
            '你的内存': '24GB显卡 / 32GB Mac',
            '模型': 'Gemma 4 31B（`gemma4:31b`）',
            '权重': '19–20GB',
            '上下文': '256K',
          },
          {
            '你的内存': '24GB显卡 / 32GB Mac',
            '模型': 'Qwen3.8-27B（`qwen3.8:27b`）',
            '权重': '18GB',
            '上下文': '256K',
          },
          {
            '你的内存': '24GB显卡，更快输出',
            '模型': 'Gemma 4 26B-A4B（`gemma4:26b`）',
            '权重': '16–19GB',
            '上下文': '256K',
          },
          {
            '你的内存': '48GB及以上',
            '模型': 'Llama 3.3 70B（`llama3.3:70b`）',
            '权重': '约43GB',
            '上下文': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '32GB的Mac上，统一内存与macOS共享。模型加上下文大约可用24GB，这样Gemma 4 31B和Qwen3.8-27B都能从容运行。',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '横向对比：创意写作的本地模型',
        content: '**没有哪个模型能赢下所有任务；请按硬件档位和你工作中最关键的需求来选。** 表中列出本指南的模型及其大小、权重和发布时间。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Gemma 4 31B和Qwen3.8-27B是24GB显卡上创意写作最佳的本地选择；Gemma 4 12B、Mistral Small 3 24B和Llama 3.3 70B分别覆盖12GB、16GB和48GB档位；Hermes 4.3 36B是低拒绝率选项。',
          },
          {
            type: 'plain-terms',
            text: '选你的内存放得下、且留有上下文余量的最大模型。24GB显卡上，散文选Gemma 4 31B，长篇项目选Qwen3.8-27B。只有当instruct模型拒绝你必须写的场景时，才加一个低拒绝率微调模型。',
          },
        ],
        columns: [
          '模型',
          '规模',
          '权重（Ollama）',
          '发布',
          '最适合',
        ],
        rows: [
          {
            '模型': 'Gemma 4 31B',
            '规模': '31B稠密',
            '权重（Ollama）': '19–20GB',
            '发布': '2026年7月',
            '最适合': '24GB散文；有自己的EQ-Bench分数',
          },
          {
            '模型': 'Qwen3.8-27B',
            '规模': '27B稠密',
            '权重（Ollama）': '18GB',
            '发布': '2026年8月',
            '最适合': '长篇项目，指令遵循',
          },
          {
            '模型': 'Gemma 4 26B-A4B',
            '规模': '26B MoE，4B激活',
            '权重（Ollama）': '16–19GB',
            '发布': '2026年7月',
            '最适合': '24GB上更快生成',
          },
          {
            '模型': 'Gemma 4 12B',
            '规模': '12B',
            '权重（Ollama）': '7.7–8.0GB',
            '发布': '2026年7月',
            '最适合': '12GB显卡，长上下文',
          },
          {
            '模型': 'Mistral Small 3 24B',
            '规模': '24B稠密',
            '权重（Ollama）': '14GB',
            '发布': '2025年',
            '最适合': '16GB显卡；较老但可靠',
          },
          {
            '模型': 'Llama 3.3 70B',
            '规模': '70B稠密',
            '权重（Ollama）': '约43GB',
            '发布': '2024年12月',
            '最适合': '48GB及以上；较老的基准',
          },
          {
            '模型': 'Hermes 4.3 36B',
            '规模': '36B稠密',
            '权重（Ollama）': '约21–23GB（估）',
            '发布': '2025年12月',
            '最适合': '拒绝更少，Apache 2.0',
          },
          {
            '模型': 'Dolphin 3.0',
            '规模': '24B（Mistral版）',
            '权重（Ollama）': '约14GB',
            '发布': '2025年2月',
            '最适合': '较老的低拒绝率选项',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '常见做法是双模型搭配：一个instruct模型作日常主力，再配Hermes 4.3 36B处理instruct模型拒绝的场景。两者可同时出现在`ollama list`中。',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: '各模型评价',
        items: [
          '**Gemma 4 31B** — 24GB的散文之选。它是本组中唯一拥有自己的EQ-Bench Creative Writing v3结果的模型（评分标准16.01，Elo 1407.6，来自第三方追踪站）。256K上下文，Apache 2.0。Google给出的默认值是温度1.0、top-p 0.95、top-k 64。',
          '**Qwen3.8-27B** — 长篇项目之选。原生262,144 token上下文（用YaRN可扩展到1M），Apache 2.0，Ollama上约18GB。阿里巴巴将其定位于编程、智能体和研究；模型卡未提及创意写作，也没有公开的创意分数，所以请用自己的场景验证声音。thinking模式默认开启，写散文时请关闭。',
          '**Gemma 4 26B-A4B与12B** — 同一系列，取舍不同。26B混合专家模型每个token约激活4B参数，因此在相近内存下比31B生成更快。12B可放进12GB显卡，并仍提供256K上下文。',
          '**Mistral Small 3 24B** — 16GB之选。Apache 2.0，约14GB，32K上下文。它是2025年的模型，是除Llama外这里最老的推荐；保留它是因为能放进16GB的较新模型很少。其后继者Mistral Small 4（2026年3月，Apache 2.0）是激活参数约6B的119B混合专家模型，远超16GB。',
          '**Llama 3.3 70B** — 48GB的基准。2024年12月的模型，Meta社区许可证。对48GB及以上的机器，它仍是强大且支持广泛的选择；低于这个档位则不实用。',
          '**Hermes 4.3 36B** — 低拒绝率之选。基于字节跳动Seed-OSS-36B，Apache 2.0，Hugging Face上有GGUF量化。Nous Research称拒绝大幅减少；在其自有RefusalBench上，Hermes 4.3回答了72–75%的提示。模型卡建议温度0.6、top-p 0.95、top-k 20；写散文时请调高温度。',
          '**Dolphin 3.0** — 较老的低拒绝率选项。我们能确认的最新Dolphin版本是Dolphin 3.0（2025年2月，含Mistral 24B版本）。想要Mistral系的无审查模型时可用；更新的选择是Hermes 4.3。',
        ],
        callouts: [
          {
            type: 'note',
            text: '声音一致性是写作者最容易低估的指标。一个模型某一段写得精彩，但到第五段就丢了角色的说话方式，不如一个稳定的模型。请测试长会话中的连贯性，而不只是单次输出的质量。',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: '创意写作最佳Ollama模型',
        content: '**五条`ollama pull`命令覆盖本指南的所有硬件档位。** 之后运行`ollama list`确认模型已安装。',
        items: [
          '**24GB，散文：** `ollama pull gemma4:31b` — 然后`ollama run gemma4:31b`。',
          '**24GB，长篇项目：** `ollama pull qwen3.8:27b` — 用`ollama run qwen3.8:27b --think=false`运行，以便写散文时关闭thinking。',
          '**12GB：** `ollama pull gemma4:12b`。',
          '**16GB：** `ollama pull mistral-small:24b`。',
          '**48GB及以上：** `ollama pull llama3.3:70b`。',
          '**低拒绝率微调：** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF`会从Hugging Face拉取Hermes 4.3的GGUF；24GB显卡请选4位量化。',
          '**长场景请扩大上下文窗口。** Ollama的默认上下文较小。在交互会话中输入`/set parameter num_ctx 16384`，或在Modelfile中设置`num_ctx`。数值越大，占用的显存越多。',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: '写作用本地模型与云端模型',
        content: '**闭源云端模型在创意写作基准上得分更高；本地模型胜在隐私、成本和可控性。** 如果有人搜索“最适合写作的LLM”而没有加“本地”，排行榜给出的答案会与本指南不同。',
        items: [
          '**闭源模型领先。** 在[evals.report](https://evals.report/benchmarks/eq-bench?tab=scores)转载的EQ-Bench Creative Writing v3上，Claude Opus 4.7以2,206 Elo排第一，领先GPT-5.5的2,035。',
          '**最好的开放权重条目需要数据中心。** Kimi K2.6（1,782 Elo）是该榜单上最高的开放权重条目。Featherless列出GLM-5.3为753B参数、DeepSeek-V4.1-Flash为763B，没有任何消费级机器能运行。',
          '**单张显卡能跑的。** Gemma 4 31B在同一基准上得到1407.6 Elo和16.01的评分标准分。不同追踪站的分数不在同一刻度上；请只在同一份榜单内比较。',
          '**什么时候选本地。** 未发表的手稿、受保密协议约束的客户工作、云服务商会拒绝的内容、离线工作，以及受每月API账单限制的项目。',
          '**混合工作流。** 在本地起草和头脑风暴；如果想要额外的质量，只把非敏感内容的最终润色交给云端模型。',
        ],
      },
      sampling: {
        id: 'sampling',
        title: '创意写作的温度与Top-P',
        content: '**创意写作需要比编程更高的采样温度。** 多数聊天界面的默认值是为问答调的；对创意提示词用温度0.7，会得到平淡、可预测的文字。',
        items: [
          '**厂商默认值是下限，不是目标。** Google给Gemma 4的是温度1.0、top-p 0.95、top-k 64；阿里巴巴给Qwen3.8的thinking模式是1.0 / 0.95 / top-k 20，非thinking模式是0.7 / 0.8；Nous给Hermes 4.3的是0.6 / 0.95 / top-k 20。从这里出发，再针对散文调整。',
          '**散文基线：** 温度0.95–1.0，top-p 0.92–0.95，重复惩罚1.05–1.1。再按任务调整。',
          '**紧凑对话：** 温度0.7–0.85，top-p 0.9。较低的温度能让角色声音在来回对话中保持一致。',
          '**抒情散文与诗歌：** 温度1.0–1.2，top-p 0.95。较高的温度会带来意想不到的用词。',
          '**超现实或类型小说：** 温度1.1–1.3，top-p 0.95–0.98。',
          '**情节驱动的场景（动作、悬疑、反转）：** 温度0.85–0.95，top-p 0.9。这类场景更需要指令遵循而非新奇。',
          '**写小说时关闭thinking模式。** 推理token会增加延迟，并常常产生计划好的、过于工整的文字。Qwen3.8接受`enable_thinking: false`；在Ollama中用`--think=false`。',
          '**min_p（0.05–0.1）：** top-p的替代方案，按最高概率token来缩放截断阈值。在创意提示词上更宽容，又不会像极高的top-p那样语无伦次。后端提供该设置时就用它。',
          '**DRY重复惩罚（multiplier 0.8、base 1.75、allowed length 2）：** 能捕捉标准重复惩罚漏掉的短语级重复，对长会话有帮助。基于llama.cpp的后端（如KoboldCpp）提供该功能；请确认你的前端是否支持。',
          '关于这些参数为何重要及其相互作用的更完整说明，请参阅[温度与top-p控制](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '为每个模型用一个短场景测试采样：每个设置跑三次，然后选模型听起来最生动、又没偏离提示词的温度。设置在模型之间无法完全迁移。',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored模型：它们是什么，何时重要',
        content: '**Uncensored不等于不道德。** 它指的是模型的拒绝行为经微调被降低，从而遵循提示词而不是推辞。作者仍然是你。',
        items: [
          '**技术上。** Hermes 4.3和Dolphin 3.0这类模型是微调版本，其后训练减少了对成熟、暴力或道德复杂提示词的拒绝。Nous Research称拒绝大幅减少，并报告Hermes 4.3在其自有RefusalBench上回答了72–75%的提示。Ollama上也有较新模型的社区“abliterated”或“heretic”变体；其质量未经审核。',
          '**何时对创意工作重要。** 成熟题材小说、含露骨暴力的犯罪小说、恐怖小说、有关战争或暴行的史实性写作，以及instruct模型不愿令人信服地演绎的道德复杂反派。',
          '**不足之处。** 它们会遵循提示词，包括写得很差的提示词。instruct模型常把含糊的提示词软化成可出版的内容；低拒绝率模型则严格给你所要求的。',
          '**伦理与法律边界。** 模型愿意写，并不等于可以写针对真实人物的内容、涉及可识别个人的非自愿情节，或在你所在地属违法的内容。本地部署不会改变法律，只改变谁能看到草稿。各国法律不同，这不是法律建议。',
          '**更深入的讨论** 关于伦理、合法性和最佳实践，请参阅[创意写作的Uncensored本地LLM：伦理、合法性与最佳实践](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics)。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored是工作流选择，不是身份标签。许多作者用instruct模型起草，只在特定场景切换到低拒绝率微调模型。同时安装两个模型是常见做法。',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: '创意写作前端',
        content: '**你写作用的聊天界面和模型一样重要。** 四个选项覆盖大多数工作流；按工作流形态选择。',
        items: [
          '**Open WebUI** — 通用之选。类ChatGPT界面，一键切换模型，用系统提示词写角色笔记，可上传文档作为上下文。最适合以散文为主的起草。',
          '**SillyTavern** — 角色扮演与对话之选。角色卡、人设管理、用于世界观构建的lorebook，以及多角色场景的群聊。最适合以对话为主的工作和长期世界观项目。',
          '**Agnai和RisuAI** — 更轻量的SillyTavern替代品，上手更简单，可定制性较少。',
          '**纯Ollama命令行加文本编辑器** — 极简之选。`ollama run gemma4:31b`，再把场景粘贴到草稿里。失去持续的角色上下文，但更能专注。',
          '角色扮演类前端的横向对比，请参阅[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '起草和修改需要不同的工具。在聊天前端生成，然后导出到纯文本编辑器修改。在聊天窗口里编辑，会让你养成让模型来修文字、而不是自己修改的习惯。',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '决策：哪个模型适合你的工作',
        content: '**先看内存，再看任务。**',
        columns: [
          '你的情况',
          '推荐',
        ],
        rows: [
          {
            '你的情况': '24GB显卡或32GB Mac，散文优先',
            '推荐': 'Gemma 4 31B',
          },
          {
            '你的情况': '24GB显卡，长篇小说项目',
            '推荐': 'Qwen3.8-27B（256K上下文）',
          },
          {
            '你的情况': '24GB显卡，想要更快输出',
            '推荐': 'Gemma 4 26B-A4B',
          },
          {
            '你的情况': '12GB显卡',
            '推荐': 'Gemma 4 12B',
          },
          {
            '你的情况': '16GB显卡',
            '推荐': 'Mistral Small 3 24B',
          },
          {
            '你的情况': '48GB及以上，一个模型包办',
            '推荐': 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            '你的情况': 'instruct模型拒绝我需要的场景',
            '推荐': 'Hermes 4.3 36B（同时保留instruct模型）',
          },
          {
            '你的情况': '先用一个，之后再调整',
            '推荐': 'Gemma 4 31B或Qwen3.8-27B，放得下哪个用哪个',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24GB显卡选Gemma 4 31B或Qwen3.8-27B，12GB选Gemma 4 12B，16GB选Mistral Small 3 24B，48GB及以上选Llama 3.3 70B，instruct模型拒绝的场景用Hermes 4.3 36B。',
          },
          {
            type: 'plain-terms',
            text: '从你的内存放得下、且留有上下文余量的最大模型开始。只有当某项任务（如长篇连贯性或成熟场景）成为瓶颈时，再换专门的模型。安装两个模型只多占磁盘空间。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '多数作者对模型想得太多，对提示词想得太少。带角色笔记、声音样本和明确视角的系统提示词，比换模型更有用。请参阅[角色提示](/zh/prompt-engineering/persona-prompting)。',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '为创意写作选择和使用本地模型的常见错误',
        items: [
          '**错误1：按通用基准排名选择。** 编程和推理排行榜与散文质量相关性很差。请看EQ-Bench这类创意写作榜单，再用自己的场景测试。',
          '**错误2：使用编程式采样。** 温度0.2–0.4会让文字平淡。创意工作需要大约0.9–1.1。',
          '**错误3：一直开着thinking模式。** 推理优先的模型会先规划再写作，可能让小说显得拼凑。写散文时关闭thinking。',
          '**错误4：忽略上下文内存。** 19–20GB的31B模型，在扩大上下文窗口后几乎不给24GB显卡留空间。请为KV缓存预留2–6GB。',
          '**错误5：系统提示词太单薄。** “你是一个乐于助人的助手”是创意工作最糟糕的提示词。把角色笔记、视角和时态，与[反向提示](/zh/prompt-engineering/negative-prompting)结合，排除陈词滥调。',
          '**错误6：在聊天窗口里编辑。** 在聊天里生成，在编辑器里修改。让模型来修改的作者，很快就会失去自己的声音。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '创意写作AI最大的能力风险，是把修改环节外包出去。生成是模型能帮上忙的机械工作；修改才让文字真正属于你。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Ollama库：Gemma 4](https://ollama.com/library/gemma4) — 标签、下载大小和上下文窗口。',
          '[Ollama库：Qwen3.8](https://ollama.com/library/qwen3.8) — 标签、大小和能力。',
          '[Hugging Face：Qwen3.8-27B模型卡](https://huggingface.co/Qwen/Qwen3.8-27B) — 许可证、上下文长度、推荐采样。',
          '[Hugging Face：Gemma 4 31B模型卡](https://huggingface.co/google/gemma-4-31B-it) — 许可证、上下文长度、采样默认值。',
          '[Hugging Face：Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — 基础模型、许可证、拒绝基准、GGUF量化。',
          '[Ollama库：Mistral Small](https://ollama.com/library/mistral-small) — Mistral Small 3 24B的大小、上下文和许可证。',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html)和[evals.report的EQ-Bench分数](https://evals.report/benchmarks/eq-bench?tab=scores) — 上文引用的排行榜数据。',
          '[Featherless：适合创意写作的最佳开放模型](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — 开放权重模型的规模及Gemma 4 31B的EQ-Bench数据。',
          '[SillyTavern文档](https://docs.sillytavern.app/) — 角色卡、人设、群聊。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '创意写作最好的本地LLM是哪个？',
            a: '2026年最佳的本地起点是Gemma 4 31B和Qwen3.8-27B，两者都能放进24GB显卡（权重约18–20GB）。Gemma 4 31B是拥有自己公开EQ-Bench分数的散文之选；Qwen3.8-27B是长上下文之选。显卡更小时，用Gemma 4 12B（12GB）或Mistral Small 3 24B（16GB）。',
          },
          {
            q: '创意写作最好的Ollama模型是哪个？',
            a: '24GB显卡上，散文用`ollama pull gemma4:31b`，长篇项目用`ollama pull qwen3.8:27b`。12GB用`gemma4:12b`，16GB用`mistral-small:24b`，48GB及以上用`llama3.3:70b`。长场景请调高`num_ctx`，写小说时关闭thinking。',
          },
          {
            q: '写小说和故事最好的本地LLM是哪个？',
            a: '选你的内存放得下、且留有上下文余量的最大模型。24GB上散文选Gemma 4 31B，长篇规模的项目选256K上下文的Qwen3.8-27B，48GB及以上以Llama 3.3 70B为基准。温度用0.9–1.1，系统提示词中写明视角、时态和声音样本。',
          },
          {
            q: '哪个本地模型最适合世界观构建？',
            a: '最重要的是长上下文：Qwen3.8-27B和Gemma 4都提供256K token，足以在提示词里容纳设定集和章节摘要。把其中之一与SillyTavern的lorebook或固定的世界文档搭配，并把势力、规则和名称放进同一个参考块。',
          },
          {
            q: '写长篇小说用哪个LLM最好？',
            a: '本地方案：24GB显卡上用Qwen3.8-27B（256K上下文）或Gemma 4 31B（256K上下文）。瓶颈在结构而不是模型大小：大纲、角色设定集和章节摘要能保持连贯。闭源云端模型在创意基准上得分更高，但会把你的手稿发给第三方。',
          },
          {
            q: '32GB显存或统一内存下最好的本地模型是哪个？',
            a: 'Gemma 4 31B（19–20GB）或Qwen3.8-27B（18GB），配合更大的上下文窗口；比24GB多出来的内存用于KV缓存。Gemma 4 26B-A4B是更快的替代。70B模型在48GB以下放不舒服。',
          },
          {
            q: '什么是uncensored本地LLM，什么时候该用？',
            a: '它是经微调的模型，后训练减少了对成熟或道德复杂提示词的拒绝，所以模型会遵循提示词而不是推辞。Hermes 4.3 36B是我们能确认的最新选项；Dolphin 3.0较老。用于成熟题材小说或史实性写作，其余情况保留instruct模型。',
          },
          {
            q: '创意写作应该用什么温度？',
            a: '散文用温度0.9–1.1，搭配top-p 0.92–0.95。紧凑对话用0.7–0.85，诗歌用1.0–1.2，超现实或类型作品用1.1–1.3。厂商默认值（如Gemma 4的1.0 / 0.95 / top-k 64）是不错的起点。写小说时关闭thinking模式。',
          },
          {
            q: '本地创意写作模型和ChatGPT或Claude一样好吗？',
            a: '在基准上不是。在EQ-Bench Creative Writing v3上，Claude Opus 4.7（2,206 Elo）等闭源模型领先，最好的开放权重条目需要数据中心级硬件。不过24GB的本地模型用来起草可能已经够好，而且手稿保持私密。校准后的采样和强力的系统提示词能弥补实际使用中的大部分差距。',
          },
          {
            q: '本地模型能写完整本小说吗？',
            a: '它可以帮助起草。像Qwen3.8-27B或Gemma 4这样256K上下文的模型，可以在内存中保留长大纲和多个章节，但KV缓存会随上下文增长，请检查显存。配合角色设定集和lorebook，按节起草；没有这些，任何模型都会跑偏。',
          },
          {
            q: 'uncensored模型会生成违法内容吗？',
            a: '它们生成提示词所要求的文本；法律责任在作者和出版方，而不在模型。欧盟《AI法案》、德国《刑法典》第184条/第184c条以及各国淫秽法规，不论文本如何生成都适用。本地部署改变的是谁能看到草稿，而不是什么合法。这不是法律建议。',
          },
          {
            q: '如何避免“shiver down their spine”这类陈词滥调？',
            a: '在系统提示词中列出8–12个禁用短语（“do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'”）。把温度保持在0.85–1.0而不是1.2以上，并在后端支持时加DRY惩罚；普通的重复惩罚抓不到短语级的陈词滥调。人工修改是最后一道过滤。请参阅[反向提示](/zh/prompt-engineering/negative-prompting)。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 涵盖编程、推理和通用用途的权威模型全景指南。',
          '[2026年创意写作最佳本地LLM](/zh/local-llms/best-local-llms-for-creative-writing) — 面向小说、诗歌和长篇写作的更广泛模型汇总。',
          '[Backyard AI评测：本地AI角色聊天与角色扮演](/zh/power-local-llm/backyard-ai-review-local-roleplay) — 内置Character Hub的免费桌面应用；是上述前端的低门槛替代。',
          '[SillyTavern vs Agnai vs RisuAI：最佳本地角色扮演前端](/zh/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 角色扮演类前端的横向对比。',
          '[小说作者的本地LLM提示词：模板与技巧](/zh/power-local-llm/local-llm-prompts-for-fiction-writers) — 适用于角色塑造、对话和修改的可复制提示词模板。',
          '[创意写作的Uncensored本地LLM：伦理、合法性与最佳实践](/zh/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 法律与伦理的界线在哪里。',
          '[温度与Top-P：控制AI创造力](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 采样参数在提示工程层面的讲解。',
          '[反向提示](/zh/prompt-engineering/negative-prompting) — 指定不要做什么；是创意系统提示词的效力倍增器。',
          '[Locally Uncensored评测：本地聊天、图像和视频合一的应用](/zh/power-local-llm/locally-uncensored-review) — 围绕无审查本地模型打造的一体化桌面应用，适合更想用应用而不是看模型列表的读者。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: 'Mejores LLM locales para escritura creativa (2026): ficción, diálogo y worldbuilding',
    seoTitle: 'Mejor LLM local para escritura creativa (2026): 6 opciones',
    intro: 'La escritura creativa es la carga de trabajo en la que los LLM locales ganan por algo más que privacidad y coste: sin rechazos que no puedas configurar, sin factura por token y con borradores que nunca salen de tu equipo. Esta guía ordena por nivel de hardware los modelos de pesos abiertos que merece la pena ejecutar en 2026 — Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B y los ajustes con pocos rechazos Hermes 4.3 y Dolphin 3.0 — con comandos de Ollama y ajustes de muestreo para prosa.',
    metaDescription: 'Gemma 4 31B y Qwen3.8-27B caben en una GPU de 24 GB. El mejor LLM local para ficción, diálogo y worldbuilding por nivel de VRAM, con comandos de Ollama.',
    heroImage: '/images/best-local-llm-creative-writing-hero-es.webp',
    twitterDescription: 'Los mejores LLM locales para escritura creativa en 2026, por nivel de VRAM: Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, Hermes 4.3. Con comandos de Ollama y ajustes de muestreo.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: 'Escritores de ficción, guionistas, diseñadores de juegos, creadores de mundos y aficionados al rol que usan LLM locales para un trabajo creativo donde la privacidad, la coherencia de voz y la disposición a tratar temas maduros importan más que las puntuaciones de benchmark.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM local escritura creativa',
    targetKeywords: [
      'mejor llm local para escritura creativa',
      'mejor llm local para escribir ficción',
      'mejor modelo ollama para escritura creativa',
      'llm local para escribir historias',
      'mejor llm local para worldbuilding',
      'llm local uncensored',
    ],
    leadAnswerBlock: '**Gemma 4 31B y Qwen3.8-27B son los mejores puntos de partida locales para la escritura creativa en 2026, y ambos funcionan en una sola GPU de 24 GB (unos 18–20 GB de pesos cada uno).** Gemma 4 31B es la opción para prosa: es el único modelo de este conjunto con su propia puntuación publicada en EQ-Bench Creative Writing v3. Qwen3.8-27B es la opción para contexto largo y seguimiento de instrucciones (256K tokens). Con 12 GB usa Gemma 4 12B; con 16 GB, Mistral Small 3 24B; con 48 GB o más, Llama 3.3 70B. Cuando un modelo instruct rechaza una escena planteada como ficción, Hermes 4.3 36B es la opción con pocos rechazos. Usa temperatura 0,9–1,1, no los 0,2–0,4 de programación. Los modelos cloud cerrados siguen puntuando más alto en los benchmarks creativos; los locales ganan en privacidad, coste y control.**',
    quickAnswerTop: {
      es: {
        question: '¿Qué LLM local es el mejor para escritura creativa?',
        answer: 'Gemma 4 31B y Qwen3.8-27B son los mejores modelos locales para escritura creativa en 2026. Ambos caben en una GPU de 24 GB (unos 18–20 GB de pesos). Gemma 4 31B es la opción para prosa y Qwen3.8-27B para contexto largo. Con 12 GB, Gemma 4 12B; con 16 GB, Mistral Small 3 24B; con 48 GB o más, Llama 3.3 70B. Para menos rechazos, Hermes 4.3 36B.',
        bullets: [
          'GPU de 24 GB: Gemma 4 31B (~19–20 GB) o Qwen3.8-27B (~18 GB).',
          'GPU de 12 GB: Gemma 4 12B (~8 GB), con margen para contexto largo.',
          'GPU de 16 GB: Mistral Small 3 24B (~14 GB), contexto de 32K.',
          '48 GB o más: Llama 3.3 70B (~43 GB en Q4_K_M).',
          'Muestreo para prosa: temperatura 0,9–1,1, top-p 0,92–0,95, modo thinking desactivado.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Puntos clave',
        anchor: '#key-takeaways',
      },
      {
        label: 'Datos rápidos',
        anchor: '#quick-facts',
      },
      {
        label: 'Cómo se eligieron estos modelos',
        anchor: '#how-we-tested',
      },
      {
        label: 'Mejor modelo por nivel de VRAM',
        anchor: '#hardware',
      },
      {
        label: 'Comparativa directa',
        anchor: '#comparison',
      },
      {
        label: 'Veredicto por modelo',
        anchor: '#verdicts',
      },
      {
        label: 'Mejores modelos de Ollama para escritura creativa',
        anchor: '#ollama',
      },
      {
        label: 'Modelos locales frente a modelos cloud para escribir',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Temperatura y top-p para trabajo creativo',
        anchor: '#sampling',
      },
      {
        label: 'Modelos uncensored: qué son',
        anchor: '#uncensored',
      },
      {
        label: 'Interfaces para trabajo creativo',
        anchor: '#frontends',
      },
      {
        label: 'Decisión: elige tu modelo',
        anchor: '#decision',
      },
      {
        label: 'Errores comunes',
        anchor: '#common-mistakes',
      },
      {
        label: 'Fuentes',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Lecturas relacionadas',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 31B es la opción de prosa para una GPU de 24 GB.** Unos 19–20 GB de pesos, contexto de 256K, Apache 2.0 y el único modelo de este conjunto con su propia puntuación publicada en EQ-Bench Creative Writing v3 (rúbrica 16,01, Elo 1407,6).',
          '**Qwen3.8-27B es la opción para contexto largo y seguimiento de instrucciones.** Unos 18 GB en Ollama, contexto de 256K, Apache 2.0. Aún no hay una puntuación creativa publicada, así que su calidad de prosa está sin verificar: pruébalo con tus propias escenas.',
          '**Elige según tu VRAM, no según una clasificación.** 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B o Qwen3.8-27B. 48 GB o más: Llama 3.3 70B.',
          '**Hermes 4.3 36B es la opción con pocos rechazos.** Apache 2.0, basado en ByteDance Seed-OSS-36B; Nous Research describe rechazos muy reducidos. Dolphin 3.0 es la alternativa más antigua.',
          '**El muestreo importa más que cambiar de modelo.** Temperatura 0,9–1,1 y top-p 0,92–0,95 para prosa; desactiva el modo thinking en ficción. Los ajustes de programación (0,2–0,4) producen prosa plana.',
          '**Los modelos cloud cerrados siguen liderando los benchmarks creativos.** El primero en EQ-Bench Creative Writing v3 es Claude Opus 4.7 con 2.206 Elo; la mejor entrada de pesos abiertos listada es Kimi K2.6 con 1.782, muy fuera del alcance del hardware doméstico. Lo local gana en privacidad, coste y control.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**GPU de 24 GB o Mac de 32 GB:** Gemma 4 31B (`gemma4:31b`, 19–20 GB) o Qwen3.8-27B (`qwen3.8:27b`, 18 GB). Ambos Apache 2.0, ambos con contexto de 256K.',
          '**GPU de 12 GB:** Gemma 4 12B (`gemma4:12b`, 7,7–8,0 GB), contexto de 256K.',
          '**GPU de 16 GB:** Mistral Small 3 24B (`mistral-small:24b`, 14 GB), contexto de 32K, Apache 2.0. Lanzado en 2025.',
          '**48 GB o más:** Llama 3.3 70B (`llama3.3:70b`, unos 43 GB en Q4_K_M). Lanzado en diciembre de 2024; licencia comunitaria de Meta.',
          '**Ajustes con pocos rechazos:** Hermes 4.3 36B (Apache 2.0) y Dolphin 3.0 (variante Mistral 24B, febrero de 2025).',
          '**Base de muestreo para prosa:** temperatura 1,0, top-p 0,95, min-p 0,05; añade penalización de repetición o DRY si las escenas entran en bucle.',
          '**Regla de memoria:** los tamaños de Ollama son solo pesos. Suma 2–6 GB para la caché KV en cuanto amplíes la ventana de contexto para escenas largas.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Cómo se eligieron estos modelos',
        content: '**Esta clasificación es una síntesis editorial de fuentes publicadas, no una nueva ronda de pruebas de PromptQuorum.** Comparamos las fichas oficiales de los modelos, la biblioteca de Ollama (tamaños, contexto, etiquetas) y clasificaciones públicas de escritura creativa, y asignamos cada modelo a un nivel de hardware.',
        items: [
          '**Tamaños y contexto:** leídos en las páginas de Ollama de [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Mistral Small](https://ollama.com/library/mistral-small) y en las fichas de Hugging Face. Solo pesos; la memoria de contexto es aparte.',
          '**Puntuaciones creativas:** EQ-Bench Creative Writing v3 y el Open Writing Leaderboard, tal como los reflejan rastreadores de terceros. Gemma 4 31B tiene puntuación propia; Qwen3.8-27B todavía no. Cuando una puntuación pertenece a un modelo hermano, lo indicamos.',
          '**Fechas de lanzamiento:** Qwen3.8-27B (agosto de 2026), Gemma 4 (julio de 2026), Mistral Small 3 (2025), Llama 3.3 70B (diciembre de 2024), Hermes 4.3 36B (diciembre de 2025), Dolphin 3.0 (febrero de 2025).',
          '**Lo que no hicimos:** no hemos ejecutado un nuevo conjunto de prompts puntuado con estos modelos. Los veredictos siguientes se basan en las fuentes citadas y las fichas; las etiquetas «ideal para» son recomendaciones, no resultados medidos.',
          'Para técnicas de prompting que mejoran la salida creativa en cualquier modelo, consulta [control de temperatura y top-p](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity) y [prompting con personas](/es/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Los benchmarks de escritura creativa son subjetivos y las clasificaciones se contradicen entre sí. Trata cada recomendación como una hipótesis de partida: pasa las mismas tres escenas por dos candidatos y quédate con el modelo cuya voz prefieras.',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Mejor modelo por nivel de VRAM',
        content: '**Elige primero por memoria: el modelo tiene que caber y dejar espacio para el contexto.** Los tamaños son descargas de Ollama con la cuantización de 4 bits por defecto; suma 2–6 GB de caché KV en escenas largas.',
        columns: [
          'Tu memoria',
          'Modelo',
          'Pesos',
          'Contexto',
        ],
        rows: [
          {
            'Tu memoria': 'GPU de 8 GB',
            Modelo: 'Qwen3.5 9B (`qwen3.5:9b`)',
            Pesos: '6,6–7,6 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU de 12 GB',
            Modelo: 'Gemma 4 12B (`gemma4:12b`)',
            Pesos: '7,7–8,0 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU de 16 GB',
            Modelo: 'Mistral Small 3 24B (`mistral-small:24b`)',
            Pesos: '14 GB',
            Contexto: '32K',
          },
          {
            'Tu memoria': 'GPU 24 GB / Mac 32 GB',
            Modelo: 'Gemma 4 31B (`gemma4:31b`)',
            Pesos: '19–20 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU 24 GB / Mac 32 GB',
            Modelo: 'Qwen3.8-27B (`qwen3.8:27b`)',
            Pesos: '18 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': 'GPU 24 GB, salida más rápida',
            Modelo: 'Gemma 4 26B-A4B (`gemma4:26b`)',
            Pesos: '16–19 GB',
            Contexto: '256K',
          },
          {
            'Tu memoria': '48 GB o más',
            Modelo: 'Llama 3.3 70B (`llama3.3:70b`)',
            Pesos: '~43 GB',
            Contexto: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'En un Mac de 32 GB, la memoria unificada se comparte con macOS. Cuenta con unos 24 GB utilizables para modelo y contexto, con lo que Gemma 4 31B y Qwen3.8-27B van con holgura.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparativa directa: modelos locales para escritura creativa',
        content: '**Ningún modelo gana en todas las tareas; elige según el nivel de hardware y lo que sostenga tu trabajo.** La tabla recoge los modelos de esta guía con tamaño, pesos y fecha de lanzamiento.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Gemma 4 31B y Qwen3.8-27B son las mejores opciones locales para escritura creativa en una GPU de 24 GB; Gemma 4 12B, Mistral Small 3 24B y Llama 3.3 70B cubren los niveles de 12 GB, 16 GB y 48 GB; Hermes 4.3 36B es la opción con pocos rechazos.',
          },
          {
            type: 'plain-terms',
            text: 'Elige el modelo más grande que quepa en tu memoria con espacio para el contexto. En una tarjeta de 24 GB, es Gemma 4 31B para prosa o Qwen3.8-27B para proyectos largos. Añade un ajuste con pocos rechazos solo si el modelo instruct se niega a escenas que necesitas escribir.',
          },
        ],
        columns: [
          'Modelo',
          'Tamaño',
          'Pesos (Ollama)',
          'Lanzado',
          'Ideal para',
        ],
        rows: [
          {
            Modelo: 'Gemma 4 31B',
            'Tamaño': '31B denso',
            'Pesos (Ollama)': '19–20 GB',
            Lanzado: 'Jul 2026',
            'Ideal para': 'Prosa en 24 GB; puntuación EQ-Bench propia',
          },
          {
            Modelo: 'Qwen3.8-27B',
            'Tamaño': '27B denso',
            'Pesos (Ollama)': '18 GB',
            Lanzado: 'Ago 2026',
            'Ideal para': 'Proyectos largos, seguir instrucciones',
          },
          {
            Modelo: 'Gemma 4 26B-A4B',
            'Tamaño': '26B MoE, 4B activos',
            'Pesos (Ollama)': '16–19 GB',
            Lanzado: 'Jul 2026',
            'Ideal para': 'Generación más rápida en 24 GB',
          },
          {
            Modelo: 'Gemma 4 12B',
            'Tamaño': '12B',
            'Pesos (Ollama)': '7,7–8,0 GB',
            Lanzado: 'Jul 2026',
            'Ideal para': 'GPU de 12 GB, contexto largo',
          },
          {
            Modelo: 'Mistral Small 3 24B',
            'Tamaño': '24B denso',
            'Pesos (Ollama)': '14 GB',
            Lanzado: '2025',
            'Ideal para': 'GPU de 16 GB; antiguo pero probado',
          },
          {
            Modelo: 'Llama 3.3 70B',
            'Tamaño': '70B denso',
            'Pesos (Ollama)': '~43 GB',
            Lanzado: 'Dic 2024',
            'Ideal para': '48 GB o más; referencia antigua',
          },
          {
            Modelo: 'Hermes 4.3 36B',
            'Tamaño': '36B denso',
            'Pesos (Ollama)': '~21–23 GB (est.)',
            Lanzado: 'Dic 2025',
            'Ideal para': 'Menos rechazos, Apache 2.0',
          },
          {
            Modelo: 'Dolphin 3.0',
            'Tamaño': '24B (variante Mistral)',
            'Pesos (Ollama)': '~14 GB',
            Lanzado: 'Feb 2025',
            'Ideal para': 'Opción antigua con pocos rechazos',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Lo habitual es un montaje de dos modelos: un modelo instruct como herramienta diaria, más Hermes 4.3 36B para las escenas que el instruct rechaza. Ambos conviven en `ollama list`.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Veredicto por modelo',
        items: [
          '**Gemma 4 31B** — opción de prosa para 24 GB. Es el único modelo de este conjunto con resultado propio en EQ-Bench Creative Writing v3 (rúbrica 16,01, Elo 1407,6, según un rastreador de terceros). Contexto de 256K y Apache 2.0. Google indica temperatura 1,0, top-p 0,95, top-k 64 como valores por defecto.',
          '**Qwen3.8-27B** — opción para proyectos largos. 262.144 tokens de contexto nativo (ampliable a 1M con YaRN), Apache 2.0, unos 18 GB en Ollama. Alibaba lo plantea para programación, agentes e investigación; la ficha no dice nada de escritura creativa y no hay puntuación creativa publicada, así que verifica la voz con tus escenas. El modo thinking viene activado por defecto; desactívalo para prosa.',
          '**Gemma 4 26B-A4B y 12B** — misma familia, compromisos distintos. El modelo de mezcla de expertos de 26B activa unos 4B de parámetros por token, por lo que genera más rápido que el 31B con memoria similar. El 12B cabe en tarjetas de 12 GB y mantiene el contexto de 256K.',
          '**Mistral Small 3 24B** — la opción de 16 GB. Apache 2.0, unos 14 GB, contexto de 32K. Es un modelo de 2025 y, junto con Llama, la recomendación más antigua de aquí; sigue en la lista porque pocos modelos más nuevos caben en 16 GB. Su sucesor, Mistral Small 4 (marzo de 2026, Apache 2.0), es un modelo de mezcla de expertos de 119B con unos 6B de parámetros activos, muy por encima de 16 GB.',
          '**Llama 3.3 70B** — la referencia de 48 GB. Un modelo de diciembre de 2024 con la licencia comunitaria de Meta. En equipos de 48 GB o más sigue siendo una opción sólida y ampliamente compatible; por debajo de ese nivel no es práctico.',
          '**Hermes 4.3 36B** — opción con pocos rechazos. Basado en ByteDance Seed-OSS-36B con Apache 2.0, con cuantizaciones GGUF en Hugging Face. Nous Research describe rechazos muy reducidos; Hermes 4.3 respondió al 72–75 % de los prompts de su propio RefusalBench. Su ficha sugiere temperatura 0,6, top-p 0,95, top-k 20; sube la temperatura para prosa.',
          '**Dolphin 3.0** — opción antigua con pocos rechazos. La generación más reciente de Dolphin que pudimos confirmar es Dolphin 3.0 (febrero de 2025, con una variante Mistral 24B). Úsalo si quieres un modelo sin censura de la familia Mistral; Hermes 4.3 es la opción más reciente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La coherencia de voz es la métrica que los escritores más subestiman. Un modelo que escribe un párrafo brillante pero pierde el modo de hablar del personaje en el quinto es peor que uno estable. Prueba la continuidad en sesiones largas, no solo la calidad de una salida aislada.',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Mejores modelos de Ollama para escritura creativa',
        content: '**Cinco comandos `ollama pull` cubren todos los niveles de hardware de esta guía.** Después ejecuta `ollama list` para confirmar que el modelo está instalado.',
        items: [
          '**24 GB, prosa:** `ollama pull gemma4:31b` — luego `ollama run gemma4:31b`.',
          '**24 GB, proyectos largos:** `ollama pull qwen3.8:27b` — ejecútalo con `ollama run qwen3.8:27b --think=false` para desactivar el thinking en prosa.',
          '**12 GB:** `ollama pull gemma4:12b`.',
          '**16 GB:** `ollama pull mistral-small:24b`.',
          '**48 GB o más:** `ollama pull llama3.3:70b`.',
          '**Ajuste con pocos rechazos:** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF` descarga el GGUF de Hermes 4.3 desde Hugging Face; en una tarjeta de 24 GB elige una cuantización de 4 bits.',
          '**Amplía la ventana de contexto para escenas largas.** El contexto por defecto de Ollama es pequeño. En una sesión interactiva escribe `/set parameter num_ctx 16384` o define `num_ctx` en un Modelfile. Valores mayores usan más VRAM.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Modelos locales frente a modelos cloud para escribir',
        content: '**Los modelos cloud cerrados puntúan más alto en los benchmarks creativos; los modelos locales ganan en privacidad, coste y control.** Quien busca «mejor LLM para escribir» sin «local» obtiene de las clasificaciones respuestas distintas a las de esta guía.',
        items: [
          '**Los modelos cerrados lideran.** En EQ-Bench Creative Writing v3, reflejado por [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores), Claude Opus 4.7 es primero con 2.206 Elo, por delante de GPT-5.5 con 2.035.',
          '**Las mejores entradas de pesos abiertos necesitan un centro de datos.** Kimi K2.6 (1.782 Elo) es la entrada de pesos abiertos más alta de esa lista. Featherless indica GLM-5.3 con 753B y DeepSeek-V4.1-Flash con 763B de parámetros, algo que ningún equipo doméstico ejecuta.',
          '**Lo que corre en una GPU.** Gemma 4 31B obtuvo 1407,6 Elo y una rúbrica de 16,01 en el mismo benchmark. Las puntuaciones de rastreadores distintos no comparten escala; compara solo dentro de una misma lista.',
          '**Cuándo conviene lo local.** Manuscritos inéditos, trabajo para clientes bajo NDA, contenido que un proveedor cloud rechazaría, trabajo sin conexión y proyectos en los que la factura mensual de API es la limitación.',
          '**Flujo híbrido.** Borradores y lluvia de ideas en local; un modelo cloud solo para el pulido final de contenido no sensible si quieres la calidad extra.',
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperatura y top-p para trabajo creativo',
        content: '**La escritura creativa pide temperaturas de muestreo más altas que la programación.** Los valores por defecto de la mayoría de interfaces de chat están ajustados para preguntas y respuestas; una temperatura de 0,7 produce prosa plana y predecible con prompts creativos.',
        items: [
          '**Los valores de los fabricantes son un suelo, no un objetivo.** Google indica para Gemma 4 temperatura 1,0, top-p 0,95, top-k 64; Alibaba, para Qwen3.8 en modo thinking, 1,0 / 0,95 / top-k 20 y, sin thinking, 0,7 / 0,8; Nous, para Hermes 4.3, 0,6 / 0,95 / top-k 20. Empieza ahí y ajusta para prosa.',
          '**Base para prosa:** temperatura 0,95–1,0, top-p 0,92–0,95, penalización de repetición 1,05–1,1. Ajusta por tarea desde aquí.',
          '**Diálogo ajustado:** temperatura 0,7–0,85, top-p 0,9. Las temperaturas más bajas mantienen coherentes las voces de los personajes entre intercambios.',
          '**Prosa lírica y poesía:** temperatura 1,0–1,2, top-p 0,95. Las temperaturas más altas abren elecciones de palabras inesperadas.',
          '**Ficción surrealista o de género:** temperatura 1,1–1,3, top-p 0,95–0,98.',
          '**Escenas guiadas por la trama (acción, misterio, giros):** temperatura 0,85–0,95, top-p 0,9. Piden más seguimiento de instrucciones que novedad.',
          '**Desactiva el modo thinking en ficción.** Los tokens de razonamiento añaden latencia y suelen producir prosa planificada y pulcra. Qwen3.8 acepta `enable_thinking: false`; en Ollama usa `--think=false`.',
          '**min_p (0,05–0,1):** una alternativa a top-p que escala el umbral según la probabilidad del token principal. Es más permisivo con prompts creativos sin la incoherencia de un top-p muy alto. Úsalo donde tu backend exponga el ajuste.',
          '**Penalización de repetición DRY (multiplicador 0,8, base 1,75, longitud permitida 2):** detecta repeticiones a nivel de frase que una penalización de repetición estándar pasa por alto, lo que ayuda en sesiones largas. Está disponible en backends basados en llama.cpp como KoboldCpp; comprueba si tu interfaz lo ofrece.',
          'Para una explicación más completa de por qué importan estos parámetros y cómo interactúan, consulta [control de temperatura y top-p](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Prueba el muestreo con una escena corta por modelo: tres ejecuciones por ajuste y elige la temperatura en la que el modelo suena más vivo sin perder el prompt. Los ajustes no se transfieren a la perfección entre modelos.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Modelos uncensored: qué son y cuándo importan',
        content: '**Uncensored no significa poco ético.** Significa que el comportamiento de rechazo del modelo se ha reducido mediante ajuste fino, de modo que sigue el prompt en lugar de negarse. El autor sigue siendo el escritor.',
        items: [
          '**Técnicamente.** Modelos como Hermes 4.3 y Dolphin 3.0 son ajustes finos cuyo posentrenamiento reduce los rechazos ante prompts maduros, violentos o moralmente complejos. Nous Research describe rechazos muy reducidos e informa de que Hermes 4.3 respondió al 72–75 % de los prompts de su propio RefusalBench. También existen en Ollama variantes comunitarias «abliterated» o «heretic» de modelos más nuevos; su calidad no está auditada.',
          '**Cuándo importan en el trabajo creativo.** Ficción madura, novela negra con violencia explícita, terror, escritura históricamente fiel sobre guerra o atrocidades y antagonistas moralmente complejos que el modelo instruct no interpreta de forma convincente.',
          '**Dónde se quedan cortos.** Siguen el prompt, también cuando está mal escrito. Los modelos instruct suelen suavizar un prompt vago hasta algo publicable; los de pocos rechazos te dan exactamente lo que pediste.',
          '**Límites éticos y legales.** Que un modelo lo escriba no es una licencia para generar contenido dirigido a personas reales, que represente escenarios sin consentimiento con personas identificables o que sea ilegal donde vives. Alojar en local no cambia la ley; cambia quién puede ver el borrador. Las leyes varían según el país y esto no es asesoramiento jurídico.',
          '**Para profundizar** en ética, legalidad y buenas prácticas, consulta [LLM locales uncensored para escritura creativa: ética, legalidad y buenas prácticas](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored es una decisión de flujo de trabajo, no una identidad. Muchos escritores redactan con el modelo instruct y cambian a un ajuste con pocos rechazos solo para ciertas escenas. Tener dos modelos instalados a la vez es lo habitual.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Interfaces para trabajo creativo',
        content: '**La interfaz de chat en la que escribes importa tanto como el modelo.** Cuatro opciones cubren la mayoría de los flujos de trabajo; elige según su forma.',
        items: [
          '**Open WebUI** — la opción generalista. Interfaz tipo ChatGPT, cambio de modelo con un clic, notas de personaje en el prompt de sistema y carga de documentos como contexto. Ideal para redactar con mucha prosa.',
          '**SillyTavern** — la opción para rol y diálogo. Tarjetas de personaje, gestión de personas, lorebooks para worldbuilding y chat de grupo para escenas con varios personajes. Ideal para trabajo basado en diálogo y proyectos de mundo de larga duración.',
          '**Agnai y RisuAI** — alternativas más ligeras a SillyTavern, con un primer uso más sencillo y menos personalización.',
          '**CLI de Ollama más un editor de texto** — la opción mínima. `ollama run gemma4:31b` y pega las escenas en tu borrador. Pierdes el contexto persistente de personajes, pero ganas concentración.',
          'Para la comparativa directa de las interfaces orientadas al rol, consulta [SillyTavern vs Agnai vs RisuAI: mejor interfaz local de rol](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Redactar y editar piden herramientas distintas. Genera en la interfaz de chat y luego exporta a un editor de texto plano para revisar. Editar dentro de la ventana de chat te acostumbra a pedirle al modelo que arregle la prosa en vez de revisarla tú.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisión: qué modelo para tu trabajo',
        content: '**Primero tu memoria, luego tu tarea.**',
        columns: [
          'Tu situación',
          'Elección',
        ],
        rows: [
          {
            'Tu situación': 'GPU de 24 GB o Mac de 32 GB, prosa primero',
            'Elección': 'Gemma 4 31B',
          },
          {
            'Tu situación': 'GPU de 24 GB, proyecto de longitud de novela',
            'Elección': 'Qwen3.8-27B (contexto de 256K)',
          },
          {
            'Tu situación': 'GPU de 24 GB, quiero salida más rápida',
            'Elección': 'Gemma 4 26B-A4B',
          },
          {
            'Tu situación': 'GPU de 12 GB',
            'Elección': 'Gemma 4 12B',
          },
          {
            'Tu situación': 'GPU de 16 GB',
            'Elección': 'Mistral Small 3 24B',
          },
          {
            'Tu situación': '48 GB o más, un modelo para todo',
            'Elección': 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            'Tu situación': 'El modelo instruct rechaza escenas que necesito',
            'Elección': 'Hermes 4.3 36B (conserva un instruct)',
          },
          {
            'Tu situación': 'Quiero uno para empezar y ajustar después',
            'Elección': 'Gemma 4 31B o Qwen3.8-27B, el que quepa',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige Gemma 4 31B o Qwen3.8-27B en una GPU de 24 GB, Gemma 4 12B con 12 GB, Mistral Small 3 24B con 16 GB, Llama 3.3 70B con 48 GB o más y Hermes 4.3 36B para las escenas que los modelos instruct rechazan.',
          },
          {
            type: 'plain-terms',
            text: 'Empieza con el modelo más grande que quepa en tu memoria con espacio para el contexto. Cambia a un especialista solo cuando una tarea, como la continuidad de largo aliento o las escenas maduras, se convierta en el cuello de botella. Dos instalaciones solo cuestan espacio en disco.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La mayoría de los escritores piensan demasiado en el modelo y muy poco en el prompt. Un prompt de sistema con notas de personaje, muestras de voz y punto de vista explícito rinde más que cambiar de modelo. Consulta [prompting con personas](/es/prompt-engineering/persona-prompting).',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al elegir y usar modelos locales para escritura creativa',
        items: [
          '**Error 1: elegir por el ranking general de benchmarks.** Las clasificaciones de programación y razonamiento se correlacionan mal con la calidad de la prosa. Mira clasificaciones creativas como EQ-Bench y luego prueba con tus propias escenas.',
          '**Error 2: usar un muestreo de programación.** Una temperatura de 0,2–0,4 produce prosa plana. El trabajo creativo pide aproximadamente 0,9–1,1.',
          '**Error 3: dejar el modo thinking activado.** Los modelos de razonamiento planifican antes de escribir, y la ficción puede resultar armada. Desactiva el thinking para la prosa.',
          '**Error 4: ignorar la memoria de contexto.** Un modelo de 31B con 19–20 GB deja poco margen en una tarjeta de 24 GB cuando amplías la ventana de contexto. Reserva 2–6 GB para la caché KV.',
          '**Error 5: prompts de sistema escasos.** «Eres un asistente útil» es el peor prompt para trabajo creativo. Combina notas de personaje, punto de vista y tiempo verbal con [prompting negativo](/es/prompt-engineering/negative-prompting) para descartar clichés.',
          '**Error 6: editar dentro de la ventana de chat.** Genera en el chat; revisa en un editor. Los escritores que dejan que el modelo revise pierden pronto su voz.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El mayor riesgo para tus habilidades con la IA de escritura creativa es externalizar la revisión. Generar es trabajo mecánico que se beneficia de un modelo; revisar es lo que hace que la prosa sea tuya.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Biblioteca de Ollama: Gemma 4](https://ollama.com/library/gemma4) — etiquetas, tamaños de descarga y ventanas de contexto.',
          '[Biblioteca de Ollama: Qwen3.8](https://ollama.com/library/qwen3.8) — etiqueta, tamaño y capacidades.',
          '[Hugging Face: ficha del modelo Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — licencia, longitud de contexto, muestreo recomendado.',
          '[Hugging Face: ficha del modelo Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — licencia, longitud de contexto, valores de muestreo por defecto.',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — modelo base, licencia, benchmark de rechazos, cuantizaciones GGUF.',
          '[Biblioteca de Ollama: Mistral Small](https://ollama.com/library/mistral-small) — tamaño, contexto y licencia de Mistral Small 3 24B.',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html) y [puntuaciones EQ-Bench de evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) — cifras de clasificaciones citadas arriba.',
          '[Featherless: mejores modelos abiertos para escritura creativa](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — tamaños de pesos abiertos y cifras EQ-Bench de Gemma 4 31B.',
          '[Documentación de SillyTavern](https://docs.sillytavern.app/) — tarjetas de personaje, personas, chat de grupo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es el mejor LLM local para escritura creativa?',
            a: 'Gemma 4 31B y Qwen3.8-27B son los mejores puntos de partida locales en 2026, y ambos caben en una GPU de 24 GB (unos 18–20 GB de pesos). Gemma 4 31B es la opción de prosa con puntuación EQ-Bench propia publicada; Qwen3.8-27B es la opción de contexto largo. En tarjetas más pequeñas usa Gemma 4 12B (12 GB) o Mistral Small 3 24B (16 GB).',
          },
          {
            q: '¿Cuál es el mejor modelo de Ollama para escritura creativa?',
            a: 'En una GPU de 24 GB, `ollama pull gemma4:31b` para prosa o `ollama pull qwen3.8:27b` para proyectos largos. Con 12 GB, `gemma4:12b`; con 16 GB, `mistral-small:24b`; con 48 GB o más, `llama3.3:70b`. Sube `num_ctx` para escenas largas y desactiva el thinking en ficción.',
          },
          {
            q: '¿Cuál es el mejor LLM local para escribir ficción e historias?',
            a: 'Elige el modelo más grande que quepa en tu memoria con espacio para el contexto. Gemma 4 31B es la opción de prosa en 24 GB, Qwen3.8-27B encaja con proyectos de longitud de novela gracias a su contexto de 256K y Llama 3.3 70B es la referencia con 48 GB o más. Usa temperatura 0,9–1,1 y un prompt de sistema con punto de vista, tiempo verbal y muestras de voz.',
          },
          {
            q: '¿Qué modelo local es mejor para worldbuilding?',
            a: 'Lo que más importa es el contexto largo: Qwen3.8-27B y Gemma 4 ofrecen 256K tokens, suficiente para mantener una biblia de lore y resúmenes de capítulos en el prompt. Combina cualquiera con lorebooks de SillyTavern o un documento de mundo fijado, y reúne facciones, reglas y nombres en un único bloque de referencia.',
          },
          {
            q: '¿Qué LLM es mejor para escribir una novela?',
            a: 'En local: Qwen3.8-27B (contexto de 256K) o Gemma 4 31B (contexto de 256K) en una GPU de 24 GB. El cuello de botella es la estructura, no el tamaño del modelo: un esquema, una biblia de personajes y resúmenes de capítulos mantienen la continuidad. Los modelos cloud cerrados puntúan más alto en benchmarks creativos, pero envían tu manuscrito a un tercero.',
          },
          {
            q: '¿Cuál es el mejor modelo local con 32 GB de VRAM o memoria unificada?',
            a: 'Gemma 4 31B (19–20 GB) o Qwen3.8-27B (18 GB) con una ventana de contexto mayor; la memoria extra sobre 24 GB paga la caché KV. Gemma 4 26B-A4B es la alternativa más rápida. Un modelo de 70B no cabe con comodidad por debajo de 48 GB.',
          },
          {
            q: '¿Qué es un LLM local uncensored y cuándo debería usar uno?',
            a: 'Es un ajuste fino cuyo posentrenamiento reduce los rechazos ante prompts maduros o moralmente complejos, de modo que el modelo sigue el prompt en lugar de negarse. Hermes 4.3 36B es la opción más reciente que pudimos confirmar; Dolphin 3.0 es más antiguo. Úsalo para ficción madura o escritura históricamente fiel, y conserva un modelo instruct para el resto.',
          },
          {
            q: '¿Qué temperatura debo usar para escritura creativa?',
            a: 'Temperatura 0,9–1,1 con top-p 0,92–0,95 para prosa. El diálogo ajustado pide 0,7–0,85; la poesía, 1,0–1,2; el trabajo surrealista o de género, 1,1–1,3. Los valores de los fabricantes, como el 1,0 / 0,95 / top-k 64 de Gemma 4, son un buen punto de partida. Desactiva el modo thinking en ficción.',
          },
          {
            q: '¿Son los modelos locales de escritura creativa tan buenos como ChatGPT o Claude?',
            a: 'No en los benchmarks. En EQ-Bench Creative Writing v3 lideran modelos cerrados como Claude Opus 4.7 (2.206 Elo), y las mejores entradas de pesos abiertos necesitan hardware de centro de datos. Un modelo local de 24 GB puede ser suficiente para redactar y mantiene los manuscritos privados. Un muestreo calibrado y un buen prompt de sistema cierran buena parte de la brecha práctica.',
          },
          {
            q: '¿Puede un modelo local escribir una novela completa?',
            a: 'Puede ayudar a redactarla. Un modelo de contexto de 256K como Qwen3.8-27B o Gemma 4 puede mantener en memoria un esquema largo y varios capítulos, pero la caché KV crece con el contexto, así que revisa la VRAM. Redacta sección a sección con una biblia de personajes y un lorebook; sin ellos, cualquier modelo se desvía.',
          },
          {
            q: '¿Los modelos uncensored producen contenido ilegal?',
            a: 'Producen el texto que pide el prompt; la responsabilidad legal recae en el escritor y la publicación, no en el modelo. Marcos como el AI Act de la UE, el § 184/§ 184c del StGB alemán y la normativa nacional sobre obscenidad se aplican con independencia de cómo se generó el texto. Alojar en local cambia quién ve el borrador, no lo que es legal. Esto no es asesoramiento jurídico.',
          },
          {
            q: '¿Cómo evito el cliché «shiver down their spine»?',
            a: 'Enumera 8–12 frases prohibidas en el prompt de sistema («do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'»). Mantén la temperatura en 0,85–1,0 en lugar de 1,2 o más y añade una penalización DRY donde tu backend la admita; una penalización de repetición simple no detecta clichés a nivel de frase. Una revisión manual es el filtro final. Consulta [prompting negativo](/es/prompt-engineering/negative-prompting).',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) — la guía de referencia del panorama de modelos para programación, razonamiento y uso general.',
          '[Mejores LLM locales para escritura creativa en 2026](/es/local-llms/best-local-llms-for-creative-writing) — un resumen más amplio de modelos para ficción, poesía y escritura de largo aliento.',
          '[Reseña de Backyard AI: chat de personajes y rol con IA local](/es/power-local-llm/backyard-ai-review-local-roleplay) — aplicación de escritorio gratuita con Character Hub integrado; la alternativa sencilla a las interfaces anteriores.',
          '[SillyTavern vs Agnai vs RisuAI: mejor interfaz local de rol](/es/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparativa directa de las interfaces orientadas al rol.',
          '[Prompts de LLM local para escritores de ficción: plantillas y técnicas](/es/power-local-llm/local-llm-prompts-for-fiction-writers) — plantillas de prompts para copiar y pegar para desarrollo de personajes, diálogo y revisión.',
          '[LLM locales uncensored para escritura creativa: ética, legalidad y buenas prácticas](/es/power-local-llm/uncensored-local-llm-creative-writing-ethics) — dónde están los límites legales y éticos.',
          '[Temperatura y top-p: controla la creatividad de la IA](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity) — el lado de ingeniería de prompts de los parámetros de muestreo.',
          '[Prompting negativo](/es/prompt-engineering/negative-prompting) — especificar qué no hacer; un multiplicador de fuerza para los prompts de sistema en trabajo creativo.',
          '[Reseña de Locally Uncensored: chat, imagen y vídeo locales en una sola app](/es/power-local-llm/locally-uncensored-review) — una app de escritorio todo en uno construida en torno a modelos locales sin censura, si prefieres una app a una lista de modelos.',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: 'Melhores LLMs locais para escrita criativa (2026): ficção, diálogo e worldbuilding',
    seoTitle: 'Melhor LLM local para escrita criativa (2026): 6 opções',
    intro: 'A escrita criativa é a carga de trabalho em que os LLMs locais ganham por mais do que privacidade e custo: sem recusas que você não consiga configurar, sem cobrança por token e com rascunhos que nunca saem da sua máquina. Este guia organiza por faixa de hardware os modelos de pesos abertos que valem a pena rodar em 2026 — Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B e os ajustes com poucas recusas Hermes 4.3 e Dolphin 3.0 — com comandos do Ollama e configurações de amostragem para prosa.',
    metaDescription: 'Gemma 4 31B e Qwen3.8-27B cabem em uma GPU de 24 GB. O melhor LLM local para ficção, diálogo e worldbuilding por faixa de VRAM, com comandos do Ollama.',
    heroImage: '/images/best-local-llm-creative-writing-hero-pt.webp',
    twitterDescription: 'Os melhores LLMs locais para escrita criativa em 2026, por faixa de VRAM: Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, Hermes 4.3. Com comandos do Ollama e configurações de amostragem.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: 'Escritores de ficção, roteiristas, game designers, criadores de mundos e entusiastas de RPG que usam LLMs locais em trabalho criativo, onde privacidade, consistência de voz e disposição para temas maduros importam mais que pontuações de benchmark.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM local escrita criativa',
    targetKeywords: [
      'melhor llm local para escrita criativa',
      'melhor llm local para escrever ficção',
      'melhor modelo ollama para escrita criativa',
      'llm local para escrever histórias',
      'melhor llm local para worldbuilding',
      'llm local uncensored',
    ],
    leadAnswerBlock: '**Gemma 4 31B e Qwen3.8-27B são os melhores pontos de partida locais para escrita criativa em 2026, e ambos rodam em uma única GPU de 24 GB (cerca de 18–20 GB de pesos cada).** O Gemma 4 31B é a escolha para prosa: é o único modelo deste conjunto com pontuação própria publicada no EQ-Bench Creative Writing v3. O Qwen3.8-27B é a escolha para contexto longo e seguimento de instruções (256K tokens). Com 12 GB, use o Gemma 4 12B; com 16 GB, o Mistral Small 3 24B; com 48 GB ou mais, o Llama 3.3 70B. Quando um modelo instruct recusa uma cena apresentada como ficção, o Hermes 4.3 36B é a opção com poucas recusas. Use temperatura 0,9–1,1, não os 0,2–0,4 de programação. Modelos de nuvem fechados ainda pontuam mais alto em benchmarks criativos; os locais ganham em privacidade, custo e controle.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM local para escrita criativa?',
        answer: 'Gemma 4 31B e Qwen3.8-27B são os melhores modelos locais para escrita criativa em 2026. Ambos cabem em uma GPU de 24 GB (cerca de 18–20 GB de pesos). O Gemma 4 31B é a escolha para prosa e o Qwen3.8-27B para contexto longo. Com 12 GB, Gemma 4 12B; com 16 GB, Mistral Small 3 24B; com 48 GB ou mais, Llama 3.3 70B. Para menos recusas, Hermes 4.3 36B.',
        bullets: [
          'GPU de 24 GB: Gemma 4 31B (~19–20 GB) ou Qwen3.8-27B (~18 GB).',
          'GPU de 12 GB: Gemma 4 12B (~8 GB), com folga para contexto longo.',
          'GPU de 16 GB: Mistral Small 3 24B (~14 GB), contexto de 32K.',
          '48 GB ou mais: Llama 3.3 70B (~43 GB em Q4_K_M).',
          'Amostragem para prosa: temperatura 0,9–1,1, top-p 0,92–0,95, modo thinking desligado.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'Principais conclusões',
        anchor: '#key-takeaways',
      },
      {
        label: 'Fatos rápidos',
        anchor: '#quick-facts',
      },
      {
        label: 'Como estas escolhas foram feitas',
        anchor: '#how-we-tested',
      },
      {
        label: 'Melhor modelo por faixa de VRAM',
        anchor: '#hardware',
      },
      {
        label: 'Comparação direta',
        anchor: '#comparison',
      },
      {
        label: 'Veredito por modelo',
        anchor: '#verdicts',
      },
      {
        label: 'Melhores modelos do Ollama para escrita criativa',
        anchor: '#ollama',
      },
      {
        label: 'Modelos locais ou de nuvem para escrever',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'Temperatura e top-p para trabalho criativo',
        anchor: '#sampling',
      },
      {
        label: 'Modelos uncensored: o que são',
        anchor: '#uncensored',
      },
      {
        label: 'Interfaces para trabalho criativo',
        anchor: '#frontends',
      },
      {
        label: 'Decisão: escolha seu modelo',
        anchor: '#decision',
      },
      {
        label: 'Erros comuns',
        anchor: '#common-mistakes',
      },
      {
        label: 'Fontes',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: 'Leituras relacionadas',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**O Gemma 4 31B é a escolha de prosa para uma GPU de 24 GB.** Cerca de 19–20 GB de pesos, contexto de 256K, Apache 2.0 e o único modelo deste conjunto com pontuação própria publicada no EQ-Bench Creative Writing v3 (rubrica 16,01, Elo 1407,6).',
          '**O Qwen3.8-27B é a escolha para contexto longo e seguimento de instruções.** Cerca de 18 GB no Ollama, contexto de 256K, Apache 2.0. Ainda não há pontuação criativa publicada, então a qualidade da prosa não está verificada: teste com suas próprias cenas.',
          '**Escolha pela VRAM, não pelo ranking.** 12 GB: Gemma 4 12B. 16 GB: Mistral Small 3 24B. 24 GB: Gemma 4 31B ou Qwen3.8-27B. 48 GB ou mais: Llama 3.3 70B.',
          '**O Hermes 4.3 36B é a escolha com poucas recusas.** Apache 2.0, baseado no ByteDance Seed-OSS-36B; a Nous Research descreve recusas bastante reduzidas. O Dolphin 3.0 é a alternativa mais antiga.',
          '**A amostragem importa mais que trocar de modelo.** Temperatura 0,9–1,1 e top-p 0,92–0,95 para prosa; desligue o modo thinking na ficção. Configurações de programação (0,2–0,4) geram prosa sem vida.',
          '**Modelos de nuvem fechados ainda lideram os benchmarks criativos.** O primeiro no EQ-Bench Creative Writing v3 é o Claude Opus 4.7, com 2.206 Elo; a melhor entrada de pesos abertos listada é o Kimi K2.6, com 1.782, muito além do hardware doméstico. O local ganha em privacidade, custo e controle.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**GPU de 24 GB ou Mac de 32 GB:** Gemma 4 31B (`gemma4:31b`, 19–20 GB) ou Qwen3.8-27B (`qwen3.8:27b`, 18 GB). Ambos Apache 2.0, ambos com contexto de 256K.',
          '**GPU de 12 GB:** Gemma 4 12B (`gemma4:12b`, 7,7–8,0 GB), contexto de 256K.',
          '**GPU de 16 GB:** Mistral Small 3 24B (`mistral-small:24b`, 14 GB), contexto de 32K, Apache 2.0. Lançado em 2025.',
          '**48 GB ou mais:** Llama 3.3 70B (`llama3.3:70b`, cerca de 43 GB em Q4_K_M). Lançado em dezembro de 2024; licença comunitária da Meta.',
          '**Ajustes com poucas recusas:** Hermes 4.3 36B (Apache 2.0) e Dolphin 3.0 (variante Mistral 24B, fevereiro de 2025).',
          '**Base de amostragem para prosa:** temperatura 1,0, top-p 0,95, min-p 0,05; acrescente penalidade de repetição ou DRY se as cenas entrarem em loop.',
          '**Regra de memória:** os tamanhos do Ollama são só de pesos. Some 2–6 GB para o cache KV assim que ampliar a janela de contexto para cenas longas.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Como estas escolhas foram feitas',
        content: '**Este ranking é uma síntese editorial de fontes publicadas, não uma nova rodada de testes da PromptQuorum.** Comparamos as fichas oficiais dos modelos, a biblioteca do Ollama (tamanhos, contexto, tags) e rankings públicos de escrita criativa, e associamos cada modelo a uma faixa de hardware.',
        items: [
          '**Tamanhos e contexto:** lidos nas páginas do Ollama de [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Mistral Small](https://ollama.com/library/mistral-small) e nas fichas do Hugging Face. Só pesos; a memória de contexto é à parte.',
          '**Pontuações criativas:** EQ-Bench Creative Writing v3 e o Open Writing Leaderboard, como refletidos por rastreadores de terceiros. O Gemma 4 31B tem pontuação própria; o Qwen3.8-27B ainda não. Quando uma pontuação pertence a um modelo irmão, dizemos isso.',
          '**Datas de lançamento:** Qwen3.8-27B (agosto de 2026), Gemma 4 (julho de 2026), Mistral Small 3 (2025), Llama 3.3 70B (dezembro de 2024), Hermes 4.3 36B (dezembro de 2025), Dolphin 3.0 (fevereiro de 2025).',
          '**O que não fizemos:** não executamos um novo conjunto de prompts pontuado nesses modelos. Os vereditos abaixo seguem as fontes citadas e as fichas; os rótulos «ideal para» são recomendações, não resultados medidos.',
          'Para técnicas de prompt que melhoram a saída criativa em qualquer modelo, veja [controle de temperatura e top-p](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity) e [prompting por persona](/pt/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Benchmarks de escrita criativa são subjetivos e os rankings se contradizem. Trate cada recomendação como hipótese inicial: passe as mesmas três cenas por dois candidatos e fique com o modelo cuja voz você prefere.',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Melhor modelo por faixa de VRAM',
        content: '**Escolha primeiro pela memória: o modelo precisa caber e deixar espaço para o contexto.** Os tamanhos são downloads do Ollama com a quantização de 4 bits padrão; some 2–6 GB de cache KV em cenas longas.',
        columns: [
          'Sua memória',
          'Modelo',
          'Pesos',
          'Contexto',
        ],
        rows: [
          {
            'Sua memória': 'GPU de 8 GB',
            Modelo: 'Qwen3.5 9B (`qwen3.5:9b`)',
            Pesos: '6,6–7,6 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU de 12 GB',
            Modelo: 'Gemma 4 12B (`gemma4:12b`)',
            Pesos: '7,7–8,0 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU de 16 GB',
            Modelo: 'Mistral Small 3 24B (`mistral-small:24b`)',
            Pesos: '14 GB',
            Contexto: '32K',
          },
          {
            'Sua memória': 'GPU 24 GB / Mac 32 GB',
            Modelo: 'Gemma 4 31B (`gemma4:31b`)',
            Pesos: '19–20 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU 24 GB / Mac 32 GB',
            Modelo: 'Qwen3.8-27B (`qwen3.8:27b`)',
            Pesos: '18 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': 'GPU 24 GB, saída mais rápida',
            Modelo: 'Gemma 4 26B-A4B (`gemma4:26b`)',
            Pesos: '16–19 GB',
            Contexto: '256K',
          },
          {
            'Sua memória': '48 GB ou mais',
            Modelo: 'Llama 3.3 70B (`llama3.3:70b`)',
            Pesos: '~43 GB',
            Contexto: '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Em um Mac de 32 GB, a memória unificada é compartilhada com o macOS. Conte com cerca de 24 GB utilizáveis para modelo e contexto, o que deixa o Gemma 4 31B e o Qwen3.8-27B confortáveis.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparação direta: modelos locais para escrita criativa',
        content: '**Nenhum modelo vence todas as tarefas; escolha pela faixa de hardware e pelo que sustenta o seu trabalho.** A tabela lista os modelos deste guia com tamanho, pesos e data de lançamento.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Gemma 4 31B e Qwen3.8-27B são as melhores opções locais para escrita criativa em uma GPU de 24 GB; Gemma 4 12B, Mistral Small 3 24B e Llama 3.3 70B cobrem as faixas de 12 GB, 16 GB e 48 GB; o Hermes 4.3 36B é a opção com poucas recusas.',
          },
          {
            type: 'plain-terms',
            text: 'Escolha o maior modelo que caiba na sua memória com espaço para o contexto. Em uma placa de 24 GB, é o Gemma 4 31B para prosa ou o Qwen3.8-27B para projetos longos. Acrescente um ajuste com poucas recusas só se o modelo instruct se recusar a cenas que você precisa escrever.',
          },
        ],
        columns: [
          'Modelo',
          'Tamanho',
          'Pesos (Ollama)',
          'Lançado',
          'Ideal para',
        ],
        rows: [
          {
            Modelo: 'Gemma 4 31B',
            Tamanho: '31B denso',
            'Pesos (Ollama)': '19–20 GB',
            'Lançado': 'Jul 2026',
            'Ideal para': 'Prosa em 24 GB; pontuação EQ-Bench própria',
          },
          {
            Modelo: 'Qwen3.8-27B',
            Tamanho: '27B denso',
            'Pesos (Ollama)': '18 GB',
            'Lançado': 'Ago 2026',
            'Ideal para': 'Projetos longos, seguir instruções',
          },
          {
            Modelo: 'Gemma 4 26B-A4B',
            Tamanho: '26B MoE, 4B ativos',
            'Pesos (Ollama)': '16–19 GB',
            'Lançado': 'Jul 2026',
            'Ideal para': 'Geração mais rápida em 24 GB',
          },
          {
            Modelo: 'Gemma 4 12B',
            Tamanho: '12B',
            'Pesos (Ollama)': '7,7–8,0 GB',
            'Lançado': 'Jul 2026',
            'Ideal para': 'GPUs de 12 GB, contexto longo',
          },
          {
            Modelo: 'Mistral Small 3 24B',
            Tamanho: '24B denso',
            'Pesos (Ollama)': '14 GB',
            'Lançado': '2025',
            'Ideal para': 'GPUs de 16 GB; antigo, mas testado',
          },
          {
            Modelo: 'Llama 3.3 70B',
            Tamanho: '70B denso',
            'Pesos (Ollama)': '~43 GB',
            'Lançado': 'Dez 2024',
            'Ideal para': '48 GB ou mais; referência antiga',
          },
          {
            Modelo: 'Hermes 4.3 36B',
            Tamanho: '36B denso',
            'Pesos (Ollama)': '~21–23 GB (est.)',
            'Lançado': 'Dez 2025',
            'Ideal para': 'Menos recusas, Apache 2.0',
          },
          {
            Modelo: 'Dolphin 3.0',
            Tamanho: '24B (variante Mistral)',
            'Pesos (Ollama)': '~14 GB',
            'Lançado': 'Fev 2025',
            'Ideal para': 'Opção antiga com poucas recusas',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O arranjo comum é de dois modelos: um instruct para o dia a dia, mais o Hermes 4.3 36B para as cenas que o instruct recusa. Os dois convivem no `ollama list`.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'Veredito por modelo',
        items: [
          '**Gemma 4 31B** — escolha de prosa para 24 GB. É o único modelo deste conjunto com resultado próprio no EQ-Bench Creative Writing v3 (rubrica 16,01, Elo 1407,6, segundo um rastreador de terceiros). Contexto de 256K e Apache 2.0. O Google indica temperatura 1,0, top-p 0,95, top-k 64 como padrão.',
          '**Qwen3.8-27B** — escolha para projetos longos. 262.144 tokens de contexto nativo (extensível a 1M com YaRN), Apache 2.0, cerca de 18 GB no Ollama. A Alibaba o posiciona para programação, agentes e pesquisa; a ficha não menciona escrita criativa e não há pontuação criativa publicada, então verifique a voz com suas cenas. O modo thinking vem ligado por padrão; desligue para prosa.',
          '**Gemma 4 26B-A4B e 12B** — mesma família, compromissos diferentes. O modelo de mistura de especialistas de 26B ativa cerca de 4B de parâmetros por token, por isso gera mais rápido que o 31B com memória parecida. O 12B cabe em placas de 12 GB e ainda oferece contexto de 256K.',
          '**Mistral Small 3 24B** — a opção de 16 GB. Apache 2.0, cerca de 14 GB, contexto de 32K. É um modelo de 2025 e, junto com o Llama, a recomendação mais antiga aqui; fica na lista porque poucos modelos mais novos cabem em 16 GB. Seu sucessor, o Mistral Small 4 (março de 2026, Apache 2.0), é um modelo de mistura de especialistas de 119B com cerca de 6B de parâmetros ativos, muito além de 16 GB.',
          '**Llama 3.3 70B** — a referência de 48 GB. Um modelo de dezembro de 2024 com a licença comunitária da Meta. Em máquinas de 48 GB ou mais, continua sendo uma escolha sólida e amplamente suportada; abaixo dessa faixa, não é prático.',
          '**Hermes 4.3 36B** — escolha com poucas recusas. Baseado no ByteDance Seed-OSS-36B com Apache 2.0, com quantizações GGUF no Hugging Face. A Nous Research descreve recusas bastante reduzidas; o Hermes 4.3 respondeu a 72–75 % dos prompts do seu próprio RefusalBench. A ficha sugere temperatura 0,6, top-p 0,95, top-k 20; aumente a temperatura para prosa.',
          '**Dolphin 3.0** — opção antiga com poucas recusas. A geração mais recente do Dolphin que conseguimos confirmar é o Dolphin 3.0 (fevereiro de 2025, incluindo uma variante Mistral 24B). Use-o se quiser um modelo sem censura da família Mistral; o Hermes 4.3 é a escolha mais recente.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A consistência de voz é a métrica que os escritores mais subestimam. Um modelo que escreve um parágrafo brilhante, mas perde o jeito de falar do personagem no quinto, é pior que um modelo estável. Teste a continuidade em sessões longas, não só a qualidade de uma saída isolada.',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'Melhores modelos do Ollama para escrita criativa',
        content: '**Cinco comandos `ollama pull` cobrem todas as faixas de hardware deste guia.** Depois, rode `ollama list` para confirmar que o modelo está instalado.',
        items: [
          '**24 GB, prosa:** `ollama pull gemma4:31b` — depois `ollama run gemma4:31b`.',
          '**24 GB, projetos longos:** `ollama pull qwen3.8:27b` — execute com `ollama run qwen3.8:27b --think=false` para desligar o thinking em prosa.',
          '**12 GB:** `ollama pull gemma4:12b`.',
          '**16 GB:** `ollama pull mistral-small:24b`.',
          '**48 GB ou mais:** `ollama pull llama3.3:70b`.',
          '**Ajuste com poucas recusas:** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF` baixa o GGUF do Hermes 4.3 do Hugging Face; em uma placa de 24 GB, escolha uma quantização de 4 bits.',
          '**Aumente a janela de contexto para cenas longas.** O contexto padrão do Ollama é pequeno. Em uma sessão interativa, digite `/set parameter num_ctx 16384` ou defina `num_ctx` em um Modelfile. Valores maiores usam mais VRAM.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Modelos locais ou de nuvem para escrever',
        content: '**Modelos de nuvem fechados pontuam mais alto em benchmarks criativos; modelos locais ganham em privacidade, custo e controle.** Quem pesquisa «melhor LLM para escrever» sem «local» recebe dos rankings respostas diferentes das deste guia.',
        items: [
          '**Os modelos fechados lideram.** No EQ-Bench Creative Writing v3, refletido pelo [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores), o Claude Opus 4.7 está em primeiro com 2.206 Elo, à frente do GPT-5.5 com 2.035.',
          '**As melhores entradas de pesos abertos exigem um data center.** O Kimi K2.6 (1.782 Elo) é a entrada de pesos abertos mais alta dessa lista. A Featherless lista o GLM-5.3 com 753B e o DeepSeek-V4.1-Flash com 763B de parâmetros, o que nenhuma máquina doméstica executa.',
          '**O que roda em uma GPU.** O Gemma 4 31B obteve 1407,6 Elo e rubrica de 16,01 no mesmo benchmark. Pontuações de rastreadores diferentes não compartilham escala; compare apenas dentro de uma mesma lista.',
          '**Quando o local é a escolha certa.** Manuscritos inéditos, trabalho de clientes sob NDA, conteúdo que um provedor de nuvem recusaria, trabalho offline e projetos em que a fatura mensal de API é a restrição.',
          '**Fluxo híbrido.** Rascunho e brainstorming em local; um modelo de nuvem apenas para o polimento final de conteúdo não sensível, se você quiser a qualidade extra.',
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'Temperatura e top-p para trabalho criativo',
        content: '**A escrita criativa pede temperaturas de amostragem mais altas que a programação.** Os padrões da maioria das interfaces de chat são ajustados para perguntas e respostas; temperatura 0,7 produz prosa sem vida e previsível em prompts criativos.',
        items: [
          '**Os valores dos fabricantes são um piso, não uma meta.** O Google indica para o Gemma 4 temperatura 1,0, top-p 0,95, top-k 64; a Alibaba, para o Qwen3.8 em modo thinking, 1,0 / 0,95 / top-k 20 e, sem thinking, 0,7 / 0,8; a Nous, para o Hermes 4.3, 0,6 / 0,95 / top-k 20. Comece por aí e ajuste para prosa.',
          '**Base para prosa:** temperatura 0,95–1,0, top-p 0,92–0,95, penalidade de repetição 1,05–1,1. Ajuste por tarefa a partir daqui.',
          '**Diálogo enxuto:** temperatura 0,7–0,85, top-p 0,9. Temperaturas mais baixas mantêm as vozes dos personagens consistentes entre as falas.',
          '**Prosa lírica e poesia:** temperatura 1,0–1,2, top-p 0,95. Temperaturas mais altas abrem escolhas de palavras inesperadas.',
          '**Ficção surreal ou de gênero:** temperatura 1,1–1,3, top-p 0,95–0,98.',
          '**Cenas guiadas pelo enredo (ação, mistério, reviravoltas):** temperatura 0,85–0,95, top-p 0,9. Pedem mais seguimento de instruções que novidade.',
          '**Desligue o modo thinking na ficção.** Os tokens de raciocínio aumentam a latência e costumam gerar prosa planejada e arrumada demais. O Qwen3.8 aceita `enable_thinking: false`; no Ollama, use `--think=false`.',
          '**min_p (0,05–0,1):** uma alternativa ao top-p que ajusta o corte à probabilidade do token principal. É mais permissivo em prompts criativos, sem a incoerência de um top-p muito alto. Use onde seu backend expõe a configuração.',
          '**Penalidade de repetição DRY (multiplicador 0,8, base 1,75, comprimento permitido 2):** pega repetições em nível de frase que uma penalidade de repetição comum deixa passar, o que ajuda em sessões longas. Está disponível em backends baseados em llama.cpp, como o KoboldCpp; verifique se sua interface a oferece.',
          'Para uma explicação mais completa de por que esses parâmetros importam e como interagem, veja [controle de temperatura e top-p](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Teste a amostragem em uma cena curta por modelo: três execuções por configuração e escolha a temperatura em que o modelo soa mais vivo sem perder o prompt. As configurações não se transferem perfeitamente entre modelos.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Modelos uncensored: o que são e quando importam',
        content: '**Uncensored não significa antiético.** Significa que o comportamento de recusa do modelo foi reduzido por ajuste fino, de modo que ele segue o prompt em vez de recusar. O autor continua sendo o escritor.',
        items: [
          '**Tecnicamente.** Modelos como o Hermes 4.3 e o Dolphin 3.0 são ajustes finos cujo pós-treinamento reduz as recusas diante de prompts maduros, violentos ou moralmente complexos. A Nous Research descreve recusas bastante reduzidas e informa que o Hermes 4.3 respondeu a 72–75 % dos prompts do seu próprio RefusalBench. Há também no Ollama variantes comunitárias «abliterated» ou «heretic» de modelos mais novos; a qualidade delas não é auditada.',
          '**Quando importam no trabalho criativo.** Ficção adulta, ficção policial com violência explícita, terror, escrita historicamente fiel sobre guerra ou atrocidades e antagonistas moralmente complexos que o modelo instruct não interpreta de forma convincente.',
          '**Onde ficam a desejar.** Eles seguem o prompt, inclusive o mal escrito. Os modelos instruct costumam suavizar um prompt vago até algo publicável; os de poucas recusas entregam exatamente o que você pediu.',
          '**Limites éticos e legais.** Que um modelo escreva algo não é licença para produzir conteúdo que mire pessoas reais, retrate cenários sem consentimento envolvendo pessoas identificáveis ou seja ilegal onde você mora. Hospedar localmente não muda a lei; muda quem pode ver o rascunho. As leis variam por país e isto não é aconselhamento jurídico.',
          '**Para um tratamento mais longo** de ética, legalidade e boas práticas, veja [LLMs locais uncensored para escrita criativa: ética, legalidade e boas práticas](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored é uma escolha de fluxo de trabalho, não uma identidade. Muitos escritores fazem o rascunho com o modelo instruct e só trocam para um ajuste com poucas recusas em cenas específicas. Ter dois modelos instalados lado a lado é o padrão.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'Interfaces para trabalho criativo',
        content: '**A interface de chat em que você escreve importa tanto quanto o modelo.** Quatro opções cobrem a maioria dos fluxos de trabalho; escolha pelo formato do seu fluxo.',
        items: [
          '**Open WebUI** — a escolha de uso geral. Interface estilo ChatGPT, troca de modelo com um clique, notas de personagem no prompt de sistema e envio de documentos como contexto. Ideal para rascunhos com muita prosa.',
          '**SillyTavern** — a escolha para RPG e diálogo. Cartões de personagem, gerenciamento de personas, lorebooks para worldbuilding e chat em grupo para cenas com vários personagens. Ideal para trabalho baseado em diálogo e projetos de mundo de longa duração.',
          '**Agnai e RisuAI** — alternativas mais leves ao SillyTavern, com primeiro uso mais simples e menos personalização.',
          '**CLI do Ollama mais um editor de texto** — a escolha mínima. `ollama run gemma4:31b` e cole as cenas no rascunho. Perde-se o contexto persistente dos personagens, mas ganha-se foco.',
          'Para a comparação direta das interfaces voltadas a RPG, veja [SillyTavern vs Agnai vs RisuAI: melhor interface local de RPG](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Rascunhar e editar pedem ferramentas diferentes. Gere na interface de chat e depois exporte para um editor de texto simples para revisar. Editar dentro da janela de chat ensina a pedir ao modelo que conserte a prosa em vez de revisá-la você mesmo.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisão: qual modelo para o seu trabalho',
        content: '**Primeiro a memória, depois a tarefa.**',
        columns: [
          'Sua situação',
          'Escolha',
        ],
        rows: [
          {
            'Sua situação': 'GPU de 24 GB ou Mac de 32 GB, prosa primeiro',
            Escolha: 'Gemma 4 31B',
          },
          {
            'Sua situação': 'GPU de 24 GB, projeto do tamanho de um romance',
            Escolha: 'Qwen3.8-27B (contexto de 256K)',
          },
          {
            'Sua situação': 'GPU de 24 GB, quero saída mais rápida',
            Escolha: 'Gemma 4 26B-A4B',
          },
          {
            'Sua situação': 'GPU de 12 GB',
            Escolha: 'Gemma 4 12B',
          },
          {
            'Sua situação': 'GPU de 16 GB',
            Escolha: 'Mistral Small 3 24B',
          },
          {
            'Sua situação': '48 GB ou mais, um modelo para tudo',
            Escolha: 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            'Sua situação': 'O modelo instruct recusa cenas de que preciso',
            Escolha: 'Hermes 4.3 36B (mantenha um instruct)',
          },
          {
            'Sua situação': 'Quero um para começar e ajustar depois',
            Escolha: 'Gemma 4 31B ou Qwen3.8-27B, o que couber',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha Gemma 4 31B ou Qwen3.8-27B em uma GPU de 24 GB, Gemma 4 12B com 12 GB, Mistral Small 3 24B com 16 GB, Llama 3.3 70B com 48 GB ou mais e Hermes 4.3 36B para as cenas que os modelos instruct recusam.',
          },
          {
            type: 'plain-terms',
            text: 'Comece pelo maior modelo que caiba na sua memória com espaço para o contexto. Mude para um especialista só quando uma tarefa, como continuidade de longo fôlego ou cenas maduras, virar o gargalo. Duas instalações custam apenas espaço em disco.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A maioria dos escritores pensa demais no modelo e de menos no prompt. Um prompt de sistema com notas de personagem, amostras de voz e ponto de vista explícito rende mais que trocar de modelo. Veja [prompting por persona](/pt/prompt-engineering/persona-prompting).',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao escolher e usar modelos locais para escrita criativa',
        items: [
          '**Erro 1: escolher pelo ranking geral de benchmarks.** Rankings de programação e raciocínio se correlacionam mal com a qualidade da prosa. Olhe rankings criativos como o EQ-Bench e depois teste com suas próprias cenas.',
          '**Erro 2: usar amostragem de programação.** Temperatura 0,2–0,4 produz prosa sem vida. O trabalho criativo pede aproximadamente 0,9–1,1.',
          '**Erro 3: deixar o modo thinking ligado.** Modelos de raciocínio planejam antes de escrever, o que pode deixar a ficção com cara de montada. Desligue o thinking para prosa.',
          '**Erro 4: ignorar a memória de contexto.** Um modelo de 31B com 19–20 GB deixa pouca folga em uma placa de 24 GB quando você amplia a janela de contexto. Reserve 2–6 GB para o cache KV.',
          '**Erro 5: prompts de sistema magros.** «Você é um assistente prestativo» é o pior prompt para trabalho criativo. Combine notas de personagem, ponto de vista e tempo verbal com [prompting negativo](/pt/prompt-engineering/negative-prompting) para descartar clichês.',
          '**Erro 6: editar dentro da janela de chat.** Gere no chat; revise em um editor. Escritores que deixam o modelo revisar perdem a voz rapidamente.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'O maior risco para as suas habilidades com IA de escrita criativa é terceirizar a revisão. Gerar é trabalho mecânico que se beneficia de um modelo; revisar é o que torna a prosa sua.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Biblioteca do Ollama: Gemma 4](https://ollama.com/library/gemma4) — tags, tamanhos de download e janelas de contexto.',
          '[Biblioteca do Ollama: Qwen3.8](https://ollama.com/library/qwen3.8) — tag, tamanho e capacidades.',
          '[Hugging Face: ficha do modelo Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — licença, comprimento de contexto, amostragem recomendada.',
          '[Hugging Face: ficha do modelo Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — licença, comprimento de contexto, padrões de amostragem.',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — modelo base, licença, benchmark de recusas, quantizações GGUF.',
          '[Biblioteca do Ollama: Mistral Small](https://ollama.com/library/mistral-small) — tamanho, contexto e licença do Mistral Small 3 24B.',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html) e [pontuações EQ-Bench do evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) — números de rankings citados acima.',
          '[Featherless: melhores modelos abertos para escrita criativa](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — tamanhos de pesos abertos e números EQ-Bench do Gemma 4 31B.',
          '[Documentação do SillyTavern](https://docs.sillytavern.app/) — cartões de personagem, personas, chat em grupo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é o melhor LLM local para escrita criativa?',
            a: 'Gemma 4 31B e Qwen3.8-27B são os melhores pontos de partida locais em 2026, e ambos cabem em uma GPU de 24 GB (cerca de 18–20 GB de pesos). O Gemma 4 31B é a escolha de prosa com pontuação EQ-Bench própria publicada; o Qwen3.8-27B é a escolha de contexto longo. Em placas menores, use Gemma 4 12B (12 GB) ou Mistral Small 3 24B (16 GB).',
          },
          {
            q: 'Qual é o melhor modelo do Ollama para escrita criativa?',
            a: 'Em uma GPU de 24 GB, `ollama pull gemma4:31b` para prosa ou `ollama pull qwen3.8:27b` para projetos longos. Com 12 GB, `gemma4:12b`; com 16 GB, `mistral-small:24b`; com 48 GB ou mais, `llama3.3:70b`. Aumente `num_ctx` para cenas longas e desligue o thinking na ficção.',
          },
          {
            q: 'Qual é o melhor LLM local para escrever ficção e histórias?',
            a: 'Escolha o maior modelo que caiba na sua memória com espaço para o contexto. O Gemma 4 31B é a escolha de prosa em 24 GB, o Qwen3.8-27B atende projetos do tamanho de um romance com seu contexto de 256K e o Llama 3.3 70B é a referência com 48 GB ou mais. Use temperatura 0,9–1,1 e um prompt de sistema com ponto de vista, tempo verbal e amostras de voz.',
          },
          {
            q: 'Qual modelo local é o melhor para worldbuilding?',
            a: 'O que mais importa é o contexto longo: Qwen3.8-27B e Gemma 4 oferecem 256K tokens, o bastante para manter uma bíblia de lore e resumos de capítulos no prompt. Combine qualquer um com lorebooks do SillyTavern ou um documento de mundo fixado e reúna facções, regras e nomes em um único bloco de referência.',
          },
          {
            q: 'Qual LLM é o melhor para escrever um romance?',
            a: 'Em local: Qwen3.8-27B (contexto de 256K) ou Gemma 4 31B (contexto de 256K) em uma GPU de 24 GB. O gargalo é a estrutura, não o tamanho do modelo: um esboço, uma bíblia de personagens e resumos de capítulos garantem a continuidade. Modelos de nuvem fechados pontuam mais alto em benchmarks criativos, mas enviam seu manuscrito a terceiros.',
          },
          {
            q: 'Qual é o melhor modelo local com 32 GB de VRAM ou memória unificada?',
            a: 'Gemma 4 31B (19–20 GB) ou Qwen3.8-27B (18 GB) com uma janela de contexto maior; a memória extra além de 24 GB paga o cache KV. O Gemma 4 26B-A4B é a alternativa mais rápida. Um modelo de 70B não cabe confortavelmente abaixo de 48 GB.',
          },
          {
            q: 'O que é um LLM local uncensored e quando devo usar um?',
            a: 'É um ajuste fino cujo pós-treinamento reduz as recusas diante de prompts maduros ou moralmente complexos, de modo que o modelo segue o prompt em vez de recusar. O Hermes 4.3 36B é a opção mais recente que conseguimos confirmar; o Dolphin 3.0 é mais antigo. Use para ficção adulta ou escrita historicamente fiel e mantenha um modelo instruct para todo o resto.',
          },
          {
            q: 'Qual temperatura devo usar para escrita criativa?',
            a: 'Temperatura 0,9–1,1 com top-p 0,92–0,95 para prosa. Diálogo enxuto pede 0,7–0,85; poesia, 1,0–1,2; trabalho surreal ou de gênero, 1,1–1,3. Valores dos fabricantes, como o 1,0 / 0,95 / top-k 64 do Gemma 4, são um bom ponto de partida. Desligue o modo thinking na ficção.',
          },
          {
            q: 'Os modelos locais de escrita criativa são tão bons quanto o ChatGPT ou o Claude?',
            a: 'Não nos benchmarks. No EQ-Bench Creative Writing v3, modelos fechados como o Claude Opus 4.7 (2.206 Elo) lideram, e as melhores entradas de pesos abertos exigem hardware de data center. Um modelo local de 24 GB pode ser bom o bastante para rascunhar e mantém os manuscritos privados. Amostragem calibrada e um bom prompt de sistema fecham boa parte da diferença prática.',
          },
          {
            q: 'Um modelo local consegue escrever um romance inteiro?',
            a: 'Ele pode ajudar a rascunhar. Um modelo de contexto de 256K, como o Qwen3.8-27B ou o Gemma 4, consegue manter na memória um esboço longo e vários capítulos, mas o cache KV cresce com o contexto, então verifique a VRAM. Rascunhe seção por seção com uma bíblia de personagens e um lorebook; sem eles, qualquer modelo se desvia.',
          },
          {
            q: 'Modelos uncensored produzem conteúdo ilegal?',
            a: 'Eles produzem o texto que o prompt pede; a responsabilidade legal recai sobre o escritor e a publicação, não sobre o modelo. Marcos como o AI Act da UE, o § 184/§ 184c do StGB alemão e as normas nacionais sobre obscenidade valem independentemente de como o texto foi gerado. Hospedar localmente muda quem vê o rascunho, não o que é legal. Isto não é aconselhamento jurídico.',
          },
          {
            q: 'Como evito o clichê «shiver down their spine»?',
            a: 'Liste 8–12 frases proibidas no prompt de sistema («do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'»). Mantenha a temperatura em 0,85–1,0 em vez de 1,2 ou mais e adicione uma penalidade DRY onde o backend a suportar; uma penalidade de repetição simples não pega clichês em nível de frase. Uma revisão manual é o filtro final. Veja [prompting negativo](/pt/prompt-engineering/negative-prompting).',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) — o guia de referência do panorama de modelos para programação, raciocínio e uso geral.',
          '[Melhores LLMs locais para escrita criativa em 2026](/pt/local-llms/best-local-llms-for-creative-writing) — um panorama mais amplo de modelos para ficção, poesia e escrita de longo fôlego.',
          '[Análise do Backyard AI: chat de personagens e RPG com IA local](/pt/power-local-llm/backyard-ai-review-local-roleplay) — aplicativo de desktop gratuito com Character Hub integrado; a alternativa simples às interfaces acima.',
          '[SillyTavern vs Agnai vs RisuAI: melhor interface local de RPG](/pt/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — comparação direta das interfaces voltadas a RPG.',
          '[Prompts de LLM local para escritores de ficção: modelos e técnicas](/pt/power-local-llm/local-llm-prompts-for-fiction-writers) — modelos de prompt para copiar e colar em desenvolvimento de personagens, diálogo e revisão.',
          '[LLMs locais uncensored para escrita criativa: ética, legalidade e boas práticas](/pt/power-local-llm/uncensored-local-llm-creative-writing-ethics) — onde ficam os limites legais e éticos.',
          '[Temperatura e top-p: controle a criatividade da IA](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity) — o lado de engenharia de prompts dos parâmetros de amostragem.',
          '[Prompting negativo](/pt/prompt-engineering/negative-prompting) — especificar o que não fazer; um multiplicador de força para prompts de sistema em trabalho criativo.',
          '[Análise do Locally Uncensored: chat, imagem e vídeo locais em um só app](/pt/power-local-llm/locally-uncensored-review) — um app de desktop tudo-em-um construído em torno de modelos locais sem censura, se você prefere um app a uma lista de modelos.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: 'أفضل نماذج LLM المحلية للكتابة الإبداعية (2026): الخيال والحوار وبناء العوالم',
    seoTitle: 'أفضل LLM محلي للكتابة الإبداعية (2026): 6 اختيارات',
    intro: 'الكتابة الإبداعية هي المجال الذي تتفوق فيه نماذج LLM المحلية بما يتجاوز الخصوصية والتكلفة: لا رفض لا يمكنك ضبطه، ولا فاتورة لكل رمز، ومسودات لا تغادر جهازك. يرتّب هذا الدليل نماذج الأوزان المفتوحة التي تستحق التشغيل في 2026 — نموذج Gemma 4 ونموذج Qwen3.8-27B ونموذج Mistral Small 3 ونموذج Llama 3.3 70B، إضافةً إلى النموذجين المضبوطين بدقة منخفضي الرفض Hermes 4.3 وDolphin 3.0 — حسب فئة العتاد، مع أوامر Ollama وإعدادات أخذ العينات للنثر.',
    metaDescription: 'يعمل نموذج Gemma 4 31B ونموذج Qwen3.8-27B على بطاقة 24 جيجابايت واحدة. أفضل LLM محلي للخيال والحوار وبناء العوالم حسب فئة VRAM، مع أوامر Ollama.',
    heroImage: '/images/best-local-llm-creative-writing-hero-ar.webp',
    twitterDescription: 'أفضل نماذج LLM المحلية للكتابة الإبداعية في 2026 حسب فئة VRAM: Gemma 4 وQwen3.8-27B وMistral Small 3 وLlama 3.3 70B وHermes 4.3. مع أوامر Ollama وإعدادات أخذ العينات.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: 'كتّاب الخيال وكتّاب السيناريو ومصمّمو الألعاب وبنّاة العوالم وهواة لعب الأدوار الذين يستخدمون نماذج LLM محلية في عمل إبداعي تكون فيه الخصوصية وثبات الصوت والاستعداد للتعامل مع المواضيع الناضجة أهم من درجات الاختبارات المعيارية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'LLM محلي للكتابة الإبداعية',
    targetKeywords: [
      'أفضل llm محلي للكتابة الإبداعية',
      'أفضل llm محلي لكتابة الخيال',
      'أفضل نموذج ollama للكتابة الإبداعية',
      'llm محلي لكتابة القصص',
      'أفضل llm محلي لبناء العوالم',
      'llm محلي uncensored',
    ],
    leadAnswerBlock: '**نموذج Gemma 4 31B ونموذج Qwen3.8-27B هما أفضل نقطتي انطلاق محليتين للكتابة الإبداعية في 2026، ويعمل كلاهما على بطاقة رسومات واحدة بسعة 24 جيجابايت (نحو 18–20 جيجابايت أوزان لكل منهما).** نموذج Gemma 4 31B هو خيار النثر: إنه النموذج الوحيد في هذه المجموعة الذي له درجة منشورة خاصة به في EQ-Bench Creative Writing v3. ونموذج Qwen3.8-27B هو خيار السياق الطويل واتباع التعليمات (256K رمز). مع 12 جيجابايت استخدم نموذج Gemma 4 12B، ومع 16 جيجابايت نموذج Mistral Small 3 24B، ومع 48 جيجابايت أو أكثر نموذج Llama 3.3 70B. وعندما يرفض نموذج instruct مشهدًا صُغتَه كخيال، يكون نموذج Hermes 4.3 36B الخيار منخفض الرفض. استخدم درجة حرارة 0.9–1.1 لا 0.2–0.4 المخصصة للبرمجة. لا تزال النماذج السحابية المغلقة تحقق درجات أعلى في اختبارات الإبداع؛ أما المحلية فتتفوق في الخصوصية والتكلفة والتحكم.**',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل LLM محلي للكتابة الإبداعية؟',
        answer: 'نموذج Gemma 4 31B ونموذج Qwen3.8-27B هما أفضل النماذج المحلية للكتابة الإبداعية في 2026. كلاهما يناسب بطاقة 24 جيجابايت (نحو 18–20 جيجابايت أوزان). نموذج Gemma 4 31B خيار النثر، ونموذج Qwen3.8-27B خيار السياق الطويل. مع 12 جيجابايت: Gemma 4 12B، ومع 16 جيجابايت: Mistral Small 3 24B، ومع 48 جيجابايت أو أكثر: Llama 3.3 70B. لرفض أقل: Hermes 4.3 36B.',
        bullets: [
          'بطاقة 24 جيجابايت: نموذج Gemma 4 31B (~19–20 جيجابايت) أو نموذج Qwen3.8-27B (~18 جيجابايت).',
          'بطاقة 12 جيجابايت: نموذج Gemma 4 12B (~8 جيجابايت) مع مساحة لسياق طويل.',
          'بطاقة 16 جيجابايت: نموذج Mistral Small 3 24B (~14 جيجابايت)، سياق 32K.',
          '48 جيجابايت أو أكثر: نموذج Llama 3.3 70B (~43 جيجابايت بصيغة Q4_K_M).',
          'أخذ العينات للنثر: درجة حرارة 0.9–1.1، وtop-p ‏0.92–0.95، ووضع thinking متوقف.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: 'النقاط الرئيسية',
        anchor: '#key-takeaways',
      },
      {
        label: 'حقائق سريعة',
        anchor: '#quick-facts',
      },
      {
        label: 'كيف تم اختيار هذه النماذج',
        anchor: '#how-we-tested',
      },
      {
        label: 'أفضل نموذج حسب فئة VRAM',
        anchor: '#hardware',
      },
      {
        label: 'مقارنة مباشرة',
        anchor: '#comparison',
      },
      {
        label: 'الحكم على كل نموذج',
        anchor: '#verdicts',
      },
      {
        label: 'أفضل نماذج Ollama للكتابة الإبداعية',
        anchor: '#ollama',
      },
      {
        label: 'النماذج المحلية مقابل السحابية للكتابة',
        anchor: '#cloud-vs-local',
      },
      {
        label: 'درجة الحرارة وtop-p للعمل الإبداعي',
        anchor: '#sampling',
      },
      {
        label: 'نماذج Uncensored: ما هي',
        anchor: '#uncensored',
      },
      {
        label: 'واجهات للعمل الإبداعي',
        anchor: '#frontends',
      },
      {
        label: 'القرار: اختر نموذجك',
        anchor: '#decision',
      },
      {
        label: 'أخطاء شائعة',
        anchor: '#common-mistakes',
      },
      {
        label: 'المصادر',
        anchor: '#sources',
      },
      {
        label: 'الأسئلة الشائعة',
        anchor: '#faq',
      },
      {
        label: 'قراءات ذات صلة',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**نموذج Gemma 4 31B هو خيار النثر لبطاقة 24 جيجابايت.** نحو 19–20 جيجابايت أوزان، وسياق 256K، ورخصة Apache 2.0، وهو النموذج الوحيد في هذه المجموعة الذي له درجة EQ-Bench Creative Writing v3 منشورة خاصة به (المعيار 16.01، وElo ‏1407.6).',
          '**نموذج Qwen3.8-27B هو خيار السياق الطويل واتباع التعليمات.** نحو 18 جيجابايت على Ollama، وسياق 256K، ورخصة Apache 2.0. لا توجد بعد درجة إبداعية منشورة له، لذا فجودة نثره غير متحقق منها؛ اختبره على مشاهدك الخاصة.',
          '**اختر حسب VRAM لا حسب لوحة الترتيب.** 12 جيجابايت: نموذج Gemma 4 12B. 16 جيجابايت: نموذج Mistral Small 3 24B. 24 جيجابايت: نموذج Gemma 4 31B أو Qwen3.8-27B. 48 جيجابايت أو أكثر: نموذج Llama 3.3 70B.',
          '**نموذج Hermes 4.3 36B هو الخيار منخفض الرفض.** رخصة Apache 2.0، ومبني على نموذج ByteDance Seed-OSS-36B؛ وتصف Nous Research انخفاضًا كبيرًا في الرفض. ونموذج Dolphin 3.0 بديل أقدم.',
          '**أخذ العينات أهم من تبديل النموذج.** درجة حرارة 0.9–1.1 وtop-p ‏0.92–0.95 للنثر؛ أوقف وضع thinking في الخيال. إعدادات البرمجة (0.2–0.4) تنتج نثرًا باهتًا.',
          '**النماذج السحابية المغلقة ما زالت تتصدر اختبارات الإبداع.** في صدارة EQ-Bench Creative Writing v3 نموذج Claude Opus 4.7 بـ 2,206 Elo؛ وأفضل إدخال مفتوح الأوزان في القائمة هو نموذج Kimi K2.6 بـ 1,782، وهو أبعد بكثير من العتاد المنزلي. المحلي يتفوق في الخصوصية والتكلفة والتحكم.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**بطاقة 24 جيجابايت أو ماك 32 جيجابايت:** نموذج Gemma 4 31B (`gemma4:31b`، ‏19–20 جيجابايت) أو نموذج Qwen3.8-27B (`qwen3.8:27b`، ‏18 جيجابايت). كلاهما Apache 2.0، وكلاهما بسياق 256K.',
          '**بطاقة 12 جيجابايت:** نموذج Gemma 4 12B (`gemma4:12b`، ‏7.7–8.0 جيجابايت)، سياق 256K.',
          '**بطاقة 16 جيجابايت:** نموذج Mistral Small 3 24B (`mistral-small:24b`، ‏14 جيجابايت)، سياق 32K، رخصة Apache 2.0. صدر في 2025.',
          '**48 جيجابايت أو أكثر:** نموذج Llama 3.3 70B (`llama3.3:70b`، نحو 43 جيجابايت بصيغة Q4_K_M). صدر في ديسمبر 2024؛ رخصة مجتمع Meta.',
          '**نماذج مضبوطة بدقة منخفضة الرفض:** نموذج Hermes 4.3 36B (رخصة Apache 2.0) ونموذج Dolphin 3.0 (إصدار Mistral 24B، فبراير 2025).',
          '**أساس أخذ العينات للنثر:** درجة حرارة 1.0، وtop-p ‏0.95، وmin-p ‏0.05؛ أضف عقوبة تكرار أو DRY إذا دخلت المشاهد في حلقات.',
          '**قاعدة الذاكرة:** أحجام Ollama هي الأوزان فقط. أضف 2–6 جيجابايت لذاكرة KV المؤقتة عند توسيع نافذة السياق للمشاهد الطويلة.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'كيف تم اختيار هذه النماذج',
        content: '**هذا الترتيب تجميع تحريري لمصادر منشورة، وليس جولة اختبار جديدة من PromptQuorum.** قارنّا بطاقات النماذج الرسمية ومكتبة Ollama (الأحجام والسياق والوسوم) ولوحات ترتيب الكتابة الإبداعية العامة، ثم طابقنا كل نموذج مع فئة عتاد.',
        items: [
          '**الأحجام والسياق:** مأخوذة من صفحات Ollama لـ [Gemma 4](https://ollama.com/library/gemma4) و[Qwen3.8](https://ollama.com/library/qwen3.8) و[Mistral Small](https://ollama.com/library/mistral-small) ومن بطاقات Hugging Face. الأوزان فقط؛ وذاكرة السياق إضافية.',
          '**درجات الإبداع:** EQ-Bench Creative Writing v3 وOpen Writing Leaderboard كما تعكسهما متتبعات خارجية. لنموذج Gemma 4 31B درجة خاصة به، ولنموذج Qwen3.8-27B ليست بعد. وحين تعود الدرجة إلى نموذج شقيق نذكر ذلك.',
          '**تواريخ الإصدار:** نموذج Qwen3.8-27B (أغسطس 2026)، ونموذج Gemma 4 (يوليو 2026)، ونموذج Mistral Small 3 (2025)، ونموذج Llama 3.3 70B (ديسمبر 2024)، ونموذج Hermes 4.3 36B (ديسمبر 2025)، ونموذج Dolphin 3.0 (فبراير 2025).',
          '**ما لم نفعله:** لم نشغّل مجموعة جديدة من الأوامر المُقيَّمة على هذه النماذج. تتبع الأحكام أدناه المصادر المقتبسة وبطاقات النماذج؛ وعبارات «الأنسب لـ» توصيات وليست نتائج مقيسة.',
          'لتقنيات الأوامر التي تحسّن المخرجات الإبداعية على أي نموذج، راجع [التحكم في درجة الحرارة وtop-p](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity) و[توجيه الأوامر بالشخصية](/ar/prompt-engineering/persona-prompting).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'اختبارات الكتابة الإبداعية ذاتية، وتتناقض لوحات الترتيب فيما بينها. تعامل مع كل توصية هنا كفرضية أولية: مرّر المشاهد الثلاثة نفسها عبر مرشحين اثنين واحتفظ بالنموذج الذي يعجبك صوته.',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'أفضل نموذج حسب فئة VRAM',
        content: '**اختر أولًا حسب الذاكرة: يجب أن يتسع النموذج مع بقاء مساحة للسياق.** الأحجام هي أحجام تنزيل Ollama بالتكميم الافتراضي 4 بت؛ أضف 2–6 جيجابايت لذاكرة KV المؤقتة في المشاهد الطويلة.',
        columns: [
          'ذاكرتك',
          'النموذج',
          'الأوزان',
          'السياق',
        ],
        rows: [
          {
            'ذاكرتك': 'بطاقة 8 جيجابايت',
            'النموذج': 'Qwen3.5 9B (`qwen3.5:9b`)',
            'الأوزان': '6.6–7.6 جيجابايت',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'بطاقة 12 جيجابايت',
            'النموذج': 'Gemma 4 12B (`gemma4:12b`)',
            'الأوزان': '7.7–8.0 جيجابايت',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'بطاقة 16 جيجابايت',
            'النموذج': 'Mistral Small 3 24B (`mistral-small:24b`)',
            'الأوزان': '14 جيجابايت',
            'السياق': '32K',
          },
          {
            'ذاكرتك': 'بطاقة 24 جيجابايت / ماك 32 جيجابايت',
            'النموذج': 'Gemma 4 31B (`gemma4:31b`)',
            'الأوزان': '19–20 جيجابايت',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'بطاقة 24 جيجابايت / ماك 32 جيجابايت',
            'النموذج': 'Qwen3.8-27B (`qwen3.8:27b`)',
            'الأوزان': '18 جيجابايت',
            'السياق': '256K',
          },
          {
            'ذاكرتك': 'بطاقة 24 جيجابايت، مخرجات أسرع',
            'النموذج': 'Gemma 4 26B-A4B (`gemma4:26b`)',
            'الأوزان': '16–19 جيجابايت',
            'السياق': '256K',
          },
          {
            'ذاكرتك': '48 جيجابايت أو أكثر',
            'النموذج': 'Llama 3.3 70B (`llama3.3:70b`)',
            'الأوزان': '~43 جيجابايت',
            'السياق': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'في جهاز ماك بسعة 32 جيجابايت تُشارَك الذاكرة الموحّدة مع macOS. احسب نحو 24 جيجابايت قابلة للاستخدام للنموذج والسياق، وبذلك يعمل نموذجا Gemma 4 31B وQwen3.8-27B براحة.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'مقارنة مباشرة: نماذج محلية للكتابة الإبداعية',
        content: '**لا يفوز نموذج واحد في كل المهام؛ اختر حسب فئة العتاد وما يقوم عليه عملك.** يعرض الجدول نماذج هذا الدليل مع الحجم والأوزان وتاريخ الإصدار.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'نموذجا Gemma 4 31B وQwen3.8-27B أفضل خيارين محليين للكتابة الإبداعية على بطاقة 24 جيجابايت؛ ونماذج Gemma 4 12B وMistral Small 3 24B وLlama 3.3 70B تغطي فئات 12 و16 و48 جيجابايت؛ ونموذج Hermes 4.3 36B هو الخيار منخفض الرفض.',
          },
          {
            type: 'plain-terms',
            text: 'اختر أكبر نموذج يتسع في ذاكرتك مع مساحة للسياق. على بطاقة 24 جيجابايت يكون ذلك نموذج Gemma 4 31B للنثر أو نموذج Qwen3.8-27B للمشاريع الطويلة. أضف نموذجًا مضبوطًا بدقة منخفض الرفض فقط إذا رفض نموذج instruct مشاهد تحتاج إلى كتابتها.',
          },
        ],
        columns: [
          'النموذج',
          'الحجم',
          'الأوزان (Ollama)',
          'الإصدار',
          'الأنسب لـ',
        ],
        rows: [
          {
            'النموذج': 'Gemma 4 31B',
            'الحجم': '31B كثيف',
            'الأوزان (Ollama)': '19–20 جيجابايت',
            'الإصدار': 'يوليو 2026',
            'الأنسب لـ': 'نثر على 24 جيجابايت؛ درجة EQ-Bench خاصة',
          },
          {
            'النموذج': 'Qwen3.8-27B',
            'الحجم': '27B كثيف',
            'الأوزان (Ollama)': '18 جيجابايت',
            'الإصدار': 'أغسطس 2026',
            'الأنسب لـ': 'مشاريع طويلة، اتباع التعليمات',
          },
          {
            'النموذج': 'Gemma 4 26B-A4B',
            'الحجم': '26B MoE، 4B نشط',
            'الأوزان (Ollama)': '16–19 جيجابايت',
            'الإصدار': 'يوليو 2026',
            'الأنسب لـ': 'توليد أسرع على 24 جيجابايت',
          },
          {
            'النموذج': 'Gemma 4 12B',
            'الحجم': '12B',
            'الأوزان (Ollama)': '7.7–8.0 جيجابايت',
            'الإصدار': 'يوليو 2026',
            'الأنسب لـ': 'بطاقات 12 جيجابايت، سياق طويل',
          },
          {
            'النموذج': 'Mistral Small 3 24B',
            'الحجم': '24B كثيف',
            'الأوزان (Ollama)': '14 جيجابايت',
            'الإصدار': '2025',
            'الأنسب لـ': 'بطاقات 16 جيجابايت؛ أقدم لكنه مجرَّب',
          },
          {
            'النموذج': 'Llama 3.3 70B',
            'الحجم': '70B كثيف',
            'الأوزان (Ollama)': '~43 جيجابايت',
            'الإصدار': 'ديسمبر 2024',
            'الأنسب لـ': '48 جيجابايت أو أكثر؛ مرجع أقدم',
          },
          {
            'النموذج': 'Hermes 4.3 36B',
            'الحجم': '36B كثيف',
            'الأوزان (Ollama)': '~21–23 جيجابايت (تقدير)',
            'الإصدار': 'ديسمبر 2025',
            'الأنسب لـ': 'رفض أقل، Apache 2.0',
          },
          {
            'النموذج': 'Dolphin 3.0',
            'الحجم': '24B (إصدار Mistral)',
            'الأوزان (Ollama)': '~14 جيجابايت',
            'الإصدار': 'فبراير 2025',
            'الأنسب لـ': 'خيار أقدم منخفض الرفض',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'النمط الشائع هو إعداد بنموذجين: نموذج instruct للاستخدام اليومي، مع نموذج Hermes 4.3 36B للمشاهد التي يرفضها نموذج instruct. يمكن أن يقيما معًا في `ollama list`.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: 'الحكم على كل نموذج',
        items: [
          '**نموذج Gemma 4 31B** — خيار النثر لبطاقة 24 جيجابايت. هو النموذج الوحيد في هذه المجموعة الذي له نتيجة خاصة في EQ-Bench Creative Writing v3 (المعيار 16.01، وElo ‏1407.6، بحسب متتبع خارجي). سياق 256K ورخصة Apache 2.0. تذكر Google القيم الافتراضية: درجة حرارة 1.0، وtop-p ‏0.95، وtop-k ‏64.',
          '**نموذج Qwen3.8-27B** — خيار المشاريع الطويلة. سياق أصلي بطول 262,144 رمزًا (قابل للتوسيع إلى 1M عبر YaRN)، ورخصة Apache 2.0، ونحو 18 جيجابايت على Ollama. تضعه Alibaba للبرمجة والوكلاء والبحث؛ ولا تذكر بطاقة النموذج شيئًا عن الكتابة الإبداعية، ولا توجد درجة إبداعية منشورة، فتحقق من الصوت على مشاهدك. وضع thinking مفعّل افتراضيًا؛ أوقفه للنثر.',
          '**نموذجا Gemma 4 26B-A4B و12B** — العائلة نفسها بمفاضلات مختلفة. يفعّل نموذج خليط الخبراء 26B نحو 4B معامل لكل رمز، فيولّد أسرع من 31B بذاكرة مماثلة. ويناسب نموذج 12B بطاقات 12 جيجابايت ويحتفظ بسياق 256K.',
          '**نموذج Mistral Small 3 24B** — خيار 16 جيجابايت. رخصة Apache 2.0، ونحو 14 جيجابايت، وسياق 32K. هو نموذج 2025 وأقدم توصية هنا بعد Llama؛ بقي في القائمة لأن قليلًا من النماذج الأحدث تتسع في 16 جيجابايت. أما خليفته نموذج Mistral Small 4 (مارس 2026، رخصة Apache 2.0) فهو نموذج خليط خبراء بحجم 119B مع نحو 6B معامل نشط، وهو أكبر بكثير من 16 جيجابايت.',
          '**نموذج Llama 3.3 70B** — مرجع 48 جيجابايت. نموذج من ديسمبر 2024 برخصة مجتمع Meta. على الأجهزة بسعة 48 جيجابايت أو أكثر يظل خيارًا قويًا وواسع الدعم؛ وما دون ذلك لا يكون عمليًا.',
          '**نموذج Hermes 4.3 36B** — الخيار منخفض الرفض. مبني على نموذج ByteDance Seed-OSS-36B برخصة Apache 2.0، وتتوفر له تكميمات GGUF على Hugging Face. تصف Nous Research انخفاضًا كبيرًا في الرفض؛ وأجاب نموذج Hermes 4.3 عن 72–75% من أوامر RefusalBench الخاص بها. تقترح بطاقته درجة حرارة 0.6 وtop-p ‏0.95 وtop-k ‏20؛ ارفع درجة الحرارة للنثر.',
          '**نموذج Dolphin 3.0** — خيار أقدم منخفض الرفض. أحدث جيل من Dolphin استطعنا تأكيده هو Dolphin 3.0 (فبراير 2025، ويشمل إصدار Mistral 24B). استخدمه إذا أردت نموذجًا غير خاضع للرقابة من عائلة Mistral؛ ونموذج Hermes 4.3 هو الخيار الأحدث.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'ثبات الصوت هو المقياس الذي يقلل الكتّاب من شأنه أكثر من غيره. نموذج يكتب فقرة رائعة لكنه يفقد طريقة كلام الشخصية عند الفقرة الخامسة أسوأ من نموذج ثابت. اختبر الاستمرارية في الجلسات الطويلة، لا جودة مخرجة واحدة فقط.',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: 'أفضل نماذج Ollama للكتابة الإبداعية',
        content: '**خمسة أوامر `ollama pull` تغطي كل فئات العتاد في هذا الدليل.** بعدها شغّل `ollama list` للتأكد من تثبيت النموذج.',
        items: [
          '**24 جيجابايت، نثر:** `ollama pull gemma4:31b` — ثم `ollama run gemma4:31b`.',
          '**24 جيجابايت، مشاريع طويلة:** `ollama pull qwen3.8:27b` — شغّله بالأمر `ollama run qwen3.8:27b --think=false` لإيقاف thinking في النثر.',
          '**12 جيجابايت:** `ollama pull gemma4:12b`.',
          '**16 جيجابايت:** `ollama pull mistral-small:24b`.',
          '**48 جيجابايت أو أكثر:** `ollama pull llama3.3:70b`.',
          '**نموذج مضبوط بدقة منخفض الرفض:** يسحب الأمر `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF` ملف GGUF لنموذج Hermes 4.3 من Hugging Face؛ اختر تكميم 4 بت على بطاقة 24 جيجابايت.',
          '**وسّع نافذة السياق للمشاهد الطويلة.** سياق Ollama الافتراضي صغير. في جلسة تفاعلية اكتب `/set parameter num_ctx 16384` أو اضبط `num_ctx` في Modelfile. القيم الأكبر تستهلك VRAM أكثر.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'النماذج المحلية مقابل السحابية للكتابة',
        content: '**النماذج السحابية المغلقة تحقق درجات أعلى في اختبارات الإبداع؛ أما النماذج المحلية فتتفوق في الخصوصية والتكلفة والتحكم.** من يبحث عن «أفضل LLM للكتابة» دون كلمة «محلي» تعطيه لوحات الترتيب إجابات تختلف عن هذا الدليل.',
        items: [
          '**النماذج المغلقة تتصدر.** في EQ-Bench Creative Writing v3 كما يعكسه [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) يأتي نموذج Claude Opus 4.7 أولًا بـ 2,206 Elo، متقدمًا على نموذج GPT-5.5 بـ 2,035.',
          '**أفضل الإدخالات مفتوحة الأوزان تحتاج مركز بيانات.** نموذج Kimi K2.6 (‏1,782 Elo) هو أعلى إدخال مفتوح الأوزان في تلك القائمة. وتذكر Featherless أن نموذج GLM-5.3 بحجم 753B ونموذج DeepSeek-V4.1-Flash بحجم 763B معامل، ولا يشغّلهما أي جهاز منزلي.',
          '**ما يعمل على بطاقة واحدة.** حقق نموذج Gemma 4 31B درجة 1407.6 Elo ومعيارًا بقيمة 16.01 في الاختبار نفسه. درجات المتتبعات المختلفة لا تشترك في مقياس واحد؛ قارن داخل قائمة واحدة فقط.',
          '**متى يكون المحلي الخيار الصحيح.** مخطوطات غير منشورة، وأعمال عملاء مشمولة باتفاقية عدم إفشاء، ومحتوى قد يرفضه مزوّد سحابي، والعمل دون اتصال، والمشاريع التي تكون فاتورة API الشهرية قيدها.',
          '**سير عمل هجين.** المسودات والعصف الذهني محليًا؛ ولا تستخدم نموذجًا سحابيًا إلا للصقل النهائي لمحتوى غير حساس إذا أردت جودة إضافية.',
        ],
      },
      sampling: {
        id: 'sampling',
        title: 'درجة الحرارة وtop-p للعمل الإبداعي',
        content: '**الكتابة الإبداعية تحتاج درجات حرارة أخذ عينات أعلى من البرمجة.** القيم الافتراضية في معظم واجهات الدردشة مضبوطة للأسئلة والأجوبة؛ ودرجة حرارة 0.7 تنتج نثرًا باهتًا يمكن التنبؤ به مع الأوامر الإبداعية.',
        items: [
          '**قيم الشركات المصنِّعة حدّ أدنى لا هدف.** تذكر Google لنموذج Gemma 4 درجة حرارة 1.0 وtop-p ‏0.95 وtop-k ‏64؛ وتذكر Alibaba لنموذج Qwen3.8 في وضع thinking القيم 1.0 / 0.95 / top-k ‏20 وفي غير thinking القيم 0.7 / 0.8؛ وتذكر Nous لنموذج Hermes 4.3 القيم 0.6 / 0.95 / top-k ‏20. ابدأ منها ثم اضبط للنثر.',
          '**الأساس للنثر:** درجة حرارة 0.95–1.0، وtop-p ‏0.92–0.95، وعقوبة تكرار 1.05–1.1. عدّل بحسب المهمة انطلاقًا من هنا.',
          '**حوار محكم:** درجة حرارة 0.7–0.85 وtop-p ‏0.9. الدرجات الأقل تحافظ على اتساق أصوات الشخصيات عبر التبادلات.',
          '**النثر الغنائي والشعر:** درجة حرارة 1.0–1.2 وtop-p ‏0.95. الدرجات الأعلى تفتح خيارات كلمات غير متوقعة.',
          '**الخيال السريالي أو الأنواع الأدبية:** درجة حرارة 1.1–1.3 وtop-p ‏0.95–0.98.',
          '**المشاهد المدفوعة بالحبكة (حركة، غموض، مفاجآت):** درجة حرارة 0.85–0.95 وtop-p ‏0.9. تحتاج اتباعًا للتعليمات أكثر من الجِدّة.',
          '**أوقف وضع thinking في الخيال.** رموز الاستدلال تزيد زمن الاستجابة وكثيرًا ما تنتج نثرًا مخططًا ومرتبًا أكثر من اللازم. يقبل نموذج Qwen3.8 القيمة `enable_thinking: false`؛ وفي Ollama استخدم `--think=false`.',
          '**min_p (‏0.05–0.1):** بديل لـ top-p يضبط حد القطع بحسب احتمال الرمز الأعلى. أكثر تسامحًا مع الأوامر الإبداعية دون تشتت top-p المرتفع جدًا. استخدمه حيث تتيح واجهتك الخلفية هذا الإعداد.',
          '**عقوبة التكرار DRY (المضاعف 0.8، والأساس 1.75، والطول المسموح 2):** تلتقط التكرار على مستوى العبارات الذي تفوّته عقوبة التكرار العادية، وهذا يفيد الجلسات الطويلة. متاحة في الواجهات الخلفية المبنية على llama.cpp مثل KoboldCpp؛ تحقق مما إذا كانت واجهتك تتيحها.',
          'لشرح أوفى لسبب أهمية هذه المعاملات وكيف تتفاعل، راجع [التحكم في درجة الحرارة وtop-p](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اختبر أخذ العينات على مشهد قصير واحد لكل نموذج: ثلاث تشغيلات لكل إعداد، ثم اختر درجة الحرارة التي يبدو عندها النموذج أكثر حيوية دون أن يفقد الأمر. لا تنتقل الإعدادات بشكل مثالي بين النماذج.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'نماذج Uncensored: ما هي ومتى تهم',
        content: '**Uncensored لا يعني غير أخلاقي.** يعني أن سلوك الرفض في النموذج خُفِّض بالضبط الدقيق، فيتبع الأمر بدل أن يرفضه. يبقى الكاتب هو المؤلف.',
        items: [
          '**من الناحية التقنية.** نماذج مثل Hermes 4.3 وDolphin 3.0 هي نماذج مضبوطة بدقة تقلل مرحلة ما بعد التدريب فيها الرفض تجاه الأوامر الناضجة أو العنيفة أو المعقدة أخلاقيًا. تصف Nous Research انخفاضًا كبيرًا في الرفض وتذكر أن نموذج Hermes 4.3 أجاب عن 72–75% من أوامر RefusalBench الخاص بها. وتوجد على Ollama أيضًا إصدارات مجتمعية «abliterated» أو «heretic» من نماذج أحدث؛ وجودتها غير مدقَّقة.',
          '**متى تهم في العمل الإبداعي.** الخيال الناضج، وروايات الجريمة ذات العنف الصريح، والرعب، والكتابة الدقيقة تاريخيًا عن الحرب أو الفظائع، والخصوم المعقدون أخلاقيًا الذين لا يجسّدهم نموذج instruct بإقناع.',
          '**أين تقصّر.** تتبع الأمر، بما في ذلك الأمر السيئ الصياغة. نماذج instruct كثيرًا ما تلطّف أمرًا غامضًا إلى شيء قابل للنشر؛ أما منخفضة الرفض فتعطيك بالضبط ما طلبته.',
          '**الحدود الأخلاقية والقانونية.** كون النموذج يكتب شيئًا ليس ترخيصًا لكتابة محتوى يستهدف أشخاصًا حقيقيين، أو يصوّر سيناريوهات دون موافقة تشمل أفرادًا يمكن تحديدهم، أو يكون غير قانوني في بلدك. الاستضافة المحلية لا تغيّر القانون؛ بل تغيّر من يستطيع رؤية المسودة. تختلف القوانين من بلد لآخر، وهذه ليست استشارة قانونية.',
          '**لمعالجة أطول** للأخلاقيات والقانونية وأفضل الممارسات، راجع [نماذج LLM المحلية Uncensored للكتابة الإبداعية: الأخلاقيات والقانونية وأفضل الممارسات](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored خيار في سير العمل وليس هوية. يكتب كثير من الكتّاب المسودات بنموذج instruct ولا ينتقلون إلى نموذج مضبوط بدقة منخفض الرفض إلا لمشاهد بعينها. وتثبيت نموذجين جنبًا إلى جنب هو النمط المعتاد.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: 'واجهات للعمل الإبداعي',
        content: '**واجهة الدردشة التي تكتب فيها لا تقل أهمية عن النموذج.** أربعة خيارات تغطي معظم سير العمل؛ اختر حسب شكل سير عملك.',
        items: [
          '**Open WebUI** — الخيار العام. واجهة شبيهة بـ ChatGPT، وتبديل النموذج بنقرة واحدة، وملاحظات الشخصيات في أمر النظام، ورفع المستندات كسياق. الأنسب للمسودات الغنية بالنثر.',
          '**SillyTavern** — خيار لعب الأدوار والحوار. بطاقات شخصيات، وإدارة الشخصيات الافتراضية، وlorebooks لبناء العوالم، ودردشة جماعية للمشاهد متعددة الشخصيات. الأنسب للعمل القائم على الحوار ومشاريع العوالم طويلة الأمد.',
          '**Agnai وRisuAI** — بدائل أخف لـ SillyTavern، أسهل في أول استخدام وأقل تخصيصًا.',
          '**واجهة Ollama بسطر الأوامر مع محرر نصوص** — الخيار الأدنى. `ollama run gemma4:31b` ثم الصق المشاهد في مسودتك. تفقد سياق الشخصيات الدائم لكنك تكسب التركيز.',
          'للمقارنة المباشرة بين الواجهات الموجَّهة للعب الأدوار، راجع [SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة محلية للعب الأدوار](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'المسودة والتحرير يحتاجان أدوات مختلفة. ولّد في واجهة الدردشة ثم صدّر إلى محرر نصوص بسيط للمراجعة. التحرير داخل نافذة الدردشة يعوّدك على أن تطلب من النموذج إصلاح النثر بدل أن تراجعه بنفسك.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: 'القرار: أي نموذج لعملك',
        content: '**الذاكرة أولًا، ثم المهمة.**',
        columns: [
          'وضعك',
          'الاختيار',
        ],
        rows: [
          {
            'وضعك': 'بطاقة 24 جيجابايت أو ماك 32 جيجابايت، النثر أولًا',
            'الاختيار': 'Gemma 4 31B',
          },
          {
            'وضعك': 'بطاقة 24 جيجابايت، مشروع بحجم رواية',
            'الاختيار': 'Qwen3.8-27B (سياق 256K)',
          },
          {
            'وضعك': 'بطاقة 24 جيجابايت، أريد مخرجات أسرع',
            'الاختيار': 'Gemma 4 26B-A4B',
          },
          {
            'وضعك': 'بطاقة 12 جيجابايت',
            'الاختيار': 'Gemma 4 12B',
          },
          {
            'وضعك': 'بطاقة 16 جيجابايت',
            'الاختيار': 'Mistral Small 3 24B',
          },
          {
            'وضعك': '48 جيجابايت أو أكثر، نموذج واحد لكل شيء',
            'الاختيار': 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            'وضعك': 'نموذج instruct يرفض مشاهد أحتاجها',
            'الاختيار': 'Hermes 4.3 36B (مع إبقاء instruct)',
          },
          {
            'وضعك': 'أريد نموذجًا واحدًا للبدء ثم التعديل',
            'الاختيار': 'Gemma 4 31B أو Qwen3.8-27B، أيهما يتسع',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر نموذج Gemma 4 31B أو Qwen3.8-27B على بطاقة 24 جيجابايت، ونموذج Gemma 4 12B مع 12 جيجابايت، ونموذج Mistral Small 3 24B مع 16 جيجابايت، ونموذج Llama 3.3 70B مع 48 جيجابايت أو أكثر، ونموذج Hermes 4.3 36B للمشاهد التي ترفضها نماذج instruct.',
          },
          {
            type: 'plain-terms',
            text: 'ابدأ بأكبر نموذج يتسع في ذاكرتك مع مساحة للسياق. انتقل إلى نموذج متخصص فقط عندما تصبح مهمة معينة، مثل الاستمرارية الطويلة أو المشاهد الناضجة، هي العائق. تثبيت نموذجين لا يكلّف إلا مساحة قرص.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'يفكر معظم الكتّاب في النموذج أكثر من اللازم وفي الأمر أقل من اللازم. أمر نظام يتضمن ملاحظات الشخصيات وعينات الصوت ووجهة النظر الصريحة يفيد أكثر من تبديل النموذج. راجع [توجيه الأوامر بالشخصية](/ar/prompt-engineering/persona-prompting).',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'أخطاء شائعة عند اختيار النماذج المحلية واستخدامها للكتابة الإبداعية',
        items: [
          '**الخطأ 1: الاختيار حسب الترتيب العام في الاختبارات المعيارية.** ترتبط لوحات البرمجة والاستدلال ارتباطًا ضعيفًا بجودة النثر. انظر إلى لوحات الإبداع مثل EQ-Bench ثم اختبر على مشاهدك.',
          '**الخطأ 2: استخدام أخذ عينات البرمجة.** درجة حرارة 0.2–0.4 تنتج نثرًا باهتًا. العمل الإبداعي يحتاج إلى نحو 0.9–1.1.',
          '**الخطأ 3: ترك وضع thinking مفعّلًا.** نماذج الاستدلال تخطط قبل أن تكتب، فقد يبدو الخيال مركّبًا. أوقف thinking للنثر.',
          '**الخطأ 4: إهمال ذاكرة السياق.** نموذج 31B بحجم 19–20 جيجابايت يترك مساحة ضئيلة على بطاقة 24 جيجابايت عند توسيع نافذة السياق. خصّص 2–6 جيجابايت لذاكرة KV المؤقتة.',
          '**الخطأ 5: أوامر نظام هزيلة.** «أنت مساعد مفيد» أسوأ أمر للعمل الإبداعي. اجمع ملاحظات الشخصيات ووجهة النظر والزمن النحوي مع [التوجيه السلبي](/ar/prompt-engineering/negative-prompting) لاستبعاد العبارات المبتذلة.',
          '**الخطأ 6: التحرير داخل نافذة الدردشة.** ولّد في الدردشة؛ وراجع في محرر. الكتّاب الذين يتركون النموذج يراجع يفقدون صوتهم بسرعة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'أكبر خطر على مهاراتك مع الذكاء الاصطناعي للكتابة الإبداعية هو إسناد المراجعة إليه. التوليد عمل آلي يستفيد من النموذج؛ أما المراجعة فهي ما يجعل النثر نثرك.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مكتبة Ollama: Gemma 4](https://ollama.com/library/gemma4) — الوسوم وأحجام التنزيل ونوافذ السياق.',
          '[مكتبة Ollama: Qwen3.8](https://ollama.com/library/qwen3.8) — الوسم والحجم والقدرات.',
          '[Hugging Face: بطاقة نموذج Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — الرخصة وطول السياق وأخذ العينات الموصى به.',
          '[Hugging Face: بطاقة نموذج Gemma 4 31B](https://huggingface.co/google/gemma-4-31B-it) — الرخصة وطول السياق وقيم أخذ العينات الافتراضية.',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — النموذج الأساسي والرخصة واختبار الرفض وتكميمات GGUF.',
          '[مكتبة Ollama: Mistral Small](https://ollama.com/library/mistral-small) — حجم نموذج Mistral Small 3 24B وسياقه ورخصته.',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html) و[درجات EQ-Bench في evals.report](https://evals.report/benchmarks/eq-bench?tab=scores) — أرقام لوحات الترتيب المذكورة أعلاه.',
          '[Featherless: أفضل النماذج المفتوحة للكتابة الإبداعية](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — أحجام النماذج مفتوحة الأوزان وأرقام EQ-Bench لنموذج Gemma 4 31B.',
          '[توثيق SillyTavern](https://docs.sillytavern.app/) — بطاقات الشخصيات والشخصيات الافتراضية والدردشة الجماعية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما أفضل LLM محلي للكتابة الإبداعية؟',
            a: 'نموذج Gemma 4 31B ونموذج Qwen3.8-27B هما أفضل نقطتي انطلاق محليتين في 2026، وكلاهما يناسب بطاقة 24 جيجابايت (نحو 18–20 جيجابايت أوزان). نموذج Gemma 4 31B خيار النثر وله درجة EQ-Bench منشورة خاصة به؛ ونموذج Qwen3.8-27B خيار السياق الطويل. على البطاقات الأصغر استخدم نموذج Gemma 4 12B (12 جيجابايت) أو نموذج Mistral Small 3 24B (16 جيجابايت).',
          },
          {
            q: 'ما أفضل نموذج Ollama للكتابة الإبداعية؟',
            a: 'على بطاقة 24 جيجابايت: `ollama pull gemma4:31b` للنثر أو `ollama pull qwen3.8:27b` للمشاريع الطويلة. مع 12 جيجابايت `gemma4:12b`، ومع 16 جيجابايت `mistral-small:24b`، ومع 48 جيجابايت أو أكثر `llama3.3:70b`. ارفع `num_ctx` للمشاهد الطويلة وأوقف thinking في الخيال.',
          },
          {
            q: 'ما أفضل LLM محلي لكتابة الخيال والقصص؟',
            a: 'اختر أكبر نموذج يتسع في ذاكرتك مع مساحة للسياق. نموذج Gemma 4 31B هو خيار النثر على 24 جيجابايت، ونموذج Qwen3.8-27B يناسب المشاريع بحجم رواية بسياقه البالغ 256K، ونموذج Llama 3.3 70B هو المرجع مع 48 جيجابايت أو أكثر. استخدم درجة حرارة 0.9–1.1 وأمر نظام يتضمن وجهة النظر والزمن النحوي وعينات الصوت.',
          },
          {
            q: 'أي نموذج محلي أفضل لبناء العوالم؟',
            a: 'الأهم هو السياق الطويل: يوفر نموذجا Qwen3.8-27B وGemma 4 كلاهما 256K رمز، وهذا يكفي لإبقاء مرجع الخلفية وملخصات الفصول في الأمر. اجمع أيًّا منهما مع lorebooks في SillyTavern أو مستند عالم مثبّت، واجمع الفصائل والقواعد والأسماء في كتلة مرجعية واحدة.',
          },
          {
            q: 'أي LLM أفضل لكتابة رواية؟',
            a: 'محليًا: نموذج Qwen3.8-27B (سياق 256K) أو نموذج Gemma 4 31B (سياق 256K) على بطاقة 24 جيجابايت. العائق هو البنية لا حجم النموذج: مخطط وكتاب شخصيات وملخصات فصول تحفظ الاستمرارية. تحقق النماذج السحابية المغلقة درجات أعلى في اختبارات الإبداع، لكنها ترسل مخطوطتك إلى طرف ثالث.',
          },
          {
            q: 'ما أفضل نموذج محلي مع 32 جيجابايت من VRAM أو الذاكرة الموحّدة؟',
            a: 'نموذج Gemma 4 31B (‏19–20 جيجابايت) أو نموذج Qwen3.8-27B (‏18 جيجابايت) مع نافذة سياق أكبر؛ فالذاكرة الإضافية فوق 24 جيجابايت تدفع كلفة ذاكرة KV المؤقتة. ونموذج Gemma 4 26B-A4B بديل أسرع. نموذج 70B لا يتسع براحة دون 48 جيجابايت.',
          },
          {
            q: 'ما هو LLM المحلي uncensored ومتى أستخدمه؟',
            a: 'هو نموذج مضبوط بدقة تقلل مرحلة ما بعد التدريب فيه الرفض تجاه الأوامر الناضجة أو المعقدة أخلاقيًا، فيتبع النموذج الأمر بدل أن يرفضه. نموذج Hermes 4.3 36B هو أحدث خيار استطعنا تأكيده؛ ونموذج Dolphin 3.0 أقدم. استخدم واحدًا منها للخيال الناضج أو الكتابة الدقيقة تاريخيًا، وأبقِ نموذج instruct لكل شيء آخر.',
          },
          {
            q: 'ما درجة الحرارة التي أستخدمها للكتابة الإبداعية؟',
            a: 'درجة حرارة 0.9–1.1 مع top-p ‏0.92–0.95 للنثر. الحوار المحكم يحتاج 0.7–0.85، والشعر 1.0–1.2، والأعمال السريالية أو النوعية 1.1–1.3. قيم الشركات مثل 1.0 / 0.95 / top-k ‏64 لنموذج Gemma 4 نقطة بداية جيدة. أوقف وضع thinking في الخيال.',
          },
          {
            q: 'هل نماذج الكتابة الإبداعية المحلية بجودة ChatGPT أو Claude؟',
            a: 'ليس في الاختبارات المعيارية. في EQ-Bench Creative Writing v3 تتصدر نماذج مغلقة مثل Claude Opus 4.7 (‏2,206 Elo)، وأفضل الإدخالات مفتوحة الأوزان تحتاج عتاد مراكز بيانات. ومع ذلك قد يكون نموذج محلي بسعة 24 جيجابايت كافيًا للمسودات، ويُبقي المخطوطات خاصة. أخذ العينات المضبوط وأمر النظام القوي يسدّان جزءًا كبيرًا من الفجوة العملية.',
          },
          {
            q: 'هل يستطيع نموذج محلي كتابة رواية كاملة؟',
            a: 'يمكنه المساعدة في صياغة مسودتها. نموذج بسياق 256K مثل Qwen3.8-27B أو Gemma 4 يستطيع الاحتفاظ بمخطط طويل وعدة فصول في الذاكرة، لكن ذاكرة KV المؤقتة تنمو مع السياق، فراجع VRAM. اكتب المسودة قسمًا قسمًا مع كتاب شخصيات وlorebook؛ فبدونهما ينحرف أي نموذج.',
          },
          {
            q: 'هل تنتج نماذج uncensored محتوى غير قانوني؟',
            a: 'تنتج النص الذي يطلبه الأمر؛ والمسؤولية القانونية تقع على الكاتب والنشر لا على النموذج. تنطبق أطر مثل قانون الذكاء الاصطناعي الأوروبي والمادتين 184 و184c من القانون الجنائي الألماني وقوانين الفحش الوطنية بصرف النظر عن طريقة توليد النص. الاستضافة المحلية تغيّر من يرى المسودة لا ما هو قانوني. وهذه ليست استشارة قانونية.',
          },
          {
            q: 'كيف أتجنب عبارة «shiver down their spine» المبتذلة؟',
            a: 'اذكر 8–12 عبارة محظورة في أمر النظام («do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'»). أبقِ درجة الحرارة عند 0.85–1.0 بدل 1.2 فأكثر، وأضف عقوبة DRY حيث تدعمها واجهتك الخلفية؛ فعقوبة التكرار البسيطة لا تلتقط الابتذال على مستوى العبارات. والمراجعة اليدوية هي المرشّح الأخير. راجع [التوجيه السلبي](/ar/prompt-engineering/negative-prompting).',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل نماذج LLM المحلية 2026](/ar/local-llms/best-local-llms-2026) — الدليل المرجعي لمشهد النماذج للبرمجة والاستدلال والاستخدام العام.',
          '[أفضل نماذج LLM المحلية للكتابة الإبداعية في 2026](/ar/local-llms/best-local-llms-for-creative-writing) — حصر أوسع للنماذج للخيال والشعر والكتابة الطويلة.',
          '[مراجعة Backyard AI: دردشة الشخصيات ولعب الأدوار بالذكاء الاصطناعي المحلي](/ar/power-local-llm/backyard-ai-review-local-roleplay) — تطبيق سطح مكتب مجاني مع Character Hub مدمج؛ البديل السهل للواجهات أعلاه.',
          '[SillyTavern مقابل Agnai مقابل RisuAI: أفضل واجهة محلية للعب الأدوار](/ar/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — مقارنة مباشرة بين الواجهات الموجَّهة للعب الأدوار.',
          '[أوامر LLM المحلي لكتّاب الخيال: قوالب وتقنيات](/ar/power-local-llm/local-llm-prompts-for-fiction-writers) — قوالب أوامر جاهزة للنسخ لتطوير الشخصيات والحوار والمراجعة.',
          '[نماذج LLM المحلية Uncensored للكتابة الإبداعية: الأخلاقيات والقانونية وأفضل الممارسات](/ar/power-local-llm/uncensored-local-llm-creative-writing-ethics) — أين تقع الحدود القانونية والأخلاقية.',
          '[درجة الحرارة وTop-P: التحكم في إبداع الذكاء الاصطناعي](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity) — جانب هندسة الأوامر في معاملات أخذ العينات.',
          '[التوجيه السلبي](/ar/prompt-engineering/negative-prompting) — تحديد ما لا يجب فعله؛ مضاعِف قوة لأوامر النظام في العمل الإبداعي.',
          '[مراجعة Locally Uncensored: محادثة وصور وفيديو محلية في تطبيق واحد](/ar/power-local-llm/locally-uncensored-review) — تطبيق سطح مكتب متكامل مبني حول نماذج محلية غير مقيّدة، إن كنت تفضّل تطبيقاً على قائمة نماذج.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-10-27',
    next_refresh_due: '2027-04-17',
    theme: 'Creative & Roleplay',
    title: '2026년 창작 글쓰기를 위한 최고의 로컬 LLM: 소설, 대화, 세계관 구축',
    seoTitle: '2026년 창작 글쓰기 최고의 로컬 LLM: 6가지 추천',
    intro: '창작 글쓰기는 로컬 LLM이 프라이버시와 비용 이상의 강점을 보이는 작업입니다. 설정할 수 없는 거부가 없고, 토큰당 요금도 없으며, 초안이 내 컴퓨터를 벗어나지 않습니다. 이 가이드는 2026년에 실행해 볼 만한 오픈 웨이트 모델(Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, 그리고 거부가 적은 파인튜닝 모델 Hermes 4.3과 Dolphin 3.0)을 하드웨어 구간별로 정리하고, Ollama 명령과 산문용 샘플링 설정을 함께 제공합니다.',
    metaDescription: 'Gemma 4 31B와 Qwen3.8-27B는 24GB GPU 한 장에서 실행됩니다. 소설, 대화, 세계관 구축에 맞는 최고의 로컬 LLM을 VRAM 구간별로 Ollama 명령과 함께 소개합니다.',
    heroImage: '/images/best-local-llm-creative-writing-hero-ko.webp',
    twitterDescription: '2026년 창작 글쓰기 최고의 로컬 LLM을 VRAM 구간별로: Gemma 4, Qwen3.8-27B, Mistral Small 3, Llama 3.3 70B, Hermes 4.3. Ollama 명령과 샘플링 설정 포함.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'Qwen3.8-27B',
      'Gemma 4 26B-A4B',
      'Gemma 4 12B',
      'Mistral Small 3 24B',
      'Llama 3.3 70B',
      'Hermes 4.3 36B',
      'Dolphin 3.0',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4090 24 GB',
      '32 GB Apple Silicon Mac',
      '48 GB unified memory Mac',
    ],
    audience: '프라이버시, 목소리의 일관성, 성숙한 주제를 다루는 능력이 벤치마크 점수보다 중요한 창작 작업에 로컬 LLM을 사용하는 소설가, 시나리오 작가, 게임 디자이너, 세계관 설계자, 롤플레이 애호가.',
    readTime: '읽는 데 12분',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 LLM 창작 글쓰기',
    targetKeywords: [
      '창작 글쓰기 최고의 로컬 llm',
      '소설 쓰기 로컬 llm',
      '창작 글쓰기 ollama 추천 모델',
      '이야기 쓰기 로컬 llm',
      '세계관 구축 로컬 llm',
      'uncensored 로컬 llm',
    ],
    leadAnswerBlock: '**Gemma 4 31B와 Qwen3.8-27B는 2026년 창작 글쓰기를 위한 최고의 로컬 출발점이며, 둘 다 24GB GPU 한 장에서 실행됩니다(가중치 각각 약 18–20GB).** Gemma 4 31B는 산문용 선택입니다. 이 목록에서 유일하게 자체 EQ-Bench Creative Writing v3 점수가 공개되어 있습니다. Qwen3.8-27B는 긴 컨텍스트와 지시 따르기용 선택입니다(256K 토큰). 12GB에서는 Gemma 4 12B, 16GB에서는 Mistral Small 3 24B, 48GB 이상에서는 Llama 3.3 70B를 쓰세요. 인스트럭트 모델이 허구로 설정한 장면을 거부하면 거부가 적은 선택으로 Hermes 4.3 36B가 있습니다. 온도는 코딩용 0.2–0.4가 아니라 0.9–1.1을 쓰세요. 클로즈드 클라우드 모델은 창작 벤치마크에서 여전히 점수가 더 높고, 로컬 모델은 프라이버시, 비용, 제어에서 앞섭니다.**',
    quickAnswerTop: {
      ko: {
        question: '창작 글쓰기에 가장 좋은 로컬 LLM은 무엇입니까?',
        answer: '2026년 창작 글쓰기에 가장 좋은 로컬 모델은 Gemma 4 31B와 Qwen3.8-27B입니다. 둘 다 24GB GPU에 들어갑니다(가중치 약 18–20GB). 산문에는 Gemma 4 31B, 긴 컨텍스트에는 Qwen3.8-27B입니다. 12GB는 Gemma 4 12B, 16GB는 Mistral Small 3 24B, 48GB 이상은 Llama 3.3 70B를 쓰세요. 거부를 줄이려면 Hermes 4.3 36B입니다.',
        bullets: [
          '24GB GPU: Gemma 4 31B(~19–20GB) 또는 Qwen3.8-27B(~18GB).',
          '12GB GPU: Gemma 4 12B(~8GB), 긴 컨텍스트 여유 있음.',
          '16GB GPU: Mistral Small 3 24B(~14GB), 32K 컨텍스트.',
          '48GB 이상: Llama 3.3 70B(Q4_K_M 기준 ~43GB).',
          '산문 샘플링: 온도 0.9–1.1, top-p 0.92–0.95, thinking 모드 끄기.',
        ],
        updatedDate: '2026-10-17',
      },
    },
    toc: [
      {
        label: '핵심 요약',
        anchor: '#key-takeaways',
      },
      {
        label: '빠른 사실',
        anchor: '#quick-facts',
      },
      {
        label: '이 추천은 어떻게 만들어졌나',
        anchor: '#how-we-tested',
      },
      {
        label: 'VRAM 구간별 최고의 모델',
        anchor: '#hardware',
      },
      {
        label: '직접 비교',
        anchor: '#comparison',
      },
      {
        label: '모델별 평가',
        anchor: '#verdicts',
      },
      {
        label: '창작 글쓰기를 위한 최고의 Ollama 모델',
        anchor: '#ollama',
      },
      {
        label: '글쓰기용 로컬 모델과 클라우드 모델',
        anchor: '#cloud-vs-local',
      },
      {
        label: '창작 작업을 위한 온도와 top-p',
        anchor: '#sampling',
      },
      {
        label: 'Uncensored 모델: 무엇인가',
        anchor: '#uncensored',
      },
      {
        label: '창작 작업용 프런트엔드',
        anchor: '#frontends',
      },
      {
        label: '결정: 내 모델 고르기',
        anchor: '#decision',
      },
      {
        label: '흔한 실수',
        anchor: '#common-mistakes',
      },
      {
        label: '출처',
        anchor: '#sources',
      },
      {
        label: 'FAQ',
        anchor: '#faq',
      },
      {
        label: '관련 읽을거리',
        anchor: '#related-reading',
      },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 31B는 24GB GPU용 산문 선택입니다.** 가중치 약 19–20GB, 256K 컨텍스트, Apache 2.0이며, 이 목록에서 유일하게 자체 EQ-Bench Creative Writing v3 점수(루브릭 16.01, Elo 1407.6)가 공개되어 있습니다.',
          '**Qwen3.8-27B는 긴 컨텍스트와 지시 따르기용 선택입니다.** Ollama에서 약 18GB, 256K 컨텍스트, Apache 2.0입니다. 아직 창작 점수가 공개되지 않아 산문 품질은 검증되지 않았으므로 직접 쓰는 장면으로 테스트하세요.',
          '**순위표가 아니라 VRAM으로 고르세요.** 12GB: Gemma 4 12B. 16GB: Mistral Small 3 24B. 24GB: Gemma 4 31B 또는 Qwen3.8-27B. 48GB 이상: Llama 3.3 70B.',
          '**Hermes 4.3 36B는 거부가 적은 선택입니다.** Apache 2.0이며 ByteDance Seed-OSS-36B를 기반으로 합니다. Nous Research는 거부가 크게 줄었다고 설명합니다. Dolphin 3.0은 더 오래된 대안입니다.',
          '**모델을 바꾸는 것보다 샘플링이 더 중요합니다.** 산문에는 온도 0.9–1.1과 top-p 0.92–0.95를 쓰고, 소설에서는 thinking 모드를 끄세요. 코딩용 설정(0.2–0.4)은 밋밋한 문장을 만듭니다.',
          '**클로즈드 클라우드 모델이 창작 벤치마크에서 여전히 앞섭니다.** EQ-Bench Creative Writing v3 1위는 Claude Opus 4.7(2,206 Elo)이고, 목록의 최고 오픈 웨이트는 Kimi K2.6(1,782)으로 일반 소비자 하드웨어로는 실행할 수 없습니다. 로컬은 프라이버시, 비용, 제어에서 앞섭니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**24GB GPU 또는 32GB Mac:** Gemma 4 31B(`gemma4:31b`, 19–20GB) 또는 Qwen3.8-27B(`qwen3.8:27b`, 18GB). 둘 다 Apache 2.0, 256K 컨텍스트.',
          '**12GB GPU:** Gemma 4 12B(`gemma4:12b`, 7.7–8.0GB), 256K 컨텍스트.',
          '**16GB GPU:** Mistral Small 3 24B(`mistral-small:24b`, 14GB), 32K 컨텍스트, Apache 2.0. 2025년 출시.',
          '**48GB 이상:** Llama 3.3 70B(`llama3.3:70b`, Q4_K_M 기준 약 43GB). 2024년 12월 출시, Meta 커뮤니티 라이선스.',
          '**거부가 적은 파인튜닝:** Hermes 4.3 36B(Apache 2.0)와 Dolphin 3.0(Mistral 24B 변형, 2025년 2월).',
          '**산문 샘플링 기준:** 온도 1.0, top-p 0.95, min-p 0.05. 장면이 반복되면 반복 페널티나 DRY를 추가하세요.',
          '**메모리 규칙:** Ollama 크기는 가중치만입니다. 긴 장면을 위해 컨텍스트 창을 늘리면 KV 캐시로 2–6GB가 더 필요합니다.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '이 추천은 어떻게 만들어졌나',
        content: '**이 순위는 공개된 자료를 편집 차원에서 종합한 것이며, PromptQuorum의 새로운 테스트가 아닙니다.** 공식 모델 카드, Ollama 라이브러리(크기, 컨텍스트, 태그), 공개 창작 글쓰기 리더보드를 비교한 뒤 각 모델을 하드웨어 구간에 대응시켰습니다.',
        items: [
          '**크기와 컨텍스트:** [Gemma 4](https://ollama.com/library/gemma4), [Qwen3.8](https://ollama.com/library/qwen3.8), [Mistral Small](https://ollama.com/library/mistral-small)의 Ollama 페이지와 Hugging Face 모델 카드에서 확인했습니다. 가중치만이며 컨텍스트 메모리는 별도입니다.',
          '**창작 점수:** EQ-Bench Creative Writing v3와 Open Writing Leaderboard를 제3자 트래커가 반영한 값입니다. Gemma 4 31B는 자체 점수가 있고 Qwen3.8-27B는 아직 없습니다. 점수가 형제 모델의 것일 때는 그렇게 밝힙니다.',
          '**출시 시기:** Qwen3.8-27B(2026년 8월), Gemma 4(2026년 7월), Mistral Small 3(2025년), Llama 3.3 70B(2024년 12월), Hermes 4.3 36B(2025년 12월), Dolphin 3.0(2025년 2월).',
          '**하지 않은 일:** 이 모델들로 새로 채점하는 프롬프트 세트를 돌리지 않았습니다. 아래 모델별 평가는 인용한 출처와 모델 카드를 따르며, "가장 적합한 용도"는 측정 결과가 아니라 추천입니다.',
          '어떤 모델에서든 창작 출력을 개선하는 프롬프트 기법은 [온도와 top-p 제어](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity)와 [페르소나 프롬프팅](/ko/prompt-engineering/persona-prompting)을 참고하세요.',
        ],
        callouts: [
          {
            type: 'note',
            text: '창작 글쓰기 벤치마크는 주관적이며 리더보드끼리도 결과가 엇갈립니다. 여기의 모든 추천을 출발 가설로 다루세요. 같은 세 장면을 후보 두 개에 돌려 보고 목소리가 더 마음에 드는 쪽을 남기세요.',
          },
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'VRAM 구간별 최고의 모델',
        content: '**먼저 메모리로 고르세요. 모델이 들어가야 하고 컨텍스트를 위한 여유도 남아야 합니다.** 크기는 기본 4비트 양자화 기준의 Ollama 다운로드 크기이며, 긴 장면에는 KV 캐시로 2–6GB를 더하세요.',
        columns: [
          '내 메모리',
          '모델',
          '가중치',
          '컨텍스트',
        ],
        rows: [
          {
            '내 메모리': '8GB GPU',
            '모델': 'Qwen3.5 9B(`qwen3.5:9b`)',
            '가중치': '6.6–7.6GB',
            '컨텍스트': '256K',
          },
          {
            '내 메모리': '12GB GPU',
            '모델': 'Gemma 4 12B(`gemma4:12b`)',
            '가중치': '7.7–8.0GB',
            '컨텍스트': '256K',
          },
          {
            '내 메모리': '16GB GPU',
            '모델': 'Mistral Small 3 24B(`mistral-small:24b`)',
            '가중치': '14GB',
            '컨텍스트': '32K',
          },
          {
            '내 메모리': '24GB GPU / 32GB Mac',
            '모델': 'Gemma 4 31B(`gemma4:31b`)',
            '가중치': '19–20GB',
            '컨텍스트': '256K',
          },
          {
            '내 메모리': '24GB GPU / 32GB Mac',
            '모델': 'Qwen3.8-27B(`qwen3.8:27b`)',
            '가중치': '18GB',
            '컨텍스트': '256K',
          },
          {
            '내 메모리': '24GB GPU, 더 빠른 출력',
            '모델': 'Gemma 4 26B-A4B(`gemma4:26b`)',
            '가중치': '16–19GB',
            '컨텍스트': '256K',
          },
          {
            '내 메모리': '48GB 이상',
            '모델': 'Llama 3.3 70B(`llama3.3:70b`)',
            '가중치': '~43GB',
            '컨텍스트': '128K',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '32GB Mac에서는 통합 메모리를 macOS와 공유합니다. 모델과 컨텍스트에 쓸 수 있는 양을 약 24GB로 잡으면 Gemma 4 31B와 Qwen3.8-27B가 여유 있게 돌아갑니다.',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '직접 비교: 창작 글쓰기용 로컬 모델',
        content: '**모든 작업에서 이기는 모델은 없습니다. 하드웨어 구간과 작업에서 핵심이 되는 요소로 고르세요.** 표에는 이 가이드의 모델을 크기, 가중치, 출시 시기와 함께 정리했습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24GB GPU에서는 Gemma 4 31B와 Qwen3.8-27B가 창작 글쓰기용 최고의 로컬 선택이고, Gemma 4 12B, Mistral Small 3 24B, Llama 3.3 70B가 각각 12GB, 16GB, 48GB 구간을 맡으며, Hermes 4.3 36B는 거부가 적은 선택입니다.',
          },
          {
            type: 'plain-terms',
            text: '컨텍스트 여유를 남기고 메모리에 들어가는 가장 큰 모델을 고르세요. 24GB 카드에서는 산문에 Gemma 4 31B, 장기 프로젝트에 Qwen3.8-27B입니다. 인스트럭트 모델이 꼭 써야 할 장면을 거부할 때만 거부가 적은 파인튜닝을 추가하세요.',
          },
        ],
        columns: [
          '모델',
          '크기',
          '가중치(Ollama)',
          '출시',
          '가장 적합한 용도',
        ],
        rows: [
          {
            '모델': 'Gemma 4 31B',
            '크기': '31B 덴스',
            '가중치(Ollama)': '19–20GB',
            '출시': '2026년 7월',
            '가장 적합한 용도': '24GB 산문, 자체 EQ-Bench 점수',
          },
          {
            '모델': 'Qwen3.8-27B',
            '크기': '27B 덴스',
            '가중치(Ollama)': '18GB',
            '출시': '2026년 8월',
            '가장 적합한 용도': '장기 프로젝트, 지시 따르기',
          },
          {
            '모델': 'Gemma 4 26B-A4B',
            '크기': '26B MoE, 활성 4B',
            '가중치(Ollama)': '16–19GB',
            '출시': '2026년 7월',
            '가장 적합한 용도': '24GB에서 더 빠른 생성',
          },
          {
            '모델': 'Gemma 4 12B',
            '크기': '12B',
            '가중치(Ollama)': '7.7–8.0GB',
            '출시': '2026년 7월',
            '가장 적합한 용도': '12GB GPU, 긴 컨텍스트',
          },
          {
            '모델': 'Mistral Small 3 24B',
            '크기': '24B 덴스',
            '가중치(Ollama)': '14GB',
            '출시': '2025년',
            '가장 적합한 용도': '16GB GPU, 오래됐지만 검증됨',
          },
          {
            '모델': 'Llama 3.3 70B',
            '크기': '70B 덴스',
            '가중치(Ollama)': '~43GB',
            '출시': '2024년 12월',
            '가장 적합한 용도': '48GB 이상, 오래된 기준',
          },
          {
            '모델': 'Hermes 4.3 36B',
            '크기': '36B 덴스',
            '가중치(Ollama)': '~21–23GB(추정)',
            '출시': '2025년 12월',
            '가장 적합한 용도': '거부가 적음, Apache 2.0',
          },
          {
            '모델': 'Dolphin 3.0',
            '크기': '24B(Mistral 변형)',
            '가중치(Ollama)': '~14GB',
            '출시': '2025년 2월',
            '가장 적합한 용도': '오래된 저거부 선택',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '두 모델 구성이 흔합니다. 평소에는 인스트럭트 모델을 쓰고, 그 모델이 거부하는 장면에는 Hermes 4.3 36B를 씁니다. 둘 다 `ollama list`에 함께 둘 수 있습니다.',
          },
        ],
      },
      verdicts: {
        id: 'verdicts',
        title: '모델별 평가',
        items: [
          '**Gemma 4 31B** — 24GB용 산문 선택. 이 목록에서 유일하게 자체 EQ-Bench Creative Writing v3 결과(루브릭 16.01, Elo 1407.6, 제3자 트래커 기준)가 있습니다. 256K 컨텍스트, Apache 2.0. Google은 기본값으로 온도 1.0, top-p 0.95, top-k 64를 제시합니다.',
          '**Qwen3.8-27B** — 장기 프로젝트용 선택. 기본 262,144 토큰 컨텍스트(YaRN으로 1M까지 확장 가능), Apache 2.0, Ollama에서 약 18GB. Alibaba는 코딩, 에이전트, 리서치용으로 소개하며, 모델 카드에는 창작 글쓰기 언급이 없고 창작 점수도 공개되지 않았으므로 직접 쓰는 장면에서 목소리를 확인하세요. thinking 모드는 기본으로 켜져 있으므로 산문에서는 끄세요.',
          '**Gemma 4 26B-A4B와 12B** — 같은 계열, 다른 절충. 26B 혼합 전문가 모델은 토큰당 약 4B 매개변수를 활성화하므로 비슷한 메모리에서 31B보다 빠르게 생성합니다. 12B는 12GB 카드에 들어가며 256K 컨텍스트를 제공합니다.',
          '**Mistral Small 3 24B** — 16GB 선택지. Apache 2.0, 약 14GB, 32K 컨텍스트. 2025년 모델이며 Llama를 제외하면 여기서 가장 오래된 추천입니다. 16GB에 들어가는 더 새로운 모델이 드물어 목록에 남겼습니다. 후속 모델인 Mistral Small 4(2026년 3월, Apache 2.0)는 활성 매개변수 약 6B의 119B 혼합 전문가 모델로 16GB를 훨씬 넘습니다.',
          '**Llama 3.3 70B** — 48GB 기준. 2024년 12월 모델이며 Meta 커뮤니티 라이선스입니다. 48GB 이상 기기에서는 여전히 강력하고 폭넓게 지원되는 선택이지만, 그 아래에서는 실용적이지 않습니다.',
          '**Hermes 4.3 36B** — 거부가 적은 선택. ByteDance Seed-OSS-36B를 기반으로 Apache 2.0이며, Hugging Face에 GGUF 양자화가 있습니다. Nous Research는 거부가 크게 줄었다고 설명하며, 자체 RefusalBench에서 Hermes 4.3이 프롬프트의 72–75%에 응답했다고 밝힙니다. 카드는 온도 0.6, top-p 0.95, top-k 20을 제안하므로 산문에서는 온도를 높이세요.',
          '**Dolphin 3.0** — 오래된 저거부 선택. 확인할 수 있었던 최신 Dolphin 세대는 Dolphin 3.0(2025년 2월, Mistral 24B 변형 포함)입니다. Mistral 계열의 무검열 모델을 원할 때 쓰세요. 더 최근 선택은 Hermes 4.3입니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '목소리의 일관성은 작가들이 가장 과소평가하는 지표입니다. 한 문단은 훌륭하지만 다섯 번째 문단에서 인물의 말투를 잃는 모델은 꾸준한 모델보다 못합니다. 한 번의 출력 품질이 아니라 긴 세션에서의 연속성을 테스트하세요.',
          },
        ],
      },
      ollama: {
        id: 'ollama',
        title: '창작 글쓰기를 위한 최고의 Ollama 모델',
        content: '**`ollama pull` 명령 다섯 개로 이 가이드의 모든 하드웨어 구간을 다룰 수 있습니다.** 이후 `ollama list`로 모델이 설치되었는지 확인하세요.',
        items: [
          '**24GB, 산문:** `ollama pull gemma4:31b` — 이후 `ollama run gemma4:31b`.',
          '**24GB, 장기 프로젝트:** `ollama pull qwen3.8:27b` — 산문에서 thinking을 끄려면 `ollama run qwen3.8:27b --think=false`로 실행하세요.',
          '**12GB:** `ollama pull gemma4:12b`.',
          '**16GB:** `ollama pull mistral-small:24b`.',
          '**48GB 이상:** `ollama pull llama3.3:70b`.',
          '**거부가 적은 파인튜닝:** `ollama run hf.co/NousResearch/Hermes-4.3-36B-GGUF`는 Hugging Face에서 Hermes 4.3 GGUF를 가져옵니다. 24GB 카드에서는 4비트 양자화를 고르세요.',
          '**긴 장면에는 컨텍스트 창을 늘리세요.** Ollama의 기본 컨텍스트는 작습니다. 대화형 세션에서 `/set parameter num_ctx 16384`를 입력하거나 Modelfile에 `num_ctx`를 설정하세요. 값이 클수록 VRAM을 더 씁니다.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: '글쓰기용 로컬 모델과 클라우드 모델',
        content: '**클로즈드 클라우드 모델은 창작 벤치마크에서 점수가 더 높고, 로컬 모델은 프라이버시, 비용, 제어에서 앞섭니다.** "로컬" 없이 "글쓰기에 가장 좋은 LLM"을 검색하는 사람에게는 리더보드가 이 가이드와 다른 답을 줍니다.',
        items: [
          '**클로즈드 모델이 앞섭니다.** [evals.report](https://evals.report/benchmarks/eq-bench?tab=scores)가 반영한 EQ-Bench Creative Writing v3에서 Claude Opus 4.7이 2,206 Elo로 1위이고, GPT-5.5가 2,035로 뒤따릅니다.',
          '**최고의 오픈 웨이트 항목은 데이터센터가 필요합니다.** Kimi K2.6(1,782 Elo)은 그 목록에서 가장 높은 오픈 웨이트 항목입니다. Featherless는 GLM-5.3을 753B, DeepSeek-V4.1-Flash를 763B 매개변수로 제시하며, 어떤 소비자 기기에서도 실행할 수 없습니다.',
          '**GPU 한 장에서 실행되는 모델.** Gemma 4 31B는 같은 벤치마크에서 1407.6 Elo와 루브릭 16.01을 기록했습니다. 서로 다른 트래커의 점수는 척도가 같지 않으므로 하나의 목록 안에서만 비교하세요.',
          '**로컬이 맞는 경우.** 미발표 원고, NDA가 걸린 고객 작업, 클라우드 업체가 거부할 내용, 오프라인 작업, 월 API 요금이 제약인 프로젝트.',
          '**하이브리드 작업 방식.** 초안과 브레인스토밍은 로컬에서 하고, 추가 품질이 필요하면 민감하지 않은 최종 다듬기에만 클라우드 모델을 쓰세요.',
        ],
      },
      sampling: {
        id: 'sampling',
        title: '창작 작업을 위한 온도와 top-p',
        content: '**창작 글쓰기는 코딩보다 높은 샘플링 온도가 필요합니다.** 대부분의 채팅 UI 기본값은 질의응답에 맞춰져 있어, 창작 프롬프트에 온도 0.7을 쓰면 밋밋하고 예측 가능한 문장이 나옵니다.',
        items: [
          '**제조사 값은 하한선이지 목표가 아닙니다.** Google은 Gemma 4에 온도 1.0, top-p 0.95, top-k 64를, Alibaba는 Qwen3.8의 thinking 모드에 1.0 / 0.95 / top-k 20을, 비thinking 모드에 0.7 / 0.8을, Nous는 Hermes 4.3에 0.6 / 0.95 / top-k 20을 제시합니다. 여기서 시작해 산문에 맞게 조정하세요.',
          '**산문 기준:** 온도 0.95–1.0, top-p 0.92–0.95, 반복 페널티 1.05–1.1. 여기서 작업별로 조정하세요.',
          '**긴장감 있는 대화:** 온도 0.7–0.85, top-p 0.9. 낮은 온도는 주고받는 대화 내내 인물의 목소리를 일관되게 유지합니다.',
          '**서정적 산문과 시:** 온도 1.0–1.2, top-p 0.95. 높은 온도는 예상 밖의 단어 선택을 이끌어 냅니다.',
          '**초현실 또는 장르 소설:** 온도 1.1–1.3, top-p 0.95–0.98.',
          '**플롯 중심 장면(액션, 미스터리, 반전):** 온도 0.85–0.95, top-p 0.9. 참신함보다 지시 따르기가 필요합니다.',
          '**소설에서는 thinking 모드를 끄세요.** 추론 토큰은 지연을 늘리고 계획된 듯 정돈된 문장을 만들기 쉽습니다. Qwen3.8은 `enable_thinking: false`를 받으며, Ollama에서는 `--think=false`를 씁니다.',
          '**min_p(0.05–0.1):** 최상위 토큰의 확률에 맞춰 컷오프를 조정하는 top-p의 대안입니다. 매우 높은 top-p의 비일관성 없이 창작 프롬프트에서 더 관대합니다. 백엔드가 설정을 제공하는 곳에서 쓰세요.',
          '**DRY 반복 페널티(multiplier 0.8, base 1.75, allowed length 2):** 일반 반복 페널티가 놓치는 구문 단위 반복을 잡아 주며 긴 세션에 유용합니다. KoboldCpp 같은 llama.cpp 기반 백엔드에서 제공되며, 사용하는 프런트엔드가 지원하는지 확인하세요.',
          '이 매개변수들이 왜 중요하고 어떻게 상호작용하는지에 대한 더 자세한 설명은 [온도와 top-p 제어](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity)를 참고하세요.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '모델마다 짧은 장면 하나로 샘플링을 테스트하세요. 설정마다 세 번씩 실행한 뒤, 프롬프트를 잃지 않으면서 모델이 가장 생생하게 들리는 온도를 고르세요. 설정은 모델 사이에서 완벽하게 옮겨지지 않습니다.',
          },
        ],
      },
      uncensored: {
        id: 'uncensored',
        title: 'Uncensored 모델: 무엇이며 언제 중요한가',
        content: '**Uncensored는 비윤리적이라는 뜻이 아닙니다.** 파인튜닝으로 모델의 거부 동작을 줄여, 거절하는 대신 프롬프트를 따르게 했다는 뜻입니다. 작가는 여전히 작가입니다.',
        items: [
          '**기술적으로.** Hermes 4.3과 Dolphin 3.0 같은 모델은 성숙하거나 폭력적이거나 도덕적으로 복잡한 프롬프트에 대한 거부를 후속 학습에서 줄인 파인튜닝입니다. Nous Research는 거부가 크게 줄었다고 설명하며, 자체 RefusalBench에서 Hermes 4.3이 프롬프트의 72–75%에 응답했다고 보고합니다. 더 새로운 모델의 커뮤니티 "abliterated" 또는 "heretic" 변형도 Ollama에 있으나 품질은 검증되지 않았습니다.',
          '**창작 작업에서 중요한 경우.** 성숙한 소설, 노골적인 폭력이 나오는 범죄 소설, 공포, 전쟁이나 잔학 행위에 대한 고증에 충실한 글, 그리고 인스트럭트 모델이 설득력 있게 연기하지 않는 도덕적으로 복잡한 적대자.',
          '**한계.** 서툴게 쓴 프롬프트까지 그대로 따릅니다. 인스트럭트 모델은 모호한 프롬프트를 출판 가능한 수준으로 순화하는 경우가 많지만, 저거부 모델은 요청한 그대로를 내놓습니다.',
          '**윤리적·법적 경계.** 모델이 써 준다는 사실이 실존 인물을 겨냥하거나, 식별 가능한 개인이 연루된 동의 없는 상황을 묘사하거나, 거주 지역에서 불법인 내용을 써도 된다는 허가는 아닙니다. 로컬 호스팅은 법을 바꾸지 않고 초안을 볼 수 있는 사람만 바꿉니다. 법은 나라마다 다르며 이것은 법률 자문이 아닙니다.',
          '**더 자세한 내용** 윤리, 합법성, 모범 사례는 [창작 글쓰기를 위한 Uncensored 로컬 LLM: 윤리, 합법성, 모범 사례](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics)를 참고하세요.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Uncensored는 정체성이 아니라 작업 방식의 선택입니다. 많은 작가가 인스트럭트 모델로 초안을 쓰고, 특정 장면에서만 저거부 파인튜닝으로 바꿉니다. 두 모델을 나란히 설치해 두는 것이 일반적입니다.',
          },
        ],
      },
      frontends: {
        id: 'frontends',
        title: '창작 작업용 프런트엔드',
        content: '**글을 쓰는 채팅 UI는 모델만큼 중요합니다.** 네 가지 선택지가 대부분의 작업 방식을 다룹니다. 작업 방식에 맞춰 고르세요.',
        items: [
          '**Open WebUI** — 범용 선택. ChatGPT 같은 인터페이스, 클릭 한 번으로 모델 전환, 시스템 프롬프트의 캐릭터 메모, 컨텍스트용 문서 업로드. 산문 위주의 초안 작성에 적합합니다.',
          '**SillyTavern** — 롤플레이와 대화용 선택. 캐릭터 카드, 페르소나 관리, 세계관 구축용 로어북, 다중 캐릭터 장면을 위한 그룹 채팅. 대화 중심 작업과 장기 세계관 프로젝트에 적합합니다.',
          '**Agnai와 RisuAI** — 더 가벼운 SillyTavern 대안. 시작하기 쉽고 커스터마이징은 적습니다.',
          '**Ollama CLI와 텍스트 편집기만** — 최소 구성. `ollama run gemma4:31b`로 장면을 만들고 초안에 붙여 넣습니다. 지속적인 캐릭터 컨텍스트는 잃지만 집중력을 얻습니다.',
          '롤플레이 중심 프런트엔드의 직접 비교는 [SillyTavern vs Agnai vs RisuAI: 최고의 로컬 롤플레이 프런트엔드](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay)를 참고하세요.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '초안 작성과 퇴고에는 서로 다른 도구가 필요합니다. 채팅 프런트엔드에서 생성한 뒤 일반 텍스트 편집기로 내보내 퇴고하세요. 채팅 창 안에서 편집하면 직접 고치는 대신 모델에게 고쳐 달라고 하는 습관이 듭니다.',
          },
        ],
      },
      decision: {
        id: 'decision',
        title: '결정: 내 작업에 맞는 모델은',
        content: '**먼저 메모리, 그다음 작업입니다.**',
        columns: [
          '내 상황',
          '추천',
        ],
        rows: [
          {
            '내 상황': '24GB GPU 또는 32GB Mac, 산문 우선',
            '추천': 'Gemma 4 31B',
          },
          {
            '내 상황': '24GB GPU, 장편 소설 규모의 프로젝트',
            '추천': 'Qwen3.8-27B(256K 컨텍스트)',
          },
          {
            '내 상황': '24GB GPU, 더 빠른 출력이 필요',
            '추천': 'Gemma 4 26B-A4B',
          },
          {
            '내 상황': '12GB GPU',
            '추천': 'Gemma 4 12B',
          },
          {
            '내 상황': '16GB GPU',
            '추천': 'Mistral Small 3 24B',
          },
          {
            '내 상황': '48GB 이상, 모델 하나로 모두 처리',
            '추천': 'Llama 3.3 70B + Hermes 4.3 36B',
          },
          {
            '내 상황': '인스트럭트 모델이 필요한 장면을 거부',
            '추천': 'Hermes 4.3 36B(인스트럭트도 유지)',
          },
          {
            '내 상황': '일단 하나로 시작하고 나중에 조정',
            '추천': 'Gemma 4 31B 또는 Qwen3.8-27B 중 들어가는 쪽',
          },
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '24GB GPU에서는 Gemma 4 31B 또는 Qwen3.8-27B, 12GB에서는 Gemma 4 12B, 16GB에서는 Mistral Small 3 24B, 48GB 이상에서는 Llama 3.3 70B, 인스트럭트 모델이 거부하는 장면에는 Hermes 4.3 36B를 고르세요.',
          },
          {
            type: 'plain-terms',
            text: '컨텍스트 여유를 남기고 메모리에 들어가는 가장 큰 모델로 시작하세요. 장편 연속성이나 성숙한 장면 같은 특정 작업이 병목이 될 때만 전문 모델로 바꾸세요. 두 개를 설치해도 디스크 공간만 듭니다.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '대부분의 작가는 모델은 너무 고민하고 프롬프트는 너무 적게 고민합니다. 캐릭터 메모, 목소리 샘플, 명시적인 시점이 담긴 시스템 프롬프트는 모델을 바꾸는 것보다 효과가 큽니다. [페르소나 프롬프팅](/ko/prompt-engineering/persona-prompting)을 참고하세요.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '창작 글쓰기를 위한 로컬 모델 선택과 사용에서 흔한 실수',
        items: [
          '**실수 1: 일반 벤치마크 순위로 고르기.** 코딩과 추론 리더보드는 산문 품질과 상관관계가 낮습니다. EQ-Bench 같은 창작 리더보드를 보고, 직접 쓰는 장면으로 테스트하세요.',
          '**실수 2: 코딩용 샘플링 사용.** 온도 0.2–0.4는 밋밋한 문장을 만듭니다. 창작에는 약 0.9–1.1이 필요합니다.',
          '**실수 3: thinking 모드를 켜 둔 채 쓰기.** 추론 우선 모델은 쓰기 전에 계획하므로 소설이 조립된 것처럼 느껴질 수 있습니다. 산문에서는 thinking을 끄세요.',
          '**실수 4: 컨텍스트 메모리 무시.** 19–20GB인 31B 모델은 컨텍스트 창을 늘리면 24GB 카드에서 여유가 거의 남지 않습니다. KV 캐시용으로 2–6GB를 잡아 두세요.',
          '**실수 5: 빈약한 시스템 프롬프트.** "당신은 도움이 되는 어시스턴트입니다"는 창작에 최악의 프롬프트입니다. 캐릭터 메모, 시점, 시제를 [네거티브 프롬프팅](/ko/prompt-engineering/negative-prompting)과 결합해 상투적 표현을 배제하세요.',
          '**실수 6: 채팅 창 안에서 편집하기.** 생성은 채팅에서, 퇴고는 편집기에서 하세요. 모델에게 퇴고를 맡기는 작가는 금세 자기 목소리를 잃습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '창작용 AI의 가장 큰 기술적 위험은 퇴고를 맡겨 버리는 것입니다. 생성은 모델이 도움이 되는 기계적 작업이고, 퇴고는 글을 내 것으로 만드는 일입니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Ollama 라이브러리: Gemma 4](https://ollama.com/library/gemma4) — 태그, 다운로드 크기, 컨텍스트 창.',
          '[Ollama 라이브러리: Qwen3.8](https://ollama.com/library/qwen3.8) — 태그, 크기, 기능.',
          '[Hugging Face: Qwen3.8-27B 모델 카드](https://huggingface.co/Qwen/Qwen3.8-27B) — 라이선스, 컨텍스트 길이, 권장 샘플링.',
          '[Hugging Face: Gemma 4 31B 모델 카드](https://huggingface.co/google/gemma-4-31B-it) — 라이선스, 컨텍스트 길이, 샘플링 기본값.',
          '[Hugging Face: Hermes 4.3 36B](https://huggingface.co/NousResearch/Hermes-4.3-36B) — 기반 모델, 라이선스, 거부 벤치마크, GGUF 양자화.',
          '[Ollama 라이브러리: Mistral Small](https://ollama.com/library/mistral-small) — Mistral Small 3 24B의 크기, 컨텍스트, 라이선스.',
          '[EQ-Bench Creative Writing](https://eqbench.com/creative_writing.html)과 [evals.report의 EQ-Bench 점수](https://evals.report/benchmarks/eq-bench?tab=scores) — 위에서 인용한 리더보드 수치.',
          '[Featherless: 창작 글쓰기에 좋은 오픈 모델](https://featherless.ai/blog/best-ai-for-creative-writing-2026) — 오픈 웨이트 모델 크기와 Gemma 4 31B의 EQ-Bench 수치.',
          '[SillyTavern 문서](https://docs.sillytavern.app/) — 캐릭터 카드, 페르소나, 그룹 채팅.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '창작 글쓰기에 가장 좋은 로컬 LLM은 무엇입니까?',
            a: '2026년 최고의 로컬 출발점은 Gemma 4 31B와 Qwen3.8-27B이며, 둘 다 24GB GPU에 들어갑니다(가중치 약 18–20GB). Gemma 4 31B는 자체 EQ-Bench 점수가 공개된 산문용 선택이고, Qwen3.8-27B는 긴 컨텍스트용 선택입니다. 더 작은 카드에서는 Gemma 4 12B(12GB) 또는 Mistral Small 3 24B(16GB)를 쓰세요.',
          },
          {
            q: '창작 글쓰기에 가장 좋은 Ollama 모델은 무엇입니까?',
            a: '24GB GPU에서는 산문에 `ollama pull gemma4:31b`, 장기 프로젝트에 `ollama pull qwen3.8:27b`를 쓰세요. 12GB는 `gemma4:12b`, 16GB는 `mistral-small:24b`, 48GB 이상은 `llama3.3:70b`입니다. 긴 장면에는 `num_ctx`를 높이고 소설에서는 thinking을 끄세요.',
          },
          {
            q: '소설과 이야기를 쓰기에 가장 좋은 로컬 LLM은 무엇입니까?',
            a: '컨텍스트 여유를 남기고 메모리에 들어가는 가장 큰 모델을 고르세요. 24GB에서는 Gemma 4 31B가 산문용, 256K 컨텍스트의 Qwen3.8-27B가 장편 규모 프로젝트용이며, 48GB 이상에서는 Llama 3.3 70B가 기준입니다. 온도는 0.9–1.1로 하고 시스템 프롬프트에 시점, 시제, 목소리 샘플을 넣으세요.',
          },
          {
            q: '세계관 구축에 가장 좋은 로컬 모델은 무엇입니까?',
            a: '가장 중요한 것은 긴 컨텍스트입니다. Qwen3.8-27B와 Gemma 4 모두 256K 토큰을 제공하므로 설정집과 장 요약을 프롬프트에 담아 둘 수 있습니다. 둘 중 하나를 SillyTavern 로어북이나 고정된 세계관 문서와 함께 쓰고, 세력, 규칙, 이름을 하나의 참조 블록에 모아 두세요.',
          },
          {
            q: '장편 소설을 쓰기에 가장 좋은 LLM은 무엇입니까?',
            a: '로컬이라면 24GB GPU에서 Qwen3.8-27B(256K 컨텍스트) 또는 Gemma 4 31B(256K 컨텍스트)입니다. 병목은 모델 크기가 아니라 구조입니다. 개요, 캐릭터 설정집, 장별 요약이 연속성을 지켜 줍니다. 클로즈드 클라우드 모델은 창작 벤치마크 점수가 더 높지만 원고를 제3자에게 보내게 됩니다.',
          },
          {
            q: 'VRAM 또는 통합 메모리 32GB에서 가장 좋은 로컬 모델은 무엇입니까?',
            a: 'Gemma 4 31B(19–20GB) 또는 Qwen3.8-27B(18GB)를 더 큰 컨텍스트 창으로 쓰세요. 24GB를 넘는 메모리는 KV 캐시에 쓰입니다. Gemma 4 26B-A4B는 더 빠른 대안입니다. 70B 모델은 48GB 미만에서는 여유 있게 들어가지 않습니다.',
          },
          {
            q: 'uncensored 로컬 LLM이란 무엇이며 언제 써야 합니까?',
            a: '성숙하거나 도덕적으로 복잡한 프롬프트에 대한 거부를 후속 학습에서 줄여, 모델이 거절하는 대신 프롬프트를 따르게 한 파인튜닝입니다. 확인할 수 있었던 가장 최근 선택은 Hermes 4.3 36B이고, Dolphin 3.0은 더 오래됐습니다. 성숙한 소설이나 고증에 충실한 글에 쓰고, 그 밖의 작업에는 인스트럭트 모델을 유지하세요.',
          },
          {
            q: '창작 글쓰기에는 어떤 온도를 써야 합니까?',
            a: '산문에는 온도 0.9–1.1과 top-p 0.92–0.95입니다. 긴장감 있는 대화는 0.7–0.85, 시는 1.0–1.2, 초현실이나 장르 작품은 1.1–1.3입니다. Gemma 4의 1.0 / 0.95 / top-k 64 같은 제조사 기본값은 좋은 출발점입니다. 소설에서는 thinking 모드를 끄세요.',
          },
          {
            q: '로컬 창작 글쓰기 모델은 ChatGPT나 Claude만큼 좋습니까?',
            a: '벤치마크에서는 그렇지 않습니다. EQ-Bench Creative Writing v3에서는 Claude Opus 4.7(2,206 Elo) 같은 클로즈드 모델이 앞서고, 최고의 오픈 웨이트 항목은 데이터센터급 하드웨어가 필요합니다. 그래도 24GB 로컬 모델은 초안 작성에는 충분할 수 있고 원고를 비공개로 유지해 줍니다. 보정된 샘플링과 좋은 시스템 프롬프트가 실사용상 격차의 상당 부분을 메웁니다.',
          },
          {
            q: '로컬 모델이 장편 소설 한 편을 통째로 쓸 수 있습니까?',
            a: '초안 작성을 도울 수는 있습니다. Qwen3.8-27B나 Gemma 4 같은 256K 컨텍스트 모델은 긴 개요와 여러 장을 메모리에 담을 수 있지만, KV 캐시는 컨텍스트와 함께 커지므로 VRAM을 확인하세요. 캐릭터 설정집과 로어북을 두고 절 단위로 초안을 쓰세요. 없으면 어떤 모델이든 방향을 잃습니다.',
          },
          {
            q: 'uncensored 모델은 불법 콘텐츠를 생성합니까?',
            a: '프롬프트가 요구하는 텍스트를 생성합니다. 법적 책임은 모델이 아니라 작가와 출판물에 있습니다. EU AI Act, 독일 형법 제184조/제184c조, 각국의 음란물 규제는 텍스트가 어떻게 생성되었는지와 무관하게 적용됩니다. 로컬 호스팅은 초안을 보는 사람을 바꿀 뿐 무엇이 합법인지는 바꾸지 않습니다. 이것은 법률 자문이 아닙니다.',
          },
          {
            q: '"shiver down their spine" 같은 상투적 표현은 어떻게 피합니까?',
            a: '시스템 프롬프트에 금지 구문 8–12개를 나열하세요("do not write \'shiver,\' \'tapestry,\' \'delve,\' or \'she felt\'"). 온도는 1.2 이상이 아니라 0.85–1.0으로 유지하고, 백엔드가 지원하면 DRY 페널티를 추가하세요. 단순 반복 페널티는 구문 단위의 상투구를 잡지 못합니다. 마지막 필터는 직접 하는 퇴고입니다. [네거티브 프롬프팅](/ko/prompt-engineering/negative-prompting)을 참고하세요.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 코딩, 추론, 일반 용도를 아우르는 대표 모델 가이드.',
          '[2026년 창작 글쓰기를 위한 최고의 로컬 LLM](/ko/local-llms/best-local-llms-for-creative-writing) — 소설, 시, 장편 글쓰기를 위한 더 폭넓은 모델 정리.',
          '[Backyard AI 리뷰: 로컬 AI 캐릭터 채팅과 롤플레이](/ko/power-local-llm/backyard-ai-review-local-roleplay) — Character Hub가 내장된 무료 데스크톱 앱. 위 프런트엔드의 손쉬운 대안.',
          '[SillyTavern vs Agnai vs RisuAI: 최고의 로컬 롤플레이 프런트엔드](/ko/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay) — 롤플레이 중심 프런트엔드의 직접 비교.',
          '[소설가를 위한 로컬 LLM 프롬프트: 템플릿과 기법](/ko/power-local-llm/local-llm-prompts-for-fiction-writers) — 캐릭터 개발, 대화, 퇴고를 위한 복사용 프롬프트 템플릿.',
          '[창작 글쓰기를 위한 Uncensored 로컬 LLM: 윤리, 합법성, 모범 사례](/ko/power-local-llm/uncensored-local-llm-creative-writing-ethics) — 법적·윤리적 경계가 어디인지.',
          '[온도와 Top-P: AI 창의성 제어](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 샘플링 매개변수의 프롬프트 엔지니어링 측면.',
          '[네거티브 프롬프팅](/ko/prompt-engineering/negative-prompting) — 하지 말아야 할 것을 지정하기. 창작용 시스템 프롬프트의 효과를 키워 줍니다.',
          '[Locally Uncensored 리뷰: 로컬 채팅, 이미지, 영상을 한 앱에서](/ko/power-local-llm/locally-uncensored-review) — 모델 목록보다 앱을 선호하는 분을 위한, 무검열 로컬 모델 중심의 올인원 데스크톱 앱입니다.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026년 창작 글쓰기를 위한 최고의 로컬 LLM: 소설, 대화, 세계관 구축',
      description: 'Gemma 4 31B와 Qwen3.8-27B는 24GB GPU 한 장에서 실행됩니다. 소설, 대화, 세계관 구축에 맞는 최고의 로컬 LLM을 VRAM 구간별로 Ollama 명령과 함께 소개합니다.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-creative-writing',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-10-27',
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
      proficiencyLevel: 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '홈',
          item: 'https://www.promptquorum.com/ko',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Power Local LLM',
          item: 'https://www.promptquorum.com/ko/power-local-llm',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '2026년 창작 글쓰기를 위한 최고의 로컬 LLM: 소설, 대화, 세계관 구축',
          item: 'https://www.promptquorum.com/ko/power-local-llm/best-local-llm-creative-writing',
        },
      ],
    },
  },
}
