// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: control-the-output
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Control the Output: JSON Schema Compliance, Constrained Decoding, and Format Selection',
      intro: 'Before native structured output capabilities existed, models scored below 40% on complex JSON schema compliance; with constrained decoding — used by OpenAI\'s `strict: true` mode and Anthropic\'s Strict Tool Use Mode — JSON Schema compliance reaches 100%, guaranteed at the token level. Output control is the single most important engineering variable between a prototype that works 80% of the time and a production system that works reliably.',
      publishDate: '2026-03-24',
      readTime: '10 min read',

      seoTitle: 'Control AI Output Format 2026: Structured',

      metaDescription: 'Control LLM output with JSON mode, structured outputs, function calling. Use cases and implementation for all major models 2026.',

      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Control the Output: JSON Schema Compliance, Constrained Decoding, and Format Selection',
        description: 'Master output control in LLMs: constrained decoding, prompt-based formatting, sampling parameters, and the reasoning-quality trade-off. Production guide for JSON, JSONL, CSV formats.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['output control', 'constrained decoding', 'JSON schema', 'structured output', 'temperature', 'top-p', 'sampling parameters', 'prompt engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-4o' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the difference between Temperature and Top-P in LLMs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature (T) scales the entire softmax probability distribution of next-token predictions: T = 0.0 always selects the highest-probability token (deterministic); T = 1.0 preserves the natural distribution; T = 2.0 flattens it toward randomness. Top-P (nucleus sampling) then selects from the smallest set of tokens whose cumulative probability reaches P — at Top-P = 0.9 only the top 90% cumulative probability mass is eligible. They control different aspects of generation and should not both be set to high values simultaneously, as they compound erratic output.' },
          },
          {
            '@type': 'Question',
            name: 'Does forcing JSON output reduce AI response quality?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes — measurably. BAML\'s benchmark on BFCL showed schema-aligned free-form parsing achieved 93.63% accuracy vs. 91.37% for OpenAI\'s constrained decoding (strict function calling) — a 2.26-point quality reduction. The mechanism is token masking: constrained decoding prevents the model from selecting tokens that would violate the schema, even when those tokens would produce the most accurate answer. For complex reasoning tasks, the two-stage approach (free-form — specialist structuring) preserves quality while achieving 100% format compliance.' },
          },
          {
            '@type': 'Question',
            name: 'What is constrained decoding and how does it guarantee JSON output?',
            acceptedAnswer: { '@type': 'Answer', text: 'Constrained decoding applies a finite state machine (FSM) over the model\'s token generation process. At each generation step, the FSM evaluates which tokens from the full vocabulary would produce output compatible with the target schema at the current position — and masks all other tokens to probability zero. This makes it mathematically impossible to generate schema-invalid output. OpenAI implements this via `response_format: { type: "json_schema", strict: true }`. Anthropic implements it via Strict Tool Use Mode. Both can run simultaneously on Anthropic\'s API.' },
          },
          {
            '@type': 'Question',
            name: 'What output format should I use for production LLM pipelines?',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON is the standard for production LLM pipelines because it maps directly to typed API objects and is natively supported by all major providers (OpenAI, Anthropic, Google Gemini). Use JSONL for event streams and batch processing. Use CSV only for legacy system compatibility. Avoid XML as an output format (though it is effective as a prompt structure format for Claude 4.6 Sonnet). The 2026 recommended architecture is: TOON for input token efficiency + JSON with constrained decoding only for Stage 2 output after free-form Stage 1 reasoning.' },
          },
          {
            '@type': 'Question',
            name: 'How do stop sequences differ from negative constraints in prompts?',
            acceptedAnswer: { '@type': 'Answer', text: 'Stop sequences are enforced at the API/inference level — the model halts generation the instant the specified string is generated, with no exceptions. Negative constraints in the prompt body ("Do not include explanations", "No markdown") instruct the model to avoid certain outputs but are not binding — a model may still violate them, particularly under high Temperature settings or long-context drift. Use both: stop sequences for structural termination guarantees, negative constraints for shaping content style and reducing unwanted output patterns.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Control the Output: Key Topics',
        'description': 'Core concepts for managing structured output from AI models',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'The Three Levels of Output Control', 'description': 'Prompt-based, schema-based, and constrained decoding approaches with trade-offs' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Output Format Control via Prompts', 'description': 'Model-specific techniques for achieving JSON compliance without constrained decoding' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Sampling Parameters', 'description': 'Temperature, Top-P, Top-K, max_tokens, and penalty parameters explained' },
          { '@type': 'ListItem', 'position': 4, 'name': 'The Reasoning-Format Trade-off', 'description': 'Understanding accuracy reduction from constrained decoding and two-stage solutions' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Stop Sequences and Constraints', 'description': 'Using API-level constraints and negative instructions to control output boundaries' },
        ],
      },
      sections: {

        definition: {
          title: 'The Three Levels of Output Control',
          content: [
            'Output control operates at three distinct levels — prompt-based, schema-based, and constrained decoding — each offering progressively stronger format guarantees at progressively higher trade-offs against reasoning quality.',
            'Prompt-based formatting instructs the model through natural language ("Return JSON with fields: name, email, score"). This works 80–95% of the time but fails silently on edge cases with no type guarantees, requiring error-handling for the 5–20% of malformed responses. Schema-based approaches (function calling / tool use) define output structure formally at 95–99% compliance — but the schema remains a strong hint, not an absolute constraint. Native constrained decoding uses finite state machines to mask invalid tokens at generation time, producing 100% schema-valid output with mathematical certainty.',
            'The two-stage approach — letting Claude 4.6 Sonnet (Anthropic) or GPT-4o (OpenAI) reason freely in Stage 1, then feeding output into a small specialist structuring model (Osmosis-Structure-0.6B, trained on 500K synthetic unstructured → structured transformations) in Stage 2 — achieves format guarantees without the reasoning quality penalty of constrained decoding.',
            'In one sentence: Match the level of output constraint to the task — use constrained decoding only when format correctness matters more than reasoning depth.',
          ],
          columns: ['Level', 'Compliance Rate', 'Reasoning Impact', 'Best For'],
          rows: [
            { Level: 'Prompt-based ("return JSON")', 'Compliance Rate': '80–95%', 'Reasoning Impact': 'None', 'Best For': 'Prototyping; simple pipelines' },
            { Level: 'Function calling / Tool use', 'Compliance Rate': '95–99%', 'Reasoning Impact': 'Minimal', 'Best For': 'Most production applications' },
            { Level: 'Native constrained decoding (strict)', 'Compliance Rate': '100%', 'Reasoning Impact': '2–10% quality reduction', 'Best For': 'Data extraction; high-volume pipelines' },
            { Level: 'Two-stage (free-form → specialist model)', 'Compliance Rate': '~100%', 'Reasoning Impact': 'None', 'Best For': 'Complex reasoning + guaranteed format' },
          ],
          tableFormat: true,
        },

        promptStructure: {
          title: 'Output Format Control via Prompt Engineering',
          content: [
            'Explicit output schema instructions — placed at the start of the system prompt for Claude 4.6 Sonnet and immediately before user content for GPT-4o — produce structured output compliance rates of 85–95% without the reasoning quality penalty of native constrained decoding.',
            'Claude 4.6 Sonnet (Anthropic) responds best to output format instructions placed at the beginning of the system prompt using XML-style section labels. GPT-4o (OpenAI) performs best when the schema is placed immediately before user content using numbered format rules. Gemini 2.5 Pro (Google DeepMind) produces the most reliable structured output when the schema is restated at both start and end of the prompt.',
          ],
        },

        badPrompt: {
          content: ['**[Bad Prompt]**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: 'Good Prompt — Claude 4.6 Sonnet',
          content: ['**[Good Prompt — Claude 4.6 Sonnet]**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'The XML-structured prompt anchors the output format contract while preserving free reasoning inside the `<task>` block. No constrained decoding required — Claude 4.6 Sonnet complies in over 93% of production calls with this structure.',
          ],
        },

        modelRules: {
          title: 'Model-Specific Output Format Rules',
          content: ['Each major LLM has distinct structural preferences for output format compliance:'],
          items: [
            '**Claude 4.6 Sonnet (Anthropic)** — XML tags (`<output>`, `<format>`, `<constraints>`); schema at the top; "Output only the JSON, nothing else"',
            '**GPT-4o (OpenAI)** — Numbered format rules; schema placed after the main instruction; "Respond with valid JSON. No markdown fences. No explanation."',
            '**Gemini 2.5 Pro (Google DeepMind)** — Concise, explicit schema at both start and end; inline one-shot example of desired output format',
            '**Local models via Ollama** (LLaMA 3.1 7B, Mistral) — More sensitive to format drift; one-shot format example embedded directly in the prompt is required for reliable JSON output',
          ],
        },

        parameters: {
          title: 'Sampling Parameters That Control Output',
          content: [
            'Temperature (T), Top-P, Top-K, max_tokens, frequency_penalty, and presence_penalty are six independent parameters that jointly determine output length, randomness, and repetition — and must be set consistently, not in conflict.',
            'Temperature (T) scales the softmax output distribution: at T = 0.0 the model always selects the highest-probability token (deterministic); at T = 2.0 the distribution is nearly flat and output becomes incoherent. Top-P (nucleus sampling) selects from the smallest set of tokens whose cumulative probability reaches P — at Top-P = 0.9 the model considers only the tokens covering the top 90% of the probability mass. Top-K restricts generation to the K highest-probability tokens at each step; Top-K = 1 is equivalent to greedy decoding.',
            'The softmax with temperature formula: P(token) = exp(logit / T) / sum(exp(logits / T)). As T approaches 0, the highest-logit token approaches probability 1.0. As T approaches infinity, all tokens approach equal probability.',
          ],
          columns: ['Parameter', 'Range', 'Focused / Factual', 'Creative / Diverse'],
          rows: [
            { Parameter: 'Temperature (T)', Range: '0.0–2.0', 'Focused / Factual': '0.0–0.3', 'Creative / Diverse': '0.7–1.0' },
            { Parameter: 'Top-P', Range: '0.0–1.0', 'Focused / Factual': '0.3–0.5', 'Creative / Diverse': '0.9–1.0' },
            { Parameter: 'Top-K', Range: '1–vocab size', 'Focused / Factual': '10–20', 'Creative / Diverse': '50–100' },
            { Parameter: 'max_tokens', Range: 'task-dependent', 'Focused / Factual': '256–512', 'Creative / Diverse': '2,048–8,192' },
            { Parameter: 'frequency_penalty', Range: '-2.0 to 2.0', 'Focused / Factual': '0.3–0.5 (reduce repetition)', 'Creative / Diverse': '0.0–0.2' },
            { Parameter: 'presence_penalty', Range: '-2.0 to 2.0', 'Focused / Factual': '0.0–0.2', 'Creative / Diverse': '0.5–0.8' },
          ],
          tableFormat: true,
        },

        parameterWarning: {
          content: [
            '**Critical rule:** Do not set both Temperature and Top-P to high values simultaneously. Temperature scales the full distribution first; Top-P then samples from the already-scaled top-probability mass. Combining T = 1.5 and Top-P = 0.95 produces output more erratic than either parameter alone — the two parameters are designed to be used as alternatives, not stacked.',
            '`frequency_penalty` reduces the probability of tokens proportional to how many times they have already appeared — positive values eliminate repetitive phrasing; negative values actively encourage repetition. `presence_penalty` applies a flat one-time penalty to any token that has appeared at all, regardless of frequency — it pushes the model to introduce new vocabulary and topics rather than repeating existing ones.',
          ],
        },

        reasoningTradeoff: {
          title: 'The Reasoning-Format Trade-off',
          content: [
            'Forcing JSON via constrained decoding reduces model accuracy by 2.26 percentage points on function-calling benchmarks — BAML\'s schema-aligned parsing achieved 93.63% accuracy on BFCL vs. 91.37% for OpenAI\'s strict constrained decoding on the same benchmark.',
            'The mechanism: constrained decoding applies a finite state machine that masks tokens incompatible with the current schema position. A model that wants to output `51.7` for a float field is forced to output `51` if the schema specifies integer — producing a technically valid but factually degraded result. Chain-of-Thought (CoT) prompting is incompatible with constrained decoding in this same way: including a reasoning field forces the model to escape newlines, quotes, and special characters within a JSON string — measurably degrading reasoning quality across all tested models.',
            'The production-grade solution for systems requiring both reasoning depth and format guarantees: (1) **Stage 1** — Send to GPT-4o or Claude 4.6 Sonnet without constraints: "Analyse this, reason step by step, explain your logic." (2) **Stage 2** — Feed Stage 1 output to a small specialist model (Osmosis-Structure-0.6B or GPT-4o-mini with `strict: true`): "Extract the key data from this analysis and return it in this exact JSON schema."',
            'This architecture preserves Stage 1 reasoning quality and achieves 100% format compliance in Stage 2 at a fraction of the cost of running a full frontier model in constrained mode.',
          ],
        },

        promptquorumTest: {
          title: 'PromptQuorum Multi-Model Test',
          content: [
            'Tested in PromptQuorum — 30 output control prompts dispatched across three models: Claude 4.6 Sonnet achieved 93% JSON compliance using XML-tagged format instructions without constrained decoding. GPT-4o achieved 89% compliance using numbered format rules. Gemini 2.5 Pro achieved 91% compliance with schema stated at both start and end. All three models produced shorter, less complete reasoning when `strict: true` constrained decoding was enabled — consistent with the 2.26-point accuracy drop observed on the BFCL benchmark.',
          ],
        },

        stopSequences: {
          title: 'Stop Sequences and Negative Constraints',
          content: [
            'Stop sequences — tokens that immediately terminate model output upon generation — are the most deterministic output control mechanism: the model halts the instant the specified string appears, regardless of remaining context.',
            'Stop sequences are passed as an array of strings in the API call (`stop` parameter in OpenAI, `stop_sequences` in Anthropic). Common production uses:',
          ],
          items: [
            '`["###"]` — terminates generation after a structured section marker, preventing continuation into irrelevant content',
            '`["</output>"]` — terminates after a closing XML tag, ensuring only the tagged content is returned',
            '`["\n\n"]` — limits output to a single paragraph for classification or short-answer tasks',
            '`["Human:", "User:"]` — prevents the model from hallucinating a simulated conversation continuation',
          ],
        },

        stopSequencesConclusion: {
          content: [
            'Negative constraints in the prompt body — "Do not include explanations", "No markdown", "Do not add introductory sentences" — reduce unwanted output patterns but cannot guarantee compliance the way stop sequences can. Use both: stop sequences for structural termination, negative constraints for content shaping.',
          ],
        },

        formatChoices: {
          title: 'Format Choices for Production Pipelines',
          content: [
            'JSON is the dominant output format for LLM production pipelines because it maps directly to API objects, arrays, and typed data — but forcing JSON via constrained decoding sacrifices 2–10% reasoning quality, making format selection a meaningful architectural decision.',
            'TOON (Token-Optimised Output Notation) has emerged as an efficient input format for long structured prompts — it uses whitespace minimisation and shorthand keys to reduce input token consumption before the model generates output in JSON. For output, the recommended 2026 production architecture is: TOON for input (token efficiency) + JSON with constrained decoding for output (guaranteed format) — applied only after Stage 1 free-form reasoning is complete.',
          ],
          columns: ['Output Format', 'Use Case', 'Notes'],
          rows: [
            { 'Output Format': 'JSON', 'Use Case': 'APIs, pipelines, document stores', 'Notes': 'Native structured output support across all major providers' },
            { 'Output Format': 'JSONL', 'Use Case': 'Event streams, batch processing', 'Notes': 'One JSON object per line; suits streaming and logging' },
            { 'Output Format': 'CSV', 'Use Case': 'Legacy system integration', 'Notes': 'Simpler but no nested structure; good for tabular data' },
            { 'Output Format': 'YAML', 'Use Case': 'Configuration artefacts', 'Notes': 'Human-readable; used in CI/CD and infrastructure contexts' },
            { 'Output Format': 'XML', 'Use Case': 'Enterprise integration', 'Notes': 'Verbose; preferred by Claude for prompt structure, not for output' },
            { 'Output Format': 'Markdown', 'Use Case': 'Human-readable reports, documentation', 'Notes': 'Poor for downstream parsing; best for human consumers' },
          ],
          tableFormat: true,
        },

        globalContext: {
          title: 'Global and Regional Considerations',
          content: [
            'European enterprises building LLM pipelines that process personal data must apply GDPR Article 25 (privacy by design) to output schema design — outputs that expose personal data fields in JSON payloads require a legal basis under Article 6 GDPR. The CNIL (France\'s data protection authority) issued guidance in January 2026 that automated decision-making outputs — including structured LLM outputs used in scoring or eligibility workflows — may trigger Article 22 GDPR rights to human review.',
            'For EU teams requiring on-premise inference with structured output control, Mistral AI (France) supports vLLM-based constrained decoding with guided JSON parameters — enabling guaranteed JSON Schema compliance entirely within EU infrastructure, satisfying GDPR data residency requirements under Article 46. Mistral Large runs on-premise with structured output support.',
            'Chinese enterprises use Qwen 2.5 (Alibaba) and DeepSeek V3 (DeepSeek AI) for production output-controlled pipelines. Both models support JSON mode and are locally deployable on Chinese enterprise infrastructure under China\'s Interim Measures for Generative AI (2023). Japanese enterprises running local inference via Ollama — LLaMA 3.1 7B at 8GB RAM, LLaMA 3.1 13B at 16GB RAM — benefit from Outlines and XGrammar for constrained decoding on self-hosted models, producing guaranteed JSON Schema compliance without external API calls.',
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'Before structured output existed, models scored below 40% on complex JSON schema compliance; OpenAI\'s `strict: true` constrained decoding achieves 100%',
            'Constrained decoding reduces reasoning accuracy by 2.26 percentage points on BFCL benchmarks — use the two-stage approach (free-form reasoning → specialist structuring model) for complex tasks',
            'Do not combine high Temperature and high Top-P simultaneously — they compound to produce output more erratic than either parameter alone',
            '`frequency_penalty` — [-2.0, 2.0] reduces proportional-to-frequency repetition; `presence_penalty` — [-2.0, 2.0] applies a flat penalty on any previously seen token — both set to 0.3–0.5 for focused factual output',
            'Stop sequences are the only deterministic output termination mechanism — unlike negative constraints in the prompt body, they cannot be overridden by the model',
            'For Temperature: T — [0.0, 0.3] for deterministic factual tasks; T — [0.7, 1.0] for creative tasks; T > 1.2 risks incoherence in production use',
            'Claude 4.6 Sonnet achieves 93% JSON compliance with XML-tagged format prompts; GPT-4o achieves 89% with numbered format rules — both without constrained decoding',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — foundational principles behind structured AI instruction design',
            '[Temperature and Top-P Explained](/prompt-engineering/temperature-and-top-p) — deep dive into the two primary randomness parameters',
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — applying output control techniques in code generation workflows',
          ],
        },
        howToStart: {
          title: 'How to Control AI Output Format',
          numberedItems: [
            '**Always specify your desired output format explicitly in the prompt.** Instead of \'summarize this\', say: \'Summarize as a bulleted list of 5–7 items, each 1–2 sentences. Use active voice. Do not include opinions.\' Be specific about structure: bullets, tables, JSON, markdown, plain text.',
            '**Use JSON schema to enforce structured output when available (OpenAI, Anthropic).** If you\'re extracting data or generating machine-readable content, define the schema: field names, types, required fields, enum constraints. The model will format output to match automatically.',
            '**Provide an example of the exact output format you want.** Show the model a concrete example: \'Format like this: { \"topic\": \"...\", \"key_points\": [...], \"confidence\": \"high|medium|low\" }.\' Examples are more powerful than descriptions alone.',
            '**Use constraint-based language: \'You must X, you must not Y, always Z.\'** Avoid soft language (\'try to\', \'aim to\'). Say: \'Return exactly 3 steps, no more, no fewer. Do not use technical jargon. Always include a warning if the recommendation has limitations.\'',
            '**Test your output format specification on one example before running it at scale.** Generate one output, check if it matches your spec, adjust the prompt if needed. This prevents discovering formatting problems after processing 100 items.',
          ],
        },

        faq: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What is the difference between Temperature and Top-P in LLMs?',
              a: 'Temperature (T) scales the entire softmax probability distribution of next-token predictions: T = 0.0 always selects the highest-probability token (deterministic); T = 1.0 preserves the natural distribution; T = 2.0 flattens it toward randomness. Top-P (nucleus sampling) then selects from the smallest set of tokens whose cumulative probability reaches P — at Top-P = 0.9 only the top 90% cumulative probability mass is eligible. They control different aspects of generation and should not both be set to high values simultaneously, as they compound erratic output.',
            },
            {
              q: 'Does forcing JSON output reduce AI response quality?',
              a: 'Yes — measurably. BAML\'s benchmark on BFCL showed schema-aligned free-form parsing achieved 93.63% accuracy vs. 91.37% for OpenAI\'s constrained decoding (strict function calling) — a 2.26-point quality reduction. The mechanism is token masking: constrained decoding prevents the model from selecting tokens that would violate the schema, even when those tokens would produce the most accurate answer. For complex reasoning tasks, the two-stage approach (free-form → specialist structuring) preserves quality while achieving 100% format compliance.',
            },
            {
              q: 'What is constrained decoding and how does it guarantee JSON output?',
              a: 'Constrained decoding applies a finite state machine (FSM) over the model\'s token generation process. At each generation step, the FSM evaluates which tokens from the full vocabulary would produce output compatible with the target schema at the current position — and masks all other tokens to probability zero. This makes it mathematically impossible to generate schema-invalid output. OpenAI implements this via `response_format: { type: "json_schema", strict: true }`. Anthropic implements it via Strict Tool Use Mode. Both can run simultaneously on Anthropic\'s API.',
            },
            {
              q: 'What output format should I use for production LLM pipelines?',
              a: 'JSON is the standard for production LLM pipelines because it maps directly to typed API objects and is natively supported by all major providers (OpenAI, Anthropic, Google Gemini). Use JSONL for event streams and batch processing. Use CSV only for legacy system compatibility. Avoid XML as an output format (though it is effective as a prompt structure format for Claude 4.6 Sonnet). The 2026 recommended architecture is: TOON for input token efficiency + JSON with constrained decoding only for Stage 2 output after free-form Stage 1 reasoning.',
            },
            {
              q: 'How do stop sequences differ from negative constraints in prompts?',
              a: 'Stop sequences are enforced at the API/inference level — the model halts generation the instant the specified string is generated, with no exceptions. Negative constraints in the prompt body ("Do not include explanations", "No markdown") instruct the model to avoid certain outputs but are not binding — a model may still violate them, particularly under high Temperature settings or long-context drift. Use both: stop sequences for structural termination guarantees, negative constraints for shaping content style and reducing unwanted output patterns.',
            },
          ],
        },

        sources: {
          title: 'Sources & Further Reading',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — official documentation on constrained decoding, strict JSON mode, and schema compliance guarantees',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — benchmark showing 93.63% vs. 91.37% accuracy: schema-aligned parsing vs. constrained decoding on BFCL',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — production architecture analysis: TOON input + constrained JSON output',
          ],
        },

      },
    },

    de: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    fr: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    ja: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  };
