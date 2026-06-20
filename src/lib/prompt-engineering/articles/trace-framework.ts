// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: trace-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
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
        headline: 'The TRACE Framework',
        description: 'How the TRACE Framework (Think, Reason, Analyze, Conclude, Explain) works, when to use it, and how PromptQuorum offers TRACE as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACE Framework', 'Think Reason Analyze Conclude Explain', 'prompt frameworks', 'prompt engineering', 'reasoning prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
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
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: 'The slide deck below covers: how TRACE (Think, Reason, Analyze, Conclude, Explain) forces AI to show its reasoning step by step, the 5-stage method with bad-vs-good prompt examples, when to pair TRACE with CO-STAR, CRAFT, RISEN, and SPECS, plus 5 common mistakes to avoid. Download the PDF as a TRACE Framework reference card.',
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
            'TRACE works on all major models — GPT-5 (OpenAI), Claude 4.8 Opus (Anthropic), Gemini 3 Pro (Google DeepMind), and local models via Ollama or LM Studio — but models follow the five stages with different levels of discipline. Testing the same TRACE prompt across multiple models reveals which provider reasons most transparently for your specific task.',
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
            'Once saved as a template, you only need to change the role and context for each new task. Test TRACE prompts before integrating them into your workflow in [Anthropic\'s Console](https://docs.anthropic.com/) or [OpenAI\'s Playground](https://platform.openai.com/playground) to verify the model produces clear, auditable reasoning traces.',
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
          id: 'faq',
          title: 'Frequently Asked Questions',
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
        'url': 'https://www.promptquorum.com/de/prompt-engineering/trace-framework',
        headline: 'Das TRACE Framework',
        description: 'Wie das TRACE Framework (Think, Reason, Analyze, Conclude, Explain) funktioniert, wann es sinnvoll ist, und wie PromptQuorum es nativ anbietet.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACE Framework', 'Think Reason Analyze Conclude Explain', 'Prompt Frameworks', 'Prompt Engineering', 'Reasoning Prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
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
          id: 'faq',
          title: 'Häufig gestellte Fragen',
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
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: 'Die folgende Präsentation erklärt: wie das TRACE Framework KI-Reasoning sichtbar macht (Think→Reason→Analyze→Conclude→Explain), die 5-stufige Methode mit schlechtem und gutem Prompt-Vergleich, wann TRACE mit CO-STAR, CRAFT, RISEN und SPECS kombiniert wird, sowie 5 häufige Fehler. PDF als TRACE-Framework-Referenzkarte herunterladen.',
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'El Framework TRACE',
      seoTitle: 'Framework TRACE: prompts que muestran el razonamiento IA',
      intro: '**El Framework TRACE convierte el razonamiento de la IA de una caja negra en un proceso visible paso a paso.** Pide a los modelos Pensar, Razonar, Analizar, Concluir y Explicar — para que puedas ver dónde la lógica se sostiene y dónde se rompe. PromptQuorum incluye el Framework TRACE como opción integrada que cualquier usuario puede seleccionar y usar directamente dentro de la app.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '8 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Framework TRACE',
      metaDescription: 'El framework TRACE (Pensar, Razonar, Analizar, Concluir, Explicar) obliga a la IA a mostrar su trabajo. Cuándo usarlo y cómo escribir prompts TRACE.',
      toc: [
        { anchor: 'key-takeaways', label: 'Puntos clave' },
        { anchor: 'what-is-trace', label: 'Qué es el Framework TRACE' },
        { anchor: 'why-trace-matters', label: 'Por qué importa el Framework TRACE' },
        { anchor: 'five-stages', label: '¿Cuáles son las cinco etapas TRACE?' },
        { anchor: 'bad-vs-good-example', label: 'Ejemplo: Prompt TRACE malo vs bueno' },
        { anchor: 'when-to-use', label: 'Cuándo usar el Framework TRACE' },
        { anchor: 'how-to-write', label: 'Cómo escribir un prompt TRACE' },
        { anchor: 'how-promptquorum-implements', label: 'Cómo PromptQuorum implementa el Framework TRACE' },
        { anchor: 'combining-trace', label: '¿Cómo combinar TRACE con otros frameworks?' },
        { anchor: 'how-to-start', label: 'Cómo usar el Framework TRACE' },
        { anchor: 'common-mistakes', label: 'Errores comunes con TRACE' },
        { anchor: 'related-reading', label: 'Lecturas relacionadas' },
        { anchor: 'faq', label: 'Preguntas frecuentes' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/es/prompt-engineering/trace-framework',
        inLanguage: 'es',
        headline: 'El Framework TRACE',
        description: 'Cómo funciona el Framework TRACE (Pensar, Razonar, Analizar, Concluir, Explicar), cuándo usarlo y cómo PromptQuorum ofrece TRACE como opción integrada.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['Framework TRACE', 'Pensar Razonar Analizar Concluir Explicar', 'frameworks de prompt', 'prompt engineering', 'prompts de razonamiento', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Modelos de Lenguaje de Gran Escala' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '¿Qué significa TRACE en prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'TRACE significa Pensar (Think), Razonar (Reason), Analizar (Analyze), Concluir (Conclude), Explicar (Explain). Es un patrón de prompt estructurado que instruye a un modelo de IA a mostrar cada etapa de su razonamiento en lugar de saltar directamente a una respuesta final.' } },
          { '@type': 'Question', name: '¿Cuándo debo usar el Framework TRACE?', acceptedAnswer: { '@type': 'Answer', text: 'Usa TRACE cuando la calidad del razonamiento y la justificación importen más que la brevedad: decisiones estratégicas, revisiones de arquitectura técnica, depuración compleja y situaciones donde necesitas mostrar a las partes interesadas cómo se llegó a una conclusión.' } },
          { '@type': 'Question', name: '¿En qué se diferencia TRACE del prompting Chain-of-Thought?', acceptedAnswer: { '@type': 'Answer', text: 'Chain-of-Thought es una técnica general que pide a los modelos razonar paso a paso. TRACE es una estructura específica de 5 etapas (Pensar, Razonar, Analizar, Concluir, Explicar) que produce rastros de razonamiento consistentes y reproducibles entre tareas y modelos.' } },
          { '@type': 'Question', name: '¿En qué se diferencia TRACE del Framework RISEN?', acceptedAnswer: { '@type': 'Answer', text: 'TRACE se enfoca en hacer el proceso de razonamiento explícito para que puedas auditarlo. RISEN se enfoca en mejorar iterativamente un borrador existente. Usa TRACE para entender cómo piensa un modelo; usa RISEN para pulir la calidad del output.' } },
          { '@type': 'Question', name: '¿Puedo usar TRACE en un solo prompt o necesito múltiples turnos?', acceptedAnswer: { '@type': 'Answer', text: 'Ambas formas funcionan. Un solo prompt que lista las cinco etapas es más rápido. Los múltiples turnos te permiten pausar y redirigir en cada etapa si es necesario. Para el máximo control, muchos usuarios envían los pasos TRACE por separado.' } },
          { '@type': 'Question', name: '¿Cómo evito que TRACE produzca respuestas demasiado largas?', acceptedAnswer: { '@type': 'Answer', text: 'Añade restricciones de longitud por etapa. Por ejemplo: "Mantén cada etapa en 1-2 oraciones." Esto obliga al modelo a ser conciso mientras sigue mostrando su trabajo.' } },
          { '@type': 'Question', name: '¿Puede TRACE ayudar a detectar errores del modelo?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Al hacer el razonamiento visible, TRACE te permite detectar suposiciones falsas, brechas lógicas y cálculos incorrectos que serían invisibles en una respuesta solo con la respuesta final.' } },
          { '@type': 'Question', name: '¿Cómo apoya PromptQuorum los prompts TRACE?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum incluye TRACE como estructura de prompt integrada. Completas el contexto específico de la tarea en campos estructurados alineados con las cinco etapas. PromptQuorum luego envía el prompt compuesto a múltiples modelos en paralelo para que puedas comparar sus rastros de razonamiento lado a lado.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo escribir un prompt TRACE',
        description: 'Guía paso a paso para estructurar prompts usando el Framework TRACE (Pensar, Razonar, Analizar, Concluir, Explicar) para hacer el razonamiento de la IA transparente y auditable.',
        step: [
          { '@type': 'HowToStep', name: 'Pensar (Think)', text: 'Pide al modelo que reformule el problema en sus propias palabras y liste las variables clave y suposiciones antes de intentar una respuesta.' },
          { '@type': 'HowToStep', name: 'Razonar (Reason)', text: 'Pide al modelo que proponga 2-3 posibles enfoques o hipótesis con compromisos antes de comprometerse con uno.' },
          { '@type': 'HowToStep', name: 'Analizar (Analyze)', text: 'Pide al modelo que aplique su enfoque elegido paso a paso a los datos reales o al contexto que proporcionaste, mostrando números o ejemplos concretos.' },
          { '@type': 'HowToStep', name: 'Concluir (Conclude)', text: 'Pide al modelo que declare la respuesta final o recomendación directa y claramente en una oración.' },
          { '@type': 'HowToStep', name: 'Explicar (Explain)', text: 'Pide al modelo que justifique la conclusión en lenguaje simple que un actor no técnico pueda seguir.' },
        ],
      },
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: 'La presentación a continuación cubre: cómo TRACE (Pensar, Razonar, Analizar, Concluir, Explicar) obliga a la IA a mostrar su razonamiento paso a paso, el método de 5 etapas con ejemplos de prompts malos vs buenos, cuándo combinar TRACE con CO-STAR, CRAFT, RISEN y SPECS, más 5 errores comunes a evitar. Descarga el PDF como tarjeta de referencia del Framework TRACE.',
      sections: {
        keyTakeaways: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'TRACE significa Pensar, Razonar, Analizar, Concluir, Explicar — un patrón de prompt de 5 etapas que obliga a los modelos de IA a mostrar cada paso de su razonamiento.',
            'Usa TRACE cuando la calidad del razonamiento importa más que la brevedad: decisiones estratégicas, compromisos de arquitectura, depuración compleja o cualquier output que necesites justificar ante las partes interesadas.',
            'TRACE reduce la confianza ciega en los outputs del modelo al hacer visibles las suposiciones falsas y las brechas lógicas antes de que afecten las decisiones.',
            'Un prompt TRACE puede ser un único mensaje con todas las cinco etapas definidas, o enviado turno a turno para mayor control.',
            'PromptQuorum incluye TRACE como estructura integrada: completa tu contexto, envía a múltiples modelos en paralelo y compara rastros de razonamiento lado a lado.',
          ],
        },
        whatIsTRACE: {
          title: 'Qué es el Framework TRACE',
          content: [
            '**El Framework TRACE es un patrón de prompt centrado en el razonamiento que obliga a los modelos de lenguaje de gran escala a mostrar su trabajo, no solo su respuesta final.** Está diseñado para tareas donde te importa cómo llegó el modelo a un resultado, como análisis técnico, estrategia o resolución de problemas complejos.',
            'Una interpretación común de TRACE es:',
            'TRACE funciona en todos los modelos principales — GPT-5 (OpenAI), Claude 4.8 Opus (Anthropic), Gemini 3 Pro (Google DeepMind) y modelos locales via Ollama o LM Studio — pero los modelos siguen las cinco etapas con diferentes niveles de disciplina. Probar el mismo prompt TRACE en múltiples modelos revela qué proveedor razona más transparentemente para tu tarea específica.',
          ],
          items: [
            'Pensar: Reformular e interpretar el problema con tus propias palabras.',
            'Razonar: Explorar posibles enfoques o hipótesis.',
            'Analizar: Aplicar esos enfoques a los datos concretos o situación.',
            'Concluir: Declarar la respuesta o recomendación final claramente.',
            'Explicar: Justificar la conclusión de una manera que los humanos puedan seguir rápidamente.',
          ],
        },
        whyTRACEMatters: {
          title: 'Por qué importa el Framework TRACE',
          content: [
            '**El Framework TRACE importa porque reduce la confianza ciega en los outputs del modelo al hacer explícita la ruta de razonamiento.** Cuando el modelo explica cada etapa, puedes detectar requisitos mal interpretados, suposiciones débiles o brechas en la lógica temprano.',
            'Esto es especialmente útil cuando:',
          ],
          items: [
            'Tomas decisiones empresariales o técnicas basadas en outputs del modelo.',
            'Necesitas comparar cómo diferentes modelos razonan sobre el mismo problema.',
            'Quieres un registro que puedas mostrar a compañeros de equipo o partes interesadas para justificar una elección.',
          ],
        },
        fiveStages: {
          title: '¿Cuáles son las cinco etapas TRACE?',
          content: [
            '**Un buen prompt TRACE le dice al modelo exactamente qué hacer en cada etapa para que el rastro de razonamiento sea consistente entre tareas y modelos.** Puedes comprimir esto en un mensaje mientras mantienes los pasos claros.',
            'Definiciones típicas de las etapas:',
          ],
          items: [
            'Pensar: Aclarar la tarea, listar variables clave y detectar ambigüedades.',
            'Razonar: Esbozar métodos potenciales, compromisos o rutas de solución.',
            'Analizar: Aplicar el método elegido paso a paso a las entradas reales.',
            'Concluir: Proporcionar una respuesta directa o recomendación vinculada a la pregunta.',
            'Explicar: Resumir la lógica en lenguaje simple, enfocándose en el "por qué" detrás de la respuesta.',
          ],
        },
        badVsGoodExample: {
          title: 'Ejemplo: Prompt TRACE malo vs bueno',
          content: [
            '**El beneficio del Framework TRACE se vuelve claro cuando comparas una solicitud genérica con una basada en TRACE para la misma tarea.** Aquí hay un ejemplo simple para elegir entre dos opciones de precios de producto.',
            '**[Prompt Malo]**',
            '"¿Cuál de estos dos planes de precios es mejor?"',
            '**[Buen Prompt TRACE]**',
            '"Eres un analista de precios SaaS. Usa el proceso TRACE para esta decisión. Pensar: Reformula el problema y lista los factores clave que importan (por ejemplo ingresos, riesgo de abandono, percepción del cliente). Razonar: Propón 2-3 posibles formas de comparar los dos planes de precios (por ejemplo análisis de punto de equilibrio, ruta de actualización, equidad percibida). Analizar: Aplica tu método de comparación preferido paso a paso a los datos que proporciono. Muestra números o ejemplos concretos donde sea posible. Concluir: Indica claramente qué plan de precios recomiendas y para qué segmentos de clientes, si es relevante. Explicar: En 3-5 oraciones, justifica tu recomendación en lenguaje simple que un actor no técnico pueda entender. Datos: [insertar detalles del plan aquí]"',
            'La versión TRACE no solo te dice "el Plan A es mejor"; muestra cómo el modelo pensó sobre los compromisos.',
          ],
        },
        whenToUse: {
          title: 'Cuándo usar el Framework TRACE',
          content: [
            '**Debes usar el Framework TRACE cuando tu principal preocupación es la calidad del razonamiento y la justificación en lugar de la máxima brevedad.** TRACE añade sobrecarga en comparación con una respuesta de una línea, pero vale la pena cuando los errores son costosos.',
            'Los casos de uso típicos incluyen:',
          ],
          items: [
            'Evaluar opciones estratégicas, compromisos o arquitecturas técnicas.',
            'Revisar cambios de código complejos o depurar problemas difíciles.',
            'Analizar hallazgos de investigación, métricas o feedback de usuarios para sacar conclusiones.',
            'Crear recomendaciones explicables que puedas compartir con gerentes o clientes.',
          ],
        },
        howToWrite: {
          title: 'Cómo escribir un prompt TRACE',
          content: [
            '**Escribir un prompt TRACE es sencillo si haces referencia explícita a las cinco etapas y defines expectativas para cada una.** Puedes empezar con una plantilla simple y adaptarla a tu dominio.',
            'Un patrón genérico se ve así:',
            '"Eres [rol]. Usa el proceso TRACE. Pensar: [cómo reformular y aclarar el problema]. Razonar: [cómo explorar rutas de solución]. Analizar: [cómo aplicar el razonamiento a los datos o contexto específicos]. Concluir: [cómo presentar la respuesta final]. Explicar: [cómo justificar la respuesta para un lector humano]. Contexto/Datos: [insertar aquí]."',
            'Una vez guardada como plantilla, solo necesitas cambiar el rol y el contexto para cada nueva tarea.',
          ],
        },
        howPQImplements: {
          title: 'Cómo PromptQuorum implementa el Framework TRACE',
          content: [
            '**PromptQuorum es una herramienta de despacho de IA multi-modelo que incluye el Framework TRACE como una de sus estructuras de prompt integradas para que los usuarios puedan ejecutar prompts centrados en el razonamiento en varios modelos con un clic.** Cuando eliges TRACE dentro de PromptQuorum, la interfaz expone campos alineados con las etapas del framework y los compone automáticamente en una única instrucción.',
            'En PromptQuorum, puedes:',
          ],
          items: [
            'Completar contexto específico de la tarea mientras la app mantiene la estructura TRACE consistente.',
            'Enviar el mismo prompt basado en TRACE a múltiples modelos en paralelo, comparar sus rastros de razonamiento y ver qué proveedor se alinea mejor con tus expectativas.',
            'Guardar plantillas TRACE para análisis recurrentes — como "revisión de compromisos de función" o "análisis post-incidente" — y compartirlas en tu equipo.',
          ],
        },
        combiningTRACE: {
          title: '¿Cómo combinar TRACE con otros frameworks?',
          content: [
            '**Debes combinar el Framework TRACE con otros frameworks asignando TRACE a la fase de razonamiento y usando otros frameworks para redacción o formateo.** Un patrón práctico es:',
          ],
          items: [
            'Usa un framework orientado a la generación (por ejemplo CO-STAR o CRAFT) para redactar contenido u opciones.',
            'Cambia a TRACE cuando necesites analizar elecciones, validar suposiciones o justificar una decisión.',
            'Usa RISEN si necesitas mejorar iterativamente un borrador en lugar de razonar a través de un nuevo problema.',
            'Opcionalmente termina con un framework de especificación (como SPECS) si el resultado final debe seguir una estructura o esquema estricto.',
          ],
          columns: ['Framework', 'Mejor Para', 'Combinar con TRACE cuando'],
          rows: [
            { 'Framework': 'CO-STAR', 'Mejor Para': 'Generación de contenido, redacción', 'Combinar con TRACE cuando': 'Redactar primero, luego TRACE para evaluar opciones' },
            { 'Framework': 'CRAFT', 'Mejor Para': 'Contenido estructurado con restricciones', 'Combinar con TRACE cuando': 'Generar contenido, luego TRACE para validar afirmaciones' },
            { 'Framework': 'RISEN', 'Mejor Para': 'Refinamiento iterativo', 'Combinar con TRACE cuando': 'TRACE para analizar, RISEN para mejorar' },
            { 'Framework': 'SPECS', 'Mejor Para': 'Esquemas de output estrictos', 'Combinar con TRACE cuando': 'TRACE para razonamiento, SPECS para formato final' },
            { 'Framework': 'Few-Shot', 'Mejor Para': 'Consistencia de formato', 'Combinar con TRACE cuando': 'Añadir ejemplos a las etapas TRACE para tareas complejas' },
          ],
        },

        howToStart: {
          title: 'Cómo usar el Framework TRACE',
          numberedItems: [
            '**Pensar (Think):** Pide al modelo que reformule el problema en sus propias palabras y detecte cualquier ambigüedad antes de intentar una respuesta. Ejemplo: "Antes de responder, reformula lo que te estoy preguntando. Lista las variables clave y las suposiciones que estás haciendo."',
            '**Razonar (Reason):** Pide al modelo que esboce 2-3 posibles enfoques o hipótesis y sus compromisos antes de comprometerse con uno. Ejemplo: "Propón 2-3 formas de abordar este problema. Para cada una, indica brevemente los pros y los contras."',
            '**Analizar (Analyze):** Pide al modelo que aplique su enfoque elegido paso a paso a los datos reales o al contexto que proporcionaste. Muestra números o ejemplos concretos donde sea posible. Ejemplo: "Aplica tu enfoque preferido a la situación específica que te di. Muestra cada paso."',
            '**Concluir (Conclude):** Pide al modelo que declare la respuesta final o recomendación directa y claramente en una oración. Ejemplo: "Establece tu recomendación claramente. Si es relevante, especifica qué condiciones o segmentos aplica."',
            '**Explicar (Explain):** Pide al modelo que justifique la conclusión en lenguaje simple que un actor no técnico pueda seguir. Ejemplo: "Explica el por qué en 3-5 oraciones. Evita el jerga. Escribe como si se lo explicaras a un gerente senior sin formación técnica."',
          ],
        },

        commonMistakes: {
          title: 'Errores comunes con TRACE',
          mistakes: [
            {
              mistake: 'Saltarse la etapa Pensar',
              problem: 'Sin reformular el problema, el modelo puede malinterpretar los requisitos y avanzar con confianza por el camino equivocado.',
              fix: 'Siempre pide al modelo que reformule el problema y liste las variables clave antes de pasar a Razonar. Esto detecta malentendidos temprano.',
            },
            {
              mistake: 'No restringir la longitud de cada etapa',
              problem: 'Los prompts TRACE sin restricciones pueden producir respuestas extremadamente largas, haciendo más difícil la lectura y más costoso el procesamiento.',
              fix: 'Añade restricciones de longitud por etapa: "Mantén cada etapa en 1-2 oraciones" o "Limita Analizar a 3 pasos."',
            },
            {
              mistake: 'Usar TRACE para tareas rutinarias',
              problem: 'TRACE añade latencia y verbosidad. Si solo necesitas un hecho rápido o una transformación simple, TRACE es excesivo.',
              fix: 'Reserva TRACE para decisiones, análisis y razonamiento complejo. Usa prompting zero-shot para tareas sencillas.',
            },
            {
              mistake: 'Tratar las cinco etapas como rígidas',
              problem: 'Algunas tareas no necesitan las cinco etapas, por lo que la adherencia rígida desperdicia tiempo y tokens.',
              fix: 'Adapta TRACE a tu tarea: puedes saltarte Razonar para una tarea de análisis de datos, o combinar Analizar y Concluir para mayor brevedad.',
            },
            {
              mistake: 'No comparar resultados TRACE entre modelos',
              problem: 'Diferentes modelos razonan de manera diferente, por lo que probar solo un modelo pierde oportunidades de aprender qué proveedor es mejor para tu tarea.',
              fix: 'Usa PromptQuorum o herramientas de despacho similares para enviar prompts TRACE a múltiples modelos en paralelo y comparar sus rastros de razonamiento.',
            },
          ],
        },

        relatedReading: {
          title: 'Lecturas relacionadas',
          content: [
            'El Framework TRACE se basa en técnicas de razonamiento más amplias. Aquí hay guías relacionadas para profundizar tu comprensión:',
          ],
          items: [
            '[Prompting Chain-of-Thought](/es/prompt-engineering/chain-of-thought-prompting) — La técnica fundamental que pide a los modelos razonar paso a paso.',
            '[El Framework RISEN](/es/prompt-engineering/risen-framework) — Úsalo cuando quieras refinamiento iterativo junto con el razonamiento.',
            '[El Framework CO-STAR](/es/prompt-engineering/co-star-framework) — Un framework complementario para tareas de redacción y generación.',
            '[Zero-Shot vs Few-Shot Prompting](/es/prompt-engineering/zero-shot-vs-few-shot-prompting) — Entiende cuándo TRACE es excesivo y técnicas más simples son suficientes.',
            '[Fundamentos de Prompt Engineering](/es/prompt-engineering/prompt-engineering-fundamentals) — Una guía fundamental para estructurar prompts efectivamente.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Qué significa TRACE en prompt engineering?',
              a: 'TRACE significa Pensar (Think), Razonar (Reason), Analizar (Analyze), Concluir (Conclude), Explicar (Explain). Es un patrón de prompt estructurado que instruye a un modelo de IA a mostrar cada etapa de su razonamiento en lugar de saltar directamente a una respuesta final.',
            },
            {
              q: '¿Cuándo debo usar el Framework TRACE?',
              a: 'Usa TRACE cuando la calidad del razonamiento y la justificación importen más que la brevedad: decisiones estratégicas, revisiones de arquitectura técnica, depuración compleja y situaciones donde necesitas mostrar a las partes interesadas cómo se llegó a una conclusión.',
            },
            {
              q: '¿En qué se diferencia TRACE del prompting Chain-of-Thought?',
              a: 'Chain-of-Thought es una técnica general que pide a los modelos razonar paso a paso. TRACE es una estructura específica de 5 etapas (Pensar, Razonar, Analizar, Concluir, Explicar) que produce rastros de razonamiento consistentes y reproducibles entre tareas y modelos.',
            },
            {
              q: '¿En qué se diferencia TRACE del Framework RISEN?',
              a: 'TRACE se enfoca en hacer el proceso de razonamiento explícito para que puedas auditarlo. RISEN se enfoca en mejorar iterativamente un borrador existente. Usa TRACE para entender cómo piensa un modelo; usa RISEN para pulir la calidad del output.',
            },
            {
              q: '¿Puedo usar TRACE en un solo prompt o necesito múltiples turnos?',
              a: 'Ambas formas funcionan. Un solo prompt que lista las cinco etapas es más rápido. Los múltiples turnos te permiten pausar y redirigir en cada etapa si es necesario. Para el máximo control, muchos usuarios envían los pasos TRACE por separado.',
            },
            {
              q: '¿Cómo evito que TRACE produzca respuestas demasiado largas?',
              a: 'Añade restricciones de longitud por etapa. Por ejemplo: "Mantén cada etapa en 1-2 oraciones." Esto obliga al modelo a ser conciso mientras sigue mostrando su trabajo.',
            },
            {
              q: '¿Puede TRACE ayudar a detectar errores del modelo?',
              a: 'Sí. Al hacer el razonamiento visible, TRACE te permite detectar suposiciones falsas, brechas lógicas y cálculos incorrectos que serían invisibles en una respuesta solo con la respuesta final.',
            },
            {
              q: '¿Cómo apoya PromptQuorum los prompts TRACE?',
              a: 'PromptQuorum incluye TRACE como estructura de prompt integrada. Completas el contexto específico de la tarea en campos estructurados alineados con las cinco etapas. PromptQuorum luego envía el prompt compuesto a múltiples modelos en paralelo para que puedas comparar sus rastros de razonamiento lado a lado.',
            },
          ],
        },

        sources: {
          title: 'Fuentes',
          content: [
            'Este artículo resume las mejores prácticas actuales en prompt engineering y razonamiento de IA. El patrón del Framework TRACE se ha utilizado en investigación académica y práctica industrial para hacer transparente el razonamiento de los modelos de lenguaje.',
          ],
          items: [
            'Wei, J., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *arXiv:2201.11903*. [Leer en arXiv](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). "How to use the OpenAI API." [Documentación de la API de OpenAI](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). "Prompt Engineering Techniques." [Anthropic Docs](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. Herramientas de despliegue y razonamiento de LLM de código abierto.',
          ],
        },
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'إطار TRACE',
      seoTitle: 'إطار TRACE: استدلال ذكاء اصطناعي شفاف 2026',
      intro: '**إطار TRACE يحوّل استدلال الذكاء الاصطناعي من صندوق أسود إلى عملية مرئية خطوة بخطوة.** يطلب من النماذج التفكير والاستدلال والتحليل والاستنتاج والشرح — حتى تتمكن من رؤية أين تصمد المنطق وأين تنهار. PromptQuorum يتضمن إطار TRACE كخيار مدمج يمكن لأي مستخدم تحديده واستخدامه مباشرة داخل التطبيق.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '٨ دقائق للقراءة',
      educationalLevel: 'متوسط',
      primaryTerm: 'إطار TRACE',
      metaDescription: 'إطار TRACE يُلزم LLMs بـ5 مراحل: التفكير والاستدلال والتحليل والاستنتاج والشرح. اكشف أخطاء المنطق قبل أن تثق بالإجابة النهائية.',
      toc: [
        { anchor: 'key-takeaways', label: 'النقاط الرئيسية' },
        { anchor: 'what-is-trace', label: 'ما هو إطار TRACE' },
        { anchor: 'why-trace-matters', label: 'لماذا يهم إطار TRACE' },
        { anchor: 'five-stages', label: 'ما هي المراحل الخمس لـ TRACE؟' },
        { anchor: 'bad-vs-good-example', label: 'مثال: طلب TRACE سيئ مقابل جيد' },
        { anchor: 'when-to-use', label: 'متى تستخدم إطار TRACE' },
        { anchor: 'how-to-write', label: 'كيف تكتب طلب TRACE' },
        { anchor: 'how-promptquorum-implements', label: 'كيف ينفّذ PromptQuorum إطار TRACE' },
        { anchor: 'combining-trace', label: 'كيف تجمع TRACE مع أطر أخرى؟' },
        { anchor: 'how-to-start', label: 'كيف تستخدم إطار TRACE' },
        { anchor: 'common-mistakes', label: 'الأخطاء الشائعة مع TRACE' },
        { anchor: 'related-reading', label: 'قراءات ذات صلة' },
        { anchor: 'faq', label: 'الأسئلة الشائعة' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/trace-framework',
        inLanguage: 'ar',
        headline: 'إطار TRACE',
        description: 'كيف يعمل إطار TRACE (التفكير، الاستدلال، التحليل، الاستنتاج، الشرح)، ومتى تستخدمه، وكيف يوفر PromptQuorum TRACE كخيار مدمج.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['إطار TRACE', 'التفكير الاستدلال التحليل الاستنتاج الشرح', 'أطر الطلبات', 'هندسة الطلبات', 'طلبات الاستدلال', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'متوسط',
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'أطر الطلبات' },
          { '@type': 'Thing', name: 'نماذج اللغة الكبيرة' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'ما معنى TRACE في هندسة الطلبات؟', acceptedAnswer: { '@type': 'Answer', text: 'TRACE تعني التفكير (Think)، الاستدلال (Reason)، التحليل (Analyze)، الاستنتاج (Conclude)، الشرح (Explain). إنه نمط طلب منظّم يرشد نموذج الذكاء الاصطناعي إلى إظهار كل مرحلة من مراحل استدلاله بدلًا من القفز مباشرة إلى إجابة نهائية.' } },
          { '@type': 'Question', name: 'متى يجب أن أستخدم إطار TRACE؟', acceptedAnswer: { '@type': 'Answer', text: 'استخدم TRACE عندما تكون جودة الاستدلال والتبرير أهم من الإيجاز: القرارات الاستراتيجية، ومراجعات البنية التقنية، والتصحيح المعقد، والمواقف التي تحتاج فيها إلى إظهار كيفية التوصل إلى استنتاج لأصحاب المصلحة.' } },
          { '@type': 'Question', name: 'كيف يختلف TRACE عن استدعاء Chain-of-Thought؟', acceptedAnswer: { '@type': 'Answer', text: 'Chain-of-Thought هي تقنية عامة تطلب من النماذج الاستدلال خطوة بخطوة. TRACE هو بنية محددة من 5 مراحل (التفكير، الاستدلال، التحليل، الاستنتاج، الشرح) تنتج آثار استدلال متسقة وقابلة للتكرار عبر المهام والنماذج.' } },
          { '@type': 'Question', name: 'كيف يختلف TRACE عن إطار RISEN؟', acceptedAnswer: { '@type': 'Answer', text: 'TRACE يركز على جعل عملية الاستدلال صريحة حتى تتمكن من تدقيقها. RISEN يركز على تحسين مسودة موجودة بشكل تكراري. استخدم TRACE لفهم كيفية تفكير النموذج؛ استخدم RISEN لصقل جودة المخرجات.' } },
          { '@type': 'Question', name: 'هل يمكنني استخدام TRACE في طلب واحد أم أحتاج إلى جولات متعددة؟', acceptedAnswer: { '@type': 'Answer', text: 'كلا الطريقتين تعملان. طلب واحد يسرد المراحل الخمس أسرع. الجولات المتعددة تتيح لك التوقف وإعادة التوجيه في كل مرحلة إذا لزم. للتحكم الأقصى، يرسل كثير من المستخدمين خطوات TRACE بشكل منفصل.' } },
          { '@type': 'Question', name: 'كيف أتجنب أن ينتج TRACE إجابات طويلة جدًا؟', acceptedAnswer: { '@type': 'Answer', text: 'أضف قيود الطول لكل مرحلة. مثلًا: "احتفظ بكل مرحلة في جملة إلى جملتين." هذا يُلزم النموذج بالإيجاز مع الاستمرار في إظهار عمله.' } },
          { '@type': 'Question', name: 'هل يمكن لـ TRACE المساعدة في اكتشاف أخطاء النموذج؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. بجعل الاستدلال مرئيًا، يتيح TRACE اكتشاف الافتراضات الخاطئة والثغرات المنطقية والحسابات غير الصحيحة التي ستكون غير مرئية في إجابة تحتوي على النتيجة النهائية فحسب.' } },
          { '@type': 'Question', name: 'كيف يدعم PromptQuorum طلبات TRACE؟', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum يتضمن TRACE كبنية طلب مدمجة. تُكمل السياق المحدد للمهمة في حقول منظمة متوافقة مع المراحل الخمس. ثم يرسل PromptQuorum الطلب المركّب إلى نماذج متعددة بالتوازي حتى تتمكن من مقارنة آثار استدلالها جنبًا إلى جنب.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'كيف تكتب طلب TRACE',
        description: 'دليل خطوة بخطوة لبناء الطلبات باستخدام إطار TRACE (التفكير، الاستدلال، التحليل، الاستنتاج، الشرح) لجعل استدلال الذكاء الاصطناعي شفافًا وقابلًا للتدقيق.',
        step: [
          { '@type': 'HowToStep', name: 'التفكير (Think)', text: 'اطلب من النموذج إعادة صياغة المشكلة بكلماته الخاصة وسرد المتغيرات الرئيسية والافتراضات قبل محاولة الإجابة.' },
          { '@type': 'HowToStep', name: 'الاستدلال (Reason)', text: 'اطلب من النموذج اقتراح 2-3 مناهج أو فرضيات محتملة مع المقايضات قبل الالتزام بواحدة.' },
          { '@type': 'HowToStep', name: 'التحليل (Analyze)', text: 'اطلب من النموذج تطبيق منهجه المختار خطوة بخطوة على البيانات الفعلية أو السياق الذي قدمته، مع إظهار الأرقام أو الأمثلة الملموسة.' },
          { '@type': 'HowToStep', name: 'الاستنتاج (Conclude)', text: 'اطلب من النموذج إعلان الإجابة النهائية أو التوصية المباشرة بوضوح في جملة واحدة.' },
          { '@type': 'HowToStep', name: 'الشرح (Explain)', text: 'اطلب من النموذج تبرير الاستنتاج بلغة بسيطة يمكن لغير التقنيين متابعتها.' },
        ],
      },
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: 'يتناول العرض التقديمي: كيف يُلزم TRACE (التفكير، الاستدلال، التحليل، الاستنتاج، الشرح) الذكاء الاصطناعي بإظهار استدلاله خطوة بخطوة، والأسلوب المكوّن من 5 مراحل مع أمثلة على الطلبات السيئة مقابل الجيدة، ومتى يُجمع TRACE مع CO-STAR وCRAFT وRISEN وSPECS، بالإضافة إلى 5 أخطاء شائعة يجب تجنبها. نزّل PDF كبطاقة مرجعية لإطار TRACE.',
      sections: {
        keyTakeaways: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'TRACE تعني التفكير والاستدلال والتحليل والاستنتاج والشرح — نمط طلب مكوّن من 5 مراحل يُلزم نماذج الذكاء الاصطناعي بإظهار كل خطوة من خطوات استدلالها.',
            'استخدم TRACE عندما تكون جودة الاستدلال أهم من الإيجاز: القرارات الاستراتيجية والالتزامات المعمارية والتصحيح المعقد وأي مخرجات تحتاج إلى تبريرها أمام أصحاب المصلحة.',
            'TRACE يقلل الثقة العمياء في مخرجات النموذج بجعل الافتراضات الخاطئة والثغرات المنطقية مرئية قبل أن تؤثر على القرارات.',
            'يمكن أن يكون طلب TRACE رسالة واحدة مع تحديد المراحل الخمس جميعها، أو إرسال جولة تلو الأخرى للتحكم الأكبر.',
            'PromptQuorum يتضمن TRACE كبنية مدمجة: أكمل سياقك، وأرسل إلى نماذج متعددة بالتوازي، وقارن آثار الاستدلال جنبًا إلى جنب.',
          ],
        },
        whatIsTRACE: {
          title: 'ما هو إطار TRACE',
          content: [
            '**إطار TRACE هو نمط طلب مرتكز على الاستدلال يُلزم نماذج اللغة الكبيرة بإظهار عملها، وليس فقط إجابتها النهائية.** صُمّم للمهام التي تهتم فيها بكيفية وصول النموذج إلى نتيجة، كالتحليل التقني والاستراتيجية وحل المشكلات المعقدة.',
            'التفسير الشائع لـ TRACE هو:',
            'TRACE يعمل عبر جميع النماذج الرئيسية — GPT-5 (OpenAI) وClaude 4.8 Opus (Anthropic) وGemini 3 Pro (Google DeepMind) والنماذج المحلية عبر Ollama أو LM Studio — لكن النماذج تتبع المراحل الخمس بمستويات مختلفة من الانضباط. اختبار نفس طلب TRACE عبر نماذج متعددة يكشف أي مزود يستدل بشكل أكثر شفافية لمهمتك المحددة.',
          ],
          items: [
            'التفكير: إعادة صياغة المشكلة وتفسيرها بكلماتك الخاصة.',
            'الاستدلال: استكشاف المناهج أو الفرضيات المحتملة.',
            'التحليل: تطبيق تلك المناهج على البيانات أو الموقف الملموس.',
            'الاستنتاج: إعلان الإجابة أو التوصية النهائية بوضوح.',
            'الشرح: تبرير الاستنتاج بطريقة يمكن للبشر متابعتها بسرعة.',
          ],
        },
        whyTRACEMatters: {
          title: 'لماذا يهم إطار TRACE',
          content: [
            '**إطار TRACE مهم لأنه يقلل الثقة العمياء في مخرجات النموذج بجعل مسار الاستدلال صريحًا.** عندما يشرح النموذج كل مرحلة، يمكنك اكتشاف المتطلبات المُفسَّرة بشكل خاطئ والافتراضات الضعيفة والثغرات في المنطق مبكرًا.',
            'هذا مفيد بشكل خاص عندما:',
          ],
          items: [
            'تتخذ قرارات تجارية أو تقنية بناءً على مخرجات النموذج.',
            'تحتاج إلى مقارنة كيفية استدلال نماذج مختلفة على نفس المشكلة.',
            'تريد سجلًا يمكنك إظهاره لزملاء الفريق أو أصحاب المصلحة لتبرير خيار.',
          ],
        },
        fiveStages: {
          title: 'ما هي المراحل الخمس لـ TRACE؟',
          content: [
            '**يخبر طلب TRACE الجيد النموذج بما يجب فعله بالضبط في كل مرحلة حتى يكون أثر الاستدلال متسقًا عبر المهام والنماذج.** يمكنك ضغط هذا في رسالة واحدة مع الحفاظ على وضوح الخطوات.',
            'التعريفات النموذجية للمراحل:',
          ],
          items: [
            'التفكير: توضيح المهمة وسرد المتغيرات الرئيسية واكتشاف الغموض.',
            'الاستدلال: تحديد الأساليب المحتملة أو المقايضات أو مسارات الحل.',
            'التحليل: تطبيق الأسلوب المختار خطوة بخطوة على المدخلات الفعلية.',
            'الاستنتاج: تقديم إجابة مباشرة أو توصية مرتبطة بالسؤال.',
            'الشرح: تلخيص المنطق بلغة بسيطة، مع التركيز على "لماذا" وراء الإجابة.',
          ],
        },
        badVsGoodExample: {
          title: 'مثال: طلب TRACE سيئ مقابل جيد',
          content: [
            '**تتضح فائدة إطار TRACE عند مقارنة طلب عام بطلب مبني على TRACE للمهمة ذاتها.** إليك مثالًا بسيطًا للاختيار بين خيارَي تسعير للمنتج.',
            '**[طلب سيئ]**',
            '"أيٌّ من خطتي التسعير هاتين أفضل؟"',
            '**[طلب TRACE جيد]**',
            '"أنت محلل تسعير SaaS. استخدم عملية TRACE لهذا القرار. التفكير: أعد صياغة المشكلة واسرد العوامل الرئيسية المهمة (مثل الإيرادات وخطر الإلغاء وتصور العملاء). الاستدلال: اقترح 2-3 طرق محتملة لمقارنة خطتي التسعير (مثل تحليل نقطة التعادل ومسار الترقية والإنصاف المُدرَك). التحليل: طبّق أسلوب المقارنة المفضل لديك خطوة بخطوة على البيانات التي أقدمها. أظهر الأرقام أو الأمثلة الملموسة كلما أمكن. الاستنتاج: حدد بوضوح خطة التسعير التي توصي بها ولأي شرائح عملاء إن كان ذلك ذا صلة. الشرح: في 3-5 جمل، بررّ توصيتك بلغة بسيطة يمكن لغير التقنيين فهمها. البيانات: [أدخل تفاصيل الخطة هنا]"',
            'نسخة TRACE لا تخبرك فقط "الخطة A أفضل"؛ بل تُظهر كيف فكّر النموذج في المقايضات.',
          ],
        },
        whenToUse: {
          title: 'متى تستخدم إطار TRACE',
          content: [
            '**يجب استخدام إطار TRACE عندما يكون اهتمامك الرئيسي جودة الاستدلال والتبرير بدلًا من الإيجاز القصوى.** TRACE يضيف تكلفة إضافية مقارنة بالإجابة بسطر واحد، لكنه يستحق ذلك عندما تكون الأخطاء مكلفة.',
            'حالات الاستخدام النموذجية تشمل:',
          ],
          items: [
            'تقييم الخيارات الاستراتيجية أو المقايضات أو البنى التقنية.',
            'مراجعة تغييرات الكود المعقدة أو تصحيح مشاكل صعبة.',
            'تحليل نتائج البحث أو المقاييس أو ملاحظات المستخدمين لاستخلاص استنتاجات.',
            'إنشاء توصيات قابلة للشرح يمكن مشاركتها مع المديرين أو العملاء.',
          ],
        },
        howToWrite: {
          title: 'كيف تكتب طلب TRACE',
          content: [
            '**كتابة طلب TRACE بسيطة إذا أشرت صراحةً إلى المراحل الخمس وحددت التوقعات لكل منها.** يمكنك البدء بقالب بسيط وتكييفه لمجالك.',
            'يبدو النمط العام هكذا:',
            '"أنت [الدور]. استخدم عملية TRACE. التفكير: [كيف تُعيد صياغة المشكلة وتوضيحها]. الاستدلال: [كيف تستكشف مسارات الحل]. التحليل: [كيف تطبق الاستدلال على البيانات أو السياق المحدد]. الاستنتاج: [كيف تقدم الإجابة النهائية]. الشرح: [كيف تبرر الإجابة لقارئ بشري]. السياق/البيانات: [أدخل هنا]."',
            'بمجرد حفظه كقالب، تحتاج فقط إلى تغيير الدور والسياق لكل مهمة جديدة.',
          ],
        },
        howPQImplements: {
          title: 'كيف ينفّذ PromptQuorum إطار TRACE',
          content: [
            '**PromptQuorum هو أداة إرسال ذكاء اصطناعي متعددة النماذج تتضمن إطار TRACE كإحدى بنى الطلبات المدمجة حتى يتمكن المستخدمون من تشغيل طلبات مرتكزة على الاستدلال عبر نماذج متعددة بنقرة واحدة.** عند اختيار TRACE داخل PromptQuorum، تعرض الواجهة حقولًا متوافقة مع مراحل الإطار وتُجمّعها تلقائيًا في تعليمة واحدة.',
            'في PromptQuorum، يمكنك:',
          ],
          items: [
            'إكمال السياق المحدد للمهمة بينما يحافظ التطبيق على بنية TRACE المتسقة.',
            'إرسال نفس الطلب المبني على TRACE إلى نماذج متعددة بالتوازي، ومقارنة آثار استدلالها، ورؤية أي مزود يتوافق أكثر مع توقعاتك.',
            'حفظ قوالب TRACE للتحليلات المتكررة — مثل "مراجعة مقايضات الميزة" أو "تحليل ما بعد الحادث" — ومشاركتها مع فريقك.',
          ],
        },
        combiningTRACE: {
          title: 'كيف تجمع TRACE مع أطر أخرى؟',
          content: [
            '**يجب الجمع بين إطار TRACE وأطر أخرى بتعيين TRACE لمرحلة الاستدلال واستخدام أطر أخرى للصياغة أو التنسيق.** نمط عملي هو:',
          ],
          items: [
            'استخدم إطارًا موجهًا نحو التوليد (مثل CO-STAR أو CRAFT) لصياغة المحتوى أو الخيارات.',
            'انتقل إلى TRACE عندما تحتاج إلى تحليل الاختيارات أو التحقق من الافتراضات أو تبرير قرار.',
            'استخدم RISEN إذا كنت بحاجة إلى تحسين مسودة بشكل تكراري بدلًا من الاستدلال على مشكلة جديدة.',
            'اختياريًا اختتم بإطار مواصفات (مثل SPECS) إذا كانت النتيجة النهائية يجب أن تتبع بنية أو مخطط صارم.',
          ],
          columns: ['الإطار', 'الأفضل لـ', 'الجمع مع TRACE عندما'],
          rows: [
            { 'الإطار': 'CO-STAR', 'الأفضل لـ': 'توليد المحتوى والصياغة', 'الجمع مع TRACE عندما': 'الصياغة أولًا، ثم TRACE لتقييم الخيارات' },
            { 'الإطار': 'CRAFT', 'الأفضل لـ': 'محتوى منظم مع قيود', 'الجمع مع TRACE عندما': 'توليد المحتوى، ثم TRACE للتحقق من الادعاءات' },
            { 'الإطار': 'RISEN', 'الأفضل لـ': 'التحسين التكراري', 'الجمع مع TRACE عندما': 'TRACE للتحليل، RISEN للتحسين' },
            { 'الإطار': 'SPECS', 'الأفضل لـ': 'مخططات مخرجات صارمة', 'الجمع مع TRACE عندما': 'TRACE للاستدلال، SPECS للتنسيق النهائي' },
            { 'الإطار': 'Few-Shot', 'الأفضل لـ': 'اتساق التنسيق', 'الجمع مع TRACE عندما': 'إضافة أمثلة إلى مراحل TRACE للمهام المعقدة' },
          ],
        },

        howToStart: {
          title: 'كيف تستخدم إطار TRACE',
          numberedItems: [
            '**التفكير (Think):** اطلب من النموذج إعادة صياغة المشكلة بكلماته الخاصة واكتشاف أي غموض قبل محاولة الإجابة. مثال: "قبل الإجابة، أعد صياغة ما أطلبه منك. اسرد المتغيرات الرئيسية والافتراضات التي تضعها."',
            '**الاستدلال (Reason):** اطلب من النموذج تحديد 2-3 مناهج أو فرضيات محتملة ومقايضاتها قبل الالتزام بواحدة. مثال: "اقترح 2-3 طرق لمعالجة هذه المشكلة. لكل منها، حدد بإيجاز الإيجابيات والسلبيات."',
            '**التحليل (Analyze):** اطلب من النموذج تطبيق منهجه المختار خطوة بخطوة على البيانات الفعلية أو السياق الذي قدمته. أظهر الأرقام أو الأمثلة الملموسة كلما أمكن. مثال: "طبّق منهجك المفضل على الموقف المحدد الذي أعطيتك إياه. أظهر كل خطوة."',
            '**الاستنتاج (Conclude):** اطلب من النموذج إعلان الإجابة النهائية أو التوصية المباشرة بوضوح في جملة واحدة. مثال: "أعلن توصيتك بوضوح. إذا كان ذا صلة، حدد الشروط أو الشرائح التي تنطبق عليها."',
            '**الشرح (Explain):** اطلب من النموذج تبرير الاستنتاج بلغة بسيطة يمكن لغير التقنيين متابعتها. مثال: "اشرح السبب في 3-5 جمل. تجنّب المصطلحات التقنية. اكتب كما لو كنت تشرح لمدير رفيع المستوى بلا خلفية تقنية."',
          ],
        },

        commonMistakes: {
          title: 'الأخطاء الشائعة مع TRACE',
          mistakes: [
            {
              mistake: 'تخطّي مرحلة التفكير',
              problem: 'بدون إعادة صياغة المشكلة، قد يُسيء النموذج فهم المتطلبات ويتقدم بثقة في الاتجاه الخاطئ.',
              fix: 'اطلب دائمًا من النموذج إعادة صياغة المشكلة وسرد المتغيرات الرئيسية قبل الانتقال إلى الاستدلال. هذا يكشف سوء الفهم مبكرًا.',
            },
            {
              mistake: 'عدم تقييد طول كل مرحلة',
              problem: 'طلبات TRACE بلا قيود يمكن أن تُنتج إجابات طويلة جدًا، مما يجعل القراءة أصعب والمعالجة أكثر تكلفة.',
              fix: 'أضف قيود الطول لكل مرحلة: "احتفظ بكل مرحلة في جملة إلى جملتين" أو "قيّد التحليل إلى 3 خطوات."',
            },
            {
              mistake: 'استخدام TRACE للمهام الروتينية',
              problem: 'TRACE يضيف كمونًا وإسهابًا. إذا كنت تحتاج فقط إلى حقيقة سريعة أو تحويل بسيط، فإن TRACE مبالغة.',
              fix: 'احجز TRACE للقرارات والتحليلات والاستدلال المعقد. استخدم الاستدعاء بدون أمثلة للمهام البسيطة.',
            },
            {
              mistake: 'التعامل مع المراحل الخمس كصارمة',
              problem: 'بعض المهام لا تحتاج إلى المراحل الخمس، لذا الالتزام الصارم يُهدر الوقت والرموز.',
              fix: 'كيّف TRACE لمهمتك: يمكنك تخطّي الاستدلال لمهمة تحليل بيانات، أو دمج التحليل والاستنتاج للإيجاز.',
            },
            {
              mistake: 'عدم مقارنة نتائج TRACE عبر النماذج',
              problem: 'النماذج المختلفة تستدل بطرق مختلفة، لذا اختبار نموذج واحد فقط يُضيّع فرص معرفة أي مزود أفضل لمهمتك.',
              fix: 'استخدم PromptQuorum أو أدوات إرسال مشابهة لإرسال طلبات TRACE إلى نماذج متعددة بالتوازي ومقارنة آثار استدلالها.',
            },
          ],
        },

        relatedReading: {
          title: 'قراءات ذات صلة',
          content: [
            'إطار TRACE يبني على تقنيات الاستدلال الأوسع. إليك أدلة ذات صلة لتعميق فهمك:',
          ],
          items: [
            '[استدعاء Chain-of-Thought](/ar/prompt-engineering/chain-of-thought-prompting) — التقنية الأساسية التي تطلب من النماذج الاستدلال خطوة بخطوة.',
            '[إطار RISEN](/ar/prompt-engineering/risen-framework) — استخدمه عندما تريد التحسين التكراري إلى جانب الاستدلال.',
            '[إطار CO-STAR](/ar/prompt-engineering/co-star-framework) — إطار مكمّل لمهام الصياغة والتوليد.',
            '[Zero-Shot مقابل Few-Shot](/ar/prompt-engineering/zero-shot-vs-few-shot-prompting) — افهم متى يكون TRACE مبالغة وتكفي التقنيات الأبسط.',
            '[أساسيات هندسة الطلبات](/ar/prompt-engineering/prompt-engineering-fundamentals) — دليل أساسي لبناء الطلبات بفعالية.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'ما معنى TRACE في هندسة الطلبات؟',
              a: 'TRACE تعني التفكير (Think)، الاستدلال (Reason)، التحليل (Analyze)، الاستنتاج (Conclude)، الشرح (Explain). إنه نمط طلب منظّم يرشد نموذج الذكاء الاصطناعي إلى إظهار كل مرحلة من مراحل استدلاله بدلًا من القفز مباشرة إلى إجابة نهائية.',
            },
            {
              q: 'متى يجب أن أستخدم إطار TRACE؟',
              a: 'استخدم TRACE عندما تكون جودة الاستدلال والتبرير أهم من الإيجاز: القرارات الاستراتيجية ومراجعات البنية التقنية والتصحيح المعقد والمواقف التي تحتاج فيها إلى إظهار كيفية التوصل إلى استنتاج لأصحاب المصلحة.',
            },
            {
              q: 'كيف يختلف TRACE عن استدعاء Chain-of-Thought؟',
              a: 'Chain-of-Thought هي تقنية عامة تطلب من النماذج الاستدلال خطوة بخطوة. TRACE هو بنية محددة من 5 مراحل (التفكير، الاستدلال، التحليل، الاستنتاج، الشرح) تنتج آثار استدلال متسقة وقابلة للتكرار عبر المهام والنماذج.',
            },
            {
              q: 'كيف يختلف TRACE عن إطار RISEN؟',
              a: 'TRACE يركز على جعل عملية الاستدلال صريحة حتى تتمكن من تدقيقها. RISEN يركز على تحسين مسودة موجودة بشكل تكراري. استخدم TRACE لفهم كيفية تفكير النموذج؛ استخدم RISEN لصقل جودة المخرجات.',
            },
            {
              q: 'هل يمكنني استخدام TRACE في طلب واحد أم أحتاج إلى جولات متعددة؟',
              a: 'كلا الطريقتين تعملان. طلب واحد يسرد المراحل الخمس أسرع. الجولات المتعددة تتيح لك التوقف وإعادة التوجيه في كل مرحلة إذا لزم. للتحكم الأقصى، يرسل كثير من المستخدمين خطوات TRACE بشكل منفصل.',
            },
            {
              q: 'كيف أتجنب أن ينتج TRACE إجابات طويلة جدًا؟',
              a: 'أضف قيود الطول لكل مرحلة. مثلًا: "احتفظ بكل مرحلة في جملة إلى جملتين." هذا يُلزم النموذج بالإيجاز مع الاستمرار في إظهار عمله.',
            },
            {
              q: 'هل يمكن لـ TRACE المساعدة في اكتشاف أخطاء النموذج؟',
              a: 'نعم. بجعل الاستدلال مرئيًا، يتيح TRACE اكتشاف الافتراضات الخاطئة والثغرات المنطقية والحسابات غير الصحيحة التي ستكون غير مرئية في إجابة تحتوي على النتيجة النهائية فحسب.',
            },
            {
              q: 'كيف يدعم PromptQuorum طلبات TRACE؟',
              a: 'PromptQuorum يتضمن TRACE كبنية طلب مدمجة. تُكمل السياق المحدد للمهمة في حقول منظمة متوافقة مع المراحل الخمس. ثم يرسل PromptQuorum الطلب المركّب إلى نماذج متعددة بالتوازي حتى تتمكن من مقارنة آثار استدلالها جنبًا إلى جنب.',
            },
          ],
        },

        sources: {
          title: 'المصادر',
          content: [
            'تلخّص هذه المقالة أفضل الممارسات الحالية في هندسة الطلبات واستدلال الذكاء الاصطناعي. تم استخدام نمط إطار TRACE في الأبحاث الأكاديمية والممارسة الصناعية لجعل استدلال نماذج اللغة شفافًا.',
          ],
          items: [
            'Wei, J., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *arXiv:2201.11903*. [اقرأ على arXiv](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). "How to use the OpenAI API." [وثائق OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). "Prompt Engineering Techniques." [Anthropic Docs](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. أدوات نشر واستدلال LLM مفتوحة المصدر.',
          ],
        },
      },
    },
    pt: {
      theme: 'Frameworks',
      title: 'O Framework TRACE',
      seoTitle: 'Framework TRACE: Prompts que revelam o raciocínio da IA 2026',
      intro: '**O Framework TRACE transforma o raciocínio da IA de uma caixa preta em um processo visível, passo a passo.** Ele pede aos modelos que Pensem, Raciocinem, Analisem, Concluam e Expliquem — para que você possa ver onde a lógica se sustenta e onde ela falha. O PromptQuorum inclui o Framework TRACE como opção integrada que qualquer usuário pode selecionar e usar diretamente no aplicativo.',
      publishDate: '2026-03-24',
      readTime: '8 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Framework TRACE',
      metaDescription: 'O Framework TRACE (Pensar, Raciocinar, Analisar, Concluir, Explicar) obriga a IA a mostrar seu trabalho. Quando usar, como escrever prompts TRACE e por que a transparência importa.',
      toc: [
        { anchor: 'key-takeaways', label: 'Principais conclusões' },
        { anchor: 'what-is-trace', label: 'O que é o Framework TRACE' },
        { anchor: 'why-trace-matters', label: 'Por que o Framework TRACE é importante' },
        { anchor: 'five-stages', label: 'Quais são as cinco etapas do TRACE?' },
        { anchor: 'bad-vs-good-example', label: 'Exemplo: Prompt TRACE ruim vs. bom' },
        { anchor: 'when-to-use', label: 'Quando usar o Framework TRACE' },
        { anchor: 'how-to-write', label: 'Como escrever um prompt TRACE' },
        { anchor: 'how-promptquorum-implements', label: 'Como o PromptQuorum implementa o Framework TRACE' },
        { anchor: 'combining-trace', label: 'Como combinar o TRACE com outros frameworks?' },
        { anchor: 'how-to-start', label: 'Como usar o Framework TRACE' },
        { anchor: 'common-mistakes', label: 'Erros comuns com o TRACE' },
        { anchor: 'related-reading', label: 'Leitura relacionada' },
        { anchor: 'faq', label: 'FAQ' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/trace-framework',
        inLanguage: 'pt-BR',
        headline: 'O Framework TRACE',
        description: 'Como o Framework TRACE (Pensar, Raciocinar, Analisar, Concluir, Explicar) funciona, quando usá-lo e como o PromptQuorum oferece o TRACE como opção integrada.',
        datePublished: '2026-03-24',
        keywords: ['Framework TRACE', 'Pensar Raciocinar Analisar Concluir Explicar', 'frameworks de prompt', 'prompt engineering', 'prompts de raciocínio', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Grandes Modelos de Linguagem' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'O que significa TRACE em prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'TRACE significa Pensar (Think), Raciocinar (Reason), Analisar (Analyze), Concluir (Conclude), Explicar (Explain). É um padrão de prompt estruturado que instrui um modelo de IA a mostrar cada etapa do seu raciocínio em vez de pular diretamente para uma resposta final.' } },
          { '@type': 'Question', name: 'Quando devo usar o Framework TRACE?', acceptedAnswer: { '@type': 'Answer', text: 'Use o TRACE quando a qualidade do raciocínio e a justificativa importam mais do que a brevidade: decisões estratégicas, revisões de arquitetura técnica, depuração complexa e situações em que você precisa mostrar às partes interessadas como uma conclusão foi alcançada.' } },
          { '@type': 'Question', name: 'Como o TRACE difere do prompting Chain-of-Thought?', acceptedAnswer: { '@type': 'Answer', text: 'Chain-of-Thought é uma técnica geral que pede aos modelos que raciocinem passo a passo. O TRACE é uma estrutura específica de 5 etapas (Pensar, Raciocinar, Analisar, Concluir, Explicar) que produz rastros de raciocínio consistentes e reproduzíveis entre tarefas e modelos.' } },
          { '@type': 'Question', name: 'Como o TRACE difere do Framework RISEN?', acceptedAnswer: { '@type': 'Answer', text: 'O TRACE foca em tornar o processo de raciocínio explícito para que você possa auditá-lo. O RISEN foca em melhorar iterativamente um rascunho existente. Use o TRACE para entender como um modelo pensa; use o RISEN para polir a qualidade do output.' } },
          { '@type': 'Question', name: 'Posso usar o TRACE em um único prompt ou preciso de múltiplos turnos?', acceptedAnswer: { '@type': 'Answer', text: 'Ambos funcionam. Um único prompt que lista as cinco etapas é mais rápido. Múltiplos turnos permitem pausar e redirecionar em cada etapa, se necessário. Para máximo controle, muitos usuários enviam os passos do TRACE separadamente.' } },
          { '@type': 'Question', name: 'Como evito que o TRACE produza respostas muito longas?', acceptedAnswer: { '@type': 'Answer', text: 'Adicione restrições de comprimento por etapa. Por exemplo: "Mantenha cada etapa em 1–2 frases." Isso obriga o modelo a ser conciso enquanto ainda mostra seu trabalho.' } },
          { '@type': 'Question', name: 'O TRACE pode ajudar a detectar erros do modelo?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Ao tornar o raciocínio visível, o TRACE permite identificar premissas falsas, lacunas lógicas e cálculos incorretos que seriam invisíveis em uma resposta só com a resposta final.' } },
          { '@type': 'Question', name: 'Como o PromptQuorum suporta prompts TRACE?', acceptedAnswer: { '@type': 'Answer', text: 'O PromptQuorum inclui o TRACE como estrutura de prompt integrada. Você preenche o contexto específico da tarefa em campos estruturados alinhados às cinco etapas. O PromptQuorum então envia o prompt composto a múltiplos modelos em paralelo para que você possa comparar seus rastros de raciocínio lado a lado.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Como escrever um prompt TRACE',
        description: 'Guia passo a passo para estruturar prompts usando o Framework TRACE (Pensar, Raciocinar, Analisar, Concluir, Explicar) para tornar o raciocínio da IA transparente e auditável.',
        step: [
          { '@type': 'HowToStep', name: 'Pensar (Think)', text: 'Peça ao modelo que reformule o problema com suas próprias palavras e liste as variáveis-chave e premissas antes de tentar uma resposta.' },
          { '@type': 'HowToStep', name: 'Raciocinar (Reason)', text: 'Peça ao modelo que proponha 2–3 possíveis abordagens ou hipóteses com seus trade-offs antes de se comprometer com uma.' },
          { '@type': 'HowToStep', name: 'Analisar (Analyze)', text: 'Peça ao modelo que aplique a abordagem escolhida passo a passo aos dados reais ou ao contexto que você forneceu, mostrando números ou exemplos concretos.' },
          { '@type': 'HowToStep', name: 'Concluir (Conclude)', text: 'Peça ao modelo que declare a resposta final ou recomendação de forma direta e clara em uma frase.' },
          { '@type': 'HowToStep', name: 'Explicar (Explain)', text: 'Peça ao modelo que justifique a conclusão em linguagem simples que uma parte interessada não técnica possa acompanhar.' },
        ],
      },
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: 'A apresentação abaixo cobre: como o TRACE (Pensar, Raciocinar, Analisar, Concluir, Explicar) obriga a IA a mostrar seu raciocínio passo a passo, o método de 5 etapas com exemplos de prompts ruins vs. bons, quando combinar o TRACE com CO-STAR, CRAFT, RISEN e SPECS, além de 5 erros comuns a evitar. Baixe o PDF como cartão de referência do Framework TRACE.',
      sections: {
        keyTakeaways: {
          title: 'Principais conclusões',
          isTldr: true,
          items: [
            'TRACE significa Pensar, Raciocinar, Analisar, Concluir, Explicar — um padrão de prompt de 5 etapas que obriga os modelos de IA a mostrar cada passo do seu raciocínio.',
            'Use o TRACE quando a qualidade do raciocínio importa mais do que a brevidade: decisões estratégicas, trade-offs de arquitetura, depuração complexa ou qualquer output que você precise justificar às partes interessadas.',
            'O TRACE reduz a confiança cega nos outputs do modelo ao tornar visíveis as premissas falsas e as lacunas lógicas antes que afetem as decisões.',
            'Um prompt TRACE pode ser uma única mensagem com todas as cinco etapas definidas, ou enviado turno a turno para maior controle.',
            'O PromptQuorum inclui o TRACE como estrutura integrada: preencha seu contexto, envie a múltiplos modelos em paralelo e compare rastros de raciocínio lado a lado.',
          ],
        },
        whatIsTRACE: {
          title: 'O que é o Framework TRACE',
          content: [
            '**O Framework TRACE é um padrão de prompt centrado no raciocínio que obriga os grandes modelos de linguagem a mostrar seu trabalho, não apenas sua resposta final.** Ele é projetado para tarefas em que você se importa com como o modelo chegou a um resultado, como análise técnica, estratégia ou solução de problemas complexos.',
            'Uma interpretação comum do TRACE é:',
            'O TRACE funciona em todos os principais modelos — GPT-5 (OpenAI), Claude 4.8 Opus (Anthropic), Gemini 3 Pro (Google DeepMind) e modelos locais via Ollama ou LM Studio — mas os modelos seguem as cinco etapas com diferentes níveis de disciplina. Testar o mesmo prompt TRACE em múltiplos modelos revela qual provedor raciocina de forma mais transparente para sua tarefa específica.',
          ],
          items: [
            'Pensar: Reformular e interpretar o problema com suas próprias palavras.',
            'Raciocinar: Explorar possíveis abordagens ou hipóteses.',
            'Analisar: Aplicar essas abordagens aos dados concretos ou à situação.',
            'Concluir: Declarar a resposta ou recomendação final claramente.',
            'Explicar: Justificar a conclusão de forma que os humanos possam seguir rapidamente.',
          ],
        },
        whyTRACEMatters: {
          title: 'Por que o Framework TRACE é importante',
          content: [
            '**O Framework TRACE é importante porque reduz a confiança cega nos outputs do modelo ao tornar explícito o caminho do raciocínio.** Quando o modelo explica cada etapa, você pode identificar requisitos mal interpretados, premissas fracas ou lacunas na lógica com antecedência.',
            'Isso é especialmente útil quando:',
          ],
          items: [
            'Você toma decisões empresariais ou técnicas com base nos outputs do modelo.',
            'Você precisa comparar como diferentes modelos raciocinam sobre o mesmo problema.',
            'Você quer um registro que possa mostrar a colegas de equipe ou partes interessadas para justificar uma escolha.',
          ],
        },
        fiveStages: {
          title: 'Quais são as cinco etapas do TRACE?',
          content: [
            '**Um bom prompt TRACE diz ao modelo exatamente o que fazer em cada etapa para que o rastro de raciocínio seja consistente entre tarefas e modelos.** Você pode compactar isso em uma mensagem enquanto mantém os passos claros.',
            'Definições típicas das etapas:',
          ],
          items: [
            'Pensar: Esclarecer a tarefa, listar variáveis-chave e revelar ambiguidades.',
            'Raciocinar: Esboçar métodos potenciais, trade-offs ou caminhos de solução.',
            'Analisar: Aplicar o método escolhido passo a passo às entradas reais.',
            'Concluir: Fornecer uma resposta direta ou recomendação ligada à pergunta.',
            'Explicar: Resumir a lógica em linguagem simples, com foco no "porquê" por trás da resposta.',
          ],
        },
        badVsGoodExample: {
          title: 'Exemplo: Prompt TRACE ruim vs. bom',
          content: [
            '**O benefício do Framework TRACE fica claro quando você compara uma solicitação genérica com uma solicitação baseada em TRACE para a mesma tarefa.** Aqui está um exemplo simples para escolher entre dois planos de precificação de produto.',
            '**[Prompt Ruim]**',
            '"Qual desses dois planos de preços é melhor?"',
            '**[Prompt TRACE Bom]**',
            '"Você é um analista de precificação de SaaS. Use o processo TRACE para essa decisão. Pensar: Reformule o problema e liste os fatores-chave que importam (por exemplo, receita, risco de churn, percepção do cliente). Raciocinar: Proponha 2–3 formas possíveis de comparar os dois planos de preços (por exemplo, análise de ponto de equilíbrio, caminho de upgrade, equidade percebida). Analisar: Aplique seu método de comparação preferido passo a passo aos dados que forneci. Mostre números ou exemplos concretos onde possível. Concluir: Declare claramente qual plano de preços você recomenda e para quais segmentos de clientes, se relevante. Explicar: Em 3–5 frases, justifique sua recomendação em linguagem simples que uma parte interessada não técnica possa entender. Dados: [inserir detalhes do plano aqui]"',
            'A versão TRACE não apenas diz "o Plano A é melhor"; ela mostra como o modelo pensou sobre os trade-offs.',
          ],
        },
        whenToUse: {
          title: 'Quando usar o Framework TRACE',
          content: [
            '**Você deve usar o Framework TRACE quando sua principal preocupação é a qualidade do raciocínio e a justificativa em vez da máxima brevidade.** O TRACE adiciona overhead em comparação com uma resposta de uma linha, mas vale a pena quando os erros são custosos.',
            'Casos de uso típicos incluem:',
          ],
          items: [
            'Avaliar opções estratégicas, trade-offs ou arquiteturas técnicas.',
            'Revisar mudanças complexas de código ou depurar problemas difíceis.',
            'Analisar descobertas de pesquisa, métricas ou feedback de usuários para tirar conclusões.',
            'Criar recomendações explicáveis que você possa compartilhar com gerentes ou clientes.',
          ],
        },
        howToWrite: {
          title: 'Como escrever um prompt TRACE',
          content: [
            '**Escrever um prompt TRACE é simples se você fizer referência explícita às cinco etapas e definir expectativas para cada uma.** Você pode começar com um modelo simples e adaptá-lo ao seu domínio.',
            'Um padrão genérico se parece com isso:',
            '"Você é [função]. Use o processo TRACE. Pensar: [como reformular e esclarecer o problema]. Raciocinar: [como explorar caminhos de solução]. Analisar: [como aplicar o raciocínio aos dados ou contexto específicos]. Concluir: [como apresentar a resposta final]. Explicar: [como justificar a resposta para um leitor humano]. Contexto/Dados: [inserir aqui]."',
            'Uma vez salvo como modelo, você só precisa mudar a função e o contexto para cada nova tarefa.',
          ],
        },
        howPQImplements: {
          title: 'Como o PromptQuorum implementa o Framework TRACE',
          content: [
            '**O PromptQuorum é uma ferramenta de despacho de IA multi-modelo que inclui o Framework TRACE como uma de suas estruturas de prompt integradas, permitindo que os usuários executem prompts com foco em raciocínio em vários modelos com um clique.** Quando você escolhe o TRACE dentro do PromptQuorum, a interface expõe campos alinhados às etapas do framework e os compõe automaticamente em uma única instrução.',
            'No PromptQuorum, você pode:',
          ],
          items: [
            'Preencher o contexto específico da tarefa enquanto o aplicativo mantém a estrutura TRACE consistente.',
            'Enviar o mesmo prompt baseado em TRACE para múltiplos modelos em paralelo, comparar seus rastros de raciocínio e ver qual provedor se alinha melhor com suas expectativas.',
            'Salvar modelos TRACE para análises recorrentes — como "revisão de trade-offs de funcionalidade" ou "análise post-incidente" — e compartilhá-los com sua equipe.',
          ],
        },
        combiningTRACE: {
          title: 'Como combinar o TRACE com outros frameworks?',
          content: [
            '**Você deve combinar o Framework TRACE com outros frameworks atribuindo cada um a uma fase do seu fluxo de trabalho: TRACE para raciocínio, outros para rascunho ou formatação.** Um padrão prático é:',
          ],
          items: [
            'Use um framework orientado à geração (por exemplo, CO-STAR ou CRAFT) para rascunhar conteúdo ou opções.',
            'Mude para o TRACE quando precisar analisar escolhas, validar premissas ou justificar uma decisão.',
            'Use o RISEN se precisar melhorar iterativamente um rascunho em vez de raciocinar sobre um novo problema.',
            'Opcionalmente, conclua com um framework de especificação (como o SPECS) se o resultado final precisar seguir uma estrutura ou esquema estrito.',
          ],
          columns: ['Framework', 'Melhor Para', 'Combinar com TRACE quando'],
          rows: [
            { 'Framework': 'CO-STAR', 'Melhor Para': 'Geração de conteúdo, rascunho', 'Combinar com TRACE quando': 'Rascunhar primeiro, depois TRACE para avaliar opções' },
            { 'Framework': 'CRAFT', 'Melhor Para': 'Conteúdo estruturado com restrições', 'Combinar com TRACE quando': 'Gerar conteúdo, depois TRACE para validar afirmações' },
            { 'Framework': 'RISEN', 'Melhor Para': 'Refinamento iterativo', 'Combinar com TRACE quando': 'TRACE para analisar, RISEN para melhorar' },
            { 'Framework': 'SPECS', 'Melhor Para': 'Esquemas de output estritos', 'Combinar com TRACE quando': 'TRACE para raciocínio, SPECS para formato final' },
            { 'Framework': 'Few-Shot', 'Melhor Para': 'Consistência de formato', 'Combinar com TRACE quando': 'Adicionar exemplos às etapas TRACE para tarefas complexas' },
          ],
        },
        howToStart: {
          title: 'Como usar o Framework TRACE',
          numberedItems: [
            '**Pensar (Think):** Peça ao modelo que reformule o problema com suas próprias palavras e identifique quaisquer ambiguidades antes de tentar uma resposta. Exemplo: "Antes de responder, reformule o que estou perguntando. Liste as variáveis-chave e quaisquer premissas que você está fazendo."',
            '**Raciocinar (Reason):** Peça ao modelo que esboce 2–3 possíveis abordagens ou hipóteses e seus trade-offs antes de se comprometer com uma. Exemplo: "Proponha 2–3 formas de abordar esse problema. Para cada uma, declare brevemente os prós e contras."',
            '**Analisar (Analyze):** Peça ao modelo que aplique sua abordagem escolhida passo a passo aos dados reais ou ao contexto que você forneceu. Mostre números ou exemplos concretos onde possível. Exemplo: "Aplique sua abordagem preferida à situação específica que forneci. Mostre cada passo."',
            '**Concluir (Conclude):** Peça ao modelo que declare a resposta final ou recomendação de forma direta e clara em uma frase. Exemplo: "Declare sua recomendação claramente. Se relevante, especifique a quais condições ou segmentos ela se aplica."',
            '**Explicar (Explain):** Peça ao modelo que justifique a conclusão em linguagem simples que uma parte interessada não técnica possa acompanhar. Exemplo: "Explique o porquê em 3–5 frases. Evite jargões. Escreva como se estivesse explicando para um gerente sênior sem formação técnica."',
          ],
        },
        commonMistakes: {
          title: 'Erros comuns com o TRACE',
          mistakes: [
            {
              mistake: 'Pular a etapa Pensar',
              problem: 'Sem reformular o problema, o modelo pode interpretar mal os requisitos e seguir com confiança pelo caminho errado.',
              fix: 'Sempre peça ao modelo que reformule o problema e liste as variáveis-chave antes de passar para Raciocinar. Isso detecta mal-entendidos cedo.',
            },
            {
              mistake: 'Não restringir o comprimento de cada etapa',
              problem: 'Prompts TRACE sem restrições podem produzir respostas extremamente longas, tornando-as mais difíceis de ler e mais custosas.',
              fix: 'Adicione restrições de comprimento por etapa: "Mantenha cada etapa em 1–2 frases" ou "Limite Analisar a 3 passos."',
            },
            {
              mistake: 'Usar o TRACE para tarefas rotineiras',
              problem: 'O TRACE adiciona latência e verbosidade. Se você só precisa de um fato rápido ou de uma transformação simples, o TRACE é excessivo.',
              fix: 'Reserve o TRACE para decisões, análises e raciocínio complexo. Use prompting zero-shot para tarefas diretas.',
            },
            {
              mistake: 'Tratar as cinco etapas como rígidas',
              problem: 'Algumas tarefas não precisam de todas as cinco etapas, então a adesão rígida desperdiça tempo e tokens.',
              fix: 'Adapte o TRACE à sua tarefa: você pode pular Raciocinar em uma tarefa de análise de dados, ou combinar Analisar e Concluir para brevidade.',
            },
            {
              mistake: 'Não comparar resultados do TRACE entre modelos',
              problem: 'Modelos diferentes raciocinam de forma diferente, então testar apenas um modelo perde oportunidades de aprender qual provedor é melhor para sua tarefa.',
              fix: 'Use o PromptQuorum ou ferramentas de despacho similares para enviar prompts TRACE a múltiplos modelos em paralelo e comparar seus rastros de raciocínio.',
            },
          ],
        },
        relatedReading: {
          title: 'Leitura relacionada',
          content: [
            'O Framework TRACE se baseia em técnicas de raciocínio mais amplas. Aqui estão guias relacionados para aprofundar seu entendimento:',
          ],
          items: [
            '[Prompting Chain-of-Thought](/pt/prompt-engineering/chain-of-thought-prompting) — A técnica fundamental que pede aos modelos que raciocinem passo a passo.',
            '[O Framework RISEN](/pt/prompt-engineering/risen-framework) — Use isso quando quiser refinamento iterativo junto com raciocínio.',
            '[O Framework CO-STAR](/pt/prompt-engineering/co-star-framework) — Um framework complementar para tarefas de rascunho e geração.',
            '[Zero-Shot vs. Few-Shot Prompting](/pt/prompt-engineering/zero-shot-vs-few-shot-prompting) — Entenda quando o TRACE é excessivo e técnicas mais simples são suficientes.',
            '[Fundamentos de Prompt Engineering](/pt/prompt-engineering/prompt-engineering-fundamentals) — Um guia fundamental para estruturar prompts de forma eficaz.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'O que significa TRACE em prompt engineering?',
              a: 'TRACE significa Pensar (Think), Raciocinar (Reason), Analisar (Analyze), Concluir (Conclude), Explicar (Explain). É um padrão de prompt estruturado que instrui um modelo de IA a mostrar cada etapa do seu raciocínio em vez de pular diretamente para uma resposta final.',
            },
            {
              q: 'Quando devo usar o Framework TRACE?',
              a: 'Use o TRACE quando a qualidade do raciocínio e a justificativa importam mais do que a brevidade: decisões estratégicas, revisões de arquitetura técnica, depuração complexa e situações em que você precisa mostrar às partes interessadas como uma conclusão foi alcançada.',
            },
            {
              q: 'Como o TRACE difere do prompting Chain-of-Thought?',
              a: 'Chain-of-Thought é uma técnica geral que pede aos modelos que raciocinem passo a passo. O TRACE é uma estrutura específica de 5 etapas (Pensar, Raciocinar, Analisar, Concluir, Explicar) que produz rastros de raciocínio consistentes e reproduzíveis entre tarefas e modelos.',
            },
            {
              q: 'Como o TRACE difere do Framework RISEN?',
              a: 'O TRACE foca em tornar o processo de raciocínio explícito para que você possa auditá-lo. O RISEN foca em melhorar iterativamente um rascunho existente. Use o TRACE para entender como um modelo pensa; use o RISEN para polir a qualidade do output.',
            },
            {
              q: 'Posso usar o TRACE em um único prompt ou preciso de múltiplos turnos?',
              a: 'Ambos funcionam. Um único prompt que lista as cinco etapas é mais rápido. Múltiplos turnos permitem pausar e redirecionar em cada etapa, se necessário. Para máximo controle, muitos usuários enviam os passos do TRACE separadamente.',
            },
            {
              q: 'Como evito que o TRACE produza respostas muito longas?',
              a: 'Adicione restrições de comprimento por etapa. Por exemplo: "Mantenha cada etapa em 1–2 frases." Isso obriga o modelo a ser conciso enquanto ainda mostra seu trabalho.',
            },
            {
              q: 'O TRACE pode ajudar a detectar erros do modelo?',
              a: 'Sim. Ao tornar o raciocínio visível, o TRACE permite identificar premissas falsas, lacunas lógicas e cálculos incorretos que seriam invisíveis em uma resposta só com a resposta final.',
            },
            {
              q: 'Como o PromptQuorum suporta prompts TRACE?',
              a: 'O PromptQuorum inclui o TRACE como estrutura de prompt integrada. Você preenche o contexto específico da tarefa em campos estruturados alinhados às cinco etapas. O PromptQuorum então envia o prompt composto a múltiplos modelos em paralelo para que você possa comparar seus rastros de raciocínio lado a lado.',
            },
          ],
        },
        sources: {
          title: 'Fontes',
          content: [
            'Este artigo resume as melhores práticas atuais em prompt engineering e raciocínio de IA. O padrão do Framework TRACE foi usado em pesquisa acadêmica e prática industrial para tornar o raciocínio dos modelos de linguagem transparente.',
          ],
          items: [
            'Wei, J., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *arXiv:2201.11903*. [Leia no arXiv](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). "How to use the OpenAI API." [Documentação da API OpenAI](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). "Prompt Engineering Techniques." [Anthropic Docs](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. Ferramentas de implantação e raciocínio de LLM de código aberto.',
          ],
        },
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
        'url': 'https://www.promptquorum.com/fr/prompt-engineering/trace-framework',
        headline: 'Le Framework TRACE',
        description: 'Comment fonctionne le Framework TRACE (Penser, Raisonner, Analyser, Conclure, Expliquer), quand l\'utiliser, et comment PromptQuorum l\'intègre.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['Framework TRACE', 'raisonnement IA', 'frameworks de prompts', 'ingénierie des prompts', 'PromptQuorum', 'modèles de langage'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
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
          id: 'faq',
          title: 'Questions fréquemment posées',
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
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: 'La présentation ci-dessous couvre : comment TRACE (Think, Reason, Analyze, Conclude, Explain) force l\'IA à montrer son raisonnement, la méthode en 5 étapes avec exemples de bon et mauvais prompt, quand combiner TRACE avec CO-STAR, CRAFT, RISEN et SPECS, et 5 erreurs courantes. Téléchargez le PDF comme fiche de référence TRACE.',
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
        'url': 'https://www.promptquorum.com/ja/prompt-engineering/trace-framework',
        headline: 'TRACEフレームワーク',
        description: 'TRACEフレームワーク（考える・推論する・分析する・結論を出す・説明する）の仕組み、活用場面、PromptQuorumでの実装方法。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACEフレームワーク', 'プロンプトフレームワーク', 'プロンプト・エンジニアリング', '推論', 'PromptQuorum', '大規模言語モデル'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
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
          id: 'faq',
          title: 'よくある質問',
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
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: '以下のスライドでは、TRACEフレームワーク（Think→Reason→Analyze→Conclude→Explain）がAIの推論を可視化する仕組み、5段階メソッドと悪い・良いプロンプトの比較例、CO-STAR・CRAFT・RISEN・SPECSとの組み合わせ方法、よくある5つのミスを解説します。PDFとしてTRACEフレームワーク参照カードをダウンロードできます。',
    },
    zh: {
      theme: 'Frameworks',
      title: 'TRACE框架',
      seoTitle: 'TRACE框架完整指南：用5步让AI推理过程全程透明（2026年实战版）',
      intro: '**TRACE框架将AI模型的推理过程从"黑盒"变成可见的逐步思考。** 通过思考（Think）→推理（Reason）→分析（Analyze）→结论（Conclude）→解释（Explain）5个步骤，你可以在错误影响决策之前发现模型的逻辑漏洞和错误假设。PromptQuorum原生集成了TRACE框架，所有用户都可以直接使用。',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '8分钟阅读',
      educationalLevel: 'Intermediate',
      primaryTerm: 'TRACE框架',
      metaDescription: 'TRACE框架（思考→推理→分析→结论→解释）让AI推理全程透明化。复杂决策、战略分析、技术审查的实战方法与对比示例，提升可信度和可解释性。',
      toc: [
        { anchor: 'key-takeaways', label: '核心要点' },
        { anchor: 'what-is-trace', label: 'TRACE框架是什么' },
        { anchor: 'why-trace-matters', label: '为什么TRACE框架很重要' },
        { anchor: 'five-stages', label: 'TRACE的五个阶段是什么？' },
        { anchor: 'bad-vs-good-example', label: '示例：差的与好的TRACE提示词' },
        { anchor: 'when-to-use', label: '何时使用TRACE框架' },
        { anchor: 'how-to-write', label: '如何编写TRACE提示词' },
        { anchor: 'how-promptquorum-implements', label: 'PromptQuorum如何实现TRACE框架' },
        { anchor: 'combining-trace', label: '如何将TRACE与其他框架结合使用？' },
        { anchor: 'how-to-start', label: '如何使用TRACE框架' },
        { anchor: 'common-mistakes', label: 'TRACE的常见错误' },
        { anchor: 'related-reading', label: '延伸阅读' },
        { anchor: 'faq', label: '常见问题' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/zh/prompt-engineering/trace-framework',
        headline: 'TRACE框架',
        description: 'TRACE框架（思考、推理、分析、结论、解释）的工作原理、适用场景、以及PromptQuorum中的实现方式。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACE框架', '提示词框架', '提示词工程', '推理', 'PromptQuorum', '大语言模型'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
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
          title: 'TRACE的五个阶段是什么？',
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
          title: '如何将TRACE与其他框架结合使用？',
          content: [
            '**TRACE最好和其他框架组合，形成「生成→验证→定型」的完整工作流。**',
          ],
          items: [
            '初稿生成：用Single Step或CO-STAR快速生成初版',
            '逻辑验证：用TRACE深入审视推理是否严密、假设是否合理',
            '最终定型：如果输出需要特定格式（JSON、表格等），用SPECS来标准化',
          ],
          columns: ['框架', '最适合', '与TRACE结合使用的时机'],
          rows: [
            { '框架': 'CO-STAR', '最适合': '内容生成、起草', '与TRACE结合使用的时机': '先起草，再用TRACE评估选项' },
            { '框架': 'CRAFT', '最适合': '结构化内容与约束条件', '与TRACE结合使用的时机': '生成内容，再用TRACE验证' },
            { '框架': 'RISEN', '最适合': '迭代改进', '与TRACE结合使用的时机': '用TRACE分析，用RISEN改进' },
            { '框架': 'SPECS', '最适合': '严格输出架构', '与TRACE结合使用的时机': 'TRACE用于推理，SPECS用于最终格式' },
            { '框架': 'Few-Shot', '最适合': '格式一致性', '与TRACE结合使用的时机': '为复杂任务的TRACE步骤添加示例' },
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

        commonMistakes: {
          title: 'TRACE的常见错误',
          mistakes: [
            {
              mistake: '跳过「思考」步骤',
              problem: '不重述问题直接进入推理，模型容易误解需求并自信地走错方向。',
              fix: '始终让模型重述问题并列出关键变量，提前发现误解。',
            },
            {
              mistake: '不限制每步的长度',
              problem: '无限制的TRACE会生成冗长答案，难以阅读且成本高。',
              fix: '为每步添加长度限制：「每步最多2句话」或「分析部分最多3步」。',
            },
            {
              mistake: '对简单问题用TRACE',
              problem: 'TRACE增加延迟和冗长。简单查询或转换不适合用TRACE。',
              fix: '保留TRACE用于决策、分析和复杂推理。简单任务用零样本提示。',
            },
            {
              mistake: '把5个步骤当成硬性规则',
              problem: '有些任务不需要全部5步，严格遵守会浪费时间和tokens。',
              fix: '根据任务灵活调整：数据分析可跳过「推理」，简洁性可合并「分析」和「结论」。',
            },
            {
              mistake: '不在模型间比对TRACE结果',
              problem: '不同模型推理方式不同，只测试一个模型错过了找最佳提供商的机会。',
              fix: '用PromptQuorum或类似工具并行发送TRACE提示给多个模型，对比推理过程。',
            },
          ],
        },

        relatedReading: {
          title: '延伸阅读',
          content: [
            'TRACE框架建立在更广泛的推理技术之上。这里有相关指南帮助你加深理解：',
          ],
          items: [
            '[Chain-of-Thought提示](/prompt-engineering/chain-of-thought-prompting) — 让模型逐步推理的基础技术。',
            '[RISEN框架](/prompt-engineering/risen-framework) — 当你需要和推理一起迭代改进时使用。',
            '[CO-STAR框架](/prompt-engineering/co-star-framework) — 用于起草和生成任务的辅助框架。',
            '[零样本 vs 少样本提示](/prompt-engineering/zero-shot-vs-few-shot-prompting) — 了解什么时候TRACE太重了，更简单的技术就够用。',
            '[提示工程基础](/prompt-engineering/prompt-engineering-fundamentals) — 有效结构化提示的基础指南。',
          ],
        },

        faq: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: '提示工程中TRACE代表什么？',
              a: 'TRACE是Think（思考）、Reason（推理）、Analyze（分析）、Conclude（结论）、Explain（解释）的首字母。是一个结构化的提示模式，让AI模型展示推理的每一步，而不仅仅是最终答案。',
            },
            {
              q: '什么时候应该使用TRACE框架？',
              a: '当推理质量和论证比速度更重要时使用TRACE：战略决策、技术评审、复杂调试，以及需要向利益相关者展示如何得出结论的情况。',
            },
            {
              q: 'TRACE与Chain-of-Thought提示有什么不同？',
              a: 'Chain-of-Thought是笼统的「逐步展示推理」技术。TRACE是具体的5步结构，能在任务和模型间产生一致、可重复的推理迹象。',
            },
            {
              q: 'TRACE与RISEN框架有什么不同？',
              a: 'TRACE侧重让推理过程明确可审计。RISEN侧重逐步改进现有草稿。要理解模型思考→TRACE，要提高质量→RISEN。',
            },
            {
              q: '能在一个提示词中用TRACE，还是需要多轮提示？',
              a: '都可以。单个提示词列出全5步更快；多轮可让你在各步停下来调整。要最大化控制，很多用户分步发送各TRACE步骤。',
            },
            {
              q: '怎样防止TRACE生成太长的答案？',
              a: '为各步设置长度限制。比如：「每步最多2句话」强制模型简洁，同时保持推理透明度。',
            },
            {
              q: 'TRACE能帮助找到模型错误吗？',
              a: '能。通过可见化推理过程，TRACE让你发现错误假设、逻辑跳跃、计算错误——这些在只看最终答案时看不见。',
            },
            {
              q: 'PromptQuorum怎样支持TRACE提示？',
              a: 'PromptQuorum把TRACE作为内置提示结构。你在对齐5步的结构化字段中填入任务上下文。PromptQuorum随后把提示并行发给多个模型，让你并排对比推理迹象。',
            },
          ],
        },

        sources: {
          title: '参考来源',
          content: [
            '本文总结了提示工程和AI推理的最新最佳实践。TRACE框架模式已在学术研究和业界实践中用于使语言模型推理透明化。',
          ],
          items: [
            'Wei, J., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *arXiv:2201.11903*. [在arXiv上阅读](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). "How to use the OpenAI API." [OpenAI API文档](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). "Prompt Engineering Techniques." [Anthropic文档](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. 开源LLM部署与推理工具。',
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
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: '以下幻灯片涵盖：TRACE框架（Think→Reason→Analyze→Conclude→Explain）如何让AI展示推理过程、5阶段方法与好坏提示词对比示例、何时与CO-STAR、CRAFT、RISEN和SPECS组合使用，以及5个常见错误。下载PDF作为TRACE框架参考卡。',
    },
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'TRACE 프레임워크',
      seoTitle: 'TRACE 프레임워크: AI 추론을 가시화하는 프롬프트 2026',
      intro: '**TRACE 프레임워크는 AI의 추론 과정을 블랙박스에서 단계별로 가시화된 프로세스로 전환합니다.** 모델에게 Think(생각), Reason(추론), Analyze(분석), Conclude(결론), Explain(설명)을 수행하도록 요청함으로써, 논리가 성립되는 지점과 무너지는 지점을 직접 확인할 수 있습니다. PromptQuorum은 TRACE 프레임워크를 기본 옵션으로 제공하며, 모든 사용자가 앱 내에서 직접 선택하여 활용할 수 있습니다.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-28',
      readTime: '8분 읽기',
      educationalLevel: 'Intermediate',
      primaryTerm: 'TRACE Framework',
      metaDescription: 'TRACE 프레임워크(Think, Reason, Analyze, Conclude, Explain)는 AI가 추론 과정을 보여주도록 강제합니다. 사용 시점, TRACE 프롬프트 작성법, 투명성의 중요성을 알아보십시오.',
      toc: [
        { anchor: 'key-takeaways', label: '핵심 요점' },
        { anchor: 'what-is-trace', label: 'TRACE 프레임워크란 무엇인가' },
        { anchor: 'why-trace-matters', label: 'TRACE 프레임워크가 중요한 이유' },
        { anchor: 'five-stages', label: 'TRACE의 다섯 단계는 무엇인가' },
        { anchor: 'bad-vs-good-example', label: '예시: 나쁜 TRACE 프롬프트 vs 좋은 TRACE 프롬프트' },
        { anchor: 'when-to-use', label: 'TRACE 프레임워크를 사용해야 할 때' },
        { anchor: 'how-to-write', label: 'TRACE 프롬프트 작성 방법' },
        { anchor: 'how-promptquorum-implements', label: 'PromptQuorum의 TRACE 프레임워크 구현 방식' },
        { anchor: 'combining-trace', label: 'TRACE를 다른 프레임워크와 결합하는 방법' },
        { anchor: 'how-to-start', label: 'TRACE 프레임워크 사용 방법' },
        { anchor: 'common-mistakes', label: 'TRACE 사용 시 흔한 실수' },
        { anchor: 'related-reading', label: '관련 자료' },
        { anchor: 'faq', label: 'FAQ' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/trace-framework',
        headline: 'TRACE 프레임워크',
        description: 'TRACE 프레임워크(Think, Reason, Analyze, Conclude, Explain)의 작동 원리, 사용 시점, 그리고 PromptQuorum이 TRACE를 기본 옵션으로 제공하는 방법.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-28',
        keywords: ['TRACE Framework', 'Think Reason Analyze Conclude Explain (사고-추론-분석-결론-설명)', 'prompt frameworks', 'prompt engineering', 'reasoning prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
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
          { '@type': 'Question', 'name': '프롬프트 엔지니어링에서 TRACE는 무엇을 의미합니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE는 Think, Reason, Analyze, Conclude, Explain의 약자입니다. AI 모델이 최종 답변으로 바로 넘어가지 않고 추론의 각 단계를 보여주도록 지시하는 구조화된 프롬프트 패턴입니다.' } },
          { '@type': 'Question', 'name': 'TRACE 프레임워크는 언제 사용해야 합니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': '간결함보다 추론의 질과 근거가 더 중요한 경우에 TRACE를 사용하십시오. 전략적 의사결정, 기술 아키텍처 검토, 복잡한 디버깅, 그리고 이해관계자에게 결론에 이른 과정을 보여주어야 하는 상황이 이에 해당합니다.' } },
          { '@type': 'Question', 'name': 'TRACE는 Chain-of-Thought 프롬프팅과 어떻게 다릅니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Chain-of-Thought은 모델에게 단계적으로 추론하도록 요청하는 일반적인 기법입니다. TRACE는 작업과 모델 전반에 걸쳐 일관되고 재현 가능한 추론 흔적을 생성하는 특정 5단계 구조(Think, Reason, Analyze, Conclude, Explain)입니다.' } },
          { '@type': 'Question', 'name': 'TRACE는 RISEN 프레임워크와 어떻게 다릅니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'TRACE는 감사할 수 있도록 추론 과정을 명시적으로 만드는 데 초점을 맞춥니다. RISEN은 기존 초안을 반복적으로 개선하는 데 초점을 맞춥니다. 모델의 사고 방식을 이해하려면 TRACE를, 결과물의 품질을 다듬으려면 RISEN을 사용하십시오.' } },
          { '@type': 'Question', 'name': 'TRACE를 단일 프롬프트에서 사용할 수 있습니까, 아니면 여러 턴이 필요합니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': '두 방법 모두 가능합니다. 다섯 단계를 모두 나열한 단일 프롬프트가 더 빠릅니다. 여러 턴은 각 단계에서 필요에 따라 일시 중지하고 방향을 재조정할 수 있습니다. 최대한의 제어를 원하는 많은 사용자들은 TRACE 단계를 별도로 전송합니다.' } },
          { '@type': 'Question', 'name': 'TRACE가 과도하게 긴 응답을 생성하지 않도록 방지하는 방법은 무엇입니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': '단계별 길이 제약을 추가하십시오. 예를 들어 "각 단계를 1~2문장으로 유지하십시오."라고 지시하면 모델이 추론 과정을 보여주면서도 간결하게 작성하도록 강제할 수 있습니다.' } },
          { '@type': 'Question', 'name': 'TRACE는 모델 오류를 감지하는 데 도움이 됩니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': '그렇습니다. 추론을 가시화함으로써 TRACE는 최종 답변만 제공하는 응답에서는 보이지 않을 잘못된 가정, 논리적 공백, 잘못된 계산을 발견할 수 있게 합니다.' } },
          { '@type': 'Question', 'name': 'PromptQuorum은 TRACE 프롬프트를 어떻게 지원합니까?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum은 TRACE를 기본 프롬프트 구조로 포함합니다. 다섯 단계에 맞춰 정렬된 구조화된 필드에 작업별 컨텍스트를 입력하면 됩니다. PromptQuorum은 구성된 프롬프트를 여러 모델에 병렬로 전송하여 추론 흔적을 나란히 비교할 수 있게 합니다.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'TRACE 프롬프트 작성 방법',
        'description': 'AI 추론을 투명하고 감사 가능하게 만들기 위해 TRACE 프레임워크(Think, Reason, Analyze, Conclude, Explain)를 사용하여 프롬프트를 구조화하는 단계별 가이드.',
        'step': [
          { '@type': 'HowToStep', 'name': 'Think', 'text': '모델에게 문제를 자신의 말로 재서술하고 답변을 시도하기 전에 핵심 변수와 가정을 나열하도록 요청하십시오.' },
          { '@type': 'HowToStep', 'name': 'Reason', 'text': '모델에게 하나를 선택하기 전에 트레이드오프와 함께 가능한 2~3가지 접근법이나 가설을 제안하도록 요청하십시오.' },
          { '@type': 'HowToStep', 'name': 'Analyze', 'text': '모델에게 제공한 실제 데이터나 컨텍스트에 선택한 접근법을 단계별로 적용하고, 숫자나 구체적인 예시를 보여주도록 요청하십시오.' },
          { '@type': 'HowToStep', 'name': 'Conclude', 'text': '모델에게 최종 답변이나 권고사항을 한 문장으로 직접적이고 명확하게 서술하도록 요청하십시오.' },
          { '@type': 'HowToStep', 'name': 'Explain', 'text': '모델에게 비기술적인 이해관계자가 이해할 수 있는 평이한 언어로 결론을 정당화하도록 요청하십시오.' },
        ],
      },
      gammaEmbedUrl: '/presentations/trace-framework-static.html',
      gammaDescription: '아래 슬라이드 덱은 다음 내용을 다룹니다: TRACE(Think, Reason, Analyze, Conclude, Explain)가 AI로 하여금 단계적으로 추론 과정을 보여주도록 강제하는 방법, 나쁜 프롬프트 vs 좋은 프롬프트 예시를 포함한 5단계 방법론, TRACE를 CO-STAR, CRAFT, RISEN, SPECS와 짝지어 사용하는 방법, 그리고 피해야 할 5가지 흔한 실수. TRACE 프레임워크 참고 카드로 PDF를 다운로드하십시오.',
      leadAnswerBlock: 'TRACE 프레임워크는 AI 모델이 최종 답변만 제시하는 대신 각 추론 단계를 보여주도록 강제하는 구조화된 프롬프트 패턴입니다. Think(생각), Reason(추론), Analyze(분석), Conclude(결론), Explain(설명)의 다섯 단계로 구성되며, 추론의 질과 감사 가능성이 간결함보다 중요한 복잡한 결정, 기술 분석, 또는 이해관계자에게 결론을 정당화해야 하는 상황에 가장 적합합니다.',
      sections: {
        keyTakeaways: {
          title: '핵심 요점',
          isTldr: true,
          items: [
            'TRACE는 Think, Reason, Analyze, Conclude, Explain의 약자로, AI 모델이 추론의 각 단계를 보여주도록 강제하는 5단계 프롬프트 패턴입니다.',
            '간결함보다 추론의 질이 더 중요한 경우에 TRACE를 사용하십시오. 전략적 의사결정, 아키텍처 트레이드오프, 복잡한 디버깅, 또는 이해관계자에게 정당화해야 하는 모든 결과물이 이에 해당합니다.',
            'TRACE는 잘못된 가정과 논리적 공백을 의사결정에 영향을 미치기 전에 가시화함으로써 모델 결과물에 대한 맹목적인 신뢰를 줄입니다.',
            'TRACE 프롬프트는 다섯 단계가 모두 정의된 단일 메시지로 작성하거나, 더 많은 제어를 위해 턴별로 전송할 수 있습니다.',
            'PromptQuorum은 TRACE를 기본 구조로 제공합니다. 컨텍스트를 입력하고, 여러 모델에 병렬로 전송하여 추론 흔적을 나란히 비교하십시오.',
          ],
        },
        whatIsTRACE: {
          title: 'TRACE 프레임워크란 무엇인가',
          content: [
            '**TRACE 프레임워크는 대형 언어 모델이 최종 답변만이 아닌 추론 과정 전체를 보여주도록 강제하는 추론 우선 프롬프트 패턴입니다.** 기술 분석, 전략, 복잡한 문제 해결 등 모델이 결과에 어떻게 도달했는지가 중요한 작업을 위해 설계되었습니다.',
            'TRACE의 일반적인 해석은 다음과 같습니다:',
            'TRACE는 GPT-5(OpenAI), Claude 4.8 Opus(Anthropic), Gemini 3 Pro(Google DeepMind), 그리고 Ollama 또는 LM Studio를 통한 로컬 모델 등 모든 주요 모델에서 작동합니다. 단, 모델마다 다섯 단계를 따르는 수준이 다릅니다. 동일한 TRACE 프롬프트를 여러 모델에서 테스트하면 특정 작업에 대해 어떤 제공업체가 가장 투명하게 추론하는지 확인할 수 있습니다.',
          ],
          items: [
            'Think: 문제를 자신의 말로 재서술하고 해석합니다.',
            'Reason: 가능한 접근법이나 가설을 탐색합니다.',
            'Analyze: 해당 접근법을 구체적인 데이터나 상황에 적용합니다.',
            'Conclude: 최종 답변이나 권고사항을 명확하게 서술합니다.',
            'Explain: 사람이 쉽게 따를 수 있는 방식으로 결론을 정당화합니다.',
          ],
        },
        whyTRACEMatters: {
          title: 'TRACE 프레임워크가 중요한 이유',
          content: [
            '**TRACE 프레임워크는 추론 경로를 명시적으로 만듦으로써 모델 결과물에 대한 맹목적인 신뢰를 줄이기 때문에 중요합니다.** 모델이 각 단계를 설명하면 잘못 이해된 요구사항, 약한 가정, 또는 논리의 공백을 조기에 발견할 수 있습니다. 이는 더 넓은 [chain-of-thought 프롬프팅](/prompt-engineering/chain-of-thought-prompting) 원칙과 연결됩니다. TRACE는 그 기법의 구조화되고 재현 가능한 형태입니다.',
            '다음과 같은 경우에 특히 유용합니다:',
          ],
          items: [
            '모델 결과물을 기반으로 비즈니스 또는 기술적 의사결정을 내리는 경우.',
            '서로 다른 모델이 동일한 문제를 어떻게 추론하는지 비교하고 싶은 경우.',
            '선택을 정당화하기 위해 팀원이나 이해관계자에게 보여줄 수 있는 기록이 필요한 경우.',
          ],
        },
        fiveStages: {
          title: 'TRACE의 다섯 단계는 무엇인가',
          content: [
            '**좋은 TRACE 프롬프트는 작업과 모델 전반에 걸쳐 추론 흔적이 일관되도록 각 단계에서 모델이 수행해야 할 작업을 명확히 지시합니다.** 단계를 명확하게 유지하면서 하나의 메시지로 압축할 수 있습니다. 단순한 작업의 경우 [zero-shot 프롬프팅](/prompt-engineering/zero-shot-vs-few-shot-prompting)이 더 빠릅니다. 감사 가능성이 필요한 경우에 TRACE를 사용하십시오.',
            '일반적인 단계 정의:',
          ],
          items: [
            'Think: 작업을 명확히 하고, 핵심 변수를 나열하며, 모호한 점을 파악합니다.',
            'Reason: 잠재적인 방법, 트레이드오프, 또는 해결 경로를 설명합니다.',
            'Analyze: 선택한 방법을 실제 입력에 단계별로 적용합니다.',
            'Conclude: 질문과 연결된 직접적인 답변이나 권고사항을 제공합니다.',
            'Explain: "왜"에 초점을 맞추어 평이한 언어로 논리를 요약합니다.',
          ],
        },
        badVsGoodExample: {
          title: '예시: 나쁜 TRACE 프롬프트 vs 좋은 TRACE 프롬프트',
          content: [
            '**TRACE 프레임워크의 이점은 동일한 작업에 대한 일반적인 요청과 TRACE 기반 요청을 비교할 때 명확해집니다.** 두 가지 제품 가격 옵션 중 선택하는 간단한 예시를 살펴보겠습니다.',
            '**[나쁜 프롬프트]**',
            '"이 두 가지 요금제 중 어느 것이 더 낫습니까?"',
            '**[좋은 프롬프트]**',
            '"당신은 SaaS 가격 분석가입니다. 이 결정에 TRACE 프로세스를 사용하십시오. Think: 문제를 재서술하고 중요한 핵심 요소를 나열하십시오(예: 수익, 이탈 위험, 고객 인식). Reason: 두 가지 요금제를 비교하는 2~3가지 가능한 방법을 제안하십시오(예: 손익분기점 분석, 업그레이드 경로, 인지된 공정성). Analyze: 제가 제공하는 데이터에 선호하는 비교 방법을 단계별로 적용하십시오. 가능한 경우 숫자나 구체적인 예시를 보여주십시오. Conclude: 어떤 요금제를 권장하는지, 해당되는 경우 어떤 고객 세그먼트에 대해 권장하는지 명확히 서술하십시오. Explain: 비기술적인 이해관계자가 이해할 수 있는 평이한 언어로 3~5문장으로 권고사항을 정당화하십시오. 데이터: [요금제 세부 정보를 여기에 입력하십시오]"',
            'TRACE 버전은 단순히 "플랜 A가 낫습니다"라고 말하는 것이 아니라, 모델이 트레이드오프를 어떻게 생각했는지 보여줍니다.',
          ],
        },
        whenToUse: {
          title: 'TRACE 프레임워크를 사용해야 할 때',
          content: [
            '**주된 관심사가 최대한의 간결함이 아닌 추론의 질과 정당성일 때 TRACE 프레임워크를 사용해야 합니다.** TRACE는 한 줄 답변에 비해 오버헤드가 추가되지만, 오류가 비용이 클 때 그 가치를 발휘합니다.',
            '일반적인 사용 사례는 다음과 같습니다:',
          ],
          items: [
            '전략적 옵션, 트레이드오프, 또는 기술 아키텍처 평가.',
            '복잡한 코드 변경 검토 또는 까다로운 문제 디버깅.',
            '연구 결과, 지표, 또는 사용자 피드백을 분석하여 결론 도출.',
            '관리자나 고객과 공유할 수 있는 설명 가능한 권고사항 작성.',
          ],
        },
        howToWrite: {
          title: 'TRACE 프롬프트 작성 방법',
          content: [
            '**다섯 단계를 명시적으로 참조하고 각 단계에 대한 기대치를 정의하면 TRACE 프롬프트 작성은 간단합니다.** 간단한 템플릿에서 시작하여 도메인에 맞게 조정할 수 있습니다.',
            '일반적인 패턴은 다음과 같습니다:',
            '"당신은 [역할]입니다. TRACE 프로세스를 사용하십시오. Think: [문제를 재서술하고 명확히 하는 방법]. Reason: [해결 경로를 탐색하는 방법]. Analyze: [특정 데이터나 컨텍스트에 추론을 적용하는 방법]. Conclude: [최종 답변을 제시하는 방법]. Explain: [인간 독자를 위해 답변을 정당화하는 방법]. 컨텍스트/데이터: [여기에 입력하십시오]."',
            '템플릿으로 저장하면 각 새로운 작업에 대해 역할과 컨텍스트만 변경하면 됩니다. TRACE 프롬프트를 워크플로에 통합하기 전에 [Anthropic의 Console](https://docs.anthropic.com/) 또는 [OpenAI의 Playground](https://platform.openai.com/playground)에서 테스트하여 모델이 명확하고 감사 가능한 추론 흔적을 생성하는지 확인하십시오.',
          ],
        },
        howPQImplements: {
          title: 'PromptQuorum의 TRACE 프레임워크 구현 방식',
          content: [
            '**PromptQuorum은 사용자가 한 번의 클릭으로 여러 모델에 걸쳐 추론 우선 프롬프트를 실행할 수 있도록 TRACE 프레임워크를 기본 프롬프트 구조 중 하나로 포함하는 멀티모델 AI 디스패치 도구입니다.** PromptQuorum 내에서 TRACE를 선택하면, 인터페이스가 프레임워크의 단계에 맞춰 정렬된 필드를 노출하고 자동으로 단일 지시로 구성합니다.',
            'PromptQuorum에서 다음을 수행할 수 있습니다:',
          ],
          items: [
            '앱이 TRACE 구조를 일관되게 유지하는 동안 작업별 컨텍스트를 입력합니다.',
            '동일한 TRACE 기반 프롬프트를 여러 모델에 병렬로 전송하고, 추론 흔적을 비교하며, 어떤 제공업체가 기대에 가장 잘 부합하는지 확인합니다.',
            '"기능 트레이드오프 검토" 또는 "인시던트 사후 분석"과 같은 반복적인 분석을 위한 TRACE 템플릿을 저장하고 팀 전체에 공유합니다.',
          ],
        },
        combiningTRACE: {
          title: 'TRACE를 다른 프레임워크와 결합하는 방법',
          content: [
            '**워크플로의 각 단계에 프레임워크를 정렬하여 TRACE 프레임워크를 다른 프레임워크와 결합해야 합니다. 추론에는 TRACE를, 초안 작성이나 형식화에는 다른 것을 사용하십시오.** 실용적인 패턴은 다음과 같습니다:',
          ],
          items: [
            '콘텐츠나 옵션을 초안 작성하는 데 생성 지향 프레임워크(예: [CO-STAR](/prompt-engineering/co-star-framework) 또는 CRAFT)를 사용합니다.',
            '선택을 분석하거나, 가정을 검증하거나, 결정을 정당화해야 할 때 TRACE로 전환합니다.',
            '새로운 문제를 추론하는 것이 아니라 초안을 반복적으로 개선해야 한다면 [RISEN](/prompt-engineering/risen-framework)을 사용합니다.',
            '최종 결과물이 엄격한 구조나 스키마를 따라야 하는 경우 선택적으로 사양 스타일 프레임워크(예: SPECS)로 마무리합니다.',
          ],
          columns: ['Framework', '가장 적합한 용도', 'TRACE와 함께 사용하는 경우'],
          rows: [
            { 'Framework': 'CO-STAR', '가장 적합한 용도': '콘텐츠 생성, 초안 작성', 'TRACE와 함께 사용하는 경우': '먼저 초안 작성 후, 옵션 평가에 TRACE 사용' },
            { 'Framework': 'CRAFT', '가장 적합한 용도': '제약이 있는 구조화된 콘텐츠', 'TRACE와 함께 사용하는 경우': '콘텐츠 생성 후, 주장 검증에 TRACE 사용' },
            { 'Framework': 'RISEN', '가장 적합한 용도': '반복적 개선', 'TRACE와 함께 사용하는 경우': '분석에 TRACE, 개선에 RISEN 사용' },
            { 'Framework': 'SPECS', '가장 적합한 용도': '엄격한 출력 스키마', 'TRACE와 함께 사용하는 경우': '추론에 TRACE, 최종 형식에 SPECS 사용' },
            { 'Framework': 'Few-Shot', '가장 적합한 용도': '형식 일관성', 'TRACE와 함께 사용하는 경우': '복잡한 작업을 위해 TRACE 단계에 예시 추가' },
          ],
        },

        howToStart: {
          title: 'TRACE 프레임워크 사용 방법',
          numberedItems: [
            '**Think:** 모델에게 답변을 시도하기 전에 문제를 자신의 말로 재서술하고 모호한 점을 파악하도록 요청하십시오. 예시: "답변 전에 제가 무엇을 요청하는지 재서술하십시오. 핵심 변수와 가정하고 있는 내용을 나열하십시오."',
            '**Reason:** 모델에게 하나를 선택하기 전에 2~3가지 가능한 접근법이나 가설과 그 트레이드오프를 설명하도록 요청하십시오. 예시: "이 문제에 접근하는 2~3가지 방법을 제안하십시오. 각각에 대해 장단점을 간략히 서술하십시오."',
            '**Analyze:** 모델에게 선택한 접근법을 제공한 실제 데이터나 컨텍스트에 단계별로 적용하도록 요청하십시오. 가능한 경우 숫자나 구체적인 예시를 보여주십시오. 예시: "선호하는 접근법을 제가 제시한 특정 상황에 적용하십시오. 각 단계를 보여주십시오."',
            '**Conclude:** 모델에게 최종 답변이나 권고사항을 한 문장으로 직접적이고 명확하게 서술하도록 요청하십시오. 예시: "권고사항을 명확하게 서술하십시오. 해당되는 경우 어떤 조건이나 세그먼트에 적용되는지 명시하십시오."',
            '**Explain:** 모델에게 비기술적인 이해관계자가 이해할 수 있는 평이한 언어로 결론을 정당화하도록 요청하십시오. 예시: "3~5문장으로 이유를 설명하십시오. 전문 용어를 피하십시오. 기술적 배경이 없는 고위 관리자에게 설명하듯이 작성하십시오."',
          ],
        },

        commonMistakes: {
          title: 'TRACE 사용 시 흔한 실수',
          mistakes: [
            {
              mistake: 'Think 단계 건너뛰기',
              problem: '문제를 재서술하지 않으면 모델이 요구사항을 잘못 해석하고 자신 있게 잘못된 방향으로 진행할 수 있습니다.',
              fix: '항상 모델에게 Reason으로 넘어가기 전에 문제를 재서술하고 핵심 변수를 나열하도록 요청하십시오. 이렇게 하면 오해를 조기에 발견할 수 있습니다.',
            },
            {
              mistake: '각 단계의 길이를 제한하지 않음',
              problem: '제한이 없는 TRACE 프롬프트는 매우 긴 응답을 생성할 수 있어 읽기 어렵고 비용이 더 많이 듭니다.',
              fix: '단계별 길이 제약을 추가하십시오: "각 단계를 1~2문장으로 유지하십시오" 또는 "Analyze를 3단계로 제한하십시오."',
            },
            {
              mistake: '일상적인 작업에 TRACE 사용',
              problem: 'TRACE는 지연 시간과 장황함을 추가합니다. 단순한 사실이나 간단한 변환만 필요한 경우 TRACE는 과도합니다.',
              fix: '의사결정, 분석, 복잡한 추론을 위해 TRACE를 예약하십시오. 단순한 작업에는 zero-shot 프롬프팅을 사용하십시오.',
            },
            {
              mistake: '다섯 단계를 엄격하게 적용',
              problem: '일부 작업은 다섯 단계가 모두 필요하지 않으므로 엄격하게 따르면 시간과 토큰이 낭비됩니다.',
              fix: '작업에 맞게 TRACE를 조정하십시오. 데이터 분석 작업에서는 Reason을 건너뛰거나, 간결함을 위해 Analyze와 Conclude를 결합할 수 있습니다.',
            },
            {
              mistake: '모델 간 TRACE 결과를 비교하지 않음',
              problem: '모델마다 추론 방식이 다르므로 하나의 모델만 테스트하면 어떤 제공업체가 작업에 가장 적합한지 파악할 기회를 놓칩니다.',
              fix: 'PromptQuorum 또는 유사한 디스패치 도구를 사용하여 TRACE 프롬프트를 여러 모델에 병렬로 전송하고 추론 흔적을 비교하십시오.',
            },
          ],
        },

        relatedReading: {
          title: '관련 자료',
          content: [
            'TRACE 프레임워크는 더 넓은 추론 기법 위에 구축됩니다. 이해를 심화하기 위한 관련 가이드를 소개합니다:',
          ],
          items: [
            '[Chain-of-Thought 프롬프팅](/prompt-engineering/chain-of-thought-prompting) — 모델에게 단계적으로 추론하도록 요청하는 기초 기법.',
            '[RISEN 프레임워크](/prompt-engineering/risen-framework) — 추론과 함께 반복적 개선이 필요할 때 사용하십시오.',
            '[CO-STAR 프레임워크](/prompt-engineering/co-star-framework) — 초안 작성 및 생성 작업을 위한 보완 프레임워크.',
            '[Zero-Shot vs Few-Shot 프롬프팅](/prompt-engineering/zero-shot-vs-few-shot-prompting) — TRACE가 과도하고 더 간단한 기법으로 충분한 경우를 이해하십시오.',
            '[프롬프트 엔지니어링 기초](/prompt-engineering/prompt-engineering-fundamentals) — 프롬프트를 효과적으로 구조화하기 위한 기초 가이드.',
          ],
        },

        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: '프롬프트 엔지니어링에서 TRACE는 무엇을 의미합니까?',
              a: 'TRACE는 Think, Reason, Analyze, Conclude, Explain의 약자입니다. AI 모델이 최종 답변으로 바로 넘어가지 않고 추론의 각 단계를 보여주도록 지시하는 구조화된 프롬프트 패턴입니다.',
            },
            {
              q: 'TRACE 프레임워크는 언제 사용해야 합니까?',
              a: '간결함보다 추론의 질과 근거가 더 중요한 경우에 TRACE를 사용하십시오. 전략적 의사결정, 기술 아키텍처 검토, 복잡한 디버깅, 그리고 이해관계자에게 결론에 이른 과정을 보여주어야 하는 상황이 이에 해당합니다.',
            },
            {
              q: 'TRACE는 Chain-of-Thought 프롬프팅과 어떻게 다릅니까?',
              a: 'Chain-of-Thought은 모델에게 단계적으로 추론하도록 요청하는 일반적인 기법입니다. TRACE는 작업과 모델 전반에 걸쳐 일관되고 재현 가능한 추론 흔적을 생성하는 특정 5단계 구조(Think, Reason, Analyze, Conclude, Explain)입니다.',
            },
            {
              q: 'TRACE는 RISEN 프레임워크와 어떻게 다릅니까?',
              a: 'TRACE는 감사할 수 있도록 추론 과정을 명시적으로 만드는 데 초점을 맞춥니다. RISEN은 기존 초안을 반복적으로 개선하는 데 초점을 맞춥니다. 모델의 사고 방식을 이해하려면 TRACE를, 결과물의 품질을 다듬으려면 RISEN을 사용하십시오.',
            },
            {
              q: 'TRACE를 단일 프롬프트에서 사용할 수 있습니까, 아니면 여러 턴이 필요합니까?',
              a: '두 방법 모두 가능합니다. 다섯 단계를 모두 나열한 단일 프롬프트가 더 빠릅니다. 여러 턴은 각 단계에서 필요에 따라 일시 중지하고 방향을 재조정할 수 있습니다. 최대한의 제어를 원하는 많은 사용자들은 TRACE 단계를 별도로 전송합니다.',
            },
            {
              q: 'TRACE가 과도하게 긴 응답을 생성하지 않도록 방지하는 방법은 무엇입니까?',
              a: '단계별 길이 제약을 추가하십시오. 예를 들어: "각 단계를 1~2문장으로 유지하십시오." 이렇게 하면 모델이 추론 과정을 보여주면서도 간결하게 작성하도록 강제할 수 있습니다.',
            },
            {
              q: 'TRACE는 모델 오류를 감지하는 데 도움이 됩니까?',
              a: '그렇습니다. 추론을 가시화함으로써 TRACE는 최종 답변만 제공하는 응답에서는 보이지 않을 잘못된 가정, 논리적 공백, 잘못된 계산을 발견할 수 있게 합니다.',
            },
            {
              q: 'PromptQuorum은 TRACE 프롬프트를 어떻게 지원합니까?',
              a: 'PromptQuorum은 TRACE를 기본 프롬프트 구조로 포함합니다. 다섯 단계에 맞춰 정렬된 구조화된 필드에 작업별 컨텍스트를 입력하면 됩니다. PromptQuorum은 구성된 프롬프트를 여러 모델에 병렬로 전송하여 추론 흔적을 나란히 비교할 수 있게 합니다.',
            },
          ],
        },

        sources: {
          title: '참고 자료',
          content: [
            '이 글은 프롬프트 엔지니어링과 AI 추론의 현재 모범 사례를 요약합니다. TRACE 프레임워크 패턴은 언어 모델 추론을 투명하게 만들기 위한 학술 연구 및 산업 실천에서 활용되어 왔습니다.',
          ],
          items: [
            'Wei, J., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *arXiv:2201.11903*. [arXiv에서 읽기](https://arxiv.org/abs/2201.11903)',
            'OpenAI. (2024). "How to use the OpenAI API." [OpenAI API 문서](https://platform.openai.com/docs/guides/prompt-engineering)',
            'Anthropic. (2024). "Prompt Engineering Techniques." [Anthropic 문서](https://docs.anthropic.com/en/docs/build-a-chatbot)',
            'LM Studio & Ollama. 오픈 소스 LLM 배포 및 추론 도구.',
          ],
        },
      },
    },
  };
