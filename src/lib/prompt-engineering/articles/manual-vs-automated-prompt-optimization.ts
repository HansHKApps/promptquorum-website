// Slug: manual-vs-automated-prompt-optimization
// Generated: 2026-05-05T12:30:00.000Z

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Manual vs Automated Prompt Optimization: When to Iterate, When to Automate',
    seoTitle: 'Manual vs Automated Optimization: Choosing Your Approach',
    metaDescription: 'Manual vs automated prompt optimization: choose based on prompt count and resources. When to iterate by hand, when to automate. Decision framework and comparison.',
    intro: '**Prompt optimization can be manual (you rewrite the prompt) or automated (a framework rewrites it for you).** Manual optimization gives you control but scales only to ~50 production prompts. Automated optimization (DSPy, TextGrad, Promptfoo) scales to 100+ prompts but requires labeled training data and metric definitions. This guide shows when to use each and how they work together.',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers and prompt engineers choosing between manual iteration and automation',
    primaryTerm: 'prompt optimization',
    aboutTopics: ['prompt optimization', 'DSPy', 'automation', 'scaling'],
    leadAnswerBlock: '**Manual vs automated prompt optimization is a scale decision.** Manual: fastest for single tasks, full control, but does not scale beyond 50 prompts. Automated: slower to set up, requires evaluation metrics, but scales to 100+ prompts. The choice: (1) What is your current prompt count? (2) Do you have labeled examples? (3) Is optimization one-time or ongoing?',
    quickFacts: [
      'Manual optimization: 2–4 iterations per prompt, complete control, no training data required, good for <50 production prompts',
      'Automated optimization: 1–2 learning cycles, requires labeled examples + metrics, scales to 100+ prompts, sets up in days not weeks',
      'Hybrid approach: start manual, graduate to automated once you have 20+ production prompts and evaluation data',
      'DSPy teaches the model to optimize itself—each optimization run generates better candidates without human rewrites',
      'Decision threshold: <50 prompts = manual. 50–100 prompts = hybrid. 100+ prompts = automated.',
      'Cost difference: manual (engineering time) vs automated (compute + data labeling). Automated wins for teams shipping 20+ prompt variants',
    ],
    toc: [
      { label: 'Key Takeaways', anchor: 'key-takeaways' },
      { label: 'Manual vs Automated: Quick Comparison', anchor: 'manual-vs-automated-comparison' },
      { label: 'When Manual Optimization Wins', anchor: 'when-manual-wins' },
      { label: 'When Automated Optimization Wins', anchor: 'when-automated-wins' },
      { label: 'Tools: DSPy, TextGrad, Promptfoo Compared', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: 'Hybrid Workflow: Manual + Automated Together', anchor: 'hybrid-workflow' },
      { label: 'Cost Analysis: Manual vs Automated', anchor: 'cost-analysis' },
      { label: 'Common Mistakes', anchor: 'common-mistakes' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Manual vs Automated Prompt Optimization: When to Iterate, When to Automate',
      description: 'Manual vs automated prompt optimization: choose based on prompt count. Scaling decision framework.',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['prompt optimization', 'manual optimization', 'automated optimization', 'DSPy', 'TextGrad', 'Promptfoo', 'LLM scaling'],
      about: [
        { '@type': 'Thing', name: 'Manual prompt optimization' },
        { '@type': 'Thing', name: 'Automated prompt optimization' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Manual vs Automated Optimization: Feature Comparison',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Manual Optimization', description: 'Human rewrite of prompts based on test failures. Full control, no training data required, scales to ~50 prompts.' },
        { '@type': 'ListItem', position: 2, name: 'DSPy (Automated)', description: 'Stanford framework that teaches the model to optimize itself. Scales to 100+ prompts. Requires metric.' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad (Automated)', description: 'Gradient-based prompt optimization: computes what words to change to improve score. Advanced, research-grade.' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo (Hybrid)', description: 'CLI tool for testing, regression detection, and manual A/B comparison. Not full automation, but structures manual work.' },
        { '@type': 'ListItem', position: 5, name: 'Hybrid Workflow', description: 'Manual for 1–3 prompts, automated for variants at scale. Best for teams shipping multiple prompt versions.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Key Takeaways',
        items: [
          'Manual optimization = you rewrite the prompt. Good for <50 prompts and full control; does not scale.',
          'Automated optimization = a framework rewrites the prompt for you. Good for >100 prompts; requires labeled data and a metric.',
          'Hybrid = start manual, graduate to automated once you have evaluation data and >20 production prompts.',
          'Tools: DSPy (best for research and scale), TextGrad (advanced/research), Promptfoo (testing + manual, not full automation).',
          'Cost breakpoint: ~50 prompts. Below that, manual is faster. Above that, automated saves engineer time.',
          'Always start with manual on a single task, generate evaluation data, then move to automated for variants and scaling.',
        ],
      },

      comparison: {
        title: 'Manual vs Automated: Quick Comparison',
        content: '**Choose based on three factors: prompt count, evaluation data, and scaling needs.** Manual optimization is rewriting a prompt based on test failures — it is direct control but does not scale beyond ~50 production prompts. Automated optimization uses frameworks (DSPy, TextGrad) to rewrite prompts algorithmically — it scales to 100+ but requires labeled data and metrics. A third validation step — running the same prompt across multiple models using a [prompt optimization platform](/features) — confirms which version generalizes best before committing to production.',
        columns: ['Factor', 'Manual Optimization', 'Automated Optimization'],
        rows: [
          { 'Factor': 'Best for N prompts', 'Manual Optimization': '<50 (full control focus)', 'Automated Optimization': '100+ (scaling focus)' },
          { 'Factor': 'Training data required', 'Manual Optimization': 'No', 'Automated Optimization': 'Yes (50–500 examples)' },
          { 'Factor': 'Setup time', 'Manual Optimization': '1–2 hours per prompt', 'Automated Optimization': '2–5 days one-time' },
          { 'Factor': 'Cost per prompt', 'Manual Optimization': '$1,000–5,000 (labor)', 'Automated Optimization': '$100–500 (compute + labels)' },
        ],
      },

      manualWins: {
        title: 'When Manual Optimization Wins',
        items: [
          'Fewer than 50 production prompts—the overhead of setting up data and metrics is not worth it',
          'Novel or one-off tasks—you do not know the optimization direction yet, so human insight is faster',
          'High control requirements—compliance, brand voice, creative writing—where you need to approve every change',
          'Small teams (<5 people)—manual iteration is fast and team members understand the reasons for changes',
          'Limited evaluation data—you have <50 labeled examples, so automated training would overfit',
        ],
      },

      automatedWins: {
        title: 'When Automated Optimization Wins',
        items: [
          'More than 100 production prompts—the engineering cost of manual iteration becomes prohibitive',
          'Variant testing at scale—you need 10+ prompt versions for A/B testing; automation generates them faster',
          'Ongoing optimization—prompts degrade over time as user inputs change; automated systems can retrain monthly',
          'Metric-driven workflows—your task has a clear success metric (accuracy, BLEU, LLM judge rating), not subjective quality',
          'Large teams (10+)—coordination overhead of manual changes gets high; automation makes optimization reproducible',
        ],
      },

      tools: {
        title: 'Tools: DSPy, TextGrad, Promptfoo Compared',
        content: '**Three main tools support automated or semi-automated optimization:**',
        columns: ['Tool', 'Approach', 'Maturity', 'Scale', 'Best For'],
        rows: [
          { 'Tool': 'DSPy (Stanford)', 'Approach': 'Prompt optimization via learning', 'Maturity': 'Production-ready (open-source)', 'Scale': '50–500 prompts', 'Best For': 'Teams scaling prompt variants' },
          { 'Tool': 'TextGrad', 'Approach': 'Gradient-based prompt rewriting', 'Maturity': 'Research (new, not in production yet)', 'Scale': '10–100 prompts', 'Best For': 'Research, cutting-edge optimization' },
          { 'Tool': 'Promptfoo', 'Approach': 'Testing + regression detection (manual-assisted)', 'Maturity': 'Production-ready (open-source)', 'Scale': 'Any size', 'Best For': 'CI/CD testing, not full automation' },
        ],
      },

      hybrid: {
        title: 'Hybrid Workflow: Manual + Automated Together',
        content: 'The real world is hybrid. Start with manual optimization to build intuition and evaluation data. Graduate to automated once you have scale.',
        numberedItems: [
          'Weeks 1–4: Manual optimization of 1–3 core prompts. Generate 50+ labeled examples per prompt.',
          'Week 4–8: Build evaluation metric (accuracy, BLEU, or LLM judge). Run Promptfoo A/B tests to validate manual work.',
          'Week 8+: Set up DSPy. Retrain on growing evaluation dataset. Add new prompt variants via automation.',
          'Production: Deploy DSPy-optimized variants. Use Promptfoo for regression testing on every commit.',
        ],
      },

      costAnalysis: {
        title: 'Cost Analysis: Manual vs Automated',
        content: '**At what prompt count does automated become cheaper than manual?** Break-even is roughly 50–80 prompts.',
        items: [
          'Manual cost per prompt: 4–8 hours of engineer time × $150/hr = $600–1,200 direct labor. Add research, testing, documentation = $1,500–5,000 total per prompt.',
          'Automated cost one-time: DSPy setup = $2,000–5,000 (2–5 days engineer + compute). Then per-prompt cost = $100–300 (compute + labeling).',
          'Break-even: At ~60 prompts, automated total cost = $2,000 + (60 × $200) = $14,000. Manual total cost = 60 × $3,000 = $180,000. Automated wins by 13×.',
          'Below 30 prompts: Manual is faster and cheaper. Overhead of automation setup is not justified.',
          'Above 100 prompts: Automated is 5–10× cheaper than manual.',
        ],
      },

      mistakes: {
        title: 'Common Mistakes',
        items: [
          'Running DSPy without labeled data — DSPy learns from examples. Without 50+ labeled (input, output) pairs, it trains on noise. Start with manual iterations, document pairs, then use them as training data.',
          'Choosing a vague metric — DSPy and TextGrad require quantified metrics (accuracy, F1, BLEU). Vague metrics like "quality" cannot guide optimization. Define success: accuracy on test set, substring match, or LLM judge >8/10.',
          'Expecting automation to find novel techniques — DSPy optimizes text within known structures but will not discover chain-of-thought or few-shot examples on its own. You must define the structure (task signature) first.',
          'Setting up automation for <30 prompts — Automation overhead (setup, labeling, metrics) is 2–5 weeks. For <30 prompts, manual iteration is 2–4× faster. Move to automation at 50+ prompts.',
          'Automating without ongoing monitoring — Prompts degrade as user inputs change. Retrain monthly: new inputs → updated evaluation set → rerun DSPy → test → deploy. Treat optimization as ongoing, not one-time.',
        ],
      },

      faq: {
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can I mix manual and automated optimization?', a: 'Yes, and this is best practice. Manual for your core task (1–3 prompts), automated for variants and scaling. Use Promptfoo to test all variants; use DSPy to generate new ones.' },
          { q: 'Does DSPy work with all models?', a: 'DSPy works with any API-accessible model: GPT-5.5, Claude, Gemini, Cohere, Ollama. It does not work with vision models yet. Local models are supported but slower.' },
          { q: 'How many labeled examples do I need for DSPy?', a: 'Minimum 30–50 for simple tasks (classification, extraction). Complex tasks (summarization, reasoning) benefit from 100–500. More examples = more robust optimization.' },
          { q: 'What is the compute cost of running DSPy?', a: 'One DSPy optimization run on 100 examples costs ~$5–20 (API calls). Running 10 candidate prompts × 100 examples = 1,000 calls = $50–200 per optimization cycle. Monthly retraining = $50–200/month.' },
          { q: 'Can I deploy a DSPy-optimized prompt in production?', a: 'Yes. DSPy outputs a plain-text prompt. Copy it to your production system (PromptQuorum, LangChain, Vellum, etc.) and serve it normally. No special DSPy runtime needed in production.' },
          { q: 'Does automated optimization guarantee better prompts?', a: 'No. If your metric is wrong, DSPy optimizes for the wrong thing. If your evaluation data is biased, DSPy learns the bias. Garbage in, garbage out.' },
          { q: 'Should I use automated optimization for creative tasks?', a: 'Not yet. Automation works best on metric-driven tasks (classification, extraction, summarization). Creative tasks (copywriting, storytelling) lack clear metrics, so manual control is better.' },
          { q: 'Can DSPy optimize prompts for multiple models at once?', a: 'DSPy optimizes for one model at a time. To optimize for GPT-5.5 AND Claude, run DSPy twice (once per model) and compare results. Hybrid approach: optimize for your preferred model, then test on others manually.' },
        ],
      },

      relatedReading: {
        title: 'Related Reading',
        items: [
          '[Fundamentals of Prompt Optimization: 6 Core Levers](/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[Best Prompt Optimization Tools for Teams 2026](/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[Prompt Evaluation Metrics: How to Measure Prompt Quality](/prompt-engineering/prompt-evaluation-metrics)',
          '[Best Prompt Testing and Evaluation Tools 2026](/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[Prompt Engineering Setup for Small Teams](/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[Zero-Shot vs Few-Shot Prompting: When to Use Each](/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: 'Sources',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Manuelle vs Automatisierte Prompt-Optimierung: Wann welcher Ansatz',
    seoTitle: 'Manuelle vs Automatisierte Optimierung: Entscheidungshilfe',
    metaDescription: 'Manuelle vs automatisierte Prompt-Optimierung: Entscheidungsrahmen basierend auf Prompt-Anzahl und Ressourcen. Wann von Hand optimieren, wann automatisieren.',
    intro: '**Prompt-Optimierung kann manuell erfolgen (Sie schreiben den Prompt um) oder automatisiert (ein Framework schreibt ihn für Sie um).** Manuelle Optimierung gibt Ihnen Kontrolle, skaliert aber nur bis ~50 Produktions-Prompts. Automatisierte Optimierung (DSPy, TextGrad, Promptfoo) skaliert auf 100+ Prompts, erfordert aber gekennzeichnete Trainingsdaten und Metrik-Definitionen. Dieser Leitfaden zeigt, wann Sie welchen Ansatz verwenden und wie sie zusammenwirken.',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler und Prompt-Ingenieure, die zwischen manueller Iteration und Automatisierung wählen',
    primaryTerm: 'Prompt-Optimierung',
    aboutTopics: ['Prompt-Optimierung', 'DSPy', 'Automatisierung', 'Skalierung'],
    leadAnswerBlock: '**Manuelle vs automatisierte Prompt-Optimierung ist eine Skalierungsentscheidung.** Manuell: schnellste für einzelne Aufgaben, volle Kontrolle, skaliert aber nicht über 50 Prompts hinaus. Automatisiert: langsamer einzurichten, erfordert Evaluierungsmetriken, skaliert auf 100+ Prompts. Die Entscheidung hängt ab von: (1) Wie viele Produktions-Prompts haben Sie? (2) Haben Sie gekennzeichnete Beispiele? (3) Ist Optimierung einmalig oder laufend?',
    quickFacts: [
      'Manuelle Optimierung: 2–4 Iterationen pro Prompt, vollständige Kontrolle, keine Trainingsdaten erforderlich, gut für <50 Produktions-Prompts',
      'Automatisierte Optimierung: 1–2 Lernzyklen, erfordert gekennzeichnete Beispiele + Metriken, skaliert auf 100+ Prompts, Setup in Tagen nicht Wochen',
      'Hybrid-Ansatz: beginnen Sie manuell, wechseln Sie zur Automatisierung, sobald Sie 20+ Produktions-Prompts und Evaluierungsdaten haben',
      'DSPy lehrt das Modell, sich selbst zu optimieren — jeder Optimierungsdurchlauf generiert bessere Kandidaten ohne manuelles Umschreiben',
      'Entscheidungsschwelle: <50 Prompts = manuell. 50–100 Prompts = hybrid. 100+ Prompts = automatisiert.',
      'Kostenunterschied: manuell (Ingenieurzeit) vs automatisiert (Berechnung + Datenbeschriftung). Automatisiert gewinnt für Teams, die 20+ Prompt-Varianten liefern',
    ],
    toc: [
      { label: 'Zusammenfassung', anchor: 'key-takeaways' },
      { label: 'Manuell vs Automatisiert: Schnellvergleich', anchor: 'manual-vs-automated-comparison' },
      { label: 'Wann Manuelle Optimierung Gewinnt', anchor: 'when-manual-wins' },
      { label: 'Wann Automatisierte Optimierung Gewinnt', anchor: 'when-automated-wins' },
      { label: 'Tools: DSPy, TextGrad, Promptfoo im Vergleich', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: 'Hybrid-Workflow: Manuell + Automatisiert zusammen', anchor: 'hybrid-workflow' },
      { label: 'Kostenanalyse: Manuell vs Automatisiert', anchor: 'cost-analysis' },
      { label: 'Häufige Fehler', anchor: 'common-mistakes' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Weiterführende Lektüre', anchor: 'related-reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Manuelle vs Automatisierte Prompt-Optimierung: Wann welcher Ansatz',
      description: 'Manuelle vs automatisierte Prompt-Optimierung: Entscheidungsrahmen basierend auf Prompt-Anzahl. Skalierungsentscheidung.',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/de/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['Prompt-Optimierung', 'manuelle Optimierung', 'automatisierte Optimierung', 'DSPy', 'TextGrad', 'Promptfoo', 'LLM-Skalierung'],
      about: [
        { '@type': 'Thing', name: 'Manuelle Prompt-Optimierung' },
        { '@type': 'Thing', name: 'Automatisierte Prompt-Optimierung' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Manuell vs Automatisiert: Vergleich der Features',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Manuelle Optimierung', description: 'Menschliches Umschreiben von Prompts basierend auf Testfehlern. Volle Kontrolle, keine Trainingsdaten erforderlich, skaliert auf ~50 Prompts.' },
        { '@type': 'ListItem', position: 2, name: 'DSPy (Automatisiert)', description: 'Stanford-Framework, das das Modell lehrt, sich selbst zu optimieren. Skaliert auf 100+ Prompts. Erfordert Metrik.' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad (Automatisiert)', description: 'Gradienten-basierte Prompt-Optimierung: berechnet, welche Wörter geändert werden müssen, um Punktzahl zu verbessern. Fortgeschritten, Forschungsqualität.' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo (Hybrid)', description: 'CLI-Tool zum Testen, Regressionserkennung und manueller A/B-Vergleich. Keine vollständige Automatisierung, strukturiert aber manuelle Arbeit.' },
        { '@type': 'ListItem', position: 5, name: 'Hybrid-Workflow', description: 'Manuell für 1–3 Prompts, automatisiert für Varianten in Skalierung. Beste für Teams, die mehrere Prompt-Versionen liefern.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Zusammenfassung',
        items: [
          'Manuelle Optimierung = Sie schreiben Prompt um. Gut für <50 Prompts und volle Kontrolle; skaliert nicht.',
          'Automatisierte Optimierung = Framework schreibt Prompt für Sie um. Gut für >100 Prompts; erfordert gekennzeichnete Daten und Metrik.',
          'Hybrid = beginnen Sie manuell, wechseln zur Automatisierung, sobald Sie Evaluierungsdaten und >20 Produktions-Prompts haben.',
          'Tools: DSPy (beste für Forschung und Skalierung), TextGrad (fortgeschritten/Forschung), Promptfoo (Testen + manuell, nicht vollständige Automatisierung).',
          'Kostengrenzwert: ~50 Prompts. Darunter ist Manuell schneller. Darüber sparen Automatisiert Ingenieurzeit.',
          'Beginnen Sie immer mit Manuell auf einzelner Aufgabe, generieren Sie Evaluierungsdaten, dann wechseln Sie zu Automatisiert für Varianten und Skalierung.',
        ],
      },

      comparison: {
        title: 'Manuell vs Automatisiert: Schnellvergleich',
        content: '**Wählen Sie basierend auf drei Faktoren: Prompt-Anzahl, Evaluierungsdaten und Skalierungsbedarf.** Manuelle Optimierung ist das Umschreiben eines Prompts basierend auf Testfehlern — es ist direkte Kontrolle, skaliert aber nicht über ~50 Produktions-Prompts. Automatisierte Optimierung nutzt Frameworks (DSPy, TextGrad), um Prompts algorithmisch umzuschreiben — es skaliert auf 100+, erfordert aber gekennzeichnete Daten und Metriken.',
        columns: ['Faktor', 'Manuelle Optimierung', 'Automatisierte Optimierung'],
        rows: [
          { 'Faktor': 'Beste für N Prompts', 'Manuelle Optimierung': '<50 (Kontrollfokus)', 'Automatisierte Optimierung': '100+ (Skalierungsfokus)' },
          { 'Faktor': 'Trainingsdaten erforderlich', 'Manuelle Optimierung': 'Nein', 'Automatisierte Optimierung': 'Ja (50–500 Beispiele)' },
          { 'Faktor': 'Setup-Zeit', 'Manuelle Optimierung': '1–2 Stunden pro Prompt', 'Automatisierte Optimierung': '2–5 Tage einmalig' },
          { 'Faktor': 'Kosten pro Prompt', 'Manuelle Optimierung': '1.000–5.000 EUR (Arbeit)', 'Automatisierte Optimierung': '100–500 EUR (Berechnung + Labels)' },
        ],
      },

      manualWins: {
        title: 'Wann Manuelle Optimierung Gewinnt',
        items: [
          'Weniger als 50 Produktions-Prompts — Overhead des Setup von Daten und Metriken lohnt sich nicht',
          'Neuartige oder einmalige Aufgaben — Sie kennen Optimierungsrichtung noch nicht, daher ist menschliche Intuition schneller',
          'Hohe Kontrollvorgaben — Compliance, Markenstimme, kreatives Schreiben — wo Sie jede Änderung genehmigen müssen',
          'Kleine Teams (<5 Personen) — manuelle Iteration ist schnell und Teammitglieder verstehen Gründe für Änderungen',
          'Begrenzte Evaluierungsdaten — Sie haben <50 gekennzeichnete Beispiele, daher würde Automatisiertes Training überanpassen',
        ],
      },

      automatedWins: {
        title: 'Wann Automatisierte Optimierung Gewinnt',
        items: [
          'Mehr als 100 Produktions-Prompts — Kosten manuelle Iteration wird unerschwinglich',
          'Varianten-Testen in Skalierung — Sie brauchen 10+ Prompt-Versionen für A/B-Testen; Automatisierung generiert schneller als menschliches Umschreiben',
          'Laufende Optimierung — Prompts verschlechtern sich über Zeit, wenn Nutzereingaben ändern; automatisierte Systeme können monatlich umtrainiert werden',
          'Metrik-gesteuerte Workflows — Ihre Aufgabe hat klare Erfolgsmetrik (Genauigkeit, BLEU, LLM-Schiedsrichter-Rating), nicht subjektive Qualität',
          'Große Teams (10+) — Koordinations-Overhead manueller Änderungen wird hoch; Automatisierung macht Optimierung nachvollziehbar',
        ],
      },

      tools: {
        title: 'Tools: DSPy, TextGrad, Promptfoo im Vergleich',
        content: '**Drei Hauptwerkzeuge unterstützen automatisierte oder semi-automatisierte Optimierung:**',
        columns: ['Tool', 'Ansatz', 'Reife', 'Skalierung', 'Beste für'],
        rows: [
          { 'Tool': 'DSPy (Stanford)', 'Ansatz': 'Prompt-Optimierung via Lernen', 'Reife': 'Produktionsreif (Open-Source)', 'Skalierung': '50–500 Prompts', 'Beste für': 'Teams skalieren Prompt-Varianten' },
          { 'Tool': 'TextGrad', 'Ansatz': 'Gradienten-basiertes Umschreiben', 'Reife': 'Forschung (neu, noch nicht produktionsreif)', 'Skalierung': '10–100 Prompts', 'Beste für': 'Forschung, fortgeschrittene Optimierung' },
          { 'Tool': 'Promptfoo', 'Ansatz': 'Testen + Regressionserkennung (manuell-assistiert)', 'Reife': 'Produktionsreif (Open-Source)', 'Skalierung': 'Beliebige Größe', 'Beste für': 'CI/CD-Testen, nicht vollständige Automatisierung' },
        ],
      },

      hybrid: {
        title: 'Hybrid-Workflow: Manuell + Automatisiert zusammen',
        content: 'Die echte Welt ist hybrid. Beginnen Sie mit manueller Optimierung, um Intuition und Evaluierungsdaten aufzubauen. Wechseln Sie zur Automatisierung, sobald Sie Skalierung haben.',
        numberedItems: [
          'Wochen 1–4: Manuelle Optimierung von 1–3 Kern-Prompts. Generieren Sie 50+ gekennzeichnete Beispiele pro Prompt.',
          'Woche 4–8: Erstellen Sie Evaluierungsmetrik (Genauigkeit, BLEU oder LLM-Schiedsrichter). Führen Sie Promptfoo A/B-Tests aus, um manuelle Arbeit zu validieren.',
          'Woche 8+: Richten Sie DSPy ein. Trainieren Sie auf wachsendem Evaluierungsdatensatz um. Fügen Sie neue Prompt-Varianten via Automatisierung hinzu.',
          'Produktion: Deployen Sie DSPy-optimierte Varianten. Nutzen Sie Promptfoo für Regressionstesting bei jedem Commit.',
        ],
      },

      costAnalysis: {
        title: 'Kostenanalyse: Manuell vs Automatisiert',
        content: '**Ab welcher Prompt-Anzahl wird Automatisierung billiger als Manuell?** Breakeven liegt etwa bei 50–80 Prompts.',
        items: [
          'Manuelle Kosten pro Prompt: 4–8 Stunden Ingenieurzeit × 150 EUR/Std = 600–1.200 EUR direkte Arbeit. Addieren Sie Forschung, Testen, Dokumentation = 1.500–5.000 EUR gesamt pro Prompt.',
          'Automatisierte Kosten einmalig: DSPy-Setup = 2.000–5.000 EUR (2–5 Tage Ingenieur + Berechnung). Dann pro-Prompt-Kosten = 100–300 EUR (Berechnung + Beschriftung).',
          'Breakeven: Bei ~60 Prompts, automatisierte Gesamtkosten = 2.000 + (60 × 200 EUR) = 14.000 EUR. Manuelle Gesamtkosten = 60 × 3.000 EUR = 180.000 EUR. Automatisiert gewinnt um 13×.',
          'Unter 30 Prompts: Manuell ist schneller und billiger. Automatisierungs-Overhead lohnt sich nicht.',
          'Über 100 Prompts: Automatisiert ist 5–10× billiger als Manuell.',
        ],
      },

      mistakes: {
        title: 'Häufige Fehler',
        items: [
          'DSPy ohne gekennzeichnete Daten ausführen — DSPy lernt von Beispielen. Ohne 50+ gekennzeichnete (Eingabe, Ausgabe)-Paare trainiert es auf Rauschen. Beginnen Sie mit 10–20 manuelle Iterationen, dokumentieren Sie Paare, dann nutzen Sie sie als Trainingssatz.',
          'Eine unklare Metrik wählen — DSPy und TextGrad erfordern quantifizierte Metriken (Genauigkeit, F1, BLEU). Unklare Metriken wie „Qualität" können Optimierung nicht lenken. Definieren Sie: Genauigkeit auf Testsatz, Substring-Abgleich mit Gold, oder LLM-Schiedsrichter-Punktzahl >8/10.',
          'Erwarten, dass Automatisierung neuartige Techniken findet — DSPy optimiert Text innerhalb bekannter Strukturen, wird aber Chain-of-Thought oder Few-Shot-Beispiele nicht selbst entdecken — Sie müssen Struktur (Task Signature) zuerst definieren.',
          'Automatisierung für <30 Prompts aufsetzen — Automatisierungs-Overhead (Setup, Datenbeschriftung, Metrik-Definition) ist 2–5 Wochen Arbeit. Für <30 Prompts ist manuelle Iteration 2–4× schneller. Wechseln Sie bei 50+ Prompts zur Automatisierung.',
          'Automatisierung ohne laufende Überwachung — Prompts verschlechtern sich über Zeit, wenn Nutzereingaben ändern. Ein optimierter Prompt von vor 3 Monaten kann bei neuen Eingaben fehlschlagen. Trainieren Sie monatlich um: neue Eingaben → aktualisierter Evaluierungssatz → DSPy erneut ausführen → auf neuen Daten testen → aktualisierter Prompt deployen.',
        ],
      },

      faq: {
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann ich manuelle und automatisierte Optimierung mischen?', a: 'Ja, und das ist Best Practice. Manuell für Ihre Kern-Aufgabe (1–3 Prompts), automatisiert für Varianten und Skalierung. Nutzen Sie Promptfoo, um alle Varianten zu testen; nutzen Sie DSPy, um neue zu generieren.' },
          { q: 'Funktioniert DSPy mit allen Modellen?', a: 'DSPy funktioniert mit jedem API-zugänglichen Modell: GPT-5.5, Claude, Gemini, Cohere, Ollama. Es funktioniert noch nicht mit Vision-Modellen. Lokale Modelle (Ollama, LM Studio) werden unterstützt, sind aber langsamer.' },
          { q: 'Wie viele gekennzeichnete Beispiele brauche ich für DSPy?', a: 'Minimum 30–50 für einfache Aufgaben (Klassifizierung, Extraktion). Komplexe Aufgaben (Zusammenfassung, Reasoning) profitieren von 100–500. Mehr Beispiele = robustere Optimierung.' },
          { q: 'Was sind Berechnungskosten für DSPy?', a: 'Ein DSPy-Optimierungsdurchlauf auf 100 Beispielen kostet ~5–20 EUR (API-Aufrufe zu Ihrem Modell). 10 Kandidaten-Prompts × 100 Beispiele = 1.000 Aufrufe = 50–200 EUR pro Optimierungszyklus. Monatliches Umtraining auf 100 neuen Beispielen = 50–200 EUR/Monat.' },
          { q: 'Kann ich einen DSPy-optimierten Prompt in Produktion deployen?', a: 'Ja. DSPy gibt einen Klartxt-Prompt aus. Kopieren Sie ihn in Ihr Produktionssystem (PromptQuorum, LangChain, Vellum, etc.) und servieren Sie ihn normal. Keine spezielle DSPy-Laufzeit nötig in Produktion.' },
          { q: 'Garantiert automatisierte Optimierung bessere Prompts?', a: 'Nein. Wenn Ihre Metrik falsch ist (z.B. für Länge statt Genauigkeit optimieren), optimiert DSPy für das Falsche. Wenn Ihre Evaluierungsdaten verzerrt sind, lernt DSPy die Verzerrung. Müll rein, Müll raus.' },
          { q: 'Sollte ich automatisierte Optimierung für kreative Aufgaben verwenden?', a: 'Noch nicht. Automatisierung funktioniert beste bei metrik-gesteuerten Aufgaben (Klassifizierung, Extraktion, Zusammenfassung, Reasoning). Kreative Aufgaben (Copywriting, Geschichtenerzählen) fehlen klare Metriken, daher ist manuelle Kontrolle besser.' },
          { q: 'Kann DSPy Prompts für mehrere Modelle gleichzeitig optimieren?', a: 'DSPy optimiert jeweils für ein Modell. Um für GPT-5.5 UND Claude zu optimieren, führen Sie DSPy zweimal aus (einmal pro Modell) und vergleichen Ergebnisse. Hybrid-Ansatz: optimieren Sie für Ihr bevorzugtes Modell, testen Sie dann manuell auf anderen.' },
          { q: 'Muss ich bei der Verwendung von DSPy oder Prompt-Optimierungstools die DSGVO beachten?', a: 'Ja. Wenn Sie Nutzerdaten, Eingabe-Ausgabe-Beispiele oder Trainingsdaten für Optimierung verwenden, müssen Sie DSGVO-Artikel 28 (Datenverarbeitungsverträge) einhalten. Dokumentieren Sie: wo Daten gespeichert, wer darauf zugreift, wie lange es aufbewahrt wird. BSI-Grundschutz-Kataloge helfen mit IT-Sicherheits-Checklisten.' },
          { q: 'Ist DSPy oder automatisierte Prompt-Optimierung für deutsche KMUs geeignet?', a: 'Ja. Für Mittelstandsunternehmen mit <100 Produktions-Prompts ist hybrid empfohlen: manuell für Kern-Prompts, dann DSPy einmal Sie 50+ Beispiele haben. Beachten Sie: BSI-Grundschutz-Anforderungen für kritische Prozesse, möglicherweise TISAX-Zertifizierung. Beginnen Sie klein, dokumentieren Sie, dann skalieren Sie.' },
        ],
      },

      relatedReading: {
        title: 'Weiterführende Lektüre',
        items: [
          '[Grundlagen der Prompt-Optimierung: 6 Kernhebel](/de/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[Beste Prompt-Optimierungstools für Teams 2026](/de/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[Prompt-Evaluierungsmetriken: Wie man Prompt-Qualität misst](/de/prompt-engineering/prompt-evaluation-metrics)',
          '[Beste Prompt-Test- und Evaluierungstools 2026](/de/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[Prompt-Engineering-Setup für kleine Teams](/de/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[Zero-Shot vs Few-Shot Prompting: Wann Sie jedes verwenden](/de/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: 'Quellen',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },

  es: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Optimización manual vs automatizada de prompts: cuándo iterar, cuándo automatizar',
    seoTitle: 'Optimización manual vs automatizada: elige tu enfoque',
    metaDescription: 'Optimización manual vs automatizada de prompts: elige según el número de prompts y recursos. Cuándo iterar a mano y cuándo automatizar. Con framework.',
    intro: '**La optimización de prompts puede ser manual (tú reescribes el prompt) o automatizada (un framework lo reescribe por ti).** La optimización manual te da control pero escala solo hasta ~50 prompts en producción. La optimización automatizada (DSPy, TextGrad, Promptfoo) escala a 100+ prompts pero requiere datos de entrenamiento etiquetados y definiciones de métricas. Esta guía muestra cuándo usar cada enfoque y cómo funcionan juntos.',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores e ingenieros de prompts que eligen entre iteración manual y automatización',
    primaryTerm: 'optimización de prompts',
    aboutTopics: ['optimización de prompts', 'DSPy', 'automatización', 'escalabilidad'],
    leadAnswerBlock: '**Manual vs automatizado es una decisión de escala.** Manual: más rápido para tareas individuales, control total, pero no escala más allá de 50 prompts. Automatizado: más lento de configurar, requiere métricas de evaluación, pero escala a 100+ prompts. La elección depende de: (1) ¿Cuántos prompts tienes en producción? (2) ¿Tienes ejemplos etiquetados? (3) ¿La optimización es puntual o continua?',
    quickFacts: [
      'Optimización manual: 2–4 iteraciones por prompt, control total, sin datos de entrenamiento requeridos, adecuada para <50 prompts en producción',
      'Optimización automatizada: 1–2 ciclos de aprendizaje, requiere ejemplos etiquetados + métricas, escala a 100+ prompts, se configura en días no semanas',
      'Enfoque híbrido: empieza manual, avanza a automatizado una vez que tienes 20+ prompts en producción y datos de evaluación',
      'DSPy enseña al modelo a optimizarse a sí mismo — cada ejecución de optimización genera mejores candidatos sin reescrituras manuales',
      'Umbral de decisión: <50 prompts = manual. 50–100 prompts = híbrido. 100+ prompts = automatizado.',
      'Diferencia de coste: manual (tiempo de ingeniería) vs automatizado (cómputo + etiquetado de datos). Automatizado gana para equipos que publican 20+ variantes de prompts',
    ],
    toc: [
      { label: 'Puntos clave', anchor: 'key-takeaways' },
      { label: 'Manual vs automatizado: comparativa rápida', anchor: 'manual-vs-automated-comparison' },
      { label: 'Cuándo gana la optimización manual', anchor: 'when-manual-wins' },
      { label: 'Cuándo gana la optimización automatizada', anchor: 'when-automated-wins' },
      { label: 'Herramientas: DSPy, TextGrad, Promptfoo comparados', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: 'Flujo de trabajo híbrido: manual + automatizado juntos', anchor: 'hybrid-workflow' },
      { label: 'Análisis de costes: manual vs automatizado', anchor: 'cost-analysis' },
      { label: 'Errores comunes', anchor: 'common-mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
      { label: 'Fuentes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Optimización manual vs automatizada de prompts: cuándo iterar, cuándo automatizar',
      description: 'Optimización manual vs automatizada de prompts: elige según el número de prompts. Framework de decisión de escalabilidad.',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/es/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['optimización de prompts', 'optimización manual', 'optimización automatizada', 'DSPy', 'TextGrad', 'Promptfoo', 'escalabilidad LLM'],
      about: [
        { '@type': 'Thing', name: 'Optimización manual de prompts' },
        { '@type': 'Thing', name: 'Optimización automatizada de prompts' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Manual vs automatizado: comparativa de características',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Optimización manual', description: 'Reescritura humana de prompts basada en fallos de tests. Control total, sin datos de entrenamiento requeridos, escala a ~50 prompts.' },
        { '@type': 'ListItem', position: 2, name: 'DSPy (Automatizado)', description: 'Framework de Stanford que enseña al modelo a optimizarse a sí mismo. Escala a 100+ prompts. Requiere una métrica.' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad (Automatizado)', description: 'Optimización de prompts basada en gradientes: calcula qué palabras cambiar para mejorar el score. Avanzado, nivel investigación.' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo (Híbrido)', description: 'Herramienta CLI para testing, detección de regresiones y comparación manual A/B. No es automatización completa, pero estructura el trabajo manual.' },
        { '@type': 'ListItem', position: 5, name: 'Flujo de trabajo híbrido', description: 'Manual para 1–3 prompts, automatizado para variantes a escala. Ideal para equipos que publican múltiples versiones de prompts.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Puntos clave',
        items: [
          'Optimización manual = tú reescribes el prompt. Bueno para <50 prompts y control total; no escala.',
          'Optimización automatizada = un framework reescribe el prompt por ti. Bueno para >100 prompts; requiere datos etiquetados y una métrica.',
          'Híbrido = empieza manual, avanza a automatizado una vez que tienes datos de evaluación y >20 prompts en producción.',
          'Herramientas: DSPy (mejor para investigación y escala), TextGrad (avanzado/investigación), Promptfoo (testing + manual, no automatización completa).',
          'Punto de equilibrio de coste: ~50 prompts. Por debajo, manual es más rápido. Por encima, automatizado ahorra tiempo de ingeniería.',
          'Empieza siempre con manual en una sola tarea, genera datos de evaluación, luego pasa a automatizado para variantes y escalado.',
        ],
      },

      comparison: {
        title: 'Manual vs automatizado: comparativa rápida',
        content: '**Elige según tres factores: número de prompts, datos de evaluación y necesidades de escala.** La optimización manual es reescribir un prompt basado en fallos de tests — es control directo pero no escala más allá de ~50 prompts en producción. La optimización automatizada usa frameworks (DSPy, TextGrad) para reescribir prompts algorítmicamente — escala a 100+ pero requiere datos etiquetados y métricas. Un tercer paso de validación — ejecutar el mismo prompt en múltiples modelos usando una [plataforma de optimización de prompts](/features) — confirma qué versión se generaliza mejor antes de comprometerse con producción.',
        columns: ['Factor', 'Optimización manual', 'Optimización automatizada'],
        rows: [
          { 'Factor': 'Ideal para N prompts', 'Optimización manual': '<50 (foco en control)', 'Optimización automatizada': '100+ (foco en escala)' },
          { 'Factor': 'Datos de entrenamiento requeridos', 'Optimización manual': 'No', 'Optimización automatizada': 'Sí (50–500 ejemplos)' },
          { 'Factor': 'Tiempo de configuración', 'Optimización manual': '1–2 horas por prompt', 'Optimización automatizada': '2–5 días una vez' },
          { 'Factor': 'Coste por prompt', 'Optimización manual': '$1.000–5.000 (trabajo)', 'Optimización automatizada': '$100–500 (cómputo + etiquetas)' },
        ],
      },

      manualWins: {
        title: 'Cuándo gana la optimización manual',
        items: [
          'Menos de 50 prompts en producción — el overhead de configurar datos y métricas no vale la pena',
          'Tareas nuevas o puntuales — aún no conoces la dirección de optimización, por lo que la intuición humana es más rápida',
          'Requisitos de control estrictos — cumplimiento, voz de marca, escritura creativa — donde necesitas aprobar cada cambio',
          'Equipos pequeños (<5 personas) — la iteración manual es rápida y los miembros del equipo entienden las razones de los cambios',
          'Datos de evaluación limitados — tienes <50 ejemplos etiquetados, por lo que el entrenamiento automatizado sobreajustaría',
        ],
      },

      automatedWins: {
        title: 'Cuándo gana la optimización automatizada',
        items: [
          'Más de 100 prompts en producción — el coste de la iteración manual de ingeniería se vuelve prohibitivo',
          'Testing de variantes a escala — necesitas 10+ versiones de prompts para A/B testing; la automatización las genera más rápido que la reescritura humana',
          'Optimización continua — los prompts se degradan con el tiempo a medida que cambian las entradas de usuario; los sistemas automatizados pueden reentrenar mensualmente',
          'Flujos de trabajo basados en métricas — tu tarea tiene una métrica de éxito clara (precisión, BLEU, calificación de juez LLM), no calidad subjetiva',
          'Equipos grandes (10+) — el overhead de coordinación de cambios manuales se vuelve alto; la automatización hace la optimización reproducible',
        ],
      },

      tools: {
        title: 'Herramientas: DSPy, TextGrad, Promptfoo comparados',
        content: '**Tres herramientas principales soportan la optimización automatizada o semi-automatizada:**',
        columns: ['Herramienta', 'Enfoque', 'Madurez', 'Escala', 'Ideal para'],
        rows: [
          { 'Herramienta': 'DSPy (Stanford)', 'Enfoque': 'Optimización de prompts mediante aprendizaje', 'Madurez': 'Listo para producción (open-source)', 'Escala': '50–500 prompts', 'Ideal para': 'Equipos que escalan variantes de prompts' },
          { 'Herramienta': 'TextGrad', 'Enfoque': 'Reescritura de prompts basada en gradientes', 'Madurez': 'Investigación (nuevo, aún no en producción)', 'Escala': '10–100 prompts', 'Ideal para': 'Investigación, optimización de vanguardia' },
          { 'Herramienta': 'Promptfoo', 'Enfoque': 'Testing + detección de regresiones (asistido manualmente)', 'Madurez': 'Listo para producción (open-source)', 'Escala': 'Cualquier tamaño', 'Ideal para': 'Testing CI/CD, no automatización completa' },
        ],
      },

      hybrid: {
        title: 'Flujo de trabajo híbrido: manual + automatizado juntos',
        content: 'El mundo real es híbrido. Empieza con optimización manual para construir intuición y datos de evaluación. Avanza a automatizado una vez que tienes escala.',
        numberedItems: [
          'Semanas 1–4: optimización manual de 1–3 prompts core. Genera 50+ ejemplos etiquetados por prompt.',
          'Semanas 4–8: construye métrica de evaluación (precisión, BLEU o juez LLM). Ejecuta tests A/B de Promptfoo para validar el trabajo manual.',
          'Semana 8+: configura DSPy. Reentrena en el dataset de evaluación creciente. Añade nuevas variantes de prompts vía automatización.',
          'Producción: despliega variantes optimizadas por DSPy. Usa Promptfoo para testing de regresión en cada commit.',
        ],
      },

      costAnalysis: {
        title: 'Análisis de costes: manual vs automatizado',
        content: '**¿A qué número de prompts se vuelve automatizado más barato que manual?** El punto de equilibrio es aproximadamente 50–80 prompts.',
        items: [
          'Coste manual por prompt: 4–8 horas de tiempo de ingeniería × $150/hora = $600–1.200 de trabajo directo. Añade investigación, testing, documentación = $1.500–5.000 total por prompt.',
          'Coste automatizado una sola vez: configuración de DSPy = $2.000–5.000 (2–5 días de ingeniería + cómputo). Luego coste por prompt = $100–300 (cómputo + etiquetado).',
          'Punto de equilibrio: con ~60 prompts, coste total automatizado = $2.000 + (60 × $200) = $14.000. Coste total manual = 60 × $3.000 = $180.000. Automatizado gana por 13×.',
          'Por debajo de 30 prompts: manual es más rápido y barato. El overhead de la automatización no está justificado.',
          'Por encima de 100 prompts: automatizado es 5–10× más barato que manual.',
        ],
      },

      mistakes: {
        title: 'Errores comunes',
        items: [
          'Ejecutar DSPy sin datos etiquetados — DSPy aprende de ejemplos. Sin 50+ pares etiquetados (entrada, salida), entrena con ruido. Empieza con iteraciones manuales, documenta los pares, luego úsalos como datos de entrenamiento.',
          'Elegir una métrica vaga — DSPy y TextGrad requieren métricas cuantificadas (precisión, F1, BLEU). Las métricas vagas como "calidad" no pueden guiar la optimización. Define el éxito: precisión en el conjunto de test, coincidencia de subcadena o juez LLM >8/10.',
          'Esperar que la automatización encuentre técnicas novedosas — DSPy optimiza texto dentro de estructuras conocidas pero no descubrirá chain-of-thought o ejemplos few-shot por sí solo. Debes definir la estructura (firma de tarea) primero.',
          'Configurar automatización para <30 prompts — el overhead de automatización (configuración, etiquetado, métricas) es 2–5 semanas. Para <30 prompts, la iteración manual es 2–4× más rápida. Pasa a automatización a los 50+ prompts.',
          'Automatizar sin monitorización continua — los prompts se degradan a medida que cambian las entradas de usuario. Reentrena mensualmente: nuevas entradas → conjunto de evaluación actualizado → vuelve a ejecutar DSPy → testea → despliega. Trata la optimización como continua, no puntual.',
        ],
      },

      faq: {
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puedo mezclar optimización manual y automatizada?', a: 'Sí, y esta es la mejor práctica. Manual para tu tarea core (1–3 prompts), automatizado para variantes y escala. Usa Promptfoo para testear todas las variantes; usa DSPy para generar nuevas.' },
          { q: '¿DSPy funciona con todos los modelos?', a: 'DSPy funciona con cualquier modelo accesible vía API: GPT-5.5, Claude, Gemini, Cohere, Ollama. Aún no funciona con modelos de visión. Los modelos locales están soportados pero son más lentos.' },
          { q: '¿Cuántos ejemplos etiquetados necesito para DSPy?', a: 'Mínimo 30–50 para tareas simples (clasificación, extracción). Las tareas complejas (resumen, razonamiento) se benefician de 100–500. Más ejemplos = optimización más robusta.' },
          { q: '¿Cuál es el coste de cómputo de ejecutar DSPy?', a: 'Una ejecución de optimización de DSPy en 100 ejemplos cuesta ~$5–20 (llamadas a la API). Ejecutar 10 prompts candidatos × 100 ejemplos = 1.000 llamadas = $50–200 por ciclo de optimización. Reentrenamiento mensual = $50–200/mes.' },
          { q: '¿Puedo desplegar un prompt optimizado por DSPy en producción?', a: 'Sí. DSPy devuelve un prompt en texto plano. Cópialo a tu sistema de producción (PromptQuorum, LangChain, Vellum, etc.) y sírvelo normalmente. No se necesita runtime especial de DSPy en producción.' },
          { q: '¿La optimización automatizada garantiza prompts mejores?', a: 'No. Si tu métrica es incorrecta, DSPy optimiza para lo incorrecto. Si tus datos de evaluación son sesgados, DSPy aprende el sesgo. Entra basura, sale basura.' },
          { q: '¿Debo usar optimización automatizada para tareas creativas?', a: 'Todavía no. La automatización funciona mejor en tareas basadas en métricas (clasificación, extracción, resumen). Las tareas creativas (redacción publicitaria, narrativa) carecen de métricas claras, por lo que el control manual es mejor.' },
          { q: '¿Puede DSPy optimizar prompts para múltiples modelos a la vez?', a: 'DSPy optimiza para un modelo a la vez. Para optimizar tanto para GPT-5.5 como para Claude, ejecuta DSPy dos veces (una por modelo) y compara resultados. Enfoque híbrido: optimiza para tu modelo preferido, luego testea manualmente en otros.' },
        ],
      },

      relatedReading: {
        title: 'Lecturas relacionadas',
        items: [
          '[Fundamentos de la optimización de prompts: 6 palancas core](/es/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[Mejores herramientas de optimización de prompts para equipos 2026](/es/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[Métricas de evaluación de prompts: cómo medir la calidad de prompts](/es/prompt-engineering/prompt-evaluation-metrics)',
          '[Mejores herramientas de testing y evaluación de prompts 2026](/es/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[Configuración de prompt engineering para equipos pequeños](/es/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[Zero-Shot vs Few-Shot Prompting: cuándo usar cada uno](/es/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: 'Fuentes',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },

  pt: {
    theme: 'Tools & Platforms',
    title: 'Otimização manual vs automatizada de prompts: quando iterar, quando automatizar',
    seoTitle: 'Otimização manual vs automatizada: escolha sua abordagem',
    metaDescription: 'Otimização manual vs automatizada de prompts: escolha conforme o número de prompts e recursos. Quando iterar manualmente e quando automatizar. Com framework.',
    intro: '**A otimização de prompts pode ser manual (você reescreve o prompt) ou automatizada (um framework reescreve por você).** A otimização manual oferece controle, mas escala somente até ~50 prompts em produção. A otimização automatizada (DSPy, TextGrad, Promptfoo) escala para 100+ prompts, mas requer dados de treinamento rotulados e definições de métricas. Este guia mostra quando usar cada abordagem e como elas funcionam juntas.',
    publishDate: '2026-04-26',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores e engenheiros de prompts que escolhem entre iteração manual e automação',
    primaryTerm: 'otimização de prompts',
    aboutTopics: ['otimização de prompts', 'DSPy', 'automação', 'escalabilidade'],
    leadAnswerBlock: '**Manual vs automatizado é uma decisão de escala.** Manual: mais rápido para tarefas individuais, controle total, mas não escala além de 50 prompts. Automatizado: mais lento para configurar, requer métricas de avaliação, mas escala para 100+ prompts. A escolha depende de: (1) Quantos prompts você tem em produção? (2) Você tem exemplos rotulados? (3) A otimização é pontual ou contínua?',
    quickFacts: [
      'Otimização manual: 2–4 iterações por prompt, controle total, sem dados de treinamento necessários, adequada para <50 prompts em produção',
      'Otimização automatizada: 1–2 ciclos de aprendizado, requer exemplos rotulados + métricas, escala para 100+ prompts, configurada em dias não semanas',
      'Abordagem híbrida: comece manualmente, avance para automatizado quando tiver 20+ prompts em produção e dados de avaliação',
      'O DSPy ensina o modelo a se otimizar — cada execução de otimização gera melhores candidatos sem reescritas manuais',
      'Limiar de decisão: <50 prompts = manual. 50–100 prompts = híbrido. 100+ prompts = automatizado.',
      'Diferença de custo: manual (tempo de engenharia) vs automatizado (cómputo + rotulação de dados). Automatizado vence para equipes que publicam 20+ variantes de prompts',
    ],
    toc: [
      { label: 'Principais conclusões', anchor: 'key-takeaways' },
      { label: 'Manual vs automatizado: comparativo rápido', anchor: 'manual-vs-automated-comparison' },
      { label: 'Quando a otimização manual vence', anchor: 'when-manual-wins' },
      { label: 'Quando a otimização automatizada vence', anchor: 'when-automated-wins' },
      { label: 'Ferramentas: DSPy, TextGrad, Promptfoo comparados', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: 'Fluxo de trabalho híbrido: manual + automatizado juntos', anchor: 'hybrid-workflow' },
      { label: 'Análise de custos: manual vs automatizado', anchor: 'cost-analysis' },
      { label: 'Erros comuns', anchor: 'common-mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
      { label: 'Fontes', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Otimização manual vs automatizada de prompts: quando iterar, quando automatizar',
      description: 'Otimização manual vs automatizada de prompts: escolha conforme o número de prompts. Framework de decisão de escalabilidade.',
      datePublished: '2026-04-26',
      url: 'https://www.promptquorum.com/pt/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['otimização de prompts', 'otimização manual', 'otimização automatizada', 'DSPy', 'TextGrad', 'Promptfoo', 'escalabilidade LLM'],
      about: [
        { '@type': 'Thing', name: 'Otimização manual de prompts' },
        { '@type': 'Thing', name: 'Otimização automatizada de prompts' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Manual vs automatizado: comparativo de recursos',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Otimização manual', description: 'Reescrita humana de prompts com base em falhas de testes. Controle total, sem dados de treinamento necessários, escala até ~50 prompts.' },
        { '@type': 'ListItem', position: 2, name: 'DSPy (Automatizado)', description: 'Framework da Stanford que ensina o modelo a se otimizar. Escala para 100+ prompts. Requer uma métrica.' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad (Automatizado)', description: 'Otimização de prompts baseada em gradientes: calcula quais palavras alterar para melhorar o score. Avançado, nível pesquisa.' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo (Híbrido)', description: 'Ferramenta CLI para testes, detecção de regressões e comparação manual A/B. Não é automação completa, mas estrutura o trabalho manual.' },
        { '@type': 'ListItem', position: 5, name: 'Fluxo de trabalho híbrido', description: 'Manual para 1–3 prompts, automatizado para variantes em escala. Ideal para equipes que publicam múltiplas versões de prompts.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Principais conclusões',
        items: [
          'Otimização manual = você reescreve o prompt. Boa para <50 prompts e controle total; não escala.',
          'Otimização automatizada = um framework reescreve o prompt por você. Boa para >100 prompts; requer dados rotulados e uma métrica.',
          'Híbrido = comece manualmente, avance para automatizado quando tiver dados de avaliação e >20 prompts em produção.',
          'Ferramentas: DSPy (melhor para pesquisa e escala), TextGrad (avançado/pesquisa), Promptfoo (testes + manual, não automação completa).',
          'Ponto de equilíbrio de custo: ~50 prompts. Abaixo disso, manual é mais rápido. Acima, automatizado economiza tempo de engenharia.',
          'Sempre comece com manual em uma única tarefa, gere dados de avaliação, depois passe para automatizado para variantes e escalonamento.',
        ],
      },

      comparison: {
        title: 'Manual vs automatizado: comparativo rápido',
        content: '**Escolha com base em três fatores: número de prompts, dados de avaliação e necessidades de escala.** A otimização manual é reescrever um prompt com base em falhas de testes — é controle direto, mas não escala além de ~50 prompts em produção. A otimização automatizada usa frameworks (DSPy, TextGrad) para reescrever prompts algoritmicamente — escala para 100+, mas requer dados rotulados e métricas. Um terceiro passo de validação — executar o mesmo prompt em múltiplos modelos usando uma [plataforma de otimização de prompts](/features) — confirma qual versão se generaliza melhor antes de se comprometer com produção.',
        columns: ['Fator', 'Otimização manual', 'Otimização automatizada'],
        rows: [
          { 'Fator': 'Ideal para N prompts', 'Otimização manual': '<50 (foco em controle)', 'Otimização automatizada': '100+ (foco em escala)' },
          { 'Fator': 'Dados de treinamento necessários', 'Otimização manual': 'Não', 'Otimização automatizada': 'Sim (50–500 exemplos)' },
          { 'Fator': 'Tempo de configuração', 'Otimização manual': '1–2 horas por prompt', 'Otimização automatizada': '2–5 dias uma vez' },
          { 'Fator': 'Custo por prompt', 'Otimização manual': '$1.000–5.000 (trabalho)', 'Otimização automatizada': '$100–500 (cómputo + rótulos)' },
        ],
      },

      manualWins: {
        title: 'Quando a otimização manual vence',
        items: [
          'Menos de 50 prompts em produção — o overhead de configurar dados e métricas não vale a pena',
          'Tarefas novas ou pontuais — você ainda não conhece a direção de otimização, então a intuição humana é mais rápida',
          'Requisitos de controle rígidos — conformidade, voz de marca, escrita criativa — onde você precisa aprovar cada mudança',
          'Equipes pequenas (<5 pessoas) — a iteração manual é rápida e os membros da equipe entendem as razões das mudanças',
          'Dados de avaliação limitados — você tem <50 exemplos rotulados, então o treinamento automatizado superajustaria',
        ],
      },

      automatedWins: {
        title: 'Quando a otimização automatizada vence',
        items: [
          'Mais de 100 prompts em produção — o custo da iteração manual de engenharia torna-se proibitivo',
          'Testes de variantes em escala — você precisa de 10+ versões de prompts para testes A/B; a automação as gera mais rápido que a reescrita humana',
          'Otimização contínua — os prompts se degradam com o tempo conforme as entradas do usuário mudam; sistemas automatizados podem retreinar mensalmente',
          'Fluxos de trabalho baseados em métricas — sua tarefa tem uma métrica de sucesso clara (precisão, BLEU, avaliação de juiz LLM), não qualidade subjetiva',
          'Equipes grandes (10+) — o overhead de coordenação de mudanças manuais se torna alto; a automação torna a otimização reproduzível',
        ],
      },

      tools: {
        title: 'Ferramentas: DSPy, TextGrad, Promptfoo comparados',
        content: '**Três ferramentas principais suportam a otimização automatizada ou semi-automatizada:**',
        columns: ['Ferramenta', 'Abordagem', 'Maturidade', 'Escala', 'Ideal para'],
        rows: [
          { 'Ferramenta': 'DSPy (Stanford)', 'Abordagem': 'Otimização de prompts por aprendizado', 'Maturidade': 'Pronto para produção (código aberto)', 'Escala': '50–500 prompts', 'Ideal para': 'Equipes que escalam variantes de prompts' },
          { 'Ferramenta': 'TextGrad', 'Abordagem': 'Reescrita de prompts baseada em gradientes', 'Maturidade': 'Pesquisa (novo, ainda não em produção)', 'Escala': '10–100 prompts', 'Ideal para': 'Pesquisa, otimização de ponta' },
          { 'Ferramenta': 'Promptfoo', 'Abordagem': 'Testes + detecção de regressões (assistido manualmente)', 'Maturidade': 'Pronto para produção (código aberto)', 'Escala': 'Qualquer tamanho', 'Ideal para': 'Testes CI/CD, não automação completa' },
        ],
      },

      hybrid: {
        title: 'Fluxo de trabalho híbrido: manual + automatizado juntos',
        content: 'O mundo real é híbrido. Comece com otimização manual para construir intuição e dados de avaliação. Avance para automatizado quando tiver escala.',
        numberedItems: [
          'Semanas 1–4: otimização manual de 1–3 prompts core. Gere 50+ exemplos rotulados por prompt.',
          'Semanas 4–8: construa métrica de avaliação (precisão, BLEU ou juiz LLM). Execute testes A/B do Promptfoo para validar o trabalho manual.',
          'Semana 8+: configure o DSPy. Retreine no conjunto de dados de avaliação crescente. Adicione novas variantes de prompts via automação.',
          'Produção: implante variantes otimizadas pelo DSPy. Use o Promptfoo para testes de regressão a cada commit.',
        ],
      },

      costAnalysis: {
        title: 'Análise de custos: manual vs automatizado',
        content: '**Em quantos prompts o automatizado se torna mais barato que o manual?** O ponto de equilíbrio é aproximadamente 50–80 prompts.',
        items: [
          'Custo manual por prompt: 4–8 horas de tempo de engenharia × $150/hora = $600–1.200 de trabalho direto. Adicione pesquisa, testes, documentação = $1.500–5.000 total por prompt.',
          'Custo automatizado único: configuração do DSPy = $2.000–5.000 (2–5 dias de engenharia + cómputo). Depois custo por prompt = $100–300 (cómputo + rotulação).',
          'Ponto de equilíbrio: com ~60 prompts, custo total automatizado = $2.000 + (60 × $200) = $14.000. Custo total manual = 60 × $3.000 = $180.000. Automatizado vence por 13×.',
          'Abaixo de 30 prompts: manual é mais rápido e barato. O overhead da automação não se justifica.',
          'Acima de 100 prompts: automatizado é 5–10× mais barato que manual.',
        ],
      },

      mistakes: {
        title: 'Erros comuns',
        items: [
          'Executar o DSPy sem dados rotulados — o DSPy aprende com exemplos. Sem 50+ pares rotulados (entrada, saída), treina com ruído. Comece com iterações manuais, documente os pares, depois use-os como dados de treinamento.',
          'Escolher uma métrica vaga — o DSPy e o TextGrad requerem métricas quantificadas (precisão, F1, BLEU). Métricas vagas como "qualidade" não podem guiar a otimização. Defina o sucesso: precisão no conjunto de teste, correspondência de substring ou juiz LLM >8/10.',
          'Esperar que a automação descubra técnicas novas — o DSPy otimiza texto dentro de estruturas conhecidas, mas não descobrirá chain-of-thought ou exemplos few-shot por conta própria. Você deve definir a estrutura (assinatura de tarefa) primeiro.',
          'Configurar automação para <30 prompts — o overhead de automação (configuração, rotulação, métricas) é 2–5 semanas. Para <30 prompts, a iteração manual é 2–4× mais rápida. Passe para automação nos 50+ prompts.',
          'Automatizar sem monitoramento contínuo — os prompts se degradam conforme as entradas do usuário mudam. Retreine mensalmente: novas entradas → conjunto de avaliação atualizado → execute novamente o DSPy → teste → implante. Trate a otimização como contínua, não pontual.',
        ],
      },

      faq: {
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Posso combinar otimização manual e automatizada?', a: 'Sim, e esta é a melhor prática. Manual para sua tarefa core (1–3 prompts), automatizado para variantes e escala. Use o Promptfoo para testar todas as variantes; use o DSPy para gerar novas.' },
          { q: 'O DSPy funciona com todos os modelos?', a: 'O DSPy funciona com qualquer modelo acessível via API: GPT-5.5, Claude, Gemini, Cohere, Ollama. Ainda não funciona com modelos de visão. Modelos locais são suportados, mas mais lentos.' },
          { q: 'Quantos exemplos rotulados preciso para o DSPy?', a: 'Mínimo 30–50 para tarefas simples (classificação, extração). Tarefas complexas (resumo, raciocínio) se beneficiam de 100–500. Mais exemplos = otimização mais robusta.' },
          { q: 'Qual é o custo de cómputo de executar o DSPy?', a: 'Uma execução de otimização do DSPy em 100 exemplos custa ~$5–20 (chamadas de API). Executar 10 prompts candidatos × 100 exemplos = 1.000 chamadas = $50–200 por ciclo de otimização. Retreinamento mensal = $50–200/mês.' },
          { q: 'Posso implantar em produção um prompt otimizado pelo DSPy?', a: 'Sim. O DSPy retorna um prompt em texto simples. Copie-o para seu sistema de produção (PromptQuorum, LangChain, Vellum, etc.) e sirva-o normalmente. Nenhum runtime especial do DSPy é necessário em produção.' },
          { q: 'A otimização automatizada garante prompts melhores?', a: 'Não. Se sua métrica estiver errada, o DSPy otimiza para o errado. Se seus dados de avaliação tiverem viés, o DSPy aprende o viés. Lixo entra, lixo sai.' },
          { q: 'Devo usar otimização automatizada para tarefas criativas?', a: 'Ainda não. A automação funciona melhor em tarefas baseadas em métricas (classificação, extração, resumo). Tarefas criativas (redação publicitária, narrativa) carecem de métricas claras, então o controle manual é melhor.' },
          { q: 'O DSPy pode otimizar prompts para múltiplos modelos ao mesmo tempo?', a: 'O DSPy otimiza para um modelo por vez. Para otimizar tanto para GPT-5.5 quanto para Claude, execute o DSPy duas vezes (uma por modelo) e compare os resultados. Abordagem híbrida: otimize para seu modelo preferido, depois teste manualmente em outros.' },
        ],
      },

      relatedReading: {
        title: 'Leituras relacionadas',
        items: [
          '[Fundamentos da otimização de prompts: 6 alavancas core](/pt/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[Melhores ferramentas de otimização de prompts para equipes 2026](/pt/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[Métricas de avaliação de prompts: como medir a qualidade de prompts](/pt/prompt-engineering/prompt-evaluation-metrics)',
          '[Melhores ferramentas de testes e avaliação de prompts 2026](/pt/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[Configuração de prompt engineering para equipes pequenas](/pt/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[Zero-Shot vs Few-Shot Prompting: quando usar cada um](/pt/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: 'Fontes',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'Optimisation Manuelle vs Automatisée des Prompts : Quand Choisir Chaque Approche',
    seoTitle: 'Optimisation Manuelle vs Automatisée : Guide de Décision',
    metaDescription: 'Optimisation manuelle vs automatisée : quand itérer manuellement, quand utiliser DSPy ou Promptfoo. Cadre décisionnel avec comparaison des coûts et scalabilité.',
    intro: '**L\'optimisation de prompts peut être manuelle (vous réécrivez le prompt) ou automatisée (un framework le réécrit pour vous).** L\'optimisation manuelle vous donne du contrôle mais ne s\'étend qu\'à ~50 prompts de production. L\'optimisation automatisée (DSPy, TextGrad, Promptfoo) s\'étend à 100+ prompts mais nécessite des données d\'entraînement étiquetées et des définitions de métriques. Ce guide vous montre quand utiliser chacun et comment ils fonctionnent ensemble.',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs et ingénieurs en prompts choisissant entre itération manuelle et automatisation',
    primaryTerm: 'Optimisation de prompts',
    aboutTopics: ['Optimisation de prompts', 'DSPy', 'Automatisation', 'Scalabilité'],
    leadAnswerBlock: '**L\'optimisation manuelle vs automatisée est une décision de scalabilité.** Manuelle : plus rapide pour les tâches uniques, contrôle complet, mais ne s\'étend pas au-delà de 50 prompts. Automatisée : plus lente à mettre en place, nécessite des métriques d\'évaluation, mais s\'étend à 100+ prompts. Le choix dépend de : (1) Combien de prompts de production avez-vous ? (2) Avez-vous des exemples étiquetés ? (3) L\'optimisation est-elle ponctuelle ou continue ?',
    quickFacts: [
      'Optimisation manuelle : 2–4 itérations par prompt, contrôle complet, aucune donnée d\'entraînement nécessaire, adaptée pour <50 prompts de production',
      'Optimisation automatisée : 1–2 cycles d\'apprentissage, nécessite des exemples étiquetés + métriques, s\'étend à 100+ prompts, mise en place en jours pas semaines',
      'Approche hybride : commencez manuellement, basculez vers automatisé une fois que vous avez 20+ prompts de production et données d\'évaluation',
      'DSPy enseigne au modèle à s\'optimiser lui-même — chaque exécution d\'optimisation génère de meilleurs candidats sans réécriture manuelle',
      'Seuil de décision : <50 prompts = manuel. 50–100 prompts = hybride. 100+ prompts = automatisé.',
      'Différence de coût : manuel (temps d\'ingénieur) vs automatisé (calcul + étiquetage de données). Automatisé gagne pour les équipes qui livrent 20+ variantes de prompts',
    ],
    toc: [
      { label: 'Points clés', anchor: 'key-takeaways' },
      { label: 'Manuel vs Automatisé : Comparaison rapide', anchor: 'manual-vs-automated-comparison' },
      { label: 'Quand l\'optimisation manuelle gagne', anchor: 'when-manual-wins' },
      { label: 'Quand l\'optimisation automatisée gagne', anchor: 'when-automated-wins' },
      { label: 'Outils : DSPy, TextGrad, Promptfoo comparés', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: 'Flux de travail hybride : Manuel + Automatisé ensemble', anchor: 'hybrid-workflow' },
      { label: 'Analyse des coûts : Manuel vs Automatisé', anchor: 'cost-analysis' },
      { label: 'Erreurs courantes', anchor: 'common-mistakes' },
      { label: 'Questions fréquemment posées', anchor: 'faq' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Optimisation Manuelle vs Automatisée des Prompts : Quand Choisir Chaque Approche',
      description: 'Optimisation manuelle vs automatisée des prompts : quand itérer manuellement, quand utiliser DSPy ou TextGrad. Cadre de décision de scalabilité.',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/fr/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['Optimisation de prompts', 'optimisation manuelle', 'optimisation automatisée', 'DSPy', 'TextGrad', 'Promptfoo', 'scalabilité LLM'],
      about: [
        { '@type': 'Thing', name: 'Optimisation manuelle de prompts' },
        { '@type': 'Thing', name: 'Optimisation automatisée de prompts' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Manuel vs Automatisé : Comparaison des fonctionnalités',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Optimisation manuelle', description: 'Réécriture humaine des prompts basée sur les échecs de tests. Contrôle complet, aucune donnée d\'entraînement requise, s\'étend à ~50 prompts.' },
        { '@type': 'ListItem', position: 2, name: 'DSPy (Automatisée)', description: 'Framework de Stanford qui enseigne au modèle à s\'optimiser lui-même. S\'étend à 100+ prompts. Nécessite une métrique.' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad (Automatisée)', description: 'Optimisation de prompts basée sur les gradients : calcule quels mots changer pour améliorer le score. Avancée, niveau recherche.' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo (Hybride)', description: 'Outil CLI pour tester, détecter les régressions et comparer manuellement A/B. Pas d\'automatisation complète, mais structure le travail manuel.' },
        { '@type': 'ListItem', position: 5, name: 'Flux de travail hybride', description: 'Manuel pour 1–3 prompts, automatisé pour les variantes à l\'échelle. Meilleur pour les équipes qui livrent plusieurs versions de prompts.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Points clés',
        items: [
          'Optimisation manuelle = vous réécrivez le prompt. Bon pour <50 prompts et contrôle complet ; ne s\'étend pas.',
          'Optimisation automatisée = un framework réécrit le prompt pour vous. Bon pour >100 prompts ; nécessite données étiquetées et métrique.',
          'Hybride = commencez manuellement, basculez vers automatisé une fois que vous avez données d\'évaluation et >20 prompts de production.',
          'Outils : DSPy (meilleur pour recherche et scalabilité), TextGrad (avancé/recherche), Promptfoo (test + manuel, pas automatisation complète).',
          'Seuil de coût : ~50 prompts. Moins que ça, le manuel est plus rapide. Plus que ça, l\'automatisé économise le temps d\'ingénieur.',
          'Commencez toujours manuellement sur une seule tâche, générez données d\'évaluation, puis basculez vers automatisé pour variantes et scalabilité.',
        ],
      },

      comparison: {
        title: 'Manuel vs Automatisé : Comparaison rapide',
        content: '**Choisissez selon trois facteurs : nombre de prompts, données d\'évaluation et besoins de scalabilité.** L\'optimisation manuelle est la réécriture d\'un prompt basée sur les échecs de tests — c\'est le contrôle direct mais ne s\'étend pas au-delà de ~50 prompts de production. L\'optimisation automatisée utilise des frameworks (DSPy, TextGrad) pour réécrire les prompts algorithmiquement — elle s\'étend à 100+ mais nécessite données étiquetées et métriques.',
        columns: ['Facteur', 'Optimisation manuelle', 'Optimisation automatisée'],
        rows: [
          { 'Facteur': 'Meilleur pour N prompts', 'Optimisation manuelle': '<50 (focus contrôle)', 'Optimisation automatisée': '100+ (focus scalabilité)' },
          { 'Facteur': 'Données d\'entraînement requises', 'Optimisation manuelle': 'Non', 'Optimisation automatisée': 'Oui (50–500 exemples)' },
          { 'Facteur': 'Temps de mise en place', 'Optimisation manuelle': '1–2 heures par prompt', 'Optimisation automatisée': '2–5 jours une fois' },
          { 'Facteur': 'Coût par prompt', 'Optimisation manuelle': '1 000–5 000 EUR (travail)', 'Optimisation automatisée': '100–500 EUR (calcul + labels)' },
        ],
      },

      manualWins: {
        title: 'Quand l\'optimisation manuelle gagne',
        items: [
          'Moins de 50 prompts de production — l\'overhead de mise en place de données et métriques ne vaut pas la peine',
          'Tâches nouvelles ou ponctuelles — vous ne connaissez pas encore la direction d\'optimisation, donc l\'intuition humaine est plus rapide',
          'Exigences de contrôle élevé — conformité, voix de marque, écriture créative — où vous devez approuver chaque changement',
          'Petites équipes (<5 personnes) — l\'itération manuelle est rapide et les membres comprennent les raisons des changements',
          'Données d\'évaluation limitées — vous avez <50 exemples étiquetés, donc l\'entraînement automatisé surapprendrait',
        ],
      },

      automatedWins: {
        title: 'Quand l\'optimisation automatisée gagne',
        items: [
          'Plus de 100 prompts de production — le coût de l\'itération manuelle devient prohibitif',
          'Test de variantes à l\'échelle — vous avez besoin 10+ versions de prompt pour A/B-test ; l\'automatisation génère plus vite que réécriture humaine',
          'Optimisation continue — les prompts se dégradent au fil du temps à mesure que les entrées utilisateur changent ; les systèmes automatisés peuvent réentraîner mensuellement',
          'Flux de travail pilotés par métrique — votre tâche a une métrique de succès claire (précision, BLEU, évaluation par LLM-arbitre), pas qualité subjective',
          'Grandes équipes (10+) — l\'overhead de coordination des changements manuels devient élevé ; l\'automatisation rend l\'optimisation reproductible',
        ],
      },

      tools: {
        title: 'Outils : DSPy, TextGrad, Promptfoo comparés',
        content: '**Trois outils principaux supportent l\'optimisation automatisée ou semi-automatisée :**',
        columns: ['Outil', 'Approche', 'Maturité', 'Scalabilité', 'Meilleur pour'],
        rows: [
          { 'Outil': 'DSPy (Stanford)', 'Approche': 'Optimisation de prompts via apprentissage', 'Maturité': 'Prêt pour production (open-source)', 'Scalabilité': '50–500 prompts', 'Meilleur pour': 'Équipes scalant variantes de prompts' },
          { 'Outil': 'TextGrad', 'Approche': 'Réécriture basée sur gradients', 'Maturité': 'Recherche (nouveau, pas productif encore)', 'Scalabilité': '10–100 prompts', 'Meilleur pour': 'Recherche, optimisation avancée' },
          { 'Outil': 'Promptfoo', 'Approche': 'Test + détection régression (semi-automatisé)', 'Maturité': 'Prêt pour production (open-source)', 'Scalabilité': 'Toute taille', 'Meilleur pour': 'Test CI/CD, pas automatisation complète' },
        ],
      },

      hybrid: {
        title: 'Flux de travail hybride : Manuel + Automatisé ensemble',
        content: 'Le monde réel est hybride. Commencez par l\'optimisation manuelle pour construire l\'intuition et les données d\'évaluation. Basculez vers l\'automatisation une fois que vous avez une scalabilité.',
        numberedItems: [
          'Semaines 1–4 : Optimisation manuelle de 1–3 prompts cœur. Générez 50+ exemples étiquetés par prompt.',
          'Semaine 4–8 : Construisez métrique d\'évaluation (précision, BLEU ou arbitre LLM). Exécutez tests A/B Promptfoo pour valider travail manuel.',
          'Semaine 8+ : Mettez en place DSPy. Réentraînez sur ensemble de données d\'évaluation croissant. Ajoutez nouvelles variantes de prompt via automatisation.',
          'Production : Déployez variantes optimisées DSPy. Utilisez Promptfoo pour test de régression à chaque commit.',
        ],
      },

      costAnalysis: {
        title: 'Analyse des coûts : Manuel vs Automatisé',
        content: '**À quel nombre de prompts l\'automatisation devient-elle moins chère que le manuel ?** Le seuil de rentabilité est environ 50–80 prompts.',
        items: [
          'Coût manuel par prompt : 4–8 heures temps d\'ingénieur × 150 EUR/heure = 600–1 200 EUR travail direct. Ajoutez recherche, test, documentation = 1 500–5 000 EUR total par prompt.',
          'Coût automatisé une fois : configuration DSPy = 2 000–5 000 EUR (2–5 jours ingénieur + calcul). Puis coût par-prompt = 100–300 EUR (calcul + étiquetage).',
          'Seuil rentabilité : À ~60 prompts, coût total automatisé = 2 000 + (60 × 200 EUR) = 14 000 EUR. Coût total manuel = 60 × 3 000 EUR = 180 000 EUR. Automatisé gagne par 13×.',
          'Sous 30 prompts : Manuel est plus rapide et moins cher. Overhead automatisation ne se justifie pas.',
          'Au-dessus de 100 prompts : Automatisé est 5–10× moins cher que manuel.',
        ],
      },

      mistakes: {
        title: 'Erreurs courantes',
        items: [
          'Exécuter DSPy sans données étiquetées — DSPy apprend des exemples. Sans 50+ paires (entrée, sortie) étiquetées, il entraîne sur bruit et produit pires prompts que itération manuelle. Commencez par 10–20 optimisations manuelles, documentez paires, utilisez-les comme ensemble d\'entraînement.',
          'Choisir une métrique vague — DSPy et TextGrad exigent métriques quantifiées (précision, F1, BLEU). Métriques vagues comme « qualité » ne peuvent pas guider l\'optimisation. Définissez : précision sur ensemble test, correspondance substring avec or, ou score arbitre LLM >8/10.',
          'Attendre l\'automatisation découvre techniques nouvelles — DSPy optimise texte dans structures connues mais ne découvrira pas chain-of-thought ou few-shot exemples seul — vous devez définir structure (signature tâche) d\'abord.',
          'Mettre en place automatisation pour <30 prompts — overhead automatisation (mise en place, étiquetage, définition métrique) est 2–5 semaines travail. Pour <30 prompts, itération manuelle est 2–4× plus rapide. Basculez vers automatisation à 50+ prompts.',
          'Automatiser sans surveillance continue — les prompts se dégradent au fil du temps à mesure que entrées utilisateur changent. Prompt optimisé il y a 3 mois peut échouer sur entrées nouvelles. Entraînez mensuellement : entrées nouvelles → ensemble évaluation mis à jour → réexécutez DSPy → testez sur données nouvelles → déployez prompt mis à jour.',
        ],
      },

      faq: {
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Puis-je mélanger optimisation manuelle et automatisée ?', a: 'Oui, et c\'est la meilleure pratique. Manuel pour votre tâche cœur (1–3 prompts), automatisé pour variantes et scalabilité. Utilisez Promptfoo pour tester toutes variantes ; utilisez DSPy pour générer de nouvelles.' },
          { q: 'DSPy fonctionne-t-il avec tous les modèles ?', a: 'DSPy fonctionne avec n\'importe quel modèle accessible par API : GPT-5.5, Claude, Gemini, Cohere, Ollama. Il ne fonctionne pas encore avec modèles vision. Modèles locaux (Ollama, LM Studio) sont supportés mais plus lents.' },
          { q: 'Combien d\'exemples étiquetés faut-il pour DSPy ?', a: 'Minimum 30–50 pour tâches simples (classification, extraction). Tâches complexes (résumé, raisonnement) bénéficient de 100–500. Plus d\'exemples = optimisation plus robuste.' },
          { q: 'Quel est le coût de calcul d\'exécuter DSPy ?', a: 'Une exécution d\'optimisation DSPy sur 100 exemples coûte ~5–20 EUR (appels API à votre modèle). 10 prompts candidats × 100 exemples = 1 000 appels = 50–200 EUR par cycle optimisation. Réentraînement mensuel sur 100 exemples nouveaux = 50–200 EUR/mois.' },
          { q: 'Puis-je déployer prompt optimisé DSPy en production ?', a: 'Oui. DSPy donne un prompt texte clair. Copiez-le dans système production (PromptQuorum, LangChain, Vellum, etc.) et servez-le normalement. Aucun runtime DSPy spécial requis en production.' },
          { q: 'L\'optimisation automatisée garantit-elle mieux prompts ?', a: 'Non. Si votre métrique est mauvaise (ex : optimiser pour longueur au lieu de précision), DSPy optimise pour le mauvais objectif. Si données d\'évaluation sont biaisées, DSPy apprend le biais. Ordures rentrées, ordures sorties.' },
          { q: 'Dois-je utiliser optimisation automatisée pour tâches créatives ?', a: 'Pas encore. Automatisation fonctionne mieux sur tâches pilotées par métrique (classification, extraction, résumé). Tâches créatives (rédaction, narration) manquent métriques claires, donc contrôle manuel est meilleur.' },
          { q: 'DSPy peut-il optimiser prompts pour plusieurs modèles à la fois ?', a: 'DSPy optimise pour un modèle à la fois. Pour optimiser pour GPT-5.5 ET Claude, exécutez DSPy deux fois (une fois par modèle) et comparez résultats. Approche hybride : optimisez pour modèle préféré, puis testez manuellement sur autres.' },
        ],
      },

      relatedReading: {
        title: 'Lectures complémentaires',
        items: [
          '[Fondamentaux de l\'optimisation de prompts : 6 leviers cœur](/fr/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[Meilleures outils d\'optimisation de prompts pour équipes 2026](/fr/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[Métriques d\'évaluation de prompts : comment mesurer qualité prompt](/fr/prompt-engineering/prompt-evaluation-metrics)',
          '[Meilleurs outils test et évaluation prompts 2026](/fr/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[Configuration d\'ingénierie de prompts pour petites équipes](/fr/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[Zero-Shot vs Few-Shot Prompting : quand utiliser chacun](/fr/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: 'Sources',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'マニュアル vs 自動プロンプト最適化：いつどちらを使うか',
    seoTitle: 'マニュアル vs 自動最適化：判断フレームワーク',
    metaDescription: 'マニュアル vs 自動プロンプト最適化の判断基準。手動反復とDSPy・Promptfooの選択、コスト・スケーリング比較フレームワーク。',
    intro: '**プロンプト最適化はマニュアル（自分で書き直す）か自動（フレームワークが書き直す）です。** マニュアルは完全な制御が得られますが、~50個の本番プロンプトまでしかスケールしません。自動最適化（DSPy、TextGrad、Promptfoo）は100個以上にスケールしますが、ラベル付きトレーニングデータとメトリクス定義が必要です。このガイドでは、どちらをいつ使うか、どう組み合わせるかを説明します。',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'マニュアル反復と自動化のどちらかを選ぶ開発者とプロンプトエンジニア',
    primaryTerm: 'プロンプト最適化',
    aboutTopics: ['プロンプト最適化', 'DSPy', '自動化', 'スケーリング'],
    leadAnswerBlock: '**マニュアル vs 自動プロンプト最適化はスケーリング判断です。** マニュアル：単一タスクで最速、完全制御、ただし50個以上のプロンプトではスケールしません。自動：セットアップに時間がかかり、評価メトリクスが必要、100個以上にスケール可能。判断基準：(1) 本番プロンプト数は？ (2) ラベル付き例がある？ (3) 最適化は一度きり、それとも継続的？',
    quickFacts: [
      'マニュアル最適化：プロンプトあたり2–4反復、完全制御、トレーニングデータ不要、50個未満の本番プロンプトに最適',
      '自動最適化：1–2学習サイクル、ラベル付き例 + メトリクス必須、100個以上にスケール、セットアップは数日',
      'ハイブリッドアプローチ：マニュアルから開始、20個以上の本番プロンプトと評価データがあれば自動化へ移行',
      'DSPy はモデルに自己最適化を教える — 各最適化実行で、手動の書き直しなしでより良い候補を生成',
      '判断基準：<50個 = マニュアル。50–100個 = ハイブリッド。100個以上 = 自動化。',
      'コスト差：マニュアル（エンジニア時間）vs 自動化（計算 + データラベリング）。20個以上のプロンプト亜種を出荷するチームには自動化が有利',
    ],
    toc: [
      { label: '重要ポイント', anchor: 'key-takeaways' },
      { label: 'マニュアル vs 自動：クイック比較', anchor: 'manual-vs-automated-comparison' },
      { label: 'マニュアル最適化が有効な場合', anchor: 'when-manual-wins' },
      { label: '自動最適化が有効な場合', anchor: 'when-automated-wins' },
      { label: 'ツール比較：DSPy、TextGrad、Promptfoo', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: 'ハイブリッドワークフロー：マニュアル + 自動を組み合わせる', anchor: 'hybrid-workflow' },
      { label: 'コスト分析：マニュアル vs 自動', anchor: 'cost-analysis' },
      { label: 'よくある間違い', anchor: 'common-mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連記事', anchor: 'related-reading' },
      { label: '引用元', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'マニュアル vs 自動プロンプト最適化：いつどちらを使うか',
      description: 'マニュアル vs 自動プロンプト最適化：手動反復とDSPy/TextGradの使い分け。スケーリング判断フレームワーク。',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/ja/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['プロンプト最適化', 'マニュアル最適化', '自動最適化', 'DSPy', 'TextGrad', 'Promptfoo', 'LLMスケーリング'],
      about: [
        { '@type': 'Thing', name: 'マニュアルプロンプト最適化' },
        { '@type': 'Thing', name: '自動プロンプト最適化' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'マニュアル vs 自動最適化：機能比較',
      numberOfItems: 5,
      inLanguage: 'ja',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'マニュアル最適化', description: 'テスト失敗に基づくプロンプトの手動書き直し。完全制御、トレーニングデータ不要、約50個のプロンプトまでスケール。' },
        { '@type': 'ListItem', position: 2, name: 'DSPy（自動化）', description: 'モデルに自己最適化を教えるスタンフォード大学フレームワーク。100個以上のプロンプトにスケール。メトリクス必須。' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad（自動化）', description: '勾配ベースのプロンプト最適化：スコア改善のため変更するべき単語を計算。先進的で研究グレード。' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo（ハイブリッド）', description: 'テスト、リグレッション検出、手動A/B比較用CLIツール。完全自動化ではなく、手動作業を構造化。' },
        { '@type': 'ListItem', position: 5, name: 'ハイブリッドワークフロー', description: '1–3プロンプトはマニュアル、スケール時は亜種を自動化。複数プロンプト亜種を出荷するチーム向け最適。' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '重要ポイント',
        items: [
          'マニュアル最適化 = プロンプトを自分で書き直す。50個未満で完全制御が必要な場合に最適；スケールしない。',
          '自動最適化 = フレームワークがプロンプトを書き直す。100個以上に最適；ラベル付きデータとメトリクスが必須。',
          'ハイブリッド = マニュアルから開始、評価データと20個以上の本番プロンプトがあれば自動化へ移行。',
          'ツール：DSPy(研究とスケーリング向け最適)、TextGrad(先進的・研究)、Promptfoo(テスト + マニュアル、完全自動化ではない)。',
          'コスト分岐点：~50プロンプト。以下ならマニュアルが早い。以上なら自動化がエンジニア時間を節約。',
          '常に単一タスクでマニュアルから開始、評価データを生成、亜種とスケーリングは自動化へ移行。',
        ],
      },

      comparison: {
        title: 'マニュアル vs 自動：クイック比較',
        content: '**3つの要素で判断：プロンプト数、評価データ、スケーリング必要性。** マニュアル最適化はテスト失敗に基づくプロンプトの書き直し — 直接制御だが~50個の本番プロンプト以上スケールしません。自動最適化はフレームワーク(DSPy、TextGrad)でアルゴリズムがプロンプトを書き直す — 100個以上にスケールするがラベル付きデータとメトリクスが必須。',
        columns: ['要因', 'マニュアル最適化', '自動最適化'],
        rows: [
          { '要因': '最適なプロンプト数', 'マニュアル最適化': '<50(完全制御重視)', '自動最適化': '100個以上(スケーリング重視)' },
          { '要因': 'トレーニングデータ必須？', 'マニュアル最適化': 'いいえ', '自動最適化': 'はい(50–500例)' },
          { '要因': 'セットアップ時間', 'マニュアル最適化': 'プロンプトあたり1–2時間', '自動最適化': '2–5日(1回)' },
          { '要因': 'プロンプトあたりコスト', 'マニュアル最適化': '$1,000–5,000(労働)', '自動最適化': '$100–500(計算 + ラベル)' },
        ],
      },

      manualWins: {
        title: 'マニュアル最適化が有効な場合',
        items: [
          '50個未満の本番プロンプト — データとメトリクスセットアップのオーバーヘッドが価値がない',
          '新しいまたは1回限りのタスク — 最適化方向不明なので、人間の洞察が早い',
          '高い制御要件 — コンプライアンス、ブランド音声、創作 — すべての変更を承認する必要がある',
          '小規模チーム(<5人) — マニュアル反復は早く、チームメンバーが変更理由を理解',
          '評価データ限定 — <50ラベル例しかないので、自動トレーニングはオーバーフィット',
        ],
      },

      automatedWins: {
        title: '自動最適化が有効な場合',
        items: [
          '100個以上の本番プロンプト — マニュアル反復のエンジニアコストが禁止的',
          'スケール時の亜種テスト — A/Bテストに10個以上のプロンプト亜種が必要；自動化がより速く生成',
          '継続的な最適化 — ユーザー入力が変わるとプロンプトは劣化；自動システムは月単位でリトレーニング',
          'メトリクック駆動ワークフロー — タスクに明確な成功メトリクス(正確性、BLEU、LLMジャッジ評価)、主観的品質ではない',
          '大規模チーム(10人以上) — マニュアル変更の調整オーバーヘッドが高い；自動化で再現性あり',
        ],
      },

      tools: {
        title: 'ツール比較：DSPy、TextGrad、Promptfoo',
        content: '**自動または半自動最適化をサポート3つの主ツール：**',
        columns: ['ツール', 'アプローチ', '成熟度', 'スケール', '最適用途'],
        rows: [
          { 'ツール': 'DSPy(スタンフォード)', 'アプローチ': '学習によるプロンプト最適化', '成熟度': '本番対応(オープンソース)', 'スケール': '50–500プロンプト', '最適用途': 'プロンプト亜種をスケーリングするチーム' },
          { 'ツール': 'TextGrad', 'アプローチ': '勾配ベースのプロンプト書き直し', '成熟度': '研究段階(新、本番まだ未対応)', 'スケール': '10–100プロンプト', '最適用途': '研究、最先端の最適化' },
          { 'ツール': 'Promptfoo', 'アプローチ': 'テスト + リグレッション検出(マニュアル補助)', '成熟度': '本番対応(オープンソース)', 'スケール': 'どのサイズでも', '最適用途': 'CI/CDテスト、完全自動化ではない' },
        ],
      },

      hybrid: {
        title: 'ハイブリッドワークフロー：マニュアル + 自動を組み合わせる',
        content: '実世界はハイブリッド。マニュアル最適化で開始し直感と評価データを構築。スケールに達したら自動化に移行。',
        numberedItems: [
          '週1–4：1–3コアプロンプトのマニュアル最適化。プロンプトあたり50個以上のラベル例を生成。',
          '週4–8：評価メトリクスを構築(正確性、BLEU、またはLLMジャッジ)。Promptfooで手動作業を検証するA/Bテスト実行。',
          '週8以上：DSPyをセットアップ。成長する評価データセットでリトレーニング。自動化で新しいプロンプト亜種を追加。',
          '本番：DSPy最適化亜種をデプロイ。すべてのコミット時にPromptfooでリグレッションテスト。',
        ],
      },

      costAnalysis: {
        title: 'コスト分析：マニュアル vs 自動',
        content: '**どのプロンプト数で自動化がマニュアルより安くなる？** 損益分岐点は約50–80プロンプト。',
        items: [
          'マニュアルコスト/プロンプト：4–8時間エンジニア × $150/時 = $600–1,200直接労働。調査、テスト、ドキュメント追加 = $1,500–5,000合計/プロンプト。',
          '自動化コスト1回：DSPyセットアップ = $2,000–5,000(2–5日エンジニア + 計算)。その後プロンプト/コスト = $100–300(計算 + ラベリング)。',
          '損益分岐点：~60プロンプトで、自動化合計 = $2,000 + (60 × $200) = $14,000。マニュアル合計 = 60 × $3,000 = $180,000。自動化が13倍有利。',
          '30プロンプト以下：マニュアルが早くて安い。自動化セットアップのオーバーヘッドは正当化されない。',
          '100プロンプト以上：自動化はマニュアルより5–10倍安い。',
        ],
      },

      mistakes: {
        title: 'よくある間違い',
        items: [
          'ラベル付きデータなしでDSPyを実行 — DSPyは例から学習。50個以上のラベル(入力、出力)ペアなし、ノイズからトレーニング。マニュアル反復から開始、ペアをドキュメント、その後トレーニングデータとして使用。',
          'あいまいなメトリクスを選ぶ — DSPyとTextGradは定量メトリクス必須(正確性、F1、BLEU)。「品質」のようなあいまいなメトリクスは最適化を導けない。成功定義：テストセット正確性、部分文字列一致、またはLLMジャッジ8/10以上。',
          '自動化が新しい技術を発見するに期待 — DSPyは既知構造内でテキスト最適化するが、チェーン・オブ・思考や少数ショット例を自分で発見しない。まず構造(タスク署名)を定義する必要がある。',
          '<30プロンプト向け自動化セットアップ — 自動化オーバーヘッド(セットアップ、ラベリング、メトリクス) = 2–5週。30プロンプト未満なら、マニュアル反復が2–4倍早い。50個以上で自動化へ移行。',
          '継続監視なしで自動化 — プロンプトはユーザー入力が変わると劣化。月単位でリトレーニング：新入力 → 評価セット更新 → DSPy再実行 → テスト → デプロイ。最適化を1回ではなく継続として扱う。',
        ],
      },

      faq: {
        title: 'よくある質問',
        faqs: [
          { q: 'マニュアルと自動最適化を混ぜられる？', a: 'はい、これがベストプラクティス。コアタスク(1–3プロンプト)はマニュアル、スケーリング用に亜種は自動化。Promptfooですべてをテスト；DSPyで新規を生成。' },
          { q: 'DSPyはすべてのモデルで動く？', a: 'DSPyはAPI経由でアクセス可能なモデルで動作：GPT-5.5、Claude、Gemini、Cohere、Ollama。ビジョンモデルはまだ未対応。ローカルモデルは対応するが遅い。' },
          { q: 'DSPyにはラベル例をいくつ必要？', a: '単純タスク(分類、抽出)は最小30–50。複雑タスク(要約、推論)は100–500のメリット。例が多い = より堅牢な最適化。' },
          { q: 'DSPy実行の計算コストは？', a: '100例1回のDSPy最適化実行 = ~$5–20(API呼び出し)。10候補プロンプト × 100例 = 1,000呼び出し = $50–200/最適化サイクル。月単位リトレーニング = $50–200/月。' },
          { q: '本番でDSPy最適化プロンプトをデプロイできる？', a: 'はい。DSPyは平文プロンプトを出力。PromptQuorum、LangChain、Vellum等の本番システムにコピー、普通に提供。本番でDSPyランタイム不要。' },
          { q: '自動最適化で必ずプロンプトが良くなる？', a: 'いいえ。メトリクスが間違っていれば、DSPyは間違ったものを最適化。評価データが偏っていれば、バイアスを学習。ゴミ入 = ゴミ出。' },
          { q: '創作タスクに自動最適化を使うべき？', a: 'まだ。自動化はメトリクック駆動タスク(分類、抽出、要約)で最適。創作(コピーライティング、ストーリー)は明確メトリクスが欠けるので、マニュアル制御が最適。' },
          { q: 'DSPyは複数モデルを同時に最適化できる？', a: 'いいえ、1回に1モデル。GPT-5.5 と Claude 両方に最適化するには、DSPyを2回実行(各モデル)して結果を比較。ハイブリッド：好みモデルで最適化、他は手動テスト。' },
        ],
      },

      relatedReading: {
        title: '関連記事',
        items: [
          '[プロンプト最適化の基礎：6つのコア・レバー](/ja/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[チーム向けプロンプト最適化ツールベスト2026](/ja/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[プロンプト評価メトリクス：プロンプト品質を測定する方法](/ja/prompt-engineering/prompt-evaluation-metrics)',
          '[プロンプト テスト・評価ツール ベスト2026](/ja/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[小規模チーム向けプロンプトエンジニアリング セットアップ](/ja/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[ゼロショット vs 少数ショット：いつどちらを使う](/ja/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: '引用元',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: '手动 vs 自动提示词优化：何时选择每种方法',
    seoTitle: '手动 vs 自动提示词优化：决策框架',
    metaDescription: '手动 vs 自动提示词优化的判断基准。何时手动迭代，何时自动化。成本和扩展性对比决策框架。',
    intro: '**提示词优化可以是手动（自己重写提示词）或自动（框架为你重写）。** 手动优化让你拥有完全控制，但只能扩展到约50个生产提示词。自动优化（DSPy、TextGrad、Promptfoo）能扩展到100个以上，但需要标记的训练数据和指标定义。本指南展示何时使用每种方法，以及它们如何协作。',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '在手动迭代和自动化之间进行选择的开发者和提示词工程师',
    primaryTerm: '提示词优化',
    aboutTopics: ['提示词优化', 'DSPy', '自动化', '扩展性'],
    leadAnswerBlock: '**手动 vs 自动提示词优化是一个扩展性决策。** 手动：单个任务最快，完全控制，但无法扩展到50个以上的提示词。自动：设置需要更长时间，需要评估指标，能扩展到100个以上提示词。判断标准：(1) 你目前有多少个生产提示词？ (2) 有标记的例子吗？ (3) 优化是一次性的还是持续的？',
    quickFacts: [
      '手动优化：每个提示词2–4次迭代，完全控制，无需训练数据，适用于<50个生产提示词',
      '自动优化：1–2个学习周期，需要标记例子 + 指标，扩展到100个以上提示词，数日内完成设置',
      '混合方法：从手动开始，当有20个以上的生产提示词和评估数据后，转向自动化',
      'DSPy教会模型自我优化——每次优化运行都生成更好的候选，无需人工重写',
      '决策阈值：<50个 = 手动。50–100个 = 混合。100个以上 = 自动化。',
      '成本差异：手动（工程时间）vs 自动化（计算 + 数据标记）。对出运20个以上提示词变体的团队，自动化获胜',
    ],
    toc: [
      { label: '核心要点', anchor: 'key-takeaways' },
      { label: '手动 vs 自动：快速对比', anchor: 'manual-vs-automated-comparison' },
      { label: '手动优化何时更优', anchor: 'when-manual-wins' },
      { label: '自动优化何时更优', anchor: 'when-automated-wins' },
      { label: '工具对比：DSPy、TextGrad、Promptfoo', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: '混合工作流：手动 + 自动协作', anchor: 'hybrid-workflow' },
      { label: '成本分析：手动 vs 自动', anchor: 'cost-analysis' },
      { label: '常见错误', anchor: 'common-mistakes' },
      { label: '常见问题', anchor: 'faq' },
      { label: '延伸阅读', anchor: 'related-reading' },
      { label: '引用来源', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '手动 vs 自动提示词优化：何时选择每种方法',
      description: '手动 vs 自动提示词优化：何时手动迭代，何时使用DSPy或TextGrad。扩展性决策框架。',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/zh/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['提示词优化', '手动优化', '自动优化', 'DSPy', 'TextGrad', 'Promptfoo', 'LLM扩展'],
      about: [
        { '@type': 'Thing', name: '手动提示词优化' },
        { '@type': 'Thing', name: '自动提示词优化' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '手动 vs 自动优化：功能对比',
      numberOfItems: 5,
      inLanguage: 'zh',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '手动优化', description: '根据测试失败手动重写提示词。完全控制，无需训练数据，约可扩展到50个提示词。' },
        { '@type': 'ListItem', position: 2, name: 'DSPy（自动化）', description: '教会模型自我优化的斯坦福框架。扩展到100个以上提示词。需要指标。' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad（自动化）', description: '基于梯度的提示词优化：计算需要改变哪些词来改进分数。先进、研究级别。' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo（混合）', description: '用于测试、回归检测和手动A/B对比的CLI工具。不是完全自动化，但结构化手动工作。' },
        { '@type': 'ListItem', position: 5, name: '混合工作流', description: '1–3个提示词手动，大规模时自动化变体。最适合出运多个提示词版本的团队。' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '核心要点',
        items: [
          '手动优化 = 自己重写提示词。适用于<50个且需要完全控制；不能扩展。',
          '自动优化 = 框架重写提示词。适用于100个以上；需要标记数据和指标。',
          '混合 = 从手动开始，有评估数据和20个以上生产提示词后转向自动化。',
          '工具：DSPy（研究和扩展最优）、TextGrad（先进/研究）、Promptfoo（测试 + 手动，不是完全自动化）。',
          '成本分岔点：约50个提示词。以下手动更快。以上自动化省工程时间。',
          '总是从单个任务的手动开始，生成评估数据，然后变体和扩展转向自动化。',
        ],
      },

      comparison: {
        title: '手动 vs 自动：快速对比',
        content: '**根据三个因素判断：提示词数量、评估数据、扩展性需求。** 手动优化是根据测试失败重写提示词——直接控制但无法扩展到50个以上生产提示词。自动优化使用框架（DSPy、TextGrad）算法重写提示词——扩展到100个以上但需要标记数据和指标。',
        columns: ['因素', '手动优化', '自动优化'],
        rows: [
          { '因素': '最佳提示词数', '手动优化': '<50（控制优先）', '自动优化': '100个以上（扩展优先）' },
          { '因素': '需要训练数据？', '手动优化': '否', '自动优化': '是（50–500例）' },
          { '因素': '设置时间', '手动优化': '每个提示词1–2小时', '自动优化': '2–5天（一次性）' },
          { '因素': '每个提示词成本', '手动优化': '$1,000–5,000（劳动）', '自动优化': '$100–500（计算 + 标签）' },
        ],
      },

      manualWins: {
        title: '手动优化何时更优',
        items: [
          '少于50个生产提示词——数据和指标设置开销没有价值',
          '新颖或一次性任务——优化方向不清楚时，人类洞察更快',
          '高控制要求——合规、品牌声音、创意写作——需要批准每项改变',
          '小团队(<5人)——手动迭代快，团队成员理解为什么改变',
          '评估数据有限——<50标记例子，自动训练会过拟合',
        ],
      },

      automatedWins: {
        title: '自动优化何时更优',
        items: [
          '100个以上生产提示词——手动迭代的工程成本禁止性',
          '规模化变体测试——A/B测试需10个以上提示词变体；自动化更快生成',
          '持续优化——用户输入变化时提示词会下降；自动系统可月度重训',
          '指标驱动工作流——任务有明确成功指标（准确率、BLEU、LLM评分），不是主观质量',
          '大团队(10人以上)——手动改变协调开销高；自动化使优化可重现',
        ],
      },

      tools: {
        title: '工具对比：DSPy、TextGrad、Promptfoo',
        content: '**三个主要工具支持自动或半自动优化：**',
        columns: ['工具', '方法', '成熟度', '规模', '最适用于'],
        rows: [
          { '工具': 'DSPy（斯坦福）', '方法': '通过学习进行提示词优化', '成熟度': '生产就绪（开源）', '规模': '50–500提示词', '最适用于': '扩展提示词变体的团队' },
          { '工具': 'TextGrad', '方法': '基于梯度的提示词重写', '成熟度': '研究阶段（新、生产未就绪）', '规模': '10–100提示词', '最适用于': '研究、尖端优化' },
          { '工具': 'Promptfoo', '方法': '测试 + 回归检测（手动辅助）', '成熟度': '生产就绪（开源）', '规模': '任何规模', '最适用于': 'CI/CD测试，不是完全自动化' },
        ],
      },

      hybrid: {
        title: '混合工作流：手动 + 自动协作',
        content: '真实世界是混合的。从手动优化开始构建直觉和评估数据。达到规模后转向自动化。',
        numberedItems: [
          '周1–4：手动优化1–3个核心提示词。每个提示词生成50个以上标记例子。',
          '周4–8：构建评估指标（准确率、BLEU或LLM评分）。用Promptfoo A/B测试验证手动工作。',
          '周8+：设置DSPy。在增长的评估数据集上重训。通过自动化添加新提示词变体。',
          '生产：部署DSPy优化变体。每次提交时用Promptfoo进行回归测试。',
        ],
      },

      costAnalysis: {
        title: '成本分析：手动 vs 自动',
        content: '**在什么提示词数量时自动化变得比手动更便宜？** 损益分岔点约50–80个提示词。',
        items: [
          '手动成本/提示词：4–8小时工程师 × $150/小时 = $600–1,200直接劳动。加上研究、测试、文档 = 每个提示词$1,500–5,000总计。',
          '自动化一次性成本：DSPy设置 = $2,000–5,000（2–5天工程师 + 计算）。然后每提示词成本 = $100–300（计算 + 标记）。',
          '损益平衡：约60个提示词时，自动化总成本 = $2,000 + (60 × $200) = $14,000。手动总成本 = 60 × $3,000 = $180,000。自动化赢利13倍。',
          '30个以下提示词：手动更快更便宜。自动化设置开销未被证实。',
          '100个以上提示词：自动化比手动便宜5–10倍。',
        ],
      },

      mistakes: {
        title: '常见错误',
        items: [
          '没有标记数据就运行DSPy——DSPy从例子学习。没有50个以上标记(输入、输出)对，就从噪音训练。从手动迭代开始，记录对，然后用作训练数据。',
          '选择模糊指标——DSPy和TextGrad需要定量指标（准确率、F1、BLEU）。像"质量"这样的模糊指标无法指导优化。定义成功：测试集准确率、子字符串匹配或LLM评分>8/10。',
          '期望自动化发现新技术——DSPy在已知结构内优化文本，但不会自己发现思维链或少数例子。必须先定义结构（任务签名）。',
          '<30个提示词设置自动化——自动化开销（设置、标记、指标）= 2–5周。对<30个提示词，手动迭代快2–4倍。在50个以上时转向自动化。',
          '自动化后没有持续监控——提示词在用户输入改变时下降。月度重训：新输入 → 更新评估集 → 重运DSPy → 测试 → 部署。将优化视为持续而非一次性。',
        ],
      },

      faq: {
        title: '常见问题',
        faqs: [
          { q: '能混合手动和自动优化吗？', a: '能，这是最佳实践。核心任务手动（1–3个提示词），扩展的变体自动化。用Promptfoo测试全部；用DSPy生成新的。' },
          { q: 'DSPy能用所有模型吗？', a: 'DSPy适用任何API访问的模型：GPT-5.5、Claude、Gemini、Cohere、Ollama。视觉模型还不支持。本地模型支持但较慢。' },
          { q: 'DSPy需要多少标记例子？', a: '简单任务（分类、提取）最少30–50。复杂任务（总结、推理）受益于100–500。更多例子 = 更稳健优化。' },
          { q: '运行DSPy的计算成本？', a: '100例一次DSPy优化运行 = 约$5–20（API调用）。10候选提示词 × 100例 = 1,000调用 = 每优化周期$50–200。月度重训 = $50–200/月。' },
          { q: '能在生产部署DSPy优化提示词吗？', a: '能。DSPy输出纯文本提示词。复制到生产系统（PromptQuorum、LangChain、Vellum等）并正常提供。生产无需DSPy运行时。' },
          { q: '自动优化保证提示词变好吗？', a: '不保证。如果指标错了，DSPy优化错的东西。如果评估数据有偏差，学习偏差。垃圾进 = 垃圾出。' },
          { q: '创意任务应该用自动优化吗？', a: '还不应该。自动化最适合指标驱动任务（分类、提取、总结）。创意任务（文案、故事）缺乏明确指标，手动控制更好。' },
          { q: 'DSPy能同时为多个模型优化吗？', a: '不能，一次一个模型。要为GPT-5.5和Claude都优化，运行DSPy两次（各模型）并比较结果。混合方法：为偏好模型优化，其他手动测试。' },
        ],
      },

      relatedReading: {
        title: '延伸阅读',
        items: [
          '[提示词优化基础：6个核心杠杆](/zh/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[2026年团队提示词优化工具最佳](/zh/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[提示词评估指标：如何测量提示词质量](/zh/prompt-engineering/prompt-evaluation-metrics)',
          '[2026年提示词测试和评估工具最佳](/zh/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[小团队提示词工程设置](/zh/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[零次提示 vs 少次提示：何时使用各自](/zh/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: '引用来源',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: 'تحسين الـ prompts يدويًا أم تلقائيًا: متى تُكرر التجربة ومتى تُؤتمت العملية',
    seoTitle: 'تحسين الـ prompts: يدوي أم آلي؟ إطار القرار',
    metaDescription: 'تحسين الـ prompts يدويًا أم تلقائيًا: اختر بناءً على عدد الـ prompts والموارد. متى تُكرر يدويًا ومتى تُؤتمت — إطار القرار الشامل.',
    intro: '**يمكن تحسين الـ prompts يدويًا (تُعيد أنت كتابة الـ prompt) أو تلقائيًا (يُعيد framework كتابته نيابةً عنك).** التحسين اليدوي يمنحك تحكمًا كاملًا لكنه لا يتوسع إلا حتى ~50 prompt في الإنتاج. التحسين الآلي (DSPy وTextGrad وPromptfoo) يتوسع لـ 100+ prompt لكنه يستلزم بيانات تدريب مُصنَّفة وتعريفات مقاييس واضحة. يوضح هذا الدليل متى تستخدم كل نهج وكيف يعملان معًا.',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المطورون ومهندسو الـ prompts الذين يختارون بين التكرار اليدوي والأتمتة',
    primaryTerm: 'تحسين الـ prompts',
    aboutTopics: ['تحسين الـ prompts', 'DSPy', 'الأتمتة', 'التوسع'],
    leadAnswerBlock: '**اليدوي مقابل الآلي هو قرار توسع بالدرجة الأولى.** اليدوي: الأسرع للمهام الفردية، تحكم كامل، لكنه لا يتجاوز 50 prompt. الآلي: أبطأ في الإعداد، يتطلب مقاييس تقييم، لكنه يتوسع لـ 100+ prompt. يعتمد الاختيار على: (1) كم عدد الـ prompts لديك في الإنتاج؟ (2) هل لديك أمثلة مُصنَّفة؟ (3) هل التحسين مرة واحدة أم مستمر؟',
    quickFacts: [
      'التحسين اليدوي: 2–4 تكرارات لكل prompt، تحكم كامل، لا يحتاج بيانات تدريب، مناسب لـ <50 prompt في الإنتاج',
      'التحسين الآلي: 1–2 دورة تعلم، يتطلب أمثلة مُصنَّفة + مقاييس، يتوسع لـ 100+ prompt، يُعدّ في أيام لا أسابيع',
      'النهج الهجين: ابدأ يدويًا ثم انتقل إلى الآلي حين تمتلك 20+ prompt في الإنتاج وبيانات تقييم',
      'DSPy يُعلّم النموذج تحسين نفسه — كل دورة تحسين تُنتج مرشحين أفضل دون إعادة كتابة بشرية',
      'عتبة القرار: <50 prompt = يدوي. 50–100 prompt = هجين. 100+ prompt = آلي.',
      'فرق التكلفة: يدوي (وقت الهندسة) مقابل آلي (الحوسبة + تصنيف البيانات). الآلي أفضل للفرق التي تُطلق 20+ نسخة من الـ prompts',
    ],
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'key-takeaways' },
      { label: 'يدوي مقابل آلي: مقارنة سريعة', anchor: 'manual-vs-automated-comparison' },
      { label: 'متى يتفوق التحسين اليدوي', anchor: 'when-manual-wins' },
      { label: 'متى يتفوق التحسين الآلي', anchor: 'when-automated-wins' },
      { label: 'الأدوات: DSPy وTextGrad وPromptfoo مقارنةً', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: 'سير العمل الهجين: يدوي + آلي معًا', anchor: 'hybrid-workflow' },
      { label: 'تحليل التكاليف: يدوي مقابل آلي', anchor: 'cost-analysis' },
      { label: 'الأخطاء الشائعة', anchor: 'common-mistakes' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
      { label: 'المصادر', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تحسين الـ prompts يدويًا أم تلقائيًا: متى تُكرر التجربة ومتى تُؤتمت العملية',
      description: 'تحسين الـ prompts يدويًا أم تلقائيًا: اختر حسب عدد الـ prompts. إطار قرار للتوسع.',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'ar',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['تحسين الـ prompts', 'التحسين اليدوي', 'التحسين الآلي', 'DSPy', 'TextGrad', 'Promptfoo', 'توسع LLM'],
      about: [
        { '@type': 'Thing', name: 'التحسين اليدوي للـ prompts' },
        { '@type': 'Thing', name: 'التحسين الآلي للـ prompts' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'يدوي مقابل آلي: مقارنة الميزات',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'التحسين اليدوي', description: 'إعادة كتابة الـ prompt بشريًا بناءً على إخفاقات الاختبارات. تحكم كامل، لا بيانات تدريب مطلوبة، يتوسع حتى ~50 prompt.' },
        { '@type': 'ListItem', position: 2, name: 'DSPy (آلي)', description: 'إطار من Stanford يُعلّم النموذج تحسين نفسه. يتوسع لـ 100+ prompt. يتطلب مقياسًا واحدًا.' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad (آلي)', description: 'تحسين الـ prompts القائم على التدرجات: يحسب الكلمات الواجب تغييرها لتحسين النتيجة. متقدم، على مستوى الأبحاث.' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo (هجين)', description: 'أداة CLI للاختبار وكشف الانحدار والمقارنة اليدوية A/B. ليست أتمتة كاملة لكنها تُنظّم العمل اليدوي.' },
        { '@type': 'ListItem', position: 5, name: 'سير العمل الهجين', description: 'يدوي لـ 1–3 prompts، آلي للنسخ على نطاق واسع. مثالي للفرق التي تُطلق إصدارات متعددة من الـ prompts.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'النقاط الرئيسية',
        items: [
          'التحسين اليدوي = تُعيد أنت كتابة الـ prompt. مناسب لـ <50 prompt والتحكم الكامل؛ لا يتوسع.',
          'التحسين الآلي = يُعيد framework كتابة الـ prompt نيابةً عنك. مناسب لـ >100 prompt؛ يتطلب بيانات مُصنَّفة ومقياسًا.',
          'الهجين = ابدأ يدويًا ثم انتقل إلى الآلي حين تمتلك بيانات تقييم و>20 prompt في الإنتاج.',
          'الأدوات: DSPy (الأفضل للأبحاث والتوسع)، TextGrad (متقدم/أبحاث)، Promptfoo (اختبار + يدوي، ليس أتمتة كاملة).',
          'نقطة التعادل في التكلفة: ~50 prompt. دون ذلك، اليدوي أسرع. فوق ذلك، الآلي يوفر وقت الهندسة.',
          'ابدأ دائمًا بالتحسين اليدوي لمهمة واحدة، أنتج بيانات التقييم، ثم انتقل إلى الآلي للنسخ والتوسع.',
        ],
      },

      comparison: {
        title: 'يدوي مقابل آلي: مقارنة سريعة',
        content: '**اختر وفق ثلاثة عوامل: عدد الـ prompts، وبيانات التقييم، واحتياجات التوسع.** التحسين اليدوي يعني إعادة كتابة الـ prompt بناءً على إخفاقات الاختبارات — تحكم مباشر لكنه لا يتوسع فوق ~50 prompt في الإنتاج. التحسين الآلي يستخدم frameworks (DSPy وTextGrad) لإعادة كتابة الـ prompts خوارزميًا — يتوسع لـ 100+ لكنه يستلزم بيانات مُصنَّفة ومقاييس. خطوة تحقق ثالثة — تشغيل الـ prompt ذاته على نماذج متعددة عبر [منصة تحسين الـ prompts](/features) — تؤكد أي نسخة تتعمم بشكل أفضل قبل إطلاقها في الإنتاج.',
        columns: ['العامل', 'التحسين اليدوي', 'التحسين الآلي'],
        rows: [
          { 'العامل': 'مثالي لعدد من الـ prompts', 'التحسين اليدوي': '<50 (تركيز على التحكم)', 'التحسين الآلي': '100+ (تركيز على التوسع)' },
          { 'العامل': 'بيانات تدريب مطلوبة', 'التحسين اليدوي': 'لا', 'التحسين الآلي': 'نعم (50–500 مثال)' },
          { 'العامل': 'وقت الإعداد', 'التحسين اليدوي': '1–2 ساعة لكل prompt', 'التحسين الآلي': '2–5 أيام مرة واحدة' },
          { 'العامل': 'التكلفة لكل prompt', 'التحسين اليدوي': '1,000–5,000 دولار (عمل)', 'التحسين الآلي': '100–500 دولار (حوسبة + تصنيف)' },
        ],
      },

      manualWins: {
        title: 'متى يتفوق التحسين اليدوي',
        items: [
          'أقل من 50 prompt في الإنتاج — الحمل الزائد لإعداد البيانات والمقاييس لا يستحق العناء',
          'مهام جديدة أو لمرة واحدة — لا تزال تجهل اتجاه التحسين، لذا الحدس البشري أسرع',
          'متطلبات تحكم صارمة — الامتثال، والهوية اللغوية للعلامة التجارية، والكتابة الإبداعية — حيث تحتاج الموافقة على كل تغيير',
          'فرق صغيرة (<5 أشخاص) — التكرار اليدوي سريع وأعضاء الفريق يفهمون أسباب التغييرات',
          'بيانات تقييم محدودة — لديك <50 مثالًا مُصنَّفًا، لذا سيفرط التدريب الآلي في التكيف',
        ],
      },

      automatedWins: {
        title: 'متى يتفوق التحسين الآلي',
        items: [
          'أكثر من 100 prompt في الإنتاج — تكلفة التكرار اليدوي للهندسة تصبح باهظة',
          'اختبار النسخ على نطاق واسع — تحتاج 10+ نسخ من الـ prompts لاختبار A/B؛ الأتمتة تُنتجها أسرع من إعادة الكتابة البشرية',
          'التحسين المستمر — تتدهور الـ prompts بمرور الوقت مع تغير مدخلات المستخدمين؛ الأنظمة الآلية يمكنها إعادة التدريب شهريًا',
          'سير العمل القائم على المقاييس — مهمتك لها مقياس نجاح واضح (الدقة، BLEU، تقييم قاضي LLM)، لا جودة ذاتية',
          'فرق كبيرة (10+) — الحمل التنسيقي للتغييرات اليدوية يرتفع؛ الأتمتة تجعل التحسين قابلًا للتكرار',
        ],
      },

      tools: {
        title: 'الأدوات: DSPy وTextGrad وPromptfoo مقارنةً',
        content: '**ثلاثة أدوات رئيسية تدعم التحسين الآلي أو شبه الآلي:**',
        columns: ['الأداة', 'النهج', 'النضج', 'النطاق', 'مثالية لـ'],
        rows: [
          { 'الأداة': 'DSPy (Stanford)', 'النهج': 'تحسين الـ prompts عبر التعلم', 'النضج': 'جاهزة للإنتاج (مفتوحة المصدر)', 'النطاق': '50–500 prompt', 'مثالية لـ': 'الفرق التي تتوسع في نسخ الـ prompts' },
          { 'الأداة': 'TextGrad', 'النهج': 'إعادة كتابة الـ prompts القائمة على التدرجات', 'النضج': 'بحثي (جديد، غير جاهز للإنتاج بعد)', 'النطاق': '10–100 prompt', 'مثالية لـ': 'الأبحاث، التحسين المتطور' },
          { 'الأداة': 'Promptfoo', 'النهج': 'اختبار + كشف الانحدار (بمساعدة يدوية)', 'النضج': 'جاهزة للإنتاج (مفتوحة المصدر)', 'النطاق': 'أي حجم', 'مثالية لـ': 'اختبار CI/CD، ليست أتمتة كاملة' },
        ],
      },

      hybrid: {
        title: 'سير العمل الهجين: يدوي + آلي معًا',
        content: 'الواقع العملي هجين. ابدأ بالتحسين اليدوي لبناء الحدس وبيانات التقييم. انتقل إلى الآلي حين تصل إلى نطاق كافٍ.',
        numberedItems: [
          'الأسابيع 1–4: التحسين اليدوي لـ 1–3 prompts أساسية. أنتج 50+ مثالًا مُصنَّفًا لكل prompt.',
          'الأسابيع 4–8: ابنِ مقياس تقييم (الدقة، BLEU، أو قاضي LLM). شغّل اختبارات A/B في Promptfoo للتحقق من العمل اليدوي.',
          'الأسبوع 8+: أعدّ DSPy. أعِد التدريب على مجموعة التقييم المتنامية. أضف نسخ prompts جديدة عبر الأتمتة.',
          'الإنتاج: انشر النسخ المُحسَّنة بواسطة DSPy. استخدم Promptfoo لاختبار الانحدار عند كل commit.',
        ],
      },

      costAnalysis: {
        title: 'تحليل التكاليف: يدوي مقابل آلي',
        content: '**عند أي عدد من الـ prompts يصبح الآلي أرخص من اليدوي؟** نقطة التعادل تقع عند حوالي 50–80 prompt.',
        items: [
          'التكلفة اليدوية لكل prompt: 4–8 ساعات من وقت الهندسة × 150 دولارًا/الساعة = 600–1,200 دولارًا من العمل المباشر. أضف البحث والاختبار والتوثيق = 1,500–5,000 دولار إجمالًا لكل prompt.',
          'التكلفة الآلية لمرة واحدة: إعداد DSPy = 2,000–5,000 دولار (2–5 أيام هندسة + حوسبة). ثم التكلفة لكل prompt = 100–300 دولار (حوسبة + تصنيف).',
          'نقطة التعادل: عند ~60 prompt، إجمالي التكلفة الآلية = 2,000 + (60 × 200) = 14,000 دولار. إجمالي التكلفة اليدوية = 60 × 3,000 = 180,000 دولار. الآلي يفوز بفارق 13×.',
          'دون 30 prompt: اليدوي أسرع وأرخص. الحمل الزائد للأتمتة غير مبرر.',
          'فوق 100 prompt: الآلي أرخص بـ 5–10× من اليدوي.',
        ],
      },

      mistakes: {
        title: 'الأخطاء الشائعة',
        items: [
          'تشغيل DSPy بدون بيانات مُصنَّفة — DSPy يتعلم من الأمثلة. بدون 50+ زوج مُصنَّف (مدخل، مخرج)، يتدرب على ضوضاء. ابدأ بتكرارات يدوية، وثّق الأزواج، ثم استخدمها بيانات تدريب.',
          'اختيار مقياس غامض — DSPy وTextGrad يتطلبان مقاييس كمية (الدقة، F1، BLEU). المقاييس الغامضة كـ"الجودة" لا يمكنها توجيه التحسين. حدد النجاح: الدقة على مجموعة الاختبار، تطابق السلسلة الجزئية، أو قاضي LLM >8/10.',
          'توقع أن الأتمتة ستكتشف تقنيات جديدة — DSPy يُحسّن النص ضمن بنى معروفة لكنه لن يكتشف chain-of-thought أو أمثلة few-shot من تلقاء نفسه. يجب تحديد البنية (توقيع المهمة) أولًا.',
          'إعداد الأتمتة لـ <30 prompt — الحمل الزائد للأتمتة (الإعداد والتصنيف والمقاييس) هو 2–5 أسابيع. لـ <30 prompt، التكرار اليدوي أسرع 2–4×. انتقل إلى الأتمتة عند 50+ prompt.',
          'الأتمتة بدون مراقبة مستمرة — تتدهور الـ prompts مع تغير مدخلات المستخدمين. أعد التدريب شهريًا: مدخلات جديدة → مجموعة تقييم مُحدَّثة → إعادة تشغيل DSPy → اختبار → نشر. تعامل مع التحسين كعملية مستمرة لا لمرة واحدة.',
        ],
      },

      faq: {
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يمكنني الجمع بين التحسين اليدوي والآلي؟', a: 'نعم، وهذا هو أفضل ممارسة. اليدوي للمهمة الأساسية (1–3 prompts)، والآلي للنسخ والتوسع. استخدم Promptfoo لاختبار جميع النسخ، وDSPy لإنتاج نسخ جديدة.' },
          { q: 'هل يعمل DSPy مع جميع النماذج؟', a: 'DSPy يعمل مع أي نموذج متاح عبر API: GPT-5.5 وClaude وGemini وCohere وOllama. لا يدعم نماذج الرؤية بعد. النماذج المحلية مدعومة لكنها أبطأ.' },
          { q: 'كم من الأمثلة المُصنَّفة أحتاج لـ DSPy؟', a: 'الحد الأدنى 30–50 للمهام البسيطة (التصنيف والاستخراج). المهام المعقدة (التلخيص والاستدلال) تستفيد من 100–500 مثال. كلما زادت الأمثلة، زادت قوة التحسين.' },
          { q: 'ما تكلفة الحوسبة لتشغيل DSPy؟', a: 'دورة تحسين DSPy على 100 مثال تُكلّف ~5–20 دولارًا (استدعاءات API). تشغيل 10 مرشحين × 100 مثال = 1,000 استدعاء = 50–200 دولارًا لكل دورة تحسين. إعادة التدريب الشهرية = 50–200 دولار/الشهر.' },
          { q: 'هل يمكنني نشر prompt مُحسَّن بواسطة DSPy في الإنتاج؟', a: 'نعم. DSPy يُرجع prompt كنص عادي. انسخه إلى نظام الإنتاج (PromptQuorum أو LangChain أو Vellum وغيرها) وشغّله بشكل طبيعي. لا يلزم runtime خاص بـ DSPy في الإنتاج.' },
          { q: 'هل تضمن الأتمتة prompts أفضل؟', a: 'لا. إذا كان مقياسك خاطئًا، يُحسّن DSPy الشيء الخاطئ. إذا كانت بيانات التقييم متحيزة، يتعلم DSPy التحيز. مدخلات رديئة = مخرجات رديئة.' },
          { q: 'هل يجب استخدام التحسين الآلي للمهام الإبداعية؟', a: 'ليس بعد. الأتمتة تعمل بشكل أفضل في المهام القائمة على المقاييس (التصنيف والاستخراج والتلخيص). المهام الإبداعية (كتابة الإعلانات والسرد القصصي) تفتقر إلى مقاييس واضحة، لذا التحكم اليدوي أفضل.' },
          { q: 'هل يستطيع DSPy تحسين الـ prompts لنماذج متعددة في آنٍ واحد؟', a: 'DSPy يُحسّن لنموذج واحد في كل مرة. لتحسينه لـ GPT-5.5 وClaude معًا، شغّل DSPy مرتين (مرة لكل نموذج) وقارن النتائج. النهج الهجين: حسِّن للنموذج المفضل، ثم اختبر يدويًا على النماذج الأخرى.' },
        ],
      },

      relatedReading: {
        title: 'قراءات ذات صلة',
        items: [
          '[أساسيات تحسين الـ prompts: 6 رافعات أساسية](/ar/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[أفضل أدوات تحسين الـ prompts للفرق 2026](/ar/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[مقاييس تقييم الـ prompts: كيفية قياس جودة الـ prompts](/ar/prompt-engineering/prompt-evaluation-metrics)',
          '[أفضل أدوات اختبار وتقييم الـ prompts 2026](/ar/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[إعداد هندسة الـ prompts للفرق الصغيرة](/ar/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[Zero-Shot مقابل Few-Shot Prompting: متى تستخدم كلًا منهما](/ar/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: 'المصادر',
        items: [
          'خطّاب، أو.، بوتس، ك.، وزهاريا، م. (2024). "DSPy: تصريف نداءات نماذج اللغة التصريحية." arXiv:2310.03714',
          'Valmeekam، ك.، وآخرون (2024). "TextGrad: التفاضل التلقائي عبر النص." arXiv:2406.07496',
          'Promptfoo (مفتوح المصدر): https://github.com/promptfoo/promptfoo',
          'Schulhoff، س.، وآخرون (2024). "تقرير الـ Prompt: مسح منهجي لتقنيات الـ Prompting." arXiv:2406.06608',
        ],
      },
    },
  },

  ko: {
    freshness_tier: 'evergreen',
    theme: 'Tools & Platforms',
    title: '수동 vs 자동 프롬프트 최적화: 언제 반복하고 언제 자동화할 것인가',
    seoTitle: '수동 vs 자동 최적화: 접근 방식 선택 가이드',
    metaDescription: '수동 vs 자동 프롬프트 최적화: 프롬프트 수와 리소스에 따라 선택하십시오. 언제 직접 반복하고 언제 자동화할지에 관한 의사결정 프레임워크 및 비교.',
    intro: '**프롬프트 최적화는 수동(직접 프롬프트를 재작성)이나 자동(프레임워크가 재작성)으로 수행할 수 있습니다.** 수동 최적화는 완전한 제어권을 제공하지만 프로덕션 프롬프트 ~50개까지만 확장됩니다. 자동 최적화(DSPy, TextGrad, Promptfoo)는 100개 이상으로 확장되지만 레이블이 지정된 학습 데이터와 메트릭 정의가 필요합니다. 이 가이드는 각 방법을 언제 사용할지, 그리고 어떻게 함께 활용할지 설명합니다.',
    publishDate: '2026-04-26',
    dateModified: '2026-05-05',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    audience: '수동 반복과 자동화 중 하나를 선택하는 개발자 및 프롬프트 엔지니어',
    primaryTerm: '프롬프트 최적화',
    aboutTopics: ['프롬프트 최적화', 'DSPy', '자동화', '확장성'],
    leadAnswerBlock: '**수동 vs 자동 프롬프트 최적화는 규모에 따른 결정입니다.** 수동: 단일 태스크에서 가장 빠르고, 완전한 제어 가능하지만 50개 이상의 프롬프트에는 확장되지 않습니다. 자동: 설정이 느리고 평가 메트릭이 필요하지만 100개 이상의 프롬프트로 확장됩니다. 선택 기준: (1) 현재 프롬프트 수는? (2) 레이블이 지정된 예시가 있습니까? (3) 최적화가 일회성입니까, 아니면 지속적입니까?',
    quickFacts: [
      '수동 최적화: 프롬프트당 2–4회 반복, 완전한 제어, 학습 데이터 불필요, 프로덕션 프롬프트 50개 미만에 적합',
      '자동 최적화: 1–2회 학습 사이클, 레이블 예시 + 메트릭 필요, 100개 이상의 프롬프트로 확장, 수일 내 설정 완료',
      '하이브리드 방식: 수동으로 시작하여 20개 이상의 프롬프트와 평가 데이터가 확보되면 자동화로 전환',
      'DSPy는 모델이 스스로 최적화하도록 가르칩니다 — 각 최적화 실행에서 수동 재작성 없이 더 나은 후보를 생성합니다',
      '의사결정 기준: 50개 미만 = 수동. 50–100개 = 하이브리드. 100개 이상 = 자동화.',
      '비용 차이: 수동(엔지니어링 시간) vs 자동화(컴퓨팅 + 데이터 레이블링). 20개 이상의 프롬프트 변형을 출시하는 팀에는 자동화가 유리합니다',
    ],
    toc: [
      { label: '핵심 요점', anchor: 'key-takeaways' },
      { label: '수동 vs 자동: 빠른 비교', anchor: 'manual-vs-automated-comparison' },
      { label: '수동 최적화가 유리한 경우', anchor: 'when-manual-wins' },
      { label: '자동 최적화가 유리한 경우', anchor: 'when-automated-wins' },
      { label: '도구 비교: DSPy, TextGrad, Promptfoo', anchor: 'tools-dspy-textgrad-promptfoo' },
      { label: '하이브리드 워크플로우: 수동 + 자동 병용', anchor: 'hybrid-workflow' },
      { label: '비용 분석: 수동 vs 자동', anchor: 'cost-analysis' },
      { label: '흔한 실수', anchor: 'common-mistakes' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '관련 읽기', anchor: 'related-reading' },
      { label: '출처', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '수동 vs 자동 프롬프트 최적화: 언제 반복하고 언제 자동화할 것인가',
      description: '수동 vs 자동 프롬프트 최적화: 프롬프트 수에 따라 선택하십시오. 확장성을 위한 의사결정 프레임워크.',
      datePublished: '2026-04-26',
      dateModified: '2026-05-05',
      url: 'https://www.promptquorum.com/ko/prompt-engineering/manual-vs-automated-prompt-optimization',
      inLanguage: 'ko',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      keywords: ['프롬프트 최적화', '수동 최적화', '자동 최적화', 'DSPy', 'TextGrad', 'Promptfoo', 'LLM 확장'],
      about: [
        { '@type': 'Thing', name: '수동 프롬프트 최적화' },
        { '@type': 'Thing', name: '자동 프롬프트 최적화' },
        { '@type': 'Thing', name: 'DSPy' },
        { '@type': 'Thing', name: 'TextGrad' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '수동 vs 자동 최적화: 기능 비교',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '수동 최적화', description: '테스트 실패를 기반으로 프롬프트를 직접 재작성합니다. 완전한 제어, 학습 데이터 불필요, 프롬프트 ~50개까지 확장 가능.' },
        { '@type': 'ListItem', position: 2, name: 'DSPy (자동화)', description: '모델이 스스로 최적화하도록 가르치는 Stanford 프레임워크. 프롬프트 100개 이상으로 확장. 메트릭 필요.' },
        { '@type': 'ListItem', position: 3, name: 'TextGrad (자동화)', description: '그래디언트 기반 프롬프트 최적화: 점수를 개선하기 위해 변경할 단어를 계산합니다. 고급, 연구 수준.' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo (하이브리드)', description: '테스트, 회귀 탐지, 수동 A/B 비교를 위한 CLI 도구. 완전한 자동화는 아니지만 수동 작업을 구조화합니다.' },
        { '@type': 'ListItem', position: 5, name: '하이브리드 워크플로우', description: '1–3개 프롬프트는 수동, 규모 확장 시 변형은 자동화. 여러 프롬프트 버전을 출시하는 팀에 최적.' },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: '핵심 요점',
        items: [
          '수동 최적화 = 직접 프롬프트를 재작성합니다. 50개 미만 및 완전한 제어가 필요한 경우에 적합하며, 확장되지 않습니다.',
          '자동 최적화 = 프레임워크가 프롬프트를 재작성합니다. 100개 이상에 적합하며, 레이블 데이터와 메트릭이 필요합니다.',
          '하이브리드 = 수동으로 시작하여 평가 데이터와 20개 이상의 프롬프트가 확보되면 자동화로 전환합니다.',
          '도구: DSPy(연구 및 확장에 최적), TextGrad(고급/연구), Promptfoo(테스트 + 수동, 완전 자동화 아님).',
          '비용 분기점: ~50개 프롬프트. 미만이면 수동이 빠릅니다. 초과하면 자동화가 엔지니어 시간을 절약합니다.',
          '항상 단일 태스크에서 수동으로 시작하고, 평가 데이터를 생성한 후 변형 및 확장을 위해 자동화로 이전하십시오.',
        ],
      },

      comparison: {
        title: '수동 vs 자동: 빠른 비교',
        content: '**세 가지 요소를 기준으로 선택하십시오: 프롬프트 수, 평가 데이터, 확장 필요성.** 수동 최적화는 테스트 실패를 기반으로 프롬프트를 재작성하는 것으로, 직접 제어할 수 있지만 프로덕션 프롬프트 ~50개 이상으로는 확장되지 않습니다. 자동 최적화는 프레임워크(DSPy, TextGrad)를 사용하여 알고리즘으로 프롬프트를 재작성하며, 100개 이상으로 확장되지만 레이블 데이터와 메트릭이 필요합니다. 세 번째 검증 단계—[프롬프트 최적화 플랫폼](/features)을 이용해 동일한 프롬프트를 여러 모델에서 실행—은 프로덕션으로 확정하기 전에 어느 버전이 가장 잘 일반화되는지 확인합니다.',
        columns: ['요인', '수동 최적화', '자동 최적화'],
        rows: [
          { '요인': '최적 프롬프트 수', '수동 최적화': '50개 미만 (제어 중심)', '자동 최적화': '100개 이상 (확장 중심)' },
          { '요인': '학습 데이터 필요 여부', '수동 최적화': '불필요', '자동 최적화': '필요 (50–500개 예시)' },
          { '요인': '설정 시간', '수동 최적화': '프롬프트당 1–2시간', '자동 최적화': '일회성 2–5일' },
          { '요인': '프롬프트당 비용', '수동 최적화': '$1,000–5,000 (인건비)', '자동 최적화': '$100–500 (컴퓨팅 + 레이블)' },
        ],
      },

      manualWins: {
        title: '수동 최적화가 유리한 경우',
        items: [
          '프로덕션 프롬프트가 50개 미만인 경우 — 데이터 및 메트릭 설정의 오버헤드가 가치가 없습니다',
          '새롭거나 일회성 태스크 — 최적화 방향이 아직 명확하지 않으므로 인간의 통찰력이 더 빠릅니다',
          '높은 제어 요건 — 컴플라이언스, 브랜드 보이스, 창작 글쓰기 — 모든 변경을 직접 승인해야 하는 경우',
          '소규모 팀 (5명 미만) — 수동 반복이 빠르며 팀원들이 변경 이유를 이해합니다',
          '평가 데이터 부족 — 레이블 예시가 50개 미만이므로 자동 학습 시 과적합이 발생합니다',
        ],
      },

      automatedWins: {
        title: '자동 최적화가 유리한 경우',
        items: [
          '프로덕션 프롬프트가 100개 이상인 경우 — 수동 반복의 엔지니어링 비용이 과도해집니다',
          '규모에서의 변형 테스트 — A/B 테스트를 위해 10개 이상의 프롬프트 버전이 필요하며, 자동화가 더 빠르게 생성합니다',
          '지속적인 최적화 — 사용자 입력이 변화함에 따라 프롬프트가 저하됩니다; 자동화 시스템은 매월 재학습할 수 있습니다',
          '메트릭 기반 워크플로우 — 태스크에 명확한 성공 메트릭(정확도, BLEU, LLM 판정 점수)이 있으며 주관적 품질이 아닌 경우',
          '대규모 팀 (10명 이상) — 수동 변경의 조율 오버헤드가 높아집니다; 자동화는 최적화를 재현 가능하게 만듭니다',
        ],
      },

      tools: {
        title: '도구 비교: DSPy, TextGrad, Promptfoo',
        content: '**자동 또는 반자동 최적화를 지원하는 세 가지 주요 도구:**',
        columns: ['도구', '방식', '성숙도', '규모', '최적 용도'],
        rows: [
          { '도구': 'DSPy (Stanford)', '방식': '학습을 통한 프롬프트 최적화', '성숙도': '프로덕션 지원 (오픈소스)', '규모': '50–500개 프롬프트', '최적 용도': '프롬프트 변형을 확장하는 팀' },
          { '도구': 'TextGrad', '방식': '그래디언트 기반 프롬프트 재작성', '성숙도': '연구 단계 (신규, 아직 프로덕션 미지원)', '규모': '10–100개 프롬프트', '최적 용도': '연구, 최첨단 최적화' },
          { '도구': 'Promptfoo', '방식': '테스트 + 회귀 탐지 (수동 보조)', '성숙도': '프로덕션 지원 (오픈소스)', '규모': '어떤 규모에도 적합', '최적 용도': 'CI/CD 테스트, 완전 자동화 아님' },
        ],
      },

      hybrid: {
        title: '하이브리드 워크플로우: 수동 + 자동 병용',
        content: '실제 환경은 하이브리드입니다. 직관과 평가 데이터를 구축하기 위해 수동 최적화로 시작하십시오. 규모가 확보되면 자동화로 전환하십시오.',
        numberedItems: [
          '1–4주차: 1–3개의 핵심 프롬프트를 수동으로 최적화합니다. 프롬프트당 50개 이상의 레이블 예시를 생성합니다.',
          '4–8주차: 평가 메트릭을 구축합니다(정확도, BLEU, 또는 LLM 판정). Promptfoo A/B 테스트를 실행하여 수동 작업을 검증합니다.',
          '8주차 이후: DSPy를 설정합니다. 증가하는 평가 데이터셋으로 재학습합니다. 자동화를 통해 새로운 프롬프트 변형을 추가합니다.',
          '프로덕션: DSPy 최적화 변형을 배포합니다. 매 커밋 시 Promptfoo로 회귀 테스트를 수행합니다.',
        ],
      },

      costAnalysis: {
        title: '비용 분석: 수동 vs 자동',
        content: '**몇 개의 프롬프트에서 자동화가 수동보다 저렴해집니까?** 손익분기점은 약 50–80개 프롬프트입니다.',
        items: [
          '수동 비용/프롬프트: 4–8시간 엔지니어링 시간 × $150/시간 = $600–1,200 직접 인건비. 리서치, 테스트, 문서화 추가 = 프롬프트당 $1,500–5,000 합계.',
          '자동화 일회성 비용: DSPy 설정 = $2,000–5,000 (2–5일 엔지니어 + 컴퓨팅). 이후 프롬프트당 비용 = $100–300 (컴퓨팅 + 레이블링).',
          '손익분기점: ~60개 프롬프트에서 자동화 총비용 = $2,000 + (60 × $200) = $14,000. 수동 총비용 = 60 × $3,000 = $180,000. 자동화가 13배 유리합니다.',
          '30개 미만 프롬프트: 수동이 더 빠르고 저렴합니다. 자동화 설정의 오버헤드가 정당화되지 않습니다.',
          '100개 이상 프롬프트: 자동화가 수동보다 5–10배 저렴합니다.',
        ],
      },

      mistakes: {
        title: '흔한 실수',
        items: [
          '레이블 데이터 없이 DSPy 실행 — DSPy는 예시에서 학습합니다. 50개 이상의 레이블 (입력, 출력) 쌍 없이는 노이즈로 학습합니다. 수동 반복을 먼저 수행하고, 쌍을 문서화한 후 이를 학습 데이터로 사용하십시오.',
          '모호한 메트릭 선택 — DSPy와 TextGrad는 정량화된 메트릭(정확도, F1, BLEU)이 필요합니다. "품질"과 같이 모호한 메트릭은 최적화를 안내할 수 없습니다. 성공을 정의하십시오: 테스트 세트 정확도, 부분 문자열 일치, 또는 LLM 판정 8/10 이상.',
          '자동화가 새로운 기법을 발견할 것이라는 기대 — DSPy는 알려진 구조 내에서 텍스트를 최적화하지만 chain-of-thought나 few-shot 예시를 스스로 발견하지는 않습니다. 먼저 구조(태스크 서명)를 정의해야 합니다.',
          '30개 미만의 프롬프트에서 자동화 설정 — 자동화 오버헤드(설정, 레이블링, 메트릭)는 2–5주입니다. 30개 미만의 프롬프트에서는 수동 반복이 2–4배 빠릅니다. 50개 이상에서 자동화로 전환하십시오.',
          '지속적인 모니터링 없이 자동화 — 사용자 입력이 변화함에 따라 프롬프트가 저하됩니다. 매월 재학습하십시오: 새 입력 → 업데이트된 평가 세트 → DSPy 재실행 → 테스트 → 배포. 최적화를 일회성이 아닌 지속적인 과정으로 취급하십시오.',
        ],
      },

      faq: {
        title: '자주 묻는 질문',
        faqs: [
          { q: '수동 최적화와 자동 최적화를 혼합할 수 있습니까?', a: '예, 이것이 모범 사례입니다. 핵심 태스크(1–3개 프롬프트)는 수동으로, 변형 및 확장은 자동화로 수행하십시오. 모든 변형을 테스트하려면 Promptfoo를 사용하고, 새 변형을 생성하려면 DSPy를 사용하십시오.' },
          { q: 'DSPy는 모든 모델에서 작동합니까?', a: 'DSPy는 API를 통해 접근 가능한 모든 모델에서 작동합니다: GPT-5.5, Claude, Gemini, Cohere, Ollama. 비전 모델은 아직 지원되지 않습니다. 로컬 모델은 지원되지만 속도가 느립니다.' },
          { q: 'DSPy에 레이블 예시가 몇 개 필요합니까?', a: '간단한 태스크(분류, 추출)에는 최소 30–50개가 필요합니다. 복잡한 태스크(요약, 추론)에는 100–500개가 유리합니다. 예시가 많을수록 최적화가 더 견고해집니다.' },
          { q: 'DSPy 실행의 컴퓨팅 비용은 얼마입니까?', a: '100개 예시에 대한 DSPy 최적화 실행 1회에 ~$5–20가 소요됩니다(API 호출). 후보 프롬프트 10개 × 예시 100개 = 호출 1,000건 = 최적화 사이클당 $50–200. 월별 재학습 = $50–200/월.' },
          { q: 'DSPy로 최적화된 프롬프트를 프로덕션에 배포할 수 있습니까?', a: '예. DSPy는 일반 텍스트 프롬프트를 출력합니다. 이를 프로덕션 시스템(PromptQuorum, LangChain, Vellum 등)에 복사하여 정상적으로 제공하십시오. 프로덕션에서는 별도의 DSPy 런타임이 필요하지 않습니다.' },
          { q: '자동 최적화가 더 나은 프롬프트를 보장합니까?', a: '아니요. 메트릭이 잘못된 경우, DSPy는 잘못된 것을 최적화합니다. 평가 데이터에 편향이 있다면, DSPy는 편향을 학습합니다. 쓰레기가 들어가면 쓰레기가 나옵니다.' },
          { q: '창작 태스크에 자동 최적화를 사용해야 합니까?', a: '아직은 그렇지 않습니다. 자동화는 메트릭 기반 태스크(분류, 추출, 요약)에 가장 잘 작동합니다. 창작 태스크(카피라이팅, 스토리텔링)는 명확한 메트릭이 없으므로 수동 제어가 더 적합합니다.' },
          { q: 'DSPy는 여러 모델을 동시에 최적화할 수 있습니까?', a: 'DSPy는 한 번에 하나의 모델에 대해 최적화합니다. GPT-5.5와 Claude 모두에 최적화하려면 DSPy를 두 번 실행(모델당 한 번)하고 결과를 비교하십시오. 하이브리드 방식: 선호 모델로 최적화한 후 다른 모델에서 수동으로 테스트하십시오.' },
        ],
      },

      relatedReading: {
        title: '관련 읽기',
        items: [
          '[프롬프트 최적화의 기초: 6가지 핵심 레버](/ko/prompt-engineering/fundamentals-of-prompt-optimization)',
          '[팀을 위한 최고의 프롬프트 최적화 도구 2026](/ko/prompt-engineering/best-prompt-optimization-tools-for-teams)',
          '[프롬프트 평가 메트릭: 프롬프트 품질 측정 방법](/ko/prompt-engineering/prompt-evaluation-metrics)',
          '[최고의 프롬프트 테스트 및 평가 도구 2026](/ko/prompt-engineering/best-prompt-testing-evaluation-tools)',
          '[소규모 팀을 위한 프롬프트 엔지니어링 설정](/ko/prompt-engineering/prompt-engineering-setup-small-teams)',
          '[Zero-Shot vs Few-Shot Prompting: 각각 언제 사용할 것인가](/ko/prompt-engineering/zero-shot-vs-few-shot)',
        ],
      },

      sources: {
        title: '출처',
        items: [
          'Khattab, O., Potts, C., & Zaharia, M. (2024). "DSPy: Compiling Declarative Language Model Calls into State-of-the-art Retrieval-Augmented Systems." arXiv:2310.03714',
          'Valmeekam, K., et al. (2024). "TextGrad: Automatic Differentiation via Text." arXiv:2406.07496',
          'Promptfoo GitHub: https://github.com/promptfoo/promptfoo',
          'Schulhoff, S., et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608',
        ],
      },
    },
  },
};
