// Article: prompts-for-reliable-structured-data
// Created: 2026-04-30

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-30',
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
    sections: {},
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-30',
    theme: 'Techniques',
    sections: {},
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
