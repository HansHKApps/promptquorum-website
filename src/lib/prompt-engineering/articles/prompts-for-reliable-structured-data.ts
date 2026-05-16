// Article: prompts-for-reliable-structured-data
// Created: 2026-04-30

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2026,
    theme: 'Techniques',
    title: 'Prompts for Reliable Structured Data: 3 Techniques (2026)',
    seoTitle: 'Prompts for Reliable Structured Data: 3 Techniques (2026)',
    metaDescription: 'JSON mode enforces JSON syntax, not field completeness. Schema embedding, output examples, and field instructions raise reliability to 95%+ without API changes.',
    ogDescription: 'JSON mode stops malformed JSON but not missing fields or wrong types. Three prompt techniques — schema embedding, output examples, field instructions — raise reliability to 95%+ without changing your API setup.',
    twitterDescription: 'JSON mode fixes syntax, not schema compliance. Schema-in-prompt + one output example + field instructions → 95%+ structured output reliability. No API changes needed.',
    intro: '**Most structured output failures happen inside valid JSON — required fields missing, dates formatted as plain strings, enum values misspelled, nullable fields returning empty strings instead of null.** API-level JSON mode and tool_use eliminate unparseable output but do nothing for schema-compliance failures. Three prompt techniques fix what JSON mode leaves behind.',
    leadAnswerBlock: '**Three prompt patterns raise structured output reliability to 95% or more without API changes: embedding the schema in the prompt, showing the model one valid output example, and adding field-level instructions for type, format, and null handling.** These patterns work across GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro, with or without native JSON mode.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers building production workflows with LLM APIs',
    primaryTerm: 'prompts for reliable structured data',
    aboutTopics: ['Structured Output Prompting', 'JSON Schema Design', 'Prompt Reliability Testing'],
    quickFacts: [
      'JSON mode APIs (OpenAI response_format, Anthropic tool_use) enforce parseable JSON but do not guarantee field presence, correct data types, or valid enum values — schema-compliance failures require prompt-level controls',
      'Models without API-enforced JSON mode achieve 80–85% structured output reliability with schema-in-prompt alone; adding one valid output example raises this to 90–92%',
      'Enum fields with more than 5 values need all allowed values listed explicitly in the prompt — models invent plausible values not in scope when the enum list is absent from the prompt',
      'A 20-case test set (10 happy-path, 5 edge cases, 5 adversarial) is sufficient to identify the most common structured output prompt failures before production deployment',
    ],
    toc: [
      { label: 'Key Takeaways',                                              anchor: '#key-takeaways' },
      { label: 'Prompt Design Determines Structured Output Reliability',     anchor: '#what-makes-reliable' },
      { label: 'Embed the Schema Directly in the Prompt',                   anchor: '#schema-in-prompt' },
      { label: 'Show the Model One Valid Output Example',                   anchor: '#example-anchoring' },
      { label: 'Write Field-Level Instructions, Not Just a Schema',         anchor: '#field-instructions' },
      { label: 'Choose JSON, YAML, or CSV Based on Task and Enforcement',   anchor: '#format-selection' },
      { label: 'Ask the Model to Fix Its Own Malformed Output',             anchor: '#failure-recovery' },
      { label: 'Prompt Patterns for Arrays, Enums, and Nullable Fields',    anchor: '#data-type-patterns' },
      { label: 'Measure Your Prompt\'s Structured Output Reliability',      anchor: '#testing-reliability' },
      { label: '5 Common Structured Output Prompt Mistakes',                anchor: '#common-mistakes' },
      { label: 'Frequently Asked Questions',                                anchor: '#faq' },
      { label: 'Related Reading',                                           anchor: '#related-reading' },
      { label: 'Sources',                                                   anchor: '#sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompts for Reliable Structured Data: 3 Techniques (2026)',
      description: 'JSON mode enforces JSON syntax, not field completeness. Schema embedding, output examples, and field instructions raise reliability to 95%+ without API changes.',
      author:    { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified:  '2026-04-30',
      url: 'https://www.promptquorum.com/prompt-engineering/prompts-for-reliable-structured-data',
      inLanguage:       'en',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Structured Output Prompting' },
        { '@type': 'Thing', name: 'JSON Schema Design' },
        { '@type': 'Thing', name: 'Prompt Reliability Testing' },
      ],
      audience:  { '@type': 'Audience', audienceType: 'Developers building production workflows with LLM APIs' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How To Measure and Improve Structured Output Prompt Reliability',
      inLanguage: 'en',
      totalTime: 'PT2H',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Define pass/fail criteria for every schema field',
          text: 'For each field in your schema, write a binary check that runs programmatically: type is correct, required field is present, enum value is in the allowed list, date format matches the expected pattern. These checks are your test oracle.',
        },
        {
          '@type': 'HowToStep',
          name: 'Build a 20-case test set',
          text: 'Create 20 test inputs: 10 happy-path (typical, well-formed data), 5 edge cases (missing optional fields, long text, unusual values), 5 adversarial (instructions embedded in field values, extreme dates, ambiguous types that could confuse the model).',
        },
        {
          '@type': 'HowToStep',
          name: 'Run at temperature 0 and record field-level pass rates',
          text: 'Execute all 20 cases against your prompt at temperature 0 for deterministic results. Record pass/fail per field, not just overall. Field-level failures identify exactly which instruction is missing or ambiguous.',
        },
        {
          '@type': 'HowToStep',
          name: 'Fix the lowest-pass-rate field and retest',
          text: 'Identify the field with the most failures. Add or strengthen its instruction: type, allowed values, format, null handling. Re-run the 20 cases. Repeat until overall pass rate reaches 95% or higher.',
        },
        {
          '@type': 'HowToStep',
          name: 'Validate the prompt on a second model',
          text: 'Run the same 20-case test set on a second model. A prompt at 95%+ on GPT-4o but 70% on Claude 4.6 Sonnet is model-dependent. Either make the instructions more explicit to pass on both, or commit to a single model.',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does JSON mode make schema-in-prompt unnecessary?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. JSON mode enforces parseable JSON syntax, not schema compliance. A model using JSON mode can still return valid JSON that is missing required fields, using wrong data types, or containing invalid enum values. Schema-in-prompt and field instructions address schema-compliance failures; JSON mode only prevents unparseable output. The two approaches are complementary, not alternatives.' },
        },
        {
          '@type': 'Question',
          name: 'How many output examples should I include in the prompt?',
          acceptedAnswer: { '@type': 'Answer', text: 'One example is usually sufficient and adds the largest reliability gain. A second example adds value only when your data has meaningfully different structure depending on input conditions — for instance, when certain fields are conditionally required. Beyond two examples, the prompt length cost exceeds the reliability benefit for most structured output tasks.' },
        },
        {
          '@type': 'Question',
          name: 'Should I use JSON or YAML for structured output without API enforcement?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use YAML when generating without API enforcement and the output does not need to be parsed by a system expecting JSON. Models produce fewer syntax errors in YAML because it does not require closing braces, escape sequences, or trailing commas. Use JSON when the output feeds directly into an API, database, or downstream system that requires JSON. Always parse and validate regardless of format.' },
        },
        {
          '@type': 'Question',
          name: 'What is the fastest way to improve a prompt with a 70% structured output pass rate?',
          acceptedAnswer: { '@type': 'Answer', text: 'Run the test set at field level, not just overall. Find the field with the lowest individual pass rate, add one explicit instruction for that field covering type, format, and null handling, then re-run. A single field instruction addition typically raises overall pass rate by 5–15 percentage points. Repeat until you reach 95% or higher.' },
        },
        {
          '@type': 'Question',
          name: 'How do I get reliable structured output from a model without native JSON mode?',
          acceptedAnswer: { '@type': 'Answer', text: 'Embed the full JSON schema as a template in the prompt, include one valid output example, add field-level instructions, and run at temperature 0. Parse and validate every output; send a correction prompt for any validation failure. Well-designed prompts achieve 85–92% reliability on most models at temperature 0 without native JSON mode.' },
        },
        {
          '@type': 'Question',
          name: 'What is the right test set size for a structured output prompt?',
          acceptedAnswer: { '@type': 'Answer', text: '20 cases minimum: 10 happy-path inputs (typical, well-formed data), 5 edge cases (unusual values, missing optional fields, long inputs), and 5 adversarial inputs (values that could mislead the model, instructions embedded in field values, ambiguous types). This size identifies the most common failure categories without requiring excessive setup time.' },
        },
        {
          '@type': 'Question',
          name: 'When should I use a correction prompt versus fix the base prompt?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use a correction prompt when failures are rare — less than 10% of outputs — and caused by unusual edge-case inputs. Fix the base prompt when failures are systematic: the same field missing or the same type error appearing across multiple test cases. A correction prompt adds latency and API cost per failure; a better base prompt prevents failures entirely.' },
        },
        {
          '@type': 'Question',
          name: 'Does the order of fields in the schema affect structured output reliability?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Place required fields first and optional or nullable fields last. Models weight earlier schema elements more heavily when deciding what to include. A nullable field listed first is more likely to be omitted than a required field listed later when the model is uncertain about the value. This ordering effect is consistent across GPT-4o and Claude 4.6 Sonnet.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Structured Output Format Comparison: JSON, YAML, XML, CSV, Markdown',
      inLanguage: 'en',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'JSON',
          description: 'Best for APIs, databases, and type-safe consumers. Highest reliability with API enforcement (99%+). Without enforcement: 80–85% with schema-in-prompt. Requires closing braces and escape sequences, which increase syntax error rate in free-form generation.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'YAML',
          description: 'Best for human-readable configuration and documentation output without API enforcement. Models achieve 88–92% reliability with schema-in-prompt due to simpler syntax (no braces, no trailing commas). Requires conversion before feeding into JSON-expecting systems.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'XML',
          description: 'Best for document transformation and legacy system integration. Models produce 85–90% correct XML with schema-in-prompt. Verbose for simple key-value data; better suited to hierarchical document structures.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'CSV',
          description: 'Best for flat tabular data exported to spreadsheets or data pipelines. Highest reliability for flat data (95%+) due to simple row-column structure. Unsuitable for nested or hierarchical data.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Markdown tables',
          description: 'Best for reports and human-readable output with tabular sections. High reliability for simple tables. Not suitable for machine-readable downstream processing without a parser.',
        },
      ],
    },
    sections: {
      tldrCallout: {
        callouts: [
          { type: 'tldr', label: 'TL;DR', text: 'JSON mode enforces JSON syntax, not schema compliance — missing fields, wrong types, and invalid enum values require prompt fixes. Three techniques close the gap: (1) embed the schema as a JSON template directly in the prompt, (2) include one valid output example, (3) add one instruction per field covering type, format, and null handling. Target 95%+ pass rate on a 20-case test set before deploying. Use YAML instead of JSON for free-form prompts without API enforcement — models produce fewer syntax errors.' },
        ],
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Key Takeaways',
        items: [
          'JSON mode stops malformed JSON but not schema-compliance failures — missing required fields, wrong data types, and invalid enum values require prompt-level fixes',
          'Embed the schema as a JSON template in the prompt, not as a natural language description — template embedding reduces field omissions by making the expected structure unambiguous',
          'Add one valid output example to the prompt — a single concrete example raises pass rates by 5–8 percentage points over schema-only prompts',
          'Write one field instruction per required field: data type, allowed format, null handling, and enum values — field instructions eliminate the ambiguity that causes type errors',
          'Use YAML instead of JSON for free-form prompting without API enforcement — models produce fewer syntax errors in YAML due to its simpler syntax',
          'Target 95%+ pass rate on a 20-case test set before deploying any structured output prompt to production; below 95%, downstream failures require a recovery process',
          'Test every structured output prompt against at least 2 models — a prompt that passes at 95% on GPT-4o may fail at 70% on Claude 4.6 Sonnet without model-agnostic instructions',
        ],
      },
      whatMakesReliable: {
        id: 'what-makes-reliable',
        title: 'Prompt Design Determines Structured Output Reliability',
        content: [
          '**JSON mode and tool_use APIs enforce parseable JSON, but they do not ensure field completeness, correct data types, or valid enum values — those failures require prompt-level fixes, not API changes.** The most common structured output failures happen inside syntactically valid JSON: required fields missing because the model treated them as optional, dates formatted as relative strings ("last Tuesday") instead of ISO 8601, enum values misspelled or abbreviated, and nullable fields returning empty strings instead of null.',
          'Three prompt-level interventions consistently close the reliability gap. Schema embedding makes the output structure unambiguous. A single valid output example removes formatting ambiguity. Field-level instructions eliminate type and null-handling errors. Together, these three raise structured output reliability to 95%+ across GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro — with or without native JSON mode.',
        ],
        columns: ['Failure type', 'What causes it in the prompt', 'Prompt fix'],
        rows: [
          { 'Failure type': 'Required field missing', 'What causes it in the prompt': 'Model infers the field is optional from natural language description', 'Prompt fix': 'Label each required field explicitly: "title [REQUIRED]" or list required fields separately' },
          { 'Failure type': 'Wrong data type', 'What causes it in the prompt': 'Ambiguous field name with no type annotation', 'Prompt fix': 'Add type annotation in prompt: "amount (integer, not string)"' },
          { 'Failure type': 'Invalid enum value', 'What causes it in the prompt': 'Enum not listed in full — model invents a plausible value', 'Prompt fix': 'List all enum values explicitly: "status: one of \'active\', \'inactive\', \'pending\'"' },
          { 'Failure type': 'null vs empty string confusion', 'What causes it in the prompt': 'No instruction distinguishing null from ""', 'Prompt fix': 'Add: "Return null if unknown. Never return empty string for unknown values."' },
          { 'Failure type': 'Extra undeclared fields', 'What causes it in the prompt': 'Model adds helpful context not in the schema', 'Prompt fix': 'Add: "Return only the fields specified. Do not add fields not listed in the schema."' },
        ],
        tableFormat: true,
        snippets: [
          { type: 'in-one-sentence', text: 'Structured output reliability is the percentage of model responses that are parseable, contain all required fields, use correct data types, and have valid enum values — JSON mode guarantees only the first of these four.' },
          { type: 'in-plain-terms', text: 'Think of JSON mode as spell-check: it catches syntax errors but not meaning errors. A document can pass spell-check and still be wrong. A prompt that only relies on JSON mode is like a document that passed spell-check — structurally valid but potentially incomplete or incorrectly typed.' },
        ],
        callouts: [
          { type: 'key-point', label: 'JSON mode is not enough', text: 'Schema-in-prompt, field instructions, and output examples are required even when using API-enforced JSON mode. JSON mode and prompt schema design are complementary — not alternatives. JSON mode prevents syntax failures; prompt design prevents compliance failures.' },
        ],
      },
      schemaInPrompt: {
        id: 'schema-in-prompt',
        title: 'Embed the Schema Directly in the Prompt',
        content: [
          '**Embed the expected output schema as a JSON template directly in the prompt, not as a natural language description. Models that see the structure before generating it produce fewer field omissions and type errors than models that receive only a prose description of what you want.**',
          'A schema-in-prompt uses the exact format you expect in the output: field names, nesting depth, and value placeholders. Place the schema template after your task instruction and before any examples. Use placeholder values that communicate the expected type: `"amount": 0` communicates integer; `"amount": 0.00` communicates float; `"created_at": "YYYY-MM-DDTHH:MM:SSZ"` communicates the ISO 8601 format you expect.',
        ],
        promptExamples: [
          {
            bad: 'Extract the order details from the following text and return them as JSON. Include the order ID, customer name, total amount, items ordered, and order status.\n\nText: {{text}}',
            good: 'Extract the order details from the following text and return them as JSON matching this exact schema:\n\n{\n  "order_id": "string",\n  "customer_name": "string",\n  "total_amount": 0.00,\n  "status": "string",\n  "items": [\n    {\n      "name": "string",\n      "quantity": 0,\n      "unit_price": 0.00\n    }\n  ]\n}\n\nReturn only valid JSON. Do not include any text outside the JSON object.\n\nText: {{text}}',
            badLabel: 'Natural language description only',
            goodLabel: 'Schema embedded as JSON template',
          },
        ],
        callouts: [
          { type: 'pro-tip', label: 'Use TypeScript-style type annotations', text: 'For prompts where JSON mode is not available, add TypeScript-style type annotations as comments inside the schema template: `"amount": 0 // float, USD, 2 decimal places`. This provides type information inside the schema structure without requiring a separate field instructions section.' },
          { type: 'key-point', label: 'Field order matters', text: 'List required fields first in your schema template, optional fields next, and nullable fields last. Models weight earlier elements more heavily when deciding what to include — a nullable field listed first is more likely to be omitted when the model is uncertain about the value.' },
        ],
      },
      exampleAnchoring: {
        id: 'example-anchoring',
        title: 'Show the Model One Valid Output Example',
        content: [
          '**Adding one concrete, realistic output example to the prompt raises structured output reliability by 5–8 percentage points compared to schema-only prompts.** The example shows the model the exact format, field ordering, value style, and quoting convention you expect — reducing ambiguity that the schema definition alone cannot eliminate.',
          'Place the example after the schema template and label it clearly ("Example output:" or "Here is a valid response:"). Use realistic placeholder values — not "foo", "bar", or "example" — because models learn from value style. If your dates are ISO 8601, show an ISO 8601 date. If your prices have two decimal places, show `12.99`, not `13`.',
        ],
        promptExamples: [
          {
            bad: 'Extract product details from the review below and return JSON with this schema:\n{\n  "product_name": "string",\n  "rating": 0,\n  "sentiment": "string",\n  "key_features": ["string"]\n}\n\nReview: {{review}}',
            good: 'Extract product details from the review below and return JSON with this schema:\n{\n  "product_name": "string",\n  "rating": 0,\n  "sentiment": "string",\n  "key_features": ["string"]\n}\n\nExample output:\n{\n  "product_name": "WH-1000XM5 Headphones",\n  "rating": 4,\n  "sentiment": "positive",\n  "key_features": ["noise cancellation", "30-hour battery", "comfortable fit"]\n}\n\nReview: {{review}}',
            badLabel: 'Schema only — no output example',
            goodLabel: 'Schema + one realistic output example',
          },
        ],
        callouts: [
          { type: 'pro-tip', label: 'One example is usually enough', text: 'A second example adds value only when your data has meaningfully different structure depending on input conditions — for instance, when certain fields are conditionally present based on product type. Beyond two examples, the prompt length cost exceeds the reliability benefit for most structured output tasks.' },
          { type: 'warning', label: 'Avoid trivial placeholder values', text: 'Examples with "foo", "bar", "test", or `0` as placeholders teach the model that these are valid values. Use values representative of your actual data — real product names, realistic ratings, actual date strings.' },
        ],
      },
      fieldInstructions: {
        id: 'field-instructions',
        title: 'Write Field-Level Instructions for High-Stakes Output',
        content: [
          '**For production prompts where field correctness is critical, add one instruction per required field: the data type, the expected format, the null handling, and the allowed enum values where applicable.** Field-level instructions eliminate the ambiguity that causes type errors — a field named "amount" could be a string, an integer, or a float without an explicit type instruction.',
          'Field instructions go in a separate section after the schema template, before the example. Label the section "Field requirements:" or "Schema rules:". Keep each instruction to one sentence.',
        ],
        columns: ['Field type', 'Instruction pattern', 'Example instruction'],
        rows: [
          { 'Field type': 'String', 'Instruction pattern': 'Format, max length, disallowed characters', 'Example instruction': '"title (string, max 100 characters, no HTML tags)"' },
          { 'Field type': 'Number', 'Instruction pattern': 'Integer vs float, precision, units', 'Example instruction': '"price (float, exactly 2 decimal places, USD, no currency symbol)"' },
          { 'Field type': 'Date', 'Instruction pattern': 'Format, timezone', 'Example instruction': '"created_at (string, ISO 8601: YYYY-MM-DDTHH:MM:SSZ, UTC timezone)"' },
          { 'Field type': 'Enum', 'Instruction pattern': 'All allowed values listed verbatim', 'Example instruction': '"status (string, exactly one of: \'active\', \'inactive\', \'pending\')"' },
          { 'Field type': 'Boolean', 'Instruction pattern': 'true/false only — reject yes/no/1/0', 'Example instruction': '"is_verified (boolean, true or false only — not 1/0 or yes/no)"' },
          { 'Field type': 'Nullable', 'Instruction pattern': 'When to return null vs empty string vs omit', 'Example instruction': '"description (string or null — return null if unknown, empty string if known to be blank)"' },
          { 'Field type': 'Array', 'Instruction pattern': 'Min/max items, item type, empty array handling', 'Example instruction': '"tags (array of strings, 0–5 items, return [] if none — never return null)"' },
        ],
        tableFormat: true,
        promptExamples: [
          {
            bad: 'Return JSON with these fields:\n{\n  "invoice_id": ...,\n  "amount": ...,\n  "due_date": ...,\n  "status": ...,\n  "line_items": [...]\n}',
            good: 'Return JSON with these fields:\n{\n  "invoice_id": "string",\n  "amount": 0.00,\n  "due_date": "YYYY-MM-DD",\n  "status": "string",\n  "line_items": [{"description": "string", "quantity": 0, "unit_price": 0.00}]\n}\n\nField requirements:\n- invoice_id: string, format INV-XXXXXX (e.g. INV-004821)\n- amount: float, 2 decimal places, USD total including tax\n- due_date: string, ISO 8601 date (YYYY-MM-DD), not a datetime\n- status: string, exactly one of: \'paid\', \'unpaid\', \'overdue\', \'cancelled\'\n- line_items: array of objects, 1 or more items, return [] if no line items found\n- If any field cannot be determined, return null for that field',
            badLabel: 'Schema only — no field instructions',
            goodLabel: 'Schema + field-level instructions',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'When to add field instructions', text: 'Add field instructions when: (1) a field has a specific format requirement (ISO dates, currency precision), (2) a field is an enum, (3) a field is nullable and the null/empty-string distinction matters, or (4) your test set shows that field failing in more than 10% of cases. Skip field instructions for simple, unambiguous string fields like "title" or "name".' },
        ],
      },
      formatSelection: {
        id: 'format-selection',
        title: 'Choose JSON for APIs, YAML for Prompts, CSV for Tabular Data',
        content: [
          '**Use JSON when the output feeds into an API or database with JSON enforcement available. Use YAML for free-form prompts without API enforcement — models produce fewer syntax errors in YAML because it requires no closing braces, no escape sequences, and no trailing comma awareness. Use CSV only for flat tabular data.**',
          'The reliability difference between JSON and YAML in free-form (non-API-enforced) prompting stems from syntax complexity. JSON requires every string to be quoted, every object to be closed with a brace, and every comma to be correct. YAML uses indentation instead — which models handle more consistently. The trade-off: YAML output requires conversion before feeding into JSON-expecting downstream systems.',
        ],
        columns: ['Format', 'Reliability without API enforcement', 'Best for', 'Avoid when'],
        rows: [
          { 'Format': 'JSON', 'Reliability without API enforcement': '80–85% with schema-in-prompt', 'Best for': 'APIs, databases, type-safe consumers', 'Avoid when': 'No API enforcement and complex nesting is involved' },
          { 'Format': 'YAML', 'Reliability without API enforcement': '88–92% with schema-in-prompt', 'Best for': 'Human-readable output, config-style data, without API enforcement', 'Avoid when': 'Downstream system requires JSON without a conversion step' },
          { 'Format': 'XML', 'Reliability without API enforcement': '85–90% with schema-in-prompt', 'Best for': 'Document transformation, legacy system integration', 'Avoid when': 'Simple key-value data (XML adds unnecessary verbosity)' },
          { 'Format': 'CSV', 'Reliability without API enforcement': '95%+ for flat data', 'Best for': 'Tabular data, spreadsheet exports, data pipelines', 'Avoid when': 'Data has nested or hierarchical structure' },
          { 'Format': 'Markdown tables', 'Reliability without API enforcement': 'High for simple tables', 'Best for': 'Reports, documentation, human-readable tabular output', 'Avoid when': 'Machine-readable downstream processing is required' },
        ],
        tableFormat: true,
        items: [
          'Use JSON if your downstream system has a JSON parser and API enforcement is available — the enforcement eliminates syntax errors entirely',
          'Use YAML if you are generating without API enforcement and your team converts to JSON before downstream processing',
          'Use CSV only for flat tabular data — the moment you need a nested object or an array in a cell, switch to JSON or YAML',
          'Use Markdown tables only for human-readable output — they are not machine-parseable without additional tooling',
        ],
        callouts: [
          { type: 'warning', label: 'YAML-to-JSON conversion cost', text: 'If you use YAML for prompt reliability and need JSON for downstream processing, add a conversion step in your pipeline. yaml.safe_load() in Python and js-yaml in Node.js handle this in one line. Factor this into your architecture before committing to YAML across a team.' },
        ],
      },
      failureRecovery: {
        id: 'failure-recovery',
        title: 'Ask the Model to Fix Its Own Malformed Output',
        content: [
          '**When a structured output prompt fails validation, send a correction prompt containing the original instruction, the malformed output, and the specific validation error. Models recover valid output from their own malformed responses in 60–75% of cases without a full prompt rewrite.**',
          'A correction prompt has three required parts: (1) a restatement of what the output must look like (the schema or format), (2) the malformed output exactly as the model returned it, and (3) the specific validation error — "required field \'invoice_id\' missing", "amount is a string, expected float". This three-part structure gives the model enough context to fix the specific problem rather than regenerating a different response with different failures.',
        ],
        promptExamples: [
          {
            bad: 'You returned invalid output. Please try again and return valid JSON.\n\n{{original_prompt}}',
            good: 'Your previous response failed validation. Fix only the errors listed below and return corrected JSON.\n\nExpected schema:\n{\n  "invoice_id": "string",\n  "amount": 0.00,\n  "status": "string"\n}\n\nYour previous response:\n{\n  "invoice_id": null,\n  "amount": "150.00",\n  "status": "PAID"\n}\n\nValidation errors:\n- invoice_id is null but is a required string field — extract it from the input\n- amount is a string ("150.00") but must be a float (150.00)\n- status must be lowercase: use \'paid\', not \'PAID\'\n\nReturn only the corrected JSON object.',
            badLabel: 'Vague retry — no error context',
            goodLabel: 'Correction prompt with schema, output, and specific errors',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'When correction fails twice, fix the base prompt', text: 'If the correction prompt fails to produce valid output on the second attempt, the problem is in the base prompt, not the input data. Stop retrying and diagnose the failure pattern: which field fails, under what input conditions. Add a field instruction or schema change to prevent the failure at source.' },
          { type: 'warning', label: 'Correction prompts add latency and cost', text: 'Each correction prompt doubles the API cost and latency for that call. Use correction prompts for edge-case failures only (less than 10% of outputs). If your structured output prompt fails more than 10% of the time, fix the base prompt rather than building a correction loop into production.' },
        ],
      },
      dataTypePatterns: {
        id: 'data-type-patterns',
        title: 'Prompt Patterns for Arrays, Enums, and Nullable Fields',
        content: '**Arrays, enums, and nullable fields are the three most common sources of structured output failures that schema-in-prompt alone does not prevent. Each requires a specific instruction pattern in the prompt.**',
        columns: ['Data type', 'Common failure', 'Prompt pattern that prevents it'],
        rows: [
          { 'Data type': 'Array (0 items)', 'Common failure': 'Model returns null instead of []', 'Prompt pattern that prevents it': '"Return an empty array [] if no items are present. Never return null for array fields."' },
          { 'Data type': 'Array (1+ items)', 'Common failure': 'Model returns single object instead of array when only one item found', 'Prompt pattern that prevents it': '"Always return an array, even when there is only one item. Single items must be wrapped: [{...}]"' },
          { 'Data type': 'Enum (2–5 values)', 'Common failure': 'Model abbreviates or invents similar values', 'Prompt pattern that prevents it': '"status: exactly one of: \'active\', \'inactive\', \'pending\' — no abbreviations or variants"' },
          { 'Data type': 'Enum (6+ values)', 'Common failure': 'Model invents values not in the list', 'Prompt pattern that prevents it': 'List all values in a numbered list, then: "Use only values from the list above. Do not abbreviate or combine values."' },
          { 'Data type': 'Nullable field', 'Common failure': 'Model returns "" instead of null, or omits the field entirely', 'Prompt pattern that prevents it': '"Return null if the value is unknown. Return empty string \'\' only if the field is known to be blank. Always include the field — do not omit it."' },
          { 'Data type': 'Integer vs float', 'Common failure': 'Model returns float when integer expected, or string for both', 'Prompt pattern that prevents it': '"score (integer — no decimal places, e.g. 4 not 4.0)" or "price (float — exactly 2 decimal places, e.g. 12.99 not 13)"' },
          { 'Data type': 'Nested object', 'Common failure': 'Model collapses nested object to flat keys (e.g., "address.city" instead of {"address": {"city": ...}})', 'Prompt pattern that prevents it': 'Show the full nested structure in the schema template with proper indentation. Natural language description of nesting is frequently collapsed to flat keys.' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'warning', label: 'null vs undefined vs omit', text: 'JSON has no undefined value, but models sometimes behave as if it does — omitting a field entirely when they think the value is unknown, rather than returning null. If downstream code uses obj.hasOwnProperty() or similar checks, an omitted field is different from a null field. Add: "Always include every field in the schema, even if the value is null."' },
          { type: 'pro-tip', label: 'Nested enums need extra specificity', text: 'Enums inside nested objects are more likely to be misspelled or abbreviated than top-level enums. If you have an enum inside a nested object, repeat the instruction close to where the field appears in the schema template, not just in a general field rules section.' },
        ],
      },
      testingReliability: {
        id: 'testing-reliability',
        title: 'Measure Your Structured Output Prompt\'s Reliability',
        content: [
          '**Target a 95%+ pass rate on a 20-case test set before deploying any structured output prompt to production. Below 95%, production failures occur frequently enough to require a downstream correction loop — which adds latency and doubles API cost for every failing call.**',
          'Measure reliability at the field level, not just overall. A prompt with 95% overall pass rate but 60% pass rate on one enum field is a prompt with a known production failure mode. Field-level measurement tells you exactly which instruction to add or strengthen.',
        ],
        numberedItems: [
          '**Define pass/fail criteria for every schema field.** For each field: type is correct, required field is present, enum value is in the allowed list, date format matches the required pattern. Write these as programmatic checks — not visual inspection. This step produces your test oracle.',
          '**Build a 20-case test set.** Ten happy-path inputs (typical, well-formed data), five edge cases (missing optional fields, long text, unusual values, multi-language content), five adversarial inputs (instructions embedded in field values, extreme dates, ambiguous types). Use realistic inputs from your actual data domain.',
          '**Run at temperature 0 and record pass/fail per field.** Execute all 20 cases at temperature 0 for deterministic, repeatable results. Record whether each field passes or fails in each test case — not just the overall outcome. Field-level failure patterns identify which instruction is missing.',
          '**Fix the lowest-pass-rate field and retest.** Add or strengthen one field instruction: type, format, null handling, or enum values. Re-run all 20 cases. A single targeted instruction addition typically raises overall pass rate by 5–15 percentage points. Repeat until overall pass rate reaches 95% or higher.',
          '**Validate the prompt on a second model.** Run the full 20-case set against a second model using the same prompt. A prompt at 95%+ on GPT-4o but 70% on Claude 4.6 Sonnet is model-dependent. Either add instructions explicit enough to pass on both, or document which model the prompt is validated for and do not switch without re-testing.',
        ],
        callouts: [
          { type: 'key-point', label: 'Run tests at temperature 0', text: 'Run structured output test sets at temperature 0 to get deterministic, repeatable results. A prompt that passes at temperature 0 is reliable by design — not lucky. Only increase temperature once the prompt passes at 95%+ deterministically, and then re-run the test set at the new temperature to confirm reliability holds.' },
          { type: 'pro-tip', label: 'Use PromptQuorum for multi-model comparison', text: 'PromptQuorum runs your 20-case test set against GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro simultaneously and shows field-level pass rates side-by-side. This identifies model-dependent failures in one run instead of three.' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '5 Common Structured Output Prompt Mistakes',
        content: '**The five most common structured output prompt mistakes all produce the same symptom — intermittent or systematic failures — but require different fixes. Diagnosing which mistake you have before adding instructions saves time.**',
        mistakes: [
          {
            mistake: 'Describing the schema in natural language instead of embedding it',
            problem: 'Natural language descriptions are ambiguous — "a list of items" could mean an array, a comma-separated string, or a numbered list; "the total" could be a string or a float',
            fix: 'Embed the expected schema as a JSON template directly in the prompt. The template shows field names, nesting depth, and value types through its structure rather than through prose description.',
          },
          {
            mistake: 'Not specifying how to handle missing or unknown values',
            problem: 'Models invent plausible values for unknown fields rather than returning null — dates become "unknown", amounts become 0, missing IDs become "N/A" — none of which pass type validation',
            fix: 'Add explicit null handling for every nullable field: "Return null if the value cannot be determined from the input. Do not guess or invent values. Do not return empty string."',
          },
          {
            mistake: 'Testing only against the model you developed the prompt on',
            problem: 'Structured output reliability varies significantly across models — a prompt at 95% on GPT-4o can fail at 70% on Claude 4.6 Sonnet due to different instruction-following behavior on schema constraints',
            fix: 'Run every structured output prompt against at least 2 models before treating it as model-agnostic. Use PromptQuorum or direct API calls to [test prompts across models](/prompt-engineering/how-to-test-prompts-across-models) in one step.',
          },
          {
            mistake: 'Retrying failed output with the exact same prompt',
            problem: 'A failing prompt retried at temperature 0 produces the same failure every time. At higher temperature it produces varied but still-failing output — different errors, same root cause',
            fix: 'Use a correction prompt with the specific validation error and the malformed output, or diagnose the failure pattern (which field, which input type) and add a targeted field instruction to the base prompt.',
          },
          {
            mistake: 'Treating JSON mode as a complete structured output solution',
            problem: 'JSON mode prevents unparseable output but not schema-compliance failures — a model using JSON mode can still return valid JSON with missing fields, wrong types, and invalid enum values, all of which fail downstream validation',
            fix: 'Always include schema-in-prompt and field instructions even when using API-enforced JSON mode. See [Structured Output and JSON Mode](/prompt-engineering/structured-output-json-mode) for the API configuration — this guide covers the prompt-level complement.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content: '**The most common questions about structured output prompting cover the boundary between JSON mode and prompt design, how many examples to include, and how to systematically improve a failing prompt.**',
        faqs: [
          {
            q: 'Does JSON mode make schema-in-prompt unnecessary?',
            a: 'No. JSON mode enforces parseable JSON syntax, not schema compliance. A model using JSON mode can still return valid JSON that is missing required fields, using wrong data types, or containing invalid enum values. Schema-in-prompt and field instructions address schema-compliance failures; JSON mode only prevents unparseable output. The two approaches are complementary, not alternatives.',
          },
          {
            q: 'How many output examples should I include in the prompt?',
            a: 'One example is usually sufficient and adds the largest reliability gain. A second example adds value only when your data has meaningfully different structure depending on input conditions — for instance, when certain fields are conditionally required based on input type. Beyond two examples, the prompt length cost exceeds the reliability benefit for most structured output tasks.',
          },
          {
            q: 'Should I use JSON or YAML for structured output without API enforcement?',
            a: 'Use YAML when generating without API enforcement and the output does not need to be parsed by a system expecting JSON. Models produce fewer syntax errors in YAML because it does not require closing braces, escape sequences, or trailing comma tracking. Use JSON when the output feeds directly into an API, database, or downstream system that requires JSON. Always parse and validate regardless of format.',
          },
          {
            q: 'What is the fastest way to improve a prompt with a 70% structured output pass rate?',
            a: 'Run the test set at field level, not just overall. Find the field with the lowest individual pass rate, add one explicit instruction covering type, format, and null handling, then re-run. A single targeted field instruction typically raises overall pass rate by 5–15 percentage points. Repeat until you reach 95% or higher.',
          },
          {
            q: 'How do I get reliable structured output from a model without native JSON mode?',
            a: 'Embed the full JSON schema as a template in the prompt, include one valid output example, add field-level instructions, and run at temperature 0. Parse and validate every output; send a correction prompt for any validation failure. Well-designed prompts achieve 85–92% reliability on most models at temperature 0 without native JSON mode.',
          },
          {
            q: 'What is the right test set size for a structured output prompt?',
            a: '20 cases minimum: 10 happy-path inputs (typical, well-formed data), 5 edge cases (unusual values, missing optional fields, long inputs), and 5 adversarial inputs (values that could mislead the model, instructions embedded in field values, ambiguous types). This size identifies the most common failure categories without excessive setup time.',
          },
          {
            q: 'When should I use a correction prompt versus fix the base prompt?',
            a: 'Use a correction prompt when failures are rare — less than 10% of outputs — and caused by unusual edge-case inputs. Fix the base prompt when failures are systematic: the same field missing or the same type error appearing across multiple test cases. A correction prompt adds latency and API cost per failure; a better base prompt prevents failures entirely.',
          },
          {
            q: 'Does the order of fields in the schema affect structured output reliability?',
            a: 'Yes. Place required fields first and optional or nullable fields last. Models weight earlier schema elements more heavily when deciding what to include. A nullable field listed first is more likely to be omitted than a required field listed later when the model is uncertain about the value. This ordering effect is consistent across GPT-4o and Claude 4.6 Sonnet.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Structured Output and JSON Mode: When and How to Use It](/prompt-engineering/structured-output-json-mode) — API-level JSON mode configuration for GPT-4o, Claude, and Gemini with a model compliance table',
          '[Best Tools for Structured Output (2026)](/prompt-engineering/best-tools-structured-output) — Instructor, Outlines, Pydantic AI, and LangChain compared for structured extraction workflows',
          '[How To Control the Output: Format, Temperature, and Constrained Decoding](/prompt-engineering/control-the-output) — constrained decoding mechanics, temperature and top-p for structured tasks, stop sequences',
          '[How To Evaluate Prompt Quality: Metrics, Tests and Checklist](/prompt-engineering/how-to-evaluate-prompt-quality) — 20-case test set construction, binary pass/fail scoring, and LLM-as-judge rubrics',
          '[How To Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — running the same prompt against GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro to find model-specific failures',
          '[Zero-Shot vs Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot) — when to add examples to a prompt and how many to include for different task types',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenAI Structured Outputs documentation](https://platform.openai.com/docs/guides/structured-outputs) — technical specification for response_format and JSON mode in the OpenAI API',
          '[Anthropic tool use documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) — how Claude\'s tool_use parameter enforces structured output at the API level',
          '[Google Gemini GenerationConfig documentation](https://ai.google.dev/api/generate-content#v1beta.GenerationConfig) — Gemini\'s responseMimeType configuration for native JSON output',
          '[BAML benchmark: structured output accuracy trade-offs](https://docs.boundaryml.com/benchmarks) — evidence on reliability differences between constrained and unconstrained generation across models',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — governance principles for AI output validation in production systems',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-30',
    theme: 'Techniken',
    title: 'Zuverlässige strukturierte Daten mit Prompts: 3 Techniken',
    seoTitle: 'Zuverlässige strukturierte Daten mit Prompts: 3 Techniken',
    metaDescription: 'JSON-Modus erzwingt Syntax, nicht Feldvollständigkeit. Schema-Einbettung, Ausgabebeispiele und Feldanweisungen erreichen 95%+ Zuverlässigkeit ohne API-Änderungen.',
    ogDescription: 'JSON-Modus verhindert fehlerhafte JSON, nicht fehlende Felder oder falsche Typen. Drei Prompt-Techniken — Schema im Prompt, Ausgabebeispiele, Feldanweisungen — erreichen 95%+ strukturierte Output-Zuverlässigkeit ohne API-Änderungen.',
    twitterDescription: 'JSON-Modus behebt Syntax, nicht Schema-Konformität. Schema im Prompt + ein Ausgabebeispiel + Feldanweisungen → 95%+ strukturierte Output-Zuverlässigkeit. Keine API-Änderungen erforderlich.',
    intro: '**Die meisten Ausfälle bei strukturierter Ausgabe entstehen innerhalb gültigen JSON — erforderliche Felder fehlen, Daten sind als einfache Strings formatiert, Enum-Werte sind falsch geschrieben, nullable Felder geben Leerstrings statt null zurück.** APIs mit JSON-Modus und tool_use verhindern nicht analysierbare Ausgaben, tun aber nichts gegen Schema-Konformitätsfehler. Drei Prompt-Techniken beheben das, was JSON-Modus hinterlässt.',
    leadAnswerBlock: '**Drei Prompt-Muster erreichen 95% oder mehr strukturierte Output-Zuverlässigkeit ohne API-Änderungen: Schema im Prompt einbetten, dem Modell ein gültiges Ausgabebeispiel zeigen und feldspezifische Anweisungen für Typ, Format und null-Behandlung hinzufügen.** Diese Muster funktionieren über GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro, mit oder ohne nativen JSON-Modus.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die Produktions-Workflows mit LLM-APIs erstellen',
    primaryTerm: 'prompts für zuverlässige strukturierte daten',
    aboutTopics: ['Strukturierte Output-Prompting', 'JSON-Schema-Design', 'Prompt-Zuverlässigkeitstests'],
    quickFacts: [
      'APIs mit JSON-Modus (OpenAI response_format, Anthropic tool_use) erzwingen analysierbares JSON, garantieren aber nicht Feldpräsenz, korrekte Datentypen oder gültige Enum-Werte — Schema-Konformitätsfehler erfordern Prompt-Level-Kontrollen',
      'Modelle ohne API-erzwungenen JSON-Modus erreichen 80–85% strukturierte Output-Zuverlässigkeit nur mit Schema im Prompt; das Hinzufügen eines gültigen Ausgabebeispiels erhöht dies auf 90–92%',
      'Enum-Felder mit mehr als 5 Werten benötigen alle erlaubten Werte, die explizit im Prompt aufgelistet sind — Modelle erfinden plausible Werte außerhalb des Geltungsbereichs, wenn die Enum-Liste im Prompt fehlt',
      'Ein 20-Test-Fall-Set (10 Happy Path, 5 Edge Cases, 5 gegnerisch) ist ausreichend, um die häufigsten strukturierten Output-Prompt-Fehler vor der Produktionsbereitstellung zu identifizieren',
    ],
    toc: [
      { label: 'Wichtige Erkenntnisse',                                              anchor: '#key-takeaways' },
      { label: 'Prompt-Design bestimmt strukturierte Output-Zuverlässigkeit',         anchor: '#what-makes-reliable' },
      { label: 'Schema direkt im Prompt einbetten',                                  anchor: '#schema-in-prompt' },
      { label: 'Dem Modell ein gültiges Ausgabebeispiel zeigen',                     anchor: '#example-anchoring' },
      { label: 'Feldspezifische Anweisungen, nicht nur ein Schema schreiben',        anchor: '#field-instructions' },
      { label: 'JSON, YAML oder CSV nach Aufgabe und Durchsetzung wählen',           anchor: '#format-selection' },
      { label: 'Das Modell seine fehlerhafte Ausgabe selbst korrigieren lassen',     anchor: '#failure-recovery' },
      { label: 'Prompt-Muster für Arrays, Enums und nullable Felder',               anchor: '#data-type-patterns' },
      { label: 'Strukturierte Output-Zuverlässigkeit messen',                        anchor: '#testing-reliability' },
      { label: '5 häufige strukturierte Output-Prompt-Fehler',                       anchor: '#common-mistakes' },
      { label: 'Häufig gestellte Fragen',                                            anchor: '#faq' },
      { label: 'Weiterführende Ressourcen',                                          anchor: '#related-reading' },
      { label: 'Quellen',                                                             anchor: '#sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Zuverlässige strukturierte Daten mit Prompts: 3 Techniken',
      description: 'JSON-Modus erzwingt Syntax, nicht Feldvollständigkeit. Schema-Einbettung, Ausgabebeispiele und Feldanweisungen erreichen 95%+ Zuverlässigkeit ohne API-Änderungen.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      url: 'https://www.promptquorum.com/prompt-engineering/prompts-for-reliable-structured-data?lang=de',
      inLanguage: 'de',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Strukturierte Output-Prompting' },
        { '@type': 'Thing', name: 'JSON-Schema-Design' },
        { '@type': 'Thing', name: 'Prompt-Zuverlässigkeitstests' },
      ],
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die Produktions-Workflows mit LLM-APIs erstellen' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Wie Sie strukturierte Output-Zuverlässigkeit messen und verbessern',
      inLanguage: 'de',
      totalTime: 'PT2H',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Bestätigen Sie Pass/Fail-Kriterien für jedes Schema-Feld',
          text: 'Schreiben Sie für jedes Feld im Schema eine binäre Überprüfung, die programmgesteuert ausgeführt wird: Der Typ ist korrekt, das erforderliche Feld ist vorhanden, der Enum-Wert ist in der zulässigen Liste, das Datumsformat entspricht dem erwarteten Muster. Diese Überprüfungen sind Ihr Test-Orakel.',
        },
        {
          '@type': 'HowToStep',
          name: 'Erstellen Sie ein 20-Fall-Test-Set',
          text: 'Erstellen Sie 20 Test-Eingaben: 10 Happy Path (typisch, wohlgeformte Daten), 5 Edge Cases (fehlende optionale Felder, langer Text, ungewöhnliche Werte), 5 gegnerisch (in Feldwerte eingebettete Anweisungen, extreme Daten, mehrdeutige Typen, die das Modell verwirren könnten).',
        },
        {
          '@type': 'HowToStep',
          name: 'Führen Sie bei Temperatur 0 aus und zeichnen Sie feldspezifische Pass-Raten auf',
          text: 'Führen Sie alle 20 Fälle gegen Ihren Prompt bei Temperatur 0 für deterministische Ergebnisse aus. Zeichnen Sie Pass/Fail pro Feld auf, nicht nur insgesamt. Feldspezifische Fehler identifizieren genau, welche Anweisung fehlt oder mehrdeutig ist.',
        },
        {
          '@type': 'HowToStep',
          name: 'Beheben Sie das Feld mit der niedrigsten Pass-Rate und testen Sie erneut',
          text: 'Identifizieren Sie das Feld mit den meisten Fehlern. Fügen Sie seine Anweisung hinzu oder verstärken Sie sie: Typ, zulässige Werte, Format, null-Behandlung. Führen Sie die 20 Fälle erneut aus. Wiederholen Sie, bis die Gesamtpass-Rate 95% oder höher erreicht.',
        },
        {
          '@type': 'HowToStep',
          name: 'Validieren Sie den Prompt auf einem zweiten Modell',
          text: 'Führen Sie die gleiche 20-Fall-Test-Suite auf einem zweiten Modell aus. Ein Prompt mit 95%+ auf GPT-4o aber 70% auf Claude 4.6 Sonnet ist modellabhängig. Entweder machen Sie die Anweisungen expliziter, um auf beiden zu bestehen, oder dokumentieren Sie, für welches Modell der Prompt validiert ist.',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Macht JSON-Modus Schema im Prompt überflüssig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. JSON-Modus erzwingt analysierbares JSON, nicht Schema-Konformität. Ein Modell mit JSON-Modus kann immer noch gültiges JSON zurückgeben, das erforderliche Felder vermisst, falsche Datentypen verwendet oder ungültige Enum-Werte enthält. Schema im Prompt und Feldanweisungen behandeln Schema-Konformitätsfehler; JSON-Modus verhindert nur nicht analysierbare Ausgaben. Die beiden Ansätze sind komplementär, nicht alternativ.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viele Ausgabebeispiele sollte ich in den Prompt einbeziehen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein Beispiel ist normalerweise ausreichend und bietet den größten Zuverlässigkeitsgewinn. Ein zweites Beispiel ist wertvoll nur, wenn Ihre Daten je nach Eingabebedingung eine sinnvoll unterschiedliche Struktur haben — beispielsweise wenn bestimmte Felder je nach Eingabetyp bedingt erforderlich sind. Jenseits von zwei Beispielen übersteigt der Prompt-Längenkostenaufwand den Zuverlässigkeitsvorteil für die meisten strukturierten Output-Aufgaben.',
          },
        },
        {
          '@type': 'Question',
          name: 'Können feldspezifische Anweisungen die Zuverlässigkeit auf über 95% bringen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, aber mit abnehmender Rendite. Jede zusätzliche Feldanweisung für ein bereits zuverlässiges Feld (95%+ einzeln) hebt selten die Gesamtrate um mehr als 1–2 Prozentpunkte. Konzentrieren Sie sich auf Anweisungen für Felder mit <85% Pass-Raten; dort sehen Sie 5–15 Prozentpunkte Verbesserung pro Anweisung. Nach 95% Gesamt ist der Nutzen marginal; verwenden Sie stattdessen einen Korrektur-Prompt für verbleibende Grenzfälle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sollte ich die gleiche Prompt bei verschiedenen Temperaturen testen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Testen Sie zuerst bei Temperatur 0 für deterministische, wiederholbare Ergebnisse. Erst wenn der Prompt 95%+ bei Temperatur 0 erreicht, erhöhen Sie die Temperatur und testen erneut. Ein Prompt bei 95% und Temperatur 0, aber 60% bei Temperatur 1 ist temperaturempfindlich — Sie müssen explizitere Anweisungen hinzufügen oder bei Temperatur 0 bleiben.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist 95% Pass-Rate „gut genug" für Produktion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Für die meisten Produktionssysteme ja, mit Vorbehalten. Bei 95% Zuverlässigkeit on 100 strukturierten Output-Anfragen pro Tag erhalten Sie ~5 tägliche Fehler; bei 1.000/Tag sind das ~50. Unter 95% — etwa 85% — ist ein Korrektur-Loop zwingend erforderlich, um Fehlerbehandlung zu vermeiden. Über 99% ist für unkritische Daten unnötig. Ziel: 95–97% je nach nachgelagerter Fehlertoleranz.',
          },
        },
        {
          '@type': 'Question',
          name: 'Beeinflussen die Feldordnung im Schema die strukturierte Output-Zuverlässigkeit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Setzen Sie erforderliche Felder zuerst und optionale oder nullable Felder zuletzt. Modelle gewichten frühere Schema-Elemente schwerer, wenn sie entscheiden, was sie einbeziehen. Ein nullable-Feld, das zuerst aufgelistet ist, wird eher weggelassen als ein erforderliches Feld, das später aufgelistet ist, wenn sich das Modell über den Wert unsicher ist. Dieser Bestellungseffekt ist über GPT-4o und Claude 4.6 Sonnet hinweg konsistent.',
          },
        },
        {
          '@type': 'Question',
          name: 'Muss ich bei der Verwendung von strukturierter Ausgabe die DSGVO beachten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, insbesondere wenn Sie mit personenbezogenen Daten (PbD) arbeiten. Die DSGVO (insbesondere Artikel 28, Auftragsverarbeitung) verlangt, dass Verarbeitung dokumentiert und validiert wird. Strukturierte Output-Prompts mit Schema-Validierung helfen nachzuweisen, dass Ausgaben den definierten Anforderungen entsprechen — dies ist ein Compliance-Vorteil für Artikel 32 (Sicherheitsmaßnahmen). Bewahren Sie Test-Logs und Schema-Definitionen auf. Wenn Sie APIs regional gehostet haben möchten, überprüfen Sie die Datenschutzerklärung des Anbieters auf DSGVO Artikel 28-Vereinbarungen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist strukturierte Output für den deutschen Mittelstand geeignet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Deutsche Mittelständler im Finanzsektor, in der Fertigung und Logistik benötigen häufig strukturierte Daten für System-Integration und Compliance (GoBD, BSI-Grundschutz). Strukturierte Output-Prompts mit Feldvalidierung sind kostengünstig und benötigen keine teuren Schnittstellen-Änderungen. Empfehlung: Testen Sie mit 20 realistischen Fällen aus Ihrem Geschäftsdomäne, validieren Sie über mehrere LLMs, und nutzen Sie Prompt-basierte Zuverlässigkeit statt API-Level-Erzwingung für maximale Kontrolle. Dies ist gegenüber Enterprise-APIs kostengünstiger und bietet bessere Nachvollziehbarkeit für BSI-Audits.',
          },
        },
      ],
    },
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        title: 'Wichtige Erkenntnisse',
        content: [
          '**JSON-Modus API-Ebene stoppt fehlerhafte JSON-Syntax, nicht Schema-Konformitätsfehler.** Gültiges JSON kann fehlende Felder, falsche Typen und ungültige Enum-Werte enthalten, die alle nachgelagerte Validierung fehlschlagen lassen.',
          '**Schema im Prompt einbetten ist das Fundament.** Ein strukturiertes JSON-Template direkt im Prompt zeigt dem Modell Feldnamen, Verschachtelungstiefe und Typen durch Struktur, nicht Prosa.',
          '**Ein gültiges Ausgabebeispiel erhöht die Zuverlässigkeit um 5–10 Prozentpunkte.** Das Modell sieht, wie ein bestandenes Ergebnis aussieht, und folgt besser.',
          '**Feldspezifische Anweisungen für Typ, Format und null-Behandlung sind kritisch.** "Enum-Feld" ist mehrdeutig; "status (genau eines von: \'active\', \'inactive\', \'pending\' — keine Abkürzungen)" ist nicht.',
          '**95% Pass-Rate auf einem 20-Fall-Test-Set ist das Produktions-Gate.** Unter 95% benötigen Sie einen Korrektur-Loop, der die Kosten verdoppelt und die Latenz verdoppelt. Über 95% kann in Produktion gehen.',
        ],
      },
      whatMakesReliable: {
        id: 'what-makes-reliable',
        title: 'Prompt-Design bestimmt strukturierte Output-Zuverlässigkeit',
        content: '**JSON-Modus APIs (OpenAI response_format, Anthropic tool_use, Google Gemini responseMimeType) erzwingen analysierbares JSON, tun aber nichts für Schema-Konformität — erforderliche Felder präsent, Datentypen korrekt, Enum-Werte gültig. Diese Fehler entstehen trotz API-Level-Enforcement und erfordern Prompt-Design-Kontrollen.**',
        callouts: [
          { type: 'key-point', label: 'JSON-Modus ist nicht genug', text: 'API-erzwungener JSON-Modus verhindert unparsierbare Ausgaben (Leerzeichen in JSON, Anführungszeichen nicht escaped). Er verhindert nicht Schema-Konformität: ein Modell mit aktiviertem JSON-Modus kann gültiges JSON mit fehlenden Feldern, falschem Typ und ungültigen Werten zurückgeben. Schema-Konformität ist ein Prompt-Problem, nicht ein API-Problem.' },
          { type: 'pro-tip', label: 'Testen Sie zuerst mit Schema im Prompt allein', text: 'Modelle ohne API-JSON-Modus (ältere APIs, lokale LLMs) erreichen 80–85% strukturierte Output-Zuverlässigkeit nur mit Schema im Prompt. Dadurch wird die Baseline deutlich und zeigt, wo die restlichen 15–20 Prozentpunkte sinnvoll hinzufügen.' },
        ],
      },
      schemaInPrompt: {
        id: 'schema-in-prompt',
        title: 'Schema direkt im Prompt einbetten',
        content: '**Das Schema als JSON-Template direkt im Prompt zu zeigen ist die höchste-Rendite-Technik.** Prompts, die das Schema nur in Prosa beschreiben ("eine Liste von Feldern"), sind mehrdeutig. Das Modell sieht nicht klar Feldnamen, Verschachtelungstiefe oder Typ und rät.',
        promptExamples: [
          {
            bad: 'Geben Sie eine Liste von Kundendaten zurück.',
            good: 'Geben Sie die Kundendaten in diesem exakten JSON-Format zurück:\n{\n  "customer_id": "string",\n  "name": "string",\n  "email": "string",\n  "purchases": ["item1", "item2"],\n  "total_spent": 0.00,\n  "is_premium": true\n}\n\nAufnahme aller Felder. Nie null.',
            badLabel: 'Mehrdeutig — keine Struktur',
            goodLabel: 'Schema-Template mit Feldtypen durch Struktur gezeigt',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'Verschachtelte Objekte auf mehrere Zeilen verteilen', text: 'Verschachtelte Strukturen auf eine Zeile zu quetschen macht es für Modelle schwer, Tiefe zu erkennen. Multi-Line-Templates mit Einzug sind viel leichter zu folgen.' },
          { type: 'pro-tip', label: 'Null-Werte und Arrays explizit zeigen', text: 'Nutzen Sie den Template, um zu zeigen, wie null aussieht (nicht "nil", nicht "N/A", sondern null) und wie ein leeres Array aussieht ([] nicht null). Wenn das nicht Ihr Template ist, werden diese Dinge falsch gemacht.' },
        ],
      },
      exampleAnchoring: {
        id: 'example-anchoring',
        title: 'Dem Modell ein gültiges Ausgabebeispiel zeigen',
        content: '**Ein Ausgabebeispiel erhöht die Zuverlässigkeit um 5–10 Prozentpunkte und kostet wenig Tokens.** Das Modell sieht ein bestandenes Ausgabe-Muster und folgt besser, besonders für Felder mit mehrdeutigen Typen (ist eine Datumsliste ein Array oder kommagetrennt?) oder Enum-Werte (ist es \'ACTIVE\' oder \'active\'?).',
        promptExamples: [
          {
            bad: 'Geben Sie Kundendetails als JSON zurück. Felder: customer_id, status.\n\nInput: {{ data }}',
            good: 'Geben Sie Kundendetails als JSON zurück. Felder: customer_id (string), status (enum: \'active\', \'inactive\', \'pending\').\n\nBeispiel:\n{"customer_id": "CUST-12345", "status": "active"}\n\nInput: {{ data }}',
            badLabel: 'Keine Beispiele — Modell rät bei Enum',
            goodLabel: 'Beispiel zeigt Format, Typus, Enum-Wertschreibweise',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'Ein Beispiel genügt für die meisten Fälle', text: 'Zwei oder mehr Beispiele helfen, wenn Ihre Datentypen je nach Eingabebedingung sinnvoll unterschiedlich sind. Für die meisten Aufgaben verdoppelt ein zweites Beispiel die Token-Kosten ohne Zuverlässigkeitsvorteil.' },
          { type: 'pro-tip', label: 'Beispiel für Grenzzustände wählen, nicht nur Happy Path', text: 'Ein Beispiel mit allen Feldern gefüllt ist weniger wertvoll als eines mit einem optionalen leeren Feld, das null zeigt, oder einem Array mit einem Element. Dadurch sieht das Modell, wie es mit Grenzfällen umgehen soll.' },
        ],
      },
      fieldInstructions: {
        id: 'field-instructions',
        title: 'Feldspezifische Anweisungen, nicht nur ein Schema schreiben',
        content: '**Feldspezifische Anweisungen für Typ, Format, zulässige Werte und null-Behandlung heben die Zuverlässigkeit von 90% auf 95%+.** Diese Anweisungen sind die finale Schicht, die Ambiguität entfernt.',
        columns: ['Feldtyp', 'Häufiger Fehler', 'Feldanweisung, die ihn verhindert'],
        rows: [
          { 'Feldtyp': 'Ganzzahl vs. Float', 'Häufiger Fehler': 'Modell gibt Float zurück, wenn Integer erwartet', 'Feldanweisung, die ihn verhindert': '"score (Ganzzahl — keine Dezimalstellen, z.B. 4 nicht 4.0)"' },
          { 'Feldtyp': 'Enumeration (5+ Werte)', 'Häufiger Fehler': 'Modell erfindet Werte nicht auf der Liste', 'Feldanweisung, die ihn verhindert': 'Alle Werte aufgelistet: "Verwenden Sie nur Werte aus der Liste. Keine Abkürzungen."' },
          { 'Feldtyp': 'Nullable-Feld', 'Häufiger Fehler': 'Modell gibt "" statt null zurück', 'Feldanweisung, die ihn verhindert': '"Geben Sie null zurück, wenn der Wert unbekannt ist. Geben Sie "" nur zurück, wenn das Feld bekannt leer ist."' },
          { 'Feldtyp': 'Datums-String', 'Häufiger Fehler': 'Modell verwendet verschiedene Formate', 'Feldanweisung, die ihn verhindert': '"date_created (ISO 8601: \'2026-05-15\')"' },
          { 'Feldtyp': 'Array', 'Häufiger Fehler': 'Modell gibt null für leeres Array zurück', 'Feldanweisung, die ihn verhindert': '"Geben Sie immer ein Array zurück, auch wenn leer. [] nicht null."' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'key-point', label: 'Anweisungen sollten spezifisch und validierbar sein', text: 'Eine Feldanweisung wie "gute Qualität" ist nicht validierbar. "Genau ISO 8601 oder Fehler" ist validierbar. Validierbare Anweisungen unterstützen die spätere automatisierte Testautomatisierung.' },
          { type: 'pro-tip', label: 'Nutzen Sie Regex oder Beispiele für Formate', text: 'Für Datums-, Telefon- oder Formatfelder ein Regex oder 2–3 Beispiele geben, nicht nur Prosa: "format: /^\\d{3}-\\d{3}-\\d{4}$/ (z.B. 555-123-4567)"' },
        ],
      },
      formatSelection: {
        id: 'format-selection',
        title: 'JSON, YAML oder CSV nach Aufgabe und Durchsetzung wählen',
        content: '**Die meisten strukturierten Output-Aufgaben benötigen JSON. YAML und CSV sind schneller zu schreiben für Menschen, aber Modelle sind weniger zuverlässig in ihnen ohne API-Erzwingung.** JSON mit API-Modus hat den höchsten Zuverlässigkeitsboden.',
        columns: ['Format', 'Zuverlässigkeitsboden ohne API', 'Zuverlässigkeitsboden mit API', 'Best für'],
        rows: [
          { 'Format': 'JSON', 'Zuverlässigkeitsboden ohne API': '80–85%', 'Zuverlässigkeitsboden mit API': '95%+', 'Best für': 'Verschachtelte Strukturen, APIs, Logging' },
          { 'Format': 'YAML', 'Zuverlässigkeitsboden ohne API': '70–75%', 'Zuverlässigkeitsboden mit API': '85–90%', 'Best für': 'Menschen lesbar, keine genestete Struktur' },
          { 'Format': 'CSV', 'Zuverlässigkeitsboden ohne API': '65–70%', 'Zuverlässigkeitsboden mit API': '80–85%', 'Best für': 'Flache Tabellen, Batch-Datenerfassung' },
          { 'Format': 'XML', 'Zuverlässigkeitsboden ohne API': '75–80%', 'Zuverlässigkeitsboden mit API': '90–95%', 'Best für': 'Legacy-Systeme, die XML benötigen' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'key-point', label: 'JSON ist die Default-Wahl', text: 'Verwenden Sie JSON, wenn Sie verschachtelte Strukturen haben oder API-Erzwingung nutzen können. Das gibt den höchsten Zuverlässigkeitsboden.' },
          { type: 'pro-tip', label: 'CSV für flache Tabellenstrukturen testen', text: 'CSV ist schneller für einfache tabellarische Daten (eine Zeile = ein Datensatz) und günstiger in Tokens. Wenn Sie nur 3–5 Spalten haben, CSV mit Schema testen; wenn Verschachtelung auftritt, wechseln zu JSON.' },
        ],
      },
      failureRecovery: {
        id: 'failure-recovery',
        title: 'Das Modell seine fehlerhafte Ausgabe selbst korrigieren lassen',
        content: [
          '**Wenn ein strukturierter Output-Prompt fehlschlägt, senden Sie einen Korrektur-Prompt mit der ursprünglichen Anweisung, der fehlerhaften Ausgabe und dem spezifischen Validierungsfehler. Modelle erholen sich in 60–75% der Fälle aus ihrer eigenen fehlerhaften Antwort ohne Prompt-Umschreibung.**',
          'Ein Korrektur-Prompt hat drei erforderliche Teile: (1) eine Wiederholung dessen, wie die Ausgabe aussehen muss (das Schema oder Format), (2) die fehlerhafte Ausgabe exakt wie das Modell sie zurückgab, (3) der spezifische Validierungsfehler — "erforderliches Feld \'invoice_id\' fehlt", "Betrag ist String, erwartet Float". Diese dreiteilige Struktur gibt dem Modell genug Kontext, um das spezifische Problem zu beheben, anstatt eine andere Antwort mit anderen Fehlern zu generieren.',
        ],
        promptExamples: [
          {
            bad: 'Sie haben ungültige Ausgabe zurückgegeben. Bitte versuchen Sie erneut und geben Sie gültiges JSON zurück.\n\n{{original_prompt}}',
            good: 'Ihre vorherige Antwort hat die Validierung nicht bestanden. Beheben Sie nur die unten aufgelisteten Fehler und geben Sie korrigiertes JSON zurück.\n\nErwartetes Schema:\n{\n  "invoice_id": "string",\n  "amount": 0.00,\n  "status": "string"\n}\n\nIhre vorherige Antwort:\n{\n  "invoice_id": null,\n  "amount": "150.00",\n  "status": "PAID"\n}\n\nValidierungsfehler:\n- invoice_id ist null, muss aber ein erforderliches String-Feld sein — extrahieren Sie es aus der Eingabe\n- amount ist ein String ("150.00"), muss aber ein Float sein (150.00)\n- status muss Kleinbuchstaben sein: verwenden Sie \'paid\', nicht \'PAID\'\n\nGeben Sie nur das korrigierte JSON-Objekt zurück.',
            badLabel: 'Mehrdeutige Wiederholung — kein Fehlerkontext',
            goodLabel: 'Korrektur-Prompt mit Schema, Ausgabe und spezifischen Fehlern',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'Wenn Korrektur zweimal fehlschlägt, beheben Sie den Basis-Prompt', text: 'Wenn der Korrektur-Prompt beim zweiten Versuch keine gültige Ausgabe erzeugt, ist das Problem im Basis-Prompt, nicht in den Eingabedaten. Stoppen Sie die Wiederholung und diagnostizieren Sie das Ausfallmuster: Welches Feld schlägt fehl, unter welchen Eingabebedingungen. Fügen Sie eine Feldanweisung oder Schema-Änderung hinzu, um den Fehler in der Quelle zu verhindern.' },
          { type: 'warning', label: 'Korrektur-Prompts addieren Latenz und Kosten', text: 'Jeder Korrektur-Prompt verdoppelt API-Kosten und Latenz für diesen Anruf. Verwenden Sie Korrektur-Prompts nur für Grenzfall-Fehler (<10% der Ausgaben). Wenn Ihr strukturierter Output-Prompt mehr als 10% der Zeit fehlschlägt, beheben Sie den Basis-Prompt statt einen Korrektur-Loop in Produktion zu bauen.' },
        ],
      },
      dataTypePatterns: {
        id: 'data-type-patterns',
        title: 'Prompt-Muster für Arrays, Enums und nullable Felder',
        content: '**Arrays, Enums und nullable Felder sind die drei häufigsten Quellen für strukturierte Output-Fehler, die Schema im Prompt allein nicht verhindert. Jede benötigt ein spezifisches Anweisungsmuster im Prompt.**',
        columns: ['Datentyp', 'Häufiger Fehler', 'Prompt-Muster, das ihn verhindert'],
        rows: [
          { 'Datentyp': 'Array (0 Elemente)', 'Häufiger Fehler': 'Modell gibt null statt [] zurück', 'Prompt-Muster, das ihn verhindert': '"Geben Sie ein leeres Array [] zurück, wenn keine Elemente vorhanden sind. Geben Sie nie null für Array-Felder zurück."' },
          { 'Datentyp': 'Array (1+ Elemente)', 'Häufiger Fehler': 'Modell gibt einzelnes Objekt statt Array zurück, wenn nur ein Element gefunden', 'Prompt-Muster, das ihn verhindert': '"Geben Sie immer ein Array zurück, auch wenn nur ein Element vorhanden ist. Einzelne Elemente müssen eingehüllt sein: [{...}]"' },
          { 'Datentyp': 'Enumeration (2–5 Werte)', 'Häufiger Fehler': 'Modell kürzt ab oder erfindet ähnliche Werte', 'Prompt-Muster, das ihn verhindert': '"status: genau eines von: \'active\', \'inactive\', \'pending\' — keine Abkürzungen oder Varianten"' },
          { 'Datentyp': 'Enumeration (6+ Werte)', 'Häufiger Fehler': 'Modell erfindet Werte nicht auf der Liste', 'Prompt-Muster, das ihn verhindert': 'Alle Werte in einer nummerierten Liste aufführen, dann: "Verwenden Sie nur Werte aus der obigen Liste. Keine Abkürzungen oder Kombinationen."' },
          { 'Datentyp': 'Nullable-Feld', 'Häufiger Fehler': 'Modell gibt "" statt null zurück, oder lässt Feld ganz weg', 'Prompt-Muster, das ihn verhindert': '"Geben Sie null zurück, wenn der Wert unbekannt ist. Geben Sie "" nur zurück, wenn das Feld bekannt leer ist. Beziehen Sie immer das Feld ein — lassen Sie es nicht weg."' },
          { 'Datentyp': 'Ganzzahl vs. Float', 'Häufiger Fehler': 'Modell gibt Float zurück, wenn Integer erwartet, oder String für beide', 'Prompt-Muster, das ihn verhindert': '"score (Ganzzahl — keine Dezimalstellen, z.B. 4 nicht 4.0)" oder "price (Float — genau 2 Dezimalstellen, z.B. 12.99 nicht 13)"' },
          { 'Datentyp': 'Verschachtetes Objekt', 'Häufiger Fehler': 'Modell vereinfacht verschachtetes Objekt zu flachen Schlüsseln (z.B. "address.city" statt {"address": {"city": ...}})', 'Prompt-Muster, das ihn verhindert': 'Zeigen Sie die vollständige verschachtelte Struktur im Schema-Template mit richtigem Einzug. Nur-Prosa-Beschreibung der Verschachtelung wird häufig zu flachen Schlüsseln vereinfacht.' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'warning', label: 'null vs. undefined vs. auslassen', text: 'JSON hat keinen undefined-Wert, aber Modelle verhalten sich manchmal so — lassen ein Feld ganz weg, wenn sie denken, der Wert ist unbekannt, anstatt null zurückzugeben. Wenn nachgelagerter Code hasOwnProperty()-Prüfungen nutzt, ist ein ausgelassenes Feld anders als ein null-Feld. Addieren Sie: "Beziehen Sie immer jedes Feld im Schema ein, auch wenn der Wert null ist."' },
          { type: 'pro-tip', label: 'Verschachtelte Enums brauchen Extra-Spezifität', text: 'Enums in verschachteten Objekten sind anfälliger für Tippfehler oder Abkürzungen als Top-Level-Enums. Wenn Sie ein Enum in einem verschachteten Objekt haben, wiederholen Sie die Anweisung nahe an der Stelle, wo das Feld im Schema-Template auftaucht, nicht nur in einem allgemeinen Feldregeln-Abschnitt.' },
        ],
      },
      testingReliability: {
        id: 'testing-reliability',
        title: 'Strukturierte Output-Zuverlässigkeit messen',
        content: [
          '**Zielen Sie auf eine 95%+ Pass-Rate auf einem 20-Fall-Test-Set, bevor Sie einen strukturierten Output-Prompt in Produktion bereitstellen. Unterhalb von 95% treten Produktionsfehler häufig genug auf, um einen Korrektur-Loop zu erfordern — der Latenz addiert und API-Kosten verdoppelt für jeden fehlgeschlagenen Anruf.**',
          'Messen Sie die Zuverlässigkeit auf Feldebene, nicht nur insgesamt. Ein Prompt mit 95% Gesamtpass-Rate aber 60% Pass-Rate auf einem Enum-Feld ist ein Prompt mit einem bekannten Produktionsausfallmodus. Feldebene-Messung sagt Ihnen genau, welche Anweisung Sie hinzufügen oder verstärken müssen.',
        ],
        numberedItems: [
          '**Bestätigen Sie Pass/Fail-Kriterien für jedes Schema-Feld.** Für jedes Feld: Typ ist korrekt, erforderliches Feld ist präsent, Enum-Wert ist auf der zulässigen Liste, Datumsformat passt zu erforderlichem Muster. Schreiben Sie diese als programmgesteuerte Überprüfungen — nicht visuelle Inspektion. Dieser Schritt erzeugt Ihr Test-Orakel.',
          '**Erstellen Sie ein 20-Fall-Test-Set.** Zehn Happy-Path-Eingaben (typisch, wohlgeformte Daten), fünf Edge Cases (fehlende optionale Felder, langer Text, ungewöhnliche Werte, mehrsprachiger Inhalt), fünf gegnerische Eingaben (in Feldwerte eingebettete Anweisungen, extreme Daten, mehrdeutige Typen). Verwenden Sie realistische Eingaben aus Ihrer echten Datendomäne.',
          '**Führen Sie bei Temperatur 0 aus und zeichnen Sie Pass/Fail pro Feld auf.** Führen Sie alle 20 Fälle bei Temperatur 0 für deterministische, wiederholbare Ergebnisse aus. Zeichnen Sie auf, ob jedes Feld in jedem Test-Fall besteht oder fehlschlägt — nicht nur das Gesamtergebnis. Feldebene-Ausfallmuster identifizieren, welche Anweisung fehlt.',
          '**Beheben Sie das Feld mit der niedrigsten Pass-Rate und testen Sie erneut.** Addieren oder verstärken Sie eine Feldanweisung: Typ, Format, null-Behandlung oder Enum-Werte. Führen Sie alle 20 Fälle erneut aus. Eine einzelne gezielt Anweisung hebt typischerweise die Gesamtpass-Rate um 5–15 Prozentpunkte. Wiederholen Sie, bis die Gesamtpass-Rate 95% oder höher ist.',
          '**Validieren Sie den Prompt auf einem zweiten Modell.** Führen Sie das volle 20-Fall-Set gegen ein zweites Modell mit dem gleichen Prompt aus. Ein Prompt bei 95%+ auf GPT-4o aber 70% auf Claude 4.6 Sonnet ist modellabhängig. Entweder addieren Sie explizitere Anweisungen, um auf beiden zu bestehen, oder dokumentieren Sie, für welches Modell der Prompt validiert ist, und switchen nicht ohne Retestung.',
        ],
        callouts: [
          { type: 'key-point', label: 'Führen Tests bei Temperatur 0 durch', text: 'Führen Sie strukturierte Output-Test-Sets bei Temperatur 0 durch, um deterministische, wiederholbare Ergebnisse zu erhalten. Ein Prompt, der bei Temperatur 0 besteht, ist zuverlässig von Design — nicht Glück. Erhöhen Sie die Temperatur nur, nachdem der Prompt bei 95%+ determiniert besteht, und testen Sie dann das Set bei der neuen Temperatur erneut, um sicherzustellen, dass Zuverlässigkeit hält.' },
          { type: 'pro-tip', label: 'Nutzen Sie PromptQuorum für Multi-Modell-Vergleich', text: 'PromptQuorum führt Ihr 20-Fall-Test-Set gegen GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro gleichzeitig aus und zeigt feldspezifische Pass-Raten Seite an Seite. Dies identifiziert modellabhängige Fehler in einem Durchlauf statt drei.' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '5 häufige strukturierte Output-Prompt-Fehler',
        content: '**Die fünf häufigsten Fehler bei strukturiertem Output-Prompting erzeugen alle das gleiche Symptom — regelmäßige oder systematische Fehler — benötigen aber verschiedene Fixes. Die Diagnose, welchen Fehler Sie haben, bevor Sie Anweisungen addieren, spart Zeit.**',
        mistakes: [
          {
            mistake: 'Schema in Prosa beschreiben statt es einzubetten',
            problem: 'Prosa-Beschreibungen sind mehrdeutig — "eine Elementeliste" könnte ein Array, kommagetrennte String oder nummerierte Liste bedeuten; "der Gesamtpreis" könnte String oder Float sein',
            fix: 'Betten Sie das erwartete Schema als JSON-Template direkt im Prompt ein. Das Template zeigt Feldnamen, Verschachtelungstiefe und Werttypen durch Struktur statt Prosa-Beschreibung.',
          },
          {
            mistake: 'Nicht angeben, wie mit fehlenden oder unbekannten Werten umzugehen ist',
            problem: 'Modelle erfinden plausible Werte für unbekannte Felder statt null zurückzugeben — Daten werden zu "unknown", Beträge zu 0, fehlende IDs zu "N/A" — nichts davon besteht Typ-Validierung',
            fix: 'Addieren Sie explizite null-Behandlung für jedes nullable Feld: "Geben Sie null zurück, wenn der Wert nicht aus der Eingabe bestimmt werden kann. Raten oder erfinden Sie keine Werte. Geben Sie keinen Leerstring zurück."',
          },
          {
            mistake: 'Nur gegen das Modell testen, auf dem Sie den Prompt entwickelt haben',
            problem: 'Strukturierte Output-Zuverlässigkeit variiert erheblich zwischen Modellen — ein Prompt bei 95% auf GPT-4o kann bei 70% auf Claude 4.6 Sonnet scheitern aufgrund unterschiedlichen Instruction-Folgens bei Schema-Konstraints',
            fix: 'Führen Sie jeden strukturierten Output-Prompt gegen mindestens 2 Modelle aus, bevor Sie ihn als modellunabhängig behandeln. Nutzen Sie PromptQuorum oder direkte API-Calls zum [Test von Prompts über Modelle hinweg](/prompt-engineering/how-to-test-prompts-across-models?lang=de) in einem Schritt.',
          },
          {
            mistake: 'Fehlgeschlagene Ausgaben mit dem gleichen Prompt wiederholen',
            problem: 'Ein fehlschlagender Prompt bei Temperatur 0 wiederholt erzeugt den gleichen Fehler jedes Mal. Bei höherer Temperatur erzeugt er variierende aber immer noch fehlende Ausgaben — verschiedene Fehler, gleiche Grundursache',
            fix: 'Nutzen Sie einen Korrektur-Prompt mit dem spezifischen Validierungsfehler und der fehlerhaften Ausgabe, oder diagnostizieren Sie das Ausfallmuster (welches Feld, welcher Eingabetyp) und addieren Sie eine gezielt Feldanweisung zum Basis-Prompt.',
          },
          {
            mistake: 'JSON-Modus als komplette strukturierte Output-Lösung behandeln',
            problem: 'JSON-Modus verhindert nicht analysierbare Ausgabe aber nicht Schema-Konformitätsfehler — ein Modell mit JSON-Modus kann immer noch gültiges JSON mit fehlenden Feldern, falschem Typ und ungültigen Enum-Werten zurückgeben, alle davon scheitern nachgelagert Validierung',
            fix: 'Beziehen Sie immer Schema im Prompt und Feldanweisungen ein, sogar wenn Sie API-erzwungenen JSON-Modus nutzen. Siehe [Strukturierte Ausgabe und JSON-Modus](/prompt-engineering/structured-output-json-mode?lang=de) für API-Konfiguration — dieses Handbuch behandelt die Prompt-Level-Ergänzung.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Ressourcen',
        items: [
          '[Strukturierte Ausgabe und JSON-Modus: Wann und wie Sie es nutzen](/prompt-engineering/structured-output-json-mode?lang=de) — API-Level-JSON-Modus-Konfiguration für GPT-4o, Claude und Gemini mit Modell-Konformitäts-Tabelle',
          '[Beste Tools für strukturierte Ausgabe (2026)](/prompt-engineering/best-tools-structured-output?lang=de) — Instructor, Outlines, Pydantic AI und LangChain für strukturierte Extraktions-Workflows verglichen',
          '[Wie Sie die Ausgabe kontrollieren: Format, Temperatur und beschränkte Dekodierung](/prompt-engineering/control-the-output?lang=de) — beschränkte Dekodierungs-Mechanik, Temperatur und top-p für strukturierte Aufgaben, Stop-Sequenzen',
          '[Wie Sie Prompt-Qualität bewerten: Metriken, Tests und Checkliste](/prompt-engineering/how-to-evaluate-prompt-quality?lang=de) — 20-Fall-Test-Set-Konstruktion, binäre Pass/Fail-Bewertung und LLM-as-Judge-Rubriken',
          '[Wie Sie Prompts über Modelle hinweg testen](/prompt-engineering/how-to-test-prompts-across-models?lang=de) — Ausführen des gleichen Prompts gegen GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro, um modellabhängige Fehler zu finden',
          '[Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot?lang=de) — Wann Sie Beispiele zu einem Prompt addieren und wie viele bei verschiedenen Aufgabentypen einbeziehen',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenAI Structured Outputs documentation](https://platform.openai.com/docs/guides/structured-outputs) — Technische Spezifikation für response_format und JSON-Modus in der OpenAI API',
          '[Anthropic tool use documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) — Wie Claudes tool_use-Parameter strukturierte Ausgabe auf API-Ebene erzwingt',
          '[Google Gemini GenerationConfig documentation](https://ai.google.dev/api/generate-content#v1beta.GenerationConfig) — Geminis responseMimeType-Konfiguration für natives JSON-Ausgabe',
          '[BAML benchmark: strukturierte Output-Genauigkeits-Trade-offs](https://docs.boundaryml.com/benchmarks) — Beweis auf Zuverlässigkeitsunterschiede zwischen beschränkter und unbeschränkter Generierung über Modelle',
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Governance-Prinzipien für AI-Ausgabevalidierung in Produktionssystemen',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-30',
    theme: 'Techniques',
    title: 'Données structurées fiables avec Prompts: 3 Techniques',
    seoTitle: 'Données structurées fiables avec Prompts: 3 Techniques',
    metaDescription: 'JSON-mode impose la syntaxe, pas la complétude des champs. Intégration du schéma, exemples de sortie et instructions de champ atteignent 95%+ de fiabilité sans changements API.',
    ogDescription: 'JSON-mode empêche le JSON malformé, pas les champs manquants ou les mauvais types. Trois techniques de prompt — schéma intégré, exemples de sortie, instructions de champ — atteignent 95%+ de fiabilité sans changements API.',
    twitterDescription: 'JSON-mode corrige la syntaxe, pas la conformité du schéma. Schéma dans le prompt + un exemple de sortie + instructions de champ → 95%+ de fiabilité. Pas de changements API.',
    intro: '**La plupart des défaillances de sortie structurée surviennent dans du JSON valide — champs manquants, dates formatées en simples strings, valeurs enum mal orthographiées, champs nullable renvoyant des strings vides au lieu de null.** Les APIs avec JSON-mode et tool_use éliminent les sorties non analysables mais ne résolvent pas les défaillances de conformité de schéma. Trois techniques de prompt résolvent ce que JSON-mode laisse de côté.**',
    leadAnswerBlock: '**Trois modèles de prompt atteignent 95% ou plus de fiabilité sans changements API: intégrer le schéma dans le prompt, montrer au modèle un exemple de sortie valide, et ajouter des instructions au niveau du champ pour le type, format et traitement null.** Ces modèles fonctionnent sur GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro, avec ou sans JSON-mode natif.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs créant des workflows de production avec les APIs LLM',
    primaryTerm: 'prompts pour données structurées fiables',
    aboutTopics: ['Prompting de Sortie Structurée', 'Conception de Schéma JSON', 'Tests de Fiabilité des Prompts'],
    quickFacts: [
      'Les APIs avec JSON-mode (OpenAI response_format, Anthropic tool_use) imposent du JSON analysable mais ne garantissent pas la présence des champs, les types de données corrects ou les valeurs enum valides — les défaillances de conformité du schéma exigent des contrôles au niveau du prompt',
      'Les modèles sans JSON-mode imposé par API atteignent 80–85% de fiabilité avec schéma seul; ajouter un exemple de sortie valide monte cela à 90–92%',
      'Les champs enum avec plus de 5 valeurs ont besoin que toutes les valeurs permises soient listées explicitement dans le prompt — les modèles inventent des valeurs plausibles hors de portée quand la liste enum manque',
      'Un ensemble de test de 20 cas (10 happy-path, 5 cas limites, 5 adversariaux) suffit à identifier les défaillances les plus courantes avant le déploiement en production',
    ],
    toc: [
      { label: 'Points clés',                                                          anchor: '#key-takeaways' },
      { label: 'Le Design du Prompt Détermine la Fiabilité de la Sortie Structurée',  anchor: '#what-makes-reliable' },
      { label: 'Intégrer le Schéma Directement dans le Prompt',                       anchor: '#schema-in-prompt' },
      { label: 'Montrer au Modèle un Exemple de Sortie Valide',                       anchor: '#example-anchoring' },
      { label: 'Instructions au Niveau du Champ, pas Seulement un Schéma',            anchor: '#field-instructions' },
      { label: 'Choisir JSON, YAML ou CSV selon la Tâche et l\'Imposition',           anchor: '#format-selection' },
      { label: 'Laisser le Modèle Corriger sa Propre Sortie Malformée',               anchor: '#failure-recovery' },
      { label: 'Modèles de Prompt pour les Tableaux, Énumérations et Champs Nullables', anchor: '#data-type-patterns' },
      { label: 'Mesurer la Fiabilité de la Sortie Structurée',                        anchor: '#testing-reliability' },
      { label: '5 Erreurs Courantes des Prompts de Sortie Structurée',                anchor: '#common-mistakes' },
      { label: 'Questions Fréquemment Posées',                                        anchor: '#faq' },
      { label: 'Lectures Supplémentaires',                                             anchor: '#related-reading' },
      { label: 'Sources',                                                              anchor: '#sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Données structurées fiables avec Prompts: 3 Techniques',
      description: 'JSON-mode impose la syntaxe, pas la complétude des champs. Intégration du schéma, exemples de sortie et instructions de champ atteignent 95%+ de fiabilité sans changements API.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      url: 'https://www.promptquorum.com/prompt-engineering/prompts-for-reliable-structured-data?lang=fr',
      inLanguage: 'fr',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompting de Sortie Structurée' },
        { '@type': 'Thing', name: 'Conception de Schéma JSON' },
        { '@type': 'Thing', name: 'Tests de Fiabilité des Prompts' },
      ],
      audience: { '@type': 'Audience', audienceType: 'Développeurs créant des workflows de production avec les APIs LLM' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment Mesurer et Améliorer la Fiabilité de la Sortie Structurée',
      inLanguage: 'fr',
      totalTime: 'PT2H',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Définir les critères de réussite/échec pour chaque champ du schéma',
          text: 'Pour chaque champ dans votre schéma, écrivez une vérification binaire qui s\'exécute programmatiquement: le type est correct, le champ requis est présent, la valeur enum est dans la liste permise, le format de date correspond au motif attendu. Ces vérifications sont votre oracle de test.',
        },
        {
          '@type': 'HowToStep',
          name: 'Construire un ensemble de test de 20 cas',
          text: 'Créez 20 entrées de test: 10 happy-path (typiques, bien formées), 5 cas limites (champs optionnels manquants, texte long, valeurs inhabituelles), 5 adversariaux (instructions intégrées dans les valeurs de champs, dates extrêmes, types ambigus).',
        },
        {
          '@type': 'HowToStep',
          name: 'Exécuter à la température 0 et enregistrer les taux de réussite par champ',
          text: 'Exécutez les 20 cas contre votre prompt à la température 0 pour des résultats déterministes. Enregistrez réussite/échec par champ, pas seulement au total. Les défaillances par champ identifient exactement quelle instruction manque ou est ambiguë.',
        },
        {
          '@type': 'HowToStep',
          name: 'Corriger le champ avec le taux de réussite le plus faible et retester',
          text: 'Identifiez le champ avec le plus de défaillances. Ajoutez ou renforcez son instruction: type, valeurs permises, format, traitement null. Réexécutez les 20 cas. Répétez jusqu\'à ce que le taux global atteigne 95% ou plus.',
        },
        {
          '@type': 'HowToStep',
          name: 'Valider le prompt sur un second modèle',
          text: 'Exécutez le même ensemble de 20 cas sur un second modèle. Un prompt à 95%+ sur GPT-4o mais 70% sur Claude 4.6 Sonnet est dépendant du modèle. Soit rendez les instructions plus explicites pour réussir sur les deux, soit documentez pour quel modèle le prompt est validé.',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'JSON-mode rend le schéma dans le prompt inutile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. JSON-mode impose du JSON analysable, pas la conformité du schéma. Un modèle avec JSON-mode peut toujours retourner du JSON valide avec champs manquants, mauvais types de données ou valeurs enum invalides. Schéma dans le prompt et instructions de champ traitent les défaillances de conformité du schéma; JSON-mode empêche seulement les sorties non analysables. Les deux approches sont complémentaires, pas alternatives.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien d\'exemples de sortie dois-je inclure dans le prompt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un exemple est généralement suffisant et offre le plus grand gain de fiabilité. Un deuxième exemple a de la valeur seulement si vos données ont une structure sensiblement différente selon les conditions d\'entrée — par exemple, quand certains champs sont conditionnellement requis selon le type d\'entrée. Au-delà de deux exemples, le coût de la longueur du prompt dépasse le bénéfice de fiabilité pour la plupart des tâches.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les instructions au niveau du champ peuvent-elles porter la fiabilité au-delà de 95%?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, mais avec des rendements décroissants. Chaque instruction de champ supplémentaire pour un champ déjà fiable (95%+ individuellement) élève rarement le taux global de plus de 1–2 points de pourcentage. Concentrez-vous sur les champs avec <85% de taux de réussite; là vous verrez 5–15 points d\'amélioration par instruction. Après 95% globalement, le bénéfice est marginal; utilisez un prompt de correction pour les cas limites restants.',
          },
        },
        {
          '@type': 'Question',
          name: 'Dois-je tester le même prompt à des températures différentes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Testez d\'abord à la température 0 pour des résultats déterministes et répétables. Seulement quand le prompt atteint 95%+ à la température 0, augmentez la température et retestez. Un prompt à 95% et température 0, mais 60% à température 1 est sensible à la température — vous devez ajouter des instructions plus explicites ou rester à température 0.',
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce que 95% de taux de réussite est «assez bon» pour la production?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour la plupart des systèmes de production oui, avec réserves. À 95% de fiabilité sur 100 demandes de sortie structurée par jour, vous obtenez ~5 erreurs quotidiennes; à 1000/jour c\'est ~50. Sous 95% — environ 85% — un loop de correction est obligatoire pour éviter la gestion des erreurs. Au-delà de 99% est inutile pour les données non critiques. Cible: 95–97% selon la tolérance d\'erreur en aval.',
          },
        },
        {
          '@type': 'Question',
          name: 'L\'ordre des champs dans le schéma affecte-t-il la fiabilité?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Placez les champs requis en premier et les champs optionnels ou nullables en dernier. Les modèles pondèrent plus fortement les premiers éléments du schéma quand ils décident quoi inclure. Un champ nullable listé en premier est plus susceptible d\'être omis qu\'un champ requis listé plus tard, quand le modèle est incertain sur la valeur. Cet effet d\'ordre est cohérent sur GPT-4o et Claude 4.6 Sonnet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Dois-je ajouter des FAQs spécifiques à la France?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Cet article couvre des principes de prompt engineering universels applicables sur tous les marchés. Il n\'y a pas de variantes régionales en France pour la conception de prompts de sortie structurée. Les meilleures pratiques et techniques décrites s\'appliquent de la même façon aux développeurs français et internationaux.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on tester des prompts de sortie structurée sans écrire du code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Techniquement oui mais c\'est laborieux. Vous pouvez tester manuellement 20 cas, enregistrer les résultats dans une feuille de calcul et compter les réussites par champ. Mais l\'automatisation — un script Python ou Node.js — vous permet d\'itérer plus rapidement et de suivre les changements entre les révisions de prompt. Commencez avec l\'automatisation si possible.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que faire si mon prompt échoue plus de 15% du temps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diagnostiquez le motif: quel champ échoue, dans quelles conditions d\'entrée. Ajoutez ou renforcez l\'instruction de ce champ spécifique. Retestez. N\'utilisez pas de loops de correction en production — cela double le coût. Fixez le prompt à la source. Si vous ne pouvez pas identifier le motif, envisagez une approche complètement différente: API JSON-mode imposé, un LLM différent ou une tâche légèrement modifiée.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment PromptQuorum aide-t-il pour ce workflow?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PromptQuorum teste automatiquement votre ensemble de 20 cas sur GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro simultanément et affiche les taux de réussite par champ côte à côte. Cela identifie les défaillances dépendantes du modèle en une exécution au lieu de trois. Vous voyez immédiatement quel modèle a quel problème et quel champ a besoin d\'une instruction renforcée.',
          },
        },
      ],
    },
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        title: 'Points clés',
        content: [
          '**JSON-mode au niveau API arrête la syntaxe JSON malformée, pas les défaillances de conformité du schéma.** Du JSON valide peut manquer de champs, utiliser les mauvais types et contenir des valeurs enum invalides qui échouent toutes à la validation en aval.',
          '**Intégrer le schéma dans le prompt est le fondement.** Un template JSON structuré directement dans le prompt montre au modèle les noms de champs, la profondeur d\'imbrication et les types par la structure, pas la prose.',
          '**Un exemple de sortie valide augmente la fiabilité de 5–10 points.** Le modèle voit à quoi ressemble une sortie réussie et suit mieux.',
          '**Les instructions au niveau du champ pour le type, format et traitement null sont critiques.** «Champ enum» est ambigu; «status (exactement l\'un de: \'active\', \'inactive\', \'pending\' — pas d\'abréviations)» ne l\'est pas.',
          '**95% de taux de réussite sur un ensemble de test de 20 cas est le gate de production.** Sous 95%, les défaillances en production surviennent assez souvent pour exiger un loop de correction qui double le coût et la latence.',
        ],
      },
      whatMakesReliable: {
        id: 'what-makes-reliable',
        title: 'Le Design du Prompt Détermine la Fiabilité de la Sortie Structurée',
        content: '**Les APIs JSON-mode (OpenAI response_format, Anthropic tool_use, Google Gemini responseMimeType) imposent du JSON analysable, mais ne font rien pour la conformité du schéma — champs requis présents, types de données corrects, valeurs enum valides. Ces erreurs surviennent malgré l\'enforcement au niveau API et exigent des contrôles de design de prompt.**',
        callouts: [
          { type: 'key-point', label: 'JSON-mode ne suffit pas', text: 'JSON-mode imposé par API empêche les sorties non analysables (espaces dans JSON, guillemets non échappés). Il n\'empêche pas la conformité du schéma: un modèle avec JSON-mode activé peut toujours retourner du JSON valide avec champs manquants, mauvais type et valeurs invalides. La conformité du schéma est un problème de prompt, pas un problème d\'API.' },
          { type: 'pro-tip', label: 'Testez d\'abord avec schéma dans le prompt seul', text: 'Les modèles sans JSON-mode imposé par API (APIs anciennes, LLMs locaux) atteignent 80–85% de fiabilité avec schéma seul dans le prompt. Cela établit la baseline et montre où les 15–20 points restants ajoutent utilement.' },
        ],
      },
      schemaInPrompt: {
        id: 'schema-in-prompt',
        title: 'Intégrer le Schéma Directement dans le Prompt',
        content: '**Montrer le schéma comme un template JSON directement dans le prompt est la technique de plus haute valeur.** Les prompts qui décrivent le schéma seulement en prose («une liste de champs») sont ambigus. Le modèle ne voit pas clairement les noms de champs, la profondeur d\'imbrication ou le type et devine.',
        promptExamples: [
          {
            bad: 'Retournez une liste de données client.',
            good: 'Retournez les données client dans ce format JSON exact:\n{\n  "customer_id": "string",\n  "name": "string",\n  "email": "string",\n  "purchases": ["item1", "item2"],\n  "total_spent": 0.00,\n  "is_premium": true\n}\n\nIncluez tous les champs. Jamais null.',
            badLabel: 'Ambigu — pas de structure',
            goodLabel: 'Template de schéma avec types montrés par la structure',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'Distribuer les objets imbriqués sur plusieurs lignes', text: 'Presser les structures imbriquées sur une ligne rend difficile pour les modèles de voir la profondeur. Les templates multi-lignes avec indentation sont beaucoup plus faciles à suivre.' },
          { type: 'pro-tip', label: 'Montrer explicitement null et les arrays vides', text: 'Utilisez le template pour montrer à quoi null ressemble (pas «nil», pas «N/A», juste null) et à quoi un array vide ressemble ([] pas null). Si ce n\'est pas dans votre template, ces choses se font mal.' },
        ],
      },
      exampleAnchoring: {
        id: 'example-anchoring',
        title: 'Montrer au Modèle un Exemple de Sortie Valide',
        content: '**Un exemple de sortie augmente la fiabilité de 5–10 points et coûte peu de tokens.** Le modèle voit un motif de sortie réussi et suit mieux, particulièrement pour les champs avec types ambigus (une liste de dates est-elle un array ou séparé par virgules?) ou valeurs enum (est-ce \'ACTIVE\' ou \'active\'?).',
        promptExamples: [
          {
            bad: 'Retournez les détails client en JSON. Champs: customer_id, status.\n\nInput: {{ data }}',
            good: 'Retournez les détails client en JSON. Champs: customer_id (string), status (enum: \'active\', \'inactive\', \'pending\').\n\nExemple:\n{"customer_id": "CUST-12345", "status": "active"}\n\nInput: {{ data }}',
            badLabel: 'Pas d\'exemples — le modèle devine sur enum',
            goodLabel: 'L\'exemple montre format, type, orthographe de valeur enum',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'Un exemple suffit pour la plupart des cas', text: 'Deux ou plus d\'exemples aident seulement quand vos types de données varient significativement selon les conditions d\'entrée. Pour la plupart des tâches, un second exemple double le coût des tokens sans bénéfice de fiabilité.' },
          { type: 'pro-tip', label: 'Choisir un exemple pour les cas limites, pas juste happy path', text: 'Un exemple avec tous les champs remplis est moins utile qu\'un avec un champ optionnel vide montrant null, ou un array avec un seul élément. Cela montre au modèle comment gérer les cas limites.' },
        ],
      },
      fieldInstructions: {
        id: 'field-instructions',
        title: 'Instructions au Niveau du Champ, pas Seulement un Schéma',
        content: '**Les instructions au niveau du champ pour type, format, valeurs permises et traitement null élèvent la fiabilité de 90% à 95%+.** Ces instructions sont la couche finale qui élimine l\'ambiguïté.',
        columns: ['Type de champ', 'Erreur courante', 'Instruction de champ qui la prévient'],
        rows: [
          { 'Type de champ': 'Integer vs. Float', 'Erreur courante': 'Le modèle retourne float quand integer est attendu', 'Instruction de champ qui la prévient': '"score (integer — pas de décimales, ex. 4 pas 4.0)"' },
          { 'Type de champ': 'Énumération (5+ valeurs)', 'Erreur courante': 'Le modèle invente des valeurs pas sur la liste', 'Instruction de champ qui la prévient': 'Toutes les valeurs listées: «Utilisez seulement les valeurs de la liste. Pas d\'abréviations.»' },
          { 'Type de champ': 'Champ nullable', 'Erreur courante': 'Le modèle retourne "" au lieu de null', 'Instruction de champ qui la prévient': '"Retournez null si la valeur est inconnue. Retournez \"\" seulement si le champ est connu vide."' },
          { 'Type de champ': 'String de date', 'Erreur courante': 'Le modèle utilise différents formats', 'Instruction de champ qui la prévient': '"date_created (ISO 8601: \'2026-05-15\')"' },
          { 'Type de champ': 'Array', 'Erreur courante': 'Le modèle retourne null pour array vide', 'Instruction de champ qui la prévient': '"Toujours retourner un array, même si vide. [] pas null."' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'key-point', label: 'Les instructions doivent être spécifiques et testables', text: 'Une instruction de champ comme «bonne qualité» n\'est pas testable. «Exactement ISO 8601 ou erreur» l\'est. Les instructions testables soutiennent l\'automatisation des tests plus tard.' },
          { type: 'pro-tip', label: 'Utiliser regex ou exemples pour les formats', text: 'Pour les champs date, téléphone ou format, donnez un regex ou 2–3 exemples, pas seulement de la prose: «format: /^\\d{3}-\\d{3}-\\d{4}$/ (ex. 555-123-4567)»' },
        ],
      },
      formatSelection: {
        id: 'format-selection',
        title: 'Choisir JSON, YAML ou CSV selon la Tâche et l\'Imposition',
        content: '**La plupart des tâches de sortie structurée nécessitent JSON. YAML et CSV sont plus rapides à écrire pour les humains, mais les modèles y sont moins fiables sans imposition au niveau API.** JSON avec API-mode a le sol de fiabilité le plus élevé.',
        columns: ['Format', 'Sol sans API', 'Sol avec API', 'Meilleur pour'],
        rows: [
          { 'Format': 'JSON', 'Sol sans API': '80–85%', 'Sol avec API': '95%+', 'Meilleur pour': 'Structures imbriquées, APIs, logging' },
          { 'Format': 'YAML', 'Sol sans API': '70–75%', 'Sol avec API': '85–90%', 'Meilleur pour': 'Lisible humain, pas d\'imbrication' },
          { 'Format': 'CSV', 'Sol sans API': '65–70%', 'Sol avec API': '80–85%', 'Meilleur pour': 'Tableaux plats, capture de données batch' },
          { 'Format': 'XML', 'Sol sans API': '75–80%', 'Sol avec API': '90–95%', 'Meilleur pour': 'Systèmes legacy qui en ont besoin' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'key-point', label: 'JSON est le choix par défaut', text: 'Utilisez JSON si vous avez des structures imbriquées ou pouvez utiliser imposition au niveau API. Cela donne le sol de fiabilité le plus élevé.' },
          { type: 'pro-tip', label: 'Tester CSV pour structures tabulaires plates', text: 'CSV est plus rapide pour les données tabulaires simples (une ligne = un enregistrement) et moins cher en tokens. Si vous avez seulement 3–5 colonnes, testez CSV avec schéma; si l\'imbrication apparaît, basculer à JSON.' },
        ],
      },
      failureRecovery: {
        id: 'failure-recovery',
        title: 'Laisser le Modèle Corriger sa Propre Sortie Malformée',
        content: [
          '**Quand un prompt de sortie structurée échoue, envoyez un prompt de correction contenant l\'instruction originale, la sortie malformée et l\'erreur de validation spécifique. Les modèles récupèrent une sortie valide de leur propre réponse malformée dans 60–75% des cas sans réécriture de prompt.**',
          'Un prompt de correction a trois parties requises: (1) une réaffirmation de ce que la sortie doit ressembler (le schéma ou format), (2) la sortie malformée exactement comme le modèle l\'a retournée, (3) l\'erreur de validation spécifique — «le champ requis \'invoice_id\' manque», «amount est une string, attendu float». Cette structure en trois parties donne au modèle assez de contexte pour corriger le problème spécifique plutôt que de générer une réponse différente avec des erreurs différentes.',
        ],
        promptExamples: [
          {
            bad: 'Vous avez retourné une sortie invalide. Essayez à nouveau et retournez du JSON valide.\n\n{{original_prompt}}',
            good: 'Votre réponse précédente a échoué la validation. Corriger seulement les erreurs listées ci-dessous et retourner du JSON corrigé.\n\nSchéma attendu:\n{\n  "invoice_id": "string",\n  "amount": 0.00,\n  "status": "string"\n}\n\nVotre réponse précédente:\n{\n  "invoice_id": null,\n  "amount": "150.00",\n  "status": "PAID"\n}\n\nErreurs de validation:\n- invoice_id est null mais doit être un champ string requis — l\'extraire de l\'input\n- amount est un string ("150.00") mais doit être un float (150.00)\n- status doit être minuscule: utilisez \'paid\', pas \'PAID\'\n\nRetourner seulement l\'objet JSON corrigé.',
            badLabel: 'Retry vague — pas de contexte d\'erreur',
            goodLabel: 'Prompt de correction avec schéma, sortie et erreurs spécifiques',
          },
        ],
        callouts: [
          { type: 'key-point', label: 'Si correction échoue deux fois, corriger le prompt de base', text: 'Si le prompt de correction ne produit pas une sortie valide à la deuxième tentative, le problème est dans le prompt de base, pas les données d\'input. Arrêter la réitération et diagnostiquer le motif d\'échec: quel champ échoue, sous quelles conditions d\'input. Ajouter une instruction de champ ou changement de schéma pour prévenir l\'échec à la source.' },
          { type: 'warning', label: 'Les prompts de correction ajoutent latence et coût', text: 'Chaque prompt de correction double le coût API et la latence pour cet appel. Utiliser les prompts de correction seulement pour les échecs de cas limites (<10% des sorties). Si votre prompt échoue plus de 10% du temps, corriger le prompt de base plutôt que de construire un loop de correction en production.' },
        ],
      },
      dataTypePatterns: {
        id: 'data-type-patterns',
        title: 'Modèles de Prompt pour les Tableaux, Énumérations et Champs Nullables',
        content: '**Les arrays, énumérations et champs nullable sont les trois sources courantes d\'erreurs de sortie structurée que schéma seul n\'empêche pas. Chacun nécessite un motif d\'instruction spécifique dans le prompt.**',
        columns: ['Type de données', 'Erreur courante', 'Motif de prompt qui l\'empêche'],
        rows: [
          { 'Type de données': 'Array (0 éléments)', 'Erreur courante': 'Le modèle retourne null au lieu de []', 'Motif de prompt qui l\'empêche': '"Retournez un array vide [] s\'il n\'y a pas d\'éléments. Ne retournez jamais null pour les champs array."' },
          { 'Type de données': 'Array (1+ éléments)', 'Erreur courante': 'Le modèle retourne objet seul au lieu d\'array avec un élément', 'Motif de prompt qui l\'empêche': '"Toujours retourner un array, même avec un seul élément. Éléments uniques doivent être enrobés: [{...}]"' },
          { 'Type de données': 'Énumération (2–5 valeurs)', 'Erreur courante': 'Le modèle abrège ou invente des valeurs similaires', 'Motif de prompt qui l\'empêche': '"status: exactement l\'un de: \'active\', \'inactive\', \'pending\' — pas d\'abréviations ou variantes"' },
          { 'Type de données': 'Énumération (6+ valeurs)', 'Erreur courante': 'Le modèle invente des valeurs pas sur la liste', 'Motif de prompt qui l\'empêche': 'Lister toutes les valeurs dans une liste numérotée, puis: «Utilisez seulement les valeurs de la liste ci-dessus. Pas d\'abréviations ou combinaisons.»' },
          { 'Type de données': 'Champ nullable', 'Erreur courante': 'Le modèle retourne "" au lieu de null, ou omet le champ', 'Motif de prompt qui l\'empêche': '"Retournez null si la valeur est inconnue. Retournez \"\" seulement si le champ est connu vide. Toujours inclure le champ — ne l\'omettez pas."' },
          { 'Type de données': 'Integer vs float', 'Erreur courante': 'Le modèle retourne float si integer attendu, ou string pour les deux', 'Motif de prompt qui l\'empêche': '"score (integer — pas de décimales, ex. 4 pas 4.0)" ou "price (float — exactement 2 décimales, ex. 12.99 pas 13)"' },
          { 'Type de données': 'Objet imbriqué', 'Erreur courante': 'Le modèle aplatit l\'objet imbriqué en clés plates (ex. "address.city" au lieu de {"address": {"city": ...}})', 'Motif de prompt qui l\'empêche': 'Montrer la structure imbriquée complète dans le template de schéma avec indentation propre. La description en prose seule d\'imbrication s\'aplatit souvent.' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'warning', label: 'null vs. undefined vs. omis', text: 'JSON n\'a pas de valeur undefined, mais les modèles se comportent parfois comme si — omettant un champ entièrement quand ils pensent que la valeur est inconnue, plutôt que de retourner null. Si du code en aval utilise des vérifications hasOwnProperty(), un champ omis est différent d\'un champ null. Ajoutez: «Toujours inclure chaque champ du schéma, même si la valeur est null.»' },
          { type: 'pro-tip', label: 'Les énumérations imbriquées ont besoin d\'extra-spécificité', text: 'Les énumérations dans les objets imbriqués sont plus susceptibles à des fautes de frappe ou abréviations que les énumérations de top-level. Si vous avez une énumération dans un objet imbriqué, répétez l\'instruction près de là où le champ apparaît dans le template de schéma, pas seulement dans une section générale de règles de champ.' },
        ],
      },
      testingReliability: {
        id: 'testing-reliability',
        title: 'Mesurer la Fiabilité de la Sortie Structurée',
        content: [
          '**Ciblez 95%+ de taux de réussite sur un ensemble de test de 20 cas avant de déployer un prompt de sortie structurée en production. Sous 95%, les défaillances surviennent assez souvent pour exiger un loop de correction — qui ajoute latence et double le coût API pour chaque appel échoué.**',
          'Mesurez la fiabilité au niveau du champ, pas seulement au total. Un prompt à 95% de taux global mais 60% sur un champ enum est un prompt avec un mode d\'défaillance de production connu. La mesure au niveau du champ vous dit exactement quelle instruction ajouter ou renforcer.',
        ],
        numberedItems: [
          '**Définir les critères de réussite/échec pour chaque champ du schéma.** Pour chaque champ: type est correct, champ requis est présent, valeur enum est sur la liste permise, format de date correspond au motif requis. Écrivez-les comme des vérifications programmatiques — pas d\'inspection visuelle. Cette étape produit votre oracle de test.',
          '**Construire un ensemble de test de 20 cas.** Dix happy-path (typiques, bien formées), cinq cas limites (champs optionnels manquants, texte long, valeurs inhabituelles, contenu multilingue), cinq adversariaux (instructions intégrées dans les valeurs de champs, dates extrêmes, types ambigus). Utilisez des inputs réalistes de votre domaine réel.',
          '**Exécuter à la température 0 et enregistrer réussite/échec par champ.** Exécutez les 20 cas à la température 0 pour des résultats déterministes et répétables. Enregistrez si chaque champ réussit ou échoue dans chaque test — pas seulement le résultat global. Les motifs d\'échec au niveau du champ identifient quelle instruction manque.',
          '**Corriger le champ avec le taux de réussite le plus faible et retester.** Ajouter ou renforcer une instruction de champ: type, format, traitement null ou valeurs enum. Réexécuter les 20 cas. Une instruction unique ciblée élève typiquement le taux global de 5–15 points. Répétez jusqu\'à atteindre 95% ou plus.',
          '**Valider le prompt sur un second modèle.** Exécuter l\'ensemble complet de 20 cas sur un second modèle avec le même prompt. Un prompt à 95%+ sur GPT-4o mais 70% sur Claude 4.6 Sonnet est dépendant du modèle. Soit ajouter des instructions assez explicites pour réussir sur les deux, soit documenter quel modèle le prompt est validé pour et ne pas changer sans retesting.',
        ],
        callouts: [
          { type: 'key-point', label: 'Exécuter les tests à la température 0', text: 'Exécuter les ensembles de test de sortie structurée à la température 0 pour obtenir des résultats déterministes et répétables. Un prompt qui passe à la température 0 est fiable par design — pas lucky. Seulement augmenter la température après que le prompt passe 95%+ déterministement, puis retester l\'ensemble à la nouvelle température pour confirmer que la fiabilité tient.' },
          { type: 'pro-tip', label: 'Utiliser PromptQuorum pour comparaison multi-modèle', text: 'PromptQuorum exécute votre ensemble de test de 20 cas sur GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro simultanément et affiche les taux de réussite par champ côte à côte. Cela identifie les défaillances dépendantes du modèle en un run au lieu de trois.' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '5 Erreurs Courantes des Prompts de Sortie Structurée',
        content: '**Les cinq erreurs courantes du prompting de sortie structurée produisent toutes le même symptôme — défaillances intermittentes ou systématiques — mais exigent des correctifs différents. Diagnostiquer quelle erreur vous avez avant d\'ajouter des instructions économise du temps.**',
        mistakes: [
          {
            mistake: 'Décrire le schéma en prose au lieu de l\'intégrer',
            problem: 'Les descriptions en prose sont ambiguës — «une liste d\'éléments» pourrait être un array, une string séparé par virgules ou une liste numérotée; «le total» pourrait être string ou float',
            fix: 'Intégrer le schéma attendu comme template JSON directement dans le prompt. Le template montre noms de champs, profondeur d\'imbrication et types de valeurs par la structure plutôt que la description en prose.',
          },
          {
            mistake: 'Ne pas spécifier comment gérer les valeurs manquantes ou inconnues',
            problem: 'Les modèles inventent des valeurs plausibles pour champs inconnus plutôt que de retourner null — dates deviennent «unknown», montants deviennent 0, IDs manquantes deviennent «N/A» — rien ne passe la validation de type',
            fix: 'Ajouter un traitement explicit null pour chaque champ nullable: «Retournez null si la valeur ne peut pas être déterminée de l\'input. Ne devinez ou n\'inventez pas de valeurs. Ne retournez pas de string vide.»',
          },
          {
            mistake: 'Tester seulement contre le modèle sur lequel vous avez développé le prompt',
            problem: 'La fiabilité de sortie structurée varie significativement entre les modèles — un prompt à 95% sur GPT-4o peut échouer à 70% sur Claude 4.6 Sonnet à cause du suivi d\'instruction différent sur les contraintes de schéma',
            fix: 'Exécuter chaque prompt de sortie structurée contre au minimum 2 modèles avant de le traiter comme agnostique au modèle. Utiliser PromptQuorum ou des appels API directs pour [tester les prompts sur les modèles](/prompt-engineering/how-to-test-prompts-across-models?lang=fr) en une étape.',
          },
          {
            mistake: 'Réessayer une sortie échouée avec le même prompt',
            problem: 'Un prompt échouant réessayé à la température 0 produit la même erreur à chaque fois. À température plus élevée, il produit une sortie variée mais toujours échouée — erreurs différentes, cause racine identique',
            fix: 'Utiliser un prompt de correction avec l\'erreur de validation spécifique et la sortie malformée, ou diagnostiquer le motif d\'échec (quel champ, quel type d\'input) et ajouter une instruction de champ ciblée au prompt de base.',
          },
          {
            mistake: 'Traiter JSON-mode comme une solution complète de sortie structurée',
            problem: 'JSON-mode empêche la sortie non analysable mais pas les défaillances de conformité du schéma — un modèle avec JSON-mode peut toujours retourner du JSON valide avec champs manquants, mauvais types et valeurs enum invalides, tous échouant à la validation en aval',
            fix: 'Toujours inclure schéma-dans-le-prompt et instructions de champ même quand utilisant JSON-mode imposé par API. Voir [Sortie Structurée et JSON-mode](/prompt-engineering/structured-output-json-mode?lang=fr) pour configuration API — ce guide couvre le complément au niveau prompt.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures Supplémentaires',
        items: [
          '[Sortie Structurée et JSON-mode: Quand et Comment l\'Utiliser](/prompt-engineering/structured-output-json-mode?lang=fr) — Configuration JSON-mode au niveau API pour GPT-4o, Claude et Gemini avec tableau de conformité du modèle',
          '[Meilleurs Outils pour Sortie Structurée (2026)](/prompt-engineering/best-tools-structured-output?lang=fr) — Instructor, Outlines, Pydantic AI et LangChain comparés pour workflows d\'extraction structurée',
          '[Comment Contrôler la Sortie: Format, Température et Décodage Contraint](/prompt-engineering/control-the-output?lang=fr) — Mécanique de décodage contraint, température et top-p pour tâches structurées, séquences d\'arrêt',
          '[Comment Évaluer la Qualité du Prompt: Métriques, Tests et Checklist](/prompt-engineering/how-to-evaluate-prompt-quality?lang=fr) — Construction d\'ensemble de test de 20 cas, scoring réussite/échec binaire et rubriques LLM-as-judge',
          '[Comment Tester les Prompts sur les Modèles](/prompt-engineering/how-to-test-prompts-across-models?lang=fr) — Exécution du même prompt sur GPT-4o, Claude 4.6 Sonnet et Gemini 2.5 Pro pour trouver les défaillances dépendantes du modèle',
          '[Zero-Shot vs. Few-Shot Prompting](/prompt-engineering/zero-shot-vs-few-shot?lang=fr) — Quand ajouter des exemples à un prompt et combien en inclure pour différents types de tâches',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Documentation OpenAI Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) — Spécification technique pour response_format et JSON-mode dans l\'API OpenAI',
          '[Documentation Anthropic tool use](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) — Comment le paramètre tool_use de Claude impose la sortie structurée au niveau API',
          '[Documentation Google Gemini GenerationConfig](https://ai.google.dev/api/generate-content#v1beta.GenerationConfig) — Configuration responseMimeType de Gemini pour sortie JSON native',
          '[Benchmark BAML: compromis de précision de sortie structurée](https://docs.boundaryml.com/benchmarks) — Preuve sur les différences de fiabilité entre génération contraint et sans contrainte sur les modèles',
          '[Framework de Gestion des Risques AI du NIST](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Principes de gouvernance pour la validation des sorties AI dans les systèmes de production',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-30',
    theme: 'テクニック',
    sections: {},
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-30',
    theme: '技术',
    sections: {},
  },
};
