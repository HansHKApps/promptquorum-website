// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: ape-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The APE Framework: Analyze, Plan, Execute — Structured Prompts That Show Their Reasoning',
      intro: '**The APE Framework is a simple three-step prompt structure built around Analyze, Plan, and Execute so that large language models produce clear, traceable outputs from a single instruction.** In PromptQuorum, the APE Framework is available as a ready-made option that any user can select and apply across all supported models.',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      audience: 'Developers, analysts, and knowledge workers who need to verify AI reasoning on complex tasks',
      seoTitle: 'APE Framework: Structure Prompts to Show AI Reasoning',
      metaDescription: 'The APE Framework (Analyze-Plan-Execute) makes AI reasoning transparent and auditable. Includes templates, comparison to other frameworks, and implementation guide.',
      ogTitle: 'The APE Framework: Analyze, Plan, Execute — Structured Prompts That Show Their Reasoning',
      ogDescription: 'Stop getting black-box AI answers. The APE Framework forces models to show their analysis, state their plan, then execute — so you catch misalignment before the final output.',
      twitterTitle: 'APE Framework: Analyze → Plan → Execute',
      twitterDescription: 'APE Framework: Analyze → Plan → Execute. Three steps that turn opaque AI answers into traceable, inspectable reasoning.',
      quickFacts: [
        '**APE stands for:** Analyze → Plan → Execute',
        '**Purpose:** Make AI reasoning visible and inspectable before the final output',
        '**When to use:** Complex, high-stakes tasks where reasoning matters (analysis, strategy, code review, research)',
        '**When NOT to use:** Simple factual questions, short tasks, quick drafts',
        '**Complexity:** 3 stages — simpler than CRAFT (5), CO-STAR (6), SPECS (5)',
        '**Works on:** All language models — cloud APIs and local models via Ollama/LM Studio',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The APE Framework: Analyze, Plan, Execute — Structured Prompts That Show Their Reasoning',
        description: 'The APE Framework splits every AI prompt into Analyze, Plan, and Execute — making the model\'s reasoning visible and checkable. Template, examples, and comparison to other frameworks.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework',
        'proficiencyLevel': 'Intermediate',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        keywords: ['APE Framework', 'Analyze Plan Execute', 'prompt frameworks', 'prompt engineering', 'structured reasoning', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      sections: {
        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          content: [
            '**APE stands for Analyze, Plan, Execute** — a three-step prompt structure that forces models to show reasoning before producing output.',
            '**Use APE when reasoning matters:** complex analysis, technical reviews, strategic writing, and high-stakes decisions where you need to inspect the model\'s thinking.',
            '**APE reduces errors by breaking implicit assumptions:** instead of getting one answer, you see how the model understood the problem and what plan it chose.',
            '**PromptQuorum offers APE as a built-in option:** select it once, apply to multiple models in parallel, save as a template.',
            '**Compared to Single Step or multi-turn prompting, APE is the middle ground:** more structure than one instruction, less overhead than many back-and-forth turns.',
          ],
        },
        whatIsAPE: {
          title: 'What the APE Framework Is',
          content: [
            '**The APE Framework is a prompt template that forces large language models to separate their thinking into analysis, planning, and execution.** Instead of getting one undifferentiated answer, you see how the model understood the problem, how it intends to solve it, and the final output. This structure improves reliability because you can inspect each stage.',
            'APE is especially useful when you are dealing with complex or high-stakes tasks. By asking the model to show its reasoning path explicitly, you reduce the chance that hidden assumptions or shortcuts stay invisible. The same three-part pattern works across all models—cloud APIs and local models via Ollama or LM Studio—keeping results consistent.',
          ],
        },
        threeSteps: {
          title: 'The Three Steps: Analyze, Plan, Execute',
          content: [
            '**The core of the APE Framework is that every prompt instructs the model to first analyze the problem, then plan the solution, and only then execute the final answer.** These three steps map directly to how [humans handle reasoning](/prompt-engineering/chain-of-thought-prompting) and give you clear checkpoints.',
            'A typical breakdown looks like this:',
          ],
          items: [
            'Analyze: Restate the task in your own words, identify key constraints, and surface any missing information.',
            'Plan: Propose a short step-by-step approach that you will follow to solve the task.',
            'Execute: Produce the final answer following the plan, with the requested structure and formatting.',
          ],
        },
        whenToUse: {
          title: 'When to Use the APE Framework',
          content: [
            '**You should use the APE Framework when your task is complex enough that you care about the model\'s reasoning, not just its final output.** This includes technical analysis, multi-step research, strategic writing, and any situation where errors are costly.',
            'Typical use cases include:',
          ],
          items: [
            'Breaking down a product requirement into user stories and acceptance criteria.',
            'Designing a content strategy from raw notes and market information.',
            'Reviewing and refactoring code while explaining trade-offs and risks.',
            'Planning and drafting long-form reports where structure matters as much as wording.',
          ],
          callouts: [
            { type: 'warning', label: 'Warning', text: 'APE adds token overhead — the Analyze and Plan stages consume output tokens before the final Execute. For high-volume production tasks where you only need the final answer and don\'t inspect reasoning, use a simpler single-step prompt to reduce cost and latency.' },
          ],
        },
        howToWrite: {
          title: 'How to Write an APE Prompt',
          content: [
            '**An effective APE prompt mentions the three stages by name and specifies what you expect in each part: analysis notes, a step-by-step plan, and a final output.** You can do this in a compact way so that it still counts as a single prompt.',
            'A generic pattern is:',
            '"You are [role]. First, **Analyze** the task by listing the key goals, constraints, and missing information. Then, **Plan** your approach in 3–5 bullet points. Finally, **Execute** by producing [desired output format], strictly following your plan."',
            'You can then customize this base pattern with domain details such as audience, tone, file structure, or citation requirements. Once defined, you can reuse the same APE prompt across multiple tasks by changing only the objective and context.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Pro Tip', text: 'After the model completes its Analysis and Plan, read them BEFORE looking at the Execute output. If the Analysis missed a constraint or the Plan has a wrong step, tell the model to revise — this is cheaper and faster than regenerating the entire response.' },
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good APE Prompt',
          content: [
            '**The difference between an unstructured prompt and an APE prompt becomes clear when you compare them on the same task.** Here is a simple example for a product launch email.',
            '**[Bad Prompt]**',
            '"Write an email announcing our new analytics dashboard."',
            '**[Good Prompt]**',
            '"You are a SaaS product marketer. Objective: Create an announcement email for our new analytics dashboard aimed at existing customers. APE structure: 1) **Analyze**: Briefly list the target audience, their main pain points, and the key benefits this dashboard addresses. 2) **Plan**: Outline the email structure in 3–5 bullet points (hook, key benefits, call to action, etc.). 3) **Execute**: Write the final email (max 220 words) in a clear, professional tone. Include a subject line, preview text, and body."',
            'With the APE Framework, the model shows its understanding of the problem and the plan before producing the email, which makes it easier to spot misalignment early.',
          ],
        },
        howPQImplements: {
          title: 'How PromptQuorum Implements the APE Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the APE Framework as one of its built-in prompt structures so users can apply Analyze–Plan–Execute prompting with a single click.** When you choose the APE option in PromptQuorum, the app automatically injects the three-step structure around your objective and context.',
            'Within PromptQuorum, the APE Framework:',
          ],
          items: [
            'Provides labeled sections for analysis, planning, and execution expectations so you do not have to remember the pattern each time.',
            'Sends the same APE-structured prompt to multiple models in parallel, making it easy to compare how different models respond at each stage.',
            'Can be saved as a template for repeated workflows such as code reviews, strategy memos, or research briefs.',
          ],
        },
        choosingAPE: {
          title: 'Choosing APE vs Other Frameworks',
          content: [
            '**You should choose the APE Framework over other prompt frameworks when you want explicit reasoning steps but do not need a large number of parameters or sections.** APE is deliberately compact: three stages are often enough to improve clarity without overwhelming the user.',
            'In practice:',
          ],
          items: [
            'Pick APE for complex but self-contained tasks where reasoning matters.',
            'Pick a [Single Step-style framework](/prompt-engineering/the-single-step-prompt-method) when you already know the exact output format and only need one well-specified instruction.',
            'Pick more detailed frameworks (with many sections and parameters) only when you have strict internal standards that must be encoded into the prompt.',
          ],
          columns: ['Framework', 'Stages/Sections', 'Best For', 'Reasoning Visible?'],
          rows: [
            { Framework: 'APE', 'Stages/Sections': '3 (Analyze, Plan, Execute)', 'Best For': 'Complex tasks needing inspectable reasoning', 'Reasoning Visible?': 'Yes — explicit stages' },
            { Framework: 'Single-Step', 'Stages/Sections': '1 (one instruction)', 'Best For': 'Simple, well-defined tasks', 'Reasoning Visible?': 'No' },
            { Framework: 'CRAFT', 'Stages/Sections': '5 (Context, Role, Action, Format, Target)', 'Best For': 'Comprehensive context definition', 'Reasoning Visible?': 'Optional' },
            { Framework: 'CO-STAR', 'Stages/Sections': '6 (Context, Objective, Style, Tone, Audience, Response)', 'Best For': 'Marketing and communications', 'Reasoning Visible?': 'No' },
            { Framework: 'SPECS', 'Stages/Sections': '5 (Situation, Problem, Examples, Constraints, Style)', 'Best For': 'Problem-solving with examples', 'Reasoning Visible?': 'Optional' },
            { Framework: 'Chain-of-Thought', 'Stages/Sections': '1 (with "think step by step")', 'Best For': 'Math, logic, single-pass reasoning', 'Reasoning Visible?': 'Yes — but unstructured' },
          ],
          tableFormat: true,
          callouts: [
            { type: 'info', label: 'Did You Know', text: 'APE\'s three-stage structure maps directly to how human experts approach complex problems: understand the problem (Analyze), design the approach (Plan), then produce the deliverable (Execute). Cognitive science research shows this separation reduces errors in both human and AI reasoning.' },
          ],
        },

        automaticPromptEngineering: {
          title: 'APE Also Means: Automatic Prompt Engineering (Different Concept)',
          content: [
            'Note: "APE" is also used to refer to Automatic Prompt Engineering — a separate technique from the Analyze-Plan-Execute framework described above. Automatic Prompt Engineering (Zhou et al., 2022) uses AI to generate and score prompt variants automatically, finding optimal phrasings without manual trial-and-error. Here\'s how that works:',
          ],
          numberedItems: [
            '**Define your task, success metric, and a few seed examples.** Example: Task = \'classify customer feedback sentiment.\' Success metric = \'accuracy on 20 labeled examples.\' Seed examples = 3 diverse customer messages with correct sentiment labels.',
            '**Use an APE tool or ChatGPT to automatically generate prompt variants.** Provide your task and examples, and ask: \'Generate 5 different prompt variations that might solve this task. Vary instruction style, examples, and constraints.\' Evaluate each variant on your test set.',
            '**Score each variant on your success metric.** Run all variants on your held-out examples. Record accuracy, speed, cost. APE\'s goal is to find the best prompt without manual trial-and-error.',
            '**Iterate: pick the top 2 variants, ask the optimizer to generate mutations of those.** If variant 3 scored 85% accuracy and variant 5 scored 82%, ask the optimizer to \'generate variations similar to variant 3 but with [specific tweak].\' Refine iteratively.',
            '**Once you have a strong prompt, test it on fresh data to confirm it generalizes.** Your optimized prompt scored well on your test set—now verify it works on new, unseen examples. If performance drops, you may have overfit to your test data.',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting) — the reasoning technique APE formalizes into three stages',
            '[Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use) — APE vs CRAFT vs CO-STAR vs SPECS comparison',
            '[The Single-Step Prompt Method](/prompt-engineering/the-single-step-prompt-method) — when you DON\'T need APE\'s three stages',
            '[5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — the universal building blocks that APE\'s stages organize',
            '[Persona Prompting](/prompt-engineering/persona-prompting) — combine with APE\'s role definition for domain-specific analysis',
            '[Prompt Chaining](/prompt-engineering/prompt-chaining) — for tasks too complex for a single APE prompt, chain multiple APE steps',
          ],
        },

        sources: {
          title: 'Sources',
          items: [
            '[White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — prompt pattern taxonomy including structured reasoning patterns',
            '[Zhou et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — the original Automatic Prompt Engineering (APE) paper',
            '[Anthropic. "Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — structured prompting best practices',
            '[OpenAI. "Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs) — step-by-step reasoning and structured output guidance',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          { '@type': 'Question', name: 'What does APE stand for?', acceptedAnswer: { '@type': 'Answer', text: 'APE stands for Analyze, Plan, Execute. It\'s a three-step prompt framework that breaks down complex reasoning into three explicit stages: understanding the problem, planning an approach, and executing the solution.' } },
          { '@type': 'Question', name: 'How is APE different from just asking a model for an answer?', acceptedAnswer: { '@type': 'Answer', text: 'With APE, you get visibility into the model\'s thinking process. Instead of a single answer, you see how the model understood your task, what plan it chose, and the final output. This makes errors easier to catch and results more reliable.' } },
          { '@type': 'Question', name: 'When should I use APE instead of the Single Step Prompt Method?', acceptedAnswer: { '@type': 'Answer', text: 'Use APE when reasoning is critical to your task: technical analysis, code reviews, strategy development, or situations where errors are costly. Use Single Step when your objective is clear upfront and you mainly need execution speed.' } },
          { '@type': 'Question', name: 'Can I use APE with local models like Ollama or LM Studio?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. APE works with any model—frontier models from OpenAI, Anthropic, and Google, or local models via Ollama and LM Studio. The same three-step structure applies across all platforms.' } },
          { '@type': 'Question', name: 'How long does an APE prompt need to be?', acceptedAnswer: { '@type': 'Answer', text: 'APE prompts can be compact. A single paragraph that mentions Analyze, Plan, and Execute and specifies what you expect in each stage is sufficient. The framework itself is about structure, not length.' } },
          { '@type': 'Question', name: 'Can I save APE prompts as templates in PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Once you create an APE-structured prompt that works well for a particular workflow (e.g., code reviews, customer summaries), you can save it as a template in PromptQuorum and share it with your team.' } },
          { '@type': 'Question', name: 'What if my task is too simple for APE?', acceptedAnswer: { '@type': 'Answer', text: 'If your task is straightforward and doesn\'t require visible reasoning, the Single Step Prompt Method is probably sufficient. APE adds overhead—the value comes from being able to inspect and refine the model\'s reasoning.' } },
          { '@type': 'Question', name: 'How do I know if an APE prompt is working well?', acceptedAnswer: { '@type': 'Answer', text: 'Run your APE prompt on 3–5 representative examples and check: (1) Does the analysis capture the core challenge? (2) Is the plan reasonable and actionable? (3) Does the execution follow the plan? If any step is weak, refine the prompt and test again.' } },
          { '@type': 'Question', name: 'What is the difference between APE (Analyze-Plan-Execute) and APE (Automatic Prompt Engineering)?', acceptedAnswer: { '@type': 'Answer', text: 'They share an acronym but are completely different techniques. APE (Analyze-Plan-Execute) is a manual prompt structure you write yourself. APE (Automatic Prompt Engineering, Zhou et al. 2022) is a technique where AI automatically generates and scores prompt variants to find the optimal phrasing. This article covers both — the main framework is Analyze-Plan-Execute; automated prompt optimization is covered in the final section.' } },
        ],
      },
    },
    de: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The APE Framework: Analyze, Plan, Execute — Structured Prompts That Show Their Reasoning',
      intro: '',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'APE-Framework: Strukturierte Prompts mit sichtbarem Denken',
      metaDescription: 'Das APE-Framework (Analyse-Plan-Ausführung) macht KI-Denken transparent und überprüfbar. Mit Vorlagen, Vergleichen zu anderen Frameworks und Anleitung.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/de/prompt-engineering/ape-framework',
        headline: 'APE-Framework: Analyse, Plan, Ausführung — Strukturierte Prompts mit sichtbarem Denken',
        description: 'Das APE-Framework teilt jeden AI-Prompt in Analyse, Planung und Ausführung auf, um das Denken des Modells sichtbar und überprüfbar zu machen.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['APE-Framework', 'Analyze Plan Execute', 'Prompt-Frameworks', 'Prompt-Engineering', 'strukturiertes Denken'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
      },
      sections: {
        faqSection: {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'What does APE stand for?', a: 'APE stands for Analyze, Plan, Execute. It\'s a three-step prompt framework that breaks down complex reasoning into three explicit stages: understanding the problem, planning an approach, and executing the solution.' },
            { q: 'How is APE different from just asking a model for an answer?', a: 'With APE, you get visibility into the model\'s thinking process. Instead of a single answer, you see how the model understood your task, what plan it chose, and the final output. This makes errors easier to catch and results more reliable.' },
            { q: 'When should I use APE instead of the Single Step Prompt Method?', a: 'Use APE when reasoning is critical to your task: technical analysis, code reviews, strategy development, or situations where errors are costly. Use Single Step when your objective is clear upfront and you mainly need execution speed.' },
            { q: 'Can I use APE with local models like Ollama or LM Studio?', a: 'Yes. APE works with any model—frontier models from OpenAI, Anthropic, and Google, or local models via Ollama and LM Studio. The same three-step structure applies across all platforms.' },
            { q: 'How long does an APE prompt need to be?', a: 'APE prompts can be compact. A single paragraph that mentions Analyze, Plan, and Execute and specifies what you expect in each stage is sufficient. The framework itself is about structure, not length.' },
            { q: 'Can I save APE prompts as templates in PromptQuorum?', a: 'Yes. Once you create an APE-structured prompt that works well for a particular workflow (e.g., code reviews, customer summaries), you can save it as a template in PromptQuorum and share it with your team.' },
            { q: 'What if my task is too simple for APE?', a: 'If your task is straightforward and doesn\'t require visible reasoning, the Single Step Prompt Method is probably sufficient. APE adds overhead—the value comes from being able to inspect and refine the model\'s reasoning.' },
            { q: 'How do I know if an APE prompt is working well?', a: 'Run your APE prompt on 3–5 representative examples and check: (1) Does the analysis capture the core challenge? (2) Is the plan reasonable and actionable? (3) Does the execution follow the plan? If any step is weak, refine the prompt and test again.' },
            { q: 'What is the difference between APE (Analyze-Plan-Execute) and APE (Automatic Prompt Engineering)?', a: 'They share an acronym but are completely different techniques. APE (Analyze-Plan-Execute) is a manual prompt structure you write yourself. APE (Automatic Prompt Engineering, Zhou et al. 2022) is a technique where AI automatically generates and scores prompt variants to find the optimal phrasing. This article covers both — the main framework is Analyze-Plan-Execute; automated prompt optimization is covered in the final section.' },
          ],
        },
      }
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'El Framework APE: Analizar, Planificar, Ejecutar — Prompts Estructurados que Muestran su Razonamiento',
      intro: '**El Framework APE es una estructura de prompt de tres pasos basada en Analizar, Planificar y Ejecutar, de modo que los modelos de lenguaje produzcan resultados claros y trazables a partir de una sola instrucción.** En PromptQuorum, el Framework APE está disponible como opción predefinida que cualquier usuario puede seleccionar y aplicar en todos los modelos compatibles.',
      publishDate: '2026-03-24',
      readTime: '7 min de lectura',
      educationalLevel: 'Intermediate',
      audience: 'Desarrolladores, analistas y trabajadores del conocimiento que necesitan verificar el razonamiento de la IA en tareas complejas',
      seoTitle: 'Framework APE: prompts que muestran el razonamiento IA',
      metaDescription: 'El Framework APE (Analizar-Planificar-Ejecutar) hace el razonamiento de la IA transparente y auditable. Incluye plantillas y comparación con frameworks.',
      ogTitle: 'El Framework APE: Analizar, Planificar, Ejecutar — Prompts Estructurados que Muestran su Razonamiento',
      ogDescription: 'Deja de obtener respuestas de IA de caja negra. El Framework APE obliga a los modelos a mostrar su análisis, declarar su plan y luego ejecutar — así detectas desalineaciones antes del resultado final.',
      twitterTitle: 'Framework APE: Analizar → Planificar → Ejecutar',
      twitterDescription: 'Framework APE: Analizar → Planificar → Ejecutar. Tres pasos que convierten respuestas de IA opacas en razonamiento trazable e inspeccionable.',
      quickFacts: [
        '**APE significa:** Analizar → Planificar → Ejecutar',
        '**Propósito:** Hacer el razonamiento de la IA visible e inspeccionable antes del resultado final',
        '**Cuándo usarlo:** Tareas complejas y de alto riesgo donde el razonamiento importa (análisis, estrategia, revisión de código, investigación)',
        '**Cuándo NO usarlo:** Preguntas factuales simples, tareas cortas, borradores rápidos',
        '**Complejidad:** 3 etapas — más simple que CRAFT (5), CO-STAR (6), SPECS (5)',
        '**Funciona en:** Todos los modelos de lenguaje — APIs en la nube y modelos locales vía Ollama/LM Studio',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'El Framework APE: Analizar, Planificar, Ejecutar — Prompts Estructurados que Muestran su Razonamiento',
        description: 'El Framework APE divide cada prompt de IA en Analizar, Planificar y Ejecutar — haciendo el razonamiento del modelo visible y verificable. Plantilla, ejemplos y comparación con otros frameworks.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/es/prompt-engineering/ape-framework',
        inLanguage: 'es',
        'proficiencyLevel': 'Intermediate',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        keywords: ['Framework APE', 'Analizar Planificar Ejecutar', 'frameworks de prompt', 'prompt engineering', 'razonamiento estructurado', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Modelos de Lenguaje de Gran Escala' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      sections: {
        tldr: {
          title: 'Puntos clave',
          isTldr: true,
          content: [
            '**APE significa Analizar, Planificar, Ejecutar** — una estructura de prompt de tres pasos que obliga a los modelos a mostrar el razonamiento antes de producir resultados.',
            '**Usa APE cuando el razonamiento importa:** análisis complejos, revisiones técnicas, redacción estratégica y decisiones de alto riesgo donde necesitas inspeccionar el pensamiento del modelo.',
            '**APE reduce errores al romper suposiciones implícitas:** en lugar de obtener una respuesta, ves cómo el modelo entendió el problema y qué plan eligió.',
            '**PromptQuorum ofrece APE como opción integrada:** selecciónalo una vez, aplícalo a múltiples modelos en paralelo, guárdalo como plantilla.',
            '**Comparado con prompts de un solo paso o multi-turno, APE es el punto medio:** más estructura que una instrucción, menos sobrecarga que muchos intercambios.',
          ],
        },
        whatIsAPE: {
          title: 'Qué es el Framework APE',
          content: [
            '**El Framework APE es una plantilla de prompt que obliga a los modelos de lenguaje a separar su pensamiento en análisis, planificación y ejecución.** En lugar de obtener una respuesta indiferenciada, ves cómo el modelo entendió el problema, cómo pretende resolverlo y el resultado final. Esta estructura mejora la fiabilidad porque puedes inspeccionar cada etapa.',
            'APE es especialmente útil cuando se trata de tareas complejas o de alto riesgo. Al pedir al modelo que muestre su ruta de razonamiento explícitamente, reduces la posibilidad de que suposiciones ocultas o atajos permanezcan invisibles. El mismo patrón de tres partes funciona en todos los modelos — APIs en la nube y modelos locales vía Ollama o LM Studio — manteniendo resultados consistentes.',
          ],
        },
        threeSteps: {
          title: 'Los Tres Pasos: Analizar, Planificar, Ejecutar',
          content: [
            '**El núcleo del Framework APE es que cada prompt instruye al modelo a primero analizar el problema, luego planificar la solución, y solo entonces ejecutar la respuesta final.** Estos tres pasos corresponden directamente a cómo [los humanos manejan el razonamiento](/prompt-engineering/chain-of-thought-prompting) y te dan puntos de control claros.',
            'Un desglose típico es el siguiente:',
          ],
          items: [
            'Analizar: Reformular la tarea con tus propias palabras, identificar restricciones clave y detectar información faltante.',
            'Planificar: Proponer un enfoque breve paso a paso que seguirás para resolver la tarea.',
            'Ejecutar: Producir la respuesta final siguiendo el plan, con la estructura y el formato solicitados.',
          ],
        },
        whenToUse: {
          title: 'Cuándo usar el Framework APE',
          content: [
            '**Debes usar el Framework APE cuando tu tarea es lo suficientemente compleja como para que te importe el razonamiento del modelo, no solo su resultado final.** Esto incluye análisis técnico, investigación de múltiples pasos, redacción estratégica y cualquier situación donde los errores sean costosos.',
            'Los casos de uso típicos incluyen:',
          ],
          items: [
            'Desglosar un requisito de producto en historias de usuario y criterios de aceptación.',
            'Diseñar una estrategia de contenido a partir de notas en bruto e información de mercado.',
            'Revisar y refactorizar código mientras se explican compromisos y riesgos.',
            'Planificar y redactar informes de largo alcance donde la estructura importa tanto como el contenido.',
          ],
          callouts: [
            { type: 'warning', label: 'Advertencia', text: 'APE añade sobrecarga de tokens — las etapas de Analizar y Planificar consumen tokens de salida antes del Ejecutar final. Para tareas de producción de alto volumen donde solo necesitas la respuesta final y no inspeccionas el razonamiento, usa un prompt de un solo paso más simple para reducir costo y latencia.' },
          ],
        },
        howToWrite: {
          title: 'Cómo escribir un prompt APE',
          content: [
            '**Un prompt APE efectivo menciona las tres etapas por nombre y especifica lo que esperas en cada parte: notas de análisis, un plan paso a paso y un resultado final.** Puedes hacerlo de manera compacta para que siga contando como un único prompt.',
            'Un patrón genérico es:',
            '"Eres [rol]. Primero, **Analiza** la tarea listando los objetivos clave, restricciones e información faltante. Luego, **Planifica** tu enfoque en 3–5 puntos. Finalmente, **Ejecuta** produciendo [formato de resultado deseado], siguiendo estrictamente tu plan."',
            'Luego puedes personalizar este patrón base con detalles de dominio como audiencia, tono, estructura de archivos o requisitos de citas. Una vez definido, puedes reutilizar el mismo prompt APE en múltiples tareas cambiando solo el objetivo y el contexto.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Consejo Pro', text: 'Después de que el modelo complete su Análisis y Plan, léelos ANTES de mirar el resultado de Ejecutar. Si el Análisis omitió una restricción o el Plan tiene un paso incorrecto, dile al modelo que lo revise — esto es más económico y rápido que regenerar toda la respuesta.' },
          ],
        },
        badVsGoodExample: {
          title: 'Ejemplo: Prompt APE Malo vs Bueno',
          content: [
            '**La diferencia entre un prompt no estructurado y un prompt APE se vuelve clara cuando los comparas en la misma tarea.** Aquí hay un ejemplo simple para un email de lanzamiento de producto.',
            '**[Prompt Malo]**',
            '"Escribe un email anunciando nuestro nuevo panel de análisis."',
            '**[Prompt Bueno]**',
            '"Eres un especialista en marketing de productos SaaS. Objetivo: Crear un email de anuncio para nuestro nuevo panel de análisis dirigido a clientes existentes. Estructura APE: 1) **Analiza**: Lista brevemente la audiencia objetivo, sus principales puntos de dolor y los beneficios clave que este panel aborda. 2) **Planifica**: Esboza la estructura del email en 3–5 puntos (gancho, beneficios clave, llamada a la acción, etc.). 3) **Ejecuta**: Escribe el email final (máx. 220 palabras) en un tono claro y profesional. Incluye línea de asunto, texto de vista previa y cuerpo."',
            'Con el Framework APE, el modelo muestra su comprensión del problema y el plan antes de producir el email, lo que facilita detectar desalineaciones temprano.',
          ],
        },
        howPQImplements: {
          title: 'Cómo PromptQuorum implementa el Framework APE',
          content: [
            '**PromptQuorum es una herramienta de despacho de IA multi-modelo que incluye el Framework APE como una de sus estructuras de prompt integradas, para que los usuarios puedan aplicar el prompting Analizar–Planificar–Ejecutar con un solo clic.** Cuando eliges la opción APE en PromptQuorum, la aplicación inyecta automáticamente la estructura de tres pasos alrededor de tu objetivo y contexto.',
            'Dentro de PromptQuorum, el Framework APE:',
          ],
          items: [
            'Proporciona secciones etiquetadas para análisis, planificación y expectativas de ejecución, para que no tengas que recordar el patrón cada vez.',
            'Envía el mismo prompt estructurado con APE a múltiples modelos en paralelo, facilitando comparar cómo distintos modelos responden en cada etapa.',
            'Puede guardarse como plantilla para flujos de trabajo repetitivos como revisiones de código, memorandos de estrategia o informes de investigación.',
          ],
        },
        choosingAPE: {
          title: 'Elegir APE vs Otros Frameworks',
          content: [
            '**Debes elegir el Framework APE sobre otros frameworks de prompt cuando quieres pasos de razonamiento explícitos pero no necesitas un gran número de parámetros o secciones.** APE es deliberadamente compacto: tres etapas suelen ser suficientes para mejorar la claridad sin abrumar al usuario.',
            'En la práctica:',
          ],
          items: [
            'Elige APE para tareas complejas pero autocontenidas donde el razonamiento importa.',
            'Elige un [framework de un solo paso](/prompt-engineering/the-single-step-prompt-method) cuando ya conoces el formato exacto del resultado y solo necesitas una instrucción bien especificada.',
            'Elige frameworks más detallados (con muchas secciones y parámetros) solo cuando tienes estándares internos estrictos que deben codificarse en el prompt.',
          ],
          columns: ['Framework', 'Etapas/Secciones', 'Mejor Para', '¿Razonamiento Visible?'],
          rows: [
            { 'Framework': 'APE', 'Etapas/Secciones': '3 (Analizar, Planificar, Ejecutar)', 'Mejor Para': 'Tareas complejas que requieren razonamiento inspeccionable', '¿Razonamiento Visible?': 'Sí — etapas explícitas' },
            { 'Framework': 'Single-Step', 'Etapas/Secciones': '1 (una instrucción)', 'Mejor Para': 'Tareas simples y bien definidas', '¿Razonamiento Visible?': 'No' },
            { 'Framework': 'CRAFT', 'Etapas/Secciones': '5 (Contexto, Rol, Acción, Formato, Objetivo)', 'Mejor Para': 'Definición de contexto completo', '¿Razonamiento Visible?': 'Opcional' },
            { 'Framework': 'CO-STAR', 'Etapas/Secciones': '6 (Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta)', 'Mejor Para': 'Marketing y comunicaciones', '¿Razonamiento Visible?': 'No' },
            { 'Framework': 'SPECS', 'Etapas/Secciones': '5 (Situación, Problema, Ejemplos, Restricciones, Estilo)', 'Mejor Para': 'Resolución de problemas con ejemplos', '¿Razonamiento Visible?': 'Opcional' },
            { 'Framework': 'Chain-of-Thought', 'Etapas/Secciones': '1 (con "piensa paso a paso")', 'Mejor Para': 'Matemáticas, lógica, razonamiento en un solo paso', '¿Razonamiento Visible?': 'Sí — pero sin estructura' },
          ],
          tableFormat: true,
          callouts: [
            { type: 'info', label: '¿Sabías que?', text: 'La estructura de tres etapas de APE corresponde directamente a cómo los expertos humanos abordan problemas complejos: entender el problema (Analizar), diseñar el enfoque (Planificar), luego producir el resultado (Ejecutar). La investigación en ciencias cognitivas muestra que esta separación reduce errores tanto en el razonamiento humano como en el de la IA.' },
          ],
        },

        automaticPromptEngineering: {
          title: 'APE también significa: Ingeniería Automática de Prompts (Concepto Diferente)',
          content: [
            'Nota: "APE" también se usa para referirse a la Ingeniería Automática de Prompts — una técnica separada del framework Analizar-Planificar-Ejecutar descrito arriba. La Ingeniería Automática de Prompts (Zhou et al., 2022) usa IA para generar y puntuar variantes de prompts automáticamente, encontrando frases óptimas sin prueba y error manual. Así es como funciona:',
          ],
          numberedItems: [
            '**Define tu tarea, métrica de éxito y algunos ejemplos iniciales.** Ejemplo: Tarea = \'clasificar el sentimiento de comentarios de clientes.\' Métrica de éxito = \'precisión en 20 ejemplos etiquetados.\' Ejemplos iniciales = 3 mensajes de clientes variados con etiquetas de sentimiento correctas.',
            '**Usa una herramienta APE o ChatGPT para generar automáticamente variantes de prompts.** Proporciona tu tarea y ejemplos, y pregunta: \'Genera 5 variaciones diferentes de prompt que puedan resolver esta tarea. Varía el estilo de instrucción, los ejemplos y las restricciones.\' Evalúa cada variante en tu conjunto de pruebas.',
            '**Puntúa cada variante en tu métrica de éxito.** Ejecuta todas las variantes en tus ejemplos reservados. Registra precisión, velocidad y costo. El objetivo de APE es encontrar el mejor prompt sin prueba y error manual.',
            '**Itera: elige las 2 mejores variantes, pide al optimizador que genere mutaciones de esas.** Si la variante 3 obtuvo 85% de precisión y la variante 5 obtuvo 82%, pide al optimizador que \'genere variaciones similares a la variante 3 pero con [ajuste específico].\' Refina iterativamente.',
            '**Una vez que tengas un prompt sólido, pruébalo con datos nuevos para confirmar que generaliza.** Tu prompt optimizado tuvo buen rendimiento en tu conjunto de pruebas — ahora verifica que funcione con ejemplos nuevos no vistos. Si el rendimiento cae, puede que hayas sobreajustado a tus datos de prueba.',
          ],
        },

        relatedReading: {
          title: 'Lecturas Relacionadas',
          items: [
            '[Prompting Chain-of-Thought](/es/prompt-engineering/chain-of-thought-prompting) — la técnica de razonamiento que APE formaliza en tres etapas',
            '[¿Qué Framework de Prompt Deberías Usar?](/es/prompt-engineering/which-prompt-framework-should-you-use) — comparación de APE vs CRAFT vs CO-STAR vs SPECS',
            '[El Método de Prompt de Un Solo Paso](/es/prompt-engineering/the-single-step-prompt-method) — cuando NO necesitas las tres etapas de APE',
            '[5 Bloques de Construcción que Todo Prompt Necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) — los bloques universales que las etapas de APE organizan',
            '[Prompting de Persona](/es/prompt-engineering/persona-prompting) — combina con la definición de rol de APE para análisis específico de dominio',
            '[Encadenamiento de Prompts](/es/prompt-engineering/prompt-chaining) — para tareas demasiado complejas para un único prompt APE, encadena múltiples pasos APE',
          ],
        },

        sources: {
          title: 'Fuentes',
          items: [
            '[White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — taxonomía de patrones de prompt incluyendo patrones de razonamiento estructurado',
            '[Zhou et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — el artículo original de Ingeniería Automática de Prompts (APE)',
            '[Anthropic. "Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — mejores prácticas de prompting estructurado',
            '[OpenAI. "Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs) — orientación de razonamiento paso a paso y salida estructurada',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          { '@type': 'Question', name: '¿Qué significa APE?', acceptedAnswer: { '@type': 'Answer', text: 'APE significa Analizar, Planificar, Ejecutar. Es un framework de prompt de tres pasos que descompone el razonamiento complejo en tres etapas explícitas: comprender el problema, planificar un enfoque y ejecutar la solución.' } },
          { '@type': 'Question', name: '¿En qué se diferencia APE de simplemente pedirle una respuesta a un modelo?', acceptedAnswer: { '@type': 'Answer', text: 'Con APE obtienes visibilidad del proceso de pensamiento del modelo. En lugar de una única respuesta, ves cómo el modelo entendió tu tarea, qué plan eligió y el resultado final. Esto facilita detectar errores y hace los resultados más fiables.' } },
          { '@type': 'Question', name: '¿Cuándo debo usar APE en lugar del Método de Prompt de Un Solo Paso?', acceptedAnswer: { '@type': 'Answer', text: 'Usa APE cuando el razonamiento es crítico para tu tarea: análisis técnico, revisiones de código, desarrollo de estrategias o situaciones donde los errores son costosos. Usa Single Step cuando tu objetivo está claro desde el principio y principalmente necesitas velocidad de ejecución.' } },
          { '@type': 'Question', name: '¿Puedo usar APE con modelos locales como Ollama o LM Studio?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. APE funciona con cualquier modelo — modelos de frontera de OpenAI, Anthropic y Google, o modelos locales vía Ollama y LM Studio. La misma estructura de tres pasos se aplica en todas las plataformas.' } },
          { '@type': 'Question', name: '¿Cuánto tiempo necesita tener un prompt APE?', acceptedAnswer: { '@type': 'Answer', text: 'Los prompts APE pueden ser compactos. Un solo párrafo que mencione Analizar, Planificar y Ejecutar y especifique lo que esperas en cada etapa es suficiente. El framework en sí trata de estructura, no de longitud.' } },
          { '@type': 'Question', name: '¿Puedo guardar prompts APE como plantillas en PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Una vez que creas un prompt estructurado con APE que funciona bien para un flujo de trabajo particular (por ejemplo, revisiones de código, resúmenes de clientes), puedes guardarlo como plantilla en PromptQuorum y compartirlo con tu equipo.' } },
          { '@type': 'Question', name: '¿Y si mi tarea es demasiado simple para APE?', acceptedAnswer: { '@type': 'Answer', text: 'Si tu tarea es sencilla y no requiere razonamiento visible, el Método de Prompt de Un Solo Paso probablemente sea suficiente. APE añade sobrecarga — el valor viene de poder inspeccionar y refinar el razonamiento del modelo.' } },
          { '@type': 'Question', name: '¿Cómo sé si un prompt APE está funcionando bien?', acceptedAnswer: { '@type': 'Answer', text: 'Ejecuta tu prompt APE en 3–5 ejemplos representativos y verifica: (1) ¿Captura el análisis el desafío central? (2) ¿Es el plan razonable y ejecutable? (3) ¿Sigue la ejecución el plan? Si algún paso es débil, refina el prompt y prueba de nuevo.' } },
          { '@type': 'Question', name: '¿Cuál es la diferencia entre APE (Analizar-Planificar-Ejecutar) y APE (Ingeniería Automática de Prompts)?', acceptedAnswer: { '@type': 'Answer', text: 'Comparten el acrónimo pero son técnicas completamente diferentes. APE (Analizar-Planificar-Ejecutar) es una estructura de prompt manual que escribes tú mismo. APE (Ingeniería Automática de Prompts, Zhou et al. 2022) es una técnica donde la IA genera y puntúa automáticamente variantes de prompt para encontrar la formulación óptima. Este artículo cubre ambas — el framework principal es Analizar-Planificar-Ejecutar; la optimización automatizada de prompts se cubre en la sección final.' } },
        ],
      },
    },

    ar: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'إطار ⁨APE⁩: التحليل، التخطيط، التنفيذ — تعليمات منظَّمة تُظهر استدلالها',
      intro: '**إطار APE هو هيكل تعليمات من ثلاث خطوات يقوم على التحليل والتخطيط والتنفيذ، بحيث تُنتج نماذج اللغة نتائج واضحة وقابلة للتتبع من تعليمة واحدة.** في PromptQuorum، يتوفر إطار APE كخيار مُعدَّ مسبقًا يمكن لأي مستخدم اختياره وتطبيقه عبر جميع النماذج المدعومة.',
      publishDate: '2026-03-24',
      readTime: '٧ دقائق للقراءة',
      educationalLevel: 'متوسط',
      audience: 'المطورون والمحللون وعمال المعرفة الذين يحتاجون إلى التحقق من استدلال الذكاء الاصطناعي في المهام المعقدة',
      seoTitle: 'إطار ⁨APE⁩: تعليمات تُظهر استدلال الذكاء الاصطناعي',
      metaDescription: 'إطار ⁨APE⁩ يُقسِّم كل تعليمة إلى ⁨3⁩ مراحل: التحليل والتخطيط والتنفيذ. يشمل قوالب ومقارنة مع ⁨CRAFT⁩ و⁨CO-STAR⁩ وكيفية التطبيق في ⁨PromptQuorum⁩.',
      ogTitle: 'إطار APE: التحليل، التخطيط، التنفيذ — تعليمات منظَّمة تُظهر استدلالها',
      ogDescription: 'توقف عن الحصول على إجابات ذكاء اصطناعي من صندوق أسود. يُجبر إطار APE النماذج على إظهار تحليلها وإعلان خطتها ثم التنفيذ — هكذا تكتشف التناقضات قبل النتيجة النهائية.',
      twitterTitle: 'إطار APE: التحليل ← التخطيط ← التنفيذ',
      twitterDescription: 'إطار ⁨APE⁩: التحليل ← التخطيط ← التنفيذ. ثلاث خطوات تحوِّل إجابات الذكاء الاصطناعي الغامضة إلى استدلال قابل للتتبع والفحص.',
      quickFacts: [
        '**APE يعني:** التحليل ← التخطيط ← التنفيذ',
        '**الغرض:** جعل استدلال الذكاء الاصطناعي مرئيًا وقابلًا للفحص قبل النتيجة النهائية',
        '**متى تستخدمه:** المهام المعقدة وعالية المخاطر حيث يهم الاستدلال (التحليل، الاستراتيجية، مراجعة الكود، البحث)',
        '**متى لا تستخدمه:** الأسئلة الواقعية البسيطة، المهام القصيرة، المسودات السريعة',
        '**التعقيد:** ٣ مراحل — أبسط من CRAFT (٥) وCO-STAR (٦) وSPECS (٥)',
        '**يعمل على:** جميع نماذج اللغة — واجهات API السحابية والنماذج المحلية عبر Ollama/LM Studio',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'إطار APE: التحليل، التخطيط، التنفيذ — تعليمات منظَّمة تُظهر استدلالها',
        description: 'يُقسِّم إطار APE كل تعليمة ذكاء اصطناعي إلى التحليل والتخطيط والتنفيذ — مما يجعل استدلال النموذج مرئيًا وقابلًا للتحقق. قالب وأمثلة ومقارنة مع أطر أخرى.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/ar/prompt-engineering/ape-framework',
        inLanguage: 'ar',
        'proficiencyLevel': 'متوسط',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        keywords: ['إطار APE', 'التحليل التخطيط التنفيذ', 'أطر التعليمات', 'هندسة التعليمات', 'الاستدلال المنظَّم', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'هندسة التعليمات' },
          { '@type': 'Thing', name: 'أطر التعليمات' },
          { '@type': 'Thing', name: 'نماذج اللغة الكبيرة' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      sections: {
        tldr: {
          title: 'النقاط الرئيسية',
          isTldr: true,
          content: [
            '**APE يعني التحليل والتخطيط والتنفيذ** — هيكل تعليمات من ثلاث خطوات يُجبر النماذج على إظهار الاستدلال قبل إنتاج النتائج.',
            '**استخدم APE حين يهم الاستدلال:** التحليلات المعقدة والمراجعات التقنية والكتابة الاستراتيجية والقرارات عالية المخاطر التي تحتاج فيها إلى فحص تفكير النموذج.',
            '**يُقلِّل APE الأخطاء بكسر الافتراضات الضمنية:** بدلًا من الحصول على إجابة، ترى كيف فهم النموذج المشكلة وما الخطة التي اختارها.',
            '**يوفر PromptQuorum APE كخيار مدمج:** اختره مرة واحدة وطبِّقه على نماذج متعددة بالتوازي واحفظه كقالب.',
            '**مقارنةً بالتعليمات أحادية الخطوة أو متعددة الدورات، APE هو نقطة الوسط:** هيكل أكثر من تعليمة واحدة، وعبء أقل من تبادلات كثيرة.',
          ],
        },
        whatIsAPE: {
          title: 'ما هو إطار APE',
          content: [
            '**إطار APE هو قالب تعليمات يُجبر نماذج اللغة على فصل تفكيرها إلى التحليل والتخطيط والتنفيذ.** بدلًا من الحصول على إجابة غير متمايزة، ترى كيف فهم النموذج المشكلة وكيف ينوي حلها والنتيجة النهائية. يُحسِّن هذا الهيكل الموثوقية لأنك تستطيع فحص كل مرحلة.',
            'APE مفيد بشكل خاص حين تتعامل مع مهام معقدة أو عالية المخاطر. بطلب النموذج إظهار مسار استدلاله صراحةً، تُقلِّل احتمالية بقاء الافتراضات المخفية أو الاختصارات غير مرئية. يعمل النمط الثلاثي الأجزاء ذاته عبر جميع النماذج — واجهات API السحابية والنماذج المحلية عبر Ollama أو LM Studio — محافظًا على نتائج متسقة.',
          ],
        },
        threeSteps: {
          title: 'الخطوات الثلاث: التحليل، التخطيط، التنفيذ',
          content: [
            '**جوهر إطار APE هو أن كل تعليمة تُرشد النموذج أولًا لتحليل المشكلة، ثم التخطيط للحل، وعندئذٍ فقط تنفيذ الإجابة النهائية.** تتوافق هذه الخطوات الثلاث مباشرةً مع كيفية تعامل البشر مع الاستدلال وتُعطيك نقاط تحقق واضحة.',
            'التقسيم النموذجي هو كالتالي:',
          ],
          items: [
            'التحليل: إعادة صياغة المهمة بكلماتك الخاصة، وتحديد القيود الرئيسية، واكتشاف المعلومات المفقودة.',
            'التخطيط: اقتراح نهج موجز خطوة بخطوة ستتبعه لحل المهمة.',
            'التنفيذ: إنتاج الإجابة النهائية وفق الخطة، بالهيكل والتنسيق المطلوبين.',
          ],
        },
        whenToUse: {
          title: 'متى تستخدم إطار APE',
          content: [
            '**يجب أن تستخدم إطار APE حين تكون مهمتك معقدة بما يكفي لتهتم باستدلال النموذج، لا بنتيجته النهائية فقط.** يشمل ذلك التحليل التقني والبحث متعدد الخطوات والكتابة الاستراتيجية وأي موقف تكون فيه الأخطاء مكلفة.',
            'تشمل حالات الاستخدام النموذجية:',
          ],
          items: [
            'تقسيم متطلب منتج إلى قصص مستخدمين ومعايير قبول.',
            'تصميم استراتيجية محتوى من ملاحظات خام ومعلومات السوق.',
            'مراجعة وإعادة هيكلة الكود مع شرح المقايضات والمخاطر.',
            'التخطيط وصياغة التقارير الطويلة حيث تهم البنية بقدر المحتوى.',
          ],
          callouts: [
            { type: 'warning', label: 'تحذير', text: 'يُضيف APE عبء رموز — تستهلك مرحلتا التحليل والتخطيط رموز مخرجات قبل التنفيذ النهائي. للمهام الإنتاجية عالية الحجم التي تحتاج فقط الإجابة النهائية ولا تفحص الاستدلال، استخدم تعليمة أحادية الخطوة أبسط لتقليل التكلفة والكمون.' },
          ],
        },
        howToWrite: {
          title: 'كيف تكتب تعليمة APE',
          content: [
            '**تعليمة APE الفعَّالة تذكر المراحل الثلاث بالاسم وتحدد ما تتوقعه في كل جزء: ملاحظات التحليل وخطة خطوة بخطوة ونتيجة نهائية.** يمكنك فعل ذلك بإيجاز حتى تعدَّ تعليمة واحدة.',
            'النمط العام هو:',
            '"أنت [الدور]. أولًا، **حلِّل** المهمة بسرد الأهداف الرئيسية والقيود والمعلومات المفقودة. ثم، **خطِّط** نهجك في ٣-٥ نقاط. وأخيرًا، **نفِّذ** بإنتاج [تنسيق النتيجة المطلوبة]، متبعًا خطتك بدقة."',
            'يمكنك بعد ذلك تخصيص هذا النمط الأساسي بتفاصيل المجال كالجمهور والأسلوب وهيكل الملفات ومتطلبات الاستشهادات. مجرد تحديده، يمكنك إعادة استخدام تعليمة APE ذاتها عبر مهام متعددة بتغيير الهدف والسياق فقط.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'نصيحة احترافية', text: 'بعد اكتمال النموذج لتحليله وخطته، اقرأهما قبل النظر في نتيجة التنفيذ. إذا أغفل التحليل قيدًا أو كانت الخطة تحتوي خطوة خاطئة، أخبر النموذج بمراجعتها — هذا أقل تكلفةً وأسرع من إعادة توليد الإجابة كاملةً.' },
          ],
        },
        badVsGoodExample: {
          title: 'مثال: تعليمة APE سيئة مقابل جيدة',
          content: [
            '**يتضح الفرق بين تعليمة غير منظَّمة وتعليمة APE حين تقارنهما في المهمة ذاتها.** إليك مثالًا بسيطًا لبريد إلكتروني لإطلاق منتج.',
            '**[تعليمة سيئة]**',
            '"اكتب بريدًا إلكترونيًا يُعلن عن لوحة التحليلات الجديدة لدينا."',
            '**[تعليمة جيدة]**',
            '"أنت متخصص في تسويق منتجات SaaS. الهدف: إنشاء بريد إلكتروني إعلاني للوحة التحليلات الجديدة لدينا موجَّه للعملاء الحاليين. هيكل APE: ١) **حلِّل**: سرِّد باختصار الجمهور المستهدف ونقاط ألمهم الرئيسية والفوائد الأساسية التي تعالجها هذه اللوحة. ٢) **خطِّط**: ضع مخططًا لهيكل البريد الإلكتروني في ٣-٥ نقاط (خطاف، فوائد رئيسية، دعوة للعمل، إلخ). ٣) **نفِّذ**: اكتب البريد الإلكتروني النهائي (بحد أقصى ٢٢٠ كلمة) بأسلوب واضح ومهني. تضمَّن سطر الموضوع ونص المعاينة والنص الرئيسي."',
            'مع إطار APE، يُظهر النموذج فهمه للمشكلة والخطة قبل إنتاج البريد الإلكتروني، مما يُسهِّل اكتشاف التناقضات مبكرًا.',
          ],
        },
        howPQImplements: {
          title: 'كيف يُطبِّق PromptQuorum إطار APE',
          content: [
            '**PromptQuorum هو أداة إرسال ذكاء اصطناعي متعدد النماذج تتضمَّن إطار APE كأحد هياكل التعليمات المدمجة، حتى يتمكن المستخدمون من تطبيق صياغة التحليل-التخطيط-التنفيذ بنقرة واحدة.** حين تختار خيار APE في PromptQuorum، يُدرج التطبيق تلقائيًا هيكل الخطوات الثلاث حول هدفك وسياقك.',
            'داخل PromptQuorum، إطار APE:',
          ],
          items: [
            'يُوفِّر أقسامًا مُعنوَنة للتحليل والتخطيط وتوقعات التنفيذ، حتى لا تضطر لتذكر النمط في كل مرة.',
            'يُرسِل تعليمة APE المنظَّمة ذاتها إلى نماذج متعددة بالتوازي، مما يُسهِّل مقارنة كيفية استجابة نماذج مختلفة في كل مرحلة.',
            'يمكن حفظه كقالب لسير العمل المتكررة كمراجعات الكود ومذكرات الاستراتيجية وتقارير البحث.',
          ],
        },
        choosingAPE: {
          title: 'اختيار APE مقابل أطر أخرى',
          content: [
            '**يجب أن تختار إطار APE على أطر التعليمات الأخرى حين تريد خطوات استدلال صريحة لكنك لا تحتاج عددًا كبيرًا من المعاملات أو الأقسام.** APE مُدمَج عمدًا: ثلاث مراحل غالبًا كافية لتحسين الوضوح دون إرهاق المستخدم.',
            'في الممارسة العملية:',
          ],
          items: [
            'اختر APE للمهام المعقدة لكن المكتفية بذاتها حيث يهم الاستدلال.',
            'اختر إطارًا أحادي الخطوة حين تعرف بالضبط تنسيق النتيجة وتحتاج فقط تعليمة محدَّدة جيدًا.',
            'اختر أطرًا أكثر تفصيلًا (ذات أقسام ومعاملات كثيرة) فقط حين يكون لديك معايير داخلية صارمة يجب ترميزها في التعليمة.',
          ],
          columns: ['الإطار', 'المراحل/الأقسام', 'الأفضل لـ', 'الاستدلال مرئي؟'],
          rows: [
            { 'الإطار': 'APE', 'المراحل/الأقسام': '٣ (التحليل، التخطيط، التنفيذ)', 'الأفضل لـ': 'المهام المعقدة التي تتطلب استدلالًا قابلًا للفحص', 'الاستدلال مرئي؟': 'نعم — مراحل صريحة' },
            { 'الإطار': 'أحادي الخطوة', 'المراحل/الأقسام': '١ (تعليمة واحدة)', 'الأفضل لـ': 'المهام البسيطة المحدَّدة جيدًا', 'الاستدلال مرئي؟': 'لا' },
            { 'الإطار': 'CRAFT', 'المراحل/الأقسام': '٥ (السياق، الدور، الإجراء، التنسيق، الهدف)', 'الأفضل لـ': 'تعريف السياق الكامل', 'الاستدلال مرئي؟': 'اختياري' },
            { 'الإطار': 'CO-STAR', 'المراحل/الأقسام': '٦ (السياق، الهدف، الأسلوب، النبرة، الجمهور، الرد)', 'الأفضل لـ': 'التسويق والاتصالات', 'الاستدلال مرئي؟': 'لا' },
            { 'الإطار': 'SPECS', 'المراحل/الأقسام': '٥ (الموقف، المشكلة، الأمثلة، القيود، الأسلوب)', 'الأفضل لـ': 'حل المشكلات بأمثلة', 'الاستدلال مرئي؟': 'اختياري' },
            { 'الإطار': 'سلسلة التفكير', 'المراحل/الأقسام': '١ (مع "فكِّر خطوة بخطوة")', 'الأفضل لـ': 'الرياضيات والمنطق والاستدلال في خطوة واحدة', 'الاستدلال مرئي؟': 'نعم — لكن بلا هيكل' },
          ],
          tableFormat: true,
          callouts: [
            { type: 'info', label: 'هل تعلم؟', text: 'يتوافق هيكل APE الثلاثي مباشرةً مع كيفية تعامل الخبراء البشريين مع المشكلات المعقدة: فهم المشكلة (التحليل)، تصميم النهج (التخطيط)، ثم إنتاج النتيجة (التنفيذ). تُظهر الأبحاث في علم الإدراك أن هذا الفصل يُقلِّل الأخطاء في كل من الاستدلال البشري واستدلال الذكاء الاصطناعي.' },
          ],
        },

        automaticPromptEngineering: {
          title: 'APE تعني أيضًا: هندسة التعليمات التلقائية (مفهوم مختلف)',
          content: [
            'ملاحظة: تُستخدم "APE" أيضًا للإشارة إلى هندسة التعليمات التلقائية — وهي تقنية منفصلة عن إطار التحليل-التخطيط-التنفيذ الموضَّح أعلاه. تستخدم هندسة التعليمات التلقائية (Zhou et al., 2022) الذكاء الاصطناعي لتوليد وتقييم متغيرات التعليمات تلقائيًا، مع إيجاد الصياغات المثلى دون تجربة وخطأ يدوية. إليك كيف تعمل:',
          ],
          numberedItems: [
            '**حدِّد مهمتك ومقياس النجاح وبعض الأمثلة الأولية.** مثال: المهمة = "تصنيف مشاعر تعليقات العملاء." مقياس النجاح = "الدقة على ٢٠ مثالًا مُعنوَنًا." أمثلة أولية = ٣ رسائل عملاء متنوعة بتسميات مشاعر صحيحة.',
            '**استخدم أداة APE أو ChatGPT لتوليد متغيرات تعليمات تلقائيًا.** قدِّم مهمتك وأمثلتك واسأل: "ولِّد ٥ متغيرات مختلفة من التعليمات التي تستطيع حل هذه المهمة. نوِّع في أسلوب التعليمات والأمثلة والقيود." قيِّم كل متغير على مجموعة اختبارك.',
            '**سجِّل كل متغير على مقياس نجاحك.** شغِّل جميع المتغيرات على أمثلتك المحفوظة. سجِّل الدقة والسرعة والتكلفة. هدف APE هو إيجاد أفضل تعليمة دون تجربة وخطأ يدوية.',
            '**كرِّر: اختر أفضل متغيرين، واطلب من المُحسِّن توليد طفرات منهما.** إذا حقق المتغير ٣ دقة ٨٥٪ والمتغير ٥ دقة ٨٢٪، اطلب من المُحسِّن "توليد متغيرات مشابهة للمتغير ٣ لكن مع [تعديل محدد]." حسِّن تدريجيًا.',
            '**بمجرد حصولك على تعليمة قوية، اختبرها مع بيانات جديدة للتأكد من تعميمها.** تعليمتك المُحسَّنة حققت أداءً جيدًا على مجموعة اختبارك — الآن تحقق من عملها مع أمثلة جديدة غير مرئية. إذا انخفض الأداء، ربما تكون قد ضبطت أكثر من اللازم على بيانات الاختبار.',
          ],
        },

        relatedReading: {
          title: 'قراءات ذات صلة',
          items: [
            '[صياغة سلسلة التفكير](/ar/prompt-engineering/chain-of-thought-prompting) — تقنية الاستدلال التي يُرسِّمها APE في ثلاث مراحل',
            '[أي إطار تعليمات يجب أن تستخدم؟](/ar/prompt-engineering/which-prompt-framework-should-you-use) — مقارنة APE مع CRAFT وCO-STAR وSPECS',
            '[طريقة التعليمة أحادية الخطوة](/ar/prompt-engineering/the-single-step-prompt-method) — حين لا تحتاج المراحل الثلاث لـ APE',
            '[٥ لبنات بناء يحتاجها كل تعليمة](/ar/prompt-engineering/5-building-blocks-every-prompt-needs) — اللبنات الشاملة التي تُنظِّمها مراحل APE',
            '[صياغة الشخصية](/ar/prompt-engineering/persona-prompting) — ادمجها مع تعريف الدور في APE للتحليل الخاص بالمجال',
            '[تسلسل التعليمات](/ar/prompt-engineering/prompt-chaining) — للمهام الأكثر تعقيدًا من تعليمة APE واحدة، سلسل خطوات APE متعددة',
          ],
        },

        sources: {
          title: 'المصادر',
          items: [
            '[White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — تصنيف لأنماط التعليمات بما يشمل أنماط الاستدلال المنظَّم',
            '[Zhou et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — الورقة الأصلية لهندسة التعليمات التلقائية (APE)',
            '[Anthropic. "Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — أفضل ممارسات الصياغة المنظَّمة',
            '[OpenAI. "Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs) — توجيه الاستدلال خطوة بخطوة والمخرجات المنظَّمة',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          { '@type': 'Question', name: 'ماذا يعني APE؟', acceptedAnswer: { '@type': 'Answer', text: 'APE يعني التحليل والتخطيط والتنفيذ. إنه إطار تعليمات من ثلاث خطوات يُفكِّك الاستدلال المعقد إلى ثلاث مراحل صريحة: فهم المشكلة وتخطيط نهج وتنفيذ الحل.' } },
          { '@type': 'Question', name: 'كيف يختلف APE عن مجرد طلب إجابة من نموذج؟', acceptedAnswer: { '@type': 'Answer', text: 'مع APE تحصل على رؤية لعملية تفكير النموذج. بدلًا من إجابة واحدة، ترى كيف فهم النموذج مهمتك وما الخطة التي اختارها والنتيجة النهائية. هذا يُسهِّل اكتشاف الأخطاء ويجعل النتائج أكثر موثوقية.' } },
          { '@type': 'Question', name: 'متى يجب أن أستخدم APE بدلًا من طريقة التعليمة أحادية الخطوة؟', acceptedAnswer: { '@type': 'Answer', text: 'استخدم APE حين يكون الاستدلال حاسمًا لمهمتك: التحليل التقني ومراجعات الكود وتطوير الاستراتيجيات أو المواقف التي تكون فيها الأخطاء مكلفة. استخدم التعليمة أحادية الخطوة حين يكون هدفك واضحًا من البداية وتحتاج أساسًا سرعة التنفيذ.' } },
          { '@type': 'Question', name: 'هل يمكنني استخدام APE مع النماذج المحلية مثل Ollama أو LM Studio؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يعمل APE مع أي نموذج — نماذج الحدود من OpenAI وAnthropic وGoogle، أو النماذج المحلية عبر Ollama وLM Studio. ينطبق هيكل الخطوات الثلاث ذاته عبر جميع المنصات.' } },
          { '@type': 'Question', name: 'كم يجب أن تكون تعليمة APE طويلة؟', acceptedAnswer: { '@type': 'Answer', text: 'يمكن أن تكون تعليمات APE مُدمَجة. فقرة واحدة تذكر التحليل والتخطيط والتنفيذ وتحدد ما تتوقعه في كل مرحلة تكفي. الإطار في حد ذاته يتعلق بالهيكل، لا الطول.' } },
          { '@type': 'Question', name: 'هل يمكنني حفظ تعليمات APE كقوالب في PromptQuorum؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. بمجرد إنشاء تعليمة منظَّمة بـ APE تعمل جيدًا لسير عمل معين (مثل مراجعات الكود أو ملخصات العملاء)، يمكنك حفظها كقالب في PromptQuorum ومشاركتها مع فريقك.' } },
          { '@type': 'Question', name: 'ماذا لو كانت مهمتي أبسط من أن تستحق APE؟', acceptedAnswer: { '@type': 'Answer', text: 'إذا كانت مهمتك بسيطة ولا تتطلب استدلالًا مرئيًا، فطريقة التعليمة أحادية الخطوة على الأرجح كافية. APE يُضيف عبئًا — القيمة تأتي من القدرة على فحص وتحسين استدلال النموذج.' } },
          { '@type': 'Question', name: 'كيف أعرف أن تعليمة APE تعمل جيدًا؟', acceptedAnswer: { '@type': 'Answer', text: 'شغِّل تعليمة APE على ٣-٥ أمثلة تمثيلية وتحقق: (١) هل يلتقط التحليل التحدي الجوهري؟ (٢) هل الخطة معقولة وقابلة للتنفيذ؟ (٣) هل يتبع التنفيذ الخطة؟ إذا كانت أي مرحلة ضعيفة، حسِّن التعليمة وأعد الاختبار.' } },
          { '@type': 'Question', name: 'ما الفرق بين APE (التحليل-التخطيط-التنفيذ) وAPE (هندسة التعليمات التلقائية)؟', acceptedAnswer: { '@type': 'Answer', text: 'يتشاركان الاختصار لكنهما تقنيتان مختلفتان تمامًا. APE (التحليل-التخطيط-التنفيذ) هو هيكل تعليمات يدوي تكتبه بنفسك. APE (هندسة التعليمات التلقائية، Zhou et al. 2022) هي تقنية تولِّد فيها الذكاء الاصطناعي وتُقيِّم متغيرات التعليمات تلقائيًا لإيجاد الصياغة المثلى. يغطي هذا المقال كليهما — الإطار الرئيسي هو التحليل-التخطيط-التنفيذ؛ التحسين التلقائي للتعليمات يرد في القسم الأخير.' } },
        ],
      },
    },

    pt: {
      theme: 'Frameworks',
      title: 'O Framework APE: Analisar, Planejar, Executar — Prompts Estruturados que Mostram seu Raciocínio',
      intro: '**O Framework APE é uma estrutura de prompt de três etapas baseada em Analisar, Planejar e Executar, para que os modelos de linguagem produzam resultados claros e rastreáveis a partir de uma única instrução.** No PromptQuorum, o Framework APE está disponível como opção predefinida que qualquer usuário pode selecionar e aplicar em todos os modelos compatíveis.',
      publishDate: '2026-03-24',
      readTime: '7 min de leitura',
      educationalLevel: 'Intermediate',
      audience: 'Desenvolvedores, analistas e trabalhadores do conhecimento que precisam verificar o raciocínio da IA em tarefas complexas',
      seoTitle: 'Framework APE: prompts que mostram o raciocínio da IA',
      metaDescription: 'O Framework APE (Analisar-Planejar-Executar) torna o raciocínio da IA transparente e auditável. Inclui modelos e comparação com outros frameworks.',
      ogTitle: 'O Framework APE: Analisar, Planejar, Executar — Prompts Estruturados que Mostram seu Raciocínio',
      ogDescription: 'Pare de obter respostas de IA de caixa preta. O Framework APE obriga os modelos a mostrar sua análise, declarar seu plano e depois executar — assim você detecta desalinhamentos antes do resultado final.',
      twitterTitle: 'Framework APE: Analisar → Planejar → Executar',
      twitterDescription: 'Framework APE: Analisar → Planejar → Executar. Três etapas que convertem respostas de IA opacas em raciocínio rastreável e inspecionável.',
      quickFacts: [
        '**APE significa:** Analisar → Planejar → Executar',
        '**Propósito:** Tornar o raciocínio da IA visível e inspecionável antes do resultado final',
        '**Quando usar:** Tarefas complexas e de alto risco onde o raciocínio importa (análise, estratégia, revisão de código, pesquisa)',
        '**Quando NÃO usar:** Perguntas factuais simples, tarefas curtas, rascunhos rápidos',
        '**Complexidade:** 3 etapas — mais simples que CRAFT (5), CO-STAR (6), SPECS (5)',
        '**Funciona em:** Todos os modelos de linguagem — APIs na nuvem e modelos locais via Ollama/LM Studio',
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'O Framework APE: Analisar, Planejar, Executar — Prompts Estruturados que Mostram seu Raciocínio',
        description: 'O Framework APE divide cada prompt de IA em Analisar, Planejar e Executar — tornando o raciocínio do modelo visível e verificável. Modelo, exemplos e comparação com outros frameworks.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        url: 'https://www.promptquorum.com/pt/prompt-engineering/ape-framework',
        inLanguage: 'pt-BR',
        'proficiencyLevel': 'Intermediate',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        keywords: ['Framework APE', 'Analisar Planejar Executar', 'frameworks de prompt', 'prompt engineering', 'raciocínio estruturado', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Grandes Modelos de Linguagem' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
          { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
        ],
      },
      sections: {
        tldr: {
          title: 'Pontos-chave',
          isTldr: true,
          content: [
            '**APE significa Analisar, Planejar, Executar** — uma estrutura de prompt de três etapas que obriga os modelos a mostrar o raciocínio antes de produzir resultados.',
            '**Use APE quando o raciocínio importa:** análises complexas, revisões técnicas, redação estratégica e decisões de alto risco onde você precisa inspecionar o pensamento do modelo.',
            '**APE reduz erros ao quebrar suposições implícitas:** em vez de obter uma resposta, você vê como o modelo entendeu o problema e que plano escolheu.',
            '**PromptQuorum oferece APE como opção integrada:** selecione uma vez, aplique a múltiplos modelos em paralelo, salve como modelo.',
            '**Comparado com prompts de etapa única ou multi-turno, APE é o ponto médio:** mais estrutura do que uma instrução, menos sobrecarga do que muitas trocas.',
          ],
        },
        whatIsAPE: {
          title: 'O que é o Framework APE',
          content: [
            '**O Framework APE é um modelo de prompt que obriga os modelos de linguagem a separar seu pensamento em análise, planejamento e execução.** Em vez de obter uma resposta indiferenciada, você vê como o modelo entendeu o problema, como pretende resolvê-lo e o resultado final. Essa estrutura melhora a confiabilidade porque você pode inspecionar cada etapa.',
            'APE é especialmente útil ao lidar com tarefas complexas ou de alto risco. Ao pedir ao modelo que mostre seu caminho de raciocínio explicitamente, você reduz a possibilidade de suposições ocultas ou atalhos permanecerem invisíveis. O mesmo padrão de três partes funciona em todos os modelos — APIs na nuvem e modelos locais via Ollama ou LM Studio — mantendo resultados consistentes.',
          ],
        },
        threeSteps: {
          title: 'As Três Etapas: Analisar, Planejar, Executar',
          content: [
            '**O núcleo do Framework APE é que cada prompt instrui o modelo a primeiro analisar o problema, depois planejar a solução, e só então executar a resposta final.** Essas três etapas correspondem diretamente a como [os humanos lidam com o raciocínio](/prompt-engineering/chain-of-thought-prompting) e lhe dão pontos de controle claros.',
            'Um detalhamento típico é o seguinte:',
          ],
          items: [
            'Analisar: Reformular a tarefa com suas próprias palavras, identificar restrições-chave e detectar informações ausentes.',
            'Planejar: Propor uma abordagem breve passo a passo que você seguirá para resolver a tarefa.',
            'Executar: Produzir a resposta final seguindo o plano, com a estrutura e o formato solicitados.',
          ],
        },
        whenToUse: {
          title: 'Quando usar o Framework APE',
          content: [
            '**Você deve usar o Framework APE quando sua tarefa é suficientemente complexa para que você se importe com o raciocínio do modelo, não apenas com seu resultado final.** Isso inclui análise técnica, pesquisa de múltiplas etapas, redação estratégica e qualquer situação onde os erros sejam custosos.',
            'Os casos de uso típicos incluem:',
          ],
          items: [
            'Detalhar um requisito de produto em histórias de usuário e critérios de aceitação.',
            'Projetar uma estratégia de conteúdo a partir de notas brutas e informações de mercado.',
            'Revisar e refatorar código enquanto explica compensações e riscos.',
            'Planejar e redigir relatórios de longo alcance onde a estrutura importa tanto quanto o conteúdo.',
          ],
          callouts: [
            { type: 'warning', label: 'Aviso', text: 'APE adiciona sobrecarga de tokens — as etapas de Analisar e Planejar consomem tokens de saída antes do Executar final. Para tarefas de produção de alto volume onde você só precisa da resposta final e não inspeciona o raciocínio, use um prompt de etapa única mais simples para reduzir custo e latência.' },
          ],
        },
        howToWrite: {
          title: 'Como escrever um prompt APE',
          content: [
            '**Um prompt APE eficaz menciona as três etapas pelo nome e especifica o que você espera em cada parte: notas de análise, um plano passo a passo e um resultado final.** Você pode fazer isso de forma compacta para que ainda conte como um único prompt.',
            'Um padrão genérico é:',
            '"Você é [função]. Primeiro, **Analise** a tarefa listando os objetivos-chave, restrições e informações ausentes. Depois, **Planeje** sua abordagem em 3–5 pontos. Finalmente, **Execute** produzindo [formato de resultado desejado], seguindo estritamente seu plano."',
            'Você pode então personalizar esse padrão base com detalhes de domínio como público, tom, estrutura de arquivos ou requisitos de citação. Uma vez definido, você pode reutilizar o mesmo prompt APE em múltiplas tarefas alterando apenas o objetivo e o contexto.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Dica Pro', text: 'Após o modelo completar sua Análise e Plano, leia-os ANTES de ver o resultado do Executar. Se a Análise omitiu uma restrição ou o Plano tem uma etapa incorreta, diga ao modelo para revisá-los — isso é mais econômico e rápido do que regenerar toda a resposta.' },
          ],
        },
        badVsGoodExample: {
          title: 'Exemplo: Prompt APE Ruim vs Bom',
          content: [
            '**A diferença entre um prompt não estruturado e um prompt APE fica clara quando você os compara na mesma tarefa.** Aqui está um exemplo simples para um e-mail de lançamento de produto.',
            '**[Prompt Ruim]**',
            '"Escreva um e-mail anunciando nosso novo painel de análises."',
            '**[Prompt Bom]**',
            '"Você é um especialista em marketing de produtos SaaS. Objetivo: Criar um e-mail de anúncio para nosso novo painel de análises direcionado a clientes existentes. Estrutura APE: 1) **Analise**: Liste brevemente o público-alvo, seus principais pontos de dor e os benefícios-chave que este painel aborda. 2) **Planeje**: Esboce a estrutura do e-mail em 3–5 pontos (gancho, benefícios-chave, chamada para ação, etc.). 3) **Execute**: Escreva o e-mail final (máx. 220 palavras) em um tom claro e profissional. Inclua linha de assunto, texto de prévia e corpo."',
            'Com o Framework APE, o modelo mostra sua compreensão do problema e o plano antes de produzir o e-mail, tornando mais fácil detectar desalinhamentos cedo.',
          ],
        },
        howPQImplements: {
          title: 'Como o PromptQuorum implementa o Framework APE',
          content: [
            '**PromptQuorum é uma ferramenta de despacho de IA multi-modelo que inclui o Framework APE como uma de suas estruturas de prompt integradas, para que os usuários possam aplicar o prompting Analisar–Planejar–Executar com um único clique.** Quando você escolhe a opção APE no PromptQuorum, o aplicativo injeta automaticamente a estrutura de três etapas em torno do seu objetivo e contexto.',
            'Dentro do PromptQuorum, o Framework APE:',
          ],
          items: [
            'Fornece seções rotuladas para análise, planejamento e expectativas de execução, para que você não precise lembrar o padrão cada vez.',
            'Envia o mesmo prompt estruturado com APE para múltiplos modelos em paralelo, facilitando comparar como diferentes modelos respondem em cada etapa.',
            'Pode ser salvo como modelo para fluxos de trabalho repetitivos como revisões de código, memorandos de estratégia ou relatórios de pesquisa.',
          ],
        },
        choosingAPE: {
          title: 'Escolher APE vs Outros Frameworks',
          content: [
            '**Você deve escolher o Framework APE sobre outros frameworks de prompt quando quiser etapas de raciocínio explícitas mas não precisar de um grande número de parâmetros ou seções.** APE é deliberadamente compacto: três etapas geralmente são suficientes para melhorar a clareza sem sobrecarregar o usuário.',
            'Na prática:',
          ],
          items: [
            'Escolha APE para tarefas complexas mas autocontidas onde o raciocínio importa.',
            'Escolha um [framework de etapa única](/prompt-engineering/the-single-step-prompt-method) quando você já conhece o formato exato do resultado e só precisa de uma instrução bem especificada.',
            'Escolha frameworks mais detalhados (com muitas seções e parâmetros) apenas quando você tem padrões internos rígidos que devem ser codificados no prompt.',
          ],
          columns: ['Framework', 'Etapas/Seções', 'Ideal Para', 'Raciocínio Visível?'],
          rows: [
            { 'Framework': 'APE', 'Etapas/Seções': '3 (Analisar, Planejar, Executar)', 'Ideal Para': 'Tarefas complexas que exigem raciocínio inspecionável', 'Raciocínio Visível?': 'Sim — etapas explícitas' },
            { 'Framework': 'Single-Step', 'Etapas/Seções': '1 (uma instrução)', 'Ideal Para': 'Tarefas simples e bem definidas', 'Raciocínio Visível?': 'Não' },
            { 'Framework': 'CRAFT', 'Etapas/Seções': '5 (Contexto, Função, Ação, Formato, Objetivo)', 'Ideal Para': 'Definição de contexto completo', 'Raciocínio Visível?': 'Opcional' },
            { 'Framework': 'CO-STAR', 'Etapas/Seções': '6 (Contexto, Objetivo, Estilo, Tom, Público, Resposta)', 'Ideal Para': 'Marketing e comunicações', 'Raciocínio Visível?': 'Não' },
            { 'Framework': 'SPECS', 'Etapas/Seções': '5 (Situação, Problema, Exemplos, Restrições, Estilo)', 'Ideal Para': 'Resolução de problemas com exemplos', 'Raciocínio Visível?': 'Opcional' },
            { 'Framework': 'Chain-of-Thought', 'Etapas/Seções': '1 (com "pense passo a passo")', 'Ideal Para': 'Matemática, lógica, raciocínio em etapa única', 'Raciocínio Visível?': 'Sim — mas sem estrutura' },
          ],
          tableFormat: true,
          callouts: [
            { type: 'info', label: 'Você sabia?', text: 'A estrutura de três etapas do APE corresponde diretamente a como especialistas humanos abordam problemas complexos: entender o problema (Analisar), projetar a abordagem (Planejar), depois produzir o resultado (Executar). A pesquisa em ciências cognitivas mostra que essa separação reduz erros tanto no raciocínio humano quanto no da IA.' },
          ],
        },

        automaticPromptEngineering: {
          title: 'APE também significa: Engenharia Automática de Prompts (Conceito Diferente)',
          content: [
            'Nota: "APE" também é usado para se referir à Engenharia Automática de Prompts — uma técnica separada do framework Analisar-Planejar-Executar descrito acima. A Engenharia Automática de Prompts (Zhou et al., 2022) usa IA para gerar e pontuar variantes de prompts automaticamente, encontrando formulações ótimas sem tentativa e erro manual. Veja como funciona:',
          ],
          numberedItems: [
            '**Defina sua tarefa, métrica de sucesso e alguns exemplos iniciais.** Exemplo: Tarefa = \'classificar o sentimento de comentários de clientes.\' Métrica de sucesso = \'precisão em 20 exemplos rotulados.\' Exemplos iniciais = 3 mensagens de clientes variadas com rótulos de sentimento corretos.',
            '**Use uma ferramenta APE ou ChatGPT para gerar automaticamente variantes de prompts.** Forneça sua tarefa e exemplos, e pergunte: \'Gere 5 variações diferentes de prompt que possam resolver esta tarefa. Varie o estilo de instrução, os exemplos e as restrições.\' Avalie cada variante em seu conjunto de testes.',
            '**Pontue cada variante em sua métrica de sucesso.** Execute todas as variantes em seus exemplos reservados. Registre precisão, velocidade e custo. O objetivo do APE é encontrar o melhor prompt sem tentativa e erro manual.',
            '**Itere: escolha as 2 melhores variantes, peça ao otimizador que gere mutações delas.** Se a variante 3 obteve 85% de precisão e a variante 5 obteve 82%, peça ao otimizador que \'gere variações semelhantes à variante 3 mas com [ajuste específico].\' Refine iterativamente.',
            '**Uma vez que você tenha um prompt sólido, teste-o com dados novos para confirmar que generaliza.** Seu prompt otimizado teve bom desempenho em seu conjunto de testes — agora verifique se funciona com exemplos novos não vistos. Se o desempenho cair, você pode ter superajustado seus dados de teste.',
          ],
        },

        relatedReading: {
          title: 'Leitura Relacionada',
          items: [
            '[Prompting Chain-of-Thought](/pt/prompt-engineering/chain-of-thought-prompting) — a técnica de raciocínio que o APE formaliza em três etapas',
            '[Qual Framework de Prompt Você Deve Usar?](/pt/prompt-engineering/which-prompt-framework-should-you-use) — comparação de APE vs CRAFT vs CO-STAR vs SPECS',
            '[O Método de Prompt de Etapa Única](/pt/prompt-engineering/the-single-step-prompt-method) — quando você NÃO precisa das três etapas do APE',
            '[5 Blocos de Construção que Todo Prompt Precisa](/pt/prompt-engineering/5-building-blocks-every-prompt-needs) — os blocos universais que as etapas do APE organizam',
            '[Prompting de Persona](/pt/prompt-engineering/persona-prompting) — combine com a definição de função do APE para análise específica de domínio',
            '[Encadeamento de Prompts](/pt/prompt-engineering/prompt-chaining) — para tarefas muito complexas para um único prompt APE, encadeie múltiplas etapas APE',
          ],
        },

        sources: {
          title: 'Fontes',
          items: [
            '[White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — taxonomia de padrões de prompt incluindo padrões de raciocínio estruturado',
            '[Zhou et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — o artigo original de Engenharia Automática de Prompts (APE)',
            '[Anthropic. "Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — melhores práticas de prompting estruturado',
            '[OpenAI. "Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs) — orientação de raciocínio passo a passo e saída estruturada',
          ],
        },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'pt-BR',
        mainEntity: [
          { '@type': 'Question', name: 'O que significa APE?', acceptedAnswer: { '@type': 'Answer', text: 'APE significa Analisar, Planejar, Executar. É um framework de prompt de três etapas que decompõe o raciocínio complexo em três etapas explícitas: entender o problema, planejar uma abordagem e executar a solução.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre APE e simplesmente pedir uma resposta a um modelo?', acceptedAnswer: { '@type': 'Answer', text: 'Com APE você obtém visibilidade do processo de pensamento do modelo. Em vez de uma única resposta, você vê como o modelo entendeu sua tarefa, que plano escolheu e o resultado final. Isso facilita detectar erros e torna os resultados mais confiáveis.' } },
          { '@type': 'Question', name: 'Quando devo usar APE em vez do Método de Prompt de Etapa Única?', acceptedAnswer: { '@type': 'Answer', text: 'Use APE quando o raciocínio é crítico para sua tarefa: análise técnica, revisões de código, desenvolvimento de estratégias ou situações onde os erros são custosos. Use Single Step quando seu objetivo está claro desde o início e você precisa principalmente de velocidade de execução.' } },
          { '@type': 'Question', name: 'Posso usar APE com modelos locais como Ollama ou LM Studio?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. APE funciona com qualquer modelo — modelos frontier da OpenAI, Anthropic e Google, ou modelos locais via Ollama e LM Studio. A mesma estrutura de três etapas se aplica em todas as plataformas.' } },
          { '@type': 'Question', name: 'Qual deve ser o tamanho de um prompt APE?', acceptedAnswer: { '@type': 'Answer', text: 'Os prompts APE podem ser compactos. Um único parágrafo que mencione Analisar, Planejar e Executar e especifique o que você espera em cada etapa é suficiente. O framework em si é sobre estrutura, não comprimento.' } },
          { '@type': 'Question', name: 'Posso salvar prompts APE como modelos no PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Uma vez que você cria um prompt estruturado com APE que funciona bem para um fluxo de trabalho específico (por exemplo, revisões de código, resumos de clientes), você pode salvá-lo como modelo no PromptQuorum e compartilhá-lo com sua equipe.' } },
          { '@type': 'Question', name: 'E se minha tarefa for muito simples para APE?', acceptedAnswer: { '@type': 'Answer', text: 'Se sua tarefa é simples e não requer raciocínio visível, o Método de Prompt de Etapa Única provavelmente é suficiente. APE adiciona sobrecarga — o valor vem de poder inspecionar e refinar o raciocínio do modelo.' } },
          { '@type': 'Question', name: 'Como sei se um prompt APE está funcionando bem?', acceptedAnswer: { '@type': 'Answer', text: 'Execute seu prompt APE em 3–5 exemplos representativos e verifique: (1) A análise captura o desafio central? (2) O plano é razoável e executável? (3) A execução segue o plano? Se alguma etapa estiver fraca, refine o prompt e teste novamente.' } },
          { '@type': 'Question', name: 'Qual é a diferença entre APE (Analisar-Planejar-Executar) e APE (Engenharia Automática de Prompts)?', acceptedAnswer: { '@type': 'Answer', text: 'Compartilham o acrônimo mas são técnicas completamente diferentes. APE (Analisar-Planejar-Executar) é uma estrutura de prompt manual que você mesmo escreve. APE (Engenharia Automática de Prompts, Zhou et al. 2022) é uma técnica onde a IA gera e pontua automaticamente variantes de prompt para encontrar a formulação ótima. Este artigo cobre ambas — o framework principal é Analisar-Planejar-Executar; a otimização automatizada de prompts é coberta na seção final.' } },
        ],
      },
    },

    fr: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The APE Framework: Analyze, Plan, Execute — Structured Prompts That Show Their Reasoning',
      intro: '',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'Framework APE : Prompts structurés, raisonnement visible',
      metaDescription: 'Le framework APE (Analyse-Plan-Exécution) rend transparent le raisonnement de l\'IA. Modèles, comparaisons aux autres frameworks et guide d\'implémentation.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/fr/prompt-engineering/ape-framework',
        headline: 'Framework APE : Analyse, Plan, Exécution — Prompts Structurés avec Raisonnement Visible',
        description: 'Le framework APE divise chaque prompt IA en analyse, planification et exécution pour rendre visible et vérifiable le raisonnement du modèle.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['Framework APE', 'Analyze Plan Execute', 'Frameworks de prompt', 'Prompt Engineering', 'raisonnement structuré'],
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
      },
      sections: {
        faqSection: {
          id: 'faq',
          title: 'Questions Fréquemment Posées',
          faqs: [
            { q: 'Que signifie APE ?', a: 'APE signifie Analyser, Planifier, Exécuter. C\'est un framework de prompt en trois étapes qui divise le raisonnement complexe en trois phases explicites : la compréhension du problème, la planification d\'une approche et l\'exécution de la solution.' },
            { q: 'En quoi APE diffère-t-il du fait de simplement demander une réponse à un modèle ?', a: 'Avec APE, vous avez une visibilité sur le processus de réflexion du modèle. Au lieu d\'une seule réponse, vous voyez comment le modèle a compris votre tâche, quel plan il a choisi et la sortie finale. Cela rend les erreurs plus faciles à attraper et les résultats plus fiables.' },
            { q: 'Quand devrais-je utiliser APE plutôt que la Single Step Prompt Method ?', a: 'Utilisez APE quand le raisonnement est critique pour votre tâche : analyse technique, révisions de code, développement de stratégie, ou situations où les erreurs sont coûteuses. Utilisez Single Step quand votre objectif est clair d\'avance et vous avez surtout besoin de rapidité d\'exécution.' },
            { q: 'Puis-je utiliser APE avec des modèles locaux comme Ollama ou LM Studio ?', a: 'Oui. APE fonctionne avec n\'importe quel modèle—modèles de pointe d\'OpenAI, Anthropic et Google, ou modèles locaux via Ollama et LM Studio. La même structure en trois étapes s\'applique sur toutes les plateformes.' },
            { q: 'Quelle longueur doit avoir un prompt APE ?', a: 'Les prompts APE peuvent être compacts. Un seul paragraphe qui mentionne Analyser, Planifier et Exécuter et spécifie ce que vous attendez à chaque étape est suffisant. Le framework lui-même concerne la structure, pas la longueur.' },
            { q: 'Puis-je enregistrer les prompts APE comme modèles dans PromptQuorum ?', a: 'Oui. Une fois que vous avez créé un prompt structuré en APE qui fonctionne bien pour un flux de travail particulier (par exemple, révisions de code, résumés de clients), vous pouvez l\'enregistrer comme modèle dans PromptQuorum et le partager avec votre équipe.' },
            { q: 'Et si ma tâche est trop simple pour APE ?', a: 'Si votre tâche est directe et ne nécessite pas un raisonnement visible, la Single Step Prompt Method est probablement suffisante. APE ajoute une surcharge—la valeur vient de la capacité à inspecter et affiner le raisonnement du modèle.' },
            { q: 'Comment savoir si un prompt APE fonctionne bien ?', a: 'Exécutez votre prompt APE sur 3–5 exemples représentatifs et vérifiez : (1) L\'analyse capture-t-elle le défi fondamental ? (2) Le plan est-il raisonnable et réalisable ? (3) L\'exécution suit-elle le plan ? Si une étape est faible, affinez le prompt et testez à nouveau.' },
            { q: 'Quelle est la différence entre APE (Analyser-Planifier-Exécuter) et APE (Automatic Prompt Engineering) ?', a: 'Ils partagent un acronyme mais ce sont des techniques complètement différentes. APE (Analyser-Planifier-Exécuter) est une structure de prompt manuelle que vous écrivez vous-même. APE (Automatic Prompt Engineering, Zhou et al. 2022) est une technique où l\'IA génère et note automatiquement les variantes de prompt pour trouver le formulation optimale.' },
          ],
        },
      }
    },
    ja: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The APE Framework: Analyze, Plan, Execute — Structured Prompts That Show Their Reasoning',
      intro: '',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'APEフレームワーク：分析・計画・実行 — 思考プロセスが見える構造化プロンプト',
      metaDescription: 'APEフレームワーク（分析・計画・実行）はAIの思考プロセスを透明かつ検証可能にします。テンプレート、他のフレームワークとの比較、実装ガイド、FAQ、関連資料を含みます。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/ja/prompt-engineering/ape-framework',
        headline: 'APEフレームワーク：分析・計画・実行 — 思考プロセスが見える構造化プロンプト',
        description: 'APEフレームワークはAIプロンプトを分析、計画、実行の3段階に分割し、モデルの思考プロセスを可視化・検証可能にします。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['APEフレームワーク', 'Analyze Plan Execute', 'プロンプトフレームワーク', 'プロンプトエンジニアリング', '構造化推論'],
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
      },
      sections: {
        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            { q: 'APEは何の略ですか？', a: 'APEはAnalyze（分析）、Plan（計画）、Execute（実行）の略です。複雑な推論を3つの明示的な段階に分割するプロンプトフレームワークです。問題の理解、アプローチの計画、解決策の実行という段階です。' },
            { q: 'APEと単にモデルに答えを求めることの違いは？', a: 'APEを使用すると、モデルの思考プロセスが見えます。単一の答えではなく、モデルがタスクをどのように理解したか、どのプランを選択したか、最終出力がどうなったかが見えます。これにより、エラーをキャッチしやすく、結果がより信頼できるものになります。' },
            { q: 'APEをSingle Step Prompt Methodの代わりに使うべき場合は？', a: 'テクニカル分析、コードレビュー、戦略立案、エラーが高コストな状況など、推論がタスクに重要な場合はAPEを使用します。目標が最初から明確で、主に実行速度が必要な場合はSingle Stepを使用します。' },
            { q: 'OllamaやLM Studioなどのローカルモデルで使用できますか？', a: 'はい。APEは任意のモデルで機能します。OpenAI、Anthropic、GoogleのフロンティアモデルやOllamaおよびLM Studio経由のローカルモデルです。すべてのプラットフォームで同じ3段階の構造が適用されます。' },
            { q: 'APEプロンプトの長さはどの程度必要ですか？', a: 'APEプロンプトはコンパクトにできます。分析、計画、実行に言及し、各段階で期待することを指定する1つの段落で十分です。フレームワーク自体は長さについてではなく構造についてのものです。' },
            { q: 'PromptQuorumでAPEプロンプトをテンプレートとして保存できますか？', a: 'はい。特定のワークフロー（コードレビュー、カスタマーサマリーなど）でうまく機能するAPE構造化プロンプトを作成したら、PromptQuorumでテンプレートとして保存し、チームと共有できます。' },
            { q: 'タスクがAPEに対して単純すぎる場合は？', a: 'タスクが単純で可視的な推論が必要ない場合、Single Step Prompt Methodで十分でしょう。APEはオーバーヘッドを追加します。価値はモデルの推論を検査して改良できることにあります。' },
            { q: 'APEプロンプトがうまく機能しているかどうかをどうやって知りますか？', a: 'APEプロンプトを3～5の代表的な例で実行し、次を確認します：（1）分析は核となる課題をキャプチャしていますか？（2）プランは合理的で実行可能ですか？（3）実行はプランに従っていますか？ステップが弱い場合はプロンプトを改良してテストし直します。' },
            { q: 'APE（分析-計画-実行）とAPE（Automatic Prompt Engineering）の違いは？', a: '同じ頭文字ですが、まったく異なるテクニックです。APE（分析-計画-実行）は自分自身で記述する手動のプロンプト構造です。APE（Automatic Prompt Engineering、Zhou et al. 2022）はAIが自動的にプロンプト変種を生成およびスコアリングして最適な表現を見つけるテクニックです。' },
          ],
        },
      }
    },
    zh: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The APE Framework: Analyze, Plan, Execute — Structured Prompts That Show Their Reasoning',
      intro: '',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'APE框架：分析·规划·执行 — 让思维过程可见的结构化提示',
      metaDescription: 'APE框架（分析-规划-执行）将AI的推理过程完全透明化并可验证。包含实用提示模板、与其他框架的详细对比、完整实现指南、常见问题解答和相关资源。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/zh/prompt-engineering/ape-framework',
        headline: 'APE框架：分析·规划·执行 — 让思维过程可见的结构化提示',
        description: 'APE框架将每个AI提示分为分析、规划和执行三个阶段，让模型的思维过程可见且可检查。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['APE框架', 'Analyze Plan Execute', '提示框架', '提示工程', '结构化推理'],
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        'proficiencyLevel': 'Intermediate',
      },
      sections: {
        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: 'APE代表什么？', a: 'APE代表分析（Analyze）、规划（Plan）、执行（Execute）。这是一个三步骤的提示框架，将复杂推理分为三个明确的阶段：理解问题、规划方法和执行解决方案。' },
            { q: 'APE与仅仅要求模型给出答案有何不同？', a: '使用APE，您可以看到模型的思考过程。与其说是单一答案，不如说您会看到模型如何理解您的任务、选择了什么计划、最终输出是什么。这使得错误更容易被捕捉，结果更可靠。' },
            { q: '何时应该使用APE而不是Single Step Prompt Method？', a: '当推理对您的任务至关重要时使用APE：技术分析、代码审查、策略制定或错误代价高昂的情况。当您的目标从一开始就明确且主要需要执行速度时使用Single Step。' },
            { q: '我能在Ollama或LM Studio等本地模型上使用APE吗？', a: '可以。APE可与任何模型一起工作——来自OpenAI、Anthropic和Google的前沿模型，或通过Ollama和LM Studio的本地模型。所有平台上都适用相同的三步结构。' },
            { q: 'APE提示需要多长？', a: 'APE提示可以很紧凑。一个提到分析、规划和执行并指定您在每个阶段期望的段落就足够了。框架本身关乎结构，而非长度。' },
            { q: '我能在PromptQuorum中将APE提示保存为模板吗？', a: '可以。一旦您创建了适用于特定工作流（例如，代码审查、客户摘要）的APE结构化提示，您可以将其在PromptQuorum中保存为模板并与您的团队共享。' },
            { q: '如果我的任务对APE太简单怎么办？', a: '如果您的任务很简单，不需要可见推理，Single Step Prompt Method可能就够了。APE会增加开销——其价值来自于能够检查和完善模型推理的能力。' },
            { q: '我怎么知道APE提示是否有效？', a: '在3-5个代表性示例上运行您的APE提示并检查：（1）分析是否抓住了核心挑战？（2）计划是否合理可行？（3）执行是否遵循了计划？如果任何步骤很弱，改进提示并再次测试。' },
            { q: 'APE（分析-规划-执行）和APE（Automatic Prompt Engineering）之间的区别是什么？', a: '它们共享首字母缩略词，但完全是不同的技术。APE（分析-规划-执行）是一个您自己编写的手动提示结构。APE（Automatic Prompt Engineering，Zhou et al. 2022）是一种技术，其中AI自动生成和评分提示变体以找到最优措辞。' },
          ],
        },
      }
    },
    ko: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    title: 'APE 프레임워크: 분석, 계획, 실행 — 추론 과정을 보여주는 구조화된 프롬프트',
    intro: '**APE 프레임워크는 분석(Analyze), 계획(Plan), 실행(Execute)을 기반으로 한 세 단계 프롬프트 구조로, 언어 모델이 단일 지시에서 명확하고 추적 가능한 결과를 생성할 수 있게 합니다.** PromptQuorum에서 APE 프레임워크는 모든 지원 모델에 적용할 수 있는 사전 설정 옵션으로 제공됩니다.',
    publishDate: '2026-03-24',
    readTime: '7분 분량',
    educationalLevel: 'Intermediate',
    audience: '복잡한 작업에서 AI의 추론 과정을 검증해야 하는 개발자, 분석가 및 지식 근로자',
    seoTitle: 'APE 프레임워크: AI 추론을 보여주는 구조화된 프롬프트',
    metaDescription: 'APE 프레임워크(분석-계획-실행)는 AI 추론 과정을 투명하고 감사 가능하게 만듭니다. 템플릿, 다른 프레임워크와의 비교 및 구현 가이드 포함.',
    ogTitle: 'APE 프레임워크: 분석, 계획, 실행 — 추론 과정을 보여주는 구조화된 프롬프트',
    ogDescription: '블랙박스 AI 답변을 그만 받으십시오. APE 프레임워크는 모델이 분석 결과를 보여주고, 계획을 선언한 다음 실행하도록 강제합니다. 최종 결과물 전에 불일치를 포착할 수 있습니다.',
    twitterTitle: 'APE 프레임워크: 분석 → 계획 → 실행',
    twitterDescription: 'APE 프레임워크: 분석 → 계획 → 실행. 불투명한 AI 답변을 추적 가능하고 검사 가능한 추론으로 바꾸는 세 단계입니다.',
    quickFacts: [
      '**APE의 의미:** 분석(Analyze) → 계획(Plan) → 실행(Execute)',
      '**목적:** 최종 결과물 전에 AI 추론 과정을 가시적이고 검사 가능하게 만들기',
      '**사용 시기:** 추론이 중요한 복잡하고 위험도가 높은 작업 (분석, 전략, 코드 리뷰, 연구)',
      '**사용하지 말아야 할 때:** 단순한 사실 확인 질문, 짧은 작업, 빠른 초안',
      '**복잡성:** 3단계 — CRAFT(5), CO-STAR(6), SPECS(5)보다 단순',
      '**적용 가능:** 모든 언어 모델 — 클라우드 API 및 Ollama/LM Studio를 통한 로컬 모델',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'APE 프레임워크: 분석, 계획, 실행 — 추론 과정을 보여주는 구조화된 프롬프트',
      description: 'APE 프레임워크는 모든 AI 프롬프트를 분석, 계획, 실행으로 분리하여 모델의 추론을 가시적이고 확인 가능하게 만듭니다. 템플릿, 예시, 다른 프레임워크와의 비교를 포함합니다.',
      datePublished: '2026-03-24',
      dateModified: '2026-05-04',
      url: 'https://www.promptquorum.com/ko/prompt-engineering/ape-framework',
      inLanguage: 'ko',
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      keywords: ['APE 프레임워크', '분석 계획 실행', '프롬프트 프레임워크', '프롬프트 엔지니어링', '구조화된 추론', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: '프롬프트 엔지니어링' },
        { '@type': 'Thing', name: '프롬프트 프레임워크' },
        { '@type': 'Thing', name: '대형 언어 모델' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.com' },
        { '@type': 'SoftwareApplication', name: 'LM Studio', url: 'https://lmstudio.ai' },
      ],
    },
    sections: {
      tldr: {
        title: '핵심 요점',
        isTldr: true,
        content: [
          '**APE는 분석, 계획, 실행을 의미합니다** — 모델이 결과를 생성하기 전에 추론 과정을 보여주도록 강제하는 세 단계 프롬프트 구조입니다.',
          '**추론이 중요할 때 APE를 사용하십시오:** 복잡한 분석, 기술 리뷰, 전략적 작성, 모델의 사고 과정을 검사해야 하는 위험도 높은 의사결정.',
          '**APE는 암묵적 가정을 깨뜨려 오류를 줄입니다:** 단순히 답변을 받는 대신 모델이 문제를 어떻게 이해하고 어떤 계획을 선택했는지 확인할 수 있습니다.',
          '**PromptQuorum은 APE를 내장 옵션으로 제공합니다:** 한 번 선택하면 여러 모델에 병렬로 적용하고 템플릿으로 저장할 수 있습니다.',
          '**단일 단계 또는 다중 턴 프롬프트와 비교할 때, APE는 중간 지점입니다:** 단일 지시보다 더 많은 구조, 여러 번의 교환보다 적은 부담.',
        ],
      },
      whatIsAPE: {
        title: 'APE 프레임워크란 무엇인가',
        content: [
          '**APE 프레임워크는 언어 모델이 사고를 분석, 계획, 실행으로 분리하도록 강제하는 프롬프트 템플릿입니다.** 단일 응답을 받는 대신 모델이 문제를 어떻게 이해했는지, 어떻게 해결하려는지, 최종 결과물이 무엇인지 확인할 수 있습니다. 이 구조는 각 단계를 검사할 수 있기 때문에 신뢰성을 향상시킵니다.',
          '복잡하거나 위험도가 높은 작업을 처리할 때 APE는 특히 유용합니다. 모델에게 추론 경로를 명시적으로 보여달라고 요청함으로써 숨겨진 가정이나 지름길이 보이지 않게 남아있을 가능성을 줄입니다. 동일한 세 부분 패턴이 모든 모델에서 작동합니다 — 클라우드 API와 Ollama 또는 LM Studio를 통한 로컬 모델 — 일관된 결과를 유지합니다.',
        ],
      },
      threeSteps: {
        title: '세 단계: 분석, 계획, 실행',
        content: [
          '**APE 프레임워크의 핵심은 각 프롬프트가 모델에게 먼저 문제를 분석하고, 그 다음 해결책을 계획하고, 그런 다음에야 최종 답변을 실행하도록 지시한다는 것입니다.** 이 세 단계는 인간이 추론을 처리하는 방식에 직접적으로 대응하며 명확한 검사 포인트를 제공합니다.',
          '일반적인 분류는 다음과 같습니다:',
        ],
        items: [
          '분석(Analyze): 작업을 자신의 말로 재구성하고, 주요 제약 조건을 파악하고, 누락된 정보를 발견합니다.',
          '계획(Plan): 작업을 해결하기 위해 따를 단계별 간략한 접근 방식을 제안합니다.',
          '실행(Execute): 요청된 구조와 형식에 따라 계획을 따르며 최종 답변을 생성합니다.',
        ],
      },
      whenToUse: {
        title: 'APE 프레임워크를 사용해야 할 때',
        content: [
          '**작업이 충분히 복잡하여 최종 결과물뿐만 아니라 모델의 추론 과정에도 관심을 갖게 될 때 APE 프레임워크를 사용해야 합니다.** 여기에는 기술 분석, 다단계 연구, 전략적 작성, 그리고 오류가 비용을 초래하는 모든 상황이 포함됩니다.',
          '일반적인 사용 사례는 다음과 같습니다:',
        ],
        items: [
          '제품 요구사항을 사용자 스토리와 수락 기준으로 분류하기.',
          '원시 메모와 시장 정보로부터 콘텐츠 전략 설계하기.',
          '트레이드오프와 위험을 설명하며 코드 검토 및 리팩토링하기.',
          '구조가 내용만큼 중요한 장문의 보고서 계획 및 작성하기.',
        ],
        callouts: [
          { type: 'warning', label: '경고', text: 'APE는 토큰 오버헤드를 추가합니다 — 분석 및 계획 단계는 최종 실행 전에 출력 토큰을 소비합니다. 추론을 검사하지 않고 최종 답변만 필요한 대량 프로덕션 작업의 경우, 비용과 지연 시간을 줄이기 위해 더 단순한 단일 단계 프롬프트를 사용하십시오.' },
        ],
      },
      howToWrite: {
        title: 'APE 프롬프트 작성 방법',
        content: [
          '**효과적인 APE 프롬프트는 세 단계를 이름으로 언급하고 각 부분에서 기대하는 것을 명시합니다: 분석 메모, 단계별 계획, 최종 결과물.** 단일 프롬프트로 계산될 수 있도록 간결하게 작성할 수 있습니다.',
          '일반적인 패턴은 다음과 같습니다:',
          '"당신은 [역할]입니다. 먼저, 주요 목표, 제약 조건 및 누락된 정보를 나열하여 작업을 **분석**하십시오. 그런 다음, 3-5개의 요점으로 접근 방식을 **계획**하십시오. 마지막으로, 계획을 엄격히 따르며 [원하는 결과 형식]을 생성하여 **실행**하십시오."',
          '그런 다음 이 기본 패턴을 대상 독자, 톤, 파일 구조 또는 인용 요구사항과 같은 도메인 세부 사항으로 커스터마이즈할 수 있습니다. 한 번 정의되면 목표와 컨텍스트만 변경하여 여러 작업에서 동일한 APE 프롬프트를 재사용할 수 있습니다.',
        ],
        callouts: [
          { type: 'pro-tip', label: '프로 팁', text: '모델이 분석과 계획을 완료한 후, 실행 결과를 보기 전에 먼저 읽으십시오. 분석에서 제약 조건이 누락되었거나 계획에 잘못된 단계가 있다면 모델에게 수정을 요청하십시오 — 이것이 전체 답변을 재생성하는 것보다 더 저렴하고 빠릅니다.' },
        ],
      },
      badVsGoodExample: {
        title: '예시: 나쁜 APE 프롬프트 vs 좋은 APE 프롬프트',
        content: [
          '**비구조화된 프롬프트와 APE 프롬프트의 차이는 동일한 작업에서 비교할 때 명확해집니다.** 제품 출시 이메일에 대한 간단한 예시입니다.',
          '**[나쁜 프롬프트]**',
          '"새로운 분석 대시보드를 발표하는 이메일을 작성하세요."',
          '**[좋은 프롬프트]**',
          '"당신은 SaaS 제품 마케팅 전문가입니다. 목표: 기존 고객을 대상으로 새로운 분석 대시보드 발표 이메일 작성. APE 구조: 1) **분석**: 대상 독자, 주요 불편 사항, 이 대시보드가 해결하는 핵심 이점을 간략히 나열하십시오. 2) **계획**: 이메일 구조를 3-5개의 요점(훅, 핵심 이점, 행동 유도 등)으로 개요를 잡으십시오. 3) **실행**: 명확하고 전문적인 톤으로 최종 이메일(최대 220단어)을 작성하십시오. 제목 줄, 미리보기 텍스트 및 본문을 포함하십시오."',
          'APE 프레임워크를 사용하면 모델이 이메일을 생성하기 전에 문제 이해와 계획을 보여주므로 초기에 불일치를 발견하기가 더 쉽습니다.',
        ],
      },
      howPQImplements: {
        title: 'PromptQuorum이 APE 프레임워크를 구현하는 방법',
        content: [
          '**PromptQuorum은 APE 프레임워크를 내장 프롬프트 구조 중 하나로 포함하는 다중 모델 AI 디스패치 도구로, 사용자가 클릭 한 번으로 분석-계획-실행 프롬프팅을 적용할 수 있습니다.** PromptQuorum에서 APE 옵션을 선택하면 애플리케이션이 목표와 컨텍스트 주위에 세 단계 구조를 자동으로 삽입합니다.',
          'PromptQuorum 내에서 APE 프레임워크는:',
        ],
        items: [
          '분석, 계획 및 실행 기대치에 대한 레이블이 지정된 섹션을 제공하여 매번 패턴을 기억할 필요가 없습니다.',
          '동일한 APE 구조화된 프롬프트를 여러 모델에 병렬로 전송하여 각 단계에서 다른 모델이 어떻게 응답하는지 비교하기 쉽습니다.',
          '코드 리뷰, 전략 메모 또는 연구 보고서와 같은 반복적인 워크플로우를 위한 템플릿으로 저장할 수 있습니다.',
        ],
      },
      choosingAPE: {
        title: 'APE vs 다른 프레임워크 선택하기',
        content: [
          '**명시적인 추론 단계를 원하지만 많은 매개변수나 섹션이 필요하지 않을 때 다른 프롬프트 프레임워크보다 APE 프레임워크를 선택해야 합니다.** APE는 의도적으로 간결합니다: 세 단계는 일반적으로 사용자를 압도하지 않고 명확성을 향상시키기에 충분합니다.',
          '실제로는:',
        ],
        items: [
          '추론이 중요한 복잡하지만 독립적인 작업에는 APE를 선택하십시오.',
          '결과 형식을 정확히 알고 있고 잘 명세된 지시만 필요할 때는 단일 단계 프레임워크를 선택하십시오.',
          '프롬프트에 인코딩해야 하는 엄격한 내부 표준이 있을 때만 더 상세한 프레임워크(많은 섹션과 매개변수가 있는)를 선택하십시오.',
        ],
        columns: ['프레임워크', '단계/섹션', '적합한 경우', '추론 가시성?'],
        rows: [
          { '프레임워크': 'APE', '단계/섹션': '3 (분석, 계획, 실행)', '적합한 경우': '검사 가능한 추론이 필요한 복잡한 작업', '추론 가시성?': '예 — 명시적 단계' },
          { '프레임워크': 'Single-Step', '단계/섹션': '1 (단일 지시)', '적합한 경우': '잘 정의된 단순한 작업', '추론 가시성?': '아니오' },
          { '프레임워크': 'CRAFT', '단계/섹션': '5 (컨텍스트, 역할, 행동, 형식, 목표)', '적합한 경우': '완전한 컨텍스트 정의', '추론 가시성?': '선택적' },
          { '프레임워크': 'CO-STAR', '단계/섹션': '6 (컨텍스트, 목표, 스타일, 톤, 대상, 응답)', '적합한 경우': '마케팅 및 커뮤니케이션', '추론 가시성?': '아니오' },
          { '프레임워크': 'SPECS', '단계/섹션': '5 (상황, 문제, 예시, 제약, 스타일)', '적합한 경우': '예시를 활용한 문제 해결', '추론 가시성?': '선택적' },
          { '프레임워크': 'Chain-of-Thought', '단계/섹션': '1 ("단계적으로 생각하세요" 포함)', '적합한 경우': '수학, 논리, 단일 단계 추론', '추론 가시성?': '예 — 하지만 구조 없음' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'info', label: '알고 계셨나요?', text: 'APE의 세 단계 구조는 전문가가 복잡한 문제를 접근하는 방식과 직접적으로 대응합니다: 문제 이해(분석), 접근 방식 설계(계획), 결과물 생성(실행). 인지 과학 연구에 따르면 이러한 분리는 인간과 AI 추론 모두에서 오류를 줄입니다.' },
        ],
      },

      automaticPromptEngineering: {
        title: 'APE는 또한 의미합니다: 자동 프롬프트 엔지니어링 (다른 개념)',
        content: [
          '"APE"는 위에 설명된 분석-계획-실행 프레임워크와는 별개의 기술인 자동 프롬프트 엔지니어링(Automatic Prompt Engineering)을 지칭하는 데도 사용됩니다. 자동 프롬프트 엔지니어링(Zhou et al., 2022)은 AI를 사용하여 프롬프트 변형을 자동으로 생성하고 점수를 매겨 수동 시행착오 없이 최적의 표현을 찾습니다. 작동 방식은 다음과 같습니다:',
        ],
        numberedItems: [
          '**작업, 성공 지표 및 초기 예시를 정의하십시오.** 예시: 작업 = \'고객 댓글의 감정 분류.\' 성공 지표 = \'20개의 레이블이 지정된 예시에서의 정확도.\' 초기 예시 = 올바른 감정 레이블이 있는 다양한 3개의 고객 메시지.',
          '**APE 도구 또는 ChatGPT를 사용하여 프롬프트 변형을 자동으로 생성하십시오.** 작업과 예시를 제공하고 묻습니다: \'이 작업을 해결할 수 있는 5가지 다른 프롬프트 변형을 생성하십시오. 지시 스타일, 예시 및 제약 조건을 다양하게 변경하십시오.\' 테스트 세트에서 각 변형을 평가하십시오.',
          '**성공 지표에서 각 변형의 점수를 매기십시오.** 보류된 예시에서 모든 변형을 실행하십시오. 정확도, 속도 및 비용을 기록하십시오. APE의 목표는 수동 시행착오 없이 최상의 프롬프트를 찾는 것입니다.',
          '**반복하십시오: 상위 2개의 변형을 선택하고, 최적화 도구에게 이들의 변형을 생성하도록 요청하십시오.** 변형 3이 정확도 85%를 달성하고 변형 5가 82%를 달성했다면, 최적화 도구에게 \'[특정 조정]을 가진 변형 3과 유사한 변형을 생성하십시오\'라고 요청하십시오. 반복적으로 개선하십시오.',
          '**강력한 프롬프트가 생기면 새로운 데이터로 테스트하여 일반화되는지 확인하십시오.** 최적화된 프롬프트가 테스트 세트에서 잘 작동했습니다 — 이제 보이지 않는 새로운 예시에서 작동하는지 확인하십시오. 성능이 떨어지면 테스트 데이터에 과적합되었을 수 있습니다.',
        ],
      },

      relatedReading: {
        title: '관련 읽기',
        items: [
          '[Chain-of-Thought 프롬프팅](/ko/prompt-engineering/chain-of-thought-prompting) — APE가 세 단계로 공식화하는 추론 기법',
          '[어떤 프롬프트 프레임워크를 사용해야 합니까?](/ko/prompt-engineering/which-prompt-framework-should-you-use) — APE vs CRAFT vs CO-STAR vs SPECS 비교',
          '[단일 단계 프롬프트 방법](/ko/prompt-engineering/the-single-step-prompt-method) — APE의 세 단계가 필요하지 않을 때',
          '[모든 프롬프트에 필요한 5가지 구성 요소](/ko/prompt-engineering/5-building-blocks-every-prompt-needs) — APE 단계가 구성하는 보편적 블록들',
          '[페르소나 프롬프팅](/ko/prompt-engineering/persona-prompting) — 도메인별 분석을 위한 APE 역할 정의와 결합하기',
          '[프롬프트 체이닝](/ko/prompt-engineering/prompt-chaining) — 단일 APE 프롬프트에 너무 복잡한 작업을 위해 여러 APE 단계 연결하기',
        ],
      },

      sources: {
        title: '출처',
        items: [
          '[White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — 구조화된 추론 패턴을 포함한 프롬프트 패턴 분류',
          '[Zhou et al. (2022). "Large Language Models Are Human-Level Prompt Engineers." arXiv:2211.01910](https://arxiv.org/abs/2211.01910) — 자동 프롬프트 엔지니어링(APE)의 원본 논문',
          '[Anthropic. "Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — 구조화된 프롬프팅 모범 사례',
          '[OpenAI. "Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs) — 단계별 추론 및 구조화된 출력 가이드',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'APE는 무엇을 의미합니까?', acceptedAnswer: { '@type': 'Answer', text: 'APE는 분석(Analyze), 계획(Plan), 실행(Execute)을 의미합니다. 복잡한 추론을 세 가지 명시적 단계로 분해하는 세 단계 프롬프트 프레임워크입니다: 문제 이해, 접근 방식 계획, 해결책 실행.' } },
        { '@type': 'Question', name: 'APE는 모델에게 단순히 답변을 요청하는 것과 어떻게 다릅니까?', acceptedAnswer: { '@type': 'Answer', text: 'APE를 사용하면 모델의 사고 과정을 볼 수 있습니다. 단일 답변 대신 모델이 작업을 어떻게 이해했는지, 어떤 계획을 선택했는지, 최종 결과물이 무엇인지 볼 수 있습니다. 이것이 오류를 더 쉽게 잡고 결과를 더 신뢰할 수 있게 만듭니다.' } },
        { '@type': 'Question', name: '단일 단계 프롬프트 방법 대신 언제 APE를 사용해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '추론이 작업에 중요할 때 APE를 사용하십시오: 기술 분석, 코드 리뷰, 전략 개발 또는 오류가 비용을 초래하는 상황. 목표가 처음부터 명확하고 주로 실행 속도가 필요할 때는 단일 단계를 사용하십시오.' } },
        { '@type': 'Question', name: 'Ollama나 LM Studio 같은 로컬 모델에 APE를 사용할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '예. APE는 모든 모델에서 작동합니다 — OpenAI, Anthropic, Google의 프론티어 모델이나 Ollama 및 LM Studio를 통한 로컬 모델. 모든 플랫폼에서 동일한 세 단계 구조가 적용됩니다.' } },
        { '@type': 'Question', name: 'APE 프롬프트는 얼마나 길어야 합니까?', acceptedAnswer: { '@type': 'Answer', text: 'APE 프롬프트는 간결하게 만들 수 있습니다. 분석, 계획, 실행을 언급하고 각 단계에서 기대하는 것을 명시하는 단일 단락으로 충분합니다. 프레임워크 자체는 길이가 아닌 구조에 관한 것입니다.' } },
        { '@type': 'Question', name: 'PromptQuorum에서 APE 프롬프트를 템플릿으로 저장할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '예. 특정 워크플로우(예: 코드 리뷰, 고객 요약)에 잘 작동하는 APE 구조화 프롬프트를 만들면 PromptQuorum에서 템플릿으로 저장하고 팀과 공유할 수 있습니다.' } },
        { '@type': 'Question', name: '작업이 APE에 너무 단순하면 어떻게 됩니까?', acceptedAnswer: { '@type': 'Answer', text: '작업이 단순하고 가시적인 추론이 필요하지 않다면 단일 단계 프롬프트 방법으로 충분할 것입니다. APE는 오버헤드를 추가합니다 — 가치는 모델의 추론을 검사하고 개선할 수 있다는 점에서 옵니다.' } },
        { '@type': 'Question', name: 'APE 프롬프트가 잘 작동하는지 어떻게 알 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '3-5개의 대표적인 예시에서 APE 프롬프트를 실행하고 확인하십시오: (1) 분석이 핵심 과제를 포착합니까? (2) 계획이 합리적이고 실행 가능합니까? (3) 실행이 계획을 따릅니까? 단계가 약하면 프롬프트를 개선하고 다시 테스트하십시오.' } },
        { '@type': 'Question', name: 'APE(분석-계획-실행)와 APE(자동 프롬프트 엔지니어링)의 차이점은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '같은 두문자어를 공유하지만 완전히 다른 기술입니다. APE(분석-계획-실행)는 직접 작성하는 수동 프롬프트 구조입니다. APE(자동 프롬프트 엔지니어링, Zhou et al. 2022)는 AI가 자동으로 프롬프트 변형을 생성하고 점수를 매겨 최적의 표현을 찾는 기술입니다. 이 문서는 두 가지를 모두 다룹니다 — 주요 프레임워크는 분석-계획-실행이며; 자동화된 프롬프트 최적화는 마지막 섹션에서 다룹니다.' } },
      ],
    },
  },
};
