// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: best-prompt-testing-tools
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = { en: { theme: 'Tools & Platforms', title: 'Prompt Testing Tools 2026: Promptfoo, Braintrust, DeepEval', seoTitle: 'Best Prompt Testing & Evaluation Tools 2026', metaDescription: 'Without prompt testing, shipping a new prompt is pure chance. Promptfoo tests in CI/CD (seconds), Braintrust batch-evals offline (hours). Here\'s when to use Promptfoo, Braintrust, DeepEval, LangSmith, and Phoenix.', intro: '**Prompt testing splits into two: fast unit tests (Promptfoo) in seconds and slow batch evals (Braintrust) in minutes.** Promptfoo runs in CI/CD and catches regressions on every commit.\n\n**Braintrust runs offline with human judges.** DeepEval adds RAGAS metrics for RAG pipelines. This guide shows which to use when and how they work together.', publishDate: '2026-04-10', dateModified: '2026-04-10', lastFactChecked: '2026-04-28', readTime: '8 min read', educationalLevel: 'Intermediate', primaryTerm: 'prompt testing tools', audience: 'DevOps engineers, ML engineers, and platform teams building LLM testing pipelines', aboutTopics: ['prompt testing', 'evaluation', 'CI/CD testing', 'regression testing'], toc: [ { label: 'Key Takeaways', anchor: 'key-takeaways' }, { label: 'Why Test Prompts?', anchor: 'why-test-prompts' }, { label: 'Promptfoo: Fast CI/CD Testing', anchor: 'promptfoo-fast-cicd-testing' }, { label: 'Braintrust: Slow Batch Evaluations', anchor: 'braintrust-slow-batch-evaluations' }, { label: 'DeepEval: RAGAS for RAG Pipelines', anchor: 'deepeval-ragas-for-rag-pipelines' }, { label: 'LangSmith: Tracing Multi-Step Chains', anchor: 'langsmith-tracing-multi-step-chains' }, { label: 'Phoenix: Observability for LLM Apps', anchor: 'phoenix-observability-for-llm-apps' }, { label: 'Comparison Table', anchor: 'comparison-table' }, { label: 'How to Choose', anchor: 'how-to-choose' }, { label: 'Why Do Prompt Tests Fail?', anchor: 'common-mistakes' }, { label: 'Related Reading', anchor: 'related-reading' }, { label: 'FAQ', anchor: 'faq' }, { label: 'Sources', anchor: 'sources' } ], schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Prompt Testing Tools 2026: Promptfoo, Braintrust, DeepEval', description: 'Without prompt testing, shipping a new prompt is pure chance. Promptfoo tests in CI/CD (seconds), Braintrust batch-evals offline (hours).', datePublished: '2026-04-10', dateModified: '2026-04-10', author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' }, publisher: { '@type': 'Organization', name: 'PromptQuorum' }, url: 'https://www.promptquorum.com/prompt-engineering/best-prompt-testing-evaluation-tools', inLanguage: 'en', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro'] }, educationalLevel: 'Intermediate' }, faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: 'What is prompt testing?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt testing verifies that your LLM outputs match a reference answer or pass an LLM-as-judge rule. Fast tests (unit) check a single prompt in seconds. Slow tests (batch) evaluate a dataset offline in minutes or hours.' } }, { '@type': 'Question', name: 'When should I test prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Test whenever you change a prompt, especially before deploying to production. Use CI/CD testing for every commit, and batch evaluation for final sign-off.' } }, { '@type': 'Question', name: 'What is the difference between Promptfoo and Braintrust?', acceptedAnswer: { '@type': 'Answer', text: 'Promptfoo is open-source, CLI-first, and built for CI/CD pipelines (fast, free). Braintrust is SaaS, web-based, for offline evaluation with human and LLM judges (slow, comprehensive).' } }, { '@type': 'Question', name: 'What are RAGAS metrics?', acceptedAnswer: { '@type': 'Answer', text: 'RAGAS measures retrieval quality, context relevance, and answer correctness in RAG pipelines. DeepEval implements RAGAS.' } }, { '@type': 'Question', name: 'Can I use multiple tools together?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Use Promptfoo in CI/CD, Braintrust for final batch evaluation, DeepEval for RAG metrics, and LangSmith for tracing.' } }, { '@type': 'Question', name: 'Which tool is free?', acceptedAnswer: { '@type': 'Answer', text: 'Promptfoo is open-source and free. DeepEval and Phoenix are free. Braintrust and LangSmith offer free tiers.' } }, { '@type': 'Question', name: 'How do I set up Promptfoo in CI/CD?', acceptedAnswer: { '@type': 'Answer', text: 'Write a YAML config with your prompts and test cases, run promptfoo eval in your CI pipeline, and fail the build if scores drop.' } }, { '@type': 'Question', name: 'What is an LLM-as-judge?', acceptedAnswer: { '@type': 'Answer', text: 'An LLM-as-judge uses another LLM (GPT-5.5, Claude) to grade your output. It scales evaluation without humans but can be biased.' } } ] }, itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Promptfoo: Fast CI/CD Testing', url: 'https://promptfoo.dev' }, { '@type': 'ListItem', position: 2, name: 'Braintrust: Slow Batch Evaluations', url: 'https://braintrust.dev' }, { '@type': 'ListItem', position: 3, name: 'DeepEval: RAGAS for RAG Pipelines', url: 'https://deepeval.trychasm.com' }, { '@type': 'ListItem', position: 4, name: 'LangSmith: Tracing Multi-Step Chains', url: 'https://smith.langchain.com' }, { '@type': 'ListItem', position: 5, name: 'Phoenix: Observability for LLM Apps', url: 'https://arize.com/phoenix' } ] }, sections: { keyTakeaways: { isTldr: true, items: [ 'Use Promptfoo for CI/CD testing (seconds, open-source, catch regressions)', 'Use Braintrust for final eval (minutes to hours, human+LLM judges, offline workflow)', 'Use DeepEval for RAG-specific evals (RAGAS metrics, retrieval + context + synthesis)', 'Use LangSmith for tracing (debug multi-step chains, understand failure root cause)', 'Use PromptQuorum for cross-model comparison (which model to test against, side-by-side in seconds)', 'Combine tools: Promptfoo in CI → Braintrust for sign-off → LangSmith for debugging', 'LLM-as-judge scales evals without humans but can be biased—validate against gold standard' ] }, whyTestPrompts: { title: 'Why Test Prompts?', content: '**This guide focuses on testing and evaluation tools only.** For the full prompt engineering tools landscape, see [Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026). For team collaboration features, see [Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams).\n\n**Prompt changes break production.** A single rewording can drop accuracy 5-10%, miss edge cases, or change tone. As of April 2026, most companies do not test prompts at all, instead shipping changes ad-hoc. Testing catches regressions before they reach users. Two workflows exist: fast unit tests in [CI/CD](/prompt-engineering/ci-cd-for-prompts) (seconds, automated) and slow batch evals offline (minutes to hours, human review). Without testing, you cannot iterate safely.' }, promptfoo: { title: 'Promptfoo: Fast CI/CD Testing', content: '**Promptfoo is open-source, CLI-first, and built for CI/CD pipelines.** It runs in seconds, catches regressions on every commit, and fails the build if scores drop. Write a YAML config with prompts and test cases, run promptfoo eval, and get a score. Promptfoo supports string similarity, regex, [LLM-as-judge](/prompt-engineering/llm-as-judge-evaluation), and custom graders.', numberedItems: [ 'Use Promptfoo if you ship frequently (daily/weekly)', 'Best for small test sets (100–500 cases)', 'Pricing: Free (open-source, MIT license)' ] }, braintrust: { title: 'Braintrust: Slow Batch Evaluations', content: '**Use Braintrust if you need human review and baseline tracking before production.** It runs slower (5–30 minutes for 1000 test cases, 4+ hours with full human review) but supports comprehensive evaluation: logs every LLM call, enables side-by-side comparison, and tracks baseline regressions. Integrates with LangChain, LLamaIndex, and custom code.', numberedItems: [ 'Use Braintrust for final sign-off before release', 'Best for large test sets (1000+) and human review', 'Pricing: ~$500/mo for teams with eval requirements' ] }, deepeval: { title: 'DeepEval: RAGAS for RAG Pipelines', content: '**Use DeepEval if you build [RAG pipelines](/local-llms/rag-retrieval-augmented-generation) and need separate scores for retrieval and generation quality.** DeepEval is a Python library that measures RAG quality with RAGAS metrics, breaking down success into three dimensions: retrieval quality, context relevance, and answer correctness. Runs as Python code or via web dashboard.', numberedItems: [ 'Use DeepEval if you use RAG architectures', 'Measures retrieval + synthesis separately', 'Pricing: Free with optional paid cloud evals' ] }, langsmith: { title: 'LangSmith: Tracing Multi-Step Chains', content: '**Use LangSmith if you need to debug multi-step chains and find where failures occur.** LangSmith traces every LLM call, measures latency and cost, and lets you drill into each step to identify bottlenecks. When Promptfoo flags a regression, LangSmith shows exactly where in your chain (retrieval → synthesis → ranking) the failure happened. Native integration with [LangChain](/local-llms/langchain-tutorial).', numberedItems: [ 'Use LangSmith for debugging multi-step chains', 'Essential if you use LangChain', 'Pricing: Free tier, $50+/mo for storage' ] }, phoenix: { title: 'Phoenix: Observability for LLM Apps', content: '**Use Phoenix if you need production observability: monitoring prompt performance in real-time.** Phoenix (by Arize AI) logs prompts, responses, embeddings, and latency. Open-source and self-hostable. Recommended complement to Promptfoo (testing) and Braintrust (evals).', numberedItems: [ 'Use Phoenix for production observability', 'Open-source and free (Apache 2.0)', 'Can be self-hosted or cloud-managed' ] }, promptquorum: { id: 'promptquorum', title: 'PromptQuorum: Cross-Model Comparison Before Testing', content: '**Use PromptQuorum to compare how the same prompt performs across GPT-5.5, Claude, Gemini, and local LLMs in a single dispatch — before committing to a model for your test suite.** Promptfoo and Braintrust test one model at a time. PromptQuorum answers "which model should I be testing against?" in seconds.', numberedItems: [ 'Use PromptQuorum as the first step before setting up Promptfoo test suites', 'Compare 25+ models side by side with consensus scoring', 'Pricing: Free tier + credits' ] }, comparisonTable: { id: 'comparison-table', title: 'Comparison Table: Feature Matrix', content: '**As of April 2026, here is the feature breakdown:**', columns: ['Tool', 'Speed', 'Use Case', 'CI/CD', 'Human Review', 'Pricing'], rows: [ { Tool: 'Promptfoo', Speed: 'Seconds', 'Use Case': 'Unit tests, regression', 'CI/CD': '✅ Native', 'Human Review': '✗ No', Pricing: 'Free (MIT)' }, { Tool: 'Braintrust', Speed: 'Minutes–hours', 'Use Case': 'Batch eval, sign-off', 'CI/CD': '✓ API', 'Human Review': '✅ Yes', Pricing: '~$500/mo' }, { Tool: 'DeepEval', Speed: 'Minutes', 'Use Case': 'RAG pipeline scoring', 'CI/CD': '✓ Python', 'Human Review': '✗ No', Pricing: 'Free + paid cloud' }, { Tool: 'LangSmith', Speed: 'Real-time', 'Use Case': 'Tracing, debugging', 'CI/CD': '✓ API', 'Human Review': '✗ No', Pricing: 'Free / $50+/mo' }, { Tool: 'Phoenix', Speed: 'Real-time', 'Use Case': 'Production monitoring', 'CI/CD': '✓ API', 'Human Review': '✗ No', Pricing: 'Free (Apache 2.0)' }, { Tool: 'PromptQuorum', Speed: 'Seconds', 'Use Case': 'Cross-model comparison', 'CI/CD': '✗ No', 'Human Review': '✓ Side-by-side', Pricing: 'Free + credits' } ] }, howToChoose: { id: 'how-to-choose', title: 'How to Choose Your Testing Stack', numberedItems: [ 'Everyone: Start with Promptfoo (free) in your CI/CD pipeline. Run tests on every commit. This is non-negotiable.', 'Shipping to production: Add Braintrust for final batch eval with human sign-off before release.', 'RAG pipelines: Add DeepEval for retrieval-specific RAGAS metrics. Promptfoo tests the whole pipeline; DeepEval diagnoses the retrieval layer.', 'Multi-step chains: Add LangSmith for tracing. When Promptfoo flags a regression, LangSmith shows where in the chain it broke.', 'Production monitoring: Add Phoenix for real-time observability — latency, cost, and drift detection.', 'Model selection: Run PromptQuorum first to compare models on your specific prompts before building test suites.' ] }, commonMistakes: { id: 'common-mistakes', title: 'Why Do Prompt Tests Fail?', mistakes: [ { mistake: 'Testing only the happy path', problem: 'Edge cases (empty input, very long input, conflicting instructions) cause 30%+ of production failures.', fix: 'Test at least 20 representative cases per scenario, including adversarial inputs.' }, { mistake: 'Not testing for regressions', problem: 'A prompt change that improves one case often breaks three others. Without baseline comparison, you ship blind.', fix: 'Run the old test set against every new version. Revert if >10% of cases drop below threshold.' }, { mistake: 'Grading with the same LLM you are testing', problem: 'Self-evaluation inflates scores 10–20%. GPT-5.5 rating GPT-5.5 output is not independent verification.', fix: 'Use a different model for grading. Test GPT-5.5 → grade with Claude. Or use human judges for ground truth.' }, { mistake: 'Ignoring latency and cost in eval', problem: 'A 10% more accurate prompt that is 2× slower may not be worth shipping.', fix: 'Track quality, latency, AND cost per output. Helicone or Phoenix add cost visibility.' } ] }, relatedReading: { title: 'Related Reading', items: [ '[Braintrust vs PromptHub vs Vellum vs Promptfoo: Which to Use?](/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo)', '[Best Prompt Engineering Tools 2026: Ranked by Use Case](/prompt-engineering/best-prompt-engineering-tools-2026)', '[Best Prompt Optimization Tools for Teams 2026](/prompt-engineering/best-prompt-optimization-tools-for-teams)', '[Prompt Engineering vs Fine-Tuning: How to Decide](/prompt-engineering/prompt-engineering-vs-fine-tuning)', '[Manual vs Automated Prompt Optimization 2026](/prompt-engineering/manual-vs-automated-prompt-optimization)', '[Zero-Shot vs Few-Shot Prompting: When to Use Each](/prompt-engineering/zero-shot-vs-few-shot)' ] }, faq: { title: 'FAQ', faqs: [ { q: 'What is prompt testing?', a: 'Prompt testing verifies that your LLM outputs match a reference answer or pass an LLM-as-judge rule. Fast tests (unit) check a single prompt in seconds. Slow tests (batch) evaluate a dataset offline in minutes or hours.' }, { q: 'When should I test prompts?', a: 'Test whenever you change a prompt, especially before deploying to production. Use CI/CD testing for every commit, and batch evaluation for final sign-off.' }, { q: 'What is the difference between Promptfoo and Braintrust?', a: 'Promptfoo is open-source, CLI-first, and built for CI/CD pipelines (fast, free). Braintrust is SaaS, web-based, for offline evaluation with human and LLM judges (slow, comprehensive).' }, { q: 'What are RAGAS metrics?', a: 'RAGAS (Retrieval-Augmented Generation Assessment) measures three aspects of RAG pipelines: retrieval quality, context relevance, and answer correctness. DeepEval implements RAGAS.' }, { q: 'Can I use multiple tools together?', a: 'Yes. Use Promptfoo in CI/CD for fast feedback, Braintrust for final batch evaluation, DeepEval for RAG-specific metrics, and LangSmith for tracing multi-step chains.' }, { q: 'Which tool is free?', a: 'Promptfoo is open-source and free. DeepEval is free with optional paid cloud evals. Phoenix is open-source and free. Braintrust and LangSmith offer free tiers.' }, { q: 'How do I set up Promptfoo in CI/CD?', a: 'Write a YAML config with your prompts and test cases, run promptfoo eval in your CI pipeline (GitHub Actions, GitLab CI), and fail the build if scores drop below a threshold.' }, { q: 'What is an LLM-as-judge?', a: 'An LLM-as-judge uses another LLM (GPT-5.5, Claude) to grade your output against a rubric. It scales evaluation without human review, but can be biased. Most tools support this.' } ] }, sources: { title: 'Sources', items: [ '[Promptfoo GitHub](https://github.com/promptfoo/promptfoo) — open-source CI/CD prompt testing framework; basis for speed and feature claims', '[Braintrust Documentation](https://docs.braintrust.dev) — batch evaluation platform; basis for human review and LLM judge claims', '[DeepEval RAGAS Metrics](https://docs.deepeval.trychasm.com) — RAG evaluation library; basis for RAGAS metrics breakdown', '[LangSmith Tracing Guide](https://docs.smith.langchain.com) — LangChain tracing and debugging; basis for multi-step chain claims', '[Phoenix Documentation](https://docs.arize.com/phoenix) — open-source LLM observability; basis for monitoring feature claims' ] } } }, de: {
  theme: 'Werkzeuge & Plattformen',
  title: 'Prompt-Testing-Tools 2026: Promptfoo, Braintrust, DeepEval',
  seoTitle: 'Beste Prompt-Test- und Evaluierungs-Tools 2026',
  metaDescription: 'Welches Prompt-Testing-Tool für welchen Einsatzfall? Promptfoo für CI/CD, Braintrust für finale Evaluierung, DeepEval für RAG – mit Vergleichstabelle.',
  intro: '**Prompt-Testing spaltet sich in zwei: schnelle Unit-Tests (Promptfoo) in Sekunden und langsame Batch-Evaluierungen (Braintrust) in Minuten.** Promptfoo läuft in CI/CD und fängt Regressionen bei jedem Commit.\n\n**Braintrust evaluiert offline mit menschlichen Prüfern.** DeepEval ergänzt RAGAS-Metriken für RAG-Pipelines. Diese Anleitung zeigt, wann man welches Tool nutzt und wie sie zusammenwirken.',
  publishDate: '2026-04-10',
  dateModified: '2026-04-10',
  lastFactChecked: '2026-04-28',
  readTime: '8 Min. Lesezeit',
  educationalLevel: 'Intermediate',
  primaryTerm: 'Prompt-Testing-Tools',
  audience: 'DevOps-Ingenieure, ML-Ingenieure und Platform-Teams, die LLM-Test-Pipelines aufbauen',
  aboutTopics: ['Prompt-Testing', 'Evaluierung', 'CI/CD-Testing', 'Regressionstests'],
  toc: [
    { label: 'Zusammenfassung', anchor: 'key-takeaways' },
    { label: 'Warum Prompts testen?', anchor: 'why-test-prompts' },
    { label: 'Promptfoo: Schnelles CI/CD-Testing', anchor: 'promptfoo-fast-cicd-testing' },
    { label: 'Braintrust: Langsame Batch-Evaluierungen', anchor: 'braintrust-slow-batch-evaluations' },
    { label: 'DeepEval: RAGAS für RAG-Pipelines', anchor: 'deepeval-ragas-for-rag-pipelines' },
    { label: 'LangSmith: Tracing für mehrstufige Chains', anchor: 'langsmith-tracing-multi-step-chains' },
    { label: 'Phoenix: Observability für LLM-Apps', anchor: 'phoenix-observability-for-llm-apps' },
    { label: 'PromptQuorum: Modellvergleich vor Tests', anchor: 'promptquorum' },
    { label: 'Vergleichstabelle', anchor: 'comparison-table' },
    { label: 'Wie man wählt', anchor: 'how-to-choose' },
    { label: 'Warum Prompt-Tests fehlschlagen', anchor: 'common-mistakes' },
    { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
    { label: 'FAQ', anchor: 'faq' },
    { label: 'Quellen', anchor: 'sources' }
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Prompt-Testing-Tools 2026: Promptfoo, Braintrust, DeepEval',
    description: 'Welches Prompt-Testing-Tool für welchen Einsatzfall? Promptfoo für CI/CD, Braintrust für finale Evaluierung, DeepEval für RAG – mit Vergleichstabelle.',
    datePublished: '2026-04-10',
    dateModified: '2026-04-10',
    author: {
      '@type': 'Person',
      name: 'Hans Kuepper',
      sameAs: 'https://www.promptquorum.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum'
    },
    url: 'https://www.promptquorum.com/prompt-engineering/best-prompt-testing-evaluation-tools?lang=de',
    inLanguage: 'de',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro']
    },
    educationalLevel: 'Intermediate'
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'de',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist Prompt-Testing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prompt-Testing prüft, ob die LLM-Ausgaben einer Referenzantwort entsprechen oder eine LLM-as-Judge-Regel erfüllen. Schnelle Tests (Unit) prüfen einen Prompt in Sekunden. Langsame Tests (Batch) evaluieren einen Datensatz offline in Minuten oder Stunden.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wann sollte ich Prompts testen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Testen Sie jedes Mal, wenn Sie einen Prompt ändern, besonders vor dem Produktivdeployment. Nutzen Sie CI/CD-Testing bei jedem Commit und Batch-Evaluierung für finale Freigabe.'
        }
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen Promptfoo und Braintrust?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Promptfoo ist Open-Source, CLI-first und für CI/CD-Pipelines optimiert (schnell, kostenlos). Braintrust ist SaaS, webbasiert und für Offline-Evaluierung mit menschlichen und LLM-Prüfern (langsam, umfassend).'
        }
      },
      {
        '@type': 'Question',
        name: 'Was sind RAGAS-Metriken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RAGAS (Retrieval-Augmented Generation Assessment) misst drei Aspekte von RAG-Pipelines: Abrufsqualität, Kontextrelevanz und Antwortgenauigkeit. DeepEval implementiert RAGAS.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kann ich mehrere Tools zusammen nutzen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Nutzen Sie Promptfoo in CI/CD, Braintrust für finale Batch-Evaluierung, DeepEval für RAG-Metriken und LangSmith für Tracing.'
        }
      },
      {
        '@type': 'Question',
        name: 'Welches Tool ist kostenlos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Promptfoo ist Open-Source und kostenlos. DeepEval und Phoenix sind kostenlos. Braintrust und LangSmith bieten kostenlose Tiers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Wie richte ich Promptfoo in CI/CD ein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Schreiben Sie eine YAML-Konfiguration mit Ihren Prompts und Test-Cases, führen Sie promptfoo eval in Ihrer CI-Pipeline aus und lassen Sie den Build fehlschlagen, wenn Scores unter einen Schwellenwert fallen.'
        }
      },
      {
        '@type': 'Question',
        name: 'Was ist ein LLM-as-Judge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ein LLM-as-Judge nutzt ein anderes LLM (GPT-5.5, Claude) zur Bewertung Ihrer Ausgabe. Dies skaliert Evaluierungen ohne Menschen, kann aber verzerrt sein.'
        }
      },
      {
        '@type': 'Question',
        name: 'Muss ich bei der Verwendung von Prompt-Testing-Tools die DSGVO beachten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. DSGVO Artikel 28 regelt die Verarbeitung personenbezogener Daten. Lokalinferenz-Tools wie Promptfoo bieten Vorteile für Datensicherheit und Datensouveränität. Wichtig: Test-Datensätze dürfen keine echten Kundendaten ohne Anonymisierung enthalten. Empfehlung: Nutzen Sie lokale Tools (Promptfoo) beim Testen sensibler DACH-Kundendaten, um Compliance zu wahren.'
        }
      },
      {
        '@type': 'Question',
        name: 'Sind Prompt-Testing-Tools für den deutschen Mittelstand geeignet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, sehr. BSI-Grundschutz und IT-Sicherheitsstandards für KMU machen lokale, Open-Source-Lösungen attraktiv. Promptfoo ist ideal für DACH-Regionen: kostenlos, Open-Source MIT-Lizenz, keine Cloud-Abhängigkeit, schnelle CI/CD-Integration. Empfehlung: Starten Sie mit Promptfoo für lokale Infrastruktur und selbstbestimmte IT-Kontrolle. Bei mehrstufigen Pipelines und Debugging-Anforderungen ergänzen Sie später mit LangSmith.'
        }
      }
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'de',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Promptfoo: Schnelles CI/CD-Testing',
        url: 'https://promptfoo.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Braintrust: Langsame Batch-Evaluierungen',
        url: 'https://braintrust.dev'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'DeepEval: RAGAS für RAG-Pipelines',
        url: 'https://deepeval.trychasm.com'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'LangSmith: Tracing für mehrstufige Chains',
        url: 'https://smith.langchain.com'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Phoenix: Observability für LLM-Apps',
        url: 'https://arize.com/phoenix'
      }
    ]
  },
  sections: {
    keyTakeaways: {
      isTldr: true,
      items: [
        'Nutzen Sie Promptfoo für CI/CD-Testing (Sekunden, Open-Source, fängt Regressionen)',
        'Nutzen Sie Braintrust für finale Evaluierung (Minuten bis Stunden, menschliche + LLM-Prüfer, Offline-Workflow)',
        'Nutzen Sie DeepEval für RAG-spezifische Evaluierungen (RAGAS-Metriken, Abruf + Kontext + Synthese)',
        'Nutzen Sie LangSmith für Tracing (debuggen Sie mehrstufige Chains, verstehen Sie die Fehlerursache)',
        'Nutzen Sie PromptQuorum für Modellvergleiche (welches Modell zum Testen, side-by-side in Sekunden)',
        'Kombinieren Sie Tools: Promptfoo in CI → Braintrust für Freigabe → LangSmith für Debugging',
        'LLM-as-Judge skaliert Evaluierungen ohne Menschen, kann aber verzerrt sein – validieren Sie gegen Gold-Standard'
      ]
    },
    whyTestPrompts: {
      title: 'Warum Prompts testen?',
      content: '**Diese Anleitung konzentriert sich auf Test- und Evaluierungstools.** Eine umfassende Übersicht finden Sie unter [Beste Prompt-Engineering-Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=de). Für Team-Kollaborationsfunktionen siehe [Beste Prompt-Optimierungs-Tools für Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=de).\n\n**Prompt-Änderungen brechen Production.** Eine einzelne Umformulierung kann die Genauigkeit um 5–10 % senken, Edgecases verpassen oder den Ton ändern. Seitdem April 2026 testen die meisten Unternehmen Prompts überhaupt nicht, sondern verschiffen Änderungen ad-hoc. Testing fängt Regressionen, bevor sie Nutzer erreichen. Es gibt zwei Workflows: schnelle Unit-Tests in [CI/CD](/prompt-engineering/ci-cd-for-prompts?lang=de) (Sekunden, automatisiert) und langsame Batch-Evaluierungen offline (Minuten bis Stunden, menschliche Prüfung). Ohne Testing können Sie nicht sicher iterieren.'
    },
    promptfoo: {
      title: 'Promptfoo: Schnelles CI/CD-Testing',
      content: '**Promptfoo ist Open-Source, CLI-first und für CI/CD-Pipelines optimiert.** Es läuft in Sekunden, fängt Regressionen bei jedem Commit und lässt den Build fehlschlagen, wenn Scores fallen. Schreiben Sie eine YAML-Konfiguration mit Prompts und Test-Cases, führen Sie promptfoo eval aus und erhalten einen Score. Promptfoo unterstützt String-Ähnlichkeit, Regex, [LLM-as-Judge](/prompt-engineering/llm-as-judge-evaluation?lang=de) und benutzerdefinierte Grader.',
      numberedItems: [
        'Nutzen Sie Promptfoo, wenn Sie häufig verschiffen (täglich/wöchentlich)',
        'Beste Option für kleine Test-Sets (100–500 Cases)',
        'Preise: Kostenlos (Open-Source, MIT-Lizenz)'
      ]
    },
    braintrust: {
      title: 'Braintrust: Langsame Batch-Evaluierungen',
      content: '**Nutzen Sie Braintrust, wenn Sie menschliche Prüfung und Baseline-Tracking vor Production benötigen.** Es läuft langsamer (5–30 Minuten für 1.000 Test-Cases, 4+ Stunden mit vollständiger menschlicher Prüfung), unterstützt aber umfassende Evaluierung: protokolliert jeden LLM-Aufruf, ermöglicht Side-by-Side-Vergleich und verfolgt Baseline-Regressionen. Integration mit LangChain, LLamaIndex und benutzerdefiniertem Code.',
      numberedItems: [
        'Nutzen Sie Braintrust für finale Freigabe vor Release',
        'Beste Option für große Test-Sets (1.000+) und menschliche Prüfung',
        'Preise: ~$500/Monat für Teams mit Evaluierungsanforderungen'
      ]
    },
    deepeval: {
      title: 'DeepEval: RAGAS für RAG-Pipelines',
      content: '**Nutzen Sie DeepEval, wenn Sie [RAG-Pipelines](/local-llms/rag-retrieval-augmented-generation?lang=de) bauen und separate Scores für Abruf- und Erzeugungsqualität benötigen.** DeepEval ist eine Python-Bibliothek, die RAG-Qualität mit RAGAS-Metriken misst und Erfolg in drei Dimensionen aufschlüsselt: Abrufsqualität, Kontextrelevanz und Antwortgenauigkeit. Läuft als Python-Code oder über Web-Dashboard.',
      numberedItems: [
        'Nutzen Sie DeepEval, wenn Sie RAG-Architekturen verwenden',
        'Misst Abruf + Synthese separat',
        'Preise: Kostenlos mit optionalen bezahlten Cloud-Evaluierungen'
      ]
    },
    langsmith: {
      title: 'LangSmith: Tracing für mehrstufige Chains',
      content: '**Nutzen Sie LangSmith, wenn Sie mehrstufige Chains debuggen und Fehlerquellen finden müssen.** LangSmith verfolgt jeden LLM-Aufruf, misst Latenz und Kosten und lässt Sie in jeden Schritt hineinbohren, um Engpässe zu identifizieren. Wenn Promptfoo eine Regression kennzeichnet, zeigt LangSmith genau, wo in Ihrer Chain (Abruf → Synthese → Ranking) der Fehler auftrat. Native Integration mit [LangChain](/local-llms/langchain-tutorial?lang=de).',
      numberedItems: [
        'Nutzen Sie LangSmith zum Debuggen mehrstufiger Chains',
        'Essentiell, wenn Sie LangChain verwenden',
        'Preise: Kostenlos Tier, $50+/Monat für Storage'
      ]
    },
    phoenix: {
      title: 'Phoenix: Observability für LLM-Apps',
      content: '**Nutzen Sie Phoenix, wenn Sie Production-Observability benötigen: Überwachung der Prompt-Performance in Echtzeit.** Phoenix (von Arize AI) protokolliert Prompts, Antworten, Embeddings und Latenz. Open-Source und selbst-gehostet. Empfohlenes Komplement zu Promptfoo (Testing) und Braintrust (Evaluierungen).',
      numberedItems: [
        'Nutzen Sie Phoenix für Production-Observability',
        'Open-Source und kostenlos (Apache 2.0)',
        'Kann selbst-gehostet oder Cloud-verwaltet sein'
      ]
    },
    promptquorum: {
      id: 'promptquorum',
      title: 'PromptQuorum: Modellvergleich vor Tests',
      content: '**Nutzen Sie PromptQuorum, um zu vergleichen, wie derselbe Prompt über GPT-5.5, Claude, Gemini und lokale LLMs in einem einzigen Dispatch hinweg funktioniert – bevor Sie sich auf ein Modell für Ihre Test-Suite festlegen.** Promptfoo und Braintrust testen ein Modell nach dem anderen. PromptQuorum beantwortet „Welches Modell sollte ich testen?" in Sekunden.',
      numberedItems: [
        'Nutzen Sie PromptQuorum als ersten Schritt vor dem Aufbau von Promptfoo Test-Suites',
        'Vergleichen Sie 25+ Modelle nebeneinander mit Consensus-Scoring',
        'Preise: Kostenlos Tier + Credits'
      ]
    },
    comparisonTable: {
      id: 'comparison-table',
      title: 'Vergleichstabelle: Funktionsmatrix',
      content: '**Seit April 2026 zeigt sich folgende Funktionsaufschlüsselung:**',
      columns: ['Tool', 'Geschwindigkeit', 'Anwendungsfall', 'CI/CD', 'Menschliche Prüfung', 'Preis'],
      rows: [
        {
          'Tool': 'Promptfoo',
          'Geschwindigkeit': 'Sekunden',
          'Anwendungsfall': 'Unit-Tests, Regression',
          'CI/CD': '✅ Nativ',
          'Menschliche Prüfung': '✗ Nein',
          'Preis': 'Kostenlos (MIT)'
        },
        {
          'Tool': 'Braintrust',
          'Geschwindigkeit': 'Minuten–Stunden',
          'Anwendungsfall': 'Batch-Evaluierung, Freigabe',
          'CI/CD': '✓ API',
          'Menschliche Prüfung': '✅ Ja',
          'Preis': '~$500/Monat'
        },
        {
          'Tool': 'DeepEval',
          'Geschwindigkeit': 'Minuten',
          'Anwendungsfall': 'RAG-Pipeline-Scoring',
          'CI/CD': '✓ Python',
          'Menschliche Prüfung': '✗ Nein',
          'Preis': 'Kostenlos + bezahlte Cloud'
        },
        {
          'Tool': 'LangSmith',
          'Geschwindigkeit': 'Echtzeit',
          'Anwendungsfall': 'Tracing, Debugging',
          'CI/CD': '✓ API',
          'Menschliche Prüfung': '✗ Nein',
          'Preis': 'Kostenlos / $50+/Monat'
        },
        {
          'Tool': 'Phoenix',
          'Geschwindigkeit': 'Echtzeit',
          'Anwendungsfall': 'Production-Überwachung',
          'CI/CD': '✓ API',
          'Menschliche Prüfung': '✗ Nein',
          'Preis': 'Kostenlos (Apache 2.0)'
        },
        {
          'Tool': 'PromptQuorum',
          'Geschwindigkeit': 'Sekunden',
          'Anwendungsfall': 'Modellvergleich',
          'CI/CD': '✗ Nein',
          'Menschliche Prüfung': '✓ Side-by-Side',
          'Preis': 'Kostenlos + Credits'
        }
      ]
    },
    howToChoose: {
      id: 'how-to-choose',
      title: 'Wie Sie Ihren Testing-Stack wählen',
      numberedItems: [
        'Jeder: Starten Sie mit Promptfoo (kostenlos) in Ihrer CI/CD-Pipeline. Führen Sie Tests bei jedem Commit aus. Das ist unverzichtbar.',
        'Versand in Production: Ergänzen Sie Braintrust für finale Batch-Evaluierung mit menschlicher Freigabe vor Release.',
        'RAG-Pipelines: Ergänzen Sie DeepEval für abruf-spezifische RAGAS-Metriken. Promptfoo testet die ganze Pipeline; DeepEval diagnostiziert die Abruflschicht.',
        'Mehrstufige Chains: Ergänzen Sie LangSmith für Tracing. Wenn Promptfoo eine Regression kennzeichnet, zeigt LangSmith, wo in der Chain es brach.',
        'Production-Überwachung: Ergänzen Sie Phoenix für Echtzeit-Observability – Latenz, Kosten und Drift-Erkennung.',
        'Modellauswahl: Führen Sie PromptQuorum zuerst aus, um Modelle auf Ihren spezifischen Prompts zu vergleichen, bevor Sie Test-Suites bauen.'
      ]
    },
    commonMistakes: {
      id: 'common-mistakes',
      title: 'Warum Prompt-Tests fehlschlagen',
      mistakes: [
        {
          mistake: 'Testen nur des Happy Path',
          problem: 'Edge Cases (leere Eingabe, sehr lange Eingabe, widersprüchliche Anweisungen) verursachen 30+ % der Production-Fehler.',
          fix: 'Testen Sie mindestens 20 repräsentative Cases pro Szenario, inklusive adversarischer Eingaben.'
        },
        {
          mistake: 'Nicht auf Regressionen testen',
          problem: 'Eine Prompt-Änderung, die einen Fall verbessert, bricht oft drei andere. Ohne Baseline-Vergleich verschiffen Sie blind.',
          fix: 'Führen Sie den alten Test-Set gegen jede neue Version aus. Revertieren Sie, wenn >10 % der Cases unter Threshold fallen.'
        },
        {
          mistake: 'Mit demselben LLM graden, das Sie testen',
          problem: 'Selbstbewertung bläht Scores um 10–20 % auf. GPT-5.5 benoten GPT-5.5-Ausgabe ist nicht unabhängige Verifikation.',
          fix: 'Nutzen Sie ein anderes Modell zum Graden. Testen Sie GPT-5.5 → graden mit Claude. Oder nutzen Sie menschliche Prüfer als Ground Truth.'
        },
        {
          mistake: 'Latenz und Kosten in der Evaluierung ignorieren',
          problem: 'Ein 10 % genauerer Prompt, der 2× langsamer ist, könnte sich nicht lohnen zu verschiffen.',
          fix: 'Verfolgen Sie Qualität, Latenz UND Kosten pro Ausgabe. Helicone oder Phoenix erhöhen Kostenvisibilität.'
        }
      ]
    },
    relatedReading: {
      title: 'Weiterführende Lektüre',
      items: [
        '[Braintrust vs PromptHub vs Vellum vs Promptfoo: Welches nutzen?](/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=de)',
        '[Beste Prompt-Engineering-Tools 2026: Nach Anwendungsfall geordnet](/prompt-engineering/best-prompt-engineering-tools-2026?lang=de)',
        '[Beste Prompt-Optimierungs-Tools für Teams 2026](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=de)',
        '[Prompt-Engineering vs Fine-Tuning: Wie man entscheidet](/prompt-engineering/prompt-engineering-vs-fine-tuning?lang=de)',
        '[Manuell vs Automatisierte Prompt-Optimierung 2026](/prompt-engineering/manual-vs-automated-prompt-optimization?lang=de)',
        '[Zero-Shot vs Few-Shot Prompting: Wann man jedes nutzt](/prompt-engineering/zero-shot-vs-few-shot?lang=de)'
      ]
    },
    faq: {
      title: 'FAQ',
      faqs: [
        {
          q: 'Was ist Prompt-Testing?',
          a: 'Prompt-Testing prüft, ob die LLM-Ausgaben einer Referenzantwort entsprechen oder eine LLM-as-Judge-Regel erfüllen. Schnelle Tests (Unit) prüfen einen Prompt in Sekunden. Langsame Tests (Batch) evaluieren einen Datensatz offline in Minuten oder Stunden.'
        },
        {
          q: 'Wann sollte ich Prompts testen?',
          a: 'Testen Sie jedes Mal, wenn Sie einen Prompt ändern, besonders vor dem Produktivdeployment. Nutzen Sie CI/CD-Testing bei jedem Commit und Batch-Evaluierung für finale Freigabe.'
        },
        {
          q: 'Was ist der Unterschied zwischen Promptfoo und Braintrust?',
          a: 'Promptfoo ist Open-Source, CLI-first und für CI/CD-Pipelines optimiert (schnell, kostenlos). Braintrust ist SaaS, webbasiert und für Offline-Evaluierung mit menschlichen und LLM-Prüfern (langsam, umfassend).'
        },
        {
          q: 'Was sind RAGAS-Metriken?',
          a: 'RAGAS (Retrieval-Augmented Generation Assessment) misst drei Aspekte von RAG-Pipelines: Abrufsqualität, Kontextrelevanz und Antwortgenauigkeit. DeepEval implementiert RAGAS.'
        },
        {
          q: 'Kann ich mehrere Tools zusammen nutzen?',
          a: 'Ja. Nutzen Sie Promptfoo in CI/CD für schnelles Feedback, Braintrust für finale Batch-Evaluierung, DeepEval für RAG-Metriken und LangSmith für Tracing mehrstufiger Chains.'
        },
        {
          q: 'Welches Tool ist kostenlos?',
          a: 'Promptfoo ist Open-Source und kostenlos. DeepEval ist kostenlos mit optionalen bezahlten Cloud-Evaluierungen. Phoenix ist Open-Source und kostenlos. Braintrust und LangSmith bieten kostenlose Tiers.'
        },
        {
          q: 'Wie richte ich Promptfoo in CI/CD ein?',
          a: 'Schreiben Sie eine YAML-Konfiguration mit Ihren Prompts und Test-Cases, führen Sie promptfoo eval in Ihrer CI-Pipeline (GitHub Actions, GitLab CI) aus und lassen Sie den Build fehlschlagen, wenn Scores unter einen Schwellenwert fallen.'
        },
        {
          q: 'Was ist ein LLM-as-Judge?',
          a: 'Ein LLM-as-Judge nutzt ein anderes LLM (GPT-5.5, Claude) zur Bewertung Ihrer Ausgabe gegen eine Richtlinie. Dies skaliert Evaluierungen ohne menschliche Prüfung, kann aber verzerrt sein. Die meisten Tools unterstützen dies.'
        },
        {
          q: 'Muss ich bei der Verwendung von Prompt-Testing-Tools die DSGVO beachten?',
          a: 'Ja. DSGVO Artikel 28 regelt die Verarbeitung personenbezogener Daten durch Auftragsverarbeiter. Lokalinferenz-Tools wie Promptfoo bieten Vorteile für Datensicherheit und Datensouveränität in der EU. Wichtig: Test-Datensätze dürfen keine echten Kundendaten ohne Anonymisierung enthalten. Empfehlung: Nutzen Sie lokale Tools (Promptfoo) beim Testen sensibler DACH-Kundendaten, um DSGVO-Compliance zu wahren.'
        },
        {
          q: 'Sind Prompt-Testing-Tools für den deutschen Mittelstand geeignet?',
          a: 'Ja, sehr geeignet. BSI-Grundschutz und IT-Sicherheitsstandards für KMU machen lokale, Open-Source-Lösungen attraktiv. Promptfoo ist ideal für DACH-Regionen: kostenlos, Open-Source MIT-Lizenz, keine Cloud-Abhängigkeit, schnelle CI/CD-Integration, optimiert für kleinere Teams. Empfehlung: Starten Sie mit Promptfoo für lokale Infrastruktur und selbstbestimmte IT-Kontrolle. Bei mehrstufigen Pipelines und Debugging-Anforderungen ergänzen Sie später mit LangSmith.'
        }
      ]
    },
    sources: {
      title: 'Quellen',
      items: [
        '[Promptfoo GitHub](https://github.com/promptfoo/promptfoo) — Open-Source CI/CD Prompt-Testing-Framework; Grundlage für Geschwindigkeits- und Funktionsansprüche',
        '[Braintrust Documentation](https://docs.braintrust.dev) — Batch-Evaluierungs-Plattform; Grundlage für menschliche Prüfung und LLM-Judge-Ansprüche',
        '[DeepEval RAGAS Metrics](https://docs.deepeval.trychasm.com) — RAG-Evaluierungs-Bibliothek; Grundlage für RAGAS-Metriken-Aufschlüsselung',
        '[LangSmith Tracing Guide](https://docs.smith.langchain.com) — LangChain Tracing und Debugging; Grundlage für mehrstufige Chain-Ansprüche',
        '[Phoenix Documentation](https://docs.arize.com/phoenix) — Open-Source LLM-Observability; Grundlage für Monitoring-Funktionsansprüche'
      ]
    }
  }
}, fr: { theme: 'Tools & Platforms', title: 'Best Prompt Testing Tools', seoTitle: 'Best Prompt Testing & Evaluation Tools 2026', metaDescription: 'Prompt testing tools 2026: Promptfoo for CI/CD, Braintrust for evals, DeepEval for RAGAS. Compare regression testing, LLM judges, and automated metrics.', intro: '[Translation coming soon](/prompt-engineering/best-prompt-engineering-tools-2026?lang=en).', publishDate: '2026-04-10', readTime: '8 min', educationalLevel: 'Intermediate', sections: {} }, ja: { theme: 'Tools & Platforms', title: 'Best Prompt Testing Tools', seoTitle: 'Best Prompt Testing & Evaluation Tools 2026', metaDescription: 'Prompt testing tools 2026: Promptfoo for CI/CD, Braintrust for evals, DeepEval for RAGAS. Compare regression testing, LLM judges, and automated metrics.', intro: '[Translation coming soon](/prompt-engineering/best-prompt-engineering-tools-2026?lang=en).', publishDate: '2026-04-10', readTime: '8 min', educationalLevel: 'Intermediate', sections: {} }, zh: {
  theme: '工具与平台',
  title: '提示词测试工具2026：Promptfoo、Braintrust、DeepEval',
  seoTitle: '2026年最佳提示词测试与评估工具',
  metaDescription: '不经过测试的提示词变更会打破生产。Promptfoo在CI/CD中快速测试，Braintrust离线批量评估。对比Promptfoo、Braintrust、DeepEval、LangSmith和Phoenix。',
  intro: '**提示词测试分为两种：快速单元测试（Promptfoo）需要秒级响应，缓慢批量评估（Braintrust）需要分钟级响应。** Promptfoo在CI/CD中运行，能在每次提交时捕获回归。\n\n**Braintrust通过人类评估离线运行。** DeepEval为RAG管道添加RAGAS指标。本指南展示何时使用哪个工具以及它们如何协作。',
  publishDate: '2026-04-10',
  dateModified: '2026-04-10',
  lastFactChecked: '2026-04-28',
  readTime: '阅读约8分钟',
  educationalLevel: 'Intermediate',
  primaryTerm: '提示词测试工具',
  audience: 'DevOps工程师、机器学习工程师和构建LLM测试管道的平台团队',
  aboutTopics: ['提示词测试', '评估', 'CI/CD测试', '回归测试'],
  toc: [
    { label: '关键要点', anchor: 'key-takeaways' },
    { label: '为什么要测试提示词？', anchor: 'why-test-prompts' },
    { label: 'Promptfoo：快速CI/CD测试', anchor: 'promptfoo-fast-cicd-testing' },
    { label: 'Braintrust：缓慢批量评估', anchor: 'braintrust-slow-batch-evaluations' },
    { label: 'DeepEval：用于RAG管道的RAGAS', anchor: 'deepeval-ragas-for-rag-pipelines' },
    { label: 'LangSmith：多步链的追踪', anchor: 'langsmith-tracing-multi-step-chains' },
    { label: 'Phoenix：LLM应用的可观测性', anchor: 'phoenix-observability-for-llm-apps' },
    { label: 'PromptQuorum：测试前的模型对比', anchor: 'promptquorum' },
    { label: '对比表', anchor: 'comparison-table' },
    { label: '如何选择', anchor: 'how-to-choose' },
    { label: '为什么提示词测试会失败？', anchor: 'common-mistakes' },
    { label: '延伸阅读', anchor: 'related-reading' },
    { label: '常见问题', anchor: 'faq' },
    { label: '资源', anchor: 'sources' }
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '提示词测试工具2026：Promptfoo、Braintrust、DeepEval',
    description: '不经过测试的提示词变更会打破生产。Promptfoo在CI/CD中快速测试，Braintrust离线批量评估。对比Promptfoo、Braintrust、DeepEval、LangSmith和Phoenix。',
    datePublished: '2026-04-10',
    dateModified: '2026-04-10',
    author: {
      '@type': 'Organization',
      name: 'PromptQuorum'
    },
    publisher: {
      '@type': 'Organization',
      name: 'PromptQuorum'
    },
    url: 'https://www.promptquorum.com/prompt-engineering/best-prompt-testing-evaluation-tools?lang=zh',
    inLanguage: 'zh',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-intro']
    },
    educationalLevel: 'Intermediate'
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'zh',
    mainEntity: [
      {
        '@type': 'Question',
        name: '什么是提示词测试？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '提示词测试验证LLM输出是否与参考答案匹配或是否通过LLM-as-Judge规则。快速测试（单元）在秒内检查单个提示。慢速测试（批量）离线评估数据集，耗时分钟到小时。'
        }
      },
      {
        '@type': 'Question',
        name: '我应该何时测试提示词？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '每当您更改提示词时进行测试，特别是在部署到生产前。对每次提交使用CI/CD测试，对最终签署使用批量评估。'
        }
      },
      {
        '@type': 'Question',
        name: 'Promptfoo和Braintrust有什么区别？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Promptfoo是开源的、CLI优先的，为CI/CD管道构建（快速、免费）。Braintrust是SaaS、基于网络的，用于离线评估，配备人类和LLM评估员（慢速、全面）。'
        }
      },
      {
        '@type': 'Question',
        name: '什么是RAGAS指标？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'RAGAS（检索增强生成评估）衡量RAG管道的三个方面：检索质量、上下文相关性和答案正确性。DeepEval实现RAGAS。'
        }
      },
      {
        '@type': 'Question',
        name: '我可以一起使用多个工具吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。在CI/CD中使用Promptfoo进行快速反馈，Braintrust进行最终批量评估，DeepEval进行RAG特定指标，LangSmith进行多步链追踪。'
        }
      },
      {
        '@type': 'Question',
        name: '哪个工具是免费的？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Promptfoo是开源和免费的。DeepEval免费，可选付费云评估。Phoenix是开源和免费的。Braintrust和LangSmith提供免费层级。'
        }
      },
      {
        '@type': 'Question',
        name: '我如何在CI/CD中设置Promptfoo？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '使用您的提示和测试用例编写YAML配置，在CI管道中运行promptfoo eval（GitHub Actions、GitLab CI），如果分数低于阈值，则使构建失败。'
        }
      },
      {
        '@type': 'Question',
        name: '什么是LLM-as-Judge？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLM-as-Judge使用另一个LLM（GPT-5.5、Claude）根据标准评估您的输出。它在没有人类审查的情况下扩展评估，但可能存在偏见。大多数工具支持此功能。'
        }
      },
      {
        '@type': 'Question',
        name: '使用提示词测试工具时需要遵守中国数据安全法吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的。《中华人民共和国数据安全法》（2021）和《个人信息保护法》（PIPL）管制数据处理。本地推理工具（如Promptfoo）提供数据安全和主权优势。重要：测试数据集不得包含真实客户数据，除非匿名处理。建议：在测试敏感业务数据时使用本地工具（Promptfoo），以保持数据安全法合规性。'
        }
      },
      {
        '@type': 'Question',
        name: '本地推理如何满足中国企业合规要求？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '本地推理使数据保留在组织内部，符合数据安全法第17条的"重要数据处理"要求。对于金融、医疗和法律部门，本地Promptfoo部署避免了跨境数据传输的监管风险。推荐：为金融科技、医疗健康和法律科技用例部署Promptfoo本地版本，确保符合CAC和工信部指导。'
        }
      }
    ]
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    inLanguage: 'zh',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Promptfoo：快速CI/CD测试',
        url: 'https://promptfoo.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Braintrust：缓慢批量评估',
        url: 'https://braintrust.dev'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'DeepEval：用于RAG管道的RAGAS',
        url: 'https://deepeval.trychasm.com'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'LangSmith：多步链的追踪',
        url: 'https://smith.langchain.com'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Phoenix：LLM应用的可观测性',
        url: 'https://arize.com/phoenix'
      }
    ]
  },
  sections: {
    keyTakeaways: {
      isTldr: true,
      items: [
        '将Promptfoo用于CI/CD测试（秒级、开源、捕获回归）',
        '将Braintrust用于最终评估（分钟到小时、人类+LLM评估员、离线工作流）',
        '将DeepEval用于RAG特定评估（RAGAS指标、检索+上下文+合成）',
        '将LangSmith用于追踪（调试多步链，理解故障根本原因）',
        '将PromptQuorum用于模型对比（哪个模型要测试，秒级并排对比）',
        '组合工具：Promptfoo在CI中→Braintrust用于发布→LangSmith用于调试',
        'LLM-as-Judge在没有人类情况下扩展评估，但可能存在偏见——对照黄金标准验证'
      ]
    },
    whyTestPrompts: {
      title: '为什么要测试提示词？',
      content: '**本指南仅关注测试和评估工具。** 有关完整的提示词工程工具景观，请参见[2026年最佳提示词工程工具](/prompt-engineering/best-prompt-engineering-tools-2026?lang=zh)。有关团队协作功能，请参见[2026年团队最佳提示词优化工具](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=zh)。\n\n**提示词变更会破坏生产。** 单一的措辞改变可能会使准确性下降5-10%，错过边界情况，或改变语调。截至2026年4月，大多数公司根本不测试提示词，而是临时发布变更。测试在错误到达用户前捕获回归。存在两种工作流：[CI/CD](/prompt-engineering/ci-cd-for-prompts?lang=zh)中的快速单元测试（秒级、自动化）和离线缓慢批量评估（分钟到小时、人类审查）。没有测试，您无法安全地迭代。'
    },
    promptfoo: {
      title: 'Promptfoo：快速CI/CD测试',
      content: '**Promptfoo是开源的、CLI优先的，为CI/CD管道构建。** 它在秒内运行，在每次提交时捕获回归，如果分数下降则使构建失败。使用提示和测试用例编写YAML配置，运行promptfoo eval，获得分数。Promptfoo支持字符串相似度、正则表达式、[LLM-as-Judge](/prompt-engineering/llm-as-judge-evaluation?lang=zh)和自定义评估器。',
      numberedItems: [
        '如果您经常发布（每日/每周），请使用Promptfoo',
        '最适合小测试集（100-500个用例）',
        '定价：免费（开源、MIT许可证）'
      ]
    },
    braintrust: {
      title: 'Braintrust：缓慢批量评估',
      content: '**如果您需要人类审查和基线跟踪再发布到生产，请使用Braintrust。** 它运行较慢（1000个测试用例需要5-30分钟，完整人类审查需要4+小时），但支持全面评估：记录每个LLM调用，启用并排对比，跟踪基线回归。与LangChain、LlamaIndex和自定义代码集成。',
      numberedItems: [
        '在发布前使用Braintrust进行最终签署',
        '最适合大型测试集（1000+）和人类审查',
        '定价：约$500/月用于具有评估需求的团队'
      ]
    },
    deepeval: {
      title: 'DeepEval：用于RAG管道的RAGAS',
      content: '**如果您构建[RAG管道](/local-llms/rag-retrieval-augmented-generation?lang=zh)并需要检索和生成质量的单独分数，请使用DeepEval。** DeepEval是一个Python库，使用RAGAS指标衡量RAG质量，将成功分解为三个维度：检索质量、上下文相关性和答案正确性。以Python代码或Web仪表板形式运行。',
      numberedItems: [
        '如果您使用RAG架构，请使用DeepEval',
        '分别衡量检索+合成',
        '定价：免费，可选付费云评估'
      ]
    },
    langsmith: {
      title: 'LangSmith：多步链的追踪',
      content: '**如果您需要调试多步链并找到故障发生位置，请使用LangSmith。** LangSmith追踪每个LLM调用，衡量延迟和成本，让您深入到每个步骤以识别瓶颈。当Promptfoo标记回归时，LangSmith显示链中（检索→合成→排名）发生故障的确切位置。与[LangChain](/local-llms/langchain-tutorial?lang=zh)本地集成。',
      numberedItems: [
        '使用LangSmith调试多步链',
        '如果使用LangChain则至关重要',
        '定价：免费层级、$50+/月用于存储'
      ]
    },
    phoenix: {
      title: 'Phoenix：LLM应用的可观测性',
      content: '**如果您需要生产可观测性：实时监控提示词性能，请使用Phoenix。** Phoenix（由Arize AI开发）记录提示词、响应、嵌入和延迟。开源且可自托管。推荐补充Promptfoo（测试）和Braintrust（评估）。',
      numberedItems: [
        '使用Phoenix进行生产可观测性',
        '开源和免费（Apache 2.0）',
        '可自托管或云托管'
      ]
    },
    promptquorum: {
      id: 'promptquorum',
      title: 'PromptQuorum：测试前的模型对比',
      content: '**在为测试套件确定模型前，使用PromptQuorum在单个分派中对比GPT-5.5、Claude、Gemini和本地LLM上同一提示的表现。** Promptfoo和Braintrust一次只测试一个模型。PromptQuorum在秒内回答"我应该测试哪个模型？"。',
      numberedItems: [
        '在构建Promptfoo测试套件前使用PromptQuorum作为第一步',
        '使用共识评分对比25+个模型并排',
        '定价：免费层级+信用'
      ]
    },
    comparisonTable: {
      id: 'comparison-table',
      title: '对比表：功能矩阵',
      content: '**截至2026年4月，以下是功能分解：**',
      columns: ['工具', '速度', '用途', 'CI/CD', '人类审查', '定价'],
      rows: [
        {
          '工具': 'Promptfoo',
          '速度': '秒级',
          '用途': '单元测试、回归',
          'CI/CD': '✅ 原生',
          '人类审查': '✗ 否',
          '定价': '免费（MIT）'
        },
        {
          '工具': 'Braintrust',
          '速度': '分钟-小时',
          '用途': '批量评估、签署',
          'CI/CD': '✓ API',
          '人类审查': '✅ 是',
          '定价': '约$500/月'
        },
        {
          '工具': 'DeepEval',
          '速度': '分钟',
          '用途': 'RAG管道评分',
          'CI/CD': '✓ Python',
          '人类审查': '✗ 否',
          '定价': '免费+付费云'
        },
        {
          '工具': 'LangSmith',
          '速度': '实时',
          '用途': '追踪、调试',
          'CI/CD': '✓ API',
          '人类审查': '✗ 否',
          '定价': '免费/$50+/月'
        },
        {
          '工具': 'Phoenix',
          '速度': '实时',
          '用途': '生产监控',
          'CI/CD': '✓ API',
          '人类审查': '✗ 否',
          '定价': '免费（Apache 2.0）'
        },
        {
          '工具': 'PromptQuorum',
          '速度': '秒级',
          '用途': '模型对比',
          'CI/CD': '✗ 否',
          '人类审查': '✓ 并排',
          '定价': '免费+信用'
        }
      ]
    },
    howToChoose: {
      id: 'how-to-choose',
      title: '如何选择您的测试堆栈',
      numberedItems: [
        '每个人：在CI/CD管道中从Promptfoo（免费）开始。对每次提交运行测试。这是非协商的。',
        '发布到生产：在发布前添加Braintrust进行最终批量评估，配备人类签署。',
        'RAG管道：添加DeepEval进行检索特定的RAGAS指标。Promptfoo测试整个管道；DeepEval诊断检索层。',
        '多步链：添加LangSmith进行追踪。当Promptfoo标记回归时，LangSmith显示链中何处发生故障。',
        '生产监控：添加Phoenix进行实时可观测性——延迟、成本和漂移检测。',
        '模型选择：在构建测试套件前，首先运行PromptQuorum来对比您特定提示上的模型。'
      ]
    },
    commonMistakes: {
      id: 'common-mistakes',
      title: '为什么提示词测试会失败？',
      mistakes: [
        {
          mistake: '仅测试快乐路径',
          problem: '边界情况（空输入、非常长的输入、相互矛盾的指令）导致30%+的生产故障。',
          fix: '为每个场景测试至少20个代表性用例，包括对抗性输入。'
        },
        {
          mistake: '不测试回归',
          problem: '改进一个用例的提示词改变通常会破坏其他三个。没有基线对比，您盲目发布。',
          fix: '对每个新版本运行旧测试集。如果>10%的用例低于阈值，请恢复。'
        },
        {
          mistake: '用您测试的同一LLM评估',
          problem: '自我评估使分数虚高10-20%。GPT-5.5评估GPT-5.5输出不是独立验证。',
          fix: '用不同的模型进行评估。测试GPT-5.5→用Claude评估。或使用人类评估员作为黄金标准。'
        },
        {
          mistake: '在评估中忽视延迟和成本',
          problem: '准确度高10%但速度慢2倍的提示词可能不值得发布。',
          fix: '追踪质量、延迟和每个输出的成本。Helicone或Phoenix增加成本可见性。'
        }
      ]
    },
    relatedReading: {
      title: '延伸阅读',
      items: [
        '[Braintrust vs PromptHub vs Vellum vs Promptfoo：使用哪个？](/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=zh)',
        '[2026年最佳提示词工程工具：按用途排名](/prompt-engineering/best-prompt-engineering-tools-2026?lang=zh)',
        '[2026年团队最佳提示词优化工具](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=zh)',
        '[提示词工程vs微调：如何决策](/prompt-engineering/prompt-engineering-vs-fine-tuning?lang=zh)',
        '[手动vs自动提示词优化2026](/prompt-engineering/manual-vs-automated-prompt-optimization?lang=zh)',
        '[Zero-Shot vs Few-Shot提示：何时使用各个](/prompt-engineering/zero-shot-vs-few-shot?lang=zh)'
      ]
    },
    faq: {
      title: '常见问题',
      faqs: [
        {
          q: '什么是提示词测试？',
          a: '提示词测试验证LLM输出是否与参考答案匹配或是否通过LLM-as-Judge规则。快速测试（单元）在秒内检查单个提示。慢速测试（批量）离线评估数据集，耗时分钟到小时。'
        },
        {
          q: '我应该何时测试提示词？',
          a: '每当您更改提示词时进行测试，特别是在部署到生产前。对每次提交使用CI/CD测试，对最终签署使用批量评估。'
        },
        {
          q: 'Promptfoo和Braintrust有什么区别？',
          a: 'Promptfoo是开源的、CLI优先的，为CI/CD管道构建（快速、免费）。Braintrust是SaaS、基于网络的，用于离线评估，配备人类和LLM评估员（慢速、全面）。'
        },
        {
          q: '什么是RAGAS指标？',
          a: 'RAGAS（检索增强生成评估）衡量RAG管道的三个方面：检索质量、上下文相关性和答案正确性。DeepEval实现RAGAS。'
        },
        {
          q: '我可以一起使用多个工具吗？',
          a: '可以。在CI/CD中使用Promptfoo进行快速反馈，Braintrust进行最终批量评估，DeepEval进行RAG特定指标，LangSmith进行多步链追踪。'
        },
        {
          q: '哪个工具是免费的？',
          a: 'Promptfoo是开源和免费的。DeepEval免费，可选付费云评估。Phoenix是开源和免费的。Braintrust和LangSmith提供免费层级。'
        },
        {
          q: '我如何在CI/CD中设置Promptfoo？',
          a: '使用您的提示和测试用例编写YAML配置，在CI管道中运行promptfoo eval（GitHub Actions、GitLab CI），如果分数低于阈值，则使构建失败。'
        },
        {
          q: '什么是LLM-as-Judge？',
          a: 'LLM-as-Judge使用另一个LLM（GPT-5.5、Claude）根据标准评估您的输出。它在没有人类审查的情况下扩展评估，但可能存在偏见。大多数工具支持此功能。'
        },
        {
          q: '使用提示词测试工具时需要遵守中国数据安全法吗？',
          a: '是的。《中华人民共和国数据安全法》（2021）和《个人信息保护法》（PIPL）管制数据处理。本地推理工具（如Promptfoo）提供数据安全和主权优势。重要：测试数据集不得包含真实客户数据，除非匿名处理。建议：在测试敏感业务数据时使用本地工具（Promptfoo），以保持数据安全法合规性。'
        },
        {
          q: '本地推理如何满足中国企业合规要求？',
          a: '本地推理使数据保留在组织内部，符合《数据安全法》第17条的"重要数据处理"要求。对于金融、医疗和法律部门，本地Promptfoo部署避免了跨境数据传输的监管风险。推荐：为金融科技、医疗健康和法律科技用例部署Promptfoo本地版本，确保符合CAC和工信部指导。'
        }
      ]
    },
    sources: {
      title: '资源',
      items: [
        '[Promptfoo GitHub](https://github.com/promptfoo/promptfoo) — 开源CI/CD提示词测试框架；速度和功能声明的基础',
        '[Braintrust文档](https://docs.braintrust.dev) — 批量评估平台；人类审查和LLM评估员声明的基础',
        '[DeepEval RAGAS指标](https://docs.deepeval.trychasm.com) — RAG评估库；RAGAS指标分解的基础',
        '[LangSmith追踪指南](https://docs.smith.langchain.com) — LangChain追踪和调试；多步链声明的基础',
        '[Phoenix文档](https://docs.arize.com/phoenix) — 开源LLM可观测性；监控功能声明的基础'
      ]
    }
  }
} };
