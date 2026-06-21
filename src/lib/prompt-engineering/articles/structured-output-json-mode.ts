// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: structured-output-json-mode
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
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
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Structured Output' },
          { '@type': 'Thing', name: 'JSON Mode' },
          { '@type': 'Thing', name: 'Prompt Engineering' },
        ],
        'proficiencyLevel': 'Intermediate',
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
              text: 'No. OpenAI GPT-5.5 and Claude support native JSON mode. Older models and open-source LLMs may require prompt-based enforcement (e.g., specifying the schema in instructions and examples).',
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
            '**Model Dependent**: Native JSON mode available in GPT-5.5, Claude, Gemini; older/open-source models need prompt engineering.',
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
            'Use [specification-focused frameworks like SPECS](/prompt-engineering/specs-framework) or RTF with format [constraints](/prompt-engineering/constrained-prompting) to encode schemas directly into prompts.',
          ],
        },
        practicesAddendum: {
          content: [
            'If you still see formatting issues, you can add a simple instruction like "If you are unsure, leave the field as an empty string instead of guessing." Structured output works best when combined with [RAG (Retrieval-Augmented Generation)](/prompt-engineering/rag-explained) for fact-checking extracted data. When the extracted data must stay on private infrastructure, the same JSON-mode patterns plug into an on-premise vector store — see [Local RAG for Business Data](/power-local-llm/local-rag-for-private-business-data) for the GDPR-compliant deployment template.',
          ],
        },
        modelComparison: {
          title: 'Model Comparison: JSON Compliance by Provider',
          content: [
            '**Different models have different levels of native JSON mode support.** As of April 2026, here is how major providers rank:',
          ],
          columns: ['Model', 'Native JSON Mode', 'Prompt-Only Compliance', 'Notes'],
          rows: [
            { 'Model': 'OpenAI GPT-5.5', 'Native JSON Mode': 'Yes (enforced)', 'Prompt-Only Compliance': 'Not needed', 'Notes': 'Industry standard for JSON mode; 99%+ success rate.' },
            { 'Model': 'Anthropic Claude Sonnet 4.6', 'Native JSON Mode': 'Yes (enforced)', 'Prompt-Only Compliance': 'Not needed', 'Notes': 'Excellent JSON compliance; supports complex nested structures.' },
            { 'Model': 'Google Gemini 2.0', 'Native JSON Mode': 'Yes (enforced)', 'Prompt-Only Compliance': 'Not needed', 'Notes': 'Native JSON support; fast inference.' },
            { 'Model': 'Meta Llama 3.3 70B', 'Native JSON Mode': 'Partial', 'Prompt-Only Compliance': 'Highly recommended', 'Notes': 'Open-source; works well with detailed prompts and examples.' },
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
            '**For data extraction and machine-readable outputs, use JSON mode (available in OpenAI GPT-5.5, Anthropic Claude, Google Gemini, and others).** This guarantees the model returns valid JSON, not prose. Example: Extract product info as JSON with keys: name, price, description, rating.',
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
            '[Chain of Thought](/prompt-engineering/chain-of-thought-prompting) — reason step-by-step before returning structured outputs.',
            '[Prompt Templates](/prompt-engineering/prompt-documentation-templates) — reusable patterns for common structured-output tasks.',
            '[Zero-Shot vs Few-Shot](/prompt-engineering/zero-shot-vs-few-shot) — understand when examples (few-shot) improve JSON compliance.',
            '[Prompts for Reliable Structured Data](/prompt-engineering/prompts-for-reliable-structured-data)',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is the difference between structured output and JSON mode?',
              a: 'Structured output is the broader category of asking models to return data in a fixed format (lists, tables, key-value pairs, or JSON). JSON mode is a stricter variant that enforces valid JSON output, often with API-level guarantees from the model provider.',
            },
            {
              q: 'Do all LLMs support JSON mode?',
              a: 'No. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+, and Google Gemini support native JSON mode. Older models and open-source LLMs may require prompt-based enforcement (e.g., specifying the schema in instructions and providing examples).',
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
            '[Google Gemini API – Structured Output](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — Google\'s native JSON mode support in Gemini 2.0.',
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
      seoTitle: 'Strukturierte Ausgabe & JSON-Modus in LLMs: Leitfaden 2026',
      metaDescription: 'Wann strukturierte Ausgabe, JSON-Modus oder Function Calling sinnvoll ist: JSON-Compliance nach Modell, Beispiele und Schema-Design für APIs und Pipelines.',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Strukturierte Ausgabe in LLMs: JSON-Modus, Beispiele und Verwendung',
        description: 'Strukturierte Ausgabe und JSON-Modus für Prompts meistern. Schema-Design, valides JSON erzwingen, Modell-Compliance vergleichen und häufige Fehler in Produktionssystemen vermeiden.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-05',
        keywords: ['Strukturierte Ausgabe', 'JSON-Modus', 'Prompt Engineering', 'Schema-Design', 'Maschinenlesbare Ausgabe', 'JSON-Validierung', 'Prompt-Vorlagen'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
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
          { '@type': 'Question', name: 'Unterstützen alle LLMs den JSON-Modus?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ und Google Gemini unterstützen nativen JSON-Modus. Ältere Modelle und Open-Source-LLMs benötigen möglicherweise Prompt-basierte Erzwingung.' } },
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
            'Der JSON-Modus erzwingt valide JSON-Ausgabe und wird nativ von OpenAI GPT-5.5, Anthropic Claude und Google Gemini unterstützt; ältere Modelle benötigen Prompt-basierte Erzwingung.',
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
            'Spezifikationsorientierte Frameworks wie SPECS oder RTF mit Format-[Einschränkungen](/de/prompt-engineering/constrained-prompting) verwenden, um Schemas direkt in Prompts zu kodieren.',
          ],
        },
        practicesAddendum: {
          content: [
            'Wenn weiterhin Formatierungsprobleme auftreten, kann die einfache Anweisung "Im Zweifel das Feld als leeren String belassen statt zu raten" hinzugefügt werden. Strukturierte Ausgabe funktioniert am besten in Kombination mit [RAG (Retrieval-Augmented Generation)](/de/prompt-engineering/rag-explained) zur Faktenprüfung extrahierter Daten. Müssen diese extrahierten Daten Ihre Infrastruktur nicht verlassen, funktionieren dieselben JSON-Mode-Muster auch gegen einen On-Premise-Vektor-Store — siehe [Lokales RAG für Geschäftsdaten](/de/power-local-llm/local-rag-for-private-business-data) für die DSGVO-konforme Architektur.',
          ],
        },
        modelComparison: {
          title: 'Modellvergleich: JSON-Compliance nach Anbieter',
          content: [
            '**Verschiedene Modelle haben unterschiedliche Unterstützung für nativen JSON-Modus.** Stand April 2026, hier ist die Rangliste der wichtigsten Anbieter:',
          ],
          columns: ['Modell', 'Nativer JSON-Modus', 'Nur-Prompt-Compliance', 'Hinweise'],
          rows: [
            { 'Modell': 'OpenAI GPT-5.5', 'Nativer JSON-Modus': 'Ja (erzwungen)', 'Nur-Prompt-Compliance': 'Nicht erforderlich', 'Hinweise': 'Industriestandard für JSON-Modus; 99%+ Erfolgsrate.' },
            { 'Modell': 'Anthropic Claude Sonnet 4.6', 'Nativer JSON-Modus': 'Ja (erzwungen)', 'Nur-Prompt-Compliance': 'Nicht erforderlich', 'Hinweise': 'Hervorragende JSON-Compliance; unterstützt komplexe verschachtelte Strukturen.' },
            { 'Modell': 'Google Gemini 2.0', 'Nativer JSON-Modus': 'Ja (erzwungen)', 'Nur-Prompt-Compliance': 'Nicht erforderlich', 'Hinweise': 'Nativer JSON-Support; schnelle Inferenz.' },
            { 'Modell': 'Meta Llama 3.3 70B', 'Nativer JSON-Modus': 'Teilweise', 'Nur-Prompt-Compliance': 'Sehr empfohlen', 'Hinweise': 'Open-Source; funktioniert gut mit detaillierten Prompts und Beispielen.' },
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
            '**Für Datenextraktion und maschinenlesbare Ausgaben den JSON-Modus (verfügbar in OpenAI GPT-5.5, Anthropic Claude, Google Gemini und anderen) verwenden.** Dies garantiert, dass das Modell valides JSON zurückgibt. Beispiel: Produktinformationen als JSON mit Schlüsseln extrahieren: name, price, description, rating.',
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
            '[Constrained Prompting](/de/prompt-engineering/constrained-prompting) — spezifische Ausgabeformate und Token-Budgets erzwingen.',
            '[SPECS Framework](/de/prompt-engineering/specs-framework) — spezifikationsorientierte Prompts für zuverlässiges Modellverhalten.',
            '[RAG Explained](/de/prompt-engineering/rag-explained) — strukturierte Extraktion mit Echtzeit-Datenabruf kombinieren.',
            '[Chain of Thought](/de/prompt-engineering/chain-of-thought-prompting) — Schritt für Schritt denken, bevor strukturierte Ausgaben zurückgegeben werden.',
            '[Prompt Templates](/de/prompt-engineering/prompt-documentation-templates) — wiederverwendbare Muster für häufige Aufgaben mit strukturierter Ausgabe.',
            '[Zero-Shot vs Few-Shot](/de/prompt-engineering/zero-shot-vs-few-shot) — verstehen, wann Beispiele (Few-Shot) die JSON-Compliance verbessern.',
            '[Prompts für zuverlässige strukturierte Daten](/de/prompt-engineering/prompts-for-reliable-structured-data)',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist der Unterschied zwischen strukturierter Ausgabe und JSON-Modus?', a: 'Strukturierte Ausgabe ist die übergeordnete Kategorie, bei der Modelle Daten in einem festen Format (Listen, Tabellen, Schlüssel-Wert-Paare oder JSON) zurückgeben sollen. Der JSON-Modus ist eine strengere Variante, die valide JSON-Ausgabe erzwingt, oft mit API-Garantien des Modellanbieters.' },
            { q: 'Unterstützen alle LLMs den JSON-Modus?', a: 'Nein. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ und Google Gemini unterstützen nativen JSON-Modus. Ältere Modelle und Open-Source-LLMs benötigen möglicherweise Prompt-basierte Erzwingung, z. B. das Angeben des Schemas in den Anweisungen und das Bereitstellen von Beispielen.' },
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
            '[Google Gemini API – Structured Output](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — Googles nativer JSON-Modus-Support in Gemini 2.0.',
            '[JSON Schema Specification](https://json-schema.org/specification.html) — Standardspezifikation für JSON-Schema-Design und -Validierung.',
          ],
        },
      },
    },
    es: {
      theme: 'Techniques',
      title: 'Salida estructurada en LLMs: modo JSON, ejemplos y cuándo usarlo',
      intro: 'La salida estructurada y el modo JSON transforman los resultados libres de los modelos de lenguaje en formatos fiables y legibles por máquinas que se integran directamente en bases de datos, APIs y flujos de trabajo de automatización. Aprende a diseñar prompts que fuercen JSON válido, compara el modo JSON con la llamada a funciones y el prompting con esquemas, y decide qué método se adapta a tu caso de uso.',
      publishDate: '2026-03-26',
      dateModified: '2026-04-05',
      readTime: '10 min de lectura',
      seoTitle: 'Salida estructurada y modo JSON en LLMs: guía completa',
      metaDescription: 'Aprende cuándo usar salida estructurada, modo JSON o llamada a funciones. Compara el cumplimiento JSON por modelo y domina el diseño de esquemas para APIs.',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Salida estructurada y modo JSON: obtén datos utilizables de la IA',
        description: 'Domina la salida estructurada y el modo JSON en prompts. Aprende a diseñar esquemas, imponer JSON válido, comparar el cumplimiento de los modelos y evitar errores comunes en sistemas de producción.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-05',
        keywords: ['salida estructurada', 'modo JSON', 'prompt engineering', 'diseño de esquemas', 'salida legible por máquinas', 'validación JSON', 'plantillas de prompts'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        url: 'https://www.promptquorum.com/es/prompt-engineering/structured-output-and-json-mode',
        inLanguage: 'es',
        'proficiencyLevel': 'Intermediate',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo usar la salida estructurada y el modo JSON',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Elegir el modo JSON', text: 'Para extracción de datos y salidas legibles por máquinas, usa el modo JSON disponible en OpenAI GPT-5.5, Anthropic Claude, Google Gemini y otros proveedores principales. Esto garantiza que el modelo devuelva JSON válido, no prosa.' },
          { '@type': 'HowToStep', position: 2, name: 'Definir tu esquema', text: 'Define tu esquema JSON de forma explícita, incluyendo nombres de campos, tipos de datos y restricciones.' },
          { '@type': 'HowToStep', position: 3, name: 'Proporcionar un ejemplo de salida', text: 'Proporciona un ejemplo de la estructura JSON exacta que quieres. Los ejemplos son más potentes que las descripciones de esquemas por sí solas.' },
          { '@type': 'HowToStep', position: 4, name: 'Manejar estructuras anidadas', text: 'Para objetos dentro de arrays, sé explícito sobre la jerarquía. Proporciona un ejemplo JSON completo con arrays anidados.' },
          { '@type': 'HowToStep', position: 5, name: 'Validar la salida JSON', text: 'Valida la salida JSON antes de usarla en sistemas posteriores. Analiza y verifica: (1) JSON sintácticamente válido, (2) Todos los campos requeridos presentes, (3) Los tipos de datos coinciden con lo esperado.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          { '@type': 'Question', name: '¿Cuál es la diferencia entre salida estructurada y modo JSON?', acceptedAnswer: { '@type': 'Answer', text: 'La salida estructurada es la categoría más amplia: pedirle al modelo que devuelva datos en un formato fijo (listas, tablas, pares clave-valor o JSON). El modo JSON es una variante más estricta que impone una salida JSON válida, a menudo con garantías a nivel de API.' } },
          { '@type': 'Question', name: '¿Todos los LLMs admiten el modo JSON?', acceptedAnswer: { '@type': 'Answer', text: 'No. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ y Google Gemini admiten el modo JSON nativo. Los modelos más antiguos y los LLMs de código abierto pueden requerir aplicación basada en prompts.' } },
          { '@type': 'Question', name: '¿Cómo fuerzo respuestas solo JSON sin modo JSON nativo?', acceptedAnswer: { '@type': 'Answer', text: 'Usa prompt engineering: (1) declara explícitamente "devuelve solo JSON válido", (2) proporciona un esquema detallado y ejemplos, (3) añade una instrucción como "No incluyas ningún texto fuera del JSON".' } },
          { '@type': 'Question', name: '¿Qué pasa si el modelo devuelve JSON inválido?', acceptedAnswer: { '@type': 'Answer', text: 'Valida el JSON de tu parte usando un analizador. Si falla, reintenta la solicitud con un prompt más claro o recurre a la extracción manual.' } },
          { '@type': 'Question', name: '¿Puedo usar salida estructurada para documentos complejos?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Divide las tareas complejas en pasos: primero extrae los campos clave, luego valida, luego opcionalmente transforma en sistemas posteriores.' } },
          { '@type': 'Question', name: '¿Cómo manejo datos faltantes o ambiguos en salidas estructuradas?', acceptedAnswer: { '@type': 'Answer', text: 'Define el comportamiento de respaldo en tu esquema: usa cadenas vacías, null o un marcador especial como "desconocido". Añade la instrucción: "Si un valor es ambiguo, usa null en lugar de adivinar."' } },
          { '@type': 'Question', name: '¿El modo JSON está afectado por la conformidad regulatoria (RGPD, CCPA)?', acceptedAnswer: { '@type': 'Answer', text: 'El modo JSON en sí es neutro. Sin embargo, la salida estructurada es beneficiosa para la conformidad porque te permite rastrear sistemáticamente qué datos se extraen y registran.' } },
          { '@type': 'Question', name: '¿Cómo pruebo los prompts en modo JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Prueba con entradas diversas: casos límite, datos ambiguos y ejemplos del mundo real. Analiza la salida y verifica: (1) JSON válido, (2) esquema correcto, (3) tipos de datos esperados. Apunta a una tasa de éxito ≥95% antes de producción.' } },
          { '@type': 'Question', name: '¿Puedo reutilizar esquemas de salida estructurada en diferentes modelos?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, con precaución. Define tu esquema una vez y pruébalo en diferentes modelos; puede que necesites ajustar los prompts para modelos más antiguos o pequeños.' } },
          { '@type': 'Question', name: '¿Cuál es el costo de rendimiento del modo JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Mínimo. El modo JSON nativo (OpenAI, Anthropic, Google) tiene un impacto de rendimiento despreciable.' } },
        ],
      },
      toc: [
        { label: 'Qué es la salida estructurada', anchor: '#what-structured-output-is' },
        { label: 'Qué es el modo JSON', anchor: '#what-json-mode-is' },
        { label: 'Por qué importan la salida estructurada y el modo JSON', anchor: '#why-structured-output-and-json-mode-matter' },
        { label: 'Comparación de modelos: cumplimiento JSON por proveedor', anchor: '#model-comparison-json-compliance-by-provider' },
        { label: 'Modo JSON vs llamada a funciones vs prompting con esquema', anchor: '#json-mode-vs-function-calling-vs-schema-prompting' },
        { label: 'Ejemplo: texto libre vs JSON estructurado', anchor: '#example-free-text-vs-structured-json' },
        { label: 'Mejores prácticas', anchor: '#best-practices-for-structured-output-and-json-mode' },
        { label: 'Salida estructurada en entornos regulados', anchor: '#structured-output-in-regulated-environments' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Cuándo usar modo JSON vs alternativas', anchor: '#when-to-use-json-mode-vs-alternatives' },
        { label: '¿Cuándo deberías usar salida estructurada?', anchor: '#when-should-you-use-structured-output' },
        { label: 'Cómo usar salida estructurada y modo JSON', anchor: '#how-to-use-structured-output-and-json-mode' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'Preguntas frecuentes', anchor: '#frequently-asked-questions' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        definition: {
          content: [
            '**La salida estructurada es un método para forzar a los modelos de lenguaje a devolver datos en un formato predefinido (como JSON), lo que permite un análisis fiable, automatización e integración en sistemas de software.** Se diferencia del texto libre al imponer nombres de campos estrictos, tipos de datos y esquemas que las herramientas posteriores pueden procesar sin limpieza manual.',
          ],
        },
        exampleBlock: {
          content: [
            'Aquí hay un ejemplo sencillo de salida estructurada en formato JSON:',
          ],
          codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}',
          codeLanguage: 'json',
        },
        keyTakeaways: {
          isTldr: true,
          content: [
            '**Puntos clave — Lo que necesitas saber sobre la salida estructurada:**',
          ],
          items: [
            '**Mejora la fiabilidad**: la salida estructurada reduce los errores de análisis al imponer esquemas estrictos.',
            '**Habilita la automatización**: el modo JSON activa lógica condicional basada en campos extraídos (prioridad, categoría, urgencia).',
            '**Lista para APIs**: integración directa con bases de datos, CRMs y sistemas de negocio sin reformatear.',
            '**Dependiente del modelo**: el modo JSON nativo está disponible en GPT-5.5, Claude, Gemini; los modelos más antiguos o de código abierto necesitan prompt engineering.',
            '**Mejor para tareas deterministas**: APIs, automatización, pipelines de datos. Evita para escritura creativa o razonamiento abierto.',
            '**Requiere validación**: siempre analiza y valida la salida JSON antes de usarla en sistemas posteriores.',
            '**Escala entre modelos**: define el esquema una vez; prueba y documenta las diferencias entre OpenAI, Anthropic, Google y proveedores de código abierto.',
          ],
        },
        whatIsStructured: {
          title: 'Qué es la salida estructurada',
          content: [
            '**La salida estructurada significa pedirle al modelo que siga un esquema fijo —como listas, tablas o JSON— para que las herramientas posteriores puedan analizar los resultados de forma fiable.** En lugar de un párrafo libre, defines campos, tipos y valores permitidos.',
            'La salida estructurada puede tomar varias formas:',
          ],
          items: [
            'Listas con viñetas con un número fijo de elementos.',
            'Tablas Markdown con columnas específicas.',
            'Pares clave-valor para atributos simples.',
            'Objetos o arrays JSON completos con claves predefinidas.',
          ],
        },
        structuredGoal: {
          content: [
            'El objetivo es siempre el mismo: convertir una descripción vaga ("algunas notas sobre la reunión") en una forma predecible ("título, fecha, asistentes, decisiones, riesgos").',
          ],
        },
        whatIsJSON: {
          title: 'Qué es el modo JSON',
          content: [
            '**El modo JSON es una variante más estricta de la salida estructurada donde el modelo recibe instrucciones —o se configura— para devolver solo JSON válido.** En modo JSON, todo lo que el modelo produce debe ser analizable como JSON sin limpieza adicional.',
            'Un esquema JSON típico podría verse así:',
          ],
          codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}',
          codeLanguage: 'json',
        },
        jsonModeApproach: {
          content: [
            'Reflejas ese esquema en tu prompt y luego pides al modelo que lo complete. Algunas plataformas también ofrecen configuraciones especiales o APIs que imponen respuestas solo JSON, reduciendo la probabilidad de comentarios extra.',
          ],
        },
        whyItMatters: {
          title: 'Por qué importan la salida estructurada y el modo JSON',
          content: [
            '**La salida estructurada y el modo JSON importan porque te permiten convertir los modelos de lenguaje en componentes de sistemas más grandes, no solo asistentes de chat.** Cuando la salida es predecible, puedes:',
          ],
          items: [
            'Alimentar resultados directamente a bases de datos, CRMs o herramientas de análisis.',
            'Activar automatizaciones basadas en campos como `priority`, `status` o `confidence`.',
            'Crear interfaces que muestren los resultados del modelo en tarjetas, tablas o dashboards sin formateo manual.',
          ],
        },
        debuggingBenefit: {
          content: [
            'También facilitan la depuración de prompts. Si la estructura falla, sabes que el problema está en el prompt o el esquema, no en alguna dimensión vaga de "calidad".',
          ],
        },
        jsonVsFunctionCalling: {
          title: 'Modo JSON vs llamada a funciones vs prompting con esquema',
          content: [
            '**Existen tres métodos para obtener salida estructurada de los LLMs. Cada uno tiene diferentes fortalezas y debilidades:**',
          ],
          items: [
            '**Modo JSON**: el modelo solo devuelve JSON válido. Ideal para: extracción de datos, clasificación, resumen. Restricción: limitado al formato de salida, sin ejecución de herramientas.',
            '**Llamada a funciones**: el modelo selecciona qué función llamar y proporciona argumentos en JSON. Ideal para: integración de APIs, uso de herramientas, flujos de trabajo agénticos. Restricción: requiere esquemas de funciones predefinidos.',
            '**Prompting con esquema**: instrucciones explícitas + ejemplos pidiendo al modelo que siga un esquema. Ideal para: flexibilidad, modelos de código abierto, formatos personalizados. Restricción: ~80–85% de fiabilidad, sin garantía a nivel de API.',
          ],
        },
        example: {
          title: 'Ejemplo: texto libre vs JSON estructurado',
          content: [
            '**La diferencia se hace evidente al comparar un prompt de texto libre con uno de JSON estructurado para la misma tarea.** Aquí clasificamos y resumimos un email de cliente.',
            '**[Prompt malo]**',
            '"Lee este email de cliente y resume qué quieren."',
            '**[Prompt bueno – modo JSON]**',
            '"Eres un asistente de soporte al cliente. Lee el email del cliente a continuación y extrae la información clave en un objeto JSON. Requisitos: devuelve solo JSON válido, con claves entre comillas dobles y valores de cadena. No incluyas ninguna explicación ni texto extra fuera del JSON. Si falta un valor, usa una cadena vacía. Esquema JSON: {\n  "issue_type": "string",\n  "urgency": "low | medium | high",\n  "summary": "string (máx. 25 palabras)",\n  "customer_sentiment": "negative | neutral | positive"\n} Email del cliente: [pega el texto del email aquí]"',
            'La versión "buena" define el esquema, los valores válidos y el requisito de solo JSON, haciendo que la salida sea fácil de analizar y usar en otros sistemas.',
          ],
        },
        bestPractices: {
          title: 'Mejores prácticas para la salida estructurada y el modo JSON',
          content: [
            '**Para obtener salidas estructuradas fiables, debes ser explícito, consistente y estricto en tus prompts.** Algunas prácticas ayudan mucho:',
          ],
          items: [
            'Muestra el esquema exacto que esperas, incluyendo los valores permitidos para enumeraciones.',
            'Indica claramente que no debe devolverse nada excepto el JSON (o la estructura).',
            'Usa nombres de claves cortos y sin ambigüedad (por ejemplo, `issue_type`, `urgency`, `summary`).',
            'Añade ejemplos de salidas válidas cuando la tarea sea compleja o sensible.',
            'Para estructuras anidadas, constrúyelas paso a paso y prueba con entradas reales.',
            'Usa frameworks centrados en especificaciones como SPECS o RTF con restricciones de formato para codificar esquemas directamente en los prompts.',
          ],
        },
        practicesAddendum: {
          content: [
            'Si sigues viendo problemas de formato, puedes añadir una instrucción simple como "Si no estás seguro, deja el campo como cadena vacía en lugar de adivinar." La salida estructurada funciona mejor cuando se combina con RAG (Retrieval-Augmented Generation) para verificar datos extraídos. Cuando los datos extraídos deben mantenerse en infraestructura privada, los mismos patrones de modo JSON se conectan a un almacén vectorial local.',
          ],
        },
        modelComparison: {
          title: 'Comparación de modelos: cumplimiento JSON por proveedor',
          content: [
            '**Diferentes modelos tienen diferentes niveles de soporte nativo para el modo JSON.** A partir de abril de 2026, así se clasifican los principales proveedores:',
          ],
          columns: ['Modelo', 'Modo JSON nativo', 'Cumplimiento solo con prompt', 'Notas'],
          rows: [
            { 'Modelo': 'OpenAI GPT-5.5', 'Modo JSON nativo': 'Sí (impuesto)', 'Cumplimiento solo con prompt': 'No necesario', 'Notas': 'Estándar de la industria para el modo JSON; tasa de éxito > 99%.' },
            { 'Modelo': 'Anthropic Claude Sonnet 4.6', 'Modo JSON nativo': 'Sí (impuesto)', 'Cumplimiento solo con prompt': 'No necesario', 'Notas': 'Excelente cumplimiento JSON; admite estructuras anidadas complejas.' },
            { 'Modelo': 'Google Gemini 2.0', 'Modo JSON nativo': 'Sí (impuesto)', 'Cumplimiento solo con prompt': 'No necesario', 'Notas': 'Soporte JSON nativo; inferencia rápida.' },
            { 'Modelo': 'Meta Llama 3.3 70B', 'Modo JSON nativo': 'Parcial', 'Cumplimiento solo con prompt': 'Muy recomendado', 'Notas': 'Código abierto; funciona bien con prompts detallados y ejemplos.' },
            { 'Modelo': 'Mistral Large', 'Modo JSON nativo': 'Parcial', 'Cumplimiento solo con prompt': 'Recomendado', 'Notas': 'Buen comportamiento JSON; prueba con tu esquema específico.' },
            { 'Modelo': 'GPT-3.5 antiguo, Claude 2', 'Modo JSON nativo': 'No', 'Cumplimiento solo con prompt': 'Requerido', 'Notas': 'Requiere prompt engineering sólido; ~80–85% de tasa de éxito.' },
            { 'Modelo': 'Modelos pequeños de código abierto (<13B)', 'Modo JSON nativo': 'No', 'Cumplimiento solo con prompt': 'Requerido con ejemplos', 'Notas': 'Necesitan esquemas detallados y múltiples ejemplos; ~60–70% de tasa de éxito.' },
          ],
        },
        regulatedEnvironments: {
          title: 'Salida estructurada en entornos regulados',
          content: [
            '**La salida estructurada es especialmente valiosa en industrias reguladas porque impone una extracción de datos consistente, registros de auditoría y documentación de cumplimiento.** Las diferentes regiones tienen diferentes requisitos:',
          ],
          items: [
            '**UE (RGPD, AI Act)**: la salida estructurada permite la clasificación sistemática de datos y el seguimiento del derecho de supresión. El modo JSON te permite etiquetar qué campos contienen datos personales, facilitando las EIPD y las auditorías de cumplimiento.',
            '**Japón (Directrices IA de METI, APPI)**: la extracción estructurada con definiciones claras de esquemas apoya los requisitos de transparencia y responsabilidad. El cumplimiento del AI Act en Japón suele requerir documentar cómo se procesan los datos.',
            '**China (Regulaciones CAC, Ley de Seguridad de Datos)**: la salida estructurada ayuda con la moderación de contenidos y el registro de residencia de datos. El modo JSON permite la clasificación sistemática de contenido sensible para el cumplimiento de los estándares CAC.',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes',
          content: [
            '**Evita estos errores frecuentes al implementar salida estructurada y modo JSON:**',
          ],
          items: [
            '**Esquemas ambiguos**: decir "extrae los puntos clave" sin definir un esquema lleva a salidas inconsistentes. Siempre especifica nombres de campos, tipos y restricciones exactos.',
            '**Falta de ejemplos**: proporcionar solo una descripción del esquema sin ejemplos causa tasas de fallo del 20–30%. Siempre muestra 1–3 ejemplos de salida válida.',
            '**No validar la salida**: asumir que el modelo siempre devolverá JSON válido lleva a errores de análisis en producción. Siempre valida y maneja los fallos de análisis con gracia.',
            '**No manejar casos límite**: los campos que podrían faltar, ser ambiguos o estar fuera de rango deben tener un comportamiento de respaldo definido (null, cadena vacía o valor por defecto).',
            '**Probar solo con entradas fáciles**: los datos del mundo real son desordenados. Prueba tu esquema con casos límite: emails incompletos, caracteres especiales, idiomas mezclados, entradas muy largas.',
          ],
        },
        whenToUseJsonMode: {
          title: 'Cuándo usar modo JSON vs alternativas',
          content: [
            '**Elige el modo JSON cuando necesites imposición estricta del esquema y salida determinista. Evítalo cuando la creatividad y el razonamiento abierto son lo que importa.**',
          ],
          items: [
            '**✓ Usa el modo JSON**: se requiere esquema estricto, pipelines de automatización, integración de APIs, extracción de datos, tareas de clasificación, salidas deterministas, sistemas de producción que requieren validación.',
            '**✗ Evita el modo JSON**: escritura creativa, razonamiento abierto, lluvia de ideas, ensayos, generación de código (la llamada a funciones es mejor), preguntas filosóficas, contenido narrativo.',
            '**Alternativa: usa llamada a funciones** cuando necesites integración de herramientas y flujos de trabajo agénticos (el modelo selecciona qué función llamar).',
            '**Alternativa: usa prompting con esquema** cuando necesites flexibilidad, trabajes con modelos de código abierto o no necesites garantías a nivel de API.',
          ],
        },
        whenToUseStructuredOutput: {
          title: '¿Cuándo deberías usar salida estructurada?',
          content: [
            '**La salida estructurada brilla en tres escenarios principales. Úsala cuando necesitas resultados deterministas y legibles por máquinas:**',
          ],
          items: [
            '**APIs e integraciones**: conecta la salida del LLM directamente a sistemas posteriores (bases de datos, CRMs, dashboards). La salida estructurada previene errores de análisis y limpieza manual. Ejemplo: extrae datos de clientes de emails y escribe en el CRM.',
            '**Automatización y flujos de trabajo**: activa acciones basadas en campos de salida del modelo (prioridad, urgencia, categoría). El modo JSON garantiza una extracción fiable de campos para lógica condicional. Ejemplo: enruta tickets de soporte por nivel de urgencia.',
            '**Pipelines de datos**: procesa datos en volumen (documentos, emails, registros) a escala. Los esquemas consistentes permiten el procesamiento por lotes, la validación y el manejo de errores. Ejemplo: extrae metadatos de 10.000 artículos de investigación en una base de datos con búsqueda.',
          ],
        },
        howToStart: {
          title: 'Cómo usar la salida estructurada y el modo JSON',
          numberedItems: [
            '**Para extracción de datos y salidas legibles por máquinas, usa el modo JSON (disponible en OpenAI GPT-5.5, Anthropic Claude, Google Gemini y otros).** Esto garantiza que el modelo devuelva JSON válido, no prosa. Ejemplo: extrae información de producto como JSON con las claves: nombre, precio, descripción, valoración.',
            '**Define tu esquema JSON de forma explícita, incluyendo nombres de campos, tipos de datos y restricciones.** Ejemplo: { "name": string, "price": number (≥ 0), "in_stock": boolean, "tags": array de strings }.',
            '**Proporciona un ejemplo de la estructura JSON exacta que quieres.** Ejemplo: { "issue": "memory leak", "severity": "critical", "suggested_fix": "...", "code_snippet": "..." }. Los ejemplos son más potentes que las descripciones de esquemas.',
            '**Para estructuras anidadas (objetos dentro de arrays), sé explícito sobre la jerarquía.** Proporciona un ejemplo JSON completo, incluyendo arrays anidados.',
            '**Valida la salida JSON antes de usarla en sistemas posteriores.** Analiza el JSON devuelto y comprueba: (1) es sintaxis JSON válida, (2) todos los campos requeridos están presentes, (3) los tipos de datos coinciden con lo esperado. Maneja los errores de análisis con gracia.',
          ],
        },
        howToStep4Code: {
          content: [
            '**Aquí hay un ejemplo JSON completo con arrays anidados, mostrando la jerarquía correcta:**',
          ],
          codeBlock: '{\n  "articles": [\n    {\n      "title": "string",\n      "author": "string",\n      "citations": [\n        {\n          "title": "string",\n          "year": "number"\n        }\n      ]\n    }\n  ]\n}',
          codeLanguage: 'json',
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          content: [
            '**Amplía tu conocimiento con estos temas relacionados de prompt engineering:**',
          ],
          items: [
            '[Prompting con restricciones](/es/prompt-engineering/constrained-prompting) — impone formatos de salida específicos y presupuestos de tokens.',
            '[Framework SPECS](/es/prompt-engineering/specs-framework) — prompts centrados en especificaciones para un comportamiento fiable del modelo.',
            '[RAG explicado](/es/prompt-engineering/rag-explained) — combina extracción estructurada con recuperación de datos en tiempo real.',
            '[Chain of Thought](/es/prompt-engineering/chain-of-thought-prompting) — razona paso a paso antes de devolver salidas estructuradas.',
            '[Plantillas de prompts](/es/prompt-engineering/prompt-documentation-templates) — patrones reutilizables para tareas comunes de salida estructurada.',
            '[Zero-Shot vs Few-Shot](/es/prompt-engineering/zero-shot-vs-few-shot) — cuándo los ejemplos (few-shot) mejoran el cumplimiento JSON.',
            '[Prompts para Datos Estructurados Confiables](/es/prompt-engineering/prompts-for-reliable-structured-data)',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Cuál es la diferencia entre salida estructurada y modo JSON?', a: 'La salida estructurada es la categoría más amplia de pedirle al modelo que devuelva datos en un formato fijo (listas, tablas, pares clave-valor o JSON). El modo JSON es una variante más estricta que impone una salida JSON válida, a menudo con garantías a nivel de API del proveedor del modelo.' },
            { q: '¿Todos los LLMs admiten el modo JSON?', a: 'No. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ y Google Gemini admiten el modo JSON nativo. Los modelos más antiguos y los LLMs de código abierto pueden requerir aplicación basada en prompts.' },
            { q: '¿Cómo fuerzo respuestas solo JSON sin modo JSON nativo?', a: 'Usa prompt engineering: (1) declara explícitamente "devuelve solo JSON válido", (2) proporciona un esquema detallado y ejemplos, (3) añade una instrucción como "No incluyas ningún texto fuera del JSON". Las tasas de éxito mejoran significativamente con buenos ejemplos.' },
            { q: '¿Qué pasa si el modelo devuelve JSON inválido?', a: 'Valida el JSON de tu parte usando un analizador. Si falla, reintenta la solicitud con un prompt más claro o recurre a la extracción manual. Con un buen prompt engineering y ejemplos de esquemas, las tasas de fallo son bajas (generalmente < 5% para prompts bien diseñados).' },
            { q: '¿Puedo usar salida estructurada para documentos complejos?', a: 'Sí. Divide las tareas complejas en pasos: primero extrae los campos clave, luego valida, luego opcionalmente transforma en sistemas posteriores. Dividir documentos grandes y procesarlos por separado suele mejorar la fiabilidad y reducir el uso de tokens.' },
            { q: '¿Cómo manejo datos faltantes o ambiguos en salidas estructuradas?', a: 'Define el comportamiento de respaldo en tu esquema: usa cadenas vacías, valores null o un marcador especial como "desconocido". Añade la instrucción: "Si un valor es ambiguo o falta, usa null en lugar de adivinar."' },
            { q: '¿El modo JSON está afectado por la conformidad regulatoria (RGPD, CCPA)?', a: 'El modo JSON en sí es neutro. Sin embargo, la salida estructurada es beneficiosa para la conformidad porque te permite rastrear sistemáticamente qué datos se extraen, transforman y registran, algo crítico para los registros de auditoría.' },
            { q: '¿Cómo pruebo los prompts en modo JSON?', a: 'Prueba con entradas diversas: casos límite, datos ambiguos y ejemplos del mundo real. Analiza la salida y verifica: (1) JSON válido, (2) esquema correcto, (3) tipos de datos esperados. Apunta a una tasa de éxito ≥95% antes de desplegar en producción.' },
            { q: '¿Puedo reutilizar esquemas de salida estructurada en diferentes modelos?', a: 'Sí, con precaución. Define tu esquema una vez y pruébalo en diferentes modelos; puede que necesites ajustar los prompts para modelos más antiguos o pequeños. Documenta cualquier diferencia específica del modelo y las tasas de éxito.' },
            { q: '¿Cuál es el costo de rendimiento del modo JSON?', a: 'Mínimo. El modo JSON nativo (OpenAI, Anthropic, Google) tiene un impacto de rendimiento despreciable. La aplicación solo con prompt puede añadir un 5–10% de latencia debido a la sobrecarga de explicación del esquema, pero las ganancias en seguridad suelen justificarlo.' },
          ],
        },
        sources: {
          title: 'Fuentes',
          items: [
            '[Documentación del modo JSON de OpenAI](https://platform.openai.com/docs/guides/json-mode) — Guía oficial del modo JSON en la API de OpenAI.',
            '[Guía de salida estructurada de Anthropic](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — Documentación de Anthropic para salida estructurada en Claude.',
            '[API de Google Gemini – Salida estructurada](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — Soporte nativo del modo JSON de Google en Gemini 2.0.',
            '[Especificación de JSON Schema](https://json-schema.org/specification.html) — Especificación estándar para el diseño y validación de JSON Schema.',
          ],
        },
      },
    },
    ar: {
      theme: 'Techniques',
      title: 'المخرجات المهيكلة في النماذج اللغوية الكبيرة: وضع ⁨JSON⁩ وأمثلة ومتى تستخدمه',
      intro: 'تُحوّل المخرجات المهيكلة ووضع JSON نتائج النماذج اللغوية الحرة إلى صيغ موثوقة يمكن للآلات قراءتها وتتكامل مباشرة مع قواعد البيانات وواجهات برمجة التطبيقات وسير عمل الأتمتة. تعلّم كيفية تصميم برومبتات تُجبر على JSON صالح، وقارن وضع JSON مع استدعاء الوظائف والبرومبت القائم على المخطط، وقرّر أي طريقة تناسب حالة استخدامك.',
      publishDate: '2026-03-26',
      dateModified: '2026-04-05',
      readTime: '١٠ دقائق للقراءة',
      seoTitle: 'المخرجات المهيكلة ووضع ⁨JSON⁩ في ⁨LLMs⁩: دليل ⁨2026⁩',
      metaDescription: 'أقل من ⁨5%⁩ معدل فشل مع تصميم المخطط الصحيح. متى تستخدم وضع ⁨JSON⁩ أو استدعاء الوظائف في ⁨GPT⁩ و⁨Claude⁩ و⁨Gemini⁩ مع أمثلة لكل نموذج.',
      educationalLevel: 'متوسط',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'المخرجات المهيكلة ووضع JSON: احصل على بيانات قابلة للاستخدام من الذكاء الاصطناعي',
        description: 'أتقن المخرجات المهيكلة ووضع JSON في البرومبتات. تعلّم كيفية تصميم المخططات وإلزام JSON الصالح ومقارنة امتثال النماذج وتجنب الأخطاء الشائعة في أنظمة الإنتاج.',
        datePublished: '2026-03-26',
        dateModified: '2026-04-05',
        keywords: ['مخرجات مهيكلة', 'وضع JSON', 'هندسة البرومبت', 'تصميم المخطط', 'مخرجات قابلة للقراءة الآلية', 'التحقق من JSON', 'قوالب البرومبت'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        url: 'https://www.promptquorum.com/ar/prompt-engineering/structured-output-and-json-mode',
        inLanguage: 'ar',
        'proficiencyLevel': 'متوسط',
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'كيفية استخدام المخرجات المهيكلة ووضع JSON',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'اختيار وضع JSON', text: 'لاستخراج البيانات والمخرجات القابلة للقراءة الآلية، استخدم وضع JSON المتاح في OpenAI GPT-5.5 وAnthropic Claude وGoogle Gemini وغيرهم من المزودين الرئيسيين. يضمن هذا أن يُعيد النموذج JSON صالحاً وليس نثراً.' },
          { '@type': 'HowToStep', position: 2, name: 'تحديد مخططك', text: 'حدّد مخطط JSON بشكل صريح بما في ذلك أسماء الحقول وأنواع البيانات والقيود.' },
          { '@type': 'HowToStep', position: 3, name: 'توفير مثال على المخرج', text: 'وفّر مثالاً على بنية JSON الدقيقة التي تريدها. الأمثلة أقوى من أوصاف المخططات وحدها.' },
          { '@type': 'HowToStep', position: 4, name: 'التعامل مع البنى المتداخلة', text: 'للكائنات داخل المصفوفات، كن صريحاً بشأن التسلسل الهرمي. وفّر مثالاً كاملاً على JSON مع مصفوفات متداخلة.' },
          { '@type': 'HowToStep', position: 5, name: 'التحقق من مخرج JSON', text: 'تحقق من مخرج JSON قبل استخدامه في الأنظمة اللاحقة. حلّل وتحقق: (1) JSON صحيح نحوياً، (2) جميع الحقول المطلوبة موجودة، (3) أنواع البيانات تطابق المتوقع.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          { '@type': 'Question', name: 'ما الفرق بين المخرجات المهيكلة ووضع JSON؟', acceptedAnswer: { '@type': 'Answer', text: 'المخرجات المهيكلة هي الفئة الأوسع: طلب النموذج إعادة البيانات بصيغة ثابتة (قوائم أو جداول أو أزواج مفتاح-قيمة أو JSON). وضع JSON هو نوع أكثر صرامة يُلزم بمخرج JSON صالح، غالباً بضمانات على مستوى واجهة برمجة التطبيقات.' } },
          { '@type': 'Question', name: 'هل تدعم جميع النماذج اللغوية الكبيرة وضع JSON؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. OpenAI GPT-5.5 وAnthropic Claude Sonnet 4.6+ وGoogle Gemini تدعم وضع JSON الأصيل. النماذج الأقدم والنماذج مفتوحة المصدر قد تتطلب تطبيقاً قائماً على البرومبت.' } },
          { '@type': 'Question', name: 'كيف أُلزم بردود JSON فقط بدون وضع JSON الأصيل؟', acceptedAnswer: { '@type': 'Answer', text: 'استخدم هندسة البرومبت: (1) صرّح صراحةً بـ"أعد JSON صالحاً فقط"، (2) وفّر مخططاً مفصلاً وأمثلة، (3) أضف تعليمة "لا تُدرج أي نص خارج JSON".' } },
          { '@type': 'Question', name: 'ماذا يحدث إذا أعاد النموذج JSON غير صالح؟', acceptedAnswer: { '@type': 'Answer', text: 'تحقق من JSON من جهتك باستخدام محلل. إذا فشل، أعد المحاولة بطلب أكثر وضوحاً أو العودة إلى الاستخراج اليدوي.' } },
          { '@type': 'Question', name: 'هل يمكن استخدام المخرجات المهيكلة للمستندات المعقدة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. قسّم المهام المعقدة إلى خطوات: استخرج الحقول الرئيسية أولاً، ثم تحقق، ثم حوّل اختيارياً في الأنظمة اللاحقة.' } },
          { '@type': 'Question', name: 'كيف أتعامل مع البيانات المفقودة أو الغامضة في المخرجات المهيكلة؟', acceptedAnswer: { '@type': 'Answer', text: 'عرّف سلوك الاحتياطي في مخططك: استخدم سلاسل فارغة أو null أو علامة خاصة مثل "مجهول". أضف التعليمة: "إذا كانت القيمة غامضة، استخدم null بدلاً من التخمين."' } },
          { '@type': 'Question', name: 'هل وضع JSON متأثر بالامتثال التنظيمي (GDPR، إلخ)؟', acceptedAnswer: { '@type': 'Answer', text: 'وضع JSON في حد ذاته محايد. ومع ذلك، المخرجات المهيكلة مفيدة للامتثال لأنها تتيح تتبع البيانات المستخرجة والمسجلة بشكل منهجي.' } },
          { '@type': 'Question', name: 'كيف أختبر البرومبتات في وضع JSON؟', acceptedAnswer: { '@type': 'Answer', text: 'اختبر بمدخلات متنوعة: حالات حافة وبيانات غامضة وأمثلة من الواقع. حلّل المخرج وتحقق: (1) JSON صالح، (2) مخطط صحيح، (3) أنواع بيانات متوقعة. استهدف معدل نجاح ≥95٪ قبل الإنتاج.' } },
          { '@type': 'Question', name: 'هل يمكن إعادة استخدام مخططات المخرجات المهيكلة عبر النماذج المختلفة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، مع الحذر. عرّف مخططك مرة واحدة واختبره على نماذج مختلفة؛ قد تحتاج إلى ضبط البرومبتات للنماذج الأقدم أو الأصغر.' } },
          { '@type': 'Question', name: 'ما تكلفة الأداء لوضع JSON؟', acceptedAnswer: { '@type': 'Answer', text: 'ضئيلة. وضع JSON الأصيل (OpenAI وAnthropic وGoogle) له تأثير أداء ضئيل جداً.' } },
        ],
      },
      toc: [
        { label: 'ما هي المخرجات المهيكلة', anchor: '#what-structured-output-is' },
        { label: 'ما هو وضع JSON', anchor: '#what-json-mode-is' },
        { label: 'لماذا تهم المخرجات المهيكلة ووضع JSON', anchor: '#why-structured-output-and-json-mode-matter' },
        { label: 'مقارنة النماذج: امتثال JSON حسب المزود', anchor: '#model-comparison-json-compliance-by-provider' },
        { label: 'وضع JSON مقابل استدعاء الوظائف مقابل برومبت المخطط', anchor: '#json-mode-vs-function-calling-vs-schema-prompting' },
        { label: 'مثال: نص حر مقابل JSON مهيكل', anchor: '#example-free-text-vs-structured-json' },
        { label: 'أفضل الممارسات', anchor: '#best-practices-for-structured-output-and-json-mode' },
        { label: 'المخرجات المهيكلة في البيئات المنظّمة', anchor: '#structured-output-in-regulated-environments' },
        { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
        { label: 'متى تستخدم وضع JSON مقابل البدائل', anchor: '#when-to-use-json-mode-vs-alternatives' },
        { label: 'متى يجب استخدام المخرجات المهيكلة؟', anchor: '#when-should-you-use-structured-output' },
        { label: 'كيفية استخدام المخرجات المهيكلة ووضع JSON', anchor: '#how-to-use-structured-output-and-json-mode' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'الأسئلة الشائعة', anchor: '#frequently-asked-questions' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        definition: {
          content: [
            '**المخرجات المهيكلة هي طريقة لإجبار النماذج اللغوية على إعادة البيانات بصيغة محددة مسبقاً (كـJSON)، مما يُتيح تحليلاً موثوقاً وأتمتة وتكاملاً في أنظمة البرمجيات.** تختلف عن النص الحر بإلزام أسماء حقول صارمة وأنواع بيانات ومخططات يمكن للأدوات اللاحقة معالجتها دون تنظيف يدوي.',
          ],
        },
        exampleBlock: {
          content: [
            'هنا مثال بسيط على مخرجات مهيكلة بصيغة JSON:',
          ],
          codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}',
          codeLanguage: 'json',
        },
        keyTakeaways: {
          isTldr: true,
          content: [
            '**النقاط الرئيسية — ما تحتاج معرفته عن المخرجات المهيكلة:**',
          ],
          items: [
            '**تُحسّن الموثوقية**: المخرجات المهيكلة تُقلّل أخطاء التحليل بإلزام مخططات صارمة.',
            '**تُتيح الأتمتة**: وضع JSON يُفعّل المنطق الشرطي بناءً على الحقول المستخرجة (الأولوية والفئة والإلحاح).',
            '**جاهزة لواجهات برمجة التطبيقات**: تكامل مباشر مع قواعد البيانات وأنظمة CRM والأنظمة التجارية دون إعادة تنسيق.',
            '**تعتمد على النموذج**: وضع JSON الأصيل متاح في GPT-5.5 وClaude وGemini؛ النماذج الأقدم أو مفتوحة المصدر تحتاج هندسة برومبت.',
            '**الأفضل للمهام الحتمية**: واجهات برمجة التطبيقات والأتمتة وخطوط أنابيب البيانات. تجنّب للكتابة الإبداعية أو التفكير المفتوح.',
            '**يتطلب التحقق**: دائماً حلّل وتحقق من مخرج JSON قبل استخدامه في الأنظمة اللاحقة.',
            '**يتوسّع عبر النماذج**: عرّف المخطط مرة واحدة؛ اختبر ووثّق الفروق بين OpenAI وAnthropic وGoogle والمزودين مفتوحي المصدر.',
          ],
        },
        whatIsStructured: {
          title: 'ما هي المخرجات المهيكلة',
          content: [
            '**المخرجات المهيكلة تعني طلب النموذج اتباع مخطط ثابت — كالقوائم أو الجداول أو JSON — حتى تستطيع الأدوات اللاحقة تحليل النتائج بشكل موثوق.** بدلاً من فقرة حرة، تُعرّف الحقول والأنواع والقيم المسموح بها.',
            'يمكن أن تتخذ المخرجات المهيكلة عدة أشكال:',
          ],
          items: [
            'قوائم نقطية بعدد ثابت من العناصر.',
            'جداول Markdown بأعمدة محددة.',
            'أزواج مفتاح-قيمة للسمات البسيطة.',
            'كائنات أو مصفوفات JSON كاملة بمفاتيح محددة مسبقاً.',
          ],
        },
        structuredGoal: {
          content: [
            'الهدف دائماً هو نفسه: تحويل وصف غامض ("بعض ملاحظات الاجتماع") إلى شكل قابل للتنبؤ ("العنوان والتاريخ والحضور والقرارات والمخاطر").',
          ],
        },
        whatIsJSON: {
          title: 'ما هو وضع JSON',
          content: [
            '**وضع JSON هو نوع أكثر صرامة من المخرجات المهيكلة حيث يُوجَّه النموذج — أو يُضبط — لإعادة JSON صالح فقط.** في وضع JSON، كل ما يُنتجه النموذج يجب أن يكون قابلاً للتحليل كـJSON دون تنظيف إضافي.',
            'قد يبدو مخطط JSON نموذجي هكذا:',
          ],
          codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}',
          codeLanguage: 'json',
        },
        jsonModeApproach: {
          content: [
            'تعكس ذلك المخطط في برومبتك ثم تطلب من النموذج إكماله. تُقدّم بعض المنصات أيضاً إعدادات خاصة أو واجهات برمجة تطبيقات تُلزم بردود JSON فقط، مما يُقلّل احتمالية التعليقات الإضافية.',
          ],
        },
        whyItMatters: {
          title: 'لماذا تهم المخرجات المهيكلة ووضع JSON',
          content: [
            '**تهم المخرجات المهيكلة ووضع JSON لأنهما يُتيحان تحويل النماذج اللغوية إلى مكونات لأنظمة أكبر، وليس مجرد مساعدات دردشة.** عندما تكون المخرجات قابلة للتنبؤ، يمكنك:',
          ],
          items: [
            'تغذية النتائج مباشرة إلى قواعد البيانات أو أنظمة CRM أو أدوات التحليل.',
            'تفعيل أتمتة مبنية على حقول مثل `priority` أو `status` أو `confidence`.',
            'إنشاء واجهات تعرض نتائج النموذج في بطاقات أو جداول أو لوحات تحكم دون تنسيق يدوي.',
          ],
        },
        debuggingBenefit: {
          content: [
            'كما تُسهّل تصحيح البرومبتات. إذا فشل الهيكل، تعرف أن المشكلة في البرومبت أو المخطط، وليس في بُعد غامض من "الجودة".',
          ],
        },
        jsonVsFunctionCalling: {
          title: 'وضع JSON مقابل استدعاء الوظائف مقابل برومبت المخطط',
          content: [
            '**ثمة ثلاثة طرق للحصول على مخرجات مهيكلة من النماذج اللغوية الكبيرة. لكل منها نقاط قوة وضعف مختلفة:**',
          ],
          items: [
            '**وضع JSON**: النموذج يُعيد JSON صالحاً فقط. الأفضل لـ: استخراج البيانات والتصنيف والتلخيص. القيد: محدود بصيغة المخرج، بدون تنفيذ أدوات.',
            '**استدعاء الوظائف**: النموذج يختار أي وظيفة يستدعي ويُقدّم الحجج بـJSON. الأفضل لـ: تكامل واجهات برمجة التطبيقات وسير العمل العملياتي ومهام الوكيل. القيد: يتطلب مخططات وظائف محددة مسبقاً.',
            '**برومبت المخطط**: تعليمات صريحة وأمثلة تطلب من النموذج اتباع مخطط. الأفضل لـ: المرونة والنماذج مفتوحة المصدر والصيغ المخصصة. القيد: موثوقية ~80–85٪، بدون ضمان على مستوى واجهة برمجة التطبيقات.',
          ],
        },
        example: {
          title: 'مثال: نص حر مقابل JSON مهيكل',
          content: [
            '**يتضح الفرق عند مقارنة برومبت نص حر مع برومبت JSON مهيكل لنفس المهمة.** هنا نُصنّف ونلخّص بريداً إلكترونياً من عميل.',
            '**[برومبت سيئ]**',
            '"اقرأ هذا البريد الإلكتروني من العميل ولخّص ما يريده."',
            '**[برومبت جيد – وضع JSON]**',
            '"أنت مساعد دعم عملاء. اقرأ البريد الإلكتروني من العميل أدناه واستخرج المعلومات الرئيسية في كائن JSON. المتطلبات: أعد JSON صالحاً فقط بمفاتيح بين علامات اقتباس مزدوجة وقيم نصية. لا تُدرج أي شرح أو نص إضافي خارج JSON. إذا كانت القيمة مفقودة، استخدم سلسلة فارغة. مخطط JSON: {\n  "issue_type": "string",\n  "urgency": "low | medium | high",\n  "summary": "string (أقصى 25 كلمة)",\n  "customer_sentiment": "negative | neutral | positive"\n} البريد الإلكتروني من العميل: [الصق نص البريد الإلكتروني هنا]"',
            'النسخة "الجيدة" تُعرّف المخطط والقيم الصالحة ومتطلب JSON فقط، مما يجعل المخرج سهل التحليل والاستخدام في الأنظمة الأخرى.',
          ],
        },
        bestPractices: {
          title: 'أفضل الممارسات للمخرجات المهيكلة ووضع JSON',
          content: [
            '**للحصول على مخرجات مهيكلة موثوقة، يجب أن تكون صريحاً ومتسقاً وصارماً في برومبتاتك.** بعض الممارسات تُساعد كثيراً:',
          ],
          items: [
            'أظهر المخطط الدقيق الذي تتوقعه بما في ذلك القيم المسموح بها للتعدادات.',
            'وضّح صراحةً أنه لا يجب إعادة أي شيء إلا JSON (أو البنية).',
            'استخدم أسماء مفاتيح قصيرة وغير غامضة (مثل `issue_type` و`urgency` و`summary`).',
            'أضف أمثلة على مخرجات صالحة عندما تكون المهمة معقدة أو حساسة.',
            'للبنى المتداخلة، ابنها خطوة بخطوة واختبر بمدخلات حقيقية.',
            'استخدم أطر عمل تركّز على المواصفات مثل SPECS أو RTF مع قيود التنسيق لترميز المخططات مباشرة في البرومبتات.',
          ],
        },
        practicesAddendum: {
          content: [
            'إذا استمريت في رؤية مشكلات التنسيق، يمكنك إضافة تعليمة بسيطة مثل "إذا لم تكن متأكداً، اترك الحقل كسلسلة فارغة بدلاً من التخمين." تعمل المخرجات المهيكلة بشكل أفضل عند دمجها مع RAG للتحقق من البيانات المستخرجة. عند الحاجة إلى الاحتفاظ بالبيانات المستخرجة في بنية تحتية خاصة، تتصل نفس أنماط وضع JSON بمخزن متجهي محلي.',
          ],
        },
        modelComparison: {
          title: 'مقارنة النماذج: امتثال JSON حسب المزود',
          content: [
            '**تمتلك النماذج المختلفة مستويات مختلفة من الدعم الأصيل لوضع JSON.** اعتباراً من أبريل 2026، هكذا تُصنَّف المزودون الرئيسيون:',
          ],
          columns: ['النموذج', 'وضع JSON الأصيل', 'الامتثال بالبرومبت فقط', 'ملاحظات'],
          rows: [
            { 'النموذج': 'OpenAI GPT-5.5', 'وضع JSON الأصيل': 'نعم (مُلزَم)', 'الامتثال بالبرومبت فقط': 'غير ضروري', 'ملاحظات': 'معيار الصناعة لوضع JSON؛ معدل نجاح > 99٪.' },
            { 'النموذج': 'Anthropic Claude Sonnet 4.6', 'وضع JSON الأصيل': 'نعم (مُلزَم)', 'الامتثال بالبرومبت فقط': 'غير ضروري', 'ملاحظات': 'امتثال JSON ممتاز؛ يدعم البنى المتداخلة المعقدة.' },
            { 'النموذج': 'Google Gemini 2.0', 'وضع JSON الأصيل': 'نعم (مُلزَم)', 'الامتثال بالبرومبت فقط': 'غير ضروري', 'ملاحظات': 'دعم JSON أصيل؛ استنتاج سريع.' },
            { 'النموذج': 'Meta Llama 3.3 70B', 'وضع JSON الأصيل': 'جزئي', 'الامتثال بالبرومبت فقط': 'موصى به بشدة', 'ملاحظات': 'مفتوح المصدر؛ يعمل بشكل جيد مع برومبتات مفصّلة وأمثلة.' },
            { 'النموذج': 'Mistral Large', 'وضع JSON الأصيل': 'جزئي', 'الامتثال بالبرومبت فقط': 'موصى به', 'ملاحظات': 'سلوك JSON جيد؛ اختبر مع مخططك المحدد.' },
            { 'النموذج': 'GPT-3.5 القديم، Claude 2', 'وضع JSON الأصيل': 'لا', 'الامتثال بالبرومبت فقط': 'مطلوب', 'ملاحظات': 'يتطلب هندسة برومبت متينة؛ معدل نجاح ~80–85٪.' },
            { 'النموذج': 'نماذج صغيرة مفتوحة المصدر (<13B)', 'وضع JSON الأصيل': 'لا', 'الامتثال بالبرومبت فقط': 'مطلوب مع أمثلة', 'ملاحظات': 'تحتاج مخططات مفصّلة وأمثلة متعددة؛ معدل نجاح ~60–70٪.' },
          ],
        },
        regulatedEnvironments: {
          title: 'المخرجات المهيكلة في البيئات المنظّمة',
          content: [
            '**المخرجات المهيكلة ذات قيمة خاصة في الصناعات المنظّمة لأنها تُلزم باستخراج بيانات متسق وسجلات تدقيق وتوثيق امتثال.** تختلف المتطلبات باختلاف المناطق:',
          ],
          items: [
            '**الاتحاد الأوروبي (GDPR، قانون الذكاء الاصطناعي)**: المخرجات المهيكلة تتيح التصنيف المنهجي للبيانات وتتبع حق الحذف. وضع JSON يُتيح وسم الحقول التي تحتوي على بيانات شخصية، مما يُسهّل تقييمات أثر حماية البيانات وعمليات تدقيق الامتثال.',
            '**دول الخليج العربي والعالم العربي (أطر الامتثال المحلية)**: يدعم الاستخراج المهيكل مع تعريفات مخطط واضحة متطلبات الشفافية والمساءلة. يتيح وضع JSON تصنيف المحتوى الحساس بشكل منهجي للامتثال للوائح المحلية.',
            '**الأسواق الناشئة (متطلبات إقامة البيانات)**: المخرجات المهيكلة تُساعد في إدارة إقامة البيانات وتسجيل المحتوى. وضع JSON يُتيح التصنيف المنهجي للبيانات الخاضعة لمتطلبات التخزين المحلية.',
          ],
        },
        commonMistakes: {
          title: 'الأخطاء الشائعة',
          content: [
            '**تجنّب هذه الأخطاء الشائعة عند تنفيذ المخرجات المهيكلة ووضع JSON:**',
          ],
          items: [
            '**مخططات غامضة**: قول "استخرج النقاط الرئيسية" دون تحديد مخطط يؤدي إلى مخرجات غير متسقة. حدّد دائماً أسماء الحقول والأنواع والقيود الدقيقة.',
            '**غياب الأمثلة**: توفير وصف المخطط فقط دون أمثلة يسبب معدلات فشل 20–30٪. أظهر دائماً 1–3 أمثلة على مخرجات صالحة.',
            '**عدم التحقق من المخرج**: افتراض أن النموذج سيُعيد دائماً JSON صالحاً يؤدي إلى أخطاء تحليل في الإنتاج. تحقق دائماً وتعامل مع إخفاقات التحليل بلطف.',
            '**عدم معالجة الحالات الحافة**: الحقول التي قد تكون مفقودة أو غامضة أو خارج النطاق يجب أن يكون لها سلوك احتياطي محدد (null أو سلسلة فارغة أو قيمة افتراضية).',
            '**الاختبار بمدخلات سهلة فقط**: بيانات العالم الحقيقي فوضوية. اختبر مخططك مع الحالات الحافة: رسائل بريد إلكتروني ناقصة وأحرف خاصة ولغات مختلطة ومدخلات طويلة جداً.',
          ],
        },
        whenToUseJsonMode: {
          title: 'متى تستخدم وضع JSON مقابل البدائل',
          content: [
            '**اختر وضع JSON عندما تحتاج إلى إلزام صارم بالمخطط ومخرجات حتمية. تجنّبه عندما تكون الإبداعية والتفكير المفتوح هو ما يهم.**',
          ],
          items: [
            '**✓ استخدم وضع JSON**: مطلوب مخطط صارم وخطوط أنابيب أتمتة وتكامل واجهات برمجة التطبيقات واستخراج البيانات ومهام التصنيف والمخرجات الحتمية والأنظمة الإنتاجية التي تتطلب التحقق.',
            '**✗ تجنّب وضع JSON**: الكتابة الإبداعية والتفكير المفتوح والعصف الذهني والمقالات وتوليد الكود (استدعاء الوظائف أفضل) والأسئلة الفلسفية والمحتوى السردي.',
            '**البديل: استخدم استدعاء الوظائف** عندما تحتاج إلى تكامل الأدوات وسير العمل العملياتي (النموذج يختار أي وظيفة يستدعي).',
            '**البديل: استخدم برومبت المخطط** عندما تحتاج إلى مرونة أو تعمل مع نماذج مفتوحة المصدر أو لا تحتاج إلى ضمانات على مستوى واجهة برمجة التطبيقات.',
          ],
        },
        whenToUseStructuredOutput: {
          title: 'متى يجب استخدام المخرجات المهيكلة؟',
          content: [
            '**تتألق المخرجات المهيكلة في ثلاثة سيناريوهات رئيسية. استخدمها عندما تحتاج نتائج حتمية وقابلة للقراءة الآلية:**',
          ],
          items: [
            '**واجهات برمجة التطبيقات والتكامل**: وصّل مخرج النموذج اللغوي مباشرة بالأنظمة اللاحقة (قواعد البيانات وأنظمة CRM ولوحات التحكم). المخرجات المهيكلة تمنع أخطاء التحليل والتنظيف اليدوي. مثال: استخراج بيانات العملاء من رسائل البريد الإلكتروني وكتابتها في نظام CRM.',
            '**الأتمتة وسير العمل**: تفعيل الإجراءات بناءً على حقول مخرج النموذج (الأولوية والإلحاح والفئة). وضع JSON يضمن استخراج موثوقاً للحقول للمنطق الشرطي. مثال: توجيه تذاكر الدعم حسب مستوى الإلحاح.',
            '**خطوط أنابيب البيانات**: معالجة البيانات بالجملة (المستندات والرسائل الإلكترونية والسجلات) على نطاق واسع. المخططات المتسقة تُتيح المعالجة الدُفعية والتحقق ومعالجة الأخطاء. مثال: استخراج البيانات الوصفية من 10,000 مقالة بحثية في قاعدة بيانات قابلة للبحث.',
          ],
        },
        howToStart: {
          title: 'كيفية استخدام المخرجات المهيكلة ووضع JSON',
          numberedItems: [
            '**لاستخراج البيانات والمخرجات القابلة للقراءة الآلية، استخدم وضع JSON (متاح في OpenAI GPT-5.5 وAnthropic Claude وGoogle Gemini وغيرهم).** يضمن هذا أن يُعيد النموذج JSON صالحاً وليس نثراً. مثال: استخرج معلومات المنتج كـJSON بالمفاتيح: الاسم والسعر والوصف والتقييم.',
            '**عرّف مخطط JSON بشكل صريح بما في ذلك أسماء الحقول وأنواع البيانات والقيود.** مثال: { "name": string, "price": number (≥ 0), "in_stock": boolean, "tags": مصفوفة من السلاسل }.',
            '**وفّر مثالاً على بنية JSON الدقيقة التي تريدها.** مثال: { "issue": "memory leak", "severity": "critical", "suggested_fix": "...", "code_snippet": "..." }. الأمثلة أقوى من أوصاف المخططات.',
            '**للبنى المتداخلة (كائنات داخل مصفوفات)، كن صريحاً بشأن التسلسل الهرمي.** وفّر مثالاً كاملاً على JSON يتضمن مصفوفات متداخلة.',
            '**تحقق من مخرج JSON قبل استخدامه في الأنظمة اللاحقة.** حلّل JSON المُعاد وتحقق: (1) نحو JSON صالح، (2) جميع الحقول المطلوبة موجودة، (3) أنواع البيانات تطابق المتوقع. تعامل مع أخطاء التحليل بلطف.',
          ],
        },
        howToStep4Code: {
          content: [
            '**هنا مثال كامل على JSON مع مصفوفات متداخلة يُظهر التسلسل الهرمي الصحيح:**',
          ],
          codeBlock: '{\n  "articles": [\n    {\n      "title": "string",\n      "author": "string",\n      "citations": [\n        {\n          "title": "string",\n          "year": "number"\n        }\n      ]\n    }\n  ]\n}',
          codeLanguage: 'json',
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          content: [
            '**وسّع معرفتك بهذه المواضيع المرتبطة بهندسة البرومبت:**',
          ],
          items: [
            '[البرومبت بالقيود](/ar/prompt-engineering/constrained-prompting) — يُلزم بصيغ مخرج محددة وميزانيات رموز.',
            '[إطار SPECS](/ar/prompt-engineering/specs-framework) — برومبتات تركّز على المواصفات لسلوك موثوق للنموذج.',
            '[RAG موضَّح](/ar/prompt-engineering/rag-explained) — يجمع الاستخراج المهيكل مع استرداد البيانات في الوقت الحقيقي.',
            '[سلسلة الأفكار](/ar/prompt-engineering/chain-of-thought-prompting) — التفكير خطوة بخطوة قبل إعادة المخرجات المهيكلة.',
            '[قوالب البرومبت](/ar/prompt-engineering/prompt-documentation-templates) — أنماط قابلة لإعادة الاستخدام لمهام المخرجات المهيكلة الشائعة.',
            '[Zero-Shot مقابل Few-Shot](/ar/prompt-engineering/zero-shot-vs-few-shot) — متى تُحسّن الأمثلة (few-shot) امتثال JSON.',
            '[مطالبات للبيانات المنظمة الموثوقة](/ar/prompt-engineering/prompts-for-reliable-structured-data)',
          ],
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'ما الفرق بين المخرجات المهيكلة ووضع JSON؟', a: 'المخرجات المهيكلة هي الفئة الأوسع لطلب إعادة البيانات بصيغة ثابتة (قوائم أو جداول أو أزواج مفتاح-قيمة أو JSON). وضع JSON هو نوع أكثر صرامة يُلزم بمخرج JSON صالح، غالباً بضمانات على مستوى واجهة برمجة التطبيقات من مزود النموذج.' },
            { q: 'هل تدعم جميع النماذج اللغوية الكبيرة وضع JSON؟', a: 'لا. OpenAI GPT-5.5 وAnthropic Claude Sonnet 4.6+ وGoogle Gemini تدعم وضع JSON الأصيل. النماذج الأقدم والنماذج مفتوحة المصدر قد تتطلب تطبيقاً قائماً على البرومبت.' },
            { q: 'كيف أُلزم بردود JSON فقط بدون وضع JSON الأصيل؟', a: 'استخدم هندسة البرومبت: (1) صرّح صراحةً بـ"أعد JSON صالحاً فقط"، (2) وفّر مخططاً مفصلاً وأمثلة، (3) أضف تعليمة "لا تُدرج أي نص خارج JSON". معدلات النجاح تتحسن بشكل ملحوظ مع أمثلة جيدة.' },
            { q: 'ماذا يحدث إذا أعاد النموذج JSON غير صالح؟', a: 'تحقق من JSON من جهتك باستخدام محلل. إذا فشل، أعد المحاولة بطلب أكثر وضوحاً أو العودة إلى الاستخراج اليدوي. مع هندسة برومبت جيدة وأمثلة مخططات، معدلات الفشل منخفضة (عادةً < 5٪ للبرومبتات المصممة جيداً).' },
            { q: 'هل يمكن استخدام المخرجات المهيكلة للمستندات المعقدة؟', a: 'نعم. قسّم المهام المعقدة إلى خطوات: استخرج الحقول الرئيسية أولاً، ثم تحقق، ثم حوّل اختيارياً في الأنظمة اللاحقة. تقسيم المستندات الكبيرة ومعالجتها بشكل منفصل عادةً يُحسّن الموثوقية ويُقلّل استخدام الرموز.' },
            { q: 'كيف أتعامل مع البيانات المفقودة أو الغامضة في المخرجات المهيكلة؟', a: 'عرّف سلوك الاحتياطي في مخططك: استخدم سلاسل فارغة أو قيم null أو علامة خاصة مثل "مجهول". أضف التعليمة: "إذا كانت القيمة غامضة أو مفقودة، استخدم null بدلاً من التخمين."' },
            { q: 'هل وضع JSON متأثر بالامتثال التنظيمي (GDPR وما شابه)؟', a: 'وضع JSON في حد ذاته محايد. ومع ذلك، المخرجات المهيكلة مفيدة للامتثال لأنها تُتيح تتبع البيانات المستخرجة والمحوّلة والمسجلة بشكل منهجي، وهو أمر بالغ الأهمية لسجلات التدقيق.' },
            { q: 'كيف أختبر البرومبتات في وضع JSON؟', a: 'اختبر بمدخلات متنوعة: حالات حافة وبيانات غامضة وأمثلة من الواقع. حلّل المخرج وتحقق: (1) JSON صالح، (2) مخطط صحيح، (3) أنواع بيانات متوقعة. استهدف معدل نجاح ≥95٪ قبل النشر في الإنتاج.' },
            { q: 'هل يمكن إعادة استخدام مخططات المخرجات المهيكلة عبر النماذج المختلفة؟', a: 'نعم، مع الحذر. عرّف مخططك مرة واحدة واختبره على نماذج مختلفة؛ قد تحتاج إلى ضبط البرومبتات للنماذج الأقدم أو الأصغر. وثّق أي اختلافات خاصة بالنموذج ومعدلات النجاح.' },
            { q: 'ما تكلفة الأداء لوضع JSON؟', a: 'ضئيلة. وضع JSON الأصيل (OpenAI وAnthropic وGoogle) له تأثير أداء ضئيل جداً. التطبيق بالبرومبت فقط قد يُضيف زمن استجابة 5–10٪ بسبب تكاليف شرح المخطط، لكن مكاسب الأمان عادةً تُبرر ذلك.' },
          ],
        },
        sources: {
          title: 'المصادر',
          items: [
            '[توثيق وضع JSON من OpenAI](https://platform.openai.com/docs/guides/json-mode) — الدليل الرسمي لوضع JSON في واجهة برمجة تطبيقات OpenAI.',
            '[دليل المخرجات المهيكلة من Anthropic](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — توثيق Anthropic للمخرجات المهيكلة في Claude.',
            '[واجهة برمجة تطبيقات Google Gemini – المخرجات المهيكلة](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — دعم وضع JSON الأصيل من Google في Gemini 2.0.',
            '[مواصفة JSON Schema](https://json-schema.org/specification.html) — المواصفة القياسية لتصميم وتحقق JSON Schema.',
          ],
        },
      },
    },
    pt: {
      theme: 'Techniques',
      title: 'Saída Estruturada em LLMs: modo JSON, exemplos e quando usar',
      intro: 'A saída estruturada e o modo JSON transformam os resultados livres dos modelos de linguagem em formatos confiáveis e legíveis por máquinas que se integram diretamente em bancos de dados, APIs e fluxos de trabalho de automação. Aprenda a projetar prompts que forcem JSON válido, compare o modo JSON com chamadas de função e prompting com schema, e decida qual método se adapta ao seu caso de uso.',
      publishDate: '2026-03-26',
      readTime: '10 min de leitura',
      seoTitle: 'Saída estruturada e modo JSON em LLMs: uso, exemplos e comparação',
      metaDescription: 'Aprenda quando usar saída estruturada, modo JSON ou chamadas de função. Compare conformidade JSON por modelo, veja exemplos reais e domine o design de schema para APIs.',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Saída estruturada em LLMs: modo JSON, exemplos e quando usar',
        description: 'Domine a saída estruturada e o modo JSON em prompts. Aprenda a projetar schemas, impor JSON válido, comparar conformidade de modelos.',
        datePublished: '2026-03-26',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/structured-output-and-json-mode',
        inLanguage: 'pt-BR',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        keywords: ['saída estruturada', 'modo JSON', 'LLMs', 'JSON schema', 'prompt engineering', 'PromptQuorum'],
        'proficiencyLevel': 'Intermediate',
      },
      sections: {
        keyTakeaways: {
          isTldr: true,
          content: [ '**Principais pontos sobre saída estruturada:**' ],
          items: [
            '**Melhora a confiabilidade:** A saída estruturada reduz erros de análise ao impor schemas rígidos.',
            '**Habilita automação:** O modo JSON aciona lógica condicional baseada em campos extraídos.',
            '**Pronto para API:** Integração direta com bancos de dados, CRM e sistemas de negócios sem reformatação.',
            '**Dependente do modelo:** Modo JSON nativo disponível em GPT-5.5, Claude, Gemini.',
            '**Melhor para tarefas determinísticas:** APIs, automação, pipelines de dados.',
            '**Requer validação:** Sempre analise e verifique saída JSON antes de uso a jusante.',
          ],
        },
        whatIsStructured: {
          title: 'O que é saída estruturada',
          content: [
            '**Saída estruturada é o método de forçar modelos de linguagem a retornarem dados em um formato predefinido (como JSON).** Diferente do texto livre, ela impõe nomes de campos rígidos, tipos de dados e schemas que ferramentas downstream podem processar sem limpeza manual.',
          ],
        },
        whatIsJSON: {
          title: 'O que é o modo JSON',
          content: [
            '**O modo JSON é uma variante mais estrita de saída estruturada onde o modelo é instruído a retornar apenas JSON válido.** No modo JSON, tudo que o modelo produz deve ser analisável como JSON.',
          ],
          codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}',
          codeLanguage: 'json',
        },
        jsonVsFunctionCalling: {
          title: 'Modo JSON vs Chamadas de Função vs Prompting com Schema',
          content: [ '**Três abordagens existem para obter saída estruturada de LLMs.**' ],
          items: [
            '**Modo JSON:** O modelo produz apenas JSON válido. Melhor para: extração de dados, classificação, resumo.',
            '**Chamadas de função:** O modelo seleciona qual função chamar e fornece argumentos em JSON. Melhor para: integração de API, uso de ferramentas.',
            '**Prompting com schema:** Instruções explícitas + exemplos que exigem que o modelo siga um schema. Melhor para: flexibilidade, modelos locais, formatos personalizados.',
          ],
        },
        modelComparison: {
          title: 'Comparação de modelos: conformidade JSON por fornecedor',
          content: [ '**Diferentes modelos têm diferentes níveis de suporte ao modo JSON nativo.** A partir de abril de 2026:' ],
          columns: ['Modelo', 'Modo JSON nativo', 'Conformidade apenas com prompt', 'Notas'],
          rows: [
            { 'Modelo': 'OpenAI GPT-5.5', 'Modo JSON nativo': 'Sim (imposto)', 'Conformidade apenas com prompt': 'Não necessário', 'Notas': 'Padrão da indústria para modo JSON.' },
            { 'Modelo': 'Anthropic Claude Sonnet 4.6', 'Modo JSON nativo': 'Sim (imposto)', 'Conformidade apenas com prompt': 'Não necessário', 'Notas': 'Excelente conformidade JSON.' },
            { 'Modelo': 'Google Gemini 2.0', 'Modo JSON nativo': 'Sim (imposto)', 'Conformidade apenas com prompt': 'Não necessário', 'Notas': 'Suporte JSON nativo.' },
            { 'Modelo': 'Meta Llama 3.3 70B', 'Modo JSON nativo': 'Parcial', 'Conformidade apenas com prompt': 'Fortemente recomendado', 'Notas': 'Open-source.' },
            { 'Modelo': 'Modelos open-source pequenos (<13B)', 'Modo JSON nativo': 'Não', 'Conformidade apenas com prompt': 'Necessário com exemplos', 'Notas': 'Requerem schemas detalhados.' },
          ],
          tableFormat: true,
        },
        bestPractices: {
          title: 'Boas práticas',
          content: [
            '**Para obter saídas estruturadas confiáveis, você precisa ser explícito e rigoroso em seus prompts.** Para conformidade com LGPD/ANPD, a saída estruturada facilita o rastreamento de dados extraídos e transformados — essencial para organizações que processam dados pessoais de cidadãos brasileiros.',
          ],
          items: [
            'Mostre o schema exato que você espera.',
            'Declare claramente que apenas JSON deve ser retornado.',
            'Use nomes de chaves curtos e sem ambiguidade.',
            'Adicione exemplos de saídas válidas quando a tarefa é complexa.',
          ],
        },
        howToStart: {
          title: 'Como Implementar Saída Estruturada',
          numberedItems: [
            '**Defina seu schema antes de escrever o prompt.** Decida quais campos você precisa, seus tipos e quais são obrigatórios.',
            '**Use modo JSON da API quando disponível.** OpenAI, Anthropic e Google suportam parâmetros de modo JSON que previnem erros de análise.',
            '**Para dados críticos, use chamadas de função.** Chamadas de função impõem tipos e campos obrigatórios.',
            '**Sempre valide a saída.** Mesmo com modo JSON, valide contra seu schema esperado antes de processar os dados.',
            '**Inclua um exemplo de boa saída no prompt.** Modelos seguem exemplos melhor do que descrições abstratas de schema.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas Frequentes',
          faqs: [
            { q: 'O modo JSON garante o schema correto?', a: 'Não completamente. O modo JSON garante JSON sintaticamente correto, mas não impõe campos específicos. Use chamadas de função para schema crítico.' },
            { q: 'Como lido com JSON inválido de LLMs?', a: 'Três estratégias: (1) use modo JSON da API, (2) adicione retry automático, (3) use chamadas de função para schema crítico.' },
            { q: 'O modo JSON é afetado pela conformidade com LGPD?', a: 'O modo JSON em si é neutro. Mas a saída estruturada beneficia a conformidade porque permite rastrear sistematicamente dados extraídos, transformados e registrados — requisito da LGPD para dados pessoais.' },
          ],
        },
        relatedReading: {
          title: 'Leituras Relacionadas',
          items: [
            '[Framework SPECS](/pt/prompt-engineering/specs-framework)',
            '[Prompts Restritos](/pt/prompt-engineering/constrained-prompting)',
            '[Prompts para Dados Estruturados Confiáveis](/pt/prompt-engineering/prompts-for-reliable-structured-data)',
          ],
        },
        sources: {
          title: 'Fontes',
          items: [
            '[Documentação modo JSON OpenAI](https://platform.openai.com/docs/guides/json-mode)',
            '[Guia Anthropic](https://docs.anthropic.com)',
            '[API Google Gemini](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode)',
            '[Especificação JSON Schema](https://json-schema.org/specification.html)',
          ],
        },
      },
    },
    fr: { theme: 'Techniques', title: 'Sortie structuree dans les LLM : mode JSON, exemples et utilisation', intro: 'La sortie structuree et le mode JSON transforment les resultats libres des modeles linguistiques en formats fiables et lisibles par machine qui s\'integrent parfaitement aux bases de donnees, aux API et aux workflows d\'automatisation. Apprenez a concevoir des prompts qui forcent une sortie JSON valide, comparez le mode JSON avec les appels de fonction et les prompts de schema, et decidez quelle methode convient a votre cas d\'usage.', publishDate: '2026-03-26', dateModified: '2026-04-05', readTime: '10 min de lecture', seoTitle: 'Sortie structuree et mode JSON dans les LLM : utilisation, exemples et comparaison', metaDescription: 'Apprenez quand utiliser la sortie structuree, le mode JSON ou les appels de fonction. Comparez la conformite JSON par modele, voyez des exemples reels et maitrisez la conception de schemas pour les API.', educationalLevel: 'Intermediate', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Sortie structuree et mode JSON : obtenir des donnees utilisables de l\'IA', description: 'Maitrisez la sortie structuree et le mode JSON dans les prompts. Apprenez a concevoir des schemas, a imposer un JSON valide, a comparer la conformite des modeles et a eviter les erreurs courantes dans les systemes de production.', datePublished: '2026-03-26', dateModified: '2026-04-05', keywords: ['sortie structuree', 'mode JSON', 'ingenierie des prompts', 'conception de schemas', 'sortie lisible par machine', 'validation JSON', 'modeles de prompts'], author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } }, howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Comment utiliser la sortie structuree et le mode JSON', step: [ { '@type': 'HowToStep', position: 1, name: 'Choisir le mode JSON', text: 'Pour l\'extraction de donnees et les sorties lisibles par machine, utilisez le mode JSON disponible dans OpenAI GPT-5.5, Anthropic Claude, Google Gemini et autres fournisseurs majeurs. Cela garantit que le modele renvoie un JSON valide, pas du texte.' }, { '@type': 'HowToStep', position: 2, name: 'Definir votre schema', text: 'Definissez explicitement votre schema JSON, y compris les noms de champs, les types de donnees et les contraintes.' }, { '@type': 'HowToStep', position: 3, name: 'Fournir un exemple de sortie', text: 'Fournissez un exemple de la structure JSON exacte que vous voulez. Les exemples sont plus puissants que les descriptions de schemas seules.' }, { '@type': 'HowToStep', position: 4, name: 'Gerer les structures imbriquees', text: 'Pour les objets dans les tableaux, soyez explicite sur la hierarchie. Fournissez un exemple JSON complet.' }, { '@type': 'HowToStep', position: 5, name: 'Valider la sortie JSON', text: 'Validez la sortie JSON avant la use en aval. Analysez et verifiez le JSON valide, le schema correct, et les types de donnees attendus.' } ] }, faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: 'Quelle est la difference entre la sortie structuree et le mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'La sortie structuree est la categorie plus large de demander aux modeles de renvoyer des donnees dans un format fixe. Le mode JSON est une variante plus stricte qui impose une sortie JSON valide.' } }, { '@type': 'Question', name: 'Tous les LLM supportent-ils le mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ et Google Gemini supportent le mode JSON natif. Les modeles plus anciens et les LLM open-source peuvent necessiter l\'application du mode JSON basee sur les prompts.' } }, { '@type': 'Question', name: 'Comment imposer des reponses JSON uniquement sans mode JSON natif ?', acceptedAnswer: { '@type': 'Answer', text: 'Utilisez l\'ingenierie des prompts : declarez explicitement "sortie uniquement du JSON valide", fournissez un schema detaille et des exemples.' } }, { '@type': 'Question', name: 'Que se passe-t-il si le modele renvoie un JSON invalide ?', acceptedAnswer: { '@type': 'Answer', text: 'Validez le JSON de votre cote avec un analyseur. En cas d\'echec, reessayez la demande avec un prompt plus clair ou revenez a l\'extraction manuelle.' } }, { '@type': 'Question', name: 'Puis-je utiliser la sortie structuree pour des documents complexes ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Divisez les taches complexes en etapes : d\'abord extraire les champs cles, puis valider, puis optionnellement transformer dans les systemes en aval.' } }, { '@type': 'Question', name: 'Comment gerer les donnees manquantes ou ambigues dans les sorties structurees ?', acceptedAnswer: { '@type': 'Answer', text: 'Definissez le comportement de secours dans votre schema : utilisez des chaines vides, des valeurs null ou un marqueur special comme "inconnu".' } }, { '@type': 'Question', name: 'Le mode JSON est-il affecte par la conformite reglementaire (RGPD, CCPA) ?', acceptedAnswer: { '@type': 'Answer', text: 'Le mode JSON lui-meme est neutre. Cependant, la sortie structuree est benefique pour la conformite car elle vous permet de suivre systematiquement les donnees extraites.' } }, { '@type': 'Question', name: 'Comment tester les prompts en mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'Testez avec des entrees diversifiees : cas limites, donnees ambigues et exemples du monde reel. Analysez la sortie et verifiez le JSON valide.' } }, { '@type': 'Question', name: 'Puis-je reutiliser les schemas de sortie structuree sur differents modeles ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, avec prudence. Definissez votre schema une fois et testez-le sur les modeles, vous devrez peut-etre ajuster les prompts pour les modeles plus anciens.' } }, { '@type': 'Question', name: 'Quel est le cout de performance du mode JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'Minimal. Le mode JSON natif (OpenAI, Anthropic, Google) a un impact de performance negligeable.' } } ] }, sections: { definition: { content: [ '**La sortie structuree est une methode de forcer les modeles linguistiques a renvoyer les donnees dans un format predefini (par exemple JSON).** Elle differe du texte libre en imposant des noms de champs stricts, des types de donnees et des schemas que les outils en aval peuvent traiter sans nettoyage manuel.' ] }, exampleBlock: { content: [ 'Voici un exemple simple de sortie structuree au format JSON :' ], codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}', codeLanguage: 'json' }, keyTakeaways: { isTldr: true, content: [ '**Points cles : ce que vous devez savoir sur la sortie structuree :**' ], items: [ '**Ameliore la fiabilite** : la sortie structuree reduit les erreurs d\'analyse en imposant des schemas stricts.', '**Active l\'automatisation** : le mode JSON declenche la logique conditionnelle basee sur les champs extraits.', '**Pret pour l\'API** : integration directe aux bases de donnees, CRM et systemes metier sans reformatage.', '**Dependant du modele** : le mode JSON natif est disponible dans GPT-5.5, Claude, Gemini.', '**Meilleur pour les taches deterministes** : API, automatisation, pipelines de donnees.', '**Necessite la validation** : analysez et validez toujours la sortie JSON avant utilisation en aval.', '**Echelle entre les modeles** : definissez le schema une fois ; testez et documentez les differences.' ] }, whatIsStructured: { title: 'Qu\'est-ce que la sortie structuree', content: [ '**La sortie structuree signifie demander au modele de suivre un schema fixe.** Au lieu d\'un paragraphe libre, vous definissez les champs, les types et les valeurs autorisees.', 'La sortie structuree peut prendre plusieurs formes :' ], items: [ 'Listes a puces avec un nombre fixe d\'elements.', 'Tableaux Markdown avec colonnes specifiques.', 'Paires cle-valeur pour les attributs simples.', 'Objets ou tableaux JSON complets avec des cles predefinies.' ] }, structuredGoal: { content: [ 'L\'objectif est toujours le meme : transformer une description floue en une forme previsible.' ] }, whatIsJSON: { title: 'Qu\'est-ce que le mode JSON', content: [ '**Le mode JSON est une variante plus stricte de la sortie structuree ou le modele est invite a renvoyer uniquement du JSON valide.** En mode JSON, tout ce que le modele produit devrait etre analysable en JSON.', 'Un schema JSON typique pourrait ressembler a ceci :' ], codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}', codeLanguage: 'json' }, jsonModeApproach: { content: [ 'Vous refletez ce schema dans votre prompt, puis demandez au modele de le remplir. Certaines plates-formes fournissent egalement des parametres speciaux ou des API.' ] }, whyItMatterns: { title: 'Pourquoi la sortie structuree et le mode JSON sont importants', content: [ '**La sortie structuree et le mode JSON sont importants parce qu\'ils vous permettent de transformer les modeles linguistiques en composants de systemes plus larges.** Quand la sortie est previsible, vous pouvez :' ], items: [ 'Alimenter les resultats directement dans les bases de donnees, CRM ou outils d\'analyse.', 'Declencheur des automations basees sur des champs comme "priorite", "statut" ou "confiance".', 'Creer des interfaces utilisateur qui affichent les resultats du modele.' ] }, jsonVsFunctionCalling: { title: 'Mode JSON vs Appels de fonction vs Prompts de schema', content: [ '**Trois methodes existent pour obtenir une sortie structuree des LLM.**' ], items: [ '**Mode JSON** : le modele ne produit que du JSON valide.', '**Appels de fonction** : le modele selectionne quelle fonction appeler et fournit des arguments en JSON.', '**Prompts de schema** : instructions explicites + exemples.' ] }, example: { title: 'Exemple : texte libre vs JSON structure', content: [ '**La difference devient claire quand vous comparez un prompt texte libre avec un prompt JSON structure.** Ici, nous classons et resumons un email client.', '**[Mauvais prompt]**', '"Lisez cet email client et resumez ce qu\'ils veulent."', '**[Bon prompt – Mode JSON]**', '"Vous etes un assistant de support client."', 'La version "bonne" definit le schema, les valeurs valides et l\'exigence JSON uniquement.' ] }, bestPractices: { title: 'Meilleures pratiques', content: [ '**Pour obtenir des sorties structurees fiables, vous devez etre explicite et strict dans vos prompts.** Lorsque les données extraites ne peuvent pas quitter votre infrastructure, les mêmes patterns JSON-mode fonctionnent contre un store vectoriel local — voir [RAG local pour les données métier](/fr/power-local-llm/local-rag-for-private-business-data) pour l\'architecture conforme RGPD.' ], items: [ 'Montrez le schema exact que vous attendez.', 'Declarez clairement que rien d\'autre que le JSON ne doit etre retourne.', 'Utilisez des noms de cles courts et sans ambiguite.', 'Ajoutez des exemples de sorties valides quand la tache est complexe.', 'Pour les structures imbriquees, construisez-les etape par etape.' ] }, modelComparison: { title: 'Comparaison des modeles : conformite JSON par fournisseur', content: [ '**Differents modeles ont differents niveaux de support du mode JSON natif.** En avril 2026, voici comment se classent les principaux fournisseurs :' ], columns: [ 'Modele', 'Mode JSON natif', 'Conformite prompt seul', 'Notes' ], rows: [ { 'Modele': 'OpenAI GPT-5.5', 'Mode JSON natif': 'Oui (applique)', 'Conformite prompt seul': 'Non necessaire', 'Notes': 'Standard de l\'industrie.' }, { 'Modele': 'Anthropic Claude Sonnet 4.6', 'Mode JSON natif': 'Oui (applique)', 'Conformite prompt seul': 'Non necessaire', 'Notes': 'Conformite JSON excellente.' }, { 'Modele': 'Google Gemini 2.0', 'Mode JSON natif': 'Oui (applique)', 'Conformite prompt seul': 'Non necessaire', 'Notes': 'Support JSON natif.' }, { 'Modele': 'Meta Llama 3.3 70B', 'Mode JSON natif': 'Partiel', 'Conformite prompt seul': 'Fortement recommande', 'Notes': 'Open-source.' }, { 'Modele': 'Mistral Large', 'Mode JSON natif': 'Partiel', 'Conformite prompt seul': 'Recommande', 'Notes': 'Bon comportement JSON.' }, { 'Modele': 'Anciens GPT-3.5, Claude 2', 'Mode JSON natif': 'Non', 'Conformite prompt seul': 'Requis', 'Notes': 'Necessite une ingenierie forte.' }, { 'Modele': 'Petits modeles open-source (<13B)', 'Mode JSON natif': 'Non', 'Conformite prompt seul': 'Requis avec exemples', 'Notes': 'Necessitent des schemas detailles.' } ] }, relatedReading: { title: 'Lectures connexes', items: [ '[Prompts contraints](/fr/prompt-engineering/constrained-prompting) — imposer des formats.', '[Framework SPECS](/fr/prompt-engineering/specs-framework) — prompts axes sur la specification.', '[RAG explique](/fr/prompt-engineering/rag-explained) — combinez l\'extraction avec la recuperation.', '[Chaine de pensee](/fr/prompt-engineering/chain-of-thought-prompting) — raisonnez etape par etape.', '[Modeles de prompts](/fr/prompt-engineering/prompt-documentation-templates) — modeles reutilisables.', '[Zero-Shot vs Few-Shot](/fr/prompt-engineering/zero-shot-vs-few-shot) — quand les exemples ameliorent.', '[Prompts pour des données structurées fiables](/fr/prompt-engineering/prompts-for-reliable-structured-data)' ] }, faq: { title: 'Questions frequemment posees', faqs: [ { q: 'Quelle est la difference entre la sortie structuree et le mode JSON ?', a: 'La sortie structuree est la categorie plus large. Le mode JSON est une variante plus stricte.' }, { q: 'Tous les LLM supportent-ils le mode JSON ?', a: 'Non. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ et Google Gemini supportent le mode JSON natif.' }, { q: 'Comment imposer les reponses JSON uniquement ?', a: 'Utilisez l\'ingenierie des prompts : declarez explicitement "sortie uniquement du JSON valide".' }, { q: 'Que se passe-t-il si le modele renvoie un JSON invalide ?', a: 'Validez le JSON de votre cote. En cas d\'echec, reessayez ou revenez a l\'extraction manuelle.' }, { q: 'Puis-je utiliser la sortie structuree pour des documents complexes ?', a: 'Oui. Divisez les taches complexes en etapes.' }, { q: 'Comment gerer les donnees manquantes ?', a: 'Definissez le comportement de secours : utilisez des chaines vides, null ou un marqueur special.' }, { q: 'Le mode JSON est-il affecte par la conformite RGPD ?', a: 'Le mode JSON lui-meme est neutre. Mais la sortie structuree aide a la conformite.' }, { q: 'Comment tester les prompts en mode JSON ?', a: 'Testez avec des entrees diversifiees : cas limites, donnees ambigues et exemples reels.' }, { q: 'Puis-je reutiliser les schemas sur differents modeles ?', a: 'Oui, avec prudence. Testez-le sur les modeles et documentez les differences.' }, { q: 'Quel est le cout de performance du mode JSON ?', a: 'Minimal. Le mode JSON natif a un impact negligeable.' } ] }, sources: { title: 'Sources', items: [ '[Documentation mode JSON OpenAI](https://platform.openai.com/docs/guides/json-mode) — Guide officiel.', '[Guide Anthropic](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — Documentation.', '[API Google Gemini](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — Support JSON natif.', '[Specification JSON Schema](https://json-schema.org/specification.html) — Standard de conception.' ] } } },
    ja: { theme: 'テクニック', title: 'LLMの構造化出力：JSONモード、サンプル、使用タイミング', intro: '構造化出力とJSONモードは、言語モデルの出力を信頼性の高い機械可読フォーマットに変換し、データベース、API、自動化ワークフローにシームレスに統合できます。有効なJSONを強制するプロンプトの設計方法、JSONモード対関数呼び出し対スキーマプロンプティングの比較、およびユースケースに適した方法の選択方法を学びます。', publishDate: '2026-03-26', dateModified: '2026-04-05', readTime: '10分読む', seoTitle: 'LLMの構造化出力とJSONモード：使用時期、サンプル、比較', metaDescription: '構造化出力、JSONモード、関数呼び出しをいつ使用するかを学びます。モデル別のJSON準拠を比較し、実例を確認し、APIのスキーマ設計をマスターしてください。', educationalLevel: 'Intermediate', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '構造化出力とJSONモード：AIから使用可能なデータを取得', description: 'プロンプトで構造化出力とJSONモードをマスターします。スキーマ設計、有効なJSONの強制、モデル準拠の比較、および本番システムでの一般的なエラーの回避方法を学びます。', datePublished: '2026-03-26', dateModified: '2026-04-05', keywords: ['構造化出力', 'JSONモード', 'プロンプトエンジニアリング', 'スキーマ設計', '機械可読出力', 'JSON検証', 'プロンプトテンプレート'], author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } }, howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: '構造化出力とJSONモードの使用方法', step: [ { '@type': 'HowToStep', position: 1, name: 'JSONモードを選択', text: 'データ抽出と機械可読出力の場合、OpenAI GPT-5.5、Anthropic Claude、Google Geminiおよびその他の主要プロバイダで利用可能なJSONモードを使用します。これにより、モデルが有効なJSONを返すことが保証されます。' }, { '@type': 'HowToStep', position: 2, name: 'スキーマを定義', text: 'JSONスキーマを明示的に定義します。フィールド名、データタイプ、および制約を含めます。' }, { '@type': 'HowToStep', position: 3, name: '出力例を提供', text: '必要なJSON構造の例を提供します。例はスキーマの説明だけより強力です。' }, { '@type': 'HowToStep', position: 4, name: 'ネストされた構造を処理', text: '配列内のオブジェクトの場合、階層に関して明示的にします。完全なJSON例を提供します。' }, { '@type': 'HowToStep', position: 5, name: 'JSON出力を検証', text: 'ダウンストリームシステムで使用する前にJSON出力を検証します。有効なJSON、正しいスキーマ、期待されるデータタイプを確認します。' } ] }, faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: '構造化出力とJSONモードの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '構造化出力はモデルに固定フォーマットでデータを返すよう要求する広いカテゴリです。JSONモードはより厳密なバリアントで、有効なJSON出力を強制します。' } }, { '@type': 'Question', name: 'すべてのLLMがJSONモードをサポートしていますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。OpenAI GPT-5.5、Anthropic Claude Sonnet 4.6+、Google Geminiがネイティブjsonモードをサポートします。古いモデルとオープンソースLLMはプロンプトベースの適用が必要です。' } }, { '@type': 'Question', name: 'ネイティブJSONモードなしでJSON応答のみを強制するにはどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトエンジニアリングを使用します：「有効なJSONのみを出力」を明示的に宣言し、詳細なスキーマと例を提供します。' } }, { '@type': 'Question', name: 'モデルが無効なJSONを返す場合はどうなりますか？', acceptedAnswer: { '@type': 'Answer', text: 'JSONをサイドで検証します。失敗した場合、より明確なプロンプトでリクエストを再試行するか、手動抽出に戻ります。' } }, { '@type': 'Question', name: '複雑なドキュメントに構造化出力を使用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。複雑なタスクをステップに分割します：最初に主要フィールドを抽出し、次に検証し、オプションでダウンストリームシステムに変換します。' } }, { '@type': 'Question', name: '構造化出力で欠落しているまたは曖昧なデータを処理するにはどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: 'スキーマでフォールバック動作を定義します：空の文字列、null値、または「不明」などの特別なマーカーを使用します。' } }, { '@type': 'Question', name: 'JSONモードは規制遵守（GDPR、CCPA）の影響を受けますか？', acceptedAnswer: { '@type': 'Answer', text: 'JSONモード自体は中立的です。ただし、構造化出力は、抽出、変換、記録されたデータを体系的に追跡できるため、コンプライアンスに有益です。' } }, { '@type': 'Question', name: 'JSONモードプロンプトをテストするにはどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: '多様な入力でテストします：エッジケース、曖昧なデータ、実世界の例。有効なJSON、正しいスキーマ、予想されるデータタイプを確認します。' } }, { '@type': 'Question', name: 'さまざまなモデル全体で構造化出力スキーマを再利用できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、注意深く。スキーマを一度定義し、モデル全体でテストします。古いモデルや小さいモデルのプロンプト調整が必要な場合があります。' } }, { '@type': 'Question', name: 'JSONモードのパフォーマンスコストは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '最小限。ネイティブJSONモード（OpenAI、Anthropic、Google）はパフォーマンスへの影響がわずかです。' } } ] }, sections: { definition: { content: [ '**構造化出力は、言語モデルを強制して、定義済みフォーマット（JSONなど）でデータを返す方法です。** 自由形式のテキストとは異なり、ダウンストリームツールが手動クリーンアップなしで処理できる厳密なフィールド名、データタイプ、スキーマを強制します。' ] }, exampleBlock: { content: [ 'JSON形式での構造化出力の簡単な例を次に示します。' ], codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}', codeLanguage: 'json' }, keyTakeaways: { isTldr: true, content: [ '**重要なポイント：構造化出力について知っておくべきことが：**' ], items: [ '**信頼性の向上** : 構造化出力は、厳密なスキーマを強制することで、パースエラーと手動データクリーンアップを削減します。', '**自動化の有効化** : JSONモードは、抽出されたフィールド（優先度、カテゴリ、緊急度）に基づいて条件付きロジックをトリガーします。', '**API対応** : 再フォーマットなしでデータベース、CRM、ビジネスシステムへの直接統合。', '**モデル依存** : ネイティブJSONモードはGPT-5.5、Claude、Geminiで利用可能です。古いモデル/オープンソースモデルはプロンプトエンジニアリングが必要です。', '**決定論的タスクに最適** : API、自動化、データパイプライン。クリエイティブライティングは避けてください。', '**検証が必要** : ダウンストリーム使用前にJSON出力を常に検証および検証してください。', '**モデル全体でスケール** : スキーマを一度定義します。テストし、相違点を文書化します。' ] }, whatIsStructured: { title: '構造化出力とは', content: [ '**構造化出力とは、モデルに固定スキーマ（リスト、テーブル、JSONなど）に従うよう要求することです。** 自由形式の段落の代わりに、フィールド、タイプ、許可された値を定義します。', '構造化出力はいくつかの形式をとることができます：' ], items: [ '固定数のアイテムを含むブレットリスト。', '特定の列を持つMarkdownテーブル。', '単純な属性のキーと値のペア。', '事前定義されたキーを持つ完全なJSONオブジェクトまたは配列。' ] }, structuredGoal: { content: [ '目標は常に同じです：あいまいな説明を予測可能な形に変換することです。' ] }, whatIsJSON: { title: 'JSONモードとは', content: [ '**JSONモードは、モデルが有効なJSONのみを返すよう指示または構成される厳密な構造化出力バリアントです。** JSONモードでは、モデルが出力するすべてが追加のクリーンアップなしでJSONとして解析可能である必要があります。', '典型的なJSONスキーマは次のようになります：' ], codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}', codeLanguage: 'json' }, jsonModeApproach: { content: [ 'このスキーマをプロンプトに反映し、モデルにそれを入力するよう要求します。一部のプラットフォームはJSON のみの応答を強制する特別な設定またはAPIも提供します。' ] }, whyItMatters: { title: '構造化出力とJSONモードが重要な理由', content: [ '**構造化出力とJSONモードが重要な理由は、言語モデルを単なるチャットアシスタントではなく、より大きなシステムのコンポーネントに変換できるためです。** 出力が予測可能な場合、以下を実行できます：' ], items: [ 'データベース、CRM、分析ツールに結果を直接供給します。', 'モデル出力フィールド（優先度、ステータス、信頼度）に基づいてアクションをトリガーします。', 'カード、テーブル、ダッシュボードにモデル結果を表示するUIを構築します。' ] }, jsonVsFunctionCalling: { title: 'JSONモード対関数呼び出し対スキーマプロンプティング', content: [ '**LLMから構造化出力を取得するための3つのメソッドが存在します。それぞれ異なる強さと弱さを持っています。**' ], items: [ '**JSONモード** : モデルは有効なJSONのみを出力します。最適用途：データ抽出、分類、要約。', '**関数呼び出し** : モデルは呼び出す関数を選択し、JSONで引数を提供します。最適用途：API統合、ツール使用、エージェントワークフロー。', '**スキーマプロンプティング** : スキーマに従うようモデルに要求する明示的な指示と例。最適用途：柔軟性、オープンソースモデル、カスタムフォーマット。' ] }, example: { title: '例：自由テキスト対構造化JSON', content: [ '**同じタスクに対して自由形式のプロンプトと構造化JSONプロンプトを比較すると、違いが明確になります。** ここでは、顧客メールを分類および要約します。', '**[悪いプロンプト]**', '"この顧客メールを読んで、彼らが欲しいものを要約してください。"', '**[良いプロンプト - JSONモード]**', '"あなたはカスタマーサポートアシスタントです。"', '「良い」バージョンはスキーマ、有効な値、およびJSONのみの要件を定義します。' ] }, bestPractices: { title: '構造化出力とJSONモードのベストプラクティス', content: [ '**信頼性の高い構造化出力を取得するには、プロンプトで明示的、一貫性があり、厳密である必要があります。** 抽出データを社外インフラに出せない場合、同じ JSON モードのパターンはオンプレミスのベクトルストアでもそのまま機能します。GDPR 対応のデプロイテンプレートは、[業務データのためのローカル RAG](/ja/power-local-llm/local-rag-for-private-business-data)を参照してください。' ], items: [ '予期するスキーマを正確に表示します。' , '列挙の許可値を含めます。', 'JSON（または構造）のみを返す必要があることを明確に宣言してください。', '短くて曖昧でないキー名を使用します。', 'タスクが複雑または機密の場合は、有効な出力の例を追加します。', 'ネストされた構造については、段階的に構築し、実際の入力でテストしてください。' ] }, modelComparison: { title: 'モデル比較：プロバイダー別のJSON準拠', content: [ '**異なるモデルは、ネイティブJSONモードサポートのレベルが異なります。** 2026年4月現在、主要プロバイダーがどのようにランク付けされているかを次に示します：' ], columns: [ 'モデル', 'ネイティブJSONモード', 'プロンプトのみ準拠', '備考' ], rows: [ { 'モデル': 'OpenAI GPT-5.5', 'ネイティブJSONモード': 'はい（実施）', 'プロンプトのみ準拠': '不要', '備考': 'JSONモードの業界標準です。' }, { 'モデル': 'Anthropic Claude Sonnet 4.6', 'ネイティブJSONモード': 'はい（実施）', 'プロンプトのみ準拠': '不要', '備考': 'JSON準拠が優れています。' }, { 'モデル': 'Google Gemini 2.0', 'ネイティブJSONモード': 'はい（実施）', 'プロンプトのみ準拠': '不要', '備考': 'ネイティブJSONサポート。' }, { 'モデル': 'Meta Llama 3.3（70B）', 'ネイティブJSONモード': '部分的', 'プロンプトのみ準拠': '強く推奨', '備考': 'オープンソース。' }, { 'モデル': 'Mistral Large', 'ネイティブJSONモード': '部分的', 'プロンプトのみ準拠': '推奨', '備考': '良好なJSONの動作。' }, { 'モデル': '古いGPT-3.5、Claude 2', 'ネイティブJSONモード': 'いいえ', 'プロンプトのみ準拠': '必須', '備考': '強いエンジニアリングが必要です。' }, { 'モデル': '小さいオープンソースモデル（<13B）', 'ネイティブJSONモード': 'いいえ', 'プロンプトのみ準拠': '例に必須', '備考': '詳細なスキーマが必要です。' } ] }, relatedReading: { title: '関連読み物', items: [ '[制約付きプロンプト](/ja/prompt-engineering/constrained-prompting) — 特定の出力フォーマットを強制します。', '[SPECSフレームワーク](/ja/prompt-engineering/specs-framework) — 仕様重視のプロンプト。', '[RAG説明](/ja/prompt-engineering/rag-explained) — 構造化抽出とデータ取得を組み合わせます。', '[思考の連鎖](/ja/prompt-engineering/chain-of-thought-prompting) — ステップバイステップで理由を述べます。', '[プロンプトテンプレート](/ja/prompt-engineering/prompt-documentation-templates) — 再利用可能なテンプレート。', '[ゼロショット対フューショット](/ja/prompt-engineering/zero-shot-vs-few-shot) — 例がJSON準拠を改善するとき。', '[信頼性の高い構造化データのプロンプト](/ja/prompt-engineering/prompts-for-reliable-structured-data)' ] }, faq: { title: 'よくある質問', faqs: [ { q: '構造化出力とJSONモードの違いは何ですか？', a: '構造化出力はより広いカテゴリです。JSONモードはより厳密なバリアントです。' }, { q: 'すべてのLLMがJSONモードをサポートしていますか？', a: 'いいえ。OpenAI GPT-5.5、Anthropic Claude Sonnet 4.6+、Google Geminiがサポートしています。' }, { q: 'ネイティブJSONモードなしでJSON応答のみを強制するにはどうすればよいですか？', a: 'プロンプトエンジニアリング：「有効なJSONのみ」を宣言し、スキーマと例を提供します。' }, { q: 'モデルが無効なJSONを返す場合はどうなりますか？', a: 'JSONをサイドで検証します。失敗した場合は再試行するか、手動で戻ります。' }, { q: '複雑なドキュメントに構造化出力を使用できますか？', a: 'はい。複雑なタスクをステップに分割します。' }, { q: '欠落しているまたは曖昧なデータを処理するにはどうすればよいですか？', a: 'スキーマでフォールバック動作を定義します。' }, { q: 'JSONモードは規制遵守に影響を受けますか？', a: 'JSONモード自体は中立的です。しかし構造化出力はコンプライアンスに有益です。' }, { q: 'JSONモードプロンプトをテストするにはどうすればよいですか？', a: '多様な入力でテストします。本番前に95%以上の成功率を目指します。' }, { q: 'さまざまなモデル全体でスキーマを再利用できますか？', a: 'はい、注意深く。スキーマを定義してテストします。' }, { q: 'JSONモードのパフォーマンスコストは何ですか？', a: '最小限。ネイティブJSONモードはわずかな影響です。' } ] }, sources: { title: 'ソース', items: [ '[OpenAI JSONモードドキュメント](https://platform.openai.com/docs/guides/json-mode) — 公式ガイド。', '[Anthropicガイド](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — ドキュメント。', '[Google Gemini API](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — ネイティブJSONサポート。', '[JSON Schemaスペック](https://json-schema.org/specification.html) — 標準仕様。' ] } } },
  ko: {
    theme: 'Techniques',
    title: 'LLM의 구조화된 출력: JSON 모드, 예시 및 사용 시점',
    intro: '구조화된 출력과 JSON 모드는 언어 모델의 자유형 결과물을 신뢰할 수 있는 기계 판독 가능한 형식으로 변환하여 데이터베이스, API 및 자동화 워크플로우에 원활하게 통합될 수 있도록 합니다. 유효한 JSON을 강제하는 프롬프트를 설계하는 방법, JSON 모드와 함수 호출 및 스키마 프롬프팅을 비교하는 방법, 그리고 사용 사례에 적합한 방법을 결정하는 방법을 학습하십시오.',
    publishDate: '2026-03-26',
    dateModified: '2026-04-05',
    readTime: '10분 분량',
    seoTitle: 'LLM 구조화 출력과 JSON 모드: 완전 가이드',
    metaDescription: '구조화된 출력, JSON 모드 또는 함수 호출 중 언제 사용해야 하는지 학습하십시오. 모델별 JSON 준수를 비교하고 API용 스키마 설계를 마스터하십시오.',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '구조화된 출력과 JSON 모드: AI에서 사용 가능한 데이터 가져오기',
      description: '프롬프트에서 구조화된 출력과 JSON 모드를 마스터하십시오. 스키마 설계, 유효한 JSON 강제, 모델 준수 비교 및 프로덕션 시스템의 일반적인 오류를 피하는 방법을 학습하십시오.',
      datePublished: '2026-03-26',
      dateModified: '2026-04-05',
      keywords: ['구조화된 출력', 'JSON 모드', '프롬프트 엔지니어링', '스키마 설계', '기계 판독 가능한 출력', 'JSON 검증', '프롬프트 템플릿'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/ko/prompt-engineering/structured-output-and-json-mode',
      inLanguage: 'ko',
      'proficiencyLevel': 'Intermediate',
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '구조화된 출력과 JSON 모드 사용 방법',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'JSON 모드 선택', text: '데이터 추출 및 기계 판독 가능한 출력의 경우 OpenAI GPT-5.5, Anthropic Claude, Google Gemini 및 기타 주요 제공업체에서 사용할 수 있는 JSON 모드를 사용하십시오. 이렇게 하면 모델이 산문이 아닌 유효한 JSON을 반환하게 됩니다.' },
        { '@type': 'HowToStep', position: 2, name: '스키마 정의', text: '필드 이름, 데이터 유형 및 제약 조건을 포함하여 JSON 스키마를 명시적으로 정의하십시오.' },
        { '@type': 'HowToStep', position: 3, name: '출력 예시 제공', text: '원하는 정확한 JSON 구조의 예시를 제공하십시오. 예시는 스키마 설명만보다 더 강력합니다.' },
        { '@type': 'HowToStep', position: 4, name: '중첩된 구조 처리', text: '배열 내의 객체의 경우 계층 구조에 대해 명시적으로 설명하십시오. 중첩된 배열이 포함된 완전한 JSON 예시를 제공하십시오.' },
        { '@type': 'HowToStep', position: 5, name: 'JSON 출력 검증', text: '다운스트림 시스템에서 사용하기 전에 JSON 출력을 검증하십시오. 구문 분석하고 확인하십시오: (1) 유효한 JSON 문법, (2) 모든 필수 필드 존재, (3) 데이터 유형이 예상과 일치.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '구조화된 출력과 JSON 모드의 차이는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '구조화된 출력은 모델에 고정된 형식(목록, 표, 키-값 쌍 또는 JSON)으로 데이터를 반환하도록 요청하는 더 넓은 범주입니다. JSON 모드는 종종 API 수준 보장과 함께 유효한 JSON 출력을 강제하는 더 엄격한 변형입니다.' } },
        { '@type': 'Question', name: '모든 LLM이 JSON 모드를 지원합니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ 및 Google Gemini는 기본 JSON 모드를 지원합니다. 이전 모델 및 오픈 소스 LLM은 프롬프트 기반 적용이 필요할 수 있습니다.' } },
        { '@type': 'Question', name: '기본 JSON 모드 없이 JSON 전용 응답을 강제하는 방법은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링을 사용하십시오: (1) "유효한 JSON만 출력"을 명시적으로 선언, (2) 상세한 스키마와 예시 제공, (3) "JSON 외부에 텍스트를 포함하지 마십시오"와 같은 지시사항 추가.' } },
        { '@type': 'Question', name: '모델이 유효하지 않은 JSON을 반환하면 어떻게 됩니까?', acceptedAnswer: { '@type': 'Answer', text: '파서를 사용하여 JSON을 검증하십시오. 실패하면 더 명확한 프롬프트로 요청을 재시도하거나 수동 추출로 되돌아가십시오.' } },
        { '@type': 'Question', name: '복잡한 문서에 구조화된 출력을 사용할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '예. 복잡한 작업을 단계로 나누십시오: 먼저 핵심 필드를 추출한 다음 검증하고 선택적으로 다운스트림 시스템으로 변환하십시오.' } },
        { '@type': 'Question', name: '구조화된 출력에서 누락되거나 모호한 데이터를 처리하는 방법은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '스키마에서 대체 동작을 정의하십시오: 빈 문자열, null 값 또는 "unknown"과 같은 특수 마커를 사용하십시오. 지시사항을 추가하십시오: "값이 모호하면 추측하는 대신 null을 사용하십시오."' } },
        { '@type': 'Question', name: 'JSON 모드가 규정 준수(GDPR, CCPA)의 영향을 받습니까?', acceptedAnswer: { '@type': 'Answer', text: 'JSON 모드 자체는 중립적입니다. 그러나 구조화된 출력은 추출, 변환 및 기록된 데이터를 체계적으로 추적할 수 있으므로 규정 준수에 유익합니다.' } },
        { '@type': 'Question', name: 'JSON 모드 프롬프트를 테스트하는 방법은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '다양한 입력으로 테스트하십시오: 에지 케이스, 모호한 데이터 및 실제 예시. 출력을 구문 분석하고 확인하십시오: (1) 유효한 JSON, (2) 올바른 스키마, (3) 예상 데이터 유형. 프로덕션 배포 전 ≥95% 성공률을 목표로 하십시오.' } },
        { '@type': 'Question', name: '다양한 모델 간에 구조화된 출력 스키마를 재사용할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '예, 주의를 기울이십시오. 스키마를 한 번 정의하고 모델 간에 테스트하십시오. 이전 또는 소규모 모델에 대한 프롬프트 조정이 필요할 수 있습니다.' } },
        { '@type': 'Question', name: 'JSON 모드의 성능 비용은 얼마입니까?', acceptedAnswer: { '@type': 'Answer', text: '최소한입니다. 기본 JSON 모드(OpenAI, Anthropic, Google)는 성능에 미치는 영향이 미미합니다.' } },
      ],
    },
    toc: [
      { label: '구조화된 출력이란', anchor: '#what-structured-output-is' },
      { label: 'JSON 모드란', anchor: '#what-json-mode-is' },
      { label: '구조화된 출력과 JSON 모드가 중요한 이유', anchor: '#why-structured-output-and-json-mode-matter' },
      { label: '모델 비교: 제공업체별 JSON 준수', anchor: '#model-comparison-json-compliance-by-provider' },
      { label: 'JSON 모드 vs 함수 호출 vs 스키마 프롬프팅', anchor: '#json-mode-vs-function-calling-vs-schema-prompting' },
      { label: '예시: 자유 텍스트 vs 구조화된 JSON', anchor: '#example-free-text-vs-structured-json' },
      { label: '모범 사례', anchor: '#best-practices-for-structured-output-and-json-mode' },
      { label: '규제 환경에서의 구조화된 출력', anchor: '#structured-output-in-regulated-environments' },
      { label: '일반적인 실수', anchor: '#common-mistakes' },
      { label: 'JSON 모드 vs 대안 사용 시점', anchor: '#when-to-use-json-mode-vs-alternatives' },
      { label: '구조화된 출력을 언제 사용해야 합니까?', anchor: '#when-should-you-use-structured-output' },
      { label: '구조화된 출력과 JSON 모드 사용 방법', anchor: '#how-to-use-structured-output-and-json-mode' },
      { label: '관련 읽기', anchor: '#related-reading' },
      { label: '자주 묻는 질문', anchor: '#frequently-asked-questions' },
      { label: '출처', anchor: '#sources' },
    ],
    sections: {
      definition: {
        content: [
          '**구조화된 출력은 언어 모델이 사전 정의된 형식(예: JSON)으로 데이터를 반환하도록 강제하는 방법으로, 신뢰할 수 있는 파싱, 자동화 및 소프트웨어 시스템 통합을 가능하게 합니다.** 자유 형식 텍스트와 달리 다운스트림 도구가 수동 정리 없이 처리할 수 있는 엄격한 필드 이름, 데이터 유형 및 스키마를 강제합니다.',
        ],
      },
      exampleBlock: {
        content: [
          '다음은 JSON 형식의 구조화된 출력의 간단한 예시입니다:',
        ],
        codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}',
        codeLanguage: 'json',
      },
      keyTakeaways: {
        isTldr: true,
        content: [
          '**핵심 내용 — 구조화된 출력에 대해 알아야 할 사항:**',
        ],
        items: [
          '**신뢰성 향상**: 구조화된 출력은 엄격한 스키마를 강제하여 파싱 오류와 수동 데이터 정리를 줄입니다.',
          '**자동화 활성화**: JSON 모드는 추출된 필드(우선순위, 범주, 긴급도)를 기반으로 조건부 논리를 트리거합니다.',
          '**API 준비 완료**: 재포맷 없이 데이터베이스, CRM 및 비즈니스 시스템과 직접 통합됩니다.',
          '**모델 의존적**: 기본 JSON 모드는 GPT-5.5, Claude, Gemini에서 사용 가능합니다. 이전/오픈 소스 모델은 프롬프트 엔지니어링이 필요합니다.',
          '**결정론적 작업에 최적**: API, 자동화, 데이터 파이프라인. 창의적 글쓰기는 피하십시오.',
          '**검증 필요**: 다운스트림 사용 전에 항상 JSON 출력을 파싱하고 검증하십시오.',
          '**모델 간 확장 가능**: 스키마를 한 번 정의하고 OpenAI, Anthropic, Google 및 오픈 소스 제공업체 간의 차이를 테스트하고 문서화하십시오.',
        ],
      },
      whatIsStructured: {
        title: '구조화된 출력이란',
        content: [
          '**구조화된 출력은 다운스트림 도구가 결과를 안정적으로 파싱할 수 있도록 모델에 목록, 표 또는 JSON과 같은 고정된 스키마를 따르도록 요청하는 것을 의미합니다.** 자유 형식 단락 대신 필드, 유형 및 허용된 값을 정의합니다.',
          '구조화된 출력은 여러 형태를 취할 수 있습니다:',
        ],
        items: [
          '고정된 수의 항목이 있는 글머리 기호 목록.',
          '특정 열이 있는 Markdown 표.',
          '단순 속성을 위한 키-값 쌍.',
          '사전 정의된 키가 있는 완전한 JSON 객체 또는 배열.',
        ],
      },
      structuredGoal: {
        content: [
          '목표는 항상 동일합니다: 모호한 설명("회의에 대한 몇 가지 메모")을 예측 가능한 형태("제목, 날짜, 참석자, 결정사항, 위험요소")로 변환하는 것입니다.',
        ],
      },
      whatIsJSON: {
        title: 'JSON 모드란',
        content: [
          '**JSON 모드는 모델이 유효한 JSON만 반환하도록 지시 또는 구성되는 구조화된 출력의 더 엄격한 변형입니다.** JSON 모드에서는 모델이 출력하는 모든 것이 추가 정리 없이 JSON으로 파싱 가능해야 합니다.',
          '일반적인 JSON 스키마는 다음과 같습니다:',
        ],
        codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}',
        codeLanguage: 'json',
      },
      jsonModeApproach: {
        content: [
          '프롬프트에 해당 스키마를 반영하고 모델에 채우도록 요청합니다. 일부 플랫폼은 추가 주석을 줄이기 위해 JSON 전용 응답을 강제하는 특수 설정 또는 API도 제공합니다.',
        ],
      },
      whyItMatters: {
        title: '구조화된 출력과 JSON 모드가 중요한 이유',
        content: [
          '**구조화된 출력과 JSON 모드가 중요한 이유는 단순한 채팅 도우미가 아닌 더 큰 시스템의 구성 요소로 언어 모델을 변환할 수 있기 때문입니다.** 출력이 예측 가능하면 다음을 수행할 수 있습니다:',
        ],
        items: [
          '결과를 데이터베이스, CRM 또는 분석 도구에 직접 제공합니다.',
          '`priority`, `status` 또는 `confidence`와 같은 필드를 기반으로 자동화를 트리거합니다.',
          '수동 포맷 없이 카드, 표 또는 대시보드에 모델 결과를 표시하는 UI를 구축합니다.',
        ],
      },
      debuggingBenefit: {
        content: [
          '또한 프롬프트 디버깅을 더 쉽게 만듭니다. 구조가 깨지면 문제가 프롬프트나 스키마에 있다는 것을 알 수 있으며, "품질"이라는 모호한 차원이 아닙니다.',
        ],
      },
      jsonVsFunctionCalling: {
        title: 'JSON 모드 vs 함수 호출 vs 스키마 프롬프팅',
        content: [
          '**LLM에서 구조화된 출력을 얻기 위한 세 가지 방법이 존재합니다. 각각은 서로 다른 강점과 약점을 가지고 있습니다:**',
        ],
        items: [
          '**JSON 모드**: 모델이 유효한 JSON만 출력합니다. 최적 용도: 데이터 추출, 분류, 요약. 제약사항: 출력 형식에만 제한되며 도구 실행 없음.',
          '**함수 호출**: 모델이 호출할 함수를 선택하고 JSON으로 인수를 제공합니다. 최적 용도: API 통합, 도구 사용, 에이전틱 워크플로우. 제약사항: 사전 정의된 함수 스키마 필요.',
          '**스키마 프롬프팅**: 모델에 스키마를 따르도록 요청하는 명시적 지시사항과 예시. 최적 용도: 유연성, 오픈 소스 모델, 사용자 지정 형식. 제약사항: ~80–85% 신뢰성, API 수준 보장 없음.',
        ],
      },
      example: {
        title: '예시: 자유 텍스트 vs 구조화된 JSON',
        content: [
          '**동일한 작업에 대한 자유 형식 프롬프트와 구조화된 JSON 프롬프트를 비교하면 차이가 명확해집니다.** 여기서는 고객 이메일을 분류하고 요약합니다.',
          '**[나쁜 프롬프트]**',
          '"이 고객 이메일을 읽고 그들이 원하는 것을 요약하십시오."',
          '**[좋은 프롬프트 – JSON 모드]**',
          '"귀하는 고객 지원 담당자입니다. 아래 고객 이메일을 읽고 핵심 정보를 JSON 객체로 추출하십시오. 요구사항: 큰따옴표 키와 문자열 값을 사용하여 유효한 JSON만 출력하십시오. JSON 외부에 설명이나 추가 텍스트를 포함하지 마십시오. 값이 누락된 경우 빈 문자열을 사용하십시오. JSON 스키마: {\n  \"issue_type\": \"string\",\n  \"urgency\": \"low | medium | high\",\n  \"summary\": \"string (최대 25 단어)\",\n  \"customer_sentiment\": \"negative | neutral | positive\"\n} 고객 이메일: [이메일 텍스트 여기에 붙여넣기]"',
          '"좋은" 버전은 스키마, 유효한 값 및 JSON 전용 요구사항을 정의하여 출력을 파싱하고 다른 시스템에서 사용하기 쉽게 만듭니다.',
        ],
      },
      bestPractices: {
        title: '구조화된 출력과 JSON 모드의 모범 사례',
        content: [
          '**신뢰할 수 있는 구조화된 출력을 얻으려면 프롬프트에서 명시적이고 일관되며 엄격해야 합니다.** 몇 가지 관행이 많은 도움이 됩니다:',
        ],
        items: [
          '열거형에 대한 허용된 값을 포함하여 예상하는 정확한 스키마를 표시하십시오.',
          'JSON(또는 구조) 외에는 아무것도 반환되어서는 안 된다는 것을 명확히 명시하십시오.',
          '짧고 명확한 키 이름을 사용하십시오(예: `issue_type`, `urgency`, `summary`).',
          '작업이 복잡하거나 민감한 경우 유효한 출력의 예시를 추가하십시오.',
          '중첩된 구조의 경우 단계별로 구성하고 실제 입력으로 테스트하십시오.',
          '스키마를 프롬프트에 직접 인코딩하는 SPECS와 같은 명세 중심 프레임워크나 형식 제약이 있는 RTF를 사용하십시오.',
        ],
      },
      practicesAddendum: {
        content: [
          '여전히 포맷 문제가 발생하면 "확실하지 않은 경우 추측하는 대신 필드를 빈 문자열로 남겨두십시오."와 같은 간단한 지시사항을 추가할 수 있습니다. 구조화된 출력은 추출된 데이터를 팩트 체크하기 위한 RAG(검색 증강 생성)와 결합할 때 가장 잘 작동합니다. 추출된 데이터가 사내 인프라를 벗어날 수 없는 경우, 동일한 JSON 모드 패턴을 온프레미스 벡터 저장소에 연결할 수 있습니다.',
        ],
      },
      modelComparison: {
        title: '모델 비교: 제공업체별 JSON 준수',
        content: [
          '**다양한 모델은 기본 JSON 모드 지원 수준이 다릅니다.** 2026년 4월 기준, 주요 제공업체의 순위는 다음과 같습니다:',
        ],
        columns: ['모델', '기본 JSON 모드', '프롬프트 전용 준수', '비고'],
        rows: [
          { '모델': 'OpenAI GPT-5.5', '기본 JSON 모드': '예 (강제)', '프롬프트 전용 준수': '불필요', '비고': 'JSON 모드의 업계 표준; 99%+ 성공률.' },
          { '모델': 'Anthropic Claude Sonnet 4.6', '기본 JSON 모드': '예 (강제)', '프롬프트 전용 준수': '불필요', '비고': '우수한 JSON 준수; 복잡한 중첩 구조 지원.' },
          { '모델': 'Google Gemini 2.0', '기본 JSON 모드': '예 (강제)', '프롬프트 전용 준수': '불필요', '비고': '기본 JSON 지원; 빠른 추론.' },
          { '모델': 'Meta Llama 3.3 70B', '기본 JSON 모드': '부분적', '프롬프트 전용 준수': '강력 권장', '비고': '오픈 소스; 상세한 프롬프트와 예시로 잘 작동.' },
          { '모델': 'Mistral Large', '기본 JSON 모드': '부분적', '프롬프트 전용 준수': '권장', '비고': '양호한 JSON 동작; 특정 스키마로 테스트하십시오.' },
          { '모델': '이전 GPT-3.5, Claude 2', '기본 JSON 모드': '아니요', '프롬프트 전용 준수': '필요', '비고': '강력한 프롬프트 엔지니어링 필요; ~80–85% 성공률.' },
          { '모델': '소규모 오픈 소스 모델 (<13B)', '기본 JSON 모드': '아니요', '프롬프트 전용 준수': '예시와 함께 필요', '비고': '상세한 스키마와 여러 예시 필요; ~60–70% 성공률.' },
        ],
      },
      regulatedEnvironments: {
        title: '규제 환경에서의 구조화된 출력',
        content: [
          '**구조화된 출력은 일관된 데이터 추출, 감사 추적 및 규정 준수 문서를 강제하기 때문에 규제된 산업에서 특히 가치 있습니다.** 지역마다 다른 요구사항이 있습니다:',
        ],
        items: [
          '**EU (GDPR, AI 법)**: 구조화된 출력은 체계적인 데이터 분류 및 삭제권 추적을 가능하게 합니다. JSON 모드를 사용하면 어떤 필드에 개인 데이터가 포함되는지 태그를 지정하여 DPIA 및 규정 준수 감사를 용이하게 합니다.',
          '**일본 (METI AI 지침, APPI)**: 명확한 스키마 정의가 있는 구조화된 추출은 투명성 및 책임 요구사항을 지원합니다. 일본의 AI 법 준수는 종종 데이터 처리 방식을 문서화하도록 요구하며, 구조화된 출력은 명확한 감사 추적을 제공합니다.',
          '**중국 (CAC 규정, 데이터 보안법)**: 구조화된 출력은 콘텐츠 조정 및 데이터 거주 로깅에 도움이 됩니다. JSON 모드를 사용하면 CAC 표준 준수를 위해 민감한 콘텐츠(금융 데이터, 개인 정보)를 체계적으로 분류할 수 있습니다.',
        ],
      },
      commonMistakes: {
        title: '일반적인 실수',
        content: [
          '**구조화된 출력과 JSON 모드를 구현할 때 다음과 같은 빈번한 오류를 피하십시오:**',
        ],
        items: [
          '**모호한 스키마**: 스키마를 정의하지 않고 "핵심 포인트를 추출하십시오"라고 말하면 일관성 없는 출력이 발생합니다. 항상 정확한 필드 이름, 유형 및 제약 조건을 지정하십시오.',
          '**누락된 예시**: 예시 없이 스키마 설명만 제공하면 20–30% 실패율이 발생합니다. 항상 유효한 출력의 1–3개 예시를 제시하십시오.',
          '**출력 검증 실패**: 모델이 항상 유효한 JSON을 반환할 것이라고 가정하면 프로덕션에서 파싱 오류가 발생합니다. 항상 검증하고 파싱 실패를 우아하게 처리하십시오.',
          '**에지 케이스 미처리**: 누락되거나 모호하거나 범위를 벗어난 필드는 정의된 대체 동작(null, 빈 문자열 또는 기본값)이 있어야 합니다.',
          '**쉬운 입력으로만 테스트**: 실제 데이터는 지저분합니다. 에지 케이스로 스키마를 테스트하십시오: 불완전한 이메일, 특수 문자, 혼합 언어, 매우 긴 입력.',
        ],
      },
      whenToUseJsonMode: {
        title: 'JSON 모드 vs 대안 사용 시점',
        content: [
          '**엄격한 스키마 적용 및 결정론적 출력이 필요할 때 JSON 모드를 선택하십시오. 창의성과 개방형 추론이 중요할 때는 피하십시오.**',
        ],
        items: [
          '**✓ JSON 모드 사용**: 엄격한 스키마 필요, 자동화 파이프라인, API 통합, 데이터 추출, 분류 작업, 결정론적 출력, 검증이 필요한 프로덕션 시스템.',
          '**✗ JSON 모드 피하기**: 창의적 글쓰기, 개방형 추론, 브레인스토밍, 에세이, 코드 생성(함수 호출이 더 나음), 철학적 질문, 서술적 콘텐츠.',
          '**대안: 함수 호출 사용** 도구 통합 및 에이전틱 워크플로우가 필요할 때(모델이 호출할 함수를 선택).',
          '**대안: 스키마 프롬프팅 사용** 유연성이 필요하거나 오픈 소스 모델을 사용하거나 API 수준 보장이 필요하지 않을 때.',
        ],
      },
      whenToUseStructuredOutput: {
        title: '구조화된 출력을 언제 사용해야 합니까?',
        content: [
          '**구조화된 출력은 세 가지 주요 시나리오에서 빛을 발합니다. 결정론적이고 기계 판독 가능한 결과가 필요할 때 사용하십시오:**',
        ],
        items: [
          '**API 및 통합**: LLM 출력을 다운스트림 시스템(데이터베이스, CRM, 대시보드)에 직접 연결합니다. 구조화된 출력은 파싱 오류 및 수동 정리를 방지합니다. 예시: 이메일에서 고객 데이터를 추출하여 CRM에 작성.',
          '**자동화 및 워크플로우**: 모델 출력 필드(우선순위, 긴급도, 범주)를 기반으로 작업을 트리거합니다. JSON 모드는 조건부 논리를 위한 신뢰할 수 있는 필드 추출을 보장합니다. 예시: 긴급도 수준별로 지원 티켓 라우팅.',
          '**데이터 파이프라인**: 대규모로 대량 데이터(문서, 이메일, 로그)를 처리합니다. 일관된 스키마는 배치 처리, 검증 및 오류 처리를 가능하게 합니다. 예시: 10,000개의 연구 논문에서 메타데이터를 검색 가능한 데이터베이스로 추출.',
        ],
      },
      howToStart: {
        title: '구조화된 출력과 JSON 모드 사용 방법',
        numberedItems: [
          '**데이터 추출 및 기계 판독 가능한 출력의 경우 JSON 모드(OpenAI GPT-5.5, Anthropic Claude, Google Gemini 등에서 사용 가능)를 사용하십시오.** 이렇게 하면 모델이 산문이 아닌 유효한 JSON을 반환하게 됩니다. 예시: 제품 정보를 키(이름, 가격, 설명, 평점)가 있는 JSON으로 추출.',
          '**필드 이름, 데이터 유형 및 제약 조건을 포함하여 JSON 스키마를 명시적으로 정의하십시오.** 예시: { "name": string, "price": number (≥ 0), "in_stock": boolean, "tags": array of strings }.',
          '**원하는 정확한 JSON 구조의 예시를 제공하십시오.** 예시: { "issue": "memory leak", "severity": "critical", "suggested_fix": "...", "code_snippet": "..." }. 예시는 스키마 설명보다 더 강력합니다.',
          '**중첩된 구조(배열 내의 객체)의 경우 계층 구조에 대해 명시적으로 설명하십시오.** 중첩된 배열을 포함한 완전한 JSON 예시를 제공하십시오.',
          '**다운스트림 시스템에서 사용하기 전에 JSON 출력을 검증하십시오.** 반환된 JSON을 파싱하고 확인하십시오: (1) 유효한 JSON 문법, (2) 모든 필수 필드 존재, (3) 데이터 유형이 예상과 일치. 파싱 오류를 우아하게 처리하십시오.',
        ],
      },
      howToStep4Code: {
        content: [
          '**다음은 올바른 계층 구조를 보여주는 중첩된 배열이 있는 완전한 JSON 예시입니다:**',
        ],
        codeBlock: '{\n  "articles": [\n    {\n      "title": "string",\n      "author": "string",\n      "citations": [\n        {\n          "title": "string",\n          "year": "number"\n        }\n      ]\n    }\n  ]\n}',
        codeLanguage: 'json',
      },
      relatedReading: {
        title: '관련 읽기',
        content: [
          '**관련 프롬프트 엔지니어링 주제로 지식을 확장하십시오:**',
        ],
        items: [
          '[제약 프롬프팅](/ko/prompt-engineering/constrained-prompting) — 특정 출력 형식 및 토큰 예산을 강제합니다.',
          '[SPECS 프레임워크](/ko/prompt-engineering/specs-framework) — 신뢰할 수 있는 모델 동작을 위한 명세 중심 프롬프트.',
          '[RAG 설명](/ko/prompt-engineering/rag-explained) — 구조화된 추출과 실시간 데이터 검색을 결합합니다.',
          '[Chain of Thought](/ko/prompt-engineering/chain-of-thought-prompting) — 구조화된 출력을 반환하기 전에 단계별로 추론합니다.',
          '[프롬프트 템플릿](/ko/prompt-engineering/prompt-documentation-templates) — 일반적인 구조화된 출력 작업을 위한 재사용 가능한 패턴.',
          '[Zero-Shot vs Few-Shot](/ko/prompt-engineering/zero-shot-vs-few-shot) — 예시(few-shot)가 JSON 준수를 향상시키는 시점 이해.',
          '[신뢰할 수 있는 구조화 데이터를 위한 프롬프트](/ko/prompt-engineering/prompts-for-reliable-structured-data)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '구조화된 출력과 JSON 모드의 차이는 무엇입니까?', a: '구조화된 출력은 모델에 고정된 형식(목록, 표, 키-값 쌍 또는 JSON)으로 데이터를 반환하도록 요청하는 더 넓은 범주입니다. JSON 모드는 종종 모델 제공업체의 API 수준 보장과 함께 유효한 JSON 출력을 강제하는 더 엄격한 변형입니다.' },
          { q: '모든 LLM이 JSON 모드를 지원합니까?', a: '아닙니다. OpenAI GPT-5.5, Anthropic Claude Sonnet 4.6+ 및 Google Gemini는 기본 JSON 모드를 지원합니다. 이전 모델 및 오픈 소스 LLM은 프롬프트 기반 적용이 필요할 수 있습니다(예: 지시사항과 예시에 스키마 지정).' },
          { q: '기본 JSON 모드 없이 JSON 전용 응답을 강제하는 방법은 무엇입니까?', a: '프롬프트 엔지니어링을 사용하십시오: (1) "유효한 JSON만 출력"을 명시적으로 선언, (2) 상세한 스키마와 예시 제공, (3) "JSON 외부에 텍스트를 포함하지 마십시오"와 같은 지시사항 추가. 좋은 예시로 성공률이 크게 향상됩니다.' },
          { q: '모델이 유효하지 않은 JSON을 반환하면 어떻게 됩니까?', a: '파서를 사용하여 JSON을 검증하십시오. 실패하면 더 명확한 프롬프트로 요청을 재시도하거나 수동 추출로 되돌아가십시오. 강력한 프롬프트 엔지니어링과 스키마 예시로 실패율이 낮습니다(잘 설계된 프롬프트에서 일반적으로 <5%).' },
          { q: '복잡한 문서에 구조화된 출력을 사용할 수 있습니까?', a: '예. 복잡한 작업을 단계로 나누십시오: 먼저 핵심 필드를 추출한 다음 검증하고 선택적으로 다운스트림 시스템으로 변환하십시오. 대용량 문서를 청크로 나누고 별도로 처리하면 신뢰성이 향상되고 토큰 사용량이 줄어드는 경우가 많습니다.' },
          { q: '구조화된 출력에서 누락되거나 모호한 데이터를 처리하는 방법은 무엇입니까?', a: '스키마에서 대체 동작을 정의하십시오: 빈 문자열, null 값 또는 "unknown"과 같은 특수 마커를 사용하십시오. 지시사항을 추가하십시오: "값이 모호하거나 누락된 경우 추측하는 대신 null을 사용하십시오."' },
          { q: 'JSON 모드가 규정 준수(GDPR, CCPA)의 영향을 받습니까?', a: 'JSON 모드 자체는 중립적입니다. 그러나 구조화된 출력은 추출, 변환 및 기록된 데이터를 체계적으로 추적할 수 있어 감사 추적 및 규정 보고에 중요하므로 규정 준수에 유익합니다.' },
          { q: 'JSON 모드 프롬프트를 테스트하는 방법은 무엇입니까?', a: '다양한 입력으로 테스트하십시오: 에지 케이스, 모호한 데이터 및 실제 예시. 출력을 파싱하고 확인하십시오: (1) 유효한 JSON, (2) 올바른 스키마, (3) 예상 데이터 유형. 프로덕션 배포 전 ≥95% 성공률을 목표로 하십시오.' },
          { q: '다양한 모델 간에 구조화된 출력 스키마를 재사용할 수 있습니까?', a: '예, 주의를 기울이십시오. 스키마를 한 번 정의하고 모델 간에 테스트하십시오. 이전 또는 소규모 모델에 대한 프롬프트 조정이 필요할 수 있습니다. 모델별 차이점과 성공률을 문서화하십시오.' },
          { q: 'JSON 모드의 성능 비용은 얼마입니까?', a: '최소한입니다. 기본 JSON 모드(OpenAI, Anthropic, Google)는 성능에 미치는 영향이 미미합니다. 프롬프트 전용 적용은 스키마 설명 오버헤드로 인해 5–10% 지연 시간이 추가될 수 있지만 안전성 향상이 일반적으로 정당화됩니다.' },
        ],
      },
      sources: {
        title: '출처',
        items: [
          '[OpenAI JSON 모드 문서](https://platform.openai.com/docs/guides/json-mode) — OpenAI API의 JSON 모드에 대한 공식 가이드.',
          '[Anthropic 구조화된 출력 가이드](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — Claude의 구조화된 출력에 대한 Anthropic 문서.',
          '[Google Gemini API – 구조화된 출력](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — Gemini 2.0의 Google 기본 JSON 모드 지원.',
          '[JSON Schema 사양](https://json-schema.org/specification.html) — JSON Schema 설계 및 검증을 위한 표준 사양.',
        ],
      },
    },
  },
  zh: { theme: '技术', title: 'LLM中的结构化输出：JSON模式、示例及使用时机', intro: '结构化输出和JSON模式将语言模型的输出转变为可靠的机器可读格式，可以无缝集成到数据库、API和自动化工作流中。学习如何设计强制有效JSON输出的提示词，比较JSON模式与函数调用与架构提示词，并确定哪种方法适合您的用例。', publishDate: '2026-03-26', dateModified: '2026-04-05', readTime: '10分钟阅读', seoTitle: 'LLM中的结构化输出和JSON模式：何时使用、示例和比较', metaDescription: '学习何时使用结构化输出、JSON模式或函数调用。按模型比较JSON合规性，查看真实示例，掌握API的架构设计。', educationalLevel: 'Intermediate', schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: '结构化输出和JSON模式：从AI获取可用数据', description: '掌握提示词中的结构化输出和JSON模式。学习架构设计、强制有效JSON、比较模型合规性以及避免生产系统中的常见错误。', datePublished: '2026-03-26', dateModified: '2026-04-05', keywords: ['结构化输出', 'JSON模式', '提示词工程', '架构设计', '机器可读输出', 'JSON验证', '提示词模板'], author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' } }, howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: '如何使用结构化输出和JSON模式', step: [ { '@type': 'HowToStep', position: 1, name: '选择JSON模式', text: '对于数据提取和机器可读输出，请使用OpenAI GPT-5.5、Anthropic Claude、Google Gemini及其他主要提供商提供的JSON模式。这可确保模型返回有效的JSON，而不是文本。' }, { '@type': 'HowToStep', position: 2, name: '定义架构', text: '显式定义JSON架构。包括字段名称、数据类型和约束。' }, { '@type': 'HowToStep', position: 3, name: '提供输出示例', text: '提供您想要的确切JSON结构的示例。示例比架构描述本身更强大。' }, { '@type': 'HowToStep', position: 4, name: '处理嵌套结构', text: '对于数组中的对象，明确说明层次结构。提供完整的JSON示例。' }, { '@type': 'HowToStep', position: 5, name: '验证JSON输出', text: '在下游使用前验证JSON输出。检查有效的JSON、正确的架构和预期的数据类型。' } ] }, faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: '结构化输出和JSON模式之间有什么区别？', acceptedAnswer: { '@type': 'Answer', text: '结构化输出是要求模型以固定格式返回数据的更广泛类别。JSON模式是更严格的变体，强制有效的JSON输出。' } }, { '@type': 'Question', name: '所有LLM都支持JSON模式吗？', acceptedAnswer: { '@type': 'Answer', text: '否。OpenAI GPT-5.5、Anthropic Claude Sonnet 4.6+和Google Gemini支持原生JSON模式。较旧的模型和开源LLM可能需要基于提示词的应用。' } }, { '@type': 'Question', name: '在没有原生JSON模式的情况下如何强制仅JSON响应？', acceptedAnswer: { '@type': 'Answer', text: '使用提示词工程：明确声明"仅输出有效的JSON"，提供详细的架构和示例。' } }, { '@type': 'Question', name: '如果模型返回无效的JSON会发生什么？', acceptedAnswer: { '@type': 'Answer', text: '在您的一方验证JSON。如果失败，请用更清晰的提示词重试请求或回到手动提取。' } }, { '@type': 'Question', name: '我可以将结构化输出用于复杂的文档吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。将复杂任务分解成步骤：首先提取关键字段，然后验证，然后可选地转换为下游系统。' } }, { '@type': 'Question', name: '我如何处理结构化输出中缺失或模糊的数据？', acceptedAnswer: { '@type': 'Answer', text: '在架构中定义后备行为：使用空字符串、null值或特殊标记（如"未知"）。' } }, { '@type': 'Question', name: 'JSON模式是否受到监管合规性（GDPR、CCPA）的影响？', acceptedAnswer: { '@type': 'Answer', text: 'JSON模式本身是中立的。但是，结构化输出对合规性有益，因为它可以系统地跟踪提取、转换和记录的数据。' } }, { '@type': 'Question', name: '我如何测试JSON模式提示词？', acceptedAnswer: { '@type': 'Answer', text: '使用不同的输入进行测试：边界案例、模糊数据和真实示例。验证有效的JSON、正确的架构和预期的数据类型。' } }, { '@type': 'Question', name: '我可以在不同的模型中重复使用结构化输出架构吗？', acceptedAnswer: { '@type': 'Answer', text: '可以，但要谨慎。定义一次架构，在模型中测试。您可能需要为较旧或较小的模型调整提示词。' } }, { '@type': 'Question', name: 'JSON模式的性能成本是什么？', acceptedAnswer: { '@type': 'Answer', text: '最少。原生JSON模式（OpenAI、Anthropic、Google）的性能影响可以忽略不计。' } } ] }, sections: { definition: { content: [ '**结构化输出是强制语言模型以预定义格式（如JSON）返回数据的一种方法。** 它不同于自由形式文本，在于它强制严格的字段名称、数据类型和架构，下游工具可以毫不费力地处理。' ] }, exampleBlock: { content: [ '以下是JSON格式的结构化输出的简单示例：' ], codeBlock: '{\n  "task": "summarize",\n  "title": "Quick AI Guide",\n  "summary": "This article explains structured output and JSON mode.",\n  "key_points": ["JSON enforces format", "Reduces parsing errors", "Enables automation"],\n  "audience_level": "intermediate",\n  "confidence": 0.95\n}', codeLanguage: 'json' }, keyTakeaways: { isTldr: true, content: [ '**关键点：关于结构化输出您需要了解的内容：**' ], items: [ '**提高可靠性** : 结构化输出通过强制严格的架构来减少解析错误和手动数据清理。', '**启用自动化** : JSON模式基于提取的字段（优先级、类别、紧急性）触发条件逻辑。', '**API就绪** : 直接集成到数据库、CRM和业务系统，无需重新格式化。', '**取决于模型** : 原生JSON模式在GPT-5.5、Claude、Gemini中可用。旧型号/开源模式需要提示词工程。', '**最适合确定性任务** : API、自动化、数据管道。避免创意写作。', '**需要验证** : 始终在下游使用前验证和检查JSON输出。', '**跨模型扩展** : 定义一次架构；测试和记录差异。' ] }, whatIsStructured: { title: '什么是结构化输出', content: [ '**结构化输出意味着要求模型遵循固定的架构，例如列表、表格或JSON。** 而不是自由形式的段落，您定义字段、类型和允许的值。', '结构化输出可以采用多种形式：' ], items: [ '具有固定项数的项目符号列表。', '具有特定列的Markdown表格。', '简单属性的键值对。', '具有预定义键的完整JSON对象或数组。' ] }, structuredGoal: { content: [ '目标始终是相同的：将模糊的描述转换为可预测的形式。' ] }, whatIsJSON: { title: '什么是JSON模式', content: [ '**JSON模式是结构化输出的更严格变体，其中模型被指示或配置为仅返回有效的JSON。** 在JSON模式中，模型输出的所有内容都应该可以解析为JSON而无需额外的清理。', '典型的JSON架构可能如下所示：' ], codeBlock: '{\n  "title": "string",\n  "summary": "string",\n  "tags": ["string"],\n  "priority": "low | medium | high"\n}', codeLanguage: 'json' }, jsonModeApproach: { content: [ '您在提示词中反映该架构，然后要求模型填充它。某些平台也提供强制仅JSON响应的特殊设置或API。' ] }, whyItMatters: { title: '为什么结构化输出和JSON模式很重要', content: [ '**结构化输出和JSON模式很重要，因为它们使您能够将语言模型转变为更大系统的组件，而不仅仅是聊天助手。** 当输出是可预测的时，您可以：' ], items: [ '直接将结果提供给数据库、CRM或分析工具。', '基于模型输出字段（优先级、状态、信心）触发自动化。', '构建显示卡片、表格或仪表板中模型结果的用户界面。' ] }, jsonVsFunctionCalling: { title: 'JSON模式与函数调用与架构提示词', content: [ '**存在三种从LLM获取结构化输出的方法。每种都有不同的优缺点。**' ], items: [ '**JSON模式** : 模型仅输出有效的JSON。最佳用途：数据提取、分类、摘要。', '**函数调用** : 模型选择要调用的函数并以JSON提供参数。最佳用途：API集成、工具使用、代理工作流。', '**架构提示词** : 显式指令+要求模型遵循架构的示例。最佳用途：灵活性、开源模型、自定义格式。' ] }, example: { title: '示例：自由文本与结构化JSON', content: [ '**当您比较免费文本提示词和结构化JSON提示词完成相同任务时，差异变得明显。** 在这里，我们对客户电子邮件进行分类和汇总。', '**[错误的提示词]**', '"阅读此客户电子邮件并总结他们想要什么。"', '**[正确的提示词 - JSON模式]**', '"您是一名客户支持助理。"', '"正确"版本定义架构、有效值和仅JSON要求。' ] }, bestPractices: { title: '结构化输出和JSON模式的最佳做法', content: [ '**要获得可靠的结构化输出，您在提示词中需要明确、一致和严格。** 当抽取的数据不能离开自有基础设施时，同样的 JSON 模式模式也可以直接对接本地向量存储——要查看符合 GDPR 的部署模板，请参阅[面向企业数据的本地 RAG](/zh/power-local-llm/local-rag-for-private-business-data)。' ], items: [ '显示您期望的确切架构。', '声明仅应返回JSON或结构。', '使用简短、明确的键名称。', '当任务复杂或敏感时添加有效输出的示例。', '对于嵌套结构，逐步构建并使用真实输入进行测试。' ] }, modelComparison: { title: '模型比较：按提供商的JSON合规性', content: [ '**不同的模型对原生JSON模式支持的级别不同。** 截至2026年4月，以下是主要提供商的排名：' ], columns: [ '模型', '原生JSON模式', '仅提示词合规', '备注' ], rows: [ { '模型': 'OpenAI GPT-5.5', '原生JSON模式': '是（强制）', '仅提示词合规': '不需要', '备注': 'JSON模式的行业标准。' }, { '模型': 'Anthropic Claude Sonnet 4.6', '原生JSON模式': '是（强制）', '仅提示词合规': '不需要', '备注': 'JSON合规性优秀。' }, { '模型': 'Google Gemini 2.0', '原生JSON模式': '是（强制）', '仅提示词合规': '不需要', '备注': '原生JSON支持。' }, { '模型': 'Meta Llama 3.3（70B）', '原生JSON模式': '部分', '仅提示词合规': '强烈推荐', '备注': '开源。' }, { '模型': 'Mistral Large', '原生JSON模式': '部分', '仅提示词合规': '推荐', '备注': 'JSON行为良好。' }, { '模型': '旧GPT-3.5、Claude 2', '原生JSON模式': '否', '仅提示词合规': '必需', '备注': '需要强大的工程。' }, { '模型': '小型开源模型（<13B）', '原生JSON模式': '否', '仅提示词合规': '示例需要', '备注': '需要详细的架构。' } ] }, relatedReading: { title: '相关阅读', items: [ '[约束提示词](/zh/prompt-engineering/constrained-prompting) — 强制特定的输出格式。', '[SPECS框架](/zh/prompt-engineering/specs-framework) — 规范专注的提示词。', '[RAG说明](/zh/prompt-engineering/rag-explained) — 结合结构化提取和数据检索。', '[思维链](/zh/prompt-engineering/chain-of-thought-prompting) — 逐步推理。', '[提示词模板](/zh/prompt-engineering/prompt-documentation-templates) — 可重复使用的模板。', '[零次对少次](/zh/prompt-engineering/zero-shot-vs-few-shot) — 何时示例改进JSON合规性。', '[可靠结构化数据的提示词](/zh/prompt-engineering/prompts-for-reliable-structured-data)' ] }, faq: { title: '常见问题', faqs: [ { q: '结构化输出和JSON模式之间有什么区别？', a: '结构化输出是更广泛的类别。JSON模式是更严格的变体。' }, { q: '所有LLM都支持JSON模式吗？', a: '否。OpenAI GPT-5.5、Anthropic Claude Sonnet 4.6+和Google Gemini支持。' }, { q: '在没有原生JSON模式的情况下如何强制仅JSON响应？', a: '使用提示词工程：明确声明"仅输出有效JSON"。' }, { q: '如果模型返回无效JSON会发生什么？', a: '在您的一方验证。失败时重试或回到手动方法。' }, { q: '我可以将结构化输出用于复杂文档吗？', a: '是的。将复杂任务分解成步骤。' }, { q: '我如何处理缺失或模糊的数据？', a: '在架构中定义后备行为。' }, { q: 'JSON模式是否受监管合规性影响？', a: 'JSON本身是中立的。但结构化输出有益于合规性。' }, { q: '我如何测试JSON模式提示词？', a: '使用不同的输入进行测试。在部署前达到95%的成功率。' }, { q: '我可以跨不同模型重复使用架构吗？', a: '可以，但要谨慎。定义、测试和记录差异。' }, { q: 'JSON模式的性能成本是什么？', a: '最少。原生JSON模式影响可以忽略不计。' } ] }, sources: { title: '来源', items: [ '[OpenAI JSON模式文档](https://platform.openai.com/docs/guides/json-mode) — 官方指南。', '[Anthropic指南](https://docs.anthropic.com/claude/reference/getting-started-with-the-api) — 文档。', '[Google Gemini API](https://ai.google.dev/gemini-2/docs/prompt-engineering/structured-output-and-json-mode) — 原生JSON支持。', '[JSON架构规范](https://json-schema.org/specification.html) — 标准规范。' ] } } },
  };
