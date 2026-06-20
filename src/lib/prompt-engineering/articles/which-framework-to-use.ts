// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: which-framework-to-use
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'Which Prompt Framework Should You Use?',
      intro: 'The right prompt framework depends on your task, your experience level, and whether you are optimizing for creativity, precision, or reliable reasoning. PromptQuorum makes this choice easier by including multiple frameworks, an automatic selector, and a custom framework builder directly in the app.',
      publishDate: '2026-03-24',
      seoTitle: 'Choose the Right Prompt Framework for Your Task 2026',
      metaDescription: 'Compare prompt frameworks: Chain-of-Thought, ReAct, Tree-of-Thought. Learn pros/cons for each use case and pick the best for your LLM application.',
      readTime: '9 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Which Prompt Framework Should You Use?',
        description: 'How to choose the right prompt framework for GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models — and how PromptQuorum automates framework selection.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        'url': 'https://www.promptquorum.com/prompt-engineering/which-prompt-framework-should-you-use',
        keywords: ['prompt frameworks', 'prompt engineering', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Choose the Right Prompt Framework',
        'step': [
          { '@type': 'HowToStep', 'name': 'Identify Your Task Type', 'text': 'Determine if you need structured reasoning (Chain-of-Thought), tool use (ReAct), multi-step thinking (Tree-of-Thought), or creative output. Task type drives framework choice.' },
          { '@type': 'HowToStep', 'name': 'Check Model Compatibility', 'text': 'Some frameworks work better with specific models. GPT-5.5 and Claude Opus 4.8 handle complex frameworks. Local models via Ollama may prefer simpler structures.' },
          { '@type': 'HowToStep', 'name': 'Test Framework on Your Data', 'text': 'Run your task with 2–3 candidate frameworks. Measure output quality, latency, and cost. Pick the framework with the best results for your use case.' },
          { '@type': 'HowToStep', 'name': 'Document Your Choice', 'text': 'Record which framework you chose and why in your prompt library. This makes results reproducible across teams and models.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the best prompt framework for all tasks?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'There is no universal best framework. Chain-of-Thought works for reasoning, ReAct for tool use, Tree-of-Thought for complex multi-step tasks. Test frameworks on your specific task to find the best fit.' }
          },
          {
            '@type': 'Question',
            'name': 'Do prompt frameworks work with local LLMs like Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Frameworks work with GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models via Ollama or LM Studio. Some complex frameworks (e.g., Tree-of-Thought) may require larger local models (13B+).' }
          },
          {
            '@type': 'Question',
            'name': 'Can I switch frameworks for the same task?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Framework choice is iterative. If Chain-of-Thought produces slow results, switch to a simpler method. If outputs lack detail, upgrade to Tree-of-Thought. Test and iterate based on results.' }
          }
        ]
      },
      sections: {
        whatFrameworksDo: {
          title: 'What Prompt Frameworks Actually Do',
          content: [
            '**Prompt frameworks give you a repeatable structure for prompts so that GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and other models know exactly what role to take, what context to use, and how to format outputs.** A framework is not a model feature; it is a template that controls how you talk to the model. When you use a consistent framework, you reduce hallucination risk because the model receives clearer objectives, constraints, and output formats.',
            'Most frameworks decompose a prompt into building blocks such as objective, role, context, constraints, and format. This structure turns a vague request like "help me with this" into a well-specified task with measurable quality. In practice, frameworks are especially helpful when you need reproducible outputs across different models and providers such as OpenAI, Anthropic, and Google DeepMind.',
          ],
        },
        frameworksAtAGlance: {
          title: 'The Major Prompt Frameworks at a Glance',
          content: [
            '**The main prompt frameworks differ in their focus: some optimize for structured reasoning, others for creativity, and others for crisp specifications.** For multi-model work across GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models via Ollama or LM Studio, you will usually rotate between a small set of well-tested frameworks.',
            'Here are the most common frameworks and what they are best for:',
          ],
          columns: ['Framework', 'Best for', 'Core idea'],
          rows: [
            { 'Framework': 'CO-STAR', 'Best for': 'Complex tasks', 'Core idea': 'Break tasks into Context, Objective, Style, Tone, Audience, Response' },
            { 'Framework': 'CRAFT',   'Best for': 'Creative work', 'Core idea': 'Focus on role, format, audience, and testing variations' },
            { 'Framework': 'SPECS',   'Best for': 'Precise outputs', 'Core idea': 'Specify Scope, Purpose, Examples, Constraints, Steps' },
            { 'Framework': 'RISEN',   'Best for': 'Iteration', 'Core idea': 'Rapidly refine prompts over multiple turns' },
            { 'Framework': 'TRACE',   'Best for': 'Reasoning', 'Core idea': 'Force the model to show Thought, Reasoning, Analysis, Conclusion, Evaluation' },
          ],
        },
        howToChooseByUseCase: {
          title: 'How to Choose a Framework by Use Case',
          content: [
            '**You should pick your prompt framework based on the output you care about most: reasoning quality, creative variation, or strict formatting.** Once you link frameworks to use cases, the choice becomes a simple rule rather than a guessing game.',
            'Typical mappings:',
          ],
          items: [
            'For research summaries, technical analysis, or multi-step workflows, use a reasoning-first framework such as TRACE or CO-STAR.',
            'For blog posts, ad copy, and ideation, use CRAFT or a similar creativity-oriented structure that emphasizes audience, tone, and variation.',
            'For data extraction, reporting, or code refactoring, use SPECS or another specification-heavy template that locks down format and constraints.',
          ],
        },
        whenToSwitch: {
          title: 'When You Should Switch Frameworks',
          content: [
            '**You should switch prompt frameworks when your current structure cannot express your constraints or when outputs from multiple models drift away from your required format.** This is easiest to see when you run the same task across several models and notice inconsistent headings, missing fields, or over-creative phrasing.',
            'Clear signals that a different framework is better suited:',
          ],
          items: [
            'You need strict JSON with fixed fields across GPT-5.5 and Gemini 3.1 Pro, which points to a specification-heavy framework like SPECS.',
            'You are exploring product positioning ideas and care more about divergent options than strict structure, which points to CRAFT.',
            'You are debugging a complex reasoning failure in Claude Opus 4.8 and need explicit step-by-step thinking, which points to TRACE or a chain-of-thought style framework.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'How PromptQuorum Handles Frameworks for You',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the main prompt frameworks, an automatic framework selector, and a custom framework editor so that you do not have to manage templates manually.** PromptQuorum can send one prompt, structured with your chosen framework, to GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models via Ollama or LM Studio in parallel.',
            'Inside PromptQuorum, you can:',
          ],
          items: [
            'Pick from multiple built-in frameworks such as CO-STAR, CRAFT, RISEN, SPECS, TRACE, and several additional variants tuned for analysis or generation.',
            'Let the app recommend a framework automatically based on the task type you select (for example "research summary," "marketing copy," or "code review").',
            'Define your own framework by specifying roles, required questions, constraints, and output schemas, then reuse it across all models and projects.',
          ],
        },
        automaticSelection: {
          title: "PromptQuorum's Automatic Framework Selection",
          content: [
            "**PromptQuorum's framework selector recommends a prompt framework automatically using the task category, desired output format, and your saved preferences.** This reduces the time you spend thinking about meta-structure and lets you focus on describing the task itself.",
            'A typical flow:',
          ],
          numberedItems: [
            'You select a task such as "summarize research with citations" or "generate LinkedIn post ideas."',
            'PromptQuorum maps this task to a default framework — for example a reasoning-first framework for research or a creative framework for ideation.',
            'You can accept the suggestion, override it with a different framework, or lock certain projects to a specific framework for consistency.',
          ],
        },
        customFrameworks: {
          title: 'Creating Your Own Prompt Frameworks in PromptQuorum',
          content: [
            '**PromptQuorum lets you define, save, and reuse your own prompt frameworks so that your domain-specific workflows become first-class tools instead of ad-hoc prompts.** This is essential if you run repeated analyses, reports, or audits with strict internal standards.',
            'When you create a custom framework in PromptQuorum, you can:',
          ],
          items: [
            'Define the sections (for example Objective, Context, Data Sources, Constraints, Output Format).',
            'Add mandatory questions that the app will ask each time before dispatch, so you never forget critical inputs.',
            'Attach specific output formats, such as Markdown sections, bullet lists, or JSON with predefined keys.',
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good Use of a Framework',
          content: [
            '**The clearest way to see the value of frameworks is to compare an unstructured prompt with a framework-based prompt for the same task.** The example below uses a generic specification-style framework similar to SPECS to write a short report from data.',
            '**[Bad Prompt]**',
            '"Look at this data and tell me what you think."',
            '**[Good Prompt]**',
            '"You are a data analyst. Scope: Analyze the attached sales data for Q1 2026 in the EU market. Purpose: Identify the three most important trends that a VP of Sales should know before planning Q2. Examples: Structure insights as numbered findings with one sentence per finding. Constraints: Do not invent data; if a metric is missing, say "not in dataset". Steps: 1) Describe overall trend, 2) Highlight country-level outliers, 3) Suggest one concrete action per finding."',
            'In PromptQuorum, you can store this structure as a reusable framework and apply it to GPT-5.5, Claude Opus 4.8, and Gemini 3.1 Pro in parallel, then compare how each model handles the same specification.',
          ],
        },
        conclusion: {
          title: 'Which Prompt Framework Should You Use Today?',
          content: [
            '**For most users, the best starting point is to pick one reasoning-focused framework for analysis tasks and one creativity-focused framework for writing tasks, then standardize on those across all models via PromptQuorum.** As your workflows mature, you can introduce a specification-heavy framework for structured outputs and optionally a custom framework tuned to your domain.',
            'A practical baseline:',
          ],
          items: [
            'Use a CO-STAR- or TRACE-style framework for research summaries, technical breakdowns, and complex reasoning.',
            'Use a CRAFT-style framework for marketing copy, content ideas, and messaging experiments.',
            "Use a SPECS-style framework for structured outputs such as reports, checklists, or JSON that must be parsed by downstream tools.",
            "PromptQuorum's automatic selector and custom framework editor help you enforce this pattern at scale so that prompt quality does not depend on individual memory or skill.",
          ],
        },

        howToStart: {
          title: 'How to Choose a Prompt Framework',
          numberedItems: [
            '**Map your task type to a framework: reasoning (CoT), specification (SPECS), role-based (Persona), structured output (JSON-mode), or multi-step (Chaining).** Different frameworks solve different problems. CoT for logic, SPECS for structured requirements, Persona for tone/style, JSON-mode for data extraction, Chaining for multi-step workflows.',
            '**Test your task with 2–3 frameworks on the same prompts and compare outputs.** For \'summarize this document,\' try CoT (reason first, then summarize) vs. direct summarization vs. prompt chaining (extract key points → synthesize). See which produces the best output for your use case.',
            '**For complex tasks, layer frameworks: use Persona to set tone, SPECS to define constraints, and CoT to reason through edge cases.** You don\'t have to stick with one framework. Combine them to match your task\'s complexity.',
            '**Document why you chose a framework for each prompt in your library.** Example: \'For bug analysis, we use CoT because the model needs to trace execution before identifying the error. For code generation, we use SPECS because we need deterministic, constraint-respecting output.\'',
            '**Revisit framework choice when task requirements change.** If your summarization task shifts from \'extracting facts\' to \'synthesizing three perspectives,\' you might move from a direct summary (faster) to Chaining (more nuanced). Framework choice is iterative, not permanent.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What is the best prompt framework for all tasks?', a: 'There is no universal best framework. Chain-of-Thought works for reasoning, ReAct for tool use, Tree-of-Thought for complex multi-step tasks. Test frameworks on your specific task to find the best fit.' },
            { q: 'Do prompt frameworks work with local LLMs like Ollama?', a: 'Yes. Frameworks work with GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models via Ollama or LM Studio. Some complex frameworks (e.g., Tree-of-Thought) may require larger local models (13B+).' },
            { q: 'Can I switch frameworks for the same task?', a: 'Yes. Framework choice is iterative. If Chain-of-Thought produces slow results, switch to a simpler method. If outputs lack detail, upgrade to Tree-of-Thought. Test and iterate based on results.' },
            { q: 'How do I know which framework is best for my task?', a: 'Start by identifying your task type: Are you optimizing for reasoning depth, creativity, speed, or precise structured output? Then match it to a framework (CoT for reasoning, CRAFT for creativity, SPECS for precision). Test 2–3 frameworks and compare outputs.' },
            { q: 'Can I combine multiple frameworks in one prompt?', a: 'Yes. Layering frameworks is common. Use CO-STAR to set context and audience, then add Chain-of-Thought for reasoning, then SPECS for output constraints. The key is clarity—make sure the model understands each component.' },
            { q: 'Does framework choice affect token consumption?', a: 'Yes. Complex frameworks like Tree-of-Thought generate more reasoning steps and cost more tokens. Simple structures like direct prompts cost less but may produce lower-quality results. Framework choice involves a tradeoff between quality and cost.' },
            { q: 'Should I stick with one framework or rotate between them?', a: 'Mix both approaches. Build a small set of tested frameworks (3–5) for different task types and use those consistently. But revisit your choices when task requirements or model capabilities change.' },
            { q: 'How do prompt frameworks relate to PromptQuorum\'s automatic selector?', a: 'PromptQuorum\'s selector analyzes your task and recommends a framework based on your description. You can override it, test alternatives, or build a custom framework tailored to your exact needs.' },
          ],
        },
      },
    },
    de: {
      theme: 'Frameworks',
      title: 'Welches Prompt-Framework ist das richtige für Sie? (2026)',
      intro: 'Die Wahl des richtigen Prompt-Frameworks hängt von Ihrer Aufgabe, Ihrem Erfahrungsgrad und davon ab, ob Sie Kreativität, Präzision oder zuverlässiges Reasoning optimieren. PromptQuorum erleichtert diese Entscheidung mit mehreren integrierten Frameworks, einem automatischen Selektor und einem benutzerdefinierten Framework-Builder.',
      publishDate: '2026-03-24',
      readTime: '9 Min. Lesezeit',
      seoTitle: 'Prompt-Framework 2026: Welches passt zu deiner Aufgabe?',
      metaDescription: 'Chain-of-Thought, ReAct, Tree-of-Thought: Welches Framework passt zu Ihrem LLM-Projekt? Vergleich, Vor- und Nachteile und konkrete Entscheidungshilfen.',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/de/prompt-engineering/which-prompt-framework-should-you-use',
        headline: 'Welches Prompt-Framework ist das richtige für Sie? (2026)',
        description: 'Vergleich der wichtigsten Prompt-Frameworks: CO-STAR, CRAFT, SPECS, RISEN, TRACE. Wählen Sie das richtige Framework für GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokale Modelle.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Prompt-Frameworks', 'Prompt Engineering', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Das richtige Prompt-Framework wählen',
        'step': [
          { '@type': 'HowToStep', 'name': 'Identifizieren Sie Ihren Aufgabentyp', 'text': 'Bestimmen Sie, ob Sie strukturiertes Reasoning (Chain-of-Thought), Werkzeugnutzung (ReAct), mehrstufiges Denken (Tree-of-Thought) oder kreative Ausgaben benötigen. Der Aufgabentyp bestimmt die Framework-Wahl.' },
          { '@type': 'HowToStep', 'name': 'Überprüfen Sie die Modellkompatibilität', 'text': 'Einige Frameworks funktionieren besser mit bestimmten Modellen. GPT-5.5 und Claude Opus 4.8 handhaben komplexe Frameworks. Lokale Modelle via Ollama bevorzugen einfachere Strukturen.' },
          { '@type': 'HowToStep', 'name': 'Testen Sie das Framework mit Ihren Daten', 'text': 'Testen Sie Ihre Aufgabe mit 2–3 Kandidaten-Frameworks. Messen Sie Ausgabequalität, Latenz und Kosten. Wählen Sie das Framework mit den besten Ergebnissen.' },
          { '@type': 'HowToStep', 'name': 'Dokumentieren Sie Ihre Wahl', 'text': 'Verzeichnen Sie, welches Framework Sie gewählt haben und warum, in Ihrer Prompt-Bibliothek. So werden Ergebnisse über Teams und Modelle hinweg reproduzierbar.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Was ist das beste Prompt-Framework für alle Aufgaben?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Es gibt kein universell bestes Framework. Chain-of-Thought funktioniert für Reasoning, ReAct für Werkzeugnutzung, Tree-of-Thought für komplexe mehrstufige Aufgaben. Testen Sie Frameworks auf Ihre spezifische Aufgabe.' }
          },
          {
            '@type': 'Question',
            'name': 'Funktionieren Prompt-Frameworks mit lokalen LLMs wie Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Frameworks funktionieren mit GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokalen Modellen via Ollama oder LM Studio. Einige komplexe Frameworks benötigen größere lokale Modelle (13B+).' }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich Frameworks für die gleiche Aufgabe wechseln?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Framework-Wahl ist iterativ. Wenn Chain-of-Thought langsam ist, wechseln Sie zu einer einfacheren Methode. Wenn Ausgaben zu wenig Detail haben, upgraden Sie zu Tree-of-Thought. Testen und iterieren Sie basierend auf Ergebnissen.' }
          }
        ]
      },
      sections: {
        whatFrameworksDo: {
          title: 'Was Prompt-Frameworks tatsächlich leisten',
          content: [
            '**Prompt-Frameworks geben Ihnen eine wiederholbare Struktur für Prompts, sodass GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und andere Modelle genau wissen, welche Rolle sie einnehmen, welchen Kontext sie verwenden und wie sie Ausgaben formatieren sollen.** Ein Framework ist kein Modellemerkmal; es ist eine Vorlage, die steuert, wie Sie mit dem Modell sprechen. Wenn Sie ein konsistentes Framework verwenden, reduzieren Sie das Halluzinationsrisiko, da das Modell klarere Ziele, Einschränkungen und Ausgabeformate erhält.',
            'Die meisten Frameworks zerlegen einen Prompt in Bausteine wie Ziel, Rolle, Kontext, Einschränkungen und Format. Diese Struktur verwandelt eine vage Anfrage wie „hilf mir damit" in eine klar spezifizierte Aufgabe mit messbarer Qualität. In der Praxis sind Frameworks besonders hilfreich, wenn Sie reproduzierbare Ausgaben über verschiedene Modelle und Anbieter wie OpenAI, Anthropic und Google DeepMind hinweg benötigen.',
          ],
        },
        frameworksAtAGlance: {
          title: 'Die wichtigsten Prompt-Frameworks im Überblick',
          content: [
            '**Die wichtigsten Prompt-Frameworks unterscheiden sich in ihrem Fokus: Einige optimieren für strukturiertes Reasoning, andere für Kreativität, wieder andere für präzise Spezifikationen.** Bei der Arbeit mit mehreren Modellen — GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokalen Modellen über Ollama oder LM Studio — wechseln Sie in der Regel zwischen einer kleinen Auswahl erprobter Frameworks.',
            'Hier sind die gängigsten Frameworks und ihre optimalen Einsatzgebiete:',
          ],
          columns: ['Framework', 'Am besten für', 'Kernidee'],
          rows: [
            { 'Framework': 'CO-STAR', 'Am besten für': 'Komplexe Aufgaben', 'Kernidee': 'Aufgaben in Kontext, Ziel, Stil, Ton, Zielgruppe und Antwort gliedern' },
            { 'Framework': 'CRAFT',   'Am besten für': 'Kreative Arbeit',   'Kernidee': 'Fokus auf Rolle, Format, Zielgruppe und Variationstests' },
            { 'Framework': 'SPECS',   'Am besten für': 'Präzise Ausgaben',  'Kernidee': 'Umfang, Zweck, Beispiele, Einschränkungen und Schritte definieren' },
            { 'Framework': 'RISEN',   'Am besten für': 'Iteration',         'Kernidee': 'Prompts über mehrere Runden schnell verfeinern' },
            { 'Framework': 'TRACE',   'Am besten für': 'Reasoning',         'Kernidee': 'Modell zur Darstellung von Gedankengang, Reasoning, Analyse, Schlussfolgerung und Bewertung zwingen' },
          ],
        },
        howToChooseByUseCase: {
          title: 'Framework nach Anwendungsfall auswählen',
          content: [
            '**Wählen Sie Ihr Prompt-Framework basierend auf dem Ergebnis, das Ihnen am wichtigsten ist: Reasoning-Qualität, kreative Variation oder strikte Formatierung.** Sobald Sie Frameworks mit Anwendungsfällen verknüpfen, wird die Entscheidung zu einer einfachen Regel statt zu einem Ratespiel.',
            'Typische Zuordnungen:',
          ],
          items: [
            'Für Recherche-Zusammenfassungen, technische Analysen oder mehrstufige Workflows: Reasoning-first Framework wie TRACE oder CO-STAR.',
            'Für Blogbeiträge, Werbetexte und Ideenfindung: CRAFT oder eine ähnliche kreativitätsorientierte Struktur mit Schwerpunkt auf Zielgruppe, Ton und Variation.',
            'Für Datenextraktion, Berichte oder Code-Refactoring: SPECS oder eine andere spezifikationslastige Vorlage, die Format und Einschränkungen festschreibt.',
          ],
        },
        whenToSwitch: {
          title: 'Wann Sie das Framework wechseln sollten',
          content: [
            '**Wechseln Sie das Prompt-Framework, wenn Ihre aktuelle Struktur Ihre Anforderungen nicht ausdrücken kann oder wenn Ausgaben mehrerer Modelle vom gewünschten Format abweichen.** Am deutlichsten zeigt sich das, wenn Sie dieselbe Aufgabe über mehrere Modelle hinweg ausführen und inkonsistente Überschriften, fehlende Felder oder übermäßig kreative Formulierungen bemerken.',
            'Klare Signale, dass ein anderes Framework besser geeignet ist:',
          ],
          items: [
            'Sie benötigen striktes JSON mit festen Feldern über GPT-5.5 und Gemini 3.1 Pro hinweg — das deutet auf ein spezifikationslastiges Framework wie SPECS hin.',
            'Sie erkunden Produkt-Positionierungsideen und legen mehr Wert auf divergente Optionen als auf strikte Struktur — das deutet auf CRAFT hin.',
            'Sie debuggen einen komplexen Reasoning-Fehler in Claude Opus 4.8 und benötigen explizites Schritt-für-Schritt-Denken — das deutet auf TRACE oder ein Chain-of-Thought-Framework hin.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'Wie PromptQuorum Frameworks für Sie verwaltet',
          content: [
            '**PromptQuorum ist ein Multi-Modell-KI-Dispatch-Tool mit den wichtigsten Prompt-Frameworks, einem automatischen Framework-Selektor und einem benutzerdefinierten Framework-Editor, damit Sie Vorlagen nicht manuell pflegen müssen.** PromptQuorum kann einen Prompt, strukturiert mit Ihrem gewählten Framework, gleichzeitig an GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokale Modelle über Ollama oder LM Studio senden.',
            'In PromptQuorum können Sie:',
          ],
          items: [
            'Aus mehreren integrierten Frameworks wählen: CO-STAR, CRAFT, RISEN, SPECS, TRACE und weitere Varianten für Analyse oder Generierung.',
            'Die App automatisch ein Framework empfehlen lassen — basierend auf dem von Ihnen gewählten Aufgabentyp (z. B. „Recherche-Zusammenfassung", „Marketingtext" oder „Code-Review").',
            'Eigene Frameworks mit Rollen, Pflichtfragen, Einschränkungen und Ausgabe-Schemas definieren und projektübergreifend für alle Modelle wiederverwenden.',
          ],
        },
        automaticSelection: {
          title: 'Automatische Framework-Auswahl in PromptQuorum',
          content: [
            '**Der Framework-Selektor von PromptQuorum empfiehlt automatisch ein Prompt-Framework basierend auf Aufgabenkategorie, gewünschtem Ausgabeformat und Ihren gespeicherten Präferenzen.** So verbringen Sie weniger Zeit mit dem Nachdenken über Meta-Struktur und können sich auf die Aufgabenbeschreibung selbst konzentrieren.',
            'Typischer Ablauf:',
          ],
          numberedItems: [
            'Sie wählen eine Aufgabe wie „Recherche mit Quellen zusammenfassen" oder „LinkedIn-Post-Ideen generieren".',
            'PromptQuorum ordnet diese Aufgabe einem Standard-Framework zu — z. B. einem Reasoning-first Framework für Recherche oder einem Kreativ-Framework für Ideenfindung.',
            'Sie können den Vorschlag übernehmen, durch ein anderes Framework ersetzen oder bestimmte Projekte auf ein spezifisches Framework festlegen.',
          ],
        },
        customFrameworks: {
          title: 'Eigene Prompt-Frameworks in PromptQuorum erstellen',
          content: [
            '**PromptQuorum ermöglicht es Ihnen, eigene Prompt-Frameworks zu definieren, zu speichern und wiederzuverwenden, sodass domänenspezifische Workflows zu erstklassigen Werkzeugen werden statt zu Ad-hoc-Prompts.** Das ist unverzichtbar, wenn Sie wiederkehrende Analysen, Berichte oder Audits mit strengen internen Standards durchführen.',
            'Wenn Sie in PromptQuorum ein benutzerdefiniertes Framework erstellen, können Sie:',
          ],
          items: [
            'Die Abschnitte definieren (z. B. Ziel, Kontext, Datenquellen, Einschränkungen, Ausgabeformat).',
            'Pflichtfragen hinzufügen, die die App bei jedem Einsatz stellt, damit kritische Eingaben nie vergessen werden.',
            'Spezifische Ausgabeformate anhängen: Markdown-Abschnitte, Aufzählungslisten oder JSON mit vordefinierten Schlüsseln.',
          ],
        },
        badVsGoodExample: {
          title: 'Beispiel: Schlechter vs. guter Framework-Einsatz',
          content: [
            '**Der deutlichste Weg, den Wert von Frameworks zu erkennen, ist der Vergleich eines unstrukturierten Prompts mit einem Framework-basierten Prompt für dieselbe Aufgabe.** Das folgende Beispiel verwendet ein generisches spezifikationsorientiertes Framework ähnlich SPECS, um einen kurzen Bericht aus Daten zu erstellen.',
            '**[Schlechter Prompt]**',
            '"Schau dir diese Daten an und sag mir, was du denkst."',
            '**[Guter Prompt]**',
            '"Du bist Datenanalyst. Umfang: Analysiere die beigefügten Umsatzdaten für Q1 2026 im EU-Markt. Zweck: Identifiziere die drei wichtigsten Trends, die ein VP Sales vor der Q2-Planung kennen sollte. Beispiele: Strukturiere Erkenntnisse als nummerierte Befunde mit einem Satz pro Befund. Einschränkungen: Erfinde keine Daten; wenn eine Kennzahl fehlt, schreibe nicht im Datensatz. Schritte: 1) Gesamttrend beschreiben, 2) Länderspezifische Ausreißer hervorheben, 3) Eine konkrete Maßnahme pro Befund vorschlagen."',
            'In PromptQuorum können Sie diese Struktur als wiederverwendbares Framework speichern und gleichzeitig auf GPT-5.5, Claude Opus 4.8 und Gemini 3.1 Pro anwenden, um zu vergleichen, wie jedes Modell mit derselben Spezifikation umgeht.',
          ],
        },
        conclusion: {
          title: 'Welches Prompt-Framework sollten Sie heute verwenden?',
          content: [
            '**Für die meisten Nutzer ist der beste Einstieg: ein Reasoning-fokussiertes Framework für Analyseaufgaben und ein kreativitätsfokussiertes Framework für Schreibaufgaben — und beide über alle Modelle hinweg via PromptQuorum zu standardisieren.** Mit zunehmender Reife Ihrer Workflows können Sie ein spezifikationslastiges Framework für strukturierte Ausgaben und optional ein benutzerdefiniertes Framework für Ihre Domäne einführen.',
            'Praktische Ausgangsbasis:',
          ],
          items: [
            'CO-STAR- oder TRACE-Framework für Recherche-Zusammenfassungen, technische Analysen und komplexes Reasoning.',
            'CRAFT-Framework für Marketingtexte, Content-Ideen und Messaging-Experimente.',
            'SPECS-Framework für strukturierte Ausgaben wie Berichte, Checklisten oder JSON, das von nachgelagerten Tools verarbeitet werden muss.',
            'Der automatische Selektor und Framework-Editor von PromptQuorum helfen Ihnen, dieses Muster im großen Maßstab durchzusetzen, sodass die Prompt-Qualität nicht vom individuellen Gedächtnis oder Können abhängt.',
          ],
        },
        howToStart: {
          title: 'Schritt-für-Schritt: Das richtige Framework wählen',
          numberedItems: [
            '**Aufgabentyp einem Framework zuordnen: Reasoning (CoT), Spezifikation (SPECS), rollenbasiert (Persona), strukturierte Ausgabe (JSON-Modus) oder mehrstufig (Chaining).** Verschiedene Frameworks lösen verschiedene Probleme. CoT für Logik, SPECS für strukturierte Anforderungen, Persona für Ton/Stil, JSON-Modus für Datenextraktion, Chaining für mehrstufige Workflows.',
            '**Testen Sie Ihre Aufgabe mit 2–3 Frameworks auf denselben Prompts und vergleichen Sie die Ausgaben.** Für "dieses Dokument zusammenfassen": Versuchen Sie CoT (erst Reasoning, dann Zusammenfassung) vs. direkte Zusammenfassung vs. Prompt-Chaining (Kernpunkte extrahieren → synthetisieren). Sehen Sie, welches die besten Ergebnisse liefert.',
            '**Für komplexe Aufgaben Frameworks kombinieren: Persona für Ton, SPECS für Einschränkungen und CoT für Edge Cases.** Sie müssen nicht bei einem Framework bleiben. Kombinieren Sie sie, um die Komplexität Ihrer Aufgabe abzubilden.',
            '**Dokumentieren Sie, warum Sie für jeden Prompt in Ihrer Bibliothek ein bestimmtes Framework gewählt haben.** Beispiel: "Für Fehleranalyse verwenden wir CoT, weil das Modell die Ausführung verfolgen muss. Für Code-Generierung verwenden wir SPECS, weil wir deterministische, anforderungskonforme Ausgabe benötigen."',
            '**Überprüfen Sie die Framework-Wahl, wenn sich Aufgabenanforderungen ändern.** Wenn Ihre Zusammenfassungsaufgabe von "Fakten extrahieren" zu "drei Perspektiven synthetisieren" wechselt, könnten Sie von direkter Zusammenfassung (schneller) zu Chaining (differenzierter) wechseln. Framework-Wahl ist iterativ, nicht dauerhaft.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig Gestellte Fragen',
          faqs: [
            { q: 'Was ist das beste Prompt-Framework für alle Aufgaben?', a: 'Es gibt kein universelles bestes Framework. Chain-of-Thought funktioniert für Reasoning, ReAct für Tool-Nutzung, Tree-of-Thought für komplexe mehrstufige Aufgaben. Testen Sie Frameworks auf Ihrer spezifischen Aufgabe, um die beste Lösung zu finden.' },
            { q: 'Funktionieren Prompt-Frameworks mit lokalen LLMs wie Ollama?', a: 'Ja. Frameworks funktionieren mit GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro und lokalen Modellen via Ollama oder LM Studio. Einige komplexe Frameworks (z.B. Tree-of-Thought) erfordern möglicherweise größere lokale Modelle (13B+).' },
            { q: 'Kann ich Frameworks für die gleiche Aufgabe wechseln?', a: 'Ja. Framework-Wahl ist iterativ. Wenn Chain-of-Thought langsame Ergebnisse liefert, wechseln Sie zu einer einfacheren Methode. Wenn Ausgaben zu wenig Detail haben, upgraden Sie auf Tree-of-Thought. Testen und iterieren Sie basierend auf Ergebnissen.' },
            { q: 'Wie weiß ich, welches Framework das beste für meine Aufgabe ist?', a: 'Beginnen Sie damit, Ihren Aufgabentyp zu identifizieren: Optimieren Sie für Reasoning-Tiefe, Kreativität, Geschwindigkeit oder präzise strukturierte Ausgabe? Dann ordnen Sie ihn einem Framework zu (CoT für Reasoning, CRAFT für Kreativität, SPECS für Präzision). Testen Sie 2–3 Frameworks und vergleichen Sie Ausgaben.' },
            { q: 'Kann ich mehrere Frameworks in einem Prompt kombinieren?', a: 'Ja. Das Schichten von Frameworks ist üblich. Verwenden Sie CO-STAR zur Festlegung von Kontext und Audience, fügen Sie dann Chain-of-Thought für Reasoning hinzu, dann SPECS für Output-Einschränkungen. Das Wichtigste ist Klarheit—stellen Sie sicher, dass das Modell jede Komponente versteht.' },
            { q: 'Beeinflusst die Framework-Wahl den Token-Verbrauch?', a: 'Ja. Komplexe Frameworks wie Tree-of-Thought generieren mehr Reasoning-Schritte und kosten mehr Token. Einfache Strukturen wie direkte Prompts kosten weniger, aber können niedrigere Qualität liefern. Framework-Wahl beinhaltet einen Kompromiss zwischen Qualität und Kosten.' },
            { q: 'Sollte ich mich auf ein Framework beschränken oder zwischen ihnen rotieren?', a: 'Mischen Sie beide Ansätze. Bauen Sie einen kleinen Satz getesteter Frameworks (3–5) für verschiedene Aufgabentypen auf und verwenden Sie diese konsistent. Aber überprüfen Sie Ihre Wahlen, wenn sich Aufgabenanforderungen oder Modell-Fähigkeiten ändern.' },
            { q: 'Wie beziehen sich Prompt-Frameworks auf PromptQuorums automatischen Selektor?', a: 'PromptQuorums Selektor analysiert Ihre Aufgabe und empfiehlt ein Framework basierend auf Ihrer Beschreibung. Sie können es überschreiben, Alternativen testen oder ein maßgeschneidertes Framework bauen.' },
          ],
        },
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: '¿Qué framework de prompts deberías usar?',
      intro: 'El framework de prompt correcto depende de tu tarea, tu nivel de experiencia y si estás optimizando para creatividad, precisión o razonamiento fiable. PromptQuorum facilita esta elección al incluir múltiples frameworks, un selector automático y un constructor de frameworks personalizados directamente en la app.',
      publishDate: '2026-03-24',
      seoTitle: 'Elige el Framework de Prompts Correcto para tu Tarea 2026',
      metaDescription: 'Compara frameworks de prompts: Chain-of-Thought, ReAct, Tree-of-Thought. Aprende pros/contras para cada caso de uso y elige el mejor para tu aplicación LLM.',
      readTime: '9 min de lectura',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/es/prompt-engineering/which-prompt-framework-should-you-use',
        inLanguage: 'es',
        headline: '¿Qué framework de prompts deberías usar?',
        description: 'Cómo elegir el framework de prompt correcto para GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales — y cómo PromptQuorum automatiza la selección de frameworks.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['frameworks de prompt', 'prompt engineering', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Modelos de Lenguaje de Gran Escala' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Elegir el Framework de Prompt Correcto',
        step: [
          { '@type': 'HowToStep', name: 'Identifica tu tipo de tarea', text: 'Determina si necesitas razonamiento estructurado (Chain-of-Thought), uso de herramientas (ReAct), pensamiento multi-paso (Tree-of-Thought) o output creativo. El tipo de tarea guía la elección del framework.' },
          { '@type': 'HowToStep', name: 'Verifica la compatibilidad con el modelo', text: 'Algunos frameworks funcionan mejor con modelos específicos. GPT-5.5 y Claude Opus 4.8 manejan frameworks complejos. Los modelos locales via Ollama pueden preferir estructuras más simples.' },
          { '@type': 'HowToStep', name: 'Prueba el framework con tus datos', text: 'Ejecuta tu tarea con 2-3 frameworks candidatos. Mide la calidad del output, latencia y costo. Elige el framework con mejores resultados para tu caso de uso.' },
          { '@type': 'HowToStep', name: 'Documenta tu elección', text: 'Registra qué framework elegiste y por qué en tu biblioteca de prompts. Esto hace los resultados reproducibles entre equipos y modelos.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cuál es el mejor framework de prompt para todas las tareas?',
            acceptedAnswer: { '@type': 'Answer', text: 'No hay un mejor framework universal. Chain-of-Thought funciona para el razonamiento, ReAct para el uso de herramientas, Tree-of-Thought para tareas complejas multi-paso. Prueba frameworks en tu tarea específica para encontrar el mejor ajuste.' }
          },
          {
            '@type': 'Question',
            name: '¿Los frameworks de prompt funcionan con LLMs locales como Ollama?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los frameworks funcionan con GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales via Ollama o LM Studio. Algunos frameworks complejos (ej., Tree-of-Thought) pueden requerir modelos locales más grandes (13B+).' }
          },
          {
            '@type': 'Question',
            name: '¿Puedo cambiar de framework para la misma tarea?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sí. La elección del framework es iterativa. Si Chain-of-Thought produce resultados lentos, cambia a un método más simple. Si los outputs carecen de detalle, actualiza a Tree-of-Thought. Prueba e itera según los resultados.' }
          }
        ]
      },
      sections: {
        whatFrameworksDo: {
          title: 'Lo que los frameworks de prompt realmente hacen',
          content: [
            '**Los frameworks de prompt te dan una estructura repetible para los prompts para que GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y otros modelos sepan exactamente qué rol adoptar, qué contexto usar y cómo formatear los outputs.** Un framework no es una característica del modelo; es una plantilla que controla cómo hablas con el modelo. Cuando usas un framework consistente, reduces el riesgo de alucinaciones porque el modelo recibe objetivos, restricciones y formatos de output más claros.',
            'La mayoría de los frameworks descomponen un prompt en bloques de construcción como objetivo, rol, contexto, restricciones y formato. Esta estructura convierte una solicitud vaga como "ayúdame con esto" en una tarea bien especificada con calidad medible. En la práctica, los frameworks son especialmente útiles cuando necesitas outputs reproducibles en diferentes modelos y proveedores como OpenAI, Anthropic y Google DeepMind.',
          ],
        },
        frameworksAtAGlance: {
          title: 'Los principales frameworks de prompt de un vistazo',
          content: [
            '**Los principales frameworks de prompt difieren en su enfoque: algunos optimizan el razonamiento estructurado, otros la creatividad y otros las especificaciones precisas.** Para trabajo multi-modelo entre GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales via Ollama o LM Studio, generalmente rotarás entre un pequeño conjunto de frameworks bien probados.',
            'Aquí están los frameworks más comunes y para qué son mejores:',
          ],
          columns: ['Framework', 'Mejor para', 'Idea central'],
          rows: [
            { 'Framework': 'CO-STAR', 'Mejor para': 'Tareas complejas', 'Idea central': 'Divide las tareas en Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta' },
            { 'Framework': 'CRAFT',   'Mejor para': 'Trabajo creativo', 'Idea central': 'Enfoca en rol, formato, audiencia y pruebas de variaciones' },
            { 'Framework': 'SPECS',   'Mejor para': 'Outputs precisos', 'Idea central': 'Especifica Alcance, Propósito, Ejemplos, Restricciones, Pasos' },
            { 'Framework': 'RISEN',   'Mejor para': 'Iteración', 'Idea central': 'Refina prompts rápidamente a través de múltiples turnos' },
            { 'Framework': 'TRACE',   'Mejor para': 'Razonamiento', 'Idea central': 'Obliga al modelo a mostrar Pensamiento, Razonamiento, Análisis, Conclusión, Evaluación' },
          ],
        },
        howToChooseByUseCase: {
          title: 'Cómo elegir un framework por caso de uso',
          content: [
            '**Debes elegir tu framework de prompt basándote en el output que más te importa: calidad del razonamiento, variación creativa o formateo estricto.** Una vez que vinculas frameworks a casos de uso, la elección se convierte en una regla simple en lugar de un juego de adivinanzas.',
            'Correspondencias típicas:',
          ],
          items: [
            'Para resúmenes de investigación, análisis técnico o flujos de trabajo multi-paso, usa un framework orientado al razonamiento como TRACE o CO-STAR.',
            'Para posts de blog, copy publicitario e ideación, usa CRAFT o una estructura similar orientada a la creatividad que enfatice audiencia, tono y variación.',
            'Para extracción de datos, informes o refactorización de código, usa SPECS u otra plantilla con muchas especificaciones que fije formato y restricciones.',
          ],
        },
        whenToSwitch: {
          title: 'Cuándo deberías cambiar de framework',
          content: [
            '**Debes cambiar de framework de prompt cuando tu estructura actual no puede expresar tus restricciones o cuando los outputs de múltiples modelos se desvían del formato requerido.** Esto es más fácil de ver cuando ejecutas la misma tarea en varios modelos y notas encabezados inconsistentes, campos faltantes o frases demasiado creativas.',
            'Señales claras de que un framework diferente es más adecuado:',
          ],
          items: [
            'Necesitas JSON estricto con campos fijos en GPT-5.5 y Gemini 3.1 Pro, lo que apunta a un framework con muchas especificaciones como SPECS.',
            'Estás explorando ideas de posicionamiento de producto y te importan más las opciones divergentes que la estructura estricta, lo que apunta a CRAFT.',
            'Estás depurando un fallo de razonamiento complejo en Claude Opus 4.8 y necesitas pensamiento paso a paso explícito, lo que apunta a TRACE o un framework de estilo chain-of-thought.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'Cómo PromptQuorum maneja los frameworks por ti',
          content: [
            '**PromptQuorum es una herramienta de despacho de IA multi-modelo que incluye los principales frameworks de prompt, un selector automático de frameworks y un editor de frameworks personalizados para que no tengas que gestionar plantillas manualmente.** PromptQuorum puede enviar un prompt, estructurado con tu framework elegido, a GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales via Ollama o LM Studio en paralelo.',
            'Dentro de PromptQuorum, puedes:',
          ],
          items: [
            'Elegir entre múltiples frameworks integrados como CO-STAR, CRAFT, RISEN, SPECS, TRACE y varias variantes adicionales ajustadas para análisis o generación.',
            'Dejar que la app recomiende un framework automáticamente basándose en el tipo de tarea que seleccionas (por ejemplo "resumen de investigación", "copy de marketing" o "revisión de código").',
            'Definir tu propio framework especificando roles, preguntas requeridas, restricciones y esquemas de output, luego reutilizarlo en todos los modelos y proyectos.',
          ],
        },
        automaticSelection: {
          title: 'Selección automática de frameworks de PromptQuorum',
          content: [
            '**El selector de frameworks de PromptQuorum recomienda un framework de prompt automáticamente usando la categoría de tarea, el formato de output deseado y tus preferencias guardadas.** Esto reduce el tiempo que pasas pensando en la meta-estructura y te permite concentrarte en describir la tarea en sí.',
            'Un flujo típico:',
          ],
          numberedItems: [
            'Seleccionas una tarea como "resumir investigación con citas" o "generar ideas de posts de LinkedIn".',
            'PromptQuorum mapea esta tarea a un framework predeterminado — por ejemplo un framework orientado al razonamiento para investigación o uno creativo para ideación.',
            'Puedes aceptar la sugerencia, anularla con un framework diferente o bloquear ciertos proyectos a un framework específico para consistencia.',
          ],
        },
        customFrameworks: {
          title: 'Crear tus propios frameworks de prompts en PromptQuorum',
          content: [
            '**PromptQuorum te permite definir, guardar y reutilizar tus propios frameworks de prompts para que tus flujos de trabajo específicos del dominio se conviertan en herramientas de primera clase en lugar de prompts ad hoc.** Esto es esencial si realizas análisis, informes o auditorías repetidos con estándares internos estrictos.',
            'Cuando creas un framework personalizado en PromptQuorum, puedes:',
          ],
          items: [
            'Definir las secciones (por ejemplo Objetivo, Contexto, Fuentes de Datos, Restricciones, Formato de Output).',
            'Agregar preguntas obligatorias que la app hará cada vez antes del despacho, para que nunca olvides entradas críticas.',
            'Adjuntar formatos de output específicos, como secciones Markdown, listas de puntos o JSON con claves predefinidas.',
          ],
        },
        badVsGoodExample: {
          title: 'Ejemplo: Mal vs buen uso de un framework',
          content: [
            '**La forma más clara de ver el valor de los frameworks es comparar un prompt sin estructura con un prompt basado en framework para la misma tarea.** El ejemplo a continuación usa un framework de estilo especificación genérico similar a SPECS para escribir un informe corto a partir de datos.',
            '**[Prompt Malo]**',
            '"Mira estos datos y dime qué piensas."',
            '**[Prompt Bueno]**',
            '"Eres un analista de datos. Alcance: Analiza los datos de ventas adjuntos del Q1 2026 en el mercado UE. Propósito: Identifica las tres tendencias más importantes que un VP de Ventas debería conocer antes de planificar el Q2. Ejemplos: Estructura los insights como hallazgos numerados con una oración por hallazgo. Restricciones: No inventes datos; si falta una métrica, di \'no está en el conjunto de datos\'. Pasos: 1) Describe la tendencia general, 2) Destaca los valores atípicos a nivel de país, 3) Sugiere una acción concreta por hallazgo."',
            'En PromptQuorum, puedes almacenar esta estructura como un framework reutilizable y aplicarla a GPT-5.5, Claude Opus 4.8 y Gemini 3.1 Pro en paralelo, luego comparar cómo cada modelo maneja la misma especificación.',
          ],
        },
        conclusion: {
          title: '¿Qué framework de prompts deberías usar hoy?',
          content: [
            '**Para la mayoría de los usuarios, el mejor punto de partida es elegir un framework orientado al razonamiento para tareas de análisis y uno orientado a la creatividad para tareas de escritura, luego estandarizar en esos en todos los modelos via PromptQuorum.** A medida que tus flujos de trabajo maduran, puedes introducir un framework con muchas especificaciones para outputs estructurados y opcionalmente un framework personalizado ajustado a tu dominio.',
            'Una línea base práctica:',
          ],
          items: [
            'Usa un framework estilo CO-STAR o TRACE para resúmenes de investigación, análisis técnicos y razonamiento complejo.',
            'Usa un framework estilo CRAFT para copy de marketing, ideas de contenido y experimentos de mensajería.',
            'Usa un framework estilo SPECS para outputs estructurados como informes, listas de verificación o JSON que deben ser procesados por herramientas posteriores.',
            'El selector automático y el editor de frameworks personalizados de PromptQuorum te ayudan a aplicar este patrón a escala para que la calidad del prompt no dependa de la memoria o habilidad individual.',
          ],
        },

        howToStart: {
          title: 'Cómo elegir un framework de prompt',
          numberedItems: [
            '**Mapea tu tipo de tarea a un framework: razonamiento (CoT), especificación (SPECS), basado en rol (Persona), output estructurado (modo JSON) o multi-paso (Chaining).** Diferentes frameworks resuelven diferentes problemas. CoT para lógica, SPECS para requisitos estructurados, Persona para tono/estilo, modo JSON para extracción de datos, Chaining para flujos de trabajo multi-paso.',
            '**Prueba tu tarea con 2-3 frameworks en los mismos prompts y compara los outputs.** Para "resume este documento", prueba CoT (razona primero, luego resume) vs resumir directamente vs prompt chaining (extrae puntos clave → sintetiza). Ve cuál produce el mejor output para tu caso de uso.',
            '**Para tareas complejas, combina frameworks: usa Persona para el tono, SPECS para restricciones y CoT para razonar casos límite.** No tienes que quedarte con un solo framework. Combínalos para que coincidan con la complejidad de tu tarea.',
            '**Documenta por qué elegiste un framework para cada prompt en tu biblioteca.** Ejemplo: "Para análisis de errores, usamos CoT porque el modelo necesita rastrear la ejecución antes de identificar el error. Para generación de código, usamos SPECS porque necesitamos output determinístico que respete las restricciones."',
            '**Revisa la elección del framework cuando cambien los requisitos de la tarea.** Si tu tarea de resumen pasa de "extraer hechos" a "sintetizar tres perspectivas", podrías pasar del resumen directo (más rápido) al Chaining (más matizado). La elección del framework es iterativa, no permanente.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Cuál es el mejor framework de prompt para todas las tareas?', a: 'No hay un mejor framework universal. Chain-of-Thought funciona para el razonamiento, ReAct para el uso de herramientas, Tree-of-Thought para tareas complejas multi-paso. Prueba frameworks en tu tarea específica para encontrar el mejor ajuste.' },
            { q: '¿Los frameworks de prompt funcionan con LLMs locales como Ollama?', a: 'Sí. Los frameworks funcionan con GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales via Ollama o LM Studio. Algunos frameworks complejos (ej., Tree-of-Thought) pueden requerir modelos locales más grandes (13B+).' },
            { q: '¿Puedo cambiar de framework para la misma tarea?', a: 'Sí. La elección del framework es iterativa. Si Chain-of-Thought produce resultados lentos, cambia a un método más simple. Si los outputs carecen de detalle, actualiza a Tree-of-Thought. Prueba e itera según los resultados.' },
            { q: '¿Cómo sé qué framework es el mejor para mi tarea?', a: 'Empieza identificando tu tipo de tarea: ¿Estás optimizando para profundidad de razonamiento, creatividad, velocidad o output estructurado preciso? Luego emparéjalo con un framework (CoT para razonamiento, CRAFT para creatividad, SPECS para precisión). Prueba 2-3 frameworks y compara outputs.' },
            { q: '¿Puedo combinar múltiples frameworks en un solo prompt?', a: 'Sí. Combinar frameworks es común. Usa CO-STAR para establecer contexto y audiencia, luego añade Chain-of-Thought para el razonamiento, luego SPECS para restricciones de output. La clave es la claridad — asegúrate de que el modelo entienda cada componente.' },
            { q: '¿Afecta la elección del framework al consumo de tokens?', a: 'Sí. Los frameworks complejos como Tree-of-Thought generan más pasos de razonamiento y cuestan más tokens. Las estructuras simples como los prompts directos cuestan menos pero pueden producir resultados de menor calidad. La elección del framework implica un compromiso entre calidad y costo.' },
            { q: '¿Debo quedarme con un framework o rotar entre ellos?', a: 'Combina ambos enfoques. Construye un pequeño conjunto de frameworks probados (3-5) para diferentes tipos de tareas y úsalos consistentemente. Pero revisa tus elecciones cuando cambien los requisitos de la tarea o las capacidades del modelo.' },
            { q: '¿Cómo se relacionan los frameworks de prompt con el selector automático de PromptQuorum?', a: 'El selector de PromptQuorum analiza tu tarea y recomienda un framework basándose en tu descripción. Puedes anularlo, probar alternativas o construir un framework personalizado adaptado exactamente a tus necesidades.' },
          ],
        },
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'أي إطار طلب يجب استخدامه؟',
      intro: 'يعتمد إطار الطلب الصحيح على مهمتك ومستوى خبرتك وما إذا كنت تُحسّن للإبداع أو الدقة أو الاستدلال الموثوق. PromptQuorum يُسهّل هذا الاختيار بتضمين أطر متعددة ومحدد تلقائي وباني أطر مخصصة مباشرة في التطبيق.',
      publishDate: '2026-03-24',
      seoTitle: 'أطر الطلبات 2026: اختر الإطار الأنسب لمهمتك',
      metaDescription: 'قارن بين 5 أطر طلبات: Chain-of-Thought وCO-STAR وCRAFT وSPECS وTRACE. تعلّم متى تستخدم كل إطار مع LLMs مثل GPT-5.5 وClaude وGemini.',
      readTime: '٩ دقائق للقراءة',
      educationalLevel: 'متوسط',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/which-prompt-framework-should-you-use',
        inLanguage: 'ar',
        headline: 'أي إطار طلب يجب استخدامه؟',
        description: 'كيف تختار إطار الطلب الصحيح لـ GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية — وكيف تُؤتمت PromptQuorum اختيار الأطر.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['أطر الطلبات', 'هندسة الطلبات', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'نماذج اللغة الكبيرة' },
          { '@type': 'Thing', name: 'أطر الطلبات' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'اختيار إطار الطلب الصحيح',
        step: [
          { '@type': 'HowToStep', name: 'حدد نوع مهمتك', text: 'حدد ما إذا كنت تحتاج إلى استدلال منظم (Chain-of-Thought) أو استخدام أدوات (ReAct) أو تفكير متعدد الخطوات (Tree-of-Thought) أو مخرجات إبداعية. نوع المهمة يوجّه اختيار الإطار.' },
          { '@type': 'HowToStep', name: 'تحقق من توافق النموذج', text: 'بعض الأطر تعمل بشكل أفضل مع نماذج محددة. GPT-5.5 وClaude Opus 4.8 يتعاملان مع الأطر المعقدة. النماذج المحلية عبر Ollama قد تفضل بنى أبسط.' },
          { '@type': 'HowToStep', name: 'اختبر الإطار مع بياناتك', text: 'شغّل مهمتك مع 2-3 أطر مرشحة. قِس جودة المخرجات والكمون والتكلفة. اختر الإطار الذي يُنتج أفضل النتائج لحالة استخدامك.' },
          { '@type': 'HowToStep', name: 'وثّق اختيارك', text: 'سجّل أي إطار اخترته ولماذا في مكتبة طلباتك. هذا يجعل النتائج قابلة للتكرار بين الفرق والنماذج.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ما أفضل إطار طلب لجميع المهام؟',
            acceptedAnswer: { '@type': 'Answer', text: 'لا يوجد إطار أفضل شامل. Chain-of-Thought يعمل للاستدلال، ReAct لاستخدام الأدوات، Tree-of-Thought للمهام المعقدة متعددة الخطوات. جرّب الأطر على مهمتك المحددة للعثور على الأنسب.' }
          },
          {
            '@type': 'Question',
            name: 'هل تعمل أطر الطلبات مع نماذج LLM المحلية مثل Ollama؟',
            acceptedAnswer: { '@type': 'Answer', text: 'نعم. الأطر تعمل مع GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية عبر Ollama أو LM Studio. بعض الأطر المعقدة (مثل Tree-of-Thought) قد تتطلب نماذج محلية أكبر (13B+).' }
          },
          {
            '@type': 'Question',
            name: 'هل يمكنني تغيير الإطار لنفس المهمة؟',
            acceptedAnswer: { '@type': 'Answer', text: 'نعم. اختيار الإطار تكراري. إذا أنتج Chain-of-Thought نتائج بطيئة، انتقل إلى أسلوب أبسط. إذا افتقرت المخرجات إلى التفصيل، ارقَّ إلى Tree-of-Thought. جرّب وكرّر بناءً على النتائج.' }
          }
        ]
      },
      sections: {
        whatFrameworksDo: {
          title: 'ما تفعله أطر الطلبات فعلًا',
          content: [
            '**أطر الطلبات تمنحك بنية متكررة للطلبات حتى يعرف GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro وغيرها من النماذج بالضبط أي دور يتبنّون وأي سياق يستخدمون وكيف يُنسّقون المخرجات.** الإطار ليس ميزة في النموذج؛ إنه قالب يتحكم في طريقة حديثك مع النموذج. عند استخدام إطار متسق، تقلّل خطر الهلوسة لأن النموذج يتلقى أهدافًا وقيودًا وتنسيقات مخرجات أوضح.',
            'معظم الأطر تُقسّم الطلب إلى عناصر بناء كالهدف والدور والسياق والقيود والتنسيق. هذه البنية تحوّل طلبًا مبهمًا كـ"ساعدني في هذا" إلى مهمة مُحددة جيدًا بجودة قابلة للقياس. عمليًا، الأطر مفيدة بشكل خاص عندما تحتاج إلى مخرجات قابلة للتكرار عبر نماذج ومزودين مختلفين كـ OpenAI وAnthropic وGoogle DeepMind.',
          ],
        },
        frameworksAtAGlance: {
          title: 'أطر الطلبات الرئيسية في لمحة',
          content: [
            '**أطر الطلبات الرئيسية تختلف في تركيزها: بعضها يُحسّن الاستدلال المنظم، وآخر الإبداع، وآخر المواصفات الدقيقة.** للعمل متعدد النماذج بين GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية عبر Ollama أو LM Studio، ستتنقل عادةً بين مجموعة صغيرة من الأطر المجربة جيدًا.',
            'إليك الأطر الأكثر شيوعًا وأفضل استخداماتها:',
          ],
          columns: ['الإطار', 'الأفضل لـ', 'الفكرة الجوهرية'],
          rows: [
            { 'الإطار': 'CO-STAR', 'الأفضل لـ': 'المهام المعقدة', 'الفكرة الجوهرية': 'يُقسّم المهام إلى سياق وهدف وأسلوب ونبرة وجمهور وإجابة' },
            { 'الإطار': 'CRAFT',   'الأفضل لـ': 'العمل الإبداعي', 'الفكرة الجوهرية': 'يركز على الدور والتنسيق والجمهور واختبار التنويعات' },
            { 'الإطار': 'SPECS',   'الأفضل لـ': 'المخرجات الدقيقة', 'الفكرة الجوهرية': 'يحدد النطاق والغرض والأمثلة والقيود والخطوات' },
            { 'الإطار': 'RISEN',   'الأفضل لـ': 'التكرار', 'الفكرة الجوهرية': 'يُنقّح الطلبات بسرعة عبر جولات متعددة' },
            { 'الإطار': 'TRACE',   'الأفضل لـ': 'الاستدلال', 'الفكرة الجوهرية': 'يُلزم النموذج بإظهار التفكير والاستدلال والتحليل والاستنتاج والتقييم' },
          ],
        },
        howToChooseByUseCase: {
          title: 'كيف تختار إطارًا حسب حالة الاستخدام',
          content: [
            '**يجب اختيار إطار الطلب بناءً على المخرجات التي تهمك أكثر: جودة الاستدلال أو التنوع الإبداعي أو التنسيق الصارم.** بمجرد ربط الأطر بحالات الاستخدام، يصبح الاختيار قاعدة بسيطة لا لعبة تخمين.',
            'التطابقات النموذجية:',
          ],
          items: [
            'لملخصات البحث والتحليل التقني ومسارات العمل متعددة الخطوات، استخدم إطارًا موجهًا نحو الاستدلال كـ TRACE أو CO-STAR.',
            'لمنشورات المدونة ونسخ الإعلانات وتوليد الأفكار، استخدم CRAFT أو بنية مماثلة موجهة نحو الإبداع تُركّز على الجمهور والنبرة والتنوع.',
            'لاستخراج البيانات والتقارير وإعادة هيكلة الكود، استخدم SPECS أو قالبًا آخر غني بالمواصفات يُثبّت التنسيق والقيود.',
          ],
        },
        whenToSwitch: {
          title: 'متى يجب تغيير الإطار',
          content: [
            '**يجب تغيير إطار الطلب عندما لا تستطيع بنيتك الحالية التعبير عن قيودك أو عندما تنحرف مخرجات نماذج متعددة عن التنسيق المطلوب.** هذا أسهل في رؤيته عند تشغيل نفس المهمة عبر نماذج متعددة ولاحظت عناوين غير متسقة أو حقولًا مفقودة أو عبارات إبداعية مفرطة.',
            'علامات واضحة على أن إطارًا مختلفًا أنسب:',
          ],
          items: [
            'تحتاج إلى JSON صارم مع حقول ثابتة في GPT-5.5 وGemini 3.1 Pro، مما يشير إلى إطار غني بالمواصفات كـ SPECS.',
            'تستكشف أفكار تموضع المنتج وتهمك الخيارات المتباينة أكثر من البنية الصارمة، مما يشير إلى CRAFT.',
            'تُصحّح فشل استدلال معقد في Claude Opus 4.8 وتحتاج إلى تفكير خطوة بخطوة صريح، مما يشير إلى TRACE أو إطار بأسلوب chain-of-thought.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'كيف تتولى PromptQuorum الأطر عنك',
          content: [
            '**PromptQuorum هي أداة إرسال ذكاء اصطناعي متعددة النماذج تتضمن أطر الطلبات الرئيسية ومحددًا تلقائيًا للأطر ومحررًا للأطر المخصصة حتى لا تحتاج إلى إدارة القوالب يدويًا.** يمكن لـ PromptQuorum إرسال طلب، مبني بإطارك المختار، إلى GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية عبر Ollama أو LM Studio بالتوازي.',
            'داخل PromptQuorum، يمكنك:',
          ],
          items: [
            'الاختيار من بين أطر مدمجة متعددة كـ CO-STAR وCRAFT وRISEN وSPECS وTRACE وعدة أشكال إضافية مُعدَّلة للتحليل أو التوليد.',
            'السماح للتطبيق بالتوصية بإطار تلقائيًا بناءً على نوع المهمة التي تختارها (مثلًا "ملخص بحثي" أو "نسخة تسويقية" أو "مراجعة كود").',
            'تعريف إطارك الخاص بتحديد الأدوار والأسئلة المطلوبة والقيود ومخططات المخرجات، ثم إعادة استخدامه عبر جميع النماذج والمشاريع.',
          ],
        },
        automaticSelection: {
          title: 'الاختيار التلقائي للأطر في PromptQuorum',
          content: [
            '**محدد الأطر في PromptQuorum يوصي بإطار طلب تلقائيًا باستخدام فئة المهمة وتنسيق المخرجات المطلوب وتفضيلاتك المحفوظة.** هذا يقلل الوقت الذي تقضيه في التفكير في البنية الفوقية ويتيح لك التركيز على وصف المهمة نفسها.',
            'سير عمل نموذجي:',
          ],
          numberedItems: [
            'تختار مهمة مثل "تلخيص بحث مع مراجع" أو "توليد أفكار منشورات LinkedIn".',
            'ترسم PromptQuorum هذه المهمة على إطار افتراضي — مثلًا إطار موجه نحو الاستدلال للبحث أو إبداعي للتوليد.',
            'يمكنك قبول الاقتراح أو تجاوزه بإطار مختلف أو قفل مشاريع معينة على إطار محدد للاتساق.',
          ],
        },
        customFrameworks: {
          title: 'إنشاء أطر طلباتك الخاصة في PromptQuorum',
          content: [
            '**تتيح PromptQuorum تعريف أطر طلباتك الخاصة وحفظها وإعادة استخدامها حتى تصبح مسارات العمل المحددة لنطاقك أدوات من الدرجة الأولى بدلًا من طلبات ظرفية.** هذا ضروري إذا كنت تُجري تحليلات أو تقارير أو عمليات تدقيق متكررة بمعايير داخلية صارمة.',
            'عند إنشاء إطار مخصص في PromptQuorum، يمكنك:',
          ],
          items: [
            'تعريف الأقسام (مثلًا الهدف والسياق ومصادر البيانات والقيود وتنسيق المخرجات).',
            'إضافة أسئلة إلزامية تطرحها التطبيقة في كل مرة قبل الإرسال، حتى لا تنسى المدخلات الحيوية.',
            'إرفاق تنسيقات مخرجات محددة، كأقسام Markdown أو قوائم نقطية أو JSON بمفاتيح محددة مسبقًا.',
          ],
        },
        badVsGoodExample: {
          title: 'مثال: الاستخدام السيئ مقابل الجيد لإطار',
          content: [
            '**أوضح طريقة لرؤية قيمة الأطر هي مقارنة طلب بلا بنية مع طلب مبني على إطار للمهمة ذاتها.** المثال التالي يستخدم إطار مواصفات عام مشابه لـ SPECS لكتابة تقرير قصير من بيانات.',
            '**[طلب سيئ]**',
            '"انظر إلى هذه البيانات وأخبرني برأيك."',
            '**[طلب جيد]**',
            '"أنت محلل بيانات. النطاق: حلّل بيانات المبيعات المرفقة للربع الأول 2026 في السوق الأوروبية. الغرض: حدد أبرز ثلاثة اتجاهات يجب أن يعرفها نائب رئيس المبيعات قبل التخطيط للربع الثاني. الأمثلة: نظّم الرؤى كنتائج مرقّمة بجملة واحدة لكل نتيجة. القيود: لا تخترع بيانات؛ إذا كانت مقياسة مفقودة قل \'غير موجود في مجموعة البيانات\'. الخطوات: 1) صف الاتجاه العام، 2) أبرز القيم الشاذة على مستوى الدولة، 3) اقترح إجراءً ملموسًا لكل نتيجة."',
            'في PromptQuorum، يمكنك تخزين هذه البنية كإطار قابل لإعادة الاستخدام وتطبيقها على GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro بالتوازي، ثم مقارنة كيفية تعامل كل نموذج مع نفس المواصفة.',
          ],
        },
        conclusion: {
          title: 'أي إطار طلب يجب استخدامه اليوم؟',
          content: [
            '**لمعظم المستخدمين، أفضل نقطة انطلاق هي اختيار إطار موجه نحو الاستدلال للمهام التحليلية وإطار موجه نحو الإبداع للمهام الكتابية، ثم توحيدهما عبر جميع النماذج عبر PromptQuorum.** مع نضج مسارات عملك، يمكنك تقديم إطار غني بالمواصفات للمخرجات المنظمة واختياريًا إطار مخصص مُعدَّل لنطاقك.',
            'خط أساس عملي:',
          ],
          items: [
            'استخدم إطارًا بأسلوب CO-STAR أو TRACE لملخصات البحث والتحليلات التقنية والاستدلال المعقد.',
            'استخدم إطارًا بأسلوب CRAFT لنسخ التسويق وأفكار المحتوى وتجارب الرسائل.',
            'استخدم إطارًا بأسلوب SPECS للمخرجات المنظمة كالتقارير وقوائم التحقق أو JSON التي يجب معالجتها بأدوات لاحقة.',
            'المحدد التلقائي ومحرر الأطر المخصصة في PromptQuorum يساعدانك على تطبيق هذا النمط على نطاق واسع حتى لا تعتمد جودة الطلب على الذاكرة أو المهارة الفردية.',
          ],
        },

        howToStart: {
          title: 'كيف تختار إطار طلب',
          numberedItems: [
            '**طابق نوع مهمتك مع إطار: استدلال (CoT) أو مواصفات (SPECS) أو قائم على دور (Persona) أو مخرجات منظمة (وضع JSON) أو متعدد الخطوات (Chaining).** أطر مختلفة تحل مشاكل مختلفة. CoT للمنطق، SPECS للمتطلبات المنظمة، Persona للنبرة/الأسلوب، وضع JSON لاستخراج البيانات، Chaining لمسارات العمل متعددة الخطوات.',
            '**اختبر مهمتك مع 2-3 أطر على نفس الطلبات وقارن المخرجات.** لـ"لخّص هذا المستند"، جرّب CoT (الاستدلال أولًا ثم التلخيص) مقابل التلخيص المباشر مقابل prompt chaining (استخلص النقاط الرئيسية → اجمعها). انظر أيٌّها يُنتج أفضل مخرجات لحالة استخدامك.',
            '**للمهام المعقدة، ادمج الأطر: استخدم Persona للنبرة وSPECS للقيود وCoT للاستدلال على الحالات الحدية.** لا يجب الالتزام بإطار واحد. ادمجها لتتناسب مع تعقيد مهمتك.',
            '**وثّق سبب اختيارك إطارًا لكل طلب في مكتبتك.** مثال: "لتحليل الأخطاء، نستخدم CoT لأن النموذج يحتاج إلى تتبع التنفيذ قبل تحديد الخطأ. لتوليد الكود، نستخدم SPECS لأننا نحتاج مخرجات حتمية تحترم القيود."',
            '**راجع اختيار الإطار عندما تتغير متطلبات المهمة.** إذا انتقلت مهمة التلخيص من "استخلاص الحقائق" إلى "تجميع ثلاثة منظورات"، قد تنتقل من التلخيص المباشر (أسرع) إلى Chaining (أكثر دقة). اختيار الإطار تكراري، لا دائم.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'ما أفضل إطار طلب لجميع المهام؟', a: 'لا يوجد إطار أفضل شامل. Chain-of-Thought يعمل للاستدلال، ReAct لاستخدام الأدوات، Tree-of-Thought للمهام المعقدة متعددة الخطوات. جرّب الأطر على مهمتك المحددة للعثور على الأنسب.' },
            { q: 'هل تعمل أطر الطلبات مع نماذج LLM المحلية مثل Ollama؟', a: 'نعم. الأطر تعمل مع GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية عبر Ollama أو LM Studio. بعض الأطر المعقدة (مثل Tree-of-Thought) قد تتطلب نماذج محلية أكبر (13B+).' },
            { q: 'هل يمكنني تغيير الإطار لنفس المهمة؟', a: 'نعم. اختيار الإطار تكراري. إذا أنتج Chain-of-Thought نتائج بطيئة، انتقل إلى أسلوب أبسط. إذا افتقرت المخرجات إلى التفصيل، ارقَّ إلى Tree-of-Thought. جرّب وكرّر بناءً على النتائج.' },
            { q: 'كيف أعرف أي إطار الأفضل لمهمتي؟', a: 'ابدأ بتحديد نوع مهمتك: هل تُحسّن لعمق الاستدلال أم الإبداع أم السرعة أم المخرجات المنظمة الدقيقة؟ ثم طابقها مع إطار (CoT للاستدلال، CRAFT للإبداع، SPECS للدقة). جرّب 2-3 أطر وقارن المخرجات.' },
            { q: 'هل يمكنني الجمع بين أطر متعددة في طلب واحد؟', a: 'نعم. دمج الأطر شائع. استخدم CO-STAR لتأسيس السياق والجمهور، ثم أضف Chain-of-Thought للاستدلال، ثم SPECS لقيود المخرجات. المفتاح هو الوضوح — تأكد من أن النموذج يفهم كل مكوّن.' },
            { q: 'هل يؤثر اختيار الإطار على استهلاك الرموز؟', a: 'نعم. الأطر المعقدة كـ Tree-of-Thought تُولّد خطوات استدلال أكثر وتكلف رموزًا أكثر. البنى البسيطة كالطلبات المباشرة تكلف أقل لكنها قد تُنتج نتائج أدنى جودة. اختيار الإطار ينطوي على مقايضة بين الجودة والتكلفة.' },
            { q: 'هل يجب البقاء مع إطار واحد أم التناوب بينها؟', a: 'ادمج كلا النهجين. ابنِ مجموعة صغيرة من الأطر المجربة (3-5) لأنواع مختلفة من المهام واستخدمها باتساق. لكن راجع اختياراتك عندما تتغير متطلبات المهمة أو قدرات النموذج.' },
            { q: 'كيف ترتبط أطر الطلبات بالمحدد التلقائي في PromptQuorum؟', a: 'محدد PromptQuorum يُحلّل مهمتك ويوصي بإطار بناءً على وصفك. يمكنك تجاوزه وتجربة بدائل أو بناء إطار مخصص مُكيَّف بالضبط لاحتياجاتك.' },
          ],
        },
      },
    },
    pt: {
      theme: 'Frameworks',
      title: 'Qual framework de prompt você deve usar?',
      intro: 'O framework de prompt correto depende da sua tarefa, do seu nível de experiência e se você está otimizando para criatividade, precisão ou raciocínio confiável. O PromptQuorum facilita essa escolha ao incluir múltiplos frameworks, um seletor automático e um construtor de frameworks personalizados diretamente no aplicativo.',
      publishDate: '2026-03-24',
      seoTitle: 'Escolha o Framework de Prompt Certo para sua Tarefa 2026',
      metaDescription: 'Compare frameworks de prompt: Chain-of-Thought, ReAct, Tree-of-Thought. Aprenda prós/contras para cada caso de uso e escolha o melhor para sua aplicação LLM.',
      readTime: '9 min de leitura',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/which-prompt-framework-should-you-use',
        inLanguage: 'pt-BR',
        headline: 'Qual framework de prompt você deve usar?',
        description: 'Como escolher o framework de prompt certo para GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais — e como o PromptQuorum automatiza a seleção de frameworks.',
        datePublished: '2026-03-24',
        keywords: ['frameworks de prompt', 'prompt engineering', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Grandes Modelos de Linguagem' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Escolher o Framework de Prompt Certo',
        step: [
          { '@type': 'HowToStep', name: 'Identifique seu tipo de tarefa', text: 'Determine se você precisa de raciocínio estruturado (Chain-of-Thought), uso de ferramentas (ReAct), pensamento de múltiplas etapas (Tree-of-Thought) ou output criativo. O tipo de tarefa orienta a escolha do framework.' },
          { '@type': 'HowToStep', name: 'Verifique a compatibilidade com o modelo', text: 'Alguns frameworks funcionam melhor com modelos específicos. GPT-5.5 e Claude Opus 4.8 lidam com frameworks complexos. Modelos locais via Ollama podem preferir estruturas mais simples.' },
          { '@type': 'HowToStep', name: 'Teste o framework com seus dados', text: 'Execute sua tarefa com 2–3 frameworks candidatos. Meça qualidade de output, latência e custo. Escolha o framework com melhores resultados para seu caso de uso.' },
          { '@type': 'HowToStep', name: 'Documente sua escolha', text: 'Registre qual framework você escolheu e por quê na sua biblioteca de prompts. Isso torna os resultados reproduzíveis entre equipes e modelos.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Qual é o melhor framework de prompt para todas as tarefas?',
            acceptedAnswer: { '@type': 'Answer', text: 'Não há um melhor framework universal. Chain-of-Thought funciona para raciocínio, ReAct para uso de ferramentas, Tree-of-Thought para tarefas complexas de múltiplas etapas. Teste frameworks na sua tarefa específica para encontrar o melhor ajuste.' }
          },
          {
            '@type': 'Question',
            name: 'Os frameworks de prompt funcionam com LLMs locais como Ollama?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sim. Frameworks funcionam com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais via Ollama ou LM Studio. Alguns frameworks complexos (ex.: Tree-of-Thought) podem exigir modelos locais maiores (13B+).' }
          },
          {
            '@type': 'Question',
            name: 'Posso trocar de framework para a mesma tarefa?',
            acceptedAnswer: { '@type': 'Answer', text: 'Sim. A escolha do framework é iterativa. Se Chain-of-Thought produz resultados lentos, troque para um método mais simples. Se os outputs carecem de detalhes, atualize para Tree-of-Thought. Teste e itere com base nos resultados.' }
          }
        ]
      },
      sections: {
        whatFrameworksDo: {
          title: 'O que os frameworks de prompt realmente fazem',
          content: [
            '**Frameworks de prompt fornecem uma estrutura repetível para prompts para que GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e outros modelos saibam exatamente qual papel adotar, qual contexto usar e como formatar os outputs.** Um framework não é uma funcionalidade do modelo; é um modelo que controla como você fala com o modelo. Ao usar um framework consistente, você reduz o risco de alucinações porque o modelo recebe objetivos, restrições e formatos de output mais claros.',
            'A maioria dos frameworks decompõe um prompt em blocos de construção como objetivo, função, contexto, restrições e formato. Essa estrutura transforma uma solicitação vaga como "me ajude com isso" em uma tarefa bem especificada com qualidade mensurável.',
          ],
        },
        frameworksAtAGlance: {
          title: 'Os principais frameworks de prompt em resumo',
          content: [
            '**Os principais frameworks de prompt diferem em seu foco: alguns otimizam o raciocínio estruturado, outros a criatividade e outros as especificações precisas.**',
            'Aqui estão os frameworks mais comuns e para que cada um é melhor:',
          ],
          columns: ['Framework', 'Melhor para', 'Ideia central'],
          rows: [
            { 'Framework': 'CO-STAR', 'Melhor para': 'Tarefas complexas', 'Ideia central': 'Divide tarefas em Contexto, Objetivo, Estilo, Tom, Público, Resposta' },
            { 'Framework': 'CRAFT',   'Melhor para': 'Trabalho criativo', 'Ideia central': 'Foca em função, formato, público e testes de variações' },
            { 'Framework': 'SPECS',   'Melhor para': 'Outputs precisos', 'Ideia central': 'Especifica Escopo, Propósito, Exemplos, Restrições, Passos' },
            { 'Framework': 'RISEN',   'Melhor para': 'Iteração', 'Ideia central': 'Refina prompts rapidamente em múltiplos turnos' },
            { 'Framework': 'TRACE',   'Melhor para': 'Raciocínio', 'Ideia central': 'Obriga o modelo a mostrar Pensamento, Raciocínio, Análise, Conclusão, Avaliação' },
          ],
        },
        howToChooseByUseCase: {
          title: 'Como escolher um framework por caso de uso',
          content: [
            '**Você deve escolher seu framework de prompt com base no output que mais importa para você: qualidade do raciocínio, variação criativa ou formatação estrita.**',
            'Correspondências típicas:',
          ],
          items: [
            'Para resumos de pesquisa, análise técnica ou fluxos de trabalho de múltiplas etapas, use um framework orientado ao raciocínio como TRACE ou CO-STAR.',
            'Para posts de blog, copy publicitário e ideação, use CRAFT ou uma estrutura similar orientada à criatividade que enfatize público, tom e variação.',
            'Para extração de dados, relatórios ou refatoração de código, use SPECS ou outro modelo com muitas especificações que fixe formato e restrições.',
          ],
        },
        whenToSwitch: {
          title: 'Quando você deve trocar de framework',
          content: [
            '**Você deve trocar de framework de prompt quando sua estrutura atual não consegue expressar suas restrições ou quando os outputs de múltiplos modelos se desviam do formato exigido.**',
            'Sinais claros de que um framework diferente é mais adequado:',
          ],
          items: [
            'Você precisa de JSON estrito com campos fixos no GPT-5.5 e Gemini 3.1 Pro, o que aponta para um framework com muitas especificações como SPECS.',
            'Você está explorando ideias de posicionamento de produto e se importa mais com opções divergentes do que com estrutura estrita, o que aponta para CRAFT.',
            'Você está depurando uma falha de raciocínio complexo no Claude Opus 4.8 e precisa de pensamento passo a passo explícito, o que aponta para TRACE ou um framework estilo chain-of-thought.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'Como o PromptQuorum lida com os frameworks por você',
          content: [
            '**O PromptQuorum é uma ferramenta de despacho de IA multi-modelo que inclui os principais frameworks de prompt, um seletor automático de frameworks e um editor de frameworks personalizados para que você não precise gerenciar modelos manualmente.**',
            'Dentro do PromptQuorum, você pode:',
          ],
          items: [
            'Escolher entre múltiplos frameworks integrados como CO-STAR, CRAFT, RISEN, SPECS, TRACE e várias variantes adicionais ajustadas para análise ou geração.',
            'Deixar o aplicativo recomendar um framework automaticamente com base no tipo de tarefa que você seleciona.',
            'Definir seu próprio framework especificando funções, perguntas obrigatórias, restrições e esquemas de output, então reutilizá-lo em todos os modelos e projetos.',
          ],
        },
        badVsGoodExample: {
          title: 'Exemplo: Uso ruim vs. bom de um framework',
          content: [
            '**A forma mais clara de ver o valor dos frameworks é comparar um prompt sem estrutura com um prompt baseado em framework para a mesma tarefa.**',
            '**[Prompt Ruim]**',
            '"Olhe para esses dados e me diga o que você acha."',
            '**[Prompt Bom]**',
            '"Você é um analista de dados. Escopo: Analise os dados de vendas do T1 2026 no mercado UE. Propósito: Identifique as três tendências mais importantes que um VP de Vendas deveria saber antes de planejar o T2. Exemplos: Estruture os insights como descobertas numeradas com uma frase por descoberta. Restrições: Não invente dados; se uma métrica estiver faltando, diga \'não está no conjunto de dados\'. Passos: 1) Descreva a tendência geral, 2) Destaque outliers por país, 3) Sugira uma ação concreta por descoberta."',
            'No PromptQuorum, você pode armazenar essa estrutura como um framework reutilizável e aplicá-la ao GPT-5.5, Claude Opus 4.8 e Gemini 3.1 Pro em paralelo.',
          ],
        },
        howToStart: {
          title: 'Como escolher um framework de prompt',
          numberedItems: [
            '**Mapeie seu tipo de tarefa para um framework: raciocínio (CoT), especificação (SPECS), baseado em função (Persona), output estruturado (modo JSON) ou múltiplas etapas (Chaining).** Diferentes frameworks resolvem diferentes problemas.',
            '**Teste sua tarefa com 2–3 frameworks nos mesmos prompts e compare os outputs.** Para "resuma este documento", experimente CoT vs. resumo direto vs. encadeamento de prompts. Veja qual produz o melhor output para seu caso de uso.',
            '**Para tarefas complexas, combine frameworks: use Persona para tom, SPECS para restrições e CoT para raciocinar sobre casos extremos.** Você não precisa se limitar a um único framework.',
            '**Documente por que você escolheu um framework para cada prompt na sua biblioteca.** Exemplo: "Para análise de erros, usamos CoT porque o modelo precisa rastrear a execução antes de identificar o erro."',
            '**Revise a escolha do framework quando os requisitos da tarefa mudarem.** A escolha do framework é iterativa, não permanente.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Qual é o melhor framework de prompt para todas as tarefas?', a: 'Não há um melhor framework universal. Chain-of-Thought funciona para raciocínio, ReAct para uso de ferramentas, Tree-of-Thought para tarefas complexas de múltiplas etapas. Teste frameworks na sua tarefa específica para encontrar o melhor ajuste.' },
            { q: 'Os frameworks de prompt funcionam com LLMs locais como Ollama?', a: 'Sim. Frameworks funcionam com GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais via Ollama ou LM Studio. Alguns frameworks complexos (ex.: Tree-of-Thought) podem exigir modelos locais maiores (13B+).' },
            { q: 'Posso trocar de framework para a mesma tarefa?', a: 'Sim. A escolha do framework é iterativa. Teste e itere com base nos resultados.' },
            { q: 'Como sei qual framework é melhor para minha tarefa?', a: 'Comece identificando seu tipo de tarefa: você está otimizando para profundidade de raciocínio, criatividade, velocidade ou output estruturado preciso? Então combine com um framework (CoT para raciocínio, CRAFT para criatividade, SPECS para precisão). Teste 2–3 frameworks e compare outputs.' },
            { q: 'Posso combinar múltiplos frameworks em um único prompt?', a: 'Sim. Combinar frameworks é comum. Use CO-STAR para estabelecer contexto e público, então adicione Chain-of-Thought para raciocínio, então SPECS para restrições de output.' },
            { q: 'A escolha do framework afeta o consumo de tokens?', a: 'Sim. Frameworks complexos como Tree-of-Thought geram mais etapas de raciocínio e custam mais tokens. Estruturas simples custam menos, mas podem produzir resultados de menor qualidade.' },
            { q: 'Devo ficar com um framework ou alternar entre eles?', a: 'Combine ambas as abordagens. Construa um pequeno conjunto de frameworks testados (3–5) para diferentes tipos de tarefas e use-os consistentemente. Mas revise suas escolhas quando os requisitos da tarefa ou as capacidades do modelo mudarem.' },
            { q: 'Como os frameworks de prompt se relacionam com o seletor automático do PromptQuorum?', a: 'O seletor do PromptQuorum analisa sua tarefa e recomenda um framework com base na sua descrição. Você pode substituí-lo, experimentar alternativas ou criar um framework personalizado adaptado exatamente às suas necessidades.' },
          ],
        },
      },
    },
    fr: {
      theme: 'Frameworks',
      title: 'Quel framework de prompt choisir ? (2026)',
      intro: 'Le bon framework de prompt dépend de votre tâche, de votre niveau d\'expérience et de ce que vous optimisez : créativité, précision ou raisonnement fiable. PromptQuorum simplifie ce choix avec plusieurs frameworks intégrés, un sélecteur automatique et un éditeur de frameworks personnalisés.',
      publishDate: '2026-03-24',
      readTime: '9 min de lecture',
      seoTitle: 'Quel Framework de Prompt 2026 ? Comparatif complet',
      metaDescription: 'Choisir le bon framework de prompts pour GPT-5.5, Claude Sonnet et Gemini. Comparez Chain-of-Thought, ReAct, Tree-of-Thought. Guide pratique avec cas d\'usage et conseils décisionnels pour tous les niveaux.',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/fr/prompt-engineering/which-prompt-framework-should-you-use',
        headline: 'Quel framework de prompt choisir ? (2026)',
        description: 'Comparaison des frameworks de prompt majeurs : CO-STAR, CRAFT, SPECS, RISEN, TRACE. Choisissez le bon framework pour GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et modèles locaux.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['frameworks de prompt', 'prompt engineering', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Choisir le bon framework de prompt',
        'step': [
          { '@type': 'HowToStep', 'name': 'Identifiez votre type de tâche', 'text': 'Déterminez si vous avez besoin de raisonnement structuré (Chain-of-Thought), d\'utilisation d\'outils (ReAct), de pensée multi-étapes (Tree-of-Thought) ou de créativité. Le type de tâche détermine le choix du framework.' },
          { '@type': 'HowToStep', 'name': 'Vérifiez la compatibilité du modèle', 'text': 'Certains frameworks fonctionnent mieux avec des modèles spécifiques. GPT-5.5 et Claude Opus 4.8 gèrent les frameworks complexes. Les modèles locaux via Ollama préfèrent les structures plus simples.' },
          { '@type': 'HowToStep', 'name': 'Testez le framework avec vos données', 'text': 'Testez votre tâche avec 2–3 frameworks candidats. Mesurez la qualité, la latence et le coût. Choisissez le framework avec les meilleurs résultats.' },
          { '@type': 'HowToStep', 'name': 'Documentez votre choix', 'text': 'Enregistrez quel framework vous avez choisi et pourquoi, dans votre bibliothèque de prompts. Cela rend les résultats reproductibles sur les équipes et les modèles.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Quel est le meilleur framework de prompt pour toutes les tâches ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Il n\'y a pas de meilleur framework universel. Chain-of-Thought pour le raisonnement, ReAct pour l\'utilisation d\'outils, Tree-of-Thought pour les tâches complexes multi-étapes. Testez les frameworks sur votre tâche spécifique.' }
          },
          {
            '@type': 'Question',
            'name': 'Les frameworks de prompt fonctionnent-ils avec les LLM locaux comme Ollama ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les frameworks fonctionnent avec GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et les modèles locaux via Ollama ou LM Studio. Certains frameworks complexes nécessitent des modèles locaux plus grands (13B+).' }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je changer de framework pour la même tâche ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Le choix du framework est itératif. Si Chain-of-Thought est lent, passez à une méthode plus simple. Si les sorties manquent de détail, passez à Tree-of-Thought. Testez et itérez selon les résultats.' }
          }
        ]
      },
      sections: {
        whatFrameworksDo: {
          title: 'Ce que font réellement les frameworks de prompt',
          content: [
            '**Les frameworks de prompt vous donnent une structure répétable pour que GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et autres modèles sachent exactement quel rôle adopter, quel contexte utiliser et comment formater les sorties.** Un framework n\'est pas une fonctionnalité du modèle : c\'est un gabarit qui contrôle la façon dont vous communiquez avec lui. Un framework cohérent réduit le risque d\'hallucination car le modèle reçoit des objectifs, des contraintes et des formats de sortie plus clairs.',
            'La plupart des frameworks décomposent un prompt en blocs : objectif, rôle, contexte, contraintes et format. Cette structure transforme une demande vague comme « aide-moi avec ça » en tâche précise à qualité mesurable.',
          ],
        },
        frameworksAtAGlance: {
          title: 'Les principaux frameworks de prompt en un coup d\'œil',
          content: [
            '**Les frameworks se distinguent par leur approche : certains optimisent le raisonnement structuré, d\'autres la créativité, d\'autres encore la précision des spécifications.** Pour un travail multi-modèles (GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, modèles locaux via Ollama), vous alternerez généralement entre quelques frameworks éprouvés.',
            'Les frameworks les plus courants et leurs usages optimaux :',
          ],
          columns: ['Framework', 'Idéal pour', 'Concept clé'],
          rows: [
            { 'Framework': 'CO-STAR', 'Idéal pour': 'Tâches complexes', 'Concept clé': 'Décomposer en Contexte, Objectif, Style, Ton, Audience, Réponse' },
            { 'Framework': 'CRAFT',   'Idéal pour': 'Travail créatif',  'Concept clé': 'Accent sur le rôle, le format, l\'audience et les variations' },
            { 'Framework': 'SPECS',   'Idéal pour': 'Sorties précises', 'Concept clé': 'Définir Périmètre, Objectif, Exemples, Contraintes, Étapes' },
            { 'Framework': 'RISEN',   'Idéal pour': 'Itération',        'Concept clé': 'Affiner rapidement les prompts sur plusieurs tours' },
            { 'Framework': 'TRACE',   'Idéal pour': 'Raisonnement',     'Concept clé': 'Forcer le modèle à montrer Pensée, Raisonnement, Analyse, Conclusion, Évaluation' },
          ],
        },
        howToChooseByUseCase: {
          title: 'Choisir un framework selon le cas d\'usage',
          content: [
            '**Choisissez votre framework en fonction du résultat prioritaire : qualité du raisonnement, variation créative ou formatage strict.** Une fois les frameworks associés aux cas d\'usage, le choix devient une règle simple plutôt qu\'une devinette.',
            'Correspondances typiques :',
          ],
          items: [
            'Synthèses de recherche, analyses techniques, workflows multi-étapes → framework axé raisonnement : TRACE ou CO-STAR.',
            'Articles de blog, textes publicitaires, idéation → CRAFT ou structure orientée créativité (audience, ton, variations).',
            'Extraction de données, rapports, refactoring de code → SPECS ou gabarit lourd en spécifications verrouillant format et contraintes.',
          ],
        },
        whenToSwitch: {
          title: 'Quand changer de framework',
          content: [
            '**Changez de framework quand votre structure actuelle ne peut pas exprimer vos contraintes ou quand les sorties de plusieurs modèles s\'écartent du format requis.** C\'est plus évident quand vous exécutez la même tâche sur plusieurs modèles et constatez des titres incohérents, des champs manquants ou une formulation trop créative.',
            'Signaux clairs qu\'un autre framework est plus adapté :',
          ],
          items: [
            'Vous avez besoin de JSON strict avec des champs fixes sur GPT-5.5 et Gemini 3.1 Pro → framework lourd en spécifications comme SPECS.',
            'Vous explorez des idées de positionnement produit et valorisez les options divergentes plutôt que la structure stricte → CRAFT.',
            'Vous déboguez un raisonnement complexe dans Claude Opus 4.8 et avez besoin d\'un raisonnement pas-à-pas explicite → TRACE ou framework chain-of-thought.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'Comment PromptQuorum gère les frameworks',
          content: [
            '**PromptQuorum est un outil de dispatch IA multi-modèles avec les principaux frameworks intégrés, un sélecteur automatique et un éditeur personnalisé — sans gestion manuelle des gabarits.** PromptQuorum peut envoyer un prompt structuré avec votre framework choisi simultanément à GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et aux modèles locaux via Ollama ou LM Studio.',
            'Dans PromptQuorum, vous pouvez :',
          ],
          items: [
            'Choisir parmi plusieurs frameworks intégrés : CO-STAR, CRAFT, RISEN, SPECS, TRACE et variantes pour analyse ou génération.',
            'Laisser l\'application recommander un framework automatiquement selon le type de tâche sélectionné (« synthèse de recherche », « texte marketing », « revue de code »).',
            'Définir vos propres frameworks avec rôles, questions obligatoires, contraintes et schémas de sortie, puis les réutiliser sur tous les modèles et projets.',
          ],
        },
        automaticSelection: {
          title: 'Sélection automatique de framework dans PromptQuorum',
          content: [
            '**Le sélecteur de PromptQuorum recommande automatiquement un framework en fonction de la catégorie de tâche, du format de sortie souhaité et de vos préférences enregistrées.** Cela réduit le temps passé sur la méta-structure et vous permet de vous concentrer sur la description de la tâche.',
            'Flux typique :',
          ],
          numberedItems: [
            'Vous sélectionnez une tâche : « synthétiser une recherche avec citations » ou « générer des idées de posts LinkedIn ».',
            'PromptQuorum associe cette tâche à un framework par défaut — raisonnement pour la recherche, créatif pour l\'idéation.',
            'Vous acceptez la suggestion, la remplacez par un autre framework, ou verrouillez certains projets sur un framework spécifique.',
          ],
        },
        customFrameworks: {
          title: 'Créer vos propres frameworks dans PromptQuorum',
          content: [
            '**PromptQuorum vous permet de définir, enregistrer et réutiliser vos propres frameworks pour que vos workflows métier deviennent des outils de premier plan plutôt que des prompts ad hoc.** Indispensable si vous menez des analyses, rapports ou audits récurrents avec des standards internes stricts.',
            'Lors de la création d\'un framework personnalisé, vous pouvez :',
          ],
          items: [
            'Définir les sections (Objectif, Contexte, Sources de données, Contraintes, Format de sortie).',
            'Ajouter des questions obligatoires posées à chaque utilisation pour ne jamais oublier les entrées critiques.',
            'Joindre des formats de sortie spécifiques : sections Markdown, listes à puces ou JSON avec clés prédéfinies.',
          ],
        },
        badVsGoodExample: {
          title: 'Exemple : mauvais vs bon usage d\'un framework',
          content: [
            '**La façon la plus claire de voir la valeur des frameworks est de comparer un prompt non structuré avec un prompt basé sur un framework pour la même tâche.** L\'exemple ci-dessous utilise un framework de type SPECS pour rédiger un rapport court à partir de données.',
            '**[Mauvais prompt]**',
            '« Regarde ces données et dis-moi ce que tu en penses. »',
            '**[Bon prompt]**',
            '« Tu es analyste de données. Périmètre : analyse les données de ventes Q1 2026 sur le marché UE. Objectif : identifie les trois tendances les plus importantes qu\'un VP Ventes doit connaître avant de planifier le Q2. Exemples : structure les insights en constats numérotés, une phrase par constat. Contraintes : n\'invente pas de données ; si une métrique manque, écris "absent du jeu de données". Étapes : 1) décrire la tendance globale, 2) mettre en évidence les outliers par pays, 3) proposer une action concrète par constat. »',
            'Dans PromptQuorum, vous pouvez stocker cette structure comme framework réutilisable et l\'appliquer en parallèle à GPT-5.5, Claude Opus 4.8 et Gemini 3.1 Pro.',
          ],
        },
        conclusion: {
          title: 'Quel framework utiliser aujourd\'hui ?',
          content: [
            '**Pour la plupart des utilisateurs, le meilleur point de départ : un framework axé raisonnement pour les tâches d\'analyse et un framework axé créativité pour l\'écriture, standardisés sur tous les modèles via PromptQuorum.** Au fil de la maturité des workflows, ajoutez un framework lourd en spécifications pour les sorties structurées et, optionnellement, un framework personnalisé adapté à votre domaine.',
            'Base pratique :',
          ],
          items: [
            'CO-STAR ou TRACE pour les synthèses de recherche, analyses techniques et raisonnements complexes.',
            'CRAFT pour les textes marketing, idées de contenu et expériences de messagerie.',
            'SPECS pour les sorties structurées (rapports, checklists, JSON) devant être traitées par des outils en aval.',
            'Le sélecteur automatique et l\'éditeur de frameworks de PromptQuorum vous aident à appliquer ce schéma à grande échelle.',
          ],
        },
        howToStart: {
          title: 'Comment choisir un framework de prompt : étape par étape',
          numberedItems: [
            '**Associez votre type de tâche à un framework : raisonnement (CoT), spécification (SPECS), basé sur un rôle (Persona), sortie structurée (mode JSON) ou multi-étapes (Chaining).** CoT pour la logique, SPECS pour les exigences structurées, Persona pour le ton/style, mode JSON pour l\'extraction de données, Chaining pour les workflows multi-étapes.',
            '**Testez votre tâche avec 2–3 frameworks sur les mêmes prompts et comparez les sorties.** Pour « résumer ce document » : essayez CoT (raisonner d\'abord, puis résumer) vs résumé direct vs prompt chaining (extraire les points clés → synthétiser). Voyez lequel produit le meilleur résultat.',
            '**Pour les tâches complexes, combinez les frameworks : Persona pour le ton, SPECS pour les contraintes, CoT pour les cas limites.** Vous n\'êtes pas obligé de vous cantonner à un seul framework. Combinez-les pour correspondre à la complexité de la tâche.',
            '**Documentez pourquoi vous avez choisi un framework pour chaque prompt de votre bibliothèque.** Exemple : « Pour l\'analyse de bugs, on utilise CoT car le modèle doit retracer l\'exécution. Pour la génération de code, on utilise SPECS car on a besoin d\'une sortie déterministe. »',
            '**Réévaluez le choix du framework quand les exigences de la tâche changent.** Si votre tâche de synthèse passe de « extraire des faits » à « synthétiser trois perspectives », vous passerez peut-être du résumé direct (plus rapide) au Chaining (plus nuancé). Le choix du framework est itératif, pas permanent.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions Fréquemment Posées',
          faqs: [
            { q: 'Quel est le meilleur framework de prompt pour toutes les tâches ?', a: 'Il n\'y a pas de meilleur framework universel. Chain-of-Thought fonctionne pour le raisonnement, ReAct pour l\'utilisation d\'outils, Tree-of-Thought pour les tâches complexes multi-étapes. Testez les frameworks sur votre tâche spécifique pour trouver la meilleure solution.' },
            { q: 'Les frameworks de prompt fonctionnent-ils avec les LLMs locaux comme Ollama ?', a: 'Oui. Les frameworks fonctionnent avec GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro et les modèles locaux via Ollama ou LM Studio. Certains frameworks complexes (par exemple, Tree-of-Thought) peuvent nécessiter des modèles locaux plus grands (13B+).' },
            { q: 'Puis-je changer de framework pour la même tâche ?', a: 'Oui. Le choix du framework est itératif. Si Chain-of-Thought produit des résultats lents, passez à une méthode plus simple. Si les résultats manquent de détails, passez à Tree-of-Thought. Testez et itérez en fonction des résultats.' },
            { q: 'Comment savoir quel framework est le meilleur pour ma tâche ?', a: 'Commencez par identifier le type de votre tâche : Optimisez-vous pour la profondeur du raisonnement, la créativité, la vitesse ou une sortie structurée précise ? Ensuite, associez-le à un framework (CoT pour le raisonnement, CRAFT pour la créativité, SPECS pour la précision). Testez 2–3 frameworks et comparez les résultats.' },
            { q: 'Puis-je combiner plusieurs frameworks dans un seul prompt ?', a: 'Oui. Superposer les frameworks est courant. Utilisez CO-STAR pour définir le contexte et l\'audience, puis ajoutez Chain-of-Thought pour le raisonnement, puis SPECS pour les contraintes de sortie. L\'essentiel est la clarté—assurez-vous que le modèle comprend chaque composant.' },
            { q: 'Le choix du framework affecte-t-il la consommation de tokens ?', a: 'Oui. Les frameworks complexes comme Tree-of-Thought génèrent plus d\'étapes de raisonnement et coûtent plus de tokens. Les structures simples comme les prompts directs coûtent moins cher mais peuvent produire une qualité inférieure. Le choix du framework implique un compromis entre la qualité et le coût.' },
            { q: 'Dois-je m\'en tenir à un framework ou en alterner entre plusieurs ?', a: 'Mélangez les deux approches. Constituez un petit ensemble de frameworks testés (3–5) pour différents types de tâches et utilisez-les régulièrement. Mais réexaminez vos choix lorsque les exigences de la tâche ou les capacités du modèle changent.' },
            { q: 'Comment les frameworks de prompt se rapportent-ils au sélecteur automatique de PromptQuorum ?', a: 'Le sélecteur de PromptQuorum analyse votre tâche et recommande un framework basé sur votre description. Vous pouvez le contourner, tester des alternatives ou créer un framework personnalisé adapté à vos besoins exacts.' },
          ],
        },
      },
    },
    ja: {
      theme: 'Frameworks',
      title: 'どのPromptフレームワークを使うべきか？（2026）',
      intro: '適切なプロンプトフレームワークは、タスク、経験レベル、そして創造性・精度・信頼性の高い推論のいずれを最適化するかによって異なります。PromptQuorumは複数のフレームワーク、自動セレクター、カスタムフレームワークビルダーをアプリに直接組み込み、この選択を容易にします。',
      publishDate: '2026-03-24',
      readTime: '9分で読める',
      educationalLevel: 'Intermediate',
      seoTitle: '2026年プロンプトフレームワーク完全ガイド：Chain-of-Thought選択方法と実践活用法',
      metaDescription: 'Chain-of-Thought、ReAct、Tree-of-Thoughtなどプロンプトフレームワークの完全ガイド。GPT-5.5、Claude Sonnet、Gemini、Ollama各モデルでの使い方やタスク別選択方法、各フレームワークのメリット・デメリット比較を詳しく解説。',
            schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/ja/prompt-engineering/which-prompt-framework-should-you-use',
        headline: 'どのプロンプトフレームワーク？2026年比較',
        description: 'Chain-of-Thought、ReAct、Tree-of-Thoughtを比較。ユースケース別に選べるフレームワーク。メリット・デメリット解説。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['プロンプトフレームワーク', 'プロンプトエンジニアリング', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '適切なプロンプトフレームワークを選択する',
        'step': [
          { '@type': 'HowToStep', 'name': 'タスクタイプを特定する', 'text': '構造化推論（Chain-of-Thought）、ツール使用（ReAct）、多段階思考（Tree-of-Thought）、または創造的出力が必要かを判断します。タスクタイプがフレームワーク選択を決定します。' },
          { '@type': 'HowToStep', 'name': 'モデルの互換性を確認する', 'text': '一部のフレームワークは特定のモデルでより効果的です。GPT-5.5とClaude Opus 4.8は複雑なフレームワークに対応します。Ollamaのローカルモデルはシンプルな構造を好みます。' },
          { '@type': 'HowToStep', 'name': 'データでフレームワークをテストする', 'text': '2–3個の候補フレームワークでタスクをテストします。出力品質、レイテンシ、コストを測定します。最良の結果が得られたフレームワークを選択します。' },
          { '@type': 'HowToStep', 'name': '選択を文書化する', 'text': 'プロンプトライブラリに、選択したフレームワークと理由を記録します。これにより、チームとモデル全体で結果が再現可能になります。' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'すべてのタスクに最適なプロンプトフレームワークは何ですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '万能な最適なフレームワークはありません。推論にはChain-of-Thought、ツール使用にはReAct、複雑な多段階タスクにはTree-of-Thoughtが機能します。特定のタスク上でフレームワークをテストしてください。' }
          },
          {
            '@type': 'Question',
            'name': 'プロンプトフレームワークはOllamaなどのローカルLLMで機能しますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。フレームワークはGPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、およびOllamaやLM Studio経由のローカルモデルで機能します。一部の複雑なフレームワーク（例：Tree-of-Thought）は、より大きなローカルモデル（13B+）を必要とします。' }
          },
          {
            '@type': 'Question',
            'name': '同じタスクのフレームワークを切り替えることはできますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。フレームワーク選択はイテレーティブです。Chain-of-Thoughtが遅い場合は、シンプルな方法に切り替えてください。出力が詳細不足の場合は、Tree-of-Thoughtにアップグレードします。結果に基づいてテストと反復を行います。' }
          }
        ]
      },
            sections: {
        whatFrameworksDo: {
          title: 'プロンプトフレームワークが実際に行うこと',
          content: [
            '**プロンプトフレームワークは、GPT-5.5、Claude Opus 4.8、Gemini 3.1 Proおよびその他のモデルが、どの役割を担うべきか、どのコンテキストを使用すべきか、出力をどのようにフォーマットすべきかを正確に把握できるよう、プロンプトに繰り返し使える構造を提供します。** フレームワークはモデルの機能ではなく、モデルとのコミュニケーション方法を制御するテンプレートです。一貫したフレームワークを使用すると、モデルがより明確な目標、制約、出力形式を受け取るため、幻覚リスクが低減されます。',
            'ほとんどのフレームワークは、プロンプトを目的、役割、コンテキスト、制約、フォーマットなどの構成要素に分解します。この構造により、「これを手伝って」のような曖昧なリクエストが、測定可能な品質を持つ明確に指定されたタスクに変換されます。',
          ],
        },
        frameworksAtAGlance: {
          title: '主要なプロンプトフレームワーク一覧',
          content: [
            '**主要なプロンプトフレームワークはその焦点が異なります。構造的な推論を最適化するもの、創造性を重視するもの、精確な仕様記述を優先するものがあります。** GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、OllamaやLM Studio経由のローカルモデルなど複数モデルで作業する場合、少数の実績あるフレームワークを使い分けることが一般的です。',
            '最も一般的なフレームワークとその最適な用途：',
          ],
          columns: ['フレームワーク', '最適な用途', 'コアアイデア'],
          rows: [
            { 'フレームワーク': 'CO-STAR', '最適な用途': '複雑なタスク',     'コアアイデア': 'コンテキスト・目的・スタイル・トーン・対象者・レスポンスに分解する' },
            { 'フレームワーク': 'CRAFT',   '最適な用途': 'クリエイティブ作業', 'コアアイデア': '役割・フォーマット・対象者・バリエーションテストに重点を置く' },
            { 'フレームワーク': 'SPECS',   '最適な用途': '精確な出力',        'コアアイデア': 'スコープ・目的・例・制約・手順を指定する' },
            { 'フレームワーク': 'RISEN',   '最適な用途': '反復改善',          'コアアイデア': '複数ターンにわたってプロンプトを素早く洗練させる' },
            { 'フレームワーク': 'TRACE',   '最適な用途': '推論',              'コアアイデア': '思考・推論・分析・結論・評価を示すようモデルに要求する' },
          ],
        },
        howToChooseByUseCase: {
          title: 'ユースケース別フレームワーク選択ガイド',
          content: [
            '**プロンプトフレームワークは、最も重視する出力（推論品質・創造的バリエーション・厳格なフォーマット）に基づいて選択します。** フレームワークをユースケースに紐付けると、選択は推測ではなくシンプルなルールになります。',
            '典型的な対応関係：',
          ],
          items: [
            'リサーチ要約、技術分析、マルチステップワークフロー → 推論優先フレームワーク（TRACE・CO-STAR）',
            'ブログ記事、広告コピー、アイデア出し → CRAFT（対象者・トーン・バリエーションを重視する創造性指向の構造）',
            'データ抽出、レポート、コードリファクタリング → SPECS（フォーマットと制約を固定する仕様重視のテンプレート）',
          ],
        },
        whenToSwitch: {
          title: 'フレームワークを切り替えるタイミング',
          content: [
            '**現在の構造で制約を表現できない場合、または複数モデルの出力が必要なフォーマットから外れる場合は、フレームワークを切り替えます。** 同じタスクを複数モデルで実行したときに一貫性のない見出し、欠落フィールド、過度に創造的な表現が見られる場合、これが最も明確なサインです。',
            '別のフレームワークが適している明確なサイン：',
          ],
          items: [
            'GPT-5.5とGemini 3.1 Proで固定フィールドの厳格なJSONが必要 → SPECS のような仕様重視フレームワーク',
            '製品ポジショニングのアイデアを探索しており、厳格な構造より多様な選択肢を重視 → CRAFT',
            'Claude Opus 4.8で複雑な推論エラーをデバッグしており、明示的なステップバイステップの思考が必要 → TRACEまたはチェーン・オブ・ソートフレームワーク',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'PromptQuorumによるフレームワーク管理',
          content: [
            '**PromptQuorumは、主要なプロンプトフレームワーク、自動フレームワークセレクター、カスタムフレームワークエディターを備えたマルチモデルAIディスパッチツールで、テンプレートの手動管理が不要です。** 選択したフレームワークで構造化したプロンプトを、GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、OllamaやLM Studio経由のローカルモデルに同時に送信できます。',
            'PromptQuorumでできること：',
          ],
          items: [
            'CO-STAR、CRAFT、RISEN、SPECS、TRACEなど複数の組み込みフレームワークと分析・生成に特化したバリアントから選択',
            'タスクタイプ（「リサーチ要約」「マーケティングコピー」「コードレビュー」など）に基づいてフレームワークを自動推奨させる',
            '役割・必須質問・制約・出力スキーマを指定した独自フレームワークを定義し、全モデル・全プロジェクトで再利用',
          ],
        },
        automaticSelection: {
          title: 'PromptQuorumの自動フレームワーク選択',
          content: [
            '**PromptQuorumのフレームワークセレクターは、タスクカテゴリ、希望する出力形式、保存された設定に基づいて自動的にフレームワークを推奨します。** メタ構造について考える時間を減らし、タスク自体の説明に集中できます。',
            '典型的なフロー：',
          ],
          numberedItems: [
            '「引用付きリサーチ要約」や「LinkedIn投稿アイデアの生成」などのタスクを選択する',
            'PromptQuorumがタスクをデフォルトフレームワークにマッピング（例：リサーチには推論優先、アイデア出しにはクリエイティブフレームワーク）',
            '提案を承認するか、別のフレームワークに変更するか、特定のプロジェクトを特定のフレームワークにロックする',
          ],
        },
        customFrameworks: {
          title: 'PromptQuorumで独自フレームワークを作成する',
          content: [
            '**PromptQuorumでは独自のプロンプトフレームワークを定義・保存・再利用できるため、ドメイン固有のワークフローがアドホックなプロンプトではなく一流ツールになります。** 厳格な社内基準で繰り返し分析、レポート、監査を行う場合に不可欠です。',
            'カスタムフレームワーク作成時にできること：',
          ],
          items: [
            'セクションを定義する（例：目的・コンテキスト・データソース・制約・出力フォーマット）',
            'ディスパッチごとにアプリが質問する必須質問を追加し、重要な入力を忘れないようにする',
            'マークダウンセクション・箇条書き・事前定義キーを持つJSONなど特定の出力形式を設定する',
          ],
        },
        badVsGoodExample: {
          title: '実例：悪いプロンプト vs 良いプロンプト',
          content: [
            '**フレームワークの価値を最も明確に示す方法は、同じタスクに対して非構造化プロンプトとフレームワークベースのプロンプトを比較することです。** 以下の例では、SPECSに似た汎用的な仕様指向フレームワークを使ってデータから短いレポートを作成します。',
            '**【悪いプロンプト】**',
            '「このデータを見て、どう思うか教えて。」',
            '**【良いプロンプト】**',
            '「あなたはデータアナリストです。スコープ：EU市場の2026年Q1の売上データを分析する。目的：VP営業がQ2計画前に知るべき最も重要な3つのトレンドを特定する。例：各発見事項を番号付きで、1文ずつ記述する。制約：データを捏造しない。指標がない場合は「データセットに存在しない」と記載する。手順：1）全体トレンドを説明する、2）国別の外れ値をハイライトする、3）各発見事項に対して1つの具体的なアクションを提案する。」',
            'PromptQuorumでは、この構造を再利用可能なフレームワークとして保存し、GPT-5.5、Claude Opus 4.8、Gemini 3.1 Proに同時に適用して、各モデルが同じ仕様をどのように処理するかを比較できます。',
          ],
        },
        conclusion: {
          title: '今日使うべきプロンプトフレームワークは？',
          content: [
            '**ほとんどのユーザーにとって、最善の出発点は分析タスク向けに推論重視のフレームワーク、執筆タスク向けに創造性重視のフレームワークを1つずつ選び、PromptQuorumで全モデルに標準化することです。** ワークフローが成熟したら、構造化出力用の仕様重視フレームワーク、オプションでドメイン特化のカスタムフレームワークを導入できます。',
            '実践的なベースライン：',
          ],
          items: [
            'リサーチ要約・技術分析・複雑な推論 → CO-STARまたはTRACEスタイルのフレームワーク',
            'マーケティングコピー・コンテンツアイデア・メッセージング実験 → CRAFTスタイルのフレームワーク',
            'レポート・チェックリスト・JSON（後続ツールで解析必須）などの構造化出力 → SPECSスタイルのフレームワーク',
            'PromptQuorumの自動セレクターとカスタムフレームワークエディターが、個人の記憶やスキルに依存せずプロンプト品質を維持します。',
          ],
        },
        howToStart: {
          title: 'ステップバイステップ：プロンプトフレームワークの選び方',
          numberedItems: [
            '**タスクタイプをフレームワークにマッピングする：推論（CoT）、仕様（SPECS）、役割ベース（ペルソナ）、構造化出力（JSONモード）、マルチステップ（チェーニング）。** 論理にはCoT、構造化要件にはSPECS、トーン/スタイルにはペルソナ、データ抽出にはJSONモード、マルチステップワークフローにはチェーニング。',
            '**同じプロンプトで2〜3のフレームワークをテストして出力を比較する。** 「このドキュメントを要約する」の場合：CoT（先に推論、次に要約）vs直接要約vsプロンプトチェーニング（要点抽出→統合）を試す。ユースケースに最適なものを確認する。',
            '**複雑なタスクにはフレームワークを組み合わせる：トーンにペルソナ、制約にSPECS、エッジケースの推論にCoT。** 1つのフレームワークに縛られる必要はない。タスクの複雑さに合わせて組み合わせる。',
            '**ライブラリの各プロンプトでフレームワークを選んだ理由を記録する。** 例：「バグ分析にはCoTを使う（モデルが実行を追う必要があるため）。コード生成にはSPECSを使う（決定論的で制約に沿った出力が必要なため）。」',
            '**タスク要件が変わったらフレームワークの選択を見直す。** 要約タスクが「事実の抽出」から「3つの視点の統合」に変わったら、直接要約（より速い）からチェーニング（より細かい）に移行するかもしれない。フレームワークの選択は反復的なもの。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            { q: 'すべてのタスクに最適なプロンプトフレームワークは何ですか？', a: 'すべてのタスクに対する普遍的な最適なフレームワークはありません。Chain-of-Thoughtは推論に機能し、ReActはツールの使用に、Tree-of-Thoughtは複雑なマルチステップタスクに機能します。特定のタスクでフレームワークをテストして、最適なものを見つけてください。' },
            { q: 'プロンプトフレームワークはOllamaなどのローカルLLMで機能しますか？', a: 'はい。フレームワークはGPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、およびOllamaまたはLM Studio経由のローカルモデルで機能します。一部の複雑なフレームワーク（例：Tree-of-Thought）では、より大きなローカルモデル（13B以上）が必要な場合があります。' },
            { q: '同じタスクでフレームワークを切り替えることはできますか？', a: 'はい。フレームワークの選択は反復的です。Chain-of-Thoughtが遅い結果を生成する場合は、より単純な方法に切り替えます。出力が詳細に欠ける場合は、Tree-of-Thoughtにアップグレードします。結果に基づいてテストと反復を行います。' },
            { q: 'タスクに最適なフレームワークをどのようにして知ることができますか？', a: 'タスクタイプを特定することから始めます：推論の深さ、創造性、速度、または正確な構造化出力を最適化していますか？次に、フレームワーク（推論用CoT、創造性用CRAFT、精度用SPECS）にマップします。2～3のフレームワークをテストして、出力を比較します。' },
            { q: '1つのプロンプトに複数のフレームワークを組み合わせることはできますか？', a: 'はい。フレームワークをレイヤーリングするのは一般的です。CO-STARを使用してコンテキストとオーディエンスを設定し、Chain-of-Thoughtで推論を追加し、SPECS出力制約を追加します。重要なのは明確性です。モデルが各コンポーネントを理解していることを確認してください。' },
            { q: 'フレームワークの選択はトークン消費に影響しますか？', a: 'はい。Tree-of-Thoughtのような複雑なフレームワークはより多くの推論ステップを生成し、より多くのトークンがかかります。直接プロンプトのようなシンプルな構造はコストが低いですが、低い品質の結果が出る可能性があります。フレームワークの選択には品質とコストのトレードオフが関わります。' },
            { q: '1つのフレームワークに固執すべきか、それとも切り替えるべきか？', a: '両方のアプローチを混ぜます。異なるタスクタイプ（3～5）のテスト済みフレームワークの小さなセットを構築し、それらを一貫して使用します。ただし、タスク要件またはモデル機能が変わったときは、選択を再検討してください。' },
            { q: 'プロンプトフレームワークはPromptQuorumの自動セレクターとどのように関連していますか？', a: 'PromptQuorumのセレクターはタスクを分析し、説明に基づいてフレームワークを推奨します。これを上書きしてか、代替案をテストするか、正確なニーズに合わせたカスタムフレームワークを構築することもできます。' },
          ],
        },
      },
    },
    zh: {
      theme: 'Frameworks',
      title: '应该选择哪种提示词框架？（2026）',
      intro: '合适的提示词框架取决于您的任务、经验水平以及您是在优化创造力、精确性还是可靠推理。PromptQuorum通过在应用中直接集成多个框架、自动选择器和自定义框架构建器，使这一选择更加简单。',
      publishDate: '2026-03-24',
      readTime: '阅读约9分钟',
      educationalLevel: 'Intermediate',
      seoTitle: '2026年提示词框架完全指南：选择方法、应用场景与GPT-5.5 Claude Gemini活用方法指南',
      metaDescription: 'Chain-of-Thought、ReAct、Tree-of-Thought等主流提示词框架的完全对比与应用指南。涵盖GPT-5.5、Claude Sonnet、Gemini、Ollama等主流大语言模型的应用建议。框架优缺点深度分析与对比，企业场景选择方案，实战技巧与最佳实践详细讲解。',
            schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/zh/prompt-engineering/which-prompt-framework-should-you-use',
        headline: '选择哪个提示框架？2026年对比',
        description: 'Chain-of-Thought vs ReAct vs Tree-of-Thought框架对比。按用例选择。优缺点解析，推荐决策指南。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['提示框架', '提示工程', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '选择正确的提示词框架',
        'step': [
          { '@type': 'HowToStep', 'name': '确定您的任务类型', 'text': '判断您是否需要结构化推理（Chain-of-Thought）、工具使用（ReAct）、多步思维（Tree-of-Thought）或创意输出。任务类型决定框架选择。' },
          { '@type': 'HowToStep', 'name': '检查模型兼容性', 'text': '某些框架在特定模型上效果更好。GPT-5.5和Claude Opus 4.8支持复杂框架。通过Ollama的本地模型可能更喜欢简单结构。' },
          { '@type': 'HowToStep', 'name': '用您的数据测试框架', 'text': '用2–3个候选框架测试任务。测量输出质量、延迟和成本。选择效果最佳的框架。' },
          { '@type': 'HowToStep', 'name': '文档化您的选择', 'text': '在提示词库中记录选择的框架及原因。这使结果在团队和模型中可复现。' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '什么是最好的提示框架适用于所有任务？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '没有通用的最佳框架。Chain-of-Thought用于推理，ReAct用于工具使用，Tree-of-Thought用于复杂多步任务。在您的特定任务上测试框架找到最佳选择。' }
          },
          {
            '@type': 'Question',
            'name': '提示词框架是否与Ollama等本地LLM兼容？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '是的。框架与GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro以及通过Ollama或LM Studio的本地模型兼容。一些复杂框架（如Tree-of-Thought）可能需要更大的本地模型（13B+）。' }
          },
          {
            '@type': 'Question',
            'name': '我可以为相同的任务切换框架吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '是的。框架选择是迭代的。如果Chain-of-Thought太慢，切换到更简单的方法。如果输出缺乏细节，升级到Tree-of-Thought。根据结果测试和迭代。' }
          }
        ]
      },
            sections: {
        whatFrameworksDo: {
          title: '提示词框架的实际作用',
          content: [
            '**提示词框架为您的提示词提供可重复的结构，使GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro和其他模型确切知道应扮演什么角色、使用什么上下文以及如何格式化输出。** 框架不是模型功能，而是控制您与模型通信方式的模板。使用一致的框架可以降低幻觉风险，因为模型接收到更清晰的目标、约束和输出格式。',
            '大多数框架将提示词分解为目标、角色、上下文、约束和格式等构建块。这种结构将"帮我处理这个"之类的模糊请求转变为具有可测量质量的明确指定任务。',
          ],
        },
        frameworksAtAGlance: {
          title: '主要提示词框架一览',
          content: [
            '**主要提示词框架在侧重点上各有不同：有些优化结构化推理，有些注重创造力，还有一些强调精确规范。** 对于跨GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro和本地模型（通过Ollama或LM Studio）的多模型工作，通常在少数经过验证的框架之间切换。',
            '最常用的框架及其最适用场景：',
          ],
          columns: ['框架', '最适用于', '核心理念'],
          rows: [
            { '框架': 'CO-STAR', '最适用于': '复杂任务',   '核心理念': '将任务分解为上下文、目标、风格、语气、受众、响应' },
            { '框架': 'CRAFT',   '最适用于': '创意工作',   '核心理念': '注重角色、格式、受众和测试变体' },
            { '框架': 'SPECS',   '最适用于': '精确输出',   '核心理念': '指定范围、目的、示例、约束、步骤' },
            { '框架': 'RISEN',   '最适用于': '迭代改进',   '核心理念': '通过多轮对话快速精炼提示词' },
            { '框架': 'TRACE',   '最适用于': '推理任务',   '核心理念': '强制模型展示思维、推理、分析、结论、评估' },
          ],
        },
        howToChooseByUseCase: {
          title: '按使用场景选择框架',
          content: [
            '**根据最重要的输出结果选择提示词框架：推理质量、创意变体或严格格式。** 将框架与使用场景关联后，选择变成简单规则而非猜测游戏。',
            '典型对应关系：',
          ],
          items: [
            '研究摘要、技术分析或多步骤工作流 → 推理优先框架（TRACE或CO-STAR）',
            '博客文章、广告文案和创意生成 → CRAFT或类似创意导向结构（强调受众、语气和变体）',
            '数据提取、报告或代码重构 → SPECS或其他规范密集型模板（锁定格式和约束条件）',
          ],
        },
        whenToSwitch: {
          title: '何时切换框架',
          content: [
            '**当当前结构无法表达您的约束条件，或多个模型的输出偏离所需格式时，应切换提示词框架。** 当您在多个模型上运行相同任务并发现标题不一致、字段缺失或措辞过于随意时，这一点最为明显。',
            '需要切换框架的明确信号：',
          ],
          items: [
            '需要跨GPT-5.5和Gemini 3.1 Pro使用固定字段的严格JSON → 规范密集型框架如SPECS',
            '正在探索产品定位想法，更注重发散性选项而非严格结构 → CRAFT',
            '在Claude Opus 4.8中调试复杂推理失败，需要明确的逐步思考 → TRACE或思维链框架',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'PromptQuorum如何为您管理框架',
          content: [
            '**PromptQuorum是一款多模型AI调度工具，内置主要提示词框架、自动框架选择器和自定义框架编辑器，无需手动管理模板。** PromptQuorum可将用所选框架结构化的一个提示词同时发送到GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro以及通过Ollama或LM Studio的本地模型。',
            '在PromptQuorum中，您可以：',
          ],
          items: [
            '从多个内置框架中选择：CO-STAR、CRAFT、RISEN、SPECS、TRACE，以及针对分析或生成优化的额外变体',
            '让应用根据您选择的任务类型（如"研究摘要"、"营销文案"或"代码审查"）自动推荐框架',
            '定义包含角色、必填问题、约束条件和输出模式的自定义框架，然后在所有模型和项目中复用',
          ],
        },
        automaticSelection: {
          title: 'PromptQuorum的自动框架选择',
          content: [
            '**PromptQuorum的框架选择器根据任务类别、所需输出格式和已保存的偏好自动推荐提示词框架。** 减少在元结构上花费的时间，让您专注于描述任务本身。',
            '典型流程：',
          ],
          numberedItems: [
            '选择任务，如"总结带引用的研究"或"生成LinkedIn帖子创意"',
            'PromptQuorum将此任务映射到默认框架——例如研究类用推理优先框架，创意类用创意框架',
            '接受建议、用其他框架替换，或将特定项目锁定到特定框架以保持一致性',
          ],
        },
        customFrameworks: {
          title: '在PromptQuorum中创建自定义框架',
          content: [
            '**PromptQuorum允许您定义、保存和复用自定义提示词框架，使特定领域的工作流成为一流工具而非临时提示词。** 对于按严格内部标准进行重复分析、报告或审计的场景，这一功能不可或缺。',
            '创建自定义框架时，您可以：',
          ],
          items: [
            '定义各节（例如目标、上下文、数据来源、约束条件、输出格式）',
            '添加每次调度前应用会询问的必填问题，确保不遗漏关键输入',
            '附加特定输出格式，如Markdown节、项目符号列表或带预定义键的JSON',
          ],
        },
        badVsGoodExample: {
          title: '示例：低效提示词 vs 高效提示词',
          content: [
            '**展示框架价值最直观的方式，是对比同一任务的非结构化提示词和基于框架的提示词。** 以下示例使用类似SPECS的通用规范型框架从数据中撰写简短报告。',
            '**【低效提示词】**',
            '"看看这些数据，告诉我你的看法。"',
            '**【高效提示词】**',
            '"你是数据分析师。范围：分析2026年Q1欧盟市场的附件销售数据。目的：识别VP销售在规划Q2前需要了解的三个最重要趋势。示例：将洞察结构化为编号发现，每条发现一句话。约束：不要编造数据；如果某项指标缺失，请说明"数据集中不存在"。步骤：1）描述整体趋势，2）突出国别异常，3）为每条发现建议一个具体行动。"',
            '在PromptQuorum中，您可以将此结构保存为可复用框架，同时应用于GPT-5.5、Claude Opus 4.8和Gemini 3.1 Pro，然后比较每个模型如何处理相同规范。',
          ],
        },
        conclusion: {
          title: '今天应该使用哪种提示词框架？',
          content: [
            '**对于大多数用户，最佳起点是为分析任务选择一个推理重点框架，为写作任务选择一个创意重点框架，然后通过PromptQuorum在所有模型中标准化。** 随着工作流成熟，可以引入规范密集型框架处理结构化输出，以及针对特定领域的自定义框架。',
            '实用基线：',
          ],
          items: [
            '研究摘要、技术分析和复杂推理 → CO-STAR或TRACE风格框架',
            '营销文案、内容创意和消息测试 → CRAFT风格框架',
            '结构化输出（报告、清单、需被下游工具解析的JSON）→ SPECS风格框架',
            'PromptQuorum的自动选择器和自定义框架编辑器帮助您大规模执行此模式，使提示词质量不依赖于个人记忆或技能。',
          ],
        },
        howToStart: {
          title: '如何选择提示词框架：分步指南',
          numberedItems: [
            '**将任务类型映射到框架：推理（CoT）、规范（SPECS）、角色型（角色扮演）、结构化输出（JSON模式）或多步骤（链式）。** 逻辑用CoT，结构化需求用SPECS，语气/风格用角色扮演，数据提取用JSON模式，多步骤工作流用链式提示。',
            '**在相同提示词上用2-3个框架测试您的任务并比较输出。** 对于"总结此文档"：尝试CoT（先推理再总结）vs直接总结vs提示词链式（提取要点→综合）。查看哪种方式最适合您的用例。',
            '**对于复杂任务，组合框架：用角色扮演设定语气，SPECS定义约束，CoT处理边缘情况。** 不必局限于一个框架，根据任务复杂度组合使用。',
            '**记录为库中每个提示词选择框架的原因。** 示例："错误分析使用CoT（因为模型需要追踪执行流程）；代码生成使用SPECS（因为需要确定性的、符合约束的输出）。"',
            '**任务需求变化时重新评估框架选择。** 如果摘要任务从"提取事实"转变为"综合三个视角"，可能会从直接摘要（更快）转移到链式（更细致）。框架选择是迭代的，而非永久的。',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: '所有任务最好的提示词框架是什么？', a: '没有通用最佳框架。Chain-of-Thought适合推理，ReAct适合工具使用，Tree-of-Thought适合复杂的多步骤任务。在您的特定任务上测试框架，找到最合适的。' },
            { q: '提示词框架能在Ollama等本地LLM上使用吗？', a: '可以。框架适用于GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro以及通过Ollama或LM Studio的本地模型。某些复杂框架（例如Tree-of-Thought）可能需要更大的本地模型（13B+）。' },
            { q: '我可以针对同一任务切换框架吗？', a: '可以。框架选择是迭代的。如果Chain-of-Thought生成缓慢的结果，切换到更简单的方法。如果输出缺乏细节，升级为Tree-of-Thought。根据结果进行测试和迭代。' },
            { q: '我如何知道哪个框架最适合我的任务？', a: '首先识别您的任务类型：是否在优化推理深度、创意、速度或精确的结构化输出？然后匹配到框架（推理用CoT、创意用CRAFT、精度用SPECS）。测试2-3个框架并比较输出。' },
            { q: '我可以在一个提示词中组合多个框架吗？', a: '可以。框架分层很常见。使用CO-STAR设置上下文和受众，添加Chain-of-Thought进行推理，再添加SPECS输出约束。关键是明确性——确保模型理解每个组件。' },
            { q: '框架选择是否影响token消耗？', a: '是的。像Tree-of-Thought这样的复杂框架生成更多推理步骤，消耗更多token。直接提示等简单结构成本低但可能输出质量较低。框架选择涉及质量与成本的权衡。' },
            { q: '我应该坚持一个框架还是在不同框架间切换？', a: '两种方法都混合使用。为不同任务类型构建一个小的已测试框架集（3-5个）并一致地使用它们。但当任务需求或模型能力改变时重新评估您的选择。' },
            { q: '提示词框架与PromptQuorum自动选择器如何关联？', a: 'PromptQuorum的选择器分析您的任务并根据您的描述推荐一个框架。您可以覆盖它、测试替代方案或构建一个针对您的确切需求的自定义框架。' },
          ],
        },
      },
    },
  ko: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: '어떤 프롬프트 프레임워크를 사용해야 합니까?',
      intro: '올바른 프롬프트 프레임워크는 작업 유형, 경험 수준, 그리고 창의성·정밀도·안정적 추론 중 무엇을 최적화하느냐에 따라 달라집니다. PromptQuorum은 다양한 프레임워크, 자동 선택기, 커스텀 프레임워크 빌더를 앱 내에 직접 제공하여 이 선택을 더욱 쉽게 해 줍니다.',
      publishDate: '2026-03-24',
      seoTitle: '2026년 작업에 맞는 프롬프트 프레임워크 선택하기',
      metaDescription: '프롬프트 프레임워크 비교: Chain-of-Thought, ReAct, Tree-of-Thought. 각 사용 사례별 장단점을 알아보고 LLM 애플리케이션에 가장 적합한 프레임워크를 선택하십시오.',
      readTime: '9분 읽기',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '어떤 프롬프트 프레임워크를 사용해야 합니까?',
        description: 'GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 로컬 모델에 적합한 프롬프트 프레임워크 선택 방법과 PromptQuorum의 프레임워크 자동 선택 기능을 소개합니다.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        'url': 'https://www.promptquorum.com/prompt-engineering/which-prompt-framework-should-you-use',
        keywords: ['prompt frameworks', 'prompt engineering', 'GPT-5.5', 'Claude Opus 4.8', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.8', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '올바른 프롬프트 프레임워크 선택하기',
        'step': [
          { '@type': 'HowToStep', 'name': '작업 유형 파악', 'text': '구조적 추론(Chain-of-Thought), 도구 사용(ReAct), 다단계 사고(Tree-of-Thought), 또는 창의적 출력 중 무엇이 필요한지 결정하십시오. 작업 유형이 프레임워크 선택을 결정합니다.' },
          { '@type': 'HowToStep', 'name': '모델 호환성 확인', 'text': '일부 프레임워크는 특정 모델에서 더 잘 작동합니다. GPT-5.5와 Claude Opus 4.8은 복잡한 프레임워크를 처리합니다. Ollama를 통한 로컬 모델은 더 간단한 구조를 선호할 수 있습니다.' },
          { '@type': 'HowToStep', 'name': '데이터로 프레임워크 테스트', 'text': '2~3개의 후보 프레임워크로 작업을 실행하십시오. 출력 품질, 지연 시간, 비용을 측정하고 사용 사례에 가장 좋은 결과를 내는 프레임워크를 선택하십시오.' },
          { '@type': 'HowToStep', 'name': '선택 사항 문서화', 'text': '어떤 프레임워크를 선택했는지와 그 이유를 프롬프트 라이브러리에 기록하십시오. 이를 통해 팀과 모델 전반에서 결과를 재현할 수 있습니다.' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '모든 작업에 가장 좋은 프롬프트 프레임워크는 무엇입니까?',
            'acceptedAnswer': { '@type': 'Answer', 'text': '모든 경우에 통용되는 최고의 프레임워크는 없습니다. Chain-of-Thought는 추론에, ReAct는 도구 사용에, Tree-of-Thought는 복잡한 다단계 작업에 적합합니다. 특정 작업에 프레임워크를 테스트하여 최적의 적합성을 찾으십시오.' }
          },
          {
            '@type': 'Question',
            'name': '프롬프트 프레임워크는 Ollama 같은 로컬 LLM에서도 작동합니까?',
            'acceptedAnswer': { '@type': 'Answer', 'text': '그렇습니다. 프레임워크는 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro뿐만 아니라 Ollama나 LM Studio를 통한 로컬 모델에서도 작동합니다. 일부 복잡한 프레임워크(예: Tree-of-Thought)는 더 큰 로컬 모델(13B 이상)을 필요로 할 수 있습니다.' }
          },
          {
            '@type': 'Question',
            'name': '같은 작업에 프레임워크를 전환할 수 있습니까?',
            'acceptedAnswer': { '@type': 'Answer', 'text': '그렇습니다. 프레임워크 선택은 반복적입니다. Chain-of-Thought가 느린 결과를 낳으면 더 간단한 방법으로 전환하십시오. 출력이 충분한 세부 정보를 담지 못하면 Tree-of-Thought로 업그레이드하십시오. 결과를 바탕으로 테스트하고 반복하십시오.' }
          }
        ]
      },
      sections: {
        whatFrameworksDo: {
          title: '프롬프트 프레임워크가 실제로 하는 일',
          content: [
            '**프롬프트 프레임워크는 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 기타 모델이 어떤 역할을 맡아야 하는지, 어떤 맥락을 사용해야 하는지, 출력 형식을 어떻게 지정해야 하는지 정확히 알 수 있도록 반복 가능한 프롬프트 구조를 제공합니다.** 프레임워크는 모델 기능이 아닙니다. 모델과 소통하는 방식을 제어하는 템플릿입니다. 일관된 프레임워크를 사용하면 모델이 더 명확한 목표, 제약 조건, 출력 형식을 받게 되어 환각 위험을 줄일 수 있습니다.',
            '대부분의 프레임워크는 프롬프트를 목표, 역할, 맥락, 제약 조건, 형식과 같은 구성 요소로 분해합니다. 이 구조는 "이것을 도와주세요"와 같은 모호한 요청을 측정 가능한 품질의 명확하게 지정된 작업으로 전환합니다. 실제로 프레임워크는 OpenAI, Anthropic, Google DeepMind와 같은 다양한 모델 및 제공업체에서 재현 가능한 출력이 필요할 때 특히 유용합니다.',
          ],
        },
        frameworksAtAGlance: {
          title: '주요 프롬프트 프레임워크 한눈에 보기',
          content: [
            '**주요 프롬프트 프레임워크는 초점에 따라 다릅니다. 일부는 구조적 추론을 최적화하고, 다른 것들은 창의성을, 또 다른 것들은 간결한 명세를 위해 설계되었습니다.** GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 Ollama나 LM Studio를 통한 로컬 모델에 걸친 멀티 모델 작업에서는 보통 소수의 검증된 프레임워크를 번갈아 사용하게 됩니다.',
            '가장 일반적인 프레임워크와 각각의 최적 사용 사례는 다음과 같습니다:',
          ],
          columns: ['프레임워크', '최적 용도', '핵심 아이디어'],
          rows: [
            { '프레임워크': 'CO-STAR', '최적 용도': '복잡한 작업', '핵심 아이디어': '작업을 맥락(Context), 목표(Objective), 스타일(Style), 어조(Tone), 독자(Audience), 응답(Response)으로 분해합니다' },
            { '프레임워크': 'CRAFT',   '최적 용도': '창의적 작업', '핵심 아이디어': '역할, 형식, 독자, 변형 테스트에 집중합니다' },
            { '프레임워크': 'SPECS',   '최적 용도': '정밀한 출력', '핵심 아이디어': '범위(Scope), 목적(Purpose), 예시(Examples), 제약 조건(Constraints), 단계(Steps)를 명세합니다' },
            { '프레임워크': 'RISEN',   '최적 용도': '반복 개선', '핵심 아이디어': '여러 차례에 걸쳐 프롬프트를 신속하게 개선합니다' },
            { '프레임워크': 'TRACE',   '최적 용도': '추론', '핵심 아이디어': '모델이 사고(Thought), 추론(Reasoning), 분석(Analysis), 결론(Conclusion), 평가(Evaluation)를 순서대로 보여 주도록 강제합니다' },
          ],
        },
        howToChooseByUseCase: {
          title: '사용 사례별 프레임워크 선택 방법',
          content: [
            '**프롬프트 프레임워크는 가장 중요한 출력 기준, 즉 추론 품질·창의적 다양성·엄격한 형식 중 무엇인지에 따라 선택해야 합니다.** 프레임워크를 사용 사례에 연결하면 선택이 추측 게임이 아닌 단순한 규칙이 됩니다.',
            '일반적인 매핑:',
          ],
          items: [
            '연구 요약, 기술 분석, 다단계 워크플로우에는 TRACE 또는 CO-STAR와 같은 추론 우선 프레임워크를 사용하십시오.',
            '블로그 포스트, 광고 카피, 아이디어 발굴에는 독자, 어조, 변형을 강조하는 CRAFT 또는 유사한 창의성 지향 구조를 사용하십시오.',
            '데이터 추출, 보고서 작성, 코드 리팩터링에는 형식과 제약 조건을 고정하는 SPECS 또는 다른 명세 중심 템플릿을 사용하십시오.',
          ],
        },
        whenToSwitch: {
          title: '프레임워크를 전환해야 할 때',
          content: [
            '**현재 구조가 제약 조건을 표현할 수 없거나 여러 모델의 출력이 요구 형식에서 벗어나기 시작할 때 프롬프트 프레임워크를 전환해야 합니다.** 이는 동일한 작업을 여러 모델에 실행할 때 일관성 없는 제목, 누락된 필드, 지나치게 창의적인 표현을 발견할 때 가장 쉽게 알 수 있습니다.',
            '다른 프레임워크가 더 적합하다는 명확한 신호:',
          ],
          items: [
            'GPT-5.5와 Gemini 3.1 Pro 전반에서 고정 필드를 갖는 엄격한 JSON이 필요한 경우 — SPECS와 같은 명세 중심 프레임워크를 고려하십시오.',
            '엄격한 구조보다 발산적 옵션을 더 중시하면서 제품 포지셔닝 아이디어를 탐색하는 경우 — CRAFT를 고려하십시오.',
            'Claude Opus 4.8의 복잡한 추론 실패를 디버깅하고 명시적인 단계별 사고가 필요한 경우 — TRACE 또는 chain-of-thought 스타일 프레임워크를 고려하십시오.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'PromptQuorum이 프레임워크를 처리하는 방법',
          content: [
            '**PromptQuorum은 주요 프롬프트 프레임워크, 자동 프레임워크 선택기, 커스텀 프레임워크 편집기를 포함하는 멀티 모델 AI 디스패치 도구로, 템플릿을 수동으로 관리할 필요가 없습니다.** PromptQuorum은 선택한 프레임워크로 구조화된 하나의 프롬프트를 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 Ollama나 LM Studio를 통한 로컬 모델에 동시에 전송할 수 있습니다.',
            'PromptQuorum 내에서 할 수 있는 작업:',
          ],
          items: [
            'CO-STAR, CRAFT, RISEN, SPECS, TRACE 및 분석 또는 생성에 맞게 튜닝된 여러 추가 변형을 포함한 다양한 내장 프레임워크 중에서 선택할 수 있습니다.',
            '선택한 작업 유형(예: "연구 요약", "마케팅 카피", "코드 리뷰")에 따라 앱이 프레임워크를 자동으로 추천하도록 설정할 수 있습니다.',
            '역할, 필수 질문, 제약 조건, 출력 스키마를 지정하여 자신만의 프레임워크를 정의한 다음, 모든 모델과 프로젝트에서 재사용할 수 있습니다.',
          ],
        },
        automaticSelection: {
          title: 'PromptQuorum의 자동 프레임워크 선택',
          content: [
            '**PromptQuorum의 프레임워크 선택기는 작업 카테고리, 원하는 출력 형식, 저장된 기본 설정을 사용하여 프롬프트 프레임워크를 자동으로 추천합니다.** 이를 통해 메타 구조를 고민하는 시간을 줄이고 작업 자체를 설명하는 데 집중할 수 있습니다.',
            '일반적인 흐름:',
          ],
          numberedItems: [
            '"인용과 함께 연구 요약" 또는 "LinkedIn 포스트 아이디어 생성"과 같은 작업을 선택합니다.',
            'PromptQuorum이 이 작업을 기본 프레임워크에 매핑합니다. 예를 들어 연구에는 추론 우선 프레임워크, 아이디어 발굴에는 창의적 프레임워크를 매핑합니다.',
            '제안을 수락하거나 다른 프레임워크로 재정의하거나, 일관성을 위해 특정 프로젝트를 특정 프레임워크에 고정할 수 있습니다.',
          ],
        },
        customFrameworks: {
          title: 'PromptQuorum에서 나만의 프롬프트 프레임워크 만들기',
          content: [
            '**PromptQuorum을 사용하면 자신만의 프롬프트 프레임워크를 정의, 저장, 재사용할 수 있어 도메인 특화 워크플로우가 임시방편 프롬프트가 아닌 일급 도구가 됩니다.** 이는 엄격한 내부 기준이 있는 반복적인 분석, 보고서, 감사를 실행하는 경우에 필수적입니다.',
            'PromptQuorum에서 커스텀 프레임워크를 만들 때 할 수 있는 작업:',
          ],
          items: [
            '섹션을 정의할 수 있습니다(예: 목표, 맥락, 데이터 소스, 제약 조건, 출력 형식).',
            '디스패치 전에 앱이 매번 물어볼 필수 질문을 추가하여 중요한 입력을 절대 잊지 않도록 할 수 있습니다.',
            'Markdown 섹션, 불릿 목록, 또는 사전 정의된 키가 있는 JSON과 같은 특정 출력 형식을 첨부할 수 있습니다.',
          ],
        },
        badVsGoodExample: {
          title: '예시: 프레임워크의 나쁜 사용 vs 좋은 사용',
          content: [
            '**프레임워크의 가치를 가장 명확하게 파악하는 방법은 동일한 작업에 대해 비구조적 프롬프트와 프레임워크 기반 프롬프트를 비교하는 것입니다.** 아래 예시는 데이터에서 짧은 보고서를 작성하기 위해 SPECS와 유사한 일반적인 명세 스타일 프레임워크를 사용합니다.',
            '**[나쁜 프롬프트]**',
            '"이 데이터를 보고 어떻게 생각하시나요?"',
            '**[좋은 프롬프트]**',
            '"당신은 데이터 분석가입니다. 범위: EU 시장의 2026년 1분기 첨부 판매 데이터를 분석하십시오. 목적: VP of Sales가 2분기 계획 전에 알아야 할 세 가지 가장 중요한 트렌드를 파악하십시오. 예시: 각 인사이트를 항목당 한 문장씩 번호가 매겨진 결과로 구조화하십시오. 제약 조건: 데이터를 임의로 생성하지 마십시오. 지표가 없는 경우 \'데이터셋에 없음\'이라고 명시하십시오. 단계: 1) 전체 트렌드 설명, 2) 국가별 이상치 강조, 3) 각 결과에 대해 구체적인 실행 항목 하나씩 제안."',
            'PromptQuorum에서는 이 구조를 재사용 가능한 프레임워크로 저장하고 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro에 동시에 적용한 다음, 각 모델이 동일한 명세를 어떻게 처리하는지 비교할 수 있습니다.',
          ],
        },
        conclusion: {
          title: '오늘 어떤 프롬프트 프레임워크를 사용해야 합니까?',
          content: [
            '**대부분의 사용자에게 가장 좋은 출발점은 분석 작업에 추론 중심 프레임워크 하나, 작성 작업에 창의성 중심 프레임워크 하나를 선택한 다음 PromptQuorum을 통해 모든 모델에서 표준화하는 것입니다.** 워크플로우가 성숙해지면 구조화된 출력을 위한 명세 중심 프레임워크와 선택적으로 도메인에 맞게 튜닝된 커스텀 프레임워크를 도입할 수 있습니다.',
            '실용적인 기본 설정:',
          ],
          items: [
            '연구 요약, 기술 분석, 복잡한 추론에는 CO-STAR 또는 TRACE 스타일 프레임워크를 사용하십시오.',
            '마케팅 카피, 콘텐츠 아이디어, 메시지 실험에는 CRAFT 스타일 프레임워크를 사용하십시오.',
            '다운스트림 도구로 파싱해야 하는 보고서, 체크리스트, JSON과 같은 구조화된 출력에는 SPECS 스타일 프레임워크를 사용하십시오.',
            'PromptQuorum의 자동 선택기와 커스텀 프레임워크 편집기는 개인의 기억이나 기술에 의존하지 않고 프롬프트 품질을 유지할 수 있도록 이 패턴을 대규모로 적용하는 데 도움을 줍니다.',
          ],
        },

        howToStart: {
          title: '프롬프트 프레임워크 선택 방법',
          numberedItems: [
            '**작업 유형을 프레임워크에 매핑하십시오: 추론(CoT), 명세(SPECS), 역할 기반(Persona), 구조화된 출력(JSON-mode), 다단계(Chaining).** 프레임워크마다 해결하는 문제가 다릅니다. CoT는 논리 추론에, SPECS는 구조화된 요구사항에, Persona는 어조/스타일에, JSON-mode는 데이터 추출에, Chaining은 다단계 워크플로우에 적합합니다.',
            '**동일한 프롬프트에 2~3개의 프레임워크를 테스트하고 출력을 비교하십시오.** \'이 문서를 요약해 주세요\'의 경우 CoT(먼저 추론한 다음 요약) vs. 직접 요약 vs. 프롬프트 체이닝(핵심 포인트 추출 → 종합)을 시도해 보십시오. 사용 사례에 가장 좋은 출력을 내는 방법을 확인하십시오.',
            '**복잡한 작업의 경우 프레임워크를 계층화하십시오: Persona로 어조를 설정하고, SPECS로 제약 조건을 정의하고, CoT로 엣지 케이스를 추론하십시오.** 하나의 프레임워크만 고수할 필요가 없습니다. 작업의 복잡성에 맞게 조합하십시오.',
            '**라이브러리의 각 프롬프트에 프레임워크를 선택한 이유를 문서화하십시오.** 예: \'버그 분석에는 CoT를 사용합니다. 모델이 오류를 파악하기 전에 실행을 추적해야 하기 때문입니다. 코드 생성에는 SPECS를 사용합니다. 결정론적이고 제약 조건을 준수하는 출력이 필요하기 때문입니다.\'',
            '**작업 요구사항이 변경되면 프레임워크 선택을 재검토하십시오.** 요약 작업이 \'사실 추출\'에서 \'세 가지 관점 종합\'으로 전환되면 직접 요약(더 빠름)에서 Chaining(더 세밀함)으로 이동할 수 있습니다. 프레임워크 선택은 반복적이며 영구적이지 않습니다.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '자주 묻는 질문',
          faqs: [
            { q: '모든 작업에 가장 좋은 프롬프트 프레임워크는 무엇입니까?', a: '모든 경우에 통용되는 최고의 프레임워크는 없습니다. Chain-of-Thought는 추론에, ReAct는 도구 사용에, Tree-of-Thought는 복잡한 다단계 작업에 적합합니다. 특정 작업에 프레임워크를 테스트하여 최적의 적합성을 찾으십시오.' },
            { q: '프롬프트 프레임워크는 Ollama 같은 로컬 LLM에서도 작동합니까?', a: '그렇습니다. 프레임워크는 GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro뿐만 아니라 Ollama나 LM Studio를 통한 로컬 모델에서도 작동합니다. 일부 복잡한 프레임워크(예: Tree-of-Thought)는 더 큰 로컬 모델(13B 이상)을 필요로 할 수 있습니다.' },
            { q: '같은 작업에 프레임워크를 전환할 수 있습니까?', a: '그렇습니다. 프레임워크 선택은 반복적입니다. Chain-of-Thought가 느린 결과를 낳으면 더 간단한 방법으로 전환하십시오. 출력이 충분한 세부 정보를 담지 못하면 Tree-of-Thought로 업그레이드하십시오. 결과를 바탕으로 테스트하고 반복하십시오.' },
            { q: '내 작업에 어떤 프레임워크가 가장 좋은지 어떻게 알 수 있습니까?', a: '작업 유형을 먼저 파악하십시오: 추론 깊이, 창의성, 속도, 정밀한 구조화 출력 중 무엇을 최적화하려고 합니까? 그런 다음 프레임워크에 매핑하십시오(추론에는 CoT, 창의성에는 CRAFT, 정밀도에는 SPECS). 2~3개의 프레임워크를 테스트하고 출력을 비교하십시오.' },
            { q: '하나의 프롬프트에 여러 프레임워크를 결합할 수 있습니까?', a: '그렇습니다. 프레임워크 계층화는 일반적입니다. CO-STAR로 맥락과 독자를 설정하고, Chain-of-Thought로 추론을 추가하고, SPECS로 출력 제약 조건을 지정하십시오. 핵심은 명확성입니다. 모델이 각 구성 요소를 이해할 수 있도록 하십시오.' },
            { q: '프레임워크 선택이 토큰 소비에 영향을 줍니까?', a: '그렇습니다. Tree-of-Thought와 같은 복잡한 프레임워크는 더 많은 추론 단계를 생성하여 더 많은 토큰이 소비됩니다. 직접 프롬프트와 같은 단순한 구조는 비용이 덜 들지만 더 낮은 품질의 결과를 낼 수 있습니다. 프레임워크 선택은 품질과 비용 간의 트레이드오프를 수반합니다.' },
            { q: '하나의 프레임워크를 고수해야 합니까, 아니면 번갈아 사용해야 합니까?', a: '두 가지 접근 방식을 혼합하십시오. 다양한 작업 유형에 대해 검증된 소수의 프레임워크(3~5개)를 구축하고 일관되게 사용하십시오. 그러나 작업 요구사항이나 모델 기능이 변경되면 선택을 재검토하십시오.' },
            { q: '프롬프트 프레임워크는 PromptQuorum의 자동 선택기와 어떤 관계입니까?', a: 'PromptQuorum의 선택기는 작업 설명을 분석하고 이를 기반으로 프레임워크를 추천합니다. 재정의하거나 대안을 테스트하거나 정확한 요구사항에 맞게 커스텀 프레임워크를 구축할 수 있습니다.' },
          ],
        },
      },
    },
  };
