// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-evaluation-metrics
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Prompt Evaluation Metrics: What to Measure and How',
      seoTitle: 'Prompt Evaluation Metrics: Pass Rate, BLEU & LLM-as-Judge (2026)',
      metaDescription: 'Learn which prompt evaluation metrics to use by output type: pass rate for JSON, BLEU for translation, semantic similarity for paraphrase, LLM-as-judge for free text.',
      ogDescription: 'Choose the right prompt evaluation metric for your output type. Compare pass rate, BLEU, semantic similarity, and LLM-as-judge — with regression detection workflow.',
      twitterDescription: 'Pass rate, BLEU, semantic similarity, or LLM-as-judge? Pick the right prompt evaluation metric by output type. Framework + regression alerts.',
      intro: 'Choosing the wrong evaluation metric for your prompt produces misleading results that hide real production failures. BLEU scores are meaningless for JSON outputs. Binary pass/fail says nothing about nuanced generation quality. The metric that works depends entirely on what your prompt produces.',
      publishDate: '2026-04-10',
      dateModified: '2026-04-10',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      audience: 'Developers and teams deploying LLMs in production',
      primaryTerm: 'prompt evaluation metrics',
      aboutTopics: ['pass rate', 'BLEU score', 'LLM-as-judge'],
      next_refresh_due: '2026-10-10',
      leadAnswerBlock: '**Prompt evaluation metrics are quantitative signals that measure whether a prompt reliably produces the intended output.** The right metric depends on your output type: pass rate for structured data, BLEU for translation, semantic similarity for paraphrase tasks, and LLM-as-judge for nuanced free text generation.',
      quickFacts: [
        'Pass rate maps directly to production failure rate: 90% = 10% of requests fail',
        'BLEU score was designed in 2002 for machine translation, not general AI output',
        'Semantic similarity above 0.85 typically indicates semantically equivalent content',
        'LLM-as-judge scales to thousands of evaluations per hour',
        'A 5-point drop in pass rate is the standard regression alert threshold',
        'GPT-5.5 and Claude models can differ 10–20 points on the same prompt test set',
      ],
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Are Prompt Evaluation Metrics?', anchor: '#definition' },
        { label: 'Metrics by Output Type', anchor: '#metric-types' },
        { label: 'Pass Rate: The Most Useful Metric', anchor: '#pass-rate' },
        { label: 'BLEU Score: When to Use It', anchor: '#bleu' },
        { label: 'Semantic Similarity Scoring', anchor: '#semantic-similarity' },
        { label: 'LLM-as-Judge Evaluation', anchor: '#llm-as-judge' },
        { label: 'How To Detect Metric Regression', anchor: '#regression-metrics' },
        { label: 'How To Start', anchor: '#how-to-start' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Regional Considerations', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Prompt Evaluation Metrics: What to Measure and How',
        description: 'Prompt evaluation metrics include pass rate, BLEU score, semantic similarity, and LLM-as-judge scoring.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-10',
        url: 'https://www.promptquorum.com/prompt-engineering/prompt-evaluation-metrics',
        inLanguage: 'en',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Pass Rate' },
          { '@type': 'Thing', name: 'BLEU Score' },
          { '@type': 'Thing', name: 'LLM-as-Judge' },
          { '@type': 'Thing', name: 'Semantic Similarity' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        audience: { '@type': 'Audience', audienceType: 'Developers and teams deploying LLMs in production' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What are prompt evaluation metrics?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt evaluation metrics are quantitative signals that measure whether a prompt produces the intended output reliably. Key metrics include pass rate (binary correct/incorrect), BLEU score (n-gram overlap for translation and summarization), semantic similarity (embedding cosine similarity for paraphrase tasks), and LLM-as-judge (model-scored quality rubric for free text). Choosing the wrong metric for your output type produces misleading scores.' } },
          { '@type': 'Question', name: 'What is pass rate in prompt evaluation?', acceptedAnswer: { '@type': 'Answer', text: 'Pass rate is the percentage of test inputs where the prompt output meets the defined success criteria. Pass rate = passing outputs / total test cases. It is the most actionable metric for structured outputs because it maps directly to production failure rate.' } },
          { '@type': 'Question', name: 'When should you use BLEU score for prompts?', acceptedAnswer: { '@type': 'Answer', text: 'BLEU is appropriate for translation and summarization tasks where the output should closely match a reference text. It is misleading for JSON generation, instruction-following, and creative writing because it measures n-gram word overlap, not format compliance or semantic correctness. For example, a JSON extraction prompt that returns the correct structure but different phrasing will score near zero on BLEU despite being functionally correct.' } },
          { '@type': 'Question', name: 'What is LLM-as-judge evaluation?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-judge uses a capable model like GPT-5.5 or Claude Opus 4.8 to score outputs against a rubric. It scales to thousands of test cases without human review and handles nuanced quality dimensions that binary metrics miss. The main risk is model bias: the judge may favor outputs similar to its own style.' } },
          { '@type': 'Question', name: 'How do you detect prompt metric regression?', acceptedAnswer: { '@type': 'Answer', text: 'Track your primary metric per prompt version and alert when it drops more than 5 percentage points from the established baseline. The workflow is: record baseline metric before any change, make the change, re-run the full test set, compare against baseline. A drop of more than 5 points should block deployment. A drop of more than 10 points is a critical regression requiring investigation before proceeding.' } },
          { '@type': 'Question', name: 'Which metric should I use for JSON output prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Use binary pass/fail for JSON output prompts. Define pass as: valid JSON + required fields present + values within allowed range. BLEU and semantic similarity are not meaningful for structured outputs.' } },
          { '@type': 'Question', name: 'Can you combine multiple prompt evaluation metrics?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — production prompts typically need a primary metric (pass rate for structured outputs, accuracy for classification) and a secondary metric (semantic similarity or LLM-as-judge) to catch different failure modes. A JSON extraction prompt might score 100% on pass rate but produce semantically wrong values that only a secondary check detects. Track both metrics independently and alert on either dropping below threshold.' } },
          { '@type': 'Question', name: 'How do you evaluate prompt quality for code generation?', acceptedAnswer: { '@type': 'Answer', text: 'Use test pass rate as the primary metric — generate code, run unit tests against it, and calculate the percentage that pass. This is more reliable than BLEU or semantic similarity because code can be functionally correct with entirely different syntax. Supplement with static analysis scores (linting errors, security findings) for a fuller quality picture.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Choose and Apply Prompt Evaluation Metrics',
        step: [
          { '@type': 'HowToStep', name: 'Identify your output type', text: 'Classify your prompt output as structured data (JSON, CSV), free text (summaries, descriptions), or code. Output type determines which metrics apply.' },
          { '@type': 'HowToStep', name: 'Select the right metric', text: 'Structured outputs: binary pass/fail. Translation/summarization: BLEU or ROUGE. Paraphrase tasks: semantic similarity. Nuanced generation: LLM-as-judge.' },
          { '@type': 'HowToStep', name: 'Establish a baseline', text: 'Run your test set and record the metric value as your baseline before making any prompt changes.' },
          { '@type': 'HowToStep', name: 'Set a regression alert threshold', text: 'Define the minimum acceptable metric value. A drop of more than 5 percentage points in pass rate should block deployment.' },
          { '@type': 'HowToStep', name: 'Run metrics after every prompt change', text: 'Re-run the test set and compare against baseline every time the prompt text, model, or temperature changes.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: 'Key Takeaways',
          items: [
            'Pass rate (correct outputs / total) is the most actionable metric for production prompts with structured outputs',
            'BLEU score measures n-gram overlap and is meaningful only for translation and summarization tasks',
            'Semantic similarity (cosine similarity of embeddings) outperforms BLEU for paraphrase and rewriting tasks',
            'LLM-as-judge uses GPT-5.5 or Claude Opus 4.8 to score nuanced free-text outputs at scale',
            'Track pass rate per prompt version and alert on drops of more than 5 percentage points',
            'No single metric covers all output types - choose based on your prompt\'s intended output format',
          ],
        },
        definition: {
          title: 'What Are Prompt Evaluation Metrics?',
          content: '**Prompt evaluation metrics are quantitative signals that tell you whether a prompt reliably produces the intended output across the inputs that matter.** Without metrics, prompt evaluation is subjective: two engineers reviewing the same prompt against different examples will reach different conclusions.\n\nThe right metric depends on what your prompt is supposed to produce. A JSON extraction prompt needs different metrics than a creative writing prompt. When you choose the right metric for your task, you can [evaluate prompt quality](/prompt-engineering/how-to-evaluate-prompt-quality) systematically. Choosing the wrong metric produces misleading scores that tell you nothing about real production quality.',
          snippets: [
            { type: 'in-one-sentence', text: 'Prompt evaluation metrics are quantitative signals that measure whether a prompt reliably produces the intended output across a representative test set.' },
            { type: 'in-plain-terms', text: 'Think of them as unit tests for AI: you define what "correct" looks like, run the prompt on 20+ examples, and score the pass rate. A 95% score means 5% of real user requests will still fail.' }
          ],
          callouts: [
            { type: 'tip', label: 'Pro Tip', text: 'Start with pass rate before adding complex metrics. Binary correct/incorrect is often more actionable than a 1–5 rubric.' }
          ],
        },
        metricTypes: {
          title: 'What Metrics Apply to Structured Output vs Free Text vs Code?',
          content: '**Output type determines which metric is valid. Using BLEU on JSON outputs or pass/fail on creative generation tasks produces meaningless scores.**',
          columns: ['Output Type', 'Recommended Metric', 'Why'],
          rows: [
            { 'Output Type': 'JSON / structured data', 'Recommended Metric': 'Binary pass/fail', 'Why': 'Either valid + correct or not. No partial credit.' },
            { 'Output Type': 'Classification', 'Recommended Metric': 'Accuracy (binary)', 'Why': 'One correct label per input.' },
            { 'Output Type': 'Translation / summarization', 'Recommended Metric': 'BLEU or ROUGE', 'Why': 'Reference text available for comparison.' },
            { 'Output Type': 'Paraphrase / rewriting', 'Recommended Metric': 'Semantic similarity', 'Why': 'Meaning-preserving, not word-for-word.' },
            { 'Output Type': 'Free text / creative', 'Recommended Metric': 'LLM-as-judge', 'Why': 'Nuanced rubric needed, no reference text.' },
            { 'Output Type': 'Code generation', 'Recommended Metric': 'Test pass rate', 'Why': 'Run unit tests against generated code.' },
          ],
          callouts: [
            { type: 'insight', label: 'Key Point', text: 'Output type drives metric choice. The most common mistake is applying BLEU to non-translation tasks — it measures word overlap, not format compliance.' }
          ],
        },
        passRate: {
          title: 'What Is Pass Rate and Why Is It the Most Useful Metric?',
          content: '**Pass rate is the percentage of test inputs where the prompt output meets the defined success criteria — and it is the most actionable metric because it maps directly to the production failure rate.** A pass rate of 92% means 8% of real user requests will fail.\n\nPass rate = passing outputs / total test cases\n\nFor structured outputs, define "pass" precisely before running tests: valid JSON, required fields present, values within allowed enum, length under the specified limit. For classification, "pass" means the correct label was returned.\n\nTrack pass rate per prompt version. A drop of more than 5 percentage points is a regression. A drop of more than 10 percentage points should block production deployment. As of April 2026, PromptQuorum observes median pass rates of 88–94% for GPT-5.5 JSON extraction prompts on first deployment. When you [build a prompt library](/prompt-engineering/build-a-prompt-library), establish baseline pass rates for each prompt to detect regressions.',
          callouts: [
            { type: 'warning', label: 'Warning', text: 'A pass rate of 90% means 10% of real user requests will fail. Set your regression threshold based on production risk tolerance, not what looks good in a dashboard.' }
          ],
        },
        bleu: {
          title: 'What Is BLEU Score and When Should You Use It?',
          content: '**BLEU (Bilingual Evaluation Understudy) score measures n-gram overlap between a model output and a reference text.** It is the standard metric for machine translation and is appropriate for any task where the output should closely match a reference.\n\nBLEU is misleading for:\n\n- **JSON or structured output:** BLEU scores format tokens, not semantic correctness\n- **Instruction-following:** A prompt that follows all instructions but paraphrases differently will score low on BLEU\n- **Creative generation:** BLEU penalizes lexical variety even when quality is high\n\nWhen BLEU is appropriate: translation tasks where a gold reference exists, summarization against a human-written summary, extractive QA with expected verbatim answers.',
          callouts: [
            { type: 'note', label: 'Did You Know?', text: 'BLEU was designed in 2002 for machine translation. It has known limitations for open-ended generation but remains the standard for MT benchmarks.' }
          ],
        },
        semanticSimilarity: {
          title: 'What Is Semantic Similarity Scoring?',
          content: '**Semantic similarity measures how close two texts are in meaning by computing the cosine similarity of their embeddings.** It outperforms BLEU for paraphrase and rewriting tasks because it captures meaning rather than word choice.\n\nHow it works: embed the model output and the reference using OpenAI text-embedding-3-small or a local embedding model, then compute cosine similarity. Scores above 0.85 typically indicate semantically equivalent content.\n\nLimitations: semantic similarity does not check factual accuracy, does not detect format violations, and can score hallucinated content highly if the hallucination is semantically similar to the expected answer.',
          callouts: [
            { type: 'tip', label: 'Pro Tip', text: 'OpenAI text-embedding-3-small is the fastest and cheapest model for similarity scoring. For technical/code content, consider a code-specific embedding model.' }
          ],
        },
        llmAsJudge: {
          title: 'What Is LLM-as-Judge Evaluation?',
          content: '**LLM-as-judge uses a capable model — typically GPT-5.5 or Claude Opus 4.8 — to score outputs against a rubric.** This scales evaluation to thousands of test cases without human review and handles quality dimensions that binary metrics cannot capture: coherence, tone, completeness, and factual accuracy.\n\nThe judge approach requires:\n\n1. A detailed rubric (scoring criteria per dimension)\n2. A structured output format (e.g., JSON with score + justification)\n3. When you [test prompts across models](/prompt-engineering/how-to-test-prompts-across-models), calibrate the judge against human judgments for your specific task',
          columns: ['Dimension', 'Advantage', 'Limitation'],
          rows: [
            { 'Dimension': 'Scale', 'Advantage': 'Thousands of cases per hour', 'Limitation': 'API cost increases with volume' },
            { 'Dimension': 'Nuance', 'Advantage': 'Handles complex rubrics', 'Limitation': 'Model bias toward own output style' },
            { 'Dimension': 'Consistency', 'Advantage': 'Reproducible scoring', 'Limitation': 'Sensitive to judge prompt wording' },
            { 'Dimension': 'Cost', 'Advantage': 'Cheaper than human review at scale', 'Limitation': 'Expensive for small test sets' },
          ],
          promptExamples: [
            {
              badLabel: 'Vague Rubric',
              bad: 'Rate the quality of this output on a scale of 1 to 5.',
              goodLabel: 'Explicit Multi-Dimensional Rubric',
              good: 'Score this output on 3 dimensions (1–3 each): (1) Factual accuracy — does it match the reference facts? (2) Completeness — are all required fields addressed? (3) Tone — is it appropriately professional? Return JSON: {"accuracy": X, "completeness": X, "tone": X, "total": X, "reason": "..."}'
            }
          ],
          callouts: [
            { type: 'warning', label: 'Warning', text: 'LLM-as-judge has a self-bias: models score outputs similar to their own style higher. Use a different model as judge than the one generating outputs.' }
          ],
        },
        regressionMetrics: {
          title: 'How Do You Detect Metric Regression?',
          content: '**Track your primary metric per prompt version and alert when it drops more than 5 percentage points from the established baseline.** Run the same test set before and after every prompt change, model update, or temperature adjustment.\n\nWhen you implement [prompt audit and regression risk](/prompt-engineering/prompt-audit-and-regression-risk) detection, follow this workflow:\n\n1. Record the current metric score as baseline (e.g., pass rate = 91%)\n2. Make the prompt change\n3. Re-run the full test set\n4. Compare new score against baseline\n5. If drop > 5 points: block the change, investigate, fix\n\nFor automated regression detection in CI/CD, tools like [Promptfoo](https://www.promptfoo.dev) integrate with GitHub Actions and can fail a PR if pass rate drops below a threshold.',
          callouts: [
            { type: 'practice', label: 'Best Practice', text: 'Integrate Promptfoo with GitHub Actions to auto-fail PRs when pass rate drops below threshold. This prevents prompt regressions from reaching production.' }
          ],
        },
        howToStart: {
          title: 'How To Start Measuring Prompt Evaluation Metrics',
          numberedItems: [
            'Identify your prompt output type: structured data, classification, translation/summarization, paraphrase, free text, or code.',
            'Select the appropriate metric: binary pass/fail for structured, BLEU for translation/summarization, semantic similarity for paraphrase, LLM-as-judge for free text, test pass rate for code.',
            'Build a test set of 20+ inputs with expected outputs or pass criteria written before you run any tests.',
            'Run the test set and record your baseline metric score.',
            'Set a regression alert threshold: alert if pass rate drops 5+ points from baseline.',
            'Run the metric automatically on every prompt change using Promptfoo, Braintrust, or PromptQuorum.',
          ],
          callouts: [
            { type: 'insight', label: 'Key Point', text: 'Build your test set before writing the prompt, not after. Test cases defined post-hoc tend to match the current prompt rather than the real input distribution.' }
          ],
        },
        commonMistakes: {
          title: 'What Mistakes Should You Avoid with Prompt Evaluation Metrics?',
          items: [
            '**Mistake: Using BLEU on JSON or instruction-following prompts.** Fix: BLEU measures n-gram overlap, not format compliance or instruction adherence. Use binary pass/fail for structured outputs.',
            '**Mistake: LLM-as-judge with a vague rubric.** Fix: The judge prompt must define each score level explicitly. Vague rubrics like "score quality 1-5" produce inconsistent scores with no diagnostic value.',
            '**Mistake: No baseline before the first change.** Fix: Record the metric value before making any changes. Without a baseline you cannot detect regressions.',
            '**Mistake: Measuring only one metric.** Fix: Production prompts typically need both a primary metric (pass rate or accuracy) and a secondary metric (semantic similarity or LLM-as-judge) to catch different failure modes.',
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality) — Three-component framework: accuracy, consistency, instruction-following rate',
            '[How to Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — Running the same test set on GPT-5.5, Claude, and Gemini',
            '[Prompt Audit and Regression Risk](/prompt-engineering/prompt-audit-and-regression-risk) — Automated regression suites and CI/CD gates',
            '[Braintrust vs Prompthub vs Vellum](/prompt-engineering/braintrust-vs-prompthub-vs-vellum) — Comparing dedicated prompt evaluation platforms for teams',
            '[Best Prompt Testing & Evaluation Tools 2026](/prompt-engineering/best-prompt-testing-tools) — Ranked tools for systematic prompt QA',
            '[How to Build a Prompt Library](/prompt-engineering/build-a-prompt-library) — Versioning and organizing prompts alongside their evaluation baselines',
          ],
        },
        faq: {
          title: 'FAQ',
          faqs: [
            { q: 'What are prompt evaluation metrics?', a: 'Prompt evaluation metrics are quantitative signals that measure whether a prompt produces the intended output reliably. Key metrics include pass rate (binary correct/incorrect), BLEU score (n-gram overlap for translation and summarization), semantic similarity (embedding cosine similarity for paraphrase tasks), and LLM-as-judge (model-scored quality rubric for free text). Choosing the wrong metric for your output type produces misleading scores.' },
            { q: 'What is pass rate in prompt evaluation?', a: 'Pass rate is the percentage of test inputs where the output meets defined success criteria. It maps directly to production failure rate and is the most actionable metric for structured output prompts.' },
            { q: 'When should you use BLEU score for prompts?', a: 'BLEU is appropriate for translation and summarization tasks where output should match a reference text. It is misleading for JSON generation, instruction-following, and creative writing because it measures n-gram word overlap, not format compliance or semantic correctness. For example, a JSON extraction prompt that returns the correct structure but different phrasing will score near zero on BLEU despite being functionally correct.' },
            { q: 'What is LLM-as-judge evaluation?', a: 'LLM-as-judge uses GPT-5.5 or Claude Opus 4.8 to score outputs against a rubric at scale. It handles nuanced quality dimensions that binary metrics miss. The main risk is model bias toward its own output style.' },
            { q: 'How do you detect prompt metric regression?', a: 'Track your primary metric per prompt version and alert when it drops more than 5 percentage points from the established baseline. The workflow is: record baseline metric before any change, make the change, re-run the full test set, compare against baseline. A drop of more than 5 points should block deployment. A drop of more than 10 points is a critical regression requiring investigation before proceeding.' },
            { q: 'Which metric should I use for JSON output prompts?', a: 'Use binary pass/fail for JSON output prompts. Define pass as valid JSON + required fields present + values within allowed range. BLEU and semantic similarity are not meaningful for structured outputs.' },
            { q: 'Can you combine multiple prompt evaluation metrics?', a: 'Yes — production prompts typically need a primary metric (pass rate for structured outputs, accuracy for classification) and a secondary metric (semantic similarity or LLM-as-judge) to catch different failure modes. A JSON extraction prompt might score 100% on pass rate but produce semantically wrong values that only a secondary check detects. Track both metrics independently and alert on either dropping below threshold.' },
            { q: 'How do you evaluate prompt quality for code generation?', a: 'Use test pass rate as the primary metric — generate code, run unit tests against it, and calculate the percentage that pass. This is more reliable than BLEU or semantic similarity because code can be functionally correct with entirely different syntax. Supplement with static analysis scores (linting errors, security findings) for a fuller quality picture.' },
          ],
        },
        regionalConsiderations: {
          title: 'What Regional Factors Affect Prompt Evaluation Requirements?',
          content: '**Regulatory frameworks increasingly require documented AI quality metrics, with specific obligations depending on jurisdiction and risk classification.**\n\n- **EU (AI Act 2025–2026):** High-risk AI systems must demonstrate documented testing with quantitative quality metrics. Prompt evaluation records — test sets, pass rates, regression baselines — provide audit-ready evidence for AI Act transparency requirements.\n\n- **US (SOC 2 / NIST AI RMF):** SOC 2 Type II audits expect documented quality assurance for AI-driven processes. Prompt evaluation metrics with version history satisfy change management and quality control audit requirements.\n\n- **Multilingual evaluation:** When deploying prompts across languages, evaluate each language variant separately. BLEU scores and semantic similarity thresholds differ significantly between language pairs. A prompt scoring 0.92 similarity in English may score 0.78 in German due to syntactic differences.',
        },
        sources: {
          title: 'Sources',
          items: [
            '[Promptfoo Documentation (promptfoo.dev)](https://www.promptfoo.dev) — Open-source prompt evaluation framework with built-in metrics including LLM-as-judge',
            '[Braintrust Evaluation Guide (braintrust.dev)](https://www.braintrust.dev) — Production evaluation platform supporting pass rate, LLM-as-judge, and custom scoring',
            '[Papineni et al., 2002. "BLEU: a Method for Automatic Evaluation of Machine Translation"](https://aclanthology.org/P02-1040.pdf) — Original BLEU paper',
            '[DeepEval: Open-Source LLM Evaluation Framework (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Supports pass rate, hallucination detection, and LLM-as-judge metrics with CI/CD integration.',
            '[The Prompt Report: A Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Comprehensive survey including evaluation methodology and metric selection for prompt engineering.',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Prompt-Evaluierungsmetriken: Welche Metriken gelten für welche Ausgaben?',
      seoTitle: 'Prompt-Metriken: Pass Rate, BLEU & LLM-as-Judge (2026)',
      metaDescription: 'Welche Prompt-Metriken für welchen Output-Typ: Pass Rate für JSON, BLEU für Übersetzung, Semantic Similarity für Paraphrase, LLM-as-Judge für Freitext.',
      ogDescription: 'Die richtige Prompt-Metrik nach Output-Typ wählen. Pass Rate, BLEU, Semantic Similarity und LLM-as-Judge im Vergleich — mit Regressions-Erkennung.',
      twitterDescription: 'Pass Rate, BLEU oder LLM-as-Judge? Die richtige Prompt-Metrik nach Output-Typ wählen. Framework mit Regressions-Alerts.',
      intro: 'Die Auswahl der falschen Evaluierungsmetrik für Ihren Prompt führt zu irreführenden Ergebnissen, die echte Produktionsfehler verbergen. BLEU-Scores sind bedeutungslos für JSON-Ausgaben. Binäres Bestehen/Durchfallen sagt nichts über nuancierte Generierungsqualität aus. Die Metrik, die funktioniert, hängt völlig davon ab, was Ihr Prompt produziert.',
      publishDate: '2026-04-10',
      dateModified: '2026-04-10',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      audience: 'Entwickler und Teams, die LLMs in der Produktion einsetzen',
      primaryTerm: 'Prompt-Evaluierungsmetriken',
      aboutTopics: ['Pass Rate', 'BLEU-Score', 'LLM-as-Judge'],
      next_refresh_due: '2026-10-10',
      leadAnswerBlock: '**Prompt-Evaluierungsmetriken sind quantitative Signale, die messen, ob ein Prompt zuverlässig die beabsichtigte Ausgabe produziert.** Die richtige Metrik hängt von Ihrem Ausgabetyp ab: Pass Rate für strukturierte Daten, BLEU für Übersetzungen, semantische Ähnlichkeit für Paraphrasenaufgaben und LLM-as-Judge für nuancierte Freitextgenerierung.',
      quickFacts: [
        'Pass Rate bildet sich direkt auf Produktionsfehlerquote ab: 90% = 10% der Anfragen schlagen fehl',
        'BLEU-Score wurde 2002 für maschinelle Übersetzung entworfen, nicht für allgemeine KI-Ausgaben',
        'Semantische Ähnlichkeit über 0,85 deutet typischerweise auf semantisch gleichwertige Inhalte hin',
        'LLM-as-Judge skaliert auf Tausende von Evaluierungen pro Stunde',
        'Ein Rückgang um 5 Punkte in der Pass Rate ist der Standard-Regressionsschwellenwert',
        'GPT-5.5 und Claude-Modelle können bei gleichem Prompt-Testsatz um 10–20 Punkte unterscheiden',
      ],
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Was sind Prompt-Evaluierungsmetriken?', anchor: '#definition' },
        { label: 'Metriken nach Ausgabetyp', anchor: '#metric-types' },
        { label: 'Pass Rate: Die nützlichste Metrik', anchor: '#pass-rate' },
        { label: 'BLEU-Score: Wann man ihn einsetzt', anchor: '#bleu' },
        { label: 'Semantische Ähnlichkeitsbewertung', anchor: '#semantic-similarity' },
        { label: 'LLM-as-Judge-Evaluierung', anchor: '#llm-as-judge' },
        { label: 'Metrikregressionen erkennen', anchor: '#regression-metrics' },
        { label: 'Wie startet man', anchor: '#how-to-start' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Regionale Faktoren', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Prompt-Evaluierungsmetriken: Welche Metriken gelten für welche Ausgaben?',
        description: 'Prompt-Evaluierungsmetriken umfassen Pass Rate, BLEU-Score, semantische Ähnlichkeit und LLM-as-Judge-Bewertung.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-10',
        url: 'https://www.promptquorum.com/de/prompt-engineering/prompt-evaluation-metrics',
        inLanguage: 'de',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Pass Rate' },
          { '@type': 'Thing', name: 'BLEU-Score' },
          { '@type': 'Thing', name: 'LLM-as-Judge' },
          { '@type': 'Thing', name: 'Semantische Ähnlichkeit' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        audience: { '@type': 'Audience', audienceType: 'Entwickler und Teams, die LLMs in der Produktion einsetzen' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          { '@type': 'Question', name: 'Was sind Prompt-Evaluierungsmetriken?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt-Evaluierungsmetriken sind quantitative Signale, die messen, ob ein Prompt die beabsichtigte Ausgabe zuverlässig produziert. Wichtige Metriken sind Pass Rate (binär richtig/falsch), BLEU-Score (n-Gramm-Überlap für Übersetzungen und Zusammenfassungen), semantische Ähnlichkeit (Cosinus-Ähnlichkeit von Embeddings für Paraphrasenaufgaben) und LLM-as-Judge (modellgestützte Qualitätsbewertung für Freitext). Die Auswahl der falschen Metrik für Ihren Ausgabetyp führt zu irreführenden Scores.' } },
          { '@type': 'Question', name: 'Was ist Pass Rate in der Prompt-Evaluierung?', acceptedAnswer: { '@type': 'Answer', text: 'Pass Rate ist der Prozentsatz der Testeingaben, bei denen die Prompt-Ausgabe die definierten Erfolgskriterien erfüllt. Pass Rate = bestandene Ausgaben / Gesamtfall-Tests. Sie ist die aussagekräftigste Metrik für strukturierte Ausgaben, da sie sich direkt auf die Produktionsfehlerquote abbildet.' } },
          { '@type': 'Question', name: 'Wann sollte man BLEU-Score für Prompts verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'BLEU eignet sich für Übersetzungs- und Zusammenfassungsaufgaben, bei denen die Ausgabe stark mit einem Referenztext übereinstimmen sollte. Es ist irreführend für JSON-Generierung, Befolgung von Anweisungen und kreatives Schreiben, da es n-Gramm-Wort-Überlap misst, nicht Format-Einhaltung oder semantische Korrektheit. Beispielsweise wird ein JSON-Extraktions-Prompt, der die richtige Struktur zurückgibt, aber mit anderer Formulierung, fast null auf BLEU bewert, obwohl er funktionell korrekt ist.' } },
          { '@type': 'Question', name: 'Was ist LLM-as-Judge-Evaluierung?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-Judge nutzt ein leistungsstarkes Modell wie GPT-5.5 oder Claude Opus 4,7 zur Bewertung von Ausgaben gegen ein Bewertungsschema. Es skaliert auf Tausende von Testfällen ohne menschliche Überprüfung und behandelt Qualitätsdimensionen, die binäre Metriken nicht erfassen. Das Hauptrisiko ist Model Bias: Der Judge könnte Ausgaben begünstigen, die seinem eigenen Stil ähneln.' } },
          { '@type': 'Question', name: 'Wie erkennt man Metrik-Regression bei Prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Verfolgen Sie Ihre primäre Metrik pro Prompt-Version und alarmieren Sie, wenn sie mehr als 5 Prozentpunkte unter dem etablierten Baseline fällt. Der Workflow ist: Baseline-Metrik vor Änderung aufzeichnen, Änderung durchführen, vollständigen Testsatz erneut ausführen, gegen Baseline vergleichen. Ein Rückgang von mehr als 5 Punkten sollte die Bereitstellung blockieren. Ein Rückgang von mehr als 10 Punkten ist eine kritische Regression, die Untersuchung vor dem Fortschritt erfordert.' } },
          { '@type': 'Question', name: 'Welche Metrik sollte ich für JSON-Ausgabe-Prompts verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Verwenden Sie binäres Bestehen/Durchfallen für JSON-Ausgabe-Prompts. Definieren Sie Bestehen als: gültiges JSON + erforderliche Felder vorhanden + Werte im zulässigen Bereich. BLEU und semantische Ähnlichkeit sind für strukturierte Ausgaben nicht aussagekräftig.' } },
          { '@type': 'Question', name: 'Kann man mehrere Prompt-Evaluierungsmetriken kombinieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Produktions-Prompts benötigen typischerweise eine Primär-Metrik (Pass Rate für strukturierte Ausgaben, Genauigkeit für Klassifizierung) und eine Sekundär-Metrik (semantische Ähnlichkeit oder LLM-as-Judge), um unterschiedliche Fehlermodi zu erfassen. Ein JSON-Extraktions-Prompt könnte 100% auf Pass Rate erreichen, aber semantisch falsche Werte produzieren, die nur eine Sekundärprüfung erkennt. Verfolgen Sie beide Metriken unabhängig und alarmieren Sie, wenn eine unter den Schwellenwert fällt.' } },
          { '@type': 'Question', name: 'Wie evaluiert man die Prompt-Qualität für Code-Generierung?', acceptedAnswer: { '@type': 'Answer', text: 'Nutzen Sie Test-Pass-Rate als Primärmetrik — generieren Sie Code, führen Sie Unit-Tests dagegen aus und berechnen Sie den Prozentsatz, der besteht. Dies ist zuverlässiger als BLEU oder semantische Ähnlichkeit, da Code funktionell korrekt mit völlig anderer Syntax sein kann. Ergänzen Sie mit Analyse-Scores (Linting-Fehler, Sicherheitserkennisse) für ein vollständigeres Qualitätsbild.' } },
          { '@type': 'Question', name: 'Muss ich bei der Verwendung von Prompt-Evaluierungsmetriken die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die DSGVO Artikel 5 und 35 verlangen die Dokumentation von KI-Systemqualität. Prompt-Evaluierungsmetriken und Testsätze müssen als Verarbeitungsaufzeichnungen protokolliert werden. Für DACH-Compliance: Lokale Evaluierung (ohne Drittanbieter-API) erfüllt Datenresidenz-Anforderungen. Die BSI-Grundschutz-Kataloge für KI-Qualitätsdokumentation empfehlen die Verfolgung von Pass Rates und Regressionsschwellenwerten als Audit-Trail-Nachweis.' } },
          { '@type': 'Question', name: 'Welche Prompt-Evaluierungsmetriken eignen sich für den deutschen Mittelstand?', acceptedAnswer: { '@type': 'Answer', text: 'Pass Rate für Dokumentverarbeitung (z.B. Rechnungsextraktion), LLM-as-Judge für Kundenservice-Qualität. Integration mit bestehenden Qualitätsmanagementsystemen (QM) gemäß DIN EN ISO 9001. CI/CD-Regressions-Gates bieten Audit-Trail-Nachweise. Beispiel: Ein Mittelständler im Finanzsektor verwendet Pass Rate 95% als Schwellenwert für Kreditleer-Dokumente und alarmiert bei 5-Punkt-Rückgang, um regulatorische QM-Anforderungen zu erfüllen.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'de',
        name: 'Wie man Prompt-Evaluierungsmetriken auswählt und anwendet',
        step: [
          { '@type': 'HowToStep', name: 'Identifizieren Sie Ihren Ausgabetyp', text: 'Klassifizieren Sie Ihre Prompt-Ausgabe als strukturierte Daten (JSON, CSV), Freitext (Zusammenfassungen, Beschreibungen) oder Code. Der Ausgabetyp bestimmt, welche Metriken gelten.' },
          { '@type': 'HowToStep', name: 'Wählen Sie die richtige Metrik', text: 'Strukturierte Ausgaben: binäres Bestehen/Durchfallen. Übersetzung/Zusammenfassung: BLEU oder ROUGE. Paraphrase-Aufgaben: semantische Ähnlichkeit. Nuancierte Generierung: LLM-as-Judge.' },
          { '@type': 'HowToStep', name: 'Etablieren Sie eine Baseline', text: 'Führen Sie Ihren Testsatz aus und zeichnen Sie den Metrik-Wert als Baseline auf, bevor Sie Prompt-Änderungen vornehmen.' },
          { '@type': 'HowToStep', name: 'Legen Sie einen Regressions-Alarm-Schwellenwert fest', text: 'Definieren Sie den minimal zulässigen Metrik-Wert. Ein Rückgang von mehr als 5 Prozentpunkten in der Pass Rate sollte die Bereitstellung blockieren.' },
          { '@type': 'HowToStep', name: 'Führen Sie Metriken nach jeder Prompt-Änderung aus', text: 'Führen Sie den Testsatz erneut aus und vergleichen Sie die Baseline jedes Mal, wenn der Prompt-Text, das Modell oder die Temperatur sich ändert.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: 'Wichtigste Erkenntnisse',
          items: [
            'Pass Rate (richtige Ausgaben / Gesamtzahl) ist die aussagekräftigste Metrik für Produktions-Prompts mit strukturierten Ausgaben',
            'BLEU-Score misst n-Gramm-Überlap und ist nur für Übersetzungs- und Zusammenfassungsaufgaben aussagekräftig',
            'Semantische Ähnlichkeit (Cosinus-Ähnlichkeit von Embeddings) übertrifft BLEU bei Paraphrase- und Umschreibungsaufgaben',
            'LLM-as-Judge nutzt GPT-5.5 oder Claude Opus 4,7 zur Bewertung nuancierter Freitextausgaben in großem Maßstab',
            'Verfolgen Sie Pass Rate pro Prompt-Version und alarmieren Sie bei Rückgängen von mehr als 5 Prozentpunkten',
            'Keine einzelne Metrik deckt alle Ausgabetypen ab — wählen Sie basierend auf Ihrem beabsichtigten Ausgabeformat',
          ],
        },
        definition: {
          title: 'Was sind Prompt-Evaluierungsmetriken?',
          content: '**Prompt-Evaluierungsmetriken sind quantitative Signale, die Ihnen sagen, ob ein Prompt zuverlässig die beabsichtigte Ausgabe über die Eingaben hinweg produziert, die wichtig sind.** Ohne Metriken ist die Prompt-Evaluierung subjektiv: zwei Ingenieure, die denselben Prompt gegen verschiedene Beispiele überprüfen, werden zu unterschiedlichen Schlussfolgerungen gelangen.\n\nDie richtige Metrik hängt davon ab, was Ihr Prompt produzieren soll. Ein JSON-Extraktions-Prompt benötigt andere Metriken als ein Kreativschreib-Prompt. Wenn Sie die richtige Metrik für Ihre Aufgabe wählen, können Sie [die Prompt-Qualität systematisch evaluieren](/de/prompt-engineering/how-to-evaluate-prompt-quality). Die Auswahl der falschen Metrik führt zu irreführenden Scores, die Sie nichts über echte Produktionsqualität sagen.',
          snippets: [
            { type: 'in-one-sentence', text: 'Prompt-Evaluierungsmetriken sind quantitative Signale, die messen, ob ein Prompt die beabsichtigte Ausgabe über einen repräsentativen Testsatz zuverlässig produziert.' },
            { type: 'in-plain-terms', text: 'Denken Sie an sie als Unit-Tests für KI: Sie definieren, wie „richtig" aussieht, führen den Prompt auf 20+ Beispielen aus und bewerten die Pass Rate. Ein Score von 95% bedeutet, dass 5% der echten Benutzeranfragen noch fehlschlagen.' }
          ],
          callouts: [
            { type: 'tip', label: 'Profi-Tipp', text: 'Beginnen Sie mit Pass Rate, bevor Sie komplexe Metriken hinzufügen. Binär richtig/falsch ist oft aussagekräftiger als eine 1–5-Bewertung.' }
          ],
        },
        metricTypes: {
          title: 'Welche Metriken gelten für strukturierte Ausgaben, Freitext und Code?',
          content: '**Der Ausgabetyp bestimmt, welche Metrik gültig ist. Die Verwendung von BLEU auf JSON-Ausgaben oder Bestehen/Durchfallen auf kreativer Generierung führt zu bedeutungslosen Scores.**',
          columns: ['Ausgabetyp', 'Empfohlene Metrik', 'Warum'],
          rows: [
            { 'Ausgabetyp': 'JSON / strukturierte Daten', 'Empfohlene Metrik': 'Binäres Bestehen/Durchfallen', 'Warum': 'Entweder gültig + richtig oder nicht. Keine Teilpunkte.' },
            { 'Ausgabetyp': 'Klassifizierung', 'Empfohlene Metrik': 'Genauigkeit (binär)', 'Warum': 'Ein richtige Etikette pro Eingabe.' },
            { 'Ausgabetyp': 'Übersetzung / Zusammenfassung', 'Empfohlene Metrik': 'BLEU oder ROUGE', 'Warum': 'Referenztext verfügbar für Vergleich.' },
            { 'Ausgabetyp': 'Paraphrase / Umschreibung', 'Empfohlene Metrik': 'Semantische Ähnlichkeit', 'Warum': 'Sinnbewahrend, nicht wortwörtlich.' },
            { 'Ausgabetyp': 'Freitext / Kreativ', 'Empfohlene Metrik': 'LLM-as-Judge', 'Warum': 'Nuanciertes Bewertungsschema nötig, kein Referenztext.' },
            { 'Ausgabetyp': 'Code-Generierung', 'Empfohlene Metrik': 'Test-Pass-Rate', 'Warum': 'Unit-Tests gegen generierten Code ausführen.' },
          ],
          callouts: [
            { type: 'insight', label: 'Wichtiger Punkt', text: 'Der Ausgabetyp bestimmt die Metrik-Wahl. Der häufigste Fehler ist die Anwendung von BLEU auf nicht-Übersetzungs-Aufgaben — es misst Wort-Überlap, nicht Format-Einhaltung.' }
          ],
        },
        passRate: {
          title: 'Was ist Pass Rate und warum ist sie die nützlichste Metrik?',
          content: '**Pass Rate ist der Prozentsatz der Testeingaben, bei denen die Prompt-Ausgabe die definierten Erfolgskriterien erfüllt — und sie ist die aussagekräftigste Metrik, da sie sich direkt auf die Produktionsfehlerquote abbildet.** Eine Pass Rate von 92% bedeutet, dass 8% der echten Benutzeranfragen fehlschlagen.\n\nPass Rate = bestandene Ausgaben / Gesamtzahl Testfälle\n\nFür strukturierte Ausgaben definieren Sie „Bestehen" präzise vor Testbeginn: gültiges JSON, erforderliche Felder vorhanden, Werte innerhalb zulässiger Enumerationen, Länge unter angegebenem Limit. Für Klassifizierung bedeutet „Bestehen" die richtige Etikette wurde zurückgegeben.\n\nVerfolgen Sie Pass Rate pro Prompt-Version. Ein Rückgang von mehr als 5 Prozentpunkten ist eine Regression. Ein Rückgang von mehr als 10 Prozentpunkten sollte die Produktionsbereitstellung blockieren. Ab April 2026 beobachtet PromptQuorum Median-Pass-Rates von 88–94% für GPT-5.5 JSON-Extraktions-Prompts bei erster Bereitstellung. Wenn Sie [eine Prompt-Bibliothek aufbauen](/de/prompt-engineering/build-a-prompt-library), etablieren Sie Baseline-Pass-Rates für jeden Prompt zur Regressionserkennung.',
          callouts: [
            { type: 'warning', label: 'Warnung', text: 'Eine Pass Rate von 90% bedeutet, dass 10% der echten Benutzeranfragen fehlschlagen. Legen Sie Ihren Regressions-Schwellenwert basierend auf Produktionsrisiko-Toleranz fest, nicht darauf, was im Dashboard gut aussieht.' }
          ],
        },
        bleu: {
          title: 'Was ist BLEU-Score und wann sollte man ihn verwenden?',
          content: '**BLEU (Bilingual Evaluation Understudy) Score misst n-Gramm-Überlap zwischen einer Modellausgabe und einem Referenztext.** Er ist die Standard-Metrik für maschinelle Übersetzung und geeignet für jede Aufgabe, bei der die Ausgabe stark mit einer Referenz übereinstimmen sollte.\n\nBLEU ist irreführend für:\n\n- **JSON oder strukturierte Ausgabe:** BLEU bewertet Format-Tokens, nicht semantische Korrektheit\n- **Befolgung von Anweisungen:** Ein Prompt, der alle Anweisungen befolgt, aber anders umschreibt, wird auf BLEU niedrig bewertet\n- **Kreative Generierung:** BLEU benachteiligt lexikalische Vielfalt, auch wenn die Qualität hoch ist\n\nWann BLEU geeignet ist: Übersetzungsaufgaben, wenn eine Gold-Referenz existiert, Zusammenfassung gegen eine von Menschen geschriebene Zusammenfassung, extraktive QA mit erwarteten verbatim-Antworten.',
          callouts: [
            { type: 'note', label: 'Wussten Sie?', text: 'BLEU wurde 2002 für maschinelle Übersetzung entworfen. Es hat bekannte Einschränkungen für offene Generierung, bleibt aber der Standard für MT-Benchmarks.' }
          ],
        },
        semanticSimilarity: {
          title: 'Was ist semantische Ähnlichkeitsbewertung?',
          content: '**Semantische Ähnlichkeit misst, wie nahe sich zwei Texte in der Bedeutung sind, durch Berechnung der Cosinus-Ähnlichkeit ihrer Embeddings.** Sie übertrifft BLEU für Paraphrase- und Umschreibungsaufgaben, da sie Bedeutung statt Wortauswahl erfasst.\n\nWie es funktioniert: Embedden Sie die Modellausgabe und die Referenz mit OpenAI text-embedding-3-small oder einem lokalen Embedding-Modell, dann berechnen Sie Cosinus-Ähnlichkeit. Scores über 0,85 deuten typischerweise auf semantisch gleichwertige Inhalte hin.\n\nEinschränkungen: Semantische Ähnlichkeit überprüft keine faktische Genauigkeit, erkennt Format-Verstöße nicht und kann halluzinierte Inhalte hoch bewerten, wenn die Halluzination semantisch ähnlich zur erwarteten Antwort ist.',
          callouts: [
            { type: 'tip', label: 'Profi-Tipp', text: 'OpenAI text-embedding-3-small ist das schnellste und kostengünstigste Modell für Ähnlichkeits-Scoring. Für technische/Code-Inhalte sollten Sie ein Code-spezifisches Embedding-Modell in Betracht ziehen.' }
          ],
        },
        llmAsJudge: {
          title: 'Was ist LLM-as-Judge-Evaluierung?',
          content: '**LLM-as-Judge nutzt ein leistungsstarkes Modell — typischerweise GPT-5.5 oder Claude Opus 4,7 — zur Bewertung von Ausgaben gegen ein Bewertungsschema.** Dies skaliert die Evaluierung auf Tausende von Testfällen ohne menschliche Überprüfung und behandelt Qualitätsdimensionen, die binäre Metriken nicht erfassen: Kohärenz, Ton, Vollständigkeit und faktische Genauigkeit.\n\nDer Judge-Ansatz erfordert:\n\n1. Ein detailliertes Bewertungsschema (Kriterien pro Dimension)\n2. Ein strukturiertes Ausgabeformat (z.B. JSON mit Score + Begründung)\n3. Wenn Sie [Prompts über Modelle hinweg testen](/de/prompt-engineering/how-to-test-prompts-across-models), kalibrieren Sie den Judge gegen menschliche Urteile für Ihre spezifische Aufgabe',
          columns: ['Dimension', 'Vorteil', 'Einschränkung'],
          rows: [
            { 'Dimension': 'Skalierung', 'Vorteil': 'Tausende Fälle pro Stunde', 'Einschränkung': 'API-Kosten steigen mit Volumen' },
            { 'Dimension': 'Nuance', 'Vorteil': 'Behandelt komplexe Bewertungsschemata', 'Einschränkung': 'Model Bias zu eigenem Output-Stil' },
            { 'Dimension': 'Konsistenz', 'Vorteil': 'Reproduzierbare Bewertung', 'Einschränkung': 'Empfindlich auf Judge-Prompt-Wording' },
            { 'Dimension': 'Kosten', 'Vorteil': 'Günstiger als Menschenprüfung in großem Maßstab', 'Einschränkung': 'Teuer für kleine Testsätze' },
          ],
          promptExamples: [
            {
              badLabel: 'Vages Bewertungsschema',
              bad: 'Bewerten Sie die Qualität dieser Ausgabe auf einer Skala von 1 bis 5.',
              goodLabel: 'Explizites mehrdimensionales Bewertungsschema',
              good: 'Bewerten Sie diese Ausgabe auf 3 Dimensionen (je 1–3): (1) Faktische Genauigkeit — stimmt sie mit den Referenzfakten überein? (2) Vollständigkeit — werden alle erforderlichen Felder angesprochen? (3) Ton — ist es angemessen professionell? JSON zurückgeben: {"accuracy": X, "completeness": X, "tone": X, "total": X, "reason": "..."}'
            }
          ],
          callouts: [
            { type: 'warning', label: 'Warnung', text: 'LLM-as-Judge hat Self-Bias: Modelle bewerten Ausgaben ähnlich ihrem eigenen Stil höher. Verwenden Sie ein anderes Modell als Judge als das, das Outputs generiert.' }
          ],
        },
        regressionMetrics: {
          title: 'Wie erkennt man Metrikregressionen?',
          content: '**Verfolgen Sie Ihre primäre Metrik pro Prompt-Version und alarmieren Sie, wenn sie mehr als 5 Prozentpunkte unter der etablierten Baseline fällt.** Führen Sie denselben Testsatz vor und nach jeder Prompt-Änderung, Model-Update oder Temperatur-Anpassung aus.\n\nWenn Sie [Prompt-Audit und Regressions-Risiko](/de/prompt-engineering/prompt-audit-and-regression-risk) Erkennung implementieren, befolgen Sie diesen Workflow:\n\n1. Zeichnen Sie den aktuellen Metrik-Score als Baseline auf (z.B. Pass Rate = 91%)\n2. Führen Sie die Prompt-Änderung durch\n3. Führen Sie den vollständigen Testsatz erneut aus\n4. Vergleichen Sie neuen Score gegen Baseline\n5. Wenn Rückgang > 5 Punkte: Blockieren, untersuchen, beheben\n\nFür automatisierte Regressionserkennung in CI/CD: Tools wie [Promptfoo](https://www.promptfoo.dev) integrieren mit GitHub Actions und können einen PR fehlschlagen lassen, wenn Pass Rate unter Schwellenwert fällt.',
          callouts: [
            { type: 'practice', label: 'Best Practice', text: 'Integrieren Sie Promptfoo mit GitHub Actions, um PRs automatisch fehlschlagen zu lassen, wenn Pass Rate unter Schwellenwert fällt. Dies verhindert Prompt-Regressionen in der Produktion.' }
          ],
        },
        howToStart: {
          title: 'Wie startet man mit Prompt-Evaluierungsmetriken?',
          numberedItems: [
            'Identifizieren Sie Ihren Prompt-Ausgabetyp: strukturierte Daten, Klassifizierung, Übersetzung/Zusammenfassung, Paraphrase, Freitext oder Code.',
            'Wählen Sie die geeignete Metrik: Binäres Bestehen/Durchfallen für strukturiert, BLEU für Übersetzung/Zusammenfassung, semantische Ähnlichkeit für Paraphrase, LLM-as-Judge für Freitext, Test-Pass-Rate für Code.',
            'Erstellen Sie einen Testsatz aus 20+ Eingaben mit erwarteten Ausgaben oder vor Testlauf geschriebenen Erfolgskriterien.',
            'Führen Sie den Testsatz aus und zeichnen Sie Ihren Baseline-Metrik-Score auf.',
            'Legen Sie einen Regressions-Alarm-Schwellenwert fest: Alarmieren Sie, wenn Pass Rate 5+ Punkte von Baseline abweicht.',
            'Führen Sie die Metrik automatisch bei jeder Prompt-Änderung mit Promptfoo, Braintrust oder PromptQuorum aus.',
          ],
          callouts: [
            { type: 'insight', label: 'Wichtiger Punkt', text: 'Erstellen Sie Ihren Testsatz vor dem Prompt-Schreiben, nicht danach. Post-hoc definierte Testfälle stimmen tendenziell mit dem aktuellen Prompt überein, statt der echten Input-Verteilung zu entsprechen.' }
          ],
        },
        commonMistakes: {
          title: 'Welche Fehler sollte man bei Prompt-Evaluierungsmetriken vermeiden?',
          items: [
            '**Fehler: BLEU auf JSON oder Befolgung von Anweisungen verwenden.** Behebung: BLEU misst n-Gramm-Überlap, nicht Format-Einhaltung oder Befolgung. Verwenden Sie binäres Bestehen/Durchfallen für strukturierte Ausgaben.',
            '**Fehler: LLM-as-Judge mit vagem Bewertungsschema.** Behebung: Der Judge-Prompt muss jede Bewertungsstufe explizit definieren. Vage Schemata wie „Qualität 1–5 bewerten" führen zu inkonsistenten Scores ohne diagnostischen Wert.',
            '**Fehler: Keine Baseline vor der ersten Änderung.** Behebung: Zeichnen Sie den Metrik-Wert auf, bevor Sie Änderungen vornehmen. Ohne Baseline können Sie keine Regressionen erkennen.',
            '**Fehler: Nur eine Metrik messen.** Behebung: Produktions-Prompts benötigen typischerweise eine Primär-Metrik (Pass Rate oder Genauigkeit) und eine Sekundär-Metrik (semantische Ähnlichkeit oder LLM-as-Judge) um unterschiedliche Fehlermodi zu erfassen.',
          ],
        },
        relatedReading: {
          title: 'Weiterführende Literatur',
          items: [
            '[Wie man Prompt-Qualität evaluiert](/de/prompt-engineering/how-to-evaluate-prompt-quality) — Drei-Komponenten-Framework: Genauigkeit, Konsistenz, Befolgungsrate',
            '[Prompts über Modelle hinweg testen](/de/prompt-engineering/how-to-test-prompts-across-models) — Denselben Testsatz auf GPT-5.5, Claude und Gemini ausführen',
            '[Prompt-Audit und Regressions-Risiko](/de/prompt-engineering/prompt-audit-and-regression-risk) — Automatisierte Regressionssuits und CI/CD-Gates',
            '[Braintrust vs Prompthub vs Vellum](/de/prompt-engineering/braintrust-vs-prompthub-vs-vellum) — Vergleich dedizierter Prompt-Evaluierungs-Plattformen für Teams',
            '[Best Prompt Testing & Evaluation Tools 2026](/de/prompt-engineering/best-prompt-testing-tools) — Bewertete Tools für systematische Prompt-QA',
            '[Wie man eine Prompt-Bibliothek aufbaut](/de/prompt-engineering/build-a-prompt-library) — Versionierung und Organisation von Prompts neben ihren Evaluierungs-Baselines',
          ],
        },
        faq: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was sind Prompt-Evaluierungsmetriken?', a: 'Prompt-Evaluierungsmetriken sind quantitative Signale, die messen, ob ein Prompt die beabsichtigte Ausgabe zuverlässig produziert. Wichtige Metriken sind Pass Rate (binär richtig/falsch), BLEU-Score (n-Gramm-Überlap für Übersetzungen und Zusammenfassungen), semantische Ähnlichkeit (Cosinus-Ähnlichkeit von Embeddings für Paraphrasenaufgaben) und LLM-as-Judge (modellgestützte Qualitätsbewertung für Freitext). Die Auswahl der falschen Metrik für Ihren Ausgabetyp führt zu irreführenden Scores.' },
            { q: 'Was ist Pass Rate in der Prompt-Evaluierung?', a: 'Pass Rate ist der Prozentsatz der Testeingaben, bei denen die Ausgabe die definierten Erfolgskriterien erfüllt. Sie bildet sich direkt auf Produktionsfehlerquote ab und ist die aussagekräftigste Metrik für strukturierte Ausgabe-Prompts.' },
            { q: 'Wann sollte man BLEU-Score für Prompts verwenden?', a: 'BLEU eignet sich für Übersetzungs- und Zusammenfassungsaufgaben, bei denen die Ausgabe stark mit einem Referenztext übereinstimmen sollte. Es ist irreführend für JSON-Generierung, Befolgung von Anweisungen und kreatives Schreiben, da es n-Gramm-Wort-Überlap misst, nicht Format-Einhaltung oder semantische Korrektheit. Beispielsweise wird ein JSON-Extraktions-Prompt, der die richtige Struktur zurückgibt, aber mit anderer Formulierung, fast null auf BLEU bewertet, obwohl er funktionell korrekt ist.' },
            { q: 'Was ist LLM-as-Judge-Evaluierung?', a: 'LLM-as-Judge nutzt GPT-5.5 oder Claude Opus 4,7 zur Bewertung von Ausgaben gegen ein Bewertungsschema in großem Maßstab. Es behandelt nuancierte Qualitätsdimensionen, die binäre Metriken nicht erfassen. Das Hauptrisiko ist Model Bias zu eigenem Output-Stil.' },
            { q: 'Wie erkennt man Metrik-Regression bei Prompts?', a: 'Verfolgen Sie Ihre primäre Metrik pro Prompt-Version und alarmieren Sie, wenn sie mehr als 5 Prozentpunkte unter der Baseline fällt. Der Workflow ist: Baseline-Metrik vor Änderung aufzeichnen, Änderung durchführen, vollständigen Testsatz erneut ausführen, gegen Baseline vergleichen. Ein Rückgang von mehr als 5 Punkten sollte die Bereitstellung blockieren. Ein Rückgang von mehr als 10 Punkten ist eine kritische Regression, die Untersuchung vor dem Fortschritt erfordert.' },
            { q: 'Welche Metrik sollte ich für JSON-Ausgabe-Prompts verwenden?', a: 'Verwenden Sie binäres Bestehen/Durchfallen für JSON-Ausgabe-Prompts. Definieren Sie Bestehen als gültiges JSON + erforderliche Felder vorhanden + Werte im zulässigen Bereich. BLEU und semantische Ähnlichkeit sind für strukturierte Ausgaben nicht aussagekräftig.' },
            { q: 'Kann man mehrere Prompt-Evaluierungsmetriken kombinieren?', a: 'Ja — Produktions-Prompts benötigen typischerweise eine Primär-Metrik (Pass Rate für strukturierte Ausgaben, Genauigkeit für Klassifizierung) und eine Sekundär-Metrik (semantische Ähnlichkeit oder LLM-as-Judge) um unterschiedliche Fehlermodi zu erfassen. Ein JSON-Extraktions-Prompt könnte 100% auf Pass Rate erreichen, aber semantisch falsche Werte produzieren, die nur eine Sekundärprüfung erkennt. Verfolgen Sie beide Metriken unabhängig und alarmieren Sie, wenn eine unter Schwellenwert fällt.' },
            { q: 'Wie evaluiert man die Prompt-Qualität für Code-Generierung?', a: 'Nutzen Sie Test-Pass-Rate als Primärmetrik — generieren Sie Code, führen Sie Unit-Tests dagegen aus und berechnen Sie den Prozentsatz, der besteht. Dies ist zuverlässiger als BLEU oder semantische Ähnlichkeit, da Code funktionell korrekt mit völlig anderer Syntax sein kann. Ergänzen Sie mit Analyse-Scores (Linting-Fehler, Sicherheitserkennisse) für vollständigeres Qualitätsbild.' },
            { q: 'Muss ich bei der Verwendung von Prompt-Evaluierungsmetriken die DSGVO beachten?', a: 'Ja. DSGVO Artikel 5 und 35 verlangen Dokumentation von KI-Systemqualität. Prompt-Evaluierungsmetriken und Testsätze müssen als Verarbeitungsaufzeichnungen protokolliert werden. Für DACH-Compliance: Lokale Evaluierung (ohne Drittanbieter-API) erfüllt Datenresidenz-Anforderungen. BSI-Grundschutz-Kataloge für KI-Qualitätsdokumentation empfehlen Pass Rate und Regressionsschwellenwert-Verfolgung als Audit-Trail-Nachweis.' },
            { q: 'Welche Prompt-Evaluierungsmetriken eignen sich für den deutschen Mittelstand?', a: 'Pass Rate für Dokumentverarbeitung (z.B. Rechnungsextraktion), LLM-as-Judge für Kundenservice-Qualität. Integration mit bestehenden QM-Systemen gemäß DIN EN ISO 9001. CI/CD-Regressions-Gates bieten Audit-Trail-Nachweise. Beispiel: Ein Mittelständler im Finanzsektor verwendet Pass Rate 95% als Schwellenwert für Kreditleer-Dokumente und alarmiert bei 5-Punkt-Rückgang, um QM-Anforderungen zu erfüllen.' },
          ],
        },
        regionalConsiderations: {
          title: 'Welche regionalen Faktoren beeinflussen Prompt-Evaluierungsanforderungen?',
          content: '**Regulatorische Rahmen verlangen zunehmend dokumentierte KI-Qualitätsmetriken, mit spezifischen Anforderungen je nach Jurisdiktion und Risikoklassifizierung.**\n\n- **EU (AI Act 2025–2026):** Hochrisiko-KI-Systeme müssen dokumentiertes Testen mit quantitativen Qualitätsmetriken nachweisen. Prompt-Evaluierungs-Aufzeichnungen — Testsätze, Pass Rates, Regressions-Baselines — bieten Audit-bereite Evidenz für AI Act Transparenzanforderungen.\n\n- **USA (SOC 2 / NIST AI RMF):** SOC 2 Type II Audits erwarten dokumentiertes QA für KI-gesteuerte Prozesse. Prompt-Evaluierungs-Metriken mit Versionsverlauf erfüllen Change-Management und Quality-Control-Audit-Anforderungen.\n\n- **DACH (Deutschland, Österreich, Schweiz):** BSI-Grundschutz-Kataloge verlangen für IT-Systeme mit KI-Komponenten das Protokollieren von Qualitäts-Metriken. Lokale Evaluierung ohne Drittanbieter-APIs erfüllt Datenresidenz-Anforderungen der DSGVO. DIN EN ISO 9001-QM-Integration dokumentiert die Evaluierungs-Baseline und -Regeln als Prozessüberwachungsnachweis.\n\n- **Mehrsprachige Evaluierung:** Wenn Sie Prompts über Sprachen hinweg bereitstellen, evaluieren Sie jede Sprachvariante separat. BLEU-Scores und semantische Ähnlichkeits-Schwellenwerte unterscheiden sich erheblich zwischen Sprachpaaren. Ein Prompt mit 0,92 Ähnlichkeit im Englischen könnte 0,78 im Deutschen erreichen wegen syntaktischer Unterschiede.',
        },
        sources: {
          title: 'Quellen',
          items: [
            '[Promptfoo-Dokumentation (promptfoo.dev)](https://www.promptfoo.dev) — Open-Source Prompt-Evaluierungs-Framework mit eingebauten Metriken einschließlich LLM-as-Judge',
            '[Braintrust Evaluierungs-Guide (braintrust.dev)](https://www.braintrust.dev) — Produktions-Evaluierungs-Plattform mit Pass Rate, LLM-as-Judge und Custom-Scoring-Unterstützung',
            '[Papineni et al., 2002. "BLEU: a Method for Automatic Evaluation of Machine Translation"](https://aclanthology.org/P02-1040.pdf) — Original BLEU-Paper',
            '[DeepEval: Open-Source LLM-Evaluierungs-Framework (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Unterstützt Pass Rate, Halluzinations-Erkennung und LLM-as-Judge-Metriken mit CI/CD-Integration.',
            '[The Prompt Report: A Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Umfassende Übersicht einschließlich Evaluierungs-Methodologie und Metrik-Auswahl für Prompt-Engineering.',
          ],
        },
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Métricas de evaluación de prompts: qué medir y cómo',
      seoTitle: 'Métricas de evaluación de prompts: Pass Rate, BLEU y más',
      metaDescription: 'Aprende qué métricas de evaluación usar según el tipo de salida: pass rate para JSON, BLEU para traducción y LLM-as-judge para texto libre.',
      ogDescription: 'Elige la métrica de evaluación de prompts correcta según el tipo de salida. Compara pass rate, BLEU, similitud semántica y LLM-as-judge con detección de regresión.',
      twitterDescription: '¿Pass rate, BLEU, similitud semántica o LLM-as-judge? Elige la métrica de evaluación de prompts correcta según el tipo de salida. Framework con alertas de regresión.',
      intro: 'Elegir la métrica de evaluación incorrecta para tu prompt produce resultados engañosos que ocultan fallos reales en producción. Las puntuaciones BLEU carecen de sentido para las salidas JSON. El pass/fail binario no dice nada sobre la calidad matizada de la generación. La métrica que funciona depende completamente de lo que produce tu prompt.',
      publishDate: '2026-04-10',
      dateModified: '2026-04-10',
      readTime: '8 min de lectura',
      educationalLevel: 'Intermediate',
      audience: 'Desarrolladores y equipos que despliegan LLMs en producción',
      primaryTerm: 'métricas de evaluación de prompts',
      aboutTopics: ['pass rate', 'puntuación BLEU', 'LLM-as-judge'],
      next_refresh_due: '2026-10-10',
      leadAnswerBlock: '**Las métricas de evaluación de prompts son señales cuantitativas que miden si un prompt produce de forma fiable la salida esperada.** La métrica correcta depende del tipo de salida: pass rate para datos estructurados, BLEU para traducción, similitud semántica para tareas de paráfrasis y LLM-as-judge para generación de texto libre matizada.',
      quickFacts: [
        'El pass rate se mapea directamente a la tasa de fallos en producción: 90 % = 10 % de las solicitudes fallan',
        'La puntuación BLEU fue diseñada en 2002 para la traducción automática, no para la salida de IA en general',
        'La similitud semántica por encima de 0,85 generalmente indica contenido semánticamente equivalente',
        'LLM-as-judge escala a miles de evaluaciones por hora',
        'Una caída de 5 puntos en el pass rate es el umbral estándar de alerta de regresión',
        'Los modelos GPT-5.5 y Claude pueden diferir entre 10 y 20 puntos en el mismo conjunto de prueba de prompts',
      ],
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: '¿Qué son las métricas de evaluación de prompts?', anchor: '#definition' },
        { label: 'Métricas por tipo de salida', anchor: '#metric-types' },
        { label: 'Pass rate: la métrica más útil', anchor: '#pass-rate' },
        { label: 'Puntuación BLEU: cuándo usarla', anchor: '#bleu' },
        { label: 'Puntuación de similitud semántica', anchor: '#semantic-similarity' },
        { label: 'Evaluación LLM-as-judge', anchor: '#llm-as-judge' },
        { label: 'Cómo detectar la regresión de métricas', anchor: '#regression-metrics' },
        { label: 'Cómo empezar', anchor: '#how-to-start' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Consideraciones regionales', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Métricas de evaluación de prompts: qué medir y cómo',
        description: 'Las métricas de evaluación de prompts incluyen pass rate, puntuación BLEU, similitud semántica y puntuación LLM-as-judge.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-10',
        url: 'https://www.promptquorum.com/es/es/prompt-engineering/prompt-evaluation-metrics',
        inLanguage: 'es',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Pass Rate' },
          { '@type': 'Thing', name: 'Puntuación BLEU' },
          { '@type': 'Thing', name: 'LLM-as-Judge' },
          { '@type': 'Thing', name: 'Similitud Semántica' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        audience: { '@type': 'Audience', audienceType: 'Desarrolladores y equipos que despliegan LLMs en producción' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          { '@type': 'Question', name: '¿Qué son las métricas de evaluación de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Las métricas de evaluación de prompts son señales cuantitativas que miden si un prompt produce la salida esperada de forma fiable. Las métricas clave incluyen pass rate (correcto/incorrecto binario), puntuación BLEU (superposición de n-gramas para traducción y resumen), similitud semántica (similitud coseno de embeddings para tareas de paráfrasis) y LLM-as-judge (rúbrica de calidad puntuada por modelo para texto libre). Elegir la métrica incorrecta para tu tipo de salida produce puntuaciones engañosas.' } },
          { '@type': 'Question', name: '¿Qué es el pass rate en la evaluación de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'El pass rate es el porcentaje de entradas de prueba donde la salida del prompt cumple los criterios de éxito definidos. Pass rate = salidas que pasan / total de casos de prueba. Es la métrica más útil para salidas estructuradas porque se mapea directamente a la tasa de fallos en producción.' } },
          { '@type': 'Question', name: '¿Cuándo debes usar la puntuación BLEU para los prompts?', acceptedAnswer: { '@type': 'Answer', text: 'BLEU es apropiado para tareas de traducción y resumen donde la salida debe coincidir estrechamente con un texto de referencia. Es engañoso para la generación de JSON, el seguimiento de instrucciones y la escritura creativa porque mide la superposición de palabras en n-gramas, no el cumplimiento del formato o la corrección semántica.' } },
          { '@type': 'Question', name: '¿Qué es la evaluación LLM-as-judge?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-judge usa un modelo capaz como GPT-5.5 o Claude Opus 4.8 para puntuar las salidas contra una rúbrica. Escala a miles de casos de prueba sin revisión humana y maneja dimensiones de calidad matizadas que las métricas binarias no pueden capturar. El principal riesgo es el sesgo del modelo: el juez puede favorecer las salidas similares a su propio estilo.' } },
          { '@type': 'Question', name: '¿Cómo detectas la regresión de métricas de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Rastrea tu métrica principal por versión de prompt y alerta cuando caiga más de 5 puntos porcentuales desde la línea base establecida. El workflow es: registrar la métrica de línea base antes de cualquier cambio, hacer el cambio, volver a ejecutar el conjunto de prueba completo, comparar con la línea base. Una caída de más de 5 puntos debe bloquear el despliegue.' } },
          { '@type': 'Question', name: '¿Qué métrica debo usar para los prompts de salida JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Usa pass/fail binario para los prompts de salida JSON. Define "pasar" como: JSON válido + campos requeridos presentes + valores dentro del rango permitido. BLEU y la similitud semántica no tienen sentido para las salidas estructuradas.' } },
          { '@type': 'Question', name: '¿Puedes combinar múltiples métricas de evaluación de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — los prompts de producción típicamente necesitan una métrica primaria (pass rate para salidas estructuradas, precisión para clasificación) y una secundaria (similitud semántica o LLM-as-judge) para detectar diferentes modos de fallo. Rastrea ambas métricas de forma independiente y alerta si cualquiera cae por debajo del umbral.' } },
          { '@type': 'Question', name: '¿Cómo evalúas la calidad del prompt para la generación de código?', acceptedAnswer: { '@type': 'Answer', text: 'Usa la tasa de éxito de pruebas como métrica principal — genera código, ejecuta pruebas unitarias contra él y calcula el porcentaje que pasa. Esto es más fiable que BLEU o la similitud semántica porque el código puede ser funcionalmente correcto con una sintaxis completamente diferente.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Cómo elegir y aplicar métricas de evaluación de prompts',
        inLanguage: 'es',
        step: [
          { '@type': 'HowToStep', name: 'Identifica tu tipo de salida', text: 'Clasifica tu salida de prompt como datos estructurados (JSON, CSV), texto libre (resúmenes, descripciones) o código. El tipo de salida determina qué métricas aplican.' },
          { '@type': 'HowToStep', name: 'Selecciona la métrica correcta', text: 'Salidas estructuradas: pass/fail binario. Traducción/resumen: BLEU o ROUGE. Tareas de paráfrasis: similitud semántica. Generación matizada: LLM-as-judge.' },
          { '@type': 'HowToStep', name: 'Establece una línea base', text: 'Ejecuta tu conjunto de prueba y registra el valor de la métrica como tu línea base antes de hacer cualquier cambio de prompt.' },
          { '@type': 'HowToStep', name: 'Establece un umbral de alerta de regresión', text: 'Define el valor mínimo aceptable de la métrica. Una caída de más de 5 puntos porcentuales en el pass rate debe bloquear el despliegue.' },
          { '@type': 'HowToStep', name: 'Ejecuta las métricas después de cada cambio de prompt', text: 'Vuelve a ejecutar el conjunto de prueba y compara con la línea base cada vez que cambie el texto del prompt, el modelo o la temperatura.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: 'Puntos clave',
          items: [
            'El pass rate (salidas correctas / total) es la métrica más útil para los prompts de producción con salidas estructuradas',
            'La puntuación BLEU mide la superposición de n-gramas y solo tiene sentido para tareas de traducción y resumen',
            'La similitud semántica (similitud coseno de embeddings) supera a BLEU para tareas de paráfrasis y reescritura',
            'LLM-as-judge usa GPT-5.5 o Claude Opus 4.8 para puntuar salidas de texto libre matizadas a escala',
            'Rastrea el pass rate por versión de prompt y alerta con caídas de más de 5 puntos porcentuales',
            'Ninguna métrica única cubre todos los tipos de salida — elige según el formato de salida esperado de tu prompt',
          ],
        },
        definition: {
          title: '¿Qué son las métricas de evaluación de prompts?',
          content: '**Las métricas de evaluación de prompts son señales cuantitativas que te dicen si un prompt produce de forma fiable la salida esperada en las entradas que importan.** Sin métricas, la evaluación de prompts es subjetiva. La métrica correcta depende de lo que se supone que debe producir tu prompt. Cuando eliges la métrica correcta para tu tarea, puedes [evaluar la calidad del prompt](/es/prompt-engineering/how-to-evaluate-prompt-quality) de forma sistemática.',
          snippets: [
            { type: 'in-one-sentence', text: 'Las métricas de evaluación de prompts son señales cuantitativas que miden si un prompt produce de forma fiable la salida esperada en un conjunto de prueba representativo.' },
            { type: 'in-plain-terms', text: 'Piénsalas como pruebas unitarias para IA: defines qué es "correcto", ejecutas el prompt en 20+ ejemplos y puntúas el pass rate. Una puntuación del 95 % significa que el 5 % de las solicitudes reales de usuarios seguirán fallando.' }
          ],
          callouts: [
            { type: 'tip', label: 'Consejo pro', text: 'Empieza con el pass rate antes de añadir métricas complejas. El correcto/incorrecto binario a menudo es más útil que una rúbrica de 1–5.' }
          ],
        },
        metricTypes: {
          title: '¿Qué métricas aplican a la salida estructurada vs texto libre vs código?',
          content: '**El tipo de salida determina qué métrica es válida. Usar BLEU en salidas JSON o pass/fail en tareas de generación creativa produce puntuaciones sin sentido.**',
          columns: ['Tipo de salida', 'Métrica recomendada', 'Por qué'],
          rows: [
            { 'Tipo de salida': 'JSON / datos estructurados', 'Métrica recomendada': 'Pass/fail binario', 'Por qué': 'O válido + correcto, o no. Sin crédito parcial.' },
            { 'Tipo de salida': 'Clasificación', 'Métrica recomendada': 'Precisión (binaria)', 'Por qué': 'Una etiqueta correcta por entrada.' },
            { 'Tipo de salida': 'Traducción / resumen', 'Métrica recomendada': 'BLEU o ROUGE', 'Por qué': 'Texto de referencia disponible para comparar.' },
            { 'Tipo de salida': 'Paráfrasis / reescritura', 'Métrica recomendada': 'Similitud semántica', 'Por qué': 'Preserva el significado, no las palabras exactas.' },
            { 'Tipo de salida': 'Texto libre / creativo', 'Métrica recomendada': 'LLM-as-judge', 'Por qué': 'Se necesita rúbrica matizada, sin texto de referencia.' },
            { 'Tipo de salida': 'Generación de código', 'Métrica recomendada': 'Tasa de éxito de pruebas', 'Por qué': 'Ejecuta pruebas unitarias contra el código generado.' },
          ],
          callouts: [
            { type: 'insight', label: 'Punto clave', text: 'El tipo de salida guía la elección de la métrica. El error más común es aplicar BLEU a tareas que no son de traducción — mide la superposición de palabras, no el cumplimiento del formato.' }
          ],
        },
        passRate: {
          title: '¿Qué es el pass rate y por qué es la métrica más útil?',
          content: '**El pass rate es el porcentaje de entradas de prueba donde la salida del prompt cumple los criterios de éxito definidos — y es la métrica más útil porque se mapea directamente a la tasa de fallos en producción.** Un pass rate del 92 % significa que el 8 % de las solicitudes reales de usuarios fallarán.\n\nPass rate = salidas que pasan / total de casos de prueba\n\nPara salidas estructuradas, define "pasar" con precisión antes de ejecutar las pruebas: JSON válido, campos requeridos presentes, valores dentro del enum permitido, longitud por debajo del límite especificado.\n\nRastrea el pass rate por versión de prompt. Una caída de más de 5 puntos porcentuales es una regresión. Una caída de más de 10 puntos debe bloquear el despliegue en producción.',
          callouts: [
            { type: 'warning', label: 'Advertencia', text: 'Un pass rate del 90 % significa que el 10 % de las solicitudes reales de usuarios fallarán. Establece tu umbral de regresión basándote en la tolerancia al riesgo de producción, no en lo que parece bien en un dashboard.' }
          ],
        },
        bleu: {
          title: '¿Qué es la puntuación BLEU y cuándo debes usarla?',
          content: '**La puntuación BLEU (Bilingual Evaluation Understudy) mide la superposición de n-gramas entre una salida del modelo y un texto de referencia.** Es la métrica estándar para la traducción automática y es apropiada para cualquier tarea donde la salida debe coincidir estrechamente con una referencia.\n\nBLEU es engañoso para:\n\n- **Salida JSON o estructurada:** BLEU puntúa los tokens de formato, no la corrección semántica\n- **Seguimiento de instrucciones:** Un prompt que sigue todas las instrucciones pero parafrasea diferente puntuará bajo en BLEU\n- **Generación creativa:** BLEU penaliza la variedad léxica incluso cuando la calidad es alta\n\nCuándo BLEU es apropiado: tareas de traducción donde existe una referencia de oro, resumen frente a un resumen escrito por humanos, preguntas y respuestas extractivas con respuestas verbatim esperadas.',
          callouts: [
            { type: 'note', label: '¿Sabías que?', text: 'BLEU fue diseñado en 2002 para la traducción automática. Tiene limitaciones conocidas para la generación abierta pero sigue siendo el estándar para los benchmarks de MT.' }
          ],
        },
        semanticSimilarity: {
          title: '¿Qué es la puntuación de similitud semántica?',
          content: '**La similitud semántica mide qué tan cercanos están dos textos en significado calculando la similitud coseno de sus embeddings.** Supera a BLEU para tareas de paráfrasis y reescritura porque captura el significado en lugar de la elección de palabras.\n\nCómo funciona: embed la salida del modelo y la referencia usando text-embedding-3-small de OpenAI o un modelo de embedding local, luego calcula la similitud coseno. Las puntuaciones por encima de 0,85 generalmente indican contenido semánticamente equivalente.\n\nLimitaciones: la similitud semántica no verifica la exactitud factual, no detecta violaciones de formato y puede puntuar alto el contenido alucinado si la alucinación es semánticamente similar a la respuesta esperada.',
          callouts: [
            { type: 'tip', label: 'Consejo pro', text: 'text-embedding-3-small de OpenAI es el modelo más rápido y barato para la puntuación de similitud. Para contenido técnico/de código, considera un modelo de embedding específico para código.' }
          ],
        },
        llmAsJudge: {
          title: '¿Qué es la evaluación LLM-as-judge?',
          content: '**LLM-as-judge usa un modelo capaz — típicamente GPT-5.5 o Claude Opus 4.8 — para puntuar las salidas contra una rúbrica.** Esto escala la evaluación a miles de casos de prueba sin revisión humana y maneja dimensiones de calidad que las métricas binarias no pueden capturar: coherencia, tono, completitud y exactitud factual.',
          columns: ['Dimensión', 'Ventaja', 'Limitación'],
          rows: [
            { 'Dimensión': 'Escala', 'Ventaja': 'Miles de casos por hora', 'Limitación': 'El costo de API aumenta con el volumen' },
            { 'Dimensión': 'Matiz', 'Ventaja': 'Maneja rúbricas complejas', 'Limitación': 'Sesgo del modelo hacia su propio estilo de salida' },
            { 'Dimensión': 'Consistencia', 'Ventaja': 'Puntuación reproducible', 'Limitación': 'Sensible a la redacción del prompt del juez' },
            { 'Dimensión': 'Costo', 'Ventaja': 'Más barato que la revisión humana a escala', 'Limitación': 'Caro para conjuntos de prueba pequeños' },
          ],
          promptExamples: [
            {
              badLabel: 'Rúbrica vaga',
              bad: 'Califica la calidad de esta salida en una escala del 1 al 5.',
              goodLabel: 'Rúbrica multi-dimensional explícita',
              good: 'Puntúa esta salida en 3 dimensiones (1–3 cada una): (1) Exactitud factual — ¿coincide con los hechos de referencia? (2) Completitud — ¿se abordan todos los campos requeridos? (3) Tono — ¿es apropiadamente profesional? Devuelve JSON: {"accuracy": X, "completeness": X, "tone": X, "total": X, "reason": "..."}'
            }
          ],
          callouts: [
            { type: 'warning', label: 'Advertencia', text: 'LLM-as-judge tiene un sesgo propio: los modelos puntúan más alto las salidas similares a su propio estilo. Usa un modelo diferente como juez al que genera las salidas.' }
          ],
        },
        regressionMetrics: {
          title: '¿Cómo detectas la regresión de métricas?',
          content: '**Rastrea tu métrica principal por versión de prompt y alerta cuando caiga más de 5 puntos porcentuales desde la línea base establecida.** Ejecuta el mismo conjunto de prueba antes y después de cada cambio de prompt, actualización del modelo o ajuste de temperature.\n\nSigue este workflow:\n\n1. Registra la puntuación de la métrica actual como línea base (por ejemplo, pass rate = 91 %)\n2. Haz el cambio de prompt\n3. Vuelve a ejecutar el conjunto de prueba completo\n4. Compara la nueva puntuación con la línea base\n5. Si la caída > 5 puntos: bloquea el cambio, investiga, corrige\n\nPara la detección de regresión automatizada en CI/CD, herramientas como Promptfoo se integran con GitHub Actions y pueden fallar un PR si el pass rate cae por debajo de un umbral.',
          callouts: [
            { type: 'practice', label: 'Buena práctica', text: 'Integra Promptfoo con GitHub Actions para fallar automáticamente los PRs cuando el pass rate caiga por debajo del umbral. Esto evita que las regresiones de prompts lleguen a producción.' }
          ],
        },
        howToStart: {
          title: 'Cómo empezar a medir las métricas de evaluación de prompts',
          numberedItems: [
            'Identifica tu tipo de salida de prompt: datos estructurados, clasificación, traducción/resumen, paráfrasis, texto libre o código.',
            'Selecciona la métrica apropiada: pass/fail binario para estructurado, BLEU para traducción/resumen, similitud semántica para paráfrasis, LLM-as-judge para texto libre, tasa de éxito de pruebas para código.',
            'Construye un conjunto de prueba de 20+ entradas con salidas esperadas o criterios de éxito escritos antes de ejecutar cualquier prueba.',
            'Ejecuta el conjunto de prueba y registra tu puntuación de métrica de línea base.',
            'Establece un umbral de alerta de regresión: alerta si el pass rate cae 5+ puntos desde la línea base.',
            'Ejecuta la métrica automáticamente en cada cambio de prompt usando Promptfoo, Braintrust o PromptQuorum.',
          ],
          callouts: [
            { type: 'insight', label: 'Punto clave', text: 'Construye tu conjunto de prueba antes de escribir el prompt, no después. Los casos de prueba definidos post-hoc tienden a coincidir con el prompt actual en lugar de la distribución de entradas real.' }
          ],
        },
        commonMistakes: {
          title: '¿Qué errores debes evitar con las métricas de evaluación de prompts?',
          items: [
            '**Error: usar BLEU en JSON o seguimiento de instrucciones.** Solución: BLEU mide la superposición de n-gramas, no el cumplimiento del formato o el seguimiento de instrucciones. Usa pass/fail binario para salidas estructuradas.',
            '**Error: LLM-as-judge con rúbrica de evaluación vaga.** Solución: El prompt del juez debe definir explícitamente cada nivel de puntuación. Las rúbricas vagas como "califica la calidad del 1 al 5" producen puntuaciones inconsistentes sin valor diagnóstico.',
            '**Error: sin línea base antes del primer cambio.** Solución: registra el valor de la métrica antes de hacer cambios. Sin una línea base, no puedes detectar regresiones.',
            '**Error: medir solo una métrica.** Solución: los prompts de producción típicamente necesitan una métrica primaria (pass rate o precisión) y una secundaria (similitud semántica o LLM-as-judge) para detectar diferentes modos de fallo.',
          ],
        },
        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[Cómo evaluar la calidad de los prompts](/es/prompt-engineering/how-to-evaluate-prompt-quality) — Framework de tres componentes: precisión, consistencia, tasa de seguimiento',
            '[Prueba prompts entre modelos](/es/prompt-engineering/how-to-test-prompts-across-models) — Ejecuta el mismo conjunto de prueba en GPT-5.5, Claude y Gemini',
            '[Auditoría de prompts y riesgo de regresión](/es/prompt-engineering/prompt-audit-and-regression-risk) — Suites de regresión automatizadas y gates de CI/CD',
            '[Braintrust vs Prompthub vs Vellum](/es/prompt-engineering/braintrust-vs-prompthub-vs-vellum) — Comparación de plataformas de evaluación de prompts dedicadas para equipos',
            '[Mejores herramientas de prueba y evaluación de prompts 2026](/es/prompt-engineering/best-prompt-testing-tools) — Herramientas valoradas para QA sistemática de prompts',
            '[Cómo construir una biblioteca de prompts](/es/prompt-engineering/build-a-prompt-library) — Versiona y organiza prompts junto a sus líneas base de evaluación',
          ],
        },
        faq: {
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué son las métricas de evaluación de prompts?', a: 'Las métricas de evaluación de prompts son señales cuantitativas que miden si un prompt produce la salida esperada de forma fiable. Las métricas clave incluyen pass rate (correcto/incorrecto binario), BLEU (superposición de n-gramas para traducción y resumen), similitud semántica (similitud coseno de embeddings) y LLM-as-judge (rúbrica de calidad para texto libre). Elegir la métrica incorrecta produce puntuaciones engañosas.' },
            { q: '¿Qué es el pass rate en la evaluación de prompts?', a: 'El pass rate es el porcentaje de entradas de prueba donde la salida del prompt cumple los criterios de éxito definidos. Se mapea directamente a la tasa de fallos en producción y es la métrica más útil para los prompts de salida estructurada.' },
            { q: '¿Cuándo debes usar la puntuación BLEU para los prompts?', a: 'BLEU es apropiado para tareas de traducción y resumen donde la salida debe coincidir estrechamente con un texto de referencia. Es engañoso para la generación de JSON, el seguimiento de instrucciones y la escritura creativa.' },
            { q: '¿Qué es la evaluación LLM-as-judge?', a: 'LLM-as-judge usa GPT-5.5 o Claude Opus 4.8 para puntuar las salidas contra una rúbrica a escala. Maneja dimensiones de calidad matizadas que las métricas binarias no pueden capturar. El principal riesgo es el sesgo del modelo hacia su propio estilo de salida.' },
            { q: '¿Cómo detectas la regresión de métricas de prompts?', a: 'Rastrea tu métrica principal por versión de prompt y alerta cuando caiga más de 5 puntos porcentuales desde la línea base. Ejecuta el mismo conjunto de prueba antes y después de cada cambio. Una caída de más de 10 puntos es una regresión crítica.' },
            { q: '¿Qué métrica debo usar para los prompts de salida JSON?', a: 'Usa pass/fail binario. Define "pasar" como: JSON válido + campos requeridos presentes + valores dentro del rango permitido. BLEU y la similitud semántica no tienen sentido para las salidas estructuradas.' },
            { q: '¿Puedes combinar múltiples métricas de evaluación de prompts?', a: 'Sí — los prompts de producción típicamente necesitan una métrica primaria y una secundaria para detectar diferentes modos de fallo. Rastrea ambas de forma independiente y alerta si cualquiera cae por debajo del umbral.' },
            { q: '¿Cómo evalúas la calidad del prompt para la generación de código?', a: 'Usa la tasa de éxito de pruebas como métrica principal — genera código, ejecuta pruebas unitarias contra él y calcula el porcentaje que pasa. Suplementa con puntuaciones de análisis estático para una imagen más completa de la calidad.' },
            { q: '¿Debo tener en cuenta regulaciones al usar métricas de evaluación de prompts?', a: 'Sí. Los sistemas de IA de alto riesgo bajo el AI Act de la UE deben demostrar pruebas documentadas con métricas de calidad cuantitativas. Los registros de evaluación de prompts — conjuntos de prueba, pass rates, líneas base de regresión — proporcionan evidencia lista para auditoría.' },
            { q: '¿Qué métricas de evaluación de prompts son adecuadas para empresas medianas?', a: 'Pass rate para el procesamiento de documentos (por ejemplo, extracción de facturas), LLM-as-judge para la calidad del servicio al cliente. Los gates de regresión CI/CD proporcionan evidencia de trazabilidad para auditoría. Un umbral de pass rate del 95 % para documentos críticos es un objetivo razonable.' },
          ],
        },
        regionalConsiderations: {
          title: '¿Qué factores regionales influyen en los requisitos de evaluación de prompts?',
          content: '**Los marcos regulatorios exigen cada vez más métricas de calidad de IA documentadas, con requisitos específicos según la jurisdicción y la clasificación de riesgos.**\n\n- **UE (AI Act 2025–2026):** Los sistemas de IA de alto riesgo deben demostrar pruebas documentadas con métricas de calidad cuantitativas. Los registros de evaluación de prompts — conjuntos de prueba, pass rates, líneas base de regresión — proporcionan evidencia lista para auditoría.\n\n- **EE. UU. (SOC 2 / NIST AI RMF):** Las auditorías SOC 2 Type II esperan QA documentada para los procesos impulsados por IA. Las métricas de evaluación de prompts con historial de versiones satisfacen los requisitos de auditoría de gestión del cambio.\n\n- **Evaluación multilingüe:** Si despliegas prompts en múltiples idiomas, evalúa cada variante de idioma por separado. Las puntuaciones BLEU y los umbrales de similitud semántica difieren significativamente entre pares de idiomas.',
        },
        sources: {
          title: 'Fuentes',
          items: [
            '[Documentación de Promptfoo (promptfoo.dev)](https://www.promptfoo.dev) — Framework de evaluación de prompts de código abierto con métricas integradas incluyendo LLM-as-judge',
            '[Guía de evaluación de Braintrust (braintrust.dev)](https://www.braintrust.dev) — Plataforma de evaluación de producción con soporte de pass rate, LLM-as-judge y puntuación personalizada',
            '[Papineni et al., 2002. "BLEU: a Method for Automatic Evaluation of Machine Translation"](https://aclanthology.org/P02-1040.pdf) — Artículo original de BLEU',
            '[DeepEval: Open-Source LLM Evaluation Framework (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Soporta pass rate, detección de alucinaciones y métricas LLM-as-judge con integración CI/CD.',
            '[The Prompt Report: A Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Revisión completa incluyendo metodología de evaluación y selección de métricas para prompt engineering.',
          ],
        },
      },
    },
    pt: {
      theme: 'Techniques',
      title: 'Métricas de avaliação de prompts: o que medir e como',
      seoTitle: 'Métricas de avaliação de prompts: Pass Rate, BLEU e mais',
      metaDescription: 'Aprenda quais métricas de avaliação usar por tipo de saída: pass rate para JSON, BLEU para tradução e LLM-as-judge para texto livre.',
      ogDescription: 'Escolha a métrica de avaliação de prompts correta por tipo de saída. Compare pass rate, BLEU, similaridade semântica e LLM-as-judge com detecção de regressão.',
      twitterDescription: 'Pass rate, BLEU, similaridade semântica ou LLM-as-judge? Escolha a métrica de avaliação de prompts correta por tipo de saída. Framework com alertas de regressão.',
      intro: 'Escolher a métrica de avaliação errada para seu prompt produz resultados enganosos que ocultam falhas reais em produção. As pontuações BLEU não fazem sentido para saídas JSON. O pass/fail binário não diz nada sobre a qualidade matizada da geração. A métrica que funciona depende completamente do que seu prompt produz.',
      publishDate: '2026-04-10',
      readTime: '8 min de leitura',
      educationalLevel: 'Intermediate',
      audience: 'Desenvolvedores e equipes que implantam LLMs em produção',
      primaryTerm: 'métricas de avaliação de prompts',
      aboutTopics: ['pass rate', 'pontuação BLEU', 'LLM-as-judge'],
      leadAnswerBlock: '**As métricas de avaliação de prompts são sinais quantitativos que medem se um prompt produz de forma confiável a saída esperada.** A métrica correta depende do tipo de saída: pass rate para dados estruturados, BLEU para tradução, similaridade semântica para tarefas de paráfrase e LLM-as-judge para geração de texto livre matizada.',
      quickFacts: [
        'O pass rate mapeia diretamente para a taxa de falhas em produção: 90% = 10% das solicitações falham',
        'A pontuação BLEU foi projetada em 2002 para tradução automática, não para saída de IA em geral',
        'Similaridade semântica acima de 0,85 geralmente indica conteúdo semanticamente equivalente',
        'LLM-as-judge escala para milhares de avaliações por hora',
        'Uma queda de 5 pontos no pass rate é o limiar padrão de alerta de regressão',
        'Os modelos GPT-5.5 e Claude podem diferir entre 10 e 20 pontos no mesmo conjunto de teste de prompts',
      ],
      toc: [
        { label: 'Pontos-chave', anchor: '#key-takeaways' },
        { label: 'O que são métricas de avaliação de prompts?', anchor: '#definition' },
        { label: 'Métricas por tipo de saída', anchor: '#metric-types' },
        { label: 'Pass rate: a métrica mais útil', anchor: '#pass-rate' },
        { label: 'Pontuação BLEU: quando usá-la', anchor: '#bleu' },
        { label: 'Pontuação de similaridade semântica', anchor: '#semantic-similarity' },
        { label: 'Avaliação LLM-as-judge', anchor: '#llm-as-judge' },
        { label: 'Como detectar regressão de métricas', anchor: '#regression-metrics' },
        { label: 'Como começar', anchor: '#how-to-start' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Considerações regionais', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Fontes', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Métricas de avaliação de prompts: o que medir e como',
        description: 'As métricas de avaliação de prompts incluem pass rate, pontuação BLEU, similaridade semântica e pontuação LLM-as-judge.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        url: 'https://www.promptquorum.com/pt/pt/prompt-engineering/prompt-evaluation-metrics',
        inLanguage: 'pt-BR',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Pass Rate' },
          { '@type': 'Thing', name: 'Pontuação BLEU' },
          { '@type': 'Thing', name: 'LLM-as-Judge' },
          { '@type': 'Thing', name: 'Similaridade Semântica' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        audience: { '@type': 'Audience', audienceType: 'Desenvolvedores e equipes que implantam LLMs em produção' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          { '@type': 'Question', name: 'O que são métricas de avaliação de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Métricas de avaliação de prompts são sinais quantitativos que medem se um prompt produz a saída esperada de forma confiável. As métricas-chave incluem pass rate (correto/incorreto binário), pontuação BLEU (sobreposição de n-gramas para tradução e resumo), similaridade semântica (similaridade cosseno de embeddings para tarefas de paráfrase) e LLM-as-judge (rubrica de qualidade pontuada por modelo para texto livre). Escolher a métrica errada para seu tipo de saída produz pontuações enganosas.' } },
          { '@type': 'Question', name: 'O que é o pass rate na avaliação de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'O pass rate é a porcentagem de entradas de teste onde a saída do prompt atende aos critérios de sucesso definidos. Pass rate = saídas que passam / total de casos de teste. É a métrica mais útil para saídas estruturadas porque mapeia diretamente para a taxa de falhas em produção.' } },
          { '@type': 'Question', name: 'Quando você deve usar a pontuação BLEU para prompts?', acceptedAnswer: { '@type': 'Answer', text: 'BLEU é apropriado para tarefas de tradução e resumo onde a saída deve corresponder estreitamente a um texto de referência. É enganoso para geração de JSON, seguimento de instruções e escrita criativa porque mede sobreposição de palavras em n-gramas, não conformidade de formato ou correção semântica.' } },
          { '@type': 'Question', name: 'O que é avaliação LLM-as-judge?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-judge usa um modelo capaz como GPT-5.5 ou Claude Opus 4.8 para pontuar saídas contra uma rubrica. Escala para milhares de casos de teste sem revisão humana e lida com dimensões de qualidade matizadas que métricas binárias não conseguem capturar. O principal risco é o viés do modelo: o juiz pode favorecer saídas similares ao seu próprio estilo.' } },
          { '@type': 'Question', name: 'Como você detecta regressão de métricas de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Rastreie sua métrica principal por versão de prompt e alerte quando cair mais de 5 pontos percentuais desde a linha de base estabelecida. O fluxo de trabalho é: registrar a métrica de linha de base antes de qualquer alteração, fazer a alteração, executar novamente o conjunto de teste completo, comparar com a linha de base. Uma queda de mais de 5 pontos deve bloquear a implantação.' } },
          { '@type': 'Question', name: 'Qual métrica devo usar para prompts de saída JSON?', acceptedAnswer: { '@type': 'Answer', text: 'Use pass/fail binário para prompts de saída JSON. Defina "passar" como: JSON válido + campos obrigatórios presentes + valores dentro do intervalo permitido. BLEU e similaridade semântica não fazem sentido para saídas estruturadas.' } },
          { '@type': 'Question', name: 'Você pode combinar múltiplas métricas de avaliação de prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — prompts de produção tipicamente precisam de uma métrica primária (pass rate para saídas estruturadas, precisão para classificação) e uma secundária (similaridade semântica ou LLM-as-judge) para detectar diferentes modos de falha. Rastreie ambas as métricas de forma independente e alerte se qualquer uma cair abaixo do limiar.' } },
          { '@type': 'Question', name: 'Como você avalia a qualidade do prompt para geração de código?', acceptedAnswer: { '@type': 'Answer', text: 'Use a taxa de sucesso de testes como métrica principal — gere código, execute testes unitários contra ele e calcule a porcentagem que passa. Isso é mais confiável do que BLEU ou similaridade semântica porque o código pode ser funcionalmente correto com uma sintaxe completamente diferente.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Como escolher e aplicar métricas de avaliação de prompts',
        inLanguage: 'pt-BR',
        step: [
          { '@type': 'HowToStep', name: 'Identifique seu tipo de saída', text: 'Classifique sua saída de prompt como dados estruturados (JSON, CSV), texto livre (resumos, descrições) ou código. O tipo de saída determina quais métricas se aplicam.' },
          { '@type': 'HowToStep', name: 'Selecione a métrica correta', text: 'Saídas estruturadas: pass/fail binário. Tradução/resumo: BLEU ou ROUGE. Tarefas de paráfrase: similaridade semântica. Geração matizada: LLM-as-judge.' },
          { '@type': 'HowToStep', name: 'Estabeleça uma linha de base', text: 'Execute seu conjunto de teste e registre o valor da métrica como sua linha de base antes de fazer qualquer alteração de prompt.' },
          { '@type': 'HowToStep', name: 'Defina um limiar de alerta de regressão', text: 'Defina o valor mínimo aceitável da métrica. Uma queda de mais de 5 pontos percentuais no pass rate deve bloquear a implantação.' },
          { '@type': 'HowToStep', name: 'Execute as métricas após cada alteração de prompt', text: 'Execute novamente o conjunto de teste e compare com a linha de base toda vez que o texto do prompt, o modelo ou a temperatura mudar.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: 'Pontos-chave',
          items: [
            'O pass rate (saídas corretas / total) é a métrica mais útil para prompts de produção com saídas estruturadas',
            'A pontuação BLEU mede a sobreposição de n-gramas e só faz sentido para tarefas de tradução e resumo',
            'A similaridade semântica (similaridade cosseno de embeddings) supera o BLEU para tarefas de paráfrase e reescrita',
            'LLM-as-judge usa GPT-5.5 ou Claude Opus 4.8 para pontuar saídas de texto livre matizadas em escala',
            'Rastreie o pass rate por versão de prompt e alerte com quedas de mais de 5 pontos percentuais',
            'Nenhuma métrica única cobre todos os tipos de saída — escolha com base no formato de saída esperado do seu prompt',
          ],
        },
        definition: {
          title: 'O que são métricas de avaliação de prompts?',
          content: '**As métricas de avaliação de prompts são sinais quantitativos que dizem se um prompt produz de forma confiável a saída esperada nas entradas que importam.** Sem métricas, a avaliação de prompts é subjetiva. A métrica correta depende do que seu prompt deve produzir. Quando você escolhe a métrica correta para sua tarefa, pode [avaliar a qualidade do prompt](/pt/prompt-engineering/how-to-evaluate-prompt-quality) de forma sistemática.',
          snippets: [
            { type: 'in-one-sentence', text: 'Métricas de avaliação de prompts são sinais quantitativos que medem se um prompt produz de forma confiável a saída esperada em um conjunto de teste representativo.' },
            { type: 'in-plain-terms', text: 'Pense nelas como testes unitários para IA: você define o que é "correto", executa o prompt em 20+ exemplos e pontua o pass rate. Uma pontuação de 95% significa que 5% das solicitações reais de usuários ainda falharão.' }
          ],
          callouts: [
            { type: 'tip', label: 'Dica profissional', text: 'Comece com o pass rate antes de adicionar métricas complexas. O correto/incorreto binário muitas vezes é mais útil do que uma rubrica de 1–5.' }
          ],
        },
        metricTypes: {
          title: 'Quais métricas se aplicam a saídas estruturadas vs texto livre vs código?',
          content: '**O tipo de saída determina qual métrica é válida. Usar BLEU em saídas JSON ou pass/fail em tarefas de geração criativa produz pontuações sem sentido.**',
          columns: ['Tipo de saída', 'Métrica recomendada', 'Por quê'],
          rows: [
            { 'Tipo de saída': 'JSON / dados estruturados', 'Métrica recomendada': 'Pass/fail binário', 'Por quê': 'Ou válido + correto, ou não. Sem crédito parcial.' },
            { 'Tipo de saída': 'Classificação', 'Métrica recomendada': 'Precisão (binária)', 'Por quê': 'Um rótulo correto por entrada.' },
            { 'Tipo de saída': 'Tradução / resumo', 'Métrica recomendada': 'BLEU ou ROUGE', 'Por quê': 'Texto de referência disponível para comparar.' },
            { 'Tipo de saída': 'Paráfrase / reescrita', 'Métrica recomendada': 'Similaridade semântica', 'Por quê': 'Preserva o significado, não as palavras exatas.' },
            { 'Tipo de saída': 'Texto livre / criativo', 'Métrica recomendada': 'LLM-as-judge', 'Por quê': 'Rubrica matizada necessária, sem texto de referência.' },
            { 'Tipo de saída': 'Geração de código', 'Métrica recomendada': 'Taxa de sucesso de testes', 'Por quê': 'Execute testes unitários contra o código gerado.' },
          ],
          callouts: [
            { type: 'insight', label: 'Ponto-chave', text: 'O tipo de saída orienta a escolha da métrica. O erro mais comum é aplicar BLEU a tarefas que não são de tradução — ele mede sobreposição de palavras, não conformidade de formato.' }
          ],
        },
        passRate: {
          title: 'O que é o pass rate e por que é a métrica mais útil?',
          content: '**O pass rate é a porcentagem de entradas de teste onde a saída do prompt atende aos critérios de sucesso definidos — e é a métrica mais útil porque mapeia diretamente para a taxa de falhas em produção.** Um pass rate de 92% significa que 8% das solicitações reais de usuários falharão.\n\nPass rate = saídas que passam / total de casos de teste\n\nPara saídas estruturadas, defina "passar" com precisão antes de executar os testes: JSON válido, campos obrigatórios presentes, valores dentro do enum permitido, comprimento abaixo do limite especificado.\n\nRastreie o pass rate por versão de prompt. Uma queda de mais de 5 pontos percentuais é uma regressão. Uma queda de mais de 10 pontos deve bloquear a implantação em produção.',
          callouts: [
            { type: 'warning', label: 'Atenção', text: 'Um pass rate de 90% significa que 10% das solicitações reais de usuários falharão. Defina seu limiar de regressão com base na tolerância ao risco de produção, não no que parece bom em um dashboard.' }
          ],
        },
        bleu: {
          title: 'O que é a pontuação BLEU e quando você deve usá-la?',
          content: '**A pontuação BLEU (Bilingual Evaluation Understudy) mede a sobreposição de n-gramas entre uma saída do modelo e um texto de referência.** É a métrica padrão para tradução automática e é apropriada para qualquer tarefa onde a saída deve corresponder estreitamente a uma referência.\n\nBLEU é enganoso para:\n\n- **Saída JSON ou estruturada:** BLEU pontua os tokens de formatação, não a correção semântica\n- **Seguimento de instruções:** Um prompt que segue todas as instruções mas parafraseia diferente pontuará baixo em BLEU\n- **Geração criativa:** BLEU penaliza a variedade lexical mesmo quando a qualidade é alta\n\nQuando BLEU é apropriado: tarefas de tradução onde existe uma referência de ouro, resumo frente a um resumo escrito por humanos, perguntas e respostas extrativas com respostas verbatim esperadas.',
          callouts: [
            { type: 'note', label: 'Você sabia?', text: 'BLEU foi projetado em 2002 para tradução automática. Tem limitações conhecidas para geração aberta, mas continua sendo o padrão para benchmarks de MT.' }
          ],
        },
        semanticSimilarity: {
          title: 'O que é a pontuação de similaridade semântica?',
          content: '**A similaridade semântica mede quão próximos dois textos estão em significado calculando a similaridade cosseno de seus embeddings.** Supera o BLEU para tarefas de paráfrase e reescrita porque captura o significado em vez da escolha de palavras.\n\nComo funciona: embed a saída do modelo e a referência usando text-embedding-3-small da OpenAI ou um modelo de embedding local, depois calcule a similaridade cosseno. Pontuações acima de 0,85 geralmente indicam conteúdo semanticamente equivalente.\n\nLimitações: a similaridade semântica não verifica a exatidão factual, não detecta violações de formato e pode pontuar alto conteúdo alucinado se a alucinação for semanticamente similar à resposta esperada.',
          callouts: [
            { type: 'tip', label: 'Dica profissional', text: 'text-embedding-3-small da OpenAI é o modelo mais rápido e econômico para pontuação de similaridade. Para conteúdo técnico/código, considere um modelo de embedding específico para código.' }
          ],
        },
        llmAsJudge: {
          title: 'O que é avaliação LLM-as-judge?',
          content: '**LLM-as-judge usa um modelo capaz — tipicamente GPT-5.5 ou Claude Opus 4.8 — para pontuar saídas contra uma rubrica.** Isso escala a avaliação para milhares de casos de teste sem revisão humana e lida com dimensões de qualidade que métricas binárias não conseguem capturar: coerência, tom, completude e exatidão factual.',
          columns: ['Dimensão', 'Vantagem', 'Limitação'],
          rows: [
            { 'Dimensão': 'Escala', 'Vantagem': 'Milhares de casos por hora', 'Limitação': 'O custo da API aumenta com o volume' },
            { 'Dimensão': 'Matiz', 'Vantagem': 'Lida com rubricas complexas', 'Limitação': 'Viés do modelo em direção ao seu próprio estilo de saída' },
            { 'Dimensão': 'Consistência', 'Vantagem': 'Pontuação reproduzível', 'Limitação': 'Sensível à redação do prompt do juiz' },
            { 'Dimensão': 'Custo', 'Vantagem': 'Mais econômico que revisão humana em escala', 'Limitação': 'Caro para conjuntos de teste pequenos' },
          ],
          promptExamples: [
            {
              badLabel: 'Rubrica vaga',
              bad: 'Avalie a qualidade desta saída em uma escala de 1 a 5.',
              goodLabel: 'Rubrica multi-dimensional explícita',
              good: 'Pontue esta saída em 3 dimensões (1–3 cada): (1) Exatidão factual — corresponde aos fatos de referência? (2) Completude — todos os campos obrigatórios são abordados? (3) Tom — é apropriadamente profissional? Retorne JSON: {"accuracy": X, "completeness": X, "tone": X, "total": X, "reason": "..."}'
            }
          ],
          callouts: [
            { type: 'warning', label: 'Atenção', text: 'LLM-as-judge tem viés próprio: modelos pontuam mais alto saídas similares ao seu próprio estilo. Use um modelo diferente como juiz do que o que gera as saídas.' }
          ],
        },
        regressionMetrics: {
          title: 'Como você detecta regressão de métricas?',
          content: '**Rastreie sua métrica principal por versão de prompt e alerte quando cair mais de 5 pontos percentuais desde a linha de base estabelecida.** Execute o mesmo conjunto de teste antes e depois de cada alteração de prompt, atualização de modelo ou ajuste de temperature.\n\nSiga este fluxo de trabalho:\n\n1. Registre a pontuação da métrica atual como linha de base (por exemplo, pass rate = 91%)\n2. Faça a alteração de prompt\n3. Execute novamente o conjunto de teste completo\n4. Compare a nova pontuação com a linha de base\n5. Se a queda > 5 pontos: bloqueie a alteração, investigue, corrija\n\nPara detecção de regressão automatizada em CI/CD, ferramentas como Promptfoo se integram com GitHub Actions e podem reprovar um PR se o pass rate cair abaixo de um limiar.',
          callouts: [
            { type: 'practice', label: 'Boa prática', text: 'Integre Promptfoo com GitHub Actions para reprovar automaticamente PRs quando o pass rate cair abaixo do limiar. Isso evita que regressões de prompts cheguem à produção.' }
          ],
        },
        howToStart: {
          title: 'Como começar a medir as métricas de avaliação de prompts',
          numberedItems: [
            'Identifique seu tipo de saída de prompt: dados estruturados, classificação, tradução/resumo, paráfrase, texto livre ou código.',
            'Selecione a métrica apropriada: pass/fail binário para estruturado, BLEU para tradução/resumo, similaridade semântica para paráfrase, LLM-as-judge para texto livre, taxa de sucesso de testes para código.',
            'Construa um conjunto de teste de 20+ entradas com saídas esperadas ou critérios de sucesso escritos antes de executar qualquer teste.',
            'Execute o conjunto de teste e registre sua pontuação de métrica de linha de base.',
            'Defina um limiar de alerta de regressão: alerte se o pass rate cair 5+ pontos desde a linha de base.',
            'Execute a métrica automaticamente em cada alteração de prompt usando Promptfoo, Braintrust ou PromptQuorum.',
          ],
          callouts: [
            { type: 'insight', label: 'Ponto-chave', text: 'Construa seu conjunto de teste antes de escrever o prompt, não depois. Casos de teste definidos após o fato tendem a coincidir com o prompt atual em vez da distribuição real de entradas.' }
          ],
        },
        commonMistakes: {
          title: 'Quais erros você deve evitar com métricas de avaliação de prompts?',
          items: [
            '**Erro: usar BLEU em JSON ou seguimento de instruções.** Solução: BLEU mede sobreposição de n-gramas, não conformidade de formato ou seguimento de instruções. Use pass/fail binário para saídas estruturadas.',
            '**Erro: LLM-as-judge com rubrica de avaliação vaga.** Solução: o prompt do juiz deve definir explicitamente cada nível de pontuação. Rubricas vagas como "avalie a qualidade de 1 a 5" produzem pontuações inconsistentes sem valor diagnóstico.',
            '**Erro: sem linha de base antes da primeira alteração.** Solução: registre o valor da métrica antes de fazer alterações. Sem uma linha de base, você não consegue detectar regressões.',
            '**Erro: medir apenas uma métrica.** Solução: prompts de produção tipicamente precisam de uma métrica primária (pass rate ou precisão) e uma secundária (similaridade semântica ou LLM-as-judge) para detectar diferentes modos de falha.',
          ],
        },
        relatedReading: {
          title: 'Leituras relacionadas',
          items: [
            '[Como avaliar a qualidade dos prompts](/pt/prompt-engineering/how-to-evaluate-prompt-quality) — Framework de três componentes: precisão, consistência, taxa de seguimento',
            '[Teste prompts entre modelos](/pt/prompt-engineering/how-to-test-prompts-across-models) — Execute o mesmo conjunto de teste no GPT-5.5, Claude e Gemini',
            '[Auditoria de prompts e risco de regressão](/pt/prompt-engineering/prompt-audit-and-regression-risk) — Suites de regressão automatizadas e gates de CI/CD',
            '[Braintrust vs Prompthub vs Vellum](/pt/prompt-engineering/braintrust-vs-prompthub-vs-vellum) — Comparação de plataformas de avaliação de prompts dedicadas para equipes',
            '[Melhores ferramentas de teste e avaliação de prompts 2026](/pt/prompt-engineering/best-prompt-testing-tools) — Ferramentas avaliadas para QA sistemática de prompts',
            '[Como construir uma biblioteca de prompts](/pt/prompt-engineering/build-a-prompt-library) — Versione e organize prompts junto com suas linhas de base de avaliação',
          ],
        },
        faq: {
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'O que são métricas de avaliação de prompts?', a: 'Métricas de avaliação de prompts são sinais quantitativos que medem se um prompt produz a saída esperada de forma confiável. As métricas-chave incluem pass rate (correto/incorreto binário), BLEU (sobreposição de n-gramas para tradução e resumo), similaridade semântica (similaridade cosseno de embeddings) e LLM-as-judge (rubrica de qualidade para texto livre). Escolher a métrica errada produz pontuações enganosas.' },
            { q: 'O que é o pass rate na avaliação de prompts?', a: 'O pass rate é a porcentagem de entradas de teste onde a saída do prompt atende aos critérios de sucesso definidos. Ele mapeia diretamente para a taxa de falhas em produção e é a métrica mais útil para prompts de saída estruturada.' },
            { q: 'Quando você deve usar a pontuação BLEU para prompts?', a: 'BLEU é apropriado para tarefas de tradução e resumo onde a saída deve corresponder estreitamente a um texto de referência. É enganoso para geração de JSON, seguimento de instruções e escrita criativa.' },
            { q: 'O que é avaliação LLM-as-judge?', a: 'LLM-as-judge usa GPT-5.5 ou Claude Opus 4.8 para pontuar saídas contra uma rubrica em escala. Lida com dimensões de qualidade matizadas que métricas binárias não conseguem capturar. O principal risco é o viés do modelo em direção ao seu próprio estilo de saída.' },
            { q: 'Como você detecta regressão de métricas de prompts?', a: 'Rastreie sua métrica principal por versão de prompt e alerte quando cair mais de 5 pontos percentuais desde a linha de base. Execute o mesmo conjunto de teste antes e depois de cada alteração. Uma queda de mais de 10 pontos é uma regressão crítica.' },
            { q: 'Qual métrica devo usar para prompts de saída JSON?', a: 'Use pass/fail binário. Defina "passar" como: JSON válido + campos obrigatórios presentes + valores dentro do intervalo permitido. BLEU e similaridade semântica não fazem sentido para saídas estruturadas.' },
            { q: 'Você pode combinar múltiplas métricas de avaliação de prompts?', a: 'Sim — prompts de produção tipicamente precisam de uma métrica primária e uma secundária para detectar diferentes modos de falha. Rastreie ambas de forma independente e alerte se qualquer uma cair abaixo do limiar.' },
            { q: 'Como você avalia a qualidade do prompt para geração de código?', a: 'Use a taxa de sucesso de testes como métrica principal — gere código, execute testes unitários contra ele e calcule a porcentagem que passa. Complemente com pontuações de análise estática para uma imagem mais completa da qualidade.' },
            { q: 'Devo considerar regulamentações ao usar métricas de avaliação de prompts?', a: 'Sim. No Brasil, a LGPD (Lei Geral de Proteção de Dados) regulamentada pela ANPD exige que sistemas de IA de alto risco documentem práticas de qualidade. Os registros de avaliação de prompts — conjuntos de teste, pass rates, linhas de base de regressão — fornecem evidências prontas para auditoria.' },
            { q: 'Quais métricas de avaliação de prompts são adequadas para empresas médias?', a: 'Pass rate para processamento de documentos (por exemplo, extração de notas fiscais), LLM-as-judge para qualidade do atendimento ao cliente. Os gates de regressão CI/CD fornecem evidências de rastreabilidade para auditoria. Um limiar de pass rate de 95% para documentos críticos é um objetivo razoável.' },
          ],
        },
        regionalConsiderations: {
          title: 'Quais fatores regionais influenciam os requisitos de avaliação de prompts?',
          content: '**Os frameworks regulatórios exigem cada vez mais métricas de qualidade de IA documentadas, com requisitos específicos por jurisdição e classificação de riscos.**\n\n- **Brasil (LGPD/ANPD):** A Lei Geral de Proteção de Dados e a Autoridade Nacional de Proteção de Dados definem as regras de conformidade para dados usados em sistemas de IA. Os registros de avaliação de prompts — conjuntos de teste, pass rates, linhas de base de regressão — fornecem evidências prontas para auditoria.\n\n- **EUA (SOC 2 / NIST AI RMF):** As auditorias SOC 2 Type II esperam QA documentada para processos impulsionados por IA. Métricas de avaliação de prompts com histórico de versões satisfazem os requisitos de auditoria de gestão de mudanças.\n\n- **Avaliação multilíngue:** Se você implanta prompts em múltiplos idiomas, avalie cada variante de idioma separadamente. As pontuações BLEU e os limiares de similaridade semântica diferem significativamente entre pares de idiomas.',
        },
        sources: {
          title: 'Fontes',
          items: [
            '[Documentação do Promptfoo (promptfoo.dev)](https://www.promptfoo.dev) — Framework de avaliação de prompts open-source com métricas integradas incluindo LLM-as-judge',
            '[Guia de avaliação do Braintrust (braintrust.dev)](https://www.braintrust.dev) — Plataforma de avaliação de produção com suporte a pass rate, LLM-as-judge e pontuação personalizada',
            '[Papineni et al., 2002. "BLEU: a Method for Automatic Evaluation of Machine Translation"](https://aclanthology.org/P02-1040.pdf) — Artigo original do BLEU',
            '[DeepEval: Open-Source LLM Evaluation Framework (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Suporta pass rate, detecção de alucinações e métricas LLM-as-judge com integração CI/CD.',
            '[The Prompt Report: A Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Revisão abrangente incluindo metodologia de avaliação e seleção de métricas para prompt engineering.',
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Métriques d\'évaluation de prompts : Mesurer ce qui compte réellement',
      seoTitle: 'Métriques d\'Évaluation de Prompts : Pass Rate, BLEU et LLM-as-Judge (2026)',
      metaDescription: 'Quelle métrique d\'évaluation par type d\'output : pass rate pour JSON, BLEU pour traduction, similarité sémantique pour paraphrase, LLM-as-judge pour texte libre.',
      ogDescription: 'Choisissez la bonne métrique d\'évaluation de prompts par type d\'output. Comparez pass rate, BLEU, similarité sémantique et LLM-as-judge avec détection de régression.',
      twitterDescription: 'Pass rate, BLEU ou LLM-as-judge ? La bonne métrique de prompt par type d\'output. Framework avec alertes de régression.',
      intro: 'Choisir la mauvaise métrique d\'évaluation pour votre prompt produit des résultats trompeurs qui masquent les vrais problèmes en production. Les scores BLEU sont dénués de sens pour les sorties JSON. Un simple oui/non ne dit rien sur la qualité nuancée de la génération. La métrique qui convient dépend entièrement de ce que votre prompt produit.',
      publishDate: '2026-04-10',
      dateModified: '2026-04-10',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      audience: 'Développeurs et équipes déployant des LLMs en production',
      primaryTerm: 'métriques d\'évaluation de prompts',
      aboutTopics: ['taux de réussite', 'score BLEU', 'LLM-as-Judge'],
      next_refresh_due: '2026-10-10',
      leadAnswerBlock: '**Les métriques d\'évaluation de prompts sont des signaux quantitatifs mesurant si un prompt produit fiablement la sortie souhaitée.** La bonne métrique dépend de votre type de sortie : taux de réussite pour les données structurées, BLEU pour la traduction, similarité sémantique pour les paraphrases, et LLM-as-Judge pour la génération de texte libre nuancée.',
      quickFacts: [
        'Taux de réussite 90% = 10% des demandes en production échoueront',
        'BLEU a été conçu en 2002 pour la traduction, pas pour la génération IA générale',
        'Similarité sémantique > 0,85 indique généralement un contenu sémantiquement équivalent',
        'LLM-as-Judge traite des milliers d\'évaluations par heure',
        'Une chute de 5 points en taux de réussite déclenche l\'alerte de régression standard',
        'GPT-5.5 et Claude peuvent différer de 10–20 points sur le même ensemble de test',
      ],
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Que sont les métriques d\'évaluation de prompts ?', anchor: '#definition' },
        { label: 'Métriques par type de sortie', anchor: '#metric-types' },
        { label: 'Taux de réussite : la métrique la plus utile', anchor: '#pass-rate' },
        { label: 'Score BLEU : quand l\'utiliser', anchor: '#bleu' },
        { label: 'Similarité sémantique', anchor: '#semantic-similarity' },
        { label: 'Évaluation LLM-as-Judge', anchor: '#llm-as-judge' },
        { label: 'Détecter une régression', anchor: '#regression-metrics' },
        { label: 'Par où commencer', anchor: '#how-to-start' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Facteurs régionaux', anchor: '#regional-considerations' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Métriques d\'évaluation de prompts : Mesurer ce qui compte réellement',
        description: 'Les métriques d\'évaluation de prompts incluent le taux de réussite, le score BLEU, la similarité sémantique et l\'évaluation LLM-as-Judge.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-10',
        url: 'https://www.promptquorum.com/fr/prompt-engineering/prompt-evaluation-metrics',
        inLanguage: 'fr',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Taux de réussite' },
          { '@type': 'Thing', name: 'Score BLEU' },
          { '@type': 'Thing', name: 'LLM-as-Judge' },
          { '@type': 'Thing', name: 'Similarité sémantique' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        audience: { '@type': 'Audience', audienceType: 'Développeurs et équipes déployant des LLMs en production' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          { '@type': 'Question', name: 'Que sont les métriques d\'évaluation de prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Les métriques d\'évaluation de prompts sont des signaux quantitatifs mesurant si un prompt produit la sortie souhaitée de manière fiable. Les métriques clés incluent le taux de réussite (correct/incorrect), le score BLEU (chevauchement n-gramme pour traduction et résumé), la similarité sémantique (similarité cosinus d\'embeddings pour paraphrases), et LLM-as-Judge (évaluation basée modèle pour texte libre). Choisir la mauvaise métrique produit des scores trompeurs.' } },
          { '@type': 'Question', name: 'Qu\'est-ce que le taux de réussite en évaluation de prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Le taux de réussite est le pourcentage d\'entrées de test où la sortie prompt satisfait les critères de succès définis. Taux de réussite = sorties réussies / nombre total de tests. C\'est la métrique la plus utile pour les sorties structurées car elle se traduit directement par le taux d\'erreur en production.' } },
          { '@type': 'Question', name: 'Quand utiliser le score BLEU pour les prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'BLEU convient aux traductions et résumés où la sortie doit correspondre étroitement à un texte de référence. Il est trompeur pour JSON, l\'exécution d\'instructions et l\'écriture créative car il mesure le chevauchement de mots n-gramme, pas la conformité de format. Par exemple, un prompt d\'extraction JSON retournant la bonne structure avec une formulation différente obtient quasi zéro sur BLEU malgré une correction fonctionnelle.' } },
          { '@type': 'Question', name: 'Qu\'est-ce que l\'évaluation LLM-as-Judge ?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-Judge utilise un modèle capable comme GPT-5.5 ou Claude Opus 4.8 pour évaluer les sorties selon une rubrique. Il scale à des milliers de cas sans examen humain et gère les dimensions de qualité que les métriques binaires manquent. Le principal risque est le biais du modèle : le juge peut favoriser les sorties similaires à son style.' } },
          { '@type': 'Question', name: 'Comment détecter une régression de métrique ?', acceptedAnswer: { '@type': 'Answer', text: 'Suivez votre métrique primaire par version de prompt et alertez si elle baisse de plus de 5 points. Le flux : enregistrer la métrique avant changement, faire le changement, relancer l\'ensemble de test, comparer à la baseline. Une baisse > 5 points bloque le déploiement. Une baisse > 10 points est critique et nécessite investigation.' } },
          { '@type': 'Question', name: 'Quelle métrique pour les sorties JSON ?', acceptedAnswer: { '@type': 'Answer', text: 'Utilisez taux de réussite binaire pour les sorties JSON. Définissez réussite comme : JSON valide + champs obligatoires présents + valeurs dans la plage admissible. BLEU et similarité sémantique ne sont pas significatifs pour les sorties structurées.' } },
          { '@type': 'Question', name: 'Peut-on combiner plusieurs métriques ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — les prompts de production nécessitent généralement une métrique primaire (taux de réussite pour structuré, exactitude pour classification) et une métrique secondaire (similarité sémantique ou LLM-as-Judge). Un prompt d\'extraction JSON peut avoir 100% de taux de réussite mais produire des valeurs sémantiquement incorrectes. Suivez les deux indépendamment et alertez si l\'une baisse.' } },
          { '@type': 'Question', name: 'Comment évaluer les prompts de génération de code ?', acceptedAnswer: { '@type': 'Answer', text: 'Utilisez le taux de réussite de test comme métrique primaire — générez du code, exécutez les tests unitaires, calculez le pourcentage qui passe. C\'est plus fiable que BLEU ou la similarité sémantique car le code peut être fonctionnellement correct avec une syntaxe complètement différente. Complétez avec des scores d\'analyse statique pour une vue plus complète.' } },
          { '@type': 'Question', name: 'Quel est l\'impact du RGPD sur l\'évaluation de prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Le RGPD exige la documentation de la qualité des systèmes IA. Les métriques d\'évaluation et les ensembles de test doivent être enregistrés comme dossiers de traitement. L\'inférence locale (sans API tiers) satisfait les exigences de résidence des données. Pour la conformité CNIL, l\'inférence locale est recommandée pour les données professionnelles sensibles.' } },
          { '@type': 'Question', name: 'Quels sont les défis spécifiques à la France ?', acceptedAnswer: { '@type': 'Answer', text: 'En France, respectez la directive CNIL sur l\'IA. Pour les PME du secteur légal ou financier, documentez le taux de réussite comme preuve de contrôle qualité. L\'évaluation des prompts sur des textes français nécessite une attention particulière aux nuances linguistiques. Établissez des baselines séparées pour le français car BLEU et les seuils de similarité diffèrent du contenu anglais.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'fr',
        name: 'Comment choisir et appliquer les métriques d\'évaluation de prompts',
        step: [
          { '@type': 'HowToStep', name: 'Identifiez votre type de sortie', text: 'Classez votre sortie prompt comme données structurées (JSON, CSV), texte libre (résumés, descriptions) ou code. Le type de sortie détermine les métriques applicables.' },
          { '@type': 'HowToStep', name: 'Sélectionnez la bonne métrique', text: 'Structuré : taux de réussite binaire. Traduction/résumé : BLEU ou ROUGE. Paraphrase : similarité sémantique. Génération nuancée : LLM-as-Judge.' },
          { '@type': 'HowToStep', name: 'Établissez une baseline', text: 'Exécutez votre ensemble de test et enregistrez la valeur de métrique comme baseline avant modifications.' },
          { '@type': 'HowToStep', name: 'Définissez le seuil d\'alerte de régression', text: 'Définissez la valeur minimale acceptable. Une chute > 5 points en taux de réussite bloque le déploiement.' },
          { '@type': 'HowToStep', name: 'Exécutez les métriques après chaque changement', text: 'Relancez l\'ensemble de test et comparez à la baseline à chaque modification du prompt, modèle ou température.' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: 'Points clés',
          items: [
            'Taux de réussite est la métrique la plus utile pour les prompts de production à sorties structurées',
            'Score BLEU mesure le chevauchement n-gramme, significatif seulement pour traduction et résumé',
            'Similarité sémantique surpasse BLEU pour paraphrases et reformulations',
            'LLM-as-Judge utilise GPT-5.5 ou Claude Opus pour noter les sorties libres à grande échelle',
            'Suivez le taux de réussite par version et alertez sur chutes > 5 points',
            'Pas une métrique unique pour tous — choisissez selon votre format de sortie',
          ],
        },
        definition: {
          title: 'Que sont les métriques d\'évaluation de prompts ?',
          content: '**Les métriques d\'évaluation de prompts sont des signaux quantitatifs indiquant si un prompt produit fiablement la sortie souhaitée sur l\'ensemble des entrées importantes.** Sans elles, l\'évaluation est subjective : deux ingénieurs examinant le même prompt sur différents exemples aboutissent à des conclusions différentes.\n\nLa bonne métrique dépend de ce que votre prompt produit. Un prompt d\'extraction JSON nécessite d\'autres métriques qu\'un prompt créatif. Quand vous choisissez la bonne métrique, vous pouvez [évaluer la qualité de manière systématique](/fr/prompt-engineering/how-to-evaluate-prompt-quality). Choisir mal produit des scores trompeurs masquant la vraie qualité de production.',
          snippets: [
            { type: 'in-one-sentence', text: 'Les métriques d\'évaluation de prompts sont des signaux quantitatifs mesurant si un prompt produit fiablement la sortie souhaitée sur un ensemble de test représentatif.' },
            { type: 'in-plain-terms', text: 'Pensez à elles comme des tests unitaires pour l\'IA : vous définissez ce que « correct » signifie, exécutez le prompt sur 20+ exemples, et mesurez le taux de réussite. 95% signifie 5% des demandes réelles échoueront.' }
          ],
          callouts: [
            { type: 'tip', label: 'Conseil professionnel', text: 'Commencez par le taux de réussite avant d\'ajouter des métriques complexes. Binaire correct/incorrect est souvent plus utile qu\'une échelle 1–5.' }
          ],
        },
        metricTypes: {
          title: 'Quelles métriques selon le type de sortie ?',
          content: '**Le type de sortie détermine la métrique valide. Appliquer BLEU sur JSON ou oui/non sur génération créative produit des scores dénués de sens.**',
          columns: ['Type de sortie', 'Métrique recommandée', 'Pourquoi'],
          rows: [
            { 'Type de sortie': 'JSON / données structurées', 'Métrique recommandée': 'Réussite/Échec binaire', 'Pourquoi': 'Soit valide + correct, soit non. Pas de points partiels.' },
            { 'Type de sortie': 'Classification', 'Métrique recommandée': 'Exactitude (binaire)', 'Pourquoi': 'Un label correct par entrée.' },
            { 'Type de sortie': 'Traduction / résumé', 'Métrique recommandée': 'BLEU ou ROUGE', 'Pourquoi': 'Texte de référence disponible pour comparaison.' },
            { 'Type de sortie': 'Paraphrase / reformulation', 'Métrique recommandée': 'Similarité sémantique', 'Pourquoi': 'Préserve le sens, pas la formulation.' },
            { 'Type de sortie': 'Texte libre / créatif', 'Métrique recommandée': 'LLM-as-Judge', 'Pourquoi': 'Rubrique nuancée nécessaire, pas de texte de référence.' },
            { 'Type de sortie': 'Génération de code', 'Métrique recommandée': 'Taux de réussite des tests', 'Pourquoi': 'Exécuter les tests unitaires sur le code généré.' },
          ],
          callouts: [
            { type: 'insight', label: 'Point important', text: 'Le type de sortie détermine le choix. L\'erreur la plus courante : appliquer BLEU sur non-traduction — il mesure le chevauchement de mots, pas la conformité de format.' }
          ],
        },
        passRate: {
          title: 'Qu\'est-ce que le taux de réussite et pourquoi est-il si utile ?',
          content: '**Le taux de réussite est le pourcentage d\'entrées de test où la sortie rencontre les critères de succès — et c\'est la métrique la plus utile car elle se traduit directement par le taux d\'erreur en production.** Un taux de 92% signifie 8% des demandes réelles échoueront.\n\nTaux de réussite = sorties réussies / nombre total de tests\n\nPour les sorties structurées, définissez « réussite » précisément avant les tests : JSON valide, champs obligatoires présents, valeurs dans l\'énumération admissible, longueur sous la limite. Pour la classification, « réussite » signifie le label correct est retourné.\n\nSuivez le taux de réussite par version de prompt. Une chute de plus de 5 points est une régression. Plus de 10 points bloque le déploiement en production. En avril 2026, PromptQuorum observe des taux médians de 88–94% pour les prompts d\'extraction JSON avec GPT-5.5 au premier déploiement. Quand vous [construisez une bibliothèque](/fr/prompt-engineering/build-a-prompt-library), établissez les baselines pour détecter les régressions.',
          callouts: [
            { type: 'warning', label: 'Attention', text: 'Taux de 90% = 10% des demandes échoueront. Fixez le seuil selon la tolérance au risque de production, pas selon ce qui paraît bien au tableau de bord.' }
          ],
        },
        bleu: {
          title: 'Score BLEU : quand l\'utiliser ?',
          content: '**BLEU (Bilingual Evaluation Understudy) mesure le chevauchement n-gramme entre une sortie modèle et un texte de référence.** C\'est la métrique standard pour la traduction automatique et convient pour toute tâche où la sortie doit correspondre étroitement à une référence.\n\nBLEU est trompeur pour :\n\n- **JSON ou sortie structurée :** BLEU note les tokens de format, pas la correction sémantique\n- **Exécution d\'instructions :** Un prompt obéissant à toutes les instructions mais paraphrasant différemment scores mal sur BLEU\n- **Génération créative :** BLEU pénalise la diversité lexicale même quand la qualité est haute\n\nQuand BLEU convient : traductions où une référence existe, résumés comparés à un résumé humain, QA extractif avec réponses verbatimes attendues.',
          callouts: [
            { type: 'note', label: 'Le saviez-vous ?', text: 'BLEU a été conçu en 2002 pour la traduction. Il a des limitations connues pour la génération ouverte mais reste le standard des benchmarks MT.' }
          ],
        },
        semanticSimilarity: {
          title: 'Similarité sémantique : comment ça marche ?',
          content: '**La similarité sémantique mesure la proximité du sens entre deux textes en calculant la similarité cosinus de leurs embeddings.** Elle surpasse BLEU pour les paraphrases et reformulations car elle capture le sens plutôt que le choix de mots.\n\nComment ça marche : Embeddez la sortie modèle et la référence avec OpenAI text-embedding-3-small ou un modèle d\'embedding local, puis calculez la similarité cosinus. Les scores > 0,85 indiquent généralement un contenu sémantiquement équivalent.\n\nLimitations : la similarité sémantique ne vérifie pas l\'exactitude factuelle, ne détecte pas les violations de format, et peut noter le contenu hallucciné haut si proche sémantiquement de la réponse attendue.',
          callouts: [
            { type: 'tip', label: 'Conseil professionnel', text: 'OpenAI text-embedding-3-small est le modèle le plus rapide et économique pour le scoring. Pour le contenu technique/code, envisagez un modèle d\'embedding spécialisé.' }
          ],
        },
        llmAsJudge: {
          title: 'LLM-as-Judge : l\'évaluation par modèle',
          content: '**LLM-as-Judge utilise un modèle capable — généralement GPT-5.5 ou Claude Opus 4.8 — pour noter les sorties selon une rubrique.** Cela scale l\'évaluation à des milliers de cas sans examen humain et gère les dimensions de qualité que les métriques binaires manquent : cohérence, ton, complétude, exactitude factuelle.\n\nL\'approche du juge requiert :\n\n1. Une rubrique détaillée (critères de notation par dimension)\n2. Un format de sortie structuré (par ex. JSON avec score + justification)\n3. Quand vous [testez les prompts sur plusieurs modèles](/fr/prompt-engineering/how-to-test-prompts-across-models), calibrez le juge contre les jugements humains pour votre tâche',
          columns: ['Dimension', 'Avantage', 'Limitation'],
          rows: [
            { 'Dimension': 'Scalabilité', 'Avantage': 'Milliers de cas par heure', 'Limitation': 'Le coût API augmente avec le volume' },
            { 'Dimension': 'Nuance', 'Avantage': 'Gère les rubriques complexes', 'Limitation': 'Biais du modèle vers son propre style' },
            { 'Dimension': 'Consistance', 'Avantage': 'Notation reproductible', 'Limitation': 'Sensible au libellé du prompt du juge' },
            { 'Dimension': 'Coût', 'Avantage': 'Moins cher que la révision humaine à l\'échelle', 'Limitation': 'Cher pour petits ensembles de test' },
          ],
          promptExamples: [
            {
              badLabel: 'Rubrique vague',
              bad: 'Notez la qualité de cette sortie de 1 à 5.',
              goodLabel: 'Rubrique multi-dimensionnelle explicite',
              good: 'Notez cette sortie sur 3 dimensions (1–3 chacune) : (1) Exactitude factuelle — correspond-elle aux faits de référence ? (2) Complétude — tous les champs obligatoires sont-ils couverts ? (3) Ton — est-ce approprié et professionnel ? Retournez JSON : {"accuracy": X, "completeness": X, "tone": X, "total": X, "reason": "..."}'
            }
          ],
          callouts: [
            { type: 'warning', label: 'Attention', text: 'LLM-as-Judge a un biais : les modèles notent les sorties similaires à leur style plus haut. Utilisez un modèle différent comme juge que celui qui génère.' }
          ],
        },
        regressionMetrics: {
          title: 'Comment détecter une régression de métriques ?',
          content: '**Suivez votre métrique primaire par version et alertez si elle baisse de plus de 5 points de la baseline établie.** Exécutez le même ensemble de test avant et après chaque changement de prompt, mise à jour de modèle ou ajustement de température.\n\nQuand vous implémentez [l\'audit de prompts et la détection du risque de régression](/fr/prompt-engineering/prompt-audit-and-regression-risk), suivez ce flux :\n\n1. Enregistrez le score actuel comme baseline (par ex. taux de réussite = 91%)\n2. Faites le changement de prompt\n3. Relancez l\'ensemble complet de test\n4. Comparez le nouveau score à la baseline\n5. Si chute > 5 points : bloquer, investiguer, corriger\n\nPour la détection automatisée dans CI/CD, des outils comme [Promptfoo](https://www.promptfoo.dev) s\'intègrent avec GitHub Actions et peuvent échouer une PR si le taux baisse.',
          callouts: [
            { type: 'practice', label: 'Bonne pratique', text: 'Intégrez Promptfoo avec GitHub Actions pour échouer automatiquement les PRs si le taux baisse. Cela prévient les régressions en production.' }
          ],
        },
        howToStart: {
          title: 'Par où commencer avec les métriques d\'évaluation ?',
          numberedItems: [
            'Identifiez votre type de sortie : données structurées, classification, traduction/résumé, paraphrase, texte libre ou code.',
            'Sélectionnez la métrique appropriée : réussite/échec pour structuré, BLEU pour traduction/résumé, similarité sémantique pour paraphrase, LLM-as-Judge pour texte libre, taux de test pour code.',
            'Construisez un ensemble de 20+ entrées avec sorties attendues ou critères de réussite définis avant les tests.',
            'Exécutez l\'ensemble et enregistrez votre baseline.',
            'Fixez un seuil d\'alerte : alertez si le taux baisse de 5+ points.',
            'Exécutez les métriques automatiquement sur chaque changement avec Promptfoo, Braintrust ou PromptQuorum.',
          ],
          callouts: [
            { type: 'insight', label: 'Point important', text: 'Construisez votre ensemble avant le prompt, non après. Les cas définis après tendent à correspondre au prompt actuel plutôt qu\'à la vraie distribution.' }
          ],
        },
        commonMistakes: {
          title: 'Erreurs courantes à éviter',
          items: [
            '**Erreur : BLEU sur JSON ou exécution d\'instructions.** Correction : BLEU mesure le chevauchement n-gramme, pas la conformité de format. Utilisez réussite/échec binaire pour structuré.',
            '**Erreur : LLM-as-Judge avec rubrique vague.** Correction : Le prompt du juge doit définir chaque niveau explicitement. Les rubriques vagues produisent des scores inconsistants sans valeur diagnostique.',
            '**Erreur : Pas de baseline avant le premier changement.** Correction : Enregistrez la valeur avant changements. Sans baseline, vous ne détectez pas les régressions.',
            '**Erreur : Mesurer une seule métrique.** Correction : Les prompts de production nécessitent une métrique primaire (réussite ou exactitude) et une secondaire (similarité ou LLM-as-Judge) pour différents modes de panne.',
          ],
        },
        relatedReading: {
          title: 'Lectures complémentaires',
          items: [
            '[Comment évaluer la qualité d\'un prompt](/fr/prompt-engineering/how-to-evaluate-prompt-quality) — Framework à trois composants : exactitude, consistance, taux de réussite',
            '[Tester les prompts sur plusieurs modèles](/fr/prompt-engineering/how-to-test-prompts-across-models) — Exécuter le même ensemble sur GPT-5.5, Claude et Gemini',
            '[Audit de prompt et risque de régression](/fr/prompt-engineering/prompt-audit-and-regression-risk) — Suites automatisées et portes CI/CD',
            '[Braintrust vs Prompthub vs Vellum](/fr/prompt-engineering/braintrust-vs-prompthub-vs-vellum) — Comparaison de plateformes d\'évaluation pour équipes',
            '[Meilleurs outils d\'évaluation de prompts 2026](/fr/prompt-engineering/best-prompt-testing-tools) — Outils classés pour QA systématique',
            '[Construire une bibliothèque de prompts](/fr/prompt-engineering/build-a-prompt-library) — Versionnement et organisation aux côtés des baselines',
          ],
        },
        faq: {
          title: 'Questions fréquentes',
          faqs: [
            { q: 'Que sont les métriques d\'évaluation de prompts ?', a: 'Ce sont des signaux quantitatifs mesurant si un prompt produit la sortie souhaitée fiablement. Les clés incluent taux de réussite (correct/incorrect), BLEU (chevauchement pour traduction/résumé), similarité sémantique (embeddings pour paraphrases) et LLM-as-Judge (rubrique modèle pour texte libre). Choisir mal produit des scores trompeurs.' },
            { q: 'Qu\'est-ce que le taux de réussite ?', a: 'Pourcentage d\'entrées de test où la sortie rencontre les critères de succès. C\'est la métrique la plus utile pour les sorties structurées car elle se traduit directement par le taux d\'erreur en production.' },
            { q: 'Quand utiliser BLEU ?', a: 'BLEU convient pour traduction et résumé où la sortie doit correspondre à une référence. Il est trompeur pour JSON, instructions et créatif car il mesure le chevauchement de mots, pas la correction sémantique. Un prompt correct avec formulation différente scores près de zéro malgré la fonctionnalité.' },
            { q: 'Qu\'est-ce que LLM-as-Judge ?', a: 'Utilise GPT-5.5 ou Claude Opus pour noter les sorties selon une rubrique à l\'échelle. Gère les dimensions que les métriques binaires manquent. Principal risque : biais du modèle vers son propre style.' },
            { q: 'Comment détecter une régression ?', a: 'Suivez la métrique primaire par version et alertez si elle baisse de plus de 5 points. Flux : enregistrer avant, faire le changement, relancer les tests, comparer. Plus de 5 points bloque, plus de 10 est critique.' },
            { q: 'Quelle métrique pour JSON ?', a: 'Utilisez réussite/échec binaire. Définissez réussite comme JSON valide + champs obligatoires + valeurs autorisées. BLEU et similarité sémantique ne sont pas significatifs pour structuré.' },
            { q: 'Combiner des métriques ?', a: 'Oui — production nécessite généralement une primaire (taux pour structuré, exactitude pour classification) et une secondaire (similarité ou LLM-as-Judge) pour différents modes de panne. JSON peut avoir 100% réussite mais valeurs sémantiquement fausses. Suivez les deux indépendamment.' },
            { q: 'Évaluer la génération de code ?', a: 'Utilisez taux de réussite de test comme primaire — générez, testez unitaires, calculez le pourcentage qui passe. Plus fiable que BLEU car le code peut être fonctionnellement correct avec syntaxe différente. Complétez avec scores d\'analyse statique.' },
            { q: 'Qu\'en est-il du RGPD ?', a: 'Le RGPD exige la documentation de la qualité IA. Les métriques et ensembles doivent être enregistrés comme dossiers. L\'inférence locale satisfait les exigences de résidence. Pour CNIL, l\'inférence locale est recommandée pour données sensibles professionnelles.' },
            { q: 'Défis spécifiques à la France ?', a: 'Respectez la directive CNIL sur l\'IA. Pour PME légale/financière, documentez le taux comme preuve de contrôle. L\'évaluation sur texte français nécessite attention aux nuances. Établissez baselines séparées car BLEU et seuils diffèrent du contenu anglais.' },
          ],
        },
        regionalConsiderations: {
          title: 'Facteurs régionaux et obligations réglementaires',
          content: '**Les cadres réglementaires exigent de plus en plus des métriques documentées, avec obligations spécifiques selon la juridiction et la classification de risque.**\n\n- **UE (AI Act 2025–2026) :** Les systèmes IA à haut risque doivent démontrer des tests documentés avec métriques de qualité quantitatives. Les enregistrements d\'évaluation — ensembles, taux, baselines — fournissent des preuves auditables pour les exigences de transparence.\n\n- **USA (SOC 2 / NIST AI RMF) :** Les audits SOC 2 Type II attendent l\'assurance qualité documentée. Les métriques d\'évaluation avec historique de version satisfont les exigences de gestion des changements et de contrôle qualité.\n\n- **France (CNIL) :** Les directives CNIL recommandent l\'inférence locale pour les données professionnelles sensibles. Documentez le taux de réussite et les baselines comme preuve de gestion des risques.\n\n- **Évaluation multilingue :** En déployant sur plusieurs langues, évaluez chaque variante séparément. Les seuils BLEU et similarité diffèrent significativement entre paires. Un prompt à 0,92 en anglais peut être 0,78 en français due aux différences syntaxiques.',
        },
        sources: {
          title: 'Sources',
          items: [
            '[Documentation Promptfoo (promptfoo.dev)](https://www.promptfoo.dev) — Framework open-source avec métriques intégrées incluant LLM-as-Judge',
            '[Guide d\'évaluation Braintrust (braintrust.dev)](https://www.braintrust.dev) — Plateforme de production supportant taux de réussite, LLM-as-Judge et scoring personnalisé',
            '[Papineni et al., 2002. "BLEU: a Method for Automatic Evaluation of Machine Translation"](https://aclanthology.org/P02-1040.pdf) — Article original BLEU',
            '[DeepEval : Framework LLM Open-Source (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Supporte taux de réussite, détection hallucinations et LLM-as-Judge avec intégration CI/CD.',
            '[The Prompt Report: A Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Survol complet incluant méthodologie et sélection de métrique.',
          ],
        },
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'プロンプト評価指標：合格率・BLEUスコア・LLM-as-Judgeの選び方',
      seoTitle: 'プロンプト評価メトリクス：Pass Rate・BLEU・LLM-as-Judge（2026年）',
      metaDescription: '出力タイプ別のプロンプト評価メトリクス：JSONにはPass Rate、翻訳にはBLEU、言い換えにはSemantic Similarity、自由文にはLLM-as-Judge。',
      ogDescription: '出力タイプに合ったプロンプト評価メトリクスを選択。Pass Rate、BLEU、Semantic Similarity、LLM-as-Judgeを比較し、リグレッション検出ワークフローも解説。',
      twitterDescription: 'Pass Rate、BLEU、LLM-as-Judge — 出力タイプ別にプロンプト評価メトリクスを選ぶフレームワーク。リグレッション検出付き。',
      intro: 'プロンプトに間違った評価指標を選ぶと、本番環境の真の問題を隠す誤解を招く結果が生じます。BLEUスコアはJSON出力には意味がありません。二値判定は微妙な生成品質についてなにも説明しません。適切な指標はプロンプトが何を生成するかに完全に依存します。',
      publishDate: '2026-04-10',
      dateModified: '2026-04-10',
      readTime: '8分で読める',
      educationalLevel: 'Intermediate',
      audience: '本番環境でLLMsを導入している開発者およびチーム',
      primaryTerm: 'プロンプト評価指標',
      aboutTopics: ['合格率', 'BLEUスコア', 'LLM-as-Judge'],
      next_refresh_due: '2026-10-10',
      leadAnswerBlock: '**プロンプト評価指標は、プロンプトが意図した出力を確実に生成するかを測定する定量的シグナルです。** 正しい指標はあなたの出力タイプに依存します：構造化データには合格率、翻訳にはBLEU、言い換えには意味的類似度、微妙な自由記述生成にはLLM-as-Judgeです。',
      quickFacts: [
        '合格率90% = 本番リクエストの10%が失敗する',
        'BLEUスコアは2002年に機械翻訳用に設計された、汎用AI出力用ではない',
        '意味的類似度0.85超は通常、意味的に等価なコンテンツを示す',
        'LLM-as-Judgeは1時間で数千の評価に拡張可能',
        '合格率の5ポイント低下は標準的な回帰アラート閾値',
        'GPT-5.5とClaudeモデルは同じプロンプトテストセットで10–20ポイント異なる可能性がある',
      ],
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'プロンプト評価指標とは何か？', anchor: '#definition' },
        { label: '出力タイプ別：指標の選び方', anchor: '#metric-types' },
        { label: '合格率：最も有用な指標', anchor: '#pass-rate' },
        { label: 'BLEUスコアの使いどころ', anchor: '#bleu' },
        { label: '意味的類似度スコアリング', anchor: '#semantic-similarity' },
        { label: 'LLM-as-Judgeによる評価', anchor: '#llm-as-judge' },
        { label: 'メトリクス回帰の検出', anchor: '#regression-metrics' },
        { label: 'はじめ方', anchor: '#how-to-start' },
        { label: 'よくある間違い', anchor: '#common-mistakes' },
        { label: '地域別の規制要件', anchor: '#regional-considerations' },
        { label: 'よくある質問', anchor: '#faq' },
        { label: '参考文献', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'プロンプト評価指標：合格率・BLEUスコア・LLM-as-Judgeの選び方',
        description: 'プロンプト評価指標には合格率、BLEUスコア、意味的類似度、LLM-as-Judge評点が含まれます。',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-10',
        url: 'https://www.promptquorum.com/ja/prompt-engineering/prompt-evaluation-metrics',
        inLanguage: 'ja',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: '合格率' },
          { '@type': 'Thing', name: 'BLEUスコア' },
          { '@type': 'Thing', name: 'LLM-as-Judge' },
          { '@type': 'Thing', name: '意味的類似度' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        audience: { '@type': 'Audience', audienceType: '本番環境でLLMsを導入している開発者およびチーム' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          { '@type': 'Question', name: 'プロンプト評価指標とは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプト評価指標は、プロンプトが意図した出力を確実に生成するかを測定する定量的シグナルです。重要な指標には合格率（正誤二値）、BLEUスコア（翻訳・要約用n-gram重複）、意味的類似度（言い換え用埋め込みコサイン類似度）、LLM-as-Judge（フリーテキスト用モデル評点）が含まれます。出力タイプに間違った指標を選ぶと、誤解を招くスコアが生じます。' } },
          { '@type': 'Question', name: 'プロンプト評価における合格率とは？', acceptedAnswer: { '@type': 'Answer', text: '合格率は、定義された成功基準を満たすテスト入力の割合です。合格率 = 合格出力 / テストケース総数。構造化出力に対して最も実用的な指標です。本番環境の失敗率に直結するからです。' } },
          { '@type': 'Question', name: 'プロンプトにBLEUスコアをいつ使うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'BLEUは翻訳・要約など、出力が参照テキストと密接に一致すべき場合に適切です。JSON生成、命令遵守、創作文には誤解を招きます。単語n-gram重複を測定し、形式遵守や意味的正確性は測定しないためです。例えば、正しい構造を返すがフレーズが異なるJSON抽出プロンプトは、機能的に正確なのにBLEUでほぼゼロになります。' } },
          { '@type': 'Question', name: 'LLM-as-Judge評価とは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-JudgeはGPT-5.5やClaude Opus 4.8などの高性能モデルを使い、ルーブリックに基づいて出力を評点します。人間の審査なしに数千のテストケースに拡張でき、二値指標では捉えられない品質次元を扱います。主なリスクはモデルバイアス：判定者が自身のスタイルと類似した出力を高く評価する傾向があります。' } },
          { '@type': 'Question', name: 'プロンプト指標の回帰をどのように検出しますか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトバージョンごとに主要指標を追跡し、確立されたベースラインから5ポイント以上低下したらアラートを出します。ワークフロー：変更前に指標を記録し、変更を実施し、完全なテストセットを再実行し、ベースラインと比較します。5ポイント以上の低下は展開をブロックします。10ポイント以上は調査が必要な重大回帰です。' } },
          { '@type': 'Question', name: 'JSON出力プロンプトにはどの指標を使うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'JSON出力プロンプトには二値合格/不合格を使用します。合格を以下のように定義します：有効なJSON + 必須フィールド存在 + 値は許可範囲内。BLEUと意味的類似度は構造化出力には意味がありません。' } },
          { '@type': 'Question', name: '複数のプロンプト評価指標を組み合わせられますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい—本番プロンプトは通常、主要指標（構造化には合格率、分類には正確度）と副次指標（意味的類似度またはLLM-as-Judge）が必要です。異なる障害モードを捉えるためです。JSON抽出プロンプトは合格率100%でも意味的に誤った値を生じる可能性があり、副次検査だけで検出されます。両方を独立して追跡し、どちらかが閾値を下回ったらアラートを出します。' } },
          { '@type': 'Question', name: 'コード生成プロンプトの品質をどのように評価しますか？', acceptedAnswer: { '@type': 'Answer', text: 'テスト合格率を主要指標として使用します—コードを生成し、ユニットテストを実行し、合格率を計算します。BLEUや意味的類似度より信頼性が高いです。コードは完全に異なる構文でも機能的に正確になる可能性があるためです。静的解析スコア（リント警告、セキュリティ検出）で補足すると、より完全な品質像が得られます。' } },
          { '@type': 'Question', name: 'プロンプト評価指標を使用する際、個人情報の取り扱いについて注意すべきことはありますか？', acceptedAnswer: { '@type': 'Answer', text: '日本の個人情報保護方針では、AI評価セット（テストデータ）の取り扱いに注意が必要です。METI AI Governance Guidelines 2024に基づき、評価データが個人情報を含む場合、ローカルで評価（サードパーティAPI非使用）することで、データ遵守要件を満たします。評価メトリクスと結果をセキュアに記録し、監査証跡を維持してください。' } },
          { '@type': 'Question', name: 'アジア太平洋地域でのプロンプト評価における注意点は何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'APAC地域の多くの国はデータ越境に関する厳格な規制を持っています。評価ログがサードパーティのクラウドサービスに送信される場合、複数国のデータレジデンス要件に準拠する必要があります。ローカルLLMおよびローカル評価インフラを検討してください。中国、日本、シンガポール、インドなど各国の個別要件に対応する必要があります。' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'ja',
        name: 'プロンプト評価指標を選択し適用する方法',
        step: [
          { '@type': 'HowToStep', name: '出力タイプを特定する', text: 'プロンプト出力を構造化データ（JSON、CSV）、自由記述（要約、説明）、またはコードに分類します。出力タイプが適用可能な指標を決定します。' },
          { '@type': 'HowToStep', name: '正しい指標を選択する', text: '構造化出力：二値合格/不合格。翻訳/要約：BLEUまたはROUGE。言い換え：意味的類似度。微妙な生成：LLM-as-Judge。' },
          { '@type': 'HowToStep', name: 'ベースラインを確立する', text: 'テストセットを実行し、プロンプト変更前に指標値をベースラインとして記録します。' },
          { '@type': 'HowToStep', name: '回帰アラート閾値を設定する', text: '許容可能な最小指標値を定義します。合格率が5ポイント以上低下したら展開をブロックします。' },
          { '@type': 'HowToStep', name: 'プロンプト変更後に毎回指標を実行する', text: 'テストセットを再実行し、プロンプトテキスト、モデル、温度が変わるたびにベースラインと比較します。' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: '重要ポイント',
          items: [
            '合格率は構造化出力を持つ本番プロンプトで最も実用的な指標です',
            'BLEUスコアはn-gram重複を測定し、翻訳・要約タスクでのみ意味があります',
            '意味的類似度は言い換えと言い直しタスクでBLEUを上回ります',
            'LLM-as-JudgeはGPT-5.5やClaude Opus 4.8を使い、微妙な自由記述を大規模に評点します',
            'プロンプトバージョンごとに合格率を追跡し、5ポイント超の低下でアラートを出します',
            '単一の指標がすべての出力タイプを網羅しません。出力形式に基づいて選択します',
          ],
        },
        definition: {
          title: 'プロンプト評価指標とは何か？',
          content: '**プロンプト評価指標は、プロンプトが重要な入力全体にわたって意図した出力を確実に生成するかを示す定量的シグナルです。** 指標がなければプロンプト評価は主観的になります。異なる例に対して同じプロンプトを検討する2人のエンジニアは異なる結論に達します。\n\n正しい指標はプロンプトが何を生成すべきかに依存します。JSON抽出プロンプトは創作文プロンプトとは異なる指標が必要です。正しい指標をタスク用に選ぶと、[プロンプト品質を体系的に評価できます](/ja/prompt-engineering/how-to-evaluate-prompt-quality)。間違った指標を選ぶと、本当の本番環境品質について何も言わない誤解を招くスコアが生じます。',
          snippets: [
            { type: 'in-one-sentence', text: 'プロンプト評価指標は、プロンプトが代表的なテストセット全体にわたって意図した出力を確実に生成するかを測定する定量的シグナルです。' },
            { type: 'in-plain-terms', text: 'AIのためのユニットテストのように考えてください：「正しい」が何を意味するかを定義し、20以上の例でプロンプトを実行し、合格率を評点します。95%のスコアは実際のユーザーリクエストの5%が失敗することを意味します。' }
          ],
          callouts: [
            { type: 'tip', label: 'プロのコツ', text: '複雑な指標を追加する前に合格率から始めてください。正誤二値は通常、1–5スケールより実用的です。' }
          ],
        },
        metricTypes: {
          title: '出力タイプ別：適切なメトリクスの選び方',
          content: '**出力タイプが有効な指標を決定します。JSON上でBLEUを適用するか、創作生成で合格/不合格を適用すると、意味がないスコアが生じます。**',
          columns: ['出力タイプ', '推奨メトリクス', '理由'],
          rows: [
            { '出力タイプ': 'JSON / 構造化データ', '推奨メトリクス': '二値合格/不合格', '理由': '有効+正確か否か。部分点なし。' },
            { '出力タイプ': '分類', '推奨メトリクス': '正確度（二値）', '理由': '入力ごとに1つの正しいラベル。' },
            { '出力タイプ': '翻訳 / 要約', '推奨メトリクス': 'BLEUまたはROUGE', '理由': '参照テキスト比較用に利用可能。' },
            { '出力タイプ': '言い換え / 言い直し', '推奨メトリクス': '意味的類似度', '理由': '意味保存、言葉そのままではない。' },
            { '出力タイプ': '自由記述 / 創作', '推奨メトリクス': 'LLM-as-Judge', '理由': '微妙なルーブリック必要、参照テキストなし。' },
            { '出力タイプ': 'コード生成', '推奨メトリクス': 'テスト合格率', '理由': '生成コードに対してユニットテストを実行。' },
          ],
          callouts: [
            { type: 'insight', label: '重要ポイント', text: '出力タイプが選択を駆動します。最も一般的な誤りは非翻訳タスクにBLEUを適用することです—単語重複を測定し、形式遵守ではなく。' }
          ],
        },
        passRate: {
          title: '合格率とは？なぜ最も有用な指標なのか？',
          content: '**合格率は、定義された成功基準を満たすテスト入力の割合です。最も実用的な指標です。本番環境の失敗率に直結するからです。** 92%の合格率は、実際のユーザーリクエストの8%が失敗することを意味します。\n\n合格率 = 合格出力 / テストケース総数\n\n構造化出力の場合、テスト前に「合格」を正確に定義してください：有効なJSON、必須フィールド存在、列挙値内の値、指定限度以下の長さ。分類の場合、「合格」は正しいラベルが返されたことを意味します。\n\nプロンプトバージョンごとに合格率を追跡します。5ポイント以上の低下は回帰です。10ポイント以上の低下は本番デプロイをブロックすべきです。2026年4月時点で、PromptQuorumは初回デプロイでGPT-5.5 JSON抽出プロンプトで88–94%の中央合格率を観察しています。[プロンプトライブラリを構築する](/ja/prompt-engineering/build-a-prompt-library)場合、各プロンプトのベースライン合格率を確立して回帰を検出してください。',
          callouts: [
            { type: 'warning', label: '警告', text: '90%の合格率は実際のリクエストの10%が失敗することを意味します。本番環境リスク許容度に基づいて回帰閾値を設定してください。ダッシュボードで良く見えるもので設定しないでください。' }
          ],
        },
        bleu: {
          title: 'BLEUスコアの使いどころ',
          content: '**BLEU（Bilingual Evaluation Understudy）はモデル出力と参照テキスト間のn-gram重複を測定します。** 機械翻訳の標準指標で、出力が参照と密接に一致すべきあらゆるタスクに適切です。\n\nBLEUが誤解を招く場合 ：\n\n- **JSONまたは構造化出力：** BLEUはフォーマットトークンを評点し、意味的正確性ではなく\n- **命令遵守：** すべての命令に従うが異なるフレーズを使うプロンプトはBLEUで低スコアになる\n- **創作生成：** BLEUは品質が高いときでも辞書の多様性にペナルティを与える\n\nBLEUが適切な場合：参照が存在する翻訳タスク、人間が書いた要約との比較、予想される逐語的回答を含むQA抽出。',
          callouts: [
            { type: 'note', label: '知っていましたか？', text: 'BLEUは2002年に機械翻訳用に設計されました。オープンエンド生成に対して既知の制限がありますが、MTベンチマークの標準です。' }
          ],
        },
        semanticSimilarity: {
          title: '意味的類似度スコアリングとは？',
          content: '**意味的類似度は、埋め込みのコサイン類似度を計算することで、2つのテキストの意味がどの程度近いかを測定します。** 言葉の選択ではなく意味を捉えるため、言い換え・言い直しタスクでBLEUを上回ります。\n\n動作方法：OpenAI text-embedding-3-smallまたはローカル埋め込みモデルを使用してモデル出力と参照を埋め込み、コサイン類似度を計算します。0.85超のスコアは通常、意味的に等価なコンテンツを示します。\n\n制限事項：意味的類似度は事実正確性をチェックしません、形式違反を検出しません、期待する回答に意味的に類似したハルシネーション内容を高く評点する可能性があります。',
          callouts: [
            { type: 'tip', label: 'プロのコツ', text: 'OpenAI text-embedding-3-smallは類似度評点用に最速かつ最も経済的なモデルです。技術的/コード内容は、コード特化埋め込みモデルを検討してください。' }
          ],
        },
        llmAsJudge: {
          title: 'LLM-as-Judgeによる評価',
          content: '**LLM-as-JudgeはGPT-5.5やClaude Opus 4.8などの高性能モデルを使用してルーブリックに基づいて出力を評点します。** これにより評価が数千のテストケースに拡張可能になり、人間の審査なしで、二値指標では捉えられない品質次元を扱います。一貫性、トーン、完全性、事実的正確性。\n\nJudgeアプローチには以下が必要です ：\n\n1. 詳細なルーブリック（次元ごとに評点基準）\n2. 構造化出力形式（例：スコア + 正当性を含むJSON）\n3. [複数モデル間でプロンプトをテストする](/ja/prompt-engineering/how-to-test-prompts-across-models)場合、あなたの特定タスクに対してJudgeを人間の判定と校正します',
          columns: ['評価軸', 'メリット', 'デメリット'],
          rows: [
            { '評価軸': '拡張性', 'メリット': '1時間に数千ケース', 'デメリット': 'API費用はボリュームで増加' },
            { '評価軸': '微妙性', 'メリット': '複雑なルーブリックを扱う', 'デメリット': '自身の出力スタイルへのモデルバイアス' },
            { '評価軸': '一貫性', 'メリット': '再現可能な評点', 'デメリット': 'Judge プロンプト表現に敏感' },
            { '評価軸': 'コスト', 'メリット': '大規模では人間審査より安い', 'デメリット': '小テストセットには高い' },
          ],
          promptExamples: [
            {
              badLabel: '曖昧なルーブリック',
              bad: 'この出力の品質を1から5のスケールで評価します。',
              goodLabel: '明示的な多次元ルーブリック',
              good: 'この出力を3つの次元（各1–3）で評価してください：（1）事実的正確性—参照事実と一致しているか？（2）完全性—すべての必須フィールドに対応しているか？（3）トーン—適切に専門的か？JSON返す：{"accuracy": X, "completeness": X, "tone": X, "total": X, "reason": "..."}'
            }
          ],
          callouts: [
            { type: 'warning', label: '警告', text: 'LLM-as-Judgeには自己バイアスがあります。モデルは自身のスタイルに似た出力をより高く評点します。出力生成モデルと異なるモデルをJudgeとして使用してください。' }
          ],
        },
        regressionMetrics: {
          title: 'メトリクスの回帰をどのように検出するか？',
          content: '**プロンプトバージョンごとに主要指標を追跡し、確立されたベースラインから5ポイント以上低下したらアラートを出します。** プロンプト変更、モデル更新、温度調整のたびに変更前後で同じテストセットを実行します。\n\n[プロンプト監査と回帰リスク](/ja/prompt-engineering/prompt-audit-and-regression-risk)検出を実装するとき、このワークフローに従ってください ：\n\n1. 現在の指標スコアをベースラインとして記録（例：合格率 = 91%）\n2. プロンプト変更を実施\n3. 完全なテストセットを再実行\n4. 新しいスコアをベースラインと比較\n5. 低下 > 5ポイント：ブロック、調査、修正\n\nCI/CDで自動回帰検出するために、[Promptfoo](https://www.promptfoo.dev)などのツールはGitHub Actionsと統合し、合格率が閾値を下回ったときPRを失敗させます。',
          callouts: [
            { type: 'practice', label: 'ベストプラクティス', text: 'PromptfooをGitHub Actionsと統合して、合格率が閾値を下回ったときPRを自動的に失敗させてください。これはプロンプト回帰がプロダクションに到達するのを防ぎます。' }
          ],
        },
        howToStart: {
          title: 'プロンプト評価指標の始め方',
          numberedItems: [
            'プロンプト出力タイプを特定：構造化データ、分類、翻訳/要約、言い換え、自由記述、またはコード。',
            '適切な指標を選択：構造化には合格/不合格、翻訳/要約にはBLEU、言い換えには意味的類似度、自由記述にはLLM-as-Judge、コードにはテスト合格率。',
            '20以上の入力と期待される出力またはテスト前に書かれた成功基準を含むテストセットを構築します。',
            'テストセットを実行し、ベースライン指標スコアを記録します。',
            '回帰アラート閾値を設定：合格率が5ポイント以上低下したらアラート。',
            'Promptfoo、Braintrust、またはPromptQuorumを使用して毎回のプロンプト変更で指標を自動実行。',
          ],
          callouts: [
            { type: 'insight', label: '重要ポイント', text: 'プロンプト後ではなく、前にテストセットを構築してください。事後定義のテストケースは現在のプロンプトと一致する傾向があります。本来の入力分布ではなく。' }
          ],
        },
        commonMistakes: {
          title: 'よくある間違いと対策',
          items: [
            '**間違い：JSONまたは命令遵守にBLEUを使用。** 修正：BLEUはn-gram重複を測定し、形式遵守や命令遵守ではなく。構造化出力には二値合格/不合格を使用。',
            '**間違い：曖昧なルーブリックでLLM-as-Judge。** 修正：Judgeプロンプトは各スコアレベルを明示的に定義する必要があります。「品質を1–5で評価」は一貫性のないスコアと診断価値なしを生じます。',
            '**間違い：最初の変更前にベースラインなし。** 修正：変更前に指標値を記録してください。ベースラインなしに回帰を検出できません。',
            '**間違い：単一指標のみを測定。** 修正：本番プロンプトは通常、主要指標（合格率または正確度）と副次指標（意味的類似度またはLLM-as-Judge）を必要とし、異なる障害モードを捉えます。',
          ],
        },
        relatedReading: {
          title: '関連資料',
          items: [
            '[プロンプト品質を評価する方法](/ja/prompt-engineering/how-to-evaluate-prompt-quality) — 3成分フレームワーク：正確度、一貫性、命令遵守率',
            '[複数モデル間でプロンプトをテストする](/ja/prompt-engineering/how-to-test-prompts-across-models) — GPT-5.5、Claude、Geminiで同じテストセットを実行',
            '[プロンプト監査と回帰リスク](/ja/prompt-engineering/prompt-audit-and-regression-risk) — 自動回帰スイートとCI/CDゲート',
            '[Braintrust vs Prompthub vs Vellum](/ja/prompt-engineering/braintrust-vs-prompthub-vs-vellum) — チーム向け評価プラットフォーム比較',
            '[最高のプロンプトテスト・評価ツール2026](/ja/prompt-engineering/best-prompt-testing-tools) — 体系的プロンプトQA用ツールランキング',
            '[プロンプトライブラリを構築する](/ja/prompt-engineering/build-a-prompt-library) — 評価ベースラインとともにプロンプトをバージョニング・整理',
          ],
        },
        faq: {
          title: 'よくある質問',
          faqs: [
            { q: 'プロンプト評価指標とは何ですか？', a: 'プロンプトが意図した出力を確実に生成するかを測定する定量的シグナルです。重要な指標：合格率（正誤）、BLEUスコア（翻訳・要約用n-gram）、意味的類似度（言い換え用埋め込みコサイン）、LLM-as-Judge（フリーテキスト用モデル評点）。出力タイプに間違った指標を選ぶと誤解を招くスコアになります。' },
            { q: 'プロンプト評価における合格率とは何ですか？', a: 'テスト入力で定義された成功基準を満たす割合です。本番環境の失敗率に直結し、構造化出力プロンプトで最も実用的な指標です。' },
            { q: 'プロンプトにBLEUスコアをいつ使うべきですか？', a: '翻訳・要約で参照テキストと出力が密接に一致すべき場合に使います。JSON、命令遵守、創作には誤解を招きます。n-gram単語重複を測定し、形式遵守や意味的正確性ではないからです。例：正しい構造を返すが異なるフレーズのJSON抽出プロンプトはBLEUでほぼゼロなのに機能的に正確です。' },
            { q: 'LLM-as-Judge評価とは何ですか？', a: 'GPT-5.5やClaude Opus 4.8でルーブリックに基づいて出力を評点し、大規模に拡張します。二値指標では捉えられない品質次元を扱います。主なリスクはモデルバイアス：判定者が自身のスタイルに似た出力を優先する傾向。' },
            { q: 'プロンプト指標の回帰をどのように検出しますか？', a: 'バージョンごとに主要指標を追跡し、ベースラインから5ポイント以上低下でアラート。フロー：変更前に記録、変更実施、テスト再実行、ベースラインと比較。5ポイント超は展開をブロック、10ポイント超は調査が必要な重大回帰です。' },
            { q: 'JSON出力プロンプトにはどの指標を使うべきですか？', a: '二値合格/不合格を使用。合格を以下のように定義：有効なJSON + 必須フィールド + 値は許可範囲。BLEUと意味的類似度は構造化出力には意味がありません。' },
            { q: '複数のプロンプト評価指標を組み合わせられますか？', a: 'はい—本番プロンプトは主要指標（構造化には合格率、分類には正確度）と副次指標（意味的類似度またはLLM-as-Judge）が必要です。JSON抽出は合格率100%でも意味的に誤った値を生じ、副次検査だけで検出。両方を独立追跡し、どちらかが閾値を下回ったらアラート。' },
            { q: 'コード生成プロンプトの品質をどのように評価しますか？', a: 'テスト合格率を主要指標として使用—コード生成、ユニットテスト実行、合格率計算。BLEUや意味的類似度より信頼性が高い。コードは完全に異なる構文でも機能的に正確になる可能性があるため。静的解析スコア（リント、セキュリティ検出）で補足。' },
            { q: 'プロンプト評価指標を使用する際、個人情報の取り扱いについて注意すべきことはありますか？', a: '日本の個人情報保護では、AI評価セットの取り扱いに注意が必要です。METI AI Governance Guidelines 2024に基づき、個人情報を含むデータはローカル評価（サードパーティAPI非使用）で遵守要件を満たします。メトリクス結果をセキュアに記録し、監査証跡を維持。' },
            { q: 'アジア太平洋地域でのプロンプト評価における注意点は何ですか？', a: 'APAC地域はデータ越境に厳格な規制があります。評価ログがサードパーティクラウドに送信される場合、複数国のデータレジデンス要件に準拠必要。ローカルLLMとローカル評価インフラを検討。中国、日本、シンガポール、インド各国の個別要件に対応してください。' },
          ],
        },
        regionalConsiderations: {
          title: '地域別の規制要件とプロンプト評価',
          content: '**規制枠組みはますますAI品質メトリクスの記録を要求し、管轄区域とリスク分類に応じた具体的義務があります。**\n\n- **METI AI Governance Guidelines 2024（日本）：** 経済産業省のガイドラインでは、AI評価とモニタリングの記録が推奨されています。プロンプト評価メトリクス、テストセット、回帰ベースラインは、AI品質管理の証拠として機能します。\n\n- **EU AI Act 2025–2026：** 高リスク AI システムは定量的品質メトリクスを用いた記録されたテストを実証する必要があります。プロンプト評価記録はAI Act透明性要件の監査対応証拠を提供します。\n\n- **データセキュリティ法（中国）：** 中国でのプロンプト評価ログ（個人データを含む可能性あり）はオンショア保持する必要があります。ローカルLLMと在中評価インフラを検討。\n\n- **多言語評価：** プロンプトを複数言語で展開する場合、言語バリアントごとに別途評価します。BLEUスコアと意味的類似度閾値は言語ペア間で大きく異なります。英語で0.92の類似度は、文法的違いのため日本語で0.75になる可能性があります。',
        },
        sources: {
          title: '参考文献',
          items: [
            '[Promptfooドキュメント（promptfoo.dev）](https://www.promptfoo.dev) — オープンソースプロンプト評価フレームワーク、LLM-as-Judge含む内蔵メトリクス',
            '[Braintrust評価ガイド（braintrust.dev）](https://www.braintrust.dev) — 本番環境評価プラットフォーム、合格率、LLM-as-Judge、カスタムスコアリング対応',
            '[Papineni et al., 2002. "BLEU: a Method for Automatic Evaluation of Machine Translation"](https://aclanthology.org/P02-1040.pdf) — 元のBLEU論文',
            '[DeepEval：オープンソースLLM評価フレームワーク（github.com/confident-ai/deepeval）](https://github.com/confident-ai/deepeval) — Confident AI、2024–2025。合格率、幻覚検出、LLM-as-Judgeメトリクス、CI/CD統合対応。',
            '[The Prompt Report：Prompting Techniquesの体系的調査（arXiv:2406.06608）](https://arxiv.org/abs/2406.06608) — Schulhoff et al.、2024。評価方法とメトリクス選択含む包括的調査。',
          ],
        },
      },
    },
    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: '提示词评估指标：通过率、BLEU与LLM-as-Judge的选择指南',
      seoTitle: 'Prompt评估指标：Pass Rate、BLEU与LLM-as-Judge（2026）',
      metaDescription: '按输出类型选择Prompt评估指标：JSON用Pass Rate，翻译用BLEU，改写用语义相似度，自由文本用LLM-as-Judge。含回归检测流程。',
      ogDescription: '按输出类型选择正确的Prompt评估指标。对比Pass Rate、BLEU、语义相似度和LLM-as-Judge，附带回归检测工作流。',
      twitterDescription: 'Pass Rate、BLEU还是LLM-as-Judge？按输出类型选对Prompt评估指标。附回归检测与告警框架。',
      intro: '为提示词选择错误的评估指标会产生误导性的结果，掩盖真实的生产故障。BLEU分数对JSON输出没有意义。二值通过/失败对微妙的生成质量无法说明任何事。正确的指标完全取决于你的提示词生成什么。',
      publishDate: '2026-04-10',
      dateModified: '2026-04-10',
      readTime: '阅读约8分钟',
      educationalLevel: 'Intermediate',
      audience: '在生产环境中部署LLM的开发者和团队',
      primaryTerm: '提示词评估指标',
      aboutTopics: ['通过率', 'BLEU分数', 'LLM-as-Judge'],
      next_refresh_due: '2026-10-10',
      leadAnswerBlock: '**提示词评估指标是定量信号，用于衡量提示词是否可靠地生成预期输出。** 正确的指标取决于你的输出类型：结构化数据用通过率、翻译用BLEU、改写用语义相似度、微妙自由文本生成用LLM-as-Judge。',
      quickFacts: [
        '通过率90% = 生产请求的10%会失败',
        'BLEU分数设计于2002年用于机器翻译，而非通用AI输出',
        '语义相似度0.85以上通常表示语义等价的内容',
        'LLM-as-Judge可扩展到每小时数千次评估',
        '通过率下降5点是标准的回归警报阈值',
        'GPT-5.5和Claude模型在相同提示词测试集上可能相差10–20点',
      ],
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: '什么是提示词评估指标？', anchor: '#definition' },
        { label: '不同输出类型适用哪些评估指标？', anchor: '#metric-types' },
        { label: '通过率：为什么是最实用的指标？', anchor: '#pass-rate' },
        { label: 'BLEU分数：适用场景与局限性', anchor: '#bleu' },
        { label: '语义相似度评分', anchor: '#semantic-similarity' },
        { label: 'LLM-as-Judge评估方法', anchor: '#llm-as-judge' },
        { label: '如何检测指标回归？', anchor: '#regression-metrics' },
        { label: '如何开始使用提示词评估指标', anchor: '#how-to-start' },
        { label: '常见错误与解决方案', anchor: '#common-mistakes' },
        { label: '地区合规要求与提示词评估', anchor: '#regional-considerations' },
        { label: '常见问题', anchor: '#faq' },
        { label: '参考来源', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '提示词评估指标：通过率、BLEU与LLM-as-Judge的选择指南',
        description: '提示词评估指标包括通过率、BLEU分数、语义相似度和LLM-as-Judge评点。',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-10',
        url: 'https://www.promptquorum.com/zh/prompt-engineering/prompt-evaluation-metrics',
        inLanguage: 'zh',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: '通过率' },
          { '@type': 'Thing', name: 'BLEU分数' },
          { '@type': 'Thing', name: 'LLM-as-Judge' },
          { '@type': 'Thing', name: '语义相似度' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        audience: { '@type': 'Audience', audienceType: '在生产环境中部署LLM的开发者和团队' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          { '@type': 'Question', name: '什么是提示词评估指标？', acceptedAnswer: { '@type': 'Answer', text: '提示词评估指标是定量信号，衡量提示词是否可靠地生成预期输出。关键指标包括通过率（正确/错误二值）、BLEU分数（翻译和摘要的n-gram重叠）、语义相似度（改写任务的嵌入余弦相似度）和LLM-as-Judge（自由文本的模型评分）。为输出类型选择错误的指标会产生误导性的分数。' } },
          { '@type': 'Question', name: '什么是提示词评估中的通过率？', acceptedAnswer: { '@type': 'Answer', text: '通过率是测试输入中满足定义的成功标准的百分比。通过率 = 合格输出 / 总测试用例。对于结构化输出，这是最实用的指标，因为它直接映射到生产失败率。' } },
          { '@type': 'Question', name: '何时应该为提示词使用BLEU分数？', acceptedAnswer: { '@type': 'Answer', text: 'BLEU适用于翻译和摘要任务，其中输出应该与参考文本紧密匹配。对于JSON生成、遵循指令和创意写作来说，它会误导，因为它测量n-gram单词重叠，而非格式合规性或语义正确性。例如，返回正确结构但措辞不同的JSON提取提示词在BLEU上的分数接近零，尽管功能上是正确的。' } },
          { '@type': 'Question', name: 'LLM-as-Judge评估是什么？', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-Judge使用GPT-5.5或Claude Opus 4.8等强大的模型根据评分标准为输出评分。它可扩展到数千个测试用例，无需人工审查，并处理二值指标无法捕捉的质量维度。主要风险是模型偏见：评判者可能倾向于与其自身风格相似的输出。' } },
          { '@type': 'Question', name: '如何检测提示词指标的回归？', acceptedAnswer: { '@type': 'Answer', text: '按提示词版本追踪主要指标，并在其从既定基准下降超过5个百分点时发出警报。工作流程：在任何变更前记录基准指标，进行变更，重新运行完整测试集，与基准进行比较。下降超过5点应阻止部署。下降超过10点是需要调查的关键回归。' } },
          { '@type': 'Question', name: '我应该为JSON输出提示词使用哪种指标？', acceptedAnswer: { '@type': 'Answer', text: '为JSON输出提示词使用二值通过/失败。将合格定义为：有效JSON + 必填字段存在 + 值在允许范围内。BLEU和语义相似度对结构化输出没有意义。' } },
          { '@type': 'Question', name: '可以组合多个提示词评估指标吗？', acceptedAnswer: { '@type': 'Answer', text: '可以——生产提示词通常需要主要指标（结构化输出用通过率、分类用准确性）和次要指标（语义相似度或LLM-as-Judge）来捕捉不同的失败模式。JSON提取提示词的通过率可能是100%，但会产生语义上错误的值，只有次要检查才能检测到。独立追踪两个指标，并在任一指标低于阈值时发出警报。' } },
          { '@type': 'Question', name: '如何评估代码生成提示词的质量？', acceptedAnswer: { '@type': 'Answer', text: '使用测试通过率作为主要指标——生成代码，针对其运行单元测试，计算通过的百分比。这比BLEU或语义相似度更可靠，因为代码可以在语法完全不同的情况下功能正确。用静态分析得分补充可获得更完整的质量图景。' } },
          { '@type': 'Question', name: '在中国使用提示词评估指标时需要注意什么合规问题？', acceptedAnswer: { '@type': 'Answer', text: '根据《中华人民共和国数据安全法》（2021），提示词评估数据必须本地化存储。如果测试集包含用户数据，需要符合数据本地化要求。推荐使用国产大语言模型（如Qwen3）进行本地评估，评估日志必须保存为审计记录，以满足企业数据安全责任。' } },
          { '@type': 'Question', name: '亚太地区的数据跨境对提示词评估有什么影响？', acceptedAnswer: { '@type': 'Answer', text: '许多亚太国家对数据跨境传输有严格限制。如果评估日志包含客户或业务数据，需要遵守多个国家的数据驻留要求。建议在每个地区部署本地评估基础设施，特别是在受监管行业（金融、医疗）。跨境转移评估日志前应获得法律咨询。' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'zh',
        name: '如何选择和应用提示词评估指标',
        step: [
          { '@type': 'HowToStep', name: '确定输出类型', text: '将提示词输出分类为结构化数据（JSON、CSV）、自由文本（摘要、描述）或代码。输出类型决定了适用的指标。' },
          { '@type': 'HowToStep', name: '选择正确的指标', text: '结构化输出：二值通过/失败。翻译/摘要：BLEU或ROUGE。改写：语义相似度。微妙生成：LLM-as-Judge。' },
          { '@type': 'HowToStep', name: '建立基准', text: '运行测试集，在进行任何提示词变更之前将指标值记录为基准。' },
          { '@type': 'HowToStep', name: '设置回归警报阈值', text: '定义可接受的最小指标值。通过率下降超过5个百分点应阻止部署。' },
          { '@type': 'HowToStep', name: '每次提示词变更后运行指标', text: '在提示词文本、模型或温度改变时，每次重新运行测试集并与基准进行比较。' },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: '核心要点',
          items: [
            '通过率是具有结构化输出的生产提示词最实用的指标',
            'BLEU分数测量n-gram重叠，仅对翻译和摘要任务有意义',
            '语义相似度在改写和言语改述任务中超过BLEU',
            'LLM-as-Judge使用GPT-5.5或Claude Opus 4.8大规模评分微妙的自由文本',
            '按提示词版本追踪通过率，在下降超过5点时发出警报',
            '没有单一指标适用所有输出类型——根据预期输出格式选择',
          ],
        },
        definition: {
          title: '什么是提示词评估指标？',
          content: '**提示词评估指标是定量信号，告诉你提示词是否在重要的输入范围内可靠地生成预期输出。** 没有指标的提示词评估是主观的：两个工程师针对不同示例审查相同的提示词会得出不同的结论。\n\n正确的指标取决于你的提示词应该生成什么。JSON提取提示词需要不同于创意写作提示词的指标。当你为任务选择正确的指标时，可以[系统地评估提示词质量](/zh/prompt-engineering/how-to-evaluate-prompt-quality)。选择错误的指标会产生误导性的分数，这些分数对实际生产质量没有任何帮助。',
          snippets: [
            { type: 'in-one-sentence', text: '提示词评估指标是定量信号，衡量提示词在代表性测试集上是否可靠地生成预期输出。' },
            { type: 'in-plain-terms', text: '将其视为AI的单元测试：你定义「正确」的含义，在20多个示例上运行提示词，并评分通过率。95%的分数意味着实际用户请求中的5%仍会失败。' }
          ],
          callouts: [
            { type: 'tip', label: '专业建议', text: '在添加复杂指标之前从通过率开始。二值正确/错误通常比1–5标尺更有用。' }
          ],
        },
        metricTypes: {
          title: '不同输出类型适用哪些评估指标？',
          content: '**输出类型决定了有效的指标。在JSON输出上应用BLEU或在创意生成上应用通过/失败会产生无意义的分数。**',
          columns: ['输出类型', '推荐指标', '原因'],
          rows: [
            { '输出类型': 'JSON / 结构化数据', '推荐指标': '二值通过/失败', '原因': '要么有效且正确，要么不是。无部分分数。' },
            { '输出类型': '分类', '推荐指标': '准确度（二值）', '原因': '每个输入一个正确标签。' },
            { '输出类型': '翻译 / 摘要', '推荐指标': 'BLEU或ROUGE', '原因': '参考文本可用于比较。' },
            { '输出类型': '改写 / 言语改述', '推荐指标': '语义相似度', '原因': '保留含义，而非逐词。' },
            { '输出类型': '自由文本 / 创意', '推荐指标': 'LLM-as-Judge', '原因': '需要微妙的标准，无参考文本。' },
            { '输出类型': '代码生成', '推荐指标': '测试通过率', '原因': '针对生成的代码运行单元测试。' },
          ],
          callouts: [
            { type: 'insight', label: '关键要点', text: '输出类型驱动指标选择。最常见的错误是在非翻译任务上应用BLEU——它测量单词重叠，而非格式合规性。' }
          ],
        },
        passRate: {
          title: '通过率：为什么是最实用的指标？',
          content: '**通过率是测试输入中满足定义的成功标准的百分比——也是最实用的指标，因为它直接映射到生产失败率。** 92%的通过率意味着实际用户请求的8%会失败。\n\n通过率 = 合格输出 / 总测试用例\n\n对于结构化输出，在测试前精确定义「合格」：有效JSON、必填字段存在、值在允许的枚举内、长度在指定限制以下。对于分类，「合格」意味着返回了正确的标签。\n\n按提示词版本追踪通过率。下降超过5个百分点是回归。下降超过10个百分点应阻止生产部署。截至2026年4月，PromptQuorum在首次部署时对GPT-5.5 JSON提取提示词观察到88–94%的中位数通过率。当你[构建提示词库](/zh/prompt-engineering/build-a-prompt-library)时，为每个提示词建立基准通过率以检测回归。',
          callouts: [
            { type: 'warning', label: '警告', text: '90%的通过率意味着实际用户请求的10%会失败。根据生产风险容限设置回归阈值，而不是基于仪表板看起来不错的内容。' }
          ],
        },
        bleu: {
          title: 'BLEU分数：适用场景与局限性',
          content: '**BLEU（双语评估替身）分数测量模型输出和参考文本之间的n-gram重叠。** 它是机器翻译的标准指标，适用于输出应该与参考文本紧密匹配的任何任务。\n\nBLEU误导的情况：\n\n- **JSON或结构化输出：** BLEU对格式token评分，而非语义正确性\n- **遵循指令：** 遵循所有指令但措辞不同的提示词在BLEU上得分低\n- **创意生成：** BLEU即使在质量高时也对词汇多样性罚分\n\nBLEU适当的情况：参考文本存在的翻译任务、与人类撰写的摘要比较、预期逐字答案的抽取式QA。',
          callouts: [
            { type: 'note', label: '你知道吗？', text: 'BLEU于2002年为机器翻译设计。它对开放式生成有已知的局限性，但仍是MT基准的标准。' }
          ],
        },
        semanticSimilarity: {
          title: '语义相似度评分',
          content: '**语义相似度通过计算两个文本的嵌入的余弦相似度来测量它们在含义上的接近程度。** 它在改写和言语改述任务中超过BLEU，因为它捕捉意义而非措辞选择。\n\n工作原理：使用OpenAI text-embedding-3-small或本地嵌入模型嵌入模型输出和参考，然后计算余弦相似度。超过0.85的分数通常表示语义等价的内容。\n\n局限性：语义相似度不检查事实准确性，不检测格式违规，如果幻想内容在语义上与预期答案相似，可能对其评分较高。',
          callouts: [
            { type: 'tip', label: '专业建议', text: 'OpenAI text-embedding-3-small是相似度评分最快且最经济的模型。对于技术/代码内容，考虑使用专门的代码嵌入模型。' }
          ],
        },
        llmAsJudge: {
          title: 'LLM-as-Judge评估方法',
          content: '**LLM-as-Judge使用强大的模型（通常是GPT-5.5或Claude Opus 4.8）根据标准对输出进行评分。** 这将评估扩展到数千个测试用例，无需人工审查，并处理二值指标无法捕捉的质量维度：连贯性、语气、完整性和事实准确性。\n\nJudge方法需要：\n\n1. 详细的标准（每个维度的评分标准）\n2. 结构化的输出格式（例如包含分数和理由的JSON）\n3. 当你[跨模型测试提示词](/zh/prompt-engineering/how-to-test-prompts-across-models)时，针对你的特定任务将Judge与人工判断相校准',
          columns: ['评估维度', '优势', '局限性'],
          rows: [
            { '评估维度': '可扩展性', '优势': '每小时数千个案例', '局限性': 'API成本随体积增加' },
            { '评估维度': '微妙性', '优势': '处理复杂的标准', '局限性': '模型偏向自身输出风格' },
            { '评估维度': '一致性', '优势': '可重复的评分', '局限性': '对Judge提示词措辞敏感' },
            { '评估维度': '成本', '优势': '大规模比人工审查便宜', '局限性': '小测试集成本高' },
          ],
          promptExamples: [
            {
              badLabel: '模糊标准',
              bad: '根据1到5的范围评估此输出的质量。',
              goodLabel: '明确的多维度标准',
              good: '根据3个维度（每个1–3分）评估此输出：（1）事实准确性——是否与参考事实一致？（2）完整性——是否解决了所有必需字段？（3）语气——是否适当专业？返回JSON：{"accuracy": X, "completeness": X, "tone": X, "total": X, "reason": "..."}'
            }
          ],
          callouts: [
            { type: 'warning', label: '警告', text: 'LLM-as-Judge有自我偏见：模型对其自身风格相似的输出评分更高。使用不同的模型作为Judge而非生成输出的模型。' }
          ],
        },
        regressionMetrics: {
          title: '如何检测指标回归？',
          content: '**按提示词版本追踪主要指标，并在其从既定基准下降超过5个百分点时发出警报。** 每次提示词变更、模型更新或温度调整前后运行相同的测试集。\n\n当你实现[提示词审计和回归风险](/zh/prompt-engineering/prompt-audit-and-regression-risk)检测时，遵循此工作流程：\n\n1. 将当前指标分数记录为基准（例如通过率 = 91%）\n2. 进行提示词变更\n3. 重新运行完整测试集\n4. 将新分数与基准进行比较\n5. 如果下降 > 5点：阻止、调查、修复\n\n对于CI/CD中的自动回归检测，[Promptfoo](https://www.promptfoo.dev)等工具与GitHub Actions集成，如果通过率下降到阈值以下可以导致PR失败。',
          callouts: [
            { type: 'practice', label: '最佳实践', text: '将Promptfoo与GitHub Actions集成以在通过率低于阈值时自动导致PR失败。这可防止提示词回归到达生产环境。' }
          ],
        },
        howToStart: {
          title: '如何开始使用提示词评估指标',
          numberedItems: [
            '确定提示词输出类型：结构化数据、分类、翻译/摘要、改写、自由文本或代码。',
            '选择适当的指标：结构化用通过/失败，翻译/摘要用BLEU，改写用语义相似度，自由文本用LLM-as-Judge，代码用测试通过率。',
            '构建20个以上输入的测试集，带有期望输出或在运行任何测试前写好的成功标准。',
            '运行测试集并记录基准指标分数。',
            '设置回归警报阈值：如果通过率下降5个或以上点数就发出警报。',
            '使用Promptfoo、Braintrust或PromptQuorum在每次提示词变更时自动运行指标。',
          ],
          callouts: [
            { type: 'insight', label: '关键要点', text: '在编写提示词之前（而非之后）构建测试集。事后定义的测试案例倾向于与当前提示词匹配，而非真实输入分布。' }
          ],
        },
        commonMistakes: {
          title: '常见错误与解决方案',
          items: [
            '**错误：在JSON或遵循指令上使用BLEU。** 解决方案：BLEU测量n-gram重叠，不是格式合规性或指令遵从。对结构化输出使用二值通过/失败。',
            '**错误：用模糊标准的LLM-as-Judge。** 解决方案：Judge提示词必须明确定义每个分数水平。模糊的标准如「评分质量1-5」会产生不一致的分数，没有诊断价值。',
            '**错误：首次变更前没有基准。** 解决方案：在进行任何变更前记录指标值。没有基准你无法检测回归。',
            '**错误：仅测量一个指标。** 解决方案：生产提示词通常需要主要指标（通过率或准确度）和次要指标（语义相似度或LLM-as-Judge）来捕捉不同的故障模式。',
          ],
        },
        relatedReading: {
          title: '延伸阅读',
          items: [
            '[如何评估提示词质量](/zh/prompt-engineering/how-to-evaluate-prompt-quality) — 三部分框架：准确性、一致性、指令遵从率',
            '[跨模型测试提示词](/zh/prompt-engineering/how-to-test-prompts-across-models) — 在GPT-5.5、Claude和Gemini上运行相同测试集',
            '[提示词审计和回归风险](/zh/prompt-engineering/prompt-audit-and-regression-risk) — 自动化回归套件和CI/CD门禁',
            '[Braintrust vs Prompthub vs Vellum](/zh/prompt-engineering/braintrust-vs-prompthub-vs-vellum) — 比较团队的专用评估平台',
            '[最佳提示词测试与评估工具2026](/zh/prompt-engineering/best-prompt-testing-tools) — 排名的系统提示词QA工具',
            '[构建提示词库](/zh/prompt-engineering/build-a-prompt-library) — 提示词版本控制和整理与其评估基准',
          ],
        },
        faq: {
          title: '常见问题',
          faqs: [
            { q: '什么是提示词评估指标？', a: '定量信号，衡量提示词是否可靠地生成预期输出。关键指标包括通过率（正确/错误）、BLEU分数（翻译/摘要n-gram）、语义相似度（改写嵌入余弦）和LLM-as-Judge（自由文本模型评分）。为输出类型选择错误的指标会产生误导性的分数。' },
            { q: '什么是提示词评估中的通过率？', a: '测试输入中满足定义的成功标准的百分比。它直接映射到生产失败率，是结构化输出提示词最实用的指标。' },
            { q: '何时应该为提示词使用BLEU分数？', a: '适用于翻译和摘要，其中输出应与参考文本密切匹配。对于JSON、指令和创意来说它是误导的，因为它测量单词n-gram重叠，不是格式合规性或语义正确性。例如，返回正确结构但措辞不同的JSON提取提示词在BLEU上几乎零分，尽管功能正确。' },
            { q: 'LLM-as-Judge评估是什么？', a: '使用GPT-5.5或Claude Opus 4.8根据标准为输出评分，大规模无需人工审查。处理二值指标无法捕捉的质量维度。主要风险是模型偏见：评判者可能倾向自身风格相似的输出。' },
            { q: '如何检测提示词指标的回归？', a: '按版本追踪主要指标，下降超过5点时发出警报。流程：变更前记录、进行变更、重新运行测试、与基准比较。下降超过5点阻止部署，超过10点是需要调查的关键回归。' },
            { q: '我应该为JSON输出提示词使用哪种指标？', a: '使用二值通过/失败。定义为：有效JSON + 必填字段 + 值在范围内。BLEU和语义相似度对结构化输出没有意义。' },
            { q: '可以组合多个提示词评估指标吗？', a: '可以——生产需要主要指标（结构化用通过率，分类用准确度）和次要指标（语义相似度或LLM-as-Judge）来捕捉不同故障模式。JSON可能100%通过率但值语义错误，只有次要检查能检测。独立追踪两者，任一低于阈值时发出警报。' },
            { q: '如何评估代码生成提示词的质量？', a: '使用测试通过率作为主要指标——生成代码、运行单元测试、计算合格百分比。比BLEU或语义相似度更可靠，因为代码可以语法完全不同但功能正确。用静态分析得分补充。' },
            { q: '在中国使用提示词评估指标时需要注意什么合规问题？', a: '根据《数据安全法》2021，评估数据必须本地化存储。如果测试集包含用户数据，需要符合本地化要求。推荐使用国产LLM（如Qwen3）进行本地评估，日志必须保存为审计记录以满足企业数据安全责任。' },
            { q: '亚太地区的数据跨境对提示词评估有什么影响？', a: '许多亚太国家有严格的数据跨境限制。如果评估日志包含客户数据，需遵守多国驻留要求。建议每个地区部署本地评估基础设施，特别在受监管行业（金融、医疗）。跨境转移评估日志前应获法律咨询。' },
          ],
        },
        regionalConsiderations: {
          title: '地区合规要求与提示词评估',
          content: '**规制框架日益要求记录AI质量指标，不同司法管辖区和风险分类有具体要求。**\n\n**中国（数据安全法2021）：**\n数据安全法要求在中国范围内存储涉及业务和客户数据的评估日志。提示词评估集和指标必须本地存储，不能上传到国外服务器。金融、医疗、法律等受监管行业必须使用国产LLM（如Qwen3、ChatGLM）进行评估，以满足数据主权要求。建议建立本地评估基础设施和离线评估环境。\n\n**亚太地区（数据跨境传输）：**\nAPAC许多国家对个人数据和业务数据的跨境转移有严格的限制。新加坡、日本、印度、韩国等都有各自的数据驻留要求。如果评估数据包含客户或员工信息，需要在本地国家保留。建议在每个重要市场部署本地评估服务，避免将测试集和结果发送到云端。\n\n**欧盟（AI法案2025–2026）：**\n高风险AI系统必须证明使用定量质量指标的记录测试。提示词评估记录为AI法案透明性要求提供审计就绪证据。\n\n**多语言评估：**\n在多种语言中部署提示词时，分别评估每个语言变体。BLEU分数和语义相似度阈值因语言对而异。英文中的0.92相似度在中文中可能是0.75，因为语法差异。中文评估应使用中文特化的嵌入模型，并为中文语境调整阈值。',
        },
        sources: {
          title: '参考来源',
          items: [
            '[Promptfoo文档（promptfoo.dev）](https://www.promptfoo.dev) — 开源提示词评估框架，包含LLM-as-Judge内置指标',
            '[Braintrust评估指南（braintrust.dev）](https://www.braintrust.dev) — 生产评估平台，支持通过率、LLM-as-Judge和自定义评分',
            '[Papineni et al., 2002. "BLEU: a Method for Automatic Evaluation of Machine Translation"](https://aclanthology.org/P02-1040.pdf) — 原始BLEU论文',
            '[DeepEval：开源LLM评估框架（github.com/confident-ai/deepeval）](https://github.com/confident-ai/deepeval) — Confident AI，2024–2025。支持通过率、幻觉检测和LLM-as-Judge指标，带CI/CD集成。',
            '[The Prompt Report：Prompting Techniques的系统调查（arXiv:2406.06608）](https://arxiv.org/abs/2406.06608) — Schulhoff等人，2024。包含评估方法和指标选择的综合调查。',
          ],
        },
      },
    },
  };
