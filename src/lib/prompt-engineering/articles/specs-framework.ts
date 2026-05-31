// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: specs-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    theme: 'Frameworks',
    title: 'The SPECS Framework',
    intro: 'The SPECS Framework is a prompt structure that turns vague requests into precise specifications so that large language models produce predictable, parseable outputs. In PromptQuorum, the SPECS Framework is available as a built-in option that any user can select and apply directly in the app.',
    publishDate: '2026-03-24',
    readTime: '8 min read',
    seoTitle: 'SPECS Framework 2026: Style, Purpose, Examples',
    metaDescription: 'SPECS: Style, Purpose, Examples, Context, Specificity. Detailed prompt structure. Guide and best practices for outputs.',
    educationalLevel: 'Intermediate',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'The SPECS Framework',
      description: 'How the SPECS Framework (Scope, Purpose, Examples, Constraints, Steps) works, when to use it, and how PromptQuorum offers SPECS as a built-in option.',
      datePublished: '2026-03-24',
      dateModified: '2026-03-24',
      keywords: ['SPECS Framework', 'Scope Purpose Examples Constraints Steps', 'prompt frameworks', 'prompt engineering', 'structured prompts', 'PromptQuorum'],
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
        { '@type': 'SoftwareApplication', name: 'Claude Opus 4.7', url: 'https://www.anthropic.com' },
        { '@type': 'SoftwareApplication', name: 'Gemini 3.1 Pro', url: 'https://deepmind.google' },
      ],
    },
    sections: {
      whatIsSPECS: {
        title: 'What the SPECS Framework Is',
        content: [
          '**The SPECS Framework is a specification-first prompt pattern that treats every prompt like a mini requirements document instead of a casual chat message.** It is designed for tasks where accuracy, structure, and repeatability matter more than open-ended creativity. SPECS works well with models such as GPT-4o, Claude Opus 4.7, Gemini 3.1 Pro, and local models, because it removes ambiguity from your instructions.',
          'SPECS is especially useful when different people or systems must run the same prompt and get consistent results. By turning the prompt into a clear specification, you make it easier to debug issues, compare model behavior, and enforce standards across your workflows.',
        ],
      },
      fiveComponents: {
        title: 'The Five SPECS Components',
        content: [
          '**A strong SPECS prompt defines all five components so that the model knows exactly what to do, why, and how to format the answer.** Each component focuses on a different part of the instruction.',
          'Typical definitions are:',
        ],
        items: [
          'Scope: What the task covers and what it explicitly does not cover.',
          'Purpose: The underlying goal or decision the output should support.',
          'Examples: One or more sample inputs and outputs to anchor the model.',
          'Constraints: Hard rules such as length limits, formats, or banned behaviors.',
          'Steps: The internal sequence the model should follow to reach the output.',
        ],
      },
      whySPECSIsUseful: {
        title: 'Why the SPECS Framework Is Useful',
        content: [
          '**The SPECS Framework is useful for analytical, operational, and integration tasks where you need machine-usable results, not just readable prose.** It reduces hidden assumptions and makes every part of the prompt explicit, which is essential for production workflows.',
          'Common benefits include:',
        ],
        items: [
          'Easier debugging, because you can adjust or test individual components of the specification.',
          'More stable outputs across models and runs, thanks to constraints and examples.',
          'Better fit for downstream processing, since the structure is known in advance.',
        ],
      },
      badVsGoodExample: {
        title: 'Example: Bad vs Good SPECS Prompt',
        content: [
          '**The difference between an unstructured request and a SPECS-based request becomes obvious when you look at the same task written both ways.** Here is an example for extracting information from text.',
          '**[Bad Prompt]**',
          '"Read this customer email and summarize the main points."',
          '**[Good Prompt]**',
          '"Scope: Analyze a single customer support email and extract key information relevant to our support team. Ignore marketing or sales opportunities. Purpose: Produce a structured summary that can be logged in our ticketing system and used by agents to respond faster. Examples: Input: \'I tried to reset my password twice today and the link expired both times…\' Output: {\"issue_type\": \"password_reset\", \"urgency\": \"medium\", \"summary\": \"Password reset link expires before user can complete reset\"} Constraints: Output must be valid JSON with the keys `issue_type`, `urgency`, and `summary`. Do not add extra fields. `urgency` must be one of: low, medium, high. Steps: 1) Identify the main issue, 2) infer urgency based on impact and frustration, 3) write a concise summary under 25 words."',
          'The SPECS version defines exactly what the model should output, how it should think, and how the result will be used.',
        ],
      },
      whenToUse: {
        title: 'When to Use the SPECS Framework',
        content: [
          '**You should use the SPECS Framework when your primary goal is structured, reliable output rather than exploratory brainstorming.** This often includes:',
        ],
        items: [
          'Data extraction from emails, chats, or documents into fixed schemas.',
          'Code transformation, documentation generation, and refactoring with strict rules.',
          'Report generation where section headings, metrics, and formats are predefined.',
          'Any workflow where AI output feeds directly into another system or script.',
        ],
      },
      howPQImplements: {
        title: 'How PromptQuorum Implements the SPECS Framework',
        content: [
          '**PromptQuorum is a multi-model AI dispatch tool that offers the SPECS Framework as one of its built-in prompt structures so users can design specification-style prompts without building them from scratch.** When you choose SPECS in PromptQuorum, the app exposes dedicated fields for Scope, Purpose, Examples, Constraints, and Steps and then assembles them into a single, well-structured instruction.',
          'Within PromptQuorum, the SPECS Framework lets you:',
        ],
        items: [
          'Capture each component in a separate field so the specification stays readable and easy to edit.',
          'Apply the same SPECS-based prompt to multiple models in parallel, making it easy to compare how different vendors handle strict formats.',
          'Save and share SPECS templates for recurring workflows such as ticket summaries, report generation, or code reviews.',
        ],
      },
      usingSpecsWithOthers: {
        title: 'Using SPECS with Other Frameworks',
        content: [
          '**You should position the SPECS Framework as the backbone for structured outputs and combine it with other frameworks for complementary tasks.** A practical pattern is:',
        ],
        items: [
          'Use SPECS for anything that must produce predictable structures or feed into tools.',
          'Use creative frameworks like CRAFT for marketing and copywriting.',
          'Use reasoning-oriented frameworks like Analyze–Plan–Execute (APE) when you want visible intermediate reasoning.',
          'Use single-step general frameworks for quick tasks that don\'t justify a full specification.',
        ],
      },
      howToStart: {
        title: 'How to Use the SPECS Framework',
        numberedItems: [
          '**Setting: Provide context about the environment, system, or domain.** Example: \'You are a data analyst at a healthcare company. Patient privacy is critical. All queries must comply with HIPAA.\'',
          '**Problem statement: State the specific problem you\'re solving.** Example: \'Identify which patient cohorts show low medication adherence in the last 90 days.\'',
          '**Examples: Provide 2–3 concrete examples of good output.** For analysis, show a sample output table or findings. For code generation, show working code that matches your style.',
          '**Constraints: List hard rules and preferences.** Example: \'Use only SQL (no Python). Query must run in under 5 seconds. Output must be anonymized (no patient names).\'',
          '**Style: Specify tone, language, and format preferences.** Example: \'Technical audience. Use precise terminology. Return as a markdown report.\'',
        ],
      },
    },
  },
};
