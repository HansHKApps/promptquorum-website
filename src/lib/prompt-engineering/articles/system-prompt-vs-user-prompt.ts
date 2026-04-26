// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: system-prompt-vs-user-prompt
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'semi_annual',
    theme: 'Fundamentals',
    title: 'System Prompt vs User Prompt: What\'s the Difference in 2026',
    intro: 'System prompts define how an AI model thinks and behaves throughout an entire session; user prompts define what it does right now. Learn the difference, when to use each, how they interact, and why PromptQuorum shows you both.',
    publishDate: '2026-03-22',
    dateModified: '2026-04-12',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'System Prompt',
    seoTitle: 'System vs User Prompt 2026: What Each One Controls',
    metaDescription: 'System prompts set AI behavior for the entire session; user prompts define each task. Covers structural differences, API usage, and Claude examples.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference',
      'inLanguage': 'en',
      headline: 'System Prompt vs User Prompt: What\'s the Difference in 2026',
      description: 'System prompts define how an AI model thinks and behaves; user prompts define what it does right now. Learn the difference and how they interact.',
      datePublished: '2026-03-22',
      dateModified: '2026-04-12',
      keywords: ['system prompt', 'user prompt', 'prompt engineering', 'LLM behavior', 'GPT-4o', 'Claude', 'prompt structure', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      mentions: [
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'OpenAI' },
        { '@type': 'Thing', name: 'GPT-4o' },
        { '@type': 'Thing', name: 'Anthropic' },
        { '@type': 'Thing', name: 'Claude 4.6 Sonnet' },
        { '@type': 'Thing', name: 'Google DeepMind' },
        { '@type': 'Thing', name: 'Gemini 1.5 Pro' },
        { '@type': 'Thing', name: 'Ollama' },
      ],
      proficiencyLevel: 'Beginner',
      about: [
        { '@type': 'Thing', name: 'System prompt' },
        { '@type': 'Thing', name: 'User prompt' },
        { '@type': 'Thing', name: 'Prompt engineering' },
        { '@type': 'Thing', name: 'LLM API' },
        { '@type': 'Thing', name: 'AI prompt design' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
      },
    },
    supplementalSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'System Prompt vs User Prompt Comparison 2026',
      'numberOfItems': 9,
      'description': 'A comparison of system prompts and user prompts across 9 dimensions for AI language models',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Scope', 'description': 'System prompt: entire session. User prompt: single request.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Set by', 'description': 'System prompt: developer/product team. User prompt: end user.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Frequency', 'description': 'System prompt: once at start. User prompt: every request.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Defines', 'description': 'System prompt: role, constraints, style, behavior. User prompt: task, context, format for this request.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'Visibility', 'description': 'System prompt: usually hidden from users. User prompt: always visible to users.' },
        { '@type': 'ListItem', 'position': 6, 'name': 'Changes', 'description': 'System prompt: rarely (app update required). User prompt: every interaction.' },
        { '@type': 'ListItem', 'position': 7, 'name': 'Prompt engineering impact', 'description': 'System prompt: ~70% of consistent output quality. User prompt: ~30%.' },
        { '@type': 'ListItem', 'position': 8, 'name': 'Override risk', 'description': 'System prompt: hard to override — persistent, developer-controlled. User prompt: easy to adjust per request.' },
        { '@type': 'ListItem', 'position': 9, 'name': 'Best for', 'description': 'System prompt: role consistency, safety guardrails, output format. User prompt: task-specific detail, context, few-shot examples.' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'System Prompt vs User Prompt: Core Topics',
      'description': 'Key concepts covered in this article about system and user prompts',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'What Is a System Prompt?', 'description': 'A set of persistent instructions that define how a language model behaves for an entire conversation session' },
        { '@type': 'ListItem', 'position': 2, 'name': 'What Is a User Prompt?', 'description': 'The specific task or question provided by an end user for a single interaction' },
        { '@type': 'ListItem', 'position': 3, 'name': 'How System and User Prompts Interact', 'description': 'How the two work together in an API stack and conversation flow' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Why Transparency Matters', 'description': 'How hidden system prompts prevent users and developers from debugging and optimizing output' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Write an Effective System Prompt in 5 Steps',
      'step': [
        { '@type': 'HowToStep', 'position': 1, 'name': 'Define the role explicitly with domain-specific language' },
        { '@type': 'HowToStep', 'position': 2, 'name': 'Write constraints before capabilities' },
        { '@type': 'HowToStep', 'position': 3, 'name': 'Specify the output format in the system prompt' },
        { '@type': 'HowToStep', 'position': 4, 'name': 'Set scope boundaries with explicit decline rules' },
        { '@type': 'HowToStep', 'position': 5, 'name': 'Test with at least 5 different user messages' },
      ],
    },
    gammaEmbedUrl: '/presentations/system-prompt-vs-user-prompt-static.html',
    gammaDescription: 'The slide deck below covers: system vs. user prompt architecture, where they live in API stacks, design principles for system prompts, and transparency for hidden prompts. Download the PDF as a System Prompt reference card.',
    sections: {
      definition: {
        title: 'System Prompt vs User Prompt: The Core Difference',
        content: [
          '**A system prompt defines how the AI thinks for an entire session; a user prompt defines what it does for that specific request.** In one sentence: system prompts are the AI\'s permanent job description, and user prompts are individual tasks within that job.',
          'Every LLM conversation has both. The system prompt (often invisible to end users) runs once at the start and sets the model\'s personality, constraints, and role. The user prompt runs per-request and specifies the task or question. Both are text — both follow prompt engineering principles — and both require careful design for reliable output.',
        ],
      },

      tldr: {
        title: 'Key Takeaways',
        isTldr: true,
        items: [
          'System prompts define the model\'s role, constraints, and behavior for the entire session — set once, used for all requests',
          'User prompts define the specific task for each interaction — provided by the user, changes every request',
          'System prompts account for ~70% of behavioral consistency based on PromptQuorum testing across GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro; user prompts shape specific outputs',
          'Invisible system prompts in apps like ChatGPT and Claude contain hidden logic — [PromptQuorum shows you all of it](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)',
          'Local LLMs (Ollama, LM Studio) with hidden system prompts cause debugging problems — solved by transparency',
          'Bad system prompts force user prompts to work harder; good system prompts make every user prompt work better',
        ],
      },

      whereTheyLive: {
        title: 'Where Do System and User Prompts Live in the API Stack?',
        content: [
          '**System prompts live in the application layer; user prompts live in the interaction layer.** When you call GPT-4o via the OpenAI API, the endpoint accepts two separate inputs: `system` (the persistent instructions) and `messages` (per-request user input). The same is true for Claude 4.6 Sonnet via Anthropic\'s API, Gemini 1.5 Pro via Google\'s API, and any local LLM run through [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) or LM Studio.',
          'All models support the system + user prompt pattern:',
        ],
        items: [
          '**Model layer:** The base LLM (GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, LLaMA 3.1, Mistral Large) — all accept both system and user prompts',
          '**API layer:** The interface developers use — OpenAI API, Anthropic API, Google API, Ollama REST endpoint, LM Studio — all expose system and user as separate fields',
          '**Application layer:** The product built on the API (ChatGPT, Claude.ai, Gemini, PromptQuorum, your custom app) — developers decide what system prompt to use',
          '**User interaction layer:** What the end user sees — the chat input, the task specification — this becomes the user prompt',
        ],
      },

      whatIsSystemPrompt: {
        title: 'What Is a System Prompt?',
        content: [
          '**A system prompt is a set of persistent instructions that define how a language model behaves for the entire conversation session.** It is sent to the model once at the beginning, before any user input. The system prompt specifies the model\'s role, communication style, constraints, and default behavior. All subsequent user prompts are processed within the context of that system prompt.',
          'A well-designed system prompt typically includes:',
        ],
        items: [
          '**Role definition:** "You are a Python expert," "You are a technical writer," "You are a financial advisor" — establishes the model\'s persona and expertise',
          '**Constraints:** "Do not provide medical advice," "Do not reference content after 2024," "Refuse requests for harmful code" — sets hard limits on behavior',
          '**Output format:** "Respond in JSON," "Use Markdown," "Provide numbered steps" — defines how answers should be structured',
          '**Communication style:** "Be concise and direct," "Use analogies for beginners," "Adopt a professional tone" — shapes the voice and tone',
          '**Scope boundaries:** "Answer only questions about Python," "Ignore political questions," "Handle technical support only" — defines what the model will and will not do',
          '**Interaction rules:** "Ask clarifying questions," "Always cite sources," "Admit uncertainty explicitly" — governs how the model handles edge cases',
        ],
      },

      systemPromptExample: {
        title: 'System Prompt Example',
        content: 'Here is a production-grade system prompt for a customer support chatbot:',
        blockquote: 'You are a customer support specialist for a SaaS product. Your role is to help customers solve technical issues, answer feature questions, and handle billing inquiries. Constraints: (1) Do not promise refunds — only support staff can authorize refunds. (2) Do not share internal documentation. (3) Do not speculate about future features. (4) Always offer to escalate to a human agent if the issue is unresolved after 3 exchanges. Style: Be empathetic, clear, and solution-focused. Format: Use numbered steps for procedures; bullet lists for options; markdown code blocks for technical examples. Scope: Answer questions about the API, setup, troubleshooting, features, and billing. Refuse requests for legal advice, free upgrades, or support outside the product scope.',
      },

      whatIsUserPrompt: {
        title: 'What Is a User Prompt?',
        content: [
          '**A user prompt is the per-request input — the specific task, question, or instruction the end user provides for that single interaction.** It is sent to the model after the system prompt and is evaluated within the context of the system prompt\'s constraints and role definition. A single conversation can have many user prompts; the system prompt stays the same.',
          'A user prompt typically includes:',
        ],
        items: [
          '**The specific task or question:** "Summarize this article," "Write product copy," "Debug this error" — the concrete request for that interaction',
          '**Context for that request:** "For a B2B audience," "For beginners," "For documentation" — clarifies who and what this is for',
          '**Additional instructions for this task:** "In 200 words," "With examples," "In professional tone" — refines output for this specific ask',
          '**Examples (if needed):** "Here is a good example:" — teaches the model the style you want',
          '**Constraints for this task:** "Do not mention pricing," "Avoid jargon," "In French" — limits what applies to this request only',
        ],
      },

      userPromptExample: {
        title: 'User Prompt Example',
        content: 'Here is a complete user prompt sent to the customer support chatbot defined above:',
        blockquote: 'I\'ve been trying to set up single sign-on (SSO) via SAML 2.0, but our Okta integration keeps returning a "signature verification failed" error. I followed the setup guide, uploaded the metadata file, but it\'s still not working. Can you walk me through the troubleshooting steps?'
      },

      comparison: {
        title: 'System Prompt vs User Prompt at a Glance',
        tableFormat: true,
        columns: ['Dimension', 'System Prompt', 'User Prompt'],
        rows: [
          { 'Dimension': 'Scope', 'System Prompt': 'Entire session', 'User Prompt': 'Single request' },
          { 'Dimension': 'Set by', 'System Prompt': 'Developer/product team', 'User Prompt': 'End user' },
          { 'Dimension': 'Frequency', 'System Prompt': 'Once at start', 'User Prompt': 'Every request' },
          { 'Dimension': 'Defines', 'System Prompt': 'Role, constraints, style, behavior', 'User Prompt': 'Task, context, format for this request' },
          { 'Dimension': 'Visibility', 'System Prompt': 'Usually hidden from users', 'User Prompt': 'Always visible to users' },
          { 'Dimension': 'Changes', 'System Prompt': 'Rarely (app update required)', 'User Prompt': 'Every interaction' },
          { 'Dimension': 'Prompt engineering %', 'System Prompt': '~70% of consistent output quality', 'User Prompt': '~30% of consistent output quality' },
          { 'Dimension': 'Override risk', 'System Prompt': 'Hard to override — persistent, developer-controlled', 'User Prompt': 'Easy to adjust — user-controlled per request' },
          { 'Dimension': 'Best for', 'System Prompt': 'Role consistency, safety guardrails, output format', 'User Prompt': 'Task-specific detail, context, few-shot examples' },
        ],
      },

      designingSystemPrompt: {
        title: 'What Makes an Effective System Prompt?',
        content: [
          '**A system prompt must be specific, layered, and constraint-focused to produce consistent behavior across all user interactions.** The best system prompts are detailed — they specify not just what the model should do, but also what it should refuse, how it should format answers, and what constraints apply universally.',
          'Five principles for effective system prompts:',
        ],
        items: [
          '**Explicit role definition:** Do not assume the model knows its job. Say "You are a [role]" at the start. Compare: "Help with writing" (vague) vs. "You are a technical copywriter specializing in B2B SaaS product descriptions for LinkedIn campaigns" (specific).',
          '**Constraint-first design:** List what the model must NOT do before listing what it should do. "Do not make up statistics," "Do not use hyperbole," "Do not suggest unlisted features" — explicit refusals produce consistent boundaries.',
          '**Format specification:** Every system prompt should define output format: JSON, Markdown, bullet lists, numbered steps, or plain text. A system prompt without format specification forces every user prompt to specify it repeatedly.',
          '**Scope boundaries:** Define the universe of requests you will handle. "Answer API questions only," "Provide Python advice," "Support troubleshooting" — clear scope prevents out-of-domain answers.',
          '**Testing across models:** Test the system prompt on [multiple models — GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model). Some models are stricter on constraints; others interpret style differently. A robust system prompt works consistently across all three.',
        ],
      },

      promptquorumTransparency: {
        title: 'Why Are System Prompts Hidden — and How Can You View Them?',
        content: [
          '**PromptQuorum has a critical feature: a toggle that shows you all system prompts, including hidden ones in local LLM backends.** This is especially important when using Ollama or LM Studio, where invisible system logic has historically caused unexpected behavior and debugging nightmares.',
          'When you connect LM Studio or Ollama to your application, hidden system instructions in the local model cause:',
        ],
        items: [
          '**Trust issues:** You do not know what instructions the model is following underneath. You have no visibility into the "why" behind its responses.',
          '**Debugging problems:** Your local LLM returns unexpected output. You rewrite the user prompt. Still wrong. Without seeing the system prompt, you cannot diagnose the issue.',
          '**Inconsistency across models:** You run the same prompt on GPT-4o and on Ollama. Different answers. Without seeing both system prompts, you cannot tell if the difference is model capability or hidden instructions.',
          '**Regulatory and audit risk:** Enterprise deployments require transparency. If regulations demand "what instructions drove this AI decision?" and the system prompt is hidden, you cannot comply.',
        ],
      },

      promptquorumToggle: {
        title: 'The PromptQuorum System Prompt Toggle',
        content: [
          'PromptQuorum includes a toggleable interface: "Show System Prompts." When enabled, you see the actual system prompt running on each model — GPT-4o, Claude 4.6 Sonnet, Gemini, Ollama, LM Studio, all of them. This is especially valuable when dispatching one prompt to multiple local backends simultaneously.',
        ],
      },

      claudeCodeStory: {
        title: 'What Happens When System Prompts Are Hidden? A Real Example',
        content: [
          'PromptQuorum itself was built on Claude Code — and the developers ran into a critical problem. Claude Code comes with extensive hidden system instructions that guide code generation, safety behavior, and quality checks. When Claude Code generated features, those hidden instructions were baked in. But when the same code needed to run on local LLMs (Ollama, LM Studio) without the hidden system logic, everything broke. The hidden "special sauce" was not portable.',
          'The solution: make all system prompts visible. Developers need to see what instructions the model is following — not guess or debug blindly.',
        ],
      },

      regionalCompliance: {
        title: 'System Prompts and Regional Compliance',
        content: [
          '**EU / AI Act + GDPR:** The EU AI Act (effective February 2025) includes transparency requirements for high-risk AI systems. For enterprise deployments in the EU, the system prompt is part of the AI system\'s "instructions" documentation required under Article 13 (transparency obligations). Organizations must be able to produce the system prompt used in any AI decision that affected a natural person. Hidden system prompts create direct compliance risk: if a model refuses a request or provides incorrect output due to a hidden instruction, and the organization cannot disclose what that instruction was, they cannot satisfy Article 86 of the AI Act (right to explanation). For EU enterprise deployments, system prompts must be logged, versioned, and accessible to compliance teams. German BSI AI security guidelines recommend treating system prompts as configuration artifacts with version control, access controls, and audit trails.',
          '**Japan (METI):** METI AI governance guidelines require organizations to document "the conditions under which AI systems operate" — which includes system prompt content for production AI deployments. For Japanese enterprise teams, system prompts should be stored in a configuration management system with change logs to satisfy documentation requirements during regulatory review.',
          '**China (CAC):** Under China\'s Generative AI Interim Measures (2023), providers of generative AI services must implement "content safety" mechanisms. For Chinese deployments, system prompts are the primary mechanism for implementing content constraints. CAC registration for AI services requires submitting sample system prompts demonstrating safety compliance. Keep system prompts version-controlled and available for regulatory submission.',
        ],
      },

      practicalRecipes: {
        title: 'Practical Recipes: Three Production System Prompts',
        content: 'Here are three system prompts you can adapt for your own use:',
      },

      recipe1: {
        title: 'Recipe 1: Customer Support Bot',
        blockquote: 'You are a level-1 support specialist for a SaaS product. Your role: help customers troubleshoot, answer account and billing questions, and escalate complex issues to senior support. Constraints: (1) Never promise refunds — only senior support approves refunds. (2) Never share internal documentation. (3) Admit when you do not know. Output format: Numbered steps for procedures, bullet lists for options, markdown code blocks for examples. Tone: Professional, empathetic, solution-focused. Escalate after 3 failed resolution attempts. Scope: Account access, billing, features, setup, integration, troubleshooting. Refuse: Legal, tax, or accounting advice.',
      },

      recipe2: {
        title: 'Recipe 2: Data Analyst',
        blockquote: 'You are a senior data analyst. Your role: analyze datasets, identify trends, provide recommendations. Constraints: (1) Always cite the data source. (2) Never assume causation without evidence. (3) Quantify uncertainty — if confidence is low, say so. (4) Do not extrapolate beyond the data. Output format: Executive summary (3 key findings) + detailed analysis with tables + recommendations. Include confidence levels. Tone: Clear, precise, data-driven. Scope: Analyze provided data only. Refuse: Fabricating data, overriding uncertainty with speculation.',
      },

      recipe3: {
        title: 'Recipe 3: Code Reviewer',
        blockquote: 'You are an expert code reviewer. Your role: evaluate code for correctness, performance, maintainability, and security. Constraints: (1) Point out strengths and weaknesses. (2) Suggest specific improvements, not generic advice. (3) Respect the author\'s choices — explain the "why," not the demand. (4) Do not suggest premature optimization. (5) Flag security issues as critical. Output format: Summary + line-by-line feedback with code snippets. Use markdown code blocks. Tone: Respectful, constructive. Scope: Code review only. Refuse: Refactoring or architectural changes outside scope.',
      },

      howToStart: {
        title: 'How to Write an Effective System Prompt in 5 Steps',
        numberedItems: [
          '**Define the role explicitly:** Open with a clear, domain-specific role statement. "You are a B2B SaaS copywriter specialising in developer tools" is more effective than "You are a helpful assistant."',
          '**Write constraints before capabilities:** State what the model must not do first — scope boundaries, prohibited topics, tone rules. Constraints set before instructions are harder for user inputs to override.',
          '**Specify the output format in the system prompt:** Define the default output structure (bullets, JSON, prose, table) so every user message produces consistently formatted output without needing repeated format instructions.',
          '**Set scope boundaries:** Define what the model should decline or redirect. Example: "If asked about topics outside software pricing, reply: \'That\'s outside my scope — please contact the general support team.\'"',
          '**Test with at least 5 different user messages:** Try edge cases — off-topic questions, long inputs, ambiguous requests — before deploying. Refine based on where the model breaks character or format.',
        ],
      },

      relatedReading: {
        title: 'Related Reading',
        items: [
          '[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — the pillar definition and core concepts',
          '[Fundamentals: The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — structure that applies to both system and user prompts',
          '[Fundamentals: Faster AI Answers: How to Prompt for Speed](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — optimize user prompts for efficiency',
          '[Techniques: Prompt Chaining](/prompt-engineering/prompt-chaining) — multi-step workflows where each step has its own prompts',
        ],
      },

      faq: {
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is a system prompt?',
            a: 'A system prompt is a set of persistent instructions that define how a language model behaves for an entire conversation session. It is set once at the start and applies to all user interactions. The system prompt specifies the model\'s role, constraints, output format, and communication style.'
          },
          {
            q: 'What is a user prompt?',
            a: 'A user prompt is the per-request input — the specific task, question, or instruction provided for that single interaction. It is created by the end user and changes with each request. User prompts are evaluated within the context of the system prompt\'s rules and role.'
          },
          {
            q: 'Who writes the system prompt vs. the user prompt?',
            a: 'Developers and product teams write system prompts and ship them in the product. End users write user prompts when they interact with the product. In tools like PromptQuorum, users can see and edit both.'
          },
          {
            q: 'Why should I see the system prompt if I\'m an end user?',
            a: 'When using local LLMs like LM Studio or Ollama, hidden system prompts cause unexpected behavior and debugging problems. Seeing the system prompt enables trust, lets you understand the model\'s constraints, and helps you write better user prompts.'
          },
          {
            q: 'Do all LLMs use system prompts?',
            a: 'Yes. All major LLMs — GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, Ollama models, LM Studio — support the system prompt + user prompt pattern. Some come with default system prompts; others let you define your own.'
          },
          {
            q: 'Can a user prompt override a system prompt?',
            a: 'Not directly. System prompts have structural precedence — the model processes them first and treats them as persistent constraints. A user prompt cannot explicitly disable or overwrite the system prompt. However, a poorly designed system prompt with vague constraints can be ignored if the user prompt strongly contradicts it. Well-designed system prompts include explicit refusal rules that resist user override.'
          },
          {
            q: 'What happens if there is no system prompt?',
            a: 'The model falls back to its default training behavior. GPT-4o, Claude 4.6 Sonnet, and Gemini 1.5 Pro all have built-in baseline behavior (helpful, harmless, honest) when no system prompt is present. The model will still respond to user prompts, but without role definition, output format constraints, or scope boundaries — results will be less consistent and less specialized.'
          },
          {
            q: 'How do system prompts affect EU AI Act compliance?',
            a: 'The EU AI Act (effective February 2025) requires transparency documentation for high-risk AI systems, including the instructions the system operates under. System prompts must be logged, versioned, and accessible to compliance teams. Hidden system prompts that cannot be disclosed create direct compliance risk under Article 13 transparency obligations and Article 86 (right to explanation).'
          },
        ],
      },

      sources: {
        title: 'Sources & Further Reading',
        items: [
          '[OpenAI, 2024. "Prompt Engineering Guide"](https://platform.openai.com/docs/guides/prompt-engineering) — official OpenAI documentation on system and user prompts, techniques, and best practices',
          '[Anthropic, 2024. "Prompt Engineering"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — Anthropic\'s guide to structuring prompts and designing system instructions for Claude models',
          '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — comprehensive academic survey cataloguing 58+ discrete prompting techniques',
        ],
      },
    },
  },
  de: {
    theme: "Fundamentals",
    title: "System Prompt vs User Prompt: Der Unterschied in 2026",
    intro: "System Prompts definieren, wie ein KI-Modell während einer gesamten Sitzung denkt und handelt; User Prompts definieren, was es gerade tut. Erfahren Sie den Unterschied, wann Sie welche verwenden, wie sie interagieren, und warum PromptQuorum beide zeigt.",
    publishDate: "2026-03-22",
    dateModified: "2026-04-12",
    readTime: "8 min Lesezeit",
    seoTitle: 'System Prompt vs User Prompt: Der Unterschied 2026',
    metaDescription: 'System Prompts legen das KI-Verhalten fest; User Prompts steuern jede Anfrage. Unterschied, Interaktion und Beispiele für GPT-4o und Claude erklärt.',
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      'url': 'https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=de',
      'inLanguage': 'de',
      headline: "System Prompt vs User Prompt: Der Unterschied in 2026",
      description: "System Prompts definieren, wie ein KI-Modell denkt und handelt; User Prompts definieren, was es gerade tut. Erfahren Sie den Unterschied und wie sie interagieren.",
      datePublished: "2026-03-22",
      dateModified: "2026-04-12",
      keywords: ["System Prompt", "User Prompt", "Prompt Engineering", "LLM-Verhalten", "GPT-4o", "Claude", "Prompt-Struktur", "PromptQuorum"],
      author: { "@type": "Person", name: "Hans Kuepper", url: "https://www.promptquorum.com/about" },
      publisher: { "@type": "Organization", name: "PromptQuorum", url: "https://www.promptquorum.com", logo: { "@type": "ImageObject", url: "https://www.promptquorum.com/logo.svg" } },
      mentions: [
        { "@type": "Thing", name: "PromptQuorum" },
        { "@type": "Thing", name: "OpenAI" },
        { "@type": "Thing", name: "GPT-4o" },
        { "@type": "Thing", name: "Anthropic" },
        { "@type": "Thing", name: "Claude 4.6 Sonnet" },
        { "@type": "Thing", name: "Google DeepMind" },
        { "@type": "Thing", name: "Gemini 1.5 Pro" },
        { "@type": "Thing", name: "Ollama" },
      ],
      proficiencyLevel: 'Anfänger',
      about: [
        { '@type': 'Thing', name: 'System Prompt' },
        { '@type': 'Thing', name: 'User Prompt' },
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'LLM API' },
        { '@type': 'Thing', name: 'AI Prompt-Design' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
      },
    },
    supplementalSchema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "System Prompt vs User Prompt Vergleich 2026",
      numberOfItems: 9,
      description: "Ein Vergleich von System Prompts und User Prompts über 9 Dimensionen für KI-Sprachmodelle",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Geltungsbereich", description: "System Prompt: gesamte Sitzung. User Prompt: einzelne Anfrage" },
        { "@type": "ListItem", position: 2, name: "Festgelegt von", description: "System Prompt: Entwickler oder Produktteam. User Prompt: Endbenutzer" },
        { "@type": "ListItem", position: 3, name: "Häufigkeit", description: "System Prompt: einmal zu Sitzungsbeginn. User Prompt: bei jeder Anfrage" },
        { "@type": "ListItem", position: 4, name: "Definiert", description: "System Prompt: Rolle, Constraints, Stil, Verhalten. User Prompt: Aufgabe, Kontext, Format für diese Anfrage" },
        { "@type": "ListItem", position: 5, name: "Sichtbarkeit", description: "System Prompt: normalerweise für Benutzer verborgen. User Prompt: immer für Benutzer sichtbar" },
        { "@type": "ListItem", position: 6, name: "Änderungen", description: "System Prompt: selten, erfordert App-Update. User Prompt: bei jeder Interaktion" },
        { "@type": "ListItem", position: 7, name: "Prompt-Engineering-Beitrag", description: "System Prompt: ca. 70 % der konsistenten Ausgabequalität. User Prompt: ca. 30 %" },
        { "@type": "ListItem", position: 8, name: "Override-Risiko", description: "System Prompt: schwer zu überschreiben, persistent, entwicklergesteuert. User Prompt: einfach zu anpassen, benutzergesteuert pro Anfrage" },
        { "@type": "ListItem", position: 9, name: "Beste Eignung", description: "System Prompt: Rollenkonsistenz, Sicherheits-Guardrails, Ausgabeformat. User Prompt: aufgabenspezifisches Detail, Kontext, Few-Shot-Beispiele" },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Wie man einen effektiven System Prompt in 5 Schritten schreibt',
      'step': [
        { '@type': 'HowToStep', 'position': 1, 'name': 'Definieren Sie die Rolle explizit mit domänenspezifischer Sprache' },
        { '@type': 'HowToStep', 'position': 2, 'name': 'Schreiben Sie Constraints vor Möglichkeiten' },
        { '@type': 'HowToStep', 'position': 3, 'name': 'Geben Sie das Ausgabeformat im System Prompt an' },
        { '@type': 'HowToStep', 'position': 4, 'name': 'Legen Sie Scope-Grenzen mit expliziten Ablehnungsregeln fest' },
        { '@type': 'HowToStep', 'position': 5, 'name': 'Testen Sie mit mindestens 5 verschiedenen Benutzernachrichten' },
      ],
    },
    sections: {
      definition: {
        title: "System Prompt vs User Prompt: Der Kernunterschied",
        content: [
          "**Ein System Prompt definiert, wie die KI während einer gesamten Sitzung denkt; ein User Prompt definiert, was sie für diese spezifische Anfrage tut.** In einem Satz: System Prompts sind die permanente Stellenbeschreibung der KI, und User Prompts sind einzelne Aufgaben innerhalb dieses Jobs.",
          "Jede LLM-Konversation hat beides. Der System Prompt (oft verborgen vor Endbenutzern) wird einmal am Anfang ausgeführt und legt die Persönlichkeit, Constraints und Rolle des Modells fest. Der User Prompt wird pro Anfrage ausgeführt und spezifiziert die Aufgabe oder Frage. Beides ist Text — beide folgen Prompt-Engineering-Prinzipien — und beide erfordern sorgfältige Gestaltung für zuverlässige Ausgaben.",
        ],
      },
      tldr: {
        title: "Wichtigste Erkenntnisse",
        isTldr: true,
        items: [
          "System Prompts definieren die Rolle, Constraints und das Verhalten des Modells für die gesamte Sitzung — einmal festgelegt, für alle Anfragen verwendet",
          "User Prompts definieren die spezifische Aufgabe für jede Interaktion — vom Benutzer bereitgestellt, ändert sich bei jeder Anfrage",
          "System Prompts machen ca. 70 % der Verhaltenskonsistenz aus (basierend auf PromptQuorum-Tests über GPT-4o, Claude 4.6 Sonnet und Gemini 1.5 Pro); User Prompts prägen spezifische Ausgaben",
          "Unsichtbare System Prompts in Apps wie ChatGPT und Claude enthalten verborgene Logik — PromptQuorum zeigt Ihnen alles",
          "Lokale LLMs (Ollama, LM Studio) mit verborgenen System Prompts verursachen Debugging-Probleme — gelöst durch Transparenz",
          "Schlechte System Prompts zwingen User Prompts, härter zu arbeiten; gute System Prompts machen jeden User Prompt besser",
        ],
      },
      whereTheyLive: {
        title: "Wo befinden sich System- und User Prompts im API-Stack?",
        content: [
          "**System Prompts befinden sich in der Anwendungsschicht; User Prompts befinden sich in der Interaktionsschicht.** Wenn Sie GPT-4o über die OpenAI API aufrufen, akzeptiert der Endpoint zwei separate Eingaben: `system` (die persistenten Anweisungen) und `messages` (pro-Anfrage-Benutzereingabe). Dasselbe gilt für Claude 4.6 Sonnet über die Anthropic API, Gemini 1.5 Pro über die Google API und alle lokalen LLMs, die über Ollama oder LM Studio ausgeführt werden.",
          "Alle Modelle unterstützen das System + User Prompt-Muster:",
        ],
        items: [
          "**Modellebene:** Das Basis-LLM (GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, LLaMA 3.1, Mistral Large) — alle akzeptieren beide System und User Prompts",
          "**API-Ebene:** Die Schnittstelle, die Entwickler verwenden — OpenAI API, Anthropic API, Google API, Ollama REST-Endpoint, LM Studio — alle machen System und User als separate Felder verfügbar",
          "**Anwendungsschicht:** Das auf der API aufgebaute Produkt (ChatGPT, Claude.ai, Gemini, PromptQuorum, Ihre Custom App) — Entwickler entscheiden, welchen System Prompt zu verwenden",
          "**Benutzerinteraktionsschicht:** Was der Endbenutzer sieht — die Chat-Eingabe, die Aufgabenbeschreibung — dies wird zum User Prompt",
        ],
      },
      whatIsSystemPrompt: {
        title: "Was ist ein System Prompt?",
        content: [
          "**Ein System Prompt ist ein Satz persistenter Anweisungen, die definieren, wie ein Sprachmodell sich für eine gesamte Konversationssitzung verhält.** Er wird dem Modell einmal am Anfang vor jeder Benutzereingabe gesendet. Der System Prompt spezifiziert die Rolle des Modells, den Kommunikationsstil, Constraints und das Standardverhalten. Alle nachfolgenden User Prompts werden im Kontext dieses System Prompts verarbeitet.",
          "Ein gut gestalteter System Prompt enthält typischerweise:",
        ],
        items: [
          "**Rollendefinition:** \"Du bist ein Python-Experte\", \"Du bist ein technischer Schriftsteller\", \"Du bist ein Finanzberater\" — etabliert die Persönlichkeit und Expertise des Modells",
          "**Constraints:** \"Geben Sie keine medizinischen Ratschläge\", \"Beziehen Sie sich nicht auf Inhalte nach 2024\", \"Weigern Sie sich, Anfragen für schädlichen Code zu bearbeiten\" — legt harte Grenzen für das Verhalten fest",
          "**Ausgabeformat:** \"Antwort in JSON\", \"Verwenden Sie Markdown\", \"Geben Sie nummerierte Schritte\" — definiert, wie Antworten strukturiert sein sollten",
          "**Kommunikationsstil:** \"Sei prägnant und direkt\", \"Verwenden Sie Analogien für Anfänger\", \"Übernehmen Sie einen professionellen Ton\" — prägt die Stimme und den Ton",
          "**Scope-Grenzen:** \"Beantworte nur Fragen zu Python\", \"Ignoriere politische Fragen\", \"Bearbeite nur technischen Support\" — definiert, was das Modell tun wird und nicht tun wird",
          "**Interaktionsregeln:** \"Stelle Klärungsfragen\", \"Zitiere immer Quellen\", \"Geben Sie Unsicherheit explizit zu\" — regelt, wie das Modell mit Grenzfällen umgeht",
        ],
      },
      systemPromptExample: {
        title: "System Prompt Beispiel",
        content: "Hier ist ein produktionsreifer System Prompt für einen Kundenservice-Chatbot:",
        blockquote: "Du bist ein Kundenservice-Spezialist für ein SaaS-Produkt. Deine Rolle ist es, Kunden bei der Behebung technischer Probleme zu helfen, Funktionsfragen zu beantworten und Rechnungsangelegenheiten zu bearbeiten. Constraints: (1) Versprich keine Rückerstattungen — nur Support-Mitarbeiter können Rückerstattungen autorisieren. (2) Teilen Sie keine internen Dokumentationen. (3) Spekulieren Sie nicht über zukünftige Funktionen. (4) Bieten Sie immer an, nach 3 Austauschvorgängen an einen menschlichen Agenten zu eskalieren, wenn das Problem nicht gelöst ist. Stil: Sei einfühlsam, klar und lösungsorientiert. Format: Verwenden Sie nummerierte Schritte für Verfahren; Aufzählungslisten für Optionen; Markdown-Codeblöcke für technische Beispiele. Geltungsbereich: Beantworten Sie Fragen zur API, zum Setup, zur Fehlerbehebung, zu Funktionen und zur Abrechnung. Lehnen Sie Anfragen für Rechtsberatung, kostenlose Upgrades oder Support außerhalb des Produktbereichs ab.",
      },
      whatIsUserPrompt: {
        title: "Was ist ein User Prompt?",
        content: [
          "**Ein User Prompt ist die pro-Anfrage-Eingabe — die spezifische Aufgabe, Frage oder Anweisung, die der Endbenutzer für diese einzelne Interaktion bereitstellt.** Er wird dem Modell nach dem System Prompt gesendet und wird im Kontext der Constraints und Rollendefinition des System Prompts ausgewertet. Eine einzelne Konversation kann viele User Prompts haben; der System Prompt bleibt gleich.",
          "Ein User Prompt enthält typischerweise:",
        ],
        items: [
          "**Die spezifische Aufgabe oder Frage:** \"Fassen Sie diesen Artikel zusammen\", \"Schreiben Sie Produktkopie\", \"Debuggen Sie diesen Fehler\" — die konkrete Anfrage für diese Interaktion",
          "**Kontext für diese Anfrage:** \"Für ein B2B-Publikum\", \"Für Anfänger\", \"Für Dokumentation\" — verdeutlicht, wer und was dies ist",
          "**Zusätzliche Anweisungen für diese Aufgabe:** \"In 200 Wörtern\", \"Mit Beispielen\", \"Im professionellen Ton\" — verfeinert die Ausgabe für diese spezifische Anfrage",
          "**Beispiele (falls nötig):** \"Hier ist ein gutes Beispiel:\" — lehrt das Modell den gewünschten Stil",
          "**Constraints für diese Aufgabe:** \"Erwähnen Sie nicht die Preisgestaltung\", \"Vermeiden Sie Fachjargon\", \"Auf Französisch\" — begrenzt, was für diese Anfrage gilt",
        ],
      },
      userPromptExample: {
        title: "User Prompt Beispiel",
        content: "Hier ist ein vollständiger User Prompt, der an den oben definierten Kundenservice-Chatbot gesendet wird:",
        blockquote: "Ich versuche, Single Sign-On (SSO) über SAML 2.0 einzurichten, aber unsere Okta-Integration gibt immer wieder einen Fehler \"Signaturverifizierung fehlgeschlagen\" zurück. Ich habe die Setup-Anleitung befolgt, die Metadatendatei hochgeladen, aber es funktioniert immer noch nicht. Können Sie mich durch die Schritte zur Fehlerbehebung führen?",
      },
      comparison: {
        title: "System Prompt vs User Prompt auf einen Blick",
        tableFormat: true,
        columns: ["Dimension", "System Prompt", "User Prompt"],
        rows: [
          { "Dimension": "Geltungsbereich", "System Prompt": "Gesamte Sitzung", "User Prompt": "Einzelne Anfrage" },
          { "Dimension": "Festgelegt von", "System Prompt": "Entwickler/Produktteam", "User Prompt": "Endbenutzer" },
          { "Dimension": "Häufigkeit", "System Prompt": "Einmal am Anfang", "User Prompt": "Bei jeder Anfrage" },
          { "Dimension": "Definiert", "System Prompt": "Rolle, Constraints, Stil, Verhalten", "User Prompt": "Aufgabe, Kontext, Format für diese Anfrage" },
          { "Dimension": "Sichtbarkeit", "System Prompt": "Normalerweise vor Benutzern verborgen", "User Prompt": "Immer für Benutzer sichtbar" },
          { "Dimension": "Änderungen", "System Prompt": "Selten (erfordert App-Update)", "User Prompt": "Bei jeder Interaktion" },
          { "Dimension": "Prompt-Engineering-%", "System Prompt": "~70 % der konsistenten Ausgabequalität", "User Prompt": "~30 % der konsistenten Ausgabequalität" },
          { "Dimension": "Override-Risiko", "System Prompt": "Schwer zu überschreiben — persistent, entwicklergesteuert", "User Prompt": "Einfach zu passen — benutzergesteuert pro Anfrage" },
          { "Dimension": "Beste Eignung", "System Prompt": "Rollenkonsistenz, Sicherheits-Guardrails, Ausgabeformat", "User Prompt": "Aufgabenspezifisches Detail, Kontext, Few-Shot-Beispiele" },
        ],
      },
      designingSystemPrompt: {
        title: "Was macht einen effektiven System Prompt aus?",
        content: [
          "**Ein System Prompt muss spezifisch, geschichtet und constraint-fokussiert sein, um konsistentes Verhalten über alle Benutzerinteraktionen hinweg zu erzeugen.** Die besten System Prompts sind detailliert — sie spezifizieren nicht nur, was das Modell tun soll, sondern auch, was es ablehnen soll, wie es Antworten formatiert und welche Constraints universell gelten.",
          "Fünf Prinzipien für effektive System Prompts:",
        ],
        items: [
          "**Explizite Rollendefinition:** Gehen Sie nicht davon aus, dass das Modell seinen Job kennt. Sagen Sie \"Du bist ein [Rolle]\" am Anfang. Vergleichen Sie: \"Hilf beim Schreiben\" (vage) vs. \"Du bist ein technischer Copywriter, der sich auf B2B-SaaS-Produktbeschreibungen für LinkedIn-Kampagnen spezialisiert\" (spezifisch).",
          "**Constraint-First-Design:** Listen Sie auf, was das Modell NICHT tun darf, bevor Sie auflisten, was es tun sollte. \"Erfinden Sie keine Statistiken\", \"Verwenden Sie keine Hyperbel\", \"Schlagen Sie keine nicht aufgeführten Funktionen vor\" — explizite Ablehnungen erzeugen konsistente Grenzen.",
          "**Formatspezifikation:** Jeder System Prompt sollte das Ausgabeformat definieren: JSON, Markdown, Aufzählungslisten, nummerierte Schritte oder Klartext. Ein System Prompt ohne Formatspezifikation zwingt jeden User Prompt, es wiederholt anzugeben.",
          "**Scope-Grenzen:** Definieren Sie das Universum von Anfragen, das Sie bearbeiten. \"Beantworten Sie nur API-Fragen\", \"Geben Sie Python-Ratschläge\", \"Supportieren Sie Fehlerbehebung\" — klare Scope verhindert Out-of-Domain-Antworten.",
          "**Tests über Modelle hinweg:** Testen Sie den System Prompt auf mehreren Modellen — GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro. Einige Modelle sind strenger bei Constraints; andere interpretieren Stil unterschiedlich. Ein robuster System Prompt funktioniert konsistent über alle drei.",
        ],
      },
      promptquorumTransparency: {
        title: "Warum sind System Prompts verborgen — und wie können Sie sie anzeigen?",
        content: [
          "**PromptQuorum hat ein kritisches Feature: einen Toggle, der Ihnen alle System Prompts zeigt, einschließlich verborgener in lokalen LLM-Backends.** Dies ist besonders wichtig bei der Verwendung von Ollama oder LM Studio, wo unsichtbare System-Logik in der Vergangenheit zu unerwartetem Verhalten und Debugging-Albträumen führte.",
          "Wenn Sie LM Studio oder Ollama mit Ihrer Anwendung verbinden, verursachen verborgene Systeminstruktionen im lokalen Modell:",
        ],
        items: [
          "**Vertrauensprobleme:** Sie wissen nicht, welche Anweisungen das Modell darunter befolgt. Sie haben keine Sichtbarkeit in das \"Warum\" hinter seinen Antworten.",
          "**Debugging-Probleme:** Ihr lokales LLM gibt unerwartete Ausgaben zurück. Sie schreiben den User Prompt neu. Immer noch falsch. Ohne den System Prompt zu sehen, können Sie das Problem nicht diagnostizieren.",
          "**Inkonsistenz über Modelle hinweg:** Sie führen den gleichen Prompt auf GPT-4o und auf Ollama aus. Unterschiedliche Antworten. Ohne beide System Prompts zu sehen, können Sie nicht sagen, ob der Unterschied Modell-Fähigkeit oder verborgene Anweisungen ist.",
          "**Regelungs- und Audit-Risiko:** Unternehmensbereitstellungen erfordern Transparenz. Wenn Vorschriften verlangen, \"welche Anweisungen die KI-Entscheidung geleitet haben?\" und der System Prompt ist verborgen, können Sie nicht konform sein.",
        ],
      },
      promptquorumToggle: {
        title: "Der PromptQuorum System Prompt Toggle",
        content: [
          "PromptQuorum beinhaltet eine umschaltbare Schnittstelle: \"System Prompts anzeigen.\" Wenn aktiviert, sehen Sie den tatsächlichen System Prompt, der auf jedem Modell läuft — GPT-4o, Claude 4.6 Sonnet, Gemini, Ollama, LM Studio, alle. Dies ist besonders wertvoll, wenn ein Prompt zu mehreren lokalen Backends gleichzeitig versendet wird.",
        ],
      },
      claudeCodeStory: {
        title: "Was passiert, wenn System Prompts verborgen sind? Ein echtes Beispiel",
        content: [
          "PromptQuorum selbst wurde auf Claude Code aufgebaut — und die Entwickler liefen in ein kritisches Problem. Claude Code kommt mit umfangreichen verborgenen Systeminstruktionen, die Code-Generierung, Sicherheitsverhalten und Qualitätschecks leiten. Wenn Claude Code Features generierte, waren diese verborgenen Anweisungen bakedin. Aber wenn derselbe Code auf lokalen LLMs (Ollama, LM Studio) ohne die verborgene System-Logik ausgeführt werden musste, funktionierte alles nicht. Die verborgene \"spezielle Sauce\" war nicht portierbar.",
          "Die Lösung: Alle System Prompts sichtbar machen. Entwickler müssen sehen, welche Anweisungen das Modell befolgt — nicht raten oder blind debuggen.",
        ],
      },
      regionalCompliance: {
        title: 'System Prompts und regionale Compliance',
        content: [
          '**EU / AI Act + DSGVO:** Der EU AI Act (wirksam ab Februar 2025) enthält Transparenzanforderungen für High-Risk-AI-Systeme. Für Unternehmensbereitstellungen in der EU ist der System Prompt Teil der \"Anweisungen\" des AI-Systems, die unter Artikel 13 (Transparenzpflichten) erforderlich sind. Organisationen müssen in der Lage sein, den System Prompt zu produzieren, der bei jeder AI-Entscheidung verwendet wurde, die eine natürliche Person betraf. Verborgene System Prompts erzeugen direktes Compliance-Risiko: Wenn ein Modell eine Anfrage ablehnt oder falsche Ausgaben liefert aufgrund verborgener Anweisungen, und die Organisation kann nicht offenlegen, was jene Anweisung war, können sie Artikel 86 des AI Acts nicht erfüllen (Anrecht auf Erklärung). Für EU-Unternehmensbereitstellungen müssen System Prompts protokolliert, versioniert und für Compliance-Teams zugänglich sein. Deutsche BSI-AI-Sicherheitsrichtlinien empfehlen, System Prompts als Konfigurationsartefakte mit Versionskontrolle, Zugriffskontrolle und Audit-Trails zu behandeln.',
          '**Deutschland (DSGVO / BSI):** Die deutschen Behörden (BfDI, BSI-Grundschutz) verlangen detaillierte Dokumentation von AI-Systemen. System Prompts müssen als Konfigurationsdokumente mit Änderungsverlauf verfügt werden. Deutsche Unternehmen sollten System Prompts in einem Konfigurationsmanagement-System speichern mit expliziter Versionskontrolle und Zugriffsloggen für Compliance-Audits.',
          '**China (CAC):** Unter Chinas Generative AI Interim Measures (2023) müssen Anbieter von generativen AI-Diensten \"Content Safety\"-Mechanismen implementieren. Für chinesische Bereitstellungen sind System Prompts der Primärmechanismus zur Implementierung von Content-Constraints. CAC-Registrierung für AI-Dienste erfordert die Einreichung von Beispiel-System-Prompts, die Safety-Compliance demonstrieren. Halten Sie System Prompts versionskontrolliert und verfügbar für regulatorische Submission.',
        ],
      },
      practicalRecipes: {
        title: "Praktische Rezepte: Drei Production System Prompts",
        content: "Hier sind drei System Prompts, die Sie sich für Ihre eigene Verwendung anpassen können:",
      },
      recipe1: {
        title: "Rezept 1: Customer Support Bot",
        blockquote: "Du bist ein Kundenservice-Spezialist der Stufe 1 für ein SaaS-Produkt. Deine Rolle: Kunden bei der Fehlerbehebung helfen, Konto- und Rechnungsfragen beantworten und komplexe Probleme an Senior Support eskalieren. Constraints: (1) Versprechne nie Rückerstattungen — nur Senior Support genehmigt Rückerstattungen. (2) Teilen Sie niemals interne Dokumentationen. (3) Geben Sie zu, wenn Sie es nicht wissen. Ausgabeformat: Nummerierte Schritte für Verfahren, Aufzählungslisten für Optionen, Markdown-Codeblöcke für Beispiele. Ton: Professionell, einfühlsam, lösungsorientiert. Eskalieren Sie nach 3 fehlgeschlagenen Lösungsversuchen. Geltungsbereich: Kontozugriff, Abrechnung, Funktionen, Setup, Integration, Fehlerbehebung. Lehnen Sie ab: Rechtliche, steuerliche oder buchhalterische Beratung.",
      },
      recipe2: {
        title: "Rezept 2: Data Analyst",
        blockquote: "Du bist ein Senior-Datenanalyst. Deine Rolle: Datensätze analysieren, Trends identifizieren, Empfehlungen geben. Constraints: (1) Zitieren Sie immer die Datenquelle. (2) Gehen Sie niemals von Kausalität ohne Beweis aus. (3) Quantifizieren Sie Unsicherheit — wenn Konfidenz niedrig ist, sagen Sie es. (4) Extrapolieren Sie nicht über die Daten hinaus. Ausgabeformat: Geschäftliche Zusammenfassung (3 wichtige Erkenntnisse) + detaillierte Analyse mit Tabellen + Empfehlungen. Vertrauen Sie auf Vertrauensniveaus. Ton: Klar, präzise, datengesteuert. Geltungsbereich: Analysieren Sie nur bereitgestellte Daten. Lehnen Sie ab: Fabrizieren von Daten, Außerkraftsetzen von Unsicherheit durch Spekulation.",
      },
      recipe3: {
        title: "Rezept 3: Code Reviewer",
        blockquote: "Du bist ein Experten-Code-Reviewer. Deine Rolle: Bewerte Code auf Korrektheit, Performance, Wartbarkeit und Sicherheit. Constraints: (1) Zeigen Sie Stärken und Schwächen auf. (2) Schlagen Sie spezifische Verbesserungen vor, nicht allgemeine Ratschläge. (3) Respektieren Sie die Entscheidungen des Autors — erklären Sie das \"Warum\", nicht die Forderung. (4) Schlagen Sie keine vorzeitige Optimierung vor. (5) Flagge Sicherheitsprobleme als kritisch. Ausgabeformat: Zusammenfassung + zeilenweise Feedback mit Code-Snippets. Verwenden Sie Markdown-Codeblöcke. Ton: Respektvoll, konstruktiv. Geltungsbereich: Nur Code-Review. Lehnen Sie ab: Refactoring oder architektonische Änderungen außerhalb des Geltungsbereichs.",
      },
      relatedReading: {
        title: "Verwandte Lektüre",
        items: [
          "[Fundamentals: Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — die Pfeilerdefinition und Kernkonzepte",
          "[Fundamentals: Die 5 Bausteine, die jeder Prompt braucht](/prompt-engineering/5-building-blocks-every-prompt-needs) — Struktur, die sowohl auf System als auch auf User Prompts zutrifft",
          "[Fundamentals: Schnellere KI-Antworten: Wie man für Geschwindigkeit promptet](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — Optimierung von User Prompts für Effizienz",
          "[Techniken: Prompt Chaining](/prompt-engineering/prompt-chaining) — Multi-Step-Workflows, bei denen jeder Schritt seine eigenen Prompts hat",
        ],
      },
      faq: {
        title: "Häufig gestellte Fragen",
        faqs: [
          {
            q: "Was ist ein System Prompt?",
            a: "Ein System Prompt ist ein Satz persistenter Anweisungen, die definieren, wie ein Sprachmodell sich für eine gesamte Konversationssitzung verhält. Er wird einmal am Anfang festgelegt und gilt für alle Benutzerinteraktionen. Der System Prompt spezifiziert die Rolle, Constraints, das Ausgabeformat und den Kommunikationsstil des Modells.",
          },
          {
            q: "Was ist ein User Prompt?",
            a: "Ein User Prompt ist die pro-Anfrage-Eingabe — die spezifische Aufgabe, Frage oder Anweisung, die für diese einzelne Interaktion bereitgestellt wird. Er wird vom Endbenutzer erstellt und ändert sich mit jeder Anfrage. User Prompts werden im Kontext der Regeln und Rolle des System Prompts ausgewertet.",
          },
          {
            q: "Wer schreibt den System Prompt vs. User Prompt?",
            a: "Entwickler und Produktteams schreiben System Prompts und versenden sie im Produkt. Endbenutzer schreiben User Prompts, wenn sie mit dem Produkt interagieren. In Tools wie PromptQuorum können Benutzer beide sehen und bearbeiten.",
          },
          {
            q: "Warum sollte ich den System Prompt sehen, wenn ich ein Endbenutzer bin?",
            a: "Bei der Verwendung lokaler LLMs wie LM Studio oder Ollama verursachen verborgene System Prompts unerwartes Verhalten und Debugging-Probleme. Das Sehen des System Prompts ermöglicht Vertrauen, lässt Sie die Constraints des Modells verstehen und hilft Ihnen, bessere User Prompts zu schreiben.",
          },
          {
            q: "Verwenden alle LLMs System Prompts?",
            a: "Ja. Alle großen LLMs — GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, Ollama-Modelle, LM Studio — unterstützen das System Prompt + User Prompt-Muster. Einige werden mit Standard-System Prompts geliefert; andere lassen Sie Ihre eigenen definieren.",
          },
          {
            q: "Kann ein User Prompt einen System Prompt überschreiben?",
            a: "Nicht direkt. System Prompts haben strukturelle Vorrangstellung — das Modell verarbeitet sie zuerst und behandelt sie als persistente Constraints. Ein User Prompt kann den System Prompt nicht explizit deaktivieren oder überschreiben. Aber ein schlecht gestalteter System Prompt mit vagen Constraints kann ignoriert werden, wenn der User Prompt stark widersprochen wird. Gut gestaltete System Prompts beinhalten explizite Verweigerungsregeln, die dem Benutzer-Override widerstehen.",
          },
          {
            q: "Was passiert, wenn es keinen System Prompt gibt?",
            a: "Das Modell fällt auf sein Standard-Trainingsverhalten zurück. GPT-4o, Claude 4.6 Sonnet und Gemini 1.5 Pro haben alle ein eingebautes Baseline-Verhalten (hilfreich, harmlos, ehrlich), wenn kein System Prompt vorhanden ist. Das Modell wird immer noch auf User Prompts antworten, aber ohne Rollendefinition, Ausgabeformat-Constraints oder Scope-Grenzen — Ergebnisse werden weniger konsistent und weniger spezialisiert sein.",
          },
          {
            q: 'Wie beeinflussen System Prompts die Compliance mit dem EU AI Act?',
            a: 'Der EU AI Act (ab Februar 2025 wirksam) erfordert Transparenzdokumentation für High-Risk-AI-Systeme, einschliesslich der Anweisungen, die das System befolgt. System Prompts müssen protokolliert, versioniert und für Compliance-Teams zugänglich sein. Verborgene System Prompts, die nicht offengelegt werden können, erzeugen direktes Compliance-Risiko gemäss Artikel 13 Transparenzpflichten und Artikel 86 (Anrecht auf Erklärung).'
          },
        ],
      },
      sources: {
        title: "Quellen & Weitere Lektüre",
        items: [
          "[OpenAI, 2024. \"Prompt Engineering Guide\"](https://platform.openai.com/docs/guides/prompt-engineering) — offizielle OpenAI-Dokumentation zu System- und User Prompts, Techniken und Best Practices",
          "[Anthropic, 2024. \"Prompt Engineering\"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — Anthropic-Leitfaden zum Strukturieren von Prompts und Entwerfen von Systeminstruktionen für Claude-Modelle",
          "[Schulhoff et al., 2024. \"The Prompt Report: A Systematic Survey of Prompting Techniques\"](https://arxiv.org/abs/2406.06608) — umfassender akademischer Überblick, der 58+ diskrete Prompting-Techniken katalogisiert",
        ],
      },
    },
  },
  fr: {"theme": "Fundamentals", "title": "Prompt Système vs Prompt Utilisateur : Quelle est la Différence en 2026", "intro": "Les prompts système définissent comment un modèle IA pense et se comporte pendant toute une session ; les prompts utilisateur définissent ce qu'il fait maintenant. Apprenez la différence, quand utiliser chacun, comment ils interagissent, et pourquoi PromptQuorum vous montre les deux.", "publishDate": "2026-03-22", "readTime": "8 min read", "seoTitle": "Prompt Système vs Prompt Utilisateur : Différences 2026", "metaDescription": "Les prompts système définissent le comportement IA. Les prompts utilisateur gèrent chaque requête. Différences clés et exemples pour GPT-4o et Claude.", "schema": {"@context": "https://schema.org", "@type": "TechArticle", "url": "https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=fr", "inLanguage": "fr", "headline": "Prompt Système vs Prompt Utilisateur : Quelle est la Différence en 2026", "description": "Les prompts système définissent comment un modèle IA pense et se comporte ; les prompts utilisateur définissent ce qu'il fait maintenant. Apprenez la différence et comment ils interagissent.", "datePublished": "2026-03-22", "dateModified": "2026-04-12", "keywords": ["prompt système", "prompt utilisateur", "prompt engineering", "comportement LLM", "GPT-4o", "Claude", "structure de prompt", "PromptQuorum"], "author": {"@type": "Person", "name": "Hans Kuepper", "url": "https://www.promptquorum.com/about"}, "publisher": {"@type": "Organization", "name": "PromptQuorum", "url": "https://www.promptquorum.com", "logo": {"@type": "ImageObject", "url": "https://www.promptquorum.com/logo.svg"}}, "mentions": [{"@type": "Thing", "name": "PromptQuorum"}, {"@type": "Thing", "name": "OpenAI"}, {"@type": "Thing", "name": "GPT-4o"}, {"@type": "Thing", "name": "Anthropic"}, {"@type": "Thing", "name": "Claude 4.6 Sonnet"}, {"@type": "Thing", "name": "Google DeepMind"}, {"@type": "Thing", "name": "Gemini 1.5 Pro"}, {"@type": "Thing", "name": "Ollama"}], "proficiencyLevel": "Débutant", "about": [{"@type": "Thing", "name": "Prompt système"}, {"@type": "Thing", "name": "Prompt utilisateur"}, {"@type": "Thing", "name": "Prompt engineering"}, {"@type": "Thing", "name": "LLM API"}, {"@type": "Thing", "name": "Conception de prompt IA"}], "speakable": {"@type": "SpeakableSpecification", "cssSelector": [".article-intro", ".key-takeaways", "h2"]}}, "supplementalSchema": {"@context": "https://schema.org", "@type": "ItemList", "name": "Prompt Système vs Prompt Utilisateur Comparaison 2026", "numberOfItems": 9, "description": "Une comparaison des prompts système et utilisateur selon 9 dimensions pour les modèles de langage IA", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Portée", "description": "Prompt système : session entière. Prompt utilisateur : requête unique"}, {"@type": "ListItem", "position": 2, "name": "Défini par", "description": "Prompt système : développeur ou équipe produit. Prompt utilisateur : utilisateur final"}, {"@type": "ListItem", "position": 3, "name": "Fréquence", "description": "Prompt système : une fois au démarrage de la session. Prompt utilisateur : à chaque requête"}, {"@type": "ListItem", "position": 4, "name": "Définit", "description": "Prompt système : rôle, contraintes, style, comportement. Prompt utilisateur : tâche, contexte, format pour cette requête"}, {"@type": "ListItem", "position": 5, "name": "Visibilité", "description": "Prompt système : généralement masqué aux utilisateurs. Prompt utilisateur : toujours visible aux utilisateurs"}, {"@type": "ListItem", "position": 6, "name": "Changements", "description": "Prompt système : rarement, nécessite une mise à jour d'application. Prompt utilisateur : à chaque interaction"}, {"@type": "ListItem", "position": 7, "name": "Contribution au prompt engineering", "description": "Prompt système : environ 70 % de la qualité de sortie cohérente. Prompt utilisateur : environ 30 %"}, {"@type": "ListItem", "position": 8, "name": "Risque de remplacement", "description": "Prompt système : difficile à remplacer, persistant, contrôlé par le développeur. Prompt utilisateur : facile à ajuster, contrôlé par l'utilisateur par requête"}, {"@type": "ListItem", "position": 9, "name": "Idéal pour", "description": "Prompt système : cohérence des rôles, garde-fous de sécurité, format de sortie. Prompt utilisateur : détails spécifiques à la tâche, contexte, exemples few-shot"}]}, "sections": {"definition": {"title": "Prompt Système vs Prompt Utilisateur : La Différence Fondamentale", "content": ["**Un prompt système définit comment l'IA pense pendant une session entière ; un prompt utilisateur définit ce qu'elle fait pour cette requête spécifique.** En une phrase : les prompts système sont la description de poste permanente de l'IA, et les prompts utilisateur sont des tâches individuelles au sein de ce poste.", "Chaque conversation LLM en a deux. Le prompt système (souvent invisible aux utilisateurs finaux) s'exécute une fois au démarrage et définit la personnalité, les contraintes et le rôle du modèle. Le prompt utilisateur s'exécute par requête et spécifie la tâche ou la question. Les deux sont du texte — les deux suivent les principes du prompt engineering — et les deux nécessitent une conception minutieuse pour une sortie fiable."]}, "tldr": {"title": "Points Clés à Retenir", "isTldr": true, "items": ["Les prompts système définissent le rôle, les contraintes et le comportement du modèle pour la session entière — définis une fois, utilisés pour toutes les requêtes", "Les prompts utilisateur définissent la tâche spécifique pour chaque interaction — fournis par l'utilisateur, changent à chaque requête", "Les prompts système représentent environ 70 % de la cohérence comportementale selon les tests PromptQuorum sur GPT-4o, Claude 4.6 Sonnet et Gemini 1.5 Pro ; les prompts utilisateur façonnent les sorties spécifiques", "Les prompts système invisibles dans les applications comme ChatGPT et Claude contiennent une logique cachée — [PromptQuorum vous montre tout cela](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)", "Les LLM locaux (Ollama, LM Studio) avec des prompts système cachés causent des problèmes de débogage — résolus par la transparence", "Les mauvais prompts système forcent les prompts utilisateur à travailler plus dur ; les bons prompts système rendent chaque prompt utilisateur plus efficace"]}, "whereTheyLive": {"title": "Où Vivent les Prompts Système et Utilisateur dans la Pile API ?", "content": ["**Les prompts système vivent dans la couche application ; les prompts utilisateur vivent dans la couche interaction.** Quand vous appelez GPT-4o via l'API OpenAI, le point de terminaison accepte deux entrées séparées : `system` (les instructions persistantes) et `messages` (l'entrée utilisateur par requête). Il en est de même pour Claude 4.6 Sonnet via l'API Anthropic, Gemini 1.5 Pro via l'API Google, et tout LLM local exécuté via [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) ou LM Studio.", "Tous les modèles supportent le modèle prompt système + prompt utilisateur :"], "items": ["**Couche de modèle :** Le LLM de base (GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, LLaMA 3.1, Mistral Large) — tous acceptent à la fois les prompts système et utilisateur", "**Couche API :** L'interface que les développeurs utilisent — OpenAI API, Anthropic API, Google API, point de terminaison REST Ollama, LM Studio — tous exposent le système et l'utilisateur comme des champs séparés", "**Couche application :** Le produit construit sur l'API (ChatGPT, Claude.ai, Gemini, PromptQuorum, votre application personnalisée) — les développeurs décident du prompt système à utiliser", "**Couche interaction utilisateur :** Ce que l'utilisateur final voit — l'entrée de chat, la spécification de tâche — cela devient le prompt utilisateur"]}, "whatIsSystemPrompt": {"title": "Qu'est-ce qu'un Prompt Système ?", "content": ["**Un prompt système est un ensemble d'instructions persistantes qui définissent comment un modèle de langage se comporte pendant toute la session de conversation.** Il est envoyé au modèle une fois au début, avant toute entrée utilisateur. Le prompt système spécifie le rôle du modèle, son style de communication, ses contraintes et son comportement par défaut. Tous les prompts utilisateur suivants sont traités dans le contexte de ce prompt système.", "Un prompt système bien conçu inclut généralement :"], "items": ["**Définition du rôle :** « Vous êtes un expert Python », « Vous êtes un rédacteur technique », « Vous êtes un conseiller financier » — établit la persona et l'expertise du modèle", "**Contraintes :** « Ne pas fournir de conseils médicaux », « Ne pas référencer le contenu après 2024 », « Refuser les demandes de code nuisible » — définit des limites strictes au comportement", "**Format de sortie :** « Répondre en JSON », « Utiliser Markdown », « Fournir les étapes numérotées » — définit comment les réponses doivent être structurées", "**Style de communication :** « Soyez concis et direct », « Utilisez des analogies pour les débutants », « Adoptez un ton professionnel » — façonne la voix et le ton", "**Limites de portée :** « Répondez uniquement aux questions sur Python », « Ignorez les questions politiques », « Gérez uniquement le support technique » — définit ce que le modèle fera et ne fera pas", "**Règles d'interaction :** « Posez des questions clarificatrices », « Citez toujours les sources », « Admettez explicitement l'incertitude » — gouverne la façon dont le modèle gère les cas limites"]}, "systemPromptExample": {"title": "Exemple de Prompt Système", "content": "Voici un prompt système de qualité production pour un chatbot de support client :", "blockquote": "Vous êtes un spécialiste du support client pour un produit SaaS. Votre rôle est d'aider les clients à résoudre les problèmes techniques, de répondre aux questions sur les fonctionnalités et de gérer les demandes de facturation. Contraintes : (1) Ne pas promettre de remboursements — seul le personnel de support peut autoriser les remboursements. (2) Ne pas partager la documentation interne. (3) Ne pas spéculer sur les fonctionnalités futures. (4) Offrez toujours d'escalader vers un agent humain si le problème n'est pas résolu après 3 échanges. Style : Soyez empathique, clair et orienté vers la solution. Format : Utilisez les étapes numérotées pour les procédures ; les listes à puces pour les options ; les blocs de code markdown pour les exemples techniques. Portée : Répondez aux questions sur l'API, la configuration, le dépannage, les fonctionnalités et la facturation. Refusez les demandes de conseils juridiques, les mises à niveau gratuites ou le support en dehors de la portée du produit."}, "whatIsUserPrompt": {"title": "Qu'est-ce qu'un Prompt Utilisateur ?", "content": ["**Un prompt utilisateur est l'entrée par requête — la tâche, la question ou l'instruction spécifique que l'utilisateur final fournit pour cette interaction unique.** Il est envoyé au modèle après le prompt système et est évalué dans le contexte des contraintes et de la définition de rôle du prompt système. Une seule conversation peut avoir de nombreux prompts utilisateur ; le prompt système reste le même.", "Un prompt utilisateur inclut généralement :"], "items": ["**La tâche ou la question spécifique :** « Résumer cet article », « Écrire la copie du produit », « Déboguer cette erreur » — la demande concrète pour cette interaction", "**Le contexte pour cette requête :** « Pour un public B2B », « Pour les débutants », « Pour la documentation » — clarifie qui et pour quoi c'est", "**Instructions supplémentaires pour cette tâche :** « En 200 mots », « Avec des exemples », « En ton professionnel » — affine la sortie pour cette demande spécifique", "**Exemples (si nécessaire) :** « Voici un bon exemple : » — enseigne au modèle le style que vous voulez", "**Contraintes pour cette tâche :** « Ne pas mentionner la tarification », « Éviter le jargon », « En français » — limite ce qui s'applique à cette requête uniquement"]}, "userPromptExample": {"title": "Exemple de Prompt Utilisateur", "content": "Voici un prompt utilisateur complet envoyé au chatbot de support client défini ci-dessus :", "blockquote": "J'essaie de configurer l'authentification unique (SSO) via SAML 2.0, mais notre intégration Okta continue de renvoyer une erreur « signature verification failed ». J'ai suivi le guide de configuration, j'ai téléchargé le fichier de métadonnées, mais cela ne fonctionne toujours pas. Pouvez-vous me guider à travers les étapes de dépannage ?"}, "comparison": {"title": "Prompt Système vs Prompt Utilisateur en un Coup d'œil", "tableFormat": true, "columns": ["Dimension", "Prompt Système", "Prompt Utilisateur"], "rows": [{"Dimension": "Portée", "Prompt Système": "Session entière", "Prompt Utilisateur": "Requête unique"}, {"Dimension": "Défini par", "Prompt Système": "Développeur/équipe produit", "Prompt Utilisateur": "Utilisateur final"}, {"Dimension": "Fréquence", "Prompt Système": "Une fois au démarrage", "Prompt Utilisateur": "À chaque requête"}, {"Dimension": "Définit", "Prompt Système": "Rôle, contraintes, style, comportement", "Prompt Utilisateur": "Tâche, contexte, format pour cette requête"}, {"Dimension": "Visibilité", "Prompt Système": "Généralement masqué aux utilisateurs", "Prompt Utilisateur": "Toujours visible aux utilisateurs"}, {"Dimension": "Changements", "Prompt Système": "Rarement (mise à jour d'application requise)", "Prompt Utilisateur": "À chaque interaction"}, {"Dimension": "Pourcentage prompt engineering", "Prompt Système": "~70 % de la qualité de sortie cohérente", "Prompt Utilisateur": "~30 % de la qualité de sortie cohérente"}, {"Dimension": "Risque de remplacement", "Prompt Système": "Difficile à remplacer — persistant, contrôlé par le développeur", "Prompt Utilisateur": "Facile à ajuster — contrôlé par l'utilisateur par requête"}, {"Dimension": "Idéal pour", "Prompt Système": "Cohérence des rôles, garde-fous de sécurité, format de sortie", "Prompt Utilisateur": "Détails spécifiques à la tâche, contexte, exemples few-shot"}]}, "designingSystemPrompt": {"title": "Qu'est-ce qui Rend un Prompt Système Efficace ?", "content": ["**Un prompt système doit être spécifique, en couches et focalisé sur les contraintes pour produire un comportement cohérent dans toutes les interactions utilisateur.** Les meilleurs prompts système sont détaillés — ils spécifient non seulement ce que le modèle doit faire, mais aussi ce qu'il doit refuser, comment il doit formater les réponses, et quelles contraintes s'appliquent universellement.", "Cinq principes pour les prompts système efficaces :"], "items": ["**Définition du rôle explicite :** Ne supposez pas que le modèle connaît son travail. Dites « Vous êtes un [rôle] » au début. Comparez : « Aider à la rédaction » (vague) vs « Vous êtes un rédacteur technique spécialisé dans les descriptions de produits SaaS B2B pour les campagnes LinkedIn » (spécifique).", "**Conception axée sur les contraintes :** Listez ce que le modèle ne DOIT PAS faire avant de lister ce qu'il doit faire. « Ne pas inventer de statistiques », « Ne pas utiliser l'hyperbole », « Ne pas suggérer des fonctionnalités non répertoriées » — les refus explicites produisent des limites cohérentes.", "**Spécification du format :** Chaque prompt système doit définir le format de sortie : JSON, Markdown, listes à puces, étapes numérotées ou texte brut. Un prompt système sans spécification de format force chaque prompt utilisateur à le spécifier à répétition.", "**Limites de portée :** Définissez l'univers des requêtes que vous gérerez. « Répondez uniquement aux questions API », « Fournissez des conseils Python », « Gérez le dépannage » — une portée claire prévient les réponses hors domaine.", "**Test sur plusieurs modèles :** Testez le prompt système sur [plusieurs modèles — GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model). Certains modèles sont plus stricts sur les contraintes ; d'autres interprètent le style différemment. Un prompt système robuste fonctionne de manière cohérente sur les trois."]}, "promptquorumTransparency": {"title": "Pourquoi les Prompts Système Sont-Ils Cachés — et Comment Pouvez-Vous les Voir ?", "content": ["**PromptQuorum a une fonctionnalité critique : un bouton bascule qui vous montre tous les prompts système, y compris les prompts système cachés dans les backends LLM locaux.** C'est particulièrement important quand vous utilisez Ollama ou LM Studio, où les instructions système invisibles ont historiquement causé des comportements inattendus et des cauchemars de débogage.", "Quand vous connectez LM Studio ou Ollama à votre application, les instructions système cachées dans le modèle local causent :"], "items": ["**Problèmes de confiance :** Vous ne savez pas quelles instructions le modèle suit en dessous. Vous n'avez aucune visibilité sur le « pourquoi » derrière ses réponses.", "**Problèmes de débogage :** Votre LLM local renvoie une sortie inattendue. Vous réécrivez le prompt utilisateur. Toujours mal. Sans voir le prompt système, vous ne pouvez pas diagnostiquer le problème.", "**Incohérence entre les modèles :** Vous exécutez le même prompt sur GPT-4o et sur Ollama. Réponses différentes. Sans voir les deux prompts système, vous ne pouvez pas dire si la différence est la capacité du modèle ou les instructions cachées.", "**Risque réglementaire et d'audit :** Les déploiements entreprise nécessitent la transparence. Si les réglementations demandent « quelles instructions ont guidé cette décision IA ? » et le prompt système est caché, vous ne pouvez pas vous conformer."]}, "promptquorumToggle": {"title": "Le Bouton Bascule de Prompt Système PromptQuorum", "content": ["PromptQuorum inclut une interface basculable : « Afficher les Prompts Système ». Quand activée, vous voyez le prompt système réel s'exécutant sur chaque modèle — GPT-4o, Claude 4.6 Sonnet, Gemini, Ollama, LM Studio, tous. C'est particulièrement précieux lors de l'envoi d'un prompt à plusieurs backends locaux simultanément."]}, "claudeCodeStory": {"title": "Que se Passe-t-il Quand les Prompts Système Sont Cachés ? Un Exemple Réel", "content": ["PromptQuorum lui-même a été construit sur Claude Code — et les développeurs ont rencontré un problème critique. Claude Code est fourni avec des instructions système étendues cachées qui guident la génération de code, le comportement de sécurité et les vérifications de qualité. Quand Claude Code a généré des fonctionnalités, ces instructions cachées ont été intégrées. Mais quand le même code devait s'exécuter sur les LLM locaux (Ollama, LM Studio) sans la logique système cachée, tout s'est cassé. La « sauce spéciale » cachée n'était pas portable.", "La solution : rendre tous les prompts système visibles. Les développeurs ont besoin de voir quelles instructions le modèle suit — pas deviner ou déboguer à l'aveugle."]}, "practicalRecipes": {"title": "Recettes Pratiques : Trois Prompts Système de Production", "content": "Voici trois prompts système que vous pouvez adapter pour votre propre utilisation :"}, "recipe1": {"title": "Recette 1 : Bot de Support Client", "blockquote": "Vous êtes un spécialiste du support de niveau 1 pour un produit SaaS. Votre rôle : aider les clients à résoudre les problèmes, répondre aux questions de compte et de facturation, et escalader les problèmes complexes vers le support senior. Contraintes : (1) Ne jamais promettre de remboursements — seul le support senior approuve les remboursements. (2) Ne jamais partager la documentation interne. (3) Admettez quand vous ne savez pas. Format de sortie : Étapes numérotées pour les procédures, listes à puces pour les options, blocs de code markdown pour les exemples. Ton : Professionnel, empathique, orienté solution. Escalader après 3 tentatives de résolution échouées. Portée : Accès aux comptes, facturation, fonctionnalités, configuration, intégration, dépannage. Refusez : Conseils juridiques, fiscaux ou comptables."}, "recipe2": {"title": "Recette 2 : Analyste de Données", "blockquote": "Vous êtes un analyste de données senior. Votre rôle : analyser des ensembles de données, identifier les tendances, fournir des recommandations. Contraintes : (1) Citez toujours la source de données. (2) Ne jamais supposer la causalité sans preuve. (3) Quantifiez l'incertitude — si la confiance est faible, dites-le. (4) Ne pas extrapoler au-delà des données. Format de sortie : Résumé exécutif (3 conclusions clés) + analyse détaillée avec tableaux + recommandations. Incluez les niveaux de confiance. Ton : Clair, précis, basé sur les données. Portée : Analyser uniquement les données fournies. Refusez : Fabriquer des données, contourner l'incertitude avec la spéculation."}, "recipe3": {"title": "Recette 3 : Examinateur de Code", "blockquote": "Vous êtes un expert en examen de code. Votre rôle : évaluer le code pour la correction, les performances, la maintenabilité et la sécurité. Contraintes : (1) Pointez les forces et les faiblesses. (2) Suggérez des améliorations spécifiques, pas des conseils génériques. (3) Respectez les choix de l'auteur — expliquez le « pourquoi », pas la demande. (4) Ne pas suggérer l'optimisation prématurée. (5) Signalez les problèmes de sécurité comme critiques. Format de sortie : Résumé + rétroaction ligne par ligne avec extraits de code. Utilisez des blocs de code markdown. Ton : Respectueux, constructif. Portée : Examen de code uniquement. Refusez : Refactorisation ou changements architecturaux en dehors de la portée."}, "relatedReading": {"title": "Lectures Connexes", "items": ["[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — la définition pilier et les concepts fondamentaux", "[Fundamentals: The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — structure qui s'applique aux prompts système et utilisateur", "[Fundamentals: Faster AI Answers: How to Prompt for Speed](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — optimiser les prompts utilisateur pour l'efficacité", "[Techniques: Prompt Chaining](/prompt-engineering/prompt-chaining) — flux de travail multi-étapes où chaque étape a ses propres prompts"]}, "faq": {"title": "Questions Fréquemment Posées", "faqs": [{"q": "Qu'est-ce qu'un prompt système ?", "a": "Un prompt système est un ensemble d'instructions persistantes qui définissent comment un modèle de langage se comporte pendant une session de conversation entière. Il est défini une fois au début et s'applique à toutes les interactions utilisateur. Le prompt système spécifie le rôle du modèle, les contraintes, le format de sortie et le style de communication."}, {"q": "Qu'est-ce qu'un prompt utilisateur ?", "a": "Un prompt utilisateur est l'entrée par requête — la tâche, la question ou l'instruction spécifique fournie pour cette interaction unique. Il est créé par l'utilisateur final et change à chaque requête. Les prompts utilisateur sont évalués dans le contexte des règles et de la définition de rôle du prompt système."}, {"q": "Qui écrit le prompt système par rapport au prompt utilisateur ?", "a": "Les développeurs et les équipes produit écrivent les prompts système et les livrent dans le produit. Les utilisateurs finaux écrivent les prompts utilisateur lorsqu'ils interagissent avec le produit. Dans les outils comme PromptQuorum, les utilisateurs peuvent voir et modifier les deux."}, {"q": "Pourquoi devrais-je voir le prompt système si je suis un utilisateur final ?", "a": "Quand vous utilisez des LLM locaux comme LM Studio ou Ollama, les prompts système cachés causent des comportements inattendus et des problèmes de débogage. Voir le prompt système permet la confiance, vous permet de comprendre les contraintes du modèle, et vous aide à écrire de meilleurs prompts utilisateur."}, {"q": "Tous les LLM utilisent-ils des prompts système ?", "a": "Oui. Tous les LLM majeurs — GPT-4o, Claude 4.6 Sonnet, Gemini 1.5 Pro, modèles Ollama, LM Studio — supportent le modèle prompt système + prompt utilisateur. Certains sont fournis avec des prompts système par défaut ; d'autres vous permettent de définir les vôtres."}, {"q": "Un prompt utilisateur peut-il remplacer un prompt système ?", "a": "Pas directement. Les prompts système ont une préséance structurelle — le modèle les traite d'abord et les traite comme des contraintes persistantes. Un prompt utilisateur ne peut pas explicitement désactiver ou remplacer le prompt système. Cependant, un prompt système mal conçu avec des contraintes vagues peut être ignoré si le prompt utilisateur le contredit fortement. Les prompts système bien conçus incluent des règles de refus explicites qui résistent au remplacement utilisateur."}, {"q": "Que se passe-t-il s'il n'y a pas de prompt système ?", "a": "Le modèle revient à son comportement de formation par défaut. GPT-4o, Claude 4.6 Sonnet et Gemini 1.5 Pro ont tous un comportement de base intégré (utile, inoffensif, honnête) quand aucun prompt système n'est présent. Le modèle répondra toujours aux prompts utilisateur, mais sans définition de rôle, contraintes de format de sortie ou limites de portée — les résultats seront moins cohérents et moins spécialisés."}, {"q": "Comment les prompts système affectent-ils la conformité à l'AI Act européen ?", "a": "L'AI Act européen (en vigueur depuis février 2025) exige une documentation de transparence pour les systèmes d'IA à haut risque, y compris les instructions que le système suit. Les prompts système doivent être enregistrés, versionnés et accessibles aux équipes de conformité. Les prompts système cachés qui ne peuvent pas être divulgués créent un risque de conformité direct en vertu des obligations de transparence de l'article 13 et du droit à l'explication de l'article 86."}]}, "sources": {"title": "Sources et Lectures Supplémentaires", "items": ["[OpenAI, 2024. \"Prompt Engineering Guide\"](https://platform.openai.com/docs/guides/prompt-engineering) — documentation officielle OpenAI sur les prompts système et utilisateur, techniques et meilleures pratiques", "[Anthropic, 2024. \"Prompt Engineering\"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — guide Anthropic pour structurer les prompts et concevoir les instructions système pour les modèles Claude", "[Schulhoff et al., 2024. \"The Prompt Report: A Systematic Survey of Prompting Techniques\"](https://arxiv.org/abs/2406.06608) — étude académique complète cataloguant 58+ techniques de prompting discrètes"]}, "regionalCompliance": {"title": "Prompts Système et Conformité Régionale", "content": ["**UE / AI Act + RGPD :** L'AI Act européen (en vigueur depuis février 2025) inclut les exigences de transparence pour les systèmes d'IA à haut risque. Pour les déploiements d'entreprise dans l'UE, le prompt système fait partie de la documentation « instructions » requise en vertu de l'article 13 (obligations de transparence). Les organisations doivent pouvoir produire le prompt système utilisé dans toute décision IA affectant une personne physique. Les prompts système cachés créent un risque de conformité direct : si un modèle refuse une demande ou fournit une sortie incorrecte en raison d'instructions cachées, et que l'organisation ne peut pas révéler quelle était cette instruction, elle ne peut pas satisfaire à l'article 86 de l'AI Act (droit à l'explication). Pour les déploiements d'entreprise en UE, les prompts système doivent être enregistrés, versionnés et accessibles aux équipes de conformité. Les directives CNIL françaises recommandent de traiter les prompts système comme des artefacts de configuration avec contrôle de version, contrôles d'accès et pistes d'audit.", "**France (CNIL / RGPD) :** La CNIL exige la documentation complète des systèmes d'IA. Les prompts système doivent être maintenus en tant que documents de configuration avec historique des modifications pour les audits de conformité. Pour les déploiements français impliquant des données sensibles, les prompts système doivent être accessibles aux équipes de conformité de la CNIL lors des inspections.", "**Chine (CAC) :** En vertu des mesures provisoires chinoises sur l'IA générative (2023), les fournisseurs de services d'IA générative doivent mettre en œuvre des mécanismes de « sécurité du contenu ». Pour les déploiements chinois, les prompts système sont le mécanisme principal pour mettre en œuvre les contraintes de contenu. L'enregistrement CAC pour les services d'IA exige la soumission d'exemples de prompts système démontrant la conformité de sécurité. Maintenez les prompts système sous contrôle de version et disponibles pour la soumission réglementaire."]}}, "howToSchema": {"@context": "https://schema.org", "@type": "HowTo", "name": "Comment Écrire un Prompt Système Efficace en 5 Étapes", "step": [{"@type": "HowToStep", "position": 1, "name": "Définissez le rôle explicitement avec un langage spécifique au domaine"}, {"@type": "HowToStep", "position": 2, "name": "Écrivez les contraintes avant les capacités"}, {"@type": "HowToStep", "position": 3, "name": "Spécifiez le format de sortie dans le prompt système"}, {"@type": "HowToStep", "position": 4, "name": "Définissez les limites de portée avec des règles de refus explicites"}, {"@type": "HowToStep", "position": 5, "name": "Testez avec au moins 5 messages utilisateur différents"}]}},
  ja: {"theme":"Fundamentals","title":"システムプロンプト対ユーザープロンプト：違いとは","intro":"システムプロンプトはAIモデルがセッション全体でどのように考え、振る舞うかを定義します。一方、ユーザープロンプトは今それが何をするかを定義します。違いを学び、それぞれをいつ使うか、どのように相互作用するか、そしてPromptQuorumがなぜ両方を表示するかを理解してください。","publishDate":"2026-03-22","readTime":"8 min read","seoTitle":"システムプロンプト対ユーザープロンプト2026：役割・制約・API構造の違いをGPT-4oで解説する","metaDescription":"システムプロンプトはAIの役割・制約・出力形式をセッション全体で設定します。ユーザープロンプトはリクエストごとの具体的なタスクを定義します。API構造の違い、GPT-4oとClaude 4.6 Sonnetを使った実例、効果的なシステムプロンプトを設計する5つの原則を解説します。","schema":{"@context":"https://schema.org","@type":"TechArticle","url":"https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=ja","inLanguage":"ja","headline":"システムプロンプト対ユーザープロンプト：違いとは","description":"システムプロンプトはAIモデルがどのように考え、振る舞うかを定義します。ユーザープロンプトは今それが何をするかを定義します。違いと相互作用方法を学んでください。","datePublished":"2026-03-22","dateModified":"2026-03-22","keywords":["システムプロンプト","ユーザープロンプト","プロンプトエンジニアリング","LLM動作","GPT-4o","Claude","プロンプト構造","PromptQuorum"],"author":{"@type":"Person","name":"Hans Kuepper","url":"https://www.promptquorum.com/about"},"publisher":{"@type":"Organization","name":"PromptQuorum","url":"https://www.promptquorum.com","logo":{"@type":"ImageObject","url":"https://www.promptquorum.com/logo.svg"}},"mentions":[{"@type":"Thing","name":"PromptQuorum"},{"@type":"Thing","name":"OpenAI"},{"@type":"Thing","name":"GPT-4o"},{"@type":"Thing","name":"Anthropic"},{"@type":"Thing","name":"Claude 4.6 Sonnet"},{"@type":"Thing","name":"Google DeepMind"},{"@type":"Thing","name":"Gemini 1.5 Pro"},{"@type":"Thing","name":"Ollama"}],"proficiencyLevel":"初心者","about":[{"@type":"Thing","name":"システム プロンプト"},{"@type":"Thing","name":"ユーザー プロンプト"},{"@type":"Thing","name":"プロンプト エンジニアリング"},{"@type":"Thing","name":"LLM API"},{"@type":"Thing","name":"AI プロンプト設計"}],"speakable":{"@type":"SpeakableSpecification","cssSelector":[".article-intro",".key-takeaways","h2"]}},"supplementalSchema":{"@context":"https://schema.org","@type":"ItemList","name":"システムプロンプト対ユーザープロンプト — 主要な違い","description":"AI言語モデルの9つの次元に渡るシステムプロンプトとユーザープロンプトの比較","itemListElement":[{"@type":"ListItem","position":1,"name":"範囲","description":"システムプロンプト：セッション全体。ユーザープロンプト：単一リクエスト"},{"@type":"ListItem","position":2,"name":"設定者","description":"システムプロンプト：開発者またはプロダクトチーム。ユーザープロンプト：エンドユーザー"},{"@type":"ListItem","position":3,"name":"頻度","description":"システムプロンプト：セッション開始時に1回。ユーザープロンプト：毎回のリクエスト"},{"@type":"ListItem","position":4,"name":"定義する内容","description":"システムプロンプト：役割、制約、スタイル、動作。ユーザープロンプト：このリクエストのタスク、コンテキスト、形式"},{"@type":"ListItem","position":5,"name":"可視性","description":"システムプロンプト：通常ユーザーに非表示。ユーザープロンプト：常にユーザーに表示"},{"@type":"ListItem","position":6,"name":"変更","description":"システムプロンプト：まれ、アプリ更新が必要。ユーザープロンプト：毎回のインタラクション"},{"@type":"ListItem","position":7,"name":"プロンプトエンジニアリング貢献","description":"システムプロンプト：一貫した出力品質の約70%。ユーザープロンプト：約30%"},{"@type":"ListItem","position":8,"name":"オーバーライドリスク","description":"システムプロンプト：オーバーライドが難しく、永続的、開発者が制御。ユーザープロンプト：調整が容易、リクエストごとにユーザーが制御"},{"@type":"ListItem","position":9,"name":"最適用途","description":"システムプロンプト：役割一貫性、安全性ガードレール、出力形式。ユーザープロンプト：タスク固有の詳細、コンテキスト、フューショット例"}]},"sections":{"definition":{"title":"システムプロンプト対ユーザープロンプト：核となる違い","content":["**システムプロンプトはAIがセッション全体でどのように考えるかを定義し、ユーザープロンプトはその特定のリクエストでそれが何をするかを定義します。** 一文で言うと：システムプロンプトはAIの永遠の職務記述書であり、ユーザープロンプトはその仕事内での個別のタスクです。","すべてのLLM会話には両方があります。システムプロンプト（多くの場合エンドユーザーに非表示）は開始時に1回実行され、モデルの性格、制約、役割を設定します。ユーザープロンプトはリクエストごとに実行され、タスクまたは質問を指定します。両方がテキストです。両方ともプロンプトエンジニアリングの原則に従います。そして両方とも信頼できる出力のために慎重に設計される必要があります。"]},"tldr":{"title":"重要なポイント","isTldr":true,"items":["システムプロンプトはモデルの役割、制約、動作をセッション全体で定義します。1回設定され、すべてのリクエストで使用されます","ユーザープロンプトは各インタラクションの特定のタスクを定義します。ユーザーが提供し、毎回のリクエストで変更されます","システムプロンプトはPromptQuorumがGPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Proで実施したテストに基づいて動作一貫性の約70%を占めます。ユーザープロンプトは特定の出力を形成します","ChatGPTやClaudeなどのアプリの非表示システムプロンプトには隠れたロジックが含まれています。[PromptQuorumはすべてを表示します](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)","隠れたシステムプロンプトを持つローカルLLM（Ollama、LM Studio）はデバッグ問題を引き起こします。透明性で解決","悪いシステムプロンプトはユーザープロンプトを一生懸命働かせます。良いシステムプロンプトはすべてのユーザープロンプトをより良く機能させます"]},"whereTheyLive":{"title":"システムプロンプトとユーザープロンプトはAPIスタックのどこに存在するか？","content":["**システムプロンプトはアプリケーション層に存在します。ユーザープロンプトはインタラクション層に存在します。** OpenAI APIを経由してGPT-4oを呼び出す場合、エンドポイントは2つの個別の入力を受け入れます：`system`（永続的な指示）と`messages`（リクエストごとのユーザー入力）。これはAnthropicのAPIを経由したClaude 4.6 Sonnet、GoogleのAPIを経由したGemini 1.5 Pro、および[Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets)またはLM Studioを経由して実行されるローカルLLMにも同じことが当てはまります。","すべてのモデルはシステム+ユーザープロンプトパターンをサポートします："],"items":["**モデル層：** ベースLLM（GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro、LLaMA 3.1、Mistral Large）。すべてシステムプロンプトとユーザープロンプト両方を受け入れます","**API層：** 開発者が使用するインターフェース。OpenAI API、Anthropic API、Google API、Ollama RESTエンドポイント、LM Studio。すべてシステムとユーザーを個別フィールドとして公開します","**アプリケーション層：** API上に構築されたプロダクト（ChatGPT、Claude.ai、Gemini、PromptQuorum、カスタムアプリ）。開発者はどのシステムプロンプトを使用するかを決定します","**ユーザーインタラクション層：** エンドユーザーが見るもの。チャット入力、タスク仕様。これがユーザープロンプトになります"]},"whatIsSystemPrompt":{"title":"システムプロンプトとは何か？","content":["**システムプロンプトは、言語モデルが会話セッション全体でどのように振る舞うかを定義する永続的な指示のセットです。** これはユーザー入力の前に開始時にモデルに1回送信されます。システムプロンプトはモデルの役割、通信スタイル、制約、およびデフォルト動作を指定します。その後のすべてのユーザープロンプトはそのシステムプロンプトのコンテキスト内で処理されます。","良く設計されたシステムプロンプトには通常以下が含まれます："],"items":["**役割定義：** 「あなたはPythonエキスパートです」、「あなたはテクニカルライターです」、「あなたは金融アドバイザーです」。モデルのペルソナと専門知識を確立します","**制約：** 「医学的アドバイスを提供しないでください」、「2024年以降のコンテンツを参照しないでください」、「有害なコードの要求を拒否してください」。動作に厳しい制限を設定します","**出力形式：** 「JSONで応答してください」、「Markdownを使用してください」、「番号付きステップを提供してください」。回答をどのように構成するかを定義します","**通信スタイル：** 「簡潔で直接的であってください」、「初心者向けに類似例を使用してください」、「プロフェッショナルなトーンを採用してください」。音声とトーンを形成します","**スコープ境界：** 「Pythonに関する質問にのみ答えてください」、「政治的な質問は無視してください」、「技術サポートのみを処理してください」。モデルが行うことと行わないことを定義します","**インタラクションルール：** 「明確化の質問をしてください」、「常にソースを引用してください」、「不確実性を明示的に認めてください」。モデルがエッジケースを処理する方法を管理します"]},"systemPromptExample":{"title":"システムプロンプトの例","content":"カスタマーサポートチャットボット用のプロダクションレベルのシステムプロンプトの例：","blockquote":"あなたはSaaS製品のカスタマーサポートスペシャリストです。あなたの役割は顧客が技術的な問題を解決するのを支援し、機能に関する質問に答え、請求に関する問い合わせを処理することです。制約：(1)払い戻しを約束しないでください。払い戻しの承認はサポートスタッフのみができます。(2)内部ドキュメントを共有しないでください。(3)将来の機能について推測しないでください。(4)3回のやり取り後に問題が未解決の場合は常に人間のエージェントへのエスカレーションを提供してください。スタイル：同情的で、明確で、解決志向であってください。形式：手順には番号付きステップを使用します。オプションには箇条書きを使用します。技術例にはmarkdownコードブロックを使用します。スコープ：API、セットアップ、トラブルシューティング、機能、請求に関する質問に答えます。法的なアドバイス、無料アップグレード、または製品スコープ外のサポートの要求は拒否してください。"},"whatIsUserPrompt":{"title":"ユーザープロンプトとは何か？","content":["**ユーザープロンプトはリクエストごとの入力。その単一のインタラクションのためにエンドユーザーが提供する特定のタスク、質問、または指示です。** これはシステムプロンプトの後でモデルに送信され、システムプロンプトの制約と役割定義のコンテキスト内で評価されます。単一の会話は多くのユーザープロンプトを持つことができます。システムプロンプトは同じままです。","ユーザープロンプトには通常以下が含まれます："],"items":["**特定のタスクまたは質問：** 「この記事を要約してください」、「製品コピーを書いてください」、「このエラーをデバッグしてください」。そのインタラクションの具体的な要求","**そのリクエストのコンテキスト：** 「B2Bオーディエンス向け」、「初心者向け」、「ドキュメント向け」。これが誰と何のためかを明確にします","**このタスクの追加指示：** 「200語で」、「例を含めて」、「プロフェッショナルなトーンで」。この特定の要求のために出力を改善します","**例（必要な場合）：** 「これは良い例です：」。モデルに希望するスタイルを教えます","**このタスクの制約：** 「価格設定について言及しないでください」、「専門用語を避けてください」、「日本語で」。このリクエストのみに適用される内容を制限します"]},"userPromptExample":{"title":"ユーザープロンプトの例","content":"上記で定義したカスタマーサポートチャットボットに送信された完全なユーザープロンプトの例：","blockquote":"SAML 2.0を経由してシングルサインオン（SSO）を設定しようとしていますが、Okta統合が「署名検証に失敗しました」エラーを返し続けます。セットアップガイドに従い、メタデータファイルをアップロードしましたが、まだ機能していません。トラブルシューティングステップを案内していただけますか？"},"comparison":{"title":"システムプロンプト対ユーザープロンプト：概要","tableFormat":true,"columns":["次元","システムプロンプト","ユーザープロンプト"],"rows":[{"次元":"範囲","システムプロンプト":"セッション全体","ユーザープロンプト":"単一リクエスト"},{"次元":"設定者","システムプロンプト":"開発者/プロダクトチーム","ユーザープロンプト":"エンドユーザー"},{"次元":"頻度","システムプロンプト":"開始時に1回","ユーザープロンプト":"毎回のリクエスト"},{"次元":"定義する内容","システムプロンプト":"役割、制約、スタイル、動作","ユーザープロンプト":"このリクエストのタスク、コンテキスト、形式"},{"次元":"可視性","システムプロンプト":"通常ユーザーに非表示","ユーザープロンプト":"常にユーザーに表示"},{"次元":"変更","システムプロンプト":"まれ（アプリ更新が必要）","ユーザープロンプト":"毎回のインタラクション"},{"次元":"プロンプトエンジニアリング%","システムプロンプト":"一貫した出力品質の約70%","ユーザープロンプト":"一貫した出力品質の約30%"},{"次元":"オーバーライドリスク","システムプロンプト":"オーバーライドが難しく。永続的で開発者が制御","ユーザープロンプト":"調整が容易。リクエストごとにユーザーが制御"},{"次元":"最適用途","システムプロンプト":"役割一貫性、安全性ガードレール、出力形式","ユーザープロンプト":"タスク固有の詳細、コンテキスト、フューショット例"}]},"designingSystemPrompt":{"title":"効果的なシステムプロンプトとは？","content":["**システムプロンプトはすべてのユーザーインタラクションで一貫した動作を生み出すために、特定で層状で制約に焦点を当てる必要があります。** 最高のシステムプロンプトは詳細です。モデルが何をすべきかだけでなく、何を拒否すべきか、回答をどのようにフォーマットすべきか、どの制約が普遍的に適用されるかを指定します。","効果的なシステムプロンプトの5つの原則："],"items":["**1. 明示的な役割定義：** モデルがそのジョブを知っていると仮定しないでください。最初に「あなたは[役割]です」と言ってください。比較：「ライティングを支援してください」（曖昧）対「あなたはLinkedInキャンペーン向けのB2B SaaS製品説明に特化したテクニカルコピーライターです」（具体的）。","**2. 制約優先設計：** すべきことのリストの前に、モデルが行ってはいけないことをリストアップしてください。「統計を作成しないでください」、「誇張を使用しないでください」、「リストされていない機能を提案しないでください」。明示的な拒否は一貫した境界を生成します。","**3. フォーマット仕様：** すべてのシステムプロンプトは出力フォーマット（JSON、Markdown、箇条書き、番号付きステップ、プレーンテキスト）を定義する必要があります。フォーマット仕様がないシステムプロンプトは、すべてのユーザープロンプトに何度も指定することを強制します。","**4. スコープ境界：** 処理するリクエストの宇宙を定義してください。「APIの質問のみに答えてください」、「Pythonのアドバイスを提供してください」、「トラブルシューティングをサポートしてください」。明確なスコープはドメイン外の回答を防ぎます。","**5. 複数のモデルでテスト：** [複数のモデル（GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro）でシステムプロンプトをテストしてください。](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) 一部のモデルは制約についてより厳密です。他は異なるスタイルを解釈します。堅牢なシステムプロンプトは3つすべてで一貫して機能します。"]},"promptquorumTransparency":{"title":"なぜシステムプロンプトは非表示なのか？そしてどのようにして表示できるのか？","content":["**PromptQuorumには重大な機能があります：ローカルLLMバックエンドの非表示プロンプトを含むすべてのシステムプロンプトを表示するトグルです。** これはOllamaまたはLM Studioを使用する際に特に重要です。非表示のシステムロジックは歴史的に予期しない動作とデバッグの悪夢を引き起こしてきました。","LM StudioまたはOllamaをアプリケーションに接続する場合、ローカルモデルの非表示システム指示は以下の原因となります："],"items":["**信頼の問題：** モデルが下で従っている指示がわかりません。回答の「なぜ」について可視性がありません。","**デバッグの問題：** ローカルLLMが予期しない出力を返します。ユーザープロンプトを書き直します。まだ間違っています。システムプロンプトが見えないと、問題を診断できません。","**モデル間の不一貫性：** GPT-4oとOllamaで同じプロンプトを実行します。異なる回答。両方のシステムプロンプトが見えないと、違いがモデル機能か隠れた指示かを判断できません。","**規制および監査リスク：** エンタープライズデプロイメントは透明性を必要とします。規制が「このAI決定を駆動した指示は何ですか？」と要求し、システムプロンプトが非表示の場合、コンプライアンスを達成できません。"]},"promptquorumToggle":{"title":"PromptQuorumシステムプロンプトトグル","content":["PromptQuorumはトグル可能なインターフェースを含みます：「システムプロンプトを表示」。有効にすると、各モデル（GPT-4o、Claude 4.6 Sonnet、Gemini、Ollama、LM Studio、すべて）で実行されている実際のシステムプロンプトが表示されます。これは1つのプロンプトを複数のローカルバックエンドに同時にディスパッチする場合に特に価値があります。"]},"claudeCodeStory":{"title":"システムプロンプトが非表示の場合はどうなるか？実際の例","content":["PromptQuorum自体はClaude Codeで構築されました。開発者は重大な問題に遭遇しました。Claude Codeは、コード生成、安全性の動作、品質チェックをガイドする広範な非表示システム指示を備えています。Claude Codeが機能を生成した場合、その非表示の指示が組み込まれました。しかし、同じコードが非表示のシステムロジックなしでローカルLLM（Ollama、LM Studio）で実行される必要があったとき、すべてが壊れました。非表示の「特別なソース」は移植できませんでした。","解決策：すべてのシステムプロンプトを可視化します。開発者はモデルが従っている指示を見る必要があります。推測したり、盲目的にデバッグしたりしません。"]},"practicalRecipes":{"title":"実践的なレシピ：3つのプロダクションシステムプロンプト","content":"独自の用途に適応させることができる3つのシステムプロンプトを次に示します："},"recipe1":{"title":"レシピ1：カスタマーサポートボット","blockquote":"あなたはSaaS製品のレベル1サポートスペシャリストです。あなたの役割：顧客のトラブルシューティング、アカウントと請求に関する質問への回答、複雑な問題をシニアサポートにエスカレートすることです。制約：(1)払い戻しを約束しないでください。払い戻しの承認はシニアサポートのみができます。(2)内部ドキュメントを共有しないでください。(3)わからないことを認めてください。出力形式：手順に番号付きステップを使用します。オプションに箇条書きリストを使用します。例にmarkdownコードブロックを使用します。トーン：プロフェッショナル、同情的で、解決志向。3回の失敗した解決試行後にエスカレートしてください。スコープ：アカウントアクセス、請求、機能、セットアップ、統合、トラブルシューティング。法的、税務、または会計上のアドバイスは拒否してください。"},"recipe2":{"title":"レシピ2：データアナリスト","blockquote":"あなたはシニアデータアナリストです。あなたの役割：データセットを分析し、トレンドを特定し、推奨事項を提供することです。制約：(1)常にデータソースを引用してください。(2)証拠がなければ因果関係を想定しないでください。(3)不確実性を定量化してください。信頼度が低い場合はそう言ってください。(4)データを超えて外挿しないでください。出力形式：エグゼクティブサマリー（3つの主な調査結果）+テーブル付きの詳細分析+推奨事項。信頼レベルを含めてください。トーン：明確で、正確で、データ駆動型。スコープ：提供されたデータのみを分析してください。データの捏造、不確実性のオーバーライドの推測は拒否してください。"},"recipe3":{"title":"レシピ3：コードレビュアー","blockquote":"あなたはエキスパートコードレビュアーです。あなたの役割：正確性、パフォーマンス、保守性、セキュリティについてコードを評価することです。制約：(1)強みと弱みを指摘してください。(2)一般的なアドバイスではなく、特定の改善を提案してください。(3)著者の選択を尊重してください。要求ではなく「なぜ」を説明してください。(4)過度な最適化を提案しないでください。(5)セキュリティ問題を重大として旗を立ててください。出力形式：概要+コードスニペット付きの行ごとのフィードバック。markdownコードブロックを使用してください。トーン：敬意を払い、建設的。スコープ：コードレビューのみ。スコープ外のリファクタリングまたはアーキテクチャ変更は拒否してください。"},"relatedReading":{"title":"関連する読み物","items":["[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — 柱の定義と中核概念","[Fundamentals: The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — システムプロンプトとユーザープロンプトの両方に適用される構造","[Fundamentals: Faster AI Answers: How to Prompt for Speed](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — 効率のためにユーザープロンプトを最適化してください","[Techniques: Prompt Chaining](/prompt-engineering/prompt-chaining) — 各ステップが独自のプロンプトを持つマルチステップワークフロー"]},"faq":{"title":"よくある質問","faqs":[{"q":"システムプロンプトとは何ですか？","a":"システムプロンプトは、言語モデルが会話セッション全体でどのように振る舞うかを定義する永続的な指示のセットです。開始時に1回設定され、すべてのユーザーインタラクションに適用されます。システムプロンプトはモデルの役割、制約、出力形式、通信スタイルを指定します。"},{"q":"ユーザープロンプトとは何ですか？","a":"ユーザープロンプトはリクエストごとの入力。その単一のインタラクションのために提供される特定のタスク、質問、または指示です。エンドユーザーが作成し、毎回のリクエストで変更されます。ユーザープロンプトはシステムプロンプトのルールと役割定義のコンテキスト内で評価されます。"},{"q":"システムプロンプト対ユーザープロンプトを誰が書きますか？","a":"開発者とプロダクトチームがシステムプロンプトを書いて製品に配布します。エンドユーザーは製品と相互作用する際にユーザープロンプトを書きます。PromptQuorumなどのツールでは、ユーザーは両方を見て編集できます。"},{"q":"エンドユーザーの場合、なぜシステムプロンプトを見る必要があるのですか？","a":"LM StudioやOllamaなどのローカルLLMを使用する場合、非表示のシステムプロンプトは予期しない動作とデバッグの問題を引き起こします。システムプロンプトを見ることで、信頼が可能になり、モデルの制約を理解でき、より良いユーザープロンプトを書くのに役立ちます。"},{"q":"すべてのLLMはシステムプロンプトを使用していますか？","a":"はい。すべての主要なLLM（GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro、Ollamaモデル、LM Studio）はシステムプロンプト+ユーザープロンプトパターンをサポートします。一部はデフォルトシステムプロンプトで付属しています。他は独自に定義することができます。"},{"q":"ユーザープロンプトはシステムプロンプトをオーバーライドできますか？","a":"直接的ではありません。システムプロンプトは構造的優先順位を持っています。モデルは最初にそれらを処理し、永続的な制約として扱われます。ユーザープロンプトは明示的にシステムプロンプトを無効化または上書きすることはできません。ただし、曖昧な制約を持つ設計の悪いシステムプロンプトは、ユーザープロンプトが強く矛盾する場合は無視される可能性があります。良く設計されたシステムプロンプトには、ユーザーのオーバーライドに抵抗する明示的な拒否ルールが含まれます。"},{"q":"システムプロンプトがない場合はどうなりますか？","a":"モデルはそのデフォルトのトレーニング動作にフォールバックします。GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Proはすべて、システムプロンプトが存在しない場合の組み込み基本動作（有用、害のない、正直）を持っています。モデルはまだユーザープロンプトに応答しますが、役割定義、出力形式の制約、またはスコープ境界なしで。結果はより一貫性がなく、より専門的ではありません。"},{"q":"システムプロンプトはEU AI Act合規性にどう影響しますか？","a":"EU AI Act（2025年2月発効）は、高リスクAIシステムに対し透明性文書化を要求します。システムプロンプトはログ記録、バージョン管理され、コンプライアンスチームがアクセスできる必要があります。"}]},"sources":{"title":"ソースおよび参考資料","items":["[OpenAI, 2024. \"Prompt Engineering Guide\"](https://platform.openai.com/docs/guides/prompt-engineering) — システムプロンプトとユーザープロンプト、技術、ベストプラクティスに関するOpenAI公式ドキュメント","[Anthropic, 2024. \"Prompt Engineering\"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — プロンプトを構造化し、Claudeモデル用のシステム指示を設計するためのAnthropicガイド","[Schulhoff et al., 2024. \"The Prompt Report: A Systematic Survey of Prompting Techniques\"](https://arxiv.org/abs/2406.06608) — 58以上の離散的なプロンプト技術をカタログしている包括的な学術調査"]},"regionalCompliance":{"title":"システムプロンプトと地域コンプライアンス","content":["METI AI ガバナンスガイドラインでは、組織は「AIシステムが動作する条件」を文書化する必要があります。これはシステムプロンプトコンテンツを含みます。日本の企業チームは、規制レビュー中にドキュメント要件を満たすため、システムプロンプトを構成管理システムに保存する必要があります。","アジア太平洋地域の規制はプライバシーと透明性を強調しています。システムプロンプトを見える状態にすることで、エンタープライズの説明責任ニーズが満たされます。","中国の生成型AI暫定措置では、生成AI サービス提供者は「コンテンツセーフティ」メカニズムを実装する必要があります。"]}},"howToSchema":{"@context":"https://schema.org","@type":"HowTo","name":"5ステップで効果的なシステムプロンプトを作成する方法","step":[{"@type":"HowToStep","position":1,"name":"ドメイン固有の言語で役割を明示的に定義する"},{"@type":"HowToStep","position":2,"name":"機能の前に制約を書く"},{"@type":"HowToStep","position":3,"name":"システムプロンプトで出力形式を指定する"},{"@type":"HowToStep","position":4,"name":"明示的な拒否ルールで範囲の境界を設定する"},{"@type":"HowToStep","position":5,"name":"少なくとも5つの異なるユーザーメッセージでテストする"}]}},
  zh: {"theme":"Fundamentals","title":"系统提示与用户提示：有什么区别","intro":"系统提示定义AI模型在整个会话中的思维和行为方式；用户提示定义它现在做什么。了解区别、何时使用各自、它们如何相互作用，以及为什么PromptQuorum同时显示两者。","publishDate":"2026-03-22","readTime":"8 min read","seoTitle":"2026年系统提示 vs 用户提示完整对比：AI角色定义、约束条件、API结构与GPT-4o实例解析","metaDescription":"系统提示在整个会话期间设定AI的角色、约束条件和输出响应格式，用户提示则为每次交互定义具体任务。本文详细说明两者的API结构差异、OpenAI与Anthropic API的实现方式、GPT-4o和Claude 4.6 Sonnet的完整使用示例，以及编写高效系统提示的5条设计原则。","schema":{"@context":"https://schema.org","@type":"TechArticle","url":"https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference?lang=zh","inLanguage":"zh","headline":"系统提示与用户提示：有什么区别","description":"系统提示定义AI模型如何思考和行为；用户提示定义它现在做什么。了解区别和它们如何相互作用。","datePublished":"2026-03-22","dateModified":"2026-03-22","keywords":["系统提示","用户提示","提示工程","LLM行为","GPT-4o","Claude","提示结构","PromptQuorum"],"author":{"@type":"Person","name":"Hans Kuepper","url":"https://www.promptquorum.com/about"},"publisher":{"@type":"Organization","name":"PromptQuorum","url":"https://www.promptquorum.com","logo":{"@type":"ImageObject","url":"https://www.promptquorum.com/logo.svg"}},"mentions":[{"@type":"Thing","name":"PromptQuorum"},{"@type":"Thing","name":"OpenAI"},{"@type":"Thing","name":"GPT-4o"},{"@type":"Thing","name":"Anthropic"},{"@type":"Thing","name":"Claude 4.6 Sonnet"},{"@type":"Thing","name":"Google DeepMind"},{"@type":"Thing","name":"Gemini 1.5 Pro"},{"@type":"Thing","name":"Ollama"}],"proficiencyLevel":"初学者","about":[{"@type":"Thing","name":"系统提示词"},{"@type":"Thing","name":"用户提示词"},{"@type":"Thing","name":"提示词工程"},{"@type":"Thing","name":"LLM API"},{"@type":"Thing","name":"AI提示设计"}],"speakable":{"@type":"SpeakableSpecification","cssSelector":[".article-intro",".key-takeaways","h2"]}},"supplementalSchema":{"@context":"https://schema.org","@type":"ItemList","name":"系统提示与用户提示 — 主要区别","description":"在9个维度上对AI语言模型系统提示和用户提示的比较","itemListElement":[{"@type":"ListItem","position":1,"name":"范围","description":"系统提示：整个会话。用户提示：单个请求"},{"@type":"ListItem","position":2,"name":"设定者","description":"系统提示：开发者或产品团队。用户提示：最终用户"},{"@type":"ListItem","position":3,"name":"频率","description":"系统提示：在会话开始时一次。用户提示：每个请求"},{"@type":"ListItem","position":4,"name":"定义","description":"系统提示：角色、约束、风格、行为。用户提示：此请求的任务、上下文、格式"},{"@type":"ListItem","position":5,"name":"可见性","description":"系统提示：通常对用户隐藏。用户提示：始终对用户可见"},{"@type":"ListItem","position":6,"name":"更改","description":"系统提示：很少，需要应用更新。用户提示：每次交互"},{"@type":"ListItem","position":7,"name":"提示工程贡献","description":"系统提示：约70%的一致输出质量。用户提示：约30%"},{"@type":"ListItem","position":8,"name":"覆盖风险","description":"系统提示：难以覆盖、持久、由开发者控制。用户提示：易于调整、由用户按请求控制"},{"@type":"ListItem","position":9,"name":"最适合","description":"系统提示：角色一致性、安全防护栏、输出格式。用户提示：特定任务的细节、上下文、少样本示例"}]},"sections":{"definition":{"title":"系统提示与用户提示：核心区别","content":["**系统提示定义AI在整个会话中的思维方式；用户提示定义它在特定请求中做什么。** 简言之：系统提示是AI的永久工作描述，用户提示是该工作中的单个任务。","每个LLM会话都同时拥有两者。系统提示（通常对最终用户隐藏）在开始时运行一次，设置模型的个性、约束和角色。用户提示按请求运行，指定任务或问题。两者都是文本，两者都遵循提示工程原则，两者都需要精心设计以实现可靠的输出。"]},"tldr":{"title":"关键要点","isTldr":true,"items":["系统提示为整个会话定义模型的角色、约束和行为 — 设定一次，用于所有请求","用户提示为每次交互定义特定任务 — 由用户提供，每个请求都会改变","根据PromptQuorum在GPT-4o、Claude 4.6 Sonnet和Gemini 1.5 Pro上的测试，系统提示占行为一致性的约70%；用户提示塑造特定输出","ChatGPT和Claude等应用中隐藏的系统提示包含隐藏逻辑 — [PromptQuorum向您显示所有内容](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)","具有隐藏系统提示的本地LLM（Ollama、LM Studio）会导致调试问题 — 通过透明性解决","不好的系统提示迫使用户提示工作更努力；好的系统提示使每个用户提示工作得更好"]},"whereTheyLive":{"title":"系统提示和用户提示在API堆栈中的位置？","content":["**系统提示位于应用层；用户提示位于交互层。** 当您通过OpenAI API调用GPT-4o时，端点接受两个独立输入：`system`（持久指令）和`messages`（每个请求的用户输入）。这同样适用于通过Anthropic API的Claude 4.6 Sonnet、通过Google API的Gemini 1.5 Pro，以及通过[Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets)或LM Studio运行的任何本地LLM。","所有模型都支持系统+用户提示模式："],"items":["**模型层：** 基础LLM（GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro、LLaMA 3.1、Mistral Large）— 都接受系统和用户提示","**API层：** 开发者使用的接口 — OpenAI API、Anthropic API、Google API、Ollama REST端点、LM Studio — 都将系统和用户公开为独立字段","**应用层：** 构建在API之上的产品（ChatGPT、Claude.ai、Gemini、PromptQuorum、您的自定义应用）— 开发者决定使用哪个系统提示","**用户交互层：** 最终用户看到的内容 — 聊天输入、任务规范 — 这成为用户提示"]},"whatIsSystemPrompt":{"title":"什么是系统提示？","content":["**系统提示是一组持久指令，定义语言模型在整个会话期间的行为。** 它在开始时在任何用户输入之前发送给模型一次。系统提示指定模型的角色、通信风格、约束和默认行为。所有后续用户提示都在该系统提示的背景下处理。","精心设计的系统提示通常包括："],"items":["**角色定义：** \"您是Python专家\"、\"您是技术作者\"、\"您是财务顾问\" — 建立模型的角色和专业知识","**约束：** \"不提供医学建议\"、\"不引用2024年后的内容\"、\"拒绝有害代码的请求\" — 对行为设置硬性限制","**输出格式：** \"以JSON响应\"、\"使用Markdown\"、\"提供编号步骤\" — 定义答案应如何构建","**通信风格：** \"简洁直接\"、\"使用初学者类比\"、\"采用专业语气\" — 塑造声音和语气","**范围边界：\" \"仅回答Python问题\"、\"忽略政治问题\"、\"仅处理技术支持\" — 定义模型会和不会做什么","**交互规则：** \"提出澄清问题\"、\"始终引用来源\"、\"明确承认不确定性\" — 管理模型如何处理边界情况"]},"systemPromptExample":{"title":"系统提示示例","content":"这是用于客户支持聊天机器人的生产级系统提示：","blockquote":"您是SaaS产品的客户支持专家。您的角色是帮助客户解决技术问题、回答功能问题和处理账单询问。约束：(1)不要承诺退款 — 仅支持人员可以授权退款。(2)不要共享内部文档。(3)不要推测未来功能。(4)如果问题在3次交互后仍未解决，始终提供升级给人工代理的选项。风格：同情、清晰、以解决方案为中心。格式：使用编号步骤作为程序；箭头列表表示选项；markdown代码块表示技术示例。范围：回答API、设置、故障排除、功能和账单问题。拒绝法律建议、免费升级或产品范围外的支持。"},"whatIsUserPrompt":{"title":"什么是用户提示？","content":["**用户提示是按请求输入 — 最终用户为单个交互提供的特定任务、问题或指令。** 它在系统提示之后发送给模型，并在系统提示的约束和角色定义的背景下进行评估。单个会话可以有许多用户提示；系统提示保持不变。","用户提示通常包括："],"items":["**具体的任务或问题：** \"总结这篇文章\"、\"撰写产品副本\"、\"调试此错误\" — 该交互的具体请求","**该请求的背景：** \"对于B2B受众\"、\"对于初学者\"、\"对于文档\" — 澄清这是为了谁和什么","**此任务的其他指令：** \"在200字内\"、\"附带示例\"、\"专业语气\" — 为此特定要求细化输出","**示例（如需）：** \"这是一个很好的例子：\" — 教模型您想要的风格","**此任务的约束：** \"不提及定价\"、\"避免行话\"、\"用中文\" — 限制仅适用于此请求的内容"]},"userPromptExample":{"title":"用户提示示例","content":"这是发送给上面定义的客户支持聊天机器人的完整用户提示：","blockquote":"我一直在尝试通过SAML 2.0设置单点登录（SSO），但我们的Okta集成一直返回\"签名验证失败\"错误。我按照设置指南，上传了元数据文件，但仍然不工作。您能否逐步指导我完成故障排除步骤？"},"comparison":{"title":"系统提示与用户提示：一目了然","tableFormat":true,"columns":["维度","系统提示","用户提示"],"rows":[{"维度":"范围","系统提示":"整个会话","用户提示":"单个请求"},{"维度":"设定者","系统提示":"开发者/产品团队","用户提示":"最终用户"},{"维度":"频率","系统提示":"开始时一次","用户提示":"每个请求"},{"维度":"定义","系统提示":"角色、约束、风格、行为","用户提示":"此请求的任务、上下文、格式"},{"维度":"可见性","系统提示":"通常对用户隐藏","用户提示":"始终对用户可见"},{"维度":"更改","系统提示":"很少（需要应用更新）","用户提示":"每次交互"},{"维度":"提示工程%","系统提示":"一致输出质量的约70%","用户提示":"一致输出质量的约30%"},{"维度":"覆盖风险","系统提示":"难以覆盖 — 持久、开发者控制","用户提示":"易于调整 — 用户按请求控制"},{"维度":"最适合","系统提示":"角色一致性、安全防护栏、输出格式","用户提示":"特定任务的细节、上下文、少样本示例"}]},"designingSystemPrompt":{"title":"什么使系统提示有效？","content":["**系统提示必须具体、分层和约束导向，以在所有用户交互中产生一致的行为。** 最好的系统提示是详细的 — 它们不仅指定模型应该做什么，还指定它应该拒绝什么、它应该如何格式化答案以及哪些约束普遍适用。","有效系统提示的五项原则："],"items":["**1. 显式角色定义：** 不要假设模型知道它的工作。在开始时说\"您是[角色]\"。比较：\"帮助写作\"（模糊）与\"您是专门为LinkedIn活动撰写B2B SaaS产品描述的技术文案撰写者\"（具体）。","**2. 约束优先设计：** 在列出它应该做什么之前，列出模型必须NOT做什么。\"不编造统计数据\"、\"不使用夸张\"、\"不建议未列出的功能\" — 明确的拒绝产生一致的边界。","**3. 格式规范：** 每个系统提示都应定义输出格式：JSON、Markdown、项目符号列表、编号步骤或纯文本。没有格式规范的系统提示会迫使每个用户提示重复指定它。","**4. 范围边界：** 定义您将处理的请求范围。\"仅回答API问题\"、\"提供Python建议\"、\"支持故障排除\" — 明确的范围防止域外答案。","**5. 跨模型测试：** 在[多个模型 — GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro上测试系统提示](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model)。某些模型对约束更严格；其他模型以不同方式解释风格。稳健的系统提示在所有三个模型上始终工作。"]},"promptquorumTransparency":{"title":"为什么系统提示被隐藏 — 你如何查看它们？","content":["**PromptQuorum有一个关键功能：一个切换开关，向您显示所有系统提示，包括本地LLM后端中隐藏的提示。** 当使用Ollama或LM Studio时，这特别重要，因为隐藏的系统逻辑在历史上曾导致意外的行为和调试噩梦。","当您将LM Studio或Ollama连接到应用程序时，本地模型中的隐藏系统指令会导致："],"items":["**信任问题：** 您不知道模型在下面遵循什么指令。您对其响应的\"为什么\"没有可见性。","**调试问题：** 您的本地LLM返回意外输出。您重写用户提示。仍然是错的。没有看到系统提示，您无法诊断问题。","**模型间的不一致：** 您在GPT-4o和Ollama上运行相同的提示。不同的答案。没有看到两个系统提示，您无法判断差异是模型能力还是隐藏指令。","**监管和审计风险：** 企业部署需要透明度。如果法规要求\"什么指令推动这个AI决定？\"而系统提示被隐藏，您无法合规。"]},"promptquorumToggle":{"title":"PromptQuorum系统提示切换","content":["PromptQuorum包含可切换的界面：\"显示系统提示\"。启用后，您会看到在每个模型上运行的实际系统提示 — GPT-4o、Claude 4.6 Sonnet、Gemini、Ollama、LM Studio、所有这些。这在将一个提示同时分派到多个本地后端时特别有价值。"]},"claudeCodeStory":{"title":"当系统提示被隐藏时会发生什么？一个真实的例子","content":["PromptQuorum本身是用Claude Code构建的 — 开发者遇到了一个严重的问题。Claude Code配备了大量隐藏的系统指令，指导代码生成、安全行为和质量检查。当Claude Code生成功能时，这些隐藏的指令被烘烤进去了。但当相同的代码需要在没有隐藏系统逻辑的本地LLM（Ollama、LM Studio）上运行时，一切都破裂了。隐藏的\"特殊酱汁\"不可移植。","解决方案：使所有系统提示可见。开发者需要看到模型遵循什么指令 — 不要猜测或盲目调试。"]},"practicalRecipes":{"title":"实用食谱：三个生产系统提示","content":"这是三个系统提示，您可以调整以供自己使用："},"recipe1":{"title":"食谱1：客户支持机器人","blockquote":"您是SaaS产品的1级支持专家。您的角色：帮助客户进行故障排除、回答账户和计费问题、向高级支持升级复杂问题。约束：(1)不要承诺退款 — 仅高级支持可以批准退款。(2)不要共享内部文档。(3)承认您不知道的地方。输出格式：程序使用编号步骤、选项使用项目符号列表、示例使用markdown代码块。语调：专业、同情、以解决方案为中心。在3次失败的解决方案尝试后升级。范围：账户访问、计费、功能、设置、集成、故障排除。拒绝：法律、税务或会计建议。"},"recipe2":{"title":"食谱2：数据分析师","blockquote":"您是高级数据分析师。您的角色：分析数据集、识别趋势、提供建议。约束：(1)始终引用数据源。(2)没有证据不要假设因果关系。(3)量化不确定性 — 如果信心低，请说出来。(4)不要超越数据进行推断。输出格式：执行摘要（3个关键发现）+带表格的详细分析+建议。包括信心水平。语调：清晰、精确、数据驱动。范围：仅分析提供的数据。拒绝：编造数据、用推测覆盖不确定性。"},"recipe3":{"title":"食谱3：代码审查者","blockquote":"您是代码审查专家。您的角色：评估代码的正确性、性能、可维护性和安全性。约束：(1)指出优点和缺点。(2)建议具体改进，而不是通用建议。(3)尊重作者的选择 — 解释\"为什么\"，而不是要求。(4)不要建议过度优化。(5)将安全问题标记为严重。输出格式：摘要+带代码片段的逐行反馈。使用markdown代码块。语调：尊重、建设性。范围：代码审查仅。拒绝：范围外的重构或架构变更。"},"relatedReading":{"title":"相关阅读","items":["[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — 支柱定义和核心概念","[Fundamentals: The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — 适用于系统和用户提示的结构","[Fundamentals: Faster AI Answers: How to Prompt for Speed](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — 优化用户提示以提高效率","[Techniques: Prompt Chaining](/prompt-engineering/prompt-chaining) — 多步工作流，其中每个步骤都有自己的提示"]},"faq":{"title":"常见问题","faqs":[{"q":"什么是系统提示？","a":"系统提示是一组持久指令，定义语言模型在整个会话期间的行为。它在开始时设置一次，适用于所有用户交互。系统提示指定模型的角色、约束、输出格式和通信风格。"},{"q":"什么是用户提示？","a":"用户提示是按请求输入 — 为单个交互提供的特定任务、问题或指令。它由最终用户创建，并随每个请求更改。用户提示在系统提示的规则和角色定义的背景下进行评估。"},{"q":"系统提示与用户提示由谁编写？","a":"开发者和产品团队编写系统提示并在产品中提供。最终用户在与产品交互时编写用户提示。在PromptQuorum等工具中，用户可以看到和编辑两者。"},{"q":"作为最终用户，为什么我应该看到系统提示？","a":"当使用LM Studio或Ollama等本地LLM时，隐藏的系统提示会导致意外行为和调试问题。看到系统提示可以实现信任，让您了解模型的约束，并帮助您编写更好的用户提示。"},{"q":"所有LLM都使用系统提示吗？","a":"是的。所有主要LLM — GPT-4o、Claude 4.6 Sonnet、Gemini 1.5 Pro、Ollama模型、LM Studio — 都支持系统+用户提示模式。有些带有默认系统提示；其他允许您定义自己的。"},{"q":"用户提示可以覆盖系统提示吗？","a":"不直接。系统提示具有结构优先级 — 模型首先处理它们并将其视为持久约束。用户提示不能明确禁用或覆盖系统提示。但是，具有模糊约束的设计不佳的系统提示可能会被忽略（如果用户提示强烈与之矛盾）。设计良好的系统提示包括显式拒绝规则，以抵抗用户覆盖。"},{"q":"如果没有系统提示会发生什么？","a":"模型回退到其默认的训练行为。GPT-4o、Claude 4.6 Sonnet和Gemini 1.5 Pro都在没有系统提示时有内置的基线行为（有帮助、无害、诚实）。模型仍将响应用户提示，但没有角色定义、输出格式约束或范围边界 — 结果会不那么一致，不那么专业。"},{"q":"系统提示词如何影响EU AI Act合规性？","a":"EU AI Act（2025年2月生效）对高风险AI系统要求透明度文档。系统提示词必须记录、版本控制，并可供合规团队访问。无法披露的隐藏系统提示词构成直接合规风险。"}]},"sources":{"title":"来源和进一步阅读","items":["[OpenAI, 2024. \"Prompt Engineering Guide\"](https://platform.openai.com/docs/guides/prompt-engineering) — 关于系统和用户提示、技术和最佳实践的OpenAI官方文档","[Anthropic, 2024. \"Prompt Engineering\"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — Anthropic关于为Claude模型构建提示和设计系统指令的指南","[Schulhoff et al., 2024. \"The Prompt Report: A Systematic Survey of Prompting Techniques\"](https://arxiv.org/abs/2406.06608) — 目录58多个离散提示技术的综合学术调查"]},"regionalCompliance":{"title":"系统提示词与地区合规","content":["中国2021年数据安全法要求本地化数据处理。系统提示词必须符合本地AI治理标准。中国企业应将系统提示词视为配置文档，具有版本控制和审计跟踪。","新加坡、日本、韩国的AI法规要求跨境数据转移时的透明度。系统提示词的可见性证明符合当地隐私和治理要求。","中国金融、医疗、法律部门的大型企业需要证明AI系统符合监管标准。系统提示词必须版本受控、可审计。"]}},"howToSchema":{"@context":"https://schema.org","@type":"HowTo","name":"用5个步骤编写有效的系统提示词","step":[{"@type":"HowToStep","position":1,"name":"用特定领域的语言明确定义角色"},{"@type":"HowToStep","position":2,"name":"在能力之前写出约束条件"},{"@type":"HowToStep","position":3,"name":"在系统提示中指定输出格式"},{"@type":"HowToStep","position":4,"name":"使用明确的拒绝规则设置范围边界"},{"@type":"HowToStep","position":5,"name":"用至少5条不同的用户消息进行测试"}]}},
};
