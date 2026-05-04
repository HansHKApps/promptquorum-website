// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: risen-framework
// Generated: 2026-05-04T00:00:00.000Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RISEN Framework: Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
      intro: 'The RISEN Framework is a 5-step iterative structure for improving AI outputs through structured revision cycles. Instead of accepting the first draft or rewriting from scratch, you use RISEN to systematically refine, audit, evaluate, and plan next improvements. Each step has a distinct purpose: Refine improves the draft, Inspect documents every change, Summarize explains what the new version does, Evaluate scores against criteria, and Next Steps recommends further edits. RISEN turns "make this better" into a transparent, repeatable workflow.',
      leadAnswerBlock: '**RISEN is a 5-step iterative refinement framework: Refine improves the draft, Inspect lists every change with justification, Summarize explains the new version, Evaluate scores it against criteria (1-5 scale), and Next Steps recommends 3 focused improvements for the next cycle. Use RISEN when you already have a draft and want controlled, auditable improvement with an audit trail. The Inspect step uniquely forces the model to document changes — making revisions traceable. In 2026, RISEN is built into PromptQuorum as a multi-model dispatch option, letting you test the same RISEN cycle across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro simultaneously to compare refinement approaches.**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04 — RISEN framework original paper (Yao et al., 2023), PromptQuorum native RISEN implementation',
      readTime: '13 min read',
      seoTitle: 'RISEN Framework: Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
      metaDescription: 'RISEN Framework for iterative prompt refinement: Refine drafts, Inspect changes, Summarize results, Evaluate against criteria, plan Next Steps. Multi-model testing with PromptQuorum.',
      educationalLevel: 'Intermediate',
      audience: 'Developers building prompt workflows, product teams iterating on content, teams doing multi-stage reviews, researchers',
      primaryTerm: 'RISEN Framework',
      aboutTopics: ['RISEN Framework', 'Iterative Prompting', 'Prompt Refinement', 'Multi-Step Workflows'],
      next_refresh_due: '2026-09-24',

      quickFacts: [
        'RISEN = Refine, Inspect, Summarize, Evaluate, Next Steps — a 5-step iterative loop for controlled output improvement',
        'Use RISEN when you already have a draft, document, or plan. Don\'t use it for first-draft generation — pair it with CO-STAR or CRAFT for that.',
        'The Inspect step is unique: it forces the model to list every specific change and justify each one, creating an audit trail. No other framework has this built-in accountability.',
        'Typical workflow: 2-4 RISEN cycles to reach production quality from a rough draft. Each cycle produces 3 outputs: improved content, change log (Inspect), and action plan (Next Steps).',
        'Works with any model: GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models via Ollama or LM Studio. Larger models (13B+) handle multi-step structure better; 7B models may need steps separated.',
        'RISEN + CO-STAR combo pattern: Use CO-STAR for first-draft generation, then switch to RISEN for iterative improvement. Separates "create" from "refine" — two fundamentally different tasks.',
      ],

      toc: [
        { anchor: 'key-takeaways', label: 'Key Takeaways' },
        { anchor: 'what-is-risen', label: 'What Is the RISEN Framework?' },
        { anchor: 'five-components', label: 'The Five RISEN Components' },
        { anchor: 'why-useful', label: 'Why RISEN Is Useful' },
        { anchor: 'when-to-use', label: 'When to Use RISEN' },
        { anchor: 'comparison-table', label: 'Comparison Table (CoT vs Single-Pass vs RISEN)' },
        { anchor: 'bad-vs-good', label: 'Bad vs Good RISEN Prompt Example' },
        { anchor: 'how-to-write', label: 'How to Write a RISEN Prompt' },
        { anchor: 'common-mistakes', label: 'Common Mistakes When Using RISEN' },
        { anchor: 'risen-in-promptquorum', label: 'RISEN in PromptQuorum' },
        { anchor: 'combining-frameworks', label: 'Combining RISEN With Other Frameworks' },
        { anchor: 'faq', label: 'Frequently Asked Questions' },
        { anchor: 'related-reading', label: 'Related Reading' },
        { anchor: 'sources', label: 'Sources' },
      ],

      sections: {
        tldr: {
          isTldr: true,
          title: 'Key Takeaways',
          id: 'key-takeaways',
          items: [
            'RISEN is a 5-step iterative loop — Refine, Inspect, Summarize, Evaluate, Next Steps — that turns "make this better" into a structured, repeatable improvement workflow with an audit trail.',
            'Use RISEN for iterative refinement (improving existing drafts). Don\'t use it for first-draft generation — combine it with CO-STAR or CRAFT for that phase.',
            'The Inspect step is unique: it forces the model to list every specific change and justify it. This creates an audit trail — you can see exactly what changed and why.',
            'Typical workflow: 2-4 RISEN cycles to reach production quality. Each cycle produces improved content, a change log, and recommendations for the next iteration.',
            'RISEN works with any model: GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Ollama, LM Studio. Larger models (13B+) handle the multi-step structure better.',
            'In PromptQuorum, RISEN is built-in. Send the same RISEN cycle to multiple models simultaneously and compare how each model refines differently.',
            'Use PromptQuorum to test RISEN patterns across models — see which model\'s refinement approach best matches your goals.',
          ],
        },

        whatIsRISEN: {
          title: 'What Is the RISEN Framework?',
          id: 'what-is-risen',
          snippets: [
            { type: 'in-one-sentence', text: 'RISEN is a 5-step iterative loop — Refine, Inspect, Summarize, Evaluate, Next Steps — that turns "make this better" into a structured, repeatable improvement workflow with an audit trail.' },
            { type: 'in-plain-terms', text: 'Instead of saying "improve this" and hoping, you tell the AI to fix it (Refine), list what it changed (Inspect), explain what the new version does (Summarize), rate itself (Evaluate), and suggest what to fix next (Next Steps). You repeat until it\'s done.' },
          ],
          content: [
            '**The RISEN Framework is an iterative prompt pattern designed for refining existing drafts, analyses, and plans through multiple improvement cycles.** Instead of treating each prompt as a one-off task, you guide a model like GPT-5.5, Claude Opus 4.7, or Gemini 3.1 Pro through a structured, repeatable improvement loop. This makes your workflow more like continuous editing than random trial-and-error.',
            'RISEN is especially useful when you already have a first version — such as a draft article, strategy note, code snippet, or analysis — and you want the model to improve it in a controlled, auditable way. Each RISEN step has a distinct purpose, which keeps revisions focused and traceable.',
            'The framework gets its name from its five stages: **R**efine (improve the draft), **I**nspect (identify changes), **S**ummarize (explain what changed), **E**valuate (score against criteria), and **N**ext steps (recommend improvements).',
          ],
        },

        fiveComponents: {
          title: 'The Five RISEN Components',
          id: 'five-components',
          content: [
            '**A strong RISEN prompt explicitly asks the model to move through five stages, each with a distinct output.** You can combine these stages into one longer prompt or separate them into sequential prompts, depending on how much control and feedback you want.',
          ],
          items: [
            '**Refine:** Improve the existing draft according to your goals (clarity, structure, accuracy, conciseness, audience alignment, tone, etc.). The model rewrites or enhances the original material.',
            '**Inspect:** Identify concrete changes made — exactly what was rewritten, what details were added, what issues were fixed. This creates the audit trail. Require 5-7 specific edits with justifications.',
            '**Summarize:** Provide a concise explanation of what the new version now says or does — not a repeat of the content, but a meta-level description of its focus and emphasis.',
            '**Evaluate:** Critique the result against explicit criteria (tone, accuracy, completeness, audience alignment, clarity). Use a 1-5 numeric scale and require one-sentence justification per criterion.',
            '**Next steps:** Recommend 3 focused improvements for the next iteration so you always have a clear direction for further refinement.',
          ],
        },

        whyUseful: {
          title: 'Why RISEN Is Useful',
          id: 'why-useful',
          content: [
            '**The RISEN Framework is useful whenever you want to turn "make this better" into a transparent, repeatable workflow instead of a black box.** It encourages the model not only to generate, but also to analyze and critique its own work.',
            'Practical benefits include:',
          ],
          items: [
            'Clear visibility into what changed between versions — the Inspect step forces complete documentation.',
            'Structured self-critique that exposes weaknesses, gaps, and opportunities.',
            'A built-in roadmap for the next iteration so you\'re never stuck wondering what to try next.',
            'Repeatable process that can be templated, shared with teams, and standardized.',
            'Audit trail for compliance or knowledge management — you can justify every revision.',
          ],
        },

        badVsGood: {
          title: 'Bad vs Good RISEN Prompt Example',
          id: 'bad-vs-good',
          content: [
            '**The difference between an unstructured revision request and a RISEN-based request becomes clear when you apply both to the same draft.** Below is a real example for improving a product description.',
            '**[Bad Prompt]**',
            '"Make this product description better."',
            '**[Good RISEN Prompt]**',
            '"You are a product marketing editor. I will give you a draft product description. Use the RISEN process as follows: **Refine:** Rewrite the description for clarity and conciseness while keeping all factual details. Target 120–160 words. **Inspect:** List 5–7 specific edits you made (e.g., "clarified benefit X", "removed repeated sentence Y", "added target audience"). **Summarize:** In 2–3 sentences, explain what the updated description now emphasizes and what shifted in its focus. **Evaluate:** Rate the new description on a 1–5 scale for clarity (1–5), persuasiveness (1–5), and B2B audience alignment (1–5). Justify each rating in one sentence. **Next steps:** Suggest 3 focused edits I could request in a future prompt to further improve this copy. Draft: [paste draft here]"',
            'The RISEN version turns a vague request into a structured mini-process, producing not just an improved description but also a complete audit trail and a plan for the next cycle.',
          ],
        },

        whenToUse: {
          title: 'When to Use RISEN',
          id: 'when-to-use',
          content: [
            '**Use the RISEN Framework for iterative improvement tasks where you already have material and care about understanding each change.** RISEN is for refinement, not first-draft generation.',
          ],
          items: [
            'Refining blog posts, documentation, or help-center articles over several rounds.',
            'Polishing sales decks, pitch scripts, and executive summaries.',
            'Reviewing and improving prompts themselves, especially complex ones used in production.',
            'Iteratively tightening long analyses so they become clearer and more actionable.',
            'Team content review workflows where multiple people need to see what changed.',
            'Code review and documentation improvement.',
          ],
        },

        comparisonTable: {
          title: 'Comparison Table: CoT vs Single-Pass vs RISEN',
          id: 'comparison-table',
          tableFormat: true,
          columns: ['Dimension', 'Chain-of-Thought (CoT)', 'Single-Pass Prompt', 'RISEN Framework'],
          rows: [
            {
              'Dimension': 'Structure',
              'Chain-of-Thought (CoT)': 'Linear single path ("think step by step")',
              'Single-Pass Prompt': 'One generation attempt',
              'RISEN Framework': 'Iterative 5-step loop with refinement cycles'
            },
            {
              'Dimension': 'Core action',
              'Chain-of-Thought (CoT)': 'Model writes reasoning then answer',
              'Single-Pass Prompt': 'Model generates output',
              'RISEN Framework': 'Refine → Inspect → Summarize → Evaluate → Next Steps → repeat'
            },
            {
              'Dimension': 'Audit trail / change tracking',
              'Chain-of-Thought (CoT)': 'No — reasoning is shown but no revisions',
              'Single-Pass Prompt': 'None — output is final',
              'RISEN Framework': 'Yes — Inspect step documents every change'
            },
            {
              'Dimension': 'Best for',
              'Chain-of-Thought (CoT)': 'Math, logic, explanations (single correct answer)',
              'Single-Pass Prompt': 'Quick generation, simple tasks',
              'RISEN Framework': 'Iterative improvement, complex documents, team review'
            },
            {
              'Dimension': 'Token cost vs baseline',
              'Chain-of-Thought (CoT)': '~1.5-2× (reasoning added)',
              'Single-Pass Prompt': 'Baseline (1×)',
              'RISEN Framework': 'Variable (2-5× per cycle depending on depth)'
            },
            {
              'Dimension': 'Requires multiple prompts?',
              'Chain-of-Thought (CoT)': 'No — reasoning + answer in one prompt',
              'Single-Pass Prompt': 'No',
              'RISEN Framework': 'Can be one long prompt or 5 sequential prompts (your choice)'
            },
            {
              'Dimension': 'Built-in model comparison',
              'Chain-of-Thought (CoT)': 'No',
              'Single-Pass Prompt': 'No',
              'RISEN Framework': 'Yes (send same RISEN cycle to GPT, Claude, Gemini in parallel via PromptQuorum)'
            },
          ],
        },

        howToWrite: {
          title: 'How to Write a RISEN Prompt',
          id: 'how-to-write',
          numberedItems: [
            '**State the problem and expected deliverables.** "You are [role]. Your task is to refine [material type] using the RISEN process."',
            '**Define the Refine goal explicitly.** "Improve for [specific criteria: clarity, accuracy, conciseness, tone, audience alignment]. Target [length or format]."',
            '**Require specific Inspect output.** "List 5–7 specific edits. For each, state what you changed and why."',
            '**Specify Evaluate criteria.** "Rate on [3-5 named dimensions, e.g., clarity, accuracy, persuasiveness] on a 1–5 scale. Justify each rating in one sentence."',
            '**Ask for actionable Next Steps.** "Suggest 3 focused improvements for the next iteration."',
          ],
        },

        calloutBoxes: {
          title: 'Key Callouts',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Pro Tip',
              text: 'Always specify evaluation criteria before running RISEN. Vague criteria like "make it better" lead to vague improvements. Specific criteria like "rate on clarity (1-5), accuracy (1-5), B2B alignment (1-5)" lead to measurable results.',
            },
            {
              type: 'did-you-know',
              label: 'Did You Know',
              text: 'The Inspect step is what makes RISEN unique. Most frameworks generate output. RISEN forces the model to document every change, creating a permanent audit trail. This is why RISEN is essential for regulated industries, academic work, and team collaboration where traceability matters.',
            },
            {
              type: 'warning',
              label: 'Warning',
              text: 'RISEN adds overhead that only pays off when iterative improvement matters. For quick generation tasks, single-step prompts or CO-STAR are more efficient. For one-shot translations or simple edits, RISEN is overkill. Use selectively on high-stakes decisions.',
            },
          ],
        },

        commonMistakes: {
          title: 'Common Mistakes When Using RISEN',
          id: 'common-mistakes',
          mistakes: [
            {
              mistake: 'Using RISEN for first-draft generation',
              problem: 'RISEN needs existing material to refine. If you ask a model to "Refine" without giving it a draft, it generates from scratch and the Inspect step has nothing meaningful to report.',
              fix: 'Use CO-STAR, CRAFT, or Single Step for first drafts. Switch to RISEN only after you have material to improve.',
            },
            {
              mistake: 'Skipping the Inspect step',
              problem: 'Many users jump from Refine to Evaluate. Without Inspect, you lose the audit trail — you can\'t see what changed or why, making it impossible to judge whether the refinement actually improved the output.',
              fix: 'Always include Inspect. Require the model to list 5-7 specific changes with brief justifications. This is what creates the audit trail.',
            },
            {
              mistake: 'Vague Evaluate criteria',
              problem: '"Rate this on quality" gives the model nothing to score against. Without explicit criteria, self-evaluation is meaningless.',
              fix: 'Specify 3-5 named criteria with a numeric scale. Example: "Rate on clarity (1-5), accuracy (1-5), audience alignment (1-5). Justify each in one sentence."',
            },
            {
              mistake: 'Running only one RISEN cycle',
              problem: 'One pass rarely reaches production quality. RISEN is designed for iteration — the Next Steps output feeds directly into the next Refine step.',
              fix: 'Plan for 2-4 RISEN cycles. Stop when the Evaluate scores plateau and Next Steps suggestions become minor.',
            },
            {
              mistake: 'Not comparing RISEN outputs across models',
              problem: 'Different models refine differently. Claude tends toward conciseness; GPT tends toward elaboration; Gemini focuses on user experience. Running RISEN on one model limits your perspective.',
              fix: 'Use PromptQuorum to run the same RISEN cycle across GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro. Compare which model\'s refinements best match your goals.',
            },
          ],
        },

        risenInPromptQuorum: {
          title: 'RISEN in PromptQuorum',
          id: 'risen-in-promptquorum',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that offers the RISEN Framework as one of its built-in prompt structures.** When you choose the RISEN option, the app provides labeled fields for each step and composes them into a single reusable instruction.',
            'Inside PromptQuorum, RISEN enables you to:',
          ],
          items: [
            'Plug in an existing draft and apply a pre-structured "Refine–Inspect–Summarize–Evaluate–Next steps" pattern without writing the full meta-prompt yourself.',
            'Send the same RISEN-based instructions to multiple models — GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro — in parallel and compare how each one refines and critiques the draft.',
            'Save RISEN templates for recurring workflows (e.g., "blog draft refinement", "technical documentation review", "sales deck polish") and share them with your team.',
            'View complete revision history for every RISEN cycle, making the improvement process transparent and auditable.',
          ],
        },

        combiningFrameworks: {
          title: 'Combining RISEN With Other Frameworks',
          id: 'combining-frameworks',
          content: [
            '**Combine RISEN with other frameworks by assigning RISEN to the revision phase and using generation frameworks earlier in your workflow.** A practical pattern is:',
            'This separation prevents the model from conflating "create" and "improve" — two fundamentally different cognitive tasks.',
          ],
          numberedItems: [
            'Use CO-STAR, CRAFT, or Single Step to create the first draft.',
            'Switch to RISEN for iterative improvement, self-critique, and planning.',
            'Move to SPECS if the final output must follow a strict schema or format (optional).',
          ],
        },

        faqSection: {
          title: 'Frequently Asked Questions',
          id: 'faq',
          faqs: [
            {
              q: 'What does RISEN stand for?',
              a: 'RISEN stands for Refine, Inspect, Summarize, Evaluate, Next Steps. It is a 5-step iterative framework designed for improving existing drafts through structured revision cycles.',
            },
            {
              q: 'How is RISEN different from CO-STAR or CRAFT?',
              a: 'CO-STAR and CRAFT are generation frameworks — they help you create first drafts. RISEN is a refinement framework — it helps you improve existing material through tracked iterations. Use generation frameworks to create, then switch to RISEN to refine.',
            },
            {
              q: 'When should I use RISEN vs other frameworks?',
              a: 'Use RISEN when you already have a draft and want controlled improvement. Use CO-STAR for general first-draft generation, CRAFT for creative content, RTF for structured role-task-format specifications, and TRACE for understanding model reasoning.',
            },
            {
              q: 'How many RISEN cycles do I need?',
              a: 'Typically 2-4 cycles. Stop when the Evaluate scores plateau (consecutive cycles score the same) and Next Steps suggestions become minor formatting tweaks rather than substantive improvements.',
            },
            {
              q: 'Can I use RISEN with local models?',
              a: 'Yes. RISEN works with any LLM that follows instructions — including local models via Ollama or LM Studio. Larger models (13B+) handle the multi-step structure better; 7B models may need each step as a separate prompt.',
            },
            {
              q: 'What makes the Inspect step special?',
              a: 'The Inspect step forces the model to list every specific change it made during Refine, creating an audit trail. You can see exactly what changed between versions and judge whether each change improved the output. Without Inspect, revisions are a black box.',
            },
            {
              q: 'Can I combine RISEN with multi-model testing?',
              a: 'Yes. Use PromptQuorum to send the same RISEN cycle to GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro simultaneously. Compare which model\'s refinements, self-critique scores, and next-step suggestions best match your requirements.',
            },
            {
              q: 'Does RISEN add overhead in token cost?',
              a: 'Yes. Each RISEN cycle generates 2-5× more output tokens than a single-pass prompt because the model writes multiple sections (refined content, change log, summary, evaluation, recommendations). Use RISEN selectively on high-stakes tasks. For quick edits, prefer single-step prompts.',
            },
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          id: 'related-reading',
          items: [
            { title: 'Chain-of-Thought Prompting', url: '/prompt-engineering/chain-of-thought-prompting?lang=en' },
            { title: 'CO-STAR Framework', url: '/prompt-engineering/co-star-framework?lang=en' },
            { title: 'CRAFT Framework', url: '/prompt-engineering/craft-framework?lang=en' },
            { title: 'TRACE Framework', url: '/prompt-engineering/trace-framework?lang=en' },
            { title: 'Which Prompt Framework Should You Use?', url: '/prompt-engineering/which-prompt-framework-should-you-use?lang=en' },
            { title: 'Build Your Own Prompt Framework', url: '/prompt-engineering/build-your-own-prompt-framework?lang=en' },
          ],
        },

        sources: {
          title: 'Sources',
          id: 'sources',
          items: [
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608. Catalogues 58+ prompting techniques including iterative refinement patterns.',
            'OpenAI Prompt Engineering Guide. https://platform.openai.com/docs/guides/prompt-engineering — Official prompting best practices including iterative refinement strategies.',
            'Anthropic Prompt Engineering Documentation. https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Claude-specific guidance on multi-step prompt workflows.',
          ],
        },
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RISEN Framework: Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
        description: 'The RISEN Framework for iterative prompt refinement: Refine drafts, Inspect changes, Summarize results, Evaluate against criteria, plan Next Steps. Multi-model testing with PromptQuorum.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        'url': 'https://www.promptquorum.com/prompt-engineering/risen-framework?lang=en',
        'inLanguage': 'en',
        keywords: ['RISEN Framework', 'iterative prompting', 'prompt refinement', 'multi-step workflows', 'prompt engineering', 'PromptQuorum', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RISEN Framework' },
          { '@type': 'Thing', name: 'Iterative Prompting' },
          { '@type': 'Thing', name: 'Prompt Refinement' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },

      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'What does RISEN stand for?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RISEN stands for Refine, Inspect, Summarize, Evaluate, Next Steps. It is a 5-step iterative framework designed for improving existing drafts through structured revision cycles.' } },
          { '@type': 'Question', 'name': 'How is RISEN different from CO-STAR or CRAFT?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR and CRAFT are generation frameworks — they help you create first drafts. RISEN is a refinement framework — it helps you improve existing material through tracked iterations. Use generation frameworks to create, then switch to RISEN to refine.' } },
          { '@type': 'Question', 'name': 'When should I use RISEN vs other frameworks?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Use RISEN when you already have a draft and want controlled improvement. Use CO-STAR for general first-draft generation, CRAFT for creative content, RTF for structured specifications, and TRACE for understanding model reasoning.' } },
          { '@type': 'Question', 'name': 'How many RISEN cycles do I need?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typically 2-4 cycles. Stop when the Evaluate scores plateau and Next Steps suggestions become minor tweaks rather than substantive improvements.' } },
          { '@type': 'Question', 'name': 'Can I use RISEN with local models?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. RISEN works with any LLM that follows instructions — including local models via Ollama or LM Studio. Larger models (13B+) handle multi-step structure better; 7B models may need steps separated.' } },
          { '@type': 'Question', 'name': 'What makes the Inspect step special?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The Inspect step forces the model to list every specific change it made, creating an audit trail. You can see exactly what changed between versions and judge whether each change improved the output.' } },
          { '@type': 'Question', 'name': 'Can I combine RISEN with multi-model testing?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Use PromptQuorum to send the same RISEN cycle to GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro simultaneously. Compare which model\'s refinements best match your requirements.' } },
          { '@type': 'Question', 'name': 'Does RISEN add overhead in token cost?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Each RISEN cycle generates 2-5× more output tokens than a single-pass prompt. Use RISEN selectively on high-stakes tasks. For quick edits, prefer single-step prompts.' } },
        ],
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'CoT vs Single-Pass vs RISEN Comparison',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Structure', 'description': 'CoT: Linear single path. Single-Pass: One generation. RISEN: Iterative 5-step loop.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Core action', 'description': 'CoT: Reason then answer. Single-Pass: Generate. RISEN: Refine → Inspect → Summarize → Evaluate → Next Steps → repeat.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Audit trail', 'description': 'CoT: No change tracking. Single-Pass: None. RISEN: Yes — Inspect documents every change.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Best for', 'description': 'CoT: Math and logic. Single-Pass: Quick tasks. RISEN: Iterative improvement and team review.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Token cost', 'description': 'CoT: 1.5-2×. Single-Pass: 1× baseline. RISEN: 2-5× per cycle.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Multiple prompts?', 'description': 'CoT: No. Single-Pass: No. RISEN: Can be one long prompt or 5 sequential prompts.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Model comparison', 'description': 'CoT: No. Single-Pass: No. RISEN: Yes — parallel testing across GPT, Claude, Gemini via PromptQuorum.' },
        ],
      },
    },

    de: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RISEN-Framework: Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
      intro: 'Das RISEN-Framework ist eine 5-stufige iterative Struktur zur systematischen Verbesserung von KI-Ausgaben durch strukturierte Revisionszyklen. Statt den ersten Entwurf zu akzeptieren oder von Grund auf neu zu schreiben, nutzen Sie RISEN für kontrollierte Verbesserung mit vollständiger Audit-Spur. Jeder Schritt hat einen eindeutigen Zweck: Refine verbessert den Entwurf, Inspect dokumentiert jede Änderung, Summarize erklärt die neue Version, Evaluate bewertet gegen Kriterien, und Next Steps empfiehlt weitere Verbesserungen. RISEN verwandelt „machen Sie das besser" in einen transparenten, wiederholbaren Arbeitsablauf.',
      leadAnswerBlock: '**RISEN ist eine 5-stufige iterative Verbesserungsschleife: Refine verbessert den Entwurf, Inspect listet jede Änderung mit Begründung auf, Summarize erklärt die neue Version, Evaluate bewertet sie gegen Kriterien (1–5 Skala), und Next Steps empfiehlt 3 fokussierte Verbesserungen für den nächsten Zyklus. Verwenden Sie RISEN, wenn Sie bereits einen Entwurf haben und kontrollierte, nachverfolgbare Verbesserung mit Audit-Trail wünschen. Der Inspect-Schritt zwingt das Modell eindeutig dazu, Änderungen zu dokumentieren — wodurch Revisionen nachverfolgbar werden. 2026 ist RISEN in PromptQuorum als Multi-Modell-Dispatch-Option integriert, mit der Sie denselben RISEN-Zyklus über GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro parallel testen können, um Verbesserungsansätze zu vergleichen.**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '13 Min. Lesezeit',
      seoTitle: 'RISEN-Framework: Refine, Inspect, Summarize, Evaluate (2026)',
      metaDescription: 'RISEN-Framework für iterative Prompt-Verfeinerung: Entwürfe verbessern, Änderungen nachverfolgen, bewerten, nächste Schritte planen. Multi-Modell-Test mit PromptQuorum.',
      educationalLevel: 'Intermediate',
      audience: 'Entwickler, die Prompt-Workflows aufbauen, Produktteams iterieren Inhalte, Teams mit mehrstufigen Reviews',
      primaryTerm: 'RISEN-Framework',
      aboutTopics: ['RISEN-Framework', 'Iteratives Prompting', 'Prompt-Verfeinerung', 'Mehrstufige Workflows'],
      next_refresh_due: '2026-09-24',

      quickFacts: [
        'RISEN = Refine, Inspect, Summarize, Evaluate, Next Steps — eine 5-stufige Iterationsschleife für kontrollierte Ausgabeverbesserung',
        'Verwenden Sie RISEN, wenn Sie bereits einen Entwurf, ein Dokument oder einen Plan haben. Verwenden Sie es nicht für Erst-Draft-Generierung — kombinieren Sie es mit CO-STAR oder CRAFT dafür.',
        'Der Inspect-Schritt ist einzigartig: Er zwingt das Modell, jede spezifische Änderung aufzulisten und jede zu rechtfertigen, wodurch ein Audit-Trail entsteht. Kein anderes Framework hat dies.',
        'Typischer Arbeitsablauf: 2–4 RISEN-Zyklen, um Produktionsqualität aus einem groben Entwurf zu erreichen. Jeder Zyklus erzeugt 3 Ausgaben: verbesserter Inhalt, Änderungsprotokoll (Inspect) und Aktionsplan (Next Steps).',
        'Funktioniert mit jedem Modell: GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle über Ollama oder LM Studio. Größere Modelle (13B+) verarbeiten Multi-Schritt-Struktur besser.',
        'RISEN + CO-STAR Combo-Muster: Verwenden Sie CO-STAR für Erst-Draft-Generierung, wechseln Sie dann zu RISEN für iterative Verbesserung. Trennt „Erstellen" von „Verfeinern" — zwei fundamental unterschiedliche Aufgaben.',
      ],

      toc: [
        { anchor: 'zusammenfassung', label: 'Zusammenfassung' },
        { anchor: 'was-ist-risen', label: 'Was ist das RISEN-Framework?' },
        { anchor: 'funf-komponenten', label: 'Die fünf RISEN-Komponenten' },
        { anchor: 'warum-nutzlich', label: 'Warum RISEN nützlich ist' },
        { anchor: 'wann-verwenden', label: 'Wann RISEN verwendet werden sollte' },
        { anchor: 'vergleichstabelle', label: 'Vergleichstabelle (CoT vs Single-Pass vs RISEN)' },
        { anchor: 'schlecht-vs-gut', label: 'Schwaches vs. starkes RISEN-Prompt-Beispiel' },
        { anchor: 'wie-schreiben', label: 'Wie man einen RISEN-Prompt schreibt' },
        { anchor: 'wichtige-hinweise', label: 'Wichtige Hinweise' },
        { anchor: 'haufige-fehler', label: 'Häufige Fehler bei der Verwendung von RISEN' },
        { anchor: 'risen-promptquorum', label: 'RISEN in PromptQuorum' },
        { anchor: 'mit-anderen-kombinieren', label: 'RISEN mit anderen Frameworks kombinieren' },
        { anchor: 'faq', label: 'Häufig gestellte Fragen' },
        { anchor: 'verwandte-lekture', label: 'Verwandte Lektüre' },
        { anchor: 'quellen', label: 'Quellen' },
      ],

      sections: {
        tldr: {
          isTldr: true,
          title: 'Zusammenfassung',
          id: 'zusammenfassung',
          items: [
            'RISEN ist eine 5-stufige Iterationsschleife — Refine, Inspect, Summarize, Evaluate, Next Steps — die „machen Sie das besser" in einen strukturierten, wiederholbaren Verbesserungsarbeitsablauf mit Audit-Trail verwandelt.',
            'Verwenden Sie RISEN für iterative Verfeinerung (bestehende Entwürfe verbessern). Verwenden Sie es nicht für Erst-Draft-Generierung — kombinieren Sie es mit CO-STAR oder CRAFT für diese Phase.',
            'Der Inspect-Schritt ist einzigartig: Er zwingt das Modell, jede spezifische Änderung aufzulisten und zu rechtfertigen. Dies erzeugt einen Audit-Trail — Sie können genau sehen, was sich geändert hat und warum.',
            'Typischer Arbeitsablauf: 2–4 RISEN-Zyklen, um Produktionsqualität zu erreichen. Jeder Zyklus erzeugt verbesserten Inhalt, ein Änderungsprotokoll und Empfehlungen für die nächste Iteration.',
            'RISEN funktioniert mit jedem Modell: GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Ollama, LM Studio. Größere Modelle (13B+) verarbeiten die Multi-Schritt-Struktur besser.',
            'In PromptQuorum ist RISEN integriert. Senden Sie denselben RISEN-Zyklus an mehrere Modelle gleichzeitig und vergleichen Sie, wie jedes Modell unterschiedlich verfeinert.',
            'Verwenden Sie PromptQuorum, um RISEN-Muster über Modelle hinweg zu testen — sehen Sie, welcher Verbesserungsansatz eines Modells am besten zu Ihren Zielen passt.',
          ],
        },

        whatIsRISEN: {
          title: 'Was ist das RISEN-Framework?',
          id: 'was-ist-risen',
          snippets: [
            { type: 'in-one-sentence', text: 'RISEN ist eine 5-stufige Iterationsschleife — Refine, Inspect, Summarize, Evaluate, Next Steps — die „machen Sie das besser" in einen strukturierten, wiederholbaren Verbesserungsarbeitsablauf mit Audit-Trail verwandelt.' },
            { type: 'in-plain-terms', text: 'Anstatt zu sagen „verbessere das" und es zu hoffen, sagen Sie der KI, es soll das beheben (Refine), auflisten, was es geändert hat (Inspect), erklären, was die neue Version macht (Summarize), sich selbst bewerten (Evaluate) und vorschlagen, was weiter zu beheben ist (Next Steps). Sie wiederholen, bis es fertig ist.' },
          ],
          content: [
            '**Das RISEN-Framework ist ein iteratives Prompt-Muster, das für die Verfeinerung bestehender Entwürfe, Analysen und Pläne durch mehrere Verbesserungszyklen entwickelt wurde.** Anstatt jeden Prompt als Einmalaufgabe zu behandeln, führen Sie ein Modell wie GPT-5.5, Claude Opus 4.7 oder Gemini 3.1 Pro durch eine strukturierte, wiederholbare Verbesserungsschleife. Dies macht Ihren Arbeitsablauf weniger wie zufälliges Ausprobieren und mehr wie kontinuierliche Bearbeitung.',
            'RISEN ist besonders nützlich, wenn Sie bereits eine erste Version haben — wie einen Entwurfartikel, eine Strategienotiz, einen Code-Snippet oder eine Analyse — und möchten, dass das Modell es auf kontrollierte, nachverfolgbare Weise verbessert. Jeder RISEN-Schritt hat einen eindeutigen Zweck, der Revisionen fokussiert und nachverfolgbar hält.',
            'Das Framework erhält seinen Namen von seinen fünf Stufen: **R**efine (den Entwurf verbessern), **I**nspect (Änderungen identifizieren), **S**ummarize (erklären, was sich geändert hat), **E**valuate (gegen Kriterien bewerten) und **N**ext steps (Verbesserungen empfehlen).',
          ],
        },

        fiveComponents: {
          title: 'Die fünf RISEN-Komponenten',
          id: 'funf-komponenten',
          content: [
            '**Ein starker RISEN-Prompt fordert das Modell explizit auf, fünf Phasen zu durchlaufen, jede mit einer eindeutigen Ausgabe.** Sie können diese Phasen in einen längeren Prompt kombinieren oder in aufeinanderfolgende Prompts aufteilen, abhängig davon, wie viel Kontrolle und Feedback Sie wünschen.',
          ],
          items: [
            '**Refine:** Verbessern Sie den bestehenden Entwurf gemäß Ihren Zielen (Klarheit, Struktur, Genauigkeit, Prägnanz, Zielgruppenausrichtung, Ton usw.). Das Modell schreibt das Originalmaterial um oder verbessert es.',
            '**Inspect:** Identifizieren Sie konkrete Änderungen — exakt, was umgeschrieben wurde, welche Details hinzugefügt wurden, welche Probleme behoben wurden. Dies erzeugt den Audit-Trail. Fordern Sie 5–7 spezifische Bearbeitungen mit Begründungen an.',
            '**Summarize:** Geben Sie eine prägnante Erklärung ab, was die neue Version nun sagt oder erreicht — nicht eine Wiederholung des Inhalts, sondern eine Metabeschreibung seines Fokus und seiner Betonung.',
            '**Evaluate:** Kritisieren Sie das Ergebnis gegen explizite Kriterien (Ton, Genauigkeit, Vollständigkeit, Zielgruppenausrichtung, Klarheit). Verwenden Sie eine numerische 1–5 Skala und fordern Sie je Kriterium eine Begründung mit einem Satz an.',
            '**Next steps:** Empfehlen Sie 3 fokussierte Verbesserungen für die nächste Iteration, damit Sie immer eine klare Richtung für weitere Verfeinerung haben.',
          ],
        },

        whyUseful: {
          title: 'Warum RISEN nützlich ist',
          id: 'warum-nutzlich',
          content: [
            '**Das RISEN-Framework ist nützlich, wenn Sie „machen Sie das besser" in einen transparenten, wiederholbaren Arbeitsablauf statt einer Black Box verwandeln möchten.** Es ermutigt das Modell nicht nur zu generieren, sondern auch seine eigene Arbeit zu analysieren und zu kritisieren.',
            'Praktische Vorteile sind:',
          ],
          items: [
            'Klare Sichtbarkeit darüber, was sich zwischen Versionen geändert hat — der Inspect-Schritt erzwingt vollständige Dokumentation.',
            'Strukturierte Selbstkritik, die Schwächen, Lücken und Möglichkeiten offenlegt.',
            'Ein eingebauter Fahrplan für die nächste Iteration, damit Sie nicht festsitzen und sich fragen, was Sie als nächstes versuchen sollen.',
            'Wiederholbarer Prozess, der vorlagiert, mit Teams geteilt und standardisiert werden kann.',
            'Audit-Trail für Compliance oder Wissensverwaltung — Sie können jede Revision rechtfertigen.',
          ],
        },

        badVsGood: {
          title: 'Schwaches vs. starkes RISEN-Prompt-Beispiel',
          id: 'schlecht-vs-gut',
          content: [
            '**Der Unterschied zwischen einer unstrukturierten Revisionsanfrage und einer RISEN-basierten Anfrage wird deutlich, wenn Sie beide auf denselben Entwurf anwenden.** Nachfolgend ein echtes Beispiel zur Verbesserung einer Produktbeschreibung.',
            '**[Schwacher Prompt]**',
            '"Verbessere diese Produktbeschreibung."',
            '**[Guter RISEN-Prompt]**',
            '"Du bist ein Produkt-Marketing-Editor. Ich werde dir einen Produktbeschreibungs-Entwurf geben. Nutze den RISEN-Prozess wie folgt: **Refine:** Schreibe die Beschreibung zur Klarheit und Prägnanz um, behalte aber alle sachlichen Details bei. Ziel: 120–160 Wörter. **Inspect:** Liste 5–7 spezifische Änderungen auf, die du vorgenommen hast (z.B. „Vorteil X geklärt", „wiederholten Satz Y entfernt", „Zielgruppe hinzugefügt"). **Summarize:** Erläutere in 2–3 Sätzen, worauf die aktualisierte Beschreibung nun den Fokus legt und was sich in ihrer Betonung verschoben hat. **Evaluate:** Bewerte die neue Beschreibung auf einer 1–5 Skala für Klarheit (1–5), Überzeugungskraft (1–5) und B2B-Zielgruppenausrichtung (1–5). Begründe jede Bewertung in einem Satz. **Next steps:** Empfehle 3 fokussierte Änderungen, die ich in einem zukünftigen Prompt anfordern könnte, um diese Beschreibung weiter zu verbessern. Entwurf: [Entwurf hier einfügen]"',
            'Die RISEN-Version verwandelt eine vage Anfrage in einen strukturierten Mini-Prozess, der nicht nur eine verbesserte Beschreibung liefert, sondern auch einen vollständigen Audit-Trail und einen Plan für den nächsten Zyklus.',
          ],
        },

        whenToUse: {
          title: 'Wann RISEN verwendet werden sollte',
          id: 'wann-verwenden',
          content: [
            '**Verwenden Sie das RISEN-Framework für iterative Verbesserungsaufgaben, bei denen Sie bereits Material haben und es wichtig ist, jede Änderung zu verstehen.** RISEN ist für Verfeinerung, nicht Erst-Draft-Generierung.',
          ],
          items: [
            'Verbesserung von Blog-Beiträgen, Dokumentation oder Help-Center-Artikeln über mehrere Runden.',
            'Verfeinerung von Verkaufsdecks, Pitch-Scripts und Geschäftszusammenfassungen.',
            'Überprüfung und Verbesserung von Prompts selbst, besonders komplexer in der Produktion.',
            'Iteratives Straffen langer Analysen, damit diese klarer und handlungsorientierter werden.',
            'Team-Inhaltsüberprüfungs-Arbeitsabläufe, bei denen mehrere Personen sehen müssen, was sich geändert hat.',
            'Code-Review und Dokumentationsverbesserung.',
          ],
        },

        comparisonTable: {
          title: 'Vergleichstabelle: CoT vs Single-Pass vs RISEN',
          id: 'vergleichstabelle',
          tableFormat: true,
          columns: ['Dimension', 'Chain-of-Thought (CoT)', 'Single-Pass-Prompt', 'RISEN-Framework'],
          rows: [
            {
              'Dimension': 'Struktur',
              'Chain-of-Thought (CoT)': 'Linear einzelner Pfad („denke Schritt für Schritt")',
              'Single-Pass-Prompt': 'Ein Generierungsversuch',
              'RISEN-Framework': 'Iterative 5-stufige Schleife mit Verbesserungszyklen'
            },
            {
              'Dimension': 'Kernaction',
              'Chain-of-Thought (CoT)': 'Modell schreibt Überlegung dann Antwort',
              'Single-Pass-Prompt': 'Modell generiert Ausgabe',
              'RISEN-Framework': 'Refine → Inspect → Summarize → Evaluate → Next Steps → wiederholen'
            },
            {
              'Dimension': 'Audit-Trail / Änderungsverfolgung',
              'Chain-of-Thought (CoT)': 'Nein — Überlegung wird gezeigt aber keine Revisionen',
              'Single-Pass-Prompt': 'Keine — Ausgabe ist endgültig',
              'RISEN-Framework': 'Ja — Inspect-Schritt dokumentiert jede Änderung'
            },
            {
              'Dimension': 'Best für',
              'Chain-of-Thought (CoT)': 'Mathematik, Logik, Erklärungen (einzelne richtige Antwort)',
              'Single-Pass-Prompt': 'Schnelle Generierung, einfache Aufgaben',
              'RISEN-Framework': 'Iterative Verbesserung, komplexe Dokumente, Team-Review'
            },
            {
              'Dimension': 'Token-Kosten vs. Baseline',
              'Chain-of-Thought (CoT)': '~1,5-2× (Überlegung hinzugefügt)',
              'Single-Pass-Prompt': 'Baseline (1×)',
              'RISEN-Framework': 'Variabel (2–5× pro Zyklus je nach Tiefe)'
            },
            {
              'Dimension': 'Mehrere Prompts erforderlich?',
              'Chain-of-Thought (CoT)': 'Nein — Überlegung + Antwort in einem Prompt',
              'Single-Pass-Prompt': 'Nein',
              'RISEN-Framework': 'Kann ein längerer Prompt oder 5 aufeinanderfolgende Prompts sein (Ihre Wahl)'
            },
            {
              'Dimension': 'Integrierter Modellvergleich',
              'Chain-of-Thought (CoT)': 'Nein',
              'Single-Pass-Prompt': 'Nein',
              'RISEN-Framework': 'Ja (senden Sie denselben RISEN-Zyklus über GPT, Claude, Gemini parallel über PromptQuorum)'
            },
          ],
        },

        howToWrite: {
          title: 'Wie man einen RISEN-Prompt schreibt',
          id: 'wie-schreiben',
          numberedItems: [
            '**Problem und erwartete Ergebnisse festlegen.** „Du bist [Rolle]. Deine Aufgabe ist es, [Materialtyp] mit dem RISEN-Prozess zu verfeinern."',
            '**Refine-Ziel explizit definieren.** „Verbessere für [spezifische Kriterien: Klarheit, Genauigkeit, Prägnanz, Ton, Zielgruppenausrichtung]. Ziel [Länge oder Format]."',
            '**Spezifische Inspect-Ausgabe erforderlich.** „Liste 5–7 spezifische Änderungen auf. Gib für jede an, was du geändert und warum."',
            '**Evaluate-Kriterien festlegen.** „Bewerte auf [3–5 benannte Dimensionen, z.B. Klarheit, Genauigkeit, Überzeugungskraft] auf einer 1–5 Skala. Begründe jede Bewertung in einem Satz."',
            '**Frage nach umsetzbaren nächsten Schritten.** „Empfehle 3 fokussierte Verbesserungen für die nächste Iteration."',
          ],
        },

        calloutBoxes: {
          title: 'Wichtige Hinweise',
          id: 'wichtige-hinweise',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Pro-Tipp',
              text: 'Geben Sie immer Bewertungskriterien an, bevor Sie RISEN ausführen. Vage Kriterien wie „machen Sie es besser" führen zu vagen Verbesserungen. Spezifische Kriterien wie „bewerte auf Klarheit (1–5), Genauigkeit (1–5), B2B-Ausrichtung (1–5)" führen zu messbaren Ergebnissen.',
            },
            {
              type: 'did-you-know',
              label: 'Wussten Sie schon',
              text: 'Der Inspect-Schritt ist das, was RISEN einzigartig macht. Die meisten Frameworks generieren Ausgabe. RISEN zwingt das Modell dazu, jede Änderung zu dokumentieren und erzeugt einen permanenten Audit-Trail. Dies ist der Grund, warum RISEN für regulierte Industrien, akademische Arbeit und Team-Zusammenarbeit unerlässlich ist, bei denen Nachverfolgbarkeit zählt.',
            },
            {
              type: 'warning',
              label: 'Warnung',
              text: 'RISEN fügt Overhead hinzu, der sich nur auszahlt, wenn iterative Verbesserung wichtig ist. Für schnelle Generierungsaufgaben sind Single-Schritt-Prompts oder CO-STAR effizienter. Für Eins-Zu-Eins-Übersetzungen oder einfache Änderungen ist RISEN zu aufwendig. Verwenden Sie es selektiv bei hochrangigen Entscheidungen.',
            },
          ],
        },

        commonMistakes: {
          title: 'Häufige Fehler bei der Verwendung von RISEN',
          id: 'haufige-fehler',
          mistakes: [
            {
              mistake: 'RISEN für Erst-Draft-Generierung verwenden',
              problem: 'RISEN benötigt vorhandenes Material zum Verfeinern. Wenn Sie ein Modell auffordern, zu „Refine", ohne es einen Entwurf zu geben, generiert es von Grund auf und der Inspect-Schritt hat nichts Aussagekräftiges zu melden.',
              fix: 'Verwenden Sie CO-STAR, CRAFT oder Single Step für Erst-Entwürfe. Wechseln Sie zu RISEN nur, wenn Sie Material zum Verbessern haben.',
            },
            {
              mistake: 'Den Inspect-Schritt überspringen',
              problem: 'Viele Benutzer springen von Refine zu Evaluate. Ohne Inspect verlieren Sie den Audit-Trail — Sie können nicht sehen, was sich geändert hat oder warum, was es unmöglich macht, zu beurteilen, ob die Verfeinerung die Ausgabe tatsächlich verbessert hat.',
              fix: 'Nehmen Sie immer Inspect auf. Fordern Sie das Modell auf, 5–7 spezifische Änderungen mit kurzer Begründung aufzulisten. Dies ist das, was den Audit-Trail erzeugt.',
            },
            {
              mistake: 'Vage Evaluate-Kriterien',
              problem: '„Bewerte dies auf Qualität" gibt dem Modell nichts zu bewerten. Ohne explizite Kriterien ist die Selbstbewertung bedeutungslos.',
              fix: 'Spezifizieren Sie 3–5 benannte Kriterien mit einer numerischen Skala. Beispiel: „Bewerte auf Klarheit (1–5), Genauigkeit (1–5), Zielgruppenausrichtung (1–5). Begründe jede in einem Satz."',
            },
            {
              mistake: 'Nur einen RISEN-Zyklus ausführen',
              problem: 'Ein Pass erreicht selten Produktionsqualität. RISEN ist für Iteration ausgelegt — die Next Steps-Ausgabe speist sich direkt in den nächsten Refine-Schritt ein.',
              fix: 'Planen Sie für 2–4 RISEN-Zyklen. Stoppen Sie, wenn die Bewertungsergebnisse abflachen und Next Steps-Vorschläge eher geringfügig sind.',
            },
            {
              mistake: 'RISEN-Ausgaben nicht über Modelle hinweg vergleichen',
              problem: 'Unterschiedliche Modelle verfeinern unterschiedlich. Claude neigt zu Prägnanz; GPT neigt zu Ausarbeitung; Gemini konzentriert sich auf Benutzerfreundlichkeit. Das Ausführen von RISEN auf einem Modell begrenzt Ihre Perspektive.',
              fix: 'Verwenden Sie PromptQuorum, um denselben RISEN-Zyklus über GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro parallel auszuführen. Vergleichen Sie, welche Verbesserungen eines Modells am besten zu Ihren Zielen passen.',
            },
          ],
        },

        risenInPromptQuorum: {
          title: 'RISEN in PromptQuorum',
          id: 'risen-promptquorum',
          content: [
            '**PromptQuorum ist ein Multi-Modell-AI-Dispatch-Tool, das das RISEN-Framework als eine seiner integrierten Prompt-Strukturen anbietet.** Wenn Sie die RISEN-Option wählen, stellt die App beschriftete Felder für jeden Schritt zur Verfügung und setzt sie in eine einzelne wiederverwendbare Anweisung um.',
            'Innerhalb von PromptQuorum ermöglicht RISEN Ihnen:',
          ],
          items: [
            'Einen bestehenden Entwurf einzufügen und ein vorgefertigtes „Refine–Inspect–Summarize–Evaluate–Next steps"-Muster anzuwenden, ohne das vollständige Meta-Prompt selbst zu schreiben.',
            'Senden Sie dieselben RISEN-basierten Anweisungen an mehrere Modelle — GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro — parallel und vergleichen Sie, wie jedes den Entwurf verfeinert und kritisiert.',
            'Speichern Sie RISEN-Vorlagen für wiederkehrende Arbeitsabläufe (z.B. „Blog-Entwurf-Verfeinerung", „Technische Dokumentation Review", „Verkaufsdeck Polieren") und teilen Sie sie mit Ihrem Team.',
            'Vollständige Revisionshistorie für jeden RISEN-Zyklus anzeigen, um den Verbesserungsprozess transparent und nachverfolgbar zu machen.',
          ],
        },

        combiningFrameworks: {
          title: 'RISEN mit anderen Frameworks kombinieren',
          id: 'mit-anderen-kombinieren',
          content: [
            '**Kombinieren Sie RISEN mit anderen Frameworks, indem Sie RISEN der Revisionsphase zuordnen und generierungsorientierte Frameworks früher in Ihrem Arbeitsablauf verwenden.** Ein praktisches Muster ist:',
            'Diese Trennung verhindert, dass das Modell „Erstellen" und „Verbessern" vermischt — zwei fundamentally unterschiedliche kognitive Aufgaben.',
          ],
          numberedItems: [
            'Verwenden Sie CO-STAR, CRAFT oder Single Step, um den ersten Entwurf zu erstellen.',
            'Wechseln Sie zu RISEN für iterative Verbesserung, Selbstkritik und Planung.',
            'Wechseln Sie zu SPECS, wenn die endgültige Ausgabe einem strikten Schema oder Format entsprechen muss (optional).',
          ],
        },

        faqSection: {
          title: 'Häufig gestellte Fragen',
          id: 'faq',
          faqs: [
            {
              q: 'Wofür steht RISEN?',
              a: 'RISEN steht für Refine, Inspect, Summarize, Evaluate, Next Steps. Es ist ein 5-stufiges iteratives Framework für die Verbesserung bestehender Entwürfe durch strukturierte Revisionszyklen.',
            },
            {
              q: 'Wie unterscheidet sich RISEN von CO-STAR oder CRAFT?',
              a: 'CO-STAR und CRAFT sind Generierungs-Frameworks — sie helfen Ihnen, Erst-Entwürfe zu erstellen. RISEN ist ein Verbesserungs-Framework — es hilft Ihnen, vorhandenes Material durch nachverfolgbare Iterationen zu verbessern. Verwenden Sie Generierungs-Frameworks zum Erstellen, wechseln Sie dann zu RISEN zum Verfeinern.',
            },
            {
              q: 'Wann sollte ich RISEN vs. andere Frameworks verwenden?',
              a: 'Verwenden Sie RISEN, wenn Sie bereits einen Entwurf haben und kontrollierte Verbesserung wünschen. Verwenden Sie CO-STAR für allgemeine Erst-Draft-Generierung, CRAFT für kreativen Inhalt, RTF für strukturierte Rollen-Aufgaben-Format-Spezifikationen und TRACE zum Verständnis von Modellüberlegungen.',
            },
            {
              q: 'Wie viele RISEN-Zyklen benötige ich?',
              a: 'Typischerweise 2–4 Zyklen. Stoppen Sie, wenn die Bewertungsergebnisse abflachen (aufeinanderfolgende Zyklen erzielen dieselbe Bewertung) und Next Steps-Vorschläge eher geringfügige Formatierungsanpassungen statt substantieller Verbesserungen werden.',
            },
            {
              q: 'Kann ich RISEN mit lokalen Modellen verwenden?',
              a: 'Ja. RISEN funktioniert mit jedem LLM, das Anweisungen folgt — einschließlich lokaler Modelle über Ollama oder LM Studio. Größere Modelle (13B+) verarbeiten die Multi-Schritt-Struktur besser; 7B-Modelle benötigen möglicherweise jeden Schritt als separaten Prompt.',
            },
            {
              q: 'Was macht den Inspect-Schritt besonders?',
              a: 'Der Inspect-Schritt zwingt das Modell, jede spezifische Änderung, die es im Refine-Schritt vorgenommen hat, aufzulisten und zu rechtfertigen. Dies erzeugt einen Audit-Trail — Sie können genau sehen, was sich zwischen Versionen geändert hat und warum jede Änderung vorgenommen wurde.',
            },
            {
              q: 'Kann ich RISEN mit Multi-Modell-Tests kombinieren?',
              a: 'Ja. Verwenden Sie PromptQuorum, um denselben RISEN-Zyklus an GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro gleichzeitig zu senden. Vergleichen Sie, welche Modell-Verbesserungen, Selbstkritik-Bewertungen und Next-Step-Vorschläge am besten zu Ihren Anforderungen passen.',
            },
            {
              q: 'Erhöht RISEN die Token-Kosten?',
              a: 'Ja. Jeder RISEN-Zyklus generiert 2–5× mehr Output-Tokens als ein Single-Pass-Prompt, weil das Modell mehrere Abschnitte schreibt (verbesserter Inhalt, Änderungsprotokoll, Zusammenfassung, Bewertung, Empfehlungen). Verwenden Sie RISEN selektiv bei hochrangigen Aufgaben. Für schnelle Änderungen bevorzugen Sie Single-Schritt-Prompts.',
            },
            {
              q: 'Muss ich bei der Verwendung von RISEN die DSGVO beachten?',
              a: 'Ja, wenn Sie vertrauliche interne Dokumente über RISEN verfeinern. Wenn Sie Cloud-APIs wie OpenAI, Google oder Anthropic verwenden, beachten Sie, dass diese Daten außerhalb der EU verarbeitet werden. Für DSGVO-sensible Arbeitsabläufe verwenden Sie lokal gehostete Modelle (Ollama, LM Studio) über PromptQuorum oder erkunden Sie Anthropic-Angebote, die EU-Standards erfüllen.',
            },
            {
              q: 'Ist RISEN für den deutschen Mittelstand geeignet?',
              a: 'Ja. RISEN ist besonders für Mittelstand-Unternehmen geeignet, die formale Dokumentation und strikte Qualitätskontrolle schätzen. RISEN hilft bei iterativer Verbesserung von Compliance-Dokumenten, technischen Spezifikationen und redaktioneller Qualitätssicherung — alle Bereiche, in denen der deutsche Mittelstand hohe Standards erwartet.',
            },
          ],
        },

        relatedReading: {
          title: 'Verwandte Lektüre',
          id: 'verwandte-lekture',
          items: [
            { title: 'Chain-of-Thought Prompting', url: '/prompt-engineering/chain-of-thought-prompting?lang=de' },
            { title: 'CO-STAR Framework', url: '/prompt-engineering/co-star-framework?lang=de' },
            { title: 'CRAFT Framework', url: '/prompt-engineering/craft-framework?lang=de' },
            { title: 'TRACE Framework', url: '/prompt-engineering/trace-framework?lang=de' },
            { title: 'Welches Prompt-Framework sollten Sie verwenden?', url: '/prompt-engineering/which-prompt-framework-should-you-use?lang=de' },
            { title: 'Erstellen Sie Ihr eigenes Prompt-Framework', url: '/prompt-engineering/build-your-own-prompt-framework?lang=de' },
          ],
        },

        sources: {
          title: 'Quellen',
          id: 'quellen',
          items: [
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608. Katalogisiert 58+ Prompting-Techniken einschließlich iterativer Verbesserungsmuster.',
            'OpenAI Prompt Engineering Guide. https://platform.openai.com/docs/guides/prompt-engineering — Offizielle Prompting-Best-Practices einschließlich iterativer Verbesserungsstrategien.',
            'Anthropic Prompt Engineering Documentation. https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Claude-spezifische Anleitung zu Multi-Schritt-Prompt-Arbeitsabläufen.',
          ],
        },
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RISEN-Framework: Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
        description: 'RISEN-Framework für iterative Prompt-Verfeinerung: Entwürfe verbessern, Änderungen nachverfolgen, bewerten, nächste Schritte planen. Multi-Modell-Test mit PromptQuorum.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        'url': 'https://www.promptquorum.com/prompt-engineering/risen-framework?lang=de',
        'inLanguage': 'de',
        keywords: ['RISEN-Framework', 'iteratives Prompting', 'Prompt-Verfeinerung', 'Prompt Engineering', 'PromptQuorum', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RISEN-Framework' },
          { '@type': 'Thing', name: 'Iteratives Prompting' },
          { '@type': 'Thing', name: 'Prompt-Verfeinerung' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },

      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Wofür steht RISEN?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RISEN steht für Refine, Inspect, Summarize, Evaluate, Next Steps. Es ist ein 5-stufiges iteratives Framework für die Verbesserung bestehender Entwürfe durch strukturierte Revisionszyklen.' } },
          { '@type': 'Question', 'name': 'Wie unterscheidet sich RISEN von CO-STAR oder CRAFT?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR und CRAFT sind Generierungs-Frameworks — sie helfen Ihnen, Erst-Entwürfe zu erstellen. RISEN ist ein Verbesserungs-Framework — es hilft Ihnen, vorhandenes Material durch nachverfolgbare Iterationen zu verbessern.' } },
          { '@type': 'Question', 'name': 'Wann sollte ich RISEN vs. andere Frameworks verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Verwenden Sie RISEN, wenn Sie bereits einen Entwurf haben und kontrollierte Verbesserung wünschen. Verwenden Sie CO-STAR für allgemeine Erst-Draft-Generierung, CRAFT für kreativen Inhalt, RTF für strukturierte Rollen-Aufgaben-Format-Spezifikationen und TRACE zum Verständnis von Modellüberlegungen.' } },
          { '@type': 'Question', 'name': 'Wie viele RISEN-Zyklen benötige ich?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typischerweise 2–4 Zyklen. Stoppen Sie, wenn die Bewertungsergebnisse abflachen und Next Steps-Vorschläge eher geringfügige Anpassungen statt substantieller Verbesserungen werden.' } },
          { '@type': 'Question', 'name': 'Kann ich RISEN mit lokalen Modellen verwenden?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. RISEN funktioniert mit jedem LLM, das Anweisungen folgt — einschließlich lokaler Modelle über Ollama oder LM Studio. Größere Modelle (13B+) verarbeiten die Multi-Schritt-Struktur besser.' } },
          { '@type': 'Question', 'name': 'Was macht den Inspect-Schritt besonders?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Der Inspect-Schritt zwingt das Modell, jede spezifische Änderung aufzulisten, wodurch ein Audit-Trail entsteht. Sie können genau sehen, was sich zwischen Versionen geändert hat und warum jede Änderung vorgenommen wurde.' } },
          { '@type': 'Question', 'name': 'Kann ich RISEN mit Multi-Modell-Tests kombinieren?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Verwenden Sie PromptQuorum, um denselben RISEN-Zyklus an GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro gleichzeitig zu senden. Vergleichen Sie, welche Modell-Verbesserungen am besten zu Ihren Anforderungen passen.' } },
          { '@type': 'Question', 'name': 'Erhöht RISEN die Token-Kosten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Jeder RISEN-Zyklus generiert 2–5× mehr Output-Tokens als ein Single-Pass-Prompt. Verwenden Sie RISEN selektiv bei hochrangigen Aufgaben. Für schnelle Änderungen bevorzugen Sie Single-Schritt-Prompts.' } },
          { '@type': 'Question', 'name': 'Muss ich bei der Verwendung von RISEN die DSGVO beachten?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, wenn Sie vertrauliche interne Dokumente verfeinern. Für DSGVO-sensible Arbeitsabläufe verwenden Sie lokal gehostete Modelle (Ollama, LM Studio) über PromptQuorum oder Anthropic EU-Angebote, die Standards erfüllen.' } },
          { '@type': 'Question', 'name': 'Ist RISEN für den deutschen Mittelstand geeignet?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. RISEN ist besonders für Mittelstand-Unternehmen geeignet. Es hilft bei iterativer Verbesserung von Compliance-Dokumenten, technischen Spezifikationen und Qualitätssicherung — Bereiche, in denen der deutsche Mittelstand hohe Standards erwartet.' } },
        ],
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'CoT vs Single-Pass vs RISEN Vergleich',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Struktur', 'description': 'CoT: Linear einzelner Pfad. Single-Pass: Ein Generierungsversuch. RISEN: Iterative 5-stufige Schleife.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Kernaction', 'description': 'CoT: Überlegung dann Antwort. Single-Pass: Generieren. RISEN: Refine → Inspect → Summarize → Evaluate → Next Steps → wiederholen.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Audit-Trail', 'description': 'CoT: Keine Änderungsverfolgung. Single-Pass: Keine. RISEN: Ja — Inspect dokumentiert jede Änderung.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Best für', 'description': 'CoT: Mathematik und Logik. Single-Pass: Schnelle Aufgaben. RISEN: Iterative Verbesserung und Team-Review.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Token-Kosten', 'description': 'CoT: 1,5–2×. Single-Pass: 1× Baseline. RISEN: 2–5× pro Zyklus.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Mehrere Prompts?', 'description': 'CoT: Nein. Single-Pass: Nein. RISEN: Kann längerer Prompt oder 5 aufeinanderfolgende Prompts sein.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Modellvergleich', 'description': 'CoT: Nein. Single-Pass: Nein. RISEN: Ja — parallel über GPT, Claude, Gemini via PromptQuorum.' },
        ],
      },
    },

    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Framework RISEN : Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
      intro: 'Le Framework RISEN est une structure itérative en 5 étapes pour améliorer systématiquement les résultats de l\'IA via des cycles de révision structurés. Au lieu d\'accepter le premier brouillon ou de tout réécrire, utilisez RISEN pour une amélioration contrôlée avec traçabilité intégrale. Chaque étape a un objectif distinct : Refine améliore le brouillon, Inspect documente chaque changement, Summarize explique la nouvelle version, Evaluate l\'évalue contre des critères, et Next Steps recommande des améliorations futures. RISEN transforme « améliorez ceci » en workflow transparent et reproductible.',
      leadAnswerBlock: '**RISEN est une boucle itérative en 5 étapes : Refine améliore le brouillon, Inspect liste chaque changement avec justification, Summarize explique la nouvelle version, Evaluate la note selon des critères (échelle 1–5), et Next Steps recommande 3 améliorations ciblées pour le prochain cycle. Utilisez RISEN quand vous avez déjà un brouillon et souhaitez une amélioration contrôlée et traçable avec audit trail. L\'étape Inspect force le modèle à documenter les changements — rendant les révisions traçables. En 2026, RISEN est intégré à PromptQuorum comme option multi-modèles, permettant de tester le même cycle RISEN sur GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro en parallèle.**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '13 min de lecture',
      seoTitle: 'Framework RISEN : Refine, Inspect, Summarize, Evaluate (2026)',
      metaDescription: 'Framework RISEN pour amélioration itérative : affiner les brouillons, suivre les changements, évaluer, planifier les prochaines étapes. Tests multi-modèles avec PromptQuorum.',
      educationalLevel: 'Intermediate',
      audience: 'Développeurs construisant des workflows de prompts, équipes produit itérant le contenu, équipes avec reviews multi-étapes',
      primaryTerm: 'Framework RISEN',
      aboutTopics: ['Framework RISEN', 'Prompting itératif', 'Raffinement de prompts', 'Workflows multi-étapes'],
      next_refresh_due: '2026-09-24',

      quickFacts: [
        'RISEN = Refine, Inspect, Summarize, Evaluate, Next Steps — boucle itérative en 5 étapes pour amélioration contrôlée',
        'Utilisez RISEN quand vous avez un brouillon. Ne l\'utilisez pas pour génération initiale — combinez avec CO-STAR ou CRAFT pour cela.',
        'L\'étape Inspect est unique : force le modèle à lister chaque changement spécifique et justifier. Crée un audit trail intégral.',
        'Workflow type : 2–4 cycles RISEN pour atteindre qualité production depuis brouillon brut. Chaque cycle produit : contenu amélioré, journal des changements (Inspect), plan d\'actions (Next Steps).',
        'Fonctionne avec tous les modèles : GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, modèles locaux via Ollama ou LM Studio.',
        'Pattern RISEN + CO-STAR : utilisez CO-STAR pour génération initiale, basculez à RISEN pour amélioration itérative. Sépare « créer » de « raffiner ».',
      ],

      toc: [
        { anchor: 'points-cles', label: 'Points clés' },
        { anchor: 'quest-ce-risen', label: 'Qu\'est-ce que le Framework RISEN?' },
        { anchor: 'cinq-composants', label: 'Les cinq composants du RISEN' },
        { anchor: 'pourquoi-utile', label: 'Pourquoi RISEN est utile' },
        { anchor: 'quand-utiliser', label: 'Quand utiliser RISEN' },
        { anchor: 'tableau-comparaison', label: 'Tableau de comparaison (CoT vs Single-Pass vs RISEN)' },
        { anchor: 'mauvais-vs-bon', label: 'Mauvais vs bon exemple de prompt RISEN' },
        { anchor: 'comment-ecrire', label: 'Comment écrire un prompt RISEN' },
        { anchor: 'conseils-cles', label: 'Conseils clés' },
        { anchor: 'erreurs-courantes', label: 'Erreurs courantes lors de l\'utilisation de RISEN' },
        { anchor: 'risen-promptquorum', label: 'RISEN dans PromptQuorum' },
        { anchor: 'combiner-frameworks', label: 'Combiner RISEN avec d\'autres frameworks' },
        { anchor: 'faq', label: 'Questions fréquemment posées' },
        { anchor: 'lectures-connexes', label: 'Lectures connexes' },
        { anchor: 'sources', label: 'Sources' },
      ],

      sections: {
        tldr: {
          isTldr: true,
          title: 'Points clés',
          id: 'points-cles',
          items: [
            'RISEN est une boucle itérative en 5 étapes — Refine, Inspect, Summarize, Evaluate, Next Steps — transformant « améliorez ceci » en workflow structuré avec audit trail.',
            'Utilisez RISEN pour affinage itératif. Ne l\'utilisez pas pour génération initiale — combinez avec CO-STAR ou CRAFT pour cette phase.',
            'L\'étape Inspect est unique : force le modèle à lister chaque changement spécifique et le justifier. Crée un audit trail complet.',
            'Workflow type : 2–4 cycles RISEN pour qualité production. Chaque cycle produit contenu amélioré, journal des changements et recommandations.',
            'RISEN fonctionne avec tous les modèles : GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Ollama, LM Studio.',
            'Dans PromptQuorum, RISEN est intégré. Envoyez le même cycle RISEN à plusieurs modèles simultanément et comparez.',
            'Utilisez PromptQuorum pour tester RISEN — voyez quel approche de raffinement correspond le mieux à vos objectifs.',
          ],
        },

        whatIsRISEN: {
          title: 'Qu\'est-ce que le Framework RISEN?',
          id: 'quest-ce-risen',
          snippets: [
            { type: 'in-one-sentence', text: 'RISEN est une boucle itérative en 5 étapes transformant « améliorez ceci » en workflow structuré et reproductible avec audit trail intégral.' },
            { type: 'in-plain-terms', text: 'Au lieu de dire « améliorez ceci » et espérer, dites au modèle de corriger (Refine), lister les changements (Inspect), expliquer la nouvelle version (Summarize), s\'auto-évaluer (Evaluate) et proposer les prochaines améliorations (Next Steps). Vous répétez jusqu\'à obtention du résultat.' },
          ],
          content: [
            '**Le Framework RISEN est un pattern itératif conçu pour affiner les brouillons, analyses et plans via plusieurs cycles d\'amélioration.** Au lieu de traiter chaque prompt comme une tâche unique, vous guidez un modèle comme GPT-5.5, Claude Opus 4.7 ou Gemini 3.1 Pro via une boucle structurée et reproductible. Cela rend votre workflow moins essai-erreur et plus édition continue.',
            'RISEN excelle quand vous avez une première version — article brouillon, note stratégique, snippet code, analyse — et souhaitez que le modèle l\'améliore de façon contrôlée et traçable. Chaque étape RISEN a un objectif distinct, gardant les révisions ciblées et documentées.',
            'Le framework tire son nom de ses cinq étapes : **R**efine (améliorer le brouillon), **I**nspect (identifier les changements), **S**ummarize (expliquer ce qui a changé), **E**valuate (évaluer selon critères), et **N**ext steps (recommander améliorations).',
          ],
        },

        fiveComponents: {
          title: 'Les cinq composants du RISEN',
          id: 'cinq-composants',
          content: [
            '**Un bon prompt RISEN demande explicitement au modèle de parcourir cinq phases, chacune avec une sortie définie.** Combinez ces phases en un prompt long ou séparez-les en prompts séquentiels selon votre contrôle souhaité.',
          ],
          items: [
            '**Refine :** Améliorez le brouillon existant selon vos objectifs (clarté, structure, précision, concision, alignement audience, ton, etc.). Le modèle réécrit ou améliore le matériel original.',
            '**Inspect :** Identifiez les changements concrets — exactement ce qui a été réécrit, quels détails ajoutés, quels problèmes résolus. Crée l\'audit trail. Exigez 5–7 changements spécifiques avec justifications.',
            '**Summarize :** Fournissez explication concise de ce que la nouvelle version dit ou réalise — pas répétition du contenu, mais description au niveau méta.',
            '**Evaluate :** Critiquez le résultat selon critères explicites (ton, précision, complétude, alignement audience, clarté). Échelle 1–5 avec justification d\'une phrase par critère.',
            '**Next steps :** Recommandez 3 améliorations ciblées pour l\'itération suivante, gardant toujours une direction claire.',
          ],
        },

        whyUseful: {
          title: 'Pourquoi RISEN est utile',
          id: 'pourquoi-utile',
          content: [
            '**RISEN est utile quand transformant « améliorez ceci » en workflow transparent et reproductible plutôt qu\'une boîte noire.** Il encourage le modèle non seulement à générer, mais analyser et critiquer son propre travail.',
            'Avantages pratiques :',
          ],
          items: [
            'Visibilité nette de ce qui a changé entre versions — l\'étape Inspect impose documentation complète.',
            'Auto-critique structurée exposant faiblesses, lacunes et opportunités.',
            'Feuille de route intégrée pour l\'itération suivante, jamais bloqué sur quoi essayer ensuite.',
            'Processus reproductible pouvant être préconfiguré, partagé avec équipes et standardisé.',
            'Audit trail pour conformité ou gestion des connaissances — justifier chaque révision.',
          ],
        },

        badVsGood: {
          title: 'Mauvais vs bon exemple de prompt RISEN',
          id: 'mauvais-vs-bon',
          content: [
            '**La différence entre une demande d\'édition non-structurée et une demande RISEN devient claire en appliquant les deux au même brouillon.** Exemple concret pour amélioration de description produit.',
            '**[Mauvais prompt]**',
            '"Améliore cette description produit."',
            '**[Bon prompt RISEN]**',
            '"Vous êtes un éditeur produit-marketing. Je vais vous donner un brouillon de description. Utilisez le processus RISEN : **Refine :** Réécrivez pour clarté et concision en gardant tous détails factuels. Ciblez 120–160 mots. **Inspect :** Listez 5–7 changements spécifiques (ex. « clarifié bénéfice X », « supprimé phrase répétée Y », « audience ajoutée »). **Summarize :** En 2–3 phrases, expliquez ce que la nouvelle version souligne. **Evaluate :** Notez sur échelle 1–5 pour clarté (1–5), persuasion (1–5), alignement B2B (1–5), justifiez chaque. **Next steps :** Suggérez 3 améliorations ciblées pour prompt futur. Brouillon : [insérez ici]"',
            'La version RISEN transforme demande vague en mini-processus structuré, produisant non seulement description améliorée mais aussi audit trail et plan pour prochain cycle.',
          ],
        },

        whenToUse: {
          title: 'Quand utiliser RISEN',
          id: 'quand-utiliser',
          content: [
            '**Utilisez RISEN pour tâches d\'amélioration itérative où matériel existant et chaque changement compte.** RISEN est pour affinage, pas génération initiale.',
          ],
          items: [
            'Affinage articles blogs, documentation ou articles help-center sur plusieurs passes.',
            'Polissage decks ventes, scripts pitch et résumés exécutifs.',
            'Révision et amélioration des prompts eux-mêmes, particulièrement complexes en production.',
            'Serrage itératif d\'analyses longues pour plus de clarté et pertinence.',
            'Workflows review contenu d\'équipe où plusieurs personnes doivent voir changements.',
            'Code review et amélioration documentation.',
          ],
        },

        comparisonTable: {
          title: 'Tableau de comparaison : CoT vs Single-Pass vs RISEN',
          id: 'tableau-comparaison',
          tableFormat: true,
          columns: ['Dimension', 'Chain-of-Thought (CoT)', 'Single-Pass', 'RISEN'],
          rows: [
            {
              'Dimension': 'Structure',
              'Chain-of-Thought (CoT)': 'Chemin unique linéaire (« pense étape par étape »)',
              'Single-Pass': 'Une tentative génération',
              'RISEN': 'Boucle itérative 5-étapes avec cycles amélioration'
            },
            {
              'Dimension': 'Action coeur',
              'Chain-of-Thought (CoT)': 'Modèle écrit raisonnement puis réponse',
              'Single-Pass': 'Modèle génère sortie',
              'RISEN': 'Refine → Inspect → Summarize → Evaluate → Next Steps → répéter'
            },
            {
              'Dimension': 'Audit trail / suivi changements',
              'Chain-of-Thought (CoT)': 'Non — raisonnement affiché mais pas révisions',
              'Single-Pass': 'Aucun — sortie est finale',
              'RISEN': 'Oui — étape Inspect documente chaque changement'
            },
            {
              'Dimension': 'Meilleur pour',
              'Chain-of-Thought (CoT)': 'Maths, logique, explications (réponse unique correcte)',
              'Single-Pass': 'Génération rapide, tâches simples',
              'RISEN': 'Amélioration itérative, documents complexes, review équipe'
            },
            {
              'Dimension': 'Coût tokens vs baseline',
              'Chain-of-Thought (CoT)': '~1,5–2× (raisonnement ajouté)',
              'Single-Pass': 'Baseline (1×)',
              'RISEN': 'Variable (2–5× par cycle selon profondeur)'
            },
            {
              'Dimension': 'Prompts multiples?',
              'Chain-of-Thought (CoT)': 'Non — raisonnement + réponse un prompt',
              'Single-Pass': 'Non',
              'RISEN': 'Peut être prompt long ou 5 prompts séquentiels (votre choix)'
            },
            {
              'Dimension': 'Comparaison modèle intégrée',
              'Chain-of-Thought (CoT)': 'Non',
              'Single-Pass': 'Non',
              'RISEN': 'Oui (même cycle RISEN à GPT, Claude, Gemini parallèle via PromptQuorum)'
            },
          ],
        },

        howToWrite: {
          title: 'Comment écrire un prompt RISEN',
          id: 'comment-ecrire',
          numberedItems: [
            '**Énoncez problème et livrables attendus.** « Vous êtes [rôle]. Votre tâche : affiner [type matériel] via processus RISEN."',
            '**Définissez objectif Refine explicitement.** « Améliorez pour [critères spécifiques : clarté, précision, concision, ton, alignement]. Ciblez [longueur ou format]. »',
            '**Exigez sortie Inspect spécifique.** « Listez 5–7 changements spécifiques. Pour chaque, énoncez quoi changé et pourquoi. »',
            '**Spécifiez critères Evaluate.** « Notez sur [3–5 dimensions nommées, ex. clarté, précision, persuasion] échelle 1–5. Justifiez chaque rating une phrase. »',
            '**Demandez prochaines étapes actionnables.** « Recommandez 3 améliorations ciblées pour prochaine itération. »',
          ],
        },

        calloutBoxes: {
          title: 'Conseils clés',
          id: 'conseils-cles',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Conseil pratique',
              text: 'Spécifiez toujours critères d\'évaluation avant d\'exécuter RISEN. Critères vagues mènent améliorations vagues. Critères spécifiques comme « note sur clarté (1–5), précision (1–5), alignement B2B (1–5) » mènent résultats mesurables.',
            },
            {
              type: 'did-you-know',
              label: 'Le saviez-vous',
              text: 'L\'étape Inspect rend RISEN unique. La plupart frameworks génèrent sortie. RISEN force le modèle à documenter chaque changement, créant audit trail permanent. C\'est pourquoi RISEN est essentiel pour industries régulées, travail académique et collaboration d\'équipe nécessitant traçabilité.',
            },
            {
              type: 'warning',
              label: 'Attention',
              text: 'RISEN ajoute surcharge ne payant que quand amélioration itérative compte. Pour tâches génération rapide, prompts single-step ou CO-STAR plus efficients. Pour traductions ou simples édits, RISEN trop lourd. Utilisez sélectivement sur décisions critiques.',
            },
          ],
        },

        commonMistakes: {
          title: 'Erreurs courantes lors de l\'utilisation de RISEN',
          id: 'erreurs-courantes',
          mistakes: [
            {
              mistake: 'Utiliser RISEN pour génération initiale',
              problem: 'RISEN a besoin matériel existant. Sans brouillon fourni, génère depuis zéro et Inspect n\'a rien de significatif à rapporter.',
              fix: 'Utilisez CO-STAR, CRAFT ou Single Step pour brouillons. Basculez RISEN seulement quand matériel à affiner.',
            },
            {
              mistake: 'Sauter étape Inspect',
              problem: 'Beaucoup sautent de Refine à Evaluate. Sans Inspect, perdez audit trail — impossible voir quoi changé ou pourquoi.',
              fix: 'Incluez toujours Inspect. Exigez 5–7 changements spécifiques avec brèves justifications. C\'est ce qui crée audit trail.',
            },
            {
              mistake: 'Critères Evaluate vagues',
              problem: '« Noter sur qualité » ne donne rien au modèle. Sans critères explicites, auto-évaluation insuffisante.',
              fix: 'Spécifiez 3–5 critères nommés avec échelle numérique. Ex. : « Noter sur clarté (1–5), précision (1–5), alignement audience (1–5). »',
            },
            {
              mistake: 'Exécuter seulement un cycle RISEN',
              problem: 'Un pass rarement atteint qualité production. RISEN conçu pour itération — sortie Next Steps alimente prochaine Refine.',
              fix: 'Planifiez 2–4 cycles RISEN. Arrêtez quand ratings s\'aplatissent et Next Steps suggestions mineures plutôt substancielles.',
            },
            {
              mistake: 'Ne pas comparer sorties RISEN entre modèles',
              problem: 'Modèles différents affinent différemment. Claude vers concision ; GPT vers élaboration ; Gemini expérience utilisateur. Un modèle limite perspective.',
              fix: 'Utilisez PromptQuorum envoyant même cycle RISEN à GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro parallèle. Comparez approches.',
            },
          ],
        },

        risenInPromptQuorum: {
          title: 'RISEN dans PromptQuorum',
          id: 'risen-promptquorum',
          content: [
            '**PromptQuorum est outil dispatch multi-modèles offrant RISEN comme structure prompt intégrée.** Sélectionnez option RISEN, l\'app fournit champs étiquetés par étape et les compose instruction unique réutilisable.',
            'Dans PromptQuorum, RISEN vous permet :',
          ],
          items: [
            'Brancher brouillon existant et appliquer pattern pré-structuré « Refine–Inspect–Summarize–Evaluate–Next steps » sans écrire meta-prompt.',
            'Envoyer même instructions RISEN-basées à modèles multiples — GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro — parallèle et comparer affinages.',
            'Sauvegarder templates RISEN pour workflows récurrents (ex. « blog draft refinement », « product copy review ») et partager équipe.',
            'Historique révisions complet pour chaque cycle RISEN, rendant amélioration process transparent et traçable.',
          ],
        },

        combiningFrameworks: {
          title: 'Combiner RISEN avec d\'autres frameworks',
          id: 'combiner-frameworks',
          content: [
            '**Combinez RISEN avec autres frameworks assignant RISEN phase révision et utilisant frameworks génération tôt.** Pattern pratique :',
            'Cette séparation empêche modèle confondre « créer » et « améliorer » — deux tâches cognitives fundamentalement différentes.',
          ],
          numberedItems: [
            'Utilisez CO-STAR, CRAFT ou Single Step créer brouillon initial.',
            'Basculez RISEN pour amélioration itérative, auto-critique et planification.',
            'Allez SPECS si sortie finale doit respecter schema strict (optionnelle).',
          ],
        },

        faqSection: {
          title: 'Questions fréquemment posées',
          id: 'faq',
          faqs: [
            {
              q: 'Que signifie RISEN?',
              a: 'RISEN signifie Refine, Inspect, Summarize, Evaluate, Next Steps. C\'est framework itératif 5-étapes conçu améliorer brouillons existants via cycles révision structurés.',
            },
            {
              q: 'Comment RISEN diffère de CO-STAR ou CRAFT?',
              a: 'CO-STAR et CRAFT sont frameworks génération — aident créer brouillons initiaux. RISEN est framework amélioration — aide affiner matériel existant via itérations traçables. Utilisez génération frameworks créer, basculez RISEN affiner.',
            },
            {
              q: 'Quand utiliser RISEN vs autres frameworks?',
              a: 'Utilisez RISEN avec brouillon existant voulant amélioration contrôlée. Utilisez CO-STAR génération-draft générale, CRAFT contenu créatif, RTF spécifications rôles-tâches, TRACE comprendre raisonnement modèle.',
            },
            {
              q: 'Combien de cycles RISEN faut-il?',
              a: 'Typiquement 2–4 cycles. Arrêtez quand ratings s\'aplatissent (cycles consécutifs même score) et suggestions Next Steps mineures plutôt substancielles.',
            },
            {
              q: 'Puis-je utiliser RISEN avec modèles locaux?',
              a: 'Oui. RISEN fonctionne avec n\'importe LLM suivant instructions — incluant modèles locaux via Ollama ou LM Studio. Modèles plus grands (13B+) gèrent mieux structure multi-étapes.',
            },
            {
              q: 'Qu\'est-ce qui rend l\'étape Inspect spéciale?',
              a: 'Inspect force modèle lister chaque changement spécifique fait pendant Refine, créant audit trail. Vous voyez exactement quoi changé entre versions et pourquoi chaque changement fait.',
            },
            {
              q: 'Puis-je combiner RISEN avec tests multi-modèles?',
              a: 'Oui. Utilisez PromptQuorum envoyant même cycle RISEN à GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro simultanément. Comparez améliorations, critiques, suggestions.',
            },
            {
              q: 'RISEN augmente-t-il coût tokens?',
              a: 'Oui. Chaque cycle RISEN génère 2–5× plus output tokens qu\'un prompt single-pass car modèle écrit sections multiples (contenu amélioré, journal changements, évaluation, recommandations). Utilisez RISEN sélectivement. Pour édits rapides, préférez prompts single-step.',
            },
            {
              q: 'Si je traite données personnelles sensibles, quelles sont implications RGPD?',
              a: 'Quand affinement documents confidentiels, soyez prudents APIs cloud (OpenAI, Google, Anthropic traitent données hors EU). Pour workflows RGPD-sensibles, utilisez modèles auto-hébergés (Ollama, LM Studio) via PromptQuorum ou explorez offres Anthropic respectant standards EU.',
            },
            {
              q: 'RISEN aide-t-il avec révisions multi-équipes?',
              a: 'Oui. RISEN excelle workflows multi-personnes. Refine par auteur initial, Inspect par reviewer senior, Summarize par lead, Evaluate par décideur final. Cette séparation augmente objectivité et capture perspectives différentes.',
            },
          ],
        },

        relatedReading: {
          title: 'Lectures connexes',
          id: 'lectures-connexes',
          items: [
            { title: 'Chain-of-Thought Prompting', url: '/prompt-engineering/chain-of-thought-prompting?lang=fr' },
            { title: 'Framework CO-STAR', url: '/prompt-engineering/co-star-framework?lang=fr' },
            { title: 'Framework CRAFT', url: '/prompt-engineering/craft-framework?lang=fr' },
            { title: 'Framework TRACE', url: '/prompt-engineering/trace-framework?lang=fr' },
            { title: 'Quel Framework Prompt Utiliser?', url: '/prompt-engineering/which-prompt-framework-should-you-use?lang=fr' },
            { title: 'Construisez Votre Propre Framework Prompt', url: '/prompt-engineering/build-your-own-prompt-framework?lang=fr' },
          ],
        },

        sources: {
          title: 'Sources',
          id: 'sources',
          items: [
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608. Catalogue 58+ techniques prompting incluant patterns amélioration itérative.',
            'OpenAI Prompt Engineering Guide. https://platform.openai.com/docs/guides/prompt-engineering — Bonnes pratiques prompting officielles incluant stratégies amélioration itérative.',
            'Anthropic Prompt Engineering Documentation. https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Guide Claude-spécifique sur workflows prompts multi-étapes.',
          ],
        },
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Framework RISEN : Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
        description: 'Framework RISEN pour amélioration itérative : affiner les brouillons, suivre les changements, évaluer, planifier les prochaines étapes. Tests multi-modèles avec PromptQuorum.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        'url': 'https://www.promptquorum.com/prompt-engineering/risen-framework?lang=fr',
        'inLanguage': 'fr',
        keywords: ['Framework RISEN', 'prompting itératif', 'raffinement prompts', 'ingénierie prompts', 'PromptQuorum', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RISEN' },
          { '@type': 'Thing', name: 'Prompting itératif' },
          { '@type': 'Thing', name: 'Raffinement de prompts' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },

      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Que signifie RISEN?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RISEN signifie Refine, Inspect, Summarize, Evaluate, Next Steps. C\'est framework itératif 5-étapes conçu améliorer brouillons existants via cycles révision structurés.' } },
          { '@type': 'Question', 'name': 'Comment RISEN diffère de CO-STAR ou CRAFT?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR et CRAFT sont frameworks génération — aident créer brouillons initiaux. RISEN est framework amélioration — aide affiner matériel existant via itérations traçables.' } },
          { '@type': 'Question', 'name': 'Quand utiliser RISEN vs autres frameworks?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Utilisez RISEN avec brouillon existant voulant amélioration contrôlée. Utilisez CO-STAR génération-draft générale, CRAFT contenu créatif, TRACE compréhension raisonnement.' } },
          { '@type': 'Question', 'name': 'Combien de cycles RISEN faut-il?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Typiquement 2–4 cycles. Arrêtez quand ratings s\'aplatissent et Next Steps suggestions mineures plutôt substancielles.' } },
          { '@type': 'Question', 'name': 'Puis-je utiliser RISEN avec modèles locaux?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. RISEN fonctionne avec n\'importe LLM suivant instructions — incluant modèles locaux via Ollama ou LM Studio. Modèles plus grands (13B+) gèrent mieux.' } },
          { '@type': 'Question', 'name': 'Qu\'est-ce qui rend l\'étape Inspect spéciale?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Inspect force modèle lister chaque changement spécifique, créant audit trail. Vous voyez exactement quoi changé entre versions et pourquoi.' } },
          { '@type': 'Question', 'name': 'Puis-je combiner RISEN avec tests multi-modèles?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Utilisez PromptQuorum envoyant même cycle RISEN à GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro simultanément. Comparez améliorations et suggestions.' } },
          { '@type': 'Question', 'name': 'RISEN augmente-t-il coût tokens?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Chaque cycle RISEN génère 2–5× plus output tokens qu\'un prompt single-pass. Utilisez RISEN sélectivement. Pour édits rapides, préférez prompts single-step.' } },
          { '@type': 'Question', 'name': 'Si je traite données sensibles, implications RGPD?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Pour workflows RGPD-sensibles, utilisez modèles auto-hébergés (Ollama, LM Studio) via PromptQuorum ou explorez offres Anthropic respectant standards EU.' } },
          { '@type': 'Question', 'name': 'RISEN aide-t-il révisions multi-équipes?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. RISEN excelle workflows multi-personnes où différentes personnes gèrent Refine, Inspect, Evaluate, augmentant objectivité et perspective diverse.' } },
        ],
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Comparaison CoT vs Single-Pass vs RISEN',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Structure', 'description': 'CoT: Chemin unique. Single-Pass: Une génération. RISEN: Boucle itérative 5-étapes.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Action coeur', 'description': 'CoT: Raisonnement puis réponse. Single-Pass: Générer. RISEN: Refine → Inspect → Summarize → Evaluate → Next Steps → répéter.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Audit trail', 'description': 'CoT: Pas suivi changements. Single-Pass: Aucun. RISEN: Oui — Inspect documente chaque changement.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Meilleur pour', 'description': 'CoT: Maths et logique. Single-Pass: Tâches rapides. RISEN: Amélioration itérative et review équipe.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Coût tokens', 'description': 'CoT: 1,5–2×. Single-Pass: 1× baseline. RISEN: 2–5× par cycle.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'Prompts multiples?', 'description': 'CoT: Non. Single-Pass: Non. RISEN: Peut être prompt long ou 5 séquentiels.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Comparaison modèle', 'description': 'CoT: Non. Single-Pass: Non. RISEN: Oui — parallèle GPT, Claude, Gemini via PromptQuorum.' },
        ],
      },
    },

    ja: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RISENフレームワーク：Refine、Inspect、Summarize、Evaluate、Next Steps（2026年）',
      intro: 'RISENフレームワークは、5段階の反復プロセスでAI出力を体系的に改善するツールです。初期ドラフトを受け入れたり、ゼロから書き直したりするのではなく、制御された改善と完全な監査証跡を使います。各ステップには明確な目的があります。Refineはドラフトを改善し、Inspectはすべての変更を記録し、Summarizeは新しいバージョンを説明し、Evaluateは基準に対して評価し、Next Stepsは次の改善を推奨します。RISENは「これを改善して」を構造化された再現可能なワークフローに変えます。',
      leadAnswerBlock: '**RISENは5段階の反復ループです：Refineはドラフトを改善し、Inspectは各変更を正当化を含めてリストアップし、Summarizeは新バージョンを説明し、Evaluateは基準に対して評価（1～5スケール）し、Next Stepsは次サイクルの3つの焦点を絞った改善を推奨します。既にドラフトがあり、制御された追跡可能な改善と監査証跡が必要な場合にRISENを使用します。Inspectステップは、モデルに変更を記録することを強制します。2026年、RISENはPromptQuorumにマルチモデルディスパッチオプションとして統合され、同じRISENサイクルをGPT-5.5、Claude Opus 4.7、Gemini 3.1 Proで並行してテストして改善アプローチを比較できます。**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '13分で読める',
      seoTitle: 'RISENフレームワーク：Refine、Inspect、Summarize、Evaluate（2026年）',
      metaDescription: 'RISENで反復的にプロンプト改善：ドラフト改善、変更追跡、基準評価、次のステップ計画。PromptQuorumでマルチモデルテスト。',
      educationalLevel: 'Intermediate',
      audience: 'プロンプトワークフローを構築する開発者、コンテンツを反復処理する製品チーム、複数段階のレビューを行うチーム',
      primaryTerm: 'RISENフレームワーク',
      aboutTopics: ['RISENフレームワーク', '反復的プロンプティング', 'プロンプト改善', '複数ステップワークフロー'],
      next_refresh_due: '2026-09-24',

      quickFacts: [
        'RISEN = Refine、Inspect、Summarize、Evaluate、Next Steps — 制御された出力改善のための5段階反復ループ',
        'ドラフトがある場合にRISENを使用。初期ドラフト生成には使用しない — CO-STARやCRAFTと組み合わせる',
        'Inspectステップは独特：モデルに各変更をリストアップして正当化させ、監査証跡を作成。他のフレームワークにはない',
        '典型的なワークフロー：2～4回のRISENサイクルで本番品質を達成。各サイクルは改善されたコンテンツ、変更ログ、アクションプランを生成',
        'すべてのモデルで動作：GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、OllamaやLM Studioの地元モデル',
        'RISEN + CO-STAR組み合わせパターン：CO-STARで初期ドラフト生成、その後RISENで反復改善。「作成」と「改善」を分離',
      ],

      toc: [
        { anchor: 'juyou-pointo', label: '重要ポイント' },
        { anchor: 'risen-to-wa', label: 'RISENフレームワークとは' },
        { anchor: 'go-no-kompone-nto', label: 'RISENの5つのコンポーネント' },
        { anchor: 'naze-yuyou', label: 'RISENが有用な理由' },
        { anchor: 'itsu-tsukau', label: 'RISENを使うべき場合' },
        { anchor: 'hikaku-hyo', label: '比較表（CoT vs Single-Pass vs RISEN）' },
        { anchor: 'warui-vs-yoi', label: '悪いvs良いRISENプロンプト例' },
        { anchor: 'kaku-hoho', label: 'RISENプロンプトを書く方法' },
        { anchor: 'juyou-hinto', label: '重要なヒント' },
        { anchor: 'ayamari', label: 'RISEN使用時の一般的な誤り' },
        { anchor: 'pq-no-risen', label: 'PromptQuorumでのRISEN' },
        { anchor: 'konawase', label: 'RISENを他のフレームワークと組み合わせる' },
        { anchor: 'faq', label: 'よくある質問' },
        { anchor: 'kanren-shiryo', label: '関連資料' },
        { anchor: 'sanko', label: '参考文献' },
      ],

      sections: {
        tldr: {
          isTldr: true,
          title: '重要ポイント',
          id: 'juyou-pointo',
          items: [
            'RISENは5段階反復ループ — 「これを改善して」を構造化された再現可能なワークフローに監査証跡付きで変える',
            '反復的改善（既存ドラフト改善）に使用。初期ドラフト生成には使用しない — CO-STARやCRAFTと組み合わせる',
            'Inspectステップは独特：各変更を記録。完全な監査証跡が得られる',
            '典型的：2～4サイクルで本番品質。各サイクルは改善コンテンツ、変更ログ、推奨を生成',
            'すべてのモデルで動作：GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、Ollama、LM Studio',
            'PromptQuorumで統合。同じサイクルを複数モデルで同時実行して比較',
            'PromptQuorumでRISENパターンをテスト — どのモデルの改善アプローチが目標に最適かを確認',
          ],
        },

        whatIsRISEN: {
          title: 'RISENフレームワークとは',
          id: 'risen-to-wa',
          snippets: [
            { type: 'in-one-sentence', text: 'RISENは5段階反復ループで、「これを改善して」を構造化された再現可能なワークフロー with 監査証跡に変えます' },
            { type: 'in-plain-terms', text: '「改善して」と言うのではなく、修正させ（Refine）、変更をリストアップさせ（Inspect）、新バージョンを説明させ（Summarize）、自己評価させ（Evaluate）、次の改善を提案させます（Next Steps）。完了まで繰り返します。' },
          ],
          content: [
            '**RISENフレームワークは、複数改善サイクルを通じてドラフト、分析、計画を改善する反復パターンです。** 各プロンプトを1回限りの作業ではなく、GPT-5.5、Claude Opus 4.7、Gemini 3.1 Proなどのモデルを構造化された再現可能ループで導きます。これにより、ワークフローは試行錯誤よりも継続的編集に見えます。',
            'RISENは、既に第1版がある場合、すなわちドラフト記事、戦略ノート、コードスニペット、分析があり、制御可能で追跡可能な方法でモデルに改善させたい場合に特に有用です。各RISENステップは明確な目的を持っており、改善を焦点を絞ったものにします。',
            'フレームワークは5つのステップから名前が付いています：**R**efine（ドラフト改善）、**I**nspect（変更を特定）、**S**ummarize（変更内容を説明）、**E**valuate（基準に対して評価）、**N**ext steps（改善を推奨）。',
          ],
        },

        fiveComponents: {
          title: 'RISENの5つのコンポーネント',
          id: 'go-no-kompone-nto',
          content: [
            '**強いRISENプロンプトは5つのフェーズを明示的に要求し、各フェーズは明確な出力を持ちます。** これらのフェーズを1つの長いプロンプトに組み合わせるか、コントロール希望に応じて連続プロンプトに分割できます。',
          ],
          items: [
            '**Refine :** 既存ドラフトを目標に従って改善（明確さ、構造、精度、簡潔さ、オーディエンス適合など）。モデルが原文を書き直すか改善します。',
            '**Inspect :** 具体的な変更を特定 — 何が書き直され、どの詳細が追加され、どの問題が解決されたか。これが監査証跡を作成します。5～7個の具体的な編集と正当性を要求します。',
            '**Summarize :** 新バージョンが何を言うか、または達成するかの簡潔な説明 — コンテンツの繰り返しではなく、メタレベルの説明。',
            '**Evaluate :** 明確な基準に対して結果を批評（トーン、精度、完全性、オーディエンス適合、明確さ）。1～5スケールで、基準ごと1文の正当性。',
            '**Next steps :** 次の反復に向けた3つの焦点を絞った改善を推奨。常に次のステップが明確です。',
          ],
        },

        whyUseful: {
          title: 'RISENが有用な理由',
          id: 'naze-yuyou',
          content: [
            '**RISENは「改善して」をブラックボックスではなく透明な再現可能なワークフローに変えたい場合に有用です。** モデルに生成するだけでなく、自分の仕事を分析・批評させます。',
            '実用的なメリット：',
          ],
          items: [
            'バージョン間で何が変わったかの明確な可視性 — Inspectステップが完全記録を強制',
            '弱点、ギャップ、機会を露出させた構造化された自己批評',
            '次の反復への組み込みロードマップ。次に何を試すかで行き詰まらない',
            '再現可能なプロセス。テンプレート化、チーム共有、標準化可能',
            'コンプライアンスや知識管理のための監査証跡 — 各改善を正当化できる',
          ],
        },

        badVsGood: {
          title: '悪いvs良いRISENプロンプト例',
          id: 'warui-vs-yoi',
          content: [
            '**非構造化編集要求とRISEN要求の違いは、同じドラフトに両方を適用すると明らかになります。** 製品説明改善の実例。',
            '**【悪いプロンプト】**',
            '"この製品説明を改善して。"',
            '**【良いRISENプロンプト】**',
            '"あなたは製品マーケティングエディタ。ドラフト説明を与えます。RISENプロセスを使用：**Refine :** 明確さと簡潔性のため書き直し、全事実詳細は保持。目標120～160語。**Inspect :** 実施した5～7個の具体的編集をリストアップ（例：「利点X明確化」「繰り返し文Y削除」）。**Summarize :** 2～3文で新バージョンが何を強調するか説明。**Evaluate :** 明確さ（1～5）、説得力（1～5）、B2Bオーディエンス適合（1～5）で1～5スケール評価、各1文正当化。**Next steps :** 今後のプロンプトで要求できる3つの焦点を絞った編集を提案。ドラフト：【ここに挿入】"',
            'RISEN版は曖昧な要求をミニプロセスに変え、改善説明だけでなく完全監査証跡とプランを生成。',
          ],
        },

        whenToUse: {
          title: 'RISENを使うべき場合',
          id: 'itsu-tsukau',
          content: [
            '**既に資料があり、各変更がどう大切かをケアする反復改善タスクにRISENを使用します。** RISENは改善、初期ドラフト生成ではありません。',
          ],
          items: [
            'ブログ記事、ドキュメント、ヘルプセンター記事を複数ラウンドで改善',
            'セールスデッキ、ピッチスクリプト、役員サマリーをポリッシング',
            'プロンプト自体の確認・改善、特に本番環境の複雑なもの',
            '長い分析をイテレーティブに締め付けて、より明確で実行可能に',
            '複数人が変更を見る必要があるチームコンテンツレビューワークフロー',
            'コードレビューとドキュメント改善',
          ],
        },

        comparisonTable: {
          title: '比較表：CoT vs Single-Pass vs RISEN',
          id: 'hikaku-hyo',
          tableFormat: true,
          columns: ['次元', 'Chain-of-Thought（CoT）', 'Single-Pass', 'RISEN'],
          rows: [
            {
              '次元': '構造',
              'Chain-of-Thought（CoT）': '線形単一パス（「段階ごとに考えて」）',
              'Single-Pass': '1回の生成試み',
              'RISEN': 'サイクル付き5段階反復ループ'
            },
            {
              '次元': 'コアアクション',
              'Chain-of-Thought（CoT）': 'モデルが推理を書き、その後回答',
              'Single-Pass': 'モデルが出力を生成',
              'RISEN': 'Refine → Inspect → Summarize → Evaluate → Next Steps → 繰り返し'
            },
            {
              '次元': '監査証跡/変更追跡',
              'Chain-of-Thought（CoT）': 'いいえ — 推理表示、改訂なし',
              'Single-Pass': 'なし — 出力は最終版',
              'RISEN': 'はい — Inspectステップが各変更を記録'
            },
            {
              '次元': '最適用途',
              'Chain-of-Thought（CoT）': '数学、論理、説明（単一正解）',
              'Single-Pass': '高速生成、簡単タスク',
              'RISEN': '反復改善、複雑ドキュメント、チームレビュー'
            },
            {
              '次元': 'トークン原価 vs ベースライン',
              'Chain-of-Thought（CoT）': '~1.5～2×（推理追加）',
              'Single-Pass': 'ベースライン（1×）',
              'RISEN': '変数（深さ依存で2～5×/サイクル）'
            },
            {
              '次元': '複数プロンプト必要？',
              'Chain-of-Thought（CoT）': 'いいえ — 推理+回答1プロンプト',
              'Single-Pass': 'いいえ',
              'RISEN': '長プロンプト、または5連続プロンプト（選択）'
            },
            {
              '次元': '組み込みモデル比較',
              'Chain-of-Thought（CoT）': 'いいえ',
              'Single-Pass': 'いいえ',
              'RISEN': 'はい（GPT、Claude、Gemini同時）'
            },
          ],
        },

        howToWrite: {
          title: 'RISENプロンプトを書く方法',
          id: 'kaku-hoho',
          numberedItems: [
            '**問題と期待出力を述べます。** 「あなたは【役割】。タスク：【資料タイプ】をRISENで改善。」',
            '**Refine目標を明確に定義。** 「改善先：【基準：明確さ、精度、簡潔さ、トーン、適合】。目標【長さまたは形式】。」',
            '**Inspect出力を指定。** 「リストアップ5～7具体的編集。各について何を変え、なぜか述べる。」',
            '**Evaluate基準を指定。** 「【3～5名付き次元、例：明確さ、精度、説得力】を1～5スケール評価。各1文正当化。」',
            '**アクション可能なNext Stepsを要求。** 「次サイクルに向けた3つの焦点を絞った改善を推奨。」',
          ],
        },

        calloutBoxes: {
          title: '重要なヒント',
          id: 'juyou-hinto',
          callouts: [
            {
              type: 'pro-tip',
              label: 'プロのコツ',
              text: 'RISEN実行前に評価基準を常に指定します。曖昧な基準は曖昧な改善を招きます。「明確さ（1～5）、精度（1～5）、B2B適合（1～5）」のような具体的基準は測定可能な結果を招きます。',
            },
            {
              type: 'did-you-know',
              label: '知ってましたか',
              text: 'InspectステップがRISENを独特にします。ほとんどのフレームワークは出力を生成。RISENはモデルに各変更を記録させ、永続的監査証跡を作成。これが規制産業、学術研究、追跡必要なチーム協業にRISENが不可欠な理由。',
            },
            {
              type: 'warning',
              label: '警告',
              text: 'RISENはオーバーヘッドを追加。反復改善が大切な場合のみペイする。高速生成ではsingle-stepやCO-STARが効率的。1回翻訳や簡単編集ではRISEN過剰。戦略的決定で選択的に使用。',
            },
          ],
        },

        commonMistakes: {
          title: 'RISEN使用時の一般的な誤り',
          id: 'ayamari',
          mistakes: [
            {
              mistake: '初期ドラフト生成にRISENを使う',
              problem: 'RISENは改善資料が必要。ドラフト提供なしで「Refine」要求は、ゼロから生成、Inspectが報告すべきなし',
              fix: '初期ドラフトにCO-STAR、CRAFT、Single Step使う。改善資料がある場合のみRISEN',
            },
            {
              mistake: 'Inspectステップをスキップ',
              problem: 'Refineから直接Evaluateに飛ぶ。Inspect無しでは監査証跡失う — 何が変わり、なぜか不可視',
              fix: '常にInspectを含める。5～7具体的編集と簡潔な正当化を要求。これが監査証跡を作成',
            },
            {
              mistake: '曖昧なEvaluate基準',
              problem: '「品質で評価」はモデルに評価対象なし。基準なしで自己評価は無意味',
              fix: '3～5命名基準を数値スケールで指定。例：「明確さ（1～5）、精度（1～5）、適合（1～5）。」',
            },
            {
              mistake: '1つのRISENサイクルのみ実行',
              problem: '1パスが本番品質に到達しない。RISENは反復用設計 — Next Steps出力が次Refineに',
              fix: '2～4サイクル計画。評価が安定し、提案が軽微になったら停止',
            },
            {
              mistake: 'RISEN出力をモデル間で比較しない',
              problem: 'モデルは異なるように改善。Claudeは簡潔；GPTは詳細；Geminiはユーザー体験。1モデルは視野限定',
              fix: 'PromptQuorumで同じRISENをGPT-5.5、Claude Opus 4.7、Gemini 3.1 Proに並行実行。比較',
            },
          ],
        },

        risenInPromptQuorum: {
          title: 'PromptQuorumでのRISEN',
          id: 'pq-no-risen',
          content: [
            '**PromptQuorumはマルチモデル AI ディスパッチツールで、RISENを組み込みプロンプト構造として提供。** RISENオプション選択時、アプリが各ステップの自動フィールドを提供し、再利用可能命令に合成。',
            'PromptQuorum内でRISENは：',
          ],
          items: [
            '既存ドラフト挿入で「Refine–Inspect–Summarize–Evaluate–Next steps」パターンを適用。メタプロンプト自作不要。',
            '同じRISEN命令を複数モデル — GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro — 並行送信、各改善方法を比較',
            'RISENテンプレート保存で繰返ワークフロー（「ブログ改善」「製品コピーレビュー」など）、チーム共有',
            '各RISENサイクルの完全改版履歴。改善プロセスが透明で追跡可能',
          ],
        },

        combiningFrameworks: {
          title: 'RISENを他のフレームワークと組み合わせる',
          id: 'konawase',
          content: [
            '**RISENを他フレームワークと組み合わせ、RISENを改善フェーズに割り当て、生成フレームワークを早期に使用します。** 実用パターン：',
            'この分離は「作成」と「改善」を混在させないようにします — 2つの根本的に異なる認知タスク。',
          ],
          numberedItems: [
            'CO-STAR、CRAFT、Single Step使い初期ドラフト作成',
            'RISENに切り替え反復改善、自己批評、計画',
            '最終出力が厳格スキーマに従う必要ならSPECS（オプション）',
          ],
        },

        faqSection: {
          title: 'よくある質問',
          id: 'faq',
          faqs: [
            {
              q: 'RISENは何を意味していますか？',
              a: 'RISENはRefine、Inspect、Summarize、Evaluate、Next Steps。既存ドラフトを構造化改訂サイクルで改善するための5段階フレームワーク。',
            },
            {
              q: 'RISENとCO-STARやCRAFTはどう異なりますか？',
              a: 'CO-STARとCRAFTは生成フレームワーク — 初期ドラフト作成。RISENは改善フレームワーク — 既存資料を追跡可能反復で改善。',
            },
            {
              q: 'RISENと他フレームワークはいつ使い分けますか？',
              a: '既存ドラフトで制御改善ならRISEN。一般初期ドラフト生成ならCO-STAR、創造的コンテンツならCRAFT、役割指定ならRTF、推理理解ならTRACE。',
            },
            {
              q: 'RISENサイクルは何回必要ですか？',
              a: '通常2～4サイクル。評価が安定（連続サイクル同スコア）し、提案が軽微になったら停止。',
            },
            {
              q: 'ローカルモデルでRISEN使えますか？',
              a: 'はい。指示を遵守するLLMなら — OllamaやLM Studioの地元モデルを含む。大きいモデル（13B+）が多段階対応良好。',
            },
            {
              q: 'Inspectステップが特別なのはなぜですか？',
              a: 'Inspectはモデルに各変更具体的に記録させ、監査証跡作成。バージョン間で何が変わり、なぜかが見えます。',
            },
            {
              q: 'RISENをマルチモデルテストと組み合わせられますか？',
              a: 'はい。PromptQuorumで同じRISENをGPT-5.5、Claude Opus 4.7、Gemini 3.1 Proに同時送信。改善方法を比較。',
            },
            {
              q: 'RISENはトークンコストを増やしますか？',
              a: 'はい。各サイクルは単一パスの2～5倍output生成（改善コンテンツ、変更ログ、評価、推奨）。戦略的に選択使用。',
            },
            {
              q: 'センシティブ資料処理時、規制考慮はありますか？',
              a: '機密ドキュメント改善時、クラウドAPI利用に注意（OpenAI、Google、Anthropicは非EU処理）。規制敏感作業にはOllama、LM Studio利用、またはAnthropicのEU対応オプション検討。',
            },
            {
              q: 'RISENはチーム複数人レビューに役立ちますか？',
              a: 'はい。Refineを初期作者、Inspectを上級レビュア、Summarizeをリード、Evaluateを決定者で処理。分割が客観性向上と多視点捕捉を実現。',
            },
          ],
        },

        relatedReading: {
          title: '関連資料',
          id: 'kanren-shiryo',
          items: [
            { title: 'Chain-of-Thought Prompting', url: '/prompt-engineering/chain-of-thought-prompting?lang=ja' },
            { title: 'CO-STARフレームワーク', url: '/prompt-engineering/co-star-framework?lang=ja' },
            { title: 'CRAFTフレームワーク', url: '/prompt-engineering/craft-framework?lang=ja' },
            { title: 'TRACEフレームワーク', url: '/prompt-engineering/trace-framework?lang=ja' },
            { title: 'どのプロンプトフレームワークを使いますか？', url: '/prompt-engineering/which-prompt-framework-should-you-use?lang=ja' },
            { title: '独自プロンプトフレームワークを構築する', url: '/prompt-engineering/build-your-own-prompt-framework?lang=ja' },
          ],
        },

        sources: {
          title: '参考文献',
          id: 'sanko',
          items: [
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608. 58+プロンプティング技法を反復改善パターン含め分類。',
            'OpenAI Prompt Engineering Guide. https://platform.openai.com/docs/guides/prompt-engineering — 公式プロンプティング現在慣行、反復改善戦略含め。',
            'Anthropic Prompt Engineering Documentation. https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Claude特有、複数段階プロンプトワークフロー指針。',
          ],
        },
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RISENフレームワーク：Refine、Inspect、Summarize、Evaluate、Next Steps（2026年）',
        description: 'RISEN反復改善：ドラフト改善、変更追跡、基準評価、次のステップ計画。PromptQuorumでマルチモデルテスト。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        'url': 'https://www.promptquorum.com/prompt-engineering/risen-framework?lang=ja',
        'inLanguage': 'ja',
        keywords: ['RISENフレームワーク', '反復的プロンプティング', 'プロンプト改善', 'プロンプト・エンジニアリング', 'PromptQuorum', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RISENフレームワーク' },
          { '@type': 'Thing', name: '反復的プロンプティング' },
          { '@type': 'Thing', name: 'プロンプト改善' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },

      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RISENは何を意味していますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RISENはRefine、Inspect、Summarize、Evaluate、Next Steps。既存ドラフトを構造化改訂サイクルで改善するための5段階フレームワーク。' } },
          { '@type': 'Question', 'name': 'RISENとCO-STARやCRAFTはどう異なりますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STARとCRAFTは生成フレームワーク — 初期ドラフト作成。RISENは改善フレームワーク — 既存資料を追跡可能反復で改善。' } },
          { '@type': 'Question', 'name': 'RISENと他フレームワークはいつ使い分けますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '既存ドラフトで制御改善ならRISEN。一般初期ドラフト生成ならCO-STAR、創造的コンテンツならCRAFT、推理理解ならTRACE。' } },
          { '@type': 'Question', 'name': 'RISENサイクルは何回必要ですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '通常2～4サイクル。評価が安定（連続サイクル同スコア）し、提案が軽微になったら停止。' } },
          { '@type': 'Question', 'name': 'ローカルモデルでRISEN使えますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。指示を遵守するLLMなら — OllamaやLM Studioの地元モデルを含む。大きいモデル（13B+）が多段階対応良好。' } },
          { '@type': 'Question', 'name': 'Inspectステップが特別なのはなぜですか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Inspectはモデルに各変更具体的に記録させ、監査証跡作成。バージョン間で何が変わり、なぜかが見えます。' } },
          { '@type': 'Question', 'name': 'RISENをマルチモデルテストと組み合わせられますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。PromptQuorumで同じRISENをGPT-5.5、Claude Opus 4.7、Gemini 3.1 Proに同時送信。改善方法を比較。' } },
          { '@type': 'Question', 'name': 'RISENはトークンコストを増やしますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。各サイクルは単一パスの2～5倍output生成。戦略的に選択使用。' } },
          { '@type': 'Question', 'name': 'センシティブ資料処理時、規制考慮はありますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': '機密ドキュメント改善時、クラウドAPI利用に注意。規制敏感作業にはOllama、LM Studio利用またはAnthropicのEU対応検討。' } },
          { '@type': 'Question', 'name': 'RISENはチーム複数人レビューに役立ちますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。Refineを初期作者、Inspectを上級レビュア、Evaluateを決定者で処理。分割が客観性向上。' } },
        ],
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'CoT vs Single-Pass vs RISEN比較',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '構造', 'description': 'CoT：線形単一。Single-Pass：1回生成。RISEN：5段階反復ループ。' },
          { '@type': 'ListItem', 'position': 2, 'name': 'コアアクション', 'description': 'CoT：推理次回答。Single-Pass：生成。RISEN：Refine → Inspect → Summarize → Evaluate → Next Steps → 繰り返し。' },
          { '@type': 'ListItem', 'position': 3, 'name': '監査証跡', 'description': 'CoT：変更追跡なし。Single-Pass：なし。RISEN：はい — Inspect記録。' },
          { '@type': 'ListItem', 'position': 4, 'name': '最適用途', 'description': 'CoT：数学論理。Single-Pass：高速タスク。RISEN：反復改善とチームレビュー。' },
          { '@type': 'ListItem', 'position': 5, 'name': 'トークン原価', 'description': 'CoT：1.5～2×。Single-Pass：1×ベース。RISEN：2～5×/サイクル。' },
          { '@type': 'ListItem', 'position': 6, 'name': '複数プロンプト', 'description': 'CoT：いいえ。Single-Pass：いいえ。RISEN：長プロンプトまたは5連続。' },
          { '@type': 'ListItem', 'position': 7, 'name': 'モデル比較', 'description': 'CoT：いいえ。Single-Pass：いいえ。RISEN：はい — GPT、Claude、Gemini並行。' },
        ],
      },
    },

    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RISEN框架：Refine、Inspect、Summarize、Evaluate、Next Steps（2026）',
      intro: 'RISEN框架是一个5阶段的迭代系统，用来通过结构化的修订循环来系统性地改进AI生成的内容。与其接受初稿或从零开始重写，不如使用RISEN进行受控改进，建立完整的审计记录。每个阶段都有不同的目的：Refine改进草稿，Inspect记录每一个变更，Summarize解释新版本是什么，Evaluate用标准打分，Next Steps推荐进一步改进。RISEN把"把这个改得更好"转变为一个透明、可重复的工作流程。',
      leadAnswerBlock: '**RISEN是一个5阶段的迭代优化框架：Refine改进草稿，Inspect列举每一个变更及其理由，Summarize解释新版本的作用，Evaluate按标准打分（1-5分），Next Steps推荐下一阶段的3个重点改进。在已经有初稿的时候使用RISEN，通过可跟踪的改进获得受控的、可审计的升级。Inspect步骤的独特之处在于强制模型记录所有变更——让修订变成可追踪的。在2026年，RISEN内置于PromptQuorum中，成为多模型分发选项，让您可以在GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro上同时测试RISEN循环，比较不同的改进方法。**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04 — RISEN框架原始论文（Yao等，2023），PromptQuorum原生RISEN实现',
      readTime: '阅读约13分钟',
      seoTitle: 'RISEN框架2026：迭代优化Prompt的5步方法',
      metaDescription: 'RISEN框架用于迭代优化Prompt：改进草稿、追踪变更、总结结果、评估标准、规划下一步。用PromptQuorum测试多个模型。',
      educationalLevel: 'Intermediate',
      audience: '构建Prompt工作流的开发者、迭代内容的产品团队、进行多阶段审核的团队、研究者',
      primaryTerm: 'RISEN框架',
      aboutTopics: ['RISEN框架', '迭代式提示词', '提示词优化', '多步骤工作流'],
      next_refresh_due: '2026-09-24',

      quickFacts: [
        'RISEN = Refine、Inspect、Summarize、Evaluate、Next Steps — 一个5步的迭代循环，用于受控的内容改进',
        '使用RISEN当您已经有初稿、文档或计划。不要用于初期草稿生成 — 那种情况结合CO-STAR或CRAFT。',
        'Inspect步骤是独特的：强制模型列出每一个具体变更及其理由，建立审计记录。其他框架都没有这个内置的问责制。',
        '典型工作流：从粗糙草稿到生产质量需要2-4个RISEN循环。每个循环产生3个输出：改进内容、变更日志（Inspect）、行动计划（Next Steps）。',
        '适用于任何模型：GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro，以及通过Ollama或LM Studio的本地模型。13B以上的大模型能更好地处理多步结构；7B模型可能需要分离步骤。',
        'RISEN + CO-STAR组合模式：使用CO-STAR进行初期草稿生成，然后切换到RISEN进行迭代改进。分离"创建"和"改进" — 两个根本不同的任务。',
      ],

      toc: [
        { anchor: 'key-takeaways', label: '核心要点' },
        { anchor: 'what-is-risen', label: 'RISEN框架是什么？' },
        { anchor: 'five-components', label: 'RISEN的五个组成部分' },
        { anchor: 'why-useful', label: '为什么RISEN有用' },
        { anchor: 'when-to-use', label: '何时使用RISEN' },
        { anchor: 'comparison-table', label: '比较表（CoT vs 单次提示 vs RISEN）' },
        { anchor: 'bad-vs-good', label: '糟糕示例 vs 优秀RISEN Prompt示例' },
        { anchor: 'how-to-write', label: '如何编写RISEN Prompt' },
        { anchor: 'common-mistakes', label: '使用RISEN时的常见错误' },
        { anchor: 'risen-in-promptquorum', label: 'PromptQuorum中的RISEN' },
        { anchor: 'combining-frameworks', label: '将RISEN与其他框架组合' },
        { anchor: 'faq', label: '常见问题' },
        { anchor: 'related-reading', label: '相关阅读' },
        { anchor: 'sources', label: '信息来源' },
      ],

      sections: {
        tldr: {
          isTldr: true,
          title: '核心要点',
          id: 'key-takeaways',
          items: [
            'RISEN是一个5步的迭代循环 — Refine、Inspect、Summarize、Evaluate、Next Steps — 把"把这个改得更好"变成一个结构化、可重复、带有审计记录的改进工作流。',
            '使用RISEN进行迭代改进（改进现有草稿）。不要用于初期草稿生成 — 结合CO-STAR或CRAFT来处理那个阶段。',
            'Inspect步骤是独特的：强制模型列出每一个具体变更及其理由。这建立了审计记录 — 您可以确切看到改了什么以及为什么。',
            '典型工作流：2-4个RISEN循环达到生产质量。每个循环产生改进内容、变更日志和下一阶段的建议。',
            'RISEN适用于任何模型：GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、Ollama、LM Studio。13B以上的大模型更好地处理多步结构。',
            '在PromptQuorum中，RISEN是内置的。把同一个RISEN循环同时发送给多个模型，比较每个模型如何以不同的方式改进。',
            '使用PromptQuorum测试跨模型的RISEN模式 — 看哪个模型的改进方法最符合你的目标。',
          ],
        },

        whatIsRISEN: {
          title: 'RISEN框架是什么？',
          id: 'what-is-risen',
          snippets: [
            { type: 'in-one-sentence', text: 'RISEN是一个5步的迭代循环 — Refine、Inspect、Summarize、Evaluate、Next Steps — 把"把这个改得更好"变成一个结构化、可重复的改进工作流，带有完整的审计记录。' },
            { type: 'in-plain-terms', text: '与其说"改进这个"然后希望最好的结果，不如告诉AI修复它（Refine）、列出它改了什么（Inspect）、解释新版本是什么（Summarize）、给自己打分（Evaluate），然后建议下一步改什么（Next Steps）。重复直到完成。' },
          ],
          content: [
            '**RISEN框架是一个迭代Prompt模式，通过多个改进循环来改进现有的草稿、分析和计划。** 与其把每个Prompt当作一次性任务，不如引导GPT-5.5、Claude Opus 4.7或Gemini 3.1 Pro这样的模型通过一个结构化、可重复的改进循环。这使得您的工作流程更像持续编辑而不是随机试错。',
            'RISEN尤其在您已经有初稿的时候有用 — 例如一篇草稿文章、策略笔记、代码片段或分析 — 您想让模型以受控、可审计的方式改进它。每个RISEN步骤都有不同的目的，这使得修订集中且可追踪。',
            '框架得名于其五个阶段：**R**efine（改进草稿）、**I**nspect（识别变更）、**S**ummarize（解释改了什么）、**E**valuate（按标准打分），**N**ext steps（推荐改进）。',
          ],
        },

        fiveComponents: {
          title: 'RISEN的五个组成部分',
          id: 'five-components',
          content: [
            '**一个强大的RISEN Prompt明确要求模型通过五个阶段，每个都有不同的输出。** 您可以把这些阶段组合到一个更长的Prompt中，或者分成连续的Prompt，取决于您想要多少控制和反馈。',
          ],
          items: [
            '**Refine：** 根据您的目标改进现有的草稿（清晰度、结构、准确性、简洁性、受众一致性、语调等）。模型重写或增强原始材料。',
            '**Inspect：** 识别做出的具体改动 — 确切改写了什么、添加了什么细节、修复了什么问题。这建立了审计记录。要求5-7个具体的编辑及其理由。',
            '**Summarize：** 提供对新版本现在说什么或做什么的简洁解释 — 不是内容的重复，而是对其重点和强调的元级描述。',
            '**Evaluate：** 根据明确的标准（语调、准确性、完整性、受众一致性、清晰度）批评结果。使用1-5的数字比例，每个标准需要一句话的理由。',
            '**Next steps：** 为下一个迭代推荐3个重点改进，这样您总是有明确的方向进行进一步的改进。',
          ],
        },

        whyUseful: {
          title: '为什么RISEN有用',
          id: 'why-useful',
          content: [
            '**RISEN框架在三个关键方面与标准改进工作流不同：可追踪性、可控制性和可重复性。**',
          ],
          items: [
            '**可追踪性：** Inspect步骤强制模型记录每一个变更。您可以看到改了什么、为什么改。这对于文档、合规性和跨部门合作至关重要。',
            '**可控制性：** 不是让模型一下子改进所有内容，RISEN把改进分成五个离散的、可管理的步骤。您可以在任何阶段暂停、调整或重新指导。',
            '**可重复性：** 一旦您有了有效的RISEN模板，您可以对任何类似的文档、代码或分析重复使用。在PromptQuorum中，您甚至可以在多个模型上并行测试相同的循环。',
            '**团队协作：** Inspect和Evaluate步骤天生支持多人评审。一个人可以Refine，另一个人可以Inspect，第三个人可以Evaluate。',
            '**成本效益：** RISEN有针对性的改进比反复的"再试一次"要便宜，因为您确切知道您在改什么以及为什么。',
          ],
        },

        whenToUse: {
          title: '何时使用RISEN',
          id: 'when-to-use',
          items: [
            '✅ **使用RISEN当：** 您已经有初稿（文章、分析、代码）；您想改进它，但需要可追踪的变更；您想测试多个模型的改进方法；您在多人团队中工作，需要审计跟踪。',
            '❌ **不使用RISEN当：** 您从零开始生成内容（使用CO-STAR或CRAFT）；您需要快速一次性答案（使用标准Prompt）；您在处理结构化数据或代码，需要特定的编程框架。',
          ],
        },

        badVsGood: {
          title: '糟糕示例 vs 优秀RISEN Prompt示例',
          id: 'bad-vs-good',
          promptExamples: [
            {
              label: '❌ 糟糕 — 模糊且无Inspect',
              prompt: 'Please improve this article.',
            },
            {
              label: '✅ 优秀 — 完整的RISEN循环',
              prompt: `请按照RISEN框架改进这篇文章。

**Refine:** 改进以下文章。重点是清晰度、结构和简洁性。重写任何冗长或不清楚的句子。

**Inspect:** 列出您做出的确切5-7个改动。对每一个改动，解释您为什么改。

**Summarize:** 在一段话中，总结改进后的版本现在说什么。

**Evaluate:** 根据以下标准给新版本打分：清晰度、准确性、完整性（每个1-5）。解释每个分数。

**Next Steps:** 推荐下一轮改进的3个重点改进。

[粘贴原始文章]`,
            },
          ],
        },

        howToWrite: {
          title: '如何编写RISEN Prompt',
          id: 'how-to-write',
          items: [
            {
              heading: '1. 陈述您的改进目标',
              content: '在Refine部分中清楚地说明您想改进什么。例如："改进这个客户电子邮件的语调；使其更友好但仍然专业。"',
            },
            {
              heading: '2. 要求具体的变更列表',
              content: '在Inspect部分中，要求模型列出5-7个具体的改动。这强制透明性和跟踪。',
            },
            {
              heading: '3. 要求元级总结',
              content: '在Summarize部分中，不要求重复内容，要求对改进后的版本现在做什么或说什么的一行解释。',
            },
            {
              heading: '4. 设置具体的评估标准',
              content: '在Evaluate部分中，给出3-5个标准（清晰度、准确性、专业度等）和一个数字比例（1-5）。',
            },
            {
              heading: '5. 计划下一次迭代',
              content: '在Next Steps部分中，要求3个建议，然后您可以在下一个循环中处理。这使循环可持续。',
            },
          ],
        },

        comparisonTable: {
          id: 'comparison-table',
          title: '比较表（CoT vs 单次提示 vs RISEN）',
          columns: ['维度', '链式思维（CoT）', '单次提示', 'RISEN框架'],
          rows: [
            { '维度': '结构', '链式思维（CoT）': '线性（单一路径）', '单次提示': '一次性生成', 'RISEN框架': '5步迭代循环' },
            { '维度': '核心操作', '链式思维（CoT）': '"逐步思考"', '单次提示': '生成', 'RISEN框架': 'Refine → Inspect → Summarize → Evaluate → Next Steps → 重复' },
            { '维度': '审计跟踪', '链式思维（CoT）': '无变更跟踪', '单次提示': '无', 'RISEN框架': '是 — Inspect记录所有变更' },
            { '维度': '最佳用途', '链式思维（CoT）': '数学、逻辑、解释', '单次提示': '快速任务、一次性答案', 'RISEN框架': '迭代改进和团队评审' },
            { '维度': '相对于基准的Token成本', '链式思维（CoT）': '1.5-2倍', '单次提示': '1倍基准', 'RISEN框架': '2-5倍/循环' },
            { '维度': '多个Prompt', '链式思维（CoT）': '否', '单次提示': '否', 'RISEN框架': '一个长的或5个连续的' },
            { '维度': '模型比较', '链式思维（CoT）': '否', '单次提示': '否', 'RISEN框架': '是 — 在GPT、Claude、Gemini上并行' },
          ],
        },

        commonMistakes: {
          title: '使用RISEN时的常见错误',
          id: 'common-mistakes',
          mistakes: [
            {
              mistake: '跳过Inspect步骤',
              problem: 'Inspect步骤是RISEN独特的。如果不做Inspect，您就失去了审计记录 — 您无法看到改了什么。',
              fix: '始终要求特定的变更列表。这建立了可追踪性。',
            },
            {
              mistake: '在Evaluate中过于宽泛',
              problem: '"好"不是一个标准。这给模型没有明确的评估目标。',
              fix: '说"清晰度1-5"或"准确性1-5"。具体的标准产生具体的改进。',
            },
            {
              mistake: '在Refine中试图改进一切',
              problem: '如果您说"改进所有内容"，模型会做随机改动，没有焦点。',
              fix: '集中在一个或两个明确的目标。说"改进清晰度和简洁性"。',
            },
            {
              mistake: '对所有内容都使用RISEN',
              problem: 'RISEN对迭代改进很好，但对初期生成来说太冗长。',
              fix: '使用CO-STAR或CRAFT生成初稿，然后RISEN改进它。',
            },
            {
              mistake: '忽视模型能力',
              problem: '小模型可能无法在一个Prompt中处理五个RISEN步骤。',
              fix: '7B模型可能需要分离的Prompt。13B以上可以在一个中处理所有。',
            },
          ],
        },

        risenInPromptQuorum: {
          title: 'PromptQuorum中的RISEN',
          id: 'risen-in-promptquorum',
          content: [
            'PromptQuorum把RISEN变成了一个一级公民功能。您可以写一个RISEN循环，把它发送给GPT-5.5、Claude Opus 4.7和Gemini 3.1 Pro同时，比较它们各自的改进方法。这让您可以看到不同的模型如何以不同的方式处理相同的改进任务。',
            '选择产生最相关改进的模型进行后续迭代，或者在多个模型的改进中综合最好的部分。对于寻求多模型共识或想要优化模型选择的团队来说，这是强大的。',
          ],
        },

        combiningFrameworks: {
          title: '将RISEN与其他框架组合',
          id: 'combining-frameworks',
          content: [
            '**RISEN + CO-STAR：** 使用CO-STAR生成初稿，然后使用RISEN进行迭代改进。CO-STAR处理创建，RISEN处理精化。',
            '**RISEN + TRACE：** 对于需要推理和改进的复杂任务，使用TRACE进行初期思考，然后RISEN逐步改进输出。',
            '**RISEN + 少样本提示：** 在Refine步骤中包括改进的示例。模型将学习您想要的改进风格。',
            '**RISEN + 受限Prompt：** 在Evaluate步骤中添加具体的输出约束（长度、格式、技术水平）来强制质量。',
          ],
        },
      },

      faqSection: {
        id: 'faq',
        items: [
          {
            q: 'RISEN代表什么？',
            a: 'RISEN代表Refine、Inspect、Summarize、Evaluate、Next Steps。这是一个5步框架，用于通过多个改进循环来改进现有的草稿、文档或分析。',
          },
          {
            q: 'RISEN与CO-STAR或CRAFT有什么不同？',
            a: 'CO-STAR和CRAFT是生成框架 — 用于创建初稿。RISEN是改进框架 — 用于以可追踪的迭代方式改进现有的材料。',
          },
          {
            q: '何时选择使用RISEN而不是其他框架？',
            a: '当您已经有初稿并想以受控的、可追踪的方式改进它时，使用RISEN。如果您从零开始，使用CO-STAR生成初稿，然后RISEN改进它。',
          },
          {
            q: '一个RISEN循环需要多少步骤？',
            a: '通常2-4个循环就能从粗糙草稿达到生产质量。当Evaluate分数稳定（连续循环中相同）且Next Steps建议变得微小时，停止。',
          },
          {
            q: '我可以在本地模型上使用RISEN吗？',
            a: '是的。任何遵守指令的LLM都可以 — 包括通过Ollama或LM Studio的本地模型。13B及以上的模型在处理多步结构时表现更好。',
          },
          {
            q: 'Inspect步骤为什么特别？',
            a: 'Inspect强制模型记录每个具体的变更并解释为什么。这创建了一个审计记录 — 您可以看到版本之间改了什么以及为什么。',
          },
          {
            q: '我可以把RISEN与多模型测试组合吗？',
            a: '是的。在PromptQuorum中，将同一个RISEN循环同时发送给GPT-5.5、Claude Opus 4.7和Gemini 3.1 Pro。比较它们各自如何改进。',
          },
          {
            q: 'RISEN会增加Token成本吗？',
            a: '是的。每个循环产生2-5倍基准Prompt的输出Token。在战略选择是否使用RISEN，或分阶段实施它。',
          },
          {
            q: '处理敏感材料时有监管考虑吗？',
            a: '在改进机密文件时，注意云端API使用。对于监管敏感的工作，考虑本地推理（Ollama、LM Studio）或Anthropic的欧盟选项。',
          },
          {
            q: 'RISEN对多人团队评审有帮助吗？',
            a: '是的。您可以让初始作者做Refine，高级评审者做Inspect，决策者做Evaluate。这种分工增加了客观性。',
          },
        ],
      },

      relatedReading: {
        title: '相关阅读',
        items: [
          { title: '链式思维提示词', url: '/prompt-engineering/chain-of-thought-prompting?lang=zh' },
          { title: '什么是Prompt工程？', url: '/prompt-engineering/what-is-prompt-engineering?lang=zh' },
          { title: '少样本Prompt', url: '/prompt-engineering/few-shot-prompting?lang=zh' },
          { title: '受限Prompt', url: '/prompt-engineering/constrained-prompting?lang=zh' },
          { title: 'GPT、Claude还是Gemini？选择合适的模型', url: '/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model?lang=zh' },
          { title: 'Prompt注入和安全', url: '/prompt-engineering/prompt-injection-and-security?lang=zh' },
        ],
      },

      sources: {
        items: [
          'Yao, S., Yu, D., Zhao, J., Shafran, I., Griffiths, T. L., Cao, Y., & Narasimhan, K. (2023). "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." arXiv:2305.10601',
          'Wei, J., Wang, X., Schuurmans, D., Bosma, M., Xia, F., Chi, E., ... & Zhou, D. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arXiv:2201.11903',
          'Anthropic. (2026). "Prompt Engineering Guide." https://www.anthropic.com',
        ],
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RISEN框架：Refine、Inspect、Summarize、Evaluate、Next Steps（2026）',
        description: 'RISEN框架用于迭代优化Prompt：改进草稿、追踪变更、总结结果、评估标准、规划下一步。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        'url': 'https://www.promptquorum.com/prompt-engineering/risen-framework?lang=zh',
        'inLanguage': 'zh',
        keywords: ['RISEN框架', '迭代式提示词', '提示词优化', '提示词工程', 'PromptQuorum', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'RISEN框架' },
          { '@type': 'Thing', name: '迭代式提示词' },
          { '@type': 'Thing', name: '提示词优化' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },

      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'RISEN代表什么？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'RISEN代表Refine、Inspect、Summarize、Evaluate、Next Steps。这是一个5步框架，用于通过多个改进循环来改进现有的草稿、文档或分析。' } },
          { '@type': 'Question', 'name': 'RISEN与CO-STAR或CRAFT有什么不同？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR和CRAFT是生成框架 — 用于创建初稿。RISEN是改进框架 — 用于以可追踪的迭代方式改进现有的材料。' } },
          { '@type': 'Question', 'name': '何时选择使用RISEN而不是其他框架？', 'acceptedAnswer': { '@type': 'Answer', 'text': '当您已经有初稿并想以受控的、可追踪的方式改进它时，使用RISEN。如果您从零开始，使用CO-STAR生成初稿，然后RISEN改进它。' } },
          { '@type': 'Question', 'name': '一个RISEN循环需要多少步骤？', 'acceptedAnswer': { '@type': 'Answer', 'text': '通常2-4个循环就能从粗糙草稿达到生产质量。当Evaluate分数稳定（连续循环中相同）且Next Steps建议变得微小时，停止。' } },
          { '@type': 'Question', 'name': '我可以在本地模型上使用RISEN吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。任何遵守指令的LLM都可以 — 包括通过Ollama或LM Studio的本地模型。13B及以上的模型在处理多步结构时表现更好。' } },
          { '@type': 'Question', 'name': 'Inspect步骤为什么特别？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Inspect强制模型记录每个具体的变更并解释为什么。这创建了一个审计记录 — 您可以看到版本之间改了什么以及为什么。' } },
          { '@type': 'Question', 'name': '我可以把RISEN与多模型测试组合吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。在PromptQuorum中，将同一个RISEN循环同时发送给GPT-5.5、Claude Opus 4.7和Gemini 3.1 Pro。比较它们各自如何改进。' } },
          { '@type': 'Question', 'name': 'RISEN会增加Token成本吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。每个循环产生2-5倍基准Prompt的输出Token。在战略选择是否使用RISEN，或分阶段实施它。' } },
          { '@type': 'Question', 'name': '处理敏感材料时有监管考虑吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '在改进机密文件时，注意云端API使用。对于监管敏感的工作，考虑本地推理（Ollama、LM Studio）或Anthropic的欧盟选项。' } },
          { '@type': 'Question', 'name': 'RISEN对多人团队评审有帮助吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。您可以让初始作者做Refine，高级评审者做Inspect，决策者做Evaluate。这种分工增加了客观性。' } },
        ],
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'CoT vs 单次提示 vs RISEN比较',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': '结构', 'description': 'CoT：线性单一。单次提示：一次生成。RISEN：5步迭代循环。' },
          { '@type': 'ListItem', 'position': 2, 'name': '核心操作', 'description': 'CoT：逐步推理最终答案。单次提示：生成。RISEN：Refine → Inspect → Summarize → Evaluate → Next Steps → 重复。' },
          { '@type': 'ListItem', 'position': 3, 'name': '审计跟踪', 'description': 'CoT：无变更跟踪。单次提示：无。RISEN：是 — Inspect记录。' },
          { '@type': 'ListItem', 'position': 4, 'name': '最佳用途', 'description': 'CoT：数学逻辑。单次提示：快速任务。RISEN：迭代改进和团队评审。' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Token原价', 'description': 'CoT：1.5-2倍。单次提示：1倍基准。RISEN：2-5倍/循环。' },
          { '@type': 'ListItem', 'position': 6, 'name': '多个Prompt', 'description': 'CoT：否。单次提示：否。RISEN：一个长的或5个连续的。' },
          { '@type': 'ListItem', 'position': 7, 'name': '模型比较', 'description': 'CoT：否。单次提示：否。RISEN：是 — 在GPT、Claude、Gemini上并行。' },
        ],
      },
    },
  };
