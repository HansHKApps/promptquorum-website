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
    fr: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    ja: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  };
