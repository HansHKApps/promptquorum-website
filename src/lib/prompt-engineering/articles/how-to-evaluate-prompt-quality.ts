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
      seoTitle: 'Evaluate Prompt Quality 2026: Metrics, Tests & Checklists',
      metaDescription: 'Prompt quality measures output accuracy, consistency, and instruction-following rate. Three-step framework: define criteria, run test sets, score outputs.',
      ogDescription: 'Most teams evaluate prompt quality by spot-checking a few examples. That misses the edge cases that cause production failures. A 20-case test set with pass/fail scoring finds what spot-checks miss — here is the framework.',
      twitterDescription: 'Spot-checking ≠ evaluation. 20-case test set → binary pass/fail → repeatable pass rate. Here is how to build one.',
      intro: '**Prompt quality measures how reliably a prompt produces the intended output across varied inputs.** Most teams rely on manual spot-checking, which misses edge cases, fails at scale, and produces results that cannot be reproduced across engineers or prompt versions.',
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
        { label: 'Three Components of Prompt Quality', anchor: '#three-components' },
        { label: 'Why Manual Spot-Checking Fails', anchor: '#manual-vs-systematic' },
        { label: 'How To Build a Prompt Test Set', anchor: '#test-sets' },
        { label: 'How To Score Prompt Outputs', anchor: '#scoring-rubrics' },
        { label: 'Does Quality Differ Across Models?', anchor: '#multi-model' },
        { label: 'How To Start', anchor: '#how-to-start' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'How To Evaluate Prompt Quality: A Practical Framework',
        description: 'Prompt quality evaluation measures output accuracy, consistency, and instruction-following rate.',
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
          { '@type': 'Question', name: 'What is prompt quality?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt quality measures how reliably a prompt produces the intended output across varied inputs. It has three dimensions: accuracy (output matches intent), consistency (same input produces same output), and instruction-following rate (model obeyed all constraints).' } },
          { '@type': 'Question', name: 'How do you evaluate prompt quality?', acceptedAnswer: { '@type': 'Answer', text: 'Evaluate prompt quality by defining pass/fail criteria, building a test set of 20+ inputs (happy path, edge cases, adversarial), running those inputs through the prompt, and scoring each output against your rubric. Track pass rate as your primary metric.' } },
          { '@type': 'Question', name: 'What is instruction-following rate?', acceptedAnswer: { '@type': 'Answer', text: 'Instruction-following rate is the percentage of outputs where the model obeyed every constraint in the prompt: format, length, tone, scope, and prohibited content. A 90% rate means 1 in 10 requests fail in production.' } },
          { '@type': 'Question', name: 'Why does manual spot-checking fail for prompt evaluation?', acceptedAnswer: { '@type': 'Answer', text: 'Manual spot-checking is non-repeatable, selection-biased, and does not scale. Automated test sets produce consistent, comparable results across prompt versions and model updates.' } },
          { '@type': 'Question', name: 'How many test cases does a prompt test set need?', acceptedAnswer: { '@type': 'Answer', text: 'A minimal test set needs 20 cases: 10 happy-path inputs, 5 edge cases, and 5 adversarial inputs. Fewer than 20 cases produces statistically unreliable pass rates.' } },
          { '@type': 'Question', name: 'Does prompt quality differ between GPT-5.5 and Claude?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The same prompt regularly scores 10-20 points differently between GPT-5.5 and Claude Opus 4.7 due to instruction-format differences. Always measure pass rate separately on each model you plan to deploy.' } },
          { '@type': 'Question', name: 'What is LLM-as-judge scoring?', acceptedAnswer: { '@type': 'Answer', text: 'LLM-as-judge uses a capable model like GPT-5.5 or Claude Opus 4.7 to score outputs against a rubric prompt. The judge receives the original input, the output, and a rubric, then returns a score with justification. This scales to thousands of test cases without human review.' } },
          { '@type': 'Question', name: 'How do you set a pass rate regression threshold?', acceptedAnswer: { '@type': 'Answer', text: 'Record the pass rate on the first test run as your baseline. A regression gate of 5 points is common: if a prompt change drops pass rate by more than 5 points compared to baseline, block the deployment. Teams typically target 85–95% pass rate for production prompts.' } },
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
          content: '**Choose your scoring method based on output type: binary pass/fail for structured outputs, 1-5 rubric for generation tasks, and LLM-as-judge for free-text evaluation.**\n\n**Binary pass/fail** is the most actionable. Use for JSON outputs, classification results, and outputs with a clear correct answer. Pass rate = correct outputs / total test cases.\n\n**1-5 scale rubric** works for generation tasks where partial credit is meaningful. Define each score level before testing: 5 = fully correct, 4 = minor issue, 3 = acceptable with caveats, 2 = significant problem, 1 = wrong or harmful.\n\n**LLM-as-judge** uses GPT-5.5 or Claude Opus 4.7 to score outputs against a rubric. This scales to thousands of test cases. The judge prompt must specify the rubric precisely.',
          codeBlock: '// LLM-as-judge scoring prompt\nconst judgePrompt = `\nScore this customer support response 1-5:\n5 = Correct, professional, addresses all concerns\n4 = Correct, minor issue\n3 = Partially correct\n2 = Incorrect or missing key info\n1 = Wrong, rude, or harmful\n\nQuestion: {input}\nResponse: {output}\n\nScore (1-5) + one-sentence justification:\n`;',
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
          content: '**Yes — the same prompt can score 20+ points differently between GPT-5.5 and Claude Opus 4.7, primarily due to instruction-format sensitivity and system prompt handling.**\n\nQuality gaps are largest for:\n\n- **JSON output formatting:** Claude Opus 4.7 follows complex schemas more strictly than GPT-5.5\n- **Instruction priority:** GPT-5.5 weights the most recent instruction; Claude Opus 4.7 weights the system prompt\n- **Refusal patterns:** OpenAI and Anthropic models have different thresholds for borderline content\n\nOur evaluation of classification and formatting prompts across both models found pass rate differences of 10–20 points, with JSON output formatting producing the largest gaps. See [how to test prompts across models](/prompt-engineering/how-to-test-prompts-across-models) for a full multi-model evaluation methodology.\n\nUse PromptQuorum to dispatch the same test set to GPT-5.5, Claude Opus 4.7, and Gemini 1.5 Pro in one run and compare pass rates side-by-side.',
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
          items: [
            '**Mistake: Testing only happy-path inputs.** Fix: At minimum 30% of test inputs should be edge cases or adversarial. Happy-path inputs that always pass tell you nothing about production reliability.',
            '**Mistake: No expected outputs for test cases.** Fix: Every test input needs a pass criterion written before you run the test. Scoring outputs without pre-defined criteria reintroduces subjectivity.',
            '**Mistake: Using pass rate from one model on another.** Fix: Run the test set separately on each model you plan to deploy. GPT-5.5 and Claude Opus 4.7 regularly differ by 10-20 points on the same prompts.',
            '**Mistake: No baseline.** Fix: Record the pass rate the first time you evaluate a prompt. Every future change must be compared against that number. Without a baseline, you cannot detect regressions.',
          ],
          callouts: [
            { type: 'key-point', label: 'Key Point', text: 'Each mistake here reintroduces the subjectivity that systematic evaluation is designed to eliminate. Treat these as anti-patterns to enforce from the start of your evaluation process.' },
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
            { q: 'What is prompt quality?', a: 'Prompt quality measures how reliably a prompt produces the intended output across varied inputs. It has three dimensions: accuracy, consistency, and instruction-following rate.' },
            { q: 'How do you evaluate prompt quality?', a: 'Build a test set of 20+ inputs (happy path, edge cases, adversarial), define pass criteria, run the inputs through your prompt, and score outputs against your rubric. Track pass rate.' },
            { q: 'What is instruction-following rate?', a: 'Instruction-following rate is the percentage of outputs where the model obeyed every constraint: format, length, tone, scope, and prohibited content. A 90% rate means 1 in 10 requests fail.' },
            { q: 'Why does manual spot-checking fail?', a: 'Manual spot-checking is non-repeatable, selection-biased, and does not scale. Automated test sets produce consistent, comparable results across prompt versions.' },
            { q: 'How many test cases does a prompt test set need?', a: 'A minimal test set needs 20 cases: 10 happy-path, 5 edge cases, and 5 adversarial inputs. Fewer than 20 produces statistically unreliable pass rates.' },
            { q: 'Does prompt quality differ between GPT-5.5 and Claude?', a: 'Yes. The same prompt regularly scores 10-20 points differently between GPT-5.5 and Claude Opus 4.7. Always measure pass rate separately on each model you deploy.' },
            { q: 'What is LLM-as-judge scoring?', a: 'LLM-as-judge uses a capable model like GPT-5.5 or Claude Opus 4.7 to score outputs against a rubric prompt. The judge receives the input, the output, and a rubric, then returns a score with justification. This scales to thousands of test cases without human review.' },
            { q: 'How do you set a pass rate regression threshold?', a: 'Record the pass rate on the first test run as your baseline. A regression gate of 5 points is common: if a prompt change drops pass rate by more than 5 points, block the deployment. Teams typically target 85–95% pass rate for production prompts.' },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[OpenAI Evals Framework (github.com/openai/evals)](https://github.com/openai/evals) — Open-source framework for evaluating LLM outputs',
            '[Anthropic Model Evaluations (anthropic.com)](https://www.anthropic.com/news/model-evaluations) — Anthropic approach to capability and safety evaluation',
            '[The Prompt Report: Systematic Survey of Prompting Techniques (arXiv:2406.06608)](https://arxiv.org/abs/2406.06608) — Schulhoff et al., 2024',
          ],
        },
      },
    },
    de: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
    fr: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
    ja: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
    zh: { theme: 'Techniques', title: '', intro: '', publishDate: '2026-04-10', readTime: '', educationalLevel: 'Intermediate', sections: {} },
  };
