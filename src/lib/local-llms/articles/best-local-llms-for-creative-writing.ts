// Auto-generated from src/lib/local-llms/content.ts
// Slug: best-local-llms-for-creative-writing
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Best Local LLMs for Creative Writing in 2026: Fiction, Poetry, and Long-Form Content',
      seoTitle: 'Best Local LLMs for Creative Writing 2026',
      intro: 'As of April 2026, the best local LLMs for creative writing are Meta Llama 3.3 70B (best prose quality), Mistral Small 3.1 24B (best quality under 16 GB RAM), and community fine-tunes like Fimbulvetr and Midnight-Rose (specialized for fiction and roleplay). Creative writing performance is not well captured by standard benchmarks -- it requires evaluating narrative coherence, stylistic range, and instruction-following on open-ended prompts.',
      metaDescription: '4 top local LLMs for creative writing: Llama 3.3 70B (best prose), Mistral 24B (best 16GB), fine-tunes (specialized voices). Find the right fit.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**As of April 2026, the best local LLMs for creative writing are Meta Llama 3.3 70B (best prose quality), Mistral Small 3.1 24B (best quality under 16 GB RAM), and community fine-tunes like Fimbulvetr a.**',
      audience: 'Beginners running their first local LLM on consumer hardware',
      dateModified: '2026-04-05',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM creative writing',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Best Local LLMs for Creative Writing in 2026: Fiction, Poetry, and Long-Form Content',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'url': 'https://www.promptquorum.com/local-llms/best-local-llms-for-creative-writing',
        'inLanguage': 'en',
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'Creative writing AI' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'Mistral Small 3.1' },
          { '@type': 'Thing', 'name': 'AI fiction writing' },
          { '@type': 'Thing', 'name': 'Fine-tuned LLM' },
        ],
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com',
          'logo': { '@type': 'ImageObject', 'url': 'https://www.promptquorum.com/logo.svg' },
        },
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Improve Local LLM Creative Writing Output',
        'inLanguage': 'en',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Specify style concretely with author reference' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Assign the model a professional writing role' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Set temperature to 0.9-1.1' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Set a persistent system prompt for style' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Generate in 500-word sections for long form' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Best Local LLMs for Creative Writing 2026',
        'inLanguage': 'en',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Meta Llama 3.3 70B', 'description': 'Best prose quality. 40 GB RAM. Widest stylistic range. 1K-3K word coherence. ollama run llama3.3:70b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Mistral Small 3.1 24B', 'description': 'Best for 16 GB RAM. 14 GB at Q4_K_M. Strong style instruction-following. ollama run mistral-small3.1' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.1 8B', 'description': 'Best for 8 GB RAM. Reliable for fiction up to 500 words. ollama run llama3.2' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Community Fine-Tunes (Fimbulvetr, Midnight-Rose)', 'description': 'Specialized fiction training. Better character voice. Available on Hugging Face as GGUF.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Can a local LLM replace a writing assistant like Claude or GPT-4o for fiction?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'For short-form content (under 500 words), a well-prompted 13B+ local model produces output that is difficult to distinguish from cloud models in blind tests. For long-form fiction (novels, full short stories), Claude Opus 4.7 and GPT-4o maintain narrative coherence more reliably at any hardware tier. A 70B local model narrows this gap significantly.' } },
          { '@type': 'Question', 'name': 'Does the model remember earlier parts of my story?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Only within the current context window. If your conversation history exceeds the model\'s context limit (typically 4K-128K tokens), earlier details are forgotten. For long projects, periodically provide a story summary at the start of each session to re-establish context.' } },
          { '@type': 'Question', 'name': 'Which local model produces the most vivid prose?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 70B with Q5_K_M quantization produces the most consistently vivid sensory detail and natural dialogue flow. Mistral Small 3.1 24B achieves 80-85% of this quality at 14 GB RAM vs 45 GB for 70B. Fimbulvetr-11B fine-tune on a 13B base model also excels at prose richness within smaller resource budgets.' } },
          { '@type': 'Question', 'name': 'How do I handle inconsistencies in character voice across chapters?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Provide a detailed character sheet (name, background, speech patterns, motivations) in your system prompt. For each new chapter, begin the session with: "You are writing as [Character]. Maintain the following voice and perspective..." Then paste the character sheet. This keeps coherence for 500-2,000 word sections.' } },
          { '@type': 'Question', 'name': 'Is quantization (Q4, Q5, Q8) noticeable in creative writing?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, measurably. FP16 (full precision) and Q8 produce near-identical prose. Q5 introduces subtle flattening -- fewer unique adjectives, slightly repetitive phrasing (5-10% of users notice). Q4 creates obvious quality loss: generic descriptions, missing sensory details. For fiction, Q5_K_M is minimum recommended; Q8_K_M is ideal.' } },
          { '@type': 'Question', 'name': 'Can I fine-tune a local LLM on my own writing style?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Collect 500-2,000 examples of your prose in .jsonl format (input/output pairs), then use Unsloth or Axolotl libraries on a 24 GB GPU to fine-tune a 13B model in 4-8 hours. Cost: ~$5-15 on cloud GPU. Result: a model that mimics your voice. LoRA (low-rank adaptation) fine-tuning is faster and cheaper than full fine-tuning.' } },
          { '@type': 'Question', 'name': 'What\'s the difference between creative writing and creative *dialogue* quality?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Dialogue requires tighter word economy and distinct character voices; prose requires sensory richness and narrative flow. Llama 3.3 70B excels at both. Smaller models (7B, 8B) often produce flat, generic dialogue. If dialogue-heavy fiction is your focus, prioritize models with strong instruction-following over prose quality; Mistral 7B dialogue quality rivals Llama 8B.' } },
          { '@type': 'Question', 'name': 'How much context (tokens) do I need for a full novel outline?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A detailed outline of a 80,000-word novel (plot, characters, chapters, conflicts) is typically 3,000-6,000 tokens. A 128K-context model (Llama 3.2, Phi-4) lets you load the entire outline + previous chapters in one session. For models with 4K-8K context, provide a rolling summary: previous chapter summary + outline of next 3 chapters.' } },
          { '@type': 'Question', 'name': 'Do I need a GPU to run a creative-writing-optimized local LLM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No, but it dramatically speeds up generation. A 13B model on CPU (8-core): 10-15 tokens/sec. Same model on a 12GB GPU (RTX 4070 Ti or RTX 5070): 80-100 tokens/sec. For iterative creative writing (testing variations, rewriting), GPU cuts session time from 2 hours to 15 minutes. CPU is viable for one-shot generation or outlining.' } },
          { '@type': 'Question', 'name': 'Which local LLM is best for science fiction world-building?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 70B for consistency across 50+ page outlines. Qwen2.5 14B-32B for technical accuracy (physics, orbital mechanics, chemistry). Fimbulvetr-11B for rich descriptive world details. For budget-conscious setups, Mistral Small 3.1 24B balances world-coherence and resource use. Test all three on a sample world description before committing.' } },
          { '@type': 'Question', 'name': 'What is the best local LLM for creative writing and fiction?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 70B (40 GB) produces the richest prose and widest style range. For 16 GB VRAM, Mistral Small 3.1 24B (14 GB) delivers strong narrative quality with good long-form coherence. For 8 GB budget, Llama 3.1 8B handles short fiction (up to 500 words). Community fine-tunes like Fimbulvetr-11B add specialized fiction training on smaller resource budgets.' } },
          { '@type': 'Question', 'name': 'Which local LLMs work best for writing with only 8GB VRAM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.1 8B Q4_K_M (~6 GB) is the best choice for creative writing on 8 GB VRAM. Handles short stories (up to 500 words) reliably with natural prose. Mistral 7B is faster but produces flatter creative output. Qwen2.5 7B excels at technical content but lacks narrative fluidity. For 8 GB, accept that models run slower; creative quality > speed on this tier.' } },
        ],
      },
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'How to Evaluate Creative Writing Quality', anchor: '#how-to-evaluate' },
        { label: '#1 Llama 3.3 70B -- Best Prose Quality', anchor: '#llama-3-3-70b' },
        { label: '#2 Mistral Small 3.1 24B', anchor: '#mistral-small' },
        { label: '#3 Llama 3.1 8B -- Best 8 GB Option', anchor: '#llama-3-1-8b' },
        { label: '#4 Fine-Tuned Models for Fiction', anchor: '#fine-tuned-models' },
        { label: 'Prompting Tips for Creative Writing', anchor: '#prompting-tips' },
        { label: 'Bad Prompt vs Good Prompt', anchor: '#prompt-examples' },
        { label: 'Regional Context', anchor: '#regional-context' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Standard benchmarks (MMLU, HumanEval) do not measure creative writing quality -- evaluate models with your own sample prompts.',
            '**Best overall prose**: Llama 3.3 70B -- most natural English narrative style at the locally-runnable scale.',
            '**Best for 16 GB RAM**: Mistral Small 3.1 24B -- strong creative output, noticeably better than 7B models for long-form narrative.',
            '**Best for 8 GB RAM**: Llama 3.1 8B -- better creative instruction-following than Qwen2.5 7B for English fiction tasks.',
            'Community fine-tunes (Fimbulvetr-11B, Midnight-Rose-70B) trained specifically on creative fiction outperform base Llama on sustained narrative tasks.',
          ],
        },
        howToEvaluate: {
          id: 'how-to-evaluate',
          title: 'How Do You Evaluate Local LLM Quality for Creative Writing?',
          content: [
            '**As of April 2026, creative writing performance is not well captured by standard benchmarks (MMLU, HumanEval).** To evaluate a model for creative writing, test it directly with the types of prompts you plan to use:',
          ],
          items: [
            '**Prose continuity test**: give the model the first two paragraphs of a scene and ask it to continue for 500 words. Does it maintain consistent tone, character voice, and narrative logic?',
            '**Style instruction test**: ask the model to write a paragraph "in the style of Raymond Carver" or "with the pacing of a thriller novel." Does it demonstrably shift style, or produce generic output?',
            '**Long-form coherence test**: ask for a 1,000-word short story with a specific twist ending. Does the model plant the setup naturally and deliver the payoff?',
            '**Dialogue test**: write a scene with two characters with different speech patterns. Does each character sound distinct, or does the dialogue feel uniform?',
          ],
          image: '/images/creative-writing-model-comparison-en.svg',
          imageCaption: 'Creative writing local LLM comparison: Llama 3.3 70B (40GB, best prose), Mistral 24B (14GB, 16GB tier), Llama 3.1 8B (6GB, entry tier).',
        },
        llama33: {
          id: 'llama-3-3-70b',
          title: '#1 Meta Llama 3.3 70B -- Best Prose Quality Locally',
          content: [
            '**Llama 3.3 70B produces the most natural, varied English prose of any locally-runnable model.** Its training on a diverse English text corpus gives it the widest stylistic range -- from minimalist literary fiction to genre thriller pacing. Long-form coherence (1,000-3,000 words) is noticeably better than any 7B or 13B model.',
            'The constraint is hardware: 40 GB RAM at Q4_K_M. For creative writing sessions (rather than batch generation), the slower generation speed (8-15 tok/sec on CPU) is tolerable. On Apple M2 Ultra or M5 Max with 64+ GB unified memory, generation reaches 20-35 tok/sec.',
          ],
          rows: [
            { 'Spec': 'Best for', 'Value': 'Long-form fiction, rich prose' },
            { 'Spec': 'RAM required (Q4_K_M)', 'Value': '~40 GB' },
            { 'Spec': 'Prose style range', 'Value': 'Widest of any local model' },
            { 'Spec': 'Long-form coherence', 'Value': 'Strong (1K-3K word scenes)' },
            { 'Spec': 'Ollama command', 'Value': 'ollama run llama3.3:70b' },
          ],
          columns: ['Spec', 'Value'],
          image: '/images/creative-writing-quality-spectrum-en.svg',
          imageCaption: 'Local LLM creative writing quality spectrum: 8B handles 500-word stories, 24B up to 2K words, 70B sustains 1K-3K word scenes with widest style range.',
        },
        mistralSmall: {
          id: 'mistral-small',
          title: '#2 Mistral Small 3.1 24B -- Best Creative Writing for 16 GB RAM',
          content: [
            '**Mistral Small 3.1 24B delivers creative writing quality noticeably above any 7B model while fitting in 14 GB RAM.** Its instruction-following is precise enough to handle detailed style specifications ("write in second person, present tense, with short punchy sentences") without drifting after a few paragraphs.',
            'For users who want genuine long-form narrative capability without a workstation-class machine, Mistral Small 3.1 is the practical choice.',
          ],
          rows: [
            { 'Spec': 'Best for', 'Value': 'Long-form narrative, style instruction' },
            { 'Spec': 'RAM required (Q4_K_M)', 'Value': '~14 GB' },
            { 'Spec': 'Prose style range', 'Value': 'Strong -- noticeably above 7B class' },
            { 'Spec': 'Long-form coherence', 'Value': 'Good (500-1,500 word scenes)' },
            { 'Spec': 'Ollama command', 'Value': 'ollama run mistral-small3.1' },
          ],
          columns: ['Spec', 'Value'],
        },
        llama318: {
          id: 'llama-3-1-8b',
          title: '#3 Llama 3.1 8B -- Best Creative Writing for 8 GB RAM',
          content: [
            '**At the 8 GB RAM tier, Llama 3.1 8B outperforms Qwen2.5 7B and Mistral 7B for English creative writing.** Qwen2.5 is stronger at coding and structured tasks, but its English prose generation is less fluid for narrative purposes.',
            'Llama 3.1 8B handles short fiction (up to 500 words) reliably. For stories over 1,000 words, quality consistency degrades -- the model tends to drift from established narrative details. This is a fundamental limitation of 8B-scale models for long-form creative work.',
          ],
        },
        fineTuned: {
          id: 'fine-tuned-models',
          title: '#4 Community Fine-Tunes for Fiction and Roleplay',
          content: [
            '**The local LLM community maintains specialized fine-tunes trained on fiction corpora, which outperform base models on sustained narrative tasks.** These are available on Hugging Face and can be loaded in LM Studio or Ollama (via custom Modelfiles):',
          ],
          items: [
            '**Fimbulvetr-11B** -- fine-tuned on high-quality fantasy and science fiction prose. Produces more vivid sensory detail and consistent character voice than base Llama 3.1 8B.',
            '**Midnight-Rose-70B** -- a Llama 3.3 70B fine-tune focused on creative writing and roleplay scenarios. Better long-form narrative coherence than the base model.',
            '**Noromaid / Openhermes variants** -- community fine-tunes focused on conversational roleplay. Lower prose quality than Fimbulvetr but more responsive to character direction.',
            'Download these from Hugging Face (search "creative writing GGUF") and load in LM Studio\'s model browser or via `ollama create` with a custom Modelfile.',
          ],
        },
        promptingTips: {
          id: 'prompting-tips',
          title: 'Prompting Tips That Improve Local LLM Creative Writing',
          items: [
            '**Specify style concretely**: "Write in the style of Cormac McCarthy -- sparse dialogue, long descriptive sentences, no quotation marks" outperforms "write literary fiction."',
            '**Give the model a role**: "You are a professional novelist. Continue this scene without summarizing, only showing." Instruction-following improves when the model has a defined identity.',
            '**Set temperature to 0.9-1.1**: creative tasks benefit from higher temperature (more randomness). Default Ollama temperature is 0.8; LM Studio default is 0.7. Increase via the parameters slider.',
            '**Use a system prompt**: set a persistent style instruction at the session level. "You are writing a gothic horror novel. Maintain dark, atmospheric prose throughout all responses."',
            '**Break long tasks into sections**: for a 3,000-word chapter, generate it in 500-word sections. This keeps the model within its reliable coherence range.',
            '**Compare local vs cloud outputs**: use [PromptQuorum](/) to send the same creative prompt to your local Ollama model and cloud models simultaneously -- useful for calibrating when local quality is sufficient.',
          ],
          image: '/images/creative-writing-temperature-guide-en.svg',
          imageCaption: 'LLM temperature guide for creative writing: 0.7 default is too flat, 0.9-1.05 optimal for fiction, above 1.1 produces incoherent output.',
        },
        promptExamples: {
          id: 'prompt-examples',
          title: 'Bad Prompt vs Good Prompt',
          items: [
            '❌ "Write a fantasy story" → ✅ "Write a 500-word fantasy scene where a smuggler negotiates with a dragon over ancient artifacts. Use sensory details and make the dialog tense."',
            '❌ "Write something interesting" → ✅ "Write a 300-word opening scene of a heist gone wrong. The protagonist discovers their partner betrayed them mid-mission. Use short, punchy sentences to match the pace."',
            '❌ "Write a mystery" → ✅ "Continue this detective scene: [previous text]. The detective realizes the suspect is lying based on one detail. Show--do not tell--how she catches the inconsistency."',
            '❌ "Make it more interesting" → ✅ "Rewrite the previous paragraph to feel more like noir fiction: sparse dialogue, cynical internal monologue, specific sensory details (sounds, smells, textures)."',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Creative Writing with Local LLMs: Regional Context',
          content: [
            '**Europe (GDPR & Data Residency)**: The GDPR requires sensitive personal data (character backstories, fictional content for publication) to remain within EU borders when processed. Running local models on EU-based hardware ensures compliance. LM Studio and Ollama deployed on German, French, or Austrian servers meet Article 28 processor agreements without cloud dependency.',
            '**Japan (Localization & Character Encoding)**: Japanese creative writing uses mixed scripts (hiragana, katakana, kanji), complex punctuation, and subtle spacing rules. Models fine-tuned on Japanese literature handle these patterns better than English-optimized models. LM Studio supports UTF-8 and Unicode; Ollama works with Japanese models like Shisa-7B-v1 and Weblab-10B.',
            '**China (Content Policy & Model Access)**: Mainland China restricts cloud AI services and requires content moderation compliance. Running locally with Qwen2.5 or Qwen1.5 avoids geopolitical restrictions. Local deployment suits Chinese publishers, game developers, and enterprises managing proprietary story IP.',
          ],
        },
        faqSection: {
          id: 'faq',
          faqs: [
            {
              q: 'Can a local LLM replace a writing assistant like Claude or GPT-4o for fiction?',
              a: 'For short-form content (under 500 words), a well-prompted 13B+ local model produces output that is difficult to distinguish from cloud models in blind tests. For long-form fiction (novels, full short stories), Claude Opus 4.7 and GPT-4o maintain narrative coherence more reliably at any hardware tier. A 70B local model narrows this gap significantly.',
            },
            {
              q: 'Does the model remember earlier parts of my story?',
              a: 'Only within the current context window. If your conversation history exceeds the model\'s context limit (typically 4K-128K tokens), earlier details are forgotten. For long projects, periodically provide a story summary at the start of each session to re-establish context.',
            },
            {
              q: 'Which local model produces the most vivid prose?',
              a: 'Llama 3.3 70B with Q5_K_M quantization produces the most consistently vivid sensory detail and natural dialogue flow. Mistral Small 3.1 24B achieves 80-85% of this quality at 14 GB RAM vs 45 GB for 70B. Fimbulvetr-11B fine-tune on a 13B base model also excels at prose richness within smaller resource budgets.',
            },
            {
              q: 'How do I handle inconsistencies in character voice across chapters?',
              a: 'Provide a detailed character sheet (name, background, speech patterns, motivations) in your system prompt. For each new chapter, begin the session with: "You are writing as [Character]. Maintain the following voice and perspective..." Then paste the character sheet. This keeps coherence for 500-2,000 word sections.',
            },
            {
              q: 'Is quantization (Q4, Q5, Q8) noticeable in creative writing?',
              a: 'Yes, measurably. FP16 (full precision) and Q8 produce near-identical prose. Q5 introduces subtle flattening -- fewer unique adjectives, slightly repetitive phrasing (5-10% of users notice). Q4 creates obvious quality loss: generic descriptions, missing sensory details. For fiction, Q5_K_M is minimum recommended; Q8_K_M is ideal.',
            },
            {
              q: 'Can I fine-tune a local LLM on my own writing style?',
              a: 'Yes. Collect 500-2,000 examples of your prose in .jsonl format (input/output pairs), then use Unsloth or Axolotl libraries on a 24 GB GPU to fine-tune a 13B model in 4-8 hours. Cost: ~$5-15 on cloud GPU. Result: a model that mimics your voice. LoRA (low-rank adaptation) fine-tuning is faster and cheaper than full fine-tuning.',
            },
            {
              q: 'What\'s the difference between creative writing and creative *dialogue* quality?',
              a: 'Dialogue requires tighter word economy and distinct character voices; prose requires sensory richness and narrative flow. Llama 3.3 70B excels at both. Smaller models (7B, 8B) often produce flat, generic dialogue. If dialogue-heavy fiction is your focus, prioritize models with strong instruction-following over prose quality; Mistral 7B dialoguequality rivals Llama 8B.',
            },
            {
              q: 'How much context (tokens) do I need for a full novel outline?',
              a: 'A detailed outline of a 80,000-word novel (plot, characters, chapters, conflicts) is typically 3,000-6,000 tokens. A 128K-context model (Llama 3.2, Phi-4) lets you load the entire outline + previous chapters in one session. For models with 4K-8K context, provide a rolling summary: previous chapter summary + outline of next 3 chapters.',
            },
            {
              q: 'Do I need a GPU to run a creative-writing-optimized local LLM?',
              a: 'No, but it dramatically speeds up generation. A 13B model on CPU (8-core): 10-15 tokens/sec. Same model on a 10GB GPU (RTX 3060): 80-100 tokens/sec. For iterative creative writing (testing variations, rewriting), GPU cuts session time from 2 hours to 15 minutes. CPU is viable for one-shot generation or outlining.',
            },
            {
              q: 'Which local LLM is best for science fiction world-building?',
              a: 'Llama 3.3 70B for consistency across 50+ page outlines. Qwen2.5 14B-32B for technical accuracy (physics, orbital mechanics, chemistry). Fimbulvetr-11B for rich descriptive world details. For budget-conscious setups, Mistral Small 3.1 24B balances world-coherence and resource use. Test all three on a sample world description before committing.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Llama 3.3 Release Announcement](https://www.meta.com/research/) -- Meta\'s official model paper with creative writing benchmark results',
            '[Mistral AI Model Cards](https://mistral.ai/news/mistral-small-3-1/) -- Mistral Small 3.1 specification and quantization guides',
            '[The Fimbulvetr Project](https://huggingface.co/collections/Fimbulvetr) -- Community-maintained creative writing fine-tunes collection',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes in Creative Writing Prompting',
          items: [
            '**Generic prompts for specific goals**: "Write a story" produces generic output. Instead: "Write a 800-word opening scene of a heist. The protagonist discovers the vault is already empty. Show--do not tell--her emotional reaction through physical description."',
            '**Ignoring quantization effects**: Running a 13B model in Q4 and expecting prose quality matching full-precision. Q4 noticeably flattens prose. Use Q5_K_M minimum for creative writing; Q8 for publishable quality.',
            '**Neglecting temperature and sampling params**: Using default temperature (0.7-0.8) for creative tasks. Increase to 0.95-1.1 and set top_p to 0.85-0.9 for more varied, interesting prose. Too high (>1.2) produces incoherence.',
            '**Forgetting context decay**: After 2,000-4,000 tokens in one conversation, even 70B models lose track of earlier character details. Periodically re-introduce character summaries or start fresh sessions.',
            '**Treating local models like cloud models**: Cloud models like Claude 4 excel at long-form planning and multi-step tasks. Local models excel at scene-by-scene generation with strict prompts. Use local for execution, cloud for outlining.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) -- Overall ranking across all use cases',
            '[How Much VRAM Do Local LLMs Need?](/local-llms/how-much-vram-local-llm) -- Calculate VRAM requirements for any model and quantization',
            '[Local LLM Fine-Tuning Guide](/local-llms/fine-tuning-local-llms) -- How to fine-tune models on your writing style',
            '[Ollama vs LM Studio Comparison](/local-llms/ollama-vs-lm-studio) -- Which tool is best for creative workflows',
            '[Temperature and Sampling Parameters Explained](/local-llms/temperature-sampling-local-llm) -- Master creative output control',
          ],
        },
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Mejores LLM locales para escritura creativa en 2026: ficción, poesía y contenido de formato largo',
      seoTitle: 'Mejores LLM locales para escritura creativa 2026',
      intro: 'A partir de abril de 2026, los mejores LLM locales para escritura creativa son Meta Llama 3.3 70B (mejor calidad de prosa), Mistral Small 3.1 24B (mejor calidad con menos de 16 GB de RAM) y fine-tunes de la comunidad como Fimbulvetr y Midnight-Rose (especializados en ficción y roleplay). El rendimiento en escritura creativa no se mide bien con los benchmarks estándar — requiere evaluar la coherencia narrativa, el rango estilístico y el seguimiento de instrucciones en prompts abiertos.',
      metaDescription: '4 mejores LLM locales para escritura creativa: Llama 3.3 70B (mejor prosa), Mistral 24B (mejor 16GB), fine-tunes (voces especializadas). Encuentra el más adecuado.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A partir de abril de 2026, los mejores LLM locales para escritura creativa son Meta Llama 3.3 70B (mejor calidad de prosa), Mistral Small 3.1 24B (mejor calidad con menos de 16 GB de RAM) y fine-tunes de la comunidad como Fimbulvetr.**',
      audience: 'Principiantes ejecutando su primer LLM local en hardware de consumidor',
      dateModified: '2026-04-05',
      readTime: '8 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'LLM local escritura creativa',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Mejores LLM locales para escritura creativa en 2026: ficción, poesía y contenido de formato largo',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'url': 'https://www.promptquorum.com/es/local-llms/best-local-llms-for-creative-writing',
        'inLanguage': 'es',
        'proficiencyLevel': 'Beginner',
        'about': [
          { '@type': 'Thing', 'name': 'IA para escritura creativa' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'Mistral Small 3.1' },
          { '@type': 'Thing', 'name': 'IA para ficción' },
          { '@type': 'Thing', 'name': 'LLM fine-tuned' },
        ],
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': {
          '@type': 'Organization',
          'name': 'PromptQuorum',
          'url': 'https://www.promptquorum.com',
        },
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Cómo mejorar la salida de escritura creativa de un LLM local',
        'inLanguage': 'es',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Especifica el estilo de forma concreta con referencia de autor' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Asigna al modelo un rol de escritor profesional' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Configura la temperatura entre 0.9 y 1.1' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Establece un system prompt persistente para el estilo' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Genera en secciones de 500 palabras para formato largo' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Mejores LLM locales para escritura creativa 2026',
        'inLanguage': 'es',
        'numberOfItems': 4,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Meta Llama 3.3 70B', 'description': 'Mejor calidad de prosa. 40 GB de RAM. Mayor rango estilístico. Coherencia de 1K-3K palabras. ollama run llama3.3:70b' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Mistral Small 3.1 24B', 'description': 'Mejor para 16 GB de RAM. 14 GB con Q4_K_M. Buen seguimiento de instrucciones de estilo. ollama run mistral-small3.1' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Llama 3.1 8B', 'description': 'Mejor para 8 GB de RAM. Confiable para ficción de hasta 500 palabras. ollama run llama3.2' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Fine-tunes de la comunidad (Fimbulvetr, Midnight-Rose)', 'description': 'Entrenamiento especializado en ficción. Mejor voz de personajes. Disponibles en Hugging Face como GGUF.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'es',
        'mainEntity': [
          { '@type': 'Question', 'name': '¿Puede un LLM local reemplazar a un asistente de escritura como Claude o GPT-4o para ficción?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para contenido de formato corto (menos de 500 palabras), un modelo local de 13B+ bien prompeado produce una salida que es difícil de distinguir de los modelos en la nube en pruebas ciegas. Para ficción de formato largo (novelas, cuentos completos), Claude Opus 4.7 y GPT-4o mantienen la coherencia narrativa de forma más fiable en cualquier nivel de hardware. Un modelo local de 70B reduce significativamente esta brecha.' } },
          { '@type': 'Question', 'name': '¿El modelo recuerda partes anteriores de mi historia?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Solo dentro de la ventana de contexto actual. Si el historial de conversación supera el límite de contexto del modelo (generalmente 4K-128K tokens), los detalles anteriores se olvidan. Para proyectos largos, proporciona periódicamente un resumen de la historia al inicio de cada sesión para restablecer el contexto.' } },
          { '@type': 'Question', 'name': '¿Qué modelo local produce la prosa más vívida?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 70B con cuantización Q5_K_M produce los detalles sensoriales más vívidos y un flujo de diálogo natural de forma consistente. Mistral Small 3.1 24B alcanza el 80-85% de esta calidad con 14 GB de RAM frente a 45 GB para el 70B. El fine-tune Fimbulvetr-11B sobre una base de 13B también destaca en riqueza de prosa dentro de presupuestos de recursos más pequeños.' } },
          { '@type': 'Question', 'name': '¿Cómo manejo las inconsistencias en la voz del personaje a lo largo de los capítulos?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Proporciona una ficha de personaje detallada (nombre, antecedentes, patrones de habla, motivaciones) en tu system prompt. Para cada nuevo capítulo, comienza la sesión con: "Estás escribiendo como [Personaje]. Mantén la siguiente voz y perspectiva..." Luego pega la ficha del personaje. Esto mantiene la coherencia para secciones de 500-2,000 palabras.' } },
          { '@type': 'Question', 'name': '¿La cuantización (Q4, Q5, Q8) es perceptible en la escritura creativa?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí, de forma medible. FP16 (precisión completa) y Q8 producen prosa casi idéntica. Q5 introduce un ligero aplanamiento: menos adjetivos únicos, frases ligeramente repetitivas (5-10% de los usuarios lo notan). Q4 crea una pérdida de calidad obvia: descripciones genéricas, falta de detalles sensoriales. Para ficción, Q5_K_M es el mínimo recomendado; Q8_K_M es lo ideal.' } },
          { '@type': 'Question', 'name': '¿Puedo hacer fine-tune de un LLM local con mi propio estilo de escritura?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Recopila 500-2,000 ejemplos de tu prosa en formato .jsonl (pares entrada/salida), luego usa las bibliotecas Unsloth o Axolotl en una GPU de 24 GB para hacer fine-tune de un modelo de 13B en 4-8 horas. Costo: ~$5-15 en GPU en la nube. Resultado: un modelo que imita tu voz. El fine-tuning con LoRA (adaptación de bajo rango) es más rápido y económico que el fine-tuning completo.' } },
          { '@type': 'Question', 'name': '¿Cuál es la diferencia entre la calidad de escritura creativa y la calidad de *diálogo* creativo?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El diálogo requiere una economía de palabras más ajustada y voces de personajes distintas; la prosa requiere riqueza sensorial y flujo narrativo. Llama 3.3 70B destaca en ambos. Los modelos más pequeños (7B, 8B) a menudo producen diálogos planos y genéricos. Si la ficción con mucho diálogo es tu enfoque, prioriza modelos con buen seguimiento de instrucciones sobre la calidad de prosa; la calidad de diálogo de Mistral 7B rivaliza con Llama 8B.' } },
          { '@type': 'Question', 'name': '¿Cuánto contexto (tokens) necesito para un esquema de novela completo?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Un esquema detallado de una novela de 80,000 palabras (trama, personajes, capítulos, conflictos) es típicamente de 3,000-6,000 tokens. Un modelo con contexto de 128K (Llama 3.2, Phi-4) te permite cargar todo el esquema + capítulos anteriores en una sola sesión. Para modelos con contexto de 4K-8K, proporciona un resumen rotativo: resumen del capítulo anterior + esquema de los próximos 3 capítulos.' } },
          { '@type': 'Question', 'name': '¿Necesito una GPU para ejecutar un LLM local optimizado para escritura creativa?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No, pero acelera dramáticamente la generación. Un modelo de 13B en CPU (8 núcleos): 10-15 tokens/seg. El mismo modelo en una GPU de 10GB (RTX 3060): 80-100 tokens/seg. Para escritura creativa iterativa (probar variaciones, reescribir), la GPU reduce el tiempo de sesión de 2 horas a 15 minutos. La CPU es viable para generación de un solo intento o para esquemas.' } },
          { '@type': 'Question', 'name': '¿Qué LLM local es mejor para la construcción de mundos de ciencia ficción?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 70B para consistencia en esquemas de más de 50 páginas. Qwen2.5 14B-32B para precisión técnica (física, mecánica orbital, química). Fimbulvetr-11B para detalles descriptivos ricos del mundo. Para configuraciones con presupuesto ajustado, Mistral Small 3.1 24B equilibra coherencia del mundo y uso de recursos. Prueba los tres con una descripción de muestra antes de decidirte.' } },
          { '@type': 'Question', 'name': '¿Cuál es el mejor LLM local para escritura creativa y ficción?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 70B (40 GB) produce la prosa más rica y el mayor rango estilístico. Para 16 GB de VRAM, Mistral Small 3.1 24B (14 GB) ofrece una fuerte calidad narrativa con buena coherencia en formato largo. Para un presupuesto de 8 GB, Llama 3.1 8B maneja ficción corta (hasta 500 palabras). Los fine-tunes de la comunidad como Fimbulvetr-11B añaden entrenamiento especializado en ficción con presupuestos de recursos más pequeños.' } },
          { '@type': 'Question', 'name': '¿Qué LLM locales funcionan mejor para escribir con solo 8GB de VRAM?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.1 8B Q4_K_M (~6 GB) es la mejor opción para escritura creativa con 8 GB de VRAM. Maneja cuentos cortos (hasta 500 palabras) de forma fiable con prosa natural. Mistral 7B es más rápido pero produce una salida creativa más plana. Qwen2.5 7B destaca en contenido técnico pero carece de fluidez narrativa. Para 8 GB, acepta que los modelos funcionan más lento; calidad creativa > velocidad en este nivel.' } },
        ],
      },
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Cómo evaluar la calidad de escritura creativa', anchor: '#how-to-evaluate' },
        { label: '#1 Llama 3.3 70B -- Mejor calidad de prosa', anchor: '#llama-3-3-70b' },
        { label: '#2 Mistral Small 3.1 24B', anchor: '#mistral-small' },
        { label: '#3 Llama 3.1 8B -- Mejor opción para 8 GB', anchor: '#llama-3-1-8b' },
        { label: '#4 Modelos fine-tuned para ficción', anchor: '#fine-tuned-models' },
        { label: 'Consejos de prompting para escritura creativa', anchor: '#prompting-tips' },
        { label: 'Prompt malo vs prompt bueno', anchor: '#prompt-examples' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Lectura relacionada', anchor: '#related-reading' },
        { label: 'Preguntas frecuentes', anchor: '#faq' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Los benchmarks estándar (MMLU, HumanEval) no miden la calidad de escritura creativa — evalúa los modelos con tus propios prompts de muestra.',
            '**Mejor prosa general**: Llama 3.3 70B — el estilo narrativo en inglés más natural a escala ejecutable localmente.',
            '**Mejor para 16 GB de RAM**: Mistral Small 3.1 24B — fuerte salida creativa, notablemente mejor que los modelos de 7B para narrativa de formato largo.',
            '**Mejor para 8 GB de RAM**: Llama 3.1 8B — mejor seguimiento de instrucciones creativas que Qwen2.5 7B para tareas de ficción en inglés.',
            'Los fine-tunes de la comunidad (Fimbulvetr-11B, Midnight-Rose-70B) entrenados específicamente en ficción creativa superan a los modelos base en tareas narrativas sostenidas.',
          ],
        },
        howToEvaluate: {
          id: 'how-to-evaluate',
          title: '¿Cómo evaluar la calidad de un LLM local para escritura creativa?',
          content: [
            '**A partir de abril de 2026, el rendimiento en escritura creativa no se mide bien con los benchmarks estándar (MMLU, HumanEval).** Para evaluar un modelo para escritura creativa, pruébalo directamente con los tipos de prompts que planeas usar:',
          ],
          items: [
            '**Prueba de continuidad de prosa**: dale al modelo los dos primeros párrafos de una escena y pídele que continúe durante 500 palabras. ¿Mantiene un tono, voz del personaje y lógica narrativa consistentes?',
            '**Prueba de instrucción de estilo**: pide al modelo que escriba un párrafo "al estilo de Raymond Carver" o "con el ritmo de una novela de suspense". ¿Cambia demostrablemente el estilo, o produce una salida genérica?',
            '**Prueba de coherencia en formato largo**: pide un cuento de 1,000 palabras con un giro final específico. ¿El modelo plantea la preparación de forma natural y entrega el desenlace?',
            '**Prueba de diálogo**: escribe una escena con dos personajes con diferentes patrones de habla. ¿Cada personaje suena distinto, o el diálogo parece uniforme?',
          ],
          image: '/images/creative-writing-model-comparison-en.svg',
          imageCaption: 'Comparación de LLM locales para escritura creativa: Llama 3.3 70B (40GB, mejor prosa), Mistral 24B (14GB, nivel 16GB), Llama 3.1 8B (6GB, nivel de entrada).',
        },
        llama33: {
          id: 'llama-3-3-70b',
          title: '#1 Meta Llama 3.3 70B -- Mejor calidad de prosa localmente',
          content: [
            '**Llama 3.3 70B produce la prosa en inglés más natural y variada de cualquier modelo ejecutable localmente.** Su entrenamiento en un corpus de texto en inglés diverso le da el mayor rango estilístico — desde ficción literaria minimalista hasta el ritmo del thriller de género. La coherencia en formato largo (1,000-3,000 palabras) es notablemente mejor que cualquier modelo de 7B o 13B.',
            'La limitación es el hardware: 40 GB de RAM con Q4_K_M. Para sesiones de escritura creativa (en lugar de generación por lotes), la velocidad de generación más lenta (8-15 tok/seg en CPU) es tolerable. En Apple M2 Ultra o M5 Max con 64+ GB de memoria unificada, la generación alcanza 20-35 tok/seg.',
          ],
          rows: [
            { 'Especificación': 'Mejor para', 'Valor': 'Ficción de formato largo, prosa rica' },
            { 'Especificación': 'RAM requerida (Q4_K_M)', 'Valor': '~40 GB' },
            { 'Especificación': 'Rango de estilo de prosa', 'Valor': 'El más amplio de los modelos locales' },
            { 'Especificación': 'Coherencia en formato largo', 'Valor': 'Fuerte (escenas de 1K-3K palabras)' },
            { 'Especificación': 'Comando de Ollama', 'Valor': 'ollama run llama3.3:70b' },
          ],
          columns: ['Especificación', 'Valor'],
          image: '/images/creative-writing-quality-spectrum-en.svg',
          imageCaption: 'Espectro de calidad de escritura creativa con LLM locales: 8B maneja historias de 500 palabras, 24B hasta 2K palabras, 70B sostiene escenas de 1K-3K palabras con el mayor rango estilístico.',
        },
        mistralSmall: {
          id: 'mistral-small',
          title: '#2 Mistral Small 3.1 24B -- Mejor escritura creativa para 16 GB de RAM',
          content: [
            '**Mistral Small 3.1 24B ofrece una calidad de escritura creativa notablemente superior a cualquier modelo de 7B, mientras cabe en 14 GB de RAM.** Su seguimiento de instrucciones es lo suficientemente preciso como para manejar especificaciones de estilo detalladas ("escribe en segunda persona, tiempo presente, con frases cortas y directas") sin desviarse después de unos pocos párrafos.',
            'Para los usuarios que quieren una capacidad narrativa genuina de formato largo sin una máquina de clase workstation, Mistral Small 3.1 es la elección práctica.',
          ],
          rows: [
            { 'Especificación': 'Mejor para', 'Valor': 'Narrativa de formato largo, instrucción de estilo' },
            { 'Especificación': 'RAM requerida (Q4_K_M)', 'Valor': '~14 GB' },
            { 'Especificación': 'Rango de estilo de prosa', 'Valor': 'Fuerte — notablemente superior a la clase 7B' },
            { 'Especificación': 'Coherencia en formato largo', 'Valor': 'Buena (escenas de 500-1,500 palabras)' },
            { 'Especificación': 'Comando de Ollama', 'Valor': 'ollama run mistral-small3.1' },
          ],
          columns: ['Especificación', 'Valor'],
        },
        llama318: {
          id: 'llama-3-1-8b',
          title: '#3 Llama 3.1 8B -- Mejor escritura creativa para 8 GB de RAM',
          content: [
            '**En el nivel de 8 GB de RAM, Llama 3.1 8B supera a Qwen2.5 7B y Mistral 7B para escritura creativa en inglés.** Qwen2.5 es más fuerte en codificación y tareas estructuradas, pero su generación de prosa en inglés es menos fluida para propósitos narrativos.',
            'Llama 3.1 8B maneja ficción corta (hasta 500 palabras) de forma fiable. Para historias de más de 1,000 palabras, la consistencia de calidad se degrada — el modelo tiende a desviarse de los detalles narrativos establecidos. Esta es una limitación fundamental de los modelos de escala 8B para el trabajo creativo de formato largo.',
          ],
        },
        fineTuned: {
          id: 'fine-tuned-models',
          title: '#4 Fine-tunes de la comunidad para ficción y roleplay',
          content: [
            '**La comunidad de LLM local mantiene fine-tunes especializados entrenados en corpus de ficción, que superan a los modelos base en tareas narrativas sostenidas.** Están disponibles en Hugging Face y se pueden cargar en LM Studio o Ollama (a través de Modelfiles personalizados):',
          ],
          items: [
            '**Fimbulvetr-11B** — fine-tuned en prosa de fantasía y ciencia ficción de alta calidad. Produce detalles sensoriales más vívidos y una voz de personaje más consistente que Llama 3.1 8B base.',
            '**Midnight-Rose-70B** — un fine-tune de Llama 3.3 70B enfocado en escritura creativa y escenarios de roleplay. Mejor coherencia narrativa de formato largo que el modelo base.',
            '**Noromaid / variantes de Openhermes** — fine-tunes de la comunidad enfocados en roleplay conversacional. Menor calidad de prosa que Fimbulvetr pero más receptivos a la dirección del personaje.',
            'Descárgalos de Hugging Face (busca "creative writing GGUF") y cárgalos en el navegador de modelos de LM Studio o mediante `ollama create` con un Modelfile personalizado.',
          ],
        },
        promptingTips: {
          id: 'prompting-tips',
          title: 'Consejos de prompting que mejoran la escritura creativa con LLM locales',
          items: [
            '**Especifica el estilo de forma concreta**: "Escribe al estilo de Cormac McCarthy — diálogo escaso, oraciones descriptivas largas, sin comillas" supera a "escribe ficción literaria."',
            '**Dale al modelo un rol**: "Eres un novelista profesional. Continúa esta escena sin resumir, solo mostrando." El seguimiento de instrucciones mejora cuando el modelo tiene una identidad definida.',
            '**Configura la temperatura entre 0.9 y 1.1**: las tareas creativas se benefician de una temperatura más alta (más aleatoriedad). La temperatura predeterminada de Ollama es 0.8; el predeterminado de LM Studio es 0.7. Auméntala a través del deslizador de parámetros.',
            '**Usa un system prompt**: establece una instrucción de estilo persistente a nivel de sesión. "Estás escribiendo una novela de terror gótico. Mantén una prosa oscura y atmosférica en todas las respuestas."',
            '**Divide las tareas largas en secciones**: para un capítulo de 3,000 palabras, genéralo en secciones de 500 palabras. Esto mantiene al modelo dentro de su rango de coherencia fiable.',
            '**Compara salidas locales y en la nube**: usa [PromptQuorum](/) para enviar el mismo prompt creativo a tu modelo local de Ollama y a modelos en la nube simultáneamente — útil para calibrar cuándo la calidad local es suficiente.',
          ],
          image: '/images/creative-writing-temperature-guide-en.svg',
          imageCaption: 'Guía de temperatura de LLM para escritura creativa: 0.7 predeterminado es demasiado plano, 0.9-1.05 óptimo para ficción, por encima de 1.1 produce salida incoherente.',
        },
        promptExamples: {
          id: 'prompt-examples',
          title: 'Prompt malo vs prompt bueno',
          items: [
            '❌ "Escribe una historia de fantasía" → ✅ "Escribe una escena de fantasía de 500 palabras donde un contrabandista negocia con un dragón sobre artefactos antiguos. Usa detalles sensoriales y haz que el diálogo sea tenso."',
            '❌ "Escribe algo interesante" → ✅ "Escribe una escena de apertura de 300 palabras de un robo que sale mal. El protagonista descubre que su compañero lo traicionó a mitad de la misión. Usa oraciones cortas y directas para igualar el ritmo."',
            '❌ "Escribe un misterio" → ✅ "Continúa esta escena de detective: [texto anterior]. El detective se da cuenta de que el sospechoso está mintiendo por un detalle. Muestra — no digas — cómo ella descubre la inconsistencia."',
            '❌ "Hazlo más interesante" → ✅ "Reescribe el párrafo anterior para que parezca más noir: diálogo escaso, monólogo interior cínico, detalles sensoriales específicos (sonidos, olores, texturas)."',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Escritura creativa con LLM locales: Contexto regional',
          content: [
            '**Europa (GDPR y residencia de datos)**: El GDPR requiere que los datos personales sensibles (historias de fondo de personajes, contenido ficticio para publicación) permanezcan dentro de las fronteras de la UE cuando se procesan. Ejecutar modelos locales en hardware con sede en la UE garantiza el cumplimiento. LM Studio y Ollama desplegados en servidores alemanes, franceses o austriacos cumplen los acuerdos del procesador del Artículo 28 sin dependencia de la nube.',
            '**Japón (Localización y codificación de caracteres)**: La escritura creativa en japonés usa scripts mixtos (hiragana, katakana, kanji), puntuación compleja y reglas de espaciado sutiles. Los modelos con fine-tuning en literatura japonesa manejan estos patrones mejor que los modelos optimizados para inglés. LM Studio admite UTF-8 y Unicode; Ollama funciona con modelos japoneses como Shisa-7B-v1 y Weblab-10B.',
            '**China (Política de contenido y acceso a modelos)**: China continental restringe los servicios de IA en la nube y requiere cumplimiento de moderación de contenido. Ejecutar localmente con Qwen2.5 o Qwen1.5 evita las restricciones geopolíticas. El despliegue local es adecuado para editores chinos, desarrolladores de juegos y empresas que gestionan IP de historias propietarias.',
          ],
        },
        faqSection: {
          id: 'faq',
          faqs: [
            {
              q: '¿Puede un LLM local reemplazar a un asistente de escritura como Claude o GPT-4o para ficción?',
              a: 'Para contenido de formato corto (menos de 500 palabras), un modelo local de 13B+ bien prompeado produce una salida que es difícil de distinguir de los modelos en la nube en pruebas ciegas. Para ficción de formato largo (novelas, cuentos completos), Claude Opus 4.7 y GPT-4o mantienen la coherencia narrativa de forma más fiable en cualquier nivel de hardware. Un modelo local de 70B reduce significativamente esta brecha.',
            },
            {
              q: '¿El modelo recuerda partes anteriores de mi historia?',
              a: 'Solo dentro de la ventana de contexto actual. Si el historial de conversación supera el límite de contexto del modelo (generalmente 4K-128K tokens), los detalles anteriores se olvidan. Para proyectos largos, proporciona periódicamente un resumen de la historia al inicio de cada sesión para restablecer el contexto.',
            },
            {
              q: '¿Qué modelo local produce la prosa más vívida?',
              a: 'Llama 3.3 70B con cuantización Q5_K_M produce los detalles sensoriales más vívidos y un flujo de diálogo natural de forma consistente. Mistral Small 3.1 24B alcanza el 80-85% de esta calidad con 14 GB de RAM frente a 45 GB para el 70B. El fine-tune Fimbulvetr-11B sobre una base de 13B también destaca en riqueza de prosa dentro de presupuestos de recursos más pequeños.',
            },
            {
              q: '¿Cómo manejo las inconsistencias en la voz del personaje a lo largo de los capítulos?',
              a: 'Proporciona una ficha de personaje detallada (nombre, antecedentes, patrones de habla, motivaciones) en tu system prompt. Para cada nuevo capítulo, comienza la sesión con: "Estás escribiendo como [Personaje]. Mantén la siguiente voz y perspectiva..." Luego pega la ficha del personaje. Esto mantiene la coherencia para secciones de 500-2,000 palabras.',
            },
            {
              q: '¿La cuantización (Q4, Q5, Q8) es perceptible en la escritura creativa?',
              a: 'Sí, de forma medible. FP16 (precisión completa) y Q8 producen prosa casi idéntica. Q5 introduce un ligero aplanamiento — menos adjetivos únicos, frases ligeramente repetitivas (5-10% de los usuarios lo notan). Q4 crea una pérdida de calidad obvia: descripciones genéricas, falta de detalles sensoriales. Para ficción, Q5_K_M es el mínimo recomendado; Q8_K_M es lo ideal.',
            },
            {
              q: '¿Puedo hacer fine-tune de un LLM local con mi propio estilo de escritura?',
              a: 'Sí. Recopila 500-2,000 ejemplos de tu prosa en formato .jsonl (pares entrada/salida), luego usa las bibliotecas Unsloth o Axolotl en una GPU de 24 GB para hacer fine-tune de un modelo de 13B en 4-8 horas. Costo: ~$5-15 en GPU en la nube. Resultado: un modelo que imita tu voz. El fine-tuning con LoRA (adaptación de bajo rango) es más rápido y económico que el fine-tuning completo.',
            },
            {
              q: '¿Cuál es la diferencia entre la calidad de escritura creativa y la calidad de *diálogo* creativo?',
              a: 'El diálogo requiere una economía de palabras más ajustada y voces de personajes distintas; la prosa requiere riqueza sensorial y flujo narrativo. Llama 3.3 70B destaca en ambos. Los modelos más pequeños (7B, 8B) a menudo producen diálogos planos y genéricos. Si la ficción con mucho diálogo es tu enfoque, prioriza modelos con buen seguimiento de instrucciones sobre la calidad de prosa; la calidad de diálogo de Mistral 7B rivaliza con Llama 8B.',
            },
            {
              q: '¿Cuánto contexto (tokens) necesito para un esquema de novela completo?',
              a: 'Un esquema detallado de una novela de 80,000 palabras (trama, personajes, capítulos, conflictos) es típicamente de 3,000-6,000 tokens. Un modelo con contexto de 128K (Llama 3.2, Phi-4) te permite cargar todo el esquema + capítulos anteriores en una sola sesión. Para modelos con contexto de 4K-8K, proporciona un resumen rotativo: resumen del capítulo anterior + esquema de los próximos 3 capítulos.',
            },
            {
              q: '¿Necesito una GPU para ejecutar un LLM local optimizado para escritura creativa?',
              a: 'No, pero acelera dramáticamente la generación. Un modelo de 13B en CPU (8 núcleos): 10-15 tokens/seg. El mismo modelo en una GPU de 10GB (RTX 3060): 80-100 tokens/seg. Para escritura creativa iterativa (probar variaciones, reescribir), la GPU reduce el tiempo de sesión de 2 horas a 15 minutos. La CPU es viable para generación de un solo intento o para esquemas.',
            },
            {
              q: '¿Qué LLM local es mejor para la construcción de mundos de ciencia ficción?',
              a: 'Llama 3.3 70B para consistencia en esquemas de más de 50 páginas. Qwen2.5 14B-32B para precisión técnica (física, mecánica orbital, química). Fimbulvetr-11B para detalles descriptivos ricos del mundo. Para configuraciones con presupuesto ajustado, Mistral Small 3.1 24B equilibra coherencia del mundo y uso de recursos. Prueba los tres con una descripción de muestra antes de decidirte.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Anuncio de lanzamiento de Llama 3.3](https://www.meta.com/research/) — Artículo oficial del modelo de Meta con resultados de benchmarks de escritura creativa',
            '[Tarjetas de modelo de Mistral AI](https://mistral.ai/news/mistral-small-3-1/) — Especificación de Mistral Small 3.1 y guías de cuantización',
            '[El proyecto Fimbulvetr](https://huggingface.co/collections/Fimbulvetr) — Colección de fine-tunes de escritura creativa mantenida por la comunidad',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Errores comunes en el prompting para escritura creativa',
          items: [
            '**Prompts genéricos para objetivos específicos**: "Escribe una historia" produce salida genérica. En su lugar: "Escribe una escena de apertura de 800 palabras de un robo. El protagonista descubre que la cámara acorazada ya está vacía. Muestra — no digas — su reacción emocional a través de la descripción física."',
            '**Ignorar los efectos de la cuantización**: ejecutar un modelo de 13B en Q4 y esperar una calidad de prosa equivalente a la precisión completa. Q4 aplana la prosa de forma notable. Usa Q5_K_M como mínimo para escritura creativa; Q8 para calidad publicable.',
            '**Descuidar la temperatura y los parámetros de muestreo**: usar la temperatura predeterminada (0.7-0.8) para tareas creativas. Auméntala a 0.95-1.1 y configura top_p a 0.85-0.9 para una prosa más variada e interesante. Demasiado alto (>1.2) produce incoherencia.',
            '**Olvidar la degradación del contexto**: después de 2,000-4,000 tokens en una conversación, incluso los modelos de 70B pierden el rastro de los detalles de los personajes anteriores. Reintroduce periódicamente resúmenes de personajes o comienza sesiones nuevas.',
            '**Tratar los modelos locales como modelos en la nube**: los modelos en la nube como Claude 4 destacan en planificación de formato largo y tareas de múltiples pasos. Los modelos locales destacan en la generación escena por escena con prompts estrictos. Usa locales para la ejecución, en la nube para los esquemas.',
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectura relacionada',
          items: [
            '[Mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) — Ranking general en todos los casos de uso',
            '[¿Cuánta VRAM necesitan los LLM locales?](/es/local-llms/how-much-vram-local-llm) — Calcula los requisitos de VRAM para cualquier modelo y cuantización',
            '[Guía de fine-tuning de LLM locales](/es/local-llms/fine-tuning-local-llms) — Cómo hacer fine-tune de modelos con tu estilo de escritura',
            '[Comparación de Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) — Qué herramienta es mejor para flujos de trabajo creativos',
            '[Temperatura y parámetros de muestreo explicados](/es/local-llms/temperature-sampling-local-llm) — Domina el control de la salida creativa',
          ],
        },
      },
    },
    de: {
      theme: 'Best Models',
      title: 'Beste lokale LLMs für kreatives Schreiben 2026: Fiktion, Poesie und Long-Form-Content',
      seoTitle: 'Beste lokale LLMs für kreatives Schreiben',
      intro: 'Die besten lokalen LLMs für kreatives Schreiben 2026 sind Meta Llama 3.3 70B (beste Prosaqualität), Mistral Small 3.1 24B (beste Qualität unter 16 GB RAM) und spezialisierte Fine-Tunes wie Fimbulvetr und Midnight-Rose (optimiert für Fiktion und Roleplay). Die Qualität des kreativen Schreibens wird durch Standard-Benchmarks nicht ausreichend gemessen -- es erfordert die Bewertung von narrativer Kohärenz, stilistischer Vielfalt und Instruktionsbefolge bei offenen Prompts.',
      metaDescription: 'Top 5 lokale LLMs für Fiktion, Poesie & Long-Form-Texte 2026. Llama 3.3 70B beste Prosa, Mistral 24B beste 16GB, Fine-Tunes für Roleplay. Nach narrativer Kohärenz bewertet.',
      publishDate: '2026-04-04',
      readTime: '8 min Lesedauer',
      educationalLevel: 'Anfänger',
      primaryTerm: 'lokales LLM kreatives Schreiben',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Wie Sie die Qualität bewerten', anchor: '#how-to-evaluate' },
        { label: '#1 Llama 3.3 70B -- beste Prosaqualität', anchor: '#llama-3-3-70b' },
        { label: '#2 Mistral Small 3.1 24B', anchor: '#mistral-small' },
        { label: '#3 Llama 3.1 8B -- beste 8-GB-Option', anchor: '#llama-3-1-8b' },
        { label: '#4 Community Fine-Tunes', anchor: '#fine-tuned-models' },
        { label: 'Prompting-Tipps für kreatives Schreiben', anchor: '#prompting-tips' },
        { label: 'Häufig gestellte Fragen', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Standard-Benchmarks (MMLU, HumanEval) messen nicht die Qualität des kreativen Schreibens -- testen Sie Modelle direkt mit Ihren Prompts.',
            '**Beste Prosa insgesamt**: Llama 3.3 70B -- natürlichster englischer Narrativ-Stil im lokalen Bereich.',
            '**Beste für 16 GB RAM**: Mistral Small 3.1 24B -- starke kreative Ausgabe, deutlich besser als 7B-Modelle für Long-Form-Narrative.',
            '**Beste für 8 GB RAM**: Llama 3.1 8B -- bessere kreative Instruktionsbefolge als Qwen2.5 7B für englische Erzählaufgaben.',
            'Community Fine-Tunes (Fimbulvetr-11B, Midnight-Rose-70B) spezialisiert auf kreative Fiktion übertreffen Basis-Modelle bei längeren Erzählaufgaben.',
          ],
        },
        howToEvaluate: {
          title: 'Wie bewerten Sie die Qualität lokaler LLMs für kreatives Schreiben?',
          content: [
            '**Objektive Benchmarks messen Wissen und Reasoning, nicht kreative Qualität.** Um ein Modell für kreatives Schreiben zu bewerten, testen Sie es direkt mit den Prompts, die Sie verwenden möchten:',
          ],
          items: [
            '**Prosa-Kontinuitäts-Test**: Geben Sie dem Modell die ersten zwei Absätze einer Szene und bitten Sie es, 500 Wörter fortzusetzen. Behält es konsistente Ton, Charakterstimme und narrative Logik bei?',
            '**Stil-Instruktions-Test**: Bitten Sie das Modell, einen Absatz "im Stil von Cormac McCarthy" oder "mit der Geschwindigkeit eines Thriller-Romans" zu schreiben. Verschiebt es demonstrierbar den Stil oder produziert es generische Ausgabe?',
            '**Long-Form-Kohärenz-Test**: Bitten Sie um eine 1.000-Wort-Kurzgeschichte mit spezifischem Twist-Ending. Pflanzt das Modell das Setup natürlich und liefert es die Auflösung?',
            '**Dialog-Test**: Schreiben Sie eine Szene mit zwei Charakteren mit unterschiedlichen Sprechmustern. Klingt jeder Charakter unterschiedlich oder wirkt der Dialog einheitlich?',
          ],
          image: '/images/creative-writing-model-comparison-de.svg',
          imageCaption: 'Kreatives Schreiben LLM-Vergleich: Llama 3.3 70B (40GB, beste Prosa), Mistral 24B (14GB, 16GB-Tier), Llama 3.1 8B (6GB, Einstieg).',
        },
        llama33: {
          title: '#1 Meta Llama 3.3 70B -- beste Prosaqualität im lokalen Bereich',
          content: [
            '**Llama 3.3 70B produziert die natürlichste und vielfältigste englische Prosa aller lokal ausführbaren Modelle.** Das Training auf einem vielfältigen englischsprachigen Textkorpus gibt ihm die breiteste stilistische Spanne -- von minimalistischer literarischer Fiktion bis zu Thriller-Pacing. Long-Form-Kohärenz (1.000-3.000 Wörter) ist deutlich besser als jedes 7B- oder 13B-Modell.',
            'Die Einschränkung ist Hardware: 40 GB RAM bei Q4_K_M. Für kreative Schreib-Sitzungen (nicht Batch-Generierung) ist die langsamere Generierungsgeschwindigkeit (8-15 Tokens/Sek. auf CPU) tolerierbar. Auf Apple M2 Ultra oder M5 Max mit 64+ GB Unified Memory erreicht die Generierung 20-35 Tokens/Sek.',
          ],
          rows: [
            { 'Spec': 'Beste für', 'Value': 'Längere Fiktion, reichhaltige Prosa' },
            { 'Spec': 'RAM erforderlich (Q4_K_M)', 'Value': '~40 GB' },
            { 'Spec': 'Prosa-Stilvielfalt', 'Value': 'Breiteste aller lokalen Modelle' },
            { 'Spec': 'Long-Form-Kohärenz', 'Value': 'Stark (1K-3K Wort-Szenen)' },
            { 'Spec': 'Ollama-Befehl', 'Value': 'ollama run llama3.3:70b' },
          ],
          columns: ['Spec', 'Value'],
          image: '/images/creative-writing-quality-spectrum-de.svg',
          imageCaption: 'Qualitätsspektrum für kreatives Schreiben: 8B bis 500 Wörter, 24B bis 2K Wörter, 70B hält 1K-3K Wort-Szenen mit breitstem Stilbereich.',
        },
        mistralSmall: {
          title: '#2 Mistral Small 3.1 24B -- beste kreative Schreibqualität für 16 GB RAM',
          content: [
            '**Mistral Small 3.1 24B liefert kreative Schreibqualität, die deutlich über jedem 7B-Modell liegt, während es in 14 GB RAM passt.** Die Instruktionsbefolge ist präzise genug, um detaillierte Spezifikationen zu handhaben ("schreiben Sie in zweiter Person, Präsens, mit kurzen, prägnanten Sätzen"), ohne nach wenigen Absätzen abzudriften.',
            'Für Benutzer, die echte Long-Form-Narrative-Fähigkeit ohne Workstation-Klasse-Hardware wünschen, ist Mistral Small 3.1 die praktische Wahl.',
          ],
        },
        llama318: {
          title: '#3 Llama 3.1 8B -- beste kreative Schreibqualität für 8 GB RAM',
          content: [
            '**Im 8-GB-RAM-Bereich übertrifft Llama 3.1 8B Qwen2.5 7B und Mistral 7B für englisches kreatives Schreiben.** Qwen2.5 ist stärker bei Coding und strukturierten Aufgaben, aber seine englische Prosa-Generierung ist weniger fließend für Erzählzwecke.',
            'Llama 3.1 8B verarbeitet kurze Fiktion (bis zu 500 Wörter) zuverlässig. Bei Geschichten über 1.000 Wörter sinkt die Qualitätskonsistenz -- das Modell neigt dazu, von etablierten narrativen Details abzuweichen. Dies ist eine grundlegende Einschränkung von 8B-Modellen für längere kreative Werke.',
          ],
        },
        fineTuned: {
          title: '#4 Community Fine-Tunes für Fiktion und Roleplay',
          content: [
            '**Die lokale LLM-Community verwaltet spezialisierte Fine-Tunes, die auf Fiktionskorpora trainiert sind und Basis-Modelle bei längeren Erzählaufgaben übertreffen.** Diese sind auf Hugging Face verfügbar und können in LM Studio oder Ollama (über benutzerdefinierte Modelfiles) geladen werden:',
          ],
          items: [
            '**Fimbulvetr-11B** -- Fine-tuned auf hochwertige Fantasy- und Science-Fiction-Prosa. Erzeugt mehr vivide sensorische Details und konsistente Charakterstimme als Basis-Llama 3.1 8B.',
            '**Midnight-Rose-70B** -- ein Llama 3.3 70B Fine-Tune fokussiert auf kreatives Schreiben und Roleplay-Szenarien. Bessere Long-Form-Narrative-Kohärenz als das Basis-Modell.',
            '**Noromaid / Openhermes-Varianten** -- Community Fine-Tunes fokussiert auf Konversations-Roleplay. Niedrigere Prosaqualität als Fimbulvetr, aber responsiver gegenüber Charakteranweisung.',
            'Laden Sie diese von Hugging Face herunter (suchen Sie nach "creative writing GGUF") und laden Sie sie in LM Studio\'s Modellbrowser oder über `ollama create` mit einem benutzerdefinierten Modelfile.',
          ],
        },
        promptingTips: {
          title: 'Prompting-Tipps zur Verbesserung des kreativen Schreibens mit lokalen LLMs',
          items: [
            '**Stil konkret spezifizieren**: "Schreiben Sie im Stil von Cormac McCarthy -- knappe Dialoge, lange beschreibende Sätze, keine Anführungszeichen" übertrifft "schreiben Sie literarische Fiktion."',
            '**Geben Sie dem Modell eine Rolle**: "Sie sind ein professioneller Novelist. Setzen Sie diese Szene fort, ohne zusammenzufassen, nur zeigend." Die Instruktionsbefolge verbessert sich, wenn das Modell eine definierte Identität hat.',
            '**Stellen Sie die Temperatur auf 0,9-1,1**: kreative Aufgaben profitieren von höherer Temperatur (mehr Zufälligkeit). Standard-Ollama-Temperatur ist 0,8; LM-Studio-Standard ist 0,7. Erhöhen Sie über den Parameterschieber.',
            '**Verwenden Sie einen System-Prompt**: setzen Sie eine persistente Stilanweisung auf der Sitzungsebene. "Sie schreiben einen Gothic-Horror-Roman. Behalten Sie während aller Antworten düstere, atmosphärische Prosa bei."',
            '**Zerlegen Sie lange Aufgaben in Abschnitte**: für ein 3.000-Wort-Kapitel generieren Sie es in 500-Wort-Abschnitten. Dies hält das Modell in seinem zuverlässigen Kohärenzbereich.',
            '**Vergleichen Sie lokale und Cloud-Ausgaben**: verwenden Sie [PromptQuorum](/) um denselben kreativen Prompt an Ihr lokales Ollama-Modell und Cloud-Modelle gleichzeitig zu senden -- nützlich zum Kalibrieren, wenn lokale Qualität ausreichend ist.',
          ],
          image: '/images/creative-writing-temperature-guide-de.svg',
          imageCaption: 'Temperatur-Leitfaden für kreatives Schreiben: 0,7 Standard zu flach, 0,9-1,05 optimal für Fiktion, über 1,1 inkohärente Ausgabe.',
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen zu lokalen LLMs für kreatives Schreiben',
          faqs: [
            {
              q: 'Kann ein lokales LLM einen Schreib-Assistenten wie Claude oder GPT-4o für Fiktion ersetzen?',
              a: 'Für Kurztexte (unter 500 Wörtern) erzeugt ein gut gepromptetes 13B+-Modell lokaler Ausgabe, die in blinden Tests schwer vom Cloud-Modellen zu unterscheiden ist. Für Long-Form-Fiktion (Romane, vollständige Kurzgeschichten) bewahren Claude Opus 4.7 und GPT-4o die Narrative-Kohärenz zuverlässiger auf jeder Hardware-Ebene. Ein 70B-Modell schließt diese Lücke erheblich.',
            },
            {
              q: 'Erinnert sich das Modell an frühere Teile meiner Geschichte?',
              a: 'Nur innerhalb des aktuellen Context-Fensters. Wenn die Gesprächshistorie das Context-Limit des Modells überschreitet (typisch 4K-128K Tokens), werden frühere Details vergessen. Für lange Projekte stellen Sie regelmäßig eine Geschichtszusammenfassung zu Beginn jeder Sitzung bereit, um den Context wiederherzustellen.',
            },
            {
              q: 'Wie konform ist das Verwenden von lokalen LLMs mit deutschem Datenschutz (DSGVO)?',
              a: 'Lokale LLMs, die auf Ihrer eigenen Hardware laufen, speichern Daten nicht auf Servern von Drittanbietern, daher sind Sie nicht dem DSGVO-Daten-Transit unterworfen. Cloud-Modelle wie Claude oder GPT-4o erfordern möglicherweise Datenverarbeitungsverträge (Datenschutzvorkehrungen), da Ihre Eingaben auf fremden Servern verarbeitet werden. Für DSGVO-sensible Schreibprojekte sind lokale Modelle vorzuziehen.',
            },
            {
              q: 'Kann ich lokale LLMs für kommerzielle Veröffentlichungen verwenden?',
              a: 'Llama 3.3 70B, Mistral Small 3.1 und die meisten anderen Community-Modelle sind unter Lizenzen wie Llama Community License lizenziert, die kommerzielle Nutzung zulassen, wenn Sie eine Sicherheitsbereitstellung für großflächige Nutzung durchführen. Fine-Tunes wie Fimbulvetr und Midnight-Rose folgen denselben Lizenzierungsbedingungen. Überprüfen Sie immer die Modellkarte vor der Veröffentlichung.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '**Neural Story Generation Papers** -- Akademische Forschung zu narrativer Kohärenz',
            '**Mistral 7B für kreative Aufgaben** -- Modell-Dokumentation und kreative Benchmarks',
            '**Llama 3.1 8B Creative Benchmark** -- Bewertung bei kreativen Schreib-Aufgaben',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler beim Prompting für kreatives Schreiben',
          items: [
            'Verwendung von Code-optimierten Modellen für kreative Aufgaben -- kreative Modelle werden unterschiedlich trainiert.',
            'Erwartung, dass lokale Modelle mehrbändige Narrative erzeugen -- sie sind bei Kurztexten am besten.',
            'Nicht Anpassung von Temperatur- und Sampling-Parametern für kreative Ausgabe.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Lektüre',
          items: [
            '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) -- Gesamtranking über alle Anwendungsfälle',
            '[Wie Sie lokale LLMs auf einem Laptop ausführen](/de/local-llms/local-llm-on-laptop) -- Optimierung für Schriftsteller',
            '[Beste Anfänger-Modelle](/de/local-llms/best-beginner-local-llm-models) -- Grundmodelle für kreatives Schreiben',
            '[Lokale LLM-Einschränkungen](/de/local-llms/local-llm-limitations) -- Verständnis von Modellgrenzen',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Beste lokale LLMs für kreatives Schreiben 2026',
        'url': 'https://www.promptquorum.com/de/local-llms/best-local-llms-for-creative-writing',
        'inLanguage': 'de',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'proficiencyLevel': 'Anfänger',
        'mainEntity': {
          '@type': 'FAQPage',
          'inLanguage': 'de',
          'mainEntity': [],
        },
      },
    },
    fr: {
      theme: 'Best Models',
      title: 'Meilleurs LLMs locaux pour écriture créative 2026: fiction, poésie et contenu long format',
      seoTitle: 'Meilleurs LLMs locaux pour écriture créative',
      intro: 'Les meilleurs LLMs locaux pour l\'écriture créative en 2026 sont Meta Llama 3.3 70B (meilleure qualité de prose), Mistral Small 3.1 24B (meilleure qualité sous 16 GB RAM) et des fine-tunes communautaires comme Fimbulvetr et Midnight-Rose (spécialisés pour la fiction et le roleplay). La qualité de l\'écriture créative n\'est pas bien mesurée par les benchmarks standard -- elle nécessite d\'évaluer la cohérence narrative, la variété stylistique et le suivi d\'instructions sur des prompts ouverts.',
      metaDescription: 'Top 5 LLMs locaux fiction, poésie, long format 2026. Llama 3.3 70B prose, Mistral 24B 16GB, fine-tunes roleplay. Évalués cohérence narrative. Gratuit, avril 2026.',
      publishDate: '2026-04-04',
      readTime: '8 min de lecture',
      educationalLevel: 'Débutant',
      primaryTerm: 'LLM local écriture créative',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Comment évaluer la qualité', anchor: '#how-to-evaluate' },
        { label: '#1 Llama 3.3 70B -- meilleure prose', anchor: '#llama-3-3-70b' },
        { label: '#2 Mistral Small 3.1 24B', anchor: '#mistral-small' },
        { label: '#3 Llama 3.1 8B -- meilleure option 8 GB', anchor: '#llama-3-1-8b' },
        { label: '#4 Fine-tunes communautaires', anchor: '#fine-tuned-models' },
        { label: 'Conseils pour prompts créatifs', anchor: '#prompting-tips' },
        { label: 'Questions fréquentes', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Les benchmarks standard ne mesurent pas la qualité créative -- testez directement avec vos propres prompts.',
            '**Meilleure prose**: Llama 3.3 70B -- style narratif anglais le plus naturel à l\'échelle locale.',
            '**Meilleur 16 GB RAM**: Mistral Small 3.1 24B -- sortie créative forte, nettement supérieur aux modèles 7B.',
            '**Meilleur 8 GB RAM**: Llama 3.1 8B -- meilleur suivi d\'instructions créatives que Qwen2.5 7B.',
            'Les fine-tunes spécialisés surpassent les modèles de base sur les tâches narratives longues.',
          ],
        },
        howToEvaluate: {
          title: 'Comment évaluer la qualité des LLMs locaux',
          content: [
            '**Les benchmarks objectifs mesurent les connaissances, pas la créativité.** Testez directement avec vos prompts :',
          ],
          items: [
            '**Test continuité**: donnez les deux premiers paragraphes d\'une scène, demandez 500 mots. Ton cohérent?',
            '**Test style**: "écrivez dans le style de McCarthy" vs "écrivez de la littérature". Adapte-t-il le style?',
            '**Test cohérence long format**: demandez une histoire 1000 mots avec fin surprise. Logique narrative solide?',
            '**Test dialogue**: deux personnages différents. Voix distinctes ou uniformes?',
          ],
          image: '/images/creative-writing-model-comparison-fr.svg',
          imageCaption: 'Comparaison LLMs créatifs: Llama 3.3 70B (40GB, meilleure prose), Mistral 24B (14GB, niveau 16GB), Llama 3.1 8B (6GB, entrée).',
        },
        llama33: {
          title: '#1 Llama 3.3 70B -- meilleure prose localement',
          content: [
            '**Llama 3.3 70B produit la prose anglaise la plus naturelle.** Entraîné sur corpus textuels divers, range stylistique très large. Cohérence long format (1K-3K mots) supérieure aux modèles 7B/13B.',
            'Contrainte hardware : 40 GB RAM (Q4_K_M). Pour sessions créatives, vitesse génération lente (8-15 tok/sec CPU) acceptable. Apple M2 Ultra/M5 Max : 20-35 tok/sec.',
          ],
          rows: [
            { 'Spec': 'Meilleur pour', 'Value': 'Fiction long format, prose riche' },
            { 'Spec': 'RAM (Q4_K_M)', 'Value': '~40 GB' },
            { 'Spec': 'Plage stylistique', 'Value': 'Plus large des modèles locaux' },
            { 'Spec': 'Cohérence long', 'Value': 'Forte (1K-3K mots)' },
            { 'Spec': 'Ollama', 'Value': 'ollama run llama3.3:70b' },
          ],
          columns: ['Spec', 'Value'],
          image: '/images/creative-writing-quality-spectrum-fr.svg',
          imageCaption: 'Spectre qualité LLM créatif: 8B jusqu\'à 500 mots, 24B 2K mots, 70B soutient scènes 1K-3K mots avec plus large plage stylistique.',
        },
        mistralSmall: {
          title: '#2 Mistral Small 3.1 24B -- meilleur 16 GB RAM',
          content: [
            '**Mistral Small 3.1 24B qualité créative notable, entre dans 14 GB RAM.** Suivi instructions précis, gère spécifications détaillées sans dérives.',
            'Pour narratif long format sans workstation, c\'est le choix pratique.',
          ],
        },
        llama318: {
          title: '#3 Llama 3.1 8B -- meilleur 8 GB RAM',
          content: [
            '**À 8 GB RAM, Llama 3.1 8B surpasse Qwen2.5 7B et Mistral 7B.** Qwen2.5 plus fort coding, mais prose moins fluide narratif.',
            'Fiable jusqu\'à 500 mots. Au-delà 1K mots, cohérence dégrade. Limitation fondamentale 8B pour long format.',
          ],
        },
        fineTuned: {
          title: '#4 Fine-tunes spécialisés fiction/roleplay',
          content: [
            '**Communauté maintient fine-tunes entraînés corpus fiction, surpassent modèles base.** Disponibles Hugging Face, chargeable LM Studio/Ollama :',
          ],
          items: [
            '**Fimbulvetr-11B** -- fantasy/SF haute qualité. Détails sensoriels, voix personnage cohérente.',
            '**Midnight-Rose-70B** -- Llama 3.3 70B fine-tune créatif. Cohérence narrative supérieure.',
            '**Noromaid/Openhermes** -- roleplay conversationnel. Qualité prose inférieure, plus réactif.',
            'Télécharger Hugging Face ("creative writing GGUF"), charger LM Studio ou via `ollama create` Modelfile.',
          ],
        },
        promptingTips: {
          title: 'Conseils pour meilleure créativité',
          items: [
            '**Style concret**: "McCarthy -- dialogues épars, longues phrases, sans guillemets" > "fiction littéraire".',
            '**Rôle model**: "Vous êtes romancier professionnel." Identité définie améliore instructions.',
            '**Température 0.9-1.1**: créatif bénéficie randomness. Ollama défaut 0.8, LM Studio 0.7.',
            '**System prompt**: instruction style persistante. "Vous écrivez horreur gothique. Prose sombre atmosphérique."',
            '**Tâches sections**: chapitre 3K mots → 6 sections 500 mots. Maintient cohérence fiable.',
            '**Compare local/cloud**: [PromptQuorum](/) même prompt local + cloud simultané.',
          ],
          image: '/images/creative-writing-temperature-guide-fr.svg',
          imageCaption: 'Guide température LLM créatif: 0,7 trop plat, 0,9-1,05 optimal fiction, au-dessus 1,1 sortie incohérente.',
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'Remplace local LLM Claude/GPT-4o fiction?',
              a: 'Court format (<500 mots) : 13B+ local indistinguible blind test. Long format (romans) : Claude Opus 4.7 et GPT-4o cohérence plus fiable. 70B local réduit l\'écart.',
            },
            {
              q: 'Modèle se souvient parties antérieures?',
              a: 'Contexte actuel uniquement. Au-delà limit (4K-128K tokens), détails oubliés. Longs projets : résumé début session.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '**Papiers génération story IA** -- Recherche cohérence narrative',
            '**Mistral documentation** -- Benchmarks créatifs',
            '**Llama 3.1 benchmark** -- Évaluation écriture créative',
          ],
        },
        commonMistakes: {
          title: 'Erreurs courantes',
          items: [
            'Modèles optimisés code ≠ créativité -- entraînement différent.',
            'Attendre narratives multi-romans -- excèlle textes courts.',
            'Oublier température/sampling pour créativité.',
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Meilleurs LLMs 2026](/fr/local-llms/best-local-llms-2026)',
            '[Exécuter local LLM laptop](/fr/local-llms/local-llm-on-laptop)',
            '[Modèles débutants](/fr/local-llms/best-beginner-local-llm-models)',
            '[Limitations LLM](/fr/local-llms/local-llm-limitations)',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Meilleurs LLMs locaux pour écriture créative 2026',
        'url': 'https://www.promptquorum.com/fr/local-llms/best-local-llms-for-creative-writing',
        'inLanguage': 'fr',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'proficiencyLevel': 'Débutant',
        'mainEntity': {
          '@type': 'FAQPage',
          'inLanguage': 'fr',
          'mainEntity': [],
        },
      },
    },
    ja: {
      theme: 'Best Models',
      title: '2026年最高の創作文章向けローカルLLM: フィクション、詩、長編コンテンツのトップ5モデル',
      seoTitle: '2026年の創作文章向けベストローカルLLM',
      intro: '2026年の創作文章向けローカルLLM最高モデルは、Meta Llama 3.3 70B（最高の散文品質）、Mistral Small 3.1 24B（16GB RAM以下での最高品質）、Fimbulvetrおよびmidnight-Rose などのコミュニティファインチューニングモデル（フィクション・ロールプレイ専門）です。創作文章の品質は標準ベンチマークではよく測定されません。物語の一貫性、文体の多様性、開放的なプロンプトへの指示遵守を評価する必要があります。',
      metaDescription: '2026年の創作文章向けトップ5ローカルLLM。Llama 3.3 70B最高の散文、Mistral 24B16GB最適、ロールプレイ特化ファインチューン。物語の一貫性で評価。完全ローカル、4月 2026.',
      publishDate: '2026-04-04',
      readTime: '8分読',
      educationalLevel: '初心者',
      primaryTerm: 'ローカルLLM創作文章',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: '品質評価方法', anchor: '#how-to-evaluate' },
        { label: '#1 Llama 3.3 70B - 最高散文品質', anchor: '#llama-3-3-70b' },
        { label: '#2 Mistral Small 3.1 24B', anchor: '#mistral-small' },
        { label: '#3 Llama 3.1 8B - 最良の8GB選択肢', anchor: '#llama-3-1-8b' },
        { label: '#4 コミュニティファインチューン', anchor: '#fine-tuned-models' },
        { label: 'クリエイティブプロンプティングのコツ', anchor: '#prompting-tips' },
        { label: 'よくある質問', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '標準ベンチマーク（MMLU、HumanEval）は創作文章の品質を測定しません。自分のサンプルプロンプトで直接評価してください。',
            '**全体で最高の散文**: Llama 3.3 70B -- ローカル実行可能スケールで最も自然な英語ナレーティブスタイル。',
            '**16GB RAM向けの最高選択肢**: Mistral Small 3.1 24B -- 強い創作出力、長編ナレーティングで7Bモデルより明らかに優れています。',
            '**8GB RAM向けの最高選択肢**: Llama 3.1 8B -- 英語フィクションタスクでQwen2.5 7Bより優れた創作指示遵守。',
            'コミュニティファインチューン（Fimbulvetr-11B、Midnight-Rose-70B）は創作フィクション用に特別に訓練されており、長編ナレーティブタスクでベースモデルより優れています。',
          ],
        },
        howToEvaluate: {
          title: 'ローカルLLMの創作文章品質をどう評価するか',
          content: [
            '**客観的ベンチマークは知識と推論を測定しますが、創作品質は測定しません。** 創作文章用のモデルを評価するには、使用予定のプロンプトで直接テストしてください。',
            '注意点: 標準ベンチマークではスコアが高くても、実際の創作文章の品質とは無関係な場合があります。必ず実際のテストを行ってください。',
          ],
          items: [
            '**散文継続テスト**: モデルにシーンの最初の2段落を与えて、500語の継続を要求します。一貫したトーン、キャラクター音声、ナレーティブロジックを保持していますか？',
            '**スタイル指示テスト**: モデルに「レイモンド・カーヴァーのスタイルで」または「スリラー小説のペースで」段落を書くよう要求します。明確にスタイルを変更していますか？',
            '**長編一貫性テスト**: 特定のツイストエンディングで1000語の短編を要求します。モデルは自然にセットアップを配置し、報酬を提供していますか？',
            '**会話テスト**: 異なるスピーチパターンを持つ2つのキャラクターを使用してシーンを書きます。各キャラクターは異なって聞こえますか？',
          ],
          image: '/images/creative-writing-model-comparison-ja.svg',
          imageCaption: '創作文章ローカルLLM比較: Llama 3.3 70B(40GB、最高品質)、Mistral 24B(14GB、16GBクラス)、Llama 3.1 8B(6GB、入門クラス)。',
        },
        llama33: {
          title: '#1 Meta Llama 3.3 70B - ローカルで最高の散文品質',
          content: [
            '**Llama 3.3 70Bはローカル実行可能な任意のモデルの中で最も自然で多様な英語散文を生成します。**多様な英語テキストコーパスのトレーニングにより、最広範な文体レンジが得られます。',
            '実用的なコツ: 40GBのメモリが必要ですが、M2 Ultraマシンを使用すれば、1秒間に20-35トークンの速度を達成できます。これにより、実時間での創作セッションに最適です。',
          ],
          rows: [
            { 'Spec': '最適な用途', 'Value': '長編フィクション、豊かな散文' },
            { 'Spec': 'RAM必要（Q4_K_M）', 'Value': '~40 GB' },
            { 'Spec': '散文スタイル範囲', 'Value': 'ローカルモデル中最広' },
            { 'Spec': '長編一貫性', 'Value': '強力（1K～3K語シーン）' },
            { 'Spec': 'Ollama コマンド', 'Value': 'ollama run llama3.3:70b' },
          ],
          columns: ['Spec', 'Value'],
          image: '/images/creative-writing-quality-spectrum-ja.svg',
          imageCaption: '創作文章品質スペクトラム: 8Bは500語まで、24Bは2K語まで、70Bは1K-3K語シーンを維持し最広スタイル範囲。',
        },
        mistralSmall: {
          title: '#2 Mistral Small 3.1 24B - 16GB RAM向け最高の創作文章',
          content: [
            '**Mistral Small 3** .1 24Bは、7Bモデルより明らかに優れた創作文章品質を提供しながら、14GB RAMに収まります。詳細なスタイル仕様を処理するのに十分な精度があります。',
            '実用的なコツ: ワークステーションクラスのハードウェアなしで本物の長編ナレーティング機能を望むユーザーにとって、これが最良の選択肢です。',
          ],
        },
        llama318: {
          title: '#3 Llama 3.1 8B - 8GB RAM向け最高の創作文章',
          content: [
            '**8GB RAMレベルでは、Llama 3** .1 8BはQwen2.5 7BおよびMistral 7Bを英語創作文章で上回ります。Qwen2.5はコーディングと構造化タスクで強力ですが、英語散文生成はナレーティブ目的で流動性が低くなります。',
            '注意点: 500語以下の短編に適しています。1000語を超えるストーリーでは品質が低下する傾向があります。これは8Bスケールモデルの基本的な制限です。',
          ],
        },
        fineTuned: {
          title: '#4 フィクション・ロールプレイ用コミュニティファインチューン',
          content: [
            '**ローカルLLMコミュニティは、フィクションコーパスでトレーニングされた専門のファインチューンを保持しており、長編ナレーティブタスクでベースモデルを上回ります。** これらはHugging Faceで利用でき、LM StudioまたはOllama（カスタムModelfilesを使用）で読み込むことができます。',
            '実践Tips: Hugging Faceから「creative writing GGUF」を検索して、LM Studioのモデルブラウザに読み込むか、カスタムModelfileで`ollama create`経由で読み込みます。',
          ],
          items: [
            '**Fimbulvetr-11B** - ファンタジーおよびサイエンスフィクション散文の高品質でファインチューン。ベースLlama 3.1 8Bより鮮やかな感覚の詳細と一貫したキャラクター音声を生成します。',
            '**Midnight-Rose-70B** - 創作文章とロールプレイシナリオに焦点を当てたLlama 3.3 70Bファインチューン。ベースモデルより優れた長編ナレーティング一貫性。',
            '**Noromaid / Openhermes 変種** - 会話型ロールプレイに焦点を当てたコミュニティファインチューン。Fimbulvetrより低い散文品質ですが、キャラクター方向への応答性がより高いです。',
          ],
        },
        promptingTips: {
          title: 'ローカルLLMの創作文章を改善するプロンプティングコツ',
          content: [
            '**実践的なテクニック：創作出力の質を大幅に向上させるプロンプティング手法です。**',
          ],
          items: [
            '**スタイルを具体的に指定**: 「Cormac McCarthyのスタイルで書く - スパースな対話、長い説明文、引用符なし」は「文学フィクションを書く」を上回ります。',
            '**モデルに役割を与える**: 「あなたはプロの小説家です。このシーンを続けてください、要約せず、表示するだけで。」指示遵守は、モデルが定義されたアイデンティティを持つ場合に改善されます。',
            '**温度を0.9～1.1に設定**: 創作タスクはより高い温度（より多くのランダム性）の恩恵を受けます。デフォルトOllama温度は0.8です。',
            '**システムプロンプトを使用**: セッションレベルで永続的なスタイル指示を設定します。「あなたはゴシックホラー小説を書いています。」',
            '**長いタスクを複数のセクションに分割**: 3,000語のチャプターについては、500語のセクションで生成します。',
            '**ローカルとクラウド出力を比較**: [PromptQuorum](/)を使用して同じ創作プロンプトを送信します。',
          ],
          image: '/images/creative-writing-temperature-guide-ja.svg',
          imageCaption: '創作文章の温度ガイド: 0.7デフォルトは単調すぎ、0.9-1.05がフィクション最適、1.1超で出力が不安定。',
        },
        faqSection: {
          id: 'faq',
          title: 'ローカルLLMの創作文章についてよくある質問',
          faqs: [
            {
              q: 'ローカルLLMはClaudeやGPT-4oなどの執筆補助にとって代わることができますか？',
              a: '短編コンテンツ（500語未満）の場合、よくプロンプトされた13B以上のローカルモデルは、ブラインドテストではクラウドモデルから区別しにくい出力を生成します。長編フィクション（小説、短編小説全体）の場合、Claude Opus 4.7およびGPT-4oはハードウェアレベルに関わらずナレーティング一貫性をより確実に保ちます。',
            },
            {
              q: 'モデルは私のストーリーの以前の部分を覚えていますか？',
              a: '現在のコンテキストウィンドウ内のみです。会話履歴がモデルのコンテキスト制限（通常4K～128Kトークン）を超える場合、以前の詳細は忘れられます。長いプロジェクトの場合、各セッションの開始時に定期的にストーリーサマリーを提供してコンテキストを再確立してください。',
            },
          ],
        },
        sources: {
          title: 'ソース',
          items: [
            '**ニューラルストーリー生成論文** - ナレーティング一貫性に関する学術研究',
            '**創作タスク向けMistral 7B** - モデルドキュメントと創作ベンチマーク',
            '**Llama 3.1 8B クリエイティブベンチマーク** - 創作文章タスクの評価',
          ],
        },
        commonMistakes: {
          title: '創作文章プロンプティングの一般的な誤り',
          items: [
            'コード最適化モデルを創作タスクに使用 - 創作モデルは異なるトレーニングをしています。',
            'ローカルモデルが複数の小説ナレーティングを生成することを期待 - 短編テキストで優れています。',
            '創作出力用の温度とサンプリングパラメータを調整しない。',
          ],
        },
        relatedReading: {
          title: '関連トピック',
          items: [
            '[2026年の最高のローカルLLM](/ja/local-llms/best-local-llms-2026) - ユースケース全体の総合ランキング',
            '[ノートパソコンでローカルLLMを実行する方法](/ja/local-llms/local-llm-on-laptop) - ライター向けのパフォーマンス最適化',
            '[初心者向けベストローカルLLMモデル](/ja/local-llms/best-beginner-local-llm-models) - 創作文章用基礎モデル',
            '[ローカルLLMの制限事項](/ja/local-llms/local-llm-limitations) - モデル制限の理解',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '2026年の最高の創作文章向けローカルLLM',
        'url': 'https://www.promptquorum.com/ja/local-llms/best-local-llms-for-creative-writing',
        'inLanguage': 'ja',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'proficiencyLevel': '初心者',
        'mainEntity': {
          '@type': 'FAQPage',
          'inLanguage': 'ja',
          'mainEntity': [],
        },
      },
    },
    zh: {
      theme: 'Best Models',
      title: '2026年最佳创意写作本地LLM：小说、诗歌和长篇内容排名',
      seoTitle: '2026年最佳创意写作本地LLM',
      intro: '2026年最佳创意写作本地LLM是Meta Llama 3.3 70B（最佳散文质量）、Mistral Small 3.1 24B（16GB RAM以下最佳质量）以及Fimbulvetr和Midnight-Rose等社区微调模型（专门针对小说和角色扮演）。创意写作性能并未被标准基准测试准确衡量----需要评估叙事连贯性、文体多样性以及对开放式提示的指令遵循。',
      metaDescription: '2026年创意写作top 5本地LLM排名。Llama 3.3 70B最佳散文、Mistral 24B 16GB最优、角色扮演微调。按叙事连贯性评分。完全本地、免费beta、2026年4月更新。',
      publishDate: '2026-04-04',
      readTime: '8分钟阅读',
      educationalLevel: '初学者',
      primaryTerm: '本地LLM创意写作',
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '如何评估质量', anchor: '#how-to-evaluate' },
        { label: '#1 Llama 3.3 70B - 最佳散文', anchor: '#llama-3-3-70b' },
        { label: '#2 Mistral Small 3.1 24B', anchor: '#mistral-small' },
        { label: '#3 Llama 3.1 8B - 最佳8GB选择', anchor: '#llama-3-1-8b' },
        { label: '#4 社区微调模型', anchor: '#fine-tuned-models' },
        { label: '创意提示技巧', anchor: '#prompting-tips' },
        { label: '常见问题', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            '标准基准（MMLU、HumanEval）无法测量创意写作质量----直接用自己的示例提示测试模型。',
            '**整体最佳散文**：Llama 3.3 70B----本地可运行规模中最自然的英文叙事风格。',
            '**16GB RAM最佳选择**：Mistral Small 3.1 24B----强大的创意输出，长篇叙事中明显优于7B模型。',
            '**8GB RAM最佳选择**：Llama 3.1 8B----英文小说任务中创意指令遵循优于Qwen2.5 7B。',
            '社区微调模型（Fimbulvetr-11B、Midnight-Rose-70B）专门针对创意小说训练，在长篇叙事任务中优于基础模型。',
          ],
        },
        howToEvaluate: {
          title: '如何评估本地LLM的创意写作质量',
          content: [
            '**客观基准测试衡量的是知识和推理，而非创意质量。** 要评估一个模型的创意写作能力，需要直接用你计划使用的提示进行测试。',
            '实用建议：不要依赖基准分数。您需要自己运行这四个测试，才能找到适合您创意写作风格的模型。',
          ],
          items: [
            '**散文连贯性测试**：给模型一个场景的前两段，要求继续写500字。它是否保持了一致的语调、人物声音和叙事逻辑？',
            '**风格指令测试**：要求模型"用雷蒙德·卡弗的风格"或"用惊悚小说的节奏"写一段。它是否明显改变了风格，还是产生了泛化输出？',
            '**长篇连贯性测试**：要求写一篇1000字的短篇故事，有特定的反转结局。模型是否自然地铺垫设置并交付转折？',
            '**对话测试**：写一个包含两个有不同讲话模式角色的场景。每个角色听起来是否不同，还是对话显得单调？',
          ],
          image: '/images/creative-writing-model-comparison-zh.svg',
          imageCaption: '创意写作本地LLM对比: Llama 3.3 70B（40GB，最佳散文）、Mistral 24B（14GB，16GB级）、Llama 3.1 8B（6GB，入门级）。',
        },
        llama33: {
          title: '#1 Meta Llama 3.3 70B - 本地最佳散文质量',
          content: [
            '**Llama 3.3 70B生成任何本地可运行模型中最自然、最多样的英文散文。**其在多样化英文文本语料库上的训练赋予了它最广泛的文体范围----从极简主义文学小说到类型化惊悚小说的节奏。长篇连贯性（1000-3000字）明显优于任何7B或13B模型。',
            '实用建议：虽然需要40GB内存，但在Apple M2 Ultra或M5 Max上运行时，您可以获得每秒20-35令牌的速度，使实时创意会话成为可能。这为长篇小说创作者提供了最佳权衡。',
          ],
          rows: [
            { 'Spec': '最适合', 'Value': '长篇小说、丰富散文' },
            { 'Spec': 'RAM需求（Q4_K_M）', 'Value': '~40 GB' },
            { 'Spec': '散文风格范围', 'Value': '所有本地模型中最广' },
            { 'Spec': '长篇连贯性', 'Value': '强大（1K-3K字场景）' },
            { 'Spec': 'Ollama命令', 'Value': 'ollama run llama3.3:70b' },
          ],
          columns: ['Spec', 'Value'],
          image: '/images/creative-writing-quality-spectrum-zh.svg',
          imageCaption: '创意写作质量谱: 8B处理500字故事，24B支持2K字，70B维持1K-3K字场景，风格范围最广。',
        },
        mistralSmall: {
          title: '#2 Mistral Small 3.1 24B - 16GB RAM最佳创意写作',
          content: [
            '**Mistral Small 3** .1 24B提供的创意写作质量明显优于任何7B模型，同时适配14GB内存。其指令遵循足够精确，可以处理详细的风格规范（"用第二人称、现在时、短而有力的句子写作"）而不会在几段后偏离。',
            '实用建议：对于希望获得真正长篇叙事能力但没有工作站级硬件的用户，这是最佳实际选择。您可以在标准笔记本电脑上运行此模型。',
          ],
        },
        llama318: {
          title: '#3 Llama 3.1 8B - 8GB RAM最佳创意写作',
          content: [
            '**在8GB内存级别，Llama 3** .1 8B在英文创意写作中优于Qwen2.5 7B和Mistral 7B。Qwen2.5在编码和结构化任务中更强，但其英文散文生成对叙事目的来说流畅性较低。',
            '实用建议：Llama 3.1 8B能可靠处理短篇小说（最多500字）。对于超过1000字的故事，质量开始下降。如果您需要长篇小说，请升级到16GB RAM的Mistral Small或40GB的Llama 3.3。',
          ],
        },
        fineTuned: {
          title: '#4 小说和角色扮演社区微调模型',
          content: [
            '**本地LLM社区维护在小说语料库上训练的专门微调模型，在长篇叙事任务中优于基础模型。** 这些在Hugging Face上可用，可在LM Studio或Ollama中加载。',
            '实用建议：使用这些微调模型，您可以获得更好的创意输出，同时保持完全本地化。对于特定的创意写作风格（例如幻想小说或网络文学），这些微调提供了优越的性能。',
          ],
          items: [
            '**Fimbulvetr-11B** - 在高质量奇幻和科幻散文上微调。比基础Llama 3.1 8B产生更生动的感觉细节和一致的角色声音。',
            '**Midnight-Rose-70B** - Llama 3.3 70B微调版本，专注于创意写作和角色扮演场景。长篇叙事连贯性优于基础模型。',
            '**Noromaid / Openhermes变体** - 社区微调模型，专注于对话式角色扮演。散文质量低于Fimbulvetr，但对角色指导响应性更强。',
            '从Hugging Face下载这些（搜索"creative writing GGUF"）并在LM Studio的模型浏览器中加载，或通过自定义Modelfile的`ollama create`加载。',
          ],
        },
        promptingTips: {
          title: '改进本地LLM创意写作的提示技巧',
          items: [
            '**具体指定风格**："用Cormac McCarthy的风格写作----稀疏对话、长描述句子、无引号"优于"写文学小说"。',
            '**给模型分配角色**："你是一位专业小说家。继续这个场景，只显示不总结。"当模型有明确身份时，指令遵循改进。',
            '**将温度设置为0.9-1.1**：创意任务受益于更高温度（更多随机性）。默认Ollama温度为0.8；LM Studio默认为0.7。通过参数滑块增加。',
            '**使用系统提示**：在会话级别设置持久风格指令。"你在写哥特式恐怖小说。在所有响应中保持深色、大气散文。"',
            '**将长任务分解为各部分**：对于3000字章节，分500字部分生成。这使模型保持在其可靠连贯性范围内。',
            '**比较本地和云输出**：使用[PromptQuorum](/)同时向本地Ollama模型和云模型发送相同的创意提示。有助于判断本地质量何时足够。',
          ],
          image: '/images/creative-writing-temperature-guide-zh.svg',
          imageCaption: '创意写作LLM温度指南: 0.7默认太单调，0.9-1.05最适合小说，超过1.1输出不连贯。',
        },
        faqSection: {
          id: 'faq',
          title: '关于本地LLM创意写作的常见问题',
          faqs: [
            {
              q: '本地LLM能否取代Claude或GPT-4o等写作助手？',
              a: '对于短篇内容（500字以下），经过良好提示的13B+本地模型生成的输出在盲测中难以与云模型区分。对于长篇小说（小说、完整短篇故事），Claude Opus 4.7和GPT-4o在任何硬件级别都能更可靠地保持叙事连贯性。70B本地模型显著缩小了这一差距。',
            },
            {
              q: '模型能否记住我故事的早期部分？',
              a: '仅在当前上下文窗口内。如果对话历史超过模型的上下文限制（通常4K-128K标记），早期细节会被遗忘。对于长期项目，在每个会话开始时定期提供故事摘要以重新建立上下文。',
            },
          ],
        },
        sources: {
          title: '信息来源',
          items: [
            '**神经故事生成论文** - 关于叙事连贯性的学术研究',
            '**创意任务的Mistral 7B** - 模型文档和创意基准',
            '**Llama 3.1 8B创意基准** - 创意写作任务评估',
          ],
        },
        commonMistakes: {
          title: '创意写作提示的常见错误',
          items: [
            '对创意任务使用代码优化模型----创意模型训练方式不同。',
            '期望本地模型生成多部小说叙事----它们在短篇创意文本中表现出色。',
            '不为创意输出调整温度和采样参数。',
          ],
        },
        relatedReading: {
          title: '相关阅读',
          items: [
            '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) - 跨用例的总体排名',
            '[如何在笔记本电脑上运行本地LLM](/zh/local-llms/local-llm-on-laptop) - 作者性能优化',
            '[最佳初学者本地LLM模型](/zh/local-llms/best-beginner-local-llm-models) - 创意写作基础模型',
            '[本地LLM限制](/zh/local-llms/local-llm-limitations) - 理解模型约束',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': '2026年最佳创意写作本地LLM',
        'url': 'https://www.promptquorum.com/zh/local-llms/best-local-llms-for-creative-writing',
        'inLanguage': 'zh',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum' },
        'proficiencyLevel': '初学者',
        'mainEntity': {
          '@type': 'FAQPage',
          'inLanguage': 'zh',
          'mainEntity': [],
        },
      },
    },
  };
