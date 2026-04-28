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
      intro: '**Every effective AI prompt needs five building blocks: Role & Context, Task / Instruction, Input & Examples, Constraints, and Output Format — miss any one and outputs become inconsistent, off-format, or hallucinated.**',
      metaDescription: 'Role, Task, Examples, Constraints, and Output Format — 5 building blocks that explain every reliable AI output. Miss one, and results become inconsistent.',
      publishDate: '2026-03-01',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Structure',
      audience: 'Developers and non-technical users writing AI prompts',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
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
        { label: 'How to Combine All 5 Blocks in One Prompt', anchor: '#prompt-template' },
        { label: 'How the 5 Blocks Map to CRAFT, CO-STAR, and SPECS', anchor: '#frameworks-and-tools' },
        { label: 'Common Mistakes With Prompt Building Blocks', anchor: '#common-mistakes' },
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
        keywords: ['prompt structure', 'prompt building blocks', 'role and context', 'output format', 'prompt constraints', 'few-shot examples', 'prompt engineering', 'GPT-5.5', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-5.5' },
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

        badVsGood: {
          id: 'bad-vs-good-example',
          content: [
            '**Without the 5 blocks (vague):**\n> Summarize this report.',
            '**With all 5 blocks (complete):**\n> You are a senior business analyst (Role). Summarize the key findings from the Q3 report below (Task). [Report text] (Input). Use only facts from the report; max 200 words; formal tone (Constraints). Return 3 bullet points under "Key Findings" (Output Format).',
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
            'The business case is straightforward. Missing role and context produces generic answers that need rewriting. Missing constraints increases hallucination risk and off-brand output. Missing output format means results that cannot be parsed or copy-pasted directly. The 5-block model addresses all three failure modes at once, and applies equally to GPT-5, Claude 4.7, Gemini 3 Pro, and locally-run LLMs.',
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
          title: 'How Do You Combine All 5 Blocks in One Prompt?',
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
          content: 'This template works on GPT-5, Claude 4.7, Gemini 3 Pro, and local LLMs via Ollama or LM Studio. The block order is a recommendation, not a rigid rule — but placing Role & Context first and Output Format last is the most common and reliable arrangement across all major models.',
        },

        frameworks: {
          id: 'frameworks-and-tools',
          title: 'How Do the 5 Blocks Map to CRAFT, CO-STAR, and SPECS?',
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
          title: 'What Are the Most Common Mistakes With Prompt Building Blocks?',
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
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — Comprehensive catalog of prompt design patterns including structured and role-based techniques directly applicable to the 5-block model.',
          ],
        },

      },
    },

    de: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'Die 5 Bausteine eines jeden Prompts',
      seoTitle: 'Die 5 Bausteine eines Prompts: KI-Prompts strukturieren (2026)',
      intro: '**Jeder effektive KI-Prompt benötigt fünf Bausteine: Rolle & Kontext, Aufgabe / Anweisung, Eingabe & Beispiele, Einschränkungen und Ausgabeformat — fehlt einer, werden Ergebnisse inkonsistent, falsch formatiert oder halluziniert.**',
      metaDescription: 'Rolle, Aufgabe, Beispiele, Einschränkungen, Ausgabeformat — 5 Bausteine für zuverlässige KI-Ausgaben. Fehlt einer, werden Ergebnisse inkonsistent.',
      publishDate: '2026-03-01',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt-Struktur',
      audience: 'Entwickler und Nicht-Techniker, die KI-Prompts schreiben',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
      next_refresh_due: '2026-09-01',
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Was sind die 5 Bausteine?', anchor: '#what-are-the-5-building-blocks' },
        { label: 'Warum sind diese 5 Bausteine wichtig?', anchor: '#why-building-blocks-matter' },
        { label: 'Block 1: Rolle & Kontext', anchor: '#block-1-role-context' },
        { label: 'Block 2: Aufgabe / Anweisung', anchor: '#block-2-task-instruction' },
        { label: 'Block 3: Eingabe und Beispiele', anchor: '#block-3-input-examples' },
        { label: 'Block 4: Einschränkungen', anchor: '#block-4-constraints' },
        { label: 'Block 5: Ausgabeformat', anchor: '#block-5-output-format' },
        { label: 'Wie kombiniert man alle 5 Bausteine zusammen?', anchor: '#prompt-template' },
        { label: 'Wie mappen die 5 Bausteine auf CRAFT, CO-STAR und SPECS?', anchor: '#frameworks-and-tools' },
        { label: 'Häufigste Fehler mit Bausteinstrukturen', anchor: '#common-mistakes' },
        { label: 'Wie man einen Prompt erstellt (Schritt für Schritt)', anchor: '#how-to-build-a-prompt' },
        { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Die 5 Bausteine eines jeden Prompts',
        description: 'Die 5 Bausteine eines jeden Prompts: Rolle & Kontext, Aufgabe, Eingabe & Beispiele, Einschränkungen und Ausgabeformat. Mit diesen fünf Komponenten wird jeder KI-Prompt zuverlässig und wiederholbar.',
        datePublished: '2026-03-01',
        dateModified: '2026-04-28',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs?lang=de',
        inLanguage: 'de',
        proficiencyLevel: 'Beginner',
        keywords: ['Prompt-Struktur', 'Prompt-Bausteine', 'Rolle und Kontext', 'Ausgabeformat', 'Prompt-Einschränkungen', 'Few-Shot-Beispiele', 'Prompt Engineering', 'GPT-5', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-5' },
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
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Brauche ich wirklich alle 5 Bausteine in jedem Prompt?',
            acceptedAnswer: { '@type': 'Answer', text: 'Nein. Einfache, eindeutige Aufgaben benötigen oft nur eine Aufgabe / Anweisung und ein Ausgabeformat. Rolle & Kontext hinzufügen, wenn Bereich oder Zielgruppe relevant sind. Einschränkungen hinzufügen, wenn Fehler kostspielig sind. Beispiele hinzufügen, wenn Formatpräzision kritisch ist. Minimal beginnen und Bausteine nur hinzufügen, wenn die Ausgabe den eigenen Standard nicht erfüllt.' },
          },
          {
            '@type': 'Question',
            name: 'Ist Rolle wichtiger als Kontext oder umgekehrt?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sie funktionieren als Paar – keines reicht allein aus. Rolle ohne Kontext liefert generische Experten-Ausgaben. Kontext ohne Rolle liefert situationsbewusste, aber tonal inkonsistente Ausgaben. Für die meisten Aufgaben funktioniert ein Satz, der beides kombiniert, gut: „Du bist ein [Rolle], der mit [Zielgruppe] an [Domänenaufgabe] arbeitet."' },
          },
          {
            '@type': 'Question',
            name: 'Kann ich Prompts kurz halten und trotzdem alle 5 Bausteine einschließen?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. Jeder Baustein kann in einem einzigen Satz ausgedrückt werden. Ein vollständiger Fünf-Bausteine-Prompt kann unter 100 Wörtern liegen. Kürze ist nicht das Problem – Vagheit ist es. Ein kurzer, präziser Prompt mit allen fünf Elementen übertrifft konsistent einen langen, weitschweifigen ohne keines davon.' },
          },
          {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen Kontext und Beispielen?',
            acceptedAnswer: { '@type': 'Answer', text: 'Kontext beschreibt die Situation, den Bereich und die Zielgruppe – es sind Hintergrundinformationen, die die Aufgabe rahmen. Beispiele sind Muster-Eingabe/Ausgabe-Paare, die dem Modell zeigen, wie eine korrekte Antwort aussieht. Kontext sagt dem Modell, wo es ist; Beispiele zeigen ihm, was es produzieren soll.' },
          },
          {
            '@type': 'Question',
            name: 'Wo passen Einschränkungen hin, wenn ich ein Framework wie CRAFT oder CO-STAR verwende?',
            acceptedAnswer: { '@type': 'Answer', text: 'Jedes wichtige Framework hat ein Feld, das auf Einschränkungen abbildet – „Restrictions" in CRAFT, „Tone & Style" in CO-STAR, „Constraints" in SPECS. Wenn das eigene Framework kein explizites Einschränkungsfeld hat, die Einschränkungen am Ende als separaten „Nicht"-Abschnitt hinzufügen – alle Modelle handhaben dies zuverlässig.' },
          },
          {
            '@type': 'Question',
            name: 'Spielt das Ausgabeformat eine Rolle, wenn ich nur eine einfache Frage stelle?',
            acceptedAnswer: { '@type': 'Answer', text: 'Bei Gesprächsfragen ist das Festlegen des Formats optional. Für jede Ausgabe, die nachgelagert verwendet wird – in ein Dokument eingefügt, von Code verarbeitet, veröffentlicht oder von Teammitgliedern wiederverwendet – ist das Festlegen des Formats unerlässlich. Es ist der Unterschied zwischen einem Ergebnis und einem nutzbaren Ergebnis.' },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von PromptQuorum die DSGVO beachten?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. PromptQuorum ist DSGVO-konform, insbesondere wenn Sie lokale Inferenzen mit On-Premise-Modellen über Ollama oder LM Studio nutzen. Lokale Modelle halten Ihre Daten in Ihrer Kontrolle und erfüllen Anforderungen nach Datenschutz und BSI-Grundschutz-Katalogen für Mittelstandsunternehmen. Für Cloud-Instanzen — immer Datenverarbeitungsverträge (DPAs) mit dem Provider verhandeln.' },
          },
          {
            '@type': 'Question',
            name: 'Ist PromptQuorum für den deutschen Mittelstand geeignet?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. PromptQuorum ist speziell für deutsche Mittelstandsunternehmen entwickelt worden und erfüllt BSI- und IT-Sicherheitsstandards. Mit lokalen Modellen erhalten Sie volle Datensouvränität, Offline-Betrieb, und Anpassung an Branchenstandards (Finanz, Medizin, Recht). Die Kostenstruktur ist auch für KMUs geeignet — skaliert mit Ihren Anforderungen ohne überproportionale Cloud-Ausgaben.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'de',
        name: 'Wie man einen Prompt mit den 5 Bausteinstrukturen erstellt',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Rolle & Kontext setzen', text: 'Sagen Sie, wer das Modell ist und wer es unterstützt. Ein Satz: "Du bist ein [rolle] der [audience] hilft."' },
          { '@type': 'HowToStep', position: 2, name: 'Schreiben Sie die Aufgabe / Anweisung', text: 'Sagen Sie die genaue Aktion, die das Modell durchführen soll, mit einem Verb. "Zusammenfassen", "Klassifizieren", "Übersetzen", "Generieren".' },
          { '@type': 'HowToStep', position: 3, name: 'Fügen Sie Eingabe & Beispiele hinzu', text: 'Geben Sie die Daten oder Inhalte ein, mit denen das Modell arbeitet. Fügen Sie ein oder zwei Beispiele hinzu, wenn das Format präzise sein muss.' },
          { '@type': 'HowToStep', position: 4, name: 'Setzen Sie Einschränkungen', text: 'Listen Sie auf, was das Modell nicht tun darf, Längenbeschränkungen und alle Ausgaberegeln.' },
          { '@type': 'HowToStep', position: 5, name: 'Geben Sie das Ausgabeformat an', text: 'Definieren Sie die exakte Form der Ausgabe: JSON, Aufzählungsliste, Tabelle, Absatz, nummerierte Schritte.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'de',
        name: '5 Bausteine, die jeder KI-Prompt braucht',
        description: 'Die fünf Strukturkomponenten, die jeder zuverlässige KI-Prompt enthält: Rolle, Aufgabe, Eingabe & Beispiele, Einschränkungen und Ausgabeformat.',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Baustein 1: Rolle & Kontext', description: 'Teilt dem Modell mit, wer es ist und wer es unterstützt. Setzt Domänen-Expertise und Publikums-Bewusstsein.' },
          { '@type': 'ListItem', position: 2, name: 'Baustein 2: Aufgabe / Anweisung', description: 'Die explizite Aussage, was das Modell tun muss, mit einem klaren Aktionsverb.' },
          { '@type': 'ListItem', position: 3, name: 'Baustein 3: Eingabe & Beispiele', description: 'Die Daten oder Inhalte, mit denen das Modell arbeitet, plus optionale Beispiele, die zeigen, wie korrekte Ausgaben aussehen.' },
          { '@type': 'ListItem', position: 4, name: 'Baustein 4: Einschränkungen', description: 'Regeln, die das Modell befolgen muss — Längenlimits, verbotener Inhalt, Stilbeschränkungen.' },
          { '@type': 'ListItem', position: 5, name: 'Baustein 5: Ausgabeformat', description: 'Die exakte Struktur der Ausgabe: JSON, Aufzählungsliste, Tabelle, Fließtext-Absatz oder nummerierte Schritte.' },
        ],
      },
      sections: {

        definition: {
          id: 'what-are-the-5-building-blocks',
          title: 'Was sind die 5 Bausteine eines Prompts?',
          content: [
            '**Die 5 Bausteine, die jeder Prompt benötigt, sind: Rolle & Kontext, Aufgabe / Anweisung, Eingabe & Beispiele, Einschränkungen und Ausgabeformat.** Diese fünf Komponenten sind die Mindeststruktur, die einen zuverlässigen, wiederholbaren Prompt von einer vagen Frage unterscheidet, die inkonsistente Ergebnisse liefert.',
            'Jeder Baustein löst einen anderen Fehlertyp. Rolle & Kontext sagt dem Modell, wer es ist und in welcher Situation es sich befindet. Aufgabe / Anweisung sagt ihm genau, was zu tun ist. Eingabe & Beispiele geben ihm das Rohmaterial und das Lernmuster. Einschränkungen setzen die Regeln. Ausgabeformat legt die Form der Antwort fest. Zusammen lassen sie dem Modell nichts mehr zum Raten übrig.',
          ],
        },

        badVsGood: {
          id: 'bad-vs-good-example',
          content: [
            '**Ohne die 5 Bausteine (vag):**\n> Fasse diesen Bericht zusammen.',
            '**Mit allen 5 Bausteinen (vollständig):**\n> Du bist ein leitender Business-Analyst (Rolle). Fasse die wichtigsten Erkenntnisse aus dem Q3-Bericht unten zusammen (Aufgabe). [Berichtstext] (Eingabe). Nutze nur Fakten aus dem Bericht; max. 200 Wörter; formaler Ton (Einschränkungen). Gib 3 Aufzählungspunkte unter "Wichtigste Erkenntnisse" zurück (Ausgabeformat).',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            'Rolle & Kontext: Dem Modell sagen, wer es ist und in welchem Bereich es tätig ist',
            'Aufgabe / Anweisung: Genau angeben, was das Modell produzieren soll — spezifisch und überprüfbar',
            'Eingabe & Beispiele: Die Rohdaten und Beispiel-Eingabe/Ausgabe-Paare bereitstellen, die das Modell benötigt',
            'Einschränkungen: Die Regeln festlegen — was das Modell tun muss und was nicht',
            'Ausgabeformat: Die genaue Form der Antwort festlegen — JSON, Aufzählungspunkte, Tabelle oder Fließtext',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: 'Warum sind diese 5 Bausteine wichtig?',
          content: [
            'Das Fünf-Bausteine-Modell spiegelt den konvergierten Konsens aus Prompt-Engineering-Anleitungen von OpenAI, Google, Anthropic und unabhängigen Praktikern wider. Rolle, Anweisungen, Beispiele, Einschränkungen und Ausgabeformat erscheinen — unter verschiedenen Namen — in jedem wichtigen Framework, das seit 2023 veröffentlicht wurde. Das ist kein Zufall: Es sind die Mindestinformationen, die ein probabilistisches Modell benötigt, um ein nützliches, konsistentes Ergebnis zu liefern.',
            'Der geschäftliche Nutzen ist eindeutig. Fehlende Rolle und Kontext liefern generische Antworten, die umgeschrieben werden müssen. Fehlende Einschränkungen erhöhen das Halluzinationsrisiko und erzeugen markenfremde Ausgaben. Fehlendes Ausgabeformat bedeutet Ergebnisse, die nicht direkt verwendet oder kopiert werden können. Das 5-Bausteine-Modell adressiert alle drei Fehlertypen gleichzeitig und gilt gleichermaßen für GPT-5, Claude 4.7, Gemini 3 Pro und lokal betriebene LLMs.',
            'Für deutsche Unternehmen unter DSGVO und BSI-Grundschutz-Standards: Lokale Inferenzen mit Ollama oder LM Studio erfüllen Datenschutzanforderungen vollständig, während Sie gleichzeitig die Effizienz dieser strukturierten Prompts nutzen.',
          ],
        },

        block1: {
          id: 'block-1-role-context',
          title: 'Was macht der Block Rolle & Kontext?',
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
          content: 'Um zu verstehen, wie sich Rollen-Prompting entwickelt hat, als Modelle immer besser darin wurden, Anweisungen zu befolgen, siehe [How Prompt Engineering Evolved](/prompt-engineering/how-prompt-engineering-evolved?lang=de).',
        },

        block2: {
          id: 'block-2-task-instruction',
          title: 'Was ist der Aufgabe / Anweisung Block?',
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
          content: 'Anweisungen interagieren direkt damit, ob Beispiele bereitgestellt werden – siehe [Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot?lang=de) dafür, wann welcher Ansatz am besten funktioniert.',
        },

        block3: {
          id: 'block-3-input-examples',
          title: 'Wie verbessern Eingabe und Beispiele die Genauigkeit?',
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
          content: 'Für eine vollständige Aufschlüsselung, wann Beispiele verwendet werden und wann sie weggelassen werden, siehe [Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/prompt-engineering/zero-shot-vs-few-shot?lang=de).',
        },

        block4: {
          id: 'block-4-constraints',
          title: 'Was sind Einschränkungen und warum brauchen Prompts sie?',
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
          content: 'Für die Technik, Ausschlüsse zur Gestaltung von Ausgaben zu verwenden, siehe [Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting?lang=de). Warum unkontrollierte Prompts mehr halluzinieren, erklärt [AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=de).',
        },

        block5: {
          id: 'block-5-output-format',
          title: 'Wie steuert das Ausgabeformat, was man erhält?',
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
          content: 'Für einen vollständigen Leitfaden zu JSON-Modus und strukturierter Ausgabe über verschiedene Modelle hinweg, siehe [Structured Output & JSON Mode: Get AI to Return Usable Data](/prompt-engineering/structured-output-and-json-mode?lang=de).',
        },

        template: {
          id: 'prompt-template',
          title: 'Wie kombiniert man alle 5 Bausteine zusammen?',
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
          content: 'Diese Vorlage funktioniert auf GPT-5, Claude 4.7, Gemini 3 Pro und lokalen LLMs über Ollama oder LM Studio. Die Reihenfolge der Bausteine ist eine Empfehlung, keine starre Regel – aber Rolle & Kontext zuerst und Ausgabeformat zuletzt zu platzieren ist die häufigste und zuverlässigste Anordnung über alle wichtigen Modelle hinweg.',
        },

        frameworks: {
          id: 'frameworks-and-tools',
          title: 'Wie mappen die 5 Bausteine auf CRAFT, CO-STAR und SPECS?',
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
          content: 'PromptQuorum enthält 9 eingebaute Frameworks, die diese Bausteine je nach Aufgabentyp in verschiedenen Konfigurationen vorausfüllen. Für framework-spezifische Leitfäden, siehe [Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use?lang=de), [CRAFT Framework](/prompt-engineering/craft-framework?lang=de) und [CO-STAR Framework](/prompt-engineering/co-star-framework?lang=de).',
        },

        mistakes: {
          id: 'common-mistakes',
          title: 'Was sind die häufigsten Fehler mit Prompt-Bausteinstrukturen?',
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

        howToStart: {
          id: 'how-to-build-a-prompt',
          title: 'Wie man einen Prompt erstellt (Schritt für Schritt)',
          numberedItems: [
            '**Rolle & Kontext setzen:** Öffnen Sie mit wer das Modell ist und die Domäne, in der es tätig ist. Beispiel: „Du bist ein erfahrener Steuerberater, der einen kleinen Geschätsinhaber in Deutschland unterstützt." Ohne dies antwortet das Modell aus einer generischen Perspektive.',
            '**Schreiben Sie die Aufgabe / Anweisung:** Sagen Sie genau, was produziert werden soll — spezifisch und überprüfbar. „Fasse die wichtigsten Umsatzsteuerpflichten in 200 Wörtern zusammen" ist besser als „erzähle mir von Umsatzsteuer."',
            '**Fügen Sie Eingabe & Beispiele hinzu:** Geben Sie die Rohdaten an und mindestens ein Beispiel des korrekten Ausgabeformats. Ein gut gewähltes Beispiel reduziert Inkonsistenz mehr als jede andere Einzeltechnik.',
            '**Definieren Sie Einschränkungen:** Listen Sie auf, was das Modell nicht tun darf, die Längenbegrenzung und die Tonregeln. Beispiel: „Geben Sie keinen Rat für Jurisdiktionen außerhalb Deutschlands. Maximum 200 Wörter. Formaler Ton."',
            '**Geben Sie das Ausgabeformat an:** Sagen Sie die exakte Form der Antwort — JSON-Objekt, 3-Punkt-Zusammenfassung, Tabelle oder Fließtext-Absatz. Diese wegzulassen ist die häufigste Ursache für nicht nutzbare KI-Ausgaben.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
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
              a: 'Kontext beschreibt die Situation, den Bereich und die Zielgruppe – es sind Hintergrundinformationen, die die Aufgabe rahmen. Beispiele sind Muster-Eingabe/Ausgabe-Paare, die dem Modell zeigen, wie eine korrekte Antwort aussieht. Kontext sagt dem Modell, wo es ist; Beispiele zeigen ihm, was es produzieren soll.',
            },
            {
              q: 'Wo passen Einschränkungen hin, wenn ich ein Framework wie CRAFT oder CO-STAR verwende?',
              a: 'Jedes wichtige Framework hat ein Feld, das auf Einschränkungen abbildet – „Restrictions" in CRAFT, „Tone & Style" in CO-STAR, „Constraints" in SPECS. Wenn das eigene Framework kein explizites Einschränkungsfeld hat, die Einschränkungen am Ende als separaten „Nicht"-Abschnitt hinzufügen – alle Modelle handhaben dies zuverlässig.',
            },
            {
              q: 'Spielt das Ausgabeformat eine Rolle, wenn ich nur eine einfache Frage stelle?',
              a: 'Bei Gesprächsfragen ist das Festlegen des Formats optional. Für jede Ausgabe, die nachgelagert verwendet wird – in ein Dokument eingefügt, von Code verarbeitet, veröffentlicht oder von Teammitgliedern wiederverwendet – ist das Festlegen des Formats unerlässlich. Es ist der Unterschied zwischen einem Ergebnis und einem nutzbaren Ergebnis.',
            },
            {
              q: 'Muss ich bei der Verwendung von PromptQuorum die DSGVO beachten?',
              a: 'Ja. PromptQuorum ist DSGVO-konform, insbesondere wenn Sie lokale Inferenzen mit On-Premise-Modellen über Ollama oder LM Studio nutzen. Lokale Modelle halten Ihre Daten in Ihrer Kontrolle und erfüllen Anforderungen nach Datenschutz und BSI-Grundschutz-Katalogen für Mittelstandsunternehmen. Für Cloud-Instanzen — immer Datenverarbeitungsverträge (DPAs) mit dem Provider verhandeln.',
            },
            {
              q: 'Ist PromptQuorum für den deutschen Mittelstand geeignet?',
              a: 'Ja. PromptQuorum ist speziell für deutsche Mittelstandsunternehmen entwickelt worden und erfüllt BSI- und IT-Sicherheitsstandards. Mit lokalen Modellen erhalten Sie volle Datensouvränität, Offline-Betrieb, und Anpassung an Branchenstandards (Finanz, Medizin, Recht). Die Kostenstruktur ist auch für KMUs geeignet — skaliert mit Ihren Anforderungen ohne überproportionale Cloud-Ausgaben.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Ressourcen',
          items: [
            '[How Prompt Engineering Evolved](/prompt-engineering/how-prompt-engineering-evolved?lang=de) — Von frühen Instruction-Following-Modellen zu heutigen Reasoning-fähigen Systemen: wie sich Prompting-Techniken mit Modell-Kapazitäten entwickelt haben.',
            '[Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot?lang=de) — Wann Beispiele verwendet werden und wann sie weggelassen werden: Auswahl des richtigen Prompting-Ansatzes für die Aufgabe.',
            '[Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting?lang=de) — Einschränkungen in Aktion: wie Ausschlüsse Ausgaben zuverlässiger gestalten als Einschlüsse.',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=de) — Warum Einschränkungen und Beispiele wichtig sind: die Grundursachen von Halluzinationen und evidenzbasierte Abwehrmaßnahmen.',
            '[Structured Output & JSON Mode](/prompt-engineering/structured-output-and-json-mode?lang=de) — Präzise Ausgabeformate angeben: JSON-Modus, Markdown-Tabellen und andere strukturierte Ansätze über Modelle hinweg.',
            '[Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use?lang=de) — Vergleich von CRAFT, CO-STAR, SPECS und anderen: Wahl eines Frameworks, das zu Ihrem Anwendungsfall passt.',
          ],
        },

        sources: {
          id: 'sources',
          title: 'Quellenangaben & Weiterführendes',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Offizielle Prompt-Engineering-Anleitung von OpenAI, einschließlich Best Practices für rollenbasierte und strukturierte Prompts.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — Sicherheitsimplikationen unstrukturierter Prompts und Empfehlungen für Einschränkungen.',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — Umfassender Katalog von Prompt-Design-Mustern, einschließlich strukturierter und rollenbasierter Techniken, die direkt auf das Fünf-Bausteine-Modell anwendbar sind.',
          ],
        },

      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Fondamentaux',
      title: 'Les 5 éléments fondamentaux de tout prompt',
      seoTitle: 'Les 5 éléments fondamentaux d\'un prompt : structure tout prompt IA (2026)',
      intro: '**Tout prompt IA efficace nécessite cinq éléments : Rôle & Contexte, Tâche / Instruction, Entrée & Exemples, Contraintes et Format de sortie — en oublier un seul, et les résultats deviennent incohérents, mal formatés ou hallucinations.**',
      metaDescription: 'Rôle, Tâche, Exemples, Contraintes et Format de sortie — 5 éléments qui expliquent chaque résultat IA fiable. Manquer un, et les résultats deviennent imprévisibles.',
      publishDate: '2026-03-01',
      readTime: '8 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'Structure de prompt',
      audience: 'Développeurs et utilisateurs non techniques rédigeant des prompts IA',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
      next_refresh_due: '2026-09-01',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce que les 5 éléments fondamentaux ?', anchor: '#what-are-the-5-building-blocks' },
        { label: 'Pourquoi ces 5 éléments sont importants ?', anchor: '#why-building-blocks-matter' },
        { label: 'Élément 1 : Rôle & Contexte', anchor: '#block-1-role-context' },
        { label: 'Élément 2 : Tâche / Instruction', anchor: '#block-2-task-instruction' },
        { label: 'Élément 3 : Entrée & Exemples', anchor: '#block-3-input-examples' },
        { label: 'Élément 4 : Contraintes', anchor: '#block-4-constraints' },
        { label: 'Élément 5 : Format de sortie', anchor: '#block-5-output-format' },
        { label: 'Comment combiner les 5 éléments en un seul prompt', anchor: '#prompt-template' },
        { label: 'Comment les 5 éléments correspondent à CRAFT, CO-STAR et SPECS', anchor: '#frameworks-and-tools' },
        { label: 'Erreurs courantes avec les éléments fondamentaux', anchor: '#common-mistakes' },
        { label: 'Comment construire un prompt (étape par étape)', anchor: '#how-to-build-a-prompt' },
        { label: 'Lectures connexes', anchor: '#related-reading' },
        { label: 'Questions fréquemment posées', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Les 5 éléments fondamentaux de tout prompt',
        description: 'Maîtrisez les 5 éléments fondamentaux de tout prompt : Rôle & Contexte, Tâche, Entrée & Exemples, Contraintes et Format de sortie. Avec ces cinq composantes, tout prompt IA devient fiable et reproductible.',
        datePublished: '2026-03-01',
        dateModified: '2026-04-28',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs?lang=fr',
        inLanguage: 'fr',
        proficiencyLevel: 'Beginner',
        keywords: ['Structure de prompt', 'Éléments de prompt', 'Rôle et contexte', 'Format de sortie', 'Contraintes de prompt', 'Exemples few-shot', 'Ingénierie des prompts', 'GPT-5', 'Claude', 'Gemini'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-5' },
          { '@type': 'Thing', name: 'Anthropic Claude' },
          { '@type': 'Thing', name: 'Google Gemini' },
          { '@type': 'Thing', name: 'PromptQuorum' },
          { '@type': 'Thing', name: 'Framework CO-STAR' },
          { '@type': 'Thing', name: 'Framework CRAFT' },
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
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Ai-je vraiment besoin de tous les 5 éléments dans chaque prompt ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Non. Les tâches simples et sans ambiguïté nécessitent souvent seulement une tâche / instruction et un format de sortie. Ajoutez Rôle & Contexte quand le domaine ou le public compte. Ajoutez Contraintes quand les erreurs sont coûteuses. Ajoutez Exemples quand la précision du format est critique. Commencez minimaliste et n\'ajoutez des éléments que si la sortie ne répond pas à votre standard.' },
          },
          {
            '@type': 'Question',
            name: 'Le Rôle est-il plus important que le Contexte, ou l\'inverse ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ils fonctionnent comme une paire — aucun ne suffit seul. Rôle sans contexte produit une sortie générique de mode expert. Contexte sans rôle produit une sortie consciente de la situation mais tonalement incohérente. Pour la plupart des tâches, une phrase combinant les deux fonctionne bien : « Vous êtes un [rôle] travaillant avec [public] sur [tâche de domaine]. »' },
          },
          {
            '@type': 'Question',
            name: 'Puis-je garder les prompts courts tout en incluant les 5 éléments ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui. Chaque élément peut être exprimé en une seule phrase. Un prompt complet à cinq éléments peut faire moins de 100 mots. La brièveté n\'est pas le problème — le flou l\'est. Un prompt court et précis avec les cinq éléments surpasse systématiquement un long et verbeux sans aucun.' },
          },
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre Contexte et Exemples ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Le contexte décrit la situation, le domaine et le public — c\'est l\'information d\'arrière-plan qui encadre la tâche. Les exemples sont des paires entrée/sortie qui montrent au modèle ce qu\'une réponse correcte ressemble. Le contexte dit au modèle où il est ; les exemples lui montrent ce qu\'il faut produire.' },
          },
          {
            '@type': 'Question',
            name: 'Où les Contraintes s\'ajustent-elles si j\'utilise un framework comme CRAFT ou CO-STAR ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Chaque framework majeur a un champ qui correspond aux contraintes — « Restrictions » dans CRAFT, « Ton & Style » dans CO-STAR, « Contraintes » dans SPECS. Si votre framework n\'a pas de champ de contraintes explicite, ajoutez les contraintes à la fin en tant que section « Ne pas » séparée — tous les modèles gèrent cela de façon fiable.' },
          },
          {
            '@type': 'Question',
            name: 'Le format de sortie importe-t-il si je pose simplement une question simple ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Pour les questions conversationnelles, spécifier le format est optionnel. Pour toute sortie qui sera utilisée en aval — collée dans un document, analysée par code, publiée ou réutilisée entre membres d\'équipe — spécifier le format est essentiel. C\'est la différence entre obtenir un résultat et obtenir un résultat utilisable.' },
          },
          {
            '@type': 'Question',
            name: 'Dois-je respecter la conformité CNIL quand j\'utilise PromptQuorum ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui. PromptQuorum est conforme au RGPD et aux directives de la CNIL. Pour les données sensibles professionnelles (données financières, médicales, juridiques), les inférences locales avec Ollama ou LM Studio gardent vos données sous votre contrôle et satisfont les exigences de conformité CNIL. Pour les instances cloud, négociez toujours des contrats de traitement de données (DPA) avec le prestataire.' },
          },
          {
            '@type': 'Question',
            name: 'PromptQuorum convient-il aux organisations traitant des données sensibles ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui. PromptQuorum a été conçu pour les organisations européennes traitant des données sensibles et respecte les standards de sécurité IT. Avec les modèles locaux, vous obtenez une souveraineté totale des données, un fonctionnement hors ligne et l\'adaptation aux standards sectoriels (Finance, Santé, Juridique). L\'architecture tarifaire est aussi adaptée aux PME — elle se redimensionne selon vos besoins sans frais cloud disproportionnés.' },
          },
          {
            '@type': 'Question',
            name: 'Où trouver des frameworks de prompt reconnus ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Les frameworks populaires comme CRAFT, CO-STAR et SPECS sont des approches méthodiques pour les 5 mêmes éléments sous différents noms. PromptQuorum propose 9 frameworks intégrés qui pré-remplissent ces éléments selon le type de tâche. Comprendre d\'abord les 5 éléments signifie que vous pouvez appliquer n\'importe quel framework sans mémoriser de zéro sa terminologie spécifique.' },
          },
          {
            '@type': 'Question',
            name: 'Ces 5 éléments s\'appliquent-ils à tous les modèles IA ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui. Que vous utilisiez GPT-5, Claude 4.7, Gemini 3 Pro, ou des modèles open-source via Ollama et LM Studio, ces 5 éléments fonctionnent sur tous. La structure minimale varie légèrement en syntaxe, mais le modèle conceptuel — rôle, instruction, exemples, contraintes, format — s\'applique universellement.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'fr',
        name: 'Comment construire un prompt avec les 5 éléments fondamentaux',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Définir Rôle & Contexte', text: 'Dites qui le modèle est et pour qui il travaille. Une phrase : « Vous êtes un [rôle] aidant [public]. »' },
          { '@type': 'HowToStep', position: 2, name: 'Écrire la Tâche / Instruction', text: 'Dites l\'action exacte que le modèle doit effectuer avec un verbe. « Résumer », « Classer », « Traduire », « Générer ».' },
          { '@type': 'HowToStep', position: 3, name: 'Ajouter Entrée & Exemples', text: 'Fournissez les données ou le contenu avec lequel le modèle travaille. Ajoutez un ou deux exemples si le format doit être précis.' },
          { '@type': 'HowToStep', position: 4, name: 'Définir les Contraintes', text: 'Listez ce que le modèle ne doit pas faire, les limites de longueur et les règles de sortie.' },
          { '@type': 'HowToStep', position: 5, name: 'Spécifier le Format de sortie', text: 'Définissez la forme exacte : JSON, liste à puces, tableau, paragraphe ou étapes numérotées.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'fr',
        name: '5 éléments que tout prompt IA a besoin',
        description: 'Les cinq composantes structurelles que contient tout prompt IA fiable : Rôle, Tâche, Entrée & Exemples, Contraintes et Format de sortie.',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Élément 1 : Rôle & Contexte', description: 'Dit au modèle qui il est et pour qui il travaille. Établit l\'expertise du domaine et la conscience du public.' },
          { '@type': 'ListItem', position: 2, name: 'Élément 2 : Tâche / Instruction', description: 'L\'énoncé explicite de ce que le modèle doit faire avec un verbe d\'action clair.' },
          { '@type': 'ListItem', position: 3, name: 'Élément 3 : Entrée & Exemples', description: 'Les données ou le contenu avec lequel le modèle travaille, plus des exemples optionnels montrant ce qu\'une sortie correcte ressemble.' },
          { '@type': 'ListItem', position: 4, name: 'Élément 4 : Contraintes', description: 'Règles que le modèle doit suivre — limites de longueur, contenu interdit, restrictions de style.' },
          { '@type': 'ListItem', position: 5, name: 'Élément 5 : Format de sortie', description: 'La structure exacte de la sortie : JSON, liste à puces, tableau, paragraphe ou étapes numérotées.' },
        ],
      },
      sections: {

        definition: {
          id: 'what-are-the-5-building-blocks',
          title: 'Qu\'est-ce que les 5 éléments fondamentaux d\'un prompt ?',
          content: [
            '**Les 5 éléments que chaque prompt nécessite sont : Rôle & Contexte, Tâche / Instruction, Entrée & Exemples, Contraintes et Format de sortie.** Ces cinq composantes constituent la structure minimale qui distingue un prompt fiable et reproductible d\'une question vague qui produit des résultats incohérents.',
            'Chaque élément résout un type d\'erreur différent. Rôle & Contexte dit au modèle qui il est et dans quelle situation il se trouve. Tâche / Instruction lui dit exactement ce qu\'il faut faire. Entrée & Exemples lui donnent la matière première et le motif d\'apprentissage. Contraintes fixent les règles. Format de sortie définit la forme de la réponse. Ensemble, ils ne laissent plus rien au hasard pour le modèle.',
          ],
        },

        badVsGood: {
          id: 'bad-vs-good-example',
          content: [
            '**Sans les 5 éléments (vague) :**\n> Résume ce rapport.',
            '**Avec tous les 5 éléments (complet) :**\n> Vous êtes un analyste métier principal (Rôle). Résumez les insights clés du rapport Q3 ci-dessous (Tâche). [Texte du rapport] (Entrée). Utilisez uniquement les faits du rapport ; maximum 200 mots ; ton formel (Contraintes). Retournez 3 points clés sous « Insights clés » (Format de sortie).',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: 'Points clés',
          isTldr: true,
          items: [
            'Rôle & Contexte : dire au modèle qui il est et dans quel domaine il travaille',
            'Tâche / Instruction : spécifier exactement ce que le modèle doit produire — spécifique et vérifiable',
            'Entrée & Exemples : fournir les données brutes et les paires entrée/sortie d\'exemple que le modèle doit apprendre',
            'Contraintes : établir les règles — ce que le modèle doit et ne doit pas faire',
            'Format de sortie : définir la forme exacte de la réponse — JSON, points, tableau ou paragraphe',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: 'Pourquoi ces 5 éléments sont importants ?',
          content: [
            'Le modèle des 5 éléments reflète le consensus convergent des guides d\'ingénierie de prompts d\'OpenAI, Google, Anthropic et des praticiens indépendants. Rôle, instructions, exemples, contraintes et format de sortie apparaissent — sous différents noms — dans chaque framework majeur publié depuis 2023. Ce n\'est pas un hasard : ce sont les informations minimales dont un modèle probabiliste a besoin pour produire une sortie utile et cohérente.',
            'Les avantages commerciaux sont évidents. L\'absence de rôle et de contexte produit des réponses génériques qui doivent être réécrites. L\'absence de contraintes augmente le risque d\'hallucination et génère une sortie hors marque. L\'absence de format de sortie signifie des résultats qui ne peuvent pas être utilisés directement ou copiés. Le modèle des 5 éléments adresse les trois types d\'erreurs simultanément et s\'applique également à GPT-5, Claude 4.7, Gemini 3 Pro et aux LLM exécutés localement.',
            'Pour les organisations européennes : les inférences locales avec Ollama ou LM Studio via PromptQuorum respectent pleinement les exigences CNIL et RGPD en gardant vos données en interne tout en bénéficiant de l\'efficacité de ces prompts structurés.',
          ],
        },

        block1: {
          id: 'block-1-role-context',
          title: 'Qu\'est-ce que l\'élément Rôle & Contexte ?',
          content: [
            '**Rôle** dit au modèle quelle persona ou expertise il doit adopter. **Contexte** partage avec lui la situation, le domaine et le public dans lequel il travaille. Ils sont regroupés car ils fonctionnent en paire — Rôle est qui le modèle est, et Contexte est l\'environnement qui définit ce que « bon » signifie pour cette tâche.',
            'Quand Rôle et Contexte sont omis, le modèle répond d\'une perspective générique — utile pour personne en particulier. Avec eux, le même modèle devient un expert-comptable expérimenté répondant à une question sur les déclarations fiscales, un rédacteur junior écrivant pour une audience de 19 ans, ou un analyste de données résumant un rapport trimestriel. La sortie s\'étalonne selon la situation réelle.',
          ],
          items: [
            '**Spécifier le domaine :** « Vous êtes un rédacteur SaaS B2B » est plus utile que « Vous êtes un auteur »',
            '**Inclure le public :** « Expliquez cela à un directeur financier non technique » restreint le vocabulaire et la profondeur',
            '**Ancrer le niveau d\'expertise :** « Agissez comme un ingénieur de sécurité expérimenté » produit une sortie différente d\'« Agissez comme un ingénieur de sécurité »',
            '**Spécifier la situation si pertinente :** « Vous vérifiez un premier brouillon » vs « Vous écrivez à partir de zéro » change l\'approche du modèle',
          ],
        },

        block1Link: {
          content: 'Pour comprendre comment le prompting par rôle a évolué alors que les modèles devenaient meilleurs à suivre les instructions, voir [How Prompt Engineering Evolved](/prompt-engineering/how-prompt-engineering-evolved?lang=fr).',
        },

        block2: {
          id: 'block-2-task-instruction',
          title: 'Qu\'est-ce que l\'élément Tâche / Instruction ?',
          content: [
            '**L\'élément Tâche / Instruction est l\'énoncé explicite de ce que le modèle doit faire.** C\'est l\'élément le plus important — tous les autres éléments le soutiennent. Une instruction claire, spécifique et vérifiable réduit l\'ambiguïté à presque zéro. Une instruction vague est la cause la plus courante de mauvaises sorties IA sur tous les modèles et cas d\'usage.',
            'Les recommandations actuelles de bonnes pratiques soulignent de rendre la tâche action-orientée et observable : utilisez un verbe, nommez le résultat et si possible décrivez un critère de succès. « Écrivez un résumé » est une tâche. « Résumez l\'article suivant en 3 points, chacun moins de 20 mots » est une tâche avec une sortie vérifiable. La différence de qualité est substantielle.',
          ],
          items: [
            '❌ Faible : « Écrivez quelque chose sur ce sujet »',
            '✅ Fort : « Écrivez un post LinkedIn de 150 mots sur les avantages de l\'ingénierie de prompts pour les managers non techniques »',
            '❌ Faible : « Analysez ces données »',
            '✅ Fort : « Identifiez les 3 tendances principales dans ce dataset et classez-les par impact sur le chiffre d\'affaires, le plus élevé d\'abord »',
          ],
        },

        block2Link: {
          content: 'Les instructions interagissent directement avec le fait de fournir des exemples — voir [Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot?lang=fr) pour quand chaque approche fonctionne le mieux.',
        },

        block3: {
          id: 'block-3-input-examples',
          title: 'Comment l\'Entrée et les Exemples améliorent-ils la précision ?',
          content: [
            '**Entrée** sont les données, textes ou matériaux actuels avec lesquels le modèle travaillera. **Exemples** sont des paires entrée/sortie qui montrent comment une réponse correcte ressemble. Ce sont des aspects séparés : Entrée est la matière première pour la tâche actuelle, Exemples sont le motif d\'apprentissage qui façonne l\'exécution par le modèle.',
            'Inclure 1–3 exemples (Few-Shot Prompting) est la technique unique la plus fiable pour établir le format de sortie et le ton. Quand vous montrez au modèle ce qu\'une bonne réponse ressemble, il adapte le motif au lieu de simplement l\'inférer de la description de tâche. C\'est le plus important pour les formats spécialisés, le ton cohérent et les sorties structurées où la précision compte.',
          ],
          items: [
            '**Quand ajouter des exemples :** formats spécialisés, exigences de ton cohérent, sorties structurées, vocabulaire spécifique au domaine',
            '**Quand rester en Zero-Shot :** questions factuelles simples, exploration large, ou quand vous voulez activement le style de réponse standard du modèle',
            '**Faire varier les exemples :** des exemples identiques n\'enseignent qu\'un motif — couvrir la vraie gamme d\'entrées attendues',
            '**Utiliser des données réalistes :** de vrais motifs surpassent les idéalisés — le modèle apprend de ce que vous lui montrez réellement',
          ],
        },

        block3Link: {
          content: 'Pour une ventilation complète de quand utiliser des exemples et quand les omettre, voir [Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/prompt-engineering/zero-shot-vs-few-shot?lang=fr).',
        },

        block4: {
          id: 'block-4-constraints',
          title: 'Qu\'est-ce que l\'élément Contraintes et pourquoi les prompts en ont-ils besoin ?',
          content: [
            '**Les Contraintes sont les règles que le modèle doit suivre : ce qu\'il doit et ne doit pas faire.** Elles incluent les limites de longueur, les sujets ou formulations interdits, les sources requises, les règles de ton de marque, les limites de sécurité et les restrictions de format. Les Contraintes sont l\'élément le plus souvent omis — et son absence est la cause principale des hallucinations factuelles, du langage hors marque et des sorties au mauvais format.',
            'Ajouter une contrainte bien définie est souvent le changement le plus puissant apporté à un prompt existant. « N\'invente pas de statistiques » réduit significativement le risque d\'hallucination. « Ne dépasse jamais 100 mots » force la concision. « Utilise seulement l\'information du texte fourni » ancre la sortie dans le matériau source et élimine complètement la fabrication pour cette tâche.',
          ],
          items: [
            '**Limites de longueur :** « Maximum 150 mots », « Pas plus de 5 points »',
            '**Contraintes de source :** « Utilise seulement les faits du document joint », « Ne cite pas les sources que tu ne peux pas vérifier »',
            '**Contraintes de ton et d\'humeur :** « Écris dans un ton formel, à la troisième personne — pas de contractions, pas d\'argot »',
            '**Contenu interdit :** « Ne mentionne pas les produits concurrents », « Ne spécule pas au-delà de ce que montrent les données »',
            '**Contraintes de sécurité :** « Si la question ne peut pas être répondue par le contexte fourni, dis-le — n\'invente pas une réponse »',
          ],
        },

        block4Links: {
          content: 'Pour la technique d\'utiliser les exclusions pour façonner les sorties, voir [Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting?lang=fr). Pourquoi les prompts incontrôlés hallucinent plus s\'explique dans [AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=fr).',
        },

        block5: {
          id: 'block-5-output-format',
          title: 'Comment l\'élément Format de sortie contrôle-t-il ce que vous obtenez ?',
          content: [
            '**Le Format de sortie définit la forme exacte de la réponse que le modèle produira.** C\'est l\'élément qui détermine si la sortie est immédiatement utilisable ou doit être reformatée avant utilisation. Dans les pipelines automatisés, un format de sortie non spécifié signifie un parsing fragile et incohérent. Pour la GEO, une sortie structurée est plus probable d\'être citée littéralement par les moteurs de recherche IA car les réponses structurées sont plus faciles à extraire programmatiquement.',
            'L\'élément Format de sortie peut spécifier le format de fichier (JSON, Markdown, CSV), la structure (tableau, liste à puces, étapes numérotées), la longueur et l\'étiquetage des sections. Plus vous le spécifiez précisément, moins la sortie a besoin d\'être éditée.',
          ],
          items: [
            '**JSON :** « Retourne le résultat comme un objet JSON avec les clés : title, summary, tags »',
            '**Points Markdown :** « Liste chaque résultat comme un point commençant par un terme en gras suivi d\'une phrase explicative »',
            '**Tableau :** « Formate la comparaison comme un tableau Markdown avec les colonnes : Fonctionnalité, Option A, Option B »',
            '**Texte structuré :** « Structure la réponse avec un en-tête pour chaque point principal et maximum 3 phrases par section »',
          ],
        },

        block5Link: {
          content: 'Pour un guide complet sur le mode JSON et la sortie structurée sur les modèles, voir [Structured Output & JSON Mode: Get AI to Return Usable Data](/prompt-engineering/structured-output-and-json-mode?lang=fr).',
        },

        template: {
          id: 'prompt-template',
          title: 'Comment combiner les 5 éléments ?',
          content: 'Le modèle suivant montre tous les 5 éléments assemblés en ordre pour une tâche neutre de domaine. Chaque section est étiquetée pour que vous voyiez exactement où chaque élément commence et se termine. Remplacez le contenu de chaque section pour l\'adapter à n\'importe quel domaine.',
          items: [
            '**[Rôle & Contexte]** Vous êtes un analyste métier expérimenté. Le public est une équipe dirigeante non technique examinant un rapport d\'opérations trimestriel.',
            '**[Tâche / Instruction]** Résumez les insights clés du rapport suivant. Concentrez-vous sur la performance par rapport aux objectifs, identifiez les deux plus grands risques et recommandez une action corrective pour chaque.',
            '**[Entrée]** [Insérer le texte du rapport ici]',
            '**[Contraintes]** Utilisez seulement l\'information du rapport. Ne spécule pas. Ne dépasse pas 200 mots au total. Écris en langage simple — pas de jargon technique.',
            '**[Format de sortie]** Retourne la réponse en trois sections : « Insights clés » (3 points), « Risques principaux » (2 points), « Actions recommandées » (2 points, un par risque).',
          ],
        },

        templateNote: {
          content: 'Ce modèle fonctionne sur GPT-5, Claude 4.7, Gemini 3 Pro et sur les LLM locaux via Ollama ou LM Studio. L\'ordre des éléments est une recommandation, pas une règle rigide — mais placer Rôle & Contexte en premier et Format de sortie en dernier est le plus courant et fiable sur tous les modèles majeurs.',
        },

        frameworks: {
          id: 'frameworks-and-tools',
          title: 'Comment les 5 éléments correspondent-ils à CRAFT, CO-STAR et SPECS ?',
          content: [
            'Les frameworks populaires d\'ingénierie de prompts sont des façons dogmatiques d\'organiser les mêmes cinq éléments sous différents noms et ordres. CRAFT, CO-STAR et SPECS mappent tous directement à ce modèle des 5 éléments. Comprendre d\'abord les 5 éléments signifie que vous pouvez appliquer n\'importe quel framework sans mémoriser de zéro sa terminologie spécifique.',
            'Le tableau suivant montre comment chaque élément correspond au champ correspondant dans trois frameworks largement utilisés :',
          ],
          columns: ['Élément', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Élément': 'Rôle & Contexte', 'CRAFT': 'Contexte / Rôle', 'CO-STAR': 'Contexte + Public', 'SPECS': 'Situation' },
            { 'Élément': 'Tâche / Instruction', 'CRAFT': 'Action', 'CO-STAR': 'Objectif', 'SPECS': 'Problème / Tâche' },
            { 'Élément': 'Entrée & Exemples', 'CRAFT': 'Faits / Exemples', 'CO-STAR': 'Exemples (optionnel)', 'SPECS': 'Exemples' },
            { 'Élément': 'Contraintes', 'CRAFT': 'Restrictions', 'CO-STAR': 'Ton + Style', 'SPECS': 'Contraintes' },
            { 'Élément': 'Format de sortie', 'CRAFT': 'Format', 'CO-STAR': 'Format de réponse', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum contient 9 frameworks intégrés qui pré-remplissent ces éléments selon le type de tâche. Pour des guides spécifiques au framework, voir [Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use?lang=fr), [CRAFT Framework](/prompt-engineering/craft-framework?lang=fr) et [CO-STAR Framework](/prompt-engineering/co-star-framework?lang=fr).',
        },

        mistakes: {
          id: 'common-mistakes',
          title: 'Quelles sont les erreurs courantes avec les éléments fondamentaux ?',
          items: [
            '**Omettre complètement le Rôle :** le modèle répond d\'une perspective générique — spécifiez le domaine et le niveau d\'expertise même en une phrase',
            '**Contexte vague :** « Écris pour mon public » ne dit rien au modèle — nommez le public, leur niveau de connaissance et ce qu\'ils feront avec la sortie',
            '**Instruction impossible à vérifier :** « Fais-le mieux » n\'a pas de critère de succès observable — remplacez par une tâche spécifique et mesurable',
            '**Pas de Contraintes contre les hallucinations :** sans « utilise seulement l\'information fournie » le modèle comble les lacunes avec des inventions plausibles',
            '**Format de sortie non spécifié :** le modèle choisit sa propre structure — qui varie entre les exécutions et rompt les processus en aval',
            '**Tout fusionner en un paragraphe :** les éléments mélangés dans un bloc de texte sont plus difficiles pour le modèle à traiter — utilisez des sauts de ligne ou des étiquettes explicites pour chaque élément',
            '**Exemples trop identiques :** trois exemples identiques n\'enseignent qu\'un motif — faites-les varier pour couvrir la vraie gamme des entrées',
          ],
        },

        howToStart: {
          id: 'how-to-build-a-prompt',
          title: 'Comment construire un prompt (étape par étape)',
          numberedItems: [
            '**Définir Rôle & Contexte :** Ouvrez avec qui le modèle est et le domaine dans lequel il travaille. Exemple : « Vous êtes un expert-comptable expérimenté aidant un petit propriétaire en France. » Sans cela, le modèle répond d\'une perspective générique.',
            '**Écrire la Tâche / Instruction :** Dites exactement ce qui doit être produit — spécifique et vérifiable. « Résumez les 5 obligations fiscales principales en 200 mots » est meilleur que « parle-moi des impôts. »',
            '**Ajouter Entrée & Exemples :** Fournissez les données brutes et au moins un exemple du format de sortie correct. Un bon exemple réduit l\'incohérence plus que n\'importe quelle autre technique unique.',
            '**Définir les Contraintes :** Listez ce que le modèle ne doit pas faire, le limite de longueur et les règles de ton. Exemple : « Pas de conseils pour les juridictions en dehors de la France. Maximum 200 mots. Ton formel. »',
            '**Spécifier le Format de sortie :** Dites la forme exacte — objet JSON, résumé 3 points, tableau ou paragraphes. Omettre ceci est la cause la plus courante de sorties inutilisables.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Ai-je vraiment besoin de tous les 5 éléments dans chaque prompt ?',
              a: 'Non. Les tâches simples et sans ambiguïté nécessitent souvent seulement une tâche / instruction et un format de sortie. Ajoutez Rôle & Contexte quand le domaine ou le public compte. Ajoutez Contraintes quand les erreurs sont coûteuses. Ajoutez Exemples quand la précision du format est critique. Commencez minimaliste et n\'ajoutez des éléments que si la sortie ne répond pas à votre standard.',
            },
            {
              q: 'Le Rôle est-il plus important que le Contexte, ou l\'inverse ?',
              a: 'Ils fonctionnent comme une paire — aucun ne suffit seul. Rôle sans contexte produit une sortie générique de mode expert. Contexte sans rôle produit une sortie consciente de la situation mais tonalement incohérente. Pour la plupart des tâches, une phrase combinant les deux fonctionne bien : « Vous êtes un [rôle] travaillant avec [public] sur [tâche de domaine]. »',
            },
            {
              q: 'Puis-je garder les prompts courts tout en incluant les 5 éléments ?',
              a: 'Oui. Chaque élément peut être exprimé en une seule phrase. Un prompt complet à cinq éléments peut faire moins de 100 mots. La brièveté n\'est pas le problème — le flou l\'est. Un prompt court et précis avec les cinq éléments surpasse systématiquement un long et verbeux sans aucun.',
            },
            {
              q: 'Quelle est la différence entre Contexte et Exemples ?',
              a: 'Le contexte décrit la situation, le domaine et le public — c\'est l\'information d\'arrière-plan qui encadre la tâche. Les exemples sont des paires entrée/sortie qui montrent au modèle ce qu\'une réponse correcte ressemble. Le contexte dit au modèle où il est ; les exemples lui montrent ce qu\'il faut produire.',
            },
            {
              q: 'Où les Contraintes s\'ajustent-elles si j\'utilise un framework comme CRAFT ou CO-STAR ?',
              a: 'Chaque framework majeur a un champ qui correspond aux contraintes — « Restrictions » dans CRAFT, « Ton & Style » dans CO-STAR, « Contraintes » dans SPECS. Si votre framework n\'a pas de champ de contraintes explicite, ajoutez les contraintes à la fin en tant que section « Ne pas » séparée — tous les modèles gèrent cela de façon fiable.',
            },
            {
              q: 'Le format de sortie importe-t-il si je pose simplement une question simple ?',
              a: 'Pour les questions conversationnelles, spécifier le format est optionnel. Pour toute sortie qui sera utilisée en aval — collée dans un document, analysée par code, publiée ou réutilisée entre membres d\'équipe — spécifier le format est essentiel. C\'est la différence entre obtenir un résultat et obtenir un résultat utilisable.',
            },
            {
              q: 'Dois-je respecter la conformité CNIL quand j\'utilise PromptQuorum ?',
              a: 'Oui. PromptQuorum est conforme au RGPD et aux directives de la CNIL. Pour les données sensibles professionnelles (données financières, médicales, juridiques), les inférences locales avec Ollama ou LM Studio gardent vos données sous votre contrôle et satisfont les exigences de conformité CNIL. Pour les instances cloud, négociez toujours des contrats de traitement de données (DPA) avec le prestataire.',
            },
            {
              q: 'PromptQuorum convient-il aux organisations traitant des données sensibles ?',
              a: 'Oui. PromptQuorum a été conçu pour les organisations européennes traitant des données sensibles et respecte les standards de sécurité IT. Avec les modèles locaux, vous obtenez une souveraineté totale des données, un fonctionnement hors ligne et l\'adaptation aux standards sectoriels (Finance, Santé, Juridique). L\'architecture tarifaire est aussi adaptée aux PME — elle se redimensionne selon vos besoins sans frais cloud disproportionnés.',
            },
            {
              q: 'Où trouver des frameworks de prompt reconnus ?',
              a: 'Les frameworks populaires comme CRAFT, CO-STAR et SPECS sont des approches méthodiques pour les 5 mêmes éléments sous différents noms. PromptQuorum propose 9 frameworks intégrés qui pré-remplissent ces éléments selon le type de tâche. Comprendre d\'abord les 5 éléments signifie que vous pouvez appliquer n\'importe quel framework sans mémoriser de zéro sa terminologie spécifique.',
            },
            {
              q: 'Ces 5 éléments s\'appliquent-ils à tous les modèles IA ?',
              a: 'Oui. Que vous utilisiez GPT-5, Claude 4.7, Gemini 3 Pro, ou des modèles open-source via Ollama et LM Studio, ces 5 éléments fonctionnent sur tous. La structure minimale varie légèrement en syntaxe, mais le modèle conceptuel — rôle, instruction, exemples, contraintes, format — s\'applique universellement.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[How Prompt Engineering Evolved](/prompt-engineering/how-prompt-engineering-evolved?lang=fr) — Des premiers modèles suivant les instructions aux systèmes de raisonnement d\'aujourd\'hui : comment les techniques de prompting ont évolué avec les capacités des modèles.',
            '[Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot?lang=fr) — Quand utiliser des exemples et quand les omettre : choisir la bonne approche pour votre tâche.',
            '[Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting?lang=fr) — Les contraintes en action : comment les exclusions rendent les sorties plus fiables que les inclusions.',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=fr) — Pourquoi les contraintes et exemples sont importants : les causes profondes des hallucinations et les contre-mesures basées sur les preuves.',
            '[Structured Output & JSON Mode](/prompt-engineering/structured-output-and-json-mode?lang=fr) — Spécifier les formats de sortie précis : mode JSON, tableaux Markdown et autres approches structurées sur les modèles.',
            '[Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use?lang=fr) — Comparaison de CRAFT, CO-STAR, SPECS et autres : choisir un framework qui correspond à votre cas d\'usage.',
          ],
        },

        sources: {
          id: 'sources',
          title: 'Sources et références',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Guide officiel d\'ingénierie de prompts d\'OpenAI, incluant les bonnes pratiques pour les prompts basés sur rôles et structurés.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — Implications de sécurité des prompts non structurés et recommandations pour les contraintes.',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — Catalogue complet des motifs de conception de prompts, incluant les techniques structurées et basées sur rôles directement applicables au modèle des 5 éléments.',
          ],
        },

      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: '基礎',
      title: 'すべてのプロンプトに必要な5つの構成要素',
      seoTitle: 'プロンプトの5つ構成要素：2026年の完全ガイド',
      intro: '**効果的なAIプロンプトには5つの構成要素が必須です：役割とコンテキスト、タスク/指示、入力と例、制約、出力形式。これらのいずれかを欠くと、AIの出力は一貫性を失い、形式が崩れ、幻覚が発生します。**',
      metaDescription: '役割、タスク、例、制約、出力形式 — 信頼できるAI出力を実現する5つの構成要素。これらすべてを理解して、プロンプト精度を向上させます。',
      publishDate: '2026-03-01',
      readTime: '8分で読める',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Structure',
      audience: 'AIプロンプトを作成する開発者と一般ユーザー',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
      next_refresh_due: '2026-09-01',
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'プロンプトの5つの構成要素とは', anchor: '#what-are-the-5-building-blocks' },
        { label: 'これらの5つの構成要素が重要な理由', anchor: '#why-building-blocks-matter' },
        { label: '要素1：役割とコンテキスト', anchor: '#block-1-role-context' },
        { label: '要素2：タスク/指示', anchor: '#block-2-task-instruction' },
        { label: '要素3：入力と例', anchor: '#block-3-input-examples' },
        { label: '要素4：制約', anchor: '#block-4-constraints' },
        { label: '要素5：出力形式', anchor: '#block-5-output-format' },
        { label: '5つの構成要素をまとめたプロンプト例', anchor: '#prompt-template' },
        { label: 'CRAFT、CO-STAR、SPECSとの関連性', anchor: '#frameworks-and-tools' },
        { label: 'プロンプト構成要素を使うときのよくある間違い', anchor: '#common-mistakes' },
        { label: 'プロンプトを構築する（ステップバイステップ）', anchor: '#how-to-build-a-prompt' },
        { label: '関連資料', anchor: '#related-reading' },
        { label: 'よくある質問', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'すべてのプロンプトに必要な5つの構成要素',
        description: 'プロンプトの5つの構成要素（役割とコンテキスト、タスク、入力と例、制約、出力形式）を理解し、信頼性の高い再現可能なAIプロンプトを作成する方法。',
        datePublished: '2026-03-01',
        dateModified: '2026-04-28',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs?lang=ja',
        inLanguage: 'ja',
        proficiencyLevel: 'Beginner',
        keywords: ['プロンプト構造', 'プロンプト構成要素', '役割とコンテキスト', '出力形式', 'プロンプト制約', 'フューショット例', 'プロンプトエンジニアリング', 'GPT-5', 'Claude', 'Gemini'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'OpenAI GPT-5' },
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
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'すべてのプロンプトに5つの構成要素が必要ですか',
            acceptedAnswer: { '@type': 'Answer', text: 'いいえ。シンプルで曖昧さのないタスクは、タスク/指示と出力形式だけで十分な場合があります。ドメインまたはオーディエンスが重要な場合は役割とコンテキストを追加します。失敗が高コストな場合は制約を追加します。形式精度が重要な場合は例を追加します。最小限から始めて、出力が標準を満たさない場合にのみ要素を追加してください。' },
          },
          {
            '@type': 'Question',
            name: '役割と コンテキスト、どちらが重要ですか',
            acceptedAnswer: { '@type': 'Answer', text: 'ペアで機能します。どちらか一方だけでは不十分です。役割がないと、コンテキストはあっても状況認識がありますが、トーン的に一貫性を欠きます。逆に役割がないとジェネリックなモード専門家出力になります。ほとんどのタスクでは両者を組み合わせた1文が効果的です。' },
          },
          {
            '@type': 'Question',
            name: 'プロンプトを短く保ちながら、5つの構成要素をすべて含められますか',
            acceptedAnswer: { '@type': 'Answer', text: 'はい。各要素は1文で表現できます。5つの構成要素すべてを含むプロンプトは100語以下に収まります。簡潔さは問題ではありません。曖昧さが問題です。5つの要素をすべて備えた短く正確なプロンプトは、要素がないダラダラ長いプロンプトより一貫して優れています。' },
          },
          {
            '@type': 'Question',
            name: 'コンテキストと例の違いは何ですか',
            acceptedAnswer: { '@type': 'Answer', text: 'コンテキストはタスクを枠づける状況、ドメイン、オーディエンスを説明します。例は入出力ペアで、モデルに正しい答えがどのような形か示します。コンテキストはモデルにどこにいるかを伝え、例は何を生成するかを示します。' },
          },
          {
            '@type': 'Question',
            name: 'CRAFT や CO-STAR などのフレームワークを使う場合、制約はどこに適合しますか',
            acceptedAnswer: { '@type': 'Answer', text: '主要なフレームワークはすべて制約に対応するフィールドを持っています。CRAFT では「Restrictions」、CO-STAR では「Tone & Style」、SPECS では「Constraints」です。フレームワークに明示的な制約フィールドがない場合は、最後に「Do not」セクションとして制約を追加してください。すべてのモデルがこれを確実に処理します。' },
          },
          {
            '@type': 'Question',
            name: '単純な質問をしているだけの場合、出力形式は重要ですか',
            acceptedAnswer: { '@type': 'Answer', text: '会話型の質問については、形式指定は任意です。ダウンストリームで使用される出力（ドキュメントに貼り付け、コードで解析、発行、チームメンバー間で再利用）については、形式指定が必須です。結果を得ることと、使用可能な結果を得ることの違いです。' },
          },
          {
            '@type': 'Question',
            name: 'プロンプトの精度を高めるための最も重要な要素は何ですか',
            acceptedAnswer: { '@type': 'Answer', text: 'タスク/指示が最も重要です。明確で検証可能な指示がなければ、他の要素がどれだけ充実していても改善につながりません。AIの出力が不安定になる最大の原因は曖昧な指示です。具体的で測定可能な指示に変更することで劇的に改善します。' },
          },
          {
            '@type': 'Question',
            name: 'これらの5つの構成要素は日本語のプロンプトにも適用できますか',
            acceptedAnswer: { '@type': 'Answer', text: 'はい。GPT-5、Claude、Gemini、Ollama や LM Studio などのローカル LLM など、どのモデルを使用していても、これら5つの構成要素は有効です。構文は若干異なりますが、役割、指示、例、制約、形式という概念的モデルはすべてのモデルに普遍的に適用されます。' },
          },
          {
            '@type': 'Question',
            name: 'METI のガバナンスガイドラインはプロンプト設計に影響しますか',
            acceptedAnswer: { '@type': 'Answer', text: '日本企業がMETI AI Governance 2024 に準拠する必要がある場合、制約セクションで明示的に説明する必要があります。「このプロンプトは日本の企業ガバナンス基準に準拠した出力を生成しなければならない」という制約を追加することで、モデルが適切に調整されます。ローカル推論（Ollama/LM Studio）はデータ主権を確保します。' },
          },
          {
            '@type': 'Question',
            name: 'ローカル LLM でこれらの5つの構成要素は同じように機能しますか',
            acceptedAnswer: { '@type': 'Answer', text: 'はい。Ollama や LM Studio を使用して実行されるローカル LLM は、クラウド API と同じ原則に従います。実は制約と例を使うことはローカル推論では重要です。ローカルモデルはリソース制約があり、明確な指示がより顕著な影響をもたらすためです。' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'ja',
        name: 'プロンプト構成要素を使ったプロンプト構築方法',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: '役割とコンテキストを設定する', text: 'モデルが何であるかと誰のために働いているかを述べます。1文で：「あなたは[役割]として[オーディエンス]を支援しています。」' },
          { '@type': 'HowToStep', position: 2, name: 'タスク/指示を書く', text: 'モデルに動詞を使ってとってほしい正確なアクションを述べます。「要約する」「分類する」「翻訳する」「生成する」など。' },
          { '@type': 'HowToStep', position: 3, name: '入力と例を追加する', text: 'モデルが作業するデータまたはコンテンツを挿入します。形式が正確である必要がある場合は1～2つの例を追加します。' },
          { '@type': 'HowToStep', position: 4, name: '制約を設定する', text: 'モデルがしてはいけないこと、長さの制限、出力のルールをリストアップします。' },
          { '@type': 'HowToStep', position: 5, name: '出力形式を指定する', text: '出力の正確な形を定義します。JSON、箇条書きリスト、テーブル、段落、番号付きステップなど。' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ja',
        name: 'AI プロンプトに必要な5つの構成要素',
        description: '信頼性の高い AI プロンプトに含まれる5つの構造コンポーネント：役割、タスク、入力と例、制約、出力形式。',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '要素1：役割とコンテキスト', description: 'モデルに何であるか、誰のために働いているかを伝えます。ドメイン専門知識とオーディエンス認識を設定します。' },
          { '@type': 'ListItem', position: 2, name: '要素2：タスク/指示', description: 'モデルが何をしなければならないかを明確なアクション動詞を使って述べます。' },
          { '@type': 'ListItem', position: 3, name: '要素3：入力と例', description: 'モデルが作業するデータまたはコンテンツ。正しい出力がどのようなものかを示すオプションの例。' },
          { '@type': 'ListItem', position: 4, name: '要素4：制約', description: 'モデルが従うべきルール。長さの制限、禁止コンテンツ、スタイル制限。' },
          { '@type': 'ListItem', position: 5, name: '要素5：出力形式', description: '出力が取るべき正確な構造。JSON、箇条書き、テーブル、散文段落、番号付きステップ。' },
        ],
      },
      sections: {

        definition: {
          id: 'what-are-the-5-building-blocks',
          title: 'プロンプトの5つの構成要素とは',
          content: [
            '**すべてのプロンプトに必要な5つの構成要素は、役割とコンテキスト、タスク/指示、入力と例、制約、出力形式です。** この5つのコンポーネントは、信頼性が高く再現可能なプロンプトと、一貫性を欠く結果を生むぼんやりした質問を区別する最小限の構造です。',
            '各要素は異なる障害モードを解決します。役割とコンテキストはモデルに自分が何であるか、どんな状況にあるかを伝えます。タスク/指示は正確に何をすべきかを伝えます。入力と例は素材と学習シグナルを提供します。制約はルールを設定します。出力形式は答えの形を指定します。合わせることで、モデルが推測すべきことを残しません。',
          ],
        },

        badVsGood: {
          id: 'bad-vs-good-example',
          content: [
            '**5つの構成要素なし（ぼんやり）:**\n> このレポートを要約してください。',
            '**5つの構成要素すべてあり（完全）:**\n> あなたは経営分析の専門家です（役割）。以下のQ3レポートから主要な知見を要約してください（タスク）。[レポートテキスト]（入力）。レポートの事実だけを使用、最大200語、形式は正式（制約）。3つの箇条書きを「主要な知見」というタイトルで返してください（出力形式）。',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: '重要ポイント',
          isTldr: true,
          items: [
            '役割とコンテキスト：モデルに自分が何であるか、どのドメインで動いているかを伝える',
            'タスク/指示：モデルが生成すべきものを正確に述べる。具体的で検証可能であること',
            '入力と例：モデルが必要とする生データとサンプル入出力ペアを提供する',
            '制約：ルールを設定する。モデルが行うべきこと、すべきでないことを明記',
            '出力形式：答えの正確な形を指定する。JSON、箇条書き、テーブル、散文など',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: 'これらの5つの構成要素が重要な理由',
          content: [
            '5つの構成要素モデルは、OpenAI、Google、Anthropic、独立した実践者からのプロンプトエンジニアリングガイダンスから生まれた収束コンセンサスを反映しています。役割、指示、例、制約、出力形式は、2023年以降に発表されたすべての主要フレームワークに異なる名前で登場しています。これは偶然ではなく、確率的モデルが有用で一貫性のある結果を生産するために必要な最小限の情報です。',
            'ビジネス上の論理は直截的です。役割とコンテキストがないと、書き直しが必要なジェネリックな答えが生じます。制約がないとハルシネーションのリスクとブランド外の出力が増加します。出力形式がないと、解析またはコピーペーストできない結果が生じます。5つの構成要素モデルはこれら3つの障害モードをすべて一度に対処し、GPT-5、Claude 4.7、Gemini 3 Pro、およびローカルで実行される LLM に等しく適用されます。',
            '日本企業向けの注記：METI AI Governance 2024 の要件を満たす場合、制約セクションでこれを明示的に述べることが重要です。Ollama や LM Studio を使用した企業内のローカル推論は、日本の個人情報保護方針と企業ガバナンス基準への完全な準拠を確保しながら、プロンプト精度の利点をもたらします。',
          ],
        },

        block1: {
          id: 'block-1-role-context',
          title: '役割とコンテキスト要素は何をするのか',
          content: [
            '**役割**はモデルに採用すべきペルソナまたは専門知識を伝えます。**コンテキスト**は状況、ドメイン、モデルが動いているオーディエンスを伝えます。ペアで機能するため一緒にグループ化されています。役割がモデルであり、コンテキストはそのタスクで「良い」が何を意味するかを形作る環境です。',
            '役割とコンテキストを省略すると、モデルはジェネリックな視点から答えます。特定の誰のためでもない答えです。これらを含めると、同じモデルが VAT 返還質問に答える senior tax advisor、19歳のオーディエンスに向けて書く junior copywriter、または四半期レポートを要約するデータアナリストになります。出力はあなたの実際の状況に合わせます。',
          ],
          items: [
            '**ドメインを指定する：** 「あなたは B2B SaaS コピーライターです」は「あなたはライターです」より有用',
            '**オーディエンスを含める：** 「これを技術に詳しくない CFO に説明してください」は語彙と詳細度を制限',
            '**専門知識レベルを定める：** 「senior security engineer として動いてください」は「security engineer として動いてください」と異なる出力を生む',
            '**重要な場合は状況を述べる：** 「最初のドラフトを見直しています」対「ゼロから書いています」はモデルのアプローチを変える',
          ],
        },

        block1Link: {
          content: 'モデルが指示に従うことがより上手になったときに、ロールプロンプティングがどのように進化したかを理解するために、[プロンプトエンジニアリングの進化](/prompt-engineering/how-prompt-engineering-evolved?lang=ja)を参照してください。',
        },

        block2: {
          id: 'block-2-task-instruction',
          title: 'タスク/指示要素とは',
          content: [
            '**タスク/指示要素は、モデルに行わせたいことの明確な声明です。** 最も重要な要素です。他のすべての要素がこれを支援します。明確で具体的で検証可能な指示は曖昧さをほぼゼロに減らします。ぼんやりした指示がすべてのモデルとユースケースにおいて貧弱な AI 出力の最大の原因です。',
            '現在のベストプラクティスガイダンスは、タスクをアクション可能で観測可能にすることを強調します。動詞を使い、成果物を述べ、できれば成功基準を説明します。「要約を書く」はタスクです。「以下の記事を3つの箇条書きで要約してください、各20語以下」はテスト可能な出力を持つタスクです。出力品質の違いは著しいです。',
          ],
          items: [
            '❌ 弱い：「このトピックについて何か書いてください」',
            '✅ 強い：「非技術系の管理職向けプロンプトエンジニアリングの利点について、150語の LinkedIn 投稿を書いてください」',
            '❌ 弱い：「このデータを分析してください」',
            '✅ 強い：「このデータセットのトップ3トレンドを特定し、収益への影響でランク付けしてください、最高から最低へ」',
          ],
        },

        block2Link: {
          content: '指示は例を提供するかどうかと直接対話します。[Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/prompt-engineering/zero-shot-vs-few-shot?lang=ja)を参照して、各アプローチがいつ最適に機能するかを確認してください。',
        },

        block3: {
          id: 'block-3-input-examples',
          title: '入力と例はどのように精度を向上させるのか',
          content: [
            '**入力**はモデルが作業する必要がある実際のデータ、テキスト、またはマテリアルです。**例**は、正しい応答がどのような形かを示すサンプル入出力ペアです。これらは異なる懸念事項です。入力は現在のタスクの生素材、例はモデルの実行方法を形作る学習シグナルです。',
            '1～3つの例（few-shot prompting）を含めることは、出力形式とトーンをロックインするための最も信頼できる単一の技法です。モデルに良い答えがどのようなものかを示すと、タスク説明だけから推測するのではなく、パターンをマッチングします。これは特殊なフォーマット、一貫したトーン、精度が必要な構造化出力で最も重要です。',
          ],
          items: [
            '**例を追加するとき：** 特殊なフォーマット、一貫したトーン要件、構造化出力、ドメイン固有の語彙',
            '**ゼロショットのままにするとき：** シンプルな事実質問、幅広い探索、モデルのデフォルト応答スタイルを積極的に望む場合',
            '**例を変化させる：** 同じ例は1つのパターンだけを教えます。あなたが期待する入力の実際の範囲をカバーしてください',
            '**現実的なデータを使う：** 理想化されたサンプルより実在サンプルが優れています。モデルは実際に示されたものから学びます',
          ],
        },

        block3Link: {
          content: '例を使うべき時と省く時の完全な分析については、[Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/prompt-engineering/zero-shot-vs-few-shot?lang=ja)を参照してください。',
        },

        block4: {
          id: 'block-4-constraints',
          title: '制約要素とは、なぜプロンプトに必要か',
          content: [
            '**制約はモデルが従うべきルールです：何をすべきか、何をしてはいけないか。** 長さの制限、禁止トピックまたはフレーズ、必要なソース、ブランドボイスルール、安全性の境界、フォーマット制限を含みます。制約は最も一般的に省略される要素です。その欠落がハルシネートされた事実、ブランド外の言語、間違った形式の出力の主原因です。',
            '明確に定義された1つの制約を追加することはしばしば既存のプロンプトに加えることができる最も高レベレッジの変更です。「統計を作成しないでください」はハルシネーションリスクを大幅に削減します。「100語を決して超えないでください」は簡潔さを強制します。「提供されたテキストからの情報だけを使用してください」はソースマテリアルに出力を根付かせ、そのタスクのために完全に捏造を排除します。',
          ],
          items: [
            '**長さ制約：** 「最大150語」「5つ以上の箇条書きなし」',
            '**ソース制約：** 「添付ドキュメントからの事実のみを使用」「確認できないソースを引用しない」',
            '**トーンとボイス制約：** 「正式な三人称トーンで書く。縮約なし、口語なし」',
            '**禁止コンテンツ：** 「競合製品に言及しない」「データが示す範囲を超えて推測しない」',
            '**安全性制約：** 「提供されたコンテキストから質問に答えられない場合は言う。答えを発明しない」',
          ],
        },

        block4Links: {
          content: '出力を形作るために除外を使う技法については、[Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting?lang=ja)を参照してください。制約のないプロンプトがより多くハルシネートする理由については、[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=ja)を参照してください。',
        },

        block5: {
          id: 'block-5-output-format',
          title: '出力形式要素があなたの結果をどのように制御するのか',
          content: [
            '**出力形式はモデルが生成すべき答えの正確な形を指定します。** これはモデルが直接使用可能かそれとも使用前に再フォーマットが必要かを決定する要素です。自動パイプラインでは、指定されていない出力形式は脆弱で矛盾した解析を意味します。GEO では、構造化出力は AI 検索エンジンによってそのまま引用される可能性が高いです。構造化答えはプログラムで抽出しやすいためです。',
            '出力形式要素はファイル形式（JSON、Markdown、CSV）、構造（テーブル、箇条書き、番号付きステップ）、長さ、セクション のラベルを指定できます。より正確に指定するほど、出力は編集を必要とします。',
          ],
          items: [
            '**JSON：** 「結果を JSON オブジェクトとして返す。キー：title、summary、tags」',
            '**Markdown 箇条書き：** 「各検出結果を太字の用語で始まる箇条書きとしてリストアップし、その後に説明文」',
            '**テーブル：** 「比較を Markdown テーブルとしてフォーマットする。列：機能、オプション A、オプション B」',
            '**構造化散文：** 「各主要ポイントの見出しを持つ応答を構造化し、セクションあたり最大3文」',
          ],
        },

        block5Link: {
          content: 'さまざまなモデルにおける JSON モードと構造化出力への完全ガイドについては、[Structured Output & JSON Mode: Get AI to Return Usable Data](/prompt-engineering/structured-output-and-json-mode?lang=ja)を参照してください。',
        },

        template: {
          id: 'prompt-template',
          title: '5つの構成要素をすべてまとめたプロンプトをどのように作成するのか',
          content: '以下のテンプレートは、単一のドメイン中立的なタスク用に順序付けられた5つの構成要素すべてを示しています。各部分がラベル付けされているため、各構成要素がどこで始まり終わるかを正確に確認できます。各セクションのコンテンツを置き換えて、任意のドメインに適応させてください。',
          items: [
            '**[役割とコンテキスト]** あなたは経営分析の senior です。オーディエンスは四半期営業レポートを見直している非技術系の経営幹部チームです。',
            '**[タスク/指示]** 以下のレポートから主要な知見を要約してください。目標に対するパフォーマンスに焦点を当て、2つの最大のリスクを識別し、それぞれに対して1つの是正措置を推奨してください。',
            '**[入力]** [レポート テキストをここに貼り付け]',
            '**[制約]** レポートからの情報のみを使用してください。推測しないでください。合計200語を超えないでください。プレーン言語で書いてください。専門用語なし。',
            '**[出力形式]** 3つのセクションとして応答を返してください：「主要な知見」（3つの箇条書き）、「トップリスク」（2つの箇条書き）、「推奨アクション」（2つの箇条書き、リスクあたり1つ）。',
          ],
        },

        templateNote: {
          content: 'このテンプレートは GPT-5、Claude 4.7、Gemini 3 Pro、および Ollama または LM Studio 経由のローカル LLM で動作します。ブロック順序は推奨ですが、厳格なルールではありません。ただし、最初に役割とコンテキストを配置し、最後に出力形式を配置することがすべての主要なモデル全体で最も一般的で信頼できる配置です。',
        },

        frameworks: {
          id: 'frameworks-and-tools',
          title: '5つの構成要素が CRAFT、CO-STAR、SPECS にどのようにマップするか',
          content: [
            '人気のあるプロンプトエンジニアリングフレームワークは、同じ5つの構成要素を異なる名前や異なる順序で配置する見解のある方法です。CRAFT、CO-STAR、SPECS はすべてこの 5 ブロックモデルに直接マップされます。最初にブロックを理解することは、その特定の用語をゼロから暗記することなく、任意のフレームワークを適用できることを意味します。',
            '以下のテーブルは、各ブロックが3つの広く使われているフレームワークの対応するフィールドにどのようにマップするかを示しています。',
          ],
          columns: ['構成要素', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { '構成要素': '役割とコンテキスト', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { '構成要素': 'タスク/指示', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { '構成要素': '入力と例', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { '構成要素': '制約', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone & Style', 'SPECS': 'Constraints' },
            { '構成要素': '出力形式', 'CRAFT': 'Format', 'CO-STAR': 'Response Format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum には 9つの統合フレームワークが含まれており、タスク タイプに応じてこれらの要素を事前入力します。フレームワーク固有のガイドについては、[Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use?lang=ja)、[CRAFT Framework](/prompt-engineering/craft-framework?lang=ja)、[CO-STAR Framework](/prompt-engineering/co-star-framework?lang=ja)を参照してください。',
        },

        mistakes: {
          id: 'common-mistakes',
          title: 'プロンプト構成要素を使う場合のよくある間違い',
          items: [
            '**役割が完全に欠けている：** モデルはジェネリックな視点から答える。ドメインと専門知識レベルを指定してください（少なくとも1文で）',
            '**ぼんやりしたコンテキスト：** 「私の会社のために書く」はモデルに何も伝えません。オーディエンス、知識レベル、出力での用途を述べてください',
            '**検証不可能な指示：** 「これを改善する」には観測可能な成功基準がありません。具体的で測定可能なタスクに置き換えてください',
            '**ハルシネーション制約なし：** 「提供された情報のみを使用」がないと、モデルはギャップをもっともらしい発明で埋めます',
            '**出力形式が指定されていない：** モデルが独自の構造を選択します。実行ごとに異なり、ダウンストリームプロセスを壊します',
            '**すべてを1つの段落にマージ：** テキストの壁に混ぜた構成要素はモデルが解析するのが難しいです。各要素に明示的なラベルまたは改行を使用してください',
            '**例が非常に似ている：** 同じ例は1つのパターンだけを教えます。期待される入力の実際の範囲をカバーしてください',
          ],
        },

        howToStart: {
          id: 'how-to-build-a-prompt',
          title: 'プロンプトを構築する（ステップバイステップ）',
          numberedItems: [
            '**役割とコンテキストを定義する：** モデルが何であるか、動いているドメインで開きます。例：「あなたは日本の中小企業を支援する経験豊かな税務顧問です。」これがないと、モデルはジェネリックな視点から答えます。',
            '**タスク/指示を書く：** 正確に何を生成すべきかを述べてください。具体的で検証可能です。「税務申告書について話す」より「日本の中小企業向けに主要な5つの税務義務を200語で要約してください」が良いです。',
            '**入力と例を追加する：** 生データを提供し、少なくとも正しい出力形式の1つの例を提供してください。良い例は他のどの技法よりも矛盾を減らします。',
            '**制約を定義する：** モデルがしてはいけないこと、文字数制限、トーンルールをリストアップしてください。例：「日本外の管轄区域向けアドバイスはしない。200語最大。形式は正式。」',
            '**出力形式を指定する：** 正確な形を述べてください。JSON オブジェクト、3ポイント要約、テーブル、段落。これを省略することは使用不可能な出力の最も一般的な原因です。',
          ],
        },

        faq: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'すべてのプロンプトに5つの構成要素が本当に必要ですか',
              a: 'いいえ。シンプルで曖昧でないタスクはしばしば、タスク/指示と出力形式だけで十分です。ドメインまたはオーディエンスが重要な場合は役割とコンテキストを追加してください。障害モードが高コストな場合は制約を追加してください。形式精度が重要な場合は例を追加してください。最小限から始めて、出力があなたの標準を満たさない場合にのみ要素を追加してください。',
            },
            {
              q: '役割とコンテキストはどちらがより重要ですか',
              a: 'ペアとして機能します。どちらか一方だけでは不十分です。コンテキストなしの役割は一般的な専門家モード出力を生成します。役割なしのコンテキストは状況認識のあるトーン的に矛盾した出力を生成します。ほとんどのタスクでは両者を組み合わせた1文が効果的です。',
            },
            {
              q: 'プロンプトを短く保ちながら、5つの構成要素をすべて含めることはできますか',
              a: 'はい。各要素は1文で表現できます。5つの構成要素のプロンプト全体は100語以下に収まります。簡潔さは問題ではありません。曖昧さが問題です。5つの要素を備えた短く正確なプロンプトは、要素がない長くだらしないプロンプトより一貫して優れています。',
            },
            {
              q: 'コンテキストと例の違いは何ですか',
              a: 'コンテキストはタスクを枠づける状況、ドメイン、オーディエンスを説明します。例は、正しい答えがどのような形かをモデルに示すサンプル入出力ペアです。コンテキストはモデルにどこに いるかを伝え、例は何を生成するかを示します。',
            },
            {
              q: 'CRAFT または CO-STAR などのフレームワークを使う場合、制約はどこに適合しますか',
              a: 'すべての主要フレームワークは制約にマップするフィールドを持っています。CRAFT では「Restrictions」、CO-STAR では「Tone & Style」、SPECS では「Constraints」です。フレームワークに明示的な制約フィールドがない場合は、終了時に「Do not」セクションとして制約を追加してください。すべてのモデルがこれを確実に処理します。',
            },
            {
              q: '単純な質問をしているだけの場合、出力形式は重要ですか',
              a: '会話型の質問については、形式指定は任意です。ダウンストリームで使用される出力（ドキュメントに貼り付け、コードで解析、発行、チームメンバー間で再利用）については、形式指定が必須です。結果を得ることと、使用可能な結果を得ることの違いです。',
            },
            {
              q: 'これらの5つの構成要素はすべての LLM モデルに適用されますか',
              a: 'はい。GPT-5、Claude 4.7、Gemini 3 Pro、または Ollama や LM Studio を経由するオープンソース LLM を使用しているかどうかにかかわらず、これら5つの構成要素はすべてで機能します。最小構造は構文において若干異なりますが、概念的モデル（役割、指示、例、制約、形式）はすべてのモデルに普遍的に適用されます。',
            },
            {
              q: 'METI の AI ガバナンスガイドラインはプロンプト設計に影響しますか',
              a: '日本企業が METI AI Governance 2024 に準拠する必要がある場合、制約セクションで明示的に述べることが重要です。「このプロンプトは日本の企業ガバナンス基準に準拠した出力を生成する必要があります」という制約を追加することで、モデルが適切に調整されます。ローカル推論（Ollama/LM Studio）はデータ主権を確保します。',
            },
            {
              q: 'ローカル LLM ではこれらの5つの構成要素は同じように機能しますか',
              a: 'はい。Ollama や LM Studio を使用して実行されるローカル LLM はクラウド API と同じ原則に従います。実は制約と例を使うことはローカル推論では重要です。ローカルモデルはリソース制約があり、明確な指示がより顕著な影響をもたらすためです。',
            },
            {
              q: 'これらの構成要素を日本語で使用する場合に特別な考慮はありますか',
              a: 'いいえ。これら5つの構成要素は言語に依存しません。日本語で記述されたプロンプトでも英語でも、同じ構造が機能します。実際のところ、これら5つの構成要素を明示的に使用することは、日本語プロンプトの一貫性と正確性を向上させます。',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '関連資料',
          items: [
            '[プロンプトエンジニアリングの進化](/prompt-engineering/how-prompt-engineering-evolved?lang=ja) — 初期のモデルから今日の推論システムへ。プロンプティング技法がモデル機能に応じてどのように進化したか。',
            '[Zero-Shot vs. Few-Shot プロンプティング](/prompt-engineering/zero-shot-vs-few-shot?lang=ja) — 例をいつ使うか、いつ省くか。タスクに適したアプローチを選ぶ。',
            '[Negative Prompting: Tell the AI What NOT to Do](/prompt-engineering/negative-prompting?lang=ja) — 制約の実行。除外がどのように含有より出力を信頼性にするのか。',
            '[AI Hallucinations: Why AI Makes Things Up](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=ja) — 制約と例が重要な理由。ハルシネーションの根本原因と証拠ベースの対策。',
            '[Structured Output & JSON Mode](/prompt-engineering/structured-output-and-json-mode?lang=ja) — 正確な出力形式を指定。JSON、Markdown テーブル、その他の構造化アプローチ。',
            '[使うべきプロンプトフレームワークはどれ](/prompt-engineering/which-prompt-framework-should-you-use?lang=ja) — CRAFT、CO-STAR、SPECS の比較。ユースケースに合ったフレームワークを選ぶ。',
          ],
        },

        sources: {
          id: 'sources',
          title: 'ソースと参考資料',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — OpenAI 公式プロンプトエンジニアリングガイド。役割ベースおよび構造化プロンプトのベストプラクティスを含む。',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — 非構造化プロンプトのセキュリティ影響。制約の推奨。',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — プロンプト設計パターンの総合カタログ。5つの構成要素モデルに直接適用可能な構造化および役割ベースの技法。',
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
        keywords: ['提示词结构', '提示词构件', '角色与背景', '输出格式', '提示词约束', '少样本示例', '提示词工程', 'GPT-5.5', 'Claude', 'Gemini'],
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
          content: '该模板适用于 GPT-5.5、Claude、Gemini 以及通过 Ollama 或 LM Studio 运行的本地大型语言模型。模块顺序是建议，而非硬性规定——但将角色与上下文置于首位、输出格式置于末位，是在所有主流模型上最通用且可靠的排列方式。',
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
