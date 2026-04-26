// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: structured-output-json-mode
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Structured Output in LLMs: JSON Mode, Examples, and When to Use It',
      intro: 'Structured output and JSON mode are the techniques that turn a language model from a chat tool into a component in real software. When AI output is predictable and parseable, you can feed it directly into databases, trigger automations, build dashboards, and chain model calls together without manual cleanup. As of April 2026, JSON mode is natively supported by OpenAI (response_format), Anthropic (tool_use), and Google (responseMimeType) — but reliable structured output still requires careful schema design in the prompt regardless of API enforcement.',
      publishDate: '2026-03-26',
      dateModified: '2026-04-05',
      readTime: '10 min read',
      seoTitle: 'Structured Output & JSON Mode in LLMs: When to Use, Examples, and Comparison',
      metaDescription: 'Learn when to use structured output vs JSON mode vs function calling. Compare JSON compliance by model, see real examples, and master schema design for APIs, automation, and data pipelines.',
      educationalLevel: 'Intermediate',
      aboutTopics: ['Structured output', 'JSON mode', 'Function calling'],
      howToName: 'How to Implement Structured Output',
      toc: [
        { label: 'What Structured Output Is', anchor: '#what-structured-output-is' },
        { label: 'What JSON Mode Is', anchor: '#what-json-mode-is' },
        { label: 'Why Structured Output and JSON Mode Matter', anchor: '#why-structured-output-and-json-mode-matter' },
        { label: 'Model Comparison: JSON Compliance by Provider', anchor: '#model-comparison-json-compliance-by-provider' },
        { label: 'JSON Mode vs Function Calling vs Schema Prompting', anchor: '#json-mode-vs-function-calling-vs-schema-prompting' },
        { label: 'Example: Free Text vs Structured JSON', anchor: '#example-free-text-vs-structured-json' },
        { label: 'Best Practices for Structured Output and JSON Mode', anchor: '#best-practices-for-structured-output-and-json-mode' },
        { label: 'Structured Output in Regulated Environments', anchor: '#structured-output-in-regulated-environments' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'When to Use JSON Mode vs Alternatives', anchor: '#when-to-use-json-mode-vs-alternatives' },
        { label: 'When Should You Use Structured Output?', anchor: '#when-should-you-use-structured-output' },
        { label: 'How to Use Structured Output and JSON Mode', anchor: '#how-to-use-structured-output-and-json-mode' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Frequently Asked Questions', anchor: '#frequently-asked-questions' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Structured Output & JSON Mode: Get AI to Return Usable Data',
        description: 'Master structured output and JSON mode in prompts. Learn how to design schemas, enforce valid JSON, compare model compliance, and avoid common mistakes in production systems.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-05',
        keywords: ['structured output', 'JSON mode', 'prompt engineering', 'schema design', 'machine-readable output', 'JSON validation', 'prompt templates'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Structured Output' },
          { '@type': 'Thing', name: 'JSON Mode' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h2', 'h3', 'p'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Use Structured Output and JSON Mode',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Choose JSON Mode',
            text: 'For data extraction and machine-readable outputs, use JSON mode available in OpenAI GPT-4, Anthropic Claude, Google Gemini, and other major providers. This guarantees the model returns valid JSON, not prose.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Define Your Schema',
            text: 'Define your JSON schema explicitly, including field names, data types, and constraints. Use concrete examples: {"name": "string", "price": "number (≥ 0)", "in_stock": "boolean", "tags": "array of strings"}.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Provide Output Example',
            text: 'Provide an example of the exact JSON structure you want. Examples are more powerful than schema descriptions alone. Show real data your model should produce.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Handle Nested Structures',
            text: 'For objects within arrays, be explicit about hierarchy. Provide a complete JSON example, including nested arrays to show the model exactly what you expect.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Validate Output',
            text: 'Validate JSON output before using it in downstream systems. Parse the returned JSON and verify: (1) Valid JSON syntax, (2) All required fields present, (3) Data types match expectations. Handle parse errors gracefully.',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between structured output and JSON mode?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Structured output is the broader category of asking models to return data in a fixed format (lists, tables, key-value pairs, or JSON). JSON mode is a stricter variant that enforces valid JSON output, often with API-level guarantees.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do all LLMs support JSON mode?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. OpenAI GPT-4o and Claude support native JSON mode. Older models and open-source LLMs may require prompt-based enforcement (e.g., specifying the schema in instructions and examples).',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I enforce JSON-only responses without native JSON mode?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use prompt engineering: (1) Explicitly state "output only valid JSON", (2) Provide a detailed schema and examples, (3) Add a penalty instruction like "Do not include any text outside the JSON".',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens if the model returns invalid JSON?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Validate JSON on your side using a parser. If it fails, either retry the request or fall back to manual extraction. With strong prompt engineering and schema examples, failure rates are low (<5% for well-designed prompts).',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use structured output for complex documents?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Break complex tasks into steps: first extract key fields, then validate, then optionally transform into downstream systems. Chunking large documents and processing them separately often improves reliability.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I handle missing or ambiguous data in structured outputs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Define fallback behavior in your schema: use empty strings, null, or a special marker like "unknown". Add an explicit instruction: "If a value is ambiguous, use null instead of guessing."',
            },
          },
          {
            '@type': 'Question',
            name: 'Is JSON mode affected by regulatory compliance (GDPR, CCPA)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'JSON mode itself is neutral. However, structured output is beneficial for compliance because it lets you systematically track what data is extracted, transformed, and logged—important for audit trails.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I test JSON mode prompts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Test with diverse inputs: edge cases, ambiguous data, and real-world examples. Parse the output and verify: (1) valid JSON, (2) correct schema, (3) expected data types. Aim for ≥95% success rate before production.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I reuse structured-output schemas across different models?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, with caution. Define your schema once and test it across models—you may need prompt adjustments for older or smaller models. Document any model-specific differences.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the performance cost of JSON mode?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimal. Native JSON mode (OpenAI, Anthropic) has negligible performance impact. Prompt-only enforcement may add 5–10% latency due to schema explanation overhead, but safety gains justify it.',
            },
          },
        ],
      },
      sections: {
        definition: {
          content: [
            '**Structured output is a method of forcing language models to return data in a predefined format (such as JSON), enabling reliable parsing, automation, and integration into software systems.** It differs from free-form text by enforcing strict field names, data types, and schemas that downstream tools can process without manual cleanup.',
          ],
        },
        exampleBlock: {
          content: [
            'Here is a simple example of structured output in JSON format:',
          ],
          codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}',
          codeLanguage: 'json',
        },
        keyTakeaways: {
          isTldr: true,
          content: [
            '**Key Takeaways — What You Need to Know About Structured Output:**',
          ],
          items: [
            '**Improves Reliability**: Structured output reduces parsing errors and manual data cleanup by enforcing strict schemas.',
            '**Enables Automation**: JSON mode triggers conditional logic based on extracted fields (priority, category, urgency).',
            '**API-Ready**: Direct integration with databases, CRMs, and business systems without reformatting.',
            '**Model Dependent**: Native JSON mode available in GPT-4o, Claude, Gemini; older/open-source models need prompt engineering.',
            '**Best for Deterministic Tasks**: APIs, automation, data pipelines. Avoid for creative writing or open-ended reasoning.',
            '**Requires Validation**: Always parse and validate JSON output before downstream use.',
            '**Scales Across Models**: Define schema once; test and document differences across OpenAI, Anthropic, Google, and open-source providers.',
          ],
        },
        whatIsStructured: {
          title: 'What Structured Output Is',
          content: [
            '**Structured output means asking the model to follow a fixed schema—such as lists, tables, or JSON—so downstream tools can parse results reliably.** Instead of a loose paragraph, you define fields, types, and allowed values.',
            'Structured output can take several forms:',
          ],
          items: [
            'Bullet lists with a fixed number of items.',
            'Markdown tables with specific columns.',
            'Key–value pairs for simple attributes.',
            'Full JSON objects or arrays with predefined keys.',
          ],
        },
        structuredGoal: {
          content: [
            'The goal is always the same: turn a fuzzy description ("some notes about the meeting") into a predictable shape ("title, date, attendees, decisions, risks").',
          ],
        },
        whatIsJSON: {
          title: 'What JSON Mode Is',
          content: [
            '**JSON mode is a stricter variant of structured output where the model is instructed—or configured—to return valid JSON only.** In JSON mode, everything the model outputs should be parseable as JSON without additional cleanup.',
            'A typical JSON schema might look like this:',
          ],
          codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}',
          codeLanguage: 'json',
        },
        jsonModeApproach: {
          content: [
            'You reflect that schema in your prompt, then ask the model to fill it. Some platforms also provide special settings or APIs that enforce JSON-only responses, reducing the chance of extra commentary.',
          ],
        },
        whyItMatters: {
          title: 'Why Structured Output and JSON Mode Matter',
          content: [
            '**Structured output and JSON mode matter because they let you turn language models into components in larger systems, not just chat helpers.** When the output is predictable, you can:',
          ],
          items: [
            'Feed results directly into databases, CRMs, or analytics tools.',
            'Trigger automations based on fields like `priority`, `status`, or `confidence`.',
            'Build UIs that display model results in cards, tables, or dashboards without manual formatting.',
          ],
        },
        debuggingBenefit: {
          content: [
            'They also make prompts easier to debug. If the structure is broken, you know the problem is in the prompt or schema, not in some vague "quality" dimension.',
          ],
        },
        jsonVsFunctionCalling: {
          title: 'JSON Mode vs Function Calling vs Schema Prompting',
          content: [
            '**Three methods exist for getting structured output from LLMs. Each has different strengths and weaknesses:**',
          ],
          items: [
            '**JSON Mode**: Model outputs valid JSON only. Best for: data extraction, classification, summarization. Constraint: limited to output format, no tool execution.',
            '**Function Calling**: Model selects which function to call and provides arguments in JSON. Best for: API integration, tool use, agentic workflows. Constraint: requires pre-defined function schemas.',
            '**Schema Prompting**: Explicit instructions + examples asking model to follow a schema. Best for: flexibility, open-source models, custom formats. Constraint: ~80–85% reliability, no API-level guarantee.',
          ],
        },
        example: {
          title: 'Example: Free Text vs Structured JSON',
          content: [
            '**The difference becomes clear when you compare a free-text prompt with a structured JSON prompt for the same task.** Here we classify and summarize a customer email.',
            '**[Bad Prompt]**',
            '"Read this customer email and summarize what they want."',
            '**[Good Prompt – JSON Mode]**',
            '"You are a customer support assistant. Read the customer email below and extract key information into a JSON object. Requirements: Output valid JSON only, with double-quoted keys and string values. Do not include any explanations or extra text outside the JSON. If a value is missing, use an empty string. JSON schema: {\n  "issue_type": "string",\n  "urgency": "low | medium | high",\n  "summary": "string (max 25 words)",\n  "customer_sentiment": "negative | neutral | positive"\n} Customer email: [paste email text here]"',
            'The "good" version defines the schema, valid values, and JSON-only requirement, making the output straightforward to parse and use in other systems.',
          ],
        },
        bestPractices: {
          title: 'Best Practices for Structured Output and JSON Mode',
          content: [
            '**To get reliable structured outputs, you need to be explicit, consistent, and strict in your prompts.** A few practices help a lot:',
          ],
          items: [
            'Show the exact schema you expect, including allowed values for enums.',
            'State clearly that nothing except the JSON (or structure) should be returned.',
            'Use short, unambiguous key names (for example `issue_type`, `urgency`, `summary`).',
            'Add examples of valid outputs when the task is complex or sensitive.',
            'For nested structures, build them up step by step and test with real inputs.',
            'Use [specification-focused frameworks like SPECS]((/prompt-engineering/specs-framework)) or RTF with format [constraints]((/prompt-engineering/constrained-prompting)) to encode schemas directly into prompts.',
          ],
        },
        practicesAddendum: {
          content: [
            'If you still see formatting issues, you can add a simple instruction like "If you are unsure, leave the field as an empty string instead of guessing." Structured output works best when combined with [RAG (Retrieval-Augmented Generation)]((/prompt-engineering/rag-explained)) for fact-checking extracted data.',
          ],
        },
        modelComparison: {
          title: 'Model Comparison: JSON Compliance by Provider',
          content: [
            '**Different models have different levels of native JSON mode support.** As of April 2026, here is how major providers rank:',
          ],
          columns: ['Model', 'Native JSON Mode', 'Prompt-Only Compliance', 'Notes'],
          rows: [
            { 'Model': 'OpenAI GPT-4o', 'Native JSON Mode': 'Yes (enforced)', 'Prompt-Only Compliance': 'Not needed', 'Notes': 'Industry standard for JSON mode; 99%+ success rate.' },
            { 'Model': 'Anthropic Claude 3.5 Sonnet', 'Native JSON Mode': 'Yes (enforced)', 'Prompt-Only Compliance': 'Not needed', 'Notes': 'Excellent JSON compliance; supports complex nested structures.' },
            { 'Model': 'Google Gemini 2.0', 'Native JSON Mode': 'Yes (enforced)', 'Prompt-Only Compliance': 'Not needed', 'Notes': 'Native JSON support; fast inference.' },
            { 'Model': 'Meta Llama 3.1 (70B)', 'Native JSON Mode': 'Partial', 'Prompt-Only Compliance': 'Highly recommended', 'Notes': 'Open-source; works well with detailed prompts and examples.' },
            { 'Model': 'Mistral Large', 'Native JSON Mode': 'Partial', 'Prompt-Only Compliance': 'Recommended', 'Notes': 'Good JSON behavior; test with your specific schema.' },
            { 'Model': 'Older GPT-3.5, Claude 2', 'Native JSON Mode': 'No', 'Prompt-Only Compliance': 'Required', 'Notes': 'Requires strong prompt engineering; ~80–85% success rate.' },
            { 'Model': 'Small open-source models (<13B)', 'Native JSON Mode': 'No', 'Prompt-Only Compliance': 'Required with examples', 'Notes': 'Need detailed schemas and multiple examples; ~60–70% success rate.' },
          ],
        },
        regulatedEnvironments: {
          title: 'Structured Output in Regulated Environments',
          content: [
            '**Structured output is particularly valuable in regulated industries because it enforces consistent data extraction, audit trails, and compliance documentation.** Different regions have different requirements:',
          ],
          items: [
            '**EU (GDPR, AI Act)**: Structured output enables systematic data classification and right-to-deletion tracking. JSON mode lets you tag which fields contain personal data, facilitating DPIA (Data Protection Impact Assessment) and compliance audits.',
            '**Japan (METI AI Guidelines, APPI)**: Structured extraction with clear schema definitions supports transparency and accountability requirements. AI Act compliance in Japan often requires documenting how data is processed—structured output provides clear audit trails.',
            '**China (CAC Regulations, Data Security Law)**: Structured output helps with content moderation and data residency logging. JSON mode allows systematic classification of sensitive content (financial data, personal information) for compliance with CAC standards.',
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes',
          content: [
            '**Avoid these frequent errors when implementing structured output and JSON mode:**',
          ],
          items: [
            '**Ambiguous schemas**: Saying "extract the key points" without defining a schema leads to inconsistent output. Always specify exact field names, types, and constraints.',
            '**Missing examples**: Providing only a schema description without examples causes 20–30% failure rates. Always show 1–3 examples of valid output.',
            '**Failing to validate output**: Assuming the model will always return valid JSON leads to parsing errors in production. Always validate and handle parse failures gracefully.',
            '**Not handling edge cases**: Fields that might be missing, ambiguous, or out-of-range must have defined fallback behavior (null, empty string, or default value).',
            '**Testing on easy inputs only**: Real-world data is messy. Test your schema on edge cases: incomplete emails, special characters, mixed languages, very long inputs.',
          ],
        },
        whenToUseJsonMode: {
          title: 'When to Use JSON Mode vs Alternatives',
          content: [
            '**Choose JSON mode when you need strict schema enforcement and deterministic output. Avoid it when creativity and open-ended reasoning matter.**',
          ],
          items: [
            '**✓ Use JSON Mode**: Strict schema required, automation pipelines, API integration, data extraction, classification tasks, deterministic outputs, production systems requiring validation.',
            '**✗ Avoid JSON Mode**: Creative writing, open-ended reasoning, brainstorming, essays, code generation (function calling is better), philosophical questions, narrative content.',
            '**Alternative: Use Function Calling** when you need tool integration and agentic workflows (model selects which function to call).',
            '**Alternative: Use Schema Prompting** when you need flexibility, work with open-source models, or don\'t need API-level guarantees.',
          ],
        },
        whenToUseStructuredOutput: {
          title: 'When Should You Use Structured Output?',
          content: [
            '**Structured output shines in three main scenarios. Use it when you need deterministic, machine-readable results:**',
          ],
          items: [
            '**APIs and Integrations**: Plug LLM output directly into downstream systems (databases, CRMs, dashboards). Structured output prevents parsing errors and manual cleanup. Example: extract customer data from emails and write to CRM.',
            '**Automation and Workflows**: Trigger actions based on model output fields (priority, urgency, category). JSON mode ensures reliable field extraction for conditional logic. Example: route support tickets by urgency level.',
            '**Data Pipelines**: Process bulk data (documents, emails, logs) at scale. Consistent schemas enable batch processing, validation, and error handling. Example: extract metadata from 10,000 research papers into a searchable database.',
          ],
        },
        howToStart: {
          title: 'How to Use Structured Output and JSON Mode',
          numberedItems: [
            '**For data extraction and machine-readable outputs, use JSON mode (available in OpenAI GPT-4o, Anthropic Claude, Google Gemini, and others).** This guarantees the model returns valid JSON, not prose. Example: Extract product info as JSON with keys: name, price, description, rating.',
            '**Define your JSON schema explicitly, including field names, data types, and constraints.** Example: { "name": string, "price": number (≥ 0), "in_stock": boolean, "tags": array of strings }.',
            '**Provide an example of the exact JSON structure you want.** Example: { "issue": "memory leak", "severity": "critical", "suggested_fix": "...", "code_snippet": "..." }. Examples are more powerful than schema descriptions.',
            '**For nested structures (objects within arrays), be explicit about hierarchy.** Provide a complete JSON example, including nested arrays. See the example below.',
            '**Validate JSON output before using it in downstream systems.** Parse the returned JSON and check: (1) It\'s valid JSON syntax, (2) All required fields are present, (3) Data types match expectations. Handle parse errors gracefully.',
          ],
        },
        howToStep4Code: {
          content: [
            '**Here is a complete JSON example with nested arrays, showing proper hierarchy:**',
          ],
          codeBlock: '{\n  "articles": [\n    {\n      "title": "string",\n      "author": "string",\n      "citations": [\n        {\n          "title": "string",\n          "year": "number"\n        }\n      ]\n    }\n  ]\n}',
          codeLanguage: 'json',
        },
        relatedReading: {
          title: 'Related Reading',
          content: [
            '**Expand your knowledge with these related prompt engineering topics:**',
          ],
          items: [
            '[Constrained Prompting](/prompt-engineering/constrained-prompting) — enforce specific output formats and token budgets.',
            '[SPECS Framework](/prompt-engineering/specs-framework) — specification-focused prompts for reliable model behavior.',
            '[RAG Explained](/prompt-engineering/rag-explained) — combine structured extraction with real-time data retrieval.',
            '[Chain of Thought](/prompt-engineering/chain-of-thought) — reason step-by-step before returning structured outputs.',
            '[Prompt Templates](/prompt-engineering/prompt-templates) — reusable patterns for common structured-output tasks.',
            '[Zero-Shot vs Few-Shot](/prompt-engineering/zero-shot-vs-few-shot) — understand when examples (few-shot) improve JSON compliance.',
          ],
        },
        faq: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is the difference between structured output and JSON mode?',
              a: 'Structured output is the broader category of asking models to return data in a fixed format (lists, tables, key-value pairs, or JSON). JSON mode is a stricter variant that enforces valid JSON output, often with API-level guarantees from the model provider.',
            },
            {
              q: 'Do all LLMs support JSON mode?',
              a: 'No. OpenAI GPT-4o, Anthropic Claude 3.5+, and Google Gemini support native JSON mode. Older models and open-source LLMs may require prompt-based enforcement (e.g., specifying the schema in instructions and providing examples).',
            },
            {
              q: 'How do I enforce JSON-only responses without native JSON mode?',
              a: 'Use prompt engineering: (1) Explicitly state "output only valid JSON", (2) Provide a detailed schema and examples, (3) Add a penalty instruction like "Do not include any text outside the JSON". Success rates improve significantly with good examples.',
            },
            {
              q: 'What happens if the model returns invalid JSON?',
              a: 'Validate JSON on your side using a parser. If it fails, either retry the request with a clearer prompt or fall back to manual extraction. With strong prompt engineering and schema examples, failure rates are low (typically <5% for well-designed prompts).',
            },
            {
              q: 'Can I use structured output for complex documents?',
              a: 'Yes. Break complex tasks into steps: first extract key fields, then validate, then optionally transform into downstream systems. Chunking large documents and processing them separately often improves reliability and reduces token usage.',
            },
            {
              q: 'How do I handle missing or ambiguous data in structured outputs?',
              a: 'Define fallback behavior in your schema: use empty strings, null values, or a special marker like "unknown". Add an explicit instruction: "If a value is ambiguous or missing, use null instead of guessing."',
            },
            {
              q: 'Is JSON mode affected by regulatory compliance (GDPR, CCPA)?',
              a: 'JSON mode itself is neutral. However, structured output is beneficial for compliance because it lets you systematically track what data is extracted, transformed, and logged—critical for audit trails and regulatory reporting.',
            },
            {
              q: 'How do I test JSON mode prompts?',
              a: 'Test with diverse inputs: edge cases, ambiguous data, and real-world examples. Parse the output and verify: (1) valid JSON, (2) correct schema, (3) expected data types. Aim for ≥95% success rate before deploying to production.',
            },
            {
              q: 'Can I reuse structured-output schemas across different models?',
              a: 'Yes, with caution. Define your schema once and test it across models—you may need prompt adjustments for older or smaller models. Document any model-specific differences and success rates.',
            },
            {
              q: 'What is the performance cost of JSON mode?',
              a: 'Minimal. Native JSON mode (OpenAI, Anthropic, Google) has negligible performance impact. Prompt-only enforcement may add 5–10% latency due to schema explanation overhead, but safety gains typically justify it.',
            },
          ],
        },
        sources: {
          title: 'Sources',
          items: [
            '[OpenAI JSON Mode Documentation](https://platform.openai.com/docs/guides/json-mode) — Official guide to JSON mode in OpenAI API.',
            '[Anthropic Structured Output Guide](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — Anthropic\'s documentation for structured output in Claude.',
            '[Google Gemini API – Structured Output](https://ai.google.dev/gemini-2/docs/structured-output) — Google\'s native JSON mode support in Gemini 2.0.',
            '[JSON Schema Specification](https://json-schema.org/specification.html) — Standard specification for JSON Schema design and validation.',
          ],
        },
      },
    },
    de: {
      theme: 'Techniques',
      title: 'Strukturierte Ausgabe in LLMs: JSON-Modus, Beispiele und Verwendung',
      intro: 'Strukturierte Ausgabe und JSON-Modus wandeln lose Sprachmodellausgaben in zuverlässige, maschinenlesbare Formate um, die sich nahtlos in Datenbanken, APIs und Automatisierungs-Workflows integrieren lassen. Lerne, wie du Prompts erstellst, die valides JSON erzwingen, JSON-Modus mit Function Calling und Schema-Prompting vergleichst und welche Methode zu deinem Anwendungsfall passt.',
      publishDate: '2026-03-26',
      dateModified: '2026-04-05',
      readTime: '10 min Lesezeit',
      seoTitle: 'Strukturierte Ausgabe & JSON-Modus in LLMs: Verwendung, Beispiele und Vergleich',
      metaDescription: 'Erfahre, wann strukturierte Ausgabe, JSON-Modus oder Function Calling sinnvoll ist. Vergleiche JSON-Compliance nach Modell, sieh Beispiele und meistere Schema-Design für APIs.',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Strukturierte Ausgabe in LLMs: JSON-Modus, Beispiele und Verwendung',
        description: 'Strukturierte Ausgabe und JSON-Modus für Prompts meistern. Schema-Design, valides JSON erzwingen, Modell-Compliance vergleichen und häufige Fehler in Produktionssystemen vermeiden.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-05',
        keywords: ['Strukturierte Ausgabe', 'JSON-Modus', 'Prompt Engineering', 'Schema-Design', 'Maschinenlesbare Ausgabe', 'JSON-Validierung', 'Prompt-Vorlagen'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Wie man Strukturierte Ausgabe und JSON-Modus verwendet',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'JSON-Modus wählen', text: 'Für Datenextraktion und maschinenlesbare Ausgaben den JSON-Modus verwenden (verfügbar in OpenAI GPT-4, Anthropic Claude, Google Gemini).' },
          { '@type': 'HowToStep', position: 2, name: 'Schema definieren', text: 'Das JSON-Schema explizit definieren, einschließlich Feldnamen, Datentypen und Einschränkungen.' },
          { '@type': 'HowToStep', position: 3, name: 'Ausgabebeispiel bereitstellen', text: 'Ein Beispiel der gewünschten JSON-Struktur bereitstellen. Beispiele sind effektiver als reine Schema-Beschreibungen.' },
          { '@type': 'HowToStep', position: 4, name: 'Verschachtelte Strukturen behandeln', text: 'Bei Objekten innerhalb von Arrays die Hierarchie explizit angeben und ein vollständiges JSON-Beispiel mit verschachtelten Arrays bereitstellen.' },
          { '@type': 'HowToStep', position: 5, name: 'Ausgabe validieren', text: 'JSON-Ausgabe vor der Verwendung in nachgelagerten Systemen validieren: Syntax prüfen, Pflichtfelder und Datentypen bestätigen.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Was ist der Unterschied zwischen strukturierter Ausgabe und JSON-Modus?', acceptedAnswer: { '@type': 'Answer', text: 'Strukturierte Ausgabe ist die übergeordnete Kategorie, bei der Modelle Daten in einem festen Format (Listen, Tabellen, Schlüssel-Wert-Paare oder JSON) zurückgeben sollen. Der JSON-Modus ist eine strengere Variante, die valide JSON-Ausgabe erzwingt, oft mit API-Garantien des Modellanbieters.' } },
          { '@type': 'Question', name: 'Unterstützen alle LLMs den JSON-Modus?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. OpenAI GPT-4o, Anthropic Claude 3.5+ und Google Gemini unterstützen nativen JSON-Modus. Ältere Modelle und Open-Source-LLMs benötigen möglicherweise Prompt-basierte Erzwingung.' } },
          { '@type': 'Question', name: 'Wie erzwinge ich JSON-only-Antworten ohne nativen JSON-Modus?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt Engineering nutzen: (1) "Ausgabe nur valides JSON" explizit angeben, (2) detailliertes Schema und Beispiele bereitstellen, (3) Anweisung "Keinen Text außerhalb des JSON" hinzufügen.' } },
          { '@type': 'Question', name: 'Was passiert, wenn das Modell ungültiges JSON zurückgibt?', acceptedAnswer: { '@type': 'Answer', text: 'JSON mit einem Parser auf der eigenen Seite validieren. Bei Fehler Anfrage mit klarerem Prompt wiederholen oder auf manuelle Extraktion zurückfallen. Mit gutem Prompt Engineering sind Fehlerquoten gering (<5%).' } },
          { '@type': 'Question', name: 'Kann ich strukturierte Ausgabe für komplexe Dokumente verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Komplexe Aufgaben in Schritte aufteilen: zuerst Schlüsselfelder extrahieren, dann validieren, dann in nachgelagerte Systeme transformieren. Große Dokumente in Chunks aufteilen verbessert die Zuverlässigkeit.' } },
          { '@type': 'Question', name: 'Wie gehe ich mit fehlenden oder mehrdeutigen Daten in strukturierten Ausgaben um?', acceptedAnswer: { '@type': 'Answer', text: 'Fallback-Verhalten im Schema definieren: leere Strings, Null-Werte oder einen speziellen Marker verwenden. Explizite Anweisung hinzufügen: "Wenn ein Wert mehrdeutig ist, null statt raten verwenden."' } },
          { '@type': 'Question', name: 'Ist der JSON-Modus von Compliance-Anforderungen (DSGVO, CCPA) betroffen?', acceptedAnswer: { '@type': 'Answer', text: 'Der JSON-Modus selbst ist neutral. Strukturierte Ausgabe ist jedoch vorteilhaft für die Compliance, da sie die systematische Nachverfolgung extrahierter, transformierter und protokollierter Daten ermöglicht.' } },
          { '@type': 'Question', name: 'Wie teste ich JSON-Modus-Prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Mit diversen Eingaben testen: Grenzfälle, mehrdeutige Daten und reale Beispiele. Ausgabe parsen und prüfen: (1) valides JSON, (2) korrektes Schema, (3) erwartete Datentypen. Ziel: ≥95% Erfolgsrate vor dem Produktiveinsatz.' } },
          { '@type': 'Question', name: 'Kann ich strukturierte Ausgabe-Schemas für verschiedene Modelle wiederverwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, mit Vorsicht. Schema einmal definieren und über Modelle testen — bei älteren oder kleineren Modellen können Prompt-Anpassungen nötig sein. Modellspezifische Unterschiede dokumentieren.' } },
          { '@type': 'Question', name: 'Welche Performanzkosten hat der JSON-Modus?', acceptedAnswer: { '@type': 'Answer', text: 'Minimal. Nativer JSON-Modus (OpenAI, Anthropic, Google) hat vernachlässigbare Performanzauswirkungen. Prompt-basierte Erzwingung kann durch Schema-Erklärung 5–10% mehr Latenz verursachen.' } },
        ],
      },
      sections: {
        definition: {
          content: [
            '**Strukturierte Ausgabe ist eine Methode, Sprachmodelle dazu zu zwingen, Daten in einem vordefinierten Format (wie JSON) zurückzugeben, was zuverlässiges Parsing, Automatisierung und Integration in Softwaresysteme ermöglicht.** Sie unterscheidet sich von Freitext durch die Erzwingung strenger Feldnamen, Datentypen und Schemas, die nachgelagerte Tools ohne manuelle Nachbearbeitung verarbeiten können.',
          ],
        },
        exampleBlock: {
          content: [
            'Hier ist ein einfaches Beispiel für strukturierte Ausgabe im JSON-Format:',
          ],
          codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}',
          codeLanguage: 'json',
        },
        keyTakeaways: {
          isTldr: true,
          content: [
            '**Strukturierte Ausgabe und JSON-Modus in 7 Kernpunkten:**',
          ],
          items: [
            'Strukturierte Ausgabe bedeutet, Prompts so zu gestalten, dass Daten in festen Formaten (Listen, Tabellen oder JSON) statt als Freitext zurückgegeben werden.',
            'Der JSON-Modus erzwingt valide JSON-Ausgabe und wird nativ von OpenAI GPT-4o, Anthropic Claude und Google Gemini unterstützt; ältere Modelle benötigen Prompt-basierte Erzwingung.',
            'Schemas explizit mit Feldnamen, Datentypen und Einschränkungen definieren; Beispiele sind effektiver als Beschreibungen.',
            'Häufige Fehler: unklare Schemas, fehlende Beispiele, keine Ausgabe-Validierung und nicht behandelte Grenzfälle.',
            'In regulierten Umgebungen (EU, Japan, China) verbessert strukturierte Ausgabe Data Governance, Audit-Trails und Compliance-Dokumentation.',
            'JSON-Ausgabe vor der Verwendung validieren: Syntax, Pflichtfelder und Datentypen prüfen.',
            'Strukturierte Ausgabe skaliert über Modelle hinweg — einmal definieren, über Anbieter testen, modellspezifische Anpassungen dokumentieren.',
          ],
        },
        whatIsStructured: {
          title: 'Was strukturierte Ausgabe ist',
          content: [
            '**Strukturierte Ausgabe bedeutet, das Modell aufzufordern, einem festen Schema zu folgen — wie Listen, Tabellen oder JSON — damit nachgelagerte Tools Ergebnisse zuverlässig parsen können.** Statt eines losen Absatzes werden Felder, Typen und erlaubte Werte definiert.',
            'Strukturierte Ausgabe kann verschiedene Formen annehmen:',
          ],
          items: [
            'Aufzählungen mit einer festen Anzahl von Elementen.',
            'Markdown-Tabellen mit bestimmten Spalten.',
            'Schlüssel-Wert-Paare für einfache Attribute.',
            'Vollständige JSON-Objekte oder Arrays mit vordefinierten Schlüsseln.',
          ],
        },
        structuredGoal: {
          content: [
            'Das Ziel ist immer dasselbe: eine vage Beschreibung ("einige Notizen zum Meeting") in eine vorhersehbare Form zu überführen ("Titel, Datum, Teilnehmer, Entscheidungen, Risiken").',
          ],
        },
        whatIsJSON: {
          title: 'Was der JSON-Modus ist',
          content: [
            '**Der JSON-Modus ist eine strengere Variante der strukturierten Ausgabe, bei der das Modell angewiesen — oder konfiguriert — wird, ausschließlich valides JSON zurückzugeben.** Im JSON-Modus sollte alles, was das Modell ausgibt, als JSON parsebar sein, ohne zusätzliche Nachbearbeitung.',
            'Ein typisches JSON-Schema könnte so aussehen:',
          ],
          codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}',
          codeLanguage: 'json',
        },
        jsonModeApproach: {
          content: [
            'Dieses Schema wird im Prompt widergespiegelt, dann das Modell aufgefordert, es auszufüllen. Manche Plattformen bieten auch spezielle Einstellungen oder APIs, die JSON-only-Antworten erzwingen und so die Chance auf zusätzliche Kommentare reduzieren.',
          ],
        },
        whyItMatters: {
          title: 'Warum strukturierte Ausgabe und JSON-Modus wichtig sind',
          content: [
            '**Strukturierte Ausgabe und JSON-Modus sind wichtig, weil sie es ermöglichen, Sprachmodelle in größere Systeme einzubetten — nicht nur als Chat-Helfer.** Wenn die Ausgabe vorhersehbar ist, kann man:',
          ],
          items: [
            'Ergebnisse direkt in Datenbanken, CRMs oder Analytics-Tools einspeisen.',
            'Automationen basierend auf Feldern wie `priority`, `status` oder `confidence` auslösen.',
            'UIs erstellen, die Modellergebnisse in Karten, Tabellen oder Dashboards ohne manuelle Formatierung anzeigen.',
          ],
        },
        debuggingBenefit: {
          content: [
            'Sie erleichtern auch das Debugging von Prompts. Wenn die Struktur fehlerhaft ist, weiß man, dass das Problem im Prompt oder Schema liegt, nicht in einer vagen "Qualitätsdimension".',
          ],
        },
        jsonVsFunctionCalling: {
          title: 'JSON-Modus vs. Function Calling vs. Schema-Prompting',
          content: [
            '**Es gibt drei Methoden, strukturierte Ausgabe von LLMs zu erhalten. Jede hat unterschiedliche Stärken und Schwächen:**',
          ],
          items: [
            '**JSON-Modus**: Modell gibt nur valides JSON aus. Optimal für: Datenextraktion, Klassifizierung, Zusammenfassung. Einschränkung: auf Ausgabeformat begrenzt, keine Werkzeugausführung.',
            '**Function Calling**: Modell wählt, welche Funktion aufgerufen und Argumente als JSON übergeben werden. Optimal für: API-Integration, Werkzeugnutzung, agentische Workflows. Einschränkung: erfordert vordefinierte Funktionsschemata.',
            '**Schema-Prompting**: Explizite Anweisungen + Beispiele, die das Modell auffordern, einem Schema zu folgen. Optimal für: Flexibilität, Open-Source-Modelle, benutzerdefinierte Formate. Einschränkung: ~80–85% Zuverlässigkeit, keine API-Garantie.',
          ],
        },
        example: {
          title: 'Beispiel: Freitext vs. Strukturiertes JSON',
          content: [
            '**Der Unterschied wird deutlich, wenn man einen Freitext-Prompt mit einem strukturierten JSON-Prompt für dieselbe Aufgabe vergleicht.** Hier klassifizieren und fassen wir eine Kunden-E-Mail zusammen.',
            '**[Schlechter Prompt]**',
            '"Lies diese Kunden-E-Mail und fasse zusammen, was sie wollen."',
            '**[Guter Prompt – JSON-Modus]**',
            '"Du bist ein Kundensupport-Assistent. Lies die folgende Kunden-E-Mail und extrahiere wichtige Informationen in ein JSON-Objekt. Anforderungen: Gib nur valides JSON mit doppelt angeführten Schlüsseln und String-Werten zurück. Füge keine Erklärungen außerhalb des JSON hinzu. Bei fehlendem Wert leeren String verwenden. JSON-Schema: {\n  \"issue_type\": \"string\",\n  \"urgency\": \"low | medium | high\",\n  \"summary\": \"string (max. 25 Wörter)\",\n  \"customer_sentiment\": \"negative | neutral | positive\"\n} Kunden-E-Mail: [E-Mail-Text hier einfügen]"',
            'Die "gute" Version definiert Schema, valide Werte und JSON-only-Anforderung, was das Parsen und die Verwendung in anderen Systemen einfach macht.',
          ],
        },
        bestPractices: {
          title: 'Best Practices für strukturierte Ausgabe und JSON-Modus',
          content: [
            '**Für zuverlässige strukturierte Ausgaben müssen Prompts explizit, konsistent und strikt sein.** Ein paar Praktiken helfen dabei sehr:',
          ],
          items: [
            'Das genaue erwartete Schema angeben, einschließlich erlaubter Werte für Enums.',
            'Klar angeben, dass nichts außer JSON (oder der Struktur) zurückgegeben werden soll.',
            'Kurze, eindeutige Schlüsselnamen verwenden (z. B. `issue_type`, `urgency`, `summary`).',
            'Beispiele für valide Ausgaben hinzufügen, wenn die Aufgabe komplex oder sensibel ist.',
            'Bei verschachtelten Strukturen diese schrittweise aufbauen und mit echten Eingaben testen.',
            'Spezifikationsorientierte Frameworks wie SPECS oder RTF mit Format-[Einschränkungen]((/prompt-engineering/constrained-prompting?lang=de)) verwenden, um Schemas direkt in Prompts zu kodieren.',
          ],
        },
        practicesAddendum: {
          content: [
            'Wenn weiterhin Formatierungsprobleme auftreten, kann die einfache Anweisung "Im Zweifel das Feld als leeren String belassen statt zu raten" hinzugefügt werden. Strukturierte Ausgabe funktioniert am besten in Kombination mit [RAG (Retrieval-Augmented Generation)]((/prompt-engineering/rag-explained?lang=de)) zur Faktenprüfung extrahierter Daten.',
          ],
        },
        modelComparison: {
          title: 'Modellvergleich: JSON-Compliance nach Anbieter',
          content: [
            '**Verschiedene Modelle haben unterschiedliche Unterstützung für nativen JSON-Modus.** Stand April 2026, hier ist die Rangliste der wichtigsten Anbieter:',
          ],
          columns: ['Modell', 'Nativer JSON-Modus', 'Nur-Prompt-Compliance', 'Hinweise'],
          rows: [
            { 'Modell': 'OpenAI GPT-4o', 'Nativer JSON-Modus': 'Ja (erzwungen)', 'Nur-Prompt-Compliance': 'Nicht erforderlich', 'Hinweise': 'Industriestandard für JSON-Modus; 99%+ Erfolgsrate.' },
            { 'Modell': 'Anthropic Claude 3.5 Sonnet', 'Nativer JSON-Modus': 'Ja (erzwungen)', 'Nur-Prompt-Compliance': 'Nicht erforderlich', 'Hinweise': 'Hervorragende JSON-Compliance; unterstützt komplexe verschachtelte Strukturen.' },
            { 'Modell': 'Google Gemini 2.0', 'Nativer JSON-Modus': 'Ja (erzwungen)', 'Nur-Prompt-Compliance': 'Nicht erforderlich', 'Hinweise': 'Nativer JSON-Support; schnelle Inferenz.' },
            { 'Modell': 'Meta Llama 3.1 (70B)', 'Nativer JSON-Modus': 'Teilweise', 'Nur-Prompt-Compliance': 'Sehr empfohlen', 'Hinweise': 'Open-Source; funktioniert gut mit detaillierten Prompts und Beispielen.' },
            { 'Modell': 'Mistral Large', 'Nativer JSON-Modus': 'Teilweise', 'Nur-Prompt-Compliance': 'Empfohlen', 'Hinweise': 'Gutes JSON-Verhalten; mit spezifischem Schema testen.' },
            { 'Modell': 'Ältere GPT-3.5, Claude 2', 'Nativer JSON-Modus': 'Nein', 'Nur-Prompt-Compliance': 'Erforderlich', 'Hinweise': 'Erfordert starkes Prompt Engineering; ~80–85% Erfolgsrate.' },
            { 'Modell': 'Kleine Open-Source-Modelle (<13B)', 'Nativer JSON-Modus': 'Nein', 'Nur-Prompt-Compliance': 'Erforderlich mit Beispielen', 'Hinweise': 'Benötigen detaillierte Schemas und mehrere Beispiele; ~60–70% Erfolgsrate.' },
          ],
        },
        regulatedEnvironments: {
          title: 'Strukturierte Ausgabe in regulierten Umgebungen',
          content: [
            '**Strukturierte Ausgabe ist besonders wertvoll in regulierten Branchen, da sie konsistente Datenextraktion, Audit-Trails und Compliance-Dokumentation erzwingt.** Verschiedene Regionen haben unterschiedliche Anforderungen:',
          ],
          items: [
            '**EU (DSGVO, KI-Gesetz)**: Strukturierte Ausgabe ermöglicht systematische Datenklassifizierung und Löschverfolgung. Der JSON-Modus ermöglicht das Tagging von Feldern mit personenbezogenen Daten, was DSFA (Datenschutz-Folgenabschätzung) und Compliance-Audits erleichtert.',
            '**Japan (METI KI-Leitlinien, APPI)**: Strukturierte Extraktion mit klaren Schema-Definitionen unterstützt Transparenz- und Rechenschaftspflichten. Die Dokumentation der Datenverarbeitung wird durch strukturierte Ausgabe mit klaren Audit-Trails unterstützt.',
            '**China (CAC-Vorschriften, Datensicherheitsgesetz)**: Strukturierte Ausgabe hilft bei Content-Moderation und Data-Residency-Protokollierung. Der JSON-Modus ermöglicht die systematische Klassifizierung sensibler Inhalte (Finanzdaten, personenbezogene Informationen) für CAC-Compliance.',
          ],
        },
        commonMistakes: {
          title: 'Häufige Fehler',
          content: [
            '**Diese häufigen Fehler bei der Implementierung von strukturierter Ausgabe und JSON-Modus vermeiden:**',
          ],
          items: [
            '**Unklare Schemas**: "Extrahiere die Kernpunkte" ohne Schema-Definition führt zu inkonsistenter Ausgabe. Immer exakte Feldnamen, Typen und Einschränkungen angeben.',
            '**Fehlende Beispiele**: Nur Schema-Beschreibung ohne Beispiele verursacht 20–30% Fehlerrate. Immer 1–3 Beispiele valider Ausgaben zeigen.',
            '**Keine Ausgabe-Validierung**: Annahme, das Modell gibt immer valides JSON zurück, führt zu Parsing-Fehlern in der Produktion. Immer validieren und Parse-Fehler graceful behandeln.',
            '**Grenzfälle nicht behandeln**: Felder, die fehlen, mehrdeutig oder außerhalb des Bereichs sein könnten, müssen definiertes Fallback-Verhalten haben (null, leerer String oder Standardwert).',
            '**Nur mit einfachen Eingaben testen**: Reale Daten sind unstrukturiert. Schema mit Grenzfällen testen: unvollständige E-Mails, Sonderzeichen, gemischte Sprachen, sehr lange Eingaben.',
          ],
        },
        whenToUseJsonMode: {
          title: 'Wann JSON-Modus vs. Alternativen verwenden',
          content: [
            '**JSON-Modus wählen, wenn strenge Schema-Erzwingung und deterministische Ausgabe benötigt werden. Vermeiden, wenn Kreativität und offenes Denken gefragt sind.**',
          ],
          items: [
            '**✓ JSON-Modus verwenden**: Striktes Schema erforderlich, Automatisierungs-Pipelines, API-Integration, Datenextraktion, Klassifizierungsaufgaben, deterministische Ausgaben, Produktionssysteme mit Validierung.',
            '**✗ JSON-Modus vermeiden**: Kreatives Schreiben, offenes Denken, Brainstorming, Essays, Code-Generierung (Function Calling ist besser), philosophische Fragen, narrative Inhalte.',
            '**Alternative: Function Calling** verwenden, wenn Tool-Integration und agentische Workflows benötigt werden.',
            '**Alternative: Schema-Prompting** verwenden, wenn Flexibilität gefragt, mit Open-Source-Modellen gearbeitet wird oder keine API-Garantien benötigt werden.',
          ],
        },
        whenToUseStructuredOutput: {
          title: 'Wann sollte strukturierte Ausgabe verwendet werden?',
          content: [
            '**Strukturierte Ausgabe glänzt in drei Hauptszenarien. Verwenden, wenn deterministische, maschinenlesbare Ergebnisse benötigt werden:**',
          ],
          items: [
            '**APIs und Integrationen**: LLM-Ausgabe direkt in nachgelagerte Systeme (Datenbanken, CRMs, Dashboards) einspeisen. Strukturierte Ausgabe verhindert Parsing-Fehler und manuelle Nachbearbeitung.',
            '**Automatisierung und Workflows**: Aktionen basierend auf Modell-Ausgabefeldern (Priorität, Dringlichkeit, Kategorie) auslösen. JSON-Modus gewährleistet zuverlässige Feldextraktion für bedingte Logik.',
            '**Daten-Pipelines**: Massendaten (Dokumente, E-Mails, Logs) im großen Maßstab verarbeiten. Konsistente Schemas ermöglichen Stapelverarbeitung, Validierung und Fehlerbehandlung.',
          ],
        },
        howToStart: {
          title: 'Wie strukturierte Ausgabe und JSON-Modus verwendet werden',
          numberedItems: [
            '**Für Datenextraktion und maschinenlesbare Ausgaben den JSON-Modus (verfügbar in OpenAI GPT-4o, Anthropic Claude, Google Gemini und anderen) verwenden.** Dies garantiert, dass das Modell valides JSON zurückgibt. Beispiel: Produktinformationen als JSON mit Schlüsseln extrahieren: name, price, description, rating.',
            '**Das JSON-Schema explizit definieren, einschließlich Feldnamen, Datentypen und Einschränkungen.** Beispiel: { "name": string, "price": number (≥ 0), "in_stock": boolean, "tags": array of strings }.',
            '**Ein Beispiel der genauen gewünschten JSON-Struktur bereitstellen.** Beispiel: { "issue": "memory leak", "severity": "critical", "suggested_fix": "...", "code_snippet": "..." }. Beispiele sind effektiver als Schema-Beschreibungen.',
            '**Bei verschachtelten Strukturen (Objekte innerhalb von Arrays) die Hierarchie explizit angeben.** Ein vollständiges JSON-Beispiel mit verschachtelten Arrays bereitstellen. Siehe Beispiel unten.',
            '**JSON-Ausgabe vor der Verwendung in nachgelagerten Systemen validieren.** Das zurückgegebene JSON parsen und prüfen: (1) Valide JSON-Syntax, (2) Alle Pflichtfelder vorhanden, (3) Datentypen stimmen mit Erwartungen überein. Parse-Fehler graceful behandeln.',
          ],
        },
        howToStep4Code: {
          content: [
            '**Hier ist ein vollständiges JSON-Beispiel mit verschachtelten Arrays, das die korrekte Hierarchie zeigt:**',
          ],
          codeBlock: '{\n  "articles": [\n    {\n      "title": "string",\n      "author": "string",\n      "citations": [\n        {\n          "title": "string",\n          "year": "number"\n        }\n      ]\n    }\n  ]\n}',
          codeLanguage: 'json',
        },
        relatedReading: {
          title: 'Weiterführende Literatur',
          content: [
            '**Erweitere dein Wissen mit diesen verwandten Prompt-Engineering-Themen:**',
          ],
          items: [
            '[Constrained Prompting](/prompt-engineering/constrained-prompting?lang=de) — spezifische Ausgabeformate und Token-Budgets erzwingen.',
            '[SPECS Framework](/prompt-engineering/specs-framework?lang=de) — spezifikationsorientierte Prompts für zuverlässiges Modellverhalten.',
            '[RAG Explained](/prompt-engineering/rag-explained?lang=de) — strukturierte Extraktion mit Echtzeit-Datenabruf kombinieren.',
            '[Chain of Thought](/prompt-engineering/chain-of-thought?lang=de) — Schritt für Schritt denken, bevor strukturierte Ausgaben zurückgegeben werden.',
            '[Prompt Templates](/prompt-engineering/prompt-templates?lang=de) — wiederverwendbare Muster für häufige Aufgaben mit strukturierter Ausgabe.',
            '[Zero-Shot vs Few-Shot](/prompt-engineering/zero-shot-vs-few-shot?lang=de) — verstehen, wann Beispiele (Few-Shot) die JSON-Compliance verbessern.',
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist der Unterschied zwischen strukturierter Ausgabe und JSON-Modus?', a: 'Strukturierte Ausgabe ist die übergeordnete Kategorie, bei der Modelle Daten in einem festen Format (Listen, Tabellen, Schlüssel-Wert-Paare oder JSON) zurückgeben sollen. Der JSON-Modus ist eine strengere Variante, die valide JSON-Ausgabe erzwingt, oft mit API-Garantien des Modellanbieters.' },
            { q: 'Unterstützen alle LLMs den JSON-Modus?', a: 'Nein. OpenAI GPT-4o, Anthropic Claude 3.5+ und Google Gemini unterstützen nativen JSON-Modus. Ältere Modelle und Open-Source-LLMs benötigen möglicherweise Prompt-basierte Erzwingung, z. B. das Angeben des Schemas in den Anweisungen und das Bereitstellen von Beispielen.' },
            { q: 'Wie erzwinge ich JSON-only-Antworten ohne nativen JSON-Modus?', a: 'Prompt Engineering nutzen: (1) "Ausgabe nur valides JSON" explizit angeben, (2) detailliertes Schema und Beispiele bereitstellen, (3) Anweisung "Keinen Text außerhalb des JSON einfügen" hinzufügen. Erfolgsraten verbessern sich deutlich mit guten Beispielen.' },
            { q: 'Was passiert, wenn das Modell ungültiges JSON zurückgibt?', a: 'JSON mit einem Parser auf der eigenen Seite validieren. Bei Fehler entweder die Anfrage mit klarerem Prompt wiederholen oder auf manuelle Extraktion zurückfallen. Mit gutem Prompt Engineering und Schema-Beispielen sind Fehlerquoten gering (typisch <5% bei gut gestalteten Prompts).' },
            { q: 'Kann ich strukturierte Ausgabe für komplexe Dokumente verwenden?', a: 'Ja. Komplexe Aufgaben in Schritte aufteilen: zuerst Schlüsselfelder extrahieren, dann validieren, dann optional in nachgelagerte Systeme transformieren. Große Dokumente in Chunks aufzuteilen verbessert oft die Zuverlässigkeit.' },
            { q: 'Wie gehe ich mit fehlenden oder mehrdeutigen Daten in strukturierten Ausgaben um?', a: 'Fallback-Verhalten im Schema definieren: leere Strings, Null-Werte oder einen speziellen Marker wie "unbekannt" verwenden. Explizite Anweisung hinzufügen: "Wenn ein Wert mehrdeutig oder fehlend ist, null statt raten verwenden."' },
            { q: 'Ist der JSON-Modus von Compliance-Anforderungen (DSGVO, CCPA) betroffen?', a: 'Der JSON-Modus selbst ist neutral. Strukturierte Ausgabe ist jedoch vorteilhaft für die Compliance, da sie die systematische Nachverfolgung extrahierter, transformierter und protokollierter Daten ermöglicht — entscheidend für Audit-Trails und regulatorische Berichterstattung.' },
            { q: 'Wie teste ich JSON-Modus-Prompts?', a: 'Mit diversen Eingaben testen: Grenzfälle, mehrdeutige Daten und reale Beispiele. Ausgabe parsen und prüfen: (1) valides JSON, (2) korrektes Schema, (3) erwartete Datentypen. Ziel: ≥95% Erfolgsrate vor dem Produktiveinsatz.' },
            { q: 'Kann ich strukturierte Ausgabe-Schemas für verschiedene Modelle wiederverwenden?', a: 'Ja, mit Vorsicht. Schema einmal definieren und über Modelle testen — bei älteren oder kleineren Modellen können Prompt-Anpassungen nötig sein. Modellspezifische Unterschiede und Erfolgsraten dokumentieren.' },
            { q: 'Welche Performanzkosten hat der JSON-Modus?', a: 'Minimal. Nativer JSON-Modus (OpenAI, Anthropic, Google) hat vernachlässigbare Performanzauswirkungen. Prompt-basierte Erzwingung kann durch Schema-Erklärung 5–10% mehr Latenz verursachen, aber die Sicherheitsgewinne rechtfertigen das.' },
          ],
        },
        sources: {
          title: 'Quellen',
          items: [
            '[OpenAI JSON-Modus-Dokumentation](https://platform.openai.com/docs/guides/json-mode) — Offizieller Leitfaden zum JSON-Modus in der OpenAI API.',
            '[Anthropic Structured Output Guide](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — Anthropics Dokumentation für strukturierte Ausgabe in Claude.',
            '[Google Gemini API – Structured Output](https://ai.google.dev/gemini-2/docs/structured-output) — Googles nativer JSON-Modus-Support in Gemini 2.0.',
            '[JSON Schema Specification](https://json-schema.org/specification.html) — Standardspezifikation für JSON-Schema-Design und -Validierung.',
          ],
        },
      },
    },
    fr: { theme: 'Techniques', title: 'Sortie structuree dans les LLM : mode JSON, exemples et utilisation', intro: 'La sortie structuree et le mode JSON transforment les resultats libres des modeles linguistiques en formats fiables et lisibles par machine qui s\'integrent parfaitement aux bases de donnees, aux API et aux workflows d\'automatisation. Apprenez a concevoir des prompts qui forcent une sortie JSON valide, comparez le mode JSON avec les appels de fonction et les prompts de schema, et decidez quelle methode convient a votre cas d\'usage.', publishDate: '2026-03-26', dateModified: '2026-04-05', readTime: '10 min de lecture', seoTitle: 'Sortie structuree et mode JSON dans les LLM : utilisation, exemples et comparaison', metaDescription: 'Apprenez quand utiliser la sortie structuree, le mode JSON ou les appels de fonction. Comparez la conformite JSON par modele, voyez des exemples reels et maitrisez la conception de schemas pour les API.', educationalLevel: 'Intermediate', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Sortie structuree et mode JSON : obtenir des donnees utilisables de l\'IA', description: 'Maitrisez la sortie structuree et le mode JSON dans les prompts. Apprenez a concevoir des schemas, a imposer un JSON valide, a comparer la conformite des modeles et a eviter les erreurs courantes dans les systemes de production.', datePublished: '2026-03-26', dateModified: '2026-04-05', keywords: ['sortie structuree', 'mode JSON', 'ingenierie des prompts', 'conception de schemas', 'sortie lisible par machine', 'validation JSON', 'modeles de prompts'], author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } }, howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Comment utiliser la sortie structuree et le mode JSON', step: [ { '@type': 'HowToStep', position: 1, name: 'Choisir le mode JSON', text: 'Pour l\'extraction de donnees et les sorties lisibles par machine, utilisez le mode JSON disponible dans OpenAI GPT-4o, Anthropic Claude, Google Gemini et autres fournisseurs majeurs. Cela garantit que le modele renvoie un JSON valide, pas du texte.' }, { '@type': 'HowToStep', position: 2, name: 'Definir votre schema', text: 'Definissez explicitement votre schema JSON, y compris les noms de champs, les types de donnees et les contraintes.' }, { '@type': 'HowToStep', position: 3, name: 'Fournir un exemple de sortie', text: 'Fournissez un exemple de la structure JSON exacte que vous voulez. Les exemples sont plus puissants que les descriptions de schemas seules.' }, { '@type': 'HowToStep', position: 4, name: 'Gerer les structures imbriquees', text: 'Pour les objets dans les tableaux, soyez explicite sur la hierarchie. Fournissez un exemple JSON complet.' }, { '@type': 'HowToStep', position: 5, name: 'Valider la sortie JSON', text: 'Validez la sortie JSON avant la use en aval. Analysez et verifiez le JSON valide, le schema correct, et les types de donnees attendus.' } ] }, faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: 'Quelle est la difference entre la sortie structuree et le mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'La sortie structuree est la categorie plus large de demander aux modeles de renvoyer des donnees dans un format fixe. Le mode JSON est une variante plus stricte qui impose une sortie JSON valide.' } }, { '@type': 'Question', name: 'Tous les LLM supportent-ils le mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. OpenAI GPT-4o, Anthropic Claude 3.5+ et Google Gemini supportent le mode JSON natif. Les modeles plus anciens et les LLM open-source peuvent necessiter l\'application du mode JSON basee sur les prompts.' } }, { '@type': 'Question', name: 'Comment imposer des reponses JSON uniquement sans mode JSON natif ?', acceptedAnswer: { '@type': 'Answer', text: 'Utilisez l\'ingenierie des prompts : declarez explicitement "sortie uniquement du JSON valide", fournissez un schema detaille et des exemples.' } }, { '@type': 'Question', name: 'Que se passe-t-il si le modele renvoie un JSON invalide ?', acceptedAnswer: { '@type': 'Answer', text: 'Validez le JSON de votre cote avec un analyseur. En cas d\'echec, reessayez la demande avec un prompt plus clair ou revenez a l\'extraction manuelle.' } }, { '@type': 'Question', name: 'Puis-je utiliser la sortie structuree pour des documents complexes ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Divisez les taches complexes en etapes : d\'abord extraire les champs cles, puis valider, puis optionnellement transformer dans les systemes en aval.' } }, { '@type': 'Question', name: 'Comment gerer les donnees manquantes ou ambigues dans les sorties structurees ?', acceptedAnswer: { '@type': 'Answer', text: 'Definissez le comportement de secours dans votre schema : utilisez des chaines vides, des valeurs null ou un marqueur special comme "inconnu".' } }, { '@type': 'Question', name: 'Le mode JSON est-il affecte par la conformite reglementaire (RGPD, CCPA) ?', acceptedAnswer: { '@type': 'Answer', text: 'Le mode JSON lui-meme est neutre. Cependant, la sortie structuree est benefique pour la conformite car elle vous permet de suivre systematiquement les donnees extraites.' } }, { '@type': 'Question', name: 'Comment tester les prompts en mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'Testez avec des entrees diversifiees : cas limites, donnees ambigues et exemples du monde reel. Analysez la sortie et verifiez le JSON valide.' } }, { '@type': 'Question', name: 'Puis-je reutiliser les schemas de sortie structuree sur differents modeles ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, avec prudence. Definissez votre schema une fois et testez-le sur les modeles, vous devrez peut-etre ajuster les prompts pour les modeles plus anciens.' } }, { '@type': 'Question', name: 'Quel est le cout de performance du mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'Minimal. Le mode JSON natif (OpenAI, Anthropic, Google) a un impact de performance negligeable.' } } ] }, sections: { definition: { content: [ '**La sortie structuree est une methode de forcer les modeles linguistiques a renvoyer les donnees dans un format predefini (par exemple JSON).** Elle differe du texte libre en imposant des noms de champs stricts, des types de donnees et des schemas que les outils en aval peuvent traiter sans nettoyage manuel.' ] }, exampleBlock: { content: [ 'Voici un exemple simple de sortie structuree au format JSON :' ], codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}', codeLanguage: 'json' }, keyTakeaways: { isTldr: true, content: [ '**Points cles : ce que vous devez savoir sur la sortie structuree :**' ], items: [ '**Ameliore la fiabilite** : la sortie structuree reduit les erreurs d\'analyse en imposant des schemas stricts.', '**Active l\'automatisation** : le mode JSON declenche la logique conditionnelle basee sur les champs extraits.', '**Pret pour l\'API** : integration directe aux bases de donnees, CRM et systemes metier sans reformatage.', '**Dependant du modele** : le mode JSON natif est disponible dans GPT-4o, Claude, Gemini.', '**Meilleur pour les taches deterministes** : API, automatisation, pipelines de donnees.', '**Necessite la validation** : analysez et validez toujours la sortie JSON avant utilisation en aval.', '**Echelle entre les modeles** : definissez le schema une fois ; testez et documentez les differences.' ] }, whatIsStructured: { title: 'Qu\'est-ce que la sortie structuree', content: [ '**La sortie structuree signifie demander au modele de suivre un schema fixe.** Au lieu d\'un paragraphe libre, vous definissez les champs, les types et les valeurs autorisees.', 'La sortie structuree peut prendre plusieurs formes :' ], items: [ 'Listes a puces avec un nombre fixe d\'elements.', 'Tableaux Markdown avec colonnes specifiques.', 'Paires cle-valeur pour les attributs simples.', 'Objets ou tableaux JSON complets avec des cles predefinies.' ] }, structuredGoal: { content: [ 'L\'objectif est toujours le meme : transformer une description floue en une forme previsible.' ] }, whatIsJSON: { title: 'Qu\'est-ce que le mode JSON', content: [ '**Le mode JSON est une variante plus stricte de la sortie structuree ou le modele est invite a renvoyer uniquement du JSON valide.** En mode JSON, tout ce que le modele produit devrait etre analysable en JSON.', 'Un schema JSON typique pourrait ressembler a ceci :' ], codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}', codeLanguage: 'json' }, jsonModeApproach: { content: [ 'Vous refletez ce schema dans votre prompt, puis demandez au modele de le remplir. Certaines plates-formes fournissent egalement des parametres speciaux ou des API.' ] }, whyItMatterns: { title: 'Pourquoi la sortie structuree et le mode JSON sont importants', content: [ '**La sortie structuree et le mode JSON sont importants parce qu\'ils vous permettent de transformer les modeles linguistiques en composants de systemes plus larges.** Quand la sortie est previsible, vous pouvez :' ], items: [ 'Alimenter les resultats directement dans les bases de donnees, CRM ou outils d\'analyse.', 'Declencheur des automations basees sur des champs comme "priorite", "statut" ou "confiance".', 'Creer des interfaces utilisateur qui affichent les resultats du modele.' ] }, jsonVsFunctionCalling: { title: 'Mode JSON vs Appels de fonction vs Prompts de schema', content: [ '**Trois methodes existent pour obtenir une sortie structuree des LLM.**' ], items: [ '**Mode JSON** : le modele ne produit que du JSON valide.', '**Appels de fonction** : le modele selectionne quelle fonction appeler et fournit des arguments en JSON.', '**Prompts de schema** : instructions explicites + exemples.' ] }, example: { title: 'Exemple : texte libre vs JSON structure', content: [ '**La difference devient claire quand vous comparez un prompt texte libre avec un prompt JSON structure.** Ici, nous classons et resumons un email client.', '**[Mauvais prompt]**', '"Lisez cet email client et resumez ce qu\'ils veulent."', '**[Bon prompt – Mode JSON]**', '"Vous etes un assistant de support client."', 'La version "bonne" definit le schema, les valeurs valides et l\'exigence JSON uniquement.' ] }, bestPractices: { title: 'Meilleures pratiques', content: [ '**Pour obtenir des sorties structurees fiables, vous devez etre explicite et strict dans vos prompts.**' ], items: [ 'Montrez le schema exact que vous attendez.', 'Declarez clairement que rien d\'autre que le JSON ne doit etre retourne.', 'Utilisez des noms de cles courts et sans ambiguite.', 'Ajoutez des exemples de sorties valides quand la tache est complexe.', 'Pour les structures imbriquees, construisez-les etape par etape.' ] }, modelComparison: { title: 'Comparaison des modeles : conformite JSON par fournisseur', content: [ '**Differents modeles ont differents niveaux de support du mode JSON natif.** En avril 2026, voici comment se classent les principaux fournisseurs :' ], columns: [ 'Modele', 'Mode JSON natif', 'Conformite prompt seul', 'Notes' ], rows: [ { 'Modele': 'OpenAI GPT-4o', 'Mode JSON natif': 'Oui (applique)', 'Conformite prompt seul': 'Non necessaire', 'Notes': 'Standard de l\'industrie.' }, { 'Modele': 'Anthropic Claude 3.5 Sonnet', 'Mode JSON natif': 'Oui (applique)', 'Conformite prompt seul': 'Non necessaire', 'Notes': 'Conformite JSON excellente.' }, { 'Modele': 'Google Gemini 2.0', 'Mode JSON natif': 'Oui (applique)', 'Conformite prompt seul': 'Non necessaire', 'Notes': 'Support JSON natif.' }, { 'Modele': 'Meta Llama 3.1 (70B)', 'Mode JSON natif': 'Partiel', 'Conformite prompt seul': 'Fortement recommande', 'Notes': 'Open-source.' }, { 'Modele': 'Mistral Large', 'Mode JSON natif': 'Partiel', 'Conformite prompt seul': 'Recommande', 'Notes': 'Bon comportement JSON.' }, { 'Modele': 'Anciens GPT-3.5, Claude 2', 'Mode JSON natif': 'Non', 'Conformite prompt seul': 'Requis', 'Notes': 'Necessite une ingenierie forte.' }, { 'Modele': 'Petits modeles open-source (<13B)', 'Mode JSON natif': 'Non', 'Conformite prompt seul': 'Requis avec exemples', 'Notes': 'Necessitent des schemas detailles.' } ] }, relatedReading: { title: 'Lectures connexes', items: [ '[Prompts contraints](/prompt-engineering/constrained-prompting?lang=fr) — imposer des formats.', '[Framework SPECS](/prompt-engineering/specs-framework?lang=fr) — prompts axes sur la specification.', '[RAG explique](/prompt-engineering/rag-explained?lang=fr) — combinez l\'extraction avec la recuperation.', '[Chaine de pensee](/prompt-engineering/chain-of-thought?lang=fr) — raisonnez etape par etape.', '[Modeles de prompts](/prompt-engineering/prompt-templates?lang=fr) — modeles reutilisables.', '[Zero-Shot vs Few-Shot](/prompt-engineering/zero-shot-vs-few-shot?lang=fr) — quand les exemples ameliorent.' ] }, faq: { title: 'Questions frequemment posees', faqs: [ { q: 'Quelle est la difference entre la sortie structuree et le mode JSON ?', a: 'La sortie structuree est la categorie plus large. Le mode JSON est une variante plus stricte.' }, { q: 'Tous les LLM supportent-ils le mode JSON ?', a: 'Non. OpenAI GPT-4o, Anthropic Claude 3.5+ et Google Gemini supportent le mode JSON natif.' }, { q: 'Comment imposer les reponses JSON uniquement ?', a: 'Utilisez l\'ingenierie des prompts : declarez explicitement "sortie uniquement du JSON valide".' }, { q: 'Que se passe-t-il si le modele renvoie un JSON invalide ?', a: 'Validez le JSON de votre cote. En cas d\'echec, reessayez ou revenez a l\'extraction manuelle.' }, { q: 'Puis-je utiliser la sortie structuree pour des documents complexes ?', a: 'Oui. Divisez les taches complexes en etapes.' }, { q: 'Comment gerer les donnees manquantes ?', a: 'Definissez le comportement de secours : utilisez des chaines vides, null ou un marqueur special.' }, { q: 'Le mode JSON est-il affecte par la conformite RGPD ?', a: 'Le mode JSON lui-meme est neutre. Mais la sortie structuree aide a la conformite.' }, { q: 'Comment tester les prompts en mode JSON ?', a: 'Testez avec des entrees diversifiees : cas limites, donnees ambigues et exemples reels.' }, { q: 'Puis-je reutiliser les schemas sur differents modeles ?', a: 'Oui, avec prudence. Testez-le sur les modeles et documentez les differences.' }, { q: 'Quel est le cout de performance du mode JSON ?', a: 'Minimal. Le mode JSON natif a un impact negligeable.' } ] }, sources: { title: 'Sources', items: [ '[Documentation mode JSON OpenAI](https://platform.openai.com/docs/guides/json-mode) — Guide officiel.', '[Guide Anthropic](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — Documentation.', '[API Google Gemini](https://ai.google.dev/gemini-2/docs/structured-output) — Support JSON natif.', '[Specification JSON Schema](https://json-schema.org/specification.html) — Standard de conception.' ] } } },
    ja: { theme: 'テクニック', title: 'LLMの構造化出力：JSONモード、サンプル、使用タイミング', intro: '構造化出力とJSONモードは、言語モデルの出力を信頼性の高い機械可読フォーマットに変換し、データベース、API、自動化ワークフローにシームレスに統合できます。有効なJSONを強制するプロンプトの設計方法、JSONモード対関数呼び出し対スキーマプロンプティングの比較、およびユースケースに適した方法の選択方法を学びます。', publishDate: '2026-03-26', dateModified: '2026-04-05', readTime: '10分読む', seoTitle: 'LLMの構造化出力とJSONモード：使用時期、サンプル、比較', metaDescription: '構造化出力、JSONモード、関数呼び出しをいつ使用するかを学びます。モデル別のJSON準拠を比較し、実例を確認し、APIのスキーマ設計をマスターしてください。', educationalLevel: 'Intermediate', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '構造化出力とJSONモード：AIから使用可能なデータを取得', description: 'プロンプトで構造化出力とJSONモードをマスターします。スキーマ設計、有効なJSONの強制、モデル準拠の比較、および本番システムでの一般的なエラーの回避方法を学びます。', datePublished: '2026-03-26', dateModified: '2026-04-05', keywords: ['構造化出力', 'JSONモード', 'プロンプトエンジニアリング', 'スキーマ設計', '機械可読出力', 'JSON検証', 'プロンプトテンプレート'], author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } }, howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: '構造化出力とJSONモードの使用方法', step: [ { '@type': 'HowToStep', position: 1, name: 'JSONモードを選択', text: 'データ抽出と機械可読出力の場合、OpenAI GPT-4o、Anthropic Claude、Google Geminiおよびその他の主要プロバイダで利用可能なJSONモードを使用します。これにより、モデルが有効なJSONを返すことが保証されます。' }, { '@type': 'HowToStep', position: 2, name: 'スキーマを定義', text: 'JSONスキーマを明示的に定義します。フィールド名、データタイプ、および制約を含めます。' }, { '@type': 'HowToStep', position: 3, name: '出力例を提供', text: '必要なJSON構造の例を提供します。例はスキーマの説明だけより強力です。' }, { '@type': 'HowToStep', position: 4, name: 'ネストされた構造を処理', text: '配列内のオブジェクトの場合、階層に関して明示的にします。完全なJSON例を提供します。' }, { '@type': 'HowToStep', position: 5, name: 'JSON出力を検証', text: 'ダウンストリームシステムで使用する前にJSON出力を検証します。有効なJSON、正しいスキーマ、期待されるデータタイプを確認します。' } ] }, faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: '構造化出力とJSONモードの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '構造化出力はモデルに固定フォーマットでデータを返すよう要求する広いカテゴリです。JSONモードはより厳密なバリアントで、有効なJSON出力を強制します。' } }, { '@type': 'Question', name: 'すべてのLLMがJSONモードをサポートしていますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。OpenAI GPT-4o、Anthropic Claude 3.5+、Google Geminiがネイティブjsonモードをサポートします。古いモデルとオープンソースLLMはプロンプトベースの適用が必要です。' } }, { '@type': 'Question', name: 'ネイティブJSONモードなしでJSON応答のみを強制するにはどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトエンジニアリングを使用します：「有効なJSONのみを出力」を明示的に宣言し、詳細なスキーマと例を提供します。' } }, { '@type': 'Question', name: 'モデルが無効なJSONを返す場合はどうなりますか？', acceptedAnswer: { '@type': 'Answer', text: 'JSONをサイドで検証します。失敗した場合、より明確なプロンプトでリクエストを再試行するか、手動抽出に戻ります。' } }, { '@type': 'Question', name: '複雑なドキュメントに構造化出力を使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。複雑なタスクをステップに分割します：最初に主要フィールドを抽出し、次に検証し、オプションでダウンストリームシステムに変換します。' } }, { '@type': 'Question', name: '構造化出力で欠落しているまたは曖昧なデータを処理するにはどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: 'スキーマでフォールバック動作を定義します：空の文字列、null値、または「不明」などの特別なマーカーを使用します。' } }, { '@type': 'Question', name: 'JSONモードは規制遵守（GDPR、CCPA）の影響を受けますか？', acceptedAnswer: { '@type': 'Answer', text: 'JSONモード自体は中立的です。ただし、構造化出力は、抽出、変換、記録されたデータを体系的に追跡できるため、コンプライアンスに有益です。' } }, { '@type': 'Question', name: 'JSONモードプロンプトをテストするにはどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: '多様な入力でテストします：エッジケース、曖昧なデータ、実世界の例。有効なJSON、正しいスキーマ、予想されるデータタイプを確認します。' } }, { '@type': 'Question', name: 'さまざまなモデル全体で構造化出力スキーマを再利用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、注意深く。スキーマを一度定義し、モデル全体でテストします。古いモデルや小さいモデルのプロンプト調整が必要な場合があります。' } }, { '@type': 'Question', name: 'JSONモードのパフォーマンスコストは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '最小限。ネイティブJSONモード（OpenAI、Anthropic、Google）はパフォーマンスへの影響がわずかです。' } } ] }, sections: { definition: { content: [ '**構造化出力は、言語モデルを強制して、定義済みフォーマット（JSONなど）でデータを返す方法です。** 自由形式のテキストとは異なり、ダウンストリームツールが手動クリーンアップなしで処理できる厳密なフィールド名、データタイプ、スキーマを強制します。' ] }, exampleBlock: { content: [ 'JSON形式での構造化出力の簡単な例を次に示します。' ], codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}', codeLanguage: 'json' }, keyTakeaways: { isTldr: true, content: [ '**重要なポイント：構造化出力について知っておくべきことが：**' ], items: [ '**信頼性の向上** : 構造化出力は、厳密なスキーマを強制することで、パースエラーと手動データクリーンアップを削減します。', '**自動化の有効化** : JSONモードは、抽出されたフィールド（優先度、カテゴリ、緊急度）に基づいて条件付きロジックをトリガーします。', '**API対応** : 再フォーマットなしでデータベース、CRM、ビジネスシステムへの直接統合。', '**モデル依存** : ネイティブJSONモードはGPT-4o、Claude、Geminiで利用可能です。古いモデル/オープンソースモデルはプロンプトエンジニアリングが必要です。', '**決定論的タスクに最適** : API、自動化、データパイプライン。クリエイティブライティングは避けてください。', '**検証が必要** : ダウンストリーム使用前にJSON出力を常に検証および検証してください。', '**モデル全体でスケール** : スキーマを一度定義します。テストし、相違点を文書化します。' ] }, whatIsStructured: { title: '構造化出力とは', content: [ '**構造化出力とは、モデルに固定スキーマ（リスト、テーブル、JSONなど）に従うよう要求することです。** 自由形式の段落の代わりに、フィールド、タイプ、許可された値を定義します。', '構造化出力はいくつかの形式をとることができます：' ], items: [ '固定数のアイテムを含むブレットリスト。', '特定の列を持つMarkdownテーブル。', '単純な属性のキーと値のペア。', '事前定義されたキーを持つ完全なJSONオブジェクトまたは配列。' ] }, structuredGoal: { content: [ '目標は常に同じです：あいまいな説明を予測可能な形に変換することです。' ] }, whatIsJSON: { title: 'JSONモードとは', content: [ '**JSONモードは、モデルが有効なJSONのみを返すよう指示または構成される厳密な構造化出力バリアントです。** JSONモードでは、モデルが出力するすべてが追加のクリーンアップなしでJSONとして解析可能である必要があります。', '典型的なJSONスキーマは次のようになります：' ], codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}', codeLanguage: 'json' }, jsonModeApproach: { content: [ 'このスキーマをプロンプトに反映し、モデルにそれを入力するよう要求します。一部のプラットフォームはJSON のみの応答を強制する特別な設定またはAPIも提供します。' ] }, whyItMatters: { title: '構造化出力とJSONモードが重要な理由', content: [ '**構造化出力とJSONモードが重要な理由は、言語モデルを単なるチャットアシスタントではなく、より大きなシステムのコンポーネントに変換できるためです。** 出力が予測可能な場合、以下を実行できます：' ], items: [ 'データベース、CRM、分析ツールに結果を直接供給します。', 'モデル出力フィールド（優先度、ステータス、信頼度）に基づいてアクションをトリガーします。', 'カード、テーブル、ダッシュボードにモデル結果を表示するUIを構築します。' ] }, jsonVsFunctionCalling: { title: 'JSONモード対関数呼び出し対スキーマプロンプティング', content: [ '**LLMから構造化出力を取得するための3つのメソッドが存在します。それぞれ異なる強さと弱さを持っています。**' ], items: [ '**JSONモード** : モデルは有効なJSONのみを出力します。最適用途：データ抽出、分類、要約。', '**関数呼び出し** : モデルは呼び出す関数を選択し、JSONで引数を提供します。最適用途：API統合、ツール使用、エージェントワークフロー。', '**スキーマプロンプティング** : スキーマに従うようモデルに要求する明示的な指示と例。最適用途：柔軟性、オープンソースモデル、カスタムフォーマット。' ] }, example: { title: '例：自由テキスト対構造化JSON', content: [ '**同じタスクに対して自由形式のプロンプトと構造化JSONプロンプトを比較すると、違いが明確になります。** ここでは、顧客メールを分類および要約します。', '**[悪いプロンプト]**', '"この顧客メールを読んで、彼らが欲しいものを要約してください。"', '**[良いプロンプト - JSONモード]**', '"あなたはカスタマーサポートアシスタントです。"', '「良い」バージョンはスキーマ、有効な値、およびJSONのみの要件を定義します。' ] }, bestPractices: { title: '構造化出力とJSONモードのベストプラクティス', content: [ '**信頼性の高い構造化出力を取得するには、プロンプトで明示的、一貫性があり、厳密である必要があります。**' ], items: [ '予期するスキーマを正確に表示します。' , '列挙の許可値を含めます。', 'JSON（または構造）のみを返す必要があることを明確に宣言してください。', '短くて曖昧でないキー名を使用します。', 'タスクが複雑または機密の場合は、有効な出力の例を追加します。', 'ネストされた構造については、段階的に構築し、実際の入力でテストしてください。' ] }, modelComparison: { title: 'モデル比較：プロバイダー別のJSON準拠', content: [ '**異なるモデルは、ネイティブJSONモードサポートのレベルが異なります。** 2026年4月現在、主要プロバイダーがどのようにランク付けされているかを次に示します：' ], columns: [ 'モデル', 'ネイティブJSONモード', 'プロンプトのみ準拠', '備考' ], rows: [ { 'モデル': 'OpenAI GPT-4o', 'ネイティブJSONモード': 'はい（実施）', 'プロンプトのみ準拠': '不要', '備考': 'JSONモードの業界標準です。' }, { 'モデル': 'Anthropic Claude 3.5 Sonnet', 'ネイティブJSONモード': 'はい（実施）', 'プロンプトのみ準拠': '不要', '備考': 'JSON準拠が優れています。' }, { 'モデル': 'Google Gemini 2.0', 'ネイティブJSONモード': 'はい（実施）', 'プロンプトのみ準拠': '不要', '備考': 'ネイティブJSONサポート。' }, { 'モデル': 'Meta Llama 3.1（70B）', 'ネイティブJSONモード': '部分的', 'プロンプトのみ準拠': '強く推奨', '備考': 'オープンソース。' }, { 'モデル': 'Mistral Large', 'ネイティブJSONモード': '部分的', 'プロンプトのみ準拠': '推奨', '備考': '良好なJSONの動作。' }, { 'モデル': '古いGPT-3.5、Claude 2', 'ネイティブJSONモード': 'いいえ', 'プロンプトのみ準拠': '必須', '備考': '強いエンジニアリングが必要です。' }, { 'モデル': '小さいオープンソースモデル（<13B）', 'ネイティブJSONモード': 'いいえ', 'プロンプトのみ準拠': '例に必須', '備考': '詳細なスキーマが必要です。' } ] }, relatedReading: { title: '関連読み物', items: [ '[制約付きプロンプト](/prompt-engineering/constrained-prompting?lang=ja) — 特定の出力フォーマットを強制します。', '[SPECSフレームワーク](/prompt-engineering/specs-framework?lang=ja) — 仕様重視のプロンプト。', '[RAG説明](/prompt-engineering/rag-explained?lang=ja) — 構造化抽出とデータ取得を組み合わせます。', '[思考の連鎖](/prompt-engineering/chain-of-thought?lang=ja) — ステップバイステップで理由を述べます。', '[プロンプトテンプレート](/prompt-engineering/prompt-templates?lang=ja) — 再利用可能なテンプレート。', '[ゼロショット対フューショット](/prompt-engineering/zero-shot-vs-few-shot?lang=ja) — 例がJSON準拠を改善するとき。' ] }, faq: { title: 'よくある質問', faqs: [ { q: '構造化出力とJSONモードの違いは何ですか？', a: '構造化出力はより広いカテゴリです。JSONモードはより厳密なバリアントです。' }, { q: 'すべてのLLMがJSONモードをサポートしていますか？', a: 'いいえ。OpenAI GPT-4o、Anthropic Claude 3.5+、Google Geminiがサポートしています。' }, { q: 'ネイティブJSONモードなしでJSON応答のみを強制するにはどうすればよいですか？', a: 'プロンプトエンジニアリング：「有効なJSONのみ」を宣言し、スキーマと例を提供します。' }, { q: 'モデルが無効なJSONを返す場合はどうなりますか？', a: 'JSONをサイドで検証します。失敗した場合は再試行するか、手動で戻ります。' }, { q: '複雑なドキュメントに構造化出力を使用できますか？', a: 'はい。複雑なタスクをステップに分割します。' }, { q: '欠落しているまたは曖昧なデータを処理するにはどうすればよいですか？', a: 'スキーマでフォールバック動作を定義します。' }, { q: 'JSONモードは規制遵守に影響を受けますか？', a: 'JSONモード自体は中立的です。しかし構造化出力はコンプライアンスに有益です。' }, { q: 'JSONモードプロンプトをテストするにはどうすればよいですか？', a: '多様な入力でテストします。本番前に95%以上の成功率を目指します。' }, { q: 'さまざまなモデル全体でスキーマを再利用できますか？', a: 'はい、注意深く。スキーマを定義してテストします。' }, { q: 'JSONモードのパフォーマンスコストは何ですか？', a: '最小限。ネイティブJSONモードはわずかな影響です。' } ] }, sources: { title: 'ソース', items: [ '[OpenAI JSONモードドキュメント](https://platform.openai.com/docs/guides/json-mode) — 公式ガイド。', '[Anthropicガイド](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — ドキュメント。', '[Google Gemini API](https://ai.google.dev/gemini-2/docs/structured-output) — ネイティブJSONサポート。', '[JSON Schemaスペック](https://json-schema.org/specification.html) — 標準仕様。' ] } } },
    zh: { theme: '技术', title: 'LLM中的结构化输出：JSON模式、示例及使用时机', intro: '结构化输出和JSON模式将语言模型的输出转变为可靠的机器可读格式，可以无缝集成到数据库、API和自动化工作流中。学习如何设计强制有效JSON输出的提示词，比较JSON模式与函数调用与架构提示词，并确定哪种方法适合您的用例。', publishDate: '2026-03-26', dateModified: '2026-04-05', readTime: '10分钟阅读', seoTitle: 'LLM中的结构化输出和JSON模式：何时使用、示例和比较', metaDescription: '学习何时使用结构化输出、JSON模式或函数调用。按模型比较JSON合规性，查看真实示例，掌握API的架构设计。', educationalLevel: 'Intermediate', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '结构化输出和JSON模式：从AI获取可用数据', description: '掌握提示词中的结构化输出和JSON模式。学习架构设计、强制有效JSON、比较模型合规性以及避免生产系统中的常见错误。', datePublished: '2026-03-26', dateModified: '2026-04-05', keywords: ['结构化输出', 'JSON模式', '提示词工程', '架构设计', '机器可读输出', 'JSON验证', '提示词模板'], author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } }, howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: '如何使用结构化输出和JSON模式', step: [ { '@type': 'HowToStep', position: 1, name: '选择JSON模式', text: '对于数据提取和机器可读输出，请使用OpenAI GPT-4o、Anthropic Claude、Google Gemini及其他主要提供商提供的JSON模式。这可确保模型返回有效的JSON，而不是文本。' }, { '@type': 'HowToStep', position: 2, name: '定义架构', text: '显式定义JSON架构。包括字段名称、数据类型和约束。' }, { '@type': 'HowToStep', position: 3, name: '提供输出示例', text: '提供您想要的确切JSON结构的示例。示例比架构描述本身更强大。' }, { '@type': 'HowToStep', position: 4, name: '处理嵌套结构', text: '对于数组中的对象，明确说明层次结构。提供完整的JSON示例。' }, { '@type': 'HowToStep', position: 5, name: '验证JSON输出', text: '在下游使用前验证JSON输出。检查有效的JSON、正确的架构和预期的数据类型。' } ] }, faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: '结构化输出和JSON模式之间有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '结构化输出是要求模型以固定格式返回数据的更广泛类别。JSON模式是更严格的变体，强制有效的JSON输出。' } }, { '@type': 'Question', name: '所有LLM都支持JSON模式吗？', acceptedAnswer: { '@type': 'Answer', text: '否。OpenAI GPT-4o、Anthropic Claude 3.5+和Google Gemini支持原生JSON模式。较旧的模型和开源LLM可能需要基于提示词的应用。' } }, { '@type': 'Question', name: '在没有原生JSON模式的情况下如何强制仅JSON响应？', acceptedAnswer: { '@type': 'Answer', text: '使用提示词工程：明确声明"仅输出有效的JSON"，提供详细的架构和示例。' } }, { '@type': 'Question', name: '如果模型返回无效的JSON会发生什么？', acceptedAnswer: { '@type': 'Answer', text: '在您的一方验证JSON。如果失败，请用更清晰的提示词重试请求或回到手动提取。' } }, { '@type': 'Question', name: '我可以将结构化输出用于复杂的文档吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。将复杂任务分解成步骤：首先提取关键字段，然后验证，然后可选地转换为下游系统。' } }, { '@type': 'Question', name: '我如何处理结构化输出中缺失或模糊的数据？', acceptedAnswer: { '@type': 'Answer', text: '在架构中定义后备行为：使用空字符串、null值或特殊标记（如"未知"）。' } }, { '@type': 'Question', name: 'JSON模式是否受到监管合规性（GDPR、CCPA）的影响？', acceptedAnswer: { '@type': 'Answer', text: 'JSON模式本身是中立的。但是，结构化输出对合规性有益，因为它可以系统地跟踪提取、转换和记录的数据。' } }, { '@type': 'Question', name: '我如何测试JSON模式提示词？', acceptedAnswer: { '@type': 'Answer', text: '使用不同的输入进行测试：边界案例、模糊数据和真实示例。验证有效的JSON、正确的架构和预期的数据类型。' } }, { '@type': 'Question', name: '我可以在不同的模型中重复使用结构化输出架构吗？', acceptedAnswer: { '@type': 'Answer', text: '可以，但要谨慎。定义一次架构，在模型中测试。您可能需要为较旧或较小的模型调整提示词。' } }, { '@type': 'Question', name: 'JSON模式的性能成本是什么？', acceptedAnswer: { '@type': 'Answer', text: '最少。原生JSON模式（OpenAI、Anthropic、Google）的性能影响可以忽略不计。' } } ] }, sections: { definition: { content: [ '**结构化输出是强制语言模型以预定义格式（如JSON）返回数据的一种方法。** 它不同于自由形式文本，在于它强制严格的字段名称、数据类型和架构，下游工具可以毫不费力地处理。' ] }, exampleBlock: { content: [ '以下是JSON格式的结构化输出的简单示例：' ], codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}', codeLanguage: 'json' }, keyTakeaways: { isTldr: true, content: [ '**关键点：关于结构化输出您需要了解的内容：**' ], items: [ '**提高可靠性** : 结构化输出通过强制严格的架构来减少解析错误和手动数据清理。', '**启用自动化** : JSON模式基于提取的字段（优先级、类别、紧急性）触发条件逻辑。', '**API就绪** : 直接集成到数据库、CRM和业务系统，无需重新格式化。', '**取决于模型** : 原生JSON模式在GPT-4o、Claude、Gemini中可用。旧型号/开源模式需要提示词工程。', '**最适合确定性任务** : API、自动化、数据管道。避免创意写作。', '**需要验证** : 始终在下游使用前验证和检查JSON输出。', '**跨模型扩展** : 定义一次架构；测试和记录差异。' ] }, whatIsStructured: { title: '什么是结构化输出', content: [ '**结构化输出意味着要求模型遵循固定的架构，例如列表、表格或JSON。** 而不是自由形式的段落，您定义字段、类型和允许的值。', '结构化输出可以采用多种形式：' ], items: [ '具有固定项数的项目符号列表。', '具有特定列的Markdown表格。', '简单属性的键值对。', '具有预定义键的完整JSON对象或数组。' ] }, structuredGoal: { content: [ '目标始终是相同的：将模糊的描述转换为可预测的形式。' ] }, whatIsJSON: { title: '什么是JSON模式', content: [ '**JSON模式是结构化输出的更严格变体，其中模型被指示或配置为仅返回有效的JSON。** 在JSON模式中，模型输出的所有内容都应该可以解析为JSON而无需额外的清理。', '典型的JSON架构可能如下所示：' ], codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}', codeLanguage: 'json' }, jsonModeApproach: { content: [ '您在提示词中反映该架构，然后要求模型填充它。某些平台也提供强制仅JSON响应的特殊设置或API。' ] }, whyItMatters: { title: '为什么结构化输出和JSON模式很重要', content: [ '**结构化输出和JSON模式很重要，因为它们使您能够将语言模型转变为更大系统的组件，而不仅仅是聊天助手。** 当输出是可预测的时，您可以：' ], items: [ '直接将结果提供给数据库、CRM或分析工具。', '基于模型输出字段（优先级、状态、信心）触发自动化。', '构建显示卡片、表格或仪表板中模型结果的用户界面。' ] }, jsonVsFunctionCalling: { title: 'JSON模式与函数调用与架构提示词', content: [ '**存在三种从LLM获取结构化输出的方法。每种都有不同的优缺点。**' ], items: [ '**JSON模式** : 模型仅输出有效的JSON。最佳用途：数据提取、分类、摘要。', '**函数调用** : 模型选择要调用的函数并以JSON提供参数。最佳用途：API集成、工具使用、代理工作流。', '**架构提示词** : 显式指令+要求模型遵循架构的示例。最佳用途：灵活性、开源模型、自定义格式。' ] }, example: { title: '示例：自由文本与结构化JSON', content: [ '**当您比较免费文本提示词和结构化JSON提示词完成相同任务时，差异变得明显。** 在这里，我们对客户电子邮件进行分类和汇总。', '**[错误的提示词]**', '"阅读此客户电子邮件并总结他们想要什么。"', '**[正确的提示词 - JSON模式]**', '"您是一名客户支持助理。"', '"正确"版本定义架构、有效值和仅JSON要求。' ] }, bestPractices: { title: '结构化输出和JSON模式的最佳做法', content: [ '**要获得可靠的结构化输出，您在提示词中需要明确、一致和严格。**' ], items: [ '显示您期望的确切架构。', '声明仅应返回JSON或结构。', '使用简短、明确的键名称。', '当任务复杂或敏感时添加有效输出的示例。', '对于嵌套结构，逐步构建并使用真实输入进行测试。' ] }, modelComparison: { title: '模型比较：按提供商的JSON合规性', content: [ '**不同的模型对原生JSON模式支持的级别不同。** 截至2026年4月，以下是主要提供商的排名：' ], columns: [ '模型', '原生JSON模式', '仅提示词合规', '备注' ], rows: [ { '模型': 'OpenAI GPT-4o', '原生JSON模式': '是（强制）', '仅提示词合规': '不需要', '备注': 'JSON模式的行业标准。' }, { '模型': 'Anthropic Claude 3.5 Sonnet', '原生JSON模式': '是（强制）', '仅提示词合规': '不需要', '备注': 'JSON合规性优秀。' }, { '模型': 'Google Gemini 2.0', '原生JSON模式': '是（强制）', '仅提示词合规': '不需要', '备注': '原生JSON支持。' }, { '模型': 'Meta Llama 3.1（70B）', '原生JSON模式': '部分', '仅提示词合规': '强烈推荐', '备注': '开源。' }, { '模型': 'Mistral Large', '原生JSON模式': '部分', '仅提示词合规': '推荐', '备注': 'JSON行为良好。' }, { '模型': '旧GPT-3.5、Claude 2', '原生JSON模式': '否', '仅提示词合规': '必需', '备注': '需要强大的工程。' }, { '模型': '小型开源模型（<13B）', '原生JSON模式': '否', '仅提示词合规': '示例需要', '备注': '需要详细的架构。' } ] }, relatedReading: { title: '相关阅读', items: [ '[约束提示词](/prompt-engineering/constrained-prompting?lang=zh) — 强制特定的输出格式。', '[SPECS框架](/prompt-engineering/specs-framework?lang=zh) — 规范专注的提示词。', '[RAG说明](/prompt-engineering/rag-explained?lang=zh) — 结合结构化提取和数据检索。', '[思维链](/prompt-engineering/chain-of-thought?lang=zh) — 逐步推理。', '[提示词模板](/prompt-engineering/prompt-templates?lang=zh) — 可重复使用的模板。', '[零次对少次](/prompt-engineering/zero-shot-vs-few-shot?lang=zh) — 何时示例改进JSON合规性。' ] }, faq: { title: '常见问题', faqs: [ { q: '结构化输出和JSON模式之间有什么区别？', a: '结构化输出是更广泛的类别。JSON模式是更严格的变体。' }, { q: '所有LLM都支持JSON模式吗？', a: '否。OpenAI GPT-4o、Anthropic Claude 3.5+和Google Gemini支持。' }, { q: '在没有原生JSON模式的情况下如何强制仅JSON响应？', a: '使用提示词工程：明确声明"仅输出有效JSON"。' }, { q: '如果模型返回无效JSON会发生什么？', a: '在您的一方验证。失败时重试或回到手动方法。' }, { q: '我可以将结构化输出用于复杂文档吗？', a: '是的。将复杂任务分解成步骤。' }, { q: '我如何处理缺失或模糊的数据？', a: '在架构中定义后备行为。' }, { q: 'JSON模式是否受监管合规性影响？', a: 'JSON本身是中立的。但结构化输出有益于合规性。' }, { q: '我如何测试JSON模式提示词？', a: '使用不同的输入进行测试。在部署前达到95%的成功率。' }, { q: '我可以跨不同模型重复使用架构吗？', a: '可以，但要谨慎。定义、测试和记录差异。' }, { q: 'JSON模式的性能成本是什么？', a: '最少。原生JSON模式影响可以忽略不计。' } ] }, sources: { title: '来源', items: [ '[OpenAI JSON模式文档](https://platform.openai.com/docs/guides/json-mode) — 官方指南。', '[Anthropic指南](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — 文档。', '[Google Gemini API](https://ai.google.dev/gemini-2/docs/structured-output) — 原生JSON支持。', '[JSON架构规范](https://json-schema.org/specification.html) — 标准规范。' ] } } },
  };
