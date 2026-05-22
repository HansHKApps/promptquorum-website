// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: chain-of-thought-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Chain-of-Thought Prompting: Make AI Show Its Reasoning',
      intro: 'Chain-of-thought prompting is a technique where you explicitly ask the model to show its reasoning steps instead of jumping straight to the final answer. This makes complex decisions easier to audit, debug, and improve over time.',
      leadAnswerBlock: '**Chain-of-thought (CoT) prompting instructs an AI model to show its reasoning step by step before giving a final answer.** This improves accuracy on math, logic, and multi-step tasks. In 2026, frontier models like Claude Opus 4.7 and OpenAI o3 have built-in reasoning modes that automate CoT internally — but prompt-level CoT remains valuable on smaller and non-reasoning models where it\'s the primary way to elicit structured thinking.',
      publishDate: '2026-03-26',
      dateModified: '2026-05-03',
      lastFactChecked: '2026-05-03',
      readTime: '13 min read',
      seoTitle: 'Chain-of-Thought Prompting: Boost Accuracy 40%',
      metaDescription: 'Chain-of-Thought improves reasoning by 10-40% on math and logic tasks. Learn when to use prompt-level CoT vs built-in reasoning modes.',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Chain-of-Thought Prompting',
      audience: 'Developers, data scientists, and teams building with GPT-4o, Claude, Gemini, or local LLMs',
      next_refresh_due: '2026-11-03',
      aboutTopics: ['Chain-of-Thought Prompting', 'Structured Reasoning', 'Prompt Engineering', 'Reasoning Models'],
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Quick Facts', anchor: '#quick-facts' },
        { label: 'What Is Chain-of-Thought Prompting?', anchor: '#what-is-chain-of-thought' },
        { label: 'Why It Matters', anchor: '#why-it-matters' },
        { label: 'When It Helps (and When It Doesn\'t)', anchor: '#when-it-helps' },
        { label: 'Example: Without vs With CoT', anchor: '#example-without-vs-with' },
        { label: 'Math Example: Revenue Calculation', anchor: '#math-example' },
        { label: 'How to Write Effective Prompts', anchor: '#how-to-write' },
        { label: 'Chain-of-Thought in PromptQuorum', anchor: '#in-promptquorum' },
        { label: 'How to Use CoT Prompting', anchor: '#how-to-start' },
        { label: 'CoT vs Built-In Reasoning Models', anchor: '#reasoning-models' },
        { label: 'Chain-of-Thought Variants', anchor: '#cot-variants' },
        { label: 'Model Comparison', anchor: '#model-comparison' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting?lang=en',
        inLanguage: 'en',
        headline: 'Chain-of-Thought Prompting: Make AI Show Its Reasoning',
        description: 'What chain-of-thought prompting is, when it helps, and how to structure prompts so models show their reasoning clearly.',
        datePublished: '2026-03-26',
        dateModified: '2026-05-03',
        keywords: ['chain-of-thought prompting', 'step-by-step reasoning', 'prompt engineering', 'reasoning models', 'extended thinking'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Chain-of-Thought Prompting', 'sameAs': 'https://www.wikidata.org/wiki/Q117050701' },
          { '@type': 'Thing', name: 'Large Language Models', 'sameAs': 'https://www.wikidata.org/wiki/Q115305900' },
          { '@type': 'Thing', name: 'Reasoning' },
          { '@type': 'Thing', name: 'Structured Output' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      sections: {
        tldr: {
          isTldr: true,
          title: 'Key Takeaways',
          numberedItems: [
            '**Chain-of-thought prompting asks models to show reasoning steps before giving a final answer**, improving accuracy on math, logic, and multi-step tasks.',
            'Zero-shot CoT ("think step by step") works on most models. Few-shot CoT (with worked examples) is more reliable.',
            'In 2026, frontier models like Claude Opus 4.7 and OpenAI o3 have **built-in reasoning modes** that subsume prompt-level CoT — you don\'t need to say "think step by step" on these models.',
            'CoT increases output tokens and therefore cost. Built-in reasoning modes add separate thinking token budgets with their own billing.',
            'Use prompt-level CoT on non-reasoning models (Haiku, Flash, LLaMA 4) for cost-effective reasoning. Use built-in reasoning modes on frontier models for maximum accuracy.',
            'CoT is most valuable for math, logic, planning, and root-cause analysis. Skip it for simple classification, short answers, and quick copywriting.',
          ]
        },
        quickFacts: {
          title: 'Quick Facts',
          numberedItems: [
            '**Coined:** Wei et al. (2022), Google Brain — NeurIPS 2022 foundational paper',
            '**Key result:** Zero-shot CoT raised PaLM 540B accuracy from 17.7% → 78.7% on MultiArith',
            '**Trigger phrase:** "Let\'s think step by step" (zero-shot) or worked examples (few-shot)',
            '**2026 evolution:** Built-in reasoning modes (o3, Claude extended thinking) now automate CoT internally',
            '**Cost impact:** Prompt-level CoT = more output tokens; reasoning modes = separate thinking token budget',
            '**Best models for prompt-level CoT:** Non-reasoning models (Claude Haiku 4.5, Gemini Flash, GPT-4o mini, LLaMA 4 Scout)',
          ]
        },
        whatIsChainOfThought: {
          title: 'What Chain-of-Thought Prompting Is',
          content: [
            '**Chain-of-thought prompting asks the model to reason step by step before giving a final conclusion.** Instead of returning only "the answer," the model writes out intermediate calculations, logical steps, or explanations.',
            'You can trigger this behavior by instructions like "think step by step," "show your reasoning," or by providing worked examples where the reasoning is explicit. The result is a trace you can read to understand how the model reached its conclusion.',
          ],
        },
        whyItMatters: {
          title: 'Why Chain-of-Thought Prompting Matters',
          content: [
            '**Chain-of-thought prompting matters because it makes model behavior more transparent on tasks that involve multi-step reasoning.** When you see each step, you can spot misinterpretations, missing assumptions, or arithmetic errors.',
            'This is especially valuable in domains like analytics, planning, and troubleshooting. Instead of a single opaque output, you get a narrative that can be checked, corrected, or reused as documentation.',
          ],
          callouts: [
            {
              type: 'info',
              label: 'Works with local models',
              text: 'Chain-of-thought works on any model with 7B+ parameters. Test it locally with [Ollama or LM Studio](https://www.promptquorum.com/local-llms).'
            }
          ],
        },
        whenItHelps: {
          title: 'When Chain-of-Thought Helps (and When It Doesn\'t)',
          content: [
            '**Chain-of-thought prompting helps most on tasks that naturally break into clear steps, but it is not necessary for every prompt.** It shines wherever the path is as important as the destination.',
            'Chain-of-Thought reasoning is what lets a tool-calling agent stay reliable across multi-step tasks. For a local agent stack that gives a CoT-capable model the ability to query databases and edit files, see [Local AI Agents With MCP](/power-local-llm/local-ai-agents-with-mcp-2026).',
            'Good use cases include:',
          ],
          items: [
            'Math and quantitative reasoning problems.',
            'Multi-step logical puzzles or decision analyses.',
            'Root-cause analysis, incident postmortems, and trade-off discussions.',
            'Planning tasks where the sequence of actions must be explicit.',
          ],
        },
        whenItDoesntHelp: {
          content: [
            'For simple classification, quick copywriting, or short factual answers, chain-of-thought often adds verbosity without much extra value. In sensitive domains, you may also want to keep reasoning internal and show only the final answer to end users.',
          ],
        },
        example: {
          title: 'Example: Without vs With Chain of Thought',
          content: [
            '**The difference becomes clear when you compare a direct-answer prompt with one that explicitly asks for reasoning.** Here is a simple decision example.',
            '**[Bad Prompt]**',
            '"Which project should we prioritize next quarter?"',
            '**[Good Prompt]**',
            '"You are a product operations manager. We have three candidate projects for next quarter. Use chain-of-thought reasoning to decide which project to prioritize. 1) List the decision criteria you will use (for example revenue impact, risk, alignment with strategy). 2) Evaluate each project against these criteria step by step. 3) Make a clear recommendation and justify it in 3–5 sentences. At the end, provide a short final answer starting with `Recommendation:` on a separate line."',
            'In the "good" version, the model explains how it chose its criteria, how each project scores, and then states a recommendation you can challenge or accept.',
          ],
        },
        howToWrite: {
          title: 'How to Write Effective Chain-of-Thought Prompts',
          content: [
            '**To write effective chain-of-thought prompts, you should define the structure of the reasoning and the structure of the final answer.** Vague requests like "explain more" are less reliable than concrete instructions.',
            'A practical pattern is:',
          ],
          items: [
            'Tell the model its role (for example "You are a senior data analyst.").',
            'Specify that it should think step by step or use chain-of-thought.',
            'Define the sections of reasoning you expect (for example assumptions, calculations, comparison, conclusion).',
            'Ask for a short, clearly marked final answer at the end so you can use it quickly.',
          ],
        },
        howtWriteNote: {
          content: [
            'This separates the detailed reasoning from the concise output, which is helpful when you integrate the result into other tools or reports.',
          ],
        },
        inPromptQuorum: {
          title: 'Chain-of-Thought Prompting in PromptQuorum',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool where you can apply chain-of-thought prompting consistently across different models.** You write one structured chain-of-thought prompt and send it to several providers in parallel.',
            'In PromptQuorum, you can:',
          ],
          items: [
            'Combine chain-of-thought instructions with reasoning-focused frameworks such as TRACE or APE so that thinking steps are explicitly labeled.',
            'Compare how different models handle the same reasoning task and inspect their step-by-step traces side by side.',
            'Save chain-of-thought prompts as templates for recurring analyses, incident reviews, or strategic decisions.',
          ],
        },
        inPromptQuorumClosing: {
          content: [
            'This turns chain-of-thought prompting from a one-off trick into a repeatable part of your decision-making process.',
          ],
        },

        howToStart: {
          title: 'How to Use Chain-of-Thought (CoT) Prompting',
          numberedItems: [
            '**For logic, reasoning, or debugging tasks, ask the model to \'think step by step\' before answering.** Instead of \'What is the bug?\', ask \'Trace the execution step by step, then identify the bug.\'',
            '**Provide a worked example showing step-by-step reasoning.** Don\'t just describe it—show the model what step-by-step reasoning looks like. Example: \'First, I check the function signature... Then, I trace the first call with input X...\'',
            '**Use explicit prompts like \'Let\'s think step by step\' or \'First, identify... Then...\'** These trigger more deliberate reasoning in the model.',
            '**For complex problems, ask the model to trace intermediate outputs.** Example: \'Trace the execution of this function for input [5]. Show the value of each variable after each line.\'',
            '**Combine CoT with verifiable outputs: ask the model to show its work so you can audit it.** \'Explain your reasoning at each step. If you make a mistake, I should be able to spot it from your shown work.\'',
          ],
        },
        mathExample: {
          title: 'Math Example: Revenue Calculation',
          content: [
            '**Without CoT, a model might give a single final answer. With CoT, the model shows calculations step by step.**',
            '**Without CoT:**',
            '"A customer buys 50 units at $15 each, but gets a 10% discount. What do they pay?"',
            'Model: "$675"',
            '**With CoT:**',
            '"A customer buys 50 units at $15 each, but gets a 10% discount. Work through this step by step: 1) Calculate the subtotal. 2) Calculate the discount amount. 3) Subtract the discount from the subtotal to get the final price."',
            'Model: "1) Subtotal = 50 × $15 = $750. 2) Discount = 10% of $750 = $75. 3) Final price = $750 − $75 = $675."',
            'Both give the same answer, but the CoT version lets you see the math and catch errors (e.g., if someone miscalculates 10% of $750).',
          ],
        },
        reasoningModels: {
          title: 'CoT vs Built-In Reasoning Models (2026)',
          content: [
            '**In 2026, the frontier models—Claude Opus 4.7, OpenAI o3, Gemini Deep Think—have built-in reasoning modes that internalize chain-of-thought automatically.** You do not need to add "think step by step" instructions on these models.',
            '**When to use prompt-level CoT:** Non-reasoning models (Claude Haiku 4.5, GPT-4o mini, Gemini Flash, Llama 4), local LLMs, or when you want to avoid the extra cost of reasoning token budgets.',
            '**When to use built-in reasoning modes:** Maximum accuracy on frontier models, math-heavy tasks, complex analysis. These models bill reasoning tokens separately (usually higher rate than output tokens). Test your CoT prompts in [Anthropic\'s Console](https://docs.anthropic.com/) or [OpenAI\'s Playground](https://platform.openai.com/playground) before deploying to production.',
          ],
          columns: ['Approach', 'Best For', 'Cost', 'Transparency', 'Models'],
          rows: [
            { 'Approach': 'Prompt-level CoT ("think step by step")', 'Best For': 'Small models, local LLMs, cost-sensitive tasks', 'Cost': 'Increases output tokens', 'Transparency': 'Full: visible steps in output', 'Models': 'Haiku, Flash, LLaMA, Qwen' },
            { 'Approach': 'Claude extended thinking (Opus 4.7, Sonnet 4.6)', 'Best For': 'Complex analysis, maximum accuracy', 'Cost': 'Separate thinking token budget (input rate)', 'Transparency': 'Inspector trace via API', 'Models': 'Claude Opus 4.7, Claude Sonnet 4.6' },
            { 'Approach': 'OpenAI o3', 'Best For': 'Hardest problems (math, coding, competition)', 'Cost': 'Reasoning token budget (higher tier)', 'Transparency': 'Hidden reasoning, visible output', 'Models': 'OpenAI o3' },
            { 'Approach': 'Gemini Deep Think', 'Best For': 'Google Cloud integration, Gemini ecosystem', 'Cost': 'Thinking tokens separate from output', 'Transparency': 'thinking_level parameter (LOW, MEDIUM, HIGH)', 'Models': 'Gemini 3.1 Pro' },
            { 'Approach': 'DeepSeek R1', 'Best For': 'Open-weights option, on-device reasoning', 'Cost': 'Visible reasoning streamed as output text', 'Transparency': 'Full: inline CoT in output', 'Models': 'DeepSeek R1' },
          ],
          callouts: [
            {
              type: 'tip',
              label: 'Pro Tip',
              text: 'If you\'re building for cost, use prompt-level CoT on smaller models. If you\'re building for accuracy on hard problems, use o3 or Claude extended thinking and let the model handle reasoning internally.'
            }
          ],
        },
        cotVariants: {
          title: 'Chain-of-Thought Variants and Extensions',
          content: [
            '**Beyond the basic "think step by step" pattern, researchers have developed several CoT variants, each optimized for different problem types.**',
          ],
          items: [
            '**Zero-shot CoT:** Ask "Let\'s think step by step" with no examples. Works on most models and is the simplest to implement. Boost: ~10–20% accuracy improvement on reasoning tasks.',
            '**Few-shot CoT:** Show 2–5 worked examples where the reasoning is explicit, then ask the model to apply the same pattern to a new problem. More reliable than zero-shot but requires manual example creation. Boost: ~20–40% accuracy.',
            '**Self-consistency (Wang et al., 2023):** Generate multiple CoT reasoning paths independently, then take a majority vote on the final answer. Significantly more robust to errors. Boost: ~30–50% on hard tasks.',
            '**Tree of Thought (ToT):** Instead of a linear chain, explore multiple reasoning branches and prune poor ones. Use when there are many possible solution paths (planning, game-playing, creative tasks).',
            '**ReAct (Reasoning + Acting):** Interleave reasoning with external actions—call APIs, search databases, or run code—and incorporate the results back into the next reasoning step. Best for real-world tasks that need live data or verification.',
          ],
        },
        modelComparison: {
          title: 'Model Comparison: How Models Handle CoT Prompting (2026)',
          columns: ['Model', 'Prompt-Level CoT', 'Built-In Reasoning', 'Best Use Case', 'Cost (approx.)'],
          rows: [
            { 'Model': 'Claude Opus 4.7', 'Prompt-Level CoT': 'Not needed', 'Built-In Reasoning': 'Extended thinking (inspect trace via API)', 'Best Use Case': 'Maximum accuracy analysis', 'Cost (approx.)': 'Higher (input + output + thinking tokens)' },
            { 'Model': 'Claude Sonnet 4.6', 'Prompt-Level CoT': 'Not needed', 'Built-In Reasoning': 'Extended thinking', 'Best Use Case': 'Balanced accuracy/cost', 'Cost (approx.)': 'Medium' },
            { 'Model': 'Claude Haiku 4.5', 'Prompt-Level CoT': 'Recommended', 'Built-In Reasoning': 'None', 'Best Use Case': 'Fast, cost-effective reasoning', 'Cost (approx.)': 'Low' },
            { 'Model': 'OpenAI o3', 'Prompt-Level CoT': 'Not needed', 'Built-In Reasoning': 'Effort levels (low, medium, high, xhigh)', 'Best Use Case': 'Competition-level problems', 'Cost (approx.)': 'Very high (reasoning token tier)' },
            { 'Model': 'GPT-4o mini', 'Prompt-Level CoT': 'Recommended', 'Built-In Reasoning': 'None', 'Best Use Case': 'Budget-conscious deployment', 'Cost (approx.)': 'Very low' },
            { 'Model': 'Gemini 3.1 Pro', 'Prompt-Level CoT': 'Works', 'Built-In Reasoning': 'Deep Think (thinking_level param)', 'Best Use Case': 'Google Cloud integration', 'Cost (approx.)': 'Medium-high' },
            { 'Model': 'Gemini Flash', 'Prompt-Level CoT': 'Recommended', 'Built-In Reasoning': 'None', 'Best Use Case': 'Fast responses', 'Cost (approx.)': 'Low' },
            { 'Model': 'DeepSeek R1', 'Prompt-Level CoT': 'Not needed', 'Built-In Reasoning': 'Inline reasoning in output', 'Best Use Case': 'Open-weights, on-device', 'Cost (approx.)': 'Free (open source)' },
            { 'Model': 'Llama 4', 'Prompt-Level CoT': 'Recommended', 'Built-In Reasoning': 'None', 'Best Use Case': 'Local deployment, privacy', 'Cost (approx.)': 'Self-hosted (compute-dependent)' },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering? A Complete Guide 2026](/prompt-engineering/what-is-prompt-engineering?lang=en)',
            '[Structured Output & JSON Schema Prompting](/prompt-engineering/structured-output?lang=en)',
            '[How to Reduce AI Hallucination](/prompt-engineering/reducing-hallucination?lang=en)',
            '[Constrained Prompting: Limit Model Outputs](/prompt-engineering/constrained-prompting?lang=en)',
            '[How to Build a Multi-Model Dispatch System](/prompt-engineering/multi-model-dispatch?lang=en)',
            '[Prompt Testing & Evaluation Framework](/prompt-engineering/prompt-testing?lang=en)',
          ],
        },
        faqSection: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'Does chain-of-thought work on all models?',
              a: 'Chain-of-thought works on most models with 7B+ parameters, but the benefit varies. It\'s most effective on mid-size and smaller models (Haiku, Flash, Llama 4). On frontier models (Claude Opus 4.7, o3), built-in reasoning modes are often more efficient than prompt-level CoT.'
            },
            {
              q: 'Does chain-of-thought increase cost?',
              a: 'Yes, prompt-level CoT increases the number of output tokens (since the model writes out reasoning before the final answer). Built-in reasoning modes (Claude extended thinking, OpenAI o3) use separate thinking token budgets that may have different billing rates. Test both on your use case to compare cost vs accuracy tradeoff.'
            },
            {
              q: 'When should I use few-shot CoT instead of zero-shot?',
              a: 'Use zero-shot CoT first—it\'s simpler and works in most cases. Move to few-shot (with 2–5 examples) if zero-shot is unreliable or if your domain requires specific reasoning patterns (e.g., financial analysis with standard line-item structure).'
            },
            {
              q: 'Can I combine chain-of-thought with structured output (JSON)?',
              a: 'Yes. You can ask the model to show its reasoning in plain text first, then output a JSON object with the final answer. Combine instructions: "Think step by step. Then output your result as valid JSON." This is common in production systems.'
            },
            {
              q: 'What\'s the difference between chain-of-thought and tree-of-thought?',
              a: 'Chain-of-thought is a linear sequence: step 1 → step 2 → ... → conclusion. Tree-of-thought explores multiple branches (alternative reasoning paths) and prunes weaker ones before arriving at the answer. Tree-of-thought is more powerful but more expensive (requires multiple model calls).'
            },
            {
              q: 'Does OpenAI o3 require chain-of-thought prompting?',
              a: 'No. OpenAI o3 has built-in reasoning that activates automatically. You do not need to add "think step by step" instructions. Just give o3 the problem and set the effort level (low/medium/high/xhigh) to control how much reasoning budget to spend.'
            },
            {
              q: 'Can I audit the reasoning of built-in reasoning models?',
              a: 'Yes, but it depends on the model. Claude extended thinking reasoning traces are inspectable via API. OpenAI o3 reasoning is hidden by default (for competitive advantage). Gemini Deep Think reasoning is also hidden. For full auditability, use prompt-level CoT or DeepSeek R1.'
            },
            {
              q: 'Is chain-of-thought prompting suitable for real-time applications?',
              a: 'Prompt-level CoT adds latency (more output tokens = slower generation). For real-time use cases, either use smaller models with minimal reasoning, or use stream endpoints to show tokens as they arrive. Built-in reasoning modes may add even more latency; benchmark your specific use case.'
            },
          ],
        },
        sources: {
          title: 'Sources & Further Reading',
          items: [
            'Wei, J., Wang, X., Schuurmans, D., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arXiv:2201.11903',
            'Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). "Large Language Models are Zero-Shot Reasoners." NeurIPS 2022. arXiv:2205.11916',
            'Wang, X., Wei, J., Schuurmans, D., et al. (2023). "Self-Consistency Improves Chain of Thought Reasoning in Language Models." ICLR 2023. arXiv:2203.11171',
            'Anthropic. (2024). "Extended Thinking in Claude." Technical documentation on Claude Opus 4.7 and Sonnet 4.6 reasoning capabilities.',
            'OpenAI. (2026). "OpenAI o3: Reasoning Models for Competition-Level Problem Solving." OpenAI documentation and research announcements.',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does chain-of-thought work on all models?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-thought works on most models with 7B+ parameters, but the benefit varies. It\'s most effective on mid-size and smaller models (Haiku, Flash, Llama 4). On frontier models (Claude Opus 4.7, o3), built-in reasoning modes are often more efficient than prompt-level CoT.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does chain-of-thought increase cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, prompt-level CoT increases the number of output tokens (since the model writes out reasoning before the final answer). Built-in reasoning modes (Claude extended thinking, OpenAI o3) use separate thinking token budgets that may have different billing rates. Test both on your use case to compare cost vs accuracy tradeoff.'
            }
          },
          {
            '@type': 'Question',
            name: 'When should I use few-shot CoT instead of zero-shot?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use zero-shot CoT first—it\'s simpler and works in most cases. Move to few-shot (with 2–5 examples) if zero-shot is unreliable or if your domain requires specific reasoning patterns (e.g., financial analysis with standard line-item structure).'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I combine chain-of-thought with structured output (JSON)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can ask the model to show its reasoning in plain text first, then output a JSON object with the final answer. Combine instructions: "Think step by step. Then output your result as valid JSON." This is common in production systems.'
            }
          },
          {
            '@type': 'Question',
            name: 'What\'s the difference between chain-of-thought and tree-of-thought?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Chain-of-thought is a linear sequence: step 1 → step 2 → ... → conclusion. Tree-of-thought explores multiple branches (alternative reasoning paths) and prunes weaker ones before arriving at the answer. Tree-of-thought is more powerful but more expensive (requires multiple model calls).'
            }
          },
          {
            '@type': 'Question',
            name: 'Does OpenAI o3 require chain-of-thought prompting?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. OpenAI o3 has built-in reasoning that activates automatically. You do not need to add "think step by step" instructions. Just give o3 the problem and set the effort level (low/medium/high/xhigh) to control how much reasoning budget to spend.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I audit the reasoning of built-in reasoning models?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, but it depends on the model. Claude extended thinking reasoning traces are inspectable via API. OpenAI o3 reasoning is hidden by default (for competitive advantage). Gemini Deep Think reasoning is also hidden. For full auditability, use prompt-level CoT or DeepSeek R1.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is chain-of-thought prompting suitable for real-time applications?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prompt-level CoT adds latency (more output tokens = slower generation). For real-time use cases, either use smaller models with minimal reasoning, or use stream endpoints to show tokens as they arrive. Built-in reasoning modes may add even more latency; benchmark your specific use case.'
            }
          },
        ]
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Chain-of-Thought Variants',
        numberOfItems: 5,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Zero-shot CoT',
            description: 'Ask "Let\'s think step by step" with no examples. Works on most models and is the simplest to implement. Boost: ~10–20% accuracy improvement.'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Few-shot CoT',
            description: 'Show 2–5 worked examples with explicit reasoning, then apply to a new problem. More reliable than zero-shot. Boost: ~20–40% accuracy.'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Self-consistency',
            description: 'Generate multiple independent reasoning paths, take a majority vote on the answer. Significantly more robust. Boost: ~30–50% on hard tasks.'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Tree of Thought',
            description: 'Explore multiple reasoning branches and prune poor ones. Best for planning and game-playing tasks with many solution paths.'
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'ReAct',
            description: 'Interleave reasoning with external actions (API calls, searches, code execution). Best for real-world tasks needing live data or verification.'
          },
        ]
      },
    },
    de: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques',
  title: 'Chain-of-Thought Prompting: Lassen Sie die KI ihr Denken zeigen',
  intro: 'Chain-of-Thought Prompting ist eine Technik, bei der Sie die KI explizit auffordern, ihre Denkschritte zu zeigen, statt direkt zur Antwort zu springen. Dies macht komplexe Entscheidungen leichter nachvollziehbar, debugbar und im Laufe der Zeit verbesserbar.',
  leadAnswerBlock: '**Chain-of-Thought (CoT) Prompting fordert ein KI-Modell auf, seine Denkschritte Schritt für Schritt zu zeigen, bevor es eine abschließende Antwort gibt.** Dies verbessert die Genauigkeit bei Mathe-, Logik- und mehrstufigen Aufgaben. 2026 haben Modelle wie Claude Opus 4.7 und OpenAI o3 integrierte Denkfunktionen, die CoT intern automatisieren – aber Prompt-Level CoT bleibt wertvoll bei kleineren und nicht-denkfähigen Modellen, wo es der Hauptweg ist, um strukturiertes Denken hervorzurufen.',
  publishDate: '2026-03-26',
  dateModified: '2026-05-03',
  lastFactChecked: '2026-05-03',
  readTime: '13 Min. Lesezeit',
  seoTitle: 'Chain-of-Thought Prompting: Genauigkeit um 40%',
  metaDescription: 'Chain-of-Thought Prompting verbessert die Genauigkeit um 10–40 % bei Mathematik und Logik. Erfahren Sie, wann Sie es einsetzen sollten.',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Chain-of-Thought Prompting',
  audience: 'Entwickler, Datenwissenschaftler und Teams, die mit Claude, Gemini oder lokalen LLMs arbeiten',
  next_refresh_due: '2026-11-03',
  aboutTopics: ['Chain-of-Thought Prompting', 'Strukturiertes Denken', 'Prompt Engineering', 'Reasoning Models'],
  toc: [
    { label: 'Zusammenfassung', anchor: '#zusammenfassung' },
    { label: 'Schnellübersicht', anchor: '#schnellubersicht' },
    { label: 'Was ist Chain-of-Thought Prompting?', anchor: '#was-ist-chain-of-thought' },
    { label: 'Warum es wichtig ist', anchor: '#warum-wichtig' },
    { label: 'Wann es hilft (und wann nicht)', anchor: '#wann-es-hilft' },
    { label: 'Beispiel: Mit und ohne Chain of Thought', anchor: '#beispiel' },
    { label: 'Mathe-Beispiel: Umsatzberechnung', anchor: '#mathe-beispiel' },
    { label: 'Effektive Prompts schreiben', anchor: '#prompts-schreiben' },
    { label: 'Chain-of-Thought in PromptQuorum', anchor: '#in-promptquorum' },
    { label: 'Wie Sie CoT nutzen', anchor: '#wie-nutzen' },
    { label: 'CoT vs. integrierte Reasoning-Modelle', anchor: '#reasoning-modelle' },
    { label: 'Chain-of-Thought Varianten', anchor: '#cot-varianten' },
    { label: 'Modellvergleich', anchor: '#modellvergleich' },
    { label: 'Weiterführende Literatur', anchor: '#literatur' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Quellen', anchor: '#quellen' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting?lang=de',
    inLanguage: 'de',
    headline: 'Chain-of-Thought Prompting: Lassen Sie die KI ihr Denken zeigen',
    description: 'Was Chain-of-Thought Prompting ist, wann es hilft und wie Sie Prompts strukturieren, damit Modelle ihr Denken klar darstellen.',
    datePublished: '2026-03-26',
    dateModified: '2026-05-03',
    keywords: ['Chain-of-Thought Prompting', 'Schrittweise Argumentation', 'Prompt Engineering', 'Reasoning Modelle', 'Extended Thinking'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Chain-of-Thought Prompting' },
      { '@type': 'Thing', name: 'Sprachmodelle' },
      { '@type': 'Thing', name: 'Denken' },
      { '@type': 'Thing', name: 'Strukturierte Ausgabe' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
  },
  sections: {
    tldr: {
      isTldr: true,
      title: 'Zusammenfassung',
      numberedItems: [
        '**Chain-of-Thought Prompting fordert Modelle auf, ihre Denkschritte vor der abschließenden Antwort zu zeigen**, verbessert die Genauigkeit bei Mathe-, Logik- und mehrstufigen Aufgaben.',
        'Zero-shot CoT („denk Schritt für Schritt") funktioniert auf den meisten Modellen. Few-shot CoT (mit Beispielen) ist zuverlässiger.',
        '2026 haben Modelle wie Claude Opus 4.7 und OpenAI o3 **integrierte Thinking-Modi**, die Prompt-Level CoT ersetzen – Sie müssen nicht „denk Schritt für Schritt" sagen.',
        'CoT erhöht die Output-Token und damit die Kosten. Integrierte Thinking-Modi haben separate Thinking-Token-Budgets mit eigenem Billing.',
        'Nutzen Sie Prompt-Level CoT bei kleineren Modellen (Haiku, Flash, LLaMA 4) kostengünstig. Nutzen Sie integrierte Thinking-Modi bei Frontier-Modellen für maximale Genauigkeit.',
        'CoT ist wertvoll für Mathe, Logik, Planung und Ursachenanalyse. Überspringen Sie es bei einfacher Klassifizierung, kurzen Antworten und schneller Werbetexterstellung.',
      ]
    },
    quickFacts: {
      title: 'Schnellübersicht',
      numberedItems: [
        '**Geprägt:** Wei et al. (2022), Google Brain – NeurIPS 2022 Grundlagenpaper',
        '**Schlüsselergebnis:** Zero-shot CoT erhöhte PaLM 540B Genauigkeit von 17,7 % → 78,7 % auf MultiArith',
        '**Auslösephrase:** „Denken wir Schritt für Schritt" (Zero-shot) oder Beispiele (Few-shot)',
        '**2026 Evolution:** Integrierte Thinking-Modi (o3, Claude Extended Thinking) automatisieren CoT intern',
        '**Kostenfolge:** Prompt-Level CoT = mehr Output-Token; Thinking-Modi = separates Thinking-Token-Budget',
        '**Best für Prompt-Level CoT:** Nicht-Thinking-Modelle (Claude Haiku 4.5, Gemini Flash, GPT-4o mini, LLaMA 4 Scout)',
      ]
    },
    whatIsChainOfThought: {
      title: 'Was Chain-of-Thought Prompting ist',
      content: [
        '**Chain-of-Thought Prompting fordert das Modell auf, Schritt für Schritt zu argumentieren, bevor es zu einer abschließenden Schlussfolgerung kommt.** Anstatt nur „die Antwort" zu geben, schreibt das Modell Zwischenberechnungen, logische Schritte oder Erklärungen auf.',
        'Sie können dieses Verhalten durch Anweisungen wie „Denk Schritt für Schritt", „Zeig dein Denken" oder durch Beispiele auslösen, in denen die Argumentation explizit ist. Das Ergebnis ist eine Nachverfolgung, die Sie lesen können, um zu verstehen, wie das Modell zu seiner Schlussfolgerung gelangt ist.',
      ],
    },
    whyItMatters: {
      title: 'Warum Chain-of-Thought Prompting wichtig ist',
      content: [
        '**Chain-of-Thought Prompting ist wichtig, weil es das Verhalten von Modellen bei mehrstufigen Denkaufgaben transparenter macht.** Wenn Sie jeden Schritt sehen, können Sie Missinterpretationen, fehlende Annahmen oder Rechenfehler erkennen.',
        'Dies ist besonders wertvoll in Bereichen wie Analytik, Planung und Fehlerbehebung. Statt einer einzigen undurchsichtigen Ausgabe erhalten Sie eine Erzählung, die überprüft, korrigiert oder als Dokumentation wiederverwendet werden kann.',
      ],
      callouts: [
        {
          type: 'info',
          label: 'Funktioniert mit lokalen Modellen',
          text: 'Chain-of-Thought funktioniert auf jedem Modell mit 7B+ Parametern. Testen Sie es lokal mit [Ollama oder LM Studio](https://www.promptquorum.com/local-llms).'
        }
      ],
    },
    whenItHelps: {
      title: 'Wann Chain-of-Thought hilft (und wann nicht)',
      content: [
        '**Chain-of-Thought Prompting hilft am meisten bei Aufgaben, die sich natürlicherweise in klare Schritte unterteilen lassen, ist aber nicht für jeden Prompt notwendig.** Es glänzt überall dort, wo der Weg genauso wichtig ist wie das Ziel.',
        'Chain-of-Thought-Reasoning ist es, was einen Tool-Calling-Agenten über mehrstufige Aufgaben hinweg zuverlässig macht. Für einen lokalen Agenten-Stack, der einem CoT-fähigen Modell den Zugriff auf Datenbanken und Dateien gibt, siehe [Lokale KI-Agenten mit MCP](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de).',
        'Gute Anwendungsfälle sind:',
      ],
      items: [
        'Mathematische und quantitative Denkaufgaben.',
        'Mehrstufige logische Rätsel oder Entscheidungsanalysen.',
        'Ursachenanalyse, Incident Postmortems und Diskussionen über Kompromisse.',
        'Planungsaufgaben, bei denen die Abfolge der Aktionen explizit sein muss.',
      ],
    },
    whenItDoesntHelp: {
      content: [
        'Bei einfacher Klassifizierung, schneller Werbetexterstellung oder kurzen faktischen Antworten führt Chain-of-Thought oft zu unnötiger Ausführlichkeit ohne großen zusätzlichen Nutzen. In sensiblen Bereichen möchten Sie möglicherweise auch das Denken intern behalten und nur die endgültige Antwort für Endbenutzer zeigen.',
      ],
    },
    example: {
      title: 'Beispiel: Ohne und mit Chain of Thought',
      content: [
        '**Der Unterschied wird deutlich, wenn Sie einen direkt-antwortenden Prompt mit einem vergleichen, der explizit Argumentation fordert.** Hier ist ein einfaches Entscheidungsbeispiel.',
        '**[Schlechter Prompt]**',
        '"Welches Projekt sollten wir nächstes Quartal priorisieren?"',
        '**[Guter Prompt]**',
        '"Sie sind ein Produktmanager. Wir haben drei Kandidatenprojekte für nächstes Quartal. Verwenden Sie Chain-of-Thought Argumentation, um zu entscheiden, welches Projekt Priorität hat. 1) Notieren Sie die Entscheidungskriterien, die Sie verwenden werden (z. B. Umsatzauswirkung, Risiko, strategische Ausrichtung). 2) Bewerten Sie jedes Projekt Schritt für Schritt gegen diese Kriterien. 3) Geben Sie eine klare Empfehlung ab und rechtfertigen Sie sie in 3–5 Sätzen. Geben Sie am Ende eine kurze abschließende Antwort mit dem Präfix `Empfehlung:` auf einer separaten Zeile."',
        'In der „guten" Version erklärt das Modell, wie es seine Kriterien ausgewählt hat, wie jedes Projekt bewertet wird, und gibt dann eine Empfehlung ab, die Sie in Frage stellen oder akzeptieren können.',
      ],
    },
    howToWrite: {
      title: 'Wie man effektive Chain-of-Thought Prompts schreibt',
      content: [
        '**Um effektive Chain-of-Thought Prompts zu schreiben, sollten Sie die Struktur der Argumentation und die Struktur der endgültigen Antwort definieren.** Vage Anfragen wie „Erkläre mehr" sind weniger zuverlässig als konkrete Anweisungen.',
        'Ein praktisches Muster ist:',
      ],
      items: [
        'Sagen Sie dem Modell seine Rolle (z. B. „Sie sind ein leitender Datenanalyst").',
        'Geben Sie an, dass es Schritt für Schritt denken oder Chain-of-Thought verwenden soll.',
        'Definieren Sie die Argumentationsabschnitte, die Sie erwarten (z. B. Annahmen, Berechnungen, Vergleich, Schlussfolgerung).',
        'Fordern Sie am Ende eine kurze, klar gekennzeichnete abschließende Antwort an, damit Sie sie schnell nutzen können.',
      ],
    },
    howtWriteNote: {
      content: [
        'Dies trennt die detaillierte Argumentation von der prägnanten Ausgabe, was hilfreiche ist, wenn Sie das Ergebnis in andere Tools oder Berichte integrieren.',
      ],
    },
    inPromptQuorum: {
      title: 'Chain-of-Thought Prompting in PromptQuorum',
      content: [
        '**PromptQuorum ist ein Multi-Model-KI-Dispatchingtool, bei dem Sie Chain-of-Thought Prompting konsistent über verschiedene Modelle hinweg anwenden können.** Sie schreiben einen strukturierten Chain-of-Thought Prompt und versenden ihn parallel an mehrere Anbieter.',
        'In PromptQuorum können Sie:',
      ],
      items: [
        'Chain-of-Thought Anweisungen mit denk-fokussierten Frameworks wie TRACE oder APE kombinieren, damit Denkschritte explizit gekennzeichnet sind.',
        'Vergleichen Sie, wie verschiedene Modelle die gleiche Denkaufgabe handhaben, und inspizieren Sie ihre Schritt-für-Schritt-Nachverfolgungen nebeneinander.',
        'Speichern Sie Chain-of-Thought Prompts als Vorlagen für wiederkehrende Analysen, Incident Reviews oder strategische Entscheidungen.',
      ],
    },
    inPromptQuorumClosing: {
      content: [
        'Dies verwandelt Chain-of-Thought Prompting von einem einmaligen Trick in einen wiederholbaren Teil Ihres Entscheidungsprozesses.',
      ],
    },
    howToStart: {
      title: 'Wie Sie Chain-of-Thought (CoT) Prompting verwenden',
      numberedItems: [
        '**Fordern Sie bei Logik-, Denk- oder Debugging-Aufgaben das Modell auf, „Schritt für Schritt zu denken", bevor Sie antworten.** Statt „Was ist der Bug?" fragen Sie „Verfolgen Sie die Ausführung Schritt für Schritt, dann identifizieren Sie den Bug."',
        '**Geben Sie ein durchgearbeitetes Beispiel mit schrittweiser Argumentation.** Beschreiben Sie es nicht nur – zeigen Sie dem Modell, wie schrittweises Denken aussieht. Beispiel: „Zuerst überprüfe ich die Funktionssignatur... Dann verfolge ich den ersten Aufruf mit Eingabe X..."',
        '**Verwenden Sie explizite Prompts wie „Denken wir Schritt für Schritt" oder „Zuerst... Dann..."** Diese lösen bewussteren Denkprozesse im Modell aus.',
        '**Bitten Sie bei komplexen Problemen das Modell, Zwischenausgaben nachzuverfolgen.** Beispiel: „Verfolgen Sie die Ausführung dieser Funktion für Eingabe [5]. Zeigen Sie den Wert jeder Variablen nach jeder Zeile."',
        '**Kombinieren Sie CoT mit überprüfbaren Ausgaben: Bitten Sie das Modell, seine Arbeit zu zeigen, damit Sie sie überprüfen können.** „Erklären Sie Ihr Denken bei jedem Schritt. Wenn Sie einen Fehler machen, sollte ich ihn aus Ihrer gezeigten Arbeit erkennen können."',
      ],
    },
    mathExample: {
      title: 'Mathe-Beispiel: Umsatzberechnung',
      content: [
        '**Ohne CoT gibt das Modell möglicherweise nur eine abschließende Antwort. Mit CoT zeigt das Modell Berechnungen schrittweise.**',
        '**Ohne CoT:**',
        '„Ein Kunde kauft 50 Einheiten zu 15 € je Stück und erhält einen 10 %-Rabatt. Wie viel zahlt der Kunde?"',
        'Modell: „675 €"',
        '**Mit CoT:**',
        '„Ein Kunde kauft 50 Einheiten zu 15 € je Stück und erhält einen 10 %-Rabatt. Arbeite die einzelnen Schritte durch: 1) Berechne die Zwischensumme. 2) Berechne den Rabattbetrag. 3) Ziehe den Rabatt von der Zwischensumme ab, um den Endpreis zu erhalten."',
        'Modell: „1) Zwischensumme = 50 × 15 € = 750 €. 2) Rabatt = 10 % von 750 € = 75 €. 3) Endpreis = 750 € − 75 € = 675 €."',
        'Beide geben die gleiche Antwort, aber die CoT-Version zeigt die Mathematik und ermöglicht es, Fehler zu erkennen (z. B. wenn jemand 10 % von 750 € falsch berechnet).',
      ],
    },
    reasoningModels: {
      title: 'CoT vs. integrierte Reasoning-Modelle (2026)',
      content: [
        '**2026 haben die Frontier-Modelle – Claude Opus 4.7, OpenAI o3, Gemini Deep Think – integrierte Denkmodi, die Chain-of-Thought automatisch internalisieren.** Sie müssen keine „denk Schritt für Schritt"-Anweisungen auf diesen Modellen hinzufügen.',
        '**Wann Prompt-Level CoT verwenden:** Nicht-Thinking-Modelle (Claude Haiku 4.5, GPT-4o mini, Gemini Flash, Llama 4), lokale LLMs oder wenn Sie die zusätzlichen Kosten für Thinking-Token-Budgets vermeiden möchten.',
        '**Wann integrierte Thinking-Modi verwenden:** Maximale Genauigkeit auf Frontier-Modellen, mathematiklastige Aufgaben, komplexe Analysen. Diese Modelle berechnen Thinking-Token separat (üblicherweise höherer Satz als Output-Token).',
      ],
      columns: ['Ansatz', 'Am besten für', 'Kosten', 'Transparenz', 'Modelle'],
      rows: [
        { 'Ansatz': 'Prompt-Level CoT („denk Schritt für Schritt")', 'Am besten für': 'Kleine Modelle, lokale LLMs, kostensensitive Aufgaben', 'Kosten': 'Erhöht Output-Token', 'Transparenz': 'Vollständig: sichtbare Schritte in der Ausgabe', 'Modelle': 'Haiku, Flash, LLaMA, Qwen' },
        { 'Ansatz': 'Claude Extended Thinking (Opus 4.7, Sonnet 4.6)', 'Am besten für': 'Komplexe Analysen, maximale Genauigkeit', 'Kosten': 'Separates Thinking-Token-Budget (Input-Satz)', 'Transparenz': 'Inspector-Trace via API', 'Modelle': 'Claude Opus 4.7, Claude Sonnet 4.6' },
        { 'Ansatz': 'OpenAI o3', 'Am besten für': 'Schwierigste Probleme (Mathe, Coding, Wettbewerbe)', 'Kosten': 'Thinking-Token-Budget (höherer Tier)', 'Transparenz': 'Verstecktes Denken, sichtbare Ausgabe', 'Modelle': 'OpenAI o3' },
        { 'Ansatz': 'Gemini Deep Think', 'Am besten für': 'Google Cloud Integration, Gemini-Ökosystem', 'Kosten': 'Thinking-Token separat von Ausgabe', 'Transparenz': 'thinking_level Parameter (LOW, MEDIUM, HIGH)', 'Modelle': 'Gemini 3.1 Pro' },
        { 'Ansatz': 'DeepSeek R1', 'Am besten für': 'Open-Weights-Option, On-Device Reasoning', 'Kosten': 'Sichtbares Denken in Ausgabetext gestreamt', 'Transparenz': 'Vollständig: inline CoT in Ausgabe', 'Modelle': 'DeepSeek R1' },
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Tipp',
          text: 'Verwenden Sie für kostenbewusste Systeme Prompt-Level CoT auf kleineren Modellen. Für maximale Genauigkeit bei schwierigen Problemen nutzen Sie o3 oder Claude Extended Thinking und lassen das Modell das Denken intern handhaben.'
        }
      ],
    },
    cotVariants: {
      title: 'Chain-of-Thought Varianten und Erweiterungen',
      content: [
        '**Über das grundlegende „denk Schritt für Schritt"-Muster hinaus haben Forscher mehrere CoT-Varianten entwickelt, die jeweils für verschiedene Problemtypen optimiert sind.**',
      ],
      items: [
        '**Zero-shot CoT:** Fragen Sie „Denken wir Schritt für Schritt" ohne Beispiele. Funktioniert auf den meisten Modellen und ist am einfachsten zu implementieren. Boost: ~10–20 % Genauigkeitsverbesserung bei Denkaufgaben.',
        '**Few-shot CoT:** Zeigen Sie 2–5 durchgearbeitete Beispiele mit expliziter Argumentation, dann fragen Sie das Modell, das gleiche Muster auf ein neues Problem anzuwenden. Zuverlässiger als Zero-shot, erfordert aber manuelle Beispielenerstellung. Boost: ~20–40 % Genauigkeit.',
        '**Self-Consistency (Wang et al., 2023):** Generieren Sie mehrere unabhängige CoT-Argumentationspfade, dann nehmen Sie eine Mehrheitsentscheidung bei der abschließenden Antwort. Deutlich robuster gegen Fehler. Boost: ~30–50 % bei schwierigen Aufgaben.',
        '**Tree of Thought (ToT):** Anstelle einer linearen Kette erkunden Sie mehrere Argumentationszweige und reduzieren schwache aus. Verwenden Sie, wenn es viele mögliche Lösungswege gibt (Planung, Spielaufgaben, kreative Aufgaben).',
        '**ReAct (Reasoning + Acting):** Verflechten Sie Argumentation mit externen Aktionen – rufen Sie APIs auf, durchsuchen Datenbanken oder führen Code aus – und integrieren Sie die Ergebnisse zurück in den nächsten Argumentationsschritt. Am besten für reale Aufgaben, die aktuelle Daten oder Verifikation benötigen.',
      ],
    },
    modelComparison: {
      title: 'Modellvergleich: Wie Modelle CoT Prompting handhaben (2026)',
      columns: ['Modell', 'Prompt-Level CoT', 'Integriertes Thinking', 'Bester Anwendungsfall', 'Kosten (ca.)'],
      rows: [
        { 'Modell': 'Claude Opus 4.7', 'Prompt-Level CoT': 'Nicht nötig', 'Integriertes Thinking': 'Extended Thinking (Trace inspizierbar via API)', 'Bester Anwendungsfall': 'Maximale Genauigkeit bei Analysen', 'Kosten (ca.)': 'Höher (Input + Output + Thinking-Token)' },
        { 'Modell': 'Claude Sonnet 4.6', 'Prompt-Level CoT': 'Nicht nötig', 'Integriertes Thinking': 'Extended Thinking', 'Bester Anwendungsfall': 'Ausgeglichenes Kosten/Genauigkeit-Verhältnis', 'Kosten (ca.)': 'Mittel' },
        { 'Modell': 'Claude Haiku 4.5', 'Prompt-Level CoT': 'Empfohlen', 'Integriertes Thinking': 'Keine', 'Bester Anwendungsfall': 'Schnelle, kostengünstige Argumentation', 'Kosten (ca.)': 'Niedrig' },
        { 'Modell': 'OpenAI o3', 'Prompt-Level CoT': 'Nicht nötig', 'Integriertes Thinking': 'Effort-Levels (low, medium, high, xhigh)', 'Bester Anwendungsfall': 'Probleme auf Wettbewerbsniveau', 'Kosten (ca.)': 'Sehr hoch (Thinking-Token Tier)' },
        { 'Modell': 'GPT-4o mini', 'Prompt-Level CoT': 'Empfohlen', 'Integriertes Thinking': 'Keine', 'Bester Anwendungsfall': 'Budgetbewusste Bereitstellung', 'Kosten (ca.)': 'Sehr niedrig' },
        { 'Modell': 'Gemini 3.1 Pro', 'Prompt-Level CoT': 'Funktioniert', 'Integriertes Thinking': 'Deep Think (thinking_level Param)', 'Bester Anwendungsfall': 'Google Cloud Integration', 'Kosten (ca.)': 'Mittel-Hoch' },
        { 'Modell': 'Gemini Flash', 'Prompt-Level CoT': 'Empfohlen', 'Integriertes Thinking': 'Keine', 'Bester Anwendungsfall': 'Schnelle Antworten', 'Kosten (ca.)': 'Niedrig' },
        { 'Modell': 'DeepSeek R1', 'Prompt-Level CoT': 'Nicht nötig', 'Integriertes Thinking': 'Inline Reasoning in Ausgabe', 'Bester Anwendungsfall': 'Open-Weights, On-Device', 'Kosten (ca.)': 'Kostenlos (Open Source)' },
        { 'Modell': 'Llama 4', 'Prompt-Level CoT': 'Empfohlen', 'Integriertes Thinking': 'Keine', 'Bester Anwendungsfall': 'Lokale Bereitstellung, Datenschutz', 'Kosten (ca.)': 'Self-Hosted (Compute-abhängig)' },
      ],
    },
    relatedReading: {
      title: 'Weiterführende Literatur',
      items: [
        '[Was ist Prompt Engineering? Ein kompletter Leitfaden 2026](/prompt-engineering/what-is-prompt-engineering?lang=de)',
        '[Strukturierte Ausgaben & JSON Schema Prompting](/prompt-engineering/structured-output?lang=de)',
        '[So reduzieren Sie AI Hallucination](/prompt-engineering/reducing-hallucination?lang=de)',
        '[Constrained Prompting: Modellausgaben begrenzen](/prompt-engineering/constrained-prompting?lang=de)',
        '[Wie Sie ein Multi-Model Dispatch System bauen](/prompt-engineering/multi-model-dispatch?lang=de)',
        '[Prompt Testing & Evaluierungs-Framework](/prompt-engineering/prompt-testing?lang=de)',
      ],
    },
    faqSection: {
      title: 'Häufig gestellte Fragen',
      faqs: [
        {
          q: 'Funktioniert Chain-of-Thought auf allen Modellen?',
          a: 'Chain-of-Thought funktioniert auf den meisten Modellen mit 7B+ Parametern, aber der Nutzen variiert. Es ist am wirksamsten auf mittleren und kleineren Modellen (Haiku, Flash, Llama 4). Bei Frontier-Modellen (Claude Opus 4.7, o3) sind integrierte Thinking-Modi oft effizienter als Prompt-Level CoT.'
        },
        {
          q: 'Erhöht Chain-of-Thought die Kosten?',
          a: 'Ja, Prompt-Level CoT erhöht die Anzahl der Output-Token (da das Modell die Argumentation vor der abschließenden Antwort schreibt). Integrierte Thinking-Modi (Claude Extended Thinking, OpenAI o3) nutzen separate Thinking-Token-Budgets, die unterschiedliche Abrechnungssätze haben können. Testen Sie beide in Ihrem Anwendungsfall, um den Kompromiss zwischen Kosten und Genauigkeit zu vergleichen.'
        },
        {
          q: 'Wann sollte ich Few-shot CoT statt Zero-shot verwenden?',
          a: 'Verwenden Sie zunächst Zero-shot CoT – es ist einfacher und funktioniert in den meisten Fällen. Wechseln Sie zu Few-shot (mit 2–5 Beispielen), wenn Zero-shot unzuverlässig ist oder wenn Ihre Domäne spezifische Argumentationsmuster erfordert (z. B. Finanzanalyse mit standardisierter Zeilenstruktur).'
        },
        {
          q: 'Kann ich Chain-of-Thought mit strukturierter Ausgabe (JSON) kombinieren?',
          a: 'Ja. Sie können das Modell auffordern, sein Denken zunächst in Klartext zu zeigen, dann ein JSON-Objekt mit der abschließenden Antwort auszugeben. Kombinieren Sie die Anweisungen: „Denk Schritt für Schritt. Geben Sie dann Ihr Ergebnis als gültiges JSON aus." Dies ist häufig in Produktionssystemen.'
        },
        {
          q: 'Was ist der Unterschied zwischen Chain-of-Thought und Tree-of-Thought?',
          a: 'Chain-of-Thought ist eine lineare Abfolge: Schritt 1 → Schritt 2 → ... → Conclusion. Tree-of-Thought erkundet mehrere Zweige (alternative Argumentationspfade) und reduziert schwächere aus, bevor die Antwort erreicht wird. Tree-of-Thought ist mächtiger, aber teurer (benötigt mehrere Modellaufrufe).'
        },
        {
          q: 'Muss ich bei OpenAI o3 Chain-of-Thought Prompting verwenden?',
          a: 'Nein. OpenAI o3 hat integriertes Thinking, das automatisch aktiviert wird. Sie müssen keine „denk Schritt für Schritt"-Anweisungen hinzufügen. Geben Sie o3 einfach das Problem und stellen Sie das Effort Level (low/medium/high/xhigh) ein, um zu steuern, wie viel Thinking-Budget ausgegeben wird.'
        },
        {
          q: 'Muss ich bei der Verwendung von Sprachmodellen in der EU die DSGVO beachten?',
          a: 'Ja. Lokale LLMs mit Chain-of-Thought ermöglichen Datenresidenz und verringern die Abhängigkeit von Cloudanbietern. Bei der Nutzung von API-basierten Modellen müssen Sie Datenverarbeitungsverträge (Data Processing Agreements) prüfen und sicherstellen, dass Sie keine sensiblen Daten ohne Zustimmung an externe Server senden. BSI-Grundschutz-Kataloge empfehlen On-Premise-Lösungen für hochsensible Daten.'
        },
        {
          q: 'Ist Chain-of-Thought für den deutschen Mittelstand geeignet?',
          a: 'Ja, besonders wenn Sie lokale oder selbstgehostete Modelle einsetzen. Kleine und mittlere Unternehmen profitieren von den Transparenz- und Audit-Vorteilen von Chain-of-Thought (auditable Denkprozesse für Compliance). Mit Tools wie Ollama oder LM Studio können Sie CoT kostengünstig auf Standardhardware einsetzen.'
        },
      ],
    },
    sources: {
      title: 'Quellen und weiterführende Literatur',
      items: [
        'Wei, J., Wang, X., Schuurmans, D., et al. (2022). „Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arXiv:2201.11903',
        'Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). „Large Language Models are Zero-Shot Reasoners." NeurIPS 2022. arXiv:2205.11916',
        'Wang, X., Wei, J., Schuurmans, D., et al. (2023). „Self-Consistency Improves Chain of Thought Reasoning in Language Models." ICLR 2023. arXiv:2203.11171',
        'Anthropic. (2024). „Extended Thinking in Claude." Technische Dokumentation zu Claude Opus 4.7 und Sonnet 4.6 Thinking-Fähigkeiten.',
        'OpenAI. (2026). „OpenAI o3: Reasoning Models for Competition-Level Problem Solving." OpenAI Dokumentation und Forschungsankündigungen.',
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Funktioniert Chain-of-Thought auf allen Modellen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chain-of-Thought funktioniert auf den meisten Modellen mit 7B+ Parametern, aber der Nutzen variiert. Es ist am wirksamsten auf mittleren und kleineren Modellen (Haiku, Flash, Llama 4). Bei Frontier-Modellen (Claude Opus 4.7, o3) sind integrierte Thinking-Modi oft effizienter als Prompt-Level CoT.'
        }
      },
      {
        '@type': 'Question',
        name: 'Erhöht Chain-of-Thought die Kosten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, Prompt-Level CoT erhöht die Anzahl der Output-Token (da das Modell die Argumentation vor der abschließenden Antwort schreibt). Integrierte Thinking-Modi (Claude Extended Thinking, OpenAI o3) nutzen separate Thinking-Token-Budgets, die unterschiedliche Abrechnungssätze haben können. Testen Sie beide in Ihrem Anwendungsfall, um den Kompromiss zwischen Kosten und Genauigkeit zu vergleichen.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wann sollte ich Few-shot CoT statt Zero-shot verwenden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Verwenden Sie zunächst Zero-shot CoT – es ist einfacher und funktioniert in den meisten Fällen. Wechseln Sie zu Few-shot (mit 2–5 Beispielen), wenn Zero-shot unzuverlässig ist oder wenn Ihre Domäne spezifische Argumentationsmuster erfordert (z. B. Finanzanalyse mit standardisierter Zeilenstruktur).'
        }
      },
      {
        '@type': 'Question',
        name: 'Kann ich Chain-of-Thought mit strukturierter Ausgabe (JSON) kombinieren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Sie können das Modell auffordern, sein Denken zunächst in Klartext zu zeigen, dann ein JSON-Objekt mit der abschließenden Antwort auszugeben. Kombinieren Sie die Anweisungen: „Denk Schritt für Schritt. Geben Sie dann Ihr Ergebnis als gültiges JSON aus." Dies ist häufig in Produktionssystemen.'
        }
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen Chain-of-Thought und Tree-of-Thought?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chain-of-Thought ist eine lineare Abfolge: Schritt 1 → Schritt 2 → ... → Conclusion. Tree-of-Thought erkundet mehrere Zweige (alternative Argumentationspfade) und reduziert schwächere aus, bevor die Antwort erreicht wird. Tree-of-Thought ist mächtiger, aber teurer (benötigt mehrere Modellaufrufe).'
        }
      },
      {
        '@type': 'Question',
        name: 'Muss ich bei OpenAI o3 Chain-of-Thought Prompting verwenden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein. OpenAI o3 hat integriertes Thinking, das automatisch aktiviert wird. Sie müssen keine „denk Schritt für Schritt"-Anweisungen hinzufügen. Geben Sie o3 einfach das Problem und stellen Sie das Effort Level (low/medium/high/xhigh) ein, um zu steuern, wie viel Thinking-Budget ausgegeben wird.'
        }
      },
      {
        '@type': 'Question',
        name: 'Muss ich bei der Verwendung von Sprachmodellen in der EU die DSGVO beachten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Lokale LLMs mit Chain-of-Thought ermöglichen Datenresidenz und verringern die Abhängigkeit von Cloudanbietern. Bei der Nutzung von API-basierten Modellen müssen Sie Datenverarbeitungsverträge (Data Processing Agreements) prüfen und sicherstellen, dass Sie keine sensiblen Daten ohne Zustimmung an externe Server senden. BSI-Grundschutz-Kataloge empfehlen On-Premise-Lösungen für hochsensible Daten.'
        }
      },
      {
        '@type': 'Question',
        name: 'Ist Chain-of-Thought für den deutschen Mittelstand geeignet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, besonders wenn Sie lokale oder selbstgehostete Modelle einsetzen. Kleine und mittlere Unternehmen profitieren von den Transparenz- und Audit-Vorteilen von Chain-of-Thought (auditable Denkprozesse für Compliance). Mit Tools wie Ollama oder LM Studio können Sie CoT kostengünstig auf Standardhardware einsetzen.'
        }
      },
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chain-of-Thought Varianten',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Zero-shot CoT',
        description: 'Fragen Sie „Denken wir Schritt für Schritt" ohne Beispiele. Funktioniert auf den meisten Modellen und ist am einfachsten. Boost: ~10–20 % Genauigkeitsverbesserung.'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Few-shot CoT',
        description: 'Zeigen Sie 2–5 durchgearbeitete Beispiele mit expliziter Argumentation, dann wenden Sie auf ein neues Problem an. Zuverlässiger als Zero-shot. Boost: ~20–40 % Genauigkeit.'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Self-Consistency',
        description: 'Generieren Sie mehrere unabhängige Argumentationspfade, nehmen Sie eine Mehrheitsentscheidung. Deutlich robuster. Boost: ~30–50 % bei schwierigen Aufgaben.'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Tree of Thought',
        description: 'Erkunden Sie mehrere Argumentationszweige und reduzieren schwache aus. Am besten für Planungs- und Spielaufgaben mit vielen Lösungswegen.'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'ReAct',
        description: 'Verflechten Sie Argumentation mit externen Aktionen (API-Aufrufe, Suchen, Code-Ausführung). Am besten für reale Aufgaben mit aktuellen Daten oder Verifikation.'
      },
    ]
  },
},
    fr: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques',
  title: 'Chain-of-Thought Prompting : Faites penser l\'IA à haute voix',
  intro: 'Le Chain-of-Thought Prompting demande explicitement au modèle de montrer ses étapes de raisonnement au lieu de sauter directement à la réponse finale. Cela rend les décisions complexes plus faciles à auditer, déboguer et améliorer au fil du temps.',
  leadAnswerBlock: '**Le Chain-of-Thought (CoT) Prompting demande à un modèle d\'IA de montrer ses étapes de raisonnement avant de donner une réponse finale.** Cela améliore la précision sur les tâches mathématiques, logiques et multi-étapes. En 2026, les modèles frontière comme Claude Opus 4.7 et OpenAI o3 disposent de modes de raisonnement intégrés qui automatisent CoT en interne – mais le CoT au niveau du prompt reste précieux sur les modèles plus petits et sans raisonnement intégré, où c\'est le principal moyen d\'obtenir une pensée structurée.',
  publishDate: '2026-03-26',
  dateModified: '2026-05-03',
  lastFactChecked: '2026-05-03',
  readTime: '13 min de lecture',
  seoTitle: 'Chain-of-Thought: Améliorer la Précision de 40%',
  metaDescription: 'Le Chain-of-Thought améliore la précision de 10-40 % sur les tâches mathématiques et logiques. Découvrez quand et comment l\'utiliser.',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Chain-of-Thought Prompting',
  audience: 'Développeurs, data scientists et équipes travaillant avec Claude, Gemini ou des LLMs locaux',
  next_refresh_due: '2026-11-03',
  aboutTopics: ['Chain-of-Thought Prompting', 'Raisonnement Structuré', 'Ingénierie des Prompts', 'Modèles de Raisonnement'],
  toc: [
    { label: 'Points clés', anchor: '#points-cles' },
    { label: 'Faits rapides', anchor: '#faits-rapides' },
    { label: 'Qu\'est-ce que le Chain-of-Thought Prompting ?', anchor: '#quest-ce-que' },
    { label: 'Pourquoi cela importe', anchor: '#pourquoi-importe' },
    { label: 'Quand cela aide (et quand ce n\'est pas nécessaire)', anchor: '#quand-aide' },
    { label: 'Exemple : avec et sans Chain-of-Thought', anchor: '#exemple' },
    { label: 'Exemple mathématique : calcul de chiffre d\'affaires', anchor: '#exemple-maths' },
    { label: 'Comment écrire des prompts efficaces', anchor: '#prompts-efficaces' },
    { label: 'Chain-of-Thought dans PromptQuorum', anchor: '#in-promptquorum' },
    { label: 'Comment utiliser CoT', anchor: '#comment-utiliser' },
    { label: 'CoT vs modèles de raisonnement intégrés', anchor: '#cot-vs-raisonnement' },
    { label: 'Variantes Chain-of-Thought', anchor: '#variantes' },
    { label: 'Comparaison de modèles', anchor: '#comparaison-modeles' },
    { label: 'Ressources connexes', anchor: '#ressources' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Sources', anchor: '#sources' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting?lang=fr',
    inLanguage: 'fr',
    headline: 'Chain-of-Thought Prompting : Faites penser l\'IA à haute voix',
    description: 'Ce qu\'est le Chain-of-Thought Prompting, pourquoi cela importe, et comment structurer les prompts pour que les modèles affichent leur raisonnement clairement.',
    datePublished: '2026-03-26',
    dateModified: '2026-05-03',
    keywords: ['Chain-of-Thought Prompting', 'raisonnement étape par étape', 'ingénierie des prompts', 'modèles de raisonnement', 'extended thinking'],
    author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Chain-of-Thought Prompting' },
      { '@type': 'Thing', name: 'Modèles de langage' },
      { '@type': 'Thing', name: 'Raisonnement' },
      { '@type': 'Thing', name: 'Sortie structurée' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
  },
  sections: {
    tldr: {
      isTldr: true,
      title: 'Points clés',
      numberedItems: [
        '**Le Chain-of-Thought Prompting demande aux modèles d\'afficher leurs étapes de raisonnement avant la réponse finale**, améliore la précision sur les tâches mathématiques, logiques et multi-étapes.',
        'Le Zero-shot CoT (« réfléchis pas à pas ») fonctionne sur la plupart des modèles. Le Few-shot CoT (avec exemples) est plus fiable.',
        'En 2026, les modèles comme Claude Opus 4.7 et OpenAI o3 disposent de **modes de raisonnement intégrés** qui remplacent le CoT au niveau du prompt – vous n\'avez pas besoin de dire « réfléchis pas à pas ».',
        'CoT augmente les tokens de sortie et donc les coûts. Les modes de raisonnement intégrés ont des budgets de tokens de raisonnement séparés avec leur propre facturation.',
        'Utilisez le CoT au niveau du prompt sur les modèles plus petits (Haiku, Flash, LLaMA 4) pour une raisonnement économique. Utilisez les modes de raisonnement intégrés sur les modèles frontière pour la précision maximale.',
        'CoT est précieux pour les mathématiques, la logique, la planification et l\'analyse des causes. Omettez-le pour la classification simple, les réponses courtes et la rédaction rapide.',
      ]
    },
    quickFacts: {
      title: 'Faits rapides',
      numberedItems: [
        '**Initié:** Wei et al. (2022), Google Brain – paper fondateur NeurIPS 2022',
        '**Résultat clé:** Zero-shot CoT a augmenté la précision de PaLM 540B de 17,7 % → 78,7 % sur MultiArith',
        '**Phrase déclencheur:** « Réfléchissons pas à pas » (Zero-shot) ou exemples (Few-shot)',
        '**Évolution 2026:** Les modes de raisonnement intégrés (o3, Claude Extended Thinking) automatisent CoT en interne',
        '**Impact sur les coûts:** CoT au niveau du prompt = plus de tokens; modes de raisonnement = budget séparé de tokens de raisonnement',
        '**Meilleur pour CoT au niveau du prompt:** Modèles sans raisonnement intégré (Claude Haiku 4.5, Gemini Flash, GPT-4o mini, LLaMA 4 Scout)',
      ]
    },
    whatIsChainOfThought: {
      title: 'Qu\'est-ce que le Chain-of-Thought Prompting ?',
      content: [
        '**Le Chain-of-Thought Prompting incite le modèle à argumenter pas à pas avant de conclure.** Au lieu de retourner simplement « la réponse », le modèle écrit les calculs intermédiaires, les étapes logiques ou les explications.',
        'Vous déclenchez ce comportement par des instructions comme « réfléchis pas à pas » ou en fournissant des exemples où le raisonnement est explicite. Le résultat : une trace lisible qui montre comment le modèle a atteint sa conclusion.',
      ],
    },
    whyItMatters: {
      title: 'Pourquoi le Chain-of-Thought Prompting importe',
      content: [
        '**Le Chain-of-Thought Prompting importe car il rend le comportement des modèles plus transparent sur les tâches multi-étapes.** En voyant chaque étape, vous pouvez repérer les malinterprétations, les hypothèses manquantes ou les erreurs de calcul.',
        'Cet avantage est particulièrement précieux en analyse, planification et dépannage. Au lieu d\'une sortie unique et opaque, vous obtenez un récit vérifiable et documentable.',
      ],
      callouts: [
        {
          type: 'info',
          label: 'Fonctionne avec les modèles locaux',
          text: 'Le Chain-of-Thought fonctionne sur n\'importe quel modèle avec 7B+ paramètres. Testez-le localement avec [Ollama ou LM Studio](https://www.promptquorum.com/local-llms).'
        }
      ],
    },
    whenItHelps: {
      title: 'Quand le Chain-of-Thought aide',
      content: [
        '**Le Chain-of-Thought Prompting brille sur les tâches qui se divisent naturellement en étapes claires, mais n\'est pas nécessaire pour chaque prompt.** Il excelle quand le chemin est aussi important que la destination.',
        'Le raisonnement en chaîne de pensée est ce qui permet à un agent à appel d\'outils de rester fiable sur des tâches multi-étapes. Pour une stack d\'agent local qui donne à un modèle compatible CoT la possibilité d\'interroger des bases de données et d\'éditer des fichiers, voir [Agents IA locaux avec MCP](/power-local-llm/local-ai-agents-with-mcp-2026?lang=fr).',
        'Les bons cas d\'usage incluent:',
      ],
      items: [
        'Problèmes de raisonnement mathématique et quantitatif.',
        'Énigmes logiques multi-étapes ou analyses décisionnelles.',
        'Analyses de causes profondes, examens post-mortem d\'incidents et discussions de compromis.',
        'Tâches de planification où la séquence d\'actions doit être explicite.',
      ],
    },
    whenItDoesntHelp: {
      content: [
        'Pour la classification simple, la rédaction rapide ou les réponses factuelles brèves, le Chain-of-Thought ajoute souvent de la verbosité sans grande valeur ajoutée. Dans les domaines sensibles, vous préférerez parfois garder le raisonnement interne et afficher uniquement la réponse finale aux utilisateurs.',
      ],
    },
    example: {
      title: 'Exemple : sans et avec Chain-of-Thought',
      content: [
        '**La différence devient claire en comparant un prompt direct avec un autre qui demande explicitement du raisonnement.** Voici un exemple simple de décision.',
        '**[Mauvais prompt]**',
        '"Quel projet devrions-nous prioriser au prochain trimestre?"',
        '**[Bon prompt]**',
        '"Vous êtes responsable des opérations produit. Nous avons trois projets candidats pour le prochain trimestre. Utilisez le raisonnement en chaîne de pensée pour décider quel projet prioriser. 1) Listez les critères de décision que vous utiliserez (par exemple, impact sur le chiffre d\'affaires, risque, alignement stratégique). 2) Évaluez chaque projet par rapport à ces critères étape par étape. 3) Faites une recommandation claire et justifiez-la en 3–5 phrases. À la fin, fournissez une courte réponse finale commençant par `Recommandation:` sur une ligne séparée."',
        'Dans la version « bonne », le modèle explique comment il a choisi ses critères, comment chaque projet se classe, puis propose une recommandation que vous pouvez contester ou accepter.',
      ],
    },
    howToWrite: {
      title: 'Comment écrire des prompts Chain-of-Thought efficaces',
      content: [
        '**Pour écrire des prompts Chain-of-Thought efficaces, vous devez définir la structure du raisonnement et celle de la réponse finale.** Les demandes vagues comme « explique plus » sont moins fiables que des instructions concrètes.',
        'Un modèle pratique est:',
      ],
      items: [
        'Assignez un rôle au modèle (par exemple « Vous êtes un analyste de données senior »).',
        'Spécifiez qu\'il doit penser étape par étape ou utiliser le Chain-of-Thought.',
        'Définissez les sections de raisonnement attendues (par exemple hypothèses, calculs, comparaison, conclusion).',
        'Demandez une réponse finale courte et clairement marquée à la fin pour une utilisation rapide.',
      ],
    },
    howtWriteNote: {
      content: [
        'Cela sépare le raisonnement détaillé de la sortie concise, ce qui est utile quand vous intégrez le résultat dans d\'autres outils ou rapports.',
      ],
    },
    inPromptQuorum: {
      title: 'Chain-of-Thought Prompting dans PromptQuorum',
      content: [
        '**PromptQuorum est un outil de dispatch multi-modèles où vous pouvez appliquer le Chain-of-Thought Prompting de manière cohérente sur différents modèles.** Vous écrivez un prompt Chain-of-Thought structuré et l\'envoyez à plusieurs fournisseurs en parallèle.',
        'Dans PromptQuorum, vous pouvez:',
      ],
      items: [
        'Combiner les instructions Chain-of-Thought avec des frameworks centrés sur le raisonnement comme TRACE ou APE pour que les étapes de raisonnement soient explicitement étiquetées.',
        'Comparer comment différents modèles traitent la même tâche de raisonnement et inspecter leurs traces pas à pas côte à côte.',
        'Enregistrer les prompts Chain-of-Thought comme modèles pour les analyses récurrentes, les revues d\'incidents ou les décisions stratégiques.',
      ],
    },
    inPromptQuorumClosing: {
      content: [
        'Cela transforme le Chain-of-Thought Prompting d\'une astuce ponctuelle en partie intégrante et reproductible de votre processus décisionnel.',
      ],
    },
    howToStart: {
      title: 'Comment utiliser le Chain-of-Thought (CoT) Prompting',
      numberedItems: [
        '**Pour les tâches logiques, de raisonnement ou de dépannage, demandez au modèle de « réfléchir pas à pas » avant de répondre.** Au lieu de « Quel est le bug? », demandez « Retracez l\'exécution pas à pas, puis identifiez le bug."',
        '**Fournissez un exemple travaillé montrant le raisonnement étape par étape.** Ne le décrivez pas seulement—montrez au modèle ce que cela ressemble. Exemple: « Tout d\'abord, je vérifie la signature de la fonction... Puis, je retrace le premier appel avec l\'entrée X..."',
        '**Utilisez des prompts explicites comme « Réfléchissons pas à pas » ou « D\'abord... Ensuite...»** Ceux-ci déclenchent un raisonnement plus réfléchi dans le modèle.',
        '**Pour les problèmes complexes, demandez au modèle de retracer les résultats intermédiaires.** Exemple: « Retracez l\'exécution de cette fonction pour l\'entrée [5]. Montrez la valeur de chaque variable après chaque ligne."',
        '**Combinez CoT avec des résultats vérifiables: demandez au modèle de montrer son travail pour que vous puissiez l\'auditer.** « Expliquez votre raisonnement à chaque étape. Si vous faites une erreur, je devrais pouvoir la voir dans votre travail présenté."',
      ],
    },
    mathExample: {
      title: 'Exemple mathématique : calcul de chiffre d\'affaires',
      content: [
        '**Sans CoT, le modèle peut donner une seule réponse finale. Avec CoT, le modèle affiche les calculs étape par étape.**',
        '**Sans CoT:**',
        '« Un client achète 50 unités à 15 € l\'unité, mais bénéficie d\'une réduction de 10 %. Combien paie le client ? »',
        'Modèle: « 675 € »',
        '**Avec CoT:**',
        '« Un client achète 50 unités à 15 € l\'unité, mais bénéficie d\'une réduction de 10 %. Travaillez pas à pas: 1) Calculez le sous-total. 2) Calculez le montant de la réduction. 3) Soustrayez la réduction du sous-total pour obtenir le prix final. »',
        'Modèle: « 1) Sous-total = 50 × 15 € = 750 €. 2) Réduction = 10 % de 750 € = 75 €. 3) Prix final = 750 € − 75 € = 675 €. »',
        'Les deux donnent la même réponse, mais la version CoT montre les calculs et permet de détecter les erreurs (par exemple, si quelqu\'un calcule mal 10 % de 750 €).',
      ],
    },
    reasoningModels: {
      title: 'CoT vs modèles de raisonnement intégrés (2026)',
      content: [
        '**En 2026, les modèles frontière – Claude Opus 4.7, OpenAI o3, Gemini Deep Think – disposent de modes de raisonnement intégrés qui internalisent automatiquement le Chain-of-Thought.** Vous n\'avez pas besoin d\'ajouter des instructions « réfléchis pas à pas » sur ces modèles.',
        '**Quand utiliser le CoT au niveau du prompt:** Modèles sans raisonnement intégré (Claude Haiku 4.5, GPT-4o mini, Gemini Flash, Llama 4), LLMs locaux, ou quand vous voulez éviter le coût supplémentaire des budgets de tokens de raisonnement.',
        '**Quand utiliser les modes de raisonnement intégrés:** Précision maximale sur les modèles frontière, tâches lourdes en mathématiques, analyses complexes. Ces modèles facturent les tokens de raisonnement séparément (généralement à un taux plus élevé que les tokens de sortie).',
      ],
      columns: ['Approche', 'Meilleure pour', 'Coûts', 'Transparence', 'Modèles'],
      rows: [
        { 'Approche': 'CoT au niveau du prompt (« réfléchis pas à pas »)', 'Meilleure pour': 'Petits modèles, LLMs locaux, tâches sensibles aux coûts', 'Coûts': 'Augmente les tokens de sortie', 'Transparence': 'Complet: étapes visibles dans la sortie', 'Modèles': 'Haiku, Flash, LLaMA, Qwen' },
        { 'Approche': 'Claude Extended Thinking (Opus 4.7, Sonnet 4.6)', 'Meilleure pour': 'Analyses complexes, précision maximale', 'Coûts': 'Budget séparé de tokens de raisonnement (taux d\'entrée)', 'Transparence': 'Trace inspectable via API', 'Modèles': 'Claude Opus 4.7, Claude Sonnet 4.6' },
        { 'Approche': 'OpenAI o3', 'Meilleure pour': 'Problèmes les plus difficiles (maths, codage, compétitions)', 'Coûts': 'Budget de tokens de raisonnement (tier supérieur)', 'Transparence': 'Raisonnement caché, sortie visible', 'Modèles': 'OpenAI o3' },
        { 'Approche': 'Gemini Deep Think', 'Meilleure pour': 'Intégration Google Cloud, écosystème Gemini', 'Coûts': 'Tokens de réflexion séparés de la sortie', 'Transparence': 'Paramètre thinking_level (LOW, MEDIUM, HIGH)', 'Modèles': 'Gemini 3.1 Pro' },
        { 'Approche': 'DeepSeek R1', 'Meilleure pour': 'Option open-weights, raisonnement on-device', 'Coûts': 'Raisonnement visible en flux dans le texte de sortie', 'Transparence': 'Complet: CoT inline dans la sortie', 'Modèles': 'DeepSeek R1' },
      ],
      callouts: [
        {
          type: 'tip',
          label: 'Conseil',
          text: 'Pour les coûts, utilisez le CoT au niveau du prompt sur les modèles plus petits. Pour la précision maximale sur les problèmes difficiles, utilisez o3 ou Claude Extended Thinking et laissez le modèle gérer le raisonnement en interne.'
        }
      ],
    },
    cotVariants: {
      title: 'Variantes et extensions Chain-of-Thought',
      content: [
        '**Au-delà du modèle de base « réfléchis pas à pas », les chercheurs ont développé plusieurs variantes CoT, chacune optimisée pour différents types de problèmes.**',
      ],
      items: [
        '**Zero-shot CoT:** Demandez « Réfléchissons pas à pas » sans exemples. Fonctionne sur la plupart des modèles et est le plus simple à mettre en œuvre. Boost: ~10–20 % d\'amélioration de la précision.',
        '**Few-shot CoT:** Montrez 2–5 exemples travaillés avec un raisonnement explicite, puis demandez au modèle d\'appliquer le même modèle à un nouveau problème. Plus fiable que zero-shot mais nécessite la création manuelle d\'exemples. Boost: ~20–40 % de précision.',
        '**Self-Consistency (Wang et al., 2023):** Générez plusieurs chemins de raisonnement CoT indépendants, puis prenez un vote à la majorité sur la réponse finale. Significativement plus robuste aux erreurs. Boost: ~30–50 % sur les tâches difficiles.',
        '**Tree of Thought (ToT):** Au lieu d\'une chaîne linéaire, explorez plusieurs branches de raisonnement et élaguerez les faibles. Utilisez quand il y a de nombreux chemins de solution possibles (planification, jeux, tâches créatives).',
        '**ReAct (Reasoning + Acting):** Entrelacez le raisonnement avec des actions externes – appels API, recherches, exécution de code – et incorporez les résultats dans l\'étape de raisonnement suivante. Meilleur pour les tâches réelles nécessitant des données en direct ou une vérification.',
      ],
    },
    modelComparison: {
      title: 'Comparaison de modèles : comment les modèles gèrent le CoT Prompting (2026)',
      columns: ['Modèle', 'CoT au niveau du prompt', 'Raisonnement intégré', 'Meilleur cas d\'usage', 'Coût (approx.)'],
      rows: [
        { 'Modèle': 'Claude Opus 4.7', 'CoT au niveau du prompt': 'Non nécessaire', 'Raisonnement intégré': 'Extended thinking (trace inspectable via API)', 'Meilleur cas d\'usage': 'Analyses de précision maximale', 'Coût (approx.)': 'Plus élevé (entrée + sortie + tokens de raisonnement)' },
        { 'Modèle': 'Claude Sonnet 4.6', 'CoT au niveau du prompt': 'Non nécessaire', 'Raisonnement intégré': 'Extended thinking', 'Meilleur cas d\'usage': 'Équilibre coûts/précision', 'Coût (approx.)': 'Moyen' },
        { 'Modèle': 'Claude Haiku 4.5', 'CoT au niveau du prompt': 'Recommandé', 'Raisonnement intégré': 'Aucun', 'Meilleur cas d\'usage': 'Raisonnement rapide et économique', 'Coût (approx.)': 'Bas' },
        { 'Modèle': 'OpenAI o3', 'CoT au niveau du prompt': 'Non nécessaire', 'Raisonnement intégré': 'Niveaux d\'effort (bas, moyen, haut, xhaut)', 'Meilleur cas d\'usage': 'Problèmes au niveau des compétitions', 'Coût (approx.)': 'Très élevé (tier tokens de raisonnement)' },
        { 'Modèle': 'GPT-4o mini', 'CoT au niveau du prompt': 'Recommandé', 'Raisonnement intégré': 'Aucun', 'Meilleur cas d\'usage': 'Déploiement sensible aux budgets', 'Coût (approx.)': 'Très bas' },
        { 'Modèle': 'Gemini 3.1 Pro', 'CoT au niveau du prompt': 'Fonctionne', 'Raisonnement intégré': 'Deep Think (param thinking_level)', 'Meilleur cas d\'usage': 'Intégration Google Cloud', 'Coût (approx.)': 'Moyen-Haut' },
        { 'Modèle': 'Gemini Flash', 'CoT au niveau du prompt': 'Recommandé', 'Raisonnement intégré': 'Aucun', 'Meilleur cas d\'usage': 'Réponses rapides', 'Coût (approx.)': 'Bas' },
        { 'Modèle': 'DeepSeek R1', 'CoT au niveau du prompt': 'Non nécessaire', 'Raisonnement intégré': 'Raisonnement inline dans la sortie', 'Meilleur cas d\'usage': 'Open-weights, on-device', 'Coût (approx.)': 'Gratuit (open source)' },
        { 'Modèle': 'Llama 4', 'CoT au niveau du prompt': 'Recommandé', 'Raisonnement intégré': 'Aucun', 'Meilleur cas d\'usage': 'Déploiement local, confidentialité', 'Coût (approx.)': 'Auto-hébergé (dépend du calcul)' },
      ],
    },
    relatedReading: {
      title: 'Ressources connexes',
      items: [
        '[Qu\'est-ce que l\'ingénierie des prompts ? Un guide complet 2026](/prompt-engineering/what-is-prompt-engineering?lang=fr)',
        '[Sorties structurées et prompting avec schéma JSON](/prompt-engineering/structured-output?lang=fr)',
        '[Comment réduire les hallucinations de l\'IA](/prompt-engineering/reducing-hallucination?lang=fr)',
        '[Constrained Prompting : limiter les sorties des modèles](/prompt-engineering/constrained-prompting?lang=fr)',
        '[Comment construire un système de dispatch multi-modèles](/prompt-engineering/multi-model-dispatch?lang=fr)',
        '[Tests et cadre d\'évaluation de prompts](/prompt-engineering/prompt-testing?lang=fr)',
      ],
    },
    faqSection: {
      title: 'Foire aux questions',
      faqs: [
        {
          q: 'Le Chain-of-Thought fonctionne-t-il sur tous les modèles ?',
          a: 'Le Chain-of-Thought fonctionne sur la plupart des modèles avec 7B+ paramètres, mais le bénéfice varie. Il est plus efficace sur les modèles de taille moyenne et petite (Haiku, Flash, Llama 4). Sur les modèles frontière (Claude Opus 4.7, o3), les modes de raisonnement intégrés sont souvent plus efficaces que le CoT au niveau du prompt.'
        },
        {
          q: 'Le Chain-of-Thought augmente-t-il les coûts ?',
          a: 'Oui, le CoT au niveau du prompt augmente le nombre de tokens de sortie (puisque le modèle écrit le raisonnement avant la réponse finale). Les modes de raisonnement intégrés (Claude Extended Thinking, OpenAI o3) utilisent des budgets de tokens de raisonnement séparés qui peuvent avoir des taux de facturation différents. Testez les deux dans votre cas d\'usage pour comparer le compromis entre coûts et précision.'
        },
        {
          q: 'Quand devrais-je utiliser le Few-shot CoT au lieu du Zero-shot ?',
          a: 'Utilisez d\'abord le Zero-shot CoT – c\'est plus simple et fonctionne dans la plupart des cas. Passez au Few-shot (avec 2–5 exemples) si le Zero-shot est peu fiable ou si votre domaine nécessite des modèles de raisonnement spécifiques (par exemple, analyse financière avec structure de postes standardisée).'
        },
        {
          q: 'Puis-je combiner le Chain-of-Thought avec la sortie structurée (JSON) ?',
          a: 'Oui. Vous pouvez demander au modèle d\'afficher d\'abord son raisonnement en texte clair, puis de produire un objet JSON avec la réponse finale. Combinez les instructions : « Réfléchis pas à pas. Puis produis ton résultat en JSON valide. » Ceci est courant dans les systèmes de production.'
        },
        {
          q: 'Quelle est la différence entre Chain-of-Thought et Tree-of-Thought ?',
          a: 'Chain-of-Thought est une séquence linéaire : étape 1 → étape 2 → ... → conclusion. Tree-of-Thought explore plusieurs branches (chemins de raisonnement alternatifs) et élagage les plus faibles avant d\'arriver à la réponse. Tree-of-Thought est plus puissant mais plus coûteux (nécessite plusieurs appels de modèle).'
        },
        {
          q: 'OpenAI o3 nécessite-t-il du Chain-of-Thought Prompting ?',
          a: 'Non. OpenAI o3 dispose d\'un raisonnement intégré qui s\'active automatiquement. Vous n\'avez pas besoin d\'ajouter des instructions « réfléchis pas à pas ». Donnez simplement à o3 le problème et réglez le niveau d\'effort (bas/moyen/haut/xhaut) pour contrôler le budget de raisonnement à dépenser.'
        },
        {
          q: 'Puis-je auditer le raisonnement des modèles avec raisonnement intégré ?',
          a: 'Oui, mais cela dépend du modèle. Les traces de raisonnement Claude Extended Thinking sont inspectables via API. Le raisonnement d\'OpenAI o3 est masqué par défaut (pour l\'avantage concurrentiel). Le raisonnement Gemini Deep Think est également masqué. Pour une auditabilité complète, utilisez le CoT au niveau du prompt ou DeepSeek R1.'
        },
        {
          q: 'Le Chain-of-Thought Prompting convient-il aux applications en temps réel ?',
          a: 'Le CoT au niveau du prompt ajoute de la latence (plus de tokens de sortie = génération plus lente). Pour les cas d\'usage en temps réel, soit utilisez des modèles plus petits avec un raisonnement minimal, soit utilisez des points d\'extrémité en continu pour afficher les tokens au fur et à mesure. Les modes de raisonnement intégrés peuvent ajouter encore plus de latence ; mesurez votre cas d\'usage spécifique.'
        },
      ],
    },
    sources: {
      title: 'Sources et ressources supplémentaires',
      items: [
        'Wei, J., Wang, X., Schuurmans, D., et al. (2022). « Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. » NeurIPS 2022. arXiv:2201.11903',
        'Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). « Large Language Models are Zero-Shot Reasoners. » NeurIPS 2022. arXiv:2205.11916',
        'Wang, X., Wei, J., Schuurmans, D., et al. (2023). « Self-Consistency Improves Chain of Thought Reasoning in Language Models. » ICLR 2023. arXiv:2203.11171',
        'Anthropic. (2024). « Extended Thinking in Claude. » Documentation technique sur les capacités de raisonnement de Claude Opus 4.7 et Sonnet 4.6.',
        'OpenAI. (2026). « OpenAI o3: Reasoning Models for Competition-Level Problem Solving. » Documentation et annonces de recherche OpenAI.',
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Le Chain-of-Thought fonctionne-t-il sur tous les modèles ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le Chain-of-Thought fonctionne sur la plupart des modèles avec 7B+ paramètres, mais le bénéfice varie. Il est plus efficace sur les modèles de taille moyenne et petite (Haiku, Flash, Llama 4). Sur les modèles frontière (Claude Opus 4.7, o3), les modes de raisonnement intégrés sont souvent plus efficaces que le CoT au niveau du prompt.'
        }
      },
      {
        '@type': 'Question',
        name: 'Le Chain-of-Thought augmente-t-il les coûts ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, le CoT au niveau du prompt augmente le nombre de tokens de sortie (puisque le modèle écrit le raisonnement avant la réponse finale). Les modes de raisonnement intégrés (Claude Extended Thinking, OpenAI o3) utilisent des budgets de tokens de raisonnement séparés qui peuvent avoir des taux de facturation différents. Testez les deux dans votre cas d\'usage pour comparer le compromis entre coûts et précision.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quand devrais-je utiliser le Few-shot CoT au lieu du Zero-shot ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Utilisez d\'abord le Zero-shot CoT – c\'est plus simple et fonctionne dans la plupart des cas. Passez au Few-shot (avec 2–5 exemples) si le Zero-shot est peu fiable ou si votre domaine nécessite des modèles de raisonnement spécifiques (par exemple, analyse financière avec structure de postes standardisée).'
        }
      },
      {
        '@type': 'Question',
        name: 'Puis-je combiner le Chain-of-Thought avec la sortie structurée (JSON) ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Vous pouvez demander au modèle d\'afficher d\'abord son raisonnement en texte clair, puis de produire un objet JSON avec la réponse finale. Combinez les instructions : « Réfléchis pas à pas. Puis produis ton résultat en JSON valide. » Ceci est courant dans les systèmes de production.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quelle est la différence entre Chain-of-Thought et Tree-of-Thought ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chain-of-Thought est une séquence linéaire : étape 1 → étape 2 → ... → conclusion. Tree-of-Thought explore plusieurs branches (chemins de raisonnement alternatifs) et élagage les plus faibles avant d\'arriver à la réponse. Tree-of-Thought est plus puissant mais plus coûteux (nécessite plusieurs appels de modèle).'
        }
      },
      {
        '@type': 'Question',
        name: 'OpenAI o3 nécessite-t-il du Chain-of-Thought Prompting ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non. OpenAI o3 dispose d\'un raisonnement intégré qui s\'active automatiquement. Vous n\'avez pas besoin d\'ajouter des instructions « réfléchis pas à pas ». Donnez simplement à o3 le problème et réglez le niveau d\'effort (bas/moyen/haut/xhaut) pour contrôler le budget de raisonnement à dépenser.'
        }
      },
      {
        '@type': 'Question',
        name: 'Puis-je auditer le raisonnement des modèles avec raisonnement intégré ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, mais cela dépend du modèle. Les traces de raisonnement Claude Extended Thinking sont inspectables via API. Le raisonnement d\'OpenAI o3 est masqué par défaut (pour l\'avantage concurrentiel). Le raisonnement Gemini Deep Think est également masqué. Pour une auditabilité complète, utilisez le CoT au niveau du prompt ou DeepSeek R1.'
        }
      },
      {
        '@type': 'Question',
        name: 'Le Chain-of-Thought Prompting convient-il aux applications en temps réel ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le CoT au niveau du prompt ajoute de la latence (plus de tokens de sortie = génération plus lente). Pour les cas d\'usage en temps réel, soit utilisez des modèles plus petits avec un raisonnement minimal, soit utilisez des points d\'extrémité en continu pour afficher les tokens au fur et à mesure. Les modes de raisonnement intégrés peuvent ajouter encore plus de latence ; mesurez votre cas d\'usage spécifique.'
        }
      },
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Variantes Chain-of-Thought',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Zero-shot CoT',
        description: 'Demandez « Réfléchissons pas à pas » sans exemples. Fonctionne sur la plupart des modèles et est le plus simple. Boost: ~10–20 % amélioration de la précision.'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Few-shot CoT',
        description: 'Montrez 2–5 exemples travaillés avec raisonnement explicite, puis appliquez à un nouveau problème. Plus fiable que zero-shot. Boost: ~20–40 % de précision.'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Self-Consistency',
        description: 'Générez plusieurs chemins de raisonnement indépendants, prenez un vote à la majorité. Significativement plus robuste. Boost: ~30–50 % sur tâches difficiles.'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Tree of Thought',
        description: 'Explorez plusieurs branches de raisonnement et élaguerez les faibles. Meilleur pour la planification et les jeux avec de nombreux chemins de solution.'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'ReAct',
        description: 'Entrelacez raisonnement avec actions externes (appels API, recherches, code). Meilleur pour les tâches réelles nécessitant données en direct ou vérification.'
      },
    ]
  },
},
    ja: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques',
  title: 'Chain-of-Thoughtプロンプティング: AIに推論プロセスを見せさせる',
  intro: 'Chain-of-Thoughtプロンプティングは、最終的な答えに直接飛び込むのではなく、モデルに推論ステップを明示的に示すように要求する技術です。複雑な判断をより監査しやすく、デバッグしやすく、時間とともに改善しやすくします。',
  leadAnswerBlock: '**Chain-of-Thought (CoT)プロンプティングは、最終回答前にAIモデルに推論ステップを段階的に示すよう指示する手法です。** 数学、論理、複数ステップのタスクで精度を向上させます。2026年、Claude Opus 4.7やOpenAI o3のようなフロンティアモデルは、CoTを内部で自動化する組み込み推論モードを備えています—しかし、プロンプトレベルのCoTは、構造化思考を引き出す主な方法である小規模なモデルでは依然として価値があります。',
  publishDate: '2026-03-26',
  dateModified: '2026-05-03',
  lastFactChecked: '2026-05-03',
  readTime: '13分で読める',
  seoTitle: 'Chain-of-Thoughtプロンプティング: 精度40%向上',
  metaDescription: 'Chain-of-Thoughtは数学・論理タスクで精度を10～40%向上させます。効果的な使用方法と活用場面を学べます。',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Chain-of-Thoughtプロンプティング',
  audience: '開発者、データサイエンティスト、Claude、Gemini、ローカルLLMで構築するチーム',
  next_refresh_due: '2026-11-03',
  aboutTopics: ['Chain-of-Thought Prompting', '構造化推論', 'プロンプトエンジニアリング', '推論モデル'],
  toc: [
    { label: '重要ポイント', anchor: '#juuyou-pointo' },
    { label: 'クイックファクト', anchor: '#quick-facts' },
    { label: 'Chain-of-Thoughtプロンプティングとは', anchor: '#what-is' },
    { label: '重要な理由', anchor: '#why-matters' },
    { label: 'いつ役立つのか (いつ役立たないのか)', anchor: '#when-helps' },
    { label: '例: CoTなし/あり', anchor: '#example' },
    { label: '数学の例: 収益計算', anchor: '#math-example' },
    { label: '効果的なプロンプトの書き方', anchor: '#how-write' },
    { label: 'PromptQuorumでのChain-of-Thought', anchor: '#in-promptquorum' },
    { label: 'Chain-of-Thoughtの使い方', anchor: '#how-start' },
    { label: 'CoT対組み込み推論モデル', anchor: '#cot-vs' },
    { label: 'Chain-of-Thought バリエーション', anchor: '#variants' },
    { label: 'モデル比較', anchor: '#model-comparison' },
    { label: '関連リソース', anchor: '#related' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'ソース', anchor: '#sources' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting?lang=ja',
    inLanguage: 'ja',
    headline: 'Chain-of-Thoughtプロンプティング: AIに推論プロセスを見せさせる',
    description: 'Chain-of-Thoughtプロンプティングとは何か、いつ役立つのか、モデルに推論を明確に示させるプロンプトをどのように構成するか。',
    datePublished: '2026-03-26',
    dateModified: '2026-05-03',
    keywords: ['Chain-of-Thoughtプロンプティング', 'ステップバイステップの推論', 'プロンプトエンジニアリング', '推論モデル', 'Extended Thinking'],
    author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Chain-of-Thought Prompting' },
      { '@type': 'Thing', name: '大規模言語モデル' },
      { '@type': 'Thing', name: '推論' },
      { '@type': 'Thing', name: '構造化出力' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
  },
  sections: {
    tldr: {
      isTldr: true,
      title: '重要ポイント',
      numberedItems: [
        '**Chain-of-Thoughtプロンプティングはモデルに推論ステップを最終回答前に表示させ、** 数学、論理、複数ステップのタスクで精度を向上させます。',
        'Zero-shot CoT(「ステップバイステップで考えて」)はほとんどのモデルで機能します。Few-shot CoT(例付き)はより信頼性が高い。',
        '2026年、Claude Opus 4.7やOpenAI o3のようなモデルは **組み込み推論モード** を備えており、プロンプトレベルのCoTは不要です—「ステップバイステップで考えて」と言う必要はありません。',
        'CoTは出力トークンを増やし、したがってコストを増やします。組み込み推論モードは独立した思考トークン予算を持ち、独自の課金があります。',
        '小さいモデル(Haiku、Flash、LLaMA 4)でコスト効率の高い推論にプロンプトレベルのCoTを使用してください。最大精度のためにフロンティアモデルで組み込み推論モードを使用してください。',
        'CoTは数学、論理、計画、根本原因分析に最も価値があります。シンプルな分類、短い回答、素早いコピーライティングではスキップしてください。',
      ]
    },
    quickFacts: {
      title: 'クイックファクト',
      numberedItems: [
        '**提唱:** Wei et al. (2022)、Google Brain — NeurIPS 2022の基礎論文',
        '**重要な結果:** Zero-shot CoTはPaLM 540Bの精度をMultiArithで17.7% → 78.7%に上昇させた',
        '**トリガーフレーズ:** 「ステップバイステップで考えましょう」(Zero-shot)または実例(Few-shot)',
        '**2026年の進化:** 組み込み推論モード(o3、Claude Extended Thinking)はCoTを内部で自動化',
        '**コスト影響:** プロンプトレベルCoT = より多くの出力トークン; 推論モード = 独立した思考トークン予算',
        '**プロンプトレベルCoTに最適:** 非推論モデル(Claude Haiku 4.5、Gemini Flash、GPT-4o mini、LLaMA 4 Scout)',
      ]
    },
    whatIsChainOfThought: {
      title: 'Chain-of-Thoughtプロンプティングとは',
      content: [
        '**Chain-of-Thoughtプロンプティングは、モデルに最終結論を与える前にステップバイステップで推論するよう要求する手法です。** 単に「答え」を返すのではなく、モデルは中間の計算、論理的なステップ、または説明を書き出します。',
        '「ステップバイステップで考えて」「あなたの推論を示して」といった指示や、推論が明示的に示された実例を提供することで、この動作を引き出すことができます。その結果、モデルがどのように結論に到達したかを理解できるトレースが得られます。',
      ],
    },
    whyItMatters: {
      title: 'Chain-of-Thoughtプロンプティングが重要な理由',
      content: [
        '**Chain-of-Thoughtプロンプティングが重要なのは、複数ステップの推論を伴うタスクで、モデルの動作をより透明にするためです。** 各ステップを見ることで、誤った解釈、欠落した仮定、または計算エラーを特定できます。',
        'これは分析、計画、トラブルシューティングなどの領域で特に価値があります。単一の不透明な出力ではなく、チェック、修正、またはドキュメントとして再利用できるナラティブが得られます。',
      ],
      callouts: [
        {
          type: 'info',
          label: 'ローカルモデルで動作',
          text: 'Chain-of-Thoughtは7B以上のパラメータを持つ任意のモデルで機能します。[OllamaまたはLM Studio](https://www.promptquorum.com/local-llms)でローカルテストしてください。'
        }
      ],
    },
    whenItHelps: {
      title: 'Chain-of-Thoughtが役立つ場面',
      content: [
        '**Chain-of-Thoughtプロンプティングは、自然に明確なステップに分割されるタスクで最も役立ちますが、すべてのプロンプトに必要なわけではありません。** 目的地と同じくらいパスが重要な場所で輝きます。',
        'Chain-of-Thought 推論こそが、ツール呼び出し型エージェントを複数ステップのタスクで安定させる仕組みです。CoT 対応モデルにデータベース照会やファイル編集の能力を与えるローカルエージェント構成については、[MCP を使ったローカル AI エージェント](/power-local-llm/local-ai-agents-with-mcp-2026?lang=ja)を参照してください。',
        '適切なユースケースには次のようなものがあります:',
      ],
      items: [
        '数学と量的推論の問題。',
        '複数ステップの論理的パズルや意思決定分析。',
        '根本原因分析、インシデント事後分析、トレードオフの議論。',
        '一連のアクションが明示的である必要がある計画タスク。',
      ],
    },
    whenItDoesntHelp: {
      title: 'Chain-of-Thoughtが役に立たない場面',
      content: [
        '単純な分類、素早いコピーライティング、または短い事実上の回答に対しては、Chain-of-Thoughtはしばしば余分な冗長性を追加するだけで、余り追加の価値をもたらしません。機密性の高い領域では、推論を内部に保持し、最終的な答えだけをエンドユーザーに示したい場合もあります。',
      ],
    },
    example: {
      title: '例: Chain-of-Thoughtなしとありの比較',
      content: [
        '**直接的な回答プロンプトと推論を明示的に要求するプロンプトを比較すると、違いが明確になります。** 以下は簡単な意思決定の例です。',
        '**[悪いプロンプト]**',
        '"次の四半期にどのプロジェクトを優先すべきか?"',
        '**[良いプロンプト]**',
        '"あなたは製品オペレーションマネージャーです。次の四半期に向けた3つの候補プロジェクトがあります。Chain-of-Thoughtの推論を使用して、どのプロジェクトを優先するかを決定してください。1) 使用する意思決定基準をリストアップしてください(例えば、収益への影響、リスク、戦略との整合性)。2) これらの基準に対して各プロジェクトを段階的に評価してください。3) 明確な推奨事項を提供し、3〜5文で正当化してください。最後に、別の行の「推奨事項:」で始まる短い最終回答を提供してください。"',
        '「良い」バージョンでは、モデルはどのように基準を選択したか、各プロジェクトがどのようにスコアリングされたか、そして提示する推奨事項を説明します。異議を唱えたり、受け入れたりできます。',
      ],
    },
    howToWrite: {
      title: '効果的なChain-of-Thoughtプロンプトの書き方',
      content: [
        '**効果的なChain-of-Thoughtプロンプトを書くには、推論の構造と最終的な答えの構造を定義する必要があります。** 「もっと説明して」のようなあいまいなリクエストは、具体的な指示ほど信頼できません。',
        '実用的なパターンは次のとおりです:',
      ],
      items: [
        'モデルにそのロール(例えば「あなたはシニアデータアナリストです」)を伝えてください。',
        'ステップバイステップで考える、またはChain-of-Thoughtを使用すべきことを指定してください。',
        '期待される推論のセクション(例えば仮定、計算、比較、結論)を定義してください。',
        'すばやく使用できるように、短く、明確にマークされた最終的な答えを最後に要求してください。',
      ],
    },
    howtWriteNote: {
      title: '注意点',
      content: [
        'これは詳細な推論から簡潔な出力を分離し、結果を他のツールやレポートに統合する場合に有用です。',
      ],
    },
    inPromptQuorum: {
      title: 'PromptQuorumでのChain-of-Thoughtプロンプティング',
      content: [
        '**PromptQuorumは、異なるモデル全体でChain-of-Thoughtプロンプティングを一貫して適用できるマルチモデルAIディスパッチツールです。** 1つの構造化されたChain-of-Thoughtプロンプトを書き、複数のプロバイダーに並行して送信します。',
        'PromptQuorumでは、以下が可能です:',
      ],
      items: [
        'Chain-of-Thoughtの指示と、TRACE、APEなどの推論に焦点を当たったフレームワークを組み合わせることで、思考ステップが明示的にラベル付けされます。',
        '異なるモデルが同じ推論タスクをどのように処理し、ステップバイステップのトレースを並べて検査するかを比較します。',
        'Chain-of-Thoughtプロンプトをテンプレートとして保存し、繰り返し分析、インシデント復習、戦略的判断で使用します。',
      ],
    },
    inPromptQuorumClosing: {
      title: '実用的な活用',
      content: [
        'これにより、Chain-of-Thoughtプロンプティングは一度限りのトリックから、意思決定プロセスの反復可能な部分へと変わります。',
      ],
    },
    howToStart: {
      title: 'Chain-of-Thought (CoT)プロンプティングの始め方',
      numberedItems: [
        '**論理、推論、またはデバッグタスクの場合、答える前にモデルに「ステップバイステップで考えて」と要求してください。** 「バグは何か?」ではなく、「実行をステップバイステップで追跡してから、バグを特定してください」と尋ねてください。',
        '**ステップバイステップの推論を示す実例を提供してください。** 説明するだけでなく、ステップバイステップの推論がどのように見えるかをモデルに示してください。例: 「まず、関数シグネチャをチェックします... 次に、最初の呼び出しを入力Xでトレースします...」',
        '「ステップバイステップで考えましょう」または「まず...を特定してから...」などの明示的なプロンプトを使用してください。** これらはモデルでより慎重な推論を引き出します。',
        '**複雑な問題については、モデルに中間出力をトレースするよう要求してください。** 例: 「この関数を入力[5]で実行をトレースしてください。各行の後に各変数の値を表示してください。」',
        '**CoTを検証可能な出力と組み合わせてください: 監査できるようにモデルに作業を示すよう要求してください。** 「各ステップであなたの推論を説明してください。もしあなたが誤りを犯した場合、私はあなたの示した作業からそれを見つけることができるはずです。」',
      ],
    },
    mathExample: {
      title: '数学の例: 収益計算',
      content: [
        '**CoTなしではモデルは単一の最終回答を与えるかもしれません。CoTではモデルは計算をステップバイステップで表示します。**',
        '**CoTなし:**',
        '「顧客が1単位15ドルで50単位を購入し、10%割引を受け取ります。顧客はいくら支払いますか?」',
        'モデル: 「675ドル」',
        '**CoTあり:**',
        '「顧客が1単位15ドルで50単位を購入し、10%割引を受け取ります。ステップバイステップで作業してください: 1)小計を計算します。 2)割引額を計算します。 3)小計から割引を引いて最終価格を取得します。」',
        'モデル: 「1)小計 = 50 × 15ドル = 750ドル。 2)割引 = 750ドルの10% = 75ドル。 3)最終価格 = 750ドル − 75ドル = 675ドル。」',
        'どちらも同じ答えを与えますが、CoT版は数学を見せ、エラーを発見できます(例えば、誰かが750ドルの10%を誤って計算した場合)。',
      ],
    },
    reasoningModels: {
      title: 'CoT対組み込み推論モデル (2026)',
      content: [
        '**2026年、フロンティアモデル – Claude Opus 4.7、OpenAI o3、Gemini Deep Think – は、Chain-of-Thoughtを自動的に内部化する組み込み推論モードを備えています。** これらのモデルに「ステップバイステップで考えて」という指示を追加する必要はありません。',
        '**プロンプトレベルCoTを使用する場合:** 非推論モデル(Claude Haiku 4.5、GPT-4o mini、Gemini Flash、Llama 4)、ローカルLLM、または推論トークン予算の追加コストを避けたい場合。',
        '**組み込み推論モードを使用する場合:** フロンティアモデルの最大精度、数学の重いタスク、複雑な分析。これらのモデルは推論トークンを個別に請求します(通常は出力トークンよりも高いレート)。',
      ],
      columns: ['アプローチ', '最適な用途', 'コスト', '透明性', 'モデル'],
      rows: [
        { 'アプローチ': 'プロンプトレベルCoT(「ステップバイステップで考えて」)', '最適な用途': '小さいモデル、ローカルLLM、コスト感応的なタスク', 'コスト': '出力トークンを増やす', '透明性': '完全: 出力に表示されるステップ', 'モデル': 'Haiku、Flash、LLaMA、Qwen' },
        { 'アプローチ': 'Claude Extended Thinking (Opus 4.7、Sonnet 4.6)', '最適な用途': '複雑な分析、最大精度', 'コスト': '独立した思考トークン予算(入力レート)', '透明性': 'APIを介して検査可能なトレース', 'モデル': 'Claude Opus 4.7、Claude Sonnet 4.6' },
        { 'アプローチ': 'OpenAI o3', '最適な用途': '最難関問題(数学、コーディング、競技)', 'コスト': '思考トークン予算(より高いティア)', '透明性': '隠れた推論、目に見える出力', 'モデル': 'OpenAI o3' },
        { 'アプローチ': 'Gemini Deep Think', '最適な用途': 'Google Cloud統合、Geminiエコシステム', 'コスト': '出力とは別の思考トークン', '透明性': 'thinking_levelパラメータ(LOW、MEDIUM、HIGH)', 'モデル': 'Gemini 3.1 Pro' },
        { 'アプローチ': 'DeepSeek R1', '最適な用途': 'オープンウェイトオプション、オンデバイス推論', 'コスト': '出力テキストにストリーミングされる目に見える推論', '透明性': '完全: 出力内のインラインCoT', 'モデル': 'DeepSeek R1' },
      ],
      callouts: [
        {
          type: 'tip',
          label: 'ヒント',
          text: 'コスト効率のためには、小さいモデルでプロンプトレベルのCoTを使用してください。難しい問題で最大精度が必要な場合は、o3またはClaude Extended Thinkingを使用し、モデルに推論を内部で処理させてください。'
        }
      ],
    },
    cotVariants: {
      title: 'Chain-of-Thoughtバリエーションと拡張',
      content: [
        '**基本的な「ステップバイステップで考えて」パターンの先へ、研究者は複数のCoTバリアントを開発し、それぞれが異なる問題タイプに最適化されています。**',
      ],
      items: [
        '**Zero-shot CoT:** 例なしで「ステップバイステップで考えましょう」と尋ねます。ほとんどのモデルで機能し、実装が最も簡単です。ブースト: 推論タスクで~10–20%の精度向上。',
        '**Few-shot CoT:** 明示的な推論で2–5つの実例を示し、新しい問題にも同じパターンを適用するようモデルに要求します。Zero-shotより信頼性が高いが、手動例作成が必要。ブースト: ~20–40%の精度。',
        '**Self-Consistency (Wang et al., 2023):** 複数の独立したCoT推論パスを生成し、最終回答に多数決投票を行います。エラーに対してはるかにロバスト。ブースト: 難しいタスクで~30–50%。',
        '**Tree of Thought (ToT):** 線形チェーンの代わりに、複数の推論ブランチを探索し、弱いものを剪定します。多くの可能な解決パスがある場合に使用(計画、ゲーム、創造的なタスク)。',
        '**ReAct (Reasoning + Acting):** 推論と外部アクション(APIコール、検索、コード実行)をインターレース し、結果を次の推論ステップに組み込みます。ライブデータまたは検証が必要な現実世界のタスクに最適。',
      ],
    },
    modelComparison: {
      title: 'モデル比較: 2026年のCoTプロンプティング対応状況',
      columns: ['モデル', 'プロンプトレベルCoT', '組み込み推論', 'ベストユースケース', 'コスト(約)'],
      rows: [
        { 'モデル': 'Claude Opus 4.7', 'プロンプトレベルCoT': '不要', '組み込み推論': 'Extended Thinking (APIで検査可能なトレース)', 'ベストユースケース': '最大精度分析', 'コスト(約)': 'より高い(入力+出力+思考トークン)' },
        { 'モデル': 'Claude Sonnet 4.6', 'プロンプトレベルCoT': '不要', '組み込み推論': 'Extended Thinking', 'ベストユースケース': 'バランスの取れたコスト/精度', 'コスト(約)': '中程度' },
        { 'モデル': 'Claude Haiku 4.5', 'プロンプトレベルCoT': '推奨', '組み込み推論': 'なし', 'ベストユースケース': '高速でコスト効率的な推論', 'コスト(約)': '低い' },
        { 'モデル': 'OpenAI o3', 'プロンプトレベルCoT': '不要', '組み込み推論': 'エフォートレベル(low、medium、high、xhigh)', 'ベストユースケース': '競技レベルの問題', 'コスト(約)': '非常に高い(思考トークンティア)' },
        { 'モデル': 'GPT-4o mini', 'プロンプトレベルCoT': '推奨', '組み込み推論': 'なし', 'ベストユースケース': '予算意識の高いデプロイメント', 'コスト(約)': '非常に低い' },
        { 'モデル': 'Gemini 3.1 Pro', 'プロンプトレベルCoT': '機能する', '組み込み推論': 'Deep Think (thinking_levelパラム)', 'ベストユースケース': 'Google Cloud統合', 'コスト(約)': '中程度~高い' },
        { 'モデル': 'Gemini Flash', 'プロンプトレベルCoT': '推奨', '組み込み推論': 'なし', 'ベストユースケース': '高速応答', 'コスト(約)': '低い' },
        { 'モデル': 'DeepSeek R1', 'プロンプトレベルCoT': '不要', '組み込み推論': '出力の内容推論', 'ベストユースケース': 'オープンウェイト、オンデバイス', 'コスト(約)': '無料(オープンソース)' },
        { 'モデル': 'Llama 4', 'プロンプトレベルCoT': '推奨', '組み込み推論': 'なし', 'ベストユースケース': 'ローカルデプロイメント、プライバシー', 'コスト(約)': 'セルフホスト(コンピュート依存)' },
      ],
    },
    relatedReading: {
      title: '関連リソース',
      items: [
        '[プロンプトエンジニアリングとは? 完全ガイド2026](/prompt-engineering/what-is-prompt-engineering?lang=ja)',
        '[構造化出力とJSONスキーマプロンプティング](/prompt-engineering/structured-output?lang=ja)',
        '[AIハルシネーションの減らし方](/prompt-engineering/reducing-hallucination?lang=ja)',
        '[制約付きプロンプティング: モデル出力を制限](/prompt-engineering/constrained-prompting?lang=ja)',
        '[マルチモデルディスパッチシステムの構築方法](/prompt-engineering/multi-model-dispatch?lang=ja)',
        '[プロンプトテスト&評価フレームワーク](/prompt-engineering/prompt-testing?lang=ja)',
      ],
    },
    faqSection: {
      title: 'よくある質問',
      faqs: [
        {
          q: 'Chain-of-Thoughtはすべてのモデルで機能しますか?',
          a: 'Chain-of-Thoughtはほとんど7B+パラメータのモデルで機能しますが、利点は異なります。中型および小型モデル(Haiku、Flash、Llama 4)で最も効果的です。フロンティアモデル(Claude Opus 4.7、o3)では、組み込み推論モードはプロンプトレベルのCoTよりも効率的なことが多い。'
        },
        {
          q: 'Chain-of-Thoughtはコストを増やしますか?',
          a: 'はい。プロンプトレベルのCoTは出力トークン数を増やします(モデルが最終回答の前に推論を書き出すため)。組み込み推論モード(Claude Extended Thinking、OpenAI o3)は別の思考トークン予算を使用し、異なる課金レートがある場合があります。コスト対精度のトレードオフを比較するために、ユースケースで両方をテストしてください。'
        },
        {
          q: 'Zero-shotの代わりにFew-shot CoTを使用する場合は?',
          a: 'まずZero-shot CoTを使用します – シンプルで、ほとんどの場合機能します。Zero-shotが信頼できない場合、または領域が特定の推論パターンを必要とする場合は、Few-shot (2–5例) に移動します(例: 標準化された行項目構造で財務分析)。'
        },
        {
          q: 'Chain-of-Thoughtを構造化出力 (JSON) と組み合わせることができますか?',
          a: 'はい。モデルに最初にテキストで推論を表示させ、次にJSONオブジェクトで最終回答を生成させるよう要求できます。指示を組み合わせます: 「ステップバイステップで考えてください。次に、有効なJSONとして結果を出力してください。」これは本番システムで一般的です。'
        },
        {
          q: 'Chain-of-ThoughtとTree-of-Thoughtの違いは何ですか?',
          a: 'Chain-of-Thoughtは線形シーケンス: ステップ1 → ステップ2 → ... → 結論。Tree-of-Thoughtは複数のブランチ(代替推論パス)を探索し、答えに到達する前に弱いものを剪定します。Tree-of-Thoughtはより強力ですが、より高価です(複数のモデル呼び出しが必要)。'
        },
        {
          q: 'OpenAI o3はChain-of-Thoughtプロンプティングが必要ですか?',
          a: 'いいえ。OpenAI o3は自動的にアクティブになる組み込み推論を備えています。「ステップバイステップで考えて」という指示を追加する必要はありません。o3に問題を与え、エフォートレベル(low/medium/high/xhigh)を設定して、支出する思考予算を制御します。'
        },
        {
          q: '組み込み推論モデルの推論を監査できますか?',
          a: 'はい、でもモデルに依存します。Claude Extended Thinking推論トレースはAPIを介して検査可能です。OpenAI o3推論はデフォルトで隠れています(競争上の利点のため)。Gemini Deep Think推論も隠れています。完全な監査可能性については、プロンプトレベルのCoTまたはDeepSeek R1を使用します。'
        },
        {
          q: 'Chain-of-Thoughtプロンプティングはリアルタイムアプリケーションに適していますか?',
          a: 'プロンプトレベルのCoTは遅延を追加します(より多くの出力トークン = より遅い生成)。リアルタイムユースケースの場合、最小限の推論で小さいモデルを使用するか、ストリーミングエンドポイントを使用してトークンが到着すると表示します。組み込み推論モードはさらに多くの遅延を追加する可能性があります; 特定のユースケースをベンチマークします。'
        },
      ],
    },
    sources: {
      title: 'ソースと追加参考文献',
      items: [
        'Wei, J., Wang, X., Schuurmans, D., et al. (2022). 「Chain-of-Thought Prompting Elicits Reasoning in Large Language Models」 NeurIPS 2022。arXiv:2201.11903',
        'Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). 「Large Language Models are Zero-Shot Reasoners」 NeurIPS 2022。arXiv:2205.11916',
        'Wang, X., Wei, J., Schuurmans, D., et al. (2023). 「Self-Consistency Improves Chain of Thought Reasoning in Language Models」 ICLR 2023。arXiv:2203.11171',
        'Anthropic. (2024). 「Extended Thinking in Claude」 Claude Opus 4.7とSonnet 4.6の推論機能に関する技術ドキュメント。',
        'OpenAI. (2026). 「OpenAI o3: Reasoning Models for Competition-Level Problem Solving」 OpenAIドキュメントおよび研究発表。',
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Chain-of-Thoughtはすべてのモデルで機能しますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chain-of-Thoughtはほとんど7B+パラメータのモデルで機能しますが、利点は異なります。中型および小型モデル(Haiku、Flash、Llama 4)で最も効果的です。フロンティアモデル(Claude Opus 4.7、o3)では、組み込み推論モードはプロンプトレベルのCoTよりも効率的なことが多い。'
        }
      },
      {
        '@type': 'Question',
        name: 'Chain-of-Thoughtはコストを増やしますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。プロンプトレベルのCoTは出力トークン数を増やします(モデルが最終回答の前に推論を書き出すため)。組み込み推論モード(Claude Extended Thinking、OpenAI o3)は別の思考トークン予算を使用し、異なる課金レートがある場合があります。コスト対精度のトレードオフを比較するために、ユースケースで両方をテストしてください。'
        }
      },
      {
        '@type': 'Question',
        name: 'Zero-shotの代わりにFew-shot CoTを使用する場合は?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'まずZero-shot CoTを使用します – シンプルで、ほとんどの場合機能します。Zero-shotが信頼できない場合、または領域が特定の推論パターンを必要とする場合は、Few-shot (2–5例) に移動します(例: 標準化された行項目構造で財務分析)。'
        }
      },
      {
        '@type': 'Question',
        name: 'Chain-of-Thoughtを構造化出力 (JSON) と組み合わせることができますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい。モデルに最初にテキストで推論を表示させ、次にJSONオブジェクトで最終回答を生成させるよう要求できます。指示を組み合わせます: 「ステップバイステップで考えてください。次に、有効なJSONとして結果を出力してください。」これは本番システムで一般的です。'
        }
      },
      {
        '@type': 'Question',
        name: 'Chain-of-ThoughtとTree-of-Thoughtの違いは何ですか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chain-of-Thoughtは線形シーケンス: ステップ1 → ステップ2 → ... → 結論。Tree-of-Thoughtは複数のブランチ(代替推論パス)を探索し、答えに到達する前に弱いものを剪定します。Tree-of-Thoughtはより強力ですが、より高価です(複数のモデル呼び出しが必要)。'
        }
      },
      {
        '@type': 'Question',
        name: 'OpenAI o3はChain-of-Thoughtプロンプティングが必要ですか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ。OpenAI o3は自動的にアクティブになる組み込み推論を備えています。「ステップバイステップで考えて」という指示を追加する必要はありません。o3に問題を与え、エフォートレベル(low/medium/high/xhigh)を設定して、支出する思考予算を制御します。'
        }
      },
      {
        '@type': 'Question',
        name: '組み込み推論モデルの推論を監査できますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、でもモデルに依存します。Claude Extended Thinking推論トレースはAPIを介して検査可能です。OpenAI o3推論はデフォルトで隠れています(競争上の利点のため)。Gemini Deep Think推論も隠れています。完全な監査可能性については、プロンプトレベルのCoTまたはDeepSeek R1を使用します。'
        }
      },
      {
        '@type': 'Question',
        name: 'Chain-of-Thoughtプロンプティングはリアルタイムアプリケーションに適していますか?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'プロンプトレベルのCoTは遅延を追加します(より多くの出力トークン = より遅い生成)。リアルタイムユースケースの場合、最小限の推論で小さいモデルを使用するか、ストリーミングエンドポイントを使用してトークンが到着すると表示します。組み込み推論モードはさらに多くの遅延を追加する可能性があります; 特定のユースケースをベンチマークします。'
        }
      },
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Chain-of-Thoughtバリエーション',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Zero-shot CoT',
        description: '例なしで「ステップバイステップで考えましょう」と尋ねます。ほとんどのモデルで機能し、実装が最も簡単です。ブースト: ~10–20%精度向上。'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Few-shot CoT',
        description: '明示的な推論で2–5例を示し、新問題に適用します。Zero-shotより信頼性が高い。ブースト: ~20–40%精度。'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Self-Consistency',
        description: '複数の独立推論パスを生成、多数決投票。はるかにロバスト。ブースト: 難しいタスクで~30–50%。'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Tree of Thought',
        description: '複数の推論ブランチを探索、弱いものを剪定。多くの解決パスがあるタスク向け。'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'ReAct',
        description: '推論と外部アクション(APIコール、検索、コード実行)をインターレース。ライブデータ/検証が必要なタスク向け。'
      },
    ]
  },
},
    zh: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques',
  title: '链式思维提示词: 让AI展示其推理过程',
  intro: '链式思维提示词是一种技术，你明确要求模型展示其推理步骤，而不是直接跳到最终答案。这使复杂的决策更容易审计、调试和随时间改进。',
  leadAnswerBlock: '**链式思维(CoT)提示词指示AI模型在给出最终答案前逐步展示其推理步骤。** 这改善了数学、逻辑和多步骤任务的精度。2026年，Claude Opus 4.7和OpenAI o3等前沿模型具有内置推理模式，自动化内部CoT——但提示词级CoT在较小且非推理模型上仍然宝贵，其中它是获得结构化思维的主要方法。',
  publishDate: '2026-03-26',
  dateModified: '2026-05-03',
  lastFactChecked: '2026-05-03',
  readTime: '阅读约13分钟',
  seoTitle: '链式思维提示词: 精度提升40%',
  metaDescription: '链式思维在数学和逻辑任务上将精度提高10-40%。了解何时使用及最佳实践。',
  educationalLevel: 'Intermediate',
  primaryTerm: '链式思维提示词',
  audience: '开发者、数据科学家和在Claude、Gemini或本地LLM上构建的团队',
  next_refresh_due: '2026-11-03',
  aboutTopics: ['链式思维提示词', '结构化推理', '提示词工程', '推理模型'],
  toc: [
    { label: '核心要点', anchor: '#hexin-yaoqidian' },
    { label: '快速事实', anchor: '#kuaisu-shishi' },
    { label: '什么是链式思维提示词?', anchor: '#what-is' },
    { label: '为什么重要', anchor: '#why-important' },
    { label: '何时有效(及何时无效)', anchor: '#when-helps' },
    { label: '示例: 有无链式思维对比', anchor: '#example' },
    { label: '数学示例: 收益计算', anchor: '#math-example' },
    { label: '如何编写有效提示词', anchor: '#how-write' },
    { label: 'PromptQuorum中的链式思维', anchor: '#in-promptquorum' },
    { label: '开始使用链式思维', anchor: '#how-start' },
    { label: 'CoT对内置推理模型', anchor: '#cot-vs-reasoning' },
    { label: '链式思维变体', anchor: '#variants' },
    { label: '模型对比', anchor: '#model-comparison' },
    { label: '相关资源', anchor: '#related' },
    { label: 'FAQ', anchor: '#faq' },
    { label: '来源', anchor: '#sources' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/prompt-engineering/chain-of-thought-prompting?lang=zh',
    inLanguage: 'zh',
    headline: '链式思维提示词: 让AI展示其推理过程',
    description: '链式思维提示词的定义、使用场景，以及如何构建提示词使模型明确展示推理过程。',
    datePublished: '2026-03-26',
    dateModified: '2026-05-03',
    keywords: ['链式思维提示词', '逐步推理', '提示词工程', '推理模型', 'Extended Thinking'],
    author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: '链式思维提示词' },
      { '@type': 'Thing', name: '大型语言模型' },
      { '@type': 'Thing', name: '推理' },
      { '@type': 'Thing', name: '结构化输出' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro', '.key-takeaways'],
    },
  },
  sections: {
    tldr: {
      isTldr: true,
      title: '核心要点',
      numberedItems: [
        '**链式思维提示词指示模型在最终答案前展示推理步骤**, 改善数学、逻辑和多步骤任务的精度。',
        'Zero-shot CoT(「逐步思考」)在大多数模型上工作。Few-shot CoT(带示例)更可靠。',
        '2026年，Claude Opus 4.7和OpenAI o3等模型具有**内置推理模式**，自动化CoT——你不需要在这些模型上说「逐步思考」。',
        'CoT增加输出token,因此增加成本。内置推理模式具有独立的思维token预算,有自己的计费。',
        '在小型模型(Haiku、Flash、LLaMA 4)上使用提示词级CoT以获得成本效益。在前沿模型上使用内置推理模式获得最高精度。',
        'CoT对数学、逻辑、规划和根本原因分析最有价值。对于简单分类、简短回答和快速文案,跳过它。',
      ]
    },
    quickFacts: {
      title: '快速事实',
      numberedItems: [
        '**提出:** Wei et al. (2022)、Google Brain — NeurIPS 2022基础论文',
        '**关键结果:** Zero-shot CoT将PaLM 540B在MultiArith上的精度从17.7% → 78.7%',
        '**触发短语:** 「让我们逐步思考」(Zero-shot)或工作示例(Few-shot)',
        '**2026年进化:** 内置推理模式(o3、Claude Extended Thinking)自动化内部CoT',
        '**成本影响:** 提示词级CoT = 更多输出token; 推理模式 = 独立思维token预算',
        '**提示词级CoT最优:** 非推理模型(Claude Haiku 4.5、Gemini Flash、GPT-4o mini、LLaMA 4 Scout)',
      ]
    },
    whatIsChainOfThought: {
      title: '什么是链式思维提示词',
      content: [
        '**链式思维提示词要求模型在给出最终结论前逐步推理。** 模型不是直接返回"答案"，而是写出中间计算、逻辑步骤或解释。',
        '你可以通过"逐步思考"、"展示你的推理"这样的指令，或提供显式推理的具体例子来触发这种行为。结果是一个可读的推理过程，让你理解模型是如何得出结论的。',
      ],
    },
    whyItMatters: {
      title: '为什么链式思维提示词很重要',
      content: [
        '**链式思维提示词很重要，因为它在涉及多步推理的任务上提高了模型行为的透明度。** 看到每个步骤，你能发现误解、缺失的假设或算术错误。',
        '这在分析、规划和故障排查等领域特别有价值。你获得的不是单一的不透明输出，而是可以检查、纠正或重复使用为文档的推理过程。',
      ],
      callouts: [
        {
          type: 'info',
          label: '适用于本地模型',
          text: '链式思维在任何具有 7B+ 参数的模型上都能工作。用 [Ollama 或 LM Studio](https://www.promptquorum.com/local-llms) 在本地测试它。'
        }
      ],
    },
    whenItHelps: {
      title: '链式思维何时有效',
      content: [
        '**链式思维提示词在能自然分解为清晰步骤的任务上最有效，但并非所有提示词都需要它。** 当过程本身和结果一样重要时，它表现最佳。',
        'Chain-of-Thought 推理是工具调用型代理在多步骤任务中保持可靠性的关键。要搭建一套让具备 CoT 能力的模型可以查询数据库、编辑文件的本地代理，请参阅[使用 MCP 的本地 AI 代理](/power-local-llm/local-ai-agents-with-mcp-2026?lang=zh)。',
        '适用场景包括:',
      ],
      items: [
        '数学和定量推理问题。',
        '多步逻辑谜题或决策分析。',
        '根本原因分析、事故事后分析和权衡讨论。',
        '操作顺序必须明确的计划任务。',
      ],
    },
    whenItDoesntHelp: {
      title: '链式思维何时不必要',
      content: [
        '对于简单分类、快速文案或简短事实性答案，链式思维往往只增加冗余而不增加价值。在敏感领域，你可能希望保持推理内部，仅向最终用户展示最终答案。',
      ],
    },
    example: {
      title: '案例: 有无链式思维的对比',
      content: [
        '**对比直接答案提示词和明确要求推理的提示词时，差异变得清晰。** 以下是一个简单的决策例子。',
        '**[差的提示词]**',
        '"我们应该在下个季度优先考虑哪个项目?"',
        '**[好的提示词]**',
        '"你是产品运营经理。我们有三个下个季度的候选项目。使用链式思维推理来决定优先考虑哪个项目。1) 列出你将使用的决策标准(例如收入影响、风险、战略一致性)。2) 按步骤根据这些标准评估每个项目。3) 做出明确的建议并用3-5个句子说明理由。最后，在单独一行提供一个以"建议:"开头的简短最终答案。"',
        '在"好的"版本中，模型解释了它如何选择标准、每个项目如何评分，然后陈述你可以质疑或接受的建议。',
      ],
    },
    howToWrite: {
      title: '如何编写有效的链式思维提示词',
      content: [
        '**要编写有效的链式思维提示词，你需要定义推理的结构和最终答案的结构。** 模糊的要求如"多解释一些"远不如具体指令有效。',
        '一个实用的模式是:',
      ],
      items: [
        '告诉模型它的角色(例如"你是高级数据分析师")。',
        '指定它应该逐步思考或使用链式思维。',
        '定义你期望的推理部分(例如假设、计算、比较、结论)。',
        '要求在最后有一个简短的、清楚标记的最终答案，以便你能快速使用它。',
      ],
    },
    howtWriteNote: {
      title: '实用建议',
      content: [
        '这将详细的推理与简洁的输出分离，当你将结果集成到其他工具或报告中时很有帮助。',
      ],
    },
    inPromptQuorum: {
      title: 'PromptQuorum中的链式思维提示词',
      content: [
        '**PromptQuorum是一个多模型AI调度工具，你可以在不同模型上一致地应用链式思维提示词。** 你写一个结构化的链式思维提示词并将其并行发送到多个提供商。',
        '在PromptQuorum中，你可以:',
      ],
      items: [
        '结合链式思维指令与TRACE、APE等推理聚焦框架，使思维步骤明确标记。',
        '比较不同模型如何处理相同推理任务，并肩并肩检查其逐步推理过程。',
        '将链式思维提示词保存为模板，用于重复分析、事故回顾或战略决策。',
      ],
    },
    inPromptQuorumClosing: {
      title: '持续应用',
      content: [
        '这将链式思维提示词从一次性技巧转变为你决策过程中可重复的部分。',
      ],
    },
    howToStart: {
      title: '开始使用链式思维(CoT)提示词',
      numberedItems: [
        '**对于逻辑、推理或调试任务，要求模型在回答前"逐步思考"。** 与其问"bug是什么?"，不如问"逐步追踪执行，然后识别bug"。',
        '**提供一个显示逐步推理的具体例子。** 不仅要描述它——向模型展示逐步推理是什么样子。例如："首先，我检查函数签名...然后，我用输入X追踪第一个调用..."',
        '**使用明确的提示词如"让我们逐步思考"或"首先...然后..."** 这些会在模型中触发更深思熟虑的推理。',
        '**对于复杂问题，要求模型追踪中间输出。** 例如:"用输入[5]追踪此函数的执行。在每行后显示每个变量的值。"',
        '**将CoT与可验证的输出结合:要求模型展示其工作以便你能审计它。** "在每个步骤解释你的推理。如果你犯了错误，我应该能从你展示的工作中发现它。"',
      ],
    },
    mathExample: {
      title: '数学示例: 收益计算',
      content: [
        '**无CoT时，模型可能给出单一最终答案。有CoT时，模型逐步展示计算。**',
        '**无CoT:**',
        '「一个客户以每单位15美元的价格购买50个单位，但获得10%折扣。客户支付多少?」',
        '模型: 「675美元」',
        '**有CoT:**',
        '「一个客户以每单位15美元的价格购买50个单位，但获得10%折扣。逐步进行: 1)计算小计。 2)计算折扣金额。 3)从小计中减去折扣得到最终价格。」',
        '模型: 「1)小计 = 50 × 15美元 = 750美元。 2)折扣 = 750美元的10% = 75美元。 3)最终价格 = 750美元 − 75美元 = 675美元。」',
        '两者给出相同答案，但CoT版本展示了数学，你可以发现错误(例如，如果有人计算错了750美元的10%)。',
      ],
    },
    reasoningModels: {
      title: 'CoT对内置推理模型 (2026)',
      content: [
        '**2026年，前沿模型 – Claude Opus 4.7、OpenAI o3、Gemini Deep Think – 具有内置推理模式，可自动内部化链式思维。** 你不需要在这些模型上添加「逐步思考」指令。',
        '**何时使用提示词级CoT:** 非推理模型(Claude Haiku 4.5、GPT-4o mini、Gemini Flash、Llama 4)、本地LLM，或想避免推理token预算额外成本时。',
        '**何时使用内置推理模式:** 前沿模型最大精度、数学密集任务、复杂分析。这些模型分别计费思维token(通常比输出token费率更高)。',
      ],
      columns: ['方法', '最适用于', '成本', '透明度', '模型'],
      rows: [
        { '方法': '提示词级CoT(「逐步思考」)', '最适用于': '小型模型、本地LLM、成本敏感任务', '成本': '增加输出token', '透明度': '完全: 输出中可见步骤', '模型': 'Haiku、Flash、LLaMA、Qwen' },
        { '方法': 'Claude Extended Thinking (Opus 4.7、Sonnet 4.6)', '最适用于': '复杂分析、最高精度', '成本': '独立思维token预算(输入费率)', '透明度': '通过API可检查的trace', '模型': 'Claude Opus 4.7、Claude Sonnet 4.6' },
        { '方法': 'OpenAI o3', '最适用于': '最难问题(数学、编码、竞赛)', '成本': '思维token预算(更高层级)', '透明度': '隐藏推理、可见输出', '模型': 'OpenAI o3' },
        { '方法': 'Gemini Deep Think', '最适用于': 'Google Cloud集成、Gemini生态', '成本': '思维token与输出分开', '透明度': 'thinking_level参数(LOW、MEDIUM、HIGH)', '模型': 'Gemini 3.1 Pro' },
        { '方法': 'DeepSeek R1', '最适用于': '开源权重选项、设备上推理', '成本': '输出文本中流式传输的可见推理', '透明度': '完全: 输出中的内联CoT', '模型': 'DeepSeek R1' },
      ],
      callouts: [
        {
          type: 'tip',
          label: '提示',
          text: '为降低成本,在较小的模型上使用提示词级CoT。为了在难题上获得最高精度,使用o3或Claude Extended Thinking并让模型内部处理推理。'
        }
      ],
    },
    cotVariants: {
      title: '链式思维变体和扩展',
      content: [
        '**除了基本的「逐步思考」模式，研究人员开发了几种CoT变体，每种都针对不同的问题类型优化。**',
      ],
      items: [
        '**Zero-shot CoT:** 询问「让我们逐步思考」无示例。在大多数模型上工作，最简单实现。提升: 推理任务上约10-20%精度改善。',
        '**Few-shot CoT:** 显示2-5个带显式推理的工作示例，然后要求模型对新问题应用相同模式。比Zero-shot更可靠但需要手动示例创建。提升: 约20-40%精度。',
        '**Self-Consistency (Wang et al., 2023):** 生成多个独立CoT推理路径，然后对最终答案进行多数投票。对错误明显更鲁棒。提升: 难任务上约30-50%。',
        '**树思维(ToT):** 代替线性链，探索多个推理分支并修剪较差的。当有许多可能的解决方案路径时使用(规划、游戏、创意任务)。',
        '**ReAct (推理+行为):** 将推理与外部操作交错——调用API、搜索数据库、执行代码——并将结果并入下一个推理步骤。最适合需要实时数据或验证的现实任务。',
      ],
    },
    modelComparison: {
      title: '模型对比: 2026年模型如何处理CoT提示词',
      columns: ['模型', '提示词级CoT', '内置推理', '最佳用途', '成本(约)'],
      rows: [
        { '模型': 'Claude Opus 4.7', '提示词级CoT': '不需要', '内置推理': 'Extended Thinking(通过API可检查trace)', '最佳用途': '最高精度分析', '成本(约)': '更高(输入+输出+思维token)' },
        { '模型': 'Claude Sonnet 4.6', '提示词级CoT': '不需要', '内置推理': 'Extended Thinking', '最佳用途': '平衡成本/精度', '成本(约)': '中等' },
        { '模型': 'Claude Haiku 4.5', '提示词级CoT': '推荐', '内置推理': '无', '最佳用途': '快速、经济推理', '成本(约)': '低' },
        { '模型': 'OpenAI o3', '提示词级CoT': '不需要', '内置推理': '努力级别(低、中、高、超高)', '最佳用途': '竞赛级问题', '成本(约)': '非常高(思维token层级)' },
        { '模型': 'GPT-4o mini', '提示词级CoT': '推荐', '内置推理': '无', '最佳用途': '预算意识部署', '成本(约)': '非常低' },
        { '模型': 'Gemini 3.1 Pro', '提示词级CoT': '有效', '内置推理': 'Deep Think(thinking_level参数)', '最佳用途': 'Google Cloud集成', '成本(约)': '中-高' },
        { '模型': 'Gemini Flash', '提示词级CoT': '推荐', '内置推理': '无', '最佳用途': '快速响应', '成本(约)': '低' },
        { '模型': 'DeepSeek R1', '提示词级CoT': '不需要', '内置推理': '输出内的内联推理', '最佳用途': '开源、设备上', '成本(约)': '免费(开源)' },
        { '模型': 'Llama 4', '提示词级CoT': '推荐', '内置推理': '无', '最佳用途': '本地部署、隐私', '成本(约)': '自托管(计算依赖)' },
      ],
    },
    relatedReading: {
      title: '相关资源',
      items: [
        '[什么是提示词工程? 完整指南2026](/prompt-engineering/what-is-prompt-engineering?lang=zh)',
        '[结构化输出和JSON模式提示词](/prompt-engineering/structured-output?lang=zh)',
        '[如何减少AI幻觉](/prompt-engineering/reducing-hallucination?lang=zh)',
        '[约束提示词: 限制模型输出](/prompt-engineering/constrained-prompting?lang=zh)',
        '[如何构建多模型分发系统](/prompt-engineering/multi-model-dispatch?lang=zh)',
        '[提示词测试和评估框架](/prompt-engineering/prompt-testing?lang=zh)',
      ],
    },
    faqSection: {
      title: '常见问题',
      faqs: [
        {
          q: '链式思维在所有模型上都有效吗?',
          a: '链式思维在大多数7B+参数模型上工作，但效益各不相同。在中型和小型模型(Haiku、Flash、Llama 4)上最有效。在前沿模型(Claude Opus 4.7、o3)上，内置推理模式通常比提示词级CoT更有效。'
        },
        {
          q: '链式思维会增加成本吗?',
          a: '是的。提示词级CoT增加输出token数量(因为模型在最终答案前写出推理)。内置推理模式(Claude Extended Thinking、OpenAI o3)使用单独的思维token预算，可能有不同的计费费率。测试两种方式对你的使用情况进行成本对精度的权衡。'
        },
        {
          q: '何时使用Few-shot CoT而不是Zero-shot?',
          a: '首先使用Zero-shot CoT——它更简单，在大多数情况下有效。如果Zero-shot不可靠，或你的领域需要特定推理模式(例如财务分析具有标准化行项目结构)，则转为Few-shot(2-5个示例)。'
        },
        {
          q: '我可以将链式思维与结构化输出(JSON)结合吗?',
          a: '是的。你可以要求模型首先以纯文本显示推理，然后以JSON对象输出最终答案。组合指令: 「逐步思考。然后以有效JSON输出你的结果。」这在生产系统中很常见。'
        },
        {
          q: '链式思维与树思维有什么区别?',
          a: '链式思维是线性序列: 步骤1 → 步骤2 → ... → 结论。树思维探索多个分支(替代推理路径)并在得出答案前修剪较弱的。树思维更强大但更贵(需要多个模型调用)。'
        },
        {
          q: 'OpenAI o3需要链式思维提示词吗?',
          a: '不需要。OpenAI o3具有自动激活的内置推理。你不需要添加「逐步思考」指令。只需给o3问题并设置努力级别(低/中/高/超高)以控制要花费多少思维预算。'
        },
        {
          q: '我可以审计内置推理模型的推理吗?',
          a: '可以，但取决于模型。Claude Extended Thinking推理trace通过API可检查。OpenAI o3推理默认隐藏(竞争优势)。Gemini Deep Think推理也隐藏。要获得完全可审计性，使用提示词级CoT或DeepSeek R1。'
        },
        {
          q: '链式思维提示词适合实时应用吗?',
          a: '提示词级CoT增加延迟(更多输出token = 更慢生成)。对于实时用途，使用最少推理的小型模型，或使用流端点在token到达时显示。内置推理模式可能增加更多延迟；基准你的具体使用情况。'
        },
      ],
    },
    sources: {
      title: '来源和进一步阅读',
      items: [
        'Wei, J., Wang, X., Schuurmans, D., et al. (2022). 「Chain-of-Thought Prompting Elicits Reasoning in Large Language Models」 NeurIPS 2022。arXiv:2201.11903',
        'Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). 「Large Language Models are Zero-Shot Reasoners」 NeurIPS 2022。arXiv:2205.11916',
        'Wang, X., Wei, J., Schuurmans, D., et al. (2023). 「Self-Consistency Improves Chain of Thought Reasoning in Language Models」 ICLR 2023。arXiv:2203.11171',
        'Anthropic. (2024). 「Extended Thinking in Claude」 关于Claude Opus 4.7和Sonnet 4.6推理能力的技术文档。',
        'OpenAI. (2026). 「OpenAI o3: Reasoning Models for Competition-Level Problem Solving」 OpenAI文档和研究公告。',
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '链式思维在所有模型上都有效吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '链式思维在大多数7B+参数模型上工作，但效益各不相同。在中型和小型模型(Haiku、Flash、Llama 4)上最有效。在前沿模型(Claude Opus 4.7、o3)上，内置推理模式通常比提示词级CoT更有效。'
        }
      },
      {
        '@type': 'Question',
        name: '链式思维会增加成本吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的。提示词级CoT增加输出token数量(因为模型在最终答案前写出推理)。内置推理模式(Claude Extended Thinking、OpenAI o3)使用单独的思维token预算，可能有不同的计费费率。测试两种方式对你的使用情况进行成本对精度的权衡。'
        }
      },
      {
        '@type': 'Question',
        name: '何时使用Few-shot CoT而不是Zero-shot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '首先使用Zero-shot CoT——它更简单，在大多数情况下有效。如果Zero-shot不可靠，或你的领域需要特定推理模式(例如财务分析具有标准化行项目结构)，则转为Few-shot(2-5个示例)。'
        }
      },
      {
        '@type': 'Question',
        name: '我可以将链式思维与结构化输出(JSON)结合吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的。你可以要求模型首先以纯文本显示推理，然后以JSON对象输出最终答案。组合指令: 「逐步思考。然后以有效JSON输出你的结果。」这在生产系统中很常见。'
        }
      },
      {
        '@type': 'Question',
        name: '链式思维与树思维有什么区别?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '链式思维是线性序列: 步骤1 → 步骤2 → ... → 结论。树思维探索多个分支(替代推理路径)并在得出答案前修剪较弱的。树思维更强大但更贵(需要多个模型调用)。'
        }
      },
      {
        '@type': 'Question',
        name: 'OpenAI o3需要链式思维提示词吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '不需要。OpenAI o3具有自动激活的内置推理。你不需要添加「逐步思考」指令。只需给o3问题并设置努力级别(低/中/高/超高)以控制要花费多少思维预算。'
        }
      },
      {
        '@type': 'Question',
        name: '我可以审计内置推理模型的推理吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以，但取决于模型。Claude Extended Thinking推理trace通过API可检查。OpenAI o3推理默认隐藏(竞争优势)。Gemini Deep Think推理也隐藏。要获得完全可审计性，使用提示词级CoT或DeepSeek R1。'
        }
      },
      {
        '@type': 'Question',
        name: '链式思维提示词适合实时应用吗?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '提示词级CoT增加延迟(更多输出token = 更慢生成)。对于实时用途，使用最少推理的小型模型，或使用流端点在token到达时显示。内置推理模式可能增加更多延迟；基准你的具体使用情况。'
        }
      },
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '链式思维变体',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Zero-shot CoT',
        description: '询问「让我们逐步思考」无示例。在大多数模型上工作，最简单实现。提升: 推理任务上约10-20%精度改善。'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Few-shot CoT',
        description: '显示2-5个带显式推理的工作示例，然后对新问题应用相同模式。比Zero-shot更可靠。提升: 约20-40%精度。'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Self-Consistency',
        description: '生成多个独立推理路径，对最终答案进行多数投票。对错误明显更鲁棒。提升: 难任务上约30-50%。'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: '树思维',
        description: '探索多个推理分支并修剪较弱的。当有许多解决方案路径时使用(规划、游戏、创意)。'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'ReAct',
        description: '将推理与外部操作交错(API调用、搜索、代码)。最适合需要实时数据或验证的现实任务。'
      },
    ]
  },
},
  };
