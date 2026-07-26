// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: how-llms-actually-work
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";
import { buildOgImageObject } from '@/lib/imageObjectSchema';

const OG_SLUG = 'how-llms-actually-work';

export const article: Partial<Record<Language, PEArticle>> = {
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
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'en'),
        keywords: ['large language models', 'LLM architecture', 'transformer', 'tokenization', 'attention mechanism', 'RLHF', 'temperature', 'context window', 'prompt engineering', 'GPT-5.5', 'Claude'],
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
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
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
              text: 'A token is the smallest unit an LLM processes — roughly 0.75 words in English and 0.5 words in Chinese or Japanese. Words, sub-words, punctuation, and spaces all become tokens. GPT-5.5 uses BPE (Byte Pair Encoding) to split text into tokens before processing. A 1,000-word document becomes approximately 1,300 tokens in English.',
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
              text: 'The context window is all the text the model can see during a single inference call — including the system prompt, conversation history, and the current user message. It is not persistent memory: when the conversation ends, the model retains nothing. GPT-5.5 has a 128,000-token context window (~96,000 words). Claude Opus 4.8 supports 200,000 tokens (~150,000 words). Gemini 3.1 Pro supports 2,000,000 tokens (~1,500,000 words).',
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
            name: 'What is the difference between GPT-5.5, Claude, and Gemini architecturally?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All three are transformer-based LLMs trained on massive text corpora, but they differ in scale, context window, and post-training approach. GPT-5.5 (OpenAI) has a 128,000-token context window. Claude Opus 4.8 (Anthropic) has 200,000 tokens and uses Constitutional AI for alignment. Gemini 3.1 Pro (Google DeepMind) has the largest context window at 2,000,000 tokens. These differences affect cost, latency, and suitability for different tasks — GPT-5.5 excels at reasoning, Claude at long context and nuance, Gemini at ultra-long document processing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many tokens is 1000 words?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In English, 1,000 words ≈ 1,300–1,350 tokens using GPT-5.5 or Claude tokenizers. Roughly 1 token = 0.75 words. For Chinese or Japanese, use 1 token ≈ 0.5 words — so 1,000 Chinese/Japanese words ≈ 2,000 tokens. Token count directly affects API cost and context window consumption, so understanding the ratio is critical for budgeting.',
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
            '**[Context windows](/prompt-engineering/prompt-engineering-glossary#context-window) are not memory.** GPT-5.5: 128k tokens. Claude Opus 4.8: 200k tokens. Gemini 3.1 Pro: 2M tokens. Nothing persists between sessions.',
            '**Position matters.** Transformer [attention](/prompt-engineering/prompt-engineering-glossary#attention) weights the beginning and end of the context more heavily. Put critical instructions first and last — not buried in the middle.',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) shapes behavior, not capability.** Refusals, tone, and helpfulness come from post-training fine-tuning — not the base model architecture.',
          ],
        },

        tokenization: {
          title: '[Tokenization](/prompt-engineering/prompt-engineering-glossary#tokenization): How Text Becomes Numbers',
          content: [
            '**Before an LLM can process any text, it must convert it into a sequence of integer token IDs — a process called [tokenization](/prompt-engineering/prompt-engineering-glossary#tokenization).** GPT-5.5 uses Byte Pair Encoding (BPE), which breaks text into frequently occurring sub-word units. Claude Opus 4.8 and Gemini 3.1 Pro use similar sub-word tokenization schemes.',
            'Tokenization is language-dependent. English text averages approximately 1 token per 0.75 words. Chinese and Japanese average 1 token per 0.5 words — meaning the same document costs roughly twice as many tokens in Chinese as in English, which directly affects API cost and context window usage.',
          ],
          tableFormat: true,
          columns: ['Input text', 'Tokens', 'Token count'],
          rows: [
            { 'Input text': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Token count': '4' },
            { 'Input text': '"Tokenization"', Tokens: '"Token", "ization"', 'Token count': '2' },
            { 'Input text': '"GPT-5.5"', Tokens: '"G", "PT", "-", "4", "o"', 'Token count': '5' },
            { 'Input text': '"你好世界" (Hello world, Chinese)', Tokens: '"你好", "世界"', 'Token count': '2–4 depending on model' },
          ],
        },

        attention: {
          title: 'How Transformer Attention Works',
          content: [
            '**The transformer architecture uses a mechanism called self-attention to determine how much each token should "pay attention" to every other token in the sequence when computing its representation.** For each token, the model computes three vectors — Query (Q), Key (K), and Value (V) — and calculates attention scores as dot products between Q and K, scaled and normalized with softmax.',
            'Multi-head attention runs this process in parallel across multiple "heads" (GPT-5.5 uses 96 attention heads in its largest layers), each learning different relationship patterns. Some heads specialize in syntactic relationships (subject-verb), others in semantic similarity, others in coreference (matching pronouns to nouns).',
            'A key practical implication: the "lost in the middle" effect. Research from Liu et al. (2023) at Stanford shows that LLMs systematically underweight information in the middle of long contexts. For prompts exceeding ~2,000 tokens, place critical instructions in the system prompt (beginning) and repeat the most important constraint at the end of the user message.',
          ],
        },

        training: {
          title: 'How LLMs Are Trained: Pretraining and RLHF',
          content: [
            '**LLM training happens in two distinct phases: pretraining (learning language patterns from raw text) and post-training alignment (shaping behavior with human feedback).** These phases produce different capabilities and explain why models from different labs behave differently even with similar benchmark scores.',
            'During pretraining, the model processes a massive corpus — Llama 3.3 was trained on approximately 15 trillion tokens; GPT-4 on an estimated 1–2 trillion tokens. The objective is simple: predict the next token. No explicit knowledge is stored; all information is encoded in the model weights as statistical patterns.',
            'Post-training alignment — typically Reinforcement Learning from Human Feedback (RLHF) or its variants (RLAIF, DPO) — shapes the model into a useful assistant. Human raters score outputs on helpfulness, harmlessness, and honesty. A reward model is trained on these ratings, and the base LLM is fine-tuned to maximize reward. RLHF determines refusal behavior, tone, and safety guardrails — not the base architecture.',
          ],
          items: [
            '**Pretraining:** Unsupervised next-token prediction on web-scale data. Encodes language patterns, world knowledge, and reasoning shortcuts into model weights (~70B–405B parameters for frontier models).',
            '**Supervised Fine-Tuning (SFT):** The model is trained on curated instruction-response pairs to behave like an assistant rather than a raw text predictor.',
            '**RLHF / DPO:** Human preferences steer the model toward helpful, harmless, and honest outputs. DPO (Direct Preference Optimization) is a more computationally efficient alternative used by Llama and Mistral models.',
            '**Constitutional AI (Anthropic):** Claude is additionally trained using a set of principles ("constitution") to reduce reliance on human feedback for every edge case — Claude Opus 4.8 uses this approach.',
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
            { Model: 'GPT-5.5 (OpenAI)', 'Context window': '128,000 tokens', 'Approximate word equivalent': '~96,000 words', 'Practical document limit': '~200-page PDF' },
            { Model: 'Claude Opus 4.8 (Anthropic)', 'Context window': '200,000 tokens', 'Approximate word equivalent': '~150,000 words', 'Practical document limit': '~300-page PDF' },
            { Model: 'Gemini 3.1 Pro (Google DeepMind)', 'Context window': '2,000,000 tokens', 'Approximate word equivalent': '~1,500,000 words', 'Practical document limit': '~3,000-page PDF' },
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
            '**Tested in PromptQuorum — sending the same creative brief to GPT-5.5, Claude Opus 4.8, and Gemini 3.1 Pro at temperature 0 vs. temperature 0.9 showed that Claude Opus 4.8 has the smallest output variance between temperatures, while Gemini 3.1 Pro shows the highest variance.** At temperature 0.9, Gemini 3.1 Pro produced outputs 34% longer on average than at temperature 0.',
            'Using PromptQuorum\'s multi-model dispatch, you can run any prompt simultaneously against all available models at a specified temperature and compare outputs side-by-side — making it practical to calibrate temperature settings for your specific task rather than relying on model defaults.',
          ],
        },

        globalContext: {
          title: 'LLM Architecture Differences by Region',
          content: [
            '**LLM architecture and performance vary significantly by training data composition, tokenization strategy, and regulatory constraints across regions.** Understanding these differences is critical for teams deploying models globally.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) achieves superior tokenization efficiency for CJK (Chinese, Japanese, Korean) scripts** — using approximately 0.3 tokens per character for Mandarin Chinese compared to GPT-5.5\'s 0.5 tokens per character. This 40% reduction in token count directly reduces API costs and latency for Asian language applications. Qwen\'s training data includes 20% CJK content, optimizing the tokenizer for scripts where character-to-semantic density is highest.',
            '**Mistral Small and Mistral Large are explicitly architected for European deployment**, with training data filtered to comply with GDPR, France\'s AI Act, and EU regulations on data retention and model transparency. Unlike models trained primarily on unfiltered web data, Mistral documents data sourcing and excludes EU citizens\' personal information from training, making it the default choice for regulated industries in Europe (banking, healthcare, legal tech).',
            '**DeepSeek\'s architecture reflects its training composition**: 70% of pretraining data is in Chinese and English, 15% in code, 15% in other languages. This ratio produces a model biased toward Chinese language fluency and code-generation speed, with substantially lower performance on low-resource languages. The token distribution and attention patterns are optimized for the frequency patterns in Mandarin Chinese, not English.',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — how to apply LLM architecture knowledge to systematic prompt design',
            '[Fundamentals: Context Windows Explained — Why AI Forgets](/prompt-engineering/context-windows-explained-why-ai-forgets) — deep dive into context window limits and retrieval strategies',
            '[Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — token pricing, rate limits, and cost optimization across GPT-5.5, Claude, and Gemini',
            '[Fundamentals: AI Hallucinations Explained — Why LLMs Make Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — how token prediction and the lack of fact retrieval lead to confidence errors',
            '[AI Limitations: What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — the eight structural constraints every LLM shares and the engineering workaround for each',
          ],
        },
        howToStart: {
          title: 'How to Understand How LLMs Work',
          numberedItems: [
            '**Start with tokens: understand that LLMs don\'t see letters or words, they see tokens (subword units), usually 1–2 tokens per word in English.** Use an online tokenizer (OpenAI\'s, Anthropic\'s) to count tokens in sample text. See how \'ChatGPT\' becomes \'Chat\' + \'G\' + \'PT\', and how that affects pricing and context windows.',
            '**Learn the transformer architecture\'s three core layers: embeddings, attention, and output projection.** You don\'t need to implement it, but know conceptually: embeddings convert tokens to vectors, attention compares all pairs of tokens to understand relationships, output projection maps back to vocabulary. This explains why LLMs understand context and why they hallucinate.',
            '**Understand why LLMs hallucinate: they predict \'likely next tokens\' based on training data patterns, not \'correct facts.\'** When training data has conflicting or scarce information on a topic, the model\'s best guess is sometimes wrong. This is a fundamental property, not a fixable bug. Set Temperature (T) low for factual tasks, high for creative ones.',
            '**Experiment with temperature and top-p to see how they change output.** Generate text at T=0.0 (deterministic), T=0.7 (varied but coherent), and T=1.5 (random). See that higher T = more variation. Understand top-p (nucleus sampling) filters unlikely tokens, reducing nonsense.',
            '**Understand context windows: the model \'sees\' only a fixed window of recent tokens.** GPT-5.5\'s 128k-token window is ~96,000 words. Old information gets \'forgotten\' because it falls outside the window. This explains why LLMs sometimes contradict information earlier in a long conversation.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Do LLMs understand text the way humans do?',
              a: 'No. LLMs do not understand text in the human sense. They predict the statistically most probable next token given the tokens before it, based on patterns learned during training. There is no comprehension, intent, or awareness — only weighted probability distributions over a vocabulary of roughly 50,000–100,000 tokens.',
            },
            {
              q: 'What is a token in an LLM?',
              a: 'A token is the smallest unit an LLM processes — roughly 0.75 words in English and 0.5 words in Chinese or Japanese. Words, sub-words, punctuation, and spaces all become tokens. GPT-5.5 uses BPE (Byte Pair Encoding) to split text into tokens before processing. A 1,000-word document becomes approximately 1,300 tokens in English.',
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
              a: 'The context window is all text the model can see during one inference call — system prompt, history, and current message. It is not persistent: when the conversation ends, the model retains nothing. GPT-5.5: 128,000 tokens. Claude Opus 4.8: 200,000 tokens. Gemini 3.1 Pro: 2,000,000 tokens.',
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
              q: 'What is the difference between GPT-5.5, Claude, and Gemini architecturally?',
              a: 'All three are transformer-based LLMs trained on massive text corpora but differ in scale and post-training. GPT-5.5 (OpenAI) has 128,000-token context and excels at reasoning. Claude Opus 4.8 (Anthropic) has 200,000 tokens and uses Constitutional AI for alignment. Gemini 3.1 Pro (Google DeepMind) has 2,000,000 tokens for ultra-long document processing. These differences affect cost, latency, and suitability for different tasks.',
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
            '[Touvron et al., 2023. "Llama 3.3: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — Meta\'s comprehensive paper on Llama 3.3 architecture, training pipeline, and instruction-tuning methodology',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — Anthropic\'s research on using a "constitution" to guide model behavior as an alternative to pure RLHF',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — technical deep-dive into BPE, WordPiece, SentencePiece, and other tokenization algorithms used across modern LLMs',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — architecture and performance analysis of a frontier model with 1M token context window',
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
      metaDescription: 'LLMs sagen Tokens per Wahrscheinlichkeitsverteilung voraus – nicht aus Verständnis. Tokenisierung, Transformer-Attention, RLHF und Inferenzparameter erklärt.',
      dateModified: '2026-04-12',
      readTime: '12 Min. Lesezeit',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/de/prompt-engineering/how-llms-actually-work',
        inLanguage: 'de',
        headline: 'Wie LLMs wirklich funktionieren: Tokens, Attention und Inferenz',
        description: 'Große Sprachmodelle sagen das nächste Token per Wahrscheinlichkeitsverteilung voraus — kein Verstehen, kein Abrufen. Lerne Tokenisierung, Attention, RLHF und Inferenzparameter.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['große Sprachmodelle', 'LLM-Architektur', 'Transformer', 'Tokenisierung', 'Aufmerksamkeitsmechanismus', 'RLHF', 'Temperatur', 'Kontextfenster', 'Prompt Engineering', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
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
            '**[Kontextfenster](/prompt-engineering/prompt-engineering-glossary#context-window) sind kein Gedächtnis.** GPT-5.5: 128k Tokens. Claude Opus 4.8: 200k Tokens. Gemini 3.1 Pro: 2 Mio. Tokens. Nichts bleibt zwischen Sitzungen erhalten.',
            '**Position ist entscheidend.** Der Transformer-[Attention](/prompt-engineering/prompt-engineering-glossary#attention)-Mechanismus gewichtet Anfang und Ende des Kontexts stärker. Wichtige Anweisungen zuerst und zuletzt platzieren — nicht in der Mitte.',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) formt Verhalten, nicht Fähigkeiten.** Ablehnungen, Ton und Hilfsbereitschaft entstehen durch Post-Training-Fine-Tuning — nicht durch die Basisarchitektur.',
          ],
        },
        tokenization: {
          title: '[Tokenisierung](/prompt-engineering/prompt-engineering-glossary#tokenization): Wie Text zu Zahlen wird',
          content: [
            '**Bevor ein LLM Text verarbeiten kann, muss er diesen in eine Folge ganzzahliger Token-IDs umwandeln — ein Prozess, der als [Tokenisierung](/prompt-engineering/prompt-engineering-glossary#tokenization) bezeichnet wird.** GPT-5.5 verwendet Byte Pair Encoding (BPE), das Text in häufig vorkommende Subwort-Einheiten zerlegt. Claude Opus 4.8 und Gemini 3.1 Pro verwenden ähnliche Subwort-Tokenisierungsverfahren.',
            'Tokenisierung ist sprachabhängig. Englischer Text umfasst durchschnittlich 1 Token pro 0,75 Wörtern. Chinesisch und Japanisch kommen auf 1 Token pro 0,5 Wörtern — dasselbe Dokument kostet auf Chinesisch also etwa doppelt so viele Tokens wie auf Englisch, was sich direkt auf API-Kosten und die Nutzung des Kontextfensters auswirkt.',
          ],
          tableFormat: true,
          columns: ['Eingabetext', 'Tokens', 'Anzahl Tokens'],
          rows: [
            { 'Eingabetext': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Anzahl Tokens': '4' },
            { 'Eingabetext': '"Tokenization"', Tokens: '"Token", "ization"', 'Anzahl Tokens': '2' },
            { 'Eingabetext': '"GPT-5.5"', Tokens: '"G", "PT", "-", "4", "o"', 'Anzahl Tokens': '5' },
            { 'Eingabetext': '"你好世界" (Hallo Welt, Chinesisch)', Tokens: '"你好", "世界"', 'Anzahl Tokens': '2–4 je nach Modell' },
          ],
        },
        attention: {
          title: 'Wie der Transformer-Attention-Mechanismus funktioniert',
          content: [
            '**Die Transformer-Architektur verwendet einen Mechanismus namens Self-Attention, um zu bestimmen, wie stark jedes Token bei der Berechnung seiner Repräsentation auf alle anderen Tokens in der Sequenz "achten" soll.** Für jedes Token berechnet das Modell drei Vektoren — Query (Q), Key (K) und Value (V) — und ermittelt Attention-Scores als Skalarprodukte von Q und K, skaliert und normiert mit Softmax.',
            'Multi-Head-Attention führt diesen Prozess parallel über mehrere "Heads" aus (GPT-5.5 verwendet 96 Attention-Heads in seinen größten Schichten), wobei jeder Head unterschiedliche Beziehungsmuster erlernt. Einige Heads spezialisieren sich auf syntaktische Beziehungen (Subjekt-Verb), andere auf semantische Ähnlichkeit, wieder andere auf Koreferenzen (Pronomen auf Substantive beziehen).',
            'Eine wichtige praktische Konsequenz: der "Lost in the Middle"-Effekt. Forschungen von Liu et al. (2023) an der Stanford University zeigen, dass LLMs Informationen in der Mitte langer Kontexte systematisch untergewichten. Bei Prompts mit mehr als ~2.000 Tokens sollten kritische Anweisungen im System-Prompt (Anfang) platziert und die wichtigste Einschränkung am Ende der Nutzernachricht wiederholt werden.',
          ],
        },
        training: {
          title: 'Wie LLMs trainiert werden: Vortraining und RLHF',
          content: [
            '**Das LLM-Training findet in zwei klar getrennten Phasen statt: Vortraining (Sprachmuster aus Rohtexten lernen) und Post-Training-Alignment (Verhalten durch menschliches Feedback anpassen).** Diese Phasen erzeugen unterschiedliche Fähigkeiten und erklären, warum Modelle verschiedener Labore selbst bei ähnlichen Benchmark-Ergebnissen unterschiedlich reagieren.',
            'Während des Vortrainings verarbeitet das Modell ein massives Korpus — Llama 3.3 wurde auf etwa 15 Billionen Tokens trainiert; GPT-4 auf geschätzte 1–2 Billionen Tokens. Das Ziel ist einfach: das nächste Token vorhersagen. Kein explizites Wissen wird gespeichert; alle Informationen werden als statistische Muster in den Modellgewichten kodiert.',
            'Post-Training-Alignment — typischerweise Reinforcement Learning from Human Feedback (RLHF) oder seine Varianten (RLAIF, DPO) — formt das Modell zu einem hilfreichen Assistenten. Menschliche Bewerter beurteilen Ausgaben nach Hilfsbereitschaft, Harmlosigkeit und Ehrlichkeit. Ein Belohnungsmodell wird auf diesen Bewertungen trainiert, und das Basis-LLM wird daraufhin fine-getuned, den Reward zu maximieren. RLHF bestimmt Ablehnungsverhalten, Ton und Sicherheitsmechanismen — nicht die Basisarchitektur.',
          ],
          items: [
            '**Vortraining:** Unüberwachte Vorhersage des nächsten Tokens auf webskalierten Daten. Kodiert Sprachmuster, Weltwissen und Reasoning-Abkürzungen in Modellgewichte (~70B–405B Parameter bei Frontier-Modellen).',
            '**Supervised Fine-Tuning (SFT):** Das Modell wird auf kuratierten Anweisungs-Antwort-Paaren trainiert, um sich wie ein Assistent zu verhalten statt wie ein reiner Textprediktor.',
            '**RLHF / DPO:** Menschliche Präferenzen steuern das Modell in Richtung hilfreicher, harmloser und ehrlicher Ausgaben. DPO (Direct Preference Optimization) ist eine recheneffizientere Alternative, die von Llama- und Mistral-Modellen genutzt wird.',
            '**Constitutional AI (Anthropic):** Claude wird zusätzlich mit einem Satz von Prinzipien ("Verfassung") trainiert, um die Abhängigkeit von menschlichem Feedback bei Randfällen zu reduzieren — Claude Opus 4.8 verwendet diesen Ansatz.',
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
            { Modell: 'GPT-5.5 (OpenAI)', Kontextfenster: '128.000 Tokens', 'Ungefähres Wortäquivalent': '~96.000 Wörter', 'Praktisches Dokumentenlimit': '~200-seitiges PDF' },
            { Modell: 'Claude Opus 4.8 (Anthropic)', Kontextfenster: '200.000 Tokens', 'Ungefähres Wortäquivalent': '~150.000 Wörter', 'Praktisches Dokumentenlimit': '~300-seitiges PDF' },
            { Modell: 'Gemini 3.1 Pro (Google DeepMind)', Kontextfenster: '2.000.000 Tokens', 'Ungefähres Wortäquivalent': '~1.500.000 Wörter', 'Praktisches Dokumentenlimit': '~3.000-seitiges PDF' },
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
            '**Getestet in PromptQuorum — das Senden desselben kreativen Briefings an GPT-5.5, Claude Opus 4.8 und Gemini 3.1 Pro bei Temperatur 0 vs. Temperatur 0,9 zeigte, dass Claude Opus 4.8 die geringste Ausgabevariation zwischen Temperaturen aufweist, während Gemini 3.1 Pro die höchste Variation zeigt.** Bei Temperatur 0,9 erzeugte Gemini 3.1 Pro im Durchschnitt 34 % längere Ausgaben als bei Temperatur 0.',
            'Mit PromptQuorums Multi-Modell-Dispatch kannst du jeden Prompt gleichzeitig gegen alle verfügbaren Modelle bei einer bestimmten Temperatur ausführen und Ausgaben nebeneinander vergleichen — was es praktisch macht, Temperatureinstellungen für eine bestimmte Aufgabe zu kalibrieren statt auf Modell-Standardeinstellungen zu vertrauen.',
          ],
        },
        globalContext: {
          title: 'LLM-Architekturunterschiede nach Region',
          content: [
            '**LLM-Architektur und -Leistung variieren je nach Trainingsdatenzusammensetzung, Tokenisierungsstrategie und regulatorischen Anforderungen erheblich zwischen Regionen.** Das Verstehen dieser Unterschiede ist entscheidend für Teams, die Modelle global einsetzen.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) erreicht überlegene Tokenisierungseffizienz für CJK-Skripte (Chinesisch, Japanisch, Koreanisch)** — mit etwa 0,3 Tokens pro Zeichen für Mandarin-Chinesisch im Vergleich zu GPT-5.5s 0,5 Tokens pro Zeichen. Diese 40-prozentige Reduktion der Token-Anzahl senkt direkt die API-Kosten und Latenz für asiatischsprachige Anwendungen. Qwens Trainingsdaten umfassen 20 % CJK-Inhalte und optimieren den Tokenizer für Skripte, bei denen die Zeichen-zu-Semantik-Dichte am höchsten ist.',
            '**Mistral Small und Mistral Large sind explizit für den europäischen Einsatz konzipiert**, mit Trainingsdaten, die für die Einhaltung der DSGVO, des französischen KI-Gesetzes und der EU-Vorschriften zu Datenspeicherung und Modelltransparenz gefiltert wurden. Im Gegensatz zu Modellen, die primär auf ungefilterten Webdaten trainiert wurden, dokumentiert Mistral die Datenherkunft und schließt personenbezogene Daten von EU-Bürgern aus dem Training aus, was es zur Standardwahl für regulierte Branchen in Europa (Banken, Gesundheitswesen, Legal Tech) macht.',
            '**DeepSeeks Architektur spiegelt seine Trainingszusammensetzung wider**: 70 % der Vortrainingsdaten sind auf Chinesisch und Englisch, 15 % auf Code, 15 % auf anderen Sprachen. Dieses Verhältnis erzeugt ein Modell mit Bias zugunsten chinesischer Sprachflüssigkeit und Code-Generierungsgeschwindigkeit, mit deutlich geringerer Leistung bei ressourcenarmen Sprachen. Die Token-Verteilung und Attention-Muster sind für die Frequenzmuster im Mandarin-Chinesischen optimiert, nicht für Englisch.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Lektüre',
          items: [
            '[Grundlagen: Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — wie man das Wissen über LLM-Architektur auf systematisches Prompt-Design anwendet',
            '[Grundlagen: Kontextfenster erklärt — Warum KI vergisst](/prompt-engineering/context-windows-explained-why-ai-forgets) — Tiefgang zu Kontextfensterlimits und Retrieval-Strategien',
            '[Grundlagen: Tokens, Kosten & Limits: Die Ökonomie des KI-Promptings](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — Token-Preisgestaltung, Rate Limits und Kostenoptimierung über GPT-5.5, Claude und Gemini',
            '[Grundlagen: KI-Halluzinationen erklärt — Warum LLMs Dinge erfinden](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — wie Token-Vorhersage und fehlende Faktenabrufung zu Konfidenzfehlern führen',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Verstehen LLMs Text so wie Menschen?',
              a: 'Nein. LLMs verstehen Text nicht im menschlichen Sinne. Sie sagen das statistisch wahrscheinlichste nächste Token auf Basis der vorherigen Tokens voraus, basierend auf während des Trainings gelernten Mustern. Es gibt kein Verstehen, keine Absicht, kein Bewusstsein — nur gewichtete Wahrscheinlichkeitsverteilungen über ein Vokabular von etwa 50.000–100.000 Tokens.',
            },
            {
              q: 'Was ist ein Token in einem LLM?',
              a: 'Ein Token ist die kleinste Einheit, die ein LLM verarbeitet — etwa 0,75 Wörter auf Englisch und 0,5 Wörter auf Chinesisch oder Japanisch. Wörter, Subwörter, Satzzeichen und Leerzeichen werden alle zu Tokens. GPT-5.5 verwendet BPE (Byte Pair Encoding), um Text in Tokens aufzuteilen. Ein 1.000-Wort-Dokument ergibt auf Englisch etwa 1.300 Tokens.',
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
              a: 'Das Kontextfenster umfasst den gesamten Text, den das Modell während eines Inferenzaufrufs sehen kann — System-Prompt, Verlauf und aktuelle Nachricht. Es ist kein persistentes Gedächtnis: Wenn das Gespräch endet, behält das Modell nichts. GPT-5.5: 128.000 Tokens. Claude Opus 4.8: 200.000 Tokens. Gemini 3.1 Pro: 2.000.000 Tokens.',
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
              q: 'Was ist der Unterschied zwischen GPT-5.5, Claude und Gemini in der Architektur?',
              a: 'Alle drei sind transformerbasierte LLMs, unterscheiden sich aber in Skalierung, Kontextfenster und Post-Training. GPT-5.5 (OpenAI): 128.000 Tokens. Claude Opus 4.8 (Anthropic): 200.000 Tokens, verwendet Constitutional AI. Gemini 3.1 Pro (Google DeepMind): 2.000.000 Tokens. Diese Unterschiede beeinflussen Kosten, Latenz und Eignung — GPT-5.5 glänzt beim Reasoning, Claude bei langem Kontext, Gemini bei der Verarbeitung extrem langer Dokumente.',
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
            '[Touvron et al., 2023. "Llama 3.3: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — Metas umfassendes Paper zu LLaMA-2-Architektur, Trainings-Pipeline und Instruction-Tuning-Methodik',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — Anthropics Forschung zur Verwendung einer "Verfassung" zur Steuerung des Modellverhaltens als Alternative zu reinem RLHF',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — technischer Tiefen-Einblick in BPE, WordPiece, SentencePiece und andere Tokenisierungsalgorithmen moderner LLMs',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — Architektur- und Leistungsanalyse eines Frontier-Modells mit 1-Mio.-Token-Kontextfenster',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — Open-Source-Modell-Trainingsdokumentation und Analyse architektonischer Entscheidungen bei der LLM-Entwicklung',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — Forschung zu Alternativen zur reinen Transformer-Attention für effiziente Long-Context-Verarbeitung',
          ],
        },
      },
    },
    es: {
      theme: 'Fundamentals',
      title: 'Cómo funcionan realmente los LLMs: tokens, attention e inferencia',
      intro: 'Los grandes modelos de lenguaje predicen el siguiente token usando distribuciones de probabilidad — no comprensión. Aprende tokenización, attention, RLHF, parámetros de inferencia y por qué esto importa para el prompt engineering.',
      publishDate: '2026-03-30',
      seoTitle: 'Cómo funcionan los LLMs: tokens, attention e inferencia',
      metaDescription: 'Los LLMs predicen tokens por probabilidad, no por significado. Aprende tokenización, transformer attention, RLHF y parámetros de inferencia con benchmarks.',
      dateModified: '2026-04-12',
      readTime: '12 min de lectura',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/es/prompt-engineering/how-llms-actually-work',
        inLanguage: 'es',
        headline: 'Cómo funcionan realmente los LLMs: tokens, attention e inferencia',
        description: 'Los grandes modelos de lenguaje predicen el siguiente token mediante distribuciones de probabilidad — no comprensión. Aprende tokenización, transformer attention, RLHF y parámetros de inferencia.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['grandes modelos de lenguaje', 'arquitectura LLM', 'transformer', 'tokenización', 'mecanismo de attention', 'RLHF', 'temperatura', 'context window', 'prompt engineering', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'Tokenización' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: 'El deck cubre: cómo la tokenización convierte texto en IDs de token, cómo el transformer attention crea el efecto "lost in the middle", diferencias entre RLHF y pretraining, y tabla de referencia de parámetros de inferencia (temperatura 0.0–2.0, top-p, max tokens). Descarga el PDF como tarjeta de referencia de arquitectura LLM.',
      sections: {
        definition: {
          title: 'Qué es realmente un LLM',
          content: [
            '**Un LLM (large language model) es una red neuronal basada en transformer entrenada para predecir el token más probable dado una secuencia de tokens de entrada — no es una base de datos, un motor de búsqueda ni un sistema de razonamiento.** El modelo aprende relaciones estadísticas entre tokens procesando cientos de miles de millones de palabras de páginas web, libros, código y otros textos durante el entrenamiento.',
            'Cuando escribes un prompt, el modelo convierte tu texto en una secuencia de IDs de token numéricos, los pasa por docenas de capas de transformer y produce una distribución de probabilidad sobre todo su vocabulario (típicamente 50.000–100.000 tokens). Toma muestras de un token de esa distribución, lo añade a la secuencia y repite hasta generar un token de parada o alcanzar el límite de output.',
            'Esta arquitectura explica varios comportamientos que confunden a los usuarios: por qué los LLMs "[alucinan](/prompt-engineering/prompt-engineering-glossary#hallucination)" hechos plausibles pero falsos (predicen texto probable, no verdad verificada), por qué pueden fallar en aritmética (patrones de tokens, no cálculo real), y por qué reformular un prompt cambia el output (diferentes secuencias de tokens desencadenan diferentes distribuciones de probabilidad).',
          ],
          tableFormat: true,
          columns: ['Propiedad', 'LLM', 'Software tradicional'],
          rows: [
            { Propiedad: 'Cómo funciona', LLM: 'Predice el siguiente token mediante distribuciones de probabilidad aprendidas', 'Software tradicional': 'Ejecuta instrucciones deterministas' },
            { Propiedad: 'Determinismo del output', LLM: 'Probabilístico — el mismo input puede producir outputs diferentes', 'Software tradicional': 'Determinista — el mismo input siempre produce el mismo output' },
            { Propiedad: 'Fuente de conocimiento', LLM: 'Patrones codificados en los pesos del modelo durante el entrenamiento', 'Software tradicional': 'Lee de bases de datos o archivos en tiempo de ejecución' },
            { Propiedad: 'Tipo de error', LLM: 'Confiado pero equivocado (alucinación)', 'Software tradicional': 'Se bloquea o devuelve código de error' },
            { Propiedad: 'Mecanismo de actualización', LLM: 'Requiere reentrenamiento o fine-tuning', 'Software tradicional': 'Cambio de código o actualización de base de datos' },
          ],
        },
        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            '**Los LLMs predicen tokens, no respuestas.** Generan secuencias de texto estadísticamente probables — no hechos recuperados, deducciones lógicas ni información verificada.',
            '**1 token ≈ 0.75 palabras en inglés.** Un documento de 1.000 palabras usa ~1.300 tokens. El chino y el japonés son ~50% más densos.',
            '**[La temperatura](/prompt-engineering/prompt-engineering-glossary#temperature) controla creatividad vs. determinismo.** Temperatura 0 = determinista. Temperatura 1.0 = muestreo proporcional. Por encima de 1.5 = alto riesgo de alucinación.',
            '**Los [context windows](/prompt-engineering/prompt-engineering-glossary#context-window) no son memoria.** GPT-5.5: 128k tokens. Claude Opus 4.8: 200k tokens. Gemini 3.1 Pro: 2M tokens. Nada persiste entre sesiones.',
            '**La posición importa.** El [attention](/prompt-engineering/prompt-engineering-glossary#attention) del transformer pondera más el inicio y el final del contexto. Pon las instrucciones críticas al principio y al final — no enterradas en el medio.',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) da forma al comportamiento, no a la capacidad.** Los rechazos, el tono y la utilidad vienen del fine-tuning post-entrenamiento — no de la arquitectura base.',
          ],
        },
        tokenization: {
          title: '[Tokenización](/prompt-engineering/prompt-engineering-glossary#tokenization): Cómo el texto se convierte en números',
          content: [
            '**Antes de que un LLM pueda procesar cualquier texto, debe convertirlo en una secuencia de IDs de token enteros — un proceso llamado [tokenización](/prompt-engineering/prompt-engineering-glossary#tokenization).** GPT-5.5 usa Byte Pair Encoding (BPE), que divide el texto en unidades de subpalabras que aparecen con frecuencia. Claude Opus 4.8 y Gemini 3.1 Pro usan esquemas de tokenización de subpalabras similares.',
            'La tokenización depende del idioma. El texto en inglés promedia aproximadamente 1 token por 0.75 palabras. El chino y el japonés promedian 1 token por 0.5 palabras — lo que significa que el mismo documento cuesta aproximadamente el doble de tokens en chino que en inglés, lo que afecta directamente al coste de la API y al uso del context window.',
          ],
          tableFormat: true,
          columns: ['Texto de entrada', 'Tokens', 'Número de tokens'],
          rows: [
            { 'Texto de entrada': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Número de tokens': '4' },
            { 'Texto de entrada': '"Tokenization"', Tokens: '"Token", "ization"', 'Número de tokens': '2' },
            { 'Texto de entrada': '"GPT-5.5"', Tokens: '"G", "PT", "-", "4", "o"', 'Número de tokens': '5' },
            { 'Texto de entrada': '"你好世界" (Hola mundo, chino)', Tokens: '"你好", "世界"', 'Número de tokens': '2–4 según el modelo' },
          ],
        },
        attention: {
          title: 'Cómo funciona el transformer attention',
          content: [
            '**La arquitectura transformer usa un mecanismo llamado self-attention para determinar cuánto debe "prestar atención" cada token a todos los demás tokens de la secuencia al calcular su representación.** Para cada token, el modelo calcula tres vectores — Query (Q), Key (K) y Value (V) — y calcula puntuaciones de attention como productos escalares entre Q y K, escalados y normalizados con softmax.',
            'El multi-head attention ejecuta este proceso en paralelo en múltiples "cabezas" (GPT-5.5 usa 96 cabezas de attention en sus capas más grandes), cada una aprendiendo diferentes patrones de relación. Algunas cabezas se especializan en relaciones sintácticas (sujeto-verbo), otras en similitud semántica, otras en correferencia (relacionar pronombres con sustantivos).',
            'Una implicación práctica clave: el efecto "lost in the middle". La investigación de Liu et al. (2023) en Stanford muestra que los LLMs subestiman sistemáticamente la información en el medio de contextos largos. Para prompts de más de ~2.000 tokens, coloca las instrucciones críticas en el system prompt (al inicio) y repite la restricción más importante al final del user message.',
          ],
        },
        training: {
          title: 'Cómo se entrenan los LLMs: pretraining y RLHF',
          content: [
            '**El entrenamiento de LLMs ocurre en dos fases distintas: pretraining (aprender patrones de lenguaje de texto bruto) y alineación post-entrenamiento (dar forma al comportamiento con retroalimentación humana).** Estas fases producen capacidades diferentes y explican por qué los modelos de distintos laboratorios se comportan de forma diferente incluso con puntuaciones de benchmark similares.',
            'Durante el pretraining, el modelo procesa un corpus masivo — Llama 3.3 fue entrenado en aproximadamente 15 billones de tokens; GPT-4 en un estimado de 1–2 billones de tokens. El objetivo es simple: predecir el siguiente token. No se almacena conocimiento explícito; toda la información se codifica en los pesos del modelo como patrones estadísticos.',
            'La alineación post-entrenamiento — típicamente Reinforcement Learning from Human Feedback (RLHF) o sus variantes (RLAIF, DPO) — da forma al modelo como un asistente útil. Los evaluadores humanos puntúan los outputs en cuanto a utilidad, inocuidad y honestidad. Se entrena un modelo de recompensa en esas puntuaciones y el LLM base se ajusta para maximizar la recompensa. RLHF determina el comportamiento de rechazo, el tono y las salvaguardas de seguridad — no la arquitectura base.',
          ],
          items: [
            '**Pretraining:** Predicción no supervisada del siguiente token en datos a escala web. Codifica patrones de lenguaje, conocimiento del mundo y atajos de razonamiento en los pesos del modelo (~70B–405B parámetros para modelos frontier).',
            '**Supervised Fine-Tuning (SFT):** El modelo se entrena en pares instrucción-respuesta curados para comportarse como un asistente en lugar de un predictor de texto puro.',
            '**RLHF / DPO:** Las preferencias humanas dirigen el modelo hacia outputs útiles, inofensivos y honestos. DPO (Direct Preference Optimization) es una alternativa más eficiente computacionalmente utilizada por los modelos Llama y Mistral.',
            '**Constitutional AI (Anthropic):** Claude se entrena adicionalmente usando un conjunto de principios ("constitución") para reducir la dependencia de la retroalimentación humana en casos extremos — Claude Opus 4.8 usa este enfoque.',
          ],
        },
        inference: {
          title: 'Cómo funciona la inferencia: muestreo y decodificación',
          content: [
            '**Durante la inferencia, el modelo genera el output token a token — calculando una distribución de probabilidad sobre todo el vocabulario y tomando muestras de ella según los parámetros de decodificación que controlas.** Los tres parámetros más importantes son [temperatura](/prompt-engineering/prompt-engineering-glossary#temperature), [top-p](/prompt-engineering/prompt-engineering-glossary#top-p) (nucleus sampling) y max tokens.',
          ],
          tableFormat: true,
          columns: ['Parámetro', 'Rango', 'Efecto', 'Ideal para'],
          rows: [
            { Parámetro: 'Temperatura', Rango: '0.0 – 2.0', Efecto: 'Aguza (bajo) o aplana (alto) la distribución de probabilidad', 'Ideal para': '0 para código/hechos; 0.7 para escritura; 1.0 para tareas creativas' },
            { Parámetro: 'Top-p (nucleus)', Rango: '0.0 – 1.0', Efecto: 'Restringe el muestreo a los tokens cuya probabilidad acumulada alcanza p', 'Ideal para': '0.9–0.95 para la mayoría de tareas; 0.5 para outputs restringidos' },
            { Parámetro: 'Top-k', Rango: '1 – tamaño del vocabulario', Efecto: 'Restringe el muestreo a los k tokens siguientes más probables', 'Ideal para': 'Menos utilizado; top-p generalmente preferido' },
            { Parámetro: 'Max tokens', Rango: '1 – límite de contexto', Efecto: 'Parada fija en la longitud del output', 'Ideal para': 'Fijar en 2× la longitud de output esperada para evitar truncado' },
            { Parámetro: 'Frequency penalty', Rango: '-2.0 – 2.0', Efecto: 'Reduce la repetición de tokens ya generados', 'Ideal para': '0.1–0.3 para documentos largos; 0 para código' },
          ],
        },
        contextWindowSection: {
          title: '[Context Windows](/prompt-engineering/prompt-engineering-glossary#context-window): Lo que el modelo puede ver',
          content: [
            '**El [context window](/prompt-engineering/prompt-engineering-glossary#context-window) es el número máximo de tokens que el modelo puede procesar en una sola llamada de inferencia — combinando el system prompt, el historial de conversación, los documentos y el user message actual.** Nada persiste entre sesiones; el modelo empieza de cero cada vez.',
            'El tamaño del context window varía significativamente según el modelo y afecta directamente a qué casos de uso son prácticos:',
          ],
          tableFormat: true,
          columns: ['Modelo', 'Context window', 'Equivalente aproximado en palabras', 'Límite práctico de documento'],
          rows: [
            { Modelo: 'GPT-5.5 (OpenAI)', 'Context window': '128.000 tokens', 'Equivalente aproximado en palabras': '~96.000 palabras', 'Límite práctico de documento': '~PDF de 200 páginas' },
            { Modelo: 'Claude Opus 4.8 (Anthropic)', 'Context window': '200.000 tokens', 'Equivalente aproximado en palabras': '~150.000 palabras', 'Límite práctico de documento': '~PDF de 300 páginas' },
            { Modelo: 'Gemini 3.1 Pro (Google DeepMind)', 'Context window': '2.000.000 tokens', 'Equivalente aproximado en palabras': '~1.500.000 palabras', 'Límite práctico de documento': '~PDF de 3.000 páginas' },
            { Modelo: 'LLaMA 3.1 70B (Meta, vía Ollama)', 'Context window': '128.000 tokens', 'Equivalente aproximado en palabras': '~96.000 palabras', 'Límite práctico de documento': '~PDF de 200 páginas' },
          ],
        },
        implications: {
          title: 'Qué significa esto para el prompt engineering',
          content: [
            '**Entender la arquitectura LLM mejora directamente la calidad del prompt — la posición del token, la temperatura, el uso del context window y la longitud del output tienen efectos medibles en la fiabilidad del output.**',
          ],
          items: [
            '**Pon las instrucciones críticas al principio.** El system prompt se procesa antes que cualquier user message. Las instrucciones enterradas en el medio de prompts largos quedan infraponderadas por el efecto "lost in the middle". Coloca restricciones y definiciones de rol en el system prompt.',
            '**La temperatura es un dial, no un interruptor binario.** Usa temperatura 0 para generación de código y tareas de hechos. Usa 0.5–0.7 para generación de contenido. Por encima de 1.0 aumenta la diversidad pero eleva significativamente el riesgo de alucinación.',
            '**El número de tokens afecta al coste y la latencia de forma lineal.** Los precios de la API son por token (input y output). Un system prompt de 10.000 tokens con 100 usuarios diarios cuesta 1.000.000 tokens/día solo en input — comprime las instrucciones sin piedad.',
            '**Los modelos no "saben" que están equivocados.** La alucinación es una propiedad estructural de la predicción de tokens — el modelo produce lo que es estadísticamente probable, no lo que está verificado. Valida siempre las afirmaciones de hechos para outputs de alto riesgo.',
            '**Context window ≠ calidad de attention.** Un context window de 200.000 tokens no significa que el modelo preste igual atención a todos los 200.000 tokens. Para documentos de más de ~50.000 tokens, considera el chunking con RAG en lugar de rellenar todo el contexto.',
          ],
        },
        misconceptions: {
          title: 'Conceptos erróneos comunes sobre los LLMs',
          content: ['**Estos conceptos erróneos sobre los LLMs causan frecuentemente prompts mal diseñados y expectativas equivocadas:**'],
          tableFormat: true,
          columns: ['Concepto erróneo', 'Qué ocurre realmente', 'Implicación para el prompt engineering'],
          rows: [
            { 'Concepto erróneo': '"El modelo lee y comprende mi documento"', 'Qué ocurre realmente': 'El modelo procesa secuencias de tokens y predice continuaciones — no hay comprensión lectora', 'Implicación para el prompt engineering': 'Especifica explícitamente qué quieres extraer; no asumas que el modelo infiere tu objetivo' },
            { 'Concepto erróneo': '"El modelo recuerda nuestra última conversación"', 'Qué ocurre realmente': 'Cada llamada a la API no tiene estado; el historial debe incluirse explícitamente en el context window', 'Implicación para el prompt engineering': 'Incluye el contexto previo relevante en el system prompt o el historial de conversación' },
            { 'Concepto erróneo': '"El modelo sabe la fecha actual"', 'Qué ocurre realmente': 'El modelo tiene un corte de entrenamiento y no sabe qué día es a menos que se le diga', 'Implicación para el prompt engineering': 'Inyecta la fecha actual en el system prompt para cualquier tarea sensible a la fecha' },
            { 'Concepto erróneo': '"Mayor temperatura = output más inteligente"', 'Qué ocurre realmente': 'La temperatura controla la aleatoriedad del muestreo, no la capacidad ni la precisión', 'Implicación para el prompt engineering': 'Usa temperatura baja (0.0–0.3) para tareas analíticas; mayor para variación creativa' },
            { 'Concepto erróneo': '"El modelo puede contar caracteres de forma fiable"', 'Qué ocurre realmente': 'Los límites de token son unidades de subpalabra; contar caracteres o palabras con precisión no es una habilidad nativa', 'Implicación para el prompt engineering': 'No confíes en el modelo para contar palabras con precisión; usa postprocesamiento o código' },
          ],
        },
        promptquorumBridge: {
          title: 'Probando los efectos de la temperatura en varios modelos en PromptQuorum',
          content: [
            '**Probado en PromptQuorum — enviar el mismo brief creativo a GPT-5.5, Claude Opus 4.8 y Gemini 3.1 Pro a temperatura 0 vs. temperatura 0.9 mostró que Claude Opus 4.8 tiene la menor variación de output entre temperaturas, mientras que Gemini 3.1 Pro muestra la mayor variación.** A temperatura 0.9, Gemini 3.1 Pro produjo outputs un 34% más largos en promedio que a temperatura 0.',
            'Usando el dispatch multi-modelo de PromptQuorum, puedes ejecutar cualquier prompt simultáneamente contra todos los modelos disponibles a una temperatura especificada y comparar outputs en paralelo — haciendo práctico calibrar los ajustes de temperatura para tu tarea específica en lugar de confiar en los valores predeterminados del modelo.',
          ],
        },
        globalContext: {
          title: 'Diferencias de arquitectura LLM por región',
          content: [
            '**La arquitectura y el rendimiento de los LLMs varían significativamente según la composición de los datos de entrenamiento, la estrategia de tokenización y las restricciones regulatorias entre regiones.** Entender estas diferencias es fundamental para los equipos que despliegan modelos globalmente.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) logra una eficiencia de tokenización superior para scripts CJK (chino, japonés, coreano)** — usando aproximadamente 0.3 tokens por carácter para el chino mandarín, frente a los 0.5 tokens por carácter de GPT-5.5. Esta reducción del 40% en el número de tokens reduce directamente los costes de la API y la latencia para aplicaciones en idiomas asiáticos.',
            '**Mistral Small y Mistral Large están explícitamente diseñados para el despliegue europeo**, con datos de entrenamiento filtrados para cumplir con el RGPD, la Ley de IA de Francia y las regulaciones de la UE sobre retención de datos y transparencia de modelos.',
            '**La arquitectura de DeepSeek refleja su composición de entrenamiento**: el 70% de los datos de pretraining están en chino e inglés, el 15% en código, el 15% en otros idiomas. Esta proporción produce un modelo sesgado hacia la fluidez en chino y la velocidad de generación de código.',
          ],
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[Fundamentals: What Is Prompt Engineering?](/es/prompt-engineering/what-is-prompt-engineering) — cómo aplicar el conocimiento de la arquitectura LLM al diseño sistemático de prompts',
            '[Fundamentals: Context Windows Explained — Why AI Forgets](/es/prompt-engineering/context-windows-explained-why-ai-forgets) — análisis profundo de los límites del context window y las estrategias de recuperación',
            '[Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting](/es/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — precios de tokens, límites de tasa y optimización de costes en GPT-5.5, Claude y Gemini',
            '[Fundamentals: AI Hallucinations Explained — Why LLMs Make Things Up](/es/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — cómo la predicción de tokens y la falta de recuperación de hechos llevan a errores de confianza',
            '[AI Limitations: What LLMs Can\'t Do](/es/prompt-engineering/ai-limitations-what-llms-cant-do) — las ocho restricciones estructurales que comparten todos los LLMs y el workaround de ingeniería para cada una',
          ],
        },
        howToStart: {
          title: 'Cómo entender cómo funcionan los LLMs',
          numberedItems: [
            '**Empieza con los tokens: entiende que los LLMs no ven letras ni palabras, ven tokens (unidades de subpalabra), normalmente 1–2 tokens por palabra en inglés.** Usa un tokenizador online (el de OpenAI, el de Anthropic) para contar tokens en texto de muestra. Observa cómo "ChatGPT" se convierte en "Chat" + "G" + "PT", y cómo eso afecta a los precios y los context windows.',
            '**Aprende las tres capas principales de la arquitectura transformer: embeddings, attention y proyección de output.** No necesitas implementarla, pero entiende conceptualmente: los embeddings convierten tokens en vectores, el attention compara todos los pares de tokens para entender relaciones, la proyección de output vuelve a mapear al vocabulario. Esto explica por qué los LLMs entienden el contexto y por qué alucinan.',
            '**Entiende por qué los LLMs alucinan: predicen "tokens probables siguientes" basándose en patrones de datos de entrenamiento, no "hechos correctos".** Cuando los datos de entrenamiento tienen información conflictiva o escasa sobre un tema, la mejor estimación del modelo a veces es incorrecta. Esta es una propiedad fundamental, no un bug corregible.',
            '**Experimenta con temperatura y top-p para ver cómo cambian el output.** Genera texto a T=0.0 (determinista), T=0.7 (variado pero coherente) y T=1.5 (aleatorio). Observa que mayor T = mayor variación. Entiende que top-p (nucleus sampling) filtra tokens poco probables, reduciendo el sinsentido.',
            '**Entiende los context windows: el modelo "ve" solo una ventana fija de tokens recientes.** La ventana de 128k tokens de GPT-5.5 es ~96.000 palabras. La información antigua se "olvida" porque cae fuera de la ventana. Esto explica por qué los LLMs a veces contradicen información anterior en una conversación larga.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Entienden los LLMs el texto como los humanos?',
              a: 'No. Los LLMs no entienden el texto en el sentido humano. Predicen el token siguiente estadísticamente más probable dado los tokens anteriores, basándose en patrones aprendidos durante el entrenamiento. No hay comprensión, intención ni conciencia — solo distribuciones de probabilidad ponderadas sobre un vocabulario de aproximadamente 50.000–100.000 tokens.',
            },
            {
              q: '¿Qué es un token en un LLM?',
              a: 'Un token es la unidad más pequeña que procesa un LLM — aproximadamente 0.75 palabras en inglés y 0.5 palabras en chino o japonés. Las palabras, las subpalabras, la puntuación y los espacios se convierten en tokens. GPT-5.5 usa BPE (Byte Pair Encoding) para dividir el texto en tokens antes de procesarlo. Un documento de 1.000 palabras se convierte en aproximadamente 1.300 tokens en inglés.',
            },
            {
              q: '¿Qué hace la temperatura en un LLM?',
              a: 'La temperatura controla con qué aleatoriedad el modelo toma muestras de su distribución de probabilidad. Temperatura 0 siempre elige el token de mayor probabilidad (determinista). Temperatura 1.0 toma muestras proporcionalmente de la distribución. Por encima de 1.5 aplana la distribución y aumenta el riesgo de alucinación. La mayoría de casos de producción funcionan mejor entre 0.1 y 0.7.',
            },
            {
              q: '¿Por qué importa la posición de la información en un prompt?',
              a: 'El transformer attention tiende a ponderar más los tokens cerca del inicio y el final del context window que los tokens en el medio — el efecto "lost in the middle" documentado por Liu et al. (2023). Para prompts de más de ~2.000 tokens, coloca la instrucción más crítica al inicio y repite las restricciones clave al final.',
            },
            {
              q: '¿Qué es RLHF y cómo afecta a los outputs del modelo?',
              a: 'Reinforcement Learning from Human Feedback (RLHF) es un paso de post-entrenamiento donde los evaluadores humanos puntúan los outputs del modelo y se entrena un modelo de recompensa en esas puntuaciones. El LLM base se ajusta para maximizar la recompensa. RLHF da forma a los rechazos, el tono, la utilidad y el comportamiento de seguridad — por eso los modelos de diferentes laboratorios se comportan diferente con el mismo prompt incluso con puntuaciones de benchmark similares.',
            },
            {
              q: '¿Cuál es la diferencia entre un context window y la memoria?',
              a: 'El context window es todo el texto que el modelo puede ver durante una sola llamada de inferencia — system prompt, historial y message actual. No es memoria persistente: cuando termina la conversación, el modelo no retiene nada. GPT-5.5: 128.000 tokens. Claude Opus 4.8: 200.000 tokens. Gemini 3.1 Pro: 2.000.000 tokens.',
            },
            {
              q: '¿Qué es el efecto "lost in the middle" y cómo evitarlo?',
              a: 'El efecto "lost in the middle", documentado por Liu et al. (2023) en Stanford, muestra que el transformer attention subestima sistemáticamente la información en el medio de contextos largos. Para evitarlo: coloca instrucciones críticas en el system prompt (inicio), mantén el contexto importante en el primer 10-15% del input, y repite la restricción más importante al final del user message. Para documentos de más de ~50.000 tokens, usa RAG en lugar de rellenar todo el contexto.',
            },
            {
              q: '¿En qué se diferencia RLHF de Constitutional AI?',
              a: 'RLHF usa evaluadores humanos para puntuar outputs, entrena un modelo de recompensa y ajusta el LLM para maximizar la recompensa. Constitutional AI (usado por Anthropic para Claude) extiende RLHF añadiendo un conjunto de principios escritos ("constitución") que guían el comportamiento sin necesitar retroalimentación humana para cada caso extremo. Esto reduce la dependencia de los evaluadores humanos mientras mantiene una alineación consistente.',
            },
            {
              q: '¿Cuál es la diferencia entre GPT-5.5, Claude y Gemini arquitecturalmente?',
              a: 'Los tres son LLMs basados en transformer pero difieren en escala y post-entrenamiento. GPT-5.5 (OpenAI): 128.000 tokens de contexto, destaca en razonamiento. Claude Opus 4.8 (Anthropic): 200.000 tokens, usa Constitutional AI para la alineación. Gemini 3.1 Pro (Google DeepMind): 2.000.000 tokens para el procesamiento de documentos ultra-largos. Estas diferencias afectan al coste, la latencia y la idoneidad para diferentes tareas.',
            },
            {
              q: '¿Cuántos tokens tiene un texto de 1000 palabras?',
              a: 'En inglés, 1.000 palabras ≈ 1.300–1.350 tokens. Aproximadamente 1 token = 0.75 palabras. Para el chino o el japonés, usa 1 token ≈ 0.5 palabras — 1.000 palabras en chino/japonés ≈ 2.000 tokens. El número de tokens afecta directamente al coste de la API y al consumo del context window.',
            },
            {
              q: '¿Cuál es la diferencia entre temperatura y top-p?',
              a: 'La temperatura aguza o aplana toda la distribución de probabilidad — temperatura 0 = determinista, temperatura 1.0 = estándar, temperatura 2.0 = muy aleatorio. Top-p (nucleus sampling) restringe el muestreo al conjunto más pequeño de tokens cuya probabilidad acumulada alcanza p — top-p 0.9 significa "muestrea de los tokens que constituyen el 90% de la masa de probabilidad". Para la mayoría de tareas, ajusta top-p (0.8–0.95) en lugar de la temperatura; la temperatura se reserva mejor para el control de creatividad.',
            },
          ],
        },
        sources: {
          title: 'Fuentes y lecturas adicionales',
          items: [
            '[Vaswani et al., 2017. "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — el artículo original del transformer que introduce el mecanismo de self-attention que subyace en todos los LLMs modernos',
            '[Liu et al., 2023. "Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172) — investigación de Stanford que documenta el sesgo de attention dependiente de la posición en LLMs de contexto largo',
            '[Ouyang et al., 2022. "Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155) — el artículo InstructGPT que introduce RLHF aplicado a GPT-3, la base para ChatGPT y los LLMs alineados modernos',
            '[OpenAI. Tokenizer Documentation](https://platform.openai.com/docs/guides/tokens) — guía interactiva para contar tokens y cómo el tokenizador codifica texto para modelos GPT',
            '[Touvron et al., 2023. "Llama 3.3: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — el artículo completo de Meta sobre la arquitectura de Llama 3.3, el pipeline de entrenamiento y la metodología de instruction-tuning',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — investigación de Anthropic sobre el uso de una "constitución" para guiar el comportamiento del modelo como alternativa al RLHF puro',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — análisis técnico profundo de BPE, WordPiece, SentencePiece y otros algoritmos de tokenización usados en LLMs modernos',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — análisis de arquitectura y rendimiento de un modelo frontier con context window de 1M tokens',
          ],
        },
      },
    },
    ar: {
      theme: 'Fundamentals',
      title: 'كيف تعمل نماذج اللغة الكبيرة فعلاً: الرموز والانتباه والاستدلال',
      intro: 'تتنبأ نماذج اللغة الكبيرة بالرمز التالي باستخدام توزيعات الاحتمالات — لا بالفهم أو الاسترجاع. تعلّم التحليل إلى رموز، والانتباه، وRLHF، ومعاملات الاستدلال.',
      publishDate: '2026-03-30',
      seoTitle: 'كيف تعمل نماذج ⁨LLMs⁩: الرموز والانتباه والاستدلال',
      metaDescription: 'نماذج ⁨LLMs⁩ تتنبأ بالرموز عبر توزيعات الاحتمال لا بالفهم. تعلّم التحليل إلى رموز، وانتباه المحوّل، و⁨RLHF⁩، ومعاملات الاستدلال مع معايير الأداء.',
      dateModified: '2026-04-12',
      readTime: '١٢ دقيقة للقراءة',
      educationalLevel: 'مبتدئ',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/how-llms-actually-work',
        inLanguage: 'ar',
        headline: 'كيف تعمل نماذج اللغة الكبيرة فعلاً: الرموز والانتباه والاستدلال',
        description: 'تتنبأ نماذج اللغة الكبيرة بالرمز التالي عبر توزيعات الاحتمالات — لا بالفهم. تعلّم التحليل إلى رموز، وانتباه المحوّل، وRLHF، ومعاملات الاستدلال.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['نماذج اللغة الكبيرة', 'بنية LLM', 'محوّل', 'تحليل إلى رموز', 'آلية الانتباه', 'RLHF', 'درجة الحرارة', 'نافذة السياق', 'هندسة التلقيح', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'تحليل إلى رموز' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: 'يغطي العرض التقديمي: كيف يحوّل التحليل إلى رموز النصَّ إلى معرّفات، وكيف يُنشئ انتباه المحوّل تأثير "الضياع في المنتصف"، والفروق بين RLHF والتدريب المسبق، وجدول مرجعي لمعاملات الاستدلال (درجة الحرارة 0.0–2.0، top-p، الحد الأقصى للرموز). نزّل ملف PDF كبطاقة مرجعية لبنية LLM.',
      sections: {
        definition: {
          title: 'ما هو نموذج LLM فعلاً',
          content: [
            '**نموذج اللغة الكبير (LLM) هو شبكة عصبية قائمة على المحوّل مُدرَّبة للتنبؤ بالرمز الأكثر احتمالاً بناءً على تسلسل من الرموز المُدخَلة — وليس قاعدة بيانات أو محرك بحث أو نظام استدلال.** يتعلم النموذج العلاقات الإحصائية بين الرموز بمعالجة مئات المليارات من الكلمات من صفحات الويب والكتب والأكواد البرمجية وغيرها خلال التدريب.',
            'عندما تكتب تلقيحاً، يحوّل النموذج نصّك إلى تسلسل من معرّفات الرموز الرقمية، ويمرّرها عبر عشرات طبقات المحوّل، ثم يُنتج توزيعاً احتمالياً على كامل مفرداته (عادةً 50,000–100,000 رمز). يأخذ عيّنة من رمز ذلك التوزيع، يضيفه إلى التسلسل، ويكرر حتى يُولّد رمز الإيقاف أو يصل الحد الأقصى للمخرجات.',
            'تُفسّر هذه البنية عدة سلوكيات تُحيّر المستخدمين: لماذا تُهلوس نماذج LLM حقائق معقولة لكنها خاطئة (تتنبأ بنص محتمل، لا بحقيقة مُتحقَّق منها)، ولماذا قد تُخفق في الحساب (أنماط رموز لا حسابات حقيقية)، ولماذا تُغيّر صياغة التلقيح المخرجَ (تسلسلات رموز مختلفة تُطلق توزيعات احتمالية مختلفة).',
          ],
          tableFormat: true,
          columns: ['الخاصية', 'نموذج LLM', 'البرمجيات التقليدية'],
          rows: [
            { 'الخاصية': 'آلية العمل', 'نموذج LLM': 'يتنبأ بالرمز التالي عبر توزيعات احتمالية متعلَّمة', 'البرمجيات التقليدية': 'تُنفّذ تعليمات حتمية' },
            { 'الخاصية': 'حتمية المخرجات', 'نموذج LLM': 'احتمالية — نفس المدخل قد يُنتج مخرجات مختلفة', 'البرمجيات التقليدية': 'حتمية — نفس المدخل يُنتج دائماً نفس المخرج' },
            { 'الخاصية': 'مصدر المعرفة', 'نموذج LLM': 'أنماط مُرمَّزة في أوزان النموذج أثناء التدريب', 'البرمجيات التقليدية': 'تقرأ من قواعد بيانات أو ملفات في وقت التشغيل' },
            { 'الخاصية': 'نوع الخطأ', 'نموذج LLM': 'واثق لكن مخطئ (هلوسة)', 'البرمجيات التقليدية': 'يتوقف أو يُعيد رمز خطأ' },
            { 'الخاصية': 'آلية التحديث', 'نموذج LLM': 'يتطلب إعادة التدريب أو الضبط الدقيق', 'البرمجيات التقليدية': 'تغيير الكود أو تحديث قاعدة البيانات' },
          ],
        },
        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            '**تتنبأ نماذج LLM بالرموز لا بالإجابات.** تُولّد تسلسلات نصية محتملة إحصائياً — لا حقائق مُسترجَعة أو استنتاجات منطقية أو معلومات مُتحقَّق منها.',
            '**1 رمز ≈ 0.75 كلمة بالإنجليزية.** مستند من 1,000 كلمة يستخدم ~1,300 رمز. الصينية واليابانية أكثف بنسبة ~50%.',
            '**[درجة الحرارة](/prompt-engineering/prompt-engineering-glossary#temperature) تتحكم في الإبداع مقابل الحتمية.** درجة الحرارة 0 = حتمية. 1.0 = أخذ عيّنات تناسبية. فوق 1.5 = خطر هلوسة مرتفع.',
            '**[نوافذ السياق](/prompt-engineering/prompt-engineering-glossary#context-window) ليست ذاكرة.** GPT-5.5: 128k رمز. Claude Opus 4.8: 200k رمز. Gemini 3.1 Pro: 2M رمز. لا شيء يستمر بين الجلسات.',
            '**الموضع مهم.** يُرجّح [الانتباه](/prompt-engineering/prompt-engineering-glossary#attention) في المحوّل بداية ونهاية السياق أكثر. ضع التعليمات الحاسمة في البداية والنهاية — لا في الوسط.',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) يُشكّل السلوك لا القدرة.** الرفض والنبرة والفائدة تأتي من الضبط الدقيق بعد التدريب — لا من البنية الأساسية.',
          ],
        },
        tokenization: {
          title: '[التحليل إلى رموز](/prompt-engineering/prompt-engineering-glossary#tokenization): كيف يتحوّل النص إلى أرقام',
          content: [
            '**قبل أن يتمكن نموذج LLM من معالجة أي نص، يجب تحويله إلى تسلسل من معرّفات الرموز الصحيحة — وهذه العملية تُسمى [التحليل إلى رموز](/prompt-engineering/prompt-engineering-glossary#tokenization).** يستخدم GPT-5.5 ترميز الأزواج الثنائية (BPE) الذي يُقسّم النص إلى وحدات فرعية للكلمات تظهر بكثرة. يستخدم Claude Opus 4.8 وGemini 3.1 Pro مخططات تحليل إلى رموز فرعية مشابهة.',
            'يعتمد التحليل إلى رموز على اللغة. يبلغ متوسط النص الإنجليزي حوالي رمز واحد لكل 0.75 كلمة. أما الصينية واليابانية فمتوسطها رمز واحد لكل 0.5 كلمة — مما يعني أن المستند ذاته يكلّف ضعف عدد الرموز بالصينية مقارنةً بالإنجليزية، مما يؤثر مباشرةً على تكلفة الواجهة البرمجية واستخدام نافذة السياق.',
          ],
          tableFormat: true,
          columns: ['نص المدخل', 'الرموز', 'عدد الرموز'],
          rows: [
            { 'نص المدخل': '"Hello, world!"', 'الرموز': '"Hello"، ","، " world"، "!"', 'عدد الرموز': '4' },
            { 'نص المدخل': '"Tokenization"', 'الرموز': '"Token"، "ization"', 'عدد الرموز': '2' },
            { 'نص المدخل': '"GPT-5.5"', 'الرموز': '"G"، "PT"، "-"، "4"، "o"', 'عدد الرموز': '5' },
            { 'نص المدخل': '"你好世界" (مرحبا بالعالم، صينية)', 'الرموز': '"你好"، "世界"', 'عدد الرموز': '2–4 حسب النموذج' },
          ],
        },
        attention: {
          title: 'كيف يعمل انتباه المحوّل',
          content: [
            '**تستخدم بنية المحوّل آلية تُسمى الانتباه الذاتي لتحديد مقدار "انتباه" كل رمز لجميع الرموز الأخرى في التسلسل عند حساب تمثيله.** لكل رمز، يحسب النموذج ثلاثة متجهات — الاستعلام (Q) والمفتاح (K) والقيمة (V) — ويحسب نتائج الانتباه كضرب نقطي بين Q وK، مُقيَّساً ومُطبَّعاً بـsoftmax.',
            'يُشغّل الانتباه متعدد الرؤوس هذه العملية بالتوازي عبر رؤوس متعددة (يستخدم GPT-5.5 ما يصل إلى 96 رأس انتباه في طبقاته الأكبر)، يتعلم كل منها أنماط علاقات مختلفة. تتخصص بعض الرؤوس في العلاقات النحوية (الفاعل-الفعل)، وأخرى في التشابه الدلالي، وأخرى في الإحالة المشتركة (ربط الضمائر بالأسماء).',
            'إحدى التداعيات العملية الرئيسية: تأثير "الضياع في المنتصف". تُظهر أبحاث Liu et al. (2023) في ستانفورد أن نماذج LLM تُقلّل منهجياً من المعلومات الموجودة في منتصف السياقات الطويلة. للتلقيحات التي تتجاوز ~2,000 رمز، ضع التعليمات الحاسمة في التلقيح النظامي (البداية) وكرّر القيد الأهم في نهاية رسالة المستخدم.',
          ],
        },
        training: {
          title: 'كيف تُدرَّب نماذج LLM: التدريب المسبق وRLHF',
          content: [
            '**يمر تدريب نماذج LLM بمرحلتين متمايزتين: التدريب المسبق (تعلّم أنماط اللغة من النص الخام) ومواءمة ما بعد التدريب (تشكيل السلوك بالتغذية الراجعة البشرية).** تُنتج هذه المراحل قدرات مختلفة وتُفسّر لماذا تتصرف نماذج مختبرات مختلفة بشكل مختلف حتى مع درجات معيارية متشابهة.',
            'خلال التدريب المسبق، يعالج النموذج مجموعة بيانات ضخمة — دُرِّب Llama 3.3 على حوالي 15 تريليون رمز؛ GPT-4 على ما يُقدَّر بـ1–2 تريليون رمز. الهدف بسيط: التنبؤ بالرمز التالي. لا تُخزَّن معرفة صريحة؛ جميع المعلومات مُرمَّزة في أوزان النموذج كأنماط إحصائية.',
            'تقوم مواءمة ما بعد التدريب — عادةً التعلم بالتعزيز من التغذية الراجعة البشرية (RLHF) أو متغيراته (RLAIF، DPO) — بتشكيل النموذج كمساعد مفيد. يُقيّم المُقيّمون البشريون المخرجات من حيث الفائدة والأمان والصدق. يُدرَّب نموذج مكافأة على تلك التقييمات ويُضبَّط نموذج LLM الأساسي لتعظيم المكافأة. يُحدد RLHF سلوك الرفض والنبرة وضمانات السلامة — لا البنية الأساسية.',
          ],
          items: [
            '**التدريب المسبق:** التنبؤ غير الخاضع للإشراف بالرمز التالي على بيانات نطاق الويب. يُرمّز أنماط اللغة ومعرفة العالم واختصارات الاستدلال في أوزان النموذج (~70B–405B معامل للنماذج الحدية).',
            '**الضبط الدقيق الخاضع للإشراف (SFT):** يُدرَّب النموذج على أزواج تعليمة-استجابة منتقاة للتصرف كمساعد بدلاً من مُتنبئ نص خالص.',
            '**RLHF / DPO:** تُوجّه التفضيلات البشرية النموذج نحو مخرجات مفيدة وغير ضارة وصادقة. DPO (التحسين المباشر للتفضيل) بديل أكثر كفاءة حسابياً يستخدمه Llama وMistral.',
            '**الذكاء الاصطناعي الدستوري (Anthropic):** يُدرَّب Claude إضافياً باستخدام مجموعة من المبادئ ("الدستور") لتقليل الاعتماد على التغذية الراجعة البشرية في الحالات القصوى — يستخدم Claude Opus 4.8 هذا النهج.',
          ],
        },
        inference: {
          title: 'كيف يعمل الاستدلال: أخذ العيّنات وفك الترميز',
          content: [
            '**خلال الاستدلال، يُولّد النموذج المخرج رمزاً تلو الآخر — محسوباً توزيعاً احتمالياً على كامل المفردات وآخذاً عيّنة منه وفق معاملات فك الترميز التي تتحكم فيها.** أهم ثلاثة معاملات هي [درجة الحرارة](/prompt-engineering/prompt-engineering-glossary#temperature) و[top-p](/prompt-engineering/prompt-engineering-glossary#top-p) (أخذ عيّنات النواة) والحد الأقصى للرموز.',
          ],
          tableFormat: true,
          columns: ['المعامل', 'النطاق', 'التأثير', 'مثالي لـ'],
          rows: [
            { 'المعامل': 'درجة الحرارة', 'النطاق': '0.0 – 2.0', 'التأثير': 'تُحدد (منخفضة) أو تُسطّح (مرتفعة) توزيع الاحتمالات', 'مثالي لـ': '0 للكود/الحقائق؛ 0.7 للكتابة؛ 1.0 للمهام الإبداعية' },
            { 'المعامل': 'Top-p (النواة)', 'النطاق': '0.0 – 1.0', 'التأثير': 'يقصر أخذ العيّنات على الرموز التي يصل احتمالها التراكمي إلى p', 'مثالي لـ': '0.9–0.95 لمعظم المهام؛ 0.5 للمخرجات المقيّدة' },
            { 'المعامل': 'Top-k', 'النطاق': '1 – حجم المفردات', 'التأثير': 'يقصر أخذ العيّنات على أكثر k رمزاً احتمالاً للخطوة التالية', 'مثالي لـ': 'أقل استخداماً؛ top-p أفضل عادةً' },
            { 'المعامل': 'الحد الأقصى للرموز', 'النطاق': '1 – حد السياق', 'التأثير': 'إيقاف ثابت عند طول المخرج', 'مثالي لـ': 'اضبطه عند 2× الطول المتوقع للمخرج لتجنب القطع' },
            { 'المعامل': 'عقوبة التكرار', 'النطاق': '-2.0 – 2.0', 'التأثير': 'يُقلّل تكرار الرموز المُولَّدة مسبقاً', 'مثالي لـ': '0.1–0.3 للمستندات الطويلة؛ 0 للكود' },
          ],
        },
        contextWindowSection: {
          title: '[نوافذ السياق](/prompt-engineering/prompt-engineering-glossary#context-window): ما يراه النموذج',
          content: [
            '**[نافذة السياق](/prompt-engineering/prompt-engineering-glossary#context-window) هي الحد الأقصى لعدد الرموز التي يستطيع النموذج معالجتها في استدعاء استدلال واحد — جامعةً التلقيح النظامي وتاريخ المحادثة والمستندات والرسالة الحالية للمستخدم.** لا شيء يستمر بين الجلسات؛ يبدأ النموذج من الصفر في كل مرة.',
            'يتباين حجم نافذة السياق تبايناً ملحوظاً بين النماذج ويؤثر مباشرةً على حالات الاستخدام العملية:',
          ],
          tableFormat: true,
          columns: ['النموذج', 'نافذة السياق', 'ما يعادله تقريباً بالكلمات', 'الحد العملي للمستند'],
          rows: [
            { 'النموذج': 'GPT-5.5 (OpenAI)', 'نافذة السياق': '128,000 رمز', 'ما يعادله تقريباً بالكلمات': '~96,000 كلمة', 'الحد العملي للمستند': '~PDF من 200 صفحة' },
            { 'النموذج': 'Claude Opus 4.8 (Anthropic)', 'نافذة السياق': '200,000 رمز', 'ما يعادله تقريباً بالكلمات': '~150,000 كلمة', 'الحد العملي للمستند': '~PDF من 300 صفحة' },
            { 'النموذج': 'Gemini 3.1 Pro (Google DeepMind)', 'نافذة السياق': '2,000,000 رمز', 'ما يعادله تقريباً بالكلمات': '~1,500,000 كلمة', 'الحد العملي للمستند': '~PDF من 3,000 صفحة' },
            { 'النموذج': 'LLaMA 3.1 70B (Meta، عبر Ollama)', 'نافذة السياق': '128,000 رمز', 'ما يعادله تقريباً بالكلمات': '~96,000 كلمة', 'الحد العملي للمستند': '~PDF من 200 صفحة' },
          ],
        },
        implications: {
          title: 'ما يعنيه ذلك لهندسة التلقيح',
          content: [
            '**إن فهم بنية LLM يُحسّن مباشرةً جودة التلقيح — فموضع الرمز ودرجة الحرارة واستخدام نافذة السياق وطول المخرج لها تأثيرات قابلة للقياس على موثوقية المخرج.**',
          ],
          items: [
            '**ضع التعليمات الحاسمة في البداية.** يُعالَج التلقيح النظامي قبل أي رسالة مستخدم. التعليمات المدفونة في منتصف تلقيحات طويلة تأخذ وزناً أقل بسبب تأثير "الضياع في المنتصف". ضع القيود وتعريفات الدور في التلقيح النظامي.',
            '**درجة الحرارة مقياس تدريجي لا مفتاح ثنائي.** استخدم درجة الحرارة 0 لتوليد الكود والمهام الواقعية. استخدم 0.5–0.7 لتوليد المحتوى. فوق 1.0 يزيد التنوع لكن يرفع مخاطر الهلوسة بشكل ملحوظ.',
            '**عدد الرموز يؤثر على التكلفة والكمون خطياً.** أسعار الواجهة البرمجية لكل رمز (مدخل ومخرج). تلقيح نظامي من 10,000 رمز مع 100 مستخدم يومياً يُكلّف 1,000,000 رمز/يوم من المدخلات فقط — اضغط التعليمات بلا رحمة.',
            '**النماذج "لا تعرف" أنها مخطئة.** الهلوسة خاصية بنيوية للتنبؤ بالرموز — النموذج يُنتج ما هو محتمل إحصائياً لا ما هو مُتحقَّق منه. دائماً تحقق من ادعاءات الحقائق في المخرجات عالية المخاطر.',
            '**نافذة السياق ≠ جودة الانتباه.** نافذة سياق من 200,000 رمز لا تعني انتباه النموذج المتساوي لجميع الرموز. للمستندات التي تتجاوز ~50,000 رمز، فكّر في التقطيع مع RAG بدلاً من ملء السياق بالكامل.',
          ],
        },
        misconceptions: {
          title: 'المفاهيم الخاطئة الشائعة حول نماذج LLM',
          content: ['**هذه المفاهيم الخاطئة حول نماذج LLM غالباً ما تُؤدي إلى تلقيحات سيئة التصميم وتوقعات خاطئة:**'],
          tableFormat: true,
          columns: ['المفهوم الخاطئ', 'ما يحدث فعلاً', 'الانعكاس على هندسة التلقيح'],
          rows: [
            { 'المفهوم الخاطئ': '"النموذج يقرأ ويفهم مستندي"', 'ما يحدث فعلاً': 'النموذج يعالج تسلسلات رموز ويتنبأ بالاستمرارات — لا توجد قراءة فهم', 'الانعكاس على هندسة التلقيح': 'حدّد صراحةً ما تريد استخلاصه؛ لا تفترض أن النموذج يستنتج هدفك' },
            { 'المفهوم الخاطئ': '"النموذج يتذكر محادثتنا الأخيرة"', 'ما يحدث فعلاً': 'كل استدعاء API لا حالة له؛ يجب تضمين التاريخ صراحةً في نافذة السياق', 'الانعكاس على هندسة التلقيح': 'أدرج السياق السابق ذا الصلة في التلقيح النظامي أو تاريخ المحادثة' },
            { 'المفهوم الخاطئ': '"النموذج يعرف التاريخ الحالي"', 'ما يحدث فعلاً': 'للنموذج تاريخ قطع تدريب ولا يعرف اليوم ما لم يُخبَر', 'الانعكاس على هندسة التلقيح': 'أدرج التاريخ الحالي في التلقيح النظامي لأي مهمة حساسة للوقت' },
            { 'المفهوم الخاطئ': '"درجة حرارة أعلى = مخرج أذكى"', 'ما يحدث فعلاً': 'درجة الحرارة تتحكم في عشوائية أخذ العيّنات لا في القدرة أو الدقة', 'الانعكاس على هندسة التلقيح': 'استخدم درجة حرارة منخفضة (0.0–0.3) للمهام التحليلية؛ أعلى للتنوع الإبداعي' },
            { 'المفهوم الخاطئ': '"يستطيع النموذج عد الأحرف بموثوقية"', 'ما يحدث فعلاً': 'حدود الرموز هي وحدات فرعية للكلمات؛ عد الأحرف أو الكلمات بدقة ليست مهارة أصيلة', 'الانعكاس على هندسة التلقيح': 'لا تعتمد على النموذج لعد الكلمات بدقة؛ استخدم المعالجة اللاحقة أو الكود' },
          ],
        },
        promptquorumBridge: {
          title: 'اختبار تأثيرات درجة الحرارة عبر نماذج متعددة على PromptQuorum',
          content: [
            '**اختُبر على PromptQuorum — إرسال نفس الموجز الإبداعي إلى GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro عند درجة الحرارة 0 مقابل 0.9 أظهر أن Claude Opus 4.8 يمتلك أدنى تباين في المخرجات بين درجات الحرارة، بينما يُظهر Gemini 3.1 Pro أعلى تباين.** عند درجة الحرارة 0.9، أنتج Gemini 3.1 Pro مخرجات أطول بنسبة 34% في المتوسط مقارنةً بدرجة الحرارة 0.',
            'باستخدام إرسال PromptQuorum متعدد النماذج، يمكنك تشغيل أي تلقيح في آنٍ واحد ضد جميع النماذج المتاحة بدرجة حرارة محددة ومقارنة المخرجات بالتوازي — مما يجعل معايرة إعدادات درجة الحرارة لمهمتك المحددة عملياً بدلاً من الاعتماد على الإعدادات الافتراضية للنموذج.',
          ],
        },
        globalContext: {
          title: 'الاختلافات المعمارية لنماذج LLM حسب المنطقة',
          content: [
            '**تتباين بنية نماذج LLM وأداؤها تبايناً ملحوظاً بحسب تكوين بيانات التدريب واستراتيجية التحليل إلى رموز والقيود التنظيمية عبر المناطق.** إن فهم هذه الاختلافات جوهري للفرق التي تنشر نماذج عالمياً.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) يحقق كفاءة تحليل رموز متفوقة للنصوص CJK (الصينية، اليابانية، الكورية)** — مستخدماً حوالي 0.3 رمز لكل حرف للصينية الماندرينية، مقابل 0.5 رمز لكل حرف لـGPT-5.5. هذا التخفيض بنسبة 40% في عدد الرموز يُقلّل مباشرةً من تكاليف الواجهة البرمجية والكمون للتطبيقات باللغات الآسيوية.',
            '**صُمّم Mistral Small وMistral Large صراحةً للنشر الأوروبي**، مع بيانات تدريب مُصفَّاة للامتثال للائحة الأوروبية لحماية البيانات (GDPR) وقانون الذكاء الاصطناعي الفرنسي ولوائح الاتحاد الأوروبي بشأن الاحتفاظ بالبيانات وشفافية النماذج.',
            '**تعكس بنية DeepSeek تكوين تدريبه**: 70% من بيانات التدريب المسبق بالصينية والإنجليزية، و15% كود، و15% لغات أخرى. تُنتج هذه النسبة نموذجاً منحازاً نحو الطلاقة بالصينية وسرعة توليد الكود.',
          ],
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[الأساسيات: ما هي هندسة التلقيح؟](/ar/prompt-engineering/what-is-prompt-engineering) — كيفية تطبيق معرفة بنية LLM في التصميم المنهجي للتلقيحات',
            '[الأساسيات: نوافذ السياق — لماذا تنسى الذكاء الاصطناعي](/ar/prompt-engineering/context-windows-explained-why-ai-forgets) — تحليل معمّق لحدود نافذة السياق واستراتيجيات الاسترداد',
            '[الأساسيات: الرموز والتكاليف والحدود: اقتصاديات تلقيح الذكاء الاصطناعي](/ar/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — أسعار الرموز وحدود المعدل وتحسين التكاليف في GPT-5.5 وClaude وGemini',
            '[الأساسيات: هلوسة الذكاء الاصطناعي — لماذا تخترع نماذج LLM الأشياء](/ar/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — كيف يُؤدي التنبؤ بالرموز وعدم استرجاع الحقائق إلى أخطاء الثقة',
            '[قيود الذكاء الاصطناعي: ما لا تستطيع نماذج LLM فعله](/ar/prompt-engineering/ai-limitations-what-llms-cant-do) — القيود البنيوية الثمانية المشتركة بين جميع نماذج LLM والحل الهندسي لكل منها',
          ],
        },
        howToStart: {
          title: 'كيف تفهم آلية عمل نماذج LLM',
          numberedItems: [
            '**ابدأ بالرموز: افهم أن نماذج LLM لا ترى حروفاً أو كلمات، بل ترى رموزاً (وحدات فرعية للكلمات)، عادةً 1–2 رمز لكل كلمة إنجليزية.** استخدم أداة تحليل رموز عبر الإنترنت (OpenAI أو Anthropic) لعد الرموز في نص نموذجي. لاحظ كيف تتحول "ChatGPT" إلى "Chat" + "G" + "PT"، وكيف يؤثر ذلك على الأسعار ونوافذ السياق.',
            '**تعلّم الطبقات الثلاث الرئيسية لبنية المحوّل: التضمينات والانتباه وإسقاط المخرج.** لا تحتاج إلى تطبيقها، لكن افهم مفاهيمياً: التضمينات تحوّل الرموز إلى متجهات، والانتباه يقارن جميع أزواج الرموز لفهم العلاقات، وإسقاط المخرج يُعيد التعيين إلى المفردات. يُفسّر هذا لماذا تفهم نماذج LLM السياق ولماذا تُهلوس.',
            '**افهم لماذا تُهلوس نماذج LLM: إنها تتنبأ بـ"الرموز التالية المحتملة" بناءً على أنماط بيانات التدريب لا "الحقائق الصحيحة".** عندما تحتوي بيانات التدريب على معلومات متضاربة أو شحيحة حول موضوع ما، قد يكون أفضل تخمين النموذج خاطئاً في بعض الأحيان. هذه خاصية أصيلة لا ثغرة قابلة للإصلاح.',
            '**جرّب درجة الحرارة وtop-p لترى كيف تُغيّر المخرج.** ولّد نصاً عند T=0.0 (حتمي) وT=0.7 (متنوع لكن متماسك) وT=1.5 (عشوائي). لاحظ أن T أعلى = تنوع أكبر. افهم أن top-p (أخذ عيّنات النواة) يُصفّي الرموز قليلة الاحتمال مما يُقلّل الهراء.',
            '**افهم نوافذ السياق: النموذج "يرى" فقط نافذة ثابتة من الرموز الأخيرة.** نافذة 128k رمز لـGPT-5.5 هي ~96,000 كلمة. المعلومات القديمة "تُنسى" لأنها تسقط خارج النافذة. يُفسّر هذا لماذا تتناقض نماذج LLM أحياناً مع معلومات سابقة في محادثة طويلة.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'هل تفهم نماذج LLM النص كالبشر؟',
              a: 'لا. لا تفهم نماذج LLM النص بالمعنى البشري. إنها تتنبأ بالرمز التالي الأكثر احتمالاً إحصائياً بناءً على الرموز السابقة، استناداً إلى الأنماط المتعلَّمة أثناء التدريب. لا يوجد فهم أو نية أو وعي — فقط توزيعات احتمالية موزونة على مفردات مؤلفة من حوالي 50,000–100,000 رمز.',
            },
            {
              q: 'ما هو الرمز في نموذج LLM؟',
              a: 'الرمز هو أصغر وحدة تعالجها نماذج LLM — حوالي 0.75 كلمة بالإنجليزية و0.5 كلمة بالصينية أو اليابانية. تُحوَّل الكلمات والكلمات الفرعية وعلامات الترقيم والمسافات إلى رموز. يستخدم GPT-5.5 BPE (ترميز الأزواج الثنائية) لتقسيم النص إلى رموز قبل معالجته. مستند من 1,000 كلمة يُصبح حوالي 1,300 رمز بالإنجليزية.',
            },
            {
              q: 'ما الذي تفعله درجة الحرارة في نموذج LLM؟',
              a: 'درجة الحرارة تتحكم في مدى عشوائية أخذ النموذج عيّنات من توزيع احتمالاته. درجة الحرارة 0 دائماً تختار الرمز الأعلى احتمالاً (حتمي). درجة الحرارة 1.0 تأخذ عيّنات تناسبياً من التوزيع. فوق 1.5 تُسطّح التوزيع وتزيد مخاطر الهلوسة. معظم حالات الإنتاج تعمل بشكل أفضل بين 0.1 و0.7.',
            },
            {
              q: 'لماذا يهم موضع المعلومات في التلقيح؟',
              a: 'يميل انتباه المحوّل إلى إعطاء وزن أكبر للرموز قرب بداية ونهاية نافذة السياق مقارنةً بالرموز في المنتصف — تأثير "الضياع في المنتصف" الموثّق من Liu et al. (2023). للتلقيحات التي تتجاوز ~2,000 رمز، ضع التعليمة الأهم في البداية وكرّر القيود الرئيسية في النهاية.',
            },
            {
              q: 'ما هو RLHF وكيف يؤثر على مخرجات النموذج؟',
              a: 'التعلم بالتعزيز من التغذية الراجعة البشرية (RLHF) هو خطوة ما بعد التدريب حيث يُقيّم مُقيّمون بشريون مخرجات النموذج ويُدرَّب نموذج مكافأة على تلك التقييمات. يُضبَّط نموذج LLM الأساسي لتعظيم المكافأة. يُشكّل RLHF الرفض والنبرة والفائدة وسلوك السلامة — ولهذا تتصرف نماذج مختبرات مختلفة بشكل مختلف مع نفس التلقيح حتى مع درجات معيارية متشابهة.',
            },
            {
              q: 'ما الفرق بين نافذة السياق والذاكرة؟',
              a: 'نافذة السياق هي كل النص الذي يستطيع النموذج رؤيته أثناء استدعاء استدلال واحد — التلقيح النظامي والتاريخ والرسالة الحالية. إنها ليست ذاكرة مستمرة: عند انتهاء المحادثة، لا يحتفظ النموذج بشيء. GPT-5.5: 128,000 رمز. Claude Opus 4.8: 200,000 رمز. Gemini 3.1 Pro: 2,000,000 رمز.',
            },
            {
              q: 'ما هو تأثير "الضياع في المنتصف" وكيف تتجنبه؟',
              a: 'تأثير "الضياع في المنتصف"، الموثّق من Liu et al. (2023) في ستانفورد، يُظهر أن انتباه المحوّل يُقلّل منهجياً من المعلومات في منتصف السياقات الطويلة. لتجنبه: ضع التعليمات الحاسمة في التلقيح النظامي (البداية)، احتفظ بالسياق المهم في أول 10–15% من المدخل، وكرّر القيد الأهم في نهاية رسالة المستخدم. للمستندات التي تتجاوز ~50,000 رمز، استخدم RAG بدلاً من ملء السياق بالكامل.',
            },
            {
              q: 'ما الفرق بين RLHF والذكاء الاصطناعي الدستوري؟',
              a: 'يستخدم RLHF مُقيّمين بشريين لتقييم المخرجات، ويُدرّب نموذج مكافأة، ويضبط نموذج LLM لتعظيم المكافأة. الذكاء الاصطناعي الدستوري (المستخدم من Anthropic لـClaude) يمتد RLHF بإضافة مجموعة من المبادئ المكتوبة ("الدستور") التي توجّه السلوك دون الحاجة إلى تغذية راجعة بشرية لكل حالة قصوى. يُقلّل هذا من الاعتماد على المُقيّمين البشريين مع الحفاظ على مواءمة متسقة.',
            },
            {
              q: 'ما الفرق المعماري بين GPT-5.5 وClaude وGemini؟',
              a: 'الثلاثة نماذج LLM قائمة على المحوّل لكنها تختلف في الحجم وما بعد التدريب. GPT-5.5 (OpenAI): 128,000 رمز سياق، يتميز في الاستدلال. Claude Opus 4.8 (Anthropic): 200,000 رمز، يستخدم الذكاء الاصطناعي الدستوري للمواءمة. Gemini 3.1 Pro (Google DeepMind): 2,000,000 رمز لمعالجة المستندات الطويلة جداً. هذه الاختلافات تؤثر على التكلفة والكمون والملاءمة لمهام مختلفة.',
            },
            {
              q: 'كم عدد رموز نص من 1000 كلمة؟',
              a: 'بالإنجليزية، 1,000 كلمة ≈ 1,300–1,350 رمز. تقريباً 1 رمز = 0.75 كلمة. للصينية أو اليابانية، استخدم 1 رمز ≈ 0.5 كلمة — 1,000 كلمة صينية/يابانية ≈ 2,000 رمز. يؤثر عدد الرموز مباشرةً على تكلفة الواجهة البرمجية واستهلاك نافذة السياق.',
            },
            {
              q: 'ما الفرق بين درجة الحرارة وtop-p؟',
              a: 'درجة الحرارة تُحدّد أو تُسطّح توزيع الاحتمالات بأكمله — درجة الحرارة 0 = حتمي، 1.0 = قياسي، 2.0 = عشوائي جداً. Top-p (أخذ عيّنات النواة) يقصر أخذ العيّنات على أصغر مجموعة من الرموز التي يبلغ احتمالها التراكمي p — top-p 0.9 يعني "أخذ عيّنات من الرموز التي تُشكّل 90% من كتلة الاحتمال". لمعظم المهام، اضبط top-p (0.8–0.95) بدلاً من درجة الحرارة؛ درجة الحرارة أفضل تحفّظ للتحكم في الإبداع.',
            },
          ],
        },
        sources: {
          title: 'المصادر والقراءات الإضافية',
          items: [
            '[Vaswani et al., 2017. "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — الورقة الأصلية للمحوّل التي تُقدّم آلية الانتباه الذاتي الكامنة في جميع نماذج LLM الحديثة',
            '[Liu et al., 2023. "Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172) — بحث ستانفورد الذي يوثّق تحيّز الانتباه المعتمد على الموضع في نماذج LLM ذات السياق الطويل',
            '[Ouyang et al., 2022. "Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155) — ورقة InstructGPT التي تُقدّم RLHF المطبّق على GPT-3، الأساس لـChatGPT ونماذج LLM المُوافقة الحديثة',
            '[OpenAI. Tokenizer Documentation](https://platform.openai.com/docs/guides/tokens) — دليل تفاعلي لعد الرموز وكيفية ترميز المُرمِّز للنص لنماذج GPT',
            '[Touvron et al., 2023. "Llama 3.3: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — الورقة الكاملة من Meta حول بنية Llama 3.3 وخط تدريبه ومنهجية ضبط التعليمات',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — بحث Anthropic حول استخدام "دستور" لتوجيه سلوك النموذج كبديل لـRLHF الخالص',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — تحليل تقني معمّق لـBPE وWordPiece وSentencePiece وخوارزميات التحليل إلى رموز الأخرى المستخدمة في نماذج LLM الحديثة',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — تحليل بنية وأداء نموذج حدّي بنافذة سياق 1M رمز',
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
        url: 'https://www.promptquorum.com/fr/prompt-engineering/how-llms-actually-work',
        inLanguage: 'fr',
        headline: 'Comment fonctionnent vraiment les LLMs : tokens, attention et inférence',
        description: 'Les grands modèles de langage prédisent le prochain token par distribution de probabilités — sans comprendre ni récupérer. Apprenez la tokenisation, l\'attention, le RLHF et les paramètres d\'inférence.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['grands modèles de langage', 'architecture LLM', 'transformer', 'tokenisation', 'mécanisme d\'attention', 'RLHF', 'température', 'fenêtre de contexte', 'ingénierie de prompt', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
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
            '**Les [fenêtres de contexte](/prompt-engineering/prompt-engineering-glossary#context-window) ne sont pas de la mémoire.** GPT-5.5 : 128k tokens. Claude Opus 4.8 : 200k tokens. Gemini 3.1 Pro : 2 M de tokens. Rien ne persiste entre les sessions.',
            '**La position est déterminante.** Le mécanisme d\'[attention](/prompt-engineering/prompt-engineering-glossary#attention) transformer pondère davantage le début et la fin du contexte. Placez les instructions critiques en premier et en dernier — pas au milieu.',
            '**Le [RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) façonne le comportement, pas les capacités.** Les refus, le ton et la serviabilité proviennent du fine-tuning post-entraînement — pas de l\'architecture de base.',
          ],
        },
        tokenization: {
          title: '[Tokenisation](/prompt-engineering/prompt-engineering-glossary#tokenization) : comment le texte devient des nombres',
          content: [
            '**Avant qu\'un LLM puisse traiter du texte, il doit le convertir en une séquence d\'identifiants de tokens entiers — un processus appelé [tokenisation](/prompt-engineering/prompt-engineering-glossary#tokenization).** GPT-5.5 utilise le Byte Pair Encoding (BPE), qui décompose le texte en unités de sous-mots fréquents. Claude Opus 4.8 et Gemini 3.1 Pro utilisent des schémas de tokenisation par sous-mots similaires.',
            'La tokenisation dépend de la langue. Le texte anglais représente en moyenne 1 token pour 0,75 mots. Le chinois et le japonais atteignent 1 token pour 0,5 mots — le même document coûte donc environ deux fois plus de tokens en chinois qu\'en anglais, ce qui affecte directement le coût de l\'API et l\'utilisation de la fenêtre de contexte.',
          ],
          tableFormat: true,
          columns: ['Texte d\'entrée', 'Tokens', 'Nombre de tokens'],
          rows: [
            { 'Texte d\'entrée': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Nombre de tokens': '4' },
            { 'Texte d\'entrée': '"Tokenization"', Tokens: '"Token", "ization"', 'Nombre de tokens': '2' },
            { 'Texte d\'entrée': '"GPT-5.5"', Tokens: '"G", "PT", "-", "4", "o"', 'Nombre de tokens': '5' },
            { 'Texte d\'entrée': '"你好世界" (Bonjour monde, chinois)', Tokens: '"你好", "世界"', 'Nombre de tokens': '2–4 selon le modèle' },
          ],
        },
        attention: {
          title: 'Comment fonctionne le mécanisme d\'attention transformer',
          content: [
            '**L\'architecture transformer utilise un mécanisme appelé self-attention pour déterminer dans quelle mesure chaque token doit « faire attention » à tous les autres tokens de la séquence lors du calcul de sa représentation.** Pour chaque token, le modèle calcule trois vecteurs — Query (Q), Key (K) et Value (V) — et calcule les scores d\'attention comme des produits scalaires entre Q et K, mis à l\'échelle et normalisés avec softmax.',
            'L\'attention multi-têtes exécute ce processus en parallèle sur plusieurs « têtes » (GPT-5.5 utilise 96 têtes d\'attention dans ses plus grandes couches), chacune apprenant différents patterns de relations. Certaines têtes se spécialisent dans les relations syntaxiques (sujet-verbe), d\'autres dans la similarité sémantique, d\'autres encore dans la coréférence (faire correspondre les pronoms aux noms).',
            'Une implication pratique majeure : l\'effet « lost in the middle ». Les recherches de Liu et al. (2023) à Stanford montrent que les LLMs sous-pondèrent systématiquement les informations au milieu des longs contextes. Pour les prompts dépassant ~2 000 tokens, placez les instructions critiques dans le system prompt (début) et répétez la contrainte la plus importante à la fin du message utilisateur.',
          ],
        },
        training: {
          title: 'Comment les LLMs sont entraînés : pré-entraînement et RLHF',
          content: [
            '**L\'entraînement des LLMs se déroule en deux phases distinctes : le pré-entraînement (apprendre les patterns du langage à partir de textes bruts) et l\'alignement post-entraînement (façonner le comportement grâce aux retours humains).** Ces phases produisent des capacités différentes et expliquent pourquoi les modèles de différents laboratoires se comportent différemment même avec des scores de benchmark similaires.',
            'Pendant le pré-entraînement, le modèle traite un corpus massif — Llama 3.3 a été entraîné sur environ 15 billions de tokens ; GPT-4 sur un estimé de 1 à 2 billions de tokens. L\'objectif est simple : prédire le prochain token. Aucune connaissance explicite n\'est stockée ; toutes les informations sont encodées comme des patterns statistiques dans les poids du modèle.',
            'L\'alignement post-entraînement — typiquement le Reinforcement Learning from Human Feedback (RLHF) ou ses variantes (RLAIF, DPO) — façonne le modèle en assistant utile. Des évaluateurs humains notent les sorties sur l\'utilité, l\'innocuité et l\'honnêteté. Un modèle de récompense est entraîné sur ces évaluations, et le LLM de base est ensuite fine-tuné pour maximiser la récompense. Le RLHF détermine le comportement de refus, le ton et les garde-fous de sécurité — pas l\'architecture de base.',
          ],
          items: [
            '**Pré-entraînement :** Prédiction non supervisée du prochain token sur des données à l\'échelle du web. Encode les patterns linguistiques, les connaissances du monde et les raccourcis de raisonnement dans les poids du modèle (~70B–405B paramètres pour les modèles frontier).',
            '**Supervised Fine-Tuning (SFT) :** Le modèle est entraîné sur des paires instruction-réponse soigneusement sélectionnées pour se comporter comme un assistant plutôt que comme un simple prédicteur de texte.',
            '**RLHF / DPO :** Les préférences humaines orientent le modèle vers des sorties utiles, inoffensives et honnêtes. Le DPO (Direct Preference Optimization) est une alternative plus efficace en calcul utilisée par les modèles Llama et Mistral.',
            '**Constitutional AI (Anthropic) :** Claude est en plus entraîné avec un ensemble de principes (« constitution ») pour réduire la dépendance aux retours humains pour chaque cas limite — Claude Opus 4.8 utilise cette approche.',
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
            { Modèle: 'GPT-5.5 (OpenAI)', 'Fenêtre de contexte': '128 000 tokens', 'Équivalent en mots approximatif': '~96 000 mots', 'Limite pratique pour les documents': '~200 pages PDF' },
            { Modèle: 'Claude Opus 4.8 (Anthropic)', 'Fenêtre de contexte': '200 000 tokens', 'Équivalent en mots approximatif': '~150 000 mots', 'Limite pratique pour les documents': '~300 pages PDF' },
            { Modèle: 'Gemini 3.1 Pro (Google DeepMind)', 'Fenêtre de contexte': '2 000 000 tokens', 'Équivalent en mots approximatif': '~1 500 000 mots', 'Limite pratique pour les documents': '~3 000 pages PDF' },
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
            '**Testé dans PromptQuorum — l\'envoi du même brief créatif à GPT-5.5, Claude Opus 4.8 et Gemini 3.1 Pro à température 0 vs température 0,9 a montré que Claude Opus 4.8 présente la plus faible variation de sortie entre températures, tandis que Gemini 3.1 Pro affiche la plus grande variation.** À température 0,9, Gemini 3.1 Pro a produit des sorties en moyenne 34 % plus longues qu\'à température 0.',
            'Avec le dispatch multi-modèle de PromptQuorum, vous pouvez exécuter n\'importe quel prompt simultanément contre tous les modèles disponibles à une température spécifiée et comparer les sorties côte à côte — ce qui rend pratique le calibrage des paramètres de température pour votre tâche spécifique plutôt que de s\'appuyer sur les valeurs par défaut des modèles.',
          ],
        },
        globalContext: {
          title: 'Différences d\'architecture LLM par région',
          content: [
            '**L\'architecture et les performances des LLMs varient considérablement selon la composition des données d\'entraînement, la stratégie de tokenisation et les contraintes réglementaires d\'une région à l\'autre.** Comprendre ces différences est crucial pour les équipes déployant des modèles à l\'échelle mondiale.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) atteint une efficacité de tokenisation supérieure pour les scripts CJK (chinois, japonais, coréen)** — utilisant environ 0,3 token par caractère pour le mandarin comparé à 0,5 token par caractère pour GPT-5.5. Cette réduction de 40 % du nombre de tokens réduit directement les coûts API et la latence pour les applications en langues asiatiques. Les données d\'entraînement de Qwen comprennent 20 % de contenu CJK, optimisant le tokeniseur pour les scripts où la densité caractère-sémantique est la plus élevée.',
            '**Mistral Small et Mistral Large sont explicitement conçus pour le déploiement européen**, avec des données d\'entraînement filtrées pour respecter le RGPD, la loi française sur l\'IA et les réglementations de l\'UE sur la conservation des données et la transparence des modèles. Contrairement aux modèles entraînés principalement sur des données web non filtrées, Mistral documente les sources de données et exclut les informations personnelles des citoyens de l\'UE de l\'entraînement, ce qui en fait le choix par défaut pour les secteurs réglementés en Europe (banque, santé, legal tech).',
            '**L\'architecture de DeepSeek reflète sa composition d\'entraînement** : 70 % des données de pré-entraînement sont en chinois et en anglais, 15 % en code, 15 % dans d\'autres langues. Ce ratio produit un modèle biaisé vers la fluidité en langue chinoise et la vitesse de génération de code, avec des performances nettement inférieures sur les langues à faibles ressources. La distribution des tokens et les patterns d\'attention sont optimisés pour les patterns de fréquence du mandarin, pas de l\'anglais.',
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Fondamentaux : Qu\'est-ce que l\'ingénierie de prompt ?](/prompt-engineering/what-is-prompt-engineering) — comment appliquer les connaissances sur l\'architecture LLM à la conception systématique de prompts',
            '[Fondamentaux : Fenêtres de contexte expliquées — Pourquoi l\'IA oublie](/prompt-engineering/context-windows-explained-why-ai-forgets) — exploration approfondie des limites des fenêtres de contexte et des stratégies de récupération',
            '[Fondamentaux : Tokens, coûts et limites : l\'économie du prompting IA](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — tarification des tokens, limites de débit et optimisation des coûts pour GPT-5.5, Claude et Gemini',
            '[Fondamentaux : Hallucinations IA expliquées — Pourquoi les LLMs inventent](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — comment la prédiction de tokens et l\'absence de récupération de faits conduisent à des erreurs de confiance',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Les LLMs comprennent-ils le texte comme les humains ?',
              a: 'Non. Les LLMs ne comprennent pas le texte au sens humain. Ils prédisent le prochain token statistiquement le plus probable sur la base des tokens précédents, selon des patterns appris pendant l\'entraînement. Il n\'y a ni compréhension, ni intention, ni conscience — seulement des distributions de probabilités pondérées sur un vocabulaire d\'environ 50 000 à 100 000 tokens.',
            },
            {
              q: 'Qu\'est-ce qu\'un token dans un LLM ?',
              a: 'Un token est la plus petite unité traitée par un LLM — environ 0,75 mot en anglais et 0,5 mot en chinois ou japonais. Les mots, sous-mots, ponctuation et espaces deviennent tous des tokens. GPT-5.5 utilise le BPE (Byte Pair Encoding) pour diviser le texte en tokens. Un document de 1 000 mots représente environ 1 300 tokens en anglais.',
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
              a: 'La fenêtre de contexte englobe tout le texte que le modèle peut voir lors d\'un appel d\'inférence — system prompt, historique et message actuel. Ce n\'est pas de la mémoire persistante : lorsque la conversation se termine, le modèle ne retient rien. GPT-5.5 : 128 000 tokens. Claude Opus 4.8 : 200 000 tokens. Gemini 3.1 Pro : 2 000 000 tokens.',
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
              q: 'Quelle est la différence architecturale entre GPT-5.5, Claude et Gemini ?',
              a: 'Tous trois sont des LLMs basés sur transformer mais diffèrent en taille, fenêtre de contexte et post-entraînement. GPT-5.5 (OpenAI) : 128 000 tokens. Claude Opus 4.8 (Anthropic) : 200 000 tokens, utilise le Constitutional AI. Gemini 3.1 Pro (Google DeepMind) : 2 000 000 tokens. Ces différences influencent le coût, la latence et l\'adéquation — GPT-5.5 excelle en raisonnement, Claude sur les longs contextes, Gemini pour le traitement de documents extrêmement longs.',
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
            '[Touvron et al., 2023. « Llama 3.3: Open Foundation and Fine-Tuned Chat Models »](https://arxiv.org/abs/2307.09288) — paper complet de Meta sur l\'architecture Llama 3.3, le pipeline d\'entraînement et la méthodologie d\'instruction-tuning',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — recherche d\'Anthropic sur l\'utilisation d\'une « constitution » pour guider le comportement du modèle comme alternative au RLHF pur',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — plongée technique dans BPE, WordPiece, SentencePiece et autres algorithmes de tokenisation des LLMs modernes',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — analyse d\'architecture et de performances d\'un modèle frontier avec une fenêtre de contexte de 1 M de tokens',
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
        url: 'https://www.promptquorum.com/ja/prompt-engineering/how-llms-actually-work',
        inLanguage: 'ja',
        headline: 'LLMは実際にどのように機能するか：トークン、注意、推論',
        description: '大規模言語モデルは確率分布経由で次のトークンを予測します — 理解や取得ではなく。トークン化、注意、RLHF、推論パラメータを学んでください。',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['大規模言語モデル', 'LLMアーキテクチャ', 'Transformer', 'トークン化', '注意メカニズム', 'RLHF', '温度', 'コンテキストウィンドウ', 'プロンプトエンジニアリング', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
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
            '**[コンテキストウィンドウ](/prompt-engineering/prompt-engineering-glossary#context-window)はメモリではありません。** GPT-5.5：128kトークン。Claude Opus 4.8：200kトークン。Gemini 3.1 Pro：200万トークン。セッション間で何も保持されません。',
            '**位置は決定的です。** トランスフォーマー[注意](/prompt-engineering/prompt-engineering-glossary#attention)メカニズムは、コンテキストの開始と終了の方が中央より重い。重要な指示を最初と最後に配置してください — 中央ではありません。',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf)は動作を形作る、機能ではない。** 拒否、トーン、有用性はポストトレーニングの微調整から生じます — ベースアーキテクチャではなく。',
          ],
        },

        tokenization: {
          title: '[トークン化](/prompt-engineering/prompt-engineering-glossary#tokenization)：テキストが数字になる方法',
          content: [
            '**LLMがテキストを処理する前に、それを整数トークンIDのシーケンスに変換する必要があります — [トークン化](/prompt-engineering/prompt-engineering-glossary#tokenization)と呼ばれるプロセス。** GPT-5.5はバイトペアエンコーディング（BPE）を使用し、テキストを一般的な部分単語ユニットに分割します。Claude Opus 4.8とGemini 3.1 Proは同様のサブワードトークン化スキームを使用します。',
            'トークン化は言語に依存しています。英語のテキストは平均1トークンあたり0.75単語です。中国語と日本語は1トークンあたり0.5単語になります — 同じドキュメントは中国語では英語の約2倍のトークンがかかり、APIコストとコンテキストウィンドウの使用法に直接影響します。',
          ],
          tableFormat: true,
          columns: ['入力テキスト', 'トークン', 'トークン数'],
          rows: [
            { '入力テキスト': '"Hello, world!"', 'トークン': '"Hello", ",", " world", "!"', 'トークン数': '4' },
            { '入力テキスト': '"Tokenization"', 'トークン': '"Token", "ization"', 'トークン数': '2' },
            { '入力テキスト': '"GPT-5.5"', 'トークン': '"G", "PT", "-", "4", "o"', 'トークン数': '5' },
            { '入力テキスト': '"你好世界"（こんにちは世界、中国語）', 'トークン': '"你好", "世界"', 'トークン数': 'モデルに応じて2–4' },
          ],
        },

        attention: {
          title: 'トランスフォーマー注意メカニズムがどのように機能するか',
          content: [
            '**トランスフォーマーアーキテクチャはセルフアテンションと呼ばれるメカニズムを使用して、シーケンス内のすべての他のトークンに「注意を払う」各トークンの程度を決定します。** 各トークンのために、モデルは3つのベクトル — クエリ（Q）、キー（K）、値（V） — を計算し、QとKのドット積として注意スコアを決定し、ソフトマックスでスケーリングと正規化します。',
            'マルチヘッド注意は複数の「ヘッド」にわたってこのプロセスを並列に実行します（GPT-5.5は最大層で96注意ヘッドを使用）。各ヘッドは異なる関係パターンを学習します。いくつかのヘッドは構文関係（主語-動詞）に専門化し、他は意味論的な類似性に、他は照応（代名詞を名詞に関連付ける）。',
            '重要な実際の結果：「Lost in the Middle」効果。Stanford Universityの Liu et al.（2023）の研究は、LLMが長いコンテキストの真ん中の情報を体系的に下重することを示しています。プロンプトに〜2,000を超えるトークンがある場合、重要な指示をシステムプロンプト（開始）に配置し、最も重要な制約をユーザーメッセージの終わりで繰り返します。',
          ],
        },

        training: {
          title: 'LLMがトレーニングされる方法：事前トレーニングとRLHF',
          content: [
            '**LLMトレーニングは2つの明確に分離された段階で行われます。事前トレーニング（生のテキストから言語パターンを学習する）およびポストトレーニングアライメント（人的フィードバックを通じて動作を調整する）。** これらの段階は異なる機能を作成し、異なるラボからのモデルが同様のベンチマーク結果でも異なる反応をする理由を説明します。',
            '事前トレーニング中、モデルは大量のコーパスを処理します — Llama 3.3は約15兆トークンで訓練されました；GPT-4は推定1～2兆トークン。目標は単純です。次のトークンを予測してください。明示的な知識は保存されません；すべての情報がモデルウェイトの統計的パターンとしてエンコードされます。',
            'ポストトレーニングアライメント — 通常、強化学習から人的フィードバック（RLHF）またはその変種（RLAIF、DPO） — がモデルを有用なアシスタントに形作ります。人間の評価者は、有用性、無害性、誠実さの出力を評価します。報酬モデルはこれらの評価で訓練され、ベースLLMはその後、報酬を最大化するために微調整されます。RLHFは拒否動作、トーン、セキュリティメカニズムを決定します — ベースアーキテクチャではなく。',
          ],
          items: [
            '**事前トレーニング：** Webスケールデータの教師なし次トークン予測。言語パターン、世界知識、推論のショートカットをモデルウェイト（フロンティアモデルで70B〜405Bパラメータ）にエンコードします。',
            '**監視されたファインチューニング（SFT）：** モデルは、純粋なテキスト予測器ではなくアシスタントとして動作するために、キュートされた指示応答ペアで訓練されます。',
            '**RLHF / DPO：** 人的嗜好がモデルを有用で無害で誠実な出力に向かって導きます。DPO（Direct Preference Optimization）はLlamaおよびMistralモデルで使用される、より計算効率の高い代替手段です。',
            '**Constitutional AI（Anthropic）：** Claudeは、エッジケースで人的フィードバックへの依存性を減らすために、原則のセット（「憲法」）を使って追加でトレーニングされます — Claude Opus 4.8はこのアプローチを使用します。',
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
            { 'モデル': 'GPT-5.5（OpenAI）', 'コンテキストウィンドウ': '128,000トークン', '概算単語相当': '〜96,000単語', '実用的なドキュメント制限': '〜200ページのPDF' },
            { 'モデル': 'Claude Opus 4.8（Anthropic）', 'コンテキストウィンドウ': '200,000トークン', '概算単語相当': '〜150,000単語', '実用的なドキュメント制限': '〜300ページのPDF' },
            { 'モデル': 'Gemini 3.1 Pro（Google DeepMind）', 'コンテキストウィンドウ': '2,000,000トークン', '概算単語相当': '〜1,500,000単語', '実用的なドキュメント制限': '〜3,000ページのPDF' },
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
            '**PromptQuorumでテスト済み — 温度0対温度0.9の同じ創造的なブリーフィングをGPT-5.5、Claude Opus 4.8、Gemini 3.1 Proに送信すると、Claude Opus 4.8は気温の間で出力の変動が最も低く、Gemini 3.1 Proは最も高いです。** 温度0.9では、Gemini 3.1 Proは温度0での平均出力より平均34％長い出力を生成しました。',
            'PromptQuorumのマルチモデルディスパッチを使用すると、特定の温度で利用可能なすべてのモデルに対して同時に各プロンプトを実行し、側次に出力を比較できます — これは特定のタスクの温度設定をキャリブレートし、モデルのデフォルトを信頼する代わりに、実用的にします。',
          ],
        },

        globalContext: {
          title: 'LLMアーキテクチャ地域別の違い',
          content: [
            '**LLMアーキテクチャとパフォーマンスは、トレーニングデータの構成、トークン化戦略、地域全体の規制要件によって大きく異なります。** グローバルモデルを展開するチームにとって、これらの違いを理解することは重要です。',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization)はCJKスクリプト（中国語、日本語、韓国語）の優れたトークン化効率を達成しています** — 標準中国語で約0.3トークン/文字対GPT-5.5の0.5トークン/文字。このトークンの40％削減は、アジア言語のアプリケーションのAPIコストと遅延を直接削減します。Qwenのトレーニングデータには20％のCJK含量が含まれており、文字対セマンティック密度が最も高いスクリプトのトークン化器を最適化します。',
            '**Mistral SmallおよびMistral LargeはEU展開用に明示的に設計されており、GDPR、フランスのAI法、およびデータストレージとモデルの透明性に関するEU規制のコンプライアンスのためにフィルターされたトレーニングデータがあります。** 主に無フィルタWebデータで訓練されたモデルとは異なり、Mistralはデータの出所を文書化し、トレーニングからEU市民の個人データを除外しており、ヨーロッパの規制産業（銀行、医療、法務技術）の標準選択になります。',
            '**DeepSeekのアーキテクチャはトレーニング構成に反映されています**：事前訓練データの70％は中国語と英語、15％はコード、15％は他の言語です。この比率は、中国語の言語流暢性とコード生成速度を優先するモデルを作成し、リソース貧弱言語で明らかに低いパフォーマンスがあります。トークン分布と注意パターンは、英語ではなく標準中国語の周波数パターンに対して最適化されています。',
          ],
        },

        relatedReading: {
          title: '関連する読み物',
          items: [
            '[基礎：プロンプトエンジニアリングとは？](/prompt-engineering/what-is-prompt-engineering) — LLMアーキテクチャの知識を体系的なプロンプト設計に適用する方法',
            '[基礎：コンテキストウィンドウの説明 — AIが忘れる理由](/prompt-engineering/context-windows-explained-why-ai-forgets) — コンテキストウィンドウの制限と検索戦略への深い潜在',
            '[基礎：トークン、コスト＆制限：AIプロンプティングの経済学](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — トークン価格設定、レート制限、およびGPT-5.5、Claude、Gemini全体のコスト最適化',
            '[基礎：AI幻覚が説明 — LLMなぜ物を作る](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — トークン予測と不足した事実検索がどのように信頼エラーに導くか',
          ],
        },

        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'LLMは人間のようにテキストを理解していますか？',
              a: 'いいえ。LLMは人間の意味でテキストを理解しません。彼らは、トレーニング中に学習したパターンに基づいて、以前のトークンに基づいて統計的に最も可能性の高い次のトークンを予測します。理解、意図、意識はありません — ボキャブラリーが約50,000〜100,000トークンである加重確率分布のみ。',
            },
            {
              q: 'LLMのトークンは何ですか？',
              a: 'トークンはLLMが処理する最小単位です — 英語では約0.75単語であり、中国語または日本語では約0.5単語です。単語、部分単語、句読点、スペースはすべてトークンです。GPT-5.5はバイトペアエンコーディング（BPE）を使用してテキストをトークンに分割します。1,000語のドキュメントは英語で約1,300トークンを生成します。',
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
              a: 'コンテキストウィンドウは、推論呼び出し中にモデルが見ることができるすべてのテキストをカバーしています — システムプロンプト、履歴、現在のメッセージ。永続的なメモリではありません。会話が終わると、モデルは何も保持します。GPT-5.5：128,000トークン。Claude Opus 4.8：200,000トークン。Gemini 3.1 Pro：2,000,000トークン。',
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
              q: 'アーキテクチャのGPT-5.5、Claude、Geminはどのように異なりますか？',
              a: '3つはすべてトランスフォーマーベースのLLMですが、スケーリング、コンテキストウィンドウ、ポストトレーニングが異なります。GPT-5.5（OpenAI）：128,000トークン。Claude Opus 4.8（Anthropic）：200,000トークン、Constitutional AIを使用します。Gemini 3.1 Pro（Google DeepMind）：2,000,000トークン。これらの違いはコスト、遅延、適合性に影響を与えます — GPT-5.5は推論で輝き、長コンテキストではClaude、Geminは非常に長いドキュメント処理に適しています。',
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
            '[Touvron et al.、2023。「Llama 3.3：オープン基盤と微調整チャットモデル」](https://arxiv.org/abs/2307.09288) — LLaMA-2アーキテクチャ、トレーニングパイプライン、Instruction-Tuningの方法論についてのMetaの包括的なペーパー',
            '[Anthropic。Constitutional AI：AIフィードバックからの無害性](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — 純粋なRLHFの代替として、モデル動作をガイドするための「憲法」を使用することについてのAnthropicの研究',
            '[HuggingFace。トークナイザーライブラリ＆要約](https://huggingface.co/docs/transformers/main/tokenizer_summary) — BPE、WordPiece、SentencePiece、その他の最新LLMトークン化アルゴリズムへの技術的な深い洞察',
            '[Google DeepMind。Gemini 3.5技術レポート](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — 100万トークンコンテキストウィンドウを持つフロンティアモデルのアーキテクチャとパフォーマンス分析',
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
        url: 'https://www.promptquorum.com/zh/prompt-engineering/how-llms-actually-work',
        inLanguage: 'zh',
        headline: '大型语言模型实际如何工作：令牌、注意力与推理',
        description: '大型语言模型通过概率分布预测下一个令牌——而非理解或检索。学习令牌化、注意力机制、RLHF和推理参数。',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['大型语言模型', 'LLM架构', 'Transformer', '令牌化', '注意力机制', 'RLHF', '温度', '上下文窗口', '提示工程', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
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
            '**[上下文窗口](/prompt-engineering/prompt-engineering-glossary#context-window)不是记忆。** GPT-5.5：128k令牌。Claude Opus 4.8：200k令牌。Gemini 3.1 Pro：200万令牌。会话之间不保留任何内容。',
            '**位置至关重要。** Transformer[注意力](/prompt-engineering/prompt-engineering-glossary#attention)机制对上下文开头和结尾的权重高于中间。将重要指令放在最前面和最后面——而不是中间。',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf)塑造行为，而非能力。** 拒绝、语气和有用性来自训练后微调——而非基础架构。',
          ],
        },

        tokenization: {
          title: '[令牌化](/prompt-engineering/prompt-engineering-glossary#tokenization)：文本如何变为数字',
          content: [
            '**在LLM处理文本之前，必须将其转换为整数令牌ID序列——这一过程称为[令牌化](/prompt-engineering/prompt-engineering-glossary#tokenization)。** GPT-5.5使用字节对编码（BPE），将文本分解为常见的子词单元。Claude Opus 4.8和Gemini 3.1 Pro使用类似的子词令牌化方案。',
            '令牌化取决于语言。英文文本平均每0.75个单词对应1个令牌。中文和日文为每0.5个词对应1个令牌——同一文档的中文版本需要约英文版两倍的令牌，直接影响API成本和上下文窗口使用。',
          ],
          tableFormat: true,
          columns: ['输入文本', '令牌', '令牌数量'],
          rows: [
            { '输入文本': '"Hello, world!"', '令牌': '"Hello", ",", " world", "!"', '令牌数量': '4' },
            { '输入文本': '"Tokenization"', '令牌': '"Token", "ization"', '令牌数量': '2' },
            { '输入文本': '"GPT-5.5"', '令牌': '"G", "PT", "-", "4", "o"', '令牌数量': '5' },
            { '输入文本': '"你好世界"（中文问候）', '令牌': '"你好", "世界"', '令牌数量': '根据模型为2–4' },
          ],
        },

        attention: {
          title: 'Transformer注意力机制如何工作',
          content: [
            '**Transformer架构使用一种称为自注意力的机制来确定每个令牌在计算其表示时应"关注"序列中所有其他令牌的程度。** 对于每个令牌，模型计算三个向量——查询（Q）、键（K）和值（V）——并将注意力分数计算为Q和K的点积，用softmax进行缩放和归一化。',
            '多头注意力在多个"头"上并行运行此过程（GPT-5.5在其最大层中使用96个注意力头），每个头学习不同的关系模式。一些头专注于句法关系（主语-动词），其他头关注语义相似性，还有一些关注共指（将代词与名词关联）。',
            '一个重要的实际结果："Lost in the Middle"效应。Stanford University的Liu et al.（2023）的研究表明，LLM系统性地低估长上下文中间的信息。对于超过约2,000个令牌的提示，将关键指令放在系统提示（开头）中，并在用户消息结尾重复最重要的约束。',
          ],
        },

        training: {
          title: 'LLM如何训练：预训练与RLHF',
          content: [
            '**LLM训练分两个明确阶段进行：预训练（从原始文本学习语言模式）和训练后对齐（通过人类反馈调整行为）。** 这两个阶段产生不同的能力，并解释了为什么不同实验室的模型即使在类似的基准结果下也有不同的反应。',
            '在预训练期间，模型处理大量语料库——Llama 3.3在约15万亿个令牌上训练；GPT-4估计在1至2万亿个令牌上训练。目标很简单：预测下一个令牌。不存储显式知识；所有信息都作为统计模式编码在模型权重中。',
            '训练后对齐——通常是来自人类反馈的强化学习（RLHF）或其变体（RLAIF、DPO）——将模型塑造为有用的助手。人类评估者根据有用性、无害性和诚实性对输出进行评分。在这些评分上训练奖励模型，然后对基础LLM进行微调以最大化奖励。RLHF决定拒绝行为、语气和安全机制——而非基础架构。',
          ],
          items: [
            '**预训练：** 对网络规模数据进行无监督的下一个令牌预测。将语言模式、世界知识和推理捷径编码到模型权重中（前沿模型约70B至405B参数）。',
            '**监督微调（SFT）：** 在精心策划的指令-响应对上训练模型，使其表现得像助手而非纯文本预测器。',
            '**RLHF / DPO：** 人类偏好引导模型产生有用、无害和诚实的输出。DPO（直接偏好优化）是Llama和Mistral模型使用的计算效率更高的替代方案。',
            '**Constitutional AI（Anthropic）：** Claude额外使用一套原则（"宪法"）进行训练，以减少对边缘案例中人类反馈的依赖——Claude Opus 4.8使用此方法。',
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
            { '模型': 'GPT-5.5（OpenAI）', '上下文窗口': '128,000令牌', '近似单词当量': '约96,000词', '实际文档限制': '约200页PDF' },
            { '模型': 'Claude Opus 4.8（Anthropic）', '上下文窗口': '200,000令牌', '近似单词当量': '约150,000词', '实际文档限制': '约300页PDF' },
            { '模型': 'Gemini 3.1 Pro（Google DeepMind）', '上下文窗口': '2,000,000令牌', '近似单词当量': '约1,500,000词', '实际文档限制': '约3,000页PDF' },
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
            '**在PromptQuorum中测试——向GPT-5.5、Claude Opus 4.8和Gemini 3.1 Pro分别在温度0和温度0.9下发送相同的创意简报，显示Claude Opus 4.8在不同温度间的输出变化最小，而Gemini 3.1 Pro的变化最大。** 在温度0.9时，Gemini 3.1 Pro生成的输出平均比温度0时长34%。',
            '使用PromptQuorum的多模型调度，您可以同时针对所有可用模型在特定温度下运行每个提示，并并排比较输出——这使得校准特定任务的温度设置变得实际可行，而不是依赖模型默认值。',
          ],
        },

        globalContext: {
          title: 'LLM架构的地区差异',
          content: [
            '**LLM架构和性能因训练数据构成、令牌化策略和法规要求在不同地区存在显著差异。** 对于全球部署模型的团队来说，理解这些差异至关重要。',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization)在CJK脚本（中文、日文、韩文）上实现了卓越的令牌化效率** — 普通话中文约0.3令牌/字符，而GPT-5.5为0.5令牌/字符。这40%的令牌减少直接降低了亚洲语言应用的API成本和延迟。Qwen的训练数据包含20%的CJK内容，优化了字符与语义密度最高的脚本的令牌化器。',
            '**Mistral Small和Mistral Large专为欧盟部署设计**，训练数据经过过滤以符合GDPR、法国AI法以及欧盟关于数据存储和模型透明度的法规。与主要在未过滤网络数据上训练的模型不同，Mistral记录数据来源并从训练中排除欧盟公民的个人数据，使其成为欧洲受监管行业（银行、医疗保健、法律技术）的标准选择。',
            '**DeepSeek的架构反映了其训练构成**：预训练数据的70%是中文和英文，15%是代码，15%是其他语言。这一比例产生了一个优先考虑中文语言流畅性和代码生成速度的模型，在资源匮乏的语言上性能明显较低。令牌分布和注意力模式针对普通话中文的频率模式优化，而非英语。',
          ],
        },

        relatedReading: {
          title: '相关阅读',
          items: [
            '[基础：什么是提示工程？](/prompt-engineering/what-is-prompt-engineering) — 如何将LLM架构知识应用于系统性提示设计',
            '[基础：上下文窗口解析——AI为何遗忘](/prompt-engineering/context-windows-explained-why-ai-forgets) — 深入探讨上下文窗口限制和检索策略',
            '[基础：令牌、成本与限制：AI提示的经济学](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 令牌定价、速率限制以及GPT-5.5、Claude和Gemini的成本优化',
            '[基础：AI幻觉解析——LLM为何编造内容](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 令牌预测和缺乏事实检索如何导致置信度错误',
          ],
        },

        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'LLM像人类一样理解文本吗？',
              a: '不。LLM不以人类的方式理解文本。它们根据训练期间学习的模式，基于先前的令牌预测统计上最可能的下一个令牌。没有理解、意图或意识——只有在约50,000至100,000个令牌的词汇表上的加权概率分布。',
            },
            {
              q: 'LLM中的令牌是什么？',
              a: '令牌是LLM处理的最小单位——英语约0.75个单词，中文或日文约0.5个词。单词、子词、标点符号和空格都是令牌。GPT-5.5使用字节对编码（BPE）将文本分割为令牌。1,000词的文档在英语中产生约1,300个令牌。',
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
              a: '上下文窗口涵盖模型在推理调用期间能看到的所有文本——系统提示、历史记录和当前消息。它不是持久记忆：对话结束时，模型不保留任何内容。GPT-5.5：128,000令牌。Claude Opus 4.8：200,000令牌。Gemini 3.1 Pro：2,000,000令牌。',
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
              q: 'GPT-5.5、Claude和Gemini在架构上有何不同？',
              a: '三者都是基于Transformer的LLM，但在扩展、上下文窗口和训练后处理上有所不同。GPT-5.5（OpenAI）：128,000令牌。Claude Opus 4.8（Anthropic）：200,000令牌，使用Constitutional AI。Gemini 3.1 Pro（Google DeepMind）：2,000,000令牌。这些差异影响成本、延迟和适用性——GPT-5.5在推理上表现出色，Claude擅长长上下文，Gemini适合处理超长文档。',
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
            '[Touvron et al., 2023. "Llama 3.3: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — Meta关于LLaMA-2架构、训练流程和指令微调方法论的综合论文',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — Anthropic关于使用"宪法"指导模型行为作为纯RLHF替代方案的研究',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — 对现代LLM中BPE、WordPiece、SentencePiece和其他令牌化算法的技术深入分析',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — 具有100万令牌上下文窗口的前沿模型架构和性能分析',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — 开源模型训练文档及LLM开发中架构决策分析',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — 关于高效长上下文处理的纯Transformer注意力替代方案的研究',
          ],
        },
      },
    },
    pt: {
      theme: 'Fundamentals',
      title: 'Como os LLMs Realmente Funcionam: Tokens, Atenção e Inferência',
      intro: 'Os grandes modelos de linguagem preveem o próximo token usando distribuições de probabilidade — não por compreensão. Aprenda tokenização, atenção, RLHF, parâmetros de inferência e por que isso importa para o prompt engineering.',
      publishDate: '2026-03-30',
      seoTitle: 'Como os LLMs Funcionam: Tokens, Atenção e Inferência (2026)',
      metaDescription: 'LLMs preveem tokens por distribuições de probabilidade — não por significado. Aprenda tokenização, transformer attention, RLHF e parâmetros de inferência com benchmarks específicos de modelos.',
      readTime: '12 min de leitura',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/how-llms-actually-work',
        inLanguage: 'pt-BR',
        headline: 'Como os LLMs Realmente Funcionam: Tokens, Atenção e Inferência',
        description: 'Os grandes modelos de linguagem preveem o próximo token usando distribuições de probabilidade — não por compreensão. Aprenda tokenização, transformer attention, RLHF e parâmetros de inferência.',
        datePublished: '2026-03-30',
        keywords: ['grandes modelos de linguagem', 'arquitetura LLM', 'transformer', 'tokenização', 'mecanismo de atenção', 'RLHF', 'temperatura', 'context window', 'prompt engineering', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: 'Tokenização' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: 'O deck de slides cobre: como a tokenização converte texto em IDs de token, como o transformer attention cria o efeito "lost in the middle", diferenças entre RLHF e pré-treinamento, e tabela de referência de parâmetros de inferência (temperatura 0,0–2,0, top-p, max tokens). Faça o download do PDF como cartão de referência da arquitetura LLM.',
      sections: {
        definition: {
          title: 'O Que é Realmente um LLM',
          content: [
            '**Um LLM (large language model) é uma rede neural baseada em transformer treinada para prever o token mais provável dado uma sequência de tokens de entrada — não é um banco de dados, um mecanismo de busca ou um sistema de raciocínio.** O modelo aprende relações estatísticas entre tokens processando centenas de bilhões de palavras de páginas da web, livros, código e outros textos durante o treinamento.',
            'Quando você digita um prompt, o modelo converte seu texto em uma sequência de IDs de token numéricos, passa-os por dezenas de camadas de transformer e produz uma distribuição de probabilidade sobre todo o seu vocabulário (normalmente 50.000–100.000 tokens). Ele seleciona um token dessa distribuição, o acrescenta à sequência e repete até gerar um token de parada ou atingir o limite de saída.',
            'Essa arquitetura explica vários comportamentos que confundem os usuários: por que os LLMs "[alucinam](/prompt-engineering/prompt-engineering-glossary#hallucination)" fatos plausíveis, mas falsos (preveem texto provável, não verdade verificada), por que podem falhar em aritmética (padrões de tokens, não cálculo real), e por que reformular um prompt muda a saída (sequências de tokens diferentes ativam distribuições de probabilidade diferentes).',
          ],
          tableFormat: true,
          columns: ['Propriedade', 'LLM', 'Software tradicional'],
          rows: [
            { Propriedade: 'Como funciona', LLM: 'Prevê o próximo token via distribuições de probabilidade aprendidas', 'Software tradicional': 'Executa instruções determinísticas' },
            { Propriedade: 'Determinismo da saída', LLM: 'Probabilístico — a mesma entrada pode gerar saídas diferentes', 'Software tradicional': 'Determinístico — a mesma entrada sempre gera a mesma saída' },
            { Propriedade: 'Fonte de conhecimento', LLM: 'Padrões codificados nos pesos do modelo durante o treinamento', 'Software tradicional': 'Lê de bancos de dados ou arquivos em tempo de execução' },
            { Propriedade: 'Tipo de erro', LLM: 'Confiante, mas errado (alucinação)', 'Software tradicional': 'Trava ou retorna código de erro' },
            { Propriedade: 'Mecanismo de atualização', LLM: 'Requer novo treinamento ou fine-tuning', 'Software tradicional': 'Alteração de código ou atualização de banco de dados' },
          ],
        },
        tldr: {
          title: 'Pontos-Chave',
          isTldr: true,
          items: [
            '**LLMs preveem tokens, não respostas.** Geram sequências de texto estatisticamente prováveis — não fatos recuperados, deduções lógicas ou informações verificadas.',
            '**1 token ≈ 0,75 palavras em inglês.** Um documento de 1.000 palavras usa ~1.300 tokens. Chinês e japonês são ~50% mais densos.',
            '**A [temperatura](/prompt-engineering/prompt-engineering-glossary#temperature) controla criatividade vs. determinismo.** Temperatura 0 = determinístico. Temperatura 1,0 = amostragem proporcional. Acima de 1,5 = alto risco de alucinação.',
            '**Os [context windows](/prompt-engineering/prompt-engineering-glossary#context-window) não são memória.** GPT-5.5: 128k tokens. Claude Opus 4.8: 200k tokens. Gemini 3.1 Pro: 2M tokens. Nada persiste entre sessões.',
            '**A posição importa.** O [attention](/prompt-engineering/prompt-engineering-glossary#attention) do transformer pondera mais o início e o fim do contexto. Coloque as instruções críticas no início e no final — não no meio.',
            '**O [RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf) molda o comportamento, não a capacidade.** Recusas, tom e utilidade vêm do fine-tuning pós-treinamento — não da arquitetura base.',
          ],
        },
        tokenization: {
          title: '[Tokenização](/prompt-engineering/prompt-engineering-glossary#tokenization): Como o Texto Vira Números',
          content: [
            '**Antes de um LLM poder processar qualquer texto, ele precisa convertê-lo em uma sequência de IDs de token inteiros — um processo chamado [tokenização](/prompt-engineering/prompt-engineering-glossary#tokenization).** O GPT-5.5 usa Byte Pair Encoding (BPE), que divide o texto em unidades de subpalavras frequentes. Claude Opus 4.8 e Gemini 3.1 Pro usam esquemas de tokenização de subpalavras semelhantes.',
            'A tokenização depende do idioma. O texto em inglês tem em média aproximadamente 1 token por 0,75 palavras. Chinês e japonês têm em média 1 token por 0,5 palavras — o que significa que o mesmo documento custa aproximadamente o dobro de tokens em chinês do que em inglês, afetando diretamente o custo da API e o uso do context window.',
          ],
          tableFormat: true,
          columns: ['Texto de entrada', 'Tokens', 'Número de tokens'],
          rows: [
            { 'Texto de entrada': '"Hello, world!"', Tokens: '"Hello", ",", " world", "!"', 'Número de tokens': '4' },
            { 'Texto de entrada': '"Tokenization"', Tokens: '"Token", "ization"', 'Número de tokens': '2' },
            { 'Texto de entrada': '"GPT-5.5"', Tokens: '"G", "PT", "-", "4", "o"', 'Número de tokens': '5' },
            { 'Texto de entrada': '"你好世界" (Olá mundo, chinês)', Tokens: '"你好", "世界"', 'Número de tokens': '2–4 dependendo do modelo' },
          ],
        },
        attention: {
          title: 'Como o Transformer Attention Funciona',
          content: [
            '**A arquitetura transformer usa um mecanismo chamado self-attention para determinar quanto cada token deve "prestar atenção" a todos os outros tokens da sequência ao calcular sua representação.** Para cada token, o modelo calcula três vetores — Query (Q), Key (K) e Value (V) — e calcula pontuações de atenção como produtos escalares entre Q e K, escalados e normalizados com softmax.',
            'O multi-head attention executa esse processo em paralelo em múltiplas "cabeças" (o GPT-5.5 usa 96 cabeças de atenção em suas maiores camadas), cada uma aprendendo padrões de relacionamento diferentes. Algumas cabeças se especializam em relações sintáticas (sujeito-verbo), outras em similaridade semântica, outras em correferência (associar pronomes a substantivos).',
            'Uma implicação prática fundamental: o efeito "lost in the middle". Pesquisas de Liu et al. (2023) em Stanford mostram que os LLMs sistematicamente subponderam informações no meio de contextos longos. Para prompts com mais de ~2.000 tokens, coloque as instruções críticas no system prompt (início) e repita a restrição mais importante no final da mensagem do usuário.',
          ],
        },
        training: {
          title: 'Como os LLMs São Treinados: Pré-Treinamento e RLHF',
          content: [
            '**O treinamento de LLMs ocorre em duas fases distintas: pré-treinamento (aprender padrões de linguagem a partir de texto bruto) e alinhamento pós-treinamento (moldar o comportamento com feedback humano).** Essas fases produzem capacidades diferentes e explicam por que modelos de diferentes laboratórios se comportam de forma diferente mesmo com pontuações de benchmark semelhantes.',
            'Durante o pré-treinamento, o modelo processa um corpus massivo — o Llama 3.3 foi treinado em aproximadamente 15 trilhões de tokens; o GPT-4 em um estimado de 1–2 trilhões de tokens. O objetivo é simples: prever o próximo token. Nenhum conhecimento explícito é armazenado; toda a informação é codificada nos pesos do modelo como padrões estatísticos.',
            'O alinhamento pós-treinamento — tipicamente Reinforcement Learning from Human Feedback (RLHF) ou suas variantes (RLAIF, DPO) — molda o modelo em um assistente útil. Avaliadores humanos pontuam as saídas em utilidade, inofensividade e honestidade. Um modelo de recompensa é treinado nessas pontuações, e o LLM base é ajustado para maximizar a recompensa. O RLHF determina o comportamento de recusa, tom e salvaguardas de segurança — não a arquitetura base.',
          ],
          items: [
            '**Pré-treinamento:** Previsão não supervisionada do próximo token em dados na escala da web. Codifica padrões de linguagem, conhecimento do mundo e atalhos de raciocínio nos pesos do modelo (~70B–405B parâmetros para modelos frontier).',
            '**Supervised Fine-Tuning (SFT):** O modelo é treinado em pares instrução-resposta curados para se comportar como um assistente, e não como um preditor de texto puro.',
            '**RLHF / DPO:** As preferências humanas guiam o modelo em direção a saídas úteis, inofensivas e honestas. DPO (Direct Preference Optimization) é uma alternativa computacionalmente mais eficiente usada pelos modelos Llama e Mistral.',
            '**Constitutional AI (Anthropic):** O Claude é adicionalmente treinado usando um conjunto de princípios ("constituição") para reduzir a dependência de feedback humano em casos extremos — o Claude Opus 4.8 usa essa abordagem.',
          ],
        },
        inference: {
          title: 'Como a Inferência Funciona: Amostragem e Decodificação',
          content: [
            '**Durante a inferência, o modelo gera a saída token a token — calculando uma distribuição de probabilidade sobre todo o vocabulário e fazendo amostragem dela de acordo com os parâmetros de decodificação que você controla.** Os três parâmetros mais importantes são [temperatura](/prompt-engineering/prompt-engineering-glossary#temperature), [top-p](/prompt-engineering/prompt-engineering-glossary#top-p) (nucleus sampling) e max tokens.',
          ],
          tableFormat: true,
          columns: ['Parâmetro', 'Intervalo', 'Efeito', 'Ideal para'],
          rows: [
            { Parâmetro: 'Temperatura', Intervalo: '0,0 – 2,0', Efeito: 'Aguça (baixo) ou achata (alto) a distribuição de probabilidade', 'Ideal para': '0 para código/fatos; 0,7 para escrita; 1,0 para tarefas criativas' },
            { Parâmetro: 'Top-p (nucleus)', Intervalo: '0,0 – 1,0', Efeito: 'Restringe a amostragem aos tokens cuja probabilidade acumulada atinge p', 'Ideal para': '0,9–0,95 para a maioria das tarefas; 0,5 para saídas restritas' },
            { Parâmetro: 'Top-k', Intervalo: '1 – tamanho do vocabulário', Efeito: 'Restringe a amostragem aos k tokens seguintes mais prováveis', 'Ideal para': 'Menos usado; top-p é geralmente preferido' },
            { Parâmetro: 'Max tokens', Intervalo: '1 – limite do contexto', Efeito: 'Parada rígida no comprimento da saída', 'Ideal para': 'Definir como 2× o comprimento de saída esperado para evitar truncamento' },
            { Parâmetro: 'Frequency penalty', Intervalo: '-2,0 – 2,0', Efeito: 'Reduz a repetição de tokens já gerados', 'Ideal para': '0,1–0,3 para documentos longos; 0 para código' },
          ],
        },
        contextWindowSection: {
          title: '[Context Windows](/prompt-engineering/prompt-engineering-glossary#context-window): O Que o Modelo Pode Ver',
          content: [
            '**O [context window](/prompt-engineering/prompt-engineering-glossary#context-window) é o número máximo de tokens que o modelo pode processar em uma única chamada de inferência — combinando o system prompt, o histórico de conversa, documentos e a mensagem atual do usuário.** Nada persiste entre sessões; o modelo começa do zero a cada vez.',
            'O tamanho do context window varia significativamente por modelo e afeta diretamente quais casos de uso são práticos:',
          ],
          tableFormat: true,
          columns: ['Modelo', 'Context window', 'Equivalente aproximado em palavras', 'Limite prático de documento'],
          rows: [
            { Modelo: 'GPT-5.5 (OpenAI)', 'Context window': '128.000 tokens', 'Equivalente aproximado em palavras': '~96.000 palavras', 'Limite prático de documento': '~PDF de 200 páginas' },
            { Modelo: 'Claude Opus 4.8 (Anthropic)', 'Context window': '200.000 tokens', 'Equivalente aproximado em palavras': '~150.000 palavras', 'Limite prático de documento': '~PDF de 300 páginas' },
            { Modelo: 'Gemini 3.1 Pro (Google DeepMind)', 'Context window': '2.000.000 tokens', 'Equivalente aproximado em palavras': '~1.500.000 palavras', 'Limite prático de documento': '~PDF de 3.000 páginas' },
            { Modelo: 'LLaMA 3.1 70B (Meta, via Ollama)', 'Context window': '128.000 tokens', 'Equivalente aproximado em palavras': '~96.000 palavras', 'Limite prático de documento': '~PDF de 200 páginas' },
          ],
        },
        implications: {
          title: 'O Que Isso Significa para o Prompt Engineering',
          content: [
            '**Compreender a arquitetura dos LLMs melhora diretamente a qualidade do prompt — posição do token, temperatura, uso do context window e comprimento da saída têm efeitos mensuráveis na confiabilidade da saída.**',
          ],
          items: [
            '**Coloque as instruções críticas primeiro.** O system prompt é processado antes de qualquer mensagem do usuário. Instruções enterradas no meio de prompts longos são subponderadas pelo efeito "lost in the middle". Coloque restrições e definições de papel no system prompt.',
            '**A temperatura é um controle gradual, não um interruptor binário.** Use temperatura 0 para geração de código e tarefas factuais. Use 0,5–0,7 para geração de conteúdo. Acima de 1,0, a diversidade aumenta mas o risco de alucinação sobe significativamente.',
            '**O número de tokens afeta custo e latência de forma linear.** O preço da API é por token (entrada e saída). Um system prompt de 10.000 tokens com 100 usuários diários custa 1.000.000 tokens/dia só em entrada — comprima as instruções sem piedade.',
            '**Os modelos não "sabem" que estão errados.** A alucinação é uma propriedade estrutural da previsão de tokens — o modelo produz o que é estatisticamente provável, não o que é verificado. Sempre valide afirmações factuais para saídas de alto risco.',
            '**Context window ≠ qualidade de atenção.** Um context window de 200.000 tokens não significa que o modelo presta atenção igualmente a todos os 200.000 tokens. Para documentos com mais de ~50.000 tokens, considere chunking com RAG em vez de context stuffing completo.',
          ],
        },
        misconceptions: {
          title: 'Equívocos Comuns sobre LLMs',
          content: ['**Esses equívocos sobre LLMs causam frequentemente prompts mal projetados e expectativas erradas:**'],
          tableFormat: true,
          columns: ['Equívoco', 'O que realmente acontece', 'Implicação para prompt engineering'],
          rows: [
            { Equívoco: '"O modelo lê e entende meu documento"', 'O que realmente acontece': 'O modelo processa sequências de tokens e prevê continuações — nenhuma compreensão de leitura ocorre', 'Implicação para prompt engineering': 'Especifique explicitamente o que você quer extrair; não assuma que o modelo infere seu objetivo' },
            { Equívoco: '"O modelo lembra da nossa última conversa"', 'O que realmente acontece': 'Cada chamada à API é stateless; o histórico deve ser incluído explicitamente no context window', 'Implicação para prompt engineering': 'Inclua o contexto anterior relevante no system prompt ou no histórico de conversa' },
            { Equívoco: '"O modelo sabe a data atual"', 'O que realmente acontece': 'O modelo tem um corte de treinamento e não sabe que dia é a menos que seja informado', 'Implicação para prompt engineering': 'Injete a data atual no system prompt para qualquer tarefa sensível à data' },
            { Equívoco: '"Temperatura mais alta = saída mais inteligente"', 'O que realmente acontece': 'A temperatura controla a aleatoriedade da amostragem, não a capacidade ou a precisão', 'Implicação para prompt engineering': 'Use temperatura baixa (0,0–0,3) para tarefas analíticas; mais alta para variação criativa' },
            { Equívoco: '"O modelo pode contar caracteres de forma confiável"', 'O que realmente acontece': 'Os limites de token são unidades de subpalavra; contagem precisa de caracteres ou palavras não é uma habilidade nativa', 'Implicação para prompt engineering': 'Não confie no modelo para contar palavras com precisão; use pós-processamento ou código' },
          ],
        },
        promptquorumBridge: {
          title: 'Testando Efeitos de Temperatura entre Modelos no PromptQuorum',
          content: [
            '**Testado no PromptQuorum — enviar o mesmo briefing criativo ao GPT-5.5, Claude Opus 4.8 e Gemini 3.1 Pro a temperatura 0 vs. temperatura 0,9 mostrou que o Claude Opus 4.8 tem a menor variação de saída entre temperaturas, enquanto o Gemini 3.1 Pro apresenta a maior variação.** A temperatura 0,9, o Gemini 3.1 Pro produziu saídas em média 34% mais longas do que a temperatura 0.',
            'Usando o dispatch multi-modelo do PromptQuorum, você pode executar qualquer prompt simultaneamente contra todos os modelos disponíveis a uma temperatura especificada e comparar as saídas lado a lado — tornando prático calibrar as configurações de temperatura para sua tarefa específica em vez de depender dos padrões do modelo.',
          ],
        },
        globalContext: {
          title: 'Diferenças de Arquitetura LLM por Região',
          content: [
            '**A arquitetura e o desempenho dos LLMs variam significativamente pela composição dos dados de treinamento, estratégia de tokenização e restrições regulatórias entre regiões.** Compreender essas diferenças é fundamental para equipes que implantam modelos globalmente.',
            '**O [Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization) alcança eficiência de tokenização superior para scripts CJK (chinês, japonês, coreano)** — usando aproximadamente 0,3 tokens por caractere para o mandarim comparado a 0,5 tokens por caractere do GPT-5.5. Essa redução de 40% no número de tokens reduz diretamente os custos da API e a latência para aplicações em idiomas asiáticos. Os dados de treinamento do Qwen incluem 20% de conteúdo CJK, otimizando o tokenizador para scripts onde a densidade caractere-semântica é maior.',
            '**O Mistral Small e o Mistral Large são explicitamente projetados para implantação europeia**, com dados de treinamento filtrados para conformidade com o RGPD, a Lei de IA da França e os regulamentos da UE sobre retenção de dados e transparência de modelos. Ao contrário de modelos treinados principalmente em dados web não filtrados, o Mistral documenta a origem dos dados e exclui informações pessoais de cidadãos da UE do treinamento, tornando-o a escolha padrão para setores regulados na Europa (bancos, saúde, legal tech).',
            '**A arquitetura do DeepSeek reflete sua composição de treinamento**: 70% dos dados de pré-treinamento estão em chinês e inglês, 15% em código, 15% em outros idiomas. Essa proporção produz um modelo com viés para fluência em chinês e velocidade de geração de código, com desempenho substancialmente menor em idiomas de poucos recursos. A distribuição de tokens e os padrões de atenção são otimizados para os padrões de frequência do mandarim, não do inglês.',
          ],
        },
        relatedReading: {
          title: 'Leituras Relacionadas',
          items: [
            '[Fundamentos: O Que é Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — como aplicar o conhecimento da arquitetura LLM ao design sistemático de prompts',
            '[Fundamentos: Context Windows Explicados — Por Que a IA Esquece](/prompt-engineering/context-windows-explained-why-ai-forgets) — análise profunda dos limites do context window e estratégias de recuperação',
            '[Fundamentos: Tokens, Custos e Limites: A Economia do Prompting com IA](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — preços de tokens, limites de taxa e otimização de custos no GPT-5.5, Claude e Gemini',
            '[Fundamentos: Alucinações de IA Explicadas — Por Que LLMs Inventam Coisas](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — como a previsão de tokens e a falta de recuperação de fatos levam a erros de confiança',
            '[Limitações de IA: O Que os LLMs Não Podem Fazer](/prompt-engineering/ai-limitations-what-llms-cant-do) — as oito restrições estruturais que todos os LLMs compartilham e a solução de engenharia para cada uma',
          ],
        },
        howToStart: {
          title: 'Como Entender o Funcionamento dos LLMs',
          numberedItems: [
            '**Comece com os tokens: entenda que os LLMs não veem letras ou palavras, mas tokens (unidades de subpalavra), geralmente 1–2 tokens por palavra em inglês.** Use um tokenizador online (da OpenAI ou da Anthropic) para contar tokens em texto de exemplo. Veja como "ChatGPT" vira "Chat" + "G" + "PT", e como isso afeta os preços e os context windows.',
            '**Aprenda as três camadas principais da arquitetura transformer: embeddings, attention e projeção de saída.** Você não precisa implementar, mas entenda conceitualmente: embeddings convertem tokens em vetores, o attention compara todos os pares de tokens para entender relações, a projeção de saída mapeia de volta ao vocabulário. Isso explica por que os LLMs entendem contexto e por que alucinam.',
            '**Entenda por que os LLMs alucinam: eles preveem "próximos tokens prováveis" com base em padrões de dados de treinamento, não "fatos corretos".** Quando os dados de treinamento têm informações conflitantes ou escassas sobre um tópico, a melhor estimativa do modelo às vezes está errada. Esta é uma propriedade fundamental, não um bug corrigível. Defina a temperatura (T) baixa para tarefas factuais, alta para as criativas.',
            '**Experimente temperatura e top-p para ver como eles alteram a saída.** Gere texto a T=0,0 (determinístico), T=0,7 (variado mas coerente) e T=1,5 (aleatório). Veja que T mais alto = mais variação. Entenda que o top-p (nucleus sampling) filtra tokens improváveis, reduzindo o nonsense.',
            '**Entenda os context windows: o modelo "vê" apenas uma janela fixa de tokens recentes.** A janela de 128k tokens do GPT-5.5 equivale a ~96.000 palavras. Informações antigas são "esquecidas" porque ficam fora da janela. Isso explica por que os LLMs às vezes contradizem informações anteriores em uma conversa longa.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas Frequentes',
          faqs: [
            {
              q: 'Os LLMs entendem texto da forma como os humanos entendem?',
              a: 'Não. Os LLMs não entendem texto no sentido humano. Eles preveem o próximo token estatisticamente mais provável dado os tokens anteriores, com base em padrões aprendidos durante o treinamento. Não há compreensão, intenção ou consciência — apenas distribuições de probabilidade ponderadas sobre um vocabulário de aproximadamente 50.000–100.000 tokens.',
            },
            {
              q: 'O que é um token em um LLM?',
              a: 'Um token é a menor unidade que um LLM processa — aproximadamente 0,75 palavras em inglês e 0,5 palavras em chinês ou japonês. Palavras, subpalavras, pontuação e espaços se tornam tokens. O GPT-5.5 usa BPE (Byte Pair Encoding) para dividir o texto em tokens antes de processá-lo. Um documento de 1.000 palavras se torna aproximadamente 1.300 tokens em inglês.',
            },
            {
              q: 'O que a temperatura faz em um LLM?',
              a: 'A temperatura controla com que aleatoriedade o modelo faz amostragem da sua distribuição de probabilidade. Temperatura 0 sempre escolhe o token de maior probabilidade (determinístico). Temperatura 1,0 faz amostragem proporcionalmente à distribuição. Acima de 1,5, a distribuição se achata e o risco de alucinação aumenta. A maioria dos casos de produção funciona melhor entre 0,1 e 0,7.',
            },
            {
              q: 'Por que a posição das informações em um prompt importa?',
              a: 'O transformer attention tende a ponderar mais os tokens próximos ao início e ao fim do context window do que os tokens no meio — o efeito "lost in the middle" documentado por Liu et al. (2023). Para prompts com mais de ~2.000 tokens, coloque a instrução mais crítica no início e repita as restrições principais no final.',
            },
            {
              q: 'O que é RLHF e como ele afeta as saídas do modelo?',
              a: 'Reinforcement Learning from Human Feedback (RLHF) é uma etapa pós-treinamento onde avaliadores humanos pontuam as saídas do modelo e um modelo de recompensa é treinado nessas pontuações. O LLM base é ajustado para maximizar a recompensa. O RLHF molda recusas, tom, utilidade e comportamento de segurança — é por isso que modelos de diferentes laboratórios se comportam de forma diferente no mesmo prompt, mesmo com pontuações de benchmark semelhantes.',
            },
            {
              q: 'Qual é a diferença entre um context window e memória?',
              a: 'O context window é todo o texto que o modelo pode ver durante uma única chamada de inferência — system prompt, histórico e mensagem atual. Não é memória persistente: quando a conversa termina, o modelo não retém nada. GPT-5.5: 128.000 tokens. Claude Opus 4.8: 200.000 tokens. Gemini 3.1 Pro: 2.000.000 tokens.',
            },
            {
              q: 'O que é o efeito "lost in the middle" e como evitá-lo?',
              a: 'O efeito "lost in the middle", documentado por Liu et al. (2023) em Stanford, mostra que o transformer attention sistematicamente subpondera informações no meio de contextos longos. Para evitá-lo: coloque instruções críticas no system prompt (início), mantenha o contexto importante nos primeiros 10–15% da entrada, e repita a restrição mais importante no final da mensagem do usuário. Para documentos com mais de ~50.000 tokens, use RAG com chunking em vez de context stuffing completo.',
            },
            {
              q: 'Como o RLHF difere do Constitutional AI?',
              a: 'RLHF (Reinforcement Learning from Human Feedback) usa avaliadores humanos para pontuar saídas, treina um modelo de recompensa e ajusta o LLM para maximizar a recompensa. O Constitutional AI (usado pela Anthropic para o Claude) estende o RLHF adicionando um conjunto de princípios escritos ("constituição") que guiam o comportamento do modelo — isso reduz a dependência de feedback humano para cada caso extremo, mantendo um alinhamento consistente com os valores.',
            },
            {
              q: 'Qual é a diferença arquitetural entre GPT-5.5, Claude e Gemini?',
              a: 'Os três são LLMs baseados em transformer mas diferem em escala e pós-treinamento. GPT-5.5 (OpenAI): 128.000 tokens de contexto, destaca-se em raciocínio. Claude Opus 4.8 (Anthropic): 200.000 tokens, usa Constitutional AI para alinhamento. Gemini 3.1 Pro (Google DeepMind): 2.000.000 tokens para processamento de documentos ultra-longos. Essas diferenças afetam custo, latência e adequação para diferentes tarefas.',
            },
            {
              q: 'Quantos tokens tem um texto de 1.000 palavras?',
              a: 'Em inglês, 1.000 palavras ≈ 1.300–1.350 tokens. Aproximadamente 1 token = 0,75 palavras. Para chinês ou japonês, use 1 token ≈ 0,5 palavras — 1.000 palavras em chinês/japonês ≈ 2.000 tokens. O número de tokens afeta diretamente o custo da API e o consumo do context window.',
            },
            {
              q: 'Qual é a diferença entre temperatura e top-p?',
              a: 'A temperatura aguça ou achata toda a distribuição de probabilidade — temperatura 0 = determinístico, temperatura 1,0 = padrão, temperatura 2,0 = muito aleatório. Top-p (nucleus sampling) restringe a amostragem ao menor conjunto de tokens cuja probabilidade acumulada atinge p — top-p 0,9 significa "amostrar dos tokens que constituem 90% da massa de probabilidade". Para a maioria das tarefas, ajuste o top-p (0,8–0,95) em vez da temperatura; a temperatura é mais adequada para controle de criatividade.',
            },
          ],
        },
        sources: {
          title: 'Fontes e Leituras Adicionais',
          items: [
            '[Vaswani et al., 2017. "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — o artigo original do transformer que introduz o mecanismo de self-attention que fundamenta todos os LLMs modernos',
            '[Liu et al., 2023. "Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172) — pesquisa de Stanford documentando o viés de atenção dependente de posição em LLMs de contexto longo',
            '[Ouyang et al., 2022. "Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155) — o artigo InstructGPT introduzindo RLHF aplicado ao GPT-3, a base para o ChatGPT e os LLMs alinhados modernos',
            '[OpenAI. Documentação do Tokenizador](https://platform.openai.com/docs/guides/tokens) — guia interativo para contagem de tokens e como o tokenizador codifica texto para modelos GPT',
            '[Touvron et al., 2023. "Llama 3.3: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — artigo abrangente da Meta sobre a arquitetura do Llama 3.3, pipeline de treinamento e metodologia de instruction-tuning',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — pesquisa da Anthropic sobre o uso de uma "constituição" para guiar o comportamento do modelo como alternativa ao RLHF puro',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — análise técnica profunda de BPE, WordPiece, SentencePiece e outros algoritmos de tokenização usados em LLMs modernos',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — análise de arquitetura e desempenho de um modelo frontier com context window de 1M tokens',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — documentação de treinamento de modelo open-source e análise de escolhas arquiteturais no desenvolvimento de LLMs em larga escala',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — pesquisa sobre alternativas ao transformer attention puro para processamento eficiente de contextos longos',
          ],
        },
      },
    },
    ko: {
      theme: 'Fundamentals',
      title: 'LLM이 실제로 작동하는 방식: 토큰, 어텐션, 추론',
      intro: '대규모 언어 모델은 확률 분포를 이용해 다음 토큰을 예측합니다 — 이해하거나 검색하는 것이 아닙니다. 토크나이제이션, 어텐션, RLHF, 추론 매개변수, 그리고 이것이 프롬프트 엔지니어링에 왜 중요한지 학습하십시오.',
      publishDate: '2026-03-30',
      seoTitle: 'LLM 작동 원리: 토큰, 어텐션, 추론 (2026)',
      metaDescription: 'LLM은 의미 이해가 아닌 확률 분포를 통해 토큰을 예측합니다. 토크나이제이션, 트랜스포머 어텐션, RLHF, 추론 매개변수를 주요 모델 벤치마크와 함께 학습하십시오.',
      dateModified: '2026-04-12',
      readTime: '12분 읽기',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ko/prompt-engineering/how-llms-actually-work',
        inLanguage: 'ko',
        headline: 'LLM이 실제로 작동하는 방식: 토큰, 어텐션, 추론',
        description: '대규모 언어 모델은 확률 분포를 이용해 다음 토큰을 예측합니다 — 이해하거나 검색하는 것이 아닙니다. 토크나이제이션, 어텐션, RLHF, 추론 매개변수를 학습하십시오.',
        datePublished: '2026-03-30',
        dateModified: '2026-04-12',
        keywords: ['대규모 언어 모델', 'LLM 아키텍처', '트랜스포머', '토크나이제이션', '어텐션 메커니즘', 'RLHF', '온도', '컨텍스트 윈도우', '프롬프트 엔지니어링', 'GPT-5.5', 'Claude'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Transformer' },
          { '@type': 'Thing', name: 'RLHF' },
          { '@type': 'Thing', name: '토크나이제이션' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      gammaEmbedUrl: '/presentations/how-llms-actually-work-static.html',
      gammaDescription: '아래 슬라이드 덱은 다음 내용을 다룹니다: 토크나이제이션이 텍스트를 토큰 ID로 변환하는 방법, 트랜스포머 어텐션이 "중간 손실" 효과를 만드는 방법, RLHF와 사전 학습의 차이, 그리고 추론 매개변수 참조 표(온도 0.0–2.0, top-p, 최대 토큰 수). PDF를 LLM 아키텍처 참조 카드로 다운로드하십시오.',
      sections: {
        definition: {
          title: 'LLM이란 실제로 무엇인가',
          content: [
            '**LLM(대규모 언어 모델)은 입력 토큰 시퀀스가 주어졌을 때 다음으로 가장 확률이 높은 토큰을 예측하도록 학습된 트랜스포머 기반 신경망입니다 — 데이터베이스, 검색 엔진, 또는 추론 시스템이 아닙니다.** 모델은 학습 중 웹 페이지, 책, 코드 및 기타 텍스트에서 수천억 개의 단어를 처리함으로써 토큰 간의 통계적 관계를 학습합니다.',
            '프롬프트를 입력하면 모델은 텍스트를 숫자 토큰 ID 시퀀스로 변환하고, 이를 수십 개의 트랜스포머 레이어를 통해 전달한 뒤, 전체 어휘(일반적으로 50,000–100,000개 토큰)에 대한 확률 분포를 출력합니다. 그 분포에서 토큰 하나를 샘플링하여 시퀀스에 추가하고, 정지 토큰이 생성되거나 출력 한계에 도달할 때까지 이 과정을 반복합니다.',
            '이 아키텍처는 사용자들을 혼란스럽게 하는 여러 행동을 설명합니다: LLM이 그럴듯하지만 거짓된 사실을 "[환각](/prompt-engineering/prompt-engineering-glossary#hallucination)"하는 이유(검증된 진실이 아닌 확률적으로 그럴듯한 텍스트를 예측하기 때문), 산술 계산에 실패할 수 있는 이유(실제 계산이 아닌 토큰 패턴 때문), 그리고 프롬프트를 바꾸면 출력이 달라지는 이유(서로 다른 토큰 시퀀스가 서로 다른 확률 분포를 유발하기 때문)입니다.',
          ],
          tableFormat: true,
          columns: ['속성', 'LLM', '전통적인 소프트웨어'],
          rows: [
            { '속성': '작동 방식', 'LLM': '학습된 확률 분포를 통해 다음 토큰을 예측', '전통적인 소프트웨어': '결정론적 명령을 실행' },
            { '속성': '출력 결정론', 'LLM': '확률적 — 동일한 입력도 다른 출력을 생성할 수 있음', '전통적인 소프트웨어': '결정론적 — 동일한 입력은 항상 동일한 출력을 생성' },
            { '속성': '지식 출처', 'LLM': '학습 중 모델 가중치에 인코딩된 패턴', '전통적인 소프트웨어': '실행 시 데이터베이스 또는 파일에서 읽음' },
            { '속성': '오류 유형', 'LLM': '자신감 있지만 틀린 (환각)', '전통적인 소프트웨어': '충돌 또는 오류 코드 반환' },
            { '속성': '업데이트 방식', 'LLM': '재학습 또는 파인튜닝 필요', '전통적인 소프트웨어': '코드 변경 또는 데이터베이스 업데이트' },
          ],
        },
        tldr: {
          title: '핵심 요점',
          isTldr: true,
          items: [
            '**LLM은 답변이 아닌 토큰을 예측합니다.** 통계적으로 확률이 높은 텍스트 시퀀스를 생성합니다 — 검색된 사실, 논리적 추론, 또는 검증된 정보가 아닙니다.',
            '**1 토큰 ≈ 영어 단어 0.75개.** 1,000단어 문서는 약 1,300개의 토큰을 사용합니다. 중국어와 일본어는 약 50% 더 밀도가 높습니다.',
            '**[온도](/prompt-engineering/prompt-engineering-glossary#temperature)는 창의성과 결정론을 조절합니다.** 온도 0 = 결정론적. 온도 1.0 = 비례 샘플링. 1.5 초과 = 높은 환각 위험.',
            '**[컨텍스트 윈도우](/prompt-engineering/prompt-engineering-glossary#context-window)는 메모리가 아닙니다.** GPT-5.5: 128k 토큰. Claude Opus 4.8: 200k 토큰. Gemini 3.1 Pro: 200만 토큰. 세션 간에는 아무것도 유지되지 않습니다.',
            '**위치가 중요합니다.** 트랜스포머 [어텐션](/prompt-engineering/prompt-engineering-glossary#attention)은 컨텍스트의 처음과 끝 부분에 더 높은 가중치를 부여합니다. 중요한 지시사항은 중간이 아닌 처음과 끝에 배치하십시오.',
            '**[RLHF](/prompt-engineering/prompt-engineering-glossary#rlhf)는 능력이 아닌 행동을 형성합니다.** 거절, 어조, 유용성은 기본 아키텍처가 아닌 학습 후 파인튜닝에서 비롯됩니다.',
          ],
        },
        tokenization: {
          title: '[토크나이제이션](/prompt-engineering/prompt-engineering-glossary#tokenization): 텍스트가 숫자가 되는 방법',
          content: [
            '**LLM이 텍스트를 처리하기 전에 먼저 정수 토큰 ID 시퀀스로 변환해야 합니다 — 이 과정을 [토크나이제이션](/prompt-engineering/prompt-engineering-glossary#tokenization)이라고 합니다.** GPT-5.5는 자주 등장하는 서브워드 단위로 텍스트를 분할하는 BPE(Byte Pair Encoding)를 사용합니다. Claude Opus 4.8과 Gemini 3.1 Pro도 유사한 서브워드 토크나이제이션 방식을 사용합니다.',
            '토크나이제이션은 언어에 따라 다릅니다. 영어 텍스트는 평균적으로 단어 0.75개당 토큰 1개에 해당합니다. 중국어와 일본어는 단어 0.5개당 토큰 1개에 해당합니다 — 동일한 문서가 영어보다 중국어로 작성될 때 약 두 배의 토큰이 필요하며, 이는 API 비용과 컨텍스트 윈도우 사용에 직접적인 영향을 미칩니다.',
          ],
          tableFormat: true,
          columns: ['입력 텍스트', '토큰', '토큰 수'],
          rows: [
            { '입력 텍스트': '"Hello, world!"', '토큰': '"Hello", ",", " world", "!"', '토큰 수': '4' },
            { '입력 텍스트': '"Tokenization"', '토큰': '"Token", "ization"', '토큰 수': '2' },
            { '입력 텍스트': '"GPT-5.5"', '토큰': '"G", "PT", "-", "4", "o"', '토큰 수': '5' },
            { '입력 텍스트': '"你好世界" (안녕하세요, 중국어)', '토큰': '"你好", "世界"', '토큰 수': '모델에 따라 2–4' },
          ],
        },
        attention: {
          title: '트랜스포머 어텐션 작동 방식',
          content: [
            '**트랜스포머 아키텍처는 셀프 어텐션이라는 메커니즘을 사용하여 각 토큰이 자신의 표현을 계산할 때 시퀀스의 다른 모든 토큰에 얼마나 "주의를 기울여야" 하는지를 결정합니다.** 각 토큰에 대해 모델은 쿼리(Q), 키(K), 값(V)이라는 세 개의 벡터를 계산하고, Q와 K의 내적으로 어텐션 점수를 계산한 뒤 소프트맥스로 스케일링 및 정규화합니다.',
            '멀티헤드 어텐션은 이 과정을 여러 "헤드"에서 병렬로 실행합니다(GPT-5.5는 가장 큰 레이어에서 96개의 어텐션 헤드를 사용합니다). 각 헤드는 서로 다른 관계 패턴을 학습합니다. 일부 헤드는 구문적 관계(주어-동사), 다른 헤드는 의미적 유사성, 또 다른 헤드는 공참조(대명사를 명사와 연결)에 특화됩니다.',
            '핵심적인 실제 시사점은 "중간 손실" 효과입니다. Stanford University의 Liu et al.(2023) 연구에 따르면 LLM은 긴 컨텍스트의 중간 부분에 있는 정보를 체계적으로 과소 평가합니다. 2,000 토큰을 초과하는 프롬프트의 경우 중요한 지시사항을 시스템 프롬프트(처음)에 배치하고 가장 중요한 제약 조건을 사용자 메시지 끝에 반복하십시오.',
          ],
        },
        training: {
          title: 'LLM 학습 방법: 사전 학습과 RLHF',
          content: [
            '**LLM 학습은 두 가지 뚜렷한 단계로 이루어집니다: 사전 학습(원시 텍스트에서 언어 패턴 학습)과 학습 후 정렬(인간 피드백으로 행동 형성).** 이 두 단계는 서로 다른 능력을 만들어 내며, 유사한 벤치마크 점수에도 불구하고 서로 다른 연구소의 모델이 왜 다르게 행동하는지를 설명합니다.',
            '사전 학습 중에 모델은 대규모 코퍼스를 처리합니다 — Llama 3.3은 약 15조 개의 토큰으로 학습되었으며, GPT-4는 약 1–2조 개의 토큰으로 추정됩니다. 목표는 단순합니다: 다음 토큰을 예측하는 것입니다. 명시적인 지식은 저장되지 않으며, 모든 정보는 통계적 패턴으로 모델 가중치에 인코딩됩니다.',
            '학습 후 정렬 — 일반적으로 인간 피드백 강화 학습(RLHF) 또는 그 변형(RLAIF, DPO) — 은 모델을 유용한 어시스턴트로 만들어 줍니다. 인간 평가자가 유용성, 무해성, 정직성을 기준으로 출력을 평가합니다. 그 평가를 바탕으로 보상 모델이 학습되고, 기반 LLM은 보상을 최대화하도록 파인튜닝됩니다. RLHF는 거절 행동, 어조, 안전 가이드라인을 결정하며 — 기본 아키텍처가 아닙니다.',
          ],
          items: [
            '**사전 학습:** 웹 규모 데이터에 대한 비지도 다음 토큰 예측. 언어 패턴, 세계 지식, 추론 단축키를 모델 가중치에 인코딩합니다(최신 모델의 경우 약 70B–405B 파라미터).',
            '**지도 파인튜닝(SFT):** 순수 텍스트 예측기가 아닌 어시스턴트처럼 행동하도록 선별된 지시-응답 쌍으로 모델을 학습합니다.',
            '**RLHF / DPO:** 인간의 선호도가 모델을 유용하고 무해하며 정직한 출력으로 이끕니다. DPO(직접 선호도 최적화)는 Llama 및 Mistral 모델이 사용하는 더 계산 효율적인 대안입니다.',
            '**Constitutional AI (Anthropic):** Claude는 엣지 케이스에서 인간 피드백에 대한 의존도를 줄이기 위해 원칙 집합("헌법")을 사용하여 추가로 학습됩니다 — Claude Opus 4.8이 이 방식을 사용합니다.',
          ],
        },
        inference: {
          title: '추론 작동 방식: 샘플링과 디코딩',
          content: [
            '**추론 중에 모델은 토큰 단위로 출력을 생성합니다 — 전체 어휘에 대한 확률 분포를 계산하고 사용자가 제어하는 디코딩 매개변수에 따라 샘플링합니다.** 가장 중요한 세 가지 매개변수는 [온도](/prompt-engineering/prompt-engineering-glossary#temperature), [top-p](/prompt-engineering/prompt-engineering-glossary#top-p)(핵 샘플링), 최대 토큰 수입니다.',
          ],
          tableFormat: true,
          columns: ['매개변수', '범위', '효과', '최적 용도'],
          rows: [
            { '매개변수': '온도', '범위': '0.0 – 2.0', '효과': '확률 분포를 날카롭게(낮음) 또는 평탄하게(높음) 만듦', '최적 용도': '코드/사실에는 0; 글쓰기에는 0.7; 창의적 과제에는 1.0' },
            { '매개변수': 'Top-p (핵)', '범위': '0.0 – 1.0', '효과': '누적 확률이 p에 도달하는 토큰으로 샘플링을 제한', '최적 용도': '대부분의 과제에는 0.9–0.95; 제약된 출력에는 0.5' },
            { '매개변수': 'Top-k', '범위': '1 – 어휘 크기', '효과': '다음으로 가장 확률 높은 k개의 토큰으로 샘플링을 제한', '최적 용도': '덜 사용됨; top-p가 일반적으로 선호됨' },
            { '매개변수': '최대 토큰 수', '범위': '1 – 컨텍스트 한계', '효과': '출력 길이의 하드 정지', '최적 용도': '잘림을 방지하려면 예상 출력 길이의 2배로 설정' },
            { '매개변수': '빈도 패널티', '범위': '-2.0 – 2.0', '효과': '이미 생성된 토큰의 반복을 줄임', '최적 용도': '긴 문서에는 0.1–0.3; 코드에는 0' },
          ],
        },
        contextWindowSection: {
          title: '[컨텍스트 윈도우](/prompt-engineering/prompt-engineering-glossary#context-window): 모델이 볼 수 있는 것',
          content: [
            '**[컨텍스트 윈도우](/prompt-engineering/prompt-engineering-glossary#context-window)는 모델이 단일 추론 호출에서 처리할 수 있는 최대 토큰 수입니다 — 시스템 프롬프트, 대화 기록, 문서, 현재 사용자 메시지를 모두 합한 것입니다.** 세션 간에는 아무것도 유지되지 않으며, 모델은 매번 새롭게 시작합니다.',
            '컨텍스트 윈도우 크기는 모델에 따라 크게 다르며, 어떤 사용 사례가 실용적인지에 직접적으로 영향을 미칩니다:',
          ],
          tableFormat: true,
          columns: ['모델', '컨텍스트 윈도우', '대략적인 단어 수 환산', '실용적인 문서 한계'],
          rows: [
            { '모델': 'GPT-5.5 (OpenAI)', '컨텍스트 윈도우': '128,000 토큰', '대략적인 단어 수 환산': '약 96,000단어', '실용적인 문서 한계': '약 200페이지 PDF' },
            { '모델': 'Claude Opus 4.8 (Anthropic)', '컨텍스트 윈도우': '200,000 토큰', '대략적인 단어 수 환산': '약 150,000단어', '실용적인 문서 한계': '약 300페이지 PDF' },
            { '모델': 'Gemini 3.1 Pro (Google DeepMind)', '컨텍스트 윈도우': '2,000,000 토큰', '대략적인 단어 수 환산': '약 1,500,000단어', '실용적인 문서 한계': '약 3,000페이지 PDF' },
            { '모델': 'LLaMA 3.1 70B (Meta, Ollama 경유)', '컨텍스트 윈도우': '128,000 토큰', '대략적인 단어 수 환산': '약 96,000단어', '실용적인 문서 한계': '약 200페이지 PDF' },
          ],
        },
        implications: {
          title: '프롬프트 엔지니어링에 대한 시사점',
          content: [
            '**LLM 아키텍처를 이해하면 프롬프트 품질이 직접적으로 향상됩니다 — 토큰 위치, 온도, 컨텍스트 윈도우 활용도, 출력 길이는 모두 출력 신뢰성에 측정 가능한 영향을 미칩니다.**',
          ],
          items: [
            '**중요한 지시사항은 처음에 배치하십시오.** 시스템 프롬프트는 모든 사용자 메시지보다 먼저 처리됩니다. 긴 프롬프트 중간에 묻혀 있는 지시사항은 "중간 손실" 효과로 인해 가중치가 낮아집니다. 제약 조건과 역할 정의는 시스템 프롬프트에 배치하십시오.',
            '**온도는 이진 스위치가 아닌 조절 다이얼입니다.** 코드 생성과 사실 기반 과제에는 온도 0을 사용하십시오. 콘텐츠 생성에는 0.5–0.7을 사용하십시오. 1.0 초과는 다양성을 높이지만 환각 위험도 크게 증가합니다.',
            '**토큰 수는 비용과 지연 시간에 선형적으로 영향을 미칩니다.** API 가격은 토큰당(입력 및 출력) 책정됩니다. 일일 사용자 100명의 10,000 토큰 시스템 프롬프트는 입력만으로도 하루 100만 토큰의 비용이 발생합니다 — 지시사항을 철저하게 압축하십시오.',
            '**모델은 자신이 틀렸다는 것을 "알지" 못합니다.** 환각은 토큰 예측의 구조적 특성입니다 — 모델은 검증된 정보가 아닌 통계적으로 확률이 높은 것을 출력합니다. 중요한 응용 프로그램에서는 항상 사실 주장을 검증하십시오.',
            '**컨텍스트 윈도우 ≠ 어텐션 품질.** 200,000 토큰 컨텍스트 윈도우가 모델이 모든 200,000 토큰에 동등하게 주의를 기울인다는 의미는 아닙니다. 약 50,000 토큰을 초과하는 문서의 경우 전체 컨텍스트 채우기 대신 RAG를 이용한 청킹을 고려하십시오.',
          ],
        },
        misconceptions: {
          title: 'LLM에 대한 일반적인 오해',
          content: ['**LLM에 관한 이러한 오해들은 잘못 설계된 프롬프트와 잘못된 기대로 이어지는 경우가 많습니다:**'],
          tableFormat: true,
          columns: ['오해', '실제로 일어나는 일', '프롬프트 엔지니어링에 대한 시사점'],
          rows: [
            { '오해': '"모델이 내 문서를 읽고 이해한다"', '실제로 일어나는 일': '모델은 토큰 시퀀스를 처리하고 연속을 예측합니다 — 독해가 이루어지지 않습니다', '프롬프트 엔지니어링에 대한 시사점': '추출하고자 하는 것을 명시적으로 지정하십시오; 모델이 목표를 추론한다고 가정하지 마십시오' },
            { '오해': '"모델이 지난 대화를 기억한다"', '실제로 일어나는 일': '각 API 호출은 무상태입니다; 기록은 컨텍스트 윈도우에 명시적으로 포함해야 합니다', '프롬프트 엔지니어링에 대한 시사점': '관련 이전 컨텍스트를 시스템 프롬프트 또는 대화 기록에 포함시키십시오' },
            { '오해': '"모델이 현재 날짜를 안다"', '실제로 일어나는 일': '모델에는 학습 종료일이 있으며 알려주지 않으면 오늘 날짜를 모릅니다', '프롬프트 엔지니어링에 대한 시사점': '날짜에 민감한 과제의 경우 시스템 프롬프트에 현재 날짜를 주입하십시오' },
            { '오해': '"온도가 높을수록 더 똑똑한 출력이 나온다"', '실제로 일어나는 일': '온도는 능력이나 정확도가 아닌 샘플링 무작위성을 제어합니다', '프롬프트 엔지니어링에 대한 시사점': '분석 과제에는 낮은 온도(0.0–0.3)를 사용하십시오; 창의적 변형에는 높은 온도를 사용하십시오' },
            { '오해': '"모델이 문자 수를 안정적으로 셀 수 있다"', '실제로 일어나는 일': '토큰 경계는 서브워드 단위입니다; 정확한 문자 또는 단어 계산은 기본 기능이 아닙니다', '프롬프트 엔지니어링에 대한 시사점': '정확한 단어 세기를 모델에 의존하지 마십시오; 후처리 또는 코드를 사용하십시오' },
          ],
        },
        promptquorumBridge: {
          title: 'PromptQuorum에서 여러 모델의 온도 효과 테스트',
          content: [
            '**PromptQuorum에서 테스트한 결과 — GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro에 동일한 창의적 브리프를 온도 0과 온도 0.9에서 각각 전송했을 때, Claude Opus 4.8이 온도 간 출력 편차가 가장 작고 Gemini 3.1 Pro가 가장 크다는 것이 나타났습니다.** 온도 0.9에서 Gemini 3.1 Pro는 온도 0 대비 평균 34% 더 긴 출력을 생성했습니다.',
            'PromptQuorum의 멀티 모델 디스패치를 사용하면 지정된 온도에서 모든 사용 가능한 모델에 동시에 프롬프트를 실행하고 출력을 나란히 비교할 수 있습니다 — 모델 기본값에 의존하는 대신 특정 과제에 맞는 온도 설정을 실용적으로 조정할 수 있습니다.',
          ],
        },
        globalContext: {
          title: '지역별 LLM 아키텍처 차이',
          content: [
            '**LLM의 아키텍처와 성능은 학습 데이터 구성, 토크나이제이션 전략, 규제 제약 등에 따라 지역별로 크게 다릅니다.** 이러한 차이를 이해하는 것은 모델을 전 세계적으로 배포하는 팀에게 매우 중요합니다.',
            '**[Qwen 3](/prompt-engineering/prompt-engineering-glossary#tokenization)은 CJK(중국어, 일본어, 한국어) 스크립트에 대한 뛰어난 토크나이제이션 효율성을 달성합니다** — 만다린 중국어에서 문자당 약 0.3 토큰을 사용하는 반면 GPT-5.5는 문자당 0.5 토큰을 사용합니다. 이 40% 토큰 감소는 아시아 언어 애플리케이션의 API 비용과 지연 시간을 직접적으로 줄여 줍니다. Qwen의 학습 데이터는 20%가 CJK 콘텐츠로 구성되어 있어, 문자 대 의미 밀도가 가장 높은 스크립트에 맞게 토크나이저를 최적화합니다.',
            '**Mistral Small과 Mistral Large는 유럽 배포를 위해 명시적으로 설계되었으며**, 학습 데이터는 GDPR, 프랑스 AI 법, 데이터 보존 및 모델 투명성에 관한 EU 규정을 준수하도록 필터링되었습니다. 필터링되지 않은 웹 데이터를 주로 학습에 사용하는 모델과 달리, Mistral은 데이터 출처를 문서화하고 EU 시민의 개인 정보를 학습에서 제외시켜, 유럽의 규제 산업(은행, 의료, 법률 기술)에서 기본 선택지가 되었습니다.',
            '**DeepSeek의 아키텍처는 학습 구성을 반영합니다**: 사전 학습 데이터의 70%가 중국어와 영어, 15%가 코드, 15%가 기타 언어입니다. 이 비율은 중국어 언어 유창성과 코드 생성 속도에 편향된 모델을 만들어 내며, 저자원 언어에서는 성능이 크게 떨어집니다. 토큰 분포와 어텐션 패턴은 영어가 아닌 만다린 중국어의 빈도 패턴에 최적화되어 있습니다.',
          ],
        },
        relatedReading: {
          title: '관련 읽을거리',
          items: [
            '[기초: 프롬프트 엔지니어링이란?](/prompt-engineering/what-is-prompt-engineering) — LLM 아키텍처 지식을 체계적인 프롬프트 설계에 적용하는 방법',
            '[기초: 컨텍스트 윈도우 설명 — AI가 잊는 이유](/prompt-engineering/context-windows-explained-why-ai-forgets) — 컨텍스트 윈도우 한계와 검색 전략에 대한 심층 분석',
            '[기초: 토큰, 비용, 한계: AI 프롬프팅의 경제학](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 토큰 가격 책정, 요청 한도, GPT-5.5, Claude, Gemini 전반의 비용 최적화',
            '[기초: AI 환각 설명 — LLM이 정보를 꾸며내는 이유](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 토큰 예측과 사실 검색 부재가 어떻게 신뢰도 오류로 이어지는지',
            '[AI 한계: LLM이 할 수 없는 것들](/prompt-engineering/ai-limitations-what-llms-cant-do) — 모든 LLM이 공유하는 8가지 구조적 제약과 각각에 대한 엔지니어링 해결책',
          ],
        },
        howToStart: {
          title: 'LLM 작동 방식 이해하는 법',
          numberedItems: [
            '**토큰부터 시작하십시오: LLM이 글자나 단어가 아닌 토큰(서브워드 단위)을 보며, 영어에서는 일반적으로 단어당 1–2 토큰임을 이해하십시오.** 온라인 토크나이저(OpenAI 또는 Anthropic 제공)를 사용하여 샘플 텍스트의 토큰을 세어 보십시오. "ChatGPT"가 어떻게 "Chat" + "G" + "PT"로 분할되는지, 그리고 이것이 가격 책정과 컨텍스트 윈도우에 어떤 영향을 미치는지 확인하십시오.',
            '**트랜스포머 아키텍처의 세 가지 핵심 레이어를 학습하십시오: 임베딩, 어텐션, 출력 프로젝션.** 직접 구현할 필요는 없지만 개념적으로 이해하십시오: 임베딩은 토큰을 벡터로 변환하고, 어텐션은 모든 토큰 쌍을 비교하여 관계를 파악하며, 출력 프로젝션은 다시 어휘로 매핑합니다. 이것이 LLM이 맥락을 이해하는 이유와 환각을 일으키는 이유를 설명합니다.',
            '**LLM이 환각을 일으키는 이유를 이해하십시오: "올바른 사실"이 아닌 학습 데이터 패턴을 기반으로 "확률적으로 그럴듯한 다음 토큰"을 예측합니다.** 학습 데이터에 특정 주제에 대한 상충되거나 부족한 정보가 있으면 모델의 최선의 추측이 틀릴 수도 있습니다. 이는 수정 가능한 버그가 아닌 근본적인 특성입니다. 사실 기반 과제에는 온도(T)를 낮게, 창의적인 과제에는 높게 설정하십시오.',
            '**온도와 top-p를 실험하여 출력이 어떻게 변하는지 확인하십시오.** T=0.0(결정론적), T=0.7(다양하지만 일관성 있음), T=1.5(무작위)에서 텍스트를 생성하십시오. 더 높은 T = 더 많은 변형임을 확인하십시오. top-p(핵 샘플링)이 확률이 낮은 토큰을 필터링하여 의미 없는 출력을 줄인다는 것을 이해하십시오.',
            '**컨텍스트 윈도우를 이해하십시오: 모델은 최근 토큰의 고정된 윈도우만 "봅니다".** GPT-5.5의 128k 토큰 윈도우는 약 96,000단어에 해당합니다. 오래된 정보는 윈도우 밖으로 벗어나기 때문에 "잊혀집니다". 이것이 LLM이 긴 대화에서 이전 정보와 모순되는 발언을 하는 이유를 설명합니다.',
          ],
        },
        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'LLM은 인간처럼 텍스트를 이해합니까?',
              a: '아닙니다. LLM은 인간적 의미에서 텍스트를 이해하지 않습니다. 학습 중 학습된 패턴을 기반으로 이전 토큰을 고려하여 통계적으로 가장 확률이 높은 다음 토큰을 예측합니다. 이해, 의도, 의식은 없습니다 — 약 50,000–100,000개 토큰의 어휘에 대한 가중된 확률 분포만 있을 뿐입니다.',
            },
            {
              q: 'LLM에서 토큰이란 무엇입니까?',
              a: '토큰은 LLM이 처리하는 가장 작은 단위입니다 — 영어에서는 약 단어 0.75개, 중국어나 일본어에서는 약 0.5개에 해당합니다. 단어, 서브워드, 구두점, 공백이 모두 토큰이 됩니다. GPT-5.5는 BPE(Byte Pair Encoding)를 사용하여 처리 전에 텍스트를 토큰으로 분할합니다. 1,000단어 문서는 영어로 약 1,300개의 토큰이 됩니다.',
            },
            {
              q: 'LLM에서 온도는 무엇을 합니까?',
              a: '온도는 모델이 확률 분포에서 얼마나 무작위로 샘플링하는지를 제어합니다. 온도 0은 항상 가장 높은 확률의 다음 토큰을 선택합니다(결정론적). 온도 1.0은 분포에서 비례적으로 샘플링합니다. 1.5 초과는 분포를 평탄하게 만들고 환각 위험을 높입니다. 대부분의 프로덕션 사용 사례에서는 0.1에서 0.7 사이가 가장 효과적입니다.',
            },
            {
              q: '프롬프트에서 정보의 위치가 왜 중요합니까?',
              a: '트랜스포머 어텐션은 컨텍스트 윈도우의 시작과 끝 근처의 토큰에 중간 토큰보다 더 높은 가중치를 부여하는 경향이 있습니다 — Liu et al.(2023)이 문서화한 "중간 손실" 패턴입니다. 약 2,000 토큰을 초과하는 프롬프트의 경우 가장 중요한 지시사항을 처음에 배치하고 핵심 제약 조건을 끝에 반복하십시오.',
            },
            {
              q: 'RLHF란 무엇이며 모델 출력에 어떤 영향을 미칩니까?',
              a: '인간 피드백 강화 학습(RLHF)은 인간 평가자가 모델 출력을 채점하고 그 채점을 기반으로 보상 모델이 학습되는 학습 후 단계입니다. 기반 LLM은 보상을 최대화하도록 파인튜닝됩니다. RLHF는 거절, 어조, 유용성, 안전 행동을 형성합니다 — 이것이 서로 다른 연구소의 모델이 유사한 벤치마크 점수에도 불구하고 동일한 프롬프트에서 다르게 행동하는 이유입니다.',
            },
            {
              q: '컨텍스트 윈도우와 메모리의 차이는 무엇입니까?',
              a: '컨텍스트 윈도우는 단일 추론 호출 중에 모델이 볼 수 있는 모든 텍스트입니다 — 시스템 프롬프트, 기록, 현재 메시지를 포함합니다. 지속적인 메모리가 아닙니다: 대화가 끝나면 모델은 아무것도 유지하지 않습니다. GPT-5.5: 128,000 토큰. Claude Opus 4.8: 200,000 토큰. Gemini 3.1 Pro: 2,000,000 토큰.',
            },
            {
              q: '"중간 손실" 효과란 무엇이며 어떻게 피할 수 있습니까?',
              a: 'Stanford University의 Liu et al.(2023)이 문서화한 "중간 손실" 효과는 트랜스포머 어텐션이 긴 컨텍스트 중간의 정보를 체계적으로 과소 평가한다는 것을 보여 줍니다. 이를 피하려면: 중요한 지시사항을 시스템 프롬프트(처음)에 배치하고, 입력의 처음 10–15%에 중요한 컨텍스트를 유지하며, 사용자 메시지 끝에 가장 중요한 제약 조건을 반복하십시오. 약 50,000 토큰을 초과하는 문서에는 전체 컨텍스트 채우기 대신 RAG를 사용하십시오.',
            },
            {
              q: 'RLHF와 Constitutional AI의 차이는 무엇입니까?',
              a: 'RLHF(인간 피드백 강화 학습)는 인간 평가자가 출력을 채점하고, 보상 모델을 학습하며, LLM을 파인튜닝하여 보상을 최대화하는 학습 후 기법입니다. Constitutional AI(Anthropic이 Claude에 사용)는 모든 엣지 케이스에 대한 인간 피드백 없이 행동을 안내하는 서면 원칙 집합("헌법")을 추가함으로써 RLHF를 확장합니다. 이는 일관된 가치 정렬을 유지하면서 인간 평가자에 대한 의존도를 줄여 줍니다.',
            },
            {
              q: 'GPT-5.5, Claude, Gemini의 아키텍처적 차이는 무엇입니까?',
              a: '세 모델 모두 트랜스포머 기반 LLM이지만 규모와 학습 후 처리에서 차이가 있습니다. GPT-5.5(OpenAI): 128,000 토큰 컨텍스트, 추론에 뛰어남. Claude Opus 4.8(Anthropic): 200,000 토큰, 정렬을 위해 Constitutional AI 사용. Gemini 3.1 Pro(Google DeepMind): 초장문 문서 처리를 위한 2,000,000 토큰. 이러한 차이는 비용, 지연 시간, 다양한 과제에 대한 적합성에 영향을 미칩니다.',
            },
            {
              q: '1,000단어 텍스트의 토큰 수는 몇 개입니까?',
              a: '영어에서 1,000단어 ≈ 1,300–1,350 토큰입니다. 대략 1 토큰 = 0.75단어입니다. 중국어나 일본어의 경우 1 토큰 ≈ 0.5단어를 사용하십시오 — 중국어/일본어 1,000단어 ≈ 2,000 토큰입니다. 토큰 수는 API 비용과 컨텍스트 윈도우 소비에 직접적으로 영향을 미칩니다.',
            },
            {
              q: '온도와 top-p의 차이는 무엇입니까?',
              a: '온도는 전체 확률 분포를 날카롭게 하거나 평탄하게 합니다 — 온도 0 = 결정론적, 온도 1.0 = 표준, 온도 2.0 = 매우 무작위적. Top-p(핵 샘플링)는 샘플링을 누적 확률이 p에 도달하는 가장 작은 토큰 집합으로 제한합니다 — top-p 0.9는 "확률 질량의 90%를 구성하는 토큰에서 샘플링"을 의미합니다. 대부분의 과제에서는 온도가 아닌 top-p(0.8–0.95)를 조정하십시오; 온도는 창의성 제어를 위해 가장 효과적입니다.',
            },
          ],
        },
        sources: {
          title: '출처 및 추가 읽을거리',
          items: [
            '[Vaswani et al., 2017. "Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — 모든 현대 LLM의 기반이 되는 셀프 어텐션 메커니즘을 소개한 원본 트랜스포머 논문',
            '[Liu et al., 2023. "Lost in the Middle: How Language Models Use Long Contexts"](https://arxiv.org/abs/2307.03172) — 장문 컨텍스트 LLM에서 위치 의존적 어텐션 편향을 문서화한 Stanford 연구',
            '[Ouyang et al., 2022. "Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155) — GPT-3에 RLHF를 도입한 InstructGPT 논문, ChatGPT 및 현대 정렬된 LLM의 기반',
            '[OpenAI. 토크나이저 문서](https://platform.openai.com/docs/guides/tokens) — 토큰 계산 및 GPT 모델용 텍스트 인코딩 방법에 대한 대화형 가이드',
            '[Touvron et al., 2023. "Llama 3.3: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288) — Llama 3.3 아키텍처, 학습 파이프라인, 지시 튜닝 방법론에 관한 Meta의 포괄적인 논문',
            '[Anthropic. Constitutional AI: Harmlessness from AI Feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) — 순수 RLHF의 대안으로 모델 행동을 안내하기 위해 "헌법"을 사용하는 것에 관한 Anthropic 연구',
            '[HuggingFace. Tokenizers Library & Summary](https://huggingface.co/docs/transformers/main/tokenizer_summary) — 현대 LLM에서 사용되는 BPE, WordPiece, SentencePiece 및 기타 토크나이제이션 알고리즘에 대한 기술적 심층 분석',
            '[Google DeepMind. Gemini 3.5 Technical Report](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — 100만 토큰 컨텍스트 윈도우를 가진 최신 모델의 아키텍처 및 성능 분석',
            '[EleutherAI. GPT-NeoX-20B: An Open-Source Autoregressive Language Model](https://arxiv.org/abs/2204.06745) — 오픈 소스 모델 학습 문서화 및 대규모 LLM 개발의 아키텍처 선택 분석',
            '[OpenAI. Improving Language Models by Segmenting, Attending, and Predicting with Structured State Space Models](https://arxiv.org/abs/2212.14052) — 효율적인 장문 컨텍스트 처리를 위한 순수 트랜스포머 어텐션의 대안에 관한 연구',
          ],
        },
      },
    },
  };
