// Slug: manual-vs-automated-prompt-optimization
// Generated: 2026-05-05T12:30:00.000Z

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
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
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=en',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
        content: '**Choose based on three factors: prompt count, evaluation data, and scaling needs.** Manual optimization is rewriting a prompt based on test failures — it is direct control but does not scale beyond ~50 production prompts. Automated optimization uses frameworks (DSPy, TextGrad) to rewrite prompts algorithmically — it scales to 100+ but requires labeled data and metrics.',
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
          { q: 'Does DSPy work with all models?', a: 'DSPy works with any API-accessible model: GPT-4o, Claude, Gemini, Cohere, Ollama. It does not work with vision models yet. Local models are supported but slower.' },
          { q: 'How many labeled examples do I need for DSPy?', a: 'Minimum 30–50 for simple tasks (classification, extraction). Complex tasks (summarization, reasoning) benefit from 100–500. More examples = more robust optimization.' },
          { q: 'What is the compute cost of running DSPy?', a: 'One DSPy optimization run on 100 examples costs ~$5–20 (API calls). Running 10 candidate prompts × 100 examples = 1,000 calls = $50–200 per optimization cycle. Monthly retraining = $50–200/month.' },
          { q: 'Can I deploy a DSPy-optimized prompt in production?', a: 'Yes. DSPy outputs a plain-text prompt. Copy it to your production system (PromptQuorum, LangChain, Vellum, etc.) and serve it normally. No special DSPy runtime needed in production.' },
          { q: 'Does automated optimization guarantee better prompts?', a: 'No. If your metric is wrong, DSPy optimizes for the wrong thing. If your evaluation data is biased, DSPy learns the bias. Garbage in, garbage out.' },
          { q: 'Should I use automated optimization for creative tasks?', a: 'Not yet. Automation works best on metric-driven tasks (classification, extraction, summarization). Creative tasks (copywriting, storytelling) lack clear metrics, so manual control is better.' },
          { q: 'Can DSPy optimize prompts for multiple models at once?', a: 'DSPy optimizes for one model at a time. To optimize for GPT-4o AND Claude, run DSPy twice (once per model) and compare results. Hybrid approach: optimize for your preferred model, then test on others manually.' },
        ],
      },

      relatedReading: {
        title: 'Related Reading',
        items: [
          '[Fundamentals of Prompt Optimization: 6 Core Levers](/prompt-engineering/fundamentals-of-prompt-optimization?lang=en)',
          '[Best Prompt Optimization Tools for Teams 2026](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=en)',
          '[Prompt Evaluation Metrics: How to Measure Prompt Quality](/prompt-engineering/prompt-evaluation-metrics?lang=en)',
          '[Best Prompt Testing and Evaluation Tools 2026](/prompt-engineering/best-prompt-testing-evaluation-tools?lang=en)',
          '[Prompt Engineering Setup for Small Teams](/prompt-engineering/prompt-engineering-setup-small-teams?lang=en)',
          '[Zero-Shot vs Few-Shot Prompting: When to Use Each](/prompt-engineering/zero-shot-vs-few-shot?lang=en)',
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
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=de',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
          { q: 'Funktioniert DSPy mit allen Modellen?', a: 'DSPy funktioniert mit jedem API-zugänglichen Modell: GPT-4o, Claude, Gemini, Cohere, Ollama. Es funktioniert noch nicht mit Vision-Modellen. Lokale Modelle (Ollama, LM Studio) werden unterstützt, sind aber langsamer.' },
          { q: 'Wie viele gekennzeichnete Beispiele brauche ich für DSPy?', a: 'Minimum 30–50 für einfache Aufgaben (Klassifizierung, Extraktion). Komplexe Aufgaben (Zusammenfassung, Reasoning) profitieren von 100–500. Mehr Beispiele = robustere Optimierung.' },
          { q: 'Was sind Berechnungskosten für DSPy?', a: 'Ein DSPy-Optimierungsdurchlauf auf 100 Beispielen kostet ~5–20 EUR (API-Aufrufe zu Ihrem Modell). 10 Kandidaten-Prompts × 100 Beispiele = 1.000 Aufrufe = 50–200 EUR pro Optimierungszyklus. Monatliches Umtraining auf 100 neuen Beispielen = 50–200 EUR/Monat.' },
          { q: 'Kann ich einen DSPy-optimierten Prompt in Produktion deployen?', a: 'Ja. DSPy gibt einen Klartxt-Prompt aus. Kopieren Sie ihn in Ihr Produktionssystem (PromptQuorum, LangChain, Vellum, etc.) und servieren Sie ihn normal. Keine spezielle DSPy-Laufzeit nötig in Produktion.' },
          { q: 'Garantiert automatisierte Optimierung bessere Prompts?', a: 'Nein. Wenn Ihre Metrik falsch ist (z.B. für Länge statt Genauigkeit optimieren), optimiert DSPy für das Falsche. Wenn Ihre Evaluierungsdaten verzerrt sind, lernt DSPy die Verzerrung. Müll rein, Müll raus.' },
          { q: 'Sollte ich automatisierte Optimierung für kreative Aufgaben verwenden?', a: 'Noch nicht. Automatisierung funktioniert beste bei metrik-gesteuerten Aufgaben (Klassifizierung, Extraktion, Zusammenfassung, Reasoning). Kreative Aufgaben (Copywriting, Geschichtenerzählen) fehlen klare Metriken, daher ist manuelle Kontrolle besser.' },
          { q: 'Kann DSPy Prompts für mehrere Modelle gleichzeitig optimieren?', a: 'DSPy optimiert jeweils für ein Modell. Um für GPT-4o UND Claude zu optimieren, führen Sie DSPy zweimal aus (einmal pro Modell) und vergleichen Ergebnisse. Hybrid-Ansatz: optimieren Sie für Ihr bevorzugtes Modell, testen Sie dann manuell auf anderen.' },
          { q: 'Muss ich bei der Verwendung von DSPy oder Prompt-Optimierungstools die DSGVO beachten?', a: 'Ja. Wenn Sie Nutzerdaten, Eingabe-Ausgabe-Beispiele oder Trainingsdaten für Optimierung verwenden, müssen Sie DSGVO-Artikel 28 (Datenverarbeitungsverträge) einhalten. Dokumentieren Sie: wo Daten gespeichert, wer darauf zugreift, wie lange es aufbewahrt wird. BSI-Grundschutz-Kataloge helfen mit IT-Sicherheits-Checklisten.' },
          { q: 'Ist DSPy oder automatisierte Prompt-Optimierung für deutsche KMUs geeignet?', a: 'Ja. Für Mittelstandsunternehmen mit <100 Produktions-Prompts ist hybrid empfohlen: manuell für Kern-Prompts, dann DSPy einmal Sie 50+ Beispiele haben. Beachten Sie: BSI-Grundschutz-Anforderungen für kritische Prozesse, möglicherweise TISAX-Zertifizierung. Beginnen Sie klein, dokumentieren Sie, dann skalieren Sie.' },
        ],
      },

      relatedReading: {
        title: 'Weiterführende Lektüre',
        items: [
          '[Grundlagen der Prompt-Optimierung: 6 Kernhebel](/prompt-engineering/fundamentals-of-prompt-optimization?lang=de)',
          '[Beste Prompt-Optimierungstools für Teams 2026](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=de)',
          '[Prompt-Evaluierungsmetriken: Wie man Prompt-Qualität misst](/prompt-engineering/prompt-evaluation-metrics?lang=de)',
          '[Beste Prompt-Test- und Evaluierungstools 2026](/prompt-engineering/best-prompt-testing-evaluation-tools?lang=de)',
          '[Prompt-Engineering-Setup für kleine Teams](/prompt-engineering/prompt-engineering-setup-small-teams?lang=de)',
          '[Zero-Shot vs Few-Shot Prompting: Wann Sie jedes verwenden](/prompt-engineering/zero-shot-vs-few-shot?lang=de)',
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
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=fr',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
          { q: 'DSPy fonctionne-t-il avec tous les modèles ?', a: 'DSPy fonctionne avec n\'importe quel modèle accessible par API : GPT-4o, Claude, Gemini, Cohere, Ollama. Il ne fonctionne pas encore avec modèles vision. Modèles locaux (Ollama, LM Studio) sont supportés mais plus lents.' },
          { q: 'Combien d\'exemples étiquetés faut-il pour DSPy ?', a: 'Minimum 30–50 pour tâches simples (classification, extraction). Tâches complexes (résumé, raisonnement) bénéficient de 100–500. Plus d\'exemples = optimisation plus robuste.' },
          { q: 'Quel est le coût de calcul d\'exécuter DSPy ?', a: 'Une exécution d\'optimisation DSPy sur 100 exemples coûte ~5–20 EUR (appels API à votre modèle). 10 prompts candidats × 100 exemples = 1 000 appels = 50–200 EUR par cycle optimisation. Réentraînement mensuel sur 100 exemples nouveaux = 50–200 EUR/mois.' },
          { q: 'Puis-je déployer prompt optimisé DSPy en production ?', a: 'Oui. DSPy donne un prompt texte clair. Copiez-le dans système production (PromptQuorum, LangChain, Vellum, etc.) et servez-le normalement. Aucun runtime DSPy spécial requis en production.' },
          { q: 'L\'optimisation automatisée garantit-elle mieux prompts ?', a: 'Non. Si votre métrique est mauvaise (ex : optimiser pour longueur au lieu de précision), DSPy optimise pour le mauvais objectif. Si données d\'évaluation sont biaisées, DSPy apprend le biais. Ordures rentrées, ordures sorties.' },
          { q: 'Dois-je utiliser optimisation automatisée pour tâches créatives ?', a: 'Pas encore. Automatisation fonctionne mieux sur tâches pilotées par métrique (classification, extraction, résumé). Tâches créatives (rédaction, narration) manquent métriques claires, donc contrôle manuel est meilleur.' },
          { q: 'DSPy peut-il optimiser prompts pour plusieurs modèles à la fois ?', a: 'DSPy optimise pour un modèle à la fois. Pour optimiser pour GPT-4o ET Claude, exécutez DSPy deux fois (une fois par modèle) et comparez résultats. Approche hybride : optimisez pour modèle préféré, puis testez manuellement sur autres.' },
        ],
      },

      relatedReading: {
        title: 'Lectures complémentaires',
        items: [
          '[Fondamentaux de l\'optimisation de prompts : 6 leviers cœur](/prompt-engineering/fundamentals-of-prompt-optimization?lang=fr)',
          '[Meilleures outils d\'optimisation de prompts pour équipes 2026](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=fr)',
          '[Métriques d\'évaluation de prompts : comment mesurer qualité prompt](/prompt-engineering/prompt-evaluation-metrics?lang=fr)',
          '[Meilleurs outils test et évaluation prompts 2026](/prompt-engineering/best-prompt-testing-evaluation-tools?lang=fr)',
          '[Configuration d\'ingénierie de prompts pour petites équipes](/prompt-engineering/prompt-engineering-setup-small-teams?lang=fr)',
          '[Zero-Shot vs Few-Shot Prompting : quand utiliser chacun](/prompt-engineering/zero-shot-vs-few-shot?lang=fr)',
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
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=ja',
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
          { q: 'DSPyはすべてのモデルで動く？', a: 'DSPyはAPI経由でアクセス可能なモデルで動作：GPT-4o、Claude、Gemini、Cohere、Ollama。ビジョンモデルはまだ未対応。ローカルモデルは対応するが遅い。' },
          { q: 'DSPyにはラベル例をいくつ必要？', a: '単純タスク(分類、抽出)は最小30–50。複雑タスク(要約、推論)は100–500のメリット。例が多い = より堅牢な最適化。' },
          { q: 'DSPy実行の計算コストは？', a: '100例1回のDSPy最適化実行 = ~$5–20(API呼び出し)。10候補プロンプト × 100例 = 1,000呼び出し = $50–200/最適化サイクル。月単位リトレーニング = $50–200/月。' },
          { q: '本番でDSPy最適化プロンプトをデプロイできる？', a: 'はい。DSPyは平文プロンプトを出力。PromptQuorum、LangChain、Vellum等の本番システムにコピー、普通に提供。本番でDSPyランタイム不要。' },
          { q: '自動最適化で必ずプロンプトが良くなる？', a: 'いいえ。メトリクスが間違っていれば、DSPyは間違ったものを最適化。評価データが偏っていれば、バイアスを学習。ゴミ入 = ゴミ出。' },
          { q: '創作タスクに自動最適化を使うべき？', a: 'まだ。自動化はメトリクック駆動タスク(分類、抽出、要約)で最適。創作(コピーライティング、ストーリー)は明確メトリクスが欠けるので、マニュアル制御が最適。' },
          { q: 'DSPyは複数モデルを同時に最適化できる？', a: 'いいえ、1回に1モデル。GPT-4o と Claude 両方に最適化するには、DSPyを2回実行(各モデル)して結果を比較。ハイブリッド：好みモデルで最適化、他は手動テスト。' },
        ],
      },

      relatedReading: {
        title: '関連記事',
        items: [
          '[プロンプト最適化の基礎：6つのコア・レバー](/prompt-engineering/fundamentals-of-prompt-optimization?lang=ja)',
          '[チーム向けプロンプト最適化ツールベスト2026](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=ja)',
          '[プロンプト評価メトリクス：プロンプト品質を測定する方法](/prompt-engineering/prompt-evaluation-metrics?lang=ja)',
          '[プロンプト テスト・評価ツール ベスト2026](/prompt-engineering/best-prompt-testing-evaluation-tools?lang=ja)',
          '[小規模チーム向けプロンプトエンジニアリング セットアップ](/prompt-engineering/prompt-engineering-setup-small-teams?lang=ja)',
          '[ゼロショット vs 少数ショット：いつどちらを使う](/prompt-engineering/zero-shot-vs-few-shot?lang=ja)',
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
      url: 'https://www.promptquorum.com/prompt-engineering/manual-vs-automated-prompt-optimization?lang=zh',
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
          { q: 'DSPy能用所有模型吗？', a: 'DSPy适用任何API访问的模型：GPT-4o、Claude、Gemini、Cohere、Ollama。视觉模型还不支持。本地模型支持但较慢。' },
          { q: 'DSPy需要多少标记例子？', a: '简单任务（分类、提取）最少30–50。复杂任务（总结、推理）受益于100–500。更多例子 = 更稳健优化。' },
          { q: '运行DSPy的计算成本？', a: '100例一次DSPy优化运行 = 约$5–20（API调用）。10候选提示词 × 100例 = 1,000调用 = 每优化周期$50–200。月度重训 = $50–200/月。' },
          { q: '能在生产部署DSPy优化提示词吗？', a: '能。DSPy输出纯文本提示词。复制到生产系统（PromptQuorum、LangChain、Vellum等）并正常提供。生产无需DSPy运行时。' },
          { q: '自动优化保证提示词变好吗？', a: '不保证。如果指标错了，DSPy优化错的东西。如果评估数据有偏差，学习偏差。垃圾进 = 垃圾出。' },
          { q: '创意任务应该用自动优化吗？', a: '还不应该。自动化最适合指标驱动任务（分类、提取、总结）。创意任务（文案、故事）缺乏明确指标，手动控制更好。' },
          { q: 'DSPy能同时为多个模型优化吗？', a: '不能，一次一个模型。要为GPT-4o和Claude都优化，运行DSPy两次（各模型）并比较结果。混合方法：为偏好模型优化，其他手动测试。' },
        ],
      },

      relatedReading: {
        title: '延伸阅读',
        items: [
          '[提示词优化基础：6个核心杠杆](/prompt-engineering/fundamentals-of-prompt-optimization?lang=zh)',
          '[2026年团队提示词优化工具最佳](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=zh)',
          '[提示词评估指标：如何测量提示词质量](/prompt-engineering/prompt-evaluation-metrics?lang=zh)',
          '[2026年提示词测试和评估工具最佳](/prompt-engineering/best-prompt-testing-evaluation-tools?lang=zh)',
          '[小团队提示词工程设置](/prompt-engineering/prompt-engineering-setup-small-teams?lang=zh)',
          '[零次提示 vs 少次提示：何时使用各自](/prompt-engineering/zero-shot-vs-few-shot?lang=zh)',
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
};
