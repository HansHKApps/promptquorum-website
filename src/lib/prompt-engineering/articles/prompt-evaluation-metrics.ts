// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: prompt-evaluation-metrics
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Techniques',
      title: 'Prompt Evaluation Metrics: What to Measure and How',
      seoTitle: 'Prompt Evaluation Metrics: Pass Rate, BLEU & LLM-as-Judge',
      metaDescription: 'Choose the right prompt evaluation metric by output type: pass rate for JSON, BLEU for translation, semantic similarity for paraphrase, LLM-as-judge for free text. Framework with regression gates. April 2026.',
      ogDescription: 'Using BLEU on JSON prompts? That score means nothing. The right evaluation metric depends entirely on your output type — and picking wrong gives you false confidence that hides real production failures.',
      twitterDescription: 'Pass rate for JSON. BLEU for translation. Semantic similarity for paraphrase. LLM-as-judge for free text. Pick the right metric or get false confidence.',
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
        'GPT-4o and Claude models can differ 10–20 points on the same prompt test set',
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
          { '@type': 'Question', name: 'What is LLM-as-judge evaluation?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-judge uses a capable model like GPT-4o or Claude Opus 4.7 to score outputs against a rubric. It scales to thousands of test cases without human review and handles nuanced quality dimensions that binary metrics miss. The main risk is model bias: the judge may favor outputs similar to its own style.' } },
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
            'LLM-as-judge uses GPT-4o or Claude Opus 4.7 to score nuanced free-text outputs at scale',
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
          content: '**Pass rate is the percentage of test inputs where the prompt output meets the defined success criteria — and it is the most actionable metric because it maps directly to the production failure rate.** A pass rate of 92% means 8% of real user requests will fail.\n\nPass rate = passing outputs / total test cases\n\nFor structured outputs, define "pass" precisely before running tests: valid JSON, required fields present, values within allowed enum, length under the specified limit. For classification, "pass" means the correct label was returned.\n\nTrack pass rate per prompt version. A drop of more than 5 percentage points is a regression. A drop of more than 10 percentage points should block production deployment. As of April 2026, PromptQuorum observes median pass rates of 88–94% for GPT-4o JSON extraction prompts on first deployment. When you [build a prompt library](/prompt-engineering/build-a-prompt-library), establish baseline pass rates for each prompt to detect regressions.',
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
          content: '**LLM-as-judge uses a capable model — typically GPT-4o or Claude Opus 4.7 — to score outputs against a rubric.** This scales evaluation to thousands of test cases without human review and handles quality dimensions that binary metrics cannot capture: coherence, tone, completeness, and factual accuracy.\n\nThe judge approach requires:\n\n1. A detailed rubric (scoring criteria per dimension)\n2. A structured output format (e.g., JSON with score + justification)\n3. When you [test prompts across models](/prompt-engineering/how-to-test-prompts-across-models), calibrate the judge against human judgments for your specific task',
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
            '[How to Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — Running the same test set on GPT-4o, Claude, and Gemini',
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
            { q: 'What is LLM-as-judge evaluation?', a: 'LLM-as-judge uses GPT-4o or Claude Opus 4.7 to score outputs against a rubric at scale. It handles nuanced quality dimensions that binary metrics miss. The main risk is model bias toward its own output style.' },
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
    de: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
    fr: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
    ja: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
  };
