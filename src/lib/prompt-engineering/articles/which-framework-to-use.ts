// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: which-framework-to-use
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
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
        description: 'How to choose the right prompt framework for GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models — and how PromptQuorum automates framework selection.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        'url': 'https://www.promptquorum.com/prompt-engineering/which-prompt-framework-should-you-use',
        'inLanguage': 'en',
        keywords: ['prompt frameworks', 'prompt engineering', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Large Language Models' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-5.5', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
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
          { '@type': 'HowToStep', 'name': 'Check Model Compatibility', 'text': 'Some frameworks work better with specific models. GPT-5.5 and Claude Opus 4.7 handle complex frameworks. Local models via Ollama may prefer simpler structures.' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Frameworks work with GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models via Ollama or LM Studio. Some complex frameworks (e.g., Tree-of-Thought) may require larger local models (13B+).' }
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
            '**Prompt frameworks give you a repeatable structure for prompts so that GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and other models know exactly what role to take, what context to use, and how to format outputs.** A framework is not a model feature; it is a template that controls how you talk to the model. When you use a consistent framework, you reduce hallucination risk because the model receives clearer objectives, constraints, and output formats.',
            'Most frameworks decompose a prompt into building blocks such as objective, role, context, constraints, and format. This structure turns a vague request like "help me with this" into a well-specified task with measurable quality. In practice, frameworks are especially helpful when you need reproducible outputs across different models and providers such as OpenAI, Anthropic, and Google DeepMind.',
          ],
        },
        frameworksAtAGlance: {
          title: 'The Major Prompt Frameworks at a Glance',
          content: [
            '**The main prompt frameworks differ in their focus: some optimize for structured reasoning, others for creativity, and others for crisp specifications.** For multi-model work across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models via Ollama or LM Studio, you will usually rotate between a small set of well-tested frameworks.',
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
            'You are debugging a complex reasoning failure in Claude Opus 4.7 and need explicit step-by-step thinking, which points to TRACE or a chain-of-thought style framework.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'How PromptQuorum Handles Frameworks for You',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the main prompt frameworks, an automatic framework selector, and a custom framework editor so that you do not have to manage templates manually.** PromptQuorum can send one prompt, structured with your chosen framework, to GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models via Ollama or LM Studio in parallel.',
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
            'In PromptQuorum, you can store this structure as a reusable framework and apply it to GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro in parallel, then compare how each model handles the same specification.',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/which-prompt-framework-should-you-use?lang=de',
        'inLanguage': 'de',
        headline: 'Welches Prompt-Framework ist das richtige für Sie? (2026)',
        description: 'Vergleich der wichtigsten Prompt-Frameworks: CO-STAR, CRAFT, SPECS, RISEN, TRACE. Wählen Sie das richtige Framework für GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Prompt-Frameworks', 'Prompt Engineering', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Das richtige Prompt-Framework wählen',
        'step': [
          { '@type': 'HowToStep', 'name': 'Identifizieren Sie Ihren Aufgabentyp', 'text': 'Bestimmen Sie, ob Sie strukturiertes Reasoning (Chain-of-Thought), Werkzeugnutzung (ReAct), mehrstufiges Denken (Tree-of-Thought) oder kreative Ausgaben benötigen. Der Aufgabentyp bestimmt die Framework-Wahl.' },
          { '@type': 'HowToStep', 'name': 'Überprüfen Sie die Modellkompatibilität', 'text': 'Einige Frameworks funktionieren besser mit bestimmten Modellen. GPT-5.5 und Claude Opus 4.7 handhaben komplexe Frameworks. Lokale Modelle via Ollama bevorzugen einfachere Strukturen.' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Frameworks funktionieren mit GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokalen Modellen via Ollama oder LM Studio. Einige komplexe Frameworks benötigen größere lokale Modelle (13B+).' }
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
            '**Prompt-Frameworks geben Ihnen eine wiederholbare Struktur für Prompts, sodass GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und andere Modelle genau wissen, welche Rolle sie einnehmen, welchen Kontext sie verwenden und wie sie Ausgaben formatieren sollen.** Ein Framework ist kein Modellemerkmal; es ist eine Vorlage, die steuert, wie Sie mit dem Modell sprechen. Wenn Sie ein konsistentes Framework verwenden, reduzieren Sie das Halluzinationsrisiko, da das Modell klarere Ziele, Einschränkungen und Ausgabeformate erhält.',
            'Die meisten Frameworks zerlegen einen Prompt in Bausteine wie Ziel, Rolle, Kontext, Einschränkungen und Format. Diese Struktur verwandelt eine vage Anfrage wie „hilf mir damit" in eine klar spezifizierte Aufgabe mit messbarer Qualität. In der Praxis sind Frameworks besonders hilfreich, wenn Sie reproduzierbare Ausgaben über verschiedene Modelle und Anbieter wie OpenAI, Anthropic und Google DeepMind hinweg benötigen.',
          ],
        },
        frameworksAtAGlance: {
          title: 'Die wichtigsten Prompt-Frameworks im Überblick',
          content: [
            '**Die wichtigsten Prompt-Frameworks unterscheiden sich in ihrem Fokus: Einige optimieren für strukturiertes Reasoning, andere für Kreativität, wieder andere für präzise Spezifikationen.** Bei der Arbeit mit mehreren Modellen — GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokalen Modellen über Ollama oder LM Studio — wechseln Sie in der Regel zwischen einer kleinen Auswahl erprobter Frameworks.',
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
            'Sie debuggen einen komplexen Reasoning-Fehler in Claude Opus 4.7 und benötigen explizites Schritt-für-Schritt-Denken — das deutet auf TRACE oder ein Chain-of-Thought-Framework hin.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'Wie PromptQuorum Frameworks für Sie verwaltet',
          content: [
            '**PromptQuorum ist ein Multi-Modell-KI-Dispatch-Tool mit den wichtigsten Prompt-Frameworks, einem automatischen Framework-Selektor und einem benutzerdefinierten Framework-Editor, damit Sie Vorlagen nicht manuell pflegen müssen.** PromptQuorum kann einen Prompt, strukturiert mit Ihrem gewählten Framework, gleichzeitig an GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro und lokale Modelle über Ollama oder LM Studio senden.',
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
            'In PromptQuorum können Sie diese Struktur als wiederverwendbares Framework speichern und gleichzeitig auf GPT-5.5, Claude Opus 4.7 und Gemini 3.1 Pro anwenden, um zu vergleichen, wie jedes Modell mit derselben Spezifikation umgeht.',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/which-prompt-framework-should-you-use?lang=fr',
        'inLanguage': 'fr',
        headline: 'Quel framework de prompt choisir ? (2026)',
        description: 'Comparaison des frameworks de prompt majeurs : CO-STAR, CRAFT, SPECS, RISEN, TRACE. Choisissez le bon framework pour GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro et modèles locaux.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['frameworks de prompt', 'prompt engineering', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Choisir le bon framework de prompt',
        'step': [
          { '@type': 'HowToStep', 'name': 'Identifiez votre type de tâche', 'text': 'Déterminez si vous avez besoin de raisonnement structuré (Chain-of-Thought), d\'utilisation d\'outils (ReAct), de pensée multi-étapes (Tree-of-Thought) ou de créativité. Le type de tâche détermine le choix du framework.' },
          { '@type': 'HowToStep', 'name': 'Vérifiez la compatibilité du modèle', 'text': 'Certains frameworks fonctionnent mieux avec des modèles spécifiques. GPT-5.5 et Claude Opus 4.7 gèrent les frameworks complexes. Les modèles locaux via Ollama préfèrent les structures plus simples.' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les frameworks fonctionnent avec GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro et les modèles locaux via Ollama ou LM Studio. Certains frameworks complexes nécessitent des modèles locaux plus grands (13B+).' }
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
            '**Les frameworks de prompt vous donnent une structure répétable pour que GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro et autres modèles sachent exactement quel rôle adopter, quel contexte utiliser et comment formater les sorties.** Un framework n\'est pas une fonctionnalité du modèle : c\'est un gabarit qui contrôle la façon dont vous communiquez avec lui. Un framework cohérent réduit le risque d\'hallucination car le modèle reçoit des objectifs, des contraintes et des formats de sortie plus clairs.',
            'La plupart des frameworks décomposent un prompt en blocs : objectif, rôle, contexte, contraintes et format. Cette structure transforme une demande vague comme « aide-moi avec ça » en tâche précise à qualité mesurable.',
          ],
        },
        frameworksAtAGlance: {
          title: 'Les principaux frameworks de prompt en un coup d\'œil',
          content: [
            '**Les frameworks se distinguent par leur approche : certains optimisent le raisonnement structuré, d\'autres la créativité, d\'autres encore la précision des spécifications.** Pour un travail multi-modèles (GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, modèles locaux via Ollama), vous alternerez généralement entre quelques frameworks éprouvés.',
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
            'Vous déboguez un raisonnement complexe dans Claude Opus 4.7 et avez besoin d\'un raisonnement pas-à-pas explicite → TRACE ou framework chain-of-thought.',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'Comment PromptQuorum gère les frameworks',
          content: [
            '**PromptQuorum est un outil de dispatch IA multi-modèles avec les principaux frameworks intégrés, un sélecteur automatique et un éditeur personnalisé — sans gestion manuelle des gabarits.** PromptQuorum peut envoyer un prompt structuré avec votre framework choisi simultanément à GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro et aux modèles locaux via Ollama ou LM Studio.',
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
            'Dans PromptQuorum, vous pouvez stocker cette structure comme framework réutilisable et l\'appliquer en parallèle à GPT-5.5, Claude Opus 4.7 et Gemini 3.1 Pro.',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/which-prompt-framework-should-you-use?lang=ja',
        'inLanguage': 'ja',
        headline: 'どのプロンプトフレームワーク？2026年比較',
        description: 'Chain-of-Thought、ReAct、Tree-of-Thoughtを比較。ユースケース別に選べるフレームワーク。メリット・デメリット解説。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['プロンプトフレームワーク', 'プロンプトエンジニアリング', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '適切なプロンプトフレームワークを選択する',
        'step': [
          { '@type': 'HowToStep', 'name': 'タスクタイプを特定する', 'text': '構造化推論（Chain-of-Thought）、ツール使用（ReAct）、多段階思考（Tree-of-Thought）、または創造的出力が必要かを判断します。タスクタイプがフレームワーク選択を決定します。' },
          { '@type': 'HowToStep', 'name': 'モデルの互換性を確認する', 'text': '一部のフレームワークは特定のモデルでより効果的です。GPT-5.5とClaude Opus 4.7は複雑なフレームワークに対応します。Ollamaのローカルモデルはシンプルな構造を好みます。' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。フレームワークはGPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、およびOllamaやLM Studio経由のローカルモデルで機能します。一部の複雑なフレームワーク（例：Tree-of-Thought）は、より大きなローカルモデル（13B+）を必要とします。' }
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
            '**プロンプトフレームワークは、GPT-5.5、Claude Opus 4.7、Gemini 3.1 Proおよびその他のモデルが、どの役割を担うべきか、どのコンテキストを使用すべきか、出力をどのようにフォーマットすべきかを正確に把握できるよう、プロンプトに繰り返し使える構造を提供します。** フレームワークはモデルの機能ではなく、モデルとのコミュニケーション方法を制御するテンプレートです。一貫したフレームワークを使用すると、モデルがより明確な目標、制約、出力形式を受け取るため、幻覚リスクが低減されます。',
            'ほとんどのフレームワークは、プロンプトを目的、役割、コンテキスト、制約、フォーマットなどの構成要素に分解します。この構造により、「これを手伝って」のような曖昧なリクエストが、測定可能な品質を持つ明確に指定されたタスクに変換されます。',
          ],
        },
        frameworksAtAGlance: {
          title: '主要なプロンプトフレームワーク一覧',
          content: [
            '**主要なプロンプトフレームワークはその焦点が異なります。構造的な推論を最適化するもの、創造性を重視するもの、精確な仕様記述を優先するものがあります。** GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、OllamaやLM Studio経由のローカルモデルなど複数モデルで作業する場合、少数の実績あるフレームワークを使い分けることが一般的です。',
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
            'Claude Opus 4.7で複雑な推論エラーをデバッグしており、明示的なステップバイステップの思考が必要 → TRACEまたはチェーン・オブ・ソートフレームワーク',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'PromptQuorumによるフレームワーク管理',
          content: [
            '**PromptQuorumは、主要なプロンプトフレームワーク、自動フレームワークセレクター、カスタムフレームワークエディターを備えたマルチモデルAIディスパッチツールで、テンプレートの手動管理が不要です。** 選択したフレームワークで構造化したプロンプトを、GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、OllamaやLM Studio経由のローカルモデルに同時に送信できます。',
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
            'PromptQuorumでは、この構造を再利用可能なフレームワークとして保存し、GPT-5.5、Claude Opus 4.7、Gemini 3.1 Proに同時に適用して、各モデルが同じ仕様をどのように処理するかを比較できます。',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/which-prompt-framework-should-you-use?lang=zh',
        'inLanguage': 'zh',
        headline: '选择哪个提示框架？2026年对比',
        description: 'Chain-of-Thought vs ReAct vs Tree-of-Thought框架对比。按用例选择。优缺点解析，推荐决策指南。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['提示框架', '提示工程', 'GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': '选择正确的提示词框架',
        'step': [
          { '@type': 'HowToStep', 'name': '确定您的任务类型', 'text': '判断您是否需要结构化推理（Chain-of-Thought）、工具使用（ReAct）、多步思维（Tree-of-Thought）或创意输出。任务类型决定框架选择。' },
          { '@type': 'HowToStep', 'name': '检查模型兼容性', 'text': '某些框架在特定模型上效果更好。GPT-5.5和Claude Opus 4.7支持复杂框架。通过Ollama的本地模型可能更喜欢简单结构。' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': '是的。框架与GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro以及通过Ollama或LM Studio的本地模型兼容。一些复杂框架（如Tree-of-Thought）可能需要更大的本地模型（13B+）。' }
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
            '**提示词框架为您的提示词提供可重复的结构，使GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro和其他模型确切知道应扮演什么角色、使用什么上下文以及如何格式化输出。** 框架不是模型功能，而是控制您与模型通信方式的模板。使用一致的框架可以降低幻觉风险，因为模型接收到更清晰的目标、约束和输出格式。',
            '大多数框架将提示词分解为目标、角色、上下文、约束和格式等构建块。这种结构将"帮我处理这个"之类的模糊请求转变为具有可测量质量的明确指定任务。',
          ],
        },
        frameworksAtAGlance: {
          title: '主要提示词框架一览',
          content: [
            '**主要提示词框架在侧重点上各有不同：有些优化结构化推理，有些注重创造力，还有一些强调精确规范。** 对于跨GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro和本地模型（通过Ollama或LM Studio）的多模型工作，通常在少数经过验证的框架之间切换。',
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
            '在Claude Opus 4.7中调试复杂推理失败，需要明确的逐步思考 → TRACE或思维链框架',
          ],
        },
        howPQHandlesFrameworks: {
          title: 'PromptQuorum如何为您管理框架',
          content: [
            '**PromptQuorum是一款多模型AI调度工具，内置主要提示词框架、自动框架选择器和自定义框架编辑器，无需手动管理模板。** PromptQuorum可将用所选框架结构化的一个提示词同时发送到GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro以及通过Ollama或LM Studio的本地模型。',
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
            '在PromptQuorum中，您可以将此结构保存为可复用框架，同时应用于GPT-5.5、Claude Opus 4.7和Gemini 3.1 Pro，然后比较每个模型如何处理相同规范。',
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
      },
    },
  };
