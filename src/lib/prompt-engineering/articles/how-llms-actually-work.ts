// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: how-llms-actually-work
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'How LLMs Actually Work: Tokens, Attention, and Inference',
      intro: 'Large language models predict the next token using probability distributions — not by understanding. Learn tokenization, attention, RLHF, inference parameters, and why this matters for prompt engineering.',
      publishDate: '2026-03-30',
      seoTitle: 'How LLMs Actually Work: Tokens, Attention, and Inference (2026)',
      metaDescription: 'LLMs predict tokens via probability distributions — not meaning. Learn tokenization, transformer attention, RLHF, and inference parameters with specific model benchmarks and regional context.',
      dateModified: '2026-04-12',
      readTime: '12 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Large Language Model (LLM)',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/how-llms-actually-work',
        inLanguage: 'en',
        headline: 'How LLMs Actually Work: Tokens, Attention, and Inference',
        description: 'A technical but accessible explanation of how large language models work — tokenization, transformer attention, training, inference, and what it means for prompt engineering.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        proficiencyLevel: 'Intermediate',
        dependencies: 'Basic understanding of neural networks',
        technicalAudience: 'Developers, AI practitioners, prompt engineers',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: 'https://www.promptquorum.com/api/og/how-llms-actually-work',
        keywords: ['large language models', 'LLM architecture', 'transformer', 'tokenization', 'attention mechanism', 'RLHF', 'temperature', 'context window', 'prompt engineering', 'GPT-4o', 'Claude'],
        about: [
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Transformer architecture' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'Tokenization' },
          { '@type': 'Thing', name: 'Self-attention mechanism' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        isPartOf: {
          '@type': 'WebPage',
          url: 'https://www.promptquorum.com/prompt-engineering',
        },
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'Tokenization' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do LLMs understand text the way humans do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. LLMs do not understand text in the human sense. They predict the statistically most probable next token given the tokens before it, based on patterns learned during training. There is no comprehension, intent, or awareness — only weighted probability distributions over a vocabulary of roughly 50,000–100,000 tokens.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is a token in an LLM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A token is the smallest unit an LLM processes — roughly 0.75 words in English and 0.5 words in Chinese or Japanese. Words, sub-words, punctuation, and spaces all become tokens. GPT-4o uses BPE (Byte Pair Encoding) to split text into tokens before processing. A 1,000-word document becomes approximately 1,300 tokens in English.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does temperature do in an LLM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Temperature controls how randomly the model samples from its probability distribution. Temperature 0 always picks the highest-probability next token (deterministic, repetitive). Temperature 1.0 samples proportionally from the distribution (creative, variable). Temperature above 1.5 flattens the distribution and increases hallucination risk. Most production use cases work best between 0.1 and 0.7.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why does the position of information in a prompt matter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Due to how transformer attention works, LLMs tend to weight tokens near the beginning and end of the context window more heavily than tokens in the middle — a pattern called the "lost in the middle" effect, documented in research from Stanford. For prompts longer than ~2,000 tokens, place the most critical instruction at the start (system prompt) and repeat key constraints at the end of the user prompt.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is RLHF and how does it affect model outputs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Reinforcement Learning from Human Feedback (RLHF) is the post-training step where human raters score model outputs, and a reward model is trained on those ratings. The base LLM is then fine-tuned to maximize reward. RLHF shapes refusals, tone, helpfulness, and safety behavior — it is why ChatGPT and Claude decline certain requests and why models from different labs behave differently on the same prompt even when they have similar benchmark scores.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between a context window and memory?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The context window is all the text the model can see during a single inference call — including the system prompt, conversation history, and the current user message. It is not persistent memory: when the conversation ends, the model retains nothing. GPT-4o has a 128,000-token context window (~96,000 words). Claude 4.6 Sonnet supports 200,000 tokens (~150,000 words). Gemini 2.5 Pro supports 2,000,000 tokens (~1,500,000 words).',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the "lost in the middle" effect and how do I avoid it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The "lost in the middle" effect, documented by Liu et al. (2023) at Stanford, shows that transformer attention systematically underweights information in the middle of long contexts — tokens at the beginning and end receive more attention weight. To avoid it: place critical instructions and constraints in the system prompt (beginning), keep important context in the first 10-15% of your input, and repeat the most important constraint at the end of the user message. For documents longer than ~50,000 tokens, use retrieval-augmented generation (RAG) instead of stuffing the full context.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does RLHF differ from Constitutional AI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'RLHF (Reinforcement Learning from Human Feedback) is a post-training technique where human raters score model outputs, a reward model is trained on those ratings, and the LLM is fine-tuned to maximize reward. Constitutional AI (used by Anthropic for Claude) extends RLHF by adding a set of written principles ("constitution") that guide the model\'s behavior. This reduces reliance on human feedback for every edge case — the constitution provides consistent guidance for refusals, tone, and values alignment without needing human raters for every scenario.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between GPT-4o, Claude, and Gemini architecturally?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All three are transformer-based LLMs trained on massive text corpora, but they differ in scale, context window, and post-training approach. GPT-4o (OpenAI) has a 128,000-token context window. Claude 4.6 Sonnet (Anthropic) has 200,000 tokens and uses Constitutional AI for alignment. Gemini 2.5 Pro (Google DeepMind) has the largest context window at 2,000,000 tokens. These differences affect cost, latency, and suitability for different tasks — GPT-4o excels at reasoning, Claude at long context and nuance, Gemini at ultra-long document processing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many tokens is 1000 words?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In English, 1,000 words ≈ 1,300–1,350 tokens using GPT-4o or Claude tokenizers. Roughly 1 token = 0.75 words. For Chinese or Japanese, use 1 token ≈ 0.5 words — so 1,000 Chinese/Japanese words ≈ 2,000 tokens. Token count directly affects API cost and context window consumption, so understanding the ratio is critical for budgeting.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between temperature and top-p?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Temperature sharpens or flattens the entire probability distribution — temperature 0 = deterministic, temperature 1.0 = standard, temperature 2.0 = very random. Top-p (nucleus sampling) restricts sampling to the smallest set of tokens whose cumulative probability reaches p — top-p 0.9 means "sample from the tokens that make up 90% of the probability mass." For most tasks, adjust top-p (0.8–0.95) rather than temperature; temperature is best reserved for creativity control.',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Write Better Prompts Based on How LLMs Work',
        description: 'Five practical steps for improving prompt quality by understanding how large language models process and generate text.',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Put critical instructions first',
            text: 'Place your most important constraints and role definitions in the system prompt, which is processed before any user message. Due to the "lost in the middle" effect, instructions buried in the middle of long prompts are under-weighted by transformer attention.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Use temperature strategically',
            text: 'Use temperature 0 for code generation and factual tasks (deterministic output). Use 0.5–0.7 for content generation (balanced creativity). Use higher temperatures only for high-diversity creative tasks, as temperature above 1.0 raises hallucination risk significantly.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Optimize prompts for token cost and latency',
            text: 'Reduce token count in your prompts since API pricing scales linearly with tokens. A 10,000-token system prompt with 100 daily users costs 1,000,000 tokens per day in input alone — compress instructions ruthlessly to reduce cost and response time.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Validate outputs in high-stakes contexts',
            text: 'Remember that hallucination is a structural property of token prediction: models output statistically probable text, not verified information. Always validate factual claims and citations in generated output before using in high-stakes applications.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Use retrieval-augmented generation for long documents',
            text: 'Do not assume large context windows mean equal attention across all tokens. For documents longer than approximately 50,000 tokens, use retrieval-augmented generation (RAG) with document chunking instead of full-context stuffing to maintain retrieval quality.',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Common LLM Misconceptions',
        description: 'Five widespread misconceptions about how large language models work and what they can do, with clarifications of the actual behavior.',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'The model reads and understands my document',
            description: 'The model processes token sequences and predicts continuations — no reading comprehension occurs. Explicitly state what you want extracted; do not assume the model infers your goal.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'The model remembers our last conversation',
            description: 'Each API call is stateless; history must be explicitly included in the context window. Include relevant prior context in the system prompt or conversation history.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'The model knows the current date',
            description: 'The model has a training cutoff and does not know what day it is unless told. Inject the current date in the system prompt for any date-sensitive task.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Higher temperature equals smarter output',
            description: 'Temperature controls sampling randomness, not capability or accuracy. Use low temperature (0.0–0.3) for analytical tasks; higher for creative variation.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'The model can count characters reliably',
            description: 'Token boundaries are sub-word units; precise character or word counting is not a native skill. Do not rely on the model to count words precisely; use post-processing or code.',
          },
        ],
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: 'The slide deck below covers: how tokenization converts text to token IDs, how transformer attention creates the lost-in-the-middle effect, RLHF vs pretraining differences, and inference parameter reference table (temperature 0.0–2.0, top-p, max tokens). Download the PDF as an LLM architecture reference card.',
      sections: {
        definition: {
          title: 'What an LLM Actually Is',
          content: [
            '**An LLM (large language model) is a transformer-based neural network trained to predict the most probable next token given a sequence of input tokens — it is not a database, a search engine, or a reasoning system.** The model learns statistical relationships between tokens by processing hundreds of billions of words from web pages, books, code, and other text during training.',
            'When you type a prompt, the model converts your text into a sequence of numeric token IDs, passes them through dozens of transformer layers, and outputs a probability distribution over its entire vocabulary (typically 50,000–100,000 tokens). It samples one token from that distribution, appends it to the sequence, and repeats until it generates a stop token or hits the output limit.',
            'This architecture explains several behaviors that confuse users: why LLMs "[hallucinate](/prompt-engineering/prompt-engineering-glossary#hallucination)" plausible-but-false facts (they predict probable text, not verified truth), why they can fail on arithmetic (token patterns, not calculation), and why rephrasing a prompt changes the output (different token sequences trigger different probability distributions).',
          ],
          tableFormat: true,
          columns: ['Property', 'LLM', 'Traditional software'],
          rows: [
            { Property: 'How it works', LLM: 'Predicts next token via learned probability distributions', 'Traditional software': 'Executes deterministic instructions' },
            { Property: 'Output determinism', LLM: 'Probabilistic — same input can yield different outputs', 'Traditional software': 'Deterministic — same input always yields same output' },
            { Property: 'Knowledge source', LLM: 'Patterns encoded in model weights during training', 'Traditional software': 'Reads from databases or files at runtime' },
            { Property: 'Error type', LLM: 'Confident but wrong (hallucination)', 'Traditional software': 'Crashes or returns error code' },
            { Property: 'Update mechanism', LLM: 'Requires retraining or fine-tuning', 'Traditional software': 'Code change or database update' },
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            '**LLMs predict tokens, not answers.** They generate statistically probable text sequences — not retrieved facts, logical deductions, or verified information.',
            '**1 token ≈ 0.75 English words.** A 1,000-word document uses ~1,300 tokens. Chinese and Japanese are ~50% denser.',
            '**[Temperature](/prompt-engineering/prompt-engineering-glossary#temperature) controls creativity vs. determinism.** Temperature 0 = deterministic. Temperature 1.0 = proportional sampling. Above 1.5 = high hallucination risk.',
            '**[Context windows](/prompt-engineering/prompt-engineering-glossary#context-window) are not memory.** GPT-4o: 128k tokens. Claude 4.6 Sonnet: 200k tokens. Gemini 2.5 Pro: 2M tokens. Nothing persists between sessions.',
            '**Position matters.** Transformer [attention](/prompt-engineering/prompt-engineering-glossary#attention) weights the beginning and end of the context more heavily. Put critical instructions first and last — not buried in the middle.',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) shapes behavior, not capability.** Refusals, tone, and helpfulness come from post-training fine-tuning — not the base model architecture.',
          ],
        },

        tokenization: {
          title: '[Tokenization](/prompt-engineering/prompt-engineering-glossary#tokenization): How Text Becomes Numbers',
          content: [
            '**Before an LLM can process any text, it must convert it into a sequence of integer token IDs — a process called [tokenization](/prompt-engineering/prompt-engineering-glossary#tokenization).** GPT-4o uses Byte Pair Encoding (BPE), which breaks text into frequently occurring sub-word units. Claude 4.6 Sonnet and Gemini 2.5 Pro use similar sub-word tokenization schemes.',
            'Tokenization is language-dependent. English text averages approximately 1 token per 0.75 words. Chinese and Japanese average 1 token per 0.5 words — meaning the same document costs roughly twice as many tokens in Chinese as in English, which directly affects API cost and context window usage.',
          ],
          tableFormat: true,
          columns: ['Input text', 'Tokens', 'Token count'],
          rows: [
            { 'Input text': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Token count': '4' },
            { 'Input text': '"Tokenization"', Tokens: '"Token", "ization"', 'Token count': '2' },
            { 'Input text': '"GPT-4o"', Tokens: '"G", "PT", "-", "4", "o"', 'Token count': '5' },
            { 'Input text': '"你好世界" (Hello world, Chinese)', Tokens: '"你好", "世界"', 'Token count': '2–4 depending on model' },
          ],
        },

        attention: {
          title: 'How Transformer Attention Works',
          content: [
            '**The transformer architecture uses a mechanism called self-attention to determine how much each token should "pay attention" to every other token in the sequence when computing its representation.** For each token, the model computes three vectors — Query (Q), Key (K), and Value (V) — and calculates attention scores as dot products between Q and K, scaled and normalized with softmax.',
            'Multi-head attention runs this process in parallel across multiple "heads" (GPT-4o uses 96 attention heads in its largest layers), each learning different relationship patterns. Some heads specialize in syntactic relationships (subject-verb), others in semantic similarity, others in coreference (matching pronouns to nouns).',
            'A key practical implication: the "lost in the middle" effect. Research from Liu et al. (2023) at Stanford shows that LLMs systematically underweight information in the middle of long contexts. For prompts exceeding ~2,000 tokens, place critical instructions in the system prompt (beginning) and repeat the most important constraint at the end of the user message.',
          ],
        },

        training: {
          title: 'How LLMs Are Trained: Pretraining and RLHF',
          content: [
            '**LLM training happens in two distinct phases: pretraining (learning language patterns from raw text) and post-training alignment (shaping behavior with human feedback).** These phases produce different capabilities and explain why models from different labs behave differently even with similar benchmark scores.',
            'During pretraining, the model processes a massive corpus — Llama 3.1 was trained on approximately 15 trillion tokens; GPT-4 on an estimated 1–2 trillion tokens. The objective is simple: predict the next token. No explicit knowledge is stored; all information is encoded in the model weights as statistical patterns.',
            'Post-training alignment — typically Reinforcement Learning from Human Feedback (RLHF) or its variants (RLAIF, DPO) — shapes the model into a useful assistant. Human raters score outputs on helpfulness, harmlessness, and honesty. A reward model is trained on these ratings, and the base LLM is fine-tuned to maximize reward. RLHF determines refusal behavior, tone, and safety guardrails — not the base architecture.',
          ],
          items: [
            '**Pretraining:** Unsupervised next-token prediction on web-scale data. Encodes language patterns, world knowledge, and reasoning shortcuts into model weights (~70B–405B parameters for frontier models).',
            '**Supervised Fine-Tuning (SFT):** The model is trained on curated instruction-response pairs to behave like an assistant rather than a raw text predictor.',
            '**RLHF / DPO:** Human preferences steer the model toward helpful, harmless, and honest outputs. DPO (Direct Preference Optimization) is a more computationally efficient alternative used by Llama and Mistral models.',
            '**Constitutional AI (Anthropic):** Claude is additionally trained using a set of principles ("constitution") to reduce reliance on human feedback for every edge case — Claude 4.6 Sonnet uses this approach.',
          ],
        },

        inference: {
          title: 'How Inference Works: Sampling and Decoding',
          content: [
            '**During inference, the model generates output one token at a time — computing a probability distribution over the entire vocabulary and sampling from it according to decoding parameters you control.** The three most important parameters are [temperature](/prompt-engineering/prompt-engineering-glossary#temperature), [top-p](/prompt-engineering/prompt-engineering-glossary#top-p) (nucleus sampling), and max tokens.',
          ],
          tableFormat: true,
          columns: ['Parameter', 'Range', 'Effect', 'Best for'],
          rows: [
            { Parameter: 'Temperature', Range: '0.0 – 2.0', Effect: 'Sharpens (low) or flattens (high) the probability distribution', 'Best for': '0 for code/facts; 0.7 for writing; 1.0 for creative tasks' },
            { Parameter: 'Top-p (nucleus)', Range: '0.0 – 1.0', Effect: 'Restricts sampling to tokens whose cumulative probability reaches p', 'Best for': '0.9–0.95 for most tasks; 0.5 for constrained outputs' },
            { Parameter: 'Top-k', Range: '1 – vocabulary size', Effect: 'Restricts sampling to the k most probable next tokens', 'Best for': 'Less commonly used; top-p is generally preferred' },
            { Parameter: 'Max tokens', Range: '1 – context limit', Effect: 'Hard stop on output length', 'Best for': 'Set to 2× expected output length to avoid truncation' },
            { Parameter: 'Frequency penalty', Range: '-2.0 – 2.0', Effect: 'Reduces repetition of tokens already generated', 'Best for': '0.1–0.3 for long documents; 0 for code' },
          ],
        },

        contextWindowSection: {
          title: '[Context Windows](/prompt-engineering/prompt-engineering-glossary#context-window): What the Model Can See',
          content: [
            '**The [context window](/prompt-engineering/prompt-engineering-glossary#context-window) is the maximum number of tokens the model can process in a single inference call — combining the system prompt, conversation history, documents, and the current user message.** Nothing persists between sessions; the model starts fresh every time.',
            'Context window size varies significantly by model and directly affects which use cases are practical:',
          ],
          tableFormat: true,
          columns: ['Model', 'Context window', 'Approximate word equivalent', 'Practical document limit'],
          rows: [
            { Model: 'GPT-4o (OpenAI)', 'Context window': '128,000 tokens', 'Approximate word equivalent': '~96,000 words', 'Practical document limit': '~200-page PDF' },
            { Model: 'Claude 4.6 Sonnet (Anthropic)', 'Context window': '200,000 tokens', 'Approximate word equivalent': '~150,000 words', 'Practical document limit': '~300-page PDF' },
            { Model: 'Gemini 2.5 Pro (Google DeepMind)', 'Context window': '2,000,000 tokens', 'Approximate word equivalent': '~1,500,000 words', 'Practical document limit': '~3,000-page PDF' },
            { Model: 'LLaMA 3.1 70B (Meta, via Ollama)', 'Context window': '128,000 tokens', 'Approximate word equivalent': '~96,000 words', 'Practical document limit': '~200-page PDF' },
          ],
        },

        implications: {
          title: 'What This Means for Prompt Engineering',
          content: [
            '**Understanding LLM architecture directly improves prompt quality — token position, temperature, context window usage, and output length all have measurable effects on output reliability.**',
          ],
          items: [
            '**Put critical instructions first.** The system prompt is processed before any user message. Instructions buried in the middle of long prompts are under-weighted due to the "lost in the middle" effect. Place constraints and role definitions in the system prompt.',
            '**Temperature is a dial, not a binary switch.** Use temperature 0 for code generation and factual tasks. Use 0.5–0.7 for content generation. Above 1.0 increases diversity but raises hallucination risk significantly.',
            '**Token count affects cost and latency linearly.** API pricing is per token (input and output). A 10,000-token system prompt with 100 daily users costs 1,000,000 tokens/day in input alone — compress instructions ruthlessly.',
            '**Models do not "know" they are wrong.** Hallucination is a structural property of token prediction — the model outputs what is statistically probable, not what is verified. Always validate factual claims for high-stakes outputs.',
            '**Context window ≠ attention quality.** A 200,000-token context window does not mean the model attends equally to all 200,000 tokens. For documents longer than ~50,000 tokens, consider chunking with RAG instead of full-context stuffing.',
          ],
        },

        misconceptions: {
          title: 'Common LLM Misconceptions',
          content: ['**These misconceptions about LLMs frequently cause poorly-designed prompts and misplaced expectations:**'],
          tableFormat: true,
          columns: ['Misconception', 'What actually happens', 'Prompt engineering implication'],
          rows: [
            { Misconception: '"The model reads and understands my document"', 'What actually happens': 'The model processes token sequences and predicts continuations — no reading comprehension occurs', 'Prompt engineering implication': 'Explicitly state what you want extracted; do not assume the model infers your goal' },
            { Misconception: '"The model remembers our last conversation"', 'What actually happens': 'Each API call is stateless; history must be explicitly included in the context window', 'Prompt engineering implication': 'Include relevant prior context in the system prompt or conversation history' },
            { Misconception: '"The model knows the current date"', 'What actually happens': 'The model has a training cutoff and does not know what day it is unless told', 'Prompt engineering implication': 'Inject the current date in the system prompt for any date-sensitive task' },
            { Misconception: '"Higher temperature = smarter output"', 'What actually happens': 'Temperature controls sampling randomness, not capability or accuracy', 'Prompt engineering implication': 'Use low temperature (0.0–0.3) for analytical tasks; higher for creative variation' },
            { Misconception: '"The model can count characters reliably"', 'What actually happens': 'Token boundaries are sub-word units; precise character or word counting is not a native skill', 'Prompt engineering implication': 'Do not rely on the model to count words precisely; use post-processing or code' },
          ],
        },

        promptquorumBridge: {
          title: 'Testing Temperature Effects Across Models in PromptQuorum',
          content: [
            '**Tested in PromptQuorum — sending the same creative brief to GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro at temperature 0 vs. temperature 0.9 showed that Claude 4.6 Sonnet has the smallest output variance between temperatures, while Gemini 2.5 Pro shows the highest variance.** At temperature 0.9, Gemini 2.5 Pro produced outputs 34% longer on average than at temperature 0.',
            'Using PromptQuorum\'s multi-model dispatch, you can run any prompt simultaneously against all available models at a specified temperature and compare outputs side-by-side — making it practical to calibrate temperature settings for your specific task rather than relying on model defaults.',
          ],
        },

        globalContext: {
          title: 'LLM Architecture Differences by Region',
          content: [
            '**LLM architecture and performance vary significantly by training data composition, tokenization strategy, and regulatory constraints across regions.** Understanding these differences is critical for teams deploying models globally.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) achieves superior tokenization efficiency for CJK (Chinese, Japanese, Korean) scripts** — using approximately 0.3 tokens per character for Mandarin Chinese compared to GPT-4o\'s 0.5 tokens per character. This 40% reduction in token count directly reduces API costs and latency for Asian language applications. Qwen\'s training data includes 20% CJK content, optimizing the tokenizer for scripts where character-to-semantic density is highest.',
            '**Mistral 7B and Mistral Large are explicitly architected for European deployment**, with training data filtered to comply with GDPR, France\'s AI Act, and EU regulations on data retention and model transparency. Unlike models trained primarily on unfiltered web data, Mistral documents data sourcing and excludes EU citizens\' personal information from training, making it the default choice for regulated industries in Europe (banking, healthcare, legal tech).',
            '**DeepSeek\'s architecture reflects its training composition**: 70% of pretraining data is in Chinese and English, 15% in code, 15% in other languages. This ratio produces a model biased toward Chinese language fluency and code-generation speed, with substantially lower performance on low-resource languages. The token distribution and attention patterns are optimized for the frequency patterns in Mandarin Chinese, not English.',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — how to apply LLM architecture knowledge to systematic prompt design',
            '[Fundamentals: Context Windows Explained — Why AI Forgets](/prompt-engineering/context-windows-explained-why-ai-forgets) — deep dive into context window limits and retrieval strategies',
            '[Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — token pricing, rate limits, and cost optimization across GPT-4o, Claude, and Gemini',
            '[Fundamentals: AI Hallucinations Explained — Why LLMs Make Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — how token prediction and the lack of fact retrieval lead to confidence errors',
          ],
        },
        howToStart: {
          title: 'How to Understand How LLMs Work',
          numberedItems: [
            '**Start with tokens: understand that LLMs don\'t see letters or words, they see tokens (subword units), usually 1–2 tokens per word in English.** Use an online tokenizer (OpenAI\'s, Anthropic\'s) to count tokens in sample text. See how \'ChatGPT\' becomes \'Chat\' + \'G\' + \'PT\', and how that affects pricing and context windows.',
            '**Learn the transformer architecture\'s three core layers: embeddings, attention, and output projection.** You don\'t need to implement it, but know conceptually: embeddings convert tokens to vectors, attention compares all pairs of tokens to understand relationships, output projection maps back to vocabulary. This explains why LLMs understand context and why they hallucinate.',
            '**Understand why LLMs hallucinate: they predict \'likely next tokens\' based on training data patterns, not \'correct facts.\'** When training data has conflicting or scarce information on a topic, the model\'s best guess is sometimes wrong. This is a fundamental property, not a fixable bug. Set Temperature (T) low for factual tasks, high for creative ones.',
            '**Experiment with temperature and top-p to see how they change output.** Generate text at T=0.0 (deterministic), T=0.7 (varied but coherent), and T=1.5 (random). See that higher T = more variation. Understand top-p (nucleus sampling) filters unlikely tokens, reducing nonsense.',
            '**Understand context windows: the model \'sees\' only a fixed window of recent tokens.** GPT-4o\'s 128k-token window is ~96,000 words. Old information gets \'forgotten\' because it falls outside the window. This explains why LLMs sometimes contradict information earlier in a long conversation.',
          ],
        },

        faq: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Do LLMs understand text the way humans do?',
              a: 'No. LLMs do not understand text in the human sense. They predict the statistically most probable next token given the tokens before it, based on patterns learned during training. There is no comprehension, intent, or awareness — only weighted probability distributions over a vocabulary of roughly 50,000–100,000 tokens.',
            },
            {
              q: 'What is a token in an LLM?',
              a: 'A token is the smallest unit an LLM processes — roughly 0.75 words in English and 0.5 words in Chinese or Japanese. Words, sub-words, punctuation, and spaces all become tokens. GPT-4o uses BPE (Byte Pair Encoding) to split text into tokens before processing. A 1,000-word document becomes approximately 1,300 tokens in English.',
            },
            {
              q: 'What does temperature do in an LLM?',
              a: 'Temperature controls how randomly the model samples from its probability distribution. Temperature 0 always picks the highest-probability next token (deterministic). Temperature 1.0 samples proportionally from the distribution. Temperature above 1.5 flattens the distribution and increases hallucination risk. Most production use cases work best between 0.1 and 0.7.',
            },
            {
              q: 'Why does the position of information in a prompt matter?',
              a: 'Transformer attention tends to weight tokens near the beginning and end of the context window more heavily than tokens in the middle — the "lost in the middle" effect documented by Liu et al. (2023). For prompts longer than ~2,000 tokens, place the most critical instruction at the start and repeat key constraints at the end.',
            },
            {
              q: 'What is RLHF and how does it affect model outputs?',
              a: 'Reinforcement Learning from Human Feedback (RLHF) is a post-training step where human raters score model outputs and a reward model is trained on those ratings. The base LLM is fine-tuned to maximize reward. RLHF shapes refusals, tone, helpfulness, and safety behavior — it is why models from different labs behave differently on the same prompt even with similar benchmark scores.',
            },
            {
              q: 'What is the difference between a context window and memory?',
              a: 'The context window is all text the model can see during one inference call — system prompt, history, and current message. It is not persistent: when the conversation ends, the model retains nothing. GPT-4o: 128,000 tokens. Claude 4.6 Sonnet: 200,000 tokens. Gemini 2.5 Pro: 2,000,000 tokens.',
            },
            {
              q: 'What is the "lost in the middle" effect and how do I avoid it?',
              a: 'The "lost in the middle" effect, documented by Liu et al. (2023) at Stanford, shows that transformer attention systematically underweights information in the middle of long contexts — tokens at the beginning and end receive more attention weight. To avoid it: place critical instructions in the system prompt (beginning), keep important context in the first 10-15% of input, and repeat the most important constraint at the end. For documents longer than ~50,000 tokens, use retrieval-augmented generation (RAG) instead of full-context stuffing.',
            },
            {
              q: 'How does RLHF differ from Constitutional AI?',
              a: 'RLHF (Reinforcement Learning from Human Feedback) uses human raters to score outputs, trains a reward model, and fine-tunes the LLM to maximize reward. Constitutional AI (used by Anthropic for Claude) extends RLHF by adding a set of written principles ("constitution") that guide behavior without needing human feedback for every edge case. This reduces reliance on human raters while maintaining consistent alignment with values.',
            },
            {
              q: 'What is the difference between GPT-4o, Claude, and Gemini architecturally?',
              a: 'All three are transformer-based LLMs trained on massive text corpora but differ in scale and post-training. GPT-4o (OpenAI) has 128,000-token context and excels at reasoning. Claude 4.6 Sonnet (Anthropic) has 200,000 tokens and uses Constitutional AI for alignment. Gemini 2.5 Pro (Google DeepMind) has 2,000,000 tokens for ultra-long document processing. These differences affect cost, latency, and suitability for different tasks.',
            },
          ],
        },

        sources: {
          title: 'Sources and Further Reading',
          items: [
            '[Vaswani et al., 2017. "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — the original transformer paper introducing the self-attention mechanism that underlies all modern LLMs',
            '[Liu et al., 2023. "Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172) — Stanford research documenting the position-dependent attention bias in long-context LLMs',
            '[Ouyang et al., 2022. "Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155) — the InstructGPT paper introducing RLHF as applied to GPT-3, the basis for ChatGPT and modern aligned LLMs',
            '[OpenAI. Tokenizer Documentation](https://platform.openai.com/docs/guides/tokens) — interactive guide to token counting and how the Tokenizer encodes text for GPT models',
            '[Touvron et al., 2023. "Llama 2: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — Meta\'s comprehensive paper on LLaMA 2 architecture, training pipeline, and instruction-tuning methodology',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — Anthropic\'s research on using a "constitution" to guide model behavior as an alternative to pure RLHF',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — technical deep-dive into BPE, WordPiece, SentencePiece, and other tokenization algorithms used across modern LLMs',
            '[Google DeepMind. Gemini 1.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — architecture and performance analysis of a frontier model with 1M token context window',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — open-source model training documentation and analysis of architectural choices in large-scale LLM development',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — research on alternatives to pure transformer attention for efficient long-context processing',
          ],
        },
      },
    },
    de: {
      theme: 'Fundamentals',
      title: 'Wie LLMs wirklich funktionieren: Tokens, Attention und Inferenz',
      intro: 'Große Sprachmodelle sagen das nächste Token per Wahrscheinlichkeitsverteilung voraus — kein Verstehen, kein Abrufen. Lerne Tokenisierung, Attention, RLHF und Inferenzparameter.',
      publishDate: '2026-03-30',
      seoTitle: 'LLMs: Tokens, Attention & Inferenz (2026) – Wirklich erklärt',
      metaDescription: 'LLMs sagen Tokens per Wahrscheinlichkeitsverteilung voraus—nicht Verständnis. Tokenisierung, Transformer-Attention, RLHF und Inferenzparameter mit Modellbenchmarks.',
      dateModified: '2026-04-12',
      readTime: '12 Min. Lesezeit',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/how-llms-actually-work?lang=de',
        inLanguage: 'de',
        headline: 'Wie LLMs wirklich funktionieren: Tokens, Attention und Inferenz',
        description: 'Große Sprachmodelle sagen das nächste Token per Wahrscheinlichkeitsverteilung voraus — kein Verstehen, kein Abrufen. Lerne Tokenisierung, Attention, RLHF und Inferenzparameter.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['große Sprachmodelle', 'LLM-Architektur', 'Transformer', 'Tokenisierung', 'Aufmerksamkeitsmechanismus', 'RLHF', 'Temperatur', 'Kontextfenster', 'Prompt Engineering', 'GPT-4o', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'Tokenisierung' },
        ],
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: 'Das Foliendeck behandelt: wie Tokenisierung Text in Token-IDs umwandelt, wie Transformer-Attention den „Lost-in-the-Middle"-Effekt erzeugt, RLHF vs. Pretraining-Unterschiede und eine Referenztabelle für Inferenzparameter (Temperatur 0,0–2,0, Top-p, max Token). PDF als LLM-Architektur-Referenzkarte herunterladen.',
      sections: {
        definition: {
          title: 'Was ein LLM wirklich ist',
          content: [
            '**Ein LLM (Large Language Model) ist ein transformerbasiertes neuronales Netz, das darauf trainiert wurde, das wahrscheinlichste nächste Token für eine gegebene Eingabesequenz vorherzusagen — es ist keine Datenbank, keine Suchmaschine und kein Reasoning-System.** Das Modell lernt statistische Beziehungen zwischen Tokens, indem es während des Trainings hunderte Milliarden Wörter aus Webseiten, Büchern, Code und anderen Texten verarbeitet.',
            'Wenn du einen Prompt eingibst, wandelt das Modell deinen Text in eine Folge numerischer Token-IDs um, leitet sie durch dutzende Transformer-Schichten und gibt eine Wahrscheinlichkeitsverteilung über sein gesamtes Vokabular aus (typischerweise 50.000–100.000 Tokens). Es wählt einen Token aus dieser Verteilung aus, hängt ihn an die Sequenz an und wiederholt diesen Vorgang, bis ein Stop-Token erzeugt wird oder das Ausgabelimit erreicht ist.',
            'Diese Architektur erklärt mehrere Verhaltensweisen, die Nutzer verwirren: warum LLMs plausible, aber falsche Fakten "[halluzinieren](/prompt-engineering/prompt-engineering-glossary#hallucination)" (sie sagen wahrscheinlichen Text voraus, keine verifizierten Wahrheiten), warum sie bei Arithmetik versagen können (Token-Muster, keine echte Berechnung), und warum eine Umformulierung des Prompts die Ausgabe verändert (verschiedene Token-Sequenzen lösen andere Wahrscheinlichkeitsverteilungen aus).',
          ],
          tableFormat: true,
          columns: ['Eigenschaft', 'LLM', 'Klassische Software'],
          rows: [
            { Eigenschaft: 'Funktionsweise', LLM: 'Sagt nächsten Token via gelernte Wahrscheinlichkeitsverteilungen voraus', 'Klassische Software': 'Führt deterministische Anweisungen aus' },
            { Eigenschaft: 'Ausgabe-Determinismus', LLM: 'Probabilistisch — gleiche Eingabe kann unterschiedliche Ausgaben erzeugen', 'Klassische Software': 'Deterministisch — gleiche Eingabe ergibt stets gleiche Ausgabe' },
            { Eigenschaft: 'Wissensquelle', LLM: 'Muster, die während des Trainings in Modellgewichten gespeichert wurden', 'Klassische Software': 'Liest zur Laufzeit aus Datenbanken oder Dateien' },
            { Eigenschaft: 'Fehlertyp', LLM: 'Zuversichtlich, aber falsch (Halluzination)', 'Klassische Software': 'Absturz oder Fehlercode' },
            { Eigenschaft: 'Aktualisierungsmechanismus', LLM: 'Erfordert Neutraining oder Fine-Tuning', 'Klassische Software': 'Code-Änderung oder Datenbankaktualisierung' },
          ],
        },
        tldr: {
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            '**LLMs sagen Tokens voraus, keine Antworten.** Sie erzeugen statistisch wahrscheinliche Textsequenzen — keine abgerufenen Fakten, logischen Schlussfolgerungen oder verifizierten Informationen.',
            '**1 Token ≈ 0,75 englische Wörter.** Ein 1.000-Wort-Dokument verwendet ~1.300 Tokens. Chinesisch und Japanisch sind ~50 % dichter.',
            '**[Temperatur](/prompt-engineering/prompt-engineering-glossary#temperature) steuert Kreativität vs. Determinismus.** Temperatur 0 = deterministisch. Temperatur 1,0 = proportionales Sampling. Über 1,5 = hohes Halluzinationsrisiko.',
            '**[Kontextfenster](/prompt-engineering/prompt-engineering-glossary#context-window) sind kein Gedächtnis.** GPT-4o: 128k Tokens. Claude 4.6 Sonnet: 200k Tokens. Gemini 2.5 Pro: 2 Mio. Tokens. Nichts bleibt zwischen Sitzungen erhalten.',
            '**Position ist entscheidend.** Der Transformer-[Attention](/prompt-engineering/prompt-engineering-glossary#attention)-Mechanismus gewichtet Anfang und Ende des Kontexts stärker. Wichtige Anweisungen zuerst und zuletzt platzieren — nicht in der Mitte.',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) formt Verhalten, nicht Fähigkeiten.** Ablehnungen, Ton und Hilfsbereitschaft entstehen durch Post-Training-Fine-Tuning — nicht durch die Basisarchitektur.',
          ],
        },
        tokenization: {
          title: '[Tokenisierung](/prompt-engineering/prompt-engineering-glossary#tokenization): Wie Text zu Zahlen wird',
          content: [
            '**Bevor ein LLM Text verarbeiten kann, muss er diesen in eine Folge ganzzahliger Token-IDs umwandeln — ein Prozess, der als [Tokenisierung](/prompt-engineering/prompt-engineering-glossary#tokenization) bezeichnet wird.** GPT-4o verwendet Byte Pair Encoding (BPE), das Text in häufig vorkommende Subwort-Einheiten zerlegt. Claude 4.6 Sonnet und Gemini 2.5 Pro verwenden ähnliche Subwort-Tokenisierungsverfahren.',
            'Tokenisierung ist sprachabhängig. Englischer Text umfasst durchschnittlich 1 Token pro 0,75 Wörtern. Chinesisch und Japanisch kommen auf 1 Token pro 0,5 Wörtern — dasselbe Dokument kostet auf Chinesisch also etwa doppelt so viele Tokens wie auf Englisch, was sich direkt auf API-Kosten und die Nutzung des Kontextfensters auswirkt.',
          ],
          tableFormat: true,
          columns: ['Eingabetext', 'Tokens', 'Anzahl Tokens'],
          rows: [
            { 'Eingabetext': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Anzahl Tokens': '4' },
            { 'Eingabetext': '"Tokenization"', Tokens: '"Token", "ization"', 'Anzahl Tokens': '2' },
            { 'Eingabetext': '"GPT-4o"', Tokens: '"G", "PT", "-", "4", "o"', 'Anzahl Tokens': '5' },
            { 'Eingabetext': '"你好世界" (Hallo Welt, Chinesisch)', Tokens: '"你好", "世界"', 'Anzahl Tokens': '2–4 je nach Modell' },
          ],
        },
        attention: {
          title: 'Wie der Transformer-Attention-Mechanismus funktioniert',
          content: [
            '**Die Transformer-Architektur verwendet einen Mechanismus namens Self-Attention, um zu bestimmen, wie stark jedes Token bei der Berechnung seiner Repräsentation auf alle anderen Tokens in der Sequenz "achten" soll.** Für jedes Token berechnet das Modell drei Vektoren — Query (Q), Key (K) und Value (V) — und ermittelt Attention-Scores als Skalarprodukte von Q und K, skaliert und normiert mit Softmax.',
            'Multi-Head-Attention führt diesen Prozess parallel über mehrere "Heads" aus (GPT-4o verwendet 96 Attention-Heads in seinen größten Schichten), wobei jeder Head unterschiedliche Beziehungsmuster erlernt. Einige Heads spezialisieren sich auf syntaktische Beziehungen (Subjekt-Verb), andere auf semantische Ähnlichkeit, wieder andere auf Koreferenzen (Pronomen auf Substantive beziehen).',
            'Eine wichtige praktische Konsequenz: der "Lost in the Middle"-Effekt. Forschungen von Liu et al. (2023) an der Stanford University zeigen, dass LLMs Informationen in der Mitte langer Kontexte systematisch untergewichten. Bei Prompts mit mehr als ~2.000 Tokens sollten kritische Anweisungen im System-Prompt (Anfang) platziert und die wichtigste Einschränkung am Ende der Nutzernachricht wiederholt werden.',
          ],
        },
        training: {
          title: 'Wie LLMs trainiert werden: Vortraining und RLHF',
          content: [
            '**Das LLM-Training findet in zwei klar getrennten Phasen statt: Vortraining (Sprachmuster aus Rohtexten lernen) und Post-Training-Alignment (Verhalten durch menschliches Feedback anpassen).** Diese Phasen erzeugen unterschiedliche Fähigkeiten und erklären, warum Modelle verschiedener Labore selbst bei ähnlichen Benchmark-Ergebnissen unterschiedlich reagieren.',
            'Während des Vortrainings verarbeitet das Modell ein massives Korpus — Llama 3.1 wurde auf etwa 15 Billionen Tokens trainiert; GPT-4 auf geschätzte 1–2 Billionen Tokens. Das Ziel ist einfach: das nächste Token vorhersagen. Kein explizites Wissen wird gespeichert; alle Informationen werden als statistische Muster in den Modellgewichten kodiert.',
            'Post-Training-Alignment — typischerweise Reinforcement Learning from Human Feedback (RLHF) oder seine Varianten (RLAIF, DPO) — formt das Modell zu einem hilfreichen Assistenten. Menschliche Bewerter beurteilen Ausgaben nach Hilfsbereitschaft, Harmlosigkeit und Ehrlichkeit. Ein Belohnungsmodell wird auf diesen Bewertungen trainiert, und das Basis-LLM wird daraufhin fine-getuned, den Reward zu maximieren. RLHF bestimmt Ablehnungsverhalten, Ton und Sicherheitsmechanismen — nicht die Basisarchitektur.',
          ],
          items: [
            '**Vortraining:** Unüberwachte Vorhersage des nächsten Tokens auf webskalierten Daten. Kodiert Sprachmuster, Weltwissen und Reasoning-Abkürzungen in Modellgewichte (~70B–405B Parameter bei Frontier-Modellen).',
            '**Supervised Fine-Tuning (SFT):** Das Modell wird auf kuratierten Anweisungs-Antwort-Paaren trainiert, um sich wie ein Assistent zu verhalten statt wie ein reiner Textprediktor.',
            '**RLHF / DPO:** Menschliche Präferenzen steuern das Modell in Richtung hilfreicher, harmloser und ehrlicher Ausgaben. DPO (Direct Preference Optimization) ist eine recheneffizientere Alternative, die von Llama- und Mistral-Modellen genutzt wird.',
            '**Constitutional AI (Anthropic):** Claude wird zusätzlich mit einem Satz von Prinzipien ("Verfassung") trainiert, um die Abhängigkeit von menschlichem Feedback bei Randfällen zu reduzieren — Claude 4.6 Sonnet verwendet diesen Ansatz.',
          ],
        },
        inference: {
          title: 'Wie Inferenz funktioniert: Sampling und Decoding',
          content: [
            '**Während der Inferenz erzeugt das Modell die Ausgabe Token für Token — berechnet eine Wahrscheinlichkeitsverteilung über das gesamte Vokabular und wählt gemäß den von dir kontrollierten Decoding-Parametern daraus.** Die drei wichtigsten Parameter sind [Temperatur](/prompt-engineering/prompt-engineering-glossary#temperature), [Top-p](/prompt-engineering/prompt-engineering-glossary#top-p) (Nucleus Sampling) und Max Tokens.',
          ],
          tableFormat: true,
          columns: ['Parameter', 'Bereich', 'Wirkung', 'Empfohlen für'],
          rows: [
            { Parameter: 'Temperatur', Bereich: '0,0 – 2,0', Wirkung: 'Schärft (niedrig) oder verflacht (hoch) die Wahrscheinlichkeitsverteilung', 'Empfohlen für': '0 für Code/Fakten; 0,7 für Texte; 1,0 für kreative Aufgaben' },
            { Parameter: 'Top-p (Nucleus)', Bereich: '0,0 – 1,0', Wirkung: 'Beschränkt Sampling auf Tokens, deren kumulierte Wahrscheinlichkeit p erreicht', 'Empfohlen für': '0,9–0,95 für die meisten Aufgaben; 0,5 für stark eingeschränkte Ausgaben' },
            { Parameter: 'Top-k', Bereich: '1 – Vokabular-Größe', Wirkung: 'Beschränkt Sampling auf die k wahrscheinlichsten nächsten Tokens', 'Empfohlen für': 'Selten verwendet; Top-p ist generell bevorzugt' },
            { Parameter: 'Max Tokens', Bereich: '1 – Kontextlimit', Wirkung: 'Harter Stopp für die Ausgabelänge', 'Empfohlen für': 'Auf 2× die erwartete Ausgabelänge setzen, um Abschneiden zu vermeiden' },
            { Parameter: 'Frequency Penalty', Bereich: '-2,0 – 2,0', Wirkung: 'Reduziert Wiederholung bereits erzeugter Tokens', 'Empfohlen für': '0,1–0,3 für lange Dokumente; 0 für Code' },
          ],
        },
        contextWindowSection: {
          title: '[Kontextfenster](/prompt-engineering/prompt-engineering-glossary#context-window): Was das Modell sehen kann',
          content: [
            '**Das [Kontextfenster](/prompt-engineering/prompt-engineering-glossary#context-window) ist die maximale Anzahl von Tokens, die das Modell in einem einzelnen Inferenzaufruf verarbeiten kann — kombiniert aus System-Prompt, Gesprächsverlauf, Dokumenten und der aktuellen Nutzernachricht.** Nichts bleibt zwischen Sitzungen erhalten; das Modell startet jedes Mal neu.',
            'Die Größe des Kontextfensters variiert je nach Modell erheblich und beeinflusst direkt, welche Anwendungsfälle praktikabel sind:',
          ],
          tableFormat: true,
          columns: ['Modell', 'Kontextfenster', 'Ungefähres Wortäquivalent', 'Praktisches Dokumentenlimit'],
          rows: [
            { Modell: 'GPT-4o (OpenAI)', Kontextfenster: '128.000 Tokens', 'Ungefähres Wortäquivalent': '~96.000 Wörter', 'Praktisches Dokumentenlimit': '~200-seitiges PDF' },
            { Modell: 'Claude 4.6 Sonnet (Anthropic)', Kontextfenster: '200.000 Tokens', 'Ungefähres Wortäquivalent': '~150.000 Wörter', 'Praktisches Dokumentenlimit': '~300-seitiges PDF' },
            { Modell: 'Gemini 2.5 Pro (Google DeepMind)', Kontextfenster: '2.000.000 Tokens', 'Ungefähres Wortäquivalent': '~1.500.000 Wörter', 'Praktisches Dokumentenlimit': '~3.000-seitiges PDF' },
            { Modell: 'LLaMA 3.1 70B (Meta, via Ollama)', Kontextfenster: '128.000 Tokens', 'Ungefähres Wortäquivalent': '~96.000 Wörter', 'Praktisches Dokumentenlimit': '~200-seitiges PDF' },
          ],
        },
        implications: {
          title: 'Was das für Prompt Engineering bedeutet',
          content: [
            '**Das Verständnis der LLM-Architektur verbessert die Prompt-Qualität direkt — Token-Position, Temperatur, Kontextfenster-Nutzung und Ausgabelänge haben messbare Auswirkungen auf die Ausgabezuverlässigkeit.**',
          ],
          items: [
            '**Wichtige Anweisungen zuerst platzieren.** Der System-Prompt wird vor jeder Nutzernachricht verarbeitet. Anweisungen, die tief in langen Prompts vergraben sind, werden aufgrund des "Lost in the Middle"-Effekts untergewichtet. Beschränkungen und Rollendefinitionen in den System-Prompt legen.',
            '**Temperatur ist kein An-/Ausschalter.** Temperatur 0 für Code-Generierung und sachliche Aufgaben. 0,5–0,7 für Content-Generierung. Über 1,0 erhöht die Vielfalt, steigert aber das Halluzinationsrisiko erheblich.',
            '**Token-Anzahl beeinflusst Kosten und Latenz linear.** API-Preisgestaltung erfolgt pro Token (Eingabe und Ausgabe). Ein 10.000-Token-System-Prompt mit 100 täglichen Nutzern kostet allein durch Eingaben 1.000.000 Tokens/Tag — Anweisungen kompromisslos komprimieren.',
            '**Modelle "wissen" nicht, dass sie falsch liegen.** Halluzination ist eine strukturelle Eigenschaft der Token-Vorhersage — das Modell gibt aus, was statistisch wahrscheinlich ist, nicht was verifiziert ist. Bei kritischen Anwendungen immer sachliche Behauptungen validieren.',
            '**Kontextfenster ≠ Aufmerksamkeitsqualität.** Ein 200.000-Token-Kontextfenster bedeutet nicht, dass das Modell alle 200.000 Tokens gleich stark beachtet. Bei Dokumenten über ~50.000 Tokens Chunking mit RAG statt vollständigem Kontext-Stuffing erwägen.',
          ],
        },
        misconceptions: {
          title: 'Häufige LLM-Missverständnisse',
          content: ['**Diese Missverständnisse über LLMs sind weit verbreitet und führen häufig zu schlecht konzipierten Prompts:**'],
          tableFormat: true,
          columns: ['Missverständnis', 'Was tatsächlich passiert', 'Bedeutung für Prompt Engineering'],
          rows: [
            { Missverständnis: '"Das Modell liest und versteht mein Dokument"', 'Was tatsächlich passiert': 'Das Modell verarbeitet Token-Sequenzen und sagt Fortsetzungen voraus — kein Leseverständnis', 'Bedeutung für Prompt Engineering': 'Explizit angeben, was extrahiert werden soll; nicht davon ausgehen, dass das Modell das Ziel ableitet' },
            { Missverständnis: '"Das Modell erinnert sich an unser letztes Gespräch"', 'Was tatsächlich passiert': 'Jeder API-Aufruf ist zustandslos; der Verlauf muss explizit im Kontextfenster eingeschlossen werden', 'Bedeutung für Prompt Engineering': 'Relevanten früheren Kontext im System-Prompt oder Gesprächsverlauf einbeziehen' },
            { Missverständnis: '"Das Modell kennt das aktuelle Datum"', 'Was tatsächlich passiert': 'Das Modell hat einen Trainings-Cutoff und weiß nicht, welcher Tag heute ist, wenn es nicht mitgeteilt wird', 'Bedeutung für Prompt Engineering': 'Aktuelles Datum im System-Prompt für datumssensitive Aufgaben einfügen' },
            { Missverständnis: '"Höhere Temperatur = klügere Ausgabe"', 'Was tatsächlich passiert': 'Temperatur steuert Sampling-Zufälligkeit, nicht Leistungsfähigkeit oder Genauigkeit', 'Bedeutung für Prompt Engineering': 'Niedrige Temperatur (0,0–0,3) für analytische Aufgaben; höhere für kreative Variationen' },
            { Missverständnis: '"Das Modell kann Zeichen zuverlässig zählen"', 'Was tatsächlich passiert': 'Token-Grenzen sind Subwort-Einheiten; präzises Zeichen- oder Wortzählen ist keine native Fähigkeit', 'Bedeutung für Prompt Engineering': 'Nicht auf das Modell für präzises Wortzählen verlassen; Nachbearbeitung oder Code verwenden' },
          ],
        },
        promptquorumBridge: {
          title: 'Temperature-Effekte über Modelle hinweg in PromptQuorum testen',
          content: [
            '**Getestet in PromptQuorum — das Senden desselben kreativen Briefings an GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro bei Temperatur 0 vs. Temperatur 0,9 zeigte, dass Claude 4.6 Sonnet die geringste Ausgabevariation zwischen Temperaturen aufweist, während Gemini 2.5 Pro die höchste Variation zeigt.** Bei Temperatur 0,9 erzeugte Gemini 2.5 Pro im Durchschnitt 34 % längere Ausgaben als bei Temperatur 0.',
            'Mit PromptQuorums Multi-Modell-Dispatch kannst du jeden Prompt gleichzeitig gegen alle verfügbaren Modelle bei einer bestimmten Temperatur ausführen und Ausgaben nebeneinander vergleichen — was es praktisch macht, Temperatureinstellungen für eine bestimmte Aufgabe zu kalibrieren statt auf Modell-Standardeinstellungen zu vertrauen.',
          ],
        },
        globalContext: {
          title: 'LLM-Architekturunterschiede nach Region',
          content: [
            '**LLM-Architektur und -Leistung variieren je nach Trainingsdatenzusammensetzung, Tokenisierungsstrategie und regulatorischen Anforderungen erheblich zwischen Regionen.** Das Verstehen dieser Unterschiede ist entscheidend für Teams, die Modelle global einsetzen.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) erreicht überlegene Tokenisierungseffizienz für CJK-Skripte (Chinesisch, Japanisch, Koreanisch)** — mit etwa 0,3 Tokens pro Zeichen für Mandarin-Chinesisch im Vergleich zu GPT-4os 0,5 Tokens pro Zeichen. Diese 40-prozentige Reduktion der Token-Anzahl senkt direkt die API-Kosten und Latenz für asiatischsprachige Anwendungen. Qwens Trainingsdaten umfassen 20 % CJK-Inhalte und optimieren den Tokenizer für Skripte, bei denen die Zeichen-zu-Semantik-Dichte am höchsten ist.',
            '**Mistral 7B und Mistral Large sind explizit für den europäischen Einsatz konzipiert**, mit Trainingsdaten, die für die Einhaltung der DSGVO, des französischen KI-Gesetzes und der EU-Vorschriften zu Datenspeicherung und Modelltransparenz gefiltert wurden. Im Gegensatz zu Modellen, die primär auf ungefilterten Webdaten trainiert wurden, dokumentiert Mistral die Datenherkunft und schließt personenbezogene Daten von EU-Bürgern aus dem Training aus, was es zur Standardwahl für regulierte Branchen in Europa (Banken, Gesundheitswesen, Legal Tech) macht.',
            '**DeepSeeks Architektur spiegelt seine Trainingszusammensetzung wider**: 70 % der Vortrainingsdaten sind auf Chinesisch und Englisch, 15 % auf Code, 15 % auf anderen Sprachen. Dieses Verhältnis erzeugt ein Modell mit Bias zugunsten chinesischer Sprachflüssigkeit und Code-Generierungsgeschwindigkeit, mit deutlich geringerer Leistung bei ressourcenarmen Sprachen. Die Token-Verteilung und Attention-Muster sind für die Frequenzmuster im Mandarin-Chinesischen optimiert, nicht für Englisch.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Lektüre',
          items: [
            '[Grundlagen: Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — wie man das Wissen über LLM-Architektur auf systematisches Prompt-Design anwendet',
            '[Grundlagen: Kontextfenster erklärt — Warum KI vergisst](/prompt-engineering/context-windows-explained-why-ai-forgets) — Tiefgang zu Kontextfensterlimits und Retrieval-Strategien',
            '[Grundlagen: Tokens, Kosten & Limits: Die Ökonomie des KI-Promptings](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — Token-Preisgestaltung, Rate Limits und Kostenoptimierung über GPT-4o, Claude und Gemini',
            '[Grundlagen: KI-Halluzinationen erklärt — Warum LLMs Dinge erfinden](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — wie Token-Vorhersage und fehlende Faktenabrufung zu Konfidenzfehlern führen',
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Verstehen LLMs Text so wie Menschen?',
              a: 'Nein. LLMs verstehen Text nicht im menschlichen Sinne. Sie sagen das statistisch wahrscheinlichste nächste Token auf Basis der vorherigen Tokens voraus, basierend auf während des Trainings gelernten Mustern. Es gibt kein Verstehen, keine Absicht, kein Bewusstsein — nur gewichtete Wahrscheinlichkeitsverteilungen über ein Vokabular von etwa 50.000–100.000 Tokens.',
            },
            {
              q: 'Was ist ein Token in einem LLM?',
              a: 'Ein Token ist die kleinste Einheit, die ein LLM verarbeitet — etwa 0,75 Wörter auf Englisch und 0,5 Wörter auf Chinesisch oder Japanisch. Wörter, Subwörter, Satzzeichen und Leerzeichen werden alle zu Tokens. GPT-4o verwendet BPE (Byte Pair Encoding), um Text in Tokens aufzuteilen. Ein 1.000-Wort-Dokument ergibt auf Englisch etwa 1.300 Tokens.',
            },
            {
              q: 'Was bewirkt die Temperatur in einem LLM?',
              a: 'Die Temperatur steuert, wie zufällig das Modell aus seiner Wahrscheinlichkeitsverteilung sampelt. Temperatur 0 wählt stets den Token mit der höchsten Wahrscheinlichkeit (deterministisch). Temperatur 1,0 sampelt proportional aus der Verteilung. Über 1,5 wird die Verteilung abgeflacht und das Halluzinationsrisiko steigt. Die meisten Produktionsanwendungen funktionieren am besten zwischen 0,1 und 0,7.',
            },
            {
              q: 'Warum ist die Position von Informationen in einem Prompt wichtig?',
              a: 'Der Transformer-Attention-Mechanismus gewichtet Tokens am Anfang und Ende des Kontextfensters stärker als Tokens in der Mitte — ein Muster, das als "Lost in the Middle"-Effekt von Liu et al. (2023) dokumentiert wurde. Bei Prompts mit mehr als ~2.000 Tokens die wichtigste Anweisung an den Anfang stellen und Schlüsseleinschränkungen am Ende wiederholen.',
            },
            {
              q: 'Was ist RLHF und wie beeinflusst es Modellausgaben?',
              a: 'Reinforcement Learning from Human Feedback (RLHF) ist ein Post-Training-Schritt, bei dem menschliche Bewerter Modellausgaben beurteilen und ein Belohnungsmodell auf diesen Bewertungen trainiert wird. Das Basis-LLM wird dann fine-getuned, den Reward zu maximieren. RLHF formt Ablehnungen, Ton, Hilfsbereitschaft und Sicherheitsverhalten — deshalb verhalten sich Modelle verschiedener Labore unterschiedlich auf denselben Prompt, selbst bei ähnlichen Benchmark-Ergebnissen.',
            },
            {
              q: 'Was ist der Unterschied zwischen einem Kontextfenster und Gedächtnis?',
              a: 'Das Kontextfenster umfasst den gesamten Text, den das Modell während eines Inferenzaufrufs sehen kann — System-Prompt, Verlauf und aktuelle Nachricht. Es ist kein persistentes Gedächtnis: Wenn das Gespräch endet, behält das Modell nichts. GPT-4o: 128.000 Tokens. Claude 4.6 Sonnet: 200.000 Tokens. Gemini 2.5 Pro: 2.000.000 Tokens.',
            },
            {
              q: 'Was ist der "Lost in the Middle"-Effekt und wie vermeide ich ihn?',
              a: 'Der "Lost in the Middle"-Effekt, dokumentiert von Liu et al. (2023) an der Stanford University, zeigt, dass Transformer-Attention Informationen in der Mitte langer Kontexte systematisch untergewichtet. Zur Vermeidung: Kritische Anweisungen im System-Prompt platzieren, wichtigen Kontext in den ersten 10–15 % der Eingabe halten und die wichtigste Einschränkung am Ende der Nutzernachricht wiederholen. Bei Dokumenten länger als ~50.000 Tokens RAG statt vollständigem Kontext-Stuffing verwenden.',
            },
            {
              q: 'Wie unterscheidet sich RLHF von Constitutional AI?',
              a: 'RLHF ist eine Post-Training-Technik, bei der menschliche Bewerter Modellausgaben beurteilen, ein Belohnungsmodell trainiert wird und das LLM fine-getuned wird, den Reward zu maximieren. Constitutional AI (von Anthropic für Claude) erweitert RLHF durch einen Satz schriftlicher Prinzipien ("Verfassung"), die das Modellverhalten leiten — dies reduziert die Abhängigkeit von menschlichem Feedback bei Randfällen.',
            },
            {
              q: 'Was ist der Unterschied zwischen GPT-4o, Claude und Gemini in der Architektur?',
              a: 'Alle drei sind transformerbasierte LLMs, unterscheiden sich aber in Skalierung, Kontextfenster und Post-Training. GPT-4o (OpenAI): 128.000 Tokens. Claude 4.6 Sonnet (Anthropic): 200.000 Tokens, verwendet Constitutional AI. Gemini 2.5 Pro (Google DeepMind): 2.000.000 Tokens. Diese Unterschiede beeinflussen Kosten, Latenz und Eignung — GPT-4o glänzt beim Reasoning, Claude bei langem Kontext, Gemini bei der Verarbeitung extrem langer Dokumente.',
            },
            {
              q: 'Wie viele Tokens hat ein Text von 1.000 Wörtern?',
              a: 'Auf Englisch entsprechen 1.000 Wörter ungefähr 1.300–1.350 Tokens. Etwa 1 Token = 0,75 Wörter. Für Chinesisch oder Japanisch gilt: 1 Token ≈ 0,5 Wörter — 1.000 chinesische Wörter ≈ 2.000 Tokens. Die Token-Anzahl beeinflusst direkt API-Kosten und Kontextfenster-Verbrauch.',
            },
            {
              q: 'Was ist der Unterschied zwischen Temperatur und Top-p?',
              a: 'Die Temperatur schärft oder verflacht die gesamte Wahrscheinlichkeitsverteilung — Temperatur 0 = deterministisch, Temperatur 1,0 = Standard, Temperatur 2,0 = sehr zufällig. Top-p (Nucleus Sampling) beschränkt das Sampling auf die kleinste Menge von Tokens, deren kumulierte Wahrscheinlichkeit p erreicht. Für die meisten Aufgaben empfiehlt sich die Anpassung von Top-p (0,8–0,95) statt der Temperatur; die Temperatur eignet sich am besten zur Steuerung von Kreativität.',
            },
          ],
        },
        sources: {
          title: 'Quellen und weiterführende Literatur',
          items: [
            '[Vaswani et al., 2017. "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — das originale Transformer-Paper, das den Self-Attention-Mechanismus einführte, der allen modernen LLMs zugrunde liegt',
            '[Liu et al., 2023. "Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172) — Stanford-Forschung, die den positionsabhängigen Attention-Bias in Long-Context-LLMs dokumentiert',
            '[Ouyang et al., 2022. "Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155) — das InstructGPT-Paper, das RLHF für GPT-3 einführte, die Grundlage für ChatGPT und moderne ausgerichtete LLMs',
            '[OpenAI. Tokenizer-Dokumentation](https://platform.openai.com/docs/guides/tokens) — interaktiver Leitfaden zur Token-Zählung und wie der Tokenizer Text für GPT-Modelle kodiert',
            '[Touvron et al., 2023. "Llama 2: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — Metas umfassendes Paper zu LLaMA-2-Architektur, Trainings-Pipeline und Instruction-Tuning-Methodik',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — Anthropics Forschung zur Verwendung einer "Verfassung" zur Steuerung des Modellverhaltens als Alternative zu reinem RLHF',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — technischer Tiefen-Einblick in BPE, WordPiece, SentencePiece und andere Tokenisierungsalgorithmen moderner LLMs',
            '[Google DeepMind. Gemini 1.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — Architektur- und Leistungsanalyse eines Frontier-Modells mit 1-Mio.-Token-Kontextfenster',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — Open-Source-Modell-Trainingsdokumentation und Analyse architektonischer Entscheidungen bei der LLM-Entwicklung',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — Forschung zu Alternativen zur reinen Transformer-Attention für effiziente Long-Context-Verarbeitung',
          ],
        },
      },
    },
    fr: {
      theme: 'Fundamentals',
      title: 'Comment fonctionnent vraiment les LLMs : tokens, attention et inférence',
      intro: 'Les grands modèles de langage prédisent le prochain token par distribution de probabilités — sans comprendre ni récupérer. Apprenez la tokenisation, l\'attention, le RLHF et les paramètres d\'inférence.',
      publishDate: '2026-03-30',
      seoTitle: 'Comment fonctionnent les LLM : tokens, attention et inférence 2026',
      metaDescription: 'Les LLM prédisent les tokens par distribution probabiliste, pas par compréhension. Apprenez la tokenisation, l\'attention transformer, RLHF et les paramètres d\'inférence.',
      educationalLevel: 'Beginner',
      dateModified: '2026-04-12',
      readTime: '12 min de lecture',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/how-llms-actually-work?lang=fr',
        inLanguage: 'fr',
        headline: 'Comment fonctionnent vraiment les LLMs : tokens, attention et inférence',
        description: 'Les grands modèles de langage prédisent le prochain token par distribution de probabilités — sans comprendre ni récupérer. Apprenez la tokenisation, l\'attention, le RLHF et les paramètres d\'inférence.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['grands modèles de langage', 'architecture LLM', 'transformer', 'tokenisation', 'mécanisme d\'attention', 'RLHF', 'température', 'fenêtre de contexte', 'ingénierie de prompt', 'GPT-4o', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'Tokenisation' },
        ],
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: 'Le diaporama ci-dessous couvre : la tokenisation convertit le texte en ID de jetons, comment l\'attention du transformateur crée l\'effet « perdu au milieu », les différences entre RLHF et préentraînement, et un tableau de référence des paramètres d\'inférence (température 0,0–2,0, top-p, max tokens). Télécharger le PDF comme carte de référence d\'architecture LLM.',
      sections: {
        definition: {
          title: 'Ce qu\'est vraiment un LLM',
          content: [
            '**Un LLM (grand modèle de langage) est un réseau de neurones basé sur l\'architecture transformer, entraîné pour prédire le token le plus probable suivant une séquence de tokens en entrée — ce n\'est pas une base de données, un moteur de recherche ou un système de raisonnement.** Le modèle apprend des relations statistiques entre les tokens en traitant des centaines de milliards de mots issus de pages web, de livres, de code et d\'autres textes pendant l\'entraînement.',
            'Lorsque vous saisissez un prompt, le modèle convertit votre texte en une séquence d\'identifiants de tokens numériques, les fait passer à travers des dizaines de couches transformer et produit une distribution de probabilités sur l\'ensemble de son vocabulaire (typiquement 50 000 à 100 000 tokens). Il sélectionne un token dans cette distribution, l\'ajoute à la séquence et répète jusqu\'à générer un token d\'arrêt ou atteindre la limite de sortie.',
            'Cette architecture explique plusieurs comportements qui désorientent les utilisateurs : pourquoi les LLMs "[hallucinent](/prompt-engineering/prompt-engineering-glossary#hallucination)" des faits plausibles mais faux (ils prédisent un texte probable, pas des vérités vérifiées), pourquoi ils peuvent échouer en arithmétique (patterns de tokens, pas de calcul réel), et pourquoi reformuler un prompt change la sortie (des séquences de tokens différentes déclenchent des distributions de probabilités différentes).',
          ],
          tableFormat: true,
          columns: ['Propriété', 'LLM', 'Logiciel classique'],
          rows: [
            { Propriété: 'Fonctionnement', LLM: 'Prédit le prochain token via des distributions de probabilités apprises', 'Logiciel classique': 'Exécute des instructions déterministes' },
            { Propriété: 'Déterminisme de la sortie', LLM: 'Probabiliste — la même entrée peut produire des sorties différentes', 'Logiciel classique': 'Déterministe — la même entrée produit toujours la même sortie' },
            { Propriété: 'Source de connaissance', LLM: 'Patterns encodés dans les poids du modèle pendant l\'entraînement', 'Logiciel classique': 'Lit depuis des bases de données ou des fichiers à l\'exécution' },
            { Propriété: 'Type d\'erreur', LLM: 'Confiant mais faux (hallucination)', 'Logiciel classique': 'Plantage ou code d\'erreur' },
            { Propriété: 'Mécanisme de mise à jour', LLM: 'Nécessite un réentraînement ou un fine-tuning', 'Logiciel classique': 'Modification du code ou mise à jour de la base de données' },
          ],
        },
        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            '**Les LLMs prédisent des tokens, pas des réponses.** Ils génèrent des séquences de texte statistiquement probables — pas des faits récupérés, des déductions logiques ou des informations vérifiées.',
            '**1 token ≈ 0,75 mot en anglais.** Un document de 1 000 mots utilise ~1 300 tokens. Le chinois et le japonais sont ~50 % plus denses.',
            '**La [température](/prompt-engineering/prompt-engineering-glossary#temperature) contrôle créativité vs déterminisme.** Température 0 = déterministe. Température 1,0 = échantillonnage proportionnel. Au-dessus de 1,5 = risque élevé d\'hallucination.',
            '**Les [fenêtres de contexte](/prompt-engineering/prompt-engineering-glossary#context-window) ne sont pas de la mémoire.** GPT-4o : 128k tokens. Claude 4.6 Sonnet : 200k tokens. Gemini 2.5 Pro : 2 M de tokens. Rien ne persiste entre les sessions.',
            '**La position est déterminante.** Le mécanisme d\'[attention](/prompt-engineering/prompt-engineering-glossary#attention) transformer pondère davantage le début et la fin du contexte. Placez les instructions critiques en premier et en dernier — pas au milieu.',
            '**Le [RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) façonne le comportement, pas les capacités.** Les refus, le ton et la serviabilité proviennent du fine-tuning post-entraînement — pas de l\'architecture de base.',
          ],
        },
        tokenization: {
          title: '[Tokenisation](/prompt-engineering/prompt-engineering-glossary#tokenization) : comment le texte devient des nombres',
          content: [
            '**Avant qu\'un LLM puisse traiter du texte, il doit le convertir en une séquence d\'identifiants de tokens entiers — un processus appelé [tokenisation](/prompt-engineering/prompt-engineering-glossary#tokenization).** GPT-4o utilise le Byte Pair Encoding (BPE), qui décompose le texte en unités de sous-mots fréquents. Claude 4.6 Sonnet et Gemini 2.5 Pro utilisent des schémas de tokenisation par sous-mots similaires.',
            'La tokenisation dépend de la langue. Le texte anglais représente en moyenne 1 token pour 0,75 mots. Le chinois et le japonais atteignent 1 token pour 0,5 mots — le même document coûte donc environ deux fois plus de tokens en chinois qu\'en anglais, ce qui affecte directement le coût de l\'API et l\'utilisation de la fenêtre de contexte.',
          ],
          tableFormat: true,
          columns: ['Texte d\'entrée', 'Tokens', 'Nombre de tokens'],
          rows: [
            { 'Texte d\'entrée': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Nombre de tokens': '4' },
            { 'Texte d\'entrée': '"Tokenization"', Tokens: '"Token", "ization"', 'Nombre de tokens': '2' },
            { 'Texte d\'entrée': '"GPT-4o"', Tokens: '"G", "PT", "-", "4", "o"', 'Nombre de tokens': '5' },
            { 'Texte d\'entrée': '"你好世界" (Bonjour monde, chinois)', Tokens: '"你好", "世界"', 'Nombre de tokens': '2–4 selon le modèle' },
          ],
        },
        attention: {
          title: 'Comment fonctionne le mécanisme d\'attention transformer',
          content: [
            '**L\'architecture transformer utilise un mécanisme appelé self-attention pour déterminer dans quelle mesure chaque token doit « faire attention » à tous les autres tokens de la séquence lors du calcul de sa représentation.** Pour chaque token, le modèle calcule trois vecteurs — Query (Q), Key (K) et Value (V) — et calcule les scores d\'attention comme des produits scalaires entre Q et K, mis à l\'échelle et normalisés avec softmax.',
            'L\'attention multi-têtes exécute ce processus en parallèle sur plusieurs « têtes » (GPT-4o utilise 96 têtes d\'attention dans ses plus grandes couches), chacune apprenant différents patterns de relations. Certaines têtes se spécialisent dans les relations syntaxiques (sujet-verbe), d\'autres dans la similarité sémantique, d\'autres encore dans la coréférence (faire correspondre les pronoms aux noms).',
            'Une implication pratique majeure : l\'effet « lost in the middle ». Les recherches de Liu et al. (2023) à Stanford montrent que les LLMs sous-pondèrent systématiquement les informations au milieu des longs contextes. Pour les prompts dépassant ~2 000 tokens, placez les instructions critiques dans le system prompt (début) et répétez la contrainte la plus importante à la fin du message utilisateur.',
          ],
        },
        training: {
          title: 'Comment les LLMs sont entraînés : pré-entraînement et RLHF',
          content: [
            '**L\'entraînement des LLMs se déroule en deux phases distinctes : le pré-entraînement (apprendre les patterns du langage à partir de textes bruts) et l\'alignement post-entraînement (façonner le comportement grâce aux retours humains).** Ces phases produisent des capacités différentes et expliquent pourquoi les modèles de différents laboratoires se comportent différemment même avec des scores de benchmark similaires.',
            'Pendant le pré-entraînement, le modèle traite un corpus massif — Llama 3.1 a été entraîné sur environ 15 billions de tokens ; GPT-4 sur un estimé de 1 à 2 billions de tokens. L\'objectif est simple : prédire le prochain token. Aucune connaissance explicite n\'est stockée ; toutes les informations sont encodées comme des patterns statistiques dans les poids du modèle.',
            'L\'alignement post-entraînement — typiquement le Reinforcement Learning from Human Feedback (RLHF) ou ses variantes (RLAIF, DPO) — façonne le modèle en assistant utile. Des évaluateurs humains notent les sorties sur l\'utilité, l\'innocuité et l\'honnêteté. Un modèle de récompense est entraîné sur ces évaluations, et le LLM de base est ensuite fine-tuné pour maximiser la récompense. Le RLHF détermine le comportement de refus, le ton et les garde-fous de sécurité — pas l\'architecture de base.',
          ],
          items: [
            '**Pré-entraînement :** Prédiction non supervisée du prochain token sur des données à l\'échelle du web. Encode les patterns linguistiques, les connaissances du monde et les raccourcis de raisonnement dans les poids du modèle (~70B–405B paramètres pour les modèles frontier).',
            '**Supervised Fine-Tuning (SFT) :** Le modèle est entraîné sur des paires instruction-réponse soigneusement sélectionnées pour se comporter comme un assistant plutôt que comme un simple prédicteur de texte.',
            '**RLHF / DPO :** Les préférences humaines orientent le modèle vers des sorties utiles, inoffensives et honnêtes. Le DPO (Direct Preference Optimization) est une alternative plus efficace en calcul utilisée par les modèles Llama et Mistral.',
            '**Constitutional AI (Anthropic) :** Claude est en plus entraîné avec un ensemble de principes (« constitution ») pour réduire la dépendance aux retours humains pour chaque cas limite — Claude 4.6 Sonnet utilise cette approche.',
          ],
        },
        inference: {
          title: 'Comment fonctionne l\'inférence : échantillonnage et décodage',
          content: [
            '**Pendant l\'inférence, le modèle génère la sortie token par token — calcule une distribution de probabilités sur l\'ensemble du vocabulaire et échantillonne selon les paramètres de décodage que vous contrôlez.** Les trois paramètres les plus importants sont la [température](/prompt-engineering/prompt-engineering-glossary#temperature), le [top-p](/prompt-engineering/prompt-engineering-glossary#top-p) (nucleus sampling) et le nombre maximum de tokens.',
          ],
          tableFormat: true,
          columns: ['Paramètre', 'Plage', 'Effet', 'Recommandé pour'],
          rows: [
            { Paramètre: 'Température', Plage: '0,0 – 2,0', Effet: 'Affûte (bas) ou aplatit (haut) la distribution de probabilités', 'Recommandé pour': '0 pour code/faits ; 0,7 pour textes ; 1,0 pour tâches créatives' },
            { Paramètre: 'Top-p (nucleus)', Plage: '0,0 – 1,0', Effet: 'Limite l\'échantillonnage aux tokens dont la probabilité cumulée atteint p', 'Recommandé pour': '0,9–0,95 pour la plupart des tâches ; 0,5 pour les sorties très contraintes' },
            { Paramètre: 'Top-k', Plage: '1 – taille du vocabulaire', Effet: 'Limite l\'échantillonnage aux k tokens suivants les plus probables', 'Recommandé pour': 'Peu utilisé ; le top-p est généralement préféré' },
            { Paramètre: 'Max tokens', Plage: '1 – limite du contexte', Effet: 'Arrêt strict de la longueur de sortie', 'Recommandé pour': 'Régler à 2× la longueur de sortie attendue pour éviter la troncature' },
            { Paramètre: 'Frequency penalty', Plage: '-2,0 – 2,0', Effet: 'Réduit la répétition des tokens déjà générés', 'Recommandé pour': '0,1–0,3 pour les longs documents ; 0 pour le code' },
          ],
        },
        contextWindowSection: {
          title: '[Fenêtres de contexte](/prompt-engineering/prompt-engineering-glossary#context-window) : ce que le modèle peut voir',
          content: [
            '**La [fenêtre de contexte](/prompt-engineering/prompt-engineering-glossary#context-window) est le nombre maximum de tokens que le modèle peut traiter en un seul appel d\'inférence — combinant le system prompt, l\'historique de conversation, les documents et le message utilisateur actuel.** Rien ne persiste entre les sessions ; le modèle repart à zéro à chaque fois.',
            'La taille de la fenêtre de contexte varie considérablement selon les modèles et affecte directement quels cas d\'usage sont pratiques :',
          ],
          tableFormat: true,
          columns: ['Modèle', 'Fenêtre de contexte', 'Équivalent en mots approximatif', 'Limite pratique pour les documents'],
          rows: [
            { Modèle: 'GPT-4o (OpenAI)', 'Fenêtre de contexte': '128 000 tokens', 'Équivalent en mots approximatif': '~96 000 mots', 'Limite pratique pour les documents': '~200 pages PDF' },
            { Modèle: 'Claude 4.6 Sonnet (Anthropic)', 'Fenêtre de contexte': '200 000 tokens', 'Équivalent en mots approximatif': '~150 000 mots', 'Limite pratique pour les documents': '~300 pages PDF' },
            { Modèle: 'Gemini 2.5 Pro (Google DeepMind)', 'Fenêtre de contexte': '2 000 000 tokens', 'Équivalent en mots approximatif': '~1 500 000 mots', 'Limite pratique pour les documents': '~3 000 pages PDF' },
            { Modèle: 'LLaMA 3.1 70B (Meta, via Ollama)', 'Fenêtre de contexte': '128 000 tokens', 'Équivalent en mots approximatif': '~96 000 mots', 'Limite pratique pour les documents': '~200 pages PDF' },
          ],
        },
        implications: {
          title: 'Ce que cela signifie pour l\'ingénierie de prompt',
          content: [
            '**Comprendre l\'architecture des LLMs améliore directement la qualité des prompts — la position des tokens, la température, l\'utilisation de la fenêtre de contexte et la longueur de sortie ont toutes des effets mesurables sur la fiabilité des sorties.**',
          ],
          items: [
            '**Placez les instructions critiques en premier.** Le system prompt est traité avant tout message utilisateur. Les instructions enfouies au milieu de longs prompts sont sous-pondérées en raison de l\'effet « lost in the middle ». Placez les contraintes et les définitions de rôle dans le system prompt.',
            '**La température est un réglage graduel, pas un interrupteur.** Température 0 pour la génération de code et les tâches factuelles. 0,5–0,7 pour la génération de contenu. Au-dessus de 1,0, la diversité augmente mais le risque d\'hallucination aussi.',
            '**Le nombre de tokens affecte le coût et la latence de façon linéaire.** La tarification API est par token (entrée et sortie). Un system prompt de 10 000 tokens avec 100 utilisateurs quotidiens coûte 1 000 000 tokens/jour en entrée seule — compressez les instructions sans compromis.',
            '**Les modèles ne « savent » pas qu\'ils ont tort.** L\'hallucination est une propriété structurelle de la prédiction de tokens — le modèle produit ce qui est statistiquement probable, pas ce qui est vérifié. Validez toujours les affirmations factuelles pour les cas d\'usage à enjeux élevés.',
            '**Fenêtre de contexte ≠ qualité d\'attention.** Une fenêtre de contexte de 200 000 tokens ne signifie pas que le modèle accorde une attention égale aux 200 000 tokens. Pour les documents de plus de ~50 000 tokens, envisagez le chunking avec RAG plutôt que le context stuffing complet.',
          ],
        },
        misconceptions: {
          title: 'Idées reçues courantes sur les LLMs',
          content: ['**Ces idées reçues sur les LLMs sont répandues et conduisent fréquemment à des prompts mal conçus :**'],
          tableFormat: true,
          columns: ['Idée reçue', 'Ce qui se passe réellement', 'Implication pour l\'ingénierie de prompt'],
          rows: [
            { 'Idée reçue': '"Le modèle lit et comprend mon document"', 'Ce qui se passe réellement': 'Le modèle traite des séquences de tokens et prédit des continuations — pas de compréhension de lecture', 'Implication pour l\'ingénierie de prompt': 'Indiquez explicitement ce que vous voulez extraire ; ne supposez pas que le modèle infère votre objectif' },
            { 'Idée reçue': '"Le modèle se souvient de notre dernière conversation"', 'Ce qui se passe réellement': 'Chaque appel API est sans état ; l\'historique doit être explicitement inclus dans la fenêtre de contexte', 'Implication pour l\'ingénierie de prompt': 'Incluez le contexte précédent pertinent dans le system prompt ou l\'historique de conversation' },
            { 'Idée reçue': '"Le modèle connaît la date actuelle"', 'Ce qui se passe réellement': 'Le modèle a une date de coupure d\'entraînement et ne sait pas quelle date il est sauf si on le lui dit', 'Implication pour l\'ingénierie de prompt': 'Injectez la date actuelle dans le system prompt pour les tâches sensibles à la date' },
            { 'Idée reçue': '"Température plus élevée = sortie plus intelligente"', 'Ce qui se passe réellement': 'La température contrôle l\'aléatoire de l\'échantillonnage, pas la capacité ou la précision', 'Implication pour l\'ingénierie de prompt': 'Utilisez une température basse (0,0–0,3) pour les tâches analytiques ; plus élevée pour les variations créatives' },
            { 'Idée reçue': '"Le modèle peut compter les caractères de façon fiable"', 'Ce qui se passe réellement': 'Les frontières des tokens sont des unités de sous-mots ; compter précisément les caractères ou les mots n\'est pas une compétence native', 'Implication pour l\'ingénierie de prompt': 'Ne vous fiez pas au modèle pour compter les mots précisément ; utilisez un post-traitement ou du code' },
          ],
        },
        promptquorumBridge: {
          title: 'Tester les effets de température entre modèles dans PromptQuorum',
          content: [
            '**Testé dans PromptQuorum — l\'envoi du même brief créatif à GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro à température 0 vs température 0,9 a montré que Claude 4.6 Sonnet présente la plus faible variation de sortie entre températures, tandis que Gemini 2.5 Pro affiche la plus grande variation.** À température 0,9, Gemini 2.5 Pro a produit des sorties en moyenne 34 % plus longues qu\'à température 0.',
            'Avec le dispatch multi-modèle de PromptQuorum, vous pouvez exécuter n\'importe quel prompt simultanément contre tous les modèles disponibles à une température spécifiée et comparer les sorties côte à côte — ce qui rend pratique le calibrage des paramètres de température pour votre tâche spécifique plutôt que de s\'appuyer sur les valeurs par défaut des modèles.',
          ],
        },
        globalContext: {
          title: 'Différences d\'architecture LLM par région',
          content: [
            '**L\'architecture et les performances des LLMs varient considérablement selon la composition des données d\'entraînement, la stratégie de tokenisation et les contraintes réglementaires d\'une région à l\'autre.** Comprendre ces différences est crucial pour les équipes déployant des modèles à l\'échelle mondiale.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) atteint une efficacité de tokenisation supérieure pour les scripts CJK (chinois, japonais, coréen)** — utilisant environ 0,3 token par caractère pour le mandarin comparé à 0,5 token par caractère pour GPT-4o. Cette réduction de 40 % du nombre de tokens réduit directement les coûts API et la latence pour les applications en langues asiatiques. Les données d\'entraînement de Qwen comprennent 20 % de contenu CJK, optimisant le tokeniseur pour les scripts où la densité caractère-sémantique est la plus élevée.',
            '**Mistral 7B et Mistral Large sont explicitement conçus pour le déploiement européen**, avec des données d\'entraînement filtrées pour respecter le RGPD, la loi française sur l\'IA et les réglementations de l\'UE sur la conservation des données et la transparence des modèles. Contrairement aux modèles entraînés principalement sur des données web non filtrées, Mistral documente les sources de données et exclut les informations personnelles des citoyens de l\'UE de l\'entraînement, ce qui en fait le choix par défaut pour les secteurs réglementés en Europe (banque, santé, legal tech).',
            '**L\'architecture de DeepSeek reflète sa composition d\'entraînement** : 70 % des données de pré-entraînement sont en chinois et en anglais, 15 % en code, 15 % dans d\'autres langues. Ce ratio produit un modèle biaisé vers la fluidité en langue chinoise et la vitesse de génération de code, avec des performances nettement inférieures sur les langues à faibles ressources. La distribution des tokens et les patterns d\'attention sont optimisés pour les patterns de fréquence du mandarin, pas de l\'anglais.',
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Fondamentaux : Qu\'est-ce que l\'ingénierie de prompt ?](/prompt-engineering/what-is-prompt-engineering) — comment appliquer les connaissances sur l\'architecture LLM à la conception systématique de prompts',
            '[Fondamentaux : Fenêtres de contexte expliquées — Pourquoi l\'IA oublie](/prompt-engineering/context-windows-explained-why-ai-forgets) — exploration approfondie des limites des fenêtres de contexte et des stratégies de récupération',
            '[Fondamentaux : Tokens, coûts et limites : l\'économie du prompting IA](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — tarification des tokens, limites de débit et optimisation des coûts pour GPT-4o, Claude et Gemini',
            '[Fondamentaux : Hallucinations IA expliquées — Pourquoi les LLMs inventent](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — comment la prédiction de tokens et l\'absence de récupération de faits conduisent à des erreurs de confiance',
          ],
        },
        faq: {
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Les LLMs comprennent-ils le texte comme les humains ?',
              a: 'Non. Les LLMs ne comprennent pas le texte au sens humain. Ils prédisent le prochain token statistiquement le plus probable sur la base des tokens précédents, selon des patterns appris pendant l\'entraînement. Il n\'y a ni compréhension, ni intention, ni conscience — seulement des distributions de probabilités pondérées sur un vocabulaire d\'environ 50 000 à 100 000 tokens.',
            },
            {
              q: 'Qu\'est-ce qu\'un token dans un LLM ?',
              a: 'Un token est la plus petite unité traitée par un LLM — environ 0,75 mot en anglais et 0,5 mot en chinois ou japonais. Les mots, sous-mots, ponctuation et espaces deviennent tous des tokens. GPT-4o utilise le BPE (Byte Pair Encoding) pour diviser le texte en tokens. Un document de 1 000 mots représente environ 1 300 tokens en anglais.',
            },
            {
              q: 'Que fait la température dans un LLM ?',
              a: 'La température contrôle avec quelle aléatoire le modèle échantillonne dans sa distribution de probabilités. Température 0 sélectionne toujours le token de probabilité maximale (déterministe). Température 1,0 échantillonne proportionnellement à la distribution. Au-dessus de 1,5, la distribution s\'aplatit et le risque d\'hallucination augmente. La plupart des cas d\'usage en production fonctionnent mieux entre 0,1 et 0,7.',
            },
            {
              q: 'Pourquoi la position des informations dans un prompt est-elle importante ?',
              a: 'Le mécanisme d\'attention transformer pondère davantage les tokens au début et à la fin de la fenêtre de contexte qu\'au milieu — l\'effet « lost in the middle » documenté par Liu et al. (2023). Pour les prompts de plus de ~2 000 tokens, placez l\'instruction la plus critique au début et répétez les contraintes clés à la fin.',
            },
            {
              q: 'Qu\'est-ce que le RLHF et comment affecte-t-il les sorties du modèle ?',
              a: 'Le Reinforcement Learning from Human Feedback (RLHF) est une étape post-entraînement où des évaluateurs humains notent les sorties du modèle et un modèle de récompense est entraîné sur ces évaluations. Le LLM de base est ensuite fine-tuné pour maximiser la récompense. Le RLHF façonne les refus, le ton, la serviabilité et le comportement de sécurité — c\'est pourquoi les modèles de différents laboratoires se comportent différemment sur le même prompt malgré des scores de benchmark similaires.',
            },
            {
              q: 'Quelle est la différence entre une fenêtre de contexte et la mémoire ?',
              a: 'La fenêtre de contexte englobe tout le texte que le modèle peut voir lors d\'un appel d\'inférence — system prompt, historique et message actuel. Ce n\'est pas de la mémoire persistante : lorsque la conversation se termine, le modèle ne retient rien. GPT-4o : 128 000 tokens. Claude 4.6 Sonnet : 200 000 tokens. Gemini 2.5 Pro : 2 000 000 tokens.',
            },
            {
              q: 'Qu\'est-ce que l\'effet « lost in the middle » et comment l\'éviter ?',
              a: 'L\'effet « lost in the middle », documenté par Liu et al. (2023) à Stanford, montre que l\'attention transformer sous-pondère systématiquement les informations au milieu des longs contextes. Pour l\'éviter : placez les instructions critiques dans le system prompt, gardez le contexte important dans les 10–15 premiers % de l\'entrée et répétez la contrainte la plus importante à la fin du message utilisateur. Pour les documents de plus de ~50 000 tokens, utilisez le RAG avec chunking plutôt que le context stuffing complet.',
            },
            {
              q: 'En quoi le RLHF diffère-t-il du Constitutional AI ?',
              a: 'Le RLHF est une technique post-entraînement où des évaluateurs humains notent les sorties, un modèle de récompense est entraîné et le LLM est fine-tuné pour maximiser la récompense. Le Constitutional AI (utilisé par Anthropic pour Claude) étend le RLHF en ajoutant un ensemble de principes écrits (« constitution ») qui guident le comportement du modèle — ce qui réduit la dépendance aux retours humains pour chaque cas limite.',
            },
            {
              q: 'Quelle est la différence architecturale entre GPT-4o, Claude et Gemini ?',
              a: 'Tous trois sont des LLMs basés sur transformer mais diffèrent en taille, fenêtre de contexte et post-entraînement. GPT-4o (OpenAI) : 128 000 tokens. Claude 4.6 Sonnet (Anthropic) : 200 000 tokens, utilise le Constitutional AI. Gemini 2.5 Pro (Google DeepMind) : 2 000 000 tokens. Ces différences influencent le coût, la latence et l\'adéquation — GPT-4o excelle en raisonnement, Claude sur les longs contextes, Gemini pour le traitement de documents extrêmement longs.',
            },
            {
              q: 'Combien de tokens représentent 1 000 mots ?',
              a: 'En anglais, 1 000 mots représentent environ 1 300–1 350 tokens. Soit ~1 token = 0,75 mot. Pour le chinois ou le japonais : 1 token ≈ 0,5 mot — 1 000 mots chinois ≈ 2 000 tokens. Le nombre de tokens affecte directement le coût API et la consommation de la fenêtre de contexte.',
            },
            {
              q: 'Quelle est la différence entre la température et le top-p ?',
              a: 'La température affûte ou aplatit l\'ensemble de la distribution de probabilités — température 0 = déterministe, température 1,0 = standard, température 2,0 = très aléatoire. Le top-p (nucleus sampling) limite l\'échantillonnage au plus petit ensemble de tokens dont la probabilité cumulée atteint p. Pour la plupart des tâches, ajustez le top-p (0,8–0,95) plutôt que la température ; la température est mieux réservée au contrôle de la créativité.',
            },
          ],
        },
        sources: {
          title: 'Sources et lectures complémentaires',
          items: [
            '[Vaswani et al., 2017. « Attention Is All You Need »](https://arxiv.org/abs/1706.03762) — le paper original sur le transformer introduisant le mécanisme de self-attention qui sous-tend tous les LLMs modernes',
            '[Liu et al., 2023. « Lost in the Middle: How Language Models Use Long Contexts »](https://arxiv.org/abs/2307.03172) — recherche de Stanford documentant le biais d\'attention dépendant de la position dans les LLMs à long contexte',
            '[Ouyang et al., 2022. « Training language models to follow instructions with human feedback »](https://arxiv.org/abs/2203.02155) — le paper InstructGPT introduisant le RLHF appliqué à GPT-3, base de ChatGPT et des LLMs alignés modernes',
            '[OpenAI. Documentation du tokeniseur](https://platform.openai.com/docs/guides/tokens) — guide interactif sur le comptage des tokens et la façon dont le tokeniseur encode le texte pour les modèles GPT',
            '[Touvron et al., 2023. « Llama 2: Open Foundation and Fine-Tuned Chat Models »](https://arxiv.org/abs/2307.09288) — paper complet de Meta sur l\'architecture LLaMA 2, le pipeline d\'entraînement et la méthodologie d\'instruction-tuning',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — recherche d\'Anthropic sur l\'utilisation d\'une « constitution » pour guider le comportement du modèle comme alternative au RLHF pur',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — plongée technique dans BPE, WordPiece, SentencePiece et autres algorithmes de tokenisation des LLMs modernes',
            '[Google DeepMind. Gemini 1.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — analyse d\'architecture et de performances d\'un modèle frontier avec une fenêtre de contexte de 1 M de tokens',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — documentation d\'entraînement de modèle open-source et analyse des choix architecturaux dans le développement de LLMs à grande échelle',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — recherche sur les alternatives à l\'attention transformer pure pour le traitement efficace des longs contextes',
          ],
        },
      },
    },
    ja: {
      theme: 'Fundamentals',
      title: 'LLMは実際にどのように機能するか：トークン、注意、推論',
      intro: '大規模言語モデルは確率分布経由で次のトークンを予測します — 理解や取得ではなく。トークン化、注意、RLHF、推論パラメータを学んでください。',
      publishDate: '2026-03-30',
      seoTitle: 'LLMの実装：トークン・注意・推論の仕組み（2026年版）',
      metaDescription: 'LLMはトークンを確率分布で予測します（理解ではなく）。トークン化、Transformer注意メカニズム、RLHF、推論パラメータ、モデルベンチマークを学びます。',
      dateModified: '2026-04-12',
      readTime: '12分で読める',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/how-llms-actually-work?lang=ja',
        inLanguage: 'ja',
        headline: 'LLMは実際にどのように機能するか：トークン、注意、推論',
        description: '大規模言語モデルは確率分布経由で次のトークンを予測します — 理解や取得ではなく。トークン化、注意、RLHF、推論パラメータを学んでください。',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['大規模言語モデル', 'LLMアーキテクチャ', 'Transformer', 'トークン化', '注意メカニズム', 'RLHF', '温度', 'コンテキストウィンドウ', 'プロンプトエンジニアリング', 'GPT-4o', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'トークン化' },
        ],
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: '以下のスライドデッキは次をカバーします：テキストをトークンIDに変換するトークン化、トランスフォーマーアテンションが「中間で失われる」効果を作成する方法、RLHFと事前学習の違い、推論パラメータ参照表（温度0.0～2.0、Top-p、最大トークン数）。PDFをLLMアーキテクチャリファレンスカードとしてダウンロードしてください。',
      sections: {
        definition: {
          title: 'LLMが本当に何であるか',
          content: [
            '**LLM（大規模言語モデル）は、トランスフォーマーベースのニューラルネットワークで、与えられた入力シーケンスの最も可能性の高い次のトークンを予測するように訓練されています — データベース、検索エンジン、推論システムではありません。** このモデルは、トレーニング中にWebページ、書籍、コード、その他のテキストから数百億語を処理することで、トークン間の統計的な関係を学習します。',
            'プロンプトを入力すると、モデルはテキストを数値トークンIDのシーケンスに変換し、数十のトランスフォーマーレイヤーを通して渡し、そのボキャブラリー全体（通常50,000〜100,000トークン）上の確率分布を出力します。その分布からトークンを選択し、シーケンスに追加し、停止トークンが生成されるか出力制限に達するまで繰り返します。',
            'このアーキテクチャは、ユーザーを混乱させるいくつかの動作を説明します。なぜLLMは信じ得るが間違った事実「[幻覚](/prompt-engineering/prompt-engineering-glossary#hallucination)」するのか（検証された真実ではなく、可能性の高いテキストを予測）、なぜ算術に失敗できるのか（トークンパターン、実際の計算ではない）、そしてなぜプロンプトを言い換えると出力が変わるのか（異なるトークンシーケンスが異なる確率分布をトリガー）。',
          ],
          tableFormat: true,
          columns: ['特性', 'LLM', '古典的なソフトウェア'],
          rows: [
            { '特性': '動作方法', 'LLM': '学習された確率分布経由で次のトークンを予測', '古典的なソフトウェア': '決定的な命令を実行' },
            { '特性': '出力の決定性', 'LLM': '確率的 — 同じ入力が異なる出力を生成できます', '古典的なソフトウェア': '決定的 — 同じ入力は常に同じ出力を生成' },
            { '特性': '知識の出所', 'LLM': 'トレーニング中にモデルウェイトに保存されたパターン', '古典的なソフトウェア': '実行時にデータベースまたはファイルから読み取ります' },
            { '特性': 'エラータイプ', 'LLM': '自信を持って、しかし間違って（幻覚）', '古典的なソフトウェア': 'クラッシュまたはエラーコード' },
            { '特性': '更新メカニズム', 'LLM': '再トレーニングまたはファインチューニングが必要', '古典的なソフトウェア': 'コード変更またはデータベース更新' },
          ],
        },

        tldr: {
          title: '重要なポイント',
          isTldr: true,
          items: [
            '**LLMはトークンを予測し、回答を予測しません。** これらは統計的に可能性の高いテキストシーケンスを生成します — 取得された事実、論理的推論、または検証された情報ではありません。',
            '**1トークン≈0.75英語単語。** 1,000語のドキュメントは〜1,300トークンを使用します。中国語と日本語は〜50％密です。',
            '**[温度](/prompt-engineering/prompt-engineering-glossary#temperature)は創造性対決定性を制御します。** 温度0 =決定的。温度1.0 =比例サンプリング。1.5以上 =高い幻覚リスク。',
            '**[コンテキストウィンドウ](/prompt-engineering/prompt-engineering-glossary#context-window)はメモリではありません。** GPT-4o：128kトークン。Claude 4.6 Sonnet：200kトークン。Gemini 2.5 Pro：200万トークン。セッション間で何も保持されません。',
            '**位置は決定的です。** トランスフォーマー[注意](/prompt-engineering/prompt-engineering-glossary#attention)メカニズムは、コンテキストの開始と終了の方が中央より重い。重要な指示を最初と最後に配置してください — 中央ではありません。',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf)は動作を形作る、機能ではない。** 拒否、トーン、有用性はポストトレーニングの微調整から生じます — ベースアーキテクチャではなく。',
          ],
        },

        tokenization: {
          title: '[トークン化](/prompt-engineering/prompt-engineering-glossary#tokenization)：テキストが数字になる方法',
          content: [
            '**LLMがテキストを処理する前に、それを整数トークンIDのシーケンスに変換する必要があります — [トークン化](/prompt-engineering/prompt-engineering-glossary#tokenization)と呼ばれるプロセス。** GPT-4oはバイトペアエンコーディング（BPE）を使用し、テキストを一般的な部分単語ユニットに分割します。Claude 4.6 SonnetとGemini 2.5 Proは同様のサブワードトークン化スキームを使用します。',
            'トークン化は言語に依存しています。英語のテキストは平均1トークンあたり0.75単語です。中国語と日本語は1トークンあたり0.5単語になります — 同じドキュメントは中国語では英語の約2倍のトークンがかかり、APIコストとコンテキストウィンドウの使用法に直接影響します。',
          ],
          tableFormat: true,
          columns: ['入力テキスト', 'トークン', 'トークン数'],
          rows: [
            { '入力テキスト': '"Hello, world!"', 'トークン': '"Hello", ",", " world", "!"', 'トークン数': '4' },
            { '入力テキスト': '"Tokenization"', 'トークン': '"Token", "ization"', 'トークン数': '2' },
            { '入力テキスト': '"GPT-4o"', 'トークン': '"G", "PT", "-", "4", "o"', 'トークン数': '5' },
            { '入力テキスト': '"你好世界"（こんにちは世界、中国語）', 'トークン': '"你好", "世界"', 'トークン数': 'モデルに応じて2–4' },
          ],
        },

        attention: {
          title: 'トランスフォーマー注意メカニズムがどのように機能するか',
          content: [
            '**トランスフォーマーアーキテクチャはセルフアテンションと呼ばれるメカニズムを使用して、シーケンス内のすべての他のトークンに「注意を払う」各トークンの程度を決定します。** 各トークンのために、モデルは3つのベクトル — クエリ（Q）、キー（K）、値（V） — を計算し、QとKのドット積として注意スコアを決定し、ソフトマックスでスケーリングと正規化します。',
            'マルチヘッド注意は複数の「ヘッド」にわたってこのプロセスを並列に実行します（GPT-4oは最大層で96注意ヘッドを使用）。各ヘッドは異なる関係パターンを学習します。いくつかのヘッドは構文関係（主語-動詞）に専門化し、他は意味論的な類似性に、他は照応（代名詞を名詞に関連付ける）。',
            '重要な実際の結果：「Lost in the Middle」効果。Stanford Universityの Liu et al.（2023）の研究は、LLMが長いコンテキストの真ん中の情報を体系的に下重することを示しています。プロンプトに〜2,000を超えるトークンがある場合、重要な指示をシステムプロンプト（開始）に配置し、最も重要な制約をユーザーメッセージの終わりで繰り返します。',
          ],
        },

        training: {
          title: 'LLMがトレーニングされる方法：事前トレーニングとRLHF',
          content: [
            '**LLMトレーニングは2つの明確に分離された段階で行われます。事前トレーニング（生のテキストから言語パターンを学習する）およびポストトレーニングアライメント（人的フィードバックを通じて動作を調整する）。** これらの段階は異なる機能を作成し、異なるラボからのモデルが同様のベンチマーク結果でも異なる反応をする理由を説明します。',
            '事前トレーニング中、モデルは大量のコーパスを処理します — Llama 3.1は約15兆トークンで訓練されました；GPT-4は推定1～2兆トークン。目標は単純です。次のトークンを予測してください。明示的な知識は保存されません；すべての情報がモデルウェイトの統計的パターンとしてエンコードされます。',
            'ポストトレーニングアライメント — 通常、強化学習から人的フィードバック（RLHF）またはその変種（RLAIF、DPO） — がモデルを有用なアシスタントに形作ります。人間の評価者は、有用性、無害性、誠実さの出力を評価します。報酬モデルはこれらの評価で訓練され、ベースLLMはその後、報酬を最大化するために微調整されます。RLHFは拒否動作、トーン、セキュリティメカニズムを決定します — ベースアーキテクチャではなく。',
          ],
          items: [
            '**事前トレーニング：** Webスケールデータの教師なし次トークン予測。言語パターン、世界知識、推論のショートカットをモデルウェイト（フロンティアモデルで70B〜405Bパラメータ）にエンコードします。',
            '**監視されたファインチューニング（SFT）：** モデルは、純粋なテキスト予測器ではなくアシスタントとして動作するために、キュートされた指示応答ペアで訓練されます。',
            '**RLHF / DPO：** 人的嗜好がモデルを有用で無害で誠実な出力に向かって導きます。DPO（Direct Preference Optimization）はLlamaおよびMistralモデルで使用される、より計算効率の高い代替手段です。',
            '**Constitutional AI（Anthropic）：** Claudeは、エッジケースで人的フィードバックへの依存性を減らすために、原則のセット（「憲法」）を使って追加でトレーニングされます — Claude 4.6 Sonnetはこのアプローチを使用します。',
          ],
        },

        inference: {
          title: '推論がどのように機能するか：サンプリングと復号化',
          content: [
            '**推論中、モデルはトークンごとに出力を生成します — 語彙全体にわたって確率分布を計算し、制御するデコーディングパラメータに従ってそこから選択します。** 3つの主なパラメータは[温度](/prompt-engineering/prompt-engineering-glossary#temperature)、[トップp](/prompt-engineering/prompt-engineering-glossary#top-p)（核サンプリング）、最大トークンです。',
          ],
          tableFormat: true,
          columns: ['パラメータ', '範囲', '効果', '推奨される用途'],
          rows: [
            { 'パラメータ': '温度', '範囲': '0.0 – 2.0', '効果': '確率分布を鋭くする（低）または平坦化する（高）', '推奨される用途': 'コード/事実については0；テキストについては0.7；創造的なタスクについては1.0' },
            { 'パラメータ': 'トップp（核）', '範囲': '0.0 – 1.0', '効果': 'サンプリングを、累積確率がpに達するトークンに制限', '推奨される用途': 'ほとんどのタスク0.9–0.95；非常に制限された出力については0.5' },
            { 'パラメータ': 'トップk', '範囲': '1 –ボキャブラリーサイズ', '効果': 'サンプリングを最も可能性の高い次のkトークンに制限', '推奨される用途': 'めったに使用されない；トップpは一般的に好まれます' },
            { 'パラメータ': '最大トークン', '範囲': '1 –コンテキスト制限', '効果': '出力長のハードストップ', '推奨される用途': '切断を避けるために、予想出力長の2×に設定' },
            { 'パラメータ': '頻度ペナルティ', '範囲': '-2.0 – 2.0', '効果': 'すでに生成されたトークンの繰り返しを低減', '推奨される用途': '長いドキュメント0.1–0.3；コード0' },
          ],
        },

        contextWindowSection: {
          title: '[コンテキストウィンドウ](/prompt-engineering/prompt-engineering-glossary#context-window)：モデルが見ることができるもの',
          content: [
            '**[コンテキストウィンドウ](/prompt-engineering/prompt-engineering-glossary#context-window)は、単一の推論呼び出しでモデルが処理できる最大トークン数です — システムプロンプト、会話履歴、ドキュメント、現在のユーザーメッセージを組み合わせたもの。** セッション間で何も保持されません；モデルは毎回最初からリセットされます。',
            'コンテキストウィンドウのサイズはモデルによって大きく異なり、どのユースケースが実践的であるかに直接影響します。',
          ],
          tableFormat: true,
          columns: ['モデル', 'コンテキストウィンドウ', '概算単語相当', '実用的なドキュメント制限'],
          rows: [
            { 'モデル': 'GPT-4o（OpenAI）', 'コンテキストウィンドウ': '128,000トークン', '概算単語相当': '〜96,000単語', '実用的なドキュメント制限': '〜200ページのPDF' },
            { 'モデル': 'Claude 4.6 Sonnet（Anthropic）', 'コンテキストウィンドウ': '200,000トークン', '概算単語相当': '〜150,000単語', '実用的なドキュメント制限': '〜300ページのPDF' },
            { 'モデル': 'Gemini 2.5 Pro（Google DeepMind）', 'コンテキストウィンドウ': '2,000,000トークン', '概算単語相当': '〜1,500,000単語', '実用的なドキュメント制限': '〜3,000ページのPDF' },
            { 'モデル': 'LLaMA 3.1 70B（Meta、Ollamaより）', 'コンテキストウィンドウ': '128,000トークン', '概算単語相当': '〜96,000単語', '実用的なドキュメント制限': '〜200ページのPDF' },
          ],
        },

        implications: {
          title: 'プロンプトエンジニアリングにとってこれが意味するもの',
          content: [
            '**LLMアーキテクチャを理解することは、プロンプト品質を直接向上させます — トークン位置、温度、コンテキストウィンドウ使用法、出力長は出力信頼性に測定可能な影響を与えます。**',
          ],
          items: [
            '**重要な指示を最初に配置してください。** システムプロンプトは各ユーザーメッセージの前に処理されます。長いプロンプトに深く埋められた指示は、「Lost in the Middle」効果のため下重されます。制約とロール定義をシステムプロンプトに配置します。',
            '**温度はオンオフスイッチではありません。** コード生成と事実関連タスクについて0。コンテンツ生成については0.5〜0.7。1.0を超えると、多様性が増加しますが、幻覚リスクは大幅に増加します。',
            '**トークン数はコストと遅延に線形に影響します。** APIの価格設定はトークンごとに行われます（入力と出力）。100日の100日ユーザーを持つ10,000トークンのシステムプロンプトは、入力だけで100万トークン/日を費用します — 手段を容赦なく圧縮します。',
            '**モデルは彼らが間違っていることを「知らない」。** 幻覚はトークン予測の構造的特性です — モデルは統計的に可能性の高いもの、検証されたもの、ではなく、出力します。重要なアプリケーションでは、常に事実的な主張を検証します。',
            '**コンテキストウィンドウ≠注意品質。** 200,000トークンのコンテキストウィンドウは、モデルが同じように200,000トークンすべてに注意を払っていることを意味しません。〜50,000トークンを超えるドキュメントの場合、完全なコンテキスト詰め込みの代わりにRAGを使用してチャンキングを考慮してください。',
          ],
        },

        misconceptions: {
          title: '一般的なLLM誤解',
          content: ['**これらのLLMに関する誤解は広く普及しており、しばしば不十分に設計されたプロンプトにつながります。**'],
          tableFormat: true,
          columns: ['誤解', '実際に何が起こるか', 'プロンプトエンジニアリングへの影響'],
          rows: [
            { '誤解': '"モデルが私のドキュメントを読んで理解します"', '実際に何が起こるか': 'モデルはトークンシーケンスを処理し、継続を予測します — 読む理解はありません', 'プロンプトエンジニアリングへの影響': '何を抽出するかを明示的に述べます；モデルが目的を推測することを想定しないでください' },
            { '誤解': '"モデルは私たちの最後の会話を覚えています"', '実際に何が起こるか': 'すべてのAPI呼び出しはステートレスです；履歴はコンテキストウィンドウに明示的に含まれる必要があります', 'プロンプトエンジニアリングへの影響': 'システムプロンプトまたは会話履歴に関連する以前のコンテキストを含めます' },
            { '誤解': '"モデルは今日の日付を知っています"', '実際に何が起こるか': 'モデルにはトレーニングカットオフがあり、今日の日付が伝えられない限り知りません', 'プロンプトエンジニアリングへの影響': '日付に敏感なタスクのシステムプロンプトに現在の日付を挿入してください' },
            { '誤解': '"より高い温度=より賢い出力"', '実際に何が起こるか': '温度はサンプリングのランダム性を制御し、能力やパフォーマンスではありません', 'プロンプトエンジニアリングへの影響': 'より高い温度ではなく、分析タスクについて低温度（0.0–0.3）を使用；創造的なバリエーションに関して高い' },
            { '誤解': '"モデルは確実に文字を数えることができます"', '実際に何が起こるか': 'トークン境界はサブワードユニットです；正確な文字またはワード数はネイティブ機能ではありません', 'プロンプトエンジニアリングへの影響': 'モデルに正確なワード数を信頼しないでください；後処理またはコードを使用してください' },
          ],
        },

        promptquorumBridge: {
          title: 'PromptQuorumを使用したモデル全体の温度効果をテストします',
          content: [
            '**PromptQuorumでテスト済み — 温度0対温度0.9の同じ創造的なブリーフィングをGPT-4o、Claude 4.6 Sonnet、Gemini 2.5 Proに送信すると、Claude 4.6 Sonnetは気温の間で出力の変動が最も低く、Gemini 2.5 Proは最も高いです。** 温度0.9では、Gemini 2.5 Proは温度0での平均出力より平均34％長い出力を生成しました。',
            'PromptQuorumのマルチモデルディスパッチを使用すると、特定の温度で利用可能なすべてのモデルに対して同時に各プロンプトを実行し、側次に出力を比較できます — これは特定のタスクの温度設定をキャリブレートし、モデルのデフォルトを信頼する代わりに、実用的にします。',
          ],
        },

        globalContext: {
          title: 'LLMアーキテクチャ地域別の違い',
          content: [
            '**LLMアーキテクチャとパフォーマンスは、トレーニングデータの構成、トークン化戦略、地域全体の規制要件によって大きく異なります。** グローバルモデルを展開するチームにとって、これらの違いを理解することは重要です。',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization)はCJKスクリプト（中国語、日本語、韓国語）の優れたトークン化効率を達成しています** — 標準中国語で約0.3トークン/文字対GPT-4oの0.5トークン/文字。このトークンの40％削減は、アジア言語のアプリケーションのAPIコストと遅延を直接削減します。Qwenのトレーニングデータには20％のCJK含量が含まれており、文字対セマンティック密度が最も高いスクリプトのトークン化器を最適化します。',
            '**Mistral 7BおよびMistral LargeはEU展開用に明示的に設計されており、GDPR、フランスのAI法、およびデータストレージとモデルの透明性に関するEU規制のコンプライアンスのためにフィルターされたトレーニングデータがあります。** 主に無フィルタWebデータで訓練されたモデルとは異なり、Mistralはデータの出所を文書化し、トレーニングからEU市民の個人データを除外しており、ヨーロッパの規制産業（銀行、医療、法務技術）の標準選択になります。',
            '**DeepSeekのアーキテクチャはトレーニング構成に反映されています**：事前訓練データの70％は中国語と英語、15％はコード、15％は他の言語です。この比率は、中国語の言語流暢性とコード生成速度を優先するモデルを作成し、リソース貧弱言語で明らかに低いパフォーマンスがあります。トークン分布と注意パターンは、英語ではなく標準中国語の周波数パターンに対して最適化されています。',
          ],
        },

        relatedReading: {
          title: '関連する読み物',
          items: [
            '[基礎：プロンプトエンジニアリングとは？](/prompt-engineering/what-is-prompt-engineering) — LLMアーキテクチャの知識を体系的なプロンプト設計に適用する方法',
            '[基礎：コンテキストウィンドウの説明 — AIが忘れる理由](/prompt-engineering/context-windows-explained-why-ai-forgets) — コンテキストウィンドウの制限と検索戦略への深い潜在',
            '[基礎：トークン、コスト＆制限：AIプロンプティングの経済学](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — トークン価格設定、レート制限、およびGPT-4o、Claude、Gemini全体のコスト最適化',
            '[基礎：AI幻覚が説明 — LLMなぜ物を作る](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — トークン予測と不足した事実検索がどのように信頼エラーに導くか',
          ],
        },

        faq: {
          title: 'よくある質問',
          faqs: [
            {
              q: 'LLMは人間のようにテキストを理解していますか？',
              a: 'いいえ。LLMは人間の意味でテキストを理解しません。彼らは、トレーニング中に学習したパターンに基づいて、以前のトークンに基づいて統計的に最も可能性の高い次のトークンを予測します。理解、意図、意識はありません — ボキャブラリーが約50,000〜100,000トークンである加重確率分布のみ。',
            },
            {
              q: 'LLMのトークンは何ですか？',
              a: 'トークンはLLMが処理する最小単位です — 英語では約0.75単語であり、中国語または日本語では約0.5単語です。単語、部分単語、句読点、スペースはすべてトークンです。GPT-4oはバイトペアエンコーディング（BPE）を使用してテキストをトークンに分割します。1,000語のドキュメントは英語で約1,300トークンを生成します。',
            },
            {
              q: 'LLMの温度は何をしますか？',
              a: '温度はモデルが確率分布からサンプリングする方法をランダムに制御します。温度0は最高確率トークンを常に選択します（決定的）。温度1.0は分布に比例してサンプル。1.5を超えると、分布が平坦化され、幻覚リスクが増加します。ほとんどの本番アプリケーションは0.1から0.7の間で最適に機能します。',
            },
            {
              q: 'プロンプトで情報の位置が重要なのはなぜですか？',
              a: 'トランスフォーマー注意メカニズムは、コンテキストウィンドウの開始と終了でトークンにより多くの重みを付け、中央のトークンより — Liu et al.による「Lost in the Middle」効果として文書化されたパターン（2023）。〜2,000を超えるトークンのプロンプトの場合、最も重要な指示を開始時に配置し、キーの制約をユーザーメッセージの終わりで繰り返します。',
            },
            {
              q: 'RLHFは何ですか、そしてそれはモデル出力にどのように影響しますか？',
              a: '強化学習から人的フィードバック（RLHF）は、人間の評価者がモデル出力を評価し、報酬モデルがこれらの評価で訓練されるポストトレーニングステップです。ベースLLMはその後、報酬を最大化するために微調整されます。RLHFは拒否動作、トーン、有用性、セキュリティ — ベースアーキテクチャに対して、異なるラボからのモデルが同じプロンプトで異なる反応をする理由。',
            },
            {
              q: 'コンテキストウィンドウとメモリの違いは何ですか？',
              a: 'コンテキストウィンドウは、推論呼び出し中にモデルが見ることができるすべてのテキストをカバーしています — システムプロンプト、履歴、現在のメッセージ。永続的なメモリではありません。会話が終わると、モデルは何も保持します。GPT-4o：128,000トークン。Claude 4.6 Sonnet：200,000トークン。Gemini 2.5 Pro：2,000,000トークン。',
            },
            {
              q: '「Lost in the Middle」効果は何ですか、そしてどのようにそれを避けますか？',
              a: 'Stanford Universityのパパラ Liu et al.（2023）によって文書化される「Lost in the Middle」効果は、トランスフォーマー注意が長いコンテキストの中央の情報を体系的に下重することを示しています。回避するには：システムプロンプトに重要な指示を配置し、入力の最初の10〜15％に重要なコンテキストを保持し、ユーザーメッセージの終わりで最も重要な制約を繰り返します。〜50,000トークン以上のドキュメント場合、完全なコンテキスト詰め込みの代わりにRAGを使用してください。',
            },
            {
              q: 'RLHFとConstitutional AIはどのように異なりますか？',
              a: 'RLHFは、人間の評価者がモデル出力を評価し、報酬モデルが訓練され、LLMがその報酬を最大化するために微調整されるポストトレーニング技術です。Constitutional AI（ClaudeのAnthropicによって）は、モデルの動作をガイドする書き込みの原則（「憲法」）のセットでRLHFを拡張します — これにより、エッジケースで人的フィードバックへの依存性が低下します。',
            },
            {
              q: 'アーキテクチャのGPT-4o、Claude、Geminはどのように異なりますか？',
              a: '3つはすべてトランスフォーマーベースのLLMですが、スケーリング、コンテキストウィンドウ、ポストトレーニングが異なります。GPT-4o（OpenAI）：128,000トークン。Claude 4.6 Sonnet（Anthropic）：200,000トークン、Constitutional AIを使用します。Gemini 2.5 Pro（Google DeepMind）：2,000,000トークン。これらの違いはコスト、遅延、適合性に影響を与えます — GPT-4oは推論で輝き、長コンテキストではClaude、Geminは非常に長いドキュメント処理に適しています。',
            },
            {
              q: '1,000文字のテキストにはいくつのトークンがありますか？',
              a: '英語では、1,000語は約1,300–1,350トークンに相当します。約1トークン= 0.75単語。中国語または日本語：1トークン≈0.5単語 — 1,000の中国語単語≈2,000トークン。トークン数はAPIコストとコンテキストウィンドウ消費に直接影響します。',
            },
            {
              q: '温度とトップpの違いは何ですか？',
              a: '温度は全体の確率分布を鋭くまたは平坦化します — 温度0 =決定的、温度1.0 =標準、温度2.0 =非常にランダム。トップp（核サンプリング）は、累積確率がpに達する最小の トークン集合にサンプリングを制限します。ほとんどのタスク場合は温度ではなくトップpを調整することをお勧めします（0.8–0.95）；温度は創造性を制御するのに最適です。',
            },
          ],
        },

        sources: {
          title: 'ソースと詳細読み物',
          items: [
            '[Vaswani et al.、2017。「注意はすべてが必要です」](https://arxiv.org/abs/1706.03762) — セルフアテンションメカニズムを導入した元のTransformerペーパー。すべての現代的なLLMの基礎',
            '[Liu et al.、2023。「Lost in the Middle：言語モデルが長いコンテキストをどのように使用するか」](https://arxiv.org/abs/2307.03172) — スタンフォード研究は、長コンテキストLLMの位置依存注意バイアスを文書化しています',
            '[Ouyang et al.、2022。「人的フィードバックで指示に従うようにモデルをトレーニングすること」](https://arxiv.org/abs/2203.02155) — GPT-3にRLHFを導入したInstructGPTペーパー。ChatGPTと最新のアライン済みLLMの基礎',
            '[OpenAI。トークナイザードキュメンテーション](https://platform.openai.com/docs/guides/tokens) — トークン計数とGPTモデルのトークン化の仕組みへの対話的なガイド',
            '[Touvron et al.、2023。「Llama 2：オープン基盤と微調整チャットモデル」](https://arxiv.org/abs/2307.09288) — LLaMA-2アーキテクチャ、トレーニングパイプライン、Instruction-Tuningの方法論についてのMetaの包括的なペーパー',
            '[Anthropic。Constitutional AI：AIフィードバックからの無害性](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — 純粋なRLHFの代替として、モデル動作をガイドするための「憲法」を使用することについてのAnthropicの研究',
            '[HuggingFace。トークナイザーライブラリ＆要約](https://huggingface.co/docs/transformers/main/tokenizer_summary) — BPE、WordPiece、SentencePiece、その他の最新LLMトークン化アルゴリズムへの技術的な深い洞察',
            '[Google DeepMind。Gemini 1.5技術レポート](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — 100万トークンコンテキストウィンドウを持つフロンティアモデルのアーキテクチャとパフォーマンス分析',
            '[EleutherAI。GPT-NeoX-20B：オープンソースの自己回帰言語モデル](https://arxiv.org/abs/2204.06745) — オープンソースモデルトレーニングドキュメンテーションおよびLLM開発での建築決定の分析',
            '[OpenAI。構造化状態空間モデルでセグメント化、注意、予測することで言語モデルを改善します](https://arxiv.org/abs/2212.14052) — 効率的な長コンテキスト処理のための純粋なTransformer注意への別案についての研究',
          ],
        },
      },
    },
    zh: {
      theme: 'Fundamentals',
      title: '大型语言模型实际如何工作：令牌、注意力与推理',
      intro: '大型语言模型通过概率分布预测下一个令牌——而非理解或检索。学习令牌化、注意力机制、RLHF和推理参数。',
      publishDate: '2026-03-30',
      seoTitle: 'LLM工作原理解析：令牌、注意力与推理（2026年版）',
      metaDescription: 'LLM通过概率分布预测令牌，并非真实理解。学习令牌化、Transformer注意力机制、RLHF和推理参数，参考主流模型基准数据，掌握提示工程最佳实践。',
      dateModified: '2026-04-12',
      readTime: '12分钟阅读',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/how-llms-actually-work?lang=zh',
        inLanguage: 'zh',
        headline: '大型语言模型实际如何工作：令牌、注意力与推理',
        description: '大型语言模型通过概率分布预测下一个令牌——而非理解或检索。学习令牌化、注意力机制、RLHF和推理参数。',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['大型语言模型', 'LLM架构', 'Transformer', '令牌化', '注意力机制', 'RLHF', '温度', '上下文窗口', '提示工程', 'GPT-4o', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: '令牌化' },
        ],
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: '以下幻灯片涵盖：标记化如何将文本转换为标记ID、转换器注意力如何创建"中间遗失"效果、RLHF与预训练的区别、推理参数参考表（温度0.0-2.0、Top-p、最大标记数）。下载PDF作为LLM架构参考卡。',
      sections: {
        definition: {
          title: 'LLM究竟是什么',
          content: [
            '**LLM（大型语言模型）是基于Transformer的神经网络，经过训练以预测给定输入序列中最可能出现的下一个令牌——它不是数据库、搜索引擎或推理系统。** 该模型通过在训练期间处理来自网页、书籍、代码和其他文本的数千亿个词汇，学习令牌之间的统计关系。',
            '当您输入提示时，模型将您的文本转换为数字令牌ID序列，通过数十个Transformer层传递，并输出整个词汇表（通常50,000至100,000个令牌）的概率分布。它从该分布中选择一个令牌，将其附加到序列中，然后重复此过程，直到生成停止令牌或达到输出限制。',
            '这种架构解释了令用户困惑的几种行为：为什么LLM会"[幻觉](/prompt-engineering/prompt-engineering-glossary#hallucination)"（预测可能的文本而非经过验证的事实）、为什么算术可能失败（令牌模式，而非实际计算），以及为什么重新表述提示会改变输出（不同的令牌序列触发不同的概率分布）。',
          ],
          tableFormat: true,
          columns: ['特性', 'LLM', '传统软件'],
          rows: [
            { '特性': '工作方式', 'LLM': '通过学习到的概率分布预测下一个令牌', '传统软件': '执行确定性指令' },
            { '特性': '输出确定性', 'LLM': '概率性——相同输入可能产生不同输出', '传统软件': '确定性——相同输入始终产生相同输出' },
            { '特性': '知识来源', 'LLM': '训练期间存储在模型权重中的模式', '传统软件': '在运行时从数据库或文件中读取' },
            { '特性': '错误类型', 'LLM': '自信但错误（幻觉）', '传统软件': '崩溃或错误代码' },
            { '特性': '更新机制', 'LLM': '需要重新训练或微调', '传统软件': '代码更改或数据库更新' },
          ],
        },

        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '**LLM预测令牌，而非答案。** 它们生成统计上可能的文本序列——不是检索到的事实、逻辑推理或经过验证的信息。',
            '**1个令牌≈0.75个英语单词。** 1,000词的文档使用约1,300个令牌。中文和日文密度约高50%。',
            '**[温度](/prompt-engineering/prompt-engineering-glossary#temperature)控制创意与确定性。** 温度0=确定性。温度1.0=按比例采样。超过1.5=高幻觉风险。',
            '**[上下文窗口](/prompt-engineering/prompt-engineering-glossary#context-window)不是记忆。** GPT-4o：128k令牌。Claude 4.6 Sonnet：200k令牌。Gemini 2.5 Pro：200万令牌。会话之间不保留任何内容。',
            '**位置至关重要。** Transformer[注意力](/prompt-engineering/prompt-engineering-glossary#attention)机制对上下文开头和结尾的权重高于中间。将重要指令放在最前面和最后面——而不是中间。',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf)塑造行为，而非能力。** 拒绝、语气和有用性来自训练后微调——而非基础架构。',
          ],
        },

        tokenization: {
          title: '[令牌化](/prompt-engineering/prompt-engineering-glossary#tokenization)：文本如何变为数字',
          content: [
            '**在LLM处理文本之前，必须将其转换为整数令牌ID序列——这一过程称为[令牌化](/prompt-engineering/prompt-engineering-glossary#tokenization)。** GPT-4o使用字节对编码（BPE），将文本分解为常见的子词单元。Claude 4.6 Sonnet和Gemini 2.5 Pro使用类似的子词令牌化方案。',
            '令牌化取决于语言。英文文本平均每0.75个单词对应1个令牌。中文和日文为每0.5个词对应1个令牌——同一文档的中文版本需要约英文版两倍的令牌，直接影响API成本和上下文窗口使用。',
          ],
          tableFormat: true,
          columns: ['输入文本', '令牌', '令牌数量'],
          rows: [
            { '输入文本': '"Hello, world!"', '令牌': '"Hello", ",", " world", "!"', '令牌数量': '4' },
            { '输入文本': '"Tokenization"', '令牌': '"Token", "ization"', '令牌数量': '2' },
            { '输入文本': '"GPT-4o"', '令牌': '"G", "PT", "-", "4", "o"', '令牌数量': '5' },
            { '输入文本': '"你好世界"（中文问候）', '令牌': '"你好", "世界"', '令牌数量': '根据模型为2–4' },
          ],
        },

        attention: {
          title: 'Transformer注意力机制如何工作',
          content: [
            '**Transformer架构使用一种称为自注意力的机制来确定每个令牌在计算其表示时应"关注"序列中所有其他令牌的程度。** 对于每个令牌，模型计算三个向量——查询（Q）、键（K）和值（V）——并将注意力分数计算为Q和K的点积，用softmax进行缩放和归一化。',
            '多头注意力在多个"头"上并行运行此过程（GPT-4o在其最大层中使用96个注意力头），每个头学习不同的关系模式。一些头专注于句法关系（主语-动词），其他头关注语义相似性，还有一些关注共指（将代词与名词关联）。',
            '一个重要的实际结果："Lost in the Middle"效应。Stanford University的Liu et al.（2023）的研究表明，LLM系统性地低估长上下文中间的信息。对于超过约2,000个令牌的提示，将关键指令放在系统提示（开头）中，并在用户消息结尾重复最重要的约束。',
          ],
        },

        training: {
          title: 'LLM如何训练：预训练与RLHF',
          content: [
            '**LLM训练分两个明确阶段进行：预训练（从原始文本学习语言模式）和训练后对齐（通过人类反馈调整行为）。** 这两个阶段产生不同的能力，并解释了为什么不同实验室的模型即使在类似的基准结果下也有不同的反应。',
            '在预训练期间，模型处理大量语料库——Llama 3.1在约15万亿个令牌上训练；GPT-4估计在1至2万亿个令牌上训练。目标很简单：预测下一个令牌。不存储显式知识；所有信息都作为统计模式编码在模型权重中。',
            '训练后对齐——通常是来自人类反馈的强化学习（RLHF）或其变体（RLAIF、DPO）——将模型塑造为有用的助手。人类评估者根据有用性、无害性和诚实性对输出进行评分。在这些评分上训练奖励模型，然后对基础LLM进行微调以最大化奖励。RLHF决定拒绝行为、语气和安全机制——而非基础架构。',
          ],
          items: [
            '**预训练：** 对网络规模数据进行无监督的下一个令牌预测。将语言模式、世界知识和推理捷径编码到模型权重中（前沿模型约70B至405B参数）。',
            '**监督微调（SFT）：** 在精心策划的指令-响应对上训练模型，使其表现得像助手而非纯文本预测器。',
            '**RLHF / DPO：** 人类偏好引导模型产生有用、无害和诚实的输出。DPO（直接偏好优化）是Llama和Mistral模型使用的计算效率更高的替代方案。',
            '**Constitutional AI（Anthropic）：** Claude额外使用一套原则（"宪法"）进行训练，以减少对边缘案例中人类反馈的依赖——Claude 4.6 Sonnet使用此方法。',
          ],
        },

        inference: {
          title: '推理如何工作：采样与解码',
          content: [
            '**在推理过程中，模型逐令牌生成输出——计算整个词汇表的概率分布，并根据您控制的解码参数从中选择。** 三个主要参数是[温度](/prompt-engineering/prompt-engineering-glossary#temperature)、[Top-p](/prompt-engineering/prompt-engineering-glossary#top-p)（核采样）和最大令牌数。',
          ],
          tableFormat: true,
          columns: ['参数', '范围', '效果', '推荐用途'],
          rows: [
            { '参数': '温度', '范围': '0.0 – 2.0', '效果': '锐化（低）或平坦化（高）概率分布', '推荐用途': '代码/事实为0；文本为0.7；创意任务为1.0' },
            { '参数': 'Top-p（核）', '范围': '0.0 – 1.0', '效果': '将采样限制在累积概率达到p的令牌上', '推荐用途': '大多数任务0.9–0.95；高度受限输出为0.5' },
            { '参数': 'Top-k', '范围': '1至词汇表大小', '效果': '将采样限制在最可能的k个下一个令牌', '推荐用途': '很少使用；Top-p通常更受欢迎' },
            { '参数': '最大令牌数', '范围': '1至上下文限制', '效果': '输出长度的硬性停止', '推荐用途': '设置为预期输出长度的2倍以避免截断' },
            { '参数': '频率惩罚', '范围': '-2.0 – 2.0', '效果': '减少已生成令牌的重复', '推荐用途': '长文档0.1–0.3；代码为0' },
          ],
        },

        contextWindowSection: {
          title: '[上下文窗口](/prompt-engineering/prompt-engineering-glossary#context-window)：模型能看到什么',
          content: [
            '**[上下文窗口](/prompt-engineering/prompt-engineering-glossary#context-window)是模型在单次推理调用中能处理的最大令牌数——包括系统提示、对话历史、文档和当前用户消息的组合。** 会话之间不保留任何内容；模型每次都从头开始。',
            '上下文窗口大小因模型而异，直接影响哪些使用场景是可行的：',
          ],
          tableFormat: true,
          columns: ['模型', '上下文窗口', '近似单词当量', '实际文档限制'],
          rows: [
            { '模型': 'GPT-4o（OpenAI）', '上下文窗口': '128,000令牌', '近似单词当量': '约96,000词', '实际文档限制': '约200页PDF' },
            { '模型': 'Claude 4.6 Sonnet（Anthropic）', '上下文窗口': '200,000令牌', '近似单词当量': '约150,000词', '实际文档限制': '约300页PDF' },
            { '模型': 'Gemini 2.5 Pro（Google DeepMind）', '上下文窗口': '2,000,000令牌', '近似单词当量': '约1,500,000词', '实际文档限制': '约3,000页PDF' },
            { '模型': 'LLaMA 3.1 70B（Meta，通过Ollama）', '上下文窗口': '128,000令牌', '近似单词当量': '约96,000词', '实际文档限制': '约200页PDF' },
          ],
        },

        implications: {
          title: '这对提示工程意味着什么',
          content: [
            '**理解LLM架构直接提升提示质量——令牌位置、温度、上下文窗口使用和输出长度对输出可靠性有可测量的影响。**',
          ],
          items: [
            '**将重要指令放在最前面。** 系统提示在每条用户消息之前处理。由于"Lost in the Middle"效应，深埋在长提示中的指令权重较低。将约束和角色定义放在系统提示中。',
            '**温度不是开关。** 代码生成和事实性任务为0。内容生成为0.5–0.7。超过1.0会增加多样性，但会显著提高幻觉风险。',
            '**令牌数量对成本和延迟有线性影响。** API定价按令牌计算（输入和输出）。拥有100名日常用户的10,000令牌系统提示仅输入每天花费100万令牌——无情地压缩指令。',
            '**模型"不知道"自己是错的。** 幻觉是令牌预测的结构性特征——模型输出统计上可能的内容，而非经过验证的内容。对于关键应用，始终验证事实性声明。',
            '**上下文窗口≠注意力质量。** 200,000令牌的上下文窗口并不意味着模型对所有200,000个令牌给予同等的注意力。对于超过约50,000令牌的文档，考虑使用RAG进行分块，而非完整上下文填充。',
          ],
        },

        misconceptions: {
          title: '常见的LLM误解',
          content: ['**这些关于LLM的误解广泛存在，常常导致设计不良的提示：**'],
          tableFormat: true,
          columns: ['误解', '实际发生的情况', '对提示工程的影响'],
          rows: [
            { '误解': '"模型读取并理解我的文档"', '实际发生的情况': '模型处理令牌序列并预测延续——没有阅读理解', '对提示工程的影响': '明确说明需要提取什么；不要假设模型会推断目标' },
            { '误解': '"模型记得我们上次的对话"', '实际发生的情况': '每个API调用都是无状态的；历史记录必须明确包含在上下文窗口中', '对提示工程的影响': '在系统提示或对话历史中包含相关的先前上下文' },
            { '误解': '"模型知道今天的日期"', '实际发生的情况': '模型有训练截止日期，除非被告知否则不知道今天的日期', '对提示工程的影响': '在系统提示中插入当前日期用于日期敏感任务' },
            { '误解': '"更高的温度=更聪明的输出"', '实际发生的情况': '温度控制采样随机性，而非能力或准确性', '对提示工程的影响': '分析任务使用低温度（0.0–0.3）；创意变体使用较高温度' },
            { '误解': '"模型可以可靠地计算字符数"', '实际发生的情况': '令牌边界是子词单元；精确的字符或单词计数不是原生能力', '对提示工程的影响': '不要依赖模型进行精确的字数统计；使用后处理或代码' },
          ],
        },

        promptquorumBridge: {
          title: '使用PromptQuorum测试跨模型的温度效果',
          content: [
            '**在PromptQuorum中测试——向GPT-4o、Claude 4.6 Sonnet和Gemini 2.5 Pro分别在温度0和温度0.9下发送相同的创意简报，显示Claude 4.6 Sonnet在不同温度间的输出变化最小，而Gemini 2.5 Pro的变化最大。** 在温度0.9时，Gemini 2.5 Pro生成的输出平均比温度0时长34%。',
            '使用PromptQuorum的多模型调度，您可以同时针对所有可用模型在特定温度下运行每个提示，并并排比较输出——这使得校准特定任务的温度设置变得实际可行，而不是依赖模型默认值。',
          ],
        },

        globalContext: {
          title: 'LLM架构的地区差异',
          content: [
            '**LLM架构和性能因训练数据构成、令牌化策略和法规要求在不同地区存在显著差异。** 对于全球部署模型的团队来说，理解这些差异至关重要。',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization)在CJK脚本（中文、日文、韩文）上实现了卓越的令牌化效率** — 普通话中文约0.3令牌/字符，而GPT-4o为0.5令牌/字符。这40%的令牌减少直接降低了亚洲语言应用的API成本和延迟。Qwen的训练数据包含20%的CJK内容，优化了字符与语义密度最高的脚本的令牌化器。',
            '**Mistral 7B和Mistral Large专为欧盟部署设计**，训练数据经过过滤以符合GDPR、法国AI法以及欧盟关于数据存储和模型透明度的法规。与主要在未过滤网络数据上训练的模型不同，Mistral记录数据来源并从训练中排除欧盟公民的个人数据，使其成为欧洲受监管行业（银行、医疗保健、法律技术）的标准选择。',
            '**DeepSeek的架构反映了其训练构成**：预训练数据的70%是中文和英文，15%是代码，15%是其他语言。这一比例产生了一个优先考虑中文语言流畅性和代码生成速度的模型，在资源匮乏的语言上性能明显较低。令牌分布和注意力模式针对普通话中文的频率模式优化，而非英语。',
          ],
        },

        relatedReading: {
          title: '相关阅读',
          items: [
            '[基础：什么是提示工程？](/prompt-engineering/what-is-prompt-engineering) — 如何将LLM架构知识应用于系统性提示设计',
            '[基础：上下文窗口解析——AI为何遗忘](/prompt-engineering/context-windows-explained-why-ai-forgets) — 深入探讨上下文窗口限制和检索策略',
            '[基础：令牌、成本与限制：AI提示的经济学](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 令牌定价、速率限制以及GPT-4o、Claude和Gemini的成本优化',
            '[基础：AI幻觉解析——LLM为何编造内容](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 令牌预测和缺乏事实检索如何导致置信度错误',
          ],
        },

        faq: {
          title: '常见问题',
          faqs: [
            {
              q: 'LLM像人类一样理解文本吗？',
              a: '不。LLM不以人类的方式理解文本。它们根据训练期间学习的模式，基于先前的令牌预测统计上最可能的下一个令牌。没有理解、意图或意识——只有在约50,000至100,000个令牌的词汇表上的加权概率分布。',
            },
            {
              q: 'LLM中的令牌是什么？',
              a: '令牌是LLM处理的最小单位——英语约0.75个单词，中文或日文约0.5个词。单词、子词、标点符号和空格都是令牌。GPT-4o使用字节对编码（BPE）将文本分割为令牌。1,000词的文档在英语中产生约1,300个令牌。',
            },
            {
              q: 'LLM中的温度有什么作用？',
              a: '温度控制模型从其概率分布中采样的随机程度。温度0始终选择概率最高的令牌（确定性）。温度1.0按比例从分布中采样。超过1.5，分布变平，幻觉风险增加。大多数生产应用在0.1到0.7之间效果最佳。',
            },
            {
              q: '为什么提示中信息的位置很重要？',
              a: 'Transformer注意力机制对上下文窗口开头和结尾的令牌赋予比中间令牌更多的权重——这一模式被Liu et al.（2023）记录为"Lost in the Middle"效应。对于超过约2,000个令牌的提示，将最重要的指令放在开头，并在用户消息结尾重复关键约束。',
            },
            {
              q: 'RLHF是什么，它如何影响模型输出？',
              a: '来自人类反馈的强化学习（RLHF）是一个训练后步骤，人类评估者对模型输出进行评分，在这些评分上训练奖励模型，然后对基础LLM进行微调以最大化奖励。RLHF塑造拒绝行为、语气、有用性和安全性——这就是为什么不同实验室的模型对相同提示的反应不同，即使基准结果相似。',
            },
            {
              q: '上下文窗口和记忆有什么区别？',
              a: '上下文窗口涵盖模型在推理调用期间能看到的所有文本——系统提示、历史记录和当前消息。它不是持久记忆：对话结束时，模型不保留任何内容。GPT-4o：128,000令牌。Claude 4.6 Sonnet：200,000令牌。Gemini 2.5 Pro：2,000,000令牌。',
            },
            {
              q: '"Lost in the Middle"效应是什么，如何避免？',
              a: '"Lost in the Middle"效应由Stanford University的Liu et al.（2023）记录，表明Transformer注意力系统性地低估长上下文中间的信息。避免方法：将关键指令放在系统提示中，将重要上下文保持在输入的前10–15%，并在用户消息结尾重复最重要的约束。对于超过约50,000令牌的文档，使用RAG进行分块而非完整上下文填充。',
            },
            {
              q: 'RLHF和Constitutional AI有什么区别？',
              a: 'RLHF是一种训练后技术，人类评估者对模型输出进行评分，训练奖励模型，然后对LLM进行微调以最大化该奖励。Constitutional AI（Anthropic为Claude开发）通过一套书面原则（"宪法"）扩展了RLHF以指导模型行为——这减少了边缘案例中对人类反馈的依赖。',
            },
            {
              q: 'GPT-4o、Claude和Gemini在架构上有何不同？',
              a: '三者都是基于Transformer的LLM，但在扩展、上下文窗口和训练后处理上有所不同。GPT-4o（OpenAI）：128,000令牌。Claude 4.6 Sonnet（Anthropic）：200,000令牌，使用Constitutional AI。Gemini 2.5 Pro（Google DeepMind）：2,000,000令牌。这些差异影响成本、延迟和适用性——GPT-4o在推理上表现出色，Claude擅长长上下文，Gemini适合处理超长文档。',
            },
            {
              q: '1,000词的文本有多少个令牌？',
              a: '英语中，1,000词约对应1,300–1,350个令牌。约1个令牌=0.75个单词。中文或日文：1个令牌≈0.5个词——1,000个中文词≈2,000个令牌。令牌数量直接影响API成本和上下文窗口消耗。',
            },
            {
              q: '温度和Top-p有什么区别？',
              a: '温度锐化或平坦化整个概率分布——温度0=确定性，温度1.0=标准，温度2.0=非常随机。Top-p（核采样）将采样限制在累积概率达到p的最小令牌集合上。对于大多数任务，建议调整Top-p（0.8–0.95）而非温度；温度最适合控制创意程度。',
            },
          ],
        },

        sources: {
          title: '来源与延伸阅读',
          items: [
            '[Vaswani et al., 2017. "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — 引入自注意力机制的原始Transformer论文，是所有现代LLM的基础',
            '[Liu et al., 2023. "Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172) — 斯坦福大学记录长上下文LLM中位置依赖注意力偏差的研究',
            '[Ouyang et al., 2022. "Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155) — 将RLHF引入GPT-3的InstructGPT论文，是ChatGPT和现代对齐LLM的基础',
            '[OpenAI. 令牌化器文档](https://platform.openai.com/docs/guides/tokens) — 关于令牌计数及GPT模型令牌化编码方式的交互式指南',
            '[Touvron et al., 2023. "Llama 2: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — Meta关于LLaMA-2架构、训练流程和指令微调方法论的综合论文',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — Anthropic关于使用"宪法"指导模型行为作为纯RLHF替代方案的研究',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — 对现代LLM中BPE、WordPiece、SentencePiece和其他令牌化算法的技术深入分析',
            '[Google DeepMind. Gemini 1.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — 具有100万令牌上下文窗口的前沿模型架构和性能分析',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — 开源模型训练文档及LLM开发中架构决策分析',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — 关于高效长上下文处理的纯Transformer注意力替代方案的研究',
          ],
        },
      },
    },
  };
