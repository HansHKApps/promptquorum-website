// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: co-star-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'CO-STAR Prompt Framework: Context, Objective, Style 2026',
      metaDescription: 'CO-STAR Framework breaks prompts into Context, Objective, Style, Tone, Audience, Response. Works with GPT-4o, Claude, Gemini, and local LLMs.',
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
        dateModified: '2026-03-24',
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
          { '@type': 'SoftwareApplication', name: 'GPT-4o', url: 'https://openai.com' },
          { '@type': 'SoftwareApplication', name: 'Claude 4.6 Sonnet', url: 'https://www.anthropic.com' },
          { '@type': 'SoftwareApplication', name: 'Gemini 2.5 Pro', url: 'https://deepmind.google' },
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
            'name': 'When should I use the CO-STAR Framework?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Use CO-STAR for complex tasks requiring nuance: content creation, analysis, design briefs, or any task where context, style, and audience matter. For simple questions, simpler frameworks work better.' }
          },
          {
            '@type': 'Question',
            'name': 'Does CO-STAR work with all LLMs?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. CO-STAR works with GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and local models like Ollama. Larger models handle nuance better, but all LLMs benefit from structured CO-STAR prompts.' }
          },
          {
            '@type': 'Question',
            'name': 'How long should a CO-STAR prompt be?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR prompts typically range from 100–500 words depending on task complexity. Aim for clarity and completeness; longer is better than vague. In PromptQuorum, you can save CO-STAR templates for reuse.' }
          }
        ]
      },
      sections: {
        whatIsCOSTAR: {
          title: 'What the CO-STAR Framework Is',
          content: [
            '**The CO-STAR Framework is a prompt engineering pattern for complex instructions where you need models to understand not just what to do, but how, for whom, and in which style.** Instead of writing a single vague sentence, you break your prompt into explicit CO-STAR components so that GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and other models receive a complete brief.',
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
            'Fill out CO-STAR fields for a task and dispatch the resulting prompt to multiple models such as GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, and compatible local models.',
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

        howToStart: {
          title: 'How to Use the CO-STAR Framework',
          numberedItems: [
            '**Context: Provide relevant background information the model needs to understand your task.** Example: \'You are reviewing a pull request for a React component library. The project enforces TypeScript strict mode, immutable state, and functional components only.\'',
            '**Objective: State what you want the model to do in one sentence.** Example: \'Review this code for type safety and functional programming violations.\'',
            '**Style: Specify tone and format.** Example: \'Be direct and critical. Return feedback as a bulleted list. Use technical language.\'',
            '**Task: Describe the actual task with specific inputs and outputs.** Example: \'Analyze this React component. Flag any type errors, mutable state, or class component patterns. Return: list of issues + severity level (critical/warning/info) + suggested fix.\'',
            '**Augment with examples: Show one good example (code that passes review) and one bad example (code with violations).** This teaches the model what you\'re looking for.',
            '**Response format: State exactly how you want output structured.** Example: \'Return as JSON: { issues: [...], summary: string, confidence: high|medium|low }.\'',
          ],
        },
      },
    },
    de: {
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'CO-STAR-Framework: Kontext, Ziel, Stil & Tone 2026',
      metaDescription: 'CO-STAR-Framework zerlegt komplexe Prompts: Kontext, Ziel, Stil, Ton, Zielgruppe, Response. Mit GPT-4o, Claude und Gemini. PromptQuorum-unterstützt.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=de',
        'inLanguage': 'de',
        headline: 'CO-STAR-Framework: Kontext, Ziel, Stil & Tone 2026',
        description: 'Das CO-STAR-Framework zerlegt komplexe Prompts in Kontext, Ziel, Stil, Ton, Zielgruppe und Response. Nutze es mit GPT-4o, Claude und Gemini. PromptQuorum-unterstützt.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
      },
      sections: {}
    },
    fr: {
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'Framework CO-STAR: Contexte, Objectif, Style 2026',
      metaDescription: 'Framework CO-STAR divise les prompts: Contexte, Objectif, Style, Ton, Audience, Réponse. Utilisez avec GPT-4o, Claude et Gemini. Support PromptQuorum.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=fr',
        'inLanguage': 'fr',
        headline: 'Framework CO-STAR: Contexte, Objectif, Style 2026',
        description: 'Le framework CO-STAR divise les prompts complexes en Contexte, Objectif, Style, Ton, Audience et Réponse. Utilisez avec GPT-4o, Claude et Gemini. Support PromptQuorum.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
      },
      sections: {}
    },
    ja: {
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'CO-STARフレームワーク：背景、目的、スタイル、トーン 2026',
      metaDescription: 'CO-STARフレームワークで複雑なプロンプトを構造化。コンテキスト、目的、スタイル、トーン、対象者に分割します。GPT-4o、Claude対応。',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=ja',
        'inLanguage': 'ja',
        headline: 'CO-STARフレームワーク: コンテキスト、目的、スタイル 2026',
        description: 'CO-STARフレームワークは複雑なプロンプトを：コンテキスト、目的、スタイル、トーン、対象者、レスポンスに分割します。GPT-4o、Claude、Geminiで使用可能。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
      },
      sections: {}
    },
    zh: {
      theme: 'Frameworks',
      title: 'The CO-STAR Framework',
      seoTitle: 'CO-STAR框架：背景、目标、风格、语调、受众、回应 2026',
      metaDescription: 'CO-STAR框架将复杂提示分解为背景、目标、风格、语调、受众、回应。适用于GPT-4o、Claude和Gemini。',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=zh',
        'inLanguage': 'zh',
        headline: 'CO-STAR框架: 背景、目标、风格 2026',
        description: 'CO-STAR框架将复杂提示分解为：背景、目标、风格、语调、受众、回应。适用于GPT-4o、Claude和Gemini。PromptQuorum支持。',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
      },
      sections: {}
    },
  };
