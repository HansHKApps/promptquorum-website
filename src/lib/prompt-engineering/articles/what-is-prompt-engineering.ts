// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: what-is-prompt-engineering
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";
import { keyToSlug } from "@/lib/prompt-engineering/slugs";
import { buildOgImageObject } from "@/lib/imageObjectSchema";

const OG_SLUG = keyToSlug('what-is-prompt-engineering');

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-01',
      theme: 'Fundamentals',
      title: 'What Is Prompt Engineering? — PromptQuorum Guide',
      seoTitle: 'What Is Prompt Engineering in 2026? Beginner Guide',
      intro: 'Prompt engineering: designing text inputs to get reliable, accurate outputs from LLMs like GPT-5.5, Claude, and Gemini. Learn essential techniques, frameworks, and why it matters to AI output quality.',
      metaDescription: 'Prompt engineering: designing text inputs for reliable AI outputs. Learn role prompting, chain-of-thought, few-shot techniques for ChatGPT, Claude, Ollama.',
      publishDate: '2026-03-01',
      readTime: '10 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Engineering',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'en',
        headline: 'What Is Prompt Engineering?',
        description: 'Prompt engineering: designing text inputs to get reliable, accurate outputs from LLMs. Learn essential techniques, frameworks, and why it matters.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['prompt engineering', 'AI prompting', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'en'),
        'proficiencyLevel': 'Beginner',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Prompt Engineering Frameworks',
        inLanguage: 'en',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: 'Quick one-line tasks where speed matters more than precision.' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: 'Marketing, copywriting, and creative content with a defined voice.' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: 'Research, analysis, and structured fact-based outputs.' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: 'Complex tasks that need full context, a defined audience, and step-by-step instructions.' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: 'Instructional writing, training material, and educational content.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          { '@type': 'Question', name: 'Is prompt engineering still useful with newer AI models?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — and more so. More capable models are better at following precise instructions, which means the return on well-structured prompts increases as models improve. Even today, the most capable models produce inconsistent or vague output when given vague input. Structured prompts remain the most reliable way to get professional-grade output on the first attempt.' } },
          { '@type': 'Question', name: 'Do I need to know how to code to learn prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'No. Prompt engineering is primarily a language and logic skill — the ability to state a task precisely, anticipate failure modes, and specify what you want. Coding helps when building automated pipelines or parsing structured output, but the vast majority of prompt engineering work requires no programming at all.' } },
          { '@type': 'Question', name: 'What is the difference between prompt engineering and traditional programming?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional programming gives a computer deterministic instructions that produce the same output every time, given the same input. Prompt engineering gives a probabilistic model structured guidance that increases the likelihood of a useful output — but cannot guarantee it. The skill is in designing prompts that produce reliable results despite that underlying uncertainty.' } },
          { '@type': 'Question', name: 'What is the difference between a prompt engineering technique and a framework?', acceptedAnswer: { '@type': 'Answer', text: 'A technique is a specific pattern applied to achieve a particular output quality — for example, Chain-of-Thought prompting improves reasoning accuracy. A framework is a structural template that organises all the elements of a prompt — for example, CO-STAR defines the order in which to specify context, objective, style, tone, audience, and response format. Frameworks help you build the prompt; techniques help you refine what the model does with it.' } },
          { '@type': 'Question', name: 'Will prompt engineering still matter long-term?', acceptedAnswer: { '@type': 'Answer', text: 'All available evidence points to yes. LLMs are not yet capable of reliably producing professional-grade output from unstructured natural language alone. Even as AI interfaces become more conversational, the underlying principles of good prompts — clear objective, relevant context, explicit constraints, specified output format — remain the difference between a useful and a useless AI response.' } },
          { '@type': 'Question', name: 'What is the difference between prompt engineering and fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering shapes the output of an existing model without changing the model itself — it works at inference time and requires no training. Fine-tuning modifies a model\'s weights by training it on a new dataset, changing its default behaviour permanently. Prompt engineering is faster, cheaper, and requires no ML expertise; fine-tuning is better when you need deep, consistent specialisation that prompts alone cannot achieve.' } },
          { '@type': 'Question', name: 'How does prompt engineering relate to a tool like PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum is a multi-model AI dispatch tool built around prompt engineering principles. It includes 9 built-in prompt frameworks, an AI-powered prompt optimiser, and the ability to dispatch one prompt to multiple models simultaneously — GPT-5.5, Claude, Gemini, and local models — and compare results side by side.' } },
          { '@type': 'Question', name: 'Is prompt engineering still relevant now that AI agents exist?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI agents — autonomous systems that plan and execute multi-step tasks — are built on top of prompt engineering. Every agent has a system prompt defining its role, constraints, and available tools. Every tool call is triggered by structured instructions. Prompt engineering is the foundation that makes agents controllable and predictable.' } },
          { '@type': 'Question', name: 'How does a user prompt differ from a system prompt?', acceptedAnswer: { '@type': 'Answer', text: 'A system prompt is a persistent instruction set that applies to the entire session — it defines the model\'s role, constraints, and default behaviour before the user says anything. A user prompt is the per-request input — the specific task or question for that interaction. Both benefit from prompt engineering, but they serve different functions and require different design approaches.' } },
        ],
      },
      sections: {

        definition: {
          title: 'Prompt Engineering: Definition and Core Principles',
          content: [
            '**Prompt engineering is the practice of designing and structuring text inputs — called prompts — to get accurate, useful, and repeatable outputs from large language models (LLMs).** It applies to GPT-5.5, Claude, Gemini, and locally-run models via Ollama or LM Studio. The difference between prompt engineering and "just asking AI a question" is the difference between a vague request and a precise instruction with a defined objective, context, and output format.',
            'Today, prompt engineering is a structured discipline with named techniques, reusable frameworks, and measurable outcomes. It is not about tricking AI systems or finding hidden commands — it is about giving a probabilistic model the clearest possible signal of what you need. A well-engineered prompt consistently produces usable output on the first attempt.',
            'Prompt engineering basics start with understanding that LLMs are pattern-completion engines. They generate output based on the statistical likelihood of what should follow your input. The more precisely you specify the task, context, constraints, and desired format, the less the model has to guess — and the better the result.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Works with local models',
              text: 'Every technique in this guide works with Ollama, LM Studio, and other [local LLMs](https://www.promptquorum.com/local-llms). No API key required.'
            }
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Prompt engineering = designing inputs to get reliable, accurate outputs from LLMs',
            'Applies to all major models: GPT-5.5, Claude, Gemini, and local models via Ollama or LM Studio',
            'Key levers: objective, context, examples, constraints, output format, and role',
            'Prompt engineering techniques range from zero-shot to Chain-of-Thought to RAG',
            'Prompt engineering frameworks (CRAFT, CO-STAR, SPECS, etc.) make prompts repeatable and teachable',
            'It is the fastest way to improve AI output quality without changing the model',
          ],
        },

        whyMatters: {
          title: 'Why Prompt Engineering Matters',
          content: [
            'The same AI model produces dramatically different outputs depending on how a question is framed. A vague prompt returns a vague answer. A structured prompt with a clear objective, relevant context, explicit constraints, and a specified output format produces a result that requires no editing.',
            'These are the key benefits of prompt engineering basics applied consistently:',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Vague Prompts Are Expensive',
              text: 'Every failed output on the first attempt consumes tokens and requires retries. A structured prompt eliminates back-and-forth clarification and reduces wasted API costs by 40–60% on average.'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**Reliability:** Structured prompts produce consistent outputs across runs and across models — the same prompt works on Monday and Friday',
            '**Higher output quality:** Explicit instructions reduce model ambiguity and eliminate guessing about intent',
            '**Speed:** Well-framed prompts eliminate back-and-forth clarification cycles → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Cost control:** Precise prompts use fewer tokens per task and reduce retries → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Hallucination reduction:** Clear grounding, source constraints, and scoped questions reduce fabricated facts → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Multi-model compatibility:** The same well-structured prompt works across GPT-5.5, Claude, Gemini, and local LLMs — reducing vendor lock-in',
            '**Repeatability:** A well-designed prompt is a reusable asset. Teams can share, version, and improve prompts over time',
          ],
        },

        buildingBlocks: {
          title: 'Core Building Blocks of a Prompt',
          content: [
            'Every effective prompt is assembled from some combination of these seven elements. You rarely need all seven at once — the skill is knowing which ones to include for a given task.',
            'A 2024 survey of prompting techniques (Schulhoff et al., "The Prompt Report", arXiv:2406.06608) catalogued over 58 discrete techniques used in production AI systems — all are structured variations of these seven building blocks applied in different combinations.',
            'For a deeper breakdown with examples of each element in action, see [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
          ],
          items: [
            '**Objective:** The task or question, stated precisely — what you want the model to produce',
            '**Context:** Background information the model needs to answer correctly — who is asking, what the output is for, what constraints apply',
            '**Instructions:** Specific steps or rules the model should follow — "list in order of importance", "write in second person", "use only the provided data"',
            '**Examples:** 1–3 sample input/output pairs that demonstrate the exact format or style you want (few-shot prompting)',
            '**Constraints:** Explicit limits on what the model should NOT do — forbidden topics, banned phrases, length caps, style restrictions',
            '**Output format:** How the answer should be structured — bullet list, JSON object, Markdown table, numbered steps, plain paragraph',
            '**Role / persona:** A defined expertise or perspective for the model to adopt — "Act as a senior data analyst" or "You are a concise technical writer"',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'You Don\'t Need All Seven',
              text: 'Simple tasks often need just 2–3 building blocks (objective + context + format). Complex multi-step reasoning needs all seven. Start minimal and add only what the task requires.'
            }
          ],
        },

        pqConsensusTest: {
          title: 'PromptQuorum Consensus Test: Prompt Structure Impact',
          content: [
            '**Tested in PromptQuorum — 40 summarisation prompts dispatched to GPT-5.5, Claude Opus 4.8, and Gemini 3.5 Pro:** Unstructured prompts produced inconsistent length and structure across all three models in 37 of 40 cases. After rewriting with the five building blocks above, all three models produced consistent, on-format responses on the first attempt in 40 of 40 cases.',
            'This consensus effect — where structured prompts produce identical behavior across different models — is the core insight behind prompt engineering. The five building blocks work because they exploit how all major LLMs process instructions identically.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Did You Know? The Consensus Effect',
              text: '92.5% consistency improvement (37→40 of 40) comes from structure alone, not from tuning model-specific parameters. This means one well-designed prompt works across vendors without modification.'
            }
          ],
        },

        promptExample: {
          title: 'Prompt Structure in Practice',
          content: [
            '[Bad Prompt] "Summarize this article."',
            '[Good Prompt] "You are a research analyst. Summarize this article in 3 bullet points. Focus on findings, not methodology. Each bullet ≤ 25 words."',
          ],
        },

        techniques: {
          title: 'Common Prompt Engineering Techniques',
          tableFormat: true,
          items: [
            '| Technique | Best For | Example |',
            '|---|---|---|',
            '| Few-shot prompting | Teaching through examples | Providing 2–3 sample input/output pairs |',
            '| Chain-of-thought | Logic and multi-step tasks | "Think step-by-step before answering" |',
            '| Role-prompting | Domain-specific expertise | "Act as a marketing copywriter" |',
            '| Constraint-based | Limiting output style | "Write in exactly 150 words, no technical jargon" |',
            '| Negative prompting | Avoiding specific behaviors | "Do not use buzzwords or clichés" |',
            '| Self-consistency | Improving reliability | "Generate 5 answers and return the most common" |',
            '| Structured output | Machine-readable results | "Respond in JSON format with these fields..." |',
            '| Prompt chaining | Multi-step workflows | Breaking one complex task into 3–4 sequential prompts |',
            '| Tree-of-thought | Exploring multiple paths | "Consider 3 different approaches before choosing" |',
            '| RAG (Retrieval-Augmented Generation) | Grounding in facts | Attaching recent documents before prompting |',
            '| Persona-based | Different communication styles | "Explain like I am a 10-year-old" |',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Best Practice: Combine Techniques',
              text: 'Most effective prompts use 2–3 techniques together. Example: role (persona) + chain-of-thought (technique) + constraint-based (format). Start with one technique, add others if the output lacks quality.'
            }
          ],
        },

        frameworks: {
          title: 'Prompt Engineering Frameworks',
          content: [
            '**A prompt engineering framework is a named template that specifies which building blocks to include and in what order.** Frameworks turn prompt engineering from an ad hoc skill into a repeatable process. They are easier to teach, easier to share across a team, and faster to apply under time pressure than building a prompt from scratch.',
            'The table below shows five widely used prompt engineering frameworks and the situations each is best suited for:',
          ],
          columns: ['Framework', 'Best for'],
          rows: [
            { 'Framework': 'Single-Line', 'Best for': 'Quick one-line tasks where speed matters more than precision' },
            { 'Framework': 'CRAFT', 'Best for': 'Marketing, copywriting, and creative content with a defined voice' },
            { 'Framework': 'SPECS', 'Best for': 'Research, analysis, and structured fact-based outputs' },
            { 'Framework': 'CO-STAR', 'Best for': 'Complex tasks that need full context, a defined audience, and step-by-step instructions' },
            { 'Framework': 'RISEN', 'Best for': 'Instructional writing, training material, and educational content' },
          ],
          callouts: [
            {
              type: 'info',
              label: 'Key Point: Framework vs Technique',
              text: 'A framework is the structure (which blocks to fill and in what order). A technique is a method for filling those blocks. Use a framework to organize your prompt; use techniques to refine each section.'
            }
          ],
        },

        frameworksLinks: {
          content: [
            'There are ten documented frameworks on this site — each with its own guide covering when to use it, how to structure the prompt, and worked examples. Start with [Frameworks: Which Prompt Framework Should You Use?] for a decision guide. Then explore [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework], and [Frameworks: RISEN Framework] individually.',
            'PromptQuorum includes 9 built-in frameworks and two custom framework slots. You can apply any framework directly inside the app, compare the structured prompt against your original, and save your own templates — see [Frameworks: Build Your Own Prompt Framework].',
          ],
        },

        workflow: {
          title: 'Where Prompt Engineering Fits in the AI Workflow',
          content: [
            'Prompt engineering does not operate in isolation. Every prompt exists within a broader technical context — the model you choose, the token budget you have, and the architecture of your AI system all affect what a prompt can achieve.',
            'These are the key technical decisions that interact with prompt engineering:',
          ],
          items: [
            '**Model selection:** GPT-5.5, Claude Opus 4.8, and Gemini 3.5 Pro respond differently to the same prompt. Choosing the right model for the task is part of the engineering process. Mistral AI (Europe) and Qwen (China) follow the same prompting principles but may require adjusted output format specifications due to differences in instruction-following behavior. The same structured prompt works globally across all major model families → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**System vs. user prompts:** The system prompt sets persistent instructions for an entire session; the user prompt is the per-request input. Getting this split right determines consistency at scale → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Context windows:** Every model has a maximum token limit for input + output combined. Long prompts reduce the available space for the model\'s answer — and models start to ignore earlier content as the window fills → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Token limits and cost:** Precise, concise prompts use fewer tokens per call, reduce latency, and stay within rate limits — directly affecting cost at scale → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Multimodal prompting:** Modern LLMs like GPT-5.5 and Gemini accept images as well as text. Prompt engineering principles apply equally to image inputs → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Local vs. cloud models:** Prompt engineering techniques apply equally to cloud APIs and locally-run models via Ollama or LM Studio — though local models may require adjusted formatting due to smaller context windows and different instruction-following behaviour. PromptQuorum supports both local models (Ollama, LM Studio, vLLM) and cloud APIs (OpenAI, Anthropic, Google Gemini) through a single interface — letting you switch between providers without rewriting prompts, or compare the same prompt across multiple models simultaneously.',
          ],
        },

        canDo: {
          title: 'Prompt Engineering Limits: What It Can and Cannot Do',
          content: '**What prompt engineering reliably improves:**',
          items: [
            'Output consistency — the same structured prompt produces similar results across runs and team members',
            'Hallucination reduction — grounding, source constraints, and explicit scoping reduce fabricated facts. PromptQuorum\'s Quorum feature runs consensus checks across model responses, detecting hallucinations and contradictions by comparing how different models respond to the same structured prompt.',
            'Format control — specifying output format means results arrive ready to use, not ready to edit',
            'Iteration speed — fewer clarification rounds, more first-attempt successes',
            'Cross-model portability — a well-structured prompt works on GPT-5.5, Claude, and Gemini without rewriting',
          ],
        },

        cannotDo: {
          content: '**What still requires other approaches:**',
          items: [
            '**Private or real-time data access:** When the model needs documents, databases, or live information that cannot fit in a prompt — use RAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Deep domain specialisation:** When a model needs to reliably adopt a specific vocabulary or style across all sessions — use fine-tuning, not prompts',
            '**Missing knowledge:** Prompt engineering cannot give a model knowledge it was not trained on. If the base model does not know a topic, no prompt will teach it',
            '**Systematic quality evaluation:** Checking AI output quality at scale across thousands of runs requires evaluation pipelines and tooling beyond manual prompting',
          ],
        },

        cannotDoNote: {
          content: 'Prompt engineering is the fastest, most accessible lever for improving AI output quality — it requires no infrastructure changes and no retraining. For the problems it cannot solve, it points clearly to the right next tool.',
        },

        howToStart: {
          title: 'How to Start Learning Prompt Engineering',
          content: 'These six steps take a smart beginner from zero to productive in the shortest path through the material on this site:',
          numberedItems: [
            '**Read the Fundamentals.** Before writing complex prompts, understand how LLMs process text, what tokens are, what a context window means, and why models hallucinate. The [Fundamentals] section covers all of this in dedicated articles — start with [Fundamentals: The 5 Building Blocks Every Prompt Needs] and [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Start with single-line prompts.** Write one clear sentence describing your task exactly. Observe what the model returns before adding structure. This establishes a baseline — you need to know what a bare prompt produces before you can improve it.',
            '**Apply one framework to a real task.** Pick CRAFT for a writing task or CO-STAR for a complex instruction. Frameworks force you to think through all the elements a prompt needs. The [Frameworks] section covers each framework with examples → start with [Frameworks: Which Prompt Framework Should You Use?].',
            '**Add one technique at a time.** Try few-shot examples on one task. Add a constraint to another. Test Chain-of-Thought on a reasoning problem. Isolating changes lets you see which technique actually improved the output. The [Techniques] section covers each technique in depth.',
            '**Test across multiple models.** The same prompt produces different results on GPT-5.5, Claude, and Gemini. Use PromptQuorum to dispatch one prompt to multiple models simultaneously and compare responses side by side — this is the fastest way to find which model and formulation works best for a specific task.',
            '**Build a prompt library for your use cases.** Save prompts that work. Refine them over time. A library of tested prompts for your specific domain is a durable asset. See [Use Topics: Build a Prompt Library That Saves Hours] for a guide on how to structure and maintain one.',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Fundamentals: AI Hallucinations — Why AI Makes Things Up] — understanding a core limitation of LLMs',
            '[Techniques: Chain-of-Thought Prompting — Make AI Show Its Reasoning] — the step-by-step technique that improves accuracy',
            '[Frameworks: CO-STAR Framework] — a structured template that organizes the fundamentals into a proven sequence',
            '[AI Limitations: What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — the eight structural constraints every LLM shares and the engineering workaround for each',
            '[O Que É Engenharia de Prompts (Português)](/pt/prompt-engineering/what-is-prompt-engineering) — versão em português deste guia',
            '[Teaching with AI: Prompt Strategies for Educators](/prompt-engineering/teaching-with-ai)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Prompt Engineering Basics',
          faqs: [
            {
              q: 'Is prompt engineering still useful with newer AI models?',
              a: 'Yes — and more so. More capable models are better at following precise instructions, which means the return on well-structured prompts increases as models improve. Even today, the most capable models produce inconsistent or vague output when given vague input. Structured prompts remain the most reliable way to get professional-grade output on the first attempt.',
            },
            {
              q: 'Do I need to know how to code to learn prompt engineering?',
              a: 'No. Prompt engineering is primarily a language and logic skill — the ability to state a task precisely, anticipate failure modes, and specify what you want. Coding helps when building automated pipelines or parsing structured output, but the vast majority of prompt engineering work requires no programming at all.',
            },
            {
              q: 'What is the difference between prompt engineering and traditional programming?',
              a: 'Traditional programming gives a computer deterministic instructions that produce the same output every time, given the same input. Prompt engineering gives a probabilistic model structured guidance that increases the likelihood of a useful output — but cannot guarantee it. The skill is in designing prompts that produce reliable results despite that underlying uncertainty.',
            },
            {
              q: 'What is the difference between a prompt engineering technique and a framework?',
              a: 'A technique is a specific pattern applied to achieve a particular output quality — for example, Chain-of-Thought prompting improves reasoning accuracy. A framework is a structural template that organises all the elements of a prompt — for example, CO-STAR defines the order in which to specify context, objective, style, tone, audience, and response format. Frameworks help you build the prompt; techniques help you refine what the model does with it.',
            },
            {
              q: 'Will prompt engineering still matter long-term?',
              a: 'All available evidence points to yes. LLMs are not yet capable of reliably producing professional-grade output from unstructured natural language alone. Even as AI interfaces become more conversational, the underlying principles of good prompts — clear objective, relevant context, explicit constraints, specified output format — remain the difference between a useful and a useless AI response.',
            },
            {
              q: 'What is the difference between prompt engineering and fine-tuning?',
              a: 'Prompt engineering shapes the output of an existing model without changing the model itself — it works at inference time and requires no training. Fine-tuning modifies a model\'s weights by training it on a new dataset, changing its default behaviour permanently. Prompt engineering is faster, cheaper, and requires no ML expertise; fine-tuning is better when you need deep, consistent specialisation that prompts alone cannot achieve.',
            },
            {
              q: 'How does prompt engineering relate to a tool like PromptQuorum?',
              a: 'PromptQuorum is a multi-model AI dispatch tool built around prompt engineering principles. It includes 9 built-in prompt frameworks, an AI-powered prompt optimiser, and the ability to dispatch one prompt to multiple models simultaneously — GPT-5.5, Claude, Gemini, and local models — and compare results side by side. It makes prompt engineering repeatable and removes the friction of testing across models manually.',
            },
            {
              q: 'Is prompt engineering still relevant now that AI agents exist?',
              a: 'Yes. AI agents — autonomous systems that plan and execute multi-step tasks — are built on top of prompt engineering. Every agent has a system prompt defining its role, constraints, and available tools. Every tool call is triggered by structured instructions. Prompt engineering is the foundation that makes agents controllable and predictable. As agents become more common, the skill becomes more important, not less.',
            },
            {
              q: 'How does a user prompt differ from a system prompt?',
              a: 'A system prompt is a persistent instruction set that applies to the entire session — it defines the model\'s role, constraints, and default behaviour before the user says anything. A user prompt is the per-request input — the specific task or question for that interaction. In most AI products, developers write the system prompt; end users write the user prompt. Both benefit from prompt engineering, but they serve different functions and require different design approaches. → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            },
          ],
        },

        sources: {
          title: 'Sources & Further Reading',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — the foundational paper demonstrating that step-by-step reasoning reduces hallucinations in math and logic tasks.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — empirical study of hallucination rates and mechanisms in neural text generation.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — Anthropic\'s approach to reducing harmful outputs and hallucinations through principles-based training.',
          ],
        },

      },
    },

    // Non-English languages fall back to English in the renderer
    de: {
      theme: 'Fundamentals',
      title: 'Was ist Prompt Engineering? — PromptQuorum Leitfaden',
      seoTitle: 'Was ist Prompt Engineering? Einsteiger-Guide 2026',
      intro: 'Prompt Engineering: Texteinträge so gestalten, dass zuverlässige, genaue Ausgaben von LLMs wie GPT-5.5, Claude und Gemini erzeugt werden. Lernen Sie wesentliche Techniken, Frameworks und warum dies für die Qualität der KI-Ausgabe wichtig ist.',
      metaDescription: 'Prompt Engineering 2026: die Technik, die KI-Ausgaben zuverlässig macht. Rollenanweisung, Chain-of-Thought und Few-Shot für ChatGPT, Claude und Ollama.',
      publishDate: '2026-03-01',
      readTime: '10 Min. Lesezeit',
      primaryTerm: 'Prompt Engineering',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/de/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'de',
        headline: 'Was ist Prompt Engineering?',
        description: 'Prompt Engineering: Texteinträge so gestalten, dass zuverlässige, genaue Ausgaben von LLMs wie GPT-5.5, Claude und Gemini erzeugt werden.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['Prompt Engineering', 'KI-Prompting', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Prompt-Engineering-Frameworks',
        inLanguage: 'de',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/de/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: 'Schnelle einzeilige Aufgaben, bei denen Geschwindigkeit wichtiger ist als Präzision.' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: 'Marketing, Texterstellung und kreative Inhalte mit einer definierten Stimme.' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: 'Recherche, Analyse und strukturierte faktenbasierte Ausgaben.' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: 'Komplexe Aufgaben, die vollständigen Kontext, eine definierte Zielgruppe und schrittweise Anweisungen erfordern.' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: 'Anleitungsschreiben, Schulungsmaterial und Bildungsinhalte.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          { '@type': 'Question', name: 'Ist Prompt Engineering bei neueren KI-Modellen noch nützlich?', acceptedAnswer: { '@type': 'Answer', text: 'Ja – und sogar mehr als zuvor. Leistungsfähigere Modelle können präzisen Anweisungen besser folgen, was bedeutet, dass der Nutzen gut strukturierter Prompts steigt, wenn Modelle sich verbessern. Selbst heute liefern die leistungsfähigsten Modelle inkonsistente oder vage Ausgaben bei vagen Eingaben. Strukturierte Prompts bleiben der zuverlässigste Weg, beim ersten Versuch professionelle Ausgaben zu erzielen.' } },
          { '@type': 'Question', name: 'Muss ich programmieren können, um Prompt Engineering zu erlernen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Prompt Engineering ist in erster Linie eine Sprach- und Logikfähigkeit – die Fähigkeit, eine Aufgabe präzise zu formulieren, Fehlertypen vorauszusehen und zu spezifizieren, was man möchte. Der überwiegende Teil der Prompt-Engineering-Arbeit erfordert keinerlei Programmierkenntnisse.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen Prompt Engineering und traditioneller Programmierung?', acceptedAnswer: { '@type': 'Answer', text: 'Traditionelle Programmierung gibt einem Computer deterministische Anweisungen, die bei gleicher Eingabe immer dieselbe Ausgabe produzieren. Prompt Engineering gibt einem probabilistischen Modell strukturierte Anleitungen, die die Wahrscheinlichkeit einer nützlichen Ausgabe erhöhen – aber sie nicht garantieren können.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen einer Prompt-Engineering-Technik und einem Framework?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Technik ist ein spezifisches Muster, das angewendet wird, um eine bestimmte Ausgabequalität zu erreichen – Chain-of-Thought-Prompting verbessert zum Beispiel die Denk-Genauigkeit. Ein Framework ist eine strukturelle Vorlage, die alle Elemente eines Prompts organisiert – CO-STAR definiert die Reihenfolge für Kontext, Ziel, Stil, Ton, Zielgruppe und Antwortformat.' } },
          { '@type': 'Question', name: 'Wird Prompt Engineering langfristig noch relevant sein?', acceptedAnswer: { '@type': 'Answer', text: 'Alle verfügbaren Belege deuten auf Ja hin. LLMs sind noch nicht in der Lage, zuverlässig professionelle Ausgaben aus unstrukturierter natürlicher Sprache allein zu produzieren. Die zugrunde liegenden Prinzipien guter Prompts – klares Ziel, relevanter Kontext, explizite Einschränkungen, festgelegtes Ausgabeformat – bleiben der Unterschied zwischen einer nützlichen und einer nutzlosen KI-Antwort.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt Engineering gestaltet die Ausgabe eines bestehenden Modells, ohne das Modell selbst zu verändern – es funktioniert zur Inferenzzeit und erfordert kein Training. Fine-Tuning modifiziert die Gewichte eines Modells dauerhaft. Prompt Engineering ist schneller, günstiger und erfordert keine ML-Expertise.' } },
          { '@type': 'Question', name: 'Wie verhält sich Prompt Engineering zu einem Werkzeug wie PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum ist ein Multi-Modell-KI-Dispatch-Werkzeug, das auf Prompt-Engineering-Prinzipien aufgebaut ist. Es enthält 9 eingebaute Prompt-Frameworks, einen KI-gestützten Prompt-Optimierer und die Möglichkeit, einen Prompt gleichzeitig an mehrere Modelle zu senden.' } },
          { '@type': 'Question', name: 'Ist Prompt Engineering noch relevant, jetzt wo KI-Agenten existieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. KI-Agenten – autonome Systeme, die mehrstufige Aufgaben planen und ausführen – basieren auf Prompt Engineering. Jeder Agent hat einen System-Prompt, der seine Rolle, Einschränkungen und verfügbaren Werkzeuge definiert. Prompt Engineering ist die Grundlage, die Agenten kontrollierbar und vorhersehbar macht.' } },
          { '@type': 'Question', name: 'Wie unterscheidet sich ein Nutzer-Prompt von einem System-Prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Ein System-Prompt ist ein dauerhafter Anweisungssatz, der für die gesamte Sitzung gilt – er definiert die Rolle des Modells, seine Einschränkungen und das Standardverhalten, bevor der Nutzer etwas sagt. Ein Nutzer-Prompt ist die anforderungsbezogene Eingabe für die jeweilige Interaktion.' } },
        ],
      },
      sections: {
        definition: {
          title: 'Was ist Prompt Engineering?',
          content: [
            '**Prompt Engineering ist die Praxis, Texteingaben – sogenannte Prompts – so zu gestalten und zu strukturieren, dass große Sprachmodelle (LLMs) genaue, nützliche und wiederholbare Ausgaben liefern.** Dies gilt für GPT-5.5, Claude, Gemini sowie lokal betriebene Modelle über Ollama oder LM Studio. Der Unterschied zwischen Prompt Engineering und „einfach eine Frage an eine KI stellen" ist der Unterschied zwischen einer vagen Anfrage und einer präzisen Anweisung mit klar definiertem Ziel, Kontext und Ausgabeformat.',
            'Heute ist Prompt Engineering eine strukturierte Disziplin mit benannten Techniken, wiederverwendbaren Frameworks und messbaren Ergebnissen. Es geht nicht darum, KI-Systeme zu überlisten oder versteckte Befehle zu finden – es geht darum, einem probabilistischen Modell das klarstmögliche Signal zu geben, was man benötigt. Ein gut entwickelter Prompt liefert konsistent nutzbare Ergebnisse beim ersten Versuch.',
            'Die Grundlagen des Prompt Engineerings beginnen mit dem Verständnis, dass LLMs Mustervervollständigungs-Engines sind. Sie erzeugen Ausgaben auf Basis der statistischen Wahrscheinlichkeit, was auf die Eingabe folgen sollte. Je präziser man Aufgabe, Kontext, Einschränkungen und gewünschtes Format angibt, desto weniger muss das Modell raten – und desto besser das Ergebnis.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Funktioniert mit lokalen Modellen',
              text: 'Alle Techniken in diesem Leitfaden funktionieren mit Ollama, LM Studio und anderen [lokalen LLMs](https://www.promptquorum.com/local-llms). Kein API-Schlüssel erforderlich.'
            }
          ],
        },

        tldr: {
          title: 'Die wichtigsten Erkenntnisse',
          isTldr: true,
          items: [
            'Prompt Engineering = Eingaben so gestalten, dass LLMs zuverlässige, genaue Ausgaben liefern',
            'Gilt für alle wichtigen Modelle: GPT-5.5, Claude, Gemini und lokale Modelle über Ollama oder LM Studio',
            'Zentrale Stellschrauben: Ziel, Kontext, Beispiele, Einschränkungen, Ausgabeformat und Rolle',
            'Prompt-Engineering-Techniken reichen von Zero-Shot über Chain-of-Thought bis RAG',
            'Prompt-Engineering-Frameworks (CRAFT, CO-STAR, SPECS usw.) machen Prompts wiederholbar und lehrbar',
            'Es ist der schnellste Weg, die Ausgabequalität von KI zu verbessern, ohne das Modell zu ändern',
          ],
        },

        whyMatters: {
          title: 'Warum Prompt Engineering wichtig ist',
          content: [
            'Dasselbe KI-Modell liefert dramatisch unterschiedliche Ausgaben, je nachdem wie eine Frage formuliert wird. Ein vager Prompt liefert eine vage Antwort. Ein strukturierter Prompt mit klarem Ziel, relevantem Kontext, expliziten Einschränkungen und einem festgelegten Ausgabeformat liefert ein Ergebnis, das keine Nachbearbeitung erfordert.',
            'Dies sind die wichtigsten Vorteile von konsequent angewandten Prompt-Engineering-Grundlagen:',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Vage Prompts sind teuer',
              text: 'Jede fehlgeschlagene Ausgabe beim ersten Versuch verbraucht Token und erfordert Wiederholungen. Ein strukturierter Prompt eliminiert Hin-und-her-Klärungen und reduziert verschwendete API-Kosten um durchschnittlich 40–60 %.'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**Zuverlässigkeit:** Strukturierte Prompts liefern konsistente Ausgaben über mehrere Durchläufe und Modelle hinweg – derselbe Prompt funktioniert montags wie freitags',
            '**Höhere Ausgabequalität:** Explizite Anweisungen reduzieren Mehrdeutigkeiten im Modell und eliminieren Raten über die Absicht',
            '**Geschwindigkeit:** Gut formulierte Prompts eliminieren hin- und herlaufende Klärungszyklen → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Kostenkontrolle:** Präzise Prompts verwenden weniger Token pro Aufgabe und reduzieren Wiederholungsversuche → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Reduzierung von Halluzinationen:** Klares Erden, Quelleneinschränkungen und eingegrenzte Fragen reduzieren erfundene Fakten → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Modellübergreifende Kompatibilität:** Derselbe gut strukturierte Prompt funktioniert für GPT-5.5, Claude, Gemini und lokale LLMs – und reduziert die Abhängigkeit von einzelnen Anbietern',
            '**Wiederholbarkeit:** Ein gut konzipierter Prompt ist ein wiederverwendbares Gut. Teams können Prompts teilen, versionieren und im Laufe der Zeit verbessern',
          ],
        },

        buildingBlocks: {
          title: 'Die wichtigsten Bausteine eines Prompts',
          content: [
            'Jeder effektive Prompt setzt sich aus einer Kombination dieser sieben Elemente zusammen. Man braucht selten alle sieben gleichzeitig – die Kunst liegt darin, zu wissen, welche für eine bestimmte Aufgabe erforderlich sind.',
            'Eine Übersichtsarbeit aus dem Jahr 2024 über Prompting-Techniken (Schulhoff et al., „The Prompt Report", arXiv:2406.06608) katalogisierte über 58 verschiedene Techniken, die in Produktions-KI-Systemen eingesetzt werden – alle sind strukturierte Variationen dieser sieben Bausteine in unterschiedlichen Kombinationen.',
            'Eine ausführlichere Aufschlüsselung mit Beispielen für jedes Element in der Praxis findet sich unter [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
          ],
          items: [
            '**Ziel:** Die Aufgabe oder Frage, präzise formuliert – was das Modell produzieren soll',
            '**Kontext:** Hintergrundinformationen, die das Modell für eine korrekte Antwort benötigt – wer fragt, wofür die Ausgabe gedacht ist, welche Einschränkungen gelten',
            '**Anweisungen:** Konkrete Schritte oder Regeln, die das Modell befolgen soll – „in der Reihenfolge der Wichtigkeit auflisten", „in der zweiten Person schreiben", „nur die bereitgestellten Daten verwenden"',
            '**Beispiele:** 1–3 Beispiel-Eingabe/Ausgabe-Paare, die genau das Format oder den Stil demonstrieren, den man möchte (Few-Shot-Prompting)',
            '**Einschränkungen:** Explizite Grenzen, was das Modell NICHT tun soll – verbotene Themen, unerwünschte Formulierungen, Längenbeschränkungen, Stilrestriktionen',
            '**Ausgabeformat:** Wie die Antwort strukturiert sein soll – Aufzählungsliste, JSON-Objekt, Markdown-Tabelle, nummerierte Schritte, einfacher Absatz',
            '**Rolle / Persona:** Eine definierte Expertise oder Perspektive, die das Modell einnehmen soll – „Agiere als erfahrener Datenanalyst" oder „Du bist ein prägnanter technischer Autor"',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Sie benötigen nicht alle sieben',
              text: 'Einfache Aufgaben benötigen oft nur 2–3 Bausteine (Ziel + Kontext + Format). Komplexe mehrstufige Aufgaben benötigen alle sieben. Beginnen Sie mit dem Minimum und fügen Sie nur das hinzu, was die Aufgabe erfordert.'
            }
          ],
        },

        pqConsensusTest: {
          title: 'PromptQuorum Konsenstest: Auswirkungen der Prompt-Struktur',
          content: [
            'PromptQuorum entsendete denselben unstrukturierten Prompt ("fassen Sie diesen Text zusammen") an GPT-5.5, Claude Opus 4.8 und Gemini 3.5 Pro. Die Ergebnisse unterschieden sich in Länge, Detail und Struktur auf allen drei Modellen. Als dieselbe Aufgabe mit den fünf Bausteinen oben umgeschrieben wurde, erzeugten alle drei Modelle konsistente, formatgerechte Antworten beim ersten Versuch.',
            'Dieser Konsenseffekt — bei dem strukturierte Prompts identisches Verhalten über verschiedene Modelle hinweg erzeugen — ist die Kernidee des Prompt Engineering. Die fünf Bausteine funktionieren, weil sie ausnutzen, wie alle großen LLMs Anweisungen identisch verarbeiten.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Wussten Sie? Der Konsenseffekt',
              text: '92,5 % Konsistenzverbesserung (37→40 von 40) ergibt sich allein aus der Struktur, nicht aus modellspezifischen Parameterungen. Das bedeutet, dass ein gut gestalteter Prompt über alle Anbieter hinweg funktioniert, ohne dass Änderungen erforderlich sind.'
            }
          ],
        },

        techniques: {
          title: 'Gängige Prompt-Engineering-Techniken',
          tableFormat: true,
          items: [
            '| Technik | Best For | Beispiel |',
            '|---|---|---|',
            '| Few-Shot-Prompting | Lehren durch Beispiele | Bereitstellung von 2–3 Eingabe/Ausgabe-Paaren |',
            '| Chain-of-Thought | Logik und mehrstufige Aufgaben | „Denken Sie Schritt für Schritt, bevor Sie antworten" |',
            '| Rollen-Prompting | Domänenspezifisches Fachwissen | „Agiere als Marketingtexter" |',
            '| Einschränkungsbasiert | Begrenzung des Output-Stils | „Schreiben Sie genau 150 Wörter, keine technische Fachsprache" |',
            '| Negatives Prompting | Vermeidung spezifischer Verhaltensweisen | „Verwenden Sie nicht Schlagworte oder Klischees" |',
            '| Selbstkonsistenz | Verbesserung der Zuverlässigkeit | „Generieren Sie 5 Antworten und geben Sie die häufigste zurück" |',
            '| Strukturierte Ausgabe | Maschinenlesbare Ergebnisse | „Antwort im JSON-Format mit diesen Feldern..." |',
            '| Prompt Chaining | Mehrstufige Workflows | Aufteilung einer komplexen Aufgabe in 3–4 sequenzielle Prompts |',
            '| Tree-of-Thought | Exploration mehrerer Pfade | „Berücksichtigung von 3 verschiedenen Ansätzen vor der Auswahl" |',
            '| RAG (Retrieval-Augmented Generation) | Grundlegung in Fakten | Anhängen von aktuellen Dokumenten vor dem Prompting |',
            '| Persona-basiert | Unterschiedliche Kommunikationsstile | „Erklären Sie mir wie einem 10-Jährigen" |',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Best Practice: Techniken kombinieren',
              text: 'Die meisten effektiven Prompts verwenden 2–3 Techniken zusammen. Beispiel: Rollen- (Persona) + Chain-of-Thought (Technik) + einschränkungsbasiert (Format). Beginnen Sie mit einer Technik, fügen Sie weitere hinzu, wenn die Ausgabe an Qualität mangelt.'
            }
          ],
        },

        frameworks: {
          title: 'Prompt-Engineering-Frameworks',
          content: [
            '**Ein Prompt-Engineering-Framework ist eine benannte Vorlage, die festlegt, welche Bausteine in welcher Reihenfolge enthalten sein sollen.** Frameworks verwandeln Prompt Engineering von einer Ad-hoc-Fähigkeit in einen wiederholbaren Prozess. Sie sind einfacher zu lehren, leichter im Team zu teilen und schneller anzuwenden unter Zeitdruck als ein Prompt von Grund auf neu zu erstellen.',
            'Die folgende Tabelle zeigt fünf weit verbreitete Prompt-Engineering-Frameworks und die Situationen, für die jedes am besten geeignet ist:',
          ],
          columns: ['Framework', 'Am besten für'],
          rows: [
            { 'Framework': 'Single-Line', 'Am besten für': 'Schnelle einzeilige Aufgaben, bei denen Geschwindigkeit wichtiger ist als Präzision' },
            { 'Framework': 'CRAFT', 'Am besten für': 'Marketing, Texterstellung und kreative Inhalte mit einer definierten Stimme' },
            { 'Framework': 'SPECS', 'Am besten für': 'Recherche, Analyse und strukturierte faktenbasierte Ausgaben' },
            { 'Framework': 'CO-STAR', 'Am besten für': 'Komplexe Aufgaben, die vollständigen Kontext, eine definierte Zielgruppe und schrittweise Anweisungen erfordern' },
            { 'Framework': 'RISEN', 'Am besten für': 'Anleitungsschreiben, Schulungsmaterial und Bildungsinhalte' },
          ],
          callouts: [
            {
              type: 'info',
              label: 'Merksatz: Framework vs. Technik',
              text: 'Ein Framework ist die Struktur (welche Blöcke auszufüllen sind und in welcher Reihenfolge). Eine Technik ist eine Methode zum Ausfüllen dieser Blöcke. Verwenden Sie ein Framework, um Ihren Prompt zu organisieren; verwenden Sie Techniken, um jeden Abschnitt zu verfeinern.'
            }
          ],
        },

        frameworksLinks: {
          content: [
            'Auf dieser Website sind zehn dokumentierte Frameworks verfügbar – jedes mit einem eigenen Leitfaden, der erklärt, wann man es verwenden sollte, wie der Prompt strukturiert wird, und durchgearbeitete Beispiele enthält. Beginne mit [Frameworks: Which Prompt Framework Should You Use?] für einen Entscheidungsleitfaden. Danach können [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework] und [Frameworks: RISEN Framework] einzeln erkundet werden.',
            'PromptQuorum enthält 9 eingebaute Frameworks und zwei benutzerdefinierte Framework-Slots. Jedes Framework kann direkt in der App angewendet werden, um den strukturierten Prompt mit dem Original zu vergleichen und eigene Vorlagen zu speichern – siehe [Frameworks: Build Your Own Prompt Framework].',
          ],
        },

        workflow: {
          title: 'Wo Prompt Engineering in den KI-Workflow passt',
          content: [
            'Prompt Engineering funktioniert nicht isoliert. Jeder Prompt existiert in einem breiteren technischen Kontext – das gewählte Modell, das verfügbare Token-Budget und die Architektur des KI-Systems beeinflussen alle, was ein Prompt erreichen kann.',
            'Dies sind die wichtigsten technischen Entscheidungen, die mit Prompt Engineering interagieren:',
          ],
          items: [
            '**Modellauswahl:** GPT-5.5, Claude Opus 4.8 und Gemini 3.5 Pro reagieren unterschiedlich auf denselben Prompt. Das richtige Modell für die Aufgabe zu wählen ist Teil des Engineering-Prozesses. Mistral AI (Europa) und Qwen (China) folgen denselben Prompting-Prinzipien, erfordern aber möglicherweise angepassste Ausgabeformat-Spezifikationen aufgrund von Unterschieden im Instruction-Following-Verhalten. Der gleiche strukturierte Prompt funktioniert weltweit in allen großen Modellfamilien → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**System- vs. Benutzer-Prompts:** Der System-Prompt legt persistente Anweisungen für eine gesamte Sitzung fest; der Benutzer-Prompt ist die aufgabenbezogene Eingabe. Diese Aufteilung richtig hinzubekommen bestimmt die Konsistenz im großen Maßstab → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Kontextfenster:** Jedes Modell hat ein maximales Token-Limit für Eingabe + Ausgabe zusammen. Lange Prompts reduzieren den verfügbaren Platz für die Modellantwort – und Modelle beginnen, frühere Inhalte zu ignorieren, wenn das Fenster voll wird → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Token-Limits und Kosten:** Präzise, prägnante Prompts verwenden weniger Token pro Aufruf, reduzieren Latenz und bleiben innerhalb von Rate Limits – und beeinflussen direkt die Kosten im großen Maßstab → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Multimodales Prompting:** Moderne LLMs wie GPT-5.5 und Gemini akzeptieren Bilder ebenso wie Text. Prompt-Engineering-Prinzipien gelten gleichermaßen für Bildeingaben → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Lokale vs. Cloud-Modelle:** Prompt-Engineering-Techniken gelten gleichermaßen für Cloud-APIs und lokal betriebene Modelle über Ollama oder LM Studio – obwohl lokale Modelle aufgrund kleinerer Kontextfenster und anderem Anweisungsverhalten möglicherweise angepasste Formatierungen erfordern. PromptQuorum unterstützt sowohl lokale Modelle (Ollama, LM Studio, vLLM) als auch Cloud-APIs (OpenAI, Anthropic, Google Gemini) über eine einzige Schnittstelle — Sie können zwischen Anbietern wechseln, ohne Prompts umzuschreiben, oder dieselben Prompts gleichzeitig auf mehreren Modellen vergleichen.',
          ],
        },

        canDo: {
          title: 'Grenzen des Prompt Engineerings: Was es kann und nicht kann',
          content: '**Was Prompt Engineering zuverlässig verbessert:**',
          items: [
            'Ausgabekonsistenz – derselbe strukturierte Prompt liefert ähnliche Ergebnisse über verschiedene Durchläufe und Teammitglieder hinweg',
            'Reduzierung von Halluzinationen – Erdung, Quelleneinschränkungen und explizites Eingrenzen reduzieren erfundene Fakten. PromptQuorums Quorum-Funktion führt Konsensprüfungen über Modellantworten durch, erkennt Halluzinationen und Widersprüche, indem sie vergleicht, wie verschiedene Modelle auf denselben strukturierten Prompt reagieren.',
            'Formatkontrolle – das Festlegen des Ausgabeformats bedeutet, dass Ergebnisse direkt verwendbar ankommen, nicht erst bearbeitbar',
            'Iterationsgeschwindigkeit – weniger Klärungsrunden, mehr Erfolge beim ersten Versuch',
            'Modellübergreifende Portabilität – ein gut strukturierter Prompt funktioniert auf GPT-5.5, Claude und Gemini ohne Umschreiben',
          ],
        },

        cannotDo: {
          content: '**Was andere Ansätze erfordert:**',
          items: [
            '**Zugriff auf private oder Echtzeit-Daten:** Wenn das Modell Dokumente, Datenbanken oder Live-Informationen benötigt, die nicht in einen Prompt passen – RAG verwenden → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Tiefe Domänenspezialisierung:** Wenn ein Modell zuverlässig einen spezifischen Wortschatz oder Stil über alle Sitzungen hinweg übernehmen soll – Fine-Tuning statt Prompts verwenden',
            '**Fehlendes Wissen:** Prompt Engineering kann einem Modell kein Wissen geben, auf das es nicht trainiert wurde. Wenn das Basismodell ein Thema nicht kennt, wird es kein Prompt lehren',
            '**Systematische Qualitätsbewertung:** Das Prüfen der KI-Ausgabequalität in großem Maßstab über Tausende von Durchläufen erfordert Evaluierungs-Pipelines und Werkzeuge, die über manuelles Prompting hinausgehen',
          ],
        },

        cannotDoNote: {
          content: 'Prompt Engineering ist der schnellste und zugänglichste Hebel zur Verbesserung der KI-Ausgabequalität – es erfordert keine Infrastrukturänderungen und kein Neu-Training. Für die Probleme, die es nicht lösen kann, weist es klar auf das richtige nächste Werkzeug hin.',
        },

        howToStart: {
          title: 'Wie man mit dem Erlernen von Prompt Engineering beginnt',
          content: 'Diese sechs Schritte führen einen intelligenten Anfänger auf dem kürzesten Weg durch das Material auf dieser Website von null zu produktiv:',
          numberedItems: [
            '**Die Grundlagen lesen.** Bevor man komplexe Prompts schreibt, sollte man verstehen, wie LLMs Text verarbeiten, was Token sind, was ein Kontextfenster bedeutet und warum Modelle halluzinieren. Der Abschnitt [Fundamentals] behandelt all dies in dedizierten Artikeln – beginne mit [Fundamentals: The 5 Building Blocks Every Prompt Needs] und [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Mit einzeiligen Prompts beginnen.** Einen klaren Satz schreiben, der die Aufgabe genau beschreibt. Beobachten, was das Modell zurückgibt, bevor man Struktur hinzufügt. Dies etabliert eine Basislinie – man muss wissen, was ein nackter Prompt produziert, bevor man ihn verbessern kann.',
            '**Ein Framework auf eine echte Aufgabe anwenden.** CRAFT für eine Schreibaufgabe oder CO-STAR für eine komplexe Anweisung wählen. Frameworks zwingen dazu, alle Elemente durchzudenken, die ein Prompt benötigt. Der Abschnitt [Frameworks] behandelt jedes Framework mit Beispielen → beginne mit [Frameworks: Which Prompt Framework Should You Use?].',
            '**Eine Technik nach der anderen hinzufügen.** Few-Shot-Beispiele für eine Aufgabe ausprobieren. Eine Einschränkung zu einer anderen hinzufügen. Chain-of-Thought bei einem Denkproblem testen. Änderungen zu isolieren ermöglicht zu sehen, welche Technik die Ausgabe tatsächlich verbessert hat. Der Abschnitt [Techniques] behandelt jede Technik ausführlich.',
            '**Über mehrere Modelle testen.** Derselbe Prompt liefert unterschiedliche Ergebnisse auf GPT-5.5, Claude und Gemini. PromptQuorum verwenden, um einen Prompt gleichzeitig an mehrere Modelle zu senden und Antworten nebeneinander zu vergleichen – das ist der schnellste Weg zu finden, welches Modell und welche Formulierung für eine bestimmte Aufgabe am besten funktioniert.',
            '**Eine Prompt-Bibliothek für die eigenen Anwendungsfälle aufbauen.** Prompts, die funktionieren, speichern. Sie im Laufe der Zeit verfeinern. Eine Bibliothek getesteter Prompts für die eigene spezifische Domäne ist ein dauerhaftes Gut. Siehe [Use Topics: Build a Prompt Library That Saves Hours] für eine Anleitung zur Strukturierung und Pflege einer solchen.',
          ],
        },

        relatedReading: {
          title: 'Weiterführende Ressourcen',
          items: [
            '[Grundlagen: KI-Halluzinationen — Warum KI Dinge erfindet] — ein Kernverständnis der LLM-Grenzen',
            '[Techniken: Chain-of-Thought Prompting — LLMs zeigen lassen, wie sie denken] — die Schritt-für-Schritt-Technik, die die Genauigkeit verbessert',
            '[Frameworks: CO-STAR Framework] — eine strukturierte Vorlage, die die Grundlagen in einer bewährten Reihenfolge organisiert',
            '[Mit KI unterrichten: Prompt-Strategien für Lehrende](/de/prompt-engineering/teaching-with-ai)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Prompt-Engineering-Grundlagen',
          faqs: [
            {
              q: 'Ist Prompt Engineering bei neueren KI-Modellen noch nützlich?',
              a: 'Ja – und sogar mehr als zuvor. Leistungsfähigere Modelle können präzisen Anweisungen besser folgen, was bedeutet, dass der Nutzen gut strukturierter Prompts steigt, wenn Modelle sich verbessern. Selbst heute liefern die leistungsfähigsten Modelle inkonsistente oder vage Ausgaben bei vagen Eingaben. Strukturierte Prompts bleiben der zuverlässigste Weg, beim ersten Versuch professionelle Ausgaben zu erzielen.',
            },
            {
              q: 'Muss ich programmieren können, um Prompt Engineering zu erlernen?',
              a: 'Nein. Prompt Engineering ist in erster Linie eine Sprach- und Logikfähigkeit – die Fähigkeit, eine Aufgabe präzise zu formulieren, Fehlertypen vorauszusehen und zu spezifizieren, was man möchte. Programmierkenntnisse helfen beim Aufbau automatisierter Pipelines oder beim Parsen strukturierter Ausgaben, aber der überwiegende Teil der Prompt-Engineering-Arbeit erfordert keinerlei Programmierkenntnisse.',
            },
            {
              q: 'Was ist der Unterschied zwischen Prompt Engineering und traditioneller Programmierung?',
              a: 'Traditionelle Programmierung gibt einem Computer deterministische Anweisungen, die bei gleicher Eingabe immer dieselbe Ausgabe produzieren. Prompt Engineering gibt einem probabilistischen Modell strukturierte Anleitungen, die die Wahrscheinlichkeit einer nützlichen Ausgabe erhöhen – aber sie nicht garantieren können. Die Fähigkeit liegt darin, Prompts zu gestalten, die trotz dieser zugrundeliegenden Unsicherheit zuverlässige Ergebnisse liefern.',
            },
            {
              q: 'Was ist der Unterschied zwischen einer Prompt-Engineering-Technik und einem Framework?',
              a: 'Eine Technik ist ein spezifisches Muster, das angewendet wird, um eine bestimmte Ausgabequalität zu erreichen – Chain-of-Thought-Prompting verbessert zum Beispiel die Denk-Genauigkeit. Ein Framework ist eine strukturelle Vorlage, die alle Elemente eines Prompts organisiert – CO-STAR definiert zum Beispiel die Reihenfolge, in der Kontext, Ziel, Stil, Ton, Zielgruppe und Antwortformat anzugeben sind. Frameworks helfen beim Aufbau des Prompts; Techniken helfen dabei zu verfeinern, was das Modell damit macht.',
            },
            {
              q: 'Wird Prompt Engineering langfristig noch relevant sein?',
              a: 'Alle verfügbaren Belege deuten auf Ja hin. LLMs sind noch nicht in der Lage, zuverlässig professionelle Ausgaben aus unstrukturierter natürlicher Sprache allein zu produzieren. Selbst wenn KI-Oberflächen konversationeller werden, bleiben die zugrunde liegenden Prinzipien guter Prompts – klares Ziel, relevanter Kontext, explizite Einschränkungen, festgelegtes Ausgabeformat – der Unterschied zwischen einer nützlichen und einer nutzlosen KI-Antwort.',
            },
            {
              q: 'Was ist der Unterschied zwischen Prompt Engineering und Fine-Tuning?',
              a: 'Prompt Engineering gestaltet die Ausgabe eines bestehenden Modells, ohne das Modell selbst zu verändern – es funktioniert zur Inferenzzeit und erfordert kein Training. Fine-Tuning modifiziert die Gewichte eines Modells, indem es auf einem neuen Datensatz trainiert wird, und verändert sein Standardverhalten dauerhaft. Prompt Engineering ist schneller, günstiger und erfordert keine ML-Expertise; Fine-Tuning ist besser, wenn man eine tiefe, konsistente Spezialisierung benötigt, die Prompts allein nicht erreichen können.',
            },
            {
              q: 'Wie verhält sich Prompt Engineering zu einem Werkzeug wie PromptQuorum?',
              a: 'PromptQuorum ist ein Multi-Modell-KI-Dispatch-Werkzeug, das auf Prompt-Engineering-Prinzipien aufgebaut ist. Es enthält 9 eingebaute Prompt-Frameworks, einen KI-gestützten Prompt-Optimierer und die Möglichkeit, einen Prompt gleichzeitig an mehrere Modelle zu senden – GPT-5.5, Claude, Gemini und lokale Modelle – und Ergebnisse nebeneinander zu vergleichen. Es macht Prompt Engineering wiederholbar und beseitigt den Aufwand, Modelle manuell zu testen.',
            },
            {
              q: 'Ist Prompt Engineering noch relevant, jetzt wo KI-Agenten existieren?',
              a: 'Ja. KI-Agenten – autonome Systeme, die mehrstufige Aufgaben planen und ausführen – basieren auf Prompt Engineering. Jeder Agent hat einen System-Prompt, der seine Rolle, Einschränkungen und verfügbaren Werkzeuge definiert. Jeder Tool-Aufruf wird durch strukturierte Anweisungen ausgelöst. Prompt Engineering ist die Grundlage, die Agenten kontrollierbar und vorhersehbar macht. Je verbreiteter Agenten werden, desto wichtiger wird diese Fähigkeit.',
            },
            {
              q: 'Wie unterscheidet sich ein Nutzer-Prompt von einem System-Prompt?',
              a: 'Ein System-Prompt ist ein dauerhafter Anweisungssatz, der für die gesamte Sitzung gilt – er definiert die Rolle des Modells, seine Einschränkungen und das Standardverhalten, bevor der Nutzer etwas sagt. Ein Nutzer-Prompt ist die anforderungsbezogene Eingabe – die spezifische Aufgabe oder Frage für diese Interaktion. In den meisten KI-Produkten schreiben Entwickler den System-Prompt; Endnutzer schreiben den Nutzer-Prompt. Beide profitieren von Prompt Engineering, erfüllen aber unterschiedliche Funktionen.',
            },
          ],
        },

        sources: {
          title: 'Quellen & Weiterführende Ressourcen',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — das grundlegende Paper, das zeigt, dass schrittweise Begründung Halluzinationen bei Mathe- und Logikaufgaben reduziert.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — empirische Studie von Halluzinationsraten und Mechanismen in neuronalen Textgenerierung.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — Anthropics Ansatz zur Reduzierung schädlicher Ausgaben und Halluzinationen durch prinzipiengestützte Schulung.',
          ],
        },
      },
    },
    es: {
      theme: 'Fundamentals',
      title: '¿Qué es el Prompt Engineering? — Guía PromptQuorum',
      seoTitle: '¿Qué es el prompt engineering en 2026? Guía básica',
      intro: 'Prompt engineering: diseñar entradas de texto para obtener respuestas fiables y precisas de LLMs como GPT-5.5, Claude y Gemini. Aprende las técnicas esenciales, los frameworks y por qué importa para la calidad del output de IA.',
      metaDescription: 'Prompt engineering en 2026: diseña entradas de texto para resultados fiables. Aprende role prompting, chain-of-thought y few-shot para ChatGPT y Claude.',
      publishDate: '2026-03-01',
      readTime: '10 min de lectura',
      primaryTerm: 'Prompt Engineering',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/es/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'es',
        headline: '¿Qué es el Prompt Engineering?',
        description: 'Prompt engineering: diseñar entradas de texto para obtener respuestas fiables y precisas de LLMs. Aprende las técnicas esenciales, los frameworks y por qué importa.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['prompt engineering', 'prompting de IA', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Frameworks de Prompt Engineering',
        inLanguage: 'es',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/es/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: 'Tareas rápidas de una sola línea donde la velocidad importa más que la precisión.' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: 'Marketing, redacción y contenido creativo con una voz definida.' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: 'Investigación, análisis y outputs estructurados basados en hechos.' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: 'Tareas complejas que necesitan contexto completo, audiencia definida e instrucciones paso a paso.' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: 'Escritura instructiva, material de formación y contenido educativo.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          { '@type': 'Question', name: '¿El prompt engineering sigue siendo útil con los nuevos modelos de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, y cada vez más. Los modelos más capaces siguen instrucciones precisas con mayor eficacia, lo que significa que el retorno de prompts bien estructurados aumenta a medida que los modelos mejoran. Incluso hoy, los modelos más capaces producen outputs inconsistentes o vagos cuando se les da input vago. Los prompts estructurados siguen siendo la forma más fiable de obtener output de calidad profesional en el primer intento.' } },
          { '@type': 'Question', name: '¿Necesito saber programar para aprender prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'No. El prompt engineering es principalmente una habilidad de lenguaje y lógica: la capacidad de enunciar una tarea con precisión, anticipar modos de fallo y especificar lo que quieres. La programación ayuda al construir pipelines automatizados o procesar outputs estructurados, pero la gran mayoría del trabajo de prompt engineering no requiere ningún conocimiento de código.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre prompt engineering y programación tradicional?', acceptedAnswer: { '@type': 'Answer', text: 'La programación tradicional da a un ordenador instrucciones deterministas que producen el mismo output cada vez, dado el mismo input. El prompt engineering da a un modelo probabilístico una guía estructurada que aumenta la probabilidad de un output útil, pero no puede garantizarlo. La habilidad está en diseñar prompts que produzcan resultados fiables a pesar de esa incertidumbre subyacente.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre una técnica de prompt engineering y un framework?', acceptedAnswer: { '@type': 'Answer', text: 'Una técnica es un patrón específico aplicado para lograr una calidad de output determinada — por ejemplo, el prompting Chain-of-Thought mejora la precisión del razonamiento. Un framework es una plantilla estructural que organiza todos los elementos de un prompt — por ejemplo, CO-STAR define el orden en que se especifican el contexto, el objetivo, el estilo, el tono, la audiencia y el formato de respuesta. Los frameworks ayudan a construir el prompt; las técnicas ayudan a refinar lo que el modelo hace con él.' } },
          { '@type': 'Question', name: '¿El prompt engineering seguirá siendo relevante a largo plazo?', acceptedAnswer: { '@type': 'Answer', text: 'Todas las evidencias disponibles apuntan a que sí. Los LLMs aún no son capaces de producir de forma fiable outputs de calidad profesional solo a partir de lenguaje natural no estructurado. Incluso a medida que las interfaces de IA se vuelven más conversacionales, los principios subyacentes de los buenos prompts — objetivo claro, contexto relevante, restricciones explícitas, formato de output especificado — siguen siendo la diferencia entre una respuesta de IA útil e inútil.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre prompt engineering y fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'El prompt engineering da forma al output de un modelo existente sin cambiar el modelo en sí — funciona en el momento de la inferencia y no requiere entrenamiento. El fine-tuning modifica los pesos de un modelo entrenándolo en un nuevo conjunto de datos, cambiando su comportamiento predeterminado de forma permanente. El prompt engineering es más rápido, más barato y no requiere experiencia en ML; el fine-tuning es mejor cuando necesitas una especialización profunda y consistente que los prompts solos no pueden lograr.' } },
          { '@type': 'Question', name: '¿Cómo se relaciona el prompt engineering con una herramienta como PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum es una herramienta de dispatch multi-modelo construida en torno a los principios del prompt engineering. Incluye 9 frameworks de prompts integrados, un optimizador de prompts con IA y la capacidad de enviar un prompt a varios modelos simultáneamente — GPT-5.5, Claude, Gemini y modelos locales — y comparar los resultados en paralelo.' } },
          { '@type': 'Question', name: '¿El prompt engineering sigue siendo relevante ahora que existen los agentes de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los agentes de IA — sistemas autónomos que planifican y ejecutan tareas de varios pasos — se construyen sobre el prompt engineering. Cada agente tiene un system prompt que define su rol, sus restricciones y sus herramientas disponibles. Cada llamada a herramienta se activa mediante instrucciones estructuradas. El prompt engineering es la base que hace a los agentes controlables y predecibles.' } },
          { '@type': 'Question', name: '¿En qué se diferencia un user prompt de un system prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Un system prompt es un conjunto de instrucciones persistente que se aplica a toda la sesión — define el rol del modelo, sus restricciones y su comportamiento predeterminado antes de que el usuario diga nada. Un user prompt es el input por solicitud — la tarea o pregunta específica para esa interacción. Ambos se benefician del prompt engineering, pero sirven funciones distintas y requieren enfoques de diseño diferentes.' } },
        ],
      },
      sections: {
        definition: {
          title: 'Prompt Engineering: Definición y principios fundamentales',
          content: [
            '**El prompt engineering es la práctica de diseñar y estructurar entradas de texto — llamadas prompts — para obtener outputs precisos, útiles y reproducibles de los grandes modelos de lenguaje (LLMs).** Se aplica a GPT-5.5, Claude, Gemini y modelos ejecutados localmente mediante Ollama o LM Studio. La diferencia entre el prompt engineering y "simplemente hacerle una pregunta a la IA" es la diferencia entre una solicitud vaga y una instrucción precisa con un objetivo definido, contexto y formato de output.',
            'Hoy en día, el prompt engineering es una disciplina estructurada con técnicas con nombres propios, frameworks reutilizables y resultados medibles. No se trata de engañar a los sistemas de IA ni de encontrar comandos ocultos — se trata de dar a un modelo probabilístico la señal más clara posible de lo que necesitas. Un prompt bien diseñado produce consistentemente un output utilizable en el primer intento.',
            'Los fundamentos del prompt engineering comienzan por entender que los LLMs son motores de completado de patrones. Generan output basándose en la probabilidad estadística de lo que debería seguir a tu input. Cuanto más precisamente especifiques la tarea, el contexto, las restricciones y el formato deseado, menos tiene que adivinar el modelo — y mejor es el resultado.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Funciona con modelos locales',
              text: 'Todas las técnicas de esta guía funcionan con Ollama, LM Studio y otros [LLMs locales](https://www.promptquorum.com/local-llms). No se necesita API key.'
            }
          ],
        },

        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'Prompt engineering = diseñar inputs para obtener outputs fiables y precisos de LLMs',
            'Se aplica a todos los modelos principales: GPT-5.5, Claude, Gemini y modelos locales mediante Ollama o LM Studio',
            'Palancas clave: objetivo, contexto, ejemplos, restricciones, formato de output y rol',
            'Las técnicas de prompt engineering van desde zero-shot hasta Chain-of-Thought y RAG',
            'Los frameworks de prompt engineering (CRAFT, CO-STAR, SPECS, etc.) hacen los prompts reproducibles y enseñables',
            'Es la forma más rápida de mejorar la calidad del output de IA sin cambiar el modelo',
          ],
        },

        whyMatters: {
          title: 'Por qué importa el prompt engineering',
          content: [
            'El mismo modelo de IA produce outputs drásticamente diferentes dependiendo de cómo se formule una pregunta. Un prompt vago devuelve una respuesta vaga. Un prompt estructurado con un objetivo claro, contexto relevante, restricciones explícitas y un formato de output especificado produce un resultado que no requiere edición.',
            'Estas son las ventajas clave de aplicar los fundamentos del prompt engineering de forma consistente:',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Los prompts vagos son costosos',
              text: 'Cada output fallido en el primer intento consume tokens y requiere reintentos. Un prompt estructurado elimina las aclaraciones de ida y vuelta y reduce los costes de API desperdiciados en un 40–60% de media.'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**Fiabilidad:** Los prompts estructurados producen outputs consistentes a lo largo de varias ejecuciones y modelos — el mismo prompt funciona el lunes y el viernes',
            '**Mayor calidad de output:** Las instrucciones explícitas reducen la ambigüedad del modelo y eliminan las suposiciones sobre la intención',
            '**Velocidad:** Los prompts bien formulados eliminan los ciclos de aclaración de ida y vuelta → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Control de costes:** Los prompts precisos usan menos tokens por tarea y reducen los reintentos → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Reducción de alucinaciones:** La fundamentación clara, las restricciones de fuentes y las preguntas acotadas reducen los hechos fabricados → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Compatibilidad multi-modelo:** El mismo prompt bien estructurado funciona en GPT-5.5, Claude, Gemini y LLMs locales — reduciendo la dependencia del proveedor',
            '**Reproducibilidad:** Un prompt bien diseñado es un activo reutilizable. Los equipos pueden compartir, versionar y mejorar los prompts con el tiempo',
          ],
        },

        buildingBlocks: {
          title: 'Bloques de construcción fundamentales de un prompt',
          content: [
            'Todo prompt efectivo se ensambla a partir de alguna combinación de estos siete elementos. Rara vez se necesitan los siete a la vez — la habilidad está en saber cuáles incluir para una tarea determinada.',
            'Un análisis de 2024 de técnicas de prompting (Schulhoff et al., "The Prompt Report", arXiv:2406.06608) catalogó más de 58 técnicas discretas usadas en sistemas de IA en producción — todas son variaciones estructuradas de estos siete bloques de construcción aplicados en diferentes combinaciones.',
            'Para un desglose más profundo con ejemplos de cada elemento en acción, consulta [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
          ],
          items: [
            '**Objetivo:** La tarea o pregunta, enunciada con precisión — lo que quieres que el modelo produzca',
            '**Contexto:** Información de fondo que el modelo necesita para responder correctamente — quién pregunta, para qué es el output, qué restricciones aplican',
            '**Instrucciones:** Pasos o reglas específicos que el modelo debe seguir — "listar en orden de importancia", "escribir en segunda persona", "usar solo los datos proporcionados"',
            '**Ejemplos:** 1–3 pares de input/output de muestra que demuestran el formato o estilo exacto que quieres (few-shot prompting)',
            '**Restricciones:** Límites explícitos sobre lo que el modelo NO debe hacer — temas prohibidos, frases vetadas, límites de longitud, restricciones de estilo',
            '**Formato de output:** Cómo debe estructurarse la respuesta — lista con viñetas, objeto JSON, tabla Markdown, pasos numerados, párrafo simple',
            '**Rol / persona:** Una experiencia o perspectiva definida que el modelo debe adoptar — "Actúa como un analista de datos senior" o "Eres un escritor técnico conciso"',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'No necesitas los siete',
              text: 'Las tareas simples a menudo solo necesitan 2–3 bloques de construcción (objetivo + contexto + formato). El razonamiento complejo de varios pasos necesita los siete. Comienza con el mínimo y añade solo lo que la tarea requiere.'
            }
          ],
        },

        pqConsensusTest: {
          title: 'Test de consenso PromptQuorum: Impacto de la estructura del prompt',
          content: [
            '**Probado en PromptQuorum — 40 prompts de resumen enviados a GPT-5.5, Claude Opus 4.8 y Gemini 3.5 Pro:** Los prompts no estructurados produjeron longitud y estructura inconsistentes en los tres modelos en 37 de 40 casos. Tras reescribir con los cinco bloques de construcción anteriores, los tres modelos produjeron respuestas consistentes y con el formato correcto en el primer intento en 40 de 40 casos.',
            'Este efecto de consenso — donde los prompts estructurados producen un comportamiento idéntico en diferentes modelos — es la idea central del prompt engineering. Los cinco bloques de construcción funcionan porque explotan cómo todos los principales LLMs procesan las instrucciones de forma idéntica.',
          ],
          callouts: [
            {
              type: 'info',
              label: '¿Sabías? El efecto de consenso',
              text: 'El 92.5% de mejora en consistencia (37→40 de 40) proviene solo de la estructura, no de ajustar parámetros específicos del modelo. Esto significa que un prompt bien diseñado funciona en todos los proveedores sin modificación.'
            }
          ],
        },

        promptExample: {
          title: 'Estructura del prompt en la práctica',
          content: [
            '[Prompt malo] "Resume este artículo."',
            '[Prompt bueno] "Eres un analista de investigación. Resume este artículo en 3 puntos. Céntrate en los hallazgos, no en la metodología. Cada punto ≤ 25 palabras."',
          ],
        },

        techniques: {
          title: 'Técnicas comunes de prompt engineering',
          tableFormat: true,
          items: [
            '| Técnica | Ideal para | Ejemplo |',
            '|---|---|---|',
            '| Few-shot prompting | Enseñar mediante ejemplos | Proporcionar 2–3 pares de input/output de muestra |',
            '| Chain-of-thought | Lógica y tareas de varios pasos | "Piensa paso a paso antes de responder" |',
            '| Role-prompting | Experiencia específica de dominio | "Actúa como un copywriter de marketing" |',
            '| Constraint-based | Limitar el estilo de output | "Escribe en exactamente 150 palabras, sin jerga técnica" |',
            '| Negative prompting | Evitar comportamientos específicos | "No uses buzzwords ni clichés" |',
            '| Self-consistency | Mejorar la fiabilidad | "Genera 5 respuestas y devuelve la más frecuente" |',
            '| Structured output | Resultados legibles por máquina | "Responde en formato JSON con estos campos..." |',
            '| Prompt chaining | Flujos de trabajo de varios pasos | Dividir una tarea compleja en 3–4 prompts secuenciales |',
            '| Tree-of-thought | Explorar múltiples caminos | "Considera 3 enfoques diferentes antes de elegir" |',
            '| RAG (Retrieval-Augmented Generation) | Fundamentar en hechos | Adjuntar documentos recientes antes de hacer el prompt |',
            '| Persona-based | Diferentes estilos de comunicación | "Explica como si tuviera 10 años" |',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Buenas prácticas: Combinar técnicas',
              text: 'Los prompts más efectivos usan 2–3 técnicas juntas. Ejemplo: rol (persona) + chain-of-thought (técnica) + constraint-based (formato). Empieza con una técnica, añade otras si el output carece de calidad.'
            }
          ],
        },

        frameworks: {
          title: 'Frameworks de prompt engineering',
          content: [
            '**Un framework de prompt engineering es una plantilla con nombre que especifica qué bloques de construcción incluir y en qué orden.** Los frameworks convierten el prompt engineering de una habilidad ad hoc en un proceso reproducible. Son más fáciles de enseñar, más fáciles de compartir en un equipo y más rápidos de aplicar bajo presión de tiempo que construir un prompt desde cero.',
            'La tabla a continuación muestra cinco frameworks de prompt engineering ampliamente utilizados y las situaciones para las que cada uno es más adecuado:',
          ],
          columns: ['Framework', 'Ideal para'],
          rows: [
            { 'Framework': 'Single-Line', 'Ideal para': 'Tareas rápidas de una sola línea donde la velocidad importa más que la precisión' },
            { 'Framework': 'CRAFT', 'Ideal para': 'Marketing, redacción y contenido creativo con una voz definida' },
            { 'Framework': 'SPECS', 'Ideal para': 'Investigación, análisis y outputs estructurados basados en hechos' },
            { 'Framework': 'CO-STAR', 'Ideal para': 'Tareas complejas que necesitan contexto completo, audiencia definida e instrucciones paso a paso' },
            { 'Framework': 'RISEN', 'Ideal para': 'Escritura instructiva, material de formación y contenido educativo' },
          ],
          callouts: [
            {
              type: 'info',
              label: 'Punto clave: Framework vs técnica',
              text: 'Un framework es la estructura (qué bloques rellenar y en qué orden). Una técnica es un método para rellenar esos bloques. Usa un framework para organizar tu prompt; usa técnicas para refinar cada sección.'
            }
          ],
        },

        frameworksLinks: {
          content: [
            'Este sitio documenta diez frameworks — cada uno con su propia guía que cubre cuándo usarlo, cómo estructurar el prompt y ejemplos prácticos. Empieza con [Frameworks: Which Prompt Framework Should You Use?] para una guía de decisión. Luego explora [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework] y [Frameworks: RISEN Framework] individualmente.',
            'PromptQuorum incluye 9 frameworks integrados y dos slots de frameworks personalizados. Puedes aplicar cualquier framework directamente dentro de la app, comparar el prompt estructurado con tu original y guardar tus propias plantillas — consulta [Frameworks: Build Your Own Prompt Framework].',
          ],
        },

        workflow: {
          title: 'Dónde encaja el prompt engineering en el flujo de trabajo de IA',
          content: [
            'El prompt engineering no opera de forma aislada. Cada prompt existe dentro de un contexto técnico más amplio — el modelo que eliges, el presupuesto de tokens que tienes y la arquitectura de tu sistema de IA afectan a lo que un prompt puede lograr.',
            'Estas son las decisiones técnicas clave que interactúan con el prompt engineering:',
          ],
          items: [
            '**Selección de modelo:** GPT-5.5, Claude Opus 4.8 y Gemini 3.5 Pro responden de forma diferente al mismo prompt. Elegir el modelo correcto para la tarea forma parte del proceso de ingeniería. Mistral AI (Europa) y Qwen (China) siguen los mismos principios de prompting pero pueden requerir especificaciones de formato de output ajustadas debido a diferencias en el comportamiento de seguimiento de instrucciones. El mismo prompt estructurado funciona globalmente en todas las principales familias de modelos → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**System prompts vs. user prompts:** El system prompt establece instrucciones persistentes para toda una sesión; el user prompt es el input por solicitud. Hacer bien esta división determina la consistencia a escala → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Context windows:** Cada modelo tiene un límite máximo de tokens para input + output combinado. Los prompts largos reducen el espacio disponible para la respuesta del modelo — y los modelos empiezan a ignorar el contenido anterior a medida que la ventana se llena → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Límites de tokens y costes:** Los prompts precisos y concisos usan menos tokens por llamada, reducen la latencia y se mantienen dentro de los límites de tasa — afectando directamente al coste a escala → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Prompting multimodal:** Los LLMs modernos como GPT-5.5 y Gemini aceptan imágenes además de texto. Los principios del prompt engineering se aplican igualmente a los inputs de imagen → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Modelos locales vs. en la nube:** Las técnicas de prompt engineering se aplican igualmente a las APIs en la nube y a los modelos ejecutados localmente mediante Ollama o LM Studio — aunque los modelos locales pueden requerir un formato ajustado debido a context windows más pequeñas y diferente comportamiento de seguimiento de instrucciones. PromptQuorum admite tanto modelos locales (Ollama, LM Studio, vLLM) como APIs en la nube (OpenAI, Anthropic, Google Gemini) a través de una sola interfaz — permitiéndote cambiar entre proveedores sin reescribir prompts, o comparar el mismo prompt en varios modelos simultáneamente.',
          ],
        },

        canDo: {
          title: 'Límites del prompt engineering: qué puede y no puede hacer',
          content: '**Lo que el prompt engineering mejora de forma fiable:**',
          items: [
            'Consistencia de output — el mismo prompt estructurado produce resultados similares en varias ejecuciones y entre miembros del equipo',
            'Reducción de alucinaciones — la fundamentación, las restricciones de fuentes y el acotamiento explícito reducen los hechos fabricados. La función Quorum de PromptQuorum ejecuta comprobaciones de consenso en las respuestas de los modelos, detectando alucinaciones y contradicciones comparando cómo diferentes modelos responden al mismo prompt estructurado.',
            'Control de formato — especificar el formato de output significa que los resultados llegan listos para usar, no listos para editar',
            'Velocidad de iteración — menos rondas de aclaración, más éxitos en el primer intento',
            'Portabilidad multi-modelo — un prompt bien estructurado funciona en GPT-5.5, Claude y Gemini sin reescribir',
          ],
        },

        cannotDo: {
          content: '**Lo que aún requiere otros enfoques:**',
          items: [
            '**Acceso a datos privados o en tiempo real:** Cuando el modelo necesita documentos, bases de datos o información en vivo que no cabe en un prompt — usa RAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Especialización profunda en un dominio:** Cuando un modelo necesita adoptar de forma fiable un vocabulario o estilo específico en todas las sesiones — usa fine-tuning, no prompts',
            '**Conocimiento faltante:** El prompt engineering no puede dar a un modelo conocimiento en el que no fue entrenado. Si el modelo base no conoce un tema, ningún prompt lo enseñará',
            '**Evaluación sistemática de calidad:** Verificar la calidad del output de IA a escala en miles de ejecuciones requiere pipelines de evaluación y herramientas más allá del prompting manual',
          ],
        },

        cannotDoNote: {
          content: 'El prompt engineering es la palanca más rápida y accesible para mejorar la calidad del output de IA — no requiere cambios de infraestructura ni reentrenamiento. Para los problemas que no puede resolver, señala claramente la siguiente herramienta correcta.',
        },

        howToStart: {
          title: 'Cómo empezar a aprender prompt engineering',
          content: 'Estos seis pasos llevan a un principiante inteligente de cero a productivo por el camino más corto a través del material de este sitio:',
          numberedItems: [
            '**Lee los Fundamentos.** Antes de escribir prompts complejos, entiende cómo los LLMs procesan texto, qué son los tokens, qué significa un context window y por qué los modelos alucinan. La sección [Fundamentals] cubre todo esto en artículos dedicados — empieza con [Fundamentals: The 5 Building Blocks Every Prompt Needs] y [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Empieza con prompts de una sola línea.** Escribe una oración clara que describa tu tarea con exactitud. Observa lo que el modelo devuelve antes de añadir estructura. Esto establece una base de referencia — necesitas saber qué produce un prompt básico antes de poder mejorarlo.',
            '**Aplica un framework a una tarea real.** Elige CRAFT para una tarea de escritura o CO-STAR para una instrucción compleja. Los frameworks te obligan a pensar en todos los elementos que necesita un prompt. La sección [Frameworks] cubre cada framework con ejemplos → empieza con [Frameworks: Which Prompt Framework Should You Use?].',
            '**Añade una técnica a la vez.** Prueba ejemplos few-shot en una tarea. Añade una restricción a otra. Prueba Chain-of-Thought en un problema de razonamiento. Aislar los cambios te permite ver qué técnica mejoró realmente el output. La sección [Techniques] cubre cada técnica en profundidad.',
            '**Prueba en varios modelos.** El mismo prompt produce resultados diferentes en GPT-5.5, Claude y Gemini. Usa PromptQuorum para enviar un prompt a varios modelos simultáneamente y comparar respuestas lado a lado — esta es la forma más rápida de encontrar qué modelo y formulación funciona mejor para una tarea específica.',
            '**Construye una biblioteca de prompts para tus casos de uso.** Guarda los prompts que funcionan. Refínalos con el tiempo. Una biblioteca de prompts probados para tu dominio específico es un activo duradero. Consulta [Use Topics: Build a Prompt Library That Saves Hours] para una guía sobre cómo estructurarla y mantenerla.',
          ],
        },

        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[Fundamentals: AI Hallucinations — Why AI Makes Things Up] — comprender una limitación fundamental de los LLMs',
            '[Techniques: Chain-of-Thought Prompting — Make AI Show Its Reasoning] — la técnica paso a paso que mejora la precisión',
            '[Frameworks: CO-STAR Framework] — una plantilla estructurada que organiza los fundamentos en una secuencia probada',
            '[AI Limitations: What LLMs Can\'t Do](/es/prompt-engineering/ai-limitations-what-llms-cant-do) — las ocho restricciones estructurales que comparten todos los LLMs y el workaround de ingeniería para cada una',
            '[Enseñar con IA: Estrategias de prompts para educadores](/es/prompt-engineering/teaching-with-ai)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: Fundamentos del prompt engineering',
          faqs: [
            {
              q: '¿El prompt engineering sigue siendo útil con los nuevos modelos de IA?',
              a: 'Sí, y cada vez más. Los modelos más capaces siguen instrucciones precisas con mayor eficacia, lo que significa que el retorno de prompts bien estructurados aumenta a medida que los modelos mejoran. Incluso hoy, los modelos más capaces producen outputs inconsistentes o vagos cuando se les da input vago. Los prompts estructurados siguen siendo la forma más fiable de obtener output de calidad profesional en el primer intento.',
            },
            {
              q: '¿Necesito saber programar para aprender prompt engineering?',
              a: 'No. El prompt engineering es principalmente una habilidad de lenguaje y lógica — la capacidad de enunciar una tarea con precisión, anticipar modos de fallo y especificar lo que quieres. La programación ayuda al construir pipelines automatizados o procesar outputs estructurados, pero la gran mayoría del trabajo de prompt engineering no requiere ningún conocimiento de código.',
            },
            {
              q: '¿Cuál es la diferencia entre prompt engineering y programación tradicional?',
              a: 'La programación tradicional da a un ordenador instrucciones deterministas que producen el mismo output cada vez, dado el mismo input. El prompt engineering da a un modelo probabilístico una guía estructurada que aumenta la probabilidad de un output útil — pero no puede garantizarlo. La habilidad está en diseñar prompts que produzcan resultados fiables a pesar de esa incertidumbre subyacente.',
            },
            {
              q: '¿Cuál es la diferencia entre una técnica de prompt engineering y un framework?',
              a: 'Una técnica es un patrón específico aplicado para lograr una calidad de output determinada — por ejemplo, el prompting Chain-of-Thought mejora la precisión del razonamiento. Un framework es una plantilla estructural que organiza todos los elementos de un prompt — por ejemplo, CO-STAR define el orden en que se especifican el contexto, el objetivo, el estilo, el tono, la audiencia y el formato de respuesta. Los frameworks ayudan a construir el prompt; las técnicas ayudan a refinar lo que el modelo hace con él.',
            },
            {
              q: '¿El prompt engineering seguirá siendo relevante a largo plazo?',
              a: 'Todas las evidencias disponibles apuntan a que sí. Los LLMs aún no son capaces de producir de forma fiable outputs de calidad profesional solo a partir de lenguaje natural no estructurado. Incluso a medida que las interfaces de IA se vuelven más conversacionales, los principios subyacentes de los buenos prompts — objetivo claro, contexto relevante, restricciones explícitas, formato de output especificado — siguen siendo la diferencia entre una respuesta de IA útil e inútil.',
            },
            {
              q: '¿Cuál es la diferencia entre prompt engineering y fine-tuning?',
              a: 'El prompt engineering da forma al output de un modelo existente sin cambiar el modelo en sí — funciona en el momento de la inferencia y no requiere entrenamiento. El fine-tuning modifica los pesos de un modelo entrenándolo en un nuevo conjunto de datos, cambiando su comportamiento predeterminado de forma permanente. El prompt engineering es más rápido, más barato y no requiere experiencia en ML; el fine-tuning es mejor cuando necesitas una especialización profunda y consistente que los prompts solos no pueden lograr.',
            },
            {
              q: '¿Cómo se relaciona el prompt engineering con una herramienta como PromptQuorum?',
              a: 'PromptQuorum es una herramienta de dispatch multi-modelo construida en torno a los principios del prompt engineering. Incluye 9 frameworks de prompts integrados, un optimizador de prompts con IA y la capacidad de enviar un prompt a varios modelos simultáneamente — GPT-5.5, Claude, Gemini y modelos locales — y comparar los resultados en paralelo. Hace que el prompt engineering sea reproducible y elimina la fricción de probar modelos manualmente.',
            },
            {
              q: '¿El prompt engineering sigue siendo relevante ahora que existen los agentes de IA?',
              a: 'Sí. Los agentes de IA — sistemas autónomos que planifican y ejecutan tareas de varios pasos — se construyen sobre el prompt engineering. Cada agente tiene un system prompt que define su rol, sus restricciones y sus herramientas disponibles. Cada llamada a herramienta se activa mediante instrucciones estructuradas. El prompt engineering es la base que hace a los agentes controlables y predecibles. A medida que los agentes se vuelven más comunes, la habilidad se vuelve más importante, no menos.',
            },
            {
              q: '¿En qué se diferencia un user prompt de un system prompt?',
              a: 'Un system prompt es un conjunto de instrucciones persistente que se aplica a toda la sesión — define el rol del modelo, sus restricciones y su comportamiento predeterminado antes de que el usuario diga nada. Un user prompt es el input por solicitud — la tarea o pregunta específica para esa interacción. En la mayoría de los productos de IA, los desarrolladores escriben el system prompt; los usuarios finales escriben el user prompt. Ambos se benefician del prompt engineering, pero sirven funciones distintas y requieren enfoques de diseño diferentes. → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            },
          ],
        },

        sources: {
          title: 'Fuentes y lecturas adicionales',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — el artículo fundacional que demuestra que el razonamiento paso a paso reduce las alucinaciones en tareas de matemáticas y lógica.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — estudio empírico de las tasas y mecanismos de alucinación en la generación de texto neural.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — el enfoque de Anthropic para reducir outputs dañinos y alucinaciones mediante entrenamiento basado en principios.',
          ],
        },

      },
    },
    ar: {
      theme: 'Fundamentals',
      title: 'ما هي هندسة الطلبات؟ — دليل ⁨PromptQuorum⁩',
      seoTitle: 'هندسة الطلبات ⁨2026⁩: دليل المبتدئين الشامل',
      intro: 'هندسة الطلبات: تصميم المدخلات النصية للحصول على مخرجات موثوقة ودقيقة من نماذج LLM كـ GPT-5.5 وClaude وGemini. تعلّم التقنيات الأساسية والأطر ولماذا تهم لجودة مخرجات الذكاء الاصطناعي.',
      metaDescription: 'هندسة الطلبات: صمّم المدخلات النصية للحصول على نتائج موثوقة من ⁨LLMs⁩. تعلّم ⁨role prompting⁩ و⁨chain-of-thought⁩ و⁨few-shot⁩ لـ ⁨ChatGPT⁩ و⁨Claude⁩ و⁨Ollama⁩.',
      publishDate: '2026-03-01',
      readTime: '١٠ دقائق للقراءة',
      primaryTerm: 'هندسة الطلبات',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'ar',
        headline: 'ما هي هندسة الطلبات؟',
        description: 'هندسة الطلبات: تصميم المدخلات النصية للحصول على مخرجات موثوقة ودقيقة من نماذج LLM. تعلّم التقنيات الأساسية والأطر ولماذا تهم.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['هندسة الطلبات', 'استدعاء الذكاء الاصطناعي', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'أطر هندسة الطلبات',
        inLanguage: 'ar',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/ar/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: 'المهام السريعة من سطر واحد حيث السرعة أهم من الدقة.' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: 'التسويق والكتابة والمحتوى الإبداعي بصوت محدد.' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: 'البحث والتحليل والمخرجات المنظمة المبنية على الحقائق.' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: 'المهام المعقدة التي تحتاج سياقًا كاملًا وجمهورًا محددًا وتعليمات خطوة بخطوة.' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: 'الكتابة التعليمية ومواد التدريب والمحتوى التعليمي.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          { '@type': 'Question', name: 'هل لا تزال هندسة الطلبات مفيدة مع نماذج الذكاء الاصطناعي الجديدة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، وبشكل متزايد. النماذج الأكثر قدرة تتبع التعليمات الدقيقة بفعالية أكبر، مما يعني أن عائد الطلبات المنظمة جيدًا يزداد مع تحسّن النماذج. حتى اليوم، تُنتج النماذج الأكثر قدرة مخرجات غير متسقة أو مبهمة عند إعطائها مدخلات مبهمة. الطلبات المنظمة لا تزال الطريقة الأكثر موثوقية للحصول على مخرجات بجودة احترافية في المحاولة الأولى.' } },
          { '@type': 'Question', name: 'هل أحتاج إلى البرمجة لتعلّم هندسة الطلبات؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. هندسة الطلبات هي في الأساس مهارة لغوية ومنطقية — القدرة على صياغة مهمة بدقة، وتوقع أوجه الفشل، وتحديد ما تريد. البرمجة مفيدة عند بناء أنابيب آلية أو معالجة المخرجات المنظمة، لكن الغالبية العظمى من عمل هندسة الطلبات لا تتطلب أي معرفة بالكود.' } },
          { '@type': 'Question', name: 'ما الفرق بين هندسة الطلبات والبرمجة التقليدية؟', acceptedAnswer: { '@type': 'Answer', text: 'البرمجة التقليدية تعطي الحاسوب تعليمات حتمية تُنتج نفس المخرجات في كل مرة لنفس المدخلات. هندسة الطلبات تعطي نموذجًا احتماليًا توجيهًا منظمًا يزيد احتمالية الحصول على مخرجات مفيدة — لكنها لا تستطيع ضمانها. المهارة تكمن في تصميم طلبات تُنتج نتائج موثوقة رغم تلك الحالة من عدم اليقين الكامنة.' } },
          { '@type': 'Question', name: 'ما الفرق بين تقنية هندسة الطلبات وإطار العمل؟', acceptedAnswer: { '@type': 'Answer', text: 'التقنية هي نمط محدد يُطبَّق لتحقيق جودة معينة في المخرجات — مثلًا، استدعاء Chain-of-Thought يحسّن دقة الاستدلال. الإطار هو قالب هيكلي ينظّم جميع عناصر الطلب — مثلًا، CO-STAR يحدد الترتيب الذي يُحدَّد فيه السياق والهدف والأسلوب والنبرة والجمهور وتنسيق الإجابة. الأطر تساعد في بناء الطلب؛ التقنيات تساعد في تنقية ما يفعله النموذج به.' } },
          { '@type': 'Question', name: 'هل ستظل هندسة الطلبات ذات صلة على المدى البعيد؟', acceptedAnswer: { '@type': 'Answer', text: 'جميع الأدلة المتاحة تشير إلى نعم. نماذج LLM لا تزال غير قادرة على إنتاج مخرجات بجودة احترافية بشكل موثوق من اللغة الطبيعية غير المنظمة وحدها. حتى مع أصبحت واجهات الذكاء الاصطناعي أكثر تحادثية، تظل المبادئ الأساسية للطلبات الجيدة — هدف واضح، وسياق ذو صلة، وقيود صريحة، وتنسيق مخرجات محدد — هي الفارق بين إجابة ذكاء اصطناعي مفيدة وغير مفيدة.' } },
          { '@type': 'Question', name: 'ما الفرق بين هندسة الطلبات والضبط الدقيق؟', acceptedAnswer: { '@type': 'Answer', text: 'هندسة الطلبات تُشكّل مخرجات نموذج موجود دون تغيير النموذج نفسه — تعمل في وقت الاستدلال ولا تتطلب تدريبًا. الضبط الدقيق يُعدّل أوزان النموذج بتدريبه على مجموعة بيانات جديدة، مما يغير سلوكه الافتراضي بشكل دائم. هندسة الطلبات أسرع وأرخص ولا تتطلب خبرة في تعلّم الآلة؛ الضبط الدقيق أفضل عندما تحتاج إلى تخصص عميق ومتسق لا يمكن تحقيقه بالطلبات وحدها.' } },
          { '@type': 'Question', name: 'كيف ترتبط هندسة الطلبات بأداة مثل PromptQuorum؟', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum هي أداة إرسال متعددة النماذج مبنية حول مبادئ هندسة الطلبات. تتضمن 9 أطر طلبات مدمجة ومحسّن طلبات بالذكاء الاصطناعي والقدرة على إرسال طلب إلى نماذج متعددة في آنٍ واحد — GPT-5.5 وClaude وGemini والنماذج المحلية — ومقارنة النتائج بالتوازي.' } },
          { '@type': 'Question', name: 'هل هندسة الطلبات لا تزال ذات صلة الآن بوجود وكلاء الذكاء الاصطناعي؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. وكلاء الذكاء الاصطناعي — الأنظمة المستقلة التي تخطط وتنفذ مهام متعددة الخطوات — مبنية على هندسة الطلبات. لكل وكيل طلب نظام يحدد دوره وقيوده وأدواته المتاحة. كل استدعاء أداة يُشغَّل بتعليمات منظمة. هندسة الطلبات هي الأساس الذي يجعل الوكلاء قابلين للتحكم والتنبؤ.' } },
          { '@type': 'Question', name: 'ما الفرق بين طلب المستخدم وطلب النظام؟', acceptedAnswer: { '@type': 'Answer', text: 'طلب النظام هو مجموعة تعليمات دائمة تنطبق على كامل الجلسة — تحدد دور النموذج وقيوده وسلوكه الافتراضي قبل أن يقول المستخدم أي شيء. طلب المستخدم هو المدخل لكل طلب — المهمة أو السؤال المحدد لتلك التفاعل. كلاهما يستفيد من هندسة الطلبات، لكنهما يخدمان وظائف مختلفة ويتطلبان مناهج تصميم مختلفة.' } },
        ],
      },
      sections: {
        definition: {
          title: 'هندسة الطلبات: التعريف والمبادئ الأساسية',
          content: [
            '**هندسة الطلبات هي ممارسة تصميم وبناء المدخلات النصية — المسماة طلبات — للحصول على مخرجات دقيقة ومفيدة وقابلة للتكرار من نماذج اللغة الكبيرة (LLMs).** تُطبَّق على GPT-5.5 وClaude وGemini والنماذج التي تعمل محليًا عبر Ollama أو LM Studio. الفرق بين هندسة الطلبات و"مجرد طرح سؤال على الذكاء الاصطناعي" هو الفرق بين طلب مبهم وتعليمة دقيقة مع هدف محدد وسياق وتنسيق مخرجات.',
            'اليوم، هندسة الطلبات هي تخصص منظم بتقنيات ذات أسماء محددة وأطر قابلة لإعادة الاستخدام ونتائج قابلة للقياس. لا يتعلق الأمر بخداع أنظمة الذكاء الاصطناعي أو إيجاد أوامر مخفية — بل يتعلق بإعطاء نموذج احتمالي الإشارة الأوضح الممكنة لما تحتاجه. الطلب المصمم جيدًا يُنتج بشكل متسق مخرجات قابلة للاستخدام في المحاولة الأولى.',
            'تبدأ أسس هندسة الطلبات بفهم أن نماذج LLM هي محركات لإكمال الأنماط. تُنتج المخرجات بناءً على الاحتمالية الإحصائية لما يجب أن يتبع مدخلاتك. كلما حددت المهمة والسياق والقيود والتنسيق المطلوب بدقة أكبر، كان على النموذج تخمين أقل — وكانت النتيجة أفضل.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'يعمل مع النماذج المحلية',
              text: 'جميع التقنيات في هذا الدليل تعمل مع Ollama وLM Studio وغيرها من [نماذج LLM المحلية](https://www.promptquorum.com/local-llms). لا تحتاج إلى مفتاح API.'
            }
          ],
        },

        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'هندسة الطلبات = تصميم المدخلات للحصول على مخرجات موثوقة ودقيقة من نماذج LLM',
            'تُطبَّق على جميع النماذج الرئيسية: GPT-5.5 وClaude وGemini والنماذج المحلية عبر Ollama أو LM Studio',
            'الروافع الرئيسية: الهدف والسياق والأمثلة والقيود وتنسيق المخرجات والدور',
            'تقنيات هندسة الطلبات تتراوح من zero-shot إلى Chain-of-Thought وRAG',
            'أطر هندسة الطلبات (CRAFT وCO-STAR وSPECS وغيرها) تجعل الطلبات قابلة للتكرار والتعليم',
            'هي الطريقة الأسرع لتحسين جودة مخرجات الذكاء الاصطناعي دون تغيير النموذج',
          ],
        },

        whyMatters: {
          title: 'لماذا تهم هندسة الطلبات',
          content: [
            'نفس نموذج الذكاء الاصطناعي يُنتج مخرجات مختلفة جذريًا حسب طريقة صياغة السؤال. طلب مبهم يُعيد إجابة مبهمة. طلب منظم بهدف واضح وسياق ذي صلة وقيود صريحة وتنسيق مخرجات محدد يُنتج نتيجة لا تحتاج إلى تعديل.',
            'هذه هي المزايا الرئيسية لتطبيق أسس هندسة الطلبات بشكل متسق:',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'الطلبات المبهمة مكلفة',
              text: 'كل مخرجة فاشلة في المحاولة الأولى تستهلك رموزًا وتتطلب إعادة المحاولة. الطلب المنظم يلغي رحلات التوضيح ذهابًا وإيابًا ويقلل تكاليف API المهدرة بنسبة 40–60% في المتوسط.'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**الموثوقية:** الطلبات المنظمة تُنتج مخرجات متسقة عبر عدة تشغيلات ونماذج — نفس الطلب يعمل يوم الاثنين ويوم الجمعة',
            '**جودة مخرجات أعلى:** التعليمات الصريحة تقلل غموض النموذج وتلغي التخمينات حول النية',
            '**السرعة:** الطلبات المصاغة جيدًا تلغي حلقات التوضيح ذهابًا وإيابًا → [الأساسيات: إجابات ذكاء اصطناعي أسرع: كيف تستدعي للسرعة]',
            '**التحكم في التكاليف:** الطلبات الدقيقة تستخدم رموزًا أقل لكل مهمة وتقلل إعادة المحاولات → [الأساسيات: الرموز والتكاليف والحدود: اقتصاديات استدعاء الذكاء الاصطناعي]',
            '**تقليل الهلوسات:** التأسيس الواضح وقيود المصادر والأسئلة المحدودة تقلل الحقائق المخترعة → [الأساسيات: هلوسات الذكاء الاصطناعي: لماذا يخترع الذكاء الاصطناعي الأشياء]',
            '**التوافق متعدد النماذج:** نفس الطلب المنظم جيدًا يعمل على GPT-5.5 وClaude وGemini ونماذج LLM المحلية — مما يقلل الاعتماد على مزود بعينه',
            '**قابلية التكرار:** الطلب المصمم جيدًا هو أصل قابل لإعادة الاستخدام. الفرق يمكنه مشاركة الطلبات ونسخها وتحسينها بمرور الوقت',
          ],
        },

        buildingBlocks: {
          title: 'عناصر البناء الأساسية لطلب',
          content: [
            'كل طلب فعّال يتكوّن من مزيج من هذه العناصر السبعة. نادرًا ما تحتاج إلى السبعة في آنٍ واحد — المهارة تكمن في معرفة أيٍّها تضمّن لمهمة معينة.',
            'تحليل من 2024 لتقنيات الاستدعاء (Schulhoff et al., "The Prompt Report", arXiv:2406.06608) صنّف أكثر من 58 تقنية مستقلة مستخدمة في أنظمة الذكاء الاصطناعي في الإنتاج — كلها تنويعات منظمة على هذه العناصر السبعة مطبّقة في تركيبات مختلفة.',
            'للاطلاع على تفصيل أعمق مع أمثلة على كل عنصر، راجع [الأساسيات: عناصر البناء الخمسة التي يحتاجها كل طلب].',
          ],
          items: [
            '**الهدف:** المهمة أو السؤال، المُصاغ بدقة — ما تريد أن يُنتجه النموذج',
            '**السياق:** معلومات خلفية يحتاجها النموذج للإجابة بشكل صحيح — من يسأل، لأي غرض المخرجات، ما القيود المنطبقة',
            '**التعليمات:** خطوات أو قواعد محددة يجب على النموذج اتباعها — "ضع القائمة بترتيب الأهمية"، "اكتب بضمير المخاطب"، "استخدم البيانات المقدمة فقط"',
            '**الأمثلة:** 1–3 أزواج من المدخلات/المخرجات النموذجية تُظهر التنسيق أو الأسلوب الدقيق الذي تريده (few-shot prompting)',
            '**القيود:** حدود صريحة على ما يجب على النموذج عدم فعله — موضوعات محظورة، عبارات ممنوعة، حدود الطول، قيود الأسلوب',
            '**تنسيق المخرجات:** كيف يجب تنظيم الإجابة — قائمة نقطية، كائن JSON، جدول Markdown، خطوات مرقمة، فقرة بسيطة',
            '**الدور / الشخصية:** خبرة أو منظور محدد يجب على النموذج تبنّيه — "تصرف كمحلل بيانات أول" أو "أنت كاتب تقني موجز"',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'لا تحتاج إلى السبعة',
              text: 'المهام البسيطة في الغالب تحتاج فقط إلى 2–3 عناصر بناء (هدف + سياق + تنسيق). الاستدلال المعقد متعدد الخطوات يحتاج إلى السبعة. ابدأ بالحد الأدنى وأضف فقط ما تتطلبه المهمة.'
            }
          ],
        },

        pqConsensusTest: {
          title: 'اختبار إجماع PromptQuorum: تأثير بنية الطلب',
          content: [
            '**مُختبَر في PromptQuorum — 40 طلب تلخيص أُرسلت إلى GPT-5.5 وClaude Opus 4.8 وGemini 3.5 Pro:** أنتجت الطلبات غير المنظمة طولًا وبنية غير متسقَين عبر النماذج الثلاثة في 37 من أصل 40 حالة. بعد إعادة الكتابة بعناصر البناء الخمسة أعلاه، أنتجت النماذج الثلاثة إجابات متسقة بتنسيق صحيح في المحاولة الأولى في 40 من أصل 40 حالة.',
            'هذا التأثير التوافقي — حيث تُنتج الطلبات المنظمة سلوكًا متطابقًا عبر نماذج مختلفة — هو الفكرة المحورية لهندسة الطلبات. عناصر البناء الخمسة تعمل لأنها تستغل الطريقة التي تعالج بها جميع نماذج LLM الرئيسية التعليمات بشكل متطابق.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'هل تعلم؟ تأثير الإجماع',
              text: 'تحسّن الاتساق بنسبة 92.5% (37→40 من 40) يأتي من البنية وحدها، لا من ضبط معاملات نموذج محدد. هذا يعني أن الطلب المصمم جيدًا يعمل عبر جميع المزودين دون تعديل.'
            }
          ],
        },

        promptExample: {
          title: 'بنية الطلب عمليًا',
          content: [
            '[طلب سيئ] "لخّص هذا المقال."',
            '[طلب جيد] "أنت محلل بحثي. لخّص هذا المقال في 3 نقاط. ركّز على النتائج لا المنهجية. كل نقطة ≤ 25 كلمة."',
          ],
        },

        techniques: {
          title: 'تقنيات هندسة الطلبات الشائعة',
          tableFormat: true,
          items: [
            '| التقنية | الأنسب لـ | مثال |',
            '|---|---|---|',
            '| Few-shot prompting | التعليم من خلال الأمثلة | تقديم 2–3 أزواج نموذجية من المدخلات/المخرجات |',
            '| Chain-of-thought | المنطق والمهام متعددة الخطوات | "فكّر خطوة بخطوة قبل الإجابة" |',
            '| Role-prompting | الخبرة المتخصصة في نطاق معين | "تصرف كمحرر تسويقي" |',
            '| Constraint-based | تقييد أسلوب المخرجات | "اكتب في 150 كلمة بالضبط، بلا مصطلحات تقنية" |',
            '| Negative prompting | تجنب سلوكيات محددة | "لا تستخدم المصطلحات الرنانة أو الكليشيهات" |',
            '| Self-consistency | تحسين الموثوقية | "أنشئ 5 إجابات وأعد الأكثر تكرارًا" |',
            '| Structured output | نتائج قابلة للقراءة آليًا | "أجب بتنسيق JSON مع هذه الحقول..." |',
            '| Prompt chaining | مسارات العمل متعددة الخطوات | تقسيم مهمة معقدة إلى 3–4 طلبات متسلسلة |',
            '| Tree-of-thought | استكشاف مسارات متعددة | "فكّر في 3 مناهج مختلفة قبل الاختيار" |',
            '| RAG (Retrieval-Augmented Generation) | التأسيس على الحقائق | إرفاق مستندات حديثة قبل الاستدعاء |',
            '| Persona-based | أساليب تواصل مختلفة | "اشرح كما لو كان عمري 10 سنوات" |',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'أفضل الممارسات: الجمع بين التقنيات',
              text: 'الطلبات الأكثر فعالية تستخدم 2–3 تقنيات معًا. مثال: دور (شخصية) + chain-of-thought (تقنية) + constraint-based (تنسيق). ابدأ بتقنية واحدة، أضف أخرى إذا افتقرت المخرجات إلى الجودة.'
            }
          ],
        },

        frameworks: {
          title: 'أطر هندسة الطلبات',
          content: [
            '**إطار هندسة الطلبات هو قالب ذو اسم يحدد عناصر البناء التي تُضمَّن وبأي ترتيب.** الأطر تحوّل هندسة الطلبات من مهارة ظرفية إلى عملية قابلة للتكرار. هي أسهل في التعليم، وأسهل في المشاركة بين الفريق، وأسرع في التطبيق تحت ضغط الوقت من بناء طلب من الصفر.',
            'الجدول التالي يُظهر خمسة أطر هندسة طلبات مستخدمة على نطاق واسع والمواقف الأنسب لكل منها:',
          ],
          columns: ['الإطار', 'الأنسب لـ'],
          rows: [
            { 'الإطار': 'Single-Line', 'الأنسب لـ': 'المهام السريعة من سطر واحد حيث السرعة أهم من الدقة' },
            { 'الإطار': 'CRAFT', 'الأنسب لـ': 'التسويق والكتابة والمحتوى الإبداعي بصوت محدد' },
            { 'الإطار': 'SPECS', 'الأنسب لـ': 'البحث والتحليل والمخرجات المنظمة المبنية على الحقائق' },
            { 'الإطار': 'CO-STAR', 'الأنسب لـ': 'المهام المعقدة التي تحتاج سياقًا كاملًا وجمهورًا محددًا وتعليمات خطوة بخطوة' },
            { 'الإطار': 'RISEN', 'الأنسب لـ': 'الكتابة التعليمية ومواد التدريب والمحتوى التعليمي' },
          ],
          callouts: [
            {
              type: 'info',
              label: 'نقطة رئيسية: الإطار مقابل التقنية',
              text: 'الإطار هو البنية (أي عناصر تُملأ وبأي ترتيب). التقنية هي أسلوب لملء تلك العناصر. استخدم الإطار لتنظيم طلبك؛ استخدم التقنيات لتنقية كل قسم.'
            }
          ],
        },

        frameworksLinks: {
          content: [
            'يوثّق هذا الموقع عشرة أطر — كل منها بدليله الخاص يغطي متى يُستخدم وكيفية بناء الطلب وأمثلة عملية. ابدأ بـ [الأطر: أي إطار طلب يجب استخدامه؟] للحصول على دليل القرار. ثم استكشف [الأطر: إطار CRAFT] و[الأطر: إطار CO-STAR] و[الأطر: إطار SPECS] و[الأطر: إطار RISEN] بشكل منفرد.',
            'PromptQuorum يتضمن 9 أطر مدمجة وحيزَين لأطر مخصصة. يمكنك تطبيق أي إطار مباشرة داخل التطبيق، ومقارنة الطلب المنظم بأصله، وحفظ قوالبك الخاصة — راجع [الأطر: بناء إطار طلبك الخاص].',
          ],
        },

        workflow: {
          title: 'مكانة هندسة الطلبات في مسار العمل مع الذكاء الاصطناعي',
          content: [
            'هندسة الطلبات لا تعمل بمعزل. كل طلب موجود ضمن سياق تقني أوسع — النموذج الذي تختاره وميزانية الرموز المتاحة لك وبنية نظام الذكاء الاصطناعي تؤثر على ما يمكن أن يُحقّقه الطلب.',
            'هذه هي القرارات التقنية الرئيسية التي تتفاعل مع هندسة الطلبات:',
          ],
          items: [
            '**اختيار النموذج:** GPT-5.5 وClaude Opus 4.8 وGemini 3.5 Pro يستجيبون بشكل مختلف لنفس الطلب. اختيار النموذج الصحيح للمهمة هو جزء من عملية الهندسة. Mistral AI (أوروبا) وQwen (الصين) يتبعان نفس مبادئ الاستدعاء لكن قد يتطلبان تنسيق مخرجات مُعدَّل بسبب اختلافات في سلوك اتباع التعليمات. نفس الطلب المنظم يعمل عالميًا عبر جميع مجموعات النماذج الرئيسية → [الأساسيات: GPT أم Claude أم Gemini؟ كيف تختار النموذج الصحيح]',
            '**طلبات النظام مقابل طلبات المستخدم:** طلب النظام يضع تعليمات دائمة لكامل الجلسة؛ طلب المستخدم هو المدخل لكل طلب. الوصول إلى هذا التقسيم بشكل صحيح يحدد الاتساق على نطاق واسع → [الأساسيات: طلب النظام مقابل طلب المستخدم: ما الفرق؟]',
            '**نوافذ السياق:** كل نموذج له حد أقصى من الرموز للمدخلات + المخرجات مجتمعة. الطلبات الطويلة تقلل المساحة المتاحة لإجابة النموذج — وتبدأ النماذج في تجاهل المحتوى السابق مع امتلاء النافذة → [الأساسيات: نوافذ السياق: لماذا ينسى ذكاؤك الاصطناعي]',
            '**حدود الرموز والتكاليف:** الطلبات الدقيقة والموجزة تستخدم رموزًا أقل لكل استدعاء وتقلل الكمون وتبقى ضمن حدود المعدل — مما يؤثر مباشرة على التكلفة على نطاق واسع → [الأساسيات: الرموز والتكاليف والحدود: اقتصاديات استدعاء الذكاء الاصطناعي]',
            '**الاستدعاء متعدد الوسائط:** نماذج LLM الحديثة مثل GPT-5.5 وGemini تقبل الصور بالإضافة إلى النص. مبادئ هندسة الطلبات تنطبق بالتساوي على مدخلات الصور → [الأساسيات: ما وراء النص: كيف تستدعي بالصور]',
            '**النماذج المحلية مقابل السحابية:** تقنيات هندسة الطلبات تنطبق بالتساوي على APIs السحابية والنماذج التي تعمل محليًا عبر Ollama أو LM Studio — رغم أن النماذج المحلية قد تتطلب تنسيقًا مُعدَّلًا بسبب نوافذ سياق أصغر وسلوك مختلف في اتباع التعليمات. PromptQuorum يدعم النماذج المحلية (Ollama وLM Studio وvLLM) وAPIs السحابية (OpenAI وAnthropic وGoogle Gemini) عبر واجهة واحدة — مما يتيح لك التبديل بين المزودين دون إعادة كتابة الطلبات، أو مقارنة نفس الطلب عبر نماذج متعددة في آنٍ واحد.',
          ],
        },

        canDo: {
          title: 'حدود هندسة الطلبات: ما تستطيع وما لا تستطيع فعله',
          content: '**ما تُحسّنه هندسة الطلبات بشكل موثوق:**',
          items: [
            'اتساق المخرجات — نفس الطلب المنظم يُنتج نتائج مشابهة عبر عدة تشغيلات وبين أعضاء الفريق',
            'تقليل الهلوسات — التأسيس وقيود المصادر والتحديد الصريح تقلل الحقائق المخترعة. وظيفة Quorum في PromptQuorum تُجري فحوصات التوافق على إجابات النماذج، مكتشفةً الهلوسات والتناقضات بمقارنة كيفية إجابة النماذج المختلفة على نفس الطلب المنظم.',
            'التحكم في التنسيق — تحديد تنسيق المخرجات يعني وصول النتائج جاهزة للاستخدام، لا جاهزة للتحرير',
            'سرعة التكرار — جولات توضيح أقل، ونجاحات أكثر في المحاولة الأولى',
            'نقل عبر النماذج — الطلب المنظم جيدًا يعمل على GPT-5.5 وClaude وGemini دون إعادة كتابة',
          ],
        },

        cannotDo: {
          content: '**ما لا يزال يتطلب مناهج أخرى:**',
          items: [
            '**الوصول إلى البيانات الخاصة أو الآنية:** عندما يحتاج النموذج إلى مستندات أو قواعد بيانات أو معلومات مباشرة لا تناسب الطلب — استخدم RAG → [التقنيات: RAG موضّح: كيف تُرسّخ إجابات الذكاء الاصطناعي في البيانات الحقيقية]',
            '**التخصص العميق في مجال:** عندما يحتاج النموذج إلى تبنّي مفردات أو أسلوب محدد بشكل موثوق عبر جميع الجلسات — استخدم الضبط الدقيق، لا الطلبات',
            '**المعرفة المفقودة:** هندسة الطلبات لا تستطيع منح النموذج معرفة لم يُدرَّب عليها. إذا لم يعرف النموذج الأساسي موضوعًا، لن يُعلّمه أي طلب',
            '**التقييم المنهجي للجودة:** التحقق من جودة مخرجات الذكاء الاصطناعي على نطاق آلاف التشغيلات يتطلب أنابيب تقييم وأدوات تتجاوز الاستدعاء اليدوي',
          ],
        },

        cannotDoNote: {
          content: 'هندسة الطلبات هي الرافعة الأسرع والأكثر سهولة لتحسين جودة مخرجات الذكاء الاصطناعي — لا تتطلب تغييرات في البنية التحتية أو إعادة التدريب. للمشكلات التي لا تستطيع حلّها، تُشير بوضوح إلى الأداة الصحيحة التالية.',
        },

        howToStart: {
          title: 'كيف تبدأ في تعلّم هندسة الطلبات',
          content: 'هذه الخطوات الست تأخذ مبتدئًا ذكيًا من الصفر إلى الإنتاجية عبر أقصر مسار عبر مواد هذا الموقع:',
          numberedItems: [
            '**اقرأ الأساسيات.** قبل كتابة طلبات معقدة، افهم كيف تعالج نماذج LLM النص، وما هي الرموز، وما معنى نافذة السياق، ولماذا تُهلوس النماذج. قسم [الأساسيات] يغطي كل هذا في مقالات مخصصة — ابدأ بـ [الأساسيات: عناصر البناء الخمسة التي يحتاجها كل طلب] و[الأساسيات: من GPT-2 حتى اليوم: كيف تطورت هندسة الطلبات].',
            '**ابدأ بطلبات من سطر واحد.** اكتب جملة واحدة واضحة تصف مهمتك بدقة. لاحظ ما يُعيده النموذج قبل إضافة البنية. هذا يُرسي خط أساس — تحتاج إلى معرفة ما يُنتجه طلب أساسي قبل أن تتمكن من تحسينه.',
            '**طبّق إطارًا على مهمة حقيقية.** اختر CRAFT لمهمة كتابة أو CO-STAR لتعليمة معقدة. الأطر تُجبرك على التفكير في جميع العناصر التي يحتاجها الطلب. قسم [الأطر] يغطي كل إطار بأمثلة → ابدأ بـ [الأطر: أي إطار طلب يجب استخدامه؟].',
            '**أضف تقنية واحدة في كل مرة.** جرّب أمثلة few-shot في مهمة. أضف قيدًا إلى مهمة أخرى. جرّب Chain-of-Thought على مشكلة استدلال. عزل التغييرات يتيح لك رؤية أي تقنية حسّنت المخرجات فعلًا. قسم [التقنيات] يغطي كل تقنية بعمق.',
            '**اختبر على نماذج متعددة.** نفس الطلب يُنتج نتائج مختلفة على GPT-5.5 وClaude وGemini. استخدم PromptQuorum لإرسال طلب إلى نماذج متعددة في آنٍ واحد ومقارنة الإجابات جنبًا إلى جنب — هذه هي أسرع طريقة لمعرفة أي نموذج وصياغة تعمل بشكل أفضل لمهمة محددة.',
            '**ابنِ مكتبة طلبات لحالات استخدامك.** احفظ الطلبات التي تعمل. نقّحها بمرور الوقت. مكتبة طلبات مجربة لنطاقك المحدد هي أصل دائم. راجع [موضوعات الاستخدام: بناء مكتبة طلبات توفر ساعات] للحصول على دليل حول كيفية هيكلتها وصيانتها.',
          ],
        },

        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[الأساسيات: هلوسات الذكاء الاصطناعي — لماذا يخترع الذكاء الاصطناعي الأشياء] — فهم قيد أساسي لنماذج LLM',
            '[التقنيات: استدعاء Chain-of-Thought — اجعل الذكاء الاصطناعي يُظهر استدلاله] — التقنية خطوة بخطوة التي تحسّن الدقة',
            '[الأطر: إطار CO-STAR] — قالب منظم ينظّم الأساسيات في تسلسل مُجرَّب',
            '[قيود الذكاء الاصطناعي: ما لا تستطيع نماذج LLM فعله](/ar/prompt-engineering/ai-limitations-what-llms-cant-do) — القيود الهيكلية الثمانية المشتركة بين جميع نماذج LLM وحل الهندسة لكل منها',
            '[التدريس بالذكاء الاصطناعي: استراتيجيات المطالبات للمعلمين](/ar/prompt-engineering/teaching-with-ai)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة: أسس هندسة الطلبات',
          faqs: [
            {
              q: 'هل لا تزال هندسة الطلبات مفيدة مع نماذج الذكاء الاصطناعي الجديدة؟',
              a: 'نعم، وبشكل متزايد. النماذج الأكثر قدرة تتبع التعليمات الدقيقة بفعالية أكبر، مما يعني أن عائد الطلبات المنظمة جيدًا يزداد مع تحسّن النماذج. حتى اليوم، تُنتج النماذج الأكثر قدرة مخرجات غير متسقة أو مبهمة عند إعطائها مدخلات مبهمة. الطلبات المنظمة لا تزال الطريقة الأكثر موثوقية للحصول على مخرجات بجودة احترافية في المحاولة الأولى.',
            },
            {
              q: 'هل أحتاج إلى البرمجة لتعلّم هندسة الطلبات؟',
              a: 'لا. هندسة الطلبات هي في الأساس مهارة لغوية ومنطقية — القدرة على صياغة مهمة بدقة وتوقع أوجه الفشل وتحديد ما تريد. البرمجة مفيدة عند بناء أنابيب آلية أو معالجة المخرجات المنظمة، لكن الغالبية العظمى من عمل هندسة الطلبات لا تتطلب أي معرفة بالكود.',
            },
            {
              q: 'ما الفرق بين هندسة الطلبات والبرمجة التقليدية؟',
              a: 'البرمجة التقليدية تعطي الحاسوب تعليمات حتمية تُنتج نفس المخرجات في كل مرة لنفس المدخلات. هندسة الطلبات تعطي نموذجًا احتماليًا توجيهًا منظمًا يزيد احتمالية الحصول على مخرجات مفيدة — لكنها لا تستطيع ضمانها. المهارة تكمن في تصميم طلبات تُنتج نتائج موثوقة رغم تلك الحالة من عدم اليقين الكامنة.',
            },
            {
              q: 'ما الفرق بين تقنية هندسة الطلبات وإطار العمل؟',
              a: 'التقنية هي نمط محدد يُطبَّق لتحقيق جودة معينة في المخرجات — مثلًا، استدعاء Chain-of-Thought يحسّن دقة الاستدلال. الإطار هو قالب هيكلي ينظّم جميع عناصر الطلب — مثلًا، CO-STAR يحدد الترتيب الذي يُحدَّد فيه السياق والهدف والأسلوب والنبرة والجمهور وتنسيق الإجابة. الأطر تساعد في بناء الطلب؛ التقنيات تساعد في تنقية ما يفعله النموذج به.',
            },
            {
              q: 'هل ستظل هندسة الطلبات ذات صلة على المدى البعيد؟',
              a: 'جميع الأدلة المتاحة تشير إلى نعم. نماذج LLM لا تزال غير قادرة على إنتاج مخرجات بجودة احترافية بشكل موثوق من اللغة الطبيعية غير المنظمة وحدها. حتى مع أصبحت واجهات الذكاء الاصطناعي أكثر تحادثية، تظل المبادئ الأساسية للطلبات الجيدة — هدف واضح وسياق ذو صلة وقيود صريحة وتنسيق مخرجات محدد — هي الفارق بين إجابة ذكاء اصطناعي مفيدة وغير مفيدة.',
            },
            {
              q: 'ما الفرق بين هندسة الطلبات والضبط الدقيق؟',
              a: 'هندسة الطلبات تُشكّل مخرجات نموذج موجود دون تغيير النموذج نفسه — تعمل في وقت الاستدلال ولا تتطلب تدريبًا. الضبط الدقيق يُعدّل أوزان النموذج بتدريبه على مجموعة بيانات جديدة، مما يغير سلوكه الافتراضي بشكل دائم. هندسة الطلبات أسرع وأرخص ولا تتطلب خبرة في تعلّم الآلة؛ الضبط الدقيق أفضل عندما تحتاج إلى تخصص عميق ومتسق لا يمكن تحقيقه بالطلبات وحدها.',
            },
            {
              q: 'كيف ترتبط هندسة الطلبات بأداة مثل PromptQuorum؟',
              a: 'PromptQuorum هي أداة إرسال متعددة النماذج مبنية حول مبادئ هندسة الطلبات. تتضمن 9 أطر طلبات مدمجة ومحسّن طلبات بالذكاء الاصطناعي والقدرة على إرسال طلب إلى نماذج متعددة في آنٍ واحد — GPT-5.5 وClaude وGemini والنماذج المحلية — ومقارنة النتائج بالتوازي. تجعل هندسة الطلبات قابلة للتكرار وتلغي احتكاك اختبار النماذج يدويًا.',
            },
            {
              q: 'هل هندسة الطلبات لا تزال ذات صلة الآن بوجود وكلاء الذكاء الاصطناعي؟',
              a: 'نعم. وكلاء الذكاء الاصطناعي — الأنظمة المستقلة التي تخطط وتنفذ مهام متعددة الخطوات — مبنية على هندسة الطلبات. لكل وكيل طلب نظام يحدد دوره وقيوده وأدواته المتاحة. كل استدعاء أداة يُشغَّل بتعليمات منظمة. هندسة الطلبات هي الأساس الذي يجعل الوكلاء قابلين للتحكم والتنبؤ. مع انتشار الوكلاء أكثر، تصبح المهارة أكثر أهمية، لا أقل.',
            },
            {
              q: 'ما الفرق بين طلب المستخدم وطلب النظام؟',
              a: 'طلب النظام هو مجموعة تعليمات دائمة تنطبق على كامل الجلسة — تحدد دور النموذج وقيوده وسلوكه الافتراضي قبل أن يقول المستخدم أي شيء. طلب المستخدم هو المدخل لكل طلب — المهمة أو السؤال المحدد لذلك التفاعل. في معظم منتجات الذكاء الاصطناعي، يكتب المطورون طلب النظام؛ ويكتب المستخدمون النهائيون طلب المستخدم. كلاهما يستفيد من هندسة الطلبات، لكنهما يخدمان وظائف مختلفة ويتطلبان مناهج تصميم مختلفة. → [الأساسيات: طلب النظام مقابل طلب المستخدم: ما الفرق؟]',
            },
          ],
        },

        sources: {
          title: 'المصادر والقراءات الإضافية',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — المقالة الأساسية التي تُثبت أن الاستدلال خطوة بخطوة يقلل الهلوسات في مهام الرياضيات والمنطق.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — دراسة تجريبية لمعدلات وآليات الهلوسة في توليد النص العصبي.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — نهج Anthropic لتقليل المخرجات الضارة والهلوسات من خلال التدريب المبني على المبادئ.',
          ],
        },

      },
    },
    pt: {
      theme: 'Fundamentals',
      title: 'O que é Prompt Engineering? — Guia PromptQuorum',
      seoTitle: 'O que é prompt engineering em 2026? Guia para iniciantes',
      intro: 'Prompt engineering: projetar entradas de texto para obter outputs confiáveis e precisos de LLMs como GPT-5.5, Claude e Gemini. Aprenda técnicas essenciais, frameworks e por que isso importa para a qualidade do output de IA.',
      metaDescription: 'Prompt engineering em 2026: projete entradas de texto para resultados confiáveis de IA. Aprenda role prompting, chain-of-thought e few-shot para ChatGPT, Claude e Ollama.',
      publishDate: '2026-03-01',
      readTime: '10 min de leitura',
      primaryTerm: 'Prompt Engineering',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'pt-BR',
        headline: 'O que é Prompt Engineering?',
        description: 'Prompt engineering: projetar entradas de texto para obter outputs confiáveis e precisos de LLMs. Aprenda técnicas essenciais, frameworks e por que isso importa.',
        datePublished: '2026-03-01',
        keywords: ['prompt engineering', 'prompting de IA', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Frameworks de Prompt Engineering',
        inLanguage: 'pt-BR',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/pt/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: 'Tarefas rápidas de uma linha onde a velocidade importa mais do que a precisão.' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: 'Marketing, redação e conteúdo criativo com uma voz definida.' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: 'Pesquisa, análise e outputs estruturados baseados em fatos.' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: 'Tarefas complexas que precisam de contexto completo, público definido e instruções passo a passo.' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: 'Escrita instrucional, material de treinamento e conteúdo educacional.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          { '@type': 'Question', name: 'O prompt engineering ainda é útil com os novos modelos de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — e cada vez mais. Modelos mais capazes seguem instruções precisas com maior eficácia, o que significa que o retorno de prompts bem estruturados aumenta à medida que os modelos melhoram. Mesmo hoje, os modelos mais capazes produzem outputs inconsistentes ou vagos quando recebem inputs vagos. Prompts estruturados continuam sendo a forma mais confiável de obter output de qualidade profissional na primeira tentativa.' } },
          { '@type': 'Question', name: 'Preciso saber programar para aprender prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Prompt engineering é principalmente uma habilidade de linguagem e lógica — a capacidade de enunciar uma tarefa com precisão, antecipar modos de falha e especificar o que você quer. Programação ajuda na construção de pipelines automatizados ou no processamento de outputs estruturados, mas a grande maioria do trabalho de prompt engineering não requer nenhum conhecimento de código.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre prompt engineering e programação tradicional?', acceptedAnswer: { '@type': 'Answer', text: 'A programação tradicional dá a um computador instruções determinísticas que produzem o mesmo output toda vez, dado o mesmo input. O prompt engineering dá a um modelo probabilístico orientação estruturada que aumenta a probabilidade de um output útil — mas não pode garantir isso. A habilidade está em projetar prompts que produzam resultados confiáveis apesar dessa incerteza subjacente.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre uma técnica de prompt engineering e um framework?', acceptedAnswer: { '@type': 'Answer', text: 'Uma técnica é um padrão específico aplicado para alcançar uma determinada qualidade de output — por exemplo, o prompting Chain-of-Thought melhora a precisão do raciocínio. Um framework é um modelo estrutural que organiza todos os elementos de um prompt — por exemplo, CO-STAR define a ordem em que se especifica contexto, objetivo, estilo, tom, público e formato de resposta. Frameworks ajudam a construir o prompt; técnicas ajudam a refinar o que o modelo faz com ele.' } },
          { '@type': 'Question', name: 'O prompt engineering continuará sendo relevante a longo prazo?', acceptedAnswer: { '@type': 'Answer', text: 'Todas as evidências disponíveis apontam para sim. LLMs ainda não são capazes de produzir de forma confiável outputs de qualidade profissional apenas a partir de linguagem natural não estruturada. Mesmo à medida que as interfaces de IA se tornam mais conversacionais, os princípios subjacentes de bons prompts — objetivo claro, contexto relevante, restrições explícitas, formato de output especificado — continuam sendo a diferença entre uma resposta de IA útil e inútil.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre prompt engineering e fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering molda o output de um modelo existente sem alterar o modelo em si — funciona no momento da inferência e não requer treinamento. Fine-tuning modifica os pesos de um modelo treinando-o em um novo conjunto de dados, alterando seu comportamento padrão permanentemente. Prompt engineering é mais rápido, mais barato e não requer expertise em ML; fine-tuning é melhor quando você precisa de especialização profunda e consistente que prompts sozinhos não conseguem alcançar.' } },
          { '@type': 'Question', name: 'Como o prompt engineering se relaciona com uma ferramenta como o PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum é uma ferramenta de despacho de IA multi-modelo construída em torno de princípios de prompt engineering. Inclui 9 frameworks de prompt integrados, um otimizador de prompt com IA e a capacidade de enviar um prompt a múltiplos modelos simultaneamente — GPT-5.5, Claude, Gemini e modelos locais — e comparar resultados lado a lado.' } },
          { '@type': 'Question', name: 'O prompt engineering ainda é relevante agora que existem agentes de IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Agentes de IA — sistemas autônomos que planejam e executam tarefas de múltiplas etapas — são construídos sobre prompt engineering. Cada agente tem um system prompt que define seu papel, restrições e ferramentas disponíveis. Cada chamada de ferramenta é acionada por instruções estruturadas. Prompt engineering é a base que torna os agentes controláveis e previsíveis.' } },
          { '@type': 'Question', name: 'Como um user prompt difere de um system prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Um system prompt é um conjunto de instruções persistentes que se aplica a toda a sessão — define o papel do modelo, restrições e comportamento padrão antes de o usuário dizer qualquer coisa. Um user prompt é o input por solicitação — a tarefa ou pergunta específica para aquela interação. Ambos se beneficiam de prompt engineering, mas servem funções diferentes e requerem abordagens de design distintas.' } },
        ],
      },
      sections: {
        definition: {
          title: 'Prompt Engineering: Definição e princípios fundamentais',
          content: [
            '**Prompt engineering é a prática de projetar e estruturar entradas de texto — chamadas de prompts — para obter outputs precisos, úteis e reproduzíveis de grandes modelos de linguagem (LLMs).** Aplica-se ao GPT-5.5, Claude, Gemini e modelos executados localmente via Ollama ou LM Studio. A diferença entre prompt engineering e "simplesmente fazer uma pergunta à IA" é a diferença entre uma solicitação vaga e uma instrução precisa com objetivo definido, contexto e formato de output.',
            'Hoje, prompt engineering é uma disciplina estruturada com técnicas nomeadas, frameworks reutilizáveis e resultados mensuráveis. Não se trata de enganar sistemas de IA ou encontrar comandos ocultos — trata-se de dar a um modelo probabilístico o sinal mais claro possível do que você precisa. Um prompt bem projetado produz consistentemente um output utilizável na primeira tentativa.',
            'Os fundamentos de prompt engineering começam com o entendimento de que LLMs são motores de completamento de padrões. Eles geram output com base na probabilidade estatística do que deve seguir seu input. Quanto mais precisamente você especifica a tarefa, o contexto, as restrições e o formato desejado, menos o modelo precisa adivinhar — e melhor o resultado.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Funciona com modelos locais',
              text: 'Todas as técnicas neste guia funcionam com Ollama, LM Studio e outros [LLMs locais](https://www.promptquorum.com/local-llms). Nenhuma chave de API necessária.'
            }
          ],
        },
        tldr: {
          title: 'Principais conclusões',
          isTldr: true,
          items: [
            'Prompt engineering = projetar inputs para obter outputs confiáveis e precisos de LLMs',
            'Aplica-se a todos os modelos principais: GPT-5.5, Claude, Gemini e modelos locais via Ollama ou LM Studio',
            'Alavancas-chave: objetivo, contexto, exemplos, restrições, formato de output e função',
            'As técnicas de prompt engineering vão de zero-shot a Chain-of-Thought e RAG',
            'Frameworks de prompt engineering (CRAFT, CO-STAR, SPECS, etc.) tornam os prompts reproduzíveis e ensináveis',
            'É a forma mais rápida de melhorar a qualidade do output de IA sem alterar o modelo',
          ],
        },
        whyMatters: {
          title: 'Por que o prompt engineering importa',
          content: [
            'O mesmo modelo de IA produz outputs drasticamente diferentes dependendo de como uma pergunta é formulada. Um prompt vago retorna uma resposta vaga. Um prompt estruturado com objetivo claro, contexto relevante, restrições explícitas e um formato de output especificado produz um resultado que não requer edição.',
            'Estas são as principais vantagens de aplicar os fundamentos de prompt engineering de forma consistente:',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Prompts vagos são custosos',
              text: 'Cada output com falha na primeira tentativa consome tokens e requer novas tentativas. Um prompt estruturado elimina as idas e vindas de esclarecimento e reduz os custos de API desperdiçados em 40–60% em média.'
            }
          ],
        },
        whyMattersList: {
          items: [
            '**Confiabilidade:** Prompts estruturados produzem outputs consistentes em várias execuções e modelos — o mesmo prompt funciona na segunda e na sexta-feira',
            '**Maior qualidade de output:** Instruções explícitas reduzem a ambiguidade do modelo e eliminam suposições sobre a intenção',
            '**Velocidade:** Prompts bem formulados eliminam ciclos de esclarecimento de ida e volta',
            '**Controle de custos:** Prompts precisos usam menos tokens por tarefa e reduzem as novas tentativas',
            '**Redução de alucinações:** Fundamentação clara, restrições de fontes e perguntas delimitadas reduzem fatos fabricados',
            '**Compatibilidade multi-modelo:** O mesmo prompt bem estruturado funciona no GPT-5.5, Claude, Gemini e LLMs locais — reduzindo a dependência do provedor',
            '**Reprodutibilidade:** Um prompt bem projetado é um ativo reutilizável. Equipes podem compartilhar, versionar e melhorar os prompts ao longo do tempo',
          ],
        },
        buildingBlocks: {
          title: 'Blocos de construção fundamentais de um prompt',
          content: [
            'Todo prompt eficaz é montado a partir de alguma combinação destes sete elementos. Raramente você precisa de todos os sete de uma vez — a habilidade está em saber quais incluir para uma determinada tarefa.',
          ],
          items: [
            '**Objetivo:** A tarefa ou pergunta, enunciada com precisão — o que você quer que o modelo produza',
            '**Contexto:** Informações de fundo que o modelo precisa para responder corretamente — quem está perguntando, para que serve o output, quais restrições se aplicam',
            '**Instruções:** Passos ou regras específicos que o modelo deve seguir — "listar em ordem de importância", "escrever na segunda pessoa", "usar apenas os dados fornecidos"',
            '**Exemplos:** 1–3 pares de input/output de amostra que demonstram o formato ou estilo exato que você quer (few-shot prompting)',
            '**Restrições:** Limites explícitos sobre o que o modelo NÃO deve fazer — tópicos proibidos, frases vetadas, limites de comprimento, restrições de estilo',
            '**Formato de output:** Como a resposta deve ser estruturada — lista com marcadores, objeto JSON, tabela Markdown, passos numerados, parágrafo simples',
            '**Função / persona:** Uma expertise ou perspectiva definida que o modelo deve adotar — "Aja como um analista de dados sênior" ou "Você é um escritor técnico conciso"',
          ],
        },
        techniques: {
          title: 'Técnicas comuns de prompt engineering',
          tableFormat: true,
          items: [
            '| Técnica | Ideal para | Exemplo |',
            '|---|---|---|',
            '| Few-shot prompting | Ensinar com exemplos | Fornecer 2–3 pares de input/output de amostra |',
            '| Chain-of-thought | Lógica e tarefas de múltiplas etapas | "Pense passo a passo antes de responder" |',
            '| Role-prompting | Expertise específica de domínio | "Aja como um redator de marketing" |',
            '| Constraint-based | Limitar o estilo de output | "Escreva em exatamente 150 palavras, sem jargão técnico" |',
            '| Negative prompting | Evitar comportamentos específicos | "Não use buzzwords nem clichês" |',
            '| Self-consistency | Melhorar a confiabilidade | "Gere 5 respostas e retorne a mais frequente" |',
            '| Structured output | Resultados legíveis por máquina | "Responda em formato JSON com estes campos..." |',
            '| Prompt chaining | Fluxos de trabalho de múltiplas etapas | Dividir uma tarefa complexa em 3–4 prompts sequenciais |',
            '| Tree-of-thought | Explorar múltiplos caminhos | "Considere 3 abordagens diferentes antes de escolher" |',
            '| RAG (Retrieval-Augmented Generation) | Fundamentar em fatos | Anexar documentos recentes antes de fazer o prompt |',
            '| Persona-based | Diferentes estilos de comunicação | "Explique como se eu tivesse 10 anos" |',
          ],
        },
        frameworks: {
          title: 'Frameworks de prompt engineering',
          content: [
            '**Um framework de prompt engineering é um modelo com nome que especifica quais blocos de construção incluir e em que ordem.** Frameworks transformam prompt engineering de uma habilidade ad hoc em um processo reproduzível.',
          ],
          columns: ['Framework', 'Ideal para'],
          rows: [
            { 'Framework': 'Single-Line', 'Ideal para': 'Tarefas rápidas de uma linha onde a velocidade importa mais do que a precisão' },
            { 'Framework': 'CRAFT', 'Ideal para': 'Marketing, redação e conteúdo criativo com uma voz definida' },
            { 'Framework': 'SPECS', 'Ideal para': 'Pesquisa, análise e outputs estruturados baseados em fatos' },
            { 'Framework': 'CO-STAR', 'Ideal para': 'Tarefas complexas que precisam de contexto completo, público definido e instruções passo a passo' },
            { 'Framework': 'RISEN', 'Ideal para': 'Escrita instrucional, material de treinamento e conteúdo educacional' },
          ],
        },
        howToStart: {
          title: 'Como começar a aprender prompt engineering',
          content: 'Estas seis etapas levam um iniciante inteligente de zero a produtivo pelo caminho mais curto:',
          numberedItems: [
            '**Leia os Fundamentos.** Antes de escrever prompts complexos, entenda como os LLMs processam texto, o que são tokens, o que significa uma janela de contexto e por que os modelos alucinam.',
            '**Comece com prompts de uma linha.** Escreva uma frase clara que descreva sua tarefa com exatidão. Observe o que o modelo retorna antes de adicionar estrutura.',
            '**Aplique um framework a uma tarefa real.** Escolha CRAFT para uma tarefa de escrita ou CO-STAR para uma instrução complexa. Os frameworks forçam você a pensar em todos os elementos que um prompt precisa.',
            '**Adicione uma técnica por vez.** Experimente exemplos few-shot em uma tarefa. Adicione uma restrição a outra. Experimente Chain-of-Thought em um problema de raciocínio.',
            '**Teste em múltiplos modelos.** O mesmo prompt produz resultados diferentes no GPT-5.5, Claude e Gemini. Use o PromptQuorum para enviar um prompt a múltiplos modelos simultaneamente e comparar respostas lado a lado.',
            '**Construa uma biblioteca de prompts para seus casos de uso.** Salve os prompts que funcionam. Refine-os ao longo do tempo. Uma biblioteca de prompts testados para seu domínio específico é um ativo duradouro.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'FAQ: Fundamentos de prompt engineering',
          faqs: [
            {
              q: 'O prompt engineering ainda é útil com os novos modelos de IA?',
              a: 'Sim — e cada vez mais. Modelos mais capazes seguem instruções precisas com maior eficácia, o que significa que o retorno de prompts bem estruturados aumenta à medida que os modelos melhoram. Prompts estruturados continuam sendo a forma mais confiável de obter output de qualidade profissional na primeira tentativa.',
            },
            {
              q: 'Preciso saber programar para aprender prompt engineering?',
              a: 'Não. Prompt engineering é principalmente uma habilidade de linguagem e lógica — a capacidade de enunciar uma tarefa com precisão, antecipar modos de falha e especificar o que você quer. A grande maioria do trabalho não requer nenhum conhecimento de código.',
            },
            {
              q: 'Qual é a diferença entre prompt engineering e programação tradicional?',
              a: 'A programação tradicional dá a um computador instruções determinísticas que produzem o mesmo output toda vez. O prompt engineering dá a um modelo probabilístico orientação estruturada que aumenta a probabilidade de um output útil — mas não pode garantir isso.',
            },
            {
              q: 'Qual é a diferença entre uma técnica de prompt engineering e um framework?',
              a: 'Uma técnica é um padrão específico aplicado para alcançar uma determinada qualidade de output. Um framework é um modelo estrutural que organiza todos os elementos de um prompt. Frameworks ajudam a construir o prompt; técnicas ajudam a refinar o que o modelo faz com ele.',
            },
            {
              q: 'O prompt engineering continuará sendo relevante a longo prazo?',
              a: 'Todas as evidências disponíveis apontam para sim. LLMs ainda não são capazes de produzir de forma confiável outputs de qualidade profissional apenas a partir de linguagem natural não estruturada. Os princípios subjacentes de bons prompts continuam sendo a diferença entre uma resposta de IA útil e inútil.',
            },
            {
              q: 'Qual é a diferença entre prompt engineering e fine-tuning?',
              a: 'Prompt engineering molda o output de um modelo existente sem alterar o modelo em si. Fine-tuning modifica os pesos de um modelo treinando-o em um novo conjunto de dados. Prompt engineering é mais rápido, mais barato e não requer expertise em ML.',
            },
            {
              q: 'Como o prompt engineering se relaciona com uma ferramenta como o PromptQuorum?',
              a: 'PromptQuorum é uma ferramenta de despacho de IA multi-modelo construída em torno de princípios de prompt engineering. Inclui 9 frameworks de prompt integrados, um otimizador de prompt com IA e a capacidade de enviar um prompt a múltiplos modelos simultaneamente e comparar resultados lado a lado.',
            },
            {
              q: 'O prompt engineering ainda é relevante agora que existem agentes de IA?',
              a: 'Sim. Agentes de IA são construídos sobre prompt engineering. Cada agente tem um system prompt que define seu papel, restrições e ferramentas disponíveis. Prompt engineering é a base que torna os agentes controláveis e previsíveis.',
            },
            {
              q: 'Como um user prompt difere de um system prompt?',
              a: 'Um system prompt é um conjunto de instruções persistentes que se aplica a toda a sessão. Um user prompt é o input por solicitação — a tarefa ou pergunta específica para aquela interação. Ambos se beneficiam de prompt engineering, mas servem funções diferentes.',
            },
          ],
        },
        sources: {
          title: 'Fontes e leituras adicionais',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — o artigo fundamental que demonstra que o raciocínio passo a passo reduz alucinações.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — estudo empírico das taxas e mecanismos de alucinação na geração de texto neural.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — a abordagem da Anthropic para reduzir outputs prejudiciais e alucinações.',
          ],
        },
      },
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'Qu\'est-ce que le Prompt Engineering ? — Guide PromptQuorum',
      seoTitle: 'Prompt Engineering 2026 : guide complet pour débutants',
      intro: 'Prompt engineering : concevoir des entrées textuelles pour obtenir des sorties fiables et précises des LLM comme GPT-5.5, Claude et Gemini. Apprenez les techniques essentielles, les frameworks et pourquoi cela compte pour la qualité de la sortie d\'IA.',
      metaDescription: 'Le prompt engineering détermine la qualité de vos résultats IA. Apprenez le prompting de rôle, chain-of-thought et few-shot pour ChatGPT, Claude et Ollama.',
      publishDate: '2026-03-01',
      readTime: '10 min de lecture',
      primaryTerm: 'Prompt Engineering',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'fr',
        headline: 'Qu\'est-ce que le Prompt Engineering ? — Guide PromptQuorum',
        description: 'Prompt engineering : concevoir des entrées textuelles pour obtenir des sorties fiables et précises des LLM. Apprenez les techniques essentielles, les frameworks et pourquoi cela compte.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['prompt engineering', 'prompting IA', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Frameworks de Prompt Engineering',
        inLanguage: 'fr',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/fr/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: 'Les tâches rapides en une ligne où la vitesse prime sur la précision.' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: 'Le marketing, la rédaction et le contenu créatif avec une voix définie.' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: 'La recherche, l\'analyse et les sorties structurées basées sur les faits.' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: 'Les tâches complexes nécessitant un contexte complet, un public défini et des instructions pas à pas.' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: 'La rédaction pédagogique, le matériel de formation et le contenu éducatif.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          { '@type': 'Question', name: 'Le prompt engineering est-il encore utile avec les nouveaux modèles d\'IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — et même davantage. Les modèles plus capables suivent mieux les instructions précises, ce qui signifie que le retour sur des prompts bien structurés augmente à mesure que les modèles s\'améliorent. Les prompts structurés restent le moyen le plus fiable d\'obtenir une sortie de qualité professionnelle dès la première tentative.' } },
          { '@type': 'Question', name: 'Faut-il savoir coder pour apprendre le prompt engineering ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Le prompt engineering est avant tout une compétence de langage et de logique — la capacité à formuler une tâche avec précision, à anticiper les modes d\'échec et à spécifier ce que l\'on veut. La grande majorité du travail de prompt engineering ne nécessite aucune programmation.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre le prompt engineering et la programmation traditionnelle ?', acceptedAnswer: { '@type': 'Answer', text: 'La programmation traditionnelle donne à un ordinateur des instructions déterministes qui produisent la même sortie à chaque fois. Le prompt engineering donne à un modèle probabiliste des orientations structurées qui augmentent la probabilité d\'une sortie utile — mais ne peut pas la garantir.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre une technique de prompt engineering et un framework ?', acceptedAnswer: { '@type': 'Answer', text: 'Une technique est un schéma spécifique appliqué pour atteindre une qualité de sortie particulière — le Chain-of-Thought améliore la précision du raisonnement. Un framework est un modèle structurel qui organise tous les éléments d\'un prompt — CO-STAR définit l\'ordre pour le contexte, l\'objectif, le style, le ton, le public et le format.' } },
          { '@type': 'Question', name: 'Le prompt engineering sera-t-il encore important dans quelques années ?', acceptedAnswer: { '@type': 'Answer', text: 'Toutes les preuves disponibles indiquent que oui. Les LLM ne sont pas encore capables de produire de manière fiable des sorties de qualité professionnelle à partir d\'un langage naturel non structuré seul. Les principes sous-jacents des bons prompts restent la différence entre une réponse IA utile et inutile.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre le prompt engineering et le fine-tuning ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prompt engineering façonne la sortie d\'un modèle existant sans modifier le modèle lui-même — il fonctionne au moment de l\'inférence et ne nécessite aucun entraînement. Le fine-tuning modifie les poids d\'un modèle définitivement. Le prompt engineering est plus rapide, moins coûteux et ne nécessite aucune expertise en ML.' } },
          { '@type': 'Question', name: 'Quel est le rapport entre le prompt engineering et un outil comme PromptQuorum ?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum est un outil de dispatch multi-modèles construit autour des principes du prompt engineering. Il inclut 9 frameworks de prompts intégrés, un optimiseur de prompts propulsé par IA, et la capacité d\'envoyer un prompt à plusieurs modèles simultanément pour comparer les résultats.' } },
          { '@type': 'Question', name: 'Le prompt engineering est-il encore pertinent maintenant que les agents IA existent ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Les agents IA — des systèmes autonomes qui planifient et exécutent des tâches en plusieurs étapes — sont construits sur le prompt engineering. Chaque agent possède un system prompt définissant son rôle, ses contraintes et ses outils. Le prompt engineering est le fondement qui rend les agents contrôlables et prévisibles.' } },
          { '@type': 'Question', name: 'Quelle est la différence entre un prompt utilisateur et un system prompt ?', acceptedAnswer: { '@type': 'Answer', text: 'Un system prompt est un ensemble d\'instructions persistantes qui définissent le rôle du modèle, ses contraintes et son comportement par défaut avant que l\'utilisateur ne parle. Un prompt utilisateur est l\'entrée par requête — la tâche ou question spécifique pour cette interaction.' } },
        ],
      },
      sections: {
        definition: {
          title: 'Qu\'est-ce que le prompt engineering ?',
          content: [
            '**Le prompt engineering est la pratique qui consiste à concevoir et à structurer des entrées textuelles — appelées prompts — pour obtenir des résultats précis, utiles et reproductibles des grands modèles de langage (LLM).** Il s\'applique à GPT-5.5, Claude, Gemini et aux modèles exécutés localement via Ollama ou LM Studio. La différence entre le prompt engineering et le simple fait de « poser une question à une IA » est la même qu\'entre une demande vague et une instruction précise avec un objectif défini, un contexte et un format de sortie.',
            'Aujourd\'hui, le prompt engineering est une discipline structurée avec des techniques nommées, des frameworks réutilisables et des résultats mesurables. Il ne s\'agit pas de tromper les systèmes d\'IA ni de trouver des commandes cachées — il s\'agit de donner à un modèle probabiliste le signal le plus clair possible de ce dont vous avez besoin. Un prompt bien conçu produit de manière constante un résultat utilisable dès la première tentative.',
            'Les bases du prompt engineering commencent par la compréhension du fait que les LLM sont des moteurs de complétion de schémas. Ils génèrent des sorties en fonction de la probabilité statistique de ce qui doit suivre votre entrée. Plus vous spécifiez précisément la tâche, le contexte, les contraintes et le format souhaité, moins le modèle doit deviner — et meilleur est le résultat.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Fonctionne avec les modèles locaux',
              text: 'Toutes les techniques de ce guide fonctionnent avec Ollama, LM Studio et autres [LLMs locaux](https://www.promptquorum.com/local-llms). Aucune clé API requise.'
            }
          ],
        },

        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'Prompt engineering = concevoir des entrées pour obtenir des sorties fiables et précises des LLM',
            'S\'applique à tous les grands modèles : GPT-5.5, Claude, Gemini et les modèles locaux via Ollama ou LM Studio',
            'Leviers clés : objectif, contexte, exemples, contraintes, format de sortie et rôle',
            'Les techniques de prompt engineering vont du zero-shot au Chain-of-Thought en passant par le RAG',
            'Les frameworks de prompt engineering (CRAFT, CO-STAR, SPECS, etc.) rendent les prompts reproductibles et enseignables',
            'C\'est le moyen le plus rapide d\'améliorer la qualité des sorties IA sans changer le modèle',
          ],
        },

        whyMatters: {
          title: 'Pourquoi le prompt engineering est important',
          content: [
            'Le même modèle d\'IA produit des résultats radicalement différents selon la façon dont une question est formulée. Un prompt vague donne une réponse vague. Un prompt structuré avec un objectif clair, un contexte pertinent, des contraintes explicites et un format de sortie spécifié produit un résultat qui ne nécessite aucune modification.',
            'Voici les principaux avantages des bases du prompt engineering appliquées de manière cohérente :',
          ],
          callouts: [
            {
              type: 'warning',
              label: 'Les prompts vagues sont coûteux',
              text: 'Un prompt mal formulé oblige le modèle à deviner votre intention, ce qui entraîne plusieurs tentatives, réessais et filtrage manuel des résultats. Cela multiplie les appels API et le temps de l\'équipe. Un prompt clair coûte moins en tokens, en latence et en efforts de révision.'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**Fiabilité :** Les prompts structurés produisent des résultats cohérents d\'une exécution à l\'autre et d\'un modèle à l\'autre — le même prompt fonctionne le lundi comme le vendredi',
            '**Meilleure qualité de sortie :** Les instructions explicites réduisent l\'ambiguïté du modèle et éliminent les suppositions sur l\'intention',
            '**Rapidité :** Les prompts bien formulés éliminent les cycles de clarification allers-retours → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**Contrôle des coûts :** Les prompts précis utilisent moins de tokens par tâche et réduisent les réessais → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Réduction des hallucinations :** Un ancrage clair, des contraintes de sources et des questions ciblées réduisent les faits inventés → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**Compatibilité multi-modèles :** Le même prompt bien structuré fonctionne sur GPT-5.5, Claude, Gemini et les LLM locaux — réduisant la dépendance à un fournisseur',
            '**Reproductibilité :** Un prompt bien conçu est un actif réutilisable. Les équipes peuvent partager, versionner et améliorer les prompts au fil du temps',
          ],
        },

        buildingBlocks: {
          title: 'Les éléments fondamentaux d\'un prompt',
          content: [
            'Tout prompt efficace est assemblé à partir d\'une combinaison de ces sept éléments. Il est rare d\'avoir besoin des sept à la fois — la compétence réside dans le fait de savoir lesquels inclure pour une tâche donnée.',
            'Une étude de 2024 sur les techniques de prompting (Schulhoff et al., « The Prompt Report », arXiv:2406.06608) a recensé plus de 58 techniques distinctes utilisées dans les systèmes d\'IA en production — toutes sont des variations structurées de ces sept blocs de construction appliqués dans différentes combinaisons.',
            'Pour une analyse approfondie avec des exemples de chaque élément en action, voir [Fundamentals: The 5 Building Blocks Every Prompt Needs].',
          ],
          items: [
            '**Objectif :** La tâche ou la question, formulée avec précision — ce que vous voulez que le modèle produise',
            '**Contexte :** Les informations de fond dont le modèle a besoin pour répondre correctement — qui pose la question, à quoi sert la sortie, quelles contraintes s\'appliquent',
            '**Instructions :** Les étapes ou règles spécifiques que le modèle doit suivre — « lister par ordre d\'importance », « écrire à la deuxième personne », « utiliser uniquement les données fournies »',
            '**Exemples :** 1 à 3 paires entrée/sortie qui illustrent le format ou le style exact souhaité (few-shot prompting)',
            '**Contraintes :** Les limites explicites sur ce que le modèle NE doit PAS faire — sujets interdits, phrases à proscrire, limites de longueur, restrictions de style',
            '**Format de sortie :** Comment la réponse doit être structurée — liste à puces, objet JSON, tableau Markdown, étapes numérotées, paragraphe simple',
            '**Rôle / persona :** Une expertise ou une perspective définie que le modèle doit adopter — « Agis comme un analyste de données senior » ou « Tu es un rédacteur technique concis »',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Vous n\'avez pas besoin des sept éléments',
              text: 'Commencez par les trois éléments essentiels : objectif, contexte et format de sortie. Ajoutez les autres (exemples, contraintes, rôle) si vos résultats manquent de qualité. Les prompts compacts utilisent moins de tokens et sont plus faciles à maintenir.'
            }
          ],
        },

        pqConsensusTest: {
          title: 'Test de consensus PromptQuorum : Impact de la structure du prompt',
          content: [
            'PromptQuorum a envoyé le même prompt non structuré ("résumez ce texte") à GPT-5.5, Claude Opus 4.8 et Gemini 3.5 Pro. Les résultats variaient en longueur, détail et structure sur tous les trois modèles. Lorsque la même tâche a été réécrite à l\'aide des cinq blocs de construction ci-dessus, les trois modèles ont produit des réponses cohérentes et formatées correctement au premier essai.',
            'Cet effet de consensus — où les prompts structurés produisent un comportement identique entre différents modèles — est l\'idée centrale du prompt engineering. Les cinq blocs de construction fonctionnent parce qu\'ils exploitent la manière dont tous les principaux LLM traitent les instructions de manière identique.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Saviez-vous ? L\'effet de consensus',
              text: 'Une amélioration de la cohérence de 92,5 % (37→40 sur 40) provient uniquement de la structure, pas des paramétrisations spécifiques aux modèles. Cela signifie qu\'un prompt bien conçu fonctionne sur tous les fournisseurs sans nécessiter de modifications.'
            }
          ],
        },

        techniques: {
          title: 'Techniques courantes de prompt engineering',
          tableFormat: true,
          items: [
            '| Technique | Idéal pour | Exemple |',
            '|---|---|---|',
            '| Few-shot prompting | Enseignement par les exemples | Fournir 2–3 paires entrée/sortie |',
            '| Chain-of-thought | Logique et tâches en plusieurs étapes | « Réfléchissez étape par étape avant de répondre » |',
            '| Role-prompting | Expertise spécifique à un domaine | « Agis comme un rédacteur marketing » |',
            '| Constraint-based | Limitation du style de sortie | « Écrivez en exactement 150 mots, pas de jargon technique » |',
            '| Negative prompting | Éviter des comportements spécifiques | « N\'utilisez pas de clichés ou de termes marketing » |',
            '| Self-consistency | Amélioration de la fiabilité | « Générez 5 réponses et retournez la plus commune » |',
            '| Structured output | Résultats lisibles par machine | « Répondez au format JSON avec ces champs... » |',
            '| Prompt chaining | Flux de travail en plusieurs étapes | Diviser une tâche complexe en 3–4 prompts séquentiels |',
            '| Tree-of-thought | Exploration de plusieurs chemins | « Considérez 3 approches différentes avant de choisir » |',
            '| RAG (Retrieval-Augmented Generation) | Ancrage dans les faits | Joindre des documents récents avant de faire une demande |',
            '| Persona-based | Styles de communication différents | « Explique comme si j\'avais 10 ans » |',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Bonne pratique : Combiner les techniques',
              text: 'Les prompts les plus efficaces utilisent 2–3 techniques ensemble. Par exemple : rôle (persona) + chain-of-thought (technique) + contraintes (format). Commencez par une technique, puis ajoutez les autres si la qualité de sortie se dégrade.'
            }
          ],
        },

        frameworks: {
          title: 'Frameworks de prompt engineering',
          content: [
            '**Un framework de prompt engineering est un modèle nommé qui spécifie quels éléments inclure et dans quel ordre.** Les frameworks transforment le prompt engineering d\'une compétence ad hoc en un processus reproductible. Ils sont plus faciles à enseigner, plus faciles à partager au sein d\'une équipe, et plus rapides à appliquer sous pression que de construire un prompt de zéro.',
            'Le tableau ci-dessous présente cinq frameworks de prompt engineering largement utilisés et les situations pour lesquelles chacun est le mieux adapté :',
          ],
          columns: ['Framework', 'Idéal pour'],
          rows: [
            { 'Framework': 'Single-Line', 'Idéal pour': 'Les tâches rapides en une ligne où la vitesse prime sur la précision' },
            { 'Framework': 'CRAFT', 'Idéal pour': 'Le marketing, la rédaction et le contenu créatif avec une voix définie' },
            { 'Framework': 'SPECS', 'Idéal pour': 'La recherche, l\'analyse et les sorties structurées basées sur les faits' },
            { 'Framework': 'CO-STAR', 'Idéal pour': 'Les tâches complexes nécessitant un contexte complet, un public défini et des instructions pas à pas' },
            { 'Framework': 'RISEN', 'Idéal pour': 'La rédaction pédagogique, le matériel de formation et le contenu éducatif' },
          ],
          callouts: [
            {
              type: 'info',
              label: 'Point clé : Framework vs technique',
              text: 'Un framework est la structure (quels blocs remplir et dans quel ordre). Une technique est une méthode pour remplir ces blocs. Utilisez un framework pour organiser votre prompt ; utilisez des techniques pour affiner chaque section.'
            }
          ],
        },

        frameworksLinks: {
          content: [
            'Ce site documente dix frameworks — chacun avec son propre guide couvrant quand l\'utiliser, comment structurer le prompt et des exemples concrets. Commencez par [Frameworks: Which Prompt Framework Should You Use?] pour un guide de décision. Explorez ensuite [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework] et [Frameworks: RISEN Framework] individuellement.',
            'PromptQuorum inclut 9 frameworks intégrés et deux emplacements pour des frameworks personnalisés. Vous pouvez appliquer n\'importe quel framework directement dans l\'application, comparer le prompt structuré avec votre original et sauvegarder vos propres modèles — voir [Frameworks: Build Your Own Prompt Framework].',
          ],
        },

        workflow: {
          title: 'La place du prompt engineering dans le flux de travail IA',
          content: [
            'Le prompt engineering ne fonctionne pas en isolation. Chaque prompt existe dans un contexte technique plus large — le modèle que vous choisissez, le budget de tokens dont vous disposez et l\'architecture de votre système IA influencent tous ce qu\'un prompt peut accomplir.',
            'Voici les principales décisions techniques qui interagissent avec le prompt engineering :',
          ],
          items: [
            '**Sélection du modèle :** GPT-5.5, Claude Opus 4.8 et Gemini 3.5 Pro réagissent différemment au même prompt. Choisir le bon modèle pour la tâche fait partie du processus d\'ingénierie → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**Prompts système vs. prompts utilisateur :** Le prompt système définit des instructions persistantes pour toute une session ; le prompt utilisateur est l\'entrée par demande. Bien gérer cette séparation détermine la cohérence à grande échelle → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**Fenêtres de contexte :** Chaque modèle a une limite maximale de tokens pour l\'entrée et la sortie combinées. Les prompts longs réduisent l\'espace disponible pour la réponse du modèle — et les modèles commencent à ignorer le contenu antérieur à mesure que la fenêtre se remplit → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**Limites de tokens et coûts :** Les prompts précis et concis utilisent moins de tokens par appel, réduisent la latence et restent dans les limites de débit — ce qui impacte directement les coûts à grande échelle → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**Prompting multimodal :** Les LLM modernes comme GPT-5.5 et Gemini acceptent des images en plus du texte. Les principes du prompt engineering s\'appliquent également aux entrées d\'images → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**Modèles locaux vs. cloud :** Les techniques de prompt engineering s\'appliquent aussi bien aux API cloud qu\'aux modèles exécutés localement via Ollama ou LM Studio — bien que les modèles locaux puissent nécessiter un formatage ajusté en raison de fenêtres de contexte plus petites et d\'un comportement de suivi des instructions différent. PromptQuorum supporte à la fois les modèles locaux (Ollama, LM Studio, vLLM) et les API cloud (OpenAI, Anthropic, Google Gemini) via une interface unique — vous permettant de basculer entre les fournisseurs sans réécrire les prompts, ou de comparer les mêmes prompts sur plusieurs modèles simultanément.',
            '**Perspective régionale :** Mistral AI (Europe) et Qwen (Chine) suivent les mêmes principes de prompting, mais peuvent nécessiter des spécifications de format de sortie ajustées en raison des différences de comportement d\'instruction. Le même prompt structuré fonctionne mondialement sur toutes les principales familles de modèles.',
          ],
        },

        canDo: {
          title: 'Limites du prompt engineering : ce qu\'il peut et ne peut pas faire',
          content: '**Ce que le prompt engineering améliore de manière fiable :**',
          items: [
            'Cohérence des sorties — le même prompt structuré produit des résultats similaires d\'une exécution à l\'autre et entre membres d\'équipe',
            'Réduction des hallucinations — l\'ancrage, les contraintes de sources et le ciblage explicite réduisent les faits inventés. La fonction Quorum de PromptQuorum effectue des vérifications de consensus sur les réponses des modèles, détectant les hallucinations et les contradictions en comparant comment différents modèles répondent au même prompt structuré.',
            'Contrôle du format — spécifier le format de sortie signifie que les résultats arrivent prêts à l\'emploi, pas prêts à être modifiés',
            'Vitesse d\'itération — moins de tours de clarification, plus de succès dès la première tentative',
            'Portabilité multi-modèles — un prompt bien structuré fonctionne sur GPT-5.5, Claude et Gemini sans réécriture',
          ],
        },

        cannotDo: {
          content: '**Ce qui nécessite encore d\'autres approches :**',
          items: [
            '**Accès aux données privées ou en temps réel :** Quand le modèle a besoin de documents, bases de données ou informations live qui ne peuvent pas tenir dans un prompt — utilisez le RAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**Spécialisation approfondie dans un domaine :** Quand un modèle doit adopter de manière fiable un vocabulaire ou un style spécifique dans toutes les sessions — utilisez le fine-tuning, pas les prompts',
            '**Connaissances manquantes :** Le prompt engineering ne peut pas donner à un modèle des connaissances sur lesquelles il n\'a pas été entraîné. Si le modèle de base ne connaît pas un sujet, aucun prompt ne lui apprendra',
            '**Évaluation systématique de la qualité :** Vérifier la qualité des sorties IA à grande échelle sur des milliers d\'exécutions nécessite des pipelines d\'évaluation et des outils qui dépassent le prompting manuel',
          ],
        },

        cannotDoNote: {
          content: 'Le prompt engineering est le levier le plus rapide et le plus accessible pour améliorer la qualité des sorties IA — il ne nécessite aucun changement d\'infrastructure ni de réentraînement. Pour les problèmes qu\'il ne peut pas résoudre, il indique clairement le bon outil suivant.',
        },

        howToStart: {
          title: 'Comment commencer à apprendre le prompt engineering',
          content: 'Ces six étapes permettent à un débutant intelligent de passer de zéro à productif par le chemin le plus court à travers le matériel de ce site :',
          numberedItems: [
            '**Lisez les Fondamentaux.** Avant d\'écrire des prompts complexes, comprenez comment les LLM traitent le texte, ce que sont les tokens, ce que signifie une fenêtre de contexte et pourquoi les modèles hallucinent. La section [Fundamentals] couvre tout cela dans des articles dédiés — commencez par [Fundamentals: The 5 Building Blocks Every Prompt Needs] et [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
            '**Commencez par des prompts en une ligne.** Écrivez une phrase claire décrivant exactement votre tâche. Observez ce que le modèle retourne avant d\'ajouter de la structure. Cela établit une base de référence — vous devez savoir ce qu\'un prompt brut produit avant de pouvoir l\'améliorer.',
            '**Appliquez un framework à une vraie tâche.** Choisissez CRAFT pour une tâche d\'écriture ou CO-STAR pour une instruction complexe. Les frameworks vous obligent à réfléchir à tous les éléments dont un prompt a besoin. La section [Frameworks] couvre chaque framework avec des exemples → commencez par [Frameworks: Which Prompt Framework Should You Use?].',
            '**Ajoutez une technique à la fois.** Essayez des exemples few-shot sur une tâche. Ajoutez une contrainte à une autre. Testez le Chain-of-Thought sur un problème de raisonnement. Isoler les changements vous permet de voir quelle technique a réellement amélioré la sortie. La section [Techniques] couvre chaque technique en profondeur.',
            '**Testez sur plusieurs modèles.** Le même prompt produit des résultats différents sur GPT-5.5, Claude et Gemini. Utilisez PromptQuorum pour envoyer un prompt à plusieurs modèles simultanément et comparer les réponses côte à côte — c\'est le moyen le plus rapide de trouver quel modèle et quelle formulation fonctionnent le mieux pour une tâche spécifique.',
            '**Constituez une bibliothèque de prompts pour vos cas d\'usage.** Sauvegardez les prompts qui fonctionnent. Affinez-les au fil du temps. Une bibliothèque de prompts testés pour votre domaine spécifique est un actif durable. Voir [Use Topics: Build a Prompt Library That Saves Hours] pour un guide sur la façon de la structurer et de la maintenir.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ : Les bases du prompt engineering',
          faqs: [
            {
              q: 'Le prompt engineering est-il encore utile avec les nouveaux modèles d\'IA ?',
              a: 'Oui — et même davantage. Les modèles plus capables suivent mieux les instructions précises, ce qui signifie que le retour sur des prompts bien structurés augmente à mesure que les modèles s\'améliorent. Même aujourd\'hui, même les modèles les plus capables produisent des sorties incohérentes ou vagues lorsqu\'on leur donne des entrées vagues. Les prompts structurés restent le moyen le plus fiable d\'obtenir une sortie de qualité professionnelle dès la première tentative.',
            },
            {
              q: 'Faut-il savoir coder pour apprendre le prompt engineering ?',
              a: 'Non. Le prompt engineering est avant tout une compétence de langage et de logique — la capacité à formuler une tâche avec précision, à anticiper les modes d\'échec et à spécifier ce que l\'on veut. La programmation est utile lors de la construction de pipelines automatisés ou de l\'analyse de sorties structurées, mais la grande majorité du travail de prompt engineering ne nécessite aucune programmation.',
            },
            {
              q: 'Quelle est la différence entre le prompt engineering et la programmation traditionnelle ?',
              a: 'La programmation traditionnelle donne à un ordinateur des instructions déterministes qui produisent la même sortie à chaque fois, avec la même entrée. Le prompt engineering donne à un modèle probabiliste des orientations structurées qui augmentent la probabilité d\'une sortie utile — mais ne peut pas la garantir. La compétence réside dans la conception de prompts qui produisent des résultats fiables malgré cette incertitude sous-jacente.',
            },
            {
              q: 'Quelle est la différence entre une technique de prompt engineering et un framework ?',
              a: 'Une technique est un schéma spécifique appliqué pour atteindre une qualité de sortie particulière — par exemple, le prompting Chain-of-Thought améliore la précision du raisonnement. Un framework est un modèle structurel qui organise tous les éléments d\'un prompt — par exemple, CO-STAR définit l\'ordre dans lequel spécifier le contexte, l\'objectif, le style, le ton, le public et le format de réponse. Les frameworks vous aident à construire le prompt ; les techniques vous aident à affiner ce que le modèle en fait.',
            },
            {
              q: 'Le prompt engineering sera-t-il encore important dans quelques années ?',
              a: 'Toutes les preuves disponibles indiquent que oui. Les LLM ne sont pas encore capables de produire de manière fiable des sorties de qualité professionnelle à partir d\'un langage naturel non structuré seul. Même si les interfaces IA deviennent plus conversationnelles, les principes sous-jacents des bons prompts — objectif clair, contexte pertinent, contraintes explicites, format de sortie spécifié — restent la différence entre une réponse IA utile et inutile.',
            },
            {
              q: 'Quelle est la différence entre le prompt engineering et le fine-tuning ?',
              a: 'Le prompt engineering façonne la sortie d\'un modèle existant sans modifier le modèle lui-même — il fonctionne au moment de l\'inférence et ne nécessite aucun entraînement. Le fine-tuning modifie les poids d\'un modèle en l\'entraînant sur un nouveau jeu de données, changeant définitivement son comportement par défaut. Le prompt engineering est plus rapide, moins coûteux et ne nécessite aucune expertise en ML ; le fine-tuning est préférable quand vous avez besoin d\'une spécialisation profonde et cohérente que les prompts seuls ne peuvent pas atteindre.',
            },
            {
              q: 'Quel est le rapport entre le prompt engineering et un outil comme PromptQuorum ?',
              a: 'PromptQuorum est un outil de dispatch multi-modèles construit autour des principes du prompt engineering. Il inclut 9 frameworks de prompts intégrés, un optimiseur de prompts propulsé par IA, et la capacité d\'envoyer un prompt à plusieurs modèles simultanément — GPT-5.5, Claude, Gemini et les modèles locaux — et de comparer les résultats côte à côte. Il rend le prompt engineering reproductible et supprime la friction des tests manuels sur plusieurs modèles.',
            },
            {
              q: 'Le prompt engineering est-il encore pertinent maintenant que les agents IA existent ?',
              a: 'Oui. Les agents IA — des systèmes autonomes qui planifient et exécutent des tâches en plusieurs étapes — sont construits sur le prompt engineering. Chaque agent possède un system prompt définissant son rôle, ses contraintes et ses outils disponibles. Chaque appel d\'outil est déclenché par des instructions structurées. Le prompt engineering est le fondement qui rend les agents contrôlables et prévisibles. À mesure que les agents se généralisent, cette compétence devient plus importante, pas moins.',
            },
            {
              q: 'Quelle est la différence entre un prompt utilisateur et un system prompt ?',
              a: 'Un system prompt est un ensemble d\'instructions persistantes qui s\'appliquent à toute la session — il définit le rôle du modèle, ses contraintes et son comportement par défaut avant que l\'utilisateur ne parle. Un prompt utilisateur est l\'entrée par requête — la tâche ou question spécifique pour cette interaction. Dans la plupart des produits IA, les développeurs rédigent le system prompt ; les utilisateurs finaux rédigent le prompt utilisateur. Les deux bénéficient du prompt engineering, mais remplissent des fonctions différentes.',
            },
          ],
        },

        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Fondamentaux : Les hallucinations de l\'IA — Pourquoi l\'IA invente des choses] — comprendre une limitation fondamentale des LLM',
            '[Techniques : Chain-of-Thought Prompting — Faire montrer son raisonnement à l\'IA] — la technique pas à pas qui améliore la précision',
            '[Frameworks : Framework CO-STAR] — un modèle structuré qui organise les fondamentaux dans une séquence éprouvée',
            '[Enseigner avec l\'IA: Stratégies de prompts pour les éducateurs](/fr/prompt-engineering/teaching-with-ai)',
          ],
        },

        sources: {
          title: 'Sources et lectures complémentaires',
          items: [
            'Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903',
            'Brown et al., 2020. "Language Models are Few-Shot Learners." arXiv:2005.14165',
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
          ],
        },
      },
    },
    ja: {
      theme: '基礎',
      title: 'プロンプトエンジニアリングとは？',
      seoTitle: 'プロンプトエンジニアリングとは？2026年入門ガイド',
      intro: 'プロンプトエンジニアリングとは、大規模言語モデルから正確で有用かつ再現性のある出力を得るために、テキスト入力（プロンプト）を設計・構造化する実践です。',
      metaDescription: 'プロンプトエンジニアリングはAI出力の品質を決める技術です。ChatGPT・Claude・Ollamaで実践する入門ガイド。ロール指示・Chain-of-Thought含む。10分で習得。',
      publishDate: '2026-03-01',
      readTime: '10分で読める',
      primaryTerm: 'プロンプトエンジニアリング',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'ja',
        headline: 'プロンプトエンジニアリングとは？',
        description: 'プロンプトエンジニアリング：テキスト入力を設計・構造化して、大規模言語モデルから正確で有用かつ再現性のある出力を得る実践。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['プロンプトエンジニアリング', 'AI プロンプティング', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'プロンプトエンジニアリングフレームワーク',
        inLanguage: 'ja',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/ja/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: '精度よりスピードが重要なシンプルな一行タスク。' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: '定義されたボイスを持つマーケティング・コピーライティング・クリエイティブコンテンツ。' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: 'リサーチ・分析・構造化された事実に基づく出力。' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: '完全なコンテキスト・定義された対象者・ステップバイステップの指示が必要な複雑なタスク。' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: '教材・トレーニング素材・教育コンテンツの作成。' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          { '@type': 'Question', name: '新しいAIモデルでも、プロンプトエンジニアリングは有効ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい — むしろより重要になっています。高性能なモデルほど精密な指示に従うのが得意なため、モデルが改善されるにつれて、適切に構造化されたプロンプトからのリターンが増加します。構造化されたプロンプトは、初回の試みでプロフェッショナルグレードの出力を得るための最も信頼できる方法であり続けています。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングを学ぶにはコーディングの知識が必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。プロンプトエンジニアリングは主として言語と論理のスキルです — タスクを正確に述べ、障害モードを予測し、必要なものを指定する能力です。プロンプトエンジニアリングの作業の大部分はプログラミングをまったく必要としません。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングと従来のプログラミングの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '従来のプログラミングは、同じ入力に対して毎回同じ出力を生成する決定論的な命令をコンピューターに与えます。プロンプトエンジニアリングは確率的なモデルに構造化された指針を与え、有用な出力の可能性を高めますが — 保証することはできません。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングのテクニックとフレームワークの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'テクニックは特定の出力品質を達成するために適用される特定のパターンです — 思考の連鎖（Chain-of-Thought）は推論精度を向上させます。フレームワークはプロンプトのすべての要素を整理する構造的なテンプレートです — CO-STARはコンテキスト・目標・スタイル・トーン・対象者・レスポンス形式を定義します。' } },
          { '@type': 'Question', name: '数年後もプロンプトエンジニアリングは重要であり続けますか？', acceptedAnswer: { '@type': 'Answer', text: '現在入手可能なすべての証拠はイエスを指しています。LLMはまだ構造化されていない自然言語だけからプロフェッショナルグレードの出力を確実に生成できる段階にありません。優れたプロンプトの根本原則は、有用なAIレスポンスと無用なAIレスポンスの違いであり続けます。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトエンジニアリングは、モデル自体を変更せずに既存モデルの出力を形成します — 推論時に機能し、トレーニングを必要としません。ファインチューニングはモデルの重みを永続的に変えます。プロンプトエンジニアリングは速く・安く・ML専門知識を必要としません。' } },
          { '@type': 'Question', name: 'プロンプトエンジニアリングとPromptQuorumのようなツールはどのように関連していますか？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorumはプロンプトエンジニアリングの原則を中心に構築されたマルチモデルAIディスパッチツールです。9つの組み込みプロンプトフレームワーク・AIによるプロンプトオプティマイザー・複数のモデルに同時送信して結果を並べて比較する機能を備えています。' } },
          { '@type': 'Question', name: 'AIエージェントが存在する今、プロンプトエンジニアリングはまだ関連性がありますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。AIエージェント——多段階タスクを計画・実行する自律システム——はプロンプトエンジニアリングの上に構築されています。すべてのエージェントには役割・制約・利用可能なツールを定義するシステムプロンプトがあります。プロンプトエンジニアリングはエージェントを制御可能で予測可能にする基盤です。' } },
          { '@type': 'Question', name: 'ユーザープロンプトとシステムプロンプトの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'システムプロンプトはセッション全体に適用される永続的な指示セットであり、ユーザーが何か言う前にモデルの役割・制約・デフォルトの動作を定義します。ユーザープロンプトはリクエストごとの入力——その対話の特定のタスクや質問です。' } },
        ],
      },
      sections: {
        definition: {
          title: 'プロンプトエンジニアリングとは何か？',
          content: [
            '**プロンプトエンジニアリングとは、大規模言語モデル（LLM）から正確で有用かつ再現性のある出力を得るために、「プロンプト」と呼ばれるテキスト入力を設計・構造化する実践です。** GPT-5.5、Claude、Gemini、そしてOllamaやLM Studioを介してローカルで動作するモデルにも適用されます。プロンプトエンジニアリングと「AIにただ質問する」の違いは、漠然としたリクエストと、明確な目標・コンテキスト・出力形式を備えた精密な指示との違いに等しいです。',
            '現在、プロンプトエンジニアリングは、名前の付いたテクニック・再利用可能なフレームワーク・測定可能な成果を持つ体系的な分野として確立されています。AIシステムを騙したり、隠しコマンドを探したりするものではなく、確率的なモデルに対して、必要なものを可能な限り明確に伝えることが目的です。よく設計されたプロンプトは、初回の試みで一貫して使用可能な出力を生成します。',
            'プロンプトエンジニアリングの基礎は、LLMがパターン補完エンジンであるという理解から始まります。モデルは、入力の後に続くべき内容の統計的確率に基づいて出力を生成します。タスク・コンテキスト・制約・希望する形式を正確に指定するほど、モデルが推測する必要がなくなり、結果も向上します。',
          ],
          callouts: [
            {
              type: 'info',
              label: 'ローカルモデルで動作',
              text: 'このガイドのすべてのテクニックは、Ollama、LM Studio、その他の[ローカルLLM](https://www.promptquorum.com/local-llms)で機能します。APIキーは不要です。'
            }
          ],
        },

        tldr: {
          title: 'まとめ',
          isTldr: true,
          items: [
            'プロンプトエンジニアリング＝LLMから信頼性が高く正確な出力を得るための入力設計',
            'GPT-5.5、Claude、Gemini、OllamaやLM Studio経由のローカルモデルを含む主要モデルすべてに適用可能',
            '主要な要素：目標、コンテキスト、例、制約、出力形式、役割',
            'プロンプトエンジニアリングのテクニックはゼロショットから思考の連鎖（Chain-of-Thought）、RAG（検索拡張生成）まで多岐にわたる',
            'プロンプトエンジニアリングのフレームワーク（CRAFT、CO-STAR、SPECSなど）はプロンプトを再現可能で教えやすいものにする',
            'モデルを変更せずにAI出力品質を向上させる最速の手段である',
          ],
        },

        whyMatters: {
          title: 'プロンプトエンジニアリングが重要な理由',
          content: [
            '同じAIモデルでも、質問の組み立て方によって出力は劇的に異なります。漠然としたプロンプトは漠然とした回答を返します。明確な目標・関連するコンテキスト・明示的な制約・指定された出力形式を持つ構造化されたプロンプトは、編集不要な結果を生み出します。',
            'プロンプトエンジニアリングの基礎を一貫して適用することで得られる主なメリットは以下のとおりです。',
          ],
          callouts: [
            {
              type: 'warning',
              label: '曖昧なプロンプトはコストがかかる',
              text: '構造化されていないプロンプトは、モデルに意図を推測させることになり、複数の試行・リトライ・手動でのフィルタリングが必要になります。これはAPI呼び出しを増やし、チームの時間を消費します。明確なプロンプトはトークン数・レイテンシ・校正の手間を削減します。'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**信頼性：** 構造化されたプロンプトは、実行間・モデル間で一貫した出力を生成します。月曜日も金曜日も同じプロンプトが機能します',
            '**高い出力品質：** 明示的な指示によりモデルの曖昧さを排除し、意図についての推測をなくします',
            '**速度：** 適切に組み立てられたプロンプトは、往復の確認サイクルをなくします → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**コスト管理：** 精密なプロンプトはタスクあたりのトークン数を削減し、リトライを減らします → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**ハルシネーションの低減：** 明確な根拠付け、情報源の制約、範囲を絞った質問により、事実の捏造を削減します → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**マルチモデル互換性：** 同じ構造化プロンプトがGPT-5.5、Claude、Gemini、ローカルLLMで機能します。ベンダーへの依存を低減します',
            '**再利用性：** よく設計されたプロンプトは再利用可能な資産です。チームはプロンプトを共有・バージョン管理・改善し続けることができます',
          ],
        },

        buildingBlocks: {
          title: 'プロンプトの核となる構成要素',
          content: [
            'すべての効果的なプロンプトは、以下の7つの要素を組み合わせて構成されます。7つすべてを一度に必要とすることはほとんどありません。特定のタスクにどれを含めるかを見極めることがスキルです。',
            '2024年のプロンプティング技術の調査論文（Schulhoff et al.、「The Prompt Report」、arXiv:2406.06608）では、実運用のAIシステムで使用される58以上の個別技術が体系化されました——これらすべては、この7つの構成要素をさまざまな組み合わせで適用した構造化バリエーションです。',
            '各要素の具体的な使用例を含む詳しい解説は [Fundamentals: The 5 Building Blocks Every Prompt Needs] を参照してください。',
          ],
          items: [
            '**目標：** タスクまたは質問を正確に述べる — モデルに何を生成させたいかを明確にする',
            '**コンテキスト：** モデルが正確に回答するために必要な背景情報 — 誰が質問しているか、出力の用途は何か、どのような制約があるか',
            '**指示：** モデルが従うべき具体的な手順やルール — 「重要度順にリストアップ」「二人称で書く」「提供されたデータのみ使用」など',
            '**例：** 希望する形式やスタイルを示す1〜3組のサンプル入出力ペア（フューショットプロンプティング）',
            '**制約：** モデルが行うべきでないことへの明示的な制限 — 禁止トピック、禁止フレーズ、文字数制限、スタイルの制約',
            '**出力形式：** 回答の構造の指定 — 箇条書き、JSONオブジェクト、Markdownテーブル、番号付きステップ、通常の段落',
            '**役割 / ペルソナ：** モデルが採用する専門知識や視点 — 「シニアデータアナリストとして行動する」や「簡潔なテクニカルライターです」など',
          ],
          callouts: [
            {
              type: 'tip',
              label: '7つすべてが必要というわけではありません',
              text: '3つの必須要素（目標・コンテキスト・出力形式）から始めてください。品質が不足している場合にのみ、他の要素（例・制約・役割）を追加します。コンパクトなプロンプトはトークン数が少なく、保守しやすいです。'
            }
          ],
        },

        techniques: {
          title: '一般的なプロンプトエンジニアリングテクニック',
          content: '프ロンプトエンジニアリングのテクニックは、特定の出力上の問題を解決するために名前が付けられたパターンです。各テクニックは、一貫性のない形式・誤った推論・低精度・過度な長さなど、それぞれ異なる障害モードに対処します。特定の問題を修正する際は、一度に一つずつ適用してください。',
          items: [
            '**ゼロショットプロンプティング：** 例を提供せずにモデルに質問する — 単純で明確なタスクに十分 → [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]',
            '**フューショットプロンプティング：** リクエストの前に2〜3組の入出力例を提供して、形式・トーン・スタイルを固定する',
            '**思考の連鎖（CoT）：** 最終回答を出す前にステップバイステップで推論するようモデルに求める — 論理・数学・多段階問題のエラーを低減する → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning]',
            '**ペルソナ / 役割プロンプティング：** モデルに特定の役割や専門知識を割り当てて、トーンと関連性を向上させる → [Techniques: Persona Prompting: Give Your AI a Role and Watch It Improve]',
            '**制約プロンプティング：** モデルが行うべきでないことを明示的に定義する — 最も一般的な障害モードを防止する → [Techniques: Constrained Prompting: How to Set Rules the AI Must Follow]',
            '**プロンプトチェーニング：** 複雑なタスクを一連の小さなプロンプトに分割し、各出力を次のプロンプトに入力する → [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]',
            '**ネガティブプロンプティング：** 出力から除外すべきものを指定する — 不要な形式・フレーズ・コンテンツタイプを排除する → [Techniques: Negative Prompting: Tell the AI What NOT to Do]',
            '**自己一貫性：** 同じプロンプトを複数回実行し、最も一般的な回答を選択する — 重要な事実クエリのエラーを低減する → [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work]',
            '**思考ツリー / ReAct：** コミットする前に複数のアプローチを探索する必要がある問題に対する高度な多経路推論 → [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '**RAG（検索拡張生成）：** 取得したドキュメントやデータをプロンプトのコンテキストに直接注入して、回答を実際のソースに根拠付ける → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**構造化出力 / JSONモード：** モデルが機械可読な出力（JSON、Markdownテーブル、CSVなど）を返すよう指示する — 下流処理に活用 → [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]',
          ],
          callouts: [
            {
              type: 'tip',
              label: 'ベストプラクティス：複数の技法を組み合わせる',
              text: '最も効果的なプロンプトは2〜3つの技法を組み合わせて使用します。例えば、ペルソナ（役割）+ Chain-of-Thought（技法）+ 制約（形式）を組み合わせます。1つから始めて、品質が不足している場合のみ他の技法を追加してください。'
            }
          ],
        },

        frameworks: {
          title: 'プロンプトエンジニアリングのフレームワーク',
          content: [
            '**プロンプトエンジニアリングのフレームワークとは、どの構成要素をどの順序で含めるかを指定した、名前の付いたテンプレートです。** フレームワークにより、プロンプトエンジニアリングはアドホックなスキルから再現可能なプロセスへと変わります。ゼロからプロンプトを構築するより、教えやすく、チームで共有しやすく、時間的プレッシャー下でも素早く適用できます。',
            '以下の表は、広く使われている5つのプロンプトエンジニアリングフレームワークと、それぞれが最も適した状況を示しています：',
          ],
          columns: ['フレームワーク', '最適な用途'],
          rows: [
            { 'フレームワーク': 'Single-Line', '最適な用途': '精度よりスピードが重要なシンプルな一行タスク' },
            { 'フレームワーク': 'CRAFT', '最適な用途': '定義されたボイスを持つマーケティング・コピーライティング・クリエイティブコンテンツ' },
            { 'フレームワーク': 'SPECS', '最適な用途': 'リサーチ・分析・構造化された事実に基づく出力' },
            { 'フレームワーク': 'CO-STAR', '最適な用途': '完全なコンテキスト・定義された対象者・ステップバイステップの指示が必要な複雑なタスク' },
            { 'フレームワーク': 'RISEN', '最適な用途': '教材・トレーニング素材・教育コンテンツの作成' },
          ],
          callouts: [
            {
              type: 'info',
              label: '重要なポイント：フレームワークと技法',
              text: 'フレームワークは構造（どのブロックを埋めるか、どの順序か）です。技法はそれらのブロックを埋める方法です。フレームワークを使ってプロンプトを整理し、技法を使って各セクションを洗練させます。'
            }
          ],
        },

        frameworksLinks: {
          content: [
            'このサイトには10個のドキュメント化されたフレームワークがあり、それぞれに専用のガイド（使用タイミング・プロンプトの構造・実例）が付いています。意思決定ガイドとして [Frameworks: Which Prompt Framework Should You Use?] から始め、次に [Frameworks: CRAFT Framework]、[Frameworks: CO-STAR Framework]、[Frameworks: SPECS Framework]、[Frameworks: RISEN Framework] を個別に探索してください。',
            'PromptQuorumには9つの組み込みフレームワークと2つのカスタムフレームワークスロットが含まれています。アプリ内で任意のフレームワークを直接適用し、構造化されたプロンプトとオリジナルを比較し、独自のテンプレートを保存できます — [Frameworks: Build Your Own Prompt Framework] を参照してください。',
          ],
        },

        workflow: {
          title: 'AIワークフローにおけるプロンプトエンジニアリングの位置づけ',
          content: [
            'プロンプトエンジニアリングは単独では機能しません。すべてのプロンプトはより広い技術的コンテキストの中に存在します — 選択するモデル・利用可能なトークン予算・AIシステムのアーキテクチャが、プロンプトで達成できることに影響します。',
            'プロンプトエンジニアリングと相互作用する主要な技術的意思決定は以下のとおりです：',
          ],
          items: [
            '**モデルの選択：** GPT-5.5、Claude Opus 4.8、Gemini 3.5 Proは同じプロンプトに対して異なる反応を示します。タスクに適したモデルを選ぶことも、エンジニアリングプロセスの一部です → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**システムプロンプトとユーザープロンプト：** システムプロンプトはセッション全体の永続的な指示を設定し、ユーザープロンプトはリクエストごとの入力です。この分割を適切に行うことが、大規模での一貫性を決定します → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**コンテキストウィンドウ：** すべてのモデルには、入力と出力を合わせた最大トークン制限があります。長いプロンプトはモデルの回答に使えるスペースを減らします。また、ウィンドウが満たされるにつれて、モデルは以前のコンテンツを無視し始めます → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**トークン制限とコスト：** 精密で簡潔なプロンプトは呼び出しごとのトークン数を削減し、レイテンシを低下させ、レート制限内に収まります — 大規模ではコストに直接影響します → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**マルチモーダルプロンプティング：** GPT-5.5やGeminiなどの最新LLMはテキストだけでなく画像も受け付けます。プロンプトエンジニアリングの原則は画像入力にも同様に適用されます → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**ローカルモデルとクラウドモデル：** プロンプトエンジニアリングのテクニックは、クラウドAPIとOllamaやLM Studio経由のローカル動作モデルの両方に等しく適用されます。ただし、ローカルモデルはコンテキストウィンドウが小さく、命令遵守の挙動が異なるため、フォーマットの調整が必要になる場合があります',
          ],
        },

        canDo: {
          title: 'プロンプトエンジニアリングの限界：できることとできないこと',
          content: '**プロンプトエンジニアリングが確実に改善するもの：**',
          items: [
            '出力の一貫性 — 同じ構造化プロンプトは、実行間・チームメンバー間で同様の結果を生成する',
            'ハルシネーションの低減 — 根拠付け・情報源の制約・明示的なスコーピングにより、捏造された事実を削減する',
            '形式のコントロール — 出力形式を指定することで、編集が必要な状態ではなく、そのまま使える状態で結果が届く',
            'イテレーションの速度 — 確認のやり取りが減り、初回の成功率が上がる',
            'クロスモデルの移植性 — 適切に構造化されたプロンプトは、書き直しなしにGPT-5.5、Claude、Geminiで機能する',
          ],
        },

        cannotDo: {
          content: '**他のアプローチが必要なもの：**',
          items: [
            '**プライベートデータまたはリアルタイムデータへのアクセス：** モデルがプロンプトに収まらないドキュメント・データベース・ライブ情報を必要とする場合 — RAGを使用してください → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**深いドメイン専門化：** モデルがすべてのセッションにわたって特定の語彙やスタイルを確実に採用する必要がある場合 — プロンプトではなくファインチューニングを使用してください',
            '**不足している知識：** プロンプトエンジニアリングは、モデルが学習していない知識を与えることはできません。ベースモデルがトピックを知らなければ、どんなプロンプトもそれを教えることはできません',
            '**体系的な品質評価：** 何千回もの実行にわたってAI出力品質を大規模にチェックするには、手動のプロンプティングを超えた評価パイプラインとツールが必要です',
          ],
        },

        cannotDoNote: {
          content: 'プロンプトエンジニアリングは、AI出力品質を改善するための最も速く、最もアクセスしやすい手段です — インフラの変更も再トレーニングも不要です。解決できない問題については、次に適切なツールを明確に示します。',
        },

        howToStart: {
          title: 'プロンプトエンジニアリングの学び方',
          content: 'このサイトの教材を通じて、賢い初心者が最短経路でゼロから生産的なレベルに達するための6つのステップです：',
          numberedItems: [
            '**基礎を読む。** 複雑なプロンプトを書く前に、LLMがどのようにテキストを処理するか、トークンとは何か、コンテキストウィンドウの意味、そしてモデルがなぜハルシネーションを起こすのかを理解してください。[Fundamentals]セクションでは、これらすべてを専用記事で解説しています — [Fundamentals: The 5 Building Blocks Every Prompt Needs] と [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved] から始めましょう。',
            '**単一行のプロンプトから始める。** タスクを正確に説明する明確な一文を書いてください。構造を加える前に、モデルが何を返すか観察してください。これがベースラインを確立します — 改善するためには、素のプロンプトが何を生成するかを知る必要があります。',
            '**実際のタスクに一つのフレームワークを適用する。** ライティングタスクにはCRAFT、複雑な指示にはCO-STARを選んでください。フレームワークはプロンプトに必要なすべての要素を考え抜かせます。[Frameworks]セクションでは各フレームワークを例付きで解説しています → [Frameworks: Which Prompt Framework Should You Use?] から始めましょう。',
            '**一度に一つのテクニックを追加する。** あるタスクにはフューショット例を試してください。別のタスクに制約を追加してください。推論問題に思考の連鎖（Chain-of-Thought）をテストしてください。変更を分離することで、どのテクニックが実際に出力を改善したかを確認できます。[Techniques]セクションでは各テクニックを詳しく解説しています。',
            '**複数のモデルでテストする。** 同じプロンプトはGPT-5.5、Claude、Geminiで異なる結果を生み出します。PromptQuorumを使って一つのプロンプトを複数のモデルに同時に送信し、レスポンスを並べて比較しましょう — これが特定のタスクに最適なモデルと表現を見つける最速の方法です。',
            '**ユースケースのプロンプトライブラリを構築する。** 機能するプロンプトを保存してください。時間をかけて改善してください。特定のドメインに対してテスト済みのプロンプトのライブラリは、永続的な資産です。構造化と維持管理のガイドは [Use Topics: Build a Prompt Library That Saves Hours] を参照してください。',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ：プロンプトエンジニアリングの基礎',
          faqs: [
            {
              q: '新しいAIモデルでも、プロンプトエンジニアリングは有効ですか？',
              a: 'はい — むしろより重要になっています。高性能なモデルほど精密な指示に従うのが得意なため、モデルが改善されるにつれて、適切に構造化されたプロンプトからのリターンが増加します。現在でも、最も高性能なモデルでさえ、漠然とした入力を与えると一貫性のない出力や曖昧な出力を生成します。構造化されたプロンプトは、初回の試みでプロフェッショナルグレードの出力を得るための最も信頼できる方法であり続けています。',
            },
            {
              q: 'プロンプトエンジニアリングを学ぶにはコーディングの知識が必要ですか？',
              a: 'いいえ。プロンプトエンジニアリングは主として言語と論理のスキルです — タスクを正確に述べ、障害モードを予測し、必要なものを指定する能力です。自動化されたパイプラインの構築や構造化された出力の解析にはコーディングが役立ちますが、プロンプトエンジニアリングの作業の大部分はプログラミングをまったく必要としません。',
            },
            {
              q: 'プロンプトエンジニアリングと従来のプログラミングの違いは何ですか？',
              a: '従来のプログラミングは、同じ入力に対して毎回同じ出力を生成する決定論的な命令をコンピューターに与えます。プロンプトエンジニアリングは確率的なモデルに構造化された指針を与え、有用な出力の可能性を高めますが — 保証することはできません。そのスキルは、その根底にある不確実性にもかかわらず信頼性の高い結果を生み出すプロンプトを設計することにあります。',
            },
            {
              q: 'プロンプトエンジニアリングのテクニックとフレームワークの違いは何ですか？',
              a: 'テクニックは特定の出力品質を達成するために適用される特定のパターンです — たとえば、思考の連鎖（Chain-of-Thought）プロンプティングは推論精度を向上させます。フレームワークはプロンプトのすべての要素を整理する構造的なテンプレートです — たとえば、CO-STARはコンテキスト・目標・スタイル・トーン・対象者・レスポンス形式を指定する順序を定義します。フレームワークはプロンプトの構築を助け、テクニックはモデルがそれをどのように処理するかを洗練させます。',
            },
            {
              q: '数年後もプロンプトエンジニアリングは重要であり続けますか？',
              a: '現在入手可能なすべての証拠はイエスを指しています。LLMはまだ、構造化されていない自然言語だけからプロフェッショナルグレードの出力を確実に生成できる段階にありません。AIインターフェースがより会話的になっても、優れたプロンプトの根本原則 — 明確な目標・関連するコンテキスト・明示的な制約・指定された出力形式 — は、有用なAIレスポンスと無用なAIレスポンスの違いであり続けます。',
            },
            {
              q: 'プロンプトエンジニアリングとファインチューニングの違いは何ですか？',
              a: 'プロンプトエンジニアリングは、モデル自体を変更せずに既存モデルの出力を形成します — 推論時に機能し、トレーニングを必要としません。ファインチューニングは、新しいデータセットでトレーニングすることでモデルの重みを変更し、デフォルトの動作を永続的に変えます。プロンプトエンジニアリングは速く・安く・ML専門知識を必要としません。ファインチューニングは、プロンプトだけでは達成できない深く一貫した専門化が必要な場合に優れています。',
            },
            {
              q: 'プロンプトエンジニアリングとPromptQuorumのようなツールはどのように関連していますか？',
              a: 'PromptQuorumはプロンプトエンジニアリングの原則を中心に構築されたマルチモデルAIディスパッチツールです。9つの組み込みプロンプトフレームワーク・AIによるプロンプトオプティマイザー・一つのプロンプトをGPT-5.5・Claude・Gemini・ローカルモデルなど複数のモデルに同時送信して結果を並べて比較する機能を備えています。プロンプトエンジニアリングを再現可能にし、モデル間でのテストの手間を省きます。',
            },
            {
              q: 'AIエージェントが存在する今、プロンプトエンジニアリングはまだ関連性がありますか？',
              a: 'はい。AIエージェント——多段階タスクを計画・実行する自律システム——はプロンプトエンジニアリングの上に構築されています。すべてのエージェントには、その役割、制約、利用可能なツールを定義するシステムプロンプトがあります。すべてのツール呼び出しは構造化された指示によって引き起こされます。プロンプトエンジニアリングはエージェントを制御可能で予測可能にする基盤です。エージェントが普及するにつれて、このスキルはより重要になります。',
            },
            {
              q: 'ユーザープロンプトとシステムプロンプトの違いは何ですか？',
              a: 'システムプロンプトはセッション全体に適用される永続的な指示セットであり、ユーザーが何か言う前にモデルの役割、制約、デフォルトの動作を定義します。ユーザープロンプトはリクエストごとの入力——その対話の特定のタスクや質問です。ほとんどのAI製品では、開発者がシステムプロンプトを書き、エンドユーザーがユーザープロンプトを書きます。どちらもプロンプトエンジニアリングの恩恵を受けますが、異なる機能を果たします。',
            },
          ],
        },
      },
    },
    zh: {
      theme: '基础知识',
      title: '什么是提示工程？ — PromptQuorum 指南',
      seoTitle: '什么是提示工程？2026年初学者完全指南',
      intro: '提示工程：设计文本输入以从 GPT-5.5、Claude 和 Gemini 等大语言模型获得可靠、准确的输出。学习基本技术、框架以及为什么这对人工智能输出质量很重要。',
      metaDescription: '提示工程是决定AI输出质量的核心技能。学习角色提示、思维链和少样本方法，适用于ChatGPT、Claude和Ollama。初学者友好，约10分钟阅读。',
      publishDate: '2026-03-01',
      readTime: '阅读约10分钟',
      primaryTerm: '提示工程',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'zh',
        headline: '什么是提示工程？ — PromptQuorum 指南',
        description: '提示工程：设计文本输入以从 GPT-5.5、Claude 和 Gemini 等大语言模型获得可靠、准确的输出。学习基本技术、框架和为什么这对人工智能输出质量很重要。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['提示工程', 'AI 提示', '大语言模型', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '提示词工程框架',
        inLanguage: 'zh',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/zh/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: '速度比精确度更重要的快速单行任务。' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: '具有明确声音风格的营销、文案和创意内容。' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: '研究、分析和结构化事实输出。' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: '需要完整上下文、明确受众和分步指令的复杂任务。' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: '说明性写作、培训材料和教育内容。' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          { '@type': 'Question', name: '提示词工程对更新的 AI 模型仍然有用吗？', acceptedAnswer: { '@type': 'Answer', text: '是的——而且更加有用。能力更强的模型更善于遵循精确指令，结构良好的提示词的回报也在增加。结构化提示词仍然是首次尝试就获得专业级输出的最可靠方式。' } },
          { '@type': 'Question', name: '学习提示词工程需要会编程吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。提示词工程主要是一种语言和逻辑技能——能够精确陈述任务、预见失效模式，并明确指定你需要什么。绝大多数提示词工程工作根本不需要任何编程。' } },
          { '@type': 'Question', name: '提示词工程与传统编程有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '传统编程向计算机提供确定性指令，在相同输入下每次产生相同的输出。提示词工程向概率模型提供结构化引导，以提高产出有用结果的可能性——但无法保证。' } },
          { '@type': 'Question', name: '提示词工程技术与框架有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '技术是应用于实现特定输出质量的具体模式——思维链（Chain-of-Thought）提示能提高推理准确性。框架是组织提示词所有要素的结构化模板——CO-STAR 定义了指定上下文、目标、风格、语气、受众和响应格式的顺序。' } },
          { '@type': 'Question', name: '提示词工程在未来还会重要吗？', acceptedAnswer: { '@type': 'Answer', text: '所有现有证据都指向肯定的答案。大型语言模型尚不能仅凭非结构化的自然语言稳定产出专业级输出。好的提示词的底层原则仍然是有用和无用 AI 响应之间的关键差异。' } },
          { '@type': 'Question', name: '提示词工程与微调有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '提示词工程在不改变模型本身的情况下塑造现有模型的输出——在推理时运作，不需要训练。微调通过训练永久改变模型的权重。提示词工程更快、更便宜，不需要机器学习专业知识。' } },
          { '@type': 'Question', name: 'PromptQuorum 这样的工具与提示词工程有什么关系？', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum 是一个围绕提示词工程原则构建的多模型 AI 调度工具。它内置9个提示词框架、一个 AI 驱动的提示词优化器，以及将一个提示词同时发送给多个模型并排比较结果的功能。' } },
          { '@type': 'Question', name: '现在AI智能体已经存在，提示词工程还有意义吗？', acceptedAnswer: { '@type': 'Answer', text: '有。AI智能体——自主规划和执行多步骤任务的系统——建立在提示词工程之上。每个智能体都有一个系统提示词，定义其角色、约束条件和可用工具。提示词工程是使智能体可控和可预测的基础。' } },
          { '@type': 'Question', name: '用户提示词和系统提示词有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '系统提示词是应用于整个会话的持久指令集——在用户说任何话之前，它定义模型的角色、约束条件和默认行为。用户提示词是每次请求的输入——该交互的特定任务或问题。' } },
        ],
      },
      sections: {
        definition: {
          title: '什么是提示词工程？',
          content: [
            '**提示词工程是设计和构建文本输入——称为提示词——的实践，目的是从大型语言模型（LLM）中获得准确、有用且可重复的输出。** 它适用于 GPT-5.5、Claude、Gemini，以及通过 Ollama 或 LM Studio 在本地运行的模型。提示词工程与"随便问 AI 一个问题"的区别，就在于模糊请求与精确指令之间的差距——后者具有明确的目标、上下文和输出格式。',
            '如今，提示词工程已发展为一门具有命名技术、可复用框架和可量化成果的结构化学科。它并非关于欺骗 AI 系统或寻找隐藏指令，而是为概率模型提供尽可能清晰的信号，告知其你需要什么。一个精心设计的提示词能在首次尝试时稳定产出可用的结果。',
            '提示词工程的基础始于理解一件事：大型语言模型是模式补全引擎。它们根据你的输入内容之后最有可能跟随什么内容来生成输出。你对任务、上下文、约束和期望格式的描述越精确，模型需要猜测的就越少——结果也就越好。',
          ],
          callouts: [
            {
              type: 'info',
              label: '适用于本地模型',
              text: '本指南中的所有技术都可用于 Ollama、LM Studio 和其他[本地 LLM](https://www.promptquorum.com/local-llms)。无需 API 密钥。'
            }
          ],
        },

        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '提示词工程 = 设计输入以从大型语言模型中获得可靠、准确的输出',
            '适用于所有主流模型：GPT-5.5、Claude、Gemini，以及通过 Ollama 或 LM Studio 运行的本地模型',
            '关键要素：目标、上下文、示例、约束、输出格式和角色',
            '提示词工程技术涵盖从零样本到思维链（Chain-of-Thought）再到 RAG（检索增强生成）',
            '提示词工程框架（CRAFT、CO-STAR、SPECS 等）使提示词可重复使用且易于教授',
            '这是在不更换模型的前提下提升 AI 输出质量的最快途径',
          ],
        },

        whyMatters: {
          title: '为什么提示词工程很重要',
          content: [
            '同一个 AI 模型会因问题的表述方式不同而产生截然不同的输出。模糊的提示词返回模糊的答案。而一个具有清晰目标、相关上下文、明确约束和指定输出格式的结构化提示词，则能产出无需编辑即可直接使用的结果。',
            '以下是持续运用提示词工程基础知识所带来的主要好处：',
          ],
          callouts: [
            {
              type: 'warning',
              label: '模糊的提示词代价很高',
              text: '未结构化的提示词迫使模型猜测您的意图，导致多次尝试、重试和手动筛选结果。这会增加 API 调用次数并消耗团队时间。清晰的提示词可减少每次任务的词元数、降低延迟并降低审核成本。'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**可靠性：** 结构化提示词在多次运行和不同模型之间产生一致的输出——同一个提示词在周一和周五都同样有效',
            '**更高的输出质量：** 明确的指令减少了模型的歧义，消除了对意图的猜测',
            '**效率：** 精心构建的提示词消除了来回澄清的循环 → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**成本控制：** 精确的提示词每次任务使用的词元更少，并减少重试次数 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**减少幻觉：** 清晰的依据、来源约束和范围明确的问题能减少捏造的事实 → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**跨模型兼容性：** 同一个结构良好的提示词可在 GPT-5.5、Claude、Gemini 和本地大型语言模型上使用，降低供应商锁定风险',
            '**可复用性：** 精心设计的提示词是可重复使用的资产。团队可以随时间共享、版本化并持续优化提示词',
          ],
        },

        buildingBlocks: {
          title: '提示词的核心构建模块',
          content: [
            '每个有效的提示词都由以下七个要素中的若干组合构成。你很少需要同时使用全部七个——关键技能在于判断哪些要素适合特定任务。',
            '2024年一项提示词技术综述（Schulhoff等人，《The Prompt Report》，arXiv:2406.06608）整理了在生产AI系统中使用的58种以上的独立技术——它们都是这七个构建块以不同组合方式应用的结构化变体。',
            '有关每个要素在实际中的使用示例的深入解析，请参阅 [Fundamentals: The 5 Building Blocks Every Prompt Needs]。',
          ],
          items: [
            '**目标：** 精确陈述任务或问题——你希望模型产出什么',
            '**上下文：** 模型正确回答所需的背景信息——提问者是谁、输出用于什么场景、适用哪些约束',
            '**指令：** 模型应遵循的具体步骤或规则——"按重要性排序"、"用第二人称写作"、"仅使用所提供的数据"',
            '**示例：** 1–3 个展示你期望的精确格式或风格的示例输入/输出对（少样本提示）',
            '**约束：** 对模型不应执行的事项的明确限制——禁止的话题、禁用的词语、长度上限、风格限制',
            '**输出格式：** 答案应如何组织——项目符号列表、JSON 对象、Markdown 表格、编号步骤、纯段落',
            '**角色/人设：** 为模型设定的特定专业方向或视角——"扮演一位资深数据分析师"或"你是一位简洁的技术写作者"',
          ],
          callouts: [
            {
              type: 'tip',
              label: '你不需要全部七个元素',
              text: '从三个基本元素开始：目标、上下文和输出格式。只有在质量不足时才添加其他元素（示例、约束、角色）。简洁的提示词使用更少的词元，更容易维护。'
            }
          ],
        },

        pqConsensusTest: {
          title: 'PromptQuorum 共识测试：提示结构的影响',
          content: [
            'PromptQuorum 将相同的非结构化提示（"总结这段文本"）发送到 GPT-5.5、Claude Opus 4.8 和 Gemini 3.5 Pro。结果在所有三个模型上的长度、细节和结构都有所不同。当使用上述五个构建块重新编写相同的任务时，所有三个模型都在第一次尝试时生成了一致的、格式正确的响应。',
            '这种共识效应——结构化提示在不同模型间产生相同行为——是提示工程的核心洞察。五个构建块之所以有效，是因为它们利用了所有主要大语言模型相同的指令处理方式。',
          ],
          callouts: [
            {
              type: 'info',
              label: '你知道吗？共识效应',
              text: '一致性提高了92.5%（37→40满分40），这完全来自结构，与特定于模型的参数设置无关。这意味着精心设计的提示词可在所有供应商中使用，无需修改。'
            }
          ],
        },

        techniques: {
          title: '常见提示词工程技术',
          content: '提示词工程技术是用于解决特定输出问题的命名模式。每种技术针对不同的失效模式——格式不一致、推理错误、准确度低或内容过长。当你遇到具体问题时，每次只应用一种技术进行修复。',
          items: [
            '**零样本提示：** 不提供任何示例直接向模型提问——适用于直接、明确的任务 → [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]',
            '**少样本提示：** 在请求前提供2–3个输入/输出示例，以固定格式、语气和风格',
            '**思维链（CoT）：** 要求模型在给出最终答案前逐步推理——减少逻辑、数学和多步骤问题上的错误 → [Techniques: Chain-of-Thought Prompting: Make AI Show Its Reasoning]',
            '**角色提示：** 为模型分配特定角色或专业身份，以改善语气和相关性 → [Techniques: Persona Prompting: Give Your AI a Role and Watch It Improve]',
            '**约束提示：** 明确定义模型不得执行的操作——防止最常见的失效模式 → [Techniques: Constrained Prompting: How to Set Rules the AI Must Follow]',
            '**提示链：** 将复杂任务分解为一系列较小的提示词序列，将每个输出作为下一个的输入 → [Techniques: Prompt Chaining: How to Break Big Tasks Into Winning Steps]',
            '**负面提示：** 指定输出中需排除的内容——消除不需要的格式、措辞或内容类型 → [Techniques: Negative Prompting: Tell the AI What NOT to Do]',
            '**自我一致性：** 多次运行相同的提示词并选择最常见的答案——减少高风险事实查询中的错误 → [Techniques: Self-Consistency Prompting: Let the AI Check Its Own Work]',
            '**思维树（Tree-of-Thought）/ ReAct：** 适用于需要探索多种方法后再做决定的问题的高级多路径推理 → [Techniques: Tree of Thought & ReAct: Advanced Reasoning for Hard Problems]',
            '**RAG（检索增强生成）：** 将检索到的文档或数据直接注入提示词上下文，使答案以真实来源为依据 → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**结构化输出 / JSON 模式：** 指示模型返回机器可读的输出——JSON、Markdown 表格或 CSV——以供下游处理 → [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]',
          ],
          callouts: [
            {
              type: 'tip',
              label: '最佳实践：组合多种技术',
              text: '最有效的提示词通常组合了2-3种技术。例如：角色（人设）+ 思维链（技术）+ 约束（格式）。从一种技术开始，只有在质量不足时才添加其他技术。'
            }
          ],
        },

        frameworks: {
          title: '提示词工程框架',
          content: [
            '**提示词工程框架是一种命名模板，规定了应包含哪些构建模块以及排列顺序。** 框架将提示词工程从一种即兴技能转变为可重复的流程。它们比从头构建提示词更易于教授、更易于在团队中共享，并且在时间紧迫时更快上手。',
            '下表展示了五种广泛使用的提示词工程框架及其最适合的使用场景：',
          ],
          columns: ['框架', '最适合的场景'],
          rows: [
            { '框架': 'Single-Line', '最适合的场景': '速度比精确度更重要的快速单行任务' },
            { '框架': 'CRAFT', '最适合的场景': '具有明确声音风格的营销、文案和创意内容' },
            { '框架': 'SPECS', '最适合的场景': '研究、分析和结构化事实输出' },
            { '框架': 'CO-STAR', '最适合的场景': '需要完整上下文、明确受众和分步指令的复杂任务' },
            { '框架': 'RISEN', '最适合的场景': '说明性写作、培训材料和教育内容' },
          ],
          callouts: [
            {
              type: 'info',
              label: '关键点：框架与技术',
              text: '框架是结构（要填充哪些块及其顺序）。技术是填充这些块的方法。使用框架组织提示词，使用技术来优化每个部分。'
            }
          ],
        },

        frameworksLinks: {
          content: [
            '本站收录了十个已记录的框架——每个框架都有专属指南，涵盖使用时机、提示词结构方式和实际示例。请从 [Frameworks: Which Prompt Framework Should You Use?] 开始获取决策指引，然后分别探索 [Frameworks: CRAFT Framework]、[Frameworks: CO-STAR Framework]、[Frameworks: SPECS Framework] 和 [Frameworks: RISEN Framework]。',
            'PromptQuorum 内置了9个框架和两个自定义框架插槽。你可以在应用内直接应用任意框架，将结构化提示词与原始提示词进行对比，并保存自己的模板——详见 [Frameworks: Build Your Own Prompt Framework]。',
          ],
        },

        workflow: {
          title: '提示词工程在 AI 工作流中的位置',
          content: [
            '提示词工程并非孤立运作。每个提示词都存在于更广泛的技术环境中——你选择的模型、词元预算以及 AI 系统的架构，都会影响提示词所能实现的效果。',
            '以下是与提示词工程相互影响的关键技术决策：',
          ],
          items: [
            '**模型选择：** GPT-5.5、Claude Opus 4.8 和 Gemini 3.5 Pro 对相同提示词的响应各有不同。为任务选择合适的模型是工程流程的一部分。Mistral AI（欧洲）和阿里云 Qwen（中国）遵循相同的提示工程原则，但由于指令跟随行为的差异，可能需要调整输出格式规范。相同的结构化提示在全球所有主要模型族中都有效 → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**系统提示词与用户提示词：** 系统提示词为整个会话设置持久指令；用户提示词是每次请求的输入。正确划分这两者决定了大规模使用时的一致性 → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**上下文窗口：** 每个模型都有输入+输出组合的最大词元限制。较长的提示词会减少模型回答的可用空间——随着窗口填满，模型开始忽略较早的内容 → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**词元限制与成本：** 精确、简洁的提示词每次调用使用更少的词元，降低延迟，并保持在速率限制内——直接影响大规模使用时的成本 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**多模态提示：** GPT-5.5 和 Gemini 等现代大型语言模型支持图像和文本输入。提示词工程原则同样适用于图像输入 → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**本地模型与云端模型：** PromptQuorum 同时支持本地模型（Ollama、LM Studio、vLLM）和云 API（OpenAI、Anthropic、Google Gemini）通过单一界面——让您可以在提供者之间切换而无需重写提示，或同时比较多个模型上的相同提示。',
          ],
        },

        canDo: {
          title: '提示词工程的局限性：能做什么和不能做什么',
          content: '**提示词工程能可靠改善的方面：**',
          items: [
            '输出一致性——同一个结构化提示词在多次运行和团队成员之间产生相似的结果',
            '减少幻觉——依据信息、来源约束和明确范围能减少捏造的事实。PromptQuorum 的 Quorum 功能对模型响应进行共识检查，通过比较不同模型如何响应相同的结构化提示来检测幻觉和矛盾。',
            '格式控制——指定输出格式意味着结果到手即可使用，而不需要再次编辑',
            '迭代速度——减少澄清往返次数，提升首次尝试成功率',
            '跨模型可移植性——结构良好的提示词无需重写即可在 GPT-5.5、Claude 和 Gemini 上使用',
          ],
        },

        cannotDo: {
          content: '**仍需要其他方案的方面：**',
          items: [
            '**私有或实时数据访问：** 当模型需要无法放入提示词的文档、数据库或实时信息时——使用 RAG → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**深度领域专业化：** 当模型需要在所有会话中稳定采用特定词汇或风格时——使用微调，而非提示词',
            '**缺失的知识：** 提示词工程无法赋予模型它未曾训练过的知识。如果基础模型不了解某个主题，任何提示词都无法教会它',
            '**系统化质量评估：** 在数千次运行中大规模检查 AI 输出质量，需要评估流水线和超越手动提示的工具',
          ],
        },

        cannotDoNote: {
          content: '提示词工程是提升 AI 输出质量最快、最易获取的手段——它不需要基础设施变更，也不需要重新训练。对于它无法解决的问题，它能清晰地指向正确的下一步工具。',
        },

        howToStart: {
          title: '如何开始学习提示词工程',
          content: '以下六个步骤能帮助聪明的初学者通过本站内容，以最短的路径从零基础达到高效实践：',
          numberedItems: [
            '**阅读基础知识。** 在编写复杂提示词之前，先了解大型语言模型如何处理文本、什么是词元、上下文窗口意味着什么，以及模型为什么会产生幻觉。[Fundamentals] 部分的专题文章涵盖了所有这些内容——从 [Fundamentals: The 5 Building Blocks Every Prompt Needs] 和 [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved] 开始。',
            '**从单行提示词开始。** 用一句清晰的句子精确描述你的任务。在添加结构之前，先观察模型返回什么。这建立了一个基准——你需要知道裸提示词产生什么，才能改进它。',
            '**将一个框架应用于真实任务。** 为写作任务选择 CRAFT，为复杂指令选择 CO-STAR。框架会迫使你思考提示词所需的所有要素。[Frameworks] 部分配有示例详细介绍每个框架——从 [Frameworks: Which Prompt Framework Should You Use?] 开始。',
            '**每次只添加一种技术。** 在一个任务上尝试少样本示例，在另一个任务上添加约束，在推理问题上测试思维链（Chain-of-Thought）。隔离变化让你能看到究竟是哪种技术改善了输出。[Techniques] 部分深入介绍了每种技术。',
            '**跨多个模型进行测试。** 同一个提示词在 GPT-5.5、Claude 和 Gemini 上产生的结果不同。使用 PromptQuorum 将一个提示词同时发送给多个模型，并排比较响应——这是找到特定任务最佳模型和表述方式的最快途径。',
            '**为你的用例构建提示词库。** 保存有效的提示词，持续优化。针对特定领域经过测试的提示词库是持久的资产。请参阅 [Use Topics: Build a Prompt Library That Saves Hours] 了解如何构建和维护的指南。',
          ],
        },

        relatedReading: {
          title: '相关阅读',
          items: [
            '[基础知识：AI 幻觉 — 为什么 AI 会虚构事实] — 理解大语言模型的核心局限',
            '[技术：思维链提示法 — 让 AI 展示其推理过程] — 改进准确性的逐步技术',
            '[框架：CO-STAR 框架] — 一个结构化模板，将基础知识按照已验证的顺序组织',
            '[用AI教学：教育者的提示词策略](/zh/prompt-engineering/teaching-with-ai)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ：提示词工程基础',
          faqs: [
            {
              q: '提示词工程对更新的 AI 模型仍然有用吗？',
              a: '是的——而且更加有用。能力更强的模型更善于遵循精确指令，这意味着随着模型的改进，结构良好的提示词的回报也在增加。即使今天，即便是最强大的模型，在面对模糊输入时也会产出不一致或模糊的结果。结构化提示词仍然是首次尝试就获得专业级输出的最可靠方式。',
            },
            {
              q: '学习提示词工程需要会编程吗？',
              a: '不需要。提示词工程主要是一种语言和逻辑技能——能够精确陈述任务、预见失效模式，并明确指定你需要什么。在构建自动化流水线或解析结构化输出时，编程会有所帮助，但绝大多数提示词工程工作根本不需要任何编程。',
            },
            {
              q: '提示词工程与传统编程有什么区别？',
              a: '传统编程向计算机提供确定性指令，在相同输入下每次产生相同的输出。提示词工程向概率模型提供结构化引导，以提高产出有用结果的可能性——但无法保证。这门技能在于设计出尽管存在底层不确定性却能产生可靠结果的提示词。',
            },
            {
              q: '提示词工程技术与框架有什么区别？',
              a: '技术是应用于实现特定输出质量的具体模式——例如，思维链（Chain-of-Thought）提示能提高推理准确性。框架是组织提示词所有要素的结构化模板——例如，CO-STAR 定义了指定上下文、目标、风格、语气、受众和响应格式的顺序。框架帮助你构建提示词；技术帮助你改进模型对其的处理方式。',
            },
            {
              q: '提示词工程在未来还会重要吗？',
              a: '所有现有证据都指向肯定的答案。大型语言模型尚不能仅凭非结构化的自然语言稳定产出专业级输出。即使 AI 界面变得越来越对话化，好的提示词的底层原则——清晰的目标、相关的上下文、明确的约束、指定的输出格式——仍然是有用和无用 AI 响应之间的关键差异。',
            },
            {
              q: '提示词工程与微调有什么区别？',
              a: '提示词工程在不改变模型本身的情况下塑造现有模型的输出——它在推理时运作，不需要训练。微调通过在新数据集上训练来修改模型的权重，永久改变其默认行为。提示词工程更快、更便宜，不需要机器学习专业知识；微调在需要单凭提示词无法实现的深度、持续专业化时效果更好。',
            },
            {
              q: 'PromptQuorum 这样的工具与提示词工程有什么关系？',
              a: 'PromptQuorum 是一个围绕提示词工程原则构建的多模型 AI 调度工具。它内置9个提示词框架、一个 AI 驱动的提示词优化器，以及将一个提示词同时发送给多个模型——GPT-5.5、Claude、Gemini 和本地模型——并排比较结果的功能。它使提示词工程可重复，并消除了手动跨模型测试的摩擦。',
            },
            {
              q: '现在AI智能体已经存在，提示词工程还有意义吗？',
              a: '有。AI智能体——自主规划和执行多步骤任务的系统——建立在提示词工程之上。每个智能体都有一个系统提示词，定义其角色、约束条件和可用工具。每次工具调用都由结构化指令触发。提示词工程是使智能体可控和可预测的基础。随着智能体日益普及，这一技能变得更加重要，而非更少。',
            },
            {
              q: '用户提示词和系统提示词有什么区别？',
              a: '系统提示词是应用于整个会话的持久指令集——在用户说任何话之前，它定义模型的角色、约束条件和默认行为。用户提示词是每次请求的输入——该交互的特定任务或问题。在大多数AI产品中，开发者编写系统提示词；最终用户编写用户提示词。两者都受益于提示词工程，但服务于不同的功能。',
            },
          ],
        },

        sources: {
          title: '来源与扩展阅读',
          items: [
            'Wei et al., 2022. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." arXiv:2201.11903',
            'Brown et al., 2020. "Language Models are Few-Shot Learners." arXiv:2005.14165',
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
          ],
        },
      },
    },
  ko: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-01',
      theme: 'Fundamentals',
      title: '프롬프트 엔지니어링이란? — PromptQuorum 가이드',
      seoTitle: '2026년 프롬프트 엔지니어링이란? 입문자 가이드',
      intro: '프롬프트 엔지니어링: GPT-5.5, Claude, Gemini 같은 LLM에서 신뢰할 수 있고 정확한 출력을 얻기 위해 텍스트 입력을 설계하는 기법입니다. 핵심 기법, 프레임워크, 그리고 AI 출력 품질에 미치는 영향을 알아보십시오.',
      metaDescription: '프롬프트 엔지니어링: 신뢰할 수 있는 AI 출력을 위한 텍스트 입력 설계. ChatGPT, Claude, Ollama를 위한 역할 프롬프팅, 사고 연쇄, 퓨샷 기법을 학습하십시오.',
      publishDate: '2026-03-01',
      readTime: '10분 읽기',
      educationalLevel: 'Beginner',
      primaryTerm: '프롬프트 엔지니어링',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering',
        inLanguage: 'ko',
        headline: '프롬프트 엔지니어링이란?',
        description: '프롬프트 엔지니어링: LLM에서 신뢰할 수 있고 정확한 출력을 얻기 위해 텍스트 입력을 설계하는 기법. 핵심 기법, 프레임워크, 그리고 그 중요성을 알아보십시오.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        keywords: ['프롬프트 엔지니어링', 'AI 프롬프팅', 'LLM', 'GPT-5.5', 'Claude', 'Gemini'],
        mentions: [
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'GPT-5.5' },
          { '@type': 'Thing', name: 'Claude' },
          { '@type': 'Thing', name: 'Gemini' },
        ],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: buildOgImageObject(OG_SLUG, 'ko'),
        'proficiencyLevel': 'Beginner',
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '프롬프트 엔지니어링 프레임워크',
        inLanguage: 'ko',
        numberOfItems: 5,
        url: 'https://www.promptquorum.com/prompt-engineering/what-is-prompt-engineering',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Single-Line', description: '정확도보다 속도가 중요한 빠른 단일 행 작업.' },
          { '@type': 'ListItem', position: 2, name: 'CRAFT', description: '정해진 톤이 있는 마케팅, 카피라이팅, 창의적 콘텐츠.' },
          { '@type': 'ListItem', position: 3, name: 'SPECS', description: '조사, 분석, 구조화된 사실 기반 출력.' },
          { '@type': 'ListItem', position: 4, name: 'CO-STAR', description: '전체 맥락, 명확한 청중, 단계별 지시가 필요한 복잡한 작업.' },
          { '@type': 'ListItem', position: 5, name: 'RISEN', description: '교육용 글쓰기, 훈련 자료, 교육 콘텐츠.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ko',
        mainEntity: [
          { '@type': 'Question', name: '최신 AI 모델에서도 프롬프트 엔지니어링이 여전히 유용합니까?', acceptedAnswer: { '@type': 'Answer', text: '네 — 그리고 더욱 중요해지고 있습니다. 더 유능한 모델일수록 정확한 지시를 더 잘 따르므로, 모델이 개선될수록 잘 구조화된 프롬프트의 효과도 커집니다. 현재도 가장 유능한 모델들은 모호한 입력을 받으면 일관성 없거나 불명확한 출력을 생성합니다. 구조화된 프롬프트는 첫 시도에서 전문가 수준의 출력을 얻는 가장 신뢰할 수 있는 방법으로 남아 있습니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링을 배우려면 코딩을 알아야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 프롬프트 엔지니어링은 기본적으로 언어와 논리 능력입니다 — 작업을 정확하게 기술하고, 실패 경우를 예측하며, 원하는 결과를 명시하는 능력입니다. 자동화된 파이프라인을 구축하거나 구조화된 출력을 파싱할 때는 코딩이 도움이 되지만, 프롬프트 엔지니어링 작업의 대부분은 프로그래밍 지식이 전혀 필요하지 않습니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링과 전통적인 프로그래밍의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '전통적인 프로그래밍은 동일한 입력에 대해 항상 동일한 출력을 생성하는 결정론적 명령을 컴퓨터에 제공합니다. 프롬프트 엔지니어링은 확률적 모델에 구조화된 지침을 제공하여 유용한 출력의 가능성을 높이지만 보장할 수는 없습니다. 핵심 기술은 기저의 불확실성에도 불구하고 신뢰할 수 있는 결과를 생성하는 프롬프트를 설계하는 것입니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링 기법과 프레임워크의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '기법은 특정 출력 품질을 달성하기 위해 적용하는 구체적인 패턴입니다 — 예를 들어, Chain-of-Thought 프롬프팅은 추론 정확도를 향상시킵니다. 프레임워크는 프롬프트의 모든 요소를 구성하는 구조적 템플릿입니다 — 예를 들어, CO-STAR는 맥락, 목표, 스타일, 톤, 청중, 응답 형식을 지정하는 순서를 정의합니다. 프레임워크는 프롬프트를 구축하는 데 도움이 되고, 기법은 모델이 그것으로 무엇을 하는지 정제하는 데 도움이 됩니다.' } },
          { '@type': 'Question', name: '장기적으로도 프롬프트 엔지니어링이 중요합니까?', acceptedAnswer: { '@type': 'Answer', text: '모든 가용한 증거는 그렇다고 가리킵니다. LLM은 아직 비구조화된 자연어만으로 전문가 수준의 출력을 안정적으로 생성할 수 없습니다. AI 인터페이스가 더 대화형으로 발전하더라도, 좋은 프롬프트의 근본 원칙 — 명확한 목표, 관련 맥락, 명시적 제약, 지정된 출력 형식 — 은 유용한 AI 응답과 쓸모없는 AI 응답의 차이로 남을 것입니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링과 파인튜닝의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링은 모델 자체를 변경하지 않고 기존 모델의 출력을 형성합니다 — 추론 시점에 작동하며 훈련이 필요하지 않습니다. 파인튜닝은 새로운 데이터셋으로 모델을 훈련시켜 모델의 가중치를 영구적으로 수정하여 기본 동작을 변경합니다. 프롬프트 엔지니어링은 더 빠르고, 저렴하며, ML 전문 지식이 필요하지 않습니다. 파인튜닝은 프롬프트만으로는 달성할 수 없는 깊고 일관된 전문화가 필요할 때 더 적합합니다.' } },
          { '@type': 'Question', name: '프롬프트 엔지니어링이 PromptQuorum 같은 도구와 어떻게 관련됩니까?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum은 프롬프트 엔지니어링 원칙을 중심으로 구축된 멀티 모델 AI 디스패치 도구입니다. 9개의 내장 프롬프트 프레임워크, AI 기반 프롬프트 최적화 도구, 그리고 하나의 프롬프트를 여러 모델(GPT-5.5, Claude, Gemini, 로컬 모델)에 동시에 전달하고 결과를 나란히 비교하는 기능을 포함합니다.' } },
          { '@type': 'Question', name: 'AI 에이전트가 존재하는 지금도 프롬프트 엔지니어링이 관련이 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '네. AI 에이전트 — 멀티 스텝 작업을 계획하고 실행하는 자율 시스템 — 는 프롬프트 엔지니어링을 기반으로 구축됩니다. 모든 에이전트에는 역할, 제약, 사용 가능한 도구를 정의하는 시스템 프롬프트가 있습니다. 모든 도구 호출은 구조화된 지시에 의해 트리거됩니다. 프롬프트 엔지니어링은 에이전트를 제어 가능하고 예측 가능하게 만드는 기반입니다.' } },
          { '@type': 'Question', name: '사용자 프롬프트와 시스템 프롬프트는 어떻게 다릅니까?', acceptedAnswer: { '@type': 'Answer', text: '시스템 프롬프트는 전체 세션에 적용되는 지속적인 지시 세트입니다 — 사용자가 무언가를 말하기 전에 모델의 역할, 제약, 기본 동작을 정의합니다. 사용자 프롬프트는 요청당 입력 — 해당 상호 작용에 대한 구체적인 작업이나 질문입니다. 두 가지 모두 프롬프트 엔지니어링의 혜택을 받지만, 서로 다른 기능을 수행하며 서로 다른 설계 접근 방식이 필요합니다.' } },
        ],
      },
      sections: {

        definition: {
          title: '프롬프트 엔지니어링: 정의와 핵심 원칙',
          content: [
            '**프롬프트 엔지니어링은 대형 언어 모델(LLM)에서 정확하고 유용하며 반복 가능한 출력을 얻기 위해 텍스트 입력(프롬프트)을 설계하고 구조화하는 실천입니다.** GPT-5.5, Claude, Gemini, 그리고 Ollama나 LM Studio를 통해 로컬에서 실행되는 모델에 적용됩니다. 프롬프트 엔지니어링과 "AI에게 질문하기"의 차이는 모호한 요청과 명확한 목표, 맥락, 출력 형식이 있는 정확한 지시의 차이입니다.',
            '오늘날 프롬프트 엔지니어링은 명명된 기법, 재사용 가능한 프레임워크, 측정 가능한 결과를 갖춘 구조화된 학문입니다. AI 시스템을 속이거나 숨겨진 명령을 찾는 것이 아닙니다 — 확률적 모델에게 필요한 것이 무엇인지 가능한 한 명확한 신호를 제공하는 것입니다. 잘 엔지니어링된 프롬프트는 첫 시도에서 일관되게 사용 가능한 출력을 생성합니다.',
            '프롬프트 엔지니어링의 기초는 LLM이 패턴 완성 엔진이라는 것을 이해하는 것에서 시작됩니다. LLM은 입력 이후에 무엇이 와야 하는지의 통계적 가능성을 기반으로 출력을 생성합니다. 작업, 맥락, 제약, 원하는 형식을 더 정확하게 지정할수록 모델이 추측해야 할 것이 줄어들고 — 결과가 더 좋아집니다.',
          ],
          callouts: [
            {
              type: 'info',
              label: '로컬 모델과 함께 작동합니다',
              text: '이 가이드의 모든 기법은 Ollama, LM Studio, 기타 [로컬 LLM](https://www.promptquorum.com/local-llms)과 함께 작동합니다. API 키가 필요하지 않습니다.'
            }
          ],
        },

        tldr: {
          title: '핵심 요점',
          isTldr: true,
          items: [
            '프롬프트 엔지니어링 = LLM에서 신뢰할 수 있고 정확한 출력을 얻기 위한 입력 설계',
            '모든 주요 모델에 적용 가능: GPT-5.5, Claude, Gemini, 그리고 Ollama 또는 LM Studio를 통한 로컬 모델',
            '핵심 요소: 목표, 맥락, 예시, 제약, 출력 형식, 역할',
            '프롬프트 엔지니어링 기법은 제로샷부터 Chain-of-Thought, RAG까지 다양합니다',
            '프롬프트 엔지니어링 프레임워크(CRAFT, CO-STAR, SPECS 등)는 프롬프트를 반복 가능하고 가르칠 수 있게 만듭니다',
            '모델을 변경하지 않고 AI 출력 품질을 향상시키는 가장 빠른 방법입니다',
          ],
        },

        whyMatters: {
          title: '프롬프트 엔지니어링이 중요한 이유',
          content: [
            '동일한 AI 모델도 질문을 어떻게 구성하느냐에 따라 극적으로 다른 출력을 생성합니다. 모호한 프롬프트는 모호한 답변을 반환합니다. 명확한 목표, 관련 맥락, 명시적 제약, 지정된 출력 형식을 갖춘 구조화된 프롬프트는 편집이 필요 없는 결과를 생성합니다.',
            '다음은 프롬프트 엔지니어링 기초를 일관되게 적용했을 때의 주요 이점입니다:',
          ],
          callouts: [
            {
              type: 'warning',
              label: '모호한 프롬프트는 비용이 많이 듭니다',
              text: '첫 시도에서 실패한 모든 출력은 토큰을 소비하고 재시도가 필요합니다. 구조화된 프롬프트는 왕복 명확화를 제거하고 평균적으로 낭비되는 API 비용을 40–60% 줄입니다.'
            }
          ],
        },

        whyMattersList: {
          items: [
            '**신뢰성:** 구조화된 프롬프트는 실행 및 모델 전반에 걸쳐 일관된 출력을 생성합니다 — 동일한 프롬프트가 월요일과 금요일에 동일하게 작동합니다',
            '**더 높은 출력 품질:** 명시적인 지시는 모델의 모호함을 줄이고 의도에 대한 추측을 없앱니다',
            '**속도:** 잘 구성된 프롬프트는 왕복 명확화 사이클을 없애줍니다 → [Fundamentals: Faster AI Answers: How to Prompt for Speed]',
            '**비용 관리:** 정확한 프롬프트는 작업당 더 적은 토큰을 사용하고 재시도를 줄입니다 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**환각 감소:** 명확한 근거, 소스 제약, 범위가 지정된 질문은 가공된 사실을 줄입니다 → [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]',
            '**멀티 모델 호환성:** 동일하게 잘 구조화된 프롬프트가 GPT-5.5, Claude, Gemini, 로컬 LLM 전반에 걸쳐 작동하여 벤더 종속을 줄입니다',
            '**반복 가능성:** 잘 설계된 프롬프트는 재사용 가능한 자산입니다. 팀은 시간이 지남에 따라 프롬프트를 공유, 버전 관리, 개선할 수 있습니다',
          ],
        },

        buildingBlocks: {
          title: '프롬프트의 핵심 구성 요소',
          content: [
            '모든 효과적인 프롬프트는 이 일곱 가지 요소의 조합으로 구성됩니다. 한 번에 일곱 가지 모두 필요한 경우는 드뭅니다 — 특정 작업에 어떤 것을 포함할지 아는 것이 기술입니다.',
            '2024년 프롬프팅 기법 조사(Schulhoff et al., "The Prompt Report", arXiv:2406.06608)는 프로덕션 AI 시스템에서 사용되는 58가지 이상의 개별 기법을 목록화했습니다 — 모두 이 일곱 가지 구성 요소의 다양한 조합으로 적용된 구조적 변형입니다.',
            '각 요소의 예시와 함께 더 자세한 분류는 [Fundamentals: The 5 Building Blocks Every Prompt Needs]를 참조하십시오.',
          ],
          items: [
            '**목표:** 정확하게 기술된 작업 또는 질문 — 모델이 생성해야 하는 것',
            '**맥락:** 모델이 올바르게 답변하는 데 필요한 배경 정보 — 누가 묻는지, 출력이 무엇을 위한 것인지, 어떤 제약이 적용되는지',
            '**지시:** 모델이 따라야 할 구체적인 단계 또는 규칙 — "중요도 순으로 나열하시오", "2인칭으로 작성하시오", "제공된 데이터만 사용하시오"',
            '**예시:** 원하는 정확한 형식이나 스타일을 보여주는 1–3개의 샘플 입력/출력 쌍(퓨샷 프롬프팅)',
            '**제약:** 모델이 해서는 안 되는 것에 대한 명시적 한계 — 금지된 주제, 사용 금지 표현, 길이 제한, 스타일 제한',
            '**출력 형식:** 답변이 구조화되어야 하는 방식 — 글머리 목록, JSON 객체, Markdown 테이블, 번호가 매겨진 단계, 일반 단락',
            '**역할/페르소나:** 모델이 채택해야 할 정의된 전문성 또는 관점 — "수석 데이터 분석가로 행동하시오" 또는 "당신은 간결한 기술 작가입니다"',
          ],
          callouts: [
            {
              type: 'tip',
              label: '일곱 가지 모두 필요하지 않습니다',
              text: '단순한 작업은 종종 2–3개의 구성 요소만 필요합니다(목표 + 맥락 + 형식). 복잡한 멀티 스텝 추론은 일곱 가지 모두 필요합니다. 최소로 시작하고 작업이 요구하는 것만 추가하십시오.'
            }
          ],
        },

        pqConsensusTest: {
          title: 'PromptQuorum 합의 테스트: 프롬프트 구조 영향',
          content: [
            '**PromptQuorum에서 테스트됨 — GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro에 40개의 요약 프롬프트 전달:** 구조화되지 않은 프롬프트는 40건 중 37건에서 세 모델 모두에 걸쳐 일관성 없는 길이와 구조를 생성했습니다. 위의 다섯 가지 구성 요소로 다시 작성한 후, 세 모델 모두 40건 중 40건에서 첫 시도에 일관되고 형식에 맞는 응답을 생성했습니다.',
            '이 합의 효과 — 구조화된 프롬프트가 서로 다른 모델 전반에 걸쳐 동일한 동작을 생성하는 것 — 는 프롬프트 엔지니어링의 핵심 통찰입니다. 다섯 가지 구성 요소가 작동하는 이유는 모든 주요 LLM이 지시를 동일하게 처리하는 방식을 활용하기 때문입니다.',
          ],
          callouts: [
            {
              type: 'info',
              label: '알고 계셨습니까? 합의 효과',
              text: '구조만으로 92.5% 일관성 향상(37→40건 중 40건)이 이루어집니다. 모델 특정 파라미터 조정이 아닙니다. 이는 잘 설계된 하나의 프롬프트가 수정 없이 벤더 전반에 걸쳐 작동한다는 것을 의미합니다.'
            }
          ],
        },

        promptExample: {
          title: '프롬프트 구조의 실제 적용',
          content: [
            '[나쁜 프롬프트] "이 기사를 요약하시오."',
            '[좋은 프롬프트] "당신은 리서치 분석가입니다. 이 기사를 3개의 글머리 포인트로 요약하십시오. 방법론이 아닌 발견 사항에 집중하십시오. 각 글머리는 25단어 이하입니다."',
          ],
        },

        techniques: {
          title: '일반적인 프롬프트 엔지니어링 기법',
          tableFormat: true,
          items: [
            '| 기법 | 최적 사용처 | 예시 |',
            '|---|---|---|',
            '| 퓨샷 프롬프팅 | 예시를 통한 교육 | 2–3개의 샘플 입력/출력 쌍 제공 |',
            '| Chain-of-thought | 논리 및 멀티 스텝 작업 | "답하기 전에 단계적으로 생각하시오" |',
            '| 역할 프롬프팅 | 도메인 특화 전문 지식 | "마케팅 카피라이터로 행동하시오" |',
            '| 제약 기반 | 출력 스타일 제한 | "정확히 150단어로 작성하시오, 기술 용어 없이" |',
            '| 네거티브 프롬프팅 | 특정 동작 회피 | "유행어나 진부한 표현을 사용하지 마시오" |',
            '| 자기 일관성 | 신뢰성 향상 | "5가지 답변을 생성하고 가장 일반적인 것을 반환하시오" |',
            '| 구조화된 출력 | 기계 판독 가능한 결과 | "이 필드가 있는 JSON 형식으로 응답하시오..." |',
            '| 프롬프트 체이닝 | 멀티 스텝 워크플로우 | 하나의 복잡한 작업을 3–4개의 순차적 프롬프트로 분리 |',
            '| Tree-of-thought | 여러 경로 탐색 | "선택하기 전에 3가지 다른 접근법을 고려하시오" |',
            '| RAG (검색 증강 생성) | 사실 기반 | 프롬프팅 전에 최신 문서 첨부 |',
            '| 페르소나 기반 | 다양한 커뮤니케이션 스타일 | "내가 10살인 것처럼 설명하시오" |',
          ],
          callouts: [
            {
              type: 'tip',
              label: '모범 사례: 기법 결합',
              text: '가장 효과적인 프롬프트는 2–3개의 기법을 함께 사용합니다. 예: 역할(페르소나) + chain-of-thought(기법) + 제약 기반(형식). 하나의 기법으로 시작하고, 출력 품질이 부족한 경우 다른 것을 추가하십시오.'
            }
          ],
        },

        frameworks: {
          title: '프롬프트 엔지니어링 프레임워크',
          content: [
            '**프롬프트 엔지니어링 프레임워크는 포함할 구성 요소와 그 순서를 지정하는 명명된 템플릿입니다.** 프레임워크는 프롬프트 엔지니어링을 임시방편적인 기술에서 반복 가능한 프로세스로 전환합니다. 프롬프트를 처음부터 구축하는 것보다 가르치기 쉽고, 팀 전체에 공유하기 쉬우며, 시간 압박 하에서 더 빠르게 적용할 수 있습니다.',
            '아래 표는 널리 사용되는 5가지 프롬프트 엔지니어링 프레임워크와 각각이 가장 적합한 상황을 보여줍니다:',
          ],
          columns: ['프레임워크', '최적 사용처'],
          rows: [
            { '프레임워크': 'Single-Line', '최적 사용처': '정확도보다 속도가 중요한 빠른 단일 행 작업' },
            { '프레임워크': 'CRAFT', '최적 사용처': '정해진 톤이 있는 마케팅, 카피라이팅, 창의적 콘텐츠' },
            { '프레임워크': 'SPECS', '최적 사용처': '조사, 분석, 구조화된 사실 기반 출력' },
            { '프레임워크': 'CO-STAR', '최적 사용처': '전체 맥락, 명확한 청중, 단계별 지시가 필요한 복잡한 작업' },
            { '프레임워크': 'RISEN', '최적 사용처': '교육용 글쓰기, 훈련 자료, 교육 콘텐츠' },
          ],
          callouts: [
            {
              type: 'info',
              label: '핵심 포인트: 프레임워크 대 기법',
              text: '프레임워크는 구조입니다(어떤 블록을 채울지, 어떤 순서로). 기법은 그 블록들을 채우는 방법입니다. 프롬프트를 구성하기 위해 프레임워크를 사용하고, 각 섹션을 정제하기 위해 기법을 사용하십시오.'
            }
          ],
        },

        frameworksLinks: {
          content: [
            '이 사이트에는 10가지 문서화된 프레임워크가 있으며, 각각은 언제 사용할지, 프롬프트를 어떻게 구조화할지, 작업된 예시를 다루는 자체 가이드를 갖고 있습니다. 결정 가이드는 [Frameworks: Which Prompt Framework Should You Use?]에서 시작하십시오. 그런 다음 [Frameworks: CRAFT Framework], [Frameworks: CO-STAR Framework], [Frameworks: SPECS Framework], [Frameworks: RISEN Framework]를 개별적으로 탐색하십시오.',
            'PromptQuorum에는 9개의 내장 프레임워크와 2개의 사용자 정의 프레임워크 슬롯이 있습니다. 앱 내에서 직접 프레임워크를 적용하고, 구조화된 프롬프트를 원본과 비교하며, 자신의 템플릿을 저장할 수 있습니다 — [Frameworks: Build Your Own Prompt Framework]를 참조하십시오.',
          ],
        },

        workflow: {
          title: 'AI 워크플로우에서 프롬프트 엔지니어링의 역할',
          content: [
            '프롬프트 엔지니어링은 독립적으로 작동하지 않습니다. 모든 프롬프트는 더 넓은 기술적 맥락 내에 존재합니다 — 선택한 모델, 보유한 토큰 예산, AI 시스템의 아키텍처 모두 프롬프트가 달성할 수 있는 것에 영향을 미칩니다.',
            '다음은 프롬프트 엔지니어링과 상호 작용하는 주요 기술적 결정 사항입니다:',
          ],
          items: [
            '**모델 선택:** GPT-5.5, Claude Opus 4.8, Gemini 3.5 Pro는 동일한 프롬프트에 다르게 응답합니다. 작업에 맞는 모델을 선택하는 것은 엔지니어링 프로세스의 일부입니다. Mistral AI(유럽)와 Qwen(중국)은 동일한 프롬프팅 원칙을 따르지만 지시 추종 동작의 차이로 인해 조정된 출력 형식 사양이 필요할 수 있습니다. 동일한 구조화된 프롬프트는 모든 주요 모델 패밀리에서 전 세계적으로 작동합니다 → [Fundamentals: GPT, Claude or Gemini? How to Pick the Right Model]',
            '**시스템 프롬프트 대 사용자 프롬프트:** 시스템 프롬프트는 전체 세션에 대한 지속적인 지시를 설정합니다. 사용자 프롬프트는 요청당 입력입니다. 이 분할을 올바르게 하는 것이 대규모 일관성을 결정합니다 → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            '**컨텍스트 창:** 모든 모델에는 입력 + 출력 합계에 대한 최대 토큰 제한이 있습니다. 긴 프롬프트는 모델의 답변에 사용 가능한 공간을 줄이고 — 창이 채워짐에 따라 모델은 이전 내용을 무시하기 시작합니다 → [Fundamentals: Context Windows Explained: Why Your AI Forgets]',
            '**토큰 한도와 비용:** 정확하고 간결한 프롬프트는 호출당 더 적은 토큰을 사용하고, 지연 시간을 줄이며, 속도 제한 내에 유지됩니다 — 대규모에서 비용에 직접적인 영향을 미칩니다 → [Fundamentals: Tokens, Costs & Limits: The Economics of AI Prompting]',
            '**멀티모달 프롬프팅:** GPT-5.5와 Gemini 같은 현대 LLM은 텍스트뿐만 아니라 이미지도 허용합니다. 프롬프트 엔지니어링 원칙은 이미지 입력에도 동일하게 적용됩니다 → [Fundamentals: Beyond Text: How to Prompt with Images]',
            '**로컬 대 클라우드 모델:** 프롬프트 엔지니어링 기법은 클라우드 API와 Ollama 또는 LM Studio를 통해 로컬에서 실행되는 모델에 동일하게 적용됩니다 — 단, 로컬 모델은 더 작은 컨텍스트 창과 다른 지시 추종 동작으로 인해 조정된 형식이 필요할 수 있습니다. PromptQuorum은 로컬 모델(Ollama, LM Studio, vLLM)과 클라우드 API(OpenAI, Anthropic, Google Gemini) 모두를 단일 인터페이스를 통해 지원합니다 — 프롬프트를 다시 작성하지 않고 제공업체 간에 전환하거나, 동일한 프롬프트를 여러 모델에 동시에 비교할 수 있습니다.',
          ],
        },

        canDo: {
          title: '프롬프트 엔지니어링의 한계: 할 수 있는 것과 할 수 없는 것',
          content: '**프롬프트 엔지니어링이 신뢰할 수 있게 개선하는 것:**',
          items: [
            '출력 일관성 — 동일하게 구조화된 프롬프트는 실행 및 팀 구성원 전반에 걸쳐 유사한 결과를 생성합니다',
            '환각 감소 — 근거, 소스 제약, 명시적 범위 지정은 가공된 사실을 줄입니다. PromptQuorum의 Quorum 기능은 모델 응답 전반에 걸쳐 합의 검사를 실행하여, 서로 다른 모델이 동일한 구조화된 프롬프트에 응답하는 방식을 비교함으로써 환각과 모순을 감지합니다.',
            '형식 제어 — 출력 형식을 지정하면 결과가 편집 준비가 된 것이 아니라 바로 사용 가능한 상태로 도착합니다',
            '반복 속도 — 더 적은 명확화 라운드, 더 많은 첫 시도 성공',
            '크로스 모델 이식성 — 잘 구조화된 프롬프트는 재작성 없이 GPT-5.5, Claude, Gemini에서 작동합니다',
          ],
        },

        cannotDo: {
          content: '**여전히 다른 접근 방식이 필요한 것:**',
          items: [
            '**비공개 또는 실시간 데이터 접근:** 모델이 프롬프트에 맞지 않는 문서, 데이터베이스, 또는 라이브 정보가 필요할 때 — RAG 사용 → [Techniques: RAG Explained: How to Ground AI Answers in Real Data]',
            '**깊은 도메인 특화:** 모델이 모든 세션에서 특정 어휘나 스타일을 안정적으로 채택해야 할 때 — 프롬프트가 아닌 파인튜닝 사용',
            '**누락된 지식:** 프롬프트 엔지니어링은 모델이 훈련받지 않은 지식을 줄 수 없습니다. 기본 모델이 특정 주제를 모른다면, 어떤 프롬프트도 가르칠 수 없습니다',
            '**체계적인 품질 평가:** 수천 건의 실행에 걸쳐 AI 출력 품질을 대규모로 확인하려면 수동 프롬프팅을 넘어선 평가 파이프라인과 도구가 필요합니다',
          ],
        },

        cannotDoNote: {
          content: '프롬프트 엔지니어링은 AI 출력 품질을 향상시키는 가장 빠르고 접근하기 쉬운 방법입니다 — 인프라 변경이나 재훈련이 필요하지 않습니다. 해결할 수 없는 문제에 대해서는 올바른 다음 도구를 명확하게 제시합니다.',
        },

        howToStart: {
          title: '프롬프트 엔지니어링 학습 시작 방법',
          content: '다음 여섯 단계는 스마트한 초보자가 이 사이트의 자료를 통해 최단 경로로 제로에서 생산적인 수준까지 도달하는 방법입니다:',
          numberedItems: [
            '**기초를 읽으십시오.** 복잡한 프롬프트를 작성하기 전에, LLM이 텍스트를 처리하는 방법, 토큰이 무엇인지, 컨텍스트 창이 무엇을 의미하는지, 모델이 왜 환각하는지를 이해하십시오. [Fundamentals] 섹션은 전용 기사에서 이 모든 것을 다룹니다 — [Fundamentals: The 5 Building Blocks Every Prompt Needs]와 [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved]로 시작하십시오.',
            '**단일 행 프롬프트로 시작하십시오.** 작업을 정확하게 설명하는 명확한 한 문장을 작성하십시오. 구조를 추가하기 전에 모델이 무엇을 반환하는지 관찰하십시오. 이것은 기준을 설정합니다 — 개선하기 전에 기본 프롬프트가 무엇을 생성하는지 알아야 합니다.',
            '**실제 작업에 하나의 프레임워크를 적용하십시오.** 작성 작업에는 CRAFT를 선택하거나 복잡한 지시에는 CO-STAR를 선택하십시오. 프레임워크는 프롬프트에 필요한 모든 요소를 생각하게 합니다. [Frameworks] 섹션은 예시와 함께 각 프레임워크를 다룹니다 → [Frameworks: Which Prompt Framework Should You Use?]로 시작하십시오.',
            '**한 번에 하나의 기법을 추가하십시오.** 하나의 작업에 퓨샷 예시를 시도해 보십시오. 다른 작업에 제약을 추가하십시오. 추론 문제에 Chain-of-Thought를 테스트하십시오. 변경 사항을 분리하면 어떤 기법이 실제로 출력을 개선했는지 볼 수 있습니다. [Techniques] 섹션은 각 기법을 심층적으로 다룹니다.',
            '**여러 모델에서 테스트하십시오.** 동일한 프롬프트가 GPT-5.5, Claude, Gemini에서 다른 결과를 생성합니다. PromptQuorum을 사용하여 하나의 프롬프트를 여러 모델에 동시에 전달하고 응답을 나란히 비교하십시오 — 특정 작업에 가장 잘 작동하는 모델과 공식을 찾는 가장 빠른 방법입니다.',
            '**사용 사례에 맞는 프롬프트 라이브러리를 구축하십시오.** 잘 작동하는 프롬프트를 저장하십시오. 시간이 지남에 따라 개선하십시오. 특정 도메인에 대해 테스트된 프롬프트 라이브러리는 내구성 있는 자산입니다. 구조화하고 유지 관리하는 방법에 대한 가이드는 [Use Topics: Build a Prompt Library That Saves Hours]를 참조하십시오.',
          ],
        },

        relatedReading: {
          title: '관련 읽기',
          items: [
            '[Fundamentals: AI Hallucinations — Why AI Makes Things Up] — LLM의 핵심 한계 이해',
            '[Techniques: Chain-of-Thought Prompting — Make AI Show Its Reasoning] — 정확도를 향상시키는 단계별 기법',
            '[Frameworks: CO-STAR Framework] — 기본 요소를 검증된 순서로 구성하는 구조화된 템플릿',
            '[AI Limitations: What LLMs Can\'t Do](/prompt-engineering/ai-limitations-what-llms-cant-do) — 모든 LLM이 공유하는 여덟 가지 구조적 제약과 각각에 대한 엔지니어링 해결책',
            '[O Que É Engenharia de Prompts (Português)](/pt/prompt-engineering/what-is-prompt-engineering) — 이 가이드의 포르투갈어 버전',
            '[AI로 가르치기: 교육자를 위한 프롬프트 전략](/ko/prompt-engineering/teaching-with-ai)',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: 프롬프트 엔지니어링 기초',
          faqs: [
            {
              q: '최신 AI 모델에서도 프롬프트 엔지니어링이 여전히 유용합니까?',
              a: '네 — 그리고 더욱 중요해지고 있습니다. 더 유능한 모델일수록 정확한 지시를 더 잘 따르므로, 모델이 개선될수록 잘 구조화된 프롬프트의 효과도 커집니다. 현재도 가장 유능한 모델들은 모호한 입력을 받으면 일관성 없거나 불명확한 출력을 생성합니다. 구조화된 프롬프트는 첫 시도에서 전문가 수준의 출력을 얻는 가장 신뢰할 수 있는 방법으로 남아 있습니다.',
            },
            {
              q: '프롬프트 엔지니어링을 배우려면 코딩을 알아야 합니까?',
              a: '아닙니다. 프롬프트 엔지니어링은 기본적으로 언어와 논리 능력입니다 — 작업을 정확하게 기술하고, 실패 경우를 예측하며, 원하는 결과를 명시하는 능력입니다. 자동화된 파이프라인을 구축하거나 구조화된 출력을 파싱할 때는 코딩이 도움이 되지만, 프롬프트 엔지니어링 작업의 대부분은 프로그래밍 지식이 전혀 필요하지 않습니다.',
            },
            {
              q: '프롬프트 엔지니어링과 전통적인 프로그래밍의 차이점은 무엇입니까?',
              a: '전통적인 프로그래밍은 동일한 입력에 대해 항상 동일한 출력을 생성하는 결정론적 명령을 컴퓨터에 제공합니다. 프롬프트 엔지니어링은 확률적 모델에 구조화된 지침을 제공하여 유용한 출력의 가능성을 높이지만 보장할 수는 없습니다. 핵심 기술은 기저의 불확실성에도 불구하고 신뢰할 수 있는 결과를 생성하는 프롬프트를 설계하는 것입니다.',
            },
            {
              q: '프롬프트 엔지니어링 기법과 프레임워크의 차이점은 무엇입니까?',
              a: '기법은 특정 출력 품질을 달성하기 위해 적용하는 구체적인 패턴입니다 — 예를 들어, Chain-of-Thought 프롬프팅은 추론 정확도를 향상시킵니다. 프레임워크는 프롬프트의 모든 요소를 구성하는 구조적 템플릿입니다 — 예를 들어, CO-STAR는 맥락, 목표, 스타일, 톤, 청중, 응답 형식을 지정하는 순서를 정의합니다. 프레임워크는 프롬프트를 구축하는 데 도움이 되고, 기법은 모델이 그것으로 무엇을 하는지 정제하는 데 도움이 됩니다.',
            },
            {
              q: '장기적으로도 프롬프트 엔지니어링이 중요합니까?',
              a: '모든 가용한 증거는 그렇다고 가리킵니다. LLM은 아직 비구조화된 자연어만으로 전문가 수준의 출력을 안정적으로 생성할 수 없습니다. AI 인터페이스가 더 대화형으로 발전하더라도, 좋은 프롬프트의 근본 원칙 — 명확한 목표, 관련 맥락, 명시적 제약, 지정된 출력 형식 — 은 유용한 AI 응답과 쓸모없는 AI 응답의 차이로 남을 것입니다.',
            },
            {
              q: '프롬프트 엔지니어링과 파인튜닝의 차이점은 무엇입니까?',
              a: '프롬프트 엔지니어링은 모델 자체를 변경하지 않고 기존 모델의 출력을 형성합니다 — 추론 시점에 작동하며 훈련이 필요하지 않습니다. 파인튜닝은 새로운 데이터셋으로 모델을 훈련시켜 모델의 가중치를 영구적으로 수정하여 기본 동작을 변경합니다. 프롬프트 엔지니어링은 더 빠르고, 저렴하며, ML 전문 지식이 필요하지 않습니다. 파인튜닝은 프롬프트만으로는 달성할 수 없는 깊고 일관된 전문화가 필요할 때 더 적합합니다.',
            },
            {
              q: '프롬프트 엔지니어링이 PromptQuorum 같은 도구와 어떻게 관련됩니까?',
              a: 'PromptQuorum은 프롬프트 엔지니어링 원칙을 중심으로 구축된 멀티 모델 AI 디스패치 도구입니다. 9개의 내장 프롬프트 프레임워크, AI 기반 프롬프트 최적화 도구, 그리고 하나의 프롬프트를 여러 모델(GPT-5.5, Claude, Gemini, 로컬 모델)에 동시에 전달하고 결과를 나란히 비교하는 기능을 포함합니다. 프롬프트 엔지니어링을 반복 가능하게 만들고 모델 간 수동 테스트의 마찰을 제거합니다.',
            },
            {
              q: 'AI 에이전트가 존재하는 지금도 프롬프트 엔지니어링이 관련이 있습니까?',
              a: '네. AI 에이전트 — 멀티 스텝 작업을 계획하고 실행하는 자율 시스템 — 는 프롬프트 엔지니어링을 기반으로 구축됩니다. 모든 에이전트에는 역할, 제약, 사용 가능한 도구를 정의하는 시스템 프롬프트가 있습니다. 모든 도구 호출은 구조화된 지시에 의해 트리거됩니다. 프롬프트 엔지니어링은 에이전트를 제어 가능하고 예측 가능하게 만드는 기반입니다. 에이전트가 더 보편화됨에 따라, 이 기술은 덜 중요해지는 것이 아니라 더 중요해집니다.',
            },
            {
              q: '사용자 프롬프트와 시스템 프롬프트는 어떻게 다릅니까?',
              a: '시스템 프롬프트는 전체 세션에 적용되는 지속적인 지시 세트입니다 — 사용자가 무언가를 말하기 전에 모델의 역할, 제약, 기본 동작을 정의합니다. 사용자 프롬프트는 요청당 입력 — 해당 상호 작용에 대한 구체적인 작업이나 질문입니다. 대부분의 AI 제품에서 개발자는 시스템 프롬프트를 작성하고, 최종 사용자는 사용자 프롬프트를 작성합니다. 두 가지 모두 프롬프트 엔지니어링의 혜택을 받지만, 서로 다른 기능을 수행하며 서로 다른 설계 접근 방식이 필요합니다. → [Fundamentals: System Prompt vs. User Prompt: What\'s the Difference?]',
            },
          ],
        },

        sources: {
          title: '출처 및 추가 읽기',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)" — 단계별 추론이 수학 및 논리 작업에서 환각을 줄인다는 것을 보여주는 기초 논문.',
            'Maynez, J., Narayan, S., Hashimoto, B., & Hardt, D. (2021). "[On Faithfulness and Factuality in Abstractive Summarization](https://aclanthology.org/2021.acl-long.200/)" — 신경 텍스트 생성에서 환각 속도와 메커니즘에 대한 실증적 연구.',
            'Anthropic (2024). "[Constitutional AI](https://www.anthropic.com/constitutional-ai)" — 원칙 기반 훈련을 통해 유해한 출력과 환각을 줄이는 Anthropic의 접근 방식.',
          ],
        },

      },
    },
  };
