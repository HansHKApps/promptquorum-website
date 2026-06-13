// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-building-blocks
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'evergreen',
      theme: 'Fundamentals',
      title: 'The 5 Building Blocks Every Prompt Needs',
      seoTitle: 'The 5 Essential Parts of Any AI Prompt (With Template)',
      intro: '**Every effective AI prompt needs five building blocks: Role & Context, Task / Instruction, Input & Examples, Constraints, and Output Format — miss any one and outputs become inconsistent, off-format, or hallucinated.**',
      metaDescription: 'Role, Task, Input, Constraints, Output Format — the 5 prompt parts that work on every LLM. Miss one and quality drops. Copy-paste template included.',
      ogTitle: 'Miss One of These 5 Prompt Blocks and AI Output Goes Off-Track',
      ogDescription: 'Role, Task, Input, Constraints, Output Format. One template that works on every model. Copy-paste ready.',
      twitterTitle: '5 Building Blocks Every AI Prompt Needs',
      twitterDescription: 'Vague prompts waste tokens and revision time. Structured 5-block prompts produce usable output in one pass. Template works on all major language models.',
      publishDate: '2026-03-01',
      readTime: '8 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Structure',
      audience: 'Developers and non-technical users writing AI prompts',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04',
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
        keywords: ['prompt structure', 'prompt building blocks', 'role and context', 'output format', 'prompt constraints', 'few-shot examples', 'prompt engineering', 'language models'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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

        quickFacts: {
          id: 'quick-facts',
          title: '⚡ Quick Facts',
          content: 'A quick reference guide to the 5 building blocks and when to use them:',
          items: [
            '**The 5 blocks:** Role & Context → Task / Instruction → Input & Examples → Constraints → Output Format',
            '**Minimum viable prompt:** Task + Output Format (2 blocks) for simple tasks',
            '**Highest-impact addition:** One constraint like "use only provided information" cuts hallucination risk dramatically',
            '**Works on:** All major language models, frontier models, and all local LLMs via Ollama, LM Studio, or similar',
            '**Maps to:** CRAFT, CO-STAR, SPECS, RTF, and every other major framework — different names, same blocks',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: 'Why Do These 5 Building Blocks Matter?',
          content: [
            'The five-block model reflects the converged consensus across prompt engineering guidance from OpenAI, Google, Anthropic, and independent practitioners. Role, instructions, examples, constraints, and output format appear — under different names — in every major framework published since 2023. This is not coincidence: it is the minimum information a probabilistic model needs to produce a useful, consistent result.',
            'The business case is straightforward. Missing role and context produces generic answers that need rewriting. Missing constraints increases hallucination risk and off-brand output. Missing output format means results that cannot be parsed or copy-pasted directly. The 5-block model addresses all three failure modes at once, and applies equally to all major language models and locally-run LLMs.',
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

        block4ProTip: {
          id: 'pro-tip-constraints',
          title: '🔍 Pro Tip: The Highest-Leverage Constraint',
          content: 'The single highest-leverage constraint you can add to any prompt is: **"Use only information from the provided context. If you cannot answer from the provided information, say so."** This one sentence eliminates the most common failure mode in AI output — plausible-sounding fabrication. Adding this constraint alone often reduces hallucination risk by 80%+ and is universally supported across all models.',
        },

        block5: {
          id: 'block-5-output-format',
          title: 'How Does Output Format Control What You Get?',
          content: [
            '**Output Format specifies the exact shape of the answer the model should produce.** This is the block that determines whether the output is directly usable or requires reformatting before it is useful. For automated pipelines, an unspecified output format means brittle, inconsistent parsing. For GEO, a structured output is more likely to be cited verbatim by AI search engines, because structured answers are easier to extract programmatically.',
            'The output format block can specify the file format (JSON, Markdown, CSV), the structure (table, bullet list, numbered steps), the length, and the labelling of sections. The more precisely you specify it, the less editing the output requires.',
            '**API-Level Output Format Enforcement:** In 2026, all major providers offer API-level output format enforcement that goes beyond prompt-text instructions. Structured outputs (including JSON schema validation) guarantee valid JSON matching your schema at the token generation level — the model literally cannot produce invalid output. When using these APIs, Block 5 becomes a server-side constraint rather than a prompt-text instruction. Use both for maximum reliability: API-level enforcement as the hard guarantee, prompt-text format specification as guidance for content structure within that format.',
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
          content: 'This template works on all major language models and local LLMs via Ollama or LM Studio. The block order is a recommendation, not a rigid rule — but placing Role & Context first and Output Format last is the most common and reliable arrangement across all major models.',
        },

        templateLocalLLMLinks: {
          id: 'local-llm-cross-links',
          content: 'For prompt techniques optimized specifically for local models with smaller context windows, see [Prompt Engineering for Local LLMs](/prompt-engineering/prompt-engineering-for-local-models). For a comparison of which local model follows the 5-block structure most reliably, see [Comparing Open-Source Models](/prompt-engineering/comparing-open-source-models).',
        },

        systemVsUser: {
          id: 'system-prompt-vs-user-message',
          title: 'Where Do the 5 Blocks Go in an API Call?',
          content: [
            'In 2026, all major AI APIs separate the **system prompt** (persistent instructions) from the **user message** (per-request content). The 5 blocks split naturally across these two layers, which has important implications for cost and efficiency.',
            '**System prompt (set once, reused):**',
            'Block 1: Role & Context — "You are a senior business analyst..."',
            'Block 4: Constraints — "Use formal tone. Never exceed 200 words. Do not speculate."',
            'Block 5: Output Format — "Always return 3 bullet points under \'Key Findings\'..."',
            '**User message (changes per request):**',
            'Block 2: Task / Instruction — "Summarise the key findings from this report."',
            'Block 3: Input & Examples — The actual report text + any examples.',
            'This split matters because **system prompts are cached** on leading models — meaning your Role, Constraints, and Output Format are stored efficiently and don\'t consume fresh tokens on every request. For production pipelines processing hundreds of prompts, this reduces cost by 50-90% on the system prompt portion.',
            'For local LLMs via Ollama or LM Studio, the same split applies: use a **Modelfile** with a SYSTEM directive for blocks 1, 4, and 5, and pass blocks 2 and 3 in the user message.',
          ],
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

        frameworksDidYouKnow: {
          id: 'frameworks-did-you-know',
          title: '🔍 Did You Know?',
          content: 'Every major prompt engineering framework published since 2023 — CRAFT, CO-STAR, SPECS, RTF, TRACE, APE — maps directly to these 5 blocks under different names. Learning the blocks once means you can apply any framework without memorizing its specific terminology. The frameworks differ in emphasis and order, but the underlying structure is always the same: who, what, how, constraints, and format.',
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

        mistakesWarning: {
          id: 'warning-output-format',
          title: '⚠️ Warning: Omitting Output Format is #1 Cause of Unusable Output',
          content: 'Leaving the Output Format block unspecified is the single most common cause of unusable AI output in production pipelines. Without an explicit format specification, the model\'s default format changes between runs, between models, and between API versions. Always specify format — even "respond in plain prose, no bullet points" is better than leaving it unspecified. This is the difference between getting an output and getting a usable output.',
        },

        howToStart: {
          id: 'how-to-build-a-prompt',
          title: 'How to Build a Prompt Using the 5 Building Blocks',
          numberedItems: [
            '**Set Role & Context:** Open with who the model is and the domain it is operating in. Example: "You are a senior tax advisor helping a small business owner in Germany." Without this, the model answers from a generic perspective.',
            '**Write the Task / Instruction:** State exactly what you want produced — specific and testable. "Summarise the key VAT obligations in 200 words" is better than "tell me about VAT."',
            '**Add Input & Examples:** Provide the raw data and at least one example of the correct output format. A single well-chosen example reduces inconsistency more than any other single technique.',
            '**Define Constraints:** List what the model must not do, the length limit, and the tone rules. Example: "Do not give advice for jurisdictions outside Germany. Maximum 200 words. Formal tone."',
            '**Specify Output Format:** State the exact shape of the answer — JSON object, 3-bullet summary, table, or prose paragraph. Omitting this is the most common cause of unusable AI output. Test your completed 5-block prompt in [Anthropic\'s Console](https://docs.anthropic.com/) or [OpenAI\'s Playground](https://platform.openai.com/playground) before deploying to production.',
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
            '[Persona Prompting](/prompt-engineering/persona-prompting) — Deep dive into Block 1 (Role & Context) with 7 sub-components: how persona selection affects output quality and consistency.',
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) — Deep dive into Block 4 (Constraints) including API-level enforcement: hard constraints that guarantee valid output.',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) — How to apply the 5 blocks across multi-step workflows: breaking complex tasks into sequential prompts.',
          ],
        },

        sources: {
          id: 'sources',
          title: 'Sources & Further Reading',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Official prompt engineering guidance from OpenAI, including best practices for role-based and structured prompts.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — Security implications of unstructured prompts and recommendations for constraints.',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — Comprehensive catalog of prompt design patterns including structured and role-based techniques directly applicable to the 5-block model.',
            '[Prompt Engineering — Claude Documentation — Anthropic](https://docs.anthropic.com/) — System prompt best practices, structured outputs, and caching strategies for production pipelines.',
            '[Structured Outputs — Responses API — OpenAI](https://platform.openai.com/docs/) — API-level output format enforcement guaranteeing valid JSON matching your schema at token generation.',
            '[Gemini API: Prompting Strategies — Google](https://ai.google.dev/) — Response schema and controlled generation techniques across frontier models.',
          ],
        },

      },
    },

    de: {
      freshness_tier: 'evergreen',
      theme: 'Fundamentals',
      title: 'Die 5 Bausteine eines jeden Prompts',
      seoTitle: '5 Bausteine für jeden KI-Prompt mit Vorlage',
      intro: '**Jeder effektive KI-Prompt benötigt fünf Bausteine: Rolle & Kontext, Aufgabe / Anweisung, Eingabe & Beispiele, Einschränkungen und Ausgabeformat — fehlt einer, werden Ergebnisse inkonsistent, falsch formatiert oder halluziniert.**',
      metaDescription: 'Jeder gute KI-Prompt braucht 5 Teile: Rolle, Aufgabe, Input, Einschränkungen, Ausgabeformat. Fehlt einer, sinkt die Qualität. Mit kopierfertiger Vorlage.',
      ogTitle: 'Fehlt einer dieser 5 Prompt-Bausteine, wird die KI-Antwort unbrauchbar',
      ogDescription: 'Rolle, Aufgabe, Input, Einschränkungen, Ausgabeformat. Eine Vorlage für alle Modelle. Sofort einsetzbar.',
      twitterTitle: '5 Bausteine für jeden KI-Prompt',
      twitterDescription: 'Vage Prompts verschwenden Tokens und Überarbeitungszeit. Strukturierte 5-Block-Prompts liefern im ersten Anlauf brauchbare Ergebnisse.',
      publishDate: '2026-03-01',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt-Struktur',
      audience: 'Entwickler und Nicht-Techniker, die KI-Prompts schreiben',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04',
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
        url: 'https://www.promptquorum.com/de/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'de',
        proficiencyLevel: 'Beginner',
        keywords: ['Prompt-Struktur', 'Prompt-Bausteine', 'Rolle und Kontext', 'Ausgabeformat', 'Prompt-Einschränkungen', 'Few-Shot-Beispiele', 'Prompt Engineering', 'Sprachmodelle'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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

        quickFacts: {
          id: 'quick-facts',
          title: '⚡ Schnellübersicht',
          content: 'Ein schneller Referenzleitfaden zu den 5 Bausteinen und wann sie verwendet werden:',
          items: [
            '**Die 5 Bausteine:** Rolle & Kontext → Aufgabe / Anweisung → Eingabe & Beispiele → Einschränkungen → Ausgabeformat',
            '**Minimaler brauchbarer Prompt:** Aufgabe + Ausgabeformat (2 Bausteine) für einfache Aufgaben',
            '**Höchste Hebelwirkung:** Eine Einschränkung wie „verwende nur bereitgestellte Informationen" senkt das Halluzinationsrisiko dramatisch',
            '**Funktioniert auf:** Allen führenden Sprachmodellen und allen lokalen LLMs über Ollama, LM Studio oder ähnliches',
            '**Entspricht:** CRAFT, CO-STAR, SPECS, RTF und jedem anderen wichtigen Framework — unterschiedliche Namen, gleiche Bausteine',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: 'Warum sind diese 5 Bausteine wichtig?',
          content: [
            'Das Fünf-Bausteine-Modell spiegelt den konvergierten Konsens aus Prompt-Engineering-Anleitungen von OpenAI, Google, Anthropic und unabhängigen Praktikern wider. Rolle, Anweisungen, Beispiele, Einschränkungen und Ausgabeformat erscheinen — unter verschiedenen Namen — in jedem wichtigen Framework, das seit 2023 veröffentlicht wurde. Das ist kein Zufall: Es sind die Mindestinformationen, die ein probabilistisches Modell benötigt, um ein nützliches, konsistentes Ergebnis zu liefern.',
            'Der geschäftliche Nutzen ist eindeutig. Fehlende Rolle und Kontext liefern generische Antworten, die umgeschrieben werden müssen. Fehlende Einschränkungen erhöhen das Halluzinationsrisiko und erzeugen markenfremde Ausgaben. Fehlendes Ausgabeformat bedeutet Ergebnisse, die nicht direkt verwendet oder kopiert werden können. Das 5-Bausteine-Modell adressiert alle drei Fehlertypen gleichzeitig und gilt gleichermaßen für alle Sprachmodelle und lokal betriebene LLMs.',
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
          content: 'Um zu verstehen, wie sich Rollen-Prompting entwickelt hat, als Modelle immer besser darin wurden, Anweisungen zu befolgen, siehe [How Prompt Engineering Evolved](/de/prompt-engineering/how-prompt-engineering-evolved).',
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
          content: 'Anweisungen interagieren direkt damit, ob Beispiele bereitgestellt werden – siehe [Zero-Shot vs. Few-Shot Prompting](/de/prompt-engineering/zero-shot-vs-few-shot) dafür, wann welcher Ansatz am besten funktioniert.',
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
          content: 'Für eine vollständige Aufschlüsselung, wann Beispiele verwendet werden und wann sie weggelassen werden, siehe [Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/de/prompt-engineering/zero-shot-vs-few-shot).',
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
          content: 'Für die Technik, Ausschlüsse zur Gestaltung von Ausgaben zu verwenden, siehe [Negative Prompting: Tell the AI What NOT to Do](/de/prompt-engineering/negative-prompting). Warum unkontrollierte Prompts mehr halluzinieren, erklärt [AI Hallucinations: Why AI Makes Things Up](/de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up).',
        },

        block4ProTip: {
          id: 'pro-tip-constraints',
          title: '🔍 Profi-Tipp: Die wirkungsvollste Einschränkung',
          content: 'Die einzeln wirkungsvollste Einschränkung, die Sie zu einem Prompt hinzufügen können, ist: **„Verwende nur Informationen aus dem bereitgestellten Kontext. Wenn du nicht aus den bereitgestellten Informationen antwortet, sage es so."** Dieser eine Satz eliminiert den häufigsten Fehler bei KI-Ausgabe — plausibel klingende Erfindung. Das Hinzufügen dieser Einschränkung allein reduziert das Halluzinationsrisiko oft um 80%+ und wird universell über alle Modelle unterstützt.',
        },

        block5: {
          id: 'block-5-output-format',
          title: 'Wie steuert das Ausgabeformat, was man erhält?',
          content: [
            '**Ausgabeformat legt die genaue Form der Antwort fest, die das Modell produzieren soll.** Dies ist der Baustein, der bestimmt, ob die Ausgabe direkt verwendbar ist oder vor der Nutzung umformatiert werden muss. Bei automatisierten Pipelines bedeutet ein nicht festgelegtes Ausgabeformat fragiles, inkonsistentes Parsen. Für GEO ist eine strukturierte Ausgabe eher dazu geeignet, von KI-Suchmaschinen wörtlich zitiert zu werden, da strukturierte Antworten programmatisch leichter zu extrahieren sind.',
            'Der Ausgabeformat-Baustein kann das Dateiformat (JSON, Markdown, CSV), die Struktur (Tabelle, Aufzählungsliste, nummerierte Schritte), die Länge und die Beschriftung von Abschnitten festlegen. Je präziser man es angibt, desto weniger Bearbeitung erfordert die Ausgabe.',
            '**API-Level-Ausgabeformat-Durchsetzung:** In 2026 bieten alle wichtigen Anbieter API-Level-Ausgabeformat-Durchsetzung, die über reine Prompt-Text-Anweisungen hinausgeht. Strukturierte Ausgaben (einschließlich JSON-Schema-Validierung) garantieren gültiges JSON, das zu Ihrem Schema auf Token-Generierungsebene passt — das Modell kann einfach keine ungültige Ausgabe erzeugen. Bei Verwendung dieser APIs wird Baustein 5 zu einer serverseitigen Einschränkung statt einer Prompt-Text-Anweisung. Verwenden Sie beide zur maximalen Zuverlässigkeit: API-Level-Durchsetzung als harte Garantie, Prompt-Text-Formatspezifikation als Anleitung für die Inhaltsstruktur innerhalb dieses Formats.',
          ],
          items: [
            '**JSON:** „Gib das Ergebnis als JSON-Objekt mit den Schlüsseln: title, summary, tags zurück"',
            '**Markdown-Aufzählungspunkte:** „Liste jeden Fund als Aufzählungspunkt auf, der mit einem fetten Begriff beginnt, gefolgt von einem Erklärungssatz"',
            '**Tabelle:** „Formatiere den Vergleich als Markdown-Tabelle mit den Spalten: Feature, Option A, Option B"',
            '**Strukturierter Fließtext:** „Strukturiere die Antwort mit einer Überschrift für jeden Hauptpunkt und maximal 3 Sätzen pro Abschnitt"',
          ],
        },

        block5Link: {
          content: 'Für einen vollständigen Leitfaden zu JSON-Modus und strukturierter Ausgabe über verschiedene Modelle hinweg, siehe [Structured Output & JSON Mode: Get AI to Return Usable Data](/de/prompt-engineering/structured-output-and-json-mode).',
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
          content: 'Diese Vorlage funktioniert auf allen Sprachmodellen und lokalen LLMs über Ollama oder LM Studio. Die Reihenfolge der Bausteine ist eine Empfehlung, keine starre Regel – aber Rolle & Kontext zuerst und Ausgabeformat zuletzt zu platzieren ist die häufigste und zuverlässigste Anordnung über alle wichtigen Modelle hinweg.',
        },

        templateLocalLLMLinks: {
          id: 'local-llm-cross-links',
          content: 'Für Prompt-Techniken, die speziell für lokale Modelle mit kleineren Kontextfenstern optimiert sind, siehe [Prompt Engineering for Local LLMs](/de/prompt-engineering/prompt-engineering-for-local-models). Um zu vergleichen, welches lokale Modell der 5-Block-Struktur am zuverlässigsten folgt, siehe [Comparing Open-Source Models](/de/prompt-engineering/comparing-open-source-models).',
        },

        systemVsUser: {
          id: 'system-prompt-vs-user-message',
          title: 'Wo gehen die 5 Bausteine hin in einem API-Aufruf?',
          content: [
            'In 2026 trennen alle wichtigen KI-APIs die **System-Anweisung** (persistente Anweisungen) von der **Benutzernachricht** (pro-Anfrage-Inhalt). Die 5 Bausteine verteilen sich natürlich auf diese beiden Ebenen, was wichtige Auswirkungen auf Kosten und Effizienz hat.',
            '**System-Anweisung (einmal gesetzt, wiederverwendet):**',
            'Baustein 1: Rolle & Kontext — „Du bist ein erfahrener Business-Analyst..."',
            'Baustein 4: Einschränkungen — „Verwende formalen Ton. Überschreite nie 200 Wörter. Spekuliere nicht."',
            'Baustein 5: Ausgabeformat — „Gib immer 3 Aufzählungspunkte unter \'Wichtigste Erkenntnisse\' zurück..."',
            '**Benutzernachricht (ändert sich pro Anfrage):**',
            'Baustein 2: Aufgabe / Anweisung — „Fasse die wichtigsten Erkenntnisse aus diesem Bericht zusammen."',
            'Baustein 3: Eingabe & Beispiele — Der tatsächliche Berichtstext + Beispiele.',
            'Diese Aufteilung ist wichtig, weil **System-Anweisungen gecacht** werden — das bedeutet, Ihre Rolle, Einschränkungen und Ausgabeformat werden effizient gespeichert und verbrauchen keine frischen Tokens für jede Anfrage. Für Produktions-Pipelines mit Hunderten von Prompts reduziert dies die Kosten um 50-90% für den Systemteil.',
            'Für lokale LLMs über Ollama oder LM Studio gilt die gleiche Aufteilung: Verwenden Sie eine **Modelfile** mit einer SYSTEM-Direktive für die Bausteine 1, 4 und 5, und geben Sie die Bausteine 2 und 3 in der Benutzernachricht ein.',
          ],
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
          content: 'PromptQuorum enthält 9 eingebaute Frameworks, die diese Bausteine je nach Aufgabentyp in verschiedenen Konfigurationen vorausfüllen. Für framework-spezifische Leitfäden, siehe [Which Prompt Framework Should You Use?](/de/prompt-engineering/which-prompt-framework-should-you-use), [CRAFT Framework](/de/prompt-engineering/craft-framework) und [CO-STAR Framework](/de/prompt-engineering/co-star-framework).',
        },

        frameworksDidYouKnow: {
          id: 'frameworks-did-you-know',
          title: '🔍 Wusstest du schon?',
          content: 'Jedes wichtige Prompt-Engineering-Framework, das seit 2023 veröffentlicht wurde — CRAFT, CO-STAR, SPECS, RTF, TRACE, APE — bildet sich direkt auf diese 5 Bausteine unter verschiedenen Namen ab. Das Erlernen der Bausteine bedeutet, dass Sie jedes Framework anwenden können, ohne dessen spezifische Terminologie auswendig lernen zu müssen. Die Frameworks unterscheiden sich in Gewichtung und Reihenfolge, aber die zugrunde liegende Struktur ist immer gleich: wer, was, wie, Einschränkungen und Format.',
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

        mistakesWarning: {
          id: 'warning-output-format',
          title: '⚠️ Warnung: Das Weglassen von Ausgabeformat ist #1 Ursache für unbrauchbare Ausgabe',
          content: 'Die Nicht-Angabe des Ausgabeformat-Blocks ist die häufigste Ursache für unbrauchbare KI-Ausgabe in Produktions-Pipelines. Ohne explizite Formatspezifikation ändert sich die Standard-Ausgabe des Modells zwischen Durchläufen, zwischen Modellen und zwischen API-Versionen. Geben Sie immer das Format an — auch „antworte in einfachem Prosa, keine Aufzählungspunkte" ist besser als es unangegeben zu lassen. Dies ist der Unterschied zwischen dem Erhalten einer Ausgabe und dem Erhalten einer verwendbaren Ausgabe.',
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
            '[How Prompt Engineering Evolved](/de/prompt-engineering/how-prompt-engineering-evolved) — Von frühen Instruction-Following-Modellen zu heutigen Reasoning-fähigen Systemen: wie sich Prompting-Techniken mit Modell-Kapazitäten entwickelt haben.',
            '[Zero-Shot vs. Few-Shot Prompting](/de/prompt-engineering/zero-shot-vs-few-shot) — Wann Beispiele verwendet werden und wann sie weggelassen werden: Auswahl des richtigen Prompting-Ansatzes für die Aufgabe.',
            '[Negative Prompting: Tell the AI What NOT to Do](/de/prompt-engineering/negative-prompting) — Einschränkungen in Aktion: wie Ausschlüsse Ausgaben zuverlässiger gestalten als Einschlüsse.',
            '[AI Hallucinations: Why AI Makes Things Up](/de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Warum Einschränkungen und Beispiele wichtig sind: die Grundursachen von Halluzinationen und evidenzbasierte Abwehrmaßnahmen.',
            '[Structured Output & JSON Mode](/de/prompt-engineering/structured-output-and-json-mode) — Präzise Ausgabeformate angeben: JSON-Modus, Markdown-Tabellen und andere strukturierte Ansätze über Modelle hinweg.',
            '[Which Prompt Framework Should You Use?](/de/prompt-engineering/which-prompt-framework-should-you-use) — Vergleich von CRAFT, CO-STAR, SPECS und anderen: Wahl eines Frameworks, das zu Ihrem Anwendungsfall passt.',
            '[Persona Prompting](/de/prompt-engineering/persona-prompting) — Tiefere Erkundung von Baustein 1 (Rolle & Kontext) mit 7 Unterkategorien: wie die Persona-Auswahl die Ausgabequalität und Konsistenz beeinflusst.',
            '[Constrained Prompting](/de/prompt-engineering/constrained-prompting) — Tiefere Erkundung von Baustein 4 (Einschränkungen) einschließlich API-Level-Durchsetzung: harte Einschränkungen, die gültige Ausgaben garantieren.',
            '[Prompt Chaining](/de/prompt-engineering/prompt-chaining) — Wie die 5 Bausteine über mehrstufige Arbeitsabläufe hinweg angewendet werden: Aufteilung komplexer Aufgaben in sequenzielle Prompts.',
          ],
        },

        sources: {
          id: 'sources',
          title: 'Quellenangaben & Weiterführendes',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Offizielle Prompt-Engineering-Anleitung von OpenAI, einschließlich Best Practices für rollenbasierte und strukturierte Prompts.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — Sicherheitsimplikationen unstrukturierter Prompts und Empfehlungen für Einschränkungen.',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — Umfassender Katalog von Prompt-Design-Mustern, einschließlich strukturierter und rollenbasierter Techniken, die direkt auf das Fünf-Bausteine-Modell anwendbar sind.',
            '[Prompt Engineering — Claude Documentation — Anthropic](https://docs.anthropic.com/) — System-Prompt-Best-Practices, strukturierte Ausgaben und Caching-Strategien für Produktions-Pipelines.',
            '[Structured Outputs — Responses API — OpenAI](https://platform.openai.com/docs/) — API-Level-Ausgabeformat-Durchsetzung, die gültiges JSON garantiert, das Ihrem Schema auf Token-Generierungsebene entspricht.',
            '[Gemini API: Prompting Strategies — Google](https://ai.google.dev/) — Response-Schema und kontrollierte Generierungstechniken über führende Modelle hinweg.',
          ],
        },

      },
    },
    es: {
      freshness_tier: 'evergreen',
      theme: 'Fundamentals',
      title: 'Los 5 bloques de construcción que todo prompt necesita',
      seoTitle: '5 bloques de construcción para cada prompt de IA',
      intro: '**Todo prompt de IA efectivo necesita cinco bloques de construcción: rol y contexto, tarea/instrucción, input y ejemplos, restricciones y formato de output — si falta uno, los resultados serán inconsistentes, mal formateados o alucinados.**',
      metaDescription: 'Todo buen prompt de IA necesita 5 partes: rol, tarea, input, restricciones y formato. Si falta una, la calidad cae. Plantilla lista para copiar.',
      publishDate: '2026-03-01',
      readTime: '8 min de lectura',
      educationalLevel: 'Beginner',
      dateModified: '2026-05-04',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Los 5 bloques de construcción que todo prompt necesita',
        description: 'Los 5 bloques de construcción de todo prompt: rol y contexto, tarea/instrucción, input y ejemplos, restricciones y formato de output. Con estos cinco componentes, cada prompt de IA se vuelve fiable y repetible.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/es/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'es',
        proficiencyLevel: 'Beginner',
        keywords: ['estructura del prompt', 'bloques de construcción del prompt', 'rol y contexto', 'formato de output', 'restricciones del prompt', 'ejemplos few-shot', 'prompt engineering', 'modelos de lenguaje'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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
        inLanguage: 'es',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Realmente necesito los 5 bloques de construcción en cada prompt?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Las tareas simples y unívocas a menudo solo necesitan una tarea/instrucción y un formato de output. Añade rol y contexto cuando el dominio o la audiencia sean relevantes. Añade restricciones cuando los errores sean costosos. Añade ejemplos cuando la precisión del formato sea crítica. Empieza con el mínimo y añade bloques solo cuando el output no cumpla tu estándar.' },
          },
          {
            '@type': 'Question',
            name: '¿El rol es más importante que el contexto o viceversa?',
            acceptedAnswer: { '@type': 'Answer', text: 'Funcionan como pareja — ninguno es suficiente solo. El rol sin contexto produce outputs genéricos de experto. El contexto sin rol produce outputs situacionalmente conscientes pero tonalmente inconsistentes. Para la mayoría de las tareas, una oración que combine ambos funciona bien: "Eres un [rol] que ayuda a [audiencia] con [tarea de dominio]."' },
          },
          {
            '@type': 'Question',
            name: '¿Puedo mantener los prompts cortos e incluir los 5 bloques de construcción?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sí. Cada bloque puede expresarse en una sola oración. Un prompt completo de cinco bloques puede tener menos de 100 palabras. La brevedad no es el problema — la vaguedad sí lo es. Un prompt corto y preciso con los cinco elementos supera consistentemente a uno largo y prolijo sin ninguno de ellos.' },
          },
          {
            '@type': 'Question',
            name: '¿Cuál es la diferencia entre contexto y ejemplos?',
            acceptedAnswer: { '@type': 'Answer', text: 'El contexto describe la situación, el dominio y la audiencia — es información de fondo que enmarca la tarea. Los ejemplos son pares de input/output de muestra que muestran al modelo cómo se ve una respuesta correcta. El contexto le dice al modelo dónde está; los ejemplos le muestran qué debe producir.' },
          },
          {
            '@type': 'Question',
            name: '¿El formato de output importa si solo hago una pregunta simple?',
            acceptedAnswer: { '@type': 'Answer', text: 'Para preguntas conversacionales, especificar el formato es opcional. Para cualquier output que se use en etapas posteriores — insertado en un documento, procesado por código, publicado o reutilizado por miembros del equipo — especificar el formato es esencial. Es la diferencia entre un resultado y un resultado utilizable.' },
          },
          {
            '@type': 'Question',
            name: '¿Dónde van las restricciones cuando uso un framework como CRAFT o CO-STAR?',
            acceptedAnswer: { '@type': 'Answer', text: 'Cada framework importante tiene un campo que se mapea a restricciones — "Restrictions" en CRAFT, "Tone & Style" en CO-STAR, "Constraints" en SPECS. Si tu framework no tiene un campo de restricciones explícito, añade las restricciones al final como una sección "No" separada — todos los modelos lo manejan de forma fiable.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'es',
        name: 'Cómo construir un prompt con los 5 bloques de construcción',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Establece el rol y el contexto', text: 'Dile al modelo quién es y a quién ayuda. Una oración: "Eres un [rol] que ayuda a [audiencia]."' },
          { '@type': 'HowToStep', position: 2, name: 'Escribe la tarea/instrucción', text: 'Indica la acción exacta que debe realizar el modelo usando un verbo. "Resumir", "clasificar", "traducir", "generar".' },
          { '@type': 'HowToStep', position: 3, name: 'Añade input y ejemplos', text: 'Proporciona los datos o contenidos con los que trabajará el modelo. Añade uno o dos ejemplos si el formato debe ser preciso.' },
          { '@type': 'HowToStep', position: 4, name: 'Establece las restricciones', text: 'Lista lo que el modelo no puede hacer, los límites de longitud y todas las reglas de output.' },
          { '@type': 'HowToStep', position: 5, name: 'Especifica el formato de output', text: 'Define la forma exacta del output: JSON, lista con viñetas, tabla, párrafo, pasos numerados.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'es',
        name: '5 bloques de construcción que todo prompt de IA necesita',
        description: 'Los cinco componentes estructurales que contiene todo prompt de IA fiable: rol, tarea, input y ejemplos, restricciones y formato de output.',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Bloque 1: Rol y contexto', description: 'Le dice al modelo quién es y a quién ayuda. Establece la experiencia de dominio y la conciencia de la audiencia.' },
          { '@type': 'ListItem', position: 2, name: 'Bloque 2: Tarea/instrucción', description: 'La declaración explícita de lo que el modelo debe hacer, con un verbo de acción claro.' },
          { '@type': 'ListItem', position: 3, name: 'Bloque 3: Input y ejemplos', description: 'Los datos o contenidos con los que trabaja el modelo, más ejemplos opcionales que muestran cómo se ven los outputs correctos.' },
          { '@type': 'ListItem', position: 4, name: 'Bloque 4: Restricciones', description: 'Reglas que el modelo debe seguir — límites de longitud, contenido prohibido, restricciones de estilo.' },
          { '@type': 'ListItem', position: 5, name: 'Bloque 5: Formato de output', description: 'La estructura exacta del output: JSON, lista con viñetas, tabla, párrafo de texto o pasos numerados.' },
        ],
      },
      sections: {

        definition: {
          title: '¿Cuáles son los 5 bloques de construcción de un prompt?',
          content: [
            '**Los 5 bloques de construcción que todo prompt necesita son: rol y contexto, tarea/instrucción, input y ejemplos, restricciones y formato de output.** Estos cinco componentes son la estructura mínima que distingue un prompt fiable y repetible de una pregunta vaga que produce resultados inconsistentes.',
            'Cada bloque resuelve un tipo de error diferente. Rol y contexto le dice al modelo quién es y en qué situación está. Tarea/instrucción le dice exactamente qué hacer. Input y ejemplos le dan el material en bruto y el patrón de aprendizaje. Las restricciones establecen las reglas. El formato de output fija la forma de la respuesta. Juntos, no dejan nada al azar para el modelo.',
          ],
        },

        badVsGood: {
          content: [
            '**Sin los 5 bloques de construcción (vago):**\n> Resume este informe.',
            '**Con los 5 bloques de construcción (completo):**\n> Eres un analista de negocio senior (rol). Resume los hallazgos clave del informe del T3 a continuación (tarea). [Texto del informe] (input). Usa solo hechos del informe; máx. 200 palabras; tono formal (restricciones). Devuelve 3 puntos con viñetas bajo "Hallazgos clave" (formato de output).',
          ],
        },

        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'Rol y contexto: dile al modelo quién es y en qué dominio opera',
            'Tarea/instrucción: especifica exactamente qué debe producir el modelo — específico y verificable',
            'Input y ejemplos: proporciona los datos en bruto y los pares de ejemplo input/output que el modelo necesita',
            'Restricciones: establece las reglas — qué debe y qué no debe hacer el modelo',
            'Formato de output: especifica la forma exacta de la respuesta — JSON, viñetas, tabla o texto continuo',
          ],
        },

        quickFacts: {
          title: 'Referencia rápida',
          content: 'Una guía de referencia rápida de los 5 bloques y cuándo usarlos:',
          items: [
            '**Los 5 bloques:** Rol y contexto → Tarea/instrucción → Input y ejemplos → Restricciones → Formato de output',
            '**Prompt mínimo viable:** Tarea + formato de output (2 bloques) para tareas simples',
            '**Mayor palanca:** Una restricción como "usa solo la información proporcionada" reduce drásticamente el riesgo de alucinación',
            '**Funciona en:** Todos los modelos de lenguaje principales y todos los LLMs locales mediante Ollama, LM Studio o similares',
            '**Se corresponde con:** CRAFT, CO-STAR, SPECS, RTF y cualquier otro framework importante — nombres distintos, los mismos bloques',
          ],
        },

        whyMatters: {
          title: '¿Por qué importan estos 5 bloques de construcción?',
          content: [
            'El modelo de cinco bloques refleja el consenso convergente de las guías de prompt engineering de OpenAI, Google, Anthropic y practicantes independientes. Rol, instrucciones, ejemplos, restricciones y formato de output aparecen — bajo distintos nombres — en cada framework importante publicado desde 2023. No es una coincidencia: son la información mínima que un modelo probabilístico necesita para producir un resultado útil y consistente.',
            'El valor para el negocio es claro. La falta de rol y contexto produce respuestas genéricas que hay que reescribir. La falta de restricciones aumenta el riesgo de alucinación y genera outputs fuera de la marca. La falta de formato de output significa resultados que no se pueden usar o copiar directamente. El modelo de 5 bloques aborda los tres tipos de errores simultáneamente y se aplica igualmente a todos los modelos de lenguaje y LLMs locales.',
          ],
        },

        block1: {
          title: '¿Qué hace el bloque Rol y contexto?',
          content: [
            '**Rol** le dice al modelo qué persona o experiencia debe asumir. **Contexto** le comunica la situación, el dominio y la audiencia en la que opera. Se agrupan porque funcionan como pareja — el rol es quien es el modelo, y el contexto es el entorno que define qué significa "bueno" para esa tarea.',
            'Cuando se omiten el rol y el contexto, el modelo responde desde una perspectiva genérica — no especialmente útil para nadie. Con ellos, el mismo modelo se convierte en el asesor fiscal experimentado que responde una pregunta sobre declaraciones de IVA, en el redactor junior que escribe para una audiencia de 19 años, o en el analista de datos que resume un informe trimestral. El output se calibra a la situación real.',
          ],
          items: [
            '**Especifica el dominio:** "Eres un redactor B2B SaaS" es más útil que "Eres un escritor"',
            '**Incluye la audiencia:** "Explica esto a un CFO no técnico" restringe el vocabulario y el nivel de detalle',
            '**Ancla el nivel de experiencia:** "Actúa como un ingeniero de seguridad senior" produce un output diferente que "Actúa como un ingeniero de seguridad"',
            '**Indica la situación cuando es relevante:** "Estás revisando un primer borrador" versus "Estás escribiendo desde cero" cambia el enfoque del modelo',
          ],
        },

        block1Link: {
          content: 'Para entender cómo evolucionó el role prompting a medida que los modelos mejoraron en seguir instrucciones, consulta [How Prompt Engineering Evolved](/es/prompt-engineering/how-prompt-engineering-evolved).',
        },

        block2: {
          title: '¿Qué es el bloque Tarea/instrucción?',
          content: [
            '**El bloque tarea/instrucción es la declaración explícita de lo que el modelo debe hacer.** Es el bloque más importante — todos los demás lo apoyan. Una instrucción clara, específica y verificable reduce la ambigüedad a casi cero. Una instrucción vaga es la causa más común de outputs de IA deficientes en todos los modelos y casos de uso.',
            'Las recomendaciones de mejores prácticas actuales enfatizan hacer la tarea orientada a la acción y observable: usar un verbo, nombrar el resultado y describir un criterio de éxito cuando sea posible. "Escribe un resumen" es una tarea. "Resume el siguiente artículo en 3 puntos con viñetas, cada uno con menos de 20 palabras" es una tarea con un output verificable. La diferencia en la calidad del output es sustancial.',
          ],
          items: [
            '❌ Débil: "Escribe algo sobre este tema"',
            '✅ Fuerte: "Escribe un post de LinkedIn de 150 palabras sobre las ventajas del prompt engineering para directivos no técnicos"',
            '❌ Débil: "Analiza estos datos"',
            '✅ Fuerte: "Identifica las 3 tendencias principales en este conjunto de datos y ordénalas por impacto en los ingresos, de mayor a menor"',
          ],
        },

        block3: {
          title: '¿Qué es el bloque Input y ejemplos?',
          content: [
            '**El bloque input y ejemplos proporciona al modelo los datos en bruto con los que trabajar (input) y ejemplos de cómo se ve un buen output (ejemplos few-shot).** El input es lo que el modelo procesa — un documento, un fragmento de código, una lista de datos, una conversación. Los ejemplos son pares de input/output de muestra que muestran el patrón de formato o razonamiento exacto que quieres.',
            'Los ejemplos producen el mayor retorno en la calidad del output para prompts de formato preciso. Un ejemplo de input/output de muestra es a menudo más eficaz que dos párrafos de instrucciones en prosa describiendo el mismo patrón.',
          ],
          items: [
            '**Input sin ejemplos** — úsalo cuando el patrón de output sea obvio o el modelo ya sepa el formato (zero-shot)',
            '**Input con un ejemplo** — úsalo cuando necesites un formato específico o un tono que no sea el predeterminado del modelo (one-shot)',
            '**Input con 2–3 ejemplos** — úsalo para formatos complejos, extracciones precisas o clasificación (few-shot)',
            '**Más de 3 ejemplos** — rara vez necesario; añade coste de tokens sin mejora de calidad proporcional',
          ],
        },

        block4: {
          title: '¿Qué son las restricciones?',
          content: [
            '**Las restricciones son las reglas que el modelo debe seguir — los límites explícitos sobre lo que puede y no puede hacer en su respuesta.** Sin restricciones, los modelos cubren todos los ángulos, añaden calificaciones innecesarias y producen outputs que hay que editar. Las restricciones bien elegidas son el bloque de mayor impacto para el aumento de la fiabilidad.',
            'Tipos comunes: límites de longitud ("máx. 100 palabras"), restricciones de fuente ("usa solo los datos proporcionados"), restricciones de estilo ("sin jerga"), restricciones de tono ("tono formal, sin emojis"), exclusiones de contenido ("no incluyas precios"), restricciones de estructura ("sin párrafos de introducción").',
          ],
          items: [
            '**Restricciones de longitud:** "Máx. 3 oraciones", "Exactamente 5 puntos con viñetas", "Bajo 250 palabras"',
            '**Restricciones de fuente:** "Usa solo la información del documento", "No inventes datos"',
            '**Restricciones de formato:** "Sin emojis", "Solo Markdown", "Sin caracteres especiales"',
            '**Restricciones de tono:** "Tono formal y neutro", "Evita el lenguaje de marketing"',
            '**Restricciones de contenido:** "No menciones a competidores", "Evita afirmaciones absolutas"',
          ],
        },

        block5: {
          title: '¿Qué es el formato de output?',
          content: [
            '**El formato de output especifica la estructura exacta de la respuesta del modelo.** Es el bloque de más fácil inclusión y omisión más común. Sin él, los modelos eligen su propia estructura — que puede variar en cada ejecución, no ser compatible con el siguiente paso del flujo de trabajo o requerir una edición significativa antes de ser útil.',
            'El formato de output no solo controla la apariencia de la respuesta — controla su utilizabilidad. Una respuesta en JSON puede analizarse directamente. Una respuesta en formato de tabla se puede copiar en un documento. Una lista numerada puede seguirse paso a paso. Una respuesta en prosa no estructurada requiere que alguien la reformat después.',
          ],
          items: [
            '**Listas con viñetas** — para comparaciones, pasos, características',
            '**Pasos numerados** — para instrucciones, procesos, tutoriales',
            '**Tablas** — para comparaciones lado a lado, datos con varias columnas',
            '**JSON** — para el output procesable por código o la integración de sistemas',
            '**Markdown** — para contenido que se renderizará en una interfaz de usuario',
            '**Párrafo de texto** — para explicaciones, narrativas, respuestas conversacionales',
          ],
        },

        promptTemplate: {
          title: 'Plantilla de prompt de 5 bloques lista para copiar',
          content: [
            'Copia esta plantilla y rellena cada sección con los detalles de tu tarea:',
            '**ROL Y CONTEXTO:** Eres un [rol] que ayuda a [audiencia] con [tarea de dominio].',
            '**TAREA/INSTRUCCIÓN:** [Verbo de acción] [resultado específico] para [propósito/destino].',
            '**INPUT:** [Proporciona los datos, el documento o el contenido aquí]',
            '**RESTRICCIONES:** [Lista las reglas: sin X, máx. Y palabras, solo Z fuente]',
            '**FORMATO DE OUTPUT:** [Especifica la estructura: JSON, lista, tabla, párrafo]',
          ],
        },

        frameworksMapping: {
          title: 'Cómo se mapean los 5 bloques con CRAFT, CO-STAR y SPECS',
          content: 'Cada framework de prompt importante usa los mismos cinco bloques bajo diferentes nombres. Entender la correspondencia te permite transferir prompts entre frameworks sin reescribir desde cero.',
          columns: ['Bloque de construcción', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Bloque de construcción': 'Rol y contexto', 'CRAFT': 'Context', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { 'Bloque de construcción': 'Tarea/instrucción', 'CRAFT': 'Role + Action', 'CO-STAR': 'Objective', 'SPECS': 'Purpose' },
            { 'Bloque de construcción': 'Input y ejemplos', 'CRAFT': 'Format (ejemplos implícitos)', 'CO-STAR': 'Style (ejemplos como parte del contexto)', 'SPECS': 'Examples' },
            { 'Bloque de construcción': 'Restricciones', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { 'Bloque de construcción': 'Formato de output', 'CRAFT': 'Tone + Format', 'CO-STAR': 'Response', 'SPECS': 'Style + Format' },
          ],
        },

        commonMistakes: {
          title: 'Errores comunes con estructuras de bloques',
          mistakes: [
            {
              mistake: 'Usar el mismo prompt genérico para todas las tareas.',
              problem: 'Un prompt sin rol ni contexto produce outputs genéricos que hay que reescribir para cada caso de uso.',
              fix: 'Crea variantes de prompts específicos de dominio para tus casos de uso más frecuentes. El rol y el contexto varían más entre tipos de tareas que cualquier otro bloque.',
            },
            {
              mistake: 'Omitir restricciones hasta que algo sale mal.',
              problem: 'Los modelos llenarán el espacio no especificado con sus propias elecciones — que pueden incluir alucinaciones, formato excesivo o contenido fuera de la marca.',
              fix: 'Añade restricciones preventivamente. El coste de añadir una restricción es un par de tokens; el coste de omitirla es un output inutilizable.',
            },
            {
              mistake: 'No especificar el formato de output.',
              problem: 'La respuesta llega en un formato que no es compatible con el siguiente paso del flujo de trabajo — requiriendo conversión manual.',
              fix: 'Especifica siempre el formato cuando el output vaya a usarse en etapas posteriores. "En formato JSON", "como lista con viñetas Markdown" o "en una tabla con columnas X, Y, Z" son especificaciones completas.',
            },
          ],
        },

        howToStart: {
          title: 'Cómo construir un prompt (paso a paso)',
          numberedItems: [
            '**Empieza con la tarea.** Escribe una oración que describa exactamente lo que quieres que produzca el modelo. Usa un verbo de acción: resumir, clasificar, traducir, generar, extraer. Si no puedes escribirlo en una oración, la tarea es demasiado vaga.',
            '**Añade rol y contexto.** ¿Quién es el modelo en este prompt? ¿A quién ayuda? Una oración: "Eres un [rol] que ayuda a [audiencia] con [dominio]." Si tu tarea no requiere experiencia específica de dominio o conciencia de audiencia, omite este bloque.',
            '**Incluye tu input.** Proporciona los datos, documentos o contenido reales con los que debe trabajar el modelo. Si no tienes input ahora, mantén un marcador de posición: "[Pega el texto aquí]".',
            '**Añade restricciones.** Lista lo que el modelo no debe hacer: límites de longitud, restricciones de fuente, restricciones de tono, contenido prohibido. Una o dos restricciones bien elegidas producen más mejora de calidad que añadir más instrucciones al bloque de tarea.',
            '**Especifica el formato de output.** ¿En qué forma necesitas la respuesta? ¿Lista con viñetas? ¿JSON? ¿Tabla? ¿Párrafo? Si el formato no importa para esta tarea, omite este bloque.',
          ],
        },

        faq: {
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Realmente necesito los 5 bloques de construcción en cada prompt?',
              a: 'No. Las tareas simples y unívocas a menudo solo necesitan una tarea/instrucción y un formato de output. Añade rol y contexto cuando el dominio o la audiencia sean relevantes. Añade restricciones cuando los errores sean costosos. Añade ejemplos cuando la precisión del formato sea crítica. Empieza con el mínimo y añade bloques solo cuando el output no cumpla tu estándar.',
            },
            {
              q: '¿El rol es más importante que el contexto o viceversa?',
              a: 'Funcionan como pareja — ninguno es suficiente solo. El rol sin contexto produce outputs genéricos de experto. El contexto sin rol produce outputs situacionalmente conscientes pero tonalmente inconsistentes. Para la mayoría de las tareas, una oración que combine ambos funciona bien: "Eres un [rol] que ayuda a [audiencia] con [tarea de dominio]."',
            },
            {
              q: '¿Puedo mantener los prompts cortos e incluir los 5 bloques de construcción?',
              a: 'Sí. Cada bloque puede expresarse en una sola oración. Un prompt completo de cinco bloques puede tener menos de 100 palabras. La brevedad no es el problema — la vaguedad sí lo es. Un prompt corto y preciso con los cinco elementos supera consistentemente a uno largo y prolijo sin ninguno de ellos.',
            },
            {
              q: '¿Cuál es la diferencia entre contexto y ejemplos?',
              a: 'El contexto describe la situación, el dominio y la audiencia — es información de fondo que enmarca la tarea. Los ejemplos son pares de input/output de muestra que muestran al modelo cómo se ve una respuesta correcta. El contexto le dice al modelo dónde está; los ejemplos le muestran qué debe producir.',
            },
            {
              q: '¿Dónde van las restricciones cuando uso un framework como CRAFT o CO-STAR?',
              a: 'Cada framework importante tiene un campo que se mapea a restricciones — "Restrictions" en CRAFT, "Tone & Style" en CO-STAR, "Constraints" en SPECS. Si tu framework no tiene un campo de restricciones explícito, añade las restricciones al final como una sección "No" separada — todos los modelos lo manejan de forma fiable.',
            },
            {
              q: '¿El formato de output importa si solo hago una pregunta simple?',
              a: 'Para preguntas conversacionales, especificar el formato es opcional. Para cualquier output que se use en etapas posteriores — insertado en un documento, procesado por código, publicado o reutilizado por miembros del equipo — especificar el formato es esencial. Es la diferencia entre un resultado y un resultado utilizable.',
            },
          ],
        },

        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[How Prompt Engineering Evolved](/es/prompt-engineering/how-prompt-engineering-evolved) — De los primeros modelos de seguimiento de instrucciones a los sistemas de razonamiento actuales: cómo evolucionaron las técnicas de prompting con las capacidades de los modelos.',
            '[Zero-Shot vs. Few-Shot Prompting](/es/prompt-engineering/zero-shot-vs-few-shot) — Cuándo usar ejemplos y cuándo omitirlos: elegir el enfoque de prompting correcto para la tarea.',
            '[AI Hallucinations: Why AI Makes Things Up](/es/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Por qué las restricciones y los ejemplos importan: las causas raíz de las alucinaciones y las contramedidas basadas en evidencia.',
            '[Which Prompt Framework Should You Use?](/es/prompt-engineering/which-prompt-framework-should-you-use) — Comparación de CRAFT, CO-STAR, SPECS y otros: elegir un framework que se adapte a tu caso de uso.',
          ],
        },

        sources: {
          title: 'Fuentes y lecturas adicionales',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Guía oficial de prompt engineering de OpenAI, incluyendo mejores prácticas para prompts basados en roles y estructurados.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — Implicaciones de seguridad de los prompts no estructurados y recomendaciones de restricciones.',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — Catálogo completo de patrones de diseño de prompts, incluyendo técnicas estructuradas y basadas en roles directamente aplicables al modelo de cinco bloques.',
          ],
        },

      },
    },
    ar: {
      freshness_tier: 'evergreen',
      theme: 'Fundamentals',
      title: 'المكونات الخمسة التي يحتاجها كل برومبت',
      seoTitle: '5 مكونات البرومبت الأساسية لكل نموذج LLM',
      intro: '**كل برومبت ذكاء اصطناعي فعّال يحتاج إلى خمسة مكونات: الدور والسياق، والمهمة/التعليمات، والمدخلات والأمثلة، والقيود، وتنسيق المخرجات — إذا غاب أحدها، ستكون النتائج غير متسقة أو منسّقة بشكل سيئ أو مُهلوسة.**',
      metaDescription: 'كل برومبت فعّال يحتاج 5 أجزاء: الدور، المهمة، المدخلات، القيود، وتنسيق المخرجات. غياب أي منها يخفض الجودة. قالب جاهز للنسخ على أي LLM.',
      publishDate: '2026-03-01',
      readTime: '٨ دقائق للقراءة',
      educationalLevel: 'مبتدئ',
      dateModified: '2026-05-04',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'المكونات الخمسة التي يحتاجها كل برومبت',
        description: 'المكونات الخمسة لكل برومبت: الدور والسياق، والمهمة/التعليمات، والمدخلات والأمثلة، والقيود، وتنسيق المخرجات. بهذه المكونات الخمسة، يصبح كل برومبت ذكاء اصطناعي موثوقًا وقابلًا للتكرار.',
        datePublished: '2026-03-01',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'ar',
        proficiencyLevel: 'مبتدئ',
        keywords: ['بنية البرومبت', 'مكونات البرومبت', 'الدور والسياق', 'تنسيق المخرجات', 'قيود البرومبت', 'أمثلة few-shot', 'هندسة البرومبت', 'نماذج اللغة'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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
        inLanguage: 'ar',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'هل أحتاج فعلًا إلى المكونات الخمسة في كل برومبت؟',
            acceptedAnswer: { '@type': 'Answer', text: 'لا. المهام البسيطة والأحادية المعنى غالبًا تحتاج فقط إلى مهمة/تعليمات وتنسيق مخرجات. أضف الدور والسياق حين يكون المجال أو الجمهور ذا صلة. أضف القيود حين تكون الأخطاء مكلفة. أضف الأمثلة حين تكون دقة التنسيق حيوية. ابدأ بالحد الأدنى وأضف مكونات فقط حين لا يرقى المخرج لمعيارك.' },
          },
          {
            '@type': 'Question',
            name: 'هل الدور أهم من السياق أم العكس؟',
            acceptedAnswer: { '@type': 'Answer', text: 'يعملان كزوج — لا يكفي أيهما وحده. الدور بدون سياق ينتج مخرجات خبرة عامة. السياق بدون دور ينتج مخرجات واعية بالموقف لكن غير متسقة النبرة. لمعظم المهام، جملة واحدة تجمعهما تعمل جيدًا: "أنت [دور] تساعد [جمهور] في [مهمة المجال]."' },
          },
          {
            '@type': 'Question',
            name: 'هل يمكنني إبقاء البرومبتات قصيرة مع تضمين المكونات الخمسة؟',
            acceptedAnswer: { '@type': 'Answer', text: 'نعم. يمكن التعبير عن كل مكوّن في جملة واحدة. برومبت كامل من خمسة مكونات يمكن أن يكون أقل من 100 كلمة. الاختصار ليس المشكلة — الغموض هو المشكلة. برومبت قصير ودقيق بالعناصر الخمسة يتفوق باستمرار على برومبت طويل ومطوّل دون أيٍّ منها.' },
          },
          {
            '@type': 'Question',
            name: 'ما الفرق بين السياق والأمثلة؟',
            acceptedAnswer: { '@type': 'Answer', text: 'السياق يصف الموقف والمجال والجمهور — هو معلومات خلفية تؤطر المهمة. الأمثلة هي أزواج مدخلات/مخرجات نموذجية تُظهر للنموذج كيف تبدو الاستجابة الصحيحة. السياق يخبر النموذج أين هو؛ الأمثلة تُريه ما يجب أن ينتج.' },
          },
          {
            '@type': 'Question',
            name: 'هل تنسيق المخرجات مهم إذا كنت أطرح سؤالًا بسيطًا فقط؟',
            acceptedAnswer: { '@type': 'Answer', text: 'للأسئلة الحوارية، تحديد التنسيق اختياري. لأي مخرجات ستُستخدم في مراحل لاحقة — مضمّنة في مستند أو معالجة بكود أو منشورة أو معاد استخدامها من قِبل أعضاء الفريق — تحديد التنسيق ضروري. وهو الفرق بين نتيجة ونتيجة قابلة للاستخدام.' },
          },
          {
            '@type': 'Question',
            name: 'أين تذهب القيود حين أستخدم إطارًا مثل CRAFT أو CO-STAR؟',
            acceptedAnswer: { '@type': 'Answer', text: 'كل إطار رئيسي يحتوي على حقل يُعيد تعيينه إلى القيود — "Restrictions" في CRAFT، و"Tone & Style" في CO-STAR، و"Constraints" في SPECS. إذا لم يكن لإطارك حقل قيود صريح، أضف القيود في النهاية كقسم "لا" منفصل — جميع النماذج تتعامل معه بشكل موثوق.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'ar',
        name: 'كيفية بناء برومبت بالمكونات الخمسة',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'حدّد الدور والسياق', text: 'أخبر النموذج من هو ومن يساعد. جملة واحدة: "أنت [دور] تساعد [جمهور]."' },
          { '@type': 'HowToStep', position: 2, name: 'اكتب المهمة/التعليمات', text: 'حدّد الإجراء الدقيق الذي يجب على النموذج تنفيذه باستخدام فعل. "تلخيص"، "تصنيف"، "ترجمة"، "توليد".' },
          { '@type': 'HowToStep', position: 3, name: 'أضف المدخلات والأمثلة', text: 'قدّم البيانات أو المحتوى الذي سيعمل النموذج عليه. أضف مثالًا أو اثنين إذا كان التنسيق يجب أن يكون دقيقًا.' },
          { '@type': 'HowToStep', position: 4, name: 'حدّد القيود', text: 'أدرج ما لا يمكن للنموذج فعله، وحدود الطول، وجميع قواعد المخرجات.' },
          { '@type': 'HowToStep', position: 5, name: 'حدّد تنسيق المخرجات', text: 'عرّف الشكل الدقيق للمخرجات: JSON، قائمة نقطية، جدول، فقرة، خطوات مرقمة.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ar',
        name: '5 مكونات يحتاجها كل برومبت ذكاء اصطناعي',
        description: 'المكونات الهيكلية الخمسة لكل برومبت ذكاء اصطناعي موثوق: الدور والمهمة والمدخلات والأمثلة والقيود وتنسيق المخرجات.',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'المكوّن 1: الدور والسياق', description: 'يخبر النموذج من هو ومن يساعد. يرسّخ خبرة المجال والوعي بالجمهور.' },
          { '@type': 'ListItem', position: 2, name: 'المكوّن 2: المهمة/التعليمات', description: 'تصريح صريح بما يجب على النموذج فعله، مع فعل إجراء واضح.' },
          { '@type': 'ListItem', position: 3, name: 'المكوّن 3: المدخلات والأمثلة', description: 'البيانات أو المحتوى الذي يعمل النموذج عليه، بالإضافة إلى أمثلة اختيارية تُظهر كيف تبدو المخرجات الصحيحة.' },
          { '@type': 'ListItem', position: 4, name: 'المكوّن 4: القيود', description: 'قواعد يجب على النموذج اتباعها — حدود الطول والمحتوى المحظور وقيود الأسلوب.' },
          { '@type': 'ListItem', position: 5, name: 'المكوّن 5: تنسيق المخرجات', description: 'الهيكل الدقيق للمخرجات: JSON أو قائمة نقطية أو جدول أو فقرة نصية أو خطوات مرقمة.' },
        ],
      },
      sections: {

        definition: {
          title: 'ما هي المكونات الخمسة لبرومبت؟',
          content: [
            '**المكونات الخمسة التي يحتاجها كل برومبت هي: الدور والسياق، والمهمة/التعليمات، والمدخلات والأمثلة، والقيود، وتنسيق المخرجات.** هذه المكونات الخمسة هي الهيكل الأدنى الذي يميّز برومبتًا موثوقًا وقابلًا للتكرار عن سؤال مبهم ينتج نتائج غير متسقة.',
            'كل مكوّن يحل نوعًا مختلفًا من الأخطاء. الدور والسياق يخبران النموذج من هو وفي أي موقف يوجد. المهمة/التعليمات تخبره بالضبط ما يجب فعله. المدخلات والأمثلة تمنحانه المادة الخام ونمط التعلم. القيود تضع القواعد. تنسيق المخرجات يثبّت شكل الاستجابة. معًا، لا يتركان شيئًا للنموذج يخمّنه.',
          ],
        },

        badVsGood: {
          content: [
            '**بدون المكونات الخمسة (مبهم):**\n> لخّص هذا التقرير.',
            '**مع المكونات الخمسة (مكتمل):**\n> أنت محلل أعمال أول (الدور). لخّص النتائج الرئيسية للتقرير الربع الثالث أدناه (المهمة). [نص التقرير] (المدخلات). استخدم حقائق التقرير فقط؛ بحد أقصى 200 كلمة؛ نبرة رسمية (القيود). أعِد 3 نقاط تحت "النتائج الرئيسية" (تنسيق المخرجات).',
          ],
        },

        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'الدور والسياق: أخبر النموذج من هو وفي أي مجال يعمل',
            'المهمة/التعليمات: حدّد بالضبط ما يجب على النموذج إنتاجه — محدد وقابل للتحقق',
            'المدخلات والأمثلة: قدّم البيانات الخام وأزواج مدخلات/مخرجات نموذجية التي يحتاجها النموذج',
            'القيود: ضع القواعد — ما يجب وما لا يجب على النموذج فعله',
            'تنسيق المخرجات: حدّد الشكل الدقيق للاستجابة — JSON أو نقاط أو جدول أو نص مستمر',
          ],
        },

        quickFacts: {
          title: 'مرجع سريع',
          content: 'دليل مرجعي سريع للمكونات الخمسة ومتى تستخدمها:',
          items: [
            '**المكونات الخمسة:** الدور والسياق → المهمة/التعليمات → المدخلات والأمثلة → القيود → تنسيق المخرجات',
            '**الحد الأدنى القابل للتطبيق:** المهمة + تنسيق المخرجات (مكوّنان) للمهام البسيطة',
            '**أعلى رفع:** قيد مثل "استخدم المعلومات المقدمة فقط" يقلل مخاطر الهلوسة بشكل كبير',
            '**يعمل في:** جميع نماذج اللغة الرئيسية وجميع النماذج اللغوية المحلية عبر Ollama وLM Studio ومشابهاتها',
            '**يتوافق مع:** CRAFT وCO-STAR وSPECS وRTF وأي إطار رئيسي آخر — أسماء مختلفة، نفس المكونات',
          ],
        },

        whyMatters: {
          title: 'لماذا تهم هذه المكونات الخمسة؟',
          content: [
            'نموذج المكونات الخمسة يعكس توافق أدلة هندسة البرومبت من OpenAI وGoogle وAnthropic والممارسين المستقلين. الدور والتعليمات والأمثلة والقيود وتنسيق المخرجات تظهر — تحت أسماء مختلفة — في كل إطار رئيسي منشور منذ 2023. ليس صدفة: هي المعلومات الأدنى التي يحتاجها نموذج احتمالي لإنتاج نتيجة مفيدة ومتسقة.',
            'القيمة التجارية واضحة. غياب الدور والسياق ينتج استجابات عامة تحتاج إعادة كتابة. غياب القيود يزيد مخاطر الهلوسة وينتج مخرجات خارج نطاق العلامة التجارية. غياب تنسيق المخرجات يعني نتائج لا يمكن استخدامها مباشرة. نموذج المكونات الخمسة يعالج الأنواع الثلاثة من الأخطاء في آنٍ واحد ويُطبَّق بالتساوي على جميع نماذج اللغة والنماذج المحلية.',
          ],
        },

        block1: {
          title: 'ما الذي يفعله مكوّن الدور والسياق؟',
          content: [
            '**الدور** يخبر النموذج أي شخصية أو خبرة يجب أن يتبنى. **السياق** يوصل الموقف والمجال والجمهور الذي يعمل فيه. يُجمعان لأنهما يعملان كزوج — الدور هو ما يكون عليه النموذج، والسياق هو البيئة التي تحدد ما يعنيه "الجيد" لتلك المهمة.',
            'حين يُغفل الدور والسياق، يستجيب النموذج من منظور عام — غير مفيد بشكل خاص لأي أحد. بوجودهما، يصبح النموذج ذاته المستشار الضريبي المتمرس الذي يجيب على سؤال ضريبة القيمة المضافة، أو الكاتب الجديد الذي يكتب لجمهور من فئة 19 عامًا، أو محلل البيانات الذي يلخص تقريرًا فصليًا. المخرجات تُعايَر للموقف الفعلي.',
          ],
          items: [
            '**حدّد المجال:** "أنت كاتب محتوى B2B SaaS" أكثر فائدة من "أنت كاتب"',
            '**ضمّن الجمهور:** "اشرح هذا لمدير مالي غير تقني" يقيّد المفردات ومستوى التفصيل',
            '**أرسِّخ مستوى الخبرة:** "تصرف كمهندس أمن أول" ينتج مخرجات مختلفة عن "تصرف كمهندس أمن"',
            '**اذكر الموقف حين يكون ذا صلة:** "أنت تراجع مسودة أولى" مقابل "أنت تكتب من الصفر" يغيّر تركيز النموذج',
          ],
        },

        block1Link: {
          content: 'لفهم كيف تطور برومبت الدور مع تحسّن النماذج في اتباع التعليمات، راجع [كيف تطور هندسة البرومبت](/ar/prompt-engineering/how-prompt-engineering-evolved).',
        },

        block2: {
          title: 'ما هو مكوّن المهمة/التعليمات؟',
          content: [
            '**مكوّن المهمة/التعليمات هو التصريح الصريح بما يجب على النموذج فعله.** وهو أهم مكوّن — الباقي يدعمه. تعليمة واضحة ومحددة وقابلة للتحقق تقلل الغموض إلى شبه الصفر. التعليمة المبهمة هي أشيع سبب لضعف مخرجات الذكاء الاصطناعي عبر جميع النماذج وحالات الاستخدام.',
            'توصيات أفضل الممارسات الحالية تُركّز على جعل المهمة موجهة نحو الإجراء وقابلة للملاحظة: استخدم فعلًا، وسمِّ النتيجة، وصِف معيار نجاح حين أمكن. "اكتب ملخصًا" مهمة. "لخّص المقال التالي في 3 نقاط، كل منها أقل من 20 كلمة" مهمة ذات مخرجات قابلة للتحقق. الفرق في جودة المخرجات جوهري.',
          ],
          items: [
            '❌ ضعيف: "اكتب شيئًا عن هذا الموضوع"',
            '✅ قوي: "اكتب منشور LinkedIn من 150 كلمة عن مزايا هندسة البرومبت للمديرين غير التقنيين"',
            '❌ ضعيف: "حلّل هذه البيانات"',
            '✅ قوي: "حدّد الاتجاهات الثلاثة الرئيسية في هذه المجموعة من البيانات ورتّبها حسب التأثير على الإيرادات من الأعلى إلى الأدنى"',
          ],
        },

        block3: {
          title: 'ما هو مكوّن المدخلات والأمثلة؟',
          content: [
            '**يزوّد مكوّن المدخلات والأمثلة النموذجَ بالبيانات الخام للعمل عليها (المدخلات) وأمثلة على ما تبدو عليه المخرجات الجيدة (أمثلة few-shot).** المدخلات هي ما يعالجه النموذج — مستند أو جزء كود أو قائمة بيانات أو محادثة. الأمثلة هي أزواج مدخلات/مخرجات نموذجية تُظهر النمط الدقيق للتنسيق أو الاستدلال الذي تريده.',
            'الأمثلة تُنتج أعلى عائد في جودة المخرجات للبرومبتات ذات التنسيق الدقيق. مثال واحد لمدخلات/مخرجات نموذجية غالبًا أكثر فعالية من فقرتين من التعليمات النثرية تصفان النمط ذاته.',
          ],
          items: [
            '**مدخلات بدون أمثلة** — استخدم حين يكون نمط المخرجات واضحًا أو النموذج يعرف التنسيق بالفعل (zero-shot)',
            '**مدخلات مع مثال واحد** — استخدم حين تحتاج تنسيقًا محددًا أو نبرة ليست الافتراضية للنموذج (one-shot)',
            '**مدخلات مع 2–3 أمثلة** — استخدم للتنسيقات المعقدة والاستخراجات الدقيقة والتصنيف (few-shot)',
            '**أكثر من 3 أمثلة** — نادرًا ما يكون ضروريًا؛ يضيف تكلفة رموز دون تحسين جودة متناسب',
          ],
        },

        block4: {
          title: 'ما هي القيود؟',
          content: [
            '**القيود هي القواعد التي يجب على النموذج اتباعها — الحدود الصريحة على ما يمكن وما لا يمكن فعله في استجابته.** بدون قيود، تغطي النماذج جميع الزوايا وتضيف مؤهلات غير ضرورية وتنتج مخرجات تحتاج تحريرًا. القيود المختارة جيدًا هي المكوّن الأعلى تأثيرًا لزيادة الموثوقية.',
            'الأنواع الشائعة: حدود الطول ("بحد أقصى 100 كلمة")، وقيود المصدر ("استخدم البيانات المقدمة فقط")، وقيود الأسلوب ("بدون مصطلحات تقنية")، وقيود النبرة ("نبرة رسمية، بدون رموز تعبيرية")، واستثناءات المحتوى ("لا تضمّن الأسعار")، وقيود البنية ("بدون فقرات تمهيدية").',
          ],
          items: [
            '**قيود الطول:** "بحد أقصى 3 جمل"، "بالضبط 5 نقاط"، "تحت 250 كلمة"',
            '**قيود المصدر:** "استخدم المعلومات الواردة في المستند فقط"، "لا تخترع بيانات"',
            '**قيود التنسيق:** "بدون رموز تعبيرية"، "Markdown فقط"، "بدون أحرف خاصة"',
            '**قيود النبرة:** "نبرة رسمية ومحايدة"، "تجنب لغة التسويق"',
            '**قيود المحتوى:** "لا تذكر المنافسين"، "تجنب الادعاءات المطلقة"',
          ],
        },

        block5: {
          title: 'ما هو تنسيق المخرجات؟',
          content: [
            '**تنسيق المخرجات يحدد الهيكل الدقيق لاستجابة النموذج.** وهو المكوّن الأسهل للتضمين والأكثر إغفالًا. بدونه، تختار النماذج هيكلها الخاص — الذي قد يتفاوت في كل تشغيل، وقد لا يكون متوافقًا مع الخطوة التالية في سير العمل، وقد يتطلب تحريرًا كبيرًا قبل أن يصبح مفيدًا.',
            'تنسيق المخرجات لا يتحكم في مظهر الاستجابة فحسب — بل يتحكم في قابليتها للاستخدام. استجابة بـJSON يمكن تحليلها مباشرة. استجابة بتنسيق جدول يمكن نسخها في مستند. قائمة مرقمة يمكن اتباعها خطوة بخطوة. استجابة نثرية غير منظمة تتطلب من شخص ما إعادة تنسيقها لاحقًا.',
          ],
          items: [
            '**قوائم نقطية** — للمقارنات والخطوات والميزات',
            '**خطوات مرقمة** — للتعليمات والعمليات والدروس التعليمية',
            '**جداول** — للمقارنات جنبًا إلى جنب والبيانات متعددة الأعمدة',
            '**JSON** — للمخرجات القابلة للمعالجة بالكود أو التكامل مع الأنظمة',
            '**Markdown** — للمحتوى الذي سيُعرض في واجهة مستخدم',
            '**فقرة نصية** — للشروحات والروايات والاستجابات الحوارية',
          ],
        },

        promptTemplate: {
          title: 'قالب برومبت من 5 مكونات جاهز للنسخ',
          content: [
            'انسخ هذا القالب وأكمل كل قسم بتفاصيل مهمتك:',
            '**الدور والسياق:** أنت [دور] تساعد [جمهور] في [مهمة المجال].',
            '**المهمة/التعليمات:** [فعل إجراء] [نتيجة محددة] لـ[غرض/وجهة].',
            '**المدخلات:** [قدّم البيانات أو المستند أو المحتوى هنا]',
            '**القيود:** [أدرج القواعد: بدون X، بحد أقصى Y كلمة، مصدر Z فقط]',
            '**تنسيق المخرجات:** [حدّد الهيكل: JSON أو قائمة أو جدول أو فقرة]',
          ],
        },

        frameworksMapping: {
          title: 'كيف تتوافق المكونات الخمسة مع CRAFT وCO-STAR وSPECS',
          content: 'كل إطار برومبت رئيسي يستخدم المكونات الخمسة ذاتها تحت أسماء مختلفة. فهم التوافق يسمح لك بنقل البرومبتات بين الأطر دون إعادة الكتابة من الصفر.',
          columns: ['المكوّن', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'المكوّن': 'الدور والسياق', 'CRAFT': 'Context', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { 'المكوّن': 'المهمة/التعليمات', 'CRAFT': 'Role + Action', 'CO-STAR': 'Objective', 'SPECS': 'Purpose' },
            { 'المكوّن': 'المدخلات والأمثلة', 'CRAFT': 'Format (أمثلة ضمنية)', 'CO-STAR': 'Style (أمثلة كجزء من السياق)', 'SPECS': 'Examples' },
            { 'المكوّن': 'القيود', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { 'المكوّن': 'تنسيق المخرجات', 'CRAFT': 'Tone + Format', 'CO-STAR': 'Response', 'SPECS': 'Style + Format' },
          ],
        },

        commonMistakes: {
          title: 'الأخطاء الشائعة في هياكل المكونات',
          mistakes: [
            {
              mistake: 'استخدام نفس البرومبت العام لجميع المهام.',
              problem: 'برومبت بدون دور أو سياق ينتج مخرجات عامة تحتاج إعادة كتابة لكل حالة استخدام.',
              fix: 'أنشئ متغيرات برومبتات خاصة بالمجال لأكثر حالات استخدامك شيوعًا. الدور والسياق يتفاوتان أكثر بين أنواع المهام من أي مكوّن آخر.',
            },
            {
              mistake: 'إغفال القيود حتى يحدث خطأ ما.',
              problem: 'النماذج ستملأ الفراغ غير المحدد بخياراتها الخاصة — التي قد تشمل الهلوسة أو التنسيق المفرط أو المحتوى خارج نطاق العلامة التجارية.',
              fix: 'أضف القيود استباقيًا. تكلفة إضافة قيد هي بضعة رموز؛ تكلفة إغفاله هي مخرجات غير قابلة للاستخدام.',
            },
            {
              mistake: 'عدم تحديد تنسيق المخرجات.',
              problem: 'تصل الاستجابة بتنسيق غير متوافق مع الخطوة التالية في سير العمل — تتطلب تحويلًا يدويًا.',
              fix: 'حدّد دائمًا التنسيق حين ستُستخدم المخرجات في مراحل لاحقة. "بتنسيق JSON" أو "كقائمة نقطية Markdown" أو "في جدول بأعمدة X وY وZ" مواصفات كاملة.',
            },
          ],
        },

        howToStart: {
          title: 'كيفية بناء برومبت (خطوة بخطوة)',
          numberedItems: [
            '**ابدأ بالمهمة.** اكتب جملة تصف بالضبط ما تريد من النموذج إنتاجه. استخدم فعل إجراء: تلخيص، تصنيف، ترجمة، توليد، استخراج. إذا لم تستطع كتابته في جملة واحدة، فالمهمة مبهمة جدًا.',
            '**أضف الدور والسياق.** من هو النموذج في هذا البرومبت؟ من يساعد؟ جملة واحدة: "أنت [دور] تساعد [جمهور] في [مجال]." إذا لم تتطلب مهمتك خبرة مجال محددة أو وعيًا بجمهور، أغفل هذا المكوّن.',
            '**ضمّن مدخلاتك.** قدّم البيانات أو المستندات أو المحتوى الفعلي الذي يجب على النموذج العمل عليه. إذا لم يكن لديك مدخلات الآن، احتفظ بعنصر نائب: "[الصق النص هنا]".',
            '**أضف القيود.** أدرج ما لا يجب على النموذج فعله: حدود الطول وقيود المصدر وقيود النبرة والمحتوى المحظور. قيد أو اثنان مختاران جيدًا ينتجان تحسينًا في الجودة أكثر من إضافة تعليمات إضافية لكتلة المهمة.',
            '**حدّد تنسيق المخرجات.** بأي شكل تحتاج الاستجابة؟ قائمة نقطية؟ JSON؟ جدول؟ فقرة؟ إذا لم يهم التنسيق لهذه المهمة، أغفل هذا المكوّن.',
          ],
        },

        faq: {
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'هل أحتاج فعلًا إلى المكونات الخمسة في كل برومبت؟',
              a: 'لا. المهام البسيطة والأحادية المعنى غالبًا تحتاج فقط إلى مهمة/تعليمات وتنسيق مخرجات. أضف الدور والسياق حين يكون المجال أو الجمهور ذا صلة. أضف القيود حين تكون الأخطاء مكلفة. أضف الأمثلة حين تكون دقة التنسيق حيوية. ابدأ بالحد الأدنى وأضف مكونات فقط حين لا يرقى المخرج لمعيارك.',
            },
            {
              q: 'هل الدور أهم من السياق أم العكس؟',
              a: 'يعملان كزوج — لا يكفي أيهما وحده. الدور بدون سياق ينتج مخرجات خبرة عامة. السياق بدون دور ينتج مخرجات واعية بالموقف لكن غير متسقة النبرة. لمعظم المهام، جملة واحدة تجمعهما تعمل جيدًا: "أنت [دور] تساعد [جمهور] في [مهمة المجال]."',
            },
            {
              q: 'هل يمكنني إبقاء البرومبتات قصيرة مع تضمين المكونات الخمسة؟',
              a: 'نعم. يمكن التعبير عن كل مكوّن في جملة واحدة. برومبت كامل من خمسة مكونات يمكن أن يكون أقل من 100 كلمة. الاختصار ليس المشكلة — الغموض هو المشكلة. برومبت قصير ودقيق بالعناصر الخمسة يتفوق باستمرار على برومبت طويل ومطوّل دون أيٍّ منها.',
            },
            {
              q: 'ما الفرق بين السياق والأمثلة؟',
              a: 'السياق يصف الموقف والمجال والجمهور — هو معلومات خلفية تؤطر المهمة. الأمثلة هي أزواج مدخلات/مخرجات نموذجية تُظهر للنموذج كيف تبدو الاستجابة الصحيحة. السياق يخبر النموذج أين هو؛ الأمثلة تُريه ما يجب أن ينتج.',
            },
            {
              q: 'أين تذهب القيود حين أستخدم إطارًا مثل CRAFT أو CO-STAR؟',
              a: 'كل إطار رئيسي يحتوي على حقل يُعيد تعيينه إلى القيود — "Restrictions" في CRAFT، و"Tone & Style" في CO-STAR، و"Constraints" في SPECS. إذا لم يكن لإطارك حقل قيود صريح، أضف القيود في النهاية كقسم "لا" منفصل — جميع النماذج تتعامل معه بشكل موثوق.',
            },
            {
              q: 'هل تنسيق المخرجات مهم إذا كنت أطرح سؤالًا بسيطًا فقط؟',
              a: 'للأسئلة الحوارية، تحديد التنسيق اختياري. لأي مخرجات ستُستخدم في مراحل لاحقة — مضمّنة في مستند أو معالجة بكود أو منشورة أو معاد استخدامها من قِبل أعضاء الفريق — تحديد التنسيق ضروري. وهو الفرق بين نتيجة ونتيجة قابلة للاستخدام.',
            },
          ],
        },

        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[كيف تطور هندسة البرومبت](/ar/prompt-engineering/how-prompt-engineering-evolved) — من نماذج اتباع التعليمات الأولى إلى أنظمة الاستدلال الحالية: كيف تطورت تقنيات البرومبت مع قدرات النماذج.',
            '[البرومبت الصفري مقابل القليل الأمثلة](/ar/prompt-engineering/zero-shot-vs-few-shot) — متى تستخدم الأمثلة ومتى تغفلها: اختيار نهج البرومبت الصحيح للمهمة.',
            '[هلوسة الذكاء الاصطناعي: لماذا يختلق الذكاء الاصطناعي أشياء](/ar/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — لماذا تهم القيود والأمثلة: الأسباب الجذرية للهلوسة والتدابير المضادة القائمة على الأدلة.',
            '[أي إطار برومبت يجب استخدامه؟](/ar/prompt-engineering/which-prompt-framework-should-you-use) — مقارنة CRAFT وCO-STAR وSPECS وغيرها: اختيار إطار يناسب حالة استخدامك.',
          ],
        },

        sources: {
          title: 'المصادر والقراءات الإضافية',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — الدليل الرسمي لهندسة البرومبت من OpenAI، بما يشمل أفضل الممارسات للبرومبتات القائمة على الأدوار والبرومبتات المنظمة.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — الآثار الأمنية للبرومبتات غير المنظمة وتوصيات القيود.',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — كتالوج شامل لأنماط تصميم البرومبتات، بما يشمل تقنيات منظمة وقائمة على الأدوار قابلة للتطبيق مباشرة على نموذج المكونات الخمسة.',
          ],
        },

      },
    },
    pt: {
      theme: 'Fundamentals',
      title: 'Os 5 blocos de construção que todo prompt precisa',
      seoTitle: '5 blocos de construção para cada prompt de IA',
      intro: '**Todo prompt de IA eficaz precisa de cinco blocos de construção: papel e contexto, tarefa/instrução, entrada e exemplos, restrições e formato de saída — se um faltar, os resultados serão inconsistentes, mal formatados ou alucinados.**',
      metaDescription: 'Todo bom prompt de IA precisa de 5 partes: papel, tarefa, entrada, restrições e formato. Se faltar um, a qualidade cai. Modelo pronto para copiar.',
      publishDate: '2026-03-01',
      readTime: '8 min de leitura',
      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Os 5 blocos de construção que todo prompt precisa',
        description: 'Os 5 blocos de construção de todo prompt: papel e contexto, tarefa/instrução, entrada e exemplos, restrições e formato de saída. Com esses cinco componentes, cada prompt de IA se torna confiável e repetível.',
        datePublished: '2026-03-01',
        url: 'https://www.promptquorum.com/pt/pt/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'pt-BR',
        proficiencyLevel: 'Beginner',
        keywords: ['estrutura do prompt', 'blocos de construção do prompt', 'papel e contexto', 'formato de saída', 'restrições do prompt', 'exemplos few-shot', 'prompt engineering', 'modelos de linguagem'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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
        inLanguage: 'pt-BR',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Eu realmente preciso dos 5 blocos de construção em cada prompt?',
            acceptedAnswer: { '@type': 'Answer', text: 'Não. Tarefas simples e unívocas frequentemente precisam apenas de uma tarefa/instrução e um formato de saída. Adicione papel e contexto quando o domínio ou a audiência forem relevantes. Adicione restrições quando os erros forem custosos. Adicione exemplos quando a precisão do formato for crítica. Comece com o mínimo e adicione blocos apenas quando a saída não atender ao seu padrão.' },
          },
          {
            '@type': 'Question',
            name: 'O papel é mais importante do que o contexto ou vice-versa?',
            acceptedAnswer: { '@type': 'Answer', text: 'Eles funcionam como dupla — nenhum é suficiente sozinho. O papel sem contexto produz saídas genéricas de especialista. O contexto sem papel produz saídas situacionalmente conscientes, mas tonalmente inconsistentes. Para a maioria das tarefas, uma frase que combine ambos funciona bem: "Você é um [papel] que ajuda [audiência] com [tarefa do domínio]."' },
          },
          {
            '@type': 'Question',
            name: 'Posso manter os prompts curtos e incluir os 5 blocos de construção?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sim. Cada bloco pode ser expresso em uma única frase. Um prompt completo de cinco blocos pode ter menos de 100 palavras. A brevidade não é o problema — a vagueza sim. Um prompt curto e preciso com os cinco elementos supera consistentemente um longo e prolixo sem nenhum deles.' },
          },
          {
            '@type': 'Question',
            name: 'Qual é a diferença entre contexto e exemplos?',
            acceptedAnswer: { '@type': 'Answer', text: 'O contexto descreve a situação, o domínio e a audiência — é informação de fundo que enquadra a tarefa. Os exemplos são pares de entrada/saída de amostra que mostram ao modelo como é uma resposta correta. O contexto diz ao modelo onde ele está; os exemplos mostram o que ele deve produzir.' },
          },
          {
            '@type': 'Question',
            name: 'O formato de saída importa se eu estou apenas fazendo uma pergunta simples?',
            acceptedAnswer: { '@type': 'Answer', text: 'Para perguntas conversacionais, especificar o formato é opcional. Para qualquer saída que será usada em etapas posteriores — inserida em um documento, processada por código, publicada ou reutilizada por membros da equipe — especificar o formato é essencial. É a diferença entre um resultado e um resultado utilizável.' },
          },
          {
            '@type': 'Question',
            name: 'Onde vão as restrições quando uso um framework como CRAFT ou CO-STAR?',
            acceptedAnswer: { '@type': 'Answer', text: 'Cada framework importante tem um campo que se mapeia para restrições — "Restrictions" no CRAFT, "Tone & Style" no CO-STAR, "Constraints" no SPECS. Se o seu framework não tiver um campo de restrições explícito, adicione as restrições no final como uma seção "Não" separada — todos os modelos lidam com isso de forma confiável.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'pt-BR',
        name: 'Como construir um prompt com os 5 blocos de construção',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Estabeleça o papel e o contexto', text: 'Diga ao modelo quem ele é e a quem ajuda. Uma frase: "Você é um [papel] que ajuda [audiência]."' },
          { '@type': 'HowToStep', position: 2, name: 'Escreva a tarefa/instrução', text: 'Indique a ação exata que o modelo deve realizar usando um verbo. "Resumir", "classificar", "traduzir", "gerar".' },
          { '@type': 'HowToStep', position: 3, name: 'Adicione entrada e exemplos', text: 'Forneça os dados ou conteúdo com que o modelo trabalhará. Adicione um ou dois exemplos se o formato precisar ser preciso.' },
          { '@type': 'HowToStep', position: 4, name: 'Estabeleça as restrições', text: 'Liste o que o modelo não pode fazer, os limites de comprimento e todas as regras de saída.' },
          { '@type': 'HowToStep', position: 5, name: 'Especifique o formato de saída', text: 'Defina a forma exata da saída: JSON, lista com marcadores, tabela, parágrafo, passos numerados.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'pt-BR',
        name: '5 blocos de construção que todo prompt de IA precisa',
        description: 'Os cinco componentes estruturais que todo prompt de IA confiável contém: papel, tarefa, entrada e exemplos, restrições e formato de saída.',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Bloco 1: Papel e contexto', description: 'Diz ao modelo quem ele é e a quem ajuda. Estabelece a expertise do domínio e a consciência da audiência.' },
          { '@type': 'ListItem', position: 2, name: 'Bloco 2: Tarefa/instrução', description: 'A declaração explícita do que o modelo deve fazer, com um verbo de ação claro.' },
          { '@type': 'ListItem', position: 3, name: 'Bloco 3: Entrada e exemplos', description: 'Os dados ou conteúdo com que o modelo trabalha, mais exemplos opcionais que mostram como são as saídas corretas.' },
          { '@type': 'ListItem', position: 4, name: 'Bloco 4: Restrições', description: 'Regras que o modelo deve seguir — limites de comprimento, conteúdo proibido, restrições de estilo.' },
          { '@type': 'ListItem', position: 5, name: 'Bloco 5: Formato de saída', description: 'A estrutura exata da saída: JSON, lista com marcadores, tabela, parágrafo de texto ou passos numerados.' },
        ],
      },
      sections: {
        definition: {
          title: 'Quais são os 5 blocos de construção de um prompt?',
          content: [
            '**Os 5 blocos de construção que todo prompt precisa são: papel e contexto, tarefa/instrução, entrada e exemplos, restrições e formato de saída.** Esses cinco componentes são a estrutura mínima que distingue um prompt confiável e repetível de uma pergunta vaga que produz resultados inconsistentes.',
            'Cada bloco resolve um tipo diferente de erro. Papel e contexto diz ao modelo quem ele é e em que situação está. Tarefa/instrução diz exatamente o que fazer. Entrada e exemplos dão o material bruto e o padrão de aprendizado. As restrições estabelecem as regras. O formato de saída fixa a forma da resposta. Juntos, não deixam nada ao acaso para o modelo.',
          ],
        },
        badVsGood: {
          content: [
            '**Sem os 5 blocos de construção (vago):**\n> Resuma este relatório.',
            '**Com os 5 blocos de construção (completo):**\n> Você é um analista de negócios sênior (papel). Resuma as principais descobertas do relatório do T3 abaixo (tarefa). [Texto do relatório] (entrada). Use apenas fatos do relatório; máx. 200 palavras; tom formal (restrições). Retorne 3 pontos com marcadores sob "Principais descobertas" (formato de saída).',
          ],
        },
        tldr: {
          title: 'Pontos-chave',
          isTldr: true,
          items: [
            'Papel e contexto: diga ao modelo quem ele é e em que domínio opera',
            'Tarefa/instrução: especifique exatamente o que o modelo deve produzir — específico e verificável',
            'Entrada e exemplos: forneça os dados brutos e os pares de exemplo entrada/saída que o modelo precisa',
            'Restrições: estabeleça as regras — o que o modelo deve e não deve fazer',
            'Formato de saída: especifique a forma exata da resposta — JSON, marcadores, tabela ou texto corrido',
          ],
        },
        quickFacts: {
          title: 'Referência rápida',
          content: 'Um guia de referência rápida dos 5 blocos e quando usá-los:',
          items: [
            '**Os 5 blocos:** Papel e contexto → Tarefa/instrução → Entrada e exemplos → Restrições → Formato de saída',
            '**Prompt mínimo viável:** Tarefa + formato de saída (2 blocos) para tarefas simples',
            '**Maior alavancagem:** Uma restrição como "use apenas as informações fornecidas" reduz drasticamente o risco de alucinação',
            '**Funciona em:** Todos os principais modelos de linguagem e todos os LLMs locais via Ollama, LM Studio ou similares',
            '**Corresponde a:** CRAFT, CO-STAR, SPECS, RTF e qualquer outro framework importante — nomes diferentes, os mesmos blocos',
          ],
        },
        whyMatters: {
          title: 'Por que esses 5 blocos de construção importam?',
          content: [
            'O modelo de cinco blocos reflete o consenso convergente dos guias de prompt engineering da OpenAI, Google, Anthropic e praticantes independentes. Papel, instruções, exemplos, restrições e formato de saída aparecem — sob nomes diferentes — em cada framework importante publicado desde 2023. Não é coincidência: são as informações mínimas que um modelo probabilístico precisa para produzir um resultado útil e consistente.',
            'O valor para o negócio é claro. A falta de papel e contexto produz respostas genéricas que precisam ser reescritas. A falta de restrições aumenta o risco de alucinação e gera saídas fora da marca. A falta de formato de saída significa resultados que não podem ser usados ou copiados diretamente. O modelo de 5 blocos aborda os três tipos de erros simultaneamente e aplica-se igualmente a todos os modelos de linguagem e LLMs locais.',
          ],
        },
        block1: {
          title: 'O que o bloco Papel e contexto faz?',
          content: [
            '**Papel** diz ao modelo que persona ou expertise ele deve assumir. **Contexto** comunica a situação, o domínio e a audiência em que opera. São agrupados porque funcionam como dupla — o papel é quem o modelo é, e o contexto é o ambiente que define o que "bom" significa para essa tarefa.',
            'Quando o papel e o contexto são omitidos, o modelo responde de uma perspectiva genérica — não especialmente útil para ninguém. Com eles, o mesmo modelo se torna o consultor tributário experiente respondendo uma pergunta sobre declarações de IVA, o redator júnior escrevendo para uma audiência de 19 anos, ou o analista de dados resumindo um relatório trimestral. A saída é calibrada para a situação real.',
          ],
          items: [
            '**Especifique o domínio:** "Você é um redator B2B SaaS" é mais útil do que "Você é um escritor"',
            '**Inclua a audiência:** "Explique isso para um CFO não técnico" restringe o vocabulário e o nível de detalhe',
            '**Ancore o nível de expertise:** "Aja como um engenheiro de segurança sênior" produz uma saída diferente de "Aja como um engenheiro de segurança"',
            '**Indique a situação quando relevante:** "Você está revisando um primeiro rascunho" versus "Você está escrevendo do zero" muda o foco do modelo',
          ],
        },
        block1Link: {
          content: 'Para entender como o role prompting evoluiu à medida que os modelos melhoraram em seguir instruções, consulte [How Prompt Engineering Evolved](/pt/prompt-engineering/how-prompt-engineering-evolved).',
        },
        block2: {
          title: 'O que é o bloco Tarefa/instrução?',
          content: [
            '**O bloco tarefa/instrução é a declaração explícita do que o modelo deve fazer.** É o bloco mais importante — todos os outros o apoiam. Uma instrução clara, específica e verificável reduz a ambiguidade a quase zero. Uma instrução vaga é a causa mais comum de saídas de IA deficientes em todos os modelos e casos de uso.',
            'As recomendações de melhores práticas atuais enfatizam tornar a tarefa orientada a ações e observável: use um verbo, nomeie o resultado e descreva um critério de sucesso quando possível. "Escreva um resumo" é uma tarefa. "Resuma o seguinte artigo em 3 pontos com marcadores, cada um com menos de 20 palavras" é uma tarefa com uma saída verificável. A diferença na qualidade da saída é substancial.',
          ],
          items: [
            '❌ Fraco: "Escreva algo sobre este tópico"',
            '✅ Forte: "Escreva uma publicação no LinkedIn de 150 palavras sobre as vantagens do prompt engineering para executivos não técnicos"',
            '❌ Fraco: "Analise estes dados"',
            '✅ Forte: "Identifique as 3 principais tendências neste conjunto de dados e ordene-as por impacto na receita, do maior para o menor"',
          ],
        },
        block3: {
          title: 'O que é o bloco Entrada e exemplos?',
          content: [
            '**O bloco entrada e exemplos fornece ao modelo os dados brutos com que trabalhar (entrada) e exemplos de como é uma boa saída (exemplos few-shot).** A entrada é o que o modelo processa — um documento, um fragmento de código, uma lista de dados, uma conversa. Os exemplos são pares de entrada/saída de amostra que mostram o padrão exato de formato ou raciocínio que você quer.',
            'Os exemplos produzem o maior retorno na qualidade da saída para prompts de formato preciso. Um exemplo de entrada/saída de amostra é frequentemente mais eficaz do que dois parágrafos de instruções em prosa descrevendo o mesmo padrão.',
          ],
          items: [
            '**Entrada sem exemplos** — use quando o padrão de saída for óbvio ou o modelo já souber o formato (zero-shot)',
            '**Entrada com um exemplo** — use quando precisar de um formato específico ou tom que não seja o padrão do modelo (one-shot)',
            '**Entrada com 2–3 exemplos** — use para formatos complexos, extrações precisas ou classificação (few-shot)',
            '**Mais de 3 exemplos** — raramente necessário; adiciona custo de tokens sem melhoria proporcional de qualidade',
          ],
        },
        block4: {
          title: 'O que são as restrições?',
          content: [
            '**As restrições são as regras que o modelo deve seguir — os limites explícitos sobre o que pode e não pode fazer em sua resposta.** Sem restrições, os modelos cobrem todos os ângulos, adicionam qualificações desnecessárias e produzem saídas que precisam ser editadas. Restrições bem escolhidas são o bloco de maior impacto para o aumento da confiabilidade.',
            'Tipos comuns: limites de comprimento ("máx. 100 palavras"), restrições de fonte ("use apenas os dados fornecidos"), restrições de estilo ("sem jargão"), restrições de tom ("tom formal, sem emojis"), exclusões de conteúdo ("não inclua preços"), restrições de estrutura ("sem parágrafos de introdução").',
          ],
          items: [
            '**Restrições de comprimento:** "Máx. 3 frases", "Exatamente 5 pontos com marcadores", "Abaixo de 250 palavras"',
            '**Restrições de fonte:** "Use apenas as informações do documento", "Não invente dados"',
            '**Restrições de formato:** "Sem emojis", "Apenas Markdown", "Sem caracteres especiais"',
            '**Restrições de tom:** "Tom formal e neutro", "Evite linguagem de marketing"',
            '**Restrições de conteúdo:** "Não mencione concorrentes", "Evite afirmações absolutas"',
          ],
        },
        block5: {
          title: 'O que é o formato de saída?',
          content: [
            '**O formato de saída especifica a estrutura exata da resposta do modelo.** É o bloco mais fácil de incluir e mais frequentemente omitido. Sem ele, os modelos escolhem sua própria estrutura — que pode variar a cada execução, não ser compatível com a próxima etapa do fluxo de trabalho ou exigir edição significativa antes de ser útil.',
            'O formato de saída não controla apenas a aparência da resposta — controla sua utilizabilidade. Uma resposta em JSON pode ser analisada diretamente. Uma resposta em formato de tabela pode ser copiada para um documento. Uma lista numerada pode ser seguida passo a passo. Uma resposta em prosa não estruturada requer que alguém a reformate depois.',
          ],
          items: [
            '**Listas com marcadores** — para comparações, passos, características',
            '**Passos numerados** — para instruções, processos, tutoriais',
            '**Tabelas** — para comparações lado a lado, dados com várias colunas',
            '**JSON** — para saída processável por código ou integração de sistemas',
            '**Markdown** — para conteúdo que será renderizado em uma interface de usuário',
            '**Parágrafo de texto** — para explicações, narrativas, respostas conversacionais',
          ],
        },
        promptTemplate: {
          title: 'Modelo de prompt de 5 blocos pronto para copiar',
          content: [
            'Copie este modelo e preencha cada seção com os detalhes da sua tarefa:',
            '**PAPEL E CONTEXTO:** Você é um [papel] que ajuda [audiência] com [tarefa do domínio].',
            '**TAREFA/INSTRUÇÃO:** [Verbo de ação] [resultado específico] para [propósito/destino].',
            '**ENTRADA:** [Forneça os dados, o documento ou o conteúdo aqui]',
            '**RESTRIÇÕES:** [Liste as regras: sem X, máx. Y palavras, apenas Z fonte]',
            '**FORMATO DE SAÍDA:** [Especifique a estrutura: JSON, lista, tabela, parágrafo]',
          ],
        },
        frameworksMapping: {
          title: 'Como os 5 blocos se mapeiam com CRAFT, CO-STAR e SPECS',
          content: 'Cada framework de prompt importante usa os mesmos cinco blocos sob nomes diferentes. Entender a correspondência permite transferir prompts entre frameworks sem reescrever do zero.',
          columns: ['Bloco de construção', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { 'Bloco de construção': 'Papel e contexto', 'CRAFT': 'Context', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { 'Bloco de construção': 'Tarefa/instrução', 'CRAFT': 'Role + Action', 'CO-STAR': 'Objective', 'SPECS': 'Purpose' },
            { 'Bloco de construção': 'Entrada e exemplos', 'CRAFT': 'Format (exemplos implícitos)', 'CO-STAR': 'Style (exemplos como parte do contexto)', 'SPECS': 'Examples' },
            { 'Bloco de construção': 'Restrições', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { 'Bloco de construção': 'Formato de saída', 'CRAFT': 'Tone + Format', 'CO-STAR': 'Response', 'SPECS': 'Style + Format' },
          ],
        },
        commonMistakes: {
          title: 'Erros comuns com estruturas de blocos',
          mistakes: [
            {
              mistake: 'Usar o mesmo prompt genérico para todas as tarefas.',
              problem: 'Um prompt sem papel nem contexto produz saídas genéricas que precisam ser reescritas para cada caso de uso.',
              fix: 'Crie variantes de prompts específicos do domínio para seus casos de uso mais frequentes. O papel e o contexto variam mais entre tipos de tarefas do que qualquer outro bloco.',
            },
            {
              mistake: 'Omitir restrições até que algo dê errado.',
              problem: 'Os modelos preencherão o espaço não especificado com suas próprias escolhas — que podem incluir alucinações, formatação excessiva ou conteúdo fora da marca.',
              fix: 'Adicione restrições preventivamente. O custo de adicionar uma restrição é um par de tokens; o custo de omiti-la é uma saída inutilizável.',
            },
            {
              mistake: 'Não especificar o formato de saída.',
              problem: 'A resposta chega em um formato que não é compatível com a próxima etapa do fluxo de trabalho — exigindo conversão manual.',
              fix: 'Sempre especifique o formato quando a saída for usada em etapas posteriores. "Em formato JSON", "como lista com marcadores Markdown" ou "em uma tabela com colunas X, Y, Z" são especificações completas.',
            },
          ],
        },
        howToStart: {
          title: 'Como construir um prompt (passo a passo)',
          numberedItems: [
            '**Comece com a tarefa.** Escreva uma frase que descreva exatamente o que você quer que o modelo produza. Use um verbo de ação: resumir, classificar, traduzir, gerar, extrair. Se não conseguir escrevê-la em uma frase, a tarefa é muito vaga.',
            '**Adicione papel e contexto.** Quem é o modelo neste prompt? A quem ele ajuda? Uma frase: "Você é um [papel] que ajuda [audiência] com [domínio]." Se sua tarefa não requer expertise específica do domínio ou consciência da audiência, omita este bloco.',
            '**Inclua sua entrada.** Forneça os dados, documentos ou conteúdo reais com que o modelo deve trabalhar. Se você não tem entrada agora, mantenha um espaço reservado: "[Cole o texto aqui]".',
            '**Adicione restrições.** Liste o que o modelo não deve fazer: limites de comprimento, restrições de fonte, restrições de tom, conteúdo proibido. Uma ou duas restrições bem escolhidas produzem mais melhoria de qualidade do que adicionar mais instruções ao bloco de tarefa.',
            '**Especifique o formato de saída.** Em que forma você precisa da resposta? Lista com marcadores? JSON? Tabela? Parágrafo? Se o formato não importa para esta tarefa, omita este bloco.',
          ],
        },
        faq: {
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'Eu realmente preciso dos 5 blocos de construção em cada prompt?',
              a: 'Não. Tarefas simples e unívocas frequentemente precisam apenas de uma tarefa/instrução e um formato de saída. Adicione papel e contexto quando o domínio ou a audiência forem relevantes. Adicione restrições quando os erros forem custosos. Adicione exemplos quando a precisão do formato for crítica. Comece com o mínimo e adicione blocos apenas quando a saída não atender ao seu padrão.',
            },
            {
              q: 'O papel é mais importante do que o contexto ou vice-versa?',
              a: 'Eles funcionam como dupla — nenhum é suficiente sozinho. O papel sem contexto produz saídas genéricas de especialista. O contexto sem papel produz saídas situacionalmente conscientes, mas tonalmente inconsistentes. Para a maioria das tarefas, uma frase que combine ambos funciona bem: "Você é um [papel] que ajuda [audiência] com [tarefa do domínio]."',
            },
            {
              q: 'Posso manter os prompts curtos e incluir os 5 blocos de construção?',
              a: 'Sim. Cada bloco pode ser expresso em uma única frase. Um prompt completo de cinco blocos pode ter menos de 100 palavras. A brevidade não é o problema — a vagueza sim. Um prompt curto e preciso com os cinco elementos supera consistentemente um longo e prolixo sem nenhum deles.',
            },
            {
              q: 'Qual é a diferença entre contexto e exemplos?',
              a: 'O contexto descreve a situação, o domínio e a audiência — é informação de fundo que enquadra a tarefa. Os exemplos são pares de entrada/saída de amostra que mostram ao modelo como é uma resposta correta. O contexto diz ao modelo onde ele está; os exemplos mostram o que ele deve produzir.',
            },
            {
              q: 'Onde vão as restrições quando uso um framework como CRAFT ou CO-STAR?',
              a: 'Cada framework importante tem um campo que se mapeia para restrições — "Restrictions" no CRAFT, "Tone & Style" no CO-STAR, "Constraints" no SPECS. Se o seu framework não tiver um campo de restrições explícito, adicione as restrições no final como uma seção "Não" separada — todos os modelos lidam com isso de forma confiável.',
            },
            {
              q: 'O formato de saída importa se eu estou apenas fazendo uma pergunta simples?',
              a: 'Para perguntas conversacionais, especificar o formato é opcional. Para qualquer saída que será usada em etapas posteriores — inserida em um documento, processada por código, publicada ou reutilizada por membros da equipe — especificar o formato é essencial. É a diferença entre um resultado e um resultado utilizável.',
            },
          ],
        },
        relatedReading: {
          title: 'Leitura relacionada',
          items: [
            '[How Prompt Engineering Evolved](/pt/prompt-engineering/how-prompt-engineering-evolved) — Dos primeiros modelos de seguimento de instruções aos sistemas de raciocínio atuais: como as técnicas de prompting evoluíram com as capacidades dos modelos.',
            '[Zero-Shot vs. Few-Shot Prompting](/pt/prompt-engineering/zero-shot-vs-few-shot) — Quando usar exemplos e quando omiti-los: escolher a abordagem de prompting correta para a tarefa.',
            '[AI Hallucinations: Why AI Makes Things Up](/pt/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Por que as restrições e os exemplos importam: as causas raíz das alucinações e as contramedidas baseadas em evidências.',
            '[Which Prompt Framework Should You Use?](/pt/prompt-engineering/which-prompt-framework-should-you-use) — Comparação de CRAFT, CO-STAR, SPECS e outros: escolher um framework que se adapte ao seu caso de uso.',
          ],
        },
        sources: {
          title: 'Fontes e leituras adicionais',
          items: [
            '[Crafting Effective Prompts: Guidelines and Best Practices — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — Guia oficial de prompt engineering da OpenAI, incluindo melhores práticas para prompts baseados em papéis e estruturados.',
            '[Prompt Injection Threats & Mitigations — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — Implicações de segurança dos prompts não estruturados e recomendações de restrições.',
            '[A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT — White et al., 2023](https://arxiv.org/abs/2302.11382) — Catálogo abrangente de padrões de design de prompts, incluindo técnicas estruturadas e baseadas em papéis diretamente aplicáveis ao modelo de cinco blocos.',
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'evergreen',
      theme: 'Fondamentaux',
      title: 'Les 5 éléments fondamentaux de tout prompt',
      seoTitle: '5 éléments essentiels de tout prompt IA',
      intro: '**Tout prompt IA efficace nécessite cinq éléments : Rôle & Contexte, Tâche / Instruction, Entrée & Exemples, Contraintes et Format de sortie — en oublier un seul, et les résultats deviennent incohérents, mal formatés ou hallucinations.**',
      metaDescription: 'Tout bon prompt IA compte 5 parties : Rôle, Tâche, Input, Contraintes, Format de sortie. En oublier un dégrade la réponse. Modèle prêt à copier pour tous.',
      ogTitle: 'Oubliez un seul de ces 5 blocs et la réponse IA déraille',
      ogDescription: 'Rôle, Tâche, Input, Contraintes, Format de sortie. Un modèle universel, prêt à copier-coller.',
      twitterTitle: '5 éléments essentiels de tout prompt IA',
      twitterDescription: 'Les prompts vagues gaspillent des tokens et du temps de révision. Un prompt structuré en 5 blocs produit un résultat exploitable dès le premier essai.',
      publishDate: '2026-03-01',
      readTime: '8 min de lecture',
      educationalLevel: 'Beginner',
      primaryTerm: 'Structure de prompt',
      audience: 'Développeurs et utilisateurs non techniques rédigeant des prompts IA',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04',
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
        url: 'https://www.promptquorum.com/fr/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'fr',
        proficiencyLevel: 'Beginner',
        keywords: ['Structure de prompt', 'Éléments de prompt', 'Rôle et contexte', 'Format de sortie', 'Contraintes de prompt', 'Exemples few-shot', 'Ingénierie des prompts', 'Modèles de langage'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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
            acceptedAnswer: { '@type': 'Answer', text: 'Oui. Que vous utilisiez les principaux modèles de langage ou des modèles open-source via Ollama et LM Studio, ces 5 éléments fonctionnent sur tous. La structure minimale varie légèrement en syntaxe, mais le modèle conceptuel — rôle, instruction, exemples, contraintes, format — s\'applique universellement.' },
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

        quickFacts: {
          id: 'quick-facts',
          title: '⚡ Résumé rapide',
          content: 'Un guide de référence rapide pour les 5 éléments et quand les utiliser :',
          items: [
            '**Les 5 éléments :** Rôle & Contexte → Tâche / Instruction → Entrée & Exemples → Contraintes → Format de sortie',
            '**Prompt minimum viable :** Tâche + Format de sortie (2 éléments) pour les tâches simples',
            '**Impact maximal :** Une contrainte comme « utilise uniquement les informations fournies » réduit dramatiquement le risque d\'hallucination',
            '**Fonctionne sur :** Tous les modèles de langage majeurs et tous les LLM locaux via Ollama, LM Studio ou similaire',
            '**Correspond à :** CRAFT, CO-STAR, SPECS, RTF et tous les autres cadres majeurs — noms différents, mêmes éléments',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: 'Pourquoi ces 5 éléments sont importants ?',
          content: [
            'Le modèle des 5 éléments reflète le consensus convergent des guides d\'ingénierie de prompts d\'OpenAI, Google, Anthropic et des praticiens indépendants. Rôle, instructions, exemples, contraintes et format de sortie apparaissent — sous différents noms — dans chaque framework majeur publié depuis 2023. Ce n\'est pas un hasard : ce sont les informations minimales dont un modèle probabiliste a besoin pour produire une sortie utile et cohérente.',
            'Les avantages commerciaux sont évidents. L\'absence de rôle et de contexte produit des réponses génériques qui doivent être réécrites. L\'absence de contraintes augmente le risque d\'hallucination et génère une sortie hors marque. L\'absence de format de sortie signifie des résultats qui ne peuvent pas être utilisés directement ou copiés. Le modèle des 5 éléments adresse les trois types d\'erreurs simultanément et s\'applique également à tous les modèles de langage et aux LLM exécutés localement.',
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
          content: 'Pour comprendre comment le prompting par rôle a évolué alors que les modèles devenaient meilleurs à suivre les instructions, voir [How Prompt Engineering Evolved](/fr/prompt-engineering/how-prompt-engineering-evolved).',
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
          content: 'Les instructions interagissent directement avec le fait de fournir des exemples — voir [Zero-Shot vs. Few-Shot Prompting](/fr/prompt-engineering/zero-shot-vs-few-shot) pour quand chaque approche fonctionne le mieux.',
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
          content: 'Pour une ventilation complète de quand utiliser des exemples et quand les omettre, voir [Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/fr/prompt-engineering/zero-shot-vs-few-shot).',
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
          content: 'Pour la technique d\'utiliser les exclusions pour façonner les sorties, voir [Negative Prompting: Tell the AI What NOT to Do](/fr/prompt-engineering/negative-prompting). Pourquoi les prompts incontrôlés hallucinent plus s\'explique dans [AI Hallucinations: Why AI Makes Things Up](/fr/prompt-engineering/ai-hallucinations-why-ai-makes-things-up).',
        },

        block5: {
          id: 'block-5-output-format',
          title: 'Comment l\'élément Format de sortie contrôle-t-il ce que vous obtenez ?',
          content: [
            '**Le Format de sortie définit la forme exacte de la réponse que le modèle produira.** C\'est l\'élément qui détermine si la sortie est immédiatement utilisable ou doit être reformatée avant utilisation. Dans les pipelines automatisés, un format de sortie non spécifié signifie un parsing fragile et incohérent. Pour la GEO, une sortie structurée est plus probable d\'être citée littéralement par les moteurs de recherche IA car les réponses structurées sont plus faciles à extraire programmatiquement.',
            'L\'élément Format de sortie peut spécifier le format de fichier (JSON, Markdown, CSV), la structure (tableau, liste à puces, étapes numérotées), la longueur et l\'étiquetage des sections. Plus vous le spécifiez précisément, moins la sortie a besoin d\'être éditée.',
            '**Application au niveau API du Format de sortie :** En 2026, tous les fournisseurs majeurs offrent une application au niveau de l\'API du format de sortie au-delà des seules instructions texte d\'invite. Les sorties structurées (y compris la validation du schéma JSON) garantissent un JSON valide correspondant à votre schéma au niveau de la génération de tokens — le modèle ne peut tout simplement pas produire de sortie invalide. Lors de l\'utilisation de ces API, l\'élément 5 devient une contrainte côté serveur plutôt qu\'une instruction texte d\'invite. Utilisez les deux pour une fiabilité maximale : l\'application au niveau API comme garantie dure, la spécification du format texte d\'invite comme guide pour la structure du contenu.',
          ],
          items: [
            '**JSON :** « Retourne le résultat comme un objet JSON avec les clés : title, summary, tags »',
            '**Points Markdown :** « Liste chaque résultat comme un point commençant par un terme en gras suivi d\'une phrase explicative »',
            '**Tableau :** « Formate la comparaison comme un tableau Markdown avec les colonnes : Fonctionnalité, Option A, Option B »',
            '**Texte structuré :** « Structure la réponse avec un en-tête pour chaque point principal et maximum 3 phrases par section »',
          ],
        },

        block5Link: {
          content: 'Pour un guide complet sur le mode JSON et la sortie structurée sur les modèles, voir [Structured Output & JSON Mode: Get AI to Return Usable Data](/fr/prompt-engineering/structured-output-and-json-mode).',
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
          content: 'Ce modèle fonctionne sur tous les modèles de langage majeurs et les LLM locaux via Ollama ou LM Studio. L\'ordre des éléments est une recommandation, pas une règle rigide — mais placer Rôle & Contexte en premier et Format de sortie en dernier est le plus courant et fiable sur tous les modèles majeurs.',
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
          content: 'PromptQuorum contient 9 frameworks intégrés qui pré-remplissent ces éléments selon le type de tâche. Pour des guides spécifiques au framework, voir [Which Prompt Framework Should You Use?](/fr/prompt-engineering/which-prompt-framework-should-you-use), [CRAFT Framework](/fr/prompt-engineering/craft-framework) et [CO-STAR Framework](/fr/prompt-engineering/co-star-framework).',
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
              a: 'Oui. Que vous utilisiez GPT-5, Claude 4.8, Gemini 3 Pro, ou des modèles open-source via Ollama et LM Studio, ces 5 éléments fonctionnent sur tous. La structure minimale varie légèrement en syntaxe, mais le modèle conceptuel — rôle, instruction, exemples, contraintes, format — s\'applique universellement.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Lectures connexes',
          items: [
            '[How Prompt Engineering Evolved](/fr/prompt-engineering/how-prompt-engineering-evolved) — Des premiers modèles suivant les instructions aux systèmes de raisonnement d\'aujourd\'hui : comment les techniques de prompting ont évolué avec les capacités des modèles.',
            '[Zero-Shot vs. Few-Shot Prompting](/fr/prompt-engineering/zero-shot-vs-few-shot) — Quand utiliser des exemples et quand les omettre : choisir la bonne approche pour votre tâche.',
            '[Negative Prompting: Tell the AI What NOT to Do](/fr/prompt-engineering/negative-prompting) — Les contraintes en action : comment les exclusions rendent les sorties plus fiables que les inclusions.',
            '[AI Hallucinations: Why AI Makes Things Up](/fr/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Pourquoi les contraintes et exemples sont importants : les causes profondes des hallucinations et les contre-mesures basées sur les preuves.',
            '[Structured Output & JSON Mode](/fr/prompt-engineering/structured-output-and-json-mode) — Spécifier les formats de sortie précis : mode JSON, tableaux Markdown et autres approches structurées sur les modèles.',
            '[Which Prompt Framework Should You Use?](/fr/prompt-engineering/which-prompt-framework-should-you-use) — Comparaison de CRAFT, CO-STAR, SPECS et autres : choisir un framework qui correspond à votre cas d\'usage.',
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
      freshness_tier: 'evergreen',
      theme: '基礎',
      title: 'すべてのプロンプトに必要な5つの構成要素',
      seoTitle: 'AIプロンプトに必要な5つの基本要素と実装テンプレート',
      intro: '**効果的なAIプロンプトには5つの構成要素が必須です：役割とコンテキスト、タスク/指示、入力と例、制約、出力形式。これらのいずれかを欠くと、AIの出力は一貫性を失い、形式が崩れ、幻覚が発生します。**',
      metaDescription: '効果的なAIプロンプトには5つの要素が必須です：役割、タスク、入力、制約、出力形式。1つ欠けるだけで出力品質が低下します。すべてのモデルに対応したテンプレート付き。',
      ogTitle: 'この5要素のうち1つでも欠けるとAIの出力が不安定に',
      ogDescription: '役割、タスク、入力、制約、出力形式。全モデル対応のテンプレート。すぐにコピペで使える。',
      twitterTitle: 'AIプロンプトに必要な5つの構成要素',
      twitterDescription: '曖昧なプロンプトはトークンと修正時間の無駄。5ブロック構造なら一発で使える出力が得られる。すべてのモデルとローカルLLM対応。',
      publishDate: '2026-03-01',
      readTime: '8分で読める',
      educationalLevel: 'Beginner',
      primaryTerm: 'Prompt Structure',
      audience: 'AIプロンプトを作成する開発者と一般ユーザー',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04',
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
        url: 'https://www.promptquorum.com/ja/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'ja',
        proficiencyLevel: 'Beginner',
        keywords: ['プロンプト構造', 'プロンプト構成要素', '役割とコンテキスト', '出力形式', 'プロンプト制約', 'フューショット例', 'プロンプトエンジニアリング', '言語モデル'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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
            'ビジネス上の論理は直截的です。役割とコンテキストがないと、書き直しが必要なジェネリックな答えが生じます。制約がないとハルシネーションのリスクとブランド外の出力が増加します。出力形式がないと、解析またはコピーペーストできない結果が生じます。5つの構成要素モデルはこれら3つの障害モードをすべて一度に対処し、GPT-5、Claude 4.8、Gemini 3 Pro、およびローカルで実行される LLM に等しく適用されます。',
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
          content: 'モデルが指示に従うことがより上手になったときに、ロールプロンプティングがどのように進化したかを理解するために、[プロンプトエンジニアリングの進化](/ja/prompt-engineering/how-prompt-engineering-evolved)を参照してください。',
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
          content: '指示は例を提供するかどうかと直接対話します。[Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/ja/prompt-engineering/zero-shot-vs-few-shot)を参照して、各アプローチがいつ最適に機能するかを確認してください。',
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
          content: '例を使うべき時と省く時の完全な分析については、[Zero-Shot vs. Few-Shot: Which Approach Gets Better Results?](/ja/prompt-engineering/zero-shot-vs-few-shot)を参照してください。',
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
          content: '出力を形作るために除外を使う技法については、[Negative Prompting: Tell the AI What NOT to Do](/ja/prompt-engineering/negative-prompting)を参照してください。制約のないプロンプトがより多くハルシネートする理由については、[AI Hallucinations: Why AI Makes Things Up](/ja/prompt-engineering/ai-hallucinations-why-ai-makes-things-up)を参照してください。',
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
          content: 'さまざまなモデルにおける JSON モードと構造化出力への完全ガイドについては、[Structured Output & JSON Mode: Get AI to Return Usable Data](/ja/prompt-engineering/structured-output-and-json-mode)を参照してください。',
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
          content: 'このテンプレートはすべての主要な言語モデルおよび Ollama または LM Studio 経由のローカル LLM で動作します。ブロック順序は推奨ですが、厳格なルールではありません。ただし、最初に役割とコンテキストを配置し、最後に出力形式を配置することがすべての主要なモデル全体で最も一般的で信頼できる配置です。',
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
          content: 'PromptQuorum には 9つの統合フレームワークが含まれており、タスク タイプに応じてこれらの要素を事前入力します。フレームワーク固有のガイドについては、[Which Prompt Framework Should You Use?](/ja/prompt-engineering/which-prompt-framework-should-you-use)、[CRAFT Framework](/ja/prompt-engineering/craft-framework)、[CO-STAR Framework](/ja/prompt-engineering/co-star-framework)を参照してください。',
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
              a: 'はい。GPT-5、Claude 4.8、Gemini 3 Pro、または Ollama や LM Studio を経由するオープンソース LLM を使用しているかどうかにかかわらず、これら5つの構成要素はすべてで機能します。最小構造は構文において若干異なりますが、概念的モデル（役割、指示、例、制約、形式）はすべてのモデルに普遍的に適用されます。',
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
            '[プロンプトエンジニアリングの進化](/ja/prompt-engineering/how-prompt-engineering-evolved) — 初期のモデルから今日の推論システムへ。プロンプティング技法がモデル機能に応じてどのように進化したか。',
            '[Zero-Shot vs. Few-Shot プロンプティング](/ja/prompt-engineering/zero-shot-vs-few-shot) — 例をいつ使うか、いつ省くか。タスクに適したアプローチを選ぶ。',
            '[Negative Prompting: Tell the AI What NOT to Do](/ja/prompt-engineering/negative-prompting) — 制約の実行。除外がどのように含有より出力を信頼性にするのか。',
            '[AI Hallucinations: Why AI Makes Things Up](/ja/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 制約と例が重要な理由。ハルシネーションの根本原因と証拠ベースの対策。',
            '[Structured Output & JSON Mode](/ja/prompt-engineering/structured-output-and-json-mode) — 正確な出力形式を指定。JSON、Markdown テーブル、その他の構造化アプローチ。',
            '[使うべきプロンプトフレームワークはどれ](/ja/prompt-engineering/which-prompt-framework-should-you-use) — CRAFT、CO-STAR、SPECS の比較。ユースケースに合ったフレームワークを選ぶ。',
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
      freshness_tier: 'evergreen',
      theme: '基础知识',
      title: '每个提示词必需的5个构建模块',
      seoTitle: '每个AI提示词需要的5个构建模块（附模板）',
      intro: '每个提示词必需的5个构建模块：角色与上下文、任务、输入与示例、约束条件和输出格式。',
      metaDescription: '高效的AI提示词需要5个部分：角色、任务、输入、约束条件和输出格式。缺少任何一个都会降低输出质量。包含所有模型通用的可复制模板。',
      ogTitle: '缺少这5个提示词构建块中的任何一个，AI输出就会跑偏',
      ogDescription: '角色、任务、输入、约束、输出格式。一套模板适用所有模型。直接复制使用。',
      twitterTitle: '每个AI提示词必备的5个构建块',
      twitterDescription: '模糊的提示词浪费Token和修改时间。结构化5模块提示词一次生成可用输出。适用于所有模型和本地LLM。',
      publishDate: '2026-03-01',
      readTime: '阅读约8分钟',
      educationalLevel: 'Beginner',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '每个提示词必需的5个构建模块',
        description: '每个提示词必需的5个构建模块：角色与上下文、任务、输入与示例、约束条件和输出格式。这5个组成部分确保了AI提示词的可靠性和可重复性。',
        datePublished: '2026-03-01',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'zh',
        keywords: ['提示词结构', '提示词构件', '角色与背景', '输出格式', '提示词约束', '少样本示例', '提示词工程', '语言模型'],
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
  ko: {
      freshness_tier: 'evergreen',
      theme: '기초',
      title: '모든 프롬프트에 필요한 5가지 구성 요소',
      seoTitle: 'AI 프롬프트의 5가지 핵심 구성 요소 (템플릿 포함)',
      intro: '**효과적인 AI 프롬프트에는 다섯 가지 구성 요소가 필요합니다: 역할 및 맥락, 작업/지시, 입력 및 예시, 제약 조건, 출력 형식 — 하나라도 빠지면 결과가 일관성을 잃거나 형식에서 벗어나거나 환각이 발생합니다.**',
      metaDescription: '역할, 작업, 입력, 제약 조건, 출력 형식 — 모든 LLM에서 통하는 5가지 프롬프트 구성 요소. 하나라도 빠지면 품질이 저하됩니다. 복사·붙여넣기용 템플릿 포함.',
      ogTitle: '이 5가지 프롬프트 블록 중 하나를 빠뜨리면 AI 결과가 엉망이 됩니다',
      ogDescription: '역할, 작업, 입력, 제약 조건, 출력 형식. 모든 모델에서 통하는 하나의 템플릿. 바로 사용할 수 있습니다.',
      twitterTitle: 'AI 프롬프트에 필요한 5가지 구성 요소',
      twitterDescription: '모호한 프롬프트는 토큰과 수정 시간을 낭비합니다. 구조화된 5블록 프롬프트는 한 번에 사용 가능한 결과물을 생성합니다. 모든 주요 언어 모델에서 사용 가능한 템플릿.',
      publishDate: '2026-03-01',
      readTime: '8분 분량',
      educationalLevel: 'Beginner',
      primaryTerm: '프롬프트 구조',
      audience: 'AI 프롬프트를 작성하는 개발자 및 비기술 사용자',
      dateModified: '2026-05-04',
      lastFactChecked: '2026-05-04',
      leadAnswerBlock: '모든 프롬프트에 필요한 5가지 구성 요소는 역할 및 맥락, 작업/지시, 입력 및 예시, 제약 조건, 출력 형식입니다. 이 다섯 가지 구성 요소는 신뢰할 수 있고 반복 가능한 프롬프트를 모호한 질문과 구별하는 최소한의 구조입니다.',
      toc: [
        { label: '핵심 요점', anchor: '#key-takeaways' },
        { label: '5가지 구성 요소란 무엇인가?', anchor: '#what-are-the-5-building-blocks' },
        { label: '이 5가지 블록이 중요한 이유', anchor: '#why-building-blocks-matter' },
        { label: '블록 1: 역할 및 맥락', anchor: '#block-1-role-context' },
        { label: '블록 2: 작업/지시', anchor: '#block-2-task-instruction' },
        { label: '블록 3: 입력 및 예시', anchor: '#block-3-input-examples' },
        { label: '블록 4: 제약 조건', anchor: '#block-4-constraints' },
        { label: '블록 5: 출력 형식', anchor: '#block-5-output-format' },
        { label: '5가지 블록을 하나의 프롬프트로 결합하는 방법', anchor: '#prompt-template' },
        { label: '5가지 블록과 CRAFT, CO-STAR, SPECS의 매핑', anchor: '#frameworks-and-tools' },
        { label: '프롬프트 구성 요소에서 흔히 저지르는 실수', anchor: '#common-mistakes' },
        { label: '프롬프트 작성 방법 (단계별)', anchor: '#how-to-build-a-prompt' },
        { label: '관련 읽을거리', anchor: '#related-reading' },
        { label: '자주 묻는 질문', anchor: '#faq' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '모든 프롬프트에 필요한 5가지 구성 요소',
        description: '프롬프트에 필요한 5가지 구성 요소를 마스터하십시오: 역할 및 맥락, 작업, 입력 및 예시, 제약 조건, 출력 형식. 이 다섯 가지 요소를 갖추면 모든 AI 프롬프트가 신뢰할 수 있고 반복 가능해집니다.',
        datePublished: '2026-03-01',
        dateModified: '2026-04-28',
        url: 'https://www.promptquorum.com/prompt-engineering/5-building-blocks-every-prompt-needs',
        inLanguage: 'ko',
        proficiencyLevel: 'Beginner',
        keywords: ['프롬프트 구조', '프롬프트 구성 요소', '역할 및 맥락', '출력 형식', '프롬프트 제약 조건', 'few-shot 예시', '프롬프트 엔지니어링', '언어 모델'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        mentions: [
          { '@type': 'Thing', name: 'Language Models' },
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
        inLanguage: 'ko',
        mainEntity: [
          {
            '@type': 'Question',
            name: '모든 프롬프트에 5가지 블록이 모두 필요합니까?',
            acceptedAnswer: { '@type': 'Answer', text: '그렇지 않습니다. 단순하고 명확한 작업에는 작업/지시와 출력 형식만으로도 충분합니다. 도메인이나 대상이 중요한 경우에는 역할 및 맥락을 추가하십시오. 실패 비용이 높은 경우에는 제약 조건을 추가하십시오. 형식 정밀도가 중요한 경우에는 예시를 추가하십시오. 최소한으로 시작하여 결과물이 기준에 미치지 못할 때만 블록을 추가하십시오.' },
          },
          {
            '@type': 'Question',
            name: '역할이 맥락보다 중요합니까, 아니면 그 반대입니까?',
            acceptedAnswer: { '@type': 'Answer', text: '두 요소는 쌍으로 작동합니다 — 어느 것도 단독으로는 충분하지 않습니다. 맥락 없는 역할은 일반적인 전문가 수준의 결과물을 생성합니다. 역할 없는 맥락은 상황 인식은 있지만 어조가 일관되지 않은 결과물을 생성합니다. 대부분의 작업에서 두 가지를 결합한 한 문장이 잘 작동합니다: "당신은 [도메인 작업]을 위해 [대상]과 함께 일하는 [역할]입니다."' },
          },
          {
            '@type': 'Question',
            name: '프롬프트를 짧게 유지하면서 5가지 블록을 모두 포함할 수 있습니까?',
            acceptedAnswer: { '@type': 'Answer', text: '가능합니다. 각 블록은 한 문장으로 표현할 수 있습니다. 5블록 프롬프트 전체를 100단어 이내로 작성할 수 있습니다. 간결함이 문제가 아니라 모호함이 문제입니다. 다섯 가지 요소를 모두 갖춘 짧고 정확한 프롬프트는 어느 것도 없는 길고 산만한 프롬프트보다 일관되게 더 나은 성과를 냅니다.' },
          },
          {
            '@type': 'Question',
            name: '맥락과 예시의 차이는 무엇입니까?',
            acceptedAnswer: { '@type': 'Answer', text: '맥락은 상황, 도메인, 대상을 설명하는 것으로 작업을 틀 짓는 배경 정보입니다. 예시는 모델에게 올바른 답변이 어떤 모습인지를 보여주는 입력/출력 쌍입니다. 맥락은 모델에게 현재 위치를 알려주고, 예시는 무엇을 생성해야 하는지를 보여줍니다.' },
          },
          {
            '@type': 'Question',
            name: 'CRAFT 또는 CO-STAR 같은 프레임워크를 사용할 때 제약 조건은 어디에 위치합니까?',
            acceptedAnswer: { '@type': 'Answer', text: '모든 주요 프레임워크에는 제약 조건에 매핑되는 필드가 있습니다 — CRAFT의 "Restrictions", CO-STAR의 "Tone & Style", SPECS의 "Constraints". 프레임워크에 명시적인 제약 조건 필드가 없다면, 별도의 "하지 말 것" 섹션으로 마지막에 추가하십시오 — 모든 모델이 이를 안정적으로 처리합니다.' },
          },
          {
            '@type': 'Question',
            name: '단순한 질문만 할 경우에도 출력 형식이 중요합니까?',
            acceptedAnswer: { '@type': 'Answer', text: '대화형 질문의 경우 형식 지정은 선택 사항입니다. 하지만 문서에 붙여넣거나, 코드로 파싱하거나, 게시되거나, 팀원들 사이에서 재사용될 결과물에는 형식 지정이 필수입니다. 이는 결과물을 얻는 것과 사용 가능한 결과물을 얻는 것의 차이입니다.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'ko',
        name: '5가지 구성 요소를 사용하여 프롬프트를 작성하는 방법',
        totalTime: 'PT5M',
        step: [
          { '@type': 'HowToStep', position: 1, name: '역할 및 맥락 설정', text: '모델이 누구이고 누구를 위해 작업하는지를 명시하십시오. 한 문장으로: "당신은 [대상]을 돕는 [역할]입니다."' },
          { '@type': 'HowToStep', position: 2, name: '작업/지시 작성', text: '동사를 사용하여 모델이 수행해야 할 정확한 행동을 명시하십시오. "요약하다", "분류하다", "번역하다", "생성하다".' },
          { '@type': 'HowToStep', position: 3, name: '입력 및 예시 추가', text: '모델이 작업할 데이터나 콘텐츠를 삽입하십시오. 형식이 정밀해야 하는 경우 예시를 한두 개 추가하십시오.' },
          { '@type': 'HowToStep', position: 4, name: '제약 조건 설정', text: '모델이 해서는 안 되는 것, 길이 제한, 결과물에 대한 규칙을 나열하십시오.' },
          { '@type': 'HowToStep', position: 5, name: '출력 형식 지정', text: '결과물의 정확한 형태를 정의하십시오: JSON, 불릿 목록, 표, 단락, 번호가 있는 단계.' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ko',
        name: 'AI 프롬프트에 필요한 5가지 구성 요소',
        description: '신뢰할 수 있는 모든 AI 프롬프트가 포함하는 다섯 가지 구조적 구성 요소: 역할, 작업, 입력 및 예시, 제약 조건, 출력 형식.',
        numberOfItems: 5,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '블록 1: 역할 및 맥락', description: '모델에게 자신이 누구이고 누구를 위해 작업하는지를 알립니다. 도메인 전문성과 대상 인식을 설정합니다.' },
          { '@type': 'ListItem', position: 2, name: '블록 2: 작업/지시', description: '명확한 행동 동사를 사용하여 모델이 수행해야 할 작업을 명시적으로 진술합니다.' },
          { '@type': 'ListItem', position: 3, name: '블록 3: 입력 및 예시', description: '모델이 작업할 데이터나 콘텐츠와 올바른 결과물의 형태를 보여주는 선택적 예시.' },
          { '@type': 'ListItem', position: 4, name: '블록 4: 제약 조건', description: '모델이 따라야 할 규칙 — 길이 제한, 금지 콘텐츠, 스타일 제한.' },
          { '@type': 'ListItem', position: 5, name: '블록 5: 출력 형식', description: '결과물이 취해야 할 정확한 구조: JSON, 불릿 목록, 표, 산문 단락, 또는 번호가 있는 단계.' },
        ],
      },
      sections: {

        definition: {
          id: 'what-are-the-5-building-blocks',
          title: '프롬프트의 5가지 구성 요소란 무엇입니까?',
          content: [
            '**프롬프트에 필요한 5가지 구성 요소는 역할 및 맥락, 작업/지시, 입력 및 예시, 제약 조건, 출력 형식입니다.** 이 다섯 가지 구성 요소는 신뢰할 수 있고 반복 가능한 프롬프트를 일관성 없는 결과를 생성하는 모호한 질문과 구별하는 최소한의 구조입니다.',
            '각 블록은 서로 다른 실패 원인을 해결합니다. 역할 및 맥락은 모델에게 자신이 누구이고 어떤 상황에 있는지를 알립니다. 작업/지시는 정확히 무엇을 해야 하는지를 알립니다. 입력 및 예시는 원자재와 학습 신호를 제공합니다. 제약 조건은 규칙을 설정합니다. 출력 형식은 답변의 형태를 지정합니다. 이 다섯 가지를 함께 사용하면 모델이 추측해야 할 것이 없어집니다.',
          ],
        },

        badVsGood: {
          id: 'bad-vs-good-example',
          content: [
            '**5가지 블록 없이 (모호한 경우):**\n> 이 보고서를 요약해 주세요.',
            '**5가지 블록 모두 포함 (완전한 경우):**\n> 당신은 시니어 비즈니스 애널리스트입니다 (역할). 아래 3분기 보고서의 주요 내용을 요약해 주십시오 (작업). [보고서 텍스트] (입력). 보고서의 사실만 사용하고 최대 200자이며 공식적인 어조를 사용하십시오 (제약 조건). "주요 내용" 아래에 3개의 불릿 포인트로 반환하십시오 (출력 형식).',
          ],
        },

        tldr: {
          id: 'key-takeaways',
          title: '핵심 요점',
          isTldr: true,
          items: [
            '역할 및 맥락: 모델에게 자신이 누구이고 어떤 도메인에서 운영되는지를 알리십시오',
            '작업/지시: 모델이 생성해야 할 것을 구체적이고 테스트 가능하게 명시하십시오',
            '입력 및 예시: 모델에게 필요한 원자재와 샘플 입력/출력 쌍을 제공하십시오',
            '제약 조건: 모델이 해야 할 것과 하지 말아야 할 것에 대한 규칙을 설정하십시오',
            '출력 형식: 답변의 정확한 형태를 지정하십시오 — JSON, 불릿, 표, 또는 산문',
          ],
        },

        quickFacts: {
          id: 'quick-facts',
          title: '⚡ 빠른 참조',
          content: '5가지 구성 요소와 사용 시기에 대한 빠른 참조 가이드입니다:',
          items: [
            '**5가지 블록:** 역할 및 맥락 → 작업/지시 → 입력 및 예시 → 제약 조건 → 출력 형식',
            '**최소한의 실용적 프롬프트:** 단순한 작업을 위한 작업 + 출력 형식 (2블록)',
            '**가장 효과적인 추가 요소:** "제공된 정보만 사용하십시오"와 같은 제약 조건 하나가 환각 위험을 크게 줄입니다',
            '**적용 가능 대상:** 모든 주요 언어 모델, 프론티어 모델, Ollama, LM Studio 또는 유사 도구를 통한 모든 로컬 LLM',
            '**매핑 대상:** CRAFT, CO-STAR, SPECS, RTF 및 기타 모든 주요 프레임워크 — 이름은 다르지만 블록은 동일',
          ],
        },

        whyMatters: {
          id: 'why-building-blocks-matter',
          title: '이 5가지 구성 요소가 중요한 이유는 무엇입니까?',
          content: [
            '5블록 모델은 OpenAI, Google, Anthropic 및 독립적인 실무자들의 프롬프트 엔지니어링 가이드에서 수렴된 합의를 반영합니다. 역할, 지시, 예시, 제약 조건, 출력 형식은 2023년 이후 발표된 모든 주요 프레임워크에서 다른 이름으로 등장합니다. 이는 우연이 아닙니다: 이것은 확률적 모델이 유용하고 일관된 결과를 생성하기 위해 필요한 최소한의 정보입니다.',
            '비즈니스 관점에서의 이유는 명확합니다. 역할과 맥락이 없으면 일반적인 답변이 생성되어 재작성이 필요합니다. 제약 조건이 없으면 환각 위험과 브랜드에 맞지 않는 결과물이 증가합니다. 출력 형식이 없으면 직접 파싱하거나 복사·붙여넣기할 수 없는 결과물이 나옵니다. 5블록 모델은 이 세 가지 실패 원인을 동시에 해결하며 모든 주요 언어 모델과 로컬 LLM에 동등하게 적용됩니다.',
          ],
        },

        block1: {
          id: 'block-1-role-context',
          title: '역할 및 맥락 블록은 무엇을 합니까?',
          content: [
            '**역할**은 모델이 채택할 페르소나나 전문성을 알려줍니다. **맥락**은 모델이 운영되는 상황, 도메인, 대상을 알려줍니다. 두 요소는 쌍으로 작동하기 때문에 함께 묶입니다 — 역할은 모델이 누구인지, 맥락은 해당 작업에서 "좋음"의 의미를 형성하는 환경입니다.',
            '역할과 맥락을 생략하면 모델은 일반적인 관점에서 답변합니다 — 특정 누구에게도 유용하지 않습니다. 이 두 요소를 포함하면 동일한 모델이 VAT 신고에 관한 질문에 답변하는 시니어 세무사, 19세 대상을 위해 글을 쓰는 주니어 카피라이터, 또는 분기 보고서를 요약하는 데이터 애널리스트가 됩니다. 결과물이 실제 상황에 맞게 조정됩니다.',
          ],
          items: [
            '**도메인을 구체적으로 지정하십시오:** "당신은 B2B SaaS 카피라이터입니다"는 "당신은 작가입니다"보다 더 유용합니다',
            '**대상을 포함하십시오:** "비기술 CFO에게 설명하십시오"는 어휘와 세부 수준을 제한합니다',
            '**전문성 수준을 명시하십시오:** "시니어 보안 엔지니어로 행동하십시오"는 "보안 엔지니어로 행동하십시오"와 다른 결과물을 생성합니다',
            '**상황이 중요한 경우 명시하십시오:** "초안을 검토하고 있습니다"와 "처음부터 작성하고 있습니다"는 모델의 접근 방식을 변경합니다',
          ],
        },

        block1Link: {
          content: '모델이 지시 사항을 더 잘 따르게 됨에 따라 역할 프롬프팅이 어떻게 발전했는지 이해하려면 [프롬프트 엔지니어링의 발전](/prompt-engineering/how-prompt-engineering-evolved)을 참조하십시오.',
        },

        block2: {
          id: 'block-2-task-instruction',
          title: '작업/지시 블록이란 무엇입니까?',
          content: [
            '**작업/지시 블록은 모델에게 원하는 작업을 명시적으로 진술하는 것입니다.** 이것은 가장 중요한 블록입니다 — 다른 모든 블록이 이 블록을 지원합니다. 명확하고 구체적이며 테스트 가능한 지시는 모호함을 거의 없애줍니다. 모호한 지시는 모든 모델과 사용 사례에서 AI 결과물 품질 저하의 가장 큰 원인입니다.',
            '현재 모범 사례 지침은 작업을 실행 가능하고 관찰 가능하게 만드는 것을 강조합니다: 동사를 사용하고, 결과물을 명시하고, 가능한 경우 성공 기준을 설명하십시오. "요약을 작성하십시오"는 작업입니다. "다음 기사를 각 20자 이내의 3개 불릿 포인트로 요약하십시오"는 테스트 가능한 결과물이 있는 작업입니다. 결과물 품질의 차이는 상당합니다.',
          ],
          items: [
            '❌ 약한 예시: "이 주제에 대해 무언가를 작성하십시오"',
            '✅ 강한 예시: "비기술적 관리자를 위한 프롬프트 엔지니어링의 이점에 관한 150자 LinkedIn 게시물을 작성하십시오"',
            '❌ 약한 예시: "이 데이터를 분석하십시오"',
            '✅ 강한 예시: "이 데이터셋에서 상위 3가지 트렌드를 파악하고 매출 영향도 순으로 높은 것부터 순위를 매기십시오"',
          ],
        },

        block2Link: {
          content: '지시 사항은 예시 제공 여부와 직접 상호 작용합니다 — 각 접근 방식이 언제 가장 효과적인지는 [제로샷 vs. 퓨샷: 어느 접근 방식이 더 나은 결과를 얻는가?](/prompt-engineering/zero-shot-vs-few-shot)를 참조하십시오.',
        },

        block3: {
          id: 'block-3-input-examples',
          title: '입력과 예시는 어떻게 정확도를 향상시킵니까?',
          content: [
            '**입력**은 모델이 작업해야 할 실제 데이터, 텍스트 또는 자료입니다. **예시**는 올바른 응답이 어떤 모습인지를 보여주는 샘플 입력/출력 쌍입니다. 이 두 가지는 별개의 개념입니다: 입력은 현재 작업을 위한 원자재이고, 예시는 모델이 작업을 수행하는 방식을 형성하는 학습 신호입니다.',
            '1~3개의 예시를 포함하는 것(퓨샷 프롬프팅)은 출력 형식과 어조를 고정하는 가장 신뢰할 수 있는 기법입니다. 모델에게 좋은 답변의 모습을 보여주면, 모델은 작업 설명에서만 추론하는 것이 아니라 패턴에 맞춥니다. 이것은 정밀도가 요구되는 특수 형식, 일관된 어조, 구조화된 결과물에 가장 중요합니다.',
          ],
          items: [
            '**예시를 추가해야 할 때:** 특수 형식, 일관된 어조 요구 사항, 구조화된 결과물, 도메인별 어휘',
            '**제로샷을 유지해야 할 때:** 단순한 사실 질문, 광범위한 탐색, 모델의 기본 응답 스타일을 적극적으로 원할 때',
            '**예시를 다양하게 하십시오:** 동일한 예시는 하나의 패턴만 가르칩니다 — 예상하는 실제 입력 범위를 다루십시오',
            '**실제 데이터를 사용하십시오:** 실제 샘플이 이상화된 샘플보다 더 나은 성과를 냅니다 — 모델은 실제로 보여주는 것에서 학습합니다',
          ],
        },

        block3Link: {
          content: '예시를 사용해야 할 때와 생략해야 할 때에 대한 전체 설명은 [제로샷 vs. 퓨샷: 어느 접근 방식이 더 나은 결과를 얻는가?](/prompt-engineering/zero-shot-vs-few-shot)를 참조하십시오.',
        },

        block4: {
          id: 'block-4-constraints',
          title: '제약 조건이란 무엇이며 프롬프트에 왜 필요합니까?',
          content: [
            '**제약 조건은 모델이 따라야 할 규칙입니다: 해야 할 것과 하지 말아야 할 것입니다.** 여기에는 길이 제한, 금지 주제나 구문, 필수 출처, 브랜드 보이스 규칙, 안전 경계, 형식 제한이 포함됩니다. 제약 조건은 가장 흔히 생략되는 블록이며 — 이 블록의 부재가 환각된 사실, 브랜드에 맞지 않는 언어, 잘못된 형식의 결과물이 나오는 주요 원인입니다.',
            '잘 설계된 제약 조건 하나를 추가하는 것이 기존 프롬프트에 대해 가장 높은 영향을 미치는 변경인 경우가 많습니다. "통계를 만들어내지 마십시오"는 환각 위험을 크게 줄입니다. "100자를 절대 초과하지 마십시오"는 간결함을 강요합니다. "제공된 텍스트의 정보만 사용하십시오"는 결과물을 원본 자료에 근거하게 하여 해당 작업에서 조작을 완전히 제거합니다.',
          ],
          items: [
            '**길이 제약:** "최대 150자", "불릿 포인트 5개 이하"',
            '**출처 제약:** "첨부된 문서의 사실만 사용하십시오", "확인할 수 없는 출처를 인용하지 마십시오"',
            '**어조 및 보이스 제약:** "공식적인 3인칭 어조로 작성하십시오 — 축약형 없음, 구어체 없음"',
            '**금지 콘텐츠:** "경쟁사 제품을 언급하지 마십시오", "데이터가 보여주는 것 이상으로 추측하지 마십시오"',
            '**안전 제약:** "제공된 맥락에서 질문에 답할 수 없는 경우 그렇게 말하십시오 — 답변을 만들어내지 마십시오"',
          ],
        },

        block4Links: {
          content: '제외를 사용하여 결과물을 형성하는 기법은 [부정 프롬프팅: AI에게 하지 말아야 할 것을 알려주기](/prompt-engineering/negative-prompting)를 참조하십시오. 제약 없는 프롬프트가 더 많이 환각하는 이유는 [AI 환각: AI가 사실을 만들어내는 이유](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up)를 참조하십시오.',
        },

        block4ProTip: {
          id: 'pro-tip-constraints',
          title: '🔍 전문가 팁: 가장 효과적인 제약 조건',
          content: '어떤 프롬프트에든 추가할 수 있는 가장 효과적인 단일 제약 조건은 **"제공된 맥락의 정보만 사용하십시오. 제공된 정보에서 답할 수 없는 경우 그렇게 말하십시오."**입니다. 이 한 문장이 AI 결과물에서 가장 흔한 실패 원인인 그럴듯하게 들리는 조작을 제거합니다. 이 제약 조건 하나만 추가해도 환각 위험이 80% 이상 줄어드는 경우가 많으며 모든 모델에서 보편적으로 지원됩니다.',
        },

        block5: {
          id: 'block-5-output-format',
          title: '출력 형식은 어떻게 결과물을 제어합니까?',
          content: [
            '**출력 형식은 모델이 생성해야 할 답변의 정확한 형태를 지정합니다.** 이것은 결과물이 직접 사용 가능한지 아니면 유용하게 만들기 위해 재형식화가 필요한지를 결정하는 블록입니다. 자동화된 파이프라인의 경우, 지정되지 않은 출력 형식은 불안정하고 일관성 없는 파싱을 의미합니다. GEO 관점에서 구조화된 결과물은 구조화된 답변이 프로그래밍 방식으로 추출하기 더 쉽기 때문에 AI 검색 엔진이 그대로 인용할 가능성이 더 높습니다.',
            '출력 형식 블록은 파일 형식(JSON, Markdown, CSV), 구조(표, 불릿 목록, 번호가 있는 단계), 길이, 섹션 레이블을 지정할 수 있습니다. 더 정밀하게 지정할수록 결과물을 편집할 필요가 줄어듭니다.',
            '**API 수준 출력 형식 적용:** 2026년에는 모든 주요 프로바이더가 프롬프트 텍스트 지시를 넘어서는 API 수준 출력 형식 적용을 제공합니다. 구조화된 출력(JSON 스키마 검증 포함)은 토큰 생성 수준에서 스키마에 맞는 유효한 JSON을 보장합니다 — 모델은 문자 그대로 잘못된 출력을 생성할 수 없습니다. 이러한 API를 사용할 때 블록 5는 프롬프트 텍스트 지시가 아닌 서버 측 제약이 됩니다. 최대 신뢰성을 위해 두 가지를 모두 사용하십시오: API 수준 적용을 강력한 보장으로, 프롬프트 텍스트 형식 지정을 해당 형식 내 콘텐츠 구조에 대한 안내로 사용하십시오.',
          ],
          items: [
            '**JSON:** "결과를 다음 키가 있는 JSON 객체로 반환하십시오: title, summary, tags"',
            '**Markdown 불릿:** "각 내용을 굵은 용어로 시작하는 불릿 포인트로 나열하고 한 문장의 설명을 추가하십시오"',
            '**표:** "비교 내용을 Feature, Option A, Option B 열이 있는 Markdown 표로 형식화하십시오"',
            '**구조화된 산문:** "각 주요 포인트에 대한 제목과 섹션당 최대 3문장으로 응답을 구조화하십시오"',
          ],
        },

        block5Link: {
          content: '다양한 모델에서의 JSON 모드 및 구조화된 출력에 대한 전체 가이드는 [구조화된 출력 및 JSON 모드: AI가 사용 가능한 데이터를 반환하도록 하기](/prompt-engineering/structured-output-and-json-mode)를 참조하십시오.',
        },

        template: {
          id: 'prompt-template',
          title: '5가지 블록을 하나의 프롬프트로 어떻게 결합합니까?',
          content: '아래 템플릿은 단일 도메인 중립 작업을 위해 순서대로 조합된 5가지 블록을 모두 보여줍니다. 각 부분에는 각 블록이 시작하고 끝나는 위치를 정확히 볼 수 있도록 레이블이 붙어 있습니다. 각 섹션의 내용을 교체하여 모든 도메인에 맞게 조정하십시오.',
          items: [
            '**[역할 및 맥락]** 당신은 시니어 비즈니스 애널리스트입니다. 대상은 분기 운영 보고서를 검토하는 비기술적 임원팀입니다.',
            '**[작업/지시]** 아래 보고서에서 주요 내용을 요약하십시오. 목표 대비 성과에 집중하고, 두 가지 가장 큰 위험을 파악하며, 각각에 대한 시정 조치 하나를 권장하십시오.',
            '**[입력]** [여기에 보고서 텍스트를 붙여넣으십시오]',
            '**[제약 조건]** 보고서의 정보만 사용하십시오. 추측하지 마십시오. 총 200자를 초과하지 마십시오. 쉬운 언어로 작성하십시오 — 전문 용어 없음.',
            '**[출력 형식]** 응답을 세 섹션으로 반환하십시오: "주요 내용" (불릿 포인트 3개), "주요 위험" (불릿 포인트 2개), "권장 조치" (위험당 하나씩 불릿 포인트 2개).',
          ],
        },

        templateNote: {
          content: '이 템플릿은 모든 주요 언어 모델과 Ollama 또는 LM Studio를 통한 로컬 LLM에서 작동합니다. 블록 순서는 권장 사항이지만 엄격한 규칙은 아닙니다 — 하지만 역할 및 맥락을 먼저 배치하고 출력 형식을 마지막에 배치하는 것이 모든 주요 모델에서 가장 일반적이고 신뢰할 수 있는 배열입니다.',
        },

        templateLocalLLMLinks: {
          id: 'local-llm-cross-links',
          content: '더 작은 컨텍스트 창을 가진 로컬 모델에 특별히 최적화된 프롬프트 기법은 [로컬 LLM을 위한 프롬프트 엔지니어링](/prompt-engineering/prompt-engineering-for-local-models)을 참조하십시오. 5블록 구조를 가장 안정적으로 따르는 로컬 모델 비교는 [오픈 소스 모델 비교](/prompt-engineering/comparing-open-source-models)를 참조하십시오.',
        },

        systemVsUser: {
          id: 'system-prompt-vs-user-message',
          title: 'API 호출에서 5가지 블록은 어디에 위치합니까?',
          content: [
            '2026년에 모든 주요 AI API는 **시스템 프롬프트**(영구 지시 사항)와 **사용자 메시지**(요청별 콘텐츠)를 분리합니다. 5가지 블록은 비용과 효율성에 중요한 함의를 갖는 이 두 레이어에 자연스럽게 나뉩니다.',
            '**시스템 프롬프트 (한 번 설정, 재사용):**',
            '블록 1: 역할 및 맥락 — "당신은 시니어 비즈니스 애널리스트입니다..."',
            '블록 4: 제약 조건 — "공식적인 어조를 사용하십시오. 200자를 절대 초과하지 마십시오. 추측하지 마십시오."',
            '블록 5: 출력 형식 — "항상 \'주요 내용\' 아래에 3개의 불릿 포인트를 반환하십시오..."',
            '**사용자 메시지 (요청별 변경):**',
            '블록 2: 작업/지시 — "이 보고서의 주요 내용을 요약하십시오."',
            '블록 3: 입력 및 예시 — 실제 보고서 텍스트 + 모든 예시.',
            '이 분리가 중요한 이유는 **시스템 프롬프트가 선도 모델에서 캐시되기 때문입니다** — 즉, 역할, 제약 조건, 출력 형식이 효율적으로 저장되어 모든 요청에서 새로운 토큰을 소비하지 않습니다. 수백 개의 프롬프트를 처리하는 프로덕션 파이프라인의 경우 시스템 프롬프트 부분에서 비용이 50-90% 절감됩니다.',
            'Ollama 또는 LM Studio를 통한 로컬 LLM의 경우 동일한 분리가 적용됩니다: 블록 1, 4, 5에 SYSTEM 지시어가 있는 **Modelfile**을 사용하고, 블록 2와 3은 사용자 메시지로 전달하십시오.',
          ],
        },

        frameworks: {
          id: 'frameworks-and-tools',
          title: '5가지 블록은 CRAFT, CO-STAR, SPECS에 어떻게 매핑됩니까?',
          content: [
            '인기 있는 프롬프트 엔지니어링 프레임워크는 다른 이름과 순서로 동일한 다섯 가지 구성 요소를 배열하는 독자적인 방식입니다. CRAFT, CO-STAR, SPECS는 모두 이 5블록 모델에 직접 매핑됩니다. 먼저 블록을 이해하면 처음부터 특정 용어를 암기하지 않고도 어떤 프레임워크든 적용할 수 있습니다.',
            '아래 표는 각 구성 요소가 널리 사용되는 세 가지 프레임워크의 해당 필드에 어떻게 매핑되는지를 보여줍니다:',
          ],
          columns: ['구성 요소', 'CRAFT', 'CO-STAR', 'SPECS'],
          rows: [
            { '구성 요소': '역할 및 맥락', 'CRAFT': 'Context / Role', 'CO-STAR': 'Context + Audience', 'SPECS': 'Situation' },
            { '구성 요소': '작업/지시', 'CRAFT': 'Action', 'CO-STAR': 'Objective', 'SPECS': 'Problem / Task' },
            { '구성 요소': '입력 및 예시', 'CRAFT': 'Facts / Examples', 'CO-STAR': 'Examples (optional)', 'SPECS': 'Examples' },
            { '구성 요소': '제약 조건', 'CRAFT': 'Restrictions', 'CO-STAR': 'Tone + Style', 'SPECS': 'Constraints' },
            { '구성 요소': '출력 형식', 'CRAFT': 'Format', 'CO-STAR': 'Response format', 'SPECS': 'Style' },
          ],
        },

        frameworksLinks: {
          content: 'PromptQuorum에는 작업 유형에 따라 다른 구성으로 이러한 블록을 미리 채우는 9개의 내장 프레임워크가 포함되어 있습니다. 프레임워크별 가이드는 [어떤 프롬프트 프레임워크를 사용해야 합니까?](/prompt-engineering/which-prompt-framework-should-you-use), [CRAFT 프레임워크](/prompt-engineering/craft-framework), [CO-STAR 프레임워크](/prompt-engineering/co-star-framework)를 참조하십시오.',
        },

        frameworksDidYouKnow: {
          id: 'frameworks-did-you-know',
          title: '🔍 알고 계셨습니까?',
          content: '2023년 이후 발표된 모든 주요 프롬프트 엔지니어링 프레임워크 — CRAFT, CO-STAR, SPECS, RTF, TRACE, APE — 는 다른 이름으로 이 5가지 블록에 직접 매핑됩니다. 블록을 한 번 배우면 특정 용어를 암기하지 않고도 어떤 프레임워크든 적용할 수 있습니다. 프레임워크는 강조점과 순서가 다르지만 기본 구조는 항상 동일합니다: 누가, 무엇을, 어떻게, 제약 조건, 형식.',
        },

        mistakes: {
          id: 'common-mistakes',
          title: '프롬프트 구성 요소에서 가장 흔한 실수는 무엇입니까?',
          items: [
            '**역할을 완전히 생략:** 모델이 일반적인 관점에서 답변합니다 — 한 문장으로라도 도메인과 전문성 수준을 지정하십시오',
            '**모호한 맥락:** "내 대상을 위해 작성하십시오"는 모델에게 아무것도 알려주지 않습니다 — 대상, 지식 수준, 결과물을 어디에 사용할지를 명시하십시오',
            '**테스트할 수 없는 지시:** "더 좋게 만드십시오"에는 관찰 가능한 성공 기준이 없습니다 — 구체적이고 측정 가능한 작업으로 대체하십시오',
            '**환각에 대한 제약 없음:** "제공된 정보만 사용하십시오" 없이는 모델이 빈 부분을 그럴듯하게 들리는 조작으로 채웁니다',
            '**지정되지 않은 출력 형식:** 모델이 자체 구조를 선택합니다 — 이것은 실행 간에 변경되고 다운스트림 프로세스를 중단시킵니다',
            '**모든 것을 하나의 단락에 혼합:** 텍스트 벽에 혼합된 블록은 모델이 파싱하기 더 어렵습니다 — 각 블록에 줄바꿈이나 명시적 레이블을 사용하십시오',
            '**동일한 예시 과다 사용:** 모두 동일한 예시 세 개는 하나의 패턴만 가르칩니다 — 실제 입력 범위를 다루도록 다양화하십시오',
          ],
        },

        mistakesWarning: {
          id: 'warning-output-format',
          title: '⚠️ 경고: 출력 형식 생략이 사용할 수 없는 결과물의 1위 원인',
          content: '출력 형식 블록을 지정하지 않는 것이 프로덕션 파이프라인에서 사용할 수 없는 AI 결과물의 가장 흔한 원인입니다. 명시적인 형식 지정 없이는 모델의 기본 형식이 실행 간, 모델 간, API 버전 간에 변경됩니다. 항상 형식을 지정하십시오 — "불릿 포인트 없이 일반 산문으로 응답하십시오"도 지정하지 않는 것보다 낫습니다. 이것이 결과물을 얻는 것과 사용 가능한 결과물을 얻는 것의 차이입니다.',
        },

        howToStart: {
          id: 'how-to-build-a-prompt',
          title: '5가지 구성 요소를 사용하여 프롬프트를 작성하는 방법',
          numberedItems: [
            '**역할 및 맥락 설정:** 모델이 누구이고 어떤 도메인에서 운영되는지를 명시하는 것으로 시작하십시오. 예시: "당신은 독일 소규모 사업주를 돕는 시니어 세무사입니다." 이 없이는 모델이 일반적인 관점에서 답변합니다.',
            '**작업/지시 작성:** 생성해야 할 것을 정확하게 명시하십시오 — 구체적이고 테스트 가능하게. "200자로 주요 VAT 의무를 요약하십시오"가 "VAT에 대해 알려주십시오"보다 낫습니다.',
            '**입력 및 예시 추가:** 원자재와 올바른 출력 형식의 예시를 최소 하나 제공하십시오. 잘 선택된 단일 예시가 다른 어떤 단일 기법보다 불일치를 더 많이 줄입니다.',
            '**제약 조건 정의:** 모델이 하지 말아야 할 것, 길이 제한, 어조 규칙을 나열하십시오. 예시: "독일 외 관할 지역에 대한 조언을 제공하지 마십시오. 최대 200자. 공식적인 어조."',
            '**출력 형식 지정:** 답변의 정확한 형태를 명시하십시오 — JSON 객체, 3개 불릿 요약, 표, 또는 산문 단락. 이것을 생략하는 것이 사용할 수 없는 AI 결과물의 가장 흔한 원인입니다. 프로덕션 배포 전에 완성된 5블록 프롬프트를 [Anthropic\'s Console](https://docs.anthropic.com/) 또는 [OpenAI\'s Playground](https://platform.openai.com/playground)에서 테스트하십시오.',
          ],
        },

        faq: {
          id: 'faq',
          title: 'FAQ: 프롬프트의 구성 요소',
          faqs: [
            {
              q: '모든 프롬프트에 5가지 블록이 모두 필요합니까?',
              a: '그렇지 않습니다. 단순하고 명확한 작업에는 작업/지시와 출력 형식만으로도 충분합니다. 도메인이나 대상이 중요한 경우에는 역할 및 맥락을 추가하십시오. 실패 비용이 높은 경우에는 제약 조건을 추가하십시오. 형식 정밀도가 중요한 경우에는 예시를 추가하십시오. 최소한으로 시작하여 결과물이 기준에 미치지 못할 때만 블록을 추가하십시오.',
            },
            {
              q: '역할이 맥락보다 중요합니까, 아니면 그 반대입니까?',
              a: '두 요소는 쌍으로 작동합니다 — 어느 것도 단독으로는 충분하지 않습니다. 맥락 없는 역할은 일반적인 전문가 수준의 결과물을 생성합니다. 역할 없는 맥락은 상황 인식은 있지만 어조가 일관되지 않은 결과물을 생성합니다. 대부분의 작업에서 두 가지를 결합한 한 문장이 잘 작동합니다: "당신은 [도메인 작업]을 위해 [대상]과 함께 일하는 [역할]입니다."',
            },
            {
              q: '프롬프트를 짧게 유지하면서 5가지 블록을 모두 포함할 수 있습니까?',
              a: '가능합니다. 각 블록은 한 문장으로 표현할 수 있습니다. 5블록 프롬프트 전체를 100자 이내로 작성할 수 있습니다. 간결함이 문제가 아니라 모호함이 문제입니다. 다섯 가지 요소를 모두 갖춘 짧고 정확한 프롬프트는 어느 것도 없는 길고 산만한 프롬프트보다 일관되게 더 나은 성과를 냅니다.',
            },
            {
              q: '맥락과 예시의 차이는 무엇입니까?',
              a: '맥락은 상황, 도메인, 대상을 설명하는 것으로 작업을 틀 짓는 배경 정보입니다. 예시는 모델에게 올바른 답변이 어떤 모습인지를 보여주는 입력/출력 쌍입니다. 맥락은 모델에게 현재 위치를 알려주고, 예시는 무엇을 생성해야 하는지를 보여줍니다. 두 가지 모두 유용하지만 완전히 다른 목적을 제공합니다.',
            },
            {
              q: 'CRAFT 또는 CO-STAR 같은 프레임워크를 사용할 때 제약 조건은 어디에 위치합니까?',
              a: '모든 주요 프레임워크에는 제약 조건에 매핑되는 필드가 있습니다 — CRAFT의 "Restrictions", CO-STAR의 "Tone & Style", SPECS의 "Constraints". 프레임워크에 명시적인 제약 조건 필드가 없다면, 별도의 "하지 말 것" 섹션으로 마지막에 추가하십시오 — 모든 모델이 이를 안정적으로 처리합니다.',
            },
            {
              q: '단순한 질문만 할 경우에도 출력 형식이 중요합니까?',
              a: '대화형 질문의 경우 형식 지정은 선택 사항입니다. 하지만 문서에 붙여넣거나, 코드로 파싱하거나, 게시되거나, 팀원들 사이에서 재사용될 결과물에는 형식 지정이 필수입니다. 이는 결과물을 얻는 것과 사용 가능한 결과물을 얻는 것의 차이입니다.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '관련 읽을거리',
          items: [
            '[프롬프트 엔지니어링의 발전](/prompt-engineering/how-prompt-engineering-evolved) — 초기 지시 사항 준수 모델에서 오늘날의 추론 가능한 시스템까지: 프롬프팅 기법이 모델 역량과 함께 어떻게 공진화했는가.',
            '[제로샷 vs. 퓨샷 프롬프팅](/prompt-engineering/zero-shot-vs-few-shot) — 예시를 사용해야 할 때와 생략해야 할 때: 작업에 맞는 올바른 프롬프팅 접근 방식 선택.',
            '[부정 프롬프팅: AI에게 하지 말아야 할 것을 알려주기](/prompt-engineering/negative-prompting) — 실행 중인 제약 조건: 포함보다 제외가 결과물을 더 안정적으로 형성하는 방법.',
            '[AI 환각: AI가 사실을 만들어내는 이유](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 제약 조건과 예시가 중요한 이유: 환각의 근본 원인과 증거 기반 방어.',
            '[구조화된 출력 및 JSON 모드](/prompt-engineering/structured-output-and-json-mode) — 출력 형식을 정밀하게 지정하기: 모델 전반에서의 JSON 모드, Markdown 표, 기타 구조화된 접근 방식.',
            '[어떤 프롬프트 프레임워크를 사용해야 합니까?](/prompt-engineering/which-prompt-framework-should-you-use) — CRAFT, CO-STAR, SPECS 및 기타 비교: 사용 사례에 맞는 프레임워크 선택.',
            '[페르소나 프롬프팅](/prompt-engineering/persona-prompting) — 블록 1(역할 및 맥락)에 대한 심층 분석, 7가지 하위 구성 요소: 페르소나 선택이 결과물 품질과 일관성에 어떤 영향을 미치는가.',
            '[제약 프롬프팅](/prompt-engineering/constrained-prompting) — API 수준 적용을 포함한 블록 4(제약 조건)에 대한 심층 분석: 유효한 결과물을 보장하는 강력한 제약 조건.',
            '[프롬프트 체이닝](/prompt-engineering/prompt-chaining) — 다단계 워크플로에서 5가지 블록을 적용하는 방법: 복잡한 작업을 순차적 프롬프트로 분해하기.',
          ],
        },

        sources: {
          id: 'sources',
          title: '출처 및 추가 읽을거리',
          items: [
            '[효과적인 프롬프트 작성: 가이드라인 및 모범 사례 — OpenAI](https://platform.openai.com/docs/guides/prompt-engineering) — 역할 기반 및 구조화된 프롬프트에 대한 모범 사례를 포함한 OpenAI의 공식 프롬프트 엔지니어링 가이드.',
            '[프롬프트 인젝션 위협 및 완화 — OWASP](https://owasp.org/www-community/attacks/Prompt_Injection) — 비구조화된 프롬프트의 보안 함의와 제약 조건에 대한 권장 사항.',
            '[ChatGPT를 통한 프롬프트 엔지니어링 향상을 위한 프롬프트 패턴 카탈로그 — White 외, 2023](https://arxiv.org/abs/2302.11382) — 5블록 모델에 직접 적용 가능한 구조화 및 역할 기반 기법을 포함한 포괄적인 프롬프트 디자인 패턴 카탈로그.',
            '[프롬프트 엔지니어링 — Claude 문서 — Anthropic](https://docs.anthropic.com/) — 프로덕션 파이프라인을 위한 시스템 프롬프트 모범 사례, 구조화된 출력, 캐싱 전략.',
            '[구조화된 출력 — Responses API — OpenAI](https://platform.openai.com/docs/) — 토큰 생성 시 스키마에 맞는 유효한 JSON을 보장하는 API 수준 출력 형식 적용.',
            '[Gemini API: 프롬프팅 전략 — Google](https://ai.google.dev/) — 프론티어 모델 전반에서의 응답 스키마 및 제어된 생성 기법.',
          ],
        },

      },
    },
  };
