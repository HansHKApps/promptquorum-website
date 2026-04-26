// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: ape-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The APE Framework',
      intro: '**The APE Framework is a simple three-step prompt structure built around Analyze, Plan, and Execute so that large language models produce clear, traceable outputs from a single instruction.** In PromptQuorum, the APE Framework is available as a ready-made option that any user can select and apply across all supported models.',
      publishDate: '2026-03-24',
      readTime: '7 min read',
      educationalLevel: 'Intermediate',
      seoTitle: 'APE Framework 2026: Analyze, Plan, Execute in 3 Steps',
      metaDescription: 'The APE prompt framework separates thinking into analysis, planning, and execution for clear, traceable LLM outputs. Works with GPT-4o, Claude, Ollama.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'The APE Framework',
        description: 'How the Analyze–Plan–Execute (APE) prompt framework works, when to use it, and how PromptQuorum offers APE as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework',
        'inLanguage': 'en',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        keywords: ['APE Framework', 'Analyze Plan Execute', 'prompt frameworks', 'prompt engineering', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
            '**The APE Framework is a prompt template that forces models like GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro to separate their thinking into analysis, planning, and execution.** Instead of getting one undifferentiated answer, you see how the model understood the problem, how it intends to solve it, and the final output. This structure improves reliability because you can inspect each stage.',
            'APE is especially useful when you are dealing with complex or high-stakes tasks. By asking the model to show its reasoning path explicitly, you reduce the chance that hidden assumptions or shortcuts stay invisible. Even when you run local models through tools such as [Ollama](/local-llms/ollama-installation-guide) or LM Studio, the same three-part pattern keeps results consistent.',
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
        },
        howToWrite: {
          title: 'How to Write an APE Prompt',
          content: [
            '**An effective APE prompt mentions the three stages by name and specifies what you expect in each part: analysis notes, a step-by-step plan, and a final output.** You can do this in a compact way so that it still counts as a single prompt.',
            'A generic pattern is:',
            '"You are [role]. First, **Analyze** the task by listing the key goals, constraints, and missing information. Then, **Plan** your approach in 3–5 bullet points. Finally, **Execute** by producing [desired output format], strictly following your plan."',
            'You can then customize this base pattern with domain details such as audience, tone, file structure, or citation requirements. Once defined, you can reuse the same APE prompt across multiple tasks by changing only the objective and context.',
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
            'Sends the same APE-structured prompt to multiple models in parallel, making it easy to compare how GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and local models respond at each stage.',
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
        },

        howToStart: {
          title: 'How to Use the APE (Automatic Prompt Optimization) Framework',
          numberedItems: [
            '**Define your task, success metric, and a few seed examples.** Example: Task = \'classify customer feedback sentiment.\' Success metric = \'accuracy on 20 labeled examples.\' Seed examples = 3 diverse customer messages with correct sentiment labels.',
            '**Use an APE tool or ChatGPT to automatically generate prompt variants.** Provide your task and examples, and ask: \'Generate 5 different prompt variations that might solve this task. Vary instruction style, examples, and constraints.\' Evaluate each variant on your test set.',
            '**Score each variant on your success metric.** Run all variants on your held-out examples. Record accuracy, speed, cost. APE\'s goal is to find the best prompt without manual trial-and-error.',
            '**Iterate: pick the top 2 variants, ask the optimizer to generate mutations of those.** If variant 3 scored 85% accuracy and variant 5 scored 82%, ask the optimizer to \'generate variations similar to variant 3 but with [specific tweak].\' Refine iteratively.',
            '**Once you have a strong prompt, test it on fresh data to confirm it generalizes.** Your optimized prompt scored well on your test set—now verify it works on new, unseen examples. If performance drops, you may have overfit to your test data.',
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
          { '@type': 'Question', name: 'Can I use APE with local models like Ollama or LM Studio?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. APE works with any model—GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, or local models via Ollama and LM Studio. The same three-step structure applies across all platforms.' } },
          { '@type': 'Question', name: 'How long does an APE prompt need to be?', acceptedAnswer: { '@type': 'Answer', text: 'APE prompts can be compact. A single paragraph that mentions Analyze, Plan, and Execute and specifies what you expect in each stage is sufficient. The framework itself is about structure, not length.' } },
          { '@type': 'Question', name: 'Can I save APE prompts as templates in PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Once you create an APE-structured prompt that works well for a particular workflow (e.g., code reviews, customer summaries), you can save it as a template in PromptQuorum and share it with your team.' } },
          { '@type': 'Question', name: 'What if my task is too simple for APE?', acceptedAnswer: { '@type': 'Answer', text: 'If your task is straightforward and doesn\'t require visible reasoning, the Single Step Prompt Method is probably sufficient. APE adds overhead—the value comes from being able to inspect and refine the model\'s reasoning.' } },
          { '@type': 'Question', name: 'How do I know if an APE prompt is working well?', acceptedAnswer: { '@type': 'Answer', text: 'Run your APE prompt on 3–5 representative examples and check: (1) Does the analysis capture the core challenge? (2) Is the plan reasonable and actionable? (3) Does the execution follow the plan? If any step is weak, refine the prompt and test again.' } },
        ],
      },
    },
    de: {
      theme: 'Frameworks',
      title: 'The APE Framework',
      intro: '', 
      publishDate: '2026-03-24', 
      readTime: '7 min read', 
      educationalLevel: 'Intermediate',
      seoTitle: 'APE-Framework: Analyse, Plan, Ausführung 2026',
      metaDescription: 'Das APE-Prompt-Framework trennt das Denken in Analyse, Planung und Ausführung für klare, nachverfolgbare LLM-Ausgaben. Funktioniert mit GPT-4o, Claude, Ollama.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=de',
        'inLanguage': 'de',
        headline: 'The APE Framework',
        description: 'Das APE-Prompt-Framework trennt das Denken in Analyse, Planung und Ausführung für klare, nachverfolgbare LLM-Ausgaben.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['APE-Framework', 'Analyze Plan Execute', 'Prompt-Frameworks', 'Prompt-Engineering', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {} 
    },
    fr: { 
      theme: 'Frameworks', 
      title: 'The APE Framework', 
      intro: '', 
      publishDate: '2026-03-24', 
      readTime: '7 min read', 
      educationalLevel: 'Intermediate',
      seoTitle: 'Framework APE : Analyse, Plan, Exécution 2026',
      metaDescription: 'Le framework de prompt APE sépare la réflexion en analyse, planification et exécution pour des résultats LLM clairs et traçables. Compatible GPT-4o, Claude, Ollama.',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=fr',
        'inLanguage': 'fr',
        headline: 'The APE Framework',
        description: 'Le framework de prompt APE sépare la réflexion en analyse, planification et exécution pour des résultats LLM clairs et traçables.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['Framework APE', 'Analyze Plan Execute', 'Frameworks de prompt', 'Prompt Engineering', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {} 
    },
    ja: { 
      theme: 'Frameworks', 
      title: 'The APE Framework', 
      intro: '', 
      publishDate: '2026-03-24', 
      readTime: '7 min read', 
      educationalLevel: 'Intermediate',
      seoTitle: 'APEフレームワーク：分析・計画・実行 2026',
      metaDescription: 'APEプロンプトフレームワークは思考を分析・計画・実行に分離。GPT-4o、Claude、Ollama対応。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=ja',
        'inLanguage': 'ja',
        headline: 'The APE Framework',
        description: 'APEプロンプトフレームワークは思考を分析・計画・実行に分離。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['APEフレームワーク', 'Analyze Plan Execute', 'プロンプトフレームワーク', 'プロンプトエンジニアリング', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {} 
    },
    zh: { 
      theme: 'Frameworks', 
      title: 'The APE Framework', 
      intro: '', 
      publishDate: '2026-03-24', 
      readTime: '7 min read', 
      educationalLevel: 'Intermediate',
      seoTitle: 'APE框架：分析·规划·执行 2026',
      metaDescription: 'APE提示框架将思维分为分析、规划和执行阶段。与GPT-4o、Claude、Ollama兼容。',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/ape-framework?lang=zh',
        'inLanguage': 'zh',
        headline: 'The APE Framework',
        description: 'APE提示框架将思维分为分析、规划和执行阶段。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        keywords: ['APE框架', 'Analyze Plan Execute', '提示框架', '提示工程', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      },
      sections: {} 
    },
  };
