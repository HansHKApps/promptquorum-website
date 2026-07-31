// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: constrained-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      heroImage: '/images/constrained-prompting-overview-hero-en.webp',
      title: 'Constrained Prompting',
      intro: '**Constrained prompting is a technique where you tell the model not just what to do, but also what it must and must not do — using "must," "must not," and "only" language — so outputs stay inside clearly defined boundaries.** This is essential when you need reliable formats, safe content, or strict compliance with internal rules.',
      leadAnswerBlock: '**Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable and reusable.** Instead of "write a summary," you specify exact structure, allowed content, and validation rules.',
      publishDate: '2026-03-26',
      readTime: '6 min read',

      seoTitle: 'Constrained Prompting: Structured AI Outputs',

      metaDescription: 'Master constrained prompting to force AI into JSON, XML, and structured formats. 5 techniques with real-world examples for GPT-5.6, Claude, and Gemini.',

      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-07-13',
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
        url: 'https://www.promptquorum.com/prompt-engineering/constrained-prompting',
        inLanguage: 'en',
        headline: 'Constrained Prompting: Force AI Output Formats (2026)',
        description: 'What constrained prompting is, why it matters, and how to use it to make AI outputs predictable and safe in real workflows.',
        datePublished: '2026-03-26',
        dateModified: '2026-07-13',
        keywords: ['constrained prompting', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          { '@type': 'Question', name: 'How do you force a model to output valid JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Provide the exact JSON schema in the prompt: "Return JSON exactly matching: { \\"finding\\": \\"...\\" }". Combine this with "Output only JSON, no other text." GPT-5.6 also supports a JSON mode via API that enforces valid JSON at the API level.' } },
          { '@type': 'Question', name: 'Does constrained prompting work on GPT-5.6, Claude, and Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — all three support constrained prompting. GPT-5.6 and Claude Sonnet 5 follow hard format constraints (JSON, tables, word limits) at ~95% adherence on well-formed prompts. All three also support API-level constraint enforcement via structured outputs, which guarantees valid JSON schema at the model level. Gemini 3.1 Pro scores similarly but may interpret ambiguous constraints differently. Always test across models.' } },
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
        description: 'A 5-step guide to applying output constraints in prompts for GPT-5.6, Claude Sonnet 5, and Gemini 3.1 Pro.',
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
            'GPT-5.6, Claude Sonnet 5, and Gemini 3.1 Pro all support constrained prompting — plus API-level enforcement via structured outputs — but respond differently to prompt-level constraints. Test across models.',
            'Constrained prompts save review time: outputs that already match your required structure need less human correction.',
            'Use [PromptQuorum](https://www.promptquorum.com/) to test constrained prompts across multiple models side by side and compare constraint adherence.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Quick Facts',
          items: [
            '**5 constraint types:** Structural, Content, Style, Length, Safety',
            '**Model adherence:** GPT-5.6 and Claude Opus 4.8 follow hard constraints at ~95% on well-formed prompts',
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
            { type: 'insight', label: 'Model Adherence Rates', text: 'Prompt-level constraint adherence varies by model and constraint type: GPT-5.6 achieves ~95% on JSON schema, ~90% on word limits, ~95% on content inclusion. Claude Sonnet 5 scores ~97% on JSON, ~92% on word limits, ~96% on inclusion. Gemini 3.1 Pro: ~92% JSON, ~85% word limits, ~93% inclusion. API-level Structured Outputs achieve near 100% JSON schema compliance across all models, but only handle schema — not content, tone, or safety constraints.' },
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
            '**You should use constrained prompting whenever correctness and consistency are more important than maximum creativity.** This is particularly true in operational, analytical, and regulated contexts. Paired with [few-shot examples](/prompt-engineering/zero-shot-vs-few-shot), constraints become even more powerful.',
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
            'Test constrained prompts across multiple models side by side to see which provider adheres best to your specifications. For example, dispatch the same JSON extraction constraint to GPT-5.6, Claude Sonnet 5, and Gemini 3.1 Pro simultaneously — then compare which model most reliably respects your schema, word limits, and content restrictions.',
            'Save constrained prompts as templates for recurring tasks, ensuring your team always uses the same validated patterns.',
            'Identify which model works best for your use case — then route production traffic to the winner.',
          ],
          callouts: [
            { type: 'practice', label: 'Best Practice', text: 'Always test your constrained prompt against at least 2 models before deploying. Different models (GPT-5.6 vs Claude vs Gemini) interpret constraints differently. A 95% adherence rate on GPT-5.6 may drop to 80% on Gemini.' },
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
            { type: 'insight', label: 'Insight', text: 'GPT-5.6 and Claude Sonnet 5 follow hard format constraints (JSON, tables, word limits) at ~95% adherence on well-formed prompts. Gemini 3.1 Pro scores similarly. All three support API-level Structured Outputs for near 100% JSON schema compliance. For production use, combine API-level enforcement with prompt-level constraints for maximum reliability.' },
          ],
        },
        apiLevelEnforcement: {
          id: 'api-level-constraint-enforcement',
          title: 'API-Level Constraint Enforcement (Beyond Prompt Text)',
          content: [
            '**In 2026, all major AI providers offer API-level constraint enforcement — a more reliable alternative to prompt-text constraints.** Instead of hoping the model respects your rules, you enforce constraints at the token-generation level via API parameters. This guarantees outputs match your schema.',
            'Major providers now support structured outputs:',
            '**OpenAI Structured Outputs (GPT-5.6):** Set `response_format: { type: "json_schema", json_schema: {...} }` at the API level. Guarantees valid JSON matching your exact schema — ~100% reliability. The model cannot produce invalid JSON.',
            '**Anthropic Structured Outputs (Claude Sonnet 5):** Use the `output_config.format` parameter to enforce JSON schema server-side. All outputs strictly match the schema you define.',
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
              problem: 'GPT-5.6, Claude Sonnet 5, and Gemini 3.1 Pro all interpret the same constraint differently. A prompt that works on one may fail on another.',
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
            '[Structured Output: JSON Mode](/prompt-engineering/structured-output-and-json-mode) — API-level enforcement of output schemas.',
            '[RTF Framework](/prompt-engineering/rtf-framework) — Role-Task-Format: a structured framework that pairs naturally with constrained prompting.',
            '[Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) — Providing examples is a form of implicit constraint.',
            '[How to Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — Validate constrained prompts on multiple LLMs.',
            '[Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — Safety constraints defend against adversarial input.',
            '[Smarter Home Automations with a Local LLM](/smart-home/ai-automations-local-llm) — constrained prompting in action: define exactly what your LLM can and cannot do when controlling home devices',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What is constrained prompting?', a: 'Constrained prompting is the practice of adding explicit rules — format, length, content, and safety boundaries — directly into a prompt to make AI output predictable and reusable. Instead of "write a summary," you specify: 150 words, JSON format, no competitor names, must include a call-to-action.' },
            { q: 'What are the five types of constraints?', a: 'The five main constraint types are: (1) Structural — required headings, tables, JSON with specific keys. (2) Content — required sections, banned topics. (3) Style — tone, reading level, terminology. (4) Length — word or character limits. (5) Safety — avoid medical advice, personal data, legal conclusions.' },
            { q: 'How do you force a model to output valid JSON?', a: 'Provide the exact JSON schema in the prompt: "Return JSON exactly matching: { \\"finding\\": \\"...\\" }". Combine this with "Output only JSON, no other text." GPT-5.6 also supports a JSON mode via API that enforces valid JSON at the API level.' },
            { q: 'Does constrained prompting work on GPT-5.6, Claude, and Gemini?', a: 'Yes — all three support constrained prompting. GPT-5.6 and Claude Opus 4.8 follow hard format constraints (JSON, tables, word limits) at approximately 95% adherence on well-formed prompts. Gemini 3.1 Pro scores similarly but may interpret ambiguous constraints differently. Always test across models.' },
            { q: 'What is the difference between constrained prompting and few-shot prompting?', a: 'Constrained prompting adds explicit rules in text form (format, length, content restrictions). Few-shot prompting provides worked examples that implicitly show the model what to produce. The two work well together: use a few-shot example to demonstrate the output pattern, then add constraints for stricter enforcement.' },
            { q: 'When should you NOT use constrained prompting?', a: 'Avoid structural constraints on open-ended creative tasks (brainstorming, ideation, fiction). Over-constraining creative prompts produces formulaic, low-quality output. Use tone and style constraints for creative tasks but allow structural freedom.' },
            { q: 'How many constraints can you stack in one prompt?', a: 'Practically, 3–5 constraints work well. Beyond 5–6, models start silently dropping lower-priority constraints without warning. If you need more than 5, list them in priority order and state explicitly: "If constraints conflict, apply them in this order: (1) safety, (2) format, (3) length."' },
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            '**OpenAI. (2026).** "Structured Outputs — JSON Mode and Responses API." https://platform.openai.com/docs/guides/structured-outputs — Server-side JSON schema enforcement for GPT-5.6 with 100% schema adherence.',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude — API-level constraint enforcement for Claude Sonnet 5 and Opus 4.8.',
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
      heroImage: '/images/constrained-prompting-overview-hero-de.webp',
      title: 'Constrained Prompting: Strukturierte Prompts für zuverlässige Ausgaben',
      intro: '**Constrained Prompting ist eine Technik, bei der Sie dem Modell nicht nur sagen, was es tun soll, sondern auch, was es unbedingt tun und nicht tun muss – damit die Ausgaben innerhalb klar definierter Grenzen bleiben.** Dies ist essentiell, wenn Sie zuverlässige Formate, sichere Inhalte oder strikte Einhaltung interner Richtlinien benötigen.',
      leadAnswerBlock: '**Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar und wiederverwendbar zu machen.** Statt „schreibe eine Zusammenfassung" geben Sie vor: 150 Wörter, JSON-Format, keine Konkurrenten-Namen, muss einen Call-to-Action enthalten.',
      publishDate: '2026-03-26',
      readTime: '6 Min. Lesezeit',
      seoTitle: 'Constrained Prompting: KI-Ausgaben strukturieren',
      metaDescription: 'Constrained Prompting für strukturierte KI-Ausgaben: Regeln, Formate und Inhaltsrichtlinien direkt im Prompt definieren. Für GPT-5.6, Claude und Gemini.',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-07-13',
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
        dateModified: '2026-07-13',
        keywords: ['Constrained Prompting', 'Prompt Engineering', 'strukturierte Prompts', 'PromptQuorum', 'API-Level Durchsetzung'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          { '@type': 'Question', name: 'Wie zwingt man ein Modell, gültiges JSON auszugeben?', acceptedAnswer: { '@type': 'Answer', text: 'Geben Sie das genaue JSON-Schema im Prompt vor: „Geben Sie JSON genau in diesem Format zurück: { \\"finding\\": \\"...\\" }". Kombinieren Sie dies mit „Geben Sie nur JSON aus, keinen anderen Text." GPT-5.6 unterstützt auch einen JSON-Modus über die API, der gültiges JSON auf API-Ebene erzwingt.' } },
          { '@type': 'Question', name: 'Funktioniert Constrained Prompting auf GPT-5.6, Claude und Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Ja – alle drei unterstützen Constrained Prompting. GPT-5.6 und Claude Sonnet 5 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit etwa 95% Adhärenzrate bei gut formulierten Prompts. Alle drei bieten auch API-Level Constraint-Durchsetzung via Structured Outputs, die gültiges JSON-Schema auf Modell-Ebene garantiert. Gemini 3.1 Pro schneidet ähnlich ab, kann aber mehrdeutige Constraints unterschiedlich interpretieren. Testen Sie immer über Modelle hinweg.' } },
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
        description: 'Ein 5-Schritte-Leitfaden zur Anwendung von Ausgabe-Constraints in Prompts für GPT-5.6, Claude Sonnet 5 und Gemini 3.1 Pro.',
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
            'GPT-5.6, Claude Sonnet 5 und Gemini 3.1 Pro unterstützen alle Constrained Prompting — sowie API-Ebenen-Durchsetzung via Structured Outputs — reagieren aber unterschiedlich auf Prompt-Level-Constraints. Testen Sie über Modelle hinweg.',
            'Geconstraintetete Prompts sparen Überprüfungszeit: Ausgaben, die bereits Ihre erforderliche Struktur erfüllen, benötigen weniger menschliche Korrektur.',
            'Verwenden Sie [PromptQuorum](https://www.promptquorum.com/de) um geconstraintetete Prompts über mehrere Modelle hinweg nebeneinander zu testen und Constraint-Einhaltung zu vergleichen.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Schnelle Fakten',
          items: [
            '**5 Constraint-Typen:** Strukturell, Inhalt, Stil, Länge, Sicherheit',
            '**Modell-Adhäsion:** GPT-5.6 und Claude Sonnet 5 befolgen strikte Constraints mit ~95% auf gut formulierten Prompts',
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
            { type: 'insight', label: 'Einblick', text: 'GPT-5.6 und Claude Sonnet 5 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit ~95% Adhärenzrate bei gut formulierten Prompts. Alle drei bieten auch API-Level Constraint-Durchsetzung via Structured Outputs für nahezu 100% JSON-Schema-Compliance. Gemini 3.1 Pro schneidet ähnlich ab. Alle drei verschlechtern sich, wenn Constraints vage oder widersprüchlich sind.' },
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
              problem: 'GPT-5.6, Claude Sonnet 5 und Gemini 3.1 Pro interpretieren die gleiche Constraint unterschiedlich. Ein Prompt, der auf einem funktioniert, kann auf einem anderen fehlschlagen.',
              fix: 'Testen Sie Ihren geconstrainteten Prompt auf mindestens 2 Modellen vor dem Deployment. Nutzen Sie [PromptQuorum](https://www.promptquorum.com/de) für parallele Vergleiche.',
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
            '**OpenAI Structured Outputs (GPT-5.6):** Setzen Sie `response_format: { type: "json_schema", json_schema: {...} }` auf API-Ebene. Garantiert gültiges JSON, das Ihrem genauen Schema entspricht — ~100% Zuverlässigkeit. Das Modell kann kein ungültiges JSON produzieren.',
            '**Anthropic Structured Outputs (Claude Sonnet 5):** Verwenden Sie den `output_config.format`-Parameter, um JSON-Schema Server-seitig zu erzwingen. Alle Ausgaben entsprechen strikt dem von Ihnen definierten Schema.',
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
            '[Few-Shot Prompting](/de/prompt-engineering/zero-shot-vs-few-shot) — Beispiele bereitstellen ist eine Form impliziter Constraints.',
            '[Chain-of-Thought Prompting](/de/prompt-engineering/chain-of-thought-prompting) — Wenn Sie Reasoning-Schritte wünschen, nicht nur geconstraintetete Ausgabe.',
            '[KI-Halluzinationen: Wie man sie stoppt](/de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Constraints, die Halluzinations-Risiken reduzieren.',
            '[Grundlagen der Prompt-Engineering-Optimierung](/de/prompt-engineering/fundamentals-of-prompt-optimization) — Optimierungstechniken, die Constrained Prompting erweitern.',
            '[Intelligentere Heimautomatisierung mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm) — Constrained Prompting in der Praxis: definieren Sie genau, was Ihr LLM beim Steuern von Heimgeräten darf und nicht darf',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist Constrained Prompting?', a: 'Constrained Prompting ist die Praxis, explizite Regeln – Format, Länge, Inhalt und Sicherheitsgrenzen – direkt in einen Prompt zu integrieren, um KI-Ausgaben vorhersehbar und wiederverwendbar zu machen. Statt „schreibe eine Zusammenfassung" geben Sie vor: 150 Wörter, JSON-Format, keine Konkurrenten-Namen, muss einen Call-to-Action enthalten.' },
            { q: 'Was sind die fünf Constraint-Typen?', a: 'Die fünf Haupt-Constraint-Typen sind: (1) Strukturell – erforderliche Überschriften, Tabellen, JSON mit spezifischen Schlüsseln. (2) Inhalt – erforderliche Abschnitte, verbotene Themen. (3) Stil – Ton, Lesenlevel, Terminologie. (4) Länge – Wort- oder Zeichenlimits. (5) Sicherheit – keine medizinischen Ratschläge, personenbezogenen Daten oder rechtlichen Schlussfolgerungen.' },
            { q: 'Wie zwingt man ein Modell, gültiges JSON auszugeben?', a: 'Geben Sie das genaue JSON-Schema im Prompt vor: „Geben Sie JSON genau in diesem Format zurück: { \\"finding\\": \\"...\\" }". Kombinieren Sie dies mit „Geben Sie nur JSON aus, keinen anderen Text." GPT-5.6 unterstützt auch einen JSON-Modus über die API, der gültiges JSON auf API-Ebene erzwingt.' },
            { q: 'Funktioniert Constrained Prompting auf GPT-5.6, Claude und Gemini?', a: 'Ja – alle drei unterstützen Constrained Prompting. GPT-5.6 und Claude Opus 4.8 befolgen strikte Format-Constraints (JSON, Tabellen, Wortlimits) mit etwa 95% Adhärenzrate bei gut formulierten Prompts. Gemini 3.1 Pro schneidet ähnlich ab, kann aber mehrdeutige Constraints unterschiedlich interpretieren. Testen Sie immer über Modelle hinweg.' },
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
            '**OpenAI. (2026).** "Strukturierte Ausgaben — JSON Mode und Responses API." https://platform.openai.com/docs/guides/structured-outputs — Server-seitige JSON-Schema-Durchsetzung für GPT-5.6 mit 100% Schema-Adhäsion.',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude — API-Level Constraint-Durchsetzung für Claude Sonnet 5 und Opus 4.8.',
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
      heroImage: '/images/constrained-prompting-overview-hero-es.webp',
      title: 'Constrained Prompting: Salidas estructuradas para respuestas fiables',
      intro: '**El constrained prompting es una técnica en la que le dices al modelo no solo qué hacer, sino también qué debe y no debe hacer — usando lenguaje como "debe", "no debe" y "solo" — para que las salidas permanezcan dentro de límites claramente definidos.** Es esencial cuando necesitas formatos fiables, contenido seguro o cumplimiento estricto de reglas internas.',
      leadAnswerBlock: '**El constrained prompting es la práctica de añadir reglas explícitas — formato, longitud, contenido y límites de seguridad — directamente en un prompt para hacer que la salida de la IA sea predecible y reutilizable.** En lugar de "escribe un resumen", especificas estructura exacta, contenido permitido y reglas de validación.',
      publishDate: '2026-03-26',
      readTime: '6 min de lectura',
      seoTitle: 'Constrained Prompting: Salidas de IA estructuradas',
      metaDescription: 'Domina el constrained prompting para forzar a la IA a producir JSON, XML y formatos estructurados. 5 técnicas con ejemplos reales para GPT-5.6, Claude y Gemini.',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      dateModified: '2026-07-13',
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
        url: 'https://www.promptquorum.com/es/prompt-engineering/constrained-prompting',
        inLanguage: 'es',
        headline: 'Constrained Prompting: Fuerza formatos de salida de IA (2026)',
        description: 'Qué es el constrained prompting, por qué importa y cómo usarlo para hacer que las salidas de IA sean predecibles y seguras en workflows reales.',
        datePublished: '2026-03-26',
        dateModified: '2026-07-13',
        keywords: ['constrained prompting', 'prompt engineering', 'prompts estructurados', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
          { '@type': 'Question', name: '¿Cómo fuerzo a un modelo a producir JSON válido?', acceptedAnswer: { '@type': 'Answer', text: 'Proporciona el esquema JSON exacto en el prompt: "Devuelve JSON exactamente con esta estructura: { \\"finding\\": \\"...\\" }". Combínalo con "Devuelve solo JSON, sin otro texto." GPT-5.6 también soporta un modo JSON vía API que aplica JSON válido a nivel de API.' } },
          { '@type': 'Question', name: '¿Funciona el constrained prompting en GPT-5.6, Claude y Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — los tres soportan constrained prompting. GPT-5.6 y Claude Sonnet 5 siguen constraints de formato estrictas (JSON, tablas, límites de palabras) con ~95 % de adherencia en prompts bien formados. Los tres también soportan aplicación de constraints a nivel de API vía structured outputs, que garantiza JSON válido según esquema a nivel del modelo. Gemini 3.1 Pro obtiene resultados similares pero puede interpretar constraints ambiguas de forma diferente. Siempre prueba entre modelos.' } },
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
        description: 'Una guía de 5 pasos para aplicar constraints de salida en prompts para GPT-5.6, Claude Sonnet 5 y Gemini 3.1 Pro.',
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
            'GPT-5.6, Claude Sonnet 5 y Gemini 3.1 Pro soportan constrained prompting — además de la aplicación a nivel de API vía structured outputs — pero responden de forma diferente a las constraints a nivel de prompt. Prueba entre modelos.',
            'Los prompts con constraints ahorran tiempo de revisión: las salidas que ya coinciden con tu estructura requerida necesitan menos corrección humana.',
            'Usa [PromptQuorum](https://www.promptquorum.com/) para probar prompts con constraints en múltiples modelos lado a lado y comparar la adherencia a las constraints.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Datos rápidos',
          items: [
            '**5 tipos de constraints:** Estructural, Contenido, Estilo, Longitud, Seguridad',
            '**Adherencia de los modelos:** GPT-5.6 y Claude Opus 4.8 siguen constraints estrictas con ~95 % en prompts bien formados',
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
            { type: 'insight', label: 'Tasas de adherencia de los modelos', text: 'La adherencia a constraints a nivel de prompt varía según el modelo y el tipo de constraint: GPT-5.6 alcanza ~95 % en esquema JSON, ~90 % en límites de palabras, ~95 % en inclusión de contenido. Claude Sonnet 5 puntúa ~97 % en JSON, ~92 % en límites de palabras, ~96 % en inclusión. Gemini 3.1 Pro: ~92 % JSON, ~85 % límites de palabras, ~93 % inclusión. Los Structured Outputs a nivel de API logran cerca del 100 % de cumplimiento de esquema JSON en todos los modelos, pero solo manejan el esquema — no el contenido, el tono o las constraints de seguridad.' },
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
            '**Debes usar constrained prompting siempre que la corrección y la consistencia sean más importantes que la máxima creatividad.** Esto es especialmente válido en contextos operativos, analíticos y regulados. Combinado con [ejemplos few-shot](/prompt-engineering/zero-shot-vs-few-shot), las constraints se vuelven aún más potentes.',
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
            'Probar prompts con constraints en múltiples modelos lado a lado para ver qué proveedor se adhiere mejor a tus especificaciones. Por ejemplo, despacha la misma constraint de extracción JSON a GPT-5.6, Claude Sonnet 5 y Gemini 3.1 Pro simultáneamente — luego compara qué modelo respeta más fiablemente tu esquema, límites de palabras y restricciones de contenido.',
            'Guardar prompts con constraints como plantillas para tareas recurrentes, asegurando que tu equipo siempre use los mismos patrones validados.',
            'Identificar qué modelo funciona mejor para tu caso de uso — luego enrutar el tráfico de producción al ganador.',
          ],
          callouts: [
            { type: 'practice', label: 'Buena práctica', text: 'Siempre prueba tu prompt con constraints en al menos 2 modelos antes de desplegarlo. Diferentes modelos (GPT-5.6 vs Claude vs Gemini) interpretan las constraints de forma diferente. Una tasa de adherencia del 95 % en GPT-5.6 puede caer al 80 % en Gemini.' },
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
            { type: 'insight', label: 'Perspectiva', text: 'GPT-5.6 y Claude Sonnet 5 siguen constraints de formato estrictas (JSON, tablas, límites de palabras) con ~95 % de adherencia en prompts bien formados. Gemini 3.1 Pro puntúa de forma similar. Los tres soportan Structured Outputs a nivel de API para casi 100 % de cumplimiento de esquema JSON. Para uso en producción, combina la aplicación a nivel de API con constraints a nivel de prompt para máxima fiabilidad.' },
          ],
        },
        apiLevelEnforcement: {
          id: 'api-level-constraint-enforcement',
          title: 'Aplicación de constraints a nivel de API (más allá del texto del prompt)',
          content: [
            '**En 2026, todos los principales proveedores de IA ofrecen aplicación de constraints a nivel de API — una alternativa más fiable a las constraints en texto de prompt.** En lugar de esperar que el modelo respete tus reglas, aplicas constraints a nivel de generación de tokens vía parámetros de API. Esto garantiza que las salidas coincidan con tu esquema.',
            'Los principales proveedores ahora soportan structured outputs:',
            '**OpenAI Structured Outputs (GPT-5.6):** Establece `response_format: { type: "json_schema", json_schema: {...} }` a nivel de API. Garantiza JSON válido que coincide exactamente con tu esquema — ~100 % de fiabilidad. El modelo no puede producir JSON inválido.',
            '**Anthropic Structured Outputs (Claude Sonnet 5):** Usa el parámetro `output_config.format` para aplicar el esquema JSON del lado del servidor. Todas las salidas coinciden estrictamente con el esquema que defines.',
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
              problem: 'GPT-5.6, Claude Sonnet 5 y Gemini 3.1 Pro interpretan la misma constraint de forma diferente. Un prompt que funciona en uno puede fallar en otro.',
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
            '[Salida estructurada: modo JSON](/es/prompt-engineering/structured-output-and-json-mode) — Aplicación de esquemas de salida a nivel de API.',
            '[Framework RTF](/es/prompt-engineering/rtf-framework) — Role-Task-Format: un framework estructurado que se combina bien con constrained prompting.',
            '[Few-shot prompting](/es/prompt-engineering/zero-shot-vs-few-shot) — Proporcionar ejemplos es una forma de constraint implícita.',
            '[Cómo probar prompts entre modelos](/es/prompt-engineering/how-to-test-prompts-across-models) — Valida prompts con constraints en múltiples LLMs.',
            '[Prompt injection y seguridad](/es/prompt-engineering/prompt-injection-and-security) — Las constraints de seguridad defienden contra entradas adversariales.',
            '[Automatizaciones del hogar más inteligentes con un LLM local](/es/smart-home/ai-automations-local-llm) — constrained prompting en acción: define exactamente qué puede y no puede hacer tu LLM al controlar dispositivos del hogar',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué es el constrained prompting?', a: 'El constrained prompting es la práctica de añadir reglas explícitas — formato, longitud, contenido y límites de seguridad — directamente en un prompt para hacer que la salida de la IA sea predecible y reutilizable. En lugar de "escribe un resumen", especificas: 150 palabras, formato JSON, sin nombres de competidores, debe incluir una llamada a la acción.' },
            { q: '¿Cuáles son los cinco tipos de constraints?', a: 'Los cinco tipos principales son: (1) Estructural — encabezados obligatorios, tablas, JSON con claves específicas. (2) Contenido — secciones requeridas, temas prohibidos. (3) Estilo — tono, nivel de lectura, terminología. (4) Longitud — límites de palabras o caracteres. (5) Seguridad — evitar consejos médicos, datos personales, conclusiones legales.' },
            { q: '¿Cómo fuerzo a un modelo a producir JSON válido?', a: 'Proporciona el esquema JSON exacto en el prompt: "Devuelve JSON exactamente con esta estructura: { \\"finding\\": \\"...\\" }". Combínalo con "Devuelve solo JSON, sin otro texto." GPT-5.6 también soporta un modo JSON vía API que aplica JSON válido a nivel de API.' },
            { q: '¿Funciona el constrained prompting en GPT-5.6, Claude y Gemini?', a: 'Sí — los tres soportan constrained prompting. GPT-5.6 y Claude Opus 4.8 siguen constraints de formato estrictas (JSON, tablas, límites de palabras) con aproximadamente un 95 % de adherencia en prompts bien formados. Gemini 3.1 Pro puntúa de forma similar pero puede interpretar constraints ambiguas de manera diferente. Siempre prueba entre modelos.' },
            { q: '¿Cuál es la diferencia entre constrained prompting y few-shot prompting?', a: 'El constrained prompting añade reglas explícitas en forma de texto (formato, longitud, restricciones de contenido). El few-shot prompting proporciona ejemplos que muestran implícitamente al modelo qué producir. Los dos funcionan bien juntos: usa un ejemplo few-shot para mostrar el patrón de salida, luego añade constraints para una aplicación más estricta.' },
            { q: '¿Cuándo NO debes usar constrained prompting?', a: 'Evita las constraints estructurales en tareas creativas abiertas (brainstorming, ideación, ficción). El exceso de constraints en prompts creativos produce salidas formulaicas y de baja calidad. Usa constraints de tono y estilo para tareas creativas, pero permite libertad estructural.' },
            { q: '¿Cuántas constraints puedes apilar en un prompt?', a: 'En la práctica, 3–5 constraints funcionan bien. Más de 5–6, los modelos empiezan a omitir silenciosamente las de menor prioridad sin aviso. Si necesitas más de 5, lístalас en orden de prioridad e indica explícitamente: "Si las constraints entran en conflicto, aplícalas en este orden: (1) seguridad, (2) formato, (3) longitud."' },
          ],
        },
        sources: {
          title: 'Fuentes',
          items: [
            '**OpenAI. (2026).** "Structured Outputs — Modo JSON y Responses API." https://platform.openai.com/docs/guides/structured-outputs — Aplicación de esquema JSON del lado del servidor para GPT-5.6 con 100 % de adherencia al esquema.',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude — Aplicación de constraints a nivel de API para Claude Sonnet 5 y Opus 4.8.',
            '**Google. (2026).** "Gemini API: Generación controlada con response_schema." https://ai.google.dev/gemini-api/docs/controlled-generation — Modo JSON nativo y aplicación de salida estructurada para Gemini 3.1 Pro.',
            '**White et al. (2023).** "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." https://arxiv.org/abs/2302.11382 — Taxonomía académica de patrones de prompt incluyendo técnicas de prompting basadas en constraints.',
            '**Zhou et al. (2022).** "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910 — Investigación sobre optimización automatizada de constraints y refinamiento de prompts.',
          ],
        },
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      heroImage: '/images/constrained-prompting-overview-hero-ar.webp',
      title: 'الموجّهات المقيّدة: مخرجات منظّمة لاستجابات موثوقة',
      intro: '**الموجّهات المقيّدة تقنية تُخبر فيها النموذج ليس فقط بما يفعله، بل أيضًا بما يجب وما لا يجب فعله — باستخدام لغة مثل "يجب"، "لا يجب"، و"فقط" — حتى تظل المخرجات ضمن حدود محددة بوضوح.** إنها ضرورية عند الحاجة إلى تنسيقات موثوقة أو محتوى آمن أو امتثال صارم للقواعد الداخلية.',
      leadAnswerBlock: '**الموجّهات المقيّدة هي ممارسة إضافة قواعد صريحة — التنسيق والطول والمحتوى وحدود الأمان — مباشرةً في الموجّه لجعل مخرجات الذكاء الاصطناعي قابلة للتنبؤ وإعادة الاستخدام.** بدلًا من "اكتب ملخصًا"، تحدد البنية الدقيقة والمحتوى المسموح به وقواعد التحقق.',
      publishDate: '2026-03-26',
      readTime: '٦ دقائق للقراءة',
      seoTitle: 'الموجّهات المقيّدة: ⁨JSON⁩ و⁨XML⁩ من الذكاء الاصطناعي',
      metaDescription: '⁨5⁩ تقنيات للموجّهات المقيّدة تُجبر الذكاء الاصطناعي على إنتاج ⁨JSON⁩ و⁨XML⁩ وتنسيقات منظّمة. أمثلة حقيقية لـ⁨GPT-5.6⁩ و⁨Claude⁩ و⁨Gemini⁩.',
      educationalLevel: 'متوسط',
      primaryTerm: 'الموجّهات المقيّدة',
      dateModified: '2026-07-13',
      lastFactChecked: '2026-04-28',
      audience: 'المطورون ومديرو المنتجات والفرق التي تبني سير عمل مدعومة بنماذج اللغة الكبيرة',
      next_refresh_due: '2026-09-26',
      aboutTopics: ['الموجّهات المقيّدة', 'المخرجات المنظّمة', 'هندسة الموجّهات'],
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'حقائق سريعة', anchor: '#quick-facts' },
        { label: 'ما هي الموجّهات المقيّدة؟', anchor: '#what-is-constrained-prompting' },
        { label: 'لماذا تهم الموجّهات المقيّدة؟', anchor: '#why-does-constrained-prompting-matter' },
        { label: 'ما أنواع القيود التي يمكنك استخدامها؟', anchor: '#which-constraint-types-can-you-use' },
        { label: 'موجّه بلا قيود مقابل موجّه بقيود: مثال', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
        { label: 'متى تستخدم الموجّهات المقيّدة؟', anchor: '#when-should-you-use-constrained-prompting' },
        { label: 'كيف تدعم PromptQuorum الموجّهات المقيّدة؟', anchor: '#how-does-promptquorum-support-constrained-prompting' },
        { label: 'كيف تستخدم الموجّهات المقيّدة', anchor: '#how-to-use-constrained-prompting' },
        { label: 'تطبيق القيود على مستوى API', anchor: '#api-level-constraint-enforcement' },
        { label: 'الموجّهات المقيّدة في البيئات المنظّمة', anchor: '#constrained-prompting-in-regulated-environments' },
        { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'الأسئلة الشائعة', anchor: '#frequently-asked-questions' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/constrained-prompting',
        inLanguage: 'ar',
        headline: 'الموجّهات المقيّدة: أجبر تنسيقات مخرجات الذكاء الاصطناعي (2026)',
        description: 'ما هي الموجّهات المقيّدة، ولماذا تهم، وكيف تستخدمها لجعل مخرجات الذكاء الاصطناعي قابلة للتنبؤ وآمنة في سير العمل الحقيقية.',
        datePublished: '2026-03-26',
        dateModified: '2026-07-13',
        keywords: ['الموجّهات المقيّدة', 'هندسة الموجّهات', 'موجّهات منظّمة', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'الموجّهات المقيّدة' },
          { '@type': 'Thing', name: 'المخرجات المنظّمة' },
          { '@type': 'Thing', name: 'هندسة الموجّهات' },
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
          { '@type': 'Question', name: 'ما هي الموجّهات المقيّدة؟', acceptedAnswer: { '@type': 'Answer', text: 'الموجّهات المقيّدة هي ممارسة إضافة قواعد صريحة — التنسيق والطول والمحتوى وحدود الأمان — مباشرةً في الموجّه لجعل مخرجات الذكاء الاصطناعي قابلة للتنبؤ وإعادة الاستخدام. بدلًا من "اكتب ملخصًا"، تحدد: 150 كلمة، تنسيق JSON، بلا أسماء منافسين، يجب تضمين دعوة للعمل.' } },
          { '@type': 'Question', name: 'ما أنواع القيود الخمسة؟', acceptedAnswer: { '@type': 'Answer', text: 'الأنواع الخمسة الرئيسية هي: (1) البنيوية — عناوين إلزامية وجداول وJSON بمفاتيح محددة. (2) المحتوى — أقسام مطلوبة ومواضيع محظورة. (3) الأسلوب — النبرة ومستوى القراءة والمصطلحات. (4) الطول — حدود الكلمات أو الأحرف. (5) الأمان — تجنب النصائح الطبية والبيانات الشخصية والاستنتاجات القانونية.' } },
          { '@type': 'Question', name: 'كيف أجبر النموذج على إنتاج JSON صالح؟', acceptedAnswer: { '@type': 'Answer', text: 'قدّم مخطط JSON الدقيق في الموجّه: "أعِد JSON بهذه البنية بالضبط: { \\"finding\\": \\"...\\" }". ادمجه مع "أعِد JSON فقط، بلا نص آخر." يدعم GPT-5.6 أيضًا وضع JSON عبر API الذي يطبّق JSON صالحًا على مستوى API.' } },
          { '@type': 'Question', name: 'هل تعمل الموجّهات المقيّدة مع GPT-5.6 وClaude وGemini؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — الثلاثة يدعمون الموجّهات المقيّدة. يتبع GPT-5.6 وClaude Sonnet 5 قيود التنسيق الصارمة (JSON وجداول وحدود الكلمات) بنسبة ~95% في الموجّهات المنسّقة جيدًا. يدعم الثلاثة أيضًا تطبيق القيود على مستوى API عبر structured outputs. دائمًا اختبر عبر النماذج.' } },
          { '@type': 'Question', name: 'ما الفرق بين الموجّهات المقيّدة وموجّهات القليل من الأمثلة؟', acceptedAnswer: { '@type': 'Answer', text: 'تضيف الموجّهات المقيّدة قواعد صريحة نصية (تنسيق وطول وقيود محتوى). توفر موجّهات القليل من الأمثلة نماذج تُظهر للنموذج ضمنيًا ما يجب إنتاجه. يعملان معًا جيدًا: استخدم مثالًا لإظهار نمط المخرجات، ثم أضف قيودًا لتطبيق أكثر صرامة.' } },
          { '@type': 'Question', name: 'متى لا تستخدم الموجّهات المقيّدة؟', acceptedAnswer: { '@type': 'Answer', text: 'تجنب القيود البنيوية في المهام الإبداعية المفتوحة (العصف الذهني والإبداع والخيال). الإفراط في القيود في الموجّهات الإبداعية ينتج مخرجات قياسية منخفضة الجودة. استخدم قيود النبرة والأسلوب للمهام الإبداعية مع السماح بحرية بنيوية.' } },
          { '@type': 'Question', name: 'كم من القيود يمكنك تكديسها في موجّه؟', acceptedAnswer: { '@type': 'Answer', text: 'عمليًا، 3-5 قيود تعمل جيدًا. أكثر من 5-6، تبدأ النماذج في تجاهل القيود الأقل أولوية بصمت. إن احتجت أكثر من 5، رتّبها حسب الأولوية وأشر صراحةً: "إن تعارضت القيود، طبّقها بهذا الترتيب: (1) الأمان، (2) التنسيق، (3) الطول."' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'كيف تستخدم الموجّهات المقيّدة',
        inLanguage: 'ar',
        description: 'دليل من 5 خطوات لتطبيق قيود المخرجات في الموجّهات لـGPT-5.6 وClaude Sonnet 5 وGemini 3.1 Pro.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'حدّد قيود المخرجات', text: 'حدد القيود ذات الصلة بمهمتك: الطول والتنسيق والمفردات والنطاق والأمان.' },
          { '@type': 'HowToStep', position: 2, name: 'استخدم لغة قيود صارمة', text: 'صِغ القيود باستخدام "يجب" و"لا يجب" و"فقط" — لا تستخدم "حاول" أو "اهدف".' },
          { '@type': 'HowToStep', position: 3, name: 'قدّم مثالًا على التنسيق', text: 'لقيود التنسيق، أظهر المخطط الدقيق: مفاتيح JSON أو بنية Markdown أو أسماء الحقول.' },
          { '@type': 'HowToStep', position: 4, name: 'أدرج ما يجب تضمينه واستبعاده', text: 'أدرج صراحةً ما يجب تضمينه وما يجب استبعاده حسب الموضوع والمصطلحات ونوع البيانات.' },
          { '@type': 'HowToStep', position: 5, name: 'اختبر في الحالات الحدية', text: 'أنتج 10 مخرجات. تحقق من أن كلها تحترم حد الطول والتنسيق وحدود المحتوى.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '**الموجّهات المقيّدة** تضيف قواعد صريحة (البنية والمحتوى والطول والأمان) إلى الموجّه لجعل مخرجات الذكاء الاصطناعي قابلة للتنبؤ عبر جلسات متعددة.',
            '5 أنواع من القيود: بنيوية ومحتوى وأسلوب وطول وأمان — ادمجها للتحكم الأقصى في المخرجات.',
            'استخدم لغة إلزامية: **"يجب"، "لا يجب"، "فقط".** التوجيهات اللينة مثل "حاول" تُتجاهل كثيرًا.',
            'قيود التنسيق تعمل بشكل أفضل مع مثال: أظهر للنموذج مخطط JSON الدقيق أو بنية Markdown التي تحتاجها.',
            'يدعم GPT-5.6 وClaude Sonnet 5 وGemini 3.1 Pro الموجّهات المقيّدة — بالإضافة إلى التطبيق على مستوى API — لكنها تستجيب بشكل مختلف. اختبر عبر النماذج.',
            'الموجّهات ذات القيود توفر وقت المراجعة: المخرجات التي تطابق بنيتك المطلوبة تحتاج تصحيحًا بشريًا أقل.',
            'استخدم [PromptQuorum](https://www.promptquorum.com/) لاختبار الموجّهات ذات القيود على نماذج متعددة جنبًا إلى جنب ومقارنة الالتزام بالقيود.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'حقائق سريعة',
          items: [
            '**5 أنواع من القيود:** بنيوية ومحتوى وأسلوب وطول وأمان',
            '**التزام النماذج:** يتبع GPT-5.6 وClaude Opus 4.8 القيود الصارمة بنسبة ~95% في الموجّهات المنسّقة جيدًا',
            '**التكديس الأمثل:** 3-5 قيود تعمل جيدًا؛ أكثر من 5-6، تتجاهل النماذج الأقل أولوية بصمت',
            '**اتساق مخرجات JSON:** بدون مثال على المخطط، تنتج النماذج أسماء مفاتيح غير متسقة بين الجلسات',
            '**منهجية الاختبار:** أنتج 10 مخرجات للتحقق من أن كلها تحترم حد الطول والتنسيق وحدود المحتوى',
            '**وقت الإعداد:** أول تحقق من القيود يضيف 10-15 دقيقة؛ القوالب القابلة لإعادة الاستخدام توفر أكثر من 30 دقيقة لكل مهمة',
          ],
        },
        whatIsConstrained: {
          title: 'ما هي الموجّهات المقيّدة؟',
          content: [
            '**الموجّهات المقيّدة تعني إضافة قواعد صريحة حول المحتوى والبنية والطول والسلوك مباشرةً في موجّهك.** بدلًا من تعليمة مبهمة مثل "لخّص هذا"، تحدد التنسيقات المسموح بها والحقول المطلوبة والمواضيع المحظورة وقواعد التحقق. هذه تقنية محورية في [هندسة الموجّهات](/prompt-engineering/what-is-prompt-engineering).',
            'يمكن أن تتضمن القيود مخططات المخرجات (مثل JSON بمفاتيح ثابتة) وحدود الكلمات ومتطلبات النبرة وقيود الأمان مثل "لا تقدم تشخيصات طبية". بجعل هذه القواعد جزءًا من الموجّه، تقلل الغموض وتسهّل دمج النموذج في سير العمل الإنتاجية.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'الموجّهات المقيّدة هي ممارسة إضافة قواعد صريحة — التنسيق والطول والمحتوى وحدود الأمان — مباشرةً في الموجّه لجعل مخرجات الذكاء الاصطناعي قابلة للتنبؤ.' },
            { type: 'in-plain-terms', text: 'بدلًا من مطالبة الذكاء الاصطناعي بـ"كتابة ملخص"، تقول له: بحد أقصى 150 كلمة، استخدم نقاطًا، لا تذكر المنافسين، أدرج دائمًا دعوة للعمل. كلما كانت القواعد أكثر تحديدًا، كانت المخرجات أكثر اتساقًا.' },
          ],
          callouts: [
            { type: 'note', label: 'تعريف', text: 'الموجّهات المقيّدة ليست وظيفة API منفصلة — إنها تقنية موجّه. تطبّق القيود في نص عادي داخل الموجّه نفسه. لا حاجة لصياغة خاصة أو أعلام API.' },
          ],
        },
        whyItMatters: {
          title: 'لماذا تهم الموجّهات المقيّدة؟',
          content: [
            '**تهم الموجّهات المقيّدة كلما أطعمت مخرجات النموذج أشخاصًا أو عمليات أو أنظمة أخرى تعتمد على سلوك قابل للتنبؤ.** بدون قيود، يمكن أن ينتج الموجّه ذاته بنى أو مستويات تفصيل مختلفة بين الجلسات.',
            'القيود الواضحة تساعدك على:',
          ],
          items: [
            'منع المحتوى أو التنسيق غير المتوقع الذي يكسر الأدوات النهائية.',
            'تطبيق إرشادات العلامة التجارية أو القانونية أو الأمان مباشرةً على مستوى الموجّه.',
            'تقليل وقت المراجعة لأن المخرجات تطابق بنيتك المطلوبة بالفعل.',
          ],
          callouts: [
            { type: 'tip', label: 'نقطة رئيسية', text: 'المخرجات بلا قيود تتباين كثيرًا: نفس الموجّه، بنى مختلفة، أطوال مختلفة، نبرة مختلفة. القيود تُزيل هذا التباين وتجعل المخرجات جاهزة للإنتاج.' },
          ],
        },
        typesOfConstraints: {
          title: 'ما أنواع القيود التي يمكنك استخدامها؟',
          content: [
            '**يمكنك تقييد الموجّهات في أبعاد متعددة: البنية والمحتوى والأسلوب والطول والأمان.** كلما كنت أكثر دقة، كانت المخرجات أكثر اتساقًا.',
            'تشمل أنواع القيود الشائعة:',
          ],
          items: [
            'القيود البنيوية: عناوين مطلوبة وقوائم نقطية وجداول وJSON بمفاتيح محددة.',
            'قيود المحتوى: أقسام مطلوبة (مثل "المخاطر" أو "الخطوات التالية") ومواضيع أو عبارات محظورة.',
            'قيود الأسلوب: النبرة ("رسمية" أو "محايدة" أو "محادثاتية") ومستوى القراءة وقواعد المصطلحات.',
            'قيود الطول: حدود الكلمات أو الأحرف، أو عدد ثابت من النقاط أو الأقسام.',
            'قيود الأمان: تعليمات لتجنب البيانات الشخصية والنصائح الطبية والاستنتاجات القانونية وفئات المحتوى غير المسموح بها.',
          ],
          columns: ['نوع القيد', 'مثال', 'متى تستخدم'],
          rows: [
            { 'نوع القيد': 'بنيوي', 'مثال': '"أعِد كـJSON: {مفتاح: قيمة}"', 'متى تستخدم': 'تكاملات API وخطوط بيانات' },
            { 'نوع القيد': 'محتوى', 'مثال': '"يجب تضمين قسم المخاطر؛ لا يُذكر المنافسون"', 'متى تستخدم': 'التقارير والتواصل مع العملاء' },
            { 'نوع القيد': 'أسلوب', 'مثال': '"نبرة رسمية، بلا اختصارات، مستوى قراءة 8"', 'متى تستخدم': 'مخرجات تحكمها العلامة التجارية' },
            { 'نوع القيد': 'طول', 'مثال': '"≤150 كلمة، 5 نقاط بالضبط"', 'متى تستخدم': 'محتوى بقوالب وملخصات' },
            { 'نوع القيد': 'أمان', 'مثال': '"لا يجب تقديم تشخيصات طبية أو نصائح قانونية"', 'متى تستخدم': 'الصناعات المنظّمة والعامة' },
          ],
          callouts: [
            { type: 'tip', label: 'نصيحة احترافية', text: 'لمخرجات JSON، قدّم دائمًا أسماء المفاتيح الدقيقة وأنواع القيم في الموجّه. "أعِد JSON" بدون مخطط ينتج أسماء مفاتيح غير متسقة عبر النماذج.' },
            { type: 'insight', label: 'معدلات التزام النماذج', text: 'يتباين الالتزام بالقيود على مستوى الموجّه حسب النموذج ونوع القيد: يصل GPT-5.6 إلى ~95% في مخطط JSON و~90% في حدود الكلمات. يُحقق Claude Sonnet 5 ~97% في JSON و~92% في حدود الكلمات. الأنظمة المنظّمة على مستوى API تُحقق قرابة 100% امتثال لمخطط JSON.' },
          ],
        },
        example: {
          title: 'موجّه بلا قيود مقابل موجّه بقيود: مثال',
          content: [
            '**تأثير الموجّهات المقيّدة أوضح ما يكون عند مقارنة موجّه غير مقيّد بموجّه مقيّد للمهمة ذاتها.** إليك مثالًا لكتابة ملخص منتج موجز.',
            '**موجّه غير مقيّد** (ينتج طولًا وبنية ونبرة متباينة في كل جلسة):',
            '"اكتب ملخصًا لميزة التحليلات الجديدة لدينا."',
            '**نسخة مقيّدة** (تحدد الطول والبنية والأسلوب والمحتوى المطلوب):',
            '"أنت متخصص تسويق B2B. المهمة: اكتب ملخصًا لميزة التحليلات الجديدة لدينا لصفحة منتج. القيود: الطول: 120-160 كلمة. البنية: فقرة مقدمة قصيرة، ثم 3 نقاط، ثم جملة ختامية. الأسلوب: نبرة واضحة ومحايدة-احترافية. بلا كلمات مبالغ فيها مثل \'ثوري\' أو \'يغيّر قواعد اللعبة\'. المحتوى: اذكر الفائدة الرئيسية وحالة استخدام ملموسة. تنسيق المخرجات: Markdown صالح مع نقاط تستخدم `-`."',
            'تحدد النسخة المقيّدة الطول والبنية والأسلوب والمحتوى المطلوب. تصبح المخرجات قابلة للتنبؤ وإعادة الاستخدام.',
          ],
          callouts: [
            { type: 'practice', label: 'قاعدة', text: 'كل قيد تضيفه يقلل التباين في مخرجات النموذج. ابدأ بـ1-2 قيود، اختبر، ثم أضف المزيد. تكديس 5+ قيود في آنٍ واحد يزيد من خطر تجاهل النموذج لأحدها بصمت.' },
          ],
        },
        whenToUse: {
          title: 'متى تستخدم الموجّهات المقيّدة؟',
          content: [
            '**استخدم الموجّهات المقيّدة كلما كانت الدقة والاتساق أهم من الإبداع الأقصى.** ينطبق هذا بشكل خاص في السياقات التشغيلية والتحليلية والمنظّمة.',
            'تشمل حالات الاستخدام النموذجية:',
          ],
          items: [
            'توليد مخرجات JSON أو جداول ستقوم الأنظمة الأخرى بتحليلها.',
            'إنشاء تقارير أو ملخصات أو تحديثات حالة موحّدة عبر الفرق.',
            'صياغة تواصل مع العملاء يجب أن يتبع إرشادات العلامة التجارية أو القانونية.',
            'استخراج بيانات منظّمة (حوادث وكيانات ومقاييس) من نص غير منظّم.',
          ],
          callouts: [
            { type: 'warning', label: 'تجنّب', text: 'لا تطبّق قيود الطول أو البنيوية على المهام الإبداعية المفتوحة (العصف الذهني والإبداع). الإفراط في القيود في الموجّهات الإبداعية ينتج مخرجات قياسية تُعلّم الصناديق بدلًا من الأفكار الحقيقية.' },
          ],
        },
        howPQSupports: {
          title: 'كيف تدعم PromptQuorum الموجّهات المقيّدة؟',
          content: [
            '**PromptQuorum أداة إرسال ذكاء اصطناعي متعددة النماذج مصمّمة للعمل جيدًا مع الموجّهات المقيّدة، تتيح لك تعريف أطر الموجّهات المنظّمة وحفظها وإعادة استخدامها.** يمكنك دمج القيود مع أطر مثل [SPECS](/prompt-engineering/specs-framework) أو [RTF](/prompt-engineering/rtf-framework) وإرسالها إلى نماذج متعددة في آنٍ واحد.',
            'في PromptQuorum يمكنك:',
          ],
          items: [
            'ترميز القيود البنيوية والمحتوى مباشرةً في الأطر حتى تتبع كل جلسة نفس القواعد.',
            'اختبار الموجّهات المقيّدة على نماذج متعددة جنبًا إلى جنب لمعرفة أي مزوّد يلتزم أكثر بمواصفاتك.',
            'حفظ الموجّهات المقيّدة كقوالب للمهام المتكررة، مع ضمان استخدام فريقك دائمًا لنفس الأنماط المُتحقق منها.',
            'تحديد أي نموذج يعمل بشكل أفضل لحالتك — ثم توجيه حركة الإنتاج للفائز.',
          ],
          callouts: [
            { type: 'practice', label: 'ممارسة جيدة', text: 'اختبر دائمًا موجّهك المقيّد على نموذجين على الأقل قبل النشر. تفسّر النماذج المختلفة (GPT-5.6 مقابل Claude مقابل Gemini) القيود بشكل مختلف.' },
          ],
        },
        howToStart: {
          title: 'كيف تستخدم الموجّهات المقيّدة',
          numberedItems: [
            '**حدّد قيود المخرجات ذات الصلة بمهمتك: الطول والتنسيق والمفردات والنطاق والأمان.** مثال: "يجب أن تكون الاستجابة ≤100 كلمة، بتنسيق JSON، بمصطلحات تقنية فقط، تغطي التطورات الأخيرة فقط (2024+)، لا تذكر المنافسين."',
            '**صِغ القيود صراحةً باستخدام لغة مثل "يجب"، "لا يجب"، و"فقط".** تجنّب التوجيهات اللينة مثل "حاول" أو "اهدف". القيود الصارمة أكثر موثوقية.',
            '**لقيود التنسيق، قدّم مثالًا على التنسيق الدقيق الذي تريده.** أظهر للنموذج: "أعِد كـJSON: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\", \\"sources\\": [...] }"',
            '**لقيود المحتوى، أدرج صراحةً ما يجب تضمينه واستبعاده.** مثال: "أدرج: التفاصيل التقنية ومقاييس الأداء. استبعد: لغة التسويق وأسماء المنافسين والأسعار."',
            '**اختبر الموجّهات المقيّدة في الحالات الحدية لضمان احترام النموذج لجميع القيود.** أنتج 10 مخرجات. تحقق: هل يحترم كلٌّ منها حد الطول؟ هل كلها تستخدم التنسيق الصحيح؟',
          ],
          callouts: [
            { type: 'insight', label: 'نظرة ثاقبة', text: 'يتبع GPT-5.6 وClaude Sonnet 5 قيود التنسيق الصارمة (JSON وجداول وحدود الكلمات) بنسبة ~95% في الموجّهات المنسّقة جيدًا. الثلاثة يدعمون مخرجات منظّمة على مستوى API لامتثال قرابة 100% لمخطط JSON.' },
          ],
        },
        apiLevelEnforcement: {
          id: 'api-level-constraint-enforcement',
          title: 'تطبيق القيود على مستوى API (ما وراء نص الموجّه)',
          content: [
            '**في 2026، يقدم جميع مزوّدي الذكاء الاصطناعي الرئيسيين تطبيق القيود على مستوى API — بديل أكثر موثوقية من القيود في نص الموجّه.** بدلًا من توقع احترام النموذج لقواعدك، تطبّق القيود على مستوى توليد الرمز المميز عبر معامِلات API.',
            'يدعم المزوّدون الرئيسيون الآن المخرجات المنظّمة:',
            '**OpenAI Structured Outputs (GPT-5.6):** عيّن `response_format: { type: "json_schema", json_schema: {...} }` على مستوى API. يضمن JSON صالحًا يطابق مخططك بالضبط — موثوقية ~100%.',
            '**Anthropic Structured Outputs (Claude Sonnet 5):** استخدم معامِل `output_config.format` لتطبيق مخطط JSON من جهة الخادم.',
            '**Google Gemini 3.1 Pro:** عيّن `response_mime_type: "application/json"` مع `response_schema` لتطبيق المخرجات المنظّمة.',
            '**الميزة الرئيسية:** يعمل التطبيق على مستوى API على مستوى توليد الرمز المميز، وليس كتعليمة موجّه. النماذج لا تستطيع انتهاك القيد.',
            'استخدم هذه الإستراتيجية: **ادمج تطبيق مستوى API (للتنسيق) مع قيود مستوى الموجّه (للمحتوى).**',
          ],
          callouts: [
            { type: 'insight', label: 'ممارسة جيدة', text: 'عند توفّره، فضّل تطبيق القيود على مستوى API على القيود في نص الموجّه. مستوى API أكثر موثوقية (قرابة 100% التزام). احتفظ بقيود مستوى الموجّه للقواعد الدقيقة للمحتوى والنبرة والأمان.' },
          ],
        },
        regionalContext: {
          id: 'constrained-prompting-in-regulated-environments',
          title: 'الموجّهات المقيّدة في البيئات المنظّمة',
          content: [
            '**في الصناعات المنظّمة، الموجّهات المقيّدة ليست اختيارية — إنها متطلب امتثال.** يعتمد مزوّدو الرعاية الصحية والمؤسسات المالية ومكاتب المحامين على القيود لمنع المخرجات التي تنتهك HIPAA أو GDPR أو SOX أو أطر تنظيمية أخرى.',
            'اعتبارات إقليمية وقطاعية:',
          ],
          items: [
            '**الاتحاد الأوروبي (GDPR):** قيود الأمان التي تستبعد البيانات الشخصية والمالية والطبية إلزامية. يجب أن تنص الموجّهات صراحةً على: "لا تدرج بيانات شخصية أو مالية أو صحية."',
            '**الولايات المتحدة (SOX/HIPAA):** تتطلب الشركات المنظّمة في المالية والرعاية الصحية سجلات تدقيق واتفاقيات موقّعة. تحدد الموجّهات المقيّدة تنسيق المخرجات حتى تكون سجلات التدقيق كاملة وقابلة للتحقق.',
            '**اليابان (APPI):** قيود إقامة البيانات والموافقة حيوية. يجب أن تحدد الموجّهات: "معالجة بيانات المستخدمين المقيمين في اليابان فقط".',
            '**الصين (قانون أمان البيانات):** تقييد المخرجات على الجداول المنظّمة (بلا نص حر) وقيود التنسيق تضمن بقاء المخرجات ضمن مسارات معالجة البيانات المعتمدة.',
          ],
          callouts: [
            { type: 'warning', label: 'الامتثال', text: 'في الصناعات المنظّمة، ادمج دائمًا الموجّهات المقيّدة مع التوثيق. وثّق كل قيد، واختبر جميع تركيبات القيود، وسجّل النتائج. يتوقع المنظّمون رؤية دليل على أن القيود تم التحقق منها.' },
          ],
        },
        commonMistakes: {
          title: 'الأخطاء الشائعة',
          mistakes: [
            {
              mistake: 'استخدام لغة قيود لينة ("حاول"، "اهدف")',
              problem: 'تتعامل النماذج مع التوجيهات اللينة كاقتراحات لا قواعد. "حاول إبقاءه أقل من 200 كلمة" ينتج مخرجات تتراوح بين 80 و400 كلمة.',
              fix: 'استخدم لغة مطلقة: "يجب أن تكون الاستجابة 150-200 كلمة. بلا استثناءات."',
            },
            {
              mistake: 'تكديس قيود كثيرة دون ترتيب أولوية',
              problem: 'حين تتعارض 6+ قيود، تتجاهل النموذج الأقل أولوية بصمت دون إشعار.',
              fix: 'رتّب القيود حسب الأولوية. أضف: "إن تعارضت القيود، طبّقها بهذا الترتيب: (1) الأمان، (2) التنسيق، (3) الطول."',
            },
            {
              mistake: 'عدم تقديم مثال على التنسيق لمخرجات JSON/المنظّمة',
              problem: '"أعِد كـJSON" ينتج أسماء مفاتيح وتضمينًا غير متسقَين عبر النماذج والجلسات.',
              fix: 'أظهر المخطط الدقيق مضمّنًا: "أعِد JSON بهذه البنية بالضبط: { \\"finding\\": \\"...\\" }"',
            },
            {
              mistake: 'تطبيق قيود بنيوية على مهام التوليد الإبداعي',
              problem: 'البنية الصارمة في المهام المفتوحة تنتج مخرجات إبداعية قياسية ومنخفضة الجودة.',
              fix: 'احتفظ بالقيود البنيوية للمهام التشغيلية. استخدم قيود النبرة/الأسلوب فقط للمهام الإبداعية.',
            },
            {
              mistake: 'عدم اختبار القيود عبر النماذج',
              problem: 'يفسّر GPT-5.6 وClaude Sonnet 5 وGemini 3.1 Pro نفس القيد بشكل مختلف. موجّه يعمل في أحدها قد يفشل في آخر.',
              fix: 'اختبر موجّهك المقيّد على نموذجين على الأقل قبل النشر. استخدم [PromptQuorum](https://www.promptquorum.com/) للمقارنات المتوازية.',
            },
            {
              mistake: 'عدم تقديم مثال مع القيد',
              problem: '"أعِد JSON صالحًا" بلا مثال مخطط ينتج مفاتيح وبنى غير متسقة. النماذج غالبًا ما تخمّن أسماء الحقول.',
              fix: 'أظهر دائمًا المخطط أو التنسيق الدقيق مضمّنًا: "أعِد JSON بهذه البنية بالضبط: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\"  }"',
            },
          ],
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[ما هي هندسة الموجّهات؟](/ar/prompt-engineering/what-is-prompt-engineering) — الأساسيات قبل تطبيق القيود.',
            '[المخرجات المنظّمة: وضع JSON](/ar/prompt-engineering/structured-output-and-json-mode) — تطبيق مخططات المخرجات على مستوى API.',
            '[إطار RTF](/ar/prompt-engineering/rtf-framework) — الدور-المهمة-التنسيق: إطار منظّم يتكامل جيدًا مع الموجّهات المقيّدة.',
            '[موجّهات القليل من الأمثلة](/ar/prompt-engineering/zero-shot-vs-few-shot) — تقديم الأمثلة هو شكل من أشكال القيود الضمنية.',
            '[كيفية اختبار الموجّهات عبر النماذج](/ar/prompt-engineering/how-to-test-prompts-across-models) — التحقق من صحة الموجّهات المقيّدة على نماذج لغة متعددة.',
            '[حقن الموجّهات والأمان](/ar/prompt-engineering/prompt-injection-and-security) — قيود الأمان تحمي من المدخلات المعادية.',
            '[أتمتة أذكى للمنزل مع نموذج LLM محلي](/ar/smart-home/ai-automations-local-llm) — الـ constrained prompting في التطبيق: حدد بدقة ما يمكن للنموذج فعله وما لا يمكنه عند التحكم في أجهزة المنزل',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'ما هي الموجّهات المقيّدة؟', a: 'الموجّهات المقيّدة هي ممارسة إضافة قواعد صريحة — التنسيق والطول والمحتوى وحدود الأمان — مباشرةً في الموجّه لجعل مخرجات الذكاء الاصطناعي قابلة للتنبؤ وإعادة الاستخدام. بدلًا من "اكتب ملخصًا"، تحدد: 150 كلمة، تنسيق JSON، بلا أسماء منافسين، يجب تضمين دعوة للعمل.' },
            { q: 'ما أنواع القيود الخمسة؟', a: 'الأنواع الخمسة الرئيسية هي: (1) البنيوية — عناوين إلزامية وجداول وJSON. (2) المحتوى — أقسام مطلوبة ومواضيع محظورة. (3) الأسلوب — النبرة ومستوى القراءة والمصطلحات. (4) الطول — حدود الكلمات أو الأحرف. (5) الأمان — تجنب النصائح الطبية والبيانات الشخصية والاستنتاجات القانونية.' },
            { q: 'كيف أجبر النموذج على إنتاج JSON صالح؟', a: 'قدّم مخطط JSON الدقيق في الموجّه: "أعِد JSON بهذه البنية بالضبط: { \\"finding\\": \\"...\\" }". ادمجه مع "أعِد JSON فقط، بلا نص آخر."' },
            { q: 'هل تعمل الموجّهات المقيّدة مع GPT-5.6 وClaude وGemini؟', a: 'نعم — الثلاثة يدعمونها. يتبع GPT-5.6 وClaude Opus 4.8 القيود الصارمة بنسبة ~95% في الموجّهات المنسّقة جيدًا. Gemini 3.1 Pro يُحقق نتائج مماثلة. دائمًا اختبر عبر النماذج.' },
            { q: 'ما الفرق بين الموجّهات المقيّدة وموجّهات القليل من الأمثلة؟', a: 'تضيف الموجّهات المقيّدة قواعد صريحة نصية. توفر موجّهات القليل من الأمثلة نماذج تُظهر ضمنيًا ما يجب إنتاجه. يعملان معًا جيدًا.' },
            { q: 'متى لا تستخدم الموجّهات المقيّدة؟', a: 'تجنّب القيود البنيوية في المهام الإبداعية المفتوحة. الإفراط في القيود في الموجّهات الإبداعية ينتج مخرجات قياسية منخفضة الجودة.' },
            { q: 'كم من القيود يمكنك تكديسها في موجّه؟', a: 'عمليًا، 3-5 قيود تعمل جيدًا. أكثر من 5-6، تبدأ النماذج في تجاهل الأقل أولوية. إن احتجت أكثر من 5، رتّبها حسب الأولوية.' },
          ],
        },
        sources: {
          title: 'المصادر',
          items: [
            '**OpenAI. (2026).** "Structured Outputs — وضع JSON وResponses API." https://platform.openai.com/docs/guides/structured-outputs',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude',
            '**Google. (2026).** "Gemini API: توليد مُتحكَّم به مع response_schema." https://ai.google.dev/gemini-api/docs/controlled-generation',
            '**White et al. (2023).** "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." https://arxiv.org/abs/2302.11382',
            '**Zhou et al. (2022).** "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910',
          ],
        },
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      heroImage: '/images/constrained-prompting-overview-hero-pt.webp',
      title: 'Constrained Prompting: Saídas estruturadas para respostas confiáveis',
      intro: '**O constrained prompting é uma técnica em que você diz ao modelo não apenas o que fazer, mas também o que deve e não deve fazer — usando linguagem como "deve", "não deve" e "apenas" — para que as saídas permaneçam dentro de limites claramente definidos.** É essencial quando você precisa de formatos confiáveis, conteúdo seguro ou conformidade estrita com regras internas.',
      leadAnswerBlock: '**O constrained prompting é a prática de adicionar regras explícitas — formato, comprimento, conteúdo e limites de segurança — diretamente em um prompt para tornar a saída da IA previsível e reutilizável.** Em vez de "escreva um resumo", você especifica estrutura exata, conteúdo permitido e regras de validação.',
      publishDate: '2026-03-26',
      readTime: '6 min de leitura',
      seoTitle: 'Constrained Prompting: Saídas de IA estruturadas',
      metaDescription: 'Domine o constrained prompting para forçar a IA a produzir JSON, XML e formatos estruturados. 5 técnicas com exemplos reais para GPT-5.6, Claude e Gemini.',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Constrained Prompting',
      audience: 'Desenvolvedores, gerentes de produto e equipes que constroem workflows impulsados por LLMs',
      next_refresh_due: '2026-09-26',
      aboutTopics: ['Constrained Prompting', 'Saída Estruturada', 'Prompt Engineering'],
      toc: [
        { label: 'Pontos-chave', anchor: '#key-takeaways' },
        { label: 'Dados rápidos', anchor: '#quick-facts' },
        { label: 'O que é o constrained prompting?', anchor: '#what-is-constrained-prompting' },
        { label: 'Por que o constrained prompting importa?', anchor: '#why-does-constrained-prompting-matter' },
        { label: 'Quais tipos de restrições você pode usar?', anchor: '#which-constraint-types-can-you-use' },
        { label: 'Prompt sem restrições vs com restrições: um exemplo', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
        { label: 'Quando você deve usar constrained prompting?', anchor: '#when-should-you-use-constrained-prompting' },
        { label: 'Como o PromptQuorum suporta o constrained prompting?', anchor: '#how-does-promptquorum-support-constrained-prompting' },
        { label: 'Como usar constrained prompting', anchor: '#how-to-use-constrained-prompting' },
        { label: 'Aplicação de restrições no nível da API', anchor: '#api-level-constraint-enforcement' },
        { label: 'Constrained prompting em ambientes regulamentados', anchor: '#constrained-prompting-in-regulated-environments' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Leituras relacionadas', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#frequently-asked-questions' },
        { label: 'Fontes', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/constrained-prompting',
        inLanguage: 'pt-BR',
        headline: 'Constrained Prompting: Force formatos de saída de IA (2026)',
        description: 'O que é o constrained prompting, por que importa e como usá-lo para tornar as saídas de IA previsíveis e seguras em workflows reais.',
        datePublished: '2026-03-26',
        dateModified: '2026-07-13',
        keywords: ['constrained prompting', 'prompt engineering', 'prompts estruturados', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Constrained Prompting' },
          { '@type': 'Thing', name: 'Saída Estruturada' },
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
        inLanguage: 'pt-BR',
        mainEntity: [
          { '@type': 'Question', name: 'O que é o constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'O constrained prompting é a prática de adicionar regras explícitas — formato, comprimento, conteúdo e limites de segurança — diretamente em um prompt para tornar a saída da IA previsível e reutilizável. Em vez de "escreva um resumo", você especifica: 150 palavras, formato JSON, sem nomes de concorrentes, deve incluir uma chamada para ação.' } },
          { '@type': 'Question', name: 'Quais são os cinco tipos de restrições?', acceptedAnswer: { '@type': 'Answer', text: 'Os cinco tipos principais são: (1) Estrutural — cabeçalhos obrigatórios, tabelas, JSON com chaves específicas. (2) Conteúdo — seções obrigatórias, tópicos proibidos. (3) Estilo — tom, nível de leitura, terminologia. (4) Comprimento — limites de palavras ou caracteres. (5) Segurança — evitar conselhos médicos, dados pessoais, conclusões legais.' } },
          { '@type': 'Question', name: 'Como forço um modelo a produzir JSON válido?', acceptedAnswer: { '@type': 'Answer', text: 'Forneça o esquema JSON exato no prompt: "Retorne JSON exatamente com esta estrutura: { \\"finding\\": \\"...\\" }". Combine-o com "Retorne apenas JSON, sem outro texto." O GPT-5.6 também suporta um modo JSON via API que aplica JSON válido no nível da API.' } },
          { '@type': 'Question', name: 'O constrained prompting funciona no GPT-5.6, Claude e Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — os três suportam constrained prompting. GPT-5.6 e Claude Opus 4.8 seguem restrições de formato estrito (JSON, tabelas, limites de palavras) com ~95% de adesão em prompts bem formados. Os três também suportam aplicação de restrições no nível da API via structured outputs.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre constrained prompting e few-shot prompting?', acceptedAnswer: { '@type': 'Answer', text: 'O constrained prompting adiciona regras explícitas em forma de texto (formato, comprimento, restrições de conteúdo). O few-shot prompting fornece exemplos que mostram implicitamente ao modelo o que produzir. Os dois funcionam bem juntos: use um exemplo few-shot para mostrar o padrão de saída, depois adicione restrições para uma aplicação mais rigorosa.' } },
          { '@type': 'Question', name: 'Quando NÃO usar constrained prompting?', acceptedAnswer: { '@type': 'Answer', text: 'Evite restrições estruturais em tarefas criativas abertas (brainstorming, ideação, ficção). O excesso de restrições em prompts criativos produz saídas formulaicas e de baixa qualidade. Use restrições de tom e estilo para tarefas criativas, mas permita liberdade estrutural.' } },
          { '@type': 'Question', name: 'Quantas restrições você pode empilhar em um prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Na prática, 3–5 restrições funcionam bem. Mais de 5–6, os modelos começam a omitir silenciosamente as restrições de menor prioridade sem aviso. Se você precisar de mais de 5, liste-as em ordem de prioridade e indique explicitamente: "Se as restrições entrarem em conflito, aplique-as nesta ordem: (1) segurança, (2) formato, (3) comprimento."' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Como usar constrained prompting',
        inLanguage: 'pt-BR',
        description: 'Um guia de 5 passos para aplicar restrições de saída em prompts para GPT-5.6, Claude Sonnet 5 e Gemini 3.1 Pro.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Identifique as restrições de saída', text: 'Identifique as restrições relevantes para sua tarefa: comprimento, formato, vocabulário, escopo e segurança.' },
          { '@type': 'HowToStep', position: 2, name: 'Use linguagem de restrição estrita', text: 'Formule as restrições usando "deve", "não deve" e "apenas" — nunca "tente" ou "aponte para".' },
          { '@type': 'HowToStep', position: 3, name: 'Forneça um exemplo de formato', text: 'Para restrições de formato, mostre o esquema exato inline: chaves JSON, estrutura Markdown ou nomes de campos.' },
          { '@type': 'HowToStep', position: 4, name: 'Liste inclusões e exclusões de conteúdo', text: 'Liste explicitamente o que incluir e o que excluir por tópico, terminologia e tipo de dado.' },
          { '@type': 'HowToStep', position: 5, name: 'Teste em casos extremos', text: 'Gere 10 saídas. Verifique se todas respeitam o limite de comprimento, o formato e os limites de conteúdo.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          items: [
            '**O constrained prompting** adiciona regras explícitas (estrutura, conteúdo, comprimento, segurança) a um prompt para que a saída da IA seja previsível em múltiplas execuções.',
            '5 tipos de restrições: estrutural, conteúdo, estilo, comprimento e segurança — combine-os para o máximo controle de saída.',
            'Use linguagem obrigatória: **"deve", "não deve", "apenas".** Diretivas suaves como "tente" são frequentemente ignoradas.',
            'As restrições de formato funcionam melhor com um exemplo: mostre ao modelo o esquema JSON exato ou a estrutura Markdown que você precisa.',
            'GPT-5.6, Claude Sonnet 5 e Gemini 3.1 Pro suportam constrained prompting — além da aplicação no nível da API via structured outputs — mas respondem de forma diferente às restrições no nível do prompt. Teste entre modelos.',
            'Os prompts com restrições economizam tempo de revisão: as saídas que já correspondem à sua estrutura exigida precisam de menos correção humana.',
            'Use o [PromptQuorum](https://www.promptquorum.com/) para testar prompts com restrições em múltiplos modelos lado a lado e comparar a adesão às restrições.',
          ],
        },
        quickFacts: {
          id: 'quick-facts',
          title: 'Dados rápidos',
          items: [
            '**5 tipos de restrições:** Estrutural, Conteúdo, Estilo, Comprimento, Segurança',
            '**Adesão dos modelos:** GPT-5.6 e Claude Opus 4.8 seguem restrições estritas com ~95% em prompts bem formados',
            '**Empilhamento ideal:** 3–5 restrições funcionam bem; mais de 5–6, os modelos omitem silenciosamente as de menor prioridade',
            '**Consistência de saída JSON:** Sem um exemplo de esquema, os modelos produzem nomes de chaves inconsistentes entre execuções',
            '**Metodologia de teste:** Gere 10 saídas para verificar se todas respeitam comprimento, formato e limites de conteúdo',
            '**Tempo de configuração:** A primeira validação de restrições adiciona 10–15 minutos; modelos reutilizáveis economizam 30+ minutos por tarefa',
          ],
        },
        whatIsConstrained: {
          title: 'O que é o constrained prompting?',
          content: [
            '**O constrained prompting significa adicionar regras explícitas sobre conteúdo, estrutura, comprimento e comportamento diretamente em seu prompt.** Em vez de uma instrução vaga como "resuma isso", você especifica formatos permitidos, campos obrigatórios, tópicos proibidos e regras de validação.',
            'As restrições podem incluir esquemas de saída (como JSON com chaves fixas), limites de palavras, requisitos de tom e restrições de segurança como "não forneça diagnósticos médicos". Ao tornar essas regras parte do prompt, você reduz a ambiguidade e facilita a integração do modelo em workflows de produção.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'O constrained prompting é a prática de adicionar regras explícitas — formato, comprimento, conteúdo e limites de segurança — diretamente em um prompt para tornar a saída da IA previsível.' },
            { type: 'in-plain-terms', text: 'Em vez de pedir à IA que "escreva um resumo", você diz: máximo 150 palavras, use marcadores, não mencione concorrentes, inclua sempre uma chamada para ação. Quanto mais específicas as regras, mais consistente será a saída.' },
          ],
          callouts: [
            { type: 'note', label: 'Definição', text: 'O constrained prompting não é um recurso de API separado — é uma técnica de prompting. Você aplica restrições em texto simples dentro do próprio prompt. Não é necessária sintaxe especial ou flags de API.' },
          ],
        },
        whyItMatters: {
          title: 'Por que o constrained prompting importa?',
          content: [
            '**O constrained prompting importa sempre que a saída do modelo alimenta pessoas, processos ou outros sistemas que dependem de comportamento previsível.** Sem restrições, o mesmo prompt pode produzir estruturas ou níveis de detalhe diferentes entre execuções.',
            'Restrições claras ajudam você a:',
          ],
          items: [
            'Prevenir conteúdo ou formato inesperados que quebrem ferramentas downstream.',
            'Aplicar diretrizes de marca, legais ou de segurança diretamente no nível do prompt.',
            'Reduzir o tempo de revisão porque as saídas já correspondem à sua estrutura exigida.',
          ],
          callouts: [
            { type: 'tip', label: 'Ponto-chave', text: 'As saídas sem restrições variam muito: mesmo prompt, estruturas diferentes, comprimentos diferentes, tom diferente. As restrições eliminam essa variância e tornam a saída pronta para produção.' },
          ],
        },
        typesOfConstraints: {
          title: 'Quais tipos de restrições você pode usar?',
          content: [
            '**Você pode restringir prompts em várias dimensões: estrutura, conteúdo, estilo, comprimento e segurança.** Quanto mais preciso você for, mais consistentes serão as saídas.',
            'Os tipos comuns de restrições incluem:',
          ],
          items: [
            'Restrições estruturais: Cabeçalhos obrigatórios, listas de marcadores, tabelas ou JSON com chaves específicas.',
            'Restrições de conteúdo: Seções obrigatórias (como "Riscos" ou "Próximos passos") e tópicos ou frases proibidos.',
            'Restrições de estilo: Tom ("formal", "neutro", "conversacional"), nível de leitura ou regras de terminologia.',
            'Restrições de comprimento: Limites de palavras ou caracteres, ou um número fixo de marcadores ou seções.',
            'Restrições de segurança: Instruções para evitar dados pessoais, conselhos médicos, conclusões legais ou categorias de conteúdo não permitidas.',
          ],
          columns: ['Tipo de restrição', 'Exemplo', 'Quando usar'],
          rows: [
            { 'Tipo de restrição': 'Estrutural', 'Exemplo': '"Retorne como JSON: {chave: valor}"', 'Quando usar': 'Integrações de API, pipelines de dados' },
            { 'Tipo de restrição': 'Conteúdo', 'Exemplo': '"Deve incluir seção de riscos; não deve mencionar concorrentes"', 'Quando usar': 'Relatórios, comunicações com clientes' },
            { 'Tipo de restrição': 'Estilo', 'Exemplo': '"Tom formal, sem contrações, nível de leitura 8"', 'Quando usar': 'Saídas controladas por marca' },
            { 'Tipo de restrição': 'Comprimento', 'Exemplo': '"≤150 palavras, exatamente 5 marcadores"', 'Quando usar': 'Conteúdo com modelo, resumos' },
            { 'Tipo de restrição': 'Segurança', 'Exemplo': '"Não deve fornecer diagnósticos médicos nem assessoria jurídica"', 'Quando usar': 'Setores regulamentados, voltados ao público' },
          ],
          callouts: [
            { type: 'tip', label: 'Dica profissional', text: 'Para saída JSON, sempre forneça os nomes exatos das chaves e os tipos de valor no prompt. "Retorne JSON" sem um esquema produz nomes de chaves inconsistentes entre modelos.' },
            { type: 'insight', label: 'Taxas de adesão dos modelos', text: 'A adesão a restrições no nível do prompt varia por modelo e tipo de restrição: GPT-5.6 atinge ~95% no esquema JSON, ~90% em limites de palavras, ~95% na inclusão de conteúdo. Claude Sonnet 5 pontua ~97% em JSON, ~92% em limites de palavras, ~96% na inclusão. Gemini 3.1 Pro: ~92% JSON, ~85% limites de palavras, ~93% inclusão.' },
          ],
        },
        example: {
          title: 'Prompt sem restrições vs com restrições: um exemplo',
          content: [
            '**O impacto do constrained prompting é mais fácil de ver quando você compara um prompt sem restrições com um com restrições para a mesma tarefa.**',
            '**Prompt sem restrições** (produz comprimento, estrutura e tom variáveis em cada execução):',
            '"Escreva um resumo do nosso novo recurso de análise."',
            '**Versão com restrições** (define comprimento, estrutura, estilo e conteúdo obrigatório):',
            '"Você é um profissional de marketing B2B. Tarefa: Escreva um resumo do nosso novo recurso de análise para uma página de produto. Restrições: Comprimento: 120–160 palavras. Estrutura: 1 parágrafo de introdução curto, depois 3 marcadores, depois 1 frase de encerramento. Estilo: Tom claro, neutro-profissional. Sem palavras de hype como \'revolucionário\' ou \'que muda o jogo\'. Conteúdo: Mencione o benefício principal (insights mais rápidos sobre o comportamento do cliente) e um caso de uso concreto. Formato de saída: Markdown válido com marcadores usando `-`."',
            'A versão com restrições define comprimento, estrutura, estilo e conteúdo obrigatório. A saída se torna previsível e reutilizável.',
          ],
          callouts: [
            { type: 'practice', label: 'Regra', text: 'Cada restrição que você adiciona reduz a variância na saída do modelo. Comece com 1–2 restrições, teste, depois adicione mais. Empilhar 5+ restrições de uma vez aumenta o risco de o modelo violar uma silenciosamente.' },
          ],
        },
        whenToUse: {
          title: 'Quando você deve usar constrained prompting?',
          content: [
            '**Você deve usar constrained prompting sempre que a correção e a consistência sejam mais importantes do que a máxima criatividade.**',
            'Os casos de uso típicos incluem:',
          ],
          items: [
            'Gerar saídas JSON ou em tabela que outros sistemas vão processar.',
            'Criar relatórios, resumos ou atualizações de status padronizados em todas as equipes.',
            'Redigir comunicações com clientes que devem seguir diretrizes de marca ou legais.',
            'Extrair dados estruturados (incidências, entidades, métricas) de texto não estruturado.',
          ],
          callouts: [
            { type: 'warning', label: 'Evitar', text: 'Não aplique restrições de comprimento ou estruturais a tarefas criativas abertas (brainstorming, ideação). O excesso de restrições em prompts criativos produz saídas genéricas.' },
          ],
        },
        howPQSupports: {
          title: 'Como o PromptQuorum suporta o constrained prompting?',
          content: [
            '**O PromptQuorum é uma ferramenta de despacho de IA multi-modelo projetada para trabalhar bem com constrained prompting, permitindo que você defina, salve e reutilize frameworks de prompts estruturados.**',
            'No PromptQuorum você pode:',
          ],
          items: [
            'Codificar restrições estruturais e de conteúdo diretamente nos frameworks para que cada execução siga as mesmas regras.',
            'Testar prompts com restrições em múltiplos modelos lado a lado para ver qual provedor adere melhor às suas especificações.',
            'Salvar prompts com restrições como modelos para tarefas recorrentes, garantindo que sua equipe sempre use os mesmos padrões validados.',
            'Identificar qual modelo funciona melhor para seu caso de uso — depois rotear o tráfego de produção para o vencedor.',
          ],
          callouts: [
            { type: 'practice', label: 'Boa prática', text: 'Sempre teste seu prompt com restrições em pelo menos 2 modelos antes de implantá-lo. Diferentes modelos (GPT-5.6 vs Claude vs Gemini) interpretam as restrições de forma diferente.' },
          ],
        },
        howToStart: {
          title: 'Como usar constrained prompting',
          numberedItems: [
            '**Identifique as restrições de saída relevantes para sua tarefa: comprimento, formato, vocabulário, escopo, segurança.** Exemplo: \'A resposta deve ter ≤100 palavras, formato JSON, usar apenas termos técnicos, cobrir apenas desenvolvimentos recentes (2024+), não deve mencionar concorrentes.\'',
            '**Formule as restrições explicitamente usando linguagem como "deve", "não deve" e "apenas".** Evite diretivas suaves como "tente" ou "aponte para". Restrições estritas são mais confiáveis.',
            '**Para restrições de formato, forneça um exemplo do formato exato que você quer.** Mostre ao modelo: \'Retorne como JSON: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\", \\"sources\\": [...] }\'',
            '**Para restrições de conteúdo, liste explicitamente o que incluir e excluir.** Exemplo: \'Incluir: detalhes técnicos, métricas de desempenho. Excluir: linguagem de marketing, nomes de concorrentes, preços.\'',
            '**Teste os prompts com restrições em casos extremos para garantir que o modelo respeite todas as restrições.** Gere 10 saídas. Verifique: todas respeitam o limite de comprimento? Todas usam o formato correto? Há alguma violação?',
          ],
          callouts: [
            { type: 'insight', label: 'Perspectiva', text: 'GPT-5.6 e Claude Sonnet 5 seguem restrições de formato estrito (JSON, tabelas, limites de palavras) com ~95% de adesão em prompts bem formados. Gemini 3.1 Pro pontua de forma similar. Os três suportam Structured Outputs no nível da API para quase 100% de conformidade do esquema JSON.' },
          ],
        },
        apiLevelEnforcement: {
          id: 'api-level-constraint-enforcement',
          title: 'Aplicação de restrições no nível da API (além do texto do prompt)',
          content: [
            '**Em 2026, todos os principais provedores de IA oferecem aplicação de restrições no nível da API — uma alternativa mais confiável às restrições em texto de prompt.**',
            'Os principais provedores agora suportam structured outputs:',
            '**OpenAI Structured Outputs (GPT-5.6):** Defina `response_format: { type: "json_schema", json_schema: {...} }` no nível da API. Garante JSON válido que corresponde exatamente ao seu esquema — ~100% de confiabilidade.',
            '**Anthropic Structured Outputs (Claude Sonnet 5):** Use o parâmetro `output_config.format` para aplicar o esquema JSON no lado do servidor.',
            '**Google Gemini 3.1 Pro:** Defina `response_mime_type: "application/json"` com `response_schema` para aplicar saída estruturada.',
            '**Vantagem principal:** A aplicação no nível da API opera no nível de geração de tokens, não como uma instrução de prompt. Os modelos não podem violar a restrição — ela é aplicada pela API antes que a saída seja retornada.',
            'Use esta estratégia: **Combine a aplicação no nível da API (para formato) com restrições no nível do prompt (para conteúdo).**',
          ],
          callouts: [
            { type: 'insight', label: 'Boa prática', text: 'Quando disponível, prefira a aplicação de restrições no nível da API sobre as restrições em texto de prompt. O nível da API é mais confiável (próximo de 100% de adesão). Reserve as restrições no nível do prompt para regras matizadas de conteúdo, tom e segurança que o nível da API não trata.' },
          ],
        },
        regionalContext: {
          id: 'constrained-prompting-in-regulated-environments',
          title: 'Constrained prompting em ambientes regulamentados',
          content: [
            '**Em setores regulamentados, o constrained prompting não é opcional — é um requisito de conformidade.**',
            'Considerações regionais e setoriais:',
          ],
          items: [
            '**Brasil (LGPD):** Restrições de segurança que excluem dados pessoais, informações financeiras e histórico médico são obrigatórias. Os prompts devem indicar explicitamente: "Não incluir dados pessoais, informações financeiras nem informações de saúde."',
            '**EUA (SOC/HIPAA):** Empresas regulamentadas em finanças e saúde exigem trilhas de auditoria e acordos assinados. Prompts com restrições bloqueiam o formato de saída para que os registros de auditoria sejam completos e verificáveis.',
            '**UE (RGPD):** As restrições de segurança que excluem dados pessoais são obrigatórias. Os prompts devem especificar: "Não incluir informações pessoais identificáveis."',
            '**Setores regulamentados (saúde, finanças, jurídico):** Combine sempre o constrained prompting com documentação. Escreva cada restrição, teste todas as combinações e registre os resultados.',
          ],
          callouts: [
            { type: 'warning', label: 'Conformidade', text: 'Em setores regulamentados, combine sempre o constrained prompting com documentação. Escreva cada restrição, teste todas as combinações de restrições e registre os resultados. Os reguladores esperam ver provas de que as restrições foram validadas.' },
          ],
        },
        commonMistakes: {
          title: 'Erros comuns',
          mistakes: [
            {
              mistake: 'Usar linguagem de restrição suave ("tente", "aponte para")',
              problem: 'Os modelos tratam diretivas suaves como sugestões, não como regras. "Tente manter abaixo de 200 palavras" produz saídas que vão de 80 a 400 palavras.',
              fix: 'Use linguagem absoluta: "A resposta deve ter 150–200 palavras. Sem exceções."',
            },
            {
              mistake: 'Empilhar muitas restrições sem ordem de prioridade',
              problem: 'Quando 6+ restrições entram em conflito, o modelo omite silenciosamente as de menor prioridade sem aviso.',
              fix: 'Liste as restrições em ordem de prioridade. Adicione: "Se as restrições entrarem em conflito, aplique-as nesta ordem: (1) segurança, (2) formato, (3) comprimento."',
            },
            {
              mistake: 'Não fornecer um exemplo de formato para saída JSON/estruturada',
              problem: '"Retorne como JSON" produz nomes de chaves e aninhamento inconsistentes entre modelos e execuções.',
              fix: 'Mostre o esquema exato inline: "Retorne JSON exatamente com esta estrutura: { \\"finding\\": \\"...\\" }"',
            },
            {
              mistake: 'Aplicar restrições estruturais a tarefas de geração criativa',
              problem: 'Estrutura rígida em tarefas abertas produz saídas criativas formulaicas e de baixa qualidade.',
              fix: 'Reserve as restrições estruturais para tarefas operacionais. Use apenas restrições de tom/estilo para tarefas criativas.',
            },
            {
              mistake: 'Não testar as restrições entre modelos',
              problem: 'GPT-5.6, Claude Sonnet 5 e Gemini 3.1 Pro interpretam a mesma restrição de forma diferente.',
              fix: 'Teste seu prompt com restrições em pelo menos 2 modelos antes de implantá-lo. Use o [PromptQuorum](https://www.promptquorum.com/) para comparações em paralelo.',
            },
            {
              mistake: 'Não fornecer um exemplo junto com a restrição',
              problem: '"Retorne JSON válido" sem um exemplo de esquema produz chaves e estruturas inconsistentes entre modelos e execuções.',
              fix: 'Sempre mostre o esquema ou formato exato inline: "Retorne JSON exatamente com esta estrutura: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\"  }"',
            },
          ],
        },
        relatedReading: {
          title: 'Leituras relacionadas',
          items: [
            '[O que é prompt engineering?](/pt/prompt-engineering/what-is-prompt-engineering) — Fundamentos antes de aplicar restrições.',
            '[Saída estruturada: modo JSON](/pt/prompt-engineering/structured-output-and-json-mode) — Aplicação de esquemas de saída no nível da API.',
            '[Framework RTF](/pt/prompt-engineering/rtf-framework) — Role-Task-Format: um framework estruturado que se combina bem com constrained prompting.',
            '[Few-shot prompting](/pt/prompt-engineering/zero-shot-vs-few-shot) — Fornecer exemplos é uma forma de restrição implícita.',
            '[Como testar prompts entre modelos](/pt/prompt-engineering/how-to-test-prompts-across-models) — Valide prompts com restrições em múltiplos LLMs.',
            '[Injeção de prompt e segurança](/pt/prompt-engineering/prompt-injection-and-security) — Restrições de segurança defendem contra entradas adversariais.',
            '[Automações domésticas mais inteligentes com um LLM local](/pt/smart-home/ai-automations-local-llm) — constrained prompting na prática: defina exatamente o que o LLM pode e não pode fazer ao controlar dispositivos domésticos',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'O que é o constrained prompting?', a: 'O constrained prompting é a prática de adicionar regras explícitas — formato, comprimento, conteúdo e limites de segurança — diretamente em um prompt para tornar a saída da IA previsível e reutilizável.' },
            { q: 'Quais são os cinco tipos de restrições?', a: 'Os cinco tipos principais são: (1) Estrutural — cabeçalhos obrigatórios, tabelas, JSON com chaves específicas. (2) Conteúdo — seções obrigatórias, tópicos proibidos. (3) Estilo — tom, nível de leitura, terminologia. (4) Comprimento — limites de palavras ou caracteres. (5) Segurança — evitar conselhos médicos, dados pessoais, conclusões legais.' },
            { q: 'Como forço um modelo a produzir JSON válido?', a: 'Forneça o esquema JSON exato no prompt: "Retorne JSON exatamente com esta estrutura: { \\"finding\\": \\"...\\" }". Combine com "Retorne apenas JSON, sem outro texto."' },
            { q: 'O constrained prompting funciona no GPT-5.6, Claude e Gemini?', a: 'Sim — os três suportam constrained prompting. GPT-5.6 e Claude Opus 4.8 seguem restrições de formato estrito com ~95% de adesão em prompts bem formados. Gemini 3.1 Pro pontua de forma similar. Sempre teste entre modelos.' },
            { q: 'Qual é a diferença entre constrained prompting e few-shot prompting?', a: 'O constrained prompting adiciona regras explícitas em forma de texto. O few-shot prompting fornece exemplos que mostram implicitamente ao modelo o que produzir. Os dois funcionam bem juntos.' },
            { q: 'Quando NÃO usar constrained prompting?', a: 'Evite restrições estruturais em tarefas criativas abertas (brainstorming, ideação, ficção). O excesso de restrições produz saídas formulaicas.' },
            { q: 'Quantas restrições você pode empilhar em um prompt?', a: 'Na prática, 3–5 restrições funcionam bem. Mais de 5–6, os modelos começam a omitir silenciosamente as de menor prioridade.' },
          ],
        },
        sources: {
          title: 'Fontes',
          items: [
            '**OpenAI. (2026).** "Structured Outputs — Modo JSON e Responses API." https://platform.openai.com/docs/guides/structured-outputs',
            '**Anthropic. (2026).** "Claude Structured Outputs — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude',
            '**Google. (2026).** "Gemini API: Geração controlada com response_schema." https://ai.google.dev/gemini-api/docs/controlled-generation',
            '**White et al. (2023).** "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." https://arxiv.org/abs/2302.11382',
            '**Zhou et al. (2022).** "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910',
          ],
        },
      },
    },
    fr: {
  freshness_tier: 'semi_annual',
  theme: 'Techniques de Prompting',
      heroImage: '/images/constrained-prompting-overview-hero-fr.webp',
  title: 'Prompting avec Contraintes : Structures Garanties pour Modèles de Langage',
  intro: '**Le prompting avec contraintes signifie ajouter des règles explicites — format, longueur, contenu, limites de sécurité — directement dans un prompt pour que les sorties IA restent prévisibles et réutilisables.** C\'est essentiel quand vous avez besoin de formats fiables, de contenu sécurisé, ou de respect strict des règles internes.',
  leadAnswerBlock: '**Le prompting avec contraintes est la pratique d\'ajouter des règles explicites — format, longueur, contenu et limites de sécurité — directement dans un prompt pour rendre les outputs IA prévisibles et réutilisables.** Au lieu de « rédige un résumé », vous spécifiez : 150 mots, format JSON, pas de noms concurrents, doit inclure un appel à l\'action.',
  publishDate: '2026-03-26',
  readTime: '6 min de lecture',
  seoTitle: 'Prompting avec Contraintes: Structures Fiables',
  metaDescription: 'Prompting avec contraintes pour outputs LLM prévisibles. Formats stricts, validation de schémas JSON, API-level enforcement avec GPT-5.6, Claude Sonnet 5, Gemini 3.1 Pro.',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Prompting avec contraintes',
  dateModified: '2026-07-13',
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
    dateModified: '2026-07-13',
    keywords: ['prompting avec contraintes', 'prompting', 'outputs structurés', 'JSON schema', 'PromptQuorum'],
    author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
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
      { '@type': 'Question', name: 'Comment forcer un modèle à produire du JSON valide ?', acceptedAnswer: { '@type': 'Answer', text: 'Fournissez le schéma JSON exact dans le prompt : « Retournez JSON exactement dans ce format : { \"finding\": \"...\" } ». Combinez avec « Produisez uniquement JSON, pas d\'autre texte. » GPT-5.6 supporte aussi un mode JSON via l\'API qui applique le JSON valide au niveau API.' } },
      { '@type': 'Question', name: 'Le prompting avec contraintes fonctionne-t-il sur GPT-5.6, Claude et Gemini ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — tous les trois supportent le prompting avec contraintes. GPT-5.6 et Claude Sonnet 5 respectent les contraintes de format stricte (JSON, tableaux, limites de mots) avec ~95% de conformité sur les prompts bien formés. Tous les trois supportent aussi Structured Outputs au niveau API pour ~100% de conformité de schéma JSON. Gemini 3.1 Pro obtient des résultats similaires mais peut interpréter différemment les contraintes ambiguës. Testez toujours sur plusieurs modèles.' } },
      { '@type': 'Question', name: 'Quelle est la différence entre prompting avec contraintes et prompting few-shot ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prompting avec contraintes ajoute des règles explicites en texte (format, longueur, restrictions de contenu). Le prompting few-shot fournit des exemples qui montrent implicitement ce qu\'il faut produire. Les deux fonctionnent bien ensemble : utilisez un exemple few-shot pour montrer le pattern de sortie, puis ajoutez des contraintes pour une application stricte.' } },
      { '@type': 'Question', name: 'Quand ne PAS utiliser le prompting avec contraintes ?', acceptedAnswer: { '@type': 'Answer', text: 'Évitez les contraintes structurelles sur les tâches créatives ouvertes (brainstorming, idéation, fiction). Sur-contraindre les prompts créatifs produit du contenu formulaire et de faible qualité. Utilisez les contraintes de ton et de style pour les tâches créatives, mais autorisez la liberté structurelle.' } },
      { '@type': 'Question', name: 'Combien de contraintes pouvez-vous empiler dans un prompt ?', acceptedAnswer: { '@type': 'Answer', text: 'Pratiquement, 3–5 contraintes fonctionnent bien. Au-delà de 5–6, les modèles commencent à ignorer silencieusement les contraintes de faible priorité sans avertissement. Si vous avez besoin de plus de 5, listez-les par ordre de priorité et indiquez explicitement : « Si les contraintes entrent en conflit, appliquez-les dans cet ordre : (1) sécurité, (2) format, (3) longueur. »' } },
      { '@type': 'Question', name: 'Le prompting avec contraintes ralentit-il les réponses des LLM ?', acceptedAnswer: { '@type': 'Answer', text: 'Légèrement. Une contrainte stricte limite l\'espace de recherche du modèle, ce qui peut accélérer la génération. Mais l\'intention explicite du modèle (« Parse this into JSON ») ajoute un peu de latence. Dans la plupart des cas (< 100 ms), ce coût est acceptable pour la fiabilité.' } },
      { '@type': 'Question', name: 'Tous les modèles supportent-ils les contraintes ?', acceptedAnswer: { '@type': 'Answer', text: 'Les modèles modernes (GPT-5.6, Claude Sonnet 5, Llama 3.2, Mistral) supportent bien les contraintes de format et les énumérés. Mais plus la contrainte est complexe (schémas imbriqués profonds, logique sémantique), plus la conformité varie. Les petits modèles (< 7B) sont moins fiables. Testez votre modèle et vos cas d\'usage spécifiques.' } },
      { '@type': 'Question', name: 'Devrais-je mettre la contrainte dans le prompt système ou utilisateur ?', acceptedAnswer: { '@type': 'Answer', text: 'Les deux fonctionnent, mais avec des différences : le prompt système (instructions) donne une conformité plus cohérente et globale. Le prompt utilisateur (contenu) permet des contraintes spécifiques au message. Meilleure pratique : mettez la contrainte générale (format, type) dans le prompt système ; mettez les contraintes spécifiques au contexte (données, limites) dans le prompt utilisateur.' } },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment intégrer le prompting avec contraintes',
    inLanguage: 'fr',
    description: 'Guide 5 étapes pour appliquer les contraintes d\'output dans les prompts pour GPT-5.6, Claude Sonnet 5 et Gemini 3.1 Pro.',
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
        'GPT-5.6, Claude Sonnet 5 et Gemini 3.1 Pro supportent tous le prompting avec contraintes — y compris l\'enforcement au niveau API via Structured Outputs — mais réagissent différemment aux contraintes au niveau prompt. Testez sur plusieurs modèles.',
        'Les prompts contraints économisent du temps d\'examen : les outputs qui correspondent déjà à votre structure requise nécessitent moins de correction humaine.',
        'Utilisez [PromptQuorum](https://www.promptquorum.com/fr) pour tester les prompts contraints sur plusieurs modèles côte à côte et comparer la conformité aux contraintes.',
      ],
    },
    quickFacts: {
      id: 'quick-facts',
      title: 'Faits rapides',
      items: [
        '**5 types de contraintes :** Structurel, Contenu, Style, Longueur, Sécurité',
        '**Conformité des modèles :** GPT-5.6 et Claude Sonnet 5 respectent les contraintes strictes avec ~95% sur les prompts bien formés',
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
        '**Mode de test structuré** : Testez votre prompt avec des contraintes contre plusieurs modèles (GPT-5.6, Claude, Llama 3.2) et vérifiez que chaque réponse respecte le schéma',
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
          whyItMatters: 'Llama, Mistral, GPT-5.6, Claude réagissent différemment aux contraintes. Testez chacun. Mesurez le taux de compliance (combien de réponses sont valides ?)'
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
          problem: 'Un modèle respecte parfaitement le JSON. Un autre ajoute des commentaires. GPT-5.6 enroule la réponse dans ``` ```.',
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
      items:  [
        'Grammars LLM : Forcer la Structure de Sortie — Approches formelles au-delà des contraintes',
        'Chain-of-Thought vs. Structured Reasoning — Quand utiliser lequel',
        'Fine-Tuning pour la Conformité de Sortie — Alternatives au prompting',
        '[Validation d\'Outputs LLM : Schémas et Tests — Cadre complet de validation',
        '[PromptQuorum : Dispatch Multi-Modèle](/fr/prompt-engineering/multi-model-prompt-testing-workflows) — Comment tester les contraintes à l\'échelle',
        'API Conversationnelles avec LLM — Cas d\'usage réel : structures contrôlées dans les chatbots',
        '[Automatisations domestiques plus intelligentes avec un LLM local](/fr/smart-home/ai-automations-local-llm) — le constrained prompting en action : définir exactement ce que votre LLM peut et ne peut pas faire lors du contrôle des appareils domestiques'
      ]
    },
    faqSection: {
      id: 'faq',
      title: 'Questions fréquentes',
      faqs: [
        {
          q: 'Les contraintes ralentissent-elles les réponses des LLM ?',
          a: 'Légèrement. Une contrainte stricte limite l\'espace de recherche du modèle, ce qui peut accélérer la génération. Mais l\'intention explicite du modèle (« Parse this into JSON ») ajoute un peu de latence. Dans la plupart des cas (< 100 ms), ce coût est accepté pour la fiabilité. Mesurez votre cas d\'usage.'
        },
        {
          q: 'Tous les modèles supportent-ils les contraintes ?',
          a: 'Les modèles modernes (GPT-5.6, Claude Sonnet 5, Llama 3.2, Mistral) supportent bien les contraintes de format et les énumérés. Mais plus la contrainte est complexe (schémas imbriqués profonds, logique sémantique), plus la compliance varie. Les petits modèles (< 7B) sont moins fiables. Testez votre modèle et cas d\'usage spécifiques.'
        },
        {
          q: 'Dois-je mettre la contrainte dans le prompt système ou utilisateur ?',
          a: 'Les deux fonctionnent, mais avec des différences : system prompt (instructions) donne une compliance plus cohérente et globale. User prompt (contenu) permet des contraintes spécifiques au message. Meilleure pratique : mettez la contrainte générale (format, type) dans le system prompt ; mettez les contraintes spécifiques au contexte (données, limites) dans le user prompt.'
        },
        {
          q: 'Que faire si le modèle ignore ma contrainte ?',
          a: 'Escalade graduée : 1) Reformulez la contrainte plus explicitement (au lieu de « Sois structuré », « Réponds TOUJOURS en JSON valide »). 2) Ajouter un exemple au prompt : « Voici un exemple : { sentiment: \'positif\', score: 0.9 } ». 3) Changez de modèle vers un plus performant (GPT-5.6 au lieu de 3.5, Llama 70B au lieu de 8B). 4) Fine-tuning sur des exemples structurés (coûteux mais fiable à l\'échelle).'
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
    heroImage: '/images/constrained-prompting-overview-hero-ja.webp',
  title: '制約付きプロンプティング：完全ガイド',
  seoTitle: '制約付きプロンプティング：構造化AIの完全ガイド',
  intro: '制約付きプロンプティングとは、LLMに厳格なルールを強制する技法です。特定の出力形式、長さの制限、事前定義されたスキーマの遵守を指示します。本番環境で信頼性が高く、再現可能な結果を得たいときに有効です。',
  metaDescription: '制約付きプロンプティングでLLM出力を制御。JSONフォーマット強制、スキーマ検証、本番環境での信頼性確保。GPT-5.6、Claude、Geminiに対応。',
  leadAnswerBlock: '制約付きプロンプティングは、LLMが特定の形式・内容・長さで応答するよう強制する技法です。JSONスキーマを指定することで、解析可能で予測可能な出力を保証し、本番環境での信頼性と再現性を大幅に向上させます。金融、医療、法務などの規制環境でも安全性が確保でき、データ抽出や分類タスクを自動化するのに最適な方法です。',
  publishDate: '2026-01-20',
  dateModified: '2026-07-13',
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
        'Llama 3.2やMistral Smallなどのオープンソース、GPT-5.6やClaudeなどの商用モデルが制約に対応しており、対応レベルに違いがあります',
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
        'モデルの対応：GPT-5.6、Claude Sonnet 5、Llama 3.2、Mistral はすべて制約に対応。対応レベルは異なる',
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
        '**構造化テストモード**：複数モデル（GPT-5.6、Claude、Llama 3.2）でスキーマ準拠をテスト',
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
          whyItMatters: 'Llama、Mistral、GPT-5.6、Claudeは制約に異なる反応。各モデルをテスト。準拠率を測定。'
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
          problem: 'JSONを完全に守るモデル。別のモデルがコメント追加。GPT-5.6は```で囲む。',
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
      items:  [
        'LLM文法：出力構造の強制 — 制約を超えた形式的アプローチ',
        'Chain-of-Thoughtと構造化推論 — 使い分け',
        '構造化出力向けファインチューニング — プロンプティングの代替手段',
        '[LLMアウトプット検証：スキーマとテスト — 総合検証フレームワーク',
        '[PromptQuorum：マルチモデルディスパッチ](/ja/prompt-engineering/multi-model-prompt-testing-workflows) — 大規模制約テスト',
        '会話型API with LLM — 実例：チャットボットの制御出力',
        '[ローカルLLMでスマートホームの自動化をよりスマートに](/ja/smart-home/ai-automations-local-llm) — 制約プロンプティングの実践：ホームデバイスを制御する際にLLMができることとできないことを明確に定義する'
      ]
    },
    faqSection: {
      id: 'faq',
      title: 'よくある質問',
      faqs: [
        {
          q: '制約によってLLMのレスポンスが遅くなる？',
          a: '若干遅くなる可能性があります。厳格な制約は検索空間を制限し、生成を加速する場合もあります。ただし、モデルに「JSONをパースする」という明示的な意図を指示すると若干のレイテンシが追加されます。ほとんどのケース（<100ms）でこのコストは信頼性のために許容されます。ユースケースを測定してください。'
        },
        {
          q: 'すべてのモデルが制約に対応している？',
          a: '最新モデル（GPT-5.6、Claude Sonnet 5、Llama 3.2、Mistral）はフォーマット制約と列挙型をよく対応しています。ただし、制約が複雑（深いネストスキーマ、複雑なセマンティックロジック）ほど対応レベルが変わります。小規模モデル（<7B）は信頼性が低い。自分のモデルとユースケースでテストしてください。'
        },
        {
          q: '制約はシステムプロンプトですか、ユーザープロンプトですか？',
          a: '両方機能しますが異なります。system prompt（指示）は全体的に一貫性が高く。user prompt（コンテンツ）はメッセージごとに特定の制約が可能。ベストプラクティス：一般的制約（フォーマット、型）はsystem promptに。コンテキスト固有制約（データ、制限）はuser promptに。'
        },
        {
          q: 'モデルが制約を無視したら？',
          a: '段階的対応：1) より明確に：「構造的に」→ 「常にJSON有効で返す」。2) 例を追加：「例：{ sentiment: \'positive\', score: 0.9 }」。3) より強力なモデルに切り替え（GPT-5.6ではなく3.5、Llama 70B vs 8B）。4) ファインチューニング（高コスト、本番環境で信頼性向上）。'
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
    'image': 'https://www.promptquorum.com/og-constrained-prompting-ja.png',
    'datePublished': '2026-01-20',
    'dateModified': '2026-07-13',
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
      { '@type': 'SoftwareApplication', 'name': 'GPT-5.6' },
      { '@type': 'SoftwareApplication', 'name': 'Claude' },
      { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
      { '@type': 'SoftwareApplication', 'name': 'Mistral' }
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.tldr'] }
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
          'text': '最新モデル（GPT-5.6、Claude Sonnet 5、Llama 3.2、Mistral）はフォーマット制約と列挙型をよく対応しています。ただし、制約が複雑（深いネストスキーマ、複雑なセマンティックロジック）ほど対応レベルが変わります。小規模モデル（<7B）は信頼性が低い。自分のモデルとユースケースでテストしてください。'
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
          'text': '段階的対応：1) より明確に：「構造的に」→ 「常にJSON有効で返す」。2) 例を追加：「例：{ sentiment: \'positive\', score: 0.9 }」。3) より強力なモデルに切り替え（GPT-5.6ではなく3.5、Llama 70B vs 8B）。4) ファインチューニング（高コスト、本番環境で信頼性向上）。'
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
        'text': 'Llama、Mistral、GPT-5.6、Claudeは制約に異なる反応。各モデルをテスト。準拠率を測定。'
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
      heroImage: '/images/constrained-prompting-overview-hero-zh.webp',
  title: '受限提示：完整指南',
  seoTitle: '受限提示：结构化输出完整指南',
  intro: '受限提示强制LLM遵守严格规则：特定输出格式、长度限制或预定义架构遵守。在生产环境中需要可靠、可重现的结果时至关重要。',
  metaDescription: '学习受限提示强制LLM输出为JSON、XML等结构化格式。5种约束技术、API级别强制、生产环境实例。适配GPT-5.6、Claude、Gemini。',
  leadAnswerBlock: '受限提示是强制LLM生成符合特定结构、格式和内容要求的响应的技术。通过指定JSON架构、枚举值或长度限制，你可以确保每次输出都是有效的、可解析的、符合预期的。这在金融、医疗和法律等受管制行业尤为关键，可确保合规性、数据安全和生产工作流的可靠性。',
  publishDate: '2026-01-20',
  dateModified: '2026-07-13',
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
        '开源模型（Llama 3.2、Mistral Small）和商用模型（GPT-5.6、Claude）均支持约束，但对应程度有差异',
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
        '模型支持：GPT-5.6、Claude Sonnet 5、Llama 3.2、Mistral 均支持约束。支持程度各异',
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
        '**结构化测试模式**：对多个模型（GPT-5.6、Claude、Llama 3.2）测试架构遵守',
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
          whyItMatters: 'Llama、Mistral、GPT-5.6、Claude对约束反应不同。测试每个。测量遵守率。'
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
          problem: '一个模型完美遵守JSON。另一个添加注释。GPT-5.6用```包裹。',
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
      items:  [
        'LLM文法：强制输出结构 — 约束之外的形式化方法',
        'Chain-of-Thought vs 结构化推理 — 何时使用哪种',
        '结构化输出微调 — 提示工程的替代方案',
        '[LLM输出验证：架构和测试 — 完整验证框架',
        '[PromptQuorum：多模型分发](/zh/prompt-engineering/multi-model-prompt-testing-workflows) — 大规模测试约束',
        '与LLM的会话API — 实例：聊天机器人的控制输出',
        '[用本地LLM实现更智能的家居自动化](/zh/smart-home/ai-automations-local-llm) — 约束提示词实践：精确定义LLM在控制家居设备时可以和不可以做什么'
      ]
    },
    faqSection: {
      id: 'faq',
      title: '常见问题',
      faqs: [
        {
          q: '约束会减慢LLM响应吗？',
          a: '略微减慢。严格约束限制搜索空间，有时可加速生成。但明确指示模型"解析为JSON"添加轻微延迟。大多数情况（<100ms）此成本为可靠性而值得。测量你的用例。'
        },
        {
          q: '所有模型都支持约束吗？',
          a: '最新模型（GPT-5.6、Claude Sonnet 5、Llama 3.2、Mistral）很好地支持格式约束和枚举。但约束越复杂（深层嵌套架构、复杂语义逻辑），支持程度越不同。小模型（<7B）可靠性较低。在你的模型和用例上测试。'
        },
        {
          q: '约束应在系统还是用户提示中？',
          a: '两者都行但有差异。系统提示（指令）整体一致性更高。用户提示（内容）允许每条消息特定约束。最佳实践：一般约束（格式、类型）在系统提示；上下文特定约束（数据、限制）在用户提示。'
        },
        {
          q: '模型忽略约束怎么办？',
          a: '递进处理：1）更明确："结构化"→"始终以有效JSON返回"。2）添加示例："例：{ sentiment: \'positive\', score: 0.9 }"。3）切换到更强大模型（GPT-5.6 vs 3.5、Llama 70B vs 8B）。4）微调（高成本，生产中可靠）。'
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
    'image': 'https://www.promptquorum.com/og-constrained-prompting-zh.png',
    'datePublished': '2026-01-20',
    'dateModified': '2026-07-13',
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
      { '@type': 'SoftwareApplication', 'name': 'GPT-5.6' },
      { '@type': 'SoftwareApplication', 'name': 'Claude' },
      { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
      { '@type': 'SoftwareApplication', 'name': 'Mistral' }
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.tldr'] }
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
          'text': '最新模型（GPT-5.6、Claude Sonnet 5、Llama 3.2、Mistral）很好地支持格式约束和枚举。但约束越复杂（深层嵌套架构、复杂语义逻辑），支持程度越不同。小模型（<7B）可靠性较低。在你的模型和用例上测试。'
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
          'text': '递进处理：1）更明确："结构化"→"始终以有效JSON返回"。2）添加示例："例：{ sentiment: \'positive\', score: 0.9 }"。3）切换到更强大模型（GPT-5.6 vs 3.5、Llama 70B vs 8B）。4）微调（高成本，生产中可靠）。'
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
        'text': 'Llama、Mistral、GPT-5.6、Claude对约束反应不同。测试每个。测量遵守率。'
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
  ko: {
    freshness_tier: 'semi_annual',
    theme: 'Techniques',
    heroImage: '/images/constrained-prompting-overview-hero-ko.webp',
    title: '제약 프롬프팅: 구조화된 AI 출력 완벽 가이드',
    intro: '**제약 프롬프팅은 모델에게 무엇을 해야 하는지뿐만 아니라 반드시 해야 할 것과 절대 해서는 안 되는 것을 명시적으로 지정하는 기법입니다. "반드시", "절대 안 됨", "오직"과 같은 언어를 사용하여 출력 결과가 명확히 정의된 경계 내에 머물도록 합니다.** 신뢰할 수 있는 형식, 안전한 콘텐츠, 또는 내부 규정의 엄격한 준수가 필요할 때 필수적인 기법입니다.',
    leadAnswerBlock: '제약 프롬프팅이란 형식, 길이, 콘텐츠, 안전 경계에 관한 명시적인 규칙을 프롬프트에 직접 추가하여 AI 출력을 예측 가능하고 재사용 가능하게 만드는 방법입니다. "요약을 작성하라" 대신 정확한 구조, 허용되는 콘텐츠, 검증 규칙을 지정합니다.',
    publishDate: '2026-03-26',
    readTime: '6분 읽기',
    seoTitle: '제약 프롬프팅: 구조화된 AI 출력 강제하기',
    metaDescription: '제약 프롬프팅을 마스터하여 AI가 JSON, XML 등 구조화된 형식으로 출력하도록 강제하십시오. GPT-5.6, Claude, Gemini를 위한 실제 예제와 5가지 기법을 소개합니다.',
    educationalLevel: 'Intermediate',
    primaryTerm: '제약 프롬프팅',
    dateModified: '2026-07-13',
    lastFactChecked: '2026-04-28',
    audience: 'LLM 기반 워크플로우를 구축하는 개발자, 제품 관리자 및 팀',
    next_refresh_due: '2026-09-26',
    aboutTopics: ['제약 프롬프팅', '구조화된 출력', '프롬프트 엔지니어링'],
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '제약 프롬프팅이란?', anchor: '#what-is-constrained-prompting' },
      { label: '제약 프롬프팅이 중요한 이유', anchor: '#why-does-constrained-prompting-matter' },
      { label: '사용할 수 있는 제약 유형', anchor: '#which-constraint-types-can-you-use' },
      { label: '제약 없는 프롬프트 vs 제약 있는 프롬프트: 예시', anchor: '#unconstrained-vs-constrained-prompt-an-example' },
      { label: '제약 프롬프팅을 언제 사용해야 하는가?', anchor: '#when-should-you-use-constrained-prompting' },
      { label: 'PromptQuorum이 제약 프롬프팅을 지원하는 방법', anchor: '#how-does-promptquorum-support-constrained-prompting' },
      { label: '제약 프롬프팅 사용 방법', anchor: '#how-to-use-constrained-prompting' },
      { label: 'API 수준 제약 적용', anchor: '#api-level-constraint-enforcement' },
      { label: '규제 환경에서의 제약 프롬프팅', anchor: '#constrained-prompting-in-regulated-environments' },
      { label: '일반적인 실수', anchor: '#common-mistakes' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
      { label: '자주 묻는 질문', anchor: '#frequently-asked-questions' },
      { label: '출처', anchor: '#sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ko/prompt-engineering/constrained-prompting',
      inLanguage: 'ko',
      headline: '제약 프롬프팅: 구조화된 AI 출력 완벽 가이드',
      description: '제약 프롬프팅이 무엇인지, 왜 중요한지, 그리고 실제 워크플로우에서 AI 출력을 예측 가능하고 안전하게 만드는 방법을 설명합니다.',
      datePublished: '2026-03-26',
      dateModified: '2026-07-13',
      keywords: ['제약 프롬프팅', '프롬프트 엔지니어링', '구조화된 프롬프트', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: '제약 프롬프팅' },
        { '@type': 'Thing', name: '구조화된 출력' },
        { '@type': 'Thing', name: '프롬프트 엔지니어링' },
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
        { '@type': 'Question', name: '제약 프롬프팅이란 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '제약 프롬프팅은 형식, 길이, 콘텐츠, 안전 경계에 관한 명시적인 규칙을 프롬프트에 직접 추가하여 AI 출력을 예측 가능하고 재사용 가능하게 만드는 방법입니다. "요약을 작성하라" 대신 150단어, JSON 형식, 경쟁사 이름 제외, 행동 촉구 포함이라고 명시합니다.' } },
        { '@type': 'Question', name: '다섯 가지 제약 유형은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '다섯 가지 주요 제약 유형은 다음과 같습니다. (1) 구조적 — 필수 제목, 표, 특정 키가 있는 JSON. (2) 콘텐츠 — 필수 섹션, 금지 주제. (3) 스타일 — 어조, 가독성 수준, 용어 규칙. (4) 길이 — 단어 또는 문자 제한. (5) 안전 — 의료 조언, 개인정보, 법적 결론 금지.' } },
        { '@type': 'Question', name: '모델이 유효한 JSON을 출력하도록 강제하는 방법은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트에 정확한 JSON 스키마를 제공하십시오. "다음과 정확히 일치하는 JSON을 반환하십시오: { \\"finding\\": \\"...\\" }". 이를 "JSON만 출력하고 다른 텍스트는 포함하지 마십시오."와 결합하십시오. GPT-5.6는 API를 통한 JSON 모드도 지원합니다.' } },
        { '@type': 'Question', name: '제약 프롬프팅은 GPT-5.6, Claude, Gemini에서 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '예 — 세 모델 모두 제약 프롬프팅을 지원합니다. GPT-5.6와 Claude Sonnet 5은 형식 제약(JSON, 표, 단어 제한)을 잘 형성된 프롬프트에서 약 95%의 준수율로 따릅니다. 세 모델 모두 구조화된 출력을 통한 API 수준 제약 적용도 지원합니다. 항상 여러 모델에서 테스트하십시오.' } },
        { '@type': 'Question', name: '제약 프롬프팅과 퓨샷 프롬프팅의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '제약 프롬프팅은 텍스트 형식의 명시적인 규칙(형식, 길이, 콘텐츠 제한)을 추가합니다. 퓨샷 프롬프팅은 모델이 생성할 내용을 암묵적으로 보여주는 작업 예시를 제공합니다. 두 방법은 함께 사용하면 효과적입니다.' } },
        { '@type': 'Question', name: '제약 프롬프팅을 사용하지 말아야 할 때는 언제입니까?', acceptedAnswer: { '@type': 'Answer', text: '개방형 창의적 작업(브레인스토밍, 아이디어 도출, 소설)에는 구조적 제약을 피하십시오. 창의적 프롬프트를 과도하게 제약하면 형식적이고 품질이 낮은 출력이 생성됩니다. 창의적 작업에는 어조 및 스타일 제약만 사용하고 구조적 자유를 허용하십시오.' } },
        { '@type': 'Question', name: '하나의 프롬프트에 제약을 몇 개나 쌓을 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '실용적으로 3~5개의 제약이 잘 작동합니다. 5~6개를 초과하면 모델이 낮은 우선순위 제약을 경고 없이 자동으로 무시하기 시작합니다. 5개 이상이 필요하다면 우선순위 순서로 나열하고 명시적으로 기재하십시오.' } },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '제약 프롬프팅 사용 방법',
      inLanguage: 'ko',
      description: 'GPT-5.6, Claude Sonnet 5, Gemini 3.1 Pro에서 프롬프트에 출력 제약을 적용하는 5단계 가이드입니다.',
      step: [
        { '@type': 'HowToStep', position: 1, name: '출력 제약 식별', text: '작업과 관련된 제약을 식별하십시오: 길이, 형식, 어휘, 범위, 안전.' },
        { '@type': 'HowToStep', position: 2, name: '강한 제약 언어 사용', text: '"반드시", "절대 안 됨", "오직"을 사용하여 제약을 명시하십시오. "시도하라" 또는 "목표로 하라"는 절대 사용하지 마십시오.' },
        { '@type': 'HowToStep', position: 3, name: '형식 예시 제공', text: '형식 제약의 경우, 정확한 스키마를 인라인으로 보여주십시오: JSON 키, Markdown 구조, 또는 필드 이름.' },
        { '@type': 'HowToStep', position: 4, name: '포함 및 제외 콘텐츠 목록화', text: '주제, 용어, 데이터 유형별로 포함해야 할 것과 제외해야 할 것을 명시적으로 나열하십시오.' },
        { '@type': 'HowToStep', position: 5, name: '엣지 케이스 테스트', text: '10개의 출력을 생성하십시오. 모든 출력이 길이 제한, 형식, 콘텐츠 경계를 준수하는지 확인하십시오.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**제약 프롬프팅**은 AI 출력이 여러 번의 실행에서 예측 가능하게 유지되도록 프롬프트에 명시적인 규칙(구조, 콘텐츠, 길이, 안전)을 추가합니다.',
          '5가지 제약 유형: 구조적, 콘텐츠, 스타일, 길이, 안전 — 최대한의 출력 제어를 위해 이들을 결합하십시오.',
          '의무적인 언어를 사용하십시오: **"반드시", "절대 안 됨", "오직".** "시도하라"와 같은 부드러운 지시어는 자주 무시됩니다.',
          '형식 제약은 예시와 함께 사용할 때 가장 효과적입니다: 필요한 정확한 JSON 스키마나 Markdown 구조를 모델에게 보여주십시오.',
          'GPT-5.6, Claude Sonnet 5, Gemini 3.1 Pro 모두 제약 프롬프팅을 지원합니다. 또한 구조화된 출력을 통한 API 수준 적용도 지원하지만, 프롬프트 수준 제약에 다르게 반응합니다. 여러 모델에서 테스트하십시오.',
          '제약 프롬프트는 검토 시간을 절약합니다: 이미 필요한 구조와 일치하는 출력은 인간의 수정이 덜 필요합니다.',
          '[PromptQuorum](https://www.promptquorum.com/)을 사용하여 여러 모델에서 제약 프롬프트를 나란히 테스트하고 제약 준수율을 비교하십시오.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**5가지 제약 유형:** 구조적, 콘텐츠, 스타일, 길이, 안전',
          '**모델 준수율:** GPT-5.6와 Claude Opus 4.8은 잘 형성된 프롬프트에서 강한 제약을 약 95%의 준수율로 따릅니다',
          '**최적 스택킹:** 3~5개의 제약이 잘 작동합니다; 5~6개를 초과하면 모델이 낮은 우선순위 제약을 자동으로 무시합니다',
          '**JSON 출력 일관성:** 스키마 예시 없이는 모델이 여러 실행에서 일관되지 않은 키 이름을 생성합니다',
          '**테스트 방법론:** 10개의 출력을 생성하여 모든 출력이 길이, 형식, 콘텐츠 경계를 준수하는지 확인하십시오',
          '**설정 시간:** 첫 번째 실행 제약 검증에는 10~15분이 추가됩니다; 재사용 가능한 템플릿은 작업당 30분 이상을 절약합니다',
        ],
      },
      whatIsConstrained: {
        title: '제약 프롬프팅이란?',
        content: [
          '**제약 프롬프팅이란 콘텐츠, 구조, 길이, 동작에 관한 명시적인 규칙을 프롬프트에 직접 추가하는 것을 의미합니다.** "이것을 요약하라"와 같은 느슨한 지시어 대신, 허용되는 형식, 필수 필드, 금지된 주제, 검증 규칙을 명시합니다. 이것은 핵심 [프롬프트 엔지니어링](/prompt-engineering/what-is-prompt-engineering) 기법입니다.',
          '제약에는 출력 스키마(고정 키가 있는 JSON 등), 단어 제한, 어조 요구사항, "의료 진단을 제공하지 마십시오"와 같은 안전 제한이 포함될 수 있습니다. 이러한 규칙을 프롬프트의 일부로 만들면 모호성이 줄어들고 모델을 프로덕션 워크플로우에 더 쉽게 통합할 수 있습니다.',
        ],
        snippets: [
          { type: 'in-one-sentence', text: '제약 프롬프팅은 형식, 길이, 콘텐츠, 안전 경계에 관한 명시적인 규칙을 프롬프트에 직접 추가하여 AI 출력을 예측 가능하게 만드는 방법입니다.' },
          { type: 'in-plain-terms', text: 'AI에게 "요약을 작성하라"고 하는 대신, 최대 150단어, 글머리 기호 사용, 경쟁사 언급 금지, 항상 행동 촉구 포함이라고 지시하십시오. 규칙이 구체적일수록 출력이 일관됩니다.' },
        ],
        callouts: [
          { type: 'note', label: '정의', text: '제약 프롬프팅은 별도의 API 기능이 아닙니다 — 이것은 프롬프팅 기법입니다. 프롬프트 자체의 일반 텍스트로 제약을 적용합니다. 특별한 구문이나 API 플래그가 필요하지 않습니다.' },
        ],
      },
      whyItMatters: {
        title: '제약 프롬프팅이 중요한 이유',
        content: [
          '**제약 프롬프팅은 모델 출력이 예측 가능한 동작에 의존하는 사람, 프로세스 또는 다른 시스템에 공급될 때마다 중요합니다.** 제약 없이는 동일한 프롬프트가 여러 실행에서 다른 구조나 세부 수준을 생성할 수 있습니다.',
          '명확한 제약은 다음에 도움이 됩니다:',
        ],
        items: [
          '다운스트림 도구를 손상시키는 예상치 못한 콘텐츠나 형식을 방지합니다.',
          '프롬프트 수준에서 직접 브랜드, 법적, 안전 지침을 적용합니다.',
          '출력이 이미 필요한 구조와 일치하므로 검토 시간을 줄입니다.',
        ],
        callouts: [
          { type: 'tip', label: '핵심 포인트', text: '제약이 없는 출력은 크게 다양합니다: 동일한 프롬프트, 다른 구조, 다른 길이, 다른 어조. 제약은 그 분산을 제거하고 출력을 프로덕션 준비 상태로 만듭니다.' },
        ],
      },
      typesOfConstraints: {
        title: '사용할 수 있는 제약 유형',
        content: [
          '**프롬프트를 여러 차원으로 제약할 수 있습니다: 구조, 콘텐츠, 스타일, 길이, 안전.** 더 정밀할수록 출력이 더 일관됩니다. 이것이 [구조화된 프롬프트](/prompt-engineering/rtf-framework)에 어떻게 맞는지 알아보십시오.',
          '일반적인 제약 유형에는 다음이 포함됩니다:',
        ],
        items: [
          '구조적 제약: 필수 제목, 글머리 기호 목록, 표, 또는 특정 키가 있는 JSON.',
          '콘텐츠 제약: 필수 섹션(예: "위험" 또는 "다음 단계") 및 금지된 주제나 구문.',
          '스타일 제약: 어조("공식적", "중립적", "대화적"), 가독성 수준, 또는 용어 규칙.',
          '길이 제약: 단어 또는 문자 제한, 또는 고정된 글머리 기호나 섹션 수.',
          '안전 제약: 개인정보, 의료 조언, 법적 결론 또는 허용되지 않는 콘텐츠 카테고리를 피하라는 지시.',
        ],
        columns: ['제약 유형', '예시', '사용 시기'],
        rows: [
          { '제약 유형': '구조적', '예시': '"JSON으로 반환: {key: value}"', '사용 시기': 'API 통합, 데이터 파이프라인' },
          { '제약 유형': '콘텐츠', '예시': '"위험 섹션 포함 필수; 경쟁사 언급 금지"', '사용 시기': '보고서, 고객 커뮤니케이션' },
          { '제약 유형': '스타일', '예시': '"공식적 어조, 축약형 없음, 8학년 수준"', '사용 시기': '브랜드 제어 출력' },
          { '제약 유형': '길이', '예시': '"≤150단어, 정확히 5개 글머리 기호"', '사용 시기': '템플릿 콘텐츠, 요약' },
          { '제약 유형': '안전', '예시': '"의료 진단 또는 법적 조언 제공 금지"', '사용 시기': '규제 산업, 공개 배포' },
        ],
        callouts: [
          { type: 'tip', label: '전문가 팁', text: 'JSON 출력의 경우, 항상 프롬프트에 정확한 키 이름과 값 유형을 제공하십시오. 스키마 없이 "JSON 반환"이라고 하면 모델 간에 일관되지 않은 키 이름이 생성됩니다.' },
          { type: 'insight', label: '모델 준수율', text: '프롬프트 수준 제약 준수율은 모델 및 제약 유형에 따라 다릅니다: GPT-5.6는 JSON 스키마에서 약 95%, 단어 제한에서 약 90%, 콘텐츠 포함에서 약 95%를 달성합니다. Claude Sonnet 5은 JSON에서 약 97%, 단어 제한에서 약 92%, 포함에서 약 96%입니다. Gemini 3.1 Pro: JSON 약 92%, 단어 제한 약 85%, 포함 약 93%. API 수준 구조화된 출력은 모든 모델에서 거의 100%의 JSON 스키마 준수를 달성하지만, 스키마만 처리합니다 — 콘텐츠, 어조, 안전 제약은 처리하지 않습니다.' },
        ],
      },
      example: {
        title: '제약 없는 프롬프트 vs 제약 있는 프롬프트: 예시',
        content: [
          '**제약 프롬프팅의 영향은 동일한 작업에 대해 제약 없는 프롬프트와 제약 있는 프롬프트를 비교할 때 가장 쉽게 볼 수 있습니다.** 여기서는 짧은 제품 요약을 작성합니다.',
          '**제약 없는 프롬프트** (매번 다른 길이, 구조, 어조 생성):',
          '"새로운 분석 기능에 대한 요약을 작성하십시오."',
          '**제약 있는 버전** (길이, 구조, 스타일, 필수 콘텐츠 정의):',
          '"당신은 B2B 제품 마케터입니다. 작업: 제품 페이지를 위한 새로운 분석 기능 요약을 작성하십시오. 제약: 길이: 120~160단어. 구조: 짧은 소개 단락 1개, 글머리 기호 3개, 마무리 문장 1개. 스타일: 명확하고 중립적-전문적 어조. \'혁명적\' 또는 \'게임 체인저\'와 같은 과장된 표현 없음. 콘텐츠: 주요 혜택(고객 행동에 대한 더 빠른 인사이트)과 구체적인 예시 사용 사례 언급. 출력 형식: `-`를 사용한 글머리 기호가 있는 유효한 Markdown."',
          '제약 있는 버전은 길이, 구조, 스타일, 필수 콘텐츠를 정의합니다. 출력이 예측 가능하고 재사용 가능해집니다 — 팀 워크플로우 전반에 걸쳐 템플릿으로 적합합니다.',
          '**고급 예시: 법적 문서에서 제약을 통한 데이터 추출**',
          '더 복잡한 작업의 경우, 구조화된 출력 스키마와 여러 제약 유형을 결합하십시오:',
          '**프롬프트:**',
          '"당신은 계약 분석 도우미입니다. 작업: 제공된 계약 조항에서 핵심 조건을 추출하십시오. 제약: (1) 이 정확한 스키마와 일치하는 유효한 JSON만 반환하십시오: { \\"parties\\": [\\"string\\"], \\"obligation_type\\": \\"payment|delivery|confidentiality|termination\\", \\"deadline\\": \\"ISO 8601 날짜 또는 null\\", \\"penalty_clause\\": true|false, \\"summary\\": \\"최대 50단어\\" } (2) 필드를 찾을 수 없으면 null을 사용하십시오. (3) 명시적으로 기재되지 않은 정보를 추론하지 마십시오. (4) JSON만 출력하십시오 — 서문, Markdown 코드 펜스, 설명 없음. (5) 반환하기 전에 JSON이 유효한지 확인하십시오."',
          '이 고급 예시는 프로덕션 사용을 위해 제약을 계층화하는 방법을 보여줍니다: 스키마 적용(형식 제약), 필드 요구사항(콘텐츠 제약), 추론 금지 규칙(콘텐츠 제약), JSON 유효성(안전 제약).',
        ],
        callouts: [
          { type: 'practice', label: '규칙', text: '추가하는 모든 제약은 모델 출력의 분산을 줄입니다. 1~2개의 제약으로 시작하고, 테스트한 다음 더 추가하십시오. 한 번에 5개 이상의 제약을 쌓으면 모델이 하나를 자동으로 위반할 위험이 증가합니다. 프로덕션 사용의 경우, 엣지 케이스(모호한 조항, 누락된 필드, 경계 조건)에서 테스트하십시오.' },
        ],
      },
      whenToUse: {
        title: '제약 프롬프팅을 언제 사용해야 하는가?',
        content: [
          '**최대한의 창의성보다 정확성과 일관성이 더 중요할 때 제약 프롬프팅을 사용해야 합니다.** 이는 운영적, 분석적, 규제적 맥락에서 특히 사실입니다. [퓨샷 예시](/prompt-engineering/zero-shot-vs-few-shot)와 결합하면 제약이 훨씬 더 강력해집니다.',
          '일반적인 사용 사례에는 다음이 포함됩니다:',
        ],
        items: [
          '다른 시스템이 파싱할 JSON 또는 표 출력 생성.',
          '팀 전반에 걸쳐 표준화된 보고서, 요약 또는 상태 업데이트 생성.',
          '브랜드 또는 법적 지침을 따라야 하는 고객 커뮤니케이션 초안 작성.',
          '비정형 텍스트에서 구조화된 데이터(문제, 엔티티, 지표) 추출.',
        ],
        callouts: [
          { type: 'warning', label: '피하십시오', text: '개방형 창의적 작업(브레인스토밍, 아이디어 도출)에는 길이 또는 구조적 제약을 적용하지 마십시오. 창의적 프롬프트를 과도하게 제약하면 진정으로 유용한 아이디어 대신 형식적이고 체크박스를 채우는 출력이 생성됩니다.' },
        ],
      },
      howPQSupports: {
        title: 'PromptQuorum이 제약 프롬프팅을 지원하는 방법',
        content: [
          '**PromptQuorum은 구조화된 프롬프트 프레임워크를 정의, 저장, 재사용할 수 있도록 하여 제약 프롬프팅과 잘 작동하도록 설계된 다중 모델 AI 디스패치 도구입니다.** [SPECS](/prompt-engineering/specs-framework), [RTF](/prompt-engineering/rtf-framework), 또는 Google의 프롬프팅 가이드와 같은 프레임워크와 제약을 결합하여 여러 모델에 동시에 전송할 수 있습니다.',
          'PromptQuorum에서 다음을 할 수 있습니다:',
        ],
        items: [
          '모든 실행이 동일한 규칙을 따르도록 구조적 및 콘텐츠 제약을 프레임워크에 직접 인코딩합니다.',
          '여러 모델에서 나란히 제약 프롬프트를 테스트하여 어떤 제공자가 사양을 가장 잘 따르는지 확인합니다. 예를 들어, 동일한 JSON 추출 제약을 GPT-5.6, Claude Sonnet 5, Gemini 3.1 Pro에 동시에 디스패치한 다음 어떤 모델이 스키마, 단어 제한, 콘텐츠 제한을 가장 안정적으로 준수하는지 비교합니다.',
          '반복 작업을 위한 템플릿으로 제약 프롬프트를 저장하여 팀이 항상 동일한 검증된 패턴을 사용하도록 합니다.',
          '어떤 모델이 사용 사례에 가장 적합한지 식별한 다음 해당 모델로 프로덕션 트래픽을 라우팅합니다.',
        ],
        callouts: [
          { type: 'practice', label: '모범 사례', text: '배포하기 전에 항상 최소 2개 모델에서 제약 프롬프트를 테스트하십시오. 다른 모델(GPT-5.6 vs Claude vs Gemini)은 제약을 다르게 해석합니다. GPT-5.6에서 95%의 준수율이 Gemini에서는 80%로 떨어질 수 있습니다.' },
        ],
      },
      howToStart: {
        title: '제약 프롬프팅 사용 방법',
        numberedItems: [
          '**작업과 관련된 출력 제약을 식별하십시오: 길이, 형식, 어휘, 범위, 안전.** 예: \'응답은 ≤100단어, JSON 형식, 기술 용어만 사용, 최근 개발 사항(2024+)만 다루고, 경쟁사를 언급해서는 안 됩니다.\'',
          '**\'반드시\', \'절대 안 됨\', \'오직\'이라는 언어를 사용하여 제약을 명시적으로 기재하십시오.** \'시도하라\' 또는 \'목표로 하라\'와 같은 부드러운 지시어는 피하십시오. 강한 제약이 더 안정적입니다.',
          '**형식 제약의 경우, 원하는 정확한 형식의 예시를 제공하십시오.** 모델에게 보여주십시오: \'JSON으로 반환: { \"finding\": \"...\", \"confidence\": \"high|medium|low\", \"sources\": [...] }\'',
          '**콘텐츠 제약의 경우, 포함할 것과 제외할 것을 명시적으로 나열하십시오.** 예: \'포함: 기술 세부 정보, 성능 지표. 제외: 마케팅 언어, 경쟁사 이름, 가격.\'',
          '**엣지 케이스에서 제약 프롬프트를 테스트하여 모델이 모든 제약을 준수하는지 확인하십시오.** 10개의 출력을 생성하십시오. 확인: 모두 길이 제한을 준수하는가? 모두 올바른 형식을 사용하는가? 위반 사항이 있는가?',
        ],
        callouts: [
          { type: 'insight', label: '인사이트', text: 'GPT-5.6와 Claude Sonnet 5은 잘 형성된 프롬프트에서 강한 형식 제약(JSON, 표, 단어 제한)을 약 95%의 준수율로 따릅니다. Gemini 3.1 Pro도 비슷한 점수를 보입니다. 세 모델 모두 거의 100%의 JSON 스키마 준수를 위해 API 수준 구조화된 출력을 지원합니다. 프로덕션 사용의 경우, 최대의 신뢰성을 위해 API 수준 적용과 프롬프트 수준 제약을 결합하십시오.' },
        ],
      },
      apiLevelEnforcement: {
        id: 'api-level-constraint-enforcement',
        title: 'API 수준 제약 적용 (프롬프트 텍스트를 넘어서)',
        content: [
          '**2026년에는 모든 주요 AI 제공자가 API 수준 제약 적용을 제공합니다 — 프롬프트 텍스트 제약보다 더 안정적인 대안입니다.** 모델이 규칙을 준수하기를 바라는 대신, API 매개변수를 통해 토큰 생성 수준에서 제약을 적용합니다. 이를 통해 출력이 스키마와 일치함을 보장합니다.',
          '주요 제공자들은 이제 구조화된 출력을 지원합니다:',
          '**OpenAI 구조화된 출력 (GPT-5.6):** API 수준에서 `response_format: { type: "json_schema", json_schema: {...} }`를 설정하십시오. 정확한 스키마와 일치하는 유효한 JSON을 보장합니다 — 약 100%의 신뢰성. 모델이 유효하지 않은 JSON을 생성할 수 없습니다.',
          '**Anthropic 구조화된 출력 (Claude Sonnet 5):** `output_config.format` 매개변수를 사용하여 서버 측에서 JSON 스키마를 적용하십시오. 모든 출력이 정의한 스키마를 엄격히 따릅니다.',
          '**Google Gemini 3.1 Pro:** `response_mime_type: "application/json"`을 `response_schema`와 함께 설정하여 구조화된 출력을 적용하십시오. 높은 신뢰성을 가진 네이티브 JSON 제약.',
          '**핵심 장점:** API 수준 적용은 프롬프트 지시가 아니라 토큰 생성 수준에서 작동합니다. 모델이 제약을 위반할 수 없습니다 — 출력이 반환되기 전에 API에 의해 적용됩니다.',
          '이 전략을 사용하십시오: **API 수준 적용(형식용)과 프롬프트 수준 제약(콘텐츠용)을 결합하십시오.** 예: API 수준 JSON 스키마를 사용하여 유효한 출력 구조를 보장하고, 프롬프트를 사용하여 콘텐츠를 제약합니다("제공된 컨텍스트의 데이터만 포함").',
        ],
        callouts: [
          { type: 'insight', label: '모범 사례', text: '가능한 경우 프롬프트 텍스트 제약보다 API 수준 제약 적용을 선호하십시오. API 수준은 더 안정적입니다(거의 100% 준수) 그리고 스키마 정확성을 보장합니다. API 수준이 처리하지 않는 미묘한 콘텐츠, 어조, 안전 규칙에는 프롬프트 수준 제약을 남겨두십시오.' },
        ],
      },
      regionalContext: {
        id: 'constrained-prompting-in-regulated-environments',
        title: '규제 환경에서의 제약 프롬프팅',
        content: [
          '**규제된 산업에서 제약 프롬프팅은 선택 사항이 아닙니다 — 이것은 컴플라이언스 요구사항입니다.** 의료 제공자, 금융 기관, 법률 회사는 제약에 의존하여 HIPAA, GDPR, SOX 또는 기타 규제 프레임워크를 위반하는 출력을 방지합니다.',
          '지역 및 산업별 고려사항:',
        ],
        items: [
          '**EU (GDPR):** 개인정보, 금융 정보, 의료 기록을 제외하는 안전 제약이 필수입니다. 프롬프트에는 다음을 명시해야 합니다: "개인정보, 금융 세부 사항 또는 건강 정보를 포함하지 마십시오."',
          '**미국 (SOX/HIPAA):** 금융 및 의료 분야의 규제 기업은 감사 추적과 서명된 계약이 필요합니다. 제약 프롬프트는 출력 형식을 고정하여 감사 로그를 완전하고 검증 가능하게 만듭니다.',
          '**일본 (APPI):** 데이터 거주지 및 동의 제약이 중요합니다. 프롬프트에는 다음을 명시해야 합니다: "일본 거주 사용자 데이터만 처리하십시오" 및 "일본 외부로 데이터를 전송하지 마십시오."',
          '**중국 (데이터 보안법):** 구조화된 표(자유 형식 텍스트 없음)로 출력을 제한하고 형식 제한을 적용하면 출력이 승인된 데이터 처리 경로 내에 머물도록 합니다.',
          '**한국 (개인정보 보호법):** 개인정보보호위원회의 엄격한 요건에 따라 프롬프트에 개인정보 처리 제한을 명시하고 데이터 최소화 원칙을 적용해야 합니다.',
        ],
        callouts: [
          { type: 'warning', label: '컴플라이언스', text: '규제된 산업에서는 항상 제약 프롬프팅을 문서화와 함께 사용하십시오. 모든 제약을 기록하고, 모든 제약 조합을 테스트하고, 결과를 기록하십시오. 규제 기관은 제약이 검증되었다는 증거를 기대합니다.' },
        ],
      },
      commonMistakes: {
        title: '일반적인 실수',
        mistakes: [
          {
            mistake: '부드러운 제약 언어 사용 ("시도하라", "목표로 하라")',
            problem: '모델은 부드러운 지시어를 규칙이 아닌 제안으로 취급합니다. "200단어 미만으로 유지하려고 노력하라"는 80단어에서 400단어까지 다양한 출력을 생성합니다.',
            fix: '절대적인 언어를 사용하십시오: "응답은 150~200단어이어야 합니다. 예외 없음."',
          },
          {
            mistake: '우선순위 없이 너무 많은 제약 쌓기',
            problem: '6개 이상의 제약이 충돌할 때, 모델은 경고 없이 낮은 우선순위 제약을 자동으로 무시합니다.',
            fix: '제약을 우선순위 순서로 나열하십시오. 추가하십시오: "제약이 충돌하면 이 순서로 우선순위를 적용하십시오: (1) 안전, (2) 형식, (3) 길이."',
          },
          {
            mistake: 'JSON/구조화된 출력에 형식 예시를 제공하지 않음',
            problem: '"JSON으로 반환"은 모델과 실행 간에 일관되지 않은 키 이름과 중첩을 생성합니다.',
            fix: '정확한 스키마를 인라인으로 보여주십시오: "이 구조와 정확히 일치하는 JSON을 반환하십시오: { \\"finding\\": \\"...\\" }"',
          },
          {
            mistake: '창의적 생성 작업에 구조적 제약 적용',
            problem: '개방형 작업에 엄격한 구조를 적용하면 형식적이고 품질이 낮은 창의적 출력이 생성됩니다.',
            fix: '구조적 제약은 운영적 작업을 위해 남겨두십시오. 창의적 작업에는 어조/스타일 제약만 사용하십시오.',
          },
          {
            mistake: '여러 모델에서 제약을 테스트하지 않음',
            problem: 'GPT-5.6, Claude Sonnet 5, Gemini 3.1 Pro는 모두 동일한 제약을 다르게 해석합니다. 한 모델에서 작동하는 프롬프트가 다른 모델에서 실패할 수 있습니다.',
            fix: '배포하기 전에 최소 2개 모델에서 제약 프롬프트를 테스트하십시오. [PromptQuorum](https://www.promptquorum.com/)을 사용하여 병렬 비교를 실행하십시오.',
          },
          {
            mistake: '제약과 함께 예시를 제공하지 않음',
            problem: '"유효한 JSON 반환"은 스키마 예시 없이 모델과 실행 간에 일관되지 않은 키와 구조를 생성합니다. 모델이 자주 필드 이름을 추측합니다.',
            fix: '항상 정확한 스키마나 형식을 인라인으로 보여주십시오: "이 구조와 정확히 일치하는 JSON을 반환하십시오: { \\"finding\\": \\"...\\" , \\"confidence\\": \\"high|medium|low\\"  }"',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽을거리',
        items: [
          '[프롬프트 엔지니어링이란?](/prompt-engineering/what-is-prompt-engineering) — 제약을 적용하기 전의 기초.',
          '[구조화된 출력: JSON 모드](/prompt-engineering/structured-output-and-json-mode) — 출력 스키마의 API 수준 적용.',
          '[RTF 프레임워크](/prompt-engineering/rtf-framework) — 역할-작업-형식: 제약 프롬프팅과 자연스럽게 결합되는 구조화된 프레임워크.',
          '[퓨샷 프롬프팅](/prompt-engineering/zero-shot-vs-few-shot) — 예시 제공은 암묵적 제약의 한 형태입니다.',
          '[여러 모델에서 프롬프트를 테스트하는 방법](/prompt-engineering/how-to-test-prompts-across-models) — 여러 LLM에서 제약 프롬프트 검증.',
          '[프롬프트 인젝션과 보안](/prompt-engineering/prompt-injection-and-security) — 안전 제약이 적대적 입력을 방어합니다.',
          '[로컬 LLM으로 더 스마트한 홈 자동화](/ko/smart-home/ai-automations-local-llm) — 제약 프롬프팅 실제 적용: 홈 기기를 제어할 때 LLM이 할 수 있는 것과 할 수 없는 것을 정확하게 정의',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '제약 프롬프팅이란 무엇입니까?', a: '제약 프롬프팅은 형식, 길이, 콘텐츠, 안전 경계에 관한 명시적인 규칙을 프롬프트에 직접 추가하여 AI 출력을 예측 가능하고 재사용 가능하게 만드는 방법입니다. "요약을 작성하라" 대신 150단어, JSON 형식, 경쟁사 이름 제외, 행동 촉구 포함이라고 명시합니다.' },
          { q: '다섯 가지 제약 유형은 무엇입니까?', a: '다섯 가지 주요 제약 유형은 다음과 같습니다. (1) 구조적 — 필수 제목, 표, 특정 키가 있는 JSON. (2) 콘텐츠 — 필수 섹션, 금지 주제. (3) 스타일 — 어조, 가독성 수준, 용어. (4) 길이 — 단어 또는 문자 제한. (5) 안전 — 의료 조언, 개인정보, 법적 결론 금지.' },
          { q: '모델이 유효한 JSON을 출력하도록 강제하는 방법은 무엇입니까?', a: '프롬프트에 정확한 JSON 스키마를 제공하십시오: "다음과 정확히 일치하는 JSON을 반환하십시오: { \\"finding\\": \\"...\\" }". 이를 "JSON만 출력하고 다른 텍스트는 포함하지 마십시오."와 결합하십시오. GPT-5.6는 API를 통해 유효한 JSON을 적용하는 JSON 모드도 지원합니다.' },
          { q: '제약 프롬프팅은 GPT-5.6, Claude, Gemini에서 작동합니까?', a: '예 — 세 모델 모두 제약 프롬프팅을 지원합니다. GPT-5.6와 Claude Opus 4.8은 잘 형성된 프롬프트에서 강한 형식 제약(JSON, 표, 단어 제한)을 약 95%의 준수율로 따릅니다. Gemini 3.1 Pro도 비슷한 점수를 보이지만 모호한 제약을 다르게 해석할 수 있습니다. 항상 여러 모델에서 테스트하십시오.' },
          { q: '제약 프롬프팅과 퓨샷 프롬프팅의 차이점은 무엇입니까?', a: '제약 프롬프팅은 텍스트 형식의 명시적인 규칙(형식, 길이, 콘텐츠 제한)을 추가합니다. 퓨샷 프롬프팅은 모델이 생성할 내용을 암묵적으로 보여주는 작업 예시를 제공합니다. 두 방법은 함께 잘 작동합니다: 퓨샷 예시를 사용하여 출력 패턴을 보여주고, 더 엄격한 적용을 위해 제약을 추가하십시오.' },
          { q: '제약 프롬프팅을 사용하지 말아야 할 때는 언제입니까?', a: '개방형 창의적 작업(브레인스토밍, 아이디어 도출, 소설)에는 구조적 제약을 피하십시오. 창의적 프롬프트를 과도하게 제약하면 형식적이고 품질이 낮은 출력이 생성됩니다. 창의적 작업에는 어조 및 스타일 제약만 사용하고 구조적 자유를 허용하십시오.' },
          { q: '하나의 프롬프트에 제약을 몇 개나 쌓을 수 있습니까?', a: '실용적으로 3~5개의 제약이 잘 작동합니다. 5~6개를 초과하면 모델이 낮은 우선순위 제약을 경고 없이 자동으로 무시하기 시작합니다. 5개 이상이 필요하다면 우선순위 순서로 나열하고 명시적으로 기재하십시오: "제약이 충돌하면 이 순서로 적용하십시오: (1) 안전, (2) 형식, (3) 길이."' },
        ],
      },
      sources: {
        title: '출처',
        items: [
          '**OpenAI. (2026).** "구조화된 출력 — JSON 모드 및 응답 API." https://platform.openai.com/docs/guides/structured-outputs — GPT-5.6를 위한 100% 스키마 준수의 서버 측 JSON 스키마 적용.',
          '**Anthropic. (2026).** "Claude 구조화된 출력 — output_config.format." https://docs.anthropic.com/en/docs/build-with-claude — Claude Sonnet 5과 Opus 4.8을 위한 API 수준 제약 적용.',
          '**Google. (2026).** "Gemini API: response_schema를 통한 제어된 생성." https://ai.google.dev/gemini-api/docs/controlled-generation — Gemini 3.1 Pro를 위한 네이티브 JSON 모드 및 구조화된 출력 적용.',
          '**White et al. (2023).** "ChatGPT와 함께 프롬프트 엔지니어링을 향상시키기 위한 프롬프트 패턴 카탈로그." https://arxiv.org/abs/2302.11382 — 제약 기반 프롬프팅 기법을 포함한 프롬프트 패턴의 학술적 분류.',
          '**Zhou et al. (2022).** "대형 언어 모델은 인간 수준의 프롬프트 엔지니어입니다." arXiv:2211.01910 — 자동화된 제약 최적화 및 프롬프트 개선에 관한 연구.',
        ],
      },
    },
  },
};