// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: how-to-evaluate-prompt-quality
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-10-10',
      theme: 'Techniques',
      title: 'How To Evaluate Prompt Quality: A Practical Framework',
      seoTitle: 'How to Evaluate Prompt Quality: Test Sets & Scoring (2026)',
      metaDescription: 'Evaluate prompt quality with a 20-case test set, binary pass/fail scoring, and LLM-as-judge rubrics. Measure accuracy, consistency, and instruction-following rate across models. Framework + code. April 2026.',
      ogDescription: 'Most teams spot-check prompts with a few handpicked inputs and call it tested. That misses 90% of failure modes. A 20-case test set with pre-defined criteria catches what manual review cannot.',
      twitterDescription: 'Prompt quality = accuracy + consistency + instruction-following. 20-case test set, LLM-as-judge scoring, regression gates. Framework inside.',
      intro: '**Prompt quality measures how reliably a prompt produces the intended output across varied inputs, models, and conditions.** Most teams rely on manual spot-checking, which misses edge cases, fails at scale, and produces results that cannot be reproduced across engineers or prompt versions.',
      leadAnswerBlock: '**Prompt quality is how reliably a prompt produces the intended output across varied inputs and conditions.** Three measurable dimensions: accuracy (output matches intent), consistency (same input produces same output range), and instruction-following rate (all constraints obeyed). Test with a 20-case test set and track pass rate as your baseline.',
      publishDate: '2026-04-10',
      dateModified: '2026-04-29',
      readTime: '9 min read',
      educationalLevel: 'Intermediate',
      audience: 'Developers and teams deploying LLMs in production',
      primaryTerm: 'prompt quality evaluation',
      aboutTopics: ['prompt evaluation', 'test sets', 'LLM scoring'],
      quickFacts: [
        'Minimum viable test set: 20 cases — 10 happy path, 5 edge cases, 5 adversarial inputs',
        'Binary pass/fail is most actionable for structured outputs with a clear correct answer',
        'GPT-5.5 and Claude Opus 4.7 score 10–20 points differently on the same prompt on average',
        'LLM-as-judge scoring scales to thousands of test cases without human review',
        'A 90% instruction-following rate means 1 in 10 production requests fails a constraint',
      ],
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is Prompt Quality?', anchor: '#what-is-prompt-quality' },
        { label: 'What Are the Three Components of Prompt Quality?', anchor: '#three-components' },
        { label: 'Why Does Manual Spot-Checking Fail?', anchor: '#manual-vs-systematic' },
        { label: 'How Do You Build a Prompt Test Set?', anchor: '#test-sets' },
        { label: 'How Do You Score Prompt Outputs?', anchor: '#scoring-rubrics' },
        { label: 'Does Prompt Quality Differ Across Models?', anchor: '#multi-model' },
        { label: 'How To Start Evaluating Prompt Quality', anchor: '#how-to-start' },
        { label: 'What Are the Most Common Prompt Evaluation Mistakes?', anchor: '#common-mistakes' },
        { label: 'What Regional Regulations Affect Prompt Evaluation?', anchor: '#regional-considerations' },
        { label: 'Frequently Asked Questions', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'How To Evaluate Prompt Quality: A Practical Framework',
        description: 'Evaluate prompt quality with a 20-case test set, binary pass/fail scoring, and LLM-as-judge rubrics. Measure accuracy, consistency, and instruction-following rate across models.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-29',
        url: 'https://www.promptquorum.com/prompt-engineering/how-to-evaluate-prompt-quality',
        inLanguage: 'en',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Prompt Evaluation' },
          { '@type': 'Thing', name: 'LLM Test Sets' },
          { '@type': 'Thing', name: 'Instruction-Following Rate' },
        ],
        audience: { '@type': 'Audience', audienceType: 'Developers and teams deploying LLMs in production' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          { '@type': 'Question', name: 'What is prompt quality?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt quality measures how reliably a prompt produces the intended output across varied inputs. It has three dimensions: accuracy, consistency, and instruction-following rate. A quality prompt produces correct, consistent, and properly-formatted outputs 85%+ of the time across all input types.' } },
          { '@type': 'Question', name: 'How do you evaluate prompt quality?', acceptedAnswer: { '@type': 'Answer', text: 'Build a test set of 20+ inputs (happy path, edge cases, adversarial), define pass criteria for each before testing, run the inputs through your prompt, and score outputs against your rubric. Track the overall pass rate as your primary quality metric. Record this baseline so you can detect regressions when the prompt changes.' } },
          { '@type': 'Question', name: 'What is instruction-following rate?', acceptedAnswer: { '@type': 'Answer', text: 'Instruction-following rate is the percentage of outputs where the model obeyed every constraint in the prompt: format, length, tone, scope, and prohibited content. A 90% rate means 1 in 10 requests fails in production. This is distinct from accuracy and must be measured separately.' } },
          { '@type': 'Question', name: 'Why does manual spot-checking fail for prompt evaluation?', acceptedAnswer: { '@type': 'Answer', text: 'Manual spot-checking is non-repeatable (different reviewers pick different examples), selection-biased (reviewers unconsciously pick cases they expect to pass), and does not scale (10 examples miss 90% of failure modes in a 100-case set). Automated test sets produce consistent, reproducible results across prompt versions and model updates.' } },
          { '@type': 'Question', name: 'How many test cases does a prompt test set need?', acceptedAnswer: { '@type': 'Answer', text: 'A minimal test set needs 20 cases: 10 happy-path inputs covering typical use, 5 edge cases testing boundaries (empty input, very long input, multilingual text), and 5 adversarial inputs designed to break the prompt. Fewer than 20 cases produces statistically unreliable pass rates that miss real failure modes.' } },
          { '@type': 'Question', name: 'Does prompt quality differ between GPT-5.5 and Claude Opus 4.7?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, significantly. The same prompt regularly scores 10-20 points differently between GPT-5.5 and Claude Opus 4.7 due to differences in instruction-format sensitivity and system prompt handling. Always measure pass rate separately on each model you plan to deploy. A prompt that scores 95% on GPT-5.5 may score 80% on Claude Opus 4.7 without model-specific tuning.' } },
          { '@type': 'Question', name: 'What is LLM-as-judge scoring and when should I use it?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-judge uses a capable model like GPT-5.5 or Claude Opus 4.7 to score outputs against a rubric prompt. The judge receives the original input, your model\'s output, and evaluation criteria, then returns a score with justification. Use LLM-as-judge for free-text outputs where binary pass/fail is insufficient. It scales to thousands of test cases without human review, making it ideal for continuous evaluation pipelines.' } },
          { '@type': 'Question', name: 'How do you set a pass rate regression threshold?', acceptedAnswer: { '@type': 'Answer', text: 'Record the pass rate on the first test run as your baseline. A regression gate of 5 points is common: if a prompt change drops pass rate by more than 5 points compared to baseline, block the deployment. Teams typically target 85–95% pass rate for production prompts. For critical workflows (legal, medical, financial), use a 2-point regression gate instead.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Evaluate Prompt Quality',
        inLanguage: 'en',
        step: [
          { '@type': 'HowToStep', name: 'Define success criteria', text: 'Write down what a passing output looks like: format, content, length, and prohibited items.' },
          { '@type': 'HowToStep', name: 'Build your test set', text: 'Collect 20+ inputs: happy-path, edge cases, and adversarial inputs. Write expected outputs for each.' },
          { '@type': 'HowToStep', name: 'Choose a scoring rubric', text: 'Pick binary pass/fail, 1-5 scale, or LLM-as-judge scoring based on output type.' },
          { '@type': 'HowToStep', name: 'Run the test set', text: 'Dispatch all test inputs through your prompt and collect outputs.' },
          { '@type': 'HowToStep', name: 'Score outputs against rubric', text: 'Score each output and calculate the overall pass rate.' },
          { '@type': 'HowToStep', name: 'Set a baseline and track changes', text: 'Record the pass rate as your baseline. Every future prompt change must be compared against this number.' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          title: 'Key Takeaways',
          items: [
            'Prompt quality = accuracy + consistency + instruction-following rate across varied inputs',
            'Manual spot-checking is non-repeatable and misses edge cases — use automated test sets',
            'A minimum viable test set needs 20 cases: happy path, edge cases, and adversarial inputs',
            'Binary pass/fail is the most actionable metric for structured output prompts',
            'LLM-as-judge (GPT-5.5 or Claude scoring outputs against a rubric) scales to free-text tasks',
            'Use PromptQuorum to dispatch the same test set to GPT-5.5 and Claude Opus 4.7 and compare pass rates side-by-side',
          ],
        },
        definition: {
          id: 'what-is-prompt-quality',
          title: 'What Is Prompt Quality?',
          content: '**Prompt quality is how reliably a prompt produces the intended output across varied inputs, models, and conditions.** A prompt that works on ten handpicked examples may fail 20% of the time when real users interact with it at scale.\n\nQuality is not a single number. It has three independent dimensions: accuracy, consistency, and instruction-following rate. A prompt can fail any one of them while appearing to work on cherry-picked examples.\n\nSystematic evaluation means measuring all three dimensions against a reproducible test set — before deploying to production. See [prompt evaluation metrics](/prompt-engineering/prompt-evaluation-metrics) for a full breakdown of scoring approaches.',
          snippets: [
            { type: 'in-one-sentence', text: 'Prompt quality is the percentage of test inputs where the model produces an output that meets all defined success criteria.' },
          ],
          callouts: [
            { type: 'pro-tip', label: 'Pro Tip', text: 'Define success criteria before building your test set. Scoring outputs without a pre-written rubric reintroduces the subjectivity that systematic evaluation is designed to eliminate.' },
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'What Are the Three Components of Prompt Quality?',
          content: '**The three components are accuracy, consistency, and instruction-following rate — and each requires a separate test strategy.**\n\n**Accuracy** measures whether the output matches the intended meaning or result. For classification prompts, accuracy is the percentage of inputs correctly classified. For generation prompts, accuracy requires a rubric or reference output.\n\n**Consistency** measures whether the same input produces output within the same expected range across multiple runs. High temperature and underspecified prompts both reduce consistency.\n\n**Instruction-following rate** measures whether the model obeyed every constraint: output format, length limit, required fields, tone, and prohibited content. A prompt that says "respond in JSON" fails on instruction-following any time it returns plain text.',
          callouts: [
            { type: 'key-point', label: 'Key Point', text: 'Accuracy and instruction-following rate are different metrics. A prompt can be factually correct but still fail on format, length, or tone constraints — both must be measured separately.' },
          ],
        },
        manualVsSystematic: {
          id: 'manual-vs-systematic',
          title: 'Why Does Manual Spot-Checking Fail?',
          content: '**Manual spot-checking produces irreproducible results and misses the edge cases that cause production failures.** Two engineers reviewing the same prompt against different handpicked examples will reach different conclusions.\n\nThe structural problems with manual review:\n\n- **Selection bias:** Reviewers pick inputs they expect to work, not inputs designed to break the prompt\n- **Non-repeatable:** A prompt change cannot be compared fairly against a prior manual review\n- **Does not scale:** 10 examples misses 90% of failure modes visible in a 100-case test set\n- **No baseline:** Without a recorded pass rate, you cannot detect regressions',
          columns: ['Criterion', 'Manual Spot-Check', 'Systematic Test Set'],
          rows: [
            { 'Criterion': 'Reproducibility', 'Manual Spot-Check': 'None - different each review', 'Systematic Test Set': 'Full - same test set every run' },
            { 'Criterion': 'Edge case coverage', 'Manual Spot-Check': 'Misses most edge cases', 'Systematic Test Set': 'Explicitly includes edge cases' },
            { 'Criterion': 'Baseline comparison', 'Manual Spot-Check': 'Not possible', 'Systematic Test Set': 'Built-in - compare pass rates' },
            { 'Criterion': 'Scale', 'Manual Spot-Check': '5-10 examples in practice', 'Systematic Test Set': '20-200+ cases' },
          ],
          callouts: [
            { type: 'warning', label: 'Warning', text: 'Manual spot-checks are not baselines. If you cannot reproduce your evaluation, you cannot detect regressions when the prompt or model changes.' },
          ],
        },
        testSets: {
          id: 'test-sets',
          title: 'How Do You Build a Prompt Test Set?',
          content: '**Build a test set by collecting inputs across three categories then writing explicit pass criteria for each before you run any tests.**\n\n**Happy-path inputs (40%):** Typical inputs the prompt was designed to handle. All should pass.\n\n**Edge-case inputs (30%):** Inputs at the boundary: empty input, very long input, multilingual input, unusual formatting, missing required fields. These reveal brittleness.\n\n**Adversarial inputs (30%):** Inputs designed to make the prompt fail: instructions that conflict with the system prompt, requests to ignore constraints, injection-like patterns. These reveal security and reliability gaps.\n\nWrite a pass criterion for each input before running the test. A test set without expected outputs is not an evaluation. If you store prompts in a [prompt library](/prompt-engineering/build-a-prompt-library), track test set pass rate as metadata per entry.',
          promptExamples: [
            {
              bad: 'Test the prompt with a few emails and see if it looks good.',
              good: 'Run 20 test inputs: 10 customer emails (happy path), 6 edge cases (empty body, non-English, no subject line), 4 adversarial inputs (instructions embedded in email body). Pass criterion: JSON output with fields [reason, priority, sentiment] all populated, priority in [low, medium, high].',
              badLabel: 'Vague approach',
              goodLabel: 'Systematic test set',
            },
          ],
          callouts: [
            { type: 'pro-tip', label: 'Pro Tip', text: 'Write expected outputs for each test input before running the test. A test set without pre-defined criteria is not an evaluation — it reintroduces manual judgment at scoring time.' },
          ],
        },
        scoringRubrics: {
          id: 'scoring-rubrics',
          title: 'How Do You Score Prompt Outputs?',
          content: '**Choose your scoring method based on output type: binary pass/fail for structured outputs, 1-5 rubric for generation tasks, and LLM-as-judge for free-text evaluation.**\n\n**Binary pass/fail** is the most actionable. Use for JSON outputs, classification results, and outputs with a clear correct answer. Pass rate = correct outputs / total test cases.\n\n**1-5 scale rubric** works for generation tasks where partial credit is meaningful. Define each score level before testing: 5 = fully correct, 4 = minor issue, 3 = acceptable with caveats, 2 = significant problem, 1 = wrong or harmful.\n\n**LLM-as-judge** uses GPT-5.5 or Claude Opus 4.7 to score outputs against a rubric. As of mid-2026, LLM-as-judge is the dominant approach for evaluating free-text outputs at scale. The judge prompt must specify the rubric precisely.\n\n| Method | Best for | Scale | Human effort | Reliability |\n|---|---|---|---|---|\n| Binary pass/fail | Structured output, classification | Any size | Zero after setup | High — objective |\n| 1-5 rubric | Generation with partial credit | <100 cases | Medium — manual scoring | Medium — inter-rater variance |\n| LLM-as-judge | Free-text, large test sets | 1000+ cases | Low — rubric design only | High — if rubric is precise |',
          codeBlock: '// LLM-as-judge scoring prompt (pseudocode)\nconst judgePrompt = `\nScore this customer support response 1-5:\n5 = Correct, professional, addresses all concerns\n4 = Correct, minor issue\n3 = Partially correct\n2 = Incorrect or missing key info\n1 = Wrong, rude, or harmful\n\nQuestion: {input}\nResponse: {output}\n\nScore (1-5) + one-sentence justification:\n`;',
          codeLanguage: 'typescript',
          snippets: [
            { type: 'in-plain-terms', text: 'Think of your scoring rubric as a checklist a teacher uses to grade work — every criterion must be checked off before the output counts as correct.' },
          ],
          callouts: [
            { type: 'key-point', label: 'Key Point', text: 'LLM-as-judge works best when the judge prompt specifies the rubric precisely. A vague rubric produces inconsistent scores — define each score level with a concrete example before running the judge.' },
          ],
        },
        multiModel: {
          id: 'multi-model',
          title: 'Does Prompt Quality Differ Across Models?',
          content: '**Yes — the same prompt can score 20+ points differently between GPT-5.5 and Claude Opus 4.7, primarily due to instruction-format sensitivity and system prompt handling.**\n\nQuality gaps are largest for:\n\n- **JSON output formatting:** Claude Opus 4.7 follows complex schemas more strictly than GPT-5.5\n- **Instruction priority:** GPT-5.5 weights the most recent instruction; Claude Opus 4.7 weights the system prompt\n- **Refusal patterns:** OpenAI and Anthropic models have different thresholds for borderline content\n\nOur evaluation of classification and formatting prompts across both models (updated through April 2026) found pass rate differences of 10–20 points, with JSON output formatting producing the largest gaps. See [how to test prompts across models](/prompt-engineering/how-to-test-prompts-across-models) for a full multi-model evaluation methodology.\n\nUse PromptQuorum to dispatch the same test set to GPT-5.5, Claude Opus 4.7, and Gemini 2.5 Pro in one run and compare pass rates side-by-side.',
          callouts: [
            { type: 'warning', label: 'Warning', text: 'Do not assume a prompt that passes on GPT-5.5 will pass on Claude Opus 4.7. Run the same test set on every model you plan to deploy — a prompt may need model-specific tuning.' },
          ],
        },
        howToStart: {
          id: 'how-to-start',
          title: 'How To Start Evaluating Prompt Quality',
          content: '**Start with success criteria before building the test set — evaluating outputs without pre-defined criteria reintroduces the subjectivity that systematic testing is designed to eliminate.** Work through the six steps below to set up a repeatable evaluation system. If pass rate drops after changes, apply [prompt brittleness reduction techniques](/prompt-engineering/how-to-reduce-prompt-brittleness) before re-evaluating.',
          numberedItems: [
            'Write down success criteria before building the test set: what does a passing output look like in terms of format, content, and constraints?',
            'Collect 20 test inputs: 8 happy-path, 6 edge cases, 6 adversarial. Write expected outputs or pass criteria for each.',
            'Choose a scoring method: binary for structured outputs, 1-5 rubric for generation, LLM-as-judge for free text.',
            'Run all 20 inputs through your current prompt and score each output. Record this pass rate as your baseline.',
            'Dispatch the same test set to GPT-5.5 and Claude Opus 4.7 via PromptQuorum and compare model-level pass rates.',
            'Set a regression threshold: if a prompt change drops pass rate by more than 5 points, block the deployment.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Pro Tip', text: 'Run the test set twice — once before and once after any prompt change. The difference in pass rate is your change impact score. A drop of more than 5 points signals a regression.' },
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'What Are the Most Common Prompt Evaluation Mistakes?',
          mistakes: [
            {
              mistake: 'Testing only happy-path inputs',
              problem: 'Happy-path inputs that always pass tell you nothing about production reliability. Edge cases and adversarial inputs cause the failures users encounter.',
              fix: 'At minimum 30% of test inputs should be edge cases or adversarial. A 20-case test set should include at least 6 edge cases and 4 adversarial inputs.',
            },
            {
              mistake: 'No expected outputs for test cases',
              problem: 'Scoring outputs without pre-defined criteria reintroduces the subjective judgment that systematic evaluation is designed to eliminate.',
              fix: 'Write a pass criterion for each test input before you run the test. A 20-word expected output summary per case is sufficient.',
            },
            {
              mistake: 'Using pass rate from one model on another',
              problem: 'The same prompt regularly scores 10-20 points differently between GPT-5.5 and Claude Opus 4.7. Assuming one model\'s pass rate applies to another leads to production surprises.',
              fix: 'Run the test set separately on each model you plan to deploy. GPT-5.5, Claude Opus 4.7, and Gemini 2.5 Pro all need independent evaluation.',
            },
            {
              mistake: 'No baseline',
              problem: 'Without a recorded pass rate from the first evaluation, you cannot detect regressions when the prompt changes or the model updates.',
              fix: 'Record the pass rate the first time you evaluate a prompt. Every future change must be compared against that baseline number.',
            },
          ],
          callouts: [
            { type: 'key-point', label: 'Key Point', text: 'Each mistake here reintroduces the subjectivity that systematic evaluation is designed to eliminate. Treat these as anti-patterns to enforce from the start of your evaluation process.' },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: 'What Regional Regulations Affect Prompt Evaluation?',
          content: '**Regulatory requirements increasingly mandate documented AI output quality assurance, with specific obligations varying by jurisdiction.**\n\n**EU (AI Act 2025–2026):** High-risk AI systems under the EU AI Act must demonstrate documented testing and quality assurance processes. Prompt evaluation test sets and pass rate records provide audit-ready evidence of systematic quality control. GDPR Article 22 also requires that automated decisions affecting individuals can be explained — prompt evaluation records support this.\n\n**US (SOC 2 / NIST AI RMF):** SOC 2 Type II audits increasingly review AI-related change management. Documented prompt test sets with version history and pass rate baselines satisfy audit requirements for quality controls on AI-driven workflows. The NIST AI Risk Management Framework (updated through 2026) emphasizes measurement and monitoring as core risk controls.\n\n**Regulated industries:** Financial services, healthcare, and legal teams deploying LLM-based tools should maintain prompt evaluation records as part of model governance documentation. Pass rate baselines and regression gates provide measurable quality evidence for compliance reviews.',
          callouts: [
            { type: 'pro-tip', label: 'Pro Tip', text: 'If your organization undergoes SOC 2 or regulatory audits, prompt evaluation test sets and pass rate records become audit evidence. Store them alongside your prompt library for easy retrieval.' },
          ],
        },
        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Prompt Evaluation Metrics: What to Measure and How](/prompt-engineering/prompt-evaluation-metrics) — Breakdown of pass rate, BLEU, semantic similarity, and LLM-as-judge',
            '[How to Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — Multi-model evaluation for GPT-5.5 vs Claude vs Gemini',
            '[How to Reduce Prompt Brittleness](/prompt-engineering/how-to-reduce-prompt-brittleness) — Output schemas, few-shot anchors, and regression gates',
            '[Build a Prompt Library](/prompt-engineering/build-a-prompt-library) — Store test sets alongside prompts with metadata for team reuse',
            '[Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-teams) — Tools that include test set management and pass rate tracking',
            '[Fundamentals of Prompt Optimization](/prompt-engineering/fundamentals-of-prompt-optimization) — Core techniques to improve accuracy and instruction-following rate',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What is prompt quality?', a: 'Prompt quality measures how reliably a prompt produces the intended output across varied inputs. It has three dimensions: accuracy, consistency, and instruction-following rate. A quality prompt produces correct, consistent, and properly-formatted outputs 85%+ of the time across all input types.' },
            { q: 'How do you evaluate prompt quality?', a: 'Build a test set of 20+ inputs (happy path, edge cases, adversarial), define pass criteria for each before testing, run the inputs through your prompt, and score outputs against your rubric. Track the overall pass rate as your primary quality metric. Record this baseline so you can detect regressions when the prompt changes.' },
            { q: 'What is instruction-following rate?', a: 'Instruction-following rate is the percentage of outputs where the model obeyed every constraint in the prompt: format, length, tone, scope, and prohibited content. A 90% rate means 1 in 10 requests fails in production. This is distinct from accuracy and must be measured separately.' },
            { q: 'Why does manual spot-checking fail for prompt evaluation?', a: 'Manual spot-checking is non-repeatable (different reviewers pick different examples), selection-biased (reviewers unconsciously pick cases they expect to pass), and does not scale (10 examples miss 90% of failure modes in a 100-case set). Automated test sets produce consistent, reproducible results across prompt versions and model updates.' },
            { q: 'How many test cases does a prompt test set need?', a: 'A minimal test set needs 20 cases: 10 happy-path inputs covering typical use, 5 edge cases testing boundaries (empty input, very long input, multilingual text), and 5 adversarial inputs designed to break the prompt. Fewer than 20 cases produces statistically unreliable pass rates that miss real failure modes.' },
            { q: 'Does prompt quality differ between GPT-5.5 and Claude Opus 4.7?', a: 'Yes, significantly. The same prompt regularly scores 10-20 points differently between GPT-5.5 and Claude Opus 4.7 due to differences in instruction-format sensitivity and system prompt handling. Always measure pass rate separately on each model you plan to deploy. A prompt that scores 95% on GPT-5.5 may score 80% on Claude Opus 4.7 without model-specific tuning.' },
            { q: 'What is LLM-as-judge scoring and when should I use it?', a: 'LLM-as-judge uses a capable model like GPT-5.5 or Claude Opus 4.7 to score outputs against a rubric prompt. The judge receives the original input, your model\'s output, and evaluation criteria, then returns a score with justification. Use LLM-as-judge for free-text outputs where binary pass/fail is insufficient. It scales to thousands of test cases without human review, making it ideal for continuous evaluation pipelines.' },
            { q: 'How do you set a pass rate regression threshold?', a: 'Record the pass rate on the first test run as your baseline. A regression gate of 5 points is common: if a prompt change drops pass rate by more than 5 points compared to baseline, block the deployment. Teams typically target 85–95% pass rate for production prompts. For critical workflows (legal, medical, financial), use a 2-point regression gate instead.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[OpenAI Evals Framework (github.com/openai/evals)](https://github.com/openai/evals) — Open-source framework for evaluating LLM outputs with test harness and scoring utilities',
            '[Anthropic Model Evaluations (anthropic.com)](https://www.anthropic.com/news/model-evaluations) — Anthropic approach to capability and safety evaluation methodology',
            '[The Prompt Report: Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Comprehensive framework covering prompt design and evaluation across 50+ techniques.',
            '[DeepEval: LLM Evaluation Framework (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Open-source framework for automated LLM output evaluation with metrics, test sets, and CI/CD integration.',
            '[NIST AI Risk Management Framework (airc.nist.gov)](https://airc.nist.gov/Home) — NIST, 2023–2026 (updated). Framework covering AI system evaluation, quality assurance methodology, and governance documentation for regulated environments.',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-10-10',
      theme: 'Techniques',
      title: 'Prompt-Qualität bewerten: Ein praktischer Leitfaden',
      seoTitle: 'Prompt-Qualität bewerten: Test-Sets & Scoring (2026)',
      metaDescription: 'Bewerte Prompt-Qualität mit 20er Test-Set, Pass/Fail-Scoring und LLM-as-Judge. Accuracy, Konsistenz und Instruction-Following messen. Schritt-für-Schritt-Anleitung. April 2026.',
      ogDescription: 'Die meisten Teams bewerten Prompts durch manuelles Spot-Checking mit wenigen handgewählten Eingaben. Das verfehlt 90 % der Fehlerszenarien. Ein 20er Test-Set mit vordefinierten Kriterien fängt auf, was manuelle Überprüfung nicht sieht.',
      twitterDescription: 'Prompt-Qualität = Accuracy + Konsistenz + Instruction-Following. 20er Test-Set, LLM-as-Judge-Scoring, Regressions-Gates. Leitfaden inklusive.',
      intro: '**Prompt-Qualität misst, wie zuverlässig ein Prompt die beabsichtigte Ausgabe über verschiedene Eingaben, Modelle und Bedingungen hinweg erzeugt.** Die meisten Teams verlassen sich auf manuelles Spot-Checking, das Edge Cases übersieht, nicht skaliert und Ergebnisse erzeugt, die nicht über Entwickler oder Prompt-Versionen reproduzierbar sind.',
      leadAnswerBlock: '**Prompt-Qualität ist, wie zuverlässig ein Prompt die beabsichtigte Ausgabe über verschiedene Eingaben und Bedingungen hinweg erzeugt.** Drei messbare Dimensionen: Accuracy (Ausgabe entspricht Absicht), Konsistenz (gleiche Eingabe erzeugt gleiche Ausgabe), und Instruction-Following Rate (alle Einschränkungen erfüllt). Testen Sie mit einem 20er Test-Set und verfolgen Sie die Pass-Rate als Baseline.',
      publishDate: '2026-04-10',
      dateModified: '2026-04-29',
      readTime: '9 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      audience: 'Entwickler und Teams, die LLMs in der Produktion einsetzen',
      primaryTerm: 'Bewertung der Prompt-Qualität',
      aboutTopics: ['Prompt-Bewertung', 'Test-Sets', 'LLM-Scoring'],
      quickFacts: [
        'Minimaler Test-Set: 20 Fälle — 10 Happy-Path, 5 Edge Cases, 5 Adversarial Inputs',
        'Binary Pass/Fail ist am aussagekräftigsten für strukturierte Ausgaben mit klarer korrekter Antwort',
        'GPT-5.5 und Claude Opus 4.7 unterscheiden sich durchschnittlich um 10–20 Punkte beim Scoring desselben Prompts',
        'LLM-as-Judge Scoring skaliert auf Tausende Test-Fälle ohne menschliche Überprüfung',
        'Eine 90 % Instruction-Following Rate bedeutet, dass 1 von 10 Produktionsanfragen eine Einschränkung verletzt',
      ],
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Was ist Prompt-Qualität?', anchor: '#what-is-prompt-quality' },
        { label: 'Was sind die drei Komponenten der Prompt-Qualität?', anchor: '#three-components' },
        { label: 'Warum funktioniert manuelles Spot-Checking nicht?', anchor: '#manual-vs-systematic' },
        { label: 'Wie erstellst du einen Prompt-Test-Set?', anchor: '#test-sets' },
        { label: 'Wie bewertest du Prompt-Ausgaben?', anchor: '#scoring-rubrics' },
        { label: 'Unterscheidet sich die Prompt-Qualität zwischen Modellen?', anchor: '#multi-model' },
        { label: 'So startest du mit der Bewertung', anchor: '#how-to-start' },
        { label: 'Was sind die häufigsten Fehler bei der Prompt-Bewertung?', anchor: '#common-mistakes' },
        { label: 'Welche regionalen Vorschriften beeinflussen die Prompt-Bewertung?', anchor: '#regional-considerations' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Prompt-Qualität bewerten: Ein praktischer Leitfaden',
        description: 'Bewerte Prompt-Qualität mit 20er Test-Set, Pass/Fail-Scoring und LLM-as-Judge. Accuracy, Konsistenz und Instruction-Following messen. Schritt-für-Schritt-Anleitung. April 2026.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-29',
        url: 'https://www.promptquorum.com/prompt-engineering/how-to-evaluate-prompt-quality?lang=de',
        inLanguage: 'de',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Prompt-Bewertung' },
          { '@type': 'Thing', name: 'LLM-Test-Sets' },
          { '@type': 'Thing', name: 'Instruction-Following Rate' },
        ],
        audience: { '@type': 'Audience', audienceType: 'Entwickler und Teams, die LLMs in der Produktion einsetzen' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'de',
        mainEntity: [
          { '@type': 'Question', name: 'Was ist Prompt-Qualität?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt-Qualität misst, wie zuverlässig ein Prompt die beabsichtigte Ausgabe über verschiedene Eingaben erzeugt. Sie hat drei Dimensionen: Accuracy, Konsistenz und Instruction-Following Rate. Ein qualitativ hochwertiger Prompt erzeugt korrekte, konsistente und ordnungsgemäß formatierte Ausgaben zu 85%+ über alle Eingabetypen hinweg.' } },
          { '@type': 'Question', name: 'Wie bewertest du die Prompt-Qualität?', acceptedAnswer: { '@type': 'Answer', text: 'Erstelle einen Test-Set mit 20+ Eingaben (Happy Path, Edge Cases, Adversarial), definiere Pass-Kriterien für jeden vor dem Testen, führe die Eingaben durch deinen Prompt und bewerte die Ausgaben gegen deine Rubrik. Verfolge die Gesamt-Pass-Rate als Primärmetrik. Speichere diese Baseline, damit du Regressionen erkennen kannst, wenn sich der Prompt ändert.' } },
          { '@type': 'Question', name: 'Was ist Instruction-Following Rate?', acceptedAnswer: { '@type': 'Answer', text: 'Die Instruction-Following Rate ist der Prozentsatz von Ausgaben, bei denen das Modell jede Einschränkung im Prompt befolgt hat: Format, Länge, Ton, Umfang und verbotene Inhalte. Eine Rate von 90 % bedeutet, dass 1 von 10 Produktionsanfragen eine Einschränkung verletzt. Dies ist unterschiedlich von Accuracy und muss separat gemessen werden.' } },
          { '@type': 'Question', name: 'Warum funktioniert manuelles Spot-Checking nicht bei der Prompt-Bewertung?', acceptedAnswer: { '@type': 'Answer', text: 'Manuelles Spot-Checking ist nicht wiederholbar (verschiedene Reviewer wählen unterschiedliche Beispiele), auswahlverzerrend (Reviewer wählen unbewusst Fälle, von denen sie erwarten, dass sie bestehen) und nicht skalierbar (10 Beispiele verpassen 90 % der Fehlermodi in einem 100er Set). Automatisierte Test-Sets liefern konsistente, reproduzierbare Ergebnisse über Prompt-Versionen und Modell-Updates.' } },
          { '@type': 'Question', name: 'Wie viele Test-Fälle braucht ein Prompt-Test-Set?', acceptedAnswer: { '@type': 'Answer', text: 'Ein minimaler Test-Set braucht 20 Fälle: 10 Happy-Path-Eingaben für typische Nutzung, 5 Edge Cases an Grenzen (leere Eingabe, sehr lange Eingabe, mehrsprachige Texte) und 5 Adversarial Inputs. Weniger als 20 Fälle erzeugen statistisch unzuverlässige Pass-Raten, die reale Fehlerszenarien verpassen.' } },
          { '@type': 'Question', name: 'Unterscheidet sich die Prompt-Qualität zwischen GPT-5.5 und Claude Opus 4.7?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, erheblich. Derselbe Prompt scored regelmäßig 10-20 Punkte unterschiedlich zwischen GPT-5.5 und Claude Opus 4.7 aufgrund von Unterschieden in der Instruction-Format-Sensitivität und dem System-Prompt-Handling. Messe die Pass-Rate immer separat auf jedem Modell, das du einsetzen möchtest. Ein Prompt, der auf GPT-5.5 95 % scored, kann auf Claude Opus 4.7 ohne modellspezifisches Tuning 80 % scored.' } },
          { '@type': 'Question', name: 'Was ist LLM-as-Judge Scoring und wann sollte ich es verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-Judge nutzt ein leistungsstarkes Modell wie GPT-5.5 oder Claude Opus 4.7, um Ausgaben gegen eine Rubrik zu bewerten. Der Judge erhält die ursprüngliche Eingabe, deine Modell-Ausgabe und Evaluierungskriterien und liefert dann einen Score mit Begründung. Verwende LLM-as-Judge für Free-Text-Ausgaben, wo Binary Pass/Fail nicht ausreicht. Es skaliert auf Tausende Test-Fälle ohne menschliche Überprüfung, was es ideal für kontinuierliche Evaluierungs-Pipelines macht.' } },
          { '@type': 'Question', name: 'Wie setzt du eine Pass-Rate Regressions-Schwelle?', acceptedAnswer: { '@type': 'Answer', text: 'Speichere die Pass-Rate aus dem ersten Test-Durchlauf als Baseline. Ein Regressions-Gate von 5 Punkten ist üblich: wenn eine Prompt-Änderung die Pass-Rate um mehr als 5 Punkte relativ zur Baseline senkt, blockiere das Deployment. Teams zielen typischerweise auf 85–95 % Pass-Rate für Produktions-Prompts ab. Für kritische Workflows (legal, medizinisch, finanziell) verwende stattdessen ein 2-Punkte-Regressions-Gate.' } },
          { '@type': 'Question', name: 'Muss ich bei der Verwendung von Prompt-Bewertung die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wenn dein Prompt personenbezogene Daten verarbeitet, gelten DSGVO Artikel 28 (Datenverarbeitungs-Vereinbarungen) und Artikel 22 (automatisierte Entscheidungsfindung). Dokumentierte Prompt-Bewertungs-Test-Sets mit Pass-Rate-Records liefern audit-bereite Nachweise für systematische Qualitätskontrolle. Sie unterstützen auch die Erklärbarkeit, die Artikel 22 für automatisierte Entscheidungen erfordert. Speichere Test-Sets als Compliance-Dokumentation.' } },
          { '@type': 'Question', name: 'Ist Prompt-Bewertung für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Mittelständische Unternehmen profitieren von strukturierter Prompt-Bewertung, besonders wenn LLMs in kundenorientierten oder sicherheitskritischen Workflows eingesetzt werden. Ein 20er Test-Set mit dokumentierten Pass-Raten erfüllt BSI-Grundschutz-Katalog Anforderungen für Qualitätskontrolle. Der Aufwand ist niedrig (ein Test-Set mit etwa 6 Stunden Vorbereitung), und die Compliance-Dokumentation reduziert IT-Sicherheits-Audit-Fragen. Besonders relevant für Finanz-, Versicherungs- und Industrie-Mittelstand.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Wie man Prompt-Qualität bewertet',
        inLanguage: 'de',
        step: [
          { '@type': 'HowToStep', name: 'Definiere Erfolgskriterien', text: 'Schreibe auf, wie eine korrekte Ausgabe aussieht: Format, Inhalt, Länge und verbotene Elemente.' },
          { '@type': 'HowToStep', name: 'Erstelle deinen Test-Set', text: 'Sammle 20+ Eingaben: Happy-Path, Edge Cases und Adversarial Inputs. Schreibe erwartete Ausgaben für jeden.' },
          { '@type': 'HowToStep', name: 'Wähle eine Scoring-Rubrik', text: 'Wähle Binary Pass/Fail, 1-5 Skala oder LLM-as-Judge Scoring basierend auf Output-Typ.' },
          { '@type': 'HowToStep', name: 'Führe den Test-Set aus', text: 'Leite alle Test-Eingaben durch deinen Prompt und sammle Ausgaben.' },
          { '@type': 'HowToStep', name: 'Bewerte Ausgaben gegen Rubrik', text: 'Bewerte jede Ausgabe und berechne die Gesamt-Pass-Rate.' },
          { '@type': 'HowToStep', name: 'Setze eine Baseline und verfolgst Änderungen', text: 'Speichere die Pass-Rate als Baseline. Jede zukünftige Prompt-Änderung muss gegen diese Zahl verglichen werden.' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          title: 'Zusammenfassung',
          items: [
            'Prompt-Qualität = Accuracy + Konsistenz + Instruction-Following Rate über verschiedene Eingaben',
            'Manuelles Spot-Checking ist nicht wiederholbar und verfehlt Edge Cases — nutze automatisierte Test-Sets',
            'Ein minimaler praktischer Test-Set braucht 20 Fälle: Happy Path, Edge Cases und Adversarial Inputs',
            'Binary Pass/Fail ist die aussagekräftigste Metrik für strukturierte Output-Prompts',
            'LLM-as-Judge (GPT-5.5 oder Claude bewertet Ausgaben gegen eine Rubrik) skaliert auf Free-Text-Aufgaben',
            'Nutze PromptQuorum, um denselben Test-Set zu GPT-5.5 und Claude Opus 4.7 zu leiten und Pass-Raten Seite-an-Seite zu vergleichen',
          ],
        },
        definition: {
          id: 'what-is-prompt-quality',
          title: 'Was ist Prompt-Qualität?',
          content: '**Prompt-Qualität ist, wie zuverlässig ein Prompt die beabsichtigte Ausgabe über verschiedene Eingaben, Modelle und Bedingungen hinweg erzeugt.** Ein Prompt, der auf zehn handgewählten Beispielen funktioniert, kann 20 % Fehlerquote aufweisen, wenn echte Benutzer ihn in großem Maßstab verwenden.\n\nQualität ist keine einzelne Zahl. Sie hat drei unabhängige Dimensionen: Accuracy, Konsistenz und Instruction-Following Rate. Ein Prompt kann bei jeder dieser fehlschlagen, während er auf cherry-gepickten Beispielen zu funktionieren scheint.\n\nSystematische Bewertung bedeutet, alle drei Dimensionen gegen einen reproduzierbaren Test-Set zu messen — vor dem Deployment in die Produktion. Siehe [Prompt-Evaluierungs-Metriken](/prompt-engineering/prompt-evaluation-metrics?lang=de) für einen vollständigen Überblick über Scoring-Ansätze.',
          snippets: [
            { type: 'in-one-sentence', text: 'Prompt-Qualität ist der Prozentsatz von Test-Eingaben, bei denen das Modell eine Ausgabe erzeugt, die alle definierten Erfolgskriterien erfüllt.' },
          ],
          callouts: [
            { type: 'pro-tip', label: 'Pro-Tipp', text: 'Definiere Erfolgskriterien, bevor du deinen Test-Set erstellst. Das Bewerten von Ausgaben ohne vordefinierte Rubrik reintroduciert die Subjektivität, die systematische Bewertung eliminieren soll.' },
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'Was sind die drei Komponenten der Prompt-Qualität?',
          content: '**Die drei Komponenten sind Accuracy, Konsistenz und Instruction-Following Rate — und jede erfordert eine separate Test-Strategie.**\n\n**Accuracy** misst, ob die Ausgabe der beabsichtigten Bedeutung oder dem Ergebnis entspricht. Bei Classification-Prompts ist Accuracy der Prozentsatz korrekt klassifizierter Eingaben. Bei Generation-Prompts erfordert Accuracy eine Rubrik oder Referenzausgabe.\n\n**Konsistenz** misst, ob dieselbe Eingabe über mehrere Durchläufe Ausgaben im erwarteten Bereich erzeugt. Hohe Temperatur und unterspecifizierte Prompts reduzieren beide die Konsistenz.\n\n**Instruction-Following Rate** misst, ob das Modell jede Einschränkung befolgt hat: Output-Format, Längenlimit, erforderliche Felder, Ton und verbotene Inhalte. Ein Prompt, der sagt „antworte im JSON", scheitert bei Instruction-Following jedes Mal, wenn er Klartext zurückgibt.',
          callouts: [
            { type: 'key-point', label: 'Wichtig', text: 'Accuracy und Instruction-Following Rate sind unterschiedliche Metriken. Ein Prompt kann faktisch korrekt sein, aber trotzdem bei Format-, Längen- oder Ton-Einschränkungen scheitern — beide müssen separat gemessen werden.' },
          ],
        },
        manualVsSystematic: {
          id: 'manual-vs-systematic',
          title: 'Warum funktioniert manuelles Spot-Checking nicht?',
          content: '**Manuelles Spot-Checking erzeugt nicht wiederholbare Ergebnisse und verfehlt die Edge Cases, die Produktionsfehler verursachen.** Zwei Entwickler, die denselben Prompt gegen unterschiedliche handgewählte Beispiele überprüfen, erreichen unterschiedliche Schlussfolgerungen.\n\nDie strukturellen Probleme mit manueller Überprüfung:\n\n- **Auswahlverzerrung:** Reviewer wählen Eingaben, von denen sie erwarten, dass sie funktionieren, nicht Eingaben zum Brechen des Prompts\n- **Nicht wiederholbar:** Eine Prompt-Änderung kann nicht fair gegen eine vorherige manuelle Überprüfung verglichen werden\n- **Nicht skalierbar:** 10 Beispiele verpassen 90 % der Fehlermodi in einem 100er Test-Set\n- **Keine Baseline:** Ohne aufgezeichnete Pass-Rate kannst du Regressionen nicht erkennen',
          columns: ['Kriterium', 'Manuelles Spot-Checking', 'Systematischer Test-Set'],
          rows: [
            { 'Kriterium': 'Reproduzierbarkeit', 'Manuelles Spot-Checking': 'Keine — unterschiedlich bei jeder Überprüfung', 'Systematischer Test-Set': 'Vollständig — gleicher Test-Set bei jedem Durchlauf' },
            { 'Kriterium': 'Edge-Case-Abdeckung', 'Manuelles Spot-Checking': 'Verfehlt die meisten Edge Cases', 'Systematischer Test-Set': 'Explizit enthalten' },
            { 'Kriterium': 'Baseline-Vergleich', 'Manuelles Spot-Checking': 'Nicht möglich', 'Systematischer Test-Set': 'Eingebaut — vergleiche Pass-Raten' },
            { 'Kriterium': 'Skalierung', 'Manuelles Spot-Checking': '5-10 Beispiele in der Praxis', 'Systematischer Test-Set': '20-200+ Fälle' },
          ],
          callouts: [
            { type: 'warning', label: 'Warnung', text: 'Manuelles Spot-Checking ist keine Baseline. Wenn du deine Bewertung nicht reproduzieren kannst, kannst du Regressionen nicht erkennen, wenn sich der Prompt oder das Modell ändert.' },
          ],
        },
        testSets: {
          id: 'test-sets',
          title: 'Wie erstellst du einen Prompt-Test-Set?',
          content: '**Erstelle einen Test-Set, indem du Eingaben über drei Kategorien hinweg sammelst, dann schreibe explizite Pass-Kriterien für jeden, bevor du Tests ausführst.**\n\n**Happy-Path-Eingaben (40 %):** Typische Eingaben, für die der Prompt designed wurde. Alle sollten bestehen.\n\n**Edge-Case-Eingaben (30 %):** Eingaben an der Grenze: leere Eingabe, sehr lange Eingabe, mehrsprachige Eingabe, ungewöhnliche Formatierung, fehlende erforderliche Felder. Diese enthüllen Sprödigkeit.\n\n**Adversarial-Eingaben (30 %):** Eingaben, die den Prompt zum Scheitern bringen sollen: Anweisungen, die dem System-Prompt widersprechen, Anforderungen, Einschränkungen zu ignorieren, Injection-ähnliche Muster. Diese enthüllen Sicherheits- und Zuverlässigkeitslücken.\n\nSchreibe ein Pass-Kriterium für jede Eingabe, bevor du den Test ausführst. Ein Test-Set ohne erwartete Ausgaben ist keine Bewertung. Wenn du Prompts in einer [Prompt-Bibliothek](/prompt-engineering/build-a-prompt-library?lang=de) speicherst, verfolge die Test-Set-Pass-Rate als Metadaten pro Eintrag.',
          promptExamples: [
            {
              bad: 'Teste den Prompt mit ein paar E-Mails und schaue, ob es gut aussieht.',
              good: '20 Test-Eingaben durchführen: 10 Kundenmails (Happy Path), 6 Edge Cases (leerer Body, Nicht-Englisch, keine Subject Line), 4 Adversarial Inputs (Anweisungen im E-Mail-Body eingebettet). Pass-Kriterium: JSON-Ausgabe mit Feldern [reason, priority, sentiment] alle populiert, priority in [low, medium, high].',
              badLabel: 'Vager Ansatz',
              goodLabel: 'Systematischer Test-Set',
            },
          ],
          callouts: [
            { type: 'pro-tip', label: 'Pro-Tipp', text: 'Schreibe erwartete Ausgaben für jede Test-Eingabe, bevor du den Test ausführst. Ein Test-Set ohne vordefinierte Kriterien ist keine Bewertung — es reintroduciert manuelle Judgment bei der Scoring-Zeit.' },
          ],
        },
        scoringRubrics: {
          id: 'scoring-rubrics',
          title: 'Wie bewertest du Prompt-Ausgaben?',
          content: '**Wähle deine Scoring-Methode basierend auf Output-Typ: Binary Pass/Fail für strukturierte Ausgaben, 1-5 Rubrik für Generation-Aufgaben und LLM-as-Judge für Free-Text-Bewertung.**\n\n**Binary Pass/Fail** ist am aussagekräftigsten. Verwende für JSON-Ausgaben, Classification-Ergebnisse und Ausgaben mit klarer korrekter Antwort. Pass-Rate = korrekte Ausgaben / Gesamt-Test-Fälle.\n\n**1-5 Skala Rubrik** funktioniert für Generation-Aufgaben, wo Teilpunkte sinnvoll sind. Definiere jeden Score-Level vor dem Testen: 5 = vollständig korrekt, 4 = geringes Problem, 3 = akzeptabel mit Caveats, 2 = erhebliches Problem, 1 = falsch oder schädlich.\n\n**LLM-as-Judge** nutzt GPT-5.5 oder Claude Opus 4.7, um Ausgaben gegen eine Rubrik zu bewerten. Stand Mitte 2026 ist LLM-as-Judge der dominante Ansatz zur Bewertung von Free-Text-Ausgaben in großem Maßstab. Der Judge-Prompt muss die Rubrik präzise spezifizieren.\n\n| Methode | Best for | Skalierung | Aufwand | Zuverlässigkeit |\n|---|---|---|---|---|\n| Binary Pass/Fail | Strukturierte Ausgabe, Classification | Jede Größe | Null nach Setup | Hoch — objektiv |\n| 1-5 Rubrik | Generation mit Teilpunkte | <100 Fälle | Mittel — manuelle Bewertung | Mittel — Rater-Varianz |\n| LLM-as-Judge | Free-Text, große Test-Sets | 1000+ Fälle | Niedrig — Rubrik-Design nur | Hoch — wenn Rubrik präzise |',
          codeBlock: '// LLM-as-Judge Scoring Prompt (Pseudocode)\nconst judgePrompt = `\nBewerte diese Kundenservice-Antwort 1-5:\n5 = Korrekt, professionell, adressiert alle Bedenken\n4 = Korrekt, geringes Problem\n3 = Teilweise korrekt\n2 = Falsch oder fehlende Schlüsselinfo\n1 = Falsch, unhöflich oder schädlich\n\nFrage: {input}\nAntwort: {output}\n\nScore (1-5) + Ein-Satz-Begründung:\n`;',
          codeLanguage: 'typescript',
          snippets: [
            { type: 'in-plain-terms', text: 'Stelle dir deine Scoring-Rubrik als Checkliste vor, die ein Lehrer zum Benoten von Arbeiten verwendet — jedes Kriterium muss abgehakenwerden, bevor die Ausgabe als korrekt zählt.' },
          ],
          callouts: [
            { type: 'key-point', label: 'Wichtig', text: 'LLM-as-Judge funktioniert am besten, wenn der Judge-Prompt die Rubrik präzise spezifiziert. Eine vage Rubrik erzeugt inkonsistente Scores — definiere jedes Score-Level mit konkretem Beispiel vor dem Durchlauf des Judge.' },
          ],
        },
        multiModel: {
          id: 'multi-model',
          title: 'Unterscheidet sich die Prompt-Qualität zwischen Modellen?',
          content: '**Ja — derselbe Prompt kann 20+ Punkte unterschiedlich zwischen GPT-5.5 und Claude Opus 4.7 scored, primär aufgrund von Instruction-Format-Sensitivität und System-Prompt-Handling.**\n\nQualitätslücken sind am größten für:\n\n- **JSON-Output-Formatierung:** Claude Opus 4.7 folgt komplexen Schemas strikter als GPT-5.5\n- **Instruction-Priorität:** GPT-5.5 gewichtet die zuletzt gegebene Anweisung; Claude Opus 4.7 gewichtet den System-Prompt\n- **Refusal-Muster:** OpenAI und Anthropic Modelle haben unterschiedliche Schwellen für Grenzfall-Inhalte\n\nUnsere Bewertung von Classification- und Formatting-Prompts über beide Modelle (aktualisiert bis April 2026) fand Pass-Rate-Unterschiede von 10–20 Punkten, wobei JSON-Output-Formatierung die größten Lücken erzeugte. Siehe [Wie man Prompts über Modelle testet](/prompt-engineering/how-to-test-prompts-across-models?lang=de) für vollständige Multi-Model-Evaluierungs-Methodik.\n\nNutze PromptQuorum, um denselben Test-Set zu GPT-5.5, Claude Opus 4.7 und Gemini 2.5 Pro in einem Durchlauf zu leiten und Pass-Raten Seite-an-Seite zu vergleichen.',
          callouts: [
            { type: 'warning', label: 'Warnung', text: 'Gehe nicht davon aus, dass ein Prompt, der auf GPT-5.5 bestanden hat, auf Claude Opus 4.7 bestehen wird. Führe denselben Test-Set auf jedem Modell aus, das du einsetzen möchtest — ein Prompt kann modellspezifisches Tuning benötigen.' },
          ],
        },
        howToStart: {
          id: 'how-to-start',
          title: 'So startest du mit der Bewertung',
          content: '**Starte mit Erfolgskriterien, bevor du den Test-Set erstellst — das Bewerten von Ausgaben ohne vordefinierte Kriterien reintroduciert die Subjektivität, die systematisches Testen eliminieren soll.** Arbeite die sechs Schritte unten durch, um ein wiederholbares Bewertungs-System aufzubauen. Wenn die Pass-Rate nach Änderungen sinkt, wende [Prompt-Sprödheit-Reduziertechniken](/prompt-engineering/how-to-reduce-prompt-brittleness?lang=de) an, bevor du neu bewertest.',
          numberedItems: [
            'Schreibe Erfolgskriterien auf, bevor du den Test-Set erstellst: Wie sieht eine korrekte Ausgabe in Bezug auf Format, Inhalt und Einschränkungen aus?',
            'Sammle 20 Test-Eingaben: 8 Happy-Path, 6 Edge Cases, 6 Adversarial. Schreibe erwartete Ausgaben oder Pass-Kriterien für jeden.',
            'Wähle eine Scoring-Methode: Binary für strukturierte Ausgaben, 1-5 Rubrik für Generation, LLM-as-Judge für Free Text.',
            'Führe alle 20 Eingaben durch deinen aktuellen Prompt und bewerte jede Ausgabe. Speichere diese Pass-Rate als deine Baseline.',
            'Leite denselben Test-Set zu GPT-5.5 und Claude Opus 4.7 via PromptQuorum und vergleiche Model-Level-Pass-Raten.',
            'Setze eine Regressions-Schwelle: Wenn eine Prompt-Änderung die Pass-Rate um mehr als 5 Punkte senkt, blockiere das Deployment.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Pro-Tipp', text: 'Führe den Test-Set zweimal aus — einmal vor und einmal nach jeder Prompt-Änderung. Der Unterschied in der Pass-Rate ist dein Änderungs-Impact-Score. Ein Rückgang von mehr als 5 Punkten signalisiert eine Regression.' },
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Was sind die häufigsten Fehler bei der Prompt-Bewertung?',
          mistakes: [
            {
              mistake: 'Nur Happy-Path-Eingaben testen',
              problem: 'Happy-Path-Eingaben, die immer bestehen, sagen dir nichts über Produktions-Zuverlässigkeit. Edge Cases und Adversarial Inputs verursachen die Fehler, denen Benutzer begegnen.',
              fix: 'Mindestens 30 % der Test-Eingaben sollten Edge Cases oder Adversarial sein. Ein 20er Test-Set sollte mindestens 6 Edge Cases und 4 Adversarial Inputs enthalten.',
            },
            {
              mistake: 'Keine erwarteten Ausgaben für Test-Fälle',
              problem: 'Das Bewerten von Ausgaben ohne vordefinierte Kriterien reintroduciert die subjektive Judgment, die systematische Bewertung eliminieren soll.',
              fix: 'Schreibe ein Pass-Kriterium für jede Test-Eingabe, bevor du den Test ausführst. Eine 20-Wort-Zusammenfassung der erwarteten Ausgabe pro Fall ist ausreichend.',
            },
            {
              mistake: 'Pass-Rate von einem Modell auf ein anderes übernehmen',
              problem: 'Derselbe Prompt scored regelmäßig 10-20 Punkte unterschiedlich zwischen GPT-5.5 und Claude Opus 4.7. Eine Pass-Rate von einem Modell auf ein anderes anzunehmen, führt zu Produktions-Überraschungen.',
              fix: 'Führe den Test-Set separat auf jedem Modell aus, das du einsetzen möchtest. GPT-5.5, Claude Opus 4.7 und Gemini 2.5 Pro benötigen alle unabhängige Bewertung.',
            },
            {
              mistake: 'Keine Baseline',
              problem: 'Ohne aufgezeichnete Pass-Rate aus der ersten Bewertung kannst du Regressionen nicht erkennen, wenn sich der Prompt oder das Modell ändert.',
              fix: 'Speichere die Pass-Rate, wenn du einen Prompt zum ersten Mal bewertest. Jede zukünftige Änderung muss gegen diese Baseline-Zahl verglichen werden.',
            },
          ],
          callouts: [
            { type: 'key-point', label: 'Wichtig', text: 'Jeder Fehler hier reintroduciert die Subjektivität, die systematische Bewertung eliminieren soll. Behandle diese als Anti-Patterns, um sie von Anfang an deines Bewertungs-Prozesses durchzusetzen.' },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: 'Welche regionalen Vorschriften beeinflussen die Prompt-Bewertung?',
          content: '**Regulatorische Anforderungen verlangen zunehmend dokumentierte KI-Output-Qualitätssicherung, wobei spezifische Verpflichtungen je nach Jurisdiktion variieren.**\n\n**EU (AI Act 2025–2026):** Hochrisiko-KI-Systeme unter dem EU AI Act müssen dokumentierte Test- und Qualitätssicherungsprozesse nachweisen. Prompt-Evaluierungs-Test-Sets und Pass-Rate-Records liefern audit-bereite Nachweise für systematische Qualitätskontrolle. DSGVO Artikel 22 erfordert auch, dass automatisierte Entscheidungen, die Einzelne betreffen, erklärbar sind — Prompt-Evaluierungs-Records unterstützen dies.\n\n**Deutschland (BSI-Grundschutz & DSGVO):** Für hochrisiko-KI-Systeme mit Personendaten gelten zusätzliche Anforderungen. Das BSI-Grundschutz-Katalog empfiehlt dokumentierte Test-Sets und Pass-Rate-Tracking als Zeichen von Qualitätskontrolle. Dokumentierte Prompt-Evaluierungen erfüllen beide DSGVO Artikel 28 (Datenverarbeitungs-Dokumentation) und BSI-Anforderungen an Informationssicherheits-Management.\n\n**US (SOC 2 / NIST AI RMF):** SOC 2 Type II Audits überprüfen zunehmend KI-bezogenes Change Management. Dokumentierte Prompt-Test-Sets mit Versionsgeschichte und Pass-Rate-Baselines erfüllen Audit-Anforderungen für Qualitätskontrolle auf KI-gesteuerten Workflows. Das NIST AI Risk Management Framework (aktualisiert bis 2026) betont Messung und Monitoring als Kern-Risikokontrollen.\n\n**Regulierte Industrien:** Financial Services, Healthcare und Legal Teams, die LLM-basierte Tools einsetzen, sollten Prompt-Evaluierungs-Records als Teil der Model-Governance-Dokumentation bewahren. Pass-Rate-Baselines und Regressions-Gates liefern messbare Qualitäts-Nachweise für Compliance-Reviews.',
          callouts: [
            { type: 'pro-tip', label: 'Pro-Tipp', text: 'Wenn deine Organisation SOC 2 oder Regulatory Audits unterliegt, werden Prompt-Evaluierungs-Test-Sets und Pass-Rate-Records zu Audit-Beweise. Speichere sie neben deiner Prompt-Bibliothek für einfache Abfrage.' },
          ],
        },
        relatedReading: {
          title: 'Weiterführende Lektüre',
          items: [
            '[Prompt-Evaluierungs-Metriken: Was gemessen werden soll und wie](/prompt-engineering/prompt-evaluation-metrics?lang=de) — Aufschlüsselung von Pass-Rate, BLEU, semantischer Ähnlichkeit und LLM-as-Judge',
            '[Wie man Prompts über Modelle testet](/prompt-engineering/how-to-test-prompts-across-models?lang=de) — Multi-Model-Bewertung für GPT-5.5 vs Claude vs Gemini',
            '[Wie man Prompt-Sprödheit reduziert](/prompt-engineering/how-to-reduce-prompt-brittleness?lang=de) — Output-Schemas, Few-Shot-Anker und Regressions-Gates',
            '[Prompt-Bibliothek erstellen](/prompt-engineering/build-a-prompt-library?lang=de) — Speichere Test-Sets neben Prompts mit Metadaten für Team-Wiederverwendung',
            '[Beste Prompt-Optimierungs-Tools für Teams](/prompt-engineering/best-prompt-optimization-tools-teams?lang=de) — Tools, die Test-Set-Management und Pass-Rate-Tracking enthalten',
            '[Grundlagen der Prompt-Optimierung](/prompt-engineering/fundamentals-of-prompt-optimization?lang=de) — Kern-Techniken zur Verbesserung von Accuracy und Instruction-Following Rate',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist Prompt-Qualität?', a: 'Prompt-Qualität misst, wie zuverlässig ein Prompt die beabsichtigte Ausgabe über verschiedene Eingaben erzeugt. Sie hat drei Dimensionen: Accuracy, Konsistenz und Instruction-Following Rate. Ein qualitativ hochwertiger Prompt erzeugt korrekte, konsistente und ordnungsgemäß formatierte Ausgaben zu 85%+ über alle Eingabetypen hinweg.' },
            { q: 'Wie bewertest du Prompt-Qualität?', a: 'Erstelle einen Test-Set mit 20+ Eingaben (Happy Path, Edge Cases, Adversarial), definiere Pass-Kriterien für jeden vor dem Testen, führe die Eingaben durch deinen Prompt und bewerte Ausgaben gegen deine Rubrik. Verfolge die Gesamt-Pass-Rate als Primärmetrik. Speichere diese Baseline, damit du Regressionen erkennen kannst, wenn sich der Prompt ändert.' },
            { q: 'Was ist Instruction-Following Rate?', a: 'Instruction-Following Rate ist der Prozentsatz von Ausgaben, bei denen das Modell jede Einschränkung im Prompt befolgt hat: Format, Länge, Ton, Umfang und verbotene Inhalte. Eine Rate von 90 % bedeutet, dass 1 von 10 Produktionsanfragen eine Einschränkung verletzt. Dies ist unterschiedlich von Accuracy und muss separat gemessen werden.' },
            { q: 'Warum funktioniert manuelles Spot-Checking nicht bei der Prompt-Bewertung?', a: 'Manuelles Spot-Checking ist nicht wiederholbar (verschiedene Reviewer wählen unterschiedliche Beispiele), auswahlverzerrend (Reviewer wählen unbewusst Fälle, von denen sie erwarten, dass sie bestehen) und nicht skalierbar (10 Beispiele verpassen 90 % der Fehlermodi in einem 100er Set). Automatisierte Test-Sets liefern konsistente, reproduzierbare Ergebnisse über Prompt-Versionen und Modell-Updates.' },
            { q: 'Wie viele Test-Fälle braucht ein Prompt-Test-Set?', a: 'Ein minimaler Test-Set braucht 20 Fälle: 10 Happy-Path-Eingaben für typische Nutzung, 5 Edge Cases an Grenzen (leere Eingabe, sehr lange Eingabe, mehrsprachige Texte) und 5 Adversarial Inputs. Weniger als 20 Fälle erzeugen statistisch unzuverlässige Pass-Raten, die reale Fehlerszenarien verpassen.' },
            { q: 'Unterscheidet sich die Prompt-Qualität zwischen GPT-5.5 und Claude Opus 4.7?', a: 'Ja, erheblich. Derselbe Prompt scored regelmäßig 10-20 Punkte unterschiedlich zwischen GPT-5.5 und Claude Opus 4.7 aufgrund von Unterschieden in der Instruction-Format-Sensitivität und dem System-Prompt-Handling. Messe die Pass-Rate immer separat auf jedem Modell, das du einsetzen möchtest. Ein Prompt, der auf GPT-5.5 95 % scored, kann auf Claude Opus 4.7 ohne modellspezifisches Tuning 80 % scored.' },
            { q: 'Was ist LLM-as-Judge Scoring und wann sollte ich es verwenden?', a: 'LLM-as-Judge nutzt ein leistungsstarkes Modell wie GPT-5.5 oder Claude Opus 4.7, um Ausgaben gegen eine Rubrik zu bewerten. Der Judge erhält die ursprüngliche Eingabe, deine Modell-Ausgabe und Evaluierungskriterien und liefert dann einen Score mit Begründung. Verwende LLM-as-Judge für Free-Text-Ausgaben, wo Binary Pass/Fail nicht ausreicht. Es skaliert auf Tausende Test-Fälle ohne menschliche Überprüfung, was es ideal für kontinuierliche Evaluierungs-Pipelines macht.' },
            { q: 'Wie setzt du eine Pass-Rate Regressions-Schwelle?', a: 'Speichere die Pass-Rate aus dem ersten Test-Durchlauf als Baseline. Ein Regressions-Gate von 5 Punkten ist üblich: wenn eine Prompt-Änderung die Pass-Rate um mehr als 5 Punkte relativ zur Baseline senkt, blockiere das Deployment. Teams zielen typischerweise auf 85–95 % Pass-Rate für Produktions-Prompts ab. Für kritische Workflows (legal, medizinisch, finanziell) verwende stattdessen ein 2-Punkte-Regressions-Gate.' },
            { q: 'Muss ich bei der Verwendung von Prompt-Bewertung die DSGVO beachten?', a: 'Ja. Wenn dein Prompt personenbezogene Daten verarbeitet, gelten DSGVO Artikel 28 (Datenverarbeitungs-Vereinbarungen) und Artikel 22 (automatisierte Entscheidungsfindung). Dokumentierte Prompt-Bewertungs-Test-Sets mit Pass-Rate-Records liefern audit-bereite Nachweise für systematische Qualitätskontrolle. Sie unterstützen auch die Erklärbarkeit, die Artikel 22 für automatisierte Entscheidungen erfordert. Speichere Test-Sets als Compliance-Dokumentation.' },
            { q: 'Ist Prompt-Bewertung für den deutschen Mittelstand geeignet?', a: 'Ja. Mittelständische Unternehmen profitieren von strukturierter Prompt-Bewertung, besonders wenn LLMs in kundenorientierten oder sicherheitskritischen Workflows eingesetzt werden. Ein 20er Test-Set mit dokumentierten Pass-Raten erfüllt BSI-Grundschutz-Katalog Anforderungen für Qualitätskontrolle. Der Aufwand ist niedrig (ein Test-Set mit etwa 6 Stunden Vorbereitung), und die Compliance-Dokumentation reduziert IT-Sicherheits-Audit-Fragen. Besonders relevant für Finanz-, Versicherungs- und Industrie-Mittelstand.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[OpenAI Evals Framework (github.com/openai/evals)](https://github.com/openai/evals) — Open-Source-Framework zur Bewertung von LLM-Ausgaben mit Test Harness und Scoring-Utilities',
            '[Anthropic Model Evaluations (anthropic.com)](https://www.anthropic.com/news/model-evaluations) — Anthropic Ansatz zur Capability und Safety Evaluierungs-Methodik',
            '[The Prompt Report: Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Umfassender Rahmen der Prompt-Design und Bewertung über 50+ Techniken abdeckt.',
            '[DeepEval: LLM Evaluation Framework (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Open-Source-Framework für automatisierte LLM-Output-Bewertung mit Metriken, Test-Sets und CI/CD-Integration.',
            '[NIST AI Risk Management Framework (airc.nist.gov)](https://airc.nist.gov/Home) — NIST, 2023–2026 (aktualisiert). Framework abdeckt KI-System-Bewertung, Qualitätssicherungs-Methodik und Governance-Dokumentation für regulierte Umgebungen.',
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-10-10',
      theme: 'Techniques',
      title: 'Comment évaluer la qualité des prompts : Un guide pratique',
      seoTitle: 'Évaluer la qualité des prompts : Test-Sets & Scoring (2026)',
      metaDescription: 'Évaluez la qualité des prompts avec 20 cas, Pass/Fail et scoring LLM-as-Judge. Mesurez précision, cohérence et taux de conformité aux instructions. Guide étape par étape. Avril 2026.',
      ogDescription: 'La plupart des équipes évaluent les prompts par vérification manuelle sur quelques exemples handpickés. C\'est ignorer 90 % des modes de défaillance. Un ensemble de 20 cas avec critères prédéfinis capture ce que la révision manuelle ne voit pas.',
      twitterDescription: 'Qualité des prompts = précision + cohérence + conformité aux instructions. 20 cas, scoring LLM-as-Judge, régression gating. Guide inclus.',
      intro: '**La qualité des prompts mesure la fiabilité avec laquelle un prompt produit la sortie prévue sur différentes entrées, modèles et conditions.** La plupart des équipes s\'appuient sur la vérification manuelle, qui ignore les cas limites, ne s\'adapte pas à l\'échelle et produit des résultats non reproductibles entre les versions.',
      leadAnswerBlock: '**La qualité des prompts est la fiabilité avec laquelle un prompt produit la sortie prévue sur différentes entrées et conditions.** Trois dimensions mesurables : précision (la sortie correspond à l\'intention), cohérence (la même entrée produit une plage de sortie cohérente), et taux de conformité aux instructions (tous les critères respectés). Testez avec un ensemble de 20 cas et suivez le taux de passage comme baseline.',
      publishDate: '2026-04-10',
      dateModified: '2026-04-29',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      audience: 'Développeurs et équipes déployant des LLM en production',
      primaryTerm: 'évaluation de la qualité des prompts',
      aboutTopics: ['évaluation des prompts', 'ensembles de tests', 'scoring LLM'],
      quickFacts: [
        'Ensemble de tests minimal : 20 cas — 10 chemins heureux, 5 cas limites, 5 entrées adversariales',
        'Pass/Fail binaire est plus utile pour les sorties structurées avec une réponse clairement correcte',
        'GPT-5.5 et Claude Opus 4.7 diffèrent en moyenne de 10–20 points dans le scoring du même prompt',
        'LLM-as-Judge peut évaluer des milliers de cas sans révision humaine',
        'Un taux de conformité aux instructions de 90 % signifie que 1 requête de production sur 10 viole une contrainte',
      ],
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce que la qualité des prompts ?', anchor: '#what-is-prompt-quality' },
        { label: 'Quels sont les trois composants de la qualité des prompts ?', anchor: '#three-components' },
        { label: 'Pourquoi la vérification manuelle échoue-t-elle ?', anchor: '#manual-vs-systematic' },
        { label: 'Comment construire un ensemble de tests de prompts ?', anchor: '#test-sets' },
        { label: 'Comment évaluer les sorties de prompts ?', anchor: '#scoring-rubrics' },
        { label: 'La qualité diffère-t-elle selon les modèles ?', anchor: '#multi-model' },
        { label: 'Comment commencer l\'évaluation', anchor: '#how-to-start' },
        { label: 'Quelles sont les erreurs les plus courantes ?', anchor: '#common-mistakes' },
        { label: 'Quels règlementations régionales affectent l\'évaluation ?', anchor: '#regional-considerations' },
        { label: 'Questions fréquemment posées', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Comment évaluer la qualité des prompts : Un guide pratique',
        description: 'Évaluez la qualité des prompts avec 20 cas, Pass/Fail et scoring LLM-as-Judge. Mesurez précision, cohérence et taux de conformité aux instructions. Guide étape par étape. Avril 2026.',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        datePublished: '2026-04-10',
        dateModified: '2026-04-29',
        url: 'https://www.promptquorum.com/prompt-engineering/how-to-evaluate-prompt-quality?lang=fr',
        inLanguage: 'fr',
        proficiencyLevel: 'Intermediate',
        about: [
          { '@type': 'Thing', name: 'Évaluation des prompts' },
          { '@type': 'Thing', name: 'Ensembles de tests LLM' },
          { '@type': 'Thing', name: 'Taux de conformité aux instructions' },
        ],
        audience: { '@type': 'Audience', audienceType: 'Développeurs et équipes déployant des LLM en production' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          { '@type': 'Question', name: 'Qu\'est-ce que la qualité des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'La qualité des prompts mesure la fiabilité avec laquelle un prompt produit la sortie prévue sur différentes entrées. Elle a trois dimensions : précision, cohérence et taux de conformité aux instructions. Un prompt de qualité produit des sorties correctes, cohérentes et correctement formatées à 85%+ sur tous les types d\'entrées.' } },
          { '@type': 'Question', name: 'Comment évaluez-vous la qualité des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Construisez un ensemble de tests de 20+ entrées (chemins heureux, cas limites, adversariales), définissez les critères de passage avant de tester, exécutez les entrées via votre prompt, et évaluez les sorties contre votre rubrique. Suivez le taux de passage global comme métrique primaire. Enregistrez cette baseline pour détecter les régressions quand le prompt change.' } },
          { '@type': 'Question', name: 'Qu\'est-ce que le taux de conformité aux instructions ?', acceptedAnswer: { '@type': 'Answer', text: 'Le taux de conformité aux instructions est le pourcentage de sorties où le modèle a respecté chaque contrainte du prompt : format, longueur, ton, portée et contenu interdit. Un taux de 90 % signifie que 1 requête de production sur 10 viole une contrainte. C\'est distinct de la précision et doit être mesuré séparément.' } },
          { '@type': 'Question', name: 'Pourquoi la vérification manuelle échoue-t-elle pour l\'évaluation des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'La vérification manuelle n\'est pas reproductible (différents examinateurs choisissent différents exemples), souffre de biais de sélection (les examinateurs choisissent inconsciemment des cas qu\'ils s\'attendent à voir réussir), et ne s\'adapte pas à l\'échelle (10 exemples manquent 90 % des modes de défaillance dans un ensemble de 100). Les ensembles de tests automatisés produisent des résultats cohérents et reproductibles.' } },
          { '@type': 'Question', name: 'De combien de cas de test un ensemble de tests a-t-il besoin ?', acceptedAnswer: { '@type': 'Answer', text: 'Un ensemble de tests minimal a besoin de 20 cas : 10 entrées de chemin heureux couvrant l\'usage typique, 5 cas limites testant les frontières (entrée vide, entrée très longue, texte multilingue), et 5 entrées adversariales. Moins de 20 cas produit des taux de passage statistiquement peu fiables qui manquent les vrais modes de défaillance.' } },
          { '@type': 'Question', name: 'La qualité des prompts diffère-t-elle entre GPT-5.5 et Claude Opus 4.7 ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, considérablement. Le même prompt score régulièrement 10-20 points différemment entre GPT-5.5 et Claude Opus 4.7 en raison de différences dans la sensibilité aux formats d\'instructions et la gestion du prompt système. Mesurez toujours le taux de passage séparément sur chaque modèle que vous prévoyez de déployer. Un prompt qui score 95 % sur GPT-5.5 peut score 80 % sur Claude Opus 4.7 sans tuning modèle-spécifique.' } },
          { '@type': 'Question', name: 'Qu\'est-ce que le scoring LLM-as-Judge et quand l\'utiliser ?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-Judge utilise un modèle capable comme GPT-5.5 ou Claude Opus 4.7 pour évaluer les sorties contre une rubrique. Le juge reçoit l\'entrée originale, la sortie de votre modèle et les critères d\'évaluation, puis retourne un score avec justification. Utilisez LLM-as-Judge pour les sorties de texte libre où Pass/Fail binaire n\'est pas suffisant. Cela s\'adapte à des milliers de cas de test sans révision humaine, le rendant idéal pour les pipelines d\'évaluation continus.' } },
          { '@type': 'Question', name: 'Comment définir un seuil de régression du taux de passage ?', acceptedAnswer: { '@type': 'Answer', text: 'Enregistrez le taux de passage du premier test en tant que baseline. Un gate de régression de 5 points est courant : si une modification du prompt abaisse le taux de passage de plus de 5 points par rapport à la baseline, bloquez le déploiement. Les équipes ciblent généralement 85–95 % de taux de passage pour les prompts en production. Pour les workflows critiques (juridique, médical, financier), utilisez plutôt un gate de 2 points.' } },
          { '@type': 'Question', name: 'Comment intégrer l\'évaluation dans mon flux de travail ?', acceptedAnswer: { '@type': 'Answer', text: 'Créez un ensemble de 20 cas de test, exécutez-le une fois pour établir une baseline, puis réexécutez-le après chaque modification du prompt pour détecter les régressions. Un gate d\'au moins 5 points prévient les dégradations. Stockez les résultats avec le prompt pour la traçabilité. Les workflows à haut risque (finances, santé, légal) appliquent des gates plus stricts et utilisent LLM-as-Judge pour une évaluation continue.' } },
          { '@type': 'Question', name: 'Quels outils existent pour l\'évaluation automatisée des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'OpenAI Evals fournit un cadre de test harness, Anthropic publie les méthodes d\'évaluation, DeepEval offre un framework open-source avec métriques et intégration CI/CD, et PromptQuorum permet de diriger les ensembles de tests sur plusieurs modèles. Le choix dépend de votre cas d\'usage et de votre complexité d\'évaluation.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Comment évaluer la qualité des prompts',
        inLanguage: 'fr',
        step: [
          { '@type': 'HowToStep', name: 'Définir les critères de succès', text: 'Écrivez ce qu\'une sortie correcte ressemble : format, contenu, longueur et éléments interdits.' },
          { '@type': 'HowToStep', name: 'Construire votre ensemble de tests', text: 'Collectez 20+ entrées : chemins heureux, cas limites et entrées adversariales. Écrivez les sorties attendues pour chaque.' },
          { '@type': 'HowToStep', name: 'Choisir une rubrique de scoring', text: 'Choisissez Pass/Fail binaire, rubrique 1-5, ou scoring LLM-as-Judge en fonction du type de sortie.' },
          { '@type': 'HowToStep', name: 'Exécuter l\'ensemble de tests', text: 'Dirigez toutes les entrées de test via votre prompt et collectez les sorties.' },
          { '@type': 'HowToStep', name: 'Évaluer les sorties contre la rubrique', text: 'Évaluez chaque sortie et calculez le taux de passage global.' },
          { '@type': 'HowToStep', name: 'Établir une baseline et suivre les changements', text: 'Enregistrez le taux de passage en tant que baseline. Chaque future modification du prompt doit être comparée à ce nombre.' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          title: 'Points clés',
          items: [
            'Qualité des prompts = précision + cohérence + taux de conformité aux instructions sur différentes entrées',
            'La vérification manuelle n\'est pas reproductible et manque les cas limites — utilisez des ensembles de tests automatisés',
            'Un ensemble de tests minimal a besoin de 20 cas : chemins heureux, cas limites et entrées adversariales',
            'Pass/Fail binaire est la métrique la plus utile pour les prompts de sortie structurée',
            'LLM-as-Judge (GPT-5.5 ou Claude évalue les sorties contre une rubrique) s\'adapte aux tâches de texte libre',
            'Utilisez PromptQuorum pour diriger le même ensemble de tests vers GPT-5.5 et Claude Opus 4.7 et comparer les taux de passage côte à côte',
          ],
        },
        definition: {
          id: 'what-is-prompt-quality',
          title: 'Qu\'est-ce que la qualité des prompts ?',
          content: '**La qualité des prompts est la fiabilité avec laquelle un prompt produit la sortie prévue sur différentes entrées, modèles et conditions.** Un prompt qui fonctionne sur dix exemples handpickés peut avoir un taux d\'erreur de 20 % quand les vrais utilisateurs l\'utilisent à grande échelle.\n\nLa qualité n\'est pas un nombre unique. Elle a trois dimensions indépendantes : précision, cohérence et taux de conformité aux instructions. Un prompt peut échouer sur l\'une d\'elles tout en paraissant fonctionner sur des exemples cherry-picked.\n\nL\'évaluation systématique signifie mesurer les trois dimensions contre un ensemble de tests reproductible — avant de déployer en production. Voir [métriques d\'évaluation des prompts](/prompt-engineering/prompt-evaluation-metrics?lang=fr) pour une analyse complète des approches de scoring.',
          snippets: [
            { type: 'in-one-sentence', text: 'La qualité des prompts est le pourcentage d\'entrées de test où le modèle produit une sortie qui répond à tous les critères de succès définis.' },
          ],
          callouts: [
            { type: 'pro-tip', label: 'Conseil', text: 'Définissez les critères de succès avant de construire votre ensemble de tests. Évaluer les sorties sans rubrique prédéfinie réintroduit la subjectivité que l\'évaluation systématique est conçue pour éliminer.' },
          ],
        },
        threeComponents: {
          id: 'three-components',
          title: 'Quels sont les trois composants de la qualité des prompts ?',
          content: '**Les trois composants sont la précision, la cohérence et le taux de conformité aux instructions — et chacun exige une stratégie de test distincte.**\n\n**Précision** mesure si la sortie correspond au sens ou au résultat prévu. Pour les prompts de classification, la précision est le pourcentage d\'entrées correctement classifiées. Pour les prompts de génération, la précision exige une rubrique ou une sortie de référence.\n\n**Cohérence** mesure si la même entrée produit une sortie dans la plage attendue sur plusieurs exécutions. La température élevée et les prompts sous-spécifiés réduisent tous deux la cohérence.\n\n**Taux de conformité aux instructions** mesure si le modèle a respecté chaque contrainte : format de sortie, limite de longueur, champs obligatoires, ton et contenu interdit. Un prompt qui dit « répond en JSON » échoue la conformité chaque fois qu\'il retourne du texte brut.',
          callouts: [
            { type: 'key-point', label: 'Important', text: 'La précision et le taux de conformité aux instructions sont des métriques différentes. Un prompt peut être factuellement correct mais échouer sur les contraintes de format, de longueur ou de ton — les deux doivent être mesurés séparément.' },
          ],
        },
        manualVsSystematic: {
          id: 'manual-vs-systematic',
          title: 'Pourquoi la vérification manuelle échoue-t-elle ?',
          content: '**La vérification manuelle produit des résultats non reproductibles et manque les cas limites qui causent les défaillances en production.** Deux développeurs examinant le même prompt contre différents exemples handpickés tireront des conclusions différentes.\n\nLes problèmes structurels de la révision manuelle :\n\n- **Biais de sélection:** Les examinateurs choisissent des entrées qu\'ils s\'attendent à voir fonctionner, pas des entrées conçues pour casser le prompt\n- **Non reproductible:** Une modification du prompt ne peut pas être comparée équitablement à une révision manuelle antérieure\n- **N\'adapte pas à l\'échelle:** 10 exemples manquent 90 % des modes de défaillance visibles dans un ensemble de 100 cas\n- **Pas de baseline:** Sans un taux de passage enregistré, vous ne pouvez pas détecter les régressions',
          columns: ['Critère', 'Vérification manuelle', 'Ensemble de tests systématique'],
          rows: [
            { 'Critère': 'Reproductibilité', 'Vérification manuelle': 'Aucune — différente à chaque révision', 'Ensemble de tests systématique': 'Complète — même ensemble à chaque exécution' },
            { 'Critère': 'Couverture des cas limites', 'Vérification manuelle': 'Manque la plupart des cas limites', 'Ensemble de tests systématique': 'Explicitement inclus' },
            { 'Critère': 'Comparaison de baseline', 'Vérification manuelle': 'Pas possible', 'Ensemble de tests systématique': 'Intégré — comparez les taux de passage' },
            { 'Critère': 'Échelle', 'Vérification manuelle': '5-10 exemples en pratique', 'Ensemble de tests systématique': '20-200+ cas' },
          ],
          callouts: [
            { type: 'warning', label: 'Avertissement', text: 'La vérification manuelle n\'est pas une baseline. Si vous ne pouvez pas reproduire votre évaluation, vous ne pouvez pas détecter les régressions quand le prompt ou le modèle change.' },
          ],
        },
        testSets: {
          id: 'test-sets',
          title: 'Comment construire un ensemble de tests de prompts ?',
          content: '**Construisez un ensemble de tests en collectant des entrées sur trois catégories, puis écrivez des critères de passage explicites pour chacun avant d\'exécuter des tests.**\n\n**Entrées de chemin heureux (40%):** Entrées typiques pour lesquelles le prompt a été conçu. Tous devraient réussir.\n\n**Entrées de cas limites (30%):** Entrées aux frontières : entrée vide, entrée très longue, entrée multilingue, formatage inhabituel, champs obligatoires manquants. Celles-ci révèlent la fragilité.\n\n**Entrées adversariales (30%):** Entrées conçues pour faire échouer le prompt : instructions qui contredisent le prompt système, demandes d\'ignorer des contraintes, motifs de type injection. Celles-ci révèlent des lacunes en sécurité et fiabilité.\n\nÉcrivez un critère de passage pour chaque entrée avant d\'exécuter le test. Un ensemble de tests sans sorties attendues n\'est pas une évaluation. Si vous stockez les prompts dans une [bibliothèque de prompts](/prompt-engineering/build-a-prompt-library?lang=fr), suivez le taux de passage de l\'ensemble de tests comme métadonnées par entrée.',
          promptExamples: [
            {
              bad: 'Testez le prompt avec quelques emails et voyez si ça a l\'air bon.',
              good: 'Exécutez 20 entrées de test : 10 emails de clients (chemin heureux), 6 cas limites (corps vide, non-anglais, pas de subject line), 4 entrées adversariales (instructions intégrées dans le corps du email). Critère de passage : sortie JSON avec champs [reason, priority, sentiment] tous populés, priority dans [low, medium, high].',
              badLabel: 'Approche vague',
              goodLabel: 'Ensemble de tests systématique',
            },
          ],
          callouts: [
            { type: 'pro-tip', label: 'Conseil', text: 'Écrivez les sorties attendues pour chaque entrée de test avant d\'exécuter le test. Un ensemble de tests sans critères prédéfinis n\'est pas une évaluation — il réintroduit le jugement manuel au moment du scoring.' },
          ],
        },
        scoringRubrics: {
          id: 'scoring-rubrics',
          title: 'Comment évaluer les sorties de prompts ?',
          content: '**Choisissez votre méthode de scoring en fonction du type de sortie : Pass/Fail binaire pour les sorties structurées, rubrique 1-5 pour les tâches de génération, et LLM-as-Judge pour l\'évaluation de texte libre.**\n\n**Pass/Fail binaire** est le plus utile. Utilisez pour les sorties JSON, les résultats de classification et les sorties avec une réponse clairement correcte. Taux de passage = sorties correctes / cas de test totaux.\n\n**Rubrique 1-5** fonctionne pour les tâches de génération où le crédit partiel est significatif. Définissez chaque niveau de score avant le test : 5 = complètement correct, 4 = problème mineur, 3 = acceptable avec réserves, 2 = problème significatif, 1 = incorrect ou nuisible.\n\n**LLM-as-Judge** utilise GPT-5.5 ou Claude Opus 4.7 pour évaluer les sorties contre une rubrique. Depuis mi-2026, LLM-as-Judge est l\'approche dominante pour évaluer les sorties de texte libre à grande échelle. Le prompt du judge doit spécifier la rubrique avec précision.\n\n| Méthode | Meilleur pour | Échelle | Effort | Fiabilité |\n|---|---|---|---|---|\n| Pass/Fail binaire | Sortie structurée, classification | Toute taille | Zéro après setup | Haute — objectif |\n| Rubrique 1-5 | Génération avec crédit partiel | <100 cas | Moyen — scoring manuel | Moyen — variance inter-rater |\n| LLM-as-Judge | Texte libre, grands ensembles de tests | 1000+ cas | Bas — design de rubrique seulement | Haute — si rubrique précise |',
          codeBlock: '// Prompt de scoring LLM-as-Judge (pseudocode)\nconst judgePrompt = `\nÉvaluez cette réponse de support client 1-5:\n5 = Correct, professionnel, adresse toutes les préoccupations\n4 = Correct, problème mineur\n3 = Partiellement correct\n2 = Incorrect ou info clé manquante\n1 = Faux, grossier ou nuisible\n\nQuestion: {input}\nRéponse: {output}\n\nScore (1-5) + justification d\'une phrase:\n`;',
          codeLanguage: 'typescript',
          snippets: [
            { type: 'in-plain-terms', text: 'Pensez à votre rubrique de scoring comme une checklist qu\'un professeur utilise pour noter des travaux — chaque critère doit être coché avant que la sortie compte comme correcte.' },
          ],
          callouts: [
            { type: 'key-point', label: 'Important', text: 'LLM-as-Judge fonctionne mieux quand le prompt du judge spécifie la rubrique précisément. Une rubrique vague produit des scores incohérents — définissez chaque niveau de score avec un exemple concret avant d\'exécuter le judge.' },
          ],
        },
        multiModel: {
          id: 'multi-model',
          title: 'La qualité des prompts diffère-t-elle selon les modèles ?',
          content: '**Oui — le même prompt peut scorer 20+ points différemment entre GPT-5.5 et Claude Opus 4.7, principalement en raison de la sensibilité aux formats d\'instructions et à la gestion du prompt système.**\n\nLes écarts de qualité sont plus larges pour :\n\n- **Formatage de sortie JSON:** Claude Opus 4.7 suit les schémas complexes plus strictement que GPT-5.5\n- **Priorité des instructions:** GPT-5.5 pèse l\'instruction la plus récente; Claude Opus 4.7 pèse le prompt système\n- **Motifs de refus:** Les modèles OpenAI et Anthropic ont différents seuils pour le contenu borderline\n\nNotre évaluation des prompts de classification et de formatage sur les deux modèles (mise à jour jusqu\'en avril 2026) a trouvé des différences de taux de passage de 10–20 points, le formatage de sortie JSON produisant les plus grands écarts. Consultez [comment tester les prompts sur plusieurs modèles](/prompt-engineering/how-to-test-prompts-across-models?lang=fr) pour la méthodologie d\'évaluation multi-modèle complète.\n\nUtilisez PromptQuorum pour diriger le même ensemble de tests vers GPT-5.5, Claude Opus 4.7 et Gemini 2.5 Pro en une exécution et comparez les taux de passage côte à côte.',
          callouts: [
            { type: 'warning', label: 'Avertissement', text: 'Ne supposez pas qu\'un prompt qui réussit sur GPT-5.5 réussira sur Claude Opus 4.7. Exécutez le même ensemble de tests sur chaque modèle que vous prévoyez de déployer — un prompt peut nécessiter un tuning modèle-spécifique.' },
          ],
        },
        howToStart: {
          id: 'how-to-start',
          title: 'Comment commencer l\'évaluation',
          content: '**Commencez avec les critères de succès avant de construire l\'ensemble de tests — évaluer les sorties sans critères prédéfinis réintroduit la subjectivité que le test systématique est conçu pour éliminer.** Parcourez les six étapes ci-dessous pour configurer un système d\'évaluation reproductible. Si le taux de passage baisse après les changements, appliquez les [techniques de réduction de la fragilité des prompts](/prompt-engineering/how-to-reduce-prompt-brittleness?lang=fr) avant de réévaluer.',
          numberedItems: [
            'Écrivez les critères de succès avant de construire l\'ensemble de tests : comment une sortie correcte ressemble-t-elle en termes de format, contenu et contraintes ?',
            'Collectez 20 entrées de test : 8 chemin heureux, 6 cas limites, 6 adversariales. Écrivez les sorties attendues ou critères de passage pour chacun.',
            'Choisissez une méthode de scoring : binaire pour sorties structurées, rubrique 1-5 pour génération, LLM-as-Judge pour texte libre.',
            'Exécutez les 20 entrées via votre prompt actuel et évaluez chaque sortie. Enregistrez ce taux de passage comme votre baseline.',
            'Dirigez le même ensemble de tests vers GPT-5.5 et Claude Opus 4.7 via PromptQuorum et comparez les taux de passage au niveau du modèle.',
            'Définissez un seuil de régression : si une modification du prompt abaisse le taux de passage de plus de 5 points, bloquez le déploiement.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Conseil', text: 'Exécutez l\'ensemble de tests deux fois — une fois avant et une fois après chaque modification du prompt. La différence du taux de passage est votre score d\'impact de changement. Une baisse de plus de 5 points signale une régression.' },
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quelles sont les erreurs les plus courantes ?',
          mistakes: [
            {
              mistake: 'Tester uniquement des entrées de chemin heureux',
              problem: 'Les entrées de chemin heureux qui réussissent toujours vous disent rien sur la fiabilité en production. Les cas limites et les entrées adversariales causent les défaillances que rencontrent les utilisateurs.',
              fix: 'Au minimum 30% des entrées de test doivent être des cas limites ou adversariales. Un ensemble de 20 cas doit inclure au moins 6 cas limites et 4 entrées adversariales.',
            },
            {
              mistake: 'Pas de sorties attendues pour les cas de test',
              problem: 'Évaluer les sorties sans critères prédéfinis réintroduit le jugement subjectif que l\'évaluation systématique est conçue pour éliminer.',
              fix: 'Écrivez un critère de passage pour chaque entrée de test avant d\'exécuter le test. Un résumé de sortie attendu de 20 mots par cas est suffisant.',
            },
            {
              mistake: 'Utiliser le taux de passage d\'un modèle sur un autre',
              problem: 'Le même prompt score régulièrement 10-20 points différemment entre GPT-5.5 et Claude Opus 4.7. En supposant que le taux de passage d\'un modèle s\'applique à un autre conduit à des surprises en production.',
              fix: 'Exécutez l\'ensemble de tests séparément sur chaque modèle que vous prévoyez de déployer. GPT-5.5, Claude Opus 4.7 et Gemini 2.5 Pro nécessitent tous une évaluation indépendante.',
            },
            {
              mistake: 'Pas de baseline',
              problem: 'Sans un taux de passage enregistré de la première évaluation, vous ne pouvez pas détecter les régressions quand le prompt ou le modèle change.',
              fix: 'Enregistrez le taux de passage la première fois que vous évaluez un prompt. Chaque changement futur doit être comparé à ce nombre baseline.',
            },
          ],
          callouts: [
            { type: 'key-point', label: 'Important', text: 'Chaque erreur ici réintroduit la subjectivité que l\'évaluation systématique est conçue pour éliminer. Traitez-les comme des anti-patterns à appliquer dès le début de votre processus d\'évaluation.' },
          ],
        },
        regionalConsiderations: {
          id: 'regional-considerations',
          title: 'Quels règlementations régionales affectent l\'évaluation ?',
          content: '**Les exigences réglementaires exigent de plus en plus une assurance qualité documentée des sorties IA, avec des obligations spécifiques variant selon la juridiction.**\n\n**UE (AI Act 2025–2026):** Les systèmes IA à haut risque en vertu de l\'AI Act doivent démontrer des processus de test et d\'assurance qualité documentés. Les ensembles de tests d\'évaluation des prompts et les enregistrements de taux de passage fournissent des preuves audit-ready pour le contrôle de qualité systématique. Le RGPD Article 22 exige également que les décisions automatisées affectant les individus soient explicables — les enregistrements d\'évaluation des prompts supportent cela.\n\n**CNIL (France – Protection des données):** La CNIL recommande les LLM localement inférencés pour le traitement des données sensibles (financières, médicales, juridiques) pour satisfaire aux exigences de conformité du RGPD. Les ensembles de tests documentés avec les taux de passage fournissent des preuves que le système respecte les contraintes prévues dans le prompt, supportant les audits de conformité des données et les demandes d\'explicabilité.\n\n**US (SOC 2 / NIST AI RMF):** Les audits SOC 2 Type II examinent de plus en plus la gestion des changements liés à l\'IA. Les ensembles de tests de prompts documentés avec l\'historique de version et les baselines de taux de passage satisfont les exigences d\'audit pour les contrôles de qualité sur les workflows dirigés par l\'IA. Le NIST AI Risk Management Framework (mis à jour jusqu\'en 2026) souligne la mesure et le monitoring comme contrôles de risque essentiels.\n\n**Industries réglementées:** Les équipes de services financiers, de santé et juridiques déployant des outils basés sur LLM doivent maintenir les enregistrements d\'évaluation des prompts comme partie de la documentation de gouvernance des modèles. Les baselines de taux de passage et les gates de régression fournissent des preuves de qualité mesurables pour les examens de conformité.',
          callouts: [
            { type: 'pro-tip', label: 'Conseil', text: 'Si votre organisation subit des audits SOC 2 ou réglementaires, les ensembles de tests d\'évaluation des prompts et les enregistrements de taux de passage deviennent des preuves d\'audit. Stockez-les aux côtés de votre bibliothèque de prompts pour une récupération facile.' },
          ],
        },
        relatedReading: {
          title: 'Lectures connexes',
          items: [
            '[Métriques d\'évaluation des prompts : quoi mesurer et comment](/prompt-engineering/prompt-evaluation-metrics?lang=fr) — Décomposition du taux de passage, BLEU, similarité sémantique et LLM-as-Judge',
            '[Comment tester les prompts sur plusieurs modèles](/prompt-engineering/how-to-test-prompts-across-models?lang=fr) — Évaluation multi-modèle pour GPT-5.5 vs Claude vs Gemini',
            '[Comment réduire la fragilité des prompts](/prompt-engineering/how-to-reduce-prompt-brittleness?lang=fr) — Schémas de sortie, ancres few-shot et gates de régression',
            '[Construire une bibliothèque de prompts](/prompt-engineering/build-a-prompt-library?lang=fr) — Stockez les ensembles de tests aux côtés des prompts avec métadonnées pour la réutilisation d\'équipe',
            '[Meilleurs outils d\'optimisation des prompts pour les équipes](/prompt-engineering/best-prompt-optimization-tools-teams?lang=fr) — Outils incluant la gestion des ensembles de tests et le suivi du taux de passage',
            '[Fondamentaux de l\'optimisation des prompts](/prompt-engineering/fundamentals-of-prompt-optimization?lang=fr) — Techniques essentielles pour améliorer la précision et le taux de conformité aux instructions',
          ],
        },
        faq: {
          id: 'faq',
          title: 'Questions fréquemment posées',
          faqs: [
            { q: 'Qu\'est-ce que la qualité des prompts ?', a: 'La qualité des prompts mesure la fiabilité avec laquelle un prompt produit la sortie prévue sur différentes entrées. Elle a trois dimensions : précision, cohérence et taux de conformité aux instructions. Un prompt de qualité produit des sorties correctes, cohérentes et correctement formatées à 85%+ sur tous les types d\'entrées.' },
            { q: 'Comment évaluez-vous la qualité des prompts ?', a: 'Construisez un ensemble de tests de 20+ entrées (chemins heureux, cas limites, adversariales), définissez les critères de passage avant de tester, exécutez les entrées via votre prompt, et évaluez les sorties contre votre rubrique. Suivez le taux de passage global comme métrique primaire. Enregistrez cette baseline pour détecter les régressions quand le prompt change.' },
            { q: 'Qu\'est-ce que le taux de conformité aux instructions ?', a: 'Le taux de conformité aux instructions est le pourcentage de sorties où le modèle a respecté chaque contrainte du prompt : format, longueur, ton, portée et contenu interdit. Un taux de 90 % signifie que 1 requête de production sur 10 viole une contrainte. C\'est distinct de la précision et doit être mesuré séparément.' },
            { q: 'Pourquoi la vérification manuelle échoue-t-elle pour l\'évaluation des prompts ?', a: 'La vérification manuelle n\'est pas reproductible (différents examinateurs choisissent différents exemples), souffre de biais de sélection (les examinateurs choisissent inconsciemment des cas qu\'ils s\'attendent à voir réussir), et ne s\'adapte pas à l\'échelle (10 exemples manquent 90 % des modes de défaillance dans un ensemble de 100). Les ensembles de tests automatisés produisent des résultats cohérents et reproductibles.' },
            { q: 'De combien de cas de test un ensemble de tests a-t-il besoin ?', a: 'Un ensemble de tests minimal a besoin de 20 cas : 10 entrées de chemin heureux couvrant l\'usage typique, 5 cas limites testant les frontières (entrée vide, entrée très longue, texte multilingue), et 5 entrées adversariales. Moins de 20 cas produit des taux de passage statistiquement peu fiables qui manquent les vrais modes de défaillance.' },
            { q: 'La qualité diffère-t-elle entre GPT-5.5 et Claude Opus 4.7 ?', a: 'Oui, considérablement. Le même prompt score régulièrement 10-20 points différemment entre GPT-5.5 et Claude Opus 4.7 en raison de différences dans la sensibilité aux formats d\'instructions et la gestion du prompt système. Mesurez toujours le taux de passage séparément sur chaque modèle que vous prévoyez de déployer. Un prompt qui score 95 % sur GPT-5.5 peut score 80 % sur Claude Opus 4.7 sans tuning modèle-spécifique.' },
            { q: 'Qu\'est-ce que le scoring LLM-as-Judge et quand l\'utiliser ?', a: 'LLM-as-Judge utilise un modèle capable comme GPT-5.5 ou Claude Opus 4.7 pour évaluer les sorties contre une rubrique. Le juge reçoit l\'entrée originale, la sortie de votre modèle et les critères d\'évaluation, puis retourne un score avec justification. Utilisez LLM-as-Judge pour les sorties de texte libre où Pass/Fail binaire n\'est pas suffisant. Cela s\'adapte à des milliers de cas de test sans révision humaine, le rendant idéal pour les pipelines d\'évaluation continus.' },
            { q: 'Comment définir un seuil de régression du taux de passage ?', a: 'Enregistrez le taux de passage du premier test en tant que baseline. Un gate de régression de 5 points est courant : si une modification du prompt abaisse le taux de passage de plus de 5 points par rapport à la baseline, bloquez le déploiement. Les équipes ciblent généralement 85–95 % de taux de passage pour les prompts en production. Pour les workflows critiques (juridique, médical, financier), utilisez plutôt un gate de 2 points.' },
            { q: 'Comment intégrer l\'évaluation dans mon flux de travail ?', a: 'Créez un ensemble de 20 cas de test, exécutez-le une fois pour établir une baseline, puis réexécutez-le après chaque modification du prompt pour détecter les régressions. Un gate d\'au moins 5 points prévient les dégradations. Stockez les résultats avec le prompt pour la traçabilité. Les workflows à haut risque (finances, santé, légal) appliquent des gates plus stricts et utilisent LLM-as-Judge pour une évaluation continue.' },
            { q: 'Quels outils existent pour l\'évaluation automatisée des prompts ?', a: 'OpenAI Evals fournit un cadre de test harness, Anthropic publie les méthodes d\'évaluation, DeepEval offre un framework open-source avec métriques et intégration CI/CD, et PromptQuorum permet de diriger les ensembles de tests sur plusieurs modèles. Le choix dépend de votre cas d\'usage et de votre complexité d\'évaluation.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[OpenAI Evals Framework (github.com/openai/evals)](https://github.com/openai/evals) — Framework open-source pour évaluer les sorties LLM avec harnais de test et utilitaires de scoring',
            '[Anthropic Model Evaluations (anthropic.com)](https://www.anthropic.com/news/model-evaluations) — Approche d\'Anthropic aux évaluations de capabilité et sécurité',
            '[The Prompt Report: Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024. Cadre complet couvrant la conception et l\'évaluation des prompts sur 50+ techniques.',
            '[DeepEval: LLM Evaluation Framework (github.com/confident-ai/deepeval)](https://github.com/confident-ai/deepeval) — Confident AI, 2024–2025. Framework open-source pour l\'évaluation automatisée des sorties LLM avec métriques, ensembles de tests et intégration CI/CD.',
            '[NIST AI Risk Management Framework (airc.nist.gov)](https://airc.nist.gov/Home) — NIST, 2023–2026 (mis à jour). Cadre couvrant l\'évaluation des systèmes IA, la méthodologie d\'assurance qualité et la documentation de gouvernance pour les environnements réglementés.',
          ],
        },
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-10-10',
      theme: 'Techniques',
      title: 'プロンプト品質の評価方法：実践的フレームワーク',
      seoTitle: 'プロンプト品質の評価：テストセット＆スコアリング (2026年版)',
      metaDescription: 'プロンプト品質をテストセット、Pass/Fail、LLM-as-Judge で評価します。精度、一貫性、指示遵守率を測定。ステップバイステップガイド。2026年4月版。',
      ogDescription: 'ほとんどのチームは数個の入力例でプロンプトをテストして「検証済み」と判定しています。実はこれは失敗パターンの90%を見落としています。20ケースのテストセットで手動レビューでは発見できない問題を捉えます。',
      twitterDescription: 'プロンプト品質 = 精度 + 一貫性 + 指示遵守。20ケーステストセット、LLM-as-Judge スコアリング、回帰テストゲート。フレームワーク完全解説。',
      intro: '**プロンプト品質とは、様々な入力、モデル、条件下で、プロンプトが意図した出力を確実に生成する信頼性を示します。** ほとんどのチームは手動による確認に依存しており、これはエッジケースを見落とし、スケール時に問題が発生し、エンジニア間やプロンプト版で再現できない結果をもたらします。',
      leadAnswerBlock: '**プロンプト品質は、様々な入力と条件下で、プロンプトが意図した出力を確実に生成する信頼性です。** 測定可能な3つの側面: 精度（出力が意図と一致）、一貫性（同じ入力で同じ範囲の出力）、指示遵守率（すべての制約を守る）。20ケースのテストセットでテストし、パス率をベースラインとして追跡します。',
      publishDate: '2026-04-10',
      dateModified: '2026-04-29',
      readTime: '7分で読める',
      educationalLevel: 'Intermediate',
      audience: 'LLMを本番環境にデプロイする開発者とチーム',
      primaryTerm: 'プロンプト品質評価',
      aboutTopics: ['プロンプト評価', 'テストセット', 'LLMスコアリング'],
      quickFacts: [
        '最小限のテストセット: 20ケース — 10正常系、5エッジケース、5対抗的入力',
        'バイナリ Pass/Fail は正確な回答がある構造化出力に最も適切',
        'GPT-5.5 と Claude Opus 4.7 は同じプロンプトで平均10～20ポイント異なるスコアをつける',
        'LLM-as-Judge スコアリングは人間レビューなしで数千ケースのテストにスケール',
        '90%の指示遵守率は、本番リクエスト10件に1件が制約違反を示す',
      ],
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'プロンプト品質とは?', anchor: '#what-is-prompt-quality' },
        { label: 'プロンプト品質の3つの要素は?', anchor: '#three-components' },
        { label: '手動確認が失敗する理由', anchor: '#manual-vs-systematic' },
        { label: 'プロンプトテストセットの構築方法', anchor: '#test-sets' },
        { label: 'プロンプト出力のスコアリング方法', anchor: '#scoring-rubrics' },
        { label: 'プロンプト品質はモデル間で異なるか?', anchor: '#multi-model' },
        { label: 'プロンプト品質評価の始め方', anchor: '#how-to-start' },
        { label: 'よくあるプロンプト評価の誤り', anchor: '#common-mistakes' },
        { label: 'プロンプト評価に影響する地域規制', anchor: '#regional-considerations' },
        { label: 'よくある質問', anchor: '#faq' },
        { label: ' 参考資料', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/prompt-engineering/how-to-evaluate-prompt-quality?lang=ja',
        inLanguage: 'ja',
        headline: 'プロンプト品質の評価方法：実践的フレームワーク',
        description: 'プロンプト品質をテストセット、Pass/Fail、LLM-as-Judge で評価します。精度、一貫性、指示遵守率を測定。ステップバイステップガイド。2026年4月版。',
        image: 'https://www.promptquorum.com/og-how-to-evaluate-prompt-quality.png',
        datePublished: '2026-04-10',
        dateModified: '2026-04-29',
        author: { '@type': 'Organization', 'name': 'PromptQuorum' },
        publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', 'name': 'プロンプト評価' },
          { '@type': 'Thing', 'name': 'テストセット' },
          { '@type': 'Thing', 'name': 'LLMスコアリング' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
          { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.7' },
          { '@type': 'SoftwareApplication', 'name': 'Llama 3.2' },
        ],
        speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'プロンプト品質を評価する方法',
        inLanguage: 'ja',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: '評価フレームワークを定義する',
            text: '精度、一貫性、指示遵守率の3つの側面を決定します。'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'テストセットを構築する',
            text: '10正常系、5エッジケース、5対抗的入力の20ケースを準備します。'
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'スコアリング基準を設定する',
            text: 'バイナリ Pass/Fail または Likert スケールのどちらかを選択します。'
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'テストを実行し結果を記録する',
            text: '各モデル、各プロンプト版でテストセットを実行し、スコアを記録します。'
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'プロンプト品質とテスト品質の違いは?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'プロンプト品質は出力の精度・一貫性を測ります。テスト品質はテストセット自体の有効性（カバレッジ、代表性）です。良いプロンプトは悪いテストでも高スコアを得られ、悪いプロンプトは良いテストで低スコアを得られます。'
            }
          },
          {
            '@type': 'Question',
            name: 'LLM-as-Judge が常に正確な評価を提供するか?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ。LLM-as-Judge は一貫性がありますが、バイアスを導入する可能性があります。回帰テスト（Pass/Fail の統計的ドリフト追跡）を使用し、月1回は人間が複数のサンプルを検証して LLM の評価と比較することをお勧めします。'
            }
          },
          {
            '@type': 'Question',
            name: 'テストセットのサイズはどのくらいがいいか?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '最小限は 20 ケース (10 正常系, 5 エッジ, 5 対抗的) です。本番環境では 100～500 ケースが一般的です。より大きいセットはより多くの失敗モード をキャッチしますが、メンテナンスコストが増加します。'
            }
          },
          {
            '@type': 'Question',
            name: 'スコアが新モデル間で大幅に異なるのはなぜか?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '各モデルの基礎訓練データ、アライメント方法、トークン化が異なるため、同じプロンプトに対して異なる応答をします。これはモデル固有のテストセット、またはモデル固有のスコアリング基準が必要だることを意味します。'
            }
          },
          {
            '@type': 'Question',
            name: '評価フレームワークをどのくらいの頻度で更新するか?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '初期段階では毎週レビューします。安定化後は月1回の定期レビューをお勧めします。新しいユースケース、ユーザーフィードバック、またはモデルの更新で変更が必要になった場合は追加でレビューしてください。'
            }
          },
          {
            '@type': 'Question',
            name: '複数の評価指標を組み合わせるか, 単一のメトリクスを使用するか?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '複数の指標（精度、一貫性、遅延）を追跡しますが、単一のメトリクス（例: 全体的なパス率）を報告します。複数の指標はデバッグに役立ちますが、単一メトリクスはステークホルダーの意思決定を明確にします。'
            }
          },
          {
            '@type': 'Question',
            name: '異なるプロンプト版を効率的に比較するにはどうするか?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '同じテストセットをすべての版で実行し、版ごとのパス率を並行追跡します。A/B テストは単一の改善を検証するときに有効です。完全なテストセットは版ごとの全体的なパフォーマンスを明確に示します。'
            }
          },
          {
            '@type': 'Question',
            name: 'プロンプト評価の結果を整理・保存するには?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Google Sheets、Notion、または専用の評価ツール（Humanloop など）を使用して、テストケース、スコア、タイムスタンプ、モデル版を記録します。Git で結果を版管理し、プロンプト変更の影響をトレースできるようにします。'
            }
          },
          {
            '@type': 'Question',
            name: '評価フレームワークを複数のチームで共有するには?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'テストセット、スコアリング基準、結果をチーム Wiki または Git リポジトリに保存します。これにより一貫性が保証され、新しいチームメンバーがすぐに採用できます。月1回の同期ミーティングでベストプラクティスを共有してください。'
            }
          },
          {
            '@type': 'Question',
            name: 'プロンプト評価にどのくらいの時間がかかるか?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '20ケースのテストセット実行には約 30 分（LLM API 呼び出しを含む）かかります。複数モデル、複数版では 1～2 時間の人間の時間が必要です。自動化（Python スクリプト、API）で時間を 80% 削減できます。'
            }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ja',
        name: 'プロンプト品質の3つの要素',
        itemListElement: [
          {
            '@type': 'Thing',
            position: 1,
            name: '精度',
            description: 'プロンプト出力が意図した結果と一致する割合'
          },
          {
            '@type': 'Thing',
            position: 2,
            name: '一貫性',
            description: '同じ入力に対して、プロンプトが同じ範囲の出力を返す信頼性'
          },
          {
            '@type': 'Thing',
            position: 3,
            name: '指示遵守率',
            description: 'プロンプトで指定されたすべての制約と形式要件を遵守する出力の割合'
          },
        ],
      },
      sections: {
        tldr: {
          isTldr: true,
          title: '重要ポイント',
          items: [
            'プロンプト品質は精度、一貫性、指示遵守率の3つの側面で測定されます',
            '20ケースのテストセット（10正常系、5エッジ、5対抗的）が有効な評価の最小限',
            'バイナリ Pass/Fail スコアリングは正確な回答がある構造化出力に最適です',
            'LLM-as-Judge 評価は手動レビューで月1回検証して、バイアスを監視します',
            'テスト結果を版管理し、プロンプト改善の影響を追跡できます',
          ],
        },
        definition: {
          title: 'プロンプト品質とは?',
          content: '「このセクションでは…」プロンプト品質とは、様々な入力、条件、モデル環境下で、プロンプトが意図した出力を確実に生成する能力です。これは単なる「動く」ではなく、予測可能で、測定可能で、再現可能な結果をもたらすことです。\n\nほとんどのチームはプロンプトを 2～3 個の例でテストして「これで良さそう」と判定します。これは失敗パターンの 90% を見落としており、本番環境で予期しない動作や品質低下をもたらします。\n\nプロンプト品質フレームワークは、このリスクを定量的に測定し、版ごとの改善を追跡し、複数モデル間での互換性を検証するための構造を提供します。',
        },
        threeComponents: {
          title: 'プロンプト品質の3つの要素は?',
          content: '「このセクションでは…」プロンプト品質には 3 つの測定可能な側面があります:\n\n**精度** — プロンプト出力が意図した結果と一致する割合です。例えば、「顧客の問題を分類する」プロンプトは 95% の精度で正しく分類する必要があります。\n\n**一貫性** — 同じ入力に対して、プロンプトが同じ範囲の出力を返す信頼性です。例えば、サポートエージェントプロンプトは同じカスタマーサポート質問に対して、トーン、長さ、構造が類似した回答を提供します。\n\n**指示遵守率** — プロンプトで指定されたすべての制約と形式要件を遵守する出力の割合です。例えば、「JSON 形式、最大 500 文字、必ず key を含める」プロンプトは 100% これらのルールを守る必要があります。\n\n3 つの側面すべてを測定することで、プロンプトの全体的な信頼性の完全な図が得られます。',
        },
        manualVsSystematic: {
          title: '手動確認が失敗する理由',
          content: '「このセクションでは…」多くのチームが手動スポットチェック（「 5 個の入力で試してみた」）に依存しており、これには重大な欠陥があります:\n\n**代表性の不足** — 手動で選んだ 5 個の例は確認バイアスの影響を受け、エッジケースや対抗的シナリオをほぼ絶対に含みません。\n\n**スケール性がない** — 1000 リクエスト/日を処理する本番システムで、5 個の例でテストすることは、飛行機を飛ばす前にタイヤを 5 回だけ検査するようなものです。\n\n**再現性がない** — 「これはいい見た え」という主観的な判定は、エンジニア間で異なり、同じプロンプト版でも時間とともに変わります。\n\n**隠れたパターンを見落とす** — 失敗は通常、期待していないコーナーケースで発生します。手動テストではそれらを発見することはめったにありません。\n\n構造化されたテストセットはこれらすべての問題を解決します。',
        },
        testSets: {
          title: 'プロンプトテストセットの構築方法',
          content: '「このセクションでは…」有効なテストセットは 20 ケース（最小限）で構成されます:\n\n**10 正常系** — プロンプトが成功すると期待するシナリオです。例えば、「顧客問題分類」プロンプトの場合、実際のサポートリクエストを 10 個含めます。\n\n**5 エッジケース** — 正常だが予期しないシナリオです。非常に長い入力、数値境界値、特殊文字、複数言語の混在を含めます。\n\n**5 対抗的入力** — プロンプトが失敗するか、予期しない動作をする意図的な試みです。矛盾する指示、有害な質問、プロンプトインジェクション攻撃をシミュレートします。\n\nテストセットの構築:\n\n1. **実際のデータから開始** — ユーザーフィードバック、サポートチケット、ログから 50～100 個の実例を収集します\n2. **失敗を特定** — どのケースでプロンプトが失敗または低スコアを得たかを記録します\n3. **パターンを分析** — 失敗に共通するパターンを見つけ、テストセットにそれらを追加します\n4. **定期的に更新** — 月1回、新しい失敗ケースを追加し、テストセットを進化させます\n\n「このセクションの重要なポイント」テストセットは静的ではなく、プロンプトが処理する実際のデータと並行して成長する必要があります。',
        },
        scoringRubrics: {
          title: 'プロンプト出力のスコアリング方法',
          content: '「このセクションでは…」スコアリング方法は 2 つの主なアプローチがあります:\n\n**バイナリ Pass/Fail** — 最も単純で最も適切な方法です。出力が基準を満たしているか（Pass）、いないか（Fail）を判定します。例:\n- \"顧客問題分類\" プロンプト: 分類が正確なら Pass、違ったら Fail\n- \"メール生成\" プロンプト: 出力が JSON 形式で、すべての必須フィールドを含むなら Pass\n\nバイナリ方式の利点:\n- 誰が評価してもスコアが同じ（客観的）\n- 集計しやすい（合計パス数 / テスト総数）\n- テスト自動化に最適\n\n**Likert スケール（1～5 レーティング）** — 構造化出力より、創造的なタスク（記事作成、デザイン説明）に使用します。5=完璧、4=わずかな編集でOK、3=大幅な編集が必要、2=使用不可、1=完全に間違い。\n\n注意: Likert スケールは主観的で、LLM-as-Judge を使う場合、人間の評価者間で一貫性がありません。可能な限りバイナリを使用してください。\n\n**LLM-as-Judge スコアリング** — LLM（Claude など）に出力を評価させます。例:\n\n```\nプロンプト: 以下の顧客分類が正確かどうかを評価してください。基準は [criteria]。Pass または Fail で答えてください。\n\n入力: \"私の請求書が間違っています\"\nプロンプトの出力: \"Billing Issue\"\n```\n\nLLM-as-Judge の利点と限界:\n- ✅ 数百ケースを秒単位で処理\n- ✅ バイナリスコアで自動化可能\n- ⚠️ LLM 自体のバイアスを導入する可能性\n- ⚠️ 月1回、人間が複数ケースでクロスチェック\n\nスコアリング基準の実装:\n\n```\n[Case #1]\nInput: \"payment failed\"\nExpected: Billing Issue\nPrompt output: Billing Issue\nScore: PASS\nJustification: 分類が完璧に一致\n\n[Case #2]\nInput: \"how do i reset password\"\nExpected: Account Access\nPrompt output: Technical Issue\nScore: FAIL\nJustification: より具体的なカテゴリーを選ぶべき\n```',
        },
        multiModel: {
          title: 'プロンプト品質はモデル間で異なるか?',
          content: '「このセクションでは…」はい。同じプロンプトでも、モデル間でスコアが大幅に異なります。\n\n実例: \"顧客サポート返答をまとめる\" プロンプト\n- Claude Opus 4.7: 92% パス率\n- GPT-5.5: 78% パス率\n- Llama 3.2 70B: 65% パス率\n\nなぜ異なるか:\n- **訓練データが異なる** — 各モデルは異なるデータセットで訓練されており、独自のバイアスと強度を持つ\n- **トークン化が異なる** — 言語処理方法が異なり、同じプロンプト文が異なる方法で解析される\n- **アライメント方法が異なる** — 安全性とガイダンスの方法が異なり、プロンプトへの応答方法に影響する\n\n実務的な影響:\n\n1. **モデル固有のテストセット** — 本番で複数モデルを使う場合、各モデル用に別々のテストセット、またはモデル間で共有する最小コアセットを作成します\n2. **モデル固有の閾値** — Claude に 90% パス率を期待するなら、Llama には 75% でも許容可能かもしれません\n3. **信頼性ランキング** — モデルのスコアに基づいて、本番環境での使用頻度をランク付けします（高スコア = より多く使用）\n4. **段階的な導入** — 新モデルは小規模でテストし、スコアが十分に高まるまで本番展開を遅延させます\n\n「このセクションの重要なポイント」同じプロンプトがすべてのモデルで同じようにパフォーマンスするとは期待しないでください。各モデルのスコアを測定し、導入戦略を調整してください。',
        },
        howToStart: {
          title: 'プロンプト品質評価の始め方',
          content: '「このセクションでは…」実装のステップバイステップガイド:\n\n**Week 1: フレームワークを定義**\n- チーム内で 15 分のスクラッチミーティングを開きます\n- 精度、一貫性、指示遵守率の 3 側面を定義します\n- バイナリ Pass/Fail スコアリングを選択します（最初は Likert スケールを避ける）\n- 例: \"顧客分類プロンプト\" → 精度と指示遵守率に焦点を当てます\n\n**Week 2: テストセットを構築**\n- 実際のユーザーデータから 50～100 ケースを収集します（サポートチケット、ログ）\n- 20 ケース（10 正常系、5 エッジ、5 対抗的）を選択します\n- Google Sheets で記録します:\n  - Column A: 入力\n  - Column B: 期待される出力\n  - Column C: 実際のプロンプト出力\n  - Column D: Pass/Fail\n  - Column E: 理由\n\n**Week 3: テストを実行**\n- プロンプトに対して 20 ケースを実行します\n- 各結果を記録し、スコアを計算します（合計 Pass / 20）\n- 失敗パターンを分析します\n\n**Week 4: 結果を改善して反復**\n- テストに基づいてプロンプトを改善します\n- 改善版で同じテストセットを再実行します\n- スコアの改善を追跡します\n\n**長期的な保守（毎月）**\n- 本番環境の失敗ケースを新しい入力として 5～10 個追加\n- テストセットを 30 ケースに拡張\n- 複数モデルでテストを実行\n- スコア推移グラフを作成\n\nツール:\n- **Google Sheets** （シンプル、チーム共有可能）\n- **Notion** （より整理されたインターフェース）\n- **Humanloop** （専門的な評価プラットフォーム）\n- **Python スクリプト** （API 経由で自動実行）',
        },
        commonMistakes: {
          title: 'よくあるプロンプト評価の誤り',
          mistakes: [
            {
              mistake: '固定的なテストセット',
              problem: '\"作成したら終わり\" とするテストセット。実際のユーザーデータは進化しており、テストセットも進化する必要があります。',
              fix: '毎月、本番環境の失敗ケース 5～10 個をテストセットに追加します。これにより、プロンプトが実際のシナリオに対応し続けることが保証されます。'
            },
            {
              mistake: 'LLM スコアを無条件に信頼',
              problem: 'LLM-as-Judge は便利ですが、独自のバイアスを導入します。例えば、特定のスタイルを好むかもしれません。',
              fix: '月1回、複数の実ケース（5～10 個）を人間が検証し、LLM スコアと比較します。乖離があれば、LLM スコアリング基準を調整します。'
            },
            {
              mistake: 'テストセットが小さすぎる',
              problem: '3～5 ケースでテストすることは、統計的に無意味です。本番でのパフォーマンスを予測しません。',
              fix: '最小限 20 ケース（10 正常系、5 エッジ、5 対抗的）から始めます。本番環境では 100～500 ケースを目指します。'
            },
            {
              mistake: '複数のメトリクスで気を散らす',
              problem: '精度、遅延、トークン使用量、一貫性……すべてを追跡すると、信号が失われます。',
              fix: '複数のメトリクスを記録しますが、単一の「全体的なパス率」を報告します。詳細なメトリクスはデバッグ用です。'
            },
            {
              mistake: 'モデル間のスコアを直接比較',
              problem: 'Claude が 95% でも、Llama が 75% なら \"失敗\" と判定する。モデルの強度が異なります。',
              fix: 'モデルごとに期待値を設定します。Claude には 90% 以上、Llama には 75% 以上などです。'
            },
          ],
        },
        regionalConsiderations: {
          title: 'プロンプト評価に影響する地域規制',
          content: '「このセクションでは…」プロンプト評価フレームワークは、ローカルデータ規制によって制限される場合があります。主な地域を説明します。\n\n**日本（METI ガイドライン）**\n\nMETI（経済産業省）の AI ガバナンスガイドライン 2024 では、日本企業は AI システムの透明性と説明可能性を確保する必要があります。これは:\n- プロンプト評価結果を文書化し、6ヶ月ごとに検証\n- LLM 評価には人間による監査ログを追加\n- プロンプト版の履歴を追跡可能に保つ\n\n日本での実装: Google Sheets に評価ログを記録し、METI 監査時に提示できるようにします。\n\n**東アジア・アジア太平洋**\n\n韓国、シンガポール、オーストラリアなどの国々:\n- データ処理の監査証跡の保持を要求\n- LLM スコアリング基準の定期レビュー（最低 6ヶ月ごと）\n- ユーザーデータを含む本番テストセットの暗号化\n\n東アジア太平洋での実装: クラウドストレージで評価データを暗号化保存し、アクセスログを記録します。\n\n**グローバル**\n\n多くの国では特定の規制がないため、業界標準に従います:\n- AI 透明性レポートを年1回発行（どのように評価するか、結果の使用方法）\n- プロンプト評価チェックリストを従業員向けに公開\n- 誤分類や失敗の報告メカニズムを提供\n\n「このセクションの重要なポイント」規制環境は急速に変化しています。地域ごとのガイドラインを定期的に確認し、評価フレームワークを調整してください。',
        },
        relatedReading: {
          title: '関連記事',
          items: [
            '[プロンプトライブラリの構築方法](/prompt-engineering/build-a-prompt-library?lang=ja) — チーム間でテスト済みプロンプトを共有する方法。評価フレームワークとテストセットを版管理します。',
            '[LLM の幻覚を減らす方法](/prompt-engineering/reducing-llm-hallucinations?lang=ja) — 幻覚は評価フレームワークの一般的な失敗カテゴリーです。このガイドは幻覚を検出して軽減する方法を説明します。',
            '[プロンプト最適化フレームワーク](/prompt-engineering/prompt-optimization-guide?lang=ja) — 評価フレームワークを使用してプロンプトを段階的に改善する方法。',
          ],
        },
        faqSection: {
          title: 'よくある質問',
          faqs: [
            { q: 'プロンプト品質とテスト品質の違いは?', a: 'プロンプト品質は出力の精度・一貫性を測ります。テスト品質はテストセット自体の有効性（カバレッジ、代表性）です。良いプロンプトは悪いテストでも高スコアを得られ、悪いプロンプトは良いテストで低スコアを得られます。' },
            { q: 'LLM-as-Judge が常に正確な評価を提供するか?', a: 'いいえ。LLM-as-Judge は一貫性がありますが、バイアスを導入する可能性があります。回帰テスト（Pass/Fail の統計的ドリフト追跡）を使用し、月1回は人間が複数のサンプルを検証して LLM の評価と比較することをお勧めします。' },
            { q: 'テストセットのサイズはどのくらいがいいか?', a: '最小限は 20 ケース (10 正常系, 5 エッジ, 5 対抗的) です。本番環境では 100～500 ケースが一般的です。より大きいセットはより多くの失敗モード をキャッチしますが、メンテナンスコストが増加します。' },
            { q: 'スコアが新モデル間で大幅に異なるのはなぜか?', a: '各モデルの基礎訓練データ、アライメント方法、トークン化が異なるため、同じプロンプトに対して異なる応答をします。これはモデル固有のテストセット、またはモデル固有のスコアリング基準が必要だることを意味します。' },
            { q: '評価フレームワークをどのくらいの頻度で更新するか?', a: '初期段階では毎週レビューします。安定化後は月1回の定期レビューをお勧めします。新しいユースケース、ユーザーフィードバック、またはモデルの更新で変更が必要になった場合は追加でレビューしてください。' },
            { q: '複数の評価指標を組み合わせるか, 単一のメトリクスを使用するか?', a: '複数の指標（精度、一貫性、遅延）を追跡しますが、単一のメトリクス（例: 全体的なパス率）を報告します。複数の指標はデバッグに役立ちますが、単一メトリクスはステークホルダーの意思決定を明確にします。' },
            { q: '異なるプロンプト版を効率的に比較するにはどうするか?', a: '同じテストセットをすべての版で実行し、版ごとのパス率を並行追跡します。A/B テストは単一の改善を検証するときに有効です。完全なテストセットは版ごとの全体的なパフォーマンスを明確に示します。' },
            { q: 'プロンプト評価の結果を整理・保存するには?', a: 'Google Sheets、Notion、または専用の評価ツール（Humanloop など）を使用して、テストケース、スコア、タイムスタンプ、モデル版を記録します。Git で結果を版管理し、プロンプト変更の影響をトレースできるようにします。' },
            { q: '評価フレームワークを複数のチームで共有するには?', a: 'テストセット、スコアリング基準、結果をチーム Wiki または Git リポジトリに保存します。これにより一貫性が保証され、新しいチームメンバーがすぐに採用できます。月1回の同期ミーティングでベストプラクティスを共有してください。' },
            { q: 'プロンプト評価にどのくらいの時間がかかるか?', a: '20ケースのテストセット実行には約 30 分（LLM API 呼び出しを含む）かかります。複数モデル、複数版では 1～2 時間の人間の時間が必要です。自動化（Python スクリプト、API）で時間を 80% 削減できます。' },
          ],
        },
        sources: {
          title: '参考資料',
          items: [
            '[METI AI ガバナンス初版ガイドライン（日本経済産業省）](https://www.meti.go.jp/press/2024/03/20240326001/20240326001.html) — 日本企業のための AI システムの透明性と説明可能性ガイドライン',
            '[Prompt Evaluation Best Practices（Anthropic）](https://docs.anthropic.com/) — 大規模言語モデルの評価と最適化に関するドキュメント',
            '[LLM Evaluation Handbook（Hugging Face）](https://huggingface.co/) — オープンソース LLM の評価フレームワークと基準',
            '[Test-Driven Development for LLM Prompts（GitHub）](https://github.com/) — プロンプト評価のベストプラクティスと例',
            '[Prompt Engineering Guide（OpenAI）](https://platform.openai.com/docs/guides/prompt-engineering) — OpenAI のプロンプトエンジニアリングと評価ガイドライン',
          ],
        },
      },
    },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
  };
