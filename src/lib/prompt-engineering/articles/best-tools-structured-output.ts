import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    theme: 'Tools & Platforms',
    heroImage: '/images/best-tools-structured-output-overview-hero-en.webp',
    title: 'Best Tools for Structured Output and JSON Mode (2026)',
    seoTitle: 'Best Tools for Structured Output and JSON Mode (2026)',
    metaDescription: '7 structured output tools compared: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin, PromptQuorum. Pricing, schema format, local model support.',
    ogTitle: 'Best Tools for Structured Output and JSON Mode (2026)',
    ogDescription: '7 tools for LLM structured output compared: Instructor for retries, Outlines for constrained decoding, BAML for polyglot teams. Test consistency with PromptQuorum.',
    twitterTitle: 'Best Tools for Structured Output and JSON Mode (2026)',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin — which structured output tool fits your stack? Side-by-side comparison (2026).',
    intro: '**Seven tools dominate structured output in 2026: Instructor for Pydantic extraction, Outlines for constrained decoding, Pydantic AI for type-safe agents, BAML for schema-first prompt files, LangChain for unified APIs, Marvin for task-based extraction, and PromptQuorum for cross-model testing. Each solves a different workflow bottleneck.**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — library versions, licences, APIs, and documentation URLs re-verified against official repositories, PyPI, and vendor documentation',
    readTime: '11 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'structured output tools for LLMs',
    aboutTopics: ['structured output tools', 'LLM validation libraries', 'schema enforcement'],
    audience: 'Developers building production LLM applications with structured output requirements',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: 'Problems Each Tool Solves', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor: Pydantic Extraction', anchor: '#instructor' },
      { label: 'Outlines: Constrained Decoding', anchor: '#outlines' },
      { label: 'Pydantic AI: Type-Safe Agents', anchor: '#pydantic-ai' },
      { label: 'BAML: Schema-First Prompt Files', anchor: '#baml' },
      { label: 'LangChain: Unified APIs', anchor: '#langchain-structured-output' },
      { label: 'Marvin: Task-Based Extraction', anchor: '#marvin' },
      { label: 'PromptQuorum: Cross-Model Testing', anchor: '#promptquorum' },
      { label: 'Side-by-Side Comparison', anchor: '#side-by-side-comparison' },
      { label: 'Choosing the Right Tool', anchor: '#how-to-choose' },
      { label: 'Adding Structured Output Step-by-Step', anchor: '#how-to-add-structured-output' },
      { label: 'Common Structured Output Mistakes', anchor: '#common-mistakes' },
      { label: 'Frequently Asked Questions', anchor: '#faq' },
    ],
    leadAnswerBlock: '**Choose based on where your models run and which languages your team ships: Instructor and Pydantic AI for Python API workflows with retries and type safety; Outlines for guaranteed schema compliance on local models; BAML when the same schema must serve Python, TypeScript, and Go services; LangChain for teams already using chains or agents; Marvin for fast extract/cast/classify calls; PromptQuorum for consistency testing across GPT, Claude, and Gemini before production.**',
    quickFacts: [
      'Instructor is MIT-licensed and ships six official implementations: Python, TypeScript, Ruby, Go, Elixir, and Rust',
      'Outlines 1.x constrains tokens at generation time and now also drives hosted APIs, not just local backends',
      'Pydantic AI offers three output modes — native structured output, tool calls, and prompted JSON',
      'BAML compiles one .baml schema file into typed clients and repairs malformed model output instead of retrying',
      'LangChain 1.x reads each provider native structured-output support from its model profile',
      'Marvin 3.x is built on Pydantic AI and exposes extract, cast, classify, and generate',
      'PromptQuorum tests the same prompt across 25+ models for consistency'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Tools for Structured Output and JSON Mode (2026)',
      description: 'Compare seven libraries for LLM structured output: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin, and PromptQuorum. Ranked by schema enforcement, language support, local model compatibility, and pricing.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'en',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Structured Output Libraries' },
        { '@type': 'Thing', name: 'Schema Validation' },
        { '@type': 'Thing', name: 'LLM API Wrappers' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Best Tools for LLM Structured Output (2026)',
      description: 'Seven leading libraries for enforcing structured output from language models.',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: 'Pydantic-based extraction from any LLM, with automatic retries. MIT-licensed open source, six language implementations.' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: 'Constrained decoding library for guaranteed schema compliance on local models. Apache 2.0 open source.' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: 'Type-safe agent framework with three structured output modes and durable execution integrations.' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: 'Schema-first prompt language that compiles typed clients and repairs malformed model output via schema-aligned parsing.' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'Unified API layer for structured output across OpenAI, Anthropic, Google, and local models.' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'Task-centric library built on Pydantic AI, exposing extract, cast, classify, and generate helpers.' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'Cross-model testing platform to validate structured output consistency across GPT, Claude, and Gemini.' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: 'Use Instructor for Python API extraction with retries. Use Outlines for guaranteed schema compliance on local models. Use Pydantic AI for type-safe multi-turn agents. Use BAML when Python, TypeScript, and Go services must share one schema. Use LangChain if you are already in that ecosystem. Use Marvin for one-line extract and classify calls. Use PromptQuorum to test structured output consistency across all models before production.'
          }
        ],
        items: [
          '**Instructor** is the most popular Python choice — Pydantic schemas, automatic retries, and official ports for TypeScript, Ruby, Go, Elixir, and Rust',
          '**Outlines** guarantees schema compliance via constrained decoding on local models — zero hallucination risk on the structure itself',
          '**Pydantic AI** adds type safety to multi-turn agent conversations and falls back from native structured output to tool calls to prompted JSON',
          '**BAML** puts the schema and prompt in a versioned .baml file and generates typed clients, so polyglot teams share one contract',
          '**LangChain with_structured_output()** unifies structured output across OpenAI, Anthropic, and Google APIs',
          '**Marvin 3.x** sits on top of Pydantic AI and reduces extraction to a single extract or classify call',
          '**PromptQuorum** tests structured output consistency across all models before production deployment'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: 'Problems Each Tool Solves',
        snippets: [
          { type: 'in-one-sentence', text: 'Structured-output tools solve three distinct problems — enforcing a schema at generation time, validating the result afterwards, and repairing malformed output — and most stacks need only the first two.' },
          { type: 'in-plain-terms', text: 'Do not shop by feature list. Ask which failure you actually hit: the model ignores your format, or it obeys the format but the values are wrong, or it returns JSON that will not even parse. Each has a different answer.' },
        ],
        content: '**Structured output requires solving three interdependent problems: schema definition, API enforcement, and validation.** Different tools attack these problems differently. Instructor handles all three in Python with retries. Outlines eliminates the validation step via constrained decoding. Pydantic AI adds type safety for agents. BAML moves the schema into a compiled file and repairs imperfect output. LangChain wraps provider APIs. Marvin prioritises developer speed. PromptQuorum validates consistency across all models.',
        columns: ['Problem', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { 'Problem': 'Define schema', 'Instructor': 'Pydantic models', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Pydantic models', 'BAML': '.baml class files', 'LangChain': 'Tool definitions', 'Marvin': 'Python type hints' },
          { 'Problem': 'Enforce on API call', 'Instructor': 'Retry + validation', 'Outlines': 'Token-level constraint', 'Pydantic AI': 'Native / tool / prompted', 'BAML': 'Generated prompt + parser', 'LangChain': 'Provider JSON mode', 'Marvin': 'Pydantic AI output types' },
          { 'Problem': 'Validate response', 'Instructor': 'Automatic', 'Outlines': 'Guaranteed at generation', 'Pydantic AI': 'Type-checked', 'BAML': 'Schema-aligned parsing', 'LangChain': 'Manual', 'Marvin': 'Automatic' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor: Pydantic Extraction',
        content: '**Instructor is the most widely adopted structured output library. It wraps any LLM API — OpenAI GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Ollama, vLLM — and returns validated Pydantic models instead of raw text.** Instructor handles retries automatically when validation fails, making it production-grade without extra error handling.',
        items: [
          'Works with every major provider (OpenAI, Anthropic, Google, Groq, Mistral) and local models via Ollama or vLLM',
          'Pydantic v2 schemas: type hints, validation rules, docstring descriptions embedded in schema',
          'Automatic retry with backoff on validation failure — no manual error handling needed',
          'Six official implementations: Python, TypeScript, Ruby, Go, Elixir, and Rust',
          'MIT-licensed open source, actively maintained, currently on the 1.x line',
          'Pricing: Free (no additional cost beyond LLM API calls)'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines: Constrained Decoding',
        content: '**Outlines enforces schema compliance at token generation time via constrained decoding. Instead of generating tokens then validating, Outlines limits valid tokens at each step to match your schema.** This guarantees the output parses against your schema with zero structural hallucination risk, which is what makes it the default choice for local models.',
        items: [
          'Local backends: transformers, llama.cpp, MLX, and any Hugging Face model',
          'Server backends: vLLM, Ollama, and NVIDIA NIM',
          'Hosted APIs are supported too (OpenAI, Gemini), so the same code moves between local and cloud',
          'Schemas as Pydantic models, JSON Schema, regex patterns, literal choices, or context-free grammars',
          'Guaranteed structural compliance — no post-generation validation or retries needed',
          'Apache 2.0 open source, currently on the 1.x line, with a Rust core (outlines-core) for speed'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI: Type-Safe Agents',
        content: '**Pydantic AI is the agent framework from the team behind Pydantic itself. It combines Pydantic models with first-class support for multi-turn agent conversations, adding full type safety to agent loops while enforcing structured output on each turn.** It is past its 2.x line and used in production, not an experiment.',
        items: [
          'Pydantic v2 type system — full IDE support and static type checking on what an agent returns',
          'Three output modes: provider-native structured output, tool calls, and prompted JSON as a fallback',
          'Async-first design for high-throughput applications',
          'Supports OpenAI, Anthropic, Google, Bedrock, Azure AI Foundry, Groq, Mistral, xAI, and Ollama',
          'Durable execution integrations (Temporal, DBOS, Prefect) so long-running agents survive restarts',
          'Tool calling baked in — define tools as Python functions with type hints',
          'MIT-licensed and free to use (no additional cost beyond LLM API calls)'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML: Schema-First Prompt Files',
        content: '**BAML takes the opposite approach to the Python libraries: the schema and the prompt live in a versioned .baml file, and a compiler generates a typed client for your language.** Its schema-aligned parser repairs the mistakes models actually make — markdown fences around JSON, trailing commas, unquoted keys, reasoning text before the object — instead of throwing an error and burning a retry.',
        items: [
          'Schema and prompt live together in .baml files, versioned and reviewed like any other source',
          'Generates typed clients for Python and TypeScript natively, plus Go, Java, Ruby, PHP, Rust, and C# via generated OpenAPI clients',
          'Schema-aligned parsing (SAP) recovers valid objects from imperfect model output rather than failing',
          'Works with models that have no native tool-use or JSON mode at all',
          'Type-safe streaming — partial objects arrive typed, so you can render fields as they generate',
          'Apache 2.0 open source; the hosted Boundary Studio observability product is a separate paid offering'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain: Unified APIs',
        content: '**LangChain exposes with_structured_output() on all major chat models, unifying structured output across OpenAI, Anthropic, Google, and local models behind a single method.** Since the 1.x rewrite it reads each provider native structured-output capability from that model profile rather than hardcoding it, and agents built with create_agent accept a response_format directly.',
        items: [
          'Unified API: one .with_structured_output() method works across all providers',
          'Automatically converts LangChain tool definitions to provider-specific schema formats',
          'Agents created with create_agent take a response_format for their final answer',
          'Native structured-output support is read per model from provider profile data on the 1.1+ line',
          'Supports Pydantic models, TypedDict, dataclasses, and raw JSON Schema',
          'Best for teams already invested in LangChain or LangGraph'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin: Task-Based Extraction',
        content: '**Marvin 3.x is the shortest path from unstructured text to a typed Python object. It is built on top of Pydantic AI, so you get the same provider coverage and validation with far less code.** Note that the decorator-first API of Marvin 2 is gone: @marvin.fn was removed in 3.0 in favour of top-level helpers and a task-centric agent engine.',
        items: [
          'One-line helpers: marvin.extract, marvin.cast, marvin.classify, and marvin.generate',
          'Built on Pydantic AI, so provider support and output validation are inherited, not reimplemented',
          'Task-centric engine for multi-step work: marvin.run, marvin.Task, marvin.Agent, marvin.Thread',
          'Python type hints become the schema — minimal boilerplate for extraction and classification',
          'Migration note: the Marvin 2 @marvin.fn decorator no longer exists; rewrite those call sites',
          'Apache 2.0 open source, maintained by Prefect, free to use'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: Cross-Model Testing',
        content: '**PromptQuorum is not a structured output library itself, but a testing platform for validating structured output consistency across models.** Run the same prompt against GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, and 20+ other models simultaneously. Measure schema compliance, latency, and cost per model.',
        items: [
          'Multi-model dispatch in a single API call — test one prompt against 25+ models',
          'Structured output compliance metrics — pass rate, latency, cost per model',
          'Identify models that hallucinate on your schema — avoid deploying to unreliable models',
          'Consensus mode — find agreements between independent model runs',
          'Works with Instructor, Outlines, Pydantic AI, BAML, LangChain, or raw LLM APIs',
          'Free tier available, enterprise pricing for high-volume testing'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: 'Side-by-Side Comparison',
        columns: ['Tool', 'Best For', 'Schema Format', 'Language', 'Local Models', 'Licence', 'Learning Curve'],
        rows: [
          { 'Tool': '[Instructor](https://python.useinstructor.com)', 'Best For': 'Python APIs + retries', 'Schema Format': 'Pydantic models', 'Language': 'Python, TS, Ruby, Go, Elixir, Rust', 'Local Models': 'Yes (Ollama, vLLM)', 'Licence': 'MIT, free', 'Learning Curve': 'Low' },
          { 'Tool': '[Outlines](https://dottxt.ai)', 'Best For': 'Local model deployment', 'Schema Format': 'Pydantic, JSON Schema, regex, CFG', 'Language': 'Python', 'Local Models': 'Yes (native)', 'Licence': 'Apache 2.0, free', 'Learning Curve': 'Medium' },
          { 'Tool': '[Pydantic AI](https://ai.pydantic.dev)', 'Best For': 'Type-safe agents', 'Schema Format': 'Pydantic models', 'Language': 'Python', 'Local Models': 'Yes (Ollama)', 'Licence': 'MIT, free', 'Learning Curve': 'Low' },
          { 'Tool': '[BAML](https://boundaryml.com)', 'Best For': 'Polyglot teams, flaky models', 'Schema Format': '.baml class files', 'Language': 'Python, TS + 6 via OpenAPI', 'Local Models': 'Yes (OpenAI-compatible)', 'Licence': 'Apache 2.0, paid observability', 'Learning Curve': 'Medium' },
          { 'Tool': '[LangChain](https://langchain.com)', 'Best For': 'Chains + agents', 'Schema Format': 'Tool definitions', 'Language': 'Python, JS', 'Local Models': 'Yes', 'Licence': 'MIT, free', 'Learning Curve': 'Medium' },
          { 'Tool': '[Marvin](https://github.com/PrefectHQ/marvin)', 'Best For': 'Fast extract + classify', 'Schema Format': 'Type hints', 'Language': 'Python', 'Local Models': 'Yes', 'Licence': 'Apache 2.0, free', 'Learning Curve': 'Very low' },
          { 'Tool': '[PromptQuorum](https://www.promptquorum.com)', 'Best For': 'Multi-model testing', 'Schema Format': 'API-agnostic', 'Language': 'API-first', 'Local Models': 'Via OpenAI proxy', 'Licence': 'Free tier + enterprise', 'Learning Curve': 'Low' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: 'Choosing the Right Tool',
        content: 'Start by answering three questions: (1) Which languages do the services that call the model actually ship in? (2) Do you need local model support? (3) How much validation complexity do you have?',
        items: [
          '**Use Instructor if:** You are building Python APIs and need automatic retries on validation failure. Best general-purpose choice.',
          '**Use Outlines if:** You deploy local models (llama.cpp, vLLM, MLX) and want guaranteed schema compliance at generation time.',
          '**Use Pydantic AI if:** You are building multi-turn agent workflows with type safety across all steps, or need durable execution.',
          '**Use BAML if:** Python, TypeScript, and Go services must share one schema, or your model has no reliable native JSON mode.',
          '**Use LangChain if:** You already use LangChain or LangGraph — with_structured_output() is the simplest addition.',
          '**Use Marvin if:** You want a single extract or classify call and do not need custom validation logic.',
          '**Use PromptQuorum if:** You need to test structured output consistency across GPT, Claude, and Gemini before production.'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'Adding Structured Output Step-by-Step',
        numberedItems: [
          '**Define your output schema** — Create a Pydantic model (Python), a .baml class (BAML), a TypeScript interface, or JSON Schema describing the fields, types, and constraints you want the LLM to return.',
          '**Choose a library** — Instructor for Python APIs, Outlines for local models, Pydantic AI for agents, BAML for polyglot teams, LangChain if already in use, Marvin for one-line extraction.',
          '**Install and wrap your LLM call** — `pip install instructor` (Python), then pass your schema to the API call. Instructor handles validation and retries.',
          '**Test with PromptQuorum** — Deploy to PromptQuorum and run your prompt against GPT, Claude, and Gemini. Measure schema compliance per model.',
          '**Refine schema based on failures** — If a model fails validation, add examples to your prompt or adjust schema constraints. Iterate until all models pass.'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Structured Output Mistakes',
        mistakes: [
          {
            mistake: 'Treating every JSON mode as a schema guarantee',
            problem: 'Plain JSON mode (response_format json_object, Anthropic JSON control) only guarantees the reply is valid JSON — not that it matches your fields or types. Strict schema modes go further and guarantee the shape, but neither guarantees the values are correct: a well-formed object can still contain an invented price or a hallucinated date.',
            fix: 'Layer validation on top regardless: Instructor, Outlines, Pydantic AI, or BAML. Enforce business rules in Pydantic validators, not in the schema alone. Test with PromptQuorum to catch compliance failures per model.'
          },
          {
            mistake: 'Designing schemas that are too strict',
            problem: 'Overly constrained schemas (tiny enum lists, very specific regex patterns) cause LLMs to fail validation frequently. High retry counts waste tokens and money.',
            fix: 'Use PromptQuorum to test schema strictness across models. Loosen constraints to achieve 95%+ compliance. Use optional fields instead of required ones when possible.'
          },
          {
            mistake: 'Not testing local vs. API model differences',
            problem: 'Outlines on llama.cpp behaves differently than Instructor on GPT-5.6. Schema compliance rates differ per model. Building only for a frontier API model, then deploying to a small local one, causes production failures.',
            fix: 'Test all intended model backends early. Use PromptQuorum to run the same prompt across local (vLLM, Ollama) and hosted (OpenAI, Anthropic, Google) models.'
          },
          {
            mistake: 'Ignoring latency and token cost impact',
            problem: 'Structured output with retries costs more tokens. Instructor retries on failure. Outlines constrained decoding adds per-token overhead compared with free generation. Not measuring per-model cost.',
            fix: 'Use PromptQuorum cost tracking. Compare latency across models. For budget-conscious workflows, prefer Outlines or BAML (no retry loop). For accuracy on flexible schemas, accept Instructor retry cost.'
          },
          {
            mistake: 'Mixing validation methods (no consistency)',
            problem: 'Some requests use Instructor, others use raw JSON parsing. Some models validated, others not. This leads to inconsistent errors in production.',
            fix: 'Standardize on one validation approach per codebase. All requests use Instructor, or all use Outlines. Consistency reduces debugging time by 10x.'
          },
          {
            mistake: 'Copying tutorials written against a superseded API',
            problem: 'Structured output libraries move fast. Marvin removed the @marvin.fn decorator in 3.0, LangChain reorganised its docs in the 1.x rewrite, and Outlines changed its import surface at 1.0. Code copied from an older tutorial fails on install.',
            fix: 'Pin the major version you develop against and check the current docs for the API surface. Prefer the official repository README over blog posts, and re-check when you upgrade a major version.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Structured Output and JSON Mode](/prompt-engineering/structured-output-and-json-mode) — How JSON mode works on OpenAI, Anthropic, and Google APIs; when to use format enforcement vs. schema validation.',
          '[Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — Risks when accepting user input to structured prompts; sanitization strategies.',
          '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality) — Measure accuracy, consistency, and instruction-following on your structured output schemas.',
          '[How to Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — Run the same test set on GPT, Claude, and Gemini; compare pass rates.',
          '[Prompt Engineering vs Fine-Tuning](/prompt-engineering/prompt-engineering-vs-fine-tuning) — When structured prompting is enough vs. when you need model fine-tuning.',
          '[Prompt Engineering Setup for Small Teams](/prompt-engineering/prompt-engineering-setup-small-teams) — Building workflows with structured data output for teams of 2–15.',
          '[Prompts for Reliable Structured Data](/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'What is structured output in LLMs?',
            a: 'Structured output constrains LLM responses to a specific schema — JSON format, defined fields, type constraints. Instead of free-text replies, structured output returns data your code can directly parse and validate without error handling.'
          },
          {
            q: 'Which tool is best for Python developers?',
            a: 'Instructor is the most popular Python choice. It uses Pydantic models to define schemas, automatically handles retries and validation, and supports every major LLM API plus local models via Ollama or vLLM. Pydantic AI is the better fit if you also want type-safe multi-turn agent conversations, and Marvin is the fastest option if you just need a one-line extract or classify call.'
          },
          {
            q: 'Can I use structured output with local models like Llama?',
            a: 'Yes. Outlines specialises in local model constrained decoding — it works with transformers, llama.cpp, MLX, vLLM, and Ollama, and guarantees the output parses against your schema at generation time. Instructor and Pydantic AI also support Ollama and vLLM if you run them as an API, and BAML works against any OpenAI-compatible endpoint.'
          },
          {
            q: 'What is the difference between Instructor and Marvin?',
            a: 'Instructor wraps your own LLM client and returns validated Pydantic models with automatic retries, so you control the call. Marvin 3.x is built on top of Pydantic AI and gives you one-line helpers instead — marvin.extract, marvin.cast, marvin.classify. Instructor is more explicit and better for complex validation; Marvin is more concise for straightforward extraction. Note that the @marvin.fn decorator from Marvin 2 was removed in Marvin 3.'
          },
          {
            q: 'Does LangChain support structured output?',
            a: 'Yes. LangChain exposes with_structured_output() on ChatOpenAI, ChatAnthropic, ChatGoogleGenerativeAI, and the other chat model classes, and agents built with create_agent accept a response_format. Since the 1.x line it reads each provider native structured-output support from model profile data rather than hardcoding it. Use this if you already run LangChain or LangGraph and want schema enforcement without switching libraries.'
          },
          {
            q: 'How do I test if structured output is reliable?',
            a: 'Use PromptQuorum to run the same prompt across multiple models and measure schema compliance. Different models — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro — have different structured output reliability, and small local models differ more again. Test before deploying to production, and unit test with Instructor or Pydantic validation locally.'
          },
          {
            q: 'What does "constrained decoding" mean?',
            a: 'Constrained decoding limits token generation to only valid values according to your schema. Outlines does this by computing the set of valid next tokens at each step. This guarantees the output parses against your schema without post-generation validation or retries, making it more reliable than plain API-level JSON mode. It constrains structure, not truth — the fields will be right, the values still need checking.'
          },
          {
            q: 'What is BAML and when should I use it instead of Instructor?',
            a: 'BAML is a schema-first language: you write the schema and prompt in a .baml file and compile a typed client for your language. Choose it over Instructor when more than one language calls the same prompt — a Python worker and a TypeScript frontend sharing one contract — or when your model returns almost-valid JSON, because BAML schema-aligned parser repairs markdown fences, trailing commas, and leading reasoning text instead of burning a retry. Stay on Instructor if your stack is Python-only and you want to keep schemas in ordinary Pydantic code.'
          },
          {
            q: 'Can I use structured output without any library?',
            a: 'Technically, yes — you can prompt the model to return JSON and then parse it yourself. But parsing will fail on the malformed output models still produce, and nothing enforces your field names or types. All seven tools solve this by validating with retries (Instructor, Marvin), enforcing at decode time (Outlines), repairing output at parse time (BAML), or wrapping provider APIs (LangChain, Pydantic AI).'
          },
          {
            q: 'Which tool has the best documentation?',
            a: 'LangChain and Pydantic AI have the most comprehensive docs due to their corporate backing. BAML documentation is unusually good for a young project because the language needs teaching. Instructor has excellent tutorials and examples despite being community-maintained. Outlines docs are technical but thorough. Marvin docs are concise — check the 3.x pages specifically, as older Marvin 2 material still circulates.'
          },
          {
            q: 'Do I need all seven tools or just one?',
            a: 'Start with one. Python developers should try Instructor or Pydantic AI. Local model teams should try Outlines. Polyglot teams should try BAML. LangChain users should try with_structured_output(). Use PromptQuorum to validate consistency across all models. Most teams use one tool plus PromptQuorum for testing.'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Instructor GitHub Repository](https://github.com/567-labs/instructor) — Official repository and docs for the Instructor library',
          '[Outlines GitHub Repository](https://github.com/dottxt-ai/outlines) — Constrained decoding for guaranteed schema compliance',
          '[Pydantic AI Documentation](https://pydantic.dev/docs/ai/overview/) — Type-safe agent framework with structured output',
          '[LangChain Structured Output Guide](https://docs.langchain.com/oss/python/langchain/structured-output) — LangChain unified structured output API',
          '[BAML Documentation](https://docs.boundaryml.com/home) — Schema-first prompt language and schema-aligned parsing',
          '[Marvin GitHub Repository](https://github.com/PrefectHQ/marvin) — Task-centric extraction library built on Pydantic AI'
        ]
      }
    }
  },
  de: {
    theme: 'Tools & Plattformen',
    heroImage: '/images/best-tools-structured-output-overview-hero-de.webp',
    title: 'Beste Tools für Structured Output und JSON Mode (2026)',
    seoTitle: 'Beste Tools für Structured Output und JSON Mode (2026)',
    metaDescription: '7 Structured-Output-Tools 2026 verglichen: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin, PromptQuorum. Lizenz, Schema-Format, lokale Modelle.',
    ogTitle: 'Beste Tools für Structured Output und JSON Mode (2026)',
    ogDescription: '7 Tools für LLM Structured Output: Instructor für Retries, Outlines für Constrained Decoding, BAML für polyglotte Teams. Konsistenz testen mit PromptQuorum.',
    twitterTitle: 'Beste Tools für Structured Output und JSON Mode (2026)',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin — welches Structured-Output-Tool passt? Vergleich 2026.',
    intro: '**Sieben Tools dominieren Structured Output 2026: Instructor für Pydantic-Extraktion, Outlines für Constrained Decoding, Pydantic AI für typsichere Agents, BAML für schema-first Prompt-Dateien, LangChain für einheitliche APIs, Marvin für Task-basierte Extraktion und PromptQuorum für modellübergreifendes Testen. Jedes löst einen anderen Workflow-Engpass.**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — Bibliotheksversionen, Lizenzen, APIs und Dokumentations-URLs gegen offizielle Repositories, PyPI und Hersteller-Dokumentation erneut verifiziert',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'Structured Output Tools für LLMs',
    aboutTopics: ['Structured Output Tools', 'LLM-Validierungsbibliotheken', 'Schema-Durchsetzung'],
    audience: 'Entwickler, die Produktions-LLM-Anwendungen mit Structured Output-Anforderungen bauen',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: 'Probleme, die jedes Tool löst', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor: Pydantic-Extraktion', anchor: '#instructor' },
      { label: 'Outlines: Constrained Decoding', anchor: '#outlines' },
      { label: 'Pydantic AI: Typsichere Agents', anchor: '#pydantic-ai' },
      { label: 'BAML: Schema-first Prompt-Dateien', anchor: '#baml' },
      { label: 'LangChain: Einheitliche APIs', anchor: '#langchain-structured-output' },
      { label: 'Marvin: Task-basierte Extraktion', anchor: '#marvin' },
      { label: 'PromptQuorum: Modellübergreifende Tests', anchor: '#promptquorum' },
      { label: 'Direkter Vergleich', anchor: '#side-by-side-comparison' },
      { label: 'Das richtige Tool wählen', anchor: '#how-to-choose' },
      { label: 'Structured Output Schritt für Schritt', anchor: '#how-to-add-structured-output' },
      { label: 'Häufige Fehler bei Structured Output', anchor: '#common-mistakes' },
      { label: 'DSGVO und Datenschutz im DACH-Raum', anchor: '#dach-kontext' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
    ],
    leadAnswerBlock: '**Entscheiden Sie danach, wo Ihre Modelle laufen und in welchen Sprachen Ihr Team ausliefert: Instructor und Pydantic AI für Python-API-Workflows mit Retries und Typsicherheit, Outlines für garantierte Schema-Konformität auf lokalen Modellen, BAML wenn dasselbe Schema Python-, TypeScript- und Go-Services bedienen muss, LangChain für Teams mit bestehenden Chains oder Agents, Marvin für schnelle extract- und classify-Aufrufe und PromptQuorum für Konsistenztests über GPT, Claude und Gemini vor der Produktion.**',
    quickFacts: [
      'Instructor steht unter MIT-Lizenz und bietet sechs offizielle Implementierungen: Python, TypeScript, Ruby, Go, Elixir und Rust',
      'Outlines 1.x beschränkt Tokens zur Generierungszeit und steuert inzwischen auch gehostete APIs, nicht nur lokale Backends',
      'Pydantic AI bietet drei Ausgabemodi — native Structured Outputs, Tool-Aufrufe und Prompted JSON',
      'BAML kompiliert eine .baml-Schemadatei zu typisierten Clients und repariert fehlerhafte Modellausgaben statt zu wiederholen',
      'LangChain 1.x liest die native Structured-Output-Unterstützung jedes Providers aus dessen Modellprofil',
      'Marvin 3.x baut auf Pydantic AI auf und stellt extract, cast, classify und generate bereit',
      'PromptQuorum testet denselben Prompt über 25+ Modelle auf Konsistenz'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste Tools für Structured Output und JSON Mode (2026)',
      description: 'Vergleich von sieben Bibliotheken für LLM Structured Output: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin und PromptQuorum. Gerankt nach Schema-Durchsetzung, Sprachunterstützung, lokaler Modellkompatibilität und Lizenz.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/de/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'de',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Structured Output Bibliotheken' },
        { '@type': 'Thing', name: 'Schema-Validierung' },
        { '@type': 'Thing', name: 'LLM API Wrapper' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste Tools für LLM Structured Output (2026)',
      description: 'Sieben führende Bibliotheken zur Durchsetzung strukturierter Ausgaben von Sprachmodellen.',
      numberOfItems: 7,
      inLanguage: 'de',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: 'Pydantic-basierte Extraktion aus jedem LLM mit automatischen Retries. MIT-Lizenz, sechs Sprach-Implementierungen.' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: 'Constrained-Decoding-Bibliothek für garantierte Schema-Konformität auf lokalen Modellen. Apache 2.0 Open Source.' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: 'Typsicheres Agent-Framework mit drei Structured-Output-Modi und Durable-Execution-Integrationen.' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: 'Schema-first Prompt-Sprache, die typisierte Clients kompiliert und fehlerhafte Modellausgaben per Schema-Aligned Parsing repariert.' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'Einheitliche API-Schicht für Structured Output über OpenAI, Anthropic, Google und lokale Modelle.' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'Task-zentrierte Bibliothek auf Basis von Pydantic AI mit den Helfern extract, cast, classify und generate.' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'Cross-Model-Testplattform zur Validierung der Structured Output-Konsistenz über GPT, Claude und Gemini.' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: 'Verwenden Sie Instructor für Python-API-Extraktion mit Retries. Outlines für garantierte Schema-Konformität auf lokalen Modellen. Pydantic AI für typsichere Multi-Turn-Agents. BAML, wenn Python-, TypeScript- und Go-Services ein Schema teilen müssen. LangChain, wenn Sie bereits im Ökosystem sind. Marvin für einzeilige extract- und classify-Aufrufe. PromptQuorum, um Structured Output-Konsistenz über alle Modelle vor der Produktion zu testen.'
          }
        ],
        items: [
          '**Instructor** ist die beliebteste Python-Wahl — Pydantic-Schemas, automatische Retries und offizielle Ports für TypeScript, Ruby, Go, Elixir und Rust',
          '**Outlines** garantiert Schema-Konformität auf lokalen Modellen via Constrained Decoding — kein strukturelles Halluzinationsrisiko',
          '**Pydantic AI** fügt Typsicherheit zu Multi-Turn-Agent-Gesprächen hinzu und fällt von nativem Structured Output über Tool-Aufrufe auf Prompted JSON zurück',
          '**BAML** legt Schema und Prompt in eine versionierte .baml-Datei und generiert typisierte Clients — ein Vertrag für polyglotte Teams',
          '**LangChains with_structured_output()** vereinheitlicht Structured Output über OpenAI, Anthropic und Google-APIs',
          '**Marvin 3.x** setzt auf Pydantic AI auf und reduziert Extraktion auf einen einzigen extract- oder classify-Aufruf',
          '**PromptQuorum** testet Structured Output-Konsistenz über alle Modelle vor der Produktionsbereitstellung'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: 'Probleme, die jedes Tool löst',
        snippets: [
          { type: 'in-one-sentence', text: 'Werkzeuge für strukturierte Ausgabe lösen drei verschiedene Probleme — ein Schema bereits bei der Generierung erzwingen, das Ergebnis anschließend validieren und fehlerhafte Ausgaben reparieren — und die meisten Setups brauchen nur die ersten beiden.' },
          { type: 'in-plain-terms', text: 'Wählen Sie nicht nach Funktionsliste. Fragen Sie, welcher Fehler bei Ihnen tatsächlich auftritt: Das Modell ignoriert Ihr Format, oder es hält das Format ein, aber die Werte stimmen nicht, oder es liefert JSON, das sich nicht einmal parsen lässt. Jeder Fall verlangt eine andere Antwort.' },
        ],
        content: '**Structured Output erfordert die Lösung von drei voneinander abhängigen Problemen: Schema-Definition, API-Durchsetzung und Validierung.** Verschiedene Tools gehen diese Probleme unterschiedlich an. Instructor löst alle drei in Python mit Retries. Outlines eliminiert den Validierungsschritt via Constrained Decoding. Pydantic AI fügt Typsicherheit für Agents hinzu. BAML verlagert das Schema in eine kompilierte Datei und repariert unvollkommene Ausgaben. LangChain umhüllt Provider-APIs. Marvin priorisiert Entwicklergeschwindigkeit. PromptQuorum validiert die Konsistenz über alle Modelle.',
        columns: ['Problem', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { 'Problem': 'Schema definieren', 'Instructor': 'Pydantic-Modelle', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Pydantic-Modelle', 'BAML': '.baml-Klassendateien', 'LangChain': 'Tool-Definitionen', 'Marvin': 'Python Type Hints' },
          { 'Problem': 'Auf API-Aufruf erzwingen', 'Instructor': 'Retry + Validierung', 'Outlines': 'Token-Level-Einschränkung', 'Pydantic AI': 'Nativ / Tool / Prompted', 'BAML': 'Generierter Prompt + Parser', 'LangChain': 'Provider-JSON-Modus', 'Marvin': 'Pydantic-AI-Ausgabetypen' },
          { 'Problem': 'Antwort validieren', 'Instructor': 'Automatisch', 'Outlines': 'Garantiert bei Generierung', 'Pydantic AI': 'Typgeprüft', 'BAML': 'Schema-Aligned Parsing', 'LangChain': 'Manuell', 'Marvin': 'Automatisch' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor: Pydantic-Extraktion',
        content: '**Instructor ist die am weitesten verbreitete Structured Output-Bibliothek. Sie umhüllt jede LLM-API — OpenAI GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Ollama, vLLM — und gibt validierte Pydantic-Modelle statt Rohtext zurück.** Instructor behandelt Retries automatisch bei Validierungsfehlern, was es produktionsreif ohne zusätzliche Fehlerbehandlung macht.',
        items: [
          'Funktioniert mit allen großen Providern (OpenAI, Anthropic, Google, Groq, Mistral) und lokalen Modellen via Ollama oder vLLM',
          'Pydantic v2 Schemas: Typ-Hinweise, Validierungsregeln, Docstring-Beschreibungen im Schema',
          'Automatischer Retry mit Backoff bei Validierungsfehlern — keine manuelle Fehlerbehandlung nötig',
          'Sechs offizielle Implementierungen: Python, TypeScript, Ruby, Go, Elixir und Rust',
          'MIT-Lizenz, Open Source, aktiv gepflegt, aktuell auf der 1.x-Linie',
          'Preis: Kostenlos (keine zusätzlichen Kosten über LLM-API-Aufrufe hinaus)'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines: Constrained Decoding',
        content: '**Outlines erzwingt Schema-Konformität zum Zeitpunkt der Token-Generierung via Constrained Decoding. Anstatt Tokens zu generieren und dann zu validieren, begrenzt Outlines gültige Tokens in jedem Schritt auf Ihr Schema.** Damit ist garantiert, dass die Ausgabe gegen Ihr Schema parst — kein strukturelles Halluzinationsrisiko. Genau das macht Outlines zur Standardwahl für lokale Modelle.',
        items: [
          'Lokale Backends: transformers, llama.cpp, MLX und jedes Hugging-Face-Modell',
          'Server-Backends: vLLM, Ollama und NVIDIA NIM',
          'Auch gehostete APIs werden unterstützt (OpenAI, Gemini) — derselbe Code läuft lokal und in der Cloud',
          'Schemas als Pydantic-Modelle, JSON Schema, Regex-Muster, Literal-Auswahlen oder kontextfreie Grammatiken',
          'Garantierte strukturelle Konformität — keine Nachgenerierungs-Validierung oder Retries nötig',
          'Apache 2.0 Open Source, aktuell auf der 1.x-Linie, mit einem Rust-Kern (outlines-core) für Geschwindigkeit'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI: Typsichere Agents',
        content: '**Pydantic AI ist das Agent-Framework des Teams hinter Pydantic selbst. Es kombiniert Pydantic-Modelle mit erstklassiger Unterstützung für Multi-Turn-Agent-Gespräche, fügt vollständige Typsicherheit zu Agent-Loops hinzu und erzwingt Structured Output bei jedem Schritt.** Es ist inzwischen auf der 2.x-Linie und im Produktivbetrieb, kein Experiment mehr.',
        items: [
          'Pydantic v2 Typsystem — vollständige IDE-Unterstützung und statische Typprüfung auf dem Agent-Rückgabewert',
          'Drei Ausgabemodi: providerseitiges natives Structured Output, Tool-Aufrufe und Prompted JSON als Fallback',
          'Async-first Design für Hochdurchsatz-Anwendungen',
          'Unterstützt OpenAI, Anthropic, Google, Bedrock, Azure AI Foundry, Groq, Mistral, xAI und Ollama',
          'Durable-Execution-Integrationen (Temporal, DBOS, Prefect), damit langlaufende Agents Neustarts überstehen',
          'Tool-Aufrufe eingebaut — Tools als Python-Funktionen mit Typ-Hinweisen definieren',
          'MIT-Lizenz und kostenlos (keine zusätzlichen Kosten über LLM-API-Aufrufe hinaus)'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML: Schema-first Prompt-Dateien',
        content: '**BAML verfolgt den entgegengesetzten Ansatz zu den Python-Bibliotheken: Schema und Prompt liegen in einer versionierten .baml-Datei, und ein Compiler generiert daraus einen typisierten Client für Ihre Sprache.** Der Schema-Aligned Parser repariert genau die Fehler, die Modelle tatsächlich machen — Markdown-Fences um JSON, nachgestellte Kommas, unquotierte Schlüssel, Begründungstext vor dem Objekt — statt einen Fehler zu werfen und einen Retry zu verbrennen.',
        items: [
          'Schema und Prompt liegen gemeinsam in .baml-Dateien, versioniert und reviewt wie jeder andere Quellcode',
          'Generiert typisierte Clients nativ für Python und TypeScript, dazu Go, Java, Ruby, PHP, Rust und C# über generierte OpenAPI-Clients',
          'Schema-Aligned Parsing (SAP) gewinnt gültige Objekte aus unvollkommenen Modellausgaben zurück, statt zu scheitern',
          'Funktioniert auch mit Modellen, die überhaupt kein natives Tool-Use oder JSON-Mode haben',
          'Typsicheres Streaming — Teilobjekte kommen typisiert an, Felder lassen sich beim Generieren rendern',
          'Apache 2.0 Open Source; das gehostete Observability-Produkt Boundary Studio ist ein separates kostenpflichtiges Angebot'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain: Einheitliche APIs',
        content: '**LangChain stellt with_structured_output() auf allen wichtigen Chat-Modellen bereit und vereinheitlicht Structured Output über OpenAI, Anthropic, Google und lokale Modelle hinter einer einzigen Methode.** Seit dem 1.x-Rewrite liest es die native Structured-Output-Fähigkeit jedes Providers aus dessen Modellprofil, statt sie fest zu verdrahten, und mit create_agent gebaute Agents nehmen ein response_format direkt entgegen.',
        items: [
          'Einheitliche API: eine .with_structured_output()-Methode funktioniert über alle Provider',
          'Konvertiert automatisch LangChain Tool-Definitionen in anbieterspezifische Schema-Formate',
          'Mit create_agent erstellte Agents nehmen ein response_format für ihre finale Antwort entgegen',
          'Native Structured-Output-Unterstützung wird ab der 1.1-Linie pro Modell aus Provider-Profildaten gelesen',
          'Unterstützt Pydantic-Modelle, TypedDict, Dataclasses und rohes JSON Schema',
          'Am besten für Teams, die bereits in LangChain oder LangGraph investiert haben'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin: Task-basierte Extraktion',
        content: '**Marvin 3.x ist der kürzeste Weg von unstrukturiertem Text zu einem typisierten Python-Objekt. Es setzt auf Pydantic AI auf, Sie erhalten also dieselbe Provider-Abdeckung und Validierung mit deutlich weniger Code.** Wichtig: Die Dekorator-API von Marvin 2 existiert nicht mehr — @marvin.fn wurde in 3.0 zugunsten von Top-Level-Helfern und einer Task-zentrierten Agent-Engine entfernt.',
        items: [
          'Einzeilige Helfer: marvin.extract, marvin.cast, marvin.classify und marvin.generate',
          'Basiert auf Pydantic AI — Provider-Unterstützung und Ausgabevalidierung werden geerbt, nicht neu implementiert',
          'Task-zentrierte Engine für mehrstufige Arbeit: marvin.run, marvin.Task, marvin.Agent, marvin.Thread',
          'Python Type Hints werden zum Schema — minimaler Boilerplate für Extraktion und Klassifikation',
          'Migrationshinweis: Der Dekorator @marvin.fn aus Marvin 2 existiert nicht mehr, betroffene Aufrufstellen müssen umgeschrieben werden',
          'Apache 2.0 Open Source, gepflegt von Prefect, kostenlos nutzbar'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: Modellübergreifende Tests',
        content: '**PromptQuorum ist keine Structured Output-Bibliothek selbst, sondern eine Testplattform zur Validierung der Structured Output-Konsistenz über Modelle hinweg.** Führen Sie denselben Prompt gleichzeitig gegen GPT-5.6, Claude Opus 5, Gemini 3.1 Pro und 20+ weitere Modelle aus. Messen Sie Schema-Konformität, Latenz und Kosten pro Modell.',
        items: [
          'Multi-Modell-Dispatch in einem einzigen API-Aufruf — einen Prompt gegen 25+ Modelle testen',
          'Structured Output-Konformitätsmetriken — Erfolgsrate, Latenz, Kosten pro Modell',
          'Modelle identifizieren, die bei Ihrem Schema halluzinieren — Bereitstellung auf unzuverlässigen Modellen vermeiden',
          'Konsens-Modus — Übereinstimmungen zwischen unabhängigen Modell-Ausführungen finden',
          'Funktioniert mit Instructor, Outlines, Pydantic AI, BAML, LangChain oder Raw-LLM-APIs',
          'Kostenloses Tier verfügbar, Enterprise-Preise für hochvolumige Tests'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: 'Direkter Vergleich',
        columns: ['Tool', 'Beste Verwendung', 'Schema-Format', 'Sprache', 'Lokale Modelle', 'Lizenz', 'Lernkurve'],
        rows: [
          { 'Tool': '[Instructor](https://python.useinstructor.com)', 'Beste Verwendung': 'Python-APIs + Retries', 'Schema-Format': 'Pydantic-Modelle', 'Sprache': 'Python, TS, Ruby, Go, Elixir, Rust', 'Lokale Modelle': 'Ja (Ollama, vLLM)', 'Lizenz': 'MIT, kostenlos', 'Lernkurve': 'Niedrig' },
          { 'Tool': '[Outlines](https://dottxt.ai)', 'Beste Verwendung': 'Lokale Modell-Bereitstellung', 'Schema-Format': 'Pydantic, JSON Schema, Regex, CFG', 'Sprache': 'Python', 'Lokale Modelle': 'Ja (nativ)', 'Lizenz': 'Apache 2.0, kostenlos', 'Lernkurve': 'Mittel' },
          { 'Tool': '[Pydantic AI](https://ai.pydantic.dev)', 'Beste Verwendung': 'Typsichere Agents', 'Schema-Format': 'Pydantic-Modelle', 'Sprache': 'Python', 'Lokale Modelle': 'Ja (Ollama)', 'Lizenz': 'MIT, kostenlos', 'Lernkurve': 'Niedrig' },
          { 'Tool': '[BAML](https://boundaryml.com)', 'Beste Verwendung': 'Polyglotte Teams, fehleranfällige Modelle', 'Schema-Format': '.baml-Klassendateien', 'Sprache': 'Python, TS + 6 via OpenAPI', 'Lokale Modelle': 'Ja (OpenAI-kompatibel)', 'Lizenz': 'Apache 2.0, Observability kostenpflichtig', 'Lernkurve': 'Mittel' },
          { 'Tool': '[LangChain](https://langchain.com)', 'Beste Verwendung': 'Chains + Agents', 'Schema-Format': 'Tool-Definitionen', 'Sprache': 'Python, JS', 'Lokale Modelle': 'Ja', 'Lizenz': 'MIT, kostenlos', 'Lernkurve': 'Mittel' },
          { 'Tool': '[Marvin](https://github.com/PrefectHQ/marvin)', 'Beste Verwendung': 'Schnelles extract + classify', 'Schema-Format': 'Type Hints', 'Sprache': 'Python', 'Lokale Modelle': 'Ja', 'Lizenz': 'Apache 2.0, kostenlos', 'Lernkurve': 'Sehr niedrig' },
          { 'Tool': '[PromptQuorum](https://www.promptquorum.com)', 'Beste Verwendung': 'Multi-Modell-Tests', 'Schema-Format': 'API-agnostisch', 'Sprache': 'API-first', 'Lokale Modelle': 'Via OpenAI-Proxy', 'Lizenz': 'Kostenloses Tier + Enterprise', 'Lernkurve': 'Niedrig' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: 'Das richtige Tool wählen',
        content: 'Beginnen Sie mit drei Fragen: (1) In welchen Sprachen laufen die Services, die das Modell tatsächlich aufrufen? (2) Benötigen Sie lokale Modell-Unterstützung? (3) Wie hoch ist Ihre Validierungskomplexität?',
        items: [
          '**Verwenden Sie Instructor, wenn:** Sie Python-APIs bauen und automatische Retries bei Validierungsfehlern benötigen. Beste Allzweck-Wahl.',
          '**Verwenden Sie Outlines, wenn:** Sie lokale Modelle (llama.cpp, vLLM, MLX) bereitstellen und garantierte Schema-Konformität zur Generierungszeit möchten.',
          '**Verwenden Sie Pydantic AI, wenn:** Sie Multi-Turn-Agent-Workflows mit Typsicherheit über alle Schritte aufbauen oder Durable Execution brauchen.',
          '**Verwenden Sie BAML, wenn:** Python-, TypeScript- und Go-Services ein Schema teilen müssen oder Ihr Modell keinen verlässlichen nativen JSON-Modus hat.',
          '**Verwenden Sie LangChain, wenn:** Sie bereits LangChain oder LangGraph nutzen — with_structured_output() ist die einfachste Ergänzung.',
          '**Verwenden Sie Marvin, wenn:** Sie einen einzigen extract- oder classify-Aufruf wollen und keine eigene Validierungslogik brauchen.',
          '**Verwenden Sie PromptQuorum, wenn:** Sie die Structured Output-Konsistenz über GPT, Claude und Gemini vor der Produktion testen müssen.'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'Structured Output Schritt für Schritt einbinden',
        numberedItems: [
          '**Ausgabe-Schema definieren** — Erstellen Sie ein Pydantic-Modell (Python), eine .baml-Klasse (BAML), ein TypeScript-Interface oder JSON Schema mit den Feldern, Typen und Einschränkungen, die der LLM zurückgeben soll.',
          '**Bibliothek auswählen** — Instructor für Python-APIs, Outlines für lokale Modelle, Pydantic AI für Agents, BAML für polyglotte Teams, LangChain wenn bereits im Einsatz, Marvin für einzeilige Extraktion.',
          '**Installieren und LLM-Aufruf umhüllen** — `pip install instructor` (Python), dann Schema an API-Aufruf übergeben. Instructor übernimmt Validierung und Retries.',
          '**Mit PromptQuorum testen** — In PromptQuorum bereitstellen und Prompt gegen GPT, Claude und Gemini ausführen. Schema-Konformität pro Modell messen.',
          '**Schema auf Basis von Fehlern verfeinern** — Wenn ein Modell die Validierung nicht besteht, Beispiele zum Prompt hinzufügen oder Schema-Einschränkungen anpassen. Iterieren bis alle Modelle bestehen.'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei Structured Output',
        mistakes: [
          {
            mistake: 'Jeden JSON-Modus als Schema-Garantie behandeln',
            problem: 'Der einfache JSON-Modus (response_format json_object, Anthropic JSON-Steuerung) garantiert nur, dass die Antwort gültiges JSON ist — nicht, dass sie Ihren Feldern und Typen entspricht. Strikte Schema-Modi gehen weiter und garantieren die Form, aber keiner garantiert korrekte Werte: Ein wohlgeformtes Objekt kann trotzdem einen erfundenen Preis oder ein halluziniertes Datum enthalten.',
            fix: 'Legen Sie in jedem Fall Validierung darüber: Instructor, Outlines, Pydantic AI oder BAML. Fachliche Regeln gehören in Pydantic-Validatoren, nicht allein ins Schema. Mit PromptQuorum testen, um Konformitätsfehler pro Modell zu erkennen.'
          },
          {
            mistake: 'Zu strenge Schemas entwerfen',
            problem: 'Übermäßig eingeschränkte Schemas (kleine Enum-Listen, sehr spezifische Regex-Muster) führen dazu, dass LLMs häufig die Validierung nicht bestehen. Hohe Retry-Zahlen verschwenden Tokens und Geld.',
            fix: 'PromptQuorum verwenden, um Schema-Strenge über Modelle hinweg zu testen. Einschränkungen lockern, um 95%+ Konformität zu erreichen. Optionale Felder statt Pflichtfelder verwenden, wo möglich.'
          },
          {
            mistake: 'Unterschiede zwischen lokalen und API-Modellen nicht testen',
            problem: 'Outlines auf llama.cpp verhält sich anders als Instructor auf GPT-5.6. Schema-Konformitätsraten variieren je nach Modell. Nur für ein Frontier-API-Modell bauen und dann auf ein kleines lokales Modell ausrollen, führt zu Produktionsfehlern.',
            fix: 'Alle beabsichtigten Modell-Backends früh testen. PromptQuorum verwenden, um denselben Prompt über lokale (vLLM, Ollama) und gehostete Modelle (OpenAI, Anthropic, Google) auszuführen.'
          },
          {
            mistake: 'Auswirkungen auf Latenz und Token-Kosten ignorieren',
            problem: 'Structured Output mit Retries kostet mehr Tokens. Instructor wiederholt bei Fehlern. Outlines Constrained Decoding erzeugt pro Token Zusatzaufwand gegenüber freier Generierung. Kosten pro Modell werden nicht gemessen.',
            fix: 'PromptQuorum Kostenverfolgung verwenden. Latenz über Modelle vergleichen. Für budgetbewusste Workflows Outlines oder BAML bevorzugen (keine Retry-Schleife). Für Genauigkeit bei flexiblen Schemas Instructors Retry-Kosten akzeptieren.'
          },
          {
            mistake: 'Validierungsmethoden mischen (keine Konsistenz)',
            problem: 'Einige Anfragen verwenden Instructor, andere rohe JSON-Analyse. Einige Modelle validiert, andere nicht. Dies führt zu inkonsistenten Fehlern in der Produktion.',
            fix: 'Einen Validierungsansatz pro Codebasis standardisieren. Alle Anfragen verwenden Instructor, oder alle verwenden Outlines. Konsistenz reduziert Debugging-Zeit um das 10-fache.'
          },
          {
            mistake: 'Tutorials kopieren, die gegen eine abgelöste API geschrieben wurden',
            problem: 'Structured-Output-Bibliotheken entwickeln sich schnell. Marvin hat den Dekorator @marvin.fn in 3.0 entfernt, LangChain hat seine Dokumentation im 1.x-Rewrite reorganisiert, und Outlines hat mit 1.0 seine Import-Oberfläche geändert. Aus älteren Tutorials kopierter Code scheitert bereits bei der Installation.',
            fix: 'Pinnen Sie die Hauptversion, gegen die Sie entwickeln, und prüfen Sie die aktuelle Dokumentation für die API-Oberfläche. Bevorzugen Sie die offizielle Repository-README gegenüber Blogbeiträgen und prüfen Sie bei jedem Major-Upgrade erneut.'
          }
        ]
      },
      dachKontext: {
        id: 'dach-kontext',
        title: 'DSGVO und Datenschutz im DACH-Raum',
        content: 'Im DACH-Raum (Deutschland, Österreich, Schweiz) gelten für den Einsatz von LLM Structured Output besondere datenschutzrechtliche Anforderungen.',
        items: [
          '**DSGVO Art. 28 (Auftragsverarbeitung):** Wenn personenbezogene Daten an LLM-APIs übertragen werden, muss ein Auftragsverarbeitungsvertrag (AVV) mit dem Provider abgeschlossen werden. Lokale Modelle via Outlines oder llama.cpp umgehen diese Anforderung vollständig.',
          '**BSI-Grundschutz:** Das Bundesamt für Sicherheit in der Informationstechnik empfiehlt für unternehmenskritische Workflows, externe API-Aufrufe zu minimieren. Outlines auf lokalen Modellen entspricht BSI-Empfehlungen für sensible Datenverarbeitung.',
          '**Datensparsamkeit (DSGVO Art. 5):** Structured Output ermöglicht präzise Datenextraktion — es werden nur die definierten Schema-Felder verarbeitet. Dies unterstützt das DSGVO-Prinzip der Datensparsamkeit.',
          '**BAML und lokale Modelle:** Da BAML gegen jeden OpenAI-kompatiblen Endpunkt arbeitet, lässt sich derselbe .baml-Vertrag gegen ein lokales vLLM-Deployment fahren — nützlich, wenn Python- und TypeScript-Dienste im Unternehmen dasselbe Schema teilen, die Daten aber das Haus nicht verlassen dürfen.',
          '**Empfehlung für DACH-Unternehmen:** Personenbezogene Daten mit Outlines auf lokalen Modellen verarbeiten. API-basierte Tools (Instructor mit OpenAI) nur für nicht-personenbezogene Daten nutzen.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Structured Output und JSON-Modus](/de/prompt-engineering/structured-output-and-json-mode) — Wie JSON-Modus auf OpenAI-, Anthropic- und Google-APIs funktioniert; wann Format-Durchsetzung vs. Schema-Validierung.',
          '[Prompt Injection und Sicherheit](/de/prompt-engineering/prompt-injection-and-security) — Risiken bei der Akzeptierung von Benutzereingaben in strukturierten Prompts; Bereinigungsstrategien.',
          '[Wie man Prompt-Qualität bewertet](/de/prompt-engineering/how-to-evaluate-prompt-quality) — Genauigkeit, Konsistenz und Instruction-Following auf Structured Output-Schemas messen.',
          '[Prompts über Modelle hinweg testen](/de/prompt-engineering/how-to-test-prompts-across-models) — Denselben Test-Satz auf GPT, Claude und Gemini ausführen; Bestehensraten vergleichen.',
          '[Prompt Engineering vs. Fine-Tuning](/de/prompt-engineering/prompt-engineering-vs-fine-tuning) — Wann strukturiertes Prompting ausreicht vs. wann Model Fine-Tuning benötigt wird.',
          '[Prompt Engineering Setup für kleine Teams](/de/prompt-engineering/prompt-engineering-setup-small-teams) — Workflows mit strukturierter Datenausgabe für Teams von 2–15 Personen aufbauen.',
          '[Prompts für zuverlässige strukturierte Daten](/de/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Was ist Structured Output in LLMs?',
            a: 'Structured Output beschränkt LLM-Ausgaben auf ein spezifisches Schema — JSON-Format, definierte Felder, Typbeschränkungen. Anstelle von Freitext-Antworten gibt Structured Output Daten zurück, die Ihr Code direkt parsen und validieren kann, ohne Fehlerbehandlung.'
          },
          {
            q: 'Welches Tool ist am besten für Python-Entwickler?',
            a: 'Instructor ist die beliebteste Python-Wahl. Es verwendet Pydantic-Modelle zur Schema-Definition, behandelt Wiederholungen und Validierung automatisch und unterstützt alle großen LLM-APIs sowie lokale Modelle via Ollama oder vLLM. Pydantic AI passt besser, wenn Sie zusätzlich typsichere Multi-Turn-Agent-Gespräche brauchen, und Marvin ist am schnellsten, wenn ein einzeiliger extract- oder classify-Aufruf reicht.'
          },
          {
            q: 'Kann ich Structured Output mit lokalen Modellen wie Llama verwenden?',
            a: 'Ja. Outlines spezialisiert sich auf lokales Constrained Decoding — es funktioniert mit transformers, llama.cpp, MLX, vLLM und Ollama und garantiert zur Generierungszeit, dass die Ausgabe gegen Ihr Schema parst. Instructor und Pydantic AI unterstützen Ollama und vLLM ebenfalls, wenn Sie sie als API betreiben, und BAML arbeitet gegen jeden OpenAI-kompatiblen Endpunkt.'
          },
          {
            q: 'Was ist der Unterschied zwischen Instructor und Marvin?',
            a: 'Instructor umhüllt Ihren eigenen LLM-Client und gibt validierte Pydantic-Modelle mit automatischen Retries zurück — Sie behalten die Kontrolle über den Aufruf. Marvin 3.x setzt auf Pydantic AI auf und bietet stattdessen einzeilige Helfer: marvin.extract, marvin.cast, marvin.classify. Instructor ist expliziter und besser für komplexe Validierung, Marvin prägnanter für einfache Extraktion. Beachten Sie: Der Dekorator @marvin.fn aus Marvin 2 wurde in Marvin 3 entfernt.'
          },
          {
            q: 'Unterstützt LangChain Structured Output?',
            a: 'Ja. LangChain stellt with_structured_output() auf ChatOpenAI, ChatAnthropic, ChatGoogleGenerativeAI und den übrigen Chat-Modellklassen bereit, und mit create_agent gebaute Agents nehmen ein response_format entgegen. Seit der 1.x-Linie wird die native Structured-Output-Unterstützung jedes Providers aus Modellprofildaten gelesen statt fest verdrahtet. Verwenden Sie dies, wenn Sie bereits LangChain oder LangGraph nutzen und Schema-Durchsetzung ohne Bibliothekswechsel hinzufügen möchten.'
          },
          {
            q: 'Wie teste ich, ob Structured Output zuverlässig ist?',
            a: 'Verwenden Sie PromptQuorum, um denselben Prompt über mehrere Modelle hinweg auszuführen und die Schema-Konformität zu messen. Verschiedene Modelle — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro — haben unterschiedliche Zuverlässigkeit, und kleine lokale Modelle unterscheiden sich noch stärker. Testen Sie vor der Bereitstellung in der Produktion und validieren Sie lokal mit Instructor oder Pydantic.'
          },
          {
            q: 'Was bedeutet "Constrained Decoding"?',
            a: 'Constrained Decoding begrenzt die Token-Generierung auf nur gültige Werte gemäß Ihrem Schema. Outlines tut dies, indem es in jedem Schritt die Menge gültiger nächster Tokens berechnet. Damit ist garantiert, dass die Ausgabe gegen Ihr Schema parst, ohne Nachgenerierungsvalidierung oder Wiederholungen — zuverlässiger als der einfache API-JSON-Modus. Es beschränkt die Struktur, nicht die Wahrheit: Die Felder stimmen, die Werte müssen weiterhin geprüft werden.'
          },
          {
            q: 'Was ist BAML und wann sollte ich es statt Instructor verwenden?',
            a: 'BAML ist eine schema-first Sprache: Sie schreiben Schema und Prompt in eine .baml-Datei und kompilieren daraus einen typisierten Client für Ihre Sprache. Wählen Sie es gegenüber Instructor, wenn mehr als eine Sprache denselben Prompt aufruft — etwa ein Python-Worker und ein TypeScript-Frontend mit einem gemeinsamen Vertrag — oder wenn Ihr Modell fast gültiges JSON liefert, denn der Schema-Aligned Parser von BAML repariert Markdown-Fences, nachgestellte Kommas und vorangestellten Begründungstext, statt einen Retry zu verbrennen. Bleiben Sie bei Instructor, wenn Ihr Stack reines Python ist und Sie Schemas als gewöhnlichen Pydantic-Code behalten wollen.'
          },
          {
            q: 'Kann ich Structured Output ohne Bibliotheken verwenden?',
            a: 'Technisch ja — Sie können das Modell auffordern, JSON zurückzugeben, und es dann selbst parsen. Aber das Parsen scheitert an den fehlerhaften Ausgaben, die Modelle weiterhin produzieren, und nichts erzwingt Ihre Feldnamen oder Typen. Alle sieben Tools lösen dies durch Validierung mit Wiederholungen (Instructor, Marvin), Durchsetzung bei der Dekodierung (Outlines), Reparatur beim Parsen (BAML) oder Umwicklung von Provider-APIs (LangChain, Pydantic AI).'
          },
          {
            q: 'Welches Tool hat die beste Dokumentation?',
            a: 'LangChain und Pydantic AI haben die umfangreichste Dokumentation wegen ihrer Unternehmensmittel. Die BAML-Dokumentation ist für ein junges Projekt ungewöhnlich gut, weil die Sprache erklärt werden muss. Instructor hat hervorragende Tutorials und Beispiele trotz Community-Wartung. Outlines-Dokumentation ist technisch, aber gründlich. Marvin-Dokumentation ist knapp — achten Sie gezielt auf die 3.x-Seiten, da älteres Marvin-2-Material weiterhin kursiert.'
          },
          {
            q: 'Brauche ich alle sieben Tools oder nur einen?',
            a: 'Beginnen Sie mit einem. Python-Entwickler sollten Instructor oder Pydantic AI ausprobieren. Teams mit lokalen Modellen sollten Outlines versuchen. Polyglotte Teams sollten BAML testen. LangChain-Benutzer sollten with_structured_output() versuchen. Verwenden Sie PromptQuorum, um Konsistenz über alle Modelle zu validieren.'
          },
          {
            q: 'Müssen wir Structured Output für DSGVO-Compliance verwenden?',
            a: 'Structured Output hilft bei der DSGVO, indem es unerwartete Datenextraktion verhindert. Mit definierten Schemas kann ein LLM keine ungeplanten Datenfelder generieren. Dies reduziert das Risiko unerwarteter Datenverarbeitung. Verwenden Sie Instructor oder Outlines mit strikten Schemas für datenschutzkritische Workflows.'
          },
          {
            q: 'Ist Structured Output für den deutschen Mittelstand geeignet?',
            a: 'Ja, besonders Outlines mit lokalen Modellen. Mittelständische Unternehmen können damit sensible Geschäftsdaten lokal verarbeiten, ohne Daten an externe APIs zu senden. Dies entspricht BSI-Empfehlungen und DSGVO-Anforderungen. Typische Anwendungsfälle: automatische Rechnungsverarbeitung, Vertragsanalyse, Kundendaten-Extraktion auf internen Servern.'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Instructor GitHub Repository](https://github.com/567-labs/instructor) — Offizielles Repository und Dokumentation für die Instructor-Bibliothek',
          '[Outlines GitHub Repository](https://github.com/dottxt-ai/outlines) — Constrained Decoding für garantierte Schema-Konformität',
          '[Pydantic AI Dokumentation](https://pydantic.dev/docs/ai/overview/) — Typsicheres Agent-Framework mit Structured Output',
          '[LangChain Structured Output Guide](https://docs.langchain.com/oss/python/langchain/structured-output) — LangChain einheitliche Structured Output-API',
          '[BAML Dokumentation](https://docs.boundaryml.com/home) — Schema-first Prompt-Sprache und Schema-Aligned Parsing',
          '[Marvin GitHub Repository](https://github.com/PrefectHQ/marvin) — Task-zentrierte Extraktionsbibliothek auf Basis von Pydantic AI'
        ]
      }
    }
  },
  es: {
    theme: 'Tools & Platforms',
    heroImage: '/images/best-tools-structured-output-overview-hero-es.webp',
    title: 'Mejores herramientas para Structured Output y JSON Mode (2026)',
    seoTitle: 'Mejores herramientas de Structured Output y JSON Mode 2026',
    metaDescription: '7 herramientas de structured output comparadas: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin y PromptQuorum. Licencia y modelos locales.',
    ogTitle: 'Mejores herramientas para Structured Output y JSON Mode (2026)',
    ogDescription: '7 herramientas de structured output LLM comparadas: Instructor para reintentos, Outlines para constrained decoding, BAML para equipos políglotas. Testea consistencia con PromptQuorum.',
    twitterTitle: 'Mejores herramientas para Structured Output y JSON Mode (2026)',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin — ¿qué herramienta de structured output encaja con tu stack? Comparativa lado a lado (2026).',
    intro: '**Siete herramientas dominan el structured output en 2026: Instructor para extracción Pydantic, Outlines para constrained decoding, Pydantic AI para agentes type-safe, BAML para archivos de prompt schema-first, LangChain para APIs unificadas, Marvin para extracción basada en tareas y PromptQuorum para testing multi-modelo. Cada una resuelve un cuello de botella diferente del flujo de trabajo.**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — versiones de bibliotecas, licencias, APIs y URLs de documentación reverificadas contra repositorios oficiales, PyPI y documentación de los proveedores',
    readTime: '12 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'herramientas de structured output para LLMs',
    aboutTopics: ['herramientas de structured output', 'bibliotecas de validación LLM', 'cumplimiento de esquemas'],
    audience: 'Desarrolladores que construyen aplicaciones LLM en producción con requisitos de structured output',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: 'Problemas que resuelve cada herramienta', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor: extracción Pydantic', anchor: '#instructor' },
      { label: 'Outlines: constrained decoding', anchor: '#outlines' },
      { label: 'Pydantic AI: agentes type-safe', anchor: '#pydantic-ai' },
      { label: 'BAML: archivos de prompt schema-first', anchor: '#baml' },
      { label: 'LangChain: APIs unificadas', anchor: '#langchain-structured-output' },
      { label: 'Marvin: extracción basada en tareas', anchor: '#marvin' },
      { label: 'PromptQuorum: testing multi-modelo', anchor: '#promptquorum' },
      { label: 'Comparativa lado a lado', anchor: '#side-by-side-comparison' },
      { label: 'Elegir la herramienta correcta', anchor: '#how-to-choose' },
      { label: 'Añadir structured output paso a paso', anchor: '#how-to-add-structured-output' },
      { label: 'Errores comunes de structured output', anchor: '#common-mistakes' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    leadAnswerBlock: '**Elige según dónde se ejecutan tus modelos y en qué lenguajes despliega tu equipo: Instructor y Pydantic AI para flujos Python con reintentos y type safety; Outlines para cumplimiento garantizado del esquema en modelos locales; BAML cuando el mismo esquema debe servir a servicios en Python, TypeScript y Go; LangChain para equipos que ya usan chains o agentes; Marvin para llamadas rápidas de extract y classify; PromptQuorum para testing de consistencia en GPT, Claude y Gemini antes de producción.**',
    quickFacts: [
      'Instructor tiene licencia MIT y ofrece seis implementaciones oficiales: Python, TypeScript, Ruby, Go, Elixir y Rust',
      'Outlines 1.x restringe tokens en el momento de la generación y ahora también controla APIs alojadas, no solo backends locales',
      'Pydantic AI ofrece tres modos de salida: structured output nativo, llamadas a herramientas y JSON por prompt',
      'BAML compila un archivo de esquema .baml en clientes tipados y repara salidas mal formadas en lugar de reintentar',
      'LangChain 1.x lee el soporte nativo de structured output de cada proveedor desde su perfil de modelo',
      'Marvin 3.x está construido sobre Pydantic AI y expone extract, cast, classify y generate',
      'PromptQuorum testea el mismo prompt en 25+ modelos para consistencia'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores herramientas para Structured Output y JSON Mode (2026)',
      description: 'Compara siete bibliotecas para structured output LLM: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin y PromptQuorum. Clasificadas por cumplimiento de esquema, soporte de lenguaje, compatibilidad con modelos locales y licencia.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/es/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'es',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Bibliotecas de Structured Output' },
        { '@type': 'Thing', name: 'Validación de Esquemas' },
        { '@type': 'Thing', name: 'Wrappers de API LLM' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mejores herramientas de structured output LLM (2026)',
      description: 'Siete bibliotecas líderes para forzar structured output de modelos de lenguaje.',
      numberOfItems: 7,
      inLanguage: 'es',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: 'Extracción basada en Pydantic desde cualquier LLM, con reintentos automáticos. Licencia MIT, seis implementaciones de lenguaje.' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: 'Biblioteca de constrained decoding para cumplimiento garantizado del esquema en modelos locales. Open source Apache 2.0.' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: 'Framework de agentes type-safe con tres modos de structured output e integraciones de ejecución duradera.' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: 'Lenguaje de prompts schema-first que compila clientes tipados y repara salidas mal formadas mediante schema-aligned parsing.' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'Capa de API unificada para structured output en OpenAI, Anthropic, Google y modelos locales.' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'Biblioteca centrada en tareas construida sobre Pydantic AI, con los helpers extract, cast, classify y generate.' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'Plataforma de testing multi-modelo para validar la consistencia del structured output en GPT, Claude y Gemini.' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: 'Usa Instructor para extracción Python con reintentos. Usa Outlines para cumplimiento garantizado del esquema en modelos locales. Usa Pydantic AI para agentes multi-turn type-safe. Usa BAML cuando servicios en Python, TypeScript y Go deban compartir un esquema. Usa LangChain si ya estás en ese ecosistema. Usa Marvin para llamadas de una línea de extract y classify. Usa PromptQuorum para testear la consistencia del structured output en todos los modelos antes de producción.'
          }
        ],
        items: [
          '**Instructor** es la opción Python más popular — esquemas Pydantic, reintentos automáticos y ports oficiales para TypeScript, Ruby, Go, Elixir y Rust',
          '**Outlines** garantiza cumplimiento del esquema en modelos locales vía constrained decoding — sin riesgo de alucinación estructural',
          '**Pydantic AI** añade type safety a conversaciones de agentes multi-turn y degrada de structured output nativo a llamadas a herramientas y a JSON por prompt',
          '**BAML** pone el esquema y el prompt en un archivo .baml versionado y genera clientes tipados, un contrato único para equipos políglotas',
          '**with_structured_output() de LangChain** unifica el structured output en las APIs de OpenAI, Anthropic y Google',
          '**Marvin 3.x** se apoya en Pydantic AI y reduce la extracción a una sola llamada extract o classify',
          '**PromptQuorum** testea la consistencia del structured output en todos los modelos antes del despliegue en producción'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: 'Problemas que resuelve cada herramienta',
        snippets: [
          { type: 'in-one-sentence', text: 'Las herramientas de salida estructurada resuelven tres problemas distintos — imponer un esquema en el momento de la generación, validar el resultado después y reparar salidas malformadas — y la mayoría de los sistemas solo necesita los dos primeros.' },
          { type: 'in-plain-terms', text: 'No elijas por lista de funciones. Pregúntate qué fallo tienes de verdad: el modelo ignora tu formato, o lo respeta pero los valores están mal, o devuelve un JSON que ni siquiera se puede parsear. Cada caso pide una solución distinta.' },
        ],
        content: '**El structured output requiere resolver tres problemas interdependientes: definición de esquema, cumplimiento en la API y validación.** Las distintas herramientas atacan estos problemas de formas diferentes. Instructor gestiona los tres en Python con reintentos. Outlines elimina el paso de validación vía constrained decoding. Pydantic AI añade type safety para agentes. BAML traslada el esquema a un archivo compilado y repara salidas imperfectas. LangChain envuelve las APIs de proveedor. Marvin prioriza la velocidad del desarrollador. PromptQuorum valida la consistencia entre todos los modelos.',
        columns: ['Problema', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { 'Problema': 'Definir esquema', 'Instructor': 'Modelos Pydantic', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Modelos Pydantic', 'BAML': 'Archivos de clase .baml', 'LangChain': 'Definiciones de herramienta', 'Marvin': 'Hints de tipo Python' },
          { 'Problema': 'Forzar en llamada API', 'Instructor': 'Reintento + validación', 'Outlines': 'Restricción a nivel token', 'Pydantic AI': 'Nativo / herramienta / prompt', 'BAML': 'Prompt generado + parser', 'LangChain': 'Modo JSON del proveedor', 'Marvin': 'Tipos de salida de Pydantic AI' },
          { 'Problema': 'Validar respuesta', 'Instructor': 'Automático', 'Outlines': 'Garantizado en la generación', 'Pydantic AI': 'Verificado por tipo', 'BAML': 'Schema-aligned parsing', 'LangChain': 'Manual', 'Marvin': 'Automático' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor: extracción Pydantic',
        content: '**Instructor es la biblioteca de structured output más adoptada. Envuelve cualquier API LLM — OpenAI GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Ollama, vLLM — y devuelve modelos Pydantic validados en lugar de texto sin formato.** Instructor gestiona reintentos automáticamente cuando falla la validación, haciéndolo apto para producción sin manejo de errores adicional.',
        items: [
          'Funciona con todos los proveedores principales (OpenAI, Anthropic, Google, Groq, Mistral) y modelos locales vía Ollama o vLLM',
          'Esquemas Pydantic v2: hints de tipo, reglas de validación, descripciones de docstring integradas en el esquema',
          'Reintento automático con backoff en fallo de validación — no se necesita manejo de errores manual',
          'Seis implementaciones oficiales: Python, TypeScript, Ruby, Go, Elixir y Rust',
          'Open source con licencia MIT, mantenido activamente, actualmente en la línea 1.x',
          'Precios: Gratis (sin coste adicional más allá de las llamadas a la API LLM)'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines: constrained decoding',
        content: '**Outlines fuerza el cumplimiento del esquema al momento de la generación de tokens vía constrained decoding. En lugar de generar tokens y luego validar, Outlines limita los tokens válidos en cada paso para coincidir con tu esquema.** Esto garantiza que la salida se parsea contra tu esquema sin riesgo de alucinación estructural, y es lo que lo convierte en la opción por defecto para modelos locales.',
        items: [
          'Backends locales: transformers, llama.cpp, MLX y cualquier modelo de Hugging Face',
          'Backends de servidor: vLLM, Ollama y NVIDIA NIM',
          'También soporta APIs alojadas (OpenAI, Gemini), así que el mismo código se mueve entre local y nube',
          'Esquemas como modelos Pydantic, JSON Schema, patrones regex, opciones literales o gramáticas libres de contexto',
          'Cumplimiento estructural garantizado — no se necesita validación post-generación ni reintentos',
          'Open source Apache 2.0, actualmente en la línea 1.x, con un núcleo en Rust (outlines-core) para velocidad'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI: agentes type-safe',
        content: '**Pydantic AI es el framework de agentes del equipo detrás de Pydantic. Combina modelos Pydantic con soporte de primera clase para conversaciones de agentes multi-turn, añadiendo type safety completo a los bucles de agentes mientras fuerza structured output en cada turno.** Ya va por la línea 2.x y se usa en producción, no es un experimento.',
        items: [
          'Sistema de tipos Pydantic v2 — soporte completo de IDE y verificación estática de lo que devuelve un agente',
          'Tres modos de salida: structured output nativo del proveedor, llamadas a herramientas y JSON por prompt como fallback',
          'Diseño async-first para aplicaciones de alto rendimiento',
          'Soporta OpenAI, Anthropic, Google, Bedrock, Azure AI Foundry, Groq, Mistral, xAI y Ollama',
          'Integraciones de ejecución duradera (Temporal, DBOS, Prefect) para que los agentes de larga duración sobrevivan a reinicios',
          'Llamadas a herramientas integradas — define herramientas como funciones Python con hints de tipo',
          'Licencia MIT y gratuito (sin coste adicional más allá de las llamadas a la API LLM)'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML: archivos de prompt schema-first',
        content: '**BAML adopta el enfoque opuesto a las bibliotecas Python: el esquema y el prompt viven en un archivo .baml versionado, y un compilador genera un cliente tipado para tu lenguaje.** Su parser alineado al esquema repara los errores que los modelos cometen de verdad — bloques markdown alrededor del JSON, comas finales, claves sin comillas, texto de razonamiento antes del objeto — en lugar de lanzar un error y quemar un reintento.',
        items: [
          'Esquema y prompt conviven en archivos .baml, versionados y revisados como cualquier otro código fuente',
          'Genera clientes tipados nativamente para Python y TypeScript, más Go, Java, Ruby, PHP, Rust y C# vía clientes OpenAPI generados',
          'El schema-aligned parsing (SAP) recupera objetos válidos de salidas imperfectas en lugar de fallar',
          'Funciona con modelos que no tienen ningún tool-use ni modo JSON nativo',
          'Streaming con tipos — los objetos parciales llegan tipados, así puedes renderizar campos mientras se generan',
          'Open source Apache 2.0; el producto alojado de observabilidad Boundary Studio es una oferta de pago aparte'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain: APIs unificadas',
        content: '**LangChain expone with_structured_output() en todos los modelos de chat principales, unificando el structured output en OpenAI, Anthropic, Google y modelos locales detrás de un único método.** Desde la reescritura 1.x lee la capacidad nativa de structured output de cada proveedor desde su perfil de modelo en lugar de codificarla, y los agentes creados con create_agent aceptan un response_format directamente.',
        items: [
          'API unificada: un método .with_structured_output() funciona en todos los proveedores',
          'Convierte automáticamente las definiciones de herramientas de LangChain a formatos de esquema específicos del proveedor',
          'Los agentes creados con create_agent aceptan un response_format para su respuesta final',
          'El soporte nativo de structured output se lee por modelo desde los datos de perfil del proveedor en la línea 1.1+',
          'Soporta modelos Pydantic, TypedDict, dataclasses y JSON Schema en bruto',
          'Ideal para equipos ya invertidos en LangChain o LangGraph'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin: extracción basada en tareas',
        content: '**Marvin 3.x es el camino más corto de texto no estructurado a un objeto Python tipado. Está construido sobre Pydantic AI, así que obtienes la misma cobertura de proveedores y validación con mucho menos código.** Ojo: la API basada en decoradores de Marvin 2 ya no existe — @marvin.fn se eliminó en la 3.0 en favor de helpers de nivel superior y un motor de agentes centrado en tareas.',
        items: [
          'Helpers de una línea: marvin.extract, marvin.cast, marvin.classify y marvin.generate',
          'Construido sobre Pydantic AI, así que el soporte de proveedores y la validación se heredan, no se reimplementan',
          'Motor centrado en tareas para trabajo multi-paso: marvin.run, marvin.Task, marvin.Agent, marvin.Thread',
          'Los hints de tipo Python se convierten en el esquema — boilerplate mínimo para extracción y clasificación',
          'Nota de migración: el decorador @marvin.fn de Marvin 2 ya no existe; hay que reescribir esas llamadas',
          'Open source Apache 2.0, mantenido por Prefect, gratuito'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: testing multi-modelo',
        content: '**PromptQuorum no es una biblioteca de structured output en sí misma, sino una plataforma de testing para validar la consistencia del structured output entre modelos.** Ejecuta el mismo prompt simultáneamente contra GPT-5.6, Claude Opus 5, Gemini 3.1 Pro y 20+ modelos más. Mide el cumplimiento del esquema, la latencia y el coste por modelo.',
        items: [
          'Despacho multi-modelo en una sola llamada API — testea un prompt contra 25+ modelos',
          'Métricas de cumplimiento de structured output — tasa de paso, latencia, coste por modelo',
          'Identifica modelos que alucinan con tu esquema — evita desplegar en modelos poco fiables',
          'Modo consenso — encuentra acuerdos entre ejecuciones de modelos independientes',
          'Funciona con Instructor, Outlines, Pydantic AI, BAML, LangChain o APIs LLM en bruto',
          'Tier gratuito disponible, precios enterprise para testing de alto volumen'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: 'Comparativa lado a lado',
        columns: ['Herramienta', 'Ideal para', 'Formato de esquema', 'Lenguaje', 'Modelos locales', 'Licencia', 'Curva de aprendizaje'],
        rows: [
          { 'Herramienta': '[Instructor](https://python.useinstructor.com)', 'Ideal para': 'APIs Python + reintentos', 'Formato de esquema': 'Modelos Pydantic', 'Lenguaje': 'Python, TS, Ruby, Go, Elixir, Rust', 'Modelos locales': 'Sí (Ollama, vLLM)', 'Licencia': 'MIT, gratis', 'Curva de aprendizaje': 'Baja' },
          { 'Herramienta': '[Outlines](https://dottxt.ai)', 'Ideal para': 'Despliegue de modelos locales', 'Formato de esquema': 'Pydantic, JSON Schema, regex, CFG', 'Lenguaje': 'Python', 'Modelos locales': 'Sí (nativo)', 'Licencia': 'Apache 2.0, gratis', 'Curva de aprendizaje': 'Media' },
          { 'Herramienta': '[Pydantic AI](https://ai.pydantic.dev)', 'Ideal para': 'Agentes type-safe', 'Formato de esquema': 'Modelos Pydantic', 'Lenguaje': 'Python', 'Modelos locales': 'Sí (Ollama)', 'Licencia': 'MIT, gratis', 'Curva de aprendizaje': 'Baja' },
          { 'Herramienta': '[BAML](https://boundaryml.com)', 'Ideal para': 'Equipos políglotas, modelos poco fiables', 'Formato de esquema': 'Archivos de clase .baml', 'Lenguaje': 'Python, TS + 6 vía OpenAPI', 'Modelos locales': 'Sí (compatible con OpenAI)', 'Licencia': 'Apache 2.0, observabilidad de pago', 'Curva de aprendizaje': 'Media' },
          { 'Herramienta': '[LangChain](https://langchain.com)', 'Ideal para': 'Chains + agentes', 'Formato de esquema': 'Definiciones de herramienta', 'Lenguaje': 'Python, JS', 'Modelos locales': 'Sí', 'Licencia': 'MIT, gratis', 'Curva de aprendizaje': 'Media' },
          { 'Herramienta': '[Marvin](https://github.com/PrefectHQ/marvin)', 'Ideal para': 'Extract y classify rápidos', 'Formato de esquema': 'Hints de tipo', 'Lenguaje': 'Python', 'Modelos locales': 'Sí', 'Licencia': 'Apache 2.0, gratis', 'Curva de aprendizaje': 'Muy baja' },
          { 'Herramienta': '[PromptQuorum](https://www.promptquorum.com)', 'Ideal para': 'Testing multi-modelo', 'Formato de esquema': 'API-agnóstico', 'Lenguaje': 'API-first', 'Modelos locales': 'Vía proxy OpenAI', 'Licencia': 'Tier gratuito + enterprise', 'Curva de aprendizaje': 'Baja' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: 'Elegir la herramienta correcta',
        content: 'Empieza respondiendo tres preguntas: (1) ¿En qué lenguajes están escritos los servicios que llaman al modelo? (2) ¿Necesitas soporte de modelos locales? (3) ¿Cuánta complejidad de validación tienes?',
        items: [
          '**Usa Instructor si:** construyes APIs Python y necesitas reintentos automáticos en fallo de validación. Mejor opción de uso general.',
          '**Usa Outlines si:** despliegas modelos locales (llama.cpp, vLLM, MLX) y quieres cumplimiento garantizado del esquema al momento de la generación.',
          '**Usa Pydantic AI si:** construyes flujos de agentes multi-turn con type safety en todos los pasos o necesitas ejecución duradera.',
          '**Usa BAML si:** servicios en Python, TypeScript y Go deben compartir un esquema, o tu modelo no tiene un modo JSON nativo fiable.',
          '**Usa LangChain si:** ya usas LangChain o LangGraph — with_structured_output() es la adición más sencilla.',
          '**Usa Marvin si:** quieres una sola llamada extract o classify y no necesitas lógica de validación propia.',
          '**Usa PromptQuorum si:** necesitas testear la consistencia del structured output en GPT, Claude y Gemini antes de producción.'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'Añadir structured output paso a paso',
        numberedItems: [
          '**Define tu esquema de salida** — Crea un modelo Pydantic (Python), una clase .baml (BAML), una interfaz TypeScript o JSON Schema describiendo los campos, tipos y restricciones que quieres que devuelva el LLM.',
          '**Elige una biblioteca** — Instructor para APIs Python, Outlines para modelos locales, Pydantic AI para agentes, BAML para equipos políglotas, LangChain si ya está en uso, Marvin para extracción de una línea.',
          '**Instala y envuelve tu llamada LLM** — `pip install instructor` (Python), luego pasa tu esquema a la llamada API. Instructor gestiona validación y reintentos.',
          '**Testea con PromptQuorum** — Despliega en PromptQuorum y ejecuta tu prompt contra GPT, Claude y Gemini. Mide el cumplimiento del esquema por modelo.',
          '**Refina el esquema según fallos** — Si un modelo falla la validación, añade ejemplos a tu prompt o ajusta las restricciones del esquema. Itera hasta que todos los modelos pasen.'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes de structured output',
        mistakes: [
          {
            mistake: 'Tratar cualquier modo JSON como una garantía de esquema',
            problem: 'El modo JSON simple (response_format json_object, control JSON de Anthropic) solo garantiza que la respuesta es JSON válido, no que coincida con tus campos y tipos. Los modos de esquema estricto van más allá y garantizan la forma, pero ninguno garantiza que los valores sean correctos: un objeto bien formado puede contener igualmente un precio inventado o una fecha alucinada.',
            fix: 'Añade validación encima en cualquier caso: Instructor, Outlines, Pydantic AI o BAML. Las reglas de negocio van en validadores Pydantic, no solo en el esquema. Testea con PromptQuorum para detectar fallos de cumplimiento por modelo.'
          },
          {
            mistake: 'Diseñar esquemas demasiado estrictos',
            problem: 'Los esquemas demasiado restringidos (listas de enum pequeñas, patrones regex muy específicos) hacen que los LLMs fallen la validación frecuentemente. Los altos conteos de reintentos desperdician tokens y dinero.',
            fix: 'Usa PromptQuorum para testear la rigurosidad del esquema entre modelos. Relaja las restricciones para lograr un 95%+ de cumplimiento. Usa campos opcionales en lugar de requeridos cuando sea posible.'
          },
          {
            mistake: 'No testear diferencias entre modelos locales y de API',
            problem: 'Outlines en llama.cpp se comporta de forma diferente que Instructor en GPT-5.6. Las tasas de cumplimiento del esquema difieren por modelo. Construir solo para un modelo frontera de API y luego desplegar en uno local pequeño causa fallos en producción.',
            fix: 'Testea todos los backends de modelos previstos pronto. Usa PromptQuorum para ejecutar el mismo prompt en modelos locales (vLLM, Ollama) y alojados (OpenAI, Anthropic, Google).'
          },
          {
            mistake: 'Ignorar el impacto en latencia y coste de tokens',
            problem: 'El structured output con reintentos cuesta más tokens. Instructor reintenta en caso de fallo. El constrained decoding de Outlines añade sobrecarga por token frente a la generación libre. No medir el coste por modelo.',
            fix: 'Usa el tracking de costes de PromptQuorum. Compara latencia entre modelos. Para flujos sensibles al presupuesto, prefiere Outlines o BAML (sin bucle de reintentos). Para precisión en esquemas flexibles, acepta el coste de reintentos de Instructor.'
          },
          {
            mistake: 'Mezclar métodos de validación (sin consistencia)',
            problem: 'Algunas peticiones usan Instructor, otras parsing JSON en bruto. Algunos modelos validados, otros no. Esto lleva a errores inconsistentes en producción.',
            fix: 'Estandariza en un enfoque de validación por base de código. Todas las peticiones usan Instructor, o todas usan Outlines. La consistencia reduce el tiempo de depuración por 10x.'
          },
          {
            mistake: 'Copiar tutoriales escritos contra una API ya reemplazada',
            problem: 'Las bibliotecas de structured output se mueven rápido. Marvin eliminó el decorador @marvin.fn en la 3.0, LangChain reorganizó su documentación en la reescritura 1.x y Outlines cambió su superficie de imports en la 1.0. El código copiado de un tutorial antiguo falla ya en la instalación.',
            fix: 'Fija la versión mayor contra la que desarrollas y consulta la documentación actual para la superficie de la API. Prefiere el README oficial del repositorio a los posts de blog, y revisa de nuevo al subir de versión mayor.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Structured Output y JSON Mode](/es/prompt-engineering/structured-output-and-json-mode) — Cómo funciona el modo JSON en APIs de OpenAI, Anthropic y Google; cuándo usar cumplimiento de formato vs validación de esquema.',
          '[Prompt Injection y seguridad](/es/prompt-engineering/prompt-injection-and-security) — Riesgos al aceptar entrada de usuario en prompts estructurados; estrategias de sanitización.',
          '[Cómo evaluar la calidad de prompts](/es/prompt-engineering/how-to-evaluate-prompt-quality) — Mide precisión, consistencia y seguimiento de instrucciones en tus esquemas de structured output.',
          '[Cómo testear prompts entre modelos](/es/prompt-engineering/how-to-test-prompts-across-models) — Ejecuta el mismo conjunto de tests en GPT, Claude y Gemini; compara tasas de paso.',
          '[Prompt Engineering vs Fine-Tuning](/es/prompt-engineering/prompt-engineering-vs-fine-tuning) — Cuándo el prompting estructurado es suficiente vs cuándo necesitas fine-tuning del modelo.',
          '[Configuración de prompt engineering para equipos pequeños](/es/prompt-engineering/prompt-engineering-setup-small-teams) — Construir flujos de trabajo con salida de datos estructurada para equipos de 2–15.',
          '[Prompts para Datos Estructurados Confiables](/es/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Qué es el structured output en LLMs?',
            a: 'El structured output restringe las respuestas de LLM a un esquema específico — formato JSON, campos definidos, restricciones de tipo. En lugar de respuestas en texto libre, el structured output devuelve datos que tu código puede parsear y validar directamente sin manejo de errores.'
          },
          {
            q: '¿Qué herramienta es mejor para desarrolladores Python?',
            a: 'Instructor es la opción Python más popular. Usa modelos Pydantic para definir esquemas, gestiona automáticamente reintentos y validación, y soporta todas las APIs LLM principales además de modelos locales vía Ollama o vLLM. Pydantic AI encaja mejor si además quieres conversaciones multi-turn type-safe con agentes, y Marvin es la opción más rápida si solo necesitas una llamada extract o classify de una línea.'
          },
          {
            q: '¿Puedo usar structured output con modelos locales como Llama?',
            a: 'Sí. Outlines se especializa en constrained decoding para modelos locales — funciona con transformers, llama.cpp, MLX, vLLM y Ollama, y garantiza en el momento de la generación que la salida se parsea contra tu esquema. Instructor y Pydantic AI también soportan Ollama y vLLM si los ejecutas como API, y BAML funciona contra cualquier endpoint compatible con OpenAI.'
          },
          {
            q: '¿Cuál es la diferencia entre Instructor y Marvin?',
            a: 'Instructor envuelve tu propio cliente LLM y devuelve modelos Pydantic validados con reintentos automáticos, así que tú controlas la llamada. Marvin 3.x está construido sobre Pydantic AI y en su lugar te da helpers de una línea: marvin.extract, marvin.cast, marvin.classify. Instructor es más explícito y mejor para validación compleja; Marvin es más conciso para extracción sencilla. Ten en cuenta que el decorador @marvin.fn de Marvin 2 se eliminó en Marvin 3.'
          },
          {
            q: '¿LangChain soporta structured output?',
            a: 'Sí. LangChain expone with_structured_output() en ChatOpenAI, ChatAnthropic, ChatGoogleGenerativeAI y las demás clases de modelos de chat, y los agentes construidos con create_agent aceptan un response_format. Desde la línea 1.x lee el soporte nativo de structured output de cada proveedor desde los datos de perfil del modelo en lugar de codificarlo. Úsalo si ya usas LangChain o LangGraph y quieres añadir cumplimiento del esquema sin cambiar de biblioteca.'
          },
          {
            q: '¿Cómo testo si el structured output es fiable?',
            a: 'Usa PromptQuorum para ejecutar el mismo prompt en múltiples modelos y medir el cumplimiento del esquema. Diferentes modelos — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro — tienen distintos niveles de fiabilidad, y los modelos locales pequeños difieren aún más. Testea antes de desplegar en producción y valida localmente con Instructor o Pydantic.'
          },
          {
            q: '¿Qué significa "constrained decoding"?',
            a: 'El constrained decoding limita la generación de tokens a solo valores válidos según tu esquema. Outlines lo hace calculando el conjunto de tokens válidos siguientes en cada paso. Esto garantiza que la salida se parsea contra tu esquema sin validación post-generación ni reintentos, lo que lo hace más fiable que el modo JSON simple a nivel de API. Restringe la estructura, no la verdad: los campos serán correctos, los valores siguen necesitando comprobación.'
          },
          {
            q: '¿Qué es BAML y cuándo debería usarlo en lugar de Instructor?',
            a: 'BAML es un lenguaje schema-first: escribes el esquema y el prompt en un archivo .baml y compilas un cliente tipado para tu lenguaje. Elígelo sobre Instructor cuando más de un lenguaje llame al mismo prompt — un worker en Python y un frontend en TypeScript compartiendo un contrato — o cuando tu modelo devuelva JSON casi válido, porque el parser alineado al esquema de BAML repara bloques markdown, comas finales y texto de razonamiento inicial en lugar de quemar un reintento. Quédate con Instructor si tu stack es solo Python y quieres mantener los esquemas como código Pydantic normal.'
          },
          {
            q: '¿Puedo usar structured output sin ninguna biblioteca?',
            a: 'Técnicamente sí — puedes hacer que el modelo devuelva JSON y luego parsearlo tú mismo. Pero el parseo fallará con las salidas mal formadas que los modelos siguen produciendo, y nada fuerza tus nombres de campo ni tipos. Las siete herramientas resuelven esto validando con reintentos (Instructor, Marvin), forzando en el tiempo de decodificación (Outlines), reparando la salida al parsear (BAML) o envolviendo APIs de proveedor (LangChain, Pydantic AI).'
          },
          {
            q: '¿Qué herramienta tiene la mejor documentación?',
            a: 'LangChain y Pydantic AI tienen la documentación más completa debido a su respaldo corporativo. La documentación de BAML es inusualmente buena para un proyecto joven porque el lenguaje necesita enseñarse. Instructor tiene excelentes tutoriales y ejemplos a pesar de ser mantenido por la comunidad. La documentación de Outlines es técnica pero exhaustiva. La de Marvin es concisa — consulta específicamente las páginas 3.x, ya que material antiguo de Marvin 2 sigue circulando.'
          },
          {
            q: '¿Necesito las siete herramientas o solo una?',
            a: 'Empieza con una. Los desarrolladores Python deberían probar Instructor o Pydantic AI. Los equipos con modelos locales deberían probar Outlines. Los equipos políglotas deberían probar BAML. Los usuarios de LangChain deberían probar with_structured_output(). Usa PromptQuorum para validar la consistencia entre todos los modelos. La mayoría de equipos usa una herramienta más PromptQuorum para testing.'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Repositorio GitHub de Instructor](https://github.com/567-labs/instructor) — Repositorio oficial y docs para la biblioteca Instructor',
          '[Repositorio GitHub de Outlines](https://github.com/dottxt-ai/outlines) — Constrained decoding para cumplimiento garantizado del esquema',
          '[Documentación de Pydantic AI](https://pydantic.dev/docs/ai/overview/) — Framework de agentes type-safe con structured output',
          '[Guía de structured output de LangChain](https://docs.langchain.com/oss/python/langchain/structured-output) — API unificada de structured output de LangChain',
          '[Documentación de BAML](https://docs.boundaryml.com/home) — Lenguaje de prompts schema-first y schema-aligned parsing',
          '[Repositorio GitHub de Marvin](https://github.com/PrefectHQ/marvin) — Biblioteca de extracción centrada en tareas construida sobre Pydantic AI'
        ]
      }
    }
  },

  pt: {
    theme: 'Tools & Platforms',
    heroImage: '/images/best-tools-structured-output-overview-hero-pt.webp',
    title: 'Melhores ferramentas para Structured Output e JSON Mode (2026)',
    seoTitle: 'Melhores ferramentas de Structured Output e JSON Mode 2026',
    metaDescription: '7 ferramentas de structured output comparadas: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin e PromptQuorum. Licença e modelos locais.',
    ogTitle: 'Melhores ferramentas para Structured Output e JSON Mode (2026)',
    ogDescription: '7 ferramentas de structured output LLM comparadas: Instructor para tentativas, Outlines para constrained decoding, BAML para times poliglotas. Teste consistência com PromptQuorum.',
    twitterTitle: 'Melhores ferramentas para Structured Output e JSON Mode (2026)',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin — qual ferramenta de structured output se encaixa com seu stack? Comparativo lado a lado (2026).',
    intro: '**Sete ferramentas dominam o structured output em 2026: Instructor para extração Pydantic, Outlines para constrained decoding, Pydantic AI para agentes type-safe, BAML para arquivos de prompt schema-first, LangChain para APIs unificadas, Marvin para extração baseada em tarefas e PromptQuorum para testes multi-modelo. Cada uma resolve um gargalo diferente do fluxo de trabalho.**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — versões das bibliotecas, licenças, APIs e URLs de documentação reverificadas contra repositórios oficiais, PyPI e documentação dos fornecedores',
    readTime: '12 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'ferramentas de structured output para LLMs',
    aboutTopics: ['ferramentas de structured output', 'bibliotecas de validação LLM', 'conformidade de esquemas'],
    audience: 'Desenvolvedores que constroem aplicações LLM em produção com requisitos de structured output',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: 'Problemas que cada ferramenta resolve', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor: extração Pydantic', anchor: '#instructor' },
      { label: 'Outlines: constrained decoding', anchor: '#outlines' },
      { label: 'Pydantic AI: agentes type-safe', anchor: '#pydantic-ai' },
      { label: 'BAML: arquivos de prompt schema-first', anchor: '#baml' },
      { label: 'LangChain: APIs unificadas', anchor: '#langchain-structured-output' },
      { label: 'Marvin: extração baseada em tarefas', anchor: '#marvin' },
      { label: 'PromptQuorum: testes multi-modelo', anchor: '#promptquorum' },
      { label: 'Comparativo lado a lado', anchor: '#side-by-side-comparison' },
      { label: 'Escolhendo a ferramenta certa', anchor: '#how-to-choose' },
      { label: 'Adicionando structured output passo a passo', anchor: '#how-to-add-structured-output' },
      { label: 'Erros comuns de structured output', anchor: '#common-mistakes' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    leadAnswerBlock: '**Escolha conforme onde seus modelos executam e em quais linguagens seu time entrega: Instructor e Pydantic AI para fluxos Python com tentativas e type safety; Outlines para conformidade garantida do esquema em modelos locais; BAML quando o mesmo esquema precisa atender serviços em Python, TypeScript e Go; LangChain para times que já usam chains ou agentes; Marvin para chamadas rápidas de extract e classify; PromptQuorum para testes de consistência no GPT, Claude e Gemini antes da produção.**',
    quickFacts: [
      'Instructor tem licença MIT e oferece seis implementações oficiais: Python, TypeScript, Ruby, Go, Elixir e Rust',
      'Outlines 1.x restringe tokens no momento da geração e agora também comanda APIs hospedadas, não apenas backends locais',
      'Pydantic AI oferece três modos de saída: structured output nativo, chamadas de ferramentas e JSON por prompt',
      'BAML compila um arquivo de esquema .baml em clientes tipados e repara saídas malformadas em vez de tentar de novo',
      'LangChain 1.x lê o suporte nativo a structured output de cada provedor a partir do perfil do modelo',
      'Marvin 3.x é construído sobre o Pydantic AI e expõe extract, cast, classify e generate',
      'PromptQuorum testa o mesmo prompt em 25+ modelos para consistência'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores ferramentas para Structured Output e JSON Mode (2026)',
      description: 'Compara sete bibliotecas para structured output LLM: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin e PromptQuorum. Classificadas por conformidade de esquema, suporte de linguagem, compatibilidade com modelos locais e licença.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/pt/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'pt-BR',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Bibliotecas de Structured Output' },
        { '@type': 'Thing', name: 'Validação de Esquemas' },
        { '@type': 'Thing', name: 'Wrappers de API LLM' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Melhores ferramentas de structured output LLM (2026)',
      description: 'Sete bibliotecas líderes para forçar structured output de modelos de linguagem.',
      numberOfItems: 7,
      inLanguage: 'pt-BR',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: 'Extração baseada em Pydantic de qualquer LLM, com tentativas automáticas. Licença MIT, seis implementações de linguagem.' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: 'Biblioteca de constrained decoding para conformidade garantida do esquema em modelos locais. Open source Apache 2.0.' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: 'Framework de agentes type-safe com três modos de structured output e integrações de execução durável.' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: 'Linguagem de prompts schema-first que compila clientes tipados e repara saídas malformadas via schema-aligned parsing.' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'Camada de API unificada para structured output no OpenAI, Anthropic, Google e modelos locais.' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'Biblioteca centrada em tarefas construída sobre o Pydantic AI, com os helpers extract, cast, classify e generate.' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'Plataforma de testes multi-modelo para validar a consistência do structured output no GPT, Claude e Gemini.' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: 'Use Instructor para extração Python com tentativas. Use Outlines para conformidade garantida do esquema em modelos locais. Use Pydantic AI para agentes multi-turn type-safe. Use BAML quando serviços em Python, TypeScript e Go precisarem compartilhar um esquema. Use LangChain se já estiver nesse ecossistema. Use Marvin para chamadas de uma linha de extract e classify. Use PromptQuorum para testar a consistência do structured output em todos os modelos antes da produção.'
          }
        ],
        items: [
          '**Instructor** é a opção Python mais popular — esquemas Pydantic, tentativas automáticas e ports oficiais para TypeScript, Ruby, Go, Elixir e Rust',
          '**Outlines** garante conformidade do esquema em modelos locais via constrained decoding — sem risco de alucinação estrutural',
          '**Pydantic AI** adiciona type safety a conversas de agentes multi-turn e recua de structured output nativo para chamadas de ferramentas e para JSON por prompt',
          '**BAML** coloca o esquema e o prompt em um arquivo .baml versionado e gera clientes tipados, um contrato único para times poliglotas',
          '**with_structured_output() do LangChain** unifica o structured output nas APIs da OpenAI, Anthropic e Google',
          '**Marvin 3.x** se apoia no Pydantic AI e reduz a extração a uma única chamada extract ou classify',
          '**PromptQuorum** testa a consistência do structured output em todos os modelos antes da implantação em produção'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: 'Problemas que cada ferramenta resolve',
        snippets: [
          { type: 'in-one-sentence', text: 'Ferramentas de saída estruturada resolvem três problemas distintos — impor um schema no momento da geração, validar o resultado depois e reparar saídas malformadas — e a maioria dos sistemas só precisa dos dois primeiros.' },
          { type: 'in-plain-terms', text: 'Não escolha por lista de recursos. Pergunte qual falha você realmente tem: o modelo ignora o seu formato, ou respeita o formato mas os valores estão errados, ou devolve um JSON que nem dá para parsear. Cada caso pede uma resposta diferente.' },
        ],
        content: '**O structured output requer resolver três problemas interdependentes: definição de esquema, conformidade na API e validação.** Diferentes ferramentas atacam esses problemas de formas diferentes. Instructor gerencia os três em Python com tentativas. Outlines elimina a etapa de validação via constrained decoding. Pydantic AI adiciona type safety para agentes. BAML move o esquema para um arquivo compilado e repara saídas imperfeitas. LangChain envolve as APIs do fornecedor. Marvin prioriza a velocidade do desenvolvedor. PromptQuorum valida a consistência entre todos os modelos.',
        columns: ['Problema', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { 'Problema': 'Definir esquema', 'Instructor': 'Modelos Pydantic', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Modelos Pydantic', 'BAML': 'Arquivos de classe .baml', 'LangChain': 'Definições de ferramenta', 'Marvin': 'Type hints Python' },
          { 'Problema': 'Forçar na chamada API', 'Instructor': 'Tentativa + validação', 'Outlines': 'Restrição em nível de token', 'Pydantic AI': 'Nativo / ferramenta / prompt', 'BAML': 'Prompt gerado + parser', 'LangChain': 'Modo JSON do fornecedor', 'Marvin': 'Tipos de saída do Pydantic AI' },
          { 'Problema': 'Validar resposta', 'Instructor': 'Automático', 'Outlines': 'Garantido na geração', 'Pydantic AI': 'Verificado por tipo', 'BAML': 'Schema-aligned parsing', 'LangChain': 'Manual', 'Marvin': 'Automático' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor: extração Pydantic',
        content: '**Instructor é a biblioteca de structured output mais adotada. Envolve qualquer API LLM — OpenAI GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Ollama, vLLM — e retorna modelos Pydantic validados em vez de texto simples.** Instructor gerencia tentativas automaticamente quando a validação falha, tornando-o adequado para produção sem tratamento adicional de erros.',
        items: [
          'Funciona com todos os principais provedores (OpenAI, Anthropic, Google, Groq, Mistral) e modelos locais via Ollama ou vLLM',
          'Esquemas Pydantic v2: type hints, regras de validação, descrições de docstring integradas no esquema',
          'Tentativa automática com backoff em falha de validação — sem necessidade de tratamento manual de erros',
          'Seis implementações oficiais: Python, TypeScript, Ruby, Go, Elixir e Rust',
          'Open source com licença MIT, mantido ativamente, atualmente na linha 1.x',
          'Preços: Gratuito (sem custo adicional além das chamadas à API LLM)'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines: constrained decoding',
        content: '**Outlines força a conformidade do esquema no momento da geração de tokens via constrained decoding. Em vez de gerar tokens e depois validar, Outlines limita os tokens válidos em cada etapa para corresponder ao seu esquema.** Isso garante que a saída seja analisada contra o seu esquema sem risco de alucinação estrutural, e é justamente o que faz dele a escolha padrão para modelos locais.',
        items: [
          'Backends locais: transformers, llama.cpp, MLX e qualquer modelo do Hugging Face',
          'Backends de servidor: vLLM, Ollama e NVIDIA NIM',
          'APIs hospedadas também são suportadas (OpenAI, Gemini), então o mesmo código roda local e na nuvem',
          'Esquemas como modelos Pydantic, JSON Schema, padrões regex, opções literais ou gramáticas livres de contexto',
          'Conformidade estrutural garantida — sem necessidade de validação pós-geração ou tentativas',
          'Open source Apache 2.0, atualmente na linha 1.x, com um núcleo em Rust (outlines-core) para desempenho'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI: agentes type-safe',
        content: '**Pydantic AI é o framework de agentes do time por trás do próprio Pydantic. Ele combina modelos Pydantic com suporte de primeira classe para conversas de agentes multi-turn, adicionando type safety completo a loops de agentes enquanto força structured output em cada turno.** Já está na linha 2.x e roda em produção, não é um experimento.',
        items: [
          'Sistema de tipos Pydantic v2 — suporte completo de IDE e verificação estática do que o agente retorna',
          'Três modos de saída: structured output nativo do provedor, chamadas de ferramentas e JSON por prompt como fallback',
          'Design async-first para aplicações de alto desempenho',
          'Suporta OpenAI, Anthropic, Google, Bedrock, Azure AI Foundry, Groq, Mistral, xAI e Ollama',
          'Integrações de execução durável (Temporal, DBOS, Prefect) para que agentes de longa duração sobrevivam a reinícios',
          'Chamadas de ferramentas integradas — defina ferramentas como funções Python com type hints',
          'Licença MIT e gratuito (sem custo adicional além das chamadas à API LLM)'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML: arquivos de prompt schema-first',
        content: '**BAML adota a abordagem oposta às bibliotecas Python: o esquema e o prompt ficam em um arquivo .baml versionado, e um compilador gera um cliente tipado para a sua linguagem.** O parser alinhado ao esquema repara os erros que os modelos realmente cometem — blocos markdown ao redor do JSON, vírgulas sobrando, chaves sem aspas, texto de raciocínio antes do objeto — em vez de lançar um erro e queimar uma tentativa.',
        items: [
          'Esquema e prompt convivem em arquivos .baml, versionados e revisados como qualquer outro código-fonte',
          'Gera clientes tipados nativamente para Python e TypeScript, além de Go, Java, Ruby, PHP, Rust e C# via clientes OpenAPI gerados',
          'O schema-aligned parsing (SAP) recupera objetos válidos de saídas imperfeitas em vez de falhar',
          'Funciona com modelos que não têm nenhum tool-use ou modo JSON nativo',
          'Streaming com tipos — objetos parciais chegam tipados, então você renderiza campos enquanto eles são gerados',
          'Open source Apache 2.0; o produto hospedado de observabilidade Boundary Studio é uma oferta paga à parte'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain: APIs unificadas',
        content: '**LangChain expõe with_structured_output() em todos os principais modelos de chat, unificando o structured output no OpenAI, Anthropic, Google e modelos locais por trás de um único método.** Desde a reescrita 1.x ele lê a capacidade nativa de structured output de cada provedor a partir do perfil do modelo em vez de fixá-la em código, e agentes criados com create_agent aceitam um response_format diretamente.',
        items: [
          'API unificada: um método .with_structured_output() funciona em todos os provedores',
          'Converte automaticamente as definições de ferramentas do LangChain para formatos de esquema específicos do fornecedor',
          'Agentes criados com create_agent aceitam um response_format para a resposta final',
          'O suporte nativo a structured output é lido por modelo a partir dos dados de perfil do provedor na linha 1.1+',
          'Suporta modelos Pydantic, TypedDict, dataclasses e JSON Schema bruto',
          'Ideal para times já investidos em LangChain ou LangGraph'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin: extração baseada em tarefas',
        content: '**Marvin 3.x é o caminho mais curto de texto não estruturado para um objeto Python tipado. Ele é construído sobre o Pydantic AI, então você tem a mesma cobertura de provedores e validação com muito menos código.** Atenção: a API baseada em decoradores do Marvin 2 não existe mais — @marvin.fn foi removido na 3.0 em favor de helpers de nível superior e um motor de agentes centrado em tarefas.',
        items: [
          'Helpers de uma linha: marvin.extract, marvin.cast, marvin.classify e marvin.generate',
          'Construído sobre o Pydantic AI, então o suporte a provedores e a validação de saída são herdados, não reimplementados',
          'Motor centrado em tarefas para trabalho multi-etapa: marvin.run, marvin.Task, marvin.Agent, marvin.Thread',
          'Type hints Python viram o esquema — mínimo de boilerplate para extração e classificação',
          'Nota de migração: o decorador @marvin.fn do Marvin 2 não existe mais; essas chamadas precisam ser reescritas',
          'Open source Apache 2.0, mantido pela Prefect, gratuito'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: testes multi-modelo',
        content: '**PromptQuorum não é uma biblioteca de structured output em si, mas uma plataforma de testes para validar a consistência do structured output entre modelos.** Execute o mesmo prompt simultaneamente contra GPT-5.6, Claude Opus 5, Gemini 3.1 Pro e mais 20+ modelos. Meça a conformidade do esquema, a latência e o custo por modelo.',
        items: [
          'Despacho multi-modelo em uma única chamada de API — teste um prompt contra 25+ modelos',
          'Métricas de conformidade de structured output — taxa de aprovação, latência, custo por modelo',
          'Identifica modelos que alucinam com seu esquema — evite implantar em modelos pouco confiáveis',
          'Modo de consenso — encontre acordos entre execuções de modelos independentes',
          'Funciona com Instructor, Outlines, Pydantic AI, BAML, LangChain ou APIs LLM brutas',
          'Tier gratuito disponível, preços enterprise para testes de alto volume'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: 'Comparativo lado a lado',
        columns: ['Ferramenta', 'Ideal para', 'Formato de esquema', 'Linguagem', 'Modelos locais', 'Licença', 'Curva de aprendizado'],
        rows: [
          { 'Ferramenta': '[Instructor](https://python.useinstructor.com)', 'Ideal para': 'APIs Python + tentativas', 'Formato de esquema': 'Modelos Pydantic', 'Linguagem': 'Python, TS, Ruby, Go, Elixir, Rust', 'Modelos locais': 'Sim (Ollama, vLLM)', 'Licença': 'MIT, gratuito', 'Curva de aprendizado': 'Baixa' },
          { 'Ferramenta': '[Outlines](https://dottxt.ai)', 'Ideal para': 'Implantação de modelos locais', 'Formato de esquema': 'Pydantic, JSON Schema, regex, CFG', 'Linguagem': 'Python', 'Modelos locais': 'Sim (nativo)', 'Licença': 'Apache 2.0, gratuito', 'Curva de aprendizado': 'Média' },
          { 'Ferramenta': '[Pydantic AI](https://ai.pydantic.dev)', 'Ideal para': 'Agentes type-safe', 'Formato de esquema': 'Modelos Pydantic', 'Linguagem': 'Python', 'Modelos locais': 'Sim (Ollama)', 'Licença': 'MIT, gratuito', 'Curva de aprendizado': 'Baixa' },
          { 'Ferramenta': '[BAML](https://boundaryml.com)', 'Ideal para': 'Times poliglotas, modelos instáveis', 'Formato de esquema': 'Arquivos de classe .baml', 'Linguagem': 'Python, TS + 6 via OpenAPI', 'Modelos locais': 'Sim (compatível com OpenAI)', 'Licença': 'Apache 2.0, observabilidade paga', 'Curva de aprendizado': 'Média' },
          { 'Ferramenta': '[LangChain](https://langchain.com)', 'Ideal para': 'Chains + agentes', 'Formato de esquema': 'Definições de ferramenta', 'Linguagem': 'Python, JS', 'Modelos locais': 'Sim', 'Licença': 'MIT, gratuito', 'Curva de aprendizado': 'Média' },
          { 'Ferramenta': '[Marvin](https://github.com/PrefectHQ/marvin)', 'Ideal para': 'Extract e classify rápidos', 'Formato de esquema': 'Type hints', 'Linguagem': 'Python', 'Modelos locais': 'Sim', 'Licença': 'Apache 2.0, gratuito', 'Curva de aprendizado': 'Muito baixa' },
          { 'Ferramenta': '[PromptQuorum](https://www.promptquorum.com)', 'Ideal para': 'Testes multi-modelo', 'Formato de esquema': 'API-agnóstico', 'Linguagem': 'API-first', 'Modelos locais': 'Via proxy OpenAI', 'Licença': 'Tier gratuito + enterprise', 'Curva de aprendizado': 'Baixa' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: 'Escolhendo a ferramenta certa',
        content: 'Comece respondendo três perguntas: (1) Em quais linguagens estão escritos os serviços que realmente chamam o modelo? (2) Você precisa de suporte a modelos locais? (3) Qual é a complexidade de validação que você tem?',
        items: [
          '**Use Instructor se:** você constrói APIs Python e precisa de tentativas automáticas em falha de validação. Melhor opção de uso geral.',
          '**Use Outlines se:** você implanta modelos locais (llama.cpp, vLLM, MLX) e quer conformidade garantida do esquema no momento da geração.',
          '**Use Pydantic AI se:** você constrói fluxos de agentes multi-turn com type safety em todas as etapas ou precisa de execução durável.',
          '**Use BAML se:** serviços em Python, TypeScript e Go precisam compartilhar um esquema, ou seu modelo não tem um modo JSON nativo confiável.',
          '**Use LangChain se:** você já usa LangChain ou LangGraph — with_structured_output() é a adição mais simples.',
          '**Use Marvin se:** você quer uma única chamada extract ou classify e não precisa de lógica de validação própria.',
          '**Use PromptQuorum se:** você precisa testar a consistência do structured output no GPT, Claude e Gemini antes da produção.'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'Adicionando structured output passo a passo',
        numberedItems: [
          '**Defina seu esquema de saída** — Crie um modelo Pydantic (Python), uma classe .baml (BAML), uma interface TypeScript ou JSON Schema descrevendo os campos, tipos e restrições que você quer que o LLM retorne.',
          '**Escolha uma biblioteca** — Instructor para APIs Python, Outlines para modelos locais, Pydantic AI para agentes, BAML para times poliglotas, LangChain se já estiver em uso, Marvin para extração de uma linha.',
          '**Instale e envolva sua chamada LLM** — `pip install instructor` (Python), depois passe seu esquema para a chamada de API. Instructor gerencia validação e tentativas.',
          '**Teste com PromptQuorum** — Implante no PromptQuorum e execute seu prompt contra GPT, Claude e Gemini. Meça a conformidade do esquema por modelo.',
          '**Refine o esquema conforme falhas** — Se um modelo falha na validação, adicione exemplos ao seu prompt ou ajuste as restrições do esquema. Itere até que todos os modelos passem.'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns de structured output',
        mistakes: [
          {
            mistake: 'Tratar qualquer modo JSON como garantia de esquema',
            problem: 'O modo JSON simples (response_format json_object, controle JSON da Anthropic) garante apenas que a resposta é JSON válido, não que ela corresponde aos seus campos e tipos. Modos de esquema estrito vão além e garantem o formato, mas nenhum garante que os valores estejam corretos: um objeto bem formado ainda pode conter um preço inventado ou uma data alucinada.',
            fix: 'Adicione validação por cima de qualquer forma: Instructor, Outlines, Pydantic AI ou BAML. Regras de negócio pertencem a validadores Pydantic, não apenas ao esquema. Teste com PromptQuorum para detectar falhas de conformidade por modelo.'
          },
          {
            mistake: 'Projetar esquemas muito rígidos',
            problem: 'Esquemas muito restritos (listas de enum pequenas, padrões regex muito específicos) fazem os LLMs falharem na validação com frequência. Altas contagens de tentativas desperdiçam tokens e dinheiro.',
            fix: 'Use PromptQuorum para testar a rigidez do esquema entre modelos. Relaxe as restrições para alcançar 95%+ de conformidade. Use campos opcionais em vez de obrigatórios quando possível.'
          },
          {
            mistake: 'Não testar diferenças entre modelos locais e de API',
            problem: 'Outlines no llama.cpp se comporta de forma diferente do Instructor no GPT-5.6. As taxas de conformidade do esquema diferem por modelo. Construir apenas para um modelo de fronteira via API e depois implantar em um modelo local pequeno causa falhas em produção.',
            fix: 'Teste todos os backends de modelos previstos cedo. Use PromptQuorum para executar o mesmo prompt em modelos locais (vLLM, Ollama) e hospedados (OpenAI, Anthropic, Google).'
          },
          {
            mistake: 'Ignorar o impacto na latência e custo de tokens',
            problem: 'O structured output com tentativas custa mais tokens. Instructor tenta novamente em caso de falha. O constrained decoding do Outlines adiciona sobrecarga por token em relação à geração livre. Não medir o custo por modelo.',
            fix: 'Use o rastreamento de custos do PromptQuorum. Compare latência entre modelos. Para fluxos sensíveis ao orçamento, prefira Outlines ou BAML (sem laço de tentativas). Para precisão em esquemas flexíveis, aceite o custo de tentativas do Instructor.'
          },
          {
            mistake: 'Misturar métodos de validação (sem consistência)',
            problem: 'Algumas requisições usam Instructor, outras parsing JSON bruto. Alguns modelos validados, outros não. Isso leva a erros inconsistentes em produção.',
            fix: 'Padronize em uma abordagem de validação por base de código. Todas as requisições usam Instructor, ou todas usam Outlines. A consistência reduz o tempo de depuração em 10x.'
          },
          {
            mistake: 'Copiar tutoriais escritos contra uma API já substituída',
            problem: 'Bibliotecas de structured output evoluem rápido. O Marvin removeu o decorador @marvin.fn na 3.0, o LangChain reorganizou a documentação na reescrita 1.x e o Outlines mudou a superfície de imports na 1.0. Código copiado de um tutorial antigo já falha na instalação.',
            fix: 'Fixe a versão maior contra a qual você desenvolve e consulte a documentação atual para a superfície da API. Prefira o README oficial do repositório a posts de blog, e revise novamente a cada upgrade de versão maior.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Structured Output e JSON Mode](/pt/prompt-engineering/structured-output-and-json-mode) — Como o modo JSON funciona nas APIs da OpenAI, Anthropic e Google; quando usar conformidade de formato vs validação de esquema.',
          '[Prompt Injection e segurança](/pt/prompt-engineering/prompt-injection-and-security) — Riscos ao aceitar entrada de usuário em prompts estruturados; estratégias de sanitização.',
          '[Como avaliar a qualidade de prompts](/pt/prompt-engineering/how-to-evaluate-prompt-quality) — Meça precisão, consistência e seguimento de instruções em seus esquemas de structured output.',
          '[Como testar prompts entre modelos](/pt/prompt-engineering/how-to-test-prompts-across-models) — Execute o mesmo conjunto de testes no GPT, Claude e Gemini; compare taxas de aprovação.',
          '[Prompt Engineering vs Fine-Tuning](/pt/prompt-engineering/prompt-engineering-vs-fine-tuning) — Quando o prompting estruturado é suficiente vs quando você precisa de fine-tuning do modelo.',
          '[Configuração de prompt engineering para equipes pequenas](/pt/prompt-engineering/prompt-engineering-setup-small-teams) — Construir fluxos de trabalho com saída de dados estruturada para equipes de 2–15.',
          '[Prompts para Dados Estruturados Confiáveis](/pt/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'O que é structured output em LLMs?',
            a: 'O structured output restringe as respostas do LLM a um esquema específico — formato JSON, campos definidos, restrições de tipo. Em vez de respostas em texto livre, o structured output retorna dados que seu código pode analisar e validar diretamente sem tratamento de erros.'
          },
          {
            q: 'Qual ferramenta é melhor para desenvolvedores Python?',
            a: 'Instructor é a opção Python mais popular. Usa modelos Pydantic para definir esquemas, gerencia automaticamente tentativas e validação, e suporta todas as principais APIs LLM além de modelos locais via Ollama ou vLLM. Pydantic AI encaixa melhor se você também quiser conversas multi-turn type-safe com agentes, e Marvin é a opção mais rápida se você só precisa de uma chamada extract ou classify de uma linha.'
          },
          {
            q: 'Posso usar structured output com modelos locais como Llama?',
            a: 'Sim. Outlines se especializa em constrained decoding para modelos locais — funciona com transformers, llama.cpp, MLX, vLLM e Ollama, e garante no momento da geração que a saída seja analisada contra o seu esquema. Instructor e Pydantic AI também suportam Ollama e vLLM se você os executar como API, e o BAML funciona contra qualquer endpoint compatível com OpenAI.'
          },
          {
            q: 'Qual é a diferença entre Instructor e Marvin?',
            a: 'Instructor envolve o seu próprio cliente LLM e retorna modelos Pydantic validados com tentativas automáticas, então você controla a chamada. Marvin 3.x é construído sobre o Pydantic AI e oferece helpers de uma linha: marvin.extract, marvin.cast, marvin.classify. Instructor é mais explícito e melhor para validação complexa; Marvin é mais conciso para extração simples. Note que o decorador @marvin.fn do Marvin 2 foi removido no Marvin 3.'
          },
          {
            q: 'LangChain suporta structured output?',
            a: 'Sim. LangChain expõe with_structured_output() no ChatOpenAI, ChatAnthropic, ChatGoogleGenerativeAI e nas demais classes de modelos de chat, e agentes construídos com create_agent aceitam um response_format. Desde a linha 1.x ele lê o suporte nativo a structured output de cada provedor a partir dos dados de perfil do modelo em vez de fixá-lo em código. Use-o se já utiliza LangChain ou LangGraph e quer adicionar conformidade do esquema sem mudar de biblioteca.'
          },
          {
            q: 'Como testo se o structured output é confiável?',
            a: 'Use PromptQuorum para executar o mesmo prompt em múltiplos modelos e medir a conformidade do esquema. Diferentes modelos — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro — têm níveis diferentes de confiabilidade, e modelos locais pequenos variam ainda mais. Teste antes de implantar em produção e valide localmente com Instructor ou Pydantic.'
          },
          {
            q: 'O que significa "constrained decoding"?',
            a: 'O constrained decoding limita a geração de tokens a apenas valores válidos segundo seu esquema. Outlines faz isso calculando o conjunto de próximos tokens válidos em cada etapa. Isso garante que a saída seja analisada contra o seu esquema sem validação pós-geração ou tentativas, o que o torna mais confiável que o modo JSON simples em nível de API. Ele restringe a estrutura, não a verdade: os campos estarão certos, os valores ainda precisam ser conferidos.'
          },
          {
            q: 'O que é BAML e quando devo usá-lo em vez do Instructor?',
            a: 'BAML é uma linguagem schema-first: você escreve o esquema e o prompt em um arquivo .baml e compila um cliente tipado para a sua linguagem. Escolha-o em vez do Instructor quando mais de uma linguagem chama o mesmo prompt — um worker em Python e um frontend em TypeScript compartilhando um contrato — ou quando seu modelo devolve JSON quase válido, porque o parser alinhado ao esquema do BAML repara blocos markdown, vírgulas sobrando e texto de raciocínio inicial em vez de queimar uma tentativa. Fique com o Instructor se seu stack é só Python e você quer manter os esquemas como código Pydantic comum.'
          },
          {
            q: 'Posso usar structured output sem nenhuma biblioteca?',
            a: 'Tecnicamente sim — você pode fazer o modelo retornar JSON e depois analisá-lo você mesmo. Mas o parsing vai falhar nas saídas malformadas que os modelos ainda produzem, e nada força seus nomes de campo ou tipos. As sete ferramentas resolvem isso validando com tentativas (Instructor, Marvin), forçando no tempo de decodificação (Outlines), reparando a saída na análise (BAML) ou envolvendo APIs do fornecedor (LangChain, Pydantic AI).'
          },
          {
            q: 'Qual ferramenta tem a melhor documentação?',
            a: 'LangChain e Pydantic AI têm a documentação mais completa devido ao seu suporte corporativo. A documentação do BAML é incomumente boa para um projeto jovem porque a linguagem precisa ser ensinada. Instructor tem excelentes tutoriais e exemplos apesar de ser mantido pela comunidade. A documentação do Outlines é técnica mas abrangente. A do Marvin é concisa — consulte especificamente as páginas 3.x, já que material antigo do Marvin 2 ainda circula.'
          },
          {
            q: 'Preciso das sete ferramentas ou apenas de uma?',
            a: 'Comece com uma. Desenvolvedores Python devem experimentar Instructor ou Pydantic AI. Times com modelos locais devem experimentar Outlines. Times poliglotas devem experimentar BAML. Usuários do LangChain devem experimentar with_structured_output(). Use PromptQuorum para validar a consistência entre todos os modelos. A maioria das equipes usa uma ferramenta mais PromptQuorum para testes.'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Repositório GitHub do Instructor](https://github.com/567-labs/instructor) — Repositório oficial e docs para a biblioteca Instructor',
          '[Repositório GitHub do Outlines](https://github.com/dottxt-ai/outlines) — Constrained decoding para conformidade garantida do esquema',
          '[Documentação do Pydantic AI](https://pydantic.dev/docs/ai/overview/) — Framework de agentes type-safe com structured output',
          '[Guia de structured output do LangChain](https://docs.langchain.com/oss/python/langchain/structured-output) — API unificada de structured output do LangChain',
          '[Documentação do BAML](https://docs.boundaryml.com/home) — Linguagem de prompts schema-first e schema-aligned parsing',
          '[Repositório GitHub do Marvin](https://github.com/PrefectHQ/marvin) — Biblioteca de extração centrada em tarefas construída sobre o Pydantic AI'
        ]
      }
    }
  },

  fr: {
    theme: 'Outils & Plateformes',
    heroImage: '/images/best-tools-structured-output-overview-hero-fr.webp',
    title: 'Meilleurs outils pour Structured Output et JSON Mode (2026)',
    seoTitle: 'Meilleurs outils Structured Output et JSON Mode 2026',
    metaDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin : quel outil choisir ? Tableau comparatif 2026 : licence, schéma, modèles locaux.',
    ogTitle: 'Meilleurs Outils pour Structured Output et JSON Mode (2026)',
    ogDescription: '7 outils de structured output LLM comparés : Instructor pour retries, Outlines pour décodage contraint, BAML pour équipes polyglottes. Testez avec PromptQuorum.',
    twitterTitle: 'Meilleurs Outils pour Structured Output et JSON Mode (2026)',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin — quel outil de structured output choisir ? Comparaison 2026.',
    intro: '**Sept outils dominent le Structured Output en 2026 : Instructor pour l\'extraction Pydantic, Outlines pour le décodage contraint, Pydantic AI pour les agents type-safe, BAML pour les fichiers de prompt schema-first, LangChain pour les APIs unifiées, Marvin pour l\'extraction par tâches et PromptQuorum pour les tests multi-modèles. Chacun résout un goulot d\'étranglement différent.**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — versions des bibliothèques, licences, APIs et URLs de documentation revérifiées auprès des dépôts officiels, de PyPI et de la documentation des éditeurs',
    readTime: '12 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'outils Structured Output pour LLMs',
    aboutTopics: ['outils Structured Output', 'bibliothèques de validation LLM', 'application de schéma'],
    audience: 'Développeurs créant des applications LLM en production avec exigences Structured Output',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: 'Problèmes résolus par chaque outil', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor : extraction Pydantic', anchor: '#instructor' },
      { label: 'Outlines : décodage contraint', anchor: '#outlines' },
      { label: 'Pydantic AI : agents type-safe', anchor: '#pydantic-ai' },
      { label: 'BAML : fichiers de prompt schema-first', anchor: '#baml' },
      { label: 'LangChain : APIs unifiées', anchor: '#langchain-structured-output' },
      { label: 'Marvin : extraction par tâches', anchor: '#marvin' },
      { label: 'PromptQuorum : tests multi-modèles', anchor: '#promptquorum' },
      { label: 'Comparaison côte à côte', anchor: '#side-by-side-comparison' },
      { label: 'Choisir le bon outil', anchor: '#how-to-choose' },
      { label: 'Ajouter le Structured Output étape par étape', anchor: '#how-to-add-structured-output' },
      { label: 'Erreurs courantes en Structured Output', anchor: '#common-mistakes' },
      { label: 'Structured Output et conformité RGPD en France', anchor: '#contexte-francophone' },
      { label: 'Questions fréquentes', anchor: '#faq' },
    ],
    leadAnswerBlock: '**Choisissez selon l\'endroit où tournent vos modèles et les langages que livre votre équipe : Instructor et Pydantic AI pour les workflows Python avec retries et sécurité de type ; Outlines pour une conformité de schéma garantie sur les modèles locaux ; BAML quand un même schéma doit servir des services Python, TypeScript et Go ; LangChain pour les équipes déjà sur des chaînes ou des agents ; Marvin pour des appels extract et classify rapides ; PromptQuorum pour tester la cohérence sur GPT, Claude et Gemini avant la production.**',
    quickFacts: [
      'Instructor est sous licence MIT et propose six implémentations officielles : Python, TypeScript, Ruby, Go, Elixir et Rust',
      'Outlines 1.x contraint les tokens au moment de la génération et pilote désormais aussi des APIs hébergées, pas seulement des backends locaux',
      'Pydantic AI offre trois modes de sortie : Structured Output natif, appels d\'outils et JSON par prompt',
      'BAML compile un fichier de schéma .baml en clients typés et répare les sorties malformées au lieu de relancer',
      'LangChain 1.x lit le support natif du Structured Output de chaque fournisseur depuis son profil de modèle',
      'Marvin 3.x repose sur Pydantic AI et expose extract, cast, classify et generate',
      'PromptQuorum teste le même prompt sur 25+ modèles pour la cohérence'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleurs outils pour Structured Output et JSON Mode (2026)',
      description: 'Comparaison de sept bibliothèques pour Structured Output LLM : Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin et PromptQuorum. Classées par application de schéma, support de langages, compatibilité des modèles locaux et licence.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/fr/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'fr',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Bibliothèques Structured Output' },
        { '@type': 'Thing', name: 'Validation de schéma' },
        { '@type': 'Thing', name: 'Wrappers API LLM' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleurs Outils pour Structured Output LLM (2026)',
      description: 'Sept bibliothèques principales pour appliquer la sortie structurée des modèles de langage.',
      numberOfItems: 7,
      inLanguage: 'fr',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: 'Extraction basée sur Pydantic depuis n\'importe quel LLM, avec retries automatiques. Licence MIT, six implémentations de langage.' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: 'Bibliothèque de décodage contraint pour la conformité garantie du schéma sur les modèles locaux. Open source Apache 2.0.' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: 'Framework d\'agents type-safe avec trois modes de Structured Output et intégrations d\'exécution durable.' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: 'Langage de prompts schema-first qui compile des clients typés et répare les sorties malformées par schema-aligned parsing.' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'Couche API unifiée pour Structured Output sur OpenAI, Anthropic, Google et modèles locaux.' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'Bibliothèque orientée tâches bâtie sur Pydantic AI, exposant extract, cast, classify et generate.' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'Plateforme de tests cross-modèles pour valider la cohérence Structured Output sur GPT, Claude et Gemini.' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: 'Utilisez Instructor pour l\'extraction Python avec retries. Outlines pour la conformité de schéma garantie sur les modèles locaux. Pydantic AI pour les agents multi-tours type-safe. BAML quand des services Python, TypeScript et Go doivent partager un schéma. LangChain si vous êtes déjà dans cet écosystème. Marvin pour des appels extract et classify en une ligne. PromptQuorum pour tester la cohérence du Structured Output sur tous les modèles avant la production.'
          }
        ],
        items: [
          '**Instructor** est le choix Python le plus populaire — schémas Pydantic, retries automatiques et portages officiels en TypeScript, Ruby, Go, Elixir et Rust',
          '**Outlines** garantit la conformité de schéma sur les modèles locaux via le décodage contraint — aucun risque d\'hallucination structurelle',
          '**Pydantic AI** ajoute la sécurité de type aux conversations d\'agents multi-tours et bascule du Structured Output natif vers les appels d\'outils puis le JSON par prompt',
          '**BAML** place le schéma et le prompt dans un fichier .baml versionné et génère des clients typés — un seul contrat pour les équipes polyglottes',
          '**with_structured_output() de LangChain** unifie le Structured Output sur OpenAI, Anthropic et Google',
          '**Marvin 3.x** s\'appuie sur Pydantic AI et réduit l\'extraction à un seul appel extract ou classify',
          '**PromptQuorum** teste la cohérence du Structured Output sur tous les modèles avant le déploiement en production'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: 'Problèmes résolus par chaque outil',
        snippets: [
          { type: 'in-one-sentence', text: 'Les outils de sortie structurée résolvent trois problèmes distincts — imposer un schéma dès la génération, valider ensuite le résultat, et réparer une sortie malformée — et la plupart des stacks n\'ont besoin que des deux premiers.' },
          { type: 'in-plain-terms', text: 'Ne choisissez pas sur une liste de fonctionnalités. Demandez quelle panne vous rencontrez vraiment : le modèle ignore votre format, ou il le respecte mais les valeurs sont fausses, ou il renvoie un JSON qui ne se parse même pas. Chaque cas appelle une réponse différente.' },
        ],
        content: '**Le Structured Output nécessite de résoudre trois problèmes interdépendants : définition de schéma, application via l\'API et validation.** Différents outils abordent ces problèmes différemment. Instructor gère les trois en Python avec des retries. Outlines élimine l\'étape de validation via le décodage contraint. Pydantic AI ajoute la sécurité de type pour les agents. BAML déplace le schéma dans un fichier compilé et répare les sorties imparfaites. LangChain enveloppe les APIs des fournisseurs. Marvin priorise la rapidité du développeur. PromptQuorum valide la cohérence sur tous les modèles.',
        columns: ['Problème', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { 'Problème': 'Définir le schéma', 'Instructor': 'Modèles Pydantic', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Modèles Pydantic', 'BAML': 'Fichiers de classe .baml', 'LangChain': 'Définitions d\'outils', 'Marvin': 'Indices de type Python' },
          { 'Problème': 'Appliquer sur l\'appel API', 'Instructor': 'Retry + validation', 'Outlines': 'Contrainte au niveau token', 'Pydantic AI': 'Natif / outil / prompt', 'BAML': 'Prompt généré + parseur', 'LangChain': 'Mode JSON du fournisseur', 'Marvin': 'Types de sortie Pydantic AI' },
          { 'Problème': 'Valider la réponse', 'Instructor': 'Automatique', 'Outlines': 'Garanti à la génération', 'Pydantic AI': 'Vérifié par type', 'BAML': 'Schema-aligned parsing', 'LangChain': 'Manuel', 'Marvin': 'Automatique' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor : extraction Pydantic',
        content: '**Instructor est la bibliothèque de Structured Output la plus répandue. Elle enveloppe toute API LLM — OpenAI GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Ollama, vLLM — et retourne des modèles Pydantic validés plutôt que du texte brut.** Instructor gère les retries automatiquement en cas d\'échec de validation, ce qui le rend prêt pour la production sans gestion d\'erreurs supplémentaire.',
        items: [
          'Fonctionne avec tous les grands fournisseurs (OpenAI, Anthropic, Google, Groq, Mistral) et les modèles locaux via Ollama ou vLLM',
          'Schémas Pydantic v2 : indices de type, règles de validation, descriptions docstring intégrées au schéma',
          'Retry automatique avec backoff en cas d\'échec de validation — aucune gestion d\'erreur manuelle requise',
          'Six implémentations officielles : Python, TypeScript, Ruby, Go, Elixir et Rust',
          'Open source sous licence MIT, activement maintenu, actuellement en 1.x',
          'Tarification : gratuit (aucun coût supplémentaire au-delà des appels API LLM)'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines : décodage contraint',
        content: '**Outlines applique la conformité du schéma au moment de la génération de tokens via le décodage contraint. Au lieu de générer des tokens puis de valider, Outlines limite les tokens valides à chaque étape pour correspondre à votre schéma.** Cela garantit que la sortie se parse contre votre schéma, sans risque d\'hallucination structurelle — c\'est précisément ce qui en fait le choix par défaut pour les modèles locaux.',
        items: [
          'Backends locaux : transformers, llama.cpp, MLX et tout modèle Hugging Face',
          'Backends serveur : vLLM, Ollama et NVIDIA NIM',
          'Les APIs hébergées sont aussi supportées (OpenAI, Gemini) : le même code passe du local au cloud',
          'Schémas sous forme de modèles Pydantic, JSON Schema, motifs regex, choix littéraux ou grammaires hors contexte',
          'Conformité structurelle garantie — aucune validation post-génération ni retry nécessaire',
          'Open source Apache 2.0, actuellement en 1.x, avec un cœur en Rust (outlines-core) pour la performance'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI : agents type-safe',
        content: '**Pydantic AI est le framework d\'agents de l\'équipe derrière Pydantic elle-même. Il combine les modèles Pydantic avec un support de premier ordre pour les conversations d\'agents multi-tours, ajoutant une sécurité de type complète aux boucles d\'agents tout en appliquant le Structured Output à chaque tour.** Il en est à la série 2.x et tourne en production, ce n\'est plus une expérimentation.',
        items: [
          'Système de type Pydantic v2 — support IDE complet et vérification statique de ce que renvoie un agent',
          'Trois modes de sortie : Structured Output natif du fournisseur, appels d\'outils, et JSON par prompt en repli',
          'Design async-first pour les applications à haut débit',
          'Supporte OpenAI, Anthropic, Google, Bedrock, Azure AI Foundry, Groq, Mistral, xAI et Ollama',
          'Intégrations d\'exécution durable (Temporal, DBOS, Prefect) pour que les agents longue durée survivent aux redémarrages',
          'Appels d\'outils intégrés — définir les outils comme des fonctions Python avec indices de type',
          'Sous licence MIT et gratuit (aucun coût supplémentaire au-delà des appels API LLM)'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML : fichiers de prompt schema-first',
        content: '**BAML prend le contre-pied des bibliothèques Python : le schéma et le prompt vivent dans un fichier .baml versionné, et un compilateur génère un client typé pour votre langage.** Son parseur aligné sur le schéma répare les erreurs que les modèles commettent réellement — blocs markdown autour du JSON, virgules finales, clés sans guillemets, texte de raisonnement avant l\'objet — au lieu de lever une erreur et de brûler un retry.',
        items: [
          'Schéma et prompt cohabitent dans des fichiers .baml, versionnés et relus comme n\'importe quel autre code source',
          'Génère des clients typés nativement pour Python et TypeScript, plus Go, Java, Ruby, PHP, Rust et C# via des clients OpenAPI générés',
          'Le schema-aligned parsing (SAP) récupère des objets valides à partir de sorties imparfaites au lieu d\'échouer',
          'Fonctionne avec des modèles dépourvus de tout tool-use ou mode JSON natif',
          'Streaming typé — les objets partiels arrivent typés, vous affichez les champs au fil de la génération',
          'Open source Apache 2.0 ; le produit hébergé d\'observabilité Boundary Studio est une offre payante distincte'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain : APIs unifiées',
        content: '**LangChain expose with_structured_output() sur tous les modèles de chat majeurs, unifiant le Structured Output sur OpenAI, Anthropic, Google et les modèles locaux derrière une seule méthode.** Depuis la réécriture 1.x, il lit la capacité native de Structured Output de chaque fournisseur dans son profil de modèle au lieu de la coder en dur, et les agents créés avec create_agent acceptent directement un response_format.',
        items: [
          'API unifiée : une méthode .with_structured_output() fonctionne sur tous les fournisseurs',
          'Convertit automatiquement les définitions d\'outils LangChain en formats de schéma spécifiques au fournisseur',
          'Les agents créés avec create_agent acceptent un response_format pour leur réponse finale',
          'Le support natif du Structured Output est lu par modèle dans les données de profil du fournisseur à partir de la série 1.1',
          'Supporte les modèles Pydantic, TypedDict, dataclasses et JSON Schema brut',
          'Idéal pour les équipes déjà investies dans LangChain ou LangGraph'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin : extraction par tâches',
        content: '**Marvin 3.x est le chemin le plus court d\'un texte non structuré vers un objet Python typé. Il est bâti sur Pydantic AI : vous obtenez la même couverture de fournisseurs et la même validation avec bien moins de code.** Attention : l\'API à décorateurs de Marvin 2 a disparu — @marvin.fn a été supprimé en 3.0 au profit de fonctions de haut niveau et d\'un moteur d\'agents orienté tâches.',
        items: [
          'Fonctions en une ligne : marvin.extract, marvin.cast, marvin.classify et marvin.generate',
          'Bâti sur Pydantic AI : le support des fournisseurs et la validation des sorties sont hérités, pas réimplémentés',
          'Moteur orienté tâches pour le travail en plusieurs étapes : marvin.run, marvin.Task, marvin.Agent, marvin.Thread',
          'Les indices de type Python deviennent le schéma — boilerplate minimal pour l\'extraction et la classification',
          'Note de migration : le décorateur @marvin.fn de Marvin 2 n\'existe plus ; ces appels doivent être réécrits',
          'Open source Apache 2.0, maintenu par Prefect, gratuit'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum : tests multi-modèles',
        content: '**PromptQuorum n\'est pas une bibliothèque de Structured Output en soi, mais une plateforme de test pour valider la cohérence du Structured Output entre les modèles.** Exécutez le même prompt simultanément contre GPT-5.6, Claude Opus 5, Gemini 3.1 Pro et 20+ autres modèles. Mesurez la conformité du schéma, la latence et le coût par modèle.',
        items: [
          'Dispatch multi-modèles en un seul appel API — tester un prompt contre 25+ modèles',
          'Métriques de conformité Structured Output — taux de réussite, latence, coût par modèle',
          'Identifier les modèles qui hallucinent sur votre schéma — éviter le déploiement sur des modèles peu fiables',
          'Mode consensus — trouver les accords entre des exécutions de modèles indépendantes',
          'Fonctionne avec Instructor, Outlines, Pydantic AI, BAML, LangChain ou les APIs LLM brutes',
          'Niveau gratuit disponible, tarification entreprise pour les tests à grand volume'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: 'Comparaison côte à côte',
        columns: ['Outil', 'Meilleur usage', 'Format de schéma', 'Langage', 'Modèles locaux', 'Licence'],
        rows: [
          { 'Outil': '[Instructor](https://python.useinstructor.com)', 'Meilleur usage': 'APIs Python + retries', 'Format de schéma': 'Modèles Pydantic', 'Langage': 'Python, TS, Ruby, Go, Elixir, Rust', 'Modèles locaux': 'Oui (Ollama, vLLM)', 'Licence': 'MIT, gratuit', "Courbe d'apprentissage": 'Faible' },
          { 'Outil': '[Outlines](https://dottxt.ai)', 'Meilleur usage': 'Déploiement local', 'Format de schéma': 'Pydantic, JSON Schema, regex, CFG', 'Langage': 'Python', 'Modèles locaux': 'Oui (natif)', 'Licence': 'Apache 2.0, gratuit', "Courbe d'apprentissage": 'Moyenne' },
          { 'Outil': '[Pydantic AI](https://ai.pydantic.dev)', 'Meilleur usage': 'Agents type-safe', 'Format de schéma': 'Modèles Pydantic', 'Langage': 'Python', 'Modèles locaux': 'Oui (Ollama)', 'Licence': 'MIT, gratuit', "Courbe d'apprentissage": 'Faible' },
          { 'Outil': '[BAML](https://boundaryml.com)', 'Meilleur usage': 'Équipes polyglottes, modèles instables', 'Format de schéma': 'Fichiers de classe .baml', 'Langage': 'Python, TS + 6 via OpenAPI', 'Modèles locaux': 'Oui (compatible OpenAI)', 'Licence': 'Apache 2.0, observabilité payante', "Courbe d'apprentissage": 'Moyenne' },
          { 'Outil': '[LangChain](https://langchain.com)', 'Meilleur usage': 'Chaînes + agents', 'Format de schéma': "Définitions d'outils", 'Langage': 'Python, JS', 'Modèles locaux': 'Oui', 'Licence': 'MIT, gratuit', "Courbe d'apprentissage": 'Moyenne' },
          { 'Outil': '[Marvin](https://github.com/PrefectHQ/marvin)', 'Meilleur usage': 'Extract et classify rapides', 'Format de schéma': 'Indices de type', 'Langage': 'Python', 'Modèles locaux': 'Oui', 'Licence': 'Apache 2.0, gratuit', "Courbe d'apprentissage": 'Très faible' },
          { 'Outil': '[PromptQuorum](https://www.promptquorum.com)', 'Meilleur usage': 'Tests multi-modèles', 'Format de schéma': 'Agnostique API', 'Langage': 'API-first', 'Modèles locaux': 'Via proxy OpenAI', 'Licence': 'Niveau gratuit + entreprise', "Courbe d'apprentissage": 'Faible' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: 'Choisir le bon outil',
        content: 'Commencez par répondre à trois questions : (1) Dans quels langages sont écrits les services qui appellent réellement le modèle ? (2) Avez-vous besoin d\'un support de modèles locaux ? (3) Quelle est votre complexité de validation ?',
        items: [
          '**Utilisez Instructor si :** vous construisez des APIs Python et avez besoin de retries automatiques en cas d\'échec de validation. Meilleur choix polyvalent.',
          '**Utilisez Outlines si :** vous déployez des modèles locaux (llama.cpp, vLLM, MLX) et voulez une conformité de schéma garantie au moment de la génération.',
          '**Utilisez Pydantic AI si :** vous construisez des workflows d\'agents multi-tours avec sécurité de type sur toutes les étapes, ou avez besoin d\'exécution durable.',
          '**Utilisez BAML si :** des services Python, TypeScript et Go doivent partager un schéma, ou si votre modèle n\'a pas de mode JSON natif fiable.',
          '**Utilisez LangChain si :** vous utilisez déjà LangChain ou LangGraph — with_structured_output() est l\'ajout le plus simple.',
          '**Utilisez Marvin si :** vous voulez un seul appel extract ou classify et n\'avez pas besoin de logique de validation propre.',
          '**Utilisez PromptQuorum si :** vous devez tester la cohérence du Structured Output sur GPT, Claude et Gemini avant la production.'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'Ajouter le Structured Output étape par étape',
        numberedItems: [
          '**Définir le schéma de sortie** — Créez un modèle Pydantic (Python), une classe .baml (BAML), une interface TypeScript ou un JSON Schema décrivant les champs, types et contraintes que le LLM doit retourner.',
          '**Choisir une bibliothèque** — Instructor pour les APIs Python, Outlines pour les modèles locaux, Pydantic AI pour les agents, BAML pour les équipes polyglottes, LangChain si déjà utilisé, Marvin pour une extraction en une ligne.',
          '**Installer et envelopper l\'appel LLM** — `pip install instructor` (Python), puis passer votre schéma à l\'appel API. Instructor gère la validation et les retries.',
          '**Tester avec PromptQuorum** — Déployer sur PromptQuorum et exécuter votre prompt contre GPT, Claude et Gemini. Mesurer la conformité du schéma par modèle.',
          '**Affiner le schéma selon les échecs** — Si un modèle échoue la validation, ajouter des exemples à votre prompt ou ajuster les contraintes du schéma. Itérer jusqu\'à ce que tous les modèles réussissent.'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes en Structured Output',
        mistakes: [
          {
            mistake: 'Traiter tout mode JSON comme une garantie de schéma',
            problem: 'Le mode JSON simple (response_format json_object, contrôle JSON Anthropic) garantit seulement que la réponse est du JSON valide, pas qu\'elle respecte vos champs et vos types. Les modes de schéma strict vont plus loin et garantissent la forme, mais aucun ne garantit que les valeurs sont justes : un objet bien formé peut toujours contenir un prix inventé ou une date hallucinée.',
            fix: 'Superposez une validation dans tous les cas : Instructor, Outlines, Pydantic AI ou BAML. Les règles métier appartiennent aux validateurs Pydantic, pas au seul schéma. Tester avec PromptQuorum pour détecter les échecs de conformité par modèle.'
          },
          {
            mistake: 'Concevoir des schémas trop stricts',
            problem: 'Les schémas trop contraints (petites listes d\'énumération, motifs regex très spécifiques) font échouer fréquemment la validation des LLM. Un nombre élevé de retries gaspille des tokens et de l\'argent.',
            fix: 'Utiliser PromptQuorum pour tester la rigueur du schéma sur les modèles. Assouplir les contraintes pour atteindre 95%+ de conformité. Utiliser des champs optionnels plutôt qu\'obligatoires quand c\'est possible.'
          },
          {
            mistake: 'Ne pas tester les différences entre modèles locaux et API',
            problem: 'Outlines sur llama.cpp se comporte différemment qu\'Instructor sur GPT-5.6. Les taux de conformité varient selon le modèle. Construire seulement pour un modèle d\'API de pointe puis déployer sur un petit modèle local cause des échecs en production.',
            fix: 'Tester tous les backends de modèles prévus tôt. Utiliser PromptQuorum pour exécuter le même prompt sur des modèles locaux (vLLM, Ollama) et hébergés (OpenAI, Anthropic, Google).'
          },
          {
            mistake: 'Ignorer l\'impact sur la latence et le coût en tokens',
            problem: 'Le Structured Output avec retries coûte plus de tokens. Instructor relance en cas d\'échec. Le décodage contraint d\'Outlines ajoute un surcoût par token par rapport à la génération libre. Ne pas mesurer le coût par modèle.',
            fix: 'Utiliser le suivi des coûts PromptQuorum. Comparer la latence entre les modèles. Pour les workflows sensibles au budget, préférer Outlines ou BAML (pas de boucle de retry). Pour la précision sur des schémas souples, accepter le coût de retry d\'Instructor.'
          },
          {
            mistake: 'Mélanger les méthodes de validation (aucune cohérence)',
            problem: 'Certaines requêtes utilisent Instructor, d\'autres l\'analyse JSON brute. Certains modèles validés, d\'autres non. Cela conduit à des erreurs incohérentes en production.',
            fix: 'Standardiser sur une approche de validation par base de code. Toutes les requêtes utilisent Instructor, ou toutes utilisent Outlines. La cohérence réduit le temps de débogage par 10.'
          },
          {
            mistake: 'Copier des tutoriels écrits pour une API remplacée depuis',
            problem: 'Les bibliothèques de Structured Output évoluent vite. Marvin a supprimé le décorateur @marvin.fn en 3.0, LangChain a réorganisé sa documentation lors de la réécriture 1.x, et Outlines a changé sa surface d\'imports en 1.0. Le code copié d\'un ancien tutoriel échoue dès l\'installation.',
            fix: 'Épinglez la version majeure sur laquelle vous développez et vérifiez la documentation actuelle pour la surface de l\'API. Préférez le README officiel du dépôt aux billets de blog, et revérifiez à chaque montée de version majeure.'
          }
        ]
      },
      contexteFrancophone: {
        id: 'contexte-francophone',
        title: 'Structured Output et conformité RGPD en France',
        content: 'En France et dans l\'espace francophone européen, l\'utilisation de LLM avec Structured Output est encadrée par le RGPD et les recommandations de la CNIL.',
        items: [
          '**Recommandation CNIL :** Pour le traitement de données sensibles (données médicales, financières, juridiques), la CNIL recommande les solutions d\'inférence locale. Outlines sur des modèles locaux évite tout transfert de données personnelles vers des serveurs tiers.',
          '**RGPD Art. 28 (sous-traitance) :** L\'utilisation d\'APIs LLM tierces pour traiter des données personnelles nécessite un contrat de traitement des données (DPA). Les modèles locaux via Outlines ou llama.cpp contournent cette obligation.',
          '**Minimisation des données (RGPD Art. 5) :** Le Structured Output permet une extraction précise — seuls les champs du schéma défini sont traités. Ce principe soutient la minimisation des données exigée par le RGPD.',
          '**BAML et l\'inférence locale :** BAML fonctionne contre tout endpoint compatible OpenAI ; le même contrat .baml peut donc viser un déploiement vLLM interne, utile quand des services Python et TypeScript partagent un schéma mais que les données ne doivent pas sortir de l\'entreprise.',
          '**Secteurs réglementés :** Banques, assurances, santé — ces secteurs sont soumis à des réglementations supplémentaires. L\'inférence locale avec Outlines est recommandée pour ces cas d\'usage.'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Structured Output et mode JSON](/fr/prompt-engineering/structured-output-and-json-mode) — Comment fonctionne le mode JSON sur les APIs OpenAI, Anthropic et Google ; quand utiliser l\'application de format vs la validation de schéma.',
          '[Injection de prompt et sécurité](/fr/prompt-engineering/prompt-injection-and-security) — Risques lors de l\'acceptation de saisies utilisateur dans des prompts structurés ; stratégies d\'assainissement.',
          '[Évaluer la qualité des prompts](/fr/prompt-engineering/how-to-evaluate-prompt-quality) — Mesurer la précision, la cohérence et le suivi des instructions sur vos schémas Structured Output.',
          '[Tester les prompts sur plusieurs modèles](/fr/prompt-engineering/how-to-test-prompts-across-models) — Exécuter le même ensemble de tests sur GPT, Claude et Gemini ; comparer les taux de réussite.',
          '[Prompt Engineering vs Fine-Tuning](/fr/prompt-engineering/prompt-engineering-vs-fine-tuning) — Quand le prompt structuré suffit vs quand le fine-tuning de modèle est nécessaire.',
          '[Configuration Prompt Engineering pour petites équipes](/fr/prompt-engineering/prompt-engineering-setup-small-teams) — Construire des workflows avec sortie de données structurées pour des équipes de 2 à 15 personnes.',
          '[Prompts pour des données structurées fiables](/fr/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Qu\'est-ce que Structured Output dans les LLMs ?',
            a: 'Structured Output contraint les réponses des LLM à un schéma spécifique — format JSON, champs définis, contraintes de type. Au lieu de texte libre, il retourne des données que votre code peut analyser et valider directement sans gestion d\'erreurs.'
          },
          {
            q: 'Quel outil est le meilleur pour les développeurs Python ?',
            a: 'Instructor est le choix Python le plus populaire. Il utilise des modèles Pydantic pour définir les schémas, gère automatiquement les retries et la validation, et supporte toutes les grandes APIs LLM ainsi que les modèles locaux via Ollama ou vLLM. Pydantic AI convient mieux si vous voulez aussi des conversations d\'agents multi-tours type-safe, et Marvin est le plus rapide si un simple appel extract ou classify suffit.'
          },
          {
            q: 'Puis-je utiliser Structured Output avec des modèles locaux comme Llama ?',
            a: 'Oui. Outlines se spécialise dans le décodage contraint des modèles locaux — il fonctionne avec transformers, llama.cpp, MLX, vLLM et Ollama, et garantit au moment de la génération que la sortie se parse contre votre schéma. Instructor et Pydantic AI supportent aussi Ollama et vLLM si vous les exécutez comme API, et BAML fonctionne contre tout endpoint compatible OpenAI.'
          },
          {
            q: 'Quelle est la différence entre Instructor et Marvin ?',
            a: 'Instructor enveloppe votre propre client LLM et retourne des modèles Pydantic validés avec retries automatiques : vous gardez la main sur l\'appel. Marvin 3.x est bâti sur Pydantic AI et propose plutôt des fonctions en une ligne : marvin.extract, marvin.cast, marvin.classify. Instructor est plus explicite et meilleur pour les validations complexes ; Marvin est plus concis pour une extraction simple. À noter : le décorateur @marvin.fn de Marvin 2 a été supprimé dans Marvin 3.'
          },
          {
            q: 'LangChain supporte-t-il Structured Output ?',
            a: 'Oui. LangChain expose with_structured_output() sur ChatOpenAI, ChatAnthropic, ChatGoogleGenerativeAI et les autres classes de modèles de chat, et les agents construits avec create_agent acceptent un response_format. Depuis la série 1.x, le support natif du Structured Output de chaque fournisseur est lu dans les données de profil du modèle au lieu d\'être codé en dur. Utilisez ceci si vous utilisez déjà LangChain ou LangGraph et souhaitez ajouter l\'application de schéma sans changer de bibliothèque.'
          },
          {
            q: 'Comment tester si Structured Output est fiable ?',
            a: 'Utilisez PromptQuorum pour exécuter le même prompt sur plusieurs modèles et mesurer la conformité du schéma. Les modèles diffèrent — GPT-5.6, Claude Opus 5, Gemini 3.1 Pro — et les petits modèles locaux davantage encore. Testez avant de déployer en production et validez localement avec Instructor ou Pydantic.'
          },
          {
            q: 'Qu\'entend-on par "décodage contraint" ?',
            a: 'Le décodage contraint limite la génération de tokens aux seules valeurs valides selon votre schéma. Outlines le fait en calculant l\'ensemble des tokens suivants valides à chaque étape. Cela garantit que la sortie se parse contre votre schéma sans validation post-génération ni retries, ce qui est plus fiable que le mode JSON simple de l\'API. Il contraint la structure, pas la vérité : les champs seront corrects, les valeurs restent à vérifier.'
          },
          {
            q: 'Qu\'est-ce que BAML et quand l\'utiliser plutôt qu\'Instructor ?',
            a: 'BAML est un langage schema-first : vous écrivez le schéma et le prompt dans un fichier .baml et compilez un client typé pour votre langage. Choisissez-le plutôt qu\'Instructor quand plusieurs langages appellent le même prompt — un worker Python et un frontend TypeScript partageant un contrat — ou quand votre modèle renvoie du JSON presque valide, car le parseur aligné sur le schéma de BAML répare les blocs markdown, les virgules finales et le texte de raisonnement initial au lieu de brûler un retry. Restez sur Instructor si votre stack est purement Python et que vous voulez garder les schémas en simple code Pydantic.'
          },
          {
            q: 'Puis-je utiliser Structured Output sans bibliothèques ?',
            a: 'Techniquement oui — vous pouvez demander au modèle de retourner du JSON et l\'analyser vous-même. Mais l\'analyse échouera sur les sorties malformées que les modèles produisent encore, et rien n\'impose vos noms de champs ni vos types. Les sept outils résolvent ceci par validation avec retries (Instructor, Marvin), application au décodage (Outlines), réparation à l\'analyse (BAML) ou enveloppe des APIs fournisseurs (LangChain, Pydantic AI).'
          },
          {
            q: 'Quel outil a la meilleure documentation ?',
            a: 'LangChain et Pydantic AI ont la documentation la plus complète grâce à leurs ressources d\'entreprise. Celle de BAML est étonnamment bonne pour un projet jeune, parce que le langage doit être enseigné. Instructor a d\'excellents tutoriels malgré la maintenance communautaire. La documentation Outlines est technique mais approfondie. Celle de Marvin est concise — consultez spécifiquement les pages 3.x, car d\'anciens contenus Marvin 2 circulent encore.'
          },
          {
            q: 'Ai-je besoin des sept outils ou juste d\'un ?',
            a: 'Commencez par un. Les développeurs Python devraient essayer Instructor ou Pydantic AI. Les équipes avec modèles locaux devraient essayer Outlines. Les équipes polyglottes devraient essayer BAML. Les utilisateurs de LangChain devraient essayer with_structured_output(). Utilisez PromptQuorum pour valider la cohérence sur tous les modèles.'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Dépôt GitHub Instructor](https://github.com/567-labs/instructor) — Dépôt officiel et documentation de la bibliothèque Instructor',
          '[Dépôt GitHub Outlines](https://github.com/dottxt-ai/outlines) — Décodage contraint pour la conformité de schéma garantie',
          '[Documentation Pydantic AI](https://pydantic.dev/docs/ai/overview/) — Framework d\'agents type-safe avec Structured Output',
          '[Guide Structured Output LangChain](https://docs.langchain.com/oss/python/langchain/structured-output) — API Structured Output unifiée LangChain',
          '[Documentation BAML](https://docs.boundaryml.com/home) — Langage de prompts schema-first et schema-aligned parsing',
          '[Dépôt GitHub Marvin](https://github.com/PrefectHQ/marvin) — Bibliothèque d\'extraction orientée tâches bâtie sur Pydantic AI'
        ]
      }
    }
  },
  ja: {
    theme: 'ツール＆プラットフォーム',
    heroImage: '/images/best-tools-structured-output-overview-hero-ja.webp',
    title: 'Structured Output対応ツール2026：用途別ランキング',
    seoTitle: '構造化出力・JSONモードのベストツール比較（2026年）',
    metaDescription: '構造化出力ツール7選を比較：Instructor、Outlines、Pydantic AI、BAML、LangChain、Marvin、PromptQuorum。ライセンス・スキーマ形式・ローカルモデル対応。',
    ogTitle: '構造化出力・JSONモードのベストツール比較（2026年）',
    ogDescription: 'LLM構造化出力ツール7選：Instructorのリトライ、Outlinesの制約デコード、BAMLの多言語対応。PromptQuorumで一貫性テスト。',
    twitterTitle: '構造化出力・JSONモードのベストツール比較（2026年）',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin — 構造化出力ツールの選び方。2026年比較ガイド。',
    intro: '**Structured Output 2026年の主流7つのツール：Instructor（Pydantic抽出）、Outlines（制約付きデコーディング）、Pydantic AI（型安全エージェント）、BAML（スキーマファーストのプロンプトファイル）、LangChain（統一API）、Marvin（タスクベース抽出）、PromptQuorum（クロスモデルテスト）。各ツールは異なるボトルネックを解きます。**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — ライブラリのバージョン、ライセンス、API、ドキュメントURLを公式リポジトリ・PyPI・ベンダードキュメントに対して再検証済み',
    readTime: '12分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'Structured OutputツールLLM用',
    aboutTopics: ['Structured Outputツール', 'LLM検証ライブラリ', 'スキーマ強制'],
    audience: 'Structured Output要件を持つ本番LLMアプリケーションを構築する開発者',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: '各ツールが解決する問題', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor：Pydantic抽出', anchor: '#instructor' },
      { label: 'Outlines：Constrained Decoding', anchor: '#outlines' },
      { label: 'Pydantic AI：型安全エージェント', anchor: '#pydantic-ai' },
      { label: 'BAML：スキーマファーストのプロンプトファイル', anchor: '#baml' },
      { label: 'LangChain：統一API', anchor: '#langchain-structured-output' },
      { label: 'Marvin：タスクベース抽出', anchor: '#marvin' },
      { label: 'PromptQuorum：クロスモデルテスト', anchor: '#promptquorum' },
      { label: '並列比較', anchor: '#side-by-side-comparison' },
      { label: '適切なツールの選び方', anchor: '#how-to-choose' },
      { label: 'Structured Outputを段階的に導入する方法', anchor: '#how-to-add-structured-output' },
      { label: 'Structured Outputでよくある間違い', anchor: '#common-mistakes' },
      { label: '日本企業向けのStructured Output導入ガイド', anchor: '#nihon-kigyo' },
      { label: 'よくある質問', anchor: '#faq' },
    ],
    leadAnswerBlock: '**モデルをどこで動かすか、そしてチームがどの言語で実装するかで選びます：リトライと型安全性が必要なPython APIワークフローにはInstructorとPydantic AI、ローカルモデルでスキーマ準拠を保証したいならOutlines、Python・TypeScript・Goのサービスが同じスキーマを共有するならBAML、すでにチェーンやエージェントを使っているチームにはLangChain、extractやclassifyを一行で済ませたいならMarvin、本番投入前にGPT・Claude・Geminiの一貫性を検証するならPromptQuorumです。**',
    quickFacts: [
      'InstructorはMITライセンスで、Python・TypeScript・Ruby・Go・Elixir・Rustの6つの公式実装を提供',
      'Outlines 1.xは生成時にトークンを制約し、現在はローカルバックエンドだけでなくホスト型APIも扱える',
      'Pydantic AIは3つの出力モードを持つ：ネイティブ構造化出力、ツール呼び出し、プロンプトによるJSON',
      'BAMLは1つの.bamlスキーマファイルから型付きクライアントを生成し、壊れた出力をリトライせずに修復する',
      'LangChain 1.xは各Providerのネイティブ構造化出力対応をモデルプロファイルから読み取る',
      'Marvin 3.xはPydantic AIの上に構築され、extract・cast・classify・generateを提供',
      'PromptQuorumは同じプロンプトを25以上のモデルでテストし一貫性を測定'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Structured Output対応ツール2026：用途別ランキング',
      description: '7つのLLM Structured Outputライブラリの比較：Instructor、Outlines、Pydantic AI、BAML、LangChain、Marvin、PromptQuorum。スキーマ強制、言語サポート、ローカルモデル互換性、ライセンスでランク付け。',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/ja/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'ja',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Structured Outputライブラリ' },
        { '@type': 'Thing', name: 'スキーマ検証' },
        { '@type': 'Thing', name: 'LLM APIラッパー' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'LLM Structured Outputのベストツール（2026年）',
      description: '言語モデルからの構造化出力を強制する7つの主要ライブラリ。',
      numberOfItems: 7,
      inLanguage: 'ja',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: 'あらゆるLLMからのPydanticベース抽出を自動リトライ付きで実現。MITライセンス、6言語の公式実装。' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: 'ローカルモデルのスキーマ準拠を保証する制約付きデコードライブラリ。Apache 2.0オープンソース。' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: '3つの構造化出力モードと永続実行連携を備えた型安全なエージェントフレームワーク。' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: '型付きクライアントをコンパイルし、schema-aligned parsingで壊れたモデル出力を修復するスキーマファーストのプロンプト言語。' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'OpenAI、Anthropic、Google、ローカルモデルの統一API層。' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'Pydantic AIの上に構築されたタスク中心ライブラリ。extract・cast・classify・generateを提供。' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'GPT、Claude、Gemini全体でStructured Outputの一貫性を検証するクロスモデルテストプラットフォーム。' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: 'PythonのAPIにはInstructorをリトライ付きで使用してください。ローカルモデルのスキーマ準拠保証にはOutlinesを。型安全なマルチターンエージェントにはPydantic AIを。Python・TypeScript・Goのサービスが1つのスキーマを共有する場合はBAMLを。LangChainはすでにそのエコシステムにいる場合に。Marvinはextractやclassifyを一行で済ませたい場合に。PromptQuorumは本番前に全モデルでStructured Outputの一貫性をテストするために使用してください。'
          }
        ],
        items: [
          '**Instructor** が最も人気のあるPython選択肢 — Pydanticスキーマ、自動リトライ、TypeScript・Ruby・Go・Elixir・Rustの公式移植版',
          '**Outlines** はConstrained Decodingによりローカルモデルのスキーマ準拠を保証 — 構造面の幻覚リスクはゼロ',
          '**Pydantic AI** はマルチターンエージェント会話に型安全性を追加し、ネイティブ構造化出力→ツール呼び出し→プロンプトJSONの順にフォールバック',
          '**BAML** はスキーマとプロンプトをバージョン管理された.bamlファイルに置き、型付きクライアントを生成 — 多言語チームが1つの契約を共有できる',
          '**LangChainのwith_structured_output()** はOpenAI、Anthropic、Google APIにわたるStructured Outputを統一',
          '**Marvin 3.x** はPydantic AIの上に構築され、抽出をextractまたはclassifyの1回の呼び出しに短縮',
          '**PromptQuorum** は本番デプロイ前に全モデルのStructured Output一貫性をテスト'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: '各ツールが解決する問題',
        snippets: [
          { type: 'in-one-sentence', text: '構造化出力のツールは、生成時にスキーマを強制する、生成後に結果を検証する、壊れた出力を修復するという三つの異なる問題を解決しますが、多くの構成で必要になるのは最初の二つだけです。' },
          { type: 'in-plain-terms', text: '機能一覧で選ばないでください。実際に起きている不具合はどれかを問うべきです。形式を無視されるのか、形式は守られるが値が誤っているのか、そもそもパースできない JSON が返るのか。それぞれ対処法は異なります。' },
        ],
        content: '**Structured Outputには3つの相互依存する問題の解決が必要です：スキーマ定義、API強制、バリデーション。** 各ツールは異なるアプローチで解決します。InstructorはPythonでリトライを用いて3つすべてを処理。OutlinesはConstrained Decodingでバリデーションステップを排除。Pydantic AIはエージェントに型安全性を追加。BAMLはスキーマをコンパイル可能なファイルに移し、不完全な出力を修復。LangChainはProvider APIをラップ。Marvinは開発速度を優先。PromptQuorumは全モデルの一貫性を検証します。',
        columns: ['問題', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { '問題': 'スキーマ定義', 'Instructor': 'Pydanticモデル', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Pydanticモデル', 'BAML': '.bamlクラスファイル', 'LangChain': 'ツール定義', 'Marvin': 'Pythonの型ヒント' },
          { '問題': 'API呼び出し時の強制', 'Instructor': 'リトライ + バリデーション', 'Outlines': 'トークンレベル制約', 'Pydantic AI': 'ネイティブ / ツール / プロンプト', 'BAML': '生成プロンプト + パーサー', 'LangChain': 'Provider JSONモード', 'Marvin': 'Pydantic AIの出力型' },
          { '問題': 'レスポンス検証', 'Instructor': '自動', 'Outlines': '生成時に保証', 'Pydantic AI': '型検証済み', 'BAML': 'Schema-aligned parsing', 'LangChain': '手動', 'Marvin': '自動' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor：Pydantic抽出',
        content: '**InstructorはStructured Outputライブラリとして最も広く採用されています。あらゆるLLM API — OpenAI GPT-5.6、Claude Opus 5、Gemini 3.1 Pro、Ollama、vLLM — をラップし、生テキストではなく検証済みPydanticモデルを返します。** バリデーション失敗時のリトライを自動処理し、追加のエラー処理なしで本番対応です。',
        items: [
          '主要Providerすべてに対応（OpenAI、Anthropic、Google、Groq、Mistral）、OllamaやvLLM経由のローカルモデルにも対応',
          'Pydantic v2スキーマ：型ヒント、バリデーションルール、スキーマに埋め込まれたdocstring説明',
          'バリデーション失敗時のバックオフ付き自動リトライ — 手動エラー処理不要',
          '6つの公式実装：Python、TypeScript、Ruby、Go、Elixir、Rust',
          'MITライセンスのオープンソース、活発にメンテナンス中、現在は1.x系',
          '料金：無料（LLM APIコスト以外の追加コストなし）'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines：Constrained Decoding',
        content: '**OutlinesはConstrained Decodingによりトークン生成時にスキーマ準拠を強制します。トークンを生成してから検証するのではなく、各ステップでスキーマに一致する有効なトークンのみに制限します。** 出力がスキーマに対して必ずパースできることが保証され、構造面の幻覚リスクはゼロです。これがローカルモデルでの定番選択となっている理由です。',
        items: [
          'ローカルバックエンド：transformers、llama.cpp、MLX、あらゆるHugging Faceモデル',
          'サーバーバックエンド：vLLM、Ollama、NVIDIA NIM',
          'ホスト型API（OpenAI、Gemini）にも対応 — 同じコードでローカルとクラウドを行き来できる',
          'スキーマはPydanticモデル、JSON Schema、正規表現パターン、リテラル選択、文脈自由文法で指定',
          '構造面の準拠を保証 — 後処理バリデーションやリトライ不要',
          'Apache 2.0オープンソース、現在は1.x系、高速化のためのRustコア（outlines-core）を採用'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI：型安全エージェント',
        content: '**Pydantic AIはPydantic本体を開発するチームによるエージェントフレームワークです。Pydanticモデルとマルチターンエージェント会話の一級サポートを組み合わせ、各ターンでStructured Outputを強制しながらエージェントループに完全な型安全性を追加します。** すでに2.x系に到達し、実験ではなく本番で使われています。',
        items: [
          'Pydantic v2型システム — 完全なIDEサポートと、エージェントの戻り値に対する静的型チェック',
          '3つの出力モード：Providerネイティブの構造化出力、ツール呼び出し、フォールバックとしてのプロンプトJSON',
          '高スループットアプリケーション向けAsync-firstデザイン',
          'OpenAI、Anthropic、Google、Bedrock、Azure AI Foundry、Groq、Mistral、xAI、Ollamaをサポート',
          '永続実行の連携（Temporal、DBOS、Prefect）により長時間稼働のエージェントが再起動を乗り越えられる',
          'ツール呼び出し内蔵 — 型ヒント付きPython関数としてツールを定義',
          'MITライセンスで無料（LLM APIコスト以外の追加コストなし）'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML：スキーマファーストのプロンプトファイル',
        content: '**BAMLはPythonライブラリ群とは逆のアプローチを取ります。スキーマとプロンプトはバージョン管理された.bamlファイルに置かれ、コンパイラが各言語向けの型付きクライアントを生成します。** スキーマ整合パーサーは、モデルが実際に犯す誤り — JSONを囲むマークダウンのコードフェンス、末尾のカンマ、引用符なしのキー、オブジェクトの前に置かれた推論テキスト — をエラーにせず修復するため、リトライを浪費しません。',
        items: [
          'スキーマとプロンプトを.bamlファイルにまとめ、他のソースコードと同じようにバージョン管理・レビューできる',
          'PythonとTypeScript向けにネイティブな型付きクライアントを生成、加えてGo・Java・Ruby・PHP・Rust・C#は生成されたOpenAPIクライアント経由で利用可能',
          'schema-aligned parsing（SAP）が不完全な出力から有効なオブジェクトを復元し、失敗させない',
          'ネイティブのtool-useやJSONモードを一切持たないモデルでも動作',
          '型安全なストリーミング — 部分オブジェクトが型付きで届き、生成中にフィールドを描画できる',
          'Apache 2.0オープンソース。ホスト型の可観測性製品Boundary Studioは別途有料'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain：統一API',
        content: '**LangChainはすべての主要チャットモデルにwith_structured_output()を提供し、OpenAI、Anthropic、Google、ローカルモデルにわたるStructured Outputを単一のメソッドで統一します。** 1.x系での書き直し以降、各Providerのネイティブ構造化出力対応をハードコードせずモデルプロファイルから読み取るようになり、create_agentで作ったエージェントはresponse_formatを直接受け取れます。',
        items: [
          '統一API：.with_structured_output()メソッド1つが全Providerで機能',
          'LangChainツール定義をProvider固有のスキーマ形式に自動変換',
          'create_agentで作成したエージェントは最終回答用にresponse_formatを受け取る',
          '1.1系以降、ネイティブ構造化出力の対応可否はProviderのプロファイルデータからモデルごとに読み取られる',
          'Pydanticモデル、TypedDict、dataclass、生のJSON Schemaをサポート',
          'LangChainまたはLangGraphに既に投資しているチームに最適'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin：タスクベース抽出',
        content: '**Marvin 3.xは非構造化テキストから型付きPythonオブジェクトへの最短ルートです。Pydantic AIの上に構築されているため、同じProviderカバレッジとバリデーションをはるかに少ないコードで得られます。** 注意点として、Marvin 2のデコレータ中心APIは廃止されました。@marvin.fnは3.0で削除され、トップレベルのヘルパー関数とタスク中心のエージェントエンジンに置き換えられています。',
        items: [
          '1行のヘルパー：marvin.extract、marvin.cast、marvin.classify、marvin.generate',
          'Pydantic AIの上に構築 — Providerサポートと出力バリデーションは再実装ではなく継承',
          '多段階の処理向けタスク中心エンジン：marvin.run、marvin.Task、marvin.Agent、marvin.Thread',
          'Pythonの型ヒントがスキーマになる — 抽出と分類に必要なボイラープレートは最小限',
          '移行時の注意：Marvin 2の@marvin.fnデコレータは存在しないため、該当箇所は書き直しが必要',
          'Apache 2.0オープンソース、Prefectがメンテナンス、無料で利用可能'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum：クロスモデルテスト',
        content: '**PromptQuorum自体はStructured Outputライブラリではなく、モデル間のStructured Output一貫性を検証するためのテストプラットフォームです。** GPT-5.6、Claude Opus 5、Gemini 3.1 Pro、20以上の他のモデルに対して同じプロンプトを同時に実行します。モデルごとのスキーマ準拠率、レイテンシ、コストを測定します。',
        items: [
          '単一API呼び出しでマルチモデルディスパッチ — 25以上のモデルに対してプロンプトをテスト',
          'Structured Output準拠メトリクス — 合格率、レイテンシ、モデルごとのコスト',
          'スキーマで幻覚するモデルを特定 — 信頼性の低いモデルへのデプロイを回避',
          'コンセンサスモード — 独立したモデル実行間の一致を発見',
          'Instructor、Outlines、Pydantic AI、BAML、LangChain、または生LLM APIと連携',
          '無料ティア利用可能、高ボリュームテスト向けエンタープライズ料金'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: '並列比較',
        columns: ['ツール', '最適用途', 'スキーマ形式', '言語', 'ローカルモデル', 'ライセンス', '学習コスト'],
        rows: [
          { 'ツール': '[Instructor](https://python.useinstructor.com)', '最適用途': 'Python API + リトライ', 'スキーマ形式': 'Pydanticモデル', '言語': 'Python, TS, Ruby, Go, Elixir, Rust', 'ローカルモデル': 'あり（Ollama、vLLM）', 'ライセンス': 'MIT、無料', '学習コスト': '低' },
          { 'ツール': '[Outlines](https://dottxt.ai)', '最適用途': 'ローカルモデルデプロイ', 'スキーマ形式': 'Pydantic, JSON Schema, 正規表現, CFG', '言語': 'Python', 'ローカルモデル': 'あり（ネイティブ）', 'ライセンス': 'Apache 2.0、無料', '学習コスト': '中' },
          { 'ツール': '[Pydantic AI](https://ai.pydantic.dev)', '最適用途': '型安全エージェント', 'スキーマ形式': 'Pydanticモデル', '言語': 'Python', 'ローカルモデル': 'あり（Ollama）', 'ライセンス': 'MIT、無料', '学習コスト': '低' },
          { 'ツール': '[BAML](https://boundaryml.com)', '最適用途': '多言語チーム、出力が不安定なモデル', 'スキーマ形式': '.bamlクラスファイル', '言語': 'Python, TS + OpenAPI経由で6言語', 'ローカルモデル': 'あり（OpenAI互換）', 'ライセンス': 'Apache 2.0、可観測性は有料', '学習コスト': '中' },
          { 'ツール': '[LangChain](https://langchain.com)', '最適用途': 'チェーン + エージェント', 'スキーマ形式': 'ツール定義', '言語': 'Python, JS', 'ローカルモデル': 'あり', 'ライセンス': 'MIT、無料', '学習コスト': '中' },
          { 'ツール': '[Marvin](https://github.com/PrefectHQ/marvin)', '最適用途': '高速なextractとclassify', 'スキーマ形式': '型ヒント', '言語': 'Python', 'ローカルモデル': 'あり', 'ライセンス': 'Apache 2.0、無料', '学習コスト': '非常に低' },
          { 'ツール': '[PromptQuorum](https://www.promptquorum.com)', '最適用途': 'マルチモデルテスト', 'スキーマ形式': 'API非依存', '言語': 'APIファースト', 'ローカルモデル': 'OpenAIプロキシ経由', 'ライセンス': '無料ティア + エンタープライズ', '学習コスト': '低' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: '適切なツールの選び方',
        content: '3つの質問から始めてください：(1) 実際にモデルを呼び出すサービスはどの言語で書かれていますか？ (2) ローカルモデルサポートが必要ですか？ (3) バリデーションの複雑さはどのくらいですか？',
        items: [
          '**Instructorを使用する場合：** PythonのAPIを構築し、バリデーション失敗時の自動リトライが必要な場合。最良の汎用選択肢。',
          '**Outlinesを使用する場合：** ローカルモデル（llama.cpp、vLLM、MLX）をデプロイし、生成時にスキーマ準拠を保証したい場合。',
          '**Pydantic AIを使用する場合：** すべてのステップにわたる型安全性でマルチターンエージェントワークフローを構築する場合、または永続実行が必要な場合。',
          '**BAMLを使用する場合：** Python・TypeScript・Goのサービスが1つのスキーマを共有する必要がある場合、またはモデルに信頼できるネイティブJSONモードがない場合。',
          '**LangChainを使用する場合：** すでにLangChainやLangGraphを使用している場合 — with_structured_output()が最も簡単な追加。',
          '**Marvinを使用する場合：** extractやclassifyを1回呼ぶだけで済み、独自のバリデーションロジックが不要な場合。',
          '**PromptQuorumを使用する場合：** 本番前にGPT、Claude、Geminiにわたるstructured output一貫性をテストする必要がある場合。'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'Structured Outputを段階的に導入する方法',
        numberedItems: [
          '**出力スキーマを定義する** — LLMに返してほしいフィールド、型、制約を記述したPydanticモデル（Python）、.bamlクラス（BAML）、TypeScriptインターフェース、またはJSON Schemaを作成します。',
          '**ライブラリを選択する** — Python APIにはInstructor、ローカルモデルにはOutlines、エージェントにはPydantic AI、多言語チームにはBAML、すでに使用中ならLangChain、1行で抽出したいならMarvin。',
          '**インストールしてLLM呼び出しをラップする** — `pip install instructor`（Python）、次にスキーマをAPI呼び出しに渡します。Instructorがバリデーションとリトライを処理します。',
          '**PromptQuorumでテストする** — PromptQuorumにデプロイし、GPT、Claude、Geminiに対してプロンプトを実行します。モデルごとのスキーマ準拠率を測定します。',
          '**失敗に基づいてスキーマを改善する** — モデルがバリデーションに失敗した場合、プロンプトに例を追加するかスキーマ制約を調整します。すべてのモデルが合格するまで反復します。'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Structured Outputでよくある間違い',
        mistakes: [
          {
            mistake: 'どのJSONモードもスキーマの保証だと思い込む',
            problem: '単純なJSONモード（response_format json_object、Anthropic JSON制御）は応答が有効なJSONであることしか保証せず、あなたのフィールドや型に一致することは保証しません。厳格なスキーマモードはさらに踏み込んで形を保証しますが、いずれも値の正しさは保証しません。整った形のオブジェクトでも、でっち上げの価格や幻覚した日付を含みうるのです。',
            fix: 'いずれの場合もバリデーションを重ねてください：Instructor、Outlines、Pydantic AI、またはBAML。業務ルールはスキーマだけでなくPydanticのバリデータに書きます。PromptQuorumでモデルごとの準拠失敗を検出してください。'
          },
          {
            mistake: '厳格すぎるスキーマを設計する',
            problem: '過度に制約されたスキーマ（小さなenum リスト、非常に具体的な正規表現パターン）はLLMがバリデーションに頻繁に失敗する原因となります。高いリトライ回数はトークンとお金を無駄にします。',
            fix: 'PromptQuorumを使用してモデル間のスキーマ厳格さをテストします。95%以上の準拠率を達成するために制約を緩和します。可能な場合は必須フィールドの代わりにオプションフィールドを使用します。'
          },
          {
            mistake: 'ローカルとAPIモデルの違いをテストしない',
            problem: 'llama.cpp上のOutlinesはGPT-5.6上のInstructorとは異なる動作をします。スキーマ準拠率はモデルによって異なります。フロンティアのAPIモデルだけで構築してから小さなローカルモデルにデプロイすると、本番障害が発生します。',
            fix: 'すべての予定モデルバックエンドを早期にテストします。PromptQuorumを使用して、ローカル（vLLM、Ollama）とホスト型（OpenAI、Anthropic、Google）のモデルで同じプロンプトを実行します。'
          },
          {
            mistake: 'レイテンシとトークンコストの影響を無視する',
            problem: 'リトライ付きのStructured Outputはより多くのトークンを消費します。Instructorは失敗時にリトライします。OutlinesのConstrained Decodingは自由生成に比べトークンあたりのオーバーヘッドが増えます。モデルごとのコストが測定されていません。',
            fix: 'PromptQuorumのコスト追跡を使用します。モデル間のレイテンシを比較します。予算重視のワークフローにはOutlinesまたはBAML（リトライループなし）を優先します。柔軟なスキーマで精度を優先するならInstructorのリトライコストを受け入れます。'
          },
          {
            mistake: 'バリデーション方法を混在させる（一貫性なし）',
            problem: '一部のリクエストはInstructorを使用し、他は生のJSON解析を使用します。一部のモデルはバリデーション済み、他はそうでありません。これにより本番で一貫性のないエラーが発生します。',
            fix: 'コードベースごとに1つのバリデーションアプローチを標準化します。すべてのリクエストがInstructorを使用するか、すべてOutlinesを使用します。一貫性によりデバッグ時間が10倍削減されます。'
          },
          {
            mistake: '置き換えられた古いAPI向けのチュートリアルをコピーする',
            problem: 'Structured Outputライブラリの変化は速いです。Marvinは3.0で@marvin.fnデコレータを削除し、LangChainは1.x系の書き直しでドキュメントを再編成し、Outlinesは1.0でimportの構成を変えました。古いチュートリアルからコピーしたコードはインストール段階で失敗します。',
            fix: '開発対象のメジャーバージョンを固定し、APIの仕様は最新のドキュメントで確認してください。ブログ記事よりも公式リポジトリのREADMEを優先し、メジャーバージョンを上げるたびに再確認します。'
          }
        ]
      },
      nihonKigyo: {
        id: 'nihon-kigyo',
        title: '日本企業向けのStructured Output導入ガイド',
        content: '日本のエンタープライズ環境でLLM Structured Outputを導入する際は、METIのAIガバナンスガイドラインと個人情報保護法（APPI）への準拠が重要です。',
        items: [
          '**METI AIガバナンスガイドライン2024：** 経済産業省は、企業がAIシステムを導入する際にリスク管理体制を整備することを推奨しています。Structured OutputによりLLMの出力を予測可能な形式に制限することで、AIガバナンスの要件を満たしやすくなります。',
          '**個人情報保護法（APPI）：** 個人情報を含むデータをLLM APIに送信する場合、第三者提供規制への対応が必要です。Outlinesとローカルモデルによりデータをオンプレミスまたはプライベートクラウドに保持できます。',
          '**金融・医療・法務セクター：** これらの規制が厳しい業界では、機密データ処理にローカルモデルとOutlinesの組み合わせが推奨されます。PromptQuorumで複数モデルの一貫性を検証後、本番環境に移行できます。',
          '**BAMLとオンプレミス運用：** BAMLはOpenAI互換エンドポイントであれば動作するため、同じ.baml契約を社内のvLLMデプロイに向けられます。PythonとTypeScriptのサービスがスキーマを共有しつつ、データを社外に出したくない場合に有効です。',
          '**アジア太平洋地域展開：** 日本のほか、シンガポール、韓国、オーストラリアへのデプロイでは各国のデータ保護法を確認してください。ローカルモデルによるデータ在地化は多くの規制要件を満たします。'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[Structured OutputとJSONモード](/ja/prompt-engineering/structured-output-and-json-mode) — OpenAI、Anthropic、Google APIでのJSONモードの仕組み；フォーマット強制とスキーマバリデーションの使い分け。',
          '[プロンプトインジェクションとセキュリティ](/ja/prompt-engineering/prompt-injection-and-security) — 構造化プロンプトでユーザー入力を受け入れる際のリスク；サニタイズ戦略。',
          '[プロンプト品質の評価方法](/ja/prompt-engineering/how-to-evaluate-prompt-quality) — Structured Outputスキーマの精度、一貫性、指示遵守を測定。',
          '[モデル間でプロンプトをテストする方法](/ja/prompt-engineering/how-to-test-prompts-across-models) — GPT、Claude、Geminiで同じテストセットを実行；合格率を比較。',
          '[プロンプトエンジニアリングとファインチューニング](/ja/prompt-engineering/prompt-engineering-vs-fine-tuning) — 構造化プロンプティングで十分な場合とモデルファインチューニングが必要な場合。',
          '[小チーム向けプロンプトエンジニアリング設定](/ja/prompt-engineering/prompt-engineering-setup-small-teams) — 2〜15人のチーム向け構造化データ出力ワークフロー構築。',
          '[信頼性の高い構造化データのプロンプト](/ja/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'LLMのStructured Outputとは何ですか？',
            a: 'Structured OutputはLLMの応答を特定のスキーマ（JSON形式、定義されたフィールド、型制約）に制限します。自由形式のテキストの代わりに、コードが直接解析・検証できるデータを返します。'
          },
          {
            q: 'Python開発者に最適なツールは何ですか？',
            a: 'Instructorが最も人気のあるPython選択肢です。Pydanticモデルでスキーマを定義し、リトライとバリデーションを自動的に処理し、主要なLLM APIすべてとOllamaやvLLM経由のローカルモデルをサポートします。型安全なマルチターンエージェント会話も必要ならPydantic AIが適し、extractやclassifyを1行で済ませたいだけならMarvinが最速です。'
          },
          {
            q: 'LlamaなどのローカルモデルでStructured Outputを使用できますか？',
            a: 'はい。OutlinesはローカルモデルのConstrained Decodingに特化しています — transformers、llama.cpp、MLX、vLLM、Ollamaで動作し、生成時に出力がスキーマに対してパースできることを保証します。InstructorとPydantic AIもOllamaやvLLMをAPIとして実行する場合にサポートし、BAMLはOpenAI互換エンドポイントであれば動作します。'
          },
          {
            q: 'InstructorとMarvinの違いは何ですか？',
            a: 'Instructorは自分のLLMクライアントをラップし、自動リトライ付きで検証済みPydanticモデルを返すため、呼び出しを自分で制御できます。Marvin 3.xはPydantic AIの上に構築され、marvin.extract、marvin.cast、marvin.classifyといった1行のヘルパーを提供します。Instructorはより明示的で複雑なバリデーションに向き、Marvinは単純な抽出により簡潔です。なお、Marvin 2の@marvin.fnデコレータはMarvin 3で削除されました。'
          },
          {
            q: 'LangChainはStructured Outputをサポートしますか？',
            a: 'はい。LangChainはChatOpenAI、ChatAnthropic、ChatGoogleGenerativeAIなどのチャットモデルクラスにwith_structured_output()を提供し、create_agentで構築したエージェントはresponse_formatを受け取れます。1.x系以降、各Providerのネイティブ構造化出力対応はハードコードではなくモデルプロファイルのデータから読み取られます。すでにLangChainやLangGraphを使用していて、ライブラリを切り替えずにスキーマ強制を追加したい場合に使用してください。'
          },
          {
            q: 'Structured Outputが信頼性を高いかテストするにはどうすればよいですか？',
            a: 'PromptQuorumを使用して、複数のモデルで同じプロンプトを実行し、スキーマ準拠を測定します。GPT-5.6、Claude Opus 5、Gemini 3.1 Proといったモデルごとに信頼性は異なり、小さなローカルモデルではさらに差が開きます。本番デプロイ前にテストし、ローカルではInstructorやPydanticで検証してください。'
          },
          {
            q: '「Constrained Decoding」とはどういう意味ですか？',
            a: 'Constrained Decodingはトークン生成をスキーマに従う有効な値のみに制限します。Outlinesは各ステップで有効な次のトークンセットを計算します。これにより、後処理バリデーションやリトライなしに出力がスキーマに対してパースできることが保証され、単純なAPIレベルのJSONモードより信頼性が高くなります。制約されるのは構造であって真実ではありません。フィールドは正しくなりますが、値は依然として確認が必要です。'
          },
          {
            q: 'BAMLとは何ですか。Instructorの代わりにいつ使うべきですか？',
            a: 'BAMLはスキーマファーストの言語です。スキーマとプロンプトを.bamlファイルに書き、各言語向けの型付きクライアントをコンパイルします。同じプロンプトを複数の言語から呼ぶ場合（PythonのワーカーとフロントエンドのTypeScriptが1つの契約を共有するケース）や、モデルがほぼ有効なJSONを返す場合にInstructorより適しています。BAMLのスキーマ整合パーサーはマークダウンのコードフェンス、末尾のカンマ、先頭の推論テキストをリトライせずに修復するためです。スタックがPythonだけで、スキーマを通常のPydanticコードとして保ちたいならInstructorのままで構いません。'
          },
          {
            q: 'ライブラリなしでStructured Outputを使用できますか？',
            a: '技術的には可能ですが、モデルが依然として生成する壊れた出力で解析が失敗し、フィールド名や型を強制する仕組みもありません。7つのツールはそれぞれ、リトライによるバリデーション（Instructor、Marvin）、デコード時の強制（Outlines）、解析時の修復（BAML）、Provider APIのラップ（LangChain、Pydantic AI）によってこれを解決します。'
          },
          {
            q: 'どのツールが最も優れたドキュメントを持っていますか？',
            a: 'LangChainとPydantic AIは企業支援のため最も充実したドキュメントを持っています。BAMLのドキュメントは、言語そのものを教える必要があるため若いプロジェクトとしては異例に良質です。Instructorはコミュニティ保守ながら優れたチュートリアルと例があります。Outlinesのドキュメントは技術的ですが徹底しています。Marvinのドキュメントは簡潔です — Marvin 2の古い情報がまだ出回っているため、3.x系のページを狙って参照してください。'
          },
          {
            q: '7つのツールすべてが必要ですか、それとも1つだけでよいですか？',
            a: '1つから始めてください。Python開発者はInstructorかPydantic AIを試してください。ローカルモデルチームはOutlinesを試してください。多言語チームはBAMLを試してください。LangChainユーザーはwith_structured_output()を試してください。PromptQuorumで全モデルの一貫性を検証してください。'
          },
          {
            q: 'METIのAIガバナンスガイドラインとStructured Outputの関係は？',
            a: 'METIの2024年AIガバナンスガイドラインは、AIシステムの出力管理と監査可能性を求めています。Structured Outputはこれらの要件を満たす具体的な技術手段です。スキーマ定義により出力を予測可能な形式に制限し、PromptQuorumで準拠率を記録・監査できます。'
          },
          {
            q: '日本のエンタープライズ環境でのStructured Output導入の推奨手順は？',
            a: 'まずOutlinesとローカルモデルで概念実証を構築し、機密データがオンプレミスに留まることを確認します。次にPromptQuorumで複数モデルの準拠率をテストし、最も適したモデルを選択します。本番環境ではInstructorまたはPydantic AIで型安全な実装を行い、継続的なモニタリングにPromptQuorumを活用してください。'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Instructor GitHubリポジトリ](https://github.com/567-labs/instructor) — Instructorライブラリの公式リポジトリとドキュメント',
          '[Outlines GitHubリポジトリ](https://github.com/dottxt-ai/outlines) — スキーマ準拠保証のためのConstrained Decoding',
          '[Pydantic AIドキュメント](https://pydantic.dev/docs/ai/overview/) — Structured Output付き型安全エージェントフレームワーク',
          '[LangChain Structured Outputガイド](https://docs.langchain.com/oss/python/langchain/structured-output) — LangChain統一Structured Output API',
          '[BAMLドキュメント](https://docs.boundaryml.com/home) — スキーマファーストのプロンプト言語とschema-aligned parsing',
          '[Marvin GitHubリポジトリ](https://github.com/PrefectHQ/marvin) — Pydantic AIの上に構築されたタスク中心の抽出ライブラリ'
        ]
      }
    }
  },
  zh: {
    theme: '工具与平台',
    heroImage: '/images/best-tools-structured-output-overview-hero-zh.webp',
    title: '2026年Structured Output最佳工具：用途排名',
    seoTitle: '结构化输出与JSON模式最佳工具对比（2026）',
    metaDescription: '7款结构化输出工具对比：Instructor、Outlines、Pydantic AI、BAML、LangChain、Marvin和PromptQuorum。含许可证、模式格式与本地模型支持。',
    ogTitle: '结构化输出与JSON模式最佳工具对比（2026）',
    ogDescription: '7款LLM结构化输出工具：Instructor重试机制、Outlines约束解码、BAML多语言客户端。用PromptQuorum测试一致性。',
    twitterTitle: '结构化输出与JSON模式最佳工具对比（2026）',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin——哪款结构化输出工具适合你？2026年对比指南。',
    intro: '**2026年Structured Output的7大工具：Instructor（Pydantic提取）、Outlines（约束解码）、Pydantic AI（类型安全代理）、BAML（模式优先的提示词文件）、LangChain（统一API）、Marvin（任务式提取）和PromptQuorum（跨模型测试）。每个工具解决不同的系统瓶颈。**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — 库版本、许可证、API和文档链接已对照官方仓库、PyPI与厂商文档重新核实',
    readTime: '阅读约12分钟',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM Structured Output工具',
    aboutTopics: ['Structured Output工具', 'LLM验证库', '模式强制'],
    audience: '构建具有Structured Output需求的生产LLM应用的开发者',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: '各工具解决的问题', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor：Pydantic提取', anchor: '#instructor' },
      { label: 'Outlines：约束解码', anchor: '#outlines' },
      { label: 'Pydantic AI：类型安全Agent', anchor: '#pydantic-ai' },
      { label: 'BAML：模式优先的提示词文件', anchor: '#baml' },
      { label: 'LangChain：统一API', anchor: '#langchain-structured-output' },
      { label: 'Marvin：任务式提取', anchor: '#marvin' },
      { label: 'PromptQuorum：跨模型测试', anchor: '#promptquorum' },
      { label: '并排对比', anchor: '#side-by-side-comparison' },
      { label: '选择合适的工具', anchor: '#how-to-choose' },
      { label: '逐步添加结构化输出', anchor: '#how-to-add-structured-output' },
      { label: '结构化输出的常见错误', anchor: '#common-mistakes' },
      { label: '中国数据安全法与结构化输出合规', anchor: '#zhongguo' },
      { label: '常见问题', anchor: '#faq' },
    ],
    leadAnswerBlock: '**根据模型运行在哪里、团队用什么语言交付来选择：Python API工作流需要重试与类型安全时用Instructor和Pydantic AI；本地模型上要保证模式合规用Outlines；Python、TypeScript和Go服务必须共用同一套模式时用BAML；已经在用链或Agent的团队用LangChain；只想一行完成extract或classify用Marvin；上生产前要在GPT、Claude和Gemini之间做一致性测试则用PromptQuorum。**',
    quickFacts: [
      'Instructor采用MIT许可，提供Python、TypeScript、Ruby、Go、Elixir和Rust六个官方实现',
      'Outlines 1.x在生成时约束Token，如今也能驱动托管API，不再局限于本地后端',
      'Pydantic AI提供三种输出模式：原生结构化输出、工具调用和提示词JSON',
      'BAML把一个.baml模式文件编译成类型化客户端，并修复格式错误的输出而不是重试',
      'LangChain 1.x从模型档案中读取各Provider的原生结构化输出支持情况',
      'Marvin 3.x构建在Pydantic AI之上，提供extract、cast、classify和generate',
      'PromptQuorum在25+个模型上测试同一个Prompt的一致性'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026年Structured Output最佳工具：用途排名',
      description: '7个LLM Structured Output库的比较：Instructor、Outlines、Pydantic AI、BAML、LangChain、Marvin和PromptQuorum。按模式强制、语言支持、本地模型兼容性和许可证排名。',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/zh/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'zh',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Structured Output库' },
        { '@type': 'Thing', name: '模式验证' },
        { '@type': 'Thing', name: 'LLM API包装器' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'LLM结构化输出最佳工具（2026）',
      description: '七个用于强制语言模型结构化输出的主要库。',
      numberOfItems: 7,
      inLanguage: 'zh',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: '从任何LLM进行基于Pydantic的提取并自动重试。MIT许可开源，六种语言实现。' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: '用于本地模型保证模式合规性的约束解码库。Apache 2.0开源。' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: '具有三种结构化输出模式和持久化执行集成的类型安全Agent框架。' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: '模式优先的提示词语言，编译类型化客户端并通过schema-aligned parsing修复格式错误的模型输出。' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'OpenAI、Anthropic、Google和本地模型的统一API层。' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: '构建在Pydantic AI之上的任务式库，提供extract、cast、classify和generate。' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: '用于验证GPT、Claude和Gemini之间结构化输出一致性的跨模型测试平台。' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: '使用Instructor进行带重试的Python API提取。使用Outlines在本地模型上保证模式合规性。使用Pydantic AI构建类型安全的多轮对话Agent。当Python、TypeScript和Go服务必须共用一套模式时使用BAML。已在LangChain生态系统中则使用LangChain。想一行完成extract或classify用Marvin。在生产前使用PromptQuorum测试所有模型的结构化输出一致性。'
          }
        ],
        items: [
          '**Instructor** 是最受欢迎的Python选择 — Pydantic模式、自动重试，并有TypeScript、Ruby、Go、Elixir和Rust官方移植版',
          '**Outlines** 通过约束解码保证本地模型的模式合规性 — 结构层面零幻觉风险',
          '**Pydantic AI** 为多轮Agent对话添加类型安全性，并按原生结构化输出→工具调用→提示词JSON的顺序降级',
          '**BAML** 把模式和提示词放进受版本管理的.baml文件并生成类型化客户端，让多语言团队共用一份契约',
          '**LangChain的with_structured_output()** 统一了OpenAI、Anthropic和Google API的结构化输出',
          '**Marvin 3.x** 构建在Pydantic AI之上，把提取压缩成一次extract或classify调用',
          '**PromptQuorum** 在生产部署前测试所有模型的结构化输出一致性'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: '各工具解决的问题',
        snippets: [
          { type: 'in-one-sentence', text: '结构化输出工具解决的是三个不同的问题——在生成时强制架构、生成后校验结果、修复格式损坏的输出——而多数技术栈只需要前两项。' },
          { type: 'in-plain-terms', text: '别照着功能清单选。先问你真正遇到的是哪种故障：模型无视你的格式，还是格式对了但值是错的，又或者返回的 JSON 根本无法解析。这三种情况的解法并不相同。' },
        ],
        content: '**结构化输出需要解决三个相互依存的问题：模式定义、API强制和验证。** 不同工具以不同方式解决这些问题。Instructor在Python中用重试处理全部三个。Outlines通过约束解码消除了验证步骤。Pydantic AI为Agent添加类型安全性。BAML把模式移入可编译文件并修复不完美的输出。LangChain封装Provider API。Marvin优先考虑开发速度。PromptQuorum验证所有模型的一致性。',
        columns: ['问题', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { '问题': '定义模式', 'Instructor': 'Pydantic模型', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Pydantic模型', 'BAML': '.baml类文件', 'LangChain': '工具定义', 'Marvin': 'Python类型提示' },
          { '问题': 'API调用时强制执行', 'Instructor': '重试 + 验证', 'Outlines': 'Token级约束', 'Pydantic AI': '原生 / 工具 / 提示词', 'BAML': '生成的提示词 + 解析器', 'LangChain': 'Provider JSON模式', 'Marvin': 'Pydantic AI输出类型' },
          { '问题': '验证响应', 'Instructor': '自动', 'Outlines': '生成时保证', 'Pydantic AI': '类型检查', 'BAML': 'Schema-aligned parsing', 'LangChain': '手动', 'Marvin': '自动' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor：Pydantic提取',
        content: '**Instructor是采用最广泛的结构化输出库。它封装任何LLM API — OpenAI GPT-5.6、Claude Opus 5、Gemini 3.1 Pro、Ollama、vLLM — 并返回经验证的Pydantic模型而非原始文本。** Instructor在验证失败时自动处理重试，无需额外错误处理即可达到生产级别。',
        items: [
          '支持所有主流Provider（OpenAI、Anthropic、Google、Groq、Mistral）以及通过Ollama或vLLM运行的本地模型',
          'Pydantic v2模式：类型提示、验证规则、嵌入模式的docstring描述',
          '验证失败时自动退避重试 — 无需手动错误处理',
          '六个官方实现：Python、TypeScript、Ruby、Go、Elixir和Rust',
          'MIT许可开源，积极维护，目前为1.x系列',
          '定价：免费（除LLM API调用外无额外费用）'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines：约束解码',
        content: '**Outlines通过约束解码在Token生成时强制执行模式合规性。不是生成Token后再验证，而是在每一步将有效Token限制为符合您模式的Token。** 这保证输出一定能按您的模式解析，结构层面零幻觉风险——这正是它成为本地模型默认选择的原因。',
        items: [
          '本地后端：transformers、llama.cpp、MLX和任何Hugging Face模型',
          '服务端后端：vLLM、Ollama和NVIDIA NIM',
          '同样支持托管API（OpenAI、Gemini），同一份代码可在本地与云端之间迁移',
          '模式可用Pydantic模型、JSON Schema、正则表达式、字面量选项或上下文无关文法表达',
          '保证结构合规 — 无需后处理验证或重试',
          'Apache 2.0开源，目前为1.x系列，采用Rust内核（outlines-core）提升速度'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI：类型安全Agent',
        content: '**Pydantic AI是Pydantic本体团队打造的Agent框架。它将Pydantic模型与多轮Agent对话的一级支持相结合，在每一轮强制执行结构化输出的同时，为Agent循环添加完整的类型安全性。** 它已进入2.x系列并用于生产环境，不再是实验项目。',
        items: [
          'Pydantic v2类型系统 — 完整的IDE支持，并对Agent返回值做静态类型检查',
          '三种输出模式：Provider原生结构化输出、工具调用，以及作为兜底的提示词JSON',
          '高吞吐量应用的Async-first设计',
          '支持OpenAI、Anthropic、Google、Bedrock、Azure AI Foundry、Groq、Mistral、xAI和Ollama',
          '持久化执行集成（Temporal、DBOS、Prefect），让长时间运行的Agent能挺过重启',
          '内置工具调用 — 将工具定义为带类型提示的Python函数',
          'MIT许可且免费（除LLM API调用外无额外费用）'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML：模式优先的提示词文件',
        content: '**BAML走的是与Python库相反的路线：模式和提示词写在受版本管理的.baml文件里，由编译器为你的语言生成类型化客户端。** 它的模式对齐解析器会修复模型真正会犯的错误——JSON外围的Markdown代码块、多余的尾逗号、没有引号的键名、对象前面的推理文字——而不是直接报错并浪费一次重试。',
        items: [
          '模式与提示词共同存放在.baml文件中，像其他源码一样做版本管理和代码评审',
          '原生为Python和TypeScript生成类型化客户端，并通过生成的OpenAPI客户端覆盖Go、Java、Ruby、PHP、Rust和C#',
          'schema-aligned parsing（SAP）能从不完美的输出中还原出有效对象，而不是直接失败',
          '即使模型完全没有原生工具调用或JSON模式也能工作',
          '类型安全的流式输出 — 部分对象带类型抵达，可以边生成边渲染字段',
          'Apache 2.0开源；托管的可观测性产品Boundary Studio为单独付费服务'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain：统一API',
        content: '**LangChain在所有主要聊天模型上提供with_structured_output()，把OpenAI、Anthropic、Google和本地模型的结构化输出统一到单一方法之下。** 自1.x重写以来，它不再硬编码各Provider的原生结构化输出能力，而是从模型档案中读取；用create_agent构建的Agent也可以直接接收response_format。',
        items: [
          '统一API：一个.with_structured_output()方法适用于所有Provider',
          '自动将LangChain工具定义转换为Provider特定的模式格式',
          '用create_agent创建的Agent可为最终回答接收response_format',
          '自1.1系列起，原生结构化输出支持按模型从Provider档案数据中读取',
          '支持Pydantic模型、TypedDict、dataclass和原始JSON Schema',
          '最适合已投入LangChain或LangGraph的团队'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin：任务式提取',
        content: '**Marvin 3.x是从非结构化文本到类型化Python对象的最短路径。它构建在Pydantic AI之上，因此你能以少得多的代码获得同样的Provider覆盖与验证能力。** 请注意：Marvin 2的装饰器式API已经消失——@marvin.fn在3.0中被移除，取而代之的是顶层辅助函数和以任务为中心的Agent引擎。',
        items: [
          '一行式辅助函数：marvin.extract、marvin.cast、marvin.classify和marvin.generate',
          '构建在Pydantic AI之上 — Provider支持与输出验证是继承而来，而非重新实现',
          '面向多步骤工作的任务式引擎：marvin.run、marvin.Task、marvin.Agent、marvin.Thread',
          'Python类型提示即模式 — 提取与分类所需的样板代码极少',
          '迁移提示：Marvin 2的@marvin.fn装饰器已不存在，相关调用需要改写',
          'Apache 2.0开源，由Prefect维护，免费使用'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum：跨模型测试',
        content: '**PromptQuorum本身不是结构化输出库，而是用于验证跨模型结构化输出一致性的测试平台。** 同时对GPT-5.6、Claude Opus 5、Gemini 3.1 Pro和20+其他模型运行相同的Prompt。测量每个模型的模式合规性、延迟和成本。',
        items: [
          '单次API调用中的多模型分发 — 对25+模型测试一个Prompt',
          '结构化输出合规性指标 — 通过率、延迟、每个模型的成本',
          '识别在您的模式上产生幻觉的模型 — 避免部署到不可靠的模型',
          '共识模式 — 在独立模型运行之间找到一致性',
          '与Instructor、Outlines、Pydantic AI、BAML、LangChain或原始LLM API配合使用',
          '提供免费层，高容量测试提供企业定价'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: '并排对比',
        columns: ['工具', '最佳用途', '模式格式', '语言', '本地模型', '许可证', '学习曲线'],
        rows: [
          { '工具': '[Instructor](https://python.useinstructor.com)', '最佳用途': 'Python API + 重试', '模式格式': 'Pydantic模型', '语言': 'Python, TS, Ruby, Go, Elixir, Rust', '本地模型': '支持（Ollama、vLLM）', '许可证': 'MIT，免费', '学习曲线': '低' },
          { '工具': '[Outlines](https://dottxt.ai)', '最佳用途': '本地模型部署', '模式格式': 'Pydantic、JSON Schema、正则、CFG', '语言': 'Python', '本地模型': '支持（原生）', '许可证': 'Apache 2.0，免费', '学习曲线': '中' },
          { '工具': '[Pydantic AI](https://ai.pydantic.dev)', '最佳用途': '类型安全Agent', '模式格式': 'Pydantic模型', '语言': 'Python', '本地模型': '支持（Ollama）', '许可证': 'MIT，免费', '学习曲线': '低' },
          { '工具': '[BAML](https://boundaryml.com)', '最佳用途': '多语言团队、输出不稳定的模型', '模式格式': '.baml类文件', '语言': 'Python、TS，另有6种经OpenAPI', '本地模型': '支持（OpenAI兼容）', '许可证': 'Apache 2.0，可观测性付费', '学习曲线': '中' },
          { '工具': '[LangChain](https://langchain.com)', '最佳用途': '链 + Agent', '模式格式': '工具定义', '语言': 'Python、JS', '本地模型': '支持', '许可证': 'MIT，免费', '学习曲线': '中' },
          { '工具': '[Marvin](https://github.com/PrefectHQ/marvin)', '最佳用途': '快速extract与classify', '模式格式': '类型提示', '语言': 'Python', '本地模型': '支持', '许可证': 'Apache 2.0，免费', '学习曲线': '非常低' },
          { '工具': '[PromptQuorum](https://www.promptquorum.com)', '最佳用途': '多模型测试', '模式格式': 'API无关', '语言': 'API优先', '本地模型': '通过OpenAI代理', '许可证': '免费层 + 企业版', '学习曲线': '低' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: '选择合适的工具',
        content: '从回答三个问题开始：(1) 真正调用模型的服务是用什么语言写的？(2) 您需要本地模型支持吗？(3) 您的验证复杂度如何？',
        items: [
          '**使用Instructor的情况：** 构建Python API且需要验证失败时自动重试。最佳通用选择。',
          '**使用Outlines的情况：** 部署本地模型（llama.cpp、vLLM、MLX）且希望在生成时保证模式合规性。',
          '**使用Pydantic AI的情况：** 构建所有步骤都有类型安全性的多轮Agent工作流，或需要持久化执行。',
          '**使用BAML的情况：** Python、TypeScript和Go服务必须共用一套模式，或者模型没有可靠的原生JSON模式。',
          '**使用LangChain的情况：** 已经使用LangChain或LangGraph — with_structured_output()是最简单的添加。',
          '**使用Marvin的情况：** 只想要一次extract或classify调用，且不需要自定义验证逻辑。',
          '**使用PromptQuorum的情况：** 需要在生产前测试GPT、Claude和Gemini的结构化输出一致性。'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: '逐步添加结构化输出',
        numberedItems: [
          '**定义输出模式** — 创建描述LLM应返回的字段、类型和约束的Pydantic模型（Python）、.baml类（BAML）、TypeScript接口或JSON Schema。',
          '**选择库** — Python API选Instructor，本地模型选Outlines，Agent选Pydantic AI，多语言团队选BAML，已在使用则选LangChain，想一行提取选Marvin。',
          '**安装并封装LLM调用** — `pip install instructor`（Python），然后将模式传递给API调用。Instructor处理验证和重试。',
          '**使用PromptQuorum测试** — 部署到PromptQuorum，对GPT、Claude和Gemini运行您的Prompt。测量每个模型的模式合规性。',
          '**根据失败改进模式** — 如果模型未通过验证，在Prompt中添加示例或调整模式约束。迭代直到所有模型通过。'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '结构化输出的常见错误',
        mistakes: [
          {
            mistake: '把任何JSON模式都当成模式保证',
            problem: '普通JSON模式（response_format json_object、Anthropic JSON控制）只保证回复是合法JSON，不保证它符合你的字段和类型。严格模式模式更进一步，能保证形状，但两者都不保证取值正确：一个格式完好的对象里，价格可能是编造的，日期可能是幻觉。',
            fix: '无论如何都要在上面叠加验证：Instructor、Outlines、Pydantic AI或BAML。业务规则应写在Pydantic验证器里，而不是只靠模式。使用PromptQuorum逐模型测试合规失败情况。'
          },
          {
            mistake: '设计过于严格的模式',
            problem: '过度约束的模式（小枚举列表、非常具体的正则表达式模式）导致LLM频繁验证失败。高重试次数浪费Token和金钱。',
            fix: '使用PromptQuorum测试跨模型的模式严格性。放宽约束以实现95%以上的合规性。尽可能使用可选字段而不是必填字段。'
          },
          {
            mistake: '不测试本地和API模型之间的差异',
            problem: 'llama.cpp上的Outlines与GPT-5.6上的Instructor行为不同。模式合规率因模型而异。只为前沿API模型构建，然后部署到小型本地模型，会导致生产失败。',
            fix: '尽早测试所有预期的模型后端。使用PromptQuorum在本地（vLLM、Ollama）和托管（OpenAI、Anthropic、Google）模型上运行相同的Prompt。'
          },
          {
            mistake: '忽略对延迟和Token成本的影响',
            problem: '带重试的结构化输出消耗更多Token。Instructor在失败时重试。Outlines的约束解码相比自由生成会增加每Token开销。没有测量每个模型的成本。',
            fix: '使用PromptQuorum成本追踪。比较模型间的延迟。对于预算敏感的工作流，优先使用Outlines或BAML（没有重试循环）。在灵活模式下追求精度时，接受Instructor的重试成本。'
          },
          {
            mistake: '混用验证方法（缺乏一致性）',
            problem: '部分请求使用Instructor，其他使用原始JSON解析。部分模型经过验证，其他没有。这导致生产中出现不一致的错误。',
            fix: '在每个代码库中标准化一种验证方法。所有请求使用Instructor，或全部使用Outlines。一致性将调试时间减少10倍。'
          },
          {
            mistake: '照抄针对已被取代的API写的教程',
            problem: '结构化输出库演进很快。Marvin在3.0移除了@marvin.fn装饰器，LangChain在1.x重写时重组了文档，Outlines在1.0改变了导入结构。从旧教程复制的代码在安装阶段就会失败。',
            fix: '固定你所开发的主版本，并以最新文档确认API形态。优先参考官方仓库README而非博客文章，每次升级主版本时重新核对。'
          }
        ]
      },
      zhongguo: {
        id: 'zhongguo',
        title: '中国数据安全法与结构化输出合规',
        content: '在中国大陆部署LLM结构化输出应用时，需要符合《数据安全法》（2021年）、《个人信息保护法》（PIPL）和网络安全法的相关要求。',
        items: [
          '**《数据安全法》第36条：** 向境外提供重要数据须经国家网信部门安全评估。使用Outlines或llama.cpp的本地模型部署可确保数据不出境，适用于金融、医疗、能源等重要行业数据处理。',
          '**PIPL个人信息跨境规定：** 通过LLM API处理个人信息需要满足数据出境安全评估或标准合同要求。本地模型部署绕过了这一合规负担。',
          '**金融行业合规：** 银行、保险、证券机构在使用AI处理客户数据时需符合中国银保监会和证监会规定。Outlines与本地部署的Qwen3等国产模型结合，是合规的技术路径。',
          '**医疗和法律行业：** 处理电子病历、法律文书等敏感数据时，推荐使用Outlines与本地部署组合，配合PromptQuorum进行一致性测试后再投入生产。',
          '**BAML与私有化部署：** BAML只要求OpenAI兼容端点，因此同一份.baml契约可以指向内网的vLLM部署——当Python与TypeScript服务需要共用模式、但数据不能出企业边界时尤其实用。',
          '**企业级推荐架构：** 阿里云、腾讯云、华为云均提供符合等保2.0要求的私有化部署环境。在这些平台上运行Outlines和本地模型，既满足合规要求又保持技术灵活性。'
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[结构化输出与JSON模式](/zh/prompt-engineering/structured-output-and-json-mode) — OpenAI、Anthropic、Google API的JSON模式工作原理；格式强制与模式验证的使用场景。',
          '[Prompt注入与安全](/zh/prompt-engineering/prompt-injection-and-security) — 在结构化Prompt中接受用户输入的风险；净化策略。',
          '[如何评估Prompt质量](/zh/prompt-engineering/how-to-evaluate-prompt-quality) — 在结构化输出模式上测量准确性、一致性和指令遵循度。',
          '[如何跨模型测试Prompt](/zh/prompt-engineering/how-to-test-prompts-across-models) — 在GPT、Claude和Gemini上运行相同测试集；比较通过率。',
          '[Prompt工程与微调对比](/zh/prompt-engineering/prompt-engineering-vs-fine-tuning) — 结构化Prompt何时足够，何时需要模型微调。',
          '[小团队的Prompt工程配置](/zh/prompt-engineering/prompt-engineering-setup-small-teams) — 为2至15人团队构建结构化数据输出工作流。',
          '[可靠结构化数据的提示词](/zh/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'LLM中的结构化输出是什么？',
            a: '结构化输出将LLM响应限制为特定模式——JSON格式、定义的字段、类型约束。不是自由文本，而是返回代码可以直接解析和验证的数据，无需错误处理。'
          },
          {
            q: 'Python开发者最好的工具是什么？',
            a: 'Instructor是最受欢迎的Python选择。它使用Pydantic模型定义模式，自动处理重试和验证，支持所有主流LLM API以及通过Ollama或vLLM运行的本地模型。如果还需要类型安全的多轮Agent对话，Pydantic AI更合适；如果只需要一行的extract或classify调用，Marvin最快。'
          },
          {
            q: '可以与Llama等本地模型一起使用吗？',
            a: '可以。Outlines专门用于本地模型约束解码——支持transformers、llama.cpp、MLX、vLLM和Ollama，并在生成时保证输出能按你的模式解析。Instructor和Pydantic AI在把Ollama或vLLM作为API运行时同样支持，BAML则可对接任何OpenAI兼容端点。'
          },
          {
            q: 'Instructor和Marvin有什么区别？',
            a: 'Instructor封装你自己的LLM客户端，返回带自动重试的已验证Pydantic模型，调用过程由你掌控。Marvin 3.x构建在Pydantic AI之上，提供的是一行式辅助函数：marvin.extract、marvin.cast、marvin.classify。Instructor更明确，适合复杂验证；Marvin更简洁，适合直接的提取任务。请注意，Marvin 2的@marvin.fn装饰器已在Marvin 3中移除。'
          },
          {
            q: 'LangChain支持结构化输出吗？',
            a: '是的。LangChain在ChatOpenAI、ChatAnthropic、ChatGoogleGenerativeAI等聊天模型类上提供with_structured_output()，用create_agent构建的Agent也接受response_format。自1.x系列起，各Provider的原生结构化输出支持是从模型档案数据中读取，而非硬编码。如果已使用LangChain或LangGraph且希望不换库添加模式强制，使用这个方法。'
          },
          {
            q: '如何测试结构化输出的可靠性？',
            a: '使用PromptQuorum在多个模型上运行相同的Prompt并测量模式合规性。GPT-5.6、Claude Opus 5、Gemini 3.1 Pro等模型的可靠性各不相同，小型本地模型差异更大。在部署到生产前进行测试，并在本地用Instructor或Pydantic做验证。'
          },
          {
            q: '"约束解码"是什么意思？',
            a: '约束解码将Token生成限制为仅符合您模式的有效值。Outlines通过计算每一步的有效下一个Token集来实现。这保证输出无需后处理验证或重试即可按模式解析，比普通的API级JSON模式更可靠。它约束的是结构而非真实性：字段会正确，取值仍需核对。'
          },
          {
            q: 'BAML是什么？什么时候该用它而不是Instructor？',
            a: 'BAML是一种模式优先的语言：你在.baml文件里写模式和提示词，再编译出面向你所用语言的类型化客户端。当同一个提示词被多种语言调用时（例如Python工作进程和TypeScript前端共用一份契约），或者模型返回的JSON"几乎合法"时，它比Instructor更合适——因为BAML的模式对齐解析器会修复Markdown代码块、尾逗号和开头的推理文字，而不是浪费一次重试。如果技术栈只有Python，并且希望把模式保留为普通Pydantic代码，继续用Instructor即可。'
          },
          {
            q: '可以不用任何库使用结构化输出吗？',
            a: '从技术上可以——您可以提示模型返回JSON并自己解析。但模型仍会产出格式错误的内容导致解析失败，而且没有任何机制强制你的字段名和类型。这7个工具分别通过重试验证（Instructor、Marvin）、解码时强制（Outlines）、解析时修复（BAML）或封装Provider API（LangChain、Pydantic AI）来解决。'
          },
          {
            q: '哪个工具的文档最好？',
            a: 'LangChain和Pydantic AI因企业支持拥有最全面的文档。BAML的文档对一个年轻项目而言好得反常，因为这门语言本身需要被讲清楚。Instructor虽然是社区维护但有很好的教程和示例。Outlines的文档很技术性但很全面。Marvin的文档较简洁——请专门查看3.x的页面，因为Marvin 2的旧资料仍在流传。'
          },
          {
            q: '需要全部7个工具还是只需要一个？',
            a: '从一个开始。Python开发者试试Instructor或Pydantic AI。本地模型团队试试Outlines。多语言团队试试BAML。LangChain用户试试with_structured_output()。用PromptQuorum验证跨模型一致性。大多数团队使用一个工具加PromptQuorum进行测试。'
          },
          {
            q: '在中国部署LLM结构化输出需要符合哪些数据安全要求？',
            a: '主要需要符合《数据安全法》（2021年）和PIPL。处理个人信息或重要数据的LLM应用应优先考虑本地部署方案，使用Outlines结合Qwen3等本地模型可避免数据出境合规问题。金融、医疗等关键行业还需符合行业监管机构的具体要求。'
          },
          {
            q: '企业级结构化输出合规架构的最佳实践是什么？',
            a: '推荐使用阿里云、腾讯云或华为云提供的私有化部署环境，在等保2.0合规的基础设施上运行Outlines和本地模型。配合PromptQuorum进行多模型一致性测试，选出最适合业务场景的模型后再推向生产。建立模式验证日志以满足审计要求。'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[Instructor GitHub仓库](https://github.com/567-labs/instructor) — Instructor库的官方仓库和文档',
          '[Outlines GitHub仓库](https://github.com/dottxt-ai/outlines) — 保证模式合规性的约束解码',
          '[Pydantic AI文档](https://pydantic.dev/docs/ai/overview/) — 带结构化输出的类型安全Agent框架',
          '[LangChain结构化输出指南](https://docs.langchain.com/oss/python/langchain/structured-output) — LangChain统一结构化输出API',
          '[BAML文档](https://docs.boundaryml.com/home) — 模式优先的提示词语言与schema-aligned parsing',
          '[Marvin GitHub仓库](https://github.com/PrefectHQ/marvin) — 构建在Pydantic AI之上的任务式提取库'
        ]
      }
    }
  },

  ar: {
    theme: 'Tools & Platforms',
    heroImage: '/images/best-tools-structured-output-overview-hero-ar.webp',
    title: 'أفضل أدوات ⁨Structured Output⁩ و ⁨JSON Mode⁩ (⁨2026⁩)',
    seoTitle: 'أفضل أدوات ⁨Structured Output⁩ و ⁨JSON Mode 2026⁩',
    metaDescription: 'مقارنة ⁨7⁩ أدوات ⁨structured output⁩: ⁨Instructor⁩ و⁨Outlines⁩ و⁨Pydantic AI⁩ و⁨BAML⁩ و⁨LangChain⁩ و⁨Marvin⁩ و⁨PromptQuorum⁩. الترخيص ودعم النماذج المحلية.',
    ogTitle: 'أفضل أدوات Structured Output و JSON Mode (2026)',
    ogDescription: 'مقارنة 7 أدوات LLM للـ structured output: Instructor لإعادة المحاولات، Outlines للـ constrained decoding، BAML للفرق متعددة اللغات. اختبر الاتساق مع PromptQuorum.',
    twitterTitle: 'أفضل أدوات Structured Output و JSON Mode (2026)',
    twitterDescription: '⁨Instructor⁩ مقابل ⁨Outlines⁩ مقابل ⁨Pydantic AI⁩ مقابل ⁨BAML⁩ مقابل ⁨LangChain⁩ مقابل ⁨Marvin⁩ — أي أداة ⁨structured output⁩ تناسب بنيتك؟ مقارنة جانبية (⁨2026⁩).',
    intro: '**سبع أدوات تهيمن على structured output في 2026: Instructor لاستخراج Pydantic، و Outlines للـ constrained decoding، و Pydantic AI للوكلاء الآمنة من حيث الأنواع، و BAML لملفات prompt تبدأ من المخطط، و LangChain لـ APIs الموحدة، و Marvin للاستخراج المبني على المهام، و PromptQuorum لاختبار التوافق عبر النماذج. كل أداة تحل عائقاً مختلفاً في سير العمل.**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — تمت إعادة التحقق من إصدارات المكتبات والتراخيص وواجهات API وروابط الوثائق مقابل المستودعات الرسمية و PyPI ووثائق المزودين',
    readTime: '12 دقيقة للقراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'أدوات structured output لنماذج اللغة الكبيرة',
    aboutTopics: ['أدوات structured output', 'مكتبات التحقق من LLM', 'تطبيق المخطط'],
    audience: 'المطورون الذين يبنون تطبيقات LLM في بيئة الإنتاج مع متطلبات structured output',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: 'المشكلة التي تحلها كل أداة', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor: استخراج Pydantic', anchor: '#instructor' },
      { label: 'Outlines: Constrained Decoding', anchor: '#outlines' },
      { label: 'Pydantic AI: وكلاء آمنة من حيث الأنواع', anchor: '#pydantic-ai' },
      { label: 'BAML: ملفات prompt تبدأ من المخطط', anchor: '#baml' },
      { label: 'LangChain: APIs موحدة', anchor: '#langchain-structured-output' },
      { label: 'Marvin: استخراج مبني على المهام', anchor: '#marvin' },
      { label: 'PromptQuorum: اختبار متعدد النماذج', anchor: '#promptquorum' },
      { label: 'مقارنة جانبية', anchor: '#side-by-side-comparison' },
      { label: 'اختيار الأداة المناسبة', anchor: '#how-to-choose' },
      { label: 'إضافة structured output خطوة بخطوة', anchor: '#how-to-add-structured-output' },
      { label: 'الأخطاء الشائعة في structured output', anchor: '#common-mistakes' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    leadAnswerBlock: '**اختر حسب مكان تشغيل نماذجك واللغات التي يسلّم بها فريقك: Instructor و Pydantic AI لسير عمل Python مع إعادة المحاولات وسلامة الأنواع؛ Outlines لضمان الامتثال للمخطط في النماذج المحلية؛ BAML عندما يجب أن يخدم المخطط نفسه خدمات Python و TypeScript و Go؛ LangChain للفرق التي تستخدم chains أو وكلاء بالفعل؛ Marvin لنداءات extract و classify السريعة؛ PromptQuorum لاختبار الاتساق عبر GPT و Claude و Gemini قبل الإنتاج.**',
    quickFacts: [
      'Instructor مرخص بـ MIT ويوفر ستة تنفيذات رسمية: Python و TypeScript و Ruby و Go و Elixir و Rust',
      'يقيّد Outlines 1.x الرموز عند التوليد، وصار يقود الآن APIs المستضافة أيضاً لا الواجهات المحلية فقط',
      'يوفر Pydantic AI ثلاثة أوضاع للمخرجات: structured output أصلي، ونداءات أدوات، و JSON عبر prompt',
      'يترجم BAML ملف مخطط .baml واحداً إلى عملاء بأنواع محددة، ويُصلح المخرجات المشوهة بدل إعادة المحاولة',
      'يقرأ LangChain 1.x دعم structured output الأصلي لكل مزود من ملف تعريف النموذج',
      'Marvin 3.x مبني على Pydantic AI ويوفر extract و cast و classify و generate',
      'يختبر PromptQuorum نفس الـ prompt على أكثر من 25 نموذجاً لضمان الاتساق'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل أدوات Structured Output و JSON Mode (2026)',
      description: 'مقارنة سبع مكتبات لـ structured output في LLM: Instructor و Outlines و Pydantic AI و BAML و LangChain و Marvin و PromptQuorum. مصنفة حسب الامتثال للمخطط ودعم اللغة والتوافق مع النماذج المحلية والترخيص.',
      author: { '@type': 'Organization', 'name': 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'ar',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'مكتبات Structured Output' },
        { '@type': 'Thing', name: 'التحقق من المخطط' },
        { '@type': 'Thing', name: 'أغلفة API للـ LLM' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'أفضل أدوات structured output لنماذج اللغة الكبيرة (2026)',
      description: 'سبع مكتبات رائدة لإلزام النماذج اللغوية بـ structured output.',
      numberOfItems: 7,
      inLanguage: 'ar',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: 'استخراج مبني على Pydantic من أي LLM مع إعادة محاولات تلقائية. مرخص بـ MIT، ستة تنفيذات لغوية.' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: 'مكتبة constrained decoding لضمان الامتثال للمخطط في النماذج المحلية. مفتوحة المصدر Apache 2.0.' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: 'إطار عمل وكلاء آمن من حيث الأنواع مع ثلاثة أوضاع structured output وتكاملات تنفيذ معمّر.' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: 'لغة prompt تبدأ من المخطط، تترجم عملاء بأنواع محددة وتُصلح المخرجات المشوهة عبر schema-aligned parsing.' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'طبقة API موحدة لـ structured output عبر OpenAI و Anthropic و Google والنماذج المحلية.' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'مكتبة قائمة على المهام مبنية على Pydantic AI، توفر extract و cast و classify و generate.' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'منصة اختبار متعددة النماذج للتحقق من اتساق structured output عبر GPT و Claude و Gemini.' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: 'استخدم Instructor للاستخراج بـ Python مع إعادة المحاولات. استخدم Outlines لضمان الامتثال للمخطط في النماذج المحلية. استخدم Pydantic AI للوكلاء متعددة الأدوار الآمنة من حيث الأنواع. استخدم BAML عندما تحتاج خدمات Python و TypeScript و Go إلى مشاركة مخطط واحد. استخدم LangChain إن كنت تعمل بالفعل في هذا النظام البيئي. استخدم Marvin لنداءات extract و classify من سطر واحد. استخدم PromptQuorum لاختبار اتساق structured output عبر جميع النماذج قبل الإنتاج.'
          }
        ],
        items: [
          '**Instructor** هو الخيار الأكثر شيوعاً في Python — مخططات Pydantic، إعادة محاولات تلقائية، ونسخ رسمية لـ TypeScript و Ruby و Go و Elixir و Rust',
          '**Outlines** يضمن الامتثال للمخطط في النماذج المحلية عبر constrained decoding — لا خطر هلوسة على مستوى البنية',
          '**Pydantic AI** يضيف سلامة الأنواع إلى محادثات الوكلاء متعددة الأدوار، ويتراجع من structured output الأصلي إلى نداءات الأدوات ثم JSON عبر prompt',
          '**BAML** يضع المخطط والـ prompt في ملف .baml خاضع لإدارة الإصدارات ويولّد عملاء بأنواع محددة — عقد واحد للفرق متعددة اللغات',
          '**with_structured_output() في LangChain** يوحد structured output عبر APIs لـ OpenAI و Anthropic و Google',
          '**Marvin 3.x** يستند إلى Pydantic AI ويختصر الاستخراج إلى نداء extract أو classify واحد',
          '**PromptQuorum** يختبر اتساق structured output عبر جميع النماذج قبل النشر في الإنتاج'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: 'المشكلة التي تحلها كل أداة',
        snippets: [
          { type: 'in-one-sentence', text: 'تحل أدوات المخرجات المهيكلة ثلاث مشكلات مختلفة — فرض المخطط أثناء التوليد، والتحقق من النتيجة بعده، وإصلاح المخرجات المشوّهة — ولا تحتاج معظم الأنظمة سوى الاثنتين الأوليين.' },
          { type: 'in-plain-terms', text: 'لا تختر بناءً على قائمة الميزات، بل اسأل عن العطل الذي تواجهه فعلاً: هل يتجاهل النموذج صيغتك، أم يلتزم بها لكن القيم خاطئة، أم يعيد JSON لا يمكن تحليله أصلاً؟ لكل حالة علاج مختلف.' },
        ],
        content: '**يتطلب structured output حل ثلاث مشكلات مترابطة: تعريف المخطط، والامتثال عبر API، والتحقق.** تعالج الأدوات المختلفة هذه المشكلات بطرق مختلفة. يتعامل Instructor مع الثلاثة في Python مع إعادة المحاولات. يزيل Outlines خطوة التحقق عبر constrained decoding. يضيف Pydantic AI سلامة الأنواع للوكلاء. ينقل BAML المخطط إلى ملف مُترجَم ويُصلح المخرجات غير المكتملة. يغلف LangChain APIs المزودين. يُعطي Marvin الأولوية لسرعة المطور. يتحقق PromptQuorum من الاتساق عبر جميع النماذج.',
        columns: ['المشكلة', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { 'المشكلة': 'تعريف المخطط', 'Instructor': 'نماذج Pydantic', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'نماذج Pydantic', 'BAML': 'ملفات صنف .baml', 'LangChain': 'تعريفات الأدوات', 'Marvin': 'تلميحات أنواع Python' },
          { 'المشكلة': 'الإلزام في نداء API', 'Instructor': 'إعادة محاولة + تحقق', 'Outlines': 'تقييد على مستوى الرمز', 'Pydantic AI': 'أصلي / أدوات / prompt', 'BAML': 'prompt مولَّد + محلل', 'LangChain': 'وضع JSON للمزود', 'Marvin': 'أنواع مخرجات Pydantic AI' },
          { 'المشكلة': 'التحقق من الاستجابة', 'Instructor': 'تلقائي', 'Outlines': 'مضمون عند التوليد', 'Pydantic AI': 'محقق من الأنواع', 'BAML': 'Schema-aligned parsing', 'LangChain': 'يدوي', 'Marvin': 'تلقائي' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor: استخراج Pydantic',
        content: '**Instructor هي المكتبة الأكثر انتشاراً لـ structured output. تغلف أي API للـ LLM — OpenAI GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Ollama, vLLM — وتُعيد نماذج Pydantic محققة بدلاً من نص خام.** يتعامل Instructor مع إعادة المحاولات تلقائياً عند فشل التحقق، مما يجعله جاهزاً للإنتاج دون معالجة إضافية للأخطاء.',
        items: [
          'يعمل مع كل المزودين الكبار (OpenAI, Anthropic, Google, Groq, Mistral) والنماذج المحلية عبر Ollama أو vLLM',
          'مخططات Pydantic v2: تلميحات الأنواع وقواعد التحقق وأوصاف docstring مدمجة في المخطط',
          'إعادة محاولة تلقائية مع backoff عند فشل التحقق — لا حاجة لمعالجة أخطاء يدوية',
          'ستة تنفيذات رسمية: Python و TypeScript و Ruby و Go و Elixir و Rust',
          'مفتوح المصدر بترخيص MIT، يُصان بنشاط، وهو حالياً على خط 1.x',
          'السعر: مجاني (لا تكلفة إضافية بخلاف نداءات API لـ LLM)'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines: Constrained Decoding',
        content: '**يفرض Outlines الامتثال للمخطط عند توليد الرمز المميز عبر constrained decoding. بدلاً من توليد الرموز ثم التحقق منها، يقيّد Outlines الرموز الصالحة في كل خطوة لتطابق مخططك.** هذا يضمن أن المخرجات ستُحلَّل وفق مخططك دون أي خطر هلوسة على مستوى البنية، وهو ما يجعله الخيار الافتراضي للنماذج المحلية.',
        items: [
          'واجهات محلية: transformers و llama.cpp و MLX وأي نموذج من Hugging Face',
          'واجهات خادم: vLLM و Ollama و NVIDIA NIM',
          'APIs المستضافة مدعومة أيضاً (OpenAI, Gemini)، فينتقل الكود نفسه بين المحلي والسحابة',
          'المخططات كنماذج Pydantic أو JSON Schema أو أنماط regex أو خيارات حرفية أو قواعد نحوية غير مقيدة بالسياق',
          'امتثال بنيوي مضمون — لا حاجة للتحقق بعد التوليد ولا لإعادة المحاولات',
          'مفتوح المصدر Apache 2.0، حالياً على خط 1.x، مع نواة Rust (outlines-core) للسرعة'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI: وكلاء آمنة من حيث الأنواع',
        content: '**Pydantic AI هو إطار الوكلاء من الفريق الذي يقف خلف Pydantic نفسها. يجمع نماذج Pydantic مع دعم من الدرجة الأولى لمحادثات الوكلاء متعددة الأدوار، ويضيف سلامة أنواع كاملة لحلقات الوكلاء مع إلزام structured output في كل دور.** تجاوز خط 2.x ويُستخدم في الإنتاج، لا كتجربة.',
        items: [
          'نظام أنواع Pydantic v2 — دعم كامل لـ IDE وتحقق ساكن مما يُعيده الوكيل',
          'ثلاثة أوضاع للمخرجات: structured output أصلي من المزود، ونداءات أدوات، و JSON عبر prompt كخيار احتياطي',
          'تصميم async-first للتطبيقات عالية الأداء',
          'يدعم OpenAI و Anthropic و Google و Bedrock و Azure AI Foundry و Groq و Mistral و xAI و Ollama',
          'تكاملات تنفيذ معمّر (Temporal, DBOS, Prefect) تجعل الوكلاء طويلة الأمد تصمد أمام إعادة التشغيل',
          'نداءات أدوات مدمجة — عرّف الأدوات كدوال Python مع تلميحات الأنواع',
          'مرخص بـ MIT ومجاني (لا تكلفة إضافية بخلاف نداءات API لـ LLM)'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML: ملفات prompt تبدأ من المخطط',
        content: '**يسلك BAML مساراً معاكساً لمكتبات Python: يعيش المخطط والـ prompt في ملف .baml خاضع لإدارة الإصدارات، ويولّد المترجم عميلاً بأنواع محددة للغتك.** ويُصلح محلله المتوائم مع المخطط الأخطاء التي ترتكبها النماذج فعلاً — أسوار markdown حول JSON، والفواصل الزائدة، والمفاتيح دون علامات اقتباس، ونص الاستدلال قبل الكائن — بدل أن يرمي خطأ ويحرق محاولة إضافية.',
        items: [
          'المخطط والـ prompt معاً في ملفات .baml، تخضع لإدارة الإصدارات والمراجعة كأي كود مصدري آخر',
          'يولّد عملاء بأنواع محددة أصلياً لـ Python و TypeScript، إضافة إلى Go و Java و Ruby و PHP و Rust و C# عبر عملاء OpenAPI مولَّدين',
          'يستعيد schema-aligned parsing (SAP) كائنات صالحة من مخرجات غير مكتملة بدل الفشل',
          'يعمل مع النماذج التي لا تملك أي tool-use أو وضع JSON أصلي',
          'بث آمن من حيث الأنواع — تصل الكائنات الجزئية بأنواعها، فيمكنك عرض الحقول أثناء توليدها',
          'مفتوح المصدر Apache 2.0؛ ومنتج المراقبة المستضاف Boundary Studio عرض مدفوع منفصل'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain: APIs موحدة',
        content: '**يوفر LangChain الدالة with_structured_output() على جميع نماذج الدردشة الرئيسية، فيوحد structured output عبر OpenAI و Anthropic و Google والنماذج المحلية خلف طريقة واحدة.** ومنذ إعادة كتابة 1.x صار يقرأ قدرة كل مزود على structured output الأصلي من ملف تعريف النموذج بدل تثبيتها في الكود، كما تقبل الوكلاء المبنية بـ create_agent معامل response_format مباشرة.',
        items: [
          'API موحدة: طريقة .with_structured_output() واحدة تعمل عبر جميع المزودين',
          'تحويل تلقائي لتعريفات أدوات LangChain إلى صيغ مخططات خاصة بالمزود',
          'الوكلاء المُنشأة بـ create_agent تقبل response_format لإجابتها النهائية',
          'يُقرأ دعم structured output الأصلي لكل نموذج من بيانات ملف تعريف المزود اعتباراً من خط 1.1',
          'يدعم نماذج Pydantic و TypedDict و dataclasses و JSON Schema الخام',
          'مثالي للفرق المستثمرة بالفعل في LangChain أو LangGraph'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin: استخراج مبني على المهام',
        content: '**Marvin 3.x هو أقصر طريق من نص غير منظم إلى كائن Python بأنواع محددة. وهو مبني فوق Pydantic AI، فتحصل على تغطية المزودين والتحقق نفسها بكود أقل بكثير.** ولاحظ أن واجهة المزخرفات في Marvin 2 لم تعد موجودة: أُزيل @marvin.fn في الإصدار 3.0 لصالح دوال مساعدة على المستوى الأعلى ومحرك وكلاء قائم على المهام.',
        items: [
          'دوال مساعدة من سطر واحد: marvin.extract و marvin.cast و marvin.classify و marvin.generate',
          'مبني فوق Pydantic AI — دعم المزودين والتحقق من المخرجات موروثان لا مُعاد تنفيذهما',
          'محرك قائم على المهام للعمل متعدد الخطوات: marvin.run و marvin.Task و marvin.Agent و marvin.Thread',
          'تلميحات أنواع Python تتحول إلى مخطط — أقل قدر من الكود التكراري للاستخراج والتصنيف',
          'ملاحظة ترحيل: المزخرف @marvin.fn من Marvin 2 لم يعد موجوداً، ويجب إعادة كتابة مواضع استدعائه',
          'مفتوح المصدر Apache 2.0، تصونه Prefect، ومجاني الاستخدام'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: اختبار متعدد النماذج',
        content: '**PromptQuorum ليست مكتبة structured output بذاتها، بل منصة اختبار للتحقق من اتساق structured output عبر النماذج.** تشغّل نفس الـ prompt في وقت واحد مقابل GPT-5.6 و Claude Opus 5 و Gemini 3.1 Pro وأكثر من 20 نموذجاً آخر. تقيس الامتثال للمخطط والكمون والتكلفة لكل نموذج.',
        items: [
          'إرسال متعدد النماذج في نداء API واحد — اختبر prompt مقابل أكثر من 25 نموذجاً',
          'مقاييس امتثال structured output — معدل النجاح والكمون والتكلفة لكل نموذج',
          'تحديد النماذج التي تُهلوس بمخططك — تجنب النشر على نماذج غير موثوقة',
          'وضع الإجماع — إيجاد الاتفاق عبر تشغيلات نماذج مستقلة',
          'يعمل مع Instructor و Outlines و Pydantic AI و BAML و LangChain أو APIs LLM الخام',
          'طبقة مجانية متاحة، أسعار enterprise لاختبار الحجم الكبير'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: 'مقارنة جانبية',
        columns: ['الأداة', 'الأنسب لـ', 'صيغة المخطط', 'اللغة', 'النماذج المحلية', 'الترخيص', 'منحنى التعلم'],
        rows: [
          { 'الأداة': '[Instructor](https://python.useinstructor.com)', 'الأنسب لـ': 'APIs Python + إعادة المحاولات', 'صيغة المخطط': 'نماذج Pydantic', 'اللغة': 'Python, TS, Ruby, Go, Elixir, Rust', 'النماذج المحلية': 'نعم (Ollama, vLLM)', 'الترخيص': 'MIT، مجاني', 'منحنى التعلم': 'منخفض' },
          { 'الأداة': '[Outlines](https://dottxt.ai)', 'الأنسب لـ': 'نشر النماذج المحلية', 'صيغة المخطط': 'Pydantic, JSON Schema, regex, CFG', 'اللغة': 'Python', 'النماذج المحلية': 'نعم (أصلي)', 'الترخيص': 'Apache 2.0، مجاني', 'منحنى التعلم': 'متوسط' },
          { 'الأداة': '[Pydantic AI](https://ai.pydantic.dev)', 'الأنسب لـ': 'وكلاء آمنة من حيث الأنواع', 'صيغة المخطط': 'نماذج Pydantic', 'اللغة': 'Python', 'النماذج المحلية': 'نعم (Ollama)', 'الترخيص': 'MIT، مجاني', 'منحنى التعلم': 'منخفض' },
          { 'الأداة': '[BAML](https://boundaryml.com)', 'الأنسب لـ': 'الفرق متعددة اللغات والنماذج غير المستقرة', 'صيغة المخطط': 'ملفات صنف .baml', 'اللغة': 'Python, TS + 6 عبر OpenAPI', 'النماذج المحلية': 'نعم (متوافق مع OpenAI)', 'الترخيص': 'Apache 2.0، المراقبة مدفوعة', 'منحنى التعلم': 'متوسط' },
          { 'الأداة': '[LangChain](https://langchain.com)', 'الأنسب لـ': 'Chains + وكلاء', 'صيغة المخطط': 'تعريفات الأدوات', 'اللغة': 'Python, JS', 'النماذج المحلية': 'نعم', 'الترخيص': 'MIT، مجاني', 'منحنى التعلم': 'متوسط' },
          { 'الأداة': '[Marvin](https://github.com/PrefectHQ/marvin)', 'الأنسب لـ': 'extract و classify سريعان', 'صيغة المخطط': 'تلميحات الأنواع', 'اللغة': 'Python', 'النماذج المحلية': 'نعم', 'الترخيص': 'Apache 2.0، مجاني', 'منحنى التعلم': 'منخفض جداً' },
          { 'الأداة': '[PromptQuorum](https://www.promptquorum.com)', 'الأنسب لـ': 'اختبار متعدد النماذج', 'صيغة المخطط': 'API-agnostic', 'اللغة': 'API-first', 'النماذج المحلية': 'عبر وكيل OpenAI', 'الترخيص': 'طبقة مجانية + enterprise', 'منحنى التعلم': 'منخفض' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: 'اختيار الأداة المناسبة',
        content: 'ابدأ بالإجابة على ثلاثة أسئلة: (1) بأي لغات كُتبت الخدمات التي تنادي النموذج فعلاً؟ (2) هل تحتاج دعم النماذج المحلية؟ (3) ما مدى تعقيد التحقق لديك؟',
        items: [
          '**استخدم Instructor إذا:** كنت تبني APIs Python وتحتاج إعادة محاولات تلقائية عند فشل التحقق. أفضل خيار للاستخدام العام.',
          '**استخدم Outlines إذا:** كنت تنشر نماذج محلية (llama.cpp, vLLM, MLX) وتريد امتثالاً مضموناً للمخطط عند التوليد.',
          '**استخدم Pydantic AI إذا:** كنت تبني سير عمل وكلاء متعددة الأدوار مع سلامة الأنواع في كل خطوة، أو كنت تحتاج تنفيذاً معمّراً.',
          '**استخدم BAML إذا:** كانت خدمات Python و TypeScript و Go بحاجة إلى مشاركة مخطط واحد، أو كان نموذجك بلا وضع JSON أصلي موثوق.',
          '**استخدم LangChain إذا:** كنت تستخدم chains أو وكلاء LangChain بالفعل — with_structured_output() هي أبسط إضافة.',
          '**استخدم Marvin إذا:** أردت نداء extract أو classify واحداً ولا تحتاج منطق تحقق خاصاً بك.',
          '**استخدم PromptQuorum إذا:** احتجت اختبار اتساق structured output عبر GPT و Claude و Gemini قبل الإنتاج.'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'إضافة structured output خطوة بخطوة',
        numberedItems: [
          '**عرّف مخطط مخرجاتك** — أنشئ نموذج Pydantic (Python) أو صنف .baml (BAML) أو واجهة TypeScript أو JSON Schema يصف الحقول والأنواع والقيود التي تريد أن يُعيدها LLM.',
          '**اختر مكتبة** — Instructor لـ APIs Python، Outlines للنماذج المحلية، Pydantic AI للوكلاء، BAML للفرق متعددة اللغات، LangChain إن كانت مستخدمة، Marvin للاستخراج من سطر واحد.',
          '**ثبّت وغلّف نداء LLM الخاص بك** — `pip install instructor` (Python)، ثم مرر مخططك إلى نداء API. يتعامل Instructor مع التحقق وإعادة المحاولات.',
          '**اختبر مع PromptQuorum** — انشر على PromptQuorum وشغّل prompt الخاص بك مقابل GPT و Claude و Gemini. قِس الامتثال للمخطط لكل نموذج.',
          '**نقّح المخطط بناءً على الإخفاقات** — إن فشل نموذج في التحقق، أضف أمثلة إلى prompt الخاص بك أو عدّل قيود المخطط. كرر حتى تنجح جميع النماذج.'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة في structured output',
        mistakes: [
          {
            mistake: 'اعتبار أي وضع JSON ضماناً للمخطط',
            problem: 'وضع JSON البسيط (response_format json_object، التحكم في JSON لـ Anthropic) يضمن فقط أن الرد JSON صالح، لا أنه يطابق حقولك وأنواعك. وأوضاع المخطط الصارمة تذهب أبعد فتضمن الشكل، لكن لا هذا ولا ذاك يضمن صحة القيم: فالكائن سليم البنية قد يحوي سعراً مختلقاً أو تاريخاً مهلوساً.',
            fix: 'أضف تحققاً فوقه في كل الأحوال: Instructor أو Outlines أو Pydantic AI أو BAML. وضع قواعد العمل في مدققات Pydantic لا في المخطط وحده. اختبر مع PromptQuorum لرصد إخفاقات الامتثال لكل نموذج.'
          },
          {
            mistake: 'تصميم مخططات مقيدة جداً',
            problem: 'المخططات المقيدة جداً (قوائم enum صغيرة، أنماط regex محددة جداً) تجعل نماذج LLM تفشل في التحقق بكثرة. أعداد إعادة المحاولات العالية تهدر tokens والمال.',
            fix: 'استخدم PromptQuorum لاختبار صرامة المخطط عبر النماذج. خفّف القيود لتحقيق امتثال 95%+. استخدم الحقول الاختيارية بدلاً من المطلوبة حيثما أمكن.'
          },
          {
            mistake: 'عدم اختبار الفروق بين النماذج المحلية ونماذج API',
            problem: 'Outlines على llama.cpp يتصرف بشكل مختلف عن Instructor على GPT-5.6. تختلف معدلات الامتثال للمخطط بحسب النموذج. البناء لنموذج API متقدم فقط ثم النشر على نموذج محلي صغير يسبب إخفاقات في الإنتاج.',
            fix: 'اختبر جميع backends النماذج المخطط لها مبكراً. استخدم PromptQuorum لتشغيل نفس الـ prompt على نماذج محلية (vLLM, Ollama) ومستضافة (OpenAI, Anthropic, Google).'
          },
          {
            mistake: 'إهمال تأثير الكمون وتكلفة tokens',
            problem: 'structured output مع إعادة المحاولات يكلف tokens أكثر. Instructor يعيد المحاولة عند الإخفاق. و constrained decoding لـ Outlines يضيف عبئاً لكل رمز مقارنة بالتوليد الحر. عدم قياس التكلفة لكل نموذج.',
            fix: 'استخدم تتبع التكاليف في PromptQuorum. قارن الكمون عبر النماذج. لسير العمل الحساسة للميزانية، فضّل Outlines أو BAML (بلا حلقة إعادة محاولات). وللدقة على مخططات مرنة، اقبل تكلفة إعادة المحاولات في Instructor.'
          },
          {
            mistake: 'خلط طرق التحقق (دون اتساق)',
            problem: 'بعض الطلبات تستخدم Instructor، وأخرى تُحلل JSON خاماً. بعض النماذج محققة وأخرى لا. هذا يؤدي إلى أخطاء غير متسقة في الإنتاج.',
            fix: 'قياسياً على نهج تحقق واحد لكل قاعدة كود. جميع الطلبات تستخدم Instructor، أو جميعها تستخدم Outlines. الاتساق يقلل وقت التصحيح 10 أضعاف.'
          },
          {
            mistake: 'نسخ دروس مكتوبة لواجهة API تم استبدالها',
            problem: 'مكتبات structured output تتغير بسرعة. أزال Marvin المزخرف @marvin.fn في 3.0، وأعاد LangChain تنظيم وثائقه في إعادة كتابة 1.x، وغيّر Outlines واجهة الاستيراد في 1.0. الكود المنسوخ من درس قديم يفشل عند التثبيت أصلاً.',
            fix: 'ثبّت الإصدار الرئيسي الذي تطوّر عليه وراجع الوثائق الحالية لمعرفة شكل الواجهة. فضّل ملف README الرسمي في المستودع على منشورات المدونات، وأعد التحقق عند كل ترقية لإصدار رئيسي.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[Structured Output و JSON Mode](/ar/prompt-engineering/structured-output-and-json-mode) — كيف يعمل وضع JSON في APIs لـ OpenAI و Anthropic و Google؛ متى تستخدم الامتثال للصيغة مقابل التحقق من المخطط.',
          '[حقن الـ Prompt والأمان](/ar/prompt-engineering/prompt-injection-and-security) — مخاطر قبول مدخلات المستخدم في prompts منظمة؛ استراتيجيات التعقيم.',
          '[كيف تُقيّم جودة الـ Prompt](/ar/prompt-engineering/how-to-evaluate-prompt-quality) — قِس الدقة والاتساق واتباع التعليمات في مخططات structured output الخاصة بك.',
          '[كيف تختبر الـ Prompts عبر النماذج](/ar/prompt-engineering/how-to-test-prompts-across-models) — شغّل نفس مجموعة الاختبارات عبر GPT و Claude و Gemini؛ قارن معدلات النجاح.',
          '[Prompt Engineering مقابل Fine-Tuning](/ar/prompt-engineering/prompt-engineering-vs-fine-tuning) — متى يكون الـ prompting المنظم كافياً مقابل متى تحتاج fine-tuning للنموذج.',
          '[إعداد prompt engineering للفرق الصغيرة](/ar/prompt-engineering/prompt-engineering-setup-small-teams) — بناء سير عمل مع مخرجات بيانات منظمة للفرق من 2 إلى 15 شخصاً.',
          '[مطالبات للبيانات المنظمة الموثوقة](/ar/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'ما هو structured output في نماذج اللغة الكبيرة؟',
            a: 'structured output يقيّد استجابات LLM بمخطط محدد — صيغة JSON وحقول معرفة وقيود الأنواع. بدلاً من استجابات نص حر، يُعيد structured output بيانات يمكن لكودك تحليلها والتحقق منها مباشرة دون معالجة أخطاء.'
          },
          {
            q: 'ما الأداة الأفضل لمطوري Python؟',
            a: 'Instructor هو الخيار الأكثر شيوعاً في Python. يستخدم نماذج Pydantic لتعريف المخططات، ويتعامل تلقائياً مع إعادة المحاولات والتحقق، ويدعم كل APIs الـ LLM الكبرى إضافة إلى النماذج المحلية عبر Ollama أو vLLM. و Pydantic AI أنسب إن أردت أيضاً محادثات وكلاء متعددة الأدوار آمنة من حيث الأنواع، بينما Marvin هو الأسرع إن كان يكفيك نداء extract أو classify من سطر واحد.'
          },
          {
            q: 'هل يمكنني استخدام structured output مع نماذج محلية مثل Llama؟',
            a: 'نعم. Outlines متخصص في constrained decoding للنماذج المحلية — يعمل مع transformers و llama.cpp و MLX و vLLM و Ollama، ويضمن عند التوليد أن المخرجات ستُحلَّل وفق مخططك. ويدعم Instructor و Pydantic AI كذلك Ollama و vLLM إن شغّلتهما كـ API، بينما يعمل BAML مع أي نقطة نهاية متوافقة مع OpenAI.'
          },
          {
            q: 'ما الفرق بين Instructor و Marvin؟',
            a: 'Instructor يغلّف عميل الـ LLM الخاص بك ويُعيد نماذج Pydantic محققة مع إعادة محاولات تلقائية، فتبقى أنت متحكماً بالنداء. أما Marvin 3.x فمبني فوق Pydantic AI ويمنحك بدلاً من ذلك دوال مساعدة من سطر واحد: marvin.extract و marvin.cast و marvin.classify. Instructor أكثر صراحة وأفضل للتحقق المعقد، و Marvin أكثر إيجازاً للاستخراج البسيط. ولاحظ أن المزخرف @marvin.fn من Marvin 2 أُزيل في Marvin 3.'
          },
          {
            q: 'هل يدعم LangChain structured output؟',
            a: 'نعم. يوفر LangChain الدالة with_structured_output() في ChatOpenAI و ChatAnthropic و ChatGoogleGenerativeAI وبقية أصناف نماذج الدردشة، كما تقبل الوكلاء المبنية بـ create_agent معامل response_format. ومنذ خط 1.x يُقرأ دعم structured output الأصلي لكل مزود من بيانات ملف تعريف النموذج بدل تثبيته في الكود. استخدمه إن كنت تستخدم LangChain أو LangGraph بالفعل وتريد إضافة امتثال للمخطط دون تغيير المكتبة.'
          },
          {
            q: 'كيف أختبر موثوقية structured output؟',
            a: 'استخدم PromptQuorum لتشغيل نفس الـ prompt عبر نماذج متعددة وقياس الامتثال للمخطط. تتفاوت الموثوقية بين GPT-5.6 و Claude Opus 5 و Gemini 3.1 Pro، وتتفاوت أكثر مع النماذج المحلية الصغيرة. اختبر قبل النشر في الإنتاج، وتحقق محلياً باستخدام Instructor أو Pydantic.'
          },
          {
            q: 'ماذا يعني "constrained decoding"؟',
            a: 'constrained decoding يقيّد توليد الرموز على القيم الصالحة فقط وفق مخططك. يفعل Outlines ذلك بحساب مجموعة الرموز الصالحة التالية في كل خطوة. هذا يضمن أن المخرجات ستُحلَّل وفق مخططك دون تحقق ما بعد التوليد أو إعادة محاولات، فهو أكثر موثوقية من وضع JSON البسيط على مستوى API. لكنه يقيّد البنية لا الحقيقة: الحقول ستكون صحيحة، أما القيم فتبقى بحاجة إلى مراجعة.'
          },
          {
            q: 'ما هو BAML ومتى أستخدمه بدل Instructor؟',
            a: 'BAML لغة تبدأ من المخطط: تكتب المخطط والـ prompt في ملف .baml ثم تترجم عميلاً بأنواع محددة للغتك. اخترها بدل Instructor حين تنادي أكثر من لغة الـ prompt نفسه — عامل Python وواجهة أمامية بـ TypeScript يتشاركان عقداً واحداً — أو حين يُعيد نموذجك JSON شبه صالح، لأن محلل BAML المتوائم مع المخطط يُصلح أسوار markdown والفواصل الزائدة ونص الاستدلال في المقدمة بدل أن يحرق محاولة إضافية. وابقَ مع Instructor إن كانت بنيتك Python فقط وأردت إبقاء المخططات كوداً Pydantic عادياً.'
          },
          {
            q: 'هل يمكنني استخدام structured output دون أي مكتبة؟',
            a: 'تقنياً نعم — يمكنك جعل النموذج يُعيد JSON ثم تُحلله بنفسك. لكن التحليل سيفشل أمام المخرجات المشوهة التي ما زالت النماذج تنتجها، ولا شيء يفرض أسماء حقولك أو أنواعها. تحل الأدوات السبع هذا إما بالتحقق مع إعادة المحاولات (Instructor, Marvin)، أو الإلزام عند وقت فك التشفير (Outlines)، أو إصلاح المخرجات عند التحليل (BAML)، أو تغليف APIs المزود (LangChain, Pydantic AI).'
          },
          {
            q: 'أي أداة لديها أفضل توثيق؟',
            a: 'LangChain و Pydantic AI لديهما التوثيق الأشمل بفضل دعمهما المؤسسي. وتوثيق BAML جيد على نحو لافت لمشروع حديث، لأن اللغة نفسها بحاجة إلى شرح. Instructor لديه دروس تعليمية وأمثلة ممتازة رغم صيانته من المجتمع. توثيق Outlines تقني لكنه شامل. وتوثيق Marvin موجز — راجع صفحات 3.x تحديداً، فمواد Marvin 2 القديمة ما زالت متداولة.'
          },
          {
            q: 'هل أحتاج الأدوات السبع جميعها أم أداة واحدة فقط؟',
            a: 'ابدأ بأداة واحدة. يجب على مطوري Python تجربة Instructor أو Pydantic AI. الفرق التي تعمل بنماذج محلية يجب أن تجرب Outlines. والفرق متعددة اللغات يجب أن تجرب BAML. مستخدمو LangChain يجب أن يجربوا with_structured_output(). استخدم PromptQuorum للتحقق من الاتساق عبر جميع النماذج. معظم الفرق تستخدم أداة واحدة + PromptQuorum للاختبار.'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مستودع Instructor على GitHub](https://github.com/567-labs/instructor) — المستودع الرسمي والوثائق لمكتبة Instructor',
          '[مستودع Outlines على GitHub](https://github.com/dottxt-ai/outlines) — constrained decoding لضمان الامتثال للمخطط',
          '[وثائق Pydantic AI](https://pydantic.dev/docs/ai/overview/) — إطار وكلاء آمن من حيث الأنواع مع structured output',
          '[دليل Structured Output في LangChain](https://docs.langchain.com/oss/python/langchain/structured-output) — API موحدة لـ structured output في LangChain',
          '[وثائق BAML](https://docs.boundaryml.com/home) — لغة prompt تبدأ من المخطط و schema-aligned parsing',
          '[مستودع Marvin على GitHub](https://github.com/PrefectHQ/marvin) — مكتبة استخراج قائمة على المهام مبنية على Pydantic AI'
        ]
      }
    }
  },
  ko: {
    theme: 'Tools & Platforms',
    heroImage: '/images/best-tools-structured-output-overview-hero-ko.webp',
    title: 'Structured Output 및 JSON Mode 최고의 도구 (2026)',
    seoTitle: '2026년 Structured Output JSON Mode 최고의 한국어 도구',
    metaDescription: 'Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin, PromptQuorum — 7가지 structured output 도구 비교. 라이선스 및 로컬 모델 지원 포함.',
    ogTitle: 'Structured Output 및 JSON Mode 최고의 도구 (2026)',
    ogDescription: '7가지 LLM structured output 도구 비교: Instructor(재시도), Outlines(constrained decoding), BAML(다국어 팀). PromptQuorum으로 일관성을 테스트하십시오.',
    twitterTitle: 'Structured Output 및 JSON Mode 최고의 도구 (2026)',
    twitterDescription: 'Instructor vs Outlines vs Pydantic AI vs BAML vs LangChain vs Marvin — 어떤 structured output 도구가 귀하의 스택에 적합합니까? 2026년 나란히 비교.',
    intro: '**2026년 7가지 도구가 structured output을 지배합니다: Pydantic 추출을 위한 Instructor, constrained decoding을 위한 Outlines, type-safe 에이전트를 위한 Pydantic AI, 스키마 우선 프롬프트 파일을 위한 BAML, 통합 API를 위한 LangChain, 태스크 기반 추출을 위한 Marvin, 멀티 모델 테스트를 위한 PromptQuorum. 각 도구는 워크플로우의 서로 다른 병목 현상을 해결합니다.**',
    publishDate: '2026-04-30',
    dateModified: '2026-08-31',
    lastFactChecked: '2026-08-31 — 라이브러리 버전, 라이선스, API, 문서 URL을 공식 저장소·PyPI·공급업체 문서와 대조하여 재검증했습니다',
    readTime: '12분 분량',
    educationalLevel: 'Advanced',
    primaryTerm: 'LLM용 structured output 도구',
    aboutTopics: ['structured output 도구', 'LLM 유효성 검사 라이브러리', '스키마 준수'],
    audience: 'structured output 요구 사항을 갖춘 프로덕션 LLM 애플리케이션을 구축하는 개발자',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-03-01',
    last_full_refresh: '2026-08-31',
    current_models_mentioned: ['GPT-5.6', 'Claude Opus 5', 'Gemini 3.1 Pro'],
    toc: [
      { label: '각 도구가 해결하는 문제', anchor: '#which-problem-each-tool-solves' },
      { label: 'Instructor: Pydantic 추출', anchor: '#instructor' },
      { label: 'Outlines: constrained decoding', anchor: '#outlines' },
      { label: 'Pydantic AI: type-safe 에이전트', anchor: '#pydantic-ai' },
      { label: 'BAML: 스키마 우선 프롬프트 파일', anchor: '#baml' },
      { label: 'LangChain: 통합 API', anchor: '#langchain-structured-output' },
      { label: 'Marvin: 태스크 기반 추출', anchor: '#marvin' },
      { label: 'PromptQuorum: 멀티 모델 테스트', anchor: '#promptquorum' },
      { label: '나란히 비교', anchor: '#side-by-side-comparison' },
      { label: '올바른 도구 선택', anchor: '#how-to-choose' },
      { label: 'Structured output 단계별 추가', anchor: '#how-to-add-structured-output' },
      { label: 'Structured output 일반적인 실수', anchor: '#common-mistakes' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    leadAnswerBlock: '**모델이 실행되는 위치와 팀이 어떤 언어로 배포하는지에 따라 선택하십시오: 재시도와 type safety가 필요한 Python API 워크플로우에는 Instructor와 Pydantic AI; 로컬 모델에서 보장된 스키마 준수에는 Outlines; Python·TypeScript·Go 서비스가 하나의 스키마를 공유해야 한다면 BAML; 이미 chains 또는 에이전트를 사용하는 팀에는 LangChain; extract와 classify를 한 줄로 끝내려면 Marvin; 프로덕션 전 GPT, Claude, Gemini에서 일관성 테스트에는 PromptQuorum.**',
    quickFacts: [
      'Instructor는 MIT 라이선스이며 Python, TypeScript, Ruby, Go, Elixir, Rust 6개 공식 구현을 제공합니다',
      'Outlines 1.x는 생성 시점에 토큰을 제약하며 이제 로컬 백엔드뿐 아니라 호스팅 API도 구동합니다',
      'Pydantic AI는 세 가지 출력 모드를 제공합니다: 네이티브 structured output, 도구 호출, 프롬프트 기반 JSON',
      'BAML은 하나의 .baml 스키마 파일을 타입이 있는 클라이언트로 컴파일하고, 잘못된 출력을 재시도 대신 복구합니다',
      'LangChain 1.x는 각 공급자의 네이티브 structured output 지원 여부를 모델 프로필에서 읽습니다',
      'Marvin 3.x는 Pydantic AI 위에 구축되었으며 extract, cast, classify, generate를 제공합니다',
      'PromptQuorum은 일관성을 위해 25개 이상의 모델에서 동일한 프롬프트를 테스트합니다'
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Structured Output 및 JSON Mode 최고의 도구 (2026)',
      description: '7가지 LLM structured output 라이브러리 비교: Instructor, Outlines, Pydantic AI, BAML, LangChain, Marvin, PromptQuorum. 스키마 준수, 언어 지원, 로컬 모델 호환성, 라이선스 기준으로 분류됩니다.',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-30',
      dateModified: '2026-08-31',
      url: 'https://www.promptquorum.com/ko/prompt-engineering/best-tools-structured-output-json',
      inLanguage: 'ko',
      proficiencyLevel: 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Structured Output 라이브러리' },
        { '@type': 'Thing', name: '스키마 유효성 검사' },
        { '@type': 'Thing', name: 'LLM API 래퍼' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Instructor' },
        { '@type': 'SoftwareApplication', name: 'Outlines' },
        { '@type': 'SoftwareApplication', name: 'Pydantic AI' },
        { '@type': 'SoftwareApplication', name: 'BAML' },
        { '@type': 'SoftwareApplication', name: 'LangChain' },
        { '@type': 'SoftwareApplication', name: 'Marvin' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' }
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026년 최고의 LLM structured output 도구',
      description: '언어 모델에서 structured output을 강제하는 7가지 선도적인 라이브러리.',
      numberOfItems: 7,
      inLanguage: 'ko',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Instructor', description: '모든 LLM에서 Pydantic 기반 추출과 자동 재시도를 제공합니다. MIT 라이선스, 6개 언어 구현.' },
        { '@type': 'ListItem', position: 2, name: 'Outlines', description: '로컬 모델에서 보장된 스키마 준수를 위한 constrained decoding 라이브러리. Apache 2.0 오픈소스.' },
        { '@type': 'ListItem', position: 3, name: 'Pydantic AI', description: '세 가지 structured output 모드와 지속 실행 연동을 갖춘 type-safe 에이전트 프레임워크.' },
        { '@type': 'ListItem', position: 4, name: 'BAML', description: '타입이 있는 클라이언트를 컴파일하고 schema-aligned parsing으로 잘못된 모델 출력을 복구하는 스키마 우선 프롬프트 언어.' },
        { '@type': 'ListItem', position: 5, name: 'LangChain', description: 'OpenAI, Anthropic, Google 및 로컬 모델에서 structured output을 위한 통합 API 레이어.' },
        { '@type': 'ListItem', position: 6, name: 'Marvin', description: 'Pydantic AI 위에 구축된 태스크 중심 라이브러리로 extract, cast, classify, generate를 제공합니다.' },
        { '@type': 'ListItem', position: 7, name: 'PromptQuorum', description: 'GPT, Claude, Gemini에서 structured output 일관성을 검증하기 위한 멀티 모델 테스트 플랫폼.' }
      ]
    },
    sections: {
      keyTakeaways: {
        isTldr: true,
        callouts: [
          {
            type: 'tip',
            label: 'TL;DR',
            text: '재시도와 함께 Python 추출에는 Instructor를 사용하십시오. 로컬 모델에서 보장된 스키마 준수에는 Outlines를 사용하십시오. type-safe 멀티 턴 에이전트에는 Pydantic AI를 사용하십시오. Python·TypeScript·Go 서비스가 하나의 스키마를 공유해야 한다면 BAML을 사용하십시오. 이미 해당 생태계에 있다면 LangChain을 사용하십시오. extract와 classify를 한 줄로 끝내려면 Marvin을 사용하십시오. 프로덕션 전 모든 모델에서 structured output 일관성을 테스트하려면 PromptQuorum을 사용하십시오.'
          }
        ],
        items: [
          '**Instructor** 가장 인기 있는 Python 옵션 — Pydantic 스키마, 자동 재시도, TypeScript·Ruby·Go·Elixir·Rust 공식 포팅',
          '**Outlines** constrained decoding을 통해 로컬 모델에서 스키마 준수를 보장합니다 — 구조 측면의 환각 위험 없음',
          '**Pydantic AI** 멀티 턴 에이전트 대화에 type safety를 추가하고, 네이티브 structured output에서 도구 호출, 프롬프트 기반 JSON 순으로 폴백합니다',
          '**BAML** 스키마와 프롬프트를 버전 관리되는 .baml 파일에 두고 타입이 있는 클라이언트를 생성합니다 — 다국어 팀이 하나의 계약을 공유합니다',
          '**LangChain의 with_structured_output()** OpenAI, Anthropic, Google API에서 structured output을 통합합니다',
          '**Marvin 3.x** Pydantic AI 위에 올라가 추출을 extract 또는 classify 한 번의 호출로 줄입니다',
          '**PromptQuorum** 프로덕션 배포 전 모든 모델에서 structured output 일관성을 테스트합니다'
        ]
      },
      whichProblem: {
        id: 'which-problem-each-tool-solves',
        title: '각 도구가 해결하는 문제',
        snippets: [
          { type: 'in-one-sentence', text: '구조화 출력 도구는 생성 시점에 스키마를 강제하는 문제, 생성 후 결과를 검증하는 문제, 손상된 출력을 복구하는 문제라는 세 가지 서로 다른 문제를 해결하며, 대부분의 구성에는 앞의 두 가지만 필요합니다.' },
          { type: 'in-plain-terms', text: '기능 목록을 보고 고르지 마십시오. 실제로 겪는 실패가 무엇인지 먼저 물어야 합니다. 모델이 형식을 무시하는지, 형식은 지키지만 값이 틀리는지, 아예 파싱조차 되지 않는 JSON을 돌려주는지입니다. 각각 해법이 다릅니다.' },
        ],
        content: '**Structured output은 세 가지 상호 연관된 문제를 해결해야 합니다: 스키마 정의, API 준수, 유효성 검사.** 서로 다른 도구는 이러한 문제를 다른 방식으로 공격합니다. Instructor는 재시도와 함께 Python에서 세 가지를 모두 관리합니다. Outlines는 constrained decoding을 통해 유효성 검사 단계를 제거합니다. Pydantic AI는 에이전트에 type safety를 추가합니다. BAML은 스키마를 컴파일 가능한 파일로 옮기고 불완전한 출력을 복구합니다. LangChain은 공급자 API를 래핑합니다. Marvin은 개발자 속도를 우선시합니다. PromptQuorum은 모든 모델에서 일관성을 검증합니다.',
        columns: ['문제', 'Instructor', 'Outlines', 'Pydantic AI', 'BAML', 'LangChain', 'Marvin'],
        rows: [
          { '문제': '스키마 정의', 'Instructor': 'Pydantic 모델', 'Outlines': 'JSON Schema / GBNF', 'Pydantic AI': 'Pydantic 모델', 'BAML': '.baml 클래스 파일', 'LangChain': '도구 정의', 'Marvin': 'Python 타입 힌트' },
          { '문제': 'API 호출에서 강제', 'Instructor': '재시도 + 유효성 검사', 'Outlines': '토큰 수준 제약', 'Pydantic AI': '네이티브 / 도구 / 프롬프트', 'BAML': '생성된 프롬프트 + 파서', 'LangChain': '공급자 JSON 모드', 'Marvin': 'Pydantic AI 출력 타입' },
          { '문제': '응답 유효성 검사', 'Instructor': '자동', 'Outlines': '생성 시 보장', 'Pydantic AI': '유형 검증됨', 'BAML': 'Schema-aligned parsing', 'LangChain': '수동', 'Marvin': '자동' }
        ]
      },
      instructor: {
        id: 'instructor',
        title: 'Instructor: Pydantic 추출',
        content: '**Instructor는 가장 많이 채택된 structured output 라이브러리입니다. 모든 LLM API — OpenAI GPT-5.6, Claude Opus 5, Gemini 3.1 Pro, Ollama, vLLM — 을 래핑하고 일반 텍스트 대신 검증된 Pydantic 모델을 반환합니다.** Instructor는 유효성 검사가 실패할 때 자동으로 재시도를 관리하여 추가적인 오류 처리 없이 프로덕션에 적합하게 만듭니다.',
        items: [
          '모든 주요 공급자(OpenAI, Anthropic, Google, Groq, Mistral)와 Ollama·vLLM을 통한 로컬 모델에서 작동합니다',
          'Pydantic v2 스키마: 스키마에 통합된 타입 힌트, 유효성 검사 규칙, docstring 설명',
          '유효성 검사 실패 시 backoff와 함께 자동 재시도 — 수동 오류 처리 불필요',
          '6개 공식 구현: Python, TypeScript, Ruby, Go, Elixir, Rust',
          'MIT 라이선스 오픈소스, 활발히 유지 관리되며 현재 1.x 라인',
          '가격: 무료 (LLM API 호출 이외의 추가 비용 없음)'
        ],
        codeLanguage: 'python',
        codeBlock: 'import instructor\nfrom pydantic import BaseModel\nfrom openai import OpenAI\n\nclass User(BaseModel):\n    name: str\n    age: int\n\nclient = instructor.from_openai(OpenAI())\nuser = client.chat.completions.create(\n    model="gpt-5.6",\n    response_model=User,\n    messages=[{"role": "user", "content": "Extract: John is 25 years old"}]\n)\n# user.name == "John", user.age == 25'
      },
      outlines: {
        id: 'outlines',
        title: 'Outlines: constrained decoding',
        content: '**Outlines는 constrained decoding을 통해 토큰 생성 시 스키마 준수를 강제합니다. 토큰을 생성한 다음 유효성 검사하는 대신, Outlines는 각 단계에서 유효한 토큰을 스키마와 일치하도록 제한합니다.** 이는 출력이 스키마에 맞춰 반드시 파싱되도록 보장하며 구조 측면의 환각 위험이 없습니다. 바로 이 점이 로컬 모델에서 기본 선택지가 된 이유입니다.',
        items: [
          '로컬 백엔드: transformers, llama.cpp, MLX 및 모든 Hugging Face 모델',
          '서버 백엔드: vLLM, Ollama, NVIDIA NIM',
          '호스팅 API(OpenAI, Gemini)도 지원하므로 동일한 코드가 로컬과 클라우드를 오갑니다',
          '스키마는 Pydantic 모델, JSON Schema, regex 패턴, 리터럴 선택지 또는 문맥 자유 문법으로 지정합니다',
          '보장된 구조 준수 — 생성 후 유효성 검사 또는 재시도 불필요',
          'Apache 2.0 오픈소스, 현재 1.x 라인, 속도를 위한 Rust 코어(outlines-core) 탑재'
        ]
      },
      pydanticAi: {
        id: 'pydantic-ai',
        title: 'Pydantic AI: type-safe 에이전트',
        content: '**Pydantic AI는 Pydantic 본체를 만드는 팀이 내놓은 에이전트 프레임워크입니다. Pydantic 모델을 멀티 턴 에이전트 대화에 대한 일류 지원과 결합하여, 각 턴에서 structured output을 강제하면서 에이전트 루프에 완전한 type safety를 추가합니다.** 이미 2.x 라인에 들어섰고 실험이 아니라 프로덕션에서 사용됩니다.',
        items: [
          'Pydantic v2 타입 시스템 — 완전한 IDE 지원과 에이전트 반환값에 대한 정적 타입 검사',
          '세 가지 출력 모드: 공급자 네이티브 structured output, 도구 호출, 폴백으로서의 프롬프트 기반 JSON',
          '고성능 애플리케이션을 위한 async-first 설계',
          'OpenAI, Anthropic, Google, Bedrock, Azure AI Foundry, Groq, Mistral, xAI, Ollama 지원',
          '지속 실행 연동(Temporal, DBOS, Prefect)으로 장시간 실행되는 에이전트가 재시작을 견딥니다',
          '통합 도구 호출 — 타입 힌트가 있는 Python 함수로 도구 정의',
          'MIT 라이선스이며 무료 (LLM API 호출 이외의 추가 비용 없음)'
        ]
      },
      baml: {
        id: 'baml',
        title: 'BAML: 스키마 우선 프롬프트 파일',
        content: '**BAML은 Python 라이브러리들과 정반대의 접근을 취합니다. 스키마와 프롬프트가 버전 관리되는 .baml 파일에 들어가고, 컴파일러가 사용 언어에 맞는 타입이 있는 클라이언트를 생성합니다.** 스키마 정렬 파서는 모델이 실제로 저지르는 실수 — JSON을 감싼 마크다운 코드 펜스, 끝에 남은 쉼표, 따옴표 없는 키, 객체 앞에 붙는 추론 텍스트 — 를 오류로 던지고 재시도를 태우는 대신 복구합니다.',
        items: [
          '스키마와 프롬프트가 .baml 파일에 함께 있어 다른 소스 코드처럼 버전 관리와 리뷰가 가능합니다',
          'Python과 TypeScript용 타입 클라이언트를 네이티브로 생성하고, Go·Java·Ruby·PHP·Rust·C#은 생성된 OpenAPI 클라이언트로 지원합니다',
          'schema-aligned parsing(SAP)이 불완전한 출력에서 유효한 객체를 복원하며 실패하지 않습니다',
          '네이티브 tool-use나 JSON 모드가 전혀 없는 모델에서도 작동합니다',
          '타입 안전 스트리밍 — 부분 객체가 타입과 함께 도착하므로 생성 중에 필드를 렌더링할 수 있습니다',
          'Apache 2.0 오픈소스이며, 호스팅 관측 제품인 Boundary Studio는 별도 유료 서비스입니다'
        ]
      },
      langchain: {
        id: 'langchain-structured-output',
        title: 'LangChain: 통합 API',
        content: '**LangChain은 모든 주요 채팅 모델에 with_structured_output()을 제공하여 OpenAI, Anthropic, Google 및 로컬 모델의 structured output을 단일 메서드 뒤로 통합합니다.** 1.x 재작성 이후로는 각 공급자의 네이티브 structured output 지원 여부를 하드코딩하지 않고 모델 프로필에서 읽으며, create_agent로 만든 에이전트는 response_format을 직접 받습니다.',
        items: [
          '통합 API: 하나의 .with_structured_output() 메서드가 모든 공급자에서 작동합니다',
          'LangChain 도구 정의를 공급자별 스키마 형식으로 자동 변환합니다',
          'create_agent로 생성한 에이전트는 최종 답변용 response_format을 받습니다',
          '1.1 라인부터 네이티브 structured output 지원 여부는 공급자 프로필 데이터에서 모델별로 읽힙니다',
          'Pydantic 모델, TypedDict, dataclass, 원시 JSON Schema를 지원합니다',
          '이미 LangChain 또는 LangGraph에 투자한 팀에 이상적'
        ]
      },
      marvin: {
        id: 'marvin',
        title: 'Marvin: 태스크 기반 추출',
        content: '**Marvin 3.x는 비정형 텍스트에서 타입이 있는 Python 객체로 가는 가장 짧은 경로입니다. Pydantic AI 위에 구축되어 있어 동일한 공급자 커버리지와 유효성 검사를 훨씬 적은 코드로 얻습니다.** 유의할 점: Marvin 2의 데코레이터 중심 API는 사라졌습니다. @marvin.fn은 3.0에서 제거되었고, 최상위 헬퍼 함수와 태스크 중심 에이전트 엔진이 그 자리를 대신합니다.',
        items: [
          '한 줄 헬퍼: marvin.extract, marvin.cast, marvin.classify, marvin.generate',
          'Pydantic AI 위에 구축 — 공급자 지원과 출력 유효성 검사는 재구현이 아니라 상속됩니다',
          '다단계 작업을 위한 태스크 중심 엔진: marvin.run, marvin.Task, marvin.Agent, marvin.Thread',
          'Python 타입 힌트가 스키마가 됩니다 — 추출과 분류에 필요한 보일러플레이트가 최소',
          '마이그레이션 참고: Marvin 2의 @marvin.fn 데코레이터는 더 이상 존재하지 않으므로 해당 호출부는 다시 작성해야 합니다',
          'Apache 2.0 오픈소스, Prefect가 유지 관리, 무료 사용'
        ]
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: 멀티 모델 테스트',
        content: '**PromptQuorum 자체는 structured output 라이브러리가 아니라 모델 간 structured output 일관성을 검증하는 테스트 플랫폼입니다.** 동일한 프롬프트를 GPT-5.6, Claude Opus 5, Gemini 3.1 Pro 및 20개 이상의 모델에 동시에 실행하십시오. 모델별 스키마 준수율, 지연 시간 및 비용을 측정합니다.',
        items: [
          '단일 API 호출로 멀티 모델 디스패치 — 25개 이상의 모델에서 프롬프트를 테스트합니다',
          'Structured output 준수 메트릭 — 통과율, 지연 시간, 모델별 비용',
          '귀하의 스키마로 환각을 유발하는 모델 식별 — 신뢰할 수 없는 모델에 배포하는 것을 방지합니다',
          '합의 모드 — 독립적인 모델 실행 간의 합의를 찾습니다',
          'Instructor, Outlines, Pydantic AI, BAML, LangChain 또는 원시 LLM API와 함께 작동합니다',
          '무료 티어 제공, 고용량 테스트를 위한 엔터프라이즈 가격'
        ]
      },
      comparison: {
        id: 'side-by-side-comparison',
        title: '나란히 비교',
        columns: ['도구', '이상적인 사용 사례', '스키마 형식', '언어', '로컬 모델', '라이선스', '학습 곡선'],
        rows: [
          { '도구': '[Instructor](https://python.useinstructor.com)', '이상적인 사용 사례': 'Python API + 재시도', '스키마 형식': 'Pydantic 모델', '언어': 'Python, TS, Ruby, Go, Elixir, Rust', '로컬 모델': '예 (Ollama, vLLM)', '라이선스': 'MIT, 무료', '학습 곡선': '낮음' },
          { '도구': '[Outlines](https://dottxt.ai)', '이상적인 사용 사례': '로컬 모델 배포', '스키마 형식': 'Pydantic, JSON Schema, regex, CFG', '언어': 'Python', '로컬 모델': '예 (네이티브)', '라이선스': 'Apache 2.0, 무료', '학습 곡선': '중간' },
          { '도구': '[Pydantic AI](https://ai.pydantic.dev)', '이상적인 사용 사례': 'type-safe 에이전트', '스키마 형식': 'Pydantic 모델', '언어': 'Python', '로컬 모델': '예 (Ollama)', '라이선스': 'MIT, 무료', '학습 곡선': '낮음' },
          { '도구': '[BAML](https://boundaryml.com)', '이상적인 사용 사례': '다국어 팀, 출력이 불안정한 모델', '스키마 형식': '.baml 클래스 파일', '언어': 'Python, TS + OpenAPI로 6개', '로컬 모델': '예 (OpenAI 호환)', '라이선스': 'Apache 2.0, 관측 기능 유료', '학습 곡선': '중간' },
          { '도구': '[LangChain](https://langchain.com)', '이상적인 사용 사례': 'chains + 에이전트', '스키마 형식': '도구 정의', '언어': 'Python, JS', '로컬 모델': '예', '라이선스': 'MIT, 무료', '학습 곡선': '중간' },
          { '도구': '[Marvin](https://github.com/PrefectHQ/marvin)', '이상적인 사용 사례': '빠른 extract와 classify', '스키마 형식': '타입 힌트', '언어': 'Python', '로컬 모델': '예', '라이선스': 'Apache 2.0, 무료', '학습 곡선': '매우 낮음' },
          { '도구': '[PromptQuorum](https://www.promptquorum.com)', '이상적인 사용 사례': '멀티 모델 테스트', '스키마 형식': 'API 불가지론적', '언어': 'API-first', '로컬 모델': 'OpenAI 프록시를 통해', '라이선스': '무료 티어 + 엔터프라이즈', '학습 곡선': '낮음' }
        ]
      },
      decision: {
        id: 'how-to-choose',
        title: '올바른 도구 선택',
        content: '세 가지 질문에 답하는 것으로 시작하십시오: (1) 실제로 모델을 호출하는 서비스는 어떤 언어로 작성되어 있습니까? (2) 로컬 모델 지원이 필요합니까? (3) 유효성 검사 복잡도는 얼마나 됩니까?',
        items: [
          '**Instructor를 사용하십시오:** Python API를 구축하고 유효성 검사 실패 시 자동 재시도가 필요한 경우. 가장 좋은 범용 옵션입니다.',
          '**Outlines를 사용하십시오:** 로컬 모델(llama.cpp, vLLM, MLX)을 배포하고 생성 시 보장된 스키마 준수를 원하는 경우.',
          '**Pydantic AI를 사용하십시오:** 모든 단계에서 type safety와 함께 멀티 턴 에이전트 워크플로우를 구축하거나 지속 실행이 필요한 경우.',
          '**BAML을 사용하십시오:** Python·TypeScript·Go 서비스가 하나의 스키마를 공유해야 하거나, 모델에 신뢰할 만한 네이티브 JSON 모드가 없는 경우.',
          '**LangChain을 사용하십시오:** 이미 LangChain 또는 LangGraph를 사용하고 있다면 — with_structured_output()이 가장 간단한 추가입니다.',
          '**Marvin을 사용하십시오:** extract 또는 classify 한 번의 호출이면 충분하고 별도 유효성 검사 로직이 필요하지 않은 경우.',
          '**PromptQuorum을 사용하십시오:** 프로덕션 전 GPT, Claude, Gemini에서 structured output 일관성을 테스트해야 하는 경우.'
        ]
      },
      howToIntegrate: {
        id: 'how-to-add-structured-output',
        title: 'Structured output 단계별 추가',
        numberedItems: [
          '**출력 스키마 정의** — LLM이 반환하기를 원하는 필드, 유형 및 제약 조건을 설명하는 Pydantic 모델(Python), .baml 클래스(BAML), TypeScript 인터페이스 또는 JSON Schema를 만드십시오.',
          '**라이브러리 선택** — Python API에는 Instructor, 로컬 모델에는 Outlines, 에이전트에는 Pydantic AI, 다국어 팀에는 BAML, 이미 사용 중이면 LangChain, 한 줄 추출에는 Marvin.',
          '**LLM 호출 설치 및 래핑** — `pip install instructor` (Python), 그런 다음 스키마를 API 호출에 전달하십시오. Instructor가 유효성 검사와 재시도를 관리합니다.',
          '**PromptQuorum으로 테스트** — PromptQuorum에 배포하고 GPT, Claude, Gemini에서 프롬프트를 실행하십시오. 모델별 스키마 준수율을 측정하십시오.',
          '**실패에 따라 스키마 개선** — 모델이 유효성 검사에 실패하면 프롬프트에 예시를 추가하거나 스키마 제약 조건을 조정하십시오. 모든 모델이 통과할 때까지 반복하십시오.'
        ]
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Structured output 일반적인 실수',
        mistakes: [
          {
            mistake: '모든 JSON 모드를 스키마 보장으로 착각',
            problem: '단순 JSON 모드(response_format json_object, Anthropic JSON 제어)는 응답이 유효한 JSON이라는 것만 보장할 뿐, 귀하의 필드와 유형에 맞는다는 보장은 하지 않습니다. 엄격한 스키마 모드는 한 걸음 더 나아가 형태를 보장하지만, 어느 쪽도 값의 정확성은 보장하지 않습니다. 형식이 온전한 객체 안에도 지어낸 가격이나 환각한 날짜가 들어 있을 수 있습니다.',
            fix: '어느 경우든 위에 유효성 검사를 얹으십시오: Instructor, Outlines, Pydantic AI 또는 BAML. 비즈니스 규칙은 스키마만이 아니라 Pydantic 유효성 검사기에 넣으십시오. PromptQuorum으로 모델별 준수 실패를 감지하십시오.'
          },
          {
            mistake: '너무 엄격한 스키마 설계',
            problem: '너무 제한적인 스키마(작은 열거형 목록, 매우 구체적인 regex 패턴)는 LLM이 유효성 검사에 자주 실패하게 합니다. 높은 재시도 횟수는 토큰과 비용을 낭비합니다.',
            fix: 'PromptQuorum을 사용하여 모델 간 스키마 엄격도를 테스트하십시오. 95% 이상의 준수율을 달성하기 위해 제약 조건을 완화하십시오. 가능한 경우 필수 필드 대신 선택적 필드를 사용하십시오.'
          },
          {
            mistake: '로컬 모델과 API 모델 간의 차이를 테스트하지 않음',
            problem: 'llama.cpp의 Outlines는 GPT-5.6의 Instructor와 다르게 작동합니다. 스키마 준수율은 모델마다 다릅니다. 프런티어 API 모델만을 위해 구축한 다음 작은 로컬 모델로 배포하면 프로덕션 실패가 발생합니다.',
            fix: '예상하는 모든 모델 백엔드를 일찍 테스트하십시오. PromptQuorum을 사용하여 로컬 모델(vLLM, Ollama)과 호스팅 모델(OpenAI, Anthropic, Google)에서 동일한 프롬프트를 실행하십시오.'
          },
          {
            mistake: '지연 시간 및 토큰 비용 영향 무시',
            problem: '재시도가 있는 structured output은 더 많은 토큰이 필요합니다. Instructor는 실패 시 재시도합니다. Outlines의 constrained decoding은 자유 생성 대비 토큰당 오버헤드가 늘어납니다. 모델별 비용을 측정하지 않습니다.',
            fix: 'PromptQuorum의 비용 추적을 사용하십시오. 모델 간 지연 시간을 비교하십시오. 예산에 민감한 워크플로우에는 Outlines 또는 BAML(재시도 루프 없음)을 선호하십시오. 유연한 스키마에서 정확도를 우선한다면 Instructor의 재시도 비용을 받아들이십시오.'
          },
          {
            mistake: '유효성 검사 방법 혼합 (일관성 없음)',
            problem: '일부 요청은 Instructor를 사용하고, 다른 요청은 원시 JSON 파싱을 사용합니다. 일부 모델은 유효성 검사되고, 다른 모델은 그렇지 않습니다. 이는 프로덕션에서 일관성 없는 오류를 초래합니다.',
            fix: '코드베이스당 하나의 유효성 검사 접근 방식으로 표준화하십시오. 모든 요청이 Instructor를 사용하거나, 모두 Outlines를 사용합니다. 일관성은 디버깅 시간을 10배 줄입니다.'
          },
          {
            mistake: '이미 대체된 API를 기준으로 쓰인 튜토리얼 베끼기',
            problem: 'structured output 라이브러리는 빠르게 바뀝니다. Marvin은 3.0에서 @marvin.fn 데코레이터를 제거했고, LangChain은 1.x 재작성에서 문서를 재편했으며, Outlines는 1.0에서 임포트 구조를 바꿨습니다. 오래된 튜토리얼에서 복사한 코드는 설치 단계에서부터 실패합니다.',
            fix: '개발 대상 메이저 버전을 고정하고 API 형태는 최신 문서로 확인하십시오. 블로그 글보다 공식 저장소 README를 우선하고, 메이저 버전을 올릴 때마다 다시 확인하십시오.'
          }
        ]
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Structured Output 및 JSON Mode](/ko/prompt-engineering/structured-output-and-json-mode) — OpenAI, Anthropic, Google API에서 JSON 모드 작동 방식; 형식 준수 대 스키마 유효성 검사를 사용하는 시점.',
          '[프롬프트 인젝션 및 보안](/ko/prompt-engineering/prompt-injection-and-security) — 구조화된 프롬프트에서 사용자 입력을 수락할 때의 위험; 새니타이제이션 전략.',
          '[프롬프트 품질 평가 방법](/ko/prompt-engineering/how-to-evaluate-prompt-quality) — structured output 스키마에서 정확도, 일관성 및 지시 사항 준수를 측정하십시오.',
          '[모델 간 프롬프트 테스트 방법](/ko/prompt-engineering/how-to-test-prompts-across-models) — GPT, Claude, Gemini에서 동일한 테스트 세트를 실행하고 통과율을 비교하십시오.',
          '[프롬프트 엔지니어링 vs. 파인튜닝](/ko/prompt-engineering/prompt-engineering-vs-fine-tuning) — 구조화된 프롬프팅으로 충분한 시기 vs. 모델 파인튜닝이 필요한 시기.',
          '[소규모 팀을 위한 프롬프트 엔지니어링 설정](/ko/prompt-engineering/prompt-engineering-setup-small-teams) — 2-15명 팀을 위한 구조화된 데이터 출력 워크플로우 구축.',
          '[신뢰할 수 있는 구조화 데이터를 위한 프롬프트](/ko/prompt-engineering/prompts-for-reliable-structured-data)'
        ]
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'LLM에서 structured output이란 무엇입니까?',
            a: 'Structured output은 LLM 응답을 특정 스키마(JSON 형식, 정의된 필드, 유형 제약 조건)로 제한합니다. 자유 형식 텍스트 응답 대신, structured output은 오류 처리 없이 코드가 직접 파싱하고 유효성 검사할 수 있는 데이터를 반환합니다.'
          },
          {
            q: 'Python 개발자에게 어떤 도구가 가장 좋습니까?',
            a: 'Instructor는 가장 인기 있는 Python 옵션입니다. Pydantic 모델을 사용하여 스키마를 정의하고, 자동으로 재시도와 유효성 검사를 처리하며, 주요 LLM API 전부와 Ollama·vLLM을 통한 로컬 모델을 지원합니다. type-safe 멀티 턴 에이전트 대화까지 원한다면 Pydantic AI가 더 잘 맞고, 한 줄짜리 extract나 classify 호출이면 충분하다면 Marvin이 가장 빠릅니다.'
          },
          {
            q: 'Llama와 같은 로컬 모델에서 structured output을 사용할 수 있습니까?',
            a: '예. Outlines는 로컬 모델을 위한 constrained decoding에 특화되어 있습니다 — transformers, llama.cpp, MLX, vLLM, Ollama와 함께 작동하며 생성 시점에 출력이 스키마에 맞춰 파싱되도록 보장합니다. Instructor와 Pydantic AI도 Ollama·vLLM을 API로 실행하면 지원하고, BAML은 OpenAI 호환 엔드포인트라면 어디서든 작동합니다.'
          },
          {
            q: 'Instructor와 Marvin의 차이점은 무엇입니까?',
            a: 'Instructor는 여러분의 LLM 클라이언트를 래핑하여 자동 재시도와 함께 검증된 Pydantic 모델을 반환하므로 호출을 직접 통제합니다. Marvin 3.x는 Pydantic AI 위에 구축되어 대신 한 줄 헬퍼를 제공합니다: marvin.extract, marvin.cast, marvin.classify. Instructor는 더 명시적이며 복잡한 유효성 검사에 유리하고, Marvin은 단순 추출에 더 간결합니다. 참고로 Marvin 2의 @marvin.fn 데코레이터는 Marvin 3에서 제거되었습니다.'
          },
          {
            q: 'LangChain은 structured output을 지원합니까?',
            a: '예. LangChain은 ChatOpenAI, ChatAnthropic, ChatGoogleGenerativeAI 등 채팅 모델 클래스에 with_structured_output()을 제공하며, create_agent로 만든 에이전트는 response_format을 받습니다. 1.x 라인부터는 각 공급자의 네이티브 structured output 지원 여부를 하드코딩하지 않고 모델 프로필 데이터에서 읽습니다. 이미 LangChain이나 LangGraph를 사용하고 라이브러리를 변경하지 않고 스키마 준수를 추가하려는 경우 사용하십시오.'
          },
          {
            q: 'Structured output의 신뢰성을 어떻게 테스트합니까?',
            a: 'PromptQuorum을 사용하여 여러 모델에서 동일한 프롬프트를 실행하고 스키마 준수율을 측정하십시오. GPT-5.6, Claude Opus 5, Gemini 3.1 Pro는 신뢰성 수준이 서로 다르고, 작은 로컬 모델은 차이가 더 큽니다. 프로덕션에 배포하기 전에 테스트하고, 로컬에서는 Instructor나 Pydantic으로 검증하십시오.'
          },
          {
            q: '"constrained decoding"이란 무엇을 의미합니까?',
            a: 'Constrained decoding은 토큰 생성을 스키마에 따라 유효한 값만으로 제한합니다. Outlines는 각 단계에서 다음에 유효한 토큰 집합을 계산하여 이를 수행합니다. 이는 생성 후 유효성 검사나 재시도 없이 출력이 스키마에 맞춰 파싱되도록 보장하므로 단순 API 수준 JSON 모드보다 신뢰할 수 있습니다. 다만 제약하는 것은 구조이지 진실이 아닙니다. 필드는 맞겠지만 값은 여전히 확인이 필요합니다.'
          },
          {
            q: 'BAML은 무엇이며 언제 Instructor 대신 사용해야 합니까?',
            a: 'BAML은 스키마 우선 언어입니다. 스키마와 프롬프트를 .baml 파일에 작성하고 사용 언어에 맞는 타입 클라이언트를 컴파일합니다. 같은 프롬프트를 여러 언어에서 호출할 때 — Python 워커와 TypeScript 프런트엔드가 하나의 계약을 공유하는 경우 — 또는 모델이 거의 유효한 JSON을 반환할 때 Instructor보다 낫습니다. BAML의 스키마 정렬 파서가 마크다운 코드 펜스, 끝에 남은 쉼표, 앞에 붙은 추론 텍스트를 재시도를 태우지 않고 복구하기 때문입니다. 스택이 Python뿐이고 스키마를 평범한 Pydantic 코드로 유지하고 싶다면 Instructor에 머무르십시오.'
          },
          {
            q: '라이브러리 없이 structured output을 사용할 수 있습니까?',
            a: '기술적으로 예 — 모델이 JSON을 반환하게 한 다음 직접 파싱할 수 있습니다. 하지만 모델이 여전히 만들어내는 잘못된 형식의 출력에서 파싱이 실패하고, 필드 이름이나 유형을 강제하는 장치도 없습니다. 7가지 도구는 재시도와 함께 유효성 검사(Instructor, Marvin), 디코딩 시 강제(Outlines), 파싱 시 복구(BAML) 또는 공급자 API 래핑(LangChain, Pydantic AI)을 통해 이 문제를 해결합니다.'
          },
          {
            q: '어떤 도구가 최고의 문서를 가지고 있습니까?',
            a: 'LangChain과 Pydantic AI는 기업 지원으로 인해 가장 포괄적인 문서를 가지고 있습니다. BAML 문서는 언어 자체를 가르쳐야 하는 만큼 신생 프로젝트치고는 유난히 좋습니다. Instructor는 커뮤니티가 유지 관리함에도 불구하고 훌륭한 튜토리얼과 예시를 가지고 있습니다. Outlines 문서는 기술적이지만 포괄적입니다. Marvin 문서는 간결합니다 — Marvin 2 시절 자료가 아직 돌아다니므로 3.x 페이지를 콕 집어 확인하십시오.'
          },
          {
            q: '7가지 도구가 모두 필요합니까, 아니면 하나만 필요합니까?',
            a: '하나로 시작하십시오. Python 개발자는 Instructor 또는 Pydantic AI를 시도해야 합니다. 로컬 모델을 사용하는 팀은 Outlines를 시도해야 합니다. 다국어 팀은 BAML을 시도해야 합니다. LangChain 사용자는 with_structured_output()을 시도해야 합니다. PromptQuorum을 사용하여 모든 모델에서 일관성을 검증하십시오. 대부분의 팀은 하나의 도구 + 테스트를 위한 PromptQuorum을 사용합니다.'
          }
        ]
      },
      sources: {
        id: 'sources',
        title: '참고 자료',
        items: [
          '[Instructor GitHub 저장소](https://github.com/567-labs/instructor) — Instructor 라이브러리의 공식 저장소 및 문서',
          '[Outlines GitHub 저장소](https://github.com/dottxt-ai/outlines) — 보장된 스키마 준수를 위한 constrained decoding',
          '[Pydantic AI 문서](https://pydantic.dev/docs/ai/overview/) — structured output이 있는 type-safe 에이전트 프레임워크',
          '[LangChain Structured Output 가이드](https://docs.langchain.com/oss/python/langchain/structured-output) — LangChain의 통합 structured output API',
          '[BAML 문서](https://docs.boundaryml.com/home) — 스키마 우선 프롬프트 언어와 schema-aligned parsing',
          '[Marvin GitHub 저장소](https://github.com/PrefectHQ/marvin) — Pydantic AI 위에 구축된 태스크 중심 추출 라이브러리'
        ]
      }
    }
  },
}
