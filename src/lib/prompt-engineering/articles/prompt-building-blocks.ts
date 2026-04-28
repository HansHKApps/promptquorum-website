// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-building-blocks
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'The 5 Building Blocks Every Prompt Needs',
      seoTitle: '5 Prompt Building Blocks: Structure Any AI Prompt (2026)',
      intro: 'The 5 building blocks every prompt needs: Role & Context, Task, Input & Examples, Constraints, and Output Format. How to use each one.',
      metaDescription: 'Role, Task, Examples, Constraints, and Output Format — 5 building blocks that explain every reliable AI output. Miss one, and results become inconsistent.',
      publishDate: '2026-03-01',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Structure',
      audience: 'Developers and non-technical users writing AI prompts',
      dateModified: '2026-04-28',
      next_refresh_due: '2026-09-01',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Are the 5 Building Blocks?', anchor: '#what-are-the-5-building-blocks' },
        { label: 'Why Do These 5 Blocks Matter?', anchor: '#why-building-blocks-matter' },
        { label: 'Block 1: Role & Context', anchor: '#block-1-role-context' },
        { label: 'Block 2: Task / Instruction', anchor: '#block-2-task-instruction' },
        { label: 'Block 3: Input & Examples', anchor: '#block-3-input-examples' },
        { label: 'Block 4: Constraints', anchor: '#block-4-constraints' },
        { label: 'Block 5: Output Format', anchor: '#block-5-output-format' },
        { label: 'Putting the 5 Blocks Together', anchor: '#prompt-template' },
        { label: 'Frameworks & Tools Mapping', anchor: '#frameworks-and-tools' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'How to Build a Prompt (Step by Step)', anchor: '#how-to-build-a-prompt' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Frequently Asked Questions', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The 5 Building Blocks Every Prompt Needs',
        description: 'Master the 5 building blocks every prompt needs: Role & Context, Task, Input & Examples, Constraints, and Output Format. With these five components, any AI prompt becomes reliable and repeatable.',
        datePublished: '2026-03-01',
        dateModified: '2026-04-28',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'en',
        proficiencyLevel: 'Beginner',
        keywords: ['prompt structure', 'prompt building blocks', 'role and context', 'output format', 'prompt constraints', 'few-shot examples', 'prompt engineering', 'GPT-4o', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-4o' },
          { '@type': 'Thing', name: 'Anthropic Claude' },
          { '@type': 'Thing', name: 'Google Gemini' },
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'CO-STAR framework' },
          { '@type': 'Thing', name: 'CRAFT framework' },
        ],
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'AI Prompt Structure' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do I really need all 5 blocks in every prompt?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Simple, unambiguous tasks often need only a Task / Instruction and an Output Format. Add Role & Context when the domain or audience matters. Add Constraints when failure modes are costly. Add Examples when format precision is critical. Start minimal and add blocks only when the output does not meet your standard.' },
          },
          {
            '@type': 'Question',
            name: 'Is Role more important than Context, or the other way around?',
            acceptedAnswer: { '@type': 'Answer', text: 'They work as a pair — neither is sufficient alone. Role without context produces generic expert-mode output. Context without role produces situationally aware but tonally inconsistent output. For most tasks, one sentence combining both works well: "You are a [role] working with [audience] on [domain task]."' },
          },
          {
            '@type': 'Question',
            name: 'Can I keep prompts short and still include all 5 blocks?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Each block can be expressed in a single sentence. A complete five-block prompt can be under 100 words. Brevity is not the problem — vagueness is. A short, precise prompt with all five elements consistently outperforms a long, rambling one with none.' },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between Context and Examples?',
            acceptedAnswer: { '@type': 'Answer', text: 'Context describes the situation, domain, and audience — it is background information that frames the task. Examples are sample input/output pairs that show the model what a correct answer looks like. Context tells the model where it is; examples show it what to produce.' },
          },
          {
            '@type': 'Question',
            name: 'Where do constraints fit if I am using a framework like CRAFT or CO-STAR?',
            acceptedAnswer: { '@type': 'Answer', text: 'Every major framework has a field that maps to constraints — "Restrictions" in CRAFT, "Tone & Style" in CO-STAR, "Constraints" in SPECS. If your framework does not have an explicit constraints field, add your constraints at the end as a separate "Do not" section — all models handle this reliably.' },
          },
          {
            '@type': 'Question',
            name: 'Does output format matter if I am just asking a simple question?',
            acceptedAnswer: { '@type': 'Answer', text: 'For conversational questions, specifying format is optional. For any output that will be used downstream — pasted into a document, parsed by code, published, or reused across team members — specifying the format is essential. It is the difference between getting a result and getting a usable result.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'en',
        name: 'How to Build a Prompt Using the 5 Building Blocks',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Set Role & Context', text: 'State who the model is and who it is working for. One sentence: "You are a [role] helping [audience]."' },
          { '@type': 'HowToStep', position: 2, name: 'Write the Task / Instruction', text: 'State the exact action you want the model to take using a verb. "Summarize", "Classify", "Translate", "Generate".' },
          { '@type': 'HowToStep', position: 3, name: 'Add Input & Examples', text: 'Insert the data or content the model will work on. Add one or two examples if the format must be precise.' },
          { '@type': 'HowToStep', position: 4, name: 'Set Constraints', text: 'List what the model must not do, length limits, and any rules for the output.' },
          { '@type': 'HowToStep', position: 5, name: 'Specify Output Format', text: 'Define the exact shape of the output: JSON, bullet list, table, paragraph, numbered steps.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'en',
        name: '5 Building Blocks Every AI Prompt Needs',
        description: 'The five structural components that every reliable AI prompt contains: Role, Task, Input & Examples, Constraints, and Output Format.',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Block 1: Role & Context', description: 'Tells the model who it is and who it is working for. Sets domain expertise and audience awareness.' },
          { '@type': 'ListItem', position: 2, name: 'Block 2: Task / Instruction', description: 'The explicit statement of what the model must do, using a clear action verb.' },
          { '@type': 'ListItem', position: 3, name: 'Block 3: Input & Examples', description: 'The data or content the model works on, plus optional examples showing what correct output looks like.' },
          { '@type': 'ListItem', position: 4, name: 'Block 4: Constraints', description: 'Rules the model must follow — length limits, forbidden content, style restrictions.' },
          { '@type': 'ListItem', position: 5, name: 'Block 5: Output Format', description: 'The exact structure the output must take: JSON, bullet list, table, prose paragraph, or numbered steps.' },
        ],
      },
      sections: {

        definition: {
          id: 'what-are-the-5-building-blocks',
          title: 'What Are the 5 Building Blocks of a Prompt?',
          content: [
            '**The 5 building blocks every prompt needs are: Role & Context, Task / Instruction, Input & Examples, Constraints, and Output Format.** These five components are the minimum structure that separates a reliable, repeatable prompt from a vague question that produces inconsistent results.',
            'Each block solves a different failure mode. Role & Context tells the model who it is and what situation it is in. Task / Instruction tells it exactly what to do. Input & Examples give it the raw material and teaching signal. Constraints set the rules. Output Format specifies the shape of the answer. Together, they leave the model with nothing left to guess.',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Role & Context: Tell the model who it is and what domain it is operating in',
            'Task / Instruction: State exactly what you want the model to produce — specific and testable',
            'Input & Examples: Provide the raw data and sample input/output pairs the model needs',
            'Constraints: Set the rules — what the model must and must not do',
            'Output Format: Specify the exact shape of the answer — JSON, bullets, table, or prose',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: 'Why Do These 5 Building Blocks Matter?',
          content: [
            'The five-block model reflects the converged consensus across prompt engineering guidance from OpenAI, Google, Anthropic, and independent practitioners. Role, instructions, examples, constraints, and output format appear — under different names — in every major framework published since 2023. This is not coincidence: it is the minimum information a probabilistic model needs to produce a useful, consistent result.',
            'The business case is straightforward. Missing role and context produces generic answers that need rewriting. Missing constraints increases hallucination risk and off-brand output. Missing output format means results that cannot be parsed or copy-pasted directly. The 5-block model addresses all three failure modes at once, and applies equally to GPT-4-class models, Claude, Gemini, and locally-run LLMs.',
          ],
        },

        block1: {
          id: 'block-1-role-context',
          title: 'What Does the Role & Context Block Do?',
          content: [
            '**Role** tells the model what persona or expertise to adopt. **Context** tells it the situation, domain, and audience it is operating in. They are grouped together because they work as a pair — role is who the model is, and context is the environment that shapes what "good" means for that task.',
            'When you omit role and context, the model answers from a generic perspective — useful to no one in particular. With them, the same model becomes a senior tax advisor answering a question about VAT returns, a junior copywriter writing for a 19-year-old audience, or a data analyst summarising a quarterly report. The output calibrates to your actual situation.',
          ],
          items: [
            '**Specify the domain:** "You are a B2B SaaS copywriter" is more useful than "You are a writer"',
            '**Include the audience:** "Explain this to a non-technical CFO" constrains vocabulary and level of detail',
            '**Anchor the expertise level:** "Act as a senior security engineer" produces different output from "Act as a security engineer"',
            '**State the situation when it matters:** "You are reviewing a first draft" versus "You are writing from scratch" changes the model\'s approach',
          ],
        },

        block1Link: {
          content: 'To understand how role prompting evolved as models became more capable of following instructions, see [How Prompt Engineering Evolved](/prompt-engineering/how-prompt-engineering-evolved).',
        },

        block2: {
          id: 'block-2-task-instruction',
          title: 'What Is the Task / Instruction Block?',
          content: [
            '**The Task / Instruction block is the explicit statement of what you want the model to do.** It is the most important block — every other block supports this one. A clear, specific, testable instruction reduces ambiguity to near-zero. A vague instruction is the single biggest cause of poor AI output across all models and use cases.',
            'Current best-practice guidance emphasises making the task actionable and observable: use a verb, state the deliverable, and where possible describe a success criterion. "Write a summary" is a task. "Summarise the following article in 3 bullet points, each under 20 words" is a task with a testable output. The difference in output quality is significant.',
          ],
          items: [
            '❌ Weak: "Write something about this topic"',
            '✅ Strong: "Write a 150-word LinkedIn post about the benefits of prompt engineering for non-technical managers"',
            '❌ Weak: "Analyse this data"',
            '✅ Strong: "Identify the top 3 trends in this dataset and rank them by revenue impact, highest first"',
          ],
        },

        block2Link: {
          content: 'Instructions interact directly with whether you provide examples — see [Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/prompt-engineering/zero-shot-vs-few-shot) for when each approach works best.',
        },

        block3: {
          id: 'block-3-input-examples',
          title: 'How Do Input and Examples Improve Accuracy?',
          content: [
            '**Input** is the actual data, text, or material the model needs to work on. **Examples** are sample input/output pairs that demonstrate what a correct response looks like. These are separate concerns: input is the raw material for the current task, examples are the teaching signal that shapes how the model performs it.',
            'Including 1–3 examples (few-shot prompting) is the single most reliable technique for locking in output format and tone. When you show the model what a good answer looks like, it matches the pattern rather than inferring it from the task description alone. This matters most for specialised formats, consistent tone, and structured outputs where precision is required.',
          ],
          items: [
            '**When to add examples:** Specialised formats, consistent tone requirements, structured outputs, domain-specific vocabulary',
            '**When to stay zero-shot:** Simple factual questions, broad exploration, when you actively want the model\'s default response style',
            '**Vary your examples:** Identical examples teach only one pattern — cover the real range of inputs you expect',
            '**Use realistic data:** Real samples outperform idealised ones — the model learns from what you actually show it',
          ],
        },

        block3Link: {
          content: 'For a full breakdown of when to use examples and when to omit them, see [Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/prompt-engineering/zero-shot-vs-few-shot).',
        },

        block4: {
          id: 'block-4-constraints',
          title: 'What Are Constraints and Why Do Prompts Need Them?',
          content: [
            '**Constraints are the rules the model must follow: what it must do and what it must not do.** They include length limits, forbidden topics or phrases, required sources, brand voice rules, safety boundaries, and format restrictions. Constraints are the most commonly omitted block — and their absence is the primary cause of hallucinated facts, off-brand language, and outputs that arrive in the wrong format.',
            'Adding one well-scoped constraint is often the highest-leverage change you can make to an existing prompt. "Do not make up statistics" cuts hallucination risk sharply. "Never exceed 100 words" forces concision. "Only use information from the text provided" grounds the output in the source material and eliminates fabrication entirely for that task.',
          ],
          items: [
            '**Length constraints:** "Maximum 150 words", "No more than 5 bullet points"',
            '**Source constraints:** "Use only facts from the attached document", "Do not cite sources you cannot verify"',
            '**Tone and voice constraints:** "Write in a formal, third-person tone — no contractions, no colloquialisms"',
            '**Forbidden content:** "Do not mention competitor products", "Do not speculate beyond what the data shows"',
            '**Safety constraints:** "If the question cannot be answered from the provided context, say so — do not invent an answer"',
          ],
        },

        block4Links: {
          content: 'For the technique of using exclusions to shape output, see [Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting). For why unconstrained prompts hallucinate more, see [AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up).',
        },

        block5: {
          id: 'block-5-output-format',
          title: 'How Does Output Format Control What You Get?',
          content: [
            '**Output Format specifies the exact shape of the answer the model should produce.** This is the block that determines whether the output is directly usable or requires reformatting before it is useful. For automated pipelines, an unspecified output format means brittle, inconsistent parsing. For GEO, a structured output is more likely to be cited verbatim by AI search engines, because structured answers are easier to extract programmatically.',
            'The output format block can specify the file format (JSON, Markdown, CSV), the structure (table, bullet list, numbered steps), the length, and the labelling of sections. The more precisely you specify it, the less editing the output requires.',
          ],
          items: [
            '**JSON:** "Return the result as a JSON object with keys: title, summary, tags"',
            '**Markdown bullets:** "List each finding as a bullet point starting with a bold term, followed by one sentence of explanation"',
            '**Table:** "Format the comparison as a Markdown table with columns: Feature, Option A, Option B"',
            '**Structured prose:** "Structure the response with a heading for each major point and a maximum of 3 sentences per section"',
          ],
        },

        block5Link: {
          content: 'For a full guide to JSON mode and structured output across different models, see [Structured Output & JSON Mode: Get AI to Return Usable Data](/prompt-engineering/structured-output-and-json-mode).',
        },

        template: {
          id: 'prompt-template',
          title: 'Putting the 5 Blocks Together: A Simple Template',
          content: 'The template below shows all 5 blocks assembled in order for a single domain-neutral task. Each part is labelled so you can see exactly where each block begins and ends. Replace the content in each section to adapt it to any domain.',
          items: [
            '**[Role & Context]** You are a senior business analyst. The audience is a non-technical executive team reviewing a quarterly operations report.',
            '**[Task / Instruction]** Summarise the key findings from the report below. Focus on performance against targets, identify the two largest risks, and recommend one corrective action for each.',
            '**[Input]** [Paste the report text here]',
            '**[Constraints]** Use only information from the report. Do not speculate. Do not exceed 200 words in total. Write in plain language — no jargon.',
            '**[Output Format]** Return the response as three sections: "Key Findings" (3 bullet points), "Top Risks" (2 bullet points), "Recommended Actions" (2 bullet points, one per risk).',
          ],
        },

        templateNote: {
          content: 'This template works on GPT-4o, Claude, Gemini, and local LLMs via Ollama or LM Studio. The block order is a recommendation, not a rigid rule — but placing Role & Context first and Output Format last is the most common and reliable arrangement across all major models.',
        },

        frameworks: {
          id: 'frameworks-and-tools',
          title: 'How These Blocks Map to Frameworks and Tools',
          content: [
            'Popular prompt engineering frameworks are opinionated ways to arrange the same five building blocks under different names and in different orders. CRAFT, CO-STAR, and SPECS all map directly to this five-block model. Understanding the blocks first means you can apply any framework without memorising its specific terminology from scratch.',
            'The table below shows how each building block maps to the corresponding field in three widely used frameworks:',
          ],
          columns: ['Building Block', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Building Block': 'Role & Context', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { 'Building Block': 'Task / Instruction', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { 'Building Block': 'Input & Examples', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { 'Building Block': 'Constraints', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { 'Building Block': 'Output Format', 'CRAFT': 'Format', 'CO-STAR': 'Response format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum includes 9 built-in frameworks that pre-fill these blocks in different configurations depending on the task type. For framework-specific guides, see [Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use), [CRAFT Framework](/prompt-engineering/craft-framework), and [CO-STAR Framework](/prompt-engineering/co-star-framework).',
        },

        mistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes with the 5 Blocks',
          items: [
            '**Missing role entirely:** The model answers from a generic perspective — specify domain and expertise level, even in one sentence',
            '**Vague context:** "Write for my audience" tells the model nothing — name the audience, their knowledge level, and what they will do with the output',
            '**Instruction that cannot be tested:** "Make it better" has no observable success criterion — replace with a specific, measurable task',
            '**No constraints on hallucination:** Without "use only provided information", the model fills gaps with plausible-sounding fabrications',
            '**Unspecified output format:** The model chooses its own structure — which changes between runs and breaks downstream processes',
            '**Merging everything into one paragraph:** Blocks mixed into a wall of text are harder for the model to parse — use line breaks or explicit labels for each block',
            '**Over-identical examples:** Three examples that are all the same teach only one pattern — vary them to cover the real range of inputs',
          ],
        },

        howToStart: {
          id: 'how-to-build-a-prompt',
          title: 'How to Build a Prompt Using the 5 Building Blocks',
          numberedItems: [
            '**Set Role & Context:** Open with who the model is and the domain it is operating in. Example: "You are a senior tax advisor helping a small business owner in Germany." Without this, the model answers from a generic perspective.',
            '**Write the Task / Instruction:** State exactly what you want produced — specific and testable. "Summarise the key VAT obligations in 200 words" is better than "tell me about VAT."',
            '**Add Input & Examples:** Provide the raw data and at least one example of the correct output format. A single well-chosen example reduces inconsistency more than any other single technique.',
            '**Define Constraints:** List what the model must not do, the length limit, and the tone rules. Example: "Do not give advice for jurisdictions outside Germany. Maximum 200 words. Formal tone."',
            '**Specify Output Format:** State the exact shape of the answer — JSON object, 3-bullet summary, table, or prose paragraph. Omitting this is the most common cause of unusable AI output.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: The Building Blocks of a Prompt',
          faqs: [
            {
              q: 'Do I really need all 5 blocks in every prompt?',
              a: 'No. Simple, unambiguous tasks often need only a Task / Instruction and an Output Format. Add Role & Context when the domain or audience matters. Add Constraints when failure modes are costly. Add Examples when format precision is critical. Start minimal and add blocks only when the output does not meet your standard.',
            },
            {
              q: 'Is Role more important than Context, or the other way around?',
              a: 'They work as a pair — neither is sufficient alone. Role without context produces generic expert-mode output. Context without role produces situationally aware but tonally inconsistent output. For most tasks, one sentence combining both works well: "You are a [role] working with [audience] on [domain task]."',
            },
            {
              q: 'Can I keep prompts short and still include all 5 blocks?',
              a: 'Yes. Each block can be expressed in a single sentence. A complete five-block prompt can be under 100 words. Brevity is not the problem — vagueness is. A short, precise prompt with all five elements consistently outperforms a long, rambling one with none.',
            },
            {
              q: 'What is the difference between Context and Examples?',
              a: 'Context describes the situation, domain, and audience — it is background information that frames the task. Examples are sample input/output pairs that show the model what a correct answer looks like. Context tells the model where it is; examples show it what to produce. Both are useful, but they serve completely different purposes.',
            },
            {
              q: 'Where do constraints fit if I am using a framework like CRAFT or CO-STAR?',
              a: 'Every major framework has a field that maps to constraints — "Restrictions" in CRAFT, "Tone & Style" in CO-STAR, "Constraints" in SPECS. If your framework does not have an explicit constraints field, add your constraints at the end as a separate "Do not" section — all models handle this reliably.',
            },
            {
              q: 'Does output format matter if I am just asking a simple question?',
              a: 'For conversational questions, specifying format is optional. For any output that will be used downstream — pasted into a document, parsed by code, published, or reused across team members — specifying the format is essential. It is the difference between getting a result and getting a usable result.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[How Prompt Engineering Evolved](/prompt-engineering/how-prompt-engineering-evolved) — From early instruction-following models to today\'s reasoning-capable systems: how prompting techniques co-evolved with model capabilities.',
            '[Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) — When to use examples and when to omit them: selecting the right prompting approach for your task.',
            '[Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting) — Constraints in action: how exclusions shape output more reliably than inclusions.',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Why constraints and examples matter: the root causes of hallucination and evidence-based defenses.',
            '[Structured Output & JSON Mode](/prompt-engineering/structured-output-and-json-mode) — Specifying output format precisely: JSON mode, markdown tables, and other structured approaches across models.',
            '[Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use) — Comparing CRAFT, CO-STAR, SPECS, and others: choosing a framework aligned to your use case.',
          ],
        },

        sources: {
          id: 'sources',
          title: 'Sources & Further Reading',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Official prompt engineering guidance from OpenAI, including best practices for role-based and structured prompts.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — Security implications of unstructured prompts and recommendations for constraints.',
            '[Attention Is All You Need — Vaswani et al., 2017](https://arxiv.org/abs/1706.03762) — Foundational transformer architecture that underlies all modern LLMs and their attention-based reasoning.',
          ],
        },

      },
    },

    de: {
      theme: 'Fundamentals',
      title: 'Die 5 Bausteine jedes Prompts',
      seoTitle: 'Die 5 Bausteine, die jeder Prompt braucht 2026',
      intro: 'Die 5 Bausteine jedes Prompts: Rolle & Kontext, Aufgabe, Eingabe & Beispiele, Einschränkungen und Ausgabeformat.',
      metaDescription: 'Die 5 unverzichtbaren Komponenten eines guten Prompts: Rolle & Kontext, Aufgabe, Eingabe & Beispiele, Beschränkungen, Ausgabeformat. Bewährte Struktur.',
      publishDate: '2026-03-01',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Die 5 Bausteine jedes Prompts',
        description: 'Die 5 Bausteine jedes Prompts: Rolle & Kontext, Aufgabe, Eingabe & Beispiele, Einschränkungen und Ausgabeformat. Mit diesen fünf Komponenten wird jeder KI-Prompt zuverlässig und wiederholbar.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs?lang=de',
        inLanguage: 'de',
        keywords: ['Prompt-Struktur', 'Prompt-Bausteine', 'Rolle und Kontext', 'Ausgabeformat', 'Prompt-Einschränkungen', 'Few-Shot-Beispiele', 'Prompt Engineering', 'GPT-4o', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      sections: {
        definition: {
          title: 'Was sind die 5 Bausteine eines Prompts?',
          content: [
            '**Die 5 Bausteine, die jeder Prompt benötigt, sind: Rolle & Kontext, Aufgabe / Anweisung, Eingabe & Beispiele, Einschränkungen und Ausgabeformat.** Diese fünf Komponenten sind die Mindeststruktur, die einen zuverlässigen, wiederholbaren Prompt von einer vagen Frage unterscheidet, die inkonsistente Ergebnisse liefert.',
            'Jeder Baustein löst einen anderen Fehlertyp. Rolle & Kontext sagt dem Modell, wer es ist und in welcher Situation es sich befindet. Aufgabe / Anweisung sagt ihm genau, was zu tun ist. Eingabe & Beispiele geben ihm das Rohmaterial und das Lernmuster. Einschränkungen setzen die Regeln. Ausgabeformat legt die Form der Antwort fest. Zusammen lassen sie dem Modell nichts mehr zum Raten übrig.',
          ],
        },

        tldr: {
          title: 'Die wichtigsten Erkenntnisse',
          isTldr: true,
          items: [
            'Rolle & Kontext: Dem Modell sagen, wer es ist und in welchem Bereich es tätig ist',
            'Aufgabe / Anweisung: Genau angeben, was das Modell produzieren soll – spezifisch und überprüfbar',
            'Eingabe & Beispiele: Die Rohdaten und Beispiel-Eingabe/Ausgabe-Paare bereitstellen, die das Modell benötigt',
            'Einschränkungen: Die Regeln festlegen – was das Modell tun muss und was nicht',
            'Ausgabeformat: Die genaue Form der Antwort festlegen – JSON, Aufzählungspunkte, Tabelle oder Fließtext',
          ],
        },

        whyMatters: {
          title: 'Warum diese 5 Bausteine im Jahr 2026 wichtig sind',
          content: [
            'Das Fünf-Bausteine-Modell spiegelt den konvergierten Konsens aus Prompt-Engineering-Anleitungen von OpenAI, Google, Anthropic und unabhängigen Praktikern wider. Rolle, Anweisungen, Beispiele, Einschränkungen und Ausgabeformat erscheinen – unter verschiedenen Namen – in jedem wichtigen Framework, das seit 2023 veröffentlicht wurde. Das ist kein Zufall: Es sind die Mindestinformationen, die ein probabilistisches Modell benötigt, um ein nützliches, konsistentes Ergebnis zu liefern.',
            'Der geschäftliche Nutzen ist eindeutig. Fehlende Rolle und Kontext liefern generische Antworten, die umgeschrieben werden müssen. Fehlende Einschränkungen erhöhen das Halluzinationsrisiko und erzeugen markenfremde Ausgaben. Fehlendes Ausgabeformat bedeutet Ergebnisse, die nicht direkt verwendet oder kopiert werden können. Das 5-Bausteine-Modell adressiert alle drei Fehlertypen gleichzeitig und gilt gleichermaßen für GPT-4-Klasse-Modelle, Claude, Gemini und lokal betriebene LLMs.',
          ],
        },

        block1: {
          title: 'Baustein 1: Rolle & Kontext',
          content: [
            '**Rolle** sagt dem Modell, welche Persona oder Expertise es annehmen soll. **Kontext** teilt ihm die Situation, den Bereich und die Zielgruppe mit, in der es tätig ist. Sie werden zusammengefasst, weil sie als Paar funktionieren – Rolle ist, wer das Modell ist, und Kontext ist die Umgebung, die definiert, was „gut" für diese Aufgabe bedeutet.',
            'Wenn Rolle und Kontext weggelassen werden, antwortet das Modell aus einer generischen Perspektive – für niemanden im Besonderen nützlich. Mit ihnen wird dasselbe Modell zum erfahrenen Steuerberater, der eine Frage zu Umsatzsteuererklärungen beantwortet, zum Nachwuchs-Texter, der für eine 19-jährige Zielgruppe schreibt, oder zum Datenanalysten, der einen Quartalsbericht zusammenfasst. Die Ausgabe kalibriert sich auf die tatsächliche Situation.',
          ],
          items: [
            '**Den Bereich angeben:** „Du bist ein B2B-SaaS-Texter" ist nützlicher als „Du bist ein Autor"',
            '**Die Zielgruppe einbeziehen:** „Erkläre dies einem nicht-technischen CFO" schränkt Vokabular und Detailtiefe ein',
            '**Das Expertise-Level verankern:** „Agiere als erfahrener Sicherheitsingenieur" liefert eine andere Ausgabe als „Agiere als Sicherheitsingenieur"',
            '**Die Situation angeben, wenn sie relevant ist:** „Du überprüfst einen ersten Entwurf" versus „Du schreibst von Grund auf neu" ändert den Ansatz des Modells',
          ],
        },

        block1Link: {
          content: 'Um zu verstehen, wie sich Rollen-Prompting entwickelt hat, als Modelle immer besser darin wurden, Anweisungen zu befolgen, siehe [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
        },

        block2: {
          title: 'Baustein 2: Aufgabe / Anweisung',
          content: [
            '**Der Baustein Aufgabe / Anweisung ist die explizite Aussage darüber, was das Modell tun soll.** Es ist der wichtigste Baustein – alle anderen Bausteine unterstützen diesen. Eine klare, spezifische, überprüfbare Anweisung reduziert Mehrdeutigkeit auf nahezu null. Eine vage Anweisung ist die häufigste Ursache für schlechte KI-Ausgaben über alle Modelle und Anwendungsfälle hinweg.',
            'Aktuelle Best-Practice-Empfehlungen betonen, die Aufgabe handlungsorientiert und beobachtbar zu gestalten: ein Verb verwenden, das Ergebnis benennen und wenn möglich ein Erfolgskriterium beschreiben. „Schreibe eine Zusammenfassung" ist eine Aufgabe. „Fasse den folgenden Artikel in 3 Aufzählungspunkten zusammen, jeweils unter 20 Wörtern" ist eine Aufgabe mit einer überprüfbaren Ausgabe. Der Unterschied in der Ausgabequalität ist erheblich.',
          ],
          items: [
            '❌ Schwach: „Schreibe etwas zu diesem Thema"',
            '✅ Stark: „Schreibe einen 150-Wörter-LinkedIn-Post über die Vorteile von Prompt Engineering für nicht-technische Manager"',
            '❌ Schwach: „Analysiere diese Daten"',
            '✅ Stark: „Identifiziere die 3 wichtigsten Trends in diesem Datensatz und ordne sie nach Umsatzeinfluss, höchster zuerst"',
          ],
        },

        block2Link: {
          content: 'Anweisungen interagieren direkt damit, ob Beispiele bereitgestellt werden – siehe [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] dafür, wann welcher Ansatz am besten funktioniert.',
        },

        block3: {
          title: 'Baustein 3: Eingabe & Beispiele',
          content: [
            '**Eingabe** sind die tatsächlichen Daten, Texte oder Materialien, mit denen das Modell arbeiten soll. **Beispiele** sind Muster-Eingabe/Ausgabe-Paare, die zeigen, wie eine korrekte Antwort aussieht. Das sind separate Aspekte: Eingabe ist das Rohmaterial für die aktuelle Aufgabe, Beispiele sind das Lernmuster, das die Ausführung durch das Modell prägt.',
            '1–3 Beispiele einzuschließen (Few-Shot-Prompting) ist die zuverlässigste Einzeltechnik, um Ausgabeformat und Ton festzulegen. Wenn man dem Modell zeigt, wie eine gute Antwort aussieht, passt es das Muster an, anstatt es nur aus der Aufgabenbeschreibung abzuleiten. Dies ist am wichtigsten für spezialisierte Formate, konsistenten Ton und strukturierte Ausgaben, bei denen Präzision erforderlich ist.',
          ],
          items: [
            '**Wann Beispiele hinzufügen:** Spezialisierte Formate, konsistente Tonanforderungen, strukturierte Ausgaben, domänenspezifisches Vokabular',
            '**Wann bei Zero-Shot bleiben:** Einfache sachliche Fragen, breite Erkundung, wenn man aktiv den Standard-Antwortstil des Modells möchte',
            '**Beispiele variieren:** Identische Beispiele lehren nur ein Muster – den echten Bereich der erwarteten Eingaben abdecken',
            '**Realistische Daten verwenden:** Echte Muster übertreffen idealisierte – das Modell lernt aus dem, was man ihm tatsächlich zeigt',
          ],
        },

        block3Link: {
          content: 'Für eine vollständige Aufschlüsselung, wann Beispiele verwendet werden und wann sie weggelassen werden, siehe [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?].',
        },

        block4: {
          title: 'Baustein 4: Einschränkungen',
          content: [
            '**Einschränkungen sind die Regeln, die das Modell befolgen muss: was es tun muss und was nicht.** Sie umfassen Längenbeschränkungen, verbotene Themen oder Formulierungen, erforderliche Quellen, Marken-Ton-Regeln, Sicherheitsgrenzen und Formatrestriktionen. Einschränkungen sind der am häufigsten weggelassene Baustein – und ihr Fehlen ist die Hauptursache für halluzinierte Fakten, markenfremde Sprache und Ausgaben im falschen Format.',
            'Das Hinzufügen einer gut abgegrenzten Einschränkung ist oft die wirkungsvollste Änderung an einem bestehenden Prompt. „Erfinde keine Statistiken" senkt das Halluzinationsrisiko erheblich. „Überschreite nie 100 Wörter" erzwingt Knappheit. „Verwende nur Informationen aus dem bereitgestellten Text" verankert die Ausgabe im Quellmaterial und eliminiert Fabrikation für diese Aufgabe vollständig.',
          ],
          items: [
            '**Längenbeschränkungen:** „Maximal 150 Wörter", „Nicht mehr als 5 Aufzählungspunkte"',
            '**Quelleinschränkungen:** „Verwende nur Fakten aus dem beigefügten Dokument", „Zitiere keine Quellen, die du nicht verifizieren kannst"',
            '**Ton- und Stimmeinschränkungen:** „Schreibe in einem formalen, drittpersonalen Ton – keine Kontraktionen, keine Umgangssprache"',
            '**Verbotene Inhalte:** „Erwähne keine Konkurrenzprodukte", „Spekuliere nicht über das hinaus, was die Daten zeigen"',
            '**Sicherheitseinschränkungen:** „Wenn die Frage nicht aus dem bereitgestellten Kontext beantwortet werden kann, sage es so – erfinde keine Antwort"',
          ],
        },

        block4Links: {
          content: 'Für die Technik, Ausschlüsse zur Gestaltung von Ausgaben zu verwenden, siehe [Techniques: Negative Prompting: Tell the AI What NOT to Do]. Warum unkontrollierte Prompts mehr halluzinieren, erklärt [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them].',
        },

        block5: {
          title: 'Baustein 5: Ausgabeformat',
          content: [
            '**Ausgabeformat legt die genaue Form der Antwort fest, die das Modell produzieren soll.** Dies ist der Baustein, der bestimmt, ob die Ausgabe direkt verwendbar ist oder vor der Nutzung umformatiert werden muss. Bei automatisierten Pipelines bedeutet ein nicht festgelegtes Ausgabeformat fragiles, inkonsistentes Parsen. Für GEO ist eine strukturierte Ausgabe eher dazu geeignet, von KI-Suchmaschinen wörtlich zitiert zu werden, da strukturierte Antworten programmatisch leichter zu extrahieren sind.',
            'Der Ausgabeformat-Baustein kann das Dateiformat (JSON, Markdown, CSV), die Struktur (Tabelle, Aufzählungsliste, nummerierte Schritte), die Länge und die Beschriftung von Abschnitten festlegen. Je präziser man es angibt, desto weniger Bearbeitung erfordert die Ausgabe.',
          ],
          items: [
            '**JSON:** „Gib das Ergebnis als JSON-Objekt mit den Schlüsseln: title, summary, tags zurück"',
            '**Markdown-Aufzählungspunkte:** „Liste jeden Fund als Aufzählungspunkt auf, der mit einem fetten Begriff beginnt, gefolgt von einem Erklärungssatz"',
            '**Tabelle:** „Formatiere den Vergleich als Markdown-Tabelle mit den Spalten: Feature, Option A, Option B"',
            '**Strukturierter Fließtext:** „Strukturiere die Antwort mit einer Überschrift für jeden Hauptpunkt und maximal 3 Sätzen pro Abschnitt"',
          ],
        },

        block5Link: {
          content: 'Für einen vollständigen Leitfaden zu JSON-Modus und strukturierter Ausgabe über verschiedene Modelle hinweg, siehe [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data].',
        },

        template: {
          title: 'Die 5 Bausteine zusammenfügen: Eine einfache Vorlage',
          content: 'Die folgende Vorlage zeigt alle 5 Bausteine in der Reihenfolge für eine einzige domänenneutrale Aufgabe zusammengestellt. Jeder Teil ist beschriftet, sodass genau erkennbar ist, wo jeder Baustein beginnt und endet. Den Inhalt in jedem Abschnitt ersetzen, um ihn an eine beliebige Domäne anzupassen.',
          items: [
            '**[Rolle & Kontext]** Du bist ein erfahrener Business-Analyst. Die Zielgruppe ist ein nicht-technisches Führungsteam, das einen vierteljährlichen Betriebsbericht überprüft.',
            '**[Aufgabe / Anweisung]** Fasse die wichtigsten Erkenntnisse aus dem folgenden Bericht zusammen. Konzentriere dich auf die Leistung im Vergleich zu den Zielen, identifiziere die zwei größten Risiken und empfehle für jedes eine Korrekturmaßnahme.',
            '**[Eingabe]** [Berichtstext hier einfügen]',
            '**[Einschränkungen]** Verwende nur Informationen aus dem Bericht. Spekuliere nicht. Überschreite insgesamt nicht 200 Wörter. Schreibe in einfacher Sprache – kein Fachjargon.',
            '**[Ausgabeformat]** Gib die Antwort in drei Abschnitten zurück: „Wichtigste Erkenntnisse" (3 Aufzählungspunkte), „Top-Risiken" (2 Aufzählungspunkte), „Empfohlene Maßnahmen" (2 Aufzählungspunkte, einer pro Risiko).',
          ],
        },

        templateNote: {
          content: 'Diese Vorlage funktioniert auf GPT-4o, Claude, Gemini und lokalen LLMs über Ollama oder LM Studio. Die Reihenfolge der Bausteine ist eine Empfehlung, keine starre Regel – aber Rolle & Kontext zuerst und Ausgabeformat zuletzt zu platzieren ist die häufigste und zuverlässigste Anordnung über alle wichtigen Modelle hinweg.',
        },

        frameworks: {
          title: 'Wie diese Bausteine auf Frameworks und Werkzeuge abbilden',
          content: [
            'Beliebte Prompt-Engineering-Frameworks sind meinungsstarke Wege, dieselben fünf Bausteine unter verschiedenen Namen und in unterschiedlichen Reihenfolgen anzuordnen. CRAFT, CO-STAR und SPECS bilden alle direkt auf dieses Fünf-Bausteine-Modell ab. Die Bausteine zuerst zu verstehen bedeutet, jedes Framework anzuwenden, ohne seine spezifische Terminologie von Grund auf auswendig lernen zu müssen.',
            'Die folgende Tabelle zeigt, wie jeder Baustein dem entsprechenden Feld in drei weit verbreiteten Frameworks zugeordnet wird:',
          ],
          columns: ['Baustein', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Baustein': 'Rolle & Kontext', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { 'Baustein': 'Aufgabe / Anweisung', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { 'Baustein': 'Eingabe & Beispiele', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { 'Baustein': 'Einschränkungen', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { 'Baustein': 'Ausgabeformat', 'CRAFT': 'Format', 'CO-STAR': 'Response format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum enthält 9 eingebaute Frameworks, die diese Bausteine je nach Aufgabentyp in verschiedenen Konfigurationen vorausfüllen. Für framework-spezifische Leitfäden, siehe [Frameworks: Which Prompt Framework Should You Use?], [Frameworks: CRAFT Framework] und [Frameworks: CO-STAR Framework].',
        },

        mistakes: {
          title: 'Häufige Fehler mit den 5 Bausteinen',
          items: [
            '**Rolle vollständig weglassen:** Das Modell antwortet aus einer generischen Perspektive – Bereich und Expertise-Level angeben, auch wenn es nur ein Satz ist',
            '**Vager Kontext:** „Schreibe für mein Publikum" sagt dem Modell nichts – die Zielgruppe, ihr Wissensniveau und was sie mit der Ausgabe machen werden, benennen',
            '**Anweisung, die nicht überprüft werden kann:** „Mache es besser" hat kein beobachtbares Erfolgskriterium – durch eine spezifische, messbare Aufgabe ersetzen',
            '**Keine Einschränkungen gegen Halluzinationen:** Ohne „verwende nur bereitgestellte Informationen" füllt das Modell Lücken mit plausibel klingenden Erfindungen',
            '**Nicht festgelegtes Ausgabeformat:** Das Modell wählt seine eigene Struktur – die sich zwischen Durchläufen ändert und nachgelagerte Prozesse unterbricht',
            '**Alles in einen Absatz zusammenführen:** In einem Textblock vermischte Bausteine sind schwerer für das Modell zu verarbeiten – Zeilenumbrüche oder explizite Beschriftungen für jeden Baustein verwenden',
            '**Zu identische Beispiele:** Drei Beispiele, die alle gleich sind, lehren nur ein Muster – sie variieren, um den echten Bereich der Eingaben abzudecken',
          ],
        },

        faq: {
          title: 'FAQ: Die Bausteine eines Prompts',
          faqs: [
            {
              q: 'Brauche ich wirklich alle 5 Bausteine in jedem Prompt?',
              a: 'Nein. Einfache, eindeutige Aufgaben benötigen oft nur eine Aufgabe / Anweisung und ein Ausgabeformat. Rolle & Kontext hinzufügen, wenn Bereich oder Zielgruppe relevant sind. Einschränkungen hinzufügen, wenn Fehler kostspielig sind. Beispiele hinzufügen, wenn Formatpräzision kritisch ist. Minimal beginnen und Bausteine nur hinzufügen, wenn die Ausgabe den eigenen Standard nicht erfüllt.',
            },
            {
              q: 'Ist Rolle wichtiger als Kontext oder umgekehrt?',
              a: 'Sie funktionieren als Paar – keines reicht allein aus. Rolle ohne Kontext liefert generische Experten-Ausgaben. Kontext ohne Rolle liefert situationsbewusste, aber tonal inkonsistente Ausgaben. Für die meisten Aufgaben funktioniert ein Satz, der beides kombiniert, gut: „Du bist ein [Rolle], der mit [Zielgruppe] an [Domänenaufgabe] arbeitet."',
            },
            {
              q: 'Kann ich Prompts kurz halten und trotzdem alle 5 Bausteine einschließen?',
              a: 'Ja. Jeder Baustein kann in einem einzigen Satz ausgedrückt werden. Ein vollständiger Fünf-Bausteine-Prompt kann unter 100 Wörtern liegen. Kürze ist nicht das Problem – Vagheit ist es. Ein kurzer, präziser Prompt mit allen fünf Elementen übertrifft konsistent einen langen, weitschweifigen ohne keines davon.',
            },
            {
              q: 'Was ist der Unterschied zwischen Kontext und Beispielen?',
              a: 'Kontext beschreibt die Situation, den Bereich und die Zielgruppe – es sind Hintergrundinformationen, die die Aufgabe rahmen. Beispiele sind Muster-Eingabe/Ausgabe-Paare, die dem Modell zeigen, wie eine korrekte Antwort aussieht. Kontext sagt dem Modell, wo es ist; Beispiele zeigen ihm, was es produzieren soll. Beides ist nützlich, aber sie dienen völlig unterschiedlichen Zwecken.',
            },
            {
              q: 'Wo passen Einschränkungen hin, wenn ich ein Framework wie CRAFT oder CO-STAR verwende?',
              a: 'Jedes wichtige Framework hat ein Feld, das auf Einschränkungen abbildet – „Restrictions" in CRAFT, „Tone & Style" in CO-STAR, „Constraints" in SPECS. Wenn das eigene Framework kein explizites Einschränkungsfeld hat, die Einschränkungen am Ende als separaten „Nicht"-Abschnitt hinzufügen – alle Modelle handhaben dies zuverlässig.',
            },
            {
              q: 'Spielt das Ausgabeformat eine Rolle, wenn ich nur eine einfache Frage stelle?',
              a: 'Bei Gesprächsfragen ist das Festlegen des Formats optional. Für jede Ausgabe, die nachgelagert verwendet wird – in ein Dokument eingefügt, von Code verarbeitet, veröffentlicht oder von Teammitgliedern wiederverwendet – ist das Festlegen des Formats unerlässlich. Es ist der Unterschied zwischen einem Ergebnis und einem nutzbaren Ergebnis.',
            },
          ],
        },
      },
    },
    fr: {
      theme: 'Fondamentaux',
      title: 'Les 5 éléments fondamentaux de tout prompt',
      seoTitle: 'Les 5 éléments fondamentaux de tout prompt 2026',
      intro: 'Les 5 éléments fondamentaux de tout prompt : Rôle & Contexte, Tâche, Entrée & Exemples, Contraintes et Format de sortie.',
      metaDescription: 'Maîtrisez les 5 composantes essentielles : Rôle & Contexte, Tâche, Entrée & Exemples, Contraintes, Format de sortie. Cadre testé pour des prompts fiables.',
      publishDate: '2026-03-01',
      readTime: '8 min de lecture',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Les 5 éléments fondamentaux de tout prompt',
        description: 'Les 5 éléments fondamentaux de tout prompt : Rôle & Contexte, Tâche, Entrée & Exemples, Contraintes et Format de sortie. Avec ces cinq composants, tout prompt IA devient fiable et reproductible.',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs?lang=fr',
        inLanguage: 'fr',
        keywords: ['structure de prompt', 'éléments de prompt', 'rôle et contexte', 'format de sortie', 'contraintes de prompt', 'exemples few-shot', 'prompt engineering', 'GPT-4o', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      sections: {
        definition: {
          title: 'Quels sont les 5 éléments fondamentaux d\'un prompt ?',
          content: [
            '**Les 5 éléments fondamentaux de tout prompt sont : Rôle & Contexte, Tâche / Instruction, Entrée & Exemples, Contraintes et Format de sortie.** Ces cinq composants constituent la structure minimale qui distingue un prompt fiable et reproductible d\'une question vague produisant des résultats incohérents.',
            'Chaque bloc résout un mode d\'échec différent. Rôle & Contexte indique au modèle qui il est et dans quelle situation il se trouve. Tâche / Instruction lui dit exactement quoi faire. Entrée & Exemples lui fournissent la matière première et le signal d\'apprentissage. Les Contraintes fixent les règles. Le Format de sortie spécifie la forme de la réponse. Ensemble, ils ne laissent au modèle rien à deviner.',
          ],
        },

        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'Rôle & Contexte : Indiquer au modèle qui il est et dans quel domaine il opère',
            'Tâche / Instruction : Énoncer exactement ce que vous voulez que le modèle produise — de manière spécifique et vérifiable',
            'Entrée & Exemples : Fournir les données brutes et les paires entrée/sortie exemples dont le modèle a besoin',
            'Contraintes : Établir les règles — ce que le modèle doit et ne doit pas faire',
            'Format de sortie : Spécifier la forme exacte de la réponse — JSON, puces, tableau ou prose',
          ],
        },

        whyMatters: {
          title: 'Pourquoi ces 5 blocs sont importants en 2026',
          content: [
            'Le modèle en cinq blocs reflète le consensus convergent des guides de prompt engineering d\'OpenAI, Google, Anthropic et des praticiens indépendants. Rôle, instructions, exemples, contraintes et format de sortie apparaissent — sous différents noms — dans chaque framework majeur publié depuis 2023. Ce n\'est pas une coïncidence : c\'est l\'information minimale dont un modèle probabiliste a besoin pour produire un résultat utile et cohérent.',
            'L\'argument économique est simple. L\'absence de rôle et de contexte produit des réponses génériques qui nécessitent une réécriture. L\'absence de contraintes augmente le risque d\'hallucination et les sorties hors de la ligne directrice. L\'absence de format de sortie signifie des résultats qui ne peuvent pas être analysés ni copiés-collés directement. Le modèle en 5 blocs traite ces trois modes d\'échec à la fois, et s\'applique également aux modèles de la classe GPT-4, Claude, Gemini et aux LLM exécutés localement.',
          ],
        },

        block1: {
          title: 'Bloc 1 : Rôle & Contexte',
          content: [
            '**Le Rôle** indique au modèle quelle persona ou expertise adopter. **Le Contexte** lui indique la situation, le domaine et le public dans lequel il opère. Ils sont regroupés ensemble parce qu\'ils fonctionnent en binôme — le rôle est ce qu\'est le modèle, et le contexte est l\'environnement qui façonne ce que « bon » signifie pour cette tâche.',
            'Lorsque vous omettez le rôle et le contexte, le modèle répond d\'un point de vue générique — utile pour personne en particulier. Avec eux, le même modèle devient un conseiller fiscal senior répondant à une question sur les déclarations de TVA, un rédacteur junior écrivant pour un public de 19 ans, ou un analyste de données résumant un rapport trimestriel. La sortie se calibre sur votre situation réelle.',
          ],
          items: [
            '**Spécifiez le domaine :** « Tu es un rédacteur SaaS B2B » est plus utile que « Tu es un rédacteur »',
            '**Incluez le public :** « Explique cela à un directeur financier non technique » contraint le vocabulaire et le niveau de détail',
            '**Ancrez le niveau d\'expertise :** « Agis comme un ingénieur en sécurité senior » produit une sortie différente de « Agis comme un ingénieur en sécurité »',
            '**Énoncez la situation quand c\'est important :** « Tu révises un premier brouillon » versus « Tu écris de zéro » change l\'approche du modèle',
          ],
        },

        block1Link: {
          content: 'Pour comprendre comment le role prompting a évolué à mesure que les modèles sont devenus plus capables de suivre des instructions, voir [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved].',
        },

        block2: {
          title: 'Bloc 2 : Tâche / Instruction',
          content: [
            '**Le bloc Tâche / Instruction est l\'énoncé explicite de ce que vous voulez que le modèle fasse.** C\'est le bloc le plus important — tous les autres blocs le soutiennent. Une instruction claire, spécifique et vérifiable réduit l\'ambiguïté à presque zéro. Une instruction vague est la principale cause de mauvaises sorties IA sur tous les modèles et cas d\'usage.',
            'Les meilleures pratiques actuelles insistent sur le fait de rendre la tâche actionnable et observable : utilisez un verbe, énoncez le livrable, et si possible décrivez un critère de succès. « Écrire un résumé » est une tâche. « Résumer l\'article suivant en 3 points, chacun en moins de 20 mots » est une tâche avec une sortie vérifiable. La différence de qualité de sortie est significative.',
          ],
          items: [
            '❌ Faible : « Écris quelque chose sur ce sujet »',
            '✅ Fort : « Écris un post LinkedIn de 150 mots sur les avantages du prompt engineering pour les managers non techniques »',
            '❌ Faible : « Analyse ces données »',
            '✅ Fort : « Identifie les 3 principales tendances dans ce jeu de données et classe-les par impact sur le chiffre d\'affaires, du plus élevé au plus bas »',
          ],
        },

        block2Link: {
          content: 'Les instructions interagissent directement avec le fait de fournir ou non des exemples — voir [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] pour savoir quand chaque approche fonctionne le mieux.',
        },

        block3: {
          title: 'Bloc 3 : Entrée & Exemples',
          content: [
            '**L\'Entrée** est la donnée réelle, le texte ou le matériel sur lequel le modèle doit travailler. **Les Exemples** sont des paires entrée/sortie qui illustrent à quoi ressemble une réponse correcte. Ce sont des préoccupations distinctes : l\'entrée est la matière première pour la tâche en cours, les exemples sont le signal d\'apprentissage qui façonne la façon dont le modèle l\'exécute.',
            'Inclure 1 à 3 exemples (few-shot prompting) est la technique la plus fiable pour fixer le format et le ton de la sortie. Quand vous montrez au modèle à quoi ressemble une bonne réponse, il correspond au schéma plutôt que de le déduire de la seule description de la tâche. C\'est le plus important pour les formats spécialisés, le ton cohérent et les sorties structurées où la précision est requise.',
          ],
          items: [
            '**Quand ajouter des exemples :** Formats spécialisés, exigences de ton cohérent, sorties structurées, vocabulaire spécifique au domaine',
            '**Quand rester en zero-shot :** Questions factuelles simples, exploration large, quand vous voulez activement le style de réponse par défaut du modèle',
            '**Variez vos exemples :** Des exemples identiques n\'enseignent qu\'un seul schéma — couvrez la vraie gamme des entrées que vous attendez',
            '**Utilisez des données réalistes :** Les vrais échantillons surpassent les idéalisés — le modèle apprend de ce que vous lui montrez réellement',
          ],
        },

        block3Link: {
          content: 'Pour une analyse complète de quand utiliser des exemples et quand les omettre, voir [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?].',
        },

        block4: {
          title: 'Bloc 4 : Contraintes',
          content: [
            '**Les Contraintes sont les règles que le modèle doit suivre : ce qu\'il doit faire et ce qu\'il ne doit pas faire.** Elles incluent les limites de longueur, les sujets ou phrases interdits, les sources requises, les règles de voix de marque, les limites de sécurité et les restrictions de format. Les contraintes sont le bloc le plus souvent omis — et leur absence est la principale cause de faits hallucinés, de langage hors de la ligne directrice et de sorties dans le mauvais format.',
            'Ajouter une contrainte bien ciblée est souvent le changement à plus fort levier que vous pouvez apporter à un prompt existant. « Ne pas inventer de statistiques » réduit fortement le risque d\'hallucination. « Ne jamais dépasser 100 mots » force la concision. « Utiliser uniquement les informations du texte fourni » ancre la sortie dans le matériel source et élimine entièrement la fabrication pour cette tâche.',
          ],
          items: [
            '**Contraintes de longueur :** « Maximum 150 mots », « Pas plus de 5 points »',
            '**Contraintes de source :** « Utiliser uniquement les faits du document joint », « Ne pas citer de sources que vous ne pouvez pas vérifier »',
            '**Contraintes de ton et de voix :** « Écrire dans un ton formel, à la troisième personne — pas de contractions, pas de familiarités »',
            '**Contenu interdit :** « Ne pas mentionner les produits concurrents », « Ne pas spéculer au-delà de ce que les données montrent »',
            '**Contraintes de sécurité :** « Si la question ne peut pas être répondue à partir du contexte fourni, dites-le — n\'inventez pas de réponse »',
          ],
        },

        block4Links: {
          content: 'Pour la technique d\'utilisation des exclusions pour façonner la sortie, voir [Techniques: Negative Prompting: Tell the AI What NOT to Do]. Pour comprendre pourquoi les prompts sans contraintes hallucinent davantage, voir [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them].',
        },

        block5: {
          title: 'Bloc 5 : Format de sortie',
          content: [
            '**Le Format de sortie spécifie la forme exacte de la réponse que le modèle doit produire.** C\'est le bloc qui détermine si la sortie est directement utilisable ou nécessite un reformatage avant d\'être utile. Pour les pipelines automatisés, un format de sortie non spécifié signifie une analyse fragile et incohérente. Pour le GEO, une sortie structurée est plus susceptible d\'être citée textuellement par les moteurs de recherche IA, car les réponses structurées sont plus faciles à extraire par programme.',
            'Le bloc de format de sortie peut spécifier le format de fichier (JSON, Markdown, CSV), la structure (tableau, liste à puces, étapes numérotées), la longueur et l\'étiquetage des sections. Plus vous le spécifiez avec précision, moins la sortie nécessite de modifications.',
          ],
          items: [
            '**JSON :** « Renvoyer le résultat sous forme d\'objet JSON avec les clés : titre, résumé, tags »',
            '**Puces Markdown :** « Lister chaque constat sous forme de puce commençant par un terme en gras, suivi d\'une phrase d\'explication »',
            '**Tableau :** « Formater la comparaison sous forme de tableau Markdown avec les colonnes : Fonctionnalité, Option A, Option B »',
            '**Prose structurée :** « Structurer la réponse avec un titre pour chaque point majeur et un maximum de 3 phrases par section »',
          ],
        },

        block5Link: {
          content: 'Pour un guide complet du mode JSON et des sorties structurées sur différents modèles, voir [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data].',
        },

        template: {
          title: 'Assembler les 5 blocs : un modèle simple',
          content: 'Le modèle ci-dessous montre les 5 blocs assemblés dans l\'ordre pour une tâche unique neutre par domaine. Chaque partie est étiquetée pour que vous puissiez voir exactement où commence et se termine chaque bloc. Remplacez le contenu de chaque section pour l\'adapter à n\'importe quel domaine.',
          items: [
            '**[Rôle & Contexte]** Tu es un analyste commercial senior. Le public est une équipe dirigeante non technique qui examine un rapport d\'opérations trimestriel.',
            '**[Tâche / Instruction]** Résume les principales conclusions du rapport ci-dessous. Concentre-toi sur la performance par rapport aux objectifs, identifie les deux risques les plus importants et recommande une action corrective pour chacun.',
            '**[Entrée]** [Coller le texte du rapport ici]',
            '**[Contraintes]** Utilise uniquement les informations du rapport. Ne spécule pas. Ne dépasse pas 200 mots au total. Écris dans un langage simple — sans jargon.',
            '**[Format de sortie]** Retourne la réponse en trois sections : « Conclusions clés » (3 points), « Principaux risques » (2 points), « Actions recommandées » (2 points, un par risque).',
          ],
        },

        templateNote: {
          content: 'Ce modèle fonctionne sur GPT-4o, Claude, Gemini et les LLM locaux via Ollama ou LM Studio. L\'ordre des blocs est une recommandation, pas une règle rigide — mais placer Rôle & Contexte en premier et Format de sortie en dernier est l\'arrangement le plus courant et le plus fiable sur tous les grands modèles.',
        },

        frameworks: {
          title: 'Comment ces blocs correspondent aux frameworks et outils',
          content: [
            'Les frameworks de prompt engineering populaires sont des façons d\'arranger ces mêmes cinq blocs sous des noms différents et dans des ordres différents. CRAFT, CO-STAR et SPECS correspondent tous directement à ce modèle en cinq blocs. Comprendre les blocs en premier signifie que vous pouvez appliquer n\'importe quel framework sans mémoriser sa terminologie spécifique de zéro.',
            'Le tableau ci-dessous montre comment chaque bloc fondamental correspond au champ correspondant dans trois frameworks largement utilisés :',
          ],
          columns: ['Bloc fondamental', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Bloc fondamental': 'Rôle & Contexte', 'CRAFT': 'Contexte / Rôle', 'CO-STAR': 'Contexte + Public', 'SPECS': 'Situation' },
            { 'Bloc fondamental': 'Tâche / Instruction', 'CRAFT': 'Action', 'CO-STAR': 'Objectif', 'SPECS': 'Problème / Tâche' },
            { 'Bloc fondamental': 'Entrée & Exemples', 'CRAFT': 'Faits / Exemples', 'CO-STAR': 'Exemples (optionnel)', 'SPECS': 'Exemples' },
            { 'Bloc fondamental': 'Contraintes', 'CRAFT': 'Restrictions', 'CO-STAR': 'Ton + Style', 'SPECS': 'Contraintes' },
            { 'Bloc fondamental': 'Format de sortie', 'CRAFT': 'Format', 'CO-STAR': 'Format de réponse', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum inclut 9 frameworks intégrés qui pré-remplissent ces blocs dans différentes configurations selon le type de tâche. Pour des guides spécifiques aux frameworks, voir [Frameworks: Which Prompt Framework Should You Use?], [Frameworks: CRAFT Framework] et [Frameworks: CO-STAR Framework].',
        },

        mistakes: {
          title: 'Erreurs courantes avec les 5 blocs',
          items: [
            '**Rôle entièrement absent :** Le modèle répond d\'un point de vue générique — spécifiez le domaine et le niveau d\'expertise, même en une phrase',
            '**Contexte vague :** « Écris pour mon public » ne dit rien au modèle — nommez le public, son niveau de connaissances et ce qu\'il fera avec la sortie',
            '**Instruction invérifiable :** « Améliore-le » n\'a pas de critère de succès observable — remplacez par une tâche spécifique et mesurable',
            '**Aucune contrainte sur les hallucinations :** Sans « utiliser uniquement les informations fournies », le modèle comble les lacunes avec des fabrications plausibles',
            '**Format de sortie non spécifié :** Le modèle choisit sa propre structure — qui change d\'une exécution à l\'autre et brise les processus en aval',
            '**Tout fusionné en un paragraphe :** Les blocs mélangés dans un mur de texte sont plus difficiles à analyser pour le modèle — utilisez des sauts de ligne ou des étiquettes explicites pour chaque bloc',
            '**Exemples sur-identiques :** Trois exemples identiques n\'enseignent qu\'un seul schéma — variez-les pour couvrir la vraie gamme des entrées',
          ],
        },

        faq: {
          title: 'FAQ : Les blocs fondamentaux d\'un prompt',
          faqs: [
            {
              q: 'Ai-je vraiment besoin des 5 blocs dans chaque prompt ?',
              a: 'Non. Les tâches simples et non ambiguës nécessitent souvent seulement une Tâche / Instruction et un Format de sortie. Ajoutez Rôle & Contexte quand le domaine ou le public est important. Ajoutez des Contraintes quand les modes d\'échec sont coûteux. Ajoutez des Exemples quand la précision du format est critique. Commencez minimal et ajoutez des blocs uniquement quand la sortie ne correspond pas à votre standard.',
            },
            {
              q: 'Le Rôle est-il plus important que le Contexte, ou l\'inverse ?',
              a: 'Ils fonctionnent en binôme — ni l\'un ni l\'autre n\'est suffisant seul. Le Rôle sans Contexte produit une sortie générique en mode expert. Le Contexte sans Rôle produit une sortie consciente de la situation mais tonalement incohérente. Pour la plupart des tâches, une phrase combinant les deux fonctionne bien : « Tu es un [rôle] qui travaille avec [public] sur [tâche dans le domaine]. »',
            },
            {
              q: 'Puis-je garder des prompts courts et inclure quand même les 5 blocs ?',
              a: 'Oui. Chaque bloc peut être exprimé en une seule phrase. Un prompt complet en cinq blocs peut tenir en moins de 100 mots. La brièveté n\'est pas le problème — le vague l\'est. Un prompt court et précis avec les cinq éléments surpasse systématiquement un long et décousu qui n\'en a aucun.',
            },
            {
              q: 'Quelle est la différence entre Contexte et Exemples ?',
              a: 'Le Contexte décrit la situation, le domaine et le public — c\'est une information de fond qui cadre la tâche. Les Exemples sont des paires entrée/sortie qui montrent au modèle à quoi ressemble une réponse correcte. Le Contexte indique au modèle où il est ; les Exemples lui montrent quoi produire. Les deux sont utiles, mais ils servent des objectifs complètement différents.',
            },
            {
              q: 'Où se situent les contraintes si j\'utilise un framework comme CRAFT ou CO-STAR ?',
              a: 'Chaque framework majeur a un champ qui correspond aux contraintes — « Restrictions » dans CRAFT, « Ton & Style » dans CO-STAR, « Contraintes » dans SPECS. Si votre framework n\'a pas de champ explicite pour les contraintes, ajoutez vos contraintes à la fin sous forme d\'une section « Ne pas faire » séparée — tous les modèles gèrent cela de manière fiable.',
            },
            {
              q: 'Le format de sortie est-il important si je pose simplement une question simple ?',
              a: 'Pour les questions conversationnelles, spécifier le format est optionnel. Pour toute sortie qui sera utilisée en aval — collée dans un document, analysée par du code, publiée ou réutilisée entre membres d\'équipe — spécifier le format est essentiel. C\'est la différence entre obtenir un résultat et obtenir un résultat utilisable.',
            },
          ],
        },
      },
    },
    ja: {
      theme: '基礎',
      title: 'すべてのプロンプトに必要な5つの構成要素',
      seoTitle: 'プロンプトに必要な5つの要素（2026年版）',
      intro: 'プロンプトの5つの構成要素：役割とコンテキスト、タスク、入力と例、制約、出力形式。それぞれの使い方を解説します。',
      metaDescription: '優れたプロンプトに必須の5つの構成要素：ロール・コンテキスト、タスク、入力・例、制約条件、出力形式。信頼性の高い再現可能なプロンプト作成の枠組み。',
      publishDate: '2026-03-01',
      readTime: '8分で読める',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'すべてのプロンプトに必要な5つの構成要素',
        description: 'プロンプトの5つの構成要素：役割とコンテキスト、タスク、入力と例、制約、出力形式。これらの5つのコンポーネントにより、AIプロンプトは信頼性が高く再現可能になります。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs?lang=ja',
        inLanguage: 'ja',
        keywords: ['プロンプト構造', 'プロンプト要素', 'ロールとコンテキスト', '出力形式', 'プロンプト制約', 'フューショット例', 'プロンプトエンジニアリング', 'GPT-4o', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      sections: {
        definition: {
          title: '5つのブロックで推測作業を排除する',
          content: [
            '**プロンプトに必要な5つの構成要素は、役割とコンテキスト・タスク／指示・入力と例・制約・出力形式です。** この5つのコンポーネントは、信頼性が高く再現可能なプロンプトと、一貫性のない結果を生む漠然とした質問を分ける最小限の構造です。',
            '各ブロックは異なる障害モードを解決します。役割とコンテキストはモデルに自分が誰で、どんな状況にいるかを伝えます。タスク／指示は正確に何をすべきかを伝えます。入力と例は素材と教示シグナルを提供します。制約はルールを設定します。出力形式は回答の形を指定します。合わせることで、モデルが推測すべきことを残しません。',
            'これら5つのブロックは、大規模言語モデルがどのように命令を処理するかに基づいています。構造がなぜ重要なのかについての基礎的な説明については、[Fundamentals: What Is Prompt Engineering?]を参照してください。',
          ],
        },

        tldr: {
          title: 'まとめ',
          isTldr: true,
          items: [
            '役割とコンテキスト：モデルに自分が誰で、どのドメインで動いているかを伝える',
            'タスク／指示：モデルに生成させたいものを正確に述べる — 具体的でテスト可能であること',
            '入力と例：モデルが必要とする生データとサンプル入出力ペアを提供する',
            '制約：ルールを設定する — モデルが行うべきこととすべきでないこと',
            '出力形式：回答の正確な形を指定する — JSON、箇条書き、テーブル、または散文',
          ],
        },

        whyMatters: {
          title: '2026年にこの5つのブロックが重要な理由',
          content: [
            '5ブロックモデルは、Prompt Engineeringにおける収束した研究を反映しています。Schulhoff et al.、「The Prompt Report」（arXiv:2406.06608）では、本番のAIシステムで使用される58以上の個別のテクニックがカタログ化されました——これらすべてはこの5つのブロックの構造化された組み合わせで、異なる構成で適用されています。Brown et al.、2020年、「Language Models are Few-Shot Learners」（arXiv:2005.14165）は、最初に、例（ブロック3）がモデル出力を新しいタスクで劇的に改善できることを示しました——モデルの再トレーニングなしで。',
            'ビジネスケースは明確です。役割とコンテキストがなければ、書き直しが必要な一般的な回答が返ってきます。制約がなければ、ハルシネーションのリスクとブランドに合わない出力が増加します。出力形式がなければ、解析やコピーペーストが直接できない結果になります。5ブロックモデルは3つの障害モードすべてを一度に対処し、GPT-4クラスのモデル・Claude・Gemini・ローカルLLMに等しく適用されます。',
          ],
        },

        block1: {
          title: 'ブロック1：役割とコンテキスト',
          content: [
            '**役割**はモデルが採用するペルソナや専門知識を伝えます。**コンテキスト**はモデルが動いている状況・ドメイン・対象者を伝えます。この2つはペアとして機能するためグループ化されています — 役割はモデルが誰であるかであり、コンテキストはそのタスクで「良い」とは何かを形作る環境です。',
            '役割とコンテキストを省略すると、モデルは誰にも特別に役立たない一般的な視点から回答します。それらがあると、同じモデルが、VATの申告について質問に答えるシニア税務アドバイザー・19歳向けに書くジュニアコピーライター・四半期報告書を要約するデータアナリストになります。出力は実際の状況に合わせて調整されます。',
          ],
          items: [
            '**ドメインを指定する：** 「あなたはB2B SaaSのコピーライターです」は「あなたはライターです」より役立つ',
            '**対象者を含める：** 「非技術系のCFOにこれを説明してください」は語彙と詳細レベルを制約する',
            '**専門レベルを固定する：** 「シニアセキュリティエンジニアとして行動してください」は「セキュリティエンジニアとして行動してください」と異なる出力を生成する',
            '**重要な場合は状況を述べる：** 「初稿を見直しています」と「ゼロから書いています」ではモデルのアプローチが変わる',
          ],
        },

        block1Link: {
          content: 'モデルが指示に従う能力が向上するにつれて役割プロンプティングがどのように進化したかを理解するには、[Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved] を参照してください。',
        },

        block2: {
          title: 'ブロック2：タスク／指示',
          content: [
            '**タスク／指示ブロックは、モデルに何をしてほしいかを明示的に述べたものです。** これは最も重要なブロックです — 他のすべてのブロックがこれを支えます。明確で具体的かつテスト可能な指示は、曖昧さをほぼゼロに低減します。漠然とした指示は、すべてのモデルとユースケースにわたってAI出力が悪くなる最大の単一の原因です。',
            '現在のベストプラクティスガイダンスは、タスクを実行可能で観察可能にすることを強調しています：動詞を使い・成果物を述べ・可能であれば成功基準を説明してください。「要約を書く」はタスクです。「以下の記事を3つの箇条書きでまとめてください。各20語以内」はテスト可能な出力を持つタスクです。出力品質の違いは顕著です。',
          ],
          items: [
            '【悪い例】「このトピックについて何か書いてください」',
            '【良い例】「非技術系マネージャー向けのプロンプトエンジニアリングのメリットについて、150語のLinkedIn投稿を書いてください」',
            '【悪い例】「このデータを分析してください」',
            '【良い例】「このデータセットの上位3つのトレンドを特定し、収益への影響度の高い順に並べてください」',
          ],
        },

        block2Link: {
          content: '指示は例を提供するかどうかと直接関係します — どちらのアプローチが最も効果的かについては [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] を参照してください。',
        },

        block3: {
          title: 'ブロック3：入力と例',
          content: [
            '**入力**はモデルが処理する必要がある実際のデータ・テキスト・素材です。**例**は正しいレスポンスがどのように見えるかを示すサンプルの入出力ペアです。これらは別々の関心事です：入力は現在のタスクの生素材であり、例はモデルがタスクをどのように実行するかを形作る教示シグナルです。',
            '1〜3の例（フューショットプロンプティング）を含めることは、出力形式とトーンを固定するための最も信頼できる単一のテクニックです。良い回答がどのようなものかをモデルに示すと、モデルはタスクの説明から推測するのではなく、そのパターンに合わせます。これは特殊な形式・一貫したトーン・精度が求められる構造化された出力にとって最も重要です。',
          ],
          items: [
            '**例を追加するタイミング：** 特殊な形式・一貫したトーンの要件・構造化された出力・ドメイン固有の語彙',
            '**ゼロショットを維持するタイミング：** 単純な事実に基づく質問・幅広い探索・モデルのデフォルトレスポンススタイルを積極的に望む場合',
            '**例を変化させる：** 同じ例はひとつのパターンしか教えません — 実際に想定される入力の範囲をカバーしてください',
            '**現実的なデータを使用する：** 実際のサンプルは理想化されたものよりも優れています — モデルは実際に示したものから学習します',
          ],
        },

        block3Link: {
          content: '例を使用するタイミングと省略するタイミングの完全な解説については [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] を参照してください。',
        },

        block4: {
          title: 'ブロック4：制約',
          content: [
            '**制約はモデルが従うべきルールです：行うべきことと行うべきでないこと。** 文字数制限・禁止トピックやフレーズ・必要な情報源・ブランドボイスのルール・安全上の境界・形式の制約などが含まれます。制約は最もよく省略されるブロックであり、その欠如がハルシネーションした事実・ブランドに合わない言語・間違った形式での出力の主な原因です。',
            '適切にスコープされた制約を一つ追加することは、既存のプロンプトに対して最もレバレッジの高い変更であることが多いです。「統計を作り上げないでください」はハルシネーションのリスクを大幅に削減します。「100語を超えないでください」は簡潔さを強制します。「提供されたテキストの情報のみ使用してください」は出力をソース素材に根拠付け、そのタスクの捏造を完全に排除します。',
          ],
          items: [
            '**文字数制約：** 「最大150語」、「5つの箇条書き以内」',
            '**情報源制約：** 「添付のドキュメントの事実のみ使用してください」、「確認できない情報源は引用しないでください」',
            '**トーンとボイスの制約：** 「フォーマルな三人称のトーンで書いてください — 短縮形・口語表現なし」',
            '**禁止コンテンツ：** 「競合他社の製品を言及しないでください」、「データが示す以上の推測をしないでください」',
            '**安全上の制約：** 「提供されたコンテキストから質問に答えられない場合は、そう述べてください — 回答を作り上げないでください」',
          ],
        },

        block4Links: {
          content: '除外を使って出力を形作るテクニックについては [Techniques: Negative Prompting: Tell the AI What NOT to Do] を参照してください。制約のないプロンプトがなぜより多くハルシネーションを起こすかについては [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them] を参照してください。',
        },

        block5: {
          title: 'ブロック5：出力形式',
          content: [
            '**出力形式はモデルが生成すべき回答の正確な形を指定します。** これは出力が直接使えるものか、役立つ前に再フォーマットが必要かを決定するブロックです。自動化されたパイプラインにとって、指定されていない出力形式はもろく一貫性のない解析を意味します。GEOにとって、構造化された出力はAI検索エンジンによってそのまま引用される可能性が高く、構造化された回答はプログラム的に抽出しやすいためです。',
            '出力形式ブロックはファイル形式（JSON・Markdown・CSV）・構造（テーブル・箇条書き・番号付きステップ）・長さ・セクションのラベリングを指定できます。より正確に指定するほど、出力に必要な編集が減ります。',
          ],
          items: [
            '**JSON：** 「title・summary・tagsをキーとするJSONオブジェクトとして結果を返してください」',
            '**Markdown箇条書き：** 「各所見を、太字の用語で始まり、一文の説明が続く箇条書きとしてリストアップしてください」',
            '**テーブル：** 「比較をFeature・Option A・Option Bの列を持つMarkdownテーブルとしてフォーマットしてください」',
            '**構造化された散文：** 「各主要ポイントの見出しと、各セクション最大3文でレスポンスを構造化してください」',
          ],
        },

        block5Link: {
          content: '異なるモデルにわたるJSONモードと構造化出力の完全なガイドについては [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data] を参照してください。',
        },

        template: {
          title: '5つのブロックをまとめる：シンプルなテンプレート',
          content: '以下のテンプレートは、単一のドメイン中立なタスクのために5つのブロックが順番に組み立てられたものを示しています。各部分にはラベルが付いており、各ブロックがどこで始まりどこで終わるかが正確にわかります。各セクションの内容を置き換えて、任意のドメインに適応させてください。',
          items: [
            '**[役割とコンテキスト]** あなたはシニアビジネスアナリストです。対象者は四半期業務報告書を審査する非技術系の経営幹部チームです。',
            '**[タスク／指示]** 以下の報告書から主要な知見を要約してください。目標に対するパフォーマンスに焦点を当て、2つの最大リスクを特定し、各リスクに対して1つの是正措置を推奨してください。',
            '**[入力]** [ここに報告書テキストを貼り付けてください]',
            '**[制約]** 報告書の情報のみ使用してください。推測しないでください。全体で200語を超えないでください。平易な言葉で書いてください — 専門用語なし。',
            '**[出力形式]** レスポンスを3つのセクションとして返してください：「主要な知見」（3つの箇条書き）、「主なリスク」（2つの箇条書き）、「推奨される対策」（2つの箇条書き、各リスクに1つ）。',
          ],
        },

        templateNote: {
          content: 'このテンプレートはGPT-4o・Claude・Gemini・OllamaやLM Studio経由のローカルLLMで機能します。ブロックの順序は推奨であり、厳格なルールではありません — ただし、役割とコンテキストを最初に、出力形式を最後に配置することが、すべての主要モデルで最も一般的で信頼性の高い配置です。同じプロンプト構造はヨーロッパと中国のオープンソースモデルにも適用されます — Mistral AI、Alibaba Qwen、DeepSeekはすべてこの5ブロック構造に対応しますが、ローカルモデルはローカルモデルに異なる指示フォロー動作があるため、調整された出力形式仕様が必要な場合があります。',
        },

        pqTest: {
          title: 'PromptQuorum マルチモデルテスト：構造化 vs. 非構造化',
          content: [
            'PromptQuorumは同じタスク — 「この四半期報告書を要約してください」 — をGPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Proに2つのバージョンで送信しました：1つは非構造化（タスクのみ、ブロックなし）、もう1つは上記の完全な5ブロックテンプレートです。3つのモデル全てで、構造化プロンプトは編集が不要な回答を生成しました。非構造化プロンプトはモデル間で矛盾した結果を生成しました — 異なる長さ、異なる構造、各ケースで異なる詳細レベル。',
            '実験は5ブロックモデルの主な値を示しています：単一のモデルをより賢くするのではなく、異なるモデル間で、および同じモデルの異なる実行全体で、予測可能で一貫性のある出力を提供することです。',
          ],
        },

        frameworks: {
          title: 'これらのブロックはフレームワークとツールにどのようにマッピングされるか',
          content: [
            '人気のあるプロンプトエンジニアリングフレームワークは、異なる名称と異なる順序で、同じ5つの構成要素を配置する独自のアプローチです。CRAFT・CO-STAR・SPECSはすべて、この5ブロックモデルに直接マッピングされます。最初にブロックを理解することで、特定の用語を最初から暗記しなくても、任意のフレームワークを適用できます。',
            '以下の表は、各構成要素が広く使われている3つのフレームワークの対応するフィールドにどのようにマッピングされるかを示しています：',
          ],
          columns: ['構成要素', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { '構成要素': '役割とコンテキスト', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { '構成要素': 'タスク／指示', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { '構成要素': '入力と例', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { '構成要素': '制約', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { '構成要素': '出力形式', 'CRAFT': 'Format', 'CO-STAR': 'Response format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorumには、タスクタイプに応じて異なる設定でこれらのブロックを事前入力する9つの組み込みフレームワークが含まれています。フレームワーク固有のガイドについては [Frameworks: Which Prompt Framework Should You Use?]、[Frameworks: CRAFT Framework]、[Frameworks: CO-STAR Framework] を参照してください。',
        },

        mistakes: {
          title: '5つのブロックでよくある失敗',
          items: [
            '**役割を完全に省略する：** モデルは一般的な視点から回答します — 一文でもドメインと専門レベルを指定してください',
            '**漠然としたコンテキスト：** 「私の対象者のために書いてください」はモデルに何も伝えません — 対象者・その知識レベル・出力をどう使うかを明示してください',
            '**テストできない指示：** 「より良くしてください」には観察可能な成功基準がありません — 具体的で測定可能なタスクに置き換えてください',
            '**ハルシネーションへの制約なし：** 「提供された情報のみ使用してください」がないと、モデルはもっともらしい捏造でギャップを埋めます',
            '**指定されていない出力形式：** モデルが独自の構造を選びます — 実行間で変わり、下流プロセスを壊します',
            '**すべてを一段落に混ぜる：** テキストの壁に混在したブロックはモデルが解析しにくくなります — 各ブロックには改行または明示的なラベルを使用してください',
            '**過度に同じ例：** 同じ例を3つ使ってもひとつのパターンしか教えません — 実際に想定される入力の範囲をカバーするよう変化させてください',
          ],
        },

        relatedReading: {
          title: '関連資料',
          items: [
            '[基礎: プロンプトエンジニアリングとは？] — コア定義と、構造化された入力がより良い結果をもたらす理由',
            '[テクニック: ゼロショット対フューショット：どちらのアプローチが良い結果を得られるのか？] — いつ例を含めるべきか(ブロック3)、いつ省略すべきか',
            '[フレームワーク: CO-STARフレームワーク] — これら5つのブロックを複雑なタスク用の特定の順序で配置する名前付きテンプレート',
          ],
        },

        faq: {
          title: 'FAQ：プロンプトの構成要素',
          faqs: [
            {
              q: 'すべてのプロンプトに本当に5つのブロック全部が必要ですか？',
              a: 'いいえ。単純で明確なタスクでは、タスク／指示と出力形式だけで十分なことが多いです。ドメインや対象者が重要なときは役割とコンテキストを追加してください。障害モードのコストが高いときは制約を追加してください。形式の精度が重要なときは例を追加してください。最小限から始め、出力が基準を満たさないときのみブロックを追加してください。',
            },
            {
              q: '役割とコンテキスト、どちらが重要ですか？',
              a: 'この2つはペアとして機能します — どちらか単独では不十分です。コンテキストのない役割は一般的なエキスパートモードの出力を生成します。役割のないコンテキストは状況認識はあるがトーンが一貫しない出力を生成します。ほとんどのタスクでは、両方を組み合わせた一文がうまく機能します：「あなたは[対象者]と[ドメインタスク]に取り組んでいる[役割]です。」',
            },
            {
              q: 'プロンプトを短くしながら5つのブロック全部を含めることはできますか？',
              a: 'はい。各ブロックは一文で表現できます。完全な5ブロックプロンプトは100語未満にできます。問題は簡潔さではなく漠然さです。5つの要素すべてを含む短く精密なプロンプトは、何も含まない長くとりとめのないプロンプトより一貫して優れた結果を出します。',
            },
            {
              q: 'コンテキストと例の違いは何ですか？',
              a: 'コンテキストは状況・ドメイン・対象者を説明します — タスクを組み立てる背景情報です。例はモデルに正しい回答がどのように見えるかを示すサンプルの入出力ペアです。コンテキストはモデルにどこにいるかを伝え、例は何を生成すべきかを示します。両方とも有用ですが、まったく異なる目的を果たします。',
            },
            {
              q: 'CRAFTやCO-STARのようなフレームワークを使う場合、制約はどこに入れますか？',
              a: 'すべての主要なフレームワークには制約にマッピングされるフィールドがあります — CRAFTの「Restrictions」、CO-STARの「Tone & Style」、SPECSの「Constraints」。フレームワークに明示的な制約フィールドがない場合は、最後に別の「行わないこと」セクションとして制約を追加してください — すべてのモデルはこれを確実に処理します。',
            },
            {
              q: '単純な質問をしているだけなら、出力形式は重要ですか？',
              a: '会話的な質問では、形式の指定は任意です。下流で使用される出力 — ドキュメントに貼り付けられる・コードで解析される・公開される・チームメンバー間で再利用される — については、形式の指定は不可欠です。それは結果を得ることと、使用可能な結果を得ることの違いです。',
            },
          ],
        },
      },
    },
    zh: {
      theme: '基础知识',
      title: '每个提示词必需的5个构建模块',
      seoTitle: '高效提示需要的5个要素（2026年）',
      intro: '每个提示词必需的5个构建模块：角色与上下文、任务、输入与示例、约束条件和输出格式。',
      metaDescription: '掌握优质提示的5大构成：角色&背景、任务、输入&示例、约束条件、输出格式。适用于所有AI模型的经过验证的结构化框架。',
      publishDate: '2026-03-01',
      readTime: '阅读约8分钟',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '每个提示词必需的5个构建模块',
        description: '每个提示词必需的5个构建模块：角色与上下文、任务、输入与示例、约束条件和输出格式。这5个组成部分确保了AI提示词的可靠性和可重复性。',
        datePublished: '2026-03-01',
        dateModified: '2026-03-01',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs?lang=zh',
        inLanguage: 'zh',
        keywords: ['提示词结构', '提示词构件', '角色与背景', '输出格式', '提示词约束', '少样本示例', '提示词工程', 'GPT-4o', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      },
      sections: {
        definition: {
          title: '提示词的5个构建模块是什么？',
          content: [
            '**每个提示词必需的5个构建模块是：角色与上下文、任务/指令、输入与示例、约束条件和输出格式。** 这五个组成部分是将可靠、可重复的提示词与产出不一致结果的模糊问题区分开来的最低结构要求。',
            '每个模块解决一种不同的失效模式。角色与上下文告诉模型它是谁以及所处的情境。任务/指令告诉它确切要做什么。输入与示例为其提供原始材料和教学信号。约束条件设定规则。输出格式指定答案的形态。五者合一，让模型无需再猜测任何内容。',
          ],
        },

        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '角色与上下文：告诉模型它是谁，以及它在哪个领域中运作',
            '任务/指令：精确说明你希望模型产出什么——具体且可验证',
            '输入与示例：提供模型所需的原始数据和示例输入/输出对',
            '约束条件：设定规则——模型必须做什么，以及不能做什么',
            '输出格式：指定答案的确切形态——JSON、项目符号、表格或散文',
          ],
        },

        whyMatters: {
          title: '为什么这5个模块在2026年依然重要',
          content: [
            '这五模块模型反映了来自 OpenAI、Google、Anthropic 和独立从业者的提示词工程指南中的汇聚共识。角色、指令、示例、约束和输出格式——在2023年以来发布的每个主要框架中都以不同名称出现。这并非巧合：这是概率模型产出有用、一致结果所需的最少信息量。',
            '商业理由一目了然。缺少角色和上下文会产出需要重写的通用答案。缺少约束条件会增加幻觉风险和偏离品牌的输出。缺少输出格式意味着结果无法被直接解析或复制使用。5模块模型同时解决了这三种失效模式，并同样适用于 GPT-4 级别的模型、Claude、Gemini 和本地运行的大型语言模型。',
          ],
        },

        block1: {
          title: '模块一：角色与上下文',
          content: [
            '**角色**告诉模型应采用什么人设或专业身份。**上下文**告诉它所处的情境、领域和受众。它们被归为一组，因为两者作为一对共同发挥作用——角色是模型的身份，上下文是塑造该任务中"优秀"含义的环境。',
            '当你省略角色和上下文时，模型从通用视角作答——对任何特定情境都没有针对性。有了它们，同一个模型就可以变成回答增值税申报问题的资深税务顾问、为19岁受众撰写文案的初级文案策划，或总结季度报告的数据分析师。输出会根据你的实际情境进行校准。',
          ],
          items: [
            '**指定领域：** "你是一名 B2B SaaS 文案策划"比"你是一名写作者"更有效',
            '**包含受众：** "向非技术背景的 CFO 解释这个问题"会约束词汇和细节程度',
            '**锚定专业水平：** "扮演一名资深安全工程师"与"扮演一名安全工程师"会产出不同的结果',
            '**在重要时说明情境：** "你正在审阅初稿"与"你正在从头写作"会改变模型的处理方式',
          ],
        },

        block1Link: {
          content: '要了解角色提示如何随着模型遵循指令能力的提升而演变，请参阅 [Fundamentals: From GPT-2 to Today: How Prompt Engineering Evolved]。',
        },

        block2: {
          title: '模块二：任务/指令',
          content: [
            '**任务/指令模块是对你希望模型执行什么的明确陈述。** 这是最重要的模块——其他所有模块都是为它服务的。清晰、具体、可验证的指令将歧义降至近乎为零。模糊的指令是所有模型和使用场景中 AI 输出质量低下的最大单一原因。',
            '当前最佳实践指南强调使任务具有可执行性和可观察性：使用动词、说明交付物，并尽可能描述成功标准。"写一段摘要"是一个任务。"用3个要点总结以下文章，每个要点不超过20个字"是一个具有可验证输出的任务。两者在输出质量上的差异相当显著。',
          ],
          items: [
            '❌ 弱：「写一些关于这个话题的内容」',
            '✅ 强：「为非技术背景的管理者撰写一篇150字的 LinkedIn 帖子，介绍提示词工程的好处」',
            '❌ 弱：「分析这些数据」',
            '✅ 强：「找出该数据集中的前3大趋势，并按收入影响从高到低排序」',
          ],
        },

        block2Link: {
          content: '指令与是否提供示例直接相关——请参阅 [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?] 了解每种方法的最佳使用时机。',
        },

        block3: {
          title: '模块三：输入与示例',
          content: [
            '**输入**是模型需要处理的实际数据、文本或材料。**示例**是展示正确响应形态的示例输入/输出对。两者关注点不同：输入是当前任务的原始材料，示例是塑造模型执行方式的教学信号。',
            '包含1–3个示例（少样本提示）是固定输出格式和语气最可靠的单一技术。当你展示给模型一个好答案的样子时，它会匹配这个模式，而非仅从任务描述中推断。这在需要精确度的专业格式、统一语气和结构化输出中最为重要。',
          ],
          items: [
            '**何时添加示例：** 专业格式、统一语气要求、结构化输出、领域特定词汇',
            '**何时保持零样本：** 简单事实问题、广泛探索，以及你主动希望采用模型默认响应风格时',
            '**使示例多样化：** 相同的示例只能教会一种模式——覆盖你实际预期的真实输入范围',
            '**使用真实数据：** 真实样本优于理想化样本——模型从你实际展示的内容中学习',
          ],
        },

        block3Link: {
          content: '有关何时使用示例、何时省略的完整分析，请参阅 [Techniques: Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?]。',
        },

        block4: {
          title: '模块四：约束条件',
          content: [
            '**约束条件是模型必须遵守的规则：它必须做什么，以及不能做什么。** 它们包括长度限制、禁止的话题或词语、必须引用的来源、品牌声音规范、安全边界和格式限制。约束条件是最常被遗漏的模块——而它的缺失是导致幻觉事实、偏离品牌的语言以及格式错误输出的主要原因。',
            '在现有提示词中添加一个范围明确的约束条件，往往是你能做出的最高杠杆改变。"不要编造统计数据"能大幅降低幻觉风险。"绝不超过100字"强制要求简洁。"仅使用所提供文本中的信息"将输出锚定在源材料中，并彻底消除该任务中的捏造。',
          ],
          items: [
            '**长度约束：** "最多150字"、"不超过5个要点"',
            '**来源约束：** "仅使用附件文档中的事实"、"不要引用无法核实的来源"',
            '**语气和声音约束：** "以正式的第三人称语气写作——不用缩写，不用俚语"',
            '**禁止内容：** "不要提及竞争对手产品"、"不要超出数据所示范围进行推测"',
            '**安全约束：** "如果问题无法从所提供的上下文中得到解答，请如实说明——不要编造答案"',
          ],
        },

        block4Links: {
          content: '有关使用排除项来塑造输出的技术，请参阅 [Techniques: Negative Prompting: Tell the AI What NOT to Do]。有关不受约束的提示词为何更容易产生幻觉，请参阅 [Fundamentals: AI Hallucinations: Why AI Makes Things Up — and How to Stop Them]。',
        },

        block5: {
          title: '模块五：输出格式',
          content: [
            '**输出格式指定模型应产出的答案的确切形态。** 这个模块决定了输出是直接可用，还是在使用前需要重新格式化。对于自动化流水线，未指定输出格式意味着脆弱且不一致的解析。对于 GEO（生成式引擎优化），结构化输出更有可能被 AI 搜索引擎逐字引用，因为结构化答案更易于程序化提取。',
            '输出格式模块可以指定文件格式（JSON、Markdown、CSV）、结构（表格、项目符号列表、编号步骤）、长度以及章节标签。你描述得越精确，输出所需的编辑工作就越少。',
          ],
          items: [
            '**JSON：** "以 JSON 对象形式返回结果，包含以下键：title、summary、tags"',
            '**Markdown 项目符号：** "将每项发现列为一个要点，以粗体术语开头，后跟一句解释"',
            '**表格：** "将比较结果格式化为 Markdown 表格，列名为：功能、选项A、选项B"',
            '**结构化散文：** "对每个主要观点使用标题，每个章节最多3句话"',
          ],
        },

        block5Link: {
          content: '有关不同模型中 JSON 模式和结构化输出的完整指南，请参阅 [Techniques: Structured Output & JSON Mode: Get AI to Return Usable Data]。',
        },

        template: {
          title: '将5个模块组合在一起：一个简单模板',
          content: '下方模板展示了所有5个模块按顺序组合用于单个领域中立任务的示例。每个部分都有标注，方便你看清每个模块的起止位置。替换各部分的内容即可将其适配到任何领域。',
          items: [
            '**[角色与上下文]** 你是一名资深业务分析师。受众是一个正在审阅季度运营报告的非技术背景高管团队。',
            '**[任务/指令]** 总结以下报告的主要发现。重点关注目标完成情况，找出两大风险，并为每项风险提出一个纠正措施建议。',
            '**[输入]** [在此粘贴报告文本]',
            '**[约束条件]** 仅使用报告中的信息。不得推测。总字数不超过200字。使用简明语言——不用专业术语。',
            '**[输出格式]** 以三个部分返回响应："主要发现"（3个要点）、"主要风险"（2个要点）、"建议措施"（2个要点，每项风险各一条）。',
          ],
        },

        templateNote: {
          content: '该模板适用于 GPT-4o、Claude、Gemini 以及通过 Ollama 或 LM Studio 运行的本地大型语言模型。模块顺序是建议，而非硬性规定——但将角色与上下文置于首位、输出格式置于末位，是在所有主流模型上最通用且可靠的排列方式。',
        },

        frameworks: {
          title: '这些模块如何映射到框架和工具',
          content: [
            '流行的提示词工程框架是以不同名称和顺序排列同一五个构建模块的具体方式。CRAFT、CO-STAR 和 SPECS 都直接映射到这五模块模型。先理解这些模块，意味着你可以应用任何框架，而无需从头记忆其特定术语。',
            '下表展示了每个构建模块如何对应三个广泛使用的框架中的相应字段：',
          ],
          columns: ['构建模块', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { '构建模块': '角色与上下文', 'CRAFT': '上下文 / 角色', 'CO-STAR': '上下文 + 受众', 'SPECS': '情境' },
            { '构建模块': '任务/指令', 'CRAFT': '行动', 'CO-STAR': '目标', 'SPECS': '问题 / 任务' },
            { '构建模块': '输入与示例', 'CRAFT': '事实 / 示例', 'CO-STAR': '示例（可选）', 'SPECS': '示例' },
            { '构建模块': '约束条件', 'CRAFT': '限制', 'CO-STAR': '语气 + 风格', 'SPECS': '约束' },
            { '构建模块': '输出格式', 'CRAFT': '格式', 'CO-STAR': '响应格式', 'SPECS': '风格' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum 内置了9个框架，根据任务类型以不同配置预填这些模块。有关框架专属指南，请参阅 [Frameworks: Which Prompt Framework Should You Use?]、[Frameworks: CRAFT Framework] 和 [Frameworks: CO-STAR Framework]。',
        },

        mistakes: {
          title: '使用5个模块时的常见错误',
          items: [
            '**完全缺少角色：** 模型从通用视角作答——即使只用一句话，也要指定领域和专业水平',
            '**上下文模糊：** "为我的受众写作"对模型毫无信息量——明确说明受众、他们的知识水平，以及他们将如何使用这份输出',
            '**无法验证的指令：** "让它更好"没有可观察的成功标准——替换为具体、可量化的任务',
            '**对幻觉没有约束：** 没有"仅使用提供的信息"，模型会用听起来合理的捏造内容填补空白',
            '**未指定输出格式：** 模型自行选择结构——这会在不同次运行间变化，并破坏下游流程',
            '**将所有内容混入一个段落：** 混为一块的文本更难让模型解析——为每个模块使用换行或明确标签',
            '**过于相似的示例：** 三个完全相同的示例只能教会一种模式——使其多样化，以覆盖真实的输入范围',
          ],
        },

        faq: {
          title: 'FAQ：提示词的构建模块',
          faqs: [
            {
              q: '每个提示词真的都需要全部5个模块吗？',
              a: '不需要。简单、明确的任务通常只需要任务/指令和输出格式。当领域或受众重要时，添加角色与上下文。当失效代价高昂时，添加约束条件。当格式精度至关重要时，添加示例。从最精简开始，只在输出达不到你的标准时才添加模块。',
            },
            {
              q: '角色比上下文更重要，还是反过来？',
              a: '两者作为一对共同发挥作用——单独任何一个都不够。没有上下文的角色会产出通用的专家模式输出。没有角色的上下文会产出了解情境但语气不一致的输出。对于大多数任务，将两者结合在一句话中效果很好："你是一名 [角色]，正与 [受众] 合作处理 [领域任务]。"',
            },
            {
              q: '提示词能简短同时包含全部5个模块吗？',
              a: '可以。每个模块都可以用一句话表达。一个完整的五模块提示词可以在100字以内。简短不是问题——模糊才是。一个包含全部五个要素的简短、精确的提示词，始终优于一个冗长、漫无目的且不包含任何要素的提示词。',
            },
            {
              q: '上下文和示例有什么区别？',
              a: '上下文描述情境、领域和受众——这是为任务定框架的背景信息。示例是展示给模型正确答案样貌的示例输入/输出对。上下文告诉模型它在哪里；示例向它展示要产出什么。两者都有用，但服务于完全不同的目的。',
            },
            {
              q: '如果我在使用 CRAFT 或 CO-STAR 这样的框架，约束条件应该放在哪里？',
              a: '每个主要框架都有一个映射到约束条件的字段——CRAFT 中的"限制"、CO-STAR 中的"语气与风格"、SPECS 中的"约束"。如果你使用的框架没有明确的约束字段，在末尾添加一个单独的"禁止"部分——所有模型都能可靠处理这种方式。',
            },
            {
              q: '如果只是问一个简单问题，输出格式重要吗？',
              a: '对于对话性问题，指定格式是可选的。但对于任何将在下游使用的输出——粘贴到文档中、被代码解析、发布，或在团队成员之间复用——指定格式至关重要。这是获得结果和获得可用结果之间的区别。',
            },
          ],
        },
      },
    },
  };
