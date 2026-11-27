// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: fundamentals-of-prompt-optimization
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('fundamentals-of-prompt-optimization');

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-02-26',
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-en.webp',
      title: 'How to Optimize Prompts: Prompt Optimization Techniques & Best Practices',
      seoTitle: 'How to Optimize Prompts in 2026: 6 Levers + 6-Step Process',
      intro: '**Prompt optimization is the iterative process of revising a prompt to improve AI output quality, consistency, or accuracy.** This comprehensive guide teaches prompt optimization techniques and fundamentals: the 6 core levers, a 6-step optimization process, before/after examples for GPT-5.6, Claude, and Gemini, and the 7 most common mistakes to avoid when optimizing prompts.',
      metaDescription: 'How to optimize prompts with 6 levers and a 6-step process. Before/after examples for GPT-5.6, Claude and Gemini, plus 7 common mistakes to avoid.',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '14 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Optimization',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: 'How to Optimize Prompts: Prompt Optimization Techniques & Best Practices',
        description: 'Learn prompt optimization techniques and best practices: 6 core levers, 6-step process, before/after examples. How to improve AI prompts across GPT-5.6, Claude, Gemini — fundamentals for all models.',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['prompt optimization', 'prompt optimization techniques', 'how to optimize prompts', 'improve AI prompts', 'prompt engineering fundamentals', 'LLM optimization', 'GPT-5.6', 'Claude', 'Gemini', 'few-shot prompting', 'chain-of-thought'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'Prompt optimization' },
          { '@type': 'Thing', name: 'Few-shot prompting' },
          { '@type': 'Thing', name: 'Chain-of-thought prompting' },
          { '@type': 'Thing', name: 'LLM output quality' },
          { '@type': 'Thing', name: 'AI prompt engineering' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'en'),
        url: 'https://www.promptquorum.com/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'en',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'The 6 Prompt Optimization Levers',
        description: 'The six independent variables that determine AI output quality — each can be adjusted to fix a specific prompt failure mode.',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Specificity', description: 'How precisely the task is defined. Optimization move: rewrite vague objective as exact instruction. Example: \'Summarize\' → \'List 3 key findings in ≤20 words each\'.' },
          { '@type': 'ListItem', position: 2, name: 'Context', description: 'Information the model has to work with. Optimization move: add background, audience, and constraints. Example: \'Write a report\' → \'Write a report for a non-technical CFO\'.' },
          { '@type': 'ListItem', position: 3, name: 'Examples', description: 'The model\'s understanding of desired output format. Optimization move: add 1–3 input/output pairs (few-shot). Show the exact format you want, once.' },
          { '@type': 'ListItem', position: 4, name: 'Constraints', description: 'Boundaries on what the model can output. Optimization move: add explicit prohibitions. Example: \'Do not use jargon. Maximum 150 words\'.' },
          { '@type': 'ListItem', position: 5, name: 'Output format', description: 'Structure of the response. Optimization move: specify format explicitly. Example: \'Respond in JSON: {title, summary, tags[]}\'.' },
          { '@type': 'ListItem', position: 6, name: 'Role/persona', description: 'Expertise level the model adopts. Optimization move: add a specific role. Example: \'Act as a senior data analyst at a B2B SaaS company\'.' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Optimize a Prompt in 6 Steps',
        description: 'A systematic 6-step process to diagnose prompt failures and improve AI output quality across GPT-5.6, Claude, and Gemini.',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Establish a baseline', text: 'Run the current prompt 3 times on representative inputs. Document the failure mode: wrong format, hallucination, vague output, or off-topic response.' },
          { '@type': 'HowToStep', position: 2, name: 'Identify the root lever', text: 'Map the failure to one of 6 levers: specificity, context, examples, constraints, output format, or role/persona.' },
          { '@type': 'HowToStep', position: 3, name: 'Change one variable only', text: 'Make a single targeted change to the identified lever. Do not change multiple variables simultaneously — you cannot diagnose improvement if multiple things change.' },
          { '@type': 'HowToStep', position: 4, name: 'Test across models', text: 'Run the revised prompt on GPT-5.6, Claude Opus 5, and Gemini 3.1 Pro. A prompt that only works on one model is fragile.' },
          { '@type': 'HowToStep', position: 5, name: 'Measure against quality criteria', text: 'Check task accuracy, format compliance, factual grounding, consistency across 3 re-runs, and cross-model agreement.' },
          { '@type': 'HowToStep', position: 6, name: 'Save to a prompt library', text: 'Document what changed and why it worked. Version-control the optimized prompt. A tested prompt is a durable reusable asset.' },
        ],
      },
      leadAnswerBlock: '**Prompt optimization is the iterative process of revising an existing prompt to improve output quality, accuracy, or consistency.** The 6 optimization levers — specificity, context, examples, constraints, output format, and role/persona — are the independent variables you adjust. Change one variable per iteration, test across models, and measure results. This systematic approach reduces guesswork in prompt refinement.',
      quickFacts: [
        '**6 core levers:** Specificity, context, examples, constraints, output format, and role/persona — these are the main variables this guide adjusts',
        '**2–4 iterations sufficient:** Most tasks reach acceptable quality in 2–4 targeted iterations before diminishing returns set in',
        '**Multi-model testing required:** A prompt that works on GPT-5.6 but fails on Claude is fragile — test on ≥2 models to confirm robustness',
        '**Fine-tuning:** it usually costs more time and money than prompt optimization, so try optimization first',
      ],
      toc: [
        { label: 'Key Takeaways', anchor: 'key-takeaways' },
        { label: 'Key Takeaways for Local LLM Users', anchor: 'key-takeaways-for-local-llm-users' },
        { label: 'What Is Prompt Optimization?', anchor: 'what-is-prompt-optimization' },
        { label: 'Prompt Optimization vs Prompt Engineering', anchor: 'prompt-optimization-vs-prompt-engineering' },
        { label: 'Why Prompt Optimization Matters', anchor: 'why-prompt-optimization-matters' },
        { label: 'The 6 Optimization Levers', anchor: 'the-6-optimization-levers' },
        { label: 'The 6-Step Optimization Process', anchor: 'the-6-step-optimization-process' },
        { label: 'How to Measure Prompt Quality', anchor: 'how-to-measure-prompt-quality' },
        { label: 'What Does Prompt Optimization Look Like in Practice?', anchor: 'what-does-prompt-optimization-look-like-in-practice' },
        { label: 'Model-Specific Optimization Tips', anchor: 'model-specific-optimization-tips' },
        { label: 'Optimizing Prompts for Local LLMs', anchor: 'optimizing-prompts-for-local-llms-ollama-lm-studio' },
        { label: 'The 7 Most Common Optimization Mistakes', anchor: 'the-7-most-common-optimization-mistakes' },
        { label: 'Prompt Optimization Techniques: Advanced Methods', anchor: 'prompt-optimization-techniques-advanced-methods' },
        { label: 'Saving Optimized Prompts to a Library', anchor: 'saving-optimized-prompts-to-a-library' },
        { label: 'Regulatory Compliance', anchor: 'prompt-optimization-and-regulatory-compliance' },
        { label: 'Languages & Regions', anchor: 'prompt-optimization-across-languages-and-regions' },
        { label: 'What Do These Prompt Optimization Terms Mean?', anchor: 'what-do-these-prompt-optimization-terms-mean' },
        { label: 'Related Reading', anchor: 'related-reading' },
        { label: 'FAQ', anchor: 'faq-prompt-optimization' },
      ],
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          { '@type': 'Question', name: 'What is prompt optimization?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt optimization is the iterative process of revising an existing prompt to improve AI output quality for a specific task. It involves identifying a failure mode (wrong format, hallucination, vague output), changing one variable (specificity, context, examples, constraints, output format, or role), and testing the result across models like GPT-5.6, Claude Opus 5, and Gemini 3.1 Pro.' } },
          { '@type': 'Question', name: 'What is the difference between prompt optimization and prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering is the discipline of designing a prompt structure from scratch using building blocks like objective, context, and output format. Prompt optimization is the iterative subprocess of improving an already-written prompt by diagnosing failure modes and applying targeted changes. You need prompt engineering to create a starting point; you use prompt optimization to refine it.' } },
          { '@type': 'Question', name: 'How many iterations does it take to optimize a prompt?', acceptedAnswer: { '@type': 'Answer', text: 'For most tasks, 2–4 targeted iterations are sufficient to move from a failing prompt to a reliable one. Each iteration should change one variable and be tested on 3–5 representative inputs. Diminishing returns set in after 5–6 iterations — if a prompt has not stabilized by then, the task definition itself may need to be revised.' } },
          { '@type': 'Question', name: 'Which lever should I change first when optimizing a prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Start with output format. Format non-compliance — receiving a paragraph when you wanted a table, or plain text when you needed JSON — is the most common and fastest-to-fix failure mode. Specify the exact structure you want, then address other issues (accuracy, tone, scope) in subsequent iterations.' } },
          { '@type': 'Question', name: 'Does prompt optimization work across all AI models?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but with model-specific adjustments. The six core optimization levers (specificity, context, examples, constraints, output format, role) apply to GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, and Mistral Large. However, each model responds differently to instruction density. Test on each model you use.' } },
          { '@type': 'Question', name: 'What is the most common prompt optimization mistake?', acceptedAnswer: { '@type': 'Answer', text: 'Changing multiple variables simultaneously. If you add examples, change the output format, and add a role instruction in the same revision, you cannot determine which change improved (or degraded) the output. Effective optimization changes one variable per iteration.' } },
          { '@type': 'Question', name: 'Can prompt optimization reduce AI hallucinations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, with the right techniques. Adding grounding context ("Base your answer only on the following document"), few-shot examples with factually correct outputs, and explicit constraints ("Do not invent figures — use only data from the provided text") can help reduce hallucinations. Self-consistency prompting — generating multiple outputs and returning the most common — further reduces low-probability fabrications.' } },
          { '@type': 'Question', name: 'When should I use fine-tuning instead of prompt optimization?', acceptedAnswer: { '@type': 'Answer', text: 'Use fine-tuning when prompt optimization has reached a ceiling — typically when the required behavior is highly domain-specific, requires consistent stylistic voice across thousands of outputs, or depends on knowledge not in the base model\'s training. Prompt optimization is faster and cheaper and should always be exhausted before fine-tuning.' } },
          { '@type': 'Question', name: 'How do I know when a prompt is fully optimized?', acceptedAnswer: { '@type': 'Answer', text: 'A prompt is sufficiently optimized when it: (1) produces correct output on 4–5 representative inputs, (2) produces consistent output on re-runs, (3) works across at least two models (e.g., GPT-5.6 and Claude), and (4) meets the format specification without post-processing. Perfect prompts do not exist — "optimized" means reliable enough for the use case.' } },
          { '@type': 'Question', name: 'Does prompt optimization apply to image prompts (text-to-image)?', acceptedAnswer: { '@type': 'Answer', text: 'The principles apply — specificity, constraints, and examples (reference images) are all valid levers for image models like DALL-E 3 and Stable Diffusion. However, the mechanics differ: image models respond to style modifiers, aspect ratio specifications, and negative prompts as constraints. The optimization process (baseline → diagnose → change one variable → test) is identical.' } },
          { '@type': 'Question', name: 'What is automatic prompt optimization?', acceptedAnswer: { '@type': 'Answer', text: 'Automatic prompt optimization uses a second AI model (or the same model in a meta-prompting loop) to rewrite and improve prompts without human intervention. Tools like DSPy (Stanford), TextGrad, and APE (Automatic Prompt Engineer) generate candidate prompts, score them against a metric (accuracy, format compliance, user rating), and select the best variant. Manual optimization is faster for well-understood tasks; automatic optimization scales better when you have labeled evaluation data and need to test hundreds of variants.' } },
          { '@type': 'Question', name: 'How does prompt optimization differ from prompt tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt optimization improves discrete text prompts — the instructions you write in natural language — without modifying model weights. Prompt tuning (introduced by Lester et al., 2021) learns continuous soft prompt vectors that are prepended to the input and trained by gradient descent alongside or instead of the model. Prompt tuning requires compute and training data; prompt optimization requires neither. For most production use cases, optimize discrete prompts first and only consider prompt tuning when a hard quality ceiling has been reached.' } },
          { '@type': 'Question', name: 'What are the best tools for prompt optimization?', acceptedAnswer: { '@type': 'Answer', text: 'There is no single best tool. Examples include: PromptQuorum (made by this site\'s publisher; dispatch one prompt to GPT-5.6, Claude, and Gemini simultaneously for side-by-side comparison), DSPy (programmatic prompt optimization with automatic metric-based selection), LangSmith (prompt versioning, A/B testing, and tracing for LangChain pipelines), Promptfoo (open-source CLI for running prompts against test cases and regression testing), and PromptLayer (prompt versioning and analytics). For manual iteration, a spreadsheet logging prompt version, input, output, and pass/fail against criteria is sufficient for most single-task optimization work.' } },
          { '@type': 'Question', name: 'How do I optimize a system prompt?', acceptedAnswer: { '@type': 'Answer', text: 'System prompt optimization follows the same 6-step process as user prompt optimization, with two additional constraints. First, system prompts persist across all turns — an overly specific instruction can degrade performance on inputs you did not anticipate. Test across 5–10 diverse representative inputs, not just one. Second, system prompt length matters: very long system prompts can reduce instruction-following on later user turns on some models. Optimize for conciseness: each instruction in the system prompt should be necessary. Remove any instruction that does not change output on your test set.' } },
          { '@type': 'Question', name: 'Can you use ChatGPT to optimize prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can ask GPT-5.6 to rewrite a prompt by providing the failing prompt and describing the failure mode: "This prompt produces output that is too vague. Rewrite it to require a 3-bullet structured response." This is a form of meta-prompting — using the model to improve its own inputs. The limitation is that GPT-5.6 will optimize for what it thinks is better, not necessarily what your specific evaluation criteria require. Always test the rewritten prompt on real inputs and measure against your actual pass/fail criteria before accepting the revision.' } },
          { '@type': 'Question', name: 'What is prompt optimization in machine learning?', acceptedAnswer: { '@type': 'Answer', text: 'In machine learning contexts, prompt optimization refers to techniques that improve the prompts fed into language models as part of a pipeline — without retraining the model itself. This includes both discrete prompt optimization (rewriting natural language instructions) and continuous prompt tuning (learning soft token embeddings via gradient descent). In production ML systems, prompt optimization is typically part of the inference pipeline: the prompt is treated as a hyperparameter that is tuned against a held-out evaluation set, analogous to learning rate selection in model training.' } },
          { '@type': 'Question', name: 'How much does prompt optimization improve AI output quality?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the model, the task and how weak the starting prompt is, so there is no general percentage. Measure it yourself: run the old and the new prompt on the same test inputs and compare pass rates.' } },
          { '@type': 'Question', name: 'Should I optimize prompts for each AI model separately?', acceptedAnswer: { '@type': 'Answer', text: 'Start with a model-agnostic optimization — apply the 6 levers (specificity, context, examples, constraints, output format, role) and test on GPT-5.6, Claude Opus 5, and Gemini 3.1 Pro. A well-structured prompt typically works well across all three. Only add model-specific variants if cross-model testing reveals divergent results. Model-specific adjustments worth testing: Claude handles longer multi-part system prompts well; GPT-5.6 benefits from explicit JSON format requests; Gemini 3.1 Pro benefits from explicit section headers in long-document tasks. Keep model-specific variants in a prompt library with version notes.' } },
          { '@type': 'Question', name: 'What is the difference between prompt optimization and RAG?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt optimization improves the instructions and structure of a prompt. Retrieval-Augmented Generation (RAG) improves the information available to the model at inference time by retrieving relevant documents and inserting them into the prompt context. The two are complementary: RAG solves the problem of the model not having the right facts; prompt optimization solves the problem of the model not processing those facts correctly. A fully optimized RAG pipeline requires both good retrieval (the right documents are fetched) and a well-optimized prompt (the model is instructed to use only the retrieved content, cite sources, and format the answer correctly).' } },
          { '@type': 'Question', name: 'How do I optimize prompts for GPT-5.6 specifically?', acceptedAnswer: { '@type': 'Answer', text: 'Four optimization moves are worth testing with GPT-5.6: (1) Explicit JSON format requests in the system prompt — for structured output, define the schema precisely. (2) Markdown headers in system prompts — use H2 sections (## Role, ## Task, ## Output Format) to separate concerns. (3) Tight constraints — without a word or length limit, answers may be longer than you need; add "respond in ≤150 words" or "return only the JSON object, no explanation." (4) Tool-use framing — for tasks involving retrieval or calculation, frame the prompt as a function definition rather than a prose instruction when using the Assistants API with tools enabled.' } },
        ],
      },
      sections: {

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Prompt optimization = iterative revision of an existing prompt to improve output quality',
            'The 6 levers: **specificity**, **context**, **examples**, **constraints**, **output format**, **role/persona**',
            'Change one lever at a time — isolating variables is how you find what actually works',
            'Test on ≥2 models (GPT-5.6, Claude, Gemini) to confirm the improvement is model-agnostic',
            'Common failure mode: changing too many variables at once makes diagnosis impossible',
            'A tested, optimized prompt is a durable asset — save it to a prompt library',
          ],
        },

        localLLMTldr: {
          title: 'Key Takeaways for Local LLM Users',
          items: [
            'Prompt optimization matters especially for local models — quantized models (4-bit, 8-bit) can be more sensitive to ambiguous instructions',
            'Ollama and LM Studio support the same 6 optimization levers; the difference is that smaller models (LLaMA 3.1 8B, Mistral Small) often need more explicit constraints and shorter inputs',
            'Quantized models can follow instructions less reliably — use simpler, more prescriptive prompts with explicit output format and fewer simultaneous constraints',
            'Temperature defaults differ: Ollama defaults to 0.8 (higher creativity, less consistency); set temperature to 0.1–0.3 for structured output tasks requiring consistency across runs',
            'To estimate the quality gap, run the same test inputs on your local model and on cloud models, for example by comparing your local prompt with GPT-5.6 and Claude in PromptQuorum',
          ],
        },

        definition: {
          title: 'What Is Prompt Optimization?',
          content: [
            '**Prompt optimization is the iterative process of revising an existing prompt to improve the quality, accuracy, or consistency of AI output for a specific task.** It applies to all major models — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, and locally-run models via Ollama or LM Studio. Where prompt engineering designs the initial prompt structure, prompt optimization diagnoses what is failing and applies targeted changes until the output meets a defined standard.',
            'Prompt optimization is a subprocess of prompt engineering. You always start with a working prompt and make one change at a time. This isolation of variables is what makes diagnosis possible — when you revise specificity, output format, and constraints simultaneously, you cannot determine which change improved the result. The skill of prompt optimization is mapping a failure to the right lever, changing only that variable, and measuring the improvement.',
            'Why this matters: the same model produces radically different outputs from near-identical prompts. The difference between "sort of correct" and "reliably right" is not luck — it is systematic optimization. An unoptimized prompt succeeds on some inputs and fails on others. An optimized prompt succeeds consistently across a representative sample of inputs.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Prompt optimization is the systematic process of diagnosing why a prompt fails and fixing one variable at a time until the output meets your quality criteria.' },
          ],
        },

        vsPromptEngineering: {
          title: 'Prompt Optimization vs Prompt Engineering',
          content: [
            '**Prompt optimization and prompt engineering are complementary disciplines that work in sequence.** Prompt engineering designs a prompt from scratch using building blocks (objective, context, examples, constraints, output format, role). Prompt optimization takes an existing prompt and improves it through iterative revision. You need both: prompt engineering gets you to "working"; prompt optimization gets you to "reliable."',
            'Think of it this way: prompt engineering builds the structure; prompt optimization refines it. Prompt engineering asks "what elements should this prompt have?" Prompt optimization asks "why is this prompt failing, and which single change will fix it?" The distinction matters because the strategies are different. Engineering starts from principles and building blocks. Optimization starts from failure diagnosis.',
          ],
          columns: ['Dimension', 'Prompt Engineering', 'Prompt Optimization'],
          rows: [
            { 'Dimension': 'Starting point', 'Prompt Engineering': 'Blank page', 'Prompt Optimization': 'Existing prompt' },
            { 'Dimension': 'Goal', 'Prompt Engineering': 'Design the structure', 'Prompt Optimization': 'Improve the output' },
            { 'Dimension': 'Method', 'Prompt Engineering': 'Frameworks, building blocks', 'Prompt Optimization': 'Isolate, change, test, measure' },
          ],
        },

        whyOptimize: {
          title: 'Why Prompt Optimization Matters',
          content: [
            '**Prompt optimization reduces inconsistent AI outputs by systematically diagnosing what fails and fixing one variable at a time.** A vague prompt produces a vague output. A poorly specified prompt produces an off-target response. A prompt that works on Monday might fail on Friday if the input changes slightly. Optimization can reduce these variations through systematic diagnosis and targeted revision.',
            'Illustrative example, not a measured test: "Summarize this article." can return a different length and focus on each run. Adding an output format ("3 bullet points, ≤20 words each"), a role ("analyst") and a precise task ("List the 3 key findings, not methodology") usually narrows the variation.',
            'For the regulatory background, see [Geopolitics and AI](/prompt-engineering/geopolitics-and-ai).',
          ],
        },

        callout1: {
          blockquote: 'On the GSM8K math word-problem benchmark, showing the 540B-parameter PaLM model a few worked examples with step-by-step reasoning (few-shot chain-of-thought) raised the solve rate from 17.9% with standard prompting to 56.9%, with no retraining.',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          title: 'The 6 Optimization Levers',
          content: [
            '**Every prompt consists of six independent variables you can adjust to improve output.** These are the "levers" of optimization. When a prompt fails, the failure traces back to one or more of these levers not being set correctly. The skill of optimization is mapping a symptom to the right lever, changing it, and measuring the result.',
          ],
          columns: ['Lever', 'What It Changes', 'Optimization Move', 'Example'],
          rows: [
            { 'Lever': 'Specificity', 'What It Changes': 'How precisely the task is defined', 'Optimization Move': 'Rewrite vague objective as exact instruction', 'Example': '"Summarize" → "List 3 key findings in ≤20 words each"' },
            { 'Lever': 'Context', 'What It Changes': 'Information the model has to work with', 'Optimization Move': 'Add background, audience, constraints', 'Example': '"Write a report" → "Write a report for a non-technical CFO"' },
            { 'Lever': 'Examples', 'What It Changes': 'Model\'s understanding of desired output format', 'Optimization Move': 'Add 1–3 input/output pairs (few-shot)', 'Example': 'Show the exact format you want, once' },
            { 'Lever': 'Constraints', 'What It Changes': 'Boundaries on what the model can output', 'Optimization Move': 'Add explicit prohibitions', 'Example': '"Do not use jargon. Maximum 150 words."' },
            { 'Lever': 'Output format', 'What It Changes': 'Structure of the response', 'Optimization Move': 'Specify format explicitly', 'Example': '"Respond in JSON: {title, summary, tags[]}"' },
            { 'Lever': 'Role/persona', 'What It Changes': 'Expertise level the model adopts', 'Optimization Move': 'Add a specific role', 'Example': '"Act as a senior data analyst at a B2B SaaS company"' },
          ],
        },

        callout2: {
          blockquote: 'Scaling GPT-3 up showed that few-shot learning, which uses a handful of examples in the prompt and no gradient updates, was on some tasks competitive with earlier state-of-the-art fine-tuning approaches.',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        optimizationProcess: {
          title: 'The 6-Step Optimization Process',
          content: [
            '**Prompt optimization is a systematic, measurable process.** Each step narrows the diagnosis: you identify the symptom, map it to a lever, change one variable, test across models, and measure improvement. Here is the exact process:',
          ],
          items: [
            '**Step 1: Establish a baseline.** Run the current prompt on your target task 3 times on representative inputs. Note the failure mode: Is the output too long or too short? Wrong format? Hallucinating? Off-topic? Tangential? This baseline is crucial — you cannot measure improvement without it.',
            '**Step 2: Identify the root lever.** Map the failure to one of the 6 levers. Examples: "output is a wall of prose instead of bullet points" → output format lever; "answer is vague" → specificity lever; "tone is wrong" → role lever; "includes made-up facts" → context or constraints lever.',
            '**Step 3: Change one variable.** Make a single targeted change to the identified lever. Do not edit the objective, add examples, AND change the format in the same revision — you cannot attribute improvement if three things changed. This isolation is non-negotiable.',
            '**Step 4: Test across models.** Run the revised prompt on GPT-5.6, Claude Opus 5, and Gemini 3.1 Pro. A prompt that only works on one model is fragile and model-specific. Use PromptQuorum to dispatch one prompt to all three simultaneously and compare responses side by side. Agreement across models means the prompt is robust; divergence means you need further refinement.',
            '**Step 5: Measure against criteria.** Did accuracy improve? Did the format comply? Did hallucinations decrease? Do outputs now pass consistency tests (running 3× in a row)? Measurement is how you confirm the change worked. If you made the change but saw no improvement, the change did not address the root cause — try a different lever.',
            '**Step 6: Save to a prompt library.** A tested, optimized prompt is a reusable asset. Document what changed and why it improved. Version it. A prompt library stored and version-controlled is far more valuable than a one-off prompt that solved a problem once.',
          ],
          promptExamples: [
            {
              badLabel: '❌ Bad: Changing Multiple Variables at Once',
              bad: 'Original prompt: "Summarize this article."\n\nRevision 1 (WRONG): "Summarize this article in 3 bullets. Act as a finance analyst. Do not use jargon. Include the key risks highlighted. Format as JSON."',
              goodLabel: '✅ Good: Isolating One Variable Per Iteration',
              good: 'Original prompt: "Summarize this article."\n\nRevision 1 (correct): "Summarize this article in 3 bullets, ≤20 words each."\n→ Possible result: Output is now consistent format, but vague.\n\nRevision 2: "Summarize in 3 bullets focusing on the key business risks highlighted. Each ≤20 words."\n→ Possible result: Better relevance, but missing audience context.\n\nRevision 3: "You are a CFO reviewing a vendor risk report. Summarize in 3 bullets focusing on key risks. ≤20 words each."\n→ Possible result: Specific, actionable, consistent. DONE.',
            },
          ],
        },

        callout3: {
          blockquote: 'In a preregistered online experiment with 453 college-educated professionals doing occupation-specific writing tasks, access to ChatGPT cut the average time taken by 40% and raised output quality by 18%. Inequality between workers decreased.',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        measurementCriteria: {
          title: 'How to Measure Prompt Quality',
          content: [
            '**You cannot optimize what you cannot measure.** The following criteria define whether a prompt has succeeded. Use these checkpoints after each iteration:',
          ],
          columns: ['Criterion', 'What to Check', 'Pass / Fail Signal'],
          rows: [
            { 'Criterion': 'Task accuracy', 'What to Check': 'Does the output answer the actual question?', 'Pass / Fail Signal': 'Compare against a known correct answer' },
            { 'Criterion': 'Format compliance', 'What to Check': 'Does the output match the specified structure?', 'Pass / Fail Signal': 'Did JSON parse? Are bullets the right length?' },
            { 'Criterion': 'Factual grounding', 'What to Check': 'Are specific claims correct?', 'Pass / Fail Signal': 'Spot-check 3–5 facts' },
            { 'Criterion': 'Consistency', 'What to Check': 'Does re-running produce similar output?', 'Pass / Fail Signal': 'Run same prompt 3× — do outputs differ structurally?' },
            { 'Criterion': 'Token efficiency', 'What to Check': 'Is the output length appropriate?', 'Pass / Fail Signal': 'Measure token count vs. information density' },
            { 'Criterion': 'Cross-model agreement', 'What to Check': 'Do 2–3 models produce similar results?', 'Pass / Fail Signal': 'Dispatch to GPT-5.6, Claude, Gemini via PromptQuorum — agreement = robust' },
          ],
        },

        callout4: {
          blockquote: 'In an experiment with 758 BCG consultants, those using AI on 18 realistic tasks inside the AI\'s capability frontier produced results rated more than 40% higher in quality than a control group. On a task selected to be outside the frontier, consultants using AI were 19 percentage points less likely to produce correct solutions.',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        beforeAfterExamples: {
          title: 'What Does Prompt Optimization Look Like in Practice?',
          content: [
            '**Prompt optimization is visible in the change from vague to precise instructions.** These before/after pairs show each of the 6 levers in action:',
          ],
          items: [
            '**Bad:** "Summarize this article." | **Improved:** "Summarize in 3 bullets, ≤20 words each. Focus on business impact." | **Why:** An explicit output format can reduce inconsistency.',
            '**Bad:** "Review this code." | **Improved:** "Review for (1) correctness, (2) performance, (3) security. Cite line numbers. Max 3 issues." | **Why:** Role + constraints can reduce generic feedback.',
            '**Bad:** "Synthesize these papers." | **Improved:** "Synthesize only from the 5 provided papers. Format: [Finding A]. [Finding B]. [Implication]. Do not invent." | **Why:** Context + constraints can reduce hallucinations.',
            '**Bad:** "Write an email to a customer." | **Improved:** "Write an email to an angry customer who waited 2 weeks for support. Apologize once, offer 2 solutions, ask for preference. ≤150 words." | **Why:** Specificity + constraints improve tone and relevance.',
            '**Bad:** "Extract data from this table." | **Improved:** "Extract names and amounts as JSON: [{\"name\": \"...\", \"amount\": ...}]. No explanations." | **Why:** An explicit format can reduce unwanted prose.',
            '**Bad:** "Is this code secure?" | **Improved:** "Check for: (1) SQL injection, (2) unvalidated user input, (3) hardcoded secrets. Reply with each finding as: [Line N: Issue]. No false positives." | **Why:** Specificity + constraints improve accuracy.',
          ],
        },

        definitionBoxes: {
          title: 'What Do These Prompt Optimization Terms Mean?',
          content: [],
          items: [
            '**Prompt optimization** — The iterative process of revising a prompt to improve output quality by diagnosing failure modes and changing one variable (specificity, context, examples, constraints, format, or role) at a time. See [5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) for the structural elements you are optimizing.',
            '**Few-shot prompting** — Including 1–3 input/output examples in the prompt to teach the model the desired format or pattern. See [Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) for when to add examples as the primary optimization lever.',
            '**Chain-of-Thought (CoT)** — Asking the model to reason step-by-step ("think before you answer") which can improve multi-step reasoning; the gain depends on model and task. See [Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) for detailed techniques.',
            '**Constraint** — An explicit prohibition or boundary (e.g., "do not use jargon," "maximum 150 words," "cite sources only") that narrows output scope and prevents common failure modes. See [Constrained Prompting](/prompt-engineering/constrained-prompting) for advanced constraint patterns.',
            '**Token** — The smallest unit of text the model processes; approximately 4 characters or 1 word in English. Prompt length and output budget are measured in tokens. See [Tokens, Costs & Limits](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) for cost calculation.',
            '**Hallucination** — Confident but factually incorrect output; occurs when the model invents facts, cites non-existent studies, or repeats unsupported claims. See [AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — mitigated by adding grounding context, examples, and constraints.',
            '**Fine-tuning** — Retraining model weights on domain-specific labeled data; used when prompt optimization cannot achieve the required quality. Always exhaust optimization before fine-tuning — it is slower and more expensive.',
            '**RAG (Retrieval-Augmented Generation)** — Injecting retrieved documents into the prompt context before asking the model to answer. See [RAG Explained](/prompt-engineering/rag-explained) — complementary to optimization (RAG improves information; optimization improves how the model uses it).',
            '**System prompt** — Persistent instruction that sets the model\'s role, constraints, and behavior across all turns. See [System Prompt vs User Prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — requires separate optimization testing from the user-facing prompt.',
            '**Specificity** — Precision in task definition; moving from vague instructions ("summarize") to exact requirements ("list 3 bullet points, ≤20 words each"). The first and often highest-impact optimization lever to adjust.',
          ],
        },

        modelSpecificTips: {
          title: 'Model-Specific Optimization Tips',
          content: [
            '**The 6 optimization levers apply across all major models — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, and Mistral Large.** However, each model responds differently to instruction density, format specificity, and role definition. Below are model-specific tuning tips: These are general starting points, not measured results; check each one on your own inputs.',
          ],
          items: [
            '**GPT-5.6 (OpenAI):** Works well with explicit JSON format requests and markdown headers in system prompts. Instruction-following is strong — tight constraints reduce over-explanation. If your GPT-5.6 prompt is over-explaining, add a constraint: "Be concise. Do not explain your reasoning unless asked."',
            '**Claude Opus 5 (Anthropic):** Excels at nuanced, multi-part instructions. Handles long, detailed system prompts reliably. Benefits from explicit output length guidance ("respond in ≤200 words"). If you are optimizing for brevity, be specific: "Respond in no more than 150 words."',
            '**Gemini 3.1 Pro (Google DeepMind):** Suited to long-document analysis (large context window). Explicit section headers in prompts improve structured output consistency. If you are processing long documents, add headers: "## Input Document\n[document]\n## Task\n[task]."',
            '**Mistral Large (Mistral AI):** Benefits from explicit role definitions and more prescriptive instruction phrasing. If your prompt works on GPT-5.6 but not Mistral, make instructions more explicit and add a role: "You are a [specific role]. Your task is to [explicit objective]."',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'Different models have different "personalities" — Claude is patient with long instructions, GPT-5.6 prefers tight constraints, Gemini handles massive documents. After you optimize a prompt, test it on all your target models because one size does not fit all.' },
          ],
        },

        localLLMExamples: {
          title: 'Optimizing Prompts for Local LLMs (Ollama, LM Studio)',
          content: [
            '**Local models run via Ollama or LM Studio respond to the same 6 optimization levers, but with tighter tolerances.** Quantized models (4-bit, 8-bit) can follow instructions less reliably, so start with simple, explicit prompts. The examples below show before/after optimization for three common local LLM failure modes. These are illustrative scenarios, not test results: the model names only show typical local setups, and the failures described are possible ones, not measured faults of those models.',
          ],
          items: [
            '**Example 1: Quantized Model Output Inconsistency (Lever: Output Format + Constraints)**\n_Model:_ LLaMA 3.1 8B via Ollama (4-bit quantization)\n_Weak prompt:_ "Summarize this support ticket."\n_Possible failure mode:_ Output varies wildly between runs — sometimes a sentence, sometimes a list, sometimes a question back to the user.\n_Lever changed:_ Output format + temperature constraint.\n_Optimized prompt:_ "Summarize this support ticket in exactly 2 sentences. Sentence 1: the customer\'s problem. Sentence 2: what they have tried. No other text."\n_Additional fix:_ Start `ollama run llama3.1`, then enter `/set parameter temperature 0.1`.\n_Aim (not a measured result):_ Two-sentence summaries; check this on your own model and tickets.',
            '**Example 2: Context Length Constraint Failure on LM Studio (Lever: Specificity + Context)**\n_Model:_ Mistral Small Instruct via LM Studio (Q4_K_M quantization, 4096-token context)\n_Weak prompt:_ "Analyze this document and list the key risks." [full 3,000-word document pasted]\n_Possible failure mode:_ Model truncates mid-analysis, misses the last third of the document, produces incomplete output without signaling the truncation.\n_Lever changed:_ Specificity — reduce scope to fit within context budget.\n_Optimized prompt:_ "You are a risk analyst. Read the following document excerpt (first 1,500 words only) and list up to 5 specific risks, each in ≤15 words. Format: Risk 1: [description]. Risk 2: [description]. Stop after 5."\n_Aim (not a measured result):_ An analysis that fits the context window; check the output for truncation.',
            '**Example 3: Instruction Override in Quantized Models (Lever: Constraints)**\n_Model:_ Phi-3 Mini via Ollama\n_Weak prompt:_ "Extract all dates from this text. Return JSON only."\n_Possible failure mode:_ Model returns JSON plus a paragraph explanation ("Here are the dates I found..."). Small models frequently add unsolicited commentary even when format is specified.\n_Lever changed:_ Constraints — explicit prohibition.\n_Optimized prompt:_ "Extract all dates from the text below. Return a JSON array only. No explanation. No preamble. No commentary. Output: [\\\"date1\\\", \\\"date2\\\", ...]"\n_Aim (not a measured result):_ JSON without extra prose; validate it by parsing, because small models can still add text.',
          ],
        },

        commonMistakes: {
          title: 'The 7 Most Common Optimization Mistakes',
          content: [
            '**Most optimization fails because of process mistakes, not conceptual misunderstanding.** Here are the most common pitfalls and how to avoid them:',
          ],
          items: [
            '**Mistake 1: Changing multiple variables simultaneously.** You add examples, change the output format, AND adjust the role in one revision. Now when the output improves, you do not know which change helped. Effective optimization isolates one change per iteration.',
            '**Mistake 2: Optimizing on a single input.** You test one example, see improvement, and declare success. In real use, the prompt fails on different inputs. Test on 5–10 representative examples. If the prompt does not succeed on all 5, keep optimizing.',
            '**Mistake 3: Optimizing for one model only.** You optimize for GPT-5.6, see perfect results, then deploy on Claude. It may fail there. Each model has slightly different instruction-following behavior. Test on at least 2 models (GPT-5.6 and Claude Opus 5); ideally 3.',
            '**Mistake 4: Ignoring output format.** A prompt produces the right facts but in the wrong structure. "Wrong format" is the most common and fastest-to-fix failure mode. Always specify: "Respond in JSON with fields: [list]" or "Use a markdown table with columns: [list]." Format compliance is often the difference between usable and unusable output.',
            '**Mistake 5: Over-prompting.** You add 15 constraints, 5 role descriptions, and 10 examples in a 200-token prompt. Too many simultaneous instructions overwhelm the model. Start minimal, then add constraints only when needed. If a prompt is not working, the first move is to simplify, not expand.',
            '**Mistake 6: Conflating optimization with fine-tuning.** Optimization improves prompts; fine-tuning trains the model. If you have tried all 6 levers and the prompt still fails, the model may lack knowledge or capability for the task — that is a fine-tuning problem, not an optimization problem. Fine-tuning is vastly slower and more expensive. Exhaust prompt optimization first.',
            '**Mistake 7: Not saving optimized prompts.** You optimize a prompt, deploy it, and then re-optimize the same prompt 6 months later because no one saved the version that worked. A prompt library — version-controlled, documented, and shared — turns optimization work into a lasting asset.',
          ],
        },

        advancedTechniques: {
          title: 'Prompt Optimization Techniques: Advanced Methods',
          content: [
            '**Beyond the 6 core levers, advanced prompt optimization techniques apply specialized patterns to fix specific failure modes.** These techniques combine multiple levers or layer constraints to solve harder problems. Learn which techniques to apply based on your optimization challenge:',
          ],
          items: [
            '[Few-shot vs Zero-shot](/prompt-engineering/zero-shot-vs-few-shot): Add 1–3 example input/output pairs to the prompt when the model is not formatting output correctly or is missing the style you want. Few-shot examples are the most direct way to teach format.',
            '[Chain-of-thought](/prompt-engineering/chain-of-thought-prompting): Insert "think step by step before answering" to fix multi-step reasoning failures. This technique can improve multi-step reasoning; the gain depends on model and task.',
            '[Constrained prompting](/prompt-engineering/constrained-prompting): Add explicit prohibitions ("Do not use jargon," "Do not invent figures," "Do not repeat the input") to fix scope and style failures. Constraints are stronger than instructions.',
            '[Self-consistency](/prompt-engineering/self-consistency-prompting): Generate the prompt\'s output 3–5 times independently, then return the most common answer. This reduces hallucinations on low-probability facts by combining model runs.',
            '[Structured output](/prompt-engineering/structured-output-and-json-mode): Request JSON, markdown tables, or other machine-readable formats to fix format compliance. Structured output is faster to parse and less error-prone than prose.',
          ],
        },

        keyTerms: {
          title: 'What Are the Key Terms for Prompt Optimization?',
          items: [
            '[Few-shot prompting](/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — Including a small number of input/output examples in the prompt so the model infers the desired pattern or format; the Examples lever in the 6-lever optimization framework',
            '[Chain-of-Thought (CoT)](/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — Asking the model to reason step by step before answering; the primary technique for fixing multi-step reasoning failures',
            '[Self-consistency](/prompt-engineering/prompt-engineering-glossary#self-consistency) — Generating multiple outputs and returning the most common answer; reduces hallucination rates on low-probability facts',
            '[Zero-shot prompting](/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — Prompting without examples; the baseline against which few-shot optimization is measured',
            '[Hallucination](/prompt-engineering/prompt-engineering-glossary#hallucination) — Confident-sounding but factually incorrect output; one of the primary failure modes optimization targets',
            '[Fine-tuning](/prompt-engineering/prompt-engineering-glossary#fine-tuning) — Retraining model weights on domain-specific data; the alternative to prompt optimization when a hard quality ceiling has been reached',
            '[RAG (Retrieval-Augmented Generation)](/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — Injecting retrieved documents into the prompt context; complementary to prompt optimization (RAG improves information; optimization improves how the model uses it)',
            '[System prompt](/prompt-engineering/prompt-engineering-glossary#system-prompt) — Persistent instruction that sets the model\'s role, constraints, and behavior across all turns; requires its own optimization pass',
            '[Temperature](/prompt-engineering/prompt-engineering-glossary#temperature) — Decoding parameter controlling output randomness; lower temperature improves consistency across optimization test runs',
            '[Prompt chaining](/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — Breaking complex tasks into a sequence of smaller prompts; each sub-prompt benefits from independent optimization',
          ],
        },

        promptLibrary: {
          title: 'Saving Optimized Prompts to a Library',
          content: [
            '**An optimized prompt is a durable asset.** Once you have tested a prompt across 3 models, confirmed it works on 5–10 representative inputs, and documented what each lever does — save it. A prompt library lets you reuse optimized prompts across projects, share them with your team, and improve them over time.',
            'What to save with each prompt: the final prompt text, the lever that was changed, the failure mode it fixed, which models it was tested on, and the pass/fail results on your representative inputs. This documentation is what separates a prompt library from a simple folder of text files.',
            'See [Build a Prompt Library That Saves Hours](/prompt-engineering/build-a-prompt-library) for a complete guide on structuring, versioning, and maintaining a library.',
          ],
        },

        regionalCompliance: {
          title: 'Prompt Optimization and Regulatory Compliance',
          content: [
            'In regulated settings, a versioned prompt library with test records can support your documentation. On its own, it does not make a system compliant with the EU AI Act or any other rule.',
            'Japan\'s AI Guidelines for Business, from METI and the Ministry of Internal Affairs and Communications, are non-binding. This is not legal advice: ask a qualified adviser which duties apply to you.',
          ],
        },

        multilingualReach: {
          title: 'Prompt Optimization Across Languages and Regions',
          content: [
            '**Prompt optimization is a universal discipline — the 6 levers and 6-step process apply regardless of the language your prompt is written in.** However, local search terms differ significantly, primary models vary by region, and some languages expose unique optimization challenges (tokenization density, character-based scripts, formal/informal register splits). The table below maps the most important regional variants. See [Prompting Across Languages](/prompt-engineering/prompting-across-languages) for a full guide to multilingual prompt engineering.',
          ],
          columns: ['Language / Region', 'Local term', 'Primary model', 'Regional note'],
          rows: [
            { 'Language / Region': 'English — US', 'Local term': 'prompt optimization', 'Primary model': 'GPT-5.6, Claude Opus 5', 'Regional note': 'American spelling (-ize)' },
            { 'Language / Region': 'English — UK / AU', 'Local term': 'prompt optimisation', 'Primary model': 'GPT-5.6, Claude Opus 5', 'Regional note': 'British spelling (-ise)' },
            { 'Language / Region': 'German — DE / AT / CH', 'Local term': 'Prompt-Optimierung', 'Primary model': 'GPT-5.6, Claude Opus 5', 'Regional note': 'EU AI Act relevant for DACH firms' },
            { 'Language / Region': 'French — FR / CA', 'Local term': 'optimisation de prompt', 'Primary model': 'GPT-5.6, Claude Opus 5', 'Regional note': 'Formal register' },
            { 'Language / Region': 'Spanish — ES / LATAM', 'Local term': 'optimización de prompts', 'Primary model': 'GPT-5.6', 'Regional note': 'Neutral Spanish term' },
            { 'Language / Region': 'Portuguese — BR', 'Local term': 'otimização de prompts', 'Primary model': 'GPT-5.6', 'Regional note': 'Brazilian Portuguese term' },
            { 'Language / Region': 'Japanese — JP', 'Local term': 'プロンプト最適化', 'Primary model': 'GPT-5.6 (strong Japanese support)', 'Regional note': 'Check token counts per model' },
            { 'Language / Region': 'Chinese Simplified — CN', 'Local term': '提示词优化', 'Primary model': 'DeepSeek, Qwen 3', 'Regional note': 'Simplified characters' },
            { 'Language / Region': 'Korean — KR', 'Local term': '프롬프트 최적화', 'Primary model': 'GPT-5.6, Claude Opus 5', 'Regional note': 'Check token counts per model' },
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the pillar definition and core building blocks of prompt design',
            '[5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — the structural elements you are optimizing',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — step-by-step reasoning technique for accuracy improvement',
            '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) — when to add examples as the optimization lever',
            '[Build a Prompt Library That Saves Hours](/prompt-engineering/build-a-prompt-library) — persisting optimized prompts as team assets',
            '[Fundamentos de Otimização de Prompts (Português)](/pt/prompt-engineering/fundamentals-of-prompt-optimization) — versão em português deste guia',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Prompt Optimization',
          faqs: [
            {
              q: 'What is prompt optimization?',
              a: 'Prompt optimization is the iterative process of revising an existing prompt to improve AI output quality for a specific task. It involves identifying a failure mode (wrong format, hallucination, vague output), changing one variable (specificity, context, examples, constraints, output format, or role), and testing the result across models like GPT-5.6, Claude Opus 5, and Gemini 3.1 Pro.',
            },
            {
              q: 'What is the difference between prompt optimization and prompt engineering?',
              a: 'Prompt engineering is the discipline of designing a prompt structure from scratch using building blocks like objective, context, and output format. Prompt optimization is the iterative subprocess of improving an already-written prompt by diagnosing failure modes and applying targeted changes. You need prompt engineering to create a starting point; you use prompt optimization to refine it.',
            },
            {
              q: 'How many iterations does it take to optimize a prompt?',
              a: 'For most tasks, 2–4 targeted iterations are sufficient to move from a failing prompt to a reliable one. Each iteration should change one variable and be tested on 3–5 representative inputs. Diminishing returns set in after 5–6 iterations — if a prompt has not stabilized by then, the task definition itself may need to be revised.',
            },
            {
              q: 'Which lever should I change first when optimizing a prompt?',
              a: 'Start with output format. Format non-compliance — receiving a paragraph when you wanted a table, or plain text when you needed JSON — is the most common and fastest-to-fix failure mode. Specify the exact structure you want, then address other issues (accuracy, tone, scope) in subsequent iterations.',
            },
            {
              q: 'Does prompt optimization work across all AI models?',
              a: 'Yes, but with model-specific adjustments. The six core optimization levers (specificity, context, examples, constraints, output format, role) apply to GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, and Mistral Large. However, each model responds differently to instruction density. Test on each model you use.',
            },
            {
              q: 'What is the most common prompt optimization mistake?',
              a: 'Changing multiple variables simultaneously. If you add examples, change the output format, and add a role instruction in the same revision, you cannot determine which change improved (or degraded) the output. Effective optimization changes one variable per iteration.',
            },
            {
              q: 'Can prompt optimization reduce AI hallucinations?',
              a: 'Yes, with the right techniques. Adding grounding context ("Base your answer only on the following document"), few-shot examples with factually correct outputs, and explicit constraints ("Do not invent figures — use only data from the provided text") can help reduce hallucinations. Self-consistency prompting — generating multiple outputs and returning the most common — further reduces low-probability fabrications.',
            },
            {
              q: 'When should I use fine-tuning instead of prompt optimization?',
              a: 'Use fine-tuning when prompt optimization has reached a ceiling — typically when the required behavior is highly domain-specific, requires consistent stylistic voice across thousands of outputs, or depends on knowledge not in the base model\'s training. Prompt optimization is faster and cheaper and should always be exhausted before fine-tuning.',
            },
            {
              q: 'How do I know when a prompt is fully optimized?',
              a: 'A prompt is sufficiently optimized when it: (1) produces correct output on 4–5 representative inputs, (2) produces consistent output on re-runs, (3) works across at least two models (e.g., GPT-5.6 and Claude), and (4) meets the format specification without post-processing. Perfect prompts do not exist — "optimized" means reliable enough for the use case.',
            },
            {
              q: 'Does prompt optimization apply to image prompts (text-to-image)?',
              a: 'The principles apply — specificity, constraints, and examples (reference images) are all valid levers for image models like DALL-E 3 and Stable Diffusion. However, the mechanics differ: image models respond to style modifiers, aspect ratio specifications, and negative prompts as constraints. The optimization process (baseline → diagnose → change one variable → test) is identical.',
            },
            {
              q: 'What is automatic prompt optimization?',
              a: 'Automatic prompt optimization uses a second AI model (or the same model in a meta-prompting loop) to rewrite and improve prompts without human intervention. Tools like DSPy (Stanford), TextGrad, and APE (Automatic Prompt Engineer) generate candidate prompts, score them against a metric (accuracy, format compliance, user rating), and select the best variant. Manual optimization is faster for well-understood tasks; automatic optimization scales better when you have labeled evaluation data and need to test hundreds of variants.',
            },
            {
              q: 'How does prompt optimization differ from prompt tuning?',
              a: 'Prompt optimization improves discrete text prompts — the instructions you write in natural language — without modifying model weights. Prompt tuning (introduced by Lester et al., 2021) learns continuous soft prompt vectors that are prepended to the input and trained by gradient descent alongside or instead of the model. Prompt tuning requires compute and training data; prompt optimization requires neither. For most production use cases, optimize discrete prompts first and only consider prompt tuning when a hard quality ceiling has been reached.',
            },
            {
              q: 'What are the best tools for prompt optimization?',
              a: 'There is no single best tool. Examples include: PromptQuorum (made by this site\'s publisher; dispatch one prompt to GPT-5.6, Claude, and Gemini simultaneously for side-by-side comparison), DSPy (programmatic prompt optimization with automatic metric-based selection), LangSmith (prompt versioning, A/B testing, and tracing for LangChain pipelines), Promptfoo (open-source CLI for running prompts against test cases and regression testing), and PromptLayer (prompt versioning and analytics). For manual iteration, a spreadsheet logging prompt version, input, output, and pass/fail against criteria is sufficient for most single-task optimization work.',
            },
            {
              q: 'How do I optimize a system prompt?',
              a: 'System prompt optimization follows the same 6-step process as user prompt optimization, with two additional constraints. First, system prompts persist across all turns — an overly specific instruction can degrade performance on inputs you did not anticipate. Test across 5–10 diverse representative inputs, not just one. Second, system prompt length matters: very long system prompts can reduce instruction-following on later user turns on some models. Optimize for conciseness: each instruction in the system prompt should be necessary. Remove any instruction that does not change output on your test set.',
            },
            {
              q: 'Can you use ChatGPT to optimize prompts?',
              a: 'Yes. You can ask GPT-5.6 to rewrite a prompt by providing the failing prompt and describing the failure mode: "This prompt produces output that is too vague. Rewrite it to require a 3-bullet structured response." This is a form of meta-prompting — using the model to improve its own inputs. The limitation is that GPT-5.6 will optimize for what it thinks is better, not necessarily what your specific evaluation criteria require. Always test the rewritten prompt on real inputs and measure against your actual pass/fail criteria before accepting the revision.',
            },
            {
              q: 'What is prompt optimization in machine learning?',
              a: 'In machine learning contexts, prompt optimization refers to techniques that improve the prompts fed into language models as part of a pipeline — without retraining the model itself. This includes both discrete prompt optimization (rewriting natural language instructions) and continuous prompt tuning (learning soft token embeddings via gradient descent). In production ML systems, prompt optimization is typically part of the inference pipeline: the prompt is treated as a hyperparameter that is tuned against a held-out evaluation set, analogous to learning rate selection in model training.',
            },
            {
              q: 'How much does prompt optimization improve AI output quality?',
              a: 'It depends on the model, the task and how weak the starting prompt is, so there is no general percentage. Measure it yourself: run the old and the new prompt on the same test inputs and compare pass rates.',
            },
            {
              q: 'Should I optimize prompts for each AI model separately?',
              a: 'Start with a model-agnostic optimization — apply the 6 levers (specificity, context, examples, constraints, output format, role) and test on GPT-5.6, Claude Opus 5, and Gemini 3.1 Pro. A well-structured prompt typically works well across all three. Only add model-specific variants if cross-model testing reveals divergent results. Model-specific adjustments worth testing: Claude handles longer multi-part system prompts well; GPT-5.6 benefits from explicit JSON format requests; Gemini 3.1 Pro benefits from explicit section headers in long-document tasks. Keep model-specific variants in a prompt library with version notes.',
            },
            {
              q: 'What is the difference between prompt optimization and RAG?',
              a: 'Prompt optimization improves the instructions and structure of a prompt. Retrieval-Augmented Generation (RAG) improves the information available to the model at inference time by retrieving relevant documents and inserting them into the prompt context. The two are complementary: RAG solves the problem of the model not having the right facts; prompt optimization solves the problem of the model not processing those facts correctly. A fully optimized RAG pipeline requires both good retrieval (the right documents are fetched) and a well-optimized prompt (the model is instructed to use only the retrieved content, cite sources, and format the answer correctly).',
            },
            {
              q: 'How do I optimize prompts for GPT-5.6 specifically?',
              a: 'Four optimization moves are worth testing with GPT-5.6: (1) Explicit JSON format requests in the system prompt — for structured output, define the schema precisely. (2) Markdown headers in system prompts — use H2 sections (## Role, ## Task, ## Output Format) to separate concerns. (3) Tight constraints — without a word or length limit, answers may be longer than you need; add "respond in ≤150 words" or "return only the JSON object, no explanation." (4) Tool-use framing — for tasks involving retrieval or calculation, frame the prompt as a function definition rather than a prose instruction when using the Assistants API with tools enabled.',
            },
          ],
        },

        sources: {
          title: 'Sources & Further Reading',
          items: [
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608) — catalogues 58 text-based prompting techniques',
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — peer-reviewed academic basis for step-by-step reasoning as an optimization lever',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — OpenAI\'s prompt engineering guide',
            '[Brown et al., 2020. "Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165) — foundational paper establishing few-shot examples as a high-leverage optimization lever; the basis for the Examples lever in the 6-lever framework',
          ],
        },

      },
    },
    de: {
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-de.webp',
      title: 'So optimierst du Prompts: Prompt-Optimierungstechniken und Best Practices',
      seoTitle: 'Prompts optimieren 2026: 6 Hebel und 6-Schritte-Prozess',
      intro: 'Prompt-Optimierung ist der iterative Prozess der Überarbeitung eines Prompts zur Verbesserung der Ausgabequalität, Konsistenz oder Genauigkeit von KI-Systemen. Dieser umfassende Leitfaden vermittelt Prompt-Optimierungstechniken und Grundlagen: die 6 zentralen Hebel, einen 6-Schritte-Optimierungsprozess, vorher/nachher-Beispiele für GPT-5.6, Claude und Gemini sowie die 7 häufigsten Fehler, die du bei der Prompt-Optimierung vermeiden solltest.',
      metaDescription: 'Prompts optimieren mit 6 Hebeln und 6 Schritten: Vorher/nachher-Beispiele für GPT-5.6, Claude und Gemini sowie 7 häufige Fehler, die Sie vermeiden sollten.',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '14 min Lesezeit',
      educationalLevel: 'Anfänger',
      primaryTerm: 'Prompt-Optimierung',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: 'So optimierst du Prompts: Prompt-Optimierungstechniken und Best Practices',
        description: 'Lerne Prompt-Optimierungstechniken und Best Practices: 6 zentrale Hebel, 6-Schritte-Prozess, vorher/nachher-Beispiele. Wie du KI-Prompts für GPT-5.6, Claude und Gemini optimierst – Grundlagen für alle Modelle.',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['Prompt-Optimierung', 'Prompt-Optimierungstechniken', 'wie man Prompts optimiert', 'KI-Prompts verbessern', 'Grundlagen der Prompt-Entwicklung', 'LLM-Optimierung', 'GPT-5.6', 'Claude', 'Gemini', 'Few-Shot-Prompting', 'Chain-of-Thought-Prompting'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'Prompt-Optimierung' },
          { '@type': 'Thing', name: 'Few-Shot-Prompting' },
          { '@type': 'Thing', name: 'Chain-of-Thought-Prompting' },
          { '@type': 'Thing', name: 'LLM-Ausgabequalität' },
          { '@type': 'Thing', name: 'KI-Prompt-Entwicklung' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'de'),
        url: 'https://www.promptquorum.com/de/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'de',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Die 6 Prompt-Optimierungshebel',
        description: 'Die sechs unabhängigen Variablen, die die KI-Ausgabequalität bestimmen – jede kann angepasst werden, um einen spezifischen Fehler zu beheben.',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Spezifität', description: 'Wie präzise die Aufgabe definiert ist. Optimierungsmaßnahme: vage Zielbeschreibung in eine exakte Anweisung umschreiben. Beispiel: „Zusammenfassen" → „Liste 3 Kernaussagen in je ≤20 Wörtern auf".' },
          { '@type': 'ListItem', position: 2, name: 'Kontext', description: 'Informationen, mit denen das Modell arbeiten soll. Optimierungsmaßnahme: Hintergrund, Zielgruppe und Einschränkungen hinzufügen. Beispiel: „Schreib einen Bericht" → „Schreib einen Bericht für einen nicht-technischen CFO".' },
          { '@type': 'ListItem', position: 3, name: 'Beispiele', description: 'Das Verständnis des Modells vom gewünschten Ausgabeformat. Optimierungsmaßnahme: 1–3 Eingabe/Ausgabe-Paare hinzufügen (Few-Shot). Das gewünschte Format einmal konkret zeigen.' },
          { '@type': 'ListItem', position: 4, name: 'Einschränkungen', description: 'Grenzen für die Ausgabe des Modells. Optimierungsmaßnahme: explizite Verbote hinzufügen. Beispiel: „Kein Fachjargon. Maximal 150 Wörter".' },
          { '@type': 'ListItem', position: 5, name: 'Ausgabeformat', description: 'Struktur der Antwort. Optimierungsmaßnahme: Format explizit angeben. Beispiel: „Antworte in JSON: {titel, zusammenfassung, tags[]}".' },
          { '@type': 'ListItem', position: 6, name: 'Rolle/Persona', description: 'Expertenniveau, das das Modell einnimmt. Optimierungsmaßnahme: spezifische Rolle hinzufügen. Beispiel: „Agiere als Senior-Datenanalyst in einem B2B-SaaS-Unternehmen".' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'So optimierst du einen Prompt in 6 Schritten',
        description: 'Ein systematischer 6-Schritte-Prozess zur Diagnose von Prompt-Fehlern und zur Verbesserung der KI-Ausgabequalität bei GPT-5.6, Claude und Gemini.',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Ausgangspunkt dokumentieren', text: 'Den aktuellen Prompt 3 Mal mit repräsentativen Eingaben ausführen. Fehlermuster festhalten: falsches Format, Halluzinationen, vage Ausgabe oder themenfremde Antwort.' },
          { '@type': 'HowToStep', position: 2, name: 'Den richtigen Hebel identifizieren', text: 'Den Fehler einem der 6 Hebel zuordnen: Spezifität, Kontext, Beispiele, Einschränkungen, Ausgabeformat oder Rolle/Persona.' },
          { '@type': 'HowToStep', position: 3, name: 'Nur eine Variable ändern', text: 'Eine einzige gezielte Änderung am identifizierten Hebel vornehmen. Nie mehrere Variablen gleichzeitig ändern – nur so lässt sich die Verbesserung isoliert messen.' },
          { '@type': 'HowToStep', position: 4, name: 'Über mehrere Modelle testen', text: 'Den überarbeiteten Prompt mit GPT-5.6, Claude Opus 5 und Gemini 3.1 Pro testen. Ein Prompt, der nur bei einem Modell funktioniert, ist fragil.' },
          { '@type': 'HowToStep', position: 5, name: 'Gegen Qualitätskriterien messen', text: 'Aufgabengenauigkeit, Formateinhaltung, faktische Verankerung, Konsistenz über 3 Durchläufe und modellübergreifende Übereinstimmung prüfen.' },
          { '@type': 'HowToStep', position: 6, name: 'In eine Prompt-Bibliothek speichern', text: 'Dokumentieren, was geändert wurde und warum es funktioniert hat. Den optimierten Prompt versionieren. Ein getesteter Prompt ist ein dauerhafter, wiederverwendbarer Vermögenswert.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            'name': 'Was ist Prompt-Optimierung?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Prompt-Optimierung ist der iterative Prozess der Überarbeitung eines Prompts zur Verbesserung der KI-Ausgabequalität für eine spezifische Aufgabe. Es beinhaltet die Identifizierung eines Fehlermodus (falsches Format, Halluzination, vage Ausgabe), das Ändern einer Variable (Spezifität, Kontext, Beispiele, Beschränkungen, Ausgabeformat oder Rolle) und das Testen des Ergebnisses über Modelle wie GPT-5.6, Claude Opus 5 und Gemini 3.1 Pro.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Was ist der Unterschied zwischen Prompt-Optimierung und Prompt-Engineering?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Prompt-Engineering ist die Disziplin des Designs einer Prompt-Struktur von Grund auf mit Bausteinen wie Ziel, Kontext und Ausgabeformat. Prompt-Optimierung ist der iterative Subprozess der Verbesserung eines bereits geschriebenen Prompts durch Diagnose von Fehlermodi und Anwendung gezielter Änderungen. Du brauchst Prompt-Engineering, um einen Ausgangspunkt zu schaffen; du verwendest Prompt-Optimierung, um ihn zu verfeinern.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wie viele Iterationen braucht es, um einen Prompt zu optimieren?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Für die meisten Aufgaben reichen 2–4 gezielte Iterationen, um von einem fehlgeschlagenen Prompt zu einem zuverlässigen zu gelangen. Jede Iteration sollte eine Variable ändern und auf 3–5 repräsentativen Eingaben getestet werden. Abnehmende Erträge setzen nach 5–6 Iterationen ein — wenn ein Prompt sich bis dahin nicht stabilisiert hat, könnte die Aufgabendefinition selbst überarbeitet werden müssen.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Welchen Hebel sollte ich zuerst ändern, wenn ich einen Prompt optimiere?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Beginne mit dem Ausgabeformat. Format-Nicht-Einhaltung — ein Absatz statt einer Tabelle zu erhalten oder Klartext wenn du JSON brauchst — ist der häufigste und schnellste Fehlermodus zu beheben. Spezifiziere die genaue Struktur, die du willst, dann bearbeite andere Probleme (Genauigkeit, Ton, Umfang) in nachfolgenden Iterationen.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Funktioniert Prompt-Optimierung über alle KI-Modelle?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, aber mit modellspezifischen Anpassungen. Die sechs Kern-Optimierungshebel (Spezifität, Kontext, Beispiele, Beschränkungen, Ausgabeformat, Rolle) gelten für GPT-5.6, Claude Opus 5, Gemini 3.1 Pro und Mistral Large. Allerdings reagiert jedes Modell unterschiedlich auf Anweisungsdichte. Testen Sie jedes Modell, das Sie nutzen.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Was ist der häufigste Prompt-Optimierungsfehler?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Das gleichzeitige Ändern mehrerer Variablen. Wenn du Beispiele hinzufügst, das Ausgabeformat änderst und eine Rollenanweisung in derselben Überarbeitung hinzufügst, kannst du nicht feststellen, welche Änderung sich verbessert (oder verschlechtert) hat. Effektive Optimierung ändert eine Variable pro Iteration.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Kann Prompt-Optimierung KI-Halluzinationen reduzieren?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, mit den richtigen Techniken. Das Hinzufügen von Grundlagen-Kontext („Basiere deine Antwort nur auf dem folgenden Dokument"), Few-Shot-Beispiele mit faktisch korrekten Ausgaben und explizite Beschränkungen („Erfinde keine Zahlen — verwende nur Daten aus dem bereitgestellten Text") können helfen, Halluzinationen zu verringern. Self-Consistency-Prompting — das Generieren mehrerer Ausgaben und Zurückgeben der häufigsten — reduziert weiter niedrig-wahrscheinliche Erfindungen.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wann sollte ich Fine-Tuning statt Prompt-Optimierung verwenden?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Verwende Fine-Tuning, wenn Prompt-Optimierung ein Plafond erreicht hat — typischerweise wenn das erforderliche Verhalten hochgradig domänenspezifisch ist, konsistente stilistische Stimme über Tausende von Ausgaben benötigt, oder abhängig ist von Wissen, das nicht in der Basis-Trainierung des Modells enthalten ist. Prompt-Optimierung ist schneller und günstiger und sollte immer vor Fine-Tuning ausgeschöpft werden.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Woher weiß ich, wenn ein Prompt vollständig optimiert ist?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ein Prompt ist ausreichend optimiert, wenn er: (1) korrekte Ausgabe auf 4–5 repräsentativen Eingaben erzeugt, (2) konsistente Ausgabe bei Neu-Läufen erzeugt, (3) über mindestens zwei Modelle funktioniert (z.B. GPT-5.6 und Claude), und (4) die Format-Spezifikation ohne Nach-Verarbeitung erfüllt. Perfekte Prompts existieren nicht — „optimiert" bedeutet zuverlässig genug für den Anwendungsfall.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Gilt Prompt-Optimierung für Bild-Prompts (Text-zu-Bild)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die Grundsätze gelten — Spezifität, Beschränkungen und Beispiele (Referenzbilder) sind alle gültige Hebel für Bildmodelle wie DALL-E 3 und Stable Diffusion. Allerdings unterscheiden sich die Mechaniken: Bildmodelle reagieren auf Style-Modifizierer, Seitenverhältnisse und negative Prompts als Beschränkungen. Der Optimierungsprozess (Basis → Diagnose → eine Variable ändern → Testen) ist identisch.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Was ist automatische Prompt-Optimierung?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Automatische Prompt-Optimierung verwendet ein zweites KI-Modell (oder dasselbe Modell in einer Meta-Prompting-Schleife), um Prompts ohne menschliches Eingreifen umzuschreiben und zu verbessern. Tools wie DSPy (Stanford), TextGrad und APE (Automatic Prompt Engineer) generieren Kandidaten-Prompts, bewerten sie gegen eine Metrik (Genauigkeit, Format-Einhaltung, Benutzer-Rating) und wählen die beste Variante. Manuelle Optimierung ist schneller für gut verstandene Aufgaben; automatische Optimierung skaliert besser, wenn du markierte Evaluierungs-Daten hast und Hunderte von Varianten testen musst.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wie unterscheidet sich Prompt-Optimierung von Prompt Tuning?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Prompt-Optimierung verbessert diskrete Text-Prompts — die Anweisungen, die du in natürlicher Sprache schreibst — ohne Modellgewichte zu ändern. Prompt Tuning (eingeführt von Lester et al., 2021) lernt kontinuierliche Soft-Prompt-Vektoren, die der Eingabe vorgestellt und durch Gradientenabstieg neben oder statt des Modells trainiert werden. Prompt Tuning erfordert Rechenleistung und Trainingsdaten; Prompt-Optimierung erfordert keines von beiden. Für die meisten Produktionsanwendungsfälle optimieren Sie zunächst diskrete Prompts und ziehen Prompt Tuning erst in Betracht, wenn eine harte Qualitätsgrenze erreicht wurde.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Was sind die besten Tools für Prompt-Optimierung?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Es gibt nicht das eine beste Tool. Beispiele sind: PromptQuorum (vom Herausgeber dieser Website; einen Prompt an GPT-5.6, Claude und Gemini gleichzeitig versenden für die Vergleichsanalyse), DSPy (programmgesteuerte Prompt-Optimierung mit automatischer metrik-basierter Auswahl), LangSmith (Prompt-Versionierung, A/B-Tests und Tracing für LangChain-Pipelines), Promptfoo (Open-Source-CLI zum Ausführen von Prompts gegen Testfälle und Regressionstests) und PromptLayer (Prompt-Versionierung und Analytik). Für manuelle Iteration genügt eine Tabelle, die Prompt-Version, Eingabe, Ausgabe und Bestanden/Fehlgeschlagen gegen Kriterien protokolliert, für die meisten einteiligen Optimierungsarbeiten.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wie optimiere ich einen System-Prompt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'System-Prompt-Optimierung folgt dem gleichen 6-Schritte-Prozess wie Benutzer-Prompt-Optimierung mit zwei zusätzlichen Einschränkungen. Erstens, System-Prompts bleiben über alle Wendungen erhalten — eine zu spezifische Anweisung kann die Leistung bei Eingaben, die du nicht erwartet hast, beeinträchtigen. Testen Sie über 5–10 vielfältige repräsentative Eingaben, nicht nur eine. Zweitens ist die System-Prompt-Länge wichtig: sehr lange System-Prompts können die Anweisung-Befolgung in späteren Benutzer-Wendungen auf einigen Modellen reduzieren. Optimieren Sie für Kürze: jede Anweisung in dem System-Prompt sollte notwendig sein. Entfernen Sie alle Anweisungen, die die Ausgabe auf Ihrem Testsatz nicht ändern.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Kann ich ChatGPT zur Prompt-Optimierung nutzen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Sie können GPT-5.6 bitten, einen Prompt umzuschreiben, indem Sie den fehlgeschlagenen Prompt und die Fehlermodus-Beschreibung bereitstellen: „Dieser Prompt erzeugt Ausgaben, die zu vage sind. Schreibe ihn um, um eine 3-Punkte-strukturierte Antwort zu erfordern." Dies ist eine Form des Meta-Promptings — das Modell verwenden, um seine eigenen Eingaben zu verbessern. Die Einschränkung ist, dass GPT-5.6 für das optimieren wird, was es für besser hält, nicht unbedingt, was Ihre spezifischen Evaluierungskriterien erfordern. Testen Sie immer den umgeschriebenen Prompt auf echten Eingaben und messen Sie gegen Ihre tatsächlichen Bestanden/Fehlgeschlagen-Kriterien, bevor Sie die Überarbeitung akzeptieren.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Was bedeutet Prompt-Optimierung im Machine-Learning-Kontext?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Im Machine-Learning-Kontext bezieht sich Prompt-Optimierung auf Techniken, die die Prompts verbessern, die in ein Sprachmodell als Teil einer Pipeline eingehen — ohne das Modell selbst umzuschulen. Dies umfasst sowohl diskrete Prompt-Optimierung (Umschreiben natürlichsprachiger Anweisungen) als auch kontinuierliche Prompt-Abstimmung (Erlernen von Soft-Token-Einbettungen durch Gradientenabstieg). In ML-Produktionssystemen ist Prompt-Optimierung typischerweise Teil der Inferenz-Pipeline: der Prompt wird als Hyperparameter behandelt, der gegen einen einbehaltenen Evaluierungssatz optimiert wird, ähnlich wie bei der Lernraten-Auswahl beim Modelltraining.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wie viel verbessert Prompt-Optimierung die Ausgabequalität?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Das hängt vom Modell, von der Aufgabe und vom Ausgangsprompt ab; einen allgemeinen Prozentwert gibt es nicht. Messen Sie selbst: Testen Sie den alten und den neuen Prompt mit denselben Eingaben und vergleichen Sie die Erfolgsquoten.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Sollte ich Prompts für jedes Modell separat optimieren?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Beginnen Sie mit einer modellunabhängigen Optimierung — wenden Sie die 6 Hebel (Spezifität, Kontext, Beispiele, Beschränkungen, Ausgabeformat, Rolle) an und testen Sie auf GPT-5.6, Claude Opus 5 und Gemini 3.1 Pro. Ein gut strukturierter Prompt funktioniert typischerweise gut über alle drei. Fügen Sie nur modellspezifische Varianten hinzu, wenn übergreifende Tests divergente Ergebnisse zeigen. Modellspezifische Anpassungen, die einen Test wert sind: Claude handhabt längere mehrteilige System-Prompts gut; GPT-5.6 profitiert von expliziten JSON-Format-Anfragen; Gemini 3.1 Pro profitiert von expliziten Abschnittsüberschriften in Aufgaben mit langen Dokumenten. Führen Sie modellspezifische Varianten in einer Prompt-Bibliothek mit Versions-Notizen auf.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Was ist der Unterschied zwischen Prompt-Optimierung und RAG?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Prompt-Optimierung verbessert die Anweisungen und die Struktur eines Prompts. Retrieval-Augmented Generation (RAG) verbessert die Informationen, die dem Modell zur Inferenzzeit zur Verfügung stehen, indem relevante Dokumente abgerufen und in den Prompt-Kontext eingefügt werden. Die zwei sind sich ergänzend: RAG löst das Problem, dass das Modell nicht die richtigen Fakten hat; Prompt-Optimierung löst das Problem, dass das Modell diese Fakten nicht richtig verarbeitet. Eine vollständig optimierte RAG-Pipeline erfordert sowohl gutes Abrufen (die richtigen Dokumente werden abgerufen) als auch einen gut optimierten Prompt (das Modell wird angewiesen, nur den abgerufenen Inhalt zu verwenden, Quellen zu zitieren und die Antwort korrekt zu formatieren).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wie optimiere ich Prompts speziell für GPT-5.6?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Vier Optimierungsschritte sind bei GPT-5.6 einen Test wert: (1) Explizite JSON-Format-Anfragen im System-Prompt — definieren Sie für strukturierte Ausgaben das Schema präzise. (2) Markdown-Header in System-Prompts — verwenden Sie H2-Abschnitte (## Rolle, ## Aufgabe, ## Ausgabeformat) zur Trennung von Bedenken. (3) Enge Beschränkungen — ohne Wort- oder Längenvorgabe können Antworten länger ausfallen als nötig; fügen Sie „antworte in ≤150 Wörtern" oder „geben Sie nur das JSON-Objekt zurück, keine Erklärung" hinzu. (4) Tool-Use-Framing — für Aufgaben mit Abruf oder Berechnung formulieren Sie den Prompt als Funktionsdefinition statt einer Prosa-Anweisung, wenn Sie die Assistants-API mit aktivierten Tools verwenden.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Muss ich bei der Verwendung von PromptQuorum die DSGVO beachten?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, die DSGVO gilt auch hier, sobald Sie personenbezogene Daten verarbeiten. Bei Cloud-APIs (OpenAI, Anthropic, Google) müssen Sie prüfen, welche Rolle der Anbieter hat und welche Verträge nötig sind, etwa eine Auftragsverarbeitung nach Art. 28 DSGVO. Bei lokaler Inferenz mit Ollama oder LM Studio geht der Prompt nicht an einen Cloud-KI-Anbieter, solange keine Cloud-Funktionen aktiv sind. Rechtsgrundlage, technisch-organisatorische Maßnahmen und weitere Pflichten bleiben bestehen. Dies ist keine Rechtsberatung.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Ist PromptQuorum für den deutschen Mittelstand geeignet?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Das hängt von Ihrem Anwendungsfall ab. Über lokale Modelle (Ollama, LM Studio) lässt sich ohne Cloud-KI-Dienst arbeiten. Ob das Ihre Anforderungen an Datenschutz oder IT-Grundschutz erfüllt, müssen Sie selbst prüfen. Dies ist keine Rechtsberatung.',
            },
          },
        ],
      },
      sections: {
        tldr: {
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            'Prompt-Optimierung = iterative Überarbeitung eines bestehenden Prompts zur Verbesserung der Ausgabequalität',
            'Die 6 Hebel: **Spezifität**, **Kontext**, **Beispiele**, **Beschränkungen**, **Ausgabeformat**, **Rolle/Persona**',
            'Ändere immer einen Hebel nach dem anderen – die Isolierung von Variablen ist der Schlüssel zum Erfolg',
            'Teste mit ≥2 Modellen (GPT-5.6, Claude, Gemini), um sicherzustellen, dass die Verbesserung modellunabhängig ist',
            'Häufiges Fehlermuster: Zu viele Variablen gleichzeitig zu ändern macht die Diagnose unmöglich',
            'Ein getesteter, optimierter Prompt ist ein dauerhafter Vermögenswert – speichere ihn in einer Prompt-Bibliothek',
          ],
        },

        localLLMTldr: {
          title: 'Wichtigste Erkenntnisse für Nutzer lokaler LLMs',
          isTldr: true,
          items: [
            'Prompt-Optimierung ist für lokale Modelle kritischer – quantisierte Modelle (4-Bit, 8-Bit) können empfindlicher auf mehrdeutige Anweisungen reagieren',
            'Ollama und LM Studio unterstützen dieselben 6 Optimierungshebel; der Unterschied besteht darin, dass kleinere Modelle (LLaMA 3.1 8B, Mistral Small) oft explizitere Beschränkungen und kürzere Eingaben brauchen',
            'Quantisierte Modelle befolgen Anweisungen möglicherweise weniger zuverlässig – verwende einfachere, präskriptivere Prompts mit explizitem Ausgabeformat und weniger gleichzeitigen Beschränkungen',
            'Temperaturfestlegungen unterscheiden sich: Ollama setzt standardmäßig auf 0,8 (höhere Kreativität, weniger Konsistenz); setze die Temperatur auf 0,1–0,3 für strukturierte Ausgabeaufgaben, die Konsistenz über mehrere Durchläufe erfordern',
            'Um die Qualitätslücke einzuschätzen, testen Sie dieselben Eingaben mit Ihrem lokalen Modell und mit Cloud-Modellen, etwa indem Sie in PromptQuorum mit GPT-5.6 und Claude vergleichen',
          ],
        },

        definition: {
          title: 'Was ist Prompt-Optimierung?',
          content: [
            '**Prompt-Optimierung ist der iterative Prozess der Überarbeitung eines bestehenden Prompts zur Verbesserung der Qualität, Genauigkeit oder Konsistenz der KI-Ausgabe für eine spezifische Aufgabe.** Sie gilt für alle großen Modelle – GPT-5.6, Claude Opus 5, Gemini 3.1 Pro und lokal ausgeführte Modelle über Ollama oder LM Studio. Während Prompt-Entwicklung die ursprüngliche Prompt-Struktur entwirft, diagnostiziert Prompt-Optimierung, was fehlschlägt, und wendet gezielte Änderungen an, bis die Ausgabe einen definierten Standard erfüllt.',
            'Prompt-Optimierung ist ein Unterprozess der Prompt-Entwicklung. Du fängst immer mit einem funktionierenden Prompt an und machst jeweils eine Änderung. Diese Isolierung von Variablen ermöglicht die Diagnose – wenn du Spezifität, Ausgabeformat und Beschränkungen gleichzeitig überarbeitest, kannst du nicht bestimmen, welche Änderung das Ergebnis verbessert hat. Die Kunst der Prompt-Optimierung ist es, einen Fehler einem richtigen Hebel zuzuordnen, nur diese Variable zu ändern und die Verbesserung zu messen.',
            'Warum das wichtig ist: Das gleiche Modell erzeugt radikal unterschiedliche Ausgaben aus nahezu identischen Prompts. Der Unterschied zwischen „halbwegs korrekt" und „zuverlässig richtig" ist nicht Glück – es ist systematische Optimierung. Ein nicht optimierter Prompt ist erfolgreich bei einigen Eingaben und schlägt bei anderen fehl. Ein optimierter Prompt ist zuverlässig erfolgreich über eine repräsentative Stichprobe von Eingaben.',
          ],
        },

        vsPromptEngineering: {
          title: 'Prompt-Optimierung vs. Prompt-Engineering',
          content: [
            '**Prompt-Optimierung und Prompt-Engineering sind komplementäre Disziplinen, die sequenziell zusammenwirken.** Prompt-Engineering entwirft einen Prompt von Grund auf mit Bausteinen (Ziel, Kontext, Beispiele, Einschränkungen, Ausgabeformat, Rolle). Prompt-Optimierung nimmt einen bestehenden Prompt und verbessert ihn durch iterative Überarbeitungen. Sie brauchen beides: Prompt-Engineering bringt Sie zum „Funktionieren"; Prompt-Optimierung bringt Sie zur „Zuverlässigkeit".',
            'Denken Sie es sich so: Prompt-Engineering baut die Struktur; Prompt-Optimierung verfeinert sie. Prompt-Engineering fragt „welche Elemente sollte dieser Prompt haben?" Prompt-Optimierung fragt „warum schlägt dieser Prompt fehl, und welche einzelne Änderung wird ihn beheben?" Die Unterscheidung ist wichtig, weil die Strategien unterschiedlich sind. Engineering beginnt mit Prinzipien und Bausteinen. Optimierung beginnt mit Fehlerdiagnose.',
          ],
          columns: ['Dimension', 'Prompt-Engineering', 'Prompt-Optimierung'],
          rows: [
            { 'Dimension': 'Ausgangspunkt', 'Prompt-Engineering': 'Leere Seite', 'Prompt-Optimierung': 'Bestehender Prompt' },
            { 'Dimension': 'Ziel', 'Prompt-Engineering': 'Struktur entwerfen', 'Prompt-Optimierung': 'Ausgabe verbessern' },
            { 'Dimension': 'Methode', 'Prompt-Engineering': 'Frameworks, Bausteine', 'Prompt-Optimierung': 'Isolieren, ändern, testen, messen' },
          ],
        },

        whyOptimize: {
          title: 'Warum ist Prompt-Optimierung wichtig',
          content: [
            'Ein vager Prompt erzeugt eine vage Ausgabe. Ein schlecht spezifizierter Prompt erzeugt eine verfehlt angestrebte Antwort. Ein Prompt, der am Montag funktioniert, könnte am Freitag fehlschlagen, wenn sich die Eingabe leicht ändert. Optimierung kann diese Schwankungen durch systematische Diagnose und gezielte Überarbeitung verringern.',
            'Beispiel zur Veranschaulichung, kein Messtest: „Fasse diesen Artikel zusammen." kann bei jedem Lauf eine andere Länge und einen anderen Schwerpunkt liefern. Wenn Sie ein Ausgabeformat („3 Aufzählungspunkte, je ≤20 Wörter"), eine Rolle („Analyst") und eine präzise Aufgabe („Liste die 3 Schlüsselbefunde auf, nicht die Methodik") ergänzen, wird die Streuung meist kleiner.',
            'Den regulatorischen Hintergrund finden Sie unter [Geopolitik und KI](/de/prompt-engineering/geopolitics-and-ai).',
          ],
        },

        callout1: {
          blockquote: 'Beim GSM8K-Benchmark mit mathematischen Textaufgaben stieg die Lösungsquote des PaLM-Modells mit 540 Milliarden Parametern von 17,9 % mit Standard-Prompting auf 56,9 %, wenn ihm einige Beispiele mit schrittweisem Lösungsweg gezeigt wurden (Few-Shot-Chain-of-Thought), ohne Nachtraining.',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          title: 'Die 6 Optimierungshebel',
          content: [
            '**Jeder Prompt besteht aus sechs unabhängigen Variablen, die Sie anpassen können, um die Ausgabe zu verbessern.** Dies sind die „Hebel" der Optimierung. Wenn ein Prompt fehlschlägt, lässt sich der Fehlschlag auf einen oder mehrere dieser Hebel zurückführen, die nicht korrekt eingestellt sind. Die Fertigkeit der Optimierung besteht darin, ein Symptom dem richtigen Hebel zuzuordnen, ihn zu ändern und das Ergebnis zu messen.',
          ],
          columns: ['Hebel', 'Was es ändert', 'Optimierungsmaßnahme', 'Beispiel'],
          rows: [
            { 'Hebel': 'Spezifität', 'Was es ändert': 'Wie präzise die Aufgabe definiert ist', 'Optimierungsmaßnahme': 'Schreibe vage Ziele als exakte Anweisung um', 'Beispiel': '„Fasse zusammen" → „Liste 3 Schlüsselbefunde in je ≤20 Wörtern auf"' },
            { 'Hebel': 'Kontext', 'Was es ändert': 'Informationen, die das Modell verarbeitet', 'Optimierungsmaßnahme': 'Addiere Hintergrund, Zielgruppe, Einschränkungen', 'Beispiel': '„Schreibe einen Bericht" → „Schreibe einen Bericht für einen nicht technisch versierten CFO"' },
            { 'Hebel': 'Beispiele', 'Was es ändert': 'Verständnis des Modells für das gewünschte Ausgabeformat', 'Optimierungsmaßnahme': 'Füge 1–3 Input/Output-Paare hinzu (Few-Shot)', 'Beispiel': 'Zeige das gewünschte Format genau einmal' },
            { 'Hebel': 'Einschränkungen', 'Was es ändert': 'Grenzen dessen, was das Modell ausgeben kann', 'Optimierungsmaßnahme': 'Addiere explizite Verbote', 'Beispiel': '„Verwende keine Fachjargon. Maximum 150 Wörter."' },
            { 'Hebel': 'Ausgabeformat', 'Was es ändert': 'Struktur der Antwort', 'Optimierungsmaßnahme': 'Spezifiziere das Format explizit', 'Beispiel': '„Antworte in JSON: {title, summary, tags[]}"' },
            { 'Hebel': 'Rolle/Persona', 'Was es ändert': 'Expertise-Niveau, das das Modell annimmt', 'Optimierungsmaßnahme': 'Addiere eine spezifische Rolle', 'Beispiel': '„Handele als Senior Data Analyst bei einem B2B-SaaS-Unternehmen"' },
          ],
        },

        callout2: {
          blockquote: 'Die Skalierung von GPT-3 zeigte, dass Few-Shot-Lernen mit einigen Beispielen im Prompt und ohne Gradientenaktualisierungen bei manchen Aufgaben mit früheren führenden Fine-Tuning-Ansätzen mithalten konnte.',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        optimizationProcess: {
          title: 'Der 6-Schritte-Optimierungsprozess',
          content: [
            '**Prompt-Optimierung ist ein systematischer, messbarer Prozess.** Jeder Schritt verengt die Diagnose: Du identifizierst das Symptom, ordnest es einem Hebel zu, änderst eine Variable, testest über Modelle hinweg und misst die Verbesserung. Dies ist der genaue Prozess:',
          ],
          items: [
            '**Schritt 1: Richte eine Baseline ein.** Führe den aktuellen Prompt auf deiner Zielaufgabe 3 Mal mit repräsentativen Eingaben aus. Notiere den Fehlermodus: Ist die Ausgabe zu lang oder zu kurz? Falsches Format? Halluzinationen? Außer Thema? Nebensächlich? Diese Baseline ist entscheidend – ohne sie kannst du Verbesserung nicht messen.',
            '**Schritt 2: Identifiziere den richtigen Hebel.** Ordne den Fehler einem der 6 Hebel zu. Beispiele: „Ausgabe ist eine Prosa-Wand statt Aufzählungspunkte" → Ausgabeformat-Hebel; „Antwort ist vage" → Spezifität-Hebel; „Ton ist falsch" → Rollen-Hebel; „enthält erfundene Fakten" → Kontext- oder Beschränkungs-Hebel.',
            '**Schritt 3: Ändere eine Variable.** Mache eine einzelne, gezielte Änderung am identifizierten Hebel. Ändere nicht das Ziel, addiere Beispiele UND ändere das Format in einer Überarbeitung – du kannst Verbesserung nicht zurechnen, wenn sich drei Dinge geändert haben. Diese Isolierung ist nicht verhandelbar.',
            '**Schritt 4: Teste über Modelle hinweg.** Führe den überarbeiteten Prompt auf GPT-5.6, Claude Opus 5 und Gemini 3.1 Pro aus. Ein Prompt, der auf nur einem Modell funktioniert, ist fragil und modellspezifisch. Nutze PromptQuorum, um einen Prompt gleichzeitig an alle drei zu versenden und Antworten Seite an Seite zu vergleichen. Übereinstimmung über Modelle hinweg bedeutet, der Prompt ist robust; Abweichung bedeutet, du brauchst weitere Verfeinerung.',
            '**Schritt 5: Messe gegen Kriterien.** Hat die Genauigkeit sich verbessert? Hat das Format die Anforderungen erfüllt? Sind Halluzinationen gesunken? Bestehen Ausgaben jetzt Konsistenz-Tests (3× in Folge ausführen)? Messung ist wie du bestätigst, dass die Änderung funktioniert hat. Wenn du die Änderung machtest, aber keine Verbesserung sahst, addressierte die Änderung nicht die Grundursache – versuche einen anderen Hebel.',
            '**Schritt 6: Speichere in einer Prompt-Bibliothek.** Ein getesteter, optimierter Prompt ist ein wiederverwendbarer Vermögenswert. Dokumentiere was sich geändert hat und warum es sich verbessert hat. Versioniere es. Eine Prompt-Bibliothek, die gespeichert und versionskontrolliert ist, ist weit wertvoller als ein einmaliger Prompt, der ein Problem einmal gelöst hat.',
          ],
        },

        callout3: {
          blockquote: 'In einem vorab registrierten Online-Experiment mit 453 Fachkräften mit Hochschulabschluss und berufsspezifischen Schreibaufgaben senkte der Zugang zu ChatGPT die durchschnittliche Bearbeitungszeit um 40 % und erhöhte die Ausgabequalität um 18 %. Die Ungleichheit zwischen den Teilnehmenden nahm ab.',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        measurementCriteria: {
          title: 'Wie man Prompt-Qualität misst',
          content: [
            '**Du kannst nicht optimieren, was du nicht messen kannst.** Die folgenden Kriterien definieren, ob ein Prompt erfolgreich war. Nutze diese Kontrollpunkte nach jeder Iteration:',
          ],
          columns: ['Kriterium', 'Was zu prüfen ist', 'Bestanden / Fehler Signal'],
          rows: [
            { 'Kriterium': 'Aufgabengenauigkeit', 'Was zu prüfen ist': 'Beantwortet die Ausgabe die tatsächliche Frage?', 'Bestanden / Fehler Signal': 'Vergleiche gegen eine bekannt korrekte Antwort' },
            { 'Kriterium': 'Format-Einhaltung', 'Was zu prüfen ist': 'Entspricht die Ausgabe der spezifizierten Struktur?', 'Bestanden / Fehler Signal': 'Analysiert JSON korrekt? Sind Aufzählungslängen angemessen?' },
            { 'Kriterium': 'Faktische Grundierung', 'Was zu prüfen ist': 'Sind spezifische Behauptungen korrekt?', 'Bestanden / Fehler Signal': 'Spot-Check 3–5 Fakten' },
            { 'Kriterium': 'Konsistenz', 'Was zu prüfen ist': 'Produziert Wiederholung ähnliche Ausgabe?', 'Bestanden / Fehler Signal': 'Führe denselben Prompt 3× aus – unterscheiden sich Ausgaben strukturell?' },
            { 'Kriterium': 'Token-Effizienz', 'Was zu prüfen ist': 'Ist die Ausgabelänge angemessen?', 'Bestanden / Fehler Signal': 'Messe Token-Zahl vs. Informationsdichte' },
            { 'Kriterium': 'Modellübergreifende Übereinstimmung', 'Was zu prüfen ist': 'Produzieren 2–3 Modelle ähnliche Ergebnisse?', 'Bestanden / Fehler Signal': 'Sende an GPT-5.6, Claude, Gemini via PromptQuorum – Übereinstimmung = robust' },
          ],
        },

        callout4: {
          blockquote: 'In einem Experiment mit 758 BCG-Beratern erzielten KI-Nutzer bei 18 realistischen Aufgaben innerhalb der Fähigkeitsgrenze der KI Ergebnisse, deren Qualität um mehr als 40 % höher bewertet wurde als in der Kontrollgruppe. Bei einer Aufgabe, die gezielt außerhalb dieser Grenze lag, lieferten KI-Nutzer um 19 Prozentpunkte seltener korrekte Lösungen.',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        beforeAfterExamples: {
          title: 'Wie sieht Prompt-Optimierung in der Praxis aus?',
          content: [],
          items: [
            '**Schlecht:** „Fasse diesen Artikel zusammen." | **Verbessert:** „Fasse in 3 Aufzählungspunkten zusammen, je ≤20 Wörter. Fokus auf geschäftliche Auswirkungen." | **Warum:** Ein Ausgabeformat kann Inkonsistenzen verringern.',
            '**Schlecht:** „Überprüfe diesen Code." | **Verbessert:** „Überprüfe auf (1) Korrektheit, (2) Leistung, (3) Sicherheit. Zitiere Zeilennummern. Max 3 Probleme." | **Warum:** Rolle + Beschränkungen können generische Rückmeldungen verringern.',
            '**Schlecht:** „Synthesiere diese Papers." | **Verbessert:** „Synthesiere nur aus den 5 bereitgestellten Papers. Format: [Befund A]. [Befund B]. [Implikation]. Erfinde nicht." | **Warum:** Kontext + Beschränkungen können Halluzinationen verringern.',
            '**Schlecht:** „Schreibe eine Email an einen Kunden." | **Verbessert:** „Schreibe eine Email an einen wütenden Kunden, der 2 Wochen auf Support wartete. Entschuldige dich einmal, biete 2 Lösungen, frage nach Vorliebe. ≤150 Wörter." | **Warum:** Spezifität + Beschränkungen verbessern Ton und Relevanz.',
            '**Schlecht:** „Extrahiere Daten aus dieser Tabelle." | **Verbessert:** „Extrahiere Namen und Beträge als JSON: [{\"name\": \"...\", \"amount\": ...}]. Keine Erklärungen." | **Warum:** Ein explizites Format kann unerwünschten Fließtext verringern.',
            '**Schlecht:** „Ist dieser Code sicher?" | **Verbessert:** „Überprüfe auf: (1) SQL-Injection, (2) unvalidierte Benutzereingabe, (3) hardcodierte Secrets. Antworte mit jedem Fund als: [Zeile N: Problem]. Keine Falsch-Positive." | **Warum:** Spezifität + Beschränkungen verbessern Genauigkeit.',
          ],
        },

        definitionBoxes: {
          title: 'Was bedeuten diese Prompt-Optimierungsbegriffe?',
          content: [],
          items: [
            '**Prompt-Optimierung** — Der iterative Prozess der Überarbeitung eines Prompts zur Verbesserung der Ausgabequalität durch Diagnose von Fehlermodi und Änderung jeweils einer Variable (Spezifität, Kontext, Beispiele, Beschränkungen, Format oder Rolle). Siehe [5 Bausteine, die jeder Prompt braucht](/de/prompt-engineering/5-building-blocks-every-prompt-needs) für die strukturellen Elemente, die du optimierst.',
            '**Few-Shot-Prompting** — Einbeziehen von 1–3 Input/Output-Beispielen im Prompt, um das Modell das gewünschte Format oder Muster zu lehren. Siehe [Zero-Shot vs. Few-Shot-Prompting](/de/prompt-engineering/zero-shot-vs-few-shot) für wann man Beispiele als primären Optimierungshebel hinzufügt.',
            '**Chain-of-Thought (CoT)** — Das Modell Schritt-für-Schritt argumentieren lassen („denk nach, bevor du antwortest"), was mehrstufiges Schlussfolgern verbessern kann; der Effekt hängt von Modell und Aufgabe ab. Siehe [Chain-of-Thought-Prompting](/de/prompt-engineering/chain-of-thought-prompting) für detaillierte Techniken.',
            '**Beschränkung** — Ein explizites Verbot oder eine Grenze (z.B. „verwende keine Fachjargon", „maximum 150 Wörter", „zitiere nur Quellen"), die Ausgabespielraum einengt und häufige Fehlermodi verhindert. Siehe [Constrained Prompting](/de/prompt-engineering/constrained-prompting) für erweiterte Beschränkungsmuster.',
            '**Token** — Die kleinste Texteinheit, die das Modell verarbeitet; etwa 4 Zeichen oder 1 Wort im Englischen. Prompt-Länge und Ausgabebudget werden in Tokens gemessen. Siehe [Tokens, Kosten & Limits](/de/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) für Kostenberechnung.',
            '**Halluzination** — Selbstbewusste aber faktisch falsche Ausgabe; tritt auf, wenn das Modell Fakten erfindet, nicht existierende Studien zitiert oder unbegründete Behauptungen wiederholt. Siehe [KI-Halluzinationen: Warum KI Dinge erfindet](/de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — gemindert durch Hinzufügen von Verankerungskontext, Beispielen und Beschränkungen.',
            '**Fine-Tuning** — Umschulung von Modellgewichten auf domänenspezifischen beschrifteten Daten; verwendet, wenn Prompt-Optimierung die erforderliche Qualität nicht erreichen kann. Erschöpfe immer Optimierung bevor Fine-Tuning — es ist langsamer und teurer.',
            '**RAG (Retrieval-Augmented Generation)** — Einspritzen von abgerufenen Dokumenten in den Prompt-Kontext bevor du das Modell fragst. Siehe [RAG erklärt](/de/prompt-engineering/rag-explained) — komplementär zur Optimierung (RAG verbessert Information; Optimierung verbessert wie das Modell sie nutzt).',
            '**System-Prompt** — Persistente Anweisung, die die Rolle, Beschränkungen und das Verhalten des Modells über alle Züge setzt. Siehe [System-Prompt vs. User-Prompt](/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — erfordert separate Optimierungstests vom nutzerfachigen Prompt.',
            '**Spezifität** — Präzision in der Aufgabendefinition; von vagen Anweisungen („fasse zusammen") zu exakten Anforderungen („liste 3 Aufzählungspunkte, je ≤20 Wörter"). Der erste und oft höchsten Impact-Optimierungshebel zum Anpassen.',
          ],
        },

        modelSpecificTips: {
          title: 'Modellspezifische Optimierungstipps',
          content: [
            '**Die 6 Optimierungshebel gelten über alle großen Modelle — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro und Mistral Large.** Allerdings reagiert jedes Modell unterschiedlich auf Anweisungsdichte, Format-Spezifität und Rollendefinition. Hier sind modellspezifische Tuning-Tipps: Es sind allgemeine Ausgangspunkte, keine Messergebnisse; prüfen Sie jeden mit Ihren eigenen Eingaben.',
          ],
          items: [
            '**GPT-5.6 (OpenAI):** Reagiert gut auf explizite JSON-Format-Anfragen und Markdown-Überschriften in System-Prompts. Anweisungsfolgung ist stark — enge Beschränkungen reduzieren Über-Erklärung. Wenn dein GPT-5.6-Prompt über-erklärt, addiere eine Beschränkung: „Sei prägnant. Erkläre dein Denken nicht, es sei denn gefragt."',
            '**Claude Opus 5 (Anthropic):** Excelliert bei nuancierten, mehrteiligen Anweisungen. Handhabt lange, detaillierte System-Prompts zuverlässig. Profitiert von expliziter Ausgabelänge-Anleitung („antworte in ≤200 Wörtern"). Wenn du für Kürze optimierst, sei spezifisch: „Antworte in nicht mehr als 150 Wörtern."',
            '**Gemini 3.1 Pro (Google DeepMind):** Geeignet für die Analyse langer Dokumente (großes Kontextfenster). Explizite Abschnittsüberschriften in Prompts verbessern Konsistenz strukturierter Ausgabe. Wenn du lange Dokumente verarbeitest, addiere Überschriften: „## Input-Dokument\n[dokument]\n## Aufgabe\n[aufgabe]."',
            '**Mistral Large (Mistral AI):** Profitiert von expliziten Rollendefinitionen und preskriptiverer Anweisungsformulierung. Wenn dein Prompt auf GPT-5.6 funktioniert aber nicht auf Mistral, mache Anweisungen expliziter und addiere eine Rolle: „Du bist ein [spezifische Rolle]. Deine Aufgabe ist es, [explizites Ziel]."',
          ],
        },

        localLLMExamples: {
          title: 'Optimierung von Prompts für lokale LLMs (Ollama, LM Studio)',
          content: [
            '**Lokale Modelle betrieben via Ollama oder LM Studio reagieren auf dieselben 6 Optimierungshebel, aber mit engeren Toleranzen.** Quantisierte Modelle (4-Bit, 8-Bit) befolgen Anweisungen möglicherweise weniger zuverlässig; beginnen Sie daher mit einfachen, expliziten Prompts. Die Beispiele unten zeigen vorher/nachher-Optimierung für drei häufige lokale LLM-Fehlermodi. Die Szenarien dienen der Veranschaulichung und sind keine Testergebnisse: Die Modellnamen zeigen nur typische lokale Setups, und die beschriebenen Fehler sind mögliche, keine gemessenen Schwächen dieser Modelle.',
          ],
          items: [
            '**Beispiel 1: Quantisiertes Modell Ausgabe-Inkonsistenz (Hebel: Ausgabeformat + Beschränkungen)**\n_Modell:_ LLaMA 3.1 8B via Ollama (4-Bit-Quantisierung)\n_Schwacher Prompt:_ „Fasse diesen Support-Ticket zusammen."\n_Möglicher Fehlermodus:_ Ausgabe variiert wildly zwischen Läufen — manchmal ein Satz, manchmal eine Liste, manchmal eine Gegenfrage an den Benutzer.\n_Hebel geändert:_ Ausgabeformat + Temperatur-Beschränkung.\n_Optimierter Prompt:_ „Fasse diesen Support-Ticket in genau 2 Sätzen zusammen. Satz 1: das Problem des Kunden. Satz 2: was sie versucht haben. Kein anderer Text."\n_Zusätzliche Behebung:_ Starten Sie `ollama run llama3.1` und geben Sie dann `/set parameter temperature 0.1` ein.\n_Ziel (kein Messergebnis):_ Zusammenfassungen mit genau 2 Sätzen; prüfen Sie das mit Ihrem Modell und Ihren Tickets.',
            '**Beispiel 2: Kontextlängen-Beschränkung Fehlschlag auf LM Studio (Hebel: Spezifität + Kontext)**\n_Modell:_ Mistral Small Instruct via LM Studio (Q4_K_M-Quantisierung, 4096-Token-Kontext)\n_Schwacher Prompt:_ „Analysiere dieses Dokument und liste die Schlüssel-Risiken auf." [volles 3.000-Wort-Dokument eingefügt]\n_Möglicher Fehlermodus:_ Modell bricht in der Mitte der Analyse ab, übersieht das letzte Drittel des Dokuments, erzeugt unvollständige Ausgabe ohne Abbruch zu signalisieren.\n_Hebel geändert:_ Spezifität — reduziere Umfang um ins Kontext-Budget zu passen.\n_Optimierter Prompt:_ „Du bist ein Risikoanalyst. Lese den folgenden Dokumentausschnitt (nur erste 1.500 Wörter) und liste bis zu 5 spezifische Risiken, je ≤15 Wörter. Format: Risiko 1: [Beschreibung]. Risiko 2: [Beschreibung]. Stoppe nach 5."\n_Ziel (kein Messergebnis):_ Eine Analyse, die ins Kontextfenster passt; prüfen Sie die Ausgabe auf Abbrüche.',
            '**Beispiel 3: Anweisungs-Überschreibung in Quantisierten Modellen (Hebel: Beschränkungen)**\n_Modell:_ Phi-3 Mini via Ollama\n_Schwacher Prompt:_ „Extrahiere alle Daten aus diesem Text. Gib nur JSON zurück."\n_Möglicher Fehlermodus:_ Modell gibt JSON plus einen Absatz Erklärung zurück („Hier sind die Daten, die ich gefunden habe..."). Kleine Modelle addieren häufig unverlangt Kommentar sogar wenn Format spezifiziert ist.\n_Hebel geändert:_ Beschränkungen — explizites Verbot.\n_Optimierter Prompt:_ „Extrahiere alle Daten aus dem Text unten. Gib nur ein JSON-Array zurück. Keine Erklärung. Keine Einleitung. Kein Kommentar. Ausgabe: [\\\"datum1\\\", \\\"datum2\\\", ...]"\n_Ziel (kein Messergebnis):_ JSON ohne zusätzlichen Text; prüfen Sie es per Parser, denn kleine Modelle können dennoch Text ergänzen.',
          ],
        },

        commonMistakes: {
          title: 'Die 7 häufigsten Optimierungsfehler',
          content: [
            '**Optimierungen scheitern meistens wegen Prozessfehlern, nicht konzeptuellem Missverständnis.** Hier sind die häufigsten Fallstricke und wie man sie vermeidet:',
          ],
          items: [
            '**Fehler 1: Mehrere Variablen gleichzeitig ändern.** Du addierst Beispiele, änderst das Ausgabeformat UND passt die Rolle in einer Überarbeitung an. Jetzt wenn die Ausgabe sich verbessert, weißt du nicht welche Änderung geholfen hat. Effektive Optimierung isoliert eine Änderung pro Iteration.',
            '**Fehler 2: Optimierung auf eine einzelne Eingabe.** Du testest ein Beispiel, siehst Verbesserung und erklärst Erfolg. Im echten Gebrauch scheitert der Prompt bei verschiedenen Eingaben. Teste auf 5–10 repräsentative Beispiele. Wenn der Prompt nicht auf allen 5 erfolgreich ist, weiter optimieren.',
            '**Fehler 3: Optimierung für nur ein Modell.** Du optimierst für GPT-5.6, siehst perfekte Ergebnisse, dann stellst bereit auf Claude. Dort kann er fehlschlagen. Jedes Modell hat leicht verschiedenes Anweisungs-Folge-Verhalten. Teste auf mindestens 2 Modellen (GPT-5.6 und Claude Opus 5); ideal 3.',
            '**Fehler 4: Ausgabeformat ignorieren.** Ein Prompt erzeugt die richtigen Fakten aber in der falschen Struktur. „Falsches Format" ist der häufigste und schnellste Fehlermodus zu beheben. Spezifiziere immer: „Antworte in JSON mit Feldern: [liste]" oder „Verwende eine Markdown-Tabelle mit Spalten: [liste]." Format-Einhaltung ist oft der Unterschied zwischen nutzbarer und unbrauchbarer Ausgabe.',
            '**Fehler 5: Über-Prompting.** Du addierst 15 Beschränkungen, 5 Rollenbeschreibungen und 10 Beispiele in einen 200-Token-Prompt. Zu viele gleichzeitige Anweisungen überfordern das Modell. Starte minimal, addiere dann Beschränkungen nur wenn nötig. Wenn ein Prompt nicht funktioniert, ist der erste Schritt zu vereinfachen, nicht zu expandieren.',
            '**Fehler 6: Optimierung mit Fine-Tuning verwechseln.** Optimierung verbessert Prompts; Fine-Tuning trainiert das Modell. Wenn du alle 6 Hebel versucht hast und der Prompt immer noch schlägt fehl, kann dem Modell Wissen oder Fähigkeit für die Aufgabe mangeln — das ist ein Fine-Tuning-Problem, nicht ein Optimierungs-Problem. Fine-Tuning ist viel langsamer und teurer. Erschöpfe Prompt-Optimierung erst.',
            '**Fehler 7: Optimierte Prompts nicht speichern.** Du optimierst einen Prompt, stellst bereit, und optimierst dann denselben Prompt 6 Monate später weil niemand die Version speicherte, die funktionierte. Eine Prompt-Bibliothek — versionskontrolliert, dokumentiert und geteilt — verwandelt Optimierungsarbeit in ein dauerhaftes Vermögenswert.',
          ],
        },

        advancedTechniques: {
          title: 'Prompt-Optimierungstechniken: Fortgeschrittene Methoden',
          content: [
            '**Jenseits der 6 Kern-Hebel wenden fortgeschrittene Prompt-Optimierungstechniken spezialisierte Muster an, um spezifische Fehlermodi zu beheben.** Diese Techniken kombinieren mehrere Hebel oder schichten Beschränkungen, um schwierigere Probleme zu lösen. Erfahre, welche Techniken du je nach deiner Optimierungsherausforderung anwendest:',
          ],
          items: [
            '[Few-Shot vs. Zero-Shot](/de/prompt-engineering/zero-shot-vs-few-shot) — Addiere 1–3 Beispiel-Input-Output-Paare zum Prompt, wenn das Modell die Ausgabe nicht korrekt formatiert oder den gewünschten Stil vermisst. Few-Shot-Beispiele sind die direkteste Art, Format zu lehren.',
            '[Chain-of-Thought](/de/prompt-engineering/chain-of-thought-prompting) — Füge „denke Schritt für Schritt vor der Antwort" ein, um Fehler beim mehrstufigen Denken zu beheben. Diese Technik kann mehrstufiges Schlussfolgern verbessern; der Effekt hängt von Modell und Aufgabe ab.',
            '[Constrained Prompting](/de/prompt-engineering/constrained-prompting) — Addiere explizite Verbote („Verwende keinen Jargon", „Erfinde keine Zahlen", „Wiederhole die Eingabe nicht"), um Umfang und Stil-Fehler zu beheben. Beschränkungen sind stärker als Anweisungen.',
            '[Self-Consistency](/de/prompt-engineering/self-consistency-prompting) — Generiere die Ausgabe des Prompts 3–5 Mal unabhängig, dann gebe die häufigste Antwort zurück. Dies reduziert Halluzinationen bei unwahrscheinlichen Fakten durch das Kombinieren von Modell-Läufen.',
            '[Strukturierte Ausgabe](/de/prompt-engineering/structured-output-and-json-mode) — Fordere JSON, Markdown-Tabellen oder andere maschinenlesbare Formate an, um Format-Compliance-Fehler zu beheben. Strukturierte Ausgabe ist schneller zu parsen und fehleranfälliger als Prosa.',
          ],
        },

        keyTerms: {
          title: 'Was bedeuten die wichtigsten Begriffe der Prompt-Optimierung?',
          items: [
            '[Few-Shot-Prompting](/de/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — Einbeziehen einer kleinen Anzahl von Input/Output-Beispielen im Prompt, damit das Modell das gewünschte Muster oder Format ableitet; der Hebel „Beispiele" im 6-Hebel-Optimierungsframework',
            '[Chain-of-Thought (CoT)](/de/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — Das Modell auffordern, Schritt für Schritt zu argumentieren, bevor es antwortet; die primäre Technik zur Behebung mehrstufiger Denkfehler',
            '[Self-Consistency](/de/prompt-engineering/prompt-engineering-glossary#self-consistency) — Mehrere Ausgaben generieren und die häufigste Antwort zurückgeben; reduziert Halluzinationsraten bei unwahrscheinlichen Fakten',
            '[Zero-Shot-Prompting](/de/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — Prompting ohne Beispiele; die Baseline, an der Few-Shot-Optimierung gemessen wird',
            '[Halluzination](/de/prompt-engineering/prompt-engineering-glossary#hallucination) — Selbstbewusst klingende, aber faktisch falsche Ausgabe; einer der primären Fehlermodi, auf die Optimierung abzielt',
            '[Fine-Tuning](/de/prompt-engineering/prompt-engineering-glossary#fine-tuning) — Umschulung von Modellgewichten auf domänenspezifischen Daten; die Alternative zur Prompt-Optimierung, wenn eine harte Qualitätsobergrenze erreicht wurde',
            '[RAG (Retrieval-Augmented Generation)](/de/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — Einspeisen abgerufener Dokumente in den Prompt-Kontext; ergänzt Prompt-Optimierung (RAG verbessert die Information; Optimierung verbessert, wie das Modell sie nutzt)',
            '[System-Prompt](/de/prompt-engineering/prompt-engineering-glossary#system-prompt) — Persistente Anweisung, die Rolle, Beschränkungen und Verhalten des Modells über alle Gesprächsrunden festlegt; erfordert einen eigenen Optimierungsdurchgang',
            '[Temperatur](/de/prompt-engineering/prompt-engineering-glossary#temperature) — Dekodierungsparameter, der die Zufälligkeit der Ausgabe steuert; niedrigere Temperatur verbessert die Konsistenz über Optimierungs-Testläufe hinweg',
            '[Prompt-Chaining](/de/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — Aufteilen komplexer Aufgaben in eine Sequenz kleinerer Prompts; jeder Teil-Prompt profitiert von unabhängiger Optimierung',
          ],
        },

        promptLibrary: {
          title: 'Optimierte Prompts in einer Bibliothek speichern',
          content: [
            '**Ein optimierter Prompt ist ein dauerhafter Vermögenswert.** Sobald du einen Prompt über 3 Modelle getestet hast, bestätigt hast, dass er auf 5–10 repräsentativen Eingaben funktioniert, und dokumentiert hast, was jeder Hebel tut — speichere ihn. Eine Prompt-Bibliothek ermöglicht es dir, optimierte Prompts über Projekte hinweg zu renutzen, sie mit deinem Team zu teilen und sie im Laufe der Zeit zu verbessern.',
            'Was mit jedem Prompt zu speichern ist: der letzte Prompt-Text, der Hebel der geändert wurde, der Fehlermodus den er behob, welche Modelle er getestet wurden, und die Bestätigung/Fehler-Ergebnisse auf deinen repräsentativen Eingaben. Diese Dokumentation trennt eine Prompt-Bibliothek von einem einfachen Ordner von Textdateien.',
            'Siehe [Baue eine Prompt-Bibliothek, die Stunden spart](/de/prompt-engineering/build-a-prompt-library) für einen vollständigen Leitfaden zur Strukturierung, Versionierung und Wartung einer Bibliothek.',
          ],
        },

        regionalCompliance: {
          title: 'Prompt-Optimierung und regulatorische Compliance',
          content: [
            'In regulierten Bereichen kann eine versionierte Prompt-Bibliothek mit Testprotokollen Ihre Dokumentation unterstützen. Allein macht sie ein System weder mit dem EU AI Act noch mit anderen Vorschriften konform.',
            'Japans KI-Leitlinien für Unternehmen vom METI und vom Ministerium für Innere Angelegenheiten und Kommunikation sind unverbindlich. Dies ist keine Rechtsberatung: Klären Sie mit qualifizierter Beratung, welche Pflichten für Sie gelten.',
          ],
        },

        multilingualReach: {
          title: 'Prompt-Optimierung über Sprachen und Regionen hinweg',
          content: [
            '**Prompt-Optimierung ist eine universelle Disziplin — die 6 Hebel und der 6-Schritte-Prozess gelten unabhängig von der Sprache, in der dein Prompt verfasst ist.** Allerdings unterscheiden sich lokale Suchbegriffe erheblich, primäre Modelle variieren nach Region, und einige Sprachen bringen einzigartige Optimierungsherausforderungen mit sich (Tokenisierungsdichte, zeichenbasierte Schriften, formelle/informelle Register). Die folgende Tabelle zeigt die wichtigsten regionalen Varianten. Siehe [Prompting über Sprachen hinweg](/de/prompt-engineering/prompting-across-languages) für einen vollständigen Leitfaden zum mehrsprachigen Prompt-Engineering.',
          ],
          columns: ['Sprache / Region', 'Lokaler Begriff', 'Primäres Modell', 'Regionaler Hinweis'],
          rows: [
            { 'Sprache / Region': 'Englisch — USA', 'Lokaler Begriff': 'prompt optimization', 'Primäres Modell': 'GPT-5.6, Claude Opus 5', 'Regionaler Hinweis': 'Amerikanische Schreibweise (-ize)' },
            { 'Sprache / Region': 'Deutsch — DE / AT / CH', 'Lokaler Begriff': 'Prompt-Optimierung', 'Primäres Modell': 'GPT-5.6, Claude Opus 5', 'Regionaler Hinweis': 'EU-AI-Act relevant für DACH-Unternehmen' },
            { 'Sprache / Region': 'Französisch — FR / CA', 'Lokaler Begriff': 'optimisation de prompt', 'Primäres Modell': 'GPT-5.6, Claude Opus 5', 'Regionaler Hinweis': 'Formelles Register' },
            { 'Sprache / Region': 'Spanisch — ES / LATAM', 'Lokaler Begriff': 'optimización de prompts', 'Primäres Modell': 'GPT-5.6', 'Regionaler Hinweis': 'Neutraler spanischer Begriff' },
            { 'Sprache / Region': 'Portugiesisch — BR', 'Lokaler Begriff': 'otimização de prompts', 'Primäres Modell': 'GPT-5.6', 'Regionaler Hinweis': 'Brasilianisch-portugiesischer Begriff' },
            { 'Sprache / Region': 'Japanisch — JP', 'Lokaler Begriff': 'プロンプト最適化', 'Primäres Modell': 'GPT-5.6 (starke Japanisch-Unterstützung)', 'Regionaler Hinweis': 'Token-Anzahl je Modell prüfen' },
            { 'Sprache / Region': 'Chinesisch vereinfacht — CN', 'Lokaler Begriff': '提示词优化', 'Primäres Modell': 'DeepSeek, Qwen 3', 'Regionaler Hinweis': 'Vereinfachte Schriftzeichen' },
            { 'Sprache / Region': 'Koreanisch — KR', 'Lokaler Begriff': '프롬프트 최적화', 'Primäres Modell': 'GPT-5.6, Claude Opus 5', 'Regionaler Hinweis': 'Token-Anzahl je Modell prüfen' },
          ],
        },

        relatedReading: {
          title: 'Weiterführende Lektüre',
          items: [
            '[Was ist Prompt Engineering?](/de/prompt-engineering/what-is-prompt-engineering) — die Grunddefinition und Kern-Bausteine des Prompt-Designs',
            '[5 Bausteine, die jeder Prompt braucht](/de/prompt-engineering/5-building-blocks-every-prompt-needs) — die strukturellen Elemente, die du optimierst',
            '[Chain-of-Thought Prompting](/de/prompt-engineering/chain-of-thought-prompting) — Schritt-für-Schritt-Denkens-Technik zur Genauigkeitsverbesserung',
            '[Zero-Shot vs Few-Shot Prompting](/de/prompt-engineering/zero-shot-vs-few-shot) — wann Beispiele als Optimierungshebel hinzufügen',
            '[Baue eine Prompt-Bibliothek, die Stunden spart](/de/prompt-engineering/build-a-prompt-library) — Bewahren optimierter Prompts als Team-Vermögenswerte',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Prompt-Optimierung',
          faqs: [
            { q: 'Was ist Prompt-Optimierung?', a: 'Prompt-Optimierung ist der iterative Prozess der Überarbeitung eines Prompts zur Verbesserung der KI-Ausgabequalität für eine spezifische Aufgabe. Es beinhaltet die Identifizierung eines Fehlermodus (falsches Format, Halluzination, vage Ausgabe), das Ändern einer Variable (Spezifität, Kontext, Beispiele, Beschränkungen, Ausgabeformat oder Rolle) und das Testen des Ergebnisses über Modelle wie GPT-5.6, Claude Opus 5 und Gemini 3.1 Pro.' },
            { q: 'Was ist der Unterschied zwischen Prompt-Optimierung und Prompt-Engineering?', a: 'Prompt-Engineering ist die Disziplin des Designs einer Prompt-Struktur von Grund auf mit Bausteinen wie Ziel, Kontext und Ausgabeformat. Prompt-Optimierung ist der iterative Subprozess der Verbesserung eines bereits geschriebenen Prompts durch Diagnose von Fehlermodi und Anwendung gezielter Änderungen. Du brauchst Prompt-Engineering, um einen Ausgangspunkt zu schaffen; du verwendest Prompt-Optimierung, um ihn zu verfeinern.' },
            { q: 'Wie viele Iterationen braucht es, um einen Prompt zu optimieren?', a: 'Für die meisten Aufgaben reichen 2–4 gezielte Iterationen, um von einem fehlgeschlagenen Prompt zu einem zuverlässigen zu gelangen. Jede Iteration sollte eine Variable ändern und auf 3–5 repräsentativen Eingaben getestet werden. Abnehmende Erträge setzen nach 5–6 Iterationen ein — wenn ein Prompt sich bis dahin nicht stabilisiert hat, könnte die Aufgabendefinition selbst überarbeitet werden müssen.' },
            { q: 'Welchen Hebel sollte ich zuerst ändern, wenn ich einen Prompt optimiere?', a: 'Beginne mit dem Ausgabeformat. Format-Nicht-Einhaltung — ein Absatz statt einer Tabelle zu erhalten oder Klartext wenn du JSON brauchst — ist der häufigste und schnellste Fehlermodus zu beheben. Spezifiziere die genaue Struktur, die du willst, dann bearbeite andere Probleme (Genauigkeit, Ton, Umfang) in nachfolgenden Iterationen.' },
            { q: 'Funktioniert Prompt-Optimierung über alle KI-Modelle?', a: 'Ja, aber mit modellspezifischen Anpassungen. Die sechs Kern-Optimierungshebel (Spezifität, Kontext, Beispiele, Beschränkungen, Ausgabeformat, Rolle) gelten für GPT-5.6, Claude Opus 5, Gemini 3.1 Pro und Mistral Large. Allerdings reagiert jedes Modell unterschiedlich auf Anweisungsdichte. Testen Sie jedes Modell, das Sie nutzen.' },
            { q: 'Was ist der häufigste Prompt-Optimierungsfehler?', a: 'Das gleichzeitige Ändern mehrerer Variablen. Wenn du Beispiele hinzufügst, das Ausgabeformat änderst und eine Rollenanweisung in derselben Überarbeitung hinzufügst, kannst du nicht feststellen, welche Änderung sich verbessert (oder verschlechtert) hat. Effektive Optimierung ändert eine Variable pro Iteration.' },
            { q: 'Kann Prompt-Optimierung KI-Halluzinationen reduzieren?', a: 'Ja, mit den richtigen Techniken. Das Hinzufügen von Grundlagen-Kontext („Basiere deine Antwort nur auf dem folgenden Dokument"), Few-Shot-Beispiele mit faktisch korrekten Ausgaben und explizite Beschränkungen („Erfinde keine Zahlen — verwende nur Daten aus dem bereitgestellten Text") können helfen, Halluzinationen zu verringern. Self-Consistency-Prompting — das Generieren mehrerer Ausgaben und Zurückgeben der häufigsten — reduziert weiter niedrig-wahrscheinliche Erfindungen.' },
            { q: 'Wann sollte ich Fine-Tuning statt Prompt-Optimierung verwenden?', a: 'Verwende Fine-Tuning, wenn Prompt-Optimierung ein Plafond erreicht hat — typischerweise wenn das erforderliche Verhalten hochgradig domänenspezifisch ist, konsistente stilistische Stimme über Tausende von Ausgaben benötigt, oder abhängig ist von Wissen, das nicht in der Basis-Trainierung des Modells enthalten ist. Prompt-Optimierung ist schneller und günstiger und sollte immer vor Fine-Tuning ausgeschöpft werden.' },
            { q: 'Woher weiß ich, wenn ein Prompt vollständig optimiert ist?', a: 'Ein Prompt ist ausreichend optimiert, wenn er: (1) korrekte Ausgabe auf 4–5 repräsentativen Eingaben erzeugt, (2) konsistente Ausgabe bei Neu-Läufen erzeugt, (3) über mindestens zwei Modelle funktioniert (z.B. GPT-5.6 und Claude), und (4) die Format-Spezifikation ohne Nach-Verarbeitung erfüllt. Perfekte Prompts existieren nicht — „optimiert" bedeutet zuverlässig genug für den Anwendungsfall.' },
            { q: 'Gilt Prompt-Optimierung für Bild-Prompts (Text-zu-Bild)?', a: 'Die Grundsätze gelten — Spezifität, Beschränkungen und Beispiele (Referenzbilder) sind alle gültige Hebel für Bildmodelle wie DALL-E 3 und Stable Diffusion. Allerdings unterscheiden sich die Mechaniken: Bildmodelle reagieren auf Style-Modifizierer, Seitenverhältnisse und negative Prompts als Beschränkungen. Der Optimierungsprozess (Basis → Diagnose → eine Variable ändern → Testen) ist identisch.' },
            { q: 'Was ist automatische Prompt-Optimierung?', a: 'Automatische Prompt-Optimierung verwendet ein zweites KI-Modell (oder dasselbe Modell in einer Meta-Prompting-Schleife), um Prompts ohne menschliches Eingreifen umzuschreiben und zu verbessern. Tools wie DSPy (Stanford), TextGrad und APE (Automatic Prompt Engineer) generieren Kandidaten-Prompts, bewerten sie gegen eine Metrik (Genauigkeit, Format-Einhaltung, Benutzer-Rating) und wählen die beste Variante. Manuelle Optimierung ist schneller für gut verstandene Aufgaben; automatische Optimierung skaliert besser, wenn du markierte Evaluierungs-Daten hast und Hunderte von Varianten testen musst.' },
            { q: 'Wie unterscheidet sich Prompt-Optimierung von Prompt Tuning?', a: 'Prompt-Optimierung verbessert diskrete Text-Prompts — die Anweisungen, die du in natürlicher Sprache schreibst — ohne Modellgewichte zu ändern. Prompt Tuning (eingeführt von Lester et al., 2021) lernt kontinuierliche Soft-Prompt-Vektoren, die der Eingabe vorgestellt und durch Gradientenabstieg neben oder statt des Modells trainiert werden. Prompt Tuning erfordert Rechenleistung und Trainingsdaten; Prompt-Optimierung erfordert keines von beiden. Für die meisten Produktionsanwendungsfälle optimieren Sie zunächst diskrete Prompts und ziehen Prompt Tuning erst in Betracht, wenn eine harte Qualitätsgrenze erreicht wurde.' },
            { q: 'Was sind die besten Tools für Prompt-Optimierung?', a: 'Es gibt nicht das eine beste Tool. Beispiele sind: PromptQuorum (vom Herausgeber dieser Website; einen Prompt an GPT-5.6, Claude und Gemini gleichzeitig versenden für die Vergleichsanalyse), DSPy (programmgesteuerte Prompt-Optimierung mit automatischer metrik-basierter Auswahl), LangSmith (Prompt-Versionierung, A/B-Tests und Tracing für LangChain-Pipelines), Promptfoo (Open-Source-CLI zum Ausführen von Prompts gegen Testfälle und Regressionstests) und PromptLayer (Prompt-Versionierung und Analytik). Für manuelle Iteration genügt eine Tabelle, die Prompt-Version, Eingabe, Ausgabe und Bestanden/Fehlgeschlagen gegen Kriterien protokolliert, für die meisten einteiligen Optimierungsarbeiten.' },
            { q: 'Wie optimiere ich einen System-Prompt?', a: 'System-Prompt-Optimierung folgt dem gleichen 6-Schritte-Prozess wie Benutzer-Prompt-Optimierung mit zwei zusätzlichen Einschränkungen. Erstens, System-Prompts bleiben über alle Wendungen erhalten — eine zu spezifische Anweisung kann die Leistung bei Eingaben, die du nicht erwartet hast, beeinträchtigen. Testen Sie über 5–10 vielfältige repräsentative Eingaben, nicht nur eine. Zweitens ist die System-Prompt-Länge wichtig: sehr lange System-Prompts können die Anweisung-Befolgung in späteren Benutzer-Wendungen auf einigen Modellen reduzieren. Optimieren Sie für Kürze: jede Anweisung in dem System-Prompt sollte notwendig sein. Entfernen Sie alle Anweisungen, die die Ausgabe auf Ihrem Testsatz nicht ändern.' },
            { q: 'Kann ich ChatGPT zur Prompt-Optimierung nutzen?', a: 'Ja. Sie können GPT-5.6 bitten, einen Prompt umzuschreiben, indem Sie den fehlgeschlagenen Prompt und die Fehlermodus-Beschreibung bereitstellen: „Dieser Prompt erzeugt Ausgaben, die zu vage sind. Schreibe ihn um, um eine 3-Punkte-strukturierte Antwort zu erfordern." Dies ist eine Form des Meta-Promptings — das Modell verwenden, um seine eigenen Eingaben zu verbessern. Die Einschränkung ist, dass GPT-5.6 für das optimieren wird, was es für besser hält, nicht unbedingt, was Ihre spezifischen Evaluierungskriterien erfordern. Testen Sie immer den umgeschriebenen Prompt auf echten Eingaben und messen Sie gegen Ihre tatsächlichen Bestanden/Fehlgeschlagen-Kriterien, bevor Sie die Überarbeitung akzeptieren.' },
            { q: 'Was bedeutet Prompt-Optimierung im Machine-Learning-Kontext?', a: 'Im Machine-Learning-Kontext bezieht sich Prompt-Optimierung auf Techniken, die die Prompts verbessern, die in ein Sprachmodell als Teil einer Pipeline eingehen — ohne das Modell selbst umzuschulen. Dies umfasst sowohl diskrete Prompt-Optimierung (Umschreiben natürlichsprachiger Anweisungen) als auch kontinuierliche Prompt-Abstimmung (Erlernen von Soft-Token-Einbettungen durch Gradientenabstieg). In ML-Produktionssystemen ist Prompt-Optimierung typischerweise Teil der Inferenz-Pipeline: der Prompt wird als Hyperparameter behandelt, der gegen einen einbehaltenen Evaluierungssatz optimiert wird, ähnlich wie bei der Lernraten-Auswahl beim Modelltraining.' },
            { q: 'Wie viel verbessert Prompt-Optimierung die Ausgabequalität?', a: 'Das hängt vom Modell, von der Aufgabe und vom Ausgangsprompt ab; einen allgemeinen Prozentwert gibt es nicht. Messen Sie selbst: Testen Sie den alten und den neuen Prompt mit denselben Eingaben und vergleichen Sie die Erfolgsquoten.' },
            { q: 'Sollte ich Prompts für jedes Modell separat optimieren?', a: 'Beginnen Sie mit einer modellunabhängigen Optimierung — wenden Sie die 6 Hebel (Spezifität, Kontext, Beispiele, Beschränkungen, Ausgabeformat, Rolle) an und testen Sie auf GPT-5.6, Claude Opus 5 und Gemini 3.1 Pro. Ein gut strukturierter Prompt funktioniert typischerweise gut über alle drei. Fügen Sie nur modellspezifische Varianten hinzu, wenn übergreifende Tests divergente Ergebnisse zeigen. Modellspezifische Anpassungen, die einen Test wert sind: Claude handhabt längere mehrteilige System-Prompts gut; GPT-5.6 profitiert von expliziten JSON-Format-Anfragen; Gemini 3.1 Pro profitiert von expliziten Abschnittsüberschriften in Aufgaben mit langen Dokumenten. Führen Sie modellspezifische Varianten in einer Prompt-Bibliothek mit Versions-Notizen auf.' },
            { q: 'Was ist der Unterschied zwischen Prompt-Optimierung und RAG?', a: 'Prompt-Optimierung verbessert die Anweisungen und die Struktur eines Prompts. Retrieval-Augmented Generation (RAG) verbessert die Informationen, die dem Modell zur Inferenzzeit zur Verfügung stehen, indem relevante Dokumente abgerufen und in den Prompt-Kontext eingefügt werden. Die zwei sind sich ergänzend: RAG löst das Problem, dass das Modell nicht die richtigen Fakten hat; Prompt-Optimierung löst das Problem, dass das Modell diese Fakten nicht richtig verarbeitet. Eine vollständig optimierte RAG-Pipeline erfordert sowohl gutes Abrufen (die richtigen Dokumente werden abgerufen) als auch einen gut optimierten Prompt (das Modell wird angewiesen, nur den abgerufenen Inhalt zu verwenden, Quellen zu zitieren und die Antwort korrekt zu formatieren).' },
            { q: 'Wie optimiere ich Prompts speziell für GPT-5.6?', a: 'Vier Optimierungsschritte sind bei GPT-5.6 einen Test wert: (1) Explizite JSON-Format-Anfragen im System-Prompt — definieren Sie für strukturierte Ausgaben das Schema präzise. (2) Markdown-Header in System-Prompts — verwenden Sie H2-Abschnitte (## Rolle, ## Aufgabe, ## Ausgabeformat) zur Trennung von Bedenken. (3) Enge Beschränkungen — ohne Wort- oder Längenvorgabe können Antworten länger ausfallen als nötig; fügen Sie „antworte in ≤150 Wörtern" oder „geben Sie nur das JSON-Objekt zurück, keine Erklärung" hinzu. (4) Tool-Use-Framing — für Aufgaben mit Abruf oder Berechnung formulieren Sie den Prompt als Funktionsdefinition statt einer Prosa-Anweisung, wenn Sie die Assistants-API mit aktivierten Tools verwenden.' },
            { q: 'Muss ich bei der Verwendung von PromptQuorum die DSGVO beachten?', a: 'Ja, die DSGVO gilt auch hier, sobald Sie personenbezogene Daten verarbeiten. Bei Cloud-APIs (OpenAI, Anthropic, Google) müssen Sie prüfen, welche Rolle der Anbieter hat und welche Verträge nötig sind, etwa eine Auftragsverarbeitung nach Art. 28 DSGVO. Bei lokaler Inferenz mit Ollama oder LM Studio geht der Prompt nicht an einen Cloud-KI-Anbieter, solange keine Cloud-Funktionen aktiv sind. Rechtsgrundlage, technisch-organisatorische Maßnahmen und weitere Pflichten bleiben bestehen. Dies ist keine Rechtsberatung.' },
            { q: 'Ist PromptQuorum für den deutschen Mittelstand geeignet?', a: 'Das hängt von Ihrem Anwendungsfall ab. Über lokale Modelle (Ollama, LM Studio) lässt sich ohne Cloud-KI-Dienst arbeiten. Ob das Ihre Anforderungen an Datenschutz oder IT-Grundschutz erfüllt, müssen Sie selbst prüfen. Dies ist keine Rechtsberatung.' },
          ],
        },

        sources: {
          title: 'Quellen',
          items: [
            '[Schulhoff et al., 2024. „The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608) — katalogisiert 58 textbasierte Prompting-Techniken',
            '[Wei et al., 2022. „Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — akademische Grundlage für Schritt-für-Schritt-Denken als Optimierungshebel',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — OpenAIs Leitfaden zum Prompt-Engineering',
            '[Brown et al., 2020. „Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165) — Grundlagenpapier, das Few-Shot-Beispiele als hochgradig wirksamen Optimierungshebel etabliert; die Grundlage für den Beispiel-Hebel im 6-Hebel-Framework',
          ],
        },

      },
    },
    es: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-02-26',
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-es.webp',
      title: 'Cómo optimizar prompts: técnicas y mejores prácticas de optimización de prompts',
      seoTitle: 'Cómo optimizar prompts en 2026: 6 palancas, 6 pasos',
      intro: '**La optimización de prompts es el proceso iterativo de revisar un prompt para mejorar la calidad, consistencia o precisión de la salida de IA.** Esta guía completa enseña técnicas de optimización de prompts y fundamentos: las 6 palancas principales, un proceso de optimización de 6 pasos, ejemplos antes/después para GPT-5.6, Claude y Gemini, y los 7 errores más comunes a evitar al optimizar prompts.',
      metaDescription: 'Cómo optimizar prompts con 6 palancas y 6 pasos. Ejemplos antes/después para GPT-5.6, Claude y Gemini, y 7 errores comunes que conviene evitar.',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '14 min de lectura',
      educationalLevel: 'Beginner',
      primaryTerm: 'Optimización de prompts',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: 'Cómo optimizar prompts: técnicas y mejores prácticas de optimización de prompts',
        description: 'Aprende técnicas y mejores prácticas de optimización de prompts: 6 palancas principales, proceso de 6 pasos, ejemplos antes/después. Cómo mejorar prompts de IA en GPT-5.6, Claude, Gemini — fundamentos para todos los modelos.',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['optimización de prompts', 'técnicas de optimización de prompts', 'cómo optimizar prompts', 'mejorar prompts de IA', 'fundamentos de prompt engineering', 'optimización de LLM', 'GPT-5.6', 'Claude', 'Gemini', 'few-shot prompting', 'chain-of-thought'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'Optimización de prompts' },
          { '@type': 'Thing', name: 'Few-shot prompting' },
          { '@type': 'Thing', name: 'Chain-of-thought prompting' },
          { '@type': 'Thing', name: 'Calidad de salida de LLM' },
          { '@type': 'Thing', name: 'Prompt engineering de IA' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        image: buildOgImageObject(OG_SLUG, 'es'),
        url: 'https://www.promptquorum.com/es/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'es',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Las 6 palancas de optimización de prompts',
        description: 'Las seis variables independientes que determinan la calidad de la salida de IA — cada una puede ajustarse para corregir un modo de fallo específico del prompt.',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Especificidad', description: 'Qué tan precisamente se define la tarea. Movimiento de optimización: reescribir el objetivo vago como una instrucción exacta. Ejemplo: \'Resumir\' → \'Lista 3 hallazgos clave en ≤20 palabras cada uno\'.' },
          { '@type': 'ListItem', position: 2, name: 'Contexto', description: 'Información con la que el modelo debe trabajar. Movimiento de optimización: añadir antecedentes, audiencia y restricciones. Ejemplo: \'Escribe un informe\' → \'Escribe un informe para un CFO no técnico\'.' },
          { '@type': 'ListItem', position: 3, name: 'Ejemplos', description: 'Comprensión del modelo sobre el formato de salida deseado. Movimiento de optimización: añadir 1–3 pares entrada/salida (few-shot). Muestra el formato exacto que quieres, una vez.' },
          { '@type': 'ListItem', position: 4, name: 'Restricciones', description: 'Límites en lo que el modelo puede generar. Movimiento de optimización: añadir prohibiciones explícitas. Ejemplo: \'No uses jerga. Máximo 150 palabras\'.' },
          { '@type': 'ListItem', position: 5, name: 'Formato de salida', description: 'Estructura de la respuesta. Movimiento de optimización: especificar el formato explícitamente. Ejemplo: \'Responde en JSON: {título, resumen, etiquetas[]}\'.' },
          { '@type': 'ListItem', position: 6, name: 'Rol/persona', description: 'Nivel de experiencia que adopta el modelo. Movimiento de optimización: añadir un rol específico. Ejemplo: \'Actúa como analista de datos senior en una empresa B2B SaaS\'.' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo optimizar un prompt en 6 pasos',
        description: 'Un proceso sistemático de 6 pasos para diagnosticar fallos de prompts y mejorar la calidad de la salida de IA en GPT-5.6, Claude y Gemini.',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Establecer una línea base', text: 'Ejecuta el prompt actual 3 veces con entradas representativas. Documenta el modo de fallo: formato incorrecto, alucinación, salida vaga o respuesta fuera de tema.' },
          { '@type': 'HowToStep', position: 2, name: 'Identificar la palanca raíz', text: 'Mapea el fallo a una de las 6 palancas: especificidad, contexto, ejemplos, restricciones, formato de salida o rol/persona.' },
          { '@type': 'HowToStep', position: 3, name: 'Cambiar solo una variable', text: 'Realiza un único cambio dirigido a la palanca identificada. No cambies múltiples variables simultáneamente — no puedes diagnosticar la mejora si cambian varias cosas.' },
          { '@type': 'HowToStep', position: 4, name: 'Probar en múltiples modelos', text: 'Ejecuta el prompt revisado en GPT-5.6, Claude Opus 5 y Gemini 3.1 Pro. Un prompt que solo funciona en un modelo es frágil.' },
          { '@type': 'HowToStep', position: 5, name: 'Medir contra criterios de calidad', text: 'Comprueba la precisión de la tarea, el cumplimiento del formato, el anclaje factual, la consistencia en 3 ejecuciones y el acuerdo entre modelos.' },
          { '@type': 'HowToStep', position: 6, name: 'Guardar en una biblioteca de prompts', text: 'Documenta qué cambió y por qué funcionó. Versiona el prompt optimizado. Un prompt probado es un activo reutilizable duradero.' },
        ],
      },
      leadAnswerBlock: '**La optimización de prompts es el proceso iterativo de revisar un prompt existente para mejorar la calidad, precisión o consistencia de la salida.** Las 6 palancas de optimización — especificidad, contexto, ejemplos, restricciones, formato de salida y rol/persona — son las variables independientes que ajustas. Cambia una variable por iteración, prueba en múltiples modelos y mide los resultados. Este enfoque sistemático reduce las conjeturas al refinar prompts.',
      quickFacts: [
        '**6 palancas principales:** especificidad, contexto, ejemplos, restricciones, formato de salida y rol/persona — estas son las principales variables que ajusta esta guía',
        '**2–4 iteraciones suficientes:** la mayoría de las tareas alcanzan una calidad aceptable en 2–4 iteraciones dirigidas antes de que se establezcan los rendimientos decrecientes',
        '**Pruebas multi-modelo requeridas:** un prompt que funciona en GPT-5.6 pero falla en Claude es frágil — prueba en ≥2 modelos para confirmar la robustez',
        '**Fine-tuning:** suele requerir más tiempo y dinero que la optimización de prompts; prueba antes la optimización',
      ],
      toc: [
        { label: 'Puntos clave', anchor: 'key-takeaways' },
        { label: 'Puntos clave para usuarios de LLM local', anchor: 'key-takeaways-for-local-llm-users' },
        { label: '¿Qué es la optimización de prompts?', anchor: 'what-is-prompt-optimization' },
        { label: 'Optimización de prompts vs prompt engineering', anchor: 'prompt-optimization-vs-prompt-engineering' },
        { label: 'Por qué importa la optimización de prompts', anchor: 'why-prompt-optimization-matters' },
        { label: 'Las 6 palancas de optimización', anchor: 'the-6-optimization-levers' },
        { label: 'El proceso de optimización de 6 pasos', anchor: 'the-6-step-optimization-process' },
        { label: 'Cómo medir la calidad del prompt', anchor: 'how-to-measure-prompt-quality' },
        { label: '¿Cómo se ve la optimización de prompts en la práctica?', anchor: 'what-does-prompt-optimization-look-like-in-practice' },
        { label: 'Consejos de optimización específicos por modelo', anchor: 'model-specific-optimization-tips' },
        { label: 'Optimización de prompts para LLMs locales', anchor: 'optimizing-prompts-for-local-llms-ollama-lm-studio' },
        { label: 'Los 7 errores de optimización más comunes', anchor: 'the-7-most-common-optimization-mistakes' },
        { label: 'Técnicas de optimización de prompts: métodos avanzados', anchor: 'prompt-optimization-techniques-advanced-methods' },
        { label: 'Guardar prompts optimizados en una biblioteca', anchor: 'saving-optimized-prompts-to-a-library' },
        { label: 'Cumplimiento regulatorio', anchor: 'prompt-optimization-and-regulatory-compliance' },
        { label: 'Idiomas y regiones', anchor: 'prompt-optimization-across-languages-and-regions' },
        { label: '¿Qué significan estos términos de optimización de prompts?', anchor: 'what-do-these-prompt-optimization-terms-mean' },
        { label: 'Lecturas relacionadas', anchor: 'related-reading' },
        { label: 'FAQ', anchor: 'faq-prompt-optimization' },
      ],
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          {
            '@type': 'Question',
            'name': '¿Qué es la optimización de prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La optimización de prompts es el proceso iterativo de revisar un prompt existente para mejorar la calidad de la salida de IA para una tarea específica. Implica identificar un modo de fallo (formato incorrecto, alucinación, salida vaga), cambiar una variable (especificidad, contexto, ejemplos, restricciones, formato de salida o rol) y probar el resultado en modelos como GPT-5.6, Claude Opus 5 y Gemini 3.1 Pro.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre la optimización de prompts y el prompt engineering?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'El prompt engineering es la disciplina de diseñar una estructura de prompt desde cero usando bloques de construcción como objetivo, contexto y formato de salida. La optimización de prompts es el subproceso iterativo de mejorar un prompt ya escrito diagnosticando modos de fallo y aplicando cambios dirigidos.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuántas iteraciones se necesitan para optimizar un prompt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Para la mayoría de las tareas, 2–4 iteraciones dirigidas son suficientes para pasar de un prompt fallido a uno fiable. Los rendimientos decrecientes se establecen después de 5–6 iteraciones.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué palanca debo cambiar primero al optimizar un prompt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Empieza con el formato de salida. El incumplimiento del formato es el modo de fallo más común y más rápido de corregir. Especifica la estructura exacta que quieres, luego aborda otros problemas en iteraciones posteriores.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Funciona la optimización de prompts en todos los modelos de IA?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, pero con ajustes específicos del modelo. Las seis palancas de optimización principales se aplican a GPT-5.6, Claude Opus 5, Gemini 3.1 Pro y Mistral Large. Sin embargo, cada modelo responde de manera diferente a la densidad de instrucciones.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es el error más común en la optimización de prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cambiar múltiples variables simultáneamente. Si añades ejemplos, cambias el formato de salida y añades una instrucción de rol en la misma revisión, no puedes determinar qué cambio mejoró (o degradó) la salida.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Puede la optimización de prompts reducir las alucinaciones de IA?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí, con las técnicas correctas. Añadir contexto de anclaje, ejemplos few-shot con salidas factualmente correctas y restricciones explícitas pueden ayudar a reducir las alucinaciones. El self-consistency prompting reduce aún más las fabricaciones.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuándo debo usar el fine-tuning en lugar de la optimización de prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Usa el fine-tuning cuando la optimización de prompts haya alcanzado un techo. La optimización de prompts es más rápida y barata y siempre debe agotarse antes del fine-tuning.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo sé cuándo un prompt está completamente optimizado?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Un prompt está suficientemente optimizado cuando: (1) produce salida correcta en 4–5 entradas representativas, (2) produce salida consistente en re-ejecuciones, (3) funciona en al menos dos modelos, y (4) cumple la especificación de formato sin post-procesamiento.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Se aplica la optimización de prompts a los prompts de imágenes?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Los principios se aplican — especificidad, restricciones y ejemplos son palancas válidas para modelos de imágenes. El proceso de optimización (línea base → diagnosticar → cambiar una variable → probar) es idéntico.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué es la optimización automática de prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Usa un segundo modelo de IA para reescribir y mejorar prompts sin intervención humana. Herramientas como DSPy (Stanford), TextGrad y APE generan prompts candidatos, los puntúan y seleccionan la mejor variante.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿En qué se diferencia la optimización de prompts del prompt tuning?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La optimización de prompts mejora los prompts de texto discreto sin modificar los pesos del modelo. El prompt tuning aprende vectores de prompt suave continuos entrenados por descenso de gradiente.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuáles son las mejores herramientas para la optimización de prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No hay una única herramienta mejor. Algunos ejemplos: PromptQuorum (creado por el editor de este sitio; despacha un prompt a GPT-5.6, Claude y Gemini simultáneamente), DSPy (optimización programática), LangSmith (versionado y trazabilidad), Promptfoo (CLI open-source para tests de regresión) y PromptLayer (versionado y análisis).',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo optimizo un system prompt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La optimización del system prompt sigue el mismo proceso de 6 pasos que la optimización del prompt de usuario, con dos restricciones adicionales. Los system prompts persisten en todos los turnos; la longitud importa — los system prompts muy largos pueden reducir el seguimiento de instrucciones en turnos posteriores.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Se puede usar ChatGPT para optimizar prompts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Sí. Puedes pedirle a GPT-5.6 que reescriba un prompt proporcionando el prompt fallido y describiendo el modo de fallo. Esto es meta-prompting. Siempre prueba el prompt reescrito con entradas reales y mide contra tus criterios reales de aprobado/fallado.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Qué es la optimización de prompts en machine learning?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Se refiere a técnicas que mejoran los prompts alimentados en modelos de lenguaje como parte de un pipeline — sin reentrenar el modelo. Incluye tanto la optimización de prompts discretos como el prompt tuning continuo.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuánto mejora la optimización de prompts la calidad de la salida de IA?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Depende del modelo, la tarea y el prompt de partida, así que no hay un porcentaje general. Mídelo tú: prueba el prompt antiguo y el nuevo con las mismas entradas y compara la tasa de aciertos.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Debo optimizar los prompts para cada modelo de IA por separado?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Empieza con una optimización agnóstica al modelo. Un prompt bien estructurado típicamente funciona bien en los tres principales. Solo añade variantes específicas del modelo si las pruebas entre modelos revelan resultados divergentes.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es la diferencia entre la optimización de prompts y RAG?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La optimización de prompts mejora las instrucciones y la estructura de un prompt. RAG mejora la información disponible para el modelo recuperando documentos relevantes. Los dos son complementarios: RAG resuelve el problema de información; la optimización resuelve el problema de procesamiento.',
            },
          },
          {
            '@type': 'Question',
            'name': '¿Cómo optimizo prompts específicamente para GPT-5.6?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Vale la pena probar cuatro movimientos de optimización con GPT-5.6: (1) Solicitudes explícitas de formato JSON en el system prompt — para salidas estructuradas, define el esquema con precisión. (2) Encabezados markdown en system prompts — usa secciones H2 (## Rol, ## Tarea, ## Formato de salida) para separar responsabilidades. (3) Restricciones estrictas — sin límite de palabras o longitud, las respuestas pueden ser más largas de lo necesario; añade "responde en ≤150 palabras" o "devuelve solo el objeto JSON, sin explicación". (4) Encuadre de uso de herramientas — para tareas de recuperación o cálculo, plantea el prompt como una definición de función en lugar de una instrucción en prosa cuando uses la Assistants API con herramientas habilitadas.',
            },
          },
        ],
      },
      sections: {

        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'Optimización de prompts = revisión iterativa de un prompt existente para mejorar la calidad de la salida',
            'Las 6 palancas: **especificidad**, **contexto**, **ejemplos**, **restricciones**, **formato de salida**, **rol/persona**',
            'Cambia una palanca a la vez — aislar variables es cómo encuentras lo que realmente funciona',
            'Prueba en ≥2 modelos (GPT-5.6, Claude, Gemini) para confirmar que la mejora es agnóstica al modelo',
            'Modo de fallo común: cambiar demasiadas variables a la vez hace imposible el diagnóstico',
            'Un prompt probado y optimizado es un activo duradero — guárdalo en una biblioteca de prompts',
          ],
        },

        localLLMTldr: {
          id: 'key-takeaways-for-local-llm-users',
          title: 'Puntos clave para usuarios de LLM local',
          items: [
            'La optimización de prompts es más crítica para los modelos locales — los modelos cuantizados (4-bit, 8-bit) pueden ser más sensibles a las instrucciones ambiguas',
            'Ollama y LM Studio admiten las mismas 6 palancas de optimización; la diferencia es que los modelos más pequeños (LLaMA 3.1 8B, Mistral Small) suelen necesitar restricciones más explícitas y entradas más cortas',
            'Los modelos cuantizados pueden seguir las instrucciones con menos fiabilidad — usa prompts más simples y prescriptivos con formato de salida explícito y menos restricciones simultáneas',
            'Los valores predeterminados de temperatura difieren: Ollama por defecto es 0.8 (mayor creatividad, menor consistencia); establece la temperatura en 0.1–0.3 para tareas de salida estructurada que requieren consistencia',
            'Para estimar la brecha de calidad, usa las mismas entradas en tu modelo local y en modelos en la nube, por ejemplo comparando con GPT-5.6 y Claude en PromptQuorum',
          ],
        },

        definition: {
          id: 'what-is-prompt-optimization',
          title: '¿Qué es la optimización de prompts?',
          content: [
            '**La optimización de prompts es el proceso iterativo de revisar un prompt existente para mejorar la calidad, precisión o consistencia de la salida de IA para una tarea específica.** Se aplica a todos los modelos principales — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro y modelos ejecutados localmente via Ollama o LM Studio. Donde el prompt engineering diseña la estructura inicial del prompt, la optimización de prompts diagnostica qué está fallando y aplica cambios dirigidos hasta que la salida cumpla un estándar definido.',
            'La optimización de prompts es un subproceso del prompt engineering. Siempre empiezas con un prompt que funciona y realizas un cambio a la vez. Este aislamiento de variables es lo que hace posible el diagnóstico — cuando revisas la especificidad, el formato de salida y las restricciones simultáneamente, no puedes determinar qué cambio mejoró el resultado.',
            'Por qué importa: el mismo modelo produce salidas radicalmente diferentes de prompts casi idénticos. La diferencia entre "más o menos correcto" y "fiablemente correcto" no es suerte — es optimización sistemática.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'La optimización de prompts es el proceso sistemático de diagnosticar por qué falla un prompt y arreglar una variable a la vez hasta que la salida cumpla tus criterios de calidad.' },
          ],
        },

        vsPromptEngineering: {
          id: 'prompt-optimization-vs-prompt-engineering',
          title: 'Optimización de prompts vs prompt engineering',
          content: [
            '**La optimización de prompts y el prompt engineering son disciplinas complementarias que trabajan en secuencia.** El prompt engineering diseña un prompt desde cero usando bloques de construcción (objetivo, contexto, ejemplos, restricciones, formato de salida, rol). La optimización de prompts toma un prompt existente y lo mejora mediante revisión iterativa. Necesitas ambos: el prompt engineering te lleva a "funciona"; la optimización de prompts te lleva a "fiable".',
            'Piénsalo así: el prompt engineering construye la estructura; la optimización de prompts la refina. El prompt engineering pregunta "¿qué elementos debería tener este prompt?" La optimización de prompts pregunta "¿por qué falla este prompt, y qué único cambio lo arreglará?" La distinción importa porque las estrategias son diferentes.',
          ],
          columns: ['Dimensión', 'Prompt Engineering', 'Optimización de prompts'],
          rows: [
            { 'Dimensión': 'Punto de partida', 'Prompt Engineering': 'Página en blanco', 'Optimización de prompts': 'Prompt existente' },
            { 'Dimensión': 'Objetivo', 'Prompt Engineering': 'Diseñar la estructura', 'Optimización de prompts': 'Mejorar la salida' },
            { 'Dimensión': 'Método', 'Prompt Engineering': 'Frameworks, bloques de construcción', 'Optimización de prompts': 'Aislar, cambiar, probar, medir' },
          ],
        },

        whyOptimize: {
          id: 'why-prompt-optimization-matters',
          title: 'Por qué importa la optimización de prompts',
          content: [
            '**La optimización de prompts reduce las salidas inconsistentes de IA al diagnosticar sistemáticamente qué falla y corregir una variable a la vez.** Un prompt vago produce una salida vaga. Un prompt mal especificado produce una respuesta fuera del objetivo. Ejemplo ilustrativo, no una prueba medida: "Resume este artículo." puede dar una longitud y un enfoque distintos en cada ejecución. Añadir un formato de salida ("3 viñetas, ≤20 palabras cada una"), un rol ("analista") y una tarea precisa ("Lista los 3 hallazgos clave, no la metodología") suele reducir la variación.',
            'Para el contexto regulatorio, consulta [Geopolítica e IA](/es/prompt-engineering/geopolitics-and-ai).',
          ],
        },

        callout1: {
          blockquote: 'En GSM8K, un benchmark de problemas matemáticos, mostrar al modelo PaLM de 540B parámetros unos pocos ejemplos resueltos con razonamiento paso a paso (chain-of-thought few-shot) elevó la tasa de resolución del 17,9 % con prompting estándar al 56,9 %, sin reentrenamiento.',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          id: 'the-6-optimization-levers',
          title: 'Las 6 palancas de optimización',
          content: [
            '**Cada prompt consiste en seis variables independientes que puedes ajustar para mejorar la salida.** Estas son las "palancas" de la optimización. Cuando un prompt falla, el fallo se remonta a una o más de estas palancas que no están configuradas correctamente.',
          ],
          columns: ['Palanca', 'Qué cambia', 'Movimiento de optimización', 'Ejemplo'],
          rows: [
            { 'Palanca': 'Especificidad', 'Qué cambia': 'Qué tan precisamente se define la tarea', 'Movimiento de optimización': 'Reescribir el objetivo vago como instrucción exacta', 'Ejemplo': '"Resumir" → "Lista 3 hallazgos clave en ≤20 palabras cada uno"' },
            { 'Palanca': 'Contexto', 'Qué cambia': 'Información con la que trabaja el modelo', 'Movimiento de optimización': 'Añadir antecedentes, audiencia, restricciones', 'Ejemplo': '"Escribe un informe" → "Escribe un informe para un CFO no técnico"' },
            { 'Palanca': 'Ejemplos', 'Qué cambia': 'Comprensión del modelo sobre el formato de salida deseado', 'Movimiento de optimización': 'Añadir 1–3 pares entrada/salida (few-shot)', 'Ejemplo': 'Muestra el formato exacto que quieres, una vez' },
            { 'Palanca': 'Restricciones', 'Qué cambia': 'Límites en lo que el modelo puede generar', 'Movimiento de optimización': 'Añadir prohibiciones explícitas', 'Ejemplo': '"No uses jerga. Máximo 150 palabras."' },
            { 'Palanca': 'Formato de salida', 'Qué cambia': 'Estructura de la respuesta', 'Movimiento de optimización': 'Especificar el formato explícitamente', 'Ejemplo': '"Responde en JSON: {título, resumen, etiquetas[]}"' },
            { 'Palanca': 'Rol/persona', 'Qué cambia': 'Nivel de experiencia que adopta el modelo', 'Movimiento de optimización': 'Añadir un rol específico', 'Ejemplo': '"Actúa como analista de datos senior en una empresa B2B SaaS"' },
          ],
        },

        callout2: {
          blockquote: 'Al escalar GPT-3 se vio que el aprendizaje few-shot, con unos pocos ejemplos en el prompt y sin actualizaciones de gradiente, llegaba a competir en algunas tareas con los mejores enfoques anteriores basados en fine-tuning.',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        optimizationProcess: {
          id: 'the-6-step-optimization-process',
          title: 'El proceso de optimización de 6 pasos',
          content: [
            '**La optimización de prompts es un proceso sistemático y medible.** Cada paso estrecha el diagnóstico: identificas el síntoma, lo mapeas a una palanca, cambias una variable, pruebas en múltiples modelos y mides la mejora.',
          ],
          items: [
            '**Paso 1: Establece una línea base.** Ejecuta el prompt actual en tu tarea objetivo 3 veces con entradas representativas. Anota el modo de fallo: ¿La salida es demasiado larga o corta? ¿Formato incorrecto? ¿Alucinando? ¿Fuera de tema? Esta línea base es crucial — no puedes medir la mejora sin ella.',
            '**Paso 2: Identifica la palanca raíz.** Mapea el fallo a una de las 6 palancas. Ejemplos: "la salida es un muro de prosa en lugar de viñetas" → palanca de formato de salida; "la respuesta es vaga" → palanca de especificidad; "el tono es incorrecto" → palanca de rol.',
            '**Paso 3: Cambia una variable.** Realiza un único cambio dirigido a la palanca identificada. No edites el objetivo, añadas ejemplos Y cambies el formato en la misma revisión. Este aislamiento es innegociable.',
            '**Paso 4: Prueba en múltiples modelos.** Ejecuta el prompt revisado en GPT-5.6, Claude Opus 5 y Gemini 3.1 Pro. Un prompt que solo funciona en un modelo es frágil y específico del modelo. Usa PromptQuorum para despachar un prompt a los tres simultáneamente y comparar respuestas lado a lado.',
            '**Paso 5: Mide contra criterios.** ¿Mejoró la precisión? ¿Cumplió el formato? ¿Disminuyeron las alucinaciones? ¿Las salidas ahora pasan pruebas de consistencia (ejecutar 3× seguidas)? La medición es cómo confirmas que el cambio funcionó.',
            '**Paso 6: Guarda en una biblioteca de prompts.** Un prompt probado y optimizado es un activo reutilizable. Documenta qué cambió y por qué mejoró. Versiona. Una biblioteca de prompts almacenada y con control de versiones es mucho más valiosa que un prompt de un solo uso.',
          ],
          promptExamples: [
            {
              badLabel: '❌ Malo: Cambiar múltiples variables a la vez',
              bad: 'Prompt original: "Resume este artículo."\n\nRevisión 1 (INCORRECTO): "Resume este artículo en 3 viñetas. Actúa como analista financiero. No uses jerga. Incluye los riesgos clave destacados. Formatea como JSON."',
              goodLabel: '✅ Bueno: Aislar una variable por iteración',
              good: 'Prompt original: "Resume este artículo."\n\nRevisión 1 (correcto): "Resume este artículo en 3 viñetas, ≤20 palabras cada una."\n→ Resultado posible: La salida es ahora formato consistente, pero vaga.\n\nRevisión 2: "Resume en 3 viñetas centrándose en los principales riesgos empresariales destacados. Cada una ≤20 palabras."\n→ Resultado posible: Mejor relevancia, pero falta contexto de audiencia.\n\nRevisión 3: "Eres un CFO revisando un informe de riesgo de proveedor. Resume en 3 viñetas centrándote en riesgos clave. ≤20 palabras cada una."\n→ Resultado posible: Específico, accionable, consistente. HECHO.',
            },
          ],
        },

        callout3: {
          blockquote: 'En un experimento en línea prerregistrado con 453 profesionales con formación universitaria que hacían tareas de redacción propias de su profesión, el acceso a ChatGPT redujo el tiempo medio en un 40 % y mejoró la calidad del resultado en un 18 %. La desigualdad entre trabajadores disminuyó.',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        measurementCriteria: {
          id: 'how-to-measure-prompt-quality',
          title: 'Cómo medir la calidad del prompt',
          content: [
            '**No puedes optimizar lo que no puedes medir.** Los siguientes criterios definen si un prompt ha tenido éxito. Usa estos puntos de control después de cada iteración:',
          ],
          columns: ['Criterio', 'Qué comprobar', 'Señal de aprobado / fallado'],
          rows: [
            { 'Criterio': 'Precisión de la tarea', 'Qué comprobar': '¿La salida responde la pregunta real?', 'Señal de aprobado / fallado': 'Compara contra una respuesta conocida correcta' },
            { 'Criterio': 'Cumplimiento del formato', 'Qué comprobar': '¿La salida coincide con la estructura especificada?', 'Señal de aprobado / fallado': '¿El JSON se analizó? ¿Las viñetas tienen la longitud correcta?' },
            { 'Criterio': 'Anclaje factual', 'Qué comprobar': '¿Son correctas las afirmaciones específicas?', 'Señal de aprobado / fallado': 'Comprobación rápida de 3–5 hechos' },
            { 'Criterio': 'Consistencia', 'Qué comprobar': '¿La re-ejecución produce salida similar?', 'Señal de aprobado / fallado': 'Ejecuta el mismo prompt 3× — ¿las salidas difieren estructuralmente?' },
            { 'Criterio': 'Eficiencia de tokens', 'Qué comprobar': '¿La longitud de salida es apropiada?', 'Señal de aprobado / fallado': 'Mide el conteo de tokens vs. la densidad de información' },
            { 'Criterio': 'Acuerdo entre modelos', 'Qué comprobar': '¿2–3 modelos producen resultados similares?', 'Señal de aprobado / fallado': 'Despacha a GPT-5.6, Claude, Gemini via PromptQuorum — acuerdo = robusto' },
          ],
        },

        callout4: {
          blockquote: 'En un experimento con 758 consultores de BCG, quienes usaron IA en 18 tareas realistas dentro de la frontera de capacidad de la IA obtuvieron resultados con una calidad valorada más de un 40 % por encima del grupo de control. En una tarea elegida fuera de esa frontera, quienes usaron IA tuvieron 19 puntos porcentuales menos de probabilidad de dar soluciones correctas.',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        beforeAfterExamples: {
          id: 'what-does-prompt-optimization-look-like-in-practice',
          title: '¿Cómo se ve la optimización de prompts en la práctica?',
          content: [
            '**La optimización de prompts es visible en el cambio de instrucciones vagas a precisas.** Estos pares antes/después muestran cada una de las 6 palancas en acción:',
          ],
          items: [
            '**Malo:** "Resume este artículo." | **Mejorado:** "Resume en 3 viñetas, ≤20 palabras cada una. Céntrate en el impacto empresarial." | **Por qué:** El formato de salida puede reducir la inconsistencia.',
            '**Malo:** "Revisa este código." | **Mejorado:** "Revisa en busca de (1) corrección, (2) rendimiento, (3) seguridad. Cita números de línea. Máx. 3 problemas." | **Por qué:** Rol + restricciones pueden reducir el feedback genérico.',
            '**Malo:** "Sintetiza estos artículos." | **Mejorado:** "Sintetiza solo de los 5 artículos proporcionados. Formato: [Hallazgo A]. [Hallazgo B]. [Implicación]. No inventes." | **Por qué:** Contexto + restricciones pueden reducir las alucinaciones.',
            '**Malo:** "Escribe un email a un cliente." | **Mejorado:** "Escribe un email a un cliente enojado que esperó 2 semanas por soporte. Pide disculpas una vez, ofrece 2 soluciones, pregunta su preferencia. ≤150 palabras." | **Por qué:** Especificidad + restricciones mejoran el tono y la relevancia.',
            '**Malo:** "Extrae datos de esta tabla." | **Mejorado:** "Extrae nombres e importes como JSON: [{\"name\": \"...\", \"amount\": ...}]. Sin explicaciones." | **Por qué:** Un formato explícito puede reducir la prosa no deseada.',
            '**Malo:** "¿Es seguro este código?" | **Mejorado:** "Comprueba: (1) inyección SQL, (2) entrada de usuario no validada, (3) secretos hardcodeados. Responde con cada hallazgo como: [Línea N: Problema]. Sin falsos positivos." | **Por qué:** Especificidad + restricciones mejoran la precisión.',
          ],
        },

        definitionBoxes: {
          id: 'what-do-these-prompt-optimization-terms-mean',
          title: '¿Qué significan estos términos de optimización de prompts?',
          content: [],
          items: [
            '**Optimización de prompts** — El proceso iterativo de revisar un prompt para mejorar la calidad de la salida diagnosticando modos de fallo y cambiando una variable (especificidad, contexto, ejemplos, restricciones, formato o rol) a la vez. Ver [5 bloques de construcción que todo prompt necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) para los elementos estructurales que estás optimizando.',
            '**Few-shot prompting** — Incluir 1–3 ejemplos de entrada/salida en el prompt para enseñarle al modelo el formato o patrón deseado. Ver [Zero-Shot vs Few-Shot Prompting](/es/prompt-engineering/zero-shot-vs-few-shot) para cuándo añadir ejemplos como palanca de optimización principal.',
            '**Chain-of-Thought (CoT)** — Pedir al modelo que razone paso a paso ("piensa antes de responder") lo que puede mejorar el razonamiento en varios pasos; el efecto depende del modelo y la tarea.',
            '**Restricción** — Una prohibición o límite explícito (ej. "no uses jerga", "máximo 150 palabras", "cita solo fuentes") que estrecha el alcance de la salida y previene modos de fallo comunes.',
            '**Token** — La unidad más pequeña de texto que el modelo procesa; aproximadamente 4 caracteres o 1 palabra en inglés. La longitud del prompt y el presupuesto de salida se miden en tokens.',
            '**Alucinación** — Salida confiada pero factualmente incorrecta; ocurre cuando el modelo inventa hechos, cita estudios inexistentes o repite afirmaciones sin fundamento. Se mitiga añadiendo contexto de anclaje, ejemplos y restricciones.',
            '**Fine-tuning** — Reentrenamiento de los pesos del modelo en datos etiquetados específicos del dominio; se usa cuando la optimización de prompts no puede lograr la calidad requerida. Siempre agota la optimización antes del fine-tuning.',
            '**RAG (Retrieval-Augmented Generation)** — Inyección de documentos recuperados en el contexto del prompt antes de pedirle al modelo que responda. Ver [RAG explicado](/es/prompt-engineering/rag-explained) — complementario a la optimización (RAG mejora la información; la optimización mejora cómo el modelo la usa).',
            '**System prompt** — Instrucción persistente que establece el rol, las restricciones y el comportamiento del modelo en todos los turnos. Ver [System Prompt vs User Prompt](/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — requiere pruebas de optimización separadas del prompt del usuario.',
            '**Especificidad** — Precisión en la definición de la tarea; pasar de instrucciones vagas ("resume") a requisitos exactos ("lista 3 viñetas, ≤20 palabras cada una"). La primera y a menudo la palanca de mayor impacto para ajustar.',
          ],
        },

        modelSpecificTips: {
          id: 'model-specific-optimization-tips',
          title: 'Consejos de optimización específicos por modelo',
          content: [
            '**Las 6 palancas de optimización se aplican a todos los modelos principales — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro y Mistral Large.** Sin embargo, cada modelo responde de manera diferente a la densidad de instrucciones, la especificidad del formato y la definición de rol. A continuación, consejos de ajuste específicos por modelo: Son puntos de partida generales, no resultados medidos; compruébalos con tus propias entradas.',
          ],
          items: [
            '**GPT-5.6 (OpenAI):** Responde bien a las solicitudes explícitas de formato JSON y a los encabezados markdown en los system prompts. El seguimiento de instrucciones es fuerte — las restricciones estrictas reducen la sobre-explicación. Si tu prompt de GPT-5.6 sobre-explica, añade una restricción: "Sé conciso. No expliques tu razonamiento a menos que se te pida."',
            '**Claude Opus 5 (Anthropic):** Excelente en instrucciones matizadas y de múltiples partes. Maneja system prompts largos y detallados de forma fiable. Se beneficia de una guía explícita de longitud de salida ("responde en ≤200 palabras").',
            '**Gemini 3.1 Pro (Google DeepMind):** Adecuado para analizar documentos largos (ventana de contexto amplia). Los encabezados de sección explícitos en los prompts mejoran la consistencia de la salida estructurada. Si procesas documentos largos, añade encabezados: "## Documento de entrada\n[documento]\n## Tarea\n[tarea]."',
            '**Mistral Large (Mistral AI):** Se beneficia de definiciones de rol explícitas y una formulación de instrucciones más prescriptiva. Si tu prompt funciona en GPT-5.6 pero no en Mistral, haz las instrucciones más explícitas y añade un rol.',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'Los diferentes modelos tienen diferentes "personalidades" — Claude es paciente con instrucciones largas, GPT-5.6 prefiere restricciones estrictas, Gemini maneja documentos masivos. Después de optimizar un prompt, pruébalo en todos tus modelos objetivo porque una talla no sirve para todos.' },
          ],
        },

        localLLMExamples: {
          id: 'optimizing-prompts-for-local-llms-ollama-lm-studio',
          title: 'Optimización de prompts para LLMs locales (Ollama, LM Studio)',
          content: [
            '**Los modelos locales ejecutados via Ollama o LM Studio responden a las mismas 6 palancas de optimización, pero con tolerancias más estrictas.** Los modelos cuantizados (4-bit, 8-bit) pueden seguir las instrucciones con menos fiabilidad, así que empieza con prompts simples y explícitos. Son escenarios ilustrativos, no resultados de pruebas: los nombres de modelos solo muestran configuraciones locales típicas, y los fallos descritos son posibles, no defectos medidos de esos modelos.',
          ],
          items: [
            '**Ejemplo 1: Inconsistencia de salida de modelo cuantizado (Palanca: Formato de salida + Restricciones)**\n_Modelo:_ LLaMA 3.1 8B via Ollama (cuantización de 4-bit)\n_Prompt débil:_ "Resume este ticket de soporte."\n_Posible modo de fallo:_ La salida varía enormemente entre ejecuciones — a veces una oración, a veces una lista, a veces una pregunta de vuelta al usuario.\n_Palanca cambiada:_ Formato de salida + restricción de temperatura.\n_Prompt optimizado:_ "Resume este ticket de soporte en exactamente 2 oraciones. Oración 1: el problema del cliente. Oración 2: lo que han intentado. Ningún otro texto."\n_Corrección adicional:_ Inicia `ollama run llama3.1` y escribe `/set parameter temperature 0.1`.\n_Objetivo (no es un resultado medido):_ Resúmenes de 2 oraciones; compruébalo con tu modelo y tus tickets.',
            '**Ejemplo 2: Fallo de restricción de longitud de contexto en LM Studio (Palanca: Especificidad + Contexto)**\n_Modelo:_ Mistral Small Instruct via LM Studio (cuantización Q4_K_M, contexto de 4096 tokens)\n_Prompt débil:_ "Analiza este documento y lista los riesgos clave." [documento completo de 3.000 palabras pegado]\n_Posible modo de fallo:_ El modelo se trunca a mitad del análisis, pierde el último tercio del documento, produce salida incompleta sin señalar el truncamiento.\n_Palanca cambiada:_ Especificidad — reducir el alcance para caber dentro del presupuesto de contexto.\n_Prompt optimizado:_ "Eres un analista de riesgos. Lee el siguiente extracto del documento (solo las primeras 1.500 palabras) y lista hasta 5 riesgos específicos, cada uno en ≤15 palabras. Formato: Riesgo 1: [descripción]. Riesgo 2: [descripción]. Para después de 5."\n_Objetivo (no es un resultado medido):_ Un análisis que quepa en la ventana de contexto; revisa si la salida se ha truncado.',
            '**Ejemplo 3: Anulación de instrucciones en modelos cuantizados (Palanca: Restricciones)**\n_Modelo:_ Phi-3 Mini via Ollama\n_Prompt débil:_ "Extrae todas las fechas de este texto. Devuelve solo JSON."\n_Posible modo de fallo:_ El modelo devuelve JSON más un párrafo de explicación ("Aquí están las fechas que encontré..."). Los modelos pequeños frecuentemente añaden comentarios no solicitados incluso cuando se especifica el formato.\n_Palanca cambiada:_ Restricciones — prohibición explícita.\n_Prompt optimizado:_ "Extrae todas las fechas del texto a continuación. Devuelve solo un array JSON. Sin explicación. Sin preámbulo. Sin comentario. Salida: [\\\"fecha1\\\", \\\"fecha2\\\", ...]"\n_Objetivo (no es un resultado medido):_ JSON sin texto adicional; valídalo con un parser, porque los modelos pequeños aún pueden añadir texto.',
          ],
        },

        commonMistakes: {
          id: 'the-7-most-common-optimization-mistakes',
          title: 'Los 7 errores de optimización más comunes',
          content: [
            '**La mayoría de la optimización falla por errores de proceso, no por malentendidos conceptuales.** Aquí están los escollos más comunes y cómo evitarlos:',
          ],
          items: [
            '**Error 1: Cambiar múltiples variables simultáneamente.** Añades ejemplos, cambias el formato de salida Y ajustas el rol en una revisión. Ahora cuando la salida mejora, no sabes qué cambio ayudó. La optimización efectiva aísla un cambio por iteración.',
            '**Error 2: Optimizar con una sola entrada.** Pruebas un ejemplo, ves una mejora y declaras el éxito. En uso real, el prompt falla con diferentes entradas. Prueba en 5–10 ejemplos representativos.',
            '**Error 3: Optimizar para solo un modelo.** Optimizas para GPT-5.6, ves resultados perfectos, luego despliegas en Claude. Allí puede fallar. Prueba en al menos 2 modelos (GPT-5.6 y Claude Opus 5); idealmente 3.',
            '**Error 4: Ignorar el formato de salida.** Un prompt produce los hechos correctos pero en la estructura incorrecta. "Formato incorrecto" es el modo de fallo más común y más rápido de corregir. Siempre especifica: "Responde en JSON con campos: [lista]" o "Usa una tabla markdown con columnas: [lista]."',
            '**Error 5: Over-prompting.** Añades 15 restricciones, 5 descripciones de rol y 10 ejemplos en un prompt de 200 tokens. Demasiadas instrucciones simultáneas abruman al modelo. Empieza mínimo, luego añade restricciones solo cuando sea necesario.',
            '**Error 6: Confundir la optimización con el fine-tuning.** La optimización mejora los prompts; el fine-tuning entrena el modelo. Si has probado las 6 palancas y el prompt sigue fallando, el modelo puede carecer de conocimiento o capacidad para la tarea — eso es un problema de fine-tuning, no de optimización.',
            '**Error 7: No guardar los prompts optimizados.** Optimizas un prompt, lo despliegas, y luego re-optimizas el mismo prompt 6 meses después porque nadie guardó la versión que funcionaba. Una biblioteca de prompts — con control de versiones, documentada y compartida — convierte el trabajo de optimización en un activo duradero.',
          ],
        },

        advancedTechniques: {
          id: 'prompt-optimization-techniques-advanced-methods',
          title: 'Técnicas de optimización de prompts: métodos avanzados',
          content: [
            '**Más allá de las 6 palancas principales, las técnicas avanzadas de optimización de prompts aplican patrones especializados para corregir modos de fallo específicos.** Aprende qué técnicas aplicar según tu desafío de optimización:',
          ],
          items: [
            '[Few-Shot vs Zero-Shot](/es/prompt-engineering/zero-shot-vs-few-shot): Añade 1–3 pares de entrada/salida al prompt cuando el modelo no está formateando la salida correctamente o se pierde el estilo que quieres. Los ejemplos few-shot son la forma más directa de enseñar el formato.',
            '[Chain-of-thought](/es/prompt-engineering/chain-of-thought-prompting): Inserta "piensa paso a paso antes de responder" para corregir fallos de razonamiento de múltiples pasos. Esta técnica puede mejorar el razonamiento en varios pasos; el efecto depende del modelo y la tarea.',
            '[Constrained prompting](/es/prompt-engineering/constrained-prompting): Añade prohibiciones explícitas ("No uses jerga", "No inventes cifras", "No repitas la entrada") para corregir fallos de alcance y estilo.',
            '[Self-consistency](/es/prompt-engineering/self-consistency-prompting): Genera la salida del prompt 3–5 veces de forma independiente, luego devuelve la respuesta más común. Esto reduce las alucinaciones en hechos de baja probabilidad combinando ejecuciones del modelo.',
            '[Structured output](/es/prompt-engineering/structured-output-and-json-mode): Solicita JSON, tablas markdown u otros formatos legibles por máquinas para corregir el cumplimiento del formato.',
          ],
        },

        keyTerms: {
          title: '¿Qué significan estos términos clave de optimización de prompts?',
          items: [
            '[Few-shot prompting](/es/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — Incluir un pequeño número de ejemplos de entrada/salida en el prompt para que el modelo infiera el patrón o formato deseado; la palanca "Ejemplos" del marco de 6 palancas',
            '[Chain-of-Thought (CoT)](/es/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — Pedir al modelo que razone paso a paso antes de responder; la técnica principal para corregir fallos de razonamiento de múltiples pasos',
            '[Self-consistency](/es/prompt-engineering/prompt-engineering-glossary#self-consistency) — Generar múltiples salidas y devolver la respuesta más común; reduce las tasas de alucinación en hechos de baja probabilidad',
            '[Zero-shot prompting](/es/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — Prompting sin ejemplos; la línea base con la que se mide la optimización few-shot',
            '[Alucinación](/es/prompt-engineering/prompt-engineering-glossary#hallucination) — Salida que suena segura pero es factualmente incorrecta; uno de los modos de fallo principales que la optimización busca corregir',
            '[Fine-tuning](/es/prompt-engineering/prompt-engineering-glossary#fine-tuning) — Reentrenar los pesos del modelo con datos específicos del dominio; la alternativa a la optimización de prompts cuando se alcanza un techo de calidad',
            '[RAG (Retrieval-Augmented Generation)](/es/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — Inyectar documentos recuperados en el contexto del prompt; complementario a la optimización (RAG mejora la información; la optimización mejora cómo el modelo la usa)',
            '[System prompt](/es/prompt-engineering/prompt-engineering-glossary#system-prompt) — Instrucción persistente que establece el rol, las restricciones y el comportamiento del modelo en todos los turnos; requiere su propia optimización',
            '[Temperatura](/es/prompt-engineering/prompt-engineering-glossary#temperature) — Parámetro de decodificación que controla la aleatoriedad de la salida; una temperatura más baja mejora la consistencia entre pruebas de optimización',
            '[Encadenamiento de prompts](/es/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — Dividir tareas complejas en una secuencia de prompts más pequeños; cada sub-prompt se beneficia de una optimización independiente',
          ],
        },

        promptLibrary: {
          id: 'saving-optimized-prompts-to-a-library',
          title: 'Guardar prompts optimizados en una biblioteca',
          content: [
            '**Un prompt optimizado es un activo duradero.** Una vez que has probado un prompt en 3 modelos, has confirmado que funciona en 5–10 entradas representativas y has documentado qué hace cada palanca — guárdalo. Una biblioteca de prompts te permite reutilizar prompts optimizados en proyectos, compartirlos con tu equipo y mejorarlos con el tiempo.',
            'Qué guardar con cada prompt: el texto final del prompt, la palanca que se cambió, el modo de fallo que corrigió, qué modelos se probaron y los resultados de aprobado/fallado en tus entradas representativas. Esta documentación es lo que separa una biblioteca de prompts de una simple carpeta de archivos de texto.',
            'Ver [Construir una biblioteca de prompts que ahorra horas](/es/prompt-engineering/build-a-prompt-library) para una guía completa sobre cómo estructurar, versionar y mantener una biblioteca.',
          ],
        },

        regionalCompliance: {
          id: 'prompt-optimization-and-regulatory-compliance',
          title: 'Optimización de prompts y cumplimiento regulatorio',
          content: [
            'En entornos regulados, una biblioteca de prompts versionada con registros de pruebas puede apoyar tu documentación. Por sí sola no hace que un sistema cumpla la Ley de IA de la UE ni ninguna otra norma.',
            'Las directrices de IA para empresas de Japón, del METI y del Ministerio del Interior y Comunicaciones, no son vinculantes. Esto no es asesoramiento legal: consulta con un profesional qué obligaciones te corresponden.',
          ],
        },

        multilingualReach: {
          id: 'prompt-optimization-across-languages-and-regions',
          title: 'Optimización de prompts en idiomas y regiones',
          content: [
            '**La optimización de prompts es una disciplina universal — las 6 palancas y el proceso de 6 pasos se aplican independientemente del idioma en que esté escrito tu prompt.** Sin embargo, los términos de búsqueda locales difieren significativamente, los modelos principales varían por región y algunos idiomas exponen desafíos de optimización únicos.',
          ],
          columns: ['Idioma / Región', 'Término local', 'Modelo principal', 'Nota regional'],
          rows: [
            { 'Idioma / Región': 'Inglés — EE.UU.', 'Término local': 'prompt optimization', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Ortografía estadounidense (-ize)' },
            { 'Idioma / Región': 'Inglés — Reino Unido / AU', 'Término local': 'prompt optimisation', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Ortografía británica (-ise)' },
            { 'Idioma / Región': 'Alemán — DE / AT / CH', 'Término local': 'Prompt-Optimierung', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Ley de IA de la UE relevante para DACH' },
            { 'Idioma / Región': 'Francés — FR / CA', 'Término local': 'optimisation de prompt', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Registro formal' },
            { 'Idioma / Región': 'Español — ES / LATAM', 'Término local': 'optimización de prompts', 'Modelo principal': 'GPT-5.6', 'Nota regional': 'Término en español neutro' },
            { 'Idioma / Región': 'Portugués — BR', 'Término local': 'otimização de prompts', 'Modelo principal': 'GPT-5.6', 'Nota regional': 'Término en portugués de Brasil' },
            { 'Idioma / Región': 'Japonés — JP', 'Término local': 'プロンプト最適化', 'Modelo principal': 'GPT-5.6 (fuerte soporte japonés)', 'Nota regional': 'Revisa los tokens en cada modelo' },
            { 'Idioma / Región': 'Chino simplificado — CN', 'Término local': '提示词优化', 'Modelo principal': 'DeepSeek, Qwen 3', 'Nota regional': 'Caracteres simplificados' },
            { 'Idioma / Región': 'Coreano — KR', 'Término local': '프롬프트 최적화', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Revisa los tokens en cada modelo' },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[¿Qué es el prompt engineering?](/es/prompt-engineering/what-is-prompt-engineering) — la definición pilar y los bloques de construcción principales del diseño de prompts',
            '[5 bloques de construcción que todo prompt necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) — los elementos estructurales que estás optimizando',
            '[Chain-of-Thought Prompting](/es/prompt-engineering/chain-of-thought-prompting) — técnica de razonamiento paso a paso para mejorar la precisión',
            '[Zero-Shot vs Few-Shot Prompting](/es/prompt-engineering/zero-shot-vs-few-shot) — cuándo añadir ejemplos como palanca de optimización',
            '[Construir una biblioteca de prompts que ahorra horas](/es/prompt-engineering/build-a-prompt-library) — preservar los prompts optimizados como activos del equipo',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Optimización de prompts',
          faqs: [
            { q: '¿Qué es la optimización de prompts?', a: 'La optimización de prompts es el proceso iterativo de revisar un prompt existente para mejorar la calidad de la salida de IA para una tarea específica. Implica identificar un modo de fallo (formato incorrecto, alucinación, salida vaga), cambiar una variable (especificidad, contexto, ejemplos, restricciones, formato de salida o rol) y probar el resultado en modelos como GPT-5.6, Claude Opus 5 y Gemini 3.1 Pro.' },
            { q: '¿Cuál es la diferencia entre la optimización de prompts y el prompt engineering?', a: 'El prompt engineering es la disciplina de diseñar una estructura de prompt desde cero usando bloques de construcción como objetivo, contexto y formato de salida. La optimización de prompts es el subproceso iterativo de mejorar un prompt ya escrito diagnosticando modos de fallo y aplicando cambios dirigidos.' },
            { q: '¿Cuántas iteraciones se necesitan para optimizar un prompt?', a: 'Para la mayoría de las tareas, 2–4 iteraciones dirigidas son suficientes para pasar de un prompt fallido a uno fiable. Los rendimientos decrecientes se establecen después de 5–6 iteraciones.' },
            { q: '¿Qué palanca debo cambiar primero al optimizar un prompt?', a: 'Empieza con el formato de salida. El incumplimiento del formato es el modo de fallo más común y más rápido de corregir. Especifica la estructura exacta que quieres, luego aborda otros problemas en iteraciones posteriores.' },
            { q: '¿Funciona la optimización de prompts en todos los modelos de IA?', a: 'Sí, pero con ajustes específicos del modelo. Las seis palancas de optimización principales se aplican a GPT-5.6, Claude Opus 5, Gemini 3.1 Pro y Mistral Large. Sin embargo, cada modelo responde de manera diferente a la densidad de instrucciones.' },
            { q: '¿Cuál es el error más común en la optimización de prompts?', a: 'Cambiar múltiples variables simultáneamente. Si añades ejemplos, cambias el formato de salida y añades una instrucción de rol en la misma revisión, no puedes determinar qué cambio mejoró (o degradó) la salida.' },
            { q: '¿Puede la optimización de prompts reducir las alucinaciones de IA?', a: 'Sí, con las técnicas correctas. Añadir contexto de anclaje, ejemplos few-shot con salidas factualmente correctas y restricciones explícitas pueden ayudar a reducir las alucinaciones. El self-consistency prompting reduce aún más las fabricaciones.' },
            { q: '¿Cuándo debo usar el fine-tuning en lugar de la optimización de prompts?', a: 'Usa el fine-tuning cuando la optimización de prompts haya alcanzado un techo. La optimización de prompts es más rápida y barata y siempre debe agotarse antes del fine-tuning.' },
            { q: '¿Cómo sé cuándo un prompt está completamente optimizado?', a: 'Un prompt está suficientemente optimizado cuando: (1) produce salida correcta en 4–5 entradas representativas, (2) produce salida consistente en re-ejecuciones, (3) funciona en al menos dos modelos, y (4) cumple la especificación de formato sin post-procesamiento.' },
            { q: '¿Se aplica la optimización de prompts a los prompts de imágenes?', a: 'Los principios se aplican — especificidad, restricciones y ejemplos son palancas válidas para modelos de imágenes. El proceso de optimización (línea base → diagnosticar → cambiar una variable → probar) es idéntico.' },
            { q: '¿Qué es la optimización automática de prompts?', a: 'Usa un segundo modelo de IA para reescribir y mejorar prompts sin intervención humana. Herramientas como DSPy (Stanford), TextGrad y APE generan prompts candidatos, los puntúan y seleccionan la mejor variante.' },
            { q: '¿En qué se diferencia la optimización de prompts del prompt tuning?', a: 'La optimización de prompts mejora los prompts de texto discreto sin modificar los pesos del modelo. El prompt tuning aprende vectores de prompt suave continuos entrenados por descenso de gradiente.' },
            { q: '¿Cuáles son las mejores herramientas para la optimización de prompts?', a: 'No hay una única herramienta mejor. Algunos ejemplos: PromptQuorum (creado por el editor de este sitio; despacha un prompt a GPT-5.6, Claude y Gemini simultáneamente), DSPy (optimización programática), LangSmith (versionado y trazabilidad), Promptfoo (CLI open-source para tests de regresión) y PromptLayer (versionado y análisis).' },
            { q: '¿Cómo optimizo un system prompt?', a: 'La optimización del system prompt sigue el mismo proceso de 6 pasos que la optimización del prompt de usuario, con dos restricciones adicionales. Los system prompts persisten en todos los turnos; la longitud importa — los system prompts muy largos pueden reducir el seguimiento de instrucciones en turnos posteriores.' },
            { q: '¿Se puede usar ChatGPT para optimizar prompts?', a: 'Sí. Puedes pedirle a GPT-5.6 que reescriba un prompt proporcionando el prompt fallido y describiendo el modo de fallo. Esto es meta-prompting. Siempre prueba el prompt reescrito con entradas reales y mide contra tus criterios reales de aprobado/fallado.' },
            { q: '¿Qué es la optimización de prompts en machine learning?', a: 'Se refiere a técnicas que mejoran los prompts alimentados en modelos de lenguaje como parte de un pipeline — sin reentrenar el modelo. Incluye tanto la optimización de prompts discretos como el prompt tuning continuo.' },
            { q: '¿Cuánto mejora la optimización de prompts la calidad de la salida de IA?', a: 'Depende del modelo, la tarea y el prompt de partida, así que no hay un porcentaje general. Mídelo tú: prueba el prompt antiguo y el nuevo con las mismas entradas y compara la tasa de aciertos.' },
            { q: '¿Debo optimizar los prompts para cada modelo de IA por separado?', a: 'Empieza con una optimización agnóstica al modelo. Un prompt bien estructurado típicamente funciona bien en los tres principales. Solo añade variantes específicas del modelo si las pruebas entre modelos revelan resultados divergentes.' },
            { q: '¿Cuál es la diferencia entre la optimización de prompts y RAG?', a: 'La optimización de prompts mejora las instrucciones y la estructura de un prompt. RAG mejora la información disponible para el modelo recuperando documentos relevantes. Los dos son complementarios: RAG resuelve el problema de información; la optimización resuelve el problema de procesamiento.' },
            { q: '¿Cómo optimizo prompts específicamente para GPT-5.6?', a: 'Vale la pena probar cuatro movimientos de optimización con GPT-5.6: (1) Solicitudes explícitas de formato JSON en el system prompt — para salidas estructuradas, define el esquema con precisión. (2) Encabezados markdown en system prompts — usa secciones H2 (## Rol, ## Tarea, ## Formato de salida) para separar responsabilidades. (3) Restricciones estrictas — sin límite de palabras o longitud, las respuestas pueden ser más largas de lo necesario; añade "responde en ≤150 palabras" o "devuelve solo el objeto JSON, sin explicación". (4) Encuadre de uso de herramientas — para tareas de recuperación o cálculo, plantea el prompt como una definición de función en lugar de una instrucción en prosa cuando uses la Assistants API con herramientas habilitadas.' },
          ],
        },

        sources: {
          title: 'Fuentes',
          items: [
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608) — cataloga 58 técnicas de prompting basadas en texto',
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — base académica para el razonamiento paso a paso como palanca de optimización',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — guía de OpenAI sobre prompt engineering',
            '[Brown et al., 2020. "Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165) — artículo fundacional que establece los ejemplos few-shot como palanca de optimización de alto apalancamiento; la base para la palanca de ejemplos en el framework de 6 palancas',
          ],
        },

      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2027-02-26',
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-ar.webp',
      title: 'كيفية تحسين الموجّهات: تقنيات وأفضل الممارسات',
      seoTitle: 'تحسين الموجّهات ⁨2026⁩: ⁨6⁩ رافعات وعملية من ⁨6⁩ خطوات',
      intro: '**تحسين الموجّهات هو العملية التكرارية لمراجعة موجّه ما لتحسين جودة مخرجات الذكاء الاصطناعي أو اتساقها أو دقتها.** يُعلّم هذا الدليل الشامل تقنيات تحسين الموجّهات وأساسياتها: الرافعات الست الرئيسية، وعملية تحسين من 6 خطوات، وأمثلة قبل/بعد لـGPT-5.6 وClaude وGemini، وأكثر 7 أخطاء شيوعًا ينبغي تجنبها.',
      metaDescription: 'كيفية تحسين الموجّهات بـ⁨6⁩ رافعات وعملية من ⁨6⁩ خطوات. أمثلة قبل/بعد لـ⁨GPT-5.6⁩ و⁨Claude⁩ و⁨Gemini⁩، و⁨7⁩ أخطاء شائعة ينبغي تجنبها.',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '١٤ دقيقة للقراءة',
      educationalLevel: 'مبتدئ',
      primaryTerm: 'تحسين الموجّهات',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: 'كيفية تحسين الموجّهات: تقنيات وأفضل الممارسات',
        description: 'تعلّم تقنيات وأفضل ممارسات تحسين الموجّهات: 6 رافعات رئيسية، عملية من 6 خطوات، أمثلة قبل/بعد. كيفية تحسين موجّهات الذكاء الاصطناعي في GPT-5.6 وClaude وGemini — أساسيات لجميع النماذج.',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['تحسين الموجّهات', 'تقنيات تحسين الموجّهات', 'كيفية تحسين الموجّهات', 'تحسين موجّهات الذكاء الاصطناعي', 'أساسيات هندسة الموجّهات', 'تحسين النماذج اللغوية الكبيرة', 'GPT-5.6', 'Claude', 'Gemini', 'few-shot prompting', 'chain-of-thought'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'تحسين الموجّهات' },
          { '@type': 'Thing', name: 'Few-shot prompting' },
          { '@type': 'Thing', name: 'Chain-of-thought prompting' },
          { '@type': 'Thing', name: 'جودة مخرجات النماذج اللغوية الكبيرة' },
          { '@type': 'Thing', name: 'هندسة موجّهات الذكاء الاصطناعي' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        image: buildOgImageObject(OG_SLUG, 'ar'),
        url: 'https://www.promptquorum.com/ar/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'ar',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'الرافعات الست لتحسين الموجّهات',
        description: 'المتغيرات الستة المستقلة التي تحدد جودة مخرجات الذكاء الاصطناعي — يمكن ضبط كل منها لتصحيح وضع فشل محدد في الموجّه.',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'التحديد الدقيق', description: 'مدى دقة تعريف المهمة. خطوة التحسين: إعادة صياغة الهدف الغامض كتعليمة دقيقة. مثال: "لخّص" → "اسرد 3 نتائج رئيسية بـ≤20 كلمة لكل منها".' },
          { '@type': 'ListItem', position: 2, name: 'السياق', description: 'المعلومات التي يعمل معها النموذج. خطوة التحسين: إضافة الخلفية والجمهور والقيود. مثال: "اكتب تقريرًا" → "اكتب تقريرًا لمدير مالي غير تقني".' },
          { '@type': 'ListItem', position: 3, name: 'الأمثلة', description: 'فهم النموذج لتنسيق المخرجات المطلوب. خطوة التحسين: إضافة 1–3 أزواج إدخال/مخرج (few-shot). أظهر التنسيق الدقيق الذي تريده مرةً واحدة.' },
          { '@type': 'ListItem', position: 4, name: 'القيود', description: 'حدود ما يمكن للنموذج توليده. خطوة التحسين: إضافة محظورات صريحة. مثال: "لا تستخدم المصطلحات التقنية. 150 كلمة كحد أقصى".' },
          { '@type': 'ListItem', position: 5, name: 'تنسيق المخرجات', description: 'بنية الاستجابة. خطوة التحسين: تحديد التنسيق صراحةً. مثال: "أجب بصيغة JSON: {العنوان، الملخص، التصنيفات[]}".' },
          { '@type': 'ListItem', position: 6, name: 'الدور/الشخصية', description: 'مستوى الخبرة الذي يتبناه النموذج. خطوة التحسين: إضافة دور محدد. مثال: "تصرف كمحلل بيانات أول في شركة B2B SaaS".' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'كيفية تحسين موجّه في 6 خطوات',
        description: 'عملية منهجية من 6 خطوات لتشخيص إخفاقات الموجّهات وتحسين جودة مخرجات الذكاء الاصطناعي في GPT-5.6 وClaude وGemini.',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'ضع خطًا أساسيًا', text: 'شغّل الموجّه الحالي 3 مرات بمدخلات تمثيلية. وثّق وضع الفشل: تنسيق خاطئ، هلوسة، مخرجات غامضة، أو استجابة خارج الموضوع.' },
          { '@type': 'HowToStep', position: 2, name: 'حدّد الرافعة الجذرية', text: 'ربط الفشل بواحدة من الرافعات الست: التحديد الدقيق، السياق، الأمثلة، القيود، تنسيق المخرجات، أو الدور/الشخصية.' },
          { '@type': 'HowToStep', position: 3, name: 'غيّر متغيرًا واحدًا فقط', text: 'أجرِ تغييرًا واحدًا موجَّهًا نحو الرافعة المُحددة. لا تُغيّر الهدف وتُضيف أمثلة وتُغيّر التنسيق في نفس المراجعة — لا يمكنك تشخيص التحسين إذا تغيّرت أشياء متعددة.' },
          { '@type': 'HowToStep', position: 4, name: 'اختبر على نماذج متعددة', text: 'شغّل الموجّه المُعدَّل على GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro. الموجّه الذي يعمل على نموذج واحد فقط هش.' },
          { '@type': 'HowToStep', position: 5, name: 'قِس مقابل معايير الجودة', text: 'تحقق من دقة المهمة، والامتثال للتنسيق، والارتكاز الواقعي، والاتساق في 3 تشغيلات، والاتفاق بين النماذج.' },
          { '@type': 'HowToStep', position: 6, name: 'احفظ في مكتبة الموجّهات', text: 'وثّق ما تغيّر ولماذا نجح. قيّد الإصدارات. الموجّه المُختبَر هو أصل قابل لإعادة الاستخدام.' },
        ],
      },
      leadAnswerBlock: '**تحسين الموجّهات هو العملية التكرارية لمراجعة موجّه موجود لتحسين الجودة أو الدقة أو الاتساق في المخرجات.** الرافعات الست للتحسين — التحديد الدقيق، السياق، الأمثلة، القيود، تنسيق المخرجات، والدور/الشخصية — هي المتغيرات المستقلة التي تضبطها. غيّر متغيرًا واحدًا لكل تكرار، واختبر على نماذج متعددة، وقِس النتائج. يقلّل هذا النهج المنهجي التخمينَ من عملية تحسين الموجّهات.',
      quickFacts: [
        '**6 رافعات رئيسية:** التحديد الدقيق، السياق، الأمثلة، القيود، تنسيق المخرجات، والدور/الشخصية — هذه هي المتغيرات الرئيسية التي يضبطها هذا الدليل',
        '**2–4 تكرارات كافية:** معظم المهام تصل لجودة مقبولة في 2–4 تكرارات موجَّهة قبل أن تتراجع العوائد',
        '**اختبار متعدد النماذج مطلوب:** الموجّه الذي يعمل على GPT-5.6 لكن يفشل على Claude هش — اختبر على ≥2 نموذجين للتحقق من المتانة',
        '**الضبط الدقيق:** يتطلب عادةً وقتًا وتكلفة أكبر من تحسين الموجّهات، لذا جرّب التحسين أولًا',
      ],
      toc: [
        { label: 'النقاط الرئيسية', anchor: 'key-takeaways' },
        { label: 'النقاط الرئيسية لمستخدمي النماذج اللغوية المحلية', anchor: 'key-takeaways-for-local-llm-users' },
        { label: 'ما تحسين الموجّهات؟', anchor: 'what-is-prompt-optimization' },
        { label: 'تحسين الموجّهات مقابل هندسة الموجّهات', anchor: 'prompt-optimization-vs-prompt-engineering' },
        { label: 'لماذا يهم تحسين الموجّهات', anchor: 'why-prompt-optimization-matters' },
        { label: 'الرافعات الست للتحسين', anchor: 'the-6-optimization-levers' },
        { label: 'عملية التحسين من 6 خطوات', anchor: 'the-6-step-optimization-process' },
        { label: 'كيفية قياس جودة الموجّه', anchor: 'how-to-measure-prompt-quality' },
        { label: 'كيف يبدو تحسين الموجّهات في الممارسة؟', anchor: 'what-does-prompt-optimization-look-like-in-practice' },
        { label: 'نصائح تحسين خاصة بكل نموذج', anchor: 'model-specific-optimization-tips' },
        { label: 'تحسين الموجّهات للنماذج اللغوية المحلية', anchor: 'optimizing-prompts-for-local-llms-ollama-lm-studio' },
        { label: 'أكثر 7 أخطاء تحسين شيوعًا', anchor: 'the-7-most-common-optimization-mistakes' },
        { label: 'تقنيات تحسين الموجّهات: الطرق المتقدمة', anchor: 'prompt-optimization-techniques-advanced-methods' },
        { label: 'حفظ الموجّهات المُحسَّنة في مكتبة', anchor: 'saving-optimized-prompts-to-a-library' },
        { label: 'الامتثال التنظيمي', anchor: 'prompt-optimization-and-regulatory-compliance' },
        { label: 'اللغات والمناطق', anchor: 'prompt-optimization-across-languages-and-regions' },
        { label: 'ماذا تعني هذه المصطلحات؟', anchor: 'what-do-these-prompt-optimization-terms-mean' },
        { label: 'قراءات ذات صلة', anchor: 'related-reading' },
        { label: 'الأسئلة الشائعة', anchor: 'faq-prompt-optimization' },
      ],
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          {
            '@type': 'Question',
            'name': 'ما تحسين الموجّهات؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'تحسين الموجّهات هو العملية التكرارية لمراجعة موجّه موجود لتحسين جودة مخرجات الذكاء الاصطناعي لمهمة محددة. يتضمن تحديد وضع فشل (تنسيق خاطئ، هلوسة، مخرجات غامضة)، وتغيير متغير واحد (التحديد الدقيق، السياق، الأمثلة، القيود، تنسيق المخرجات، أو الدور)، واختبار النتيجة على نماذج مثل GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين تحسين الموجّهات وهندسة الموجّهات؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'هندسة الموجّهات هي تخصص تصميم بنية الموجّه من الصفر. تحسين الموجّهات هو العملية الفرعية التكرارية لتحسين موجّه مكتوب بالفعل بتشخيص أوضاع الفشل وتطبيق تغييرات موجَّهة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كم تكرارًا تحتاج لتحسين موجّه؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لمعظم المهام، تكفي 2–4 تكرارات موجَّهة للانتقال من موجّه فاشل إلى موجّه موثوق. تتراجع العوائد بعد 5–6 تكرارات.',
            },
          },
          {
            '@type': 'Question',
            'name': 'أي رافعة أبدأ بتغييرها؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ابدأ بتنسيق المخرجات. عدم الامتثال للتنسيق هو أكثر أوضاع الفشل شيوعًا وأسرعها تصحيحًا. حدّد البنية الدقيقة التي تريدها، ثم عالج مشكلات أخرى في تكرارات لاحقة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل تعمل تحسين الموجّهات على جميع نماذج الذكاء الاصطناعي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، لكن مع تعديلات خاصة بكل نموذج. الرافعات الست الرئيسية تنطبق على GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro وMistral Large. غير أن كل نموذج يستجيب بشكل مختلف لكثافة التعليمات.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما أكثر خطأ شائع في تحسين الموجّهات؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'تغيير متغيرات متعددة في آنٍ واحد. إذا أضفت أمثلة وغيّرت تنسيق المخرجات وأضفت تعليمة دور في نفس المراجعة، لا يمكنك تحديد أي تغيير أفاد.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكن لتحسين الموجّهات تقليل هلوسة الذكاء الاصطناعي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم، بالتقنيات الصحيحة. إضافة سياق الارتكاز وأمثلة few-shot وقيود صريحة قد تساعد على تقليل الهلوسة. self-consistency prompting يُقلّل الهلوسة أكثر.',
            },
          },
          {
            '@type': 'Question',
            'name': 'متى يجب أن أستخدم الضبط الدقيق بدلًا من تحسين الموجّهات؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'استخدم الضبط الدقيق حين يصل تحسين الموجّهات إلى سقفه. تحسين الموجّهات أسرع وأرخص وينبغي استنفاده دائمًا أولًا.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كيف أعرف متى يكون الموجّه مُحسَّنًا بشكل كافٍ؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'موجّه مُحسَّن بما يكفي حين: (1) يُنتج مخرجات صحيحة على 4–5 مدخلات تمثيلية، (2) يُنتج مخرجات متسقة عند إعادة التشغيل، (3) يعمل على نموذجين على الأقل، و(4) يمتثل لمواصفات التنسيق دون معالجة لاحقة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل ينطبق تحسين الموجّهات على موجّهات الصور؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'تنطبق المبادئ — التحديد الدقيق والقيود والأمثلة رافعات صالحة لنماذج الصور. عملية التحسين (خط أساسي → تشخيص → تغيير متغير → اختبار) متطابقة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما تحسين الموجّهات التلقائي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يستخدم نموذج ذكاء اصطناعي ثانٍ لإعادة كتابة الموجّهات وتحسينها. أدوات مثل DSPy وTextGrad وAPE تولّد موجّهات مرشحة وتُقيّمها وتختار الأفضل.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين تحسين الموجّهات وضبط الموجّهات (prompt tuning)؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يُحسّن تحسين الموجّهات الموجّهات النصية دون تعديل أوزان النموذج. ضبط الموجّهات يتعلّم متجهات موجّهات ناعمة مستمرة بنزول التدرج.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما أفضل أدوات تحسين الموجّهات؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لا توجد أداة واحدة هي الأفضل. من الأمثلة: PromptQuorum (من ناشر هذا الموقع؛ يُرسل موجّهًا لـGPT-5.6 وClaude وGemini في آنٍ واحد)، وDSPy (تحسين برمجي)، وLangSmith (إصدارات واختبار A/B)، وPromptfoo (CLI مفتوح المصدر)، وPromptLayer (الإصدارات والتحليلات).',
            },
          },
          {
            '@type': 'Question',
            'name': 'كيف أُحسّن system prompt؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يتبع نفس العملية من 6 خطوات مع قيدين إضافيين: system prompts تستمر عبر جميع الأدوار، والطول يهم — system prompts الطويلة جدًا قد تقلّل اتباع التعليمات في الأدوار اللاحقة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكن استخدام ChatGPT لتحسين الموجّهات؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. يمكنك طلب من GPT-5.6 إعادة كتابة موجّه بوصف وضع الفشل. هذا meta-prompting. اختبر دائمًا الموجّه المُعاد كتابته بمدخلات حقيقية.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما تحسين الموجّهات في التعلم الآلي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يشير إلى تقنيات تُحسّن الموجّهات في خط الأنابيب — دون إعادة تدريب النموذج. يشمل تحسين الموجّهات المتقطعة وضبط الموجّهات المستمرة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'بكم يُحسّن تحسين الموجّهات جودة مخرجات الذكاء الاصطناعي؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'يعتمد ذلك على النموذج والمهمة والموجّه الأصلي، ولذلك لا توجد نسبة عامة. قِس ذلك بنفسك: شغّل الموجّه القديم والجديد على المدخلات نفسها وقارن معدلات النجاح.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يجب تحسين الموجّهات لكل نموذج بشكل منفصل؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ابدأ بالتحسين المحايد للنموذج. الموجّه الجيد البنية يعمل عادةً بشكل جيد على النماذج الثلاثة الرئيسية. أضف متغيرات خاصة بالنموذج فقط إذا كشفت الاختبارات عن نتائج متباينة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين تحسين الموجّهات وRAG؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'تحسين الموجّهات يُحسّن التعليمات والبنية. RAG يُحسّن المعلومات المتاحة باسترجاع وثائق ذات صلة. الاثنان متكاملان: RAG يحل مشكلة المعلومات؛ التحسين يحل مشكلة المعالجة.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كيف أُحسّن الموجّهات خصيصًا لـGPT-5.6؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'تستحق أربع خطوات تحسين التجربة مع GPT-5.6: (1) طلبات تنسيق JSON صريحة في موجّه النظام — للمخرجات المنظَّمة، حدّد المخطط بدقة. (2) عناوين Markdown في موجّهات النظام — استخدم أقسام H2 (## الدور، ## المهمة، ## تنسيق المخرجات) لفصل الاهتمامات. (3) قيود صارمة — دون حدّ لعدد الكلمات أو الطول قد تأتي الإجابات أطول من المطلوب؛ أضف "أجب في ≤150 كلمة" أو "أعد كائن JSON فقط، دون شرح". (4) صياغة استخدام الأدوات — للمهام التي تتضمن الاسترجاع أو الحساب، صُغ الموجّه كتعريف دالة بدلًا من تعليمة نثرية عند استخدام Assistants API مع تفعيل الأدوات.',
            },
          },
        ],
      },
      sections: {

        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'تحسين الموجّهات = المراجعة التكرارية لموجّه موجود لتحسين جودة المخرجات',
            'الرافعات الست: **التحديد الدقيق**، **السياق**، **الأمثلة**، **القيود**، **تنسيق المخرجات**، **الدور/الشخصية**',
            'غيّر رافعة واحدة في كل مرة — عزل المتغيرات هو كيف تجد ما يعمل فعلًا',
            'اختبر على ≥2 نموذجين (GPT-5.6، Claude، Gemini) لتأكيد أن التحسين محايد للنموذج',
            'وضع الفشل الشائع: تغيير متغيرات كثيرة في آنٍ واحد يجعل التشخيص مستحيلًا',
            'الموجّه المُختبَر والمُحسَّن أصل دائم — احفظه في مكتبة الموجّهات',
          ],
        },

        localLLMTldr: {
          id: 'key-takeaways-for-local-llm-users',
          title: 'النقاط الرئيسية لمستخدمي النماذج اللغوية المحلية',
          items: [
            'تحسين الموجّهات أكثر أهمية للنماذج المحلية — النماذج المكمّمة (4-bit، 8-bit) قد تكون أكثر حساسيةً للتعليمات الغامضة',
            'تدعم Ollama وLM Studio نفس الرافعات الست للتحسين؛ الفرق أن النماذج الأصغر تحتاج غالبًا إلى قيود أكثر صراحةً ومدخلات أقصر',
            'قد تتبع النماذج المكمّمة التعليمات بموثوقية أقل — استخدم موجّهات أبسط وأكثر وضوحًا مع تنسيق مخرجات صريح وقيود أقل في آنٍ واحد',
            'قيم درجة الحرارة الافتراضية تختلف: Ollama تعتمد 0.8 افتراضيًا (إبداع أعلى، اتساق أقل)؛ اضبط درجة الحرارة على 0.1–0.3 للمهام المنظمة',
            'لتقدير فجوة الجودة، استخدم المدخلات نفسها على نموذجك المحلي وعلى النماذج السحابية، مثلًا بالمقارنة مع GPT-5.6 وClaude في PromptQuorum',
          ],
        },

        definition: {
          id: 'what-is-prompt-optimization',
          title: 'ما تحسين الموجّهات؟',
          content: [
            '**تحسين الموجّهات هو العملية التكرارية لمراجعة موجّه موجود لتحسين الجودة أو الدقة أو الاتساق في مخرجات الذكاء الاصطناعي لمهمة محددة.** ينطبق على جميع النماذج الرئيسية — GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro والنماذج التي تعمل محليًا عبر Ollama أو LM Studio. حيث تُصمّم هندسة الموجّهات البنية الأولية للموجّه، يُشخّص تحسين الموجّهات ما يفشل ويُطبّق تغييرات موجَّهة حتى تستوفي المخرجات معيارًا محددًا.',
            'تحسين الموجّهات هو عملية فرعية من هندسة الموجّهات. تبدأ دائمًا بموجّه يعمل وتُجري تغييرًا واحدًا في كل مرة. هذا العزل للمتغيرات هو ما يجعل التشخيص ممكنًا — حين تُراجع التحديد الدقيق وتنسيق المخرجات والقيود في آنٍ واحد، لا تستطيع تحديد أي تغيير حسّن النتيجة.',
            'لماذا يهم: النموذج ذاته يُنتج مخرجات مختلفة جذريًا من موجّهات شبه متطابقة. الفرق بين "صحيح تقريبًا" و"صحيح بشكل موثوق" ليس حظًا — بل تحسينًا منهجيًا.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'تحسين الموجّهات هو العملية المنهجية لتشخيص سبب فشل الموجّه وإصلاح متغير واحد في كل مرة حتى تستوفي المخرجات معايير جودتك.' },
          ],
        },

        vsPromptEngineering: {
          id: 'prompt-optimization-vs-prompt-engineering',
          title: 'تحسين الموجّهات مقابل هندسة الموجّهات',
          content: [
            '**تحسين الموجّهات وهندسة الموجّهات تخصصان متكاملان يعملان بالتسلسل.** تُصمّم هندسة الموجّهات موجّهًا من الصفر باستخدام عناصر البناء (الهدف، السياق، الأمثلة، القيود، تنسيق المخرجات، الدور). يأخذ تحسين الموجّهات موجّهًا موجودًا ويُحسّنه بالمراجعة التكرارية. تحتاج كليهما: هندسة الموجّهات تُوصلك إلى "يعمل"؛ تحسين الموجّهات يُوصلك إلى "موثوق".',
            'فكّر في الأمر هكذا: هندسة الموجّهات تبني البنية؛ تحسين الموجّهات تُنقّحها. هندسة الموجّهات تسأل "ما العناصر التي يجب أن يحتوي عليها هذا الموجّه؟" تحسين الموجّهات تسأل "لماذا يفشل هذا الموجّه، وما التغيير الواحد الذي سيُصلحه؟"',
          ],
          columns: ['البُعد', 'هندسة الموجّهات', 'تحسين الموجّهات'],
          rows: [
            { 'البُعد': 'نقطة البداية', 'هندسة الموجّهات': 'صفحة فارغة', 'تحسين الموجّهات': 'موجّه موجود' },
            { 'البُعد': 'الهدف', 'هندسة الموجّهات': 'تصميم البنية', 'تحسين الموجّهات': 'تحسين المخرجات' },
            { 'البُعد': 'الطريقة', 'هندسة الموجّهات': 'الأطر وعناصر البناء', 'تحسين الموجّهات': 'العزل، التغيير، الاختبار، القياس' },
          ],
        },

        whyOptimize: {
          id: 'why-prompt-optimization-matters',
          title: 'لماذا يهم تحسين الموجّهات',
          content: [
            '**يقلّل تحسين الموجّهات المخرجات غير المتسقة للذكاء الاصطناعي بتشخيص ما يفشل بشكل منهجي وإصلاح متغير واحد في كل مرة.** الموجّه الغامض يُنتج مخرجات غامضة. الموجّه سيئ التحديد يُنتج استجابة خارج الهدف. مثال توضيحي وليس اختبارًا مقيسًا: قد يعطي "لخّص هذا المقال." طولًا وتركيزًا مختلفين في كل تشغيل. إضافة تنسيق مخرجات ("3 نقاط، ≤20 كلمة لكل نقطة") ودور ("محلل") ومهمة دقيقة ("اسرد 3 نتائج رئيسية، ليس المنهجية") تقلّل هذا التباين في الغالب.',
            'للاطلاع على السياق التنظيمي، راجع قسم الامتثال التنظيمي أدناه.',
          ],
        },

        callout1: {
          blockquote: 'في معيار GSM8K للمسائل الرياضية اللفظية، أدّى عرض بضعة أمثلة محلولة باستدلال خطوةً بخطوة (few-shot chain-of-thought) على نموذج PaLM ذي 540 مليار معامل إلى رفع معدل الحل من 17.9٪ مع الموجّهات المعتادة إلى 56.9٪، دون إعادة تدريب.',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          id: 'the-6-optimization-levers',
          title: 'الرافعات الست للتحسين',
          content: [
            '**كل موجّه يتكوّن من ستة متغيرات مستقلة يمكنك ضبطها لتحسين المخرجات.** هذه هي "الرافعات" للتحسين. حين يفشل موجّه، يعود الفشل إلى واحدة أو أكثر من هذه الرافعات التي لم تُهيَّأ بشكل صحيح.',
          ],
          columns: ['الرافعة', 'ما الذي يتغيّر', 'خطوة التحسين', 'مثال'],
          rows: [
            { 'الرافعة': 'التحديد الدقيق', 'ما الذي يتغيّر': 'مدى دقة تعريف المهمة', 'خطوة التحسين': 'إعادة صياغة الهدف الغامض كتعليمة دقيقة', 'مثال': '"لخّص" → "اسرد 3 نتائج رئيسية بـ≤20 كلمة لكل منها"' },
            { 'الرافعة': 'السياق', 'ما الذي يتغيّر': 'المعلومات التي يعمل معها النموذج', 'خطوة التحسين': 'إضافة الخلفية والجمهور والقيود', 'مثال': '"اكتب تقريرًا" → "اكتب تقريرًا لمدير مالي غير تقني"' },
            { 'الرافعة': 'الأمثلة', 'ما الذي يتغيّر': 'فهم النموذج لتنسيق المخرجات المطلوب', 'خطوة التحسين': 'إضافة 1–3 أزواج إدخال/مخرج (few-shot)', 'مثال': 'أظهر التنسيق الدقيق الذي تريده مرةً واحدة' },
            { 'الرافعة': 'القيود', 'ما الذي يتغيّر': 'حدود ما يمكن للنموذج توليده', 'خطوة التحسين': 'إضافة محظورات صريحة', 'مثال': '"لا تستخدم المصطلحات التقنية. 150 كلمة كحد أقصى."' },
            { 'الرافعة': 'تنسيق المخرجات', 'ما الذي يتغيّر': 'بنية الاستجابة', 'خطوة التحسين': 'تحديد التنسيق صراحةً', 'مثال': '"أجب بصيغة JSON: {العنوان، الملخص، التصنيفات[]}"' },
            { 'الرافعة': 'الدور/الشخصية', 'ما الذي يتغيّر': 'مستوى الخبرة الذي يتبناه النموذج', 'خطوة التحسين': 'إضافة دور محدد', 'مثال': '"تصرف كمحلل بيانات أول في شركة B2B SaaS"' },
          ],
        },

        callout2: {
          blockquote: 'أظهر توسيع GPT-3 أن التعلّم بأمثلة قليلة (few-shot) داخل الموجّه، دون تحديثات تدرّج، استطاع في بعض المهام منافسة أفضل أساليب الضبط الدقيق السابقة.',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        optimizationProcess: {
          id: 'the-6-step-optimization-process',
          title: 'عملية التحسين من 6 خطوات',
          content: [
            '**تحسين الموجّهات عملية منهجية وقابلة للقياس.** كل خطوة تُضيّق التشخيص: تُحدّد العَرَض، وتربطه برافعة، وتُغيّر متغيرًا، وتختبر على نماذج متعددة، وتقيس التحسين.',
          ],
          items: [
            '**الخطوة 1: ضع خطًا أساسيًا.** شغّل الموجّه الحالي على مهمتك الهدف 3 مرات بمدخلات تمثيلية. دوّن وضع الفشل: هل المخرجات طويلة أو قصيرة جدًا؟ تنسيق خاطئ؟ هلوسة؟ خارج الموضوع؟ هذا الخط الأساسي حاسم — لا يمكن قياس التحسين دونه.',
            '**الخطوة 2: حدّد الرافعة الجذرية.** ربط الفشل بواحدة من الرافعات الست. أمثلة: "المخرجات جدار نص بدلًا من نقاط" → رافعة تنسيق المخرجات؛ "الاستجابة غامضة" → رافعة التحديد الدقيق؛ "النبرة خاطئة" → رافعة الدور.',
            '**الخطوة 3: غيّر متغيرًا واحدًا.** أجرِ تغييرًا واحدًا موجَّهًا نحو الرافعة المُحددة. لا تُعدّل الهدف وتُضيف أمثلة وتُغيّر التنسيق في نفس المراجعة. هذا العزل غير قابل للتفاوض.',
            '**الخطوة 4: اختبر على نماذج متعددة.** شغّل الموجّه المُعدَّل على GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro. الموجّه الذي يعمل على نموذج واحد فقط هش وخاص بالنموذج.',
            '**الخطوة 5: قِس مقابل المعايير.** هل تحسّنت الدقة؟ هل امتثل التنسيق؟ هل تراجعت الهلوسة؟ هل المخرجات تجتاز الآن اختبارات الاتساق (تشغيل 3× متتالية)؟ القياس هو كيف تُؤكد أن التغيير نجح.',
            '**الخطوة 6: احفظ في مكتبة الموجّهات.** الموجّه المُختبَر والمُحسَّن أصل قابل لإعادة الاستخدام. وثّق ما تغيّر ولماذا تحسّن. قيّد الإصدارات. مكتبة الموجّهات المخزّنة والمُصدَرة ذات قيمة أكبر بكثير من موجّه لاستخدام واحد.',
          ],
          promptExamples: [
            {
              badLabel: '❌ سيء: تغيير متغيرات متعددة في آنٍ واحد',
              bad: 'الموجّه الأصلي: "لخّص هذا المقال."\n\nالمراجعة 1 (خاطئ): "لخّص هذا المقال في 3 نقاط. تصرف كمحلل مالي. لا تستخدم المصطلحات التقنية. أدرج المخاطر الرئيسية. نسّق كـJSON."',
              goodLabel: '✅ جيد: عزل متغير واحد لكل تكرار',
              good: 'الموجّه الأصلي: "لخّص هذا المقال."\n\nالمراجعة 1 (صحيح): "لخّص هذا المقال في 3 نقاط، ≤20 كلمة لكل نقطة."\n→ نتيجة محتملة: المخرجات الآن بتنسيق متسق، لكنها غامضة.\n\nالمراجعة 2: "لخّص في 3 نقاط مع التركيز على المخاطر الرئيسية. كل نقطة ≤20 كلمة."\n→ نتيجة محتملة: ملاءمة أفضل، لكن يفتقر لسياق الجمهور.\n\nالمراجعة 3: "أنت مدير مالي يراجع تقرير مخاطر المورد. لخّص في 3 نقاط مع التركيز على المخاطر الرئيسية. ≤20 كلمة لكل نقطة."\n→ نتيجة محتملة: محدد، قابل للتنفيذ، متسق. تم!',
            },
          ],
        },

        callout3: {
          blockquote: 'في تجربة إلكترونية مسجَّلة مسبقًا شملت 453 من المهنيين الجامعيين في مهام كتابية خاصة بمهنهم، خفّض الوصول إلى ChatGPT متوسط الوقت المستغرق بنسبة 40٪ ورفع جودة المخرجات بنسبة 18٪. وتراجع التفاوت بين العاملين.',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        measurementCriteria: {
          id: 'how-to-measure-prompt-quality',
          title: 'كيفية قياس جودة الموجّه',
          content: [
            '**لا يمكن تحسين ما لا يمكن قياسه.** المعايير التالية تحدد ما إذا كان الموجّه قد نجح. استخدم نقاط التحقق هذه بعد كل تكرار:',
          ],
          columns: ['المعيار', 'ما تفحصه', 'إشارة النجاح / الفشل'],
          rows: [
            { 'المعيار': 'دقة المهمة', 'ما تفحصه': 'هل تُجيب المخرجات على السؤال الفعلي؟', 'إشارة النجاح / الفشل': 'قارن مقابل إجابة صحيحة معروفة' },
            { 'المعيار': 'الامتثال للتنسيق', 'ما تفحصه': 'هل تتطابق المخرجات مع البنية المحددة؟', 'إشارة النجاح / الفشل': 'هل تحلّل JSON؟ هل النقاط بالطول الصحيح؟' },
            { 'المعيار': 'الارتكاز الواقعي', 'ما تفحصه': 'هل الادعاءات المحددة صحيحة؟', 'إشارة النجاح / الفشل': 'فحص سريع لـ3–5 حقائق' },
            { 'المعيار': 'الاتساق', 'ما تفحصه': 'هل إعادة التشغيل تُنتج مخرجات مماثلة؟', 'إشارة النجاح / الفشل': 'شغّل نفس الموجّه 3× — هل تختلف المخرجات هيكليًا؟' },
            { 'المعيار': 'كفاءة الرموز', 'ما تفحصه': 'هل طول المخرجات مناسب؟', 'إشارة النجاح / الفشل': 'قِس عدد الرموز مقابل كثافة المعلومات' },
            { 'المعيار': 'الاتفاق بين النماذج', 'ما تفحصه': 'هل يُنتج نموذجان أو ثلاثة نتائج مماثلة؟', 'إشارة النجاح / الفشل': 'أرسل إلى GPT-5.6 وClaude وGemini عبر PromptQuorum — الاتفاق = متين' },
          ],
        },

        callout4: {
          blockquote: 'في تجربة شملت 758 مستشارًا من BCG، حقق مستخدمو الذكاء الاصطناعي في 18 مهمة واقعية ضمن حدود قدراته نتائج قُيّمت جودتها بأكثر من 40٪ فوق المجموعة الضابطة. أما في مهمة اختيرت لتقع خارج تلك الحدود، فقد انخفضت احتمالية توصلهم إلى حلول صحيحة بمقدار 19 نقطة مئوية.',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        beforeAfterExamples: {
          id: 'what-does-prompt-optimization-look-like-in-practice',
          title: 'كيف يبدو تحسين الموجّهات في الممارسة؟',
          content: [
            '**تحسين الموجّهات يظهر في التحوّل من التعليمات الغامضة إلى الدقيقة.** تُظهر أزواج قبل/بعد هذه كل رافعة من الرافعات الست في العمل:',
          ],
          items: [
            '**سيء:** "لخّص هذا المقال." | **مُحسَّن:** "لخّص في 3 نقاط، ≤20 كلمة لكل نقطة. ركّز على التأثير التجاري." | **السبب:** قد يقلّل تنسيق المخرجات التفاوت.',
            '**سيء:** "راجع هذا الكود." | **مُحسَّن:** "راجع بحثًا عن (1) الصحة، (2) الأداء، (3) الأمان. استشهد بأرقام الأسطر. 3 مشاكل كحد أقصى." | **السبب:** قد يقلّل الدور والقيود الملاحظات العامة.',
            '**سيء:** "اجمع هذه المقالات." | **مُحسَّن:** "اجمع فقط من المقالات الـ5 المُقدَّمة. التنسيق: [نتيجة أ]. [نتيجة ب]. [الآثار]. لا تخترع." | **السبب:** قد يقلّل السياق والقيود الهلوسة.',
            '**سيء:** "اكتب بريدًا إلكترونيًا لعميل." | **مُحسَّن:** "اكتب بريدًا لعميل غاضب انتظر أسبوعين للدعم. اعتذر مرةً واحدة، اقترح حلّين، اسأل عن تفضيله. ≤150 كلمة." | **السبب:** التحديد الدقيق + القيود تُحسّن النبرة والملاءمة.',
            '**سيء:** "استخرج بيانات من هذا الجدول." | **مُحسَّن:** "استخرج الأسماء والمبالغ كـJSON: [{\"name\": \"...\", \"amount\": ...}]. بدون شروح." | **السبب:** قد يقلّل التنسيق الصريح النصوص غير المطلوبة.',
            '**سيء:** "هل هذا الكود آمن؟" | **مُحسَّن:** "تحقق من: (1) حقن SQL، (2) إدخال مستخدم غير مُتحقق منه، (3) أسرار مُضمَّنة. أجب بكل نتيجة كـ: [سطر ن: مشكلة]. لا إيجابيات زائفة." | **السبب:** التحديد الدقيق + القيود تُحسّن الدقة.',
          ],
        },

        definitionBoxes: {
          id: 'what-do-these-prompt-optimization-terms-mean',
          title: 'ماذا تعني مصطلحات تحسين الموجّهات؟',
          content: [],
          items: [
            '**تحسين الموجّهات** — العملية التكرارية لمراجعة موجّه لتحسين جودة المخرجات بتشخيص أوضاع الفشل وتغيير متغير واحد (التحديد الدقيق، السياق، الأمثلة، القيود، التنسيق، أو الدور) في كل مرة.',
            '**Few-shot prompting** — تضمين 1–3 أمثلة إدخال/مخرج في الموجّه لتعليم النموذج التنسيق أو النمط المطلوب.',
            '**Chain-of-Thought (CoT)** — طلب من النموذج التفكير خطوةً بخطوة ("فكّر قبل الإجابة") لتحسين الدقة في مسائل المنطق متعددة الخطوات.',
            '**القيد** — محظور أو حد صريح (مثل "لا تستخدم المصطلحات التقنية"، "150 كلمة كحد أقصى"، "استشهد بالمصادر فقط") يُضيّق نطاق المخرجات.',
            '**الرمز (Token)** — أصغر وحدة نص يعالجها النموذج؛ نحو 4 أحرف أو كلمة واحدة بالإنجليزية. يُقاس طول الموجّه وميزانية المخرجات بالرموز.',
            '**الهلوسة** — مخرجات واثقة لكنها خاطئة واقعيًا؛ تحدث حين يخترع النموذج حقائق أو يستشهد بدراسات غير موجودة. تُخفَّف بإضافة سياق الارتكاز والأمثلة والقيود.',
            '**الضبط الدقيق (Fine-tuning)** — إعادة تدريب أوزان النموذج على بيانات مُصنَّفة خاصة بالمجال؛ يُستخدم حين لا يستطيع تحسين الموجّهات تحقيق الجودة المطلوبة. استنفذ التحسين دائمًا قبل الضبط الدقيق.',
            '**RAG (Retrieval-Augmented Generation)** — حقن وثائق مُسترجَعة في سياق الموجّه قبل طلب الإجابة من النموذج. متكامل مع التحسين (RAG يُحسّن المعلومات؛ التحسين يُحسّن كيفية استخدام النموذج لها).',
            '**System prompt** — تعليمة مستمرة تُحدّد دور النموذج وقيوده وسلوكه عبر جميع الأدوار. يتطلب اختبارات تحسين منفصلة عن موجّه المستخدم.',
            '**التحديد الدقيق (Specificity)** — الدقة في تعريف المهمة؛ الانتقال من التعليمات الغامضة ("لخّص") إلى المتطلبات الدقيقة ("اسرد 3 نقاط، ≤20 كلمة لكل نقطة"). أول رافعة وغالبًا الأعلى تأثيرًا للضبط.',
          ],
        },

        modelSpecificTips: {
          id: 'model-specific-optimization-tips',
          title: 'نصائح تحسين خاصة بكل نموذج',
          content: [
            '**الرافعات الست للتحسين تنطبق على جميع النماذج الرئيسية — GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro وMistral Large.** غير أن كل نموذج يستجيب بشكل مختلف لكثافة التعليمات وتحديد التنسيق وتعريف الدور. في ما يلي نصائح الضبط الخاصة بكل نموذج: وهي نقاط انطلاق عامة وليست نتائج مقيسة؛ تحقق من كل منها على مدخلاتك.',
          ],
          items: [
            '**GPT-5.6 (OpenAI):** يستجيب جيدًا لطلبات تنسيق JSON الصريحة وعناوين markdown في system prompts. اتباع التعليمات قوي — القيود الصارمة تُقلّل الإفراط في الشرح.',
            '**Claude Opus 5 (Anthropic):** ممتاز في التعليمات الدقيقة ومتعددة الأجزاء. يتعامل مع system prompts الطويلة والمفصّلة بشكل موثوق. يستفيد من توجيه صريح لطول المخرجات.',
            '**Gemini 3.1 Pro (Google DeepMind):** مناسب لتحليل الوثائق الطويلة (نافذة سياق كبيرة). العناوين الصريحة في الموجّهات تُحسّن اتساق المخرجات المنظمة.',
            '**Mistral Large (Mistral AI):** يستفيد من تعريفات الدور الصريحة وصياغة التعليمات الأكثر وضوحًا.',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'للنماذج المختلفة "شخصيات" مختلفة — Claude صبور مع التعليمات الطويلة، GPT-5.6 يُفضّل القيود الصارمة، Gemini يتعامل مع الوثائق الضخمة. بعد تحسين موجّه، اختبره على جميع النماذج الهدف لأن مقاسًا واحدًا لا يناسب الجميع.' },
          ],
        },

        localLLMExamples: {
          id: 'optimizing-prompts-for-local-llms-ollama-lm-studio',
          title: 'تحسين الموجّهات للنماذج اللغوية المحلية (Ollama، LM Studio)',
          content: [
            '**النماذج المحلية التي تعمل عبر Ollama أو LM Studio تستجيب لنفس الرافعات الست للتحسين، لكن بتفاوتات أكثر صرامة.** قد تتبع النماذج المكمّمة (4-bit، 8-bit) التعليمات بموثوقية أقل، لذا ابدأ بموجّهات بسيطة وصريحة. هذه سيناريوهات توضيحية وليست نتائج اختبار: أسماء النماذج تبيّن إعدادات محلية شائعة فحسب، والإخفاقات الموصوفة محتملة وليست عيوبًا مقيسة في تلك النماذج.',
          ],
          items: [
            '**مثال 1: عدم اتساق مخرجات النموذج المكمَّم (الرافعة: تنسيق المخرجات + القيود)**\n_النموذج:_ LLaMA 3.1 8B عبر Ollama (تكميم 4-bit)\n_موجّه ضعيف:_ "لخّص تذكرة الدعم هذه."\n_وضع فشل محتمل:_ المخرجات تتفاوت بشكل كبير بين التشغيلات.\n_الرافعة المُغيَّرة:_ تنسيق المخرجات + قيد درجة الحرارة.\n_الموجّه المُحسَّن:_ "لخّص تذكرة الدعم هذه في جملتين تمامًا. الجملة 1: مشكلة العميل. الجملة 2: ما جرّبه. لا نص آخر."\n_الإصلاح الإضافي:_ شغّل `ollama run llama3.1` ثم أدخل `/set parameter temperature 0.1`.\n_الهدف (ليس نتيجة مقيسة):_ ملخصات من جملتين؛ تحقق من ذلك على نموذجك وتذاكرك.',
            '**مثال 2: فشل قيد طول السياق في LM Studio (الرافعة: التحديد الدقيق + السياق)**\n_النموذج:_ Mistral Small Instruct عبر LM Studio (تكميم Q4_K_M، سياق 4096 رمز)\n_موجّه ضعيف:_ "حلّل هذه الوثيقة واسرد المخاطر الرئيسية." [وثيقة كاملة بـ3000 كلمة]\n_وضع فشل محتمل:_ النموذج يُقتطع في منتصف التحليل ويُنتج مخرجات غير مكتملة.\n_الرافعة المُغيَّرة:_ التحديد الدقيق — تقليل النطاق ليتناسب مع ميزانية السياق.\n_الموجّه المُحسَّن:_ "أنت محلل مخاطر. اقرأ المقطع التالي (أول 1500 كلمة فقط) واسرد ما يصل إلى 5 مخاطر محددة، كل منها ≤15 كلمة. التنسيق: خطر 1: [الوصف]. خطر 2: [الوصف]. توقف بعد 5."\n_الهدف (ليس نتيجة مقيسة):_ تحليل يتّسع له سياق النموذج؛ تحقق من عدم اقتطاع المخرجات.',
            '**مثال 3: تجاوز التعليمات في النماذج المكمَّمة (الرافعة: القيود)**\n_النموذج:_ Phi-3 Mini عبر Ollama\n_موجّه ضعيف:_ "استخرج جميع التواريخ من هذا النص. أعد JSON فقط."\n_وضع فشل محتمل:_ النموذج يُعيد JSON بالإضافة إلى فقرة شرح. النماذج الصغيرة كثيرًا ما تُضيف تعليقات غير مطلوبة حتى مع تحديد التنسيق.\n_الرافعة المُغيَّرة:_ القيود — محظور صريح.\n_الموجّه المُحسَّن:_ "استخرج جميع التواريخ من النص أدناه. أعد مصفوفة JSON فقط. بدون شرح. بدون تمهيد. بدون تعليق. المخرجات: [\\\"تاريخ1\\\", \\\"تاريخ2\\\", ...]"\n_الهدف (ليس نتيجة مقيسة):_ مخرجات JSON دون نص إضافي؛ تحقق منها بمحلّل JSON لأن النماذج الصغيرة قد تضيف نصًا.',
          ],
        },

        commonMistakes: {
          id: 'the-7-most-common-optimization-mistakes',
          title: 'أكثر 7 أخطاء تحسين شيوعًا',
          content: [
            '**معظم التحسين يفشل بسبب أخطاء في العملية، ليس بسبب سوء فهم مفاهيمي.** إليك المزالق الأكثر شيوعًا وكيفية تجنبها:',
          ],
          items: [
            '**الخطأ 1: تغيير متغيرات متعددة في آنٍ واحد.** تُضيف أمثلة وتُغيّر تنسيق المخرجات وتُعدّل الدور في مراجعة واحدة. حين تتحسن المخرجات، لا تعرف أي تغيير أفاد. التحسين الفعّال يعزل تغييرًا واحدًا لكل تكرار.',
            '**الخطأ 2: التحسين بمدخل واحد فقط.** تختبر مثالًا واحدًا وترى تحسنًا وتُعلن النجاح. في الاستخدام الفعلي، يفشل الموجّه مع مدخلات مختلفة. اختبر على 5–10 أمثلة تمثيلية.',
            '**الخطأ 3: التحسين لنموذج واحد فقط.** تُحسّن لـGPT-5.6 وترى نتائج مثالية، ثم تنشر على Claude. وقد يفشل هناك. اختبر على نموذجين على الأقل (GPT-5.6 وClaude Opus 5)؛ مثاليًا 3.',
            '**الخطأ 4: تجاهل تنسيق المخرجات.** يُنتج الموجّه الحقائق الصحيحة لكن بالبنية الخاطئة. "التنسيق الخاطئ" هو أكثر أوضاع الفشل شيوعًا وأسرعها تصحيحًا. حدّد دائمًا: "أجب بصيغة JSON مع الحقول: [قائمة]".',
            '**الخطأ 5: الإفراط في الموجّهات (Over-prompting).** تُضيف 15 قيدًا و5 أوصاف أدوار و10 أمثلة في موجّه بـ200 رمز. كثرة التعليمات المتزامنة تُربك النموذج. ابدأ بالحد الأدنى، ثم أضف قيودًا فقط عند الضرورة.',
            '**الخطأ 6: الخلط بين التحسين والضبط الدقيق.** التحسين يُحسّن الموجّهات؛ الضبط الدقيق يُدرّب النموذج. إذا جرّبت الرافعات الست وما زال الموجّه يفشل، قد يكون النموذج يفتقر للمعرفة أو القدرة على المهمة — هذه مشكلة ضبط دقيق، ليست مشكلة تحسين.',
            '**الخطأ 7: عدم حفظ الموجّهات المُحسَّنة.** تُحسّن موجّهًا وتنشره، ثم تُعيد تحسين نفس الموجّه بعد 6 أشهر لأن أحدًا لم يحفظ الإصدار الذي نجح. مكتبة الموجّهات — المُصدَرة والموثَّقة والمشتركة — تُحوّل عمل التحسين إلى أصل دائم.',
          ],
        },

        advancedTechniques: {
          id: 'prompt-optimization-techniques-advanced-methods',
          title: 'تقنيات تحسين الموجّهات: الطرق المتقدمة',
          content: [
            '**بعيدًا عن الرافعات الست الرئيسية، تُطبّق تقنيات التحسين المتقدمة أنماطًا متخصصة لتصحيح أوضاع فشل محددة.** تعلّم أي التقنيات تُطبّق وفقًا لتحدي تحسينك:',
          ],
          items: [
            'Few-Shot مقابل Zero-Shot: أضف 1–3 أزواج إدخال/مخرج للموجّه حين لا يُنسّق النموذج المخرجات بشكل صحيح أو يُضيع الأسلوب المطلوب. أمثلة few-shot هي الطريقة الأكثر مباشرةً لتعليم التنسيق.',
            'Chain-of-thought: أدرج "فكّر خطوةً بخطوة قبل الإجابة" لتصحيح إخفاقات الاستدلال متعدد الخطوات. قد تحسّن هذه التقنية الاستدلال متعدد الخطوات، ويعتمد الأثر على النموذج والمهمة.',
            'الموجّهات المقيَّدة (Constrained prompting): أضف محظورات صريحة ("لا تستخدم المصطلحات التقنية"، "لا تخترع أرقامًا"، "لا تكرر المدخلات") لتصحيح إخفاقات النطاق والأسلوب.',
            'Self-consistency: ولّد مخرجات الموجّه 3–5 مرات بشكل مستقل، ثم أعد أكثر الإجابات شيوعًا. هذا يُقلّل الهلوسة في الحقائق منخفضة الاحتمال.',
            'المخرجات المنظمة (Structured output): اطلب JSON أو جداول markdown أو تنسيقات أخرى قابلة للقراءة الآلية لتصحيح الامتثال للتنسيق.',
          ],
        },

        keyTerms: {
          title: 'ما معنى أهم مصطلحات تحسين الموجّهات؟',
          items: [
            '[Few-shot prompting](/ar/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — تضمين عدد صغير من أمثلة الإدخال/المخرج في الموجّه ليستنتج النموذج النمط أو التنسيق المطلوب؛ رافعة "الأمثلة" في إطار الرافعات الست',
            '[Chain-of-Thought (CoT)](/ar/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — مطالبة النموذج بالاستدلال خطوةً بخطوة قبل الإجابة؛ التقنية الأساسية لتصحيح إخفاقات الاستدلال متعدد الخطوات',
            '[Self-consistency](/ar/prompt-engineering/prompt-engineering-glossary#self-consistency) — توليد مخرجات متعددة وإعادة الإجابة الأكثر شيوعًا؛ يُقلّل معدلات الهلوسة في الحقائق منخفضة الاحتمال',
            '[Zero-shot prompting](/ar/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — الموجّهات دون أمثلة؛ خط الأساس الذي يُقاس عليه تحسين few-shot',
            '[الهلوسة (Hallucination)](/ar/prompt-engineering/prompt-engineering-glossary#hallucination) — مخرجات تبدو واثقة لكنها غير صحيحة واقعيًا؛ أحد أوضاع الفشل الرئيسية التي يستهدفها التحسين',
            '[Fine-tuning](/ar/prompt-engineering/prompt-engineering-glossary#fine-tuning) — إعادة تدريب أوزان النموذج على بيانات خاصة بالمجال؛ البديل لتحسين الموجّهات عند بلوغ سقف جودة صعب',
            '[RAG (Retrieval-Augmented Generation)](/ar/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — حقن مستندات مسترجَعة في سياق الموجّه؛ مكمِّل لتحسين الموجّهات (RAG يُحسّن المعلومات؛ التحسين يُحسّن طريقة استخدام النموذج لها)',
            '[System prompt](/ar/prompt-engineering/prompt-engineering-glossary#system-prompt) — تعليمة دائمة تُحدّد دور النموذج وقيوده وسلوكه عبر جميع الجولات؛ تتطلب اختبار تحسين مستقلًا',
            '[Temperature](/ar/prompt-engineering/prompt-engineering-glossary#temperature) — معامل فك ترميز يتحكم في عشوائية المخرجات؛ خفض القيمة يُحسّن الاتساق عبر اختبارات التحسين',
            '[تسلسل الموجّهات (Prompt chaining)](/ar/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — تقسيم المهام المعقدة إلى سلسلة من موجّهات أصغر؛ يستفيد كل موجّه فرعي من تحسين مستقل',
          ],
        },

        promptLibrary: {
          id: 'saving-optimized-prompts-to-a-library',
          title: 'حفظ الموجّهات المُحسَّنة في مكتبة',
          content: [
            '**الموجّه المُحسَّن أصل دائم.** بمجرد اختبار موجّه على 3 نماذج وتأكيد عمله على 5–10 مدخلات تمثيلية وتوثيق ما تفعله كل رافعة — احفظه. تُتيح لك مكتبة الموجّهات إعادة استخدام الموجّهات المُحسَّنة عبر المشاريع ومشاركتها مع فريقك وتحسينها بمرور الوقت.',
            'ما تحفظه مع كل موجّه: النص النهائي للموجّه، والرافعة التي تغيّرت، ووضع الفشل الذي صحّحته، والنماذج المُختبَرة ونتائج النجاح/الفشل على مدخلاتك التمثيلية. هذا التوثيق يُفرّق مكتبة الموجّهات عن مجلد ملفات نصية.',
          ],
        },

        regionalCompliance: {
          id: 'prompt-optimization-and-regulatory-compliance',
          title: 'تحسين الموجّهات والامتثال التنظيمي',
          content: [
            'في البيئات المنظَّمة، يمكن لمكتبة موجّهات ذات إصدارات وسجلات اختبار أن تدعم توثيقك، لكنها وحدها لا تجعل أي نظام متوافقًا مع قانون الذكاء الاصطناعي الأوروبي أو غيره من القواعد.',
            'إرشادات الذكاء الاصطناعي للأعمال في اليابان، الصادرة عن METI ووزارة الشؤون الداخلية والاتصالات، غير ملزمة. هذا لا يُعد استشارة قانونية: استشر مختصًا لمعرفة الالتزامات التي تنطبق عليك.',
          ],
        },

        multilingualReach: {
          id: 'prompt-optimization-across-languages-and-regions',
          title: 'تحسين الموجّهات عبر اللغات والمناطق',
          content: [
            '**تحسين الموجّهات تخصص عالمي — الرافعات الست وعملية الـ6 خطوات تنطبق بغض النظر عن لغة كتابة موجّهك.** غير أن مصطلحات البحث المحلية تختلف بشكل ملحوظ، والنماذج الرئيسية تتباين حسب المنطقة.',
          ],
          columns: ['اللغة / المنطقة', 'المصطلح المحلي', 'النموذج الرئيسي', 'ملاحظة إقليمية'],
          rows: [
            { 'اللغة / المنطقة': 'الإنجليزية — الولايات المتحدة', 'المصطلح المحلي': 'prompt optimization', 'النموذج الرئيسي': 'GPT-5.6، Claude Opus 5', 'ملاحظة إقليمية': 'التهجئة الأمريكية (-ize)' },
            { 'اللغة / المنطقة': 'الإنجليزية — المملكة المتحدة / أستراليا', 'المصطلح المحلي': 'prompt optimisation', 'النموذج الرئيسي': 'GPT-5.6، Claude Opus 5', 'ملاحظة إقليمية': 'التهجئة البريطانية (-ise)' },
            { 'اللغة / المنطقة': 'الألمانية — DE / AT / CH', 'المصطلح المحلي': 'Prompt-Optimierung', 'النموذج الرئيسي': 'GPT-5.6، Claude Opus 5', 'ملاحظة إقليمية': 'قانون الذكاء الاصطناعي الأوروبي مهم لشركات DACH' },
            { 'اللغة / المنطقة': 'الفرنسية — FR / CA', 'المصطلح المحلي': 'optimisation de prompt', 'النموذج الرئيسي': 'GPT-5.6، Claude Opus 5', 'ملاحظة إقليمية': 'أسلوب رسمي' },
            { 'اللغة / المنطقة': 'الإسبانية — ES / LATAM', 'المصطلح المحلي': 'optimización de prompts', 'النموذج الرئيسي': 'GPT-5.6', 'ملاحظة إقليمية': 'مصطلح بالإسبانية المحايدة' },
            { 'اللغة / المنطقة': 'البرتغالية — BR', 'المصطلح المحلي': 'otimização de prompts', 'النموذج الرئيسي': 'GPT-5.6', 'ملاحظة إقليمية': 'مصطلح برتغالي برازيلي' },
            { 'اللغة / المنطقة': 'اليابانية — JP', 'المصطلح المحلي': 'プロンプト最適化', 'النموذج الرئيسي': 'GPT-5.6 (دعم ياباني قوي)', 'ملاحظة إقليمية': 'تحقق من عدد الرموز لكل نموذج' },
            { 'اللغة / المنطقة': 'الصينية المبسطة — CN', 'المصطلح المحلي': '提示词优化', 'النموذج الرئيسي': 'DeepSeek، Qwen 3', 'ملاحظة إقليمية': 'أحرف مبسّطة' },
            { 'اللغة / المنطقة': 'الكورية — KR', 'المصطلح المحلي': '프롬프트 최적화', 'النموذج الرئيسي': 'GPT-5.6، Claude Opus 5', 'ملاحظة إقليمية': 'تحقق من عدد الرموز لكل نموذج' },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            'ما هندسة الموجّهات؟ — التعريف المحوري والعناصر الأساسية لتصميم الموجّهات',
            '5 عناصر بناء يحتاجها كل موجّه — العناصر الهيكلية التي تُحسّنها',
            'Chain-of-Thought Prompting — تقنية التفكير خطوةً بخطوة لتحسين الدقة',
            'Zero-Shot مقابل Few-Shot Prompting — متى تُضيف أمثلة كرافعة تحسين',
            'بناء مكتبة موجّهات توفّر ساعات — حفظ الموجّهات المُحسَّنة كأصول للفريق',
          ],
        },

        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة: تحسين الموجّهات',
          faqs: [
            { q: 'ما تحسين الموجّهات؟', a: 'تحسين الموجّهات هو العملية التكرارية لمراجعة موجّه موجود لتحسين جودة مخرجات الذكاء الاصطناعي لمهمة محددة. يتضمن تحديد وضع فشل (تنسيق خاطئ، هلوسة، مخرجات غامضة)، وتغيير متغير واحد (التحديد الدقيق، السياق، الأمثلة، القيود، تنسيق المخرجات، أو الدور)، واختبار النتيجة على نماذج مثل GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro.' },
            { q: 'ما الفرق بين تحسين الموجّهات وهندسة الموجّهات؟', a: 'هندسة الموجّهات هي تخصص تصميم بنية الموجّه من الصفر. تحسين الموجّهات هو العملية الفرعية التكرارية لتحسين موجّه مكتوب بالفعل بتشخيص أوضاع الفشل وتطبيق تغييرات موجَّهة.' },
            { q: 'كم تكرارًا تحتاج لتحسين موجّه؟', a: 'لمعظم المهام، تكفي 2–4 تكرارات موجَّهة للانتقال من موجّه فاشل إلى موجّه موثوق. تتراجع العوائد بعد 5–6 تكرارات.' },
            { q: 'أي رافعة أبدأ بتغييرها؟', a: 'ابدأ بتنسيق المخرجات. عدم الامتثال للتنسيق هو أكثر أوضاع الفشل شيوعًا وأسرعها تصحيحًا. حدّد البنية الدقيقة التي تريدها، ثم عالج مشكلات أخرى في تكرارات لاحقة.' },
            { q: 'هل تعمل تحسين الموجّهات على جميع نماذج الذكاء الاصطناعي؟', a: 'نعم، لكن مع تعديلات خاصة بكل نموذج. الرافعات الست الرئيسية تنطبق على GPT-5.6 وClaude Opus 5 وGemini 3.1 Pro وMistral Large. غير أن كل نموذج يستجيب بشكل مختلف لكثافة التعليمات.' },
            { q: 'ما أكثر خطأ شائع في تحسين الموجّهات؟', a: 'تغيير متغيرات متعددة في آنٍ واحد. إذا أضفت أمثلة وغيّرت تنسيق المخرجات وأضفت تعليمة دور في نفس المراجعة، لا يمكنك تحديد أي تغيير أفاد.' },
            { q: 'هل يمكن لتحسين الموجّهات تقليل هلوسة الذكاء الاصطناعي؟', a: 'نعم، بالتقنيات الصحيحة. إضافة سياق الارتكاز وأمثلة few-shot وقيود صريحة قد تساعد على تقليل الهلوسة. self-consistency prompting يُقلّل الهلوسة أكثر.' },
            { q: 'متى يجب أن أستخدم الضبط الدقيق بدلًا من تحسين الموجّهات؟', a: 'استخدم الضبط الدقيق حين يصل تحسين الموجّهات إلى سقفه. تحسين الموجّهات أسرع وأرخص وينبغي استنفاده دائمًا أولًا.' },
            { q: 'كيف أعرف متى يكون الموجّه مُحسَّنًا بشكل كافٍ؟', a: 'موجّه مُحسَّن بما يكفي حين: (1) يُنتج مخرجات صحيحة على 4–5 مدخلات تمثيلية، (2) يُنتج مخرجات متسقة عند إعادة التشغيل، (3) يعمل على نموذجين على الأقل، و(4) يمتثل لمواصفات التنسيق دون معالجة لاحقة.' },
            { q: 'هل ينطبق تحسين الموجّهات على موجّهات الصور؟', a: 'تنطبق المبادئ — التحديد الدقيق والقيود والأمثلة رافعات صالحة لنماذج الصور. عملية التحسين (خط أساسي → تشخيص → تغيير متغير → اختبار) متطابقة.' },
            { q: 'ما تحسين الموجّهات التلقائي؟', a: 'يستخدم نموذج ذكاء اصطناعي ثانٍ لإعادة كتابة الموجّهات وتحسينها. أدوات مثل DSPy وTextGrad وAPE تولّد موجّهات مرشحة وتُقيّمها وتختار الأفضل.' },
            { q: 'ما الفرق بين تحسين الموجّهات وضبط الموجّهات (prompt tuning)؟', a: 'يُحسّن تحسين الموجّهات الموجّهات النصية دون تعديل أوزان النموذج. ضبط الموجّهات يتعلّم متجهات موجّهات ناعمة مستمرة بنزول التدرج.' },
            { q: 'ما أفضل أدوات تحسين الموجّهات؟', a: 'لا توجد أداة واحدة هي الأفضل. من الأمثلة: PromptQuorum (من ناشر هذا الموقع؛ يُرسل موجّهًا لـGPT-5.6 وClaude وGemini في آنٍ واحد)، وDSPy (تحسين برمجي)، وLangSmith (إصدارات واختبار A/B)، وPromptfoo (CLI مفتوح المصدر)، وPromptLayer (الإصدارات والتحليلات).' },
            { q: 'كيف أُحسّن system prompt؟', a: 'يتبع نفس العملية من 6 خطوات مع قيدين إضافيين: system prompts تستمر عبر جميع الأدوار، والطول يهم — system prompts الطويلة جدًا قد تقلّل اتباع التعليمات في الأدوار اللاحقة.' },
            { q: 'هل يمكن استخدام ChatGPT لتحسين الموجّهات؟', a: 'نعم. يمكنك طلب من GPT-5.6 إعادة كتابة موجّه بوصف وضع الفشل. هذا meta-prompting. اختبر دائمًا الموجّه المُعاد كتابته بمدخلات حقيقية.' },
            { q: 'ما تحسين الموجّهات في التعلم الآلي؟', a: 'يشير إلى تقنيات تُحسّن الموجّهات في خط الأنابيب — دون إعادة تدريب النموذج. يشمل تحسين الموجّهات المتقطعة وضبط الموجّهات المستمرة.' },
            { q: 'بكم يُحسّن تحسين الموجّهات جودة مخرجات الذكاء الاصطناعي؟', a: 'يعتمد ذلك على النموذج والمهمة والموجّه الأصلي، ولذلك لا توجد نسبة عامة. قِس ذلك بنفسك: شغّل الموجّه القديم والجديد على المدخلات نفسها وقارن معدلات النجاح.' },
            { q: 'هل يجب تحسين الموجّهات لكل نموذج بشكل منفصل؟', a: 'ابدأ بالتحسين المحايد للنموذج. الموجّه الجيد البنية يعمل عادةً بشكل جيد على النماذج الثلاثة الرئيسية. أضف متغيرات خاصة بالنموذج فقط إذا كشفت الاختبارات عن نتائج متباينة.' },
            { q: 'ما الفرق بين تحسين الموجّهات وRAG؟', a: 'تحسين الموجّهات يُحسّن التعليمات والبنية. RAG يُحسّن المعلومات المتاحة باسترجاع وثائق ذات صلة. الاثنان متكاملان: RAG يحل مشكلة المعلومات؛ التحسين يحل مشكلة المعالجة.' },
            { q: 'كيف أُحسّن الموجّهات خصيصًا لـGPT-5.6؟', a: 'تستحق أربع خطوات تحسين التجربة مع GPT-5.6: (1) طلبات تنسيق JSON صريحة في موجّه النظام — للمخرجات المنظَّمة، حدّد المخطط بدقة. (2) عناوين Markdown في موجّهات النظام — استخدم أقسام H2 (## الدور، ## المهمة، ## تنسيق المخرجات) لفصل الاهتمامات. (3) قيود صارمة — دون حدّ لعدد الكلمات أو الطول قد تأتي الإجابات أطول من المطلوب؛ أضف "أجب في ≤150 كلمة" أو "أعد كائن JSON فقط، دون شرح". (4) صياغة استخدام الأدوات — للمهام التي تتضمن الاسترجاع أو الحساب، صُغ الموجّه كتعريف دالة بدلًا من تعليمة نثرية عند استخدام Assistants API مع تفعيل الأدوات.' },
          ],
        },

        sources: {
          title: 'المصادر',
          items: [
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608) — يُصنّف 58 تقنية موجّهات نصية',
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — الأساس الأكاديمي للتفكير خطوةً بخطوة كرافعة تحسين',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — دليل OpenAI لهندسة الموجّهات',
            '[Brown et al., 2020. "Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165) — الورقة التأسيسية التي تُثبت الأمثلة كرافعة تحسين عالية التأثير',
          ],
        },

      },
    },
    fr: {
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-fr.webp',
      title: 'Fondamentaux de l\'optimisation des prompts',
      seoTitle: 'Optimiser les prompts 2026: 6 leviers, 6 étapes pratiques',
      intro: 'L\'optimisation de prompt est le processus itératif de révision d\'un prompt pour améliorer la qualité, la cohérence ou la précision de la sortie IA. Ce guide complet enseigne les techniques et les fondamentaux de l\'optimisation de prompt : les 6 leviers fondamentaux, un processus d\'optimisation en 6 étapes, des exemples avant/après pour GPT-5.6, Claude et Gemini, et les 7 erreurs les plus courantes à éviter lors de l\'optimisation de prompts.',
      metaDescription: 'Optimiser un prompt avec 6 leviers et 6 étapes. Exemples avant/après pour GPT-5.6, Claude et Gemini, et 7 erreurs courantes à éviter.',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '14 min de lecture',
      educationalLevel: 'Débutant',
      primaryTerm: 'Optimisation de Prompt',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: 'Fondamentaux de l\'optimisation des prompts',
        description: 'Apprenez les techniques et les meilleures pratiques de l\'optimisation de prompt : 6 leviers fondamentaux, processus en 6 étapes, exemples avant/après. Comment optimiser les prompts IA pour GPT-5.6, Claude, Gemini — fondamentaux pour tous les modèles.',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['optimisation de prompt', 'techniques d\'optimisation de prompt', 'comment optimiser les prompts', 'améliorer les prompts IA', 'fondamentaux de l\'ingénierie de prompt', 'optimisation LLM', 'GPT-5.6', 'Claude', 'Gemini', 'prompting few-shot', 'prompting chain-of-thought'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'Optimisation de prompt' },
          { '@type': 'Thing', name: 'Prompting few-shot' },
          { '@type': 'Thing', name: 'Prompting chain-of-thought' },
          { '@type': 'Thing', name: 'Qualité de sortie LLM' },
          { '@type': 'Thing', name: 'Ingénierie de prompt IA' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'fr'),
        url: 'https://www.promptquorum.com/fr/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'fr',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Les 6 leviers d\'optimisation de prompt',
        description: 'Les six variables indépendantes qui déterminent la qualité de la sortie IA — chacune peut être ajustée pour corriger un mode d\'échec spécifique du prompt.',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Spécificité', description: 'Comment la tâche est définie précisément. Démarche d\'optimisation : réécrire l\'objectif vague comme une instruction exacte. Exemple : \'Résumer\' → \'Lister 3 éléments clés en ≤20 mots chacun\'.' },
          { '@type': 'ListItem', position: 2, name: 'Contexte', description: 'Information dont dispose le modèle. Démarche d\'optimisation : ajouter contexte, audience et contraintes. Exemple : \'Écrire un rapport\' → \'Écrire un rapport pour un directeur financier non technique\'.' },
          { '@type': 'ListItem', position: 3, name: 'Exemples', description: 'Compréhension du modèle du format de sortie désiré. Démarche d\'optimisation : ajouter 1–3 paires d\'entrée/sortie (few-shot). Montrer le format exact une fois.' },
          { '@type': 'ListItem', position: 4, name: 'Contraintes', description: 'Limites de ce que le modèle peut produire. Démarche d\'optimisation : ajouter des interdictions explicites. Exemple : \'Ne pas utiliser de jargon. Maximum 150 mots\'.' },
          { '@type': 'ListItem', position: 5, name: 'Format de sortie', description: 'Structure de la réponse. Démarche d\'optimisation : spécifier le format explicitement. Exemple : \'Répondre en JSON : {title, summary, tags[]}\'.' },
          { '@type': 'ListItem', position: 6, name: 'Rôle/persona', description: 'Niveau d\'expertise que le modèle adopte. Démarche d\'optimisation : ajouter un rôle spécifique. Exemple : \'Agir en tant que data analyst senior dans une entreprise B2B SaaS\'.' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Comment optimiser un prompt en 6 étapes',
        description: 'Un processus systématique en 6 étapes pour diagnostiquer les défaillances des prompts et améliorer la qualité de la sortie IA sur GPT-5.6, Claude et Gemini.',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Établir une base de référence', text: 'Exécuter le prompt actuel 3 fois sur des entrées représentatives. Documenter le mode d\'échec : mauvais format, hallucination, sortie vague ou réponse hors sujet.' },
          { '@type': 'HowToStep', position: 2, name: 'Identifier le levier racine', text: 'Mapper la défaillance à l\'un des 6 leviers : spécificité, contexte, exemples, contraintes, format de sortie ou rôle/persona.' },
          { '@type': 'HowToStep', position: 3, name: 'Changer une seule variable', text: 'Faire une seule modification ciblée au levier identifié. Ne pas modifier plusieurs variables simultanément — impossible de diagnostiquer l\'amélioration si plusieurs choses changent.' },
          { '@type': 'HowToStep', position: 4, name: 'Tester sur plusieurs modèles', text: 'Exécuter le prompt révisé sur GPT-5.6, Claude Opus 5 et Gemini 3.1 Pro. Un prompt qui fonctionne sur un seul modèle est fragile.' },
          { '@type': 'HowToStep', position: 5, name: 'Mesurer par rapport aux critères de qualité', text: 'Vérifier la précision des tâches, la conformité du format, l\'ancrage factuel, la cohérence sur 3 ré-exécutions et l\'accord entre les modèles.' },
          { '@type': 'HowToStep', position: 6, name: 'Sauvegarder dans une bibliothèque de prompts', text: 'Documenter ce qui a changé et pourquoi cela a fonctionné. Contrôle de version du prompt optimisé. Un prompt testé est un atout réutilisable durable.' },
        ],
      },
      tableSchema: {
        '@context': 'https://schema.org',
        '@type': 'Table',
        name: 'Critères de mesure de la qualité des prompts',
        about: 'Six critères pour mesurer si une itération d\'optimisation de prompt a réussi : précision des tâches, conformité du format, ancrage factuel, cohérence, efficacité des tokens et accord entre les modèles.',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            'name': 'Qu\'est-ce que l\'optimisation de prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'optimisation de prompt est le processus itératif de révision d\'un prompt existant pour améliorer la qualité de la sortie IA pour une tâche spécifique. Elle implique l\'identification d\'un mode d\'échec (format incorrect, hallucination, sortie vague), la modification d\'une variable (spécificité, contexte, exemples, contraintes, format de sortie ou rôle) et le test du résultat sur plusieurs modèles comme GPT-5.6, Claude Opus 5 et Gemini 3.1 Pro.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quelle est la différence entre l\'optimisation de prompt et l\'ingénierie de prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'ingénierie de prompt est la discipline de conception d\'une structure de prompt à partir de zéro en utilisant des éléments constitutifs comme l\'objectif, le contexte et le format de sortie. L\'optimisation de prompt est le sous-processus itératif d\'amélioration d\'un prompt déjà écrit en diagnostiquant les modes d\'échec et en appliquant des modifications ciblées. Vous avez besoin de l\'ingénierie de prompt pour créer un point de départ ; vous utilisez l\'optimisation de prompt pour l\'affiner.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Combien d\'itérations faut-il pour optimiser un prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Pour la plupart des tâches, 2–4 itérations ciblées sont suffisantes pour passer d\'un prompt défaillant à un prompt fiable. Chaque itération doit modifier une variable et être testée sur 3–5 entrées représentatives. Les rendements décroissants s\'installent après 5–6 itérations — si un prompt ne s\'est pas stabilisé à ce moment-là, la définition de la tâche elle-même peut nécessiter une révision.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quel levier devrais-je modifier en premier lors de l\'optimisation d\'un prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Commencez par le format de sortie. La non-conformité du format — recevoir un paragraphe quand vous vouliez un tableau, ou du texte brut quand vous aviez besoin de JSON — est le mode d\'échec le plus courant et le plus rapide à corriger. Spécifiez la structure exacte que vous souhaitez, puis abordez d\'autres problèmes (précision, ton, portée) dans les itérations suivantes.',
            },
          },
          {
            '@type': 'Question',
            'name': 'L\'optimisation de prompt fonctionne-t-elle sur tous les modèles d\'IA ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, mais avec des ajustements spécifiques au modèle. Les six leviers d\'optimisation fondamentaux (spécificité, contexte, exemples, contraintes, format de sortie, rôle) s\'appliquent à GPT-5.6, Claude Opus 5, Gemini 3.1 Pro et Mistral Large. Cependant, chaque modèle répond différemment à la densité d\'instructions. Testez chaque modèle que vous utilisez.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quelle est l\'erreur d\'optimisation de prompt la plus courante ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Modifier plusieurs variables simultanément. Si vous ajoutez des exemples, modifiez le format de sortie et ajoutez une instruction de rôle dans la même révision, vous ne pouvez pas déterminer quel changement a amélioré (ou dégradé) la sortie. L\'optimisation efficace modifie une variable par itération.',
            },
          },
          {
            '@type': 'Question',
            'name': 'L\'optimisation de prompt peut-elle réduire les hallucinations de l\'IA ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, avec les bonnes techniques. Ajouter un contexte d\'ancrage (« Basez votre réponse uniquement sur le document suivant »), des exemples few-shot avec des sorties factuellement correctes et des contraintes explicites (« N\'invente pas de chiffres — utilise uniquement les données du texte fourni ») peuvent aider à réduire les hallucinations. Le prompting auto-cohérent — générer plusieurs sorties et retourner la plus courante — réduit davantage les fabrications de faible probabilité.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quand devrais-je utiliser le fine-tuning plutôt que l\'optimisation de prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Utilisez le fine-tuning lorsque l\'optimisation de prompt atteint un plafond — généralement lorsque le comportement requis est hautement spécifique au domaine, nécessite une voix stylistique cohérente sur des milliers de sorties ou dépend de connaissances absentes de l\'entraînement du modèle de base. L\'optimisation de prompt est plus rapide et moins coûteuse et devrait toujours être épuisée avant le fine-tuning.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Comment savoir si un prompt est entièrement optimisé ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Un prompt est suffisamment optimisé quand il : (1) produit une sortie correcte sur 4–5 entrées représentatives, (2) produit une sortie cohérente lors de ré-exécutions, (3) fonctionne sur au moins deux modèles (par ex., GPT-5.6 et Claude) et (4) respecte la spécification de format sans post-traitement. Les prompts parfaits n\'existent pas — « optimisé » signifie suffisamment fiable pour le cas d\'usage.',
            },
          },
          {
            '@type': 'Question',
            'name': 'L\'optimisation de prompt s\'applique-t-elle aux prompts d\'images (text-to-image) ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Les principes s\'appliquent — spécificité, contraintes et exemples (images de référence) sont tous des leviers valides pour les modèles d\'image comme DALL-E 3 et Stable Diffusion. Cependant, la mécanique diffère : les modèles d\'image répondent aux modificateurs de style, aux spécifications de rapport d\'aspect et aux prompts négatifs comme contraintes. Le processus d\'optimisation (baseline → diagnostiquer → changer une variable → tester) est identique.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Comment fonctionne l\'optimisation automatique de prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'optimisation automatique de prompt utilise un deuxième modèle IA (ou le même modèle dans une boucle de meta-prompting) pour réécrire et améliorer les prompts sans intervention humaine. Des outils comme DSPy (Stanford), TextGrad et APE (Automatic Prompt Engineer) génèrent des prompts candidats, les évaluent par rapport à une métrique (précision, conformité du format, évaluation utilisateur) et sélectionnent la meilleure variante. L\'optimisation manuelle est plus rapide pour les tâches bien comprises ; l\'optimisation automatique s\'adapter mieux si vous avez des données d\'évaluation annotées et devez tester des centaines de variantes.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Comment l\'optimisation de prompt diffère-t-elle du réglage fin de prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'optimisation de prompt améliore les prompts texte discrets — les instructions que vous écrivez en langage naturel — sans modifier les poids du modèle. Le réglage fin de prompt (introduit par Lester et al., 2021) apprend des vecteurs de soft-prompt continus qui sont préfacés à l\'entrée et entraînés par descente de gradient aux côtés ou à la place du modèle. Le réglage fin de prompt nécessite de la puissance de calcul et des données d\'entraînement ; l\'optimisation de prompt n\'a besoin d\'aucun des deux. Pour la plupart des cas d\'utilisation en production, vous optimisez d\'abord les prompts discrets et ne considérez le réglage fin de prompt que lorsqu\'un plafond de qualité difficile est atteint.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quels sont les meilleurs outils pour l\'optimisation de prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Il n\'existe pas un seul meilleur outil. Exemples : PromptQuorum (conçu par l\'éditeur de ce site ; envoyez un prompt à GPT-5.6, Claude et Gemini simultanément pour l\'analyse comparative), DSPy (optimisation de prompt programmée avec sélection basée sur des métriques automatiques), LangSmith (versioning de prompt, tests A/B et traçage pour les pipelines LangChain), Promptfoo (CLI open-source pour exécuter les prompts contre des cas de test et des tests de régression) et PromptLayer (versioning de prompt et analytique). Pour l\'itération manuelle, un tableur enregistrant la version du prompt, l\'entrée, la sortie et Réussi/Échoué par rapport aux critères suffit pour la plupart des tâches d\'optimisation simples.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Comment optimiser un prompt système ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'optimisation du prompt système suit le même processus en 6 étapes que l\'optimisation du prompt utilisateur avec deux contraintes supplémentaires. Premièrement, les prompts système persistent sur tous les tours — une instruction trop spécifique peut dégrader les performances sur des entrées que vous n\'aviez pas prévues. Testez sur 5–10 entrées représentatives diverses, pas seulement une. Deuxièmement, la longueur du prompt système est importante : les prompts système très longs peuvent réduire le suivi des instructions dans les tours utilisateur ultérieurs sur certains modèles. Optimisez pour la concision : chaque instruction du prompt système doit être nécessaire. Supprimez toute instruction qui ne change pas la sortie sur votre ensemble de test.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Puis-je utiliser ChatGPT pour l\'optimisation de prompt ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui. Vous pouvez demander à GPT-5.6 de réécrire un prompt en fournissant le prompt défaillant et une description du mode d\'échec : « Ce prompt produit des sorties trop vagues. Réécrivez-le pour exiger une réponse structurée en 3 points. » C\'est une forme de meta-prompting — utiliser le modèle pour améliorer ses propres entrées. La limitation est que GPT-5.6 optimisera pour ce qu\'il considère comme meilleur, pas nécessairement pour ce que vos critères d\'évaluation spécifiques exigent. Testez toujours le prompt réécrit sur des entrées réelles et mesurez par rapport à vos critères réels de Réussi/Échoué avant d\'accepter la révision.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Que signifie l\'optimisation de prompt dans le contexte du machine learning ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Dans le contexte du machine learning, l\'optimisation de prompt fait référence à des techniques qui améliorent les prompts envoyés à un modèle de langage dans le cadre d\'un pipeline — sans réentraîner le modèle lui-même. Cela inclut l\'optimisation de prompt discrète (réécrire les instructions en langage naturel) et l\'optimisation continue de prompt (apprendre les embeddings de soft-tokens par descente de gradient). Dans les systèmes de production ML, l\'optimisation de prompt est généralement partie intégrante du pipeline d\'inférence : le prompt est traité comme un hyperparamètre optimisé par rapport à un ensemble d\'évaluation réservé, similaire à la sélection du taux d\'apprentissage lors de l\'entraînement du modèle.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Combien l\'optimisation de prompt améliore-t-elle la qualité de la sortie ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Cela dépend du modèle, de la tâche et du prompt de départ ; il n\'existe donc pas de pourcentage général. Mesurez-le vous-même : testez l\'ancien et le nouveau prompt sur les mêmes entrées et comparez les taux de réussite.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Dois-je optimiser les prompts séparément pour chaque modèle ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Commencez par une optimisation indépendante du modèle — appliquez les 6 leviers (spécificité, contexte, exemples, contraintes, format de sortie, rôle) et testez sur GPT-5.6, Claude Opus 5 et Gemini 3.1 Pro. Un prompt bien structuré fonctionne généralement bien sur tous les trois. N\'ajoutez des variantes spécifiques au modèle que si les tests cross-model montrent des résultats divergents. Ajustements par modèle à tester : Claude gère bien les prompts système multi-parties plus longs ; GPT-5.6 bénéficie des demandes de format JSON explicites ; Gemini 3.1 Pro bénéficie des en-têtes de section explicites dans les tâches avec de longs documents. Documentez les variantes spécifiques au modèle dans une bibliothèque de prompts avec des notes de version.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Quelle est la différence entre l\'optimisation de prompt et RAG ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'optimisation de prompt améliore les instructions et la structure d\'un prompt. La génération augmentée par récupération (RAG) améliore les informations disponibles pour le modèle au moment de l\'inférence en récupérant des documents pertinents et en les insérant dans le contexte du prompt. Les deux sont complémentaires : RAG résout le problème que le modèle n\'a pas les bonnes données ; l\'optimisation de prompt résout le problème que le modèle ne traite pas correctement ces données. Un pipeline RAG entièrement optimisé nécessite à la fois une bonne récupération (les bons documents sont récupérés) et un prompt bien optimisé (le modèle est instruitd\'utiliser uniquement le contenu récupéré, de citer les sources et de formater correctement la réponse).',
            },
          },
          {
            '@type': 'Question',
            'name': 'Comment optimiser les prompts spécifiquement pour GPT-5.6 ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Quatre mouvements d\'optimisation méritent d\'être testés avec GPT-5.6 : (1) Demandes explicites de format JSON dans le prompt système — pour une sortie structurée, définissez précisément le schéma. (2) En-têtes Markdown dans les prompts système — utilisez les sections H2 (## Rôle, ## Tâche, ## Format de sortie) pour séparer les préoccupations. (3) Contraintes strictes — sans limite de mots ou de longueur, les réponses peuvent être plus longues que nécessaire ; ajoutez « répondez en ≤150 mots » ou « retournez uniquement l\'objet JSON, pas d\'explication ». (4) Encadrage d\'utilisation d\'outils — pour les tâches impliquant la récupération ou le calcul, formulez le prompt comme une définition de fonction plutôt qu\'une instruction en prose si vous utilisez l\'API Assistants avec les outils activés.',
            },
          },
        ],
      },
      toc: [
        { label: 'Qu\'est-ce que l\'optimisation de prompt ?', anchor: 'qu-est-ce-que-l-optimisation-de-prompt' },
        { label: 'Optimisation de prompt vs ingénierie de prompt', anchor: 'optimisation-de-prompt-vs-ingenierie-de-prompt' },
        { label: 'Pourquoi l\'optimisation de prompt est importante', anchor: 'pourquoi-l-optimisation-de-prompt-est-importante' },
        { label: 'Les 6 leviers d\'optimisation', anchor: 'les-6-leviers-d-optimisation' },
        { label: 'Optimiser les prompts pour les LLM locaux', anchor: 'optimiser-les-prompts-pour-les-llm-locaux-ollama-lm-studio' },
        { label: 'Les 7 erreurs d\'optimisation les plus courantes', anchor: 'les-7-erreurs-d-optimisation-les-plus-courantes' },
        { label: 'Que signifient ces termes d\'optimisation de prompt ?', anchor: 'que-signifient-ces-termes-d-optimisation-de-prompt' },
        { label: 'Lectures connexes', anchor: 'lectures-connexes' },
        { label: 'FAQ', anchor: 'faq-optimisation-de-prompt' },
      ],
      sections: {
        tldr: {
          title: 'Points clés à retenir',
          isTldr: true,
          items: [
            'Optimisation de prompt = révision itérative d\'un prompt existant pour améliorer la qualité de la sortie',
            'Les 6 leviers : **spécificité**, **contexte**, **exemples**, **contraintes**, **format de sortie**, **rôle/persona**',
            'Changer un levier à la fois — isoler les variables, c\'est comme cela qu\'on trouve ce qui fonctionne vraiment',
            'Tester sur ≥2 modèles (GPT-5.6, Claude, Gemini) pour confirmer que l\'amélioration est agnostique au modèle',
            'Mode d\'échec courant : changer trop de variables à la fois rend le diagnostic impossible',
            'Un prompt testé et optimisé est un atout durable — l\'enregistrer dans une bibliothèque de prompts',
          ],
        },

        localLLMTldr: {
          title: 'Points clés pour les utilisateurs de LLM locaux',
          isTldr: true,
          items: [
            'L\'optimisation de prompt est plus critique pour les modèles locaux — les modèles quantifiés (4-bit, 8-bit) peuvent être plus sensibles aux instructions ambiguës',
            'Ollama et LM Studio supportent les mêmes 6 leviers d\'optimisation ; la différence est que les modèles plus petits (LLaMA 3.1 8B, Mistral Small) demandent souvent des contraintes plus explicites et des entrées plus courtes',
            'Les modèles quantifiés peuvent suivre les instructions moins fidèlement — utiliser des prompts plus simples et plus prescriptifs avec un format de sortie explicite et moins de contraintes simultanées',
            'Les paramètres de température diffèrent : Ollama utilise par défaut 0,8 (créativité plus élevée, cohérence réduite) ; définir la température sur 0,1–0,3 pour les tâches de sortie structurée nécessitant la cohérence sur plusieurs exécutions',
            'Pour estimer l\'écart de qualité, testez les mêmes entrées sur votre modèle local et sur des modèles cloud, par exemple en comparant avec GPT-5.6 et Claude dans PromptQuorum',
          ],
        },

        definition: {
          title: 'Qu\'est-ce que l\'optimisation de prompt ?',
          content: [
            '**L\'optimisation de prompt est le processus itératif de révision d\'un prompt existant pour améliorer la qualité, la précision ou la cohérence de la sortie IA pour une tâche spécifique.** Elle s\'applique à tous les modèles majeurs — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, et les modèles exécutés localement via Ollama ou LM Studio. Alors que l\'ingénierie de prompt conçoit la structure initiale du prompt, l\'optimisation de prompt diagnostique ce qui ne fonctionne pas et applique des modifications ciblées jusqu\'à ce que la sortie atteigne une norme définie.',
            'L\'optimisation de prompt est un sous-processus de l\'ingénierie de prompt. Vous commencez toujours par un prompt qui fonctionne et apportez une seule modification à la fois. Cet isolement des variables est ce qui rend le diagnostic possible — lorsque vous révisez la spécificité, le format de sortie et les contraintes simultanément, vous ne pouvez pas déterminer quelle modification a amélioré le résultat. La compétence de l\'optimisation de prompt est de mapper une défaillance au bon levier, de modifier uniquement cette variable et de mesurer l\'amélioration.',
            'Pourquoi c\'est important : le même modèle produit des sorties radicalement différentes à partir de prompts quasi identiques. La différence entre « à peu près correct » et « fiable » n\'est pas une question de chance — c\'est une optimisation systématique. Un prompt non optimisé réussit sur certaines entrées et échoue sur d\'autres. Un prompt optimisé réussit de manière cohérente sur un échantillon représentatif d\'entrées.',
          ],
        },

        vsPromptEngineering: {
          id: 'optimisation-de-prompt-vs-ingenierie-de-prompt',
          title: 'Optimisation de prompt vs ingénierie de prompt',
          content: [
            '**L\'optimisation de prompt et l\'ingénierie de prompt sont des disciplines complémentaires qui fonctionnent en séquence.** L\'ingénierie de prompt conçoit un prompt à partir de zéro en utilisant des éléments constitutifs (objectif, contexte, exemples, contraintes, format de sortie, rôle). L\'optimisation de prompt prend un prompt existant et l\'améliore par révision itérative. Vous avez besoin des deux : l\'ingénierie de prompt vous amène à « fonctionnel » ; l\'optimisation de prompt vous amène à « fiable ».',
            'Pensez-y de cette manière : l\'ingénierie de prompt construit la structure ; l\'optimisation de prompt l\'affine. L\'ingénierie de prompt demande « quels éléments ce prompt devrait-il avoir ? » L\'optimisation de prompt demande « pourquoi ce prompt échoue-t-il, et quelle modification unique va le corriger ? » La distinction est importante car les stratégies sont différentes. L\'ingénierie commence par les principes et les éléments constitutifs. L\'optimisation commence par le diagnostic des défaillances.',
          ],
          columns: ['Dimension', 'Ingénierie de prompt', 'Optimisation de prompt'],
          rows: [
            { 'Dimension': 'Point de départ', 'Ingénierie de prompt': 'Page vierge', 'Optimisation de prompt': 'Prompt existant' },
            { 'Dimension': 'Objectif', 'Ingénierie de prompt': 'Concevoir la structure', 'Optimisation de prompt': 'Améliorer la sortie' },
            { 'Dimension': 'Méthode', 'Ingénierie de prompt': 'Frameworks, éléments constitutifs', 'Optimisation de prompt': 'Isoler, modifier, tester, mesurer' },
          ],
        },

        whyOptimize: {
          title: 'Pourquoi l\'optimisation de prompt est importante',
          content: [
            'Un prompt vague produit une sortie vague. Un prompt mal spécifié produit une réponse hors cible. Un prompt qui fonctionne lundi peut échouer vendredi si l\'entrée change légèrement. L\'optimisation peut réduire ces variations grâce à un diagnostic systématique et une révision ciblée.',
            'Exemple illustratif, non mesuré : « Résumer cet article. » peut donner à chaque exécution une longueur et un angle différents. Ajouter un format de sortie (« 3 puces, ≤20 mots chacune »), un rôle (« analyste ») et une tâche précise (« Lister les 3 éléments clés, pas la méthodologie ») réduit généralement ces écarts.',
            'Pour le contexte réglementaire, consultez [Géopolitique et IA](/fr/prompt-engineering/geopolitics-and-ai).',
          ],
        },

        callout1: {
          blockquote: 'Sur GSM8K, un benchmark de problèmes mathématiques, montrer au modèle PaLM à 540 milliards de paramètres quelques exemples résolus avec un raisonnement étape par étape (chain-of-thought few-shot) a fait passer le taux de résolution de 17,9 % avec un prompting standard à 56,9 %, sans réentraînement.',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          title: 'Les 6 leviers d\'optimisation',
          content: [
            '**Chaque prompt se compose de six variables indépendantes que vous pouvez ajuster pour améliorer la sortie.** Ce sont les « leviers » de l\'optimisation. Lorsqu\'un prompt échoue, l\'échec remonte à un ou plusieurs de ces leviers qui ne sont pas correctement définis. La compétence de l\'optimisation consiste à mapper un symptôme au bon levier, le modifier et mesurer le résultat.',
          ],
          columns: ['Levier', 'Ce qu\'il change', 'Démarche d\'optimisation', 'Exemple'],
          rows: [
            { 'Levier': 'Spécificité', 'Ce qu\'il change': 'Comment la tâche est définie précisément', 'Démarche d\'optimisation': 'Réécrire l\'objectif vague comme une instruction exacte', 'Exemple': '« Résumer » → « Lister 3 éléments clés en ≤20 mots chacun »' },
            { 'Levier': 'Contexte', 'Ce qu\'il change': 'Information dont dispose le modèle', 'Démarche d\'optimisation': 'Ajouter contexte, audience, contraintes', 'Exemple': '« Écrire un rapport » → « Écrire un rapport pour un directeur financier non technique »' },
            { 'Levier': 'Exemples', 'Ce qu\'il change': 'Compréhension du modèle du format de sortie désiré', 'Démarche d\'optimisation': 'Ajouter 1–3 paires d\'entrée/sortie (few-shot)', 'Exemple': 'Montrer le format exact une fois' },
            { 'Levier': 'Contraintes', 'Ce qu\'il change': 'Limites de ce que le modèle peut produire', 'Démarche d\'optimisation': 'Ajouter des interdictions explicites', 'Exemple': '« Ne pas utiliser de jargon. Maximum 150 mots. »' },
            { 'Levier': 'Format de sortie', 'Ce qu\'il change': 'Structure de la réponse', 'Démarche d\'optimisation': 'Spécifier le format explicitement', 'Exemple': '« Répondre en JSON : {title, summary, tags[]} »' },
            { 'Levier': 'Rôle/persona', 'Ce qu\'il change': 'Niveau d\'expertise que le modèle adopte', 'Démarche d\'optimisation': 'Ajouter un rôle spécifique', 'Exemple': '« Agir en tant que data analyst senior dans une entreprise B2B SaaS »' },
          ],
        },

        callout2: {
          blockquote: 'La montée en échelle de GPT-3 a montré que l\'apprentissage few-shot, avec quelques exemples dans le prompt et sans mise à jour par gradient, pouvait sur certaines tâches rivaliser avec les meilleures approches antérieures de fine-tuning.',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        callout3: {
          blockquote: 'Dans une expérience en ligne préenregistrée menée auprès de 453 professionnels diplômés chargés de tâches de rédaction propres à leur métier, l\'accès à ChatGPT a réduit le temps moyen de 40 % et amélioré la qualité des productions de 18 %. Les écarts entre participants ont diminué.',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        optimizationProcess: {
          title: 'Le processus d\'optimisation en 6 étapes',
          content: [
            '**L\'optimisation de prompt est un processus systématique et mesurable.** Chaque étape affine le diagnostic : vous identifiez le symptôme, le mappez à un levier, modifiez une variable, testez sur plusieurs modèles et mesurez l\'amélioration. Voici le processus exact :',
          ],
          items: [
            '**Étape 1 : Établir une base de référence.** Exécutez le prompt actuel sur votre tâche cible 3 fois sur des entrées représentatives. Notez le mode d\'échec : la sortie est-elle trop longue ou trop courte ? Format incorrect ? Hallucinations ? Hors sujet ? Tangentiel ? Cette base de référence est cruciale — vous ne pouvez pas mesurer l\'amélioration sans elle.',
            '**Étape 2 : Identifier le levier racine.** Mappez l\'échec à l\'un des 6 leviers. Exemples : « la sortie est un mur de texte au lieu de puces » → levier de format de sortie ; « la réponse est vague » → levier de spécificité ; « le ton est erroné » → levier de rôle ; « contient des faits inventés » → levier de contexte ou de contraintes.',
            '**Étape 3 : Modifier une seule variable.** Apportez une seule modification ciblée au levier identifié. Ne modifiez pas l\'objectif, n\'ajoutez pas d\'exemples ET ne modifiez pas le format dans la même révision — vous ne pouvez pas attribuer l\'amélioration si trois choses changent. Cet isolement est non négociable.',
            '**Étape 4 : Tester sur plusieurs modèles.** Exécutez le prompt révisé sur GPT-5.6, Claude Opus 5 et Gemini 3.1 Pro. Un prompt qui fonctionne uniquement sur un modèle est fragile et spécifique au modèle. Utilisez PromptQuorum pour envoyer un prompt à ces trois simultanément et comparez les réponses côte à côte. L\'accord sur les modèles signifie que le prompt est robuste ; la divergence signifie que vous avez besoin d\'affinage supplémentaire.',
            '**Étape 5 : Mesurer par rapport aux critères.** La précision s\'est-elle améliorée ? Le format a-t-il été respecté ? Les hallucinations ont-elles diminué ? Les sorties passent-elles maintenant les tests de cohérence (exécution 3× de suite) ? La mesure, c\'est comment vous confirmez que la modification a fonctionné. Si vous avez apporté la modification mais n\'avez vu aucune amélioration, la modification n\'a pas résolu la cause profonde — essayez un autre levier.',
            '**Étape 6 : Sauvegarder dans une bibliothèque de prompts.** Un prompt testé et optimisé est un atout réutilisable. Documentez ce qui a changé et pourquoi cela a fonctionné. Versionnez-le. Une bibliothèque de prompts stockée et contrôlée en version est bien plus précieuse qu\'un prompt ponctuel qui a résolu un problème une fois.',
          ],
        },

        measurementCriteria: {
          title: 'Comment mesurer la qualité des prompts',
          content: [
            '**Vous ne pouvez pas optimiser ce que vous ne pouvez pas mesurer.** Les critères suivants définissent si une optimisation de prompt a réussi. Utilisez ces points de contrôle après chaque itération :',
          ],
          columns: ['Critère', 'Ce qu\'il faut vérifier', 'Signal de réussite / d\'échec'],
          rows: [
            { 'Critère': 'Précision des tâches', 'Ce qu\'il faut vérifier': 'La sortie répond-elle à la question réelle ?', 'Signal de réussite / d\'échec': 'Comparez contre une réponse connue correct' },
            { 'Critère': 'Conformité du format', 'Ce qu\'il faut vérifier': 'La sortie correspond-elle à la structure spécifiée ?', 'Signal de réussite / d\'échec': 'JSON a-t-il analysé ? Les puces ont-elles la bonne longueur ?' },
            { 'Critère': 'Ancrage factuel', 'Ce qu\'il faut vérifier': 'Les affirmations spécifiques sont-elles correctes ?', 'Signal de réussite / d\'échec': 'Vérifier ponctuellement 3–5 faits' },
            { 'Critère': 'Cohérence', 'Ce qu\'il faut vérifier': 'L\'exécution répétée produit-elle une sortie similaire ?', 'Signal de réussite / d\'échec': 'Exécuter le même prompt 3× — les sorties diffèrent-elles structurellement ?' },
            { 'Critère': 'Efficacité des tokens', 'Ce qu\'il faut vérifier': 'La longueur de sortie est-elle appropriée ?', 'Signal de réussite / d\'échec': 'Mesurer le nombre de tokens par rapport à la densité d\'information' },
            { 'Critère': 'Accord entre les modèles', 'Ce qu\'il faut vérifier': '2–3 modèles produisent-ils des résultats similaires ?', 'Signal de réussite / d\'échec': 'Envoyer à GPT-5.6, Claude, Gemini via PromptQuorum — accord = robuste' },
          ],
        },

        beforeAfterExamples: {
          title: 'À quoi ressemble l\'optimisation de prompt dans la pratique ?',
          content: [],
          items: [
            '**Mauvais :** « Résumer cet article. » | **Amélioré :** « Résumer en 3 puces, ≤20 mots chacune. Concentré sur l\'impact commercial. » | **Pourquoi :** Un format de sortie peut réduire l\'incohérence.',
            '**Mauvais :** « Examiner ce code. » | **Amélioré :** « Examiner pour (1) correction, (2) performance, (3) sécurité. Citer les numéros de ligne. Max 3 problèmes. » | **Pourquoi :** Rôle + contraintes peuvent réduire les retours génériques.',
            '**Mauvais :** « Synthétiser ces articles. » | **Amélioré :** « Synthétiser uniquement à partir des 5 articles fournis. Format : [Constatation A]. [Constatation B]. [Implication]. Ne pas inventer. » | **Pourquoi :** Contexte + contraintes peuvent réduire les hallucinations.',
            '**Mauvais :** « Écrire un email à un client. » | **Amélioré :** « Écrire un email à un client en colère qui a attendu 2 semaines le support. Excusez-vous une fois, offrez 2 solutions, demandez la préférence. ≤150 mots. » | **Pourquoi :** Spécificité + contraintes améliorent le ton et la pertinence.',
            '**Mauvais :** « Extraire les données de ce tableau. » | **Amélioré :** « Extraire les noms et les montants en JSON : [{\"name\": \"...\", \"amount\": ...}]. Pas d\'explications. » | **Pourquoi :** Un format explicite peut réduire le texte superflu.',
            '**Mauvais :** « Ce code est-il sûr ? » | **Amélioré :** « Vérifier : (1) injection SQL, (2) entrée utilisateur non validée, (3) secrets codés en dur. Répondre avec chaque constatation comme : [Ligne N : Problème]. Pas de faux positifs. » | **Pourquoi :** Spécificité + contraintes améliorent la précision.',
          ],
        },

        callout4: {
          blockquote: 'Dans une expérience menée auprès de 758 consultants du BCG, ceux qui utilisaient l\'IA sur 18 tâches réalistes situées dans la frontière de ses capacités ont produit des résultats jugés de plus de 40 % supérieurs en qualité à ceux du groupe témoin. Sur une tâche choisie hors de cette frontière, ils avaient 19 points de pourcentage de moins de chances de trouver une solution correcte.',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        definitionBoxes: {
          title: 'Que signifient ces termes d\'optimisation de prompt ?',
          content: [],
          items: [
            '**Optimisation de prompt** — Le processus itératif de révision d\'un prompt pour améliorer la qualité de la sortie en diagnostiquant les modes d\'échec et en modifiant une variable (spécificité, contexte, exemples, contraintes, format ou rôle) à la fois. Voir [5 éléments fondamentaux de tout prompt](/fr/prompt-engineering/5-building-blocks-every-prompt-needs) pour les éléments structurels que vous optimisez.',
            '**Prompting few-shot** — Inclure 1–3 exemples d\'entrée/sortie dans le prompt pour enseigner au modèle le format ou le modèle désiré. Voir [Zero-Shot vs Few-Shot Prompting](/fr/prompt-engineering/zero-shot-vs-few-shot) pour savoir quand ajouter des exemples comme levier d\'optimisation principal.',
            '**Chain-of-Thought (CoT)** — Demander au modèle de raisonner étape par étape (« réfléchis avant de répondre ») ce qui peut améliorer le raisonnement en plusieurs étapes ; le gain dépend du modèle et de la tâche. Voir [Chain-of-Thought Prompting](/fr/prompt-engineering/chain-of-thought-prompting) pour les techniques détaillées.',
            '**Contrainte** — Une interdiction explicite ou une limite (par ex., « ne pas utiliser de jargon », « maximum 150 mots », « citer uniquement les sources ») qui limite la portée de la sortie et prévient les modes d\'échec courants. Voir [Constrained Prompting](/fr/prompt-engineering/constrained-prompting) pour les modèles de contrainte avancés.',
            '**Token** — La plus petite unité de texte que le modèle traite ; environ 4 caractères ou 1 mot en anglais. La longueur des prompts et le budget de sortie sont mesurés en tokens. Voir [Tokens, Coûts & Limites](/fr/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) pour le calcul des coûts.',
            '**Hallucination** — Sortie confiante mais factuellement incorrecte ; se produit lorsque le modèle invente des faits, cite des études inexistantes ou répète des affirmations non fondées. Voir [Hallucinations IA : Pourquoi l\'IA invente des choses](/fr/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — atténuée en ajoutant du contexte d\'ancrage, des exemples et des contraintes.',
            '**Fine-tuning** — Réentraîner les poids du modèle sur les données étiquetées spécifiques au domaine ; utilisé lorsque l\'optimisation de prompt ne peut pas atteindre la qualité requise. Toujours épuiser l\'optimisation avant le fine-tuning — c\'est plus lent et plus coûteux.',
            '**RAG (Retrieval-Augmented Generation)** — Injecter les documents récupérés dans le contexte du prompt avant de demander au modèle de répondre. Voir [RAG expliqué](/fr/prompt-engineering/rag-explained) — complémentaire à l\'optimisation (RAG améliore l\'information ; l\'optimisation améliore comment le modèle l\'utilise).',
            '**System prompt** — Instruction persistante qui définit le rôle, les contraintes et le comportement du modèle sur tous les tours. Voir [System Prompt vs User Prompt](/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — nécessite des tests d\'optimisation séparés du prompt côté utilisateur.',
            '**Spécificité** — Précision dans la définition de la tâche ; passer d\'instructions vagues (« résumer ») à des exigences exactes (« lister 3 puces, ≤20 mots chacune »). Le premier et souvent le levier d\'optimisation le plus important à ajuster.',
          ],
        },

        modelSpecificTips: {
          title: 'Conseils d\'optimisation spécifiques aux modèles',
          content: [
            '**Les 6 leviers d\'optimisation s\'appliquent à tous les modèles majeurs — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro et Mistral Large.** Cependant, chaque modèle répond différemment à la densité d\'instructions, la spécificité du format et la définition du rôle. Voici les conseils de tuning spécifiques au modèle : Ce sont des points de départ généraux et non des résultats mesurés ; vérifiez chacun sur vos propres entrées.',
          ],
          items: [
            '**GPT-5.6 (OpenAI) :** Répond bien aux demandes explicites de format JSON et aux en-têtes markdown dans les system prompts. Le suivi des instructions est solide — les contraintes strictes réduisent la sur-explication. Si votre prompt GPT-5.6 sur-explique, ajoutez une contrainte : « Soyez concis. N\'expliquez pas votre raisonnement sauf si demandé. »',
            '**Claude Opus 5 (Anthropic) :** Excelle avec les instructions nuancées et multi-parties. Gère les system prompts longs et détaillés de manière fiable. Bénéficie des directives explicites de longueur de sortie (« répondre en ≤200 mots »). Si vous optimisez pour la brièveté, soyez spécifique : « Répondre en pas plus de 150 mots. »',
            '**Gemini 3.1 Pro (Google DeepMind) :** Adapté à l\'analyse de longs documents (grande fenêtre de contexte). Les en-têtes de section explicites dans les prompts améliorent la cohérence des sorties structurées. Si vous traitez de longs documents, ajoutez des en-têtes : « ## Document d\'entrée\n[document]\n## Tâche\n[tâche]. »',
            '**Mistral Large (Mistral AI) :** Bénéficie des définitions de rôle explicites et d\'une formulation d\'instructions plus prescriptive. Si votre prompt fonctionne sur GPT-5.6 mais pas sur Mistral, rendez les instructions plus explicites et ajoutez un rôle : « Vous êtes un [rôle spécifique]. Votre tâche est de [objectif explicite]. »',
          ],
        },

        localLLMExamples: {
          title: 'Optimiser les prompts pour les LLM locaux (Ollama, LM Studio)',
          content: [
            '**Les modèles locaux exécutés via Ollama ou LM Studio répondent aux mêmes 6 leviers d\'optimisation, mais avec des tolérances plus strictes.** Les modèles quantifiés (4-bit, 8-bit) peuvent suivre les instructions moins fidèlement ; commencez donc par des prompts simples et explicites. Les exemples ci-dessous montrent l\'optimisation avant/après pour trois modes d\'échec courants des LLM locaux. Il s\'agit de scénarios illustratifs et non de résultats de tests : les noms de modèles indiquent seulement des configurations locales typiques, et les échecs décrits sont possibles, pas des défauts mesurés de ces modèles.',
          ],
          items: [
            '**Exemple 1 : Incohérence de sortie du modèle quantifié (Levier : Format de sortie + Contraintes)**\n_Modèle :_ LLaMA 3.1 8B via Ollama (quantification 4-bit)\n_Prompt faible :_ « Résumer ce ticket de support. »\n_Mode d\'échec possible :_ La sortie varie énormément entre les exécutions — parfois une phrase, parfois une liste, parfois une question à l\'utilisateur.\n_Levier modifié :_ Format de sortie + contrainte de température.\n_Prompt optimisé :_ « Résumer ce ticket de support en exactement 2 phrases. Phrase 1 : le problème du client. Phrase 2 : ce qu\'il a essayé. Pas d\'autre texte. »\n_Correctif supplémentaire :_ Lancez `ollama run llama3.1`, puis saisissez `/set parameter temperature 0.1`.\n_Objectif (non mesuré) :_ Des résumés en 2 phrases ; vérifiez-le avec votre modèle et vos tickets.',
            '**Exemple 2 : Défaillance de contrainte de longueur de contexte sur LM Studio (Levier : Spécificité + Contexte)**\n_Modèle :_ Mistral Small Instruct via LM Studio (quantification Q4_K_M, contexte 4096-token)\n_Prompt faible :_ « Analyser ce document et lister les risques clés. » [document complet de 3 000 mots collé]\n_Mode d\'échec possible :_ Le modèle tronque à mi-analyse, manque le dernier tiers du document, produit une sortie incomplète sans signaler la troncature.\n_Levier modifié :_ Spécificité — réduire la portée pour tenir dans le budget de contexte.\n_Prompt optimisé :_ « Vous êtes un analyste de risque. Lisez l\'extrait de document suivant (premiers 1 500 mots uniquement) et listez jusqu\'à 5 risques spécifiques, chacun en ≤15 mots. Format : Risque 1 : [description]. Risque 2 : [description]. Arrêtez après 5. »\n_Objectif (non mesuré) :_ Une analyse qui tient dans la fenêtre de contexte ; vérifiez que la sortie n\'est pas tronquée.',
            '**Exemple 3 : Remplacement d\'instructions dans les modèles quantifiés (Levier : Contraintes)**\n_Modèle :_ Phi-3 Mini via Ollama\n_Prompt faible :_ « Extraire toutes les dates de ce texte. Retourner JSON uniquement. »\n_Mode d\'échec possible :_ Le modèle retourne JSON plus un paragraphe d\'explication (« Voici les dates que j\'ai trouvées... »). Les petits modèles ajoutent fréquemment des commentaires non sollicités même lorsque le format est spécifié.\n_Levier modifié :_ Contraintes — interdiction explicite.\n_Prompt optimisé :_ « Extraire toutes les dates du texte ci-dessous. Retourner uniquement un tableau JSON. Pas d\'explication. Pas de préambule. Pas de commentaire. Sortie : [\\\"date1\\\", \\\"date2\\\", ...] »\n_Objectif (non mesuré) :_ Du JSON sans texte superflu ; validez-le avec un parseur, car les petits modèles peuvent encore ajouter du texte.',
          ],
        },

        commonMistakes: {
          title: 'Les 7 erreurs d\'optimisation les plus courantes',
          content: [
            '**La plupart des optimisations échouent à cause d\'erreurs de processus, pas de mauvaise compréhension conceptuelle.** Voici les pièges les plus courants et comment les éviter :',
          ],
          items: [
            '**Erreur 1 : Modifier plusieurs variables simultanément.** Vous ajoutez des exemples, modifiez le format de sortie ET ajustez le rôle dans une révision. Maintenant, lorsque la sortie s\'améliore, vous ne savez pas quel changement a aidé. L\'optimisation efficace isole un changement par itération.',
            '**Erreur 2 : Optimiser sur une seule entrée.** Vous testez un exemple, voyez une amélioration et déclarez succès. En utilisation réelle, le prompt échoue sur différentes entrées. Testez sur 5–10 exemples représentatifs. Si le prompt ne réussit pas sur les 5, continuez à optimiser.',
            '**Erreur 3 : Optimiser pour un seul modèle.** Vous optimisez pour GPT-5.6, voyez des résultats parfaits, puis déployez sur Claude. Il peut alors échouer. Chaque modèle a un comportement de suivi d\'instructions légèrement différent. Testez sur au moins 2 modèles (GPT-5.6 et Claude Opus 5) ; idéalement 3.',
            '**Erreur 4 : Ignorer le format de sortie.** Un prompt produit les bons faits mais dans la mauvaise structure. « Format incorrect » est le mode d\'échec le plus courant et le plus rapide à corriger. Toujours spécifier : « Répondre en JSON avec les champs : [liste] » ou « Utiliser un tableau markdown avec les colonnes : [liste]. » La conformité du format est souvent la différence entre une sortie utilisable et inutilisable.',
            '**Erreur 5 : Sur-prompting.** Vous ajoutez 15 contraintes, 5 descriptions de rôles et 10 exemples dans un prompt de 200 tokens. Trop d\'instructions simultanées submergent le modèle. Commencez minimal, puis ajoutez uniquement les contraintes nécessaires. Si un prompt ne fonctionne pas, le premier mouvement est de simplifier, pas d\'expander.',
            '**Erreur 6 : Confondre optimisation et fine-tuning.** L\'optimisation améliore les prompts ; le fine-tuning entraîne le modèle. Si vous avez essayé tous les 6 leviers et que le prompt échoue toujours, le modèle peut manquer de connaissances ou de capacités pour la tâche — c\'est un problème de fine-tuning, pas d\'optimisation. Le fine-tuning est généralement bien plus lent et plus coûteux. Épuisez d\'abord l\'optimisation des prompts.',
            '**Erreur 7 : Ne pas sauvegarder les prompts optimisés.** Vous optimisez un prompt, le déployez, puis ré-optimisez le même prompt 6 mois plus tard parce que personne n\'a sauvegardé la version qui a fonctionné. Une bibliothèque de prompts — contrôlée en version, documentée et partagée — transforme le travail d\'optimisation en un atout durable.',
          ],
        },

        advancedTechniques: {
          title: 'Techniques d\'optimisation de prompt : méthodes avancées',
          content: [
            '**Au-delà des 6 leviers fondamentaux, les techniques avancées d\'optimisation de prompt appliquent des modèles spécialisés pour corriger les modes d\'échec spécifiques.** Ces techniques combinent plusieurs leviers ou superposent des contraintes pour résoudre des problèmes plus difficiles. Apprenez quelles techniques appliquer en fonction de votre défi d\'optimisation :',
          ],
          items: [
            '[Few-shot vs Zero-shot](/fr/prompt-engineering/zero-shot-vs-few-shot) : Ajouter 1–3 paires d\'entrée/sortie d\'exemple au prompt lorsque le modèle ne formate pas correctement la sortie ou manque le style que vous souhaitez. Les exemples few-shot sont le moyen le plus direct d\'enseigner le format.',
            '[Chain-of-thought](/fr/prompt-engineering/chain-of-thought-prompting) : Insérer « réfléchis étape par étape avant de répondre » pour corriger les défaillances du raisonnement multi-étapes. Cette technique peut améliorer le raisonnement en plusieurs étapes ; le gain dépend du modèle et de la tâche.',
            '[Constrained prompting](/fr/prompt-engineering/constrained-prompting) : Ajouter des interdictions explicites (« Ne pas utiliser de jargon », « Ne pas inventer des chiffres », « Ne pas répéter l\'entrée ») pour corriger les défaillances de portée et de style. Les contraintes sont plus fortes que les instructions.',
            '[Self-consistency](/fr/prompt-engineering/self-consistency-prompting) : Générer la sortie du prompt 3–5 fois indépendamment, puis retourner la réponse la plus courante. Cela réduit les hallucinations sur les faits de faible probabilité en combinant les exécutions du modèle.',
            '[Structured output](/fr/prompt-engineering/structured-output-and-json-mode) : Demander JSON, des tableaux markdown ou d\'autres formats lisibles par machine pour corriger la conformité du format. La sortie structurée est plus rapide à analyser et moins sujette aux erreurs que la prose.',
          ],
        },

        keyTerms: {
          title: 'Que signifient ces termes clés de l\'optimisation de prompt ?',
          items: [
            '[Few-shot prompting](/fr/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — Inclure un petit nombre d\'exemples entrée/sortie dans le prompt pour que le modèle déduise le motif ou le format souhaité ; le levier « Exemples » du cadre à 6 leviers',
            '[Chain-of-Thought (CoT)](/fr/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — Demander au modèle de raisonner étape par étape avant de répondre ; la technique principale pour corriger les défaillances de raisonnement multi-étapes',
            '[Self-consistency](/fr/prompt-engineering/prompt-engineering-glossary#self-consistency) — Générer plusieurs sorties et retourner la réponse la plus courante ; réduit les taux d\'hallucination sur les faits de faible probabilité',
            '[Zero-shot prompting](/fr/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — Prompter sans exemples ; la base de référence par rapport à laquelle l\'optimisation few-shot est mesurée',
            '[Hallucination](/fr/prompt-engineering/prompt-engineering-glossary#hallucination) — Sortie qui semble assurée mais factuellement incorrecte ; l\'un des principaux modes d\'échec ciblés par l\'optimisation',
            '[Fine-tuning](/fr/prompt-engineering/prompt-engineering-glossary#fine-tuning) — Réentraîner les poids du modèle sur des données spécifiques au domaine ; l\'alternative à l\'optimisation de prompt lorsqu\'un plafond de qualité strict est atteint',
            '[RAG (Retrieval-Augmented Generation)](/fr/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — Injecter des documents récupérés dans le contexte du prompt ; complémentaire à l\'optimisation (RAG améliore l\'information ; l\'optimisation améliore la façon dont le modèle l\'utilise)',
            '[System prompt](/fr/prompt-engineering/prompt-engineering-glossary#system-prompt) — Instruction persistante définissant le rôle, les contraintes et le comportement du modèle sur tous les tours ; nécessite son propre passage d\'optimisation',
            '[Température](/fr/prompt-engineering/prompt-engineering-glossary#temperature) — Paramètre de décodage contrôlant l\'aléatoire de la sortie ; une température plus basse améliore la cohérence entre les tests d\'optimisation',
            '[Chaînage de prompts](/fr/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — Décomposer des tâches complexes en une séquence de prompts plus petits ; chaque sous-prompt bénéficie d\'une optimisation indépendante',
          ],
        },

        promptLibrary: {
          title: 'Sauvegarder les prompts optimisés dans une bibliothèque',
          content: [
            '**Un prompt optimisé est un atout durable.** Une fois que vous avez testé un prompt sur 3 modèles, confirmé qu\'il fonctionne sur 5–10 entrées représentatives et documenté ce que chaque levier fait — sauvegardez-le. Une bibliothèque de prompts vous permet de réutiliser les prompts optimisés dans les projets, de les partager avec votre équipe et de les améliorer au fil du temps.',
            'Ce qu\'il faut sauvegarder avec chaque prompt : le texte du prompt final, le levier qui a été modifié, le mode d\'échec qu\'il a corrigé, les modèles sur lesquels il a été testé et les résultats de réussite/échec sur vos entrées représentatives. Cette documentation est ce qui sépare une bibliothèque de prompts d\'un simple dossier de fichiers texte.',
            'Voir [Construire une bibliothèque de prompts qui vous fait gagner des heures](/fr/prompt-engineering/build-a-prompt-library) pour un guide complet sur la structuration, la versioning et la maintenance d\'une bibliothèque.',
          ],
        },

        regionalCompliance: {
          title: 'Optimisation de prompt et conformité réglementaire',
          content: [
            'Dans un cadre réglementé, une bibliothèque de prompts versionnée avec des traces de tests peut étayer votre documentation. À elle seule, elle ne rend pas un système conforme à la loi européenne sur l\'IA ni à une autre règle.',
            'Les lignes directrices japonaises sur l\'IA destinées aux entreprises, publiées par le METI et le ministère des Affaires intérieures et des Communications, ne sont pas contraignantes. Ceci ne constitue pas un conseil juridique : demandez à un spécialiste quelles obligations vous concernent.',
          ],
        },

        multilingualReach: {
          title: 'Optimisation de prompt à travers les langues et les régions',
          content: [
            '**L\'optimisation de prompt est une discipline universelle — les 6 leviers et le processus en 6 étapes s\'appliquent quelle que soit la langue dans laquelle votre prompt est rédigé.** Cependant, les termes de recherche locaux diffèrent considérablement, les modèles principaux varient selon la région, et certaines langues présentent des défis d\'optimisation uniques (densité de tokenisation, écritures à base de caractères, registres formel/informel). Le tableau ci-dessous répertorie les variantes régionales les plus importantes.',
          ],
          columns: ['Langue / Région', 'Terme local', 'Modèle principal', 'Note régionale'],
          rows: [
            { 'Langue / Région': 'Anglais — États-Unis', 'Terme local': 'prompt optimization', 'Modèle principal': 'GPT-5.6, Claude Opus 5', 'Note régionale': 'Orthographe américaine (-ize)' },
            { 'Langue / Région': 'Français — FR / CA', 'Terme local': 'optimisation de prompt', 'Modèle principal': 'GPT-5.6, Claude Opus 5', 'Note régionale': 'Registre formel' },
            { 'Langue / Région': 'Allemand — DE / AT / CH', 'Terme local': 'Prompt-Optimierung', 'Modèle principal': 'GPT-5.6, Claude Opus 5', 'Note régionale': 'Loi européenne sur l\'IA pertinente pour DACH' },
            { 'Langue / Région': 'Espagnol — ES / LATAM', 'Terme local': 'optimización de prompts', 'Modèle principal': 'GPT-5.6', 'Note régionale': 'Terme en espagnol neutre' },
            { 'Langue / Région': 'Portugais — BR', 'Terme local': 'otimização de prompts', 'Modèle principal': 'GPT-5.6', 'Note régionale': 'Terme en portugais du Brésil' },
            { 'Langue / Région': 'Japonais — JP', 'Terme local': 'プロンプト最適化', 'Modèle principal': 'GPT-5.6 (fort support du japonais)', 'Note régionale': 'Vérifier les tokens par modèle' },
            { 'Langue / Région': 'Chinois simplifié — CN', 'Terme local': '提示词优化', 'Modèle principal': 'DeepSeek, Qwen 3', 'Note régionale': 'Caractères simplifiés' },
            { 'Langue / Région': 'Coréen — KR', 'Terme local': '프롬프트 최적화', 'Modèle principal': 'GPT-5.6, Claude Opus 5', 'Note régionale': 'Vérifier les tokens par modèle' },
          ],
        },

        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Qu\'est-ce que le prompt engineering ?](/fr/prompt-engineering/what-is-prompt-engineering) — la définition pilier et les éléments constitutifs fondamentaux de la conception de prompts',
            '[Les 5 éléments fondamentaux de tout prompt](/fr/prompt-engineering/5-building-blocks-every-prompt-needs) — les éléments structurels que vous optimisez',
            '[Chain-of-Thought Prompting](/fr/prompt-engineering/chain-of-thought-prompting) — technique de raisonnement étape par étape pour améliorer la précision',
            '[Zero-Shot vs Few-Shot Prompting](/fr/prompt-engineering/zero-shot-vs-few-shot) — quand ajouter des exemples comme levier d\'optimisation',
            '[Construire une bibliothèque de prompts qui vous fait gagner des heures](/fr/prompt-engineering/build-a-prompt-library) — persister les prompts optimisés comme atouts d\'équipe',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ : Optimisation de Prompt',
          faqs: [
            { q: 'Qu\'est-ce que l\'optimisation de prompt ?', a: 'L\'optimisation de prompt est le processus itératif de révision d\'un prompt existant pour améliorer la qualité de la sortie IA pour une tâche spécifique. Elle implique l\'identification d\'un mode d\'échec (format incorrect, hallucination, sortie vague), la modification d\'une variable (spécificité, contexte, exemples, contraintes, format de sortie ou rôle) et le test du résultat sur plusieurs modèles comme GPT-5.6, Claude Opus 5 et Gemini 3.1 Pro.' },
            { q: 'Quelle est la différence entre l\'optimisation de prompt et l\'ingénierie de prompt ?', a: 'L\'ingénierie de prompt est la discipline de conception d\'une structure de prompt à partir de zéro en utilisant des éléments constitutifs comme l\'objectif, le contexte et le format de sortie. L\'optimisation de prompt est le sous-processus itératif d\'amélioration d\'un prompt déjà écrit en diagnostiquant les modes d\'échec et en appliquant des modifications ciblées. Vous avez besoin de l\'ingénierie de prompt pour créer un point de départ ; vous utilisez l\'optimisation de prompt pour l\'affiner.' },
            { q: 'Combien d\'itérations faut-il pour optimiser un prompt ?', a: 'Pour la plupart des tâches, 2–4 itérations ciblées sont suffisantes pour passer d\'un prompt défaillant à un prompt fiable. Chaque itération doit modifier une variable et être testée sur 3–5 entrées représentatives. Les rendements décroissants s\'installent après 5–6 itérations — si un prompt ne s\'est pas stabilisé à ce moment-là, la définition de la tâche elle-même peut nécessiter une révision.' },
            { q: 'Quel levier devrais-je modifier en premier lors de l\'optimisation d\'un prompt ?', a: 'Commencez par le format de sortie. La non-conformité du format — recevoir un paragraphe quand vous vouliez un tableau, ou du texte brut quand vous aviez besoin de JSON — est le mode d\'échec le plus courant et le plus rapide à corriger. Spécifiez la structure exacte que vous souhaitez, puis abordez d\'autres problèmes (précision, ton, portée) dans les itérations suivantes.' },
            { q: 'L\'optimisation de prompt fonctionne-t-elle sur tous les modèles d\'IA ?', a: 'Oui, mais avec des ajustements spécifiques au modèle. Les six leviers d\'optimisation fondamentaux (spécificité, contexte, exemples, contraintes, format de sortie, rôle) s\'appliquent à GPT-5.6, Claude Opus 5, Gemini 3.1 Pro et Mistral Large. Cependant, chaque modèle répond différemment à la densité d\'instructions. Testez chaque modèle que vous utilisez.' },
            { q: 'Quelle est l\'erreur d\'optimisation de prompt la plus courante ?', a: 'Modifier plusieurs variables simultanément. Si vous ajoutez des exemples, modifiez le format de sortie et ajoutez une instruction de rôle dans la même révision, vous ne pouvez pas déterminer quel changement a amélioré (ou dégradé) la sortie. L\'optimisation efficace modifie une variable par itération.' },
            { q: 'L\'optimisation de prompt peut-elle réduire les hallucinations de l\'IA ?', a: 'Oui, avec les bonnes techniques. Ajouter un contexte d\'ancrage (« Basez votre réponse uniquement sur le document suivant »), des exemples few-shot avec des sorties factuellement correctes et des contraintes explicites (« N\'invente pas de chiffres — utilise uniquement les données du texte fourni ») peuvent aider à réduire les hallucinations. Le prompting auto-cohérent — générer plusieurs sorties et retourner la plus courante — réduit davantage les fabrications de faible probabilité.' },
            { q: 'Quand devrais-je utiliser le fine-tuning plutôt que l\'optimisation de prompt ?', a: 'Utilisez le fine-tuning lorsque l\'optimisation de prompt atteint un plafond — généralement lorsque le comportement requis est hautement spécifique au domaine, nécessite une voix stylistique cohérente sur des milliers de sorties ou dépend de connaissances absentes de l\'entraînement du modèle de base. L\'optimisation de prompt est plus rapide et moins coûteuse et devrait toujours être épuisée avant le fine-tuning.' },
            { q: 'Comment savoir si un prompt est entièrement optimisé ?', a: 'Un prompt est suffisamment optimisé quand il : (1) produit une sortie correcte sur 4–5 entrées représentatives, (2) produit une sortie cohérente lors de ré-exécutions, (3) fonctionne sur au moins deux modèles (par ex., GPT-5.6 et Claude) et (4) respecte la spécification de format sans post-traitement. Les prompts parfaits n\'existent pas — « optimisé » signifie suffisamment fiable pour le cas d\'usage.' },
            { q: 'L\'optimisation de prompt s\'applique-t-elle aux prompts d\'images (text-to-image) ?', a: 'Les principes s\'appliquent — spécificité, contraintes et exemples (images de référence) sont tous des leviers valides pour les modèles d\'image comme DALL-E 3 et Stable Diffusion. Cependant, la mécanique diffère : les modèles d\'image répondent aux modificateurs de style, aux spécifications de rapport d\'aspect et aux prompts négatifs comme contraintes. Le processus d\'optimisation (baseline → diagnostiquer → changer une variable → tester) est identique.' },
            { q: 'Comment fonctionne l\'optimisation automatique de prompt ?', a: 'L\'optimisation automatique de prompt utilise un deuxième modèle IA (ou le même modèle dans une boucle de meta-prompting) pour réécrire et améliorer les prompts sans intervention humaine. Des outils comme DSPy (Stanford), TextGrad et APE (Automatic Prompt Engineer) génèrent des prompts candidats, les évaluent par rapport à une métrique (précision, conformité du format, évaluation utilisateur) et sélectionnent la meilleure variante. L\'optimisation manuelle est plus rapide pour les tâches bien comprises ; l\'optimisation automatique s\'adapter mieux si vous avez des données d\'évaluation annotées et devez tester des centaines de variantes.' },
            { q: 'Comment l\'optimisation de prompt diffère-t-elle du réglage fin de prompt ?', a: 'L\'optimisation de prompt améliore les prompts texte discrets — les instructions que vous écrivez en langage naturel — sans modifier les poids du modèle. Le réglage fin de prompt (introduit par Lester et al., 2021) apprend des vecteurs de soft-prompt continus qui sont préfacés à l\'entrée et entraînés par descente de gradient aux côtés ou à la place du modèle. Le réglage fin de prompt nécessite de la puissance de calcul et des données d\'entraînement ; l\'optimisation de prompt n\'a besoin d\'aucun des deux. Pour la plupart des cas d\'utilisation en production, vous optimisez d\'abord les prompts discrets et ne considérez le réglage fin de prompt que lorsqu\'un plafond de qualité difficile est atteint.' },
            { q: 'Quels sont les meilleurs outils pour l\'optimisation de prompt ?', a: 'Il n\'existe pas un seul meilleur outil. Exemples : PromptQuorum (conçu par l\'éditeur de ce site ; envoyez un prompt à GPT-5.6, Claude et Gemini simultanément pour l\'analyse comparative), DSPy (optimisation de prompt programmée avec sélection basée sur des métriques automatiques), LangSmith (versioning de prompt, tests A/B et traçage pour les pipelines LangChain), Promptfoo (CLI open-source pour exécuter les prompts contre des cas de test et des tests de régression) et PromptLayer (versioning de prompt et analytique). Pour l\'itération manuelle, un tableur enregistrant la version du prompt, l\'entrée, la sortie et Réussi/Échoué par rapport aux critères suffit pour la plupart des tâches d\'optimisation simples.' },
            { q: 'Comment optimiser un prompt système ?', a: 'L\'optimisation du prompt système suit le même processus en 6 étapes que l\'optimisation du prompt utilisateur avec deux contraintes supplémentaires. Premièrement, les prompts système persistent sur tous les tours — une instruction trop spécifique peut dégrader les performances sur des entrées que vous n\'aviez pas prévues. Testez sur 5–10 entrées représentatives diverses, pas seulement une. Deuxièmement, la longueur du prompt système est importante : les prompts système très longs peuvent réduire le suivi des instructions dans les tours utilisateur ultérieurs sur certains modèles. Optimisez pour la concision : chaque instruction du prompt système doit être nécessaire. Supprimez toute instruction qui ne change pas la sortie sur votre ensemble de test.' },
            { q: 'Puis-je utiliser ChatGPT pour l\'optimisation de prompt ?', a: 'Oui. Vous pouvez demander à GPT-5.6 de réécrire un prompt en fournissant le prompt défaillant et une description du mode d\'échec : « Ce prompt produit des sorties trop vagues. Réécrivez-le pour exiger une réponse structurée en 3 points. » C\'est une forme de meta-prompting — utiliser le modèle pour améliorer ses propres entrées. La limitation est que GPT-5.6 optimisera pour ce qu\'il considère comme meilleur, pas nécessairement pour ce que vos critères d\'évaluation spécifiques exigent. Testez toujours le prompt réécrit sur des entrées réelles et mesurez par rapport à vos critères réels de Réussi/Échoué avant d\'accepter la révision.' },
            { q: 'Que signifie l\'optimisation de prompt dans le contexte du machine learning ?', a: 'Dans le contexte du machine learning, l\'optimisation de prompt fait référence à des techniques qui améliorent les prompts envoyés à un modèle de langage dans le cadre d\'un pipeline — sans réentraîner le modèle lui-même. Cela inclut l\'optimisation de prompt discrète (réécrire les instructions en langage naturel) et l\'optimisation continue de prompt (apprendre les embeddings de soft-tokens par descente de gradient). Dans les systèmes de production ML, l\'optimisation de prompt est généralement partie intégrante du pipeline d\'inférence : le prompt est traité comme un hyperparamètre optimisé par rapport à un ensemble d\'évaluation réservé, similaire à la sélection du taux d\'apprentissage lors de l\'entraînement du modèle.' },
            { q: 'Combien l\'optimisation de prompt améliore-t-elle la qualité de la sortie ?', a: 'Cela dépend du modèle, de la tâche et du prompt de départ ; il n\'existe donc pas de pourcentage général. Mesurez-le vous-même : testez l\'ancien et le nouveau prompt sur les mêmes entrées et comparez les taux de réussite.' },
            { q: 'Dois-je optimiser les prompts séparément pour chaque modèle ?', a: 'Commencez par une optimisation indépendante du modèle — appliquez les 6 leviers (spécificité, contexte, exemples, contraintes, format de sortie, rôle) et testez sur GPT-5.6, Claude Opus 5 et Gemini 3.1 Pro. Un prompt bien structuré fonctionne généralement bien sur tous les trois. N\'ajoutez des variantes spécifiques au modèle que si les tests cross-model montrent des résultats divergents. Ajustements par modèle à tester : Claude gère bien les prompts système multi-parties plus longs ; GPT-5.6 bénéficie des demandes de format JSON explicites ; Gemini 3.1 Pro bénéficie des en-têtes de section explicites dans les tâches avec de longs documents. Documentez les variantes spécifiques au modèle dans une bibliothèque de prompts avec des notes de version.' },
            { q: 'Quelle est la différence entre l\'optimisation de prompt et RAG ?', a: 'L\'optimisation de prompt améliore les instructions et la structure d\'un prompt. La génération augmentée par récupération (RAG) améliore les informations disponibles pour le modèle au moment de l\'inférence en récupérant des documents pertinents et en les insérant dans le contexte du prompt. Les deux sont complémentaires : RAG résout le problème que le modèle n\'a pas les bonnes données ; l\'optimisation de prompt résout le problème que le modèle ne traite pas correctement ces données. Un pipeline RAG entièrement optimisé nécessite à la fois une bonne récupération (les bons documents sont récupérés) et un prompt bien optimisé (le modèle est instruitd\'utiliser uniquement le contenu récupéré, de citer les sources et de formater correctement la réponse).' },
            { q: 'Comment optimiser les prompts spécifiquement pour GPT-5.6 ?', a: 'Quatre mouvements d\'optimisation méritent d\'être testés avec GPT-5.6 : (1) Demandes explicites de format JSON dans le prompt système — pour une sortie structurée, définissez précisément le schéma. (2) En-têtes Markdown dans les prompts système — utilisez les sections H2 (## Rôle, ## Tâche, ## Format de sortie) pour séparer les préoccupations. (3) Contraintes strictes — sans limite de mots ou de longueur, les réponses peuvent être plus longues que nécessaire ; ajoutez « répondez en ≤150 mots » ou « retournez uniquement l\'objet JSON, pas d\'explication ». (4) Encadrage d\'utilisation d\'outils — pour les tâches impliquant la récupération ou le calcul, formulez le prompt comme une définition de fonction plutôt qu\'une instruction en prose si vous utilisez l\'API Assistants avec les outils activés.' },
          ],
        },

        sources: {
          title: 'Sources et lectures supplémentaires',
          items: [
            '[Schulhoff et al., 2024. « The Prompt Report: A Systematic Survey of Prompt Engineering Techniques »](https://arxiv.org/abs/2406.06608) — recense 58 techniques de prompting textuel',
            '[Wei et al., 2022. « Chain-of-Thought Prompting Elicits Reasoning in Large Language Models »](https://arxiv.org/abs/2201.11903) — base académique peer-reviewed pour le raisonnement étape par étape comme levier d\'optimisation',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — le guide d\'OpenAI sur le prompt engineering',
            '[Brown et al., 2020. « Language Models are Few-Shot Learners »](https://arxiv.org/abs/2005.14165) — article fondateur établissant les exemples few-shot comme levier d\'optimisation hautement puissant ; la base du levier Exemples dans le framework des 6 leviers',
          ],
        },
      },
    },
    ja: {
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-ja.webp',
      title: 'プロンプト最適化の基礎',
      seoTitle: '2026年プロンプト最適化ガイド：6つのレバーと6ステップ',
      intro: 'プロンプト最適化は、AIの出力品質、一貫性、または精度を改善するために既存のプロンプトを反復的に改定するプロセスです。この包括的なガイドは、プロンプト最適化テクニックと基礎を教えます：6つのコア・レバー、6ステップ最適化プロセス、GPT-5.6、Claude、Geminiの前後の例、およびプロンプト最適化時に避けるべき7つの最も一般的なエラーです。',
      metaDescription: '6つのレバーと6ステップでプロンプトを最適化する方法を解説します。GPT-5.6、Claude、Gemini向けの最適化前後の比較例と、避けたい7つのよくある間違いも紹介します。',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '14分の読み物',
      educationalLevel: '初級',
      primaryTerm: 'プロンプト最適化',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: 'プロンプト最適化の基礎',
        description: 'プロンプト最適化テクニックとベストプラクティスを学ぶ：6つのコア・レバー、6ステップのプロセス、前後の例。GPT-5.6、Claude、GeminiのAIプロンプトを最適化する方法—すべてのモデルの基礎。',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['プロンプト最適化', 'プロンプト最適化テクニック', 'プロンプトを最適化する方法', 'AIプロンプトを改善する', 'プロンプトエンジニアリングの基礎', 'LLM最適化', 'GPT-5.6', 'Claude', 'Gemini', 'フューショット・プロンプティング', 'チェーン・オブ・ソート・プロンプティング'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'プロンプト最適化' },
          { '@type': 'Thing', name: 'フューショット・プロンプティング' },
          { '@type': 'Thing', name: 'チェーン・オブ・ソート・プロンプティング' },
          { '@type': 'Thing', name: 'LLM出力品質' },
          { '@type': 'Thing', name: 'AIプロンプトエンジニアリング' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'ja'),
        url: 'https://www.promptquorum.com/ja/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'ja',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'プロンプト最適化の6つのレバー',
        description: 'AI出力品質を決定する6つの独立した変数—各々は特定のプロンプト障害モードを修正するために調整できます。',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '具体性', description: 'タスクがどの程度正確に定義されているか。最適化の移動：曖昧な目的を正確な指示として書き直す。例：「要約する」→「≤20ワードで3つの重要な発見をリストアップする」。' },
          { '@type': 'ListItem', position: 2, name: 'コンテキスト', description: 'モデルが利用できる情報。最適化の移動：背景、対象者、制約を追加する。例：「レポートを書く」→「非技術的なCFO向けにレポートを書く」。' },
          { '@type': 'ListItem', position: 3, name: 'の例', description: '望ましい出力形式に対するモデルの理解。最適化の移動：1～3個の入出力ペアを追加する（フューショット）。望ましい形式を1回表示する。' },
          { '@type': 'ListItem', position: 4, name: '制約', description: 'モデルが出力できる内容の境界。最適化の移動：明示的な禁止事項を追加する。例：「専門用語を使わない。最大150ワード。」' },
          { '@type': 'ListItem', position: 5, name: '出力フォーマット', description: '応答の構造。最適化の移動：フォーマットを明示的に指定する。例：「JSONで応答：{title, summary, tags[]}」。' },
          { '@type': 'ListItem', position: 6, name: 'ロール/ペルソナ', description: 'モデルが採用する専門知識のレベル。最適化の移動：特定のロールを追加する。例：「B2B SaaSカンパニーのシニアデータアナリストとして行動する」。' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'プロンプトを6ステップで最適化する方法',
        description: 'プロンプト障害を診断し、GPT-5.6、Claude、Gemini全体でAI出力品質を向上させるための体系的な6ステップのプロセス。',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'ベースラインを確立する', text: '現在のプロンプトを代表的な入力で対象タスクで3回実行します。障害モードをドキュメント化します：間違ったフォーマット、幻覚、曖昧な出力、またはオフトピック応答。' },
          { '@type': 'HowToStep', position: 2, name: 'ルート・レバーを特定する', text: '障害を6つのレバーのいずれかにマップします：具体性、コンテキスト、例、制約、出力フォーマット、またはロール/ペルソナ。' },
          { '@type': 'HowToStep', position: 3, name: '1つの変数のみを変更する', text: '識別されたレバーに1つのターゲット変更を加えます。複数の変数を同時に変更しないでください—複数のことが変わった場合、改善を診断できません。' },
          { '@type': 'HowToStep', position: 4, name: '複数のモデルでテストする', text: 'GPT-5.6、Claude Opus 5、Gemini 3.1 Proで修正されたプロンプトを実行します。1つのモデルでのみ機能するプロンプトは脆弱です。' },
          { '@type': 'HowToStep', position: 5, name: '品質基準に対して測定する', text: 'タスク精度、フォーマット準拠、事実的根拠、3つの再実行での一貫性、およびモデル間の合意をチェックします。' },
          { '@type': 'HowToStep', position: 6, name: 'プロンプト・ライブラリに保存する', text: '変更内容とその動作を文書化します。バージョン管理します。テスト済みプロンプトは耐久性のある再利用可能なアセットです。' },
        ],
      },
      tableSchema: {
        '@context': 'https://schema.org',
        '@type': 'Table',
        name: 'プロンプト品質測定基準',
        about: 'プロンプト最適化の反復が成功したかどうかを測定するための6つの基準：タスク精度、フォーマット準拠、事実的根拠、一貫性、トークン効率、およびモデル間の合意。',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            'name': 'プロンプト最適化とは何ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プロンプト最適化は、特定のタスクのためのAI出力品質を改善するために既存のプロンプトを改定する反復的なプロセスです。障害モード（形式が違う、幻覚、曖昧な出力）を識別し、1つの変数（具体性、コンテキスト、例、制約、出力フォーマット、またはロール）を変更し、GPT-5.6、Claude Opus 5、Gemini 3.1 Proなどのモデル全体で結果をテストします。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化とプロンプトエンジニアリングの違いは何ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プロンプトエンジニアリングは、目的、コンテキスト、出力フォーマットなどの構成要素を使用して最初からプロンプト構造を設計する規律です。プロンプト最適化は既に書かれたプロンプトを改善する反復的なサブプロセスで、障害モードを診断してターゲット変更を適用します。プロンプトエンジニアリングで出発点を作成する必要があります；プロンプト最適化で改善します。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプトを最適化するのに何回の反復が必要ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ほとんどのタスクでは、2～4回のターゲット反復は失敗するプロンプトから信頼できるプロンプトに移動するのに十分です。各反復は1つの変数を変更し、3～5個の代表的な入力でテストする必要があります。5～6回の反復後に収穫逓減が設定されます—プロンプトがそれまでに安定していない場合、タスク定義自体を改定する必要があるかもしれません。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプトを最適化するときに最初に変更するべきレバーはどれですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '出力フォーマットで開始します。フォーマット非準拠—テーブルを要望したときにパラグラフを受け取るか、JSONが必要なときにプレーンテキストを受け取る—最も一般的で最速修正の障害モードです。正確な構造を指定してから、後続の反復で他の問題（精度、トーン、スコープ）に対処します。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化はすべてのAIモデルで機能しますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい、ただしモデル固有の調整があります。6つのコア最適化・レバー（具体性、コンテキスト、例、制約、出力フォーマット、ロール）はGPT-5.6、Claude Opus 5、Gemini 3.1 Pro、およびMistral Largeに適用されます。ただし、各モデルは命令密度に異なる方法で応答します。使用するモデルごとにテストしてください。',
            },
          },
          {
            '@type': 'Question',
            'name': '最も一般的なプロンプト最適化エラーは何ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '複数の変数を同時に変更する。同じ改定に例を追加し、出力フォーマットを変更し、ロール指示を追加する場合、どの変更が改善（または低下）した出力を決定できません。効果的な最適化は反復ごとに1つの変数を変更します。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化はAIの幻覚を減らすことができますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい、適切なテクニックで。係留コンテキスト（「提供されたドキュメントのみに基づいて回答してください」）、事実的に正しい出力を含むフューショット例、および明示的な制約（「数字を発明しない—提供されたテキストのデータのみを使用」）を追加すると、幻覚の低減に役立つ場合があります。自己一貫性プロンプティング—複数の出力を生成し、最も一般的なものを返す—低確率の作成をさらに減らします。',
            },
          },
          {
            '@type': 'Question',
            'name': '代わりにファインチューニングを使用すべきですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プロンプト最適化が天井に達したときにファインチューニングを使用します—通常、必要な動作がドメイン固有の場合、数千の出力全体で一貫した文体の声が必要な場合、またはベース・モデルのトレーニングにない知識に依存する場合。プロンプト最適化はより速く安価で、ファインチューニングの前に常に最大化する必要があります。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプトが完全に最適化されているかどうかを知るにはどうすればよいですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プロンプトが十分に最適化される場合：(1) 4～5個の代表的な入力で正しい出力を生成（2）再実行時に一貫性のある出力を生成（3）少なくとも2つのモデル（GPT-5.6およびClaudeなど）で機能（4）ポスト処理なしでフォーマット指定を満たします。完璧なプロンプトは存在しません—「最適化」はユースケースに十分な信頼性を意味します。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化は画像プロンプト（テキストから画像）に適用されますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '原理は適用されます—具体性、制約、および例（リファレンス画像）はすべてDALL-E 3およびStable Diffusionなどの画像モデルに対して有効なレバーです。ただし、メカニクスは異なります：画像モデルは制約としてのスタイル修飾子、アスペクト比指定、負のプロンプトに応答します。最適化プロセス（ベースライン→診断→1つの変数を変更→テスト）は同一です。',
            },
          },
          {
            '@type': 'Question',
            'name': '自動プロンプト最適化はどのように機能しますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '自動プロンプト最適化は、2番目のAIモデル（またはメタ・プロンプティング・ループ内の同じモデル）を使用して、人間の介入なしにプロンプトを改写および改善します。DSPy（Stanford）、TextGrad、APE（Automatic Prompt Engineer）などのツールは候補プロンプトを生成し、メトリック（精度、フォーマット準拠、ユーザー評価）に対して評価し、最適な変種を選択します。手動最適化は理解されたタスクでより速い；自動最適化は、ラベル付き評価データがあり、数百の変種をテストする必要がある場合、より良いスケーリングを行います。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化とプロンプト・チューニングはどのように異なりますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プロンプト最適化は、モデル重みを変更することなく、離散テキスト・プロンプト—自然言語で記述した指示—を改善します。プロンプト・チューニング（Lester et al. 2021によって導入）は、入力の前に提示され、勾配下降によってモデルの横または代わりにトレーニングされる連続的なソフト・プロンプト・ベクトルを学習します。プロンプト・チューニングは計算能力とトレーニングデータを必要とします；プロンプト最適化はどちらも必要としません。ほとんどの本番ユースケースでは、最初に離散プロンプトを最適化し、ハード品質の天井に達した場合にのみプロンプト・チューニングを検討してください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化の最良のツールは何ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '唯一の最良ツールはありません。たとえば、PromptQuorum（当サイト運営者の製品。1つのプロンプトをGPT-5.6、Claude、Geminiに同時に送信して比較分析を行う）、DSPy（自動メトリック・ベース選択を備えたプログラム的プロンプト最適化）、LangSmith（プロンプト・バージョン管理、A/Bテスト、LangChain・パイプラインの追跡）、Promptfoo（テストケースと回帰テストに対してプロンプトを実行するオープン・ソース・CLI）およびPromptLayer（プロンプト・バージョン管理と分析）です。手動反復の場合、ほとんどの単一部分最適化作業では、プロンプト・バージョン、入力、出力、および基準に対するパスド/フェイルドを記録する表で十分です。',
            },
          },
          {
            '@type': 'Question',
            'name': 'システム・プロンプトを最適化するにはどうすればよいですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'システム・プロンプト最適化は、2つの追加制約を備えた同じ6ステップ・プロセスに従います。最初に、システム・プロンプトはすべてのターンを保持します—あまりに具体的な指示は、予期しなかった入力でのパフォーマンスを低下させることができます。1つだけではなく、5～10個の多様な代表的な入力でテストしてください。次に、システム・プロンプト・レングスは重要です：非常に長いシステム・プロンプトは、後続のユーザー・ターンの指示追従を削減する可能性があります。簡潔さのために最適化してください：システム・プロンプト内のすべての指示は必要である必要があります。テスト・セットの出力を変更しない指示を削除してください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化にChatGPTを使用できますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい。失敗したプロンプトと障害モード説明を提供することにより、プロンプトを改写するようGPT-5.6に求めることができます：「このプロンプトは曖昧な出力を生成します。3点構造化応答を要求するように改写してください」。これはメタ・プロンプティングの形式です—モデルを使用して独自の入力を改善します。制限は、GPT-5.6があなたの特定の評価基準が必要なものではなく、それがより良いと思うために最適化することです。改写されたプロンプトを実際の入力でテストし、改定を受け入れる前に実際のパスド/フェイルド基準に対して測定してください。',
            },
          },
          {
            '@type': 'Question',
            'name': '機械学習のコンテキストにおけるプロンプト最適化は何を意味しますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '機械学習のコンテキストでは、プロンプト最適化は、パイプラインの一部として言語モデルに入力されるプロンプトを改善する技術を指します—モデル自体を再トレーニングせずに。これには、離散プロンプト最適化（自然言語の指示の改写）と連続プロンプト・チューニング（勾配下降によるソフト・トークン・エンベディングの学習）の両方が含まれます。ML本番システムでは、プロンプト最適化は通常、推論パイプラインの一部です：プロンプトはハイパーパラメータとして扱われ、保留評価セットに対して最適化されます。モデルトレーニング中の学習レート選択と同様です。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化はどのくらい出力品質を改善しますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'モデル、タスク、元のプロンプトによって異なるため、一般的な改善率はありません。同じテスト入力で新旧のプロンプトを実行し、合格率を比較して測定してください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'モデルごとに別々にプロンプトを最適化すべきですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'モデルに依存しない最適化で始めてください—6つのレバー（具体性、コンテキスト、例、制約、出力フォーマット、ロール）を適用し、GPT-5.6、Claude Opus 5、Gemini 3.1 Proでテストしてください。十分に構造化されたプロンプトは通常、3つすべてで十分に機能します。クロス・モデル・テストで相違する結果が示される場合にのみ、モデル固有の変種を追加します。試す価値のあるモデル固有の調整：Claudeは長いマルチパート・システム・プロンプトをより良く処理；GPT-5.6は明示的なJSON形式要求から利益を得る；Gemini 3.1 Proは長いドキュメント・タスクで明示的なセクション・ヘッダーから利益を得ます。プロンプト・ライブラリ内のモデル固有の変種をバージョン・ノート付きで文書化してください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化とRAGの違いは何ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プロンプト最適化は、プロンプトの指示と構造を改善します。検索増強生成（RAG）は、関連ドキュメントを取得し、推論時にモデルが利用可能な情報を改善し、プロンプト・コンテキストに挿入します。2つは相補的です：RAGはモデルが正しい事実を持たないという問題を解決；プロンプト最適化はモデルが正しくこれらの事実を処理しないという問題を解決します。完全に最適化されたRAG・パイプラインには、良好な検索（正しいドキュメントが検索される）と十分に最適化されたプロンプト（モデルは検索されたコンテンツのみを使用し、ソースを引用し、回答を正しくフォーマットするよう指示される）の両方が必要です。',
            },
          },
          {
            '@type': 'Question',
            'name': 'GPT-5.6に対してプロンプトを最適化するにはどうすればよいですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'GPT-5.6では次の4つの最適化を試す価値があります：(1)システム・プロンプト内の明示的なJSON形式要求—構造化出力ではスキーマを正確に定義します。(2)システム・プロンプト内のMarkdownヘッダー—関心事を分離するにはH2セクション（## ロール、## タスク、## 出力フォーマット）を使用します。(3)厳密な制約—語数や長さの制限がないと、回答が必要以上に長くなることがあります；「150ワード以下で回答」または「JSONオブジェクトのみを返し、説明はしない」を追加します。(4)ツール使用フレーミング—取得または計算を含むタスクの場合、散文指示の代わりに機能定義としてプロンプトを作成してください（Assistants APIで有効なツールを使用する場合）。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプト最適化でどのレバーを最初に変更すべきですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '出力フォーマットから始めましょう。フォーマット不適合（表が欲しかったのに段落が来る、JSONが必要なのにプレーンテキストが来る）は最も一般的で最も素早く修正できる障害モードです。希望する構造を正確に指定し、その後の反復で他の問題（精度、トーン、範囲）に対処します。',
            },
          },
          {
            '@type': 'Question',
            'name': 'プロンプトが完全に最適化されていることをどうやって知りますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'プロンプトが十分に最適化されているのは：(1) 4〜5つの代表的な入力で正しい出力を生成する、(2) 再実行で一貫した出力を生成する、(3) 少なくとも2つのモデルで動作する、(4) 後処理なしにフォーマット仕様を満たす、という条件を満たすときです。完璧なプロンプトは存在しません—「最適化された」とは、ユースケースに対して十分に信頼できることを意味します。',
            },
          },
        ],
      },
      toc: [
      ],
      sections: {
        tldr: {
          title: '重要なポイント',
          isTldr: true,
          items: [
            'プロンプト最適化=既存のプロンプトを反復的に改定して出力品質を向上させる',
            '6つのレバー：**具体性**、**コンテキスト**、**例**、**制約**、**出力フォーマット**、**ロール/ペルソナ**',
            '毎回1つのレバーを変更する—変数を分離することが実際に機能するものを見つける方法',
            '≥2つのモデル（GPT-5.6、Claude、Gemini）でテストして、改善がモデル非依存であることを確認',
            '一般的な障害モード：一度に多くの変数を変更すると診断が不可能になる',
            'テスト済みで最適化されたプロンプトは耐久性のあるアセット—プロンプト・ライブラリに保存',
          ],
        },

        localLLMTldr: {
          title: 'ローカルLLMユーザーの重要なポイント',
          isTldr: true,
          items: [
            'ローカルモデルではプロンプト最適化がより重要—量子化されたモデル（4ビット、8ビット）は曖昧な指示に敏感な場合があります',
            'OllamaとLM Studioは同じ6つの最適化レバーをサポート；異なるのは、より小さなモデル（LLaMA 3.1 8B、Mistral Small）では、より明示的な制約と短い入力が必要になることが多い点です',
            '量子化されたモデルは指示追従の信頼性が下がる場合があります—より単純で処方的なプロンプトを使用し、明示的な出力フォーマットと同時制約が少ない',
            '温度デフォルトは異なる：Ollamaはデフォルトで0.8（より高い創造性、低い一貫性）に設定；構造化出力タスクで複数の実行にわたり一貫性を必要とする場合は温度を0.1～0.3に設定',
            '品質の差を見積もるには、同じテスト入力をローカルモデルとクラウドモデルで実行します。たとえばPromptQuorumでGPT-5.6やClaudeと比較します',
          ],
        },

        definition: {
          title: 'プロンプト最適化とは？',
          content: [
            '**プロンプト最適化は、特定のタスクのためのAI出力の品質、精度、または一貫性を改善するために既存のプロンプトを改定する反復的なプロセスです。** これはすべての主要なモデルに適用されます—GPT-5.6、Claude Opus 5、Gemini 3.1 Pro、およびOllamaやLM Studioを介して実行されるローカルモデル。プロンプトエンジニアリングが初期プロンプト構造を設計する一方、プロンプト最適化は何が失敗しているかを診断し、出力が定義された標準を満たすまでターゲット変更を適用します。',
            'プロンプト最適化はプロンプトエンジニアリングのサブプロセスです。常に機能するプロンプトで開始し、毎回1つの変更を加えます。この変数の分離が診断を可能にします—同時に具体性、出力フォーマット、制約を改定する場合、どの変更が結果を改善したかを判断できません。プロンプト最適化のスキルは、障害を正しいレバーにマップし、その変数のみを変更し、改善を測定することです。',
            'これが重要な理由：同じモデルはほぼ同一のプロンプトから根本的に異なる出力を生成します。「大体正しい」と「信頼できる」の違いは運ではなく—体系的な最適化です。最適化されていないプロンプトは一部の入力で成功し、他では失敗します。最適化されたプロンプトは代表的な入力のサンプル全体で一貫して成功します。',
          ],
        },

        vsPromptEngineering: {
          title: 'プロンプト最適化 対 プロンプトエンジニアリング',
          content: [
            '**プロンプト最適化とプロンプトエンジニアリングは順序に機能する補完的な規律です。** プロンプトエンジニアリングは構成要素（目的、コンテキスト、例、制約、出力フォーマット、ロール）を使用して最初からプロンプトを設計します。プロンプト最適化は既存のプロンプトを取得し、反復的な改定を通じて改善します。両方が必要です：プロンプトエンジニアリングはあなたを「機能する」に導きます；プロンプト最適化はあなたを「信頼できる」に導きます。',
            'こう考えてください：プロンプトエンジニアリングが構造を構築；プロンプト最適化がそれを洗練させます。プロンプトエンジニアリングは「このプロンプトはどのような要素を持つべきか？」と尋ねます。プロンプト最適化は「なぜこのプロンプトは失敗し、どの単一の変更がそれを修正するか？」と尋ねます。区別は重要です。なぜなら戦略は異なるからです。エンジニアリングは原則と構成要素から始まります。最適化は障害診断から始まります。',
          ],
          columns: ['次元', 'プロンプトエンジニアリング', 'プロンプト最適化'],
          rows: [
            { '次元': '開始点', 'プロンプトエンジニアリング': '白紙', 'プロンプト最適化': '既存のプロンプト' },
            { '次元': '目標', 'プロンプトエンジニアリング': '構造を設計する', 'プロンプト最適化': '出力を改善する' },
            { '次元': 'メソッド', 'プロンプトエンジニアリング': 'フレームワーク、構成要素', 'プロンプト最適化': '分離、変更、テスト、測定' },
          ],
        },

        whyOptimize: {
          title: 'プロンプト最適化が重要な理由',
          content: [
            '曖昧なプロンプトは曖昧な出力を生成します。不十分に指定されたプロンプトはオフターゲット応答を生成します。月曜日に機能するプロンプトは、入力がわずかに変わると金曜日に失敗する可能性があります。体系的な診断と的を絞った改定により、こうしたばらつきを減らせます。',
            'これは説明用の例で、実測ではありません。「この記事を要約する。」では、実行ごとに長さや焦点が変わることがあります。出力フォーマット（「3つのポイント、各20語以内」）、ロール（「アナリスト」）、具体的な指示（「方法論ではなく3つの重要な発見をリストアップ」）を加えると、ばらつきは通常小さくなります。',
            '規制の背景については[地政学とAI](/ja/prompt-engineering/geopolitics-and-ai)を参照してください。',
          ],
        },

        callout1: {
          blockquote: '数学の文章題ベンチマークGSM8Kでは、5400億パラメータのPaLMモデルに段階的な推論付きの解答例をいくつか示すと（フューショットのチェーン・オブ・ソート）、再学習なしで正解率が標準プロンプトの17.9％から56.9％に向上しました。',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          title: '6つの最適化レバー',
          content: [
            '**すべてのプロンプトは、出力を改善するために調整できる6つの独立した変数で構成されています。** これらは最適化の「レバー」です。プロンプトが失敗するとき、障害はこれらのレバーの1つ以上が正しく設定されていないことにさかのぼります。最適化のスキルは、症状を正しいレバーにマップし、それを変更し、結果を測定することです。',
          ],
          columns: ['レバー', '変わったもの', '最適化の移動', '例'],
          rows: [
            { 'レバー': '具体性', '変わったもの': 'タスクがどの程度正確に定義されているか', '最適化の移動': '曖昧な目的を正確な指示として書き直す', '例': '「要約する」→「≤20ワードで3つの重要な発見をリストアップする」' },
            { 'レバー': 'コンテキスト', '変わったもの': 'モデルが利用できる情報', '最適化の移動': '背景、対象者、制約を追加する', '例': '「レポートを書く」→「非技術的なCFO向けにレポートを書く」' },
            { 'レバー': '例', '変わったもの': '望ましい出力フォーマットに対するモデルの理解', '最適化の移動': '1～3個の入出力ペアを追加する（フューショット）', '例': '望ましい形式を1回表示する' },
            { 'レバー': '制約', '変わったもの': 'モデルが出力できる内容の境界', '最適化の移動': '明示的な禁止事項を追加する', '例': '「専門用語を使わない。最大150ワード。」' },
            { 'レバー': '出力フォーマット', '変わったもの': '応答の構造', '最適化の移動': 'フォーマットを明示的に指定する', '例': '「JSONで応答：{title, summary, tags[]}」' },
            { 'レバー': 'ロール/ペルソナ', '変わったもの': 'モデルが採用する専門知識のレベル', '最適化の移動': '特定のロールを追加する', '例': '「B2B SaaSカンパニーのシニアデータアナリストとして行動する」' },
          ],
        },

        callout2: {
          blockquote: 'GPT-3の大規模化により、プロンプト内の少数の例だけを使い勾配更新を行わないフューショット学習が、一部のタスクでは従来の最先端のファインチューニング手法に匹敵し得ることが示されました。',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        callout3: {
          blockquote: '事前登録されたオンライン実験では、大卒の専門職453人が職種ごとの文章作成タスクに取り組みました。ChatGPTを利用すると平均所要時間が40％短縮し、成果物の品質が18％向上しました。参加者間の格差も縮小しました。',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        optimizationProcess: {
          title: '6ステップの最適化プロセス',
          content: [
            '**プロンプト最適化は体系的で測定可能なプロセスです。** 各ステップが診断を絞り込みます：症状を特定し、レバーにマップし、1つの変数を変更し、複数のモデルでテストし、改善を測定します。正確なプロセスは次の通りです：',
          ],
          items: [
            '**ステップ1：ベースラインを確立する。** 現在のプロンプトを代表的な入力でターゲットタスク上で3回実行します。障害モードをメモします：出力は長すぎるか短すぎるか？間違ったフォーマット？幻覚？オフトピック？接線？このベースラインは重要です—ベースラインなしで改善を測定することはできません。',
            '**ステップ2：ルート・レバーを特定する。** 障害を6つのレバーのいずれかにマップします。例：「出力はポイントの代わりにテキストの壁」→出力フォーマット・レバー；「回答は曖昧」→具体性・レバー；「トーンが間違っている」→ロール・レバー；「作成されたファクトが含まれている」→コンテキストまたは制約・レバー。',
            '**ステップ3：1つの変数を変更する。** 識別されたレバーに対して単一のターゲット変更を加えます。目的を編集しないでください、例を追加してください、そして同じ改定でフォーマットを変更してください—複数のことが変わった場合、改善を属性付けることはできません。この分離は交渉不可能です。',
            '**ステップ4：複数のモデルでテストする。** 修正されたプロンプトをGPT-5.6、Claude Opus 5、Gemini 3.1 Proで実行します。1つのモデルでのみ機能するプロンプトは脆弱でモデル固有です。PromptQuorumを使用して1つのプロンプトを3つすべてに同時に送信し、応答を並べて比較します。モデル全体の合意はプロンプトが堅牢であることを意味します；分岐はさらなる改善が必要であることを意味します。',
            '**ステップ5：基準に対して測定する。** 精度は改善しましたか？フォーマットは準拠していますか？幻覚は減少しましたか？出力は現在一貫性テストに合格していますか（3回連続で実行）？測定は変更が機能したことを確認する方法です。変更を加えましたが改善が見られなかった場合、変更は根本原因に対処しませんでした—別のレバーを試してください。',
            '**ステップ6：プロンプト・ライブラリに保存する。** テスト済みで最適化されたプロンプトは再利用可能なアセットです。変更内容とその動作を文書化します。バージョン管理します。保存され、バージョン管理されるプロンプト・ライブラリは、一度問題を解決したワンオフ・プロンプトよりもはるかに価値があります。',
          ],
        },

        measurementCriteria: {
          title: 'プロンプト品質を測定する方法',
          content: [
            '**測定できないものは最適化できません。** 以下の基準は、プロンプト最適化が成功したかどうかを定義します。各反復後にこれらのチェックポイントを使用してください：',
          ],
          columns: ['基準', 'チェックする内容', '合格/不合格シグナル'],
          rows: [
            { '基準': 'タスク精度', 'チェックする内容': '出力は実際の質問に回答していますか？', '合格/不合格シグナル': '既知の正しい回答と比較' },
            { '基準': 'フォーマット準拠', 'チェックする内容': '出力は指定された構造と一致していますか？', '合格/不合格シグナル': 'JSONは解析されたか？ポイントは正しい長さか？' },
            { '基準': '事実的根拠', 'チェックする内容': '具体的なクレームは正しいか？', '合格/不合格シグナル': '3～5つのファクトをスポットチェック' },
            { '基準': '一貫性', 'チェックする内容': '再実行により同様の出力が生成されるか？', '合格/不合格シグナル': '同じプロンプトを3回実行—出力は構造的に異なるか？' },
            { '基準': 'トークン効率', 'チェックする内容': '出力長は適切か？', '合格/不合格シグナル': 'トークン数と情報密度を測定' },
            { '基準': 'モデル間の合意', 'チェックする内容': '2～3モデルが同様の結果を生成するか？', '合格/不合格シグナル': 'PromptQuorum経由でGPT-5.6、Claude、Geminiに送信—合意=堅牢' },
          ],
        },

        beforeAfterExamples: {
          title: 'プロンプト最適化は実践ではどのように見えるか？',
          content: [],
          items: [
            '**悪い：**「この記事を要約する。」| **改善：**「3つのポイントで要約、≤20語各。ビジネス影響に焦点を当てます。」| **理由：**出力フォーマットの指定でばらつきを減らせる場合があります。',
            '**悪い：**「このコードを確認する。」| **改善：**「(1)正確性、(2)パフォーマンス、(3)セキュリティを確認します。行番号を引用します。最大3問。」| **理由：**ロールと制約で一般的すぎる指摘を減らせる場合があります。',
            '**悪い：**「これらの論文を統合する。」| **改善：**「提供されている5つの論文からのみ統合します。フォーマット：[発見A]。[発見B]。[含み]。発明しないでください。」| **理由：**コンテキストと制約で幻覚を減らせる場合があります。',
            '**悪い：**「顧客にメールを書く。」| **改善：**「サポートを2週間待った怒った顧客にメールを書く。1回謝罪、2つのソリューションを提供、推奨をお願いします。≤150ワード。」| **理由：**具体性+制約はトーンと関連性を改善します。',
            '**悪い：**「このテーブルからデータを抽出する。」| **改善：**「名前と金額をJSONとして抽出：[{\\\"name\\\": \\\"...\\\", \\\"amount\\\": ...}]。説明なし。」| **理由：**明示的なフォーマットで不要な文章を減らせる場合があります。',
            '**悪い：**「このコードは安全ですか？」| **改善：**「チェック：(1)SQLインジェクション、(2)未検証ユーザー入力、(3)ハードコードされたシークレット。回答：[行N：問題]。誤検知なし。」| **理由：**具体性+制約は精度を改善します。',
          ],
        },

        callout4: {
          blockquote: 'BCGのコンサルタント758人による実験では、AIの能力の範囲内にある現実的な18タスクで、AIを使ったグループの成果物は対照群より40％超高い品質と評価されました。一方、範囲外になるよう選ばれたタスクでは、AIを使ったコンサルタントが正しい解を出す確率は19ポイント低くなりました。',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        definitionBoxes: {
          title: 'これらのプロンプト最適化用語は何ですか？',
          content: [],
          items: [
            '**プロンプト最適化** — 失敗モードを診断し、（具体性、コンテキスト、例、制約、フォーマット、またはロール）1つずつ1つの変数を変更することで出力品質を改善するためにプロンプトを改定する反復的なプロセス。あなたが最適化している構造要素については[すべてのプロンプトが必要とする5つの構成要素](/ja/prompt-engineering/5-building-blocks-every-prompt-needs)を参照してください。',
            '**フューショット・プロンプティング** — モデルに目的のフォーマットまたはパターンを教えるためにプロンプトに1～3個の入出力例を含める。[ゼロショット対フューショット・プロンプティング](/ja/prompt-engineering/zero-shot-vs-few-shot)を参照して、主な最適化・レバーとして例を追加するときを確認してください。',
            '**チェーン・オブ・ソート（CoT）** — モデルにステップバイステップで推論を求める（「答える前に考える」）これにより多段階の推論が改善する場合があります。効果はモデルとタスクによって異なります。詳細なテクニックについては[チェーン・オブ・ソート・プロンプティング](/ja/prompt-engineering/chain-of-thought-prompting)を参照してください。',
            '**制約** — 明示的な禁止または制限（例、「専門用語を使わない」、「最大150ワード」、「ソースのみを引用」）これは出力スコープを絞り込み、一般的な障害モードを防止します。[制約されたプロンプティング](/ja/prompt-engineering/constrained-prompting)を参照して、高度な制約パターンを確認してください。',
            '**トークン** — モデルが処理する最小のテキストユニット；英語では約4文字または1単語。プロンプト長と出力予算はトークンで測定されます。コスト計算については[トークン、コスト、限度](/ja/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting)を参照してください。',
            '**幻覚** — 自信を持っているが事実的に不正確な出力；モデルが事実を発明し、存在しない研究を引用するか、根拠のない主張を繰り返すときに発生します。[AIの幻覚：なぜAIが物事を作成するのか](/ja/prompt-engineering/ai-hallucinations-why-ai-makes-things-up)を参照—係留コンテキスト、例、および制約を追加することで軽減。',
            '**ファインチューニング** — ドメイン固有のラベル付きデータでモデルウェイトを再トレーニング；プロンプト最適化が必要な品質に達することができないときに使用されます。ファインチューニングの前に常に最適化を最大化—それはより遅く、より高価です。',
            '**RAG（検索増幅生成）** — モデルに答えるように求める前にプロンプト・コンテキストに検索されたドキュメントを注入します。[RAG説明](/ja/prompt-engineering/rag-explained)を参照—最適化を補完（RAGは情報を改善；最適化はモデルがそれをどのように使用するかを改善）。',
            '**システム・プロンプト** — モデルのロール、制約、およびすべてのターンに対する動作を設定する永続的な指示。[システム・プロンプト対ユーザー・プロンプト](/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)を参照—ユーザーに直面したプロンプトから別の最適化テストが必要。',
            '**具体性** — タスク定義の精度；曖昧な指示（「要約する」）から正確な要件（「3つのポイント、≤20ワード各」）に移動。最初の、そしてしばしば最高影響最適化・レバーを調整すること。',
          ],
        },

        modelSpecificTips: {
          title: 'モデル固有の最適化のヒント',
          content: [
            '**6つの最適化・レバーはすべての主要なモデル—GPT-5.6、Claude Opus 5、Gemini 3.1 Pro、およびMistral Largeに適用されます。** ただし、各モデルは異なる方法で命令密度、フォーマット特異性、およびロール定義に応答します。モデル固有のチューニング・ヒントを以下に示します：これらは一般的な出発点であり、測定結果ではありません。ご自身の入力で確認してください。',
          ],
          items: [
            '**GPT-5.6（OpenAI）：** システム・プロンプトの明示的なJSON形式リクエストおよびマークダウン・ヘッダーによく応答します。命令追従は強力—厳密な制約は過剰説明を減らします。GPT-5.6プロンプトが過剰説明している場合は、制約を追加します：「簡潔であります。求めない限り推論を説明しないでください。」',
            '**Claude Opus 5（Anthropic）：** ニュアンスのある、マルチパート指示で優れています。長い、詳細なシステム・プロンプトを確実に処理します。明示的な出力長ガイダンス（「≤200ワードで応答」）のメリット。簡潔性のために最適化している場合は、具体的：「150ワード以下で応答。」',
            '**Gemini 3.1 Pro（Google DeepMind）：** 大きなコンテキストウィンドウがあり、長文書の分析に向いています。プロンプト内の明示的なセクション・ヘッダーは構造化出力一貫性を改善します。長いドキュメントを処理している場合は、ヘッダーを追加：「##入力ドキュメント\n[document]\n##タスク\n[task]。」',
            '**Mistral Large（Mistral AI）：** 明示的なロール定義と処方的な指示フレーズングのメリット。プロンプトがGPT-5.6で機能するが Mistralでは機能しない場合は、指示をより明示的にし、ロールを追加：「あなたは[特定のロール]。あなたのタスクは[明示的な目的]です。」',
          ],
        },

        localLLMExamples: {
          title: 'ローカルLLMのプロンプト最適化（Ollama、LM Studio）',
          content: [
            '**Ollamaまたは LM Studioを介して実行されるローカルモデルは同じ6つの最適化・レバーに応答します、ただしより厳しい許容範囲で。** 量子化されたモデル（4ビット、8ビット）は指示追従の信頼性が下がる場合があるため、単純で明示的なプロンプトから始めてください。以下の例は3つの一般的なローカルLLM障害モードの前後の最適化を示しています。以下は説明用のシナリオであり、テスト結果ではありません。モデル名は一般的なローカル構成を示すだけで、記載した失敗は起こり得る例であり、各モデルで測定した欠陥ではありません。',
          ],
          items: [
            '**例1：量子化されたモデル出力矛盾（レバー：出力フォーマット+制約）**\n_モデル：_ Ollama経由LLaMA 3.1 8B（4ビット量子化）\n_弱いプロンプト：_ 「このサポート・チケットを要約する。」\n_起こり得る障害モード：_ 実行間で出力が大きく変動—時には文、時にはリスト、時には同じユーザーに対する質問。\n_変更されたレバー：_ 出力フォーマット+温度制約。\n_最適化されたプロンプト：_ 「このサポート・チケットをちょうど2文に要約します。文1：顧客の問題。文2：彼らが試したもの。他のテキストなし。」\n_追加の修正：_ `ollama run llama3.1`を起動し、`/set parameter temperature 0.1`を入力します。\n_狙い（実測結果ではありません）：_ 2文の要約を得ることです。お使いのモデルとチケットで確認してください。',
            '**例2：LM Studioのコンテキスト長制約障害（レバー：具体性+コンテキスト）**\n_モデル：_ LM Studio経由Mistral Small Instruct（Q4_K_M量子化、4096トークンコンテキスト）\n_弱いプロンプト：_ 「このドキュメントを分析してキーリスクをリストアップします。」[3,000単語のドキュメント全体が貼り付けられた]\n_起こり得る障害モード：_ モデルは分析の途中で切り詰められ、ドキュメントの最後の3番目を見逃し、切り詰めを示さずに不完全な出力を生成します。\n_変更されたレバー：_ 具体性—スコープをコンテキスト予算内に収まるように減らします。\n_最適化されたプロンプト：_ 「あなたはリスク分析者です。次のドキュメント抜粋（最初の1,500単語のみ）を読んで、最大5つの特定のリスク、各≤15ワードをリストアップします。フォーマット：リスク1：[説明]。リスク2：[説明]。5の後に停止します。」\n_狙い（実測結果ではありません）：_ コンテキストウィンドウに収まる分析を得ることです。出力が途中で切れていないか確認してください。',
            '**例3：量子化されたモデルでの指示オーバーライド（レバー：制約）**\n_モデル：_ Ollama経由Phi-3 Mini\n_弱いプロンプト：_ 「このテキストからすべての日付を抽出します。JSONのみを返します。」\n_起こり得る障害モード：_ モデルはJSONとパラグラフ説明を返します（「見つけた日付は...」）。小さなモデルは、フォーマットが指定されている場合でも非請求のコメンタリーを追加することが頻繁です。\n_変更されたレバー：_ 制約—明示的な禁止。\n_最適化されたプロンプト：_ 「下のテキストからすべての日付を抽出します。JSONの配列のみを返します。説明なし。プリアンブルなし。コメントなし。出力：[\\\"date1\\\", \\\"date2\\\", ...] 」\n_狙い（実測結果ではありません）：_ 余分な文章のないJSONを得ることです。小型モデルは文章を追加することがあるため、パースして検証してください。',
          ],
        },

        commonMistakes: {
          title: '7つの最も一般的な最適化エラー',
          content: [
            '**ほとんどの最適化は概念的な誤解ではなく、プロセスエラーが原因で失敗します。** ここに最も一般的な落とし穴と回避する方法があります：',
          ],
          items: [
            '**エラー1：複数の変数を同時に変更する。** 例を追加し、出力フォーマットを変更し、同じ改定でロールを調整します。今出力が改善されるとき、どの変更が役に立ったかわかりません。効果的な最適化は反復ごとに1つの変更を分離します。',
            '**エラー2：単一入力で最適化する。** 1つの例をテストし、改善を見て、成功を宣言します。実際の使用では、プロンプトは異なる入力で失敗します。5～10個の代表的な例でテストします。プロンプトが5つすべてで成功しない場合は、最適化を続けます。',
            '**エラー3：1つのモデルのみのために最適化する。** GPT-5.6のために最適化、完璧な結果を見て、その後Claude上で展開します。そこでは失敗する可能性があります。各モデルは命令追従動作が若干異なります。少なくとも2モデル（GPT-5.6およびClaude Opus 5）でテスト；理想的には3。',
            '**エラー4：出力フォーマットを無視する。** プロンプトは正しい事実を生成しますが、間違った構造で。「形式が違う」は最も一般的で、最速修正の障害モードです。常に指定：「JSONで応答、フィールド：[リスト]」または「マークダウン表で応答、列：[リスト]。」フォーマット準拠はしばしば使用可能な出力と使用不可能な出力の違いです。',
            '**エラー5：オーバープロンプティング。** 200トークン・プロンプトに15の制約、5つのロール説明、10個の例を追加します。多くの同時指示はモデルを圧倒します。最小限から始めて、必要な制約のみを追加します。プロンプトが機能していない場合、最初の移動は拡張ではなく簡素化です。',
            '**エラー6：最適化とファインチューニングを混同する。** 最適化はプロンプトを改善；ファインチューニングはモデルを訓練します。すべての6つのレバーを試しましたが、プロンプトはまだ失敗しています、モデルはタスクの知識または能力が不足している可能性があります—それは最適化の問題ではなく、ファインチューニングの問題です。ファインチューニングは通常、はるかに時間と費用がかかります。最初にプロンプト最適化を最大化してください。',
            '**エラー7：最適化されたプロンプトを保存しない。** プロンプトを最適化し、展開し、その後6ヶ月間同じプロンプトを再最適化します。その機能のバージョンを保存していないため。プロンプト・ライブラリ—バージョン管理、ドキュメント化、共有—最適化作業を永続的なアセットに変換します。',
          ],
        },

        advancedTechniques: {
          title: 'プロンプト最適化テクニック：高度な方法',
          content: [
            '**6つのコア・レバーを超えて、高度なプロンプト最適化テクニックは特定の障害モードを修正するために特殊なパターンを適用します。** これらのテクニックは複数のレバーを結合するか、より難しい問題を解決するための層制約。あなたの最適化チャレンジに基づいて適用するテクニックを学びます：',
          ],
          items: [
            '[フューショット対ゼロショット](/ja/prompt-engineering/zero-shot-vs-few-shot) : モデルが出力を正しくフォーマットしていないか、または必要なスタイルが不足している場合、プロンプトに1～3個の入出力ペアを追加します。フューショット例はフォーマットを教える最も直接的な方法です。',
            '[チェーン・オブ・ソート](/ja/prompt-engineering/chain-of-thought-prompting) : マルチステップ推論障害を修正するために「答える前にステップバイステップで考える」を挿入します。このテクニックで多段階の推論が改善する場合があります。効果はモデルとタスクによって異なります。',
            '[制約されたプロンプティング](/ja/prompt-engineering/constrained-prompting) : 範囲とスタイル障害を修正するために明示的な禁止（「専門用語を使わない」、「数字を発明しない」、「入力を繰り返さない」）を追加します。制約は指示より強い。',
            '[自己一貫性](/ja/prompt-engineering/self-consistency-prompting) : プロンプトの出力を3～5回独立して生成し、最も一般的な回答を返します。これはモデルの実行を組み合わせることで低確率のファクトでの幻覚を減らします。',
            '[構造化出力](/ja/prompt-engineering/structured-output-and-json-mode) : JSON、マークダウン表、またはその他のマシン読み取り可能な形式を要求してフォーマット準拠を修正します。構造化出力は散文より解析が速く、エラーが少ない。',
          ],
        },

        keyTerms: {
          title: 'プロンプト最適化の重要な用語とは？',
          items: [
            '[フューショット・プロンプティング](/ja/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — プロンプトに少数の入出力例を含めることで、モデルに望ましいパターンやフォーマットを推論させる；6レバー最適化フレームワークにおける「例」レバー',
            '[チェーン・オブ・ソート（CoT）](/ja/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — 答える前にモデルにステップバイステップで推論させる；多段階推論の障害を修正する主要なテクニック',
            '[自己一貫性（Self-consistency）](/ja/prompt-engineering/prompt-engineering-glossary#self-consistency) — 複数の出力を生成し、最も一般的な回答を返す；低確率の事実における幻覚率を削減する',
            '[ゼロショット・プロンプティング](/ja/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — 例なしでのプロンプティング；フューショット最適化を測定する基準となるベースライン',
            '[幻覚（Hallucination）](/ja/prompt-engineering/prompt-engineering-glossary#hallucination) — 自信ありげに聞こえるが事実として誤っている出力；最適化が対象とする主要な障害モードの一つ',
            '[ファインチューニング](/ja/prompt-engineering/prompt-engineering-glossary#fine-tuning) — ドメイン固有のデータでモデルの重みを再学習すること；厳しい品質の限界に達した際のプロンプト最適化の代替手段',
            '[RAG（検索拡張生成）](/ja/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — 取得したドキュメントをプロンプトのコンテキストに注入する；プロンプト最適化を補完する（RAGは情報を改善し、最適化はモデルがその情報をどう使うかを改善する）',
            '[システムプロンプト](/ja/prompt-engineering/prompt-engineering-glossary#system-prompt) — すべてのターンにわたってモデルの役割、制約、動作を設定する永続的な指示；独自の最適化テストが必要',
            '[温度（Temperature）](/ja/prompt-engineering/prompt-engineering-glossary#temperature) — 出力のランダム性を制御するデコードパラメータ；温度を下げると最適化テスト実行間の一貫性が向上する',
            '[プロンプト・チェイニング](/ja/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — 複雑なタスクを一連の小さなプロンプトに分割する；各サブプロンプトは独立した最適化の恩恵を受ける',
          ],
        },

        promptLibrary: {
          title: '最適化されたプロンプトをライブラリに保存する',
          content: [
            '**最適化されたプロンプトは耐久性のあるアセットです。** 3モデルでプロンプトをテストし、5～10個の代表的な入力で動作を確認し、各レバーが何をするかを文書化したら—保存します。プロンプト・ライブラリを使用すると、プロジェクト全体で最適化されたプロンプトを再利用し、チームと共有し、時間をかけて改善できます。',
            '各プロンプトで保存するもの：最終プロンプトテキスト、変更されたレバー、修正した障害モード、テストしたモデル、および代表的な入力での合格/不合格の結果。このドキュメント化は、プロンプト・ライブラリを単純なテキストファイルフォルダから区別するものです。',
            '完全なガイドについては、[数時間を節約するプロンプト・ライブラリを構築](/ja/prompt-engineering/build-a-prompt-library)で、ライブラリの構造化、バージョン化、保守を参照してください。',
          ],
        },

        regionalCompliance: {
          title: 'プロンプト最適化と規制コンプライアンス',
          content: [
            '規制分野では、テスト記録を備えたバージョン管理されたプロンプト・ライブラリは文書化に役立ちます。ただし、それだけでシステムがEU AI法などの規則に適合するわけではありません。',
            '日本の経済産業省（METI）と総務省による「AI事業者ガイドライン」に法的拘束力はありません。これは法的助言ではありません。適用される義務は専門家に確認してください。',
          ],
        },

        multilingualReach: {
          title: '言語と地域を超えたプロンプト最適化',
          content: [
            '**プロンプト最適化は普遍的な分野であり、6つのレバーと6ステップのプロセスは、プロンプトが書かれた言語に関わらず適用されます。** ただし、現地の検索用語は大きく異なり、主要なモデルは地域によって変わり、一部の言語は独自の最適化課題（トークン化密度、文字ベースの表記体系、フォーマル/インフォーマルの使い分け）を抱えています。以下の表は、最も重要な地域別バリエーションをまとめたものです。',
          ],
          columns: ['言語・地域', '現地用語', '主要モデル', '地域ノート'],
          rows: [
            { '言語・地域': '英語 — 米国', '現地用語': 'prompt optimization', '主要モデル': 'GPT-5.6, Claude Opus 5', '地域ノート': 'アメリカ式つづり（-ize）' },
            { '言語・地域': '日本語 — 日本', '現地用語': 'プロンプト最適化', '主要モデル': 'GPT-5.6（日本語対応が強い）', '地域ノート': 'モデルごとにトークン数を確認' },
            { '言語・地域': 'ドイツ語 — DE / AT / CH', '現地用語': 'Prompt-Optimierung', '主要モデル': 'GPT-5.6, Claude Opus 5', '地域ノート': 'EU AI法がDACH企業に特に関連' },
            { '言語・地域': 'フランス語 — FR / CA', '現地用語': 'optimisation de prompt', '主要モデル': 'GPT-5.6, Claude Opus 5', '地域ノート': 'フォーマルな文体' },
            { '言語・地域': 'スペイン語 — ES / LATAM', '現地用語': 'optimización de prompts', '主要モデル': 'GPT-5.6', '地域ノート': '中立的なスペイン語の用語' },
            { '言語・地域': 'ポルトガル語 — BR', '現地用語': 'otimização de prompts', '主要モデル': 'GPT-5.6', '地域ノート': 'ブラジルポルトガル語の用語' },
            { '言語・地域': '簡体字中国語 — CN', '現地用語': '提示词优化', '主要モデル': 'DeepSeek, Qwen 3', '地域ノート': '簡体字表記' },
            { '言語・地域': '韓国語 — KR', '現地用語': '프롬프트 최적화', '主要モデル': 'GPT-5.6, Claude Opus 5', '地域ノート': 'モデルごとにトークン数を確認' },
          ],
        },

        relatedReading: {
          title: '関連読書',
          items: [
            '[プロンプトエンジニアリングとは？](/ja/prompt-engineering/what-is-prompt-engineering) — 柱の定義とプロンプト設計の核となる構成要素',
            '[すべてのプロンプトが必要とする5つの構成要素](/ja/prompt-engineering/5-building-blocks-every-prompt-needs) — あなたが最適化している構造要素',
            '[チェーン・オブ・ソート・プロンプティング](/ja/prompt-engineering/chain-of-thought-prompting) — 精度向上のためのステップバイステップ推論テクニック',
            '[ゼロショット対フューショット・プロンプティング](/ja/prompt-engineering/zero-shot-vs-few-shot) — 最適化・レバーとして例を追加するときを確認',
            '[数時間を節約するプロンプト・ライブラリを構築](/ja/prompt-engineering/build-a-prompt-library) — チーム・アセットとして最適化されたプロンプトを持続',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ : プロンプト最適化',
          faqs: [
            { q: 'プロンプト最適化とは何ですか？', a: 'プロンプト最適化は、特定のタスクのためのAI出力品質を改善するために既存のプロンプトを改定する反復的なプロセスです。障害モード（形式が違う、幻覚、曖昧な出力）を識別し、1つの変数（具体性、コンテキスト、例、制約、出力フォーマット、またはロール）を変更し、GPT-5.6、Claude Opus 5、Gemini 3.1 Proなどのモデル全体で結果をテストします。' },
            { q: 'プロンプト最適化とプロンプトエンジニアリングの違いは何ですか？', a: 'プロンプトエンジニアリングは、目的、コンテキスト、出力フォーマットなどの構成要素を使用して最初からプロンプト構造を設計する規律です。プロンプト最適化は既に書かれたプロンプトを改善する反復的なサブプロセスで、障害モードを診断してターゲット変更を適用します。プロンプトエンジニアリングで出発点を作成する必要があります；プロンプト最適化で改善します。' },
            { q: 'プロンプトを最適化するのに何回の反復が必要ですか？', a: 'ほとんどのタスクでは、2～4回のターゲット反復は失敗するプロンプトから信頼できるプロンプトに移動するのに十分です。各反復は1つの変数を変更し、3～5個の代表的な入力でテストする必要があります。5～6回の反復後に収穫逓減が設定されます—プロンプトがそれまでに安定していない場合、タスク定義自体を改定する必要があるかもしれません。' },
            { q: 'プロンプトを最適化するときに最初に変更するべきレバーはどれですか？', a: '出力フォーマットで開始します。フォーマット非準拠—テーブルを要望したときにパラグラフを受け取るか、JSONが必要なときにプレーンテキストを受け取る—最も一般的で最速修正の障害モードです。正確な構造を指定してから、後続の反復で他の問題（精度、トーン、スコープ）に対処します。' },
            { q: 'プロンプト最適化はすべてのAIモデルで機能しますか？', a: 'はい、ただしモデル固有の調整があります。6つのコア最適化・レバー（具体性、コンテキスト、例、制約、出力フォーマット、ロール）はGPT-5.6、Claude Opus 5、Gemini 3.1 Pro、およびMistral Largeに適用されます。ただし、各モデルは命令密度に異なる方法で応答します。使用するモデルごとにテストしてください。' },
            { q: '最も一般的なプロンプト最適化エラーは何ですか？', a: '複数の変数を同時に変更する。同じ改定に例を追加し、出力フォーマットを変更し、ロール指示を追加する場合、どの変更が改善（または低下）した出力を決定できません。効果的な最適化は反復ごとに1つの変数を変更します。' },
            { q: 'プロンプト最適化はAIの幻覚を減らすことができますか？', a: 'はい、適切なテクニックで。係留コンテキスト（「提供されたドキュメントのみに基づいて回答してください」）、事実的に正しい出力を含むフューショット例、および明示的な制約（「数字を発明しない—提供されたテキストのデータのみを使用」）を追加すると、幻覚の低減に役立つ場合があります。自己一貫性プロンプティング—複数の出力を生成し、最も一般的なものを返す—低確率の作成をさらに減らします。' },
            { q: '代わりにファインチューニングを使用すべきですか？', a: 'プロンプト最適化が天井に達したときにファインチューニングを使用します—通常、必要な動作がドメイン固有の場合、数千の出力全体で一貫した文体の声が必要な場合、またはベース・モデルのトレーニングにない知識に依存する場合。プロンプト最適化はより速く安価で、ファインチューニングの前に常に最大化する必要があります。' },
            { q: 'プロンプトが完全に最適化されているかどうかを知るにはどうすればよいですか？', a: 'プロンプトが十分に最適化される場合：(1) 4～5個の代表的な入力で正しい出力を生成（2）再実行時に一貫性のある出力を生成（3）少なくとも2つのモデル（GPT-5.6およびClaudeなど）で機能（4）ポスト処理なしでフォーマット指定を満たします。完璧なプロンプトは存在しません—「最適化」はユースケースに十分な信頼性を意味します。' },
            { q: 'プロンプト最適化は画像プロンプト（テキストから画像）に適用されますか？', a: '原理は適用されます—具体性、制約、および例（リファレンス画像）はすべてDALL-E 3およびStable Diffusionなどの画像モデルに対して有効なレバーです。ただし、メカニクスは異なります：画像モデルは制約としてのスタイル修飾子、アスペクト比指定、負のプロンプトに応答します。最適化プロセス（ベースライン→診断→1つの変数を変更→テスト）は同一です。' },
            { q: '自動プロンプト最適化はどのように機能しますか？', a: '自動プロンプト最適化は、2番目のAIモデル（またはメタ・プロンプティング・ループ内の同じモデル）を使用して、人間の介入なしにプロンプトを改写および改善します。DSPy（Stanford）、TextGrad、APE（Automatic Prompt Engineer）などのツールは候補プロンプトを生成し、メトリック（精度、フォーマット準拠、ユーザー評価）に対して評価し、最適な変種を選択します。手動最適化は理解されたタスクでより速い；自動最適化は、ラベル付き評価データがあり、数百の変種をテストする必要がある場合、より良いスケーリングを行います。' },
            { q: 'プロンプト最適化とプロンプト・チューニングはどのように異なりますか？', a: 'プロンプト最適化は、モデル重みを変更することなく、離散テキスト・プロンプト—自然言語で記述した指示—を改善します。プロンプト・チューニング（Lester et al. 2021によって導入）は、入力の前に提示され、勾配下降によってモデルの横または代わりにトレーニングされる連続的なソフト・プロンプト・ベクトルを学習します。プロンプト・チューニングは計算能力とトレーニングデータを必要とします；プロンプト最適化はどちらも必要としません。ほとんどの本番ユースケースでは、最初に離散プロンプトを最適化し、ハード品質の天井に達した場合にのみプロンプト・チューニングを検討してください。' },
            { q: 'プロンプト最適化の最良のツールは何ですか？', a: '唯一の最良ツールはありません。たとえば、PromptQuorum（当サイト運営者の製品。1つのプロンプトをGPT-5.6、Claude、Geminiに同時に送信して比較分析を行う）、DSPy（自動メトリック・ベース選択を備えたプログラム的プロンプト最適化）、LangSmith（プロンプト・バージョン管理、A/Bテスト、LangChain・パイプラインの追跡）、Promptfoo（テストケースと回帰テストに対してプロンプトを実行するオープン・ソース・CLI）およびPromptLayer（プロンプト・バージョン管理と分析）です。手動反復の場合、ほとんどの単一部分最適化作業では、プロンプト・バージョン、入力、出力、および基準に対するパスド/フェイルドを記録する表で十分です。' },
            { q: 'システム・プロンプトを最適化するにはどうすればよいですか？', a: 'システム・プロンプト最適化は、2つの追加制約を備えた同じ6ステップ・プロセスに従います。最初に、システム・プロンプトはすべてのターンを保持します—あまりに具体的な指示は、予期しなかった入力でのパフォーマンスを低下させることができます。1つだけではなく、5～10個の多様な代表的な入力でテストしてください。次に、システム・プロンプト・レングスは重要です：非常に長いシステム・プロンプトは、後続のユーザー・ターンの指示追従を削減する可能性があります。簡潔さのために最適化してください：システム・プロンプト内のすべての指示は必要である必要があります。テスト・セットの出力を変更しない指示を削除してください。' },
            { q: 'プロンプト最適化にChatGPTを使用できますか？', a: 'はい。失敗したプロンプトと障害モード説明を提供することにより、プロンプトを改写するようGPT-5.6に求めることができます：「このプロンプトは曖昧な出力を生成します。3点構造化応答を要求するように改写してください」。これはメタ・プロンプティングの形式です—モデルを使用して独自の入力を改善します。制限は、GPT-5.6があなたの特定の評価基準が必要なものではなく、それがより良いと思うために最適化することです。改写されたプロンプトを実際の入力でテストし、改定を受け入れる前に実際のパスド/フェイルド基準に対して測定してください。' },
            { q: '機械学習のコンテキストにおけるプロンプト最適化は何を意味しますか？', a: '機械学習のコンテキストでは、プロンプト最適化は、パイプラインの一部として言語モデルに入力されるプロンプトを改善する技術を指します—モデル自体を再トレーニングせずに。これには、離散プロンプト最適化（自然言語の指示の改写）と連続プロンプト・チューニング（勾配下降によるソフト・トークン・エンベディングの学習）の両方が含まれます。ML本番システムでは、プロンプト最適化は通常、推論パイプラインの一部です：プロンプトはハイパーパラメータとして扱われ、保留評価セットに対して最適化されます。モデルトレーニング中の学習レート選択と同様です。' },
            { q: 'プロンプト最適化はどのくらい出力品質を改善しますか？', a: 'モデル、タスク、元のプロンプトによって異なるため、一般的な改善率はありません。同じテスト入力で新旧のプロンプトを実行し、合格率を比較して測定してください。' },
            { q: 'モデルごとに別々にプロンプトを最適化すべきですか？', a: 'モデルに依存しない最適化で始めてください—6つのレバー（具体性、コンテキスト、例、制約、出力フォーマット、ロール）を適用し、GPT-5.6、Claude Opus 5、Gemini 3.1 Proでテストしてください。十分に構造化されたプロンプトは通常、3つすべてで十分に機能します。クロス・モデル・テストで相違する結果が示される場合にのみ、モデル固有の変種を追加します。試す価値のあるモデル固有の調整：Claudeは長いマルチパート・システム・プロンプトをより良く処理；GPT-5.6は明示的なJSON形式要求から利益を得る；Gemini 3.1 Proは長いドキュメント・タスクで明示的なセクション・ヘッダーから利益を得ます。プロンプト・ライブラリ内のモデル固有の変種をバージョン・ノート付きで文書化してください。' },
            { q: 'プロンプト最適化とRAGの違いは何ですか？', a: 'プロンプト最適化は、プロンプトの指示と構造を改善します。検索増強生成（RAG）は、関連ドキュメントを取得し、推論時にモデルが利用可能な情報を改善し、プロンプト・コンテキストに挿入します。2つは相補的です：RAGはモデルが正しい事実を持たないという問題を解決；プロンプト最適化はモデルが正しくこれらの事実を処理しないという問題を解決します。完全に最適化されたRAG・パイプラインには、良好な検索（正しいドキュメントが検索される）と十分に最適化されたプロンプト（モデルは検索されたコンテンツのみを使用し、ソースを引用し、回答を正しくフォーマットするよう指示される）の両方が必要です。' },
            { q: 'GPT-5.6に対してプロンプトを最適化するにはどうすればよいですか？', a: 'GPT-5.6では次の4つの最適化を試す価値があります：(1)システム・プロンプト内の明示的なJSON形式要求—構造化出力ではスキーマを正確に定義します。(2)システム・プロンプト内のMarkdownヘッダー—関心事を分離するにはH2セクション（## ロール、## タスク、## 出力フォーマット）を使用します。(3)厳密な制約—語数や長さの制限がないと、回答が必要以上に長くなることがあります；「150ワード以下で回答」または「JSONオブジェクトのみを返し、説明はしない」を追加します。(4)ツール使用フレーミング—取得または計算を含むタスクの場合、散文指示の代わりに機能定義としてプロンプトを作成してください（Assistants APIで有効なツールを使用する場合）。' },
            { q: 'プロンプト最適化でどのレバーを最初に変更すべきですか？', a: '出力フォーマットから始めましょう。フォーマット不適合（表が欲しかったのに段落が来る、JSONが必要なのにプレーンテキストが来る）は最も一般的で最も素早く修正できる障害モードです。希望する構造を正確に指定し、その後の反復で他の問題（精度、トーン、範囲）に対処します。' },
            { q: 'プロンプトが完全に最適化されていることをどうやって知りますか？', a: 'プロンプトが十分に最適化されているのは：(1) 4〜5つの代表的な入力で正しい出力を生成する、(2) 再実行で一貫した出力を生成する、(3) 少なくとも2つのモデルで動作する、(4) 後処理なしにフォーマット仕様を満たす、という条件を満たすときです。完璧なプロンプトは存在しません—「最適化された」とは、ユースケースに対して十分に信頼できることを意味します。' },
          ],
        },

        sources: {
          title: 'ソースと参考文献',
          items: [
            '[Schulhoff et al., 2024. 「The Prompt Report: A Systematic Survey of Prompt Engineering Techniques」](https://arxiv.org/abs/2406.06608) — 58種類のテキストベースのプロンプティング技術のカタログ',
            '[Wei et al., 2022. 「Chain-of-Thought Prompting Elicits Reasoning in Large Language Models」](https://arxiv.org/abs/2201.11903) — ステップバイステップ推論を最適化・レバーとするピア・レビュー学術基礎',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — OpenAIのプロンプトエンジニアリングガイド',
            '[Brown et al., 2020. 「Language Models are Few-Shot Learners」](https://arxiv.org/abs/2005.14165) — フューショット例を高度に有効な最適化・レバーとして確立する基礎論文；6レバー・フレームワークの例レバーの基礎',
          ],
        },
      },
    },
    zh: {
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-zh.webp',
      title: '如何优化提示词：提示词优化技巧与最佳实践',
      seoTitle: '2026年提示词优化指南：6个杠杆与6步流程详解',
      intro: '提示词优化是通过迭代修改现有提示词来改进AI输出质量、一致性或准确性的过程。本综合指南教您提示词优化技巧和基础知识：6个核心杠杆、6步优化流程、GPT-5.6、Claude和Gemini的前后对比示例，以及优化提示词时要避免的7个最常见错误。',
      metaDescription: '用6个杠杆和6步流程优化提示词。本指南包含面向GPT-5.6、Claude和Gemini的前后对比示例、各模型的调整建议，以及优化时需要避免的7个常见错误和检查要点。',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '14分钟阅读',
      educationalLevel: 'Beginner',
      primaryTerm: '提示词优化',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: '如何优化提示词：提示词优化技巧与最佳实践',
        description: '学习提示词优化技巧和最佳实践：6个核心杠杆、6步流程、前后对比示例。如何在GPT-5.6、Claude、Gemini上改进AI提示词——所有模型的基础。',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['提示词优化', '提示词优化技巧', '如何优化提示词', '改进AI提示词', '提示词工程基础', 'LLM优化', 'GPT-5.6', 'Claude', 'Gemini', '少样本提示', '思维链提示'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: '提示词优化' },
          { '@type': 'Thing', name: '少样本提示' },
          { '@type': 'Thing', name: '思维链提示' },
          { '@type': 'Thing', name: 'LLM输出质量' },
          { '@type': 'Thing', name: 'AI提示词工程' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'zh'),
        url: 'https://www.promptquorum.com/zh/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'zh',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '提示词优化的6个杠杆',
        description: '决定AI输出质量的六个独立变量——每个都可以调整以修复特定的提示词失败模式。',
        numberOfItems: 6,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '具体性', description: '任务的定义有多精确。优化步骤：将模糊的目标重写为精确的指示。示例：\'总结\'→\'列出3个关键发现，每个≤20字\'。' },
          { '@type': 'ListItem', position: 2, name: '上下文', description: '模型可用的信息。优化步骤：添加背景、受众和约束。示例：\'写报告\'→\'为非技术CFO写报告\'。' },
          { '@type': 'ListItem', position: 3, name: '示例', description: '模型对所需输出格式的理解。优化步骤：添加1–3个输入/输出对（少样本）。展示您想要的确切格式，一次。' },
          { '@type': 'ListItem', position: 4, name: '约束', description: '模型可以输出的边界。优化步骤：添加明确的禁止。示例：\'不使用术语。最多150字。\'。' },
          { '@type': 'ListItem', position: 5, name: '输出格式', description: '响应的结构。优化步骤：明确指定格式。示例：\'以JSON响应：{title, summary, tags[]}\'。' },
          { '@type': 'ListItem', position: 6, name: '角色/角色扮演', description: '模型采用的专业知识水平。优化步骤：添加特定角色。示例：\'担当B2B SaaS公司的高级数据分析师\'。' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '如何在6步中优化提示词',
        description: '诊断提示词失败和改进GPT-5.6、Claude和Gemini上的AI输出质量的系统6步流程。',
        totalTime: 'PT30M',
        step: [
          { '@type': 'HowToStep', position: 1, name: '建立基线', text: '在代表性输入上运行当前提示词3次。记录失败模式：格式错误、幻觉、模糊输出或离题响应。' },
          { '@type': 'HowToStep', position: 2, name: '识别根本杠杆', text: '将失败映射到6个杠杆之一：具体性、上下文、示例、约束、输出格式或角色/角色扮演。' },
          { '@type': 'HowToStep', position: 3, name: '仅更改一个变量', text: '对识别的杠杆进行单一有针对性的更改。不要同时更改多个变量——如果多个内容改变，您无法诊断改进。' },
          { '@type': 'HowToStep', position: 4, name: '在多个模型上测试', text: '在GPT-5.6、Claude Opus 5和Gemini 3.1 Pro上运行修订的提示词。仅在一个模型上工作的提示词很脆弱。' },
          { '@type': 'HowToStep', position: 5, name: '针对质量标准进行衡量', text: '检查任务准确性、格式合规性、事实基础、3次重新运行的一致性和跨模型一致性。' },
          { '@type': 'HowToStep', position: 6, name: '保存到提示词库', text: '记录改变的内容及其工作原理。版本控制优化的提示词。经过测试的提示词是持久的可重用资产。' },
        ],
      },
      tableSchema: {
        '@context': 'https://schema.org',
        '@type': 'Table',
        name: '提示词质量测量标准',
        about: '衡量提示词优化迭代是否成功的六个标准：任务准确性、格式合规性、事实基础、一致性、令牌效率和跨模型一致性。',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            'name': '什么是提示词优化？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词优化是为了改进特定任务的AI输出质量而迭代修改现有提示词的过程。它涉及识别失败模式（格式错误、幻觉、模糊输出），改变一个变量（具体性、上下文、示例、约束、输出格式或角色），并在GPT-5.6、Claude Opus 5和Gemini 3.1 Pro等模型上测试结果。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化与提示词工程的区别是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词工程是使用目标、上下文和输出格式等构建块从头开始设计提示词结构的学科。提示词优化是改进已编写提示词的迭代子流程，通过诊断失败模式并应用有针对性的改变。您需要提示词工程来创建起点；您使用提示词优化来完善它。',
            },
          },
          {
            '@type': 'Question',
            'name': '优化提示词需要多少次迭代？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '对于大多数任务，2–4次有针对性的迭代足以从失败提示词移到可靠提示词。每次迭代应改变一个变量并在3–5个代表性输入上测试。5–6次迭代后出现收益递减——如果提示词此时尚未稳定，任务定义本身可能需要修改。',
            },
          },
          {
            '@type': 'Question',
            'name': '优化提示词时应该首先改变哪个杠杆？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '从输出格式开始。格式不合规——当您想要表格时收到段落，或当需要JSON时收到纯文本——是最常见和最快修复的失败模式。指定确切的结构，然后在后续迭代中处理其他问题（准确性、基调、范围）。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化在所有AI模型上都有效吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '是的，但需要特定于模型的调整。六个核心优化杠杆（具体性、上下文、示例、约束、输出格式、角色）适用于GPT-5.6、Claude Opus 5、Gemini 3.1 Pro和Mistral Large。但是，每个模型对指示密度的响应不同。请在您使用的每个模型上分别测试。',
            },
          },
          {
            '@type': 'Question',
            'name': '最常见的提示词优化错误是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '同时改变多个变量。如果您在同一修订中添加示例、改变输出格式并添加角色指示，您无法确定哪个改变改进（或降低）了输出。有效的优化每次迭代改变一个变量。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化能减少AI幻觉吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '是的，使用正确的技巧。添加接地上下文（"仅基于以下文档进行回答"）、带有事实正确输出的少样本示例以及明确约束（"不要发明数字——仅使用提供的文本中的数据"）有助于减少幻觉。自一致性提示——生成多个输出并返回最常见的——进一步减少低概率虚构。',
            },
          },
          {
            '@type': 'Question',
            'name': '何时应该使用微调而不是提示词优化？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '当提示词优化达到天花板时使用微调——通常在所需行为高度特定领域、需要数千个输出的一致文体声音，或依赖于基础模型培训中不存在的知识时。提示词优化更快更便宜，在微调之前应始终耗尽。',
            },
          },
          {
            '@type': 'Question',
            'name': '如何知道提示词是否完全优化？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词在以下情况下充分优化：(1)在4–5个代表性输入上产生正确输出，(2)重新运行时产生一致输出，(3)在至少两个模型上工作（例如GPT-5.6和Claude），(4)不需要后处理即满足格式规范。完美提示词不存在——"优化"意味着对您的用例足够可靠。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化是否适用于图像提示（文本转图像）？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '原理适用——具体性、约束和示例（参考图像）对于DALL-E 3和Stable Diffusion等图像模型都是有效的杠杆。但机制不同：图像模型响应样式修饰符、宽高比规范和负面提示作为约束。优化流程（基线→诊断→改变一个变量→测试）是相同的。',
            },
          },
          {
            '@type': 'Question',
            'name': '自动提示词优化如何工作？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '自动提示词优化使用第二个AI模型（或meta-prompting循环中的相同模型）在没有人工干预的情况下重写和改进提示词。DSPy（Stanford）、TextGrad和APE（自动提示词工程师）等工具生成候选提示词，根据指标（准确性、格式合规性、用户评分）评估它们，并选择最佳变种。手动优化对理解任务更快；自动优化在有标记评估数据且需要测试数百个变种时扩展得更好。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化与提示词调整有何不同？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词优化改进离散文本提示——您以自然语言编写的指示——不改变模型权重。提示词调整（Lester等人2021引入）学习连续的soft-prompt向量，这些向量在输入前加入并通过梯度下降在模型旁边或代替模型进行训练。提示词调整需要计算能力和训练数据；提示词优化两者都不需要。对于大多数生产用例，首先优化离散提示词，仅在达到硬质量上限时考虑提示词调整。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化的最佳工具是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '没有唯一的最佳工具。例如：PromptQuorum（本网站发布方的产品；同时将一个提示词发送到GPT-5.6、Claude和Gemini进行比较分析）、DSPy（带有自动基于指标选择的程序化提示词优化）、LangSmith（提示词版本控制、A/B测试和LangChain管道的追踪）、Promptfoo（用于针对测试用例和回归测试运行提示词的开源CLI）和PromptLayer（提示词版本控制和分析）。对于手动迭代，对于大多数单部分优化工作，记录提示词版本、输入、输出和基于标准的通过/失败的电子表格就足够了。',
            },
          },
          {
            '@type': 'Question',
            'name': '我如何优化系统提示？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '系统提示优化遵循相同的6步流程，但有两个额外的约束。首先，系统提示在所有回合中持续存在——过于具体的指示可能会降低您未预期的输入上的性能。在5–10个不同的代表性输入上测试，而不仅仅是一个。其次，系统提示长度很重要：非常长的系统提示可能会在后续用户回合中减少某些模型上的指示跟随。为简洁而优化：系统提示中的每条指示都应该是必要的。删除不改变测试集输出的任何指示。',
            },
          },
          {
            '@type': 'Question',
            'name': '我可以使用ChatGPT进行提示词优化吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '可以。您可以通过提供失败提示词和失败模式描述来要求GPT-5.6重写提示词："此提示词产生模糊输出。重写它以要求3点结构化答案。"这是meta-prompting的一种形式——使用模型改进其自己的输入。限制是GPT-5.6将针对它认为更好的内容进行优化，而不一定是您的特定评估标准要求的内容。始终在实际输入上测试重写提示词，并在接受修改之前针对您的实际通过/失败标准进行衡量。',
            },
          },
          {
            '@type': 'Question',
            'name': '在机器学习背景下，提示词优化是什么意思？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '在机器学习背景下，提示词优化指的是改进发送到语言模型的提示词的技巧，作为管道的一部分——不重新训练模型本身。这包括离散提示词优化（重写自然语言指示）和连续提示词调整（通过梯度下降学习soft-令牌嵌入）。在ML生产系统中，提示词优化通常是推理管道的一部分：提示词被视为针对保留评估集优化的超参数，类似于模型训练期间的学习率选择。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化能改进多少输出质量？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提升幅度取决于模型、任务和原始提示词，因此没有通用的百分比。请用同一组测试输入分别运行新旧提示词，并比较通过率。',
            },
          },
          {
            '@type': 'Question',
            'name': '我应该为每个模型分别优化提示词吗？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '从模型无关的优化开始——应用6个杠杆（具体性、上下文、示例、约束、输出格式、角色）并在GPT-5.6、Claude Opus 5和Gemini 3.1 Pro上测试。结构良好的提示词通常在全部三个上工作得很好。仅当跨模型测试显示不同的结果时才添加特定于模型的变种。值得测试的模型专属调整：Claude更好地处理较长的多部分system prompts；GPT-5.6受益于显式JSON格式请求；Gemini 3.1 Pro受益于长文档任务中的显式部分标题。在提示词库中用版本注释记录特定于模型的变种。',
            },
          },
          {
            '@type': 'Question',
            'name': '提示词优化与RAG之间的区别是什么？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '提示词优化改进提示词的指示和结构。检索增强生成（RAG）通过检索相关文档并将其插入提示词上下文来改进模型在推理时可用的信息。两者是互补的：RAG解决模型没有正确事实的问题；提示词优化解决模型不正确处理这些事实的问题。完全优化的RAG管道需要好的检索（检索正确的文档）和优化良好的提示词（指导模型仅使用检索的内容、引用来源并正确格式化答案）。',
            },
          },
          {
            '@type': 'Question',
            'name': '我如何特别针对GPT-5.6优化提示词？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '以下四个优化步骤值得在GPT-5.6上测试：(1)system prompts中的显式JSON格式请求——对于结构化输出，请精确定义schema。(2)system prompts中的Markdown标题——使用H2部分（## 角色、## 任务、## 输出格式）来分离关注点。(3)紧密约束——未限定字数或长度时，回答可能比需要的更长；添加"在≤150字以内回答"或"仅返回JSON对象，不解释"。(4)工具使用框架——对于涉及检索或计算的任务，如果您将Assistants API与启用的工具一起使用，将提示词表述为函数定义而不是散文指示。',
            },
          },
          {
            '@type': 'Question',
            'name': '怎么知道提示词已经完全优化了？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '当提示词满足以下条件时即充分优化：(1) 在4到5个代表性输入上产生正确输出，(2) 重新运行时产生一致输出，(3) 在至少两个模型上工作，(4) 无需后处理即满足格式规范。完美的提示词不存在——"优化"意味着对用例足够可靠。',
            },
          },
        ],
      },
      toc: [
      ],
      sections: {
        tldr: {
          title: '关键要点',
          isTldr: true,
          items: [
            '提示词优化=迭代修改现有提示词以改进输出质量',
            '6个杠杆：**具体性**、**上下文**、**示例**、**约束**、**输出格式**、**角色/角色扮演**',
            '每次更改一个杠杆——隔离变量是找到实际有效方法的方式',
            '在≥2个模型（GPT-5.6、Claude、Gemini）上测试，确认改进是模型无关的',
            '常见失败模式：一次更改太多变量会使诊断变得不可能',
            '经过测试和优化的提示词是持久资产——保存到提示词库',
          ],
        },

        localLLMTldr: {
          title: '本地LLM用户的关键要点',
          isTldr: true,
          items: [
            '对本地模型，提示词优化更重要——量化模型（4位、8位）可能对模糊指示更敏感',
            'Ollama和LM Studio支持相同的6个优化杠杆；不同的是较小的模型（LLaMA 3.1 8B、Mistral Small）往往需要更明确的约束和更短的输入',
            '量化模型遵循指示的可靠性可能较低——使用更简单、更规定性的提示，明确的输出格式和更少的同时约束',
            '温度默认值不同：Ollama默认为0.8（更高创意、较低一致性）；如果跨多次运行需要结构化输出任务的一致性，将温度设置为0.1–0.3',
            '要估计质量差距，请用同一组测试输入运行本地模型和云端模型，例如在PromptQuorum中与GPT-5.6和Claude进行比较',
          ],
        },

        definition: {
          title: '什么是提示词优化？',
          content: [
            '**提示词优化是为了改进特定任务的AI输出质量、准确性或一致性而迭代修改现有提示词的过程。** 它适用于所有主要模型——GPT-5.6、Claude Opus 5、Gemini 3.1 Pro，以及通过Ollama或LM Studio运行的本地模型。虽然提示词工程设计初始提示词结构，但提示词优化诊断什么失败了，并应用有针对性的改变，直到输出达到定义的标准。',
            '提示词优化是提示词工程的子流程。总是从工作提示词开始，每次进行一次改变。这种变量隔离使诊断成为可能——如果您同时修改具体性、输出格式和约束，您无法确定哪个改变改进了结果。提示词优化的技能是将失败映射到正确的杠杆、仅更改该变量并衡量改进。',
            '为什么重要：相同的模型从几乎相同的提示词产生根本不同的输出。"大约正确"和"可靠"之间的差异不是运气——这是体系优化。未优化的提示词在某些输入上成功，在其他输入上失败。优化的提示词在代表性输入样本上一致成功。',
          ],
        },

        vsPromptEngineering: {
          title: '提示词优化 vs 提示词工程',
          content: [
            '**提示词优化和提示词工程是按顺序工作的互补学科。** 提示词工程使用构建块（目标、上下文、示例、约束、输出格式、角色）从头开始设计提示词。提示词优化采用现有提示词并通过迭代修改改进它。两者都是必要的：提示词工程带您到"有效"；提示词优化带您到"可靠"。',
            '这样想：提示词工程建造结构；提示词优化完善它。提示词工程问"这个提示词应该有什么元素？"提示词优化问"为什么这个提示词失败了，哪个单一改变会修复它？"区别很重要，因为策略不同。工程从原则和构建块开始。优化从失败诊断开始。',
          ],
          columns: ['维度', '提示词工程', '提示词优化'],
          rows: [
            { '维度': '起点', '提示词工程': '空白页', '提示词优化': '现有提示词' },
            { '维度': '目标', '提示词工程': '设计结构', '提示词优化': '改进输出' },
            { '维度': '方法', '提示词工程': '框架、构建块', '提示词优化': '隔离、改变、测试、衡量' },
          ],
        },

        whyOptimize: {
          title: '为什么提示词优化很重要',
          content: [
            '**相同的AI模型根据问题的框架方式产生截然不同的输出。** 模糊的提示产生模糊的答案。具有明确目标、相关上下文、明确约束和指定输出格式的结构化提示通常能减少后续修改。',
            '这些是一致应用的提示词优化基础的关键好处：',
          ],
          items: [
            '**可靠性：** 结构化提示通常更稳定，但仍需在不同输入和模型上复测',
            '**更高的输出质量：** 明确的指示有助于减少歧义和对意图的猜测',
            '**速度：** 清晰的提示可以减少来回澄清',
            '**成本控制：** 精确的提示有助于减少重试和令牌消耗',
            '**幻觉减少：** 清晰的依据和来源约束有助于减少虚构内容，但不能完全避免',
            '**多模型兼容性：** 结构良好的提示词较易迁移到其他模型，但需分别测试',
            '**可重复性：** 精心设计的提示是可重用资产。团队可以随时间共享、版本和改进提示',
          ],
        },

        callout1: {
          blockquote: '在数学应用题基准GSM8K上，向5400亿参数的PaLM模型展示几个带逐步推理过程的解题示例（少样本思维链），无需重新训练，解题率就从标准提示的17.9%提高到56.9%。',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          title: '6个优化杠杆',
          columns: ['杠杆', '它改变了什么', '优化步骤', '示例'],
          rows: [
            { '杠杆': '具体性', '它改变了什么': '任务定义有多精确', '优化步骤': '将模糊目标重写为精确指示', '示例': '"总结"→"列出≤20字的3个关键发现"' },
            { '杠杆': '上下文', '它改变了什么': '模型可用的信息', '优化步骤': '添加背景、受众和约束', '示例': '"写报告"→"为非技术CFO写报告"' },
            { '杠杆': '示例', '它改变了什么': '模型对所需输出格式的理解', '优化步骤': '添加1–3个输入/输出对（少样本）', '示例': '展示您想要的确切格式，一次' },
            { '杠杆': '约束', '它改变了什么': '模型可以输出的边界', '优化步骤': '添加明确的禁止', '示例': '"不使用术语。最多150字。"' },
            { '杠杆': '输出格式', '它改变了什么': '响应的结构', '优化步骤': '明确指定格式', '示例': '"以JSON响应：{title, summary, tags[]}"' },
            { '杠杆': '角色/角色扮演', '它改变了什么': '模型采用的专业知识水平', '优化步骤': '添加特定角色', '示例': '"担当B2B SaaS公司的高级数据分析师"' },
          ],
        },

        callout2: {
          blockquote: 'GPT-3的规模扩展表明，只在提示词中给出少量示例、不做梯度更新的少样本学习，在部分任务上能够与此前最先进的微调方法相竞争。',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        optimizationProcess: {
          title: '6步优化流程',
          content: '按这个顺序执行。每一步都依赖前一步。',
          items: [
            '**第1步：建立基线。** 在代表性输入上运行当前提示词3次。记录失败模式：格式错误、幻觉、模糊输出或离题响应？基线的目的是精确识别什么坏了，以便您稍后可以衡量改进。',
            '**第2步：识别根本杠杆。** 将失败映射到6个杠杆之一（具体性、上下文、示例、约束、输出格式或角色）。对症疗法的思考没有帮助——针对问题的原因行动。例如，"模型产生了错误的格式"→输出格式杠杆；"输出太模糊"→具体性杠杆；"模型幻觉"→上下文或约束杠杆。',
            '**第3步：仅更改一个变量。** 对识别的杠杆进行单一有针对性的更改。在同一迭代中不要添加示例、更改输出格式AND添加约束——您不会知道哪个改变了什么。隔离是诊断的关键。',
            '**第4步：在多个模型上测试。** 在GPT-5.6、Claude Opus 5和Gemini 3.1 Pro上运行修订的提示词。仅在一个模型上工作的提示词很脆弱。跨模型一致的改进意味着您改进了提示词本身，而不是为一个特定模型的怪癖优化。使用PromptQuorum同时向所有三个模型发送提示词。',
            '**第5步：针对标准进行衡量。** 检查：任务准确性（结果回答了实际问题吗？）、格式合规性（JSON解析了吗？项目符号是正确的长度吗？）、事实基础（声称是真实的吗？）、一致性（3次重新运行产生相似的输出吗？）、令牌效率（输出长度合理吗？）、跨模型一致性（2–3个模型产生相似的结果吗？）。',
            '**第6步：保存到提示词库。** 记录变化和原因。版本控制优化的提示词。经过测试的提示词是可重用资产——无需重新优化重复任务。',
          ],
        },

        callout3: {
          blockquote: '在一项预注册的在线实验中，453名受过大学教育的专业人员完成了与各自职业相关的写作任务。使用ChatGPT使平均耗时减少40%，产出质量提高18%，员工之间的差距也有所缩小。',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        measurementCriteria: {
          title: '如何衡量提示词质量',
          columns: ['标准', '要检查什么', '通过/失败信号'],
          rows: [
            { '标准': '任务准确性', '要检查什么': '输出是否回答了实际问题？', '通过/失败信号': '与已知正确答案进行比较' },
            { '标准': '格式合规性', '要检查什么': '输出是否与指定的结构匹配？', '通过/失败信号': 'JSON解析了吗？项目符号是正确的长度吗？' },
            { '标准': '事实基础', '要检查什么': '特定声称是真实的吗？', '通过/失败信号': '抽查3–5个事实' },
            { '标准': '一致性', '要检查什么': '重新运行是否产生相似的输出？', '通过/失败信号': '运行相同提示3次——输出在结构上是否不同？' },
            { '标准': '令牌效率', '要检查什么': '输出长度是否合适？', '通过/失败信号': '测量令牌计数vs信息密度' },
            { '标准': '跨模型一致性', '要检查什么': '2–3个模型是否产生相似的结果？', '通过/失败信号': '通过PromptQuorum发送到GPT-5.6、Claude、Gemini——一致性=提示词是健壮的' },
          ],
        },

        callout4: {
          blockquote: '在一项有758名BCG顾问参与的实验中，在AI能力边界之内的18项真实任务上，使用AI者的成果质量评分比对照组高出40%以上；而在一项特意选在边界之外的任务上，使用AI的顾问给出正确答案的概率低了19个百分点。',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        beforeAfterExamples: {
          title: '提示词优化在实践中是什么样的？',
          content: '三个完整的前/后优化示例。每个显示：弱提示词、识别的失败模式、应用的杠杆、优化提示词、实现的改进。',
        },

        definitionBoxes: {
          title: '这些提示词优化术语是什么意思？',
          content: [],
          items: [
            '**提示词优化** — 通过诊断失败模式并每次更改一个变量（具体性、上下文、示例、约束、格式或角色）来迭代修改提示词以改进输出质量的过程。',
            '**少样本提示（Few-shot prompting）** — 在提示词中包含1–3个输入/输出示例，教模型所需的格式或模式。',
            '**思维链（Chain-of-Thought，CoT）** — 要求模型在回答前逐步推理（"回答前先思考"），可能改善多步推理，效果取决于模型和任务。',
            '**约束（Constraint）** — 明确的禁止或边界（例如"不使用术语"、"最多150字"、"仅引用来源"），可缩小输出范围并防止常见失败模式。',
            '**令牌（Token）** — 模型处理的最小文本单位；在英语中大约相当于4个字符或1个单词。提示词长度和输出预算以令牌为单位衡量。',
            '**幻觉（Hallucination）** — 听起来自信但事实上不正确的输出；当模型编造事实、引用不存在的研究或重复无根据的说法时发生。',
            '**微调（Fine-tuning）** — 在特定领域的标注数据上重新训练模型权重；当提示词优化无法达到所需质量时使用。始终应先耗尽优化手段再考虑微调，因为微调更慢、更昂贵。',
            '**RAG（检索增强生成）** — 在提问前将检索到的文档注入提示词上下文；与优化互补（RAG改进信息，优化改进模型如何使用信息）。',
            '**系统提示词（System prompt）** — 在所有对话轮次中设定模型角色、约束和行为的持久性指令；需要与用户提示词分开进行优化测试。',
            '**具体性（Specificity）** — 任务定义的精确程度；从模糊指示（"总结"）转向精确要求（"列出3个要点，每个≤20字"）。这是要调整的第一个、通常也是影响最大的优化杠杆。',
          ],
        },

        modelSpecificTips: {
          title: '特定模型的优化提示',
          content: 'GPT-5.6、Claude Opus 5、Gemini 3.1 Pro和Mistral Large各有独特的指示跟随特性。每个模型对相同提示词的响应略有不同。以下是一般性的起点建议，并非实测结果，请用您自己的输入逐一验证。',
          items: [
            '**GPT-5.6：** 对显式JSON格式请求和system prompts中的markdown标题响应良好。指示跟随很强——紧密约束减少过度解释。',
            '**Claude Opus 5：** 擅长细致的多部分指示。可靠地处理长详细的system prompts。受益于显式输出长度指导（"在≤200字以内响应"）。',
            '**Gemini 3.1 Pro：** 上下文窗口大，适合长文档分析。提示词中的显式部分标题改进结构化输出一致性。',
            '**Mistral Large：** 受益于显式角色定义和更规定性的指示措辞。',
          ],
        },

        localLLMExamples: {
          title: '优化本地LLM的提示词（Ollama、LM Studio）',
          content: [
            '**通过Ollama或LM Studio运行的本地模型对相同的6个优化杠杆有响应，但容错空间更小。** 量化模型（4位、8位）遵循指示的可靠性可能较低，因此应从简单、明确的提示词开始。以下示例展示了三种常见本地LLM失败模式的优化前后对比。以下是说明性场景，并非测试结果：模型名称仅表示常见的本地配置，所述失败是可能出现的情况，而不是对这些模型实测出的缺陷。',
          ],
          items: [
            '**示例1：量化模型输出不一致（杠杆：输出格式+约束）**\n_模型：_ 通过Ollama运行的LLaMA 3.1 8B（4位量化）\n_弱提示词：_ "总结这个支持工单。"\n_可能的失败模式：_ 输出在多次运行之间差异很大——有时是一句话，有时是列表，有时反问用户。\n_更改的杠杆：_ 输出格式+温度约束。\n_优化后的提示词：_ "用恰好2句话总结这个支持工单。第1句：客户的问题。第2句：他们尝试过什么。不要有其他文字。"\n_附加修复：_ 运行`ollama run llama3.1`，然后输入`/set parameter temperature 0.1`。\n_目标（非实测结果）：_ 得到两句话的摘要；请用您的模型和工单进行验证。',
            '**示例2：LM Studio上的上下文长度约束失败（杠杆：具体性+上下文）**\n_模型：_ 通过LM Studio运行的Mistral Small Instruct（Q4_K_M量化，4096令牌上下文）\n_弱提示词：_ "分析这份文档并列出关键风险。"（粘贴了完整的3000字文档）\n_可能的失败模式：_ 模型在分析中途截断，遗漏了文档最后三分之一的内容，产生不完整的输出而没有提示截断。\n_更改的杠杆：_ 具体性——缩小范围以适应上下文预算。\n_优化后的提示词：_ "你是一名风险分析师。阅读以下文档摘录（仅前1500字）并列出最多5个具体风险，每个≤15字。格式：风险1：[描述]。风险2：[描述]。列出5个后停止。"\n_目标（非实测结果）：_ 让分析内容能放入上下文窗口；请检查输出是否被截断。',
            '**示例3：量化模型中的指示被覆盖（杠杆：约束）**\n_模型：_ 通过Ollama运行的Phi-3 Mini\n_弱提示词：_ "从这段文本中提取所有日期。仅返回JSON。"\n_可能的失败模式：_ 模型返回JSON外加一段解释（"以下是我找到的日期……"）。即使指定了格式，小型模型也经常添加未经请求的评论。\n_更改的杠杆：_ 约束——明确禁止。\n_优化后的提示词：_ "从下面的文本中提取所有日期。仅返回一个JSON数组。不要解释。不要开场白。不要评论。输出：[\\"date1\\", \\"date2\\", ...]"\n_目标（非实测结果）：_ 得到不含多余文字的JSON；小型模型仍可能添加文字，请通过解析进行校验。',
          ],
        },

        commonMistakes: {
          title: '7个最常见的优化错误',
          content: '避免这些优化陷阱。',
          items: [
            '**一次更改多个变量。** 如果您添加示例、改变输出格式并在同一修订中添加角色指示，您无法确定哪个改变改进（或降低）了输出。有效的优化每次迭代改变一个变量。',
            '**在单个输入上优化。** 在3–5个代表性示例上测试，而不仅仅是一个。给定模型的随机性和上下文依赖性，单个成功不代表可靠性。',
            '**仅为一个模型优化。** 仅在GPT-5.6上工作的提示词在Claude或Gemini上可能会失败。始终跨至少两个模型（最好是3个）测试改进。',
            '**忽视输出格式。** 格式不合规——收到段落当您想要表格，或纯文本当您需要JSON——是最常见的、最快修复的失败模式。首先指定格式。',
            '**过度提示。** 太多同时指示会降低指示跟随。保持system prompts简洁。删除不改变输出的任何指示。',
            '**混淆优化与微调。** 优化改进提示；微调训练模型。优化更快更便宜，总是首先耗尽。',
            '**不保存优化提示。** 经过测试的提示词是资产。记录变化和原因。无版本控制意味着您在重复相同的优化工作。',
          ],
        },

        advancedTechniques: {
          title: '提示词优化技巧：高级方法',
          content: '当基础6个杠杆不足时，应用这些技巧。',
          items: [
            '[少样本vs零样本](/zh/prompt-engineering/zero-shot-vs-few-shot) — 添加1–3个示例以修复格式不一致',
            '[思维链](/zh/prompt-engineering/chain-of-thought-prompting) — 插入"逐步思考"以修复多步推理失败',
            '[受约束的提示](/zh/prompt-engineering/constrained-prompting) — 添加明确的禁止以修复范围和基调失败',
            '[自一致性](/zh/prompt-engineering/self-consistency-prompting) — 运行3–5次并返回最常见的答案以修复幻觉',
            '[结构化输出](/zh/prompt-engineering/structured-output-and-json-mode) — 请求JSON或markdown表格以修复格式合规性',
          ],
        },

        keyTerms: {
          title: '提示词优化的关键术语是什么？',
          items: [
            '[少样本提示（Few-shot prompting）](/zh/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — 在提示词中包含少量输入/输出示例，让模型推断所需的模式或格式；6杠杆优化框架中的"示例"杠杆',
            '[思维链（Chain-of-Thought，CoT）](/zh/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — 要求模型在回答前逐步推理；修复多步推理失败的主要技术',
            '[自一致性（Self-consistency）](/zh/prompt-engineering/prompt-engineering-glossary#self-consistency) — 生成多个输出并返回最常见的答案；降低低概率事实上的幻觉率',
            '[零样本提示（Zero-shot prompting）](/zh/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — 不带示例的提示；衡量少样本优化效果的基线',
            '[幻觉（Hallucination）](/zh/prompt-engineering/prompt-engineering-glossary#hallucination) — 听起来自信但事实上不正确的输出；优化针对的主要失败模式之一',
            '[微调（Fine-tuning）](/zh/prompt-engineering/prompt-engineering-glossary#fine-tuning) — 在特定领域数据上重新训练模型权重；当达到硬性质量上限时提示词优化的替代方案',
            '[RAG（检索增强生成）](/zh/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — 将检索到的文档注入提示词上下文；与提示词优化互补（RAG改进信息，优化改进模型如何使用信息）',
            '[系统提示词（System prompt）](/zh/prompt-engineering/prompt-engineering-glossary#system-prompt) — 设定模型在所有对话轮次中的角色、约束和行为的持久性指令；需要单独的优化测试',
            '[温度（Temperature）](/zh/prompt-engineering/prompt-engineering-glossary#temperature) — 控制输出随机性的解码参数；较低的温度可以提高优化测试运行之间的一致性',
            '[提示词链（Prompt chaining）](/zh/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — 将复杂任务拆分为一系列较小的提示词；每个子提示词都能从独立优化中受益',
          ],
        },

        promptLibrary: {
          title: '将优化的提示词保存到库',
          content: '优化的提示词是资产。提示词库存储它们及版本注释。查看[构建节省小时的提示词库](/zh/prompt-engineering/build-a-prompt-library)以开始。',
        },

        regionalCompliance: {
          title: '提示词优化与法规合规',
          content: [
            '在受监管的场景中，带测试记录的版本化提示词库有助于完善文档，但它本身并不能使系统符合欧盟《人工智能法案》或任何其他规定。',
            '日本经济产业省（METI）和总务省发布的《AI事业者指南》不具有法律约束力。本文不构成法律建议，适用于您的义务请咨询专业人士。',
          ],
        },

        multilingualReach: {
          title: '跨语言和地区的提示词优化',
          content: [
            '**提示词优化是一门普适的学科——无论提示词使用哪种语言编写，6个杠杆和6步流程都同样适用。** 然而，各地区的本地搜索词差异显著，主要使用的模型因地区而异，某些语言还带来了独特的优化挑战（令牌化密度、基于字符的书写系统、正式/非正式语域区分）。下表列出了最重要的地区差异。',
          ],
          columns: ['语言/地区', '本地术语', '主要模型', '地区说明'],
          rows: [
            { '语言/地区': '英语——美国', '本地术语': 'prompt optimization', '主要模型': 'GPT-5.6、Claude Opus 5', '地区说明': '美式拼写（-ize）' },
            { '语言/地区': '中文简体——中国', '本地术语': '提示词优化', '主要模型': 'DeepSeek、Qwen 3', '地区说明': '简体中文用语' },
            { '语言/地区': '德语——DE/AT/CH', '本地术语': 'Prompt-Optimierung', '主要模型': 'GPT-5.6、Claude Opus 5', '地区说明': '欧盟AI法案对DACH企业尤为相关' },
            { '语言/地区': '法语——FR/CA', '本地术语': 'optimisation de prompt', '主要模型': 'GPT-5.6、Claude Opus 5', '地区说明': '正式语域' },
            { '语言/地区': '西班牙语——ES/LATAM', '本地术语': 'optimización de prompts', '主要模型': 'GPT-5.6', '地区说明': '中性西班牙语用语' },
            { '语言/地区': '葡萄牙语——BR', '本地术语': 'otimização de prompts', '主要模型': 'GPT-5.6', '地区说明': '巴西葡萄牙语用语' },
            { '语言/地区': '日语——JP', '本地术语': 'プロンプト最適化', '主要模型': 'GPT-5.6（日语支持强）', '地区说明': '请按模型核对令牌数' },
            { '语言/地区': '韩语——KR', '本地术语': '프롬프트 최적화', '主要模型': 'GPT-5.6、Claude Opus 5', '地区说明': '请按模型核对令牌数' },
          ],
        },

        relatedReading: {
          title: '相关阅读',
          items: [
            '[什么是提示词工程？](/zh/prompt-engineering/what-is-prompt-engineering) — 提示词优化的上游学科',
            '[每个提示词需要的5个构建块](/zh/prompt-engineering/5-building-blocks-every-prompt-needs) — 您正在优化的结构元素',
            '[思维链提示](/zh/prompt-engineering/chain-of-thought-prompting) — 用于准确性改进的逐步推理',
            '[零样本vs少样本提示](/zh/prompt-engineering/zero-shot-vs-few-shot) — 何时添加示例作为优化杠杆',
            '[构建节省小时的提示词库](/zh/prompt-engineering/build-a-prompt-library) — 持久化优化的提示词作为团队资产',
          ],
        },

        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: '什么是提示词优化？', a: '提示词优化是为了改进特定任务的AI输出质量而迭代修改现有提示词的过程。它涉及识别失败模式（格式错误、幻觉、模糊输出），改变一个变量（具体性、上下文、示例、约束、输出格式或角色），并在GPT-5.6、Claude Opus 5和Gemini 3.1 Pro等模型上测试结果。' },
            { q: '提示词优化与提示词工程的区别是什么？', a: '提示词工程是使用目标、上下文和输出格式等构建块从头开始设计提示词结构的学科。提示词优化是改进已编写提示词的迭代子流程，通过诊断失败模式并应用有针对性的改变。您需要提示词工程来创建起点；您使用提示词优化来完善它。' },
            { q: '优化提示词需要多少次迭代？', a: '对于大多数任务，2–4次有针对性的迭代足以从失败提示词移到可靠提示词。每次迭代应改变一个变量并在3–5个代表性输入上测试。5–6次迭代后出现收益递减——如果提示词此时尚未稳定，任务定义本身可能需要修改。' },
            { q: '优化提示词时应该首先改变哪个杠杆？', a: '从输出格式开始。格式不合规——当您想要表格时收到段落，或当需要JSON时收到纯文本——是最常见和最快修复的失败模式。指定确切的结构，然后在后续迭代中处理其他问题（准确性、基调、范围）。' },
            { q: '提示词优化在所有AI模型上都有效吗？', a: '是的，但需要特定于模型的调整。六个核心优化杠杆（具体性、上下文、示例、约束、输出格式、角色）适用于GPT-5.6、Claude Opus 5、Gemini 3.1 Pro和Mistral Large。但是，每个模型对指示密度的响应不同。请在您使用的每个模型上分别测试。' },
            { q: '最常见的提示词优化错误是什么？', a: '同时改变多个变量。如果您在同一修订中添加示例、改变输出格式并添加角色指示，您无法确定哪个改变改进（或降低）了输出。有效的优化每次迭代改变一个变量。' },
            { q: '提示词优化能减少AI幻觉吗？', a: '是的，使用正确的技巧。添加接地上下文（"仅基于以下文档进行回答"）、带有事实正确输出的少样本示例以及明确约束（"不要发明数字——仅使用提供的文本中的数据"）有助于减少幻觉。自一致性提示——生成多个输出并返回最常见的——进一步减少低概率虚构。' },
            { q: '何时应该使用微调而不是提示词优化？', a: '当提示词优化达到天花板时使用微调——通常在所需行为高度特定领域、需要数千个输出的一致文体声音，或依赖于基础模型培训中不存在的知识时。提示词优化更快更便宜，在微调之前应始终耗尽。' },
            { q: '如何知道提示词是否完全优化？', a: '提示词在以下情况下充分优化：(1)在4–5个代表性输入上产生正确输出，(2)重新运行时产生一致输出，(3)在至少两个模型上工作（例如GPT-5.6和Claude），(4)不需要后处理即满足格式规范。完美提示词不存在——"优化"意味着对您的用例足够可靠。' },
            { q: '提示词优化是否适用于图像提示（文本转图像）？', a: '原理适用——具体性、约束和示例（参考图像）对于DALL-E 3和Stable Diffusion等图像模型都是有效的杠杆。但机制不同：图像模型响应样式修饰符、宽高比规范和负面提示作为约束。优化流程（基线→诊断→改变一个变量→测试）是相同的。' },
            { q: '自动提示词优化如何工作？', a: '自动提示词优化使用第二个AI模型（或meta-prompting循环中的相同模型）在没有人工干预的情况下重写和改进提示词。DSPy（Stanford）、TextGrad和APE（自动提示词工程师）等工具生成候选提示词，根据指标（准确性、格式合规性、用户评分）评估它们，并选择最佳变种。手动优化对理解任务更快；自动优化在有标记评估数据且需要测试数百个变种时扩展得更好。' },
            { q: '提示词优化与提示词调整有何不同？', a: '提示词优化改进离散文本提示——您以自然语言编写的指示——不改变模型权重。提示词调整（Lester等人2021引入）学习连续的soft-prompt向量，这些向量在输入前加入并通过梯度下降在模型旁边或代替模型进行训练。提示词调整需要计算能力和训练数据；提示词优化两者都不需要。对于大多数生产用例，首先优化离散提示词，仅在达到硬质量上限时考虑提示词调整。' },
            { q: '提示词优化的最佳工具是什么？', a: '没有唯一的最佳工具。例如：PromptQuorum（本网站发布方的产品；同时将一个提示词发送到GPT-5.6、Claude和Gemini进行比较分析）、DSPy（带有自动基于指标选择的程序化提示词优化）、LangSmith（提示词版本控制、A/B测试和LangChain管道的追踪）、Promptfoo（用于针对测试用例和回归测试运行提示词的开源CLI）和PromptLayer（提示词版本控制和分析）。对于手动迭代，对于大多数单部分优化工作，记录提示词版本、输入、输出和基于标准的通过/失败的电子表格就足够了。' },
            { q: '我如何优化系统提示？', a: '系统提示优化遵循相同的6步流程，但有两个额外的约束。首先，系统提示在所有回合中持续存在——过于具体的指示可能会降低您未预期的输入上的性能。在5–10个不同的代表性输入上测试，而不仅仅是一个。其次，系统提示长度很重要：非常长的系统提示可能会在后续用户回合中减少某些模型上的指示跟随。为简洁而优化：系统提示中的每条指示都应该是必要的。删除不改变测试集输出的任何指示。' },
            { q: '我可以使用ChatGPT进行提示词优化吗？', a: '可以。您可以通过提供失败提示词和失败模式描述来要求GPT-5.6重写提示词："此提示词产生模糊输出。重写它以要求3点结构化答案。"这是meta-prompting的一种形式——使用模型改进其自己的输入。限制是GPT-5.6将针对它认为更好的内容进行优化，而不一定是您的特定评估标准要求的内容。始终在实际输入上测试重写提示词，并在接受修改之前针对您的实际通过/失败标准进行衡量。' },
            { q: '在机器学习背景下，提示词优化是什么意思？', a: '在机器学习背景下，提示词优化指的是改进发送到语言模型的提示词的技巧，作为管道的一部分——不重新训练模型本身。这包括离散提示词优化（重写自然语言指示）和连续提示词调整（通过梯度下降学习soft-令牌嵌入）。在ML生产系统中，提示词优化通常是推理管道的一部分：提示词被视为针对保留评估集优化的超参数，类似于模型训练期间的学习率选择。' },
            { q: '提示词优化能改进多少输出质量？', a: '提升幅度取决于模型、任务和原始提示词，因此没有通用的百分比。请用同一组测试输入分别运行新旧提示词，并比较通过率。' },
            { q: '我应该为每个模型分别优化提示词吗？', a: '从模型无关的优化开始——应用6个杠杆（具体性、上下文、示例、约束、输出格式、角色）并在GPT-5.6、Claude Opus 5和Gemini 3.1 Pro上测试。结构良好的提示词通常在全部三个上工作得很好。仅当跨模型测试显示不同的结果时才添加特定于模型的变种。值得测试的模型专属调整：Claude更好地处理较长的多部分system prompts；GPT-5.6受益于显式JSON格式请求；Gemini 3.1 Pro受益于长文档任务中的显式部分标题。在提示词库中用版本注释记录特定于模型的变种。' },
            { q: '提示词优化与RAG之间的区别是什么？', a: '提示词优化改进提示词的指示和结构。检索增强生成（RAG）通过检索相关文档并将其插入提示词上下文来改进模型在推理时可用的信息。两者是互补的：RAG解决模型没有正确事实的问题；提示词优化解决模型不正确处理这些事实的问题。完全优化的RAG管道需要好的检索（检索正确的文档）和优化良好的提示词（指导模型仅使用检索的内容、引用来源并正确格式化答案）。' },
            { q: '我如何特别针对GPT-5.6优化提示词？', a: '以下四个优化步骤值得在GPT-5.6上测试：(1)system prompts中的显式JSON格式请求——对于结构化输出，请精确定义schema。(2)system prompts中的Markdown标题——使用H2部分（## 角色、## 任务、## 输出格式）来分离关注点。(3)紧密约束——未限定字数或长度时，回答可能比需要的更长；添加"在≤150字以内回答"或"仅返回JSON对象，不解释"。(4)工具使用框架——对于涉及检索或计算的任务，如果您将Assistants API与启用的工具一起使用，将提示词表述为函数定义而不是散文指示。' },
            { q: '怎么知道提示词已经完全优化了？', a: '当提示词满足以下条件时即充分优化：(1) 在4到5个代表性输入上产生正确输出，(2) 重新运行时产生一致输出，(3) 在至少两个模型上工作，(4) 无需后处理即满足格式规范。完美的提示词不存在——"优化"意味着对用例足够可靠。' },
          ],
        },

        sources: {
          title: '来源和进一步阅读',
          items: [
            '[Schulhoff等人，2024。"提示词报告：提示技巧的系统调查"](https://arxiv.org/abs/2406.06608) — 编目58种基于文本的提示技术',
            '[Wei等人，2022。"思维链提示激发大型语言模型中的推理"](https://arxiv.org/abs/2201.11903) — 逐步推理作为优化杠杆的经过同行评审的学术基础',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — OpenAI的提示工程指南',
            '[Brown等人，2020。"语言模型是少样本学习者"](https://arxiv.org/abs/2005.14165) — 建立少样本示例作为高效能优化杠杆的基础论文；6杠杆框架中示例杠杆的基础',
          ],
        },
      },
    },
    pt: {
      theme: 'Fundamentals',
      designSkin: 'hub',
      heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-pt.webp',
      title: 'Como otimizar prompts: técnicas e melhores práticas de otimização de prompts',
      seoTitle: 'Como otimizar prompts em 2026: 6 alavancas, 6 passos',
      intro: '**A otimização de prompts é o processo iterativo de revisar um prompt para melhorar a qualidade, consistência ou precisão da saída de IA.** Este guia completo ensina técnicas de otimização de prompts e fundamentos: as 6 alavancas principais, um processo de otimização de 6 etapas, exemplos antes/depois para GPT-5.6, Claude e Gemini, e os 7 erros mais comuns a evitar ao otimizar prompts.',
      metaDescription: 'Como otimizar prompts com 6 alavancas e um processo de 6 etapas. Veja exemplos antes e depois para GPT-5.6, Claude e Gemini e 7 erros comuns a evitar.',
      publishDate: '2026-04-02',
      dateModified: '2026-11-27',
      readTime: '14 min de leitura',
      educationalLevel: 'Beginner',
      primaryTerm: 'Otimização de prompts',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        proficiencyLevel: 'Beginner to Intermediate',
        dependencies: 'Basic understanding of LLMs and prompt structure',
        headline: 'Como otimizar prompts: técnicas e melhores práticas de otimização de prompts',
        description: 'Aprenda técnicas e melhores práticas de otimização de prompts: 6 alavancas principais, processo de 6 etapas, exemplos antes/depois. Como melhorar prompts de IA no GPT-5.6, Claude, Gemini — fundamentos para todos os modelos.',
        datePublished: '2026-04-02',
        dateModified: '2026-11-27',
        keywords: ['otimização de prompts', 'técnicas de otimização de prompts', 'como otimizar prompts', 'melhorar prompts de IA', 'fundamentos de prompt engineering', 'otimização de LLM', 'GPT-5.6', 'Claude', 'Gemini', 'few-shot prompting', 'chain-of-thought'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.6' },
          { '@type': 'Thing', name: 'Claude Opus 5' },
          { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'LM Studio' },
        ],
        about: [
          { '@type': 'Thing', name: 'Otimização de prompts' },
          { '@type': 'Thing', name: 'Few-shot prompting' },
          { '@type': 'Thing', name: 'Chain-of-thought prompting' },
          { '@type': 'Thing', name: 'Qualidade de saída de LLM' },
          { '@type': 'Thing', name: 'Prompt engineering de IA' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        image: buildOgImageObject(OG_SLUG, 'pt'),
        url: 'https://www.promptquorum.com/pt/prompt-engineering/fundamentals-of-prompt-optimization',
        inLanguage: 'pt-BR',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'As 6 alavancas de otimização de prompts',
      description: 'As seis variáveis independentes que determinam a qualidade da saída de IA — cada uma pode ser ajustada para corrigir um modo de falha específico do prompt.',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Especificidade', description: 'Quão precisamente a tarefa é definida. Movimento de otimização: reescrever o objetivo vago como uma instrução exata. Exemplo: \'Resumir\' → \'Liste 3 descobertas principais em ≤20 palavras cada\'.' },
        { '@type': 'ListItem', position: 2, name: 'Contexto', description: 'Informação com que o modelo deve trabalhar. Movimento de otimização: adicionar histórico, público e restrições. Exemplo: \'Escreva um relatório\' → \'Escreva um relatório para um CFO não técnico\'.' },
        { '@type': 'ListItem', position: 3, name: 'Exemplos', description: 'Compreensão do modelo sobre o formato de saída desejado. Movimento de otimização: adicionar 1–3 pares entrada/saída (few-shot). Mostre o formato exato desejado, uma vez.' },
        { '@type': 'ListItem', position: 4, name: 'Restrições', description: 'Limites no que o modelo pode gerar. Movimento de otimização: adicionar proibições explícitas. Exemplo: \'Não use jargão. Máximo 150 palavras\'.' },
        { '@type': 'ListItem', position: 5, name: 'Formato de saída', description: 'Estrutura da resposta. Movimento de otimização: especificar o formato explicitamente. Exemplo: \'Responda em JSON: {título, resumo, tags[]}\'.' },
        { '@type': 'ListItem', position: 6, name: 'Papel/persona', description: 'Nível de especialização que o modelo adota. Movimento de otimização: adicionar um papel específico. Exemplo: \'Aja como analista de dados sênior em uma empresa B2B SaaS\'.' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como otimizar um prompt em 6 etapas',
      description: 'Um processo sistemático de 6 etapas para diagnosticar falhas de prompts e melhorar a qualidade da saída de IA no GPT-5.6, Claude e Gemini.',
      totalTime: 'PT30M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Estabelecer uma linha de base', text: 'Execute o prompt atual 3 vezes com entradas representativas. Documente o modo de falha: formato incorreto, alucinação, saída vaga ou resposta fora do tópico.' },
        { '@type': 'HowToStep', position: 2, name: 'Identificar a alavanca raiz', text: 'Mapeie a falha para uma das 6 alavancas: especificidade, contexto, exemplos, restrições, formato de saída ou papel/persona.' },
        { '@type': 'HowToStep', position: 3, name: 'Alterar apenas uma variável', text: 'Faça uma única alteração direcionada à alavanca identificada. Não altere múltiplas variáveis simultaneamente — você não consegue diagnosticar a melhoria se várias coisas mudarem.' },
        { '@type': 'HowToStep', position: 4, name: 'Testar em múltiplos modelos', text: 'Execute o prompt revisado no GPT-5.6, Claude Opus 5 e Gemini 3.1 Pro. Um prompt que só funciona em um modelo é frágil.' },
        { '@type': 'HowToStep', position: 5, name: 'Medir em relação aos critérios de qualidade', text: 'Verifique a precisão da tarefa, conformidade de formato, ancoragem factual, consistência em 3 execuções e concordância entre modelos.' },
        { '@type': 'HowToStep', position: 6, name: 'Salvar em uma biblioteca de prompts', text: 'Documente o que mudou e por que funcionou. Versione o prompt otimizado. Um prompt testado é um ativo reutilizável duradouro.' },
      ],
    },
    leadAnswerBlock: '**A otimização de prompts é o processo iterativo de revisar um prompt existente para melhorar a qualidade, precisão ou consistência da saída.** As 6 alavancas de otimização — especificidade, contexto, exemplos, restrições, formato de saída e papel/persona — são as variáveis independentes que você ajusta. Altere uma variável por iteração, teste em múltiplos modelos e meça os resultados. Essa abordagem sistemática reduz as suposições do refinamento de prompts.',
    quickFacts: [
      '**6 alavancas principais:** especificidade, contexto, exemplos, restrições, formato de saída e papel/persona — essas são as principais variáveis que este guia ajusta',
      '**2–4 iterações suficientes:** a maioria das tarefas atinge qualidade aceitável em 2–4 iterações direcionadas antes de os retornos decrescentes se estabelecerem',
      '**Testes multi-modelo obrigatórios:** um prompt que funciona no GPT-5.6 mas falha no Claude é frágil — teste em ≥2 modelos para confirmar a robustez',
      '**Fine-tuning:** costuma exigir mais tempo e dinheiro do que a otimização de prompts; tente a otimização antes',
    ],
    toc: [
      { label: 'Principais conclusões', anchor: 'key-takeaways' },
    ],
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O que é otimização de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'A otimização de prompts é o processo iterativo de revisar um prompt existente para melhorar a qualidade da saída de IA para uma tarefa específica. Envolve identificar um modo de falha (formato incorreto, alucinação, saída vaga), alterar uma variável (especificidade, contexto, exemplos, restrições, formato de saída ou papel) e testar o resultado em modelos como GPT-5.6, Claude Opus 5 e Gemini 3.1 Pro.' } },
        { '@type': 'Question', name: 'Qual é a diferença entre otimização de prompts e prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'O prompt engineering é a disciplina de projetar uma estrutura de prompt do zero usando blocos de construção como objetivo, contexto e formato de saída. A otimização de prompts é o subprocesso iterativo de melhorar um prompt já escrito, diagnosticando modos de falha e aplicando alterações direcionadas. Você precisa do prompt engineering para criar um ponto de partida; usa a otimização de prompts para refiná-lo.' } },
        { '@type': 'Question', name: 'Quantas iterações são necessárias para otimizar um prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Para a maioria das tarefas, 2–4 iterações direcionadas são suficientes para passar de um prompt com falhas para um confiável. Cada iteração deve alterar uma variável e ser testada em 3–5 entradas representativas. Os retornos decrescentes se estabelecem após 5–6 iterações — se um prompt não se estabilizou até lá, a própria definição da tarefa pode precisar ser revisada.' } },
        { '@type': 'Question', name: 'Qual alavanca devo alterar primeiro ao otimizar um prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Comece com o formato de saída. A não conformidade de formato — receber um parágrafo quando você queria uma tabela, ou texto simples quando precisava de JSON — é o modo de falha mais comum e mais rápido de corrigir. Especifique a estrutura exata que você quer e, em seguida, aborde outros problemas (precisão, tom, escopo) em iterações subsequentes.' } },
        { '@type': 'Question', name: 'A otimização de prompts funciona em todos os modelos de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, mas com ajustes específicos do modelo. As seis alavancas principais de otimização (especificidade, contexto, exemplos, restrições, formato de saída, papel) se aplicam ao GPT-5.6, Claude Opus 5, Gemini 3.1 Pro e Mistral Large. No entanto, cada modelo responde de forma diferente à densidade de instruções. Teste em cada modelo que você usa.' } },
        { '@type': 'Question', name: 'Qual é o erro mais comum na otimização de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Alterar múltiplas variáveis simultaneamente. Se você adiciona exemplos, altera o formato de saída e adiciona uma instrução de papel na mesma revisão, não consegue determinar qual alteração melhorou (ou piorou) a saída. A otimização eficaz altera uma variável por iteração.' } },
        { '@type': 'Question', name: 'A otimização de prompts pode reduzir alucinações de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, com as técnicas certas. Adicionar contexto de ancoragem ("Base sua resposta apenas no documento a seguir"), exemplos few-shot com saídas factualmente corretas e restrições explícitas ("Não invente dados — use apenas dados do texto fornecido") pode ajudar a reduzir alucinações. O self-consistency prompting — gerando múltiplas saídas e retornando a mais comum — reduz ainda mais as fabricações de baixa probabilidade.' } },
        { '@type': 'Question', name: 'Quando devo usar fine-tuning em vez de otimização de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Use o fine-tuning quando a otimização de prompts atingiu um teto — tipicamente quando o comportamento necessário é altamente específico do domínio, requer uma voz estilística consistente em milhares de saídas ou depende de conhecimento que não está no treinamento do modelo base. A otimização de prompts é mais rápida e econômica e deve sempre ser esgotada antes do fine-tuning.' } },
        { '@type': 'Question', name: 'Como sei quando um prompt está totalmente otimizado?', acceptedAnswer: { '@type': 'Answer', text: 'Um prompt está suficientemente otimizado quando: (1) produz saída correta em 4–5 entradas representativas, (2) produz saída consistente em re-execuções, (3) funciona em pelo menos dois modelos (ex.: GPT-5.6 e Claude), e (4) atende à especificação de formato sem pós-processamento. Prompts perfeitos não existem — "otimizado" significa confiável o suficiente para o caso de uso.' } },
        { '@type': 'Question', name: 'A otimização de prompts se aplica a prompts de imagem (texto para imagem)?', acceptedAnswer: { '@type': 'Answer', text: 'Os princípios se aplicam — especificidade, restrições e exemplos (imagens de referência) são alavancas válidas para modelos de imagem como DALL-E 3 e Stable Diffusion. No entanto, a mecânica difere: modelos de imagem respondem a modificadores de estilo, especificações de proporção e prompts negativos como restrições. O processo de otimização (linha de base → diagnosticar → alterar uma variável → testar) é idêntico.' } },
        { '@type': 'Question', name: 'O que é otimização automática de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'A otimização automática de prompts usa um segundo modelo de IA (ou o mesmo modelo em um loop de meta-prompting) para reescrever e melhorar prompts sem intervenção humana. Ferramentas como DSPy (Stanford), TextGrad e APE (Automatic Prompt Engineer) geram prompts candidatos, pontuam-nos em relação a uma métrica (precisão, conformidade de formato, avaliação do usuário) e selecionam a melhor variante. A otimização manual é mais rápida para tarefas bem compreendidas; a automática escala melhor quando você tem dados de avaliação rotulados e precisa testar centenas de variantes.' } },
        { '@type': 'Question', name: 'Como a otimização de prompts difere do prompt tuning?', acceptedAnswer: { '@type': 'Answer', text: 'A otimização de prompts melhora prompts de texto discreto — as instruções que você escreve em linguagem natural — sem modificar os pesos do modelo. O prompt tuning (introduzido por Lester et al., 2021) aprende vetores de prompt suave contínuos que são pré-adicionados à entrada e treinados por descida de gradiente junto com o modelo ou em vez dele. O prompt tuning requer computação e dados de treinamento; a otimização de prompts não requer nenhum dos dois. Para a maioria dos casos de uso em produção, otimize prompts discretos primeiro e considere o prompt tuning apenas quando um teto de qualidade difícil for atingido.' } },
        { '@type': 'Question', name: 'Quais são as melhores ferramentas para otimização de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Não existe uma única melhor ferramenta. Alguns exemplos: PromptQuorum (produto do responsável por este site; envie um prompt ao GPT-5.6, Claude e Gemini simultaneamente para comparação lado a lado), DSPy (otimização programática de prompts com seleção automática baseada em métricas), LangSmith (versionamento de prompts, testes A/B e rastreamento para pipelines LangChain), Promptfoo (CLI open-source para executar prompts contra casos de teste e testes de regressão) e PromptLayer (versionamento e análises de prompts). Para iteração manual, uma planilha registrando a versão do prompt, entrada, saída e aprovação/falha em relação aos critérios é suficiente para a maioria dos trabalhos de otimização de tarefa única.' } },
        { '@type': 'Question', name: 'Como otimizo um system prompt?', acceptedAnswer: { '@type': 'Answer', text: 'A otimização do system prompt segue o mesmo processo de 6 etapas da otimização do prompt do usuário, com duas restrições adicionais. Primeiro, os system prompts persistem em todos os turnos — uma instrução muito específica pode degradar o desempenho em entradas que você não antecipou. Teste em 5–10 entradas representativas diversas, não apenas uma. Segundo, o comprimento do system prompt importa: system prompts muito longos podem reduzir o seguimento de instruções em turnos posteriores do usuário em alguns modelos. Otimize para concisão: cada instrução no system prompt deve ser necessária. Remova qualquer instrução que não altere a saída em seu conjunto de teste.' } },
        { '@type': 'Question', name: 'Você pode usar o ChatGPT para otimizar prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Você pode pedir ao GPT-5.6 para reescrever um prompt fornecendo o prompt com falha e descrevendo o modo de falha: "Este prompt produz saída muito vaga. Reescreva-o para exigir uma resposta estruturada de 3 tópicos." Isso é uma forma de meta-prompting — usar o modelo para melhorar suas próprias entradas. A limitação é que o GPT-5.6 otimizará para o que considera melhor, não necessariamente para seus critérios de avaliação específicos. Sempre teste o prompt reescrito em entradas reais e meça em relação aos seus critérios reais de aprovação/falha antes de aceitar a revisão.' } },
        { '@type': 'Question', name: 'O que é otimização de prompts em machine learning?', acceptedAnswer: { '@type': 'Answer', text: 'Em contextos de machine learning, a otimização de prompts refere-se a técnicas que melhoram os prompts alimentados em modelos de linguagem como parte de um pipeline — sem retreinar o modelo. Isso inclui tanto a otimização de prompts discretos (reescrita de instruções em linguagem natural) quanto o prompt tuning contínuo (aprendizado de embeddings de tokens suaves por descida de gradiente). Em sistemas de ML em produção, a otimização de prompts é tipicamente parte do pipeline de inferência: o prompt é tratado como um hiperparâmetro ajustado em relação a um conjunto de avaliação retido, análogo à seleção de taxa de aprendizado no treinamento do modelo.' } },
        { '@type': 'Question', name: 'Quanto a otimização de prompts melhora a qualidade da saída de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do modelo, da tarefa e do prompt inicial, por isso não existe um percentual geral. Meça você mesmo: rode o prompt antigo e o novo nas mesmas entradas e compare as taxas de aprovação.' } },
        { '@type': 'Question', name: 'Devo otimizar prompts para cada modelo de IA separadamente?', acceptedAnswer: { '@type': 'Answer', text: 'Comece com uma otimização agnóstica ao modelo — aplique as 6 alavancas (especificidade, contexto, exemplos, restrições, formato de saída, papel) e teste no GPT-5.6, Claude Opus 5 e Gemini 3.1 Pro. Um prompt bem estruturado geralmente funciona bem nos três. Adicione variantes específicas do modelo apenas se os testes entre modelos revelarem resultados divergentes. Ajustes por modelo que vale testar: o Claude lida bem com system prompts longos e de múltiplas partes; o GPT-5.6 se beneficia de solicitações explícitas de formato JSON; o Gemini 3.1 Pro se beneficia de cabeçalhos de seção explícitos em tarefas com documentos longos. Mantenha variantes específicas do modelo em uma biblioteca de prompts com notas de versão.' } },
        { '@type': 'Question', name: 'Qual é a diferença entre otimização de prompts e RAG?', acceptedAnswer: { '@type': 'Answer', text: 'A otimização de prompts melhora as instruções e a estrutura de um prompt. RAG (Retrieval-Augmented Generation) melhora as informações disponíveis para o modelo no momento da inferência, recuperando documentos relevantes e inserindo-os no contexto do prompt. Os dois são complementares: o RAG resolve o problema de o modelo não ter os fatos corretos; a otimização de prompts resolve o problema de o modelo não processar esses fatos corretamente. Um pipeline RAG totalmente otimizado requer tanto uma boa recuperação (os documentos corretos são buscados) quanto um prompt bem otimizado (o modelo é instruído a usar apenas o conteúdo recuperado, citar fontes e formatar a resposta corretamente).' } },
        { '@type': 'Question', name: 'Como otimizo prompts especificamente para o GPT-5.6?', acceptedAnswer: { '@type': 'Answer', text: 'Vale testar quatro movimentos de otimização no GPT-5.6: (1) Solicitações de formato JSON explícitas no system prompt — para saída estruturada, defina o schema com precisão. (2) Cabeçalhos Markdown em system prompts — use seções H2 (## Papel, ## Tarefa, ## Formato de saída) para separar as preocupações. (3) Restrições rígidas — sem limite de palavras ou de comprimento, as respostas podem ficar maiores que o necessário; adicione "responda em ≤150 palavras" ou "retorne apenas o objeto JSON, sem explicação." (4) Enquadramento de uso de ferramentas — para tarefas envolvendo recuperação ou cálculo, enquadre o prompt como uma definição de função em vez de uma instrução em prosa ao usar a API de Assistentes com ferramentas habilitadas.' } },
      ],
    },
    sections: {

        tldr: {
          title: 'Principais conclusões',
          isTldr: true,
          items: [
            'Otimização de prompts = revisão iterativa de um prompt existente para melhorar a qualidade da saída',
            'As 6 alavancas: **especificidade**, **contexto**, **exemplos**, **restrições**, **formato de saída**, **papel/persona**',
            'Altere uma alavanca de cada vez — isolar variáveis é como você descobre o que realmente funciona',
            'Teste em ≥2 modelos (GPT-5.6, Claude, Gemini) para confirmar que a melhoria é agnóstica ao modelo',
            'Modo de falha comum: alterar variáveis demais de uma vez torna o diagnóstico impossível',
            'Um prompt testado e otimizado é um ativo duradouro — salve-o em uma biblioteca de prompts',
          ],
        },

        localLLMTldr: {
          title: 'Principais conclusões para usuários de LLM local',
          items: [
            'A otimização de prompts é mais crítica para modelos locais — modelos quantizados (4-bit, 8-bit) podem ser mais sensíveis a instruções ambíguas',
            'Ollama e LM Studio suportam as mesmas 6 alavancas de otimização; a diferença é que modelos menores (LLaMA 3.1 8B, Mistral Small) costumam precisar de restrições mais explícitas e entradas mais curtas',
            'Modelos quantizados podem seguir instruções com menos confiabilidade — use prompts mais simples e prescritivos com formato de saída explícito e menos restrições simultâneas',
            'Os padrões de temperatura diferem: o Ollama tem padrão 0,8 (maior criatividade, menor consistência); defina a temperatura para 0,1–0,3 para tarefas de saída estruturada que exigem consistência entre execuções',
            'Para estimar a diferença de qualidade, use as mesmas entradas no seu modelo local e em modelos na nuvem, por exemplo comparando com GPT-5.6 e Claude no PromptQuorum',
          ],
        },

        definition: {
          title: 'O que é otimização de prompts?',
          content: [
            '**A otimização de prompts é o processo iterativo de revisar um prompt existente para melhorar a qualidade, precisão ou consistência da saída de IA para uma tarefa específica.** Aplica-se a todos os modelos principais — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro e modelos executados localmente via Ollama ou LM Studio. Onde o prompt engineering projeta a estrutura inicial do prompt, a otimização de prompts diagnostica o que está falhando e aplica alterações direcionadas até que a saída atenda a um padrão definido.',
            'A otimização de prompts é um subprocesso do prompt engineering. Você sempre começa com um prompt funcionando e faz uma alteração de cada vez. Esse isolamento de variáveis é o que torna o diagnóstico possível — quando você revisa especificidade, formato de saída e restrições simultaneamente, não consegue determinar qual alteração melhorou o resultado. A habilidade da otimização de prompts está em mapear uma falha para a alavanca certa, alterar apenas essa variável e medir a melhoria.',
            'Por que isso importa: o mesmo modelo produz saídas radicalmente diferentes de prompts quase idênticos. A diferença entre "mais ou menos correto" e "confiavelmente certo" não é sorte — é otimização sistemática. Um prompt não otimizado tem sucesso em algumas entradas e falha em outras. Um prompt otimizado tem sucesso consistentemente em uma amostra representativa de entradas.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'A otimização de prompts é o processo sistemático de diagnosticar por que um prompt falha e corrigir uma variável de cada vez até que a saída atenda aos seus critérios de qualidade.' },
          ],
        },

        vsPromptEngineering: {
          title: 'Otimização de prompts vs prompt engineering',
          content: [
            '**A otimização de prompts e o prompt engineering são disciplinas complementares que trabalham em sequência.** O prompt engineering projeta um prompt do zero usando blocos de construção (objetivo, contexto, exemplos, restrições, formato de saída, papel). A otimização de prompts pega um prompt existente e o melhora por meio de revisão iterativa. Você precisa de ambos: o prompt engineering leva você a "funcionando"; a otimização de prompts leva você a "confiável".',
            'Pense desta forma: o prompt engineering constrói a estrutura; a otimização de prompts a refina. O prompt engineering pergunta "quais elementos este prompt deve ter?" A otimização de prompts pergunta "por que este prompt está falhando e qual única alteração o corrigirá?" A distinção importa porque as estratégias são diferentes. O engineering começa com princípios e blocos de construção. A otimização começa com o diagnóstico de falhas.',
          ],
          columns: ['Dimensão', 'Prompt Engineering', 'Otimização de prompts'],
          rows: [
            { 'Dimensão': 'Ponto de partida', 'Prompt Engineering': 'Página em branco', 'Otimização de prompts': 'Prompt existente' },
            { 'Dimensão': 'Objetivo', 'Prompt Engineering': 'Projetar a estrutura', 'Otimização de prompts': 'Melhorar a saída' },
            { 'Dimensão': 'Método', 'Prompt Engineering': 'Frameworks, blocos de construção', 'Otimização de prompts': 'Isolar, alterar, testar, medir' },
          ],
        },

        whyOptimize: {
          title: 'Por que a otimização de prompts importa',
          content: [
            '**A otimização de prompts reduz saídas inconsistentes de IA ao diagnosticar sistematicamente o que falha e corrigir uma variável de cada vez.** Um prompt vago produz uma saída vaga. Um prompt mal especificado produz uma resposta fora do alvo. Um prompt que funciona na segunda-feira pode falhar na sexta-feira se a entrada mudar levemente. A otimização pode reduzir essas variações por meio de diagnóstico sistemático e revisão direcionada.',
            'Exemplo ilustrativo, não um teste medido: "Resuma este artigo." pode gerar tamanho e foco diferentes a cada execução. Adicionar um formato de saída ("3 tópicos, ≤20 palavras cada"), um papel ("analista") e uma tarefa precisa ("Liste as 3 descobertas principais, não a metodologia") costuma reduzir essa variação.',
            'Para o contexto regulatório, veja [Geopolítica e IA](/prompt-engineering/geopolitics-and-ai).',
          ],
        },

        callout1: {
          blockquote: 'No benchmark de problemas matemáticos GSM8K, mostrar ao modelo PaLM de 540B parâmetros alguns exemplos resolvidos com raciocínio passo a passo (chain-of-thought few-shot) elevou a taxa de resolução de 17,9% com prompting padrão para 56,9%, sem retreinamento.',
          blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
        },

        sixLevers: {
          title: 'As 6 alavancas de otimização',
          content: [
            '**Todo prompt consiste em seis variáveis independentes que você pode ajustar para melhorar a saída.** Essas são as "alavancas" da otimização. Quando um prompt falha, a falha se rastreia a uma ou mais dessas alavancas não configuradas corretamente. A habilidade da otimização está em mapear um sintoma para a alavanca certa, alterá-la e medir o resultado.',
          ],
          columns: ['Alavanca', 'O que muda', 'Movimento de otimização', 'Exemplo'],
          rows: [
            { 'Alavanca': 'Especificidade', 'O que muda': 'Quão precisamente a tarefa é definida', 'Movimento de otimização': 'Reescrever objetivo vago como instrução exata', 'Exemplo': '"Resumir" → "Liste 3 descobertas principais em ≤20 palavras cada"' },
            { 'Alavanca': 'Contexto', 'O que muda': 'Informação com que o modelo trabalha', 'Movimento de otimização': 'Adicionar histórico, público, restrições', 'Exemplo': '"Escreva um relatório" → "Escreva um relatório para um CFO não técnico"' },
            { 'Alavanca': 'Exemplos', 'O que muda': 'Compreensão do modelo sobre o formato desejado', 'Movimento de otimização': 'Adicionar 1–3 pares entrada/saída (few-shot)', 'Exemplo': 'Mostre o formato exato que você quer, uma vez' },
            { 'Alavanca': 'Restrições', 'O que muda': 'Limites no que o modelo pode gerar', 'Movimento de otimização': 'Adicionar proibições explícitas', 'Exemplo': '"Não use jargão. Máximo 150 palavras."' },
            { 'Alavanca': 'Formato de saída', 'O que muda': 'Estrutura da resposta', 'Movimento de otimização': 'Especificar formato explicitamente', 'Exemplo': '"Responda em JSON: {título, resumo, tags[]}"' },
            { 'Alavanca': 'Papel/persona', 'O que muda': 'Nível de especialização que o modelo adota', 'Movimento de otimização': 'Adicionar um papel específico', 'Exemplo': '"Aja como analista de dados sênior em uma empresa B2B SaaS"' },
          ],
        },

        callout2: {
          blockquote: 'A ampliação de escala do GPT-3 mostrou que o aprendizado few-shot, com poucos exemplos no prompt e sem atualizações de gradiente, chegava a competir em algumas tarefas com as melhores abordagens anteriores de fine-tuning.',
          blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
        },

        optimizationProcess: {
          title: 'O processo de otimização de 6 etapas',
          content: [
            '**A otimização de prompts é um processo sistemático e mensurável.** Cada etapa estreita o diagnóstico: você identifica o sintoma, mapeia-o para uma alavanca, altera uma variável, testa em modelos e mede a melhoria. Aqui está o processo exato:',
          ],
          items: [
            '**Etapa 1: Estabeleça uma linha de base.** Execute o prompt atual na sua tarefa alvo 3 vezes com entradas representativas. Anote o modo de falha: a saída é longa demais ou curta demais? Formato errado? Alucinando? Fora do tópico? Tangencial? Essa linha de base é crucial — você não consegue medir a melhoria sem ela.',
            '**Etapa 2: Identifique a alavanca raiz.** Mapeie a falha para uma das 6 alavancas. Exemplos: "a saída é uma parede de texto em vez de tópicos" → alavanca de formato de saída; "a resposta é vaga" → alavanca de especificidade; "o tom está errado" → alavanca de papel; "inclui fatos inventados" → alavanca de contexto ou restrições.',
            '**Etapa 3: Altere uma variável.** Faça uma única alteração direcionada à alavanca identificada. Não edite o objetivo, adicione exemplos E altere o formato na mesma revisão — você não consegue atribuir a melhoria se três coisas mudaram. Esse isolamento é inegociável.',
            '**Etapa 4: Teste em múltiplos modelos.** Execute o prompt revisado no GPT-5.6, Claude Opus 5 e Gemini 3.1 Pro. Um prompt que só funciona em um modelo é frágil e específico do modelo. Use o PromptQuorum para enviar um prompt aos três simultaneamente e comparar as respostas lado a lado. A concordância entre modelos significa que o prompt é robusto; a divergência significa que você precisa de mais refinamento.',
            '**Etapa 5: Meça em relação aos critérios.** A precisão melhorou? O formato ficou em conformidade? As alucinações diminuíram? As saídas agora passam nos testes de consistência (executando 3× seguidas)? A medição é como você confirma que a alteração funcionou. Se você fez a alteração mas não viu melhoria, a alteração não abordou a causa raiz — tente uma alavanca diferente.',
            '**Etapa 6: Salve em uma biblioteca de prompts.** Um prompt testado e otimizado é um ativo reutilizável. Documente o que mudou e por que melhorou. Versione-o. Uma biblioteca de prompts armazenada e com controle de versão é muito mais valiosa do que um prompt único que resolveu um problema uma vez.',
          ],
          promptExamples: [
            {
              badLabel: '❌ Ruim: Alterando múltiplas variáveis de uma vez',
              bad: 'Prompt original: "Resuma este artigo."\n\nRevisão 1 (ERRADO): "Resuma este artigo em 3 tópicos. Aja como analista financeiro. Não use jargão. Inclua os principais riscos destacados. Formate como JSON."',
              goodLabel: '✅ Bom: Isolando uma variável por iteração',
              good: 'Prompt original: "Resuma este artigo."\n\nRevisão 1 (correto): "Resuma este artigo em 3 tópicos, ≤20 palavras cada."\n→ Resultado possível: A saída agora tem formato consistente, mas é vaga.\n\nRevisão 2: "Resuma em 3 tópicos focando nos principais riscos de negócios destacados. Cada um ≤20 palavras."\n→ Resultado possível: Melhor relevância, mas falta contexto do público.\n\nRevisão 3: "Você é um CFO revisando um relatório de risco de fornecedor. Resuma em 3 tópicos focando nos riscos principais. ≤20 palavras cada."\n→ Resultado possível: Específico, acionável, consistente. PRONTO.',
            },
          ],
        },

        callout3: {
          blockquote: 'Em um experimento on-line pré-registrado com 453 profissionais com ensino superior em tarefas de escrita específicas de sua profissão, o acesso ao ChatGPT reduziu o tempo médio em 40% e elevou a qualidade do resultado em 18%. A desigualdade entre os trabalhadores diminuiu.',
          blockquoteSource: 'Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
        },

        measurementCriteria: {
          title: 'Como medir a qualidade do prompt',
          content: [
            '**Você não consegue otimizar o que não consegue medir.** Os critérios a seguir definem se um prompt foi bem-sucedido. Use esses pontos de verificação após cada iteração:',
          ],
          columns: ['Critério', 'O que verificar', 'Sinal de aprovação / falha'],
          rows: [
            { 'Critério': 'Precisão da tarefa', 'O que verificar': 'A saída responde à pergunta real?', 'Sinal de aprovação / falha': 'Compare com uma resposta correta conhecida' },
            { 'Critério': 'Conformidade de formato', 'O que verificar': 'A saída corresponde à estrutura especificada?', 'Sinal de aprovação / falha': 'O JSON foi analisado? Os tópicos têm o comprimento certo?' },
            { 'Critério': 'Ancoragem factual', 'O que verificar': 'As afirmações específicas estão corretas?', 'Sinal de aprovação / falha': 'Verifique pontualmente 3–5 fatos' },
            { 'Critério': 'Consistência', 'O que verificar': 'A re-execução produz saída semelhante?', 'Sinal de aprovação / falha': 'Execute o mesmo prompt 3× — as saídas diferem estruturalmente?' },
            { 'Critério': 'Eficiência de tokens', 'O que verificar': 'O comprimento da saída é adequado?', 'Sinal de aprovação / falha': 'Meça a contagem de tokens vs. densidade de informação' },
            { 'Critério': 'Concordância entre modelos', 'O que verificar': '2–3 modelos produzem resultados semelhantes?', 'Sinal de aprovação / falha': 'Envie ao GPT-5.6, Claude, Gemini via PromptQuorum — concordância = robusto' },
          ],
        },

        callout4: {
          blockquote: 'Em um experimento com 758 consultores da BCG, quem usou IA em 18 tarefas realistas dentro da fronteira de capacidade da IA produziu resultados com qualidade avaliada em mais de 40% acima da do grupo de controle. Em uma tarefa escolhida para ficar fora dessa fronteira, quem usou IA teve 19 pontos percentuais a menos de chance de chegar a soluções corretas.',
          blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
        },

        beforeAfterExamples: {
          title: 'Como é a otimização de prompts na prática?',
          content: [
            '**A otimização de prompts é visível na mudança de instruções vagas para precisas.** Esses pares antes/depois mostram cada uma das 6 alavancas em ação:',
          ],
          items: [
            '**Ruim:** "Resuma este artigo." | **Melhorado:** "Resuma em 3 tópicos, ≤20 palavras cada. Foque no impacto no negócio." | **Por quê:** O formato de saída pode reduzir a inconsistência.',
            '**Ruim:** "Revise este código." | **Melhorado:** "Revise para (1) correção, (2) desempenho, (3) segurança. Cite números de linha. Máximo 3 problemas." | **Por quê:** Papel + restrições podem reduzir feedback genérico.',
            '**Ruim:** "Sintetize estes artigos." | **Melhorado:** "Sintetize apenas a partir dos 5 artigos fornecidos. Formato: [Descoberta A]. [Descoberta B]. [Implicação]. Não invente." | **Por quê:** Contexto + restrições podem reduzir alucinações.',
            '**Ruim:** "Escreva um e-mail para um cliente." | **Melhorado:** "Escreva um e-mail para um cliente irritado que esperou 2 semanas pelo suporte. Peça desculpas uma vez, ofereça 2 soluções, peça preferência. ≤150 palavras." | **Por quê:** Especificidade + restrições melhoram o tom e a relevância.',
            '**Ruim:** "Extraia dados desta tabela." | **Melhorado:** "Extraia nomes e valores como JSON: [{\"nome\": \"...\", \"valor\": ...}]. Sem explicações." | **Por quê:** Um formato explícito pode reduzir texto indesejado.',
            '**Ruim:** "Este código é seguro?" | **Melhorado:** "Verifique: (1) injeção de SQL, (2) entrada de usuário não validada, (3) segredos hardcoded. Responda com cada descoberta como: [Linha N: Problema]. Sem falsos positivos." | **Por quê:** Especificidade + restrições melhoram a precisão.',
          ],
        },

        definitionBoxes: {
          title: 'O que significam esses termos de otimização de prompts?',
          content: [],
          items: [
            '**Otimização de prompts** — O processo iterativo de revisar um prompt para melhorar a qualidade da saída, diagnosticando modos de falha e alterando uma variável (especificidade, contexto, exemplos, restrições, formato ou papel) de cada vez. Veja [5 Blocos de Construção que Todo Prompt Precisa](/prompt-engineering/5-building-blocks-every-prompt-needs) para os elementos estruturais que você está otimizando.',
            '**Few-shot prompting** — Incluir 1–3 exemplos de entrada/saída no prompt para ensinar ao modelo o formato ou padrão desejado. Veja [Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) para quando adicionar exemplos como a alavanca de otimização principal.',
            '**Chain-of-Thought (CoT)** — Pedir ao modelo que raciocine passo a passo ("pense antes de responder") o que pode melhorar o raciocínio em várias etapas; o ganho depende do modelo e da tarefa. Veja [Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) para técnicas detalhadas.',
            '**Restrição** — Uma proibição ou limite explícito (ex.: "não use jargão", "máximo 150 palavras", "cite apenas fontes") que estreita o escopo da saída e previne modos de falha comuns. Veja [Constrained Prompting](/prompt-engineering/constrained-prompting) para padrões avançados de restrições.',
            '**Token** — A menor unidade de texto que o modelo processa; aproximadamente 4 caracteres ou 1 palavra em inglês. O comprimento do prompt e o orçamento de saída são medidos em tokens. Veja [Tokens, Custos e Limites](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) para cálculo de custos.',
            '**Alucinação** — Saída confiante, mas factualmente incorreta; ocorre quando o modelo inventa fatos, cita estudos inexistentes ou repete afirmações não fundamentadas. Veja [Alucinações de IA: Por que a IA Inventa Coisas](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — mitigada adicionando contexto de ancoragem, exemplos e restrições.',
            '**Fine-tuning** — Retreinar os pesos do modelo em dados rotulados específicos do domínio; usado quando a otimização de prompts não consegue atingir a qualidade necessária. Sempre esgote a otimização antes do fine-tuning — é mais lento e mais caro.',
            '**RAG (Retrieval-Augmented Generation)** — Injetar documentos recuperados no contexto do prompt antes de pedir ao modelo para responder. Veja [RAG Explicado](/prompt-engineering/rag-explained) — complementar à otimização (RAG melhora a informação; a otimização melhora como o modelo a usa).',
            '**System prompt** — Instrução persistente que define o papel, as restrições e o comportamento do modelo em todos os turnos. Veja [System Prompt vs User Prompt](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference) — requer teste de otimização separado do prompt voltado ao usuário.',
            '**Especificidade** — Precisão na definição da tarefa; passando de instruções vagas ("resumir") para requisitos exatos ("liste 3 tópicos, ≤20 palavras cada"). A primeira e frequentemente mais impactante alavanca de otimização a ajustar.',
          ],
        },

        modelSpecificTips: {
          title: 'Dicas de otimização específicas por modelo',
          content: [
            '**As 6 alavancas de otimização se aplicam a todos os modelos principais — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro e Mistral Large.** No entanto, cada modelo responde de forma diferente à densidade de instruções, especificidade de formato e definição de papel. Abaixo estão dicas de ajuste específicas por modelo: São pontos de partida gerais, não resultados medidos; verifique cada um com as suas próprias entradas.',
          ],
          items: [
            '**GPT-5.6 (OpenAI):** Responde bem a solicitações explícitas de formato JSON e cabeçalhos Markdown em system prompts. O seguimento de instruções é forte — restrições rígidas reduzem a explicação excessiva. Se seu prompt do GPT-5.6 está explicando demais, adicione uma restrição: "Seja conciso. Não explique seu raciocínio a menos que solicitado."',
            '**Claude Opus 5 (Anthropic):** Excelente em instruções matizadas e de múltiplas partes. Lida com system prompts longos e detalhados de forma confiável. Beneficia-se de orientação explícita sobre o comprimento da saída ("responda em ≤200 palavras"). Se você está otimizando para brevidade, seja específico: "Responda em no máximo 150 palavras."',
            '**Gemini 3.1 Pro (Google DeepMind):** Adequado para a análise de documentos longos (janela de contexto grande). Cabeçalhos de seção explícitos em prompts melhoram a consistência da saída estruturada. Se você está processando documentos longos, adicione cabeçalhos: "## Documento de entrada\n[documento]\n## Tarefa\n[tarefa]."',
            '**Mistral Large (Mistral AI):** Beneficia-se de definições de papel explícitas e formulação de instruções mais prescritiva. Se seu prompt funciona no GPT-5.6 mas não no Mistral, torne as instruções mais explícitas e adicione um papel: "Você é um [papel específico]. Sua tarefa é [objetivo explícito]."',
          ],
          snippets: [
            { type: 'in-plain-terms', text: 'Modelos diferentes têm "personalidades" diferentes — o Claude é paciente com instruções longas, o GPT-5.6 prefere restrições rígidas, o Gemini lida com documentos massivos. Após otimizar um prompt, teste-o em todos os seus modelos alvo, pois um tamanho único não serve para todos.' },
          ],
        },

        localLLMExamples: {
          title: 'Otimizando prompts para LLMs locais (Ollama, LM Studio)',
          content: [
            '**Modelos locais executados via Ollama ou LM Studio respondem às mesmas 6 alavancas de otimização, mas com tolerâncias mais rígidas.** Modelos quantizados (4-bit, 8-bit) podem seguir instruções com menos confiabilidade, por isso comece com prompts simples e explícitos. Os exemplos abaixo mostram a otimização antes/depois para três modos de falha comuns de LLM local. São cenários ilustrativos, não resultados de testes: os nomes dos modelos apenas indicam configurações locais típicas, e as falhas descritas são possíveis, não defeitos medidos nesses modelos.',
          ],
          items: [
            '**Exemplo 1: Inconsistência de saída de modelo quantizado (Alavanca: Formato de saída + Restrições)**\n_Modelo:_ LLaMA 3.1 8B via Ollama (quantização de 4 bits)\n_Prompt fraco:_ "Resuma este ticket de suporte."\n_Possível modo de falha:_ A saída varia muito entre as execuções — às vezes uma frase, às vezes uma lista, às vezes uma pergunta de volta ao usuário.\n_Alavanca alterada:_ Formato de saída + restrição de temperatura.\n_Prompt otimizado:_ "Resuma este ticket de suporte em exatamente 2 frases. Frase 1: o problema do cliente. Frase 2: o que ele tentou. Nenhum outro texto."\n_Correção adicional:_ Inicie `ollama run llama3.1` e digite `/set parameter temperature 0.1`.\n_Objetivo (não é resultado medido):_ Resumos de 2 frases; verifique com o seu modelo e os seus tickets.',
            '**Exemplo 2: Falha de restrição de comprimento de contexto no LM Studio (Alavanca: Especificidade + Contexto)**\n_Modelo:_ Mistral Small Instruct via LM Studio (quantização Q4_K_M, contexto de 4096 tokens)\n_Prompt fraco:_ "Analise este documento e liste os principais riscos." [documento completo de 3.000 palavras colado]\n_Possível modo de falha:_ O modelo trunca no meio da análise, perde o último terço do documento, produz saída incompleta sem sinalizar a truncagem.\n_Alavanca alterada:_ Especificidade — reduza o escopo para caber no orçamento de contexto.\n_Prompt otimizado:_ "Você é um analista de riscos. Leia o seguinte trecho do documento (apenas as primeiras 1.500 palavras) e liste até 5 riscos específicos, cada um em ≤15 palavras. Formato: Risco 1: [descrição]. Risco 2: [descrição]. Pare após 5."\n_Objetivo (não é resultado medido):_ Uma análise que caiba na janela de contexto; verifique se a saída não foi truncada.',
            '**Exemplo 3: Substituição de instrução em modelos quantizados (Alavanca: Restrições)**\n_Modelo:_ Phi-3 Mini via Ollama\n_Prompt fraco:_ "Extraia todas as datas deste texto. Retorne apenas JSON."\n_Possível modo de falha:_ O modelo retorna JSON mais um parágrafo de explicação ("Aqui estão as datas que encontrei..."). Modelos pequenos frequentemente adicionam comentários não solicitados mesmo quando o formato é especificado.\n_Alavanca alterada:_ Restrições — proibição explícita.\n_Prompt otimizado:_ "Extraia todas as datas do texto abaixo. Retorne apenas um array JSON. Sem explicação. Sem preâmbulo. Sem comentários. Saída: [\\\"data1\\\", \\\"data2\\\", ...]"\n_Objetivo (não é resultado medido):_ JSON sem texto extra; valide com um parser, pois modelos pequenos ainda podem acrescentar texto.',
          ],
        },

        commonMistakes: {
          title: 'Os 7 erros de otimização mais comuns',
          content: [
            '**A maioria das otimizações falha por erros de processo, não por falta de compreensão conceitual.** Aqui estão as armadilhas mais comuns e como evitá-las:',
          ],
          items: [
            '**Erro 1: Alterar múltiplas variáveis simultaneamente.** Você adiciona exemplos, altera o formato de saída E ajusta o papel em uma revisão. Agora, quando a saída melhora, você não sabe qual alteração ajudou. A otimização eficaz isola uma alteração por iteração.',
            '**Erro 2: Otimizar em uma única entrada.** Você testa um exemplo, vê melhoria e declara sucesso. No uso real, o prompt falha em entradas diferentes. Teste em 5–10 exemplos representativos. Se o prompt não tiver sucesso em todos os 5, continue otimizando.',
            '**Erro 3: Otimizar para apenas um modelo.** Você otimiza para o GPT-5.6, vê resultados perfeitos e implanta no Claude. Lá ele pode falhar. Cada modelo tem um comportamento de seguimento de instruções ligeiramente diferente. Teste em pelo menos 2 modelos (GPT-5.6 e Claude Opus 5); idealmente 3.',
            '**Erro 4: Ignorar o formato de saída.** Um prompt produz os fatos certos, mas na estrutura errada. "Formato errado" é o modo de falha mais comum e mais rápido de corrigir. Sempre especifique: "Responda em JSON com os campos: [lista]" ou "Use uma tabela Markdown com colunas: [lista]." A conformidade de formato é frequentemente a diferença entre saída utilizável e inutilizável.',
            '**Erro 5: Excesso de prompting.** Você adiciona 15 restrições, 5 descrições de papel e 10 exemplos em um prompt de 200 tokens. Instruções simultâneas demais sobrecarregam o modelo. Comece de forma mínima e adicione restrições apenas quando necessário. Se um prompt não está funcionando, o primeiro passo é simplificar, não expandir.',
            '**Erro 6: Confundir otimização com fine-tuning.** A otimização melhora prompts; o fine-tuning treina o modelo. Se você tentou todas as 6 alavancas e o prompt ainda falha, o modelo pode carecer de conhecimento ou capacidade para a tarefa — isso é um problema de fine-tuning, não de otimização. O fine-tuning é muito mais lento e caro. Esgote a otimização de prompts primeiro.',
            '**Erro 7: Não salvar prompts otimizados.** Você otimiza um prompt, implanta-o e depois re-otimiza o mesmo prompt 6 meses depois porque ninguém salvou a versão que funcionou. Uma biblioteca de prompts — com controle de versão, documentada e compartilhada — transforma o trabalho de otimização em um ativo duradouro.',
          ],
        },

        advancedTechniques: {
          title: 'Técnicas de otimização de prompts: métodos avançados',
          content: [
            '**Além das 6 alavancas principais, técnicas avançadas de otimização de prompts aplicam padrões especializados para corrigir modos de falha específicos.** Essas técnicas combinam múltiplas alavancas ou empilham restrições para resolver problemas mais difíceis. Saiba quais técnicas aplicar com base no seu desafio de otimização:',
          ],
          items: [
            '[Few-shot vs Zero-shot](/prompt-engineering/zero-shot-vs-few-shot): Adicione 1–3 pares de exemplo entrada/saída ao prompt quando o modelo não está formatando a saída corretamente ou está perdendo o estilo que você quer. Exemplos few-shot são a forma mais direta de ensinar formato.',
            '[Chain-of-thought](/prompt-engineering/chain-of-thought-prompting): Insira "pense passo a passo antes de responder" para corrigir falhas de raciocínio de múltiplas etapas. Essa técnica pode melhorar o raciocínio em várias etapas; o ganho depende do modelo e da tarefa.',
            '[Constrained prompting](/prompt-engineering/constrained-prompting): Adicione proibições explícitas ("Não use jargão", "Não invente dados", "Não repita a entrada") para corrigir falhas de escopo e estilo. Restrições são mais fortes do que instruções.',
            '[Self-consistency](/prompt-engineering/self-consistency-prompting): Gere a saída do prompt 3–5 vezes de forma independente e retorne a resposta mais comum. Isso reduz alucinações em fatos de baixa probabilidade combinando execuções do modelo.',
            '[Saída estruturada](/prompt-engineering/structured-output-and-json-mode): Solicite JSON, tabelas Markdown ou outros formatos legíveis por máquina para corrigir a conformidade de formato. A saída estruturada é mais rápida de analisar e menos propensa a erros do que a prosa.',
          ],
        },

        keyTerms: {
          title: 'Quais são os termos-chave para otimização de prompts?',
          items: [
            '[Few-shot prompting](/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — Incluir um pequeno número de exemplos de entrada/saída no prompt para que o modelo infira o padrão ou formato desejado; a alavanca de Exemplos no framework de otimização de 6 alavancas',
            '[Chain-of-Thought (CoT)](/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — Pedir ao modelo que raciocine passo a passo antes de responder; a técnica principal para corrigir falhas de raciocínio de múltiplas etapas',
            '[Self-consistency](/prompt-engineering/prompt-engineering-glossary#self-consistency) — Gerar múltiplas saídas e retornar a resposta mais comum; reduz as taxas de alucinação em fatos de baixa probabilidade',
            '[Zero-shot prompting](/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — Prompting sem exemplos; a linha de base contra a qual a otimização few-shot é medida',
            '[Alucinação](/prompt-engineering/prompt-engineering-glossary#hallucination) — Saída que soa confiante, mas é factualmente incorreta; um dos modos de falha primários que a otimização visa',
            '[Fine-tuning](/prompt-engineering/prompt-engineering-glossary#fine-tuning) — Retreinar os pesos do modelo em dados específicos do domínio; a alternativa à otimização de prompts quando um teto de qualidade difícil foi atingido',
            '[RAG (Retrieval-Augmented Generation)](/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — Injetar documentos recuperados no contexto do prompt; complementar à otimização de prompts (o RAG melhora a informação; a otimização melhora como o modelo a usa)',
            '[System prompt](/prompt-engineering/prompt-engineering-glossary#system-prompt) — Instrução persistente que define o papel, as restrições e o comportamento do modelo em todos os turnos; requer sua própria passagem de otimização',
            '[Temperatura](/prompt-engineering/prompt-engineering-glossary#temperature) — Parâmetro de decodificação que controla a aleatoriedade da saída; temperatura mais baixa melhora a consistência entre as execuções de teste de otimização',
            '[Prompt chaining](/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — Dividir tarefas complexas em uma sequência de prompts menores; cada sub-prompt se beneficia de otimização independente',
          ],
        },

        promptLibrary: {
          title: 'Salvando prompts otimizados em uma biblioteca',
          content: [
            '**Um prompt otimizado é um ativo duradouro.** Assim que você tiver testado um prompt em 3 modelos, confirmado que funciona em 5–10 entradas representativas e documentado o que cada alavanca faz — salve-o. Uma biblioteca de prompts permite que você reutilize prompts otimizados em projetos, os compartilhe com sua equipe e os melhore ao longo do tempo.',
            'O que salvar com cada prompt: o texto final do prompt, a alavanca que foi alterada, o modo de falha que ele corrigiu, em quais modelos foi testado e os resultados de aprovação/falha em suas entradas representativas. Essa documentação é o que separa uma biblioteca de prompts de uma simples pasta de arquivos de texto.',
            'Veja [Construa uma Biblioteca de Prompts que Economiza Horas](/prompt-engineering/build-a-prompt-library) para um guia completo sobre estruturação, versionamento e manutenção de uma biblioteca.',
          ],
        },

        regionalCompliance: {
          title: 'Otimização de prompts e conformidade regulatória',
          content: [
            'Em ambientes regulados, uma biblioteca de prompts versionada com registros de testes pode apoiar sua documentação. Sozinha, ela não torna um sistema conforme à Lei de IA da UE nem a qualquer outra norma.',
            'As diretrizes japonesas de IA para empresas, do METI e do Ministério de Assuntos Internos e Comunicações, não são vinculantes. Isto não é aconselhamento jurídico: consulte um profissional sobre as obrigações que se aplicam a você.',
          ],
        },

        multilingualReach: {
          title: 'Otimização de prompts em diferentes idiomas e regiões',
          content: [
            '**A otimização de prompts é uma disciplina universal — as 6 alavancas e o processo de 6 etapas se aplicam independentemente do idioma em que seu prompt está escrito.** No entanto, os termos de pesquisa locais diferem significativamente, os modelos principais variam por região e alguns idiomas expõem desafios únicos de otimização (densidade de tokenização, scripts baseados em caracteres, divisões de registro formal/informal). A tabela abaixo mapeia as variantes regionais mais importantes. Veja [Prompting em Diferentes Idiomas](/prompt-engineering/prompting-across-languages) para um guia completo de prompt engineering multilíngue.',
          ],
          columns: ['Idioma / Região', 'Termo local', 'Modelo principal', 'Nota regional'],
          rows: [
            { 'Idioma / Região': 'Inglês — EUA', 'Termo local': 'prompt optimization', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Grafia americana (-ize)' },
            { 'Idioma / Região': 'Inglês — UK / AU', 'Termo local': 'prompt optimisation', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Ortografia britânica (-ise)' },
            { 'Idioma / Região': 'Alemão — DE / AT / CH', 'Termo local': 'Prompt-Optimierung', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Lei de IA da UE relevante para empresas DACH' },
            { 'Idioma / Região': 'Francês — FR / CA', 'Termo local': 'optimisation de prompt', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Registro formal' },
            { 'Idioma / Região': 'Espanhol — ES / LATAM', 'Termo local': 'optimización de prompts', 'Modelo principal': 'GPT-5.6', 'Nota regional': 'Termo em espanhol neutro' },
            { 'Idioma / Região': 'Português — BR', 'Termo local': 'otimização de prompts', 'Modelo principal': 'GPT-5.6', 'Nota regional': 'Termo em português do Brasil' },
            { 'Idioma / Região': 'Japonês — JP', 'Termo local': 'プロンプト最適化', 'Modelo principal': 'GPT-5.6 (forte suporte ao japonês)', 'Nota regional': 'Confira os tokens em cada modelo' },
            { 'Idioma / Região': 'Chinês Simplificado — CN', 'Termo local': '提示词优化', 'Modelo principal': 'DeepSeek, Qwen 3', 'Nota regional': 'Caracteres simplificados' },
            { 'Idioma / Região': 'Coreano — KR', 'Termo local': '프롬프트 최적화', 'Modelo principal': 'GPT-5.6, Claude Opus 5', 'Nota regional': 'Confira os tokens em cada modelo' },
          ],
        },

        relatedReading: {
          title: 'Leitura relacionada',
          items: [
            '[O que é Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — a definição pilar e os blocos de construção principais do design de prompts',
            '[5 Blocos de Construção que Todo Prompt Precisa](/prompt-engineering/5-building-blocks-every-prompt-needs) — os elementos estruturais que você está otimizando',
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — técnica de raciocínio passo a passo para melhoria de precisão',
            '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) — quando adicionar exemplos como alavanca de otimização',
            '[Construa uma Biblioteca de Prompts que Economiza Horas](/prompt-engineering/build-a-prompt-library) — preservando prompts otimizados como ativos da equipe',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Otimização de prompts',
          faqs: [
            {
              q: 'O que é otimização de prompts?',
              a: 'A otimização de prompts é o processo iterativo de revisar um prompt existente para melhorar a qualidade da saída de IA para uma tarefa específica. Envolve identificar um modo de falha (formato incorreto, alucinação, saída vaga), alterar uma variável (especificidade, contexto, exemplos, restrições, formato de saída ou papel) e testar o resultado em modelos como GPT-5.6, Claude Opus 5 e Gemini 3.1 Pro.',
            },
            {
              q: 'Qual é a diferença entre otimização de prompts e prompt engineering?',
              a: 'O prompt engineering é a disciplina de projetar uma estrutura de prompt do zero usando blocos de construção como objetivo, contexto e formato de saída. A otimização de prompts é o subprocesso iterativo de melhorar um prompt já escrito, diagnosticando modos de falha e aplicando alterações direcionadas. Você precisa do prompt engineering para criar um ponto de partida; usa a otimização de prompts para refiná-lo.',
            },
            {
              q: 'Quantas iterações são necessárias para otimizar um prompt?',
              a: 'Para a maioria das tarefas, 2–4 iterações direcionadas são suficientes para passar de um prompt com falhas para um confiável. Cada iteração deve alterar uma variável e ser testada em 3–5 entradas representativas. Os retornos decrescentes se estabelecem após 5–6 iterações — se um prompt não se estabilizou até lá, a própria definição da tarefa pode precisar ser revisada.',
            },
            {
              q: 'Qual alavanca devo alterar primeiro ao otimizar um prompt?',
              a: 'Comece com o formato de saída. A não conformidade de formato — receber um parágrafo quando você queria uma tabela, ou texto simples quando precisava de JSON — é o modo de falha mais comum e mais rápido de corrigir. Especifique a estrutura exata que você quer e, em seguida, aborde outros problemas (precisão, tom, escopo) em iterações subsequentes.',
            },
            {
              q: 'A otimização de prompts funciona em todos os modelos de IA?',
              a: 'Sim, mas com ajustes específicos do modelo. As seis alavancas principais de otimização (especificidade, contexto, exemplos, restrições, formato de saída, papel) se aplicam ao GPT-5.6, Claude Opus 5, Gemini 3.1 Pro e Mistral Large. No entanto, cada modelo responde de forma diferente à densidade de instruções. Teste em cada modelo que você usa.',
            },
            {
              q: 'Qual é o erro mais comum na otimização de prompts?',
              a: 'Alterar múltiplas variáveis simultaneamente. Se você adiciona exemplos, altera o formato de saída e adiciona uma instrução de papel na mesma revisão, não consegue determinar qual alteração melhorou (ou piorou) a saída. A otimização eficaz altera uma variável por iteração.',
            },
            {
              q: 'A otimização de prompts pode reduzir alucinações de IA?',
              a: 'Sim, com as técnicas certas. Adicionar contexto de ancoragem ("Base sua resposta apenas no documento a seguir"), exemplos few-shot com saídas factualmente corretas e restrições explícitas ("Não invente dados — use apenas dados do texto fornecido") pode ajudar a reduzir alucinações. O self-consistency prompting — gerando múltiplas saídas e retornando a mais comum — reduz ainda mais as fabricações de baixa probabilidade.',
            },
            {
              q: 'Quando devo usar fine-tuning em vez de otimização de prompts?',
              a: 'Use o fine-tuning quando a otimização de prompts atingiu um teto — tipicamente quando o comportamento necessário é altamente específico do domínio, requer uma voz estilística consistente em milhares de saídas ou depende de conhecimento que não está no treinamento do modelo base. A otimização de prompts é mais rápida e econômica e deve sempre ser esgotada antes do fine-tuning.',
            },
            {
              q: 'Como sei quando um prompt está totalmente otimizado?',
              a: 'Um prompt está suficientemente otimizado quando: (1) produz saída correta em 4–5 entradas representativas, (2) produz saída consistente em re-execuções, (3) funciona em pelo menos dois modelos (ex.: GPT-5.6 e Claude), e (4) atende à especificação de formato sem pós-processamento. Prompts perfeitos não existem — "otimizado" significa confiável o suficiente para o caso de uso.',
            },
            {
              q: 'A otimização de prompts se aplica a prompts de imagem (texto para imagem)?',
              a: 'Os princípios se aplicam — especificidade, restrições e exemplos (imagens de referência) são alavancas válidas para modelos de imagem como DALL-E 3 e Stable Diffusion. No entanto, a mecânica difere: modelos de imagem respondem a modificadores de estilo, especificações de proporção e prompts negativos como restrições. O processo de otimização (linha de base → diagnosticar → alterar uma variável → testar) é idêntico.',
            },
            {
              q: 'O que é otimização automática de prompts?',
              a: 'A otimização automática de prompts usa um segundo modelo de IA (ou o mesmo modelo em um loop de meta-prompting) para reescrever e melhorar prompts sem intervenção humana. Ferramentas como DSPy (Stanford), TextGrad e APE (Automatic Prompt Engineer) geram prompts candidatos, pontuam-nos em relação a uma métrica (precisão, conformidade de formato, avaliação do usuário) e selecionam a melhor variante. A otimização manual é mais rápida para tarefas bem compreendidas; a automática escala melhor quando você tem dados de avaliação rotulados e precisa testar centenas de variantes.',
            },
            {
              q: 'Como a otimização de prompts difere do prompt tuning?',
              a: 'A otimização de prompts melhora prompts de texto discreto — as instruções que você escreve em linguagem natural — sem modificar os pesos do modelo. O prompt tuning (introduzido por Lester et al., 2021) aprende vetores de prompt suave contínuos que são pré-adicionados à entrada e treinados por descida de gradiente junto com o modelo ou em vez dele. O prompt tuning requer computação e dados de treinamento; a otimização de prompts não requer nenhum dos dois. Para a maioria dos casos de uso em produção, otimize prompts discretos primeiro e considere o prompt tuning apenas quando um teto de qualidade difícil for atingido.',
            },
            {
              q: 'Quais são as melhores ferramentas para otimização de prompts?',
              a: 'Não existe uma única melhor ferramenta. Alguns exemplos: PromptQuorum (produto do responsável por este site; envie um prompt ao GPT-5.6, Claude e Gemini simultaneamente para comparação lado a lado), DSPy (otimização programática de prompts com seleção automática baseada em métricas), LangSmith (versionamento de prompts, testes A/B e rastreamento para pipelines LangChain), Promptfoo (CLI open-source para executar prompts contra casos de teste e testes de regressão) e PromptLayer (versionamento e análises de prompts). Para iteração manual, uma planilha registrando a versão do prompt, entrada, saída e aprovação/falha em relação aos critérios é suficiente para a maioria dos trabalhos de otimização de tarefa única.',
            },
            {
              q: 'Como otimizo um system prompt?',
              a: 'A otimização do system prompt segue o mesmo processo de 6 etapas da otimização do prompt do usuário, com duas restrições adicionais. Primeiro, os system prompts persistem em todos os turnos — uma instrução muito específica pode degradar o desempenho em entradas que você não antecipou. Teste em 5–10 entradas representativas diversas, não apenas uma. Segundo, o comprimento do system prompt importa: system prompts muito longos podem reduzir o seguimento de instruções em turnos posteriores do usuário em alguns modelos. Otimize para concisão: cada instrução no system prompt deve ser necessária. Remova qualquer instrução que não altere a saída em seu conjunto de teste.',
            },
            {
              q: 'Você pode usar o ChatGPT para otimizar prompts?',
              a: 'Sim. Você pode pedir ao GPT-5.6 para reescrever um prompt fornecendo o prompt com falha e descrevendo o modo de falha: "Este prompt produz saída muito vaga. Reescreva-o para exigir uma resposta estruturada de 3 tópicos." Isso é uma forma de meta-prompting — usar o modelo para melhorar suas próprias entradas. A limitação é que o GPT-5.6 otimizará para o que considera melhor, não necessariamente para seus critérios de avaliação específicos. Sempre teste o prompt reescrito em entradas reais e meça em relação aos seus critérios reais de aprovação/falha antes de aceitar a revisão.',
            },
            {
              q: 'O que é otimização de prompts em machine learning?',
              a: 'Em contextos de machine learning, a otimização de prompts refere-se a técnicas que melhoram os prompts alimentados em modelos de linguagem como parte de um pipeline — sem retreinar o modelo. Isso inclui tanto a otimização de prompts discretos (reescrita de instruções em linguagem natural) quanto o prompt tuning contínuo (aprendizado de embeddings de tokens suaves por descida de gradiente). Em sistemas de ML em produção, a otimização de prompts é tipicamente parte do pipeline de inferência: o prompt é tratado como um hiperparâmetro ajustado em relação a um conjunto de avaliação retido, análogo à seleção de taxa de aprendizado no treinamento do modelo.',
            },
            {
              q: 'Quanto a otimização de prompts melhora a qualidade da saída de IA?',
              a: 'Depende do modelo, da tarefa e do prompt inicial, por isso não existe um percentual geral. Meça você mesmo: rode o prompt antigo e o novo nas mesmas entradas e compare as taxas de aprovação.',
            },
            {
              q: 'Devo otimizar prompts para cada modelo de IA separadamente?',
              a: 'Comece com uma otimização agnóstica ao modelo — aplique as 6 alavancas (especificidade, contexto, exemplos, restrições, formato de saída, papel) e teste no GPT-5.6, Claude Opus 5 e Gemini 3.1 Pro. Um prompt bem estruturado geralmente funciona bem nos três. Adicione variantes específicas do modelo apenas se os testes entre modelos revelarem resultados divergentes. Ajustes por modelo que vale testar: o Claude lida bem com system prompts longos e de múltiplas partes; o GPT-5.6 se beneficia de solicitações explícitas de formato JSON; o Gemini 3.1 Pro se beneficia de cabeçalhos de seção explícitos em tarefas com documentos longos. Mantenha variantes específicas do modelo em uma biblioteca de prompts com notas de versão.',
            },
            {
              q: 'Qual é a diferença entre otimização de prompts e RAG?',
              a: 'A otimização de prompts melhora as instruções e a estrutura de um prompt. RAG (Retrieval-Augmented Generation) melhora as informações disponíveis para o modelo no momento da inferência, recuperando documentos relevantes e inserindo-os no contexto do prompt. Os dois são complementares: o RAG resolve o problema de o modelo não ter os fatos corretos; a otimização de prompts resolve o problema de o modelo não processar esses fatos corretamente. Um pipeline RAG totalmente otimizado requer tanto uma boa recuperação (os documentos corretos são buscados) quanto um prompt bem otimizado (o modelo é instruído a usar apenas o conteúdo recuperado, citar fontes e formatar a resposta corretamente).',
            },
            {
              q: 'Como otimizo prompts especificamente para o GPT-5.6?',
              a: 'Vale testar quatro movimentos de otimização no GPT-5.6: (1) Solicitações de formato JSON explícitas no system prompt — para saída estruturada, defina o schema com precisão. (2) Cabeçalhos Markdown em system prompts — use seções H2 (## Papel, ## Tarefa, ## Formato de saída) para separar as preocupações. (3) Restrições rígidas — sem limite de palavras ou de comprimento, as respostas podem ficar maiores que o necessário; adicione "responda em ≤150 palavras" ou "retorne apenas o objeto JSON, sem explicação." (4) Enquadramento de uso de ferramentas — para tarefas envolvendo recuperação ou cálculo, enquadre o prompt como uma definição de função em vez de uma instrução em prosa ao usar a API de Assistentes com ferramentas habilitadas.',
            },
          ],
        },

        sources: {
          title: 'Fontes e leitura adicional',
          items: [
            '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608) — cataloga 58 técnicas de prompting baseadas em texto',
            '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — base acadêmica revisada por pares para raciocínio passo a passo como alavanca de otimização',
            '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — guia de prompt engineering da OpenAI',
            '[Brown et al., 2020. "Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165) — artigo fundacional que estabelece exemplos few-shot como uma alavanca de otimização de alto impacto; a base para a alavanca de Exemplos no framework de 6 alavancas',
          ],
        },

      },
    },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Fundamentals',
    designSkin: 'hub',
    heroImage: '/images/fundamentals-of-prompt-optimization-overview-hero-ko.webp',
    title: '프롬프트 최적화 방법: 기술과 모범 사례',
    seoTitle: '프롬프트 최적화 2026: 6가지 레버, 6단계 프로세스',
    intro: '**프롬프트 최적화는 AI 출력의 품질, 일관성 또는 정확성을 향상시키기 위해 프롬프트를 반복적으로 수정하는 프로세스입니다.** 이 종합 가이드는 프롬프트 최적화 기술과 기본 원리를 다룹니다: 6가지 주요 레버, 6단계 최적화 프로세스, GPT-5.6, Claude 및 Gemini에 대한 전후 예시, 그리고 피해야 할 7가지 가장 흔한 실수.',
    metaDescription: '6가지 레버와 6단계 프로세스로 프롬프트를 최적화하는 방법을 설명합니다. GPT-5.6, Claude, Gemini 전후 예시와 흔한 실수 7가지.',
    publishDate: '2026-04-02',
    dateModified: '2026-11-27',
    readTime: '14분 분량',
    educationalLevel: 'Beginner',
    primaryTerm: '프롬프트 최적화',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      proficiencyLevel: 'Beginner to Intermediate',
      dependencies: 'LLM 기초 및 프롬프트 구조 기본 이해(Basic understanding of LLMs and prompt structure)',
      headline: '프롬프트 최적화 방법: 기술과 모범 사례',
      description: '프롬프트 최적화 기술과 모범 사례를 배우십시오: 6가지 주요 레버, 6단계 프로세스, 전후 예시. GPT-5.6, Claude, Gemini에서 AI 프롬프트를 개선하는 방법 — 모든 모델을 위한 기본 원리.',
      datePublished: '2026-04-02',
      dateModified: '2026-11-27',
      keywords: ['프롬프트 최적화', '프롬프트 최적화 기술', '프롬프트를 최적화하는 방법', 'AI 프롬프트 개선', '프롬프트 엔지니어링 기본', 'LLM 최적화', 'GPT-5.6', 'Claude', 'Gemini', 'few-shot prompting', 'chain-of-thought'],
      mentions: [
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Claude Opus 5' },
        { '@type': 'Thing', name: 'Gemini 3.1 Pro' },
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'LM Studio' },
      ],
      about: [
        { '@type': 'Thing', name: '프롬프트 최적화' },
        { '@type': 'Thing', name: 'Few-shot prompting' },
        { '@type': 'Thing', name: 'Chain-of-thought prompting' },
        { '@type': 'Thing', name: 'LLM 출력 품질' },
        { '@type': 'Thing', name: 'AI 프롬프트 엔지니어링' },
      ],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: buildOgImageObject(OG_SLUG, 'ko'),
      url: 'https://www.promptquorum.com/ko/prompt-engineering/fundamentals-of-prompt-optimization',
      inLanguage: 'ko',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '프롬프트 최적화의 6가지 레버',
      description: 'AI 출력 품질을 결정하는 6가지 독립 변수 — 각각 특정 프롬프트 실패 방식을 수정하기 위해 조정할 수 있습니다.',
      numberOfItems: 6,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '구체성', description: '작업이 얼마나 정밀하게 정의되는지. 최적화 방법: 모호한 목표를 정확한 지시로 재작성. 예시: \'요약하라\' → \'각각 ≤20단어로 3가지 핵심 발견을 나열하라\'.' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '6단계로 프롬프트를 최적화하는 방법',
      description: 'GPT-5.6, Claude, Gemini에서 프롬프트 실패를 진단하고 AI 출력 품질을 향상시키기 위한 체계적인 6단계 프로세스.',
      totalTime: 'PT30M',
      step: [
        { '@type': 'HowToStep', position: 1, name: '기준선 설정', text: '대표적인 입력으로 현재 프롬프트를 3번 실행하십시오. 실패 방식을 문서화하십시오: 잘못된 형식, 환각, 모호한 출력, 또는 주제를 벗어난 응답.' },
        { '@type': 'HowToStep', position: 2, name: '근본 레버 식별', text: '실패를 6가지 레버 중 하나에 매핑하십시오: 구체성, 컨텍스트, 예시, 제약 조건, 출력 형식, 또는 역할/페르소나.' },
        { '@type': 'HowToStep', position: 3, name: '변수 하나만 변경', text: '식별된 레버를 겨냥한 단 하나의 변경을 하십시오. 같은 수정에서 목표를 변경하고 예시를 추가하고 형식을 변경하지 마십시오.' },
        { '@type': 'HowToStep', position: 4, name: '여러 모델에서 테스트', text: 'GPT-5.6, Claude Opus 5, Gemini 3.1 Pro에서 수정된 프롬프트를 실행하십시오. 하나의 모델에서만 작동하는 프롬프트는 취약합니다.' },
        { '@type': 'HowToStep', position: 5, name: '품질 기준에 대해 측정', text: '작업 정확성, 형식 준수, 사실적 근거, 3번 실행의 일관성, 모델 간 일치를 확인하십시오.' },
        { '@type': 'HowToStep', position: 6, name: '프롬프트 라이브러리에 저장', text: '무엇이 변경되었는지 그리고 왜 효과가 있었는지 문서화하십시오. 최적화된 프롬프트를 버전 관리하십시오. 테스트된 프롬프트는 재사용 가능한 자산입니다.' },
      ],
    },
    leadAnswerBlock: '**프롬프트 최적화는 출력의 품질, 정확성 또는 일관성을 향상시키기 위해 기존 프롬프트를 반복적으로 수정하는 프로세스입니다.** 6가지 최적화 레버 — 구체성, 컨텍스트, 예시, 제약 조건, 출력 형식, 역할/페르소나 — 는 조정하는 독립 변수입니다. 반복당 하나의 변수를 변경하고, 여러 모델에서 테스트하고, 결과를 측정하십시오. 이 체계적인 접근 방식은 프롬프트 개선에서 추측을 줄여 줍니다.',
    quickFacts: [
      '**6가지 주요 레버:** 구체성, 컨텍스트, 예시, 제약 조건, 출력 형식, 역할/페르소나 — 이 가이드에서 조정하는 주요 변수입니다.',
      '**2–4회 반복으로 충분:** 대부분의 작업은 수익 체감이 설정되기 전에 2–4회의 목표 반복에서 수용 가능한 품질에 도달합니다.',
      '**다중 모델 테스트 필요:** GPT-5.6에서는 작동하지만 Claude에서는 실패하는 프롬프트는 취약합니다 — 견고성을 확인하기 위해 ≥2개 모델에서 테스트하십시오.',
      '**파인튜닝:** 대개 프롬프트 최적화보다 시간과 비용이 더 들므로 최적화를 먼저 시도하십시오.',
    ],
    toc: [
      { label: '핵심 요점', anchor: 'key-takeaways' },
      { label: '로컬 LLM 사용자를 위한 핵심 요점', anchor: 'key-takeaways-for-local-llm-users' },
      { label: '프롬프트 최적화란?', anchor: 'what-is-prompt-optimization' },
      { label: '프롬프트 최적화 vs 프롬프트 엔지니어링', anchor: 'prompt-optimization-vs-prompt-engineering' },
      { label: '프롬프트 최적화가 중요한 이유', anchor: 'why-prompt-optimization-matters' },
      { label: '6가지 최적화 레버', anchor: 'the-6-optimization-levers' },
      { label: '6단계 최적화 프로세스', anchor: 'the-6-step-optimization-process' },
      { label: '프롬프트 품질 측정 방법', anchor: 'how-to-measure-prompt-quality' },
      { label: '프롬프트 최적화는 실제로 어떻게 보입니까?', anchor: 'what-does-prompt-optimization-look-like-in-practice' },
      { label: '모델별 최적화 팁', anchor: 'model-specific-optimization-tips' },
      { label: '로컬 LLM을 위한 프롬프트 최적화', anchor: 'optimizing-prompts-for-local-llms-ollama-lm-studio' },
      { label: '7가지 가장 흔한 최적화 실수', anchor: 'the-7-most-common-optimization-mistakes' },
      { label: '프롬프트 최적화 기술: 고급 방법', anchor: 'prompt-optimization-techniques-advanced-methods' },
      { label: '최적화된 프롬프트를 라이브러리에 저장', anchor: 'saving-optimized-prompts-to-a-library' },
      { label: '규정 준수', anchor: 'prompt-optimization-and-regulatory-compliance' },
      { label: '언어 및 지역', anchor: 'prompt-optimization-across-languages-and-regions' },
      { label: '이 프롬프트 최적화 용어들은 무엇을 의미합니까?', anchor: 'what-do-these-prompt-optimization-terms-mean' },
      { label: '관련 읽기', anchor: 'related-reading' },
      { label: 'FAQ', anchor: 'faq-prompt-optimization' },
    ],
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '프롬프트 최적화란 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 최적화는 특정 작업에 대한 AI 출력 품질을 향상시키기 위해 기존 프롬프트를 반복적으로 수정하는 프로세스입니다. 실패 방식(잘못된 형식, 환각, 모호한 출력)을 식별하고, 하나의 변수(구체성, 컨텍스트, 예시, 제약 조건, 출력 형식 또는 역할)를 변경하고, GPT-5.6, Claude Opus 5, Gemini 3.1 Pro와 같은 모델에서 결과를 테스트합니다.' } },
        { '@type': 'Question', name: '프롬프트 최적화와 프롬프트 엔지니어링의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링은 목표, 컨텍스트, 출력 형식과 같은 구성 요소를 사용하여 처음부터 프롬프트 구조를 설계하는 학문입니다. 프롬프트 최적화는 실패 방식을 진단하고 목표 변경을 적용하여 이미 작성된 프롬프트를 개선하는 반복적 하위 프로세스입니다.' } },
        { '@type': 'Question', name: '프롬프트를 최적화하는 데 몇 번의 반복이 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '대부분의 작업에서 2–4회의 목표 반복으로 충분합니다. 수익 체감은 5–6회 반복 후에 설정됩니다.' } },
        { '@type': 'Question', name: '프롬프트를 최적화할 때 어떤 레버를 먼저 변경해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '출력 형식부터 시작하십시오. 형식 미준수는 가장 흔하고 가장 빠르게 수정할 수 있는 실패 방식입니다. 원하는 정확한 구조를 지정한 다음 이후 반복에서 다른 문제를 해결하십시오.' } },
        { '@type': 'Question', name: '프롬프트 최적화는 모든 AI 모델에서 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '네, 하지만 모델별 조정이 필요합니다. 6가지 주요 최적화 레버는 GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Mistral Large에 적용됩니다. 그러나 각 모델은 지시 밀도에 다르게 반응합니다.' } },
        { '@type': 'Question', name: '프롬프트 최적화에서 가장 흔한 실수는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '여러 변수를 동시에 변경하는 것입니다. 같은 수정에서 예시를 추가하고, 출력 형식을 변경하고, 역할 지시를 추가하면, 어떤 변경이 출력을 개선(또는 저하)했는지 확인할 수 없습니다.' } },
        { '@type': 'Question', name: '프롬프트 최적화가 AI 환각을 줄일 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '네, 올바른 기술로 가능합니다. 앵커링 컨텍스트, 사실적으로 정확한 출력이 있는 few-shot 예시, 명시적 제약 조건을 추가하면 환각을 줄이는 데 도움이 될 수 있습니다.' } },
        { '@type': 'Question', name: '프롬프트 최적화 대신 파인튜닝을 언제 사용해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 최적화가 한계에 도달했을 때 파인튜닝을 사용하십시오. 프롬프트 최적화가 더 빠르고 저렴하며 항상 파인튜닝 전에 소진해야 합니다.' } },
        { '@type': 'Question', name: '프롬프트가 완전히 최적화되었을 때 어떻게 알 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트는 다음과 같을 때 충분히 최적화됩니다: (1) 4–5개의 대표적인 입력에서 올바른 출력을 생성할 때, (2) 재실행 시 일관된 출력을 생성할 때, (3) 최소 두 개의 모델에서 작동할 때, (4) 후처리 없이 형식 사양을 충족할 때.' } },
        { '@type': 'Question', name: '프롬프트 최적화가 이미지 프롬프트에 적용됩니까?', acceptedAnswer: { '@type': 'Answer', text: '원칙은 적용됩니다 — 구체성, 제약 조건, 예시는 이미지 모델에 유효한 레버입니다. 최적화 프로세스(기준선 → 진단 → 변수 하나 변경 → 테스트)는 동일합니다.' } },
        { '@type': 'Question', name: '자동 프롬프트 최적화란 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '두 번째 AI 모델을 사용하여 인간 개입 없이 프롬프트를 재작성하고 개선합니다. DSPy(Stanford), TextGrad, APE와 같은 도구는 후보 프롬프트를 생성하고 점수를 매기고 최상의 변형을 선택합니다.' } },
        { '@type': 'Question', name: '프롬프트 최적화와 프롬프트 튜닝의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 최적화는 모델 가중치를 수정하지 않고 이산 텍스트 프롬프트를 개선합니다. 프롬프트 튜닝은 경사 하강으로 훈련되는 연속적인 소프트 프롬프트 벡터를 학습합니다.' } },
        { '@type': 'Question', name: '프롬프트 최적화를 위한 최고의 도구는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '단 하나의 최고 도구는 없습니다. 예: PromptQuorum(이 사이트 발행사의 제품; GPT-5.6, Claude, Gemini에 동시에 전송), DSPy(프로그래밍 방식 최적화), LangSmith(버전 관리 및 추적), Promptfoo(오픈 소스 CLI), PromptLayer(버전 관리 및 분석).' } },
        { '@type': 'Question', name: '시스템 프롬프트를 어떻게 최적화합니까?', acceptedAnswer: { '@type': 'Answer', text: '시스템 프롬프트 최적화는 두 가지 추가 제약 조건을 가진 동일한 6단계 프로세스를 따릅니다. 시스템 프롬프트는 모든 턴에 걸쳐 지속됩니다; 길이가 중요합니다 — 매우 긴 시스템 프롬프트는 이후 사용자 턴의 지시 준수를 줄일 수 있습니다.' } },
        { '@type': 'Question', name: 'ChatGPT를 프롬프트 최적화에 사용할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '네. 실패한 프롬프트를 제공하고 실패 방식을 설명하여 GPT-5.6에 프롬프트를 재작성하도록 요청할 수 있습니다. 이것은 메타 프롬프팅의 한 형태입니다.' } },
        { '@type': 'Question', name: '머신 러닝에서 프롬프트 최적화란 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '모델을 재훈련하지 않고 파이프라인의 일부로 언어 모델에 공급되는 프롬프트를 개선하는 기술을 말합니다. 이산 프롬프트 최적화와 연속적 프롬프트 튜닝 모두를 포함합니다.' } },
        { '@type': 'Question', name: '프롬프트 최적화가 AI 출력 품질을 얼마나 개선합니까?', acceptedAnswer: { '@type': 'Answer', text: '모델, 작업, 원래 프롬프트에 따라 다르므로 일반적인 수치는 없습니다. 같은 입력으로 기존 프롬프트와 새 프롬프트를 실행해 통과율을 직접 비교하십시오.' } },
        { '@type': 'Question', name: '각 AI 모델에 대해 프롬프트를 별도로 최적화해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '모델에 구애받지 않는 최적화로 시작하십시오. 잘 구조화된 프롬프트는 일반적으로 세 주요 모델 모두에서 잘 작동합니다. 모델 간 테스트에서 divergent 결과가 나타날 때만 모델별 변형을 추가하십시오.' } },
        { '@type': 'Question', name: '프롬프트 최적화와 RAG의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 최적화는 프롬프트의 지시와 구조를 개선합니다. RAG는 관련 문서를 검색하여 모델이 사용할 수 있는 정보를 개선합니다. 둘은 상호 보완적입니다: RAG는 정보 문제를 해결하고; 프롬프트 최적화는 처리 문제를 해결합니다.' } },
        { '@type': 'Question', name: 'GPT-5.6에 특화된 프롬프트를 최적화하려면 어떻게 해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: 'GPT-5.6에서는 다음 네 가지 최적화 방법을 시험해 볼 만합니다: (1) 시스템 프롬프트 내 명시적인 JSON 형식 요청 — 구조화된 출력에는 스키마를 정확히 정의하십시오. (2) 시스템 프롬프트 내 마크다운 헤더 — H2 섹션(## 역할, ## 작업, ## 출력 형식)을 사용해 관심사를 분리하십시오. (3) 엄격한 제약 — 단어 수나 길이 제한이 없으면 응답이 필요 이상으로 길어질 수 있습니다; "≤150단어로 답변하십시오" 또는 "설명 없이 JSON 객체만 반환하십시오"를 추가하십시오. (4) 도구 사용 프레이밍 — 검색이나 계산이 포함된 작업의 경우, Assistants API에서 도구를 활성화할 때 산문체 지시 대신 함수 정의로 프롬프트를 구성하십시오.' } },
      ],
    },
    sections: {

      tldr: {
        title: '핵심 요점',
        isTldr: true,
        items: [
          '프롬프트 최적화 = 출력 품질을 향상시키기 위해 기존 프롬프트를 반복적으로 수정',
          '6가지 레버: **구체성**, **컨텍스트**, **예시**, **제약 조건**, **출력 형식**, **역할/페르소나**',
          '한 번에 하나의 레버만 변경하십시오 — 변수를 분리하는 것이 실제로 작동하는 것을 찾는 방법입니다.',
          '개선이 모델에 구애받지 않는지 확인하기 위해 ≥2개 모델(GPT-5.6, Claude, Gemini)에서 테스트하십시오.',
          '흔한 실패 방식: 너무 많은 변수를 동시에 변경하면 진단이 불가능해집니다.',
          '테스트되고 최적화된 프롬프트는 지속적인 자산입니다 — 프롬프트 라이브러리에 저장하십시오.',
        ],
      },

      localLLMTldr: {
        id: 'key-takeaways-for-local-llm-users',
        title: '로컬 LLM 사용자를 위한 핵심 요점',
        items: [
          '프롬프트 최적화는 로컬 모델에 더욱 중요합니다 — 양자화된 모델(4-bit, 8-bit)은 모호한 지시에 더 민감할 수 있습니다.',
          'Ollama와 LM Studio는 동일한 6가지 최적화 레버를 지원합니다; 더 작은 모델(LLaMA 3.1 8B, Mistral Small)은 대개 더 명시적인 제약 조건과 더 짧은 입력이 필요합니다.',
          '양자화된 모델은 지시를 덜 안정적으로 따를 수 있습니다 — 명시적 출력 형식과 더 적은 동시 제약 조건을 사용하여 더 단순하고 규범적인 프롬프트를 사용하십시오.',
          '온도 기본값이 다릅니다: Ollama 기본값은 0.8; 일관성이 필요한 구조화된 출력 작업에는 온도를 0.1–0.3으로 설정하십시오.',
          '품질 격차를 가늠하려면 같은 입력을 로컬 모델과 클라우드 모델에서 실행하십시오. 예를 들어 PromptQuorum에서 GPT-5.6 및 Claude와 비교합니다.',
        ],
      },

      definition: {
        id: 'what-is-prompt-optimization',
        title: '프롬프트 최적화란?',
        content: [
          '**프롬프트 최적화는 특정 작업에 대한 AI 출력의 품질, 정확성 또는 일관성을 향상시키기 위해 기존 프롬프트를 반복적으로 수정하는 프로세스입니다.** 모든 주요 모델 — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, 그리고 Ollama 또는 LM Studio를 통해 로컬에서 실행되는 모델 — 에 적용됩니다. 프롬프트 엔지니어링이 프롬프트의 초기 구조를 설계하는 곳에서, 프롬프트 최적화는 무엇이 실패하는지 진단하고 출력이 정의된 기준을 충족할 때까지 목표 변경을 적용합니다.',
          '프롬프트 최적화는 프롬프트 엔지니어링의 하위 프로세스입니다. 항상 작동하는 프롬프트로 시작하여 한 번에 하나의 변경을 합니다. 이 변수 분리가 진단을 가능하게 하는 것입니다 — 구체성, 출력 형식, 제약 조건을 동시에 수정하면 어떤 변경이 결과를 개선했는지 확인할 수 없습니다.',
          '왜 중요한지: 동일한 모델이 거의 동일한 프롬프트에서 급격히 다른 출력을 생성합니다. "대략 맞음"과 "신뢰할 수 있게 맞음"의 차이는 운이 아닙니다 — 체계적인 최적화입니다.',
        ],
      },

      vsPromptEngineering: {
        id: 'prompt-optimization-vs-prompt-engineering',
        title: '프롬프트 최적화 vs 프롬프트 엔지니어링',
        content: [
          '**프롬프트 최적화와 프롬프트 엔지니어링은 순서대로 작동하는 보완적인 학문입니다.** 프롬프트 엔지니어링은 구성 요소(목표, 컨텍스트, 예시, 제약 조건, 출력 형식, 역할)를 사용하여 처음부터 프롬프트를 설계합니다. 프롬프트 최적화는 기존 프롬프트를 가져다가 반복적 수정을 통해 개선합니다. 둘 다 필요합니다: 프롬프트 엔지니어링은 "작동함"까지 이끌고; 프롬프트 최적화는 "신뢰할 수 있음"까지 이끕니다.',
          '프롬프트 엔지니어링은 구조를 구축하고; 프롬프트 최적화는 이를 다듬습니다. 프롬프트 엔지니어링은 "이 프롬프트에 어떤 요소가 있어야 합니까?"라고 묻습니다. 프롬프트 최적화는 "이 프롬프트가 왜 실패합니까, 그리고 어떤 하나의 변경이 이를 수정할까요?"라고 묻습니다.',
        ],
        columns: ['차원', '프롬프트 엔지니어링', '프롬프트 최적화'],
        rows: [
          { '차원': '시작점', '프롬프트 엔지니어링': '빈 페이지', '프롬프트 최적화': '기존 프롬프트' },
          { '차원': '목표', '프롬프트 엔지니어링': '구조 설계', '프롬프트 최적화': '출력 개선' },
          { '차원': '방법', '프롬프트 엔지니어링': '프레임워크, 구성 요소', '프롬프트 최적화': '분리, 변경, 테스트, 측정' },
        ],
      },

      whyOptimize: {
        id: 'why-prompt-optimization-matters',
        title: '프롬프트 최적화가 중요한 이유',
        content: [
          '**프롬프트 최적화는 무엇이 실패하는지 체계적으로 진단하고 한 번에 하나의 변수를 수정하여 일관되지 않은 AI 출력을 줄입니다.** 모호한 프롬프트는 모호한 출력을 생성합니다. 설명용 예시이며 측정한 테스트가 아닙니다. "이 기사를 요약하라"는 실행할 때마다 길이와 초점이 달라질 수 있습니다. 출력 형식("3개 항목, 각 ≤20단어"), 역할("분석가"), 구체적인 과제("방법론이 아닌 3가지 핵심 발견을 나열하라")를 추가하면 대개 편차가 줄어듭니다.',
          '규제 배경은 아래의 규정 준수 섹션을 참조하십시오.',
        ],
      },

      callout1: {
        blockquote: '수학 문장제 벤치마크 GSM8K에서 5,400억 파라미터의 PaLM 모델에 단계별 추론이 포함된 풀이 예시 몇 개를 보여 주자(few-shot chain-of-thought), 재훈련 없이 해결률이 표준 프롬프팅의 17.9%에서 56.9%로 올랐습니다.',
        blockquoteSource: 'Jason Wei et al., Google Brain. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arxiv.org/abs/2201.11903',
      },

      sixLevers: {
        id: 'the-6-optimization-levers',
        title: '6가지 최적화 레버',
        content: [
          '**모든 프롬프트는 출력을 개선하기 위해 조정할 수 있는 6가지 독립 변수로 구성됩니다.** 이것이 최적화의 "레버"입니다. 프롬프트가 실패하면 실패는 올바르게 설정되지 않은 하나 이상의 레버로 추적됩니다.',
        ],
        columns: ['레버', '무엇을 변경하는지', '최적화 방법', '예시'],
        rows: [
          { '레버': '구체성', '무엇을 변경하는지': '작업이 얼마나 정밀하게 정의되는지', '최적화 방법': '모호한 목표를 정확한 지시로 재작성', '예시': '"요약하라" → "각 ≤20단어로 3가지 핵심 발견을 나열하라"' },
          { '레버': '컨텍스트', '무엇을 변경하는지': '모델이 작업할 정보', '최적화 방법': '배경, 대상 독자, 제약 조건 추가', '예시': '"보고서를 작성하라" → "비기술적 CFO를 위한 보고서를 작성하라"' },
          { '레버': '예시', '무엇을 변경하는지': '원하는 출력 형식에 대한 모델의 이해', '최적화 방법': '1–3개의 입력/출력 쌍(few-shot) 추가', '예시': '원하는 형식을 한 번 보여주십시오' },
          { '레버': '제약 조건', '무엇을 변경하는지': '모델이 생성할 수 있는 것의 한계', '최적화 방법': '명시적 금지 사항 추가', '예시': '"전문 용어를 사용하지 마시오. 최대 150단어."' },
          { '레버': '출력 형식', '무엇을 변경하는지': '응답의 구조', '최적화 방법': '형식을 명시적으로 지정', '예시': '"JSON으로 응답하시오: {제목, 요약, 태그[]}"' },
          { '레버': '역할/페르소나', '무엇을 변경하는지': '모델이 채택하는 전문성 수준', '최적화 방법': '특정 역할 추가', '예시': '"B2B SaaS 기업의 시니어 데이터 분석가 역할을 하시오"' },
        ],
      },

      callout2: {
        blockquote: 'GPT-3의 규모를 키우자, 프롬프트에 몇 개의 예시만 넣고 경사 업데이트 없이 수행하는 few-shot 학습이 일부 작업에서 기존 최고 수준의 파인튜닝 방식과 경쟁할 수 있음이 드러났습니다.',
        blockquoteSource: 'Tom B. Brown et al., OpenAI. "Language Models are Few-Shot Learners." NeurIPS 2020. arxiv.org/abs/2005.14165',
      },

      optimizationProcess: {
        id: 'the-6-step-optimization-process',
        title: '6단계 최적화 프로세스',
        content: [
          '**프롬프트 최적화는 체계적이고 측정 가능한 프로세스입니다.** 각 단계는 진단을 좁힙니다: 증상을 식별하고, 레버에 매핑하고, 하나의 변수를 변경하고, 여러 모델에서 테스트하고, 개선을 측정합니다.',
        ],
        items: [
          '**1단계: 기준선을 설정하십시오.** 대표적인 입력으로 목표 작업에서 현재 프롬프트를 3번 실행하십시오. 실패 방식을 기록하십시오: 출력이 너무 길거나 짧습니까? 잘못된 형식입니까? 환각입니까? 주제를 벗어났습니까? 이 기준선은 중요합니다 — 없이는 개선을 측정할 수 없습니다.',
          '**2단계: 근본 레버를 식별하십시오.** 실패를 6가지 레버 중 하나에 매핑하십시오. 예시: "출력이 항목 대신 산문의 벽이다" → 출력 형식 레버; "응답이 모호하다" → 구체성 레버; "어조가 잘못되었다" → 역할 레버.',
          '**3단계: 변수 하나를 변경하십시오.** 식별된 레버를 겨냥한 단 하나의 변경을 하십시오. 같은 수정에서 목표를 편집하고, 예시를 추가하고, 형식을 변경하지 마십시오. 이 분리는 협상 불가능합니다.',
          '**4단계: 여러 모델에서 테스트하십시오.** GPT-5.6, Claude Opus 5, Gemini 3.1 Pro에서 수정된 프롬프트를 실행하십시오. 하나의 모델에서만 작동하는 프롬프트는 취약하고 모델 특정적입니다. PromptQuorum을 사용하여 세 가지에 동시에 프롬프트를 전송하고 나란히 응답을 비교하십시오.',
          '**5단계: 기준에 대해 측정하십시오.** 정확성이 개선되었습니까? 형식을 준수했습니까? 환각이 줄었습니까? 출력이 이제 일관성 테스트를 통과합니까(연속으로 3번 실행)? 측정은 변경이 효과가 있었는지 확인하는 방법입니다.',
          '**6단계: 프롬프트 라이브러리에 저장하십시오.** 테스트되고 최적화된 프롬프트는 재사용 가능한 자산입니다. 무엇이 변경되었는지 그리고 왜 개선되었는지 문서화하십시오. 버전 관리하십시오. 저장되고 버전 관리된 프롬프트 라이브러리는 일회성 프롬프트보다 훨씬 더 가치 있습니다.',
        ],
        promptExamples: [
          {
            badLabel: '❌ 나쁜 예: 여러 변수를 동시에 변경',
            bad: '원래 프롬프트: "이 기사를 요약하라."\n\n수정 1 (잘못됨): "이 기사를 3개 항목으로 요약하라. 금융 분석가 역할을 하라. 전문 용어를 사용하지 마라. 주요 위험을 포함하라. JSON으로 형식을 지정하라."',
            goodLabel: '✅ 좋은 예: 반복당 하나의 변수 분리',
            good: '원래 프롬프트: "이 기사를 요약하라."\n\n수정 1 (올바름): "이 기사를 3개 항목으로 요약하라, 각 ≤20단어."\n→ 예상 결과: 출력이 이제 일관된 형식이지만 모호합니다.\n\n수정 2: "주요 비즈니스 위험에 초점을 맞춰 3개 항목으로 요약하라. 각 ≤20단어."\n→ 예상 결과: 더 나은 관련성이지만 대상 독자 컨텍스트가 부족합니다.\n\n수정 3: "공급업체 위험 보고서를 검토하는 CFO입니다. 핵심 위험에 초점을 맞춰 3개 항목으로 요약하라. 각 ≤20단어."\n→ 예상 결과: 구체적이고 실행 가능하며 일관됩니다. 완료.',
          },
        ],
      },

      callout3: {
        blockquote: '사전 등록된 온라인 실험에서 대졸 전문직 453명이 직업별 글쓰기 과제를 수행했습니다. ChatGPT를 사용하자 평균 소요 시간이 40% 줄고 결과물 품질이 18% 향상되었습니다. 참가자 간 격차도 줄었습니다.',
        blockquoteSource: '출처: Shakked Noy & Whitney Zhang, MIT Department of Economics. "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence." Science, 2023.',
      },

      measurementCriteria: {
        id: 'how-to-measure-prompt-quality',
        title: '프롬프트 품질 측정 방법',
        content: [
          '**측정할 수 없는 것은 최적화할 수 없습니다.** 다음 기준은 프롬프트가 성공했는지 여부를 정의합니다. 각 반복 후 이러한 체크포인트를 사용하십시오:',
        ],
        columns: ['기준', '확인할 내용', '합격/불합격 신호'],
        rows: [
          { '기준': '작업 정확성', '확인할 내용': '출력이 실제 질문에 답합니까?', '합격/불합격 신호': '알려진 올바른 답과 비교' },
          { '기준': '형식 준수', '확인할 내용': '출력이 지정된 구조와 일치합니까?', '합격/불합격 신호': 'JSON이 파싱되었습니까? 항목이 올바른 길이입니까?' },
          { '기준': '사실적 근거', '확인할 내용': '특정 주장이 올바릅니까?', '합격/불합격 신호': '3–5개 사실 빠른 확인' },
          { '기준': '일관성', '확인할 내용': '재실행이 유사한 출력을 생성합니까?', '합격/불합격 신호': '같은 프롬프트를 3번 실행 — 출력이 구조적으로 다릅니까?' },
          { '기준': '토큰 효율성', '확인할 내용': '출력 길이가 적절합니까?', '합격/불합격 신호': '토큰 수 대 정보 밀도 측정' },
          { '기준': '모델 간 일치', '확인할 내용': '2–3개 모델이 유사한 결과를 생성합니까?', '합격/불합격 신호': 'PromptQuorum을 통해 GPT-5.6, Claude, Gemini에 전송 — 일치 = 견고함' },
        ],
      },

      callout4: {
        blockquote: 'BCG 컨설턴트 758명을 대상으로 한 실험에서, AI 능력 범위 안의 현실적인 과제 18개에 AI를 사용한 그룹은 대조군보다 품질이 40% 이상 높게 평가된 결과물을 냈습니다. 범위 밖으로 선정한 과제에서는 AI를 사용한 컨설턴트가 정답을 낼 확률이 19%포인트 낮았습니다.',
        blockquoteSource: 'Fabrizio Dell\'Acqua, Ethan Mollick et al., Harvard Business School & Wharton. "Navigating the Jagged Technological Frontier." Harvard Business School Working Paper 24-013, 2023.',
      },

      beforeAfterExamples: {
        id: 'what-does-prompt-optimization-look-like-in-practice',
        title: '프롬프트 최적화는 실제로 어떻게 보입니까?',
        content: [
          '**프롬프트 최적화는 모호한 지시에서 정밀한 지시로의 전환에서 볼 수 있습니다.** 이 전후 쌍은 6가지 레버 각각이 작동하는 것을 보여줍니다:',
        ],
        items: [
          '**나쁜 예:** "이 기사를 요약하라." | **개선:** "3개 항목으로 요약하라, 각 ≤20단어. 비즈니스 영향에 초점을 맞추시오." | **이유:** 출력 형식을 지정하면 불일관성을 줄일 수 있습니다.',
          '**나쁜 예:** "이 코드를 검토하라." | **개선:** "(1) 정확성, (2) 성능, (3) 보안을 검토하라. 줄 번호를 인용하라. 최대 3가지 문제." | **이유:** 역할과 제약 조건은 일반적인 피드백을 줄일 수 있습니다.',
          '**나쁜 예:** "이 기사들을 종합하라." | **개선:** "제공된 5개 기사에서만 종합하라. 형식: [발견 A]. [발견 B]. [함의]. 만들지 마시오." | **이유:** 컨텍스트와 제약 조건은 환각을 줄일 수 있습니다.',
          '**나쁜 예:** "고객에게 이메일을 작성하라." | **개선:** "지원을 2주 기다린 화가 난 고객에게 이메일을 작성하라. 한 번 사과하고, 2가지 해결책을 제안하고, 선호도를 묻는다. ≤150단어." | **이유:** 구체성 + 제약 조건이 어조와 관련성을 개선합니다.',
          '**나쁜 예:** "이 표에서 데이터를 추출하라." | **개선:** "이름과 금액을 JSON으로 추출하라: [{\"name\": \"...\", \"amount\": ...}]. 설명 없음." | **이유:** 명시적 형식은 불필요한 산문 출력을 줄일 수 있습니다.',
          '**나쁜 예:** "이 코드가 안전합니까?" | **개선:** "확인하라: (1) SQL 인젝션, (2) 검증되지 않은 사용자 입력, (3) 하드코딩된 시크릿. 각 발견을 다음으로 응답하라: [줄 N: 문제]. 거짓 양성 없음." | **이유:** 구체성 + 제약 조건이 정확성을 개선합니다.',
        ],
      },

      definitionBoxes: {
        id: 'what-do-these-prompt-optimization-terms-mean',
        title: '이 프롬프트 최적화 용어들은 무엇을 의미합니까?',
        content: [],
        items: [
          '**프롬프트 최적화** — 실패 방식을 진단하고 한 번에 하나의 변수(구체성, 컨텍스트, 예시, 제약 조건, 형식 또는 역할)를 변경하여 출력 품질을 향상시키기 위해 프롬프트를 반복적으로 수정하는 프로세스. [모든 프롬프트에 필요한 5가지 구성 요소](/ko/prompt-engineering/5-building-blocks-every-prompt-needs)를 참조하십시오.',
          '**Few-shot 프롬프팅** — 모델에 원하는 형식이나 패턴을 가르치기 위해 프롬프트에 1–3개의 입력/출력 예시를 포함. [Zero-Shot vs Few-Shot 프롬프팅](/ko/prompt-engineering/zero-shot-vs-few-shot)을 참조하십시오.',
          '**Chain-of-Thought (CoT)** — 모델에 단계별로 추론하도록 요청. 다단계 추론이 개선될 수 있으며 효과는 모델과 작업에 따라 다릅니다.',
          '**제약 조건** — 출력 범위를 좁히고 흔한 실패 방식을 방지하는 명시적 금지 또는 한계(예: "전문 용어를 사용하지 마시오", "최대 150단어", "출처만 인용하시오").',
          '**토큰** — 모델이 처리하는 가장 작은 텍스트 단위; 약 4자 또는 영어로 1단어. 프롬프트 길이와 출력 예산은 토큰으로 측정됩니다.',
          '**환각** — 자신감 있지만 사실적으로 잘못된 출력; 모델이 사실을 만들거나, 존재하지 않는 연구를 인용하거나, 근거 없는 주장을 반복할 때 발생합니다. 앵커링 컨텍스트, 예시, 제약 조건을 추가하여 완화됩니다.',
          '**파인튜닝** — 도메인 특정 레이블 데이터로 모델 가중치를 재훈련; 프롬프트 최적화가 필요한 품질을 달성할 수 없을 때 사용됩니다. 파인튜닝 전에 항상 최적화를 소진하십시오.',
          '**RAG (Retrieval-Augmented Generation)** — 모델에 응답하도록 요청하기 전에 관련 문서를 검색하고 프롬프트 컨텍스트에 삽입. [RAG 설명](/ko/prompt-engineering/rag-explained)을 참조하십시오.',
          '**시스템 프롬프트** — 모든 턴에 걸쳐 모델의 역할, 제약 조건, 동작을 설정하는 지속 지시. [시스템 프롬프트 vs 사용자 프롬프트](/ko/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference)를 참조하십시오.',
          '**구체성** — 작업 정의의 정밀도; 모호한 지시("요약하라")에서 정확한 요구 사항("3개 항목 나열, 각 ≤20단어")으로 전환. 조정하는 첫 번째이자 종종 가장 영향력 있는 레버.',
        ],
      },

      modelSpecificTips: {
        id: 'model-specific-optimization-tips',
        title: '모델별 최적화 팁',
        content: [
          '**6가지 최적화 레버는 모든 주요 모델 — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Mistral Large — 에 적용됩니다.** 그러나 각 모델은 지시 밀도, 형식 구체성, 역할 정의에 다르게 반응합니다. 다음은 모델별 조정 팁입니다: 이는 측정 결과가 아닌 일반적인 출발점이므로 각자의 입력으로 확인하십시오.',
        ],
        items: [
          '**GPT-5.6 (OpenAI):** 명시적 JSON 형식 요청과 시스템 프롬프트의 마크다운 헤더에 잘 반응합니다. 지시 준수가 강합니다 — 엄격한 제약 조건이 과도한 설명을 줄입니다. GPT-5.6 프롬프트가 과도하게 설명하면 제약 조건을 추가하십시오: "간결하게 하시오. 요청하지 않는 한 추론을 설명하지 마시오."',
          '**Claude Opus 5 (Anthropic):** 미묘하고 다부분 지시에 탁월합니다. 길고 상세한 시스템 프롬프트를 안정적으로 처리합니다. 명시적 출력 길이 안내("≤200단어로 응답하시오")의 혜택을 받습니다.',
          '**Gemini 3.1 Pro (Google DeepMind):** 컨텍스트 창이 커서 긴 문서 분석에 적합합니다. 프롬프트의 명시적 섹션 헤더가 구조화된 출력 일관성을 향상시킵니다. 긴 문서를 처리하는 경우 헤더를 추가하십시오: "## 입력 문서\n[문서]\n## 작업\n[작업]."',
          '**Mistral Large (Mistral AI):** 명시적 역할 정의와 더 규범적인 지시 표현의 혜택을 받습니다. 프롬프트가 GPT-5.6에서는 작동하지만 Mistral에서는 작동하지 않는 경우 지시를 더 명시적으로 만들고 역할을 추가하십시오.',
        ],
      },

      localLLMExamples: {
        id: 'optimizing-prompts-for-local-llms-ollama-lm-studio',
        title: '로컬 LLM을 위한 프롬프트 최적화 (Ollama, LM Studio)',
        content: [
          '**Ollama 또는 LM Studio를 통해 실행되는 로컬 모델은 동일한 6가지 최적화 레버에 반응하지만 더 엄격한 허용 오차를 가집니다.** 양자화된 모델(4-bit, 8-bit)은 지시를 덜 안정적으로 따를 수 있으므로 단순하고 명시적인 프롬프트로 시작하십시오. 아래는 설명용 시나리오이며 테스트 결과가 아닙니다. 모델 이름은 일반적인 로컬 구성을 보여 줄 뿐이며, 설명한 실패는 발생할 수 있는 사례이지 해당 모델에서 측정한 결함이 아닙니다.',
        ],
        items: [
          '**예시 1: 양자화된 모델 출력 불일관성 (레버: 출력 형식 + 제약 조건)**\n_모델:_ LLaMA 3.1 8B via Ollama (4-bit 양자화)\n_약한 프롬프트:_ "이 지원 티켓을 요약하라."\n_발생 가능한 실패 방식:_ 출력이 실행마다 크게 다릅니다 — 때로는 한 문장, 때로는 목록, 때로는 사용자에게 다시 질문.\n_변경된 레버:_ 출력 형식 + 온도 제약.\n_최적화된 프롬프트:_ "이 지원 티켓을 정확히 2문장으로 요약하라. 문장 1: 고객의 문제. 문장 2: 그들이 시도한 것. 다른 텍스트 없음."\n_추가 수정:_ `ollama run llama3.1`을 실행한 뒤 `/set parameter temperature 0.1`을 입력하십시오.\n_목표(측정 결과 아님):_ 2문장 요약을 얻는 것입니다. 사용하는 모델과 티켓으로 확인하십시오.',
          '**예시 2: LM Studio에서 컨텍스트 길이 제한 실패 (레버: 구체성 + 컨텍스트)**\n_모델:_ Mistral Small Instruct via LM Studio (Q4_K_M 양자화, 4096 토큰 컨텍스트)\n_약한 프롬프트:_ "이 문서를 분석하고 주요 위험을 나열하라." [전체 3,000단어 문서 붙여넣기]\n_발생 가능한 실패 방식:_ 모델이 분석 중에 잘리고, 문서의 마지막 1/3을 잃고, 잘림을 알리지 않고 불완전한 출력을 생성합니다.\n_변경된 레버:_ 구체성 — 컨텍스트 예산 내에 맞도록 범위를 줄입니다.\n_최적화된 프롬프트:_ "당신은 위험 분석가입니다. 다음 문서 발췌(처음 1,500단어만)를 읽고 최대 5가지 구체적인 위험을 나열하십시오, 각 ≤15단어. 형식: 위험 1: [설명]. 위험 2: [설명]. 5개 후 중지하시오."\n_목표(측정 결과 아님):_ 컨텍스트 창에 들어가는 분석을 얻는 것입니다. 출력이 잘리지 않았는지 확인하십시오.',
          '**예시 3: 양자화된 모델에서 지시 재정의 (레버: 제약 조건)**\n_모델:_ Phi-3 Mini via Ollama\n_약한 프롬프트:_ "이 텍스트에서 모든 날짜를 추출하라. JSON만 반환하라."\n_발생 가능한 실패 방식:_ 모델이 JSON 더하기 설명 단락을 반환합니다("찾은 날짜는 다음과 같습니다..."). 소형 모델은 자주 원하지 않는 주석을 추가합니다.\n_변경된 레버:_ 제약 조건 — 명시적 금지.\n_최적화된 프롬프트:_ "아래 텍스트에서 모든 날짜를 추출하라. JSON 배열만 반환하라. 설명 없음. 서문 없음. 주석 없음. 출력: [\\\"날짜1\\\", \\\"날짜2\\\", ...]"\n_목표(측정 결과 아님):_ 불필요한 문장이 없는 JSON을 얻는 것입니다. 소형 모델은 텍스트를 덧붙일 수 있으므로 파싱해 검증하십시오.',
        ],
      },

      commonMistakes: {
        id: 'the-7-most-common-optimization-mistakes',
        title: '7가지 가장 흔한 최적화 실수',
        content: [
          '**대부분의 최적화는 개념적 오해가 아닌 프로세스 오류로 실패합니다.** 다음은 가장 흔한 함정과 이를 피하는 방법입니다:',
        ],
        items: [
          '**실수 1: 여러 변수를 동시에 변경.** 하나의 수정에서 예시를 추가하고, 출력 형식을 변경하고, 역할을 조정합니다. 이제 출력이 개선될 때 어떤 변경이 도움이 되었는지 알 수 없습니다. 효과적인 최적화는 반복당 하나의 변경을 분리합니다.',
          '**실수 2: 단일 입력으로 최적화.** 하나의 예시를 테스트하고 개선을 보고 성공을 선언합니다. 실제 사용에서 프롬프트는 다른 입력으로 실패합니다. 5–10개의 대표적인 예시에서 테스트하십시오.',
          '**실수 3: 단 하나의 모델을 위한 최적화.** GPT-5.6를 위해 최적화하고 완벽한 결과를 보고 Claude에 배포합니다. 거기서는 실패할 수 있습니다. 최소 2개 모델(GPT-5.6와 Claude Opus 5)에서 테스트하십시오; 이상적으로는 3개.',
          '**실수 4: 출력 형식 무시.** 프롬프트가 올바른 사실을 생성하지만 잘못된 구조로 생성합니다. "잘못된 형식"은 가장 흔하고 가장 빠르게 수정할 수 있는 실패 방식입니다. 항상 지정하십시오: "필드가 있는 JSON으로 응답하시오: [목록]" 또는 "열이 있는 마크다운 표를 사용하시오: [목록]."',
          '**실수 5: 과도한 프롬프팅.** 200 토큰 프롬프트에 15가지 제약 조건, 5가지 역할 설명, 10가지 예시를 추가합니다. 너무 많은 동시 지시가 모델을 압도합니다. 최소한으로 시작하여 필요할 때만 제약 조건을 추가하십시오.',
          '**실수 6: 최적화와 파인튜닝 혼동.** 최적화는 프롬프트를 개선하고; 파인튜닝은 모델을 훈련합니다. 6가지 레버를 모두 시도했는데 프롬프트가 여전히 실패한다면, 모델이 작업에 대한 지식이나 능력이 부족할 수 있습니다 — 그것은 최적화 문제가 아닌 파인튜닝 문제입니다.',
          '**실수 7: 최적화된 프롬프트를 저장하지 않음.** 프롬프트를 최적화하고 배포한 다음 아무도 작동하는 버전을 저장하지 않았기 때문에 6개월 후에 같은 프롬프트를 다시 최적화합니다. 버전 관리되고 문서화되고 공유된 프롬프트 라이브러리는 최적화 작업을 지속적인 자산으로 변환합니다.',
        ],
      },

      advancedTechniques: {
        id: 'prompt-optimization-techniques-advanced-methods',
        title: '프롬프트 최적화 기술: 고급 방법',
        content: [
          '**6가지 주요 레버를 넘어 고급 프롬프트 최적화 기술은 특정 실패 방식을 수정하기 위해 특화된 패턴을 적용합니다.** 최적화 도전에 따라 적용할 기술을 배우십시오:',
        ],
        items: [
          '[Few-Shot vs Zero-Shot](/ko/prompt-engineering/zero-shot-vs-few-shot): 모델이 출력을 올바르게 형식화하지 않거나 원하는 스타일을 놓칠 때 프롬프트에 1–3개의 입력/출력 쌍을 추가하십시오. Few-shot 예시는 형식을 가르치는 가장 직접적인 방법입니다.',
          '[Chain-of-thought](/ko/prompt-engineering/chain-of-thought-prompting): 다단계 추론 실패를 수정하기 위해 "응답하기 전에 단계별로 생각하라"를 삽입하십시오. 이 기술은 다단계 추론을 개선할 수 있으며 효과는 모델과 작업에 따라 다릅니다.',
          '[Constrained prompting](/ko/prompt-engineering/constrained-prompting): 범위 및 스타일 실패를 수정하기 위해 명시적 금지("전문 용어를 사용하지 마시오", "숫자를 만들지 마시오", "입력을 반복하지 마시오")를 추가하십시오.',
          '[Self-consistency](/ko/prompt-engineering/self-consistency-prompting): 3–5번 독립적으로 프롬프트 출력을 생성한 다음 가장 일반적인 응답을 반환하십시오. 이것은 모델 실행을 결합하여 낮은 확률 사실의 환각을 줄입니다.',
          '[Structured output](/ko/prompt-engineering/structured-output-and-json-mode): 형식 준수를 수정하기 위해 JSON, 마크다운 표 또는 기타 기계 가독 형식을 요청하십시오.',
        ],
      },

      keyTerms: {
        title: '프롬프트 최적화의 핵심 용어는 무엇인가요?',
        items: [
          '[Few-shot 프롬프팅](/ko/prompt-engineering/prompt-engineering-glossary#few-shot-prompting) — 모델이 원하는 패턴이나 형식을 추론하도록 프롬프트에 소수의 입력/출력 예시를 포함시키는 것; 6레버 최적화 프레임워크의 "예시" 레버',
          '[Chain-of-Thought(CoT)](/ko/prompt-engineering/prompt-engineering-glossary#chain-of-thought-cot) — 모델이 답변하기 전에 단계별로 추론하도록 요청하는 것; 다단계 추론 실패를 수정하는 주요 기술',
          '[Self-consistency](/ko/prompt-engineering/prompt-engineering-glossary#self-consistency) — 여러 출력을 생성하고 가장 일반적인 답변을 반환하는 것; 낮은 확률의 사실에서 환각률을 줄임',
          '[Zero-shot 프롬프팅](/ko/prompt-engineering/prompt-engineering-glossary#zero-shot-prompting) — 예시 없이 프롬프팅하는 것; few-shot 최적화를 측정하는 기준선',
          '[환각(Hallucination)](/ko/prompt-engineering/prompt-engineering-glossary#hallucination) — 자신 있게 들리지만 사실상 부정확한 출력; 최적화가 목표로 하는 주요 실패 방식 중 하나',
          '[파인튜닝(Fine-tuning)](/ko/prompt-engineering/prompt-engineering-glossary#fine-tuning) — 도메인별 데이터로 모델 가중치를 재학습하는 것; 엄격한 품질 한계에 도달했을 때 프롬프트 최적화의 대안',
          '[RAG(검색 증강 생성)](/ko/prompt-engineering/prompt-engineering-glossary#rag-retrieval-augmented-generation) — 검색된 문서를 프롬프트 컨텍스트에 주입하는 것; 프롬프트 최적화를 보완함(RAG는 정보를 개선하고, 최적화는 모델이 그 정보를 사용하는 방식을 개선함)',
          '[시스템 프롬프트](/ko/prompt-engineering/prompt-engineering-glossary#system-prompt) — 모든 턴에 걸쳐 모델의 역할, 제약 조건, 동작을 설정하는 지속적인 지시; 자체 최적화 테스트가 필요함',
          '[온도(Temperature)](/ko/prompt-engineering/prompt-engineering-glossary#temperature) — 출력의 무작위성을 제어하는 디코딩 매개변수; 낮은 온도는 최적화 테스트 실행 간 일관성을 향상시킴',
          '[프롬프트 체이닝](/ko/prompt-engineering/prompt-engineering-glossary#prompt-chaining) — 복잡한 작업을 일련의 더 작은 프롬프트로 분해하는 것; 각 하위 프롬프트는 독립적인 최적화의 혜택을 받음',
        ],
      },

      promptLibrary: {
        id: 'saving-optimized-prompts-to-a-library',
        title: '최적화된 프롬프트를 라이브러리에 저장',
        content: [
          '**최적화된 프롬프트는 지속적인 자산입니다.** 3개 모델에서 프롬프트를 테스트하고, 5–10개의 대표적인 입력에서 작동하는지 확인하고, 각 레버가 무엇을 하는지 문서화한 후 — 저장하십시오. 프롬프트 라이브러리를 사용하면 프로젝트 전반에 걸쳐 최적화된 프롬프트를 재사용하고, 팀과 공유하고, 시간이 지남에 따라 개선할 수 있습니다.',
          '각 프롬프트와 함께 저장할 내용: 최종 프롬프트 텍스트, 변경된 레버, 수정된 실패 방식, 테스트된 모델, 대표적인 입력의 합격/불합격 결과. 이 문서화가 프롬프트 라이브러리를 단순한 텍스트 파일 폴더에서 분리하는 것입니다.',
          '완전한 구조화, 버전 관리, 유지 관리 가이드에 대해서는 [시간을 절약하는 프롬프트 라이브러리 구축](/ko/prompt-engineering/build-a-prompt-library)을 참조하십시오.',
        ],
      },

      regionalCompliance: {
        id: 'prompt-optimization-and-regulatory-compliance',
        title: '프롬프트 최적화와 규정 준수',
        content: [
          '규제 환경에서는 테스트 기록이 있는 버전 관리형 프롬프트 라이브러리가 문서화에 도움이 됩니다. 그러나 그것만으로 시스템이 EU AI 법이나 다른 규정을 준수하게 되는 것은 아닙니다.',
          '일본 경제산업성(METI)과 총무성의 AI 사업자 가이드라인은 법적 구속력이 없습니다. 이는 법률 자문이 아닙니다. 적용되는 의무는 전문가에게 확인하십시오.',
        ],
      },

      multilingualReach: {
        id: 'prompt-optimization-across-languages-and-regions',
        title: '언어 및 지역에 걸친 프롬프트 최적화',
        content: [
          '**프롬프트 최적화는 보편적인 학문입니다 — 6가지 레버와 6단계 프로세스는 프롬프트가 작성된 언어에 관계없이 적용됩니다.** 그러나 로컬 검색어가 크게 다르고, 주요 모델이 지역별로 다르며, 일부 언어는 고유한 최적화 도전을 노출합니다.',
        ],
        columns: ['언어/지역', '로컬 용어', '주요 모델', '지역 참고'],
        rows: [
          { '언어/지역': '영어 — 미국', '로컬 용어': 'prompt optimization', '주요 모델': 'GPT-5.6, Claude Opus 5', '지역 참고': '미국식 철자(-ize)' },
          { '언어/지역': '영어 — 영국/AU', '로컬 용어': 'prompt optimisation', '주요 모델': 'GPT-5.6, Claude Opus 5', '지역 참고': '영국식 철자(-ise)' },
          { '언어/지역': '독일어 — DE/AT/CH', '로컬 용어': 'Prompt-Optimierung', '주요 모델': 'GPT-5.6, Claude Opus 5', '지역 참고': 'EU AI 법이 DACH 기업에 특히 중요' },
          { '언어/지역': '프랑스어 — FR/CA', '로컬 용어': 'optimisation de prompt', '주요 모델': 'GPT-5.6, Claude Opus 5', '지역 참고': '격식체 표현' },
          { '언어/지역': '스페인어 — ES/LATAM', '로컬 용어': 'optimización de prompts', '주요 모델': 'GPT-5.6', '지역 참고': '중립 스페인어 용어' },
          { '언어/지역': '포르투갈어 — BR', '로컬 용어': 'otimização de prompts', '주요 모델': 'GPT-5.6', '지역 참고': '브라질 포르투갈어 용어' },
          { '언어/지역': '일본어 — JP', '로컬 용어': 'プロンプト最適化', '주요 모델': 'GPT-5.6 (강력한 일본어 지원)', '지역 참고': '모델별 토큰 수 확인' },
          { '언어/지역': '중국어 간체 — CN', '로컬 용어': '提示词优化', '주요 모델': 'DeepSeek, Qwen 3', '지역 참고': '간체자 표기' },
          { '언어/지역': '한국어 — KR', '로컬 용어': '프롬프트 최적화', '주요 모델': 'GPT-5.6, Claude Opus 5', '지역 참고': '모델별 토큰 수 확인' },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[프롬프트 엔지니어링이란?](/ko/prompt-engineering/what-is-prompt-engineering) — 프롬프트 설계의 기둥 정의와 주요 구성 요소',
          '[모든 프롬프트에 필요한 5가지 구성 요소](/ko/prompt-engineering/5-building-blocks-every-prompt-needs) — 최적화하는 구조적 요소',
          '[Chain-of-Thought 프롬프팅](/ko/prompt-engineering/chain-of-thought-prompting) — 정확성을 향상시키기 위한 단계별 추론 기술',
          '[Zero-Shot vs Few-Shot 프롬프팅](/ko/prompt-engineering/zero-shot-vs-few-shot) — 최적화 레버로 예시를 언제 추가할지',
          '[시간을 절약하는 프롬프트 라이브러리 구축](/ko/prompt-engineering/build-a-prompt-library) — 팀 자산으로 최적화된 프롬프트 보존',
        ],
      },

      faq: {
        id: 'faq',
        title: 'FAQ: 프롬프트 최적화',
        faqs: [
          { q: '프롬프트 최적화란 무엇입니까?', a: '프롬프트 최적화는 특정 작업에 대한 AI 출력 품질을 향상시키기 위해 기존 프롬프트를 반복적으로 수정하는 프로세스입니다. 실패 방식(잘못된 형식, 환각, 모호한 출력)을 식별하고, 하나의 변수(구체성, 컨텍스트, 예시, 제약 조건, 출력 형식 또는 역할)를 변경하고, GPT-5.6, Claude Opus 5, Gemini 3.1 Pro와 같은 모델에서 결과를 테스트합니다.' },
          { q: '프롬프트 최적화와 프롬프트 엔지니어링의 차이점은 무엇입니까?', a: '프롬프트 엔지니어링은 목표, 컨텍스트, 출력 형식과 같은 구성 요소를 사용하여 처음부터 프롬프트 구조를 설계하는 학문입니다. 프롬프트 최적화는 실패 방식을 진단하고 목표 변경을 적용하여 이미 작성된 프롬프트를 개선하는 반복적 하위 프로세스입니다.' },
          { q: '프롬프트를 최적화하는 데 몇 번의 반복이 필요합니까?', a: '대부분의 작업에서 2–4회의 목표 반복으로 충분합니다. 수익 체감은 5–6회 반복 후에 설정됩니다.' },
          { q: '프롬프트를 최적화할 때 어떤 레버를 먼저 변경해야 합니까?', a: '출력 형식부터 시작하십시오. 형식 미준수는 가장 흔하고 가장 빠르게 수정할 수 있는 실패 방식입니다. 원하는 정확한 구조를 지정한 다음 이후 반복에서 다른 문제를 해결하십시오.' },
          { q: '프롬프트 최적화는 모든 AI 모델에서 작동합니까?', a: '네, 하지만 모델별 조정이 필요합니다. 6가지 주요 최적화 레버는 GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Mistral Large에 적용됩니다. 그러나 각 모델은 지시 밀도에 다르게 반응합니다.' },
          { q: '프롬프트 최적화에서 가장 흔한 실수는 무엇입니까?', a: '여러 변수를 동시에 변경하는 것입니다. 같은 수정에서 예시를 추가하고, 출력 형식을 변경하고, 역할 지시를 추가하면, 어떤 변경이 출력을 개선(또는 저하)했는지 확인할 수 없습니다.' },
          { q: '프롬프트 최적화가 AI 환각을 줄일 수 있습니까?', a: '네, 올바른 기술로 가능합니다. 앵커링 컨텍스트, 사실적으로 정확한 출력이 있는 few-shot 예시, 명시적 제약 조건을 추가하면 환각을 줄이는 데 도움이 될 수 있습니다.' },
          { q: '프롬프트 최적화 대신 파인튜닝을 언제 사용해야 합니까?', a: '프롬프트 최적화가 한계에 도달했을 때 파인튜닝을 사용하십시오. 프롬프트 최적화가 더 빠르고 저렴하며 항상 파인튜닝 전에 소진해야 합니다.' },
          { q: '프롬프트가 완전히 최적화되었을 때 어떻게 알 수 있습니까?', a: '프롬프트는 다음과 같을 때 충분히 최적화됩니다: (1) 4–5개의 대표적인 입력에서 올바른 출력을 생성할 때, (2) 재실행 시 일관된 출력을 생성할 때, (3) 최소 두 개의 모델에서 작동할 때, (4) 후처리 없이 형식 사양을 충족할 때.' },
          { q: '프롬프트 최적화가 이미지 프롬프트에 적용됩니까?', a: '원칙은 적용됩니다 — 구체성, 제약 조건, 예시는 이미지 모델에 유효한 레버입니다. 최적화 프로세스(기준선 → 진단 → 변수 하나 변경 → 테스트)는 동일합니다.' },
          { q: '자동 프롬프트 최적화란 무엇입니까?', a: '두 번째 AI 모델을 사용하여 인간 개입 없이 프롬프트를 재작성하고 개선합니다. DSPy(Stanford), TextGrad, APE와 같은 도구는 후보 프롬프트를 생성하고 점수를 매기고 최상의 변형을 선택합니다.' },
          { q: '프롬프트 최적화와 프롬프트 튜닝의 차이점은 무엇입니까?', a: '프롬프트 최적화는 모델 가중치를 수정하지 않고 이산 텍스트 프롬프트를 개선합니다. 프롬프트 튜닝은 경사 하강으로 훈련되는 연속적인 소프트 프롬프트 벡터를 학습합니다.' },
          { q: '프롬프트 최적화를 위한 최고의 도구는 무엇입니까?', a: '단 하나의 최고 도구는 없습니다. 예: PromptQuorum(이 사이트 발행사의 제품; GPT-5.6, Claude, Gemini에 동시에 전송), DSPy(프로그래밍 방식 최적화), LangSmith(버전 관리 및 추적), Promptfoo(오픈 소스 CLI), PromptLayer(버전 관리 및 분석).' },
          { q: '시스템 프롬프트를 어떻게 최적화합니까?', a: '시스템 프롬프트 최적화는 두 가지 추가 제약 조건을 가진 동일한 6단계 프로세스를 따릅니다. 시스템 프롬프트는 모든 턴에 걸쳐 지속됩니다; 길이가 중요합니다 — 매우 긴 시스템 프롬프트는 이후 사용자 턴의 지시 준수를 줄일 수 있습니다.' },
          { q: 'ChatGPT를 프롬프트 최적화에 사용할 수 있습니까?', a: '네. 실패한 프롬프트를 제공하고 실패 방식을 설명하여 GPT-5.6에 프롬프트를 재작성하도록 요청할 수 있습니다. 이것은 메타 프롬프팅의 한 형태입니다.' },
          { q: '머신 러닝에서 프롬프트 최적화란 무엇입니까?', a: '모델을 재훈련하지 않고 파이프라인의 일부로 언어 모델에 공급되는 프롬프트를 개선하는 기술을 말합니다. 이산 프롬프트 최적화와 연속적 프롬프트 튜닝 모두를 포함합니다.' },
          { q: '프롬프트 최적화가 AI 출력 품질을 얼마나 개선합니까?', a: '모델, 작업, 원래 프롬프트에 따라 다르므로 일반적인 수치는 없습니다. 같은 입력으로 기존 프롬프트와 새 프롬프트를 실행해 통과율을 직접 비교하십시오.' },
          { q: '각 AI 모델에 대해 프롬프트를 별도로 최적화해야 합니까?', a: '모델에 구애받지 않는 최적화로 시작하십시오. 잘 구조화된 프롬프트는 일반적으로 세 주요 모델 모두에서 잘 작동합니다. 모델 간 테스트에서 divergent 결과가 나타날 때만 모델별 변형을 추가하십시오.' },
          { q: '프롬프트 최적화와 RAG의 차이점은 무엇입니까?', a: '프롬프트 최적화는 프롬프트의 지시와 구조를 개선합니다. RAG는 관련 문서를 검색하여 모델이 사용할 수 있는 정보를 개선합니다. 둘은 상호 보완적입니다: RAG는 정보 문제를 해결하고; 프롬프트 최적화는 처리 문제를 해결합니다.' },
          { q: 'GPT-5.6에 특화된 프롬프트를 최적화하려면 어떻게 해야 합니까?', a: 'GPT-5.6에서는 다음 네 가지 최적화 방법을 시험해 볼 만합니다: (1) 시스템 프롬프트 내 명시적인 JSON 형식 요청 — 구조화된 출력에는 스키마를 정확히 정의하십시오. (2) 시스템 프롬프트 내 마크다운 헤더 — H2 섹션(## 역할, ## 작업, ## 출력 형식)을 사용해 관심사를 분리하십시오. (3) 엄격한 제약 — 단어 수나 길이 제한이 없으면 응답이 필요 이상으로 길어질 수 있습니다; "≤150단어로 답변하십시오" 또는 "설명 없이 JSON 객체만 반환하십시오"를 추가하십시오. (4) 도구 사용 프레이밍 — 검색이나 계산이 포함된 작업의 경우, Assistants API에서 도구를 활성화할 때 산문체 지시 대신 함수 정의로 프롬프트를 구성하십시오.' },
        ],
      },

      sources: {
        title: '출처',
        items: [
          '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompt Engineering Techniques"](https://arxiv.org/abs/2406.06608) — 58가지 텍스트 기반 프롬프팅 기술 분류',
          '[Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"](https://arxiv.org/abs/2201.11903) — 최적화 레버로서 단계별 추론에 대한 동료 검토 학문적 기반',
          '[OpenAI. "Prompt engineering"](https://developers.openai.com/api/docs/guides/prompt-engineering) — OpenAI의 프롬프트 엔지니어링 가이드',
          '[Brown et al., 2020. "Language Models are Few-Shot Learners"](https://arxiv.org/abs/2005.14165) — 예시를 높은 레버리지 최적화 레버로 확립하는 기초 논문; 6가지 레버 프레임워크의 예시 레버의 기반',
        ],
      },

    },
},
};
