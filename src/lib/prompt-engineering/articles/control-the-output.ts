// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: control-the-output
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
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

      ogTitle: 'From 40% to 100% JSON Compliance — Constrained Decoding Changes Everything',
      ogDescription: 'Prompt-only formatting fails 60% of the time. Strict mode guarantees schema compliance at the token level. Full settings guide.',
      twitterTitle: 'Control AI Output: JSON, Temperature & Stop Sequences (2026)',
      twitterDescription: 'Constrained decoding = 100% schema compliance but 2–10% accuracy drop. Temperature 0.0–0.1 for production JSON. The trade-offs no one tells you.',

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
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['output control', 'constrained decoding', 'JSON schema', 'structured output', 'temperature', 'top-p', 'sampling parameters', 'prompt engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'Beginner',
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
            acceptedAnswer: { '@type': 'Answer', text: 'JSON is the standard for production LLM pipelines because it maps directly to typed API objects and is natively supported by all major providers (OpenAI, Anthropic, Google Gemini). Use JSONL for event streams and batch processing. Use CSV only for legacy system compatibility. Avoid XML as an output format (though it is effective as a prompt structure format for Claude Opus 4.8). The 2026 recommended architecture is: TOON for input token efficiency + JSON with constrained decoding only for Stage 2 output after free-form Stage 1 reasoning.' },
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
            'The two-stage approach — letting Claude Opus 4.8 (Anthropic) or GPT-5.5 (OpenAI) reason freely in Stage 1, then feeding output into a small specialist structuring model (Osmosis-Structure-0.6B, trained on 500K synthetic unstructured → structured transformations) in Stage 2 — achieves format guarantees without the reasoning quality penalty of constrained decoding.',
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
            'Explicit output schema instructions — placed at the start of the system prompt for Claude Opus 4.8 and immediately before user content for GPT-5.5 — produce structured output compliance rates of 85–95% without the reasoning quality penalty of native constrained decoding.',
            'Claude Opus 4.8 (Anthropic) responds best to output format instructions placed at the beginning of the system prompt using XML-style section labels. GPT-5.5 (OpenAI) performs best when the schema is placed immediately before user content using numbered format rules. Gemini 3.1 Pro (Google DeepMind) produces the most reliable structured output when the schema is restated at both start and end of the prompt.',
          ],
        },

        badPrompt: {
          content: ['**Bad Prompt — unstructured, no format specification:**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: 'What Does a Good Structured Output Prompt Look Like (Claude Opus 4.8)?',
          content: ['**Good Prompt — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'The XML-structured prompt anchors the output format contract while preserving free reasoning inside the `<task>` block. No constrained decoding required — Claude Opus 4.8 complies in over 93% of production calls with this structure.',
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
            '**Claude Opus 4.8 (Anthropic)** — XML tags (`<output>`, `<format>`, `<constraints>`); schema at the top; "Output only the JSON, nothing else"',
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
            'The production-grade solution for systems requiring both reasoning depth and format guarantees: (1) **Stage 1** — Send to GPT-5.5 or Claude Opus 4.8 without constraints: "Analyse this, reason step by step, explain your logic." (2) **Stage 2** — Feed Stage 1 output to a small specialist model (Osmosis-Structure-0.6B or GPT-5.5-mini with `strict: true`): "Extract the key data from this analysis and return it in this exact JSON schema."',
            'This architecture preserves Stage 1 reasoning quality and achieves 100% format compliance in Stage 2 at a fraction of the cost of running a full frontier model in constrained mode.',
          ],
        },

        promptquorumTest: {
          title: 'How Do the Top Models Compare on Output Format Control?',
          content: [
            'Tested in [PromptQuorum](https://www.promptquorum.com/) — 30 output control prompts dispatched across three models: Claude Opus 4.8 achieved 93% JSON compliance using XML-tagged format instructions without constrained decoding. GPT-5.5 achieved 89% compliance using numbered format rules. Gemini 3.1 Pro achieved 91% compliance with schema stated at both start and end. All three models produced shorter, less complete reasoning when `strict: true` constrained decoding was enabled — consistent with the 2.26-point accuracy drop observed on the BFCL benchmark.',
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
            'Chinese enterprises use Qwen 3 (Alibaba) and DeepSeek V3 (DeepSeek AI) for production output-controlled pipelines. Both models support JSON mode and are locally deployable on Chinese enterprise infrastructure under China\'s Interim Measures for Generative AI (2023). Japanese enterprises running local inference via Ollama — LLaMA 3.1 7B at 8GB RAM, LLaMA 3.1 13B at 16GB RAM — benefit from Outlines and XGrammar for constrained decoding on self-hosted models, producing guaranteed JSON Schema compliance without external API calls.',
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
            'Claude Opus 4.8 achieves 93% JSON compliance with XML-tagged format prompts; GPT-5.5 achieves 89% with numbered format rules — both without constrained decoding',
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
            '[Temperature and Top-P Explained](/prompt-engineering/temperature-and-top-p-control-ai-creativity) — deep dive into the two primary randomness parameters',
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — applying output control techniques in code generation workflows',
            'Tool Use and Function Calling — structured output via tool definitions and function schemas',
            '[Tokens & Token Economics](/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — understanding token costs for constrained decoding and two-stage pipelines',
            'Error Handling in LLM Applications — detecting and recovering from malformed output in production systems',
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
          id: 'faq',
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
              a: 'JSON is the standard for production LLM pipelines because it maps directly to typed API objects and is natively supported by all major providers (OpenAI, Anthropic, Google Gemini). Use JSONL for event streams and batch processing. Use CSV only for legacy system compatibility. Avoid XML as an output format (though it is effective as a prompt structure format for Claude Opus 4.8). The 2026 recommended architecture is: TOON for input token efficiency + JSON with constrained decoding only for Stage 2 output after free-form Stage 1 reasoning.',
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

      ogTitle: 'Von 40 % auf 100 % JSON-Konformität — Constrained Decoding ändert alles',
      ogDescription: 'Prompt-basierte Formatierung scheitert in 60 % der Fälle. Strict Mode garantiert Schema-Konformität auf Token-Ebene.',
      twitterTitle: 'KI-Ausgabe kontrollieren: JSON, Temperatur & Stop-Sequenzen (2026)',
      twitterDescription: 'Constrained Decoding = 100 % Schema-Konformität, aber 2–10 % Genauigkeitsverlust. Temperatur 0,0–0,1 für Produktions-JSON. Die Abwägungen im Detail.',

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
        url: 'https://www.promptquorum.com/de/prompt-engineering/control-the-output',
        inLanguage: 'de',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/de/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['Ausgabekontrolle', 'Constrained Decoding', 'JSON-Schema', 'Strukturierter Output', 'Temperature', 'Top-P', 'Sampling-Parameter', 'Prompt Engineering'],
        about: [
          { '@type': 'Thing', name: 'Constrained Decoding' },
          { '@type': 'Thing', name: 'JSON-Schema-Compliance' },
          { '@type': 'Thing', name: 'Sampling-Parameter' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'Beginner',
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
            'Der zweistufige Ansatz — Claude Opus 4.8 (Anthropic) oder GPT-5.5 (OpenAI) in Stage 1 frei denken lassen, dann die Ausgabe in Stage 2 an ein kleines Spezialisierungsmodell (Osmosis-Structure-0.6B, trainiert auf 500.000 synthetischen unstrukturierten → strukturierten Transformationen) übergeben — erreicht Formatgarantien ohne den Reasoning-Qualitätsverlust von Constrained Decoding.',
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
            'Explizite Ausgabeschema-Anweisungen — am Anfang des System-Prompts für Claude Opus 4.8 und unmittelbar vor dem User-Content für GPT-5.5 platziert — erzielen Compliance-Raten für strukturierten Output von 85–95 % ohne den Reasoning-Qualitätsverlust von nativem Constrained Decoding.',
            'Claude Opus 4.8 (Anthropic) reagiert am besten auf Ausgabeformat-Anweisungen am Anfang des System-Prompts mit XML-ähnlichen Abschnittsbezeichnungen. GPT-5.5 (OpenAI) liefert die besten Ergebnisse, wenn das Schema unmittelbar vor dem User-Content mit nummerierten Format-Regeln platziert wird. Gemini 3.1 Pro (Google DeepMind) produziert die zuverlässigste strukturierte Ausgabe, wenn das Schema sowohl am Anfang als auch am Ende des Prompts wiederholt wird.',
          ],
        },

        badPrompt: {
          content: ['**Schlechter Prompt — unstrukturiert, ohne Formatvorgabe:**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: 'Wie sieht ein guter Structured-Output-Prompt aus (Claude Opus 4.8)?',
          content: ['**Guter Prompt — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'Der XML-strukturierte Prompt verankert den Ausgabeformat-Vertrag und bewahrt gleichzeitig freies Reasoning im `<task>`-Block. Kein Constrained Decoding erforderlich — Claude Opus 4.8 hält sich in über 93 % der Produktionsanfragen mit dieser Struktur daran.',
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
            '**Claude Opus 4.8 (Anthropic)** — XML-Tags (`<output>`, `<format>`, `<constraints>`); Schema am Anfang; "Gib nur das JSON aus, nichts anderes"',
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
            'Die produktionsreife Lösung für Systeme, die sowohl Reasoning-Tiefe als auch Formatgarantien benötigen: (1) **Stage 1** — An GPT-5.5 oder Claude Opus 4.8 ohne Einschränkungen senden: "Analysieren Sie dies, denken Sie schrittweise, erklären Sie Ihre Logik." (2) **Stage 2** — Stage-1-Ausgabe an ein kleines Spezialisierungsmodell (Osmosis-Structure-0.6B oder GPT-5.5-mini mit `strict: true`) übergeben: "Extrahieren Sie die Schlüsseldaten aus dieser Analyse und geben Sie sie in diesem exakten JSON-Schema zurück."',
            'Diese Architektur erhält die Stage-1-Reasoning-Qualität und erreicht 100 % Format-Compliance in Stage 2 zu einem Bruchteil der Kosten des Betriebs eines vollständigen Frontier-Modells im Constrained-Modus.',
          ],
        },

        promptquorumTest: {
          title: 'Wie schneiden die Top-Modelle bei der Ausgabe-Kontrolle ab?',
          content: [
            'Getestet in [PromptQuorum](https://www.promptquorum.com/) — 30 Ausgabekontroll-Prompts über drei Modelle verteilt: Claude Opus 4.8 erreichte 93 % JSON-Compliance mit XML-getaggten Format-Anweisungen ohne Constrained Decoding. GPT-5.5 erreichte 89 % Compliance mit nummerierten Format-Regeln. Gemini 3.1 Pro erreichte 91 % Compliance, wenn das Schema sowohl am Anfang als auch am Ende angegeben wurde. Alle drei Modelle produzierten kürzere, weniger vollständige Reasoning-Antworten, wenn `strict: true` Constrained Decoding aktiviert war — konsistent mit dem auf dem BFCL-Benchmark beobachteten 2,26-Punkte-Genauigkeitsverlust.',
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
            'Chinesische Unternehmen nutzen Qwen 3 (Alibaba) und DeepSeek V3 (DeepSeek AI) für produktive, ausgabekontrollierte Pipelines. Beide Modelle unterstützen JSON-Mode und sind auf chinesischer Enterprise-Infrastruktur lokal einsetzbar gemäß den Interimmaßnahmen für generative KI Chinas (2023). Japanische Unternehmen, die lokale Inferenz via Ollama betreiben — LLaMA 3.1 7B bei 8 GB RAM, LLaMA 3.1 13B bei 16 GB RAM — profitieren von Outlines und XGrammar für Constrained Decoding auf selbst gehosteten Modellen und erreichen so garantierte JSON-Schema-Compliance ohne externe API-Aufrufe.',
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
            'Claude Opus 4.8 erreicht 93 % JSON-Compliance mit XML-getaggten Format-Prompts; GPT-5.5 erreicht 89 % mit nummerierten Format-Regeln — beide ohne Constrained Decoding',
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
            '[Was ist Prompt Engineering?](/de/prompt-engineering/what-is-prompt-engineering) — Grundprinzipien hinter strukturiertem KI-Instruktionsdesign',
            '[Temperature und Top-P erklärt](/de/prompt-engineering/temperature-and-top-p-control-ai-creativity) — Tiefenanalyse der beiden primären Zufälligkeitsparameter',
            '[Besseren Code mit KI schreiben](/de/prompt-engineering/write-better-code-with-ai) — Ausgabekontrolltechniken in Code-Generierungs-Workflows anwenden',
            'Tool Use und Function Calling — Strukturierter Output via Tool-Definitionen und Funktionsschemata',
            '[Tokens & Token Economics](/de/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — Token-Kosten für Constrained Decoding und zweistufige Pipelines verstehen',
            'Fehlerbehandlung in LLM-Anwendungen — Fehlerhaften Output in Produktionssystemen erkennen und beheben',
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
          id: 'faq',
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
    es: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Techniques',
      title: 'Controla la salida: cumplimiento de JSON Schema, constrained decoding y selección de formato',
      intro: '**El constrained decoding alcanza el 100 % de cumplimiento de JSON schema — nunca más salidas malformadas. Antes de esta tecnología, los modelos obtenían menos del 40 % en esquemas complejos y fallaban silenciosamente en los casos límite. El control de salida es la variable de ingeniería que distingue los prototipos (80 % de éxito) de los sistemas de producción (100 % de fiabilidad).**',
      publishDate: '2026-03-24',
      readTime: '10 min de lectura',
      seoTitle: 'Controla la salida de la IA y el cumplimiento de schema 2026',
      metaDescription: 'Controla la salida de LLMs con modo JSON y constrained decoding. Alcanza el 100 % de cumplimiento de schema con pipelines de dos etapas sin perder calidad.',
      ogTitle: 'Del 40 % al 100 % de cumplimiento JSON — el constrained decoding lo cambia todo',
      ogDescription: 'El formato solo por prompt falla el 60 % del tiempo. El modo estricto garantiza el cumplimiento del schema a nivel de token. Guía completa de configuración.',
      twitterTitle: 'Controla la salida de IA: JSON, temperature y stop sequences (2026)',
      twitterDescription: 'Constrained decoding = 100 % de cumplimiento de schema pero 2–10 % de caída de precisión. Temperature 0,0–0,1 para JSON de producción. Las compensaciones que nadie te cuenta.',
      educationalLevel: 'Beginner',
      audience: 'Desarrolladores que construyen pipelines LLM de producción que requieren salida estructurada',
      toc: [
        { label: '¿Cuáles son los tres niveles de control de salida?', anchor: 'three-levels' },
        { label: '¿Cómo controlas el formato de salida mediante prompt engineering?', anchor: 'prompt-engineering' },
        { label: '¿Cómo es un buen prompt de salida estructurada?', anchor: 'good-prompt' },
        { label: '¿Qué reglas de formato de salida aplican a cada modelo?', anchor: 'model-rules' },
        { label: '¿Qué parámetros de muestreo controlan la generación de salida?', anchor: 'sampling-parameters' },
        { label: '¿Cuál es la compensación entre razonamiento y formato?', anchor: 'reasoning-tradeoff' },
        { label: '¿Cómo comparan los principales modelos en control de formato?', anchor: 'model-comparison' },
        { label: '¿En qué se diferencian las stop sequences y las constraints negativas?', anchor: 'stop-sequences' },
        { label: '¿Qué formato de salida usar en producción?', anchor: 'production-format' },
        { label: '¿Cuáles son las consideraciones globales y regionales?', anchor: 'global-regional' },
        { label: 'Puntos clave', anchor: 'key-takeaways' },
        { label: 'Cómo controlar el formato de salida de la IA (paso a paso)', anchor: 'how-to' },
        { label: 'Errores comunes', anchor: 'common-mistakes' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Fuentes', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Controla la salida: cumplimiento de JSON Schema, constrained decoding y selección de formato',
        description: 'Domina el control de salida en LLMs: constrained decoding, formato basado en prompts, parámetros de muestreo y la compensación de calidad de razonamiento. Guía de producción para JSON, JSONL, CSV.',
        url: 'https://www.promptquorum.com/es/prompt-engineering/control-the-output',
        inLanguage: 'es',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/es/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['control de salida', 'constrained decoding', 'JSON schema', 'salida estructurada', 'temperature', 'top-p', 'parámetros de muestreo', 'prompt engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cuál es la diferencia entre Temperature y Top-P en los LLMs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature (T) escala toda la distribución de probabilidad softmax de predicciones del siguiente token: T = 0,0 siempre selecciona el token de mayor probabilidad (determinista); T = 1,0 conserva la distribución natural; T = 2,0 la aplana hacia la aleatoriedad. Top-P (muestreo de núcleo) selecciona del conjunto mínimo de tokens cuya probabilidad acumulada alcanza P — con Top-P = 0,9, solo es elegible la masa de probabilidad acumulada del 90 % superior. Controlan aspectos diferentes de la generación y no deben configurarse ambos en valores altos simultáneamente.' },
          },
          {
            '@type': 'Question',
            name: '¿Forzar la salida JSON reduce la calidad de respuesta de la IA?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sí — mediblemente. El benchmark de BAML en BFCL mostró que el parsing de texto libre alineado con schema alcanzó el 93,63 % de precisión vs. 91,37 % para el constrained decoding estricto de OpenAI — una reducción de calidad de 2,26 puntos. El mecanismo es el enmascaramiento de tokens. Para tareas de razonamiento complejo, el enfoque de dos etapas (texto libre → estructuración especializada) preserva la calidad logrando el 100 % de cumplimiento de formato.' },
          },
          {
            '@type': 'Question',
            name: '¿Qué es el constrained decoding y cómo garantiza la salida JSON?',
            acceptedAnswer: { '@type': 'Answer', text: 'El constrained decoding aplica una máquina de estados finita (FSM) sobre el proceso de generación de tokens del modelo. En cada paso, la FSM evalúa qué tokens producirían salida compatible con el schema objetivo en la posición actual — y enmascara todos los demás tokens con probabilidad cero. OpenAI lo implementa vía `response_format: { type: "json_schema", strict: true }`. Anthropic lo implementa vía Strict Tool Use Mode.' },
          },
          {
            '@type': 'Question',
            name: '¿Qué formato de salida debo usar para pipelines LLM de producción?',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON es el estándar para pipelines LLM de producción porque se mapea directamente a objetos API tipados y es soportado nativamente por todos los principales proveedores. Usa JSONL para flujos de eventos y procesamiento por lotes. Usa CSV solo para compatibilidad con sistemas legados. La arquitectura recomendada para 2026: TOON para eficiencia de tokens de entrada + JSON con constrained decoding solo para la salida de la Etapa 2 después del razonamiento libre de la Etapa 1.' },
          },
          {
            '@type': 'Question',
            name: '¿En qué se diferencian las stop sequences de las constraints negativas en los prompts?',
            acceptedAnswer: { '@type': 'Answer', text: 'Las stop sequences se aplican a nivel de API/inferencia — el modelo detiene la generación en el instante en que aparece la cadena especificada, sin excepciones. Las constraints negativas en el cuerpo del prompt ("No incluyas explicaciones", "Sin markdown") instruyen al modelo para evitar ciertas salidas, pero no son vinculantes. Usa ambas: stop sequences para garantías de terminación estructural, constraints negativas para dar forma al estilo del contenido.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Controla la salida: temas clave',
        'description': 'Conceptos clave para gestionar la salida estructurada de los modelos de IA',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Los tres niveles de control de salida', 'description': 'Enfoques basados en prompt, schema y constrained decoding con sus compensaciones' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Control del formato de salida mediante prompts', 'description': 'Técnicas específicas por modelo para lograr cumplimiento JSON sin constrained decoding' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Parámetros de muestreo', 'description': 'Temperature, Top-P, Top-K, max_tokens y parámetros de penalización explicados' },
          { '@type': 'ListItem', 'position': 4, 'name': 'La compensación razonamiento-formato', 'description': 'Comprensión de la reducción de precisión por constrained decoding y soluciones de dos etapas' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Stop sequences y constraints', 'description': 'Uso de constraints a nivel de API e instrucciones negativas para controlar los límites de salida' },
        ],
      },
      sections: {
        definition: {
          title: '¿Cuáles son los tres niveles de control de salida?',
          content: [
            'El control de salida opera en tres niveles distintos — basado en prompt, basado en schema y constrained decoding — cada uno ofreciendo garantías de formato progresivamente más fuertes con compensaciones progresivamente mayores frente a la calidad de razonamiento.',
            'El formato basado en prompt instruye al modelo mediante lenguaje natural ("Devuelve JSON con campos: nombre, email, puntuación"). Esto funciona entre el 80–95 % del tiempo, pero falla silenciosamente en casos límite sin garantías de tipo, requiriendo manejo de errores para el 5–20 % de respuestas malformadas. Los enfoques basados en schema (function calling / tool use) definen la estructura de salida formalmente con un 95–99 % de cumplimiento — pero el schema sigue siendo una sugerencia fuerte, no una constraint absoluta. El constrained decoding nativo usa máquinas de estados finita para enmascarar tokens inválidos en tiempo de generación, produciendo el 100 % de salidas válidas según el schema con certeza matemática.',
            'El enfoque de dos etapas — dejar que Claude Opus 4.8 o GPT-5.5 razonen libremente en la Etapa 1, luego alimentar la salida a un modelo especializado pequeño (Osmosis-Structure-0.6B) en la Etapa 2 — logra garantías de formato sin la penalización de calidad de razonamiento del constrained decoding.',
            'En una oración: Adapta el nivel de constraint de salida a la tarea — usa constrained decoding solo cuando la corrección de formato importa más que la profundidad de razonamiento.',
          ],
          columns: ['Nivel', 'Tasa de cumplimiento', 'Impacto en razonamiento', 'Mejor para'],
          rows: [
            { 'Nivel': 'Basado en prompt ("devuelve JSON")', 'Tasa de cumplimiento': '80–95 %', 'Impacto en razonamiento': 'Ninguno', 'Mejor para': 'Prototipos; pipelines simples' },
            { 'Nivel': 'Function calling / Tool use', 'Tasa de cumplimiento': '95–99 %', 'Impacto en razonamiento': 'Mínimo', 'Mejor para': 'La mayoría de aplicaciones de producción' },
            { 'Nivel': 'Constrained decoding nativo (estricto)', 'Tasa de cumplimiento': '100 %', 'Impacto en razonamiento': 'Reducción de calidad del 2–10 %', 'Mejor para': 'Extracción de datos; pipelines de alto volumen' },
            { 'Nivel': 'Dos etapas (texto libre → modelo especialista)', 'Tasa de cumplimiento': '~100 %', 'Impacto en razonamiento': 'Ninguno', 'Mejor para': 'Razonamiento complejo + formato garantizado' },
          ],
          tableFormat: true,
        },
        promptStructure: {
          title: '¿Cómo controlas el formato de salida mediante prompt engineering?',
          content: [
            'Las instrucciones explícitas de esquema de salida — colocadas al inicio del prompt del sistema para Claude Opus 4.8 e inmediatamente antes del contenido del usuario para GPT-5.5 — producen tasas de cumplimiento de salida estructurada del 85–95 % sin la penalización de calidad de razonamiento del constrained decoding nativo.',
            'Claude Opus 4.8 responde mejor a las instrucciones de formato de salida colocadas al inicio del prompt del sistema usando etiquetas de sección estilo XML. GPT-5.5 funciona mejor cuando el schema se coloca inmediatamente antes del contenido del usuario usando reglas de formato numeradas. Gemini 3.1 Pro produce la salida estructurada más fiable cuando el schema se repite tanto al inicio como al final del prompt.',
          ],
        },
        badPrompt: {
          content: ['**Prompt deficiente — sin estructura, sin especificación de formato:**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },
        goodPrompt: {
          title: '¿Cómo es un buen prompt de salida estructurada (Claude Opus 4.8)?',
          content: ['**Buen prompt — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },
        promptOutcome: {
          content: [
            'El prompt estructurado con XML ancla el contrato de formato de salida mientras preserva el razonamiento libre dentro del bloque `<task>`. No se necesita constrained decoding — Claude Opus 4.8 cumple en más del 93 % de las llamadas de producción con esta estructura.',
          ],
        },
        goodPromptGPT: {
          title: '¿Cómo es un buen prompt de salida estructurada (GPT-5.5)?',
          content: ['**Buen prompt — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },
        modelRules: {
          title: '¿Qué reglas de formato de salida aplican a cada modelo?',
          content: ['Cada LLM principal tiene preferencias estructurales distintas para el cumplimiento del formato de salida:'],
          items: [
            '**Claude Opus 4.8 (Anthropic)** — Etiquetas XML (`<output>`, `<format>`, `<constraints>`); schema al inicio; "Devuelve solo el JSON, nada más"',
            '**GPT-5.5 (OpenAI)** — Reglas de formato numeradas; schema después de la instrucción principal; "Responde con JSON válido. Sin markdown. Sin explicación."',
            '**Gemini 3.1 Pro (Google DeepMind)** — Schema conciso y explícito tanto al inicio como al final; ejemplo one-shot del formato de salida deseado en el prompt',
            '**Modelos locales vía Ollama** (LLaMA 3.1 7B, Mistral) — Más sensibles al desviamiento de formato; se requiere un ejemplo de formato one-shot directamente en el prompt para salida JSON fiable',
          ],
        },
        parameters: {
          title: '¿Qué parámetros de muestreo controlan la generación de salida?',
          content: [
            'Temperature (T), Top-P, Top-K, max_tokens, frequency_penalty y presence_penalty son seis parámetros independientes que determinan conjuntamente la longitud, la aleatoriedad y la repetición de la salida — y deben configurarse de forma consistente, no en conflicto.',
            'Temperature (T) escala la distribución softmax de salida: con T = 0,0 el modelo siempre selecciona el token de mayor probabilidad (determinista); con T = 2,0 la distribución es casi plana y la salida se vuelve incoherente. Top-P (muestreo de núcleo) selecciona del conjunto mínimo de tokens cuya probabilidad acumulada alcanza P — con Top-P = 0,9 el modelo considera solo los tokens que cubren el 90 % superior de la masa de probabilidad. Top-K restringe la generación a los K tokens de mayor probabilidad en cada paso; Top-K = 1 equivale al decoding voraz.',
            'La fórmula softmax con temperature: P(token) = exp(logit / T) / sum(exp(logits / T)). Cuando T se aproxima a 0, el token de mayor logit se aproxima a probabilidad 1,0. Cuando T se aproxima a infinito, todos los tokens se aproximan a igual probabilidad.',
          ],
          columns: ['Parámetro', 'Rango', 'Enfocado / Factual', 'Creativo / Diverso'],
          rows: [
            { 'Parámetro': 'Temperature (T)', 'Rango': '0,0–2,0', 'Enfocado / Factual': '0,0–0,3', 'Creativo / Diverso': '0,7–1,0' },
            { 'Parámetro': 'Top-P', 'Rango': '0,0–1,0', 'Enfocado / Factual': '0,3–0,5', 'Creativo / Diverso': '0,9–1,0' },
            { 'Parámetro': 'Top-K', 'Rango': '1–tamaño de vocabulario', 'Enfocado / Factual': '10–20', 'Creativo / Diverso': '50–100' },
            { 'Parámetro': 'max_tokens', 'Rango': 'dependiente de la tarea', 'Enfocado / Factual': '256–512', 'Creativo / Diverso': '2.048–8.192' },
            { 'Parámetro': 'frequency_penalty', 'Rango': '-2,0 a 2,0', 'Enfocado / Factual': '0,3–0,5 (reducir repetición)', 'Creativo / Diverso': '0,0–0,2' },
            { 'Parámetro': 'presence_penalty', 'Rango': '-2,0 a 2,0', 'Enfocado / Factual': '0,0–0,2', 'Creativo / Diverso': '0,5–0,8' },
          ],
          tableFormat: true,
        },
        parameterWarning: {
          content: [
            '**Regla crítica:** No configures Temperature y Top-P en valores altos simultáneamente. Temperature escala primero la distribución completa; luego Top-P muestrea de la masa de probabilidad superior ya escalada. Combinar T = 1,5 y Top-P = 0,95 produce salida más errática que cualquier parámetro por sí solo — los dos parámetros están diseñados para usarse como alternativas, no apilados.',
            '`frequency_penalty` reduce la probabilidad de tokens de forma proporcional a cuántas veces ya han aparecido — los valores positivos eliminan frases repetitivas; los negativos fomentan activamente la repetición. `presence_penalty` aplica una penalización única a cualquier token que ya haya aparecido, independientemente de la frecuencia — empuja al modelo a introducir nuevo vocabulario y temas en lugar de repetir los existentes.',
          ],
        },
        reasoningTradeoff: {
          title: '¿Cuál es la compensación entre calidad de razonamiento y garantías de formato de salida?',
          content: [
            'Forzar JSON mediante constrained decoding reduce la precisión del modelo en 2,26 puntos porcentuales en benchmarks de function calling — el parsing alineado con schema de BAML logró el 93,63 % de precisión en BFCL vs. 91,37 % para el constrained decoding estricto de OpenAI en el mismo benchmark.',
            'El mecanismo: el constrained decoding aplica una máquina de estados finita que enmascara tokens incompatibles con la posición actual del schema. Un modelo que quiere producir `51,7` para un campo float se ve obligado a producir `51` si el schema especifica entero — produciendo un resultado técnicamente válido pero factualmente degradado. El prompting chain-of-thought (CoT) es incompatible con el constrained decoding de la misma manera: incluir un campo de razonamiento obliga al modelo a escapar saltos de línea, comillas y caracteres especiales dentro de una cadena JSON — degradando mediblemente la calidad de razonamiento en todos los modelos probados.',
            'La solución lista para producción para sistemas que requieren tanto profundidad de razonamiento como garantías de formato: (1) **Etapa 1** — Envía a GPT-5.5 o Claude Opus 4.8 sin constraints: "Analiza esto, razona paso a paso, explica tu lógica." (2) **Etapa 2** — Alimenta la salida de la Etapa 1 a un modelo especializado pequeño (Osmosis-Structure-0.6B o GPT-5.5-mini con `strict: true`): "Extrae los datos clave de este análisis y devuélvelos en este schema JSON exacto."',
            'Esta arquitectura preserva la calidad de razonamiento de la Etapa 1 y logra el 100 % de cumplimiento de formato en la Etapa 2 a una fracción del costo de ejecutar un modelo de frontera completo en modo restringido.',
          ],
        },
        promptquorumTest: {
          title: '¿Cómo comparan los principales modelos en control de formato de salida?',
          content: [
            'Probado en [PromptQuorum](https://www.promptquorum.com/) — 30 prompts de control de salida despachados a tres modelos: Claude Opus 4.8 alcanzó el 93 % de cumplimiento JSON usando instrucciones de formato con etiquetas XML sin constrained decoding. GPT-5.5 alcanzó el 89 % de cumplimiento usando reglas de formato numeradas. Gemini 3.1 Pro alcanzó el 91 % de cumplimiento con el schema indicado tanto al inicio como al final. Los tres modelos produjeron razonamiento más corto y menos completo cuando se habilitó el constrained decoding con `strict: true` — consistente con la caída de precisión de 2,26 puntos observada en el benchmark BFCL.',
          ],
        },
        stopSequences: {
          title: '¿En qué se diferencian las stop sequences y las constraints negativas?',
          content: [
            'Las stop sequences — tokens que terminan inmediatamente la salida del modelo al generarse — son el mecanismo de control de salida más determinista: el modelo se detiene en el instante en que aparece la cadena especificada, independientemente del contexto restante.',
            'Las stop sequences se pasan como un array de cadenas en la llamada a la API (parámetro `stop` en OpenAI, `stop_sequences` en Anthropic). Usos comunes en producción:',
          ],
          items: [
            '`["###"]` — termina la generación después de un marcador de sección estructurado, evitando la continuación hacia contenido irrelevante',
            '`["</output>"]` — termina después de una etiqueta XML de cierre, asegurando que solo se devuelva el contenido etiquetado',
            '`["\\n\\n"]` — limita la salida a un único párrafo para tareas de clasificación o respuesta corta',
            '`["Human:", "User:"]` — evita que el modelo alucinara una continuación de conversación simulada',
          ],
        },
        stopSequencesConclusion: {
          content: [
            'Las constraints negativas en el cuerpo del prompt — "No incluyas explicaciones", "Sin markdown", "No añadas oraciones introductorias" — reducen los patrones de salida no deseados pero no pueden garantizar el cumplimiento de la forma en que lo hacen las stop sequences. Usa ambas: stop sequences para terminación estructural, constraints negativas para dar forma al contenido.',
          ],
        },
        formatChoices: {
          title: '¿Qué formato de salida usar para pipelines de producción?',
          content: [
            'JSON es el formato de salida dominante para pipelines LLM de producción porque se mapea directamente a objetos API, arrays y datos tipados — pero forzar JSON mediante constrained decoding sacrifica un 2–10 % de calidad de razonamiento, haciendo que la selección de formato sea una decisión arquitectónica significativa.',
            'TOON (Token-Optimised Output Notation) ha emergido como un formato de entrada eficiente para prompts estructurados largos — usa minimización de espacios en blanco y claves abreviadas para reducir el consumo de tokens de entrada antes de que el modelo genere la salida en JSON. Para la salida, la arquitectura de producción recomendada para 2026 es: TOON para la entrada (eficiencia de tokens) + JSON con constrained decoding para la salida (formato garantizado) — aplicado solo después de completarse el razonamiento libre de la Etapa 1.',
          ],
          columns: ['Formato de salida', 'Caso de uso', 'Notas'],
          rows: [
            { 'Formato de salida': 'JSON', 'Caso de uso': 'APIs, pipelines, almacenes de documentos', 'Notas': 'Soporte de salida estructurada nativa en todos los principales proveedores' },
            { 'Formato de salida': 'JSONL', 'Caso de uso': 'Flujos de eventos, procesamiento por lotes', 'Notas': 'Un objeto JSON por línea; adecuado para streaming y logging' },
            { 'Formato de salida': 'CSV', 'Caso de uso': 'Integración con sistemas legados', 'Notas': 'Más simple pero sin estructura anidada; bueno para datos tabulares' },
            { 'Formato de salida': 'YAML', 'Caso de uso': 'Artefactos de configuración', 'Notas': 'Legible por humanos; usado en contextos de CI/CD e infraestructura' },
            { 'Formato de salida': 'XML', 'Caso de uso': 'Integración empresarial', 'Notas': 'Verboso; preferido por Claude como formato de estructura de prompt, no de salida' },
            { 'Formato de salida': 'Markdown', 'Caso de uso': 'Informes legibles, documentación', 'Notas': 'Malo para parsing downstream; mejor para consumidores humanos' },
          ],
          tableFormat: true,
        },
        globalContext: {
          title: '¿Cuáles son las consideraciones globales y regionales para el control de salida?',
          content: [
            'Las empresas europeas que construyen pipelines LLM que procesan datos personales deben aplicar el Artículo 25 del RGPD (privacidad por diseño) al diseño del esquema de salida — las salidas que exponen campos de datos personales en payloads JSON requieren una base legal bajo el Artículo 6 del RGPD. La CNIL (autoridad francesa de protección de datos) emitió directrices en enero de 2026 indicando que las salidas de toma de decisiones automatizadas — incluidas las salidas LLM estructuradas usadas en workflows de puntuación o elegibilidad — pueden activar los derechos de revisión humana del Artículo 22 del RGPD.',
            'Para equipos de la UE que requieren inferencia on-premise con control de salida estructurada, Mistral AI (Francia) soporta constrained decoding basado en vLLM con parámetros JSON guiados — habilitando cumplimiento garantizado de JSON Schema completamente dentro de la infraestructura de la UE, satisfaciendo los requisitos de residencia de datos del RGPD bajo el Artículo 46. Mistral Large funciona on-premise con soporte de salida estructurada.',
            'Las empresas chinas usan Qwen 3 (Alibaba) y DeepSeek V3 (DeepSeek AI) para pipelines de producción con control de salida. Ambos modelos soportan modo JSON y son desplegables localmente en infraestructura empresarial china bajo las Medidas Provisionales de IA Generativa de China (2023). Las empresas japonesas que ejecutan inferencia local vía Ollama — LLaMA 3.1 7B con 8 GB de RAM, LLaMA 3.1 13B con 16 GB de RAM — se benefician de Outlines y XGrammar para constrained decoding en modelos auto-alojados, produciendo cumplimiento garantizado de JSON Schema sin llamadas a API externas.',
          ],
        },
        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          items: [
            'Antes de que existiera la salida estructurada, los modelos obtenían menos del 40 % en cumplimiento de JSON schema complejo; el `strict: true` de OpenAI logra el 100 %',
            'El constrained decoding reduce la precisión de razonamiento en 2,26 puntos porcentuales en benchmarks BFCL — usa el enfoque de dos etapas (razonamiento libre → modelo de estructuración especializado) para tareas complejas',
            'No configures Temperature y Top-P en valores altos simultáneamente — se combinan para producir salida más errática que cualquier parámetro por sí solo',
            '`frequency_penalty`: rango -2,0 a 2,0 reduce la repetición proporcional a la frecuencia; `presence_penalty`: rango -2,0 a 2,0 aplica una penalización fija a cualquier token visto anteriormente — ambos a 0,3–0,5 para salida factual enfocada',
            'Las stop sequences son el único mecanismo de terminación de salida determinista — a diferencia de las constraints negativas en el cuerpo del prompt, el modelo no puede anularlas',
            'Rangos de temperature: T = 0,0–0,3 para tareas factuales deterministas; T = 0,7–1,0 para tareas creativas; T > 1,2 arriesga incoherencia en uso de producción',
            'Claude Opus 4.8 logra el 93 % de cumplimiento JSON con prompts de formato etiquetados con XML; GPT-5.5 logra el 89 % con reglas de formato numeradas — ambos sin constrained decoding',
          ],
        },
        commonMistakes: {
          title: 'Errores comunes con el control de salida',
          mistakes: [
            {
              mistake: 'Configurar tanto Temperature como Top-P en valores altos',
              problem: 'Se combinan — T=1,5 + Top-P=0,95 produce salida más errática que cualquier parámetro por sí solo.',
              fix: 'Usa uno u otro como tu control principal de aleatoriedad, no ambos.'
            },
            {
              mistake: 'Forzar JSON en tareas de razonamiento complejo',
              problem: 'El constrained decoding reduce la precisión entre 2–10 %. El modelo sacrifica calidad de razonamiento para mantener el cumplimiento del schema.',
              fix: 'Usa el enfoque de dos etapas: razonamiento libre primero, luego extracción estructurada.'
            },
            {
              mistake: 'Escribir "devuelve JSON" sin mostrar el schema exacto',
              problem: 'El modelo adivina los nombres de campos, tipos y anidamiento — produciendo JSON inválido o malformado.',
              fix: 'Proporciona siempre el schema completo con tipos de campos y valores de enumeración.'
            },
            {
              mistake: 'Confiar en constraints negativas del cuerpo del prompt para el formato crítico',
              problem: '"No incluyas markdown" puede ser ignorado por el modelo, especialmente con temperature alta.',
              fix: 'Usa stop sequences a nivel de API — son el único mecanismo de terminación determinista.'
            },
            {
              mistake: 'Copiar configuraciones de temperature entre modelos',
              problem: 'T=0,7 en GPT-5.5 y T=0,7 en Claude producen distribuciones de probabilidad diferentes.',
              fix: 'Prueba cada configuración de parámetro por modelo en tu pipeline de producción.'
            }
          ],
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[¿Qué es el prompt engineering?](/es/prompt-engineering/what-is-prompt-engineering) — principios fundamentales detrás del diseño de instrucciones de IA estructuradas',
            '[Temperature y Top-P explicados](/es/prompt-engineering/temperature-and-top-p-control-ai-creativity) — análisis profundo de los dos parámetros primarios de aleatoriedad',
            '[Escribe mejor código con IA](/es/prompt-engineering/write-better-code-with-ai) — aplicando técnicas de control de salida en workflows de generación de código',
            'Tool use y function calling — salida estructurada vía definiciones de herramientas y schemas de función',
            '[Tokens y economía de tokens](/es/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — comprensión de los costos de tokens para constrained decoding y pipelines de dos etapas',
            'Manejo de errores en aplicaciones LLM — detección y recuperación de salida malformada en sistemas de producción',
          ],
        },
        howToStart: {
          title: 'Cómo controlar el formato de salida de la IA',
          numberedItems: [
            '**Especifica siempre el formato de salida deseado explícitamente en el prompt.** En lugar de "resume esto", di: "Resume como una lista de 5–7 puntos, cada uno de 1–2 oraciones. Usa voz activa. No incluyas opiniones." Sé específico sobre la estructura: puntos, tablas, JSON, markdown, texto plano.',
            '**Usa JSON schema para aplicar salida estructurada cuando esté disponible (OpenAI, Anthropic).** Si estás extrayendo datos o generando contenido legible por máquina, define el schema: nombres de campos, tipos, campos requeridos, constraints de enumeración. El modelo formateará la salida para que coincida automáticamente.',
            '**Proporciona un ejemplo del formato de salida exacto que quieres.** Muéstrale al modelo un ejemplo concreto: "Formatea así: { \\"topic\\": \\"...\\", \\"key_points\\": [...], \\"confidence\\": \\"high|medium|low\\" }." Los ejemplos son más potentes que las descripciones solas.',
            '**Usa lenguaje basado en constraints: "Debes X, no debes Y, siempre Z."** Evita el lenguaje suave ("intenta", "apunta a"). Di: "Devuelve exactamente 3 pasos, ni más ni menos. No uses jerga técnica. Siempre incluye una advertencia si la recomendación tiene limitaciones."',
            '**Prueba tu especificación de formato de salida en un ejemplo antes de ejecutarla a escala.** Genera una salida, comprueba si coincide con tu especificación, ajusta el prompt si es necesario. Esto evita descubrir problemas de formato después de procesar 100 elementos.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Cuál es la diferencia entre Temperature y Top-P en los LLMs?',
              a: 'Temperature (T) escala toda la distribución de probabilidad softmax de predicciones del siguiente token: T = 0,0 siempre selecciona el token de mayor probabilidad (determinista); T = 1,0 conserva la distribución natural; T = 2,0 la aplana hacia la aleatoriedad. Top-P (muestreo de núcleo) selecciona del conjunto mínimo de tokens cuya probabilidad acumulada alcanza P. Controlan aspectos diferentes y no deben configurarse ambos en valores altos simultáneamente.',
            },
            {
              q: '¿Forzar la salida JSON reduce la calidad de respuesta de la IA?',
              a: 'Sí — mediblemente. El benchmark de BAML en BFCL mostró que el parsing de texto libre alineado con schema alcanzó el 93,63 % de precisión vs. 91,37 % para el constrained decoding estricto — una reducción de 2,26 puntos. Para tareas de razonamiento complejo, el enfoque de dos etapas (texto libre → estructuración especializada) preserva la calidad logrando el 100 % de cumplimiento de formato.',
            },
            {
              q: '¿Qué es el constrained decoding y cómo garantiza la salida JSON?',
              a: 'El constrained decoding aplica una FSM sobre el proceso de generación de tokens. En cada paso, la FSM evalúa qué tokens producirían salida compatible con el schema en la posición actual — y enmascara todos los demás a probabilidad cero. OpenAI lo implementa vía `response_format: { type: "json_schema", strict: true }`. Anthropic vía Strict Tool Use Mode.',
            },
            {
              q: '¿Qué formato de salida debo usar para pipelines LLM de producción?',
              a: 'JSON es el estándar para pipelines LLM de producción. Usa JSONL para flujos de eventos y procesamiento por lotes. Usa CSV solo para compatibilidad con sistemas legados. La arquitectura recomendada para 2026: TOON para eficiencia de tokens de entrada + JSON con constrained decoding solo para la salida de la Etapa 2.',
            },
            {
              q: '¿En qué se diferencian las stop sequences de las constraints negativas en los prompts?',
              a: 'Las stop sequences se aplican a nivel de API — el modelo se detiene en el instante en que aparece la cadena especificada, sin excepciones. Las constraints negativas en el cuerpo del prompt no son vinculantes — el modelo puede violarlas. Usa ambas: stop sequences para terminación estructural, constraints negativas para dar forma al contenido.',
            },
          ],
        },
        sources: {
          title: 'Fuentes y lecturas adicionales',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — documentación oficial sobre constrained decoding, modo JSON estricto y garantías de cumplimiento de schema',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — benchmark mostrando 93,63 % vs. 91,37 % de precisión: parsing alineado con schema vs. constrained decoding en BFCL',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — análisis de arquitectura de producción: entrada TOON + salida JSON restringida',
          ],
        },
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Techniques',
      title: 'التحكم في المخرجات: التوافق مع ⁨JSON Schema⁩ والفك المقيّد واختيار التنسيق',
      intro: '**يحقق الفك المقيّد (Constrained Decoding) توافقًا ١٠٠٪ مع مخطط JSON — لا مزيد من المخرجات المشوّهة. قبل هذه التقنية، كانت النماذج تحقق أقل من ٤٠٪ في المخططات المعقدة وتفشل صامتةً في الحالات الحدية. التحكم في المخرجات هو المتغيّر الهندسي الذي يُميّز النماذج الأولية (نجاح ٨٠٪) عن أنظمة الإنتاج (موثوقية ١٠٠٪).**',
      publishDate: '2026-03-24',
      readTime: '١٠ دقائق للقراءة',
      seoTitle: 'التحكم في مخرجات الذكاء الاصطناعي وتوافق ⁨JSON 2026⁩',
      metaDescription: 'وضع ⁨JSON⁩ والفك المقيّد يحقّقان توافق ⁨100%⁩ مع المخطط. مسارات من مرحلتين لـ⁨GPT⁩ و⁨Claude⁩ و⁨Gemini⁩ في الإنتاج دون فقدان جودة الاستدلال.',
      ogTitle: 'من ٤٠٪ إلى ١٠٠٪ توافق JSON — الفك المقيّد يغيّر كل شيء',
      ogDescription: 'التنسيق عبر الموجّه وحده يفشل ٦٠٪ من الوقت. الوضع الصارم يضمن التوافق مع المخطط على مستوى الرمز. دليل إعداد شامل.',
      twitterTitle: 'التحكم في مخرجات الذكاء الاصطناعي: JSON ودرجة الحرارة وتسلسلات التوقف (٢٠٢٦)',
      twitterDescription: 'الفك المقيّد = توافق ١٠٠٪ مع المخطط لكن مع انخفاض ٢-١٠٪ في الدقة. درجة الحرارة ٠.٠-٠.١ لـ⁨JSON⁩ الإنتاجي. المقايضات التي لا يخبرك بها أحد.',
      educationalLevel: 'مبتدئ',
      audience: 'المطورون الذين يبنون مسارات نماذج اللغة الإنتاجية التي تتطلب مخرجات منظّمة',
      toc: [
        { label: 'ما هي المستويات الثلاثة للتحكم في المخرجات؟', anchor: 'three-levels' },
        { label: 'كيف تتحكم في تنسيق المخرجات عبر هندسة الموجّهات؟', anchor: 'prompt-engineering' },
        { label: 'كيف يبدو موجّه مخرجات منظّمة جيد؟', anchor: 'good-prompt' },
        { label: 'ما قواعد تنسيق المخرجات التي تنطبق على كل نموذج؟', anchor: 'model-rules' },
        { label: 'ما معاملات أخذ العينات التي تتحكم في توليد المخرجات؟', anchor: 'sampling-parameters' },
        { label: 'ما المقايضة بين الاستدلال والتنسيق؟', anchor: 'reasoning-tradeoff' },
        { label: 'كيف تقارن النماذج الرئيسية في التحكم في التنسيق؟', anchor: 'model-comparison' },
        { label: 'كيف تختلف تسلسلات التوقف عن القيود السلبية؟', anchor: 'stop-sequences' },
        { label: 'ما تنسيق المخرجات الذي تستخدمه في الإنتاج؟', anchor: 'production-format' },
        { label: 'ما الاعتبارات العالمية والإقليمية؟', anchor: 'global-regional' },
        { label: 'النقاط الرئيسية', anchor: 'key-takeaways' },
        { label: 'كيفية التحكم في تنسيق مخرجات الذكاء الاصطناعي (خطوة بخطوة)', anchor: 'how-to' },
        { label: 'الأخطاء الشائعة', anchor: 'common-mistakes' },
        { label: 'الأسئلة الشائعة', anchor: 'faq' },
        { label: 'المصادر', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'التحكم في المخرجات: التوافق مع JSON Schema والفك المقيّد واختيار التنسيق',
        description: 'أتقن التحكم في المخرجات في نماذج اللغة الكبيرة: الفك المقيّد والتنسيق القائم على الموجّهات ومعاملات أخذ العينات ومقايضة جودة الاستدلال. دليل إنتاجي لـJSON وJSONL وCSV.',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/control-the-output',
        inLanguage: 'ar',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/ar/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['التحكم في المخرجات', 'الفك المقيّد', 'مخطط JSON', 'المخرجات المنظّمة', 'درجة الحرارة', 'top-p', 'معاملات أخذ العينات', 'هندسة الموجّهات'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'مبتدئ',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ما الفرق بين درجة الحرارة وTop-P في نماذج اللغة الكبيرة؟',
            acceptedAnswer: { '@type': 'Answer', text: 'درجة الحرارة (T) تُوسّع توزيع احتمال softmax الكامل لتنبؤات الرمز التالي: T = 0.0 دائمًا يختار الرمز الأعلى احتمالًا (حتمي)؛ T = 1.0 يحفظ التوزيع الطبيعي؛ T = 2.0 يُسوّيه نحو العشوائية. Top-P (أخذ عينات النواة) يختار من المجموعة الدنيا من الرموز التي يبلغ احتمالها المتراكم P. يتحكمان في جوانب مختلفة ولا ينبغي ضبط كليهما على قيم عالية في آن واحد.' },
          },
          {
            '@type': 'Question',
            name: 'هل يُقلّل إجبار مخرجات JSON من جودة استجابات الذكاء الاصطناعي؟',
            acceptedAnswer: { '@type': 'Answer', text: 'نعم — بشكل قابل للقياس. أظهر مؤشر BAML في BFCL أن تحليل النص الحر المتوافق مع المخطط حقق دقة ٩٣.٦٣٪ مقابل ٩١.٣٧٪ للفك المقيّد الصارم — انخفاض جودة بمقدار ٢.٢٦ نقطة. للمهام التي تتطلب استدلالًا معقدًا، يحافظ نهج المرحلتين (نص حر → هيكلة متخصصة) على الجودة مع تحقيق توافق ١٠٠٪.' },
          },
          {
            '@type': 'Question',
            name: 'ما الفك المقيّد وكيف يضمن مخرجات JSON؟',
            acceptedAnswer: { '@type': 'Answer', text: 'الفك المقيّد يُطبّق آلة حالات محدودة (FSM) على عملية توليد الرموز. في كل خطوة، تُقيّم الـFSM الرموز التي ستنتج مخرجات متوافقة مع المخطط في الموضع الحالي — وتُقنّع جميع الرموز الأخرى باحتمال صفري. تُنفّذه OpenAI عبر `response_format: { type: "json_schema", strict: true }`. تُنفّذه Anthropic عبر وضع استخدام الأداة الصارم.' },
          },
          {
            '@type': 'Question',
            name: 'ما تنسيق المخرجات الذي يجب أن أستخدمه لمسارات نماذج اللغة الإنتاجية؟',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON هو المعيار لمسارات نماذج اللغة الإنتاجية لأنه يُعيَّن مباشرةً على كائنات API المُحدَّدة النوع ومدعوم أصلًا من جميع المزوّدين الرئيسيين. استخدم JSONL لتدفقات الأحداث والمعالجة الدفعية. استخدم CSV فقط للتوافق مع الأنظمة القديمة. البنية الموصى بها لعام ٢٠٢٦: TOON لكفاءة رموز الإدخال + JSON مع الفك المقيّد لمخرجات المرحلة الثانية فقط.' },
          },
          {
            '@type': 'Question',
            name: 'كيف تختلف تسلسلات التوقف عن القيود السلبية في الموجّهات؟',
            acceptedAnswer: { '@type': 'Answer', text: 'تسلسلات التوقف تُطبَّق على مستوى API/الاستدلال — يتوقف النموذج فورًا حين تظهر السلسلة المحددة، دون استثناءات. القيود السلبية في نص الموجّه ("لا تُضمّن التفسيرات"، "بلا markdown") تُوجّه النموذج لتجنب مخرجات معينة، لكنها غير ملزِمة. استخدم كليهما: تسلسلات التوقف لضمانات الإنهاء البنيوي، القيود السلبية لتشكيل أسلوب المحتوى.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'التحكم في المخرجات: الموضوعات الرئيسية',
        'description': 'المفاهيم الرئيسية لإدارة المخرجات المنظّمة لنماذج الذكاء الاصطناعي',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'المستويات الثلاثة للتحكم في المخرجات', 'description': 'أساليب الموجّه والمخطط والفك المقيّد مع مقايضاتها' },
          { '@type': 'ListItem', 'position': 2, 'name': 'التحكم في تنسيق المخرجات عبر الموجّهات', 'description': 'تقنيات خاصة بكل نموذج لتحقيق التوافق مع JSON بدون الفك المقيّد' },
          { '@type': 'ListItem', 'position': 3, 'name': 'معاملات أخذ العينات', 'description': 'درجة الحرارة وTop-P وTop-K وmax_tokens ومعاملات العقوبة موضّحة' },
          { '@type': 'ListItem', 'position': 4, 'name': 'مقايضة الاستدلال والتنسيق', 'description': 'فهم انخفاض الدقة من الفك المقيّد وحلول المرحلتين' },
          { '@type': 'ListItem', 'position': 5, 'name': 'تسلسلات التوقف والقيود', 'description': 'استخدام القيود على مستوى API والتعليمات السلبية للتحكم في حدود المخرجات' },
        ],
      },
      sections: {
        definition: {
          title: 'ما هي المستويات الثلاثة للتحكم في المخرجات؟',
          content: [
            'يعمل التحكم في المخرجات على ثلاثة مستويات متمايزة — القائم على الموجّه والقائم على المخطط والفك المقيّد — حيث يقدّم كل منها ضمانات تنسيق أقوى تدريجيًّا مع مقايضات أكبر تدريجيًّا في مقابل جودة الاستدلال.',
            'التنسيق القائم على الموجّه يُعطي النموذج تعليمات بلغة طبيعية ("أعِد JSON بالحقول: الاسم والبريد الإلكتروني والنتيجة"). يعمل هذا في ٨٠-٩٥٪ من الحالات، لكنه يفشل صامتًا في الحالات الحدية. الأساليب القائمة على المخطط (استدعاء الوظائف/استخدام الأدوات) تُعرّف بنية المخرجات رسميًّا بتوافق ٩٥-٩٩٪. الفك المقيّد الأصلي يستخدم آلات حالات محدودة لإخفاء الرموز غير الصالحة في وقت التوليد، منتجًا ١٠٠٪ من المخرجات الصالحة وفق المخطط.',
            'نهج المرحلتين — ترك Claude Opus 4.8 أو GPT-5.5 يستدلّان بحرية في المرحلة الأولى، ثم تغذية المخرجات لنموذج متخصص صغير في المرحلة الثانية — يحقق ضمانات التنسيق دون عقوبة جودة الاستدلال من الفك المقيّد.',
            'بكلمة واحدة: كيّف مستوى قيد المخرجات بالمهمة — استخدم الفك المقيّد فقط عندما تكون صحة التنسيق أهم من عمق الاستدلال.',
          ],
          columns: ['المستوى', 'معدل التوافق', 'تأثير الاستدلال', 'الأفضل لـ'],
          rows: [
            { 'المستوى': 'قائم على الموجّه ("أعِد JSON")', 'معدل التوافق': '٨٠-٩٥٪', 'تأثير الاستدلال': 'لا يوجد', 'الأفضل لـ': 'النماذج الأولية؛ المسارات البسيطة' },
            { 'المستوى': 'استدعاء الوظائف / استخدام الأدوات', 'معدل التوافق': '٩٥-٩٩٪', 'تأثير الاستدلال': 'ضئيل', 'الأفضل لـ': 'معظم تطبيقات الإنتاج' },
            { 'المستوى': 'الفك المقيّد الأصلي (صارم)', 'معدل التوافق': '١٠٠٪', 'تأثير الاستدلال': 'انخفاض جودة ٢-١٠٪', 'الأفضل لـ': 'استخراج البيانات؛ مسارات الحجم الكبير' },
            { 'المستوى': 'مرحلتان (نص حر → نموذج متخصص)', 'معدل التوافق': '~١٠٠٪', 'تأثير الاستدلال': 'لا يوجد', 'الأفضل لـ': 'استدلال معقد + تنسيق مضمون' },
          ],
          tableFormat: true,
        },
        promptStructure: {
          title: 'كيف تتحكم في تنسيق المخرجات عبر هندسة الموجّهات؟',
          content: [
            'تعليمات مخطط المخرجات الصريحة — الموضوعة في بداية موجّه النظام لـClaude Opus 4.8 وفورًا قبل محتوى المستخدم لـGPT-5.5 — تنتج معدلات توافق مخرجات منظّمة تبلغ ٨٥-٩٥٪ دون عقوبة جودة الاستدلال من الفك المقيّد الأصلي.',
            'يستجيب Claude Opus 4.8 بشكل أفضل لتعليمات تنسيق المخرجات الموضوعة في بداية موجّه النظام باستخدام علامات أقسام بأسلوب XML. يعمل GPT-5.5 بشكل أفضل حين يُوضع المخطط فورًا قبل محتوى المستخدم باستخدام قواعد تنسيق مُرقَّمة. Gemini 3.1 Pro ينتج المخرجات المنظّمة الأكثر موثوقية حين يُكرَّر المخطط في بداية الموجّه ونهايته.',
          ],
        },
        badPrompt: {
          content: ['**موجّه ضعيف — بلا بنية ولا تحديد تنسيق:**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },
        goodPrompt: {
          title: 'كيف يبدو موجّه مخرجات منظّمة جيد (Claude Opus 4.8)؟',
          content: ['**موجّه جيد — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },
        promptOutcome: {
          content: [
            'الموجّه المنظّم بـXML يُرسّخ عقد تنسيق المخرجات مع الحفاظ على الاستدلال الحر داخل الكتلة `<task>`. لا حاجة للفك المقيّد — Claude Opus 4.8 يلتزم في أكثر من ٩٣٪ من استدعاءات الإنتاج بهذه البنية.',
          ],
        },
        goodPromptGPT: {
          title: 'كيف يبدو موجّه مخرجات منظّمة جيد (GPT-5.5)؟',
          content: ['**موجّه جيد — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },
        modelRules: {
          title: 'ما قواعد تنسيق المخرجات التي تنطبق على كل نموذج؟',
          content: ['لكل نموذج لغة كبير رئيسي تفضيلات بنيوية متمايزة للتوافق مع تنسيق المخرجات:'],
          items: [
            '**Claude Opus 4.8 (Anthropic)** — علامات XML (`<output>`, `<format>`, `<constraints>`)؛ المخطط في البداية؛ "أعِد JSON فقط، لا شيء آخر"',
            '**GPT-5.5 (OpenAI)** — قواعد تنسيق مُرقَّمة؛ المخطط بعد التعليمة الرئيسية؛ "استجب بـJSON صالح. بلا markdown. بلا تفسير."',
            '**Gemini 3.1 Pro (Google DeepMind)** — مخطط موجز وصريح في البداية والنهاية؛ مثال one-shot للتنسيق المطلوب في الموجّه',
            '**النماذج المحلية عبر Ollama** (LLaMA 3.1 7B, Mistral) — أكثر حساسية لانجراف التنسيق؛ مثال تنسيق one-shot مباشرةً في الموجّه مطلوب لمخرجات JSON موثوقة',
          ],
        },
        parameters: {
          title: 'ما معاملات أخذ العينات التي تتحكم في توليد المخرجات؟',
          content: [
            'درجة الحرارة (T) وTop-P وTop-K وmax_tokens وfrequency_penalty وpresence_penalty ستة معاملات مستقلة تُحدد معًا طول المخرجات وعشوائيتها وتكرارها — ويجب ضبطها بشكل متسق لا متعارض.',
            'درجة الحرارة (T) تُوسّع توزيع softmax للمخرجات: مع T = 0.0 يختار النموذج دائمًا الرمز الأعلى احتمالًا (حتمي)؛ مع T = 2.0 يكاد يكون التوزيع مسطّحًا وتصبح المخرجات متشتتة. Top-P (أخذ عينات النواة) يختار من المجموعة الدنيا من الرموز التي يبلغ احتمالها المتراكم P. Top-K يُقيّد التوليد على الرموز الـK الأعلى احتمالًا في كل خطوة.',
            'صيغة softmax مع درجة الحرارة: P(token) = exp(logit / T) / sum(exp(logits / T)). حين تقترب T من الصفر، يقترب الرمز الأعلى logit من احتمال 1.0.',
          ],
          columns: ['المعامل', 'النطاق', 'مركّز / واقعي', 'إبداعي / متنوع'],
          rows: [
            { 'المعامل': 'درجة الحرارة (T)', 'النطاق': '0.0–2.0', 'مركّز / واقعي': '0.0–0.3', 'إبداعي / متنوع': '0.7–1.0' },
            { 'المعامل': 'Top-P', 'النطاق': '0.0–1.0', 'مركّز / واقعي': '0.3–0.5', 'إبداعي / متنوع': '0.9–1.0' },
            { 'المعامل': 'Top-K', 'النطاق': '1–حجم المفردات', 'مركّز / واقعي': '10–20', 'إبداعي / متنوع': '50–100' },
            { 'المعامل': 'max_tokens', 'النطاق': 'يعتمد على المهمة', 'مركّز / واقعي': '256–512', 'إبداعي / متنوع': '2048–8192' },
            { 'المعامل': 'frequency_penalty', 'النطاق': '-2.0 إلى 2.0', 'مركّز / واقعي': '0.3–0.5 (تقليل التكرار)', 'إبداعي / متنوع': '0.0–0.2' },
            { 'المعامل': 'presence_penalty', 'النطاق': '-2.0 إلى 2.0', 'مركّز / واقعي': '0.0–0.2', 'إبداعي / متنوع': '0.5–0.8' },
          ],
          tableFormat: true,
        },
        parameterWarning: {
          content: [
            '**قاعدة حرجة:** لا تضبط درجة الحرارة وTop-P على قيم عالية في آن واحد. درجة الحرارة تُوسّع التوزيع الكامل أولًا؛ ثم يأخذ Top-P عينات من كتلة الاحتمال العلوية المُوسَّعة بالفعل. الجمع بين T = 1.5 وTop-P = 0.95 ينتج مخرجات أكثر اضطرابًا من أي معامل منفردًا.',
            '`frequency_penalty` يُقلّل احتمال الرموز بنسبة تتناسب مع عدد مرات ظهورها — القيم الموجبة تُزيل العبارات المتكررة؛ السلبية تُشجّع التكرار بنشاط. `presence_penalty` يُطبّق عقوبة لمرة واحدة على أي رمز ظهر بالفعل، بصرف النظر عن التكرار — يدفع النموذج لإدخال مفردات ومواضيع جديدة.',
          ],
        },
        reasoningTradeoff: {
          title: 'ما المقايضة بين جودة الاستدلال وضمانات تنسيق المخرجات؟',
          content: [
            'إجبار JSON عبر الفك المقيّد يُقلّل دقة النموذج بمقدار ٢.٢٦ نقطة مئوية في معايير استدعاء الوظائف — حقّق تحليل النص الحر المتوافق مع مخطط BAML دقة ٩٣.٦٣٪ في BFCL مقابل ٩١.٣٧٪ للفك المقيّد الصارم في نفس المعيار.',
            'الآلية: الفك المقيّد يُطبّق آلة حالات محدودة تُخفي الرموز غير المتوافقة مع موضع المخطط الحالي. نموذج يريد إنتاج `51.7` لحقل عائم يُجبر على إنتاج `51` إن حدّد المخطط عددًا صحيحًا — منتجًا نتيجةً صالحة تقنيًّا لكن متدنية واقعيًّا. موجّهات التفكير التسلسلي (CoT) غير متوافقة مع الفك المقيّد بنفس الطريقة.',
            'الحل الجاهز للإنتاج للأنظمة التي تتطلب عمق الاستدلال وضمانات التنسيق: (١) **المرحلة الأولى** — أرسل إلى GPT-5.5 أو Claude Opus 4.8 بلا قيود: "حلّل هذا، استدلّ خطوةً بخطوة، اشرح منطقك." (٢) **المرحلة الثانية** — أطعم مخرجات المرحلة الأولى لنموذج متخصص صغير: "استخرج البيانات الرئيسية من هذا التحليل وأعِدها بمخطط JSON هذا بالضبط."',
          ],
        },
        promptquorumTest: {
          title: 'كيف تقارن النماذج الرئيسية في التحكم في تنسيق المخرجات؟',
          content: [
            'اختُبر في [PromptQuorum](https://www.promptquorum.com/) — ٣٠ موجّه تحكم في المخرجات أُرسلت لثلاثة نماذج: حقق Claude Opus 4.8 توافق JSON بنسبة ٩٣٪ باستخدام تعليمات تنسيق بعلامات XML بدون الفك المقيّد. حقق GPT-5.5 توافق ٨٩٪ باستخدام قواعد تنسيق مُرقَّمة. حقق Gemini 3.1 Pro توافق ٩١٪ مع المخطط المُشار إليه في البداية والنهاية. أنتجت النماذج الثلاثة استدلالًا أقصر وأقل اكتمالًا حين فُعّل الفك المقيّد بـ`strict: true`.',
          ],
        },
        stopSequences: {
          title: 'كيف تختلف تسلسلات التوقف عن القيود السلبية؟',
          content: [
            'تسلسلات التوقف — الرموز التي تُنهي مخرجات النموذج فورًا عند توليدها — هي آلية التحكم في المخرجات الأكثر حتمية: يتوقف النموذج في اللحظة التي تظهر فيها السلسلة المحددة، بصرف النظر عن السياق المتبقي.',
            'تُمرَّر تسلسلات التوقف كمصفوفة من السلاسل في استدعاء API (معامل `stop` في OpenAI، `stop_sequences` في Anthropic). استخدامات إنتاجية شائعة:',
          ],
          items: [
            '`["###"]` — تُنهي التوليد بعد علامة قسم منظّمة، مانعةً الاستمرار نحو محتوى غير ذي صلة',
            '`["</output>"]` — تُنهي بعد علامة إغلاق XML، ضامنةً إعادة المحتوى المُعلَّم فقط',
            '`["\\n\\n"]` — تحدّ المخرجات بفقرة واحدة لمهام التصنيف أو الإجابات القصيرة',
            '`["Human:", "User:"]` — تمنع النموذج من هلوسة استمرار محادثة محاكاة',
          ],
        },
        stopSequencesConclusion: {
          content: [
            'القيود السلبية في نص الموجّه — "لا تُضمّن التفسيرات"، "بلا markdown"، "لا تُضف جملًا تمهيدية" — تُقلّل أنماط المخرجات غير المرغوب فيها لكنها لا تستطيع ضمان التوافق كما تفعل تسلسلات التوقف. استخدم كليهما: تسلسلات التوقف للإنهاء البنيوي، القيود السلبية لتشكيل المحتوى.',
          ],
        },
        formatChoices: {
          title: 'ما تنسيق المخرجات الذي تستخدمه لمسارات الإنتاج؟',
          content: [
            'JSON هو تنسيق المخرجات السائد لمسارات نماذج اللغة الإنتاجية لأنه يُعيَّن مباشرةً على كائنات API والمصفوفات والبيانات المُحدَّدة النوع — لكن إجبار JSON عبر الفك المقيّد يُضحّي بـ٢-١٠٪ من جودة الاستدلال.',
            'TOON (تدوين المخرجات المُحسَّن للرموز) برز كتنسيق إدخال فعّال للموجّهات المنظّمة الطويلة — يستخدم تقليل المسافات البيضاء والمفاتيح المختصرة لتقليل استهلاك رموز الإدخال. البنية الإنتاجية الموصى بها لعام ٢٠٢٦: TOON للإدخال (كفاءة الرموز) + JSON مع الفك المقيّد للمخرجات فقط بعد الاستدلال الحر للمرحلة الأولى.',
          ],
          columns: ['تنسيق المخرجات', 'حالة الاستخدام', 'ملاحظات'],
          rows: [
            { 'تنسيق المخرجات': 'JSON', 'حالة الاستخدام': 'واجهات API والمسارات ومخازن المستندات', 'ملاحظات': 'دعم مخرجات منظّمة أصلي من جميع المزوّدين الرئيسيين' },
            { 'تنسيق المخرجات': 'JSONL', 'حالة الاستخدام': 'تدفقات الأحداث والمعالجة الدفعية', 'ملاحظات': 'كائن JSON واحد لكل سطر؛ مناسب للبثّ والتسجيل' },
            { 'تنسيق المخرجات': 'CSV', 'حالة الاستخدام': 'التكامل مع الأنظمة القديمة', 'ملاحظات': 'أبسط لكن بلا بنية متداخلة؛ جيد للبيانات الجدولية' },
            { 'تنسيق المخرجات': 'YAML', 'حالة الاستخدام': 'قطع الإعداد', 'ملاحظات': 'قابل للقراءة البشرية؛ يُستخدم في سياقات CI/CD والبنية التحتية' },
            { 'تنسيق المخرجات': 'XML', 'حالة الاستخدام': 'التكامل المؤسسي', 'ملاحظات': 'مطوّل؛ يفضّله Claude كتنسيق بنية موجّه، لا كمخرجات' },
            { 'تنسيق المخرجات': 'Markdown', 'حالة الاستخدام': 'التقارير القابلة للقراءة والتوثيق', 'ملاحظات': 'سيء للمعالجة اللاحقة؛ أفضل للمستهلكين البشريين' },
          ],
          tableFormat: true,
        },
        globalContext: {
          title: 'ما الاعتبارات العالمية والإقليمية للتحكم في المخرجات؟',
          content: [
            'الشركات الأوروبية التي تبني مسارات نماذج لغة تعالج بيانات شخصية يجب تطبيق المادة ٢٥ من GDPR (الخصوصية بالتصميم) على تصميم مخطط المخرجات — المخرجات التي تكشف حقول بيانات شخصية في حمولات JSON تتطلب أساسًا قانونيًّا بموجب المادة ٦ من GDPR.',
            'للفرق الأوروبية التي تتطلب الاستدلال في الموقع مع التحكم في المخرجات المنظّمة، تدعم Mistral AI (فرنسا) الفك المقيّد القائم على vLLM مع معاملات JSON الموجَّهة — مما يُتيح التوافق المضمون مع JSON Schema داخل البنية التحتية الأوروبية بالكامل، مُرضيًا متطلبات إقامة البيانات من GDPR بموجب المادة ٤٦.',
            'الشركات الصينية تستخدم Qwen 3 (Alibaba) وDeepSeek V3 (DeepSeek AI) لمسارات الإنتاج بالتحكم في المخرجات. كلا النموذجين يدعمان وضع JSON وقابلان للنشر محليًّا في البنية التحتية المؤسسية الصينية بموجب المراسيم المؤقتة للذكاء الاصطناعي التوليدي في الصين (٢٠٢٣).',
          ],
        },
        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          items: [
            'قبل وجود المخرجات المنظّمة، كانت النماذج تحقق أقل من ٤٠٪ في توافق مخطط JSON المعقد؛ يحقق `strict: true` في OpenAI ١٠٠٪',
            'الفك المقيّد يُقلّل دقة الاستدلال بمقدار ٢.٢٦ نقطة مئوية في معايير BFCL — استخدم نهج المرحلتين (استدلال حر → نموذج هيكلة متخصص) للمهام المعقدة',
            'لا تضبط درجة الحرارة وTop-P على قيم عالية في آن واحد — يتضافران لإنتاج مخرجات أكثر اضطرابًا من أي معامل منفردًا',
            '`frequency_penalty`: نطاق -2.0 إلى 2.0 يُقلّل التكرار بنسبة لتكراره؛ `presence_penalty`: نطاق -2.0 إلى 2.0 يُطبّق عقوبة ثابتة على أي رمز رُئي سابقًا — كلاهما عند 0.3-0.5 للمخرجات الواقعية المركّزة',
            'تسلسلات التوقف هي الآلية الوحيدة الحتمية لإنهاء المخرجات — على خلاف القيود السلبية في نص الموجّه، لا يستطيع النموذج تجاوزها',
            'نطاقات درجة الحرارة: T = 0.0-0.3 للمهام الواقعية الحتمية؛ T = 0.7-1.0 للمهام الإبداعية؛ T > 1.2 تُخاطر بالتشتت في الاستخدام الإنتاجي',
            'يحقق Claude Opus 4.8 توافق JSON بنسبة ٩٣٪ بموجّهات تنسيق مُعلَّمة بـXML؛ يحقق GPT-5.5 ٨٩٪ بقواعد تنسيق مُرقَّمة — كلاهما بدون الفك المقيّد',
          ],
        },
        commonMistakes: {
          title: 'الأخطاء الشائعة في التحكم في المخرجات',
          mistakes: [
            {
              mistake: 'ضبط درجة الحرارة وTop-P معًا على قيم عالية',
              problem: 'يتضافران — T=1.5 + Top-P=0.95 ينتجان مخرجات أكثر اضطرابًا من أي معامل منفردًا.',
              fix: 'استخدم أحدهما كعنصر تحكم رئيسي في العشوائية، لا كليهما.'
            },
            {
              mistake: 'إجبار JSON في مهام الاستدلال المعقد',
              problem: 'الفك المقيّد يُقلّل الدقة بين ٢-١٠٪. يُضحّي النموذج بجودة الاستدلال للحفاظ على توافق المخطط.',
              fix: 'استخدم نهج المرحلتين: استدلال حر أولًا، ثم استخراج منظّم.'
            },
            {
              mistake: 'كتابة "أعِد JSON" بدون إظهار المخطط الدقيق',
              problem: 'النموذج يخمّن أسماء الحقول والأنواع والتداخل — منتجًا JSON غير صالح أو مشوّه.',
              fix: 'قدّم دائمًا المخطط الكامل بأنواع الحقول وقيم التعداد.'
            },
            {
              mistake: 'الاعتماد على القيود السلبية في نص الموجّه للتنسيق الحرج',
              problem: '"لا تُضمّن markdown" قد يتجاهله النموذج، خاصةً مع درجة حرارة عالية.',
              fix: 'استخدم تسلسلات التوقف على مستوى API — إنها الآلية الوحيدة الحتمية للإنهاء.'
            },
            {
              mistake: 'نسخ إعدادات درجة الحرارة بين النماذج',
              problem: 'T=0.7 في GPT-5.5 وT=0.7 في Claude ينتجان توزيعات احتمال مختلفة.',
              fix: 'اختبر كل إعداد معامل لكل نموذج في مسار الإنتاج الخاص بك.'
            }
          ],
        },
        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[ما هي هندسة الموجّهات؟](/ar/prompt-engineering/what-is-prompt-engineering) — المبادئ الأساسية وراء تصميم تعليمات الذكاء الاصطناعي المنظّمة',
            '[درجة الحرارة وTop-P موضّحَان](/ar/prompt-engineering/temperature-and-top-p-control-ai-creativity) — تحليل معمّق للمعاملين الرئيسيين للعشوائية',
            '[اكتب كودًا أفضل بالذكاء الاصطناعي](/ar/prompt-engineering/write-better-code-with-ai) — تطبيق تقنيات التحكم في المخرجات في سير عمل توليد الكود',
            'استخدام الأدوات واستدعاء الوظائف — المخرجات المنظّمة عبر تعريفات الأدوات ومخططات الوظائف',
            '[الرموز واقتصادياتها](/ar/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — فهم تكاليف الرموز للفك المقيّد ومسارات المرحلتين',
          ],
        },
        howToStart: {
          title: 'كيفية التحكم في تنسيق مخرجات الذكاء الاصطناعي',
          numberedItems: [
            '**حدّد دائمًا تنسيق المخرجات المطلوب بشكل صريح في الموجّه.** بدلًا من "لخّص هذا"، قل: "لخّص كقائمة من ٥-٧ نقاط، كل منها من ١-٢ جملة. استخدم الصوت الفاعل. لا تُضمّن آراءً." كن محددًا بشأن البنية: نقاط أو جداول أو JSON أو markdown أو نص عادي.',
            '**استخدم مخطط JSON لتطبيق المخرجات المنظّمة حين تتوفر (OpenAI، Anthropic).** إن كنت تستخرج بيانات أو تولّد محتوى قابل للقراءة الآلية، عرّف المخطط: أسماء الحقول والأنواع والحقول المطلوبة وقيود التعداد. سيُنسّق النموذج المخرجات لتتناسب تلقائيًّا.',
            '**قدّم مثالًا على تنسيق المخرجات الدقيق الذي تريده.** أظهر للنموذج مثالًا ملموسًا: "نسّق هكذا: { \\"topic\\": \\"...\\", \\"key_points\\": [...], \\"confidence\\": \\"high|medium|low\\" }." الأمثلة أقوى من الأوصاف وحدها.',
            '**استخدم لغة قائمة على القيود: "يجب X، لا يجب Y، دائمًا Z."** تجنّب اللغة اللينة ("حاول"، "اهدف إلى"). قل: "أعِد بالضبط ٣ خطوات، لا أقل ولا أكثر. لا تستخدم المصطلحات التقنية. أدرج دائمًا تحذيرًا إن كانت التوصية لها قيود."',
            '**اختبر مواصفات تنسيق مخرجاتك على مثال قبل التشغيل على نطاق واسع.** ولّد مخرجًا، تحقق إن كان يتطابق مع مواصفتك، اضبط الموجّه إن لزم. هذا يمنع اكتشاف مشاكل التنسيق بعد معالجة ١٠٠ عنصر.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            {
              q: 'ما الفرق بين درجة الحرارة وTop-P في نماذج اللغة الكبيرة؟',
              a: 'درجة الحرارة (T) تُوسّع توزيع احتمال softmax الكامل: T = 0.0 دائمًا يختار الأعلى احتمالًا (حتمي)؛ T = 1.0 يحفظ التوزيع الطبيعي؛ T = 2.0 يُسوّيه نحو العشوائية. Top-P (أخذ عينات النواة) يختار من المجموعة الدنيا من الرموز التي احتمالها المتراكم يبلغ P. يتحكمان في جوانب مختلفة ولا ينبغي ضبطهما معًا على قيم عالية.',
            },
            {
              q: 'هل يُقلّل إجبار مخرجات JSON من جودة استجابات الذكاء الاصطناعي؟',
              a: 'نعم — بشكل قابل للقياس. أظهر مؤشر BAML في BFCL أن تحليل النص الحر المتوافق مع المخطط حقق دقة ٩٣.٦٣٪ مقابل ٩١.٣٧٪ للفك المقيّد الصارم — انخفاض ٢.٢٦ نقطة. للمهام المعقدة، يحافظ نهج المرحلتين على الجودة.',
            },
            {
              q: 'ما الفك المقيّد وكيف يضمن مخرجات JSON؟',
              a: 'الفك المقيّد يُطبّق آلة حالات محدودة على عملية توليد الرموز. في كل خطوة، تُقيّم الـFSM الرموز المتوافقة مع المخطط وتُخفي جميع الأخرى باحتمال صفري. تُنفّذه OpenAI عبر `response_format: { type: "json_schema", strict: true }`. تُنفّذه Anthropic عبر وضع استخدام الأداة الصارم.',
            },
            {
              q: 'ما تنسيق المخرجات الذي يجب أن أستخدمه لمسارات نماذج اللغة الإنتاجية؟',
              a: 'JSON هو المعيار لمسارات نماذج اللغة الإنتاجية. استخدم JSONL لتدفقات الأحداث والمعالجة الدفعية. استخدم CSV فقط للتوافق مع الأنظمة القديمة. البنية الموصى بها: TOON لكفاءة رموز الإدخال + JSON مع الفك المقيّد لمخرجات المرحلة الثانية فقط.',
            },
            {
              q: 'كيف تختلف تسلسلات التوقف عن القيود السلبية في الموجّهات؟',
              a: 'تسلسلات التوقف تُطبَّق على مستوى API — يتوقف النموذج فورًا حين تظهر السلسلة المحددة، دون استثناءات. القيود السلبية في نص الموجّه ليست ملزِمة — قد ينتهكها النموذج. استخدم كليهما: تسلسلات التوقف للإنهاء البنيوي، القيود السلبية لتشكيل المحتوى.',
            },
          ],
        },
        sources: {
          title: 'المصادر والقراءات الإضافية',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — التوثيق الرسمي حول الفك المقيّد ووضع JSON الصارم وضمانات توافق المخطط',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — مؤشر أداء يُظهر ٩٣.٦٣٪ مقابل ٩١.٣٧٪ دقة: تحليل النص الحر المتوافق مع المخطط مقابل الفك المقيّد في BFCL',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — تحليل بنية الإنتاج: إدخال TOON + مخرجات JSON مقيّدة',
          ],
        },
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Techniques',
      title: 'Controle a saída: conformidade com JSON Schema, constrained decoding e seleção de formato',
      intro: '**O constrained decoding alcança 100% de conformidade com JSON schema — nunca mais saídas malformadas. Antes dessa tecnologia, os modelos obtinham menos de 40% em schemas complexos e falhavam silenciosamente em casos extremos. O controle de saída é a variável de engenharia que distingue protótipos (80% de sucesso) de sistemas de produção (100% de confiabilidade).**',
      publishDate: '2026-03-24',
      readTime: '10 min de leitura',
      seoTitle: 'Controle a saída da IA e conformidade com schema 2026',
      metaDescription: 'Controle a saída de LLMs com modo JSON e constrained decoding. Alcance 100% de conformidade com schema com pipelines de duas etapas sem perder qualidade.',
      ogTitle: 'De 40% para 100% de conformidade JSON — o constrained decoding muda tudo',
      ogDescription: 'A formatação apenas por prompt falha 60% das vezes. O modo estrito garante a conformidade com o schema no nível do token. Guia completo de configuração.',
      twitterTitle: 'Controle a saída de IA: JSON, temperatura e stop sequences (2026)',
      twitterDescription: 'Constrained decoding = 100% de conformidade com schema mas queda de 2–10% de precisão. Temperatura 0,0–0,1 para JSON de produção. As compensações que ninguém conta.',
      educationalLevel: 'Beginner',
      audience: 'Desenvolvedores que constroem pipelines LLM de produção que requerem saída estruturada',
      toc: [
        { label: 'Quais são os três níveis de controle de saída?', anchor: 'three-levels' },
        { label: 'Como você controla o formato de saída por prompt engineering?', anchor: 'prompt-engineering' },
        { label: 'Como é um bom prompt de saída estruturada?', anchor: 'good-prompt' },
        { label: 'Quais regras de formato de saída se aplicam a cada modelo?', anchor: 'model-rules' },
        { label: 'Quais parâmetros de amostragem controlam a geração de saída?', anchor: 'sampling-parameters' },
        { label: 'Qual é a compensação entre raciocínio e formato?', anchor: 'reasoning-tradeoff' },
        { label: 'Como os principais modelos se comparam no controle de formato?', anchor: 'model-comparison' },
        { label: 'Em que as stop sequences diferem das restrições negativas?', anchor: 'stop-sequences' },
        { label: 'Que formato de saída usar em produção?', anchor: 'production-format' },
        { label: 'Quais são as considerações globais e regionais?', anchor: 'global-regional' },
        { label: 'Pontos-chave', anchor: 'key-takeaways' },
        { label: 'Como controlar o formato de saída da IA (passo a passo)', anchor: 'how-to' },
        { label: 'Erros comuns', anchor: 'common-mistakes' },
        { label: 'FAQ', anchor: 'faq' },
        { label: 'Fontes', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Controle a saída: conformidade com JSON Schema, constrained decoding e seleção de formato',
        description: 'Domine o controle de saída em LLMs: constrained decoding, formatação baseada em prompts, parâmetros de amostragem e a compensação de qualidade de raciocínio. Guia de produção para JSON, JSONL, CSV.',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/control-the-output',
        inLanguage: 'pt-BR',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/pt/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['controle de saída', 'constrained decoding', 'JSON schema', 'saída estruturada', 'temperatura', 'top-p', 'parâmetros de amostragem', 'prompt engineering'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qual é a diferença entre Temperature e Top-P nos LLMs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature (T) escala toda a distribuição de probabilidade softmax de previsões do próximo token: T = 0,0 sempre seleciona o token de maior probabilidade (determinístico); T = 1,0 preserva a distribuição natural; T = 2,0 a achata em direção à aleatoriedade. Top-P (amostragem de núcleo) seleciona do conjunto mínimo de tokens cuja probabilidade acumulada alcança P. Controlam aspectos diferentes da geração e não devem ser configurados ambos em valores altos simultaneamente.' },
          },
          {
            '@type': 'Question',
            name: 'Forçar a saída JSON reduz a qualidade da resposta da IA?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sim — mensuravelmente. O benchmark do BAML no BFCL mostrou que o parsing de texto livre alinhado com schema alcançou 93,63% de precisão vs. 91,37% para o constrained decoding estrito da OpenAI — uma redução de qualidade de 2,26 pontos. Para tarefas de raciocínio complexo, a abordagem de duas etapas (texto livre → estruturação especializada) preserva a qualidade alcançando 100% de conformidade de formato.' },
          },
          {
            '@type': 'Question',
            name: 'O que é constrained decoding e como ele garante a saída JSON?',
            acceptedAnswer: { '@type': 'Answer', text: 'O constrained decoding aplica uma máquina de estados finita (FSM) sobre o processo de geração de tokens do modelo. Em cada etapa, a FSM avalia quais tokens produziriam saída compatível com o schema alvo na posição atual — e mascara todos os outros tokens com probabilidade zero. A OpenAI o implementa via `response_format: { type: "json_schema", strict: true }`. A Anthropic o implementa via Strict Tool Use Mode.' },
          },
          {
            '@type': 'Question',
            name: 'Que formato de saída devo usar para pipelines LLM de produção?',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON é o padrão para pipelines LLM de produção porque mapeia diretamente para objetos de API tipados e é suportado nativamente por todos os principais provedores. Use JSONL para fluxos de eventos e processamento em lote. Use CSV apenas para compatibilidade com sistemas legados. A arquitetura recomendada para 2026: TOON para eficiência de tokens de entrada + JSON com constrained decoding apenas para a saída da Etapa 2.' },
          },
          {
            '@type': 'Question',
            name: 'Em que as stop sequences diferem das restrições negativas nos prompts?',
            acceptedAnswer: { '@type': 'Answer', text: 'As stop sequences são aplicadas no nível da API/inferência — o modelo para a geração no instante em que a string especificada aparece, sem exceções. As restrições negativas no corpo do prompt ("Não inclua explicações", "Sem markdown") instruem o modelo a evitar certas saídas, mas não são vinculantes. Use ambas: stop sequences para garantias de terminação estrutural, restrições negativas para moldar o estilo do conteúdo.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Controle a saída: tópicos-chave',
        'description': 'Conceitos-chave para gerenciar a saída estruturada de modelos de IA',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Os três níveis de controle de saída', 'description': 'Abordagens baseadas em prompt, schema e constrained decoding com suas compensações' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Controle do formato de saída por prompts', 'description': 'Técnicas específicas por modelo para alcançar conformidade JSON sem constrained decoding' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Parâmetros de amostragem', 'description': 'Temperature, Top-P, Top-K, max_tokens e parâmetros de penalização explicados' },
          { '@type': 'ListItem', 'position': 4, 'name': 'A compensação raciocínio-formato', 'description': 'Compreensão da redução de precisão por constrained decoding e soluções de duas etapas' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Stop sequences e restrições', 'description': 'Uso de restrições no nível da API e instruções negativas para controlar os limites de saída' },
        ],
      },
      sections: {
        definition: {
          title: 'Quais são os três níveis de controle de saída?',
          content: [
            'O controle de saída opera em três níveis distintos — baseado em prompt, baseado em schema e constrained decoding — cada um oferecendo garantias de formato progressivamente mais fortes com compensações progressivamente maiores em relação à qualidade de raciocínio.',
            'O formato baseado em prompt instrui o modelo por linguagem natural ("Retorne JSON com campos: nome, email, pontuação"). Isso funciona 80–95% das vezes, mas falha silenciosamente em casos extremos sem garantias de tipo, exigindo tratamento de erros para 5–20% de respostas malformadas. As abordagens baseadas em schema (function calling / tool use) definem a estrutura de saída formalmente com 95–99% de conformidade. O constrained decoding nativo usa máquinas de estados finita para mascarar tokens inválidos em tempo de geração, produzindo 100% de saídas válidas segundo o schema com certeza matemática.',
            'A abordagem de duas etapas — deixar Claude Opus 4.8 ou GPT-5.5 raciocinar livremente na Etapa 1, depois alimentar a saída a um modelo especializado pequeno na Etapa 2 — alcança garantias de formato sem a penalidade de qualidade de raciocínio do constrained decoding.',
          ],
          columns: ['Nível', 'Taxa de conformidade', 'Impacto no raciocínio', 'Melhor para'],
          rows: [
            { 'Nível': 'Baseado em prompt ("retorne JSON")', 'Taxa de conformidade': '80–95%', 'Impacto no raciocínio': 'Nenhum', 'Melhor para': 'Protótipos; pipelines simples' },
            { 'Nível': 'Function calling / Tool use', 'Taxa de conformidade': '95–99%', 'Impacto no raciocínio': 'Mínimo', 'Melhor para': 'A maioria das aplicações de produção' },
            { 'Nível': 'Constrained decoding nativo (estrito)', 'Taxa de conformidade': '100%', 'Impacto no raciocínio': 'Redução de qualidade de 2–10%', 'Melhor para': 'Extração de dados; pipelines de alto volume' },
            { 'Nível': 'Duas etapas (texto livre → modelo especialista)', 'Taxa de conformidade': '~100%', 'Impacto no raciocínio': 'Nenhum', 'Melhor para': 'Raciocínio complexo + formato garantido' },
          ],
          tableFormat: true,
        },
        promptStructure: {
          title: 'Como você controla o formato de saída por prompt engineering?',
          content: [
            'Instruções explícitas de schema de saída — colocadas no início do prompt do sistema para Claude Opus 4.8 e imediatamente antes do conteúdo do usuário para GPT-5.5 — produzem taxas de conformidade de saída estruturada de 85–95% sem a penalidade de qualidade de raciocínio do constrained decoding nativo.',
            'Claude Opus 4.8 responde melhor às instruções de formato de saída colocadas no início do prompt do sistema usando tags de seção estilo XML. GPT-5.5 funciona melhor quando o schema é colocado imediatamente antes do conteúdo do usuário usando regras de formato numeradas. Gemini 3.1 Pro produz a saída estruturada mais confiável quando o schema é repetido tanto no início quanto no final do prompt.',
          ],
        },
        badPrompt: {
          content: ['**Prompt deficiente — sem estrutura, sem especificação de formato:**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },
        goodPrompt: {
          title: 'Como é um bom prompt de saída estruturada (Claude Opus 4.8)?',
          content: ['**Bom prompt — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },
        promptOutcome: {
          content: [
            'O prompt estruturado com XML ancora o contrato de formato de saída enquanto preserva o raciocínio livre dentro do bloco `<task>`. Não é necessário constrained decoding — Claude Opus 4.8 está em conformidade em mais de 93% das chamadas de produção com essa estrutura.',
          ],
        },
        goodPromptGPT: {
          title: 'Como é um bom prompt de saída estruturada (GPT-5.5)?',
          content: ['**Bom prompt — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },
        modelRules: {
          title: 'Quais regras de formato de saída se aplicam a cada modelo?',
          content: ['Cada LLM principal tem preferências estruturais distintas para a conformidade do formato de saída:'],
          items: [
            '**Claude Opus 4.8 (Anthropic)** — Tags XML (`<output>`, `<format>`, `<constraints>`); schema no início; "Retorne apenas o JSON, nada mais"',
            '**GPT-5.5 (OpenAI)** — Regras de formato numeradas; schema após a instrução principal; "Responda com JSON válido. Sem markdown. Sem explicação."',
            '**Gemini 3.1 Pro (Google DeepMind)** — Schema conciso e explícito tanto no início quanto no final; exemplo one-shot do formato de saída desejado no prompt',
            '**Modelos locais via Ollama** (LLaMA 3.1 7B, Mistral) — Mais sensíveis ao desvio de formato; um exemplo de formato one-shot diretamente no prompt é necessário para saída JSON confiável',
          ],
        },
        parameters: {
          title: 'Quais parâmetros de amostragem controlam a geração de saída?',
          content: [
            'Temperature (T), Top-P, Top-K, max_tokens, frequency_penalty e presence_penalty são seis parâmetros independentes que determinam conjuntamente o comprimento, a aleatoriedade e a repetição da saída.',
            'Temperature (T) escala a distribuição softmax de saída: com T = 0,0 o modelo sempre seleciona o token de maior probabilidade (determinístico); com T = 2,0 a distribuição é quase plana. Top-P (amostragem de núcleo) seleciona do conjunto mínimo de tokens cuja probabilidade acumulada alcança P. Top-K restringe a geração aos K tokens de maior probabilidade em cada etapa.',
          ],
          columns: ['Parâmetro', 'Intervalo', 'Focado / Factual', 'Criativo / Diverso'],
          rows: [
            { 'Parâmetro': 'Temperature (T)', 'Intervalo': '0,0–2,0', 'Focado / Factual': '0,0–0,3', 'Criativo / Diverso': '0,7–1,0' },
            { 'Parâmetro': 'Top-P', 'Intervalo': '0,0–1,0', 'Focado / Factual': '0,3–0,5', 'Criativo / Diverso': '0,9–1,0' },
            { 'Parâmetro': 'Top-K', 'Intervalo': '1–tamanho do vocabulário', 'Focado / Factual': '10–20', 'Criativo / Diverso': '50–100' },
            { 'Parâmetro': 'max_tokens', 'Intervalo': 'dependente da tarefa', 'Focado / Factual': '256–512', 'Criativo / Diverso': '2.048–8.192' },
            { 'Parâmetro': 'frequency_penalty', 'Intervalo': '-2,0 a 2,0', 'Focado / Factual': '0,3–0,5 (reduzir repetição)', 'Criativo / Diverso': '0,0–0,2' },
            { 'Parâmetro': 'presence_penalty', 'Intervalo': '-2,0 a 2,0', 'Focado / Factual': '0,0–0,2', 'Criativo / Diverso': '0,5–0,8' },
          ],
          tableFormat: true,
        },
        parameterWarning: {
          content: [
            '**Regra crítica:** Não configure Temperature e Top-P em valores altos simultaneamente. Temperature escala primeiro a distribuição completa; depois Top-P amostra da massa de probabilidade superior já escalada. Combinar T = 1,5 e Top-P = 0,95 produz saída mais errática do que qualquer parâmetro sozinho.',
          ],
        },
        reasoningTradeoff: {
          title: 'Qual é a compensação entre qualidade de raciocínio e garantias de formato de saída?',
          content: [
            'Forçar JSON por constrained decoding reduz a precisão do modelo em 2,26 pontos percentuais em benchmarks de function calling — o parsing alinhado com schema do BAML alcançou 93,63% de precisão no BFCL vs. 91,37% para o constrained decoding estrito da OpenAI no mesmo benchmark.',
            'A solução pronta para produção para sistemas que exigem tanto profundidade de raciocínio quanto garantias de formato: (1) **Etapa 1** — Envie para GPT-5.5 ou Claude Opus 4.8 sem restrições: "Analise isso, raciocine passo a passo, explique sua lógica." (2) **Etapa 2** — Alimente a saída da Etapa 1 a um modelo especializado pequeno: "Extraia os dados principais desta análise e retorne-os neste schema JSON exato."',
          ],
        },
        promptquorumTest: {
          title: 'Como os principais modelos se comparam no controle de formato de saída?',
          content: [
            'Testado no [PromptQuorum](https://www.promptquorum.com/) — 30 prompts de controle de saída despachados a três modelos: Claude Opus 4.8 alcançou 93% de conformidade JSON usando instruções de formato com tags XML sem constrained decoding. GPT-5.5 alcançou 89% de conformidade usando regras de formato numeradas. Gemini 3.1 Pro alcançou 91% de conformidade com o schema indicado tanto no início quanto no final.',
          ],
        },
        stopSequences: {
          title: 'Em que as stop sequences diferem das restrições negativas?',
          content: [
            'As stop sequences — tokens que encerram imediatamente a saída do modelo ao serem gerados — são o mecanismo de controle de saída mais determinístico.',
            'Usos comuns em produção:',
          ],
          items: [
            '`["###"]` — encerra a geração após um marcador de seção estruturado',
            '`["</output>"]` — encerra após uma tag XML de fechamento',
            '`["\\n\\n"]` — limita a saída a um único parágrafo',
            '`["Human:", "User:"]` — evita que o modelo alucine uma continuação de conversa simulada',
          ],
        },
        stopSequencesConclusion: {
          content: [
            'As restrições negativas no corpo do prompt — "Não inclua explicações", "Sem markdown" — reduzem os padrões de saída indesejados mas não podem garantir a conformidade da forma que as stop sequences fazem.',
          ],
        },
        formatChoices: {
          title: 'Que formato de saída usar para pipelines de produção?',
          content: [
            'JSON é o formato de saída dominante para pipelines LLM de produção porque mapeia diretamente para objetos de API, arrays e dados tipados.',
          ],
          columns: ['Formato de saída', 'Caso de uso', 'Notas'],
          rows: [
            { 'Formato de saída': 'JSON', 'Caso de uso': 'APIs, pipelines, repositórios de documentos', 'Notas': 'Suporte de saída estruturada nativa em todos os principais provedores' },
            { 'Formato de saída': 'JSONL', 'Caso de uso': 'Fluxos de eventos, processamento em lote', 'Notas': 'Um objeto JSON por linha; adequado para streaming e logging' },
            { 'Formato de saída': 'CSV', 'Caso de uso': 'Integração com sistemas legados', 'Notas': 'Mais simples mas sem estrutura aninhada; bom para dados tabulares' },
            { 'Formato de saída': 'YAML', 'Caso de uso': 'Artefatos de configuração', 'Notas': 'Legível por humanos; usado em contextos de CI/CD e infraestrutura' },
            { 'Formato de saída': 'XML', 'Caso de uso': 'Integração empresarial', 'Notas': 'Verbose; preferido pelo Claude como formato de estrutura de prompt, não de saída' },
            { 'Formato de saída': 'Markdown', 'Caso de uso': 'Relatórios legíveis, documentação', 'Notas': 'Ruim para parsing downstream; melhor para consumidores humanos' },
          ],
          tableFormat: true,
        },
        globalContext: {
          title: 'Quais são as considerações globais e regionais para o controle de saída?',
          content: [
            'Empresas europeias que constroem pipelines LLM que processam dados pessoais devem aplicar o Artigo 25 do RGPD (privacidade por design) ao design do schema de saída.',
            'Para equipes da UE que exigem inferência on-premise com controle de saída estruturada, a Mistral AI (França) suporta constrained decoding baseado em vLLM com parâmetros JSON guiados — habilitando conformidade garantizada com JSON Schema completamente dentro da infraestrutura da UE.',
            'Empresas brasileiras que processam dados pessoais de brasileiros devem seguir a LGPD ao projetar schemas de saída — saídas que expõem campos de dados pessoais requerem base legal adequada.',
          ],
        },
        tldr: {
          title: 'Pontos-chave',
          isTldr: true,
          items: [
            'Antes de existir a saída estruturada, os modelos obtinham menos de 40% em conformidade com JSON schema complexo; o `strict: true` da OpenAI alcança 100%',
            'O constrained decoding reduz a precisão de raciocínio em 2,26 pontos percentuais em benchmarks BFCL — use a abordagem de duas etapas (raciocínio livre → modelo de estruturação especializado) para tarefas complexas',
            'Não configure Temperature e Top-P em valores altos simultaneamente — se combinam para produzir saída mais errática do que qualquer parâmetro sozinho',
            '`frequency_penalty`: intervalo -2,0 a 2,0 reduz a repetição proporcional à frequência; `presence_penalty`: intervalo -2,0 a 2,0 aplica uma penalidade fixa a qualquer token visto anteriormente',
            'As stop sequences são o único mecanismo de terminação de saída determinístico — ao contrário das restrições negativas no corpo do prompt, o modelo não pode substituí-las',
            'Intervalos de temperatura: T = 0,0–0,3 para tarefas factuais determinísticas; T = 0,7–1,0 para tarefas criativas; T > 1,2 arrisca incoerência em uso de produção',
            'Claude Opus 4.8 alcança 93% de conformidade JSON com prompts de formato com tags XML; GPT-5.5 alcança 89% com regras de formato numeradas — ambos sem constrained decoding',
          ],
        },
        commonMistakes: {
          title: 'Erros comuns com controle de saída',
          mistakes: [
            {
              mistake: 'Configurar tanto Temperature quanto Top-P em valores altos',
              problem: 'Se combinam — T=1,5 + Top-P=0,95 produz saída mais errática do que qualquer parâmetro sozinho.',
              fix: 'Use um ou outro como seu controle principal de aleatoriedade, não ambos.'
            },
            {
              mistake: 'Forçar JSON em tarefas de raciocínio complexo',
              problem: 'O constrained decoding reduz a precisão entre 2–10%. O modelo sacrifica qualidade de raciocínio para manter a conformidade com o schema.',
              fix: 'Use a abordagem de duas etapas: raciocínio livre primeiro, depois extração estruturada.'
            },
            {
              mistake: 'Escrever "retorne JSON" sem mostrar o schema exato',
              problem: 'O modelo adivinha os nomes dos campos, tipos e aninhamento — produzindo JSON inválido ou malformado.',
              fix: 'Sempre forneça o schema completo com tipos de campos e valores de enumeração.'
            },
            {
              mistake: 'Confiar em restrições negativas do corpo do prompt para o formato crítico',
              problem: '"Não inclua markdown" pode ser ignorado pelo modelo, especialmente com temperatura alta.',
              fix: 'Use stop sequences no nível da API — são o único mecanismo de terminação determinístico.'
            },
            {
              mistake: 'Copiar configurações de temperatura entre modelos',
              problem: 'T=0,7 no GPT-5.5 e T=0,7 no Claude produzem distribuições de probabilidade diferentes.',
              fix: 'Teste cada configuração de parâmetro por modelo em seu pipeline de produção.'
            }
          ],
        },
        relatedReading: {
          title: 'Leituras relacionadas',
          items: [
            '[O que é prompt engineering?](/pt/prompt-engineering/what-is-prompt-engineering) — princípios fundamentais por trás do design de instruções de IA estruturadas',
            '[Temperature e Top-P explicados](/pt/prompt-engineering/temperature-and-top-p-control-ai-creativity) — análise profunda dos dois parâmetros primários de aleatoriedade',
            '[Escreva melhor código com IA](/pt/prompt-engineering/write-better-code-with-ai) — aplicando técnicas de controle de saída em workflows de geração de código',
            'Tool use e function calling — saída estruturada via definições de ferramentas e schemas de função',
            '[Tokens e economia de tokens](/pt/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — compreensão dos custos de tokens para constrained decoding e pipelines de duas etapas',
            'Tratamento de erros em aplicações LLM — detecção e recuperação de saída malformada em sistemas de produção',
          ],
        },
        howToStart: {
          title: 'Como controlar o formato de saída da IA',
          numberedItems: [
            '**Sempre especifique o formato de saída desejado explicitamente no prompt.** Em vez de "resuma isso", diga: "Resuma como uma lista de 5–7 marcadores, cada um de 1–2 frases. Use voz ativa. Não inclua opiniões." Seja específico sobre a estrutura.',
            '**Use JSON schema para aplicar saída estruturada quando disponível (OpenAI, Anthropic).** Se você está extraindo dados ou gerando conteúdo legível por máquina, defina o schema: nomes de campos, tipos, campos obrigatórios, restrições de enumeração.',
            '**Forneça um exemplo do formato de saída exato que você quer.** Mostre ao modelo um exemplo concreto: "Formate assim: { \\"topic\\": \\"...\\", \\"key_points\\": [...], \\"confidence\\": \\"high|medium|low\\" }."',
            '**Use linguagem baseada em restrições: "Deve X, não deve Y, sempre Z."** Evite linguagem suave ("tente", "aponte para"). Diga: "Retorne exatamente 3 etapas, nem mais nem menos. Não use jargão técnico. Sempre inclua um aviso se a recomendação tiver limitações."',
            '**Teste sua especificação de formato de saída em um exemplo antes de executá-la em escala.** Gere uma saída, verifique se corresponde à sua especificação, ajuste o prompt se necessário.',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            {
              q: 'Qual é a diferença entre Temperature e Top-P nos LLMs?',
              a: 'Temperature (T) escala toda a distribuição de probabilidade softmax: T = 0,0 sempre seleciona o token de maior probabilidade (determinístico); T = 2,0 achata em direção à aleatoriedade. Top-P seleciona do conjunto mínimo de tokens cuja probabilidade acumulada alcança P. Controlam aspectos diferentes e não devem ser configurados ambos em valores altos simultaneamente.',
            },
            {
              q: 'Forçar a saída JSON reduz a qualidade da resposta da IA?',
              a: 'Sim — mensuravelmente. A redução é de 2,26 pontos percentuais de precisão. Para tarefas de raciocínio complexo, a abordagem de duas etapas (texto livre → estruturação especializada) preserva a qualidade alcançando 100% de conformidade de formato.',
            },
            {
              q: 'O que é constrained decoding e como ele garante a saída JSON?',
              a: 'O constrained decoding aplica uma FSM sobre o processo de geração de tokens. Em cada etapa, a FSM mascara tokens incompatíveis com o schema. A OpenAI o implementa via `response_format: { type: "json_schema", strict: true }`. A Anthropic via Strict Tool Use Mode.',
            },
            {
              q: 'Que formato de saída devo usar para pipelines LLM de produção?',
              a: 'JSON é o padrão para pipelines LLM de produção. Use JSONL para fluxos de eventos e processamento em lote. Use CSV apenas para compatibilidade com sistemas legados. A arquitetura recomendada: TOON para entrada + JSON com constrained decoding para a saída da Etapa 2.',
            },
            {
              q: 'Em que as stop sequences diferem das restrições negativas nos prompts?',
              a: 'As stop sequences são aplicadas no nível da API — o modelo para no instante em que a string especificada aparece, sem exceções. As restrições negativas no corpo do prompt não são vinculantes. Use ambas: stop sequences para terminação estrutural, restrições negativas para moldar o conteúdo.',
            },
          ],
        },
        sources: {
          title: 'Fontes e leituras adicionais',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — documentação oficial sobre constrained decoding, modo JSON estrito e garantias de conformidade de schema',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — benchmark mostrando 93,63% vs. 91,37% de precisão',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — análise de arquitetura de produção: entrada TOON + saída JSON restrita',
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

      ogTitle: 'De 40 % à 100 % de conformité JSON — le décodage contraint change tout',
      ogDescription: 'Le formatage par prompt échoue 60 % du temps. Le mode strict garantit la conformité au niveau du token.',
      twitterTitle: 'Contrôler la sortie IA : JSON, température et stop sequences (2026)',
      twitterDescription: 'Décodage contraint = 100 % conformité mais 2–10 % de perte de précision. Température 0,0–0,1 pour le JSON en production. Les compromis expliqués.',

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
        url: 'https://www.promptquorum.com/fr/prompt-engineering/control-the-output',
        inLanguage: 'fr',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/fr/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['contrôle des sorties', 'decoding contraint', 'schéma JSON', 'sortie structurée', 'temperature', 'top-p', 'paramètres d\'échantillonnage', 'prompt engineering'],
        about: [
          { '@type': 'Thing', name: 'Decoding contraint' },
          { '@type': 'Thing', name: 'Conformité au schéma JSON' },
          { '@type': 'Thing', name: 'Paramètres d\'échantillonnage' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'Beginner',
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
            'L\'approche en deux étapes — laisser Claude Opus 4.8 (Anthropic) ou GPT-5.5 (OpenAI) raisonner librement en étape 1, puis passer la sortie à un petit modèle spécialisé (Osmosis-Structure-0.6B, entraîné sur 500 000 transformations synthétiques non structurées → structurées) en étape 2 — atteint les garanties de format sans la pénalité de qualité du decoding contraint.',
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
            'Des instructions de schéma de sortie explicites — placées au début du prompt système pour Claude Opus 4.8 et immédiatement avant le contenu utilisateur pour GPT-5.5 — produisent des taux de conformité de 85–95 % sans la pénalité de qualité du decoding contraint natif.',
            'Claude Opus 4.8 (Anthropic) répond mieux aux instructions de format placées en début de prompt système avec des balises XML. GPT-5.5 (OpenAI) performe mieux avec le schéma placé juste avant le contenu utilisateur sous forme de règles numérotées. Gemini 3.1 Pro (Google DeepMind) produit les sorties structurées les plus fiables quand le schéma est rappelé en début et en fin de prompt.',
          ],
        },

        badPrompt: {
          content: ['**Mauvais prompt — non structuré, sans spécification de format :**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: 'À quoi ressemble un bon prompt de sortie structurée (Claude Opus 4.8) ?',
          content: ['**Bon prompt — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'Le prompt structuré XML ancre le contrat de format de sortie tout en préservant le raisonnement libre dans le bloc `<task>`. Aucun decoding contraint requis — Claude Opus 4.8 se conforme dans plus de 93 % des appels en production avec cette structure.',
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
            '**Claude Opus 4.8 (Anthropic)** — Balises XML (`<output>`, `<format>`, `<constraints>`) ; schéma en tête ; "Retourne uniquement le JSON, rien d\'autre"',
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
            'La solution de niveau production pour les systèmes nécessitant profondeur de raisonnement et garanties de format : (1) **Étape 1** — Envoyer à GPT-5.5 ou Claude Opus 4.8 sans contraintes : "Analysez ceci, raisonnez étape par étape, expliquez votre logique." (2) **Étape 2** — Passer la sortie de l\'étape 1 à un petit modèle spécialisé (Osmosis-Structure-0.6B ou GPT-5.5-mini avec `strict: true`) : "Extrayez les données clés de cette analyse et retournez-les dans ce schéma JSON exact."',
            'Cette architecture préserve la qualité de raisonnement de l\'étape 1 et atteint 100 % de conformité de format en étape 2, à une fraction du coût d\'un modèle frontier complet en mode contraint.',
          ],
        },

        promptquorumTest: {
          title: 'Comment les meilleurs modèles se comparent-ils sur le contrôle des sorties ?',
          content: [
            'Testé dans [PromptQuorum](https://www.promptquorum.com/) — 30 prompts de contrôle des sorties répartis sur trois modèles : Claude Opus 4.8 a atteint 93 % de conformité JSON avec des instructions de format balisées XML sans decoding contraint. GPT-5.5 a atteint 89 % de conformité avec des règles de format numérotées. Gemini 3.1 Pro a atteint 91 % de conformité avec le schéma précisé en début et fin. Les trois modèles ont produit des raisonnements plus courts et moins complets quand `strict: true` était activé — cohérent avec la perte de 2,26 points observée sur le benchmark BFCL.',
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
            'Les entreprises chinoises utilisent Qwen 3 (Alibaba) et DeepSeek V3 (DeepSeek AI) pour les pipelines de production à sorties contrôlées. Les deux modèles supportent le mode JSON et sont déployables localement sur l\'infrastructure enterprise chinoise selon les Mesures provisoires chinoises sur l\'IA générative (2023). Les entreprises japonaises exécutant l\'inférence locale via Ollama — LLaMA 3.1 7B à 8 Go de RAM, LLaMA 3.1 13B à 16 Go — bénéficient d\'Outlines et XGrammar pour le decoding contraint sur les modèles auto-hébergés.',
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
            'Claude Opus 4.8 atteint 93 % de conformité JSON avec des prompts de format XML ; GPT-5.5 atteint 89 % avec des règles numérotées — tous deux sans decoding contraint',
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
            '[Qu\'est-ce que le prompt engineering ?](/fr/prompt-engineering/what-is-prompt-engineering) — principes fondamentaux de la conception d\'instructions IA structurées',
            '[Temperature et Top-P expliqués](/fr/prompt-engineering/temperature-and-top-p-control-ai-creativity) — analyse approfondie des deux paramètres d\'aléatoire principaux',
            '[Écrire de meilleur code avec l\'IA](/fr/prompt-engineering/write-better-code-with-ai) — techniques de contrôle des sorties dans les workflows de génération de code',
            'Tool Use et Function Calling — sortie structurée via les définitions de tools et les schémas de fonctions',
            '[Tokens et économie des tokens](/fr/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — comprendre les coûts en tokens pour le decoding contraint et les pipelines en deux étapes',
            'Gestion des erreurs dans les applications LLM — détecter et récupérer les sorties malformées en production',
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
          id: 'faq',
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

      ogTitle: 'JSON準拠率40%→100%——制約付きデコードが全てを変える',
      ogDescription: 'プロンプトだけのフォーマット指定は60%失敗する。Strictモードはトークンレベルでスキーマ準拠を保証。',
      twitterTitle: 'AI出力の制御：JSON・温度・ストップシーケンス（2026）',
      twitterDescription: '制約付きデコード＝100%準拠だが精度2〜10%低下。本番JSONにはTemperature 0.0〜0.1。誰も語らないトレードオフ。',

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
        url: 'https://www.promptquorum.com/ja/prompt-engineering/control-the-output',
        inLanguage: 'ja',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/ja/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['出力制御', '制約デコード', 'JSONスキーマ', '構造化出力', 'Temperature', 'Top-P', 'サンプリングパラメータ', 'プロンプトエンジニアリング'],
        about: [
          { '@type': 'Thing', name: '制約デコード' },
          { '@type': 'Thing', name: 'JSONスキーマ準拠' },
          { '@type': 'Thing', name: 'サンプリングパラメータ' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'Beginner',
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
            '2段階アプローチ — Claude Opus 4.8（Anthropic）またはGPT-5.5（OpenAI）をStage 1で自由に推論させた後、出力をStage 2の小型専門構造化モデル（Osmosis-Structure-0.6B、50万件の合成非構造化→構造化変換でトレーニング済み）に渡す — は制約デコードの推論品質ペナルティなしにフォーマット保証を実現します。',
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
            '明示的な出力スキーマ指示 — Claude Opus 4.8ではシステムプロンプトの冒頭、GPT-5.5ではユーザーコンテンツの直前に配置 — を使用すると、ネイティブ制約デコードの推論品質ペナルティなしに85〜95%の構造化出力コンプライアンス率を達成できます。',
            'Claude Opus 4.8（Anthropic）は、XMLスタイルのセクションラベルを使用してシステムプロンプトの冒頭に配置された出力形式指示に最も効果的に応答します。GPT-5.5（OpenAI）は、ユーザーコンテンツの直前に番号付きフォーマットルールとしてスキーマを配置すると最良の結果を出します。Gemini 3.1 Pro（Google DeepMind）は、プロンプトの冒頭と末尾の両方にスキーマを明示的に記述すると最も信頼性の高い構造化出力を生成します。',
          ],
        },

        badPrompt: {
          content: ['**悪いプロンプト — 非構造化、フォーマット指定なし：**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: '優れた構造化出力プロンプトとは（Claude Opus 4.8）？',
          content: ['**良いプロンプト — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'XML構造化プロンプトは出力フォーマット契約を固定しながら、`<task>`ブロック内での自由な推論を保持します。制約デコード不要 — Claude Opus 4.8はこの構造で93%以上の本番呼び出しで準拠します。',
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
            '**Claude Opus 4.8（Anthropic）** — XMLタグ（`<output>`、`<format>`、`<constraints>`）；スキーマを先頭に；「JSONのみを出力し、他は何も含めないこと」',
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
            '推論の深さとフォーマット保証の両方を必要とするシステムの本番グレードソリューション：(1) **Stage 1** — 制約なしでGPT-5.5またはClaude Opus 4.8に送信：「これを分析し、ステップバイステップで推論し、ロジックを説明してください。」(2) **Stage 2** — Stage 1の出力を小型専門モデル（Osmosis-Structure-0.6BまたはGPT-5.5-mini、`strict: true`）に渡す：「この分析から主要データを抽出し、この正確なJSONスキーマで返してください。」',
            'このアーキテクチャはStage 1の推論品質を保持し、Stage 2で100%フォーマット準拠を達成します。制約モードでフロンティアモデル全体を実行するコストの何分の一かで実現できます。',
          ],
        },

        promptquorumTest: {
          title: 'トップモデルの出力制御比較',
          content: [
            '[PromptQuorum](https://www.promptquorum.com/)でテスト済み — 30件の出力制御プロンプトを3モデルに分散：Claude Opus 4.8は制約デコードなしのXMLタグ付きフォーマット指示で93%のJSON準拠を達成。GPT-5.5は番号付きフォーマットルールで89%の準拠を達成。Gemini 3.1 Proはスキーマを冒頭と末尾の両方に指定すると91%の準拠を達成。`strict: true`の制約デコードが有効な場合、3モデルすべてがより短く完全性の低い推論を生成しました — BFCLベンチマークで観察された2.26ポイントの精度低下と一致します。',
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
            'アジア太平洋地域では、中国企業がQwen 3（アリババ）およびDeepSeek V3（DeepSeek AI）を構造化出力パイプラインに使用しています。両モデルはJSONモードをサポートし、中国の「生成AIサービス暫定弁法（2023年）」に準じたローカルデプロイが可能です。越境データ転送フレームワークへの対応として、OllamaとXGrammarを使った自己ホスト型モデルでの制約デコードが有効な選択肢です — LLaMA 3.1 7Bは8GB RAM、LLaMA 3.1 13Bは16GB RAMで動作します。',
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
            'Claude Opus 4.8はXMLタグ付きフォーマットプロンプトで93%のJSON準拠を達成；GPT-5.5は番号付きフォーマットルールで89% — どちらも制約デコードなし',
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
            '[プロンプトエンジニアリングとは？](/ja/prompt-engineering/what-is-prompt-engineering) — 構造化されたAI指示設計の基本原則',
            '[TemperatureとTop-Pの解説](/ja/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 2つの主要なランダム性パラメータの詳細解説',
            '[AIでより良いコードを書く](/ja/prompt-engineering/write-better-code-with-ai) — コード生成ワークフローにおける出力制御テクニック',
            'Tool UseとFunction Calling — ツール定義と関数スキーマによる構造化出力',
            '[トークンとトークンエコノミクス](/ja/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 制約デコードと2段階パイプラインのトークンコスト理解',
            'LLMアプリケーションのエラー処理 — 本番システムで不正な出力を検出・回復する方法',
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
          id: 'faq',
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
    zh: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: '技术',
      title: '控制AI输出：JSON Schema合规、受限解码与格式选择',
      intro: '**受限解码可实现100% JSON Schema合规——彻底消除格式错误输出。此前，模型在复杂Schema上的合规率不足40%，边缘情况下默默失败。输出控制是区分原型系统（80%成功率）与生产系统（100%可靠性）的关键工程变量。**',
      publishDate: '2026-03-24',
      readTime: '阅读约10分钟',

      seoTitle: '控制AI输出格式与Schema合规（2026）',
      metaDescription: '通过JSON模式和受限解码控制LLM输出。利用两阶段流水线实现100% Schema合规，同时保持推理质量。GPT、Claude和Gemini生产指南。',

      ogTitle: 'JSON合规率从40%到100%——约束解码改变一切',
      ogDescription: '纯提示词格式化60%会失败。Strict模式在Token级别保证Schema合规。完整设置指南。',
      twitterTitle: '控制AI输出：JSON、温度与停止序列（2026）',
      twitterDescription: '约束解码＝100%合规但精度下降2–10%。生产环境JSON用Temperature 0.0–0.1。没人告诉你的权衡取舍。',

      educationalLevel: 'Beginner',
      audience: '构建需要结构化输出的生产级LLM流水线的开发者',
      toc: [
        { label: '输出控制的三个级别是什么？', anchor: 'three-levels' },
        { label: '如何通过Prompt Engineering控制输出格式？', anchor: 'prompt-engineering' },
        { label: '好的结构化输出Prompt是什么样的？', anchor: 'good-prompt' },
        { label: '各模型适用哪些输出格式规则？', anchor: 'model-rules' },
        { label: '哪些采样参数控制输出生成？', anchor: 'sampling-parameters' },
        { label: '推理质量与格式保证之间的权衡是什么？', anchor: 'reasoning-tradeoff' },
        { label: '顶级模型在输出控制上的表现如何？', anchor: 'model-comparison' },
        { label: '停止序列与负向约束有何区别？', anchor: 'stop-sequences' },
        { label: '生产流水线应使用哪种输出格式？', anchor: 'production-format' },
        { label: '全球与区域性考量', anchor: 'global-regional' },
        { label: '核心要点', anchor: 'key-takeaways' },
        { label: '如何控制AI输出格式（分步指南）', anchor: 'how-to' },
        { label: '常见错误', anchor: 'common-mistakes' },
        { label: '常见问题', anchor: 'faq' },
        { label: '参考资料', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '控制AI输出：JSON Schema合规、受限解码与格式选择',
        description: '掌握LLM输出控制：受限解码、基于Prompt的格式化、采样参数以及推理质量权衡。JSON、JSONL、CSV格式的生产指南。',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/control-the-output',
        inLanguage: 'zh',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['输出控制', '受限解码', 'JSON Schema', '结构化输出', 'Temperature', 'Top-P', '采样参数', 'Prompt工程'],
        about: [
          { '@type': 'Thing', name: '受限解码' },
          { '@type': 'Thing', name: 'JSON Schema合规' },
          { '@type': 'Thing', name: 'LLM输出格式' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Qwen 3' },
        ],
        'proficiencyLevel': 'Beginner',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'LLM中Temperature和Top-P有什么区别？',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature（T）缩放下一个词元预测的整个softmax概率分布：T=0.0始终选择概率最高的词元（确定性）；T=1.0保留自然分布；T=2.0将其平坦化趋向随机性。Top-P（核采样）从累积概率达到P的最小词元集合中采样——在Top-P=0.9时只有累积概率前90%的词元有资格被选择。两者控制生成的不同方面，不应同时设为高值，否则会叠加产生更混乱的输出。' },
          },
          {
            '@type': 'Question',
            name: '强制JSON输出会降低AI响应质量吗？',
            acceptedAnswer: { '@type': 'Answer', text: '是的——可测量地降低。BAML在BFCL上的基准测试显示，Schema对齐的自由格式解析准确率为93.63%，而OpenAI的受限解码（严格函数调用）为91.37%——质量下降2.26个百分点。机制是词元屏蔽：受限解码阻止模型选择会违反Schema的词元，即使那些词元能产生更准确的答案。对于复杂推理任务，两阶段方法（自由推理→专业结构化）在实现100%格式合规的同时保持质量。' },
          },
          {
            '@type': 'Question',
            name: '什么是受限解码，它如何保证JSON输出？',
            acceptedAnswer: { '@type': 'Answer', text: '受限解码在模型的词元生成过程上应用有限状态机（FSM）。在每个生成步骤，FSM评估完整词汇表中哪些词元在当前位置会产生与目标Schema兼容的输出——并将所有其他词元的概率屏蔽为零。这在数学上使生成Schema无效的输出成为不可能。OpenAI通过`response_format: { type: "json_schema", strict: true }`实现。Anthropic通过严格工具使用模式实现。两者可在Anthropic的API上同时运行。' },
          },
          {
            '@type': 'Question',
            name: '生产LLM流水线应使用哪种输出格式？',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON是生产LLM流水线的标准，因为它直接映射到类型化API对象，并被所有主要提供商（OpenAI、Anthropic、Google Gemini）原生支持。批处理和事件流使用JSONL。仅在兼容旧系统时使用CSV。2026年推荐架构：输入使用TOON（词元效率）+ 仅在Stage 1自由推理完成后的Stage 2输出使用带受限解码的JSON。' },
          },
          {
            '@type': 'Question',
            name: '停止序列与Prompt中的负向约束有何不同？',
            acceptedAnswer: { '@type': 'Answer', text: '停止序列在API/推理层面强制执行——模型在生成指定字符串的瞬间停止生成，无一例外。Prompt正文中的负向约束（"不包含解释"、"无Markdown"）指示模型避免某些输出，但不具约束力——模型在高Temperature设置或长上下文漂移下仍可能违反。两者结合使用：停止序列用于结构性终止保证，负向约束用于内容风格塑造。' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'zh',
        name: '控制AI输出：核心主题',
        description: '管理AI模型结构化输出的核心概念',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '输出控制的三个级别', description: '基于Prompt、基于Schema和受限解码方法及其权衡' },
          { '@type': 'ListItem', position: 2, name: '通过Prompt控制输出格式', description: '无需受限解码实现JSON合规的模型特定技术' },
          { '@type': 'ListItem', position: 3, name: '采样参数', description: 'Temperature、Top-P、Top-K、max_tokens和惩罚参数详解' },
          { '@type': 'ListItem', position: 4, name: '推理与格式的权衡', description: '理解受限解码的准确率下降及两阶段解决方案' },
          { '@type': 'ListItem', position: 5, name: '停止序列与约束', description: '使用API级约束和负向指令控制输出边界' },
        ],
      },
      sections: {

        definition: {
          title: '输出控制的三个级别是什么？',
          content: [
            '输出控制在三个不同级别上运作——基于Prompt、基于Schema和受限解码——每个级别在对推理质量的权衡逐步增加的同时，提供逐步更强的格式保证。',
            '基于Prompt的格式化通过自然语言指示模型（"返回JSON，字段包括：name、email、score"）。这80%至95%的情况下有效，但在边缘情况下会静默失败，无类型保证，需要为5%至20%的格式错误响应进行错误处理。基于Schema的方法（函数调用/工具使用）以95%至99%的合规率正式定义输出结构——但Schema仍是强提示而非绝对约束。原生受限解码使用有限状态机在生成时屏蔽无效词元，以数学确定性生成100%符合Schema的输出。',
            '两阶段方法——让Claude Opus 4.8（Anthropic）或GPT-5.5（OpenAI）在Stage 1自由推理，然后将输出送入Stage 2小型专业结构化模型（Osmosis-Structure-0.6B，经50万条合成非结构化→结构化转换训练）——在不受受限解码推理质量损失的情况下实现格式保证。',
            '一句话总结：将输出约束级别与任务匹配——仅在格式正确性比推理深度更重要时使用受限解码。',
          ],
          columns: ['级别', '合规率', '对推理的影响', '最适用场景'],
          rows: [
            { '级别': '基于Prompt（"return JSON"）', '合规率': '80–95%', '对推理的影响': '无', '最适用场景': '原型开发；简单流水线' },
            { '级别': '函数调用 / 工具使用', '合规率': '95–99%', '对推理的影响': '极小', '最适用场景': '大多数生产应用' },
            { '级别': '原生受限解码（strict）', '合规率': '100%', '对推理的影响': '质量下降2–10%', '最适用场景': '数据提取；高吞吐量流水线' },
            { '级别': '两阶段（自由推理→专业模型）', '合规率': '~100%', '对推理的影响': '无', '最适用场景': '复杂推理+格式保证' },
          ],
          tableFormat: true,
        },

        promptStructure: {
          title: '如何通过Prompt Engineering控制输出格式？',
          content: [
            '明确的输出Schema指令——对Claude Opus 4.8放在系统Prompt开头，对GPT-5.5放在用户内容之前——在不产生原生受限解码推理质量损失的情况下，可实现85%至95%的结构化输出合规率。',
            'Claude Opus 4.8（Anthropic）对使用XML风格章节标签、置于系统Prompt开头的输出格式指令响应最佳。GPT-5.5（OpenAI）在Schema以编号格式规则形式放在用户内容之前时表现最好。Gemini 3.1 Pro（Google DeepMind）在Prompt开头和结尾都明确说明Schema时生成最可靠的结构化输出。',
          ],
        },

        badPrompt: {
          content: ['**不良Prompt——非结构化，无格式说明：**'],
          blockquote: 'Analyse this customer review and tell me the sentiment, key issues, and urgency.',
        },

        goodPrompt: {
          title: '好的结构化输出Prompt是什么样的（Claude Opus 4.8）？',
          content: ['**良好Prompt——Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'XML结构化Prompt在`<task>`块内保留自由推理的同时，锚定了输出格式契约。无需受限解码——Claude Opus 4.8使用此结构在超过93%的生产调用中合规。',
          ],
        },

        goodPromptGPT: {
          title: '好的结构化输出Prompt是什么样的（GPT-5.5）？',
          content: ['**良好Prompt——GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },

        modelRules: {
          title: '各模型适用哪些输出格式规则？',
          content: ['各主要LLM对输出格式合规有不同的结构偏好：'],
          items: [
            '**Claude Opus 4.8（Anthropic）** — XML标签（`<output>`、`<format>`、`<constraints>`）；Schema置于顶部；"仅输出JSON，不含其他内容"',
            '**GPT-5.5（OpenAI）** — 编号格式规则；Schema置于主指令之后；"以有效JSON响应，无Markdown代码块，无解释。"',
            '**Gemini 3.1 Pro（Google DeepMind）** — 简洁、明确的Schema出现在开头和结尾；内嵌期望输出格式的单样本示例',
            '**通过Ollama运行的本地模型**（LLaMA 3.1 7B、Mistral）— 对格式漂移更敏感；需要在Prompt中直接嵌入单样本格式示例才能可靠输出JSON',
          ],
        },

        parameters: {
          title: '哪些采样参数控制输出生成？',
          content: [
            'Temperature（T）、Top-P、Top-K、max_tokens、frequency_penalty和presence_penalty是六个独立参数，共同决定输出长度、随机性和重复性——必须一致设置，不能相互冲突。',
            'Temperature（T）缩放softmax输出分布：T=0.0时模型始终选择概率最高的词元（确定性）；T=2.0时分布几乎平坦，输出变得不连贯。Top-P（核采样）从累积概率达到P的最小词元集合中采样——Top-P=0.9时模型只考虑覆盖概率质量前90%的词元。Top-K将每步生成限制在K个概率最高的词元；Top-K=1等同于贪婪解码。',
            'softmax with temperature公式：P(token) = exp(logit / T) / sum(exp(logits / T))。T趋近0时，最高logit词元的概率趋近1.0；T趋近无穷时，所有词元概率趋近相等。',
          ],
          columns: ['参数', '取值范围', '聚焦/事实型', '创意/多样型'],
          rows: [
            { '参数': 'Temperature (T)', '取值范围': '0.0–2.0', '聚焦/事实型': '0.0–0.3', '创意/多样型': '0.7–1.0' },
            { '参数': 'Top-P', '取值范围': '0.0–1.0', '聚焦/事实型': '0.3–0.5', '创意/多样型': '0.9–1.0' },
            { '参数': 'Top-K', '取值范围': '1–词汇表大小', '聚焦/事实型': '10–20', '创意/多样型': '50–100' },
            { '参数': 'max_tokens', '取值范围': '取决于任务', '聚焦/事实型': '256–512', '创意/多样型': '2,048–8,192' },
            { '参数': 'frequency_penalty', '取值范围': '-2.0到2.0', '聚焦/事实型': '0.3–0.5（减少重复）', '创意/多样型': '0.0–0.2' },
            { '参数': 'presence_penalty', '取值范围': '-2.0到2.0', '聚焦/事实型': '0.0–0.2', '创意/多样型': '0.5–0.8' },
          ],
          tableFormat: true,
        },

        parameterWarning: {
          content: [
            '**关键规则：** 不要同时将Temperature和Top-P设为高值。Temperature首先缩放整个分布；Top-P然后从已缩放的高概率质量中采样。将T=1.5和Top-P=0.95组合使用，产生的输出比单独使用任一参数都更混乱——这两个参数被设计为替代方案，而非叠加使用。',
            '`frequency_penalty`按词元已出现次数比例降低其概率——正值消除重复性措辞；负值主动鼓励重复。`presence_penalty`对任何已出现过的词元施加一次性固定惩罚，无论频率如何——它推动模型引入新词汇和话题而非重复已有内容。',
          ],
        },

        reasoningTradeoff: {
          title: '推理质量与输出格式保证之间的权衡是什么？',
          content: [
            '通过受限解码强制JSON输出会在函数调用基准测试上降低2.26个百分点的模型准确率——BAML的Schema对齐解析在BFCL上达到93.63%准确率，而OpenAI的严格受限解码在同一基准上仅为91.37%。',
            '机制如下：受限解码应用有限状态机屏蔽与当前Schema位置不兼容的词元。如果Schema要求整数类型但模型想输出51.7，则被强制输出51——技术上有效但事实上有偏差。链式思维（CoT）Prompt与受限解码同样不兼容：将推理字段包含在内会迫使模型在JSON字符串中转义换行符、引号和特殊字符——在所有测试模型中可测量地降低推理质量。',
            '对于既需要推理深度又需要格式保证的系统，生产级解决方案是：(1) **Stage 1** — 不带约束发送给GPT-5.5或Claude Opus 4.8："分析这个，逐步推理，解释你的逻辑。" (2) **Stage 2** — 将Stage 1输出送入小型专业模型（Osmosis-Structure-0.6B或带`strict: true`的GPT-5.5-mini）："从这份分析中提取关键数据，并以此JSON Schema格式返回。"',
            '此架构保留Stage 1推理质量，并在Stage 2以全尺寸前沿模型受限模式运行成本的一小部分实现100%格式合规。',
          ],
        },

        promptquorumTest: {
          title: '顶级模型在输出控制上的表现如何？',
          content: [
            '在[PromptQuorum](https://www.promptquorum.com/)中测试——30个输出控制Prompt分发到三个模型：Claude Opus 4.8使用XML标签格式指令（不启用受限解码）达到93% JSON合规率。GPT-5.5使用编号格式规则达到89%合规率。Gemini 3.1 Pro在开头和结尾均说明Schema的情况下达到91%合规率。启用`strict: true`受限解码后，三个模型的推理更短、更不完整——与BFCL基准上观察到的2.26百分点准确率下降一致。',
          ],
        },

        stopSequences: {
          title: '停止序列与负向约束有何区别？',
          content: [
            '停止序列——在生成时立即终止模型输出的词元——是最确定性的输出控制机制：模型在指定字符串出现的瞬间停止，无论剩余上下文如何。',
            '停止序列作为字符串数组在API调用中传入（OpenAI的`stop`参数，Anthropic的`stop_sequences`）。常见生产用途：',
          ],
          items: [
            '`["###"]` — 在结构化章节标记后终止生成，防止延续到无关内容',
            '`["</output>"]` — 在关闭XML标签后终止，确保只返回标记内容',
            '`["\\n\\n"]` — 将输出限制为单段，用于分类或简短回答任务',
            '`["Human:", "User:"]` — 防止模型幻觉出模拟的对话续写',
          ],
        },

        stopSequencesConclusion: {
          content: [
            'Prompt正文中的负向约束——"不包含解释"、"无Markdown"、"不添加介绍性句子"——能减少不必要的输出模式，但无法像停止序列那样保证合规性。两者结合使用：停止序列用于结构性终止，负向约束用于内容塑造。',
          ],
        },

        formatChoices: {
          title: '生产流水线应使用哪种输出格式？',
          content: [
            'JSON是LLM生产流水线的主流输出格式，因为它直接映射到API对象、数组和类型化数据——但通过受限解码强制JSON会牺牲2%至10%的推理质量，使格式选择成为重要的架构决策。',
            'TOON（词元优化输出符号）已作为长结构化Prompt的高效输入格式出现——它使用空白最小化和简写键来减少模型生成输出前的输入词元消耗。对于输出，2026年推荐的生产架构是：TOON用于输入（词元效率）+ 受限解码JSON用于输出（格式保证）——仅在Stage 1自由推理完成后应用。',
          ],
          columns: ['输出格式', '使用场景', '备注'],
          rows: [
            { '输出格式': 'JSON', '使用场景': 'API、流水线、文档存储', '备注': '所有主要提供商原生支持结构化输出' },
            { '输出格式': 'JSONL', '使用场景': '事件流、批处理', '备注': '每行一个JSON对象；适合流式传输和日志记录' },
            { '输出格式': 'CSV', '使用场景': '旧系统集成', '备注': '更简单但无嵌套结构；适合表格数据' },
            { '输出格式': 'YAML', '使用场景': '配置文件', '备注': '人类可读；用于CI/CD和基础设施场景' },
            { '输出格式': 'XML', '使用场景': '企业集成', '备注': '冗长；Claude偏好用于Prompt结构而非输出' },
            { '输出格式': 'Markdown', '使用场景': '人类可读报告、文档', '备注': '不适合下游解析；最适合人类阅读' },
          ],
          tableFormat: true,
        },

        globalContext: {
          title: '中国与亚太地区的部署考量',
          content: [
            '**中国（数据安全法与PIPL）：** 依据2021年《数据安全法》和《个人信息保护法》（PIPL），处理中国境内用户数据的LLM流水线必须将数据保留在境内——所有含个人信息的JSON输出均受PIPL第三章约束，不得未经明确同意跨境传输。Qwen 3（阿里巴巴）和DeepSeek V3（DeepSeek AI）支持JSON模式，可在阿里云、腾讯云或华为云上本地部署，完全满足数据驻留要求。金融和医疗领域的企业应将受限解码与本地推理结合，确保结构化输出不经过境外API端点。',
            '**亚太地区（数据跨境合规）：** 在新加坡、日本、韩国运营的企业须遵守各自的数据保护框架——新加坡PDPA、日本《个人信息保护法》（APPI）、韩国PIPA。在这些司法管辖区，通过Ollama在本地基础设施上使用LLaMA 3.1或Qwen 3运行JSON受限解码，是满足数据不出境要求的有效技术手段。Outlines和XGrammar可在自托管模型上实现受限解码，无需任何外部API调用。',
            '**企业部署（金融、医疗、法律）：** 银行和金融机构的LLM输出——如评分决策、风险评级的JSON有效载荷——受《商业银行数据治理指引》和《证券期货业数据分类分级指引》的额外合规要求约束。医疗机构的模型输出须符合《健康医疗数据安全指南》，要求字段级加密和访问日志记录。法律行业的结构化输出则须满足律师事务所数据留存要求。对于这些场景，两阶段架构（自由推理Stage 1 + 受限结构化Stage 2）既满足监管要求，又保持推理质量。',
          ],
        },

        tldr: {
          title: '核心要点',
          isTldr: true,
          items: [
            '结构化输出出现之前，模型在复杂JSON Schema合规上的成功率不足40%；OpenAI的`strict: true`受限解码可实现100%合规',
            '受限解码在BFCL基准上将推理准确率降低2.26个百分点——对复杂任务使用两阶段方法（自由推理→专业结构化模型）',
            '不要同时将高Temperature和高Top-P结合使用——两者叠加产生的输出比单独使用任一参数都更混乱',
            '`frequency_penalty`：取值范围-2.0至2.0，按频率比例减少重复；`presence_penalty`：取值范围-2.0至2.0，对任何已出现词元施加固定惩罚——两者设为0.3–0.5适合聚焦型事实输出',
            '停止序列是唯一确定性的输出终止机制——与Prompt正文中的负向约束不同，模型无法覆盖它们',
            'Temperature范围：T=0.0–0.3用于确定性事实任务；T=0.7–1.0用于创意任务；T>1.2在生产使用中有不连贯风险',
            'Claude Opus 4.8使用XML标签格式Prompt达到93% JSON合规率；GPT-5.5使用编号格式规则达到89%——两者均无需受限解码',
          ],
        },

        commonMistakes: {
          title: '常见错误',
          mistakes: [
            {
              mistake: '同时将Temperature和Top-P设为高值',
              problem: '两者叠加——T=1.5 + Top-P=0.95产生的输出比单独使用任一参数都更混乱。',
              fix: '将其中一个作为主要随机性控制，不要同时使用两者。'
            },
            {
              mistake: '对复杂推理任务强制使用JSON',
              problem: '受限解码降低2–10%准确率。模型为维持Schema合规而牺牲推理质量。',
              fix: '改用两阶段方法：先自由推理，再结构化提取。'
            },
            {
              mistake: '写"返回JSON"但不提供精确Schema',
              problem: '模型猜测字段名、类型和嵌套结构——产生无效或格式错误的JSON。',
              fix: '始终提供包含字段类型和枚举值的完整Schema。'
            },
            {
              mistake: '依赖Prompt正文负向约束处理关键格式',
              problem: '"不包含Markdown"可能被模型忽略，尤其在高Temperature下。',
              fix: '在API层面使用停止序列——它们是唯一确定性的终止机制。'
            },
            {
              mistake: '在不同模型间复制粘贴Temperature设置',
              problem: 'GPT-5.5的T=0.7和Claude的T=0.7产生不同的概率分布。',
              fix: '在你的生产流水线中逐模型测试每个参数设置。'
            },
          ],
        },

        relatedReading: {
          title: '延伸阅读',
          items: [
            '[什么是Prompt Engineering？](/zh/prompt-engineering/what-is-prompt-engineering) — AI结构化指令设计的基础原则',
            '[Temperature和Top-P详解](/zh/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 两个主要随机性参数的深入解析',
            '[用AI编写更好的代码](/zh/prompt-engineering/write-better-code-with-ai) — 将输出控制技术应用于代码生成工作流',
            '工具使用和函数调用 — 通过工具定义和函数Schema实现结构化输出',
            '[词元与词元经济学](/zh/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 理解受限解码和两阶段流水线的词元成本',
            'LLM应用中的错误处理 — 在生产系统中检测和恢复格式错误输出',
          ],
        },

        howToStart: {
          title: '如何控制AI输出格式（分步指南）',
          numberedItems: [
            '**在Prompt中始终明确说明所需输出格式。** 不要说"总结这个"，而要说："以5–7条项目的列表总结，每条1–2句话，使用主动语态，不包含个人观点。"明确说明结构：项目符号、表格、JSON、Markdown还是纯文本。',
            '**可用时使用JSON Schema强制结构化输出（OpenAI、Anthropic）。** 如果你在提取数据或生成机器可读内容，请定义Schema：字段名、类型、必填字段、枚举约束。模型将自动格式化输出以匹配。',
            '**提供所需输出格式的示例。** 向模型展示具体示例："按此格式：{ \\"topic\\": \\"...\\"，\\"key_points\\": [...]，\\"confidence\\": \\"high|medium|low\\" }。"示例比描述更有效。',
            '**使用约束性语言："必须X，不得Y，始终Z。"** 避免软性语言（"尽量"、"争取"）。说："恰好返回3个步骤，不多不少。不使用技术术语。如果建议有局限性，始终包含警告。"',
            '**大规模运行前先在一个示例上测试输出格式规范。** 生成一个输出，检查是否符合规范，必要时调整Prompt。这能防止在处理100条数据后才发现格式问题。',
          ],
        },

        faq: {
          id: 'faq',
          title: '常见问题解答',
          faqs: [
            {
              q: 'LLM中Temperature和Top-P有什么区别？',
              a: 'Temperature（T）缩放下一个词元预测的整个softmax概率分布：T=0.0始终选择概率最高的词元（确定性）；T=1.0保留自然分布；T=2.0将其平坦化趋向随机性。Top-P（核采样）从累积概率达到P的最小词元集合中采样——在Top-P=0.9时只有累积概率前90%的词元有资格被选择。两者控制生成的不同方面，不应同时设为高值，否则会叠加产生更混乱的输出。',
            },
            {
              q: '强制JSON输出会降低AI响应质量吗？',
              a: '是的——可测量地降低。BAML在BFCL上的基准测试显示，Schema对齐的自由格式解析准确率为93.63%，而OpenAI的受限解码（严格函数调用）为91.37%——质量下降2.26个百分点。机制是词元屏蔽：受限解码阻止模型选择会违反Schema的词元，即使那些词元能产生更准确的答案。对于复杂推理任务，两阶段方法（自由推理→专业结构化）在实现100%格式合规的同时保持质量。',
            },
            {
              q: '什么是受限解码，它如何保证JSON输出？',
              a: '受限解码在模型的词元生成过程上应用有限状态机（FSM）。在每个生成步骤，FSM评估完整词汇表中哪些词元在当前位置会产生与目标Schema兼容的输出——并将所有其他词元的概率屏蔽为零。这在数学上使生成Schema无效的输出成为不可能。OpenAI通过`response_format: { type: "json_schema", strict: true }`实现。Anthropic通过严格工具使用模式实现。两者可在Anthropic的API上同时运行。',
            },
            {
              q: '生产LLM流水线应使用哪种输出格式？',
              a: 'JSON是生产LLM流水线的标准，因为它直接映射到类型化API对象，并被所有主要提供商（OpenAI、Anthropic、Google Gemini）原生支持。批处理和事件流使用JSONL。仅在兼容旧系统时使用CSV。2026年推荐架构：输入使用TOON（词元效率）+ 仅在Stage 1自由推理完成后的Stage 2输出使用带受限解码的JSON。',
            },
            {
              q: '停止序列与Prompt中的负向约束有何不同？',
              a: '停止序列在API/推理层面强制执行——模型在生成指定字符串的瞬间停止生成，无一例外。Prompt正文中的负向约束（"不包含解释"、"无Markdown"）指示模型避免某些输出，但不具约束力——模型在高Temperature设置或长上下文漂移下仍可能违反。两者结合使用：停止序列用于结构性终止保证，负向约束用于内容风格塑造。',
            },
          ],
        },

        sources: {
          title: '参考资料',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — 受限解码、严格JSON模式和Schema合规保证的官方文档',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — 基准测试：Schema对齐解析93.63% vs. BFCL受限解码91.37%准确率',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — 生产架构分析：TOON输入+受限JSON输出',
          ],
        },

      },
    },
    ko: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Techniques',
      title: 'AI 출력 제어: JSON 스키마 준수, 제약 디코딩 및 형식 선택',
      intro: '**제약 디코딩은 JSON 스키마 준수율 100%를 달성합니다 — 잘못된 형식의 출력은 더 이상 없습니다. 이 기술이 등장하기 전, 모델은 복잡한 스키마에서 40% 미만의 성적을 기록했으며 엣지 케이스에서 조용히 실패하였습니다. 출력 제어는 프로토타입(성공률 80%)과 프로덕션 시스템(신뢰도 100%)을 구분하는 핵심 엔지니어링 변수입니다.**',
      publishDate: '2026-03-24',
      readTime: '10분 읽기',

      seoTitle: 'AI 출력 형식 및 스키마 준수 제어 (2026)',
      metaDescription: 'JSON 모드와 제약 디코딩으로 LLM 출력을 제어하십시오. 2단계 파이프라인을 사용하여 추론 품질을 희생하지 않고 100% 스키마 준수를 달성합니다. GPT, Claude, Gemini를 위한 프로덕션 가이드입니다.',

      ogTitle: 'JSON 준수율 40%에서 100%로 — 제약 디코딩이 모든 것을 바꿉니다',
      ogDescription: '프롬프트만으로 형식을 지정하면 60%의 경우 실패합니다. Strict 모드는 토큰 수준에서 스키마 준수를 보장합니다. 전체 설정 가이드입니다.',
      twitterTitle: 'AI 출력 제어: JSON, 온도 및 중지 시퀀스 (2026)',
      twitterDescription: '제약 디코딩 = 100% 스키마 준수이지만 정확도 2~10% 저하. 프로덕션 JSON에는 온도 0.0~0.1을 사용하십시오. 아무도 알려주지 않는 트레이드오프입니다.',

      educationalLevel: 'Beginner',
      audience: '구조화된 출력이 필요한 프로덕션 LLM 파이프라인을 구축하는 개발자',
      toc: [
        { label: '출력 제어의 세 가지 수준이란?', anchor: 'three-levels' },
        { label: '프롬프트 엔지니어링으로 출력 형식을 제어하는 방법은?', anchor: 'prompt-engineering' },
        { label: '우수한 구조화 출력 프롬프트란?', anchor: 'good-prompt' },
        { label: '각 모델에 적용되는 출력 형식 규칙은?', anchor: 'model-rules' },
        { label: '출력 생성을 제어하는 샘플링 파라미터는?', anchor: 'sampling-parameters' },
        { label: '추론과 형식 간의 트레이드오프는?', anchor: 'reasoning-tradeoff' },
        { label: '주요 모델들의 출력 형식 제어 비교', anchor: 'model-comparison' },
        { label: '중지 시퀀스와 부정 제약의 차이점은?', anchor: 'stop-sequences' },
        { label: '프로덕션에 사용할 출력 형식은?', anchor: 'production-format' },
        { label: '글로벌 및 지역별 고려 사항은?', anchor: 'global-regional' },
        { label: '핵심 요점', anchor: 'key-takeaways' },
        { label: 'AI 출력 형식 제어 방법 (단계별)', anchor: 'how-to' },
        { label: '흔한 실수', anchor: 'common-mistakes' },
        { label: 'FAQ', anchor: 'faq' },
        { label: '출처', anchor: 'sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'AI 출력 제어: JSON 스키마 준수, 제약 디코딩 및 형식 선택',
        description: 'LLM 출력 제어 마스터하기: 제약 디코딩, 프롬프트 기반 형식 지정, 샘플링 파라미터, 추론 품질 트레이드오프. JSON, JSONL, CSV에 관한 프로덕션 가이드입니다.',
        url: 'https://www.promptquorum.com/ko/prompt-engineering/control-the-output',
        inLanguage: 'ko',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/ko/api/og/control-the-output', width: 1200, height: 630 },
        keywords: ['출력 제어', '제약 디코딩', 'JSON 스키마', '구조화 출력', 'Temperature', 'Top-P', '샘플링 파라미터', '프롬프트 엔지니어링'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'GPT-5.5' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro' },
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'Mistral AI' },
        ],
        'proficiencyLevel': 'Beginner',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ko',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'LLM에서 Temperature와 Top-P의 차이점은 무엇입니까?',
            acceptedAnswer: { '@type': 'Answer', text: 'Temperature(T)는 다음 토큰 예측의 전체 소프트맥스 확률 분포를 조정합니다. T=0.0이면 항상 가장 높은 확률의 토큰을 선택(결정론적)하고, T=1.0이면 자연 분포를 유지하며, T=2.0이면 무작위성 방향으로 분포를 평탄화합니다. Top-P(핵 샘플링)는 누적 확률이 P에 도달하는 최소 토큰 집합에서 선택합니다. Top-P=0.9이면 누적 확률 상위 90%의 토큰만 대상이 됩니다. 이 두 파라미터는 생성의 서로 다른 측면을 제어하므로, 동시에 높은 값으로 설정하면 불규칙한 출력이 증폭됩니다.' },
          },
          {
            '@type': 'Question',
            name: 'JSON 출력을 강제하면 AI 응답 품질이 저하됩니까?',
            acceptedAnswer: { '@type': 'Answer', text: '예, 측정 가능한 수준으로 저하됩니다. BAML의 BFCL 벤치마크에서 스키마 정렬 자유 형식 파싱은 93.63%의 정확도를 달성한 반면, OpenAI의 제약 디코딩(엄격한 함수 호출)은 91.37%에 그쳐 2.26포인트의 품질 저하가 발생하였습니다. 메커니즘은 토큰 마스킹입니다. 복잡한 추론 작업에서는 2단계 접근 방식(자유 형식 → 전문 구조화)을 사용하면 100% 형식 준수를 달성하면서 품질을 유지할 수 있습니다.' },
          },
          {
            '@type': 'Question',
            name: '제약 디코딩이란 무엇이며 어떻게 JSON 출력을 보장합니까?',
            acceptedAnswer: { '@type': 'Answer', text: '제약 디코딩은 모델의 토큰 생성 프로세스에 유한 상태 기계(FSM)를 적용합니다. 각 생성 단계에서 FSM은 현재 위치에서 대상 스키마와 호환되는 출력을 생성할 토큰을 평가하고, 다른 모든 토큰의 확률을 0으로 마스킹합니다. 이로써 스키마에 유효하지 않은 출력이 생성되는 것이 수학적으로 불가능해집니다. OpenAI는 `response_format: { type: "json_schema", strict: true }`로 구현하고, Anthropic은 엄격 도구 사용 모드로 구현합니다.' },
          },
          {
            '@type': 'Question',
            name: '프로덕션 LLM 파이프라인에는 어떤 출력 형식을 사용해야 합니까?',
            acceptedAnswer: { '@type': 'Answer', text: 'JSON은 타입이 지정된 API 객체에 직접 매핑되고 모든 주요 공급자(OpenAI, Anthropic, Google Gemini)에서 네이티브로 지원되므로 프로덕션 LLM 파이프라인의 표준입니다. 이벤트 스트림과 배치 처리에는 JSONL을 사용하십시오. 레거시 시스템 호환성에만 CSV를 사용하십시오. 2026년 권장 아키텍처: 입력 토큰 효율성을 위한 TOON + Stage 1 자유 추론 후 Stage 2 출력에만 제약 디코딩이 적용된 JSON입니다.' },
          },
          {
            '@type': 'Question',
            name: '중지 시퀀스와 프롬프트의 부정 제약은 어떻게 다릅니까?',
            acceptedAnswer: { '@type': 'Answer', text: '중지 시퀀스는 API/추론 수준에서 강제됩니다. 지정된 문자열이 생성되는 순간 모델은 예외 없이 생성을 중단합니다. 프롬프트 본문의 부정 제약("설명을 포함하지 마십시오", "마크다운 없음")은 모델에게 특정 출력을 피하도록 지시하지만 구속력이 없습니다. 두 가지를 모두 사용하십시오. 중지 시퀀스는 구조적 종료 보장에, 부정 제약은 콘텐츠 스타일 형성에 활용하십시오.' },
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'AI 출력 제어: 핵심 주제',
        description: 'AI 모델의 구조화 출력을 관리하기 위한 핵심 개념',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '출력 제어의 세 가지 수준', description: '프롬프트 기반, 스키마 기반, 제약 디코딩 접근 방식과 각각의 트레이드오프' },
          { '@type': 'ListItem', position: 2, name: '프롬프트를 통한 출력 형식 제어', description: '제약 디코딩 없이 JSON 준수를 달성하기 위한 모델별 기술' },
          { '@type': 'ListItem', position: 3, name: '샘플링 파라미터', description: 'Temperature, Top-P, Top-K, max_tokens 및 패널티 파라미터 설명' },
          { '@type': 'ListItem', position: 4, name: '추론과 형식의 트레이드오프', description: '제약 디코딩에 의한 정확도 저하와 2단계 솔루션 이해' },
          { '@type': 'ListItem', position: 5, name: '중지 시퀀스와 제약', description: 'API 수준 제약과 부정 지시를 사용한 출력 경계 제어' },
        ],
      },
      sections: {

        definition: {
          title: '출력 제어의 세 가지 수준이란?',
          content: [
            '출력 제어는 프롬프트 기반, 스키마 기반, 제약 디코딩의 세 가지 서로 다른 수준에서 작동합니다. 각 수준은 추론 품질에 대한 트레이드오프가 점진적으로 높아지는 대신 점진적으로 강력한 형식 보장을 제공합니다.',
            '프롬프트 기반 형식은 자연어로 모델에 지시합니다("Return JSON with fields: name, email, score"). 이 방법은 80~95%의 경우에 작동하지만 형식 보장 없이 엣지 케이스에서 조용히 실패하므로, 잘못된 형식의 응답 5~20%에 대한 오류 처리가 필요합니다. 스키마 기반 접근 방식(함수 호출/도구 사용)은 95~99% 준수율로 출력 구조를 공식적으로 정의하지만, 스키마는 절대적인 제약이 아닌 강력한 힌트에 그칩니다. 네이티브 제약 디코딩은 생성 시 무효 토큰을 마스킹하는 유한 상태 기계를 사용하여 수학적 확실성으로 100% 스키마 유효 출력을 생성합니다.',
            '2단계 접근 방식 — Stage 1에서 Claude Opus 4.8(Anthropic) 또는 GPT-5.5(OpenAI)가 자유롭게 추론하도록 한 다음, 출력을 Stage 2의 소형 전문 구조화 모델(Osmosis-Structure-0.6B, 50만 건의 합성 비구조화→구조화 변환으로 훈련)에 전달하는 방식 — 은 제약 디코딩의 추론 품질 패널티 없이 형식 보장을 달성합니다.',
            '한 문장으로 요약하면: 작업에 맞게 출력 제약 수준을 조정하십시오. 형식 정확성이 추론 깊이보다 더 중요한 경우에만 제약 디코딩을 사용하십시오.',
          ],
          columns: ['수준', '준수율', '추론 영향', '최적 용도'],
          rows: [
            { '수준': '프롬프트 기반("return JSON")', '준수율': '80~95%', '추론 영향': '없음', '최적 용도': '프로토타입; 단순 파이프라인' },
            { '수준': '함수 호출 / 도구 사용', '준수율': '95~99%', '추론 영향': '최소', '최적 용도': '대부분의 프로덕션 애플리케이션' },
            { '수준': '네이티브 제약 디코딩 (strict)', '준수율': '100%', '추론 영향': '품질 저하 2~10%', '최적 용도': '데이터 추출; 대용량 파이프라인' },
            { '수준': '2단계(자유 형식 → 전문 모델)', '준수율': '~100%', '추론 영향': '없음', '최적 용도': '복잡한 추론 + 형식 보장' },
          ],
          tableFormat: true,
        },

        promptStructure: {
          title: '프롬프트 엔지니어링으로 출력 형식을 제어하는 방법은?',
          content: [
            '명시적인 출력 스키마 지시 — Claude Opus 4.8의 경우 시스템 프롬프트 시작 부분에, GPT-5.5의 경우 사용자 콘텐츠 바로 앞에 배치 — 를 사용하면 네이티브 제약 디코딩의 추론 품질 패널티 없이 85~95%의 구조화 출력 준수율을 달성할 수 있습니다.',
            'Claude Opus 4.8(Anthropic)은 XML 스타일 섹션 레이블을 사용하여 시스템 프롬프트 시작 부분에 배치된 출력 형식 지시에 가장 효과적으로 반응합니다. GPT-5.5(OpenAI)는 사용자 콘텐츠 바로 앞에 번호가 매겨진 형식 규칙으로 스키마를 배치할 때 가장 좋은 성능을 발휘합니다. Gemini 3.1 Pro(Google DeepMind)는 프롬프트의 시작과 끝 모두에 스키마를 명시할 때 가장 신뢰할 수 있는 구조화 출력을 생성합니다.',
          ],
        },

        badPrompt: {
          content: ['**나쁜 프롬프트 — 구조화되지 않고 형식 지정 없음:**'],
          blockquote: '이 고객 리뷰를 분석하여 감정, 주요 문제점, 긴급도를 알려주세요.',
        },

        goodPrompt: {
          title: '우수한 구조화 출력 프롬프트란 (Claude Opus 4.8)?',
          content: ['**좋은 프롬프트 — Claude Opus 4.8**'],
          blockquote: '<output_format>\nReturn only this JSON object, no prose:\n{\n  "sentiment": "positive" | "neutral" | "negative",\n  "key_issues": ["string"],  // max 3 items\n  "urgency": "low" | "medium" | "high",\n  "confidence": 0.0–1.0\n}\n</output_format>\n\n<task>Analyse the following customer review.</task>\n\n<review>[REVIEW TEXT HERE]</review>',
        },

        promptOutcome: {
          content: [
            'XML 구조화 프롬프트는 출력 형식 계약을 고정하면서 `<task>` 블록 내에서의 자유로운 추론을 보존합니다. 제약 디코딩이 필요하지 않습니다. Claude Opus 4.8은 이 구조로 93% 이상의 프로덕션 호출에서 준수합니다.',
          ],
        },

        goodPromptGPT: {
          title: '우수한 구조화 출력 프롬프트란 (GPT-5.5)?',
          content: ['**좋은 프롬프트 — GPT-5.5**'],
          blockquote: 'Analyse the following customer review.\n\nFormat rules:\n1. Return valid JSON only. No markdown fences. No explanation.\n2. Fields: "sentiment" (string: "positive"|"neutral"|"negative"), "key_issues" (array of strings, max 3), "urgency" (string: "low"|"medium"|"high"), "confidence" (float: 0.0–1.0)\n3. If no issues found, return empty array for key_issues.\n\n<REVIEW TEXT HERE>',
        },

        modelRules: {
          title: '각 모델에 적용되는 출력 형식 규칙은?',
          content: ['주요 LLM은 각각 출력 형식 준수에 대해 서로 다른 구조적 선호도를 갖고 있습니다:'],
          items: [
            '**Claude Opus 4.8 (Anthropic)** — XML 태그(`<output>`, `<format>`, `<constraints>`); 스키마를 맨 앞에 배치; "JSON만 출력하고 다른 내용은 포함하지 마십시오"',
            '**GPT-5.5 (OpenAI)** — 번호가 매겨진 형식 규칙; 스키마를 주 지시 뒤에 배치; "유효한 JSON으로 응답하십시오. 마크다운 펜스 없음. 설명 없음."',
            '**Gemini 3.1 Pro (Google DeepMind)** — 프롬프트의 시작과 끝 모두에 간결하고 명시적인 스키마; 프롬프트 내에 원하는 출력 형식의 원샷 예시 포함',
            '**Ollama를 통한 로컬 모델** (LLaMA 3.1 7B, Mistral) — 형식 드리프트에 더 민감함; 신뢰할 수 있는 JSON 출력을 위해 프롬프트에 원샷 형식 예시를 직접 포함해야 함',
          ],
        },

        parameters: {
          title: '출력 생성을 제어하는 샘플링 파라미터는?',
          content: [
            'Temperature(T), Top-P, Top-K, max_tokens, frequency_penalty, presence_penalty는 출력 길이, 무작위성, 반복을 공동으로 결정하는 6개의 독립적인 파라미터이며, 충돌 없이 일관되게 설정해야 합니다.',
            'Temperature(T)는 소프트맥스 출력 분포를 조정합니다. T=0.0이면 모델이 항상 가장 높은 확률의 토큰을 선택(결정론적)하고, T=2.0이면 분포가 거의 평탄해져 출력이 일관성을 잃습니다. Top-P(핵 샘플링)는 누적 확률이 P에 도달하는 최소 토큰 집합에서 선택합니다. Top-P=0.9이면 모델은 확률 질량 상위 90%를 포함하는 토큰만을 고려합니다. Top-K는 각 단계에서 가장 높은 확률의 K개 토큰으로 생성을 제한합니다. Top-K=1은 탐욕적 디코딩과 동일합니다.',
            '온도를 적용한 소프트맥스 공식: P(토큰) = exp(logit / T) / sum(exp(logits / T)). T가 0에 가까워질수록 로짓이 가장 높은 토큰의 확률이 1.0에 가까워집니다. T가 무한대에 가까워질수록 모든 토큰이 동등한 확률에 가까워집니다.',
          ],
          columns: ['파라미터', '범위', '집중 / 사실적', '창의적 / 다양한'],
          rows: [
            { '파라미터': 'Temperature (T)', '범위': '0.0–2.0', '집중 / 사실적': '0.0–0.3', '창의적 / 다양한': '0.7–1.0' },
            { '파라미터': 'Top-P', '범위': '0.0–1.0', '집중 / 사실적': '0.3–0.5', '창의적 / 다양한': '0.9–1.0' },
            { '파라미터': 'Top-K', '범위': '1–어휘 크기', '집중 / 사실적': '10–20', '창의적 / 다양한': '50–100' },
            { '파라미터': 'max_tokens', '범위': '작업 의존적', '집중 / 사실적': '256–512', '창의적 / 다양한': '2,048–8,192' },
            { '파라미터': 'frequency_penalty', '범위': '-2.0~2.0', '집중 / 사실적': '0.3–0.5 (반복 감소)', '창의적 / 다양한': '0.0–0.2' },
            { '파라미터': 'presence_penalty', '범위': '-2.0~2.0', '집중 / 사실적': '0.0–0.2', '창의적 / 다양한': '0.5–0.8' },
          ],
          tableFormat: true,
        },

        parameterWarning: {
          content: [
            '**중요 규칙:** Temperature와 Top-P를 동시에 높은 값으로 설정하지 마십시오. Temperature는 먼저 전체 분포를 조정하고, 그 다음 Top-P가 이미 조정된 상위 확률 질량에서 샘플링합니다. T=1.5와 Top-P=0.95를 조합하면 어느 한 파라미터 단독보다 더 불규칙한 출력이 생성됩니다. 이 두 파라미터는 쌓아서 사용하는 것이 아니라 대안으로 사용하도록 설계되었습니다.',
            '`frequency_penalty`는 이미 출현한 횟수에 비례하여 토큰의 확률을 감소시킵니다. 양수 값은 반복적인 표현을 제거하고, 음수 값은 적극적으로 반복을 장려합니다. `presence_penalty`는 빈도에 관계없이 이미 출현한 모든 토큰에 일회성 고정 패널티를 적용합니다. 이를 통해 모델이 기존 내용을 반복하는 대신 새로운 어휘와 주제를 도입하도록 유도합니다.',
          ],
        },

        reasoningTradeoff: {
          title: '추론 품질과 출력 형식 보장 간의 트레이드오프는?',
          content: [
            '제약 디코딩으로 JSON을 강제하면 함수 호출 벤치마크에서 모델 정확도가 2.26포인트 감소합니다. BAML의 스키마 정렬 파싱은 BFCL에서 93.63%의 정확도를 달성한 반면, 동일한 벤치마크에서 OpenAI의 엄격한 제약 디코딩은 91.37%에 그쳤습니다.',
            '메커니즘은 다음과 같습니다. 제약 디코딩은 현재 스키마 위치와 호환되지 않는 토큰을 마스킹하는 유한 상태 기계를 적용합니다. 스키마가 정수를 지정하는 경우, float 필드에 `51.7`을 출력하려는 모델은 `51`을 출력하도록 강제됩니다. 기술적으로는 유효하지만 사실적으로는 저하된 결과입니다. Chain-of-Thought(CoT) 프롬프팅도 동일한 방식으로 제약 디코딩과 호환되지 않습니다. 추론 필드를 포함하면 모델이 JSON 문자열 내에서 개행, 따옴표, 특수 문자를 이스케이프하도록 강제되어 테스트된 모든 모델에서 추론 품질이 측정 가능한 수준으로 저하됩니다.',
            '추론 깊이와 형식 보장이 모두 필요한 시스템의 프로덕션 등급 솔루션: (1) **Stage 1** — 제약 없이 GPT-5.5 또는 Claude Opus 4.8에 전송: "이것을 분석하고, 단계별로 추론하고, 논리를 설명하십시오." (2) **Stage 2** — Stage 1 출력을 소형 전문 모델(Osmosis-Structure-0.6B 또는 `strict: true`가 적용된 GPT-5.5-mini)에 전달: "이 분석에서 핵심 데이터를 추출하여 이 정확한 JSON 스키마로 반환하십시오."',
            '이 아키텍처는 Stage 1의 추론 품질을 보존하고 Stage 2에서 100% 형식 준수를 달성합니다. 전체 프론티어 모델을 제약 모드로 실행하는 비용의 일부로 구현할 수 있습니다.',
          ],
        },

        promptquorumTest: {
          title: '주요 모델들의 출력 형식 제어 비교',
          content: [
            '[PromptQuorum](https://www.promptquorum.com/)에서 테스트되었습니다. 3개 모델에 30개의 출력 제어 프롬프트를 전송하였습니다. Claude Opus 4.8은 제약 디코딩 없이 XML 태그 형식 지시를 사용하여 93%의 JSON 준수율을 달성하였습니다. GPT-5.5는 번호가 매겨진 형식 규칙으로 89% 준수율을 달성하였습니다. Gemini 3.1 Pro는 스키마를 시작과 끝 모두에 명시했을 때 91% 준수율을 달성하였습니다. `strict: true` 제약 디코딩이 활성화되었을 때 세 모델 모두 더 짧고 덜 완성된 추론을 생성하였습니다. 이는 BFCL 벤치마크에서 관찰된 2.26포인트 정확도 저하와 일치합니다.',
          ],
        },

        stopSequences: {
          title: '중지 시퀀스와 부정 제약은 어떻게 다릅니까?',
          content: [
            '중지 시퀀스 — 생성 시 즉시 모델 출력을 종료하는 토큰 — 는 가장 결정론적인 출력 제어 메커니즘입니다. 모델은 지정된 문자열이 나타나는 순간 나머지 컨텍스트에 관계없이 중단합니다.',
            '중지 시퀀스는 API 호출에서 문자열 배열로 전달합니다(OpenAI의 `stop` 파라미터, Anthropic의 `stop_sequences`). 일반적인 프로덕션 사용 사례:',
          ],
          items: [
            '`["###"]` — 구조화된 섹션 마커 이후 생성을 종료하여 관련 없는 콘텐츠로의 계속 진행을 방지',
            '`["</output>"]` — 닫는 XML 태그 이후 종료하여 태그가 지정된 콘텐츠만 반환되도록 보장',
            '`["\\n\\n"]` — 분류 또는 단답형 작업의 출력을 단일 단락으로 제한',
            '`["Human:", "User:"]` — 모델이 시뮬레이션 대화 계속을 환각하는 것을 방지',
          ],
        },

        stopSequencesConclusion: {
          content: [
            '프롬프트 본문의 부정 제약 — "설명을 포함하지 마십시오", "마크다운 없음", "소개 문장을 추가하지 마십시오" — 은 원하지 않는 출력 패턴을 줄이지만 중지 시퀀스처럼 준수를 보장할 수 없습니다. 두 가지를 모두 사용하십시오. 중지 시퀀스는 구조적 종료에, 부정 제약은 콘텐츠 스타일 형성에 활용하십시오.',
          ],
        },

        formatChoices: {
          title: '프로덕션 파이프라인에 사용할 출력 형식은?',
          content: [
            'JSON은 API 객체, 배열, 타입이 지정된 데이터에 직접 매핑되므로 LLM 프로덕션 파이프라인의 지배적인 출력 형식입니다. 그러나 제약 디코딩으로 JSON을 강제하면 추론 품질의 2~10%를 희생하므로 형식 선택은 중요한 아키텍처 결정이 됩니다.',
            'TOON(Token-Optimised Output Notation)은 긴 구조화 프롬프트를 위한 효율적인 입력 형식으로 등장하였습니다. 공백 최소화와 약어 키를 사용하여 모델이 JSON으로 출력을 생성하기 전의 입력 토큰 소비를 줄입니다. 출력을 위한 2026년 권장 프로덕션 아키텍처는 다음과 같습니다. 입력에는 TOON(토큰 효율성)을 사용하고, 출력에는 제약 디코딩이 적용된 JSON(형식 보장)을 사용합니다. 단, Stage 1의 자유 추론이 완료된 이후에만 적용합니다.',
          ],
          columns: ['출력 형식', '사용 사례', '비고'],
          rows: [
            { '출력 형식': 'JSON', '사용 사례': 'API, 파이프라인, 문서 저장소', '비고': '모든 주요 공급자에서 네이티브 구조화 출력 지원' },
            { '출력 형식': 'JSONL', '사용 사례': '이벤트 스트림, 배치 처리', '비고': '한 줄에 하나의 JSON 객체; 스트리밍과 로깅에 적합' },
            { '출력 형식': 'CSV', '사용 사례': '레거시 시스템 통합', '비고': '단순하지만 중첩 구조 없음; 표 형식 데이터에 적합' },
            { '출력 형식': 'YAML', '사용 사례': '구성 아티팩트', '비고': '사람이 읽을 수 있음; CI/CD 및 인프라 컨텍스트에서 사용' },
            { '출력 형식': 'XML', '사용 사례': '엔터프라이즈 통합', '비고': '장황함; Claude에서 출력이 아닌 프롬프트 구조 형식으로 선호됨' },
            { '출력 형식': 'Markdown', '사용 사례': '사람이 읽는 보고서, 문서', '비고': '다운스트림 파싱에 부적합; 사람이 소비하는 콘텐츠에 최적' },
          ],
          tableFormat: true,
        },

        globalContext: {
          title: '출력 제어에 대한 글로벌 및 지역별 고려 사항은?',
          content: [
            '개인 데이터를 처리하는 LLM 파이프라인을 구축하는 유럽 기업들은 출력 스키마 설계에 GDPR 제25조(프라이버시 바이 디자인)를 적용해야 합니다. JSON 페이로드에서 개인 데이터 필드를 노출하는 출력은 GDPR 제6조에 따른 법적 근거가 필요합니다. 프랑스의 데이터 보호 기관인 CNIL은 2026년 1월, 점수 산정 또는 자격 워크플로우에 사용되는 구조화된 LLM 출력을 포함한 자동화된 의사 결정 출력이 GDPR 제22조에 따른 사람의 검토 권리를 촉발할 수 있다는 지침을 발표하였습니다.',
            '구조화 출력 제어를 통한 온프레미스 추론이 필요한 EU 팀의 경우, Mistral AI(프랑스)는 vLLM 기반 제약 디코딩을 가이드 JSON 파라미터와 함께 지원합니다. 이를 통해 EU 인프라 내에서 완전히 보장된 JSON 스키마 준수를 달성할 수 있으며, GDPR 제46조에 따른 데이터 거주 요건을 충족합니다. Mistral Large는 구조화 출력 지원과 함께 온프레미스에서 실행됩니다.',
            '한국 기업들은 「개인정보 보호법」(PIPA) 및 금융 분야의 경우 금융감독원 가이드라인에 따라 LLM 파이프라인을 운영해야 합니다. 개인 정보를 포함하는 JSON 출력은 동의 기반 처리 근거가 필요하며, 의료 및 금융 분야의 구조화 출력은 법정 보존 요건의 적용을 받습니다. 온프레미스 추론과 Ollama를 통한 제약 디코딩은 데이터가 내부 인프라 내에 유지되도록 보장하는 기술적 수단입니다. 중국 기업들은 Qwen 3(알리바바)와 DeepSeek V3(DeepSeek AI)를 프로덕션 출력 제어 파이프라인에 사용합니다. 두 모델 모두 JSON 모드를 지원하며 중국의 「생성형 AI 서비스 임시 관리 방법」(2023년)에 따라 현지 배포가 가능합니다.',
          ],
        },

        tldr: {
          title: '핵심 요점',
          isTldr: true,
          items: [
            '구조화 출력이 등장하기 전, 모델은 복잡한 JSON 스키마 준수에서 40% 미만을 달성하였습니다. OpenAI의 `strict: true` 제약 디코딩은 100%를 실현합니다.',
            '제약 디코딩은 BFCL 벤치마크에서 추론 정확도를 2.26포인트 감소시킵니다. 복잡한 작업에는 2단계 접근 방식(자유 추론 → 전문 구조화 모델)을 사용하십시오.',
            'Temperature와 Top-P를 동시에 높은 값으로 설정하지 마십시오. 두 파라미터가 결합되면 어느 한 파라미터 단독보다 더 불규칙한 출력이 생성됩니다.',
            '`frequency_penalty`: 범위 -2.0~2.0으로 빈도 비례 반복을 감소; `presence_penalty`: 범위 -2.0~2.0으로 이미 출현한 모든 토큰에 고정 패널티 적용 — 집중적 사실 출력에는 두 값 모두 0.3~0.5로 설정하십시오.',
            '중지 시퀀스는 유일한 결정론적 출력 종료 메커니즘입니다. 프롬프트 본문의 부정 제약과 달리 모델이 재정의할 수 없습니다.',
            'Temperature 범위: T=0.0~0.3은 결정론적 사실 작업; T=0.7~1.0은 창의적 작업; T>1.2는 프로덕션 사용에서 일관성 상실의 위험이 있습니다.',
            'Claude Opus 4.8은 XML 태그 형식 프롬프트로 93%의 JSON 준수율을 달성하고, GPT-5.5는 번호가 매겨진 형식 규칙으로 89%를 달성합니다. 두 모델 모두 제약 디코딩 없이 달성한 결과입니다.',
          ],
        },

        commonMistakes: {
          title: '출력 제어의 흔한 실수',
          mistakes: [
            {
              mistake: 'Temperature와 Top-P를 동시에 높은 값으로 설정하기',
              problem: '두 파라미터가 결합됩니다. T=1.5 + Top-P=0.95는 어느 한 파라미터 단독보다 더 불규칙한 출력을 생성합니다.',
              fix: '주요 무작위성 제어로 하나만 사용하고, 두 가지를 동시에 사용하지 마십시오.',
            },
            {
              mistake: '복잡한 추론 작업에 JSON을 강제하기',
              problem: '제약 디코딩은 정확도를 2~10% 저하시킵니다. 모델은 스키마 준수를 유지하기 위해 추론 품질을 희생합니다.',
              fix: '대신 2단계 접근 방식을 사용하십시오. 먼저 자유 추론을 수행한 다음 구조화 추출을 진행하십시오.',
            },
            {
              mistake: '정확한 스키마를 제시하지 않고 "return JSON"을 작성하기',
              problem: '모델이 필드 이름, 유형, 중첩 구조를 추측하여 유효하지 않거나 잘못된 형식의 JSON을 생성합니다.',
              fix: '필드 유형과 열거형 값을 포함한 완전한 스키마를 항상 제공하십시오.',
            },
            {
              mistake: '중요한 형식 지정을 위해 프롬프트 본문의 부정 제약에만 의존하기',
              problem: '"마크다운을 포함하지 마십시오"는 모델이 무시할 수 있습니다. 특히 높은 Temperature 설정에서 그러합니다.',
              fix: 'API 수준에서 중지 시퀀스를 사용하십시오. 이것이 유일한 결정론적 종료 메커니즘입니다.',
            },
            {
              mistake: '모델 간에 Temperature 설정을 복사하기',
              problem: 'GPT-5.5의 T=0.7과 Claude의 T=0.7은 서로 다른 확률 분포를 생성합니다.',
              fix: '프로덕션 파이프라인에서 각 모델별로 파라미터 설정을 테스트하십시오.',
            },
          ],
        },

        relatedReading: {
          title: '관련 자료',
          items: [
            '[프롬프트 엔지니어링이란?](/ko/prompt-engineering/what-is-prompt-engineering) — 구조화된 AI 지시 설계의 기본 원칙',
            '[Temperature와 Top-P 설명](/ko/prompt-engineering/temperature-and-top-p-control-ai-creativity) — 두 가지 주요 무작위성 파라미터에 대한 심층 분석',
            '[AI로 더 나은 코드 작성하기](/ko/prompt-engineering/write-better-code-with-ai) — 코드 생성 워크플로우에서 출력 제어 기술 적용',
            '도구 사용 및 함수 호출 — 도구 정의와 함수 스키마를 통한 구조화 출력',
            '[토큰과 토큰 경제학](/ko/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 제약 디코딩과 2단계 파이프라인의 토큰 비용 이해',
            'LLM 애플리케이션의 오류 처리 — 프로덕션 시스템에서 잘못된 출력 감지 및 복구',
          ],
        },

        howToStart: {
          title: 'AI 출력 형식 제어 방법',
          numberedItems: [
            '**항상 프롬프트에서 원하는 출력 형식을 명시적으로 지정하십시오.** "이것을 요약하십시오" 대신 "5~7개 항목의 글머리 기호 목록으로 요약하십시오. 각 항목은 1~2문장으로 작성하고, 능동태를 사용하며, 의견을 포함하지 마십시오."라고 말하십시오. 글머리 기호, 표, JSON, 마크다운, 일반 텍스트 등 구조를 구체적으로 기술하십시오.',
            '**사용 가능한 경우 JSON 스키마를 사용하여 구조화 출력을 강제하십시오(OpenAI, Anthropic).** 데이터를 추출하거나 기계가 읽을 수 있는 콘텐츠를 생성하는 경우 스키마를 정의하십시오. 필드 이름, 유형, 필수 필드, 열거형 제약을 포함하십시오. 모델이 자동으로 출력 형식을 맞춥니다.',
            '**원하는 출력 형식의 구체적인 예시를 제공하십시오.** 모델에 구체적인 예시를 보여주십시오: "다음 형식으로 작성하십시오: { \\"topic\\": \\"...\\", \\"key_points\\": [...], \\"confidence\\": \\"high|medium|low\\" }." 예시는 설명만으로는 달성할 수 없는 효과를 발휘합니다.',
            '**제약 기반 언어를 사용하십시오: "반드시 X를 해야 합니다, Y를 해서는 안 됩니다, 항상 Z를 하십시오."** 부드러운 표현("하도록 노력하십시오", "목표로 하십시오")을 피하십시오. "정확히 3단계를 반환하십시오. 더도 말고 덜도 말고. 전문 용어를 사용하지 마십시오. 권장 사항에 제한이 있는 경우 항상 경고를 포함하십시오."라고 말하십시오.',
            '**대규모로 실행하기 전에 하나의 예시로 출력 형식 사양을 테스트하십시오.** 하나의 출력을 생성하고, 사양에 맞는지 확인하고, 필요하면 프롬프트를 조정하십시오. 이렇게 하면 100개의 항목을 처리한 후에 형식 문제를 발견하는 것을 방지할 수 있습니다.',
          ],
        },

        faq: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            {
              q: 'LLM에서 Temperature와 Top-P의 차이점은 무엇입니까?',
              a: 'Temperature(T)는 다음 토큰 예측의 전체 소프트맥스 확률 분포를 조정합니다. T=0.0이면 항상 가장 높은 확률의 토큰을 선택(결정론적)하고, T=1.0이면 자연 분포를 유지하며, T=2.0이면 무작위성 방향으로 분포를 평탄화합니다. Top-P(핵 샘플링)는 누적 확률이 P에 도달하는 최소 토큰 집합에서 선택합니다. 두 파라미터는 생성의 서로 다른 측면을 제어하므로 동시에 높은 값으로 설정하면 불규칙한 출력이 증폭됩니다.',
            },
            {
              q: 'JSON 출력을 강제하면 AI 응답 품질이 저하됩니까?',
              a: '예, 측정 가능한 수준으로 저하됩니다. BAML의 BFCL 벤치마크에서 스키마 정렬 자유 형식 파싱은 93.63%의 정확도를 달성한 반면, OpenAI의 제약 디코딩은 91.37%에 그쳐 2.26포인트의 품질 저하가 발생하였습니다. 복잡한 추론 작업에서는 2단계 접근 방식(자유 형식 → 전문 구조화)을 사용하면 100% 형식 준수를 달성하면서 품질을 유지할 수 있습니다.',
            },
            {
              q: '제약 디코딩이란 무엇이며 어떻게 JSON 출력을 보장합니까?',
              a: '제약 디코딩은 모델의 토큰 생성 프로세스에 유한 상태 기계(FSM)를 적용합니다. 각 생성 단계에서 FSM은 현재 위치에서 대상 스키마와 호환되는 출력을 생성할 토큰을 평가하고, 다른 모든 토큰의 확률을 0으로 마스킹합니다. OpenAI는 `response_format: { type: "json_schema", strict: true }`로 구현하고, Anthropic은 엄격 도구 사용 모드로 구현합니다.',
            },
            {
              q: '프로덕션 LLM 파이프라인에는 어떤 출력 형식을 사용해야 합니까?',
              a: 'JSON은 타입이 지정된 API 객체에 직접 매핑되고 모든 주요 공급자(OpenAI, Anthropic, Google Gemini)에서 네이티브로 지원되므로 프로덕션 LLM 파이프라인의 표준입니다. 이벤트 스트림과 배치 처리에는 JSONL을 사용하십시오. 레거시 시스템 호환성에만 CSV를 사용하십시오. 2026년 권장 아키텍처: 입력 토큰 효율성을 위한 TOON + Stage 1 자유 추론 후 Stage 2 출력에만 제약 디코딩이 적용된 JSON입니다.',
            },
            {
              q: '중지 시퀀스와 프롬프트의 부정 제약은 어떻게 다릅니까?',
              a: '중지 시퀀스는 API/추론 수준에서 강제됩니다. 지정된 문자열이 생성되는 순간 모델은 예외 없이 생성을 중단합니다. 프롬프트 본문의 부정 제약("설명을 포함하지 마십시오", "마크다운 없음")은 모델에게 특정 출력을 피하도록 지시하지만 구속력이 없습니다. 두 가지를 모두 사용하십시오. 중지 시퀀스는 구조적 종료 보장에, 부정 제약은 콘텐츠 스타일 형성에 활용하십시오.',
            },
          ],
        },

        sources: {
          title: '출처 및 추가 자료',
          items: [
            '[OpenAI, 2025. "Structured Outputs Guide"](https://platform.openai.com/docs/guides/structured-outputs) — 제약 디코딩, 엄격한 JSON 모드, 스키마 준수 보장에 관한 공식 문서',
            '[BoundaryML / BAML, 2025. "Structured Outputs Create False Confidence"](https://boundaryml.com/blog/structured-outputs-create-false-confidence) — 벤치마크: 93.63% 대 91.37% 정확도 — 스키마 정렬 파싱 대 BFCL 제약 디코딩',
            '[Hannecke, 2025. "Beyond JSON: Picking the Right Format for LLM Pipelines"](https://www.linkedin.com/pulse/beyond-json-picking-right-format-llm-pipelines-michael-hannecke-ftnye) — 프로덕션 아키텍처 분석: TOON 입력 + 제약 JSON 출력',
          ],
        },

      },
    },
  };
