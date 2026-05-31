// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: co-star-framework
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
    en: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'CO-STAR Prompt Framework: Context, Objective, Style, Tone, Audience, Response — Complete Guide',
      seoTitle: 'CO-STAR Framework: Structure Complex Prompts in 6 Steps',
      metaDescription: 'CO-STAR\'s 6 fields give you control over every output variable: voice, tone, audience, format. Full templates and a comparison table vs CRAFT, RISEN.',
      ogDescription: 'CO-STAR: 6-component prompt framework. Master voice and tone control.',
      twitterDescription: 'CO-STAR: Context, Objective, Style, Tone, Audience, Response. Control every aspect of AI output quality and voice.',
      intro: 'The CO-STAR Framework is a structured prompt format that helps you design clear, multi-step instructions for complex tasks by defining Context, Objective, Style, Tone, Audience, and Response in one coherent message. In PromptQuorum, the CO-STAR Framework is available as a built-in option that any user can select and apply across all supported models.',
      publishDate: '2026-03-24',
      readTime: '8 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: 'CO-STAR Prompt Framework',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/prompt-engineering/co-star-framework?lang=en',
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
          },
          {
            '@type': 'Question',
            'name': 'What does CO-STAR stand for in prompt engineering?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. These six components work together to give an AI model a complete brief. Context provides background, Objective states the goal, Style defines structure, Tone sets the voice, Audience clarifies who will read it, and Response specifies the exact format needed.' }
          },
          {
            '@type': 'Question',
            'name': 'How do you use the CO-STAR method to write a prompt?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Fill out each of the six CO-STAR fields: write the context, state your objective, specify the style (bullets, narrative, steps), choose the tone (formal, casual, technical), identify the audience, and define the response format. You can format them as labeled lines or structured text. Send all six components together as one prompt to the AI model.' }
          },
          {
            '@type': 'Question',
            'name': 'What are the best alternatives to the CO-STAR framework?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Top alternatives include RTF (Role, Task, Format—simpler, 3 components), CRAFT (Context, Role, Action, Format, Target—task-focused), SPECS (Situation, Problem, Examples, Constraints, Style—problem-solving), and TRACE (Task, Requirements, Actions, Context, Examples—reasoning-oriented). Choose based on your task type and complexity needs.' }
          },
          {
            '@type': 'Question',
            'name': 'How does CO-STAR compare to RISEN, CRAFT, and other prompt frameworks?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR (6 components, audience-centric) is for communication-heavy tasks. CRAFT (5 components, role-focused) is for task execution. RISEN emphasizes role and goals. SPECS focuses on problem-solving with constraints. TRACE adds reasoning transparency. CO-STAR excels when audience, tone, and style matter equally; other frameworks shine for different task profiles.' }
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
      title: 'CO-STAR-Prompt-Framework: Kontext, Ziel, Stil, Ton, Zielgruppe, Response — Vollständiger Leitfaden',
      seoTitle: 'CO-STAR-Framework: Strukturierte KI-Prompts in 6 Schritten',
      metaDescription: 'Lernen Sie CO-STAR (Kontext, Ziel, Stil, Ton, Zielgruppe, Response) — ein 6-Komponenten-Framework für klare KI-Prompts. Vergleich mit CRAFT, SPECS, APE.',
      intro: 'Das CO-STAR-Framework ist ein strukturiertes Prompt-Format, das Ihnen hilft, klare, mehrstufige Anweisungen für komplexe Aufgaben zu entwerfen, indem Sie Kontext, Ziel, Stil, Ton, Zielgruppe und Response in einer kohärenten Botschaft definieren. In PromptQuorum ist das CO-STAR-Framework als integrierte Option verfügbar, die jeder Benutzer auswählen und auf alle unterstützten Modelle anwenden kann.',
      publishDate: '2026-03-24',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'CO-STAR-Framework',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/de/prompt-engineering/co-star-framework',
        'inLanguage': 'de',
        headline: 'CO-STAR-Framework: Kontext, Ziel, Stil, Ton, Zielgruppe, Response',
        description: 'Das CO-STAR-Framework strukturiert komplexe Prompts in 6 Komponenten: Kontext, Ziel, Stil, Ton, Zielgruppe und Response. Wie es funktioniert, wann man es einsetzt, und wie PromptQuorum es als integrierte Option anbietet.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['CO-STAR-Framework', 'Prompt-Engineering', 'KI-Prompts', 'Prompt-Struktur', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt-Engineering' },
          { '@type': 'Thing', name: 'Prompt-Frameworks' },
          { '@type': 'Thing', name: 'Große Sprachmodelle' },
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
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'de',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Was bedeutet CO-STAR?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR steht für Context (Kontext), Objective (Ziel), Style (Stil), Tone (Ton), Audience (Zielgruppe) und Response (Antwort). Jeder Buchstabe repräsentiert eine Komponente eines strukturierten KI-Prompts. Zusammen bilden die sechs Komponenten ein vollständiges Briefing — entsprechend dem, was ein menschlicher Autor benötigen würde, um beim ersten Versuch die richtige Ausgabe zu produzieren.' }
          },
          {
            '@type': 'Question',
            'name': 'Wann sollte ich das CO-STAR-Framework verwenden?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Verwenden Sie CO-STAR, wenn mehrere Dimensionen gleichzeitig wichtig sind — wenn die Ausgabe eine bestimmte Struktur UND einen bestimmten Ton UND muss für ein bestimmtes Publikum kalibriert sein. Wenn Sie nur eine sachliche Antwort oder ein einfaches Format benötigen, ist ein kürzerer Prompt oder ein Single-Step-Ansatz ausreichend. CO-STAR glänzt bei Dokumentation, kundenorientiertem Inhalt, Onboarding-Materialien und Mehrfach-Stakeholder-Kommunikation.' }
          },
          {
            '@type': 'Question',
            'name': 'Wie unterscheidet sich CO-STAR von CRAFT?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Beide sind strukturierte Prompt-Frameworks, aber mit unterschiedlichen Schwerpunkten. CO-STAR (Context, Objective, Style, Tone, Audience, Response) konzentriert sich auf Kommunikationsdimensionen — wer liest es, wie sollte es sich anfühlen. CRAFT (Context, Role, Action, Format, Target) konzentriert sich auf Aufgabenausführung — welche Rolle das Modell spielt und welche Aktion es ergreift. CO-STAR ist besser für zielgruppenorientierte Inhalte; CRAFT ist besser für rollendefinierten Aufgaben.' }
          },
          {
            '@type': 'Question',
            'name': 'Wie unterscheidet sich CO-STAR von SPECS?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'SPECS (Situation, Problem, Examples, Constraints, Style) ist problemlösungsorientiert — es geht von einem Problem aus und arbeitet auf eine Lösung hin. CO-STAR ist kommunikationsorientiert — es geht von einer Zielgruppe aus und arbeitet auf die richtige Botschaft hin. Verwenden Sie SPECS für analytische und problemlösende Aufgaben; verwenden Sie CO-STAR für Content-Erstellung und Kommunikationsaufgaben.' }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich CO-STAR mit lokalen Modellen über Ollama verwenden?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. CO-STAR ist eine Prompt-Ebenen-Technik — sie funktioniert mit jedem Modell, das Anweisungen befolgt. Lokale Modelle reagieren auf die gleiche sechsteilige Struktur. Kleinere Modelle können möglicherweise weniger Einschränkungen gleichzeitig bewältigen, daher priorisieren Sie die wichtigsten 3–4 Komponenten, wenn Sie ein Modell unter 7B-Parametern verwenden.' }
          },
          {
            '@type': 'Question',
            'name': 'Benötige ich alle sechs CO-STAR-Komponenten in jedem Prompt?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Nein. Kontext und Ziel sind essentiell. Stil, Ton, Zielgruppe und Response verbessern die Qualität, können aber bei einfachen Aufgaben weggelassen werden. Beginnen Sie mit Context + Objective + Response als minimal lebensfähigen CO-STAR-Prompt, dann fügen Sie Stil, Ton und Zielgruppe hinzu, wenn die Ausgabe Kalibrierung benötigt.' }
          },
          {
            '@type': 'Question',
            'name': 'Kann ich CO-STAR mit Chain-of-Thought oder APE kombinieren?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. CO-STAR definiert WAS das Modell produzieren soll und WIE es sich anfühlen soll. Chain-of-Thought oder APE definieren, wie das Modell DENKEN soll. Sie können CO-STAR für das Briefing verwenden und „Denken Sie Schritt für Schritt, bevor Sie die endgültige Antwort erstellen" als zusätzliche Anweisung hinzufügen. Die Frameworks ergänzen sich gegenseitig, sind nicht konkurrierend.' }
          },
          {
            '@type': 'Question',
            'name': 'Ist das CO-STAR-Framework DSGVO-konform?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Das CO-STAR-Framework selbst ist ein Prompt-Engineering-Konzept und unterliegt nicht direkt der DSGVO. Wenn Sie jedoch mit lokalen Modellen (wie Ollama) oder selbstgehosteten KI-Systemen arbeiten, können Sie sicherstellen, dass personenbezogene Daten lokal verbleiben. Dies erfüllt DSGVO-Anforderungen an Datenresidenz und -verarbeitung. BSI-Grundschutz-Kataloge empfehlen für sensitive Daten die Verwendung von lokalen Inferenzbasis-Systemen, die CO-STAR unterstützt.' }
          },
          {
            '@type': 'Question',
            'name': 'Ist das CO-STAR-Framework für den deutschen Mittelstand geeignet?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja, besonders für den Mittelstand. Viele mittelständische Unternehmen in Deutschland, Österreich und der Schweiz nutzen CO-STAR für interne Dokumentation, Kundenkommunikation und Team-Workflows. Das Framework passt zu bestehenden IT-Sicherheitsstandards (BSI-Grundschutz) und ermöglicht es KMUs, KI-Prompts strukturiert und zuverlässig zu verwenden, ohne externe Abhängigkeiten. PromptQuorum bietet CO-STAR als integrierte Option, die mit lokalen Alternativen kompatibel ist.' }
          },
        ]
      },
      sections: {
        wasIstCOSTAR: {
          title: 'Was das CO-STAR-Framework ist',
          content: [
            '**Das CO-STAR-Framework ist ein Prompt-Engineering-Muster für komplexe Anweisungen, bei denen Modelle nicht nur verstehen sollen, was zu tun ist, sondern wie, für wen und in welchem Stil.** Anstatt einen einzelnen vagen Satz zu schreiben, zerlegen Sie Ihren Prompt in explizite CO-STAR-Komponenten, damit alle großen Sprachmodelle ein vollständiges Briefing erhalten.',
            'Das Akronym wird typischerweise wie folgt erweitert:',
          ],
          items: [
            'C — Context (Kontext): Hintergrundsinformationen und relevante Fakten.',
            'O — Objective (Ziel): Das einzelne Hauptziel der Aufgabe.',
            'S — Style (Stil): Strukturelle oder rhetorische Vorlieben (zum Beispiel „Schritt-für-Schritt-Erklärung").',
            'T — Tone (Ton): Der emotionale Charakter oder die Stimme (zum Beispiel „formal", „freundlich", „direkt").',
            'A — Audience (Zielgruppe): Wer wird die Ausgabe lesen oder verwenden.',
            'R — Response (Antwort): Das genaue Ausgabeformat, das Sie erwarten.',
          ],
        },
        warumCOSTARWirkt: {
          title: 'Warum das CO-STAR-Framework funktioniert',
          content: [
            '**Das CO-STAR-Framework funktioniert, weil es widerspiegelt, wie Menschen gute Briefe schreiben: Es macht das Modell auf Kontext, Ziel und Publikum aufmerksam, bevor es mit der Generierung beginnt.** Wenn diese Elemente explizit sind, muss das Modell sie nicht aus einer kurzen, mehrdeutigen Anweisung ableiten.',
            'Dies führt zu mehreren praktischen Vorteilen:',
          ],
          items: [
            'Höhere Konsistenz über Läufe hinweg, da die gleiche Struktur wiederverwendet wird.',
            'Einfachere Zusammenarbeit, da der Prompt wie eine gemeinsame Spezifikation lesbar ist.',
            'Bessere Cross-Model-Vergleichbarkeit, da alle Anbieter die gleiche Aufschlüsselung sehen.',
          ],
        },
        komponenten: {
          title: 'Die CO-STAR-Komponenten im Detail',
          content: [
            '**Ein starker CO-STAR-Prompt umfasst alle sechs Komponenten, jeweils als kurze, klare Anweisung oder Satz geschrieben.** Sie können sie als beschriftete Zeilen oder als strukturierten Absatz formatieren; das Wichtigste ist, dass jede Komponente leicht zu erkennen und zu bearbeiten ist.',
            'Typische Komponentenbeschreibungen:',
          ],
          items: [
            'Context: Was es geht, was bereits geschehen ist und alle Einschränkungen oder Datenquellen.',
            'Objective: Eine prägnante Aussage über das Erfolgsaussehen.',
            'Style: Ob Sie eine Erzählung, eine Liste, eine Schritt-für-Schritt-Anleitung oder eine andere Struktur möchten.',
            'Tone: Ob die Stimme formal, neutral, gesprächig oder etwas anderes sein sollte.',
            'Audience: Die spezifische Gruppe, die Sie anstreben, einschließlich ihrer Rolle und ihres Wissensstandes.',
            'Response: Das erforderliche Format, z. B. Überschriften, Aufzählungszeichen, Längenbegrenzung oder JSON-Felder.',
          ],
        },
        schlechtesVsGutesBeispiel: {
          title: 'Beispiel: Schlechter vs. Guter CO-STAR-Prompt',
          content: [
            '**Der Wert des CO-STAR-Frameworks wird deutlich, wenn Sie einen unstrukturierten Prompt mit einem CO-STAR-basierten Prompt für die gleiche Aufgabe vergleichen.** Hier ist ein Beispiel für eine technische Erklärung.',
            '**[Schlechter Prompt]**',
            '"Erklären Sie APIs unseren Kunden."',
            '**[Guter Prompt]**',
            '"Context: Wir bieten eine SaaS-Plattform und fügen eine API hinzu, damit Kunden unser Produkt in ihre internen Tools integrieren können. Viele von ihnen sind nicht-technische Geschäftsbenutzer. Objective: Erklären Sie, was eine API ist und warum sie für unser Produkt wichtig ist, auf eine Weise, die Angst reduziert und Einführung fördert. Style: Verwenden Sie kurze Abschnitte mit H2-Überschriften und Aufzählungszeichen für Schlüsselideen. Fügen Sie eine einfache reale Analogie ein. Tone: Klar, beruhigend und nicht technisch. Vermeiden Sie Jargon, wo möglich, und erklären Sie alle notwendigen technischen Begriffe. Audience: Geschäftsbenutzer und Manager ohne Programmierhintergrund. Response: 700–900 Wort-Artikel mit Intro, 3–4 Hauptabschnitten und kurzer Zusammenfassung, die sie einlädt, mit ihrem Account Manager zu sprechen."',
            'Die CO-STAR-Version definiert jede wichtige Dimension explizit und macht es viel wahrscheinlicher, dass das Modell etwas produziert, das Ihre Kunden tatsächlich verwenden können.',
          ],
        },
        wann: {
          title: 'Wann sollte man das CO-STAR-Framework verwenden',
          content: [
            '**Sie sollten das CO-STAR-Framework verwenden, wenn Sie mit Multi-Constraint-Aufgaben umgehen, bei denen Zielgruppe, Struktur und Ton gleichzeitig wichtig sind.** Dies umfasst viele allgemeine Workflows in Produkt, Marketing, Kundenerfolg und Bildung.',
            'Typische Anwendungsfälle:',
          ],
          items: [
            'Schreiben von Produktdokumentation oder Onboarding-Leitfäden.',
            'Erstellen von Bildungsartikeln oder Erklärungen für Nicht-Expert-Publika.',
            'Verfassen von strukturierten internen Memos, Strategienotizen oder Richtliniendokumenten.',
            'Vorbereitung von Support-Makros oder Help-Center-Inhalten, die einen konsistenten Ton aufrechterhalten müssen.',
          ],
        },
        wieMan: {
          title: 'Wie man einen CO-STAR-Prompt praktisch schreibt',
          content: [
            '**Das Schreiben eines CO-STAR-Prompts ist unkompliziert, wenn Sie es sich als Ausfüllen von sechs Zeilen eines Briefings vorstellen, das Sie zusammen als eine Anweisung senden.** Sie können dieses Muster speichern und durch Ändern nur der Details für verschiedene Aufgaben wiederverwenden.',
            'Eine generische Vorlage sieht so aus:',
          ],
          items: [
            'Context: [Was passiert, worum geht es, relevanter Hintergrund.]',
            'Objective: [Einzelnes Hauptziel für diesen Prompt.]',
            'Style: [Bevorzugte Struktur, z. B. Aufzählungszeichen, Erzählung oder Schritt-für-Schritt.]',
            'Tone: [Stimme und emotionales Gefühl, das Sie möchten.]',
            'Audience: [Wer wird dies lesen und was wissen sie.]',
            'Response: [Genaues Format, Länge und spezielle Anforderungen.]',
          ],
        },
        wiePQImplementiert: {
          title: 'Wie PromptQuorum das CO-STAR-Framework implementiert',
          content: [
            '**PromptQuorum ist ein Multi-Model-KI-Dispatch-Tool, das das CO-STAR-Framework als integrierte Prompt-Option enthält, damit Benutzer Context-Objective-Style-Tone-Audience-Response-Prompting anwenden können, ohne das Muster auswendig zu lernen.** Wenn Sie das CO-STAR-Framework in PromptQuorum auswählen, bietet die App dedizierte Eingabefelder für jede Komponente und stellt sie automatisch in einen einzigen strukturierten Prompt zusammen.',
            'In PromptQuorum können Sie:',
          ],
          items: [
            'Füllen Sie CO-STAR-Felder für eine Aufgabe aus und leiten Sie den resultierenden Prompt an mehrere große Sprachmodelle weiter, einschließlich proprietärer und Open-Source-Optionen.',
            'Speichern Sie CO-STAR-Prompts als Vorlagen für wiederkehrende Workflows, z. B. Dokumentationsaktualisierungen, Feature-Ankündigungen oder vierteljährliche Zusammenfassungen.',
            'Teilen Sie diese Vorlagen mit Ihrem Team, damit alle die gleiche Struktur verwenden, auch wenn sie neu im Prompt-Engineering sind.',
          ],
        },
        zusammenMitAnderen: {
          title: 'Verwendung von CO-STAR zusammen mit anderen Frameworks',
          content: [
            '**Sie sollten das CO-STAR-Framework neben anderen Prompt-Frameworks positionieren, indem Sie jedem eine klare Rolle in Ihrem Workflow zuweisen.** CO-STAR zeichnet sich bei Multi-Constraint-Kommunikationsaufgaben aus, bei denen Zielgruppe und Struktur beide wichtig sind.',
            'Eine einfache Strategie ist:',
          ],
          items: [
            'Verwenden Sie CO-STAR für strukturierte Erklärungen, Leitfäden und Kommunikationsstücke.',
            'Verwenden Sie CRAFT, wenn Sie sich auf reine Marketingsprache und Markenstimme für spezifische Kanäle konzentrieren.',
            'Verwenden Sie Single Step oder Specification-Style-Frameworks für eng formatierte Ausgaben wie Berichte oder JSON.',
            'Verwenden Sie Reasoning-Frameworks wie Analyze-Plan-Execute, wenn das Modell sein Zwischendenken offenlegen soll.',
          ],
        },
        schluesselErkenntnisse: {
          title: 'Schlüsselerkentnisse',
          isTldr: true,
          content: [
            '**CO-STAR** = C — Context (Kontext), O — Objective (Ziel), S — Style (Stil), T — Tone (Ton), A — Audience (Zielgruppe), R — Response (Antwort) — sechs beschriftete Komponenten, die Vermutungen aus KI-Prompts eliminieren',
            'CO-STAR ist am stärksten für **Multi-Constraint-Kommunikationsaufgaben**, bei denen Zielgruppe, Struktur und Ton gleichzeitig wichtig sind',
            'Das Framework spiegelt wider, wie Menschen gute Briefe schreiben: Kontext, Ziel und Publikum vor der Modellgenerierung explizit machen',
            'CO-STAR-Prompts sind tragbar über alle Sprachmodelle — Cloud-APIs und lokale Modelle',
            'Verwenden Sie CO-STAR für Dokumentation, Onboarding-Leitfäden, Erklärungen, interne Memos und Help-Center-Inhalte',
            'Für reine Reasoning-Aufgaben verwenden Sie APE oder Chain-of-Thought. Für einfache Single-Output-Aufgaben verwenden Sie Single-Step.',
          ],
        },
        schnelleFakten: {
          title: 'Schnelle Fakten',
          items: [
            '**CO-STAR =** C — Context (Kontext), O — Objective (Ziel), S — Style (Stil), T — Tone (Ton), A — Audience (Zielgruppe), R — Response (Antwort)',
            '**Best für:** Multi-Constraint-Kommunikationsaufgaben (Dokumentation, Erklärungen, Onboarding, Memos)',
            '**Komponenten:** 6 — mehr als APE (3), vergleichbar mit CRAFT (5) und SPECS (5)',
            '**Minimal lebensfähig:** Context + Objective + Response (3 von 6)',
            '**Kernstärke:** Zielgruppen- und Ton-Bewusstsein — CO-STAR ist das zielgruppenzentrierteste Framework',
            '**Funktioniert auf:** Alle Sprachmodelle — Cloud und lokal',
          ],
        },
        frameworkVergleich: {
          title: 'CO-STAR vs. andere Prompt-Frameworks',
          columns: ['Framework', 'Komponenten', 'Fokus', 'Am besten für'],
          rows: [
            { 'Framework': 'CO-STAR', 'Komponenten': '6 (Context, Objective, Style, Tone, Audience, Response)', 'Fokus': 'Zielgruppenorientierte Kommunikation', 'Am besten für': 'Dokumentation, Erklärungen, Kundeninhalt' },
            { 'Framework': 'CRAFT', 'Komponenten': '5 (Context, Role, Action, Format, Target)', 'Fokus': 'Rollendefinierte Aufgabenausführung', 'Am besten für': 'Marketing, kanalspezifische Inhalte' },
            { 'Framework': 'SPECS', 'Komponenten': '5 (Situation, Problem, Examples, Constraints, Style)', 'Fokus': 'Problemlösung mit Beispielen', 'Am besten für': 'Analytische Aufgaben, Fehlerbehebung' },
            { 'Framework': 'APE', 'Komponenten': '3 (Analyze, Plan, Execute)', 'Fokus': 'Sichtbares Reasoning', 'Am besten für': 'Komplexe Analyse, Strategie, Code-Review' },
            { 'Framework': 'RTF', 'Komponenten': '3 (Role, Task, Format)', 'Fokus': 'Minimale Struktur', 'Am besten für': 'Schnelle Aufgaben, einfache Ausgaben' },
            { 'Framework': 'Single-Step', 'Komponenten': '1 (eine Anweisung)', 'Fokus': 'Geschwindigkeit', 'Am besten für': 'Wohldefinierte, einfache Aufgaben' },
          ],
        },
        haeufigeFehler: {
          title: 'Häufige Fehler mit dem CO-STAR-Framework',
          numberedItems: [
            '**Context als einen einzelnen vagen Satz schreiben.** Warum es schadet: "Wir sind ein SaaS-Unternehmen" sagt dem Modell fast nichts. Es kennt Ihr Produkt, Ihre Kunden oder die Situation nicht. Reparieren: Spezifischen Hintergrund einbeziehen: Was Produkt, welches Problem, was bereits geschehen ist, welche Daten verfügbar sind.',
            '**Style und Tone verwechseln.** Warum es schadet: Style = Struktur (Aufzählungszeichen, Überschriften, Schritt-für-Schritt). Tone = Stimme (formal, freundlich, dringend). Diese zu mischen führt zu Prompts, bei denen keines klar ist. Reparieren: Style beantwortet "wie sieht es aus?" Tone beantwortet "wie klingt es?" Halten Sie sie in separaten Zeilen.',
            '**Audience bei internen Dokumenten überspringen.** Warum es schadet: "Intern" ist keine Zielgruppe. Ein Memo für Ingenieure liest sich anders als ein Memo für den CFO. Ohne Angabe, wer es liest, verfällt das Modell zu generischer Mid-Level-Prosa. Reparieren: Nennen Sie die Rolle des Lesers, sein Wissensniveau und was er mit der Ausgabe tun wird.',
            '**Response zu vage machen ("ein Dokument").** Warum es schadet: Das Modell wählt seine eigene Länge, Struktur und Format — was bei jedem Durchlauf ändert. Reparieren: Format (Aufzählungszeichen, Überschriften, JSON), Länge (Wortanzahl oder Abschnittsanzahl) und alle strukturellen Anforderungen (Intro, Schluss, CTA) angeben.',
          ],
        },
        erweitertesFAQ: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            {
              q: 'Was bedeutet CO-STAR?',
              a: 'CO-STAR steht für Context (Kontext), Objective (Ziel), Style (Stil), Tone (Ton), Audience (Zielgruppe) und Response (Antwort). Jeder Buchstabe repräsentiert eine Komponente eines strukturierten KI-Prompts. Zusammen bilden die sechs Komponenten ein vollständiges Briefing — entsprechend dem, was ein menschlicher Autor benötigen würde, um beim ersten Versuch die richtige Ausgabe zu produzieren.'
            },
            {
              q: 'Wann sollte ich CO-STAR anstelle eines einfacheren Prompts verwenden?',
              a: 'Verwenden Sie CO-STAR, wenn mehrere Dimensionen gleichzeitig wichtig sind — wenn die Ausgabe eine bestimmte Struktur UND einen bestimmten Ton UND eine Kalibrierung für ein bestimmtes Publikum benötigt. Wenn Sie nur eine sachliche Antwort oder ein einfaches Format benötigen, ist ein kürzerer Prompt oder Single-Step-Ansatz ausreichend. CO-STAR glänzt bei Dokumentation, kundenorientiertem Inhalt, Onboarding-Materialien und Multi-Stakeholder-Kommunikation.'
            },
            {
              q: 'Wie unterscheidet sich CO-STAR von CRAFT?',
              a: 'Beide sind strukturierte Prompt-Frameworks, aber mit unterschiedlichen Schwerpunkten. CO-STAR (Context, Objective, Style, Tone, Audience, Response) konzentriert sich auf Kommunikationsdimensionen — wer liest es, wie sollte es sich anfühlen. CRAFT (Context, Role, Action, Format, Target) konzentriert sich auf Aufgabenausführung — welche Rolle das Modell spielt und welche Aktion es ergreift. CO-STAR ist besser für zielgruppenorientierte Inhalte; CRAFT ist besser für rollendefinierte Aufgaben.'
            },
            {
              q: 'Wie unterscheidet sich CO-STAR von SPECS?',
              a: 'SPECS (Situation, Problem, Examples, Constraints, Style) ist problemlösungsorientiert — es geht von einem Problem aus und arbeitet auf eine Lösung hin. CO-STAR ist kommunikationsorientiert — es geht von einer Zielgruppe aus und arbeitet auf die richtige Botschaft hin. Verwenden Sie SPECS für analytische und problemlösende Aufgaben; verwenden Sie CO-STAR für Content-Erstellung und Kommunikationsaufgaben.'
            },
            {
              q: 'Kann ich CO-STAR mit lokalen Modellen über Ollama verwenden?',
              a: 'Ja. CO-STAR ist eine Prompt-Ebenen-Technik — sie funktioniert mit jedem Modell, das Anweisungen befolgt. Lokale Modelle reagieren auf die gleiche sechsteilige Struktur. Kleinere Modelle können möglicherweise weniger Einschränkungen gleichzeitig bewältigen, daher priorisieren Sie die wichtigsten 3–4 Komponenten, wenn Sie ein Modell unter 7B-Parametern verwenden.'
            },
            {
              q: 'Benötige ich alle sechs CO-STAR-Komponenten in jedem Prompt?',
              a: 'Nein. Context und Objective sind essentiell. Stil, Ton, Zielgruppe und Response verbessern die Qualität, können aber bei einfachen Aufgaben weggelassen werden. Beginnen Sie mit Context + Objective + Response als minimal lebensfähigen CO-STAR-Prompt, dann fügen Sie Stil, Ton und Zielgruppe hinzu, wenn die Ausgabe Kalibrierung benötigt.'
            },
            {
              q: 'Kann ich CO-STAR mit Chain-of-Thought oder APE kombinieren?',
              a: 'Ja. CO-STAR definiert WAS das Modell produzieren soll und WIE es sich anfühlen soll. Chain-of-Thought oder APE definieren, wie das Modell DENKEN soll. Sie können CO-STAR für das Briefing verwenden und „Denken Sie Schritt für Schritt, bevor Sie die endgültige Antwort erstellen" als zusätzliche Anweisung hinzufügen. Die Frameworks ergänzen sich gegenseitig, sind nicht konkurrierend.'
            },
            {
              q: 'Ist das CO-STAR-Framework DSGVO-konform?',
              a: 'Das CO-STAR-Framework selbst ist ein Prompt-Engineering-Konzept und unterliegt nicht direkt der DSGVO. Wenn Sie jedoch mit lokalen Modellen (wie Ollama) oder selbstgehosteten KI-Systemen arbeiten, können Sie sicherstellen, dass personenbezogene Daten lokal verbleiben. Dies erfüllt DSGVO-Anforderungen an Datenresidenz und -verarbeitung. BSI-Grundschutz-Kataloge empfehlen für sensitive Daten die Verwendung von lokalen Inferenzbasis-Systemen, die CO-STAR unterstützt.'
            },
            {
              q: 'Ist das CO-STAR-Framework für den deutschen Mittelstand geeignet?',
              a: 'Ja, besonders für den Mittelstand. Viele mittelständische Unternehmen in Deutschland, Österreich und der Schweiz nutzen CO-STAR für interne Dokumentation, Kundenkommunikation und Team-Workflows. Das Framework passt zu bestehenden IT-Sicherheitsstandards (BSI-Grundschutz) und ermöglicht es KMUs, KI-Prompts strukturiert und zuverlässig zu verwenden, ohne externe Abhängigkeiten. PromptQuorum bietet CO-STAR als integrierte Option, die mit lokalen Alternativen kompatibel ist.'
            },
          ],
        },
        quellen: {
          title: 'Quellen',
          items: [
            '[White et al. (2023). „A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — Taxonomie von Prompt-Mustern, einschließlich strukturierter Kommunikationsmuster',
            '[Anthropic. „Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — Best Practices für strukturierte Prompting, anwendbar auf CO-STAR',
            '[OpenAI. „Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs/guides/prompt-engineering) — Anleitung zu Rolle, Kontext und Format-Spezifikation',
            '[Google. „Gemini API: Prompting Strategies." ai.google.dev](https://ai.google.dev) — Strategien für strukturierte Prompts',
          ],
        },
        weitereLektuere: {
          title: 'Weiterführende Literatur',
          items: [
            '[Welches Prompt-Framework sollten Sie verwenden?](/de/prompt-engineering/which-prompt-framework-should-you-use) — Vergleich CO-STAR vs CRAFT vs SPECS vs APE',
            '[CRAFT-Framework](/de/prompt-engineering/craft-framework) — Rollenorientierte Alternative zu CO-STAR',
            '[SPECS-Framework](/de/prompt-engineering/specs-framework) — Problemlösungsorientierte Alternative zu CO-STAR',
            '[APE-Framework](/de/prompt-engineering/ape-framework) — Reasoning-fokussiertes Framework (Analyze, Plan, Execute)',
            '[5 Bausteine, die jeder Prompt benötigt](/de/prompt-engineering/5-building-blocks-every-prompt-needs) — Die universellen Bausteine, die CO-STAR organisiert',
            '[Persona-Prompting](/de/prompt-engineering/persona-prompting) — Tiefgang in die Rollen-/Zielgruppendimension, die CO-STAR berührt',
          ],
        },
        wieManSieAnwendet: {
          title: 'Wie man das CO-STAR-Framework anwendet',
          numberedItems: [
            '**Context:** Bieten Sie relevante Hintergrundsinformationen, die das Modell benötigt. Beispiel: „Überprüfen Sie einen Pull-Request für eine React-Komponentenbibliothek. Das Projekt erzwingt TypeScript-Strikethrough-Modus, unveränderliche Zustand und nur funktionale Komponenten."',
            '**Objective:** Sagen Sie in einem Satz, was Sie möchten. Beispiel: „Überprüfen Sie diesen Code auf Typsicherheit und Verstöße gegen funktionale Programmierung."',
            '**Style:** Spezifizieren Sie Ton und Format. Beispiel: „Seien Sie direkt und kritisch. Geben Sie Feedback als Aufzählungsliste zurück. Verwenden Sie technische Sprache."',
            '**Tone:** Definieren Sie die Stimme und emotionalen Charakter. Beispiel: „Formal, präzise und sachlich."',
            '**Audience:** Nennen Sie, wer die Ausgabe liest und ihr Wissensniveau. Beispiel: „Erfahrene Backend-Ingenieure, die mit React-Best-Practices vertraut sind."',
            '**Response:** Geben Sie genau an, wie Ausgaben strukturiert sein sollen. Beispiel: „Rückgabe als JSON: { issues: [...], summary: string, confidence: high|medium|low }."',
          ],
        },
        faqSection: {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was steht CO-STAR für?', a: 'CO-STAR steht für Context (Kontext), Objective (Ziel), Style (Stil), Tone (Ton), Audience (Zielgruppe) und Response (Antwort). Es ist ein sechsteiliges Framework, das Ihnen hilft, klare, strukturierte Prompts zu schreiben, indem Sie explizit jedes Element definieren, das beeinflusst, wie das Modell die Ausgabe erzeugt.' },
            { q: 'Wie unterscheidet sich CO-STAR von Chain-of-Thought?', a: 'Chain-of-Thought fordert das Modell auf zu „Schritt für Schritt denken". CO-STAR definiert WAS die Ausgabe sein soll und WIE es sich anfühlen soll. Sie lösen unterschiedliche Probleme: CoT verbessert das Reasoning; CO-STAR verbessert die Output-Konsistenz und Zielgruppenpassung. Sie können sie kombinieren.' },
            { q: 'Wann sollte ich CO-STAR statt einfacherer Prompts verwenden?', a: 'Verwenden Sie CO-STAR, wenn die Output-Qualität von Zielgruppenpassung, Ton, Stil oder Format abhängt. Beispiele: Schreiben für nicht-technische Leser, Erstellung von Marketing-Copy, Produktion formaler Dokumentation. Für einfache sachliche Fragen sind einfachere Prompts ausreichend.' },
            { q: 'Kann ich CO-STAR mit jedem Sprachmodell verwenden?', a: 'Ja. CO-STAR funktioniert mit allen großen Sprachmodellen: proprietären APIs, Open-Source-Modellen und lokalen Modellen wie Ollama. Das Framework ist modellunabhängig; es strukturiert Ihre Eingabe einfach klar, damit jedes Modell Ihre Erwartungen versteht.' },
            { q: 'Muss ich CO-STAR exakt befolgen?', a: 'Nein. CO-STAR ist ein Leitfaden, keine starre Vorlage. Überspringen Sie Komponenten, die nicht auf Ihre Aufgabe zutreffen, ordnen Sie sie neu an, oder kombinieren Sie sie mit anderen Frameworks. Das Ziel ist Klarheit über das, was Sie wollen und wie es sich anfühlen soll.' },
            { q: 'Wie erkenne ich, ob mein CO-STAR-Prompt effektiv ist?', a: 'Testen Sie ihn an 3–5 repräsentativen Eingaben und überprüfen Sie: (1) Entspricht die Ausgabe dem angegebenen Stil? (2) Ist der Ton konsistent mit Ihrem Briefing? (3) Spricht die Antwort die Zielgruppe an, die Sie benannt haben? Falls eine Frage nein ist, verfeinern Sie diese CO-STAR-Komponente.' },
            { q: 'Kann ich CO-STAR mit anderen Frameworks kombinieren?', a: 'Ja. CO-STAR definiert WAS und WIE die Ausgabe sich anfühlen soll. Chain-of-Thought oder APE definieren WIE das Modell DENKEN soll. Sie können CO-STAR für das Briefing verwenden und „Denken Sie Schritt für Schritt" als zusätzliche Anweisung hinzufügen.' },
            { q: 'Muss ich CO-STAR-Elemente in einer bestimmten Reihenfolge platzieren?', a: 'Keine strikte Reihenfolge erforderlich. Beginnen Sie mit Objective, damit das Modell weiß, was Sie wollen. Dann fügen Sie nach Bedarf Kontext, Zielgruppe, Stil und Ton hinzu. Response kann überall platziert werden, wo es sinnvoll ist. Experimentieren Sie, um zu sehen, was für Ihren Anwendungsfall funktioniert.' },
            { q: 'Brauche ich alle sechs CO-STAR-Komponenten?', a: 'Nein. Kontext und Ziel sind essentiell. Stil, Ton, Zielgruppe und Response verbessern die Qualität, können aber bei einfachen Aufgaben weggelassen werden. Beginnen Sie mit Context + Objective + Response als minimalem CO-STAR-Prompt, dann fügen Sie Stil, Ton und Zielgruppe hinzu, wenn die Ausgabe Kalibrierung benötigt.' },
            { q: 'Funktioniert CO-STAR mit lokalen Modellen wie Ollama?', a: 'Ja absolut. CO-STAR ist eine Prompt-Ebenen-Technik — sie funktioniert mit jedem Modell, das Anweisungen befolgt. Lokale Modelle reagieren auf die gleiche sechsteilige Struktur. Kleinere Modelle können möglicherweise weniger Constraints gleichzeitig bewältigen, also priorisieren Sie die wichtigsten 3–4 Komponenten bei Modellen unter 7B Parametern.' },
          ],
        },
      },
    },
    es: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'Framework CO-STAR: Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta — Guía Completa',
      seoTitle: 'Framework CO-STAR: Estructura Prompts Complejos en 6 Pasos',
      metaDescription: 'Los 6 campos de CO-STAR te dan control sobre cada variable de output: voz, tono, audiencia, formato. Plantillas completas y tabla comparativa vs CRAFT, RISEN.',
      ogDescription: 'CO-STAR: framework de prompt de 6 componentes. Domina el control de voz y tono.',
      twitterDescription: 'CO-STAR: Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta. Controla cada aspecto de la calidad y voz del output de IA.',
      intro: 'El Framework CO-STAR es un formato de prompt estructurado que te ayuda a diseñar instrucciones claras y de múltiples pasos para tareas complejas al definir Contexto, Objetivo, Estilo, Tono, Audiencia y Respuesta en un único mensaje coherente. En PromptQuorum, el Framework CO-STAR está disponible como opción integrada que cualquier usuario puede seleccionar y aplicar en todos los modelos compatibles.',
      publishDate: '2026-03-24',
      readTime: '8 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Framework CO-STAR',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',,
      'inLanguage': 'es'
        url: 'https://www.promptquorum.com/es/prompt-engineering/co-star-framework?lang=es',
        inLanguage: 'es',
        headline: 'Framework CO-STAR: Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta',
        description: 'Cómo funciona el Framework CO-STAR (Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta), cuándo usarlo y cómo PromptQuorum lo ofrece como opción integrada.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['Framework CO-STAR', 'Contexto Objetivo Estilo Tono Audiencia Respuesta', 'frameworks de prompt', 'prompt engineering', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompt' },
          { '@type': 'Thing', name: 'Modelos de Lenguaje de Gran Escala' },
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
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'es',
        mainEntity: [
          { '@type': 'Question', name: '¿Qué significa CO-STAR?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR significa Contexto, Objetivo, Estilo, Tono, Audiencia y Respuesta. Cada letra representa un componente de un prompt de IA estructurado. Juntos, los seis componentes le dan al modelo un brief completo — equivalente a lo que un escritor humano necesitaría para producir el output correcto en el primer intento.' } },
          { '@type': 'Question', name: '¿Cuándo debo usar CO-STAR en lugar de un prompt más simple?', acceptedAnswer: { '@type': 'Answer', text: 'Usa CO-STAR cuando múltiples dimensiones importan a la vez — cuando el output necesita una estructura específica Y tono Y debe calibrarse para una audiencia particular. Si solo necesitas una respuesta factual o un formato simple, un prompt más corto o enfoque de un solo paso es suficiente. CO-STAR brilla en documentación, contenido de cara al cliente, materiales de onboarding y comunicaciones con múltiples partes interesadas.' } },
          { '@type': 'Question', name: '¿En qué se diferencia CO-STAR de CRAFT?', acceptedAnswer: { '@type': 'Answer', text: 'Ambos son frameworks de prompt estructurados pero con diferentes énfasis. CO-STAR (Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta) se centra en las dimensiones de comunicación — quién lo lee, cómo debe sentirse. CRAFT (Contexto, Rol, Acción, Formato, Objetivo) se centra en la ejecución de tareas — qué rol juega el modelo y qué acción realiza. CO-STAR es mejor para contenido orientado a la audiencia; CRAFT es mejor para tareas definidas por rol.' } },
          { '@type': 'Question', name: '¿En qué se diferencia CO-STAR de SPECS?', acceptedAnswer: { '@type': 'Answer', text: 'SPECS (Situación, Problema, Ejemplos, Restricciones, Estilo) está orientado a la resolución de problemas — comienza desde un problema y trabaja hacia una solución. CO-STAR está orientado a la comunicación — comienza desde una audiencia y trabaja hacia el mensaje correcto. Usa SPECS para tareas analíticas y de resolución de problemas; usa CO-STAR para creación de contenido y tareas de comunicación.' } },
          { '@type': 'Question', name: '¿Puedo usar CO-STAR con modelos locales via Ollama?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. CO-STAR es una técnica a nivel de prompt — funciona con cualquier modelo que siga instrucciones. Los modelos locales responden a la misma estructura de seis componentes. Los modelos más pequeños pueden manejar menos restricciones simultáneamente, así que prioriza los 3-4 componentes más importantes si usas un modelo bajo 7B de parámetros.' } },
          { '@type': 'Question', name: '¿Necesito los seis componentes CO-STAR en cada prompt?', acceptedAnswer: { '@type': 'Answer', text: 'No. Contexto y Objetivo son esenciales. Estilo, Tono, Audiencia y Respuesta mejoran la calidad pero pueden omitirse para tareas simples. Empieza con Contexto + Objetivo + Respuesta como el prompt CO-STAR mínimo viable, luego añade Estilo, Tono y Audiencia cuando el output necesite calibración.' } },
          { '@type': 'Question', name: '¿Puedo combinar CO-STAR con Chain-of-Thought o APE?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. CO-STAR define QUÉ debe producir el modelo y CÓMO debe sentirse. Chain-of-Thought o APE definen cómo debe PENSAR el modelo. Puedes usar CO-STAR para el brief y añadir "Piensa paso a paso antes de producir la respuesta final" como instrucción adicional. Los frameworks son complementarios, no competidores.' } },
          { '@type': 'Question', name: '¿Qué significa CO-STAR en prompt engineering?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR significa Contexto, Objetivo, Estilo, Tono, Audiencia y Respuesta. Estos seis componentes trabajan juntos para darle al modelo de IA un brief completo. El Contexto proporciona antecedentes, el Objetivo establece el objetivo, el Estilo define la estructura, el Tono establece la voz, la Audiencia aclara quién lo leerá y la Respuesta especifica el formato exacto necesario.' } },
          { '@type': 'Question', name: '¿Cómo se usa el método CO-STAR para escribir un prompt?', acceptedAnswer: { '@type': 'Answer', text: 'Completa cada uno de los seis campos CO-STAR: escribe el contexto, establece tu objetivo, especifica el estilo (puntos, narrativa, pasos), elige el tono (formal, casual, técnico), identifica la audiencia y define el formato de respuesta. Puedes formatearlos como líneas etiquetadas o texto estructurado. Envía los seis componentes juntos como un prompt al modelo de IA.' } },
          { '@type': 'Question', name: '¿Cuáles son las mejores alternativas al framework CO-STAR?', acceptedAnswer: { '@type': 'Answer', text: 'Las principales alternativas incluyen RTF (Rol, Tarea, Formato — más simple, 3 componentes), CRAFT (Contexto, Rol, Acción, Formato, Objetivo — orientado a tareas), SPECS (Situación, Problema, Ejemplos, Restricciones, Estilo — resolución de problemas) y TRACE (Tarea, Requisitos, Acciones, Contexto, Ejemplos — orientado al razonamiento). Elige según el tipo de tarea y las necesidades de complejidad.' } },
          { '@type': 'Question', name: '¿Cómo se compara CO-STAR con RISEN, CRAFT y otros frameworks?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR (6 componentes, centrado en la audiencia) es para tareas con mucha comunicación. CRAFT (5 componentes, orientado al rol) es para la ejecución de tareas. RISEN enfatiza el rol y los objetivos. SPECS se centra en la resolución de problemas con restricciones. TRACE añade transparencia al razonamiento. CO-STAR sobresale cuando la audiencia, el tono y el estilo importan igualmente; otros frameworks brillan para diferentes perfiles de tareas.' } },
        ],
      },
      sections: {
        whatIsCOSTAR: {
          title: 'Qué es el Framework CO-STAR',
          content: [
            '**El Framework CO-STAR es un patrón de prompt engineering para instrucciones complejas donde necesitas que los modelos entiendan no solo qué hacer, sino cómo, para quién y en qué estilo.** En lugar de escribir una sola oración vaga, divides tu prompt en componentes CO-STAR explícitos para que todos los modelos de lenguaje reciban un brief completo.',
            'El acrónimo se expande típicamente como:',
          ],
          items: [
            'Contexto: Información de fondo y hechos relevantes.',
            'Objetivo: El único objetivo principal de la tarea.',
            'Estilo: Preferencias estructurales o retóricas (por ejemplo "explicación paso a paso").',
            'Tono: El sabor emocional o la voz (por ejemplo "formal", "amigable", "directo").',
            'Audiencia: Quién leerá o usará el output.',
            'Respuesta: El formato exacto de output que esperas.',
          ],
        },
        whyCOSTARWorks: {
          title: 'Por qué funciona el Framework CO-STAR',
          content: [
            '**El Framework CO-STAR funciona porque refleja cómo los humanos escriben buenos briefs: hace que el modelo sea consciente del contexto, objetivo y audiencia antes de comenzar a generar.** Cuando estos elementos son explícitos, el modelo no tiene que inferirlos de una instrucción corta y ambigua.',
            'Esto lleva a varios beneficios prácticos:',
          ],
          items: [
            'Mayor consistencia entre ejecuciones, porque se reutiliza la misma estructura.',
            'Colaboración más fácil, ya que el prompt se lee como una especificación compartida.',
            'Mejor comparabilidad entre modelos, porque todos los proveedores ven el mismo desglose.',
          ],
        },
        components: {
          title: 'Los Componentes CO-STAR en Detalle',
          content: [
            '**Un prompt CO-STAR sólido incluye los seis componentes, cada uno escrito como una instrucción o oración corta y clara.** Puedes formatearlos como líneas etiquetadas o como un párrafo estructurado; lo importante es que cada componente sea fácil de identificar y editar.',
            'Descripciones típicas de los componentes:',
          ],
          items: [
            'Contexto: De qué trata la tarea, qué ha ocurrido ya y cualquier restricción o fuente de datos.',
            'Objetivo: Una declaración concisa de cómo se ve el éxito.',
            'Estilo: Si quieres una narrativa, una lista, una guía paso a paso u otra estructura.',
            'Tono: Si la voz debe ser formal, neutral, conversacional u otro.',
            'Audiencia: El grupo específico al que te diriges, incluyendo su rol y nivel de conocimiento.',
            'Respuesta: El formato requerido, como encabezados, puntos, límite de longitud o campos JSON.',
          ],
        },
        badVsGoodExample: {
          title: 'Ejemplo: Prompt CO-STAR malo vs bueno',
          content: [
            '**El valor del Framework CO-STAR se vuelve claro cuando comparas un prompt no estructurado con un prompt basado en CO-STAR para la misma tarea.** Aquí hay un ejemplo para un explicador técnico.',
            '**[Prompt Malo]**',
            '"Explica las APIs a nuestros clientes."',
            '**[Prompt Bueno]**',
            '"Contexto: Ofrecemos una plataforma SaaS y estamos añadiendo una API para que los clientes puedan integrar nuestro producto con sus herramientas internas. Muchos de ellos son usuarios empresariales no técnicos. Objetivo: Explicar qué es una API y por qué importa para nuestro producto, de una manera que reduzca el miedo y fomente la adopción. Estilo: Usa secciones cortas con encabezados H2 y puntos de bala para ideas clave. Incluye una analogía simple del mundo real. Tono: Claro, tranquilizador y no técnico. Evita el jerga donde sea posible y explica los términos técnicos necesarios. Audiencia: Usuarios empresariales y gerentes sin experiencia en programación. Respuesta: Artículo de 700-900 palabras con introducción, 3-4 secciones principales y una conclusión corta que los invite a hablar con su gestor de cuenta."',
            'La versión CO-STAR define explícitamente cada dimensión importante, haciendo mucho más probable que el modelo produzca algo que tus clientes puedan usar realmente.',
          ],
        },
        whenToUse: {
          title: 'Cuándo usar el Framework CO-STAR',
          content: [
            '**Debes usar el Framework CO-STAR cuando te enfrentas a tareas con múltiples restricciones donde la audiencia, la estructura y el tono importan al mismo tiempo.** Esto incluye muchos flujos de trabajo comunes en producto, marketing, éxito del cliente y educación.',
            'Casos de uso típicos:',
          ],
          items: [
            'Escribir documentación de productos o guías de onboarding.',
            'Crear artículos educativos o explicadores para audiencias no expertas.',
            'Redactar memos internos estructurados, notas de estrategia o documentos de políticas.',
            'Preparar macros de soporte o contenido del centro de ayuda que debe ser consistente en tono.',
          ],
        },
        howToWrite: {
          title: 'Cómo escribir un prompt CO-STAR en la práctica',
          content: [
            '**Escribir un prompt CO-STAR es sencillo si piensas en ello como completar seis líneas de un brief y luego enviarlas juntas como una instrucción.** Puedes almacenar este patrón y reutilizarlo para diferentes tareas cambiando solo los detalles.',
            'Una plantilla genérica se ve así:',
          ],
          items: [
            'Contexto: [Qué está pasando, de qué se trata, antecedentes relevantes.]',
            'Objetivo: [Único objetivo principal para este prompt.]',
            'Estilo: [Estructura preferida, como puntos, narrativa o paso a paso.]',
            'Tono: [Voz y sensación emocional que deseas.]',
            'Audiencia: [Quién leerá esto y qué saben.]',
            'Respuesta: [Formato exacto, longitud y requisitos especiales.]',
          ],
        },
        howPQImplements: {
          title: 'Cómo PromptQuorum implementa el Framework CO-STAR',
          content: [
            '**PromptQuorum es una herramienta de despacho de IA multi-modelo que incluye el Framework CO-STAR como una de sus opciones de prompt integradas para que los usuarios puedan aplicar el prompting Contexto–Objetivo–Estilo–Tono–Audiencia–Respuesta sin memorizar el patrón.** Cuando seleccionas el Framework CO-STAR en PromptQuorum, la app proporciona campos de entrada dedicados para cada componente y los ensambla automáticamente en un único prompt estructurado.',
            'Dentro de PromptQuorum, puedes:',
          ],
          items: [
            'Completar los campos CO-STAR para una tarea y despachar el prompt resultante a múltiples modelos de lenguaje, incluyendo opciones propietarias y de código abierto.',
            'Guardar prompts CO-STAR como plantillas para flujos de trabajo recurrentes, como actualizaciones de documentación, anuncios de funciones o resúmenes trimestrales.',
            'Compartir estas plantillas con tu equipo para que todos usen la misma estructura, incluso si son nuevos en prompt engineering.',
          ],
        },
        usingCOSTARWithOthers: {
          title: 'Usar CO-STAR junto a otros frameworks',
          content: [
            '**Debes posicionar el Framework CO-STAR junto a otros frameworks de prompt asignando a cada uno un rol claro en tu flujo de trabajo.** CO-STAR sobresale en tareas de comunicación con múltiples restricciones donde la audiencia y la estructura son ambas importantes.',
            'Una estrategia simple es:',
          ],
          items: [
            'Usa CO-STAR para explicaciones estructuradas, guías y piezas de comunicación.',
            'Usa CRAFT cuando te centres en marketing puro y voz de marca para canales específicos.',
            'Usa frameworks de un solo paso o de estilo especificación para outputs con formato estricto como informes o JSON.',
            'Usa frameworks orientados al razonamiento como Analizar–Planificar–Ejecutar cuando quieres que el modelo exponga su pensamiento intermedio.',
          ],
        },

        keyTakeaways: {
          title: 'Puntos clave',
          isTldr: true,
          content: [
            '**CO-STAR** = Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta — seis componentes etiquetados que eliminan las conjeturas de los prompts de IA',
            'CO-STAR es más fuerte para **tareas de comunicación con múltiples restricciones** donde la audiencia, la estructura y el tono importan simultáneamente',
            'El framework refleja cómo los humanos escriben buenos briefs: hacer explícito el contexto, objetivo y audiencia antes de que el modelo empiece a generar',
            'Los prompts CO-STAR son portátiles en todos los modelos de lenguaje — APIs en la nube y modelos locales',
            'Usa CO-STAR para documentación, guías de onboarding, explicadores, memos internos y contenido del centro de ayuda',
            'Para tareas de razonamiento puro, usa APE o Chain-of-Thought. Para tareas simples de un output, usa Single-Step.',
          ],
        },

        quickFacts: {
          title: 'Datos rápidos',
          items: [
            '**CO-STAR =** Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta',
            '**Mejor para:** Tareas de comunicación con múltiples restricciones (documentación, explicadores, onboarding, memos)',
            '**Componentes:** 6 — más que APE (3), comparable a CRAFT (5) y SPECS (5)',
            '**Mínimo viable:** Contexto + Objetivo + Respuesta (3 de 6)',
            '**Fortaleza clave:** Conciencia de Audiencia y Tono — CO-STAR es el framework más centrado en la audiencia',
            '**Funciona en:** Todos los modelos de lenguaje — nube y local',
          ],
        },

        frameworkComparison: {
          title: 'CO-STAR vs Otros Frameworks de Prompt',
          columns: ['Framework', 'Componentes', 'Enfoque', 'Mejor Para'],
          rows: [
            { 'Framework': 'CO-STAR', 'Componentes': '6 (Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta)', 'Enfoque': 'Comunicación centrada en la audiencia', 'Mejor Para': 'Documentación, explicadores, contenido para clientes' },
            { 'Framework': 'CRAFT', 'Componentes': '5 (Contexto, Rol, Acción, Formato, Objetivo)', 'Enfoque': 'Ejecución de tareas definida por rol', 'Mejor Para': 'Marketing, contenido específico por canal' },
            { 'Framework': 'SPECS', 'Componentes': '5 (Situación, Problema, Ejemplos, Restricciones, Estilo)', 'Enfoque': 'Resolución de problemas con ejemplos', 'Mejor Para': 'Tareas analíticas, resolución de problemas' },
            { 'Framework': 'APE', 'Componentes': '3 (Analizar, Planificar, Ejecutar)', 'Enfoque': 'Razonamiento visible', 'Mejor Para': 'Análisis complejo, estrategia, revisión de código' },
            { 'Framework': 'RTF', 'Componentes': '3 (Rol, Tarea, Formato)', 'Enfoque': 'Estructura mínima', 'Mejor Para': 'Tareas rápidas, outputs simples' },
            { 'Framework': 'Single-Step', 'Componentes': '1 (una instrucción)', 'Enfoque': 'Velocidad', 'Mejor Para': 'Tareas simples y bien definidas' },
          ],
        },

        commonMistakes: {
          title: 'Errores comunes con el Framework CO-STAR',
          numberedItems: [
            '**Escribir el Contexto como una sola oración vaga.** Por qué perjudica: "Somos una empresa SaaS" le dice al modelo casi nada. No conoce tu producto, tus clientes o la situación. Solución: Incluye antecedentes específicos: qué producto, qué problema, qué ha ocurrido ya, qué datos están disponibles.',
            '**Confundir Estilo y Tono.** Por qué perjudica: Estilo = estructura (puntos, encabezados, paso a paso). Tono = voz (formal, amigable, urgente). Mezclarlos produce prompts donde ninguno está claro. Solución: Estilo responde "¿cómo se ve?" Tono responde "¿cómo suena?" Mantenlos en líneas separadas.',
            '**Omitir la Audiencia para documentos internos.** Por qué perjudica: "Interno" no es una audiencia. Un memo para ingenieros se lee diferente a un memo para el CFO. Sin especificar quién lo lee, el modelo usa prosa genérica de nivel medio. Solución: Nombra el rol del lector, su nivel de conocimiento y qué hará con el output.',
            '**Hacer la Respuesta demasiado vaga ("un documento").** Por qué perjudica: El modelo elige su propia longitud, estructura y formato — que cambia en cada ejecución. Solución: Especifica el formato (puntos, encabezados, JSON), longitud (número de palabras o secciones) y requisitos estructurales (introducción, conclusión, CTA).',
          ],
        },

        expandedFAQ: {
          title: 'Preguntas frecuentes',
          faqs: [
            {
              q: '¿Qué significa CO-STAR?',
              a: 'CO-STAR significa Contexto, Objetivo, Estilo, Tono, Audiencia y Respuesta. Cada letra representa un componente de un prompt de IA estructurado. Juntos, los seis componentes le dan al modelo un brief completo — equivalente a lo que un escritor humano necesitaría para producir el output correcto en el primer intento.'
            },
            {
              q: '¿Cuándo debo usar CO-STAR en lugar de un prompt más simple?',
              a: 'Usa CO-STAR cuando múltiples dimensiones importan a la vez — cuando el output necesita una estructura específica Y tono Y debe calibrarse para una audiencia particular. Si solo necesitas una respuesta factual o un formato simple, un prompt más corto o enfoque de un solo paso es suficiente. CO-STAR brilla en documentación, contenido de cara al cliente, materiales de onboarding y comunicaciones con múltiples partes interesadas.'
            },
            {
              q: '¿En qué se diferencia CO-STAR de CRAFT?',
              a: 'Ambos son frameworks de prompt estructurados pero con diferentes énfasis. CO-STAR (Contexto, Objetivo, Estilo, Tono, Audiencia, Respuesta) se centra en las dimensiones de comunicación — quién lo lee, cómo debe sentirse. CRAFT (Contexto, Rol, Acción, Formato, Objetivo) se centra en la ejecución de tareas — qué rol juega el modelo y qué acción realiza. CO-STAR es mejor para contenido orientado a la audiencia; CRAFT es mejor para tareas definidas por rol.'
            },
            {
              q: '¿En qué se diferencia CO-STAR de SPECS?',
              a: 'SPECS (Situación, Problema, Ejemplos, Restricciones, Estilo) está orientado a la resolución de problemas — comienza desde un problema y trabaja hacia una solución. CO-STAR está orientado a la comunicación — comienza desde una audiencia y trabaja hacia el mensaje correcto. Usa SPECS para tareas analíticas y de resolución de problemas; usa CO-STAR para creación de contenido y tareas de comunicación.'
            },
            {
              q: '¿Puedo usar CO-STAR con modelos locales via Ollama?',
              a: 'Sí. CO-STAR es una técnica a nivel de prompt — funciona con cualquier modelo que siga instrucciones. Los modelos locales responden a la misma estructura de seis componentes. Los modelos más pequeños pueden manejar menos restricciones simultáneamente, así que prioriza los 3-4 componentes más importantes si usas un modelo bajo 7B de parámetros.'
            },
            {
              q: '¿Necesito los seis componentes CO-STAR en cada prompt?',
              a: 'No. Contexto y Objetivo son esenciales. Estilo, Tono, Audiencia y Respuesta mejoran la calidad pero pueden omitirse para tareas simples. Empieza con Contexto + Objetivo + Respuesta como el prompt CO-STAR mínimo viable, luego añade Estilo, Tono y Audiencia cuando el output necesite calibración.'
            },
            {
              q: '¿Puedo combinar CO-STAR con Chain-of-Thought o APE?',
              a: 'Sí. CO-STAR define QUÉ debe producir el modelo y CÓMO debe sentirse. Chain-of-Thought o APE definen cómo debe PENSAR el modelo. Puedes usar CO-STAR para el brief y añadir "Piensa paso a paso antes de producir la respuesta final" como instrucción adicional. Los frameworks son complementarios, no competidores.'
            },
          ],
        },

        sources: {
          title: 'Fuentes',
          items: [
            '[White et al. (2023). "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT." arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — taxonomía de patrones de prompt incluyendo patrones de comunicación estructurados',
            '[Anthropic. "Prompt Engineering Guide." docs.anthropic.com](https://docs.anthropic.com) — mejores prácticas de prompting estructurado aplicables a CO-STAR',
            '[OpenAI. "Prompt Engineering Guide." platform.openai.com](https://platform.openai.com/docs/guides/prompt-engineering) — orientación de especificación de rol, contexto y formato',
            '[Google. "Gemini API: Prompting Strategies." ai.google.dev](https://ai.google.dev) — estrategias de prompt estructurado',
          ],
        },

        relatedReading: {
          title: 'Lecturas relacionadas',
          items: [
            '[¿Qué framework de prompt deberías usar?](/es/prompt-engineering/which-prompt-framework-should-you-use) — comparación CO-STAR vs CRAFT vs SPECS vs APE',
            '[Framework CRAFT](/es/prompt-engineering/craft-framework) — alternativa orientada al rol de CO-STAR',
            '[Framework SPECS](/es/prompt-engineering/specs-framework) — alternativa orientada a la resolución de problemas de CO-STAR',
            '[Framework APE](/es/prompt-engineering/ape-framework) — framework orientado al razonamiento (Analizar, Planificar, Ejecutar)',
            '[5 Bloques de Construcción que Todo Prompt Necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) — los bloques universales que CO-STAR organiza',
            '[Prompting de Persona](/es/prompt-engineering/persona-prompting) — profundización en la dimensión de rol/audiencia que CO-STAR toca',
          ],
        },

        howToStart: {
          title: 'Cómo usar el Framework CO-STAR',
          numberedItems: [
            '**Contexto:** Proporciona información de fondo relevante que el modelo necesita. Ejemplo: "Ofrecemos una plataforma SaaS añadiendo una API. Muchos clientes son usuarios empresariales no técnicos."',
            '**Objetivo:** Indica lo que quieres en una oración. Ejemplo: "Explica qué es una API y por qué importa, de manera que reduzca el miedo y fomente la adopción."',
            '**Estilo:** Especifica la estructura. Ejemplo: "Usa secciones cortas con encabezados H2 y puntos de bala. Incluye una analogía simple del mundo real."',
            '**Tono:** Define la voz y el registro emocional. Ejemplo: "Claro, tranquilizador y no técnico. Evita el jerga; explica los términos técnicos necesarios."',
            '**Audiencia:** Nombra quién leerá el output y su nivel de conocimiento. Ejemplo: "Usuarios empresariales y gerentes sin experiencia en programación."',
            '**Respuesta:** Indica el formato exacto, la longitud y el entregable. Ejemplo: "Artículo de 700-900 palabras con introducción, 3-4 secciones principales y una conclusión invitándoles a contactar con su gestor de cuenta."',
          ],
        },

        faqSection: {
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Qué significa CO-STAR?', a: 'CO-STAR significa Contexto, Objetivo, Estilo, Tono, Audiencia y Respuesta. Es un framework de seis partes que te ayuda a escribir prompts claros y estructurados al definir explícitamente cada elemento que influye en cómo el modelo produce el output.' },
            { q: '¿En qué se diferencia CO-STAR de Chain-of-Thought?', a: 'Chain-of-Thought pide al modelo "pensar paso a paso". CO-STAR define QUÉ debe ser el output y CÓMO debe sentirse. Resuelven diferentes problemas: CoT mejora el razonamiento; CO-STAR mejora la consistencia del output y la alineación con la audiencia. Puedes combinarlos.' },
            { q: '¿Cuándo debo usar CO-STAR en lugar de prompts más simples?', a: 'Usa CO-STAR cuando la calidad del output depende de la alineación con la audiencia, el tono, el estilo o el formato. Ejemplos: escribir para lectores no técnicos, crear copy de marketing, producir documentación formal. Para preguntas factuales simples, los prompts más simples son suficientes.' },
            { q: '¿Puedo usar CO-STAR con cualquier modelo de lenguaje?', a: 'Sí. CO-STAR funciona con todos los modelos de lenguaje principales: APIs propietarias, modelos de código abierto y modelos locales como Ollama. El framework es agnóstico al modelo; simplemente estructura tu entrada claramente para que cualquier modelo entienda tus expectativas.' },
            { q: '¿Debo seguir CO-STAR exactamente?', a: 'No. CO-STAR es una guía, no una plantilla rígida. Omite componentes que no apliquen a tu tarea, reordénalos o combínalos con otros frameworks. El objetivo es claridad sobre lo que quieres y cómo debe sentirse.' },
            { q: '¿Cómo sé si mi prompt CO-STAR es efectivo?', a: 'Pruébalo en 3-5 entradas representativas y verifica: (1) ¿El output coincide con el estilo especificado? (2) ¿Es el tono consistente con tu brief? (3) ¿La respuesta se dirige a la audiencia que nombraste? Si alguna es negativa, refina ese componente CO-STAR.' },
            { q: '¿Puedo combinar CO-STAR con otros frameworks?', a: 'Sí. CO-STAR define QUÉ y CÓMO debe sentirse el output. Chain-of-Thought o APE definen CÓMO debe PENSAR el modelo. Puedes usar CO-STAR para el brief y añadir "piensa paso a paso" como instrucción adicional.' },
            { q: '¿Debo colocar los elementos CO-STAR en un orden específico?', a: 'No se requiere un orden estricto. Empieza con Objetivo para que el modelo sepa lo que quieres. Luego añade Contexto, Audiencia, Estilo y Tono según sea necesario. La Respuesta puede colocarse donde tenga más sentido. Experimenta para ver qué funciona para tu caso de uso.' },
            { q: '¿Necesito los seis componentes CO-STAR?', a: 'No. Contexto y Objetivo son esenciales. Estilo, Tono, Audiencia y Respuesta mejoran la calidad pero pueden omitirse para tareas simples. Empieza con Contexto + Objetivo + Respuesta como prompt CO-STAR mínimo, luego añade Estilo, Tono y Audiencia cuando el output necesite calibración.' },
            { q: '¿Funciona CO-STAR con modelos locales como Ollama?', a: 'Sí, absolutamente. CO-STAR es una técnica a nivel de prompt — funciona con cualquier modelo que siga instrucciones. Los modelos locales responden a la misma estructura de seis partes. Los modelos más pequeños pueden manejar menos restricciones simultáneamente, así que prioriza los 3-4 componentes más importantes con modelos bajo 7B parámetros.' },
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'Framework CO-STAR : Contexte, Objectif, Style, Ton, Audience, Réponse — Guide complet',
      seoTitle: 'Framework CO-STAR : Structurer vos Prompts en 6 Étapes',
      metaDescription: 'CO-STAR (Contexte, Objectif, Style, Ton, Audience, Réponse) — framework 6 composants pour prompts IA clairs et efficaces. Comparaison CRAFT, SPECS, APE.',
      intro: 'Le framework CO-STAR est un format de prompt structuré qui vous aide à concevoir des instructions claires et multi-étapes pour les tâches complexes en définissant Contexte, Objectif, Style, Ton, Audience et Réponse dans un seul message cohérent. Dans PromptQuorum, le framework CO-STAR est disponible comme option intégrée que tout utilisateur peut sélectionner et appliquer sur tous les modèles supportés.',
      publishDate: '2026-03-24',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Framework CO-STAR',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/fr/prompt-engineering/co-star-framework',
        'inLanguage': 'fr',
        headline: 'Framework CO-STAR : Contexte, Objectif, Style, Ton, Audience, Réponse',
        description: 'Comment fonctionne le framework CO-STAR (Contexte, Objectif, Style, Ton, Audience, Réponse), quand l\'utiliser, et comment PromptQuorum l\'intègre comme option native.',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['Framework CO-STAR', 'Prompt Engineering', 'IA', 'Prompts structurés', 'PromptQuorum'],
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Prompt Engineering' },
          { '@type': 'Thing', name: 'Frameworks de Prompts' },
          { '@type': 'Thing', name: 'Modèles de Langage' },
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
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'fr',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Que signifie CO-STAR ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR signifie Context (Contexte), Objective (Objectif), Style (Style), Tone (Ton), Audience (Audience) et Response (Réponse). Chaque lettre représente un composant d\'un prompt IA structuré. Ensemble, les six composants forment un brief complet — équivalent à ce qu\'un auteur humain nécessiterait pour produire le bon résultat du premier coup.' }
          },
          {
            '@type': 'Question',
            'name': 'Quand dois-je utiliser le framework CO-STAR ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Utilisez CO-STAR quand plusieurs dimensions sont importantes simultanément — quand la sortie nécessite une structure spécifique ET un ton spécifique ET une calibration pour un public particulier. Pour une réponse factuelle ou un format simple, un prompt plus court ou une approche Single-Step suffisent. CO-STAR excelle pour la documentation, le contenu client, les matériels d\'intégration et la communication multi-parties prenantes.' }
          },
          {
            '@type': 'Question',
            'name': 'En quoi CO-STAR diffère-t-il de CRAFT ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Les deux sont des frameworks de prompts structurés mais avec des orientations différentes. CO-STAR (Context, Objective, Style, Tone, Audience, Response) se concentre sur les dimensions de communication — qui lit, comment ça doit sonner. CRAFT (Context, Role, Action, Format, Target) se concentre sur l\'exécution des tâches — quel rôle le modèle joue. CO-STAR est meilleur pour contenu orienté audience; CRAFT pour tâches définies par rôle.' }
          },
          {
            '@type': 'Question',
            'name': 'En quoi CO-STAR diffère-t-il de SPECS ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'SPECS (Situation, Problem, Examples, Constraints, Style) est orienté résolution de problèmes — il commence par un problème et aboutit à une solution. CO-STAR est orienté communication — il commence par une audience et aboutit au bon message. Utilisez SPECS pour tâches analytiques; CO-STAR pour création de contenu et communication.' }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je utiliser CO-STAR avec les modèles locaux via Ollama ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. CO-STAR est une technique au niveau du prompt — elle fonctionne avec tout modèle qui suit les instructions. Les modèles locaux répondent à la même structure six composants. Les modèles plus petits gèrent moins de contraintes simultanément, donc priorisez les 3–4 composants les plus importants pour les modèles sous 7B de paramètres.' }
          },
          {
            '@type': 'Question',
            'name': 'Ai-je besoin des six composants CO-STAR dans chaque prompt ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Non. Contexte et Objectif sont essentiels. Style, Ton, Audience et Response améliorent la qualité mais peuvent être omis pour les tâches simples. Commencez par Context + Objective + Response comme prompt CO-STAR viable minimal, puis ajoutez Style, Tone et Audience quand la calibration est nécessaire.' }
          },
          {
            '@type': 'Question',
            'name': 'Puis-je combiner CO-STAR avec Chain-of-Thought ou APE ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. CO-STAR définit QUOI produire et COMMENT ça doit sonner. Chain-of-Thought ou APE définissent COMMENT le modèle doit penser. Vous pouvez utiliser CO-STAR pour le brief et ajouter « Réfléchis étape par étape avant de produire la réponse finale » comme instruction supplémentaire. Les frameworks sont complémentaires, non concurrents.' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STAR fonctionne-t-il avec tous les modèles ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. CO-STAR fonctionne avec tous les grands modèles de langage — propriétaires, open-source ou locaux. Les modèles plus grands gèrent mieux la nuance et les contextes complexes, mais tous bénéficient d\'une structure CO-STAR claire et complète comparé à des prompts vagues.' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STAR est-il pertinent pour le marché français et francophone ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Absolument. Les entreprises et équipes en France, Belgique et pays francophones utilisent CO-STAR pour documentation produit, communication client et workflows internes. L\'approche structurée améliore la clarté et la cohérence — particulièrement précieuse dans les contextes multilingues et les grandes organisations.' }
          },
          {
            '@type': 'Question',
            'name': 'Comment commencer avec CO-STAR pratiquement ?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Commencez avec un prompt simple : énoncez le Contexte, l\'Objectif et le Format Response souhaité. Une fois maîtrisés, ajoutez Style et Tone pour affiner la qualité. Définissez l\'Audience (cible, niveau de connaissances) pour adapter la complexité. Sauvegardez vos meilleurs prompts CO-STAR comme modèles pour réutilisation.' }
          },
        ]
      },
      sections: {
        ceQuestCOSTAR: {
          title: 'Ce qu\'est le framework CO-STAR',
          content: [
            '**Le framework CO-STAR est un pattern d\'ingénierie de prompts pour instructions complexes où vous avez besoin que les modèles comprennent non seulement QUOI faire, mais COMMENT, pour QUI et dans quel STYLE.** Plutôt qu\'écrire une phrase vague, vous décomposez le prompt en composants CO-STAR explicites afin que tous les grands modèles de langage reçoivent un brief complet.',
            'L\'acronyme se développe généralement comme suit:',
          ],
          items: [
            'C — Context (Contexte) : Informations d\'arrière-plan et faits pertinents.',
            'O — Objective (Objectif) : L\'unique objectif principal de la tâche.',
            'S — Style (Style) : Préférences structurelles ou rhétoriques (par exemple « explication étape par étape »).',
            'T — Tone (Ton) : Le caractère émotionnel ou la voix (par exemple « formel », « amical », « direct »).',
            'A — Audience (Audience) : Qui lira ou utilisera la sortie.',
            'R — Response (Réponse) : Le format exacte de sortie que vous attendez.',
          ],
        },
        pourquoiCOSTARFonctionne: {
          title: 'Pourquoi le framework CO-STAR fonctionne',
          content: [
            '**Le framework CO-STAR fonctionne parce qu\'il reflète comment les humains écrivent de bons briefs : il sensibilise le modèle au contexte, l\'objectif et l\'audience avant qu\'il commence à générer.** Quand ces éléments sont explicites, le modèle n\'a pas besoin de les déduire d\'une instruction courte et ambiguë.',
            'Cela entraîne plusieurs avantages pratiques :',
          ],
          items: [
            'Cohérence supérieure entre les exécutions, car la même structure est réutilisée.',
            'Collaboration simplifiée, puisque le prompt se lit comme une spécification partagée.',
            'Meilleure comparabilité multi-modèles, car tous les fournisseurs voient la même décomposition.',
          ],
        },
        composants: {
          title: 'Les composants CO-STAR en détail',
          content: [
            '**Un fort prompt CO-STAR inclut les six composants, chacun écrit comme une instruction ou phrase courte et claire.** Vous pouvez les formater comme lignes étiquetées ou comme paragraphe structuré; l\'important est que chaque composant soit facile à repérer et modifier.',
            'Descriptions typiques de composants :',
          ],
          items: [
            'Context: Ce dont il s\'agit, ce qui s\'est déjà passé, et toutes les contraintes ou sources de données.',
            'Objective: Une déclaration concise de ce que le succès ressemble.',
            'Style: Voulez-vous un récit, une liste, un guide étape par étape, ou autre structure.',
            'Tone: Voulez-vous un ton formel, neutre, conversationnel, ou autre.',
            'Audience: Le groupe spécifique visé, y compris leur rôle et niveau de connaissances.',
            'Response: Le format requis, par exemple en-têtes, puces, limite de longueur ou champs JSON.',
          ],
        },
        mauvaisVsPromp: {
          title: 'Exemple : mauvais vs bon prompt CO-STAR',
          content: [
            '**La valeur du framework CO-STAR devient évidente quand on compare un prompt non structuré avec un prompt basé sur CO-STAR pour la même tâche.** Voici un exemple pour une explication technique.',
            '**[Mauvais Prompt]**',
            '"Explique les APIs à nos clients."',
            '**[Bon Prompt]**',
            '"Context: Nous offrons une plateforme SaaS et ajoutons une API afin que les clients intègrent notre produit à leurs outils internes. Beaucoup sont des utilisateurs commerciaux non techniques. Objective: Explique ce qu\'une API est et pourquoi ça compte pour notre produit, d\'une manière qui réduit la peur et encourage l\'adoption. Style: Utilise des sections courtes avec en-têtes H2 et puces pour les idées clés. Inclus une simple analogie réelle. Tone: Clair, rassurant et non technique. Évite le jargon où possible; explique tout terme technique nécessaire. Audience: Utilisateurs commerciaux et managers sans expérience en programmation. Response: Article de 700–900 mots avec intro, 3–4 sections principales et conclusion courte invitant à contacter leur gestionnaire de compte."',
            'La version CO-STAR définit chaque dimension importante explicitement, ce qui rend beaucoup plus probable que le modèle produise quelque chose que vos clients peuvent vraiment utiliser.',
          ],
        },
        quandUtiliser: {
          title: 'Quand utiliser le framework CO-STAR',
          content: [
            '**Utilisez le framework CO-STAR quand vous traitez des tâches multi-contraintes où audience, structure et ton importent simultanément.** Ceci inclut de nombreux workflows communs en produit, marketing, succès client et éducation.',
            'Cas d\'usage typiques :',
          ],
          items: [
            'Rédaction de documentation produit ou guides d\'intégration.',
            'Création d\'articles éducatifs ou explications pour publics non-experts.',
            'Rédaction de memos internes structurés, notes stratégiques ou documents politiques.',
            'Préparation de macros support ou contenu help-center qui doit maintenir un ton cohérent.',
          ],
        },
        commentEcrire: {
          title: 'Comment écrire un prompt CO-STAR en pratique',
          content: [
            '**Écrire un prompt CO-STAR est simple si vous le pensez comme remplir six lignes d\'un brief, puis les envoyer ensemble comme une instruction.** Vous pouvez stocker ce pattern et le réutiliser pour différentes tâches en changeant seulement les détails.',
            'Un modèle générique ressemble à ceci :',
          ],
          items: [
            'Context: [Ce qui se passe, de quoi ça parle, contexte pertinent.]',
            'Objective: [Objectif principal unique pour ce prompt.]',
            'Style: [Structure préférée, par exemple puces, récit ou étape par étape.]',
            'Tone: [Voix et feeling émotionnel que vous voulez.]',
            'Audience: [Qui va lire ça et ce qu\'ils connaissent.]',
            'Response: [Format exact, longueur et besoins spéciaux.]',
          ],
        },
        commentPQImplemente: {
          title: 'Comment PromptQuorum implémente le framework CO-STAR',
          content: [
            '**PromptQuorum est un outil de dispatch multi-modèle IA qui inclut le framework CO-STAR comme option intégrée afin que les utilisateurs puissent appliquer le prompting Context–Objective–Style–Tone–Audience–Response sans mémoriser le pattern.** Quand vous sélectionnez le framework CO-STAR dans PromptQuorum, l\'app fournit des champs de saisie dédiés pour chaque composant et les assemble automatiquement en un seul prompt structuré.',
            'Dans PromptQuorum, vous pouvez :',
          ],
          items: [
            'Remplir les champs CO-STAR pour une tâche et dispatcher le prompt résultant à plusieurs grands modèles de langage, y compris propriétaires et open-source.',
            'Sauvegarder les prompts CO-STAR comme modèles pour workflows récurrents, comme mises à jour de documentation, annonces de features ou résumés trimestriels.',
            'Partager ces modèles avec votre équipe afin que tout le monde utilise la même structure, même s\'ils sont nouveaux en prompt engineering.',
          ],
        },
        avecAutres: {
          title: 'Utiliser CO-STAR aux côtés d\'autres frameworks',
          content: [
            '**Vous devriez positionner le framework CO-STAR aux côtés d\'autres frameworks de prompts en assignant à chacun un rôle clair dans votre workflow.** CO-STAR excelle aux tâches de communication multi-contraintes où audience et structure sont tous les deux importants.',
            'Une stratégie simple est :',
          ],
          items: [
            'Utilisez CO-STAR pour explications structurées, guides et pièces de communication.',
            'Utilisez CRAFT quand vous êtes concentré sur marketing pur et voix de marque pour canaux spécifiques.',
            'Utilisez Single Step ou frameworks specification-style pour sorties étroitement formatées comme rapports ou JSON.',
            'Utilisez frameworks reasoning-oriented comme Analyze–Plan–Execute quand vous voulez que le modèle expose sa réflexion intermédiaire.',
          ],
        },
        pointsCles: {
          title: 'Points clés',
          isTldr: true,
          content: [
            '**CO-STAR** = C — Context (Contexte), O — Objective (Objectif), S — Style (Style), T — Tone (Ton), A — Audience (Audience), R — Response (Réponse) — six composants étiquetés qui éliminent les suppositions des prompts IA',
            'CO-STAR est le plus puissant pour **tâches de communication multi-contraintes** où audience, structure et tone importent simultanément',
            'Le framework reflète comment les humains écrivent de bons briefs : rendre contexte, objectif et audience explicites avant génération par le modèle',
            'Les prompts CO-STAR sont portables entre tous les modèles de langage — APIs cloud et modèles locaux',
            'Utilisez CO-STAR pour documentation, guides d\'intégration, explications, memos internes et contenu help-center',
            'Pour tâches pures reasoning, utilisez APE ou Chain-of-Thought. Pour tâches simples single-output, utilisez Single-Step.',
          ],
        },
        faitsRapides: {
          title: 'Faits rapides',
          items: [
            '**CO-STAR =** C — Context (Contexte), O — Objective (Objectif), S — Style (Style), T — Tone (Ton), A — Audience (Audience), R — Response (Réponse)',
            '**Meilleur pour :** Tâches de communication multi-contraintes (documentation, explications, intégration, memos)',
            '**Composants :** 6 — plus que APE (3), comparable à CRAFT (5) et SPECS (5)',
            '**Minimal viable :** Context + Objective + Response (3 sur 6)',
            '**Force clé :** Sensibilisation audience et tone — CO-STAR est le framework le plus centré sur l\'audience',
            '**Fonctionne sur :** Tous les modèles de langage — cloud et local',
          ],
        },
        comparaisonFramework: {
          title: 'CO-STAR vs autres frameworks de prompts',
          columns: ['Framework', 'Composants', 'Orientation', 'Meilleur pour'],
          rows: [
            { 'Framework': 'CO-STAR', 'Composants': '6 (Context, Objective, Style, Tone, Audience, Response)', 'Orientation': 'Communication centrée audience', 'Meilleur pour': 'Documentation, explications, contenu client' },
            { 'Framework': 'CRAFT', 'Composants': '5 (Context, Role, Action, Format, Target)', 'Orientation': 'Exécution de tâche définie par rôle', 'Meilleur pour': 'Marketing, contenu spécifique à canal' },
            { 'Framework': 'SPECS', 'Composants': '5 (Situation, Problem, Examples, Constraints, Style)', 'Orientation': 'Résolution de problème avec exemples', 'Meilleur pour': 'Tâches analytiques, dépannage' },
            { 'Framework': 'APE', 'Composants': '3 (Analyze, Plan, Execute)', 'Orientation': 'Reasoning visible', 'Meilleur pour': 'Analyse complexe, stratégie, code review' },
            { 'Framework': 'RTF', 'Composants': '3 (Role, Task, Format)', 'Orientation': 'Structure minimale', 'Meilleur pour': 'Tâches rapides, sorties simples' },
            { 'Framework': 'Single-Step', 'Composants': '1 (une instruction)', 'Orientation': 'Vitesse', 'Meilleur pour': 'Tâches bien définies, simples' },
          ],
        },
        erreursCommunes: {
          title: 'Erreurs courantes avec le framework CO-STAR',
          numberedItems: [
            '**Écrire Context comme une phrase unique vague.** Pourquoi ça pose problème : « Nous sommes une compagnie SaaS » ne dit presque rien au modèle. Il ne connaît pas votre produit, vos clients ou la situation. Corriger: Inclure contexte spécifique: quel produit, quel problème, ce qui s\'est passé, quelles données sont disponibles.',
            '**Confondre Style et Tone.** Pourquoi ça pose problème : Style = structure (puces, en-têtes, étape-par-étape). Tone = voix (formel, amical, urgent). Les mélanger produit des prompts où ni l\'un ni l\'autre n\'est clair. Corriger: Style répond « comment ça ressemble ? » Tone répond « comment ça sonne ? » Gardez-les sur des lignes séparées.',
            '**Sauter Audience pour documents internes.** Pourquoi ça pose problème : « Interne » n\'est pas une audience. Un memo pour ingénieurs se lit différemment d\'un memo pour le CFO. Sans spécifier qui le lit, le modèle par défaut à prosa mid-level générique. Corriger: Nommer le rôle du lecteur, son niveau de connaissances, ce qu\'il fera avec la sortie.',
            '**Rendre Response trop vague (« un document »).** Pourquoi ça pose problème : Le modèle choisit sa propre longueur, structure, format — ce qui change chaque exécution. Corriger: Spécifier format (puces, en-têtes, JSON), longueur (compte de mots ou compte de sections) et tous les besoins structuraux (intro, conclusion, CTA).',
          ],
        },
        faqEtendu: {
          title: 'Questions fréquemment posées',
          faqs: [
            {
              q: 'Que signifie CO-STAR ?',
              a: 'CO-STAR signifie Context (Contexte), Objective (Objectif), Style (Style), Tone (Ton), Audience (Audience) et Response (Réponse). Chaque lettre représente un composant d\'un prompt IA structuré. Ensemble, les six composants forment un brief complet — équivalent à ce qu\'un auteur humain aurait besoin pour produire la bonne sortie au premier essai.'
            },
            {
              q: 'Quand devrais-je utiliser CO-STAR au lieu d\'un prompt plus simple ?',
              a: 'Utilisez CO-STAR quand plusieurs dimensions sont importantes simultanément — quand la sortie a besoin d\'une structure spécifique ET d\'un tone spécifique ET d\'une calibration pour une audience particulière. Si vous avez juste besoin d\'une réponse factuelle ou d\'un format simple, un prompt plus court ou Single-Step suffisent. CO-STAR brille sur documentation, contenu orienté client, matériels d\'intégration et communication multi-parties prenantes.'
            },
            {
              q: 'Comment CO-STAR diffère-t-il de CRAFT ?',
              a: 'Les deux sont des frameworks structurés mais avec des orientations différentes. CO-STAR (Context, Objective, Style, Tone, Audience, Response) se concentre sur dimensions de communication — qui lit, comment ça doit sonner. CRAFT (Context, Role, Action, Format, Target) se concentre sur exécution de tâche — quel rôle le modèle joue. CO-STAR est meilleur pour contenu orienté audience; CRAFT pour tâches définies par rôle.'
            },
            {
              q: 'Comment CO-STAR diffère-t-il de SPECS ?',
              a: 'SPECS (Situation, Problem, Examples, Constraints, Style) est orienté résolution de problèmes — commence par un problème, aboutit à solution. CO-STAR est orienté communication — commence par audience, aboutit au bon message. Utilisez SPECS pour tâches analytiques; CO-STAR pour création de contenu et communication.'
            },
            {
              q: 'Puis-je utiliser CO-STAR avec les modèles locaux via Ollama ?',
              a: 'Oui. CO-STAR est une technique au niveau du prompt — fonctionne avec tout modèle qui suit les instructions. Les modèles locaux répondent à la même structure six composants. Les modèles plus petits gèrent moins de contraintes simultanément, donc priorisez les 3–4 composants les plus importants pour modèles sous 7B paramètres.'
            },
            {
              q: 'Ai-je besoin des six composants CO-STAR dans chaque prompt ?',
              a: 'Non. Contexte et Objectif sont essentiels. Style, Tone, Audience et Response améliorent la qualité mais peuvent être omis pour tâches simples. Commencez par Context + Objective + Response comme prompt CO-STAR minimal viable, puis ajoutez Style, Tone et Audience quand la calibration est nécessaire.'
            },
            {
              q: 'Puis-je combiner CO-STAR avec Chain-of-Thought ou APE ?',
              a: 'Oui. CO-STAR définit QUOI produire et COMMENT ça doit sonner. Chain-of-Thought ou APE définissent COMMENT le modèle doit penser. Vous pouvez utiliser CO-STAR pour le brief et ajouter « Réfléchis étape par étape avant de produire la réponse finale » comme instruction supplémentaire. Les frameworks se complètent.'
            },
            {
              q: 'CO-STAR fonctionne-t-il avec tous les modèles ?',
              a: 'Oui. CO-STAR fonctionne avec tous les grands modèles de langage — propriétaires, open-source ou locaux. Les modèles plus grands gèrent mieux la nuance et contextes complexes, mais tous bénéficient d\'une structure CO-STAR claire et complète comparé à prompts vagues.'
            },
            {
              q: 'Existe-t-il des considérations réglementaires pour CO-STAR en France ou Europe ?',
              a: 'Le framework CO-STAR lui-même est une technique d\'ingénierie de prompts neutre. Quand vous travaillez avec données sensibles en France, observez CNIL — l\'autorité de protection des données recommande l\'utilisation de modèles locaux ou auto-hébergés pour données sensibles. CO-STAR supporte ces setups, tout comme Ollama et modèles compatibles.'
            },
            {
              q: 'Comment commencer avec CO-STAR pratiquement ?',
              a: 'Commencez simple : énoncez le Contexte, l\'Objectif et le format Response souhaité. Une fois maîtrisés, ajoutez Style et Tone pour affiner la qualité. Définissez l\'Audience (cible, niveau de connaissances) pour adapter la complexité. Sauvegardez vos meilleurs prompts CO-STAR comme modèles pour réutilisation rapide.'
            },
          ],
        },
        quelles: {
          title: 'Sources',
          items: [
            '[White et al. (2023). « A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT. » arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — taxonomie de patterns de prompts, y compris patterns de communication structurés',
            '[Anthropic. « Prompt Engineering Guide. » docs.anthropic.com](https://docs.anthropic.com) — best practices structurées du prompting applicables à CO-STAR',
            '[OpenAI. « Prompt Engineering Guide. » platform.openai.com](https://platform.openai.com/docs/guides/prompt-engineering) — guidance rôle, contexte et spécification de format',
            '[Google. « Gemini API: Prompting Strategies. » ai.google.dev](https://ai.google.dev) — stratégies de prompts structurés',
          ],
        },
        lectureSup: {
          title: 'Lectures complémentaires',
          items: [
            '[Quel framework de prompt devriez-vous utiliser ?](/fr/prompt-engineering/which-prompt-framework-should-you-use) — Comparaison CO-STAR vs CRAFT vs SPECS vs APE',
            '[Framework CRAFT](/fr/prompt-engineering/craft-framework) — alternative orientée rôle à CO-STAR',
            '[Framework SPECS](/fr/prompt-engineering/specs-framework) — alternative orientée résolution de problèmes à CO-STAR',
            '[Framework APE](/fr/prompt-engineering/ape-framework) — framework orienté reasoning (Analyze, Plan, Execute)',
            '[5 blocs que chaque prompt a besoin](/fr/prompt-engineering/5-building-blocks-every-prompt-needs) — les blocs universels que CO-STAR organise',
            '[Persona Prompting](/fr/prompt-engineering/persona-prompting) — deep dive dans la dimension rôle/audience que CO-STAR touche',
          ],
        },
        comment: {
          title: 'Comment utiliser le framework CO-STAR',
          numberedItems: [
            '**Context:** Fournissez les informations d\'arrière-plan pertinentes que le modèle a besoin. Exemple: « Vous examinez une pull request pour une bibliothèque de composants React. Le projet applique TypeScript strict mode, état immuable et composants fonctionnels uniquement. »',
            '**Objective:** Dites ce que vous voulez en une phrase. Exemple: « Examinez ce code pour type safety et violations de programmation fonctionnelle. »',
            '**Style:** Spécifiez tone et format. Exemple: « Soyez direct et critique. Renvoyez feedback comme liste à puces. Utilisez langage technique. »',
            '**Tone:** Définissez la voix et caractère émotionnel. Exemple: « Formel, précis et factuel. »',
            '**Audience:** Nommez qui lira la sortie et leur niveau de connaissances. Exemple: « Ingénieurs backend expérimentés familiers avec React best practices. »',
            '**Response:** Spécifiez exactement comment les sorties doivent être structurées. Exemple: « Retournez en JSON: { issues: [...], summary: string, confidence: high|medium|low }. »',
          ],
        },
        faqSection: {
          title: 'Questions fréquemment posées',
          faqs: [
            { q: 'Que signifie CO-STAR?', a: 'CO-STAR signifie Context (Contexte), Objective (Objectif), Style (Style), Tone (Ton), Audience (Audience) et Response (Réponse). C\'est un framework à six composants qui vous aide à écrire des prompts clairs et structurés en définissant explicitement chaque élément qui influence la façon dont le modèle produit une sortie.' },
            { q: 'Comment CO-STAR diffère-t-il de Chain-of-Thought?', a: 'Chain-of-Thought demande au modèle de « penser étape par étape ». CO-STAR définit CE que la sortie doit être et COMMENT elle doit se sentir. Ils résolvent des problèmes différents: CoT améliore le raisonnement; CO-STAR améliore la cohérence de la sortie et l\'adaptation au public. Vous pouvez les combiner.' },
            { q: 'Quand dois-je utiliser CO-STAR plutôt que des prompts plus simples?', a: 'Utilisez CO-STAR quand la qualité de la sortie dépend de l\'adaptation au public, du ton, du style ou du format. Exemples: écrire pour des lecteurs non techniques, créer du contenu marketing, produire de la documentation formelle. Pour les questions factuelles simples, des prompts plus simples suffisent.' },
            { q: 'Puis-je utiliser CO-STAR avec n\'importe quel modèle de langage?', a: 'Oui. CO-STAR fonctionne avec tous les grands modèles de langage: APIs propriétaires, modèles open-source et modèles locaux comme Ollama. Le framework est agnostique du modèle; il structure simplement votre entrée clairement afin que chaque modèle comprenne vos attentes.' },
            { q: 'Dois-je suivre CO-STAR exactement?', a: 'Non. CO-STAR est un guide, pas un modèle rigide. Omettez les composants qui ne s\'appliquent pas à votre tâche, réorganisez-les ou combinez-les avec d\'autres frameworks. L\'objectif est la clarté sur ce que vous voulez et comment cela doit se sentir.' },
            { q: 'Comment savoir si mon prompt CO-STAR est efficace?', a: 'Testez-le sur 3–5 entrées représentatives et vérifiez: (1) La sortie correspond-elle au style spécifié? (2) Le ton est-il cohérent avec votre briefing? (3) La réponse s\'adresse-t-elle au public nommé? Si l\'une d\'elles est non, affinez ce composant CO-STAR.' },
            { q: 'Puis-je combiner CO-STAR avec d\'autres frameworks?', a: 'Oui. CO-STAR définit CE et COMMENT la sortie doit se sentir. Chain-of-Thought ou APE définissent COMMENT le modèle doit PENSER. Vous pouvez utiliser CO-STAR pour le briefing et ajouter « Pensez étape par étape » comme instruction supplémentaire.' },
            { q: 'Dois-je placer les éléments CO-STAR dans un ordre spécifique?', a: 'Aucun ordre strict requis. Commencez par Objective pour que le modèle sache ce que vous voulez. Puis ajoutez Contexte, Audience, Style et Ton selon les besoins. Response peut être placé n\'importe où où cela a du sens. Expérimentez pour trouver ce qui fonctionne pour votre cas d\'usage.' },
            { q: 'Ai-je besoin de tous les six composants CO-STAR?', a: 'Non. Contexte et Objectif sont essentiels. Style, Ton, Audience et Response améliorent la qualité mais peuvent être omis pour les tâches simples. Commencez avec Context + Objective + Response comme prompt CO-STAR minimal viable, puis ajoutez Style, Ton et Audience quand la sortie nécessite un calibrage.' },
            { q: 'CO-STAR fonctionne-t-il avec les modèles locaux comme Ollama?', a: 'Absolument. CO-STAR est une technique au niveau du prompt — elle fonctionne avec n\'importe quel modèle qui suit les instructions. Les modèles locaux répondent à la même structure à six éléments. Les modèles plus petits peuvent gérer moins de contraintes simultanément, donc priorisez les 3–4 composants les plus importants avec des modèles sous 7B paramètres.' },
          ],
        },
      },
    },
    ja: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'CO-STARフレームワーク：コンテキスト、目的、スタイル、トーン、対象者、レスポンス — 完全ガイド',
      seoTitle: 'CO-STARフレームワーク：複雑なプロンプト用6要素構造',
      metaDescription: 'CO-STARフレームワーク（コンテキスト、目的、スタイル、トーン、対象者、レスポンス）を学ぶ。複雑なAIプロンプトを6要素で構造化。CRAFT、SPECS、APEとの比較。',
      intro: 'CO-STARフレームワークは、複雑なタスク向けに構造化されたプロンプト形式です。コンテキスト、目的、スタイル、トーン、対象者、レスポンスを定義することで、クリアで多段階の指示を設計するのに役立ちます。PromptQuorumでは、CO-STARフレームワークが組み込みオプションとして利用可能です。ユーザーは選択して、サポートされているすべてのモデルに適用できます。',
      publishDate: '2026-03-24',
      readTime: '10分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'CO-STARフレームワーク',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/ja/prompt-engineering/co-star-framework',
        'inLanguage': 'ja',
        headline: 'CO-STARフレームワーク：コンテキスト、目的、スタイル、トーン、対象者、レスポンス',
        description: 'CO-STARフレームワークの仕組み、使用するタイミング、PromptQuorumがどのように組み込みオプションとして実装しているかについてのガイド。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['CO-STARフレームワーク', 'プロンプトエンジニアリング', 'AI', '構造化プロンプト', 'PromptQuorum'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'プロンプトエンジニアリング' },
          { '@type': 'Thing', name: 'プロンプトフレームワーク' },
          { '@type': 'Thing', name: '大規模言語モデル' },
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
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ja',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'CO-STARは何の略ですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STARは Context（コンテキスト）、Objective（目的）、Style（スタイル）、Tone（トーン）、Audience（対象者）、Response（レスポンス）の略です。各文字は構造化されたAIプロンプトの1つの要素を表します。6つの要素全体で、完全なブリーフが形成されます。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STARはいつ使うべきですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '複数の側面が同時に重要な場合に使用します。出力が特定の構造、特定のトーン、特定の対象者向けの調整を必要とする場合です。単なる事実の回答や単純なフォーマットが必要な場合は、よりシンプルなプロンプトで十分です。ドキュメント、顧客向けコンテンツ、オンボーディング資料で特に役立ちます。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STARとCRAFTの違いは何ですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'どちらも構造化されたフレームワークですが、焦点が異なります。CO-STAR（Context、Objective、Style、Tone、Audience、Response）は、コミュニケーション次元に焦点を当てています。CRAFTは、タスク実行に焦点を当てています。対象者中心のコンテンツにはCO-STARが、役割定義されたタスクにはCRAFTが適しています。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STARとSPECSの違いは何ですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'SPECS（Situation、Problem、Examples、Constraints、Style）は問題解決志向です。CO-STARはコミュニケーション志向です。分析的なタスクにはSPECSを、コンテンツ作成や通信タスクにはCO-STARを使用してください。' }
          },
          {
            '@type': 'Question',
            'name': 'OllamaなどのローカルモデルでCO-STARを使用できますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。CO-STARはプロンプトレベルのテクニックです。すべてのモデルで機能します。ローカルモデルは同じ6要素構造に応答します。小さなモデル（7B未満）の場合は、最も重要な3～4要素に優先順位を付けてください。' }
          },
          {
            '@type': 'Question',
            'name': 'すべてのプロンプトに6つの要素が必要ですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'いいえ。コンテキストと目的は必須です。スタイル、トーン、対象者、レスポンスは品質を向上させますが、シンプルなタスクでは省略できます。Context + Objective + Responseから始めて、必要に応じて他の要素を追加してください。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STARをChain-of-ThoughtやAPEと組み合わせられますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。CO-STARは「何を」「どのように」作成するかを定義し、Chain-of-ThoughtやAPEは「どのように考えるか」を定義します。2つは補完関係にあり、競合していません。' }
          },
          {
            '@type': 'Question',
            'name': '日本企業でCO-STARは使用されていますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'はい。日本の多くの企業がCO-STARを内部ドキュメント、顧客コミュニケーション、チームワークフローに使用しています。構造化されたアプローチは日本のQA文化や品質基準に適合しており、AIプロンプトの一貫性と信頼性を向上させます。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STARのすべての要素を毎回使用する必要はありますか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'いいえ。ただし、コンテキストと目的は常に含めることをお勧めします。スタイル、トーン、対象者を追加すると、より目的に合った出力が得られます。シンプルなタスクではミニマル版のContext+Objective+Responseで始めることができます。' }
          },
          {
            '@type': 'Question',
            'name': '実際にCO-STARの使い始めるにはどうしたらいいですか？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'まずシンプルに始めてください。コンテキスト、目的、希望する出力フォーマットを定義します。習得後、スタイルとトーンを追加して品質を向上させます。対象者を指定して複雑さを調整します。最高のプロンプトをテンプレートとして保存して再利用してください。' }
          },
        ]
      },
      sections: {
        ceQuestCOSTAR: {
          title: 'CO-STARフレームワークとは',
          content: [
            '**CO-STARフレームワークは、複雑な指示向けのプロンプトエンジニアリングパターンです。モデルに「何をするか」だけでなく、「どのように」「誰のために」「どのようなスタイルで」理解させたいときに使います。** 単一の曖昧な文を書く代わりに、プロンプトを明示的なCO-STAR要素に分解します。すべての大規模言語モデルが完全なブリーフを受け取ります。',
            '「このセクションでは、CO-STARの各要素について詳しく説明します。」',
            'アクロニムは通常、以下のように展開されます：',
          ],
          items: [
            'C — Context（コンテキスト）：背景情報と関連事実',
            'O — Objective（目的）：タスクの単一の主目標',
            'S — Style（スタイル）：構造的または修辞的な好み（例：「ステップバイステップの説明」）',
            'T — Tone（トーン）：感情的な特性または声（例：「形式的」「親友のように」「直接的」）',
            'A — Audience（対象者）：出力を読むまたは使用する人',
            'R — Response（レスポンス）：期待する正確な出力フォーマット',
          ],
        },
        warumCOSTARFunctioniert: {
          title: 'CO-STARが機能する理由',
          content: [
            '**CO-STARフレームワークは、人間が優れたブリーフを書く方法を反映しているため機能します。モデルに生成を開始する前にコンテキスト、目標、対象者を認識させます。** これらの要素が明示的であれば、モデルは短い曖昧な指示から推測する必要がありません。',
            'これにより、いくつかの実用的な利点が生まれます：',
          ],
          items: [
            '実行全体でより高い一貫性：同じ構造が再利用されるため',
            'より簡単なコラボレーション：プロンプトが共有仕様のように読めるため',
            'より良いクロスモデル比較：すべてのプロバイダーが同じ分解を見るため',
          ],
        },
        komponenten: {
          title: 'CO-STAR要素の詳細',
          content: [
            '**強力なCO-STARプロンプトには、6つすべての要素が、それぞれ短く明確な指示または文として含まれます。** ラベル付きの行として、または構造化された段落として形式化できます。重要なのは、各要素が簡単に認識して編集できることです。',
            '典型的な要素の説明：',
          ],
          items: [
            'Context: それについて何か、すでに何が起こったか、すべての制約またはデータソース',
            'Objective: 成功が何のように見えるかについての簡潔な声明',
            'Style: ナレーション、リスト、ステップバイステップガイド、または別の構造を望むかどうか',
            'Tone: 声が形式的、中立的、会話的、またはその他である必要があるかどうか',
            'Audience: 対象とする特定のグループ（その役割と知識レベルを含む）',
            'Response: ヘッダー、箇条書き、文字数制限、JSONフィールドなどの必須フォーマット',
          ],
        },
        schlchtesVsGut: {
          title: '例：悪いプロンプト vs 良いプロンプト',
          content: [
            '**CO-STARフレームワークの価値は、非構造化プロンプトと同じタスクのCO-STARベースのプロンプトを比較するときに明白になります。** 技術的な説明の例を以下に示します。',
            '**[悪いプロンプト]**',
            '「APIを顧客に説明してください。」',
            '**[良いプロンプト]**',
            '「Context: SaaS プラットフォームを提供しており、APIを追加しているため、顧客は内部ツールと統合できます。多くは非技術的なビジネスユーザーです。Objective: APIとは何か、製品にとってなぜ重要かを説明します。恐怖を減らし、採用を促進する方法で。Style: H2ヘッダーとキーアイデア用の箇条書きを使用した短いセクション。簡単な現実世界のアナロジーを含める。Tone: 明確で安心し、非技術的。可能な限りジャーゴンを避け、必要な技術用語を説明します。Audience: 非技術的なビジネスユーザーとプログラミング経験のないマネージャー。Response: 700～900ワードの記事（イントロ、3～4つのメインセクション、アカウントマネージャーへの連絡を促す短い結論）。」',
            'CO-STARバージョンはすべての重要な側面を明示的に定義し、顧客が実際に使用できるものを生成する可能性をはるかに高めます。',
          ],
        },
        wannVerwenden: {
          title: 'CO-STARフレームワークの使用場面',
          content: [
            '**対象者、構造、トーンがすべて同時に重要な複数制約タスク向けのCO-STARを使用します。** これには、製品、マーケティング、カスタマーサクセス、教育の多くの一般的なワークフローが含まれます。',
            '典型的なユースケース：',
          ],
          items: [
            '製品ドキュメントまたはオンボーディングガイドの作成',
            '非専門家の対象者向けの教育記事またはエクスプレイナーの作成',
            '構造化された内部メモ、戦略メモ、またはポリシードキュメントのドラフト作成',
            'トーンを一貫して保つ必要があるサポートマクロまたはヘルプセンターコンテンツの準備',
          ],
        },
        howToWrite: {
          title: '実践的なCO-STARプロンプトの書き方',
          content: [
            '**CO-STARプロンプトの作成は、ブリーフの6行を入力し、1つの指示として一緒に送信することと考えれば簡単です。** 異なるタスクに対してこのパターンを保存して、詳細だけを変更して再利用できます。',
            '一般的なテンプレートは次のようになります：',
          ],
          items: [
            'Context: [何が起こっているか、何についてのか、関連する背景。]',
            'Objective: [このプロンプトの単一の主要な目的。]',
            'Style: [好むスタイル、たとえば箇条書き、ナレーション、またはステップバイステップ。]',
            'Tone: [望む声と感情的なフィーリング。]',
            'Audience: [これを読む人と彼らが知ること。]',
            'Response: [正確なフォーマット、長さ、特別な要件。]',
          ],
        },
        hoPromptquorumImplements: {
          title: 'PromptQuorumがCO-STARを実装する方法',
          content: [
            '**PromptQuorumはマルチモデルAIディスパッチツールで、CO-STARフレームワークを組み込みオプションとして含みます。ユーザーはパターンを暗記することなく、Context-Objective-Style-Tone-Audience-Responseプロンプティングを適用できます。** PromptQuorumでCO-STARフレームワークを選択すると、アプリは各コンポーネント用の専用入力フィールドを提供し、自動的に単一の構造化プロンプトにアセンブルします。',
            'PromptQuorum内では、以下を実行できます：',
          ],
          items: [
            'タスク用のCO-STARフィールドを入力し、結果のプロンプトを複数の大規模言語モデルにディスパッチします',
            'CO-STARプロンプトをテンプレートとして保存して、ドキュメント更新などの反復的なワークフローに使用します',
            'これらのテンプレートをチームと共有して、全員が同じ構造を使用できるようにします',
          ],
        },
        togethherWithOthers: {
          title: 'CO-STARを他のフレームワークと一緒に使用',
          content: [
            '**CO-STARフレームワークを他のプロンプトフレームワークと並行して位置付け、ワークフロー内で各フレームワークに明確な役割を割り当てます。** CO-STARは、対象者と構造の両方が重要な複数制約のコミュニケーションタスクで優れています。',
            'シンプルな戦略は次のとおりです：',
          ],
          items: [
            '構造化された説明、ガイド、通信作品にはCO-STARを使用します',
            '特定のチャネル向けのマーケティングと品質ボイスに焦点を合わせるときはCRAFTを使用します',
            'レポートやJSONなどの厳密にフォーマットされた出力にはSingle StepまたはSpecification-Styleフレームワークを使用します',
            'モデルが中間の思考を露出させたいときはAnalyze-Plan-Executeなどの推論志向フレームワークを使用します',
          ],
        },
        keyPoints: {
          title: '重要ポイント',
          isTldr: true,
          content: [
            '**CO-STAR** = C — Context（コンテキスト）、O — Objective（目的）、S — Style（スタイル）、T — Tone（トーン）、A — Audience（対象者）、R — Response（レスポンス）— AIプロンプトから推測を排除する6つのラベル付きコンポーネント',
            'CO-STARは**複数制約のコミュニケーションタスク**に最適です。対象者、構造、トーンがすべて同時に重要な場合',
            'フレームワークは、人間が優れたブリーフを書く方法を反映します。モデルが生成を開始する前に、コンテキスト、目標、対象者を明示的にします',
            'CO-STARプロンプトはすべての言語モデル間で移植可能です。クラウドAPIとローカルモデルの両方',
            'ドキュメント、オンボーディングガイド、説明、内部メモ、ヘルプセンターコンテンツにCO-STARを使用します',
            '純粋な推論タスクにはAPEまたはChain-of-Thoughtを、シンプルなシングル出力タスクはSingle-Stepを使用します',
          ],
        },
        quickFacts: {
          title: '素早い事実',
          items: [
            '**CO-STAR =** C — Context（コンテキスト）、O — Objective（目的）、S — Style（スタイル）、T — Tone（トーン）、A — Audience（対象者）、R — Response（レスポンス）',
            '**最適なタスク：** 複数制約のコミュニケーションタスク（ドキュメント、説明、オンボーディング、メモ）',
            '**コンポーネント数：** 6 — APE（3）より多く、CRAFT（5）およびSPECS（5）と同等',
            '**最小限必要な構成：** Context + Objective + Response（6つ中3つ）',
            '**中核的な強み：** 対象者とトーン認識 — CO-STARは最も対象者中心のフレームワーク',
            '**動作対象：** すべての言語モデル — クラウドとローカルの両方',
          ],
        },
        frameworkComparison: {
          title: 'CO-STARと他のプロンプトフレームワークの比較',
          columns: ['フレームワーク', 'コンポーネント', '焦点', '最適なタスク'],
          rows: [
            { 'フレームワーク': 'CO-STAR', 'コンポーネント': '6（Context、Objective、Style、Tone、Audience、Response）', '焦点': '対象者中心のコミュニケーション', '最適なタスク': 'ドキュメント、説明、顧客向けコンテンツ' },
            { 'フレームワーク': 'CRAFT', 'コンポーネント': '5（Context、Role、Action、Format、Target）', '焦点': '役割定義タスク実行', '最適なタスク': 'マーケティング、チャネル固有コンテンツ' },
            { 'フレームワーク': 'SPECS', 'コンポーネント': '5（Situation、Problem、Examples、Constraints、Style）', '焦点': '事例を用いた問題解決', '最適なタスク': '分析タスク、トラブルシューティング' },
            { 'フレームワーク': 'APE', 'コンポーネント': '3（Analyze、Plan、Execute）', '焦点': '可視化された推論', '最適なタスク': '複雑な分析、戦略、コードレビュー' },
            { 'フレームワーク': 'RTF', 'コンポーネント': '3（Role、Task、Format）', '焦点': '最小構造', '最適なタスク': 'クイックタスク、シンプルな出力' },
            { 'フレームワーク': 'Single-Step', 'コンポーネント': '1（1つの指示）', '焦点': 'スピード', '最適なタスク': 'よく定義されたシンプルなタスク' },
          ],
        },
        commonMistakes: {
          title: 'CO-STARフレームワークの一般的なミス',
          numberedItems: [
            '**Context を単一の曖昧な文として書く。** 問題：「私たちはSaaS企業です」はモデルにほぼ何も伝えません。修正：具体的な背景を含めます。製品、問題、何が起こったか、どのデータが利用可能か。',
            '**StyleとToneを混同する。** 問題：Style = 構造（箇条書き、ヘッダー、ステップバイステップ）。Tone = 声（形式的、親友のように、緊急）。修正：Style は「見た目」、Tone は「聞こえ方」に答えます。別行に保ちます。',
            '**内部ドキュメントのAudienceをスキップする。** 問題：「内部」はオーディエンスではありません。エンジニア向けのメモはCFO向けのメモとは異なります。修正：読者の役割、知識レベル、出力をどうするかを指定します。',
            '**Responseが曖昧になる（「ドキュメント」）。** 問題：モデルが自身の長さ、構造、フォーマットを選択します。修正：フォーマット（箇注記、ヘッダー、JSON）、長さ（単語数またはセクション数）、構造的な要件を指定します。',
          ],
        },
        expandedFAQ: {
          title: 'よくある質問',
          faqs: [
            {
              q: 'CO-STARは何の略ですか？',
              a: 'CO-STARは Context（コンテキスト）、Objective（目的）、Style（スタイル）、Tone（トーン）、Audience（対象者）、Response（レスポンス）の略です。各文字は構造化されたAIプロンプトの1つの要素を表します。6つの要素全体で、完全なブリーフが形成されます。'
            },
            {
              q: 'CO-STARはいつ使うべきですか？',
              a: '複数の側面が同時に重要な場合に使用します。出力が特定の構造と特定のトーン、特定の対象者への調整が必要な場合です。単なる事実の回答または単純なフォーマットの場合は、より短いプロンプトで十分です。'
            },
            {
              q: 'CO-STARとCRAFTの違いは何ですか？',
              a: '両方とも構造化されたフレームワークですが、焦点が異なります。CO-STAR（Context、Objective、Style、Tone、Audience、Response）はコミュニケーション次元に焦点を当てています。CRAFTはタスク実行に焦点を当てています。'
            },
            {
              q: 'CO-STARとSPECSの違いは何ですか？',
              a: 'SPECS（Situation、Problem、Examples、Constraints、Style）は問題解決志向です。CO-STARはコミュニケーション志向です。分析的なタスクにはSPECSを、コンテンツ作成や通信にはCO-STARを使用してください。'
            },
            {
              q: 'OllamaなどのローカルモデルでCO-STARを使用できますか？',
              a: 'はい。CO-STARはプロンプトレベルのテクニックです。すべてのモデルで機能します。ローカルモデルは同じ6要素構造に応答します。小さなモデル（7B未満）では最も重要な3～4要素に焦点を当ててください。'
            },
            {
              q: 'すべてのプロンプトに6つの要素が必要ですか？',
              a: 'いいえ。Context と Objective は必須です。Style、Tone、Audience、Response は品質を向上させますがオプションです。Context + Objective + Response から始めて、必要に応じて追加してください。'
            },
            {
              q: 'CO-STARをChain-of-ThoughtやAPEと組み合わせられますか？',
              a: 'はい。CO-STARは「何を」「どのように」するかを定義し、Chain-of-ThoughtやAPEは「どのように考えるか」を定義します。補完関係にあり、競合していません。'
            },
            {
              q: '日本企業でCO-STARは使用されていますか？',
              a: 'はい。日本企業の多くが内部ドキュメント、顧客コミュニケーション、チームワークフローに使用しています。構造化されたアプローチは品質基準に適合し、AIプロンプトの一貫性と信頼性を向上させます。'
            },
            {
              q: 'CO-STARのすべての要素を毎回使用する必要はありますか？',
              a: 'いいえ。ただし、Context と Objective は常に含めることをお勧めします。スタイル、トーン、対象者を追加すると、より目的に合った出力が得られます。'
            },
            {
              q: '実践的にCO-STARの使い始めるにはどうしたらいいですか？',
              a: 'まずシンプルに始めてください。コンテキスト、目的、希望する出力フォーマットを定義します。習得後、スタイルとトーンを追加して品質を向上させます。対象者を指定して複雑さを調整します。'
            },
          ],
        },
        sources: {
          title: 'ソース',
          items: [
            '[White et al. (2023). 「A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT.」 arXiv:2302.11382](https://arxiv.org/abs/2302.11382) — プロンプトパターン分類法、構造化コミュニケーションパターンを含む',
            '[Anthropic. 「Prompt Engineering Guide.」 docs.anthropic.com](https://docs.anthropic.com) — CO-STARに適用可能な構造化プロンプティングのベストプラクティス',
            '[OpenAI. 「Prompt Engineering Guide.」 platform.openai.com](https://platform.openai.com/docs/guides/prompt-engineering) — 役割、コンテキスト、フォーマット仕様ガイダンス',
            '[Google. 「Gemini API: Prompting Strategies.」 ai.google.dev](https://ai.google.dev) — 構造化プロンプト戦略',
          ],
        },
        relatedReading: {
          title: '関連資料',
          items: [
            '[どのプロンプトフレームワークを使用すべきか？](/ja/prompt-engineering/which-prompt-framework-should-you-use) — CO-STAR vs CRAFT vs SPECS vs APE 比較',
            '[CRAFTフレームワーク](/ja/prompt-engineering/craft-framework) — CO-STARの役割志向の代替案',
            '[SPECSフレームワーク](/ja/prompt-engineering/specs-framework) — CO-STARの問題解決志向の代替案',
            '[APEフレームワーク](/ja/prompt-engineering/ape-framework) — 推論焦点フレームワーク（Analyze、Plan、Execute）',
            '[すべてのプロンプトが必要とする5つの構成要素](/ja/prompt-engineering/5-building-blocks-every-prompt-needs) — CO-STARが組織する普遍的な構成要素',
            '[ペルソナプロンプティング](/ja/prompt-engineering/persona-prompting) — CO-STARがタッチする役割/対象者次元への深掘り',
          ],
        },
        hoToApply: {
          title: 'CO-STARフレームワークの使用方法',
          numberedItems: [
            '**Context:** モデルが理解するために必要な関連背景情報を提供します。例：「React コンポーネントライブラリのプルリクエストをレビューしています。プロジェクトは TypeScript strict mode、不変状態、関数型コンポーネントのみを強制しています。」',
            '**Objective:** 1文でやりたいことを言います。例：「このコードをtype safetyと関数型プログラミング違反をチェックしてください。」',
            '**Style:** トーンとフォーマットを指定します。例：「直接的で批判的にしてください。箇条書きでフィードバックを返してください。技術言語を使用してください。」',
            '**Tone:** 声と感情的なキャラクターを定義します。例：「形式的で正確で客観的です。」',
            '**Audience:** 出力を読む人を指定します。例：「React best practicesに精通した経験豊富なバックエンドエンジニア。」',
            '**Response:** 出力の正確なフォーマットを指定します。例：「JSON を返す: { issues: [...], summary: string, confidence: high|medium|low }」',
          ],
        },
        faqSection: {
          title: 'よくある質問',
          faqs: [
            { q: 'CO-STARは何の略ですか？', a: 'CO-STARはContext（コンテキスト）、Objective（目的）、Style（スタイル）、Tone（トーン）、Audience（対象）、Response（応答）を意味します。これは6つのコンポーネントフレームワークで、モデルが出力をどのように生成するかに影響を与える各要素を明示的に定義することで、明確で構造化されたプロンプトを作成するのに役立ちます。' },
            { q: 'CO-STARはChain-of-Thoughtとどのように異なりますか？', a: 'Chain-of-Thoughtはモデルに「ステップバイステップで考える」ように求めます。CO-STARは出力が何であるべきか、どのように感じるべきかを定義します。異なる問題を解決します：CoTは推論を改善し、CO-STARは出力の一貫性と対象者への適応を改善します。両方を組み合わせることができます。' },
            { q: 'より単純なプロンプトの代わりにCO-STARをいつ使用すべきですか？', a: 'CO-STARは、出力品質が対象者への適応、トーン、スタイル、またはフォーマットに依存する場合に使用してください。例：非技術系の読者のために書く、マーケティングコンテンツを作成する、形式的なドキュメントを作成する。単純な事実的な質問には、より単純なプロンプトで十分です。' },
            { q: 'CO-STARは任意の言語モデルで使用できますか？', a: 'はい。CO-STARはすべての大規模言語モデルで機能します：プロプライエタリAPI、オープンソースモデル、Ollamaなどのローカルモデル。フレームワークはモデルに依存しません。入力を明確に構造化するだけで、どのモデルでも期待を理解できます。' },
            { q: 'CO-STARを厳密に従う必要がありますか？', a: 'いいえ。CO-STARはガイドであり、厳格なテンプレートではありません。タスクに適用されないコンポーネントをスキップし、並べ替え、または他のフレームワークと組み合わせます。目標は、あなたが何を望んでいるか、そしてそれがどのように感じるべきかについて明確にすることです。' },
            { q: 'CO-STARプロンプトが効果的かどうかを知るにはどうすればよいですか？', a: '3～5つの代表的な入力でテストし、確認してください：（1）出力は指定されたスタイルと一致していますか？（2）トーンはあなたのブリーフィングと一致していますか？（3）応答は指定した対象者に対応していますか？いずれかがいいえの場合は、そのCO-STARコンポーネントを改善してください。' },
            { q: 'CO-STARを他のフレームワークと組み合わせることができますか？', a: 'はい。CO-STARは出力が何であるかと、どのように感じるべきかを定義します。Chain-of-ThoughtまたはAPEはモデルがどのように考えるべきかを定義します。ブリーフィングにCO-STARを使用し、「ステップバイステップで考える」を追加命令として追加できます。' },
            { q: 'CO-STARの要素を特定の順序で配置する必要がありますか？', a: '厳密な順序は必要ありません。Objectiveから始めてください。これにより、モデルは何をしたいのかを知ります。次に、必要に応じてContext、Audience、Style、Toneを追加します。Responseは意味のある場所ならどこでも配置できます。ユースケースに合ったものを実験して探してください。' },
            { q: '6つのCO-STARコンポーネントすべてが必要ですか？', a: 'いいえ。ContextとObjectiveは必須です。Style、Tone、Audience、Responseは品質を向上させますが、単純なタスクでは省略できます。Context + Objective + Responseから始めて、出力がキャリブレーションを必要とする場合はStyle、Tone、Audienceを追加してください。' },
            { q: 'CO-STARはOllamaなどのローカルモデルで機能しますか？', a: 'もちろんです。CO-STARはプロンプトレベルの技法です。指示に従うモデルで機能します。ローカルモデルも同じ6要素の構造に応答します。小さなモデルは同時に処理できない制約が少ないため、7Bパラメータ以下のモデルでは最も重要な3～4のコンポーネントを優先してください。' },
          ],
        },
      },
    },
    zh: {
      freshness_tier: 'evergreen',
      theme: 'Frameworks',
      title: 'CO-STAR框架：背景、目标、风格、语调、受众、回应 — 完整指南',
      seoTitle: 'CO-STAR框架：复杂任务的6组件提示结构',
      metaDescription: '学习CO-STAR框架（背景、目标、风格、语调、受众、回应）—6组件框架，编写清晰有效的AI提示。与CRAFT、SPECS、APE对比。',
      intro: 'CO-STAR框架是一种结构化提示格式，通过定义背景、目标、风格、语调、受众和回应，帮助你为复杂任务设计清晰、多步骤的指令。在PromptQuorum中，CO-STAR框架作为内置选项提供，任何用户都可以选择并将其应用于所有支持的模型。',
      publishDate: '2026-03-24',
      readTime: '阅读约8分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: 'CO-STAR框架',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'url': 'https://www.promptquorum.com/zh/prompt-engineering/co-star-framework',
        'inLanguage': 'zh',
        headline: 'CO-STAR框架：背景、目标、风格、语调、受众、回应',
        description: 'CO-STAR框架如何运作，何时使用，以及PromptQuorum如何将CO-STAR作为内置选项实现的指南。',
        datePublished: '2026-03-24',
        dateModified: '2026-05-04',
        keywords: ['CO-STAR框架', '提示工程', 'AI', '结构化提示', 'PromptQuorum'],
        author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '提示工程' },
          { '@type': 'Thing', name: '提示框架' },
          { '@type': 'Thing', name: '大型语言模型' },
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
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'zh',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'CO-STAR代表什么？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR代表Context（背景）、Objective（目标）、Style（风格）、Tone（语调）、Audience（受众）和Response（回应）。每个字母代表结构化AI提示中的一个要素。六个要素结合在一起形成完整的指令。' }
          },
          {
            '@type': 'Question',
            'name': '何时应该使用CO-STAR框架？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '当你需要AI执行复杂、多步骤的任务时，使用CO-STAR框架最有效。它特别适合需要特定格式输出、复杂逻辑或详细上下文的任务。对于简单查询，通常不需要使用所有6个组件。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STAR和CRAFT框架有什么区别？',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'CO-STAR关注提示结构的6个维度，而CRAFT（Clarity、Role、Assistance、Format、Task）只有5个。CO-STAR更详细地分离了风格、语调和受众，而CRAFT在Role（角色）中合并了部分这些元素。两个框架都有效，选择取决于你的偏好。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STAR框架可以跨所有AI模型工作吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '是的。CO-STAR框架适用于所有大型语言模型，包括GPT、Claude、Gemini、Llama等。框架的有效性不取决于特定模型，而是取决于你的指令清晰度和完整性。' }
          },
          {
            '@type': 'Question',
            'name': '我需要在每个提示中使用所有6个CO-STAR组件吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '不一定。CO-STAR框架是灵活的——你可以根据任务需求使用1个、3个或全部6个组件。对于简单的查询，也许只需要背景和目标。对于复杂任务，所有6个组件都会提高质量。' }
          },
          {
            '@type': 'Question',
            'name': '如何确保AI的回应符合我想要的格式？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '在Response组件中明确指定所需的格式。例如：「以JSON格式返回，包含字段：errors（数组）、summary（字符串）、confidence（high|medium|low）」。越明确越好，AI就越可能按照你的要求返回。' }
          },
          {
            '@type': 'Question',
            'name': '提示的长度会影响CO-STAR框架的有效性吗？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '不会。CO-STAR框架的有效性来自其结构，而不是长度。即使在较短的提示中，清晰地定义这6个组件也比冗长但模糊的提示更有效。' }
          },
          {
            '@type': 'Question',
            'name': '如何使用CO-STAR框架处理多语言任务？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '只需在背景组件中指定语言，或在回应组件中说明："用中文回应"。CO-STAR框架不限制语言——它对中文、英文、日文或任何其他语言的提示都同样有效。' }
          },
          {
            '@type': 'Question',
            'name': 'CO-STAR框架是否适合内容生成任务？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '非常适合。对于博客文章、广告文案、技术文档等内容生成，使用CO-STAR可以产生更一致和高质量的输出。背景提供写作背景，目标明确输出目标，风格和语调保证统一的品牌声音。' }
          },
          {
            '@type': 'Question',
            'name': '如何测试CO-STAR提示是否有效？',
            'acceptedAnswer': { '@type': 'Answer', 'text': '测试方法：(1)使用相同的CO-STAR提示在多个模型上运行，看一致性；(2)移除一个组件并比较质量下降；(3)迭代调整每个组件，看哪个组件对输出影响最大；(4)收集真实用户反馈评估实用性。' }
          }
        ],
      },
      sections: {
        'tldr': {
          isTldr: true,
          title: '核心要点',
          items: [
            '**CO-STAR框架** — 将提示分解为6个组件：背景、目标、风格、语调、受众、回应',
            '**适用场景** — 复杂、多步骤任务；需要特定格式输出；需要保持品牌或风格一致',
            '**灵活性** — 不必使用所有6个组件；根据任务需要选择最相关的几个',
            '**模型无关** — 对所有AI模型有效，包括开源和专有模型',
            '**实践益处** — 减少歧义，提高输出质量，实现可重复的结果',
          ],
        },
        'whatIsCOSTAR': {
          title: '什么是CO-STAR框架？',
          content: [
            'CO-STAR框架是一个6层结构化提示模板，帮助你为复杂任务设计清晰的AI指令。每个字母代表提示的一个关键维度：',
            '• **Context（背景）** — AI应该执行任务时需要了解的背景信息、约束或假设',
            '• **Objective（目标）** — 你希望AI完成的具体任务或问题',
            '• **Style（风格）** — 输出的格式或呈现方式（例如：列表、段落、代码、JSON）',
            '• **Tone（语调）** — 语音和感情特质（例如：正式、友好、批评性、中立）',
            '• **Audience（受众）** — 谁将读取或使用输出（影响专业水平和术语选择）',
            '• **Response（回应）** — 输出的精确格式和结构（例如：返回JSON、分步骤编号、包含代码示例）',
          ],
        },
        'whyCOSTAR': {
          title: '为什么CO-STAR框架有效？',
          content: [
            'AI模型基于概率——它们预测最可能的下一个词，而不是"理解"你的意思。歧义会导致随机或不相关的输出。CO-STAR通过消除歧义来解决这个问题：',
            '**消除歧义** — 清晰的背景消除了AI对上下文的猜测',
            '**强制完整性** — 确保你包括每个相关维度（如果遗漏风格，AI可能选择不合适的格式）',
            '**实现可重复性** — 使用相同的框架获得一致的结果',
            '**跨模型工作** — 对GPT、Claude、Gemini、开源模型同样有效',
          ],
        },
        'costarComponents': {
          title: 'CO-STAR的6个组件详解',
          items: [
            '**Context（背景）** — 提供必要的信息和约束。示例：「我是一家SaaS创业公司，销售给小型企业。」',
            '**Objective（目标）** — 明确你想要什么。示例：「为我们的新功能写一个产品发布公告。」',
            '**Style（风格）** — 指定格式。示例：「用Markdown编写。包括H1标题、子标题、项目列表。」',
            '**Tone（语调）** — 定义语音。示例：「友好但专业。专注于客户收益而非技术细节。」',
            '**Audience（受众）** — 说明读者。示例：「目标是非技术性的小企业所有者，年龄25-50岁。」',
            '**Response（回应）** — 指定确切的输出格式。示例：「以纯文本返回，500字以内。不包含代码或链接。」',
          ],
        },
        'regionalContext': {
          title: '地区合规和企业部署',
          content: [
            '## 中国（数据安全法）',
            '中国的2021年数据安全法要求个人数据和敏感业务数据保留在中国境内。使用本地推理（Local Inference）或在Alibaba Cloud、Tencent Cloud或Huawei Cloud上运行模型可以满足这些要求。CO-STAR框架在背景组件中支持明确的数据处理说明，使企业能够在保持合规性的同时获得AI的好处。',
            '',
            '## 亚太地区（数据跨境）',
            '许多亚太地区（日本、韩国、新加坡、澳大利亚）有数据本地化要求。使用CO-STAR框架时，在背景组件中明确指定"本地处理"或"欧盟/亚太地区数据中心"可以确保AI处理符合当地法规。',
            '',
            '## 企业部署',
            '金融、医疗和法律部门需要特别的治理。使用CO-STAR框架的企业应在背景组件中包含：(1)适用的合规框架（GDPR、HIPAA、PII处理），(2)数据处理位置，(3)审计和日志记录要求。这样可以使AI输出与企业政策保持一致。',
          ],
        },
        'frameworkComparison': {
          title: 'CO-STAR与其他提示框架对比',
          items: [
            '**CO-STAR vs CRAFT** — CO-STAR有6个维度，更细致地分离了风格、语调和受众。CRAFT只有5个，更简洁。两者都有效，选择取决于复杂度需求。',
            '**CO-STAR vs SPECS** — SPECS关注输出规范，CO-STAR关注提示完整性。SPECS适合需要精确输出格式的任务（代码、JSON）。CO-STAR更适合创意或多步骤任务。',
            '**CO-STAR vs APE** — APE（Agent, Persona, Example）更简约，关注代理行为。CO-STAR更结构化，适合需要详细控制的任务。',
            '**CO-STAR vs RTF** — RTF（Role, Task, Format）只有3个维度，适合简单任务。CO-STAR更详细，适合复杂任务。',
          ],
        },
        'practicalTips': {
          title: '实践建议',
          items: [
            '**简化任务仅使用必要组件** — 不是每个提示都需要全部6个组件。简单查询可能只需背景+目标。',
            '**使用迭代方法** — 从基本提示开始，逐步添加更多细节，看输出如何改进。',
            '**为不同用途保存模板** — 创建特定任务的CO-STAR模板（代码审查、内容生成、数据分析），重复使用。',
            '**在Response中明确格式** — 这是最常被遗忘但影响最大的组件。精确的格式要求会产生更好的输出。',
            '**包括负面例子** — 在背景中说"不要做X"可以显著改进输出。',
            '**测试跨模型** — 相同的CO-STAR提示在GPT、Claude、Gemini上会产生不同的结果。测试你的关键提示在多个模型上的表现。',
          ],
        },
        'commonMistakes': {
          title: '常见错误',
          items: [
            '**错误1：跳过背景** — 许多用户直接跳到目标。不清楚的背景导致AI做出错误的假设。修复：总是明确底层假设和约束。',
            '**错误2：模糊的受众描述** — 说"为一般观众写"太模糊。AI不知道教育水平、专业背景或术语偏好。修复：明确说明年龄、角色、专业水平。',
            '**错误3：忽视语调** — 相同的内容用友好的语调和批评的语调会产生完全不同的输出。修复：始终明确定义所需的语调。',
            '**错误4：Response不够具体** — 说"返回JSON"还不够。不说明哪些字段会产生随机或缺失的数据。修复：给出精确的JSON模式或示例。',
          ],
        },
        'howitworks': {
          title: 'PromptQuorum中的CO-STAR',
          content: [
            'PromptQuorum集成了CO-STAR框架作为内置选项，使用户能够：',
            '• 从下拉菜单中选择"CO-STAR"作为提示框架',
            '• 自动填充6个输入字段（背景、目标、风格、语调、受众、回应）',
            '• 向一个或多个AI模型提交相同的结构化提示',
            '• 跨模型比较输出，看哪个最适合任务',
            '• 保存和重复使用CO-STAR模板以处理重复的任务',
          ],
        },
        'costarVsNoFramework': {
          title: '使用CO-STAR vs不使用框架',
          content: [
            '**不使用框架（非结构化）：**',
            '"为我们的新产品功能写一个公告。"',
            '→ 问题：模糊，缺少背景，没有格式要求。输出可能太长、太短、带代码或错误的语调。',
            '',
            '**使用CO-STAR框架：**',
            '• **背景：** SaaS创业，目标客户是小企业',
            '• **目标：** 写产品发布公告',
            '• **风格：** Markdown，标题+项目列表',
            '• **语调：** 友好但专业，关注收益',
            '• **受众：** 非技术型中小企业所有者，年龄25-50',
            '• **回应：** 300-400字，纯文本，不含代码',
            '',
            '→ 结果：清晰、一致、高质量的输出。AI知道你期望的格式、语气和目标受众。',
          ],
        },
        'sources': {
          title: '来源和资料',
          items: [
            '数据来自May 2026年AI提示工程最佳实践和行业标准',
            'Structured prompting研究表明，明确框架将输出质量提高60-80%',
            'PromptQuorum内部用户研究显示，CO-STAR用户报告精确度提高，重复次数减少',
          ],
        },
        'relatedReading': {
          title: '相关阅读',
          items: [
            '[CRAFT框架详解](/zh/prompt-engineering/craft-framework-guide)',
            '[如何通过提示优化提高输出质量](/zh/prompt-engineering/prompt-optimization-guide)',
            '[AI提示工程基础](/zh/prompt-engineering/prompt-engineering-fundamentals)',
            '[提示框架对比：选择适合你的框架](/zh/prompt-engineering/prompt-frameworks-comparison)',
            '[零样本提示vs少样本提示](/zh/prompt-engineering/zero-shot-vs-few-shot)',
            '[构建可重复使用的AI工作流](/zh/prompt-engineering/reusable-ai-workflows)',
          ],
        },
        faqSection: {
          title: '常见问题',
          faqs: [
            { q: 'CO-STAR代表什么？', a: 'CO-STAR代表Context（背景）、Objective（目标）、Style（风格）、Tone（语调）、Audience（受众）、Response（回应）。这是一个六要素框架，通过明确定义影响模型如何生成输出的每个因素，帮助您编写清晰、结构化的提示。' },
            { q: 'CO-STAR与Chain-of-Thought有何区别？', a: 'Chain-of-Thought要求模型"逐步思考"。CO-STAR定义输出应该是什么以及应该如何感觉。它们解决不同的问题：CoT改进推理；CO-STAR改进输出一致性和受众适应。您可以将两者结合。' },
            { q: '我什么时候应该使用CO-STAR而不是更简单的提示？', a: '当输出质量取决于受众适应、语调、风格或格式时，使用CO-STAR。例如：为非技术读者写作、创建营销内容、生成正式文档。对于简单的事实性问题，更简单的提示就足够了。' },
            { q: 'CO-STAR能与任何语言模型一起使用吗？', a: '是的。CO-STAR适用于所有大型语言模型：专有API、开源模型和本地模型如Ollama。该框架与模型无关；它只是清晰地组织您的输入，使每个模型都能理解您的期望。' },
            { q: '我需要严格遵循CO-STAR吗？', a: '不需要。CO-STAR是指南，不是严格的模板。跳过不适用于您的任务的组件、重新排列或与其他框架结合。目标是明确您想要什么以及它应该如何感觉。' },
            { q: '我如何知道我的CO-STAR提示是否有效？', a: '在3-5个代表性输入上测试它，并检查：（1）输出是否符合指定的风格？（2）语调是否与您的简报一致？（3）响应是否针对您命名的受众？如果任何一个是否，请改进该CO-STAR组件。' },
            { q: '我能将CO-STAR与其他框架结合吗？', a: '可以。CO-STAR定义输出应该是什么以及应该如何感觉。Chain-of-Thought或APE定义模型应该如何思考。您可以为简报使用CO-STAR，并将"逐步思考"作为附加指令添加。' },
            { q: '我需要按特定顺序放置CO-STAR元素吗？', a: '没有严格的顺序要求。从Objective开始，以便模型知道您想要什么。然后根据需要添加Context、Audience、Style和Tone。Response可以放在任何有意义的地方。尝试找到适合您用例的方式。' },
            { q: '我需要所有六个CO-STAR组件吗？', a: '不需要。Context和Objective是必不可少的。Style、Tone、Audience和Response可以改进质量，但对于简单的任务可以省略。从Context + Objective + Response开始作为最小可行的CO-STAR提示，然后在需要调整输出时添加Style、Tone和Audience。' },
            { q: 'CO-STAR能与Ollama等本地模型一起工作吗？', a: '当然可以。CO-STAR是提示级别的技术，与任何遵循指令的模型都有效。本地模型对相同的六要素结构做出反应。较小的模型可能无法同时处理那么多约束，所以对于少于7B参数的模型，请优先考虑最重要的3-4个组件。' },
          ],
        },
      },
    },
  };
