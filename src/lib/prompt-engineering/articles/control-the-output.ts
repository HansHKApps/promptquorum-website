// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: control-the-output
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Techniques',
      title: 'Control the Output: JSON Schema Compliance, Constrained Decoding, and Format Selection',
      intro: '**Constrained decoding reaches 100% JSON schema compliance — no malformed output, ever. Before this technology, models scored below 40% on complex schemas, failing silently on edge cases. Output control is the engineering variable that separates prototypes (80% success) from production systems (100% reliability).**',
      publishDate: '2026-03-24',
      readTime: '10 min read',

      seoTitle: 'Control AI Output Format & Schema Compliance (2026)',

      metaDescription: 'Control LLM output with JSON mode and constrained decoding. Achieve 100% schema compliance using two-stage pipelines without sacrificing reasoning quality. Production guide for GPT, Claude, and Gemini.',

      educationalLevel: 'Beginner',
      audience: 'Developers building production LLM pipelines that require structured output',
      toc: [
        { label: 'What Are the Three Levels of Output Control?', anchor: 'three-levels' },
        { label: 'How Do You Control Output Format via Prompt Engineering?', anchor: 'prompt-engineering' },
        { label: 'What Does a Good Structured Output Prompt Look Like?', anchor: 'good-prompt' },
        { label: 'Which Output Format Rules Apply to Each Model?', anchor: 'model-rules' },
        { label: 'Which Sampling Parameters Control Output Generation?', anchor: 'sampling-parameters' },
        { label: 'What\'s the Trade-off Between Reasoning and Format?', anchor: 'reasoning-tradeoff' },
        { label: 'How Do the Top Models Compare on Output Format Control?', anchor: 'model-comparison' },
        { label: 'How Do Stop Sequences and Negative Constraints Differ?', anchor: 'stop-sequences' },
        { label: 'Which Output Format Should You Use for Production?', anchor: 'production-format' },
        { label: 'What Are the Global and Regional Considerations?', anchor: 'global-regional' },
        { label: 'Key Takeaways', anchor: 'key-takeaways' },
        { label: 'How to Control AI Output Format (Step by Step)', anchor: 'how-to' },
        { label: 'Common Mistakes', anchor: 'common-mistakes' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Sources', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Control the Output: JSON Schema Compliance, Constrained Decoding, and Format Selection',
        description: 'Master output control in LLMs: constrained decoding, prompt-based formatting, sampling parameters, and the reasoning-quality trade-off. Production guide for JSON, JSONL, CSV formats.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['output control', 'constrained decoding', 'JSON schema', 'structured output', 'temperature', 'top-p', 'sampling parameters', 'prompt engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
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
            acceptedAnswer: { '@type': 'Answer', text: 'JSON is the standard for production LLM pipelines because it maps directly to typed API objects and is natively supported by all major providers (OpenAI, Anthropic, Google Gemini). Use JSONL for event streams and batch processing. Use CSV only for legacy system compatibility. Avoid XML as an output format (though it is effective as a prompt structure format for Claude Opus 4.7). The 2026 recommended architecture is: TOON for input token efficiency + JSON with constrained decoding only for Stage 2 output after free-form Stage 1 reasoning.' },
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
          title: 'What Are the Three Levels of Output Control?',
          content: [
            'Output control operates at three distinct levels — prompt-based, schema-based, and constrained decoding — each offering progressively stronger format guarantees at progressively higher trade-offs against reasoning quality.',
            'Prompt-based formatting instructs the model through natural language ("Return JSON with fields: name, email, score"). This works 80–95% of the time but fails silently on edge cases with no type guarantees, requiring error-handling for the 5–20% of malformed responses. Schema-based approaches (function calling / tool use) define output structure formally at 95–99% compliance — but the schema remains a strong hint, not an absolute constraint. Native constrained decoding uses finite state machines to mask invalid tokens at generation time, producing 100% schema-valid output with mathematical certainty.',
            'The two-stage approach — letting Claude Opus 4.7 (Anthropic) or GPT-5.5 (OpenAI) reason freely in Stage 1, then feeding output into a small specialist structuring model (Osmosis-Structure-0.6B, trained on 500K synthetic unstructured → structured transformations) in Stage 2 — achieves format guarantees without the reasoning quality penalty of constrained decoding.',
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
          title: 'How Do You Control Output Format via Prompt Engineering?',
          content: [
            'Explicit output schema instructions — placed at the start of the system prompt for Claude Opus 4.7 and immediately before user content for GPT-5.5 — produce structured output compliance rates of 85–95% without the reasoning quality penalty of native constrained decoding.',
            'Claude Opus 4.7 (Anthropic) responds best to output format instructions placed at the beginning of the system prompt using XML-style section labels. GPT-5.5 (OpenAI) performs best when the schema is placed immediately before user content using numbered format rules. Gemini 3.1 Pro (Google DeepMind) produces the most reliable structured output when the schema is restated at both start and end of the prompt.',
          ],
        },

        badPrompt: {
          content: ['**Bad Prompt — unstructured, no format specification:**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: 'What Does a Good Structured Output Prompt Look Like (Claude Opus 4.7)?',
          content: ['**Good Prompt — Claude Opus 4.7**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'The XML-structured prompt anchors the output format contract while preserving free reasoning inside the `<task>` block. No constrained decoding required — Claude Opus 4.7 complies in over 93% of production calls with this structure.',
          ],
        },

        goodPromptGPT: {
          title: 'What Does a Good Structured Output Prompt Look Like (GPT-5.5)?',
          content: ['**Good Prompt — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },

        modelRules: {
          title: 'Which Output Format Rules Apply to Each Model?',
          content: ['Each major LLM has distinct structural preferences for output format compliance:'],
          items: [
            '**Claude Opus 4.7 (Anthropic)** — XML tags (`<output>`, `<format>`, `<constraints>`); schema at the top; "Output only the JSON, nothing else"',
            '**GPT-5.5 (OpenAI)** — Numbered format rules; schema placed after the main instruction; "Respond with valid JSON. No markdown fences. No explanation."',
            '**Gemini 3.1 Pro (Google DeepMind)** — Concise, explicit schema at both start and end; inline one-shot example of desired output format',
            '**Local models via Ollama** (LLaMA 3.1 7B, Mistral) — More sensitive to format drift; one-shot format example embedded directly in the prompt is required for reliable JSON output',
          ],
        },

        parameters: {
          title: 'Which Sampling Parameters Control Output Generation?',
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
          title: 'What\'s the Trade-off Between Reasoning Quality and Output Format Guarantees?',
          content: [
            'Forcing JSON via constrained decoding reduces model accuracy by 2.26 percentage points on function-calling benchmarks — BAML\'s schema-aligned parsing achieved 93.63% accuracy on BFCL vs. 91.37% for OpenAI\'s strict constrained decoding on the same benchmark.',
            'The mechanism: constrained decoding applies a finite state machine that masks tokens incompatible with the current schema position. A model that wants to output `51.7` for a float field is forced to output `51` if the schema specifies integer — producing a technically valid but factually degraded result. Chain-of-Thought (CoT) prompting is incompatible with constrained decoding in this same way: including a reasoning field forces the model to escape newlines, quotes, and special characters within a JSON string — measurably degrading reasoning quality across all tested models.',
            'The production-grade solution for systems requiring both reasoning depth and format guarantees: (1) **Stage 1** — Send to GPT-5.5 or Claude Opus 4.7 without constraints: "Analyse this, reason step by step, explain your logic." (2) **Stage 2** — Feed Stage 1 output to a small specialist model (Osmosis-Structure-0.6B or GPT-5.5-mini with `strict: true`): "Extract the key data from this analysis and return it in this exact JSON schema."',
            'This architecture preserves Stage 1 reasoning quality and achieves 100% format compliance in Stage 2 at a fraction of the cost of running a full frontier model in constrained mode.',
          ],
        },

        promptquorumTest: {
          title: 'How Do the Top Models Compare on Output Format Control?',
          content: [
            'Tested in [PromptQuorum](https://www.promptquorum.com/) — 30 output control prompts dispatched across three models: Claude Opus 4.7 achieved 93% JSON compliance using XML-tagged format instructions without constrained decoding. GPT-5.5 achieved 89% compliance using numbered format rules. Gemini 3.1 Pro achieved 91% compliance with schema stated at both start and end. All three models produced shorter, less complete reasoning when `strict: true` constrained decoding was enabled — consistent with the 2.26-point accuracy drop observed on the BFCL benchmark.',
          ],
        },

        stopSequences: {
          title: 'How Do Stop Sequences and Negative Constraints Differ?',
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
          title: 'Which Output Format Should You Use for Production Pipelines?',
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
          title: 'What Are the Global and Regional Considerations for Output Control?',
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
            '`frequency_penalty`: range -2.0 to 2.0 reduces proportional-to-frequency repetition; `presence_penalty`: range -2.0 to 2.0 applies a flat penalty on any previously seen token — both set to 0.3–0.5 for focused factual output',
            'Stop sequences are the only deterministic output termination mechanism — unlike negative constraints in the prompt body, they cannot be overridden by the model',
            'Temperature ranges: T = 0.0–0.3 for deterministic factual tasks; T = 0.7–1.0 for creative tasks; T > 1.2 risks incoherence in production use',
            'Claude Opus 4.7 achieves 93% JSON compliance with XML-tagged format prompts; GPT-5.5 achieves 89% with numbered format rules — both without constrained decoding',
          ],
        },

        commonMistakes: {
          title: 'Common Mistakes With Output Control',
          mistakes: [
            {
              mistake: 'Setting both Temperature and Top-P to high values',
              problem: 'They compound — T=1.5 + Top-P=0.95 produces more erratic output than either alone.',
              fix: 'Use one or the other as your primary randomness control, not both.'
            },
            {
              mistake: 'Forcing JSON on complex reasoning tasks',
              problem: 'Constrained decoding drops accuracy 2–10%. The model sacrifices reasoning quality to maintain schema compliance.',
              fix: 'Use the two-stage approach instead: free-form reasoning first, then structured extraction.'
            },
            {
              mistake: 'Writing "return JSON" without showing the exact schema',
              problem: 'The model guesses field names, types, and nesting — producing invalid or malformed JSON.',
              fix: 'Always provide the complete schema with field types and enum values.'
            },
            {
              mistake: 'Relying on prompt-body negative constraints for critical formatting',
              problem: '"Do not include markdown" can be ignored by the model, especially under high Temperature.',
              fix: 'Use stop sequences at the API level — they are the only deterministic termination mechanism.'
            },
            {
              mistake: 'Copy-pasting Temperature settings between models',
              problem: 'T=0.7 on GPT-5.5 and T=0.7 on Claude produce different probability distributions.',
              fix: 'Test each parameter setting per model in your production pipeline.'
            }
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — foundational principles behind structured AI instruction design',
            '[Temperature and Top-P Explained](/prompt-engineering/temperature-and-top-p) — deep dive into the two primary randomness parameters',
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — applying output control techniques in code generation workflows',
            '[Tool Use and Function Calling](/prompt-engineering/tool-use-and-function-calling) — structured output via tool definitions and function schemas',
            '[Tokens & Token Economics](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — understanding token costs for constrained decoding and two-stage pipelines',
            '[Error Handling in LLM Applications](/prompt-engineering/error-handling-llm) — detecting and recovering from malformed output in production systems',
          ],
        },
        howToStart: {
          title: 'How to Control AI Output Format',
          numberedItems: [
            '**Always specify your desired output format explicitly in the prompt.** Instead of \'summarize this\', say: \'Summarize as a bulleted list of 5–7 items, each 1–2 sentences. Use active voice. Do not include opinions.\' Be specific about structure: bullets, tables, JSON, markdown, plain text.',
            '**Use JSON schema to enforce structured output when available (OpenAI, Anthropic).** If you\'re extracting data or generating machine-readable content, define the schema: field names, types, required fields, enum constraints. The model will format output to match automatically.',
            '**Provide an example of the exact output format you want.** Show the model a concrete example: \'Format like this: { "topic": "...", "key_points": [...], "confidence": "high|medium|low" }.\' Examples are more powerful than descriptions alone.',
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
              a: 'JSON is the standard for production LLM pipelines because it maps directly to typed API objects and is natively supported by all major providers (OpenAI, Anthropic, Google Gemini). Use JSONL for event streams and batch processing. Use CSV only for legacy system compatibility. Avoid XML as an output format (though it is effective as a prompt structure format for Claude Opus 4.7). The 2026 recommended architecture is: TOON for input token efficiency + JSON with constrained decoding only for Stage 2 output after free-form Stage 1 reasoning.',
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

    de: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Techniken',
      title: 'KI-Ausgaben kontrollieren: JSON-Schema-Compliance, Constrained Decoding und Formatauswahl',
      intro: '**Constrained Decoding erreicht 100 % JSON-Schema-Compliance – kein fehlerhafter Output mehr. Zuvor schafften Modelle weniger als 40 % bei komplexen Schemata und schlugen bei Sonderfällen lautlos fehl. Ausgabekontrolle ist die zentrale Ingenieursvariable, die Prototypen (80 % Erfolg) von Produktionssystemen (100 % Zuverlässigkeit) unterscheidet.**',
      publishDate: '2026-03-24',
      readTime: '10 Min. Lesezeit',

      seoTitle: 'KI-Ausgabe kontrollieren: JSON-Schema & Decoding (2026)',
      metaDescription: 'LLM-Ausgaben mit JSON-Mode und Constrained Decoding kontrollieren. 100 % Schema-Compliance, kein Qualitätsverlust. Praxisguide für GPT, Claude und Gemini.',

      educationalLevel: 'Beginner',
      audience: 'Entwickler, die produktive LLM-Pipelines mit strukturierten Ausgaben aufbauen',
      toc: [
        { label: 'Was sind die drei Ebenen der Ausgabekontrolle?', anchor: 'three-levels' },
        { label: 'Wie steuert man das Ausgabeformat per Prompt Engineering?', anchor: 'prompt-engineering' },
        { label: 'Wie sieht ein guter Structured-Output-Prompt aus?', anchor: 'good-prompt' },
        { label: 'Welche Ausgabeformat-Regeln gelten für jedes Modell?', anchor: 'model-rules' },
        { label: 'Welche Sampling-Parameter steuern die Ausgabegenerierung?', anchor: 'sampling-parameters' },
        { label: 'Was ist der Trade-off zwischen Reasoning-Qualität und Formatgarantie?', anchor: 'reasoning-tradeoff' },
        { label: 'Wie schneiden die Top-Modelle bei Ausgabe-Kontrolle ab?', anchor: 'model-comparison' },
        { label: 'Wie unterscheiden sich Stop Sequences und negative Constraints?', anchor: 'stop-sequences' },
        { label: 'Welches Ausgabeformat eignet sich für Produktion?', anchor: 'production-format' },
        { label: 'Globale und regionale Aspekte der Ausgabekontrolle', anchor: 'global-regional' },
        { label: 'Zusammenfassung', anchor: 'key-takeaways' },
        { label: 'KI-Ausgabeformat kontrollieren (Schritt für Schritt)', anchor: 'how-to' },
        { label: 'Häufige Fehler', anchor: 'common-mistakes' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Quellen', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'KI-Ausgaben kontrollieren: JSON-Schema-Compliance, Constrained Decoding und Formatauswahl',
        description: 'LLM-Ausgaben mit JSON-Mode und Constrained Decoding kontrollieren. 100 % Schema-Compliance mit zweistufigen Pipelines ohne Qualitätsverlust. Praxisguide für GPT, Claude und Gemini.',
        url: 'https://www.promptquorum.com/prompt-engineering/control-the-output?lang=de',
        inLanguage: 'de',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/control-the-output?lang=de', width: 1200, height: 630 },
        keywords: ['Ausgabekontrolle', 'Constrained Decoding', 'JSON-Schema', 'Strukturierter Output', 'Temperature', 'Top-P', 'Sampling-Parameter', 'Prompt Engineering'],
        about: [
          { '@type': 'Thing', name: 'Constrained Decoding' },
          { '@type': 'Thing', name: 'JSON-Schema-Compliance' },
          { '@type': 'Thing', name: 'Sampling-Parameter' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist der Unterschied zwischen Temperature und Top-P in LLMs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature (T) skaliert die gesamte Softmax-Wahrscheinlichkeitsverteilung der nächsten Token-Vorhersagen: T = 0,0 wählt immer den Token mit der höchsten Wahrscheinlichkeit (deterministisch); T = 1,0 erhält die natürliche Verteilung; T = 2,0 flacht sie in Richtung Zufälligkeit ab. Top-P (Nucleus Sampling) wählt dann aus der kleinsten Menge von Tokens, deren kumulierte Wahrscheinlichkeit P erreicht — bei Top-P = 0,9 ist nur die oberste kumulative Wahrscheinlichkeitsmasse von 90 % zulässig. Beide Parameter steuern unterschiedliche Aspekte der Generierung und sollten nicht gleichzeitig auf hohe Werte gesetzt werden, da sie erratischen Output verstärken.' },
          },
          {
            '@type': 'Question',
            name: 'Verringert erzwungene JSON-Ausgabe die KI-Antwortqualität?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja – messbar. BAMLs Benchmark auf BFCL zeigte: schemaausgerichtetes Freitext-Parsing erreichte 93,63 % Genauigkeit gegenüber 91,37 % für OpenAIs Constrained Decoding (Strict Function Calling) – ein Qualitätsverlust von 2,26 Prozentpunkten. Der Mechanismus ist Token-Masking: Constrained Decoding verhindert, dass das Modell Tokens wählt, die das Schema verletzen würden. Für komplexe Reasoning-Aufgaben erhält der zweistufige Ansatz (Freitext → spezialisierte Strukturierung) die Qualität bei 100 % Format-Compliance.' },
          },
          {
            '@type': 'Question',
            name: 'Was ist Constrained Decoding und wie garantiert es JSON-Ausgabe?',
            acceptedAnswer: { '@type': 'Answer', text: 'Constrained Decoding wendet einen endlichen Automaten (FSM) auf den Token-Generierungsprozess des Modells an. Bei jedem Generierungsschritt bewertet der FSM, welche Tokens aus dem vollständigen Vokabular eine mit dem Zielschema kompatible Ausgabe an der aktuellen Position erzeugen würden – und maskiert alle anderen Tokens auf Wahrscheinlichkeit null. OpenAI implementiert dies über `response_format: { type: "json_schema", strict: true }`. Anthropic implementiert es über den Strict Tool Use Mode. Beide können gleichzeitig auf Anthropics API ausgeführt werden.' },
          },
          {
            '@type': 'Question',
            name: 'Welches Ausgabeformat sollte ich für produktive LLM-Pipelines verwenden?',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON ist der Standard für produktive LLM-Pipelines, da es direkt auf typisierte API-Objekte abbildet und von allen wichtigen Anbietern (OpenAI, Anthropic, Google Gemini) nativ unterstützt wird. JSONL für Event-Streams und Batch-Verarbeitung. CSV nur für Legacy-Systemintegration. Die empfohlene Architektur 2026: TOON für Input-Token-Effizienz + JSON mit Constrained Decoding ausschließlich für Stage-2-Ausgabe nach freiem Stage-1-Reasoning.' },
          },
          {
            '@type': 'Question',
            name: 'Wie unterscheiden sich Stop Sequences von negativen Constraints in Prompts?',
            acceptedAnswer: { '@type': 'Answer', text: 'Stop Sequences werden auf API-/Inferenzebene durchgesetzt – das Modell stoppt die Generierung in dem Moment, in dem die angegebene Zeichenkette generiert wird, ohne Ausnahmen. Negative Constraints im Prompt-Body ("Keine Erklärungen", "Kein Markdown") weisen das Modell an, bestimmte Ausgaben zu vermeiden, sind aber nicht bindend. Beide einsetzen: Stop Sequences für strukturelle Abbruchgarantien, negative Constraints für die inhaltliche Formgebung.' },
          },
          {
            '@type': 'Question',
            name: 'Muss ich bei der Verwendung von Constrained Decoding die DSGVO beachten?',
            acceptedAnswer: { '@type': 'Answer', text: 'Bei der Verarbeitung personenbezogener Daten in LLM-Pipelines gilt DSGVO Artikel 28 (Auftragsverarbeitung), wenn ein Drittanbieter wie OpenAI oder Anthropic als Auftragsverarbeiter eingesetzt wird. Constrained Decoding selbst ist datenschutzneutral — entscheidend ist, welche Daten in den Input-Prompts enthalten sind. Für DSGVO-konforme Ausgaben mit garantierter JSON-Schema-Compliance empfehlen die BSI-Grundschutz-Kataloge den Einsatz lokal betriebener Modelle (z. B. Mistral Large via vLLM mit guided JSON-Parametern). Dies entspricht DSGVO Artikel 46 (Datentransfers) und Artikel 25 (Privacy by Design).' },
          },
          {
            '@type': 'Question',
            name: 'Ist strukturierte KI-Ausgabe für den deutschen Mittelstand geeignet?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja – strukturierte LLM-Ausgaben sind besonders relevant für mittelständische Unternehmen, die Datenpipelines für ERP-Integration, Dokumentenverarbeitung oder Kundenservice-Automatisierung aufbauen. Die BSI-Grundschutz-Kataloge empfehlen für KI-gestützte Verarbeitung eine klare Trennung der Verarbeitungsschichten — der zweistufige Ansatz (Reasoning → Strukturierung) entspricht diesem Sicherheitsmodell. Für DACH-Unternehmen mit Datenschutzanforderungen bieten Mistral Large (on-premise, EU-Hosting) und Ollama (lokal) vollständige Datenkontrolle bei 100 % Schema-Compliance.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'de',
        name: 'KI-Ausgaben kontrollieren: Kernthemen',
        description: 'Kernkonzepte zur Steuerung strukturierter Ausgaben von KI-Modellen',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Die drei Ebenen der Ausgabekontrolle', description: 'Prompt-basierte, schema-basierte und Constrained-Decoding-Ansätze mit ihren Trade-offs' },
          { '@type': 'ListItem', position: 2, name: 'Ausgabeformat-Kontrolle per Prompt Engineering', description: 'Modellspezifische Techniken für JSON-Compliance ohne Constrained Decoding' },
          { '@type': 'ListItem', position: 3, name: 'Sampling-Parameter', description: 'Temperature, Top-P, Top-K, max_tokens und Penalty-Parameter erklärt' },
          { '@type': 'ListItem', position: 4, name: 'Der Reasoning-Format-Trade-off', description: 'Genauigkeitsverlust durch Constrained Decoding und zweistufige Lösungen' },
          { '@type': 'ListItem', position: 5, name: 'Stop Sequences und Constraints', description: 'API-Level-Constraints und negative Anweisungen zur Steuerung von Ausgabegrenzen' },
        ],
      },
      sections: {

        definition: {
          title: 'Was sind die drei Ebenen der Ausgabekontrolle?',
          content: [
            'Ausgabekontrolle funktioniert auf drei unterschiedlichen Ebenen — prompt-basiert, schema-basiert und Constrained Decoding — wobei jede Ebene progressiv stärkere Formatgarantien bei progressiv höheren Trade-offs gegenüber der Reasoning-Qualität bietet.',
            'Prompt-basierte Formatierung weist das Modell durch natürliche Sprache an ("Return JSON with fields: name, email, score"). Dies funktioniert in 80–95 % der Fälle, schlägt aber bei Sonderfällen lautlos fehl, ohne Typgarantien, und erfordert Fehlerbehandlung für die 5–20 % fehlerhafter Antworten. Schema-basierte Ansätze (Function Calling / Tool Use) definieren die Ausgabestruktur formal bei 95–99 % Compliance — das Schema bleibt jedoch ein starker Hinweis, keine absolute Einschränkung. Natives Constrained Decoding verwendet endliche Automaten, um ungültige Tokens zur Generierungszeit zu maskieren und produziert 100 % schema-valide Ausgaben mit mathematischer Sicherheit.',
            'Der zweistufige Ansatz — Claude Opus 4.7 (Anthropic) oder GPT-5.5 (OpenAI) in Stage 1 frei denken lassen, dann die Ausgabe in Stage 2 an ein kleines Spezialisierungsmodell (Osmosis-Structure-0.6B, trainiert auf 500.000 synthetischen unstrukturierten → strukturierten Transformationen) übergeben — erreicht Formatgarantien ohne den Reasoning-Qualitätsverlust von Constrained Decoding.',
            'In einem Satz: Passen Sie den Grad der Ausgabeeinschränkung an die Aufgabe an — verwenden Sie Constrained Decoding nur, wenn Formatkorrektheit wichtiger ist als Reasoning-Tiefe.',
          ],
          columns: ['Ebene', 'Compliance-Rate', 'Reasoning-Einfluss', 'Am besten geeignet für'],
          rows: [
            { 'Ebene': 'Prompt-basiert ("return JSON")', 'Compliance-Rate': '80–95 %', 'Reasoning-Einfluss': 'Keiner', 'Am besten geeignet für': 'Prototyping; einfache Pipelines' },
            { 'Ebene': 'Function Calling / Tool Use', 'Compliance-Rate': '95–99 %', 'Reasoning-Einfluss': 'Minimal', 'Am besten geeignet für': 'Die meisten Produktionsanwendungen' },
            { 'Ebene': 'Natives Constrained Decoding (strict)', 'Compliance-Rate': '100 %', 'Reasoning-Einfluss': '2–10 % Qualitätsverlust', 'Am besten geeignet für': 'Datenextraktion; hochvolumige Pipelines' },
            { 'Ebene': 'Zweistufig (Freitext → Spezialisierungsmodell)', 'Compliance-Rate': '~100 %', 'Reasoning-Einfluss': 'Keiner', 'Am besten geeignet für': 'Komplexes Reasoning + garantiertes Format' },
          ],
          tableFormat: true,
        },

        promptStructure: {
          title: 'Wie steuert man das Ausgabeformat per Prompt Engineering?',
          content: [
            'Explizite Ausgabeschema-Anweisungen — am Anfang des System-Prompts für Claude Opus 4.7 und unmittelbar vor dem User-Content für GPT-5.5 platziert — erzielen Compliance-Raten für strukturierten Output von 85–95 % ohne den Reasoning-Qualitätsverlust von nativem Constrained Decoding.',
            'Claude Opus 4.7 (Anthropic) reagiert am besten auf Ausgabeformat-Anweisungen am Anfang des System-Prompts mit XML-ähnlichen Abschnittsbezeichnungen. GPT-5.5 (OpenAI) liefert die besten Ergebnisse, wenn das Schema unmittelbar vor dem User-Content mit nummerierten Format-Regeln platziert wird. Gemini 3.1 Pro (Google DeepMind) produziert die zuverlässigste strukturierte Ausgabe, wenn das Schema sowohl am Anfang als auch am Ende des Prompts wiederholt wird.',
          ],
        },

        badPrompt: {
          content: ['**Schlechter Prompt — unstrukturiert, ohne Formatvorgabe:**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: 'Wie sieht ein guter Structured-Output-Prompt aus (Claude Opus 4.7)?',
          content: ['**Guter Prompt — Claude Opus 4.7**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'Der XML-strukturierte Prompt verankert den Ausgabeformat-Vertrag und bewahrt gleichzeitig freies Reasoning im `<task>`-Block. Kein Constrained Decoding erforderlich — Claude Opus 4.7 hält sich in über 93 % der Produktionsanfragen mit dieser Struktur daran.',
          ],
        },

        goodPromptGPT: {
          title: 'Wie sieht ein guter Structured-Output-Prompt aus (GPT-5.5)?',
          content: ['**Guter Prompt — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },

        modelRules: {
          title: 'Welche Ausgabeformat-Regeln gelten für jedes Modell?',
          content: ['Jedes große LLM hat unterschiedliche strukturelle Präferenzen für die Ausgabeformat-Compliance:'],
          items: [
            '**Claude Opus 4.7 (Anthropic)** — XML-Tags (`<output>`, `<format>`, `<constraints>`); Schema am Anfang; "Gib nur das JSON aus, nichts anderes"',
            '**GPT-5.5 (OpenAI)** — Nummerierte Format-Regeln; Schema nach der Hauptanweisung; "Antworte mit gültigem JSON. Keine Markdown-Fences. Keine Erklärung."',
            '**Gemini 3.1 Pro (Google DeepMind)** — Prägnantes, explizites Schema am Anfang und Ende; One-Shot-Beispiel des gewünschten Ausgabeformats direkt im Prompt',
            '**Lokale Modelle via Ollama** (LLaMA 3.1 7B, Mistral) — Empfindlicher gegenüber Format-Drift; ein One-Shot-Formatbeispiel direkt im Prompt ist für zuverlässige JSON-Ausgabe erforderlich',
          ],
        },

        parameters: {
          title: 'Welche Sampling-Parameter steuern die Ausgabegenerierung?',
          content: [
            'Temperature (T), Top-P, Top-K, max_tokens, frequency_penalty und presence_penalty sind sechs unabhängige Parameter, die gemeinsam Ausgabelänge, Zufälligkeit und Wiederholung bestimmen — und konsistent, nicht im Widerspruch, gesetzt werden müssen.',
            'Temperature (T) skaliert die Softmax-Ausgabeverteilung: Bei T = 0,0 wählt das Modell immer den Token mit der höchsten Wahrscheinlichkeit (deterministisch); bei T = 2,0 ist die Verteilung nahezu flach und die Ausgabe wird inkohärent. Top-P (Nucleus Sampling) wählt aus der kleinsten Menge von Tokens, deren kumulierte Wahrscheinlichkeit P erreicht — bei Top-P = 0,9 berücksichtigt das Modell nur Tokens, die die obere 90 %ige Wahrscheinlichkeitsmasse abdecken. Top-K beschränkt die Generierung auf die K wahrscheinlichsten Tokens in jedem Schritt; Top-K = 1 entspricht Greedy Decoding.',
            'Die Softmax-mit-Temperature-Formel: P(Token) = exp(logit / T) / sum(exp(logits / T)). Wenn T gegen 0 geht, nähert sich der Token mit dem höchsten Logit der Wahrscheinlichkeit 1,0. Wenn T gegen unendlich geht, nähern sich alle Tokens der gleichen Wahrscheinlichkeit.',
          ],
          columns: ['Parameter', 'Wertebereich', 'Fokussiert / Sachlich', 'Kreativ / Vielfältig'],
          rows: [
            { 'Parameter': 'Temperature (T)', 'Wertebereich': '0,0–2,0', 'Fokussiert / Sachlich': '0,0–0,3', 'Kreativ / Vielfältig': '0,7–1,0' },
            { 'Parameter': 'Top-P', 'Wertebereich': '0,0–1,0', 'Fokussiert / Sachlich': '0,3–0,5', 'Kreativ / Vielfältig': '0,9–1,0' },
            { 'Parameter': 'Top-K', 'Wertebereich': '1–Vokabulargröße', 'Fokussiert / Sachlich': '10–20', 'Kreativ / Vielfältig': '50–100' },
            { 'Parameter': 'max_tokens', 'Wertebereich': 'aufgabenabhängig', 'Fokussiert / Sachlich': '256–512', 'Kreativ / Vielfältig': '2.048–8.192' },
            { 'Parameter': 'frequency_penalty', 'Wertebereich': '-2,0 bis 2,0', 'Fokussiert / Sachlich': '0,3–0,5 (Wiederholung reduzieren)', 'Kreativ / Vielfältig': '0,0–0,2' },
            { 'Parameter': 'presence_penalty', 'Wertebereich': '-2,0 bis 2,0', 'Fokussiert / Sachlich': '0,0–0,2', 'Kreativ / Vielfältig': '0,5–0,8' },
          ],
          tableFormat: true,
        },

        parameterWarning: {
          content: [
            '**Kritische Regel:** Setzen Sie Temperature und Top-P nicht gleichzeitig auf hohe Werte. Temperature skaliert zuerst die gesamte Verteilung; Top-P entnimmt dann aus der bereits skalierten oberen Wahrscheinlichkeitsmasse. Die Kombination T = 1,5 und Top-P = 0,95 produziert erratischere Ausgaben als jeder Parameter allein — die beiden Parameter sind als Alternativen konzipiert, nicht zum Stapeln.',
            '`frequency_penalty` reduziert die Wahrscheinlichkeit von Tokens proportional zur Häufigkeit ihres bisherigen Auftretens — positive Werte beseitigen repetitive Formulierungen; negative Werte fördern aktiv Wiederholungen. `presence_penalty` wendet eine einmalige Pauschalstrafe auf jeden Token an, der bisher aufgetreten ist, unabhängig von der Häufigkeit — es drängt das Modell dazu, neues Vokabular und neue Themen einzuführen, anstatt bestehende zu wiederholen.',
          ],
        },

        reasoningTradeoff: {
          title: 'Was ist der Trade-off zwischen Reasoning-Qualität und Ausgabe-Formatgarantien?',
          content: [
            'Das Erzwingen von JSON via Constrained Decoding reduziert die Modellgenauigkeit um 2,26 Prozentpunkte auf Function-Calling-Benchmarks — BAMLs schema-ausgerichtetes Parsing erreichte 93,63 % Genauigkeit auf BFCL gegenüber 91,37 % für OpenAIs striktes Constrained Decoding auf dem gleichen Benchmark.',
            'Der Mechanismus: Constrained Decoding wendet einen endlichen Automaten an, der Tokens maskiert, die mit der aktuellen Schemaposition inkompatibel sind. Ein Modell, das `51,7` für ein Float-Feld ausgeben möchte, wird zur Ausgabe von `51` gezwungen, wenn das Schema Integer vorschreibt — ein technisch valides, aber faktisch degradiertes Ergebnis. Chain-of-Thought (CoT) Prompting ist auf dieselbe Weise mit Constrained Decoding inkompatibel: Das Einschließen eines Reasoning-Feldes zwingt das Modell, Zeilenumbrüche, Anführungszeichen und Sonderzeichen innerhalb eines JSON-Strings zu escapen — was die Reasoning-Qualität bei allen getesteten Modellen messbar verschlechtert.',
            'Die produktionsreife Lösung für Systeme, die sowohl Reasoning-Tiefe als auch Formatgarantien benötigen: (1) **Stage 1** — An GPT-5.5 oder Claude Opus 4.7 ohne Einschränkungen senden: "Analysieren Sie dies, denken Sie schrittweise, erklären Sie Ihre Logik." (2) **Stage 2** — Stage-1-Ausgabe an ein kleines Spezialisierungsmodell (Osmosis-Structure-0.6B oder GPT-5.5-mini mit `strict: true`) übergeben: "Extrahieren Sie die Schlüsseldaten aus dieser Analyse und geben Sie sie in diesem exakten JSON-Schema zurück."',
            'Diese Architektur erhält die Stage-1-Reasoning-Qualität und erreicht 100 % Format-Compliance in Stage 2 zu einem Bruchteil der Kosten des Betriebs eines vollständigen Frontier-Modells im Constrained-Modus.',
          ],
        },

        promptquorumTest: {
          title: 'Wie schneiden die Top-Modelle bei der Ausgabe-Kontrolle ab?',
          content: [
            'Getestet in [PromptQuorum](https://www.promptquorum.com/) — 30 Ausgabekontroll-Prompts über drei Modelle verteilt: Claude Opus 4.7 erreichte 93 % JSON-Compliance mit XML-getaggten Format-Anweisungen ohne Constrained Decoding. GPT-5.5 erreichte 89 % Compliance mit nummerierten Format-Regeln. Gemini 3.1 Pro erreichte 91 % Compliance, wenn das Schema sowohl am Anfang als auch am Ende angegeben wurde. Alle drei Modelle produzierten kürzere, weniger vollständige Reasoning-Antworten, wenn `strict: true` Constrained Decoding aktiviert war — konsistent mit dem auf dem BFCL-Benchmark beobachteten 2,26-Punkte-Genauigkeitsverlust.',
          ],
        },

        stopSequences: {
          title: 'Wie unterscheiden sich Stop Sequences und negative Constraints?',
          content: [
            'Stop Sequences — Tokens, die die Modellausgabe bei Generierung sofort beenden — sind der deterministischste Ausgabekontrollmechanismus: Das Modell stoppt in dem Moment, in dem die angegebene Zeichenkette erscheint, unabhängig vom verbleibenden Kontext.',
            'Stop Sequences werden als String-Array im API-Aufruf übergeben (`stop`-Parameter bei OpenAI, `stop_sequences` bei Anthropic). Häufige Produktionsanwendungen:',
          ],
          items: [
            '`["###"]` — beendet die Generierung nach einem strukturierten Abschnittsmarker und verhindert die Fortsetzung in irrelevante Inhalte',
            '`["</output>"]` — beendet nach einem schließenden XML-Tag und stellt sicher, dass nur der getaggte Inhalt zurückgegeben wird',
            '`["\\n\\n"]` — begrenzt die Ausgabe auf einen einzelnen Absatz für Klassifizierungs- oder Kurzantwort-Aufgaben',
            '`["Human:", "User:"]` — verhindert, dass das Modell eine simulierte Gesprächsfortsetzung halluziniert',
          ],
        },

        stopSequencesConclusion: {
          content: [
            'Negative Constraints im Prompt-Body — "Keine Erklärungen einfügen", "Kein Markdown", "Keine einleitenden Sätze hinzufügen" — reduzieren unerwünschte Ausgabemuster, können aber keine Compliance garantieren wie Stop Sequences. Beide verwenden: Stop Sequences für strukturelle Abbrüche, negative Constraints für die inhaltliche Formgebung.',
          ],
        },

        formatChoices: {
          title: 'Welches Ausgabeformat eignet sich für produktive Pipelines?',
          content: [
            'JSON ist das dominante Ausgabeformat für LLM-Produktionspipelines, da es direkt auf API-Objekte, Arrays und typisierte Daten abbildet — aber das Erzwingen von JSON via Constrained Decoding opfert 2–10 % Reasoning-Qualität, was die Formatauswahl zu einer bedeutsamen Architekturentscheidung macht.',
            'TOON (Token-Optimised Output Notation) hat sich als effizientes Eingabeformat für lange strukturierte Prompts etabliert — es nutzt Whitespace-Minimierung und Kurzschlüssel, um den Input-Token-Verbrauch zu reduzieren, bevor das Modell die Ausgabe in JSON generiert. Für Ausgaben ist die empfohlene Produktionsarchitektur 2026: TOON für Eingabe (Token-Effizienz) + JSON mit Constrained Decoding für Ausgabe (garantiertes Format) — nur nach Abschluss des Stage-1-Freitext-Reasonings angewendet.',
          ],
          columns: ['Ausgabeformat', 'Anwendungsfall', 'Hinweise'],
          rows: [
            { 'Ausgabeformat': 'JSON', 'Anwendungsfall': 'APIs, Pipelines, Dokumentenspeicher', 'Hinweise': 'Native Unterstützung strukturierter Ausgaben bei allen wichtigen Anbietern' },
            { 'Ausgabeformat': 'JSONL', 'Anwendungsfall': 'Event-Streams, Batch-Verarbeitung', 'Hinweise': 'Ein JSON-Objekt pro Zeile; geeignet für Streaming und Logging' },
            { 'Ausgabeformat': 'CSV', 'Anwendungsfall': 'Legacy-System-Integration', 'Hinweise': 'Einfacher, aber keine verschachtelte Struktur; gut für tabellarische Daten' },
            { 'Ausgabeformat': 'YAML', 'Anwendungsfall': 'Konfigurationsartefakte', 'Hinweise': 'Menschenlesbar; eingesetzt in CI/CD- und Infrastruktur-Kontexten' },
            { 'Ausgabeformat': 'XML', 'Anwendungsfall': 'Enterprise-Integration', 'Hinweise': 'Weitschweifig; von Claude als Prompt-Strukturformat bevorzugt, nicht als Ausgabe' },
            { 'Ausgabeformat': 'Markdown', 'Anwendungsfall': 'Menschenlesbare Berichte, Dokumentation', 'Hinweise': 'Schlecht für nachgelagerte Verarbeitung; am besten für menschliche Leser' },
          ],
          tableFormat: true,
        },

        globalContext: {
          title: 'Globale und regionale Aspekte der Ausgabekontrolle',
          content: [
            'Europäische Unternehmen, die LLM-Pipelines zur Verarbeitung personenbezogener Daten aufbauen, müssen DSGVO Artikel 25 (Privacy by Design) auf das Ausgabeschema-Design anwenden — Ausgaben, die personenbezogene Datenfelder in JSON-Payloads offenlegen, erfordern eine Rechtsgrundlage nach Artikel 6 DSGVO. Die CNIL (Frankreichs Datenschutzbehörde) hat im Januar 2026 Leitlinien herausgegeben, nach denen automatisierte Entscheidungsausgaben — einschließlich strukturierter LLM-Ausgaben, die in Scoring- oder Berechtigungs-Workflows verwendet werden — möglicherweise Rechte auf menschliche Überprüfung nach Artikel 22 DSGVO auslösen.',
            'Für EU-Teams mit Anforderungen an On-Premise-Inferenz mit strukturierter Ausgabekontrolle unterstützt Mistral AI (Frankreich) vLLM-basiertes Constrained Decoding mit guided JSON-Parametern — das eine garantierte JSON-Schema-Compliance vollständig innerhalb der EU-Infrastruktur ermöglicht und die DSGVO-Anforderungen an den Datentransfer nach Artikel 46 erfüllt. In Deutschland und der DACH-Region empfehlen die BSI-Grundschutz-Kataloge für KI-gestützte Produktivpipelines eine klare Trennung der Verarbeitungsschichten — der zweistufige Ansatz (Reasoning → Strukturierung) entspricht diesem Sicherheitsmodell. Mistral Large läuft on-premise mit Unterstützung für strukturierten Output.',
            'Chinesische Unternehmen nutzen Qwen 2.5 (Alibaba) und DeepSeek V3 (DeepSeek AI) für produktive, ausgabekontrollierte Pipelines. Beide Modelle unterstützen JSON-Mode und sind auf chinesischer Enterprise-Infrastruktur lokal einsetzbar gemäß den Interimmaßnahmen für generative KI Chinas (2023). Japanische Unternehmen, die lokale Inferenz via Ollama betreiben — LLaMA 3.1 7B bei 8 GB RAM, LLaMA 3.1 13B bei 16 GB RAM — profitieren von Outlines und XGrammar für Constrained Decoding auf selbst gehosteten Modellen und erreichen so garantierte JSON-Schema-Compliance ohne externe API-Aufrufe.',
          ],
        },

        tldr: {
          title: 'Zusammenfassung',
          isTldr: true,
          items: [
            'Bevor strukturierter Output existierte, schafften Modelle weniger als 40 % bei komplexer JSON-Schema-Compliance; OpenAIs `strict: true` Constrained Decoding erreicht 100 %',
            'Constrained Decoding reduziert die Reasoning-Genauigkeit auf BFCL-Benchmarks um 2,26 Prozentpunkte — für komplexe Aufgaben den zweistufigen Ansatz verwenden (Freitext-Reasoning → Spezialisierungsmodell)',
            'Temperature und Top-P nicht gleichzeitig auf hohe Werte setzen — sie verstärken sich zu erratischeren Ausgaben als jeder Parameter allein',
            '`frequency_penalty`: Bereich -2,0 bis 2,0 reduziert frequenzproportionale Wiederholungen; `presence_penalty`: Bereich -2,0 bis 2,0 wendet eine Pauschalstrafe auf jeden bereits gesehenen Token an — beide bei 0,3–0,5 für fokussierten sachlichen Output',
            'Stop Sequences sind der einzige deterministische Ausgabe-Abbruchmechanismus — im Gegensatz zu negativen Constraints im Prompt-Body können sie vom Modell nicht überschrieben werden',
            'Temperature-Bereiche: T = 0,0–0,3 für deterministische sachliche Aufgaben; T = 0,7–1,0 für kreative Aufgaben; T > 1,2 riskiert Inkohärenz im Produktionseinsatz',
            'Claude Opus 4.7 erreicht 93 % JSON-Compliance mit XML-getaggten Format-Prompts; GPT-5.5 erreicht 89 % mit nummerierten Format-Regeln — beide ohne Constrained Decoding',
          ],
        },

        commonMistakes: {
          title: 'Häufige Fehler bei der Ausgabekontrolle',
          mistakes: [
            {
              mistake: 'Temperature und Top-P gleichzeitig auf hohe Werte setzen',
              problem: 'Sie verstärken sich — T=1,5 + Top-P=0,95 produziert erratischere Ausgaben als jeder Parameter allein.',
              fix: 'Verwenden Sie einen der beiden als primäre Zufälligkeitskontrolle, nicht beide gleichzeitig.'
            },
            {
              mistake: 'JSON bei komplexen Reasoning-Aufgaben erzwingen',
              problem: 'Constrained Decoding senkt die Genauigkeit um 2–10 %. Das Modell opfert Reasoning-Qualität, um Schema-Compliance aufrechtzuerhalten.',
              fix: 'Verwenden Sie stattdessen den zweistufigen Ansatz: zuerst freies Reasoning, dann strukturierte Extraktion.'
            },
            {
              mistake: '"return JSON" schreiben, ohne das exakte Schema anzugeben',
              problem: 'Das Modell rät Feldnamen, Typen und Verschachtelungstiefe — und produziert ungültiges oder fehlerhaftes JSON.',
              fix: 'Geben Sie immer das vollständige Schema mit Feldtypen und Enum-Werten an.'
            },
            {
              mistake: 'Für kritische Formatierung auf negative Prompt-Body-Constraints setzen',
              problem: '"Kein Markdown" kann vom Modell ignoriert werden, besonders bei hoher Temperature.',
              fix: 'Stop Sequences auf API-Ebene verwenden — sie sind der einzige deterministische Abbruchmechanismus.'
            },
            {
              mistake: 'Temperature-Einstellungen zwischen Modellen kopieren',
              problem: 'T=0,7 bei GPT-5.5 und T=0,7 bei Claude erzeugen unterschiedliche Wahrscheinlichkeitsverteilungen.',
              fix: 'Jede Parametereinstellung pro Modell in der Produktionspipeline testen.'
            }
          ],
        },

        relatedReading: {
          title: 'Weiterführende Lektüre',
          items: [
            '[Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=de) — Grundprinzipien hinter strukturiertem KI-Instruktionsdesign',
            '[Temperature und Top-P erklärt](/prompt-engineering/temperature-and-top-p?lang=de) — Tiefenanalyse der beiden primären Zufälligkeitsparameter',
            '[Besseren Code mit KI schreiben](/prompt-engineering/write-better-code-with-ai?lang=de) — Ausgabekontrolltechniken in Code-Generierungs-Workflows anwenden',
            '[Tool Use und Function Calling](/prompt-engineering/tool-use-and-function-calling?lang=de) — Strukturierter Output via Tool-Definitionen und Funktionsschemata',
            '[Tokens & Token Economics](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=de) — Token-Kosten für Constrained Decoding und zweistufige Pipelines verstehen',
            '[Fehlerbehandlung in LLM-Anwendungen](/prompt-engineering/error-handling-llm?lang=de) — Fehlerhaften Output in Produktionssystemen erkennen und beheben',
          ],
        },

        howToStart: {
          title: 'KI-Ausgabeformat kontrollieren',
          numberedItems: [
            '**Geben Sie das gewünschte Ausgabeformat immer explizit im Prompt an.** Statt "Fassen Sie dies zusammen" sagen Sie: "Fassen Sie als Aufzählungsliste mit 5–7 Punkten zusammen, je 1–2 Sätze. Verwenden Sie Aktivsätze. Keine Meinungen." Seien Sie spezifisch über die Struktur: Aufzählungen, Tabellen, JSON, Markdown, Klartext.',
            '**Verwenden Sie JSON Schema zur Durchsetzung strukturierter Ausgaben, wenn verfügbar (OpenAI, Anthropic).** Wenn Sie Daten extrahieren oder maschinenlesbare Inhalte generieren, definieren Sie das Schema: Feldnamen, Typen, Pflichtfelder, Enum-Constraints. Das Modell formatiert die Ausgabe automatisch entsprechend.',
            '**Zeigen Sie ein Beispiel des exakten Ausgabeformats, das Sie wünschen.** Zeigen Sie dem Modell ein konkretes Beispiel: \'Formatieren Sie wie folgt: { "topic": "...", "key_points": [...], "confidence": "high|medium|low" }.\' Beispiele sind mächtiger als Beschreibungen allein.',
            '**Verwenden Sie constraint-basierte Sprache: "Sie müssen X, Sie dürfen nicht Y, immer Z."** Vermeiden Sie weiche Formulierungen ("versuchen Sie", "streben Sie an"). Sagen Sie: "Geben Sie genau 3 Schritte zurück, nicht mehr und nicht weniger. Verwenden Sie keine Fachterminologie. Fügen Sie immer eine Warnung hinzu, wenn die Empfehlung Einschränkungen hat."',
            '**Testen Sie Ihre Ausgabeformat-Spezifikation an einem Beispiel, bevor Sie sie skaliert einsetzen.** Generieren Sie eine Ausgabe, prüfen Sie, ob sie Ihrer Spezifikation entspricht, passen Sie den Prompt bei Bedarf an. So vermeiden Sie, Formatierungsprobleme erst nach der Verarbeitung von 100 Elementen zu entdecken.',
          ],
        },

        faq: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Was ist der Unterschied zwischen Temperature und Top-P in LLMs?',
              a: 'Temperature (T) skaliert die gesamte Softmax-Wahrscheinlichkeitsverteilung der nächsten Token-Vorhersagen: T = 0,0 wählt immer den Token mit der höchsten Wahrscheinlichkeit (deterministisch); T = 1,0 erhält die natürliche Verteilung; T = 2,0 flacht sie in Richtung Zufälligkeit ab. Top-P (Nucleus Sampling) wählt dann aus der kleinsten Menge von Tokens, deren kumulierte Wahrscheinlichkeit P erreicht — bei Top-P = 0,9 ist nur die oberste kumulative Wahrscheinlichkeitsmasse von 90 % zulässig. Beide Parameter steuern unterschiedliche Aspekte und sollten nicht gleichzeitig auf hohe Werte gesetzt werden.',
            },
            {
              q: 'Verringert erzwungene JSON-Ausgabe die KI-Antwortqualität?',
              a: 'Ja — messbar. BAMLs Benchmark auf BFCL zeigte: schemaausgerichtetes Freitext-Parsing erreichte 93,63 % Genauigkeit gegenüber 91,37 % für OpenAIs Constrained Decoding — ein Qualitätsverlust von 2,26 Prozentpunkten. Der Mechanismus ist Token-Masking: Constrained Decoding verhindert, dass das Modell Tokens wählt, die das Schema verletzen würden. Für komplexe Reasoning-Aufgaben erhält der zweistufige Ansatz (Freitext → spezialisierte Strukturierung) die Qualität bei 100 % Format-Compliance.',
            },
            {
              q: 'Was ist Constrained Decoding und wie garantiert es JSON-Ausgabe?',
              a: 'Constrained Decoding wendet einen endlichen Automaten (FSM) auf den Token-Generierungsprozess des Modells an. Bei jedem Schritt bewertet der FSM, welche Tokens eine schemakompatible Ausgabe an der aktuellen Position erzeugen — und maskiert alle anderen auf Wahrscheinlichkeit null. Das macht es mathematisch unmöglich, schema-invalide Ausgaben zu generieren. OpenAI implementiert dies via `response_format: { type: "json_schema", strict: true }`. Anthropic via Strict Tool Use Mode.',
            },
            {
              q: 'Welches Ausgabeformat sollte ich für produktive LLM-Pipelines verwenden?',
              a: 'JSON ist der Standard für produktive LLM-Pipelines, da es direkt auf typisierte API-Objekte abbildet und von allen wichtigen Anbietern (OpenAI, Anthropic, Google Gemini) nativ unterstützt wird. JSONL für Event-Streams und Batch-Verarbeitung. CSV nur für Legacy-Systemintegration. Die empfohlene Architektur 2026: TOON für Input-Token-Effizienz + JSON mit Constrained Decoding ausschließlich für Stage-2-Ausgabe nach freiem Stage-1-Reasoning.',
            },
            {
              q: 'Wie unterscheiden sich Stop Sequences von negativen Constraints in Prompts?',
              a: 'Stop Sequences werden auf API-/Inferenzebene durchgesetzt — das Modell stoppt die Generierung in dem Moment, in dem die angegebene Zeichenkette generiert wird, ohne Ausnahmen. Negative Constraints im Prompt-Body ("Keine Erklärungen", "Kein Markdown") weisen das Modell an, bestimmte Ausgaben zu vermeiden, sind aber nicht bindend. Beide einsetzen: Stop Sequences für strukturelle Abbruchgarantien, negative Constraints für die inhaltliche Formgebung.',
            },
            {
              q: 'Muss ich bei der Verwendung von Constrained Decoding die DSGVO beachten?',
              a: 'Bei der Verarbeitung personenbezogener Daten in LLM-Pipelines gilt DSGVO Artikel 28 (Auftragsverarbeitung), wenn ein Drittanbieter wie OpenAI oder Anthropic als Auftragsverarbeiter eingesetzt wird. Constrained Decoding selbst ist datenschutzneutral — entscheidend ist, welche Daten in den Input-Prompts enthalten sind. Für DSGVO-konforme Ausgaben mit garantierter JSON-Schema-Compliance empfehlen die BSI-Grundschutz-Kataloge den Einsatz lokal betriebener Modelle (z. B. Mistral Large via vLLM). Dies entspricht DSGVO Artikel 46 (Datentransfers) und Artikel 25 (Privacy by Design).',
            },
            {
              q: 'Ist strukturierte KI-Ausgabe für den deutschen Mittelstand geeignet?',
              a: 'Ja — strukturierte LLM-Ausgaben sind besonders relevant für mittelständische Unternehmen, die Datenpipelines für ERP-Integration, Dokumentenverarbeitung oder Kundenservice-Automatisierung aufbauen. Die BSI-Grundschutz-Kataloge empfehlen für KI-gestützte Verarbeitung eine klare Trennung der Verarbeitungsschichten — der zweistufige Ansatz (Reasoning → Strukturierung) entspricht diesem Sicherheitsmodell. Für DACH-Unternehmen mit Datenschutzanforderungen bieten Mistral Large (on-premise, EU-Hosting) und Ollama (lokal) vollständige Datenkontrolle bei 100 % Schema-Compliance.',
            },
          ],
        },

        sources: {
          title: 'Quellen & Weiterführende Literatur',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — offizielle Dokumentation zu Constrained Decoding, striktem JSON-Mode und Schema-Compliance-Garantien',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — Benchmark: 93,63 % vs. 91,37 % Genauigkeit — schemaausgerichtetes Parsing vs. Constrained Decoding auf BFCL',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — Produktionsarchitektur-Analyse: TOON-Input + Constrained JSON-Output',
          ],
        },

      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Techniques',
      title: 'Contrôler les sorties IA : conformité au schéma JSON, decoding contraint et sélection de format',
      intro: '**Le decoding contraint atteint 100 % de conformité au schéma JSON — aucune sortie malformée. Avant cette technologie, les modèles obtenaient moins de 40 % sur les schémas complexes et échouaient silencieusement sur les cas limites. Le contrôle des sorties est la variable d\'ingénierie qui distingue les prototypes (80 % de succès) des systèmes en production (100 % de fiabilité).**',
      publishDate: '2026-03-24',
      readTime: '10 min de lecture',

      seoTitle: 'Contrôler les sorties IA : JSON Schema et format (2026)',
      metaDescription: 'Contrôler les sorties LLM avec JSON Mode et decoding contraint. 100 % de conformité sans perte de qualité de raisonnement. Guide de production pour GPT, Claude et Gemini.',

      educationalLevel: 'Beginner',
      audience: 'Développeurs construisant des pipelines LLM en production nécessitant des sorties structurées',
      toc: [
        { label: 'Quels sont les trois niveaux de contrôle des sorties ?', anchor: 'three-levels' },
        { label: 'Comment contrôler le format via le prompt engineering ?', anchor: 'prompt-engineering' },
        { label: 'À quoi ressemble un bon prompt de sortie structurée ?', anchor: 'good-prompt' },
        { label: 'Quelles règles de format s\'appliquent à chaque modèle ?', anchor: 'model-rules' },
        { label: 'Quels paramètres d\'échantillonnage contrôlent la génération ?', anchor: 'sampling-parameters' },
        { label: 'Quel est le compromis entre raisonnement et format ?', anchor: 'reasoning-tradeoff' },
        { label: 'Comment les meilleurs modèles se comparent-ils ?', anchor: 'model-comparison' },
        { label: 'Comment stop sequences et contraintes négatives diffèrent-ils ?', anchor: 'stop-sequences' },
        { label: 'Quel format de sortie utiliser en production ?', anchor: 'production-format' },
        { label: 'Considérations mondiales et régionales', anchor: 'global-regional' },
        { label: 'Points clés', anchor: 'key-takeaways' },
        { label: 'Contrôler le format des sorties IA (étape par étape)', anchor: 'how-to' },
        { label: 'Erreurs courantes', anchor: 'common-mistakes' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Sources', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Contrôler les sorties IA : conformité au schéma JSON, decoding contraint et sélection de format',
        description: 'Contrôler les sorties LLM avec JSON Mode et decoding contraint. 100 % de conformité sans perte de qualité. Guide de production pour GPT, Claude et Gemini.',
        url: 'https://www.promptquorum.com/prompt-engineering/control-the-output?lang=fr',
        inLanguage: 'fr',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/control-the-output?lang=fr', width: 1200, height: 630 },
        keywords: ['contrôle des sorties', 'decoding contraint', 'schéma JSON', 'sortie structurée', 'temperature', 'top-p', 'paramètres d\'échantillonnage', 'prompt engineering'],
        about: [
          { '@type': 'Thing', name: 'Decoding contraint' },
          { '@type': 'Thing', name: 'Conformité au schéma JSON' },
          { '@type': 'Thing', name: 'Paramètres d\'échantillonnage' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre Temperature et Top-P dans les LLM ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature (T) redimensionne la distribution de probabilité softmax des prédictions de tokens : T = 0.0 sélectionne toujours le token de plus haute probabilité (déterministe) ; T = 1.0 conserve la distribution naturelle ; T = 2.0 l\'aplatit vers l\'aléatoire. Top-P (nucleus sampling) sélectionne ensuite parmi le plus petit ensemble de tokens dont la probabilité cumulée atteint P — à Top-P = 0.9, seuls les tokens couvrant 90 % de la masse de probabilité cumulative sont éligibles. Ces deux paramètres contrôlent des aspects différents et ne doivent pas être définis simultanément à des valeurs élevées, car ils amplifient les sorties erratiques.' },
          },
          {
            '@type': 'Question',
            name: 'Forcer la sortie JSON réduit-il la qualité des réponses IA ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Oui — de façon mesurable. Le benchmark BAML sur BFCL a montré que le parsing libre aligné sur le schéma atteint 93,63 % de précision contre 91,37 % pour le decoding contraint d\'OpenAI — une réduction de 2,26 points. Le mécanisme est le masquage de tokens : le decoding contraint empêche le modèle de sélectionner des tokens qui violeraient le schéma. Pour les tâches de raisonnement complexes, l\'approche en deux étapes (libre → structuration spécialisée) préserve la qualité tout en atteignant 100 % de conformité.' },
          },
          {
            '@type': 'Question',
            name: 'Qu\'est-ce que le decoding contraint et comment garantit-il la sortie JSON ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Le decoding contraint applique un automate à états finis (FSM) au processus de génération de tokens. À chaque étape, le FSM évalue quels tokens produiraient une sortie compatible avec le schéma cible — et masque tous les autres à probabilité zéro. OpenAI l\'implémente via `response_format: { type: "json_schema", strict: true }`. Anthropic via le Strict Tool Use Mode. Les deux peuvent s\'exécuter simultanément sur l\'API Anthropic.' },
          },
          {
            '@type': 'Question',
            name: 'Quel format de sortie utiliser pour les pipelines LLM en production ?',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON est le standard pour les pipelines LLM en production car il correspond directement aux objets API typés et est nativement supporté par tous les grands fournisseurs (OpenAI, Anthropic, Google Gemini). JSONL pour les flux d\'événements et le traitement par lots. CSV uniquement pour l\'intégration de systèmes legacy. L\'architecture recommandée 2026 : TOON pour l\'efficacité des tokens d\'entrée + JSON avec decoding contraint uniquement pour la sortie de l\'étape 2 après le raisonnement libre de l\'étape 1.' },
          },
          {
            '@type': 'Question',
            name: 'Comment les stop sequences diffèrent-ils des contraintes négatives dans les prompts ?',
            acceptedAnswer: { '@type': 'Answer', text: 'Les stop sequences sont appliquées au niveau API — le modèle arrête la génération dès que la chaîne spécifiée est produite, sans exception. Les contraintes négatives dans le corps du prompt ("Ne pas inclure d\'explications", "Pas de markdown") instruisent le modèle à éviter certaines sorties mais ne sont pas contraignantes. Utiliser les deux : stop sequences pour les garanties d\'arrêt structurel, contraintes négatives pour la mise en forme du contenu.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'fr',
        name: 'Contrôler les sorties IA : thèmes clés',
        description: 'Concepts fondamentaux pour gérer les sorties structurées des modèles IA',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Les trois niveaux de contrôle des sorties', description: 'Approches par prompt, par schéma et decoding contraint avec leurs compromis' },
          { '@type': 'ListItem', position: 2, name: 'Contrôle du format de sortie via les prompts', description: 'Techniques spécifiques à chaque modèle pour la conformité JSON sans decoding contraint' },
          { '@type': 'ListItem', position: 3, name: 'Paramètres d\'échantillonnage', description: 'Temperature, Top-P, Top-K, max_tokens et paramètres de pénalité expliqués' },
          { '@type': 'ListItem', position: 4, name: 'Le compromis raisonnement-format', description: 'Comprendre la réduction de précision du decoding contraint et les solutions en deux étapes' },
          { '@type': 'ListItem', position: 5, name: 'Stop sequences et contraintes', description: 'Utiliser les contraintes au niveau API et les instructions négatives pour contrôler les sorties' },
        ],
      },
      sections: {

        definition: {
          title: 'Quels sont les trois niveaux de contrôle des sorties ?',
          content: [
            'Le contrôle des sorties opère à trois niveaux distincts — par prompt, par schéma et decoding contraint — chacun offrant des garanties de format progressivement plus fortes, au prix de compromis progressivement plus élevés sur la qualité du raisonnement.',
            'Le formatage par prompt instruit le modèle en langage naturel ("Return JSON with fields: name, email, score"). Cela fonctionne dans 80–95 % des cas mais échoue silencieusement sur les cas limites, sans garantie de type, nécessitant une gestion d\'erreurs pour les 5–20 % de réponses malformées. Les approches par schéma (function calling / tool use) définissent formellement la structure de sortie à 95–99 % de conformité — mais le schéma reste une suggestion forte, pas une contrainte absolue. Le decoding contraint natif utilise des automates à états finis pour masquer les tokens invalides lors de la génération, produisant des sorties valides à 100 % avec certitude mathématique.',
            'L\'approche en deux étapes — laisser Claude Opus 4.7 (Anthropic) ou GPT-5.5 (OpenAI) raisonner librement en étape 1, puis passer la sortie à un petit modèle spécialisé (Osmosis-Structure-0.6B, entraîné sur 500 000 transformations synthétiques non structurées → structurées) en étape 2 — atteint les garanties de format sans la pénalité de qualité du decoding contraint.',
            'En un mot : adaptez le niveau de contrainte de sortie à la tâche — utilisez le decoding contraint uniquement quand la correction de format importe plus que la profondeur de raisonnement.',
          ],
          columns: ['Niveau', 'Taux de conformité', 'Impact sur le raisonnement', 'Idéal pour'],
          rows: [
            { 'Niveau': 'Par prompt ("return JSON")', 'Taux de conformité': '80–95 %', 'Impact sur le raisonnement': 'Aucun', 'Idéal pour': 'Prototypage ; pipelines simples' },
            { 'Niveau': 'Function calling / Tool use', 'Taux de conformité': '95–99 %', 'Impact sur le raisonnement': 'Minimal', 'Idéal pour': 'La plupart des applications en production' },
            { 'Niveau': 'Decoding contraint natif (strict)', 'Taux de conformité': '100 %', 'Impact sur le raisonnement': 'Réduction de qualité 2–10 %', 'Idéal pour': 'Extraction de données ; pipelines à fort volume' },
            { 'Niveau': 'Deux étapes (libre → modèle spécialisé)', 'Taux de conformité': '~100 %', 'Impact sur le raisonnement': 'Aucun', 'Idéal pour': 'Raisonnement complexe + format garanti' },
          ],
          tableFormat: true,
        },

        promptStructure: {
          title: 'Comment contrôler le format des sorties via le prompt engineering ?',
          content: [
            'Des instructions de schéma de sortie explicites — placées au début du prompt système pour Claude Opus 4.7 et immédiatement avant le contenu utilisateur pour GPT-5.5 — produisent des taux de conformité de 85–95 % sans la pénalité de qualité du decoding contraint natif.',
            'Claude Opus 4.7 (Anthropic) répond mieux aux instructions de format placées en début de prompt système avec des balises XML. GPT-5.5 (OpenAI) performe mieux avec le schéma placé juste avant le contenu utilisateur sous forme de règles numérotées. Gemini 3.1 Pro (Google DeepMind) produit les sorties structurées les plus fiables quand le schéma est rappelé en début et en fin de prompt.',
          ],
        },

        badPrompt: {
          content: ['**Mauvais prompt — non structuré, sans spécification de format :**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: 'À quoi ressemble un bon prompt de sortie structurée (Claude Opus 4.7) ?',
          content: ['**Bon prompt — Claude Opus 4.7**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'Le prompt structuré XML ancre le contrat de format de sortie tout en préservant le raisonnement libre dans le bloc `<task>`. Aucun decoding contraint requis — Claude Opus 4.7 se conforme dans plus de 93 % des appels en production avec cette structure.',
          ],
        },

        goodPromptGPT: {
          title: 'À quoi ressemble un bon prompt de sortie structurée (GPT-5.5) ?',
          content: ['**Bon prompt — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },

        modelRules: {
          title: 'Quelles règles de format de sortie s\'appliquent à chaque modèle ?',
          content: ['Chaque grand LLM a des préférences structurelles distinctes pour la conformité au format de sortie :'],
          items: [
            '**Claude Opus 4.7 (Anthropic)** — Balises XML (`<output>`, `<format>`, `<constraints>`) ; schéma en tête ; "Retourne uniquement le JSON, rien d\'autre"',
            '**GPT-5.5 (OpenAI)** — Règles de format numérotées ; schéma placé après l\'instruction principale ; "Réponds avec du JSON valide. Pas de markdown. Pas d\'explication."',
            '**Gemini 3.1 Pro (Google DeepMind)** — Schéma concis et explicite en début et fin ; exemple one-shot du format de sortie souhaité directement dans le prompt',
            '**Modèles locaux via Ollama** (LLaMA 3.1 7B, Mistral) — Plus sensibles à la dérive de format ; un exemple one-shot intégré directement dans le prompt est nécessaire pour une sortie JSON fiable',
          ],
        },

        parameters: {
          title: 'Quels paramètres d\'échantillonnage contrôlent la génération de sorties ?',
          content: [
            'Temperature (T), Top-P, Top-K, max_tokens, frequency_penalty et presence_penalty sont six paramètres indépendants qui déterminent conjointement la longueur, l\'aléatoire et la répétition des sorties — et doivent être définis de façon cohérente, sans contradiction.',
            'Temperature (T) redimensionne la distribution softmax : à T = 0.0, le modèle sélectionne toujours le token de plus haute probabilité (déterministe) ; à T = 2.0, la distribution est quasi-plate et la sortie devient incohérente. Top-P (nucleus sampling) sélectionne parmi le plus petit ensemble de tokens dont la probabilité cumulée atteint P — à Top-P = 0.9, le modèle ne considère que les tokens couvrant les 90 % supérieurs de la masse de probabilité. Top-K restreint la génération aux K tokens de plus haute probabilité à chaque étape ; Top-K = 1 équivaut au décodage glouton.',
            'Formule softmax avec temperature : P(token) = exp(logit / T) / sum(exp(logits / T)). Quand T tend vers 0, le token au logit le plus élevé tend vers la probabilité 1.0. Quand T tend vers l\'infini, tous les tokens tendent vers une probabilité égale.',
          ],
          columns: ['Paramètre', 'Plage de valeurs', 'Focalisé / Factuel', 'Créatif / Diversifié'],
          rows: [
            { 'Paramètre': 'Temperature (T)', 'Plage de valeurs': '0.0–2.0', 'Focalisé / Factuel': '0.0–0.3', 'Créatif / Diversifié': '0.7–1.0' },
            { 'Paramètre': 'Top-P', 'Plage de valeurs': '0.0–1.0', 'Focalisé / Factuel': '0.3–0.5', 'Créatif / Diversifié': '0.9–1.0' },
            { 'Paramètre': 'Top-K', 'Plage de valeurs': '1–taille du vocabulaire', 'Focalisé / Factuel': '10–20', 'Créatif / Diversifié': '50–100' },
            { 'Paramètre': 'max_tokens', 'Plage de valeurs': 'selon la tâche', 'Focalisé / Factuel': '256–512', 'Créatif / Diversifié': '2 048–8 192' },
            { 'Paramètre': 'frequency_penalty', 'Plage de valeurs': '-2.0 à 2.0', 'Focalisé / Factuel': '0.3–0.5 (réduire la répétition)', 'Créatif / Diversifié': '0.0–0.2' },
            { 'Paramètre': 'presence_penalty', 'Plage de valeurs': '-2.0 à 2.0', 'Focalisé / Factuel': '0.0–0.2', 'Créatif / Diversifié': '0.5–0.8' },
          ],
          tableFormat: true,
        },

        parameterWarning: {
          content: [
            '**Règle critique :** Ne définissez pas simultanément Temperature et Top-P à des valeurs élevées. Temperature redimensionne d\'abord la distribution complète ; Top-P échantillonne ensuite depuis la masse de probabilité déjà redimensionnée. Combiner T = 1.5 et Top-P = 0.95 produit des sorties plus erratiques que chaque paramètre seul — les deux paramètres sont conçus comme des alternatives, pas à empiler.',
            '`frequency_penalty` réduit la probabilité des tokens proportionnellement à leur nombre d\'occurrences — les valeurs positives éliminent les formulations répétitives ; les valeurs négatives encouragent activement la répétition. `presence_penalty` applique une pénalité forfaitaire unique à tout token déjà apparu, indépendamment de la fréquence — il pousse le modèle à introduire nouveau vocabulaire et nouveaux sujets plutôt que répéter les existants.',
          ],
        },

        reasoningTradeoff: {
          title: 'Quel est le compromis entre qualité de raisonnement et garanties de format ?',
          content: [
            'Forcer JSON via le decoding contraint réduit la précision du modèle de 2,26 points de pourcentage sur les benchmarks de function calling — le parsing libre aligné sur le schéma de BAML a atteint 93,63 % de précision sur BFCL contre 91,37 % pour le decoding contraint strict d\'OpenAI sur le même benchmark.',
            'Le mécanisme : le decoding contraint applique un automate qui masque les tokens incompatibles avec la position actuelle dans le schéma. Un modèle qui veut produire `51.7` pour un champ float est contraint de produire `51` si le schéma spécifie un entier — résultat techniquement valide mais factuellement dégradé. Le prompting Chain-of-Thought (CoT) est incompatible avec le decoding contraint de la même façon : inclure un champ de raisonnement force le modèle à échapper les sauts de ligne, guillemets et caractères spéciaux dans une chaîne JSON — ce qui dégrade mesurably la qualité de raisonnement.',
            'La solution de niveau production pour les systèmes nécessitant profondeur de raisonnement et garanties de format : (1) **Étape 1** — Envoyer à GPT-5.5 ou Claude Opus 4.7 sans contraintes : "Analysez ceci, raisonnez étape par étape, expliquez votre logique." (2) **Étape 2** — Passer la sortie de l\'étape 1 à un petit modèle spécialisé (Osmosis-Structure-0.6B ou GPT-5.5-mini avec `strict: true`) : "Extrayez les données clés de cette analyse et retournez-les dans ce schéma JSON exact."',
            'Cette architecture préserve la qualité de raisonnement de l\'étape 1 et atteint 100 % de conformité de format en étape 2, à une fraction du coût d\'un modèle frontier complet en mode contraint.',
          ],
        },

        promptquorumTest: {
          title: 'Comment les meilleurs modèles se comparent-ils sur le contrôle des sorties ?',
          content: [
            'Testé dans [PromptQuorum](https://www.promptquorum.com/) — 30 prompts de contrôle des sorties répartis sur trois modèles : Claude Opus 4.7 a atteint 93 % de conformité JSON avec des instructions de format balisées XML sans decoding contraint. GPT-5.5 a atteint 89 % de conformité avec des règles de format numérotées. Gemini 3.1 Pro a atteint 91 % de conformité avec le schéma précisé en début et fin. Les trois modèles ont produit des raisonnements plus courts et moins complets quand `strict: true` était activé — cohérent avec la perte de 2,26 points observée sur le benchmark BFCL.',
          ],
        },

        stopSequences: {
          title: 'Comment stop sequences et contraintes négatives diffèrent-ils ?',
          content: [
            'Les stop sequences — tokens qui arrêtent immédiatement la génération du modèle — sont le mécanisme de contrôle le plus déterministe : le modèle s\'arrête dès que la chaîne spécifiée apparaît, quel que soit le contexte restant.',
            'Les stop sequences sont passées comme un tableau de chaînes dans l\'appel API (paramètre `stop` chez OpenAI, `stop_sequences` chez Anthropic). Usages courants en production :',
          ],
          items: [
            '`["###"]` — arrête la génération après un marqueur de section structuré, empêchant la continuation vers du contenu non pertinent',
            '`["</output>"]` — s\'arrête après une balise XML fermante, garantissant que seul le contenu balisé est retourné',
            '`["\\n\\n"]` — limite la sortie à un seul paragraphe pour les tâches de classification ou de réponse courte',
            '`["Human:", "User:"]` — empêche le modèle d\'halluciner une continuation de conversation simulée',
          ],
        },

        stopSequencesConclusion: {
          content: [
            'Les contraintes négatives dans le corps du prompt — "Ne pas inclure d\'explications", "Pas de markdown", "Ne pas ajouter de phrases d\'introduction" — réduisent les patterns de sortie indésirables mais ne peuvent pas garantir la conformité comme le font les stop sequences. Utiliser les deux : stop sequences pour l\'arrêt structurel, contraintes négatives pour la mise en forme du contenu.',
          ],
        },

        formatChoices: {
          title: 'Quel format de sortie utiliser pour les pipelines en production ?',
          content: [
            'JSON est le format de sortie dominant pour les pipelines LLM en production car il correspond directement aux objets API, tableaux et données typées — mais forcer JSON via le decoding contraint sacrifie 2–10 % de qualité de raisonnement, faisant du choix de format une décision architecturale significative.',
            'TOON (Token-Optimised Output Notation) s\'est imposé comme format d\'entrée efficace pour les prompts structurés longs — il utilise la minimisation des espaces et des clés abrégées pour réduire la consommation de tokens d\'entrée avant que le modèle génère la sortie en JSON. L\'architecture de production recommandée 2026 : TOON pour l\'entrée (efficacité des tokens) + JSON avec decoding contraint pour la sortie (format garanti) — appliqué uniquement après la fin du raisonnement libre en étape 1.',
          ],
          columns: ['Format de sortie', "Cas d'usage", 'Notes'],
          rows: [
            { 'Format de sortie': 'JSON', "Cas d'usage": 'APIs, pipelines, bases documentaires', 'Notes': 'Support natif des sorties structurées chez tous les grands fournisseurs' },
            { 'Format de sortie': 'JSONL', "Cas d'usage": 'Flux d\'événements, traitement par lots', 'Notes': 'Un objet JSON par ligne ; adapté au streaming et à la journalisation' },
            { 'Format de sortie': 'CSV', "Cas d'usage": 'Intégration de systèmes legacy', 'Notes': 'Plus simple mais sans structure imbriquée ; adapté aux données tabulaires' },
            { 'Format de sortie': 'YAML', "Cas d'usage": 'Artefacts de configuration', 'Notes': 'Lisible par l\'humain ; utilisé en CI/CD et infrastructure' },
            { 'Format de sortie': 'XML', "Cas d'usage": 'Intégration enterprise', 'Notes': 'Verbeux ; préféré par Claude comme format de structure de prompt, pas de sortie' },
            { 'Format de sortie': 'Markdown', "Cas d'usage": 'Rapports, documentation lisibles', 'Notes': 'Mauvais pour le traitement en aval ; idéal pour les lecteurs humains' },
          ],
          tableFormat: true,
        },

        globalContext: {
          title: 'Considérations mondiales et régionales pour le contrôle des sorties',
          content: [
            'Les entreprises européennes construisant des pipelines LLM traitant des données personnelles doivent appliquer l\'article 25 du RGPD (protection des données dès la conception) à la conception du schéma de sortie — les sorties exposant des champs de données personnelles dans des charges JSON nécessitent une base légale au titre de l\'article 6 du RGPD. La CNIL a publié en janvier 2026 des orientations selon lesquelles les sorties de décision automatisée — y compris les sorties LLM structurées utilisées dans des workflows de scoring ou d\'éligibilité — peuvent déclencher des droits à l\'examen humain au titre de l\'article 22 du RGPD.',
            'Pour les équipes UE nécessitant une inférence on-premise avec contrôle des sorties structurées, Mistral AI (France) supporte le decoding contraint basé sur vLLM avec des paramètres JSON guidés — permettant une conformité garantie au schéma JSON entièrement dans l\'infrastructure UE, satisfaisant les exigences de résidence des données du RGPD selon l\'article 46. La CNIL recommande par ailleurs le recours aux modèles d\'inférence locale pour le traitement de données professionnelles sensibles (financières, médicales, juridiques), afin d\'éviter tout risque d\'accès non autorisé lors des appels API externes. Mistral Large s\'exécute on-premise avec support des sorties structurées.',
            'Les entreprises chinoises utilisent Qwen 2.5 (Alibaba) et DeepSeek V3 (DeepSeek AI) pour les pipelines de production à sorties contrôlées. Les deux modèles supportent le mode JSON et sont déployables localement sur l\'infrastructure enterprise chinoise selon les Mesures provisoires chinoises sur l\'IA générative (2023). Les entreprises japonaises exécutant l\'inférence locale via Ollama — LLaMA 3.1 7B à 8 Go de RAM, LLaMA 3.1 13B à 16 Go — bénéficient d\'Outlines et XGrammar pour le decoding contraint sur les modèles auto-hébergés.',
          ],
        },

        tldr: {
          title: 'Points clés',
          isTldr: true,
          items: [
            'Avant les sorties structurées, les modèles obtenaient moins de 40 % sur les schémas JSON complexes ; `strict: true` d\'OpenAI atteint 100 %',
            'Le decoding contraint réduit la précision de raisonnement de 2,26 points sur BFCL — utiliser l\'approche en deux étapes (raisonnement libre → modèle spécialisé) pour les tâches complexes',
            'Ne pas combiner Temperature élevée et Top-P élevé simultanément — ils s\'amplifient pour produire des sorties plus erratiques que chaque paramètre seul',
            '`frequency_penalty` (plage -2.0 à 2.0) réduit la répétition proportionnelle à la fréquence ; `presence_penalty` (plage -2.0 à 2.0) applique une pénalité forfaitaire sur tout token déjà vu — les deux à 0.3–0.5 pour les sorties factuelles focalisées',
            'Les stop sequences sont le seul mécanisme d\'arrêt déterministe — contrairement aux contraintes négatives dans le corps du prompt, elles ne peuvent pas être outrepassées par le modèle',
            'Plages de temperature : T = 0.0–0.3 pour les tâches factuelles déterministes ; T = 0.7–1.0 pour les tâches créatives ; T > 1.2 risque l\'incohérence en production',
            'Claude Opus 4.7 atteint 93 % de conformité JSON avec des prompts de format XML ; GPT-5.5 atteint 89 % avec des règles numérotées — tous deux sans decoding contraint',
          ],
        },

        commonMistakes: {
          title: 'Erreurs courantes avec le contrôle des sorties',
          mistakes: [
            {
              mistake: 'Définir Temperature et Top-P simultanément à des valeurs élevées',
              problem: 'Ils s\'amplifient — T=1.5 + Top-P=0.95 produit des sorties plus erratiques que chaque paramètre seul.',
              fix: 'Utilisez l\'un ou l\'autre comme contrôle principal de l\'aléatoire, pas les deux.'
            },
            {
              mistake: 'Forcer JSON sur des tâches de raisonnement complexes',
              problem: 'Le decoding contraint réduit la précision de 2–10 %. Le modèle sacrifie la qualité de raisonnement pour maintenir la conformité au schéma.',
              fix: 'Utilisez plutôt l\'approche en deux étapes : raisonnement libre d\'abord, puis extraction structurée.'
            },
            {
              mistake: 'Écrire "return JSON" sans montrer le schéma exact',
              problem: 'Le modèle devine les noms de champs, les types et l\'imbrication — produisant un JSON invalide ou malformé.',
              fix: 'Toujours fournir le schéma complet avec les types de champs et les valeurs enum.'
            },
            {
              mistake: 'Se fier aux contraintes négatives du prompt pour le formatage critique',
              problem: '"Pas de markdown" peut être ignoré par le modèle, surtout avec une Temperature élevée.',
              fix: 'Utiliser les stop sequences au niveau API — c\'est le seul mécanisme d\'arrêt déterministe.'
            },
            {
              mistake: 'Copier les réglages de Temperature entre modèles',
              problem: 'T=0.7 sur GPT-5.5 et T=0.7 sur Claude produisent des distributions de probabilité différentes.',
              fix: 'Tester chaque réglage de paramètre par modèle dans votre pipeline de production.'
            }
          ],
        },

        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Qu\'est-ce que le prompt engineering ?](/prompt-engineering/what-is-prompt-engineering?lang=fr) — principes fondamentaux de la conception d\'instructions IA structurées',
            '[Temperature et Top-P expliqués](/prompt-engineering/temperature-and-top-p?lang=fr) — analyse approfondie des deux paramètres d\'aléatoire principaux',
            '[Écrire de meilleur code avec l\'IA](/prompt-engineering/write-better-code-with-ai?lang=fr) — techniques de contrôle des sorties dans les workflows de génération de code',
            '[Tool Use et Function Calling](/prompt-engineering/tool-use-and-function-calling?lang=fr) — sortie structurée via les définitions de tools et les schémas de fonctions',
            '[Tokens et économie des tokens](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=fr) — comprendre les coûts en tokens pour le decoding contraint et les pipelines en deux étapes',
            '[Gestion des erreurs dans les applications LLM](/prompt-engineering/error-handling-llm?lang=fr) — détecter et récupérer les sorties malformées en production',
          ],
        },

        howToStart: {
          title: 'Contrôler le format des sorties IA',
          numberedItems: [
            '**Toujours spécifier explicitement le format de sortie souhaité dans le prompt.** Au lieu de "résumez ceci", dites : "Résumez sous forme de liste à puces de 5–7 éléments, 1–2 phrases chacun. Voix active. Pas d\'opinions." Soyez précis sur la structure : puces, tableaux, JSON, markdown, texte brut.',
            '**Utilisez le schéma JSON pour imposer les sorties structurées quand c\'est disponible (OpenAI, Anthropic).** Pour l\'extraction de données ou la génération de contenu lisible par machine, définissez le schéma : noms de champs, types, champs obligatoires, contraintes enum. Le modèle formatera automatiquement la sortie en conséquence.',
            '**Fournissez un exemple du format de sortie exact que vous souhaitez.** Montrez au modèle un exemple concret : \'Formater ainsi : { "topic": "...", "key_points": [...], "confidence": "high|medium|low" }.\' Les exemples sont plus puissants que les descriptions seules.',
            '**Utilisez un langage basé sur les contraintes : "Vous devez X, vous ne devez pas Y, toujours Z."** Évitez le langage mou ("essayez de", "visez à"). Dites : "Retournez exactement 3 étapes, pas plus, pas moins. N\'utilisez pas de jargon technique. Incluez toujours un avertissement si la recommandation a des limites."',
            '**Testez votre spécification de format de sortie sur un exemple avant de l\'exécuter à grande échelle.** Générez une sortie, vérifiez si elle correspond à votre spécification, ajustez le prompt si nécessaire. Cela évite de découvrir des problèmes de formatage après avoir traité 100 éléments.',
          ],
        },

        faq: {
          title: 'Questions fréquentes',
          faqs: [
            {
              q: 'Quelle est la différence entre Temperature et Top-P dans les LLM ?',
              a: 'Temperature (T) redimensionne la distribution de probabilité softmax des prédictions de tokens : T = 0.0 sélectionne toujours le token de plus haute probabilité (déterministe) ; T = 1.0 conserve la distribution naturelle ; T = 2.0 l\'aplatit vers l\'aléatoire. Top-P (nucleus sampling) sélectionne ensuite parmi le plus petit ensemble de tokens dont la probabilité cumulée atteint P — à Top-P = 0.9, seuls les tokens couvrant 90 % de la masse de probabilité sont éligibles. Les deux contrôlent des aspects différents et ne doivent pas être définis simultanément à des valeurs élevées.',
            },
            {
              q: 'Forcer la sortie JSON réduit-il la qualité des réponses IA ?',
              a: 'Oui — de façon mesurable. Le benchmark BAML sur BFCL a montré que le parsing libre aligné sur le schéma atteint 93,63 % de précision contre 91,37 % pour le decoding contraint d\'OpenAI — une réduction de 2,26 points. Le mécanisme est le masquage de tokens. Pour les tâches complexes, l\'approche en deux étapes (libre → structuration spécialisée) préserve la qualité tout en atteignant 100 % de conformité.',
            },
            {
              q: 'Qu\'est-ce que le decoding contraint et comment garantit-il la sortie JSON ?',
              a: 'Le decoding contraint applique un automate à états finis (FSM) au processus de génération de tokens. À chaque étape, le FSM évalue quels tokens produiraient une sortie schéma-compatible — et masque tous les autres à probabilité zéro. OpenAI l\'implémente via `response_format: { type: "json_schema", strict: true }`. Anthropic via le Strict Tool Use Mode.',
            },
            {
              q: 'Quel format de sortie utiliser pour les pipelines LLM en production ?',
              a: 'JSON est le standard pour les pipelines en production car il correspond directement aux objets API typés et est nativement supporté par tous les grands fournisseurs (OpenAI, Anthropic, Google Gemini). JSONL pour les flux d\'événements. CSV uniquement pour les systèmes legacy. Architecture recommandée 2026 : TOON pour l\'entrée + JSON avec decoding contraint pour la sortie d\'étape 2 après raisonnement libre en étape 1.',
            },
            {
              q: 'Comment les stop sequences diffèrent-ils des contraintes négatives dans les prompts ?',
              a: 'Les stop sequences sont appliquées au niveau API — le modèle arrête la génération dès que la chaîne spécifiée est produite, sans exception. Les contraintes négatives dans le corps du prompt instruisent le modèle à éviter certaines sorties mais ne sont pas contraignantes. Utiliser les deux : stop sequences pour les garanties d\'arrêt structurel, contraintes négatives pour la mise en forme du contenu.',
            },
          ],
        },

        sources: {
          title: 'Sources et lectures complémentaires',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — documentation officielle sur le decoding contraint, le mode JSON strict et les garanties de conformité au schéma',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — benchmark : 93,63 % vs 91,37 % de précision — parsing libre vs decoding contraint sur BFCL',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — analyse d\'architecture de production : entrée TOON + sortie JSON contrainte',
          ],
        },

      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'テクニック',
      title: 'AI出力の制御：JSONスキーマ準拠、制約デコード、フォーマット選択',
      intro: '**制約デコードはJSONスキーマ準拠率100%を実現します — 不正な出力はゼロです。この技術が登場する前、モデルは複雑なスキーマで40%未満のスコアしか出せず、エッジケースでサイレントに失敗していました。出力制御こそが、プロトタイプ（成功率80%）と本番システム（信頼性100%）を分けるエンジニアリング変数です。**',
      publishDate: '2026-03-24',
      readTime: '10分で読める',

      seoTitle: 'AI出力制御：JSONスキーマ準拠とデコード（2026年）',
      metaDescription: 'LLM出力をJSONモードと制約デコードで制御する方法。品質を損なわず100%スキーマ準拠を実現する2段階パイプライン。GPT、Claude、Gemini向けのプロダクションガイド。',

      educationalLevel: 'Beginner',
      audience: '構造化出力を必要とする本番LLMパイプラインを構築する開発者',
      toc: [
        { label: '出力制御の3つのレベルとは？', anchor: 'three-levels' },
        { label: 'プロンプトエンジニアリングで出力形式を制御するには？', anchor: 'prompt-engineering' },
        { label: '優れた構造化出力プロンプトとは？', anchor: 'good-prompt' },
        { label: '各モデルに適用される出力形式ルールとは？', anchor: 'model-rules' },
        { label: '出力生成を制御するサンプリングパラメータとは？', anchor: 'sampling-parameters' },
        { label: '推論品質とフォーマット保証のトレードオフとは？', anchor: 'reasoning-tradeoff' },
        { label: 'トップモデルの出力制御比較', anchor: 'model-comparison' },
        { label: 'ストップシーケンスとネガティブ制約の違いとは？', anchor: 'stop-sequences' },
        { label: '本番環境に適した出力形式とは？', anchor: 'production-format' },
        { label: 'グローバル・地域別の考慮事項', anchor: 'global-regional' },
        { label: '重要ポイント', anchor: 'key-takeaways' },
        { label: 'AI出力形式の制御方法（ステップバイステップ）', anchor: 'how-to' },
        { label: 'よくあるミス', anchor: 'common-mistakes' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'ソース', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'AI出力の制御：JSONスキーマ準拠、制約デコード、フォーマット選択',
        description: 'LLM出力をJSONモードと制約デコードで制御する方法。品質を損なわず100%スキーマ準拠を実現する2段階パイプライン。GPT、Claude、Gemini向けのプロダクションガイド。',
        url: 'https://www.promptquorum.com/prompt-engineering/control-the-output?lang=ja',
        inLanguage: 'ja',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/control-the-output?lang=ja', width: 1200, height: 630 },
        keywords: ['出力制御', '制約デコード', 'JSONスキーマ', '構造化出力', 'Temperature', 'Top-P', 'サンプリングパラメータ', 'プロンプトエンジニアリング'],
        about: [
          { '@type': 'Thing', name: '制約デコード' },
          { '@type': 'Thing', name: 'JSONスキーマ準拠' },
          { '@type': 'Thing', name: 'サンプリングパラメータ' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'LLMにおけるTemperatureとTop-Pの違いは何ですか？',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature (T) は次トークン予測のsoftmax確率分布全体をスケールします：T = 0.0では常に最も確率の高いトークンを選択（決定論的）；T = 1.0は自然な分布を維持；T = 2.0はランダム性に向けてフラット化します。Top-P（ニュークリアスサンプリング）は、累積確率がPに達する最小のトークンセットから選択します — Top-P = 0.9では累積確率上位90%のトークンのみが対象です。この2つは生成の異なる側面を制御し、同時に高い値に設定すると不規則な出力を増幅するため、同時に高く設定すべきではありません。' },
          },
          {
            '@type': 'Question',
            name: 'JSON出力の強制はAIの応答品質を低下させますか？',
            acceptedAnswer: { '@type': 'Answer', text: 'はい — 測定可能に。BAMLのBFCLベンチマークでは、スキーマ整合フリーテキスト解析が93.63%の精度を達成した一方、OpenAIの制約デコード（厳密なFunction Calling）は91.37%にとどまり、2.26ポイントの品質低下が生じました。メカニズムはトークンマスキングです。複雑な推論タスクでは、2段階アプローチ（自由記述→専門構造化）で品質を維持しながら100%フォーマット準拠を達成できます。' },
          },
          {
            '@type': 'Question',
            name: '制約デコードとは何か、どのようにJSON出力を保証しますか？',
            acceptedAnswer: { '@type': 'Answer', text: '制約デコードはモデルのトークン生成プロセスに有限状態機械（FSM）を適用します。各生成ステップで、FSMは現在位置のターゲットスキーマと互換性のある出力を生成するトークンを評価し、それ以外のすべてのトークンを確率ゼロにマスクします。OpenAIは`response_format: { type: "json_schema", strict: true }`で実装。AnthropicはStrict Tool Use Modeで実装しています。' },
          },
          {
            '@type': 'Question',
            name: '本番LLMパイプラインにはどの出力形式を使用すべきですか？',
            acceptedAnswer: { '@type': 'Answer', text: 'JSONは型付きAPIオブジェクトに直接マッピングされ、主要プロバイダ（OpenAI、Anthropic、Google Gemini）でネイティブサポートされているため、本番LLMパイプラインの標準です。イベントストリームとバッチ処理にはJSONL。レガシーシステム連携にのみCSV。2026年推奨アーキテクチャ：入力トークン効率のためのTOON + Stage 1自由推論後のStage 2出力にのみ制約デコード付きJSON。' },
          },
          {
            '@type': 'Question',
            name: 'ストップシーケンスとプロンプトのネガティブ制約の違いは何ですか？',
            acceptedAnswer: { '@type': 'Answer', text: 'ストップシーケンスはAPI/推論レベルで強制されます — モデルは指定された文字列が生成された瞬間に生成を停止し、例外はありません。プロンプト本文のネガティブ制約（「説明を含めないこと」、「Markdownなし」）はモデルに特定の出力を避けるよう指示しますが、拘束力はありません。両方を使用してください：ストップシーケンスは構造的な終了保証に、ネガティブ制約はコンテンツのスタイル形成に。' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ja',
        name: 'AI出力の制御：主要トピック',
        description: 'AIモデルからの構造化出力を管理するための核心概念',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '出力制御の3つのレベル', description: 'プロンプトベース、スキーマベース、制約デコードのアプローチとそのトレードオフ' },
          { '@type': 'ListItem', position: 2, name: 'プロンプトによる出力形式制御', description: '制約デコードなしでJSON準拠を達成するモデル固有テクニック' },
          { '@type': 'ListItem', position: 3, name: 'サンプリングパラメータ', description: 'Temperature、Top-P、Top-K、max_tokens、ペナルティパラメータの解説' },
          { '@type': 'ListItem', position: 4, name: '推論とフォーマットのトレードオフ', description: '制約デコードによる精度低下と2段階ソリューションの理解' },
          { '@type': 'ListItem', position: 5, name: 'ストップシーケンスと制約', description: 'APIレベルの制約とネガティブ指示による出力境界の制御' },
        ],
      },
      sections: {

        definition: {
          title: '出力制御の3つのレベルとは？',
          content: [
            '出力制御はプロンプトベース、スキーマベース、制約デコードの3つの異なるレベルで機能します。各レベルは推論品質とのトレードオフを高めながら、段階的に強固なフォーマット保証を提供します。',
            'プロンプトベースのフォーマットは自然言語でモデルに指示します（"Return JSON with fields: name, email, score"）。これは80〜95%の確率で機能しますが、型保証がなくエッジケースでサイレントに失敗し、不正なレスポンスの5〜20%にエラー処理が必要です。スキーマベースアプローチ（function calling / tool use）は95〜99%のコンプライアンスでフォーマット構造を正式に定義しますが、スキーマは絶対的な制約ではなく強力なヒントにとどまります。ネイティブ制約デコードは有限状態機械を使用して生成時に無効なトークンをマスクし、数学的確実性で100%スキーマ準拠の出力を生成します。',
            '2段階アプローチ — Claude Opus 4.7（Anthropic）またはGPT-5.5（OpenAI）をStage 1で自由に推論させた後、出力をStage 2の小型専門構造化モデル（Osmosis-Structure-0.6B、50万件の合成非構造化→構造化変換でトレーニング済み）に渡す — は制約デコードの推論品質ペナルティなしにフォーマット保証を実現します。',
            '一言で言えば：出力制約のレベルをタスクに合わせてください — フォーマット正確性が推論の深さより重要な場合のみ制約デコードを使用してください。',
          ],
          columns: ['レベル', 'コンプライアンス率', '推論への影響', '最適な用途'],
          rows: [
            { 'レベル': 'プロンプトベース（"return JSON"）', 'コンプライアンス率': '80〜95%', '推論への影響': 'なし', '最適な用途': 'プロトタイピング；シンプルなパイプライン' },
            { 'レベル': 'Function calling / Tool use', 'コンプライアンス率': '95〜99%', '推論への影響': '最小限', '最適な用途': 'ほとんどの本番アプリケーション' },
            { 'レベル': 'ネイティブ制約デコード（strict）', 'コンプライアンス率': '100%', '推論への影響': '品質低下2〜10%', '最適な用途': 'データ抽出；大量処理パイプライン' },
            { 'レベル': '2段階（自由記述→専門モデル）', 'コンプライアンス率': '〜100%', '推論への影響': 'なし', '最適な用途': '複雑な推論＋フォーマット保証' },
          ],
          tableFormat: true,
        },

        promptStructure: {
          title: 'プロンプトエンジニアリングで出力形式を制御するには？',
          content: [
            '明示的な出力スキーマ指示 — Claude Opus 4.7ではシステムプロンプトの冒頭、GPT-5.5ではユーザーコンテンツの直前に配置 — を使用すると、ネイティブ制約デコードの推論品質ペナルティなしに85〜95%の構造化出力コンプライアンス率を達成できます。',
            'Claude Opus 4.7（Anthropic）は、XMLスタイルのセクションラベルを使用してシステムプロンプトの冒頭に配置された出力形式指示に最も効果的に応答します。GPT-5.5（OpenAI）は、ユーザーコンテンツの直前に番号付きフォーマットルールとしてスキーマを配置すると最良の結果を出します。Gemini 3.1 Pro（Google DeepMind）は、プロンプトの冒頭と末尾の両方にスキーマを明示的に記述すると最も信頼性の高い構造化出力を生成します。',
          ],
        },

        badPrompt: {
          content: ['**悪いプロンプト — 非構造化、フォーマット指定なし：**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: '優れた構造化出力プロンプトとは（Claude Opus 4.7）？',
          content: ['**良いプロンプト — Claude Opus 4.7**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'XML構造化プロンプトは出力フォーマット契約を固定しながら、`<task>`ブロック内での自由な推論を保持します。制約デコード不要 — Claude Opus 4.7はこの構造で93%以上の本番呼び出しで準拠します。',
          ],
        },

        goodPromptGPT: {
          title: '優れた構造化出力プロンプトとは（GPT-5.5）？',
          content: ['**良いプロンプト — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },

        modelRules: {
          title: '各モデルに適用される出力形式ルールとは？',
          content: ['主要LLMはそれぞれ、出力フォーマット準拠に固有の構造的優先事項があります：'],
          items: [
            '**Claude Opus 4.7（Anthropic）** — XMLタグ（`<output>`、`<format>`、`<constraints>`）；スキーマを先頭に；「JSONのみを出力し、他は何も含めないこと」',
            '**GPT-5.5（OpenAI）** — 番号付きフォーマットルール；メイン指示の後にスキーマ；「有効なJSONで応答してください。Markdownフェンスなし。説明なし。」',
            '**Gemini 3.1 Pro（Google DeepMind）** — プロンプトの冒頭と末尾に簡潔で明示的なスキーマ；プロンプト内に希望する出力形式のone-shotサンプル',
            '**Ollama経由のローカルモデル**（LLaMA 3.1 7B、Mistral）— フォーマットドリフトに敏感；信頼性の高いJSON出力にはプロンプトに直接one-shotフォーマットサンプルが必要',
          ],
        },

        parameters: {
          title: '出力生成を制御するサンプリングパラメータとは？',
          content: [
            'Temperature (T)、Top-P、Top-K、max_tokens、frequency_penalty、presence_penaltyの6つの独立したパラメータが、出力の長さ、ランダム性、繰り返しを共同で決定します。矛盾なく一貫して設定する必要があります。',
            'Temperature (T) はsoftmax出力分布をスケールします：T = 0.0ではモデルは常に最も確率の高いトークンを選択（決定論的）；T = 2.0では分布がほぼフラットになり出力が不整合になります。Top-P（ニュークリアスサンプリング）は累積確率がPに達する最小のトークンセットから選択します — Top-P = 0.9ではモデルは確率質量の上位90%をカバーするトークンのみを考慮します。Top-Kは各ステップで最も確率の高いKトークンに生成を制限します；Top-K = 1はグリーディデコードと同等です。',
            'Temperature付きsoftmax式：P(トークン) = exp(logit / T) / sum(exp(logits / T))。TがゼロLに近づくほど、最高logitのトークンの確率が1.0に近づきます。Tが無限大に近づくほど、すべてのトークンが等確率に近づきます。',
          ],
          columns: ['パラメータ', '値の範囲', 'フォーカス / ファクト', 'クリエイティブ / 多様'],
          rows: [
            { 'パラメータ': 'Temperature (T)', '値の範囲': '0.0–2.0', 'フォーカス / ファクト': '0.0–0.3', 'クリエイティブ / 多様': '0.7–1.0' },
            { 'パラメータ': 'Top-P', '値の範囲': '0.0–1.0', 'フォーカス / ファクト': '0.3–0.5', 'クリエイティブ / 多様': '0.9–1.0' },
            { 'パラメータ': 'Top-K', '値の範囲': '1–語彙サイズ', 'フォーカス / ファクト': '10–20', 'クリエイティブ / 多様': '50–100' },
            { 'パラメータ': 'max_tokens', '値の範囲': 'タスク依存', 'フォーカス / ファクト': '256–512', 'クリエイティブ / 多様': '2,048–8,192' },
            { 'パラメータ': 'frequency_penalty', '値の範囲': '-2.0〜2.0', 'フォーカス / ファクト': '0.3–0.5（繰り返し削減）', 'クリエイティブ / 多様': '0.0–0.2' },
            { 'パラメータ': 'presence_penalty', '値の範囲': '-2.0〜2.0', 'フォーカス / ファクト': '0.0–0.2', 'クリエイティブ / 多様': '0.5–0.8' },
          ],
          tableFormat: true,
        },

        parameterWarning: {
          content: [
            '**重要ルール：** TemperatureとTop-Pを同時に高い値に設定しないでください。Temperatureはまず分布全体をスケールし、次にTop-Pがすでにスケールされた上位確率質量からサンプリングします。T = 1.5とTop-P = 0.95の組み合わせは、どちらかのパラメータ単独よりも不規則な出力を生成します — この2つのパラメータは積み重ねるのではなく、代替として使用するよう設計されています。',
            '`frequency_penalty`はこれまでの出現回数に比例してトークンの確率を減少させます — 正の値は繰り返しの表現を排除；負の値は繰り返しを積極的に促進します。`presence_penalty`は頻度に関係なく、これまでに出現したトークンに一回限りのフラットペナルティを適用します — モデルが既存のものを繰り返すのではなく、新しい語彙とトピックを導入するよう促します。',
          ],
        },

        reasoningTradeoff: {
          title: '推論品質とフォーマット保証のトレードオフとは？',
          content: [
            '制約デコードによるJSONの強制は、Function Callingベンチマークでモデルの精度を2.26ポイント低下させます — BAMLのスキーマ整合解析はBFCLで93.63%の精度を達成した一方、OpenAIの厳密な制約デコードは同じベンチマークで91.37%にとどまりました。',
            'メカニズム：制約デコードは現在のスキーマ位置と互換性のないトークンをマスクする有限状態機械を適用します。スキーマがintegerを指定している場合、floatフィールドに`51.7`を出力したいモデルは`51`を出力するよう強制されます — 技術的には有効だが事実的に劣化した結果です。Chain-of-Thought（CoT）プロンプティングも同様に制約デコードと互換性がありません：推論フィールドを含めると、モデルはJSONストリング内の改行、クォート、特殊文字をエスケープするよう強制され、すべてのテストモデルで推論品質が測定可能なほど低下します。',
            '推論の深さとフォーマット保証の両方を必要とするシステムの本番グレードソリューション：(1) **Stage 1** — 制約なしでGPT-5.5またはClaude Opus 4.7に送信：「これを分析し、ステップバイステップで推論し、ロジックを説明してください。」(2) **Stage 2** — Stage 1の出力を小型専門モデル（Osmosis-Structure-0.6BまたはGPT-5.5-mini、`strict: true`）に渡す：「この分析から主要データを抽出し、この正確なJSONスキーマで返してください。」',
            'このアーキテクチャはStage 1の推論品質を保持し、Stage 2で100%フォーマット準拠を達成します。制約モードでフロンティアモデル全体を実行するコストの何分の一かで実現できます。',
          ],
        },

        promptquorumTest: {
          title: 'トップモデルの出力制御比較',
          content: [
            '[PromptQuorum](https://www.promptquorum.com/)でテスト済み — 30件の出力制御プロンプトを3モデルに分散：Claude Opus 4.7は制約デコードなしのXMLタグ付きフォーマット指示で93%のJSON準拠を達成。GPT-5.5は番号付きフォーマットルールで89%の準拠を達成。Gemini 3.1 Proはスキーマを冒頭と末尾の両方に指定すると91%の準拠を達成。`strict: true`の制約デコードが有効な場合、3モデルすべてがより短く完全性の低い推論を生成しました — BFCLベンチマークで観察された2.26ポイントの精度低下と一致します。',
          ],
        },

        stopSequences: {
          title: 'ストップシーケンスとネガティブ制約の違いとは？',
          content: [
            'ストップシーケンス — 生成時にモデル出力を即座に終了させるトークン — は最も決定論的な出力制御メカニズムです：モデルは指定された文字列が出現した瞬間に停止し、残りのコンテキストに関係なく機能します。',
            'ストップシーケンスはAPIコールの文字列配列として渡します（OpenAIでは`stop`パラメータ、Anthropicでは`stop_sequences`）。一般的な本番ユースケース：',
          ],
          items: [
            '`["###"]` — 構造化セクションマーカーの後で生成を終了し、不要なコンテンツへの継続を防止',
            '`["</output>"]` — 閉じXMLタグの後で終了し、タグ付きコンテンツのみが返されることを保証',
            '`["\\n\\n"]` — 分類や短答タスクで出力を単一段落に制限',
            '`["Human:", "User:"]` — モデルが模擬会話の継続を幻覚することを防止',
          ],
        },

        stopSequencesConclusion: {
          content: [
            'プロンプト本文のネガティブ制約 — 「説明を含めないこと」、「Markdownなし」、「導入文を加えないこと」 — は不要な出力パターンを削減しますが、ストップシーケンスのような準拠保証はできません。両方を使用してください：ストップシーケンスは構造的な終了に、ネガティブ制約はコンテンツのスタイル形成に。',
          ],
        },

        formatChoices: {
          title: '本番パイプラインに適した出力形式とは？',
          content: [
            'JSONはAPIオブジェクト、配列、型付きデータに直接マッピングされるため、LLM本番パイプラインの支配的な出力形式です — しかし制約デコードによるJSONの強制は推論品質の2〜10%を犠牲にするため、フォーマット選択は重要なアーキテクチャ上の決定となります。',
            'TOON（Token-Optimised Output Notation）は長い構造化プロンプトの効率的な入力形式として登場しました — ホワイトスペース最小化と短縮キーを使用して、モデルがJSONで出力を生成する前の入力トークン消費を削減します。2026年の推奨本番アーキテクチャ：入力にTOON（トークン効率）+ 出力に制約デコード付きJSON（フォーマット保証）— Stage 1の自由推論完了後にのみ適用。',
          ],
          columns: ['出力フォーマット', 'ユースケース', '備考'],
          rows: [
            { '出力フォーマット': 'JSON', 'ユースケース': 'API、パイプライン、ドキュメントストア', '備考': '主要プロバイダ全てでネイティブ構造化出力サポート' },
            { '出力フォーマット': 'JSONL', 'ユースケース': 'イベントストリーム、バッチ処理', '備考': '1行1JSONオブジェクト；ストリーミングとロギングに適合' },
            { '出力フォーマット': 'CSV', 'ユースケース': 'レガシーシステム連携', '備考': 'シンプルだがネスト構造なし；表形式データに適合' },
            { '出力フォーマット': 'YAML', 'ユースケース': '設定ファイル', '備考': '人間が読みやすい；CI/CDとインフラのコンテキストで使用' },
            { '出力フォーマット': 'XML', 'ユースケース': 'エンタープライズ統合', '備考': '冗長；Claudeではプロンプト構造として有効、出力には不向き' },
            { '出力フォーマット': 'Markdown', 'ユースケース': '人間向けレポート、ドキュメント', '備考': 'ダウンストリーム解析には不向き；人間向けコンテンツに最適' },
          ],
          tableFormat: true,
        },

        globalContext: {
          title: 'グローバル・地域別の考慮事項',
          content: [
            '日本企業がLLMパイプラインを構築する際、経済産業省（METI）の「AI原則実践のためのガバナンス・ガイドライン（2024年版）」に準拠することが推奨されます。個人情報を処理するLLMパイプラインには、JSONスキーマ設計に個人情報保護法（APPI）のデータ最小化原則を適用する必要があります。on-premise推論とvLLMベースの制約デコード（Mistral Largeなど）は、データがローカルインフラ内に留まるため、APPI準拠に適しています。METIガイドラインは特に、医療・金融・法律分野での高リスクAI出力に対してStep-by-Stepの透明性確保を推奨しています。',
            'アジア太平洋地域では、中国企業がQwen 2.5（アリババ）およびDeepSeek V3（DeepSeek AI）を構造化出力パイプラインに使用しています。両モデルはJSONモードをサポートし、中国の「生成AIサービス暫定弁法（2023年）」に準じたローカルデプロイが可能です。越境データ転送フレームワークへの対応として、OllamaとXGrammarを使った自己ホスト型モデルでの制約デコードが有効な選択肢です — LLaMA 3.1 7Bは8GB RAM、LLaMA 3.1 13Bは16GB RAMで動作します。',
            'グローバルな本番パイプライン全体において、JSONモード + 2段階アプローチ（Stage 1：自由推論、Stage 2：専門構造化モデル）が100%フォーマット準拠と推論品質を両立するベストプラクティスです。ストップシーケンスと制約デコードを組み合わせることで、言語やリージョンに関係なく出力の確実性が最大化されます。',
          ],
        },

        tldr: {
          title: '重要ポイント',
          isTldr: true,
          items: [
            '構造化出力が登場する前、モデルは複雑なJSONスキーマ準拠で40%未満しか達成できませんでした；OpenAIの`strict: true`制約デコードは100%を実現します',
            '制約デコードはBFCLベンチマークで推論精度を2.26ポイント低下させます — 複雑なタスクでは2段階アプローチ（自由推論→専門モデル）を使用してください',
            'TemperatureとTop-Pを同時に高い値に設定しないこと — どちらか一方のパラメータよりも不規則な出力に増幅されます',
            '`frequency_penalty`：範囲 -2.0〜2.0 で頻度比例繰り返しを削減；`presence_penalty`：範囲 -2.0〜2.0 で既出トークンにフラットペナルティを適用 — フォーカスした事実出力には両方を0.3〜0.5に設定',
            'ストップシーケンスは唯一の決定論的出力終了メカニズムです — プロンプト本文のネガティブ制約とは異なり、モデルはストップシーケンスをオーバーライドできません',
            'Temperatureの範囲：T = 0.0〜0.3は決定論的な事実タスク；T = 0.7〜1.0はクリエイティブタスク；T > 1.2は本番使用で不整合のリスクがあります',
            'Claude Opus 4.7はXMLタグ付きフォーマットプロンプトで93%のJSON準拠を達成；GPT-5.5は番号付きフォーマットルールで89% — どちらも制約デコードなし',
          ],
        },

        commonMistakes: {
          title: 'よくあるミス',
          mistakes: [
            {
              mistake: 'TemperatureとTop-Pを同時に高い値に設定する',
              problem: '相互に増幅されます — T=1.5 + Top-P=0.95はどちらかのパラメータ単独より不規則な出力を生成します。',
              fix: 'ランダム性の主要制御としてどちらか一方を使用し、両方は使わないでください。'
            },
            {
              mistake: '複雑な推論タスクでJSONを強制する',
              problem: '制約デコードは精度を2〜10%低下させます。モデルはスキーマ準拠を維持するために推論品質を犠牲にします。',
              fix: '代わりに2段階アプローチを使用してください：最初に自由推論、次に構造化抽出。'
            },
            {
              mistake: '正確なスキーマを示さずに"return JSON"と記述する',
              problem: 'モデルはフィールド名、型、ネスト構造を推測し、無効または不正なJSONを生成します。',
              fix: 'フィールド型とenum値を含む完全なスキーマを必ず提供してください。'
            },
            {
              mistake: '重要なフォーマットにプロンプト本文のネガティブ制約のみに頼る',
              problem: '「Markdownなし」はモデルに無視される場合があります。特に高いTemperature設定時。',
              fix: 'APIレベルでストップシーケンスを使用してください — 唯一の決定論的終了メカニズムです。'
            },
            {
              mistake: 'モデル間でTemperature設定をコピーする',
              problem: 'GPT-5.5のT=0.7とClaudeのT=0.7は異なる確率分布を生成します。',
              fix: '本番パイプラインで各モデルごとにパラメータ設定をテストしてください。'
            }
          ],
        },

        relatedReading: {
          title: '関連記事',
          items: [
            '[プロンプトエンジニアリングとは？](/prompt-engineering/what-is-prompt-engineering?lang=ja) — 構造化されたAI指示設計の基本原則',
            '[TemperatureとTop-Pの解説](/prompt-engineering/temperature-and-top-p?lang=ja) — 2つの主要なランダム性パラメータの詳細解説',
            '[AIでより良いコードを書く](/prompt-engineering/write-better-code-with-ai?lang=ja) — コード生成ワークフローにおける出力制御テクニック',
            '[Tool UseとFunction Calling](/prompt-engineering/tool-use-and-function-calling?lang=ja) — ツール定義と関数スキーマによる構造化出力',
            '[トークンとトークンエコノミクス](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting?lang=ja) — 制約デコードと2段階パイプラインのトークンコスト理解',
            '[LLMアプリケーションのエラー処理](/prompt-engineering/error-handling-llm?lang=ja) — 本番システムで不正な出力を検出・回復する方法',
          ],
        },

        howToStart: {
          title: 'AI出力形式の制御方法',
          numberedItems: [
            '**出力形式を常にプロンプトで明示的に指定してください。**「これを要約してください」の代わりに「5〜7項目の箇条書きリストで要約してください。各項目は1〜2文。能動態を使用。意見を含めないこと。」構造を具体的に記述してください：箇条書き、表、JSON、Markdown、プレーンテキストなど。',
            '**利用可能な場合はJSONスキーマを使用して構造化出力を強制してください（OpenAI、Anthropic）。**データ抽出や機械可読コンテンツを生成する場合はスキーマを定義します：フィールド名、型、必須フィールド、enum制約。モデルは自動的に出力をフォーマットします。',
            '**希望する出力形式の具体的な例を提示してください。**モデルに具体例を見せます：「次の形式でフォーマットしてください：{ "topic": "...", "key_points": [...], "confidence": "high|medium|low" }。」例示は説明だけより強力です。',
            '**制約ベースの言語を使用してください：「必ずXにすること、Yしてはいけない、常にZすること。」**曖昧な表現（「〜してみてください」）を避けてください。「正確に3ステップを返すこと、それ以上もそれ以下も不可。専門用語を使わないこと。推奨事項に制限がある場合は必ず警告を含めること。」',
            '**大規模に実行する前に1つの例で出力形式仕様をテストしてください。**1つの出力を生成し、仕様に合っているか確認し、必要に応じてプロンプトを調整します。100件処理した後にフォーマットの問題を発見することを防げます。',
          ],
        },

        faq: {
          title: 'よくある質問',
          faqs: [
            {
              q: 'LLMにおけるTemperatureとTop-Pの違いは何ですか？',
              a: 'Temperature (T) は次トークン予測のsoftmax確率分布全体をスケールします：T = 0.0では常に最も確率の高いトークンを選択（決定論的）；T = 1.0は自然な分布を維持；T = 2.0はランダム性に向けてフラット化します。Top-P（ニュークリアスサンプリング）は累積確率がPに達する最小のトークンセットから選択します。この2つは生成の異なる側面を制御し、同時に高い値に設定すると不規則な出力を増幅します。',
            },
            {
              q: 'JSON出力の強制はAIの応答品質を低下させますか？',
              a: 'はい — 測定可能に。BAMLのBFCLベンチマークでは、スキーマ整合フリーテキスト解析が93.63%の精度を達成した一方、OpenAIの制約デコードは91.37%にとどまり、2.26ポイントの品質低下が生じました。複雑な推論タスクでは、2段階アプローチ（自由記述→専門構造化）で品質を維持しながら100%フォーマット準拠を達成できます。',
            },
            {
              q: '制約デコードとは何か、どのようにJSON出力を保証しますか？',
              a: '制約デコードはモデルのトークン生成プロセスに有限状態機械（FSM）を適用します。各生成ステップで、FSMは現在位置のターゲットスキーマと互換性のあるトークンを評価し、それ以外のすべてを確率ゼロにマスクします。OpenAIは`response_format: { type: "json_schema", strict: true }`で実装。AnthropicはStrict Tool Use Modeで実装しています。',
            },
            {
              q: '本番LLMパイプラインにはどの出力形式を使用すべきですか？',
              a: 'JSONは型付きAPIオブジェクトに直接マッピングされ、主要プロバイダ（OpenAI、Anthropic、Google Gemini）でネイティブサポートされているため、本番LLMパイプラインの標準です。イベントストリームとバッチ処理にはJSONL。レガシーシステム連携にのみCSV。2026年推奨アーキテクチャ：入力トークン効率のためのTOON + Stage 1自由推論後のStage 2出力にのみ制約デコード付きJSON。',
            },
            {
              q: 'ストップシーケンスとプロンプトのネガティブ制約の違いは何ですか？',
              a: 'ストップシーケンスはAPI/推論レベルで強制されます — モデルは指定された文字列が生成された瞬間に生成を停止し、例外はありません。プロンプト本文のネガティブ制約は拘束力がなく、高いTemperature設定や長いコンテキストドリフトでは違反することがあります。両方を使用してください：ストップシーケンスは構造的な終了保証に、ネガティブ制約はコンテンツのスタイル形成に。',
            },
          ],
        },

        sources: {
          title: 'ソースと参考資料',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — 制約デコード、厳密JSONモード、スキーマ準拠保証に関する公式ドキュメント',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — ベンチマーク：93.63% vs. 91.37%の精度 — スキーマ整合解析vs.制約デコード（BFCL）',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — 本番アーキテクチャ分析：TOON入力＋制約JSON出力',
          ],
        },

      },
    },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  };
