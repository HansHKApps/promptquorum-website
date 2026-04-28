// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: trace-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The TRACE Framework',
      seoTitle: 'TRACE Framework: Prompts That Show AI Reasoning 2026',
      intro: '**The TRACE Framework turns AI reasoning from a black box into a visible, step-by-step process.** It asks models to Think, Reason, Analyze, Conclude, and Explain — so you can see where the logic holds and where it breaks. PromptQuorum includes the TRACE Framework as a built-in option that any user can select and use directly inside the app.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'TRACE Framework',
      metaDescription: 'TRACE Framework (Think, Reason, Analyze, Conclude, Explain) forces AI to show its work. When to use it, how to write TRACE prompts, why transparency matters.',
      toc: [
        { anchor: 'key-takeaways', label: 'Key Takeaways' },
        { anchor: 'what-is-trace', label: 'What the TRACE Framework Is' },
        { anchor: 'why-trace-matters', label: 'Why the TRACE Framework Matters' },
        { anchor: 'five-stages', label: 'What Are the Five TRACE Stages?' },
        { anchor: 'bad-vs-good-example', label: 'Example: Bad vs Good TRACE Prompt' },
        { anchor: 'when-to-use', label: 'When to Use the TRACE Framework' },
        { anchor: 'how-to-write', label: 'How to Write a TRACE Prompt' },
        { anchor: 'how-promptquorum-implements', label: 'How PromptQuorum Implements the TRACE Framework' },
        { anchor: 'combining-trace', label: 'How Do You Combine TRACE With Other Frameworks?' },
        { anchor: 'how-to-start', label: 'How to Use the TRACE Framework' },
        { anchor: 'common-mistakes', label: 'Common Mistakes With TRACE' },
        { anchor: 'related-reading', label: 'Related Reading' },
        { anchor: 'faq', label: 'FAQ' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/trace-framework',
        'inLanguage': 'en',
        headline: 'The TRACE Framework',
        description: 'How the TRACE Framework (Think, Reason, Analyze, Conclude, Explain) works, when to use it, and how PromptQuorum offers TRACE as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACE Framework', 'Think Reason Analyze Conclude Explain', 'prompt frameworks', 'prompt engineering', 'reasoning prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'What does TRACE stand for in prompt engineering?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE stands for Think, Reason, Analyze, Conclude, Explain. It is a structured prompt pattern that instructs an AI model to show each stage of its reasoning rather than jumping straight to a final answer.' } },
          { '@type': 'Question', 'name': 'When should I use the TRACE Framework?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Use TRACE when reasoning quality and justification matter more than brevity: strategic decisions, technical architecture reviews, complex debugging, and situations where you need to show stakeholders how a conclusion was reached.' } },
          { '@type': 'Question', 'name': 'How is TRACE different from Chain-of-Thought prompting?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chain-of-Thought is a general technique that asks models to reason step by step. TRACE is a specific 5-stage structure (Think, Reason, Analyze, Conclude, Explain) that produces consistent, reproducible reasoning traces across tasks and models.' } },
          { '@type': 'Question', 'name': 'How is TRACE different from the RISEN Framework?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE focuses on making the reasoning process explicit so you can audit it. RISEN focuses on iteratively improving an existing draft. Use TRACE to understand how a model thinks; use RISEN to polish output quality.' } },
          { '@type': 'Question', 'name': 'Can I use TRACE in a single prompt or do I need multiple turns?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Both work. A single prompt that lists all five stages is faster. Multiple turns let you pause and redirect at each stage if needed. For maximum control, many users send TRACE steps separately.' } },
          { '@type': 'Question', 'name': 'How do I prevent TRACE from producing overly long responses?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Add length constraints per stage. For example: "Keep each stage to 1–2 sentences." This forces the model to be concise while still showing its work.' } },
          { '@type': 'Question', 'name': 'Can TRACE help detect model errors?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. By making reasoning visible, TRACE lets you spot false assumptions, logical gaps, and incorrect calculations that would be invisible in a final-answer-only response.' } },
          { '@type': 'Question', 'name': 'How does PromptQuorum support TRACE prompts?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum includes TRACE as a built-in prompt structure. You fill in task-specific context across structured fields aligned to the five stages. PromptQuorum then sends the composed prompt to multiple models in parallel so you can compare their reasoning traces side by side.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Write a TRACE Prompt',
        'description': 'A step-by-step guide to structuring prompts using the TRACE Framework (Think, Reason, Analyze, Conclude, Explain) to make AI reasoning transparent and auditable.',
        'step': [
          { '@type': 'HowToStep', 'name': 'Think', 'text': 'Ask the model to restate the problem in its own words and list key variables and assumptions before attempting an answer.' },
          { '@type': 'HowToStep', 'name': 'Reason', 'text': 'Ask the model to propose 2–3 possible approaches or hypotheses with trade-offs before committing to one.' },
          { '@type': 'HowToStep', 'name': 'Analyze', 'text': 'Ask the model to apply its chosen approach step-by-step to the actual data or context you provided, showing numbers or concrete examples.' },
          { '@type': 'HowToStep', 'name': 'Conclude', 'text': 'Ask the model to state the final answer or recommendation directly and clearly in one sentence.' },
          { '@type': 'HowToStep', 'name': 'Explain', 'text': 'Ask the model to justify the conclusion in plain language that a non-technical stakeholder can follow.' },
        ],
      },
      sections: {
        keyTakeaways: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'TRACE stands for Think, Reason, Analyze, Conclude, Explain — a 5-stage prompt pattern that forces AI models to show each step of their reasoning.',
            'Use TRACE when reasoning quality matters more than brevity: strategic decisions, architecture trade-offs, complex debugging, or any output you need to justify to stakeholders.',
            'TRACE reduces blind trust in model outputs by making false assumptions and logic gaps visible before they affect decisions.',
            'A TRACE prompt can be one single message with all five stages defined, or sent turn-by-turn for more control.',
            'PromptQuorum includes TRACE as a built-in structure: fill in your context, send to multiple models in parallel, and compare reasoning traces side by side.',
          ],
        },
        whatIsTRACE: {
          title: 'What the TRACE Framework Is',
          content: [
            '**The TRACE Framework is a reasoning-first prompt pattern that forces large language models to show their working, not just their final answer.** It is designed for tasks where you care about how the model arrived at a result, such as technical analysis, strategy, or complex troubleshooting.',
            'A common interpretation of TRACE is:',
            'TRACE works on all major models — GPT-5 (OpenAI), Claude 4.7 Opus (Anthropic), Gemini 3 Pro (Google DeepMind), and local models via Ollama or LM Studio — but models follow the five stages with different levels of discipline. Testing the same TRACE prompt across multiple models reveals which provider reasons most transparently for your specific task.',
          ],
          items: [
            'Think: Restate and interpret the problem in your own words.',
            'Reason: Explore possible approaches or hypotheses.',
            'Analyze: Apply those approaches to the concrete data or situation.',
            'Conclude: State the final answer or recommendation clearly.',
            'Explain: Justify the conclusion in a way that humans can quickly follow.',
          ],
        },
        whyTRACEMatters: {
          title: 'Why the TRACE Framework Matters',
          content: [
            '**The TRACE Framework matters because it reduces blind trust in model outputs by making the reasoning path explicit.** When the model explains each stage, you can spot misread requirements, weak assumptions, or gaps in logic early. This connects to broader [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting) principles — TRACE is a structured, reproducible form of that technique.',
            'This is especially useful when:',
          ],
          items: [
            'You are making business or technical decisions based on model outputs.',
            'You need to compare how different models reason about the same problem.',
            'You want a record you can show to teammates or stakeholders to justify a choice.',
          ],
        },
        fiveStages: {
          title: 'What Are the Five TRACE Stages?',
          content: [
            '**A good TRACE prompt tells the model exactly what to do at each stage so that the reasoning trace is consistent across tasks and models.** You can compress this into one message while still keeping the steps clear. For simpler tasks, [zero-shot prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting) is faster; use TRACE when auditability is required.',
            'Typical stage definitions:',
          ],
          items: [
            'Think: Clarify the task, list key variables, and surface any ambiguities.',
            'Reason: Outline potential methods, trade-offs, or solution paths.',
            'Analyze: Apply the chosen method step by step to the actual inputs.',
            'Conclude: Provide a direct answer or recommendation tied to the question.',
            'Explain: Summarize the logic in plain language, focusing on the "why" behind the answer.',
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good TRACE Prompt',
          content: [
            '**The benefit of the TRACE Framework becomes clear when you compare a generic request to a TRACE-based request for the same task.** Here is a simple example for choosing between two product pricing options.',
            '**[Bad Prompt]**',
            '"Which of these two pricing plans is better?"',
            '**[Good Prompt]**',
            '"You are a SaaS pricing analyst. Use the TRACE process for this decision. Think: Restate the problem and list the key factors that matter (for example revenue, churn risk, customer perception). Reason: Propose 2–3 possible ways to compare the two pricing plans (for example break-even analysis, upgrade path, perceived fairness). Analyze: Apply your preferred comparison method step by step to the data I provide. Show numbers or concrete examples where possible. Conclude: State clearly which pricing plan you recommend and for which customer segments, if relevant. Explain: In 3–5 sentences, justify your recommendation in plain language that a non-technical stakeholder can understand. Data: [insert plan details here]"',
            'The TRACE version does not just tell you "Plan A is better"; it shows how the model thought about the trade-offs.',
          ],
        },
        whenToUse: {
          title: 'When to Use the TRACE Framework',
          content: [
            '**You should use the TRACE Framework when your main concern is reasoning quality and justification rather than maximum brevity.** TRACE adds overhead compared to a one-line answer, but it pays off when errors are costly.',
            'Typical use cases include:',
          ],
          items: [
            'Evaluating strategic options, trade-offs, or technical architectures.',
            'Reviewing complex code changes or debugging tricky issues.',
            'Analyzing research findings, metrics, or user feedback to draw conclusions.',
            'Creating explainable recommendations you can share with managers or clients.',
          ],
        },
        howToWrite: {
          title: 'How to Write a TRACE Prompt',
          content: [
            '**Writing a TRACE prompt is straightforward if you explicitly reference the five stages and define expectations for each.** You can start from a simple template and adapt it to your domain.',
            'A generic pattern looks like this:',
            '"You are [role]. Use the TRACE process. Think: [how to restate and clarify the problem]. Reason: [how to explore solution paths]. Analyze: [how to apply reasoning to the specific data or context]. Conclude: [how to present the final answer]. Explain: [how to justify the answer for a human reader]. Context/Data: [insert here]."',
            'Once saved as a template, you only need to change the role and context for each new task.',
          ],
        },
        howPQImplements: {
          title: 'How PromptQuorum Implements the TRACE Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the TRACE Framework as one of its built-in prompt structures so users can run reasoning-first prompts across several models with one click.** When you choose TRACE inside PromptQuorum, the interface exposes fields aligned with the framework\'s stages and automatically composes them into a single instruction.',
            'In PromptQuorum, you can:',
          ],
          items: [
            'Fill in task-specific context while the app keeps the TRACE structure consistent.',
            'Send the same TRACE-based prompt to multiple models in parallel, compare their reasoning traces, and see which provider aligns best with your expectations.',
            'Save TRACE templates for recurring analyses—such as "feature trade-off review" or "incident postmortem analysis"—and share them across your team.',
          ],
        },
        combiningTRACE: {
          title: 'How Do You Combine TRACE With Other Frameworks?',
          content: [
            '**You should combine the TRACE Framework with other frameworks by aligning each with a phase of your workflow: TRACE for reasoning, others for drafting or formatting.** A practical pattern is:',
          ],
          items: [
            'Use a generation-oriented framework (for example [CO-STAR](/prompt-engineering/co-star-framework) or CRAFT) to draft content or options.',
            'Switch to TRACE when you need to analyze choices, validate assumptions, or justify a decision.',
            'Use [RISEN](/prompt-engineering/risen-framework) if you need to iteratively improve a draft rather than reason through a new problem.',
            'Optionally finish with a specification-style framework (such as SPECS) if the final result must follow a strict structure or schema.',
          ],
          columns: ['Framework', 'Best For', 'Pair With TRACE When'],
          rows: [
            { 'Framework': 'CO-STAR', 'Best For': 'Content generation, drafting', 'Pair With TRACE When': 'Draft first, then TRACE to evaluate options' },
            { 'Framework': 'CRAFT', 'Best For': 'Structured content with constraints', 'Pair With TRACE When': 'Generate content, then TRACE to validate claims' },
            { 'Framework': 'RISEN', 'Best For': 'Iterative refinement', 'Pair With TRACE When': 'TRACE to analyze, RISEN to improve' },
            { 'Framework': 'SPECS', 'Best For': 'Strict output schemas', 'Pair With TRACE When': 'TRACE for reasoning, SPECS for final format' },
            { 'Framework': 'Few-Shot', 'Best For': 'Format consistency', 'Pair With TRACE When': 'Add examples to TRACE stages for complex tasks' },
          ],
        },

        howToStart: {
          title: 'How to Use the TRACE Framework',
          numberedItems: [
            '**Think:** Ask the model to restate the problem in its own words and surface any ambiguities before attempting an answer. Example: "Before answering, restate what I am asking. List the key variables and any assumptions you are making."',
            '**Reason:** Ask the model to outline 2–3 possible approaches or hypotheses and their trade-offs before committing to one. Example: "Propose 2–3 ways to approach this problem. For each, briefly state the pros and cons."',
            '**Analyze:** Ask the model to apply its chosen approach step-by-step to the actual data or context you provided. Show numbers or concrete examples where possible. Example: "Apply your preferred approach to the specific situation I gave you. Show each step."',
            '**Conclude:** Ask the model to state the final answer or recommendation directly and clearly in one sentence. Example: "State your recommendation clearly. If relevant, specify which conditions or segments it applies to."',
            '**Explain:** Ask the model to justify the conclusion in plain language that a non-technical stakeholder can follow. Example: "Explain why in 3–5 sentences. Avoid jargon. Write as if explaining to a senior manager with no technical background."',
          ],
        },

        commonMistakes: {
          title: 'Common Mistakes With TRACE',
          mistakes: [
            {
              mistake: 'Skipping the Think stage',
              problem: 'Without restating the problem, the model may misinterpret requirements and proceed confidently down the wrong path.',
              fix: 'Always ask the model to restate the problem and list key variables before moving to Reason. This catches misunderstandings early.',
            },
            {
              mistake: 'Not constraining the length of each stage',
              problem: 'Unconstrained TRACE prompts can produce extremely long responses, making it harder to read and more costly.',
              fix: 'Add length constraints per stage: "Keep each stage to 1–2 sentences" or "Limit Analyze to 3 steps."',
            },
            {
              mistake: 'Using TRACE for routine tasks',
              problem: 'TRACE adds latency and verbosity. If you just need a quick fact or a simple transformation, TRACE is overkill.',
              fix: 'Reserve TRACE for decisions, analysis, and complex reasoning. Use zero-shot prompting for straightforward tasks.',
            },
            {
              mistake: 'Treating the five stages as rigid',
              problem: 'Some tasks don\'t need all five stages, so rigid adherence wastes time and tokens.',
              fix: 'Adapt TRACE to your task: you might skip Reason for a data analysis task, or combine Analyze and Conclude for brevity.',
            },
            {
              mistake: 'Not comparing TRACE results across models',
              problem: 'Different models reason differently, so testing only one model misses opportunities to learn which provider is best for your task.',
              fix: 'Use PromptQuorum or similar dispatch tools to send TRACE prompts to multiple models in parallel and compare their reasoning traces.',
            },
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          content: [
            'The TRACE Framework builds on broader reasoning techniques. Here are related guides to deepen your understanding:',
          ],
          items: [
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — The foundational technique that asks models to reason step by step.',
            '[The RISEN Framework](/prompt-engineering/risen-framework) — Use this when you want iterative refinement alongside reasoning.',
            '[The CO-STAR Framework](/prompt-engineering/co-star-framework) — A complementary framework for drafting and generation tasks.',
            '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting) — Understand when TRACE is overkill and simpler techniques suffice.',
            '[Prompt Engineering Fundamentals](/prompt-engineering/prompt-engineering-fundamentals) — A foundational guide to structuring prompts effectively.',
          ],
        },

        faq: {
          title: 'FAQ',
          faqs: [
            {
              q: 'What does TRACE stand for in prompt engineering?',
              a: 'TRACE stands for Think, Reason, Analyze, Conclude, Explain. It is a structured prompt pattern that instructs an AI model to show each stage of its reasoning rather than jumping straight to a final answer.',
            },
            {
              q: 'When should I use the TRACE Framework?',
              a: 'Use TRACE when reasoning quality and justification matter more than brevity: strategic decisions, technical architecture reviews, complex debugging, and situations where you need to show stakeholders how a conclusion was reached.',
            },
            {
              q: 'How is TRACE different from Chain-of-Thought prompting?',
              a: 'Chain-of-Thought is a general technique that asks models to reason step by step. TRACE is a specific 5-stage structure (Think, Reason, Analyze, Conclude, Explain) that produces consistent, reproducible reasoning traces across tasks and models.',
            },
            {
              q: 'How is TRACE different from the RISEN Framework?',
              a: 'TRACE focuses on making the reasoning process explicit so you can audit it. RISEN focuses on iteratively improving an existing draft. Use TRACE to understand how a model thinks; use RISEN to polish output quality.',
            },
            {
              q: 'Can I use TRACE in a single prompt or do I need multiple turns?',
              a: 'Both work. A single prompt that lists all five stages is faster. Multiple turns let you pause and redirect at each stage if needed. For maximum control, many users send TRACE steps separately.',
            },
            {
              q: 'How do I prevent TRACE from producing overly long responses?',
              a: 'Add length constraints per stage. For example: "Keep each stage to 1–2 sentences." This forces the model to be concise while still showing its work.',
            },
            {
              q: 'Can TRACE help detect model errors?',
              a: 'Yes. By making reasoning visible, TRACE lets you spot false assumptions, logical gaps, and incorrect calculations that would be invisible in a final-answer-only response.',
            },
            {
              q: 'How does PromptQuorum support TRACE prompts?',
              a: 'PromptQuorum includes TRACE as a built-in prompt structure. You fill in task-specific context across structured fields aligned to the five stages. PromptQuorum then sends the composed prompt to multiple models in parallel so you can compare their reasoning traces side by side.',
            },
          ],
        },

        sources: {
          title: 'Sources',
          content: [
            'This article summarizes current best practices in prompt engineering and AI reasoning. The TRACE Framework pattern has been used in academic research and industry practice for making language model reasoning transparent.',
          ],
          items: [
            'Wei, J., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *arXiv:2201.11903*. [Read on arXiv](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). "How to use the OpenAI API." [OpenAI API Documentation](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). "Prompt Engineering Techniques." [Anthropic Docs](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. Open-source LLM deployment and reasoning tools.',
          ],
        },
      },
    },
    de: {
      theme: 'Frameworks',
      title: 'Das TRACE Framework',
      seoTitle: 'TRACE Framework: Prompts, die KI-Denken offenbaren 2026',
      intro: '**Das TRACE Framework macht das Reasoning von KI-Modellen sichtbar — statt nur eine Antwort zu liefern, zeigt das Modell jeden Schritt seines Denkprozesses.** Die fünf Stufen Think (Denken), Reason (Begründen), Analyze (Analysieren), Conclude (Schlussfolgern) und Explain (Erklären) geben Ihnen die Möglichkeit, Logikfehler und falsche Annahmen zu erkennen, bevor sie Entscheidungen beeinflussen. PromptQuorum bietet TRACE als native Option an, die alle Benutzer direkt nutzen können.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '8 min Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'TRACE Framework',
      metaDescription: 'Das TRACE Framework macht KI-Reasoning transparent. Think→Reason→Analyze→Conclude→Explain. Wann anwenden, wie schreiben, warum Nachvollziehbarkeit zählt.',
      toc: [
        { anchor: 'key-takeaways', label: 'Wichtigste Erkenntnisse' },
        { anchor: 'what-is-trace', label: 'Was das TRACE Framework ist' },
        { anchor: 'why-trace-matters', label: 'Warum das TRACE Framework wichtig ist' },
        { anchor: 'five-stages', label: 'Was sind die fünf TRACE Schritte?' },
        { anchor: 'bad-vs-good-example', label: 'Beispiel: Schlechter vs. guter TRACE Prompt' },
        { anchor: 'when-to-use', label: 'Wann das TRACE Framework nutzen' },
        { anchor: 'how-to-write', label: 'Wie einen TRACE Prompt schreiben' },
        { anchor: 'how-promptquorum-implements', label: 'Wie PromptQuorum das TRACE Framework integriert' },
        { anchor: 'combining-trace', label: 'Wie kombiniert man TRACE mit anderen Frameworks?' },
        { anchor: 'how-to-start', label: 'Wie das TRACE Framework nutzen' },
        { anchor: 'common-mistakes', label: 'Häufige Fehler mit TRACE' },
        { anchor: 'related-reading', label: 'Weiterführende Literatur' },
        { anchor: 'faq', label: 'FAQ' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/trace-framework?lang=de',
        'inLanguage': 'de',
        headline: 'Das TRACE Framework',
        description: 'Wie das TRACE Framework (Think, Reason, Analyze, Conclude, Explain) funktioniert, wann es sinnvoll ist, und wie PromptQuorum es nativ anbietet.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACE Framework', 'Think Reason Analyze Conclude Explain', 'Prompt Frameworks', 'Prompt Engineering', 'Reasoning Prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'Wie man das TRACE Framework (Denken, Begründen, Analysieren, Schlussfolgern, Erklären) nutzt, um Modellreasoning transparent zu machen',
        assesses: 'Fähigkeit zur Bewertung von Reasoning-Qualität, Identifikation von logischen Schwächen, Treffen von Entscheidungen basierend auf explizitem Reasoning',
      },
      sections: {
        keyTakeaways: {
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            'TRACE steht für Think, Reason, Analyze, Conclude, Explain — ein 5-stufiges Prompt-Muster, das KI-Modelle dazu zwingt, jeden Denkschritt offenzulegen.',
            'TRACE eignet sich besonders, wenn Reasoning-Qualität wichtiger ist als Kürze: strategische Entscheidungen, Architektur-Abwägungen, komplexes Debugging.',
            'Das Framework reduziert blinde Abhängigkeit von Modellantworten, indem falsche Annahmen und Logiklücken sichtbar gemacht werden.',
            'Ein TRACE-Prompt kann in einer einzigen Nachricht formuliert werden oder schrittweise gesendet werden — je nach gewünschtem Kontrollgrad.',
            'PromptQuorum integriert TRACE nativ: Kontext eintragen, an mehrere Modelle senden, Reasoning-Spuren direkt vergleichen.',
          ],
        },
        whatIsTRACE: {
          title: 'Was das TRACE Framework ist',
          content: [
            '**Das TRACE Framework ist ein Reasoning-fokussiertes Prompt-Muster, das große Sprachmodelle dazu zwingt, ihre Arbeitsschritte zu zeigen, nicht nur die Antwort.** Es ist speziell für Aufgaben konzipiert, wo es auf den Weg ankommt, wie das Modell zu einem Ergebnis kam—etwa bei technischen Analysen, Strategien oder komplexem Troubleshooting.',
            'Die fünf Schritte des TRACE Framework sind:',
          ],
          items: [
            'Think: Das Problem in eigenen Worten umformulieren und interpretieren.',
            'Reason: Mögliche Ansätze oder Hypothesen erkunden.',
            'Analyze: Diese Ansätze auf die konkreten Daten oder Situation anwenden.',
            'Conclude: Die endgültige Antwort oder Empfehlung klar formulieren.',
            'Explain: Die Schlussfolgerung so begründen, dass Menschen sie schnell verstehen.',
          ],
        },
        whyTRACEMatters: {
          title: 'Warum das TRACE Framework wichtig ist',
          content: [
            '**Das TRACE Framework ist wertvoll, weil es blindes Vertrauen in Modell-Outputs reduziert, indem es den Reasoning-Pfad explizit macht.** Wenn das Modell jeden Schritt erklärt, können Sie Missverständnisse, schwache Annahmen oder Lücken in der Logik früh erkennen.',
            'Das ist besonders nützlich, wenn:',
          ],
          items: [
            'Sie geschäftliche oder technische Entscheidungen auf Basis von Modell-Outputs treffen.',
            'Sie vergleichen möchten, wie verschiedene Modelle über dasselbe Problem nachdenken.',
            'Sie einen Nachweis haben möchten, den Sie Teamkollegen oder Stakeholdern vorzeigen können, um eine Entscheidung zu rechtfertigen.',
          ],
        },
        fiveStages: {
          title: 'Was sind die fünf TRACE Schritte?',
          content: [
            '**Ein guter TRACE Prompt sagt dem Modell genau, was es in jedem Stadium tun soll, damit die Reasoning-Spur über Tasks und Modelle hinweg konsistent ist.** Sie können dies in eine Nachricht packen und die Schritte trotzdem klar halten.',
            'Typische Definitionen der Stadien:',
          ],
          items: [
            'Think: Die Task klären, Schlüsselvariablen auflisten, Unklarheiten aufdecken.',
            'Reason: Potenzielle Methoden, Kompromisse oder Lösungswege skizzieren.',
            'Analyze: Die gewählte Methode Schritt für Schritt auf tatsächliche Eingaben anwenden.',
            'Conclude: Eine direkter Antwort oder Empfehlung geben, die an die Frage gebunden ist.',
            'Explain: Die Logik in einfacher Sprache zusammenfassen, mit Fokus auf das „Warum" hinter der Antwort.',
          ],
        },
        badVsGoodExample: {
          title: 'Beispiel: Schlechter vs. guter TRACE Prompt',
          content: [
            '**Der Vorteil des TRACE Framework wird deutlich, wenn Sie eine allgemeine Anfrage mit einer TRACE-basierten Anfrage für dieselbe Task vergleichen.** Hier ist ein einfaches Beispiel zur Auswahl zwischen zwei Preismodellen.',
            '**[Schlechter Prompt]**',
            '"Welches dieser zwei Preismodelle ist besser?"',
            '**[Guter Prompt]**',
            '"Du bist ein SaaS-Pricing-Analyst. Nutze den TRACE-Prozess für diese Entscheidung. Think: Formuliere das Problem neu und liste die Schlüsselfaktoren auf, die wichtig sind (z.B. Umsatz, Churn-Risiko, Kundenwelche). Reason: Schlage 2–3 mögliche Wege vor, die beiden Preismodelle zu vergleichen (z.B. Break-Even-Analyse, Upgrade-Pfad, wahrgenommene Fairness). Analyze: Wende deine bevorzugte Vergleichsmethode Schritt für Schritt auf die Daten an, die ich bereitstelle. Zeige Zahlen oder konkrete Beispiele wo möglich. Conclude: Sage klar, welches Preismodell du empfiehlst und für welche Kundensegmente, falls relevant. Explain: In 3–5 Sätzen, begründe deine Empfehlung in einfacher Sprache, die ein nicht-technischer Stakeholder versteht. Daten: [hier einfügen]"',
            'Die TRACE-Version sagt dir nicht einfach „Modell A ist besser"; sie zeigt dir, wie das Modell über die Kompromisse nachgedacht hat.',
          ],
        },
        whenToUse: {
          title: 'Wann das TRACE Framework nutzen',
          content: [
            '**Du solltest das TRACE Framework nutzen, wenn deine Hauptsorge Reasoning-Qualität und Begründung statt maximaler Kürze ist.** TRACE fügt Overhead hinzu verglichen mit einer einzeiligen Antwort, zahlt sich aber aus, wenn Fehler teuer sind.',
          ],
          items: [
            'Bewertung strategischer Optionen, Kompromisse oder technischer Architekturen.',
            'Überprüfung komplexer Code-Änderungen oder Debugging schwieriger Probleme.',
            'Analyse von Forschungsergebnissen, Metriken oder Nutzerfeedback zum Ziehen von Schlussfolgerungen.',
            'Erstellung nachvollziehbarer Empfehlungen, die Sie mit Managern oder Kunden teilen können.',
          ],
        },
        dachConsiderations: {
          title: 'TRACE im DACH-Kontext: Enterprise und Governance',
          content: [
            '**Für deutschsprachige Organisationen (DACH: Deutschland, Österreich, Schweiz) bietet das TRACE Framework spezifische Vorteile in unternehmensinternen Analyse- und Compliance-Prozessen.** Im DACH-Raum wird formale Dokumentation und strikte Nachvollziehbarkeit hochgeschätzt—besonders im Finanz- und Compliance-Umfeld.',
            'Besondere Anwendungsfälle:',
          ],
          items: [
            'Risikoanalysen und Due-Diligence-Prozesse: TRACE dokumentiert den vollständigen Entscheidungsweg für interne und externe Audits.',
            'Regulatory Compliance: Für Banken, Versicherer und regulierte Unternehmen ist die Transparenz des KI-Reasoning oft gesetzliche Anforderung. TRACE erfüllt diese.',
            'Technische Architektur-Reviews: Deutsche und Schweizer Ingenieurteams nutzen TRACE für nachvollziehbare Entscheidungen bei kritischen Systemen.',
            'Datenschutz und DSGVO: Wenn KI in Entscheidungen involviert ist, die personenbezogene Daten betreffen, muss der Entscheidungsweg nachvollziehbar sein—TRACE leistet dies.',
          ],
        },
        howPQImplements: {
          title: 'Wie PromptQuorum das TRACE Framework implementiert',
          content: [
            '**PromptQuorum ist ein Multi-Model-AI-Dispatch-Tool, das das TRACE Framework als eine seiner integrierten Prompt-Strukturen anbietet, damit Benutzer Reasoning-First-Prompts über mehrere Modelle hinweg mit einem Klick ausführen können.** Wenn Sie TRACE in PromptQuorum wählen, stellt die Schnittstelle Felder bereit, die zu den Framework-Schritten passen, und komponiert sie automatisch in eine einzelne, wiederverwendbare Anweisung.',
            'In PromptQuorum können Sie:',
          ],
          items: [
            'Task-spezifischen Kontext einfügen, während die App die TRACE-Struktur konsistent hält.',
            'Denselben TRACE-basierten Prompt an mehrere Modelle parallel senden, ihre Reasoning-Spuren vergleichen und sehen, welcher Anbieter am besten mit deinen Erwartungen übereinstimmt.',
            'TRACE-Templates für wiederkehrende Analysen—wie „Feature-Tradeoff-Review" oder „Incident-Postmortem-Analyse"—speichern und teamübergreifend teilen.',
          ],
        },
        combiningTRACE: {
          title: 'Wie kombiniert man TRACE mit anderen Frameworks?',
          content: [
            '**Du solltest das TRACE Framework mit anderen Frameworks kombinieren, indem du jedes einer Phase deines Workflows zuordnest: TRACE für Reasoning, andere für Entwurf oder Formatierung.** Ein praktisches Muster ist:',
          ],
          items: [
            'Nutze ein generierungsorientiertes Framework (etwa Single Step, CO-STAR oder CRAFT) um Inhalte oder Optionen zu entwerfen.',
            'Wechsle zu TRACE, wenn du Wahlmöglichkeiten analysieren, Annahmen validieren oder eine Entscheidung begründen musst.',
            'Optional beende mit einem Spezifikations-Framework (etwa SPECS), wenn das Endergebnis einer strikten Struktur oder einem Schema entsprechen muss.',
          ],
          columns: ['Framework', 'Am besten für', 'TRACE kombinieren wenn'],
          rows: [
            { 'Framework': 'CO-STAR', 'Am besten für': 'Inhaltsgenerierung, Entwurf', 'TRACE kombinieren wenn': 'Zuerst entwerfen, dann TRACE zur Bewertung' },
            { 'Framework': 'CRAFT', 'Am besten für': 'Strukturierte Inhalte mit Einschränkungen', 'TRACE kombinieren wenn': 'Inhalt generieren, dann TRACE zur Validierung' },
            { 'Framework': 'RISEN', 'Am besten für': 'Iterative Verbesserung', 'TRACE kombinieren wenn': 'TRACE zum Analysieren, RISEN zum Verbessern' },
            { 'Framework': 'SPECS', 'Am besten für': 'Strenge Output-Schemata', 'TRACE kombinieren wenn': 'TRACE für Reasoning, SPECS für das finale Format' },
            { 'Framework': 'Few-Shot', 'Am besten für': 'Format-Konsistenz', 'TRACE kombinieren wenn': 'Beispiele zu TRACE-Stufen für komplexe Aufgaben hinzufügen' },
          ],
        },
        howToStart: {
          title: 'Wie das TRACE Framework nutzen',
          numberedItems: [
            '**Think (Denken):** Fordern Sie das Modell auf, das Problem in seinen eigenen Worten umzuformulieren und alle Mehrdeutigkeiten vor dem Beantwortungsversuch aufzudecken. Beispiel: „Bevor Sie antworten, formulieren Sie um, was ich frage. Listet die Schlüsselvariablen und etwaige Annahmen auf, die Sie treffen."',
            '**Reason (Begründen):** Fordern Sie das Modell auf, 2–3 mögliche Ansätze oder Hypothesen und deren Abwägungen zu skizzieren, bevor es sich auf einen festlegt. Beispiel: „Schlagen Sie 2–3 Wege vor, dieses Problem anzugehen. Geben Sie für jeden kurz die Vor- und Nachteile an."',
            '**Analyze (Analysieren):** Fordern Sie das Modell auf, seinen gewählten Ansatz Schritt für Schritt auf die tatsächlichen Daten oder den Kontext anzuwenden, den Sie bereitgestellt haben. Zeigen Sie Zahlen oder konkrete Beispiele, wo möglich. Beispiel: „Wenden Sie Ihren bevorzugten Ansatz auf die spezifische Situation an, die ich beschrieben habe. Zeigen Sie jeden Schritt."',
            '**Conclude (Schlussfolgern):** Fordern Sie das Modell auf, die endgültige Antwort oder Empfehlung direkt und klar in einem Satz zu formulieren. Beispiel: „Geben Sie Ihre Empfehlung klar an. Geben Sie gegebenenfalls die Bedingungen oder Segmente an, auf die sie zutrifft."',
            '**Explain (Erklären):** Fordern Sie das Modell auf, die Schlussfolgerung in einfacher Sprache zu rechtfertigen, die ein nicht-technisches Publikum verstehen kann. Beispiel: „Erklären Sie, warum in 3–5 Sätzen. Vermeiden Sie Jargon. Schreiben Sie so, als würden Sie es einem Senior-Manager ohne technischen Hintergrund erklären."',
          ],
        },

        commonMistakes: {
          title: 'Häufige Fehler mit TRACE',
          mistakes: [
            {
              mistake: 'Die Think-Stufe überspringen',
              problem: 'Ohne Neuformulierung des Problems kann das Modell Anforderungen falsch interpretieren und zuversichtlich in die falsche Richtung gehen.',
              fix: 'Fordern Sie das Modell immer auf, das Problem und die Schlüsselvariablen neu zu formulieren, bevor es mit Reason fortfährt. Das deckt Missverständnisse früh auf.',
            },
            {
              mistake: 'Die Länge jeder Stufe nicht begrenzen',
              problem: 'Unbegrenzte TRACE-Prompts können extrem lange Antworten erzeugen, die schwer zu lesen und kostspielig sind.',
              fix: 'Längenvorgaben pro Stufe hinzufügen: „Halte jede Stufe auf 1–2 Sätze" oder „Begrenze Analyze auf 3 Schritte."',
            },
            {
              mistake: 'TRACE für Routineaufgaben nutzen',
              problem: 'TRACE erhöht die Latenz und Ausführlichkeit. Wenn Sie nur eine schnelle Antwort oder einfache Transformation benötigen, ist TRACE überdimensioniert.',
              fix: 'TRACE für Entscheidungen, Analysen und komplexes Reasoning reservieren. Zero-Shot-Prompting für einfache Aufgaben verwenden.',
            },
            {
              mistake: 'Die fünf Stufen als starr betrachten',
              problem: 'Manche Aufgaben benötigen nicht alle fünf Stufen, daher verschwendet starre Einhaltung Zeit und Tokens.',
              fix: 'TRACE an Ihre Aufgabe anpassen: Sie können Reason bei Datenanalyse weglassen oder Analyze und Conclude für Kürze zusammenführen.',
            },
            {
              mistake: 'TRACE-Ergebnisse nicht über Modelle vergleichen',
              problem: 'Verschiedene Modelle denken unterschiedlich, daher verpasst man beim Testen nur eines Modells die Chance zu lernen, welcher Anbieter am besten für Ihre Aufgabe ist.',
              fix: 'PromptQuorum oder ähnliche Dispatch-Tools verwenden, um TRACE-Prompts an mehrere Modelle parallel zu senden und ihre Reasoning-Spuren zu vergleichen.',
            },
          ],
        },

        relatedReading: {
          title: 'Weiterführende Literatur',
          content: [
            'Das TRACE Framework baut auf breiteren Reasoning-Techniken auf. Hier sind verwandte Leitfäden zur Vertiefung:',
          ],
          items: [
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — Die grundlegende Technik, die Modelle bittet, Schritt für Schritt zu denken.',
            '[Das RISEN Framework](/prompt-engineering/risen-framework) — Nutzen Sie dies, wenn Sie iterative Verbesserung neben Reasoning wünschen.',
            '[Das CO-STAR Framework](/prompt-engineering/co-star-framework) — Ein ergänzendes Framework für Entwurfs- und Generierungsaufgaben.',
            '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting) — Verstehen Sie, wann TRACE überdimensioniert ist und einfachere Techniken ausreichen.',
            '[Prompt Engineering Grundlagen](/prompt-engineering/prompt-engineering-fundamentals) — Ein grundlegender Leitfaden zur effektiven Strukturierung von Prompts.',
          ],
        },

        faq: {
          title: 'FAQ',
          faqs: [
            {
              q: 'Wofür steht TRACE im Prompt Engineering?',
              a: 'TRACE steht für Think (Denken), Reason (Begründen), Analyze (Analysieren), Conclude (Schlussfolgern), Explain (Erklären). Es ist ein strukturiertes Prompt-Muster, das KI-Modelle anweist, jeden Schritt ihres Denkprozesses zu zeigen, statt direkt eine Antwort zu geben.',
            },
            {
              q: 'Wann sollte ich das TRACE Framework verwenden?',
              a: 'Verwenden Sie TRACE, wenn Reasoning-Qualität und Begründung wichtiger sind als Kürze: strategische Entscheidungen, technische Architektur-Reviews, komplexes Debugging und Situationen, in denen Sie Stakeholdern zeigen müssen, wie eine Schlussfolgerung erreicht wurde.',
            },
            {
              q: 'Wie unterscheidet sich TRACE von Chain-of-Thought Prompting?',
              a: 'Chain-of-Thought ist eine allgemeine Technik, die Modelle bittet, Schritt für Schritt zu denken. TRACE ist eine spezifische 5-Stufen-Struktur (Think, Reason, Analyze, Conclude, Explain), die konsistente, reproduzierbare Reasoning-Spuren über Aufgaben und Modelle hinweg erzeugt.',
            },
            {
              q: 'Wie unterscheidet sich TRACE vom RISEN Framework?',
              a: 'TRACE fokussiert darauf, den Reasoning-Prozess explizit zu machen, damit Sie ihn prüfen können. RISEN fokussiert auf die iterative Verbesserung eines bestehenden Entwurfs. Nutzen Sie TRACE, um zu verstehen, wie ein Modell denkt; nutzen Sie RISEN, um die Ausgabequalität zu verbessern.',
            },
            {
              q: 'Kann ich TRACE in einem einzigen Prompt verwenden oder brauche ich mehrere Turns?',
              a: 'Beides funktioniert. Ein einziger Prompt, der alle fünf Stufen auflistet, ist schneller. Mehrere Turns ermöglichen es Ihnen, bei Bedarf zu pausieren und bei jeder Stufe neu zu steuern. Für maximale Kontrolle senden viele Benutzer TRACE-Schritte separat.',
            },
            {
              q: 'Wie verhindere ich, dass TRACE zu langen Antworten führt?',
              a: 'Längenvorgaben pro Stufe hinzufügen. Zum Beispiel: „Halte jede Stufe auf 1–2 Sätze." Das zwingt das Modell zur Kürze, während es seine Arbeit noch zeigt.',
            },
            {
              q: 'Kann TRACE dabei helfen, Modellfehler zu erkennen?',
              a: 'Ja. Indem Reasoning sichtbar gemacht wird, ermöglicht TRACE das Erkennen falscher Annahmen, logischer Lücken und falscher Berechnungen, die bei einer Antwort nur mit dem Endergebnis unsichtbar wären.',
            },
            {
              q: 'Wie unterstützt PromptQuorum TRACE-Prompts?',
              a: 'PromptQuorum enthält TRACE als integrierte Prompt-Struktur. Sie füllen aufgabenspezifischen Kontext in strukturierte Felder, die an den fünf Stufen ausgerichtet sind. PromptQuorum sendet den zusammengesetzten Prompt dann an mehrere Modelle parallel, damit Sie ihre Reasoning-Spuren nebeneinander vergleichen können.',
            },
          ],
        },

        sources: {
          title: 'Quellen',
          content: [
            'Dieser Artikel fasst aktuelle Best Practices im Prompt Engineering und KI-Reasoning zusammen. Das TRACE Framework-Muster wurde in der akademischen Forschung und Praxis eingesetzt, um das Reasoning von Sprachmodellen transparent zu machen.',
          ],
          items: [
            'Wei, J., et al. (2022). „Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *arXiv:2201.11903*. [Auf arXiv lesen](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). „How to use the OpenAI API." [OpenAI API-Dokumentation](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). „Prompt Engineering Techniques." [Anthropic Docs](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. Open-Source LLM-Deployment und Reasoning-Tools.',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Unterscheidet sich TRACE vom RISEN Framework?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. TRACE betont explizites Reasoning und den Begründungspfad. RISEN fokussiert auf iterative Verbesserung bestehender Entwürfe. Nutze TRACE, wenn du verstehen musst, wie das Modell denkt; nutze RISEN, wenn du einen Entwurf schrittweise verfeinern möchtest.' } },
          { '@type': 'Question', 'name': 'Kann ich TRACE in einem einzigen langen Prompt verwenden oder sollte ich mehrere Prompts senden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Beide Ansätze funktionieren. Ein einziger langer Prompt ist schneller; mehrere aufeinanderfolgende Prompts ermöglichen es dir, bei Bedarf zu pausieren und Feedback zu geben. Für maximale Kontrolle und Transparenz senden viele Benutzer die TRACE-Schritte separat, was auch die Token-Kosten sichtbar macht.' } },
          { '@type': 'Question', 'name': 'Wie integriere ich TRACE in meine bestehenden Prompt-Workflows?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum speichert TRACE-Prompts als Templates. Du kannst ein Template für einen bestimmten Workflow erstellen (z.B. „Feature-Trade-off-Review"), es mit deinem Team teilen und es jedes Mal abrufen, wenn du einen ähnlichen Analyse-Prozess durchführen musst. Dies spart Zeit und stellt Konsistenz sicher.' } },
          { '@type': 'Question', 'name': 'Ist TRACE für Anfänger in Prompt Engineering geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Obwohl TRACE für fortgeschrittene Reasoning-Workflows konzipiert wurde, ist die Struktur (Think–Reason–Analyze–Conclude–Explain) intuitiv und anfängerfreundlich. PromptQuorums vorausgefüllte Felder machen es noch einfacher.' } },
          { '@type': 'Question', 'name': 'Welche Compliance-Aspekte gelten bei TRACE-Anwendung in regulierten Umgebungen?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'In Banken, Versicherungen und anderen regulierten Branchen macht TRACE KI-Entscheidungen nachvollziehbar—wichtig für Compliance und Audits. Bei DSGVO-Bezug müssen personenbezogene Daten sicher behandelt werden; nutze lokale Modelle (Ollama, LM Studio) statt Cloud-APIs für sensible Daten.' } },
          { '@type': 'Question', 'name': 'Wofür steht TRACE im Prompt Engineering?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE steht für Think (Denken), Reason (Begründen), Analyze (Analysieren), Conclude (Schlussfolgern), Explain (Erklären). Es ist ein strukturiertes Prompt-Muster, das KI-Modelle anweist, jeden Schritt ihres Denkprozesses zu zeigen, statt nur die Schlussfolgerung zu liefern.' } },
          { '@type': 'Question', 'name': 'Wie unterscheidet sich TRACE von Chain-of-Thought?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chain-of-Thought ist eine allgemeine Technik, die Modelle bittet, schrittweise zu denken. TRACE ist eine spezifische 5-Stufen-Struktur mit klaren Rollen für jede Phase. TRACE ist besser reproduzierbar und für Audit-Zwecke besser geeignet.' } },
          { '@type': 'Question', 'name': 'Wie verhindere ich, dass TRACE zu langen, unübersichtlichen Antworten führt?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Füge pro Stufe eine Längenvorgabe ein, z.B. „Halte jede Stufe auf 1–2 Sätze." Das zwingt das Modell zur Kürze, ohne die Transparenz zu opfern.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Wie man einen TRACE-Prompt schreibt',
        'description': 'Schritt-für-Schritt-Anleitung für das Schreiben von Prompts mit dem TRACE Framework (Think, Reason, Analyze, Conclude, Explain).',
        'step': [
          { '@type': 'HowToStep', 'name': 'Think (Denken)', 'text': 'Fordern Sie das Modell auf, das Problem in eigenen Worten zu formulieren und Schlüsselvariablen sowie Annahmen vor dem Beantworten aufzulisten.' },
          { '@type': 'HowToStep', 'name': 'Reason (Begründen)', 'text': 'Lassen Sie das Modell 2–3 mögliche Ansätze oder Hypothesen mit Abwägungen skizzieren, bevor es sich festlegt.' },
          { '@type': 'HowToStep', 'name': 'Analyze (Analysieren)', 'text': 'Lassen Sie das Modell den gewählten Ansatz Schritt für Schritt auf die konkrete Datenlage anwenden, mit Zahlen oder Beispielen.' },
          { '@type': 'HowToStep', 'name': 'Conclude (Schlussfolgern)', 'text': 'Lassen Sie das Modell die finale Antwort oder Empfehlung klar in einem Satz formulieren.' },
          { '@type': 'HowToStep', 'name': 'Explain (Erklären)', 'text': 'Lassen Sie das Modell die Schlussfolgerung in einfacher Sprache begründen, die ein nicht-technisches Publikum versteht.' },
        ],
      },
    },
    fr: {
      theme: 'Frameworks',
      title: 'Le Framework TRACE',
      seoTitle: 'Framework TRACE : Rendre visible la réflexion de l\'IA 2026',
      intro: '**Le Framework TRACE rend le raisonnement des modèles IA visible — au lieu de donner uniquement une réponse, le modèle détaille chaque étape de sa réflexion.** Les cinq étapes (Réfléchir, Raisonner, Analyser, Conclure, Expliquer) vous permettent de détecter les hypothèses erronées et les failles logiques avant qu\'elles n\'influencent vos décisions. PromptQuorum propose TRACE comme option directement accessible pour tous les utilisateurs.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '7 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Framework TRACE',
      metaDescription: 'Le Framework TRACE rend la réflexion IA transparente. Think→Reason→Analyze→Conclude→Explain. Quand l\'utiliser, comment l\'écrire, pourquoi la traçabilité compte.',
      toc: [
        { anchor: 'key-takeaways', label: 'Points clés' },
        { anchor: 'what-is-trace', label: 'Qu\'est-ce que le Framework TRACE' },
        { anchor: 'why-trace-matters', label: 'Pourquoi le Framework TRACE importe' },
        { anchor: 'five-stages', label: 'Quelles sont les cinq étapes du Framework TRACE ?' },
        { anchor: 'bad-vs-good-example', label: 'Exemple : Mauvais vs bon prompt TRACE' },
        { anchor: 'when-to-use', label: 'Quand utiliser le Framework TRACE' },
        { anchor: 'how-to-write', label: 'Comment écrire un prompt TRACE' },
        { anchor: 'how-promptquorum-implements', label: 'Comment PromptQuorum intègre le Framework TRACE' },
        { anchor: 'combining-trace', label: 'Comment combiner TRACE avec d\'autres frameworks ?' },
        { anchor: 'how-to-start', label: 'Comment utiliser le Framework TRACE' },
        { anchor: 'common-mistakes', label: 'Erreurs courantes avec TRACE' },
        { anchor: 'related-reading', label: 'Lectures complémentaires' },
        { anchor: 'faq', label: 'FAQ' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/trace-framework?lang=fr',
        'inLanguage': 'fr',
        headline: 'Le Framework TRACE',
        description: 'Comment fonctionne le Framework TRACE (Penser, Raisonner, Analyser, Conclure, Expliquer), quand l\'utiliser, et comment PromptQuorum l\'intègre.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['Framework TRACE', 'raisonnement IA', 'frameworks de prompts', 'ingénierie des prompts', 'PromptQuorum', 'modèles de langage'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Ingénierie des prompts' },
          { '@type': 'Thing', name: 'Frameworks de prompts' },
          { '@type': 'Thing', name: 'Modèles de langage volumineux' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'Comment structurer des prompts pour forcer un modèle IA à montrer son raisonnement détaillé plutôt que juste sa réponse finale',
        assesses: 'Capacité à évaluer la qualité du raisonnement d\'un modèle, identifier les faiblesses logiques, et justifier des décisions basées sur ce raisonnement explicite',
      },
      sections: {
        keyTakeaways: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'TRACE signifie Think, Reason, Analyze, Conclude, Explain — un schéma de prompt en 5 étapes qui force les modèles IA à montrer chaque étape de leur raisonnement.',
            'Utilisez TRACE quand la qualité du raisonnement prime sur la brièveté : décisions stratégiques, choix d\'architecture, débogage complexe.',
            'Le framework réduit la confiance aveugle envers les modèles en rendant visibles les hypothèses erronées et les lacunes logiques.',
            'Un prompt TRACE peut tenir en un seul message ou être envoyé en plusieurs tours pour plus de contrôle.',
            'PromptQuorum intègre TRACE nativement : remplissez le contexte, envoyez à plusieurs modèles en parallèle, comparez les traces de raisonnement côte à côte.',
          ],
        },
        whatIsTRACE: {
          title: 'Qu\'est-ce que le Framework TRACE',
          content: [
            '**Le Framework TRACE force les modèles à montrer leur travail plutôt que de simplement donner une réponse finale.** C\'est particulièrement utile pour les tâches où vous avez besoin de comprendre comment le modèle a raisonné.',
            'Les cinq étapes du Framework TRACE sont :',
          ],
          items: [
            'Penser : Clarifier et reformuler le problème.',
            'Raisonner : Explorer différentes approches.',
            'Analyser : Appliquer la méthode choisie aux données.',
            'Conclure : Donner une réponse claire et directe.',
            'Expliquer : Justifier la conclusion en langage simple.',
          ],
        },
        whyTRACEMatters: {
          title: 'Pourquoi le Framework TRACE importe',
          content: [
            '**Le Framework TRACE réduit la confiance aveugle envers les modèles en rendant le raisonnement explicite.** Vous pouvez ainsi détecter les erreurs de logique ou les fausses hypothèses plus facilement.',
          ],
          items: [
            'Prises de décision critiques basées sur les outputs du modèle.',
            'Comparaison du raisonnement entre différents modèles.',
            'Documentation du processus pour justifier les choix auprès des parties prenantes.',
          ],
        },
        fiveStages: {
          title: 'Quelles sont les cinq étapes du Framework TRACE ?',
          content: [
            '**Un bon prompt TRACE définit précisément ce que le modèle doit faire à chaque étape.** Vous pouvez regrouper ces étapes en un seul message ou les séparer selon vos besoins.',
          ],
          items: [
            'Penser : Clarifier la tâche, lister les variables clés, identifier les ambiguïtés.',
            'Raisonner : Esquisser les méthodes possibles, énumérer les compromis.',
            'Analyser : Appliquer la méthode étape par étape aux données réelles.',
            'Conclure : Fournir une réponse directe liée à la question.',
            'Expliquer : Résumer la logique en langage clair, en mettant l\'accent sur le « pourquoi ».',
          ],
        },
        badVsGoodExample: {
          title: 'Exemple : Mauvais vs bon prompt TRACE',
          content: [
            '**La valeur du Framework TRACE devient claire en comparant une demande générique à une demande structurée pour la même tâche.**',
            '**[Mauvais prompt]**',
            '"Lequel de ces deux plans tarifaires est le meilleur ?"',
            '**[Bon prompt TRACE]**',
            '"Tu es un expert en tarification SaaS. Applique le processus TRACE. Penser : Reformule le problème et liste les facteurs clés (revenus, taux de churn, perception client). Raisonner : Propose 2–3 méthodes pour comparer les plans. Analyser : Applique la méthode préférée aux données. Conclure : Quel plan recommandes-tu et pour quel segment ? Expliquer : En 3–5 phrases, justifie ta recommandation pour un PDG non-technique. Données : [insérer ici]"',
            'Le prompt TRACE ne dit pas simplement « Le plan A est meilleur » ; il montre comment le modèle a pensé aux compromis.',
          ],
        },
        whenToUse: {
          title: 'Quand utiliser le Framework TRACE',
          content: [
            '**Utilisez TRACE quand la qualité du raisonnement prime sur la brièveté, notamment pour les décisions stratégiques, l\'analyse technique ou la validation.** TRACE ajoute de la complexité, mais elle se justifie quand les erreurs coûtent cher.',
          ],
          items: [
            'Évaluation de stratégies, d\'architectures, ou de compromis.',
            'Révision de changements de code ou débogage.',
            'Analyse de données, de métriques ou de feedback.',
            'Recommandations justifiées pour des parties prenantes.',
          ],
        },
        howPQImplements: {
          title: 'Comment PromptQuorum intègre le Framework TRACE',
          content: [
            '**PromptQuorum est un outil de dispatch multi-modèles qui intègre TRACE comme option directement accessible.** Vous composez vos étapes TRACE et PromptQuorum les envoie aux modèles de votre choix.',
            'Vous pouvez :',
          ],
          items: [
            'Remplir chaque étape TRACE tout en gardant la structure cohérente.',
            'Envoyer le même prompt TRACE à multiple modèles en parallèle et comparer leur raisonnement.',
            'Sauvegarder les templates TRACE pour réutilisation et partage d\'équipe.',
          ],
        },
        combiningTRACE: {
          title: 'Comment combiner TRACE avec d\'autres frameworks ?',
          content: [
            '**Associez TRACE à d\'autres frameworks en alignant chacun à une phase de votre workflow : TRACE pour le raisonnement, autres pour la génération.** Par exemple :',
          ],
          items: [
            'Utiliser Single Step ou CO-STAR pour générer du contenu initial.',
            'Passer à TRACE pour valider la logique et les assomptions.',
            'Finir optionnellement avec SPECS pour formater le résultat selon un schéma strict.',
          ],
          columns: ['Framework', 'Idéal pour', 'Combiner avec TRACE quand'],
          rows: [
            { 'Framework': 'CO-STAR', 'Idéal pour': 'Génération de contenu, brouillon', 'Combiner avec TRACE quand': 'Brouillon en premier, puis TRACE pour évaluer les options' },
            { 'Framework': 'CRAFT', 'Idéal pour': 'Contenu structuré avec contraintes', 'Combiner avec TRACE quand': 'Générer du contenu, puis TRACE pour valider les affirmations' },
            { 'Framework': 'RISEN', 'Idéal pour': 'Raffinement itératif', 'Combiner avec TRACE quand': 'TRACE pour analyser, RISEN pour améliorer' },
            { 'Framework': 'SPECS', 'Idéal pour': 'Schémas de sortie stricts', 'Combiner avec TRACE quand': 'TRACE pour le raisonnement, SPECS pour le format final' },
            { 'Framework': 'Few-Shot', 'Idéal pour': 'Cohérence du format', 'Combiner avec TRACE quand': 'Ajouter des exemples aux étapes TRACE pour les tâches complexes' },
          ],
        },
        howToStart: {
          title: 'Comment utiliser le Framework TRACE',
          numberedItems: [
            '**Think (Réfléchir) :** Demandez au modèle de reformuler le problème dans ses propres termes et de signaler les ambiguïtés avant de tenter une réponse. Exemple : « Avant de répondre, reformulez ce que je vous demande. Listez les variables clés et les suppositions que vous faites. »',
            '**Reason (Raisonner) :** Demandez au modèle de proposer 2–3 approches possibles ou hypothèses et leurs compromis avant de s\'engager sur l\'une d\'elles. Exemple : « Proposez 2–3 façons d\'aborder ce problème. Pour chacune, énoncez brièvement les avantages et les inconvénients. »',
            '**Analyze (Analyser) :** Demandez au modèle d\'appliquer son approche choisie étape par étape aux données ou au contexte réel que vous avez fourni. Montrez des chiffres ou des exemples concrets si possible. Exemple : « Appliquez votre approche préférée à la situation spécifique que j\'ai décrite. Montrez chaque étape. »',
            '**Conclude (Conclure) :** Demandez au modèle d\'énoncer la réponse finale ou la recommandation directement et clairement en une phrase. Exemple : « Énoncez votre recommandation clairement. Si pertinent, précisez les conditions ou segments auxquels elle s\'applique. »',
            '**Explain (Expliquer) :** Demandez au modèle de justifier la conclusion en langage simple qu\'un non-spécialiste peut comprendre. Exemple : « Expliquez pourquoi en 3–5 phrases. Évitez le jargon. Écrivez comme si vous l\'expliquiez à un cadre senior sans connaissances techniques. »',
          ],
        },

        commonMistakes: {
          title: 'Erreurs courantes avec TRACE',
          mistakes: [
            {
              mistake: 'Passer l\'étape Penser',
              problem: 'Sans reformulation du problème, le modèle peut mal interpréter vos attentes et progresser avec assurance dans la mauvaise direction.',
              fix: 'Toujours demander au modèle de reformuler le problème et de lister les variables clés avant de passer au Raisonner. Cela détecte les malentendus rapidement.',
            },
            {
              mistake: 'Ne pas limiter la longueur de chaque étape',
              problem: 'Les prompts TRACE sans limite peuvent générer des réponses très longues, difficiles à lire et coûteuses.',
              fix: 'Ajouter des contraintes de longueur par étape : « Garde chaque étape à 1–2 phrases » ou « Limite l\'Analyse à 3 étapes. »',
            },
            {
              mistake: 'Utiliser TRACE pour des tâches simples',
              problem: 'TRACE ajoute latence et verbosité. Si vous avez juste besoin d\'une réponse rapide ou d\'une transformation simple, TRACE est excessif.',
              fix: 'Réserver TRACE pour les décisions, analyses et raisonnement complexe. Utiliser le prompting zéro-shot pour les tâches directes.',
            },
            {
              mistake: 'Traiter les cinq étapes comme rigides',
              problem: 'Certaines tâches n\'ont pas besoin des cinq étapes, donc une adhérence rigide gaspille temps et tokens.',
              fix: 'Adapter TRACE à votre tâche : vous pouvez sauter Raisonner dans une analyse de données, ou combiner Analyser et Conclure pour la brièveté.',
            },
            {
              mistake: 'Ne pas comparer les résultats TRACE entre modèles',
              problem: 'Différents modèles raisonnent différemment, tester un seul modèle vous fait manquer l\'opportunité d\'apprendre quel fournisseur est meilleur pour votre tâche.',
              fix: 'Utiliser PromptQuorum ou des outils de dispatch similaires pour envoyer des prompts TRACE à plusieurs modèles en parallèle et comparer leurs traces de raisonnement.',
            },
          ],
        },

        relatedReading: {
          title: 'Lectures complémentaires',
          content: [
            'Le Framework TRACE s\'appuie sur des techniques de raisonnement plus larges. Voici des guides connexes pour approfondir votre compréhension :',
          ],
          items: [
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — La technique fondamentale qui demande aux modèles de raisonner étape par étape.',
            '[Le Framework RISEN](/prompt-engineering/risen-framework) — À utiliser quand vous voulez l\'amélioration itérative au côté du raisonnement.',
            '[Le Framework CO-STAR](/prompt-engineering/co-star-framework) — Un framework complémentaire pour les tâches de rédaction et génération.',
            '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot-prompting) — Comprendre quand TRACE est excessif et les techniques plus simples suffisent.',
            '[Fondamentaux du Prompt Engineering](/prompt-engineering/prompt-engineering-fundamentals) — Un guide fondateur pour structurer les prompts efficacement.',
          ],
        },

        faq: {
          title: 'FAQ',
          faqs: [
            {
              q: 'Que signifie TRACE en ingénierie des prompts ?',
              a: 'TRACE signifie Think (Penser), Reason (Raisonner), Analyze (Analyser), Conclude (Conclure), Explain (Expliquer). C\'est un schéma de prompt structuré qui demande au modèle de montrer chaque étape de son raisonnement plutôt que donner directement une réponse finale.',
            },
            {
              q: 'Quand dois-je utiliser le Framework TRACE ?',
              a: 'Utilisez TRACE quand la qualité du raisonnement et la justification sont plus importantes que la brièveté : décisions stratégiques, évaluations de technologies, debugging complexe, situations où vous devez montrer aux parties prenantes comment une conclusion a été atteinte.',
            },
            {
              q: 'Comment TRACE est-il différent du prompting Chain-of-Thought ?',
              a: 'Chain-of-Thought est une technique générale qui demande aux modèles de penser étape par étape. TRACE est une structure spécifique à 5 étapes (Penser, Raisonner, Analyser, Conclure, Expliquer) qui produit des traces de raisonnement cohérentes et reproductibles entre les tâches et les modèles.',
            },
            {
              q: 'Comment TRACE est-il différent du Framework RISEN ?',
              a: 'TRACE se concentre sur rendre le processus de raisonnement explicite pour l\'auditer. RISEN se concentre sur l\'amélioration itérative d\'un brouillon existant. Utilisez TRACE pour comprendre comment un modèle pense ; utilisez RISEN pour affiner la qualité des résultats.',
            },
            {
              q: 'Puis-je utiliser TRACE dans un seul prompt ou ai-je besoin de plusieurs tours ?',
              a: 'Les deux fonctionnent. Un prompt unique listant les cinq étapes est plus rapide. Des tours multiples vous permettent de mettre en pause et de rediriger à chaque étape si besoin. Pour le contrôle maximal, beaucoup d\'utilisateurs envoient les étapes TRACE séparément.',
            },
            {
              q: 'Comment empêcher TRACE de produire des réponses trop longues ?',
              a: 'Ajoutez des contraintes de longueur par étape. Par exemple : « Garde chaque étape à 1–2 phrases. » Cela force le modèle à être concis tout en montrant son travail.',
            },
            {
              q: 'TRACE peut-il aider à détecter les erreurs du modèle ?',
              a: 'Oui. En rendant le raisonnement visible, TRACE vous permet de repérer les fausses hypothèses, les lacunes logiques et les calculs incorrects qui seraient invisibles dans une réponse finale seule.',
            },
            {
              q: 'Comment PromptQuorum supporte-t-il les prompts TRACE ?',
              a: 'PromptQuorum inclut TRACE comme structure de prompt intégrée. Vous remplissez le contexte spécifique à la tâche dans les champs alignés sur les cinq étapes. PromptQuorum compose ensuite le prompt et l\'envoie à plusieurs modèles en parallèle pour que vous puissiez comparer leurs traces de raisonnement côte à côte.',
            },
          ],
        },

        sources: {
          title: 'Sources',
          content: [
            'Cet article résume les meilleures pratiques actuelles en ingénierie des prompts et raisonnement IA. Le schéma Framework TRACE a été utilisé dans la recherche académique et la pratique industrielle pour rendre le raisonnement des modèles de langage transparent.',
          ],
          items: [
            'Wei, J., et al. (2022). « Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. » *arXiv:2201.11903*. [Lire sur arXiv](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). « How to use the OpenAI API. » [Documentation OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). « Prompt Engineering Techniques. » [Anthropic Docs](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. Outils open-source de déploiement et raisonnement LLM.',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Quelle est la différence entre TRACE et RISEN ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE force le modèle à montrer son raisonnement en détail. RISEN améliore progressivement un brouillon existant. Utilisez TRACE pour comprendre la logique ; utilisez RISEN pour affiner un résultat.' } },
          { '@type': 'Question', 'name': 'Puis-je combiner TRACE avec d\'autres frameworks ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Absolument. Utilisez un framework génératif d\'abord, puis TRACE pour valider le raisonnement, puis optionnellement SPECS pour le formatage final.' } },
          { '@type': 'Question', 'name': 'TRACE fonctionne-t-il pour tous les types de tâches ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE excelle pour les tâches où le raisonnement et la justification importent : décisions stratégiques, analyses, debugging. Pour les tâches simples et rapides, TRACE ajoute de la complexité inutile.' } },
          { '@type': 'Question', 'name': 'Comment éviter que TRACE ne rende les réponses trop longues ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Soyez précis dans vos étapes TRACE. Demandez : « Donne chaque étape en 1–2 phrases max. » Cela force le modèle à être concis tout en montrant son travail.' } },
          { '@type': 'Question', 'name': 'TRACE aide-t-il à détecter les erreurs du modèle ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. En rendant le raisonnement explicite, TRACE vous permet de repérer les fausses assomptions, les sauts logiques, ou les calculs incorrects que vous auriez ratés avec une réponse finale seule.' } },
          { '@type': 'Question', 'name': 'Y a-t-il une différence entre TRACE et Chain-of-Thought ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chain-of-Thought est une technique générale de montrer le travail. TRACE est une structure spécifique à 5 étapes : Penser, Raisonner, Analyser, Conclure, Expliquer. TRACE est plus guidée et reproductible.' } },
          { '@type': 'Question', 'name': 'Que signifie TRACE en ingénierie des prompts ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE signifie Think (Réfléchir), Reason (Raisonner), Analyze (Analyser), Conclude (Conclure), Explain (Expliquer). C\'est un schéma de prompt structuré qui demande au modèle de montrer chaque étape de son raisonnement plutôt que de donner directement une réponse finale.' } },
          { '@type': 'Question', 'name': 'Comment PromptQuorum prend-il en charge les prompts TRACE ?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum inclut TRACE comme structure de prompt intégrée. Remplissez vos informations de contexte dans des champs alignés sur les cinq étapes. PromptQuorum compose ensuite le prompt et l\'envoie à plusieurs modèles en parallèle pour que vous puissiez comparer leurs traces de raisonnement côte à côte.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Comment écrire un prompt TRACE',
        'description': 'Guide étape par étape pour structurer des prompts avec le Framework TRACE (Réfléchir, Raisonner, Analyser, Conclure, Expliquer).',
        'step': [
          { '@type': 'HowToStep', 'name': 'Think (Réfléchir)', 'text': 'Demandez au modèle de reformuler le problème dans ses propres termes et de lister les variables clés et hypothèses avant de tenter une réponse.' },
          { '@type': 'HowToStep', 'name': 'Reason (Raisonner)', 'text': 'Demandez au modèle de proposer 2–3 approches ou hypothèses possibles avec leurs compromis avant de s\'engager sur l\'une.' },
          { '@type': 'HowToStep', 'name': 'Analyze (Analyser)', 'text': 'Demandez au modèle d\'appliquer son approche choisie étape par étape aux données réelles que vous avez fournies, avec des chiffres ou exemples concrets.' },
          { '@type': 'HowToStep', 'name': 'Conclude (Conclure)', 'text': 'Demandez au modèle d\'énoncer la réponse finale ou la recommandation directement et clairement en une phrase.' },
          { '@type': 'HowToStep', 'name': 'Explain (Expliquer)', 'text': 'Demandez au modèle de justifier la conclusion en langage simple qu\'un non-spécialiste peut comprendre.' },
        ],
      },
    },
    ja: {
      theme: 'Frameworks',
      title: 'TRACEフレームワーク',
      seoTitle: 'TRACEフレームワーク完全ガイド：AIの推論プロセスを5段階で可視化する方法（2026年版）',
      intro: '**TRACEフレームワークは、AIモデルの推論プロセスを「ブラックボックス」から可視化された段階的な思考へと変えます。** 考える（Think）→推論する（Reason）→分析する（Analyze）→結論を出す（Conclude）→説明する（Explain）の5つのステップにより、論理の欠陥や誤った前提を早期に発見できます。PromptQuorumではTRACEフレームワークをネイティブに統合しており、すべてのユーザーが直接利用できます。',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '8分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'TRACEフレームワーク',
      metaDescription: 'TRACEフレームワーク（考える→推論→分析→結論→説明）でAIの推論プロセスを完全透明化。複雑な意思決定・戦略分析・デバッグへの実践的な活用方法と具体例。',
      toc: [
        { anchor: 'key-takeaways', label: '重要なポイント' },
        { anchor: 'what-is-trace', label: 'TRACEフレームワークとは' },
        { anchor: 'why-trace-matters', label: 'TRACEフレームワークが重要な理由' },
        { anchor: 'five-stages', label: 'TRACEの5つの段階とは？' },
        { anchor: 'bad-vs-good-example', label: '例：悪いTRACEプロンプトと良いTRACEプロンプト' },
        { anchor: 'when-to-use', label: 'TRACEフレームワークをいつ使うか' },
        { anchor: 'how-to-write', label: 'TRACEプロンプトの書き方' },
        { anchor: 'how-promptquorum-implements', label: 'PromptQuorumでのTRACEフレームワーク実装' },
        { anchor: 'combining-trace', label: 'TRACEを他のフレームワークと組み合わせる方法は？' },
        { anchor: 'how-to-start', label: 'TRACEフレームワークの使い方' },
        { anchor: 'common-mistakes', label: 'TRACEでよくあるミス' },
        { anchor: 'related-reading', label: '関連資料' },
        { anchor: 'faq', label: 'FAQ' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/trace-framework?lang=ja',
        'inLanguage': 'ja',
        headline: 'TRACEフレームワーク',
        description: 'TRACEフレームワーク（考える・推論する・分析する・結論を出す・説明する）の仕組み、活用場面、PromptQuorumでの実装方法。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACEフレームワーク', 'プロンプトフレームワーク', 'プロンプト・エンジニアリング', '推論', 'PromptQuorum', '大規模言語モデル'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'プロンプト・エンジニアリング' },
          { '@type': 'Thing', name: 'プロンプトフレームワーク' },
          { '@type': 'Thing', name: '大規模言語モデル' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: 'TRACEフレームワークの5段階（考える→推論→分析→結論→説明）を使ってAIの思考プロセスを明示的に引き出す方法',
        assesses: 'AIモデルの推論品質を評価できる能力、論理的な欠陥を特定する力、推論の妥当性に基づいて判断できる技術',
      },
      sections: {
        keyTakeaways: {
          title: '重要なポイント',
          isTldr: true,
          items: [
            'TRACEはThink・Reason・Analyze・Conclude・Explainの頭文字で、AIモデルに思考の各段階を明示させる5段階プロンプト構造です。',
            '推論の品質と説明責任が重要な場面でTRACEを使用してください。戦略的な意思決定、技術的アーキテクチャのレビュー、複雑なデバッグに適しています。',
            'このフレームワークは誤った前提や論理的な欠陥を可視化することで、モデル出力への盲目的な信頼を減らします。',
            'TRACEプロンプトは1つのメッセージにすることも、段階ごとに送ることもできます — 制御の精度に応じて選択できます。',
            'PromptQuorumはTRACEをネイティブ構造として統合しています。タスクのコンテキストを入力し、複数のモデルに並行送信して、推論トレースを比較できます。',
          ],
        },
        whatIsTRACE: {
          title: 'TRACEフレームワークとは',
          content: [
            '**TRACEフレームワークは、AIモデルに「どう考えたのか」を詳しく説明させるプロンプト構造です。** 最終的な答えだけでは分からない思考プロセスが可視化されるため、判断の信頼度が著しく向上します。',
            '5つのステップの構成：',
          ],
          items: [
            '考える（Think）：問題を読み直して、理解を深める',
            '推論する（Reason）：複数のアプローチを考える',
            '分析する（Analyze）：選んだアプローチを具体的に進める',
            '結論を出す（Conclude）：最終的な答えを明確に述べる',
            '説明する（Explain）：結論の理由を分かりやすく伝える',
          ],
        },
        whyTRACEMatters: {
          title: 'なぜTRACEが重要なのか',
          content: [
            '**TRACEは思考プロセスを透明にすることで、AIの出力に対する盲信を減らします。** 各ステップを見ることで、不正確な理解や論理的な穴を早期に発見できます。',
          ],
          items: [
            'ビジネス判断や技術判断をAI出力に基づいて下す場合',
            '複数のモデル間で推論の質を比較する必要がある場合',
            '判断理由を関係者に説明・報告する必要がある場合',
          ],
        },
        fiveStages: {
          title: 'TRACEの5つの段階とは？',
          content: [
            '**良いTRACEプロンプトは、各ステップで「何をすべきか」を明確に定義し、モデルが一貫した思考プロセスを辿るようにします。** 一度のメッセージで全ステップを実行させることも、段階ごとに分割することもできます。',
            '各段階の詳細：',
          ],
          items: [
            '考える：タスクを明確にし、重要な変数を列挙し、曖昧な点を洗い出す',
            '推論する：考えられる方法や仮説、トレードオフをスケッチする',
            '分析する：選んだ方法を実際のデータに段階的に適用する',
            '結論を出す：質問に対して直接的かつ明確な答えを与える',
            '説明する：結論の根拠を簡潔に、「なぜ」に重点を置いて説明する',
          ],
        },
        badVsGoodExample: {
          title: '実例：TRACEなし vs TRACEあり',
          content: [
            '**同じ質問に対して、TRACEなしとTRACEありのプロンプトを比較すると、その価値が明確になります。**',
            '**【通常のプロンプト】**',
            '"この2つの料金プランのどちらが良い？"',
            '**【TRACEプロンプト】**',
            '"SaaS価格戦略の専門家として、TRACEプロセスを適用してください。考える：問題を述べ直し、重要な要因をリストアップ（収益、解約率、顧客認識など）してください。推論する：2～3の比較方法を提案してください（分岐点分析、昇級経路、公正さなど）。分析する：選んだ方法をデータに適用し、具体的な数字や例を示してください。結論を出す：どのプランをお勧めしますか？ どのセグメント向けですか？説明する：非技術者向けに、3～5文で推奨理由を説明してください。データ：【ここに挿入】"',
            'TRACEプロンプトは「プランAが良い」と言うだけでなく、モデルがトレードオフをどう考えたかが分かります。',
          ],
        },
        whenToUseJapanese: {
          title: 'TRACEを使うべき場面と注意点',
          content: [
            '**TRACEは推論の質が重要な場面で活躍します。特に金融・医療・経営判断など、誤りのコストが高い領域では欠かせません。** 注意点としては、モデルが冗長になりやすい傾向があります。',
          ],
          items: [
            '戦略評価、アーキテクチャ判断、トレードオフ分析など複雑な判断',
            'コード変更レビュー、バグ調査、難しい技術問題のデバッグ',
            'データ分析、指標解釈、ユーザーフィードバック分析',
            '管理職や利害関係者に対する意思決定の根拠説明',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorumでのTRACE実装',
          content: [
            '**PromptQuorumはマルチモデルのAIディスパッチツールで、TRACEフレームワークをネイティブに統合しています。** 同じTRACEプロンプトを複数モデルに並行実行して、推論スタイルの違いを比較できます。',
          ],
          items: [
            '構造化されたフィールドでTRACEの各段階を入力',
            '同じプロンプトをGPT-5.5、Claude、Gemini等に並行送信して推論を比較',
            'TRACEテンプレートを保存して、同じ種類の判断に再利用',
          ],
        },
        recommendedApproaches: {
          title: 'おすすめの使い方とベストプラクティス',
          content: [
            '**TRACEを最大限活用するには、各段階を短くすること、複数人レビューを組み込むこと、具体的な評価基準を用意することが効果的です。**',
          ],
          items: [
            '各段階を1～2文に限定して、モデルが冗長になるのを防ぐ',
            '複数人が異なる段階をレビューして、多角的な視点を確保',
            '「精度7/10以上、論理的矛盾がないこと」など、評価基準を事前に明確化',
            'TRACEの出力を記録して、推論パターンや改善点を学習',
          ],
        },
        combiningTRACE: {
          title: 'TRACEを他のフレームワークと組み合わせる方法は？',
          content: [
            '**TRACEは他の生成型フレームワークと組み合わせることで、初期生成から最終判定まで一貫した品質を確保できます。**',
          ],
          items: [
            'Single StepやCO-STARで初期内容を生成 → TRACEで推論を検証',
            'TRACEで判断の根拠を明確化 → SPECSで最終フォーマット統一',
            'RISENで複数回改稿 → TRACEで最終的なロジック検証',
          ],
          columns: ['フレームワーク', '最適な用途', 'TRACEと組み合わせる場面'],
          rows: [
            { 'フレームワーク': 'CO-STAR', '最適な用途': 'コンテンツ生成、下書き', 'TRACEと組み合わせる場面': 'まず下書き、その後TRACEで選択肢を評価' },
            { 'フレームワーク': 'CRAFT', '最適な用途': '制約付きの構造化コンテンツ', 'TRACEと組み合わせる場面': 'コンテンツを生成してからTRACEで検証' },
            { 'フレームワーク': 'RISEN', '最適な用途': '反復的な改善', 'TRACEと組み合わせる場面': 'TRACEで分析、RISENで改善' },
            { 'フレームワーク': 'SPECS', '最適な用途': '厳密な出力スキーマ', 'TRACEと組み合わせる場面': 'TRACEで推論、SPECSで最終形式' },
            { 'フレームワーク': 'Few-Shot', '最適な用途': 'フォーマット一貫性', 'TRACEと組み合わせる場面': '複雑なタスク用にTRACE段階に例を追加' },
          ],
        },
        howToStart: {
          title: 'TRACEフレームワークの実践ガイド',
          numberedItems: [
            '**Think（考える）：** モデルに問題を自分の言葉で言い換えさせ、回答を試みる前に曖昧さを明確にさせます。例：「答える前に、私が何を求めているかを言い換えてください。主要な変数と、あなたが立てている仮定をリストアップしてください。」',
            '**Reason（推論する）：** モデルに、1つのアプローチに決める前に、2～3の可能なアプローチ、または仮説とそれらのトレードオフをスケッチさせます。例：「このプロブレムへのアプローチを2～3提案してください。それぞれについて、簡潔にメリットとデメリットを述べてください。」',
            '**Analyze（分析する）：** モデルに、あなたが提供した実データまたは文脈に対して、選んだアプローチを段階的に適用させます。可能な場合は数値または具体例を示させます。例：「あなたの優先アプローチを、私が与えた具体的な状況に適用してください。各ステップを示してください。」',
            '**Conclude（結論を出す）：** モデルに最終的な答え、または推奨事項を直接かつ明確に1文で述べさせます。例：「推奨事項をはっきり述べてください。関連があれば、それが適用される条件またはセグメントを指定してください。」',
            '**Explain（説明する）：** モデルに結論を、非技術的な関係者が理解できるような平易な言葉で正当化させます。例：「3～5文で理由を説明してください。専門用語を避けてください。技術的背景を持たないシニアマネージャーに説明するかのように書いてください。」',
          ],
        },

        commonMistakes: {
          title: 'TRACEでよくあるミス',
          mistakes: [
            {
              mistake: 'Think段階をスキップ',
              problem: '問題を言い直さずにReason段階に進むと、モデルは要件を誤解し、誤った方向へ進む可能性があります。',
              fix: 'モデルに常に問題と主要変数を言い直させてからReasonに進めてください。これにより誤解を早期に把握できます。',
            },
            {
              mistake: '各段階の長さを制限しない',
              problem: '制限のないTRACEプロンプトは、非常に長い回答を生成し、読むのが難しく、コストがかかります。',
              fix: '段階ごとに長さ制限を追加してください：「各段階を最大2文で」など、または「Analyzeは3ステップまで」。',
            },
            {
              mistake: '単純なタスクにTRACEを使う',
              problem: 'TRACEはレイテンシーと冗長性を増します。単なる事実検索や簡単な変換が必要な場合、TRACEはやり過ぎです。',
              fix: 'TRACEは判断、分析、複雑な推論に限定してください。単純なタスクにはゼロショットプロンプティングを使用してください。',
            },
            {
              mistake: '5つのステップを厳密に守る',
              problem: 'タスクによっては5つのステップすべてが不要なため、厳密な遵守は時間とトークンを無駄にします。',
              fix: 'TRACEをあなたのタスクに合わせて調整してください：Reasonをデータ分析でスキップしたり、簡潔さのためにAnalyzeとConcludeを組み合わせたりできます。',
            },
            {
              mistake: 'モデル間でTRACE結果を比較しない',
              problem: '異なるモデルは異なる方法で推論するため、1つのモデルのみをテストすると、あなたのタスクに最適なプロバイダーを見つけるチャンスを逃します。',
              fix: 'PromptQuorumまたは同様のディスパッチツールを使用して、複数のモデルに同時にTRACEプロンプトを送信し、推論トレースを比較してください。',
            },
          ],
        },

        relatedReading: {
          title: '関連資料',
          content: [
            'TRACEフレームワークはより広いレゾナンス技術に基づいています。理解を深めるための関連ガイドをいくつか紹介します：',
          ],
          items: [
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — モデルにステップバイステップで推論させる基本的な技術。',
            '[RISENフレームワーク](/prompt-engineering/risen-framework) — 推論と一緒に反復的な改善が必要な場合に使用します。',
            '[CO-STARフレームワーク](/prompt-engineering/co-star-framework) — 文章作成と生成タスク用の補完的なフレームワーク。',
            '[ゼロショット vs ファインショットプロンプティング](/prompt-engineering/zero-shot-vs-few-shot-prompting) — TRACEが過剰で、より簡単な技術で十分な場合を理解してください。',
            '[プロンプト・エンジニアリング基礎](/prompt-engineering/prompt-engineering-fundamentals) — プロンプトを効果的に構造化するための基本的なガイド。',
          ],
        },

        faq: {
          title: 'FAQ',
          faqs: [
            {
              q: 'プロンプト・エンジニアリングでTRACEは何を意味しますか？',
              a: 'TRACEはThink（考える）、Reason（推論する）、Analyze（分析する）、Conclude（結論を出す）、Explain（説明する）を意味します。AIモデルに最終答だけでなく、推論の各段階を示させるような構造化されたプロンプトパターンです。',
            },
            {
              q: 'TRACEフレームワークをいつ使うべきですか？',
              a: '推論の品質と正当化が速度より重要な場合にTRACEを使用してください：戦略的判断、技術的レビュー、複雑なデバッグ、および関係者にどのように結論に到達したかを示す必要があるような状況。',
            },
            {
              q: 'TRACEはChain-of-Thoughtプロンプティングとどう違いますか？',
              a: 'Chain-of-Thoughtはモデルにステップバイステップで考えさせる一般的な技術です。TRACEは特定の5段階構造（Think、Reason、Analyze、Conclude、Explain）であり、タスクとモデルを超えて一貫した再現可能な推論トレースを生成します。',
            },
            {
              q: 'TRACEはRISENフレームワークとどう違いますか？',
              a: 'TRACEは推論プロセスを明示的にして、監査可能にします。RISENは既存のドラフトを段階的に改善します。論理を理解したい→TRACE、出力品質を高めたい→RISEN。',
            },
            {
              q: '1つのプロンプトでTRACEを使うか、複数ターンで使うか？',
              a: '両方が機能します。5つのステップをすべてリストする単一のプロンプトが速く、複数ターンでは各ステップで一時停止して方向を変更することができます。最大の制御のため、多くのユーザーは各TRACEステップを別々に送信します。',
            },
            {
              q: 'TRACEが長すぎる回答を生成するのを防ぐにはどうすればよいですか？',
              a: '段階ごとに長さ制限を追加してください。例えば：「各段階を最大2文で」このようにするとモデルに簡潔性を強制し、同時に仕事を見せさせることができます。',
            },
            {
              q: 'TRACEはモデルエラーを検出するのに役立ちますか？',
              a: 'はい。推論を見える化することで、TRACEは最終答だけでは見えない誤った仮定、論理的ギャップ、計算エラーを検出できます。',
            },
            {
              q: 'PromptQuorumはTRACEプロンプトをどのようにサポートしていますか？',
              a: 'PromptQuorumはTRACEを組み込みプロンプト構造として含んでいます。5つのステップに合わせた構造化フィールドにタスク固有のコンテキストを入力します。PromptQuorumはその後、プロンプトを複数のモデルに並行して送信して、推論トレースを並べて比較できるようにします。',
            },
          ],
        },

        sources: {
          title: '参考資料',
          content: [
            'この記事はプロンプト・エンジニアリングとAI推論における現在のベストプラクティスをまとめています。TRACEフレームワークパターンは、言語モデルの推論を透明にするための学術研究と業界実践で使用されています。',
          ],
          items: [
            'Wei, J., et al. (2022). 「Chain-of-Thought Prompting Elicits Reasoning in Large Language Models」 *arXiv:2201.11903*. [arXivで読む](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). 「How to use the OpenAI API」 [OpenAI APIドキュメント](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). 「Prompt Engineering Techniques」 [Anthropic Docs](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. オープンソースLLMデプロイメント・推論ツール。',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'TRACEとRISENはどう違う？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACEは思考プロセスを見える化します。RISENは既存の出力を段階的に改善します。論理を理解したい → TRACE、品質を高めたい → RISEN。' } },
          { '@type': 'Question', 'name': 'TRACEで回答が長くなりすぎないようにするには？', 'acceptedAnswer': { '@type': 'Answer', 'text': '各段階を1～2文に制限してください。例：「各ステップを最大2文で答えてください」と指示することで、簡潔さと透明性のバランスが取れます。' } },
          { '@type': 'Question', 'name': 'すべての質問にTRACEを使うべき？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'いいえ。推論と正当化が重要な複雑な判断に向いています。単純な質問や短い回答が必要な場合、TRACEはオーバーヘッドになります。' } },
          { '@type': 'Question', 'name': 'TRACEはモデル間で推論品質の差を見つけるのに役立つ？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。GPT-5.5、Claude、Geminiなど同じTRACEプロンプトを複数モデルに送れば、推論スタイルと精度の違いが明確に見えます。' } },
          { '@type': 'Question', 'name': 'TRACEはエラーを検出するのに本当に効果的？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。思考プロセスが見える化されるため、誤った前提や論理的な飛躍を早期に発見できます。最終答だけでは気づかない誤りが露呈します。' } },
          { '@type': 'Question', 'name': '日本の企業で財務判断やコンプライアンス判定にTRACEを使う際の注意点は？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'クラウドAPIで機密データを扱う場合は、データ保護方針を確認してください。機密情報はOllama・LM Studioなど自社環境のモデルを使用し、PromptQuorum経由で実行することをお勧めします。' } },
          { '@type': 'Question', 'name': 'プロンプト・エンジニアリングでTRACEは何を意味しますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACEはThink（考える）、Reason（推論する）、Analyze（分析する）、Conclude（結論を出す）、Explain（説明する）の頭文字です。最終的な答えだけでなく、AIモデルに推論の各段階を示させる構造化されたプロンプトパターンです。' } },
          { '@type': 'Question', 'name': 'TRACEとChain-of-Thoughtの違いは何ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chain-of-Thoughtは、モデルにステップバイステップで考えさせる一般的な技術です。TRACEは特定の5段階構造（Think・Reason・Analyze・Conclude・Explain）で、タスクやモデルを超えて一貫した再現可能な推論トレースを生成します。' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'TRACEプロンプトの書き方',
        'description': 'TRACEフレームワーク（考える・推論する・分析する・結論を出す・説明する）を使ってプロンプトを構造化するためのステップバイステップガイド。',
        'step': [
          { '@type': 'HowToStep', 'name': 'Think（考える）', 'text': 'モデルに問題を自分の言葉で言い換えさせ、回答を試みる前に主要な変数と前提を列挙させます。' },
          { '@type': 'HowToStep', 'name': 'Reason（推論する）', 'text': 'モデルに、1つのアプローチに決める前に、2～3の可能なアプローチまたは仮説とそれらのトレードオフをスケッチさせます。' },
          { '@type': 'HowToStep', 'name': 'Analyze（分析する）', 'text': 'モデルに、提供された実データに対して選んだアプローチを段階的に適用させます。数値や具体的な例を示させます。' },
          { '@type': 'HowToStep', 'name': 'Conclude（結論を出す）', 'text': 'モデルに最終的な答えまたは推奨事項を1文で直接かつ明確に述べさせます。' },
          { '@type': 'HowToStep', 'name': 'Explain（説明する）', 'text': 'モデルに結論を、非技術的な関係者が理解できるような平易な言葉で正当化させます。' },
        ],
      },
    },
    zh: {
      theme: 'Frameworks',
      title: 'TRACE框架',
      seoTitle: 'TRACE框架完整指南：用5步让AI推理过程全程透明（2026年实战版）',
      intro: '**TRACE框架将AI模型的推理过程从"黑盒"变成可见的逐步思考。** 通过思考（Think）→推理（Reason）→分析（Analyze）→结论（Conclude）→解释（Explain）5个步骤，你可以在错误影响决策之前发现模型的逻辑漏洞和错误假设。PromptQuorum原生集成了TRACE框架，所有用户都可以直接使用。',
      publishDate: '2026-03-24',
      readTime: '8分钟阅读',
      educationalLevel: 'Intermediate',
      primaryTerm: 'TRACE框架',
      metaDescription: 'TRACE框架（思考→推理→分析→结论→解释）让AI推理全程透明化。复杂决策、战略分析、技术审查的实战方法与对比示例，提升可信度和可解释性。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/trace-framework?lang=zh',
        'inLanguage': 'zh',
        headline: 'TRACE框架',
        description: 'TRACE框架（思考、推理、分析、结论、解释）的工作原理、适用场景、以及PromptQuorum中的实现方式。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACE框架', '提示词框架', '提示词工程', '推理', 'PromptQuorum', '大语言模型'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '提示词工程' },
          { '@type': 'Thing', name: '提示词框架' },
          { '@type': 'Thing', name: '大语言模型' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
        teaches: '如何使用TRACE框架的5个步骤（思考→推理→分析→结论→解释）让AI模型的推理过程完全透明',
        assesses: '能否评估AI推理的质量、识别逻辑漏洞、基于可解释的推理做出关键决策的能力',
      },
      sections: {
        keyTakeaways: {
          title: '核心要点',
          isTldr: true,
          items: [
            'TRACE代表思考（Think）、推理（Reason）、分析（Analyze）、结论（Conclude）、解释（Explain）——一个迫使AI模型展示每步推理的5阶段提示框架。',
            '当推理质量比速度更重要时使用TRACE：战略决策、技术架构权衡、复杂调试，以及需要向利益相关者展示决策过程的场景。',
            'TRACE通过让假设错误和逻辑漏洞变得可见，减少对AI输出的盲目信任。',
            'TRACE提示词可以是一条包含全部5步的完整消息，也可以逐步发送——根据所需控制精度选择。',
            'PromptQuorum原生集成TRACE：填入任务背景，并行发送给多个模型，对比推理轨迹。',
          ],
        },
        whatIsTRACE: {
          title: 'TRACE框架是什么',
          content: [
            '**TRACE框架强制AI模型展示它的思考过程，而不是只给出最终答案。** 这在你需要理解模型是如何得出结论的场景中特别有用。',
            'TRACE的5个步骤是：',
          ],
          items: [
            '思考（Think）：重新阐述问题，理清关键信息',
            '推理（Reason）：探索多种可能的方法',
            '分析（Analyze）：将选定的方法应用到具体数据',
            '结论（Conclude）：给出明确清晰的最终答案',
            '解释（Explain）：用易懂的语言说明为什么是这个答案',
          ],
        },
        whyTRACEMatters: {
          title: '为什么TRACE很重要',
          content: [
            '**TRACE通过让推理过程透明，减少对AI输出的盲目信任。** 看得到每一步，你就能发现假设有误、逻辑跳跃或隐藏的错误。',
          ],
          items: [
            '你需要基于AI输出做出重要的商业或技术决策',
            '你需要比较不同模型的推理方式',
            '你需要向利益相关者证明和解释这个决策',
          ],
        },
        fiveStages: {
          title: 'TRACE的5个步骤详解',
          content: [
            '**好的TRACE提示词会明确定义每个步骤，确保模型的推理过程一致且可复现。** 你可以在一个长提示词中包含所有步骤，也可以分步发送。',
          ],
          items: [
            '思考：明确任务、列出关键变量、指出有歧义的地方',
            '推理：概述可能的方法、权衡关系、解决方案路径',
            '分析：逐步将选定方法应用到实际数据',
            '结论：直接回答问题、提出建议',
            '解释：用简洁清晰的语言解释「为什么」',
          ],
        },
        badVsGoodExample: {
          title: '对比：普通提示词 vs TRACE提示词',
          content: [
            '**把通用提示词和TRACE结构提示词应用在同一任务上，差别一目了然。**',
            '**【普通提示词】**',
            '"这两个定价方案哪个更好？"',
            '**【TRACE提示词】**',
            '"你是SaaS定价策略专家。使用TRACE过程来分析。思考：重新阐述问题，列出关键要素（收入、流失率、客户感知等）。推理：提出2～3种比较方案的方法（盈亏平衡分析、升级路径、感知公平性等）。分析：将选定的方法逐步应用到我提供的数据。展示具体数字和例子。结论：明确推荐哪个方案，适用于哪些客户群体。解释：用3～5句话，用非技术人员能理解的语言解释你的推荐。数据：【在此插入】"',
            'TRACE不只是说「方案A更好」；它展示了模型对权衡的完整思考。',
          ],
        },
        whenToUse: {
          title: '何时使用TRACE框架',
          content: [
            '**当推理质量比速度更重要时，就该用TRACE。** 特别是在商业判断、技术决策、风险评估等误差代价高的场景，TRACE是必备工具。',
          ],
          items: [
            '评估战略选项、技术架构、权衡取舍',
            '审查复杂代码变更、调试棘手问题',
            '分析研究发现、数据指标、用户反馈',
            '制定可向管理层和客户解释的建议',
          ],
        },
        practicalTips: {
          title: '实用建议：如何高效使用TRACE',
          content: [
            '**要让TRACE发挥最大效力，你需要控制每步长度、加入多人审查、设置明确的评估标准。** 这几个实践方法特别有效：',
          ],
          items: [
            '限制每个步骤为1～2句话：防止模型输出变得冗长，同时保持推理的透明度',
            '分阶段由不同的人审查：思考阶段由初级分析师，推理阶段由资深顾问，结论由决策者确认，能大幅提升客观性',
            '提前定义「好答案」的标准：精确性8/10、逻辑严密无矛盾、行动可执行等，避免主观评判',
            '记录TRACE输出历史：积累不同问题的推理模式，找出改进方向，建立内部知识库',
            '和其他框架组合：先用CO-STAR初稿，再用TRACE验证逻辑，最后用SPECS定型格式',
            '多模型对比：同一个TRACE任务发送给通义千问、文心一言、混元，看谁推理最严密、最可靠',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorum中的TRACE实现',
          content: [
            '**PromptQuorum是一个多模型分发平台，原生集成了TRACE框架。** 你可以结构化地输入TRACE的5个步骤，然后并行发送给多个模型，对比它们的推理方式和结论质量。',
          ],
          items: [
            '用结构化字段输入TRACE的每个步骤，确保一致性',
            '同时发送给GPT-5.5、Claude、Gemini等模型，看谁推理最可靠',
            '保存TRACE模板，对同类问题快速复用',
          ],
        },
        combineTRACEWithOthers: {
          title: '和其他框架的搭配',
          content: [
            '**TRACE最好和其他框架组合，形成「生成→验证→定型」的完整工作流。**',
          ],
          items: [
            '初稿生成：用Single Step或CO-STAR快速生成初版',
            '逻辑验证：用TRACE深入审视推理是否严密、假设是否合理',
            '最终定型：如果输出需要特定格式（JSON、表格等），用SPECS来标准化',
          ],
        },
        howToStart: {
          title: '如何开始使用TRACE框架',
          numberedItems: [
            '**Think（思考）：** 让模型用自己的语言重述问题，并在尝试回答前指出任何歧义。例：「在回答前，请重述我在问什么。列出关键变量和你正在做的任何假设。」',
            '**Reason（推理）：** 让模型在提交一个方法前列出2～3个可能的方法或假设及其折衷。例：「提出2～3种解决这个问题的方法。对每种方法简要说明优缺点。」',
            '**Analyze（分析）：** 让模型将其选定的方法逐步应用到你提供的实际数据或背景中。尽可能显示数字或具体例子。例：「将你偏好的方法应用到我给出的具体情况中。显示每一步。」',
            '**Conclude（结论）：** 让模型直接明确地陈述最终答案或建议，最好在一句话中完成。例：「清楚地陈述你的建议。如相关，指定它适用的条件或细分市场。」',
            '**Explain（解释）：** 让模型用非技术受众能理解的平易近人的语言为结论正当化。例：「用3～5句话解释为什么。避免行话。用向一位没有技术背景的高管解释一样的方式来写。」',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'TRACE和RISEN框架有什么区别？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE让模型展示思考过程。RISEN是逐步改进现有输出。需要理解推理→TRACE，需要提高质量→RISEN。' } },
          { '@type': 'Question', 'name': '如何防止TRACE让答案变得太长？', 'acceptedAnswer': { '@type': 'Answer', 'text': '每个步骤限制在1～2句话。例如加上「每步最多2句话」的指示，能在保留推理透明度的同时保持简洁。' } },
          { '@type': 'Question', 'name': '能用TRACE来检测AI的错误吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '能，而且非常有效。看到思考过程后，你能发现错误的前提、逻辑跳跃或计算错误——这些在只看最终答案时是看不到的。' } },
          { '@type': 'Question', 'name': 'TRACE适合所有类型的问题吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '不是。TRACE适合推理和论证很重要的复杂问题：决策、分析、战略。简单问题用TRACE会增加不必要的开销。' } },
          { '@type': 'Question', 'name': '在国内用TRACE框架评估金融或风险决策有什么注意事项？', 'acceptedAnswer': { '@type': 'Answer', 'text': '如果涉及敏感的财务或客户数据，避免用云API（OpenAI、Google等会在境外处理数据）。改用本地模型（Ollama、LM Studio）或符合《数据安全法》的国内方案。' } },
          { '@type': 'Question', 'name': 'TRACE能帮助比较不同AI模型吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '能。同一个TRACE任务发给通义千问、文心一言、混元，能清楚看到它们推理风格的差异、严密程度、可靠性的区别。' } },
          { '@type': 'Question', 'name': '企业多人协作时，TRACE怎样分工最有效？', 'acceptedAnswer': { '@type': 'Answer', 'text': '思考阶段→初级分析师，推理阶段→资深专家，分析→技术人员，结论→决策者。分工不但提高效率，还能从多角度增进洞察。' } },
          { '@type': 'Question', 'name': 'TRACE和Chain-of-Thought有什么不同？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chain-of-Thought是泛指「逐步展示推理」的技术。TRACE是一个结构化的5步框架，更可控、更适合复现。如果你需要标准化和可重复性，TRACE更好。' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '如何编写TRACE提示词',
        'description': '使用TRACE框架（思考、推理、分析、结论、解释）构建提示词的逐步指南，让AI推理过程透明可审计。',
        'step': [
          { '@type': 'HowToStep', 'name': 'Think（思考）', 'text': '让模型用自己的语言重述问题，并在尝试回答前列出关键变量和假设。' },
          { '@type': 'HowToStep', 'name': 'Reason（推理）', 'text': '让模型在确定方法前列出2～3个可能的方法或假设及其权衡。' },
          { '@type': 'HowToStep', 'name': 'Analyze（分析）', 'text': '让模型将选定的方法逐步应用到你提供的实际数据或背景中，展示数字或具体例子。' },
          { '@type': 'HowToStep', 'name': 'Conclude（结论）', 'text': '让模型用一句话直接明确地陈述最终答案或建议。' },
          { '@type': 'HowToStep', 'name': 'Explain（解释）', 'text': '让模型用非技术受众能理解的平易近人语言为结论正当化。' },
        ],
      },
    },
  };
