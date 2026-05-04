// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: co-star-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'CO-STAR Prompt Framework: Context, Objective, Style, Tone, Audience, Response — Complete Guide',
      seoTitle: 'CO-STAR Framework: 6-Component Prompt Structure for Complex Tasks',
      metaDescription: 'CO-STAR structures every AI prompt into 6 components: Context, Objective, Style, Tone, Audience, Response. Template, examples, and comparison to CRAFT, SPECS, and APE frameworks.',
      intro: 'The CO-STAR Framework is a structured prompt format that helps you design clear, multi-step instructions for complex tasks by defining Context, Objective, Style, Tone, Audience, and Response in one coherent message. In PromptQuorum, the CO-STAR Framework is available as a built-in option that any user can select and apply across all supported models.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'CO-STAR Prompt Framework',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework',
        'inLanguage': 'en',
        headline: 'The CO-STAR Framework',
        description: 'How the CO-STAR Framework (Context, Objective, Style, Tone, Audience, Response) works, when to use it, and how PromptQuorum offers CO-STAR as a built-in option.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['CO-STAR Framework', 'Context Objective Style Tone Audience Response', 'prompt frameworks', 'prompt engineering', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Prompt Frameworks' },
          { '@type': 'Thing', name: 'Large Language Models' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
          { '@type': 'SoftwareApplication', name: 'Ollama', url: 'https://ollama.ai' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'en',
        'name': 'Use the CO-STAR Framework',
        'step': [
          { '@type': 'HowToStep', 'name': 'Define Context', 'text': 'Start with background information and relevant facts the model needs to understand the task.' },
          { '@type': 'HowToStep', 'name': 'State Objective', 'text': 'Clearly define the single main goal of the task. Be specific about what success looks like.' },
          { '@type': 'HowToStep', 'name': 'Specify Style', 'text': 'Describe structural or rhetorical preferences (e.g., "step-by-step explanation", "bullet points").' },
          { '@type': 'HowToStep', 'name': 'Set Tone', 'text': 'Define the emotional flavor or voice (e.g., "formal", "friendly", "direct", "technical").' },
          { '@type': 'HowToStep', 'name': 'Identify Audience', 'text': 'Describe who will read or use the output. This helps the model calibrate complexity and language.' },
          { '@type': 'HowToStep', 'name': 'Specify Response Format', 'text': 'State exactly how you want the output structured (JSON, markdown, plain text, etc.).' }
        ]
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What does CO-STAR stand for?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. Each letter represents one component of a structured AI prompt. Together, the six components give the model a complete brief — equivalent to what a human writer would need to produce the right output on the first attempt.' }
          },
          {
            '@type': 'Question',
            'name': 'When should I use CO-STAR instead of a simpler prompt?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Use CO-STAR when multiple dimensions matter at once — when the output needs a specific structure AND tone AND must be calibrated for a particular audience. If you only need a factual answer or a simple format, a shorter prompt or single-step approach is sufficient. CO-STAR shines on documentation, customer-facing content, onboarding materials, and multi-stakeholder communications.' }
          },
          {
            '@type': 'Question',
            'name': 'How is CO-STAR different from CRAFT?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Both are structured prompt frameworks but with different emphases. CO-STAR (Context, Objective, Style, Tone, Audience, Response) focuses on communication dimensions — who reads it, how it should feel. CRAFT (Context, Role, Action, Format, Target) focuses on task execution — what role the model plays and what action it takes. CO-STAR is better for audience-centric content; CRAFT is better for role-defined tasks.' }
          },
          {
            '@type': 'Question',
            'name': 'How is CO-STAR different from SPECS?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'SPECS (Situation, Problem, Examples, Constraints, Style) is problem-solving oriented — it starts from a problem and works toward a solution. CO-STAR is communication-oriented — it starts from an audience and works toward the right message. Use SPECS for analytical and problem-solving tasks; use CO-STAR for content creation and communication tasks.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I use CO-STAR with local models via Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. CO-STAR is a prompt-level technique — it works with any model that follows instructions. Local models respond to the same six-component structure. Smaller models may handle fewer constraints simultaneously, so prioritize the most important 3-4 components if you\'re using a model under 7B parameters.' }
          },
          {
            '@type': 'Question',
            'name': 'Do I need all six CO-STAR components in every prompt?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Context and Objective are essential. Style, Tone, Audience, and Response improve quality but can be omitted for simple tasks. Start with Context + Objective + Response as the minimum viable CO-STAR prompt, then add Style, Tone, and Audience when the output needs calibration.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I combine CO-STAR with Chain-of-Thought or APE?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. CO-STAR defines WHAT the model should produce and HOW it should feel. Chain-of-Thought or APE define how the model should THINK. You can use CO-STAR for the brief and add "Think step by step before producing the final response" as an additional instruction. The frameworks are complementary, not competing.' }
          }
        ]
      },
      sections: {
        whatIsCOSTAR: {
          title: 'What the CO-STAR Framework Is',
          content: [
            '**The CO-STAR Framework is a prompt engineering pattern for complex instructions where you need models to understand not just what to do, but how, for whom, and in which style.** Instead of writing a single vague sentence, you break your prompt into explicit CO-STAR components so that all large language models receive a complete brief.',
            'The acronym typically expands as:',
          ],
          items: [
            'Context: Background information and relevant facts.',
            'Objective: The single main goal of the task.',
            'Style: Structural or rhetorical preferences (for example "step-by-step explanation").',
            'Tone: The emotional flavor or voice (for example "formal," "friendly," "direct").',
            'Audience: Who will read or use the output.',
            'Response: The exact output format you expect.',
          ],
        },
        whyCOSTARWorks: {
          title: 'Why the CO-STAR Framework Works',
          content: [
            '**The CO-STAR Framework works because it mirrors how humans write good briefs: it makes the model aware of context, goal, and audience before it starts generating.** When these elements are explicit, the model does not have to infer them from a short, ambiguous instruction.',
            'This leads to several practical benefits:',
          ],
          items: [
            'Higher consistency across runs, because the same structure is reused.',
            'Easier collaboration, since the prompt reads like a shared specification.',
            'Better cross-model comparability, because all providers see the same breakdown.',
          ],
        },
        components: {
          title: 'The CO-STAR Components in Detail',
          content: [
            '**A strong CO-STAR prompt includes all six components, each written as a short, clear instruction or sentence.** You can format them as labeled lines or as a structured paragraph; the important part is that each component is easy to spot and edit.',
            'Typical component descriptions:',
          ],
          items: [
            'Context: What the task is about, what has already happened, and any constraints or data sources.',
            'Objective: One concise statement of what success looks like.',
            'Style: Whether you want a narrative, a list, a step-by-step guide, or another structure.',
            'Tone: Whether the voice should be formal, neutral, conversational, or something else.',
            'Audience: The specific group you are targeting, including their role and knowledge level.',
            'Response: The required format, such as headings, bullets, length limit, or JSON fields.',
          ],
        },
        badVsGoodExample: {
          title: 'Example: Bad vs Good CO-STAR Prompt',
          content: [
            '**The value of the CO-STAR Framework becomes clear when you compare an unstructured prompt with a CO-STAR-based prompt for the same task.** Here is an example for a technical explainer.',
            '**[Bad Prompt]**',
            '"Explain APIs to our customers."',
            '**[Good Prompt]**',
            '"Context: We offer a SaaS platform and are adding an API so customers can integrate our product with their internal tools. Many of them are non-technical business users. Objective: Explain what an API is and why it matters for our product, in a way that reduces fear and encourages adoption. Style: Use short sections with H2 headings and bullet points for key ideas. Include a simple real-world analogy. Tone: Clear, reassuring, and non-technical. Avoid jargon where possible and explain any necessary technical terms. Audience: Business users and managers with no programming background. Response: 700–900 word article with an intro, 3–4 main sections, and a short conclusion that invites them to talk to their account manager."',
            'The CO-STAR version defines every important dimension explicitly, making it much more likely that the model produces something your customers can actually use.',
          ],
        },
        whenToUse: {
          title: 'When to Use the CO-STAR Framework',
          content: [
            '**You should use the CO-STAR Framework when you are dealing with multi-constraint tasks where audience, structure, and tone all matter at the same time.** This includes many common workflows in product, marketing, customer success, and education.',
            'Typical use cases:',
          ],
          items: [
            'Writing product documentation or onboarding guides.',
            'Creating educational articles or explainers for non-expert audiences.',
            'Drafting structured internal memos, strategy notes, or policy documents.',
            'Preparing support macros or help-center content that must be consistent in tone.',
          ],
        },
        howToWrite: {
          title: 'How to Write a CO-STAR Prompt in Practice',
          content: [
            '**Writing a CO-STAR prompt is straightforward if you think of it as filling out six lines of a brief, then sending them together as one instruction.** You can store this pattern and reuse it for different tasks by changing only the details.',
            'A generic template looks like this:',
          ],
          items: [
            'Context: [What is happening, what this is about, relevant background.]',
            'Objective: [Single primary goal for this prompt.]',
            'Style: [Preferred structure, such as bullets, narrative, or step-by-step.]',
            'Tone: [Voice and emotional feel you want.]',
            'Audience: [Who will read this and what they know.]',
            'Response: [Exact format, length, and any special requirements.]',
          ],
        },
        howPQImplements: {
          title: 'How PromptQuorum Implements the CO-STAR Framework',
          content: [
            '**PromptQuorum is a multi-model AI dispatch tool that includes the CO-STAR Framework as one of its built-in prompt options so users can apply Context–Objective–Style–Tone–Audience–Response prompting without memorizing the pattern.** When you select the CO-STAR Framework in PromptQuorum, the app provides dedicated input fields for each component and automatically assembles them into a single structured prompt.',
            'Inside PromptQuorum, you can:',
          ],
          items: [
            'Fill out CO-STAR fields for a task and dispatch the resulting prompt to multiple large language models, including both proprietary and open-source options.',
            'Save CO-STAR prompts as templates for recurring workflows, such as documentation updates, feature announcements, or quarterly summaries.',
            'Share these templates with your team so that everyone uses the same structure, even if they are new to prompt engineering.',
          ],
        },
        usingCOSTARWithOthers: {
          title: 'Using CO-STAR Alongside Other Frameworks',
          content: [
            '**You should position the CO-STAR Framework alongside other prompt frameworks by assigning each one a clear role in your workflow.** CO-STAR excels at multi-constraint communication tasks where audience and structure are both important.',
            'A simple strategy is:',
          ],
          items: [
            'Use CO-STAR for structured explanations, guides, and communication pieces.',
            'Use CRAFT when you are focused on pure marketing and brand voice for specific channels.',
            'Use Single Step or specification-style frameworks for tightly formatted outputs such as reports or JSON.',
            'Use reasoning-oriented frameworks like Analyze–Plan–Execute when you want the model to expose its intermediate thinking.',
          ],
        },

        keyTakeaways: {
          title: 'Key Takeaways',
          isTldr: true,
          content: [
            '**CO-STAR** = Context, Objective, Style, Tone, Audience, Response — six labeled components that eliminate guesswork from AI prompts',
            'CO-STAR is strongest for **multi-constraint communication tasks** where audience, structure, and tone all matter simultaneously',
            'The framework mirrors how humans write good briefs: make context, goal, and audience explicit before the model starts generating',
            'CO-STAR prompts are portable across all language models — cloud APIs and local models',
            'Use CO-STAR for documentation, onboarding guides, explainers, internal memos, and help-center content',
            'For pure reasoning tasks, use APE or Chain-of-Thought instead. For simple single-output tasks, use Single-Step.',
          ],
        },

        quickFacts: {
          title: 'Quick Facts',
          items: [
            '**CO-STAR =** Context, Objective, Style, Tone, Audience, Response',
            '**Best for:** Multi-constraint communication tasks (documentation, explainers, onboarding, memos)',
            '**Components:** 6 — more than APE (3), comparable to CRAFT (5) and SPECS (5)',
            '**Minimum viable:** Context + Objective + Response (3 of 6)',
            '**Key strength:** Audience and Tone awareness — CO-STAR is the most audience-centric framework',
            '**Works on:** All language models — cloud and local',
          ],
        },

        frameworkComparison: {
          title: 'CO-STAR vs Other Prompt Frameworks',
          columns: ['Framework', 'Components', 'Focus', 'Best For'],
          rows: [
            { 'Framework': 'CO-STAR', 'Components': '6 (Context, Objective, Style, Tone, Audience, Response)', 'Focus': 'Audience-centric communication', 'Best For': 'Documentation, explainers, customer content' },
            { 'Framework': 'CRAFT', 'Components': '5 (Context, Role, Action, Format, Target)', 'Focus': 'Role-defined task execution', 'Best For': 'Marketing, channel-specific content' },
            { 'Framework': 'SPECS', 'Components': '5 (Situation, Problem, Examples, Constraints, Style)', 'Focus': 'Problem-solving with examples', 'Best For': 'Analytical tasks, troubleshooting' },
            { 'Framework': 'APE', 'Components': '3 (Analyze, Plan, Execute)', 'Focus': 'Visible reasoning', 'Best For': 'Complex analysis, strategy, code review' },
            { 'Framework': 'RTF', 'Components': '3 (Role, Task, Format)', 'Focus': 'Minimal structure', 'Best For': 'Quick tasks, simple outputs' },
            { 'Framework': 'Single-Step', 'Components': '1 (one instruction)', 'Focus': 'Speed', 'Best For': 'Well-defined, simple tasks' },
          ],
        },

        commonMistakes: {
          title: 'Common Mistakes With the CO-STAR Framework',
          numberedItems: [
            '**Writing Context as a single vague sentence.** Why it hurts: "We\'re a SaaS company" tells the model almost nothing. It doesn\'t know your product, your customers, or the situation. Fix: Include specific background: what product, what problem, what\'s already happened, what data is available.',
            '**Confusing Style and Tone.** Why it hurts: Style = structure (bullets, headings, step-by-step). Tone = voice (formal, friendly, urgent). Mixing them produces prompts where neither is clear. Fix: Style answers "what does it look like?" Tone answers "how does it sound?" Keep them in separate lines.',
            '**Skipping Audience for internal documents.** Why it hurts: "Internal" is not an audience. A memo for engineers reads differently from a memo for the CFO. Without specifying who reads it, the model defaults to generic mid-level prose. Fix: Name the reader\'s role, knowledge level, and what they\'ll do with the output.',
            '**Making Response too vague ("a document").** Why it hurts: The model chooses its own length, structure, and format — which changes every run. Fix: Specify format (bullets, headings, JSON), length (word count or section count), and any structural requirements (intro, conclusion, CTA).',
          ],
        },

        expandedFAQ: {
          title: 'Frequently Asked Questions',
          faqs: [
            {
              q: 'What does CO-STAR stand for?',
              a: 'CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. Each letter represents one component of a structured AI prompt. Together, the six components give the model a complete brief — equivalent to what a human writer would need to produce the right output on the first attempt.'
            },
            {
              q: 'When should I use CO-STAR instead of a simpler prompt?',
              a: 'Use CO-STAR when multiple dimensions matter at once — when the output needs a specific structure AND tone AND must be calibrated for a particular audience. If you only need a factual answer or a simple format, a shorter prompt or single-step approach is sufficient. CO-STAR shines on documentation, customer-facing content, onboarding materials, and multi-stakeholder communications.'
            },
            {
              q: 'How is CO-STAR different from CRAFT?',
              a: 'Both are structured prompt frameworks but with different emphases. CO-STAR (Context, Objective, Style, Tone, Audience, Response) focuses on communication dimensions — who reads it, how it should feel. CRAFT (Context, Role, Action, Format, Target) focuses on task execution — what role the model plays and what action it takes. CO-STAR is better for audience-centric content; CRAFT is better for role-defined tasks.'
            },
            {
              q: 'How is CO-STAR different from SPECS?',
              a: 'SPECS (Situation, Problem, Examples, Constraints, Style) is problem-solving oriented — it starts from a problem and works toward a solution. CO-STAR is communication-oriented — it starts from an audience and works toward the right message. Use SPECS for analytical and problem-solving tasks; use CO-STAR for content creation and communication tasks.'
            },
            {
              q: 'Can I use CO-STAR with local models via Ollama?',
              a: 'Yes. CO-STAR is a prompt-level technique — it works with any model that follows instructions. Local models respond to the same six-component structure. Smaller models may handle fewer constraints simultaneously, so prioritize the most important 3-4 components if you\'re using a model under 7B parameters.'
            },
            {
              q: 'Do I need all six CO-STAR components in every prompt?',
              a: 'No. Context and Objective are essential. Style, Tone, Audience, and Response improve quality but can be omitted for simple tasks. Start with Context + Objective + Response as the minimum viable CO-STAR prompt, then add Style, Tone, and Audience when the output needs calibration.'
            },
            {
              q: 'Can I combine CO-STAR with Chain-of-Thought or APE?',
              a: 'Yes. CO-STAR defines WHAT the model should produce and HOW it should feel. Chain-of-Thought or APE define how the model should THINK. You can use CO-STAR for the brief and add "Think step by step before producing the final response" as an additional instruction. The frameworks are complementary, not competing.'
            },
          ],
        },

        sources: {
          title: 'Sources',
          items: [
            '[White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — prompt pattern taxonomy including structured communication patterns',
            '[Anthropic. "Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — structured prompting best practices applicable to CO-STAR',
            '[OpenAI. "Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs/guides/prompt-engineering) — role, context, and format specification guidance',
            '[Google. "Gemini API: Prompting Strategies." ai.google.dev](https://ai.google.dev) — structured prompt strategies',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Which Prompt Framework Should You Use?](/prompt-engineering/which-prompt-framework-should-you-use) — CO-STAR vs CRAFT vs SPECS vs APE comparison',
            '[CRAFT Framework](/prompt-engineering/craft-framework) — role-focused alternative to CO-STAR',
            '[SPECS Framework](/prompt-engineering/specs-framework) — problem-solving alternative to CO-STAR',
            '[APE Framework](/prompt-engineering/ape-framework) — reasoning-focused framework (Analyze, Plan, Execute)',
            '[5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — the universal building blocks CO-STAR organizes',
            '[Persona Prompting](/prompt-engineering/persona-prompting) — deep dive into the role/audience dimension CO-STAR touches',
          ],
        },

        howToStart: {
          title: 'How to Use the CO-STAR Framework',
          numberedItems: [
            '**Context:** Provide relevant background information the model needs. Example: "We offer a SaaS platform adding an API. Many customers are non-technical business users."',
            '**Objective:** State what you want in one sentence. Example: "Explain what an API is and why it matters, in a way that reduces fear and encourages adoption."',
            '**Style:** Specify the structure. Example: "Use short sections with H2 headings and bullet points. Include a simple real-world analogy."',
            '**Tone:** Define the voice and emotional register. Example: "Clear, reassuring, and non-technical. Avoid jargon; explain necessary technical terms."',
            '**Audience:** Name who will read the output and their knowledge level. Example: "Business users and managers with no programming background."',
            '**Response:** State the exact format, length, and deliverable. Example: "700-900 word article with intro, 3-4 main sections, and a conclusion inviting them to contact their account manager."',
          ],
        },
      },
    },
    de: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'CO-STAR-Framework: Kontext, Ziel, Stil & Ton',
      metaDescription: 'CO-STAR-Framework zerlegt komplexe Prompts: Kontext, Ziel, Stil, Ton, Zielgruppe, Response. Mit allen großen Sprachmodellen. PromptQuorum-unterstützt.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=de',
        'inLanguage': 'de',
        headline: 'CO-STAR-Framework: Kontext, Ziel, Stil & Ton',
        description: 'Das CO-STAR-Framework zerlegt komplexe Prompts in Kontext, Ziel, Stil, Ton, Zielgruppe und Response. Mit allen großen Sprachmodellen. PromptQuorum-unterstützt.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
      },
      sections: {}
    },
    fr: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'Framework CO-STAR: Contexte, Objectif, Style, Ton',
      metaDescription: 'Framework CO-STAR divise les prompts: Contexte, Objectif, Style, Ton, Audience, Réponse. Fonctionne avec tous les modèles de langage. Support PromptQuorum.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=fr',
        'inLanguage': 'fr',
        headline: 'Framework CO-STAR: Contexte, Objectif, Style, Ton',
        description: 'Le framework CO-STAR divise les prompts complexes en Contexte, Objectif, Style, Ton, Audience et Réponse. Fonctionne avec tous les modèles de langage. Support PromptQuorum.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
      },
      sections: {}
    },
    ja: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'CO-STARフレームワーク：背景、目的、スタイル、トーン',
      metaDescription: 'CO-STARフレームワークで複雑なプロンプトを構造化。コンテキスト、目的、スタイル、トーン、対象者に分割します。すべての大規模言語モデルに対応。',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=ja',
        'inLanguage': 'ja',
        headline: 'CO-STARフレームワーク: コンテキスト、目的、スタイル、トーン',
        description: 'CO-STARフレームワークは複雑なプロンプトを：コンテキスト、目的、スタイル、トーン、対象者、レスポンスに分割します。すべての大規模言語モデルで使用可能。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
      },
      sections: {}
    },
    zh: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'CO-STAR框架：背景、目标、风格、语调、受众、回应',
      metaDescription: 'CO-STAR框架将复杂提示分解为背景、目标、风格、语调、受众、回应。适用于所有大型语言模型。',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=zh',
        'inLanguage': 'zh',
        headline: 'CO-STAR框架: 背景、目标、风格、语调、受众',
        description: 'CO-STAR框架将复杂提示分解为：背景、目标、风格、语调、受众、回应。适用于所有大型语言模型。PromptQuorum支持。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
      },
      sections: {}
    },
  };
