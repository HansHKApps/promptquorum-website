// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: risen-framework
// Generated: 2026-05-04T00:00:00.000Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'RISEN Framework: Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
      intro: 'The RISEN Framework is a 5-step iterative structure for improving AI outputs through structured revision cycles. Instead of accepting the first draft or rewriting from scratch, you use RISEN to systematically refine, audit, evaluate, and plan next improvements. Each step has a distinct purpose: Refine improves the draft, Inspect documents every change, Summarize explains what the new version does, Evaluate scores against criteria, and Next Steps recommends further edits. RISEN turns "make this better" into a transparent, repeatable workflow.',
      leadAnswerBlock: '**RISEN is a 5-step iterative refinement framework: Refine improves the draft, Inspect lists every change with justification, Summarize explains the new version, Evaluate scores it against criteria (1-5 scale), and Next Steps recommends 3 focused improvements for the next cycle. Use RISEN when you already have a draft and want controlled, auditable improvement with an audit trail. The Inspect step uniquely forces the model to document changes — making revisions traceable. In 2026, RISEN is built into PromptQuorum as a multi-model dispatch option, letting you test the same RISEN cycle across GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro simultaneously to compare refinement approaches.**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04 — RISEN framework original paper (Yao et al., 2023), PromptQuorum native RISEN implementation',
      readTime: '13 min read',
      seoTitle: 'RISEN: 5-Step Framework for Iterative Prompt Refinement (2026)',
      metaDescription: 'RISEN\'s Narrowing field is why it beats other frameworks for complex tasks — it constrains scope so AI stays on-track. Templates and enterprise examples.',
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
        'Works with any model: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro, and local models via Ollama or LM Studio. Larger models (13B+) handle multi-step structure better; 7B models may need steps separated.',
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
            'RISEN works with any model: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro, Ollama, LM Studio. Larger models (13B+) handle the multi-step structure better.',
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
            '**The RISEN Framework is an iterative prompt pattern designed for refining existing drafts, analyses, and plans through multiple improvement cycles.** Instead of treating each prompt as a one-off task, you guide a model like GPT-5.5, Claude 4.6 Sonnet, or Gemini 2.5 Pro through a structured, repeatable improvement loop. This makes your workflow more like continuous editing than random trial-and-error.',
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
              label: 'The Inspect Step Is the Secret Weapon',
              text: 'The Inspect step is what makes RISEN unique among frameworks. Most frameworks generate output. RISEN forces the model to document every specific change, creating a permanent audit trail. No other framework has this built-in accountability — this is why RISEN is essential for regulated industries, academic work, and team collaboration where traceability matters.',
            },
            {
              type: 'key-point',
              label: 'Why "Make This Better" Fails',
              text: 'Vague improvement requests like "make this better" or "improve this" give the model zero constraints. Without explicit criteria and structure, the model wanders and produces inconsistent results. RISEN works because each step has a specific, named output with constraints. Specificity drives quality.',
            },
            {
              type: 'warning',
              label: 'When NOT to Use RISEN',
              text: 'Don\'t use RISEN for first-draft generation. RISEN requires existing material to refine. If you need to create something from scratch, use CO-STAR, CRAFT, or Single Step first. Then switch to RISEN for iterative improvement. Using RISEN on non-existent material wastes tokens and produces meaningless Inspect output.',
            },
            {
              type: 'pro-tip',
              label: 'The Two-Framework Workflow',
              text: 'The optimal pattern: Use CO-STAR or CRAFT to generate the first draft. Then switch to RISEN for iterative refinement and self-critique. This separation prevents the model from conflating two fundamentally different cognitive tasks — "create" and "improve". Each framework excels at its specific phase.',
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
              fix: 'Use PromptQuorum to run the same RISEN cycle across GPT-5.5, Claude 4.6 Sonnet, and Gemini 2.5 Pro. Compare which model\'s refinements best match your goals.',
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
            'Send the same RISEN-based instructions to multiple models — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — in parallel and compare how each one refines and critiques the draft.',
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
              a: 'Yes. Use PromptQuorum to send the same RISEN cycle to GPT-5.5, Claude 4.6 Sonnet, and Gemini 2.5 Pro simultaneously. Compare which model\'s refinements, self-critique scores, and next-step suggestions best match your requirements.',
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
        keywords: ['RISEN Framework', 'iterative prompting', 'prompt refinement', 'multi-step workflows', 'prompt engineering', 'PromptQuorum', 'GPT-5.5', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro'],
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
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', 'name': 'Can I combine RISEN with multi-model testing?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Use PromptQuorum to send the same RISEN cycle to GPT-5.5, Claude 4.6 Sonnet, and Gemini 2.5 Pro simultaneously. Compare which model\'s refinements best match your requirements.' } },
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
      leadAnswerBlock: '**RISEN ist eine 5-stufige iterative Verbesserungsschleife: Refine verbessert den Entwurf, Inspect listet jede Änderung mit Begründung auf, Summarize erklärt die neue Version, Evaluate bewertet sie gegen Kriterien (1–5 Skala), und Next Steps empfiehlt 3 fokussierte Verbesserungen für den nächsten Zyklus. Verwenden Sie RISEN, wenn Sie bereits einen Entwurf haben und kontrollierte, nachverfolgbare Verbesserung mit Audit-Trail wünschen. Der Inspect-Schritt zwingt das Modell eindeutig dazu, Änderungen zu dokumentieren — wodurch Revisionen nachverfolgbar werden. 2026 ist RISEN in PromptQuorum als Multi-Modell-Dispatch-Option integriert, mit der Sie denselben RISEN-Zyklus über GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro parallel testen können, um Verbesserungsansätze zu vergleichen.**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '13 Min. Lesezeit',
      seoTitle: 'RISEN-Framework: 5-stufig iterativ Prompts verfeinern (2026)',
      metaDescription: 'RISEN verfeinert Prompts iterativ in 5 Schritten: Änderungen dokumentieren, Qualität evaluieren, nächste Schritte planen. Multi-Modell-Tests mit PromptQuorum.',
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
        'Funktioniert mit jedem Modell: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro und lokale Modelle über Ollama oder LM Studio. Größere Modelle (13B+) verarbeiten Multi-Schritt-Struktur besser.',
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
            'RISEN funktioniert mit jedem Modell: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro, Ollama, LM Studio. Größere Modelle (13B+) verarbeiten die Multi-Schritt-Struktur besser.',
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
            '**Das RISEN-Framework ist ein iteratives Prompt-Muster, das für die Verfeinerung bestehender Entwürfe, Analysen und Pläne durch mehrere Verbesserungszyklen entwickelt wurde.** Anstatt jeden Prompt als Einmalaufgabe zu behandeln, führen Sie ein Modell wie GPT-5.5, Claude 4.6 Sonnet oder Gemini 2.5 Pro durch eine strukturierte, wiederholbare Verbesserungsschleife. Dies macht Ihren Arbeitsablauf weniger wie zufälliges Ausprobieren und mehr wie kontinuierliche Bearbeitung.',
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
              label: 'Der Inspect-Schritt ist die geheime Waffe',
              text: 'Der Inspect-Schritt ist das, was RISEN unter den Frameworks einzigartig macht. Die meisten Frameworks generieren Ausgabe. RISEN zwingt das Modell dazu, jede spezifische Änderung zu dokumentieren und erzeugt einen permanenten Audit-Trail. Kein anderes Framework hat diese eingebaute Rechenschaftspflicht — darum ist RISEN unverzichtbar für regulierte Industrien, akademische Arbeit und Team-Zusammenarbeit, wo Nachverfolgbarkeit wichtig ist.',
            },
            {
              type: 'key-point',
              label: 'Warum „Machen Sie das besser" fehlschlägt',
              text: 'Vage Verbesserungsanfragen wie „machen Sie das besser" oder „verbessern Sie das" geben dem Modell null Einschränkungen. Ohne explizite Kriterien und Struktur schweift das Modell ab und produziert inkonsistente Ergebnisse. RISEN funktioniert, weil jeder Schritt eine spezifische, benannte Ausgabe mit Einschränkungen hat. Spezifität fördert Qualität.',
            },
            {
              type: 'warning',
              label: 'Wann RISEN NICHT verwenden',
              text: 'Verwenden Sie RISEN nicht für Erst-Draft-Generierung. RISEN benötigt vorhandenes Material zum Verfeinern. Wenn Sie etwas von Grund auf erstellen müssen, verwenden Sie zuerst CO-STAR, CRAFT oder Single Step. Wechseln Sie dann zu RISEN für iterative Verbesserung. Die Verwendung von RISEN auf nicht vorhandenem Material verschwendet Tokens und produziert sinnlose Inspect-Ausgabe.',
            },
            {
              type: 'pro-tip',
              label: 'Der Zwei-Framework-Arbeitsablauf',
              text: 'Das optimale Muster: Verwenden Sie CO-STAR oder CRAFT, um den ersten Entwurf zu generieren. Wechseln Sie dann zu RISEN für iterative Verbesserung und Selbstkritik. Diese Trennung verhindert, dass das Modell zwei fundamentally unterschiedliche kognitive Aufgaben vermischt — „erstellen" und „verbessern". Jedes Framework ist hervorragend in seiner spezifischen Phase.',
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
              fix: 'Verwenden Sie PromptQuorum, um denselben RISEN-Zyklus über GPT-5.5, Claude 4.6 Sonnet und Gemini 2.5 Pro parallel auszuführen. Vergleichen Sie, welche Verbesserungen eines Modells am besten zu Ihren Zielen passen.',
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
            'Senden Sie dieselben RISEN-basierten Anweisungen an mehrere Modelle — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — parallel und vergleichen Sie, wie jedes den Entwurf verfeinert und kritisiert.',
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
              a: 'Ja. Verwenden Sie PromptQuorum, um denselben RISEN-Zyklus an GPT-5.5, Claude 4.6 Sonnet und Gemini 2.5 Pro gleichzeitig zu senden. Vergleichen Sie, welche Modell-Verbesserungen, Selbstkritik-Bewertungen und Next-Step-Vorschläge am besten zu Ihren Anforderungen passen.',
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
            { title: 'Chain-of-Thought Prompting', url: '/de/prompt-engineering/chain-of-thought-prompting' },
            { title: 'CO-STAR Framework', url: '/de/prompt-engineering/co-star-framework' },
            { title: 'CRAFT Framework', url: '/de/prompt-engineering/craft-framework' },
            { title: 'TRACE Framework', url: '/de/prompt-engineering/trace-framework' },
            { title: 'Welches Prompt-Framework sollten Sie verwenden?', url: '/de/prompt-engineering/which-prompt-framework-should-you-use' },
            { title: 'Erstellen Sie Ihr eigenes Prompt-Framework', url: '/de/prompt-engineering/build-your-own-prompt-framework' },
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
        'url': 'https://www.promptquorum.com/de/prompt-engineering/risen-framework',
        keywords: ['RISEN-Framework', 'iteratives Prompting', 'Prompt-Verfeinerung', 'Prompt Engineering', 'PromptQuorum', 'GPT-5.5', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro'],
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
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', 'name': 'Kann ich RISEN mit Multi-Modell-Tests kombinieren?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Verwenden Sie PromptQuorum, um denselben RISEN-Zyklus an GPT-5.5, Claude 4.6 Sonnet und Gemini 2.5 Pro gleichzeitig zu senden. Vergleichen Sie, welche Modell-Verbesserungen am besten zu Ihren Anforderungen passen.' } },
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

    es: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Framework RISEN: Refinar, Inspeccionar, Resumir, Evaluar, Próximos Pasos (2026)',
      intro: 'El Framework RISEN es una estructura iterativa de 5 pasos para mejorar los outputs de IA mediante ciclos de revisión estructurados. En lugar de aceptar el primer borrador o reescribir desde cero, usas RISEN para refinar, auditar, evaluar y planificar siguientes mejoras de forma sistemática. Cada paso tiene un propósito distinto: Refinar mejora el borrador, Inspeccionar documenta cada cambio, Resumir explica la nueva versión, Evaluar puntúa según criterios, y Próximos Pasos recomienda ediciones adicionales. RISEN convierte "mejora esto" en un flujo de trabajo transparente y repetible.',
      leadAnswerBlock: '**RISEN es un bucle iterativo de 5 pasos: Refinar mejora el borrador, Inspeccionar lista cada cambio con justificación, Resumir explica la nueva versión, Evaluar la puntúa según criterios (escala 1-5), y Próximos Pasos recomienda 3 mejoras enfocadas para el siguiente ciclo. Usa RISEN cuando ya tienes un borrador y quieres mejora controlada y auditable con rastro de auditoría. El paso Inspeccionar es único: obliga al modelo a documentar los cambios — haciendo las revisiones trazables. En 2026, RISEN está integrado en PromptQuorum como opción de despacho multi-modelo, permitiéndote probar el mismo ciclo RISEN en GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro simultáneamente.**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '13 min de lectura',
      seoTitle: 'Framework RISEN: refina prompts en 5 pasos iterativos',
      metaDescription: 'RISEN refina prompts de forma iterativa con 5 pasos. Documenta cambios, evalúa calidad, planifica siguientes mejoras. Pruebas multi-modelo con PromptQuorum.',
      educationalLevel: 'Intermediate',
      audience: 'Desarrolladores construyendo flujos de trabajo de prompts, equipos de producto iterando contenido, equipos haciendo revisiones multi-etapa',
      primaryTerm: 'Framework RISEN',
      aboutTopics: ['Framework RISEN', 'Prompting Iterativo', 'Refinamiento de Prompts', 'Flujos de Trabajo Multi-Etapa'],
      next_refresh_due: '2026-09-24',

      quickFacts: [
        'RISEN = Refinar, Inspeccionar, Resumir, Evaluar, Próximos Pasos — un bucle iterativo de 5 pasos para mejora controlada de outputs',
        'Usa RISEN cuando ya tienes un borrador, documento o plan. No lo uses para generación de primer borrador — combínalo con CO-STAR o CRAFT para eso.',
        'El paso Inspeccionar es único: obliga al modelo a listar cada cambio específico y justificarlo, creando un rastro de auditoría. Ningún otro framework tiene esta responsabilidad incorporada.',
        'Flujo de trabajo típico: 2-4 ciclos RISEN para alcanzar calidad de producción desde un borrador inicial. Cada ciclo produce 3 outputs: contenido mejorado, registro de cambios (Inspeccionar) y plan de acción (Próximos Pasos).',
        'Funciona con cualquier modelo: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro y modelos locales via Ollama o LM Studio. Los modelos más grandes (13B+) manejan mejor la estructura multi-paso.',
        'Patrón combinado RISEN + CO-STAR: Usa CO-STAR para generación del primer borrador, luego cambia a RISEN para mejora iterativa. Separa "crear" de "refinar" — dos tareas cognitivas fundamentalmente diferentes.',
      ],

      toc: [
        { anchor: 'key-takeaways', label: 'Puntos clave' },
        { anchor: 'what-is-risen', label: '¿Qué es el Framework RISEN?' },
        { anchor: 'five-components', label: 'Los Cinco Componentes RISEN' },
        { anchor: 'why-useful', label: 'Por qué RISEN es útil' },
        { anchor: 'when-to-use', label: 'Cuándo usar RISEN' },
        { anchor: 'comparison-table', label: 'Tabla de comparación (CoT vs Single-Pass vs RISEN)' },
        { anchor: 'bad-vs-good', label: 'Ejemplo de prompt RISEN malo vs bueno' },
        { anchor: 'how-to-write', label: 'Cómo escribir un prompt RISEN' },
        { anchor: 'common-mistakes', label: 'Errores comunes al usar RISEN' },
        { anchor: 'risen-in-promptquorum', label: 'RISEN en PromptQuorum' },
        { anchor: 'combining-frameworks', label: 'Combinar RISEN con otros frameworks' },
        { anchor: 'faq', label: 'Preguntas frecuentes' },
        { anchor: 'related-reading', label: 'Lecturas relacionadas' },
        { anchor: 'sources', label: 'Fuentes' },
      ],

      sections: {
        tldr: {
          isTldr: true,
          title: 'Puntos clave',
          id: 'key-takeaways',
          items: [
            'RISEN es un bucle iterativo de 5 pasos — Refinar, Inspeccionar, Resumir, Evaluar, Próximos Pasos — que convierte "mejora esto" en un flujo de trabajo estructurado y repetible con rastro de auditoría.',
            'Usa RISEN para refinamiento iterativo (mejorar borradores existentes). No lo uses para generación de primer borrador — combínalo con CO-STAR o CRAFT para esa fase.',
            'El paso Inspeccionar es único: obliga al modelo a listar cada cambio específico y justificarlo. Esto crea un rastro de auditoría — puedes ver exactamente qué cambió y por qué.',
            'Flujo de trabajo típico: 2-4 ciclos RISEN para alcanzar calidad de producción. Cada ciclo produce contenido mejorado, un registro de cambios y recomendaciones para la siguiente iteración.',
            'RISEN funciona con cualquier modelo: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro, Ollama, LM Studio. Los modelos más grandes (13B+) manejan mejor la estructura multi-paso.',
            'En PromptQuorum, RISEN está integrado. Envía el mismo ciclo RISEN a múltiples modelos simultáneamente y compara cómo cada modelo refina de manera diferente.',
            'Usa PromptQuorum para probar patrones RISEN entre modelos — ve qué enfoque de refinamiento del modelo mejor coincide con tus objetivos.',
          ],
        },

        whatIsRISEN: {
          title: '¿Qué es el Framework RISEN?',
          id: 'what-is-risen',
          snippets: [
            { type: 'in-one-sentence', text: 'RISEN es un bucle iterativo de 5 pasos — Refinar, Inspeccionar, Resumir, Evaluar, Próximos Pasos — que convierte "mejora esto" en un flujo de trabajo estructurado y repetible con rastro de auditoría.' },
            { type: 'in-plain-terms', text: 'En lugar de decir "mejora esto" y esperar, le dices a la IA que lo corrija (Refinar), liste lo que cambió (Inspeccionar), explique qué hace la nueva versión (Resumir), se autoevalúe (Evaluar) y sugiera qué corregir a continuación (Próximos Pasos). Repites hasta que esté listo.' },
          ],
          content: [
            '**El Framework RISEN es un patrón de prompt iterativo diseñado para refinar borradores, análisis y planes existentes a través de múltiples ciclos de mejora.** En lugar de tratar cada prompt como una tarea única, guías a un modelo como GPT-5.5, Claude 4.6 Sonnet o Gemini 2.5 Pro a través de un bucle de mejora estructurado y repetible. Esto hace que tu flujo de trabajo se parezca más a la edición continua que a la prueba y error aleatoria.',
            'RISEN es especialmente útil cuando ya tienes una primera versión — como un artículo borrador, nota de estrategia, fragmento de código o análisis — y quieres que el modelo lo mejore de manera controlada y auditable. Cada paso RISEN tiene un propósito distinto, lo que mantiene las revisiones enfocadas y trazables.',
            'El framework toma su nombre de sus cinco etapas: **R**efinar (mejorar el borrador), **I**nspeccionar (identificar cambios), **S**umarizar (explicar qué cambió), **E**valuar (puntuar según criterios) y **N**ext Steps/Próximos Pasos (recomendar mejoras).',
          ],
        },

        fiveComponents: {
          title: 'Los Cinco Componentes RISEN',
          id: 'five-components',
          content: [
            '**Un prompt RISEN sólido le pide explícitamente al modelo que avance por cinco etapas, cada una con un output distinto.** Puedes combinar estas etapas en un prompt más largo o separarlas en prompts secuenciales, dependiendo de cuánto control y retroalimentación quieras.',
          ],
          items: [
            '**Refinar:** Mejorar el borrador existente según tus objetivos (claridad, estructura, precisión, concisión, alineación con la audiencia, tono, etc.). El modelo reescribe o mejora el material original.',
            '**Inspeccionar:** Identificar cambios concretos realizados — exactamente qué se reescribió, qué detalles se añadieron, qué problemas se corrigieron. Esto crea el rastro de auditoría. Requiere 5-7 ediciones específicas con justificaciones.',
            '**Resumir:** Proporcionar una explicación concisa de lo que dice o hace la nueva versión — no una repetición del contenido, sino una descripción meta del enfoque y énfasis.',
            '**Evaluar:** Criticar el resultado según criterios explícitos (tono, precisión, completitud, alineación con la audiencia, claridad). Usar una escala numérica 1-5 y requerir justificación de una oración por criterio.',
            '**Próximos Pasos:** Recomendar 3 mejoras enfocadas para la siguiente iteración para que siempre tengas una dirección clara para mayor refinamiento.',
          ],
        },

        whyUseful: {
          title: 'Por qué RISEN es útil',
          id: 'why-useful',
          content: [
            '**El Framework RISEN es útil cuando quieres convertir "mejora esto" en un flujo de trabajo transparente y repetible en lugar de una caja negra.** Anima al modelo no solo a generar, sino también a analizar y criticar su propio trabajo.',
            'Los beneficios prácticos incluyen:',
          ],
          items: [
            'Visibilidad clara de lo que cambió entre versiones — el paso Inspeccionar obliga a la documentación completa.',
            'Autocrítica estructurada que expone debilidades, brechas y oportunidades.',
            'Una hoja de ruta integrada para la siguiente iteración para que nunca estés atascado preguntándote qué probar a continuación.',
            'Proceso repetible que puede ser plantificado, compartido con equipos y estandarizado.',
            'Rastro de auditoría para cumplimiento o gestión del conocimiento — puedes justificar cada revisión.',
          ],
        },

        badVsGood: {
          title: 'Ejemplo de prompt RISEN malo vs bueno',
          id: 'bad-vs-good',
          content: [
            '**La diferencia entre una solicitud de revisión sin estructura y una basada en RISEN se vuelve clara cuando aplicas ambas al mismo borrador.** A continuación hay un ejemplo real para mejorar una descripción de producto.',
            '**[Prompt Malo]**',
            '"Mejora esta descripción de producto."',
            '**[Buen Prompt RISEN]**',
            '"Eres un editor de marketing de producto. Te daré un borrador de descripción de producto. Usa el proceso RISEN de la siguiente manera: **Refinar:** Reescribe la descripción para mayor claridad y concisión manteniendo todos los detalles factuales. Objetivo: 120-160 palabras. **Inspeccionar:** Lista 5-7 ediciones específicas que hiciste (ej., "aclaré el beneficio X", "eliminé la oración repetida Y", "añadí audiencia objetivo"). **Resumir:** En 2-3 oraciones, explica qué enfatiza ahora la descripción actualizada y qué cambió en su enfoque. **Evaluar:** Califica la nueva descripción en una escala 1-5 para claridad (1-5), persuasión (1-5) y alineación con audiencia B2B (1-5). Justifica cada calificación en una oración. **Próximos Pasos:** Sugiere 3 ediciones enfocadas que podría solicitar en un prompt futuro para mejorar aún más este copy. Borrador: [pega el borrador aquí]"',
            'La versión RISEN convierte una solicitud vaga en un mini-proceso estructurado, produciendo no solo una descripción mejorada sino también un rastro de auditoría completo y un plan para el siguiente ciclo.',
          ],
        },

        whenToUse: {
          title: 'Cuándo usar RISEN',
          id: 'when-to-use',
          content: [
            '**Usa el Framework RISEN para tareas de mejora iterativa donde ya tienes material y te importa entender cada cambio.** RISEN es para refinamiento, no para generación de primer borrador.',
          ],
          items: [
            'Refinar posts de blog, documentación o artículos del centro de ayuda durante varias rondas.',
            'Pulir decks de ventas, scripts de pitch y resúmenes ejecutivos.',
            'Revisar y mejorar los propios prompts, especialmente los complejos usados en producción.',
            'Condensar iterativamente análisis largos para que sean más claros y accionables.',
            'Flujos de revisión de contenido en equipo donde múltiples personas necesitan ver qué cambió.',
            'Revisión de código y mejora de documentación.',
          ],
        },

        comparisonTable: {
          title: 'Tabla de comparación: CoT vs Single-Pass vs RISEN',
          id: 'comparison-table',
          tableFormat: true,
          columns: ['Dimensión', 'Chain-of-Thought (CoT)', 'Prompt Single-Pass', 'Framework RISEN'],
          rows: [
            {
              'Dimensión': 'Estructura',
              'Chain-of-Thought (CoT)': 'Camino lineal único ("piensa paso a paso")',
              'Prompt Single-Pass': 'Un intento de generación',
              'Framework RISEN': 'Bucle iterativo de 5 pasos con ciclos de refinamiento'
            },
            {
              'Dimensión': 'Acción principal',
              'Chain-of-Thought (CoT)': 'El modelo escribe razonamiento luego respuesta',
              'Prompt Single-Pass': 'El modelo genera output',
              'Framework RISEN': 'Refinar → Inspeccionar → Resumir → Evaluar → Próximos Pasos → repetir'
            },
            {
              'Dimensión': 'Rastro de auditoría / seguimiento de cambios',
              'Chain-of-Thought (CoT)': 'No — se muestra razonamiento pero sin revisiones',
              'Prompt Single-Pass': 'Ninguno — el output es final',
              'Framework RISEN': 'Sí — el paso Inspeccionar documenta cada cambio'
            },
            {
              'Dimensión': 'Mejor para',
              'Chain-of-Thought (CoT)': 'Matemáticas, lógica, explicaciones (respuesta única correcta)',
              'Prompt Single-Pass': 'Generación rápida, tareas simples',
              'Framework RISEN': 'Mejora iterativa, documentos complejos, revisión en equipo'
            },
            {
              'Dimensión': 'Costo en tokens vs baseline',
              'Chain-of-Thought (CoT)': '~1.5-2× (razonamiento añadido)',
              'Prompt Single-Pass': 'Baseline (1×)',
              'Framework RISEN': 'Variable (2-5× por ciclo dependiendo de la profundidad)'
            },
            {
              'Dimensión': '¿Requiere múltiples prompts?',
              'Chain-of-Thought (CoT)': 'No — razonamiento + respuesta en un prompt',
              'Prompt Single-Pass': 'No',
              'Framework RISEN': 'Puede ser un prompt largo o 5 prompts secuenciales (tu elección)'
            },
            {
              'Dimensión': 'Comparación entre modelos integrada',
              'Chain-of-Thought (CoT)': 'No',
              'Prompt Single-Pass': 'No',
              'Framework RISEN': 'Sí (envía el mismo ciclo RISEN a GPT, Claude, Gemini en paralelo via PromptQuorum)'
            },
          ],
        },

        howToWrite: {
          title: 'Cómo escribir un prompt RISEN',
          id: 'how-to-write',
          numberedItems: [
            '**Establece el problema y los entregables esperados.** "Eres [rol]. Tu tarea es refinar [tipo de material] usando el proceso RISEN."',
            '**Define el objetivo de Refinar explícitamente.** "Mejora para [criterios específicos: claridad, precisión, concisión, tono, alineación con audiencia]. Objetivo [longitud o formato]."',
            '**Requiere output específico de Inspeccionar.** "Lista 5-7 cambios específicos. Para cada uno, indica qué cambiaste y por qué."',
            '**Especifica criterios de Evaluar.** "Califica en [3-5 dimensiones nombradas, ej., claridad, precisión, persuasión] en una escala 1-5. Justifica cada calificación en una oración."',
            '**Pide Próximos Pasos accionables.** "Sugiere 3 mejoras enfocadas para la siguiente iteración."',
          ],
        },

        calloutBoxes: {
          title: 'Notas clave',
          callouts: [
            {
              type: 'pro-tip',
              label: 'El Paso Inspeccionar es el Arma Secreta',
              text: 'El paso Inspeccionar es lo que hace RISEN único entre los frameworks. La mayoría de los frameworks generan output. RISEN obliga al modelo a documentar cada cambio específico, creando un rastro de auditoría permanente. Ningún otro framework tiene esta responsabilidad incorporada — por eso RISEN es esencial para industrias reguladas, trabajo académico y colaboración en equipo donde la trazabilidad importa.',
            },
            {
              type: 'key-point',
              label: 'Por qué "Mejora esto" Falla',
              text: 'Las solicitudes de mejora vagas como "mejora esto" o "hazlo mejor" no dan al modelo ninguna restricción. Sin criterios explícitos y estructura, el modelo divaga y produce resultados inconsistentes. RISEN funciona porque cada paso tiene un output específico y nombrado con restricciones. La especificidad impulsa la calidad.',
            },
            {
              type: 'warning',
              label: 'Cuándo NO usar RISEN',
              text: 'No uses RISEN para generación de primer borrador. RISEN requiere material existente para refinar. Si necesitas crear algo desde cero, usa primero CO-STAR, CRAFT o Single Step. Luego cambia a RISEN para mejora iterativa. Usar RISEN en material inexistente desperdicia tokens y produce output de Inspeccionar sin sentido.',
            },
            {
              type: 'pro-tip',
              label: 'El Flujo de Trabajo de Dos Frameworks',
              text: 'El patrón óptimo: Usa CO-STAR o CRAFT para generar el primer borrador. Luego cambia a RISEN para refinamiento iterativo y autocrítica. Esta separación evita que el modelo confunda dos tareas cognitivas fundamentalmente diferentes — "crear" y "mejorar". Cada framework sobresale en su fase específica.',
            },
          ],
        },

        commonMistakes: {
          title: 'Errores comunes al usar RISEN',
          id: 'common-mistakes',
          mistakes: [
            {
              mistake: 'Usar RISEN para generación de primer borrador',
              problem: 'RISEN necesita material existente para refinar. Si le pides a un modelo que "Refine" sin darle un borrador, genera desde cero y el paso Inspeccionar no tiene nada significativo que reportar.',
              fix: 'Usa CO-STAR, CRAFT o Single Step para primeros borradores. Cambia a RISEN solo después de tener material para mejorar.',
            },
            {
              mistake: 'Saltarse el paso Inspeccionar',
              problem: 'Muchos usuarios saltan de Refinar a Evaluar. Sin Inspeccionar, pierdes el rastro de auditoría — no puedes ver qué cambió ni por qué, haciendo imposible juzgar si el refinamiento realmente mejoró el output.',
              fix: 'Siempre incluye Inspeccionar. Requiere que el modelo liste 5-7 cambios específicos con breves justificaciones. Esto es lo que crea el rastro de auditoría.',
            },
            {
              mistake: 'Criterios de Evaluar vagos',
              problem: '"Califica esto en calidad" no le da al modelo nada que puntuar. Sin criterios explícitos, la autoevaluación no tiene sentido.',
              fix: 'Especifica 3-5 criterios nombrados con una escala numérica. Ejemplo: "Califica en claridad (1-5), precisión (1-5), alineación con audiencia (1-5). Justifica cada uno en una oración."',
            },
            {
              mistake: 'Ejecutar solo un ciclo RISEN',
              problem: 'Un ciclo rara vez alcanza la calidad de producción. RISEN está diseñado para la iteración — el output de Próximos Pasos se alimenta directamente en el siguiente paso de Refinar.',
              fix: 'Planifica para 2-4 ciclos RISEN. Detente cuando las puntuaciones de Evaluar se estabilicen y las sugerencias de Próximos Pasos se vuelvan menores.',
            },
            {
              mistake: 'No comparar outputs RISEN entre modelos',
              problem: 'Diferentes modelos refinan de manera diferente. Claude tiende a la concisión; GPT tiende a la elaboración; Gemini se enfoca en la experiencia del usuario. Ejecutar RISEN en un solo modelo limita tu perspectiva.',
              fix: 'Usa PromptQuorum para ejecutar el mismo ciclo RISEN en GPT-5.5, Claude 4.6 Sonnet y Gemini 2.5 Pro. Compara qué refinamientos del modelo mejor coinciden con tus objetivos.',
            },
          ],
        },

        risenInPromptQuorum: {
          title: 'RISEN en PromptQuorum',
          id: 'risen-in-promptquorum',
          content: [
            '**PromptQuorum es una herramienta de despacho de IA multi-modelo que ofrece el Framework RISEN como una de sus estructuras de prompt integradas.** Cuando eliges la opción RISEN, la app proporciona campos etiquetados para cada paso y los compone en una única instrucción reutilizable.',
            'Dentro de PromptQuorum, RISEN te permite:',
          ],
          items: [
            'Insertar un borrador existente y aplicar un patrón pre-estructurado "Refinar–Inspeccionar–Resumir–Evaluar–Próximos Pasos" sin escribir el meta-prompt completo tú mismo.',
            'Enviar las mismas instrucciones basadas en RISEN a múltiples modelos — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — en paralelo y comparar cómo cada uno refina y critica el borrador.',
            'Guardar plantillas RISEN para flujos de trabajo recurrentes (ej., "refinamiento de borrador de blog", "revisión de documentación técnica", "pulido de deck de ventas") y compartirlas con tu equipo.',
            'Ver el historial de revisiones completo para cada ciclo RISEN, haciendo el proceso de mejora transparente y auditable.',
          ],
        },

        combiningFrameworks: {
          title: 'Combinar RISEN con otros frameworks',
          id: 'combining-frameworks',
          content: [
            '**Combina RISEN con otros frameworks asignando RISEN a la fase de revisión y usando frameworks de generación antes en tu flujo de trabajo.** Un patrón práctico es:',
            'Esta separación evita que el modelo confunda "crear" y "mejorar" — dos tareas cognitivas fundamentalmente diferentes.',
          ],
          numberedItems: [
            'Usa CO-STAR, CRAFT o Single Step para crear el primer borrador.',
            'Cambia a RISEN para mejora iterativa, autocrítica y planificación.',
            'Muévete a SPECS si el output final debe seguir un esquema o formato estricto (opcional).',
          ],
        },

        faqSection: {
          title: 'Preguntas frecuentes',
          id: 'faq',
          faqs: [
            {
              q: '¿Qué significa RISEN?',
              a: 'RISEN significa Refinar, Inspeccionar, Resumir, Evaluar, Próximos Pasos. Es un framework iterativo de 5 pasos diseñado para mejorar borradores existentes a través de ciclos de revisión estructurados.',
            },
            {
              q: '¿En qué se diferencia RISEN de CO-STAR o CRAFT?',
              a: 'CO-STAR y CRAFT son frameworks de generación — te ayudan a crear primeros borradores. RISEN es un framework de refinamiento — te ayuda a mejorar material existente a través de iteraciones rastreadas. Usa frameworks de generación para crear, luego cambia a RISEN para refinar.',
            },
            {
              q: '¿Cuándo debo usar RISEN vs otros frameworks?',
              a: 'Usa RISEN cuando ya tienes un borrador y quieres mejora controlada. Usa CO-STAR para generación general de primer borrador, CRAFT para contenido creativo, RTF para especificaciones estructuradas de rol-tarea-formato, y TRACE para entender el razonamiento del modelo.',
            },
            {
              q: '¿Cuántos ciclos RISEN necesito?',
              a: 'Típicamente 2-4 ciclos. Detente cuando las puntuaciones de Evaluar se estabilicen (ciclos consecutivos puntúan igual) y las sugerencias de Próximos Pasos se vuelvan pequeños ajustes de formato en lugar de mejoras sustanciales.',
            },
            {
              q: '¿Puedo usar RISEN con modelos locales?',
              a: 'Sí. RISEN funciona con cualquier LLM que siga instrucciones — incluidos modelos locales via Ollama o LM Studio. Los modelos más grandes (13B+) manejan mejor la estructura multi-paso; los modelos de 7B pueden necesitar cada paso como un prompt separado.',
            },
            {
              q: '¿Qué hace especial al paso Inspeccionar?',
              a: 'El paso Inspeccionar obliga al modelo a listar cada cambio específico que hizo durante Refinar, creando un rastro de auditoría. Puedes ver exactamente qué cambió entre versiones y juzgar si cada cambio mejoró el output. Sin Inspeccionar, las revisiones son una caja negra.',
            },
            {
              q: '¿Puedo combinar RISEN con pruebas multi-modelo?',
              a: 'Sí. Usa PromptQuorum para enviar el mismo ciclo RISEN a GPT-5.5, Claude 4.6 Sonnet y Gemini 2.5 Pro simultáneamente. Compara qué refinamientos, puntuaciones de autocrítica y sugerencias de próximos pasos del modelo mejor coinciden con tus requisitos.',
            },
            {
              q: '¿RISEN añade sobrecarga en el costo de tokens?',
              a: 'Sí. Cada ciclo RISEN genera 2-5× más tokens de output que un prompt single-pass porque el modelo escribe múltiples secciones (contenido refinado, registro de cambios, resumen, evaluación, recomendaciones). Usa RISEN selectivamente en tareas de alto riesgo. Para ediciones rápidas, prefiere prompts de un solo paso.',
            },
          ],
        },

        relatedReading: {
          title: 'Lecturas relacionadas',
          id: 'related-reading',
          items: [
            { title: 'Prompting Chain-of-Thought', url: '/es/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Framework CO-STAR', url: '/es/prompt-engineering/co-star-framework' },
            { title: 'Framework CRAFT', url: '/es/prompt-engineering/craft-framework' },
            { title: 'Framework TRACE', url: '/es/prompt-engineering/trace-framework' },
            { title: '¿Qué framework de prompt deberías usar?', url: '/es/prompt-engineering/which-prompt-framework-should-you-use' },
            { title: 'Construye tu propio framework de prompts', url: '/es/prompt-engineering/build-your-own-prompt-framework' },
          ],
        },

        sources: {
          title: 'Fuentes',
          id: 'sources',
          items: [
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608. Cataloga 58+ técnicas de prompting incluidos patrones de refinamiento iterativo.',
            'OpenAI Prompt Engineering Guide. https://platform.openai.com/docs/guides/prompt-engineering — Mejores prácticas oficiales de prompting incluyendo estrategias de refinamiento iterativo.',
            'Anthropic Prompt Engineering Documentation. https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Guía específica de Claude sobre flujos de trabajo de prompts multi-paso.',
          ],
        },
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Framework RISEN: Refinar, Inspeccionar, Resumir, Evaluar, Próximos Pasos (2026)',
        description: 'El Framework RISEN para refinamiento iterativo de prompts: Refinar borradores, Inspeccionar cambios, Resumir resultados, Evaluar según criterios, planificar Próximos Pasos. Pruebas multi-modelo con PromptQuorum.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/es/prompt-engineering/risen-framework?lang=es',
        inLanguage: 'es',
        keywords: ['Framework RISEN', 'prompting iterativo', 'refinamiento de prompts', 'flujos de trabajo multi-paso', 'prompt engineering', 'PromptQuorum', 'GPT-5.5', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RISEN' },
          { '@type': 'Thing', name: 'Prompting Iterativo' },
          { '@type': 'Thing', name: 'Refinamiento de Prompts' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', name: '¿Qué significa RISEN?', acceptedAnswer: { '@type': 'Answer', text: 'RISEN significa Refinar, Inspeccionar, Resumir, Evaluar, Próximos Pasos. Es un framework iterativo de 5 pasos diseñado para mejorar borradores existentes a través de ciclos de revisión estructurados.' } },
          { '@type': 'Question', name: '¿En qué se diferencia RISEN de CO-STAR o CRAFT?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR y CRAFT son frameworks de generación — te ayudan a crear primeros borradores. RISEN es un framework de refinamiento — te ayuda a mejorar material existente a través de iteraciones rastreadas. Usa frameworks de generación para crear, luego cambia a RISEN para refinar.' } },
          { '@type': 'Question', name: '¿Cuándo debo usar RISEN vs otros frameworks?', acceptedAnswer: { '@type': 'Answer', text: 'Usa RISEN cuando ya tienes un borrador y quieres mejora controlada. Usa CO-STAR para generación general de primer borrador, CRAFT para contenido creativo, RTF para especificaciones estructuradas, y TRACE para entender el razonamiento del modelo.' } },
          { '@type': 'Question', name: '¿Cuántos ciclos RISEN necesito?', acceptedAnswer: { '@type': 'Answer', text: 'Típicamente 2-4 ciclos. Detente cuando las puntuaciones de Evaluar se estabilicen y las sugerencias de Próximos Pasos se vuelvan pequeños ajustes en lugar de mejoras sustanciales.' } },
          { '@type': 'Question', name: '¿Puedo usar RISEN con modelos locales?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. RISEN funciona con cualquier LLM que siga instrucciones — incluidos modelos locales via Ollama o LM Studio. Los modelos más grandes (13B+) manejan mejor la estructura multi-paso.' } },
          { '@type': 'Question', name: '¿Qué hace especial al paso Inspeccionar?', acceptedAnswer: { '@type': 'Answer', text: 'El paso Inspeccionar obliga al modelo a listar cada cambio específico que hizo, creando un rastro de auditoría. Puedes ver exactamente qué cambió entre versiones y juzgar si cada cambio mejoró el output.' } },
          { '@type': 'Question', name: '¿Puedo combinar RISEN con pruebas multi-modelo?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Usa PromptQuorum para enviar el mismo ciclo RISEN a GPT-5.5, Claude 4.6 Sonnet y Gemini 2.5 Pro simultáneamente. Compara qué refinamientos del modelo mejor coinciden con tus requisitos.' } },
          { '@type': 'Question', name: '¿RISEN añade sobrecarga en el costo de tokens?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Cada ciclo RISEN genera 2-5× más tokens de output que un prompt single-pass. Usa RISEN selectivamente en tareas de alto riesgo. Para ediciones rápidas, prefiere prompts de un solo paso.' } },
        ],
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Comparación CoT vs Single-Pass vs RISEN',
        numberOfItems: 7,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Estructura', description: 'CoT: Camino lineal único. Single-Pass: Una generación. RISEN: Bucle iterativo de 5 pasos.' },
          { '@type': 'ListItem', position: 2, name: 'Acción principal', description: 'CoT: Razonar luego responder. Single-Pass: Generar. RISEN: Refinar → Inspeccionar → Resumir → Evaluar → Próximos Pasos → repetir.' },
          { '@type': 'ListItem', position: 3, name: 'Rastro de auditoría', description: 'CoT: Sin seguimiento de cambios. Single-Pass: Ninguno. RISEN: Sí — Inspeccionar documenta cada cambio.' },
          { '@type': 'ListItem', position: 4, name: 'Mejor para', description: 'CoT: Matemáticas y lógica. Single-Pass: Tareas rápidas. RISEN: Mejora iterativa y revisión en equipo.' },
          { '@type': 'ListItem', position: 5, name: 'Costo en tokens', description: 'CoT: 1.5-2×. Single-Pass: 1× baseline. RISEN: 2-5× por ciclo.' },
          { '@type': 'ListItem', position: 6, name: '¿Múltiples prompts?', description: 'CoT: No. Single-Pass: No. RISEN: Puede ser un prompt largo o 5 prompts secuenciales.' },
          { '@type': 'ListItem', position: 7, name: 'Comparación de modelos', description: 'CoT: No. Single-Pass: No. RISEN: Sí — pruebas paralelas en GPT, Claude, Gemini via PromptQuorum.' },
        ],
      },
    },

    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Framework RISEN: Refinar, Inspecionar, Resumir, Avaliar, Próximos Passos (2026)',
      intro: 'O Framework RISEN é uma estrutura iterativa de 5 etapas para melhorar os outputs de IA por meio de ciclos de revisão estruturados. Em vez de aceitar o primeiro rascunho ou reescrever do zero, você usa o RISEN para refinar, auditar, avaliar e planejar as próximas melhorias de forma sistemática. Cada etapa tem um propósito distinto: Refinar melhora o rascunho, Inspecionar documenta cada mudança, Resumir explica a nova versão, Avaliar pontua com base em critérios e Próximos Passos recomenda edições adicionais. O RISEN transforma "melhore isso" em um fluxo de trabalho transparente e repetível.',
      leadAnswerBlock: '**RISEN é um loop iterativo de 5 etapas: Refinar melhora o rascunho, Inspecionar lista cada mudança com justificativa, Resumir explica a nova versão, Avaliar a pontua com base em critérios (escala 1-5) e Próximos Passos recomenda 3 melhorias focadas para o próximo ciclo. Use o RISEN quando você já tem um rascunho e quer melhoria controlada e auditável com trilha de auditoria. A etapa Inspecionar é única: obriga o modelo a documentar as mudanças — tornando as revisões rastreáveis. Em 2026, o RISEN está integrado ao PromptQuorum como opção de envio multi-modelo, permitindo que você teste o mesmo ciclo RISEN no GPT-5.5, Claude 4.6 Sonnet e Gemini 2.5 Pro simultaneamente para comparar abordagens de refinamento.**',
      publishDate: '2026-03-24',
      readTime: '13 min de leitura',
      seoTitle: 'Framework RISEN: refine prompts em 5 etapas iterativas (2026)',
      metaDescription: 'RISEN refina prompts de forma iterativa com 5 etapas. Documenta mudanças, avalia qualidade, planeja próximas melhorias. Testes multi-modelo com PromptQuorum.',
      educationalLevel: 'Intermediate',
      audience: 'Desenvolvedores que constroem fluxos de trabalho de prompts, equipes de produto iterando conteúdo, equipes realizando revisões multi-etapa',
      primaryTerm: 'Framework RISEN',
      aboutTopics: ['Framework RISEN', 'Prompting Iterativo', 'Refinamento de Prompts', 'Fluxos de Trabalho Multi-Etapa'],
      next_refresh_due: '2026-09-24',

      quickFacts: [
        'RISEN = Refinar, Inspecionar, Resumir, Avaliar, Próximos Passos — um loop iterativo de 5 etapas para melhoria controlada de outputs',
        'Use o RISEN quando você já tem um rascunho, documento ou plano. Não o use para geração de primeiro rascunho — combine-o com CO-STAR ou CRAFT para isso.',
        'A etapa Inspecionar é única: obriga o modelo a listar cada mudança específica e justificá-la, criando uma trilha de auditoria. Nenhum outro framework tem essa responsabilidade incorporada.',
        'Fluxo de trabalho típico: 2-4 ciclos RISEN para atingir qualidade de produção a partir de um rascunho inicial. Cada ciclo produz 3 outputs: conteúdo melhorado, registro de mudanças (Inspecionar) e plano de ação (Próximos Passos).',
        'Funciona com qualquer modelo: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro e modelos locais via Ollama ou LM Studio. Modelos maiores (13B+) gerenciam melhor a estrutura multi-etapa.',
        'Padrão combinado RISEN + CO-STAR: Use CO-STAR para geração do primeiro rascunho e depois mude para RISEN para refinamento iterativo. Separa "criar" de "refinar" — duas tarefas cognitivas fundamentalmente diferentes.',
      ],

      toc: [
        { anchor: 'key-takeaways', label: 'Pontos principais' },
        { anchor: 'what-is-risen', label: 'O que é o Framework RISEN?' },
        { anchor: 'five-components', label: 'Os Cinco Componentes RISEN' },
        { anchor: 'why-useful', label: 'Por que o RISEN é útil' },
        { anchor: 'when-to-use', label: 'Quando usar o RISEN' },
        { anchor: 'comparison-table', label: 'Tabela de comparação (CoT vs Single-Pass vs RISEN)' },
        { anchor: 'bad-vs-good', label: 'Exemplo de prompt RISEN ruim vs bom' },
        { anchor: 'how-to-write', label: 'Como escrever um prompt RISEN' },
        { anchor: 'common-mistakes', label: 'Erros comuns ao usar o RISEN' },
        { anchor: 'risen-in-promptquorum', label: 'RISEN no PromptQuorum' },
        { anchor: 'combining-frameworks', label: 'Combinar o RISEN com outros frameworks' },
        { anchor: 'faq', label: 'Perguntas frequentes' },
        { anchor: 'related-reading', label: 'Leituras relacionadas' },
        { anchor: 'sources', label: 'Fontes' },
      ],

      sections: {
        tldr: {
          isTldr: true,
          title: 'Pontos principais',
          id: 'key-takeaways',
          items: [
            'RISEN é um loop iterativo de 5 etapas — Refinar, Inspecionar, Resumir, Avaliar, Próximos Passos — que transforma "melhore isso" em um fluxo de trabalho estruturado e repetível com trilha de auditoria.',
            'Use o RISEN para refinamento iterativo (melhorar rascunhos existentes). Não o use para geração de primeiro rascunho — combine-o com CO-STAR ou CRAFT para essa fase.',
            'A etapa Inspecionar é única: obriga o modelo a listar cada mudança específica e justificá-la. Isso cria uma trilha de auditoria — você pode ver exatamente o que mudou e por quê.',
            'Fluxo de trabalho típico: 2-4 ciclos RISEN para atingir qualidade de produção. Cada ciclo produz conteúdo melhorado, um registro de mudanças e recomendações para a próxima iteração.',
            'O RISEN funciona com qualquer modelo: GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro, Ollama, LM Studio. Modelos maiores (13B+) gerenciam melhor a estrutura multi-etapa.',
            'No PromptQuorum, o RISEN está integrado. Envie o mesmo ciclo RISEN a múltiplos modelos simultaneamente e compare como cada modelo refina de forma diferente.',
            'Use o PromptQuorum para testar padrões RISEN entre modelos — veja qual abordagem de refinamento do modelo melhor atende aos seus objetivos.',
          ],
        },

        whatIsRISEN: {
          title: 'O que é o Framework RISEN?',
          id: 'what-is-risen',
          snippets: [
            { type: 'in-one-sentence', text: 'RISEN é um loop iterativo de 5 etapas — Refinar, Inspecionar, Resumir, Avaliar, Próximos Passos — que transforma "melhore isso" em um fluxo de trabalho estruturado e repetível com trilha de auditoria.' },
            { type: 'in-plain-terms', text: 'Em vez de dizer "melhore isso" e esperar, você diz à IA para corrigi-lo (Refinar), listar o que mudou (Inspecionar), explicar o que a nova versão faz (Resumir), se autoavaliar (Avaliar) e sugerir o que corrigir a seguir (Próximos Passos). Você repete até estar pronto.' },
          ],
          content: [
            '**O Framework RISEN é um padrão de prompt iterativo projetado para refinar rascunhos, análises e planos existentes por meio de múltiplos ciclos de melhoria.** Em vez de tratar cada prompt como uma tarefa isolada, você guia um modelo como GPT-5.5, Claude 4.6 Sonnet ou Gemini 2.5 Pro por um loop de melhoria estruturado e repetível. Isso torna seu fluxo de trabalho mais parecido com edição contínua do que com tentativa e erro aleatória.',
            'O RISEN é especialmente útil quando você já tem uma primeira versão — como um artigo em rascunho, nota de estratégia, trecho de código ou análise — e quer que o modelo o melhore de maneira controlada e auditável. Cada etapa RISEN tem um propósito distinto, o que mantém as revisões focadas e rastreáveis.',
            'O framework recebe seu nome de suas cinco etapas: **R**efinar (melhorar o rascunho), **I**nspecionar (identificar mudanças), **R**esumir (explicar o que mudou), **A**valiar (pontuar segundo critérios) e **P**róximos Passos (recomendar melhorias).',
          ],
        },

        fiveComponents: {
          title: 'Os Cinco Componentes RISEN',
          id: 'five-components',
          content: [
            '**Um prompt RISEN sólido solicita explicitamente ao modelo que avance por cinco etapas, cada uma com um output distinto.** Você pode combinar essas etapas em um prompt mais longo ou separá-las em prompts sequenciais, dependendo de quanto controle e feedback você deseja.',
          ],
          items: [
            '**Refinar:** Melhorar o rascunho existente de acordo com seus objetivos (clareza, estrutura, precisão, concisão, alinhamento com a audiência, tom, etc.). O modelo reescreve ou aprimora o material original.',
            '**Inspecionar:** Identificar mudanças concretas realizadas — exatamente o que foi reescrito, quais detalhes foram adicionados, quais problemas foram corrigidos. Isso cria a trilha de auditoria. Exija 5-7 edições específicas com justificativas.',
            '**Resumir:** Fornecer uma explicação concisa do que a nova versão diz ou faz — não uma repetição do conteúdo, mas uma descrição em nível meta de seu foco e ênfase.',
            '**Avaliar:** Criticar o resultado com base em critérios explícitos (tom, precisão, completude, alinhamento com a audiência, clareza). Use uma escala numérica de 1-5 e exija justificativa de uma frase por critério.',
            '**Próximos Passos:** Recomendar 3 melhorias focadas para a próxima iteração para que você sempre tenha uma direção clara para refinamento adicional.',
          ],
        },

        whyUseful: {
          title: 'Por que o RISEN é útil',
          id: 'why-useful',
          content: [
            '**O Framework RISEN é útil sempre que você quer transformar "melhore isso" em um fluxo de trabalho transparente e repetível em vez de uma caixa preta.** Ele incentiva o modelo não apenas a gerar, mas também a analisar e criticar seu próprio trabalho.',
            'Os benefícios práticos incluem:',
          ],
          items: [
            'Visibilidade clara do que mudou entre versões — a etapa Inspecionar obriga a documentação completa.',
            'Autocrítica estruturada que expõe fraquezas, lacunas e oportunidades.',
            'Um roteiro integrado para a próxima iteração para que você nunca fique preso sem saber o que tentar a seguir.',
            'Processo repetível que pode ser transformado em modelo, compartilhado com equipes e padronizado.',
            'Trilha de auditoria para conformidade ou gerenciamento do conhecimento — você pode justificar cada revisão.',
          ],
        },

        badVsGood: {
          title: 'Exemplo de prompt RISEN ruim vs bom',
          id: 'bad-vs-good',
          content: [
            '**A diferença entre uma solicitação de revisão sem estrutura e uma baseada em RISEN fica clara quando você aplica as duas ao mesmo rascunho.** Abaixo há um exemplo real para melhorar uma descrição de produto.',
            '**[Prompt Ruim]**',
            '"Melhore esta descrição de produto."',
            '**[Bom Prompt RISEN]**',
            '"Você é um editor de marketing de produto. Vou lhe dar um rascunho de descrição de produto. Use o processo RISEN da seguinte forma: **Refinar:** Reescreva a descrição para maior clareza e concisão, mantendo todos os detalhes factuais. Meta: 120-160 palavras. **Inspecionar:** Liste 5-7 edições específicas que você fez (ex.: \'esclareci o benefício X\', \'removi a frase repetida Y\', \'adicionei audiência-alvo\'). **Resumir:** Em 2-3 frases, explique o que a descrição atualizada agora enfatiza e o que mudou em seu foco. **Avaliar:** Avalie a nova descrição em uma escala de 1-5 para clareza (1-5), persuasão (1-5) e alinhamento com audiência B2B (1-5). Justifique cada avaliação em uma frase. **Próximos Passos:** Sugira 3 edições focadas que você poderia solicitar em um prompt futuro para melhorar ainda mais este texto. Rascunho: [cole o rascunho aqui]"',
            'A versão RISEN transforma uma solicitação vaga em um mini-processo estruturado, produzindo não apenas uma descrição melhorada, mas também uma trilha de auditoria completa e um plano para o próximo ciclo.',
          ],
        },

        whenToUse: {
          title: 'Quando usar o RISEN',
          id: 'when-to-use',
          content: [
            '**Use o Framework RISEN para tarefas de melhoria iterativa em que você já tem material e se importa em entender cada mudança.** O RISEN é para refinamento, não para geração de primeiro rascunho.',
          ],
          items: [
            'Refinar posts de blog, documentação ou artigos da central de ajuda ao longo de várias rodadas.',
            'Aprimorar decks de vendas, scripts de pitch e resumos executivos.',
            'Revisar e melhorar os próprios prompts, especialmente os complexos usados em produção.',
            'Condensar iterativamente análises longas para que se tornem mais claras e acionáveis.',
            'Fluxos de revisão de conteúdo em equipe em que múltiplas pessoas precisam ver o que mudou.',
            'Revisão de código e melhoria de documentação.',
          ],
        },

        comparisonTable: {
          title: 'Tabela de comparação: CoT vs Single-Pass vs RISEN',
          id: 'comparison-table',
          tableFormat: true,
          columns: ['Dimensão', 'Chain-of-Thought (CoT)', 'Prompt Single-Pass', 'Framework RISEN'],
          rows: [
            {
              'Dimensão': 'Estrutura',
              'Chain-of-Thought (CoT)': 'Caminho linear único ("pense passo a passo")',
              'Prompt Single-Pass': 'Uma tentativa de geração',
              'Framework RISEN': 'Loop iterativo de 5 etapas com ciclos de refinamento'
            },
            {
              'Dimensão': 'Ação principal',
              'Chain-of-Thought (CoT)': 'O modelo escreve raciocínio e depois resposta',
              'Prompt Single-Pass': 'O modelo gera output',
              'Framework RISEN': 'Refinar → Inspecionar → Resumir → Avaliar → Próximos Passos → repetir'
            },
            {
              'Dimensão': 'Trilha de auditoria / rastreamento de mudanças',
              'Chain-of-Thought (CoT)': 'Não — o raciocínio é mostrado, mas sem revisões',
              'Prompt Single-Pass': 'Nenhuma — o output é final',
              'Framework RISEN': 'Sim — a etapa Inspecionar documenta cada mudança'
            },
            {
              'Dimensão': 'Melhor para',
              'Chain-of-Thought (CoT)': 'Matemática, lógica, explicações (resposta única correta)',
              'Prompt Single-Pass': 'Geração rápida, tarefas simples',
              'Framework RISEN': 'Melhoria iterativa, documentos complexos, revisão em equipe'
            },
            {
              'Dimensão': 'Custo em tokens vs baseline',
              'Chain-of-Thought (CoT)': '~1.5-2× (raciocínio adicionado)',
              'Prompt Single-Pass': 'Baseline (1×)',
              'Framework RISEN': 'Variável (2-5× por ciclo dependendo da profundidade)'
            },
            {
              'Dimensão': 'Requer múltiplos prompts?',
              'Chain-of-Thought (CoT)': 'Não — raciocínio + resposta em um prompt',
              'Prompt Single-Pass': 'Não',
              'Framework RISEN': 'Pode ser um prompt longo ou 5 prompts sequenciais (sua escolha)'
            },
            {
              'Dimensão': 'Comparação entre modelos integrada',
              'Chain-of-Thought (CoT)': 'Não',
              'Prompt Single-Pass': 'Não',
              'Framework RISEN': 'Sim (envie o mesmo ciclo RISEN ao GPT, Claude, Gemini em paralelo via PromptQuorum)'
            },
          ],
        },

        howToWrite: {
          title: 'Como escrever um prompt RISEN',
          id: 'how-to-write',
          numberedItems: [
            '**Declare o problema e os entregáveis esperados.** "Você é [função]. Sua tarefa é refinar [tipo de material] usando o processo RISEN."',
            '**Defina o objetivo de Refinar explicitamente.** "Melhore para [critérios específicos: clareza, precisão, concisão, tom, alinhamento com audiência]. Meta [comprimento ou formato]."',
            '**Exija output específico de Inspecionar.** "Liste 5-7 mudanças específicas. Para cada uma, indique o que você alterou e por quê."',
            '**Especifique critérios de Avaliar.** "Avalie em [3-5 dimensões nomeadas, ex.: clareza, precisão, persuasão] em uma escala de 1-5. Justifique cada avaliação em uma frase."',
            '**Peça Próximos Passos acionáveis.** "Sugira 3 melhorias focadas para a próxima iteração."',
          ],
        },

        calloutBoxes: {
          title: 'Notas principais',
          callouts: [
            {
              type: 'pro-tip',
              label: 'A Etapa Inspecionar é a Arma Secreta',
              text: 'A etapa Inspecionar é o que torna o RISEN único entre os frameworks. A maioria dos frameworks gera output. O RISEN obriga o modelo a documentar cada mudança específica, criando uma trilha de auditoria permanente. Nenhum outro framework tem essa responsabilidade incorporada — por isso o RISEN é essencial para indústrias regulamentadas, trabalho acadêmico e colaboração em equipe onde a rastreabilidade importa.',
            },
            {
              type: 'key-point',
              label: 'Por que "Melhore isso" Falha',
              text: 'Solicitações de melhoria vagas como "melhore isso" ou "torne melhor" não dão ao modelo nenhuma restrição. Sem critérios explícitos e estrutura, o modelo divaga e produz resultados inconsistentes. O RISEN funciona porque cada etapa tem um output específico e nomeado com restrições. A especificidade impulsiona a qualidade.',
            },
            {
              type: 'warning',
              label: 'Quando NÃO usar o RISEN',
              text: 'Não use o RISEN para geração de primeiro rascunho. O RISEN requer material existente para refinar. Se você precisa criar algo do zero, use primeiro CO-STAR, CRAFT ou Single Step. Depois mude para o RISEN para melhoria iterativa. Usar o RISEN em material inexistente desperdiça tokens e produz output de Inspecionar sem sentido.',
            },
            {
              type: 'pro-tip',
              label: 'O Fluxo de Trabalho de Dois Frameworks',
              text: 'O padrão ideal: Use CO-STAR ou CRAFT para gerar o primeiro rascunho. Depois mude para o RISEN para refinamento iterativo e autocrítica. Essa separação evita que o modelo confunda duas tarefas cognitivas fundamentalmente diferentes — "criar" e "melhorar". Cada framework se destaca em sua fase específica.',
            },
          ],
        },

        commonMistakes: {
          title: 'Erros comuns ao usar o RISEN',
          id: 'common-mistakes',
          mistakes: [
            {
              mistake: 'Usar o RISEN para geração de primeiro rascunho',
              problem: 'O RISEN precisa de material existente para refinar. Se você pede ao modelo que "Refine" sem fornecer um rascunho, ele gera do zero e a etapa Inspecionar não tem nada significativo a reportar.',
              fix: 'Use CO-STAR, CRAFT ou Single Step para primeiros rascunhos. Mude para o RISEN somente depois de ter material para melhorar.',
            },
            {
              mistake: 'Pular a etapa Inspecionar',
              problem: 'Muitos usuários pulam de Refinar para Avaliar. Sem Inspecionar, você perde a trilha de auditoria — não consegue ver o que mudou nem por quê, tornando impossível julgar se o refinamento realmente melhorou o output.',
              fix: 'Sempre inclua Inspecionar. Exija que o modelo liste 5-7 mudanças específicas com breves justificativas. Isso é o que cria a trilha de auditoria.',
            },
            {
              mistake: 'Critérios de Avaliar vagos',
              problem: '"Avalie isso na qualidade" não dá ao modelo nada para pontuar. Sem critérios explícitos, a autoavaliação não tem sentido.',
              fix: 'Especifique 3-5 critérios nomeados com uma escala numérica. Exemplo: "Avalie em clareza (1-5), precisão (1-5), alinhamento com audiência (1-5). Justifique cada um em uma frase."',
            },
            {
              mistake: 'Executar apenas um ciclo RISEN',
              problem: 'Um ciclo raramente atinge a qualidade de produção. O RISEN é projetado para iteração — o output de Próximos Passos alimenta diretamente a próxima etapa de Refinar.',
              fix: 'Planeje 2-4 ciclos RISEN. Pare quando as pontuações de Avaliar estabilizarem e as sugestões de Próximos Passos se tornarem menores.',
            },
            {
              mistake: 'Não comparar outputs RISEN entre modelos',
              problem: 'Diferentes modelos refinam de maneira diferente. Claude tende à concisão; GPT tende à elaboração; Gemini foca na experiência do usuário. Executar o RISEN em um único modelo limita sua perspectiva.',
              fix: 'Use o PromptQuorum para executar o mesmo ciclo RISEN no GPT-5.5, Claude 4.6 Sonnet e Gemini 2.5 Pro. Compare quais refinamentos do modelo melhor atendem aos seus objetivos.',
            },
          ],
        },

        risenInPromptQuorum: {
          title: 'RISEN no PromptQuorum',
          id: 'risen-in-promptquorum',
          content: [
            '**PromptQuorum é uma ferramenta de envio de IA multi-modelo que oferece o Framework RISEN como uma de suas estruturas de prompt integradas.** Quando você escolhe a opção RISEN, o aplicativo fornece campos rotulados para cada etapa e os compõe em uma única instrução reutilizável.',
            'Dentro do PromptQuorum, o RISEN permite que você:',
          ],
          items: [
            'Insira um rascunho existente e aplique um padrão pré-estruturado "Refinar–Inspecionar–Resumir–Avaliar–Próximos Passos" sem escrever o meta-prompt completo você mesmo.',
            'Envie as mesmas instruções baseadas em RISEN a múltiplos modelos — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — em paralelo e compare como cada um refina e critica o rascunho.',
            'Salve modelos RISEN para fluxos de trabalho recorrentes (ex.: "refinamento de rascunho de blog", "revisão de documentação técnica", "aprimoramento de deck de vendas") e os compartilhe com sua equipe.',
            'Visualize o histórico completo de revisões para cada ciclo RISEN, tornando o processo de melhoria transparente e auditável.',
          ],
        },

        combiningFrameworks: {
          title: 'Combinar o RISEN com outros frameworks',
          id: 'combining-frameworks',
          content: [
            '**Combine o RISEN com outros frameworks atribuindo o RISEN à fase de revisão e usando frameworks de geração antes em seu fluxo de trabalho.** Um padrão prático é:',
            'Essa separação evita que o modelo confunda "criar" e "melhorar" — duas tarefas cognitivas fundamentalmente diferentes.',
          ],
          numberedItems: [
            'Use CO-STAR, CRAFT ou Single Step para criar o primeiro rascunho.',
            'Mude para o RISEN para melhoria iterativa, autocrítica e planejamento.',
            'Mova para SPECS se o output final precisar seguir um esquema ou formato estrito (opcional).',
          ],
        },

        faqSection: {
          title: 'Perguntas frequentes',
          id: 'faq',
          faqs: [
            {
              q: 'O que significa RISEN?',
              a: 'RISEN significa Refinar, Inspecionar, Resumir, Avaliar, Próximos Passos. É um framework iterativo de 5 etapas projetado para melhorar rascunhos existentes por meio de ciclos de revisão estruturados.',
            },
            {
              q: 'Como o RISEN difere do CO-STAR ou CRAFT?',
              a: 'CO-STAR e CRAFT são frameworks de geração — eles ajudam você a criar primeiros rascunhos. RISEN é um framework de refinamento — ajuda você a melhorar material existente por meio de iterações rastreadas. Use frameworks de geração para criar e depois mude para o RISEN para refinar.',
            },
            {
              q: 'Quando devo usar o RISEN em vez de outros frameworks?',
              a: 'Use o RISEN quando você já tem um rascunho e quer melhoria controlada. Use CO-STAR para geração geral de primeiro rascunho, CRAFT para conteúdo criativo, RTF para especificações estruturadas de função-tarefa-formato, e TRACE para entender o raciocínio do modelo.',
            },
            {
              q: 'Quantos ciclos RISEN preciso?',
              a: 'Tipicamente 2-4 ciclos. Pare quando as pontuações de Avaliar estabilizarem (ciclos consecutivos pontuam igual) e as sugestões de Próximos Passos se tornarem pequenos ajustes de formatação em vez de melhorias substanciais.',
            },
            {
              q: 'Posso usar o RISEN com modelos locais?',
              a: 'Sim. O RISEN funciona com qualquer LLM que siga instruções — incluindo modelos locais via Ollama ou LM Studio. Modelos maiores (13B+) gerenciam melhor a estrutura multi-etapa; modelos de 7B podem precisar de cada etapa como um prompt separado.',
            },
            {
              q: 'O que torna a etapa Inspecionar especial?',
              a: 'A etapa Inspecionar obriga o modelo a listar cada mudança específica que fez durante Refinar, criando uma trilha de auditoria. Você pode ver exatamente o que mudou entre versões e julgar se cada mudança melhorou o output. Sem Inspecionar, as revisões são uma caixa preta.',
            },
            {
              q: 'Posso combinar o RISEN com testes multi-modelo?',
              a: 'Sim. Use o PromptQuorum para enviar o mesmo ciclo RISEN ao GPT-5.5, Claude 4.6 Sonnet e Gemini 2.5 Pro simultaneamente. Compare quais refinamentos, pontuações de autocrítica e sugestões de próximos passos do modelo melhor atendem aos seus requisitos.',
            },
            {
              q: 'O RISEN adiciona sobrecarga no custo de tokens?',
              a: 'Sim. Cada ciclo RISEN gera 2-5× mais tokens de output do que um prompt single-pass porque o modelo escreve múltiplas seções (conteúdo refinado, registro de mudanças, resumo, avaliação, recomendações). Use o RISEN seletivamente em tarefas de alto risco. Para edições rápidas, prefira prompts de uma única etapa.',
            },
          ],
        },

        relatedReading: {
          title: 'Leituras relacionadas',
          id: 'related-reading',
          items: [
            { title: 'Prompting Chain-of-Thought', url: '/pt/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Framework CO-STAR', url: '/pt/prompt-engineering/co-star-framework' },
            { title: 'Framework CRAFT', url: '/pt/prompt-engineering/craft-framework' },
            { title: 'Framework TRACE', url: '/pt/prompt-engineering/trace-framework' },
            { title: 'Qual framework de prompt você deve usar?', url: '/pt/prompt-engineering/which-prompt-framework-should-you-use' },
            { title: 'Crie seu próprio framework de prompts', url: '/pt/prompt-engineering/build-your-own-prompt-framework' },
          ],
        },

        sources: {
          title: 'Fontes',
          id: 'sources',
          items: [
            'Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608. Cataloga 58+ técnicas de prompting incluindo padrões de refinamento iterativo.',
            'OpenAI Prompt Engineering Guide. https://platform.openai.com/docs/guides/prompt-engineering — Melhores práticas oficiais de prompting incluindo estratégias de refinamento iterativo.',
            'Anthropic Prompt Engineering Documentation. https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering — Guia específico do Claude sobre fluxos de trabalho de prompts multi-etapa.',
          ],
        },
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Framework RISEN: Refinar, Inspecionar, Resumir, Avaliar, Próximos Passos (2026)',
        description: 'O Framework RISEN para refinamento iterativo de prompts: Refinar rascunhos, Inspecionar mudanças, Resumir resultados, Avaliar segundo critérios, planejar Próximos Passos. Testes multi-modelo com PromptQuorum.',
        datePublished: '2026-03-24',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/risen-framework?lang=pt',
        inLanguage: 'pt-BR',
        keywords: ['Framework RISEN', 'prompting iterativo', 'refinamento de prompts', 'fluxos de trabalho multi-etapa', 'prompt engineering', 'PromptQuorum', 'GPT-5.5', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Framework RISEN' },
          { '@type': 'Thing', name: 'Prompting Iterativo' },
          { '@type': 'Thing', name: 'Refinamento de Prompts' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', name: 'O que significa RISEN?', acceptedAnswer: { '@type': 'Answer', text: 'RISEN significa Refinar, Inspecionar, Resumir, Avaliar, Próximos Passos. É um framework iterativo de 5 etapas projetado para melhorar rascunhos existentes por meio de ciclos de revisão estruturados.' } },
          { '@type': 'Question', name: 'Como o RISEN difere do CO-STAR ou CRAFT?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR e CRAFT são frameworks de geração — eles ajudam você a criar primeiros rascunhos. RISEN é um framework de refinamento — ajuda você a melhorar material existente por meio de iterações rastreadas. Use frameworks de geração para criar e depois mude para o RISEN para refinar.' } },
          { '@type': 'Question', name: 'Quando devo usar o RISEN em vez de outros frameworks?', acceptedAnswer: { '@type': 'Answer', text: 'Use o RISEN quando você já tem um rascunho e quer melhoria controlada. Use CO-STAR para geração geral de primeiro rascunho, CRAFT para conteúdo criativo, RTF para especificações estruturadas e TRACE para entender o raciocínio do modelo.' } },
          { '@type': 'Question', name: 'Quantos ciclos RISEN preciso?', acceptedAnswer: { '@type': 'Answer', text: 'Tipicamente 2-4 ciclos. Pare quando as pontuações de Avaliar estabilizarem e as sugestões de Próximos Passos se tornarem pequenos ajustes em vez de melhorias substanciais.' } },
          { '@type': 'Question', name: 'Posso usar o RISEN com modelos locais?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O RISEN funciona com qualquer LLM que siga instruções — incluindo modelos locais via Ollama ou LM Studio. Modelos maiores (13B+) gerenciam melhor a estrutura multi-etapa.' } },
          { '@type': 'Question', name: 'O que torna a etapa Inspecionar especial?', acceptedAnswer: { '@type': 'Answer', text: 'A etapa Inspecionar obriga o modelo a listar cada mudança específica que fez, criando uma trilha de auditoria. Você pode ver exatamente o que mudou entre versões e julgar se cada mudança melhorou o output.' } },
          { '@type': 'Question', name: 'Posso combinar o RISEN com testes multi-modelo?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Use o PromptQuorum para enviar o mesmo ciclo RISEN ao GPT-5.5, Claude 4.6 Sonnet e Gemini 2.5 Pro simultaneamente. Compare quais refinamentos do modelo melhor atendem aos seus requisitos.' } },
          { '@type': 'Question', name: 'O RISEN adiciona sobrecarga no custo de tokens?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Cada ciclo RISEN gera 2-5× mais tokens de output do que um prompt single-pass. Use o RISEN seletivamente em tarefas de alto risco. Para edições rápidas, prefira prompts de uma única etapa.' } },
        ],
      },

      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Comparação CoT vs Single-Pass vs RISEN',
        numberOfItems: 7,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Estrutura', description: 'CoT: Caminho linear único. Single-Pass: Uma geração. RISEN: Loop iterativo de 5 etapas.' },
          { '@type': 'ListItem', position: 2, name: 'Ação principal', description: 'CoT: Raciocinar e depois responder. Single-Pass: Gerar. RISEN: Refinar → Inspecionar → Resumir → Avaliar → Próximos Passos → repetir.' },
          { '@type': 'ListItem', position: 3, name: 'Trilha de auditoria', description: 'CoT: Sem rastreamento de mudanças. Single-Pass: Nenhuma. RISEN: Sim — Inspecionar documenta cada mudança.' },
          { '@type': 'ListItem', position: 4, name: 'Melhor para', description: 'CoT: Matemática e lógica. Single-Pass: Tarefas rápidas. RISEN: Melhoria iterativa e revisão em equipe.' },
          { '@type': 'ListItem', position: 5, name: 'Custo em tokens', description: 'CoT: 1.5-2×. Single-Pass: 1× baseline. RISEN: 2-5× por ciclo.' },
          { '@type': 'ListItem', position: 6, name: 'Múltiplos prompts?', description: 'CoT: Não. Single-Pass: Não. RISEN: Pode ser um prompt longo ou 5 prompts sequenciais.' },
          { '@type': 'ListItem', position: 7, name: 'Comparação de modelos', description: 'CoT: Não. Single-Pass: Não. RISEN: Sim — testes paralelos em GPT, Claude, Gemini via PromptQuorum.' },
        ],
      },
    },

    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Framework RISEN : Refine, Inspect, Summarize, Evaluate, Next Steps (2026)',
      intro: 'Le Framework RISEN est une structure itérative en 5 étapes pour améliorer systématiquement les résultats de l\'IA via des cycles de révision structurés. Au lieu d\'accepter le premier brouillon ou de tout réécrire, utilisez RISEN pour une amélioration contrôlée avec traçabilité intégrale. Chaque étape a un objectif distinct : Refine améliore le brouillon, Inspect documente chaque changement, Summarize explique la nouvelle version, Evaluate l\'évalue contre des critères, et Next Steps recommande des améliorations futures. RISEN transforme « améliorez ceci » en workflow transparent et reproductible.',
      leadAnswerBlock: '**RISEN est une boucle itérative en 5 étapes : Refine améliore le brouillon, Inspect liste chaque changement avec justification, Summarize explique la nouvelle version, Evaluate la note selon des critères (échelle 1–5), et Next Steps recommande 3 améliorations ciblées pour le prochain cycle. Utilisez RISEN quand vous avez déjà un brouillon et souhaitez une amélioration contrôlée et traçable avec audit trail. L\'étape Inspect force le modèle à documenter les changements — rendant les révisions traçables. En 2026, RISEN est intégré à PromptQuorum comme option multi-modèles, permettant de tester le même cycle RISEN sur GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro en parallèle.**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '13 min de lecture',
      seoTitle: 'Framework RISEN : 5 étapes pour affiner les prompts (2026)',
      metaDescription: 'RISEN améliore les prompts de façon itérative : Refine, Inspect, Summarize, Evaluate, Next Steps. Traçabilité intégrale, tests multi-modèles sur PromptQuorum.',
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
        'Fonctionne avec tous les modèles : GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro, modèles locaux via Ollama ou LM Studio.',
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
            'RISEN fonctionne avec tous les modèles : GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro, Ollama, LM Studio.',
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
            '**Le Framework RISEN est un pattern itératif conçu pour affiner les brouillons, analyses et plans via plusieurs cycles d\'amélioration.** Au lieu de traiter chaque prompt comme une tâche unique, vous guidez un modèle comme GPT-5.5, Claude 4.6 Sonnet ou Gemini 2.5 Pro via une boucle structurée et reproductible. Cela rend votre workflow moins essai-erreur et plus édition continue.',
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
              label: 'L\'étape Inspect est l\'arme secrète',
              text: 'L\'étape Inspect rend RISEN unique parmi les frameworks. La plupart des frameworks génèrent une sortie. RISEN force le modèle à documenter chaque changement spécifique, créant un audit trail permanent. Aucun autre framework n\'a cette responsabilité intégrée — c\'est pourquoi RISEN est essentiel pour les industries régulées, le travail académique et la collaboration d\'équipe où la traçabilité importe.',
            },
            {
              type: 'key-point',
              label: 'Pourquoi « Améliorez ceci » échoue',
              text: 'Les demandes d\'amélioration vagues comme « améliorez ceci » ou « rendez ceci mieux » ne donnent au modèle aucune contrainte. Sans critères explicites et structure, le modèle divague et produit des résultats incohérents. RISEN fonctionne car chaque étape a une sortie spécifique et nommée avec des contraintes. La spécificité conduit à la qualité.',
            },
            {
              type: 'warning',
              label: 'Quand NE PAS utiliser RISEN',
              text: 'N\'utilisez pas RISEN pour la génération de brouillon initial. RISEN nécessite du matériel existant à affiner. Si vous devez créer quelque chose à partir de zéro, utilisez d\'abord CO-STAR, CRAFT ou Single Step. Puis basculez à RISEN pour l\'amélioration itérative. Utiliser RISEN sur du matériel inexistant gaspille des tokens et produit une sortie Inspect sans sens.',
            },
            {
              type: 'pro-tip',
              label: 'Le flux de travail à deux frameworks',
              text: 'Le pattern optimal : Utilisez CO-STAR ou CRAFT pour générer le brouillon initial. Puis basculez à RISEN pour l\'amélioration itérative et l\'auto-critique. Cette séparation empêche le modèle de confondre deux tâches cognitives fondamentalement différentes — « créer » et « améliorer ». Chaque framework excelle dans sa phase spécifique.',
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
              fix: 'Utilisez PromptQuorum envoyant même cycle RISEN à GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro parallèle. Comparez approches.',
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
            'Envoyer même instructions RISEN-basées à modèles multiples — GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro — parallèle et comparer affinages.',
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
              a: 'Oui. Utilisez PromptQuorum envoyant même cycle RISEN à GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro simultanément. Comparez améliorations, critiques, suggestions.',
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
            { title: 'Chain-of-Thought Prompting', url: '/fr/prompt-engineering/chain-of-thought-prompting' },
            { title: 'Framework CO-STAR', url: '/fr/prompt-engineering/co-star-framework' },
            { title: 'Framework CRAFT', url: '/fr/prompt-engineering/craft-framework' },
            { title: 'Framework TRACE', url: '/fr/prompt-engineering/trace-framework' },
            { title: 'Quel Framework Prompt Utiliser?', url: '/fr/prompt-engineering/which-prompt-framework-should-you-use' },
            { title: 'Construisez Votre Propre Framework Prompt', url: '/fr/prompt-engineering/build-your-own-prompt-framework' },
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
        'url': 'https://www.promptquorum.com/fr/prompt-engineering/risen-framework',
        keywords: ['Framework RISEN', 'prompting itératif', 'raffinement prompts', 'ingénierie prompts', 'PromptQuorum', 'GPT-5.5', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro'],
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
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', 'name': 'Puis-je combiner RISEN avec tests multi-modèles?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Utilisez PromptQuorum envoyant même cycle RISEN à GPT-5.5, Claude 4.6 Sonnet, Gemini 2.5 Pro simultanément. Comparez améliorations et suggestions.' } },
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
      leadAnswerBlock: '**RISENは5段階の反復ループです：Refineはドラフトを改善し、Inspectは各変更を正当化を含めてリストアップし、Summarizeは新バージョンを説明し、Evaluateは基準に対して評価（1～5スケール）し、Next Stepsは次サイクルの3つの焦点を絞った改善を推奨します。既にドラフトがあり、制御された追跡可能な改善と監査証跡が必要な場合にRISENを使用します。Inspectステップは、モデルに変更を記録することを強制します。2026年、RISENはPromptQuorumにマルチモデルディスパッチオプションとして統合され、同じRISENサイクルをGPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Proで並行してテストして改善アプローチを比較できます。**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      readTime: '13分で読める',
      seoTitle: 'RISENフレームワーク：Refine、Inspect、Summarize、Evaluate（2026年）',
      metaDescription: 'RISENフレームワークで反復的にプロンプト改善：改良、検査、要約、評価、次のステップ。PromptQuorumでGPT、Claude、Geminを同時テスト可能。',
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
        'すべてのモデルで動作：GPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Pro、OllamaやLM Studioの地元モデル',
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
            'すべてのモデルで動作：GPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Pro、Ollama、LM Studio',
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
            '**RISENフレームワークは、複数改善サイクルを通じてドラフト、分析、計画を改善する反復パターンです。** 各プロンプトを1回限りの作業ではなく、GPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Proなどのモデルを構造化された再現可能ループで導きます。これにより、ワークフローは試行錯誤よりも継続的編集に見えます。',
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
              label: 'Inspectステップは秘密兵器',
              text: 'Inspectステップはフレームワーク間でRISENを独特にする理由です。ほとんどのフレームワークは出力を生成します。RISENはモデルに具体的な各変更を文書化し、永続的な監査証跡を作成するよう強制します。他のフレームワークにはこの組み込み責任がありません — これが規制産業、学術研究、トレーサビリティが重要なチーム協業にRISENが不可欠な理由です。',
            },
            {
              type: 'key-point',
              label: '「これを改善して」が失敗する理由',
              text: '「これを改善して」や「改善して」のような曖昧な改善要求は、モデルに制約をゼロ与えます。明示的な基準と構造がないと、モデルはさまようり、矛盾した結果を生成します。RISENが機能するのは、各ステップが制約付きの特定の名前付き出力を持つためです。具体性が品質を駆動します。',
            },
            {
              type: 'warning',
              label: 'RISENを使ってはいけない場合',
              text: '初期ドラフト生成にRISENを使わないでください。RISENは改善する既存資料が必要です。ゼロから何か作成する必要がある場合は、最初にCO-STAR、CRAFT、またはSingle Stepを使用してください。その後、反復的改善のためRISENに切り替えます。存在しない資料でRISENを使用することはトークンを浪費し、無意味なInspect出力を生成します。',
            },
            {
              type: 'pro-tip',
              label: '2つのフレームワーク戦略',
              text: '最適なパターン：CO-STARまたはCRAFTを使用して初期ドラフトを生成します。その後、反復的改善と自己批評のためRISENに切り替えます。この分離は、モデルが2つの根本的に異なる認知タスク——「作成」と「改善」——を混在させるのを防ぎます。各フレームワークは特定のフェーズで優れています。',
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
              fix: 'PromptQuorumで同じRISENをGPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Proに並行実行。比較',
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
            '同じRISEN命令を複数モデル — GPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Pro — 並行送信、各改善方法を比較',
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
              a: 'はい。PromptQuorumで同じRISENをGPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Proに同時送信。改善方法を比較。',
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
            { title: 'Chain-of-Thought Prompting', url: '/ja/prompt-engineering/chain-of-thought-prompting' },
            { title: 'CO-STARフレームワーク', url: '/ja/prompt-engineering/co-star-framework' },
            { title: 'CRAFTフレームワーク', url: '/ja/prompt-engineering/craft-framework' },
            { title: 'TRACEフレームワーク', url: '/ja/prompt-engineering/trace-framework' },
            { title: 'どのプロンプトフレームワークを使いますか？', url: '/ja/prompt-engineering/which-prompt-framework-should-you-use' },
            { title: '独自プロンプトフレームワークを構築する', url: '/ja/prompt-engineering/build-your-own-prompt-framework' },
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
        'url': 'https://www.promptquorum.com/ja/prompt-engineering/risen-framework',
        keywords: ['RISENフレームワーク', '反復的プロンプティング', 'プロンプト改善', 'プロンプト・エンジニアリング', 'PromptQuorum', 'GPT-5.5', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro'],
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
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
          { '@type': 'Question', 'name': 'RISENをマルチモデルテストと組み合わせられますか？', 'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。PromptQuorumで同じRISENをGPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Proに同時送信。改善方法を比較。' } },
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
      leadAnswerBlock: '**RISEN是一个5阶段的迭代优化框架：Refine改进草稿，Inspect列举每一个变更及其理由，Summarize解释新版本的作用，Evaluate按标准打分（1-5分），Next Steps推荐下一阶段的3个重点改进。在已经有初稿的时候使用RISEN，通过可跟踪的改进获得受控的、可审计的升级。Inspect步骤的独特之处在于强制模型记录所有变更——让修订变成可追踪的。在2026年，RISEN内置于PromptQuorum中，成为多模型分发选项，让您可以在GPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Pro上同时测试RISEN循环，比较不同的改进方法。**',
      publishDate: '2026-03-24',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04 — RISEN框架原始论文（Yao等，2023），PromptQuorum原生RISEN实现',
      readTime: '阅读约13分钟',
      seoTitle: 'RISEN框架2026：5步迭代优化提示词的完整方案',
      metaDescription: 'RISEN通过5个步骤迭代优化提示词：精化、检查、总结、评估、后续步骤。支持与PromptQuorum多模型同时测试。',
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
        '适用于任何模型：GPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Pro，以及通过Ollama或LM Studio的本地模型。13B以上的大模型能更好地处理多步结构；7B模型可能需要分离步骤。',
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
            'RISEN适用于任何模型：GPT-5.5、Claude 4.6 Sonnet、Gemini 2.5 Pro、Ollama、LM Studio。13B以上的大模型更好地处理多步结构。',
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
            '**RISEN框架是一个迭代Prompt模式，通过多个改进循环来改进现有的草稿、分析和计划。** 与其把每个Prompt当作一次性任务，不如引导GPT-5.5、Claude 4.6 Sonnet或Gemini 2.5 Pro这样的模型通过一个结构化、可重复的改进循环。这使得您的工作流程更像持续编辑而不是随机试错。',
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
              badLabel: '❌ 糟糕 — 模糊且无Inspect',
              bad: 'Please improve this article.',
              goodLabel: '✅ 优秀 — 完整的RISEN循环',
              good: `请按照RISEN框架改进这篇文章。

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
          numberedItems: [
            '**陈述问题和预期成果。** "您是[角色]。您的任务是使用RISEN过程改进[材料类型]。"',
            '**明确定义Refine目标。** "改进[具体标准：清晰度、准确性、简洁性、语调、受众对齐]。目标[长度或格式]。"',
            '**要求具体的Inspect输出。** "列出5-7个具体的编辑。对每一个，说明您更改了什么以及为什么。"',
            '**指定Evaluate标准。** "在[3-5个命名维度，如清晰度、准确性、说服力]上评分（1-5）。用一句话解释每个评分。"',
            '**要求可行的Next Steps。** "建议3个下一次迭代的重点改进。"',
          ],
        },

        calloutBoxes: {
          title: '关键提示',
          id: 'key-callouts',
          callouts: [
            {
              type: 'pro-tip',
              label: 'Inspect步骤是秘密武器',
              text: 'Inspect步骤正是使RISEN在框架中独特的原因。大多数框架生成输出。RISEN强制模型记录每个具体的变更，创建永久的审计记录。没有其他框架有这种内置的责任制——这就是为什么RISEN对受管制行业、学术工作和需要可追溯性的团队协作至关重要。',
            },
            {
              type: 'key-point',
              label: '为什么"改进这个"会失败',
              text: '像"改进这个"或"把这个改好"这样含糊的改进请求给模型零约束。没有明确的标准和结构，模型会漫无目的，产生不一致的结果。RISEN之所以有效，是因为每个步骤都有特定的、有名字的、受约束的输出。具体性驱动质量。',
            },
            {
              type: 'warning',
              label: '何时不应使用RISEN',
              text: '不要在初期草稿生成中使用RISEN。RISEN需要现有的材料来改进。如果您需要从零开始创建东西，请先使用CO-STAR、CRAFT或Single Step。然后切换到RISEN进行迭代改进。在不存在的材料上使用RISEN会浪费代币并产生无意义的Inspect输出。',
            },
            {
              type: 'pro-tip',
              label: '两框架工作流',
              text: '最优模式：使用CO-STAR或CRAFT生成初期草稿。然后切换到RISEN进行迭代精化和自我批评。这种分离防止了模型将两个根本不同的认知任务——"创建"和"改进"——混在一起。每个框架在其特定的阶段都表现出色。',
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
            'PromptQuorum把RISEN变成了一个一级公民功能。您可以写一个RISEN循环，把它发送给GPT-5.5、Claude 4.6 Sonnet和Gemini 2.5 Pro同时，比较它们各自的改进方法。这让您可以看到不同的模型如何以不同的方式处理相同的改进任务。',
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

        faqSection: {
          title: '常见问题',
          id: 'faq',
          faqs: [
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
            a: '是的。在PromptQuorum中，将同一个RISEN循环同时发送给GPT-5.5、Claude 4.6 Sonnet和Gemini 2.5 Pro。比较它们各自如何改进。',
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
          id: 'related-reading',
          items: [
            { title: '链式思维提示词', url: '/zh/prompt-engineering/chain-of-thought-prompting' },
            { title: '什么是Prompt工程？', url: '/zh/prompt-engineering/what-is-prompt-engineering' },
            { title: '少样本Prompt', url: '/zh/prompt-engineering/few-shot-prompting' },
            { title: '受限Prompt', url: '/zh/prompt-engineering/constrained-prompting' },
            { title: 'GPT、Claude还是Gemini？选择合适的模型', url: '/zh/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model' },
            { title: 'Prompt注入和安全', url: '/zh/prompt-engineering/prompt-injection-and-security' },
          ],
        },

        sources: {
          title: '信息来源',
          id: 'sources',
          items: [
            'Yao, S., Yu, D., Zhao, J., Shafran, I., Griffiths, T. L., Cao, Y., & Narasimhan, K. (2023). "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." arXiv:2305.10601',
            'Wei, J., Wang, X., Schuurmans, D., Bosma, M., Xia, F., Chi, E., ... & Zhou, D. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS 2022. arXiv:2201.11903',
            'Anthropic. (2026). "Prompt Engineering Guide." https://www.anthropic.com',
          ],
        },
      },

      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'RISEN框架：Refine、Inspect、Summarize、Evaluate、Next Steps（2026）',
        description: 'RISEN框架用于迭代优化Prompt：改进草稿、追踪变更、总结结果、评估标准、规划下一步。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        'url': 'https://www.promptquorum.com/zh/prompt-engineering/risen-framework',
        keywords: ['RISEN框架', '迭代式提示词', '提示词优化', '提示词工程', 'PromptQuorum', 'GPT-5.5', 'Claude 4.6 Sonnet', 'Gemini 2.5 Pro'],
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
          { '@type': 'Question', 'name': '我可以把RISEN与多模型测试组合吗？', 'acceptedAnswer': { '@type': 'Answer', 'text': '是的。在PromptQuorum中，将同一个RISEN循环同时发送给GPT-5.5、Claude 4.6 Sonnet和Gemini 2.5 Pro。比较它们各自如何改进。' } },
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
