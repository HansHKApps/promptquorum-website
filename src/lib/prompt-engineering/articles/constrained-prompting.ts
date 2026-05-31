// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: constrained-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Constrained Prompting',
      intro: '**Constrained prompting is a technique where you tell the model not just what to do, but also what it must and must not do — using "must," "must not," and "only" language — so outputs stay inside clearly defined boundaries.** This is essential when you need reliable formats, safe content, or strict compliance with internal rules.',
      leadAnswerBlock: '**Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable and reusable.** Instead of "write a summary," you specify exact structure, allowed content, and validation rules.',
      publishDate: '2026-03-26',
      readTime: '6 min read',

      seoTitle: 'Constrained Prompting: Structured AI Outputs',

      metaDescription: 'Master constrained prompting to force AI into JSON, XML, and structured formats. 5 techniques with real-world examples for GPT-4o, Claude, and Gemini.',

      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
      audience: 'Developers, product managers, and teams building LLM-powered workflows',
      next_refresh_due: '2026-09-26',
      aboutTopics: ['Constrained Prompting', 'Structured Output', 'Prompt Engineering'],
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'Quick Facts', anchor: '#quick-facts' },
        { label: 'What Is Constrained Prompting?', anchor: '#what-is-constrained-prompting' },
        { label: 'Why Does Constrained Prompting Matter?', anchor: '#why-does-constrained-prompting-matter' },
        { label: 'Which Constraint Types Can You Use?', anchor: '#which-constraint-types-can-you-use' },
        { label: 'Unconstrained vs Constrained Prompt: An Example', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
        { label: 'When Should You Use Constrained Prompting?', anchor: '#when-should-you-use-constrained-prompting' },
        { label: 'How Does PromptQuorum Support Constrained Prompting?', anchor: '#how-does-promptquorum-support-constrained-prompting' },
        { label: 'How to Use Constrained Prompting', anchor: '#how-to-use-constrained-prompting' },
        { label: 'API-Level Constraint Enforcement', anchor: '#api-level-constraint-enforcement' },
        { label: 'Constrained Prompting in Regulated Environments', anchor: '#constrained-prompting-in-regulated-environments' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#frequently-asked-questions' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/constrained-prompting?lang=en',
        inLanguage: 'en',
        headline: 'Constrained Prompting: Force AI Output Formats (2026)',
        description: 'What constrained prompting is, why it matters, and how to use it to make AI outputs predictable and safe in real workflows.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-28',
        keywords: ['constrained prompting', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Constrained Prompting' },
          { '@type': 'Thing', name: 'Structured Output' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
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
          { '@type': 'Question', name: 'What is constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable and reusable. Instead of "write a summary," you specify: 150 words, JSON format, no competitor names, must include a call-to-action.' } },
          { '@type': 'Question', name: 'What are the five types of constraints?', acceptedAnswer: { '@type': 'Answer', text: 'The five main constraint types are: (1) Structural — required headings, tables, JSON with specific keys. (2) Content — required sections, banned topics. (3) Style — tone, reading level, terminology. (4) Length — word or character limits. (5) Safety — avoid medical advice, personal data, legal conclusions.' } },
          { '@type': 'Question', name: 'How do you force a model to output valid JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Provide the exact JSON schema in the prompt: "Return JSON exactly matching: { \\"finding\\": \\"...\\" }". Combine this with "Output only JSON, no other text." GPT-4o also supports a JSON mode via API that enforces valid JSON at the API level.' } },
          { '@type': 'Question', name: 'Does constrained prompting work on GPT-4o, Claude, and Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — all three support constrained prompting. GPT-4o and Claude Sonnet 4.6 follow hard format constraints (JSON, tables, word limits) at ~95% adherence on well-formed prompts. All three also support API-level constraint enforcement via structured outputs, which guarantees valid JSON schema at the model level. Gemini 3.1 Pro scores similarly but may interpret ambiguous constraints differently. Always test across models.' } },
          { '@type': 'Question', name: 'What is the difference between constrained prompting and few-shot prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained prompting adds explicit rules in text form (format, length, content restrictions). Few-shot prompting provides worked examples that implicitly show the model what to produce. The two work well together: use a few-shot example to demonstrate the output pattern, then add constraints for stricter enforcement.' } },
          { '@type': 'Question', name: 'When should you NOT use constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Avoid structural constraints on open-ended creative tasks (brainstorming, ideation, fiction). Over-constraining creative prompts produces formulaic, low-quality output. Use tone and style constraints for creative tasks but allow structural freedom.' } },
          { '@type': 'Question', name: 'How many constraints can you stack in one prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Practically, 3–5 constraints work well. Beyond 5–6, models start silently dropping lower-priority constraints without warning. If you need more than 5, list them in priority order and state explicitly: "If constraints conflict, apply them in this order: (1) safety, (2) format, (3) length."' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Use Constrained Prompting',
        inLanguage: 'en',
        description: 'A 5-step guide to applying output constraints in prompts for GPT-4o, Claude Sonnet 4.6, and Gemini 3.1 Pro.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Identify output constraints', text: 'Identify constraints relevant to your task: length, format, vocabulary, scope, and safety.' },
          { '@type': 'HowToStep', position: 2, name: 'Use hard constraint language', text: 'State constraints using "must," "must not," and "only" — never "try to" or "aim to."' },
          { '@type': 'HowToStep', position: 3, name: 'Provide a format example', text: 'For format constraints, show the exact schema inline: JSON keys, Markdown structure, or field names.' },
          { '@type': 'HowToStep', position: 4, name: 'List content inclusions and exclusions', text: 'Explicitly list what to include and what to exclude by topic, terminology, and data type.' },
          { '@type': 'HowToStep', position: 5, name: 'Test on edge cases', text: 'Generate 10 outputs. Verify all respect the length limit, format, and content boundaries.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '**Constrained prompting** adds explicit rules (structure, content, length, safety) to a prompt so AI output stays predictable across runs.',
            '5 constraint types: structural, content, style, length, and safety — combine them for maximum output control.',
            'Use mandatory language: **"must," "must not," "only."** Soft directives like "try to" are frequently ignored.',
            'Format constraints work best with an example: show the model the exact JSON schema or Markdown structure you need.',
            'GPT-4o, Claude Sonnet 4.6, and Gemini 3.1 Pro all support constrained prompting — plus API-level enforcement via structured outputs — but respond differently to prompt-level constraints. Test across models.',
            'Constrained prompts save review time: outputs that already match your required structure need less human correction.',
            'Use [PromptQuorum](https://www.promptquorum.com/) to test constrained prompts across multiple models side by side and compare constraint adherence.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Quick Facts',
          items: [
            '**5 constraint types:** Structural, Content, Style, Length, Safety',
            '**Model adherence:** GPT-4o and Claude Opus 4.7 follow hard constraints at ~95% on well-formed prompts',
            '**Optimal stacking:** 3–5 constraints work well; beyond 5–6, models drop lower-priority constraints silently',
            '**JSON output consistency:** Without a schema example, models produce inconsistent key names across runs',
            '**Test methodology:** Generate 10 outputs to verify all respect length, format, and content boundaries',
            '**Setup time:** First-run constraint validation adds 10–15 minutes; reusable templates save 30+ minutes per task',
          ],
        },
        whatIsConstrained: {
          title: 'What Is Constrained Prompting?',
          content: [
            '**Constrained prompting means adding explicit rules about content, structure, length, and behavior directly into your prompt.** Instead of a loose instruction like "summarize this," you specify allowed formats, required fields, banned topics, and validation rules. This is a core [prompt engineering](/prompt-engineering/what-is-prompt-engineering) technique.',
            'Constraints can include output schemas (such as JSON with fixed keys), word limits, tone requirements, and safety restrictions like "do not provide medical diagnoses." By making these rules part of the prompt, you reduce ambiguity and make the model easier to integrate into production workflows.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable.' },
            { type: 'in-plain-terms', text: 'Instead of asking AI to "write a summary," you tell it: maximum 150 words, use bullet points, do not mention competitors, always include a call-to-action. The more specific the rules, the more consistent the output.' },
          ],
          callouts: [
            { type: 'note', label: 'Definition', text: 'Constrained prompting is not a separate API feature — it is a prompting technique. You apply constraints in plain text within the prompt itself. No special syntax or API flags required.' },
          ],
        },
        whyItMatters: {
          title: 'Why Does Constrained Prompting Matter?',
          content: [
            '**Constrained prompting matters whenever model output feeds into people, processes, or other systems that depend on predictable behavior.** Without constraints, the same prompt may produce different structures or levels of detail across runs.',
            'Clear constraints help you:',
          ],
          items: [
            'Prevent unexpected content or formatting that breaks downstream tools.',
            'Enforce brand, legal, or safety guidelines directly at the prompt level.',
            'Reduce review time because outputs already match your required structure.',
          ],
          callouts: [
            { type: 'tip', label: 'Key Point', text: 'Unconstrained outputs vary widely: same prompt, different structures, different lengths, different tone. Constraints eliminate that variance and make output production-ready.' },
          ],
        },
        typesOfConstraints: {
          title: 'Which Constraint Types Can You Use?',
          content: [
            '**You can constrain prompts along several dimensions: structure, content, style, length, and safety.** The more precise you are, the more consistent the outputs become. Learn how these fit into [structured prompts](/prompt-engineering/rtf-framework).',
            'Common constraint types include:',
          ],
          items: [
            'Structural constraints: Required headings, bullet lists, tables, or JSON with specific keys.',
            'Content constraints: Required sections (such as "Risks" or "Next steps") and banned topics or phrases.',
            'Style constraints: Tone ("formal," "neutral," "conversational"), reading level, or terminology rules.',
            'Length constraints: Word or character limits, or a fixed number of bullets or sections.',
            'Safety constraints: Instructions to avoid personal data, medical advice, legal conclusions, or disallowed content categories.',
          ],
          columns: ['Constraint Type', 'Example', 'When to Use'],
          rows: [
            { 'Constraint Type': 'Structural', 'Example': '"Return as JSON: {key: value}"', 'When to Use': 'API integrations, data pipelines' },
            { 'Constraint Type': 'Content', 'Example': '"Must include risks section; must not mention competitors"', 'When to Use': 'Reports, customer comms' },
            { 'Constraint Type': 'Style', 'Example': '"Formal tone, no contractions, Grade 8 reading level"', 'When to Use': 'Brand-controlled outputs' },
            { 'Constraint Type': 'Length', 'Example': '"≤150 words, exactly 5 bullet points"', 'When to Use': 'Templated content, summaries' },
            { 'Constraint Type': 'Safety', 'Example': '"Must not provide medical diagnoses or legal advice"', 'When to Use': 'Regulated industries, public-facing' },
          ],
          callouts: [
            { type: 'tip', label: 'Pro Tip', text: 'For JSON output, always provide the exact key names and value types in the prompt. "Return JSON" without a schema produces inconsistent key naming across models.' },
            { type: 'insight', label: 'Model Adherence Rates', text: 'Prompt-level constraint adherence varies by model and constraint type: GPT-4o achieves ~95% on JSON schema, ~90% on word limits, ~95% on content inclusion. Claude Sonnet 4.6 scores ~97% on JSON, ~92% on word limits, ~96% on inclusion. Gemini 3.1 Pro: ~92% JSON, ~85% word limits, ~93% inclusion. API-level Structured Outputs achieve near 100% JSON schema compliance across all models, but only handle schema — not content, tone, or safety constraints.' },
          ],
        },
        example: {
          title: 'Unconstrained vs Constrained Prompt: An Example',
          content: [
            '**The impact of constrained prompting is easiest to see when you compare an unconstrained prompt with a constrained one for the same task.** Here we draft a short product summary.',
            '**Unconstrained prompt** (produces variable length, structure, and tone on every run):',
            '"Write a summary of our new analytics feature."',
            '**Constrained version** (defines length, structure, style, and required content):',
            '"You are a B2B product marketer. Task: Write a summary of our new analytics feature for a product page. Constraints: Length: 120–160 words. Structure: 1 short intro paragraph, then 3 bullet points, then 1 closing sentence. Style: Clear, neutral-professional tone. No hype words like \'revolutionary\' or \'game-changing\'. Content: Mention the main benefit (faster insight into customer behavior) and one concrete example use case. Output format: Valid Markdown with bullet points using `-`."',
            'The constrained version defines length, structure, style, and required content. Output becomes predictable and reusable — suitable for templating across team workflows.',
            '**Advanced Example: Constrained Data Extraction from Legal Documents**',
            'For more complex tasks, combine multiple constraint types with a structured output schema:',
            '**Prompt:**',
            '"You are a contract analysis assistant. Task: Extract key terms from the provided contract clause. Constraints: (1) Return ONLY valid JSON matching this exact schema: { \\"parties\\": [\\"string\\"], \\"obligation_type\\": \\"payment|delivery|confidentiality|termination\\", \\"deadline\\": \\"ISO 8601 date or null\\", \\"penalty_clause\\": true|false, \\"summary\\": \\"max 50 words\\" } (2) If a field cannot be found, use null. (3) Do not infer information not explicitly stated. (4) Output ONLY the JSON — no preamble, no markdown code fences, no explanation. (5) Verify your JSON is valid before returning."',
            'This advanced example shows how to layer constraints for production use: schema enforcement (format constraint), field requirements (content constraint), no inference rule (content constraint), and JSON validity (safety constraint).',
          ],
          callouts: [
            { type: 'practice', label: 'Rule', text: 'Every constraint you add reduces the variance in model output. Start with 1–2 constraints, test, then add more. Stacking 5+ constraints at once increases the risk of the model violating one silently. For production use, test on edge cases (ambiguous clauses, missing fields, boundary conditions).' },
          ],
        },
        whenToUse: {
          title: 'When Should You Use Constrained Prompting?',
          content: [
            '**You should use constrained prompting whenever correctness and consistency are more important than maximum creativity.** This is particularly true in operational, analytical, and regulated contexts. Paired with [few-shot examples](/prompt-engineering/few-shot-prompting), constraints become even more powerful.',
            'Typical use cases include:',
          ],
          items: [
            'Generating JSON or table outputs that other systems will parse.',
            'Creating standardized reports, summaries, or status updates across teams.',
            'Drafting customer communications that must follow brand or legal guidelines.',
            'Extracting structured data (issues, entities, metrics) from unstructured text.',
          ],
          callouts: [
            { type: 'warning', label: 'Avoid', text: 'Do not apply length or structural constraints to open-ended creative tasks (brainstorming, ideation). Over-constraining creative prompts produces generic, box-checking outputs rather than genuinely useful ideas.' },
          ],
        },
        howPQSupports: {
          title: 'How Does PromptQuorum Support Constrained Prompting?',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that is designed to work well with constrained prompting by letting you define, save, and reuse structured prompt frameworks.** You can combine constraints with frameworks like [SPECS](/prompt-engineering/specs-framework), [RTF](/prompt-engineering/rtf-framework), or Google\'s Prompting Guide and send them to several models at once.',
            'In PromptQuorum, you can:',
          ],
          items: [
            'Encode structural and content constraints directly into frameworks so every run follows the same rules.',
            'Test constrained prompts across multiple models side by side to see which provider adheres best to your specifications. For example, dispatch the same JSON extraction constraint to GPT-4o, Claude Sonnet 4.6, and Gemini 3.1 Pro simultaneously — then compare which model most reliably respects your schema, word limits, and content restrictions.',
            'Save constrained prompts as templates for recurring tasks, ensuring your team always uses the same validated patterns.',
            'Identify which model works best for your use case — then route production traffic to the winner.',
          ],
          callouts: [
            { type: 'practice', label: 'Best Practice', text: 'Always test your constrained prompt against at least 2 models before deploying. Different models (GPT-4o vs Claude vs Gemini) interpret constraints differently. A 95% adherence rate on GPT-4o may drop to 80% on Gemini.' },
          ],
        },

        howToStart: {
          title: 'How to Use Constrained Prompting',
          numberedItems: [
            '**Identify output constraints relevant to your task: length, format, vocabulary, scope, safety.** Example: \'Response must be ≤100 words, JSON format, use only technical terms, cover only recent developments (2024+), must not mention competitors.\'',
            '**State constraints explicitly using \'must,\' \'must not,\' and \'only\' language.** Avoid soft directives like \'try to\' or \'aim to.\' Hard constraints are more reliable.',
            '**For format constraints, provide an example of the exact format you want.** Show the model: \'Return as JSON: { \"finding\": \"...\", \"confidence\": \"high|medium|low\", \"sources\": [...] }\'',
            '**For content constraints, list what to include and exclude explicitly.** Example: \'Include: technical details, performance metrics. Exclude: marketing language, competitor names, pricing.\'',
            '**Test constrained prompts on edge cases to ensure the model respects all constraints.** Generate 10 outputs. Check: Do all respect the length limit? Do all use the correct format? Are there any violations?',
          ],
          callouts: [
            { type: 'insight', label: 'Insight', text: 'GPT-4o and Claude Sonnet 4.6 follow hard format constraints (JSON, tables, word limits) at ~95% adherence on well-formed prompts. Gemini 3.1 Pro scores similarly. All three support API-level Structured Outputs for near 100% JSON schema compliance. For production use, combine API-level enforcement with prompt-level constraints for maximum reliability.' },
          ],
        },
        apiLevelEnforcement: {
          id: 'api-level-constraint-enforcement',
          title: 'API-Level Constraint Enforcement (Beyond Prompt Text)',
          content: [
            '**In 2026, all major AI providers offer API-level constraint enforcement — a more reliable alternative to prompt-text constraints.** Instead of hoping the model respects your rules, you enforce constraints at the token-generation level via API parameters. This guarantees outputs match your schema.',
            'Major providers now support structured outputs:',
            '**OpenAI Structured Outputs (GPT-4o):** Set `response_format: { type: "json_schema", json_schema: {...} }` at the API level. Guarantees valid JSON matching your exact schema — ~100% reliability. The model cannot produce invalid JSON.',
            '**Anthropic Structured Outputs (Claude Sonnet 4.6):** Use the `output_config.format` parameter to enforce JSON schema server-side. All outputs strictly match the schema you define.',
            '**Google Gemini 3.1 Pro:** Set `response_mime_type: "application/json"` with `response_schema` to enforce structured output. Native JSON constraint with high reliability.',
            '**Key advantage:** API-level enforcement operates at the token-generation level, not as a prompt instruction. Models cannot violate the constraint — it is enforced by the API before output is returned.',
            'Use this strategy: **Combine API-level enforcement (for format) with prompt-level constraints (for content).** Example: Use API-level JSON schema to guarantee valid output structure, then use prompts to constrain content ("only include data from the provided context").',
          ],
          callouts: [
            { type: 'insight', label: 'Best Practice', text: 'When available, prefer API-level constraint enforcement over prompt-text constraints. API-level is more reliable (near 100% adherence) and ensures schema correctness. Reserve prompt-level constraints for nuanced content, tone, and safety rules that the API level does not handle.' },
          ],
        },
        regionalContext: {
          id: 'constrained-prompting-in-regulated-environments',
          title: 'Constrained Prompting in Regulated Environments',
          content: [
            '**In regulated industries, constrained prompting is not optional — it is a compliance requirement.** Healthcare providers, financial institutions, and law firms depend on constraints to prevent outputs that violate HIPAA, GDPR, SOX, or other regulatory frameworks.',
            'Regional and industry considerations:',
          ],
          items: [
            '**EU (GDPR):** Safety constraints that exclude personal data, financial information, and medical history are mandatory. Prompts must explicitly state: "Do not include personal data, financial details, or health information."',
            '**US (SOX/HIPAA):** Regulated firms in finance and healthcare require audit trails and signed agreements. Constrained prompts lock output format to make audit logs complete and verifiable.',
            '**Japan (APPI):** Data residency and consent constraints are critical. Prompts must specify: "Process only Japanese-resident user data" and "Do not transfer data outside Japan."',
            '**China (Data Security Law):** Constrained output to structured tables (no free-form text) and format restrictions ensure outputs stay within approved data handling pathways.',
          ],
          callouts: [
            { type: 'warning', label: 'Compliance', text: 'In regulated industries, always pair constrained prompting with documentation. Write down every constraint, test all constraint combinations, and log results. Regulators expect to see proof that constraints were validated.' },
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes',
          mistakes: [
            {
              mistake: 'Using soft constraint language ("try to", "aim for")',
              problem: 'Models treat soft directives as suggestions, not rules. "Try to keep it under 200 words" produces outputs ranging from 80 to 400 words.',
              fix: 'Use absolute language: "Response must be 150–200 words. No exceptions."',
            },
            {
              mistake: 'Stacking too many constraints without priority order',
              problem: 'When 6+ constraints conflict, the model silently drops lower-priority ones without warning.',
              fix: 'List constraints in priority order. Add: "If constraints conflict, prioritize in this order: (1) safety, (2) format, (3) length."',
            },
            {
              mistake: 'Not providing a format example for JSON/structured output',
              problem: '"Return as JSON" produces inconsistent key names and nesting across models and runs.',
              fix: 'Show the exact schema inline: "Return JSON exactly matching this structure: { \\"finding\\": \\"...\\" }"',
            },
            {
              mistake: 'Applying structural constraints to creative generation tasks',
              problem: 'Strict structure on open-ended tasks produces formulaic, low-quality creative output.',
              fix: 'Reserve structural constraints for operational tasks. Use tone/style constraints only for creative tasks.',
            },
            {
              mistake: 'Not testing constraints across models',
              problem: 'GPT-4o, Claude Sonnet 4.6, and Gemini 3.1 Pro all interpret the same constraint differently. A prompt that works on one may fail on another.',
              fix: 'Test your constrained prompt on at least 2 models before deploying. Use [PromptQuorum](https://www.promptquorum.com/) to run parallel comparisons.',
            },
            {
              mistake: 'Not providing an example alongside the constraint',
              problem: '"Return valid JSON" without a schema example produces inconsistent keys and structures across models and runs. Models frequently guess at field names.',
              fix: 'Always show the exact schema or format inline: "Return JSON exactly matching this structure: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\"  }"',
            },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — Foundations before applying constraints.',
            '[Structured Output: JSON Mode](/prompt-engineering/structured-output-json-mode) — API-level enforcement of output schemas.',
            '[RTF Framework](/prompt-engineering/rtf-framework) — Role-Task-Format: a structured framework that pairs naturally with constrained prompting.',
            '[Few-Shot Prompting](/prompt-engineering/few-shot-prompting) — Providing examples is a form of implicit constraint.',
            '[How to Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — Validate constrained prompts on multiple LLMs.',
            '[Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — Safety constraints defend against adversarial input.',
          ],
        },
        faqSection: {
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What is constrained prompting?', a: 'Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable and reusable. Instead of "write a summary," you specify: 150 words, JSON format, no competitor names, must include a call-to-action.' },
            { q: 'What are the five types of constraints?', a: 'The five main constraint types are: (1) Structural — required headings, tables, JSON with specific keys. (2) Content — required sections, banned topics. (3) Style — tone, reading level, terminology. (4) Length — word or character limits. (5) Safety — avoid medical advice, personal data, legal conclusions.' },
            { q: 'How do you force a model to output valid JSON?', a: 'Provide the exact JSON schema in the prompt: "Return JSON exactly matching: { \\"finding\\": \\"...\\" }". Combine this with "Output only JSON, no other text." GPT-4o also supports a JSON mode via API that enforces valid JSON at the API level.' },
            { q: 'Does constrained prompting work on GPT-4o, Claude, and Gemini?', a: 'Yes — all three support constrained prompting. GPT-4o and Claude Opus 4.7 follow hard format constraints (JSON, tables, word limits) at approximately 95% adherence on well-formed prompts. Gemini 3.1 Pro scores similarly but may interpret ambiguous constraints differently. Always test across models.' },
            { q: 'What is the difference between constrained prompting and few-shot prompting?', a: 'Constrained prompting adds explicit rules in text form (format, length, content restrictions). Few-shot prompting provides worked examples that implicitly show the model what to produce. The two work well together: use a few-shot example to demonstrate the output pattern, then add constraints for stricter enforcement.' },
            { q: 'When should you NOT use constrained prompting?', a: 'Avoid structural constraints on open-ended creative tasks (brainstorming, ideation, fiction). Over-constraining creative prompts produces formulaic, low-quality output. Use tone and style constraints for creative tasks but allow structural freedom.' },
            { q: 'How many constraints can you stack in one prompt?', a: 'Practically, 3–5 constraints work well. Beyond 5–6, models start silently dropping lower-priority constraints without warning. If you need more than 5, list them in priority order and state explicitly: "If constraints conflict, apply them in this order: (1) safety, (2) format, (3) length."' },
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            '**OpenAI. (2026).** "Structured Outputs — JSON Mode and Responses API." https://platform.openai.com/docs/guides/structured-outputs — Server-side JSON schema enforcement for GPT-4o with 100% schema adherence.',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude — API-level constraint enforcement for Claude Sonnet 4.6 and Opus 4.7.',
            '**Google. (2026).** "Gemini API: Controlled Generation with response_schema." https://ai.google.dev/gemini-api/docs/controlled-generation — Native JSON mode and structured output enforcement for Gemini 3.1 Pro.',
            '**White et al. (2023).** "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." https://arxiv.org/abs/2302.11382 — Academic taxonomy of prompt patterns including constraint-based prompting techniques.',
            '**Zhou et al. (2022).** "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910 — Research on automated constraint optimization and prompt refinement.',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Techniken',
      title: 'Constrained Prompting: Strukturierte Prompts für zuverlässige Ausgaben',
      intro: '**Constrained Prompting ist eine Technik, bei der Sie dem Modell nicht nur sagen, was es tun soll, sondern auch, was es unbedingt tun und nicht tun muss – damit die Ausgaben innerhalb klar definierter Grenzen bleiben.** Dies ist essentiell, wenn Sie zuverlässige Formate, sichere Inhalte oder strikte Einhaltung interner Richtlinien benötigen.',
      leadAnswerBlock: '**Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar und wiederverwendbar zu machen.** Statt „schreibe eine Zusammenfassung" geben Sie vor: 150 Wörter, JSON-Format, keine Konkurrenten-Namen, muss einen Call-to-Action enthalten.',
      publishDate: '2026-03-26',
      readTime: '6 Min. Lesezeit',
      seoTitle: 'Constrained Prompting: KI-Ausgaben strukturieren',
      metaDescription: 'Constrained Prompting für strukturierte KI-Ausgaben. Wie Sie Regeln, Formate und Inhaltsrichtlinien direkt im Prompt definieren. Für GPT-4o, Claude Sonnet 4.6 und Gemini 3.1 Pro.',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-05-03',
      lastFactChecked: '2026-05-03',
      audience: 'Entwickler, Produktmanager und Teams, die KI-betriebene Workflows entwickeln',
      next_refresh_due: '2026-09-26',
      aboutTopics: ['Constrained Prompting', 'Strukturierte Ausgabe', 'Prompt Engineering'],
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Schnelle Fakten', anchor: '#quick-facts' },
        { label: 'Was ist Constrained Prompting?', anchor: '#what-is-constrained-prompting' },
        { label: 'Warum ist Constrained Prompting wichtig?', anchor: '#why-does-constrained-prompting-matter' },
        { label: 'Arten von Constraints, die Sie nutzen können', anchor: '#which-constraint-types-can-you-use' },
        { label: 'Beispiel: Ungeconstrainteter vs. Geconstrainteter Prompt', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
        { label: 'Wann Sie Constrained Prompting einsetzen sollten', anchor: '#when-should-you-use-constrained-prompting' },
        { label: 'Wie PromptQuorum Constrained Prompting unterstützt', anchor: '#how-does-promptquorum-support-constrained-prompting' },
        { label: 'Wie Sie mit Constrained Prompting beginnen', anchor: '#how-to-use-constrained-prompting' },
        { label: 'API-Level Constraint-Durchsetzung', anchor: '#api-level-constraint-enforcement' },
        { label: 'Constrained Prompting in regulierten Umgebungen', anchor: '#constrained-prompting-in-regulated-environments' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
        { label: 'Häufig gestellte Fragen', anchor: '#frequently-asked-questions' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/de/prompt-engineering/constrained-prompting',
        inLanguage: 'de',
        headline: 'Constrained Prompting: Strukturierte Prompts für zuverlässige Ausgaben',
        description: 'Constrained Prompting für strukturierte KI-Ausgaben in Prompt Engineering. Wie Sie Regeln, Formate und Inhaltsrichtlinien direkt im Prompt definieren, um zuverlässige und sichere Outputs zu erreichen.',
        datePublished: '2026-03-26',
        dateModified: '2026-05-03',
        keywords: ['Constrained Prompting', 'Prompt Engineering', 'strukturierte Prompts', 'PromptQuorum', 'API-Level Durchsetzung'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Constrained Prompting' },
          { '@type': 'Thing', name: 'Strukturierte Ausgabe' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
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
          { '@type': 'Question', name: 'Was ist Constrained Prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar und wiederverwendbar zu machen. Statt „schreibe eine Zusammenfassung" geben Sie vor: 150 Wörter, JSON-Format, keine Konkurrenten-Namen, muss einen Call-to-Action enthalten.' } },
          { '@type': 'Question', name: 'Was sind die fünf Constraint-Typen?', acceptedAnswer: { '@type': 'Answer', text: 'Die fünf Haupt-Constraint-Typen sind: (1) Strukturell – erforderliche Überschriften, Tabellen, JSON mit spezifischen Schlüsseln. (2) Inhalt – erforderliche Abschnitte, verbotene Themen. (3) Stil – Ton, Lesenlevel, Terminologie. (4) Länge – Wort- oder Zeichenlimits. (5) Sicherheit – keine medizinischen Ratschläge, personenbezogenen Daten oder rechtlichen Schlussfolgerungen.' } },
          { '@type': 'Question', name: 'Wie zwingt man ein Modell, gültiges JSON auszugeben?', acceptedAnswer: { '@type': 'Answer', text: 'Geben Sie das genaue JSON-Schema im Prompt vor: „Geben Sie JSON genau in diesem Format zurück: { \\"finding\\": \\"...\\" }". Kombinieren Sie dies mit „Geben Sie nur JSON aus, keinen anderen Text." GPT-4o unterstützt auch einen JSON-Modus über die API, der gültiges JSON auf API-Ebene erzwingt.' } },
          { '@type': 'Question', name: 'Funktioniert Constrained Prompting auf GPT-4o, Claude und Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Ja – alle drei unterstützen Constrained Prompting. GPT-4o und Claude Sonnet 4.6 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit etwa 95% Adhärenzrate bei gut formulierten Prompts. Alle drei bieten auch API-Level Constraint-Durchsetzung via Structured Outputs, die gültiges JSON-Schema auf Modell-Ebene garantiert. Gemini 3.1 Pro schneidet ähnlich ab, kann aber mehrdeutige Constraints unterschiedlich interpretieren. Testen Sie immer über Modelle hinweg.' } },
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen Constrained Prompting und Few-Shot Prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Constrained Prompting fügt explizite Regeln in Textform hinzu (Format, Länge, Inhaltsrestriktionen). Few-Shot Prompting stellt ausgearbeitete Beispiele bereit, die implizit zeigen, was produziert werden soll. Die beiden funktionieren gut zusammen: nutzen Sie ein Few-Shot-Beispiel, um das Ausgabemuster zu zeigen, dann fügen Sie Constraints für strengere Durchsetzung hinzu.' } },
          { '@type': 'Question', name: 'Wann sollten Sie Constrained Prompting NICHT verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Vermeiden Sie strukturelle Constraints bei offenen kreativen Aufgaben (Brainstorming, Ideation, Fiction). Über-Constraining kreativer Prompts erzeugt formularhafte, minderwertige Ausgaben. Verwenden Sie Ton- und Stil-Constraints für kreative Aufgaben, aber erlauben Sie strukturelle Freiheit.' } },
          { '@type': 'Question', name: 'Wie viele Constraints können Sie in einem Prompt stapeln?', acceptedAnswer: { '@type': 'Answer', text: 'Praktisch funktionieren 3–5 Constraints gut. Beyond 5–6 beginnen Modelle, niedrig priorisierte Constraints stillschweigend zu ignorieren. Wenn Sie mehr als 5 benötigen, listen Sie sie in Prioritätsordnung auf und geben Sie explizit an: „Falls Constraints konfligieren, wenden Sie sie in dieser Reihenfolge an: (1) Sicherheit, (2) Format, (3) Länge."' } },
          { '@type': 'Question', name: 'Muss ich bei der Verwendung von Constrained Prompting die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, die DSGVO ist relevant, wenn Constrained Prompting bei der Verarbeitung personenbezogener Daten eingesetzt wird. Gemäß DSGVO Artikel 28 müssen Sie Datenverarbeitungsvereinbarungen (DPA) mit Ihrem KI-Anbieter abschließen. Für Unternehmen im DACH-Raum empfehlen die BSI-Grundschutz-Kataloge, lokale oder private KI-Modelle für die Verarbeitung sensibler Daten zu verwenden. Stellen Sie sicher, dass Ihre Prompts und deren Ausgaben keine unkontrollierten personenbezogenen Daten über externe APIs enthalten.' } },
          { '@type': 'Question', name: 'Ist Constrained Prompting für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Absolut. Constrained Prompting ist besonders wertvoll für deutsche Mittelstandsunternehmen, da es standardisierte, wiederverwendbare Prompt-Vorlagen ermöglicht – ideal für ressourcenbegrenzte Teams. Mit PromptQuorum können Sie Constraints über mehrere Modelle hinweg testen, um das beste Preis-Leistungs-Verhältnis für Ihr Unternehmen zu finden. Mittelstandsunternehmen in regulierten Branchen (Finanzen, Versicherung, Gesundheit) profitieren besonders von den Sicherheits- und Compliance-Constraints.' } },
          { '@type': 'Question', name: 'Bietet Constrained Prompting Schutz vor Injection-Angriffen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, Constraints können Injection-Angriffe reduzieren, indem sie die Ausgabe auf ein vordefiniertes Format beschränken. Wenn Sie beispielsweise fordern, dass die Ausgabe JSON sein muss, können Injection-Versuche, die Befehle eingeben, nicht in der erwarteten JSON-Struktur erfolgen. Aber Constraints sind kein vollständiger Sicherheitsersatz – kombinieren Sie sie immer mit Input-Validierung und Promptinjektion-Abwehr auf Systemebene.' } },
          { '@type': 'Question', name: 'Funktioniert Constrained Prompting mit lokalen Modellen wie Llama?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Lokale Modelle wie Llama 3.2, Mistral und Qwen unterstützen Constrained Prompting über Prompt-Level-Constraints genauso wie Proprietary-Modelle. Die Compliance-Raten können unterschiedlich sein – kleinere Modelle (< 13B) haben niedrigere Adhärenzsätze bei komplexen Constraints. API-Level Structured Outputs sind bei lokalen Modellen nicht immer verfügbar – verwenden Sie also Prompt-Level-Constraints als primäre Strategie.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Wie Sie mit Constrained Prompting beginnen',
        inLanguage: 'de',
        description: 'Ein 5-Schritte-Leitfaden zur Anwendung von Ausgabe-Constraints in Prompts für GPT-4o, Claude Sonnet 4.6 und Gemini 3.1 Pro.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Ausgabe-Constraints identifizieren', text: 'Identifizieren Sie für Ihre Aufgabe relevante Constraints: Länge, Format, Vokabular, Umfang und Sicherheit.' },
          { '@type': 'HowToStep', position: 2, name: 'Harte Constraint-Sprache verwenden', text: 'Formulieren Sie Constraints mit „muss", „darf nicht" und „nur" – niemals „versuche" oder „strebe an".' },
          { '@type': 'HowToStep', position: 3, name: 'Ein Format-Beispiel bereitstellen', text: 'Für Format-Constraints zeigen Sie das genaue Schema inline: JSON-Schlüssel, Markdown-Struktur oder Feldnamen.' },
          { '@type': 'HowToStep', position: 4, name: 'Inhalts-Einschlüsse und Ausschlüsse auflisten', text: 'Explizit auflisten, was einzubeziehen und auszuschließen ist nach Thema, Terminologie und Datentyp.' },
          { '@type': 'HowToStep', position: 5, name: 'Auf Grenzfällen testen', text: 'Generieren Sie 10 Ausgaben. Prüfen Sie, dass alle das Längenlimit, Format und Inhalts-Grenzen respektieren.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '**Constrained Prompting** fügt explizite Regeln (Struktur, Inhalt, Länge, Sicherheit) zu einem Prompt hinzu, damit KI-Ausgaben über mehrere Durchläufe hinweg vorhersehbar bleiben.',
            '5 Constraint-Typen: strukturell, Inhalt, Stil, Länge und Sicherheit — kombinieren Sie sie für maximale Ausgabenkontrolle.',
            'Verwenden Sie zwingende Sprache: **„muss", „darf nicht", „nur".** Weiche Direktiven wie „versuche" werden häufig ignoriert.',
            'Format-Constraints funktionieren am besten mit einem Beispiel: zeigen Sie dem Modell das genaue JSON-Schema oder die Markdown-Struktur, die Sie benötigen.',
            'GPT-4o, Claude Sonnet 4.6 und Gemini 3.1 Pro unterstützen alle Constrained Prompting — sowie API-Ebenen-Durchsetzung via Structured Outputs — reagieren aber unterschiedlich auf Prompt-Level-Constraints. Testen Sie über Modelle hinweg.',
            'Geconstraintetete Prompts sparen Überprüfungszeit: Ausgaben, die bereits Ihre erforderliche Struktur erfüllen, benötigen weniger menschliche Korrektur.',
            'Verwenden Sie [PromptQuorum](https://www.promptquorum.com/?lang=de) um geconstraintetete Prompts über mehrere Modelle hinweg nebeneinander zu testen und Constraint-Einhaltung zu vergleichen.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Schnelle Fakten',
          items: [
            '**5 Constraint-Typen:** Strukturell, Inhalt, Stil, Länge, Sicherheit',
            '**Modell-Adhäsion:** GPT-4o und Claude Sonnet 4.6 befolgen strikte Constraints mit ~95% auf gut formulierten Prompts',
            '**Optimales Stapeln:** 3–5 Constraints funktionieren gut; jenseits von 5–6 lassen Modelle niedrig priorisierte Constraints stillschweigend fallen',
            '**JSON-Output-Konsistenz:** Ohne Schema-Beispiel erzeugen Modelle über Durchläufe hinweg inkonsistente Schlüsselnamen',
            '**Test-Methodik:** Generieren Sie 10 Ausgaben, um zu überprüfen, ob alle Länge, Format und Inhalts-Grenzen respektieren',
            '**Setup-Zeit:** Erste Constraint-Validierung benötigt 10–15 Minuten; wiederverwendbare Vorlagen sparen 30+ Minuten pro Aufgabe',
          ],
        },
        whatIsConstrained: {
          title: 'Was ist Constrained Prompting?',
          content: [
            '**Constrained Prompting bedeutet, explizite Regeln über Inhalt, Struktur, Länge und Verhalten direkt im Prompt zu definieren.** Statt einer lockeren Anweisung wie „fasse das zusammen" legen Sie zulässige Formate, erforderliche Felder, verbotene Themen und Validierungsregeln fest.',
            'Constraints können Ausgabeschemas (wie JSON mit festen Schlüsseln), Wortlimits, Tonanforderungen und Sicherheitsrestriktionen wie „stelle keine medizinischen Diagnosen" enthalten. Indem Sie diese Regeln als Teil des Prompts verankern, reduzieren Sie Mehrdeutigkeit und vereinfachen die Integration des Modells in produktive Arbeitsabläufe.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar zu machen.' },
            { type: 'in-plain-terms', text: 'Statt KI zu sagen „schreibe eine Zusammenfassung", sagen Sie: maximal 150 Wörter, nutze Aufzählungspunkte, keine Konkurrenten erwähnen, immer einen Call-to-Action einbeziehen. Je spezifischer die Regeln, desto konsistenter die Ausgabe.' },
          ],
          callouts: [
            { type: 'note', label: 'Definition', text: 'Constrained Prompting ist keine separate API-Funktion – es ist eine Prompting-Technik. Sie wenden Constraints in Klartext innerhalb des Prompts selbst an. Keine spezielle Syntax oder API-Flags erforderlich.' },
          ],
        },
        whyItMatters: {
          title: 'Warum ist Constrained Prompting wichtig?',
          content: [
            '**Constrained Prompting ist immer dann wichtig, wenn die Modellausgaben in Menschen, Prozesse oder andere Systeme fließen, die auf vorhersehbares Verhalten angewiesen sind.** Ohne Constraints können identische Prompts unterschiedliche Strukturen oder Detailmengen über mehrere Durchläufe hinweg produzieren.',
            'Klare Constraints helfen Ihnen dabei:',
          ],
          items: [
            'Unerwartete Inhalte oder Formatierung zu verhindern, die nachgelagerte Tools beschädigen.',
            'Brand-, Legal- oder Sicherheitsrichtlinien direkt auf Prompt-Ebene durchzusetzen.',
            'Überprüfungszeiten zu verkürzen, da Ausgaben bereits Ihre erforderliche Struktur erfüllen.',
          ],
        },
        typesOfConstraints: {
          title: 'Arten von Constraints, die Sie nutzen können',
          content: [
            '**Sie können Prompts entlang mehrerer Dimensionen einschränken: Struktur, Inhalt, Stil, Länge und Sicherheit.** Je präziser Sie sind, desto konsistenter werden die Ausgaben.',
            'Häufige Constraint-Typen sind:',
          ],
          items: [
            'Strukturelle Constraints: Erforderliche Überschriften, Aufzählungen, Tabellen oder JSON mit spezifischen Schlüsseln.',
            'Inhalts-Constraints: Erforderliche Abschnitte (wie „Risiken" oder „Nächste Schritte") und verbotene Themen oder Ausdrücke.',
            'Stil-Constraints: Ton („formell", „neutral", „gesprächig"), Lesenlevel oder Terminologie-Regeln.',
            'Längen-Constraints: Wort- oder Zeichenlimits oder eine feste Anzahl von Aufzählungen oder Abschnitten.',
            'Sicherheits-Constraints: Anweisungen zur Vermeidung von personenbezogenen Daten, medizinischen Ratschlägen, rechtlichen Schlussfolgerungen oder nicht zulässigen Inhaltskategorien.',
          ],
          columns: ['Constraint-Typ', 'Beispiel', 'Wann zu verwenden'],
          rows: [
            { 'Constraint-Typ': 'Strukturell', 'Beispiel': '"Geben Sie als JSON zurück: {key: value}"', 'Wann zu verwenden': 'API-Integrationen, Datenpipelines' },
            { 'Constraint-Typ': 'Inhalt', 'Beispiel': '"Muss Risiken-Abschnitt enthalten; darf keine Konkurrenten erwähnen"', 'Wann zu verwenden': 'Berichte, Kundenkommunikation' },
            { 'Constraint-Typ': 'Stil', 'Beispiel': '"Formeller Ton, keine Kontraktionen, Lesenlevel Klasse 8"', 'Wann zu verwenden': 'Brand-kontrollierte Ausgaben' },
            { 'Constraint-Typ': 'Länge', 'Beispiel': '"≤150 Wörter, genau 5 Aufzählungspunkte"', 'Wann zu verwenden': 'Template-Inhalt, Zusammenfassungen' },
            { 'Constraint-Typ': 'Sicherheit', 'Beispiel': '"Darf keine medizinischen Diagnosen oder Rechtsberatung geben"', 'Wann zu verwenden': 'Regulierte Branchen, öffentlich zugänglich' },
          ],
          callouts: [
            { type: 'tip', label: 'Pro Tipp', text: 'Für JSON-Ausgabe geben Sie immer die genauen Schlüsselnamen und Werttypen im Prompt an. „Geben Sie JSON zurück" ohne Schema erzeugt über Modelle und Durchläufe hinweg inkonsistente Schlüsselnamen.' },
          ],
        },
        example: {
          title: 'Beispiel: Ungeconstrainteter vs. Geconstrainteter Prompt',
          content: [
            '**Die Auswirkung von Constrained Prompting wird am deutlichsten, wenn Sie einen ungeconstrainteten Prompt mit einem geconstrainteten für die gleiche Aufgabe vergleichen.** Hier entwirft eine Zusammenfassung für ein B2B-Produkt.',
            '**Ungeconstrainteter Prompt** (erzeugt variable Länge, Struktur und Ton bei jedem Durchlauf):',
            '"Schreibe eine Zusammenfassung unserer neuen Analytics-Funktion."',
            '**Geconstrainteter Prompt** (definiert Länge, Struktur, Stil und erforderlichen Inhalt):',
            '"Du bist ein B2B-Produktmarketer. Aufgabe: Schreibe eine Zusammenfassung unserer neuen Analytics-Funktion für eine Produktseite. Constraints: Länge: 120–160 Wörter. Struktur: 1 kurzer Einleitungsparagraph, dann 3 Aufzählungspunkte, dann 1 Schlusssatz. Stil: Klarer, neutral-professioneller Ton. Keine Hype-Wörter wie \'revolutionär\' oder \'spielverändernd\'. Inhalt: Nennen Sie den Hauptnutzen (schnellere Einblicke in das Kundenverhalten) und ein konkretes Anwendungsbeispiel. Ausgabeformat: Gültiges Markdown mit Aufzählungspunkten mit `-`."',
            'Die geconstraintetete Version definiert Länge, Struktur, Stil und erforderlichen Inhalt. Die Ausgabe wird vorhersehbar und wiederverwendbar – geeignet für Templating über Team-Workflows hinweg.',
          ],
          callouts: [
            { type: 'practice', label: 'Regel', text: 'Jede Constraint, die Sie hinzufügen, reduziert die Varianz in der Modellausgabe. Beginnen Sie mit 1–2 Constraints, testen Sie, dann fügen Sie mehr hinzu. Das Stapeln von 5+ Constraints auf einmal erhöht das Risiko, dass das Modell einen stillschweigend verletzt.' },
          ],
        },
        whenToUse: {
          title: 'Wann Sie Constrained Prompting einsetzen sollten',
          content: [
            '**Sie sollten Constrained Prompting immer dann einsetzen, wenn Korrektheit und Konsistenz wichtiger sind als maximale Kreativität.** Dies gilt besonders in operativen, analytischen und regulierten Kontexten.',
            'Typische Anwendungsfälle sind:',
          ],
          items: [
            'Generieren von JSON- oder Tabellenausgaben, die andere Systeme analysieren werden.',
            'Erstellen von standardisierten Berichten, Zusammenfassungen oder Statusaktualisierungen über Teams hinweg.',
            'Verfassen von Kundenkommunikation, die Brand- oder Rechtsrichtlinien befolgen muss.',
            'Extrahieren von strukturierten Daten (Probleme, Entitäten, Metriken) aus unstrukturiertem Text.',
          ],
          callouts: [
            { type: 'warning', label: 'Vermeiden', text: 'Wenden Sie keine Längen- oder strukturellen Constraints auf offene kreative Aufgaben an (Brainstorming, Ideation). Über-Constraining kreativer Prompts erzeugt generische, Kästchen-abhakende Ausgaben statt wirklich nützlicher Ideen.' },
          ],
        },
        howPQSupports: {
          title: 'Wie PromptQuorum Constrained Prompting unterstützt',
          content: [
            '**PromptQuorum ist ein Multi-Model-KI-Dispatch-Tool, das speziell für die Zusammenarbeit mit Constrained Prompting konzipiert ist – indem Sie strukturierte Prompt-Frameworks definieren, speichern und wiederverwenden können.** Sie können Constraints mit Frameworks wie SPECS, RTF oder Googles Prompting Guide verbinden und sie an mehrere Modelle gleichzeitig versenden.',
            'In PromptQuorum können Sie:',
          ],
          items: [
            'Strukturelle und Inhalts-Constraints direkt in Frameworks kodieren, sodass jeder Durchlauf den gleichen Regeln folgt.',
            'Geconstraintetete Prompts über mehrere Modelle hinweg nebeneinander testen, um zu sehen, welcher Anbieter Ihre Spezifikationen am besten einhält.',
            'Geconstraintetete Prompts als Vorlagen für wiederkehrende Aufgaben speichern, um sicherzustellen, dass Ihr Team immer die gleichen validierten Muster nutzt.',
          ],
        },
        howToStart: {
          title: 'Wie Sie mit Constrained Prompting beginnen',
          numberedItems: [
            '**Identifizieren Sie für Ihre Aufgabe relevante Ausgabe-Constraints: Länge, Format, Vokabular, Umfang, Sicherheit.** Beispiel: „Antwort muss ≤100 Wörter sein, JSON-Format, nur technische Begriffe verwenden, nur aktuelle Entwicklungen abdecken (2024+), darf keine Konkurrenten nennen."',
            '**Formulieren Sie Constraints explizit mit Sprache wie „muss", „darf nicht" und „nur".** Vermeiden Sie weiche Direktiven wie „versuche" oder „strebe an". Harte Constraints sind zuverlässiger.',
            '**Für Format-Constraints geben Sie ein Beispiel des genauen Formats vor, das Sie möchten.** Zeigen Sie dem Modell: „Geben Sie als JSON zurück: { \\"finding\\": \\"..\\", \\"confidence\\": \\"high|medium|low\\", \\"sources\\": [...] }"',
            '**Für Inhalts-Constraints listen Sie explizit auf, was einzubeziehen und auszuschließen ist.** Beispiel: „Einzubeziehen: technische Details, Performance-Metriken. Auszuschließen: Marketing-Sprache, Konkurrenten-Namen, Preisgestaltung."',
            '**Testen Sie geconstraintetete Prompts auf Grenzfälle, um sicherzustellen, dass das Modell alle Constraints respektiert.** Generieren Sie 10 Ausgaben. Prüfen Sie: Respektieren alle das Längenlimit? Nutzen alle das richtige Format? Gibt es Verstöße?',
          ],
          callouts: [
            { type: 'insight', label: 'Einblick', text: 'GPT-4o und Claude Sonnet 4.6 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit ~95% Adhärenzrate bei gut formulierten Prompts. Alle drei bieten auch API-Level Constraint-Durchsetzung via Structured Outputs für nahezu 100% JSON-Schema-Compliance. Gemini 3.1 Pro schneidet ähnlich ab. Alle drei verschlechtern sich, wenn Constraints vage oder widersprüchlich sind.' },
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler',
          mistakes: [
            {
              mistake: 'Verwendung von weicher Constraint-Sprache („versuche", „strebe an")',
              problem: 'Modelle behandeln weiche Direktiven als Vorschläge, nicht Regeln. „Versuche, es unter 200 Wörtern zu halten" erzeugt Ausgaben zwischen 80 und 400 Wörtern.',
              fix: 'Verwenden Sie absolute Sprache: „Antwort muss 150–200 Wörter sein. Keine Ausnahmen."',
            },
            {
              mistake: 'Zu viele Constraints ohne Prioritätsordnung stapeln',
              problem: 'Wenn 6+ Constraints konfligieren, lässt das Modell niedrig priorisierte stillschweigend fallen, ohne Warnung.',
              fix: 'Listet Constraints in Prioritätsordnung auf. Fügen Sie hinzu: „Falls Constraints konfligieren, prioritäre sie in dieser Reihenfolge: (1) Sicherheit, (2) Format, (3) Länge."',
            },
            {
              mistake: 'Kein Format-Beispiel für JSON/strukturierte Ausgabe bereitstellen',
              problem: '"Geben Sie JSON zurück" erzeugt über Modelle und Durchläufe hinweg inkonsistente Schlüsselnamen.',
              fix: 'Zeigen Sie das genaue Schema inline: „Geben Sie JSON genau in dieser Struktur zurück: { \\"finding\\": \\"...\\" }"',
            },
            {
              mistake: 'Strukturelle Constraints auf kreative Generierungsaufgaben anwenden',
              problem: 'Strikte Struktur bei offenen Aufgaben erzeugt formularhafte, minderwertige kreative Ausgaben.',
              fix: 'Reservieren Sie strukturelle Constraints für operative Aufgaben. Nutzen Sie nur Ton-/Stil-Constraints für kreative Aufgaben.',
            },
            {
              mistake: 'Constraints nicht über Modelle hinweg testen',
              problem: 'GPT-4o, Claude Sonnet 4.6 und Gemini 3.1 Pro interpretieren die gleiche Constraint unterschiedlich. Ein Prompt, der auf einem funktioniert, kann auf einem anderen fehlschlagen.',
              fix: 'Testen Sie Ihren geconstrainteten Prompt auf mindestens 2 Modellen vor dem Deployment. Nutzen Sie [PromptQuorum](https://www.promptquorum.com/?lang=de) für parallele Vergleiche.',
            },
            {
              mistake: 'Kein Beispiel neben der Constraint bereitstellen',
              problem: '„Geben Sie gültiges JSON zurück" ohne Schema-Beispiel erzeugt inkonsistente Schlüssel und Strukturen über Modelle und Durchläufe hinweg. Modelle raten bei Feldnamen.',
              fix: 'Zeigen Sie immer das genaue Schema inline: „Geben Sie JSON genau in dieser Struktur zurück: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\" }"',
            },
          ],
        },
        apiLevelEnforcement: {
          id: 'api-level-constraint-enforcement',
          title: 'API-Level Constraint-Durchsetzung (Über Prompt-Text hinaus)',
          content: [
            '**2026 bieten alle großen KI-Anbieter API-Level Constraint-Durchsetzung — eine zuverlässigere Alternative zu Prompt-Text-Constraints.** Statt zu hoffen, dass das Modell Ihre Regeln respektiert, setzen Sie Constraints auf der Token-Generierungsebene durch API-Parameter durch. Dies garantiert, dass Ausgaben Ihrem Schema entsprechen.',
            'Große Anbieter unterstützen jetzt strukturierte Ausgaben:',
            '**OpenAI Structured Outputs (GPT-4o):** Setzen Sie `response_format: { type: "json_schema", json_schema: {...} }` auf API-Ebene. Garantiert gültiges JSON, das Ihrem genauen Schema entspricht — ~100% Zuverlässigkeit. Das Modell kann kein ungültiges JSON produzieren.',
            '**Anthropic Structured Outputs (Claude Sonnet 4.6):** Verwenden Sie den `output_config.format`-Parameter, um JSON-Schema Server-seitig zu erzwingen. Alle Ausgaben entsprechen strikt dem von Ihnen definierten Schema.',
            '**Google Gemini 3.1 Pro:** Setzen Sie `response_mime_type: "application/json"` mit `response_schema`, um strukturierte Ausgabe zu erzwingen. Native JSON-Constraint mit hoher Zuverlässigkeit.',
            '**Wichtigster Vorteil:** API-Level Durchsetzung funktioniert auf der Token-Generierungsebene, nicht als Prompt-Anweisung. Modelle können die Constraint nicht verletzen — sie wird von der API durchgesetzt, bevor die Ausgabe zurückgegeben wird.',
            'Verwenden Sie diese Strategie: **Kombinieren Sie API-Level Durchsetzung (für Format) mit Prompt-Level Constraints (für Inhalt).** Beispiel: Verwenden Sie API-Level JSON-Schema, um gültige Ausgabestruktur zu garantieren, dann verwenden Sie Prompts, um Inhalt einzuschränken („verwenden Sie nur Daten aus dem bereitgestellten Kontext").',
          ],
          callouts: [
            { type: 'insight', label: 'Best Practice', text: 'Bevorzugen Sie API-Level Constraint-Durchsetzung gegenüber Prompt-Text-Constraints, wenn verfügbar. API-Level ist zuverlässiger (nahezu 100% Adhäsion) und gewährleistet Schema-Korrektheit. Reservieren Sie Prompt-Level Constraints für nuancierte Inhalts-, Ton- und Sicherheitsregeln, die die API-Ebene nicht behandelt.' },
          ],
        },
        regionalContext: {
          id: 'constrained-prompting-in-regulated-environments',
          title: 'Constrained Prompting in regulierten Umgebungen',
          content: [
            '**In regulierten Industrien ist Constrained Prompting nicht optional — es ist eine Compliance-Anforderung.** Gesundheitsdienstleister, Finanzinstitute und Rechtsanwaltskanzleien hängen von Constraints ab, um Ausgaben zu verhindern, die HIPAA, GDPR, SOX oder andere regulatorische Rahmenbedingungen verletzen.',
            'Regional- und Branchenbezogene Überlegungen:',
          ],
          items: [
            '**EU (GDPR):** Sicherheits-Constraints, die personenbezogene Daten, Finanzinformationen und Krankengeschichte ausschließen, sind obligatorisch. Prompts müssen explizit angeben: „Persönliche Daten, Finanzinformationen oder Gesundheitsinformationen nicht einschließen." Gemäß GDPR Artikel 28 müssen Sie Datenverarbeitungsvereinbarungen (DPA) mit Ihrem KI-Anbieter abschließen.',
            '**DACH (Deutschland/Österreich/Schweiz):** Die BSI-Grundschutz-Kataloge empfehlen, lokale oder private KI-Modelle für die Verarbeitung sensibler Daten zu verwenden. Stellen Sie sicher, dass Ihre Prompts und deren Ausgaben keine unkontrollierten personenbezogenen Daten über externe APIs enthalten. Für Mittelstandsunternehmen ist Constrained Prompting mit lokalen Modellen (Llama, Mistral) ideal für DSGVO-Compliance bei minimalen API-Kosten.',
            '**US (SOX/HIPAA):** Regulierte Firmen in Finanz- und Gesundheitswesen benötigen Audit-Trails und unterzeichnete Vereinbarungen. Constrained Prompts sperren das Ausgabeformat, um Audit-Logs vollständig und überprüfbar zu machen.',
            '**Japan (APPI):** Datenresidenz und Zustimmungs-Constraints sind kritisch. Prompts müssen spezifizieren: „Verarbeite nur Benutzerdaten mit Wohnsitz in Japan" und „Übertrage Daten nicht außerhalb Japans."',
            '**China (Data Security Law):** Constrained Output zu strukturierten Tabellen (kein freier Text) und Format-Restriktionen stellen sicher, dass Ausgaben innerhalb genehmigter Datenbearbeitungspfade bleiben.',
          ],
          callouts: [
            { type: 'warning', label: 'Compliance', text: 'In regulierten Branchen müssen Sie Constrained Prompting immer mit Dokumentation kombinieren. Schreiben Sie jede Constraint auf, testen Sie alle Constraint-Kombinationen und protokollieren Sie Ergebnisse. Regulatoren erwarten zu sehen, dass Constraints validiert wurden.' },
          ],
        },
        relatedReading: {
          title: 'Weiterführende Ressourcen',
          items: [
            '[Was ist Prompt Engineering?](/de/prompt-engineering/what-is-prompt-engineering) — Grundlagen vor Anwendung von Constraints.',
            '[RTF Framework](/de/prompt-engineering/rtf-framework) — Role-Task-Format: ein strukturiertes Framework, das natürlich mit Constrained Prompting kombiniert werden kann.',
            '[Few-Shot Prompting](/de/prompt-engineering/few-shot-prompting) — Beispiele bereitstellen ist eine Form impliziter Constraints.',
            '[Chain-of-Thought Prompting](/de/prompt-engineering/chain-of-thought-prompting) — Wenn Sie Reasoning-Schritte wünschen, nicht nur geconstraintetete Ausgabe.',
            '[KI-Halluzinationen: Wie man sie stoppt](/de/prompt-engineering/ai-hallucinations-how-to-stop) — Constraints, die Halluzinations-Risiken reduzieren.',
            '[Grundlagen der Prompt-Engineering-Optimierung](/de/prompt-engineering/fundamentals-of-prompt-optimization) — Optimierungstechniken, die Constrained Prompting erweitern.',
          ],
        },
        faqSection: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist Constrained Prompting?', a: 'Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar und wiederverwendbar zu machen. Statt „schreibe eine Zusammenfassung" geben Sie vor: 150 Wörter, JSON-Format, keine Konkurrenten-Namen, muss einen Call-to-Action enthalten.' },
            { q: 'Was sind die fünf Constraint-Typen?', a: 'Die fünf Haupt-Constraint-Typen sind: (1) Strukturell – erforderliche Überschriften, Tabellen, JSON mit spezifischen Schlüsseln. (2) Inhalt – erforderliche Abschnitte, verbotene Themen. (3) Stil – Ton, Lesenlevel, Terminologie. (4) Länge – Wort- oder Zeichenlimits. (5) Sicherheit – keine medizinischen Ratschläge, personenbezogenen Daten oder rechtlichen Schlussfolgerungen.' },
            { q: 'Wie zwingt man ein Modell, gültiges JSON auszugeben?', a: 'Geben Sie das genaue JSON-Schema im Prompt vor: „Geben Sie JSON genau in diesem Format zurück: { \\"finding\\": \\"...\\" }". Kombinieren Sie dies mit „Geben Sie nur JSON aus, keinen anderen Text." GPT-4o unterstützt auch einen JSON-Modus über die API, der gültiges JSON auf API-Ebene erzwingt.' },
            { q: 'Funktioniert Constrained Prompting auf GPT-4o, Claude und Gemini?', a: 'Ja – alle drei unterstützen Constrained Prompting. GPT-4o und Claude Opus 4.7 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit etwa 95% Adhärenzrate bei gut formulierten Prompts. Gemini 3.1 Pro schneidet ähnlich ab, kann aber mehrdeutige Constraints unterschiedlich interpretieren. Testen Sie immer über Modelle hinweg.' },
            { q: 'Was ist der Unterschied zwischen Constrained Prompting und Few-Shot Prompting?', a: 'Constrained Prompting fügt explizite Regeln in Textform hinzu (Format, Länge, Inhaltsrestriktionen). Few-Shot Prompting stellt ausgearbeitete Beispiele bereit, die implizit zeigen, was produziert werden soll. Die beiden funktionieren gut zusammen: nutzen Sie ein Few-Shot-Beispiel, um das Ausgabemuster zu zeigen, dann fügen Sie Constraints für strengere Durchsetzung hinzu.' },
            { q: 'Wann sollten Sie Constrained Prompting NICHT verwenden?', a: 'Vermeiden Sie strukturelle Constraints bei offenen kreativen Aufgaben (Brainstorming, Ideation, Fiction). Über-Constraining kreativer Prompts erzeugt formularhafte, minderwertige Ausgaben. Verwenden Sie Ton- und Stil-Constraints für kreative Aufgaben, aber erlauben Sie strukturelle Freiheit.' },
            { q: 'Wie viele Constraints können Sie in einem Prompt stapeln?', a: 'Praktisch funktionieren 3–5 Constraints gut. Beyond 5–6 beginnen Modelle, niedrig priorisierte Constraints stillschweigend zu ignorieren. Wenn Sie mehr als 5 benötigen, listen Sie sie in Prioritätsordnung auf und geben Sie explizit an: „Falls Constraints konfligieren, wenden Sie sie in dieser Reihenfolge an: (1) Sicherheit, (2) Format, (3) Länge."' },
            { q: 'Muss ich bei der Verwendung von Constrained Prompting die DSGVO beachten?', a: 'Ja, die DSGVO ist relevant, wenn Constrained Prompting bei der Verarbeitung personenbezogener Daten eingesetzt wird. Gemäß DSGVO Artikel 28 müssen Sie Datenverarbeitungsvereinbarungen (DPA) mit Ihrem KI-Anbieter abschließen. Für Unternehmen im DACH-Raum empfehlen die BSI-Grundschutz-Kataloge, lokale oder private KI-Modelle für die Verarbeitung sensibler Daten zu verwenden. Stellen Sie sicher, dass Ihre Prompts und deren Ausgaben keine unkontrollierten personenbezogenen Daten über externe APIs enthalten.' },
            { q: 'Ist Constrained Prompting für den deutschen Mittelstand geeignet?', a: 'Absolut. Constrained Prompting ist besonders wertvoll für deutsche Mittelstandsunternehmen, da es standardisierte, wiederverwendbare Prompt-Vorlagen ermöglicht – ideal für ressourcenbegrenzte Teams. Mit PromptQuorum können Sie Constraints über mehrere Modelle hinweg testen, um das beste Preis-Leistungs-Verhältnis für Ihr Unternehmen zu finden. Mittelstandsunternehmen in regulierten Branchen (Finanzen, Versicherung, Gesundheit) profitieren besonders von den Sicherheits- und Compliance-Constraints.' },
          ],
        },
        sources: {
          title: 'Quellen',
          items: [
            '**OpenAI. (2026).** "Strukturierte Ausgaben — JSON Mode und Responses API." https://platform.openai.com/docs/guides/structured-outputs — Server-seitige JSON-Schema-Durchsetzung für GPT-4o mit 100% Schema-Adhäsion.',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude — API-Level Constraint-Durchsetzung für Claude Sonnet 4.6 und Opus 4.7.',
            '**Google. (2026).** "Gemini API: Kontrollierte Generierung mit response_schema." https://ai.google.dev/gemini-api/docs/controlled-generation — Native JSON-Modus und strukturierte Ausgabe-Durchsetzung für Gemini 3.1 Pro.',
            '**White et al. (2023).** "Ein Prompt-Pattern-Katalog zur Verbesserung des Prompt Engineering mit ChatGPT." https://arxiv.org/abs/2302.11382 — Akademische Taxonomie von Prompt-Mustern einschließlich Constraint-basierter Prompting-Techniken.',
            '**Zhou et al. (2022).** "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910 — Forschung zu automatisierter Constraint-Optimierung und Prompt-Verfeinerung.',
          ],
        },
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Constrained Prompting: Salidas estructuradas para respuestas fiables',
      intro: '**El constrained prompting es una técnica en la que le dices al modelo no solo qué hacer, sino también qué debe y no debe hacer — usando lenguaje como "debe", "no debe" y "solo" — para que las salidas permanezcan dentro de límites claramente definidos.** Es esencial cuando necesitas formatos fiables, contenido seguro o cumplimiento estricto de reglas internas.',
      leadAnswerBlock: '**El constrained prompting es la práctica de añadir reglas explícitas — formato, longitud, contenido y límites de seguridad — directamente en un prompt para hacer que la salida de la IA sea predecible y reutilizable.** En lugar de "escribe un resumen", especificas estructura exacta, contenido permitido y reglas de validación.',
      publishDate: '2026-03-26',
      readTime: '6 min de lectura',
      seoTitle: 'Constrained Prompting: Salidas de IA estructuradas',
      metaDescription: 'Domina el constrained prompting para forzar a la IA a producir JSON, XML y formatos estructurados. 5 técnicas con ejemplos reales para GPT-4o, Claude y Gemini.',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-04-28',
      lastFactChecked: '2026-04-28',
      audience: 'Desarrolladores, gestores de producto y equipos que construyen workflows impulsados por LLMs',
      next_refresh_due: '2026-09-26',
      aboutTopics: ['Constrained Prompting', 'Salida Estructurada', 'Prompt Engineering'],
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: 'Datos rápidos', anchor: '#quick-facts' },
        { label: '¿Qué es el constrained prompting?', anchor: '#what-is-constrained-prompting' },
        { label: '¿Por qué importa el constrained prompting?', anchor: '#why-does-constrained-prompting-matter' },
        { label: '¿Qué tipos de constraints puedes usar?', anchor: '#which-constraint-types-can-you-use' },
        { label: 'Prompt sin constraints vs con constraints: un ejemplo', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
        { label: '¿Cuándo debes usar constrained prompting?', anchor: '#when-should-you-use-constrained-prompting' },
        { label: '¿Cómo soporta PromptQuorum el constrained prompting?', anchor: '#how-does-promptquorum-support-constrained-prompting' },
        { label: 'Cómo usar constrained prompting', anchor: '#how-to-use-constrained-prompting' },
        { label: 'Aplicación de constraints a nivel de API', anchor: '#api-level-constraint-enforcement' },
        { label: 'Constrained prompting en entornos regulados', anchor: '#constrained-prompting-in-regulated-environments' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#frequently-asked-questions' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
      'inLanguage': 'es',
        url: 'https://www.promptquorum.com/es/prompt-engineering/constrained-prompting?lang=es',
        inLanguage: 'es',
        headline: 'Constrained Prompting: Fuerza formatos de salida de IA (2026)',
        description: 'Qué es el constrained prompting, por qué importa y cómo usarlo para hacer que las salidas de IA sean predecibles y seguras en workflows reales.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-28',
        keywords: ['constrained prompting', 'prompt engineering', 'prompts estructurados', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Constrained Prompting' },
          { '@type': 'Thing', name: 'Salida Estructurada' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
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
          { '@type': 'Question', name: '¿Qué es el constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'El constrained prompting es la práctica de añadir reglas explícitas — formato, longitud, contenido y límites de seguridad — directamente en un prompt para hacer que la salida de la IA sea predecible y reutilizable. En lugar de "escribe un resumen", especificas: 150 palabras, formato JSON, sin nombres de competidores, debe incluir una llamada a la acción.' } },
          { '@type': 'Question', name: '¿Cuáles son los cinco tipos de constraints?', acceptedAnswer: { '@type': 'Answer', text: 'Los cinco tipos principales son: (1) Estructural — encabezados obligatorios, tablas, JSON con claves específicas. (2) Contenido — secciones requeridas, temas prohibidos. (3) Estilo — tono, nivel de lectura, terminología. (4) Longitud — límites de palabras o caracteres. (5) Seguridad — evitar consejos médicos, datos personales, conclusiones legales.' } },
          { '@type': 'Question', name: '¿Cómo fuerzo a un modelo a producir JSON válido?', acceptedAnswer: { '@type': 'Answer', text: 'Proporciona el esquema JSON exacto en el prompt: "Devuelve JSON exactamente con esta estructura: { \\"finding\\": \\"...\\" }". Combínalo con "Devuelve solo JSON, sin otro texto." GPT-4o también soporta un modo JSON vía API que aplica JSON válido a nivel de API.' } },
          { '@type': 'Question', name: '¿Funciona el constrained prompting en GPT-4o, Claude y Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — los tres soportan constrained prompting. GPT-4o y Claude Sonnet 4.6 siguen constraints de formato estrictas (JSON, tablas, límites de palabras) con ~95 % de adherencia en prompts bien formados. Los tres también soportan aplicación de constraints a nivel de API vía structured outputs, que garantiza JSON válido según esquema a nivel del modelo. Gemini 3.1 Pro obtiene resultados similares pero puede interpretar constraints ambiguas de forma diferente. Siempre prueba entre modelos.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre constrained prompting y few-shot prompting?', acceptedAnswer: { '@type': 'Answer', text: 'El constrained prompting añade reglas explícitas en forma de texto (formato, longitud, restricciones de contenido). El few-shot prompting proporciona ejemplos que muestran implícitamente al modelo qué producir. Los dos funcionan bien juntos: usa un ejemplo few-shot para mostrar el patrón de salida, luego añade constraints para una aplicación más estricta.' } },
          { '@type': 'Question', name: '¿Cuándo NO debes usar constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Evita las constraints estructurales en tareas creativas abiertas (brainstorming, ideación, ficción). El exceso de constraints en prompts creativos produce salidas formulaicas y de baja calidad. Usa constraints de tono y estilo para tareas creativas, pero permite libertad estructural.' } },
          { '@type': 'Question', name: '¿Cuántas constraints puedes apilar en un prompt?', acceptedAnswer: { '@type': 'Answer', text: 'En la práctica, 3–5 constraints funcionan bien. Más de 5–6, los modelos empiezan a omitir silenciosamente las constraints de menor prioridad sin aviso. Si necesitas más de 5, lístalас en orden de prioridad e indica explícitamente: "Si las constraints entran en conflicto, aplícalas en este orden: (1) seguridad, (2) formato, (3) longitud."' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo usar constrained prompting',
        inLanguage: 'es',
        description: 'Una guía de 5 pasos para aplicar constraints de salida en prompts para GPT-4o, Claude Sonnet 4.6 y Gemini 3.1 Pro.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Identifica las constraints de salida', text: 'Identifica las constraints relevantes para tu tarea: longitud, formato, vocabulario, alcance y seguridad.' },
          { '@type': 'HowToStep', position: 2, name: 'Usa lenguaje de constraint estricto', text: 'Formula las constraints usando "debe", "no debe" y "solo" — nunca "intenta" o "apunta a".' },
          { '@type': 'HowToStep', position: 3, name: 'Proporciona un ejemplo de formato', text: 'Para constraints de formato, muestra el esquema exacto en línea: claves JSON, estructura Markdown o nombres de campos.' },
          { '@type': 'HowToStep', position: 4, name: 'Lista inclusiones y exclusiones de contenido', text: 'Lista explícitamente qué incluir y qué excluir por tema, terminología y tipo de dato.' },
          { '@type': 'HowToStep', position: 5, name: 'Prueba en casos límite', text: 'Genera 10 salidas. Verifica que todas respeten el límite de longitud, el formato y los límites de contenido.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '**El constrained prompting** añade reglas explícitas (estructura, contenido, longitud, seguridad) a un prompt para que la salida de la IA sea predecible en múltiples ejecuciones.',
            '5 tipos de constraints: estructural, contenido, estilo, longitud y seguridad — combínalos para el máximo control de salida.',
            'Usa lenguaje obligatorio: **"debe", "no debe", "solo".** Las directivas suaves como "intenta" se ignoran con frecuencia.',
            'Las constraints de formato funcionan mejor con un ejemplo: muestra al modelo el esquema JSON exacto o la estructura Markdown que necesitas.',
            'GPT-4o, Claude Sonnet 4.6 y Gemini 3.1 Pro soportan constrained prompting — además de la aplicación a nivel de API vía structured outputs — pero responden de forma diferente a las constraints a nivel de prompt. Prueba entre modelos.',
            'Los prompts con constraints ahorran tiempo de revisión: las salidas que ya coinciden con tu estructura requerida necesitan menos corrección humana.',
            'Usa [PromptQuorum](https://www.promptquorum.com/) para probar prompts con constraints en múltiples modelos lado a lado y comparar la adherencia a las constraints.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Datos rápidos',
          items: [
            '**5 tipos de constraints:** Estructural, Contenido, Estilo, Longitud, Seguridad',
            '**Adherencia de los modelos:** GPT-4o y Claude Opus 4.7 siguen constraints estrictas con ~95 % en prompts bien formados',
            '**Apilado óptimo:** 3–5 constraints funcionan bien; más de 5–6, los modelos omiten silenciosamente las de menor prioridad',
            '**Consistencia de salida JSON:** Sin un ejemplo de esquema, los modelos producen nombres de claves inconsistentes entre ejecuciones',
            '**Metodología de prueba:** Genera 10 salidas para verificar que todas respetan longitud, formato y límites de contenido',
            '**Tiempo de configuración:** La primera validación de constraints añade 10–15 minutos; las plantillas reutilizables ahorran 30+ minutos por tarea',
          ],
        },
        whatIsConstrained: {
          title: '¿Qué es el constrained prompting?',
          content: [
            '**El constrained prompting significa añadir reglas explícitas sobre contenido, estructura, longitud y comportamiento directamente en tu prompt.** En lugar de una instrucción vaga como "resume esto", especificas formatos permitidos, campos requeridos, temas prohibidos y reglas de validación. Esta es una técnica central de [prompt engineering](/prompt-engineering/what-is-prompt-engineering).',
            'Las constraints pueden incluir esquemas de salida (como JSON con claves fijas), límites de palabras, requisitos de tono y restricciones de seguridad como "no proporciones diagnósticos médicos". Al hacer que estas reglas sean parte del prompt, reduces la ambigüedad y facilitas la integración del modelo en workflows de producción.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'El constrained prompting es la práctica de añadir reglas explícitas — formato, longitud, contenido y límites de seguridad — directamente en un prompt para hacer que la salida de la IA sea predecible.' },
            { type: 'in-plain-terms', text: 'En lugar de pedirle a la IA que "escriba un resumen", le dices: máximo 150 palabras, usa puntos, no menciones competidores, incluye siempre una llamada a la acción. Cuanto más específicas sean las reglas, más consistente será la salida.' },
          ],
          callouts: [
            { type: 'note', label: 'Definición', text: 'El constrained prompting no es una función de API separada — es una técnica de prompting. Aplicas constraints en texto plano dentro del propio prompt. No se necesita sintaxis especial ni flags de API.' },
          ],
        },
        whyItMatters: {
          title: '¿Por qué importa el constrained prompting?',
          content: [
            '**El constrained prompting importa siempre que la salida del modelo alimente a personas, procesos u otros sistemas que dependen de un comportamiento predecible.** Sin constraints, el mismo prompt puede producir estructuras o niveles de detalle diferentes entre ejecuciones.',
            'Las constraints claras te ayudan a:',
          ],
          items: [
            'Prevenir contenido o formato inesperados que rompan herramientas downstream.',
            'Aplicar directrices de marca, legales o de seguridad directamente a nivel del prompt.',
            'Reducir el tiempo de revisión porque las salidas ya coinciden con tu estructura requerida.',
          ],
          callouts: [
            { type: 'tip', label: 'Punto clave', text: 'Las salidas sin constraints varían mucho: mismo prompt, estructuras diferentes, longitudes diferentes, tono diferente. Las constraints eliminan esa varianza y hacen la salida lista para producción.' },
          ],
        },
        typesOfConstraints: {
          title: '¿Qué tipos de constraints puedes usar?',
          content: [
            '**Puedes restringir los prompts en varias dimensiones: estructura, contenido, estilo, longitud y seguridad.** Cuanto más preciso seas, más consistentes serán las salidas. Aprende cómo encajan en [prompts estructurados](/prompt-engineering/rtf-framework).',
            'Los tipos de constraints comunes incluyen:',
          ],
          items: [
            'Constraints estructurales: Encabezados requeridos, listas de puntos, tablas o JSON con claves específicas.',
            'Constraints de contenido: Secciones requeridas (como "Riesgos" o "Próximos pasos") y temas o frases prohibidos.',
            'Constraints de estilo: Tono ("formal", "neutral", "conversacional"), nivel de lectura o reglas de terminología.',
            'Constraints de longitud: Límites de palabras o caracteres, o un número fijo de puntos o secciones.',
            'Constraints de seguridad: Instrucciones para evitar datos personales, consejos médicos, conclusiones legales o categorías de contenido no permitidas.',
          ],
          columns: ['Tipo de constraint', 'Ejemplo', 'Cuándo usar'],
          rows: [
            { 'Tipo de constraint': 'Estructural', 'Ejemplo': '"Devuelve como JSON: {clave: valor}"', 'Cuándo usar': 'Integraciones de API, pipelines de datos' },
            { 'Tipo de constraint': 'Contenido', 'Ejemplo': '"Debe incluir sección de riesgos; no debe mencionar competidores"', 'Cuándo usar': 'Informes, comunicaciones con clientes' },
            { 'Tipo de constraint': 'Estilo', 'Ejemplo': '"Tono formal, sin contracciones, nivel de lectura 8"', 'Cuándo usar': 'Salidas controladas por marca' },
            { 'Tipo de constraint': 'Longitud', 'Ejemplo': '"≤150 palabras, exactamente 5 puntos"', 'Cuándo usar': 'Contenido con plantilla, resúmenes' },
            { 'Tipo de constraint': 'Seguridad', 'Ejemplo': '"No debe proporcionar diagnósticos médicos ni asesoramiento legal"', 'Cuándo usar': 'Industrias reguladas, cara al público' },
          ],
          callouts: [
            { type: 'tip', label: 'Consejo pro', text: 'Para salida JSON, proporciona siempre los nombres exactos de las claves y los tipos de valor en el prompt. "Devuelve JSON" sin un esquema produce nombres de claves inconsistentes entre modelos.' },
            { type: 'insight', label: 'Tasas de adherencia de los modelos', text: 'La adherencia a constraints a nivel de prompt varía según el modelo y el tipo de constraint: GPT-4o alcanza ~95 % en esquema JSON, ~90 % en límites de palabras, ~95 % en inclusión de contenido. Claude Sonnet 4.6 puntúa ~97 % en JSON, ~92 % en límites de palabras, ~96 % en inclusión. Gemini 3.1 Pro: ~92 % JSON, ~85 % límites de palabras, ~93 % inclusión. Los Structured Outputs a nivel de API logran cerca del 100 % de cumplimiento de esquema JSON en todos los modelos, pero solo manejan el esquema — no el contenido, el tono o las constraints de seguridad.' },
          ],
        },
        example: {
          title: 'Prompt sin constraints vs con constraints: un ejemplo',
          content: [
            '**El impacto del constrained prompting es más fácil de ver cuando comparas un prompt sin constraints con uno con constraints para la misma tarea.** Aquí redactamos un breve resumen de producto.',
            '**Prompt sin constraints** (produce longitud, estructura y tono variables en cada ejecución):',
            '"Escribe un resumen de nuestra nueva función de análisis."',
            '**Versión con constraints** (define longitud, estructura, estilo y contenido requerido):',
            '"Eres un profesional de marketing B2B. Tarea: Escribe un resumen de nuestra nueva función de análisis para una página de producto. Constraints: Longitud: 120–160 palabras. Estructura: 1 párrafo de introducción corto, luego 3 puntos, luego 1 oración de cierre. Estilo: Tono claro, neutral-profesional. Sin palabras de hype como \'revolucionario\' o \'que cambia el juego\'. Contenido: Menciona el beneficio principal (información más rápida sobre el comportamiento del cliente) y un caso de uso concreto. Formato de salida: Markdown válido con puntos usando `-`."',
            'La versión con constraints define longitud, estructura, estilo y contenido requerido. La salida se vuelve predecible y reutilizable — adecuada para crear plantillas en workflows de equipo.',
            '**Ejemplo avanzado: extracción de datos estructurados de documentos legales**',
            'Para tareas más complejas, combina múltiples tipos de constraints con un esquema de salida estructurado:',
            '**Prompt:**',
            '"Eres un asistente de análisis de contratos. Tarea: Extrae los términos clave de la cláusula de contrato proporcionada. Constraints: (1) Devuelve SOLO JSON válido que coincida exactamente con este esquema: { \\"parties\\": [\\"string\\"], \\"obligation_type\\": \\"payment|delivery|confidentiality|termination\\", \\"deadline\\": \\"fecha ISO 8601 o null\\", \\"penalty_clause\\": true|false, \\"summary\\": \\"máx 50 palabras\\" } (2) Si no se puede encontrar un campo, usa null. (3) No inferir información no declarada explícitamente. (4) Devuelve SOLO el JSON — sin preámbulo, sin marcadores de código markdown, sin explicación. (5) Verifica que tu JSON es válido antes de devolver."',
            'Este ejemplo avanzado muestra cómo combinar constraints para uso en producción: aplicación de esquema (constraint de formato), requisitos de campos (constraint de contenido), regla sin inferencia (constraint de contenido) y validez JSON (constraint de seguridad).',
          ],
          callouts: [
            { type: 'practice', label: 'Regla', text: 'Cada constraint que añades reduce la varianza en la salida del modelo. Comienza con 1–2 constraints, prueba, luego añade más. Apilar 5+ constraints a la vez aumenta el riesgo de que el modelo viole una silenciosamente. Para uso en producción, prueba en casos límite (cláusulas ambiguas, campos faltantes, condiciones de frontera).' },
          ],
        },
        whenToUse: {
          title: '¿Cuándo debes usar constrained prompting?',
          content: [
            '**Debes usar constrained prompting siempre que la corrección y la consistencia sean más importantes que la máxima creatividad.** Esto es especialmente válido en contextos operativos, analíticos y regulados. Combinado con [ejemplos few-shot](/prompt-engineering/few-shot-prompting), las constraints se vuelven aún más potentes.',
            'Los casos de uso típicos incluyen:',
          ],
          items: [
            'Generar salidas JSON o en tabla que otros sistemas van a parsear.',
            'Crear informes, resúmenes o actualizaciones de estado estandarizados en todos los equipos.',
            'Redactar comunicaciones con clientes que deben seguir directrices de marca o legales.',
            'Extraer datos estructurados (incidencias, entidades, métricas) de texto no estructurado.',
          ],
          callouts: [
            { type: 'warning', label: 'Evitar', text: 'No apliques constraints de longitud o estructurales a tareas creativas abiertas (brainstorming, ideación). El exceso de constraints en prompts creativos produce salidas genéricas que marcan casillas en lugar de ideas genuinamente útiles.' },
          ],
        },
        howPQSupports: {
          title: '¿Cómo soporta PromptQuorum el constrained prompting?',
          content: [
            '**PromptQuorum es una herramienta de despacho de IA multi-modelo diseñada para trabajar bien con constrained prompting, permitiéndote definir, guardar y reutilizar frameworks de prompts estructurados.** Puedes combinar constraints con frameworks como [SPECS](/prompt-engineering/specs-framework), [RTF](/prompt-engineering/rtf-framework) o la Guía de Prompting de Google y enviarlos a varios modelos a la vez.',
            'En PromptQuorum puedes:',
          ],
          items: [
            'Codificar constraints estructurales y de contenido directamente en los frameworks para que cada ejecución siga las mismas reglas.',
            'Probar prompts con constraints en múltiples modelos lado a lado para ver qué proveedor se adhiere mejor a tus especificaciones. Por ejemplo, despacha la misma constraint de extracción JSON a GPT-4o, Claude Sonnet 4.6 y Gemini 3.1 Pro simultáneamente — luego compara qué modelo respeta más fiablemente tu esquema, límites de palabras y restricciones de contenido.',
            'Guardar prompts con constraints como plantillas para tareas recurrentes, asegurando que tu equipo siempre use los mismos patrones validados.',
            'Identificar qué modelo funciona mejor para tu caso de uso — luego enrutar el tráfico de producción al ganador.',
          ],
          callouts: [
            { type: 'practice', label: 'Buena práctica', text: 'Siempre prueba tu prompt con constraints en al menos 2 modelos antes de desplegarlo. Diferentes modelos (GPT-4o vs Claude vs Gemini) interpretan las constraints de forma diferente. Una tasa de adherencia del 95 % en GPT-4o puede caer al 80 % en Gemini.' },
          ],
        },
        howToStart: {
          title: 'Cómo usar constrained prompting',
          numberedItems: [
            '**Identifica las constraints de salida relevantes para tu tarea: longitud, formato, vocabulario, alcance, seguridad.** Ejemplo: \'La respuesta debe tener ≤100 palabras, formato JSON, usar solo términos técnicos, cubrir solo desarrollos recientes (2024+), no debe mencionar competidores.\'',
            '**Formula las constraints explícitamente usando lenguaje como "debe", "no debe" y "solo".** Evita directivas suaves como "intenta" o "apunta a". Las constraints estrictas son más fiables.',
            '**Para constraints de formato, proporciona un ejemplo del formato exacto que quieres.** Muéstrale al modelo: \'Devuelve como JSON: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\", \\"sources\\": [...] }\'',
            '**Para constraints de contenido, lista explícitamente qué incluir y excluir.** Ejemplo: \'Incluir: detalles técnicos, métricas de rendimiento. Excluir: lenguaje de marketing, nombres de competidores, precios.\'',
            '**Prueba los prompts con constraints en casos límite para asegurarte de que el modelo respeta todas las constraints.** Genera 10 salidas. Comprueba: ¿Respetan todas el límite de longitud? ¿Todas usan el formato correcto? ¿Hay alguna violación?',
          ],
          callouts: [
            { type: 'insight', label: 'Perspectiva', text: 'GPT-4o y Claude Sonnet 4.6 siguen constraints de formato estrictas (JSON, tablas, límites de palabras) con ~95 % de adherencia en prompts bien formados. Gemini 3.1 Pro puntúa de forma similar. Los tres soportan Structured Outputs a nivel de API para casi 100 % de cumplimiento de esquema JSON. Para uso en producción, combina la aplicación a nivel de API con constraints a nivel de prompt para máxima fiabilidad.' },
          ],
        },
        apiLevelEnforcement: {
          id: 'api-level-constraint-enforcement',
          title: 'Aplicación de constraints a nivel de API (más allá del texto del prompt)',
          content: [
            '**En 2026, todos los principales proveedores de IA ofrecen aplicación de constraints a nivel de API — una alternativa más fiable a las constraints en texto de prompt.** En lugar de esperar que el modelo respete tus reglas, aplicas constraints a nivel de generación de tokens vía parámetros de API. Esto garantiza que las salidas coincidan con tu esquema.',
            'Los principales proveedores ahora soportan structured outputs:',
            '**OpenAI Structured Outputs (GPT-4o):** Establece `response_format: { type: "json_schema", json_schema: {...} }` a nivel de API. Garantiza JSON válido que coincide exactamente con tu esquema — ~100 % de fiabilidad. El modelo no puede producir JSON inválido.',
            '**Anthropic Structured Outputs (Claude Sonnet 4.6):** Usa el parámetro `output_config.format` para aplicar el esquema JSON del lado del servidor. Todas las salidas coinciden estrictamente con el esquema que defines.',
            '**Google Gemini 3.1 Pro:** Establece `response_mime_type: "application/json"` con `response_schema` para aplicar salida estructurada. Constraint JSON nativa con alta fiabilidad.',
            '**Ventaja clave:** La aplicación a nivel de API opera a nivel de generación de tokens, no como una instrucción de prompt. Los modelos no pueden violar la constraint — es aplicada por la API antes de que se devuelva la salida.',
            'Usa esta estrategia: **Combina la aplicación a nivel de API (para formato) con constraints a nivel de prompt (para contenido).** Ejemplo: Usa el esquema JSON a nivel de API para garantizar la estructura de salida válida, luego usa prompts para restringir el contenido ("usa solo datos del contexto proporcionado").',
          ],
          callouts: [
            { type: 'insight', label: 'Buena práctica', text: 'Cuando esté disponible, prefiere la aplicación de constraints a nivel de API sobre las constraints en texto de prompt. El nivel de API es más fiable (cerca del 100 % de adherencia) y garantiza la corrección del esquema. Reserva las constraints a nivel de prompt para reglas matizadas de contenido, tono y seguridad que el nivel de API no maneja.' },
          ],
        },
        regionalContext: {
          id: 'constrained-prompting-in-regulated-environments',
          title: 'Constrained prompting en entornos regulados',
          content: [
            '**En industrias reguladas, el constrained prompting no es opcional — es un requisito de cumplimiento.** Los proveedores de salud, las instituciones financieras y los despachos de abogados dependen de las constraints para prevenir salidas que violen HIPAA, GDPR, SOX u otros marcos regulatorios.',
            'Consideraciones regionales y sectoriales:',
          ],
          items: [
            '**UE (GDPR):** Las constraints de seguridad que excluyen datos personales, información financiera e historial médico son obligatorias. Los prompts deben indicar explícitamente: "No incluir datos personales, información financiera ni información de salud."',
            '**EE. UU. (SOX/HIPAA):** Las empresas reguladas en finanzas y salud requieren trazas de auditoría y acuerdos firmados. Los prompts con constraints bloquean el formato de salida para que los registros de auditoría sean completos y verificables.',
            '**Japón (APPI):** Las constraints de residencia de datos y consentimiento son críticas. Los prompts deben especificar: "Procesar solo datos de usuarios residentes en Japón" y "No transferir datos fuera de Japón."',
            '**China (Ley de Seguridad de Datos):** Restringir la salida a tablas estructuradas (sin texto libre) y las restricciones de formato aseguran que las salidas permanezcan dentro de las vías de manejo de datos aprobadas.',
          ],
          callouts: [
            { type: 'warning', label: 'Cumplimiento', text: 'En industrias reguladas, combina siempre el constrained prompting con documentación. Escribe cada constraint, prueba todas las combinaciones de constraints y registra los resultados. Los reguladores esperan ver pruebas de que las constraints fueron validadas.' },
          ],
        },
        commonMistakes: {
          title: 'Errores comunes',
          mistakes: [
            {
              mistake: 'Usar lenguaje de constraint suave ("intenta", "apunta a")',
              problem: 'Los modelos tratan las directivas suaves como sugerencias, no como reglas. "Intenta mantenerlo en menos de 200 palabras" produce salidas que van de 80 a 400 palabras.',
              fix: 'Usa lenguaje absoluto: "La respuesta debe tener 150–200 palabras. Sin excepciones."',
            },
            {
              mistake: 'Apilar demasiadas constraints sin orden de prioridad',
              problem: 'Cuando 6+ constraints entran en conflicto, el modelo omite silenciosamente las de menor prioridad sin aviso.',
              fix: 'Lista las constraints en orden de prioridad. Añade: "Si las constraints entran en conflicto, aplícalas en este orden: (1) seguridad, (2) formato, (3) longitud."',
            },
            {
              mistake: 'No proporcionar un ejemplo de formato para salida JSON/estructurada',
              problem: '"Devuelve como JSON" produce nombres de claves y anidamiento inconsistentes entre modelos y ejecuciones.',
              fix: 'Muestra el esquema exacto en línea: "Devuelve JSON exactamente con esta estructura: { \\"finding\\": \\"...\\" }"',
            },
            {
              mistake: 'Aplicar constraints estructurales a tareas de generación creativa',
              problem: 'La estructura estricta en tareas abiertas produce salidas creativas formulaicas y de baja calidad.',
              fix: 'Reserva las constraints estructurales para tareas operativas. Usa solo constraints de tono/estilo para tareas creativas.',
            },
            {
              mistake: 'No probar las constraints entre modelos',
              problem: 'GPT-4o, Claude Sonnet 4.6 y Gemini 3.1 Pro interpretan la misma constraint de forma diferente. Un prompt que funciona en uno puede fallar en otro.',
              fix: 'Prueba tu prompt con constraints en al menos 2 modelos antes de desplegarlo. Usa [PromptQuorum](https://www.promptquorum.com/) para comparaciones en paralelo.',
            },
            {
              mistake: 'No proporcionar un ejemplo junto con la constraint',
              problem: '"Devuelve JSON válido" sin un ejemplo de esquema produce claves y estructuras inconsistentes entre modelos y ejecuciones. Los modelos a menudo adivinan los nombres de los campos.',
              fix: 'Muestra siempre el esquema o formato exacto en línea: "Devuelve JSON exactamente con esta estructura: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\"  }"',
            },
          ],
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[¿Qué es el prompt engineering?](/es/prompt-engineering/what-is-prompt-engineering) — Fundamentos antes de aplicar constraints.',
            '[Salida estructurada: modo JSON](/es/prompt-engineering/structured-output-json-mode) — Aplicación de esquemas de salida a nivel de API.',
            '[Framework RTF](/es/prompt-engineering/rtf-framework) — Role-Task-Format: un framework estructurado que se combina bien con constrained prompting.',
            '[Few-shot prompting](/es/prompt-engineering/few-shot-prompting) — Proporcionar ejemplos es una forma de constraint implícita.',
            '[Cómo probar prompts entre modelos](/es/prompt-engineering/how-to-test-prompts-across-models) — Valida prompts con constraints en múltiples LLMs.',
            '[Prompt injection y seguridad](/es/prompt-engineering/prompt-injection-and-security) — Las constraints de seguridad defienden contra entradas adversariales.',
          ],
        },
        faqSection: {
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué es el constrained prompting?', a: 'El constrained prompting es la práctica de añadir reglas explícitas — formato, longitud, contenido y límites de seguridad — directamente en un prompt para hacer que la salida de la IA sea predecible y reutilizable. En lugar de "escribe un resumen", especificas: 150 palabras, formato JSON, sin nombres de competidores, debe incluir una llamada a la acción.' },
            { q: '¿Cuáles son los cinco tipos de constraints?', a: 'Los cinco tipos principales son: (1) Estructural — encabezados obligatorios, tablas, JSON con claves específicas. (2) Contenido — secciones requeridas, temas prohibidos. (3) Estilo — tono, nivel de lectura, terminología. (4) Longitud — límites de palabras o caracteres. (5) Seguridad — evitar consejos médicos, datos personales, conclusiones legales.' },
            { q: '¿Cómo fuerzo a un modelo a producir JSON válido?', a: 'Proporciona el esquema JSON exacto en el prompt: "Devuelve JSON exactamente con esta estructura: { \\"finding\\": \\"...\\" }". Combínalo con "Devuelve solo JSON, sin otro texto." GPT-4o también soporta un modo JSON vía API que aplica JSON válido a nivel de API.' },
            { q: '¿Funciona el constrained prompting en GPT-4o, Claude y Gemini?', a: 'Sí — los tres soportan constrained prompting. GPT-4o y Claude Opus 4.7 siguen constraints de formato estrictas (JSON, tablas, límites de palabras) con aproximadamente un 95 % de adherencia en prompts bien formados. Gemini 3.1 Pro puntúa de forma similar pero puede interpretar constraints ambiguas de manera diferente. Siempre prueba entre modelos.' },
            { q: '¿Cuál es la diferencia entre constrained prompting y few-shot prompting?', a: 'El constrained prompting añade reglas explícitas en forma de texto (formato, longitud, restricciones de contenido). El few-shot prompting proporciona ejemplos que muestran implícitamente al modelo qué producir. Los dos funcionan bien juntos: usa un ejemplo few-shot para mostrar el patrón de salida, luego añade constraints para una aplicación más estricta.' },
            { q: '¿Cuándo NO debes usar constrained prompting?', a: 'Evita las constraints estructurales en tareas creativas abiertas (brainstorming, ideación, ficción). El exceso de constraints en prompts creativos produce salidas formulaicas y de baja calidad. Usa constraints de tono y estilo para tareas creativas, pero permite libertad estructural.' },
            { q: '¿Cuántas constraints puedes apilar en un prompt?', a: 'En la práctica, 3–5 constraints funcionan bien. Más de 5–6, los modelos empiezan a omitir silenciosamente las de menor prioridad sin aviso. Si necesitas más de 5, lístalас en orden de prioridad e indica explícitamente: "Si las constraints entran en conflicto, aplícalas en este orden: (1) seguridad, (2) formato, (3) longitud."' },
          ],
        },
        sources: {
          title: 'Fuentes',
          items: [
            '**OpenAI. (2026).** "Structured Outputs — Modo JSON y Responses API." https://platform.openai.com/docs/guides/structured-outputs — Aplicación de esquema JSON del lado del servidor para GPT-4o con 100 % de adherencia al esquema.',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude — Aplicación de constraints a nivel de API para Claude Sonnet 4.6 y Opus 4.7.',
            '**Google. (2026).** "Gemini API: Generación controlada con response_schema." https://ai.google.dev/gemini-api/docs/controlled-generation — Modo JSON nativo y aplicación de salida estructurada para Gemini 3.1 Pro.',
            '**White et al. (2023).** "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." https://arxiv.org/abs/2302.11382 — Taxonomía académica de patrones de prompt incluyendo técnicas de prompting basadas en constraints.',
            '**Zhou et al. (2022).** "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910 — Investigación sobre optimización automatizada de constraints y refinamiento de prompts.',
          ],
        },
      },
    },
    fr: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques de Prompting',
  title: 'Prompting avec Contraintes : Structures Garanties pour Modèles de Langage',
  intro: '**Le prompting avec contraintes signifie ajouter des règles explicites — format, longueur, contenu, limites de sécurité — directement dans un prompt pour que les sorties IA restent prévisibles et réutilisables.** C\'est essentiel quand vous avez besoin de formats fiables, de contenu sécurisé, ou de respect strict des règles internes.',
  leadAnswerBlock: '**Le prompting avec contraintes est la pratique d\'ajouter des règles explicites — format, longueur, contenu et limites de sécurité — directement dans un prompt pour rendre les outputs IA prévisibles et réutilisables.** Au lieu de « rédige un résumé », vous spécifiez : 150 mots, format JSON, pas de noms concurrents, doit inclure un appel à l\'action.',
  publishDate: '2026-03-26',
  readTime: '6 min de lecture',
  seoTitle: 'Prompting avec Contraintes: Structures Fiables',
  metaDescription: 'Prompting avec contraintes pour outputs LLM prévisibles. Formats stricts, validation de schémas JSON, API-level enforcement avec GPT-4o, Claude Sonnet 4.6, Gemini 3.1 Pro.',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Prompting avec contraintes',
  dateModified: '2026-05-03',
  lastFactChecked: '2026-05-03',
  audience: 'Développeurs et équipes intégrant des modèles IA en workflows de production',
  next_refresh_due: '2026-09-26',
  aboutTopics: ['Prompting avec contraintes', 'Outputs structurés', 'Ingénierie des prompts'],
  toc: [
    { label: 'Points clés', anchor: '#key-takeaways' },
    { label: 'Faits rapides', anchor: '#quick-facts' },
    { label: 'Qu\'est-ce que le prompting avec contraintes ?', anchor: '#what-is-constrained-prompting' },
    { label: 'Pourquoi le prompting avec contraintes est crucial', anchor: '#why-does-constrained-prompting-matter' },
    { label: 'Types de contraintes de prompting', anchor: '#which-constraint-types-can-you-use' },
    { label: 'Exemple : Prompt sans contraintes vs avec contraintes', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
    { label: 'Quand utiliser le prompting avec contraintes', anchor: '#when-should-you-use-constrained-prompting' },
    { label: 'Comment PromptQuorum supporte les contraintes', anchor: '#how-does-promptquorum-support-constrained-prompting' },
    { label: 'Comment intégrer le prompting avec contraintes', anchor: '#how-to-use-constrained-prompting' },
    { label: 'Exécution au niveau de l\'API', anchor: '#api-level-constraint-enforcement' },
    { label: 'Prompting avec contraintes dans les environnements régulés', anchor: '#constrained-prompting-in-regulated-environments' },
    { label: 'Erreurs courantes', anchor: '#common-mistakes' },
    { label: 'Lectures complémentaires', anchor: '#related-reading' },
    { label: 'Questions fréquentes', anchor: '#frequently-asked-questions' },
    { label: 'Sources', anchor: '#sources' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    url: 'https://www.promptquorum.com/fr/prompt-engineering/constrained-prompting',
    inLanguage: 'fr',
    headline: 'Prompting avec Contraintes 2026: Structures Fiables pour LLM',
    description: 'Le prompting avec contraintes pour outputs LLM prévisibles. Formats stricts, validation de schémas JSON, enforcement au niveau API.',
    datePublished: '2026-03-26',
    dateModified: '2026-05-03',
    keywords: ['prompting avec contraintes', 'prompting', 'outputs structurés', 'JSON schema', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    proficiencyLevel: 'Intermediate',
    about: [
      { '@type': 'Thing', name: 'Prompting avec contraintes' },
      { '@type': 'Thing', name: 'Outputs structurés' },
      { '@type': 'Thing', name: 'Ingénierie des prompts' },
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
      { '@type': 'Question', name: 'Qu\'est-ce que le prompting avec contraintes ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prompting avec contraintes est la pratique d\'ajouter des règles explicites — format, longueur, contenu et limites de sécurité — directement dans un prompt pour rendre les outputs IA prévisibles et réutilisables. Au lieu de « rédige un résumé », vous spécifiez : 150 mots, format JSON, pas de noms concurrents, doit inclure un appel à l\'action.' } },
      { '@type': 'Question', name: 'Quels sont les cinq types de contraintes ?', acceptedAnswer: { '@type': 'Answer', text: 'Les cinq principaux types de contraintes sont : (1) Structurel — en-têtes obligatoires, tableaux, JSON avec clés spécifiques. (2) Contenu — sections obligatoires, sujets interdits. (3) Style — ton, niveau de lecture, terminologie. (4) Longueur — limites de mots ou de caractères. (5) Sécurité — éviter les conseils médicaux, données personnelles, conclusions juridiques.' } },
      { '@type': 'Question', name: 'Comment forcer un modèle à produire du JSON valide ?', acceptedAnswer: { '@type': 'Answer', text: 'Fournissez le schéma JSON exact dans le prompt : « Retournez JSON exactement dans ce format : { \"finding\": \"...\" } ». Combinez avec « Produisez uniquement JSON, pas d\'autre texte. » GPT-4o supporte aussi un mode JSON via l\'API qui applique le JSON valide au niveau API.' } },
      { '@type': 'Question', name: 'Le prompting avec contraintes fonctionne-t-il sur GPT-4o, Claude et Gemini ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — tous les trois supportent le prompting avec contraintes. GPT-4o et Claude Sonnet 4.6 respectent les contraintes de format stricte (JSON, tableaux, limites de mots) avec ~95% de conformité sur les prompts bien formés. Tous les trois supportent aussi Structured Outputs au niveau API pour ~100% de conformité de schéma JSON. Gemini 3.1 Pro obtient des résultats similaires mais peut interpréter différemment les contraintes ambiguës. Testez toujours sur plusieurs modèles.' } },
      { '@type': 'Question', name: 'Quelle est la différence entre prompting avec contraintes et prompting few-shot ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prompting avec contraintes ajoute des règles explicites en texte (format, longueur, restrictions de contenu). Le prompting few-shot fournit des exemples qui montrent implicitement ce qu\'il faut produire. Les deux fonctionnent bien ensemble : utilisez un exemple few-shot pour montrer le pattern de sortie, puis ajoutez des contraintes pour une application stricte.' } },
      { '@type': 'Question', name: 'Quand ne PAS utiliser le prompting avec contraintes ?', acceptedAnswer: { '@type': 'Answer', text: 'Évitez les contraintes structurelles sur les tâches créatives ouvertes (brainstorming, idéation, fiction). Sur-contraindre les prompts créatifs produit du contenu formulaire et de faible qualité. Utilisez les contraintes de ton et de style pour les tâches créatives, mais autorisez la liberté structurelle.' } },
      { '@type': 'Question', name: 'Combien de contraintes pouvez-vous empiler dans un prompt ?', acceptedAnswer: { '@type': 'Answer', text: 'Pratiquement, 3–5 contraintes fonctionnent bien. Au-delà de 5–6, les modèles commencent à ignorer silencieusement les contraintes de faible priorité sans avertissement. Si vous avez besoin de plus de 5, listez-les par ordre de priorité et indiquez explicitement : « Si les contraintes entrent en conflit, appliquez-les dans cet ordre : (1) sécurité, (2) format, (3) longueur. »' } },
      { '@type': 'Question', name: 'Le prompting avec contraintes ralentit-il les réponses des LLM ?', acceptedAnswer: { '@type': 'Answer', text: 'Légèrement. Une contrainte stricte limite l\'espace de recherche du modèle, ce qui peut accélérer la génération. Mais l\'intention explicite du modèle (« Parse this into JSON ») ajoute un peu de latence. Dans la plupart des cas (< 100 ms), ce coût est acceptable pour la fiabilité.' } },
      { '@type': 'Question', name: 'Tous les modèles supportent-ils les contraintes ?', acceptedAnswer: { '@type': 'Answer', text: 'Les modèles modernes (GPT-4o, Claude Sonnet 4.6, Llama 3.2, Mistral) supportent bien les contraintes de format et les énumérés. Mais plus la contrainte est complexe (schémas imbriqués profonds, logique sémantique), plus la conformité varie. Les petits modèles (< 7B) sont moins fiables. Testez votre modèle et vos cas d\'usage spécifiques.' } },
      { '@type': 'Question', name: 'Devrais-je mettre la contrainte dans le prompt système ou utilisateur ?', acceptedAnswer: { '@type': 'Answer', text: 'Les deux fonctionnent, mais avec des différences : le prompt système (instructions) donne une conformité plus cohérente et globale. Le prompt utilisateur (contenu) permet des contraintes spécifiques au message. Meilleure pratique : mettez la contrainte générale (format, type) dans le prompt système ; mettez les contraintes spécifiques au contexte (données, limites) dans le prompt utilisateur.' } },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment intégrer le prompting avec contraintes',
    inLanguage: 'fr',
    description: 'Guide 5 étapes pour appliquer les contraintes d\'output dans les prompts pour GPT-4o, Claude Sonnet 4.6 et Gemini 3.1 Pro.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Identifiez les contraintes de sortie', text: 'Identifiez les contraintes pertinentes pour votre tâche : longueur, format, vocabulaire, portée, sécurité.' },
      { '@type': 'HowToStep', position: 2, name: 'Utilisez le langage de contrainte explicite', text: 'Énoncez les contraintes en utilisant « doit », « ne doit pas » et « seulement » — jamais « essayez » ou « visez ».' },
      { '@type': 'HowToStep', position: 3, name: 'Fournissez un exemple de format', text: 'Pour les contraintes de format, montrez le schéma exact inline : clés JSON, structure Markdown ou noms de champs.' },
      { '@type': 'HowToStep', position: 4, name: 'Listez les inclusions et exclusions de contenu', text: 'Énumérez explicitement ce qu\'il faut inclure et exclure par sujet, terminologie et type de données.' },
      { '@type': 'HowToStep', position: 5, name: 'Testez sur les cas limites', text: 'Générez 10 outputs. Vérifiez : tous respectent-ils la limite de longueur ? Tous utilisent-ils le format correct ? Y a-t-il des violations ?' },
    ],
  },
  sections: {
    tldr: {
      isTldr: true,
      items: [
        '**Le prompting avec contraintes** ajoute des règles explicites (structure, contenu, longueur, sécurité) à un prompt pour que les outputs IA restent prévisibles sur plusieurs exécutions.',
        '5 types de contraintes : structurel, contenu, style, longueur, sécurité — combinez-les pour un contrôle maximum.',
        'Utilisez un langage obligatoire : **« doit », « ne doit pas », « seulement ».** Les directives souples comme « essayez » sont souvent ignorées.',
        'Les contraintes de format fonctionnent mieux avec un exemple : montrez au modèle le schéma JSON exact ou la structure Markdown que vous avez besoin.',
        'GPT-4o, Claude Sonnet 4.6 et Gemini 3.1 Pro supportent tous le prompting avec contraintes — y compris l\'enforcement au niveau API via Structured Outputs — mais réagissent différemment aux contraintes au niveau prompt. Testez sur plusieurs modèles.',
        'Les prompts contraints économisent du temps d\'examen : les outputs qui correspondent déjà à votre structure requise nécessitent moins de correction humaine.',
        'Utilisez [PromptQuorum](https://www.promptquorum.com/?lang=fr) pour tester les prompts contraints sur plusieurs modèles côte à côte et comparer la conformité aux contraintes.',
      ],
    },
    quickFacts: {
      id: 'quick-facts',
      title: 'Faits rapides',
      items: [
        '**5 types de contraintes :** Structurel, Contenu, Style, Longueur, Sécurité',
        '**Conformité des modèles :** GPT-4o et Claude Sonnet 4.6 respectent les contraintes strictes avec ~95% sur les prompts bien formés',
        '**Empilage optimal :** 3–5 contraintes fonctionnent bien ; au-delà de 5–6, les modèles abandonnent silencieusement les contraintes de faible priorité',
        '**Cohérence de sortie JSON :** Sans exemple de schéma, les modèles produisent des noms de clés incohérents à travers les exécutions',
        '**Méthodologie de test :** Générez 10 outputs pour vérifier que tous respectent la longueur, le format et les limites de contenu',
        '**Temps de configuration :** Première validation de contrainte = 10–15 min ; les modèles réutilisables économisent 30+ min par tâche',
      ],
    },
    whatIsConstrained: {
      title: 'Qu\'est-ce que le prompting avec contraintes ?',
      content: [
        'Le prompting avec contraintes signifie indiquer au modèle exactement comment forcer sa réponse dans un schéma prédéfini. Au lieu de demander : « Qu\'en penses-tu ? », vous demandez : « Réponds en JSON avec les champs : { sentiment: "positif"|"négatif"|"neutre", confiance: 0–1, raison: string } ».',
        'Les contraintes opèrent à trois niveaux :',
        '1. **Niveau format** : force le modèle à utiliser JSON, XML, Markdown, CSV, ou tout autre format structuré.',
        '2. **Niveau schéma** : impose une structure précise et des types (nombres, énumérés, listes imbriquées).',
        '3. **Niveau sémantique** : contraint le contenu : « Ne dépasse pas 100 mots », « Utilise uniquement les entités mentionnées dans ce document ».'
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: 'Les contraintes transforment un modèle non structuré en véritable API structurée.'
        },
        {
          type: 'in-plain-terms',
          text: 'Au lieu de gérer du texte libre, vous récupérez des réponses validées, parsables, et prévisibles.'
        }
      ]
    },
    whyItMatters: {
      title: 'Pourquoi le prompting avec contraintes est crucial',
      content: [
        'Sans contraintes, les LLM génèrent du texte libre qui varie d\'une exécution à l\'autre. Votre application ne peut pas faire confiance à la structure ou au contenu. Avec les contraintes, les modèles restent dans les limites que vous avez définies.',
        'Les principaux avantages sont :',
        '• **Fiabilité** : Chaque réponse respecte le schéma. Pas de surprise, pas de champ manquant.',
        '• **Parsabilité** : Du JSON valide signifie qu\'il peut être traité par du code sans exception.',
        '• **Reproductibilité** : Les mêmes entrées, le même modèle, les mêmes contraintes → mêmes formats de sortie.',
        '• **Intégration en chaîne** : Un LLM construit sa réponse structurée. L\'étape suivante la traite directement.',
        '• **Reduction des hallucinations** : Une contrainte très stricte limite la place pour que le modèle invente ou s\'écarte du sujet.'
      ]
    },
    typesOfConstraints: {
      title: 'Types de contraintes de prompting',
      content: 'Les contraintes varient en rigueur et en complexité. Voici les principales :',
      tableFormat: true,
      columns: ['Type', 'Description', 'Exemple'],
      rows: [
        {
          'Type': 'Format fixe',
          'Description': 'Sortie dans un format machine-lisible (JSON, XML, YAML, CSV)',
          'Exemple': '{ "sentiment": "positif", "score": 0.85 }'
        },
        {
          'Type': 'Énumérations',
          'Description': 'Réponse limitée à un ensemble fini de valeurs',
          'Exemple': 'Sentiment ∈ ["positif", "négatif", "neutre"]'
        },
        {
          'Type': 'Limites de longueur',
          'Description': 'Max N mots, caractères, ou tokens',
          'Exemple': 'Explication en ≤ 100 mots'
        },
        {
          'Type': 'Schémas imbriqués',
          'Description': 'Structure complexe avec types imbriqués (listes d\'objets, objets optionnels)',
          'Exemple': 'Array de { id: int, label: string, children: [...] }'
        },
        {
          'Type': 'Contraintes sémantiques',
          'Description': 'Le contenu doit répondre à une logique applicative (références valides, pas de self-reference)',
          'Exemple': 'Ne recommande que les produits de la liste fournie'
        }
      ]
    },
    example: {
      title: 'Exemple : Classification avec contraintes',
      content: 'Considérez ce cas d\'usage : vous avez un ticket client et vous voulez qu\'un LLM le classe automatiquement.',
      blockquote: 'Exemple de prompt sans contrainte : « Classe ce ticket client. » → Le modèle répond : « Ce ticket parle d\'une demande d\'accès client. Il semble urgent. Voici mes suggestions ... »',
      blockquoteSource: 'Output non structuré – difficile à parser',
      items: [
        'Format : texte libre',
        'Contenu : vous devez analyser manuellement ou utiliser une seconde étape de parsing',
        'Coût computationnel : deux appels, plus de tokens, plus d\'erreurs'
      ]
    },
    whenToUse: {
      title: 'Quand utiliser le prompting avec contraintes',
      content: [
        'Le prompting avec contraintes est idéal pour les cas où votre application dépend d\'une structure de sortie prévisible.',
        'Cas d\'usage appropriés :'
      ],
      numberedItems: [
        'Classification de texte : étiqueter des emails, tickets, documents avec un ensemble fermé d\'étiquettes',
        'Extraction de données structurées : extraire des noms, des dates, des prix à partir de documents',
        'Génération de contenu validé : générer des descriptions de produits qui respectent un schéma marketing',
        'API conversationnelles : transformer une conversation libre en commandes structurées',
        'Scoring/notation : générer des scores numériques avec explications dans un format précis',
        'Traitement d\'images et multimodal : forcer un modèle vision à décrire une image selon un schéma (alt-text structuré)'
      ]
    },
    howPQSupports: {
      title: 'Comment PromptQuorum supporte le prompting avec contraintes',
      content: 'PromptQuorum inclut des outils natifs pour tester et valider les contraintes à l\'échelle :',
      items: [
        '**Mode de test structuré** : Testez votre prompt avec des contraintes contre plusieurs modèles (GPT-4o, Claude, Llama 3.2) et vérifiez que chaque réponse respecte le schéma',
        '**Validation de schéma** : Définissez un schéma JSON ou une grammaire. PromptQuorum analyse chaque réponse et rapporte les violations',
        '**Dispatch avec consensus** : Envoyez le même prompt avec contraintes à plusieurs modèles. PromptQuorum collecte les réponses structurées et détecte les divergences',
        '**Monitoring de compliance** : Trackez en production : combien de réponses respectent le schéma ? Quels modèles divergent ? Quels champs sont souvent mal structurés ?',
        '**Debugging interactif** : Si une réponse viole la contrainte, PromptQuorum montre exactement où et pourquoi, avec suggestions de correction'
      ]
    },
    howToStart: {
      title: 'Intégrer le prompting avec contraintes : 5 étapes',
      numberedItems: [
        {
          title: 'Définissez votre schéma',
          whyItMatters: 'Avant d\'écrire le prompt, clarifiez la structure : quels champs ? Types ? Champs obligatoires vs optionnels ? Énumérés fermés ou ouverts ?'
        },
        {
          title: 'Écrivez le prompt avec la contrainte explicite',
          whyItMatters: 'Dites au modèle exactement comment structurer la réponse. Exemple : « Réponds toujours en JSON valide avec : { "classe": "urgent"|"normal"|"faible", "raison": string, "actions": string[] } »'
        },
        {
          title: 'Testez avec plusieurs modèles',
          whyItMatters: 'Llama, Mistral, GPT-4o, Claude réagissent différemment aux contraintes. Testez chacun. Mesurez le taux de compliance (combien de réponses sont valides ?)'
        },
        {
          title: 'Validez chaque réponse en production',
          whyItMatters: 'Parsez le JSON. Si invalide, loguez l\'erreur, re-invoquez le modèle avec feedback (« Votre réponse n\'était pas du JSON valide : ... »), ou basculez sur un modèle plus fiable'
        },
        {
          title: 'Monitez les violations',
          whyItMatters: 'Trackez les réponses qui violent le schéma. Ajustez le prompt, le modèle, ou la contrainte basé sur les patterns de violation réels'
        }
      ]
    },
    commonMistakes: {
      title: 'Erreurs courantes avec les contraintes',
      mistakes: [
        {
          mistake: 'Contrainte trop vague',
          problem: 'Dire « Sois bref » ou « Fais attention à la structure » n\'est pas assez précis. Le modèle ignore ou mal interprète.',
          fix: 'Spécifiez : « Réponse ≤ 100 mots », « JSON avec schéma : { champ1: type, champ2: type } »'
        },
        {
          mistake: 'Stacking excessif de contraintes',
          problem: 'Ajouter 10 contraintes à la fois rend les instructions incompréhensibles. Le modèle oublie ou entre en conflit.',
          fix: 'Gardez 2–3 contraintes principales. Testez chacune en isolation. Fusionnez progressivement.'
        },
        {
          mistake: 'Pas de tests avec cas limites',
          problem: 'Votre contrainte passe avec des textes simples mais échoue avec des Unicode, des listes vides, des cas extrêmes.',
          fix: 'Testez : zéro éléments, 1000 éléments, caractères spéciaux, langues non-latines, entrées vides'
        },
        {
          mistake: 'Ignorer les divergences entre modèles',
          problem: 'Un modèle respecte parfaitement le JSON. Un autre ajoute des commentaires. GPT-4o enroule la réponse dans ``` ```.',
          fix: 'Testez votre contrainte avec tous les modèles que vous utiliserez. Ajustez le prompt ou choisissez un seul modèle si la divergence est inacceptable.'
        },
        {
          mistake: 'Oublier la gestion des erreurs de parsing',
          problem: 'Vous supposez que JSON est toujours valide. La production le démontre faux. Crash silencieux ou exception.',
          fix: 'Encapsulez le parsing dans try-catch. Loguez l\'erreur. Relancez avec feedback : « Votre JSON était invalide : ... »'
        }
      ]
    },
    relatedReading: {
      title: 'Lectures complémentaires',
      items: [
        '[Grammars LLM : Forcer la Structure de Sortie](/fr/prompt-engineering/llm-grammars) — Approches formelles au-delà des contraintes',
        '[Chain-of-Thought vs. Structured Reasoning](/fr/prompt-engineering/cot-structured-reasoning) — Quand utiliser lequel',
        '[Fine-Tuning pour la Conformité de Sortie](/fr/prompt-engineering/fine-tuning-for-structured-output) — Alternatives au prompting',
        '[Validation d\'Outputs LLM : Schémas et Tests](/fr/prompt-engineering/llm-output-validation) — Cadre complet de validation',
        '[PromptQuorum : Dispatch Multi-Modèle](/fr/features/multi-model-dispatch) — Comment tester les contraintes à l\'échelle',
        '[API Conversationnelles avec LLM](/fr/local-llms/conversational-apis) — Cas d\'usage réel : structures contrôlées dans les chatbots'
      ]
    },
    faqSection: {
      title: 'Questions fréquentes',
      faqs: [
        {
          q: 'Les contraintes ralentissent-elles les réponses des LLM ?',
          a: 'Légèrement. Une contrainte stricte limite l\'espace de recherche du modèle, ce qui peut accélérer la génération. Mais l\'intention explicite du modèle (« Parse this into JSON ») ajoute un peu de latence. Dans la plupart des cas (< 100 ms), ce coût est accepté pour la fiabilité. Mesurez votre cas d\'usage.'
        },
        {
          q: 'Tous les modèles supportent-ils les contraintes ?',
          a: 'Les modèles modernes (GPT-4o, Claude 3.5 Sonnet, Llama 3.2, Mistral) supportent bien les contraintes de format et les énumérés. Mais plus la contrainte est complexe (schémas imbriqués profonds, logique sémantique), plus la compliance varie. Les petits modèles (< 7B) sont moins fiables. Testez votre modèle et cas d\'usage spécifiques.'
        },
        {
          q: 'Dois-je mettre la contrainte dans le prompt système ou utilisateur ?',
          a: 'Les deux fonctionnent, mais avec des différences : system prompt (instructions) donne une compliance plus cohérente et globale. User prompt (contenu) permet des contraintes spécifiques au message. Meilleure pratique : mettez la contrainte générale (format, type) dans le system prompt ; mettez les contraintes spécifiques au contexte (données, limites) dans le user prompt.'
        },
        {
          q: 'Que faire si le modèle ignore ma contrainte ?',
          a: 'Escalade graduée : 1) Reformulez la contrainte plus explicitement (au lieu de « Sois structuré », « Réponds TOUJOURS en JSON valide »). 2) Ajouter un exemple au prompt : « Voici un exemple : { sentiment: \'positif\', score: 0.9 } ». 3) Changez de modèle vers un plus performant (GPT-4o au lieu de 3.5, Llama 70B au lieu de 8B). 4) Fine-tuning sur des exemples structurés (coûteux mais fiable à l\'échelle).'
        },
        {
          q: 'Les contraintes affectent-elles la qualité du contenu ?',
          a: 'Oui, mais positivement : une contrainte bien conçue réduit le bruit et force le modèle à se concentrer. Une contrainte mal conçue (trop restrictive) peut réduire la créativité ou ignorer le contexte. Pour du contenu créatif (fiction, copywriting), gardez les contraintes light (longueur, ton). Pour de la données (extraction, classification), rendez les contraintes strictes.'
        },
        {
          q: 'Puis-je combiner le prompting avec contraintes et le fine-tuning ?',
          a: 'Absolument, et c\'est une meilleure pratique : fine-tuning prépare le modèle à comprendre votre domaine et votre style. Les contraintes forcent chaque réponse dans le format exact que vous besoin. Ensemble, ils donnent la plus haute fiabilité et qualité.'
        },
        {
          q: 'La CNIL pose-t-elle des restrictions sur les contraintes d\'IA dans les données professionnelles ?',
          a: 'La CNIL recommande le recours à des solutions d\'IA locales ou contrôlées pour le traitement de données professionnelles sensibles (données financières, médicales, juridiques). Les contraintes de format aident à isoler ou anonymiser les données sensibles dans les prompts, mais elles ne remplacent pas une architecture complète de protection des données. Consultez la CNIL si vous traitez des données sensibles.'
        }
      ]
    },
    sources: {
      title: 'Sources et références',
      items: [
        '[OpenAI : Function Calling et Structured Outputs](https://platform.openai.com/docs/guides/function-calling) — Official docs',
        '[Anthropic : Constrained Outputs with Claude](https://docs.anthropic.com) — Constrained modes documentation',
        '[Guidance : Grammar-based Output Control](https://github.com/guidance-ai/guidance) — Open-source grammar library'
      ]
    }
  }
},
  ja: {
  theme: 'プロンプティング技法',
  title: '制約付きプロンプティング：完全ガイド',
  seoTitle: '制約付きプロンプティング：構造化AIの完全ガイド',
  intro: '制約付きプロンプティングとは、LLMに厳格なルールを強制する技法です。特定の出力形式、長さの制限、事前定義されたスキーマの遵守を指示します。本番環境で信頼性が高く、再現可能な結果を得たいときに有効です。',
  metaDescription: '制約付きプロンプティングでLLM出力を制御。JSONフォーマット強制、スキーマ検証、本番環境での信頼性確保。GPT-4o、Claude、Geminiに対応。',
  leadAnswerBlock: '制約付きプロンプティングは、LLMが特定の形式・内容・長さで応答するよう強制する技法です。JSONスキーマを指定することで、解析可能で予測可能な出力を保証し、本番環境での信頼性と再現性を大幅に向上させます。金融、医療、法務などの規制環境でも安全性が確保でき、データ抽出や分類タスクを自動化するのに最適な方法です。',
  publishDate: '2026-01-20',
  dateModified: '2026-04-28',
  lastFactChecked: '2026-04-28',
  readTime: '6分で読める',
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-26',
  educationalLevel: 'Advanced',
  audience: 'LLMを本番環境に統合する開発者',
  primaryTerm: '制約付きプロンプティング',
  aboutTopics: ['プロンプトエンジニアリング', 'AIモデルの信頼性', 'アウトプット検証'],
  sections: {
    tldr: {
      isTldr: true,
      title: '重要ポイント',
      numberedItems: [
        'フォーマット制約により、モデルはJSONやXMLなど構造化出力を生成します',
        '長さ制限とスキーマは幻覚や内容の逸脱を減らします',
        'Llama 3.2やMistral 7Bなどのオープンソース、GPT-4oやClaudeなどの商用モデルが制約に対応しており、対応レベルに違いがあります',
        'システムプロンプトまたはユーザープロンプトで制約を明確に指定するほど効果が高まります',
        'PromptQuorumなどのツールで、制約遵守を大規模にテストし検証できます',
        '一般的なミス：制約が曖昧、ルールの過度な積み重ね、エッジケースのテスト不足',
        '本番環境の活用例：データ抽出、意図分類、検証済みコンテンツ生成、自動サポート'
      ]
    },
    quickFacts: {
      title: 'クイックファクト',
      numberedItems: [
        '制約の種類：フォーマット（JSON/XML）、列挙型（限定値）、長さ制限、ネストされたスキーマ、セマンティック',
        'モデルの対応：GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral はすべて制約に対応。対応レベルは異なる',
        'ベストプラクティス：システムプロンプトに一般的制約を配置。ユーザープロンプトにコンテキスト固有制約を配置',
        'JSON出力の一貫性：適切に設計された制約により、実行ごとに有効でスキーマ準拠のJSONが保証される',
        'テスト方法：単一モデルで5回テスト。その後、別モデルで検証。エッジケース（空リスト、Unicode）をテスト',
        'セットアップ時間：5分で基本的な制約。30分で本番対応な検証スイート'
      ]
    },
    whatIsConstrained: {
      title: '制約付きプロンプティングとは',
      content: [
        '制約付きプロンプティングは、モデルに出力スキーマを明確に強制することです。「どう思いますか？」と聞く代わりに、「JSONで返してください。フィールド構成：{ sentiment: "positive"|"negative"|"neutral", confidence: 0–1, reason: string }」と指定します。',
        '制約は3つのレベルで機能します。',
        '1. **フォーマットレベル**：JSON、XML、Markdown、CSVなど特定の形式を強制',
        '2. **スキーマレベル**：正確な構造と型を定義（数値、列挙型、ネストされたリスト）',
        '3. **セマンティックレベル**：コンテンツを制限（「100語以下」、「このドキュメントのエンティティのみ使用」）'
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: '制約は、非構造化モデルを実質的なAPI化します。'
        },
        {
          type: 'in-plain-terms',
          text: 'フリーテキストを扱う代わりに、検証済みで解析可能で予測可能なレスポンスを得られます。'
        }
      ]
    },
    whyItMatters: {
      title: 'なぜ制約付きプロンプティングが重要か',
      content: [
        '制約がないと、LLMは実行ごとに異なる形式や内容のテキストを生成します。アプリケーションは構造やコンテンツを信頼できません。制約があれば、モデルは定義した範囲内に留まります。',
        '主な利点は以下です。',
        '• **信頼性**：各レスポンスがスキーマに準拠。予期しない結果や欠落フィールドがない',
        '• **解析可能性**：有効なJSONはコード例外なく処理可能',
        '• **再現性**：同じ入力、同じモデル、同じ制約 → 同じ出力形式',
        '• **チェーン統合**：LLMが構造化レスポンスを生成。次のステップが直接処理可能',
        '• **幻覚削減**：厳格な制約により、モデルの発明や脱線する余地がなくなります'
      ]
    },
    typesOfConstraints: {
      title: '制約付きプロンプティングの種類',
      content: '制約は厳密さと複雑さが異なります。主な種類は以下です。',
      tableFormat: true,
      columns: ['種類', '説明', '例'],
      rows: [
        {
          '種類': '固定フォーマット',
          '説明': 'JSON、XML、YAML、CSVなど機械可読形式での出力',
          '例': '{ "sentiment": "positive", "score": 0.85 }'
        },
        {
          '種類': '列挙型',
          '説明': '有限の値セットに制限されたレスポンス',
          '例': 'sentiment ∈ ["positive", "negative", "neutral"]'
        },
        {
          '種類': '長さ制限',
          '説明': '最大N単語、文字、またはトークン',
          '例': '説明100語以下'
        },
        {
          '種類': 'ネストされたスキーマ',
          '説明': '複雑な構造、ネストされた型（オブジェクト配列、オプショナルオブジェクト）',
          '例': '{ id: int, label: string, children: [...] } の配列'
        },
        {
          '種類': 'セマンティック制約',
          '説明': 'アプリケーションロジックに従う内容（有効な参照、自己参照なし）',
          '例': '提供リストの製品のみ推奨'
        }
      ]
    },
    example: {
      title: '例：制約ありのサポートチケット分類',
      content: 'ユースケース：顧客サポートチケットをLLMで自動分類します。',
      blockquote: '制約なしの例：「このチケットを分類してください」→ 出力：「このチケットはクライアントアクセス要求について述べています。緊急のようです。提案は…」',
      blockquoteSource: '非構造化出力 – 解析困難',
      items: [
        'フォーマット：フリーテキスト',
        'コンテンツ：手動解析または第2段階の解析が必要',
        'コスト：2回のAPI呼び出し、トークン数増加、エラー増加'
      ]
    },
    whenToUse: {
      title: 'いつ制約付きプロンプティングを使うか',
      content: [
        '制約付きプロンプティングは、アプリケーションが予測可能な出力構造に依存する場合に最適です。',
        '適切なユースケース：'
      ],
      numberedItems: [
        'テキスト分類：メール、チケット、ドキュメントを限定ラベルセットで自動タグ付け',
        'データ抽出：名前、日付、価格をドキュメントから抽出',
        '検証済みコンテンツ生成：マーケティングスキーマに準拠した製品説明生成',
        '会話型API：フリートークンを構造化コマンドに変換',
        'スコアリング：数値スコアと説明を正確なフォーマットで生成',
        'マルチモーダル処理：画像を説明スキーマに従わせる（構造化alt-text）'
      ]
    },
    howPQSupports: {
      title: 'PromptQuorumが制約付きプロンプティングをサポートする方法',
      content: '「PromptQuorum」は、制約テストと検証を大規模に実行するネイティブツールを備えています。',
      items: [
        '**構造化テストモード**：複数モデル（GPT-4o、Claude、Llama 3.2）でスキーマ準拠をテスト',
        '**スキーマ検証**：JSONスキーマを定義。各レスポンスの違反を検出・報告',
        '**マルチモデルディスパッチ**：複数モデルに同じ制約付きプロンプトを送信。構造化レスポンスを収集、違いを検出',
        '**本番監視**：スキーマ準拠率をトラッキング。どのモデルが逸脱？どのフィールドが構造化されていない？',
        '**インタラクティブデバッグ**：制約違反を検出したら、その場所と理由を表示。改善提案を提供'
      ]
    },
    howToStart: {
      title: '制約付きプロンプティング統合：5ステップ',
      numberedItems: [
        {
          title: 'スキーマを定義',
          whyItMatters: 'プロンプトを書く前に、構造を明確に。フィールド？型？必須vs オプション？クローズド or オープン列挙？'
        },
        {
          title: '制約を明確に指定',
          whyItMatters: 'モデルに正確に構造化方法を伝えます。例：「JSON形式で返してください。必須フィールド：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }」'
        },
        {
          title: '複数モデルでテスト',
          whyItMatters: 'Llama、Mistral、GPT-4o、Claudeは制約に異なる反応。各モデルをテスト。準拠率を測定。'
        },
        {
          title: '本番で各レスポンスを検証',
          whyItMatters: 'JSONをパース。無効な場合、エラーをログして再実行（フィードバック付き）。または信頼性の高いモデルに切り替え。'
        },
        {
          title: '違反を監視',
          whyItMatters: 'スキーマ違反をトラッキング。実際の違反パターンに基づいてプロンプト、モデル、制約を調整。'
        }
      ]
    },
    apiLevelEnforcement: {
      title: 'APIレベルの制約強制',
      content: '多くのLLM APIプロバイダーは、プロンプトレベルの制約に加えて、APIレベルでの制約強制もサポートしています。これらは、プロバイダーのシステム側でスキーマ準拠を検証し、無効な応答を拒否します。',
      items: [
        '**OpenAI：関数呼び出しと構造化出力**：JSON Schema を定義。モデルはスキーマに準拠した構造化出力を生成。無効な応答は関数呼び出しレイヤーで検証。https://platform.openai.com/docs/guides/function-calling',
        '**Anthropic Claude：制約付き出力**：JSON スキーマまたは XML タグで形式を指定。モデルは絶対に指定形式から逸脱しません。https://docs.anthropic.com',
        '**Google Generative AI：Structured Output**：スキーマを API リクエストに含める。モデルは常にスキーマに準拠した JSON を返す。https://ai.google.dev/docs'
      ],
      callouts: [
        {
          type: 'tip',
          label: 'ベストプラクティス',
          text: 'API レベルの制約は、プロンプトレベルの制約と組み合わせる。プロンプトは意図を明確にし、APIスキーマは厳格に強制。2 層防御で、信頼性と透明性を最大化。'
        }
      ]
    },
    regionalContext: {
      title: '規制環境での制約付きプロンプティング',
      content: '制約付きプロンプティングは、データ保護と規制コンプライアンスが必須の環境で特に価値があります。日本およびアジア太平洋地域では以下が重要です。',
      items: [
        '**日本：METI AI 統治ガイドライン (2024)**：経済産業省（METI）は、エンタープライズ AI 導入におけるフレームワークを提示。制約付きプロンプティングは、本番環境での AI 安全性とアウトプット検証を確保するのに有効。金融、医療、法務機関は METI ガイドラインに従う。',
        '**アジア太平洋地域：データ越境と保護**：各国（シンガポール、オーストラリア、韓国）でデータ保護法が施行。制約によって個人情報や機密データをプロンプトとアウトプットから除外できる。ローカル推論とデータ残存要件の遵守。',
        '**企業コンプライアンス：監査と説明責任**：規制業界では、AI の決定を監査可能にし、説明責任が必須。制約により、モデル出力を一貫性のある、検証可能な形式に保つことができる。'
      ]
    },
    commonMistakes: {
      title: '制約付きプロンプティングの一般的なミス',
      mistakes: [
        {
          mistake: '制約が曖昧',
          problem: '「簡潔に」「構造的に」では不十分。モデルは無視するか誤釈。',
          fix: '「100字以下」、「JSON：{ field1: type, field2: type }」と明確に指定'
        },
        {
          mistake: 'ルールの過度な積み重ね',
          problem: '10個の制約を同時に指定するとモデルが混乱。忘れるまたは矛盾。',
          fix: '2～3個の主要制約に留める。各制約を分離テスト。段階的に統合。'
        },
        {
          mistake: 'エッジケーステストなし',
          problem: '単純テキストでは成功。Unicode、空リスト、極端な場合で失敗。',
          fix: '確認：0要素、1000要素、特殊文字、非ラテン文字、空入力'
        },
        {
          mistake: 'モデル間の違いを無視',
          problem: 'JSONを完全に守るモデル。別のモデルがコメント追加。GPT-4oは```で囲む。',
          fix: '使用するすべてのモデルで制約テスト。違いが許容不可ならモデル固定。'
        },
        {
          mistake: 'パース例外処理を忘れる',
          problem: 'JSONは常に有効と仮定。本番でクラッシュ。',
          fix: 'try-catchでパース。エラーをログ。フィードバック付きで再実行：「JSONが無効：...」'
        }
      ]
    },
    relatedReading: {
      title: '参考資料',
      items: [
        '[LLM文法：出力構造の強制](/ja/prompt-engineering/llm-grammars) — 制約を超えた形式的アプローチ',
        '[Chain-of-Thoughtと構造化推論](/ja/prompt-engineering/cot-structured-reasoning) — 使い分け',
        '[構造化出力向けファインチューニング](/ja/prompt-engineering/fine-tuning-for-structured-output) — プロンプティングの代替手段',
        '[LLMアウトプット検証：スキーマとテスト](/ja/prompt-engineering/llm-output-validation) — 総合検証フレームワーク',
        '[PromptQuorum：マルチモデルディスパッチ](/ja/features/multi-model-dispatch) — 大規模制約テスト',
        '[会話型API with LLM](/ja/local-llms/conversational-apis) — 実例：チャットボットの制御出力'
      ]
    },
    faqSection: {
      title: 'よくある質問',
      faqs: [
        {
          q: '制約によってLLMのレスポンスが遅くなる？',
          a: '若干遅くなる可能性があります。厳格な制約は検索空間を制限し、生成を加速する場合もあります。ただし、モデルに「JSONをパースする」という明示的な意図を指示すると若干のレイテンシが追加されます。ほとんどのケース（<100ms）でこのコストは信頼性のために許容されます。ユースケースを測定してください。'
        },
        {
          q: 'すべてのモデルが制約に対応している？',
          a: '最新モデル（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）はフォーマット制約と列挙型をよく対応しています。ただし、制約が複雑（深いネストスキーマ、複雑なセマンティックロジック）ほど対応レベルが変わります。小規模モデル（<7B）は信頼性が低い。自分のモデルとユースケースでテストしてください。'
        },
        {
          q: '制約はシステムプロンプトですか、ユーザープロンプトですか？',
          a: '両方機能しますが異なります。system prompt（指示）は全体的に一貫性が高く。user prompt（コンテンツ）はメッセージごとに特定の制約が可能。ベストプラクティス：一般的制約（フォーマット、型）はsystem promptに。コンテキスト固有制約（データ、制限）はuser promptに。'
        },
        {
          q: 'モデルが制約を無視したら？',
          a: '段階的対応：1) より明確に：「構造的に」→ 「常にJSON有効で返す」。2) 例を追加：「例：{ sentiment: \'positive\', score: 0.9 }」。3) より強力なモデルに切り替え（GPT-4oではなく3.5、Llama 70B vs 8B）。4) ファインチューニング（高コスト、本番環境で信頼性向上）。'
        },
        {
          q: '制約はコンテンツ品質に影響する？',
          a: 'はい、ただしポジティブに。よく設計された制約はノイズを減らし、モデルが集中します。設計不良（過度に制限）は創造性低下または文脈無視につながります。クリエイティブコンテンツ（小説、コピーライティング）は制約を軽く（長さ、トーン）に。データ作業（抽出、分類）は制約を厳格に。'
        },
        {
          q: '制約付きプロンプティングとファインチューニングを組み合わせられる？',
          a: 'はい、それがベストプラクティスです。ファインチューニングはモデルにドメインと自分のスタイルを学習させます。制約は各レスポンスを必要な正確なフォーマットに強制します。組み合わせると最高の信頼性と品質を実現します。'
        },
        {
          q: '日本の企業がAI制約を使う際の規制は？',
          a: '日本の経済産業省（METI）のAI統治ガイドラインでは、エンタープライズ展開でのAI使用に関する推奨事項を提供しています。制約付きプロンプティングは、本番システムでの安全性とコンプライアンスを確保するのに有効です。金融、医療、法務関連データを扱う場合はMETIのガイドラインと社内ポリシーを確認してください。'
        },
        {
          q: '金融機関向けの制約設計のコツは？',
          a: '金融データの安全性確保のため、プロンプトとアウトプットに個人情報や機密データが含まれないようにします。制約例：「顧客名、口座番号、取引額は出力しない」「承認済みの勘定科目のみ使用」。本番環境では監査ログとデータ保護を制約と組み合わせることが必須です。'
        },
        {
          q: '医療向け制約の例は？',
          a: '医療分野での制約例：「診断結果は示さない。治療提案も示さない。医学的言語は使わない。代わりに、患者は医師に相談すること推奨」。専門的判断はAIではなく医療専門家に委ねることが重要です。制約で医学的免責を明確に。'
        },
        {
          q: 'PromptQuorumで制約テストを自動化できる？',
          a: 'はい。PromptQuorumはスキーマ検証、複数モデル間の比較テスト、本番監視を自動化します。テストスイート設定により、毎回サンプルセットで制約遵守を確認。自動アラート。エラーパターン追跡で改善を指導します。'
        }
      ]
    },
    sources: {
      title: 'ソースと参考文献',
      items: [
        '[OpenAI：関数呼び出しと構造化出力](https://platform.openai.com/docs/guides/function-calling) — 公式ドキュメント',
        '[Anthropic：Claudeで制約出力](https://docs.anthropic.com) — 制約モード documentation',
        '[Guidance：文法ベース出力制御](https://github.com/guidance-ai/guidance) — オープンソース文法ライブラリ'
      ]
    }
  },
  toc: [
    { label: '重要ポイント', anchor: '#tldr' },
    { label: 'クイックファクト', anchor: '#quick-facts' },
    { label: '制約付きプロンプティングとは', anchor: '#what-is-constrained-prompting' },
    { label: 'なぜ制約付きプロンプティングが重要か', anchor: '#why-does-constrained-prompting-matter' },
    { label: 'どの種類の制約が使えるか', anchor: '#which-constraint-types-can-you-use' },
    { label: '例：制約ありのサポートチケット分類', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
    { label: 'いつ制約付きプロンプティングを使うか', anchor: '#when-should-you-use-constrained-prompting' },
    { label: 'PromptQuorumが制約付きプロンプティングをサポートする方法', anchor: '#how-does-promptquorum-support-constrained-prompting' },
    { label: '制約付きプロンプティング統合：5ステップ', anchor: '#how-to-use-constrained-prompting' },
    { label: 'APIレベルの制約強制', anchor: '#api-level-constraint-enforcement' },
    { label: '規制環境での制約付きプロンプティング', anchor: '#constrained-prompting-in-regulated-environments' },
    { label: '制約付きプロンプティングの一般的なミス', anchor: '#common-mistakes' },
    { label: '参考資料', anchor: '#related-reading' },
    { label: 'よくある質問', anchor: '#frequently-asked-questions' },
    { label: 'ソースと参考文献', anchor: '#sources' }
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': '制約付きプロンプティング：完全ガイド',
    'url': 'https://www.promptquorum.com/ja/prompt-engineering/constrained-prompting',
    'inLanguage': 'ja',
    'image': 'https://www.promptquorum.com/og-constrained-prompting-ja.png',
    'datePublished': '2026-01-20',
    'dateModified': '2026-04-28',
    'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'description': 'LLMの信頼性を高める制約付きプロンプティングを学びます。',
    'about': [
      { '@type': 'Thing', 'name': 'プロンプトエンジニアリング' },
      { '@type': 'Thing', 'name': 'AIモデルの信頼性' },
      { '@type': 'Thing', 'name': 'アウトプット検証' }
    ],
    'mentions': [
      { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' },
      { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
      { '@type': 'SoftwareApplication', 'name': 'Claude' },
      { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
      { '@type': 'SoftwareApplication', 'name': 'Mistral' }
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.tldr'] }
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'ja',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '制約によってLLMのレスポンスが遅くなる？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '若干遅くなる可能性があります。厳格な制約は検索空間を制限し、生成を加速する場合もあります。ただし、モデルに「JSONをパースする」という明示的な意図を指示すると若干のレイテンシが追加されます。ほとんどのケース（<100ms）でこのコストは信頼性のために許容されます。ユースケースを測定してください。'
        }
      },
      {
        '@type': 'Question',
        'name': 'すべてのモデルが制約に対応している？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '最新モデル（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）はフォーマット制約と列挙型をよく対応しています。ただし、制約が複雑（深いネストスキーマ、複雑なセマンティックロジック）ほど対応レベルが変わります。小規模モデル（<7B）は信頼性が低い。自分のモデルとユースケースでテストしてください。'
        }
      },
      {
        '@type': 'Question',
        'name': '制約はシステムプロンプトですか、ユーザープロンプトですか？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '両方機能しますが異なります。system prompt（指示）は全体的に一貫性が高く。user prompt（コンテンツ）はメッセージごとに特定の制約が可能。ベストプラクティス：一般的制約（フォーマット、型）はsystem promptに。コンテキスト固有制約（データ、制限）はuser promptに。'
        }
      },
      {
        '@type': 'Question',
        'name': 'モデルが制約を無視したら？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '段階的対応：1) より明確に：「構造的に」→ 「常にJSON有効で返す」。2) 例を追加：「例：{ sentiment: \'positive\', score: 0.9 }」。3) より強力なモデルに切り替え（GPT-4oではなく3.5、Llama 70B vs 8B）。4) ファインチューニング（高コスト、本番環境で信頼性向上）。'
        }
      },
      {
        '@type': 'Question',
        'name': '制約はコンテンツ品質に影響する？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'はい、ただしポジティブに。よく設計された制約はノイズを減らし、モデルが集中します。設計不良（過度に制限）は創造性低下または文脈無視につながります。クリエイティブコンテンツ（小説、コピーライティング）は制約を軽く（長さ、トーン）に。データ作業（抽出、分類）は制約を厳格に。'
        }
      },
      {
        '@type': 'Question',
        'name': '制約付きプロンプティングとファインチューニングを組み合わせられる？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'はい、それがベストプラクティスです。ファインチューニングはモデルにドメインと自分のスタイルを学習させます。制約は各レスポンスを必要な正確なフォーマットに強制します。組み合わせると最高の信頼性と品質を実現します。'
        }
      },
      {
        '@type': 'Question',
        'name': '日本の企業がAI制約を使う際の規制は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '日本の経済産業省（METI）のAI統治ガイドラインでは、エンタープライズ展開でのAI使用に関する推奨事項を提供しています。制約付きプロンプティングは、本番システムでの安全性とコンプライアンスを確保するのに有効です。金融、医療、法務関連データを扱う場合はMETIのガイドラインと社内ポリシーを確認してください。'
        }
      },
      {
        '@type': 'Question',
        'name': '金融機関向けの制約設計のコツは？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '金融データの安全性確保のため、プロンプトとアウトプットに個人情報や機密データが含まれないようにします。制約例：「顧客名、口座番号、取引額は出力しない」「承認済みの勘定科目のみ使用」。本番環境では監査ログとデータ保護を制約と組み合わせることが必須です。'
        }
      },
      {
        '@type': 'Question',
        'name': '医療向け制約の例は？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '医療分野での制約例：「診断結果は示さない。治療提案も示さない。医学的言語は使わない。代わりに、患者は医師に相談すること推奨」。専門的判断はAIではなく医療専門家に委ねることが重要です。制約で医学的免責を明確に。'
        }
      },
      {
        '@type': 'Question',
        'name': 'PromptQuorumで制約テストを自動化できる？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'はい。PromptQuorumはスキーマ検証、複数モデル間の比較テスト、本番監視を自動化します。テストスイート設定により、毎回サンプルセットで制約遵守を確認。自動アラート。エラーパターン追跡で改善を指導します。'
        }
      }
    ]
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'inLanguage': 'ja',
    'name': '制約付きプロンプティング統合：5ステップ',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': 'スキーマを定義',
        'text': 'プロンプトを書く前に、構造を明確に。フィールド？型？必須vs オプション？クローズド or オープン列挙？'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': '制約を明確に指定',
        'text': 'モデルに正確に構造化方法を伝えます。例：「JSON形式で返してください。必須フィールド：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }」'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': '複数モデルでテスト',
        'text': 'Llama、Mistral、GPT-4o、Claudeは制約に異なる反応。各モデルをテスト。準拠率を測定。'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': '本番で各レスポンスを検証',
        'text': 'JSONをパース。無効な場合、エラーをログして再実行（フィードバック付き）。または信頼性の高いモデルに切り替え。'
      },
      {
        '@type': 'HowToStep',
        'position': 5,
        'name': '違反を監視',
        'text': 'スキーマ違反をトラッキング。実際の違反パターンに基づいてプロンプト、モデル、制約を調整。'
      }
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'ja',
    'name': '制約付きプロンプティングの種類',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': '固定フォーマット',
        'description': 'JSON、XML、YAML、CSVなど機械可読形式での出力'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': '列挙型',
        'description': '有限の値セットに制限されたレスポンス'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': '長さ制限',
        'description': '最大N単語、文字、またはトークン'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'ネストされたスキーマ',
        'description': '複雑な構造、ネストされた型（オブジェクト配列、オプショナルオブジェクト）'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': 'セマンティック制約',
        'description': 'アプリケーションロジックに従う内容（有効な参照、自己参照なし）'
      }
    ]
  }
},
    zh: {
  theme: '提示工程技术',
  title: '受限提示：完整指南',
  seoTitle: '受限提示：结构化输出完整指南',
  intro: '受限提示强制LLM遵守严格规则：特定输出格式、长度限制或预定义架构遵守。在生产环境中需要可靠、可重现的结果时至关重要。',
  metaDescription: '学习受限提示强制LLM输出为JSON、XML等结构化格式。5种约束技术、API级别强制、生产环境实例。适配GPT-4o、Claude、Gemini。',
  leadAnswerBlock: '受限提示是强制LLM生成符合特定结构、格式和内容要求的响应的技术。通过指定JSON架构、枚举值或长度限制，你可以确保每次输出都是有效的、可解析的、符合预期的。这在金融、医疗和法律等受管制行业尤为关键，可确保合规性、数据安全和生产工作流的可靠性。',
  publishDate: '2026-01-20',
  dateModified: '2026-05-03',
  lastFactChecked: '2026-05-03',
  readTime: '阅读约7分钟',
  freshness_tier: 'semi_annual',
  next_refresh_due: '2026-09-26',
  educationalLevel: 'Advanced',
  audience: '将LLM集成到生产环境的开发者和企业',
  primaryTerm: '受限提示',
  aboutTopics: ['提示工程', 'AI模型可靠性', '输出验证'],
  sections: {
    tldr: {
      isTldr: true,
      title: '核心要点',
      numberedItems: [
        '格式约束强制模型生成JSON、XML等结构化输出，而非自由文本',
        '长度限制和架构减少幻觉和内容偏离',
        '开源模型（Llama 3.2、Mistral 7B）和商用模型（GPT-4o、Claude）均支持约束，但对应程度有差异',
        '在系统或用户提示中明确指定约束时效果最佳',
        'PromptQuorum等工具支持大规模测试和验证约束遵守',
        '常见错误：约束模糊、规则过度堆积、缺少边界情况测试',
        '生产环例：数据提取、意图分类、验证内容生成、自动化支持'
      ]
    },
    quickFacts: {
      title: '快速事实',
      numberedItems: [
        '约束类型：格式（JSON/XML）、枚举（限制值）、长度限制、嵌套架构、语义约束',
        '模型支持：GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral 均支持约束。支持程度各异',
        '最佳实践：系统提示放一般约束。用户提示放上下文特定约束',
        'JSON一致性：设计良好的约束保证每次执行返回有效、符合架构的JSON',
        '测试方法：单模型测试5次。跨模型验证。测试边界情况（空列表、Unicode）',
        '部署时间：基础约束5分钟。生产级验证套件30分钟'
      ]
    },
    whatIsConstrained: {
      title: '什么是受限提示',
      content: [
        '受限提示是指明确强制模型输出架构。与其问"你的想法是什么？"，你指定"以JSON返回。字段结构：{ sentiment: "positive"|"negative"|"neutral", confidence: 0–1, reason: string }"。',
        '约束在三个层级运作：',
        '1. **格式层**：强制JSON、XML、Markdown、CSV等特定格式',
        '2. **架构层**：定义精确结构和类型（数字、枚举、嵌套列表）',
        '3. **语义层**：限制内容（"不超过100字"、"仅使用文档中提到的实体"）'
      ],
      snippets: [
        {
          type: 'in-one-sentence',
          text: '约束将非结构化模型转换为实质上的API。'
        },
        {
          type: 'in-plain-terms',
          text: '与其处理自由文本，你获得验证、可解析、可预测的响应。'
        }
      ]
    },
    whyItMatters: {
      title: '受限提示为什么重要',
      content: [
        '没有约束，LLM会生成执行之间格式和内容变化的自由文本。应用无法信任结构或内容。有了约束，模型保持在定义的范围内。',
        '主要优势：',
        '• **可靠性**：每个响应遵守架构。无意外结果或缺失字段',
        '• **可解析性**：有效JSON可被代码无异常处理',
        '• **可重现性**：相同输入、相同模型、相同约束 → 相同输出格式',
        '• **链式集成**：LLM生成结构化响应。下一步直接处理',
        '• **减少幻觉**：严格约束限制模型发明或脱离主题的空间'
      ]
    },
    typesOfConstraints: {
      title: '受限提示的类型',
      content: '约束在严密性和复杂性上有所不同。主要类型如下：',
      tableFormat: true,
      columns: ['类型', '描述', '示例'],
      rows: [
        {
          '类型': '固定格式',
          '描述': 'JSON、XML、YAML、CSV等机器可读格式的输出',
          '示例': '{ "sentiment": "positive", "score": 0.85 }'
        },
        {
          '类型': '枚举',
          '描述': '响应限制在有限值集合内',
          '示例': 'sentiment ∈ ["positive", "negative", "neutral"]'
        },
        {
          '类型': '长度限制',
          '描述': '最多N个单词、字符或令牌',
          '示例': '解释不超过100字'
        },
        {
          '类型': '嵌套架构',
          '描述': '复杂结构含嵌套类型（对象数组、可选对象）',
          '示例': '{ id: int, label: string, children: [...] } 的数组'
        },
        {
          '类型': '语义约束',
          '描述': '内容遵守应用逻辑（有效参考、无自引用）',
          '示例': '仅推荐提供列表中的产品'
        }
      ]
    },
    example: {
      title: '示例：客户支持工单分类',
      content: '用例：用LLM自动分类客户支持工单。',
      blockquote: '无约束示例："请分类这个工单。"→ 输出："此工单涉及客户访问请求。似乎很紧急。我的建议是..."',
      blockquoteSource: '非结构化输出 – 难以解析',
      items: [
        '格式：自由文本',
        '内容：需要手动解析或第二阶段处理',
        '成本：两次API调用、更多令牌、更多错误'
      ]
    },
    whenToUse: {
      title: '何时使用受限提示',
      content: [
        '受限提示最适合应用依赖可预测输出结构的情况。',
        '适用用例：'
      ],
      numberedItems: [
        '文本分类：用有限标签集自动标记电子邮件、工单、文档',
        '数据提取：从文档中提取名称、日期、价格',
        '验证内容生成：生成遵守营销架构的产品描述',
        '会话API：将自由对话转换为结构化命令',
        '评分：以精确格式生成数值分数和说明',
        '多模态处理：强制视觉模型按架构描述图像（结构化alt文本）'
      ]
    },
    howPQSupports: {
      title: 'PromptQuorum如何支持受限提示',
      content: 'PromptQuorum包含原生工具用于大规模测试和验证约束：',
      items: [
        '**结构化测试模式**：对多个模型（GPT-4o、Claude、Llama 3.2）测试架构遵守',
        '**架构验证**：定义JSON架构。检测并报告每个响应的违规',
        '**多模型分发**：向多个模型发送相同的受限提示。收集结构化响应，检测差异',
        '**生产监控**：跟踪架构遵守率。哪些模型偏离？哪些字段经常未结构化？',
        '**交互式调试**：检测到约束违规时，显示具体位置和原因。提供改进建议'
      ]
    },
    howToStart: {
      title: '受限提示集成：5个步骤',
      numberedItems: [
        {
          title: '定义架构',
          whyItMatters: '编写提示前，明确结构。哪些字段？什么类型？必需vs可选？封闭或开放枚举？'
        },
        {
          title: '明确陈述约束',
          whyItMatters: '准确告诉模型如何结构化响应。示例："始终以有效JSON返回：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }"'
        },
        {
          title: '在多个模型上测试',
          whyItMatters: 'Llama、Mistral、GPT-4o、Claude对约束反应不同。测试每个。测量遵守率。'
        },
        {
          title: '在生产中验证每个响应',
          whyItMatters: '解析JSON。若无效，记录错误、带反馈重试（"你的响应不是有效JSON：..."），或切换到更可靠的模型。'
        },
        {
          title: '监控违规',
          whyItMatters: '跟踪架构违规。基于实际违规模式调整提示、模型或约束。'
        }
      ]
    },
    apiLevelEnforcement: {
      title: 'API级别的约束强制',
      content: '许多LLM API提供商除了提示级约束外，还支持API级约束强制。这些在提供商系统层验证架构遵守，拒绝无效响应。',
      items: [
        '**OpenAI：函数调用和结构化输出**：定义JSON Schema。模型生成符合架构的结构化输出。无效响应在函数调用层被拒绝。https://platform.openai.com/docs/guides/function-calling',
        '**Anthropic Claude：约束输出**：用JSON Schema或XML标签指定格式。模型绝不偏离指定格式。https://docs.anthropic.com',
        '**Google Generative AI：结构化输出**：在API请求中包含架构。模型始终返回符合架构的JSON。https://ai.google.dev/docs'
      ],
      callouts: [
        {
          type: 'tip',
          label: '最佳实践',
          text: '组合提示级和API级约束。提示澄清意图，API架构严格执行。两层防护最大化可靠性和透明度。'
        }
      ]
    },
    regionalContext: {
      title: '企业和合规环境',
      content: '受限提示在数据保护和法规合规必须的环境中特别有价值。对于亚太地区企业来说，以下至关重要。',
      items: [
        '**中国数据安全法（2021）**：要求对个人数据和敏感信息严格管理。受限提示通过限制敏感数据在提示和响应中的流动来帮助合规。金融、医疗、法律部门特别受关注。建议使用本地推理或对数据处理有严格控制的解决方案。',
        '**亚太地区：数据跨境和保护**：各国（新加坡、澳大利亚、韩国）有数据保护法。约束可将个人和机密数据排除在提示和响应外。支持数据本地化和保留要求。',
        '**企业合规：审计和问责**：受管制行业需AI决策可审计、可解释。约束使模型输出保持一致、可验证的格式。'
      ]
    },
    commonMistakes: {
      title: '受限提示的常见错误',
      mistakes: [
        {
          mistake: '约束过于模糊',
          problem: '"简洁点"或"结构化"不够具体。模型忽略或误解。',
          fix: '明确指定："不超过100字"、"JSON：{ field1: type, field2: type }"'
        },
        {
          mistake: '约束过度堆积',
          problem: '同时指定10个约束令模型混乱。遗漏或矛盾。',
          fix: '保持2-3个主要约束。独立测试每个。逐步整合。'
        },
        {
          mistake: '缺少边界情况测试',
          problem: '简单文本成功。Unicode、空列表、极端情况失败。',
          fix: '测试：零元素、1000元素、特殊字符、非拉丁字符、空输入'
        },
        {
          mistake: '忽视模型间差异',
          problem: '一个模型完美遵守JSON。另一个添加注释。GPT-4o用```包裹。',
          fix: '在所有计划使用的模型上测试约束。差异不可接受则固定模型。'
        },
        {
          mistake: '遗漏解析异常处理',
          problem: '假设JSON总是有效。生产中崩溃。',
          fix: '用try-catch包裹解析。记录错误。带反馈重试："JSON无效：..."'
        }
      ]
    },
    relatedReading: {
      title: '相关阅读',
      items: [
        '[LLM文法：强制输出结构](/zh/prompt-engineering/llm-grammars) — 约束之外的形式化方法',
        '[Chain-of-Thought vs 结构化推理](/zh/prompt-engineering/cot-structured-reasoning) — 何时使用哪种',
        '[结构化输出微调](/zh/prompt-engineering/fine-tuning-for-structured-output) — 提示工程的替代方案',
        '[LLM输出验证：架构和测试](/zh/prompt-engineering/llm-output-validation) — 完整验证框架',
        '[PromptQuorum：多模型分发](/zh/features/multi-model-dispatch) — 大规模测试约束',
        '[与LLM的会话API](/zh/local-llms/conversational-apis) — 实例：聊天机器人的控制输出'
      ]
    },
    faqSection: {
      title: '常见问题',
      faqs: [
        {
          q: '约束会减慢LLM响应吗？',
          a: '略微减慢。严格约束限制搜索空间，有时可加速生成。但明确指示模型"解析为JSON"添加轻微延迟。大多数情况（<100ms）此成本为可靠性而值得。测量你的用例。'
        },
        {
          q: '所有模型都支持约束吗？',
          a: '最新模型（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）很好地支持格式约束和枚举。但约束越复杂（深层嵌套架构、复杂语义逻辑），支持程度越不同。小模型（<7B）可靠性较低。在你的模型和用例上测试。'
        },
        {
          q: '约束应在系统还是用户提示中？',
          a: '两者都行但有差异。系统提示（指令）整体一致性更高。用户提示（内容）允许每条消息特定约束。最佳实践：一般约束（格式、类型）在系统提示；上下文特定约束（数据、限制）在用户提示。'
        },
        {
          q: '模型忽略约束怎么办？',
          a: '递进处理：1）更明确："结构化"→"始终以有效JSON返回"。2）添加示例："例：{ sentiment: \'positive\', score: 0.9 }"。3）切换到更强大模型（GPT-4o vs 3.5、Llama 70B vs 8B）。4）微调（高成本，生产中可靠）。'
        },
        {
          q: '约束影响内容质量吗？',
          a: '是的，但积极影响。设计良好的约束减少噪音，使模型集中。设计不良（过度限制）可降低创意或忽视背景。创意内容（小说、文案）约束轻（长度、语气）。数据工作（提取、分类）约束严格。'
        },
        {
          q: '能结合受限提示和微调吗？',
          a: '是的，这是最佳实践。微调教会模型你的领域和风格。约束强制每个响应为精确所需格式。合并时可靠性和质量最高。'
        },
        {
          q: '中国企业使用AI约束的法规是什么？',
          a: '中国《数据安全法》（2021）要求对个人数据和敏感信息严格管理。受限提示可通过限制敏感信息流向来帮助合规。金融、医疗、法律部门需特别注意。建议使用本地推理或对数据处理有严格控制的解决方案。'
        },
        {
          q: '金融机构的约束设计技巧？',
          a: '金融数据保护需约束排除个人信息和机密数据。示例约束："不输出客户名、账户号、交易额""仅使用批准的账户代码"。生产中必须配合审计日志和数据保护，符合《数据安全法》和内部政策。'
        },
        {
          q: '医疗领域约束示例？',
          a: '医疗约束示例："不显示诊断结果。不提议治疗。不使用医学术语。相反，建议患者咨询医生"。专业判断由医疗专家而非AI把握。约束中明确医学免责。'
        },
        {
          q: 'PromptQuorum能自动化约束测试吗？',
          a: '是的。PromptQuorum自动化架构验证、多模型对比测试、生产监控。配置测试套件后，每次对样本集验证约束遵守。自动告警。错误模式跟踪指导改进。'
        }
      ]
    },
    sources: {
      title: '来源和参考',
      items: [
        '[OpenAI：函数调用和结构化输出](https://platform.openai.com/docs/guides/function-calling) — 官方文档',
        '[Anthropic：Claude的约束输出](https://docs.anthropic.com) — 约束模式文档',
        '[Guidance：基于文法的输出控制](https://github.com/guidance-ai/guidance) — 开源文法库'
      ]
    }
  },
  toc: [
    { label: '核心要点', anchor: '#tldr' },
    { label: '快速事实', anchor: '#quick-facts' },
    { label: '什么是受限提示', anchor: '#what-is-constrained-prompting' },
    { label: '受限提示为什么重要', anchor: '#why-does-constrained-prompting-matter' },
    { label: '受限提示的类型', anchor: '#which-constraint-types-can-you-use' },
    { label: '示例：客户支持工单分类', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
    { label: '何时使用受限提示', anchor: '#when-should-you-use-constrained-prompting' },
    { label: 'PromptQuorum如何支持受限提示', anchor: '#how-does-promptquorum-support-constrained-prompting' },
    { label: '受限提示集成：5个步骤', anchor: '#how-to-use-constrained-prompting' },
    { label: 'API级别的约束强制', anchor: '#api-level-constraint-enforcement' },
    { label: '企业和合规环境', anchor: '#constrained-prompting-in-regulated-environments' },
    { label: '受限提示的常见错误', anchor: '#common-mistakes' },
    { label: '相关阅读', anchor: '#related-reading' },
    { label: '常见问题', anchor: '#frequently-asked-questions' },
    { label: '来源和参考', anchor: '#sources' }
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': '受限提示：完整指南',
    'url': 'https://www.promptquorum.com/zh/prompt-engineering/constrained-prompting',
    'inLanguage': 'zh',
    'image': 'https://www.promptquorum.com/og-constrained-prompting-zh.png',
    'datePublished': '2026-01-20',
    'dateModified': '2026-04-28',
    'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'description': '学习受限提示提升LLM可靠性。',
    'about': [
      { '@type': 'Thing', 'name': '提示工程' },
      { '@type': 'Thing', 'name': 'AI模型可靠性' },
      { '@type': 'Thing', 'name': '输出验证' }
    ],
    'mentions': [
      { '@type': 'SoftwareApplication', 'name': 'PromptQuorum' },
      { '@type': 'SoftwareApplication', 'name': 'GPT-4o' },
      { '@type': 'SoftwareApplication', 'name': 'Claude' },
      { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
      { '@type': 'SoftwareApplication', 'name': 'Mistral' }
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.tldr'] }
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'inLanguage': 'zh',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '约束会减慢LLM响应吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '略微减慢。严格约束限制搜索空间，有时可加速生成。但明确指示模型"解析为JSON"添加轻微延迟。大多数情况（<100ms）此成本为可靠性而值得。测量你的用例。'
        }
      },
      {
        '@type': 'Question',
        'name': '所有模型都支持约束吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '最新模型（GPT-4o、Claude 3.5 Sonnet、Llama 3.2、Mistral）很好地支持格式约束和枚举。但约束越复杂（深层嵌套架构、复杂语义逻辑），支持程度越不同。小模型（<7B）可靠性较低。在你的模型和用例上测试。'
        }
      },
      {
        '@type': 'Question',
        'name': '约束应在系统还是用户提示中？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '两者都行但有差异。系统提示（指令）整体一致性更高。用户提示（内容）允许每条消息特定约束。最佳实践：一般约束（格式、类型）在系统提示；上下文特定约束（数据、限制）在用户提示。'
        }
      },
      {
        '@type': 'Question',
        'name': '模型忽略约束怎么办？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '递进处理：1）更明确："结构化"→"始终以有效JSON返回"。2）添加示例："例：{ sentiment: \'positive\', score: 0.9 }"。3）切换到更强大模型（GPT-4o vs 3.5、Llama 70B vs 8B）。4）微调（高成本，生产中可靠）。'
        }
      },
      {
        '@type': 'Question',
        'name': '约束影响内容质量吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '是的，但积极影响。设计良好的约束减少噪音，使模型集中。设计不良（过度限制）可降低创意或忽视背景。创意内容（小说、文案）约束轻（长度、语气）。数据工作（提取、分类）约束严格。'
        }
      },
      {
        '@type': 'Question',
        'name': '能结合受限提示和微调吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '是的，这是最佳实践。微调教会模型你的领域和风格。约束强制每个响应为精确所需格式。合并时可靠性和质量最高。'
        }
      },
      {
        '@type': 'Question',
        'name': '中国企业使用AI约束的法规是什么？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '中国《数据安全法》（2021）要求对个人数据和敏感信息严格管理。受限提示可通过限制敏感信息流向来帮助合规。金融、医疗、法律部门需特别注意。建议使用本地推理或对数据处理有严格控制的解决方案。'
        }
      },
      {
        '@type': 'Question',
        'name': '金融机构的约束设计技巧？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '金融数据保护需约束排除个人信息和机密数据。示例约束："不输出客户名、账户号、交易额""仅使用批准的账户代码"。生产中必须配合审计日志和数据保护，符合《数据安全法》和内部政策。'
        }
      },
      {
        '@type': 'Question',
        'name': '医疗领域约束示例？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '医疗约束示例："不显示诊断结果。不提议治疗。不使用医学术语。相反，建议患者咨询医生"。专业判断由医疗专家而非AI把握。约束中明确医学免责。'
        }
      },
      {
        '@type': 'Question',
        'name': 'PromptQuorum能自动化约束测试吗？',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '是的。PromptQuorum自动化架构验证、多模型对比测试、生产监控。配置测试套件后，每次对样本集验证约束遵守。自动告警。错误模式跟踪指导改进。'
        }
      }
    ]
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'inLanguage': 'zh',
    'name': '受限提示集成：5个步骤',
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': '定义架构',
        'text': '编写提示前，明确结构。哪些字段？什么类型？必需vs可选？封闭或开放枚举？'
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': '明确陈述约束',
        'text': '准确告诉模型如何结构化响应。示例："始终以有效JSON返回：{ \"class\": \"urgent\"|\"normal\"|\"low\", \"reason\": string, \"actions\": string[] }"'
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': '在多个模型上测试',
        'text': 'Llama、Mistral、GPT-4o、Claude对约束反应不同。测试每个。测量遵守率。'
      },
      {
        '@type': 'HowToStep',
        'position': 4,
        'name': '在生产中验证每个响应',
        'text': '解析JSON。若无效，记录错误、带反馈重试（"你的响应不是有效JSON：..."），或切换到更可靠的模型。'
      },
      {
        '@type': 'HowToStep',
        'position': 5,
        'name': '监控违规',
        'text': '跟踪架构违规。基于实际违规模式调整提示、模型或约束。'
      }
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'inLanguage': 'zh',
    'name': '受限提示的类型',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': '固定格式',
        'description': 'JSON、XML、YAML、CSV等机器可读格式的输出'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': '枚举',
        'description': '响应限制在有限值集合内'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': '长度限制',
        'description': '最多N个单词、字符或令牌'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': '嵌套架构',
        'description': '复杂结构含嵌套类型（对象数组、可选对象）'
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'name': '语义约束',
        'description': '内容遵守应用逻辑（有效参考、无自引用）'
      }
    ]
  }
},
  };
