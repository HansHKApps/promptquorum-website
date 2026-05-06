// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: ape-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'evergreen',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=en',
        'inLanguage': 'en',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        keywords: ['APE Framework', 'Analyze Plan Execute', 'prompt frameworks', 'prompt engineering', 'structured reasoning', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
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
      freshness_tier: 'evergreen',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=de',
        'inLanguage': 'de',
        headline: 'APE-Framework: Analyse, Plan, Ausführung — Strukturierte Prompts mit sichtbarem Denken',
        description: 'Das APE-Framework teilt jeden AI-Prompt in Analyse, Planung und Ausführung auf, um das Denken des Modells sichtbar und überprüfbar zu machen.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['APE-Framework', 'Analyze Plan Execute', 'Prompt-Frameworks', 'Prompt-Engineering', 'strukturiertes Denken'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        faqSection: {
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
    fr: {
      freshness_tier: 'evergreen',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=fr',
        'inLanguage': 'fr',
        headline: 'Framework APE : Analyse, Plan, Exécution — Prompts Structurés avec Raisonnement Visible',
        description: 'Le framework APE divise chaque prompt IA en analyse, planification et exécution pour rendre visible et vérifiable le raisonnement du modèle.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['Framework APE', 'Analyze Plan Execute', 'Frameworks de prompt', 'Prompt Engineering', 'raisonnement structuré'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        faqSection: {
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
      freshness_tier: 'evergreen',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=ja',
        'inLanguage': 'ja',
        headline: 'APEフレームワーク：分析・計画・実行 — 思考プロセスが見える構造化プロンプト',
        description: 'APEフレームワークはAIプロンプトを分析、計画、実行の3段階に分割し、モデルの思考プロセスを可視化・検証可能にします。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['APEフレームワーク', 'Analyze Plan Execute', 'プロンプトフレームワーク', 'プロンプトエンジニアリング', '構造化推論'],
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        faqSection: {
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
      freshness_tier: 'evergreen',
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
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=zh',
        'inLanguage': 'zh',
        headline: 'APE框架：分析·规划·执行 — 让思维过程可见的结构化提示',
        description: 'APE框架将每个AI提示分为分析、规划和执行三个阶段，让模型的思维过程可见且可检查。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['APE框架', 'Analyze Plan Execute', '提示框架', '提示工程', '结构化推理'],
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {
        faqSection: {
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
  };
