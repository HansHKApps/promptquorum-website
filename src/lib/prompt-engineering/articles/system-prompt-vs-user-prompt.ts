// Auto-generated from src/lib/prompt-engineering/content.original.ts
// Slug: system-prompt-vs-user-prompt
// Generated: 2026-05-04T21:45:52.890Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    theme: 'Fundamentals',
    title: 'System Prompt vs User Prompt: What\'s the Difference in 2026',
    heroImage: '/images/system-prompt-vs-user-prompt-overview-hero-en.webp',
    intro: 'System prompts define how an AI model thinks and behaves throughout an entire session; user prompts define what it does right now. Learn the difference, when to use each, how they interact, and why PromptQuorum shows you both.',
    publishDate: '2026-03-22',
    dateModified: '2026-07-13',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    primaryTerm: 'System Prompt',
    seoTitle: 'System vs User Prompt 2026: What Each One Controls',
    metaDescription: 'System prompt vs user prompt: one controls AI behavior for the entire session, one drives each turn. Includes API examples and debug patterns.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference',
      inLanguage: 'en',
      headline: 'System Prompt vs User Prompt: What\'s the Difference in 2026',
      description: 'System prompts define how an AI model thinks and behaves; user prompts define what it does right now. Learn the difference and how they interact.',
      datePublished: '2026-03-22',
      dateModified: '2026-07-13',
      keywords: ['system prompt', 'user prompt', 'prompt engineering', 'LLM behavior', 'GPT-5.6', 'Claude', 'prompt structure', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      mentions: [
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'OpenAI' },
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Anthropic' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'Google DeepMind' },
        { '@type': 'Thing', name: 'Gemini 3.5 Pro' },
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
          'System prompts account for ~70% of behavioral consistency based on PromptQuorum testing across GPT-5.6, Claude Sonnet 5, and Gemini 3.5 Pro; user prompts shape specific outputs',
          'Invisible system prompts in apps like ChatGPT and Claude contain hidden logic — [PromptQuorum shows you all of it](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)',
          'Local LLMs (Ollama, LM Studio) with hidden system prompts cause debugging problems — solved by transparency',
          'Bad system prompts force user prompts to work harder; good system prompts make every user prompt work better',
        ],
      },

      whereTheyLive: {
        title: 'Where Do System and User Prompts Live in the API Stack?',
        content: [
          '**System prompts live in the application layer; user prompts live in the interaction layer.** When you call GPT-5.6 via the OpenAI API, the endpoint accepts two separate inputs: `system` (the persistent instructions) and `messages` (per-request user input). The same is true for Claude Sonnet 5 via Anthropic\'s API, Gemini 3.5 Pro via Google\'s API, and any local LLM run through [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) or LM Studio.',
          'All models support the system + user prompt pattern:',
        ],
        items: [
          '**Model layer:** The base LLM (GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, LLaMA 3.1, Mistral Large) — all accept both system and user prompts',
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
          '**Testing across models:** Test the system prompt on [multiple models — GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model). Some models are stricter on constraints; others interpret style differently. A robust system prompt works consistently across all three.',
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
          '**Inconsistency across models:** You run the same prompt on GPT-5.6 and on Ollama. Different answers. Without seeing both system prompts, you cannot tell if the difference is model capability or hidden instructions.',
          '**Regulatory and audit risk:** Enterprise deployments require transparency. If regulations demand "what instructions drove this AI decision?" and the system prompt is hidden, you cannot comply.',
        ],
      },

      promptquorumToggle: {
        title: 'The PromptQuorum System Prompt Toggle',
        content: [
          'PromptQuorum includes a toggleable interface: "Show System Prompts." When enabled, you see the actual system prompt running on each model — GPT-5.6, Claude Sonnet 5, Gemini, Ollama, LM Studio, all of them. This is especially valuable when dispatching one prompt to multiple local backends simultaneously.',
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
          '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality) — measure system and user prompt effectiveness systematically',
          '[Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026) — testing and versioning tools for iterating on system prompts',
          '[Smarter Home Automations with a Local LLM](/smart-home/ai-automations-local-llm) — see how system prompts define the available home-control actions in a real Ollama + Home Assistant setup',
        ],
      },

      faq: {
        id: 'faq',
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
            a: 'Yes. All major LLMs — GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, Ollama models, LM Studio — support the system prompt + user prompt pattern. Some come with default system prompts; others let you define your own.'
          },
          {
            q: 'Can a user prompt override a system prompt?',
            a: 'Not directly. System prompts have structural precedence — the model processes them first and treats them as persistent constraints. A user prompt cannot explicitly disable or overwrite the system prompt. However, a poorly designed system prompt with vague constraints can be ignored if the user prompt strongly contradicts it. Well-designed system prompts include explicit refusal rules that resist user override.'
          },
          {
            q: 'What happens if there is no system prompt?',
            a: 'The model falls back to its default training behavior. GPT-5.6, Claude Sonnet 5, and Gemini 3.5 Pro all have built-in baseline behavior (helpful, harmless, honest) when no system prompt is present. The model will still respond to user prompts, but without role definition, output format constraints, or scope boundaries — results will be less consistent and less specialized.'
          },
          {
            q: 'How do system prompts affect EU AI Act compliance?',
            a: 'The EU AI Act (effective February 2025) requires transparency documentation for high-risk AI systems, including the instructions the system operates under. System prompts must be logged, versioned, and accessible to compliance teams. Hidden system prompts that cannot be disclosed create direct compliance risk under Article 13 transparency obligations and Article 86 (right to explanation).'
          },
          {
            q: 'What is the purpose of a system prompt?',
            a: 'A system prompt establishes the AI model\'s personality, constraints, and operational rules for the entire conversation. It controls how the model interprets requests, formats responses, and handles edge cases. System prompts prevent unpredictable behavior and ensure consistent output quality across all user interactions.'
          },
          {
            q: 'Is a system prompt followed more closely than a user prompt by AI agents?',
            a: 'Yes. System prompts have structural precedence in the model\'s processing order. The model reads and applies system prompts first, treating them as persistent constraints. User prompts are evaluated within the system prompt\'s boundaries. This makes system prompts harder to override and more reliable for enforcing strict behavioral rules.'
          },
          {
            q: 'What is a developer prompt and how does it relate to system prompts?',
            a: 'A developer prompt is a system prompt written by an engineer or product team to control how an AI behaves in a production application. It is a specialized type of system prompt designed for automated workflows, APIs, and non-interactive systems. Developer prompts prioritize precision and measurable outputs over conversational naturalness.'
          },
          {
            q: 'What is the pre-prompt that sits between the system prompt and user prompt?',
            a: 'The pre-prompt is an intermediate instruction block sometimes used in advanced prompting architectures. It refines the system prompt\'s scope without modifying it directly, sitting logically between the system prompt and user input. Pre-prompts are common in RAG systems and multi-turn conversations to contextualize retrieval results.'
          },
          {
            q: 'Which system prompt pattern is most effective for enforcing strict JSON output?',
            a: 'The most effective pattern combines role definition with explicit format constraints and an example. Structure: (1) role, (2) output requirement ("respond ONLY in valid JSON"), (3) schema specification, (4) escape rules. This combination forces consistency better than format instructions alone.'
          },
          {
            q: 'Are system prompts more powerful than regular user prompts?',
            a: 'Yes. System prompts account for approximately 70% of behavioral consistency according to PromptQuorum testing across multiple models. User prompts account for roughly 30%. A well-crafted system prompt can make weak user prompts work better, but a poor system prompt will undermine even excellent user prompts.'
          },
          {
            q: 'What is the difference between a core prompt and a session prompt?',
            a: 'A core prompt is the base system prompt that defines permanent rules and role. A session prompt is dynamically generated per conversation session (e.g., with session ID, user metadata, or context). Core prompts are static; session prompts are contextually generated before each session begins.'
          },
          {
            q: 'How do system prompts work differently in OpenAI, Claude, and Gemini APIs?',
            a: 'All three APIs support system prompts in the messages array, but with subtle differences. OpenAI uses `system` role at message start. Anthropic Claude uses `system` parameter. Google Gemini uses `systemInstruction` as a separate parameter. Functionality is equivalent, but implementation and token counting vary slightly across providers.'
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
    primaryTerm: "System Prompt",
    title: "System Prompt vs User Prompt: Der Unterschied in 2026",
    heroImage: '/images/system-prompt-vs-user-prompt-overview-hero-de.webp',
    intro: "System Prompts definieren, wie ein KI-Modell während einer gesamten Sitzung denkt und handelt; User Prompts definieren, was es gerade tut. Erfahren Sie den Unterschied, wann Sie welche verwenden, wie sie interagieren, und warum PromptQuorum beide zeigt.",
    publishDate: "2026-03-22",
    dateModified: "2026-07-13",
    readTime: "8 min Lesezeit",
    seoTitle: 'System Prompt vs User Prompt: Der Unterschied 2026',
    metaDescription: 'System Prompts legen das KI-Verhalten fest; User Prompts steuern jede Anfrage. Unterschied, Interaktion und Beispiele für GPT-5.6 und Claude erklärt.',
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      'url': 'https://www.promptquorum.com/de/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference',
      headline: "System Prompt vs User Prompt: Der Unterschied in 2026",
      description: "System Prompts definieren, wie ein KI-Modell denkt und handelt; User Prompts definieren, was es gerade tut. Erfahren Sie den Unterschied und wie sie interagieren.",
      datePublished: "2026-03-22",
      dateModified: "2026-07-13",
      keywords: ["System Prompt", "User Prompt", "Prompt Engineering", "LLM-Verhalten", "GPT-5.6", "Claude", "Prompt-Struktur", "PromptQuorum"],
      author: { "@type": "Person", name: "Hans Kuepper", url: "https://www.promptquorum.com/about" },
      publisher: { "@type": "Organization", name: "PromptQuorum", url: "https://www.promptquorum.com", logo: { "@type": "ImageObject", url: "https://www.promptquorum.com/logo.svg" } },
      mentions: [
        { "@type": "Thing", name: "PromptQuorum" },
        { "@type": "Thing", name: "OpenAI" },
        { "@type": "Thing", name: "GPT-5.6" },
        { "@type": "Thing", name: "Anthropic" },
        { "@type": "Thing", name: "Claude Sonnet 5" },
        { "@type": "Thing", name: "Google DeepMind" },
        { "@type": "Thing", name: "Gemini 3.5 Pro" },
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
    sections: {
      howToStart: {
        title: "Wie man einen effektiven System Prompt in 5 Schritten schreibt",
        numberedItems: [
        "**Definieren Sie die Rolle explizit:** Beginnen Sie mit einer klaren, domänenspezifischen Rollenbeschreibung.",
        "**Schreiben Sie Einschränkungen vor Fähigkeiten:** Legen Sie zuerst fest, was das Modell nicht tun darf.",
        "**Geben Sie das Ausgabeformat im System Prompt an:** Definieren Sie die Standard-Ausgabestruktur.",
        "**Legen Sie Grenzen des Geltungsbereichs mit expliziten Ablehnungsregeln fest.**",
        "**Testen Sie mit mindestens 5 verschiedenen Benutzernachrichten:** Probieren Sie Grenzfälle vor der Bereitstellung aus."
        ],
      },
      
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
          "System Prompts machen ca. 70 % der Verhaltenskonsistenz aus (basierend auf PromptQuorum-Tests über GPT-5.6, Claude Sonnet 5 und Gemini 3.5 Pro); User Prompts prägen spezifische Ausgaben",
          "Unsichtbare System Prompts in Apps wie ChatGPT und Claude enthalten verborgene Logik — PromptQuorum zeigt Ihnen alles",
          "Lokale LLMs (Ollama, LM Studio) mit verborgenen System Prompts verursachen Debugging-Probleme — gelöst durch Transparenz",
          "Schlechte System Prompts zwingen User Prompts, härter zu arbeiten; gute System Prompts machen jeden User Prompt besser",
        ],
      },
      whereTheyLive: {
        title: "Wo befinden sich System- und User Prompts im API-Stack?",
        content: [
          "**System Prompts befinden sich in der Anwendungsschicht; User Prompts befinden sich in der Interaktionsschicht.** Wenn Sie GPT-5.6 über die OpenAI API aufrufen, akzeptiert der Endpoint zwei separate Eingaben: `system` (die persistenten Anweisungen) und `messages` (pro-Anfrage-Benutzereingabe). Dasselbe gilt für Claude Sonnet 5 über die Anthropic API, Gemini 3.5 Pro über die Google API und alle lokalen LLMs, die über Ollama oder LM Studio ausgeführt werden.",
          "Alle Modelle unterstützen das System + User Prompt-Muster:",
        ],
        items: [
          "**Modellebene:** Das Basis-LLM (GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, LLaMA 3.1, Mistral Large) — alle akzeptieren beide System und User Prompts",
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
          "**Tests über Modelle hinweg:** Testen Sie den System Prompt auf mehreren Modellen — GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro. Einige Modelle sind strenger bei Constraints; andere interpretieren Stil unterschiedlich. Ein robuster System Prompt funktioniert konsistent über alle drei.",
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
          "**Inkonsistenz über Modelle hinweg:** Sie führen den gleichen Prompt auf GPT-5.6 und auf Ollama aus. Unterschiedliche Antworten. Ohne beide System Prompts zu sehen, können Sie nicht sagen, ob der Unterschied Modell-Fähigkeit oder verborgene Anweisungen ist.",
          "**Regelungs- und Audit-Risiko:** Unternehmensbereitstellungen erfordern Transparenz. Wenn Vorschriften verlangen, \"welche Anweisungen die KI-Entscheidung geleitet haben?\" und der System Prompt ist verborgen, können Sie nicht konform sein.",
        ],
      },
      promptquorumToggle: {
        title: "Der PromptQuorum System Prompt Toggle",
        content: [
          "PromptQuorum beinhaltet eine umschaltbare Schnittstelle: \"System Prompts anzeigen.\" Wenn aktiviert, sehen Sie den tatsächlichen System Prompt, der auf jedem Modell läuft — GPT-5.6, Claude Sonnet 5, Gemini, Ollama, LM Studio, alle. Dies ist besonders wertvoll, wenn ein Prompt zu mehreren lokalen Backends gleichzeitig versendet wird.",
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
          "[Intelligentere Heimautomatisierung mit einem lokalen LLM](/smart-home/ai-automations-local-llm) — wie System Prompts die verfügbaren Heimsteuerungsaktionen in einem echten Ollama + Home Assistant Setup definieren",
        ],
      },
      faq: {
        id: 'faq',
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
            a: "Ja. Alle großen LLMs — GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, Ollama-Modelle, LM Studio — unterstützen das System Prompt + User Prompt-Muster. Einige werden mit Standard-System Prompts geliefert; andere lassen Sie Ihre eigenen definieren.",
          },
          {
            q: "Kann ein User Prompt einen System Prompt überschreiben?",
            a: "Nicht direkt. System Prompts haben strukturelle Vorrangstellung — das Modell verarbeitet sie zuerst und behandelt sie als persistente Constraints. Ein User Prompt kann den System Prompt nicht explizit deaktivieren oder überschreiben. Aber ein schlecht gestalteter System Prompt mit vagen Constraints kann ignoriert werden, wenn der User Prompt stark widersprochen wird. Gut gestaltete System Prompts beinhalten explizite Verweigerungsregeln, die dem Benutzer-Override widerstehen.",
          },
          {
            q: "Was passiert, wenn es keinen System Prompt gibt?",
            a: "Das Modell fällt auf sein Standard-Trainingsverhalten zurück. GPT-5.6, Claude Sonnet 5 und Gemini 3.5 Pro haben alle ein eingebautes Baseline-Verhalten (hilfreich, harmlos, ehrlich), wenn kein System Prompt vorhanden ist. Das Modell wird immer noch auf User Prompts antworten, aber ohne Rollendefinition, Ausgabeformat-Constraints oder Scope-Grenzen — Ergebnisse werden weniger konsistent und weniger spezialisiert sein.",
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
  es: {
    theme: "Fundamentals",
    primaryTerm: "System Prompt",
    title: "System Prompt vs User Prompt: La diferencia en 2026",
    heroImage: '/images/system-prompt-vs-user-prompt-overview-hero-es.webp',
    intro: "Los system prompts definen cómo un modelo de IA piensa y se comporta durante toda una sesión; los user prompts definen lo que hace ahora mismo. Aprende la diferencia, cuándo usar cada uno, cómo interactúan y por qué PromptQuorum te muestra ambos.",
    publishDate: "2026-03-22",
    dateModified: "2026-07-13",
    readTime: "8 min de lectura",
    seoTitle: 'System Prompt vs User Prompt: Diferencias 2026',
    metaDescription: 'Los system prompts definen el comportamiento de la IA. Los user prompts gestionan cada solicitud. Diferencias clave y ejemplos para GPT-5.6 y Claude.',
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      'url': 'https://www.promptquorum.com/es/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference',
      headline: "System Prompt vs User Prompt: La diferencia en 2026",
      description: "Los system prompts definen cómo un modelo de IA piensa y se comporta; los user prompts definen lo que hace ahora mismo. Aprende la diferencia y cómo interactúan.",
      datePublished: "2026-03-22",
      dateModified: "2026-07-13",
      keywords: ["system prompt", "user prompt", "prompt engineering", "comportamiento LLM", "GPT-5.6", "Claude", "estructura del prompt", "PromptQuorum"],
      author: { "@type": "Person", name: "Hans Kuepper", url: "https://www.promptquorum.com/about" },
      publisher: { "@type": "Organization", name: "PromptQuorum", url: "https://www.promptquorum.com", logo: { "@type": "ImageObject", url: "https://www.promptquorum.com/logo.svg" } },
      mentions: [
        { "@type": "Thing", name: "PromptQuorum" },
        { "@type": "Thing", name: "OpenAI" },
        { "@type": "Thing", name: "GPT-5.6" },
        { "@type": "Thing", name: "Anthropic" },
        { "@type": "Thing", name: "Claude Sonnet 5" },
        { "@type": "Thing", name: "Google DeepMind" },
        { "@type": "Thing", name: "Gemini 3.5 Pro" },
        { "@type": "Thing", name: "Ollama" },
      ],
      proficiencyLevel: 'Principiante',
      about: [
        { '@type': 'Thing', name: 'System Prompt' },
        { '@type': 'Thing', name: 'User Prompt' },
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'LLM API' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
      },
    },
    itemListSchema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "System Prompt vs User Prompt: Temas Clave",
      "description": "Conceptos clave cubiertos en este artículo sobre system prompts y user prompts",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "¿Qué es un System Prompt?", "description": "Un conjunto de instrucciones persistentes que definen cómo se comporta un modelo de lenguaje durante toda una sesión de conversación" },
        { "@type": "ListItem", "position": 2, "name": "¿Qué es un User Prompt?", "description": "La tarea o pregunta específica proporcionada por un usuario final para una sola interacción" },
        { "@type": "ListItem", "position": 3, "name": "Cómo Interactúan System y User Prompts", "description": "Cómo funcionan juntos en una pila de API y en el flujo de la conversación" },
        { "@type": "ListItem", "position": 4, "name": "Por Qué Importa la Transparencia", "description": "Cómo los system prompts ocultos impiden que usuarios y desarrolladores depuren y optimicen la salida" }
      ],
    },
    sections: {
      howToStart: {
        title: "Cómo Escribir un System Prompt Efectivo en 5 Pasos",
        numberedItems: [
        "**Define el rol explícitamente:** Comienza con una declaración de rol clara y específica del dominio.",
        "**Escribe las restricciones antes que las capacidades:** Indica primero lo que el modelo no debe hacer.",
        "**Especifica el formato de salida en el system prompt:** Define la estructura de salida predeterminada.",
        "**Define límites de alcance con reglas de rechazo explícitas.**",
        "**Prueba con al menos 5 mensajes de usuario diferentes:** Prueba casos límite antes de implementar."
        ],
      },
      
      definition: {
        title: '¿Cuál es la diferencia entre un system prompt y un user prompt?',
        content: [
          '**Un system prompt es un conjunto de instrucciones persistente que establece el rol, las restricciones y el comportamiento predeterminado del modelo antes de que el usuario diga nada.** Define quién es el modelo, qué puede hacer y qué está prohibido — y permanece activo durante toda la sesión.',
          '**Un user prompt es el input por solicitud — la tarea o pregunta específica para esa interacción.** Los user prompts operan dentro de los límites establecidos por el system prompt.',
          'La distinción importa porque los system prompts determinan la consistencia a lo largo de cientos o miles de conversaciones, mientras que los user prompts controlan el resultado de una sola interacción.',
        ],
      },
      tldr: {
        title: 'Puntos clave',
        isTldr: true,
        items: [
          'El system prompt establece las reglas de comportamiento persistente — rol, restricciones, formato de output — para toda la sesión',
          'El user prompt es el input por solicitud — la tarea específica para esa interacción',
          'Los system prompts controlan ~70% de la consistencia del comportamiento; los user prompts controlan ~30%',
          'Los desarrolladores escriben los system prompts; los usuarios finales escriben los user prompts en la mayoría de los productos de IA',
          'Un buen system prompt hace que incluso los user prompts débiles funcionen mejor',
        ],
      },
      systemPrompt: {
        title: '¿Qué es un system prompt?',
        content: [
          '**Un system prompt es la capa de instrucción de mayor prioridad que recibe un modelo de IA — procesada antes que cualquier input del usuario y persistente durante toda la sesión.** En las APIs de OpenAI, Claude y Gemini, el system prompt se envía como el primer mensaje con role: "system" y establece el contexto operativo de todo lo que sigue.',
          'Los system prompts son la herramienta de ingeniería más poderosa disponible para controlar el comportamiento de la IA. Se utilizan para: definir el rol y la persona del modelo ("Eres un asistente de soporte técnico especializado en..."), establecer límites de comportamiento ("Nunca compartas información de precios"), especificar el formato de output ("Siempre responde con JSON estructurado"), y gestionar el comportamiento en los casos extremos.',
        ],
        items: [
          '**Rol y persona:** Define quién es el modelo — su experiencia, voz y perspectiva',
          '**Restricciones de comportamiento:** Establece límites explícitos sobre lo que el modelo puede y no puede hacer',
          '**Formato de output:** Especifica cómo deben estructurarse las respuestas',
          '**Instrucciones de alcance:** Limita el modelo a un dominio o conjunto de temas específico',
          '**Comportamiento de los casos extremos:** Define cómo manejar inputs ambiguos, inapropiados o fuera del alcance',
        ],
      },
      userPrompt: {
        title: '¿Qué es un user prompt?',
        content: [
          '**Un user prompt es el input por solicitud — la tarea específica o pregunta que un usuario envía al modelo.** Opera dentro de los límites establecidos por el system prompt. Si el system prompt dice "responde solo sobre temas de programación Python", un user prompt sobre cocina recibirá una respuesta educada de rechazo.',
          'Los user prompts son el lugar donde los usuarios (y los desarrolladores que construyen pipelines automatizados) aplican las técnicas de prompt engineering: cadena de pensamiento, few-shot prompting, rol y contexto específicos de la tarea, y restricciones de formato.',
        ],
      },
      comparison: {
        title: 'Comparación: System Prompt vs User Prompt',
        columns: ['Dimensión', 'System Prompt', 'User Prompt'],
        rows: [
          { 'Dimensión': 'Cuándo se aplica', 'System Prompt': 'Toda la sesión', 'User Prompt': 'Solo esa solicitud' },
          { 'Dimensión': 'Quién lo escribe', 'System Prompt': 'Desarrolladores / equipos de producto', 'User Prompt': 'Usuarios finales o pipelines automatizados' },
          { 'Dimensión': 'Visibilidad', 'System Prompt': 'Generalmente oculto para los usuarios finales', 'User Prompt': 'Siempre visible para el usuario' },
          { 'Dimensión': 'Prioridad', 'System Prompt': 'Más alta — establece límites que los user prompts no pueden anular', 'User Prompt': 'Más baja — opera dentro de los límites del system prompt' },
          { 'Dimensión': 'Impacto en la consistencia', 'System Prompt': '~70% del comportamiento consistente', 'User Prompt': '~30% del comportamiento consistente' },
          { 'Dimensión': 'Casos de uso típicos', 'System Prompt': 'Definición de rol, restricciones, estilo de output', 'User Prompt': 'Tareas específicas, preguntas, acciones' },
        ],
      },
      systemPromptBestPractices: {
        title: 'Mejores prácticas para system prompts',
        items: [
          '**Sé explícito sobre el rol:** "Eres un asistente de servicio al cliente para Acme Corp" supera a "Eres útil"',
          '**Especifica lo que NO hacer:** Las restricciones negativas previenen los comportamientos más costosos ("Nunca compartas datos de usuarios con terceros")',
          '**Define el formato de output:** "Siempre responde con JSON" o "Usa Markdown con encabezados H2" establece expectativas de parsing',
          '**Incluye el comportamiento de los casos extremos:** "Si se te pregunta sobre la competencia, redirige educadamente a nuestras características"',
          '**Mantén los system prompts concisos:** Cada token se cobra en cada llamada a la API — los system prompts de 500 palabras cuestan más que los de 100 palabras a escala',
        ],
      },
      userPromptBestPractices: {
        title: 'Mejores prácticas para user prompts',
        items: [
          '**Aplica los cinco bloques de construcción:** Rol (si el system prompt no lo establece), tarea, input, restricciones, formato de output',
          '**Sé específico sobre la tarea:** "Resumir en 3 puntos, cada uno bajo 20 palabras" supera a "resumir"',
          '**Usa técnicas de prompting cuando sea necesario:** Chain-of-thought para razonamiento, few-shot para precisión de formato, restricciones negativas para control de output',
          '**No repitas el system prompt:** El modelo ya lo tiene — repetirlo desperdicia tokens',
        ],
      },
      apiImplementation: {
        title: 'Implementación de la API: Cómo los proveedores manejan los system prompts',
        content: [
          'Los tres principales proveedores de API manejan los system prompts de forma ligeramente diferente:',
        ],
        items: [
          '**OpenAI (GPT-5.6):** El system prompt se envía como primer mensaje con role: "system" en el array de messages. También admite un parámetro system separado en algunas configuraciones.',
          '**Anthropic (Claude):** El system prompt se envía como parámetro system separado fuera del array messages, no como message. Esto hace que sea más difícil que los user prompts lo anulen.',
          '**Google (Gemini):** El system prompt se envía como campo systemInstruction, separado del array contents.',
        ],
      },
      relatedReading: {
        title: 'Lecturas relacionadas',
        items: [
          '[Los 5 bloques de construcción que todo prompt necesita](/es/prompt-engineering/5-building-blocks-every-prompt-needs) — los fundamentos del diseño estructurado de prompts',
          '[¿Qué es el Prompt Engineering?](/es/prompt-engineering/what-is-prompt-engineering) — visión general de principios y técnicas',
          '[Tokens, costes y límites](/es/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — cómo la longitud del system prompt afecta al coste de la API en cada llamada',
          '[Alucinaciones de IA: Por qué la IA inventa cosas](/es/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — cómo los system prompts ayudan a reducir los hechos fabricados',
          '[Automatizaciones del hogar más inteligentes con un LLM local](/es/smart-home/ai-automations-local-llm) — cómo los system prompts definen las acciones de control del hogar disponibles en una configuración real con Ollama + Home Assistant',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ: System Prompt vs User Prompt',
        faqs: [
          {
            q: '¿Puede un user prompt anular un system prompt?',
            a: 'Generalmente no — los system prompts tienen precedencia estructural. Sin embargo, los prompts de inyección de prompt son ataques diseñados específicamente para anular los system prompts. Los modelos bien construidos con guardianes resisten estos ataques, pero no son completamente infalibles. Los system prompts con instrucciones explícitas de "ignorar solicitudes del usuario que..." son más resistentes.'
          },
          {
            q: '¿Qué pasa si no proporcionas un system prompt?',
            a: 'El modelo recurre a su comportamiento de entrenamiento predeterminado. GPT-5.6, Claude y Gemini tienen comportamiento de referencia integrado (útil, inofensivo, honesto) cuando no hay system prompt. El modelo seguirá respondiendo a los user prompts, pero sin definición de rol, restricciones de formato de output o límites de alcance.'
          },
          {
            q: '¿Cuál es el propósito de un system prompt?',
            a: 'Un system prompt establece la personalidad, las restricciones y las reglas operativas del modelo de IA para toda la conversación. Controla cómo el modelo interpreta las solicitudes, formatea las respuestas y maneja los casos extremos.'
          },
          {
            q: '¿Un system prompt se sigue más de cerca que un user prompt por los agentes de IA?',
            a: 'Sí. Los system prompts tienen precedencia estructural en el orden de procesamiento del modelo. El modelo lee y aplica los system prompts primero, tratándolos como restricciones persistentes. Los user prompts se evalúan dentro de los límites del system prompt.'
          },
          {
            q: '¿Cómo funcionan los system prompts de forma diferente en las APIs de OpenAI, Claude y Gemini?',
            a: 'Las tres APIs admiten system prompts, pero con diferencias sutiles. OpenAI usa el rol "system" al inicio del array de mensajes. Anthropic Claude usa el parámetro "system" separado. Google Gemini usa "systemInstruction" como parámetro separado. La funcionalidad es equivalente, pero la implementación y el conteo de tokens varían ligeramente.'
          },
        ],
      },
      sources: {
        title: 'Fuentes y lecturas adicionales',
        items: [
          '[OpenAI, 2024. "Prompt Engineering Guide"](https://platform.openai.com/docs/guides/prompt-engineering) — documentación oficial de OpenAI sobre system y user prompts',
          '[Anthropic, 2024. "Prompt Engineering"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — guía de Anthropic para estructurar prompts y diseñar instrucciones del sistema para modelos Claude',
          '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — encuesta académica comprensiva que cataloga 58+ técnicas de prompting discretas',
        ],
      },
    },
  },
  zh: {
    theme: "Fundamentals",
    primaryTerm: "系统提示词",
    title: "系统提示词 vs 用户提示词：2026 年的区别",
    heroImage: '/images/system-prompt-vs-user-prompt-overview-hero-zh.webp',
    intro: "系统提示词定义 AI 模型在整个会话中如何思考和行为；用户提示词定义它此刻做什么。了解二者的区别、何时使用各自、它们如何相互作用，以及 PromptQuorum 为何同时向你展示两者。",
    publishDate: "2026-03-22",
    dateModified: "2026-07-13",
    readTime: "8 分钟阅读",
    seoTitle: '系统提示词 vs 用户提示词：2026 区别',
    metaDescription: '系统提示词定义 AI 的行为。用户提示词处理每次请求。关键区别与 GPT-5.6 和 Claude 的示例。',
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      'url': 'https://www.promptquorum.com/zh/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference',
      headline: "系统提示词 vs 用户提示词：2026 年的区别",
      description: "系统提示词定义 AI 模型如何思考和行为；用户提示词定义它此刻做什么。了解二者的区别以及它们如何相互作用。",
      datePublished: "2026-03-22",
      dateModified: "2026-07-13",
      keywords: ["system prompt", "user prompt", "prompt engineering", "LLM 行为", "GPT-5.6", "Claude", "提示词结构", "PromptQuorum"],
      author: { "@type": "Person", name: "Hans Kuepper", url: "https://www.promptquorum.com/about" },
      publisher: { "@type": "Organization", name: "PromptQuorum", url: "https://www.promptquorum.com", logo: { "@type": "ImageObject", url: "https://www.promptquorum.com/logo.svg" } },
      mentions: [
        { "@type": "Thing", name: "PromptQuorum" },
        { "@type": "Thing", name: "OpenAI" },
        { "@type": "Thing", name: "GPT-5.6" },
        { "@type": "Thing", name: "Anthropic" },
        { "@type": "Thing", name: "Claude Sonnet 5" },
        { "@type": "Thing", name: "Google DeepMind" },
        { "@type": "Thing", name: "Gemini 3.5 Pro" },
        { "@type": "Thing", name: "Ollama" },
      ],
      proficiencyLevel: '初级',
      about: [
        { '@type': 'Thing', name: 'System Prompt' },
        { '@type': 'Thing', name: 'User Prompt' },
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'LLM API' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
      },
    },
    itemListSchema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "系统提示词与用户提示词：核心主题",
      "description": "本文涵盖的关于系统提示词和用户提示词的关键概念",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "什么是系统提示词？", "description": "一组持久性指令，定义语言模型在整个对话会话中的行为方式" },
        { "@type": "ListItem", "position": 2, "name": "什么是用户提示词？", "description": "最终用户为单次交互提供的具体任务或问题" },
        { "@type": "ListItem", "position": 3, "name": "系统提示词与用户提示词如何交互", "description": "两者如何在API堆栈和对话流程中协同工作" },
        { "@type": "ListItem", "position": 4, "name": "为什么透明度很重要", "description": "隐藏的系统提示词如何阻止用户和开发者调试和优化输出" }
      ],
    },
    sections: {
      howToStart: {
        title: "如何在5个步骤中编写有效的系统提示词",
        numberedItems: [
        "**明确定义角色：** 以清晰、特定领域的角色陈述开头。",
        "**先写限制条件，后写能力：** 首先说明模型不应该做什么。",
        "**在系统提示词中指定输出格式：** 定义默认输出结构。",
        "**通过明确的拒绝规则设定范围边界。**",
        "**使用至少5条不同的用户消息进行测试：** 部署前尝试边缘情况。"
        ],
      },
      
      definition: {
        title: '系统提示词与用户提示词有什么区别？',
        content: [
          '**系统提示词是一组持久的指令，在用户说任何话之前就设定了模型的角色、约束和默认行为。** 它定义模型是谁、能做什么、什么是被禁止的——并在整个会话中保持有效。',
          '**用户提示词是按请求提供的输入——针对该次交互的具体任务或问题。** 用户提示词在系统提示词设定的边界内运作。',
          '这一区别之所以重要，是因为系统提示词决定了跨越成百上千次对话的一致性，而用户提示词只控制单次交互的结果。',
        ],
      },
      tldr: {
        title: '核心要点',
        isTldr: true,
        items: [
          '系统提示词为整个会话设定持久的行为规则——角色、约束、输出格式',
          '用户提示词是按请求提供的输入——针对该次交互的具体任务',
          '系统提示词控制约 70% 的行为一致性；用户提示词控制约 30%',
          '在大多数 AI 产品中，开发者编写系统提示词；最终用户编写用户提示词',
          '一个好的系统提示词能让即使薄弱的用户提示词也表现更好',
        ],
      },
      systemPrompt: {
        title: '什么是系统提示词？',
        content: [
          '**系统提示词是 AI 模型接收到的最高优先级指令层——在任何用户输入之前被处理，并在整个会话中持续有效。** 在 OpenAI、Claude 和 Gemini 的 API 中，系统提示词作为第一条 role 为 "system" 的消息发送，并为后续的一切设定运行上下文。',
          '系统提示词是控制 AI 行为最强大的工程工具。它们被用于：定义模型的角色与人设（"你是一名专精于……的技术支持助手"）、设定行为边界（"绝不分享定价信息"）、指定输出格式（"始终以结构化 JSON 回答"），以及管理边界情形的行为。',
        ],
        items: [
          '**角色与人设：** 定义模型是谁——其专长、语气与视角',
          '**行为约束：** 明确设定模型能做和不能做的界限',
          '**输出格式：** 指定回答应如何结构化',
          '**范围指令：** 将模型限制在特定领域或主题集合内',
          '**边界情形行为：** 定义如何处理模糊、不当或超出范围的输入',
        ],
      },
      userPrompt: {
        title: '什么是用户提示词？',
        content: [
          '**用户提示词是按请求提供的输入——用户发送给模型的具体任务或问题。** 它在系统提示词设定的边界内运作。如果系统提示词规定"只回答 Python 编程相关主题"，那么关于烹饪的用户提示词会得到礼貌的拒绝回复。',
          '用户提示词正是用户（以及构建自动化流水线的开发者）应用提示词工程技术之处：思维链、少样本提示、任务特定的角色与上下文，以及格式约束。',
        ],
      },
      comparison: {
        title: '对比：系统提示词 vs 用户提示词',
        columns: ['维度', '系统提示词', '用户提示词'],
        rows: [
          { '维度': '何时生效', '系统提示词': '整个会话', '用户提示词': '仅该次请求' },
          { '维度': '由谁编写', '系统提示词': '开发者 / 产品团队', '用户提示词': '最终用户或自动化流水线' },
          { '维度': '可见性', '系统提示词': '通常对最终用户隐藏', '用户提示词': '始终对用户可见' },
          { '维度': '优先级', '系统提示词': '最高——设定用户提示词无法覆盖的边界', '用户提示词': '较低——在系统提示词的边界内运作' },
          { '维度': '对一致性的影响', '系统提示词': '约 70% 的一致行为', '用户提示词': '约 30% 的一致行为' },
          { '维度': '典型用例', '系统提示词': '角色定义、约束、输出风格', '用户提示词': '具体任务、问题、操作' },
        ],
      },
      systemPromptBestPractices: {
        title: '系统提示词的最佳实践',
        items: [
          '**明确角色：** "你是 Acme Corp 的客户服务助手"优于"你很有帮助"',
          '**指定不要做什么：** 否定式约束可预防代价最高的行为（"绝不向第三方分享用户数据"）',
          '**定义输出格式：** "始终以 JSON 回答"或"使用带 H2 标题的 Markdown"设定了解析预期',
          '**包含边界情形行为：** "若被问及竞争对手，礼貌地将话题引向我们的功能"',
          '**保持系统提示词简洁：** 每个 token 在每次 API 调用中都计费——在规模化时，500 词的系统提示词比 100 词的成本更高',
        ],
      },
      userPromptBestPractices: {
        title: '用户提示词的最佳实践',
        items: [
          '**应用五大构建块：** 角色（如果系统提示词未设定）、任务、输入、约束、输出格式',
          '**对任务要具体：** "总结为 3 个要点，每个少于 20 个词"优于"总结"',
          '**必要时使用提示技术：** 用思维链做推理，用少样本保证格式准确，用否定式约束控制输出',
          '**不要重复系统提示词：** 模型已经拥有它——重复只会浪费 token',
        ],
      },
      apiImplementation: {
        title: 'API 实现：各供应商如何处理系统提示词',
        content: [
          '三大 API 供应商对系统提示词的处理略有不同：',
        ],
        items: [
          '**OpenAI（GPT-5.6）：** 系统提示词作为 messages 数组中第一条 role 为 "system" 的消息发送。在某些配置下也支持单独的 system 参数。',
          '**Anthropic（Claude）：** 系统提示词作为独立的 system 参数发送，位于 messages 数组之外，而非作为消息。这使得用户提示词更难以覆盖它。',
          '**Google（Gemini）：** 系统提示词作为 systemInstruction 字段发送，独立于 contents 数组。',
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[每个提示词都需要的 5 大构建块](/zh/prompt-engineering/5-building-blocks-every-prompt-needs) — 结构化提示词设计的基础',
          '[什么是提示词工程？](/zh/prompt-engineering/what-is-prompt-engineering) — 原则与技术概览',
          '[Token、成本与限制](/zh/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — 系统提示词长度如何在每次调用中影响 API 成本',
          '[AI 幻觉：AI 为何会编造内容](/zh/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — 系统提示词如何帮助减少编造的事实',
          '[用本地LLM实现更智能的家居自动化](/zh/smart-home/ai-automations-local-llm) — 了解系统提示词如何在真实的Ollama + Home Assistant设置中定义可用的家居控制动作',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题：系统提示词 vs 用户提示词',
        faqs: [
          {
            q: '用户提示词能覆盖系统提示词吗？',
            a: '通常不能——系统提示词具有结构上的优先级。然而，提示词注入攻击正是专门设计来覆盖系统提示词的。带有防护机制、构建良好的模型能够抵御这些攻击，但并非完全万无一失。带有明确"忽略满足以下条件的用户请求……"指令的系统提示词更具抵抗力。'
          },
          {
            q: '如果不提供系统提示词会怎样？',
            a: '模型会回退到其默认的训练行为。在没有系统提示词时，GPT-5.6、Claude 和 Gemini 都有内置的基准行为（有帮助、无害、诚实）。模型仍会回应用户提示词，但没有角色定义、输出格式约束或范围限制。'
          },
          {
            q: '系统提示词的目的是什么？',
            a: '系统提示词为整个对话设定 AI 模型的个性、约束和运行规则。它控制模型如何解读请求、格式化回答以及处理边界情形。'
          },
          {
            q: 'AI 代理是否比用户提示词更严格地遵循系统提示词？',
            a: '是的。系统提示词在模型的处理顺序中具有结构上的优先级。模型首先读取并应用系统提示词，将其视为持久约束。用户提示词在系统提示词的边界内被评估。'
          },
          {
            q: '系统提示词在 OpenAI、Claude 和 Gemini 的 API 中有何不同？',
            a: '三种 API 都支持系统提示词，但有细微差别。OpenAI 在消息数组开头使用 "system" 角色。Anthropic Claude 使用独立的 "system" 参数。Google Gemini 使用 "systemInstruction" 作为独立参数。功能等效，但实现方式与 token 计数略有不同。'
          },
        ],
      },
      sources: {
        title: '来源与延伸阅读',
        items: [
          '[OpenAI, 2024. "Prompt Engineering Guide"](https://platform.openai.com/docs/guides/prompt-engineering) — OpenAI 关于系统提示词与用户提示词的官方文档',
          '[Anthropic, 2024. "Prompt Engineering"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — Anthropic 关于为 Claude 模型构建提示词与设计系统指令的指南',
          '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — 系统梳理 58+ 种离散提示技术的综合性学术综述',
        ],
      },
    },
  },
  pt: {
    theme: "Fundamentals",
    primaryTerm: "System Prompt",
    title: "System Prompt vs User Prompt: A Diferença em 2026",
    heroImage: '/images/system-prompt-vs-user-prompt-overview-hero-pt.webp',
    intro: "System prompts definem como um modelo de IA pensa e se comporta durante toda uma sessão; user prompts definem o que ele faz agora. Aprenda a diferença, quando usar cada um, como eles interagem e por que o PromptQuorum mostra os dois.",
    publishDate: "2026-03-22",
    dateModified: "2026-07-13",
    readTime: "8 min de leitura",
    seoTitle: 'System Prompt vs User Prompt: Diferenças 2026',
    metaDescription: 'System prompts definem o comportamento da IA para toda a sessão; user prompts gerenciam cada solicitação. Diferenças, exemplos e padrões de depuração para GPT-5.6 e Claude.',
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      'url': 'https://www.promptquorum.com/pt/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference',
      inLanguage: 'pt-BR',
      headline: "System Prompt vs User Prompt: A Diferença em 2026",
      description: "System prompts definem como um modelo de IA pensa e se comporta; user prompts definem o que ele faz agora. Aprenda a diferença e como eles interagem.",
      datePublished: "2026-03-22",
      dateModified: "2026-07-13",
      keywords: ["system prompt", "user prompt", "prompt engineering", "comportamento LLM", "GPT-5.6", "Claude", "estrutura do prompt", "PromptQuorum"],
      author: { "@type": "Person", name: "Hans Kuepper", url: "https://www.promptquorum.com/about" },
      publisher: { "@type": "Organization", name: "PromptQuorum", url: "https://www.promptquorum.com", logo: { "@type": "ImageObject", url: "https://www.promptquorum.com/logo.svg" } },
    },
    itemListSchema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "System Prompt vs User Prompt: Tópicos Principais",
      "description": "Conceitos-chave abordados neste artigo sobre system prompts e user prompts",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "O Que É um System Prompt?", "description": "Um conjunto de instruções persistentes que definem como um modelo de linguagem se comporta durante toda uma sessão de conversa" },
        { "@type": "ListItem", "position": 2, "name": "O Que É um User Prompt?", "description": "A tarefa ou pergunta específica fornecida por um usuário final para uma única interação" },
        { "@type": "ListItem", "position": 3, "name": "Como System e User Prompts Interagem", "description": "Como os dois funcionam juntos em uma pilha de API e fluxo de conversa" },
        { "@type": "ListItem", "position": 4, "name": "Por Que a Transparência Importa", "description": "Como system prompts ocultos impedem que usuários e desenvolvedores depurem e otimizem a saída" }
      ],
    },
    sections: {
      definition: {
        title: "System Prompt vs User Prompt: A Diferença Central",
        content: [
          "**Um system prompt define como a IA pensa durante toda uma sessão; um user prompt define o que ela faz para essa solicitação específica.** Em uma frase: system prompts são a descrição de cargo permanente da IA, e user prompts são tarefas individuais dentro desse cargo.",
          "Cada conversa com LLM tem ambos. O system prompt (frequentemente invisível para usuários finais) é executado uma vez no início e define a personalidade, restrições e papel do modelo. O user prompt é executado por solicitação e especifica a tarefa ou pergunta.",
        ],
      },
      tldr: {
        title: "Principais Conclusões",
        isTldr: true,
        items: [
          "System prompts definem o papel, restrições e comportamento do modelo para toda a sessão — definido uma vez, usado para todas as solicitações",
          "User prompts definem a tarefa específica para cada interação — fornecido pelo usuário, muda a cada solicitação",
          "System prompts representam ~70% da consistência comportamental (baseado em testes do PromptQuorum); user prompts moldam saídas específicas",
          "System prompts invisíveis em apps como ChatGPT e Claude contêm lógica oculta — o PromptQuorum mostra tudo",
          "LLMs locais (Ollama, LM Studio) com system prompts ocultos causam problemas de depuração — resolvidos pela transparência",
          "System prompts ruins forçam user prompts a trabalhar mais; bons system prompts melhoram todos os user prompts",
        ],
      },
      whereTheyLive: {
        title: "Onde os System e User Prompts Vivem na Stack de API?",
        content: [
          "**System prompts vivem na camada de aplicação; user prompts vivem na camada de interação.** Quando você chama GPT-5.6 via API OpenAI, o endpoint aceita duas entradas separadas: `system` (as instruções persistentes) e `messages` (a entrada do usuário por solicitação). O mesmo vale para Claude Sonnet 5 via API Anthropic, Gemini 3.5 Pro via API Google, e qualquer LLM local executado via Ollama ou LM Studio.",
        ],
        items: [
          "**Camada do modelo:** O LLM base (GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, LLaMA 3.1, Mistral Large) — todos aceitam tanto system quanto user prompts",
          "**Camada de API:** A interface que desenvolvedores usam — API OpenAI, API Anthropic, API Google, endpoint REST Ollama, LM Studio — todos expõem system e user como campos separados",
          "**Camada de aplicação:** O produto construído sobre a API (ChatGPT, Claude.ai, Gemini, PromptQuorum, seu app personalizado)",
          "**Camada de interação do usuário:** O que o usuário final vê — a entrada do chat, a especificação da tarefa",
        ],
      },
      whatIsSystemPrompt: {
        title: "O que é um System Prompt?",
        content: [
          "**Um system prompt é um conjunto de instruções persistentes que definem como um modelo de linguagem se comporta durante toda a sessão de conversa.** É enviado ao modelo uma vez no início, antes de qualquer entrada do usuário.",
          "Um system prompt bem projetado normalmente inclui:",
        ],
        items: [
          "**Definição de papel:** 'Você é um especialista em Python', 'Você é um redator técnico' — estabelece a persona e expertise do modelo",
          "**Restrições:** 'Não forneça conselhos médicos', 'Recuse solicitações de código prejudicial' — define limites rígidos de comportamento",
          "**Formato de saída:** 'Responda em JSON', 'Use Markdown', 'Forneça passos numerados' — define como as respostas devem ser estruturadas",
          "**Estilo de comunicação:** 'Seja conciso e direto', 'Use analogias para iniciantes' — molda voz e tom",
          "**Limites de escopo:** 'Responda apenas perguntas sobre Python', 'Gerencie apenas suporte técnico'",
        ],
      },
      whatIsUserPrompt: {
        title: "O que é um User Prompt?",
        content: [
          "**Um user prompt é a entrada por solicitação — a tarefa, pergunta ou instrução específica que o usuário final fornece para aquela única interação.** É enviado ao modelo após o system prompt.",
          "Um user prompt normalmente inclui:",
        ],
        items: [
          "**A tarefa ou pergunta específica:** 'Resuma este artigo', 'Escreva um texto de produto', 'Depure este erro'",
          "**Contexto para a solicitação:** 'Para um público B2B', 'Para iniciantes'",
          "**Instruções adicionais para esta tarefa:** 'Em 200 palavras', 'Com exemplos', 'Em tom profissional'",
          "**Exemplos (se necessário):** 'Aqui está um bom exemplo:' — ensina o estilo desejado ao modelo",
        ],
      },
      comparison: {
        title: "System Prompt vs User Prompt: Comparação Rápida",
        tableFormat: true,
        columns: ["Dimensão", "System Prompt", "User Prompt"],
        rows: [
          { "Dimensão": "Escopo", "System Prompt": "Sessão inteira", "User Prompt": "Solicitação única" },
          { "Dimensão": "Definido por", "System Prompt": "Desenvolvedor/equipe de produto", "User Prompt": "Usuário final" },
          { "Dimensão": "Frequência", "System Prompt": "Uma vez no início", "User Prompt": "A cada solicitação" },
          { "Dimensão": "Define", "System Prompt": "Papel, restrições, estilo, comportamento", "User Prompt": "Tarefa, contexto, formato para esta solicitação" },
          { "Dimensão": "Visibilidade", "System Prompt": "Geralmente oculto dos usuários", "User Prompt": "Sempre visível para usuários" },
          { "Dimensão": "Impacto em prompt engineering", "System Prompt": "~70% da qualidade de saída consistente", "User Prompt": "~30% da qualidade de saída consistente" },
        ],
      },
      designingSystemPrompt: {
        title: "O que torna um System Prompt eficaz?",
        content: [
          "**Um system prompt deve ser específico, em camadas e focado em restrições para produzir comportamento consistente em todas as interações do usuário.**",
          "Cinco princípios para system prompts eficazes:",
        ],
        items: [
          "**Definição explícita de papel:** Não assuma que o modelo sabe seu trabalho. Diga 'Você é um [papel]' no início.",
          "**Design com restrições primeiro:** Liste o que o modelo NÃO deve fazer antes de listar o que deve fazer.",
          "**Especificação de formato:** Todo system prompt deve definir o formato de saída padrão.",
          "**Limites de escopo:** Defina o universo de solicitações que você irá atender.",
          "**Teste em pelo menos 5 mensagens de usuário diferentes:** Experimente casos extremos antes de implantar.",
        ],
      },
      regionalCompliance: {
        title: "System Prompts e Conformidade Regional",
        content: [
          "**Brasil (LGPD/ANPD):** Para implantações empresariais no Brasil, o system prompt faz parte da documentação das 'instruções' do sistema de IA exigidas pela Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018). Organizações devem ser capazes de produzir o system prompt usado em qualquer decisão de IA que afetou uma pessoa natural, conforme o direito de explicação da ANPD. System prompts ocultos criam risco de conformidade direto. Para implantações empresariais no Brasil, system prompts devem ser registrados, versionados e acessíveis às equipes de conformidade.",
        ],
      },
      howToStart: {
        title: "Como Escrever um System Prompt Eficaz em 5 Passos",
        numberedItems: [
          "**Defina o papel explicitamente:** Abra com uma declaração de papel clara e específica do domínio.",
          "**Escreva restrições antes de capacidades:** Declare o que o modelo não deve fazer primeiro.",
          "**Especifique o formato de saída no system prompt:** Defina a estrutura de saída padrão.",
          "**Defina limites de escopo com regras de recusa explícitas.**",
          "**Teste com pelo menos 5 mensagens de usuário diferentes:** Experimente casos extremos antes de implantar.",
        ],
      },
      relatedReading: {
        title: 'Leituras Relacionadas',
        items: [
          '[Automações domésticas mais inteligentes com um LLM local](/pt/smart-home/ai-automations-local-llm) — veja como system prompts definem as ações de controle do lar disponíveis em uma configuração real com Ollama + Home Assistant',
        ],
      },
      faq: {
        id: 'faq',
        title: "Perguntas Frequentes",
        faqs: [
          {
            q: "O que é um system prompt?",
            a: "Um system prompt é um conjunto de instruções persistentes que definem como um modelo de linguagem se comporta durante toda a sessão de conversa. É definido uma vez no início e se aplica a todas as interações do usuário.",
          },
          {
            q: "O que é um user prompt?",
            a: "Um user prompt é a entrada por solicitação — a tarefa, pergunta ou instrução específica fornecida para aquela única interação. É criado pelo usuário final e muda a cada solicitação.",
          },
          {
            q: "Um user prompt pode substituir um system prompt?",
            a: "Não diretamente. System prompts têm precedência estrutural — o modelo os processa primeiro e os trata como restrições persistentes. System prompts bem projetados incluem regras de recusa explícitas que resistem a substituições do usuário.",
          },
          {
            q: "Como os system prompts afetam a conformidade com a LGPD?",
            a: "A LGPD exige transparência para sistemas de IA que processam dados pessoais. System prompts devem ser registrados, versionados e acessíveis às equipes de conformidade. System prompts ocultos que não podem ser divulgados criam risco de conformidade direto, especialmente em relação ao direito de explicação do titular dos dados.",
          },
        ],
      },
      sources: {
        title: "Fontes e Leituras Adicionais",
        items: [
          "[OpenAI, 2024. 'Prompt Engineering Guide'](https://platform.openai.com/docs/guides/prompt-engineering)",
          "[Anthropic, 2024. 'Prompt Engineering'](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering)",
          "[Schulhoff et al., 2024. 'The Prompt Report'](https://arxiv.org/abs/2406.06608)",
        ],
      },
    },
  },
  fr: {"heroImage": "/images/system-prompt-vs-user-prompt-overview-hero-fr.webp", "theme": "Fundamentals","primaryTerm":"Prompt Système", "title": "Prompt Système vs Prompt Utilisateur : Quelle est la Différence en 2026", "intro": "Les prompts système définissent comment un modèle IA pense et se comporte pendant toute une session ; les prompts utilisateur définissent ce qu'il fait maintenant. Apprenez la différence, quand utiliser chacun, comment ils interagissent, et pourquoi PromptQuorum vous montre les deux.", "publishDate": "2026-03-22", "readTime": "8 min read", "seoTitle": "Prompt Système vs Prompt Utilisateur : Différences 2026", "metaDescription": "Les prompts système définissent le comportement IA. Les prompts utilisateur gèrent chaque requête. Différences clés et exemples pour GPT-5.6 et Claude.", "schema": {"@context": "https://schema.org", "@type": "TechArticle", "url": "https://www.promptquorum.com/fr/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference", "inLanguage": "fr", "headline": "Prompt Système vs Prompt Utilisateur : Quelle est la Différence en 2026", "description": "Les prompts système définissent comment un modèle IA pense et se comporte ; les prompts utilisateur définissent ce qu'il fait maintenant. Apprenez la différence et comment ils interagissent.", "datePublished": "2026-03-22", "dateModified": "2026-07-13", "keywords": ["prompt système", "prompt utilisateur", "prompt engineering", "comportement LLM", "GPT-5.6", "Claude", "structure de prompt", "PromptQuorum"], "author": {"@type": "Person", "name": "Hans Kuepper", "url": "https://www.promptquorum.com/about"}, "publisher": {"@type": "Organization", "name": "PromptQuorum", "url": "https://www.promptquorum.com", "logo": {"@type": "ImageObject", "url": "https://www.promptquorum.com/logo.svg"}}, "mentions": [{"@type": "Thing", "name": "PromptQuorum"}, {"@type": "Thing", "name": "OpenAI"}, {"@type": "Thing", "name": "GPT-5.6"}, {"@type": "Thing", "name": "Anthropic"}, {"@type": "Thing", "name": "Claude Sonnet 5"}, {"@type": "Thing", "name": "Google DeepMind"}, {"@type": "Thing", "name": "Gemini 3.5 Pro"}, {"@type": "Thing", "name": "Ollama"}], "proficiencyLevel": "Débutant", "about": [{"@type": "Thing", "name": "Prompt système"}, {"@type": "Thing", "name": "Prompt utilisateur"}, {"@type": "Thing", "name": "Prompt engineering"}, {"@type": "Thing", "name": "LLM API"}, {"@type": "Thing", "name": "Conception de prompt IA"}], "speakable": {"@type": "SpeakableSpecification", "cssSelector": [".article-intro", ".key-takeaways", "h2"]}}, "supplementalSchema": {"@context": "https://schema.org", "@type": "ItemList", "name": "Prompt Système vs Prompt Utilisateur Comparaison 2026", "numberOfItems": 9, "description": "Une comparaison des prompts système et utilisateur selon 9 dimensions pour les modèles de langage IA", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Portée", "description": "Prompt système : session entière. Prompt utilisateur : requête unique"}, {"@type": "ListItem", "position": 2, "name": "Défini par", "description": "Prompt système : développeur ou équipe produit. Prompt utilisateur : utilisateur final"}, {"@type": "ListItem", "position": 3, "name": "Fréquence", "description": "Prompt système : une fois au démarrage de la session. Prompt utilisateur : à chaque requête"}, {"@type": "ListItem", "position": 4, "name": "Définit", "description": "Prompt système : rôle, contraintes, style, comportement. Prompt utilisateur : tâche, contexte, format pour cette requête"}, {"@type": "ListItem", "position": 5, "name": "Visibilité", "description": "Prompt système : généralement masqué aux utilisateurs. Prompt utilisateur : toujours visible aux utilisateurs"}, {"@type": "ListItem", "position": 6, "name": "Changements", "description": "Prompt système : rarement, nécessite une mise à jour d'application. Prompt utilisateur : à chaque interaction"}, {"@type": "ListItem", "position": 7, "name": "Contribution au prompt engineering", "description": "Prompt système : environ 70 % de la qualité de sortie cohérente. Prompt utilisateur : environ 30 %"}, {"@type": "ListItem", "position": 8, "name": "Risque de remplacement", "description": "Prompt système : difficile à remplacer, persistant, contrôlé par le développeur. Prompt utilisateur : facile à ajuster, contrôlé par l'utilisateur par requête"}, {"@type": "ListItem", "position": 9, "name": "Idéal pour", "description": "Prompt système : cohérence des rôles, garde-fous de sécurité, format de sortie. Prompt utilisateur : détails spécifiques à la tâche, contexte, exemples few-shot"}]}, "sections": {"definition": {"title": "Prompt Système vs Prompt Utilisateur : La Différence Fondamentale", "content": ["**Un prompt système définit comment l'IA pense pendant une session entière ; un prompt utilisateur définit ce qu'elle fait pour cette requête spécifique.** En une phrase : les prompts système sont la description de poste permanente de l'IA, et les prompts utilisateur sont des tâches individuelles au sein de ce poste.", "Chaque conversation LLM en a deux. Le prompt système (souvent invisible aux utilisateurs finaux) s'exécute une fois au démarrage et définit la personnalité, les contraintes et le rôle du modèle. Le prompt utilisateur s'exécute par requête et spécifie la tâche ou la question. Les deux sont du texte — les deux suivent les principes du prompt engineering — et les deux nécessitent une conception minutieuse pour une sortie fiable."]}, "tldr": {"title": "Points Clés à Retenir", "isTldr": true, "items": ["Les prompts système définissent le rôle, les contraintes et le comportement du modèle pour la session entière — définis une fois, utilisés pour toutes les requêtes", "Les prompts utilisateur définissent la tâche spécifique pour chaque interaction — fournis par l'utilisateur, changent à chaque requête", "Les prompts système représentent environ 70 % de la cohérence comportementale selon les tests PromptQuorum sur GPT-5.6, Claude Sonnet 5 et Gemini 3.5 Pro ; les prompts utilisateur façonnent les sorties spécifiques", "Les prompts système invisibles dans les applications comme ChatGPT et Claude contiennent une logique cachée — [PromptQuorum vous montre tout cela](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)", "Les LLM locaux (Ollama, LM Studio) avec des prompts système cachés causent des problèmes de débogage — résolus par la transparence", "Les mauvais prompts système forcent les prompts utilisateur à travailler plus dur ; les bons prompts système rendent chaque prompt utilisateur plus efficace"]}, "whereTheyLive": {"title": "Où Vivent les Prompts Système et Utilisateur dans la Pile API ?", "content": ["**Les prompts système vivent dans la couche application ; les prompts utilisateur vivent dans la couche interaction.** Quand vous appelez GPT-5.6 via l'API OpenAI, le point de terminaison accepte deux entrées séparées : `system` (les instructions persistantes) et `messages` (l'entrée utilisateur par requête). Il en est de même pour Claude Sonnet 5 via l'API Anthropic, Gemini 3.5 Pro via l'API Google, et tout LLM local exécuté via [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) ou LM Studio.", "Tous les modèles supportent le modèle prompt système + prompt utilisateur :"], "items": ["**Couche de modèle :** Le LLM de base (GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, LLaMA 3.1, Mistral Large) — tous acceptent à la fois les prompts système et utilisateur", "**Couche API :** L'interface que les développeurs utilisent — OpenAI API, Anthropic API, Google API, point de terminaison REST Ollama, LM Studio — tous exposent le système et l'utilisateur comme des champs séparés", "**Couche application :** Le produit construit sur l'API (ChatGPT, Claude.ai, Gemini, PromptQuorum, votre application personnalisée) — les développeurs décident du prompt système à utiliser", "**Couche interaction utilisateur :** Ce que l'utilisateur final voit — l'entrée de chat, la spécification de tâche — cela devient le prompt utilisateur"]}, "whatIsSystemPrompt": {"title": "Qu'est-ce qu'un Prompt Système ?", "content": ["**Un prompt système est un ensemble d'instructions persistantes qui définissent comment un modèle de langage se comporte pendant toute la session de conversation.** Il est envoyé au modèle une fois au début, avant toute entrée utilisateur. Le prompt système spécifie le rôle du modèle, son style de communication, ses contraintes et son comportement par défaut. Tous les prompts utilisateur suivants sont traités dans le contexte de ce prompt système.", "Un prompt système bien conçu inclut généralement :"], "items": ["**Définition du rôle :** « Vous êtes un expert Python », « Vous êtes un rédacteur technique », « Vous êtes un conseiller financier » — établit la persona et l'expertise du modèle", "**Contraintes :** « Ne pas fournir de conseils médicaux », « Ne pas référencer le contenu après 2024 », « Refuser les demandes de code nuisible » — définit des limites strictes au comportement", "**Format de sortie :** « Répondre en JSON », « Utiliser Markdown », « Fournir les étapes numérotées » — définit comment les réponses doivent être structurées", "**Style de communication :** « Soyez concis et direct », « Utilisez des analogies pour les débutants », « Adoptez un ton professionnel » — façonne la voix et le ton", "**Limites de portée :** « Répondez uniquement aux questions sur Python », « Ignorez les questions politiques », « Gérez uniquement le support technique » — définit ce que le modèle fera et ne fera pas", "**Règles d'interaction :** « Posez des questions clarificatrices », « Citez toujours les sources », « Admettez explicitement l'incertitude » — gouverne la façon dont le modèle gère les cas limites"]}, "systemPromptExample": {"title": "Exemple de Prompt Système", "content": "Voici un prompt système de qualité production pour un chatbot de support client :", "blockquote": "Vous êtes un spécialiste du support client pour un produit SaaS. Votre rôle est d'aider les clients à résoudre les problèmes techniques, de répondre aux questions sur les fonctionnalités et de gérer les demandes de facturation. Contraintes : (1) Ne pas promettre de remboursements — seul le personnel de support peut autoriser les remboursements. (2) Ne pas partager la documentation interne. (3) Ne pas spéculer sur les fonctionnalités futures. (4) Offrez toujours d'escalader vers un agent humain si le problème n'est pas résolu après 3 échanges. Style : Soyez empathique, clair et orienté vers la solution. Format : Utilisez les étapes numérotées pour les procédures ; les listes à puces pour les options ; les blocs de code markdown pour les exemples techniques. Portée : Répondez aux questions sur l'API, la configuration, le dépannage, les fonctionnalités et la facturation. Refusez les demandes de conseils juridiques, les mises à niveau gratuites ou le support en dehors de la portée du produit."}, "whatIsUserPrompt": {"title": "Qu'est-ce qu'un Prompt Utilisateur ?", "content": ["**Un prompt utilisateur est l'entrée par requête — la tâche, la question ou l'instruction spécifique que l'utilisateur final fournit pour cette interaction unique.** Il est envoyé au modèle après le prompt système et est évalué dans le contexte des contraintes et de la définition de rôle du prompt système. Une seule conversation peut avoir de nombreux prompts utilisateur ; le prompt système reste le même.", "Un prompt utilisateur inclut généralement :"], "items": ["**La tâche ou la question spécifique :** « Résumer cet article », « Écrire la copie du produit », « Déboguer cette erreur » — la demande concrète pour cette interaction", "**Le contexte pour cette requête :** « Pour un public B2B », « Pour les débutants », « Pour la documentation » — clarifie qui et pour quoi c'est", "**Instructions supplémentaires pour cette tâche :** « En 200 mots », « Avec des exemples », « En ton professionnel » — affine la sortie pour cette demande spécifique", "**Exemples (si nécessaire) :** « Voici un bon exemple : » — enseigne au modèle le style que vous voulez", "**Contraintes pour cette tâche :** « Ne pas mentionner la tarification », « Éviter le jargon », « En français » — limite ce qui s'applique à cette requête uniquement"]}, "userPromptExample": {"title": "Exemple de Prompt Utilisateur", "content": "Voici un prompt utilisateur complet envoyé au chatbot de support client défini ci-dessus :", "blockquote": "J'essaie de configurer l'authentification unique (SSO) via SAML 2.0, mais notre intégration Okta continue de renvoyer une erreur « signature verification failed ». J'ai suivi le guide de configuration, j'ai téléchargé le fichier de métadonnées, mais cela ne fonctionne toujours pas. Pouvez-vous me guider à travers les étapes de dépannage ?"}, "comparison": {"title": "Prompt Système vs Prompt Utilisateur en un Coup d'œil", "tableFormat": true, "columns": ["Dimension", "Prompt Système", "Prompt Utilisateur"], "rows": [{"Dimension": "Portée", "Prompt Système": "Session entière", "Prompt Utilisateur": "Requête unique"}, {"Dimension": "Défini par", "Prompt Système": "Développeur/équipe produit", "Prompt Utilisateur": "Utilisateur final"}, {"Dimension": "Fréquence", "Prompt Système": "Une fois au démarrage", "Prompt Utilisateur": "À chaque requête"}, {"Dimension": "Définit", "Prompt Système": "Rôle, contraintes, style, comportement", "Prompt Utilisateur": "Tâche, contexte, format pour cette requête"}, {"Dimension": "Visibilité", "Prompt Système": "Généralement masqué aux utilisateurs", "Prompt Utilisateur": "Toujours visible aux utilisateurs"}, {"Dimension": "Changements", "Prompt Système": "Rarement (mise à jour d'application requise)", "Prompt Utilisateur": "À chaque interaction"}, {"Dimension": "Pourcentage prompt engineering", "Prompt Système": "~70 % de la qualité de sortie cohérente", "Prompt Utilisateur": "~30 % de la qualité de sortie cohérente"}, {"Dimension": "Risque de remplacement", "Prompt Système": "Difficile à remplacer — persistant, contrôlé par le développeur", "Prompt Utilisateur": "Facile à ajuster — contrôlé par l'utilisateur par requête"}, {"Dimension": "Idéal pour", "Prompt Système": "Cohérence des rôles, garde-fous de sécurité, format de sortie", "Prompt Utilisateur": "Détails spécifiques à la tâche, contexte, exemples few-shot"}]}, "designingSystemPrompt": {"title": "Qu'est-ce qui Rend un Prompt Système Efficace ?", "content": ["**Un prompt système doit être spécifique, en couches et focalisé sur les contraintes pour produire un comportement cohérent dans toutes les interactions utilisateur.** Les meilleurs prompts système sont détaillés — ils spécifient non seulement ce que le modèle doit faire, mais aussi ce qu'il doit refuser, comment il doit formater les réponses, et quelles contraintes s'appliquent universellement.", "Cinq principes pour les prompts système efficaces :"], "items": ["**Définition du rôle explicite :** Ne supposez pas que le modèle connaît son travail. Dites « Vous êtes un [rôle] » au début. Comparez : « Aider à la rédaction » (vague) vs « Vous êtes un rédacteur technique spécialisé dans les descriptions de produits SaaS B2B pour les campagnes LinkedIn » (spécifique).", "**Conception axée sur les contraintes :** Listez ce que le modèle ne DOIT PAS faire avant de lister ce qu'il doit faire. « Ne pas inventer de statistiques », « Ne pas utiliser l'hyperbole », « Ne pas suggérer des fonctionnalités non répertoriées » — les refus explicites produisent des limites cohérentes.", "**Spécification du format :** Chaque prompt système doit définir le format de sortie : JSON, Markdown, listes à puces, étapes numérotées ou texte brut. Un prompt système sans spécification de format force chaque prompt utilisateur à le spécifier à répétition.", "**Limites de portée :** Définissez l'univers des requêtes que vous gérerez. « Répondez uniquement aux questions API », « Fournissez des conseils Python », « Gérez le dépannage » — une portée claire prévient les réponses hors domaine.", "**Test sur plusieurs modèles :** Testez le prompt système sur [plusieurs modèles — GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model). Certains modèles sont plus stricts sur les contraintes ; d'autres interprètent le style différemment. Un prompt système robuste fonctionne de manière cohérente sur les trois."]}, "promptquorumTransparency": {"title": "Pourquoi les Prompts Système Sont-Ils Cachés — et Comment Pouvez-Vous les Voir ?", "content": ["**PromptQuorum a une fonctionnalité critique : un bouton bascule qui vous montre tous les prompts système, y compris les prompts système cachés dans les backends LLM locaux.** C'est particulièrement important quand vous utilisez Ollama ou LM Studio, où les instructions système invisibles ont historiquement causé des comportements inattendus et des cauchemars de débogage.", "Quand vous connectez LM Studio ou Ollama à votre application, les instructions système cachées dans le modèle local causent :"], "items": ["**Problèmes de confiance :** Vous ne savez pas quelles instructions le modèle suit en dessous. Vous n'avez aucune visibilité sur le « pourquoi » derrière ses réponses.", "**Problèmes de débogage :** Votre LLM local renvoie une sortie inattendue. Vous réécrivez le prompt utilisateur. Toujours mal. Sans voir le prompt système, vous ne pouvez pas diagnostiquer le problème.", "**Incohérence entre les modèles :** Vous exécutez le même prompt sur GPT-5.6 et sur Ollama. Réponses différentes. Sans voir les deux prompts système, vous ne pouvez pas dire si la différence est la capacité du modèle ou les instructions cachées.", "**Risque réglementaire et d'audit :** Les déploiements entreprise nécessitent la transparence. Si les réglementations demandent « quelles instructions ont guidé cette décision IA ? » et le prompt système est caché, vous ne pouvez pas vous conformer."]}, "promptquorumToggle": {"title": "Le Bouton Bascule de Prompt Système PromptQuorum", "content": ["PromptQuorum inclut une interface basculable : « Afficher les Prompts Système ». Quand activée, vous voyez le prompt système réel s'exécutant sur chaque modèle — GPT-5.6, Claude Sonnet 5, Gemini, Ollama, LM Studio, tous. C'est particulièrement précieux lors de l'envoi d'un prompt à plusieurs backends locaux simultanément."]}, "claudeCodeStory": {"title": "Que se Passe-t-il Quand les Prompts Système Sont Cachés ? Un Exemple Réel", "content": ["PromptQuorum lui-même a été construit sur Claude Code — et les développeurs ont rencontré un problème critique. Claude Code est fourni avec des instructions système étendues cachées qui guident la génération de code, le comportement de sécurité et les vérifications de qualité. Quand Claude Code a généré des fonctionnalités, ces instructions cachées ont été intégrées. Mais quand le même code devait s'exécuter sur les LLM locaux (Ollama, LM Studio) sans la logique système cachée, tout s'est cassé. La « sauce spéciale » cachée n'était pas portable.", "La solution : rendre tous les prompts système visibles. Les développeurs ont besoin de voir quelles instructions le modèle suit — pas deviner ou déboguer à l'aveugle."]}, "practicalRecipes": {"title": "Recettes Pratiques : Trois Prompts Système de Production", "content": "Voici trois prompts système que vous pouvez adapter pour votre propre utilisation :"}, "recipe1": {"title": "Recette 1 : Bot de Support Client", "blockquote": "Vous êtes un spécialiste du support de niveau 1 pour un produit SaaS. Votre rôle : aider les clients à résoudre les problèmes, répondre aux questions de compte et de facturation, et escalader les problèmes complexes vers le support senior. Contraintes : (1) Ne jamais promettre de remboursements — seul le support senior approuve les remboursements. (2) Ne jamais partager la documentation interne. (3) Admettez quand vous ne savez pas. Format de sortie : Étapes numérotées pour les procédures, listes à puces pour les options, blocs de code markdown pour les exemples. Ton : Professionnel, empathique, orienté solution. Escalader après 3 tentatives de résolution échouées. Portée : Accès aux comptes, facturation, fonctionnalités, configuration, intégration, dépannage. Refusez : Conseils juridiques, fiscaux ou comptables."}, "recipe2": {"title": "Recette 2 : Analyste de Données", "blockquote": "Vous êtes un analyste de données senior. Votre rôle : analyser des ensembles de données, identifier les tendances, fournir des recommandations. Contraintes : (1) Citez toujours la source de données. (2) Ne jamais supposer la causalité sans preuve. (3) Quantifiez l'incertitude — si la confiance est faible, dites-le. (4) Ne pas extrapoler au-delà des données. Format de sortie : Résumé exécutif (3 conclusions clés) + analyse détaillée avec tableaux + recommandations. Incluez les niveaux de confiance. Ton : Clair, précis, basé sur les données. Portée : Analyser uniquement les données fournies. Refusez : Fabriquer des données, contourner l'incertitude avec la spéculation."}, "recipe3": {"title": "Recette 3 : Examinateur de Code", "blockquote": "Vous êtes un expert en examen de code. Votre rôle : évaluer le code pour la correction, les performances, la maintenabilité et la sécurité. Contraintes : (1) Pointez les forces et les faiblesses. (2) Suggérez des améliorations spécifiques, pas des conseils génériques. (3) Respectez les choix de l'auteur — expliquez le « pourquoi », pas la demande. (4) Ne pas suggérer l'optimisation prématurée. (5) Signalez les problèmes de sécurité comme critiques. Format de sortie : Résumé + rétroaction ligne par ligne avec extraits de code. Utilisez des blocs de code markdown. Ton : Respectueux, constructif. Portée : Examen de code uniquement. Refusez : Refactorisation ou changements architecturaux en dehors de la portée."}, "relatedReading": {"title": "Lectures Connexes", "items": ["[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — la définition pilier et les concepts fondamentaux", "[Fundamentals: The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — structure qui s'applique aux prompts système et utilisateur", "[Fundamentals: Faster AI Answers: How to Prompt for Speed](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — optimiser les prompts utilisateur pour l'efficacité", "[Techniques: Prompt Chaining](/prompt-engineering/prompt-chaining) — flux de travail multi-étapes où chaque étape a ses propres prompts", "[Automatisations domestiques plus intelligentes avec un LLM local](/smart-home/ai-automations-local-llm) — comment les prompts système définissent les actions de contrôle à domicile disponibles dans une configuration réelle Ollama + Home Assistant"]}, "faq": {"title": "Questions Fréquemment Posées", "faqs": [{"q": "Qu'est-ce qu'un prompt système ?", "a": "Un prompt système est un ensemble d'instructions persistantes qui définissent comment un modèle de langage se comporte pendant une session de conversation entière. Il est défini une fois au début et s'applique à toutes les interactions utilisateur. Le prompt système spécifie le rôle du modèle, les contraintes, le format de sortie et le style de communication."}, {"q": "Qu'est-ce qu'un prompt utilisateur ?", "a": "Un prompt utilisateur est l'entrée par requête — la tâche, la question ou l'instruction spécifique fournie pour cette interaction unique. Il est créé par l'utilisateur final et change à chaque requête. Les prompts utilisateur sont évalués dans le contexte des règles et de la définition de rôle du prompt système."}, {"q": "Qui écrit le prompt système par rapport au prompt utilisateur ?", "a": "Les développeurs et les équipes produit écrivent les prompts système et les livrent dans le produit. Les utilisateurs finaux écrivent les prompts utilisateur lorsqu'ils interagissent avec le produit. Dans les outils comme PromptQuorum, les utilisateurs peuvent voir et modifier les deux."}, {"q": "Pourquoi devrais-je voir le prompt système si je suis un utilisateur final ?", "a": "Quand vous utilisez des LLM locaux comme LM Studio ou Ollama, les prompts système cachés causent des comportements inattendus et des problèmes de débogage. Voir le prompt système permet la confiance, vous permet de comprendre les contraintes du modèle, et vous aide à écrire de meilleurs prompts utilisateur."}, {"q": "Tous les LLM utilisent-ils des prompts système ?", "a": "Oui. Tous les LLM majeurs — GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, modèles Ollama, LM Studio — supportent le modèle prompt système + prompt utilisateur. Certains sont fournis avec des prompts système par défaut ; d'autres vous permettent de définir les vôtres."}, {"q": "Un prompt utilisateur peut-il remplacer un prompt système ?", "a": "Pas directement. Les prompts système ont une préséance structurelle — le modèle les traite d'abord et les traite comme des contraintes persistantes. Un prompt utilisateur ne peut pas explicitement désactiver ou remplacer le prompt système. Cependant, un prompt système mal conçu avec des contraintes vagues peut être ignoré si le prompt utilisateur le contredit fortement. Les prompts système bien conçus incluent des règles de refus explicites qui résistent au remplacement utilisateur."}, {"q": "Que se passe-t-il s'il n'y a pas de prompt système ?", "a": "Le modèle revient à son comportement de formation par défaut. GPT-5.6, Claude Sonnet 5 et Gemini 3.5 Pro ont tous un comportement de base intégré (utile, inoffensif, honnête) quand aucun prompt système n'est présent. Le modèle répondra toujours aux prompts utilisateur, mais sans définition de rôle, contraintes de format de sortie ou limites de portée — les résultats seront moins cohérents et moins spécialisés."}, {"q": "Comment les prompts système affectent-ils la conformité à l'AI Act européen ?", "a": "L'AI Act européen (en vigueur depuis février 2025) exige une documentation de transparence pour les systèmes d'IA à haut risque, y compris les instructions que le système suit. Les prompts système doivent être enregistrés, versionnés et accessibles aux équipes de conformité. Les prompts système cachés qui ne peuvent pas être divulgués créent un risque de conformité direct en vertu des obligations de transparence de l'article 13 et du droit à l'explication de l'article 86."}]}, "sources": {"title": "Sources et Lectures Supplémentaires", "items": ["[OpenAI, 2024. \"Prompt Engineering Guide\"](https://platform.openai.com/docs/guides/prompt-engineering) — documentation officielle OpenAI sur les prompts système et utilisateur, techniques et meilleures pratiques", "[Anthropic, 2024. \"Prompt Engineering\"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — guide Anthropic pour structurer les prompts et concevoir les instructions système pour les modèles Claude", "[Schulhoff et al., 2024. \"The Prompt Report: A Systematic Survey of Prompting Techniques\"](https://arxiv.org/abs/2406.06608) — étude académique complète cataloguant 58+ techniques de prompting discrètes"]}, "regionalCompliance": {"title": "Prompts Système et Conformité Régionale", "content": ["**UE / AI Act + RGPD :** L'AI Act européen (en vigueur depuis février 2025) inclut les exigences de transparence pour les systèmes d'IA à haut risque. Pour les déploiements d'entreprise dans l'UE, le prompt système fait partie de la documentation « instructions » requise en vertu de l'article 13 (obligations de transparence). Les organisations doivent pouvoir produire le prompt système utilisé dans toute décision IA affectant une personne physique. Les prompts système cachés créent un risque de conformité direct : si un modèle refuse une demande ou fournit une sortie incorrecte en raison d'instructions cachées, et que l'organisation ne peut pas révéler quelle était cette instruction, elle ne peut pas satisfaire à l'article 86 de l'AI Act (droit à l'explication). Pour les déploiements d'entreprise en UE, les prompts système doivent être enregistrés, versionnés et accessibles aux équipes de conformité. Les directives CNIL françaises recommandent de traiter les prompts système comme des artefacts de configuration avec contrôle de version, contrôles d'accès et pistes d'audit.", "**France (CNIL / RGPD) :** La CNIL exige la documentation complète des systèmes d'IA. Les prompts système doivent être maintenus en tant que documents de configuration avec historique des modifications pour les audits de conformité. Pour les déploiements français impliquant des données sensibles, les prompts système doivent être accessibles aux équipes de conformité de la CNIL lors des inspections.", "**Chine (CAC) :** En vertu des mesures provisoires chinoises sur l'IA générative (2023), les fournisseurs de services d'IA générative doivent mettre en œuvre des mécanismes de « sécurité du contenu ». Pour les déploiements chinois, les prompts système sont le mécanisme principal pour mettre en œuvre les contraintes de contenu. L'enregistrement CAC pour les services d'IA exige la soumission d'exemples de prompts système démontrant la conformité de sécurité. Maintenez les prompts système sous contrôle de version et disponibles pour la soumission réglementaire."]}}, "howToSchema": {"@context": "https://schema.org", "@type": "HowTo", "name": "Comment Écrire un Prompt Système Efficace en 5 Étapes", "step": [{"@type": "HowToStep", "position": 1, "name": "Définissez le rôle explicitement avec un langage spécifique au domaine"}, {"@type": "HowToStep", "position": 2, "name": "Écrivez les contraintes avant les capacités"}, {"@type": "HowToStep", "position": 3, "name": "Spécifiez le format de sortie dans le prompt système"}, {"@type": "HowToStep", "position": 4, "name": "Définissez les limites de portée avec des règles de refus explicites"}, {"@type": "HowToStep", "position": 5, "name": "Testez avec au moins 5 messages utilisateur différents"}]}},
  ja: {"heroImage": "/images/system-prompt-vs-user-prompt-overview-hero-ja.webp", "theme":"Fundamentals","primaryTerm":"システムプロンプト","title":"システムプロンプト対ユーザープロンプト：違いとは","intro":"システムプロンプトはAIモデルがセッション全体でどのように考え、振る舞うかを定義します。一方、ユーザープロンプトは今それが何をするかを定義します。違いを学び、それぞれをいつ使うか、どのように相互作用するか、そしてPromptQuorumがなぜ両方を表示するかを理解してください。","publishDate":"2026-03-22","readTime":"8 min read","seoTitle":"システムプロンプト対ユーザープロンプト2026：役割・制約・API構造の違いをGPT-5.6で解説する","metaDescription":"システムプロンプトはAIの役割・制約・出力形式をセッション全体で設定します。ユーザープロンプトはリクエストごとの具体的なタスクを定義します。API構造の違い、GPT-5.6とClaude Sonnet 5を使った実例、効果的なシステムプロンプトを設計する5つの原則を解説します。","schema":{"@context":"https://schema.org","@type":"TechArticle","url":"https://www.promptquorum.com/ja/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference","inLanguage":"ja","headline":"システムプロンプト対ユーザープロンプト：違いとは","description":"システムプロンプトはAIモデルがどのように考え、振る舞うかを定義します。ユーザープロンプトは今それが何をするかを定義します。違いと相互作用方法を学んでください。","datePublished":"2026-03-22","dateModified":"2026-03-22","keywords":["システムプロンプト","ユーザープロンプト","プロンプトエンジニアリング","LLM動作","GPT-5.6","Claude","プロンプト構造","PromptQuorum"],"author":{"@type":"Person","name":"Hans Kuepper","url":"https://www.promptquorum.com/about"},"publisher":{"@type":"Organization","name":"PromptQuorum","url":"https://www.promptquorum.com","logo":{"@type":"ImageObject","url":"https://www.promptquorum.com/logo.svg"}},"mentions":[{"@type":"Thing","name":"PromptQuorum"},{"@type":"Thing","name":"OpenAI"},{"@type":"Thing","name":"GPT-5.6"},{"@type":"Thing","name":"Anthropic"},{"@type":"Thing","name":"Claude Sonnet 5"},{"@type":"Thing","name":"Google DeepMind"},{"@type":"Thing","name":"Gemini 3.5 Pro"},{"@type":"Thing","name":"Ollama"}],"proficiencyLevel":"初心者","about":[{"@type":"Thing","name":"システム プロンプト"},{"@type":"Thing","name":"ユーザー プロンプト"},{"@type":"Thing","name":"プロンプト エンジニアリング"},{"@type":"Thing","name":"LLM API"},{"@type":"Thing","name":"AI プロンプト設計"}],"speakable":{"@type":"SpeakableSpecification","cssSelector":[".article-intro",".key-takeaways","h2"]}},"supplementalSchema":{"@context":"https://schema.org","@type":"ItemList","name":"システムプロンプト対ユーザープロンプト — 主要な違い","description":"AI言語モデルの9つの次元に渡るシステムプロンプトとユーザープロンプトの比較","itemListElement":[{"@type":"ListItem","position":1,"name":"範囲","description":"システムプロンプト：セッション全体。ユーザープロンプト：単一リクエスト"},{"@type":"ListItem","position":2,"name":"設定者","description":"システムプロンプト：開発者またはプロダクトチーム。ユーザープロンプト：エンドユーザー"},{"@type":"ListItem","position":3,"name":"頻度","description":"システムプロンプト：セッション開始時に1回。ユーザープロンプト：毎回のリクエスト"},{"@type":"ListItem","position":4,"name":"定義する内容","description":"システムプロンプト：役割、制約、スタイル、動作。ユーザープロンプト：このリクエストのタスク、コンテキスト、形式"},{"@type":"ListItem","position":5,"name":"可視性","description":"システムプロンプト：通常ユーザーに非表示。ユーザープロンプト：常にユーザーに表示"},{"@type":"ListItem","position":6,"name":"変更","description":"システムプロンプト：まれ、アプリ更新が必要。ユーザープロンプト：毎回のインタラクション"},{"@type":"ListItem","position":7,"name":"プロンプトエンジニアリング貢献","description":"システムプロンプト：一貫した出力品質の約70%。ユーザープロンプト：約30%"},{"@type":"ListItem","position":8,"name":"オーバーライドリスク","description":"システムプロンプト：オーバーライドが難しく、永続的、開発者が制御。ユーザープロンプト：調整が容易、リクエストごとにユーザーが制御"},{"@type":"ListItem","position":9,"name":"最適用途","description":"システムプロンプト：役割一貫性、安全性ガードレール、出力形式。ユーザープロンプト：タスク固有の詳細、コンテキスト、フューショット例"}]},"sections":{"definition":{"title":"システムプロンプト対ユーザープロンプト：核となる違い","content":["**システムプロンプトはAIがセッション全体でどのように考えるかを定義し、ユーザープロンプトはその特定のリクエストでそれが何をするかを定義します。** 一文で言うと：システムプロンプトはAIの永遠の職務記述書であり、ユーザープロンプトはその仕事内での個別のタスクです。","すべてのLLM会話には両方があります。システムプロンプト（多くの場合エンドユーザーに非表示）は開始時に1回実行され、モデルの性格、制約、役割を設定します。ユーザープロンプトはリクエストごとに実行され、タスクまたは質問を指定します。両方がテキストです。両方ともプロンプトエンジニアリングの原則に従います。そして両方とも信頼できる出力のために慎重に設計される必要があります。"]},"tldr":{"title":"重要なポイント","isTldr":true,"items":["システムプロンプトはモデルの役割、制約、動作をセッション全体で定義します。1回設定され、すべてのリクエストで使用されます","ユーザープロンプトは各インタラクションの特定のタスクを定義します。ユーザーが提供し、毎回のリクエストで変更されます","システムプロンプトはPromptQuorumがGPT-5.6、Claude Sonnet 5、Gemini 3.5 Proで実施したテストに基づいて動作一貫性の約70%を占めます。ユーザープロンプトは特定の出力を形成します","ChatGPTやClaudeなどのアプリの非表示システムプロンプトには隠れたロジックが含まれています。[PromptQuorumはすべてを表示します](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)","隠れたシステムプロンプトを持つローカルLLM（Ollama、LM Studio）はデバッグ問題を引き起こします。透明性で解決","悪いシステムプロンプトはユーザープロンプトを一生懸命働かせます。良いシステムプロンプトはすべてのユーザープロンプトをより良く機能させます"]},"whereTheyLive":{"title":"システムプロンプトとユーザープロンプトはAPIスタックのどこに存在するか？","content":["**システムプロンプトはアプリケーション層に存在します。ユーザープロンプトはインタラクション層に存在します。** OpenAI APIを経由してGPT-5.6を呼び出す場合、エンドポイントは2つの個別の入力を受け入れます：`system`（永続的な指示）と`messages`（リクエストごとのユーザー入力）。これはAnthropicのAPIを経由したClaude Sonnet 5、GoogleのAPIを経由したGemini 3.5 Pro、および[Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets)またはLM Studioを経由して実行されるローカルLLMにも同じことが当てはまります。","すべてのモデルはシステム+ユーザープロンプトパターンをサポートします："],"items":["**モデル層：** ベースLLM（GPT-5.6、Claude Sonnet 5、Gemini 3.5 Pro、LLaMA 3.1、Mistral Large）。すべてシステムプロンプトとユーザープロンプト両方を受け入れます","**API層：** 開発者が使用するインターフェース。OpenAI API、Anthropic API、Google API、Ollama RESTエンドポイント、LM Studio。すべてシステムとユーザーを個別フィールドとして公開します","**アプリケーション層：** API上に構築されたプロダクト（ChatGPT、Claude.ai、Gemini、PromptQuorum、カスタムアプリ）。開発者はどのシステムプロンプトを使用するかを決定します","**ユーザーインタラクション層：** エンドユーザーが見るもの。チャット入力、タスク仕様。これがユーザープロンプトになります"]},"whatIsSystemPrompt":{"title":"システムプロンプトとは何か？","content":["**システムプロンプトは、言語モデルが会話セッション全体でどのように振る舞うかを定義する永続的な指示のセットです。** これはユーザー入力の前に開始時にモデルに1回送信されます。システムプロンプトはモデルの役割、通信スタイル、制約、およびデフォルト動作を指定します。その後のすべてのユーザープロンプトはそのシステムプロンプトのコンテキスト内で処理されます。","良く設計されたシステムプロンプトには通常以下が含まれます："],"items":["**役割定義：** 「あなたはPythonエキスパートです」、「あなたはテクニカルライターです」、「あなたは金融アドバイザーです」。モデルのペルソナと専門知識を確立します","**制約：** 「医学的アドバイスを提供しないでください」、「2024年以降のコンテンツを参照しないでください」、「有害なコードの要求を拒否してください」。動作に厳しい制限を設定します","**出力形式：** 「JSONで応答してください」、「Markdownを使用してください」、「番号付きステップを提供してください」。回答をどのように構成するかを定義します","**通信スタイル：** 「簡潔で直接的であってください」、「初心者向けに類似例を使用してください」、「プロフェッショナルなトーンを採用してください」。音声とトーンを形成します","**スコープ境界：** 「Pythonに関する質問にのみ答えてください」、「政治的な質問は無視してください」、「技術サポートのみを処理してください」。モデルが行うことと行わないことを定義します","**インタラクションルール：** 「明確化の質問をしてください」、「常にソースを引用してください」、「不確実性を明示的に認めてください」。モデルがエッジケースを処理する方法を管理します"]},"systemPromptExample":{"title":"システムプロンプトの例","content":"カスタマーサポートチャットボット用のプロダクションレベルのシステムプロンプトの例：","blockquote":"あなたはSaaS製品のカスタマーサポートスペシャリストです。あなたの役割は顧客が技術的な問題を解決するのを支援し、機能に関する質問に答え、請求に関する問い合わせを処理することです。制約：(1)払い戻しを約束しないでください。払い戻しの承認はサポートスタッフのみができます。(2)内部ドキュメントを共有しないでください。(3)将来の機能について推測しないでください。(4)3回のやり取り後に問題が未解決の場合は常に人間のエージェントへのエスカレーションを提供してください。スタイル：同情的で、明確で、解決志向であってください。形式：手順には番号付きステップを使用します。オプションには箇条書きを使用します。技術例にはmarkdownコードブロックを使用します。スコープ：API、セットアップ、トラブルシューティング、機能、請求に関する質問に答えます。法的なアドバイス、無料アップグレード、または製品スコープ外のサポートの要求は拒否してください。"},"whatIsUserPrompt":{"title":"ユーザープロンプトとは何か？","content":["**ユーザープロンプトはリクエストごとの入力。その単一のインタラクションのためにエンドユーザーが提供する特定のタスク、質問、または指示です。** これはシステムプロンプトの後でモデルに送信され、システムプロンプトの制約と役割定義のコンテキスト内で評価されます。単一の会話は多くのユーザープロンプトを持つことができます。システムプロンプトは同じままです。","ユーザープロンプトには通常以下が含まれます："],"items":["**特定のタスクまたは質問：** 「この記事を要約してください」、「製品コピーを書いてください」、「このエラーをデバッグしてください」。そのインタラクションの具体的な要求","**そのリクエストのコンテキスト：** 「B2Bオーディエンス向け」、「初心者向け」、「ドキュメント向け」。これが誰と何のためかを明確にします","**このタスクの追加指示：** 「200語で」、「例を含めて」、「プロフェッショナルなトーンで」。この特定の要求のために出力を改善します","**例（必要な場合）：** 「これは良い例です：」。モデルに希望するスタイルを教えます","**このタスクの制約：** 「価格設定について言及しないでください」、「専門用語を避けてください」、「日本語で」。このリクエストのみに適用される内容を制限します"]},"userPromptExample":{"title":"ユーザープロンプトの例","content":"上記で定義したカスタマーサポートチャットボットに送信された完全なユーザープロンプトの例：","blockquote":"SAML 2.0を経由してシングルサインオン（SSO）を設定しようとしていますが、Okta統合が「署名検証に失敗しました」エラーを返し続けます。セットアップガイドに従い、メタデータファイルをアップロードしましたが、まだ機能していません。トラブルシューティングステップを案内していただけますか？"},"comparison":{"title":"システムプロンプト対ユーザープロンプト：概要","tableFormat":true,"columns":["次元","システムプロンプト","ユーザープロンプト"],"rows":[{"次元":"範囲","システムプロンプト":"セッション全体","ユーザープロンプト":"単一リクエスト"},{"次元":"設定者","システムプロンプト":"開発者/プロダクトチーム","ユーザープロンプト":"エンドユーザー"},{"次元":"頻度","システムプロンプト":"開始時に1回","ユーザープロンプト":"毎回のリクエスト"},{"次元":"定義する内容","システムプロンプト":"役割、制約、スタイル、動作","ユーザープロンプト":"このリクエストのタスク、コンテキスト、形式"},{"次元":"可視性","システムプロンプト":"通常ユーザーに非表示","ユーザープロンプト":"常にユーザーに表示"},{"次元":"変更","システムプロンプト":"まれ（アプリ更新が必要）","ユーザープロンプト":"毎回のインタラクション"},{"次元":"プロンプトエンジニアリング%","システムプロンプト":"一貫した出力品質の約70%","ユーザープロンプト":"一貫した出力品質の約30%"},{"次元":"オーバーライドリスク","システムプロンプト":"オーバーライドが難しく。永続的で開発者が制御","ユーザープロンプト":"調整が容易。リクエストごとにユーザーが制御"},{"次元":"最適用途","システムプロンプト":"役割一貫性、安全性ガードレール、出力形式","ユーザープロンプト":"タスク固有の詳細、コンテキスト、フューショット例"}]},"designingSystemPrompt":{"title":"効果的なシステムプロンプトとは？","content":["**システムプロンプトはすべてのユーザーインタラクションで一貫した動作を生み出すために、特定で層状で制約に焦点を当てる必要があります。** 最高のシステムプロンプトは詳細です。モデルが何をすべきかだけでなく、何を拒否すべきか、回答をどのようにフォーマットすべきか、どの制約が普遍的に適用されるかを指定します。","効果的なシステムプロンプトの5つの原則："],"items":["**1. 明示的な役割定義：** モデルがそのジョブを知っていると仮定しないでください。最初に「あなたは[役割]です」と言ってください。比較：「ライティングを支援してください」（曖昧）対「あなたはLinkedInキャンペーン向けのB2B SaaS製品説明に特化したテクニカルコピーライターです」（具体的）。","**2. 制約優先設計：** すべきことのリストの前に、モデルが行ってはいけないことをリストアップしてください。「統計を作成しないでください」、「誇張を使用しないでください」、「リストされていない機能を提案しないでください」。明示的な拒否は一貫した境界を生成します。","**3. フォーマット仕様：** すべてのシステムプロンプトは出力フォーマット（JSON、Markdown、箇条書き、番号付きステップ、プレーンテキスト）を定義する必要があります。フォーマット仕様がないシステムプロンプトは、すべてのユーザープロンプトに何度も指定することを強制します。","**4. スコープ境界：** 処理するリクエストの宇宙を定義してください。「APIの質問のみに答えてください」、「Pythonのアドバイスを提供してください」、「トラブルシューティングをサポートしてください」。明確なスコープはドメイン外の回答を防ぎます。","**5. 複数のモデルでテスト：** [複数のモデル（GPT-5.6、Claude Sonnet 5、Gemini 3.5 Pro）でシステムプロンプトをテストしてください。](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) 一部のモデルは制約についてより厳密です。他は異なるスタイルを解釈します。堅牢なシステムプロンプトは3つすべてで一貫して機能します。"]},"promptquorumTransparency":{"title":"なぜシステムプロンプトは非表示なのか？そしてどのようにして表示できるのか？","content":["**PromptQuorumには重大な機能があります：ローカルLLMバックエンドの非表示プロンプトを含むすべてのシステムプロンプトを表示するトグルです。** これはOllamaまたはLM Studioを使用する際に特に重要です。非表示のシステムロジックは歴史的に予期しない動作とデバッグの悪夢を引き起こしてきました。","LM StudioまたはOllamaをアプリケーションに接続する場合、ローカルモデルの非表示システム指示は以下の原因となります："],"items":["**信頼の問題：** モデルが下で従っている指示がわかりません。回答の「なぜ」について可視性がありません。","**デバッグの問題：** ローカルLLMが予期しない出力を返します。ユーザープロンプトを書き直します。まだ間違っています。システムプロンプトが見えないと、問題を診断できません。","**モデル間の不一貫性：** GPT-5.6とOllamaで同じプロンプトを実行します。異なる回答。両方のシステムプロンプトが見えないと、違いがモデル機能か隠れた指示かを判断できません。","**規制および監査リスク：** エンタープライズデプロイメントは透明性を必要とします。規制が「このAI決定を駆動した指示は何ですか？」と要求し、システムプロンプトが非表示の場合、コンプライアンスを達成できません。"]},"promptquorumToggle":{"title":"PromptQuorumシステムプロンプトトグル","content":["PromptQuorumはトグル可能なインターフェースを含みます：「システムプロンプトを表示」。有効にすると、各モデル（GPT-5.6、Claude Sonnet 5、Gemini、Ollama、LM Studio、すべて）で実行されている実際のシステムプロンプトが表示されます。これは1つのプロンプトを複数のローカルバックエンドに同時にディスパッチする場合に特に価値があります。"]},"claudeCodeStory":{"title":"システムプロンプトが非表示の場合はどうなるか？実際の例","content":["PromptQuorum自体はClaude Codeで構築されました。開発者は重大な問題に遭遇しました。Claude Codeは、コード生成、安全性の動作、品質チェックをガイドする広範な非表示システム指示を備えています。Claude Codeが機能を生成した場合、その非表示の指示が組み込まれました。しかし、同じコードが非表示のシステムロジックなしでローカルLLM（Ollama、LM Studio）で実行される必要があったとき、すべてが壊れました。非表示の「特別なソース」は移植できませんでした。","解決策：すべてのシステムプロンプトを可視化します。開発者はモデルが従っている指示を見る必要があります。推測したり、盲目的にデバッグしたりしません。"]},"practicalRecipes":{"title":"実践的なレシピ：3つのプロダクションシステムプロンプト","content":"独自の用途に適応させることができる3つのシステムプロンプトを次に示します："},"recipe1":{"title":"レシピ1：カスタマーサポートボット","blockquote":"あなたはSaaS製品のレベル1サポートスペシャリストです。あなたの役割：顧客のトラブルシューティング、アカウントと請求に関する質問への回答、複雑な問題をシニアサポートにエスカレートすることです。制約：(1)払い戻しを約束しないでください。払い戻しの承認はシニアサポートのみができます。(2)内部ドキュメントを共有しないでください。(3)わからないことを認めてください。出力形式：手順に番号付きステップを使用します。オプションに箇条書きリストを使用します。例にmarkdownコードブロックを使用します。トーン：プロフェッショナル、同情的で、解決志向。3回の失敗した解決試行後にエスカレートしてください。スコープ：アカウントアクセス、請求、機能、セットアップ、統合、トラブルシューティング。法的、税務、または会計上のアドバイスは拒否してください。"},"recipe2":{"title":"レシピ2：データアナリスト","blockquote":"あなたはシニアデータアナリストです。あなたの役割：データセットを分析し、トレンドを特定し、推奨事項を提供することです。制約：(1)常にデータソースを引用してください。(2)証拠がなければ因果関係を想定しないでください。(3)不確実性を定量化してください。信頼度が低い場合はそう言ってください。(4)データを超えて外挿しないでください。出力形式：エグゼクティブサマリー（3つの主な調査結果）+テーブル付きの詳細分析+推奨事項。信頼レベルを含めてください。トーン：明確で、正確で、データ駆動型。スコープ：提供されたデータのみを分析してください。データの捏造、不確実性のオーバーライドの推測は拒否してください。"},"recipe3":{"title":"レシピ3：コードレビュアー","blockquote":"あなたはエキスパートコードレビュアーです。あなたの役割：正確性、パフォーマンス、保守性、セキュリティについてコードを評価することです。制約：(1)強みと弱みを指摘してください。(2)一般的なアドバイスではなく、特定の改善を提案してください。(3)著者の選択を尊重してください。要求ではなく「なぜ」を説明してください。(4)過度な最適化を提案しないでください。(5)セキュリティ問題を重大として旗を立ててください。出力形式：概要+コードスニペット付きの行ごとのフィードバック。markdownコードブロックを使用してください。トーン：敬意を払い、建設的。スコープ：コードレビューのみ。スコープ外のリファクタリングまたはアーキテクチャ変更は拒否してください。"},"relatedReading":{"title":"関連する読み物","items":["[Fundamentals: What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — 柱の定義と中核概念","[Fundamentals: The 5 Building Blocks Every Prompt Needs](/prompt-engineering/5-building-blocks-every-prompt-needs) — システムプロンプトとユーザープロンプトの両方に適用される構造","[Fundamentals: Faster AI Answers: How to Prompt for Speed](/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed) — 効率のためにユーザープロンプトを最適化してください","[Techniques: Prompt Chaining](/prompt-engineering/prompt-chaining) — 各ステップが独自のプロンプトを持つマルチステップワークフロー", "[ローカルLLMでスマートホームの自動化をよりスマートに](/smart-home/ai-automations-local-llm) — 本物のOllama + Home Assistantセットアップでシステムプロンプトが利用可能なホームコントロールアクションをどのように定義するかを確認してください"]},"faq":{"title":"よくある質問","faqs":[{"q":"システムプロンプトとは何ですか？","a":"システムプロンプトは、言語モデルが会話セッション全体でどのように振る舞うかを定義する永続的な指示のセットです。開始時に1回設定され、すべてのユーザーインタラクションに適用されます。システムプロンプトはモデルの役割、制約、出力形式、通信スタイルを指定します。"},{"q":"ユーザープロンプトとは何ですか？","a":"ユーザープロンプトはリクエストごとの入力。その単一のインタラクションのために提供される特定のタスク、質問、または指示です。エンドユーザーが作成し、毎回のリクエストで変更されます。ユーザープロンプトはシステムプロンプトのルールと役割定義のコンテキスト内で評価されます。"},{"q":"システムプロンプト対ユーザープロンプトを誰が書きますか？","a":"開発者とプロダクトチームがシステムプロンプトを書いて製品に配布します。エンドユーザーは製品と相互作用する際にユーザープロンプトを書きます。PromptQuorumなどのツールでは、ユーザーは両方を見て編集できます。"},{"q":"エンドユーザーの場合、なぜシステムプロンプトを見る必要があるのですか？","a":"LM StudioやOllamaなどのローカルLLMを使用する場合、非表示のシステムプロンプトは予期しない動作とデバッグの問題を引き起こします。システムプロンプトを見ることで、信頼が可能になり、モデルの制約を理解でき、より良いユーザープロンプトを書くのに役立ちます。"},{"q":"すべてのLLMはシステムプロンプトを使用していますか？","a":"はい。すべての主要なLLM（GPT-5.6、Claude Sonnet 5、Gemini 3.5 Pro、Ollamaモデル、LM Studio）はシステムプロンプト+ユーザープロンプトパターンをサポートします。一部はデフォルトシステムプロンプトで付属しています。他は独自に定義することができます。"},{"q":"ユーザープロンプトはシステムプロンプトをオーバーライドできますか？","a":"直接的ではありません。システムプロンプトは構造的優先順位を持っています。モデルは最初にそれらを処理し、永続的な制約として扱われます。ユーザープロンプトは明示的にシステムプロンプトを無効化または上書きすることはできません。ただし、曖昧な制約を持つ設計の悪いシステムプロンプトは、ユーザープロンプトが強く矛盾する場合は無視される可能性があります。良く設計されたシステムプロンプトには、ユーザーのオーバーライドに抵抗する明示的な拒否ルールが含まれます。"},{"q":"システムプロンプトがない場合はどうなりますか？","a":"モデルはそのデフォルトのトレーニング動作にフォールバックします。GPT-5.6、Claude Sonnet 5、Gemini 3.5 Proはすべて、システムプロンプトが存在しない場合の組み込み基本動作（有用、害のない、正直）を持っています。モデルはまだユーザープロンプトに応答しますが、役割定義、出力形式の制約、またはスコープ境界なしで。結果はより一貫性がなく、より専門的ではありません。"},{"q":"システムプロンプトはEU AI Act合規性にどう影響しますか？","a":"EU AI Act（2025年2月発効）は、高リスクAIシステムに対し透明性文書化を要求します。システムプロンプトはログ記録、バージョン管理され、コンプライアンスチームがアクセスできる必要があります。"}]},"sources":{"title":"ソースおよび参考資料","items":["[OpenAI, 2024. \"Prompt Engineering Guide\"](https://platform.openai.com/docs/guides/prompt-engineering) — システムプロンプトとユーザープロンプト、技術、ベストプラクティスに関するOpenAI公式ドキュメント","[Anthropic, 2024. \"Prompt Engineering\"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — プロンプトを構造化し、Claudeモデル用のシステム指示を設計するためのAnthropicガイド","[Schulhoff et al., 2024. \"The Prompt Report: A Systematic Survey of Prompting Techniques\"](https://arxiv.org/abs/2406.06608) — 58以上の離散的なプロンプト技術をカタログしている包括的な学術調査"]},"regionalCompliance":{"title":"システムプロンプトと地域コンプライアンス","content":["METI AI ガバナンスガイドラインでは、組織は「AIシステムが動作する条件」を文書化する必要があります。これはシステムプロンプトコンテンツを含みます。日本の企業チームは、規制レビュー中にドキュメント要件を満たすため、システムプロンプトを構成管理システムに保存する必要があります。","アジア太平洋地域の規制はプライバシーと透明性を強調しています。システムプロンプトを見える状態にすることで、エンタープライズの説明責任ニーズが満たされます。","中国の生成型AI暫定措置では、生成AI サービス提供者は「コンテンツセーフティ」メカニズムを実装する必要があります。"]}},"howToSchema":{"@context":"https://schema.org","@type":"HowTo","name":"5ステップで効果的なシステムプロンプトを作成する方法","step":[{"@type":"HowToStep","position":1,"name":"ドメイン固有の言語で役割を明示的に定義する"},{"@type":"HowToStep","position":2,"name":"機能の前に制約を書く"},{"@type":"HowToStep","position":3,"name":"システムプロンプトで出力形式を指定する"},{"@type":"HowToStep","position":4,"name":"明示的な拒否ルールで範囲の境界を設定する"},{"@type":"HowToStep","position":5,"name":"少なくとも5つの異なるユーザーメッセージでテストする"}]}},
  ar: {
    theme: "Fundamentals",
    primaryTerm: "System Prompt",
    freshness_tier: 'semi_annual',
    title: "⁨System Prompt⁩ مقابل ⁨User Prompt⁩: الفرق في ⁨2026⁩",
    heroImage: '/images/system-prompt-vs-user-prompt-overview-hero-ar.webp',
    intro: "تحدد system prompts كيف يفكر نموذج الذكاء الاصطناعي ويتصرف طوال الجلسة بأكملها؛ بينما تحدد user prompts ما يفعله الآن تحديدًا. تعرّف على الفرق، ومتى تستخدم كلًا منهما، وكيف يتفاعلان، ولماذا يعرض لك PromptQuorum كليهما.",
    publishDate: "2026-03-22",
    dateModified: "2026-07-13",
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    seoTitle: '⁨System Prompt⁩ مقابل ⁨User Prompt⁩: دور كل منهما',
    metaDescription: '⁨System prompts⁩ تُحدد ⁨70%⁩ من ثبات مخرجات ⁨LLMs⁩. تعلّم الفرق بين ⁨system prompt⁩ و⁨user prompt⁩ وكيف يتفاعلان في ⁨GPT⁩ و⁨Claude⁩ و⁨Ollama⁩ مع أمثلة ⁨API⁩.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      url: 'https://www.promptquorum.com/ar/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference',
      headline: 'System Prompt مقابل User Prompt: الفرق في 2026',
      description: 'تحدد system prompts كيف يفكر نموذج الذكاء الاصطناعي ويتصرف؛ بينما تحدد user prompts ما يفعله الآن. تعرّف على الفرق وكيف يتفاعلان.',
      datePublished: '2026-03-22',
      dateModified: '2026-07-13',
      inLanguage: 'ar',
      keywords: ['system prompt', 'user prompt', 'prompt engineering', 'سلوك LLM', 'GPT-5.6', 'Claude', 'بنية الـ prompt', 'PromptQuorum'],
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      mentions: [
        { '@type': 'Thing', name: 'PromptQuorum' },
        { '@type': 'Thing', name: 'OpenAI' },
        { '@type': 'Thing', name: 'GPT-5.6' },
        { '@type': 'Thing', name: 'Anthropic' },
        { '@type': 'Thing', name: 'Claude Sonnet 5' },
        { '@type': 'Thing', name: 'Google DeepMind' },
        { '@type': 'Thing', name: 'Gemini 3.5 Pro' },
        { '@type': 'Thing', name: 'Ollama' },
      ],
      proficiencyLevel: 'مبتدئ',
      about: [
        { '@type': 'Thing', name: 'System Prompt' },
        { '@type': 'Thing', name: 'User Prompt' },
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'LLM API' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
      },
    },
    itemListSchema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "System Prompt مقابل User Prompt: المواضيع الأساسية",
      "description": "المفاهيم الأساسية التي يغطيها هذا المقال حول system prompts و user prompts",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ما هو System Prompt؟", "description": "مجموعة من التعليمات الدائمة التي تحدد كيفية تصرف نموذج اللغة طوال جلسة المحادثة بأكملها" },
        { "@type": "ListItem", "position": 2, "name": "ما هو User Prompt؟", "description": "المهمة أو السؤال المحدد الذي يقدمه المستخدم النهائي لتفاعل واحد" },
        { "@type": "ListItem", "position": 3, "name": "كيف يتفاعل System وUser Prompts", "description": "كيف يعملان معًا في مكدس API وتدفق المحادثة" },
        { "@type": "ListItem", "position": 4, "name": "لماذا تهم الشفافية", "description": "كيف تمنع system prompts المخفية المستخدمين والمطورين من تصحيح الأخطاء وتحسين المخرجات" }
      ],
    },
    sections: {
      howToStart: {
        title: "كيفية كتابة System Prompt فعّال في 5 خطوات",
        numberedItems: [
        "**حدد الدور بوضوح:** ابدأ ببيان دور واضح وخاص بالمجال.",
        "**اكتب القيود قبل القدرات:** حدد أولاً ما لا يجب على النموذج فعله.",
        "**حدد تنسيق المخرجات في System Prompt:** حدد بنية المخرجات الافتراضية.",
        "**حدد حدود النطاق بقواعد رفض صريحة.**",
        "**اختبر بما لا يقل عن 5 رسائل مستخدم مختلفة:** جرّب الحالات الحدية قبل النشر."
        ],
      },
      
      definition: {
        title: 'ما الفرق بين system prompt وuser prompt؟',
        content: [
          '**system prompt هو مجموعة تعليمات دائمة تحدد دور النموذج وقيوده وسلوكه الافتراضي قبل أن يقول المستخدم أي شيء.** يحدد هوية النموذج، وما يمكنه فعله، وما هو محظور — ويظل سارياً طوال الجلسة بأكملها.',
          '**user prompt هو المدخل الخاص بكل طلب — المهمة أو السؤال المحدد لتلك التفاعل.** تعمل user prompts ضمن الحدود التي يرسيها system prompt.',
          'يهم هذا التمييز لأن system prompts تحدد الاتساق عبر مئات أو آلاف المحادثات، في حين تتحكم user prompts في نتيجة تفاعل واحد فقط.',
        ],
      },
      tldr: {
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'يضع system prompt قواعد السلوك الدائم — الدور، والقيود، وتنسيق المخرجات — للجلسة بأكملها',
          'user prompt هو المدخل الخاص بكل طلب — المهمة المحددة لتلك التفاعل',
          'تتحكم system prompts في ~70% من اتساق السلوك؛ وتتحكم user prompts في ~30%',
          'يكتب المطورون system prompts؛ بينما يكتب المستخدمون النهائيون user prompts في معظم منتجات الذكاء الاصطناعي',
          'يجعل system prompt الجيد حتى user prompts الضعيفة تعمل بشكل أفضل',
        ],
      },
      systemPrompt: {
        title: 'ما هو system prompt؟',
        content: [
          '**system prompt هو طبقة التعليمات ذات الأولوية القصوى التي يتلقاها نموذج الذكاء الاصطناعي — تُعالَج قبل أي مدخل من المستخدم وتستمر طوال الجلسة.** في APIs الخاصة بـ OpenAI وClaude وGemini، يُرسَل system prompt كأول رسالة بـ role: "system" ويضع السياق التشغيلي لكل ما يليه.',
          'تعدّ system prompts أقوى أداة هندسية متاحة للتحكم في سلوك الذكاء الاصطناعي. تُستخدم لـ: تحديد دور النموذج وشخصيته ("أنت مساعد دعم تقني متخصص في...")، وضع حدود السلوك ("لا تشارك معلومات الأسعار أبداً")، تحديد تنسيق المخرجات ("أجب دائماً بـ JSON منظم")، وإدارة السلوك في الحالات الحدية.',
        ],
        items: [
          '**الدور والشخصية:** يحدد هوية النموذج — خبرته وأسلوبه ومنظوره',
          '**قيود السلوك:** يضع حدوداً صريحة لما يمكن للنموذج فعله وما لا يمكنه',
          '**تنسيق المخرجات:** يحدد كيفية هيكلة الردود',
          '**تعليمات النطاق:** يقيّد النموذج بمجال أو مجموعة مواضيع محددة',
          '**سلوك الحالات الحدية:** يحدد كيفية التعامل مع المدخلات الغامضة أو غير الملائمة أو خارج النطاق',
        ],
      },
      userPrompt: {
        title: 'ما هو user prompt؟',
        content: [
          '**user prompt هو المدخل الخاص بكل طلب — المهمة أو السؤال المحدد الذي يرسله المستخدم إلى النموذج.** يعمل ضمن الحدود التي يرسيها system prompt. إذا كان system prompt يقول "أجب فقط عن مواضيع برمجة Python"، فسيتلقى user prompt حول الطبخ رداً رفضاً مهذباً.',
          'تُعدّ user prompts المكان الذي يطبق فيه المستخدمون (والمطورون الذين يبنون pipelines آلية) تقنيات prompt engineering: تسلسل الأفكار، وfew-shot prompting، والدور والسياق الخاصين بالمهمة، وقيود التنسيق.',
        ],
      },
      comparison: {
        title: 'مقارنة: System Prompt مقابل User Prompt',
        columns: ['البُعد', 'System Prompt', 'User Prompt'],
        rows: [
          { 'البُعد': 'وقت التطبيق', 'System Prompt': 'الجلسة بأكملها', 'User Prompt': 'هذا الطلب فقط' },
          { 'البُعد': 'من يكتبه', 'System Prompt': 'المطورون / فرق المنتج', 'User Prompt': 'المستخدمون النهائيون أو pipelines آلية' },
          { 'البُعد': 'الرؤية', 'System Prompt': 'مخفي عادةً عن المستخدمين النهائيين', 'User Prompt': 'مرئي دائماً للمستخدم' },
          { 'البُعد': 'الأولوية', 'System Prompt': 'أعلى — يضع حدوداً لا يمكن لـ user prompts تجاوزها', 'User Prompt': 'أدنى — يعمل ضمن حدود system prompt' },
          { 'البُعد': 'تأثير الاتساق', 'System Prompt': '~70% من السلوك المتسق', 'User Prompt': '~30% من السلوك المتسق' },
          { 'البُعد': 'حالات الاستخدام النموذجية', 'System Prompt': 'تعريف الدور، القيود، أسلوب المخرجات', 'User Prompt': 'مهام محددة، أسئلة، إجراءات' },
        ],
      },
      systemPromptBestPractices: {
        title: 'أفضل الممارسات لـ system prompts',
        items: [
          '**كن صريحاً بشأن الدور:** "أنت مساعد خدمة عملاء لشركة Acme Corp" أفضل من "أنت مفيد"',
          '**حدد ما يجب عدم فعله:** تمنع القيود السلبية السلوكيات الأكثر تكلفة ("لا تشارك بيانات المستخدمين مطلقاً مع أطراف ثالثة")',
          '**حدد تنسيق المخرجات:** "أجب دائماً بـ JSON" أو "استخدم Markdown مع عناوين H2" يضع توقعات التحليل',
          '**أدرج سلوك الحالات الحدية:** "إذا سُئلت عن المنافسين، أعِد التوجيه بلطف نحو مميزاتنا"',
          '**أبقِ system prompts موجزة:** كل token له تكلفة في كل استدعاء API — system prompts المكونة من 500 كلمة أكثر تكلفة من تلك المكونة من 100 كلمة على نطاق واسع',
        ],
      },
      userPromptBestPractices: {
        title: 'أفضل الممارسات لـ user prompts',
        items: [
          '**طبّق لبنات البناء الخمس:** الدور (إذا لم يحدده system prompt)، والمهمة، والمدخل، والقيود، وتنسيق المخرجات',
          '**كن محدداً بشأن المهمة:** "لخّص في 3 نقاط، كل نقطة أقل من 20 كلمة" أفضل من "لخّص"',
          '**استخدم تقنيات prompting عند الحاجة:** تسلسل الأفكار للاستدلال، وfew-shot لدقة التنسيق، وقيود سلبية للتحكم في المخرجات',
          '**لا تكرر system prompt:** النموذج يمتلكه بالفعل — تكراره يُهدر tokens',
        ],
      },
      apiImplementation: {
        title: 'تنفيذ API: كيف يتعامل مزودو الخدمة مع system prompts',
        content: [
          'يتعامل مزودو API الثلاثة الرئيسيون مع system prompts بشكل مختلف قليلاً:',
        ],
        items: [
          '**OpenAI (GPT-5.6):** يُرسَل system prompt كأول رسالة بـ role: "system" في مصفوفة messages. يدعم أيضاً معامل system منفصل في بعض الإعدادات.',
          '**Anthropic (Claude):** يُرسَل system prompt كمعامل system منفصل خارج مصفوفة messages، وليس كرسالة. هذا يجعل من الأصعب على user prompts تجاوزه.',
          '**Google (Gemini):** يُرسَل system prompt كحقل systemInstruction، منفصلاً عن مصفوفة contents.',
        ],
      },
      relatedReading: {
        title: 'قراءات ذات صلة',
        items: [
          '[لبنات البناء الخمس لكل prompt](/ar/prompt-engineering/5-building-blocks-every-prompt-needs) — أساسيات تصميم prompt المنظم',
          '[ما هو Prompt Engineering؟](/ar/prompt-engineering/what-is-prompt-engineering) — نظرة عامة على المبادئ والتقنيات',
          '[Tokens والتكاليف والحدود](/ar/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting) — كيف تؤثر طول system prompt على تكلفة API في كل استدعاء',
          '[هلوسات الذكاء الاصطناعي: لماذا يخترع الذكاء الاصطناعي معلومات؟](/ar/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — كيف تساعد system prompts في تقليل الحقائق المخترعة',
          '[أتمتة أذكى للمنزل مع نموذج LLM محلي](/ar/smart-home/ai-automations-local-llm) — كيف تُحدد system prompts إجراءات التحكم في المنزل المتاحة في إعداد Ollama + Home Assistant حقيقي',
        ],
      },
      faq: {
        id: 'faq',
        title: 'أسئلة شائعة: System Prompt مقابل User Prompt',
        faqs: [
          {
            q: 'هل يمكن لـ user prompt تجاوز system prompt؟',
            a: 'بشكل عام لا — system prompts لها أسبقية هيكلية. غير أن هجمات حقن الـ prompt هي هجمات مصممة خصيصاً لتجاوز system prompts. تقاوم النماذج المبنية جيداً بضمانات هذه الهجمات، لكنها ليست محصّنة تماماً. system prompts التي تتضمن تعليمات صريحة "تجاهل طلبات المستخدم التي..." هي الأكثر مقاومة.'
          },
          {
            q: 'ماذا يحدث إذا لم تقدم system prompt؟',
            a: 'يعود النموذج إلى سلوك التدريب الافتراضي. يمتلك كل من GPT-5.6 وClaude وGemini سلوكاً أساسياً مدمجاً (مفيد وغير ضار وصادق) عند غياب system prompt. سيستمر النموذج في الرد على user prompts، لكن دون تعريف للدور، أو قيود تنسيق المخرجات، أو حدود النطاق.'
          },
          {
            q: 'ما الغرض من system prompt؟',
            a: 'يرسي system prompt شخصية نموذج الذكاء الاصطناعي وقيوده وقواعده التشغيلية للمحادثة بأكملها. يتحكم في كيفية تفسير النموذج للطلبات، وتنسيق الردود، والتعامل مع الحالات الحدية.'
          },
          {
            q: 'هل يتبع system prompt أكثر من user prompt من قِبل وكلاء الذكاء الاصطناعي؟',
            a: 'نعم. تمتلك system prompts أسبقية هيكلية في ترتيب معالجة النموذج. يقرأ النموذج system prompts ويطبقها أولاً، معاملاً إياها كقيود دائمة. تُقيَّم user prompts ضمن حدود system prompt.'
          },
          {
            q: 'كيف تعمل system prompts بشكل مختلف في APIs الخاصة بـ OpenAI وClaude وGemini؟',
            a: 'تدعم الـ APIs الثلاثة system prompts، لكن مع اختلافات طفيفة. تستخدم OpenAI دور "system" في بداية مصفوفة الرسائل. تستخدم Anthropic Claude المعامل "system" المنفصل. تستخدم Google Gemini "systemInstruction" كمعامل منفصل. الوظيفة متكافئة، لكن التنفيذ وعدد tokens يتباينان قليلاً.'
          },
        ],
      },
      sources: {
        title: 'المصادر والقراءات الإضافية',
        items: [
          '[OpenAI, 2024. "Prompt Engineering Guide"](https://platform.openai.com/docs/guides/prompt-engineering) — وثائق OpenAI الرسمية حول system وuser prompts',
          '[Anthropic, 2024. "Prompt Engineering"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — دليل Anthropic لهيكلة prompts وتصميم تعليمات النظام لنماذج Claude',
          '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — مسح أكاديمي شامل يرصد 58+ تقنية prompting منفصلة',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    theme: 'Fundamentals',
    title: '시스템 프롬프트 vs 사용자 프롬프트: 2026년 기준 차이점',
    heroImage: '/images/system-prompt-vs-user-prompt-overview-hero-ko.webp',
    intro: '시스템 프롬프트는 AI 모델이 세션 전반에 걸쳐 어떻게 사고하고 행동할지를 정의하며, 사용자 프롬프트는 지금 이 순간 무엇을 해야 하는지를 지정합니다. 두 가지의 차이, 각각의 활용 시점, 상호작용 방식, 그리고 PromptQuorum이 두 프롬프트를 모두 표시하는 이유를 알아보십시오.',
    publishDate: '2026-03-22',
    dateModified: '2026-07-13',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    primaryTerm: '시스템 프롬프트',
    seoTitle: '시스템 vs 사용자 프롬프트 2026: 각각이 제어하는 것',
    metaDescription: '시스템 프롬프트 vs 사용자 프롬프트: 하나는 세션 전체의 AI 동작을 제어하고, 하나는 각 턴을 이끕니다. API 예제 및 디버그 패턴 포함.',
    leadAnswerBlock: '시스템 프롬프트는 전체 대화 세션에 걸쳐 AI의 역할, 제약, 행동 방식을 정의하며 한 번 설정됩니다. 사용자 프롬프트는 각 상호작용에서 특정 작업을 지정하며 매 요청마다 변경됩니다.',
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '시스템 프롬프트 vs 사용자 프롬프트: 핵심 주제',
      description: '시스템 프롬프트와 사용자 프롬프트에 관해 이 글에서 다루는 핵심 개념',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '시스템 프롬프트란 무엇인가?', description: '언어 모델이 전체 대화 세션 동안 어떻게 행동할지를 정의하는 지속적인 지침 모음' },
        { '@type': 'ListItem', position: 2, name: '사용자 프롬프트란 무엇인가?', description: '최종 사용자가 단일 상호작용을 위해 제공하는 구체적인 작업 또는 질문' },
        { '@type': 'ListItem', position: 3, name: '시스템 프롬프트와 사용자 프롬프트의 상호작용 방식', description: 'API 스택과 대화 흐름에서 두 가지가 함께 작동하는 방식' },
        { '@type': 'ListItem', position: 4, name: '투명성이 중요한 이유', description: '숨겨진 시스템 프롬프트가 사용자와 개발자의 디버깅 및 출력 최적화를 방해하는 방식' }
      ],
    },
    sections: {
      definition: {
        title: '시스템 프롬프트 vs 사용자 프롬프트: 핵심 차이',
        content: [
          '**시스템 프롬프트는 전체 세션에 걸쳐 AI가 어떻게 사고할지를 정의하고, 사용자 프롬프트는 특정 요청에 대해 무엇을 할지를 정의합니다.** 한 문장으로 정리하면: 시스템 프롬프트는 AI의 영구적인 직무 기술서이고, 사용자 프롬프트는 그 직무 내의 개별 업무입니다.',
          '모든 LLM 대화에는 두 가지 모두 존재합니다. 시스템 프롬프트(최종 사용자에게는 보통 보이지 않음)는 세션 시작 시 한 번 실행되어 모델의 페르소나, 제약 조건, 역할을 설정합니다. 사용자 프롬프트는 요청별로 실행되어 작업 또는 질문을 지정합니다. 두 가지 모두 텍스트이며, 프롬프트 엔지니어링 원칙을 따르고, 신뢰할 수 있는 출력을 위해 신중한 설계가 필요합니다.',
        ],
      },

      tldr: {
        title: '핵심 요점',
        isTldr: true,
        items: [
          '시스템 프롬프트는 전체 세션에 걸쳐 모델의 역할, 제약 조건, 행동 방식을 정의하며, 한 번 설정되어 모든 요청에 적용됩니다',
          '사용자 프롬프트는 각 상호작용에서 특정 작업을 정의하며, 사용자가 제공하고 매 요청마다 변경됩니다',
          '시스템 프롬프트는 GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro에 대한 PromptQuorum 테스트 기준으로 행동 일관성의 약 70%를 차지하며, 사용자 프롬프트는 특정 출력 결과를 형성합니다',
          'ChatGPT 및 Claude와 같은 앱의 보이지 않는 시스템 프롬프트에는 숨겨진 로직이 포함되어 있습니다 — [PromptQuorum이 이를 모두 표시해 드립니다](/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference#promptquorum)',
          'Ollama, LM Studio를 사용하는 로컬 LLM의 숨겨진 시스템 프롬프트는 디버깅 문제를 일으킵니다 — 투명성으로 해결됩니다',
          '잘못된 시스템 프롬프트는 사용자 프롬프트에 더 많은 부담을 주지만, 훌륭한 시스템 프롬프트는 모든 사용자 프롬프트를 더 잘 작동하게 만듭니다',
        ],
      },

      whereTheyLive: {
        title: 'API 스택에서 시스템 프롬프트와 사용자 프롬프트의 위치',
        content: [
          '**시스템 프롬프트는 애플리케이션 레이어에, 사용자 프롬프트는 상호작용 레이어에 존재합니다.** OpenAI API를 통해 GPT-5.6를 호출할 때, 엔드포인트는 두 가지 별도 입력을 받습니다: `system`(영구 지침)과 `messages`(요청별 사용자 입력). 이는 Anthropic API를 통한 Claude Sonnet 5, Google API를 통한 Gemini 3.5 Pro, 그리고 [Ollama](/prompt-engineering/context-windows-explained-why-ai-forgets) 또는 LM Studio를 통해 실행하는 로컬 LLM에서도 동일합니다.',
          '모든 모델은 시스템 + 사용자 프롬프트 패턴을 지원합니다:',
        ],
        items: [
          '**모델 레이어:** 기본 LLM (GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, LLaMA 3.1, Mistral Large) — 시스템 프롬프트와 사용자 프롬프트를 모두 수용합니다',
          '**API 레이어:** 개발자가 사용하는 인터페이스 — OpenAI API, Anthropic API, Google API, Ollama REST 엔드포인트, LM Studio — 모두 시스템과 사용자를 별도 필드로 노출합니다',
          '**애플리케이션 레이어:** API 위에 구축된 제품(ChatGPT, Claude.ai, Gemini, PromptQuorum, 사용자 정의 앱) — 개발자가 어떤 시스템 프롬프트를 사용할지 결정합니다',
          '**사용자 상호작용 레이어:** 최종 사용자가 보는 것 — 채팅 입력, 작업 사양 — 이것이 사용자 프롬프트가 됩니다',
        ],
      },

      whatIsSystemPrompt: {
        title: '시스템 프롬프트란 무엇입니까?',
        content: [
          '**시스템 프롬프트는 전체 대화 세션 동안 언어 모델의 동작 방식을 정의하는 영구적인 지침 집합입니다.** 사용자 입력 전에 세션 시작 시 모델에게 한 번 전송됩니다. 시스템 프롬프트는 모델의 역할, 통신 스타일, 제약 조건, 기본 동작을 지정합니다. 이후의 모든 사용자 프롬프트는 해당 시스템 프롬프트의 컨텍스트 내에서 처리됩니다.',
          '잘 설계된 시스템 프롬프트에는 일반적으로 다음이 포함됩니다:',
        ],
        items: [
          '**역할 정의:** "당신은 Python 전문가입니다," "당신은 기술 문서 작성자입니다," "당신은 재무 고문입니다" — 모델의 페르소나와 전문성을 확립합니다',
          '**제약 조건:** "의료 조언을 제공하지 마십시오," "2024년 이후 콘텐츠를 참조하지 마십시오," "유해한 코드 요청을 거부하십시오" — 동작에 대한 명확한 한계를 설정합니다',
          '**출력 형식:** "JSON으로 응답하십시오," "Markdown을 사용하십시오," "번호가 매겨진 단계로 제공하십시오" — 답변의 구조 방식을 정의합니다',
          '**통신 스타일:** "간결하고 직접적으로 하십시오," "초보자를 위한 비유를 사용하십시오," "전문적인 톤을 유지하십시오" — 목소리와 톤을 형성합니다',
          '**범위 경계:** "Python에 대한 질문에만 답하십시오," "정치적 질문을 무시하십시오," "기술 지원만 처리하십시오" — 모델이 수행할 것과 수행하지 않을 것을 정의합니다',
          '**상호작용 규칙:** "명확화 질문을 하십시오," "항상 출처를 인용하십시오," "불확실성을 명시적으로 인정하십시오" — 모델이 엣지 케이스를 처리하는 방식을 규정합니다',
        ],
      },

      systemPromptExample: {
        title: '시스템 프롬프트 예시',
        content: '다음은 고객 지원 챗봇을 위한 프로덕션 수준의 시스템 프롬프트입니다:',
        blockquote: '당신은 SaaS 제품의 고객 지원 전문가입니다. 귀하의 역할은 고객이 기술 문제를 해결하고, 기능 질문에 답하며, 청구 문의를 처리하는 것을 돕는 것입니다. 제약 조건: (1) 환불을 약속하지 마십시오 — 환불 승인은 지원 직원만 가능합니다. (2) 내부 문서를 공유하지 마십시오. (3) 미래 기능에 대해 추측하지 마십시오. (4) 3번의 교환 후에도 문제가 해결되지 않으면 항상 담당자에게 에스컬레이션을 제안하십시오. 스타일: 공감적이고, 명확하며, 솔루션 중심으로 유지하십시오. 형식: 절차에는 번호가 매겨진 단계, 옵션에는 글머리 목록, 기술 예시에는 markdown 코드 블록을 사용하십시오. 범위: API, 설정, 문제 해결, 기능, 청구에 관한 질문에 답하십시오. 법적 조언, 무료 업그레이드, 제품 범위 외 지원 요청은 거부하십시오.',
      },

      whatIsUserPrompt: {
        title: '사용자 프롬프트란 무엇입니까?',
        content: [
          '**사용자 프롬프트는 요청별 입력 — 최종 사용자가 해당 단일 상호작용을 위해 제공하는 특정 작업, 질문, 또는 지침입니다.** 시스템 프롬프트 이후 모델에 전송되며 시스템 프롬프트의 제약 조건 및 역할 정의의 컨텍스트 내에서 평가됩니다. 단일 대화에는 여러 사용자 프롬프트가 있을 수 있으며, 시스템 프롬프트는 동일하게 유지됩니다.',
          '사용자 프롬프트에는 일반적으로 다음이 포함됩니다:',
        ],
        items: [
          '**특정 작업 또는 질문:** "이 기사를 요약하십시오," "제품 카피를 작성하십시오," "이 오류를 디버그하십시오" — 해당 상호작용을 위한 구체적인 요청',
          '**해당 요청에 대한 컨텍스트:** "B2B 오디언스를 위해," "초보자를 위해," "문서를 위해" — 이것이 누구를 위한 것인지 명확히 합니다',
          '**이 작업을 위한 추가 지침:** "200단어로," "예시와 함께," "전문적인 톤으로" — 이 특정 요청에 대한 출력을 세부화합니다',
          '**예시(필요한 경우):** "다음은 좋은 예입니다:" — 모델에게 원하는 스타일을 가르칩니다',
          '**이 작업을 위한 제약 조건:** "가격을 언급하지 마십시오," "전문 용어를 피하십시오," "한국어로" — 이 요청에만 적용되는 제한을 설정합니다',
        ],
      },

      userPromptExample: {
        title: '사용자 프롬프트 예시',
        content: '다음은 위에서 정의된 고객 지원 챗봇에 전송된 완전한 사용자 프롬프트입니다:',
        blockquote: 'SAML 2.0을 통한 단일 로그인(SSO) 설정을 시도하고 있는데, Okta 통합에서 "서명 확인 실패" 오류가 계속 발생합니다. 설정 가이드를 따르고 메타데이터 파일을 업로드했지만 여전히 작동하지 않습니다. 문제 해결 단계를 안내해 주시겠습니까?',
      },

      comparison: {
        title: '시스템 프롬프트 vs 사용자 프롬프트 한눈에 보기',
        tableFormat: true,
        columns: ['차원', '시스템 프롬프트', '사용자 프롬프트'],
        rows: [
          { '차원': '범위', '시스템 프롬프트': '전체 세션', '사용자 프롬프트': '단일 요청' },
          { '차원': '설정 주체', '시스템 프롬프트': '개발자/제품 팀', '사용자 프롬프트': '최종 사용자' },
          { '차원': '빈도', '시스템 프롬프트': '시작 시 한 번', '사용자 프롬프트': '매 요청마다' },
          { '차원': '정의 내용', '시스템 프롬프트': '역할, 제약 조건, 스타일, 행동', '사용자 프롬프트': '이 요청의 작업, 컨텍스트, 형식' },
          { '차원': '가시성', '시스템 프롬프트': '보통 사용자에게 숨겨짐', '사용자 프롬프트': '항상 사용자에게 보임' },
          { '차원': '변경', '시스템 프롬프트': '드물게(앱 업데이트 필요)', '사용자 프롬프트': '매 상호작용마다' },
          { '차원': '프롬프트 엔지니어링 비율', '시스템 프롬프트': '일관된 출력 품질의 약 70%', '사용자 프롬프트': '일관된 출력 품질의 약 30%' },
          { '차원': '재정의 위험', '시스템 프롬프트': '재정의 어려움 — 영구적, 개발자 제어', '사용자 프롬프트': '쉽게 조정 가능 — 요청별 사용자 제어' },
          { '차원': '최적 용도', '시스템 프롬프트': '역할 일관성, 안전 가드레일, 출력 형식', '사용자 프롬프트': '작업별 세부 정보, 컨텍스트, few-shot 예시' },
        ],
      },

      designingSystemPrompt: {
        title: '효과적인 시스템 프롬프트란 무엇입니까?',
        content: [
          '**시스템 프롬프트는 모든 사용자 상호작용에 걸쳐 일관된 동작을 생성하기 위해 구체적이고 계층적이며 제약 중심적이어야 합니다.** 최고의 시스템 프롬프트는 상세합니다 — 모델이 해야 할 것뿐만 아니라 거부해야 할 것, 답변 형식, 보편적으로 적용되는 제약 조건까지 지정합니다.',
          '효과적인 시스템 프롬프트를 위한 다섯 가지 원칙:',
        ],
        items: [
          '**명시적 역할 정의:** 모델이 자신의 직무를 알 것이라고 가정하지 마십시오. 시작 시 "당신은 [역할]입니다"라고 명시하십시오. 비교: "글쓰기를 도와주십시오"(모호함) vs. "당신은 LinkedIn 캠페인용 B2B SaaS 제품 설명을 전문으로 하는 기술 카피라이터입니다"(구체적).',
          '**제약 우선 설계:** 모델이 해야 할 것보다 해서는 안 되는 것을 먼저 나열하십시오. "통계를 만들지 마십시오," "과장법을 사용하지 마십시오," "미등록 기능을 제안하지 마십시오" — 명시적 거부는 일관된 경계를 만듭니다.',
          '**형식 명세:** 모든 시스템 프롬프트는 출력 형식을 정의해야 합니다: JSON, Markdown, 글머리 목록, 번호가 매겨진 단계, 또는 일반 텍스트. 형식 명세 없는 시스템 프롬프트는 모든 사용자 프롬프트에서 반복적으로 형식을 지정하도록 강제합니다.',
          '**범위 경계:** 처리할 요청의 범위를 정의하십시오. "API 질문에만 답하십시오," "Python 조언을 제공하십시오," "문제 해결을 지원하십시오" — 명확한 범위는 도메인 외 답변을 방지합니다.',
          '**여러 모델에 걸친 테스트:** 배포 전에 [GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro 등 여러 모델](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model)에서 시스템 프롬프트를 테스트하십시오. 일부 모델은 제약 조건에 더 엄격하고, 다른 모델은 스타일을 다르게 해석합니다. 강력한 시스템 프롬프트는 세 가지 모두에서 일관되게 작동합니다.',
        ],
      },

      promptquorumTransparency: {
        title: '시스템 프롬프트가 숨겨져 있는 이유와 확인 방법',
        content: [
          '**PromptQuorum에는 중요한 기능이 있습니다: 로컬 LLM 백엔드의 숨겨진 것을 포함하여 모든 시스템 프롬프트를 표시하는 토글.** 이는 특히 Ollama 또는 LM Studio를 사용할 때 중요한데, 보이지 않는 시스템 로직이 예기치 않은 동작과 디버깅 악몽을 역사적으로 야기해 왔습니다.',
          'LM Studio 또는 Ollama를 애플리케이션에 연결하면, 로컬 모델의 숨겨진 시스템 지침으로 인해 다음과 같은 문제가 발생합니다:',
        ],
        items: [
          '**신뢰 문제:** 모델이 그 아래에서 어떤 지침을 따르고 있는지 알 수 없습니다. 응답 뒤의 "이유"를 볼 수 없습니다.',
          '**디버깅 문제:** 로컬 LLM이 예기치 않은 출력을 반환합니다. 사용자 프롬프트를 다시 작성합니다. 여전히 잘못되었습니다. 시스템 프롬프트를 보지 않고는 문제를 진단할 수 없습니다.',
          '**모델 간 불일치:** GPT-5.6와 Ollama에서 동일한 프롬프트를 실행합니다. 다른 답변이 나옵니다. 두 시스템 프롬프트를 모두 보지 않으면 차이가 모델 능력 때문인지 숨겨진 지침 때문인지 알 수 없습니다.',
          '**규정 준수 및 감사 위험:** 기업 배포에는 투명성이 필요합니다. 규정이 "이 AI 결정을 이끈 지침은 무엇입니까?"를 요구하는데 시스템 프롬프트가 숨겨져 있다면, 준수할 수 없습니다.',
        ],
      },

      promptquorumToggle: {
        title: 'PromptQuorum 시스템 프롬프트 토글',
        content: [
          'PromptQuorum에는 토글 가능한 인터페이스가 포함되어 있습니다: "시스템 프롬프트 표시." 활성화하면 각 모델에서 실행 중인 실제 시스템 프롬프트를 볼 수 있습니다 — GPT-5.6, Claude Sonnet 5, Gemini, Ollama, LM Studio, 모두 포함됩니다. 이는 하나의 프롬프트를 여러 로컬 백엔드에 동시에 디스패치할 때 특히 가치 있습니다.',
        ],
      },

      claudeCodeStory: {
        title: '시스템 프롬프트가 숨겨지면 어떻게 됩니까? 실제 사례',
        content: [
          'PromptQuorum 자체가 Claude Code로 구축되었으며, 개발자들은 심각한 문제에 직면했습니다. Claude Code에는 코드 생성, 안전 동작, 품질 검사를 안내하는 광범위한 숨겨진 시스템 지침이 있습니다. Claude Code가 기능을 생성했을 때, 그 숨겨진 지침이 내포되어 있었습니다. 하지만 동일한 코드가 숨겨진 시스템 로직 없이 로컬 LLM(Ollama, LM Studio)에서 실행되어야 할 때 모든 것이 작동하지 않았습니다. 숨겨진 "특별 소스"는 이식 가능하지 않았습니다.',
          '해결책: 모든 시스템 프롬프트를 가시적으로 만드는 것이었습니다. 개발자는 모델이 어떤 지침을 따르고 있는지 볼 수 있어야 합니다 — 추측하거나 무작정 디버그하는 것이 아니라.',
        ],
      },

      regionalCompliance: {
        title: '시스템 프롬프트와 지역별 규정 준수',
        content: [
          '**EU / AI 법 + GDPR:** EU AI 법(2025년 2월 발효)에는 고위험 AI 시스템에 대한 투명성 요건이 포함됩니다. EU에서의 기업 배포의 경우, 시스템 프롬프트는 13조(투명성 의무)에 따라 요구되는 AI 시스템의 "지침" 문서의 일부입니다. 조직은 자연인에게 영향을 미친 모든 AI 결정에 사용된 시스템 프롬프트를 제출할 수 있어야 합니다. 숨겨진 시스템 프롬프트는 직접적인 규정 준수 위험을 만듭니다: 숨겨진 지침으로 인해 모델이 요청을 거부하거나 잘못된 출력을 제공하는데 조직이 해당 지침이 무엇인지 공개할 수 없다면, AI 법 86조(설명 권리)를 충족할 수 없습니다. EU 기업 배포의 경우, 시스템 프롬프트는 버전 관리, 액세스 제어 및 감사 추적과 함께 로깅, 버전 관리, 준수 팀에서 액세스 가능해야 합니다. 독일 BSI AI 보안 지침은 시스템 프롬프트를 버전 관리, 액세스 제어 및 감사 추적이 있는 구성 아티팩트로 취급할 것을 권장합니다.',
          '**일본(METI):** METI AI 거버넌스 지침은 조직이 "AI 시스템이 운영되는 조건" — 프로덕션 AI 배포의 경우 시스템 프롬프트 콘텐츠 포함 — 을 문서화할 것을 요구합니다. 일본 기업 팀의 경우, 규제 검토 중 문서화 요건을 충족하기 위해 시스템 프롬프트를 변경 로그가 있는 구성 관리 시스템에 저장해야 합니다.',
          '**중국(CAC):** 중국의 생성형 AI 잠정 조치(2023)에 따라, 생성형 AI 서비스 제공업체는 "콘텐츠 안전" 메커니즘을 구현해야 합니다. 중국 배포의 경우, 시스템 프롬프트는 콘텐츠 제약 조건 구현을 위한 기본 메커니즘입니다. AI 서비스에 대한 CAC 등록은 안전 규정 준수를 보여주는 샘플 시스템 프롬프트 제출을 요구합니다. 시스템 프롬프트는 버전 관리되고 규제 제출에 사용 가능하도록 유지하십시오.',
        ],
      },

      practicalRecipes: {
        title: '실용적인 레시피: 세 가지 프로덕션 시스템 프롬프트',
        content: '다음은 귀하의 용도에 맞게 조정할 수 있는 세 가지 시스템 프롬프트입니다:',
      },

      recipe1: {
        title: '레시피 1: 고객 지원 봇',
        blockquote: '당신은 SaaS 제품의 1레벨 지원 전문가입니다. 귀하의 역할: 고객이 문제를 해결하고, 계정 및 청구 질문에 답하며, 복잡한 문제를 시니어 지원팀에 에스컬레이션하는 것을 돕습니다. 제약 조건: (1) 환불을 절대 약속하지 마십시오 — 시니어 지원팀만 환불을 승인합니다. (2) 내부 문서를 절대 공유하지 마십시오. (3) 모를 때는 인정하십시오. 출력 형식: 절차에는 번호가 매겨진 단계, 옵션에는 글머리 목록, 예시에는 markdown 코드 블록. 톤: 전문적이고, 공감적이며, 솔루션 중심. 3번의 해결 시도 실패 후 에스컬레이션하십시오. 범위: 계정 액세스, 청구, 기능, 설정, 통합, 문제 해결. 거부: 법적, 세무, 또는 회계 조언.',
      },

      recipe2: {
        title: '레시피 2: 데이터 분석가',
        blockquote: '당신은 시니어 데이터 분석가입니다. 귀하의 역할: 데이터셋을 분석하고, 트렌드를 파악하며, 권장 사항을 제공합니다. 제약 조건: (1) 항상 데이터 출처를 인용하십시오. (2) 증거 없이 인과 관계를 가정하지 마십시오. (3) 불확실성을 수치화하십시오 — 신뢰도가 낮으면 명시하십시오. (4) 데이터를 넘어 외삽하지 마십시오. 출력 형식: 경영진 요약(3가지 핵심 발견) + 표가 있는 상세 분석 + 권장 사항. 신뢰 수준을 포함하십시오. 톤: 명확하고, 정확하며, 데이터 중심. 범위: 제공된 데이터만 분석. 거부: 데이터 조작, 불확실성을 추측으로 재정의.',
      },

      recipe3: {
        title: '레시피 3: 코드 리뷰어',
        blockquote: '당신은 전문 코드 리뷰어입니다. 귀하의 역할: 정확성, 성능, 유지 보수성, 보안에 대한 코드를 평가합니다. 제약 조건: (1) 강점과 약점 모두 지적하십시오. (2) 일반적인 조언이 아닌 구체적인 개선 사항을 제안하십시오. (3) 작성자의 선택을 존중하십시오 — "왜"를 설명하고, 요구하지 마십시오. (4) 성급한 최적화를 제안하지 마십시오. (5) 보안 문제를 심각한 것으로 표시하십시오. 출력 형식: 요약 + 코드 조각이 있는 라인별 피드백. Markdown 코드 블록을 사용하십시오. 톤: 존중하고, 건설적으로. 범위: 코드 리뷰만. 거부: 범위 외 리팩토링 또는 아키텍처 변경.',
      },

      howToStart: {
        title: '5단계로 효과적인 시스템 프롬프트 작성하기',
        numberedItems: [
          '**역할을 명시적으로 정의하십시오:** 명확하고 도메인별 역할 진술로 시작하십시오. "당신은 개발자 도구를 전문으로 하는 B2B SaaS 카피라이터입니다"가 "당신은 유용한 도우미입니다"보다 더 효과적입니다.',
          '**제약 조건을 능력보다 먼저 작성하십시오:** 모델이 해서는 안 되는 것을 먼저 명시하십시오 — 범위 경계, 금지된 주제, 톤 규칙. 지침 전에 설정된 제약 조건은 사용자 입력이 재정의하기 더 어렵습니다.',
          '**시스템 프롬프트에서 출력 형식을 지정하십시오:** 기본 출력 구조(글머리, JSON, 산문, 표)를 정의하여 모든 사용자 메시지가 반복적인 형식 지침 없이 일관되게 형식화된 출력을 생성하도록 하십시오.',
          '**범위 경계를 설정하십시오:** 모델이 거부하거나 리디렉션해야 하는 것을 정의하십시오. 예: "소프트웨어 가격 외 주제에 대해 질문받으면, \'그것은 제 범위 밖입니다 — 일반 지원팀에 문의하십시오\'라고 답하십시오."',
          '**최소 5가지 다른 사용자 메시지로 테스트하십시오:** 배포 전에 엣지 케이스를 시도하십시오 — 주제 외 질문, 긴 입력, 모호한 요청. 모델이 캐릭터나 형식에서 벗어나는 부분을 기반으로 세부 조정하십시오.',
        ],
      },

      relatedReading: {
        title: '관련 읽기',
        items: [
          '[로컬 LLM으로 더 스마트한 홈 자동화](/ko/smart-home/ai-automations-local-llm) — 시스템 프롬프트가 실제 Ollama + Home Assistant 설정에서 사용 가능한 홈 제어 작업을 어떻게 정의하는지 확인하세요',
        ],
      },

      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '시스템 프롬프트란 무엇입니까?',
            a: '시스템 프롬프트는 전체 대화 세션 동안 언어 모델의 동작 방식을 정의하는 영구적인 지침 집합입니다. 세션 시작 시 한 번 설정되며 모든 사용자 상호작용에 적용됩니다. 시스템 프롬프트는 모델의 역할, 제약 조건, 출력 형식, 통신 스타일을 지정합니다.'
          },
          {
            q: '사용자 프롬프트란 무엇입니까?',
            a: '사용자 프롬프트는 요청별 입력 — 해당 단일 상호작용을 위해 제공되는 특정 작업, 질문, 또는 지침입니다. 최종 사용자가 생성하며 매 요청마다 변경됩니다. 사용자 프롬프트는 시스템 프롬프트의 규칙과 역할 내에서 평가됩니다.'
          },
          {
            q: '시스템 프롬프트와 사용자 프롬프트는 누가 작성합니까?',
            a: '개발자와 제품 팀이 시스템 프롬프트를 작성하여 제품에 포함시킵니다. 최종 사용자는 제품과 상호작용할 때 사용자 프롬프트를 작성합니다. PromptQuorum과 같은 도구에서는 사용자가 두 가지 모두를 보고 편집할 수 있습니다.'
          },
          {
            q: '최종 사용자로서 왜 시스템 프롬프트를 봐야 합니까?',
            a: 'LM Studio 또는 Ollama와 같은 로컬 LLM을 사용할 때, 숨겨진 시스템 프롬프트는 예기치 않은 동작과 디버깅 문제를 일으킵니다. 시스템 프롬프트를 보면 신뢰를 구축하고, 모델의 제약 조건을 이해하며, 더 나은 사용자 프롬프트를 작성하는 데 도움이 됩니다.'
          },
          {
            q: '모든 LLM이 시스템 프롬프트를 사용합니까?',
            a: '예. 모든 주요 LLM — GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro, Ollama 모델, LM Studio — 은 시스템 프롬프트 + 사용자 프롬프트 패턴을 지원합니다. 일부는 기본 시스템 프롬프트를 제공하고, 다른 것들은 자신만의 것을 정의할 수 있게 합니다.'
          },
          {
            q: '사용자 프롬프트가 시스템 프롬프트를 재정의할 수 있습니까?',
            a: '직접적으로는 불가능합니다. 시스템 프롬프트는 구조적 우선순위를 갖습니다 — 모델이 먼저 처리하고 영구적인 제약 조건으로 취급합니다. 사용자 프롬프트는 시스템 프롬프트를 명시적으로 비활성화하거나 덮어쓸 수 없습니다. 그러나 모호한 제약 조건이 있는 잘못 설계된 시스템 프롬프트는 사용자 프롬프트가 강하게 반박하면 무시될 수 있습니다. 잘 설계된 시스템 프롬프트에는 사용자 재정의에 저항하는 명시적 거부 규칙이 포함됩니다.'
          },
          {
            q: '시스템 프롬프트가 없으면 어떻게 됩니까?',
            a: '모델이 기본 학습 동작으로 돌아갑니다. GPT-5.6, Claude Sonnet 5, Gemini 3.5 Pro 모두 시스템 프롬프트가 없을 때 기본 동작(유용하고, 무해하며, 정직함)이 내장되어 있습니다. 모델은 여전히 사용자 프롬프트에 응답하지만, 역할 정의, 출력 형식 제약 조건, 또는 범위 경계 없이 — 결과는 덜 일관되고 덜 전문화될 것입니다.'
          },
          {
            q: '시스템 프롬프트는 EU AI 법 규정 준수에 어떤 영향을 미칩니까?',
            a: 'EU AI 법(2025년 2월 발효)은 시스템이 운영되는 지침을 포함하여 고위험 AI 시스템에 대한 투명성 문서화를 요구합니다. 시스템 프롬프트는 로깅, 버전 관리, 준수 팀에서 액세스 가능해야 합니다. 공개할 수 없는 숨겨진 시스템 프롬프트는 13조 투명성 의무 및 86조(설명 권리)에 따른 직접적인 규정 준수 위험을 만듭니다.'
          },
          {
            q: '시스템 프롬프트의 목적은 무엇입니까?',
            a: '시스템 프롬프트는 전체 대화에 걸쳐 AI 모델의 페르소나, 제약 조건, 운영 규칙을 확립합니다. 모델이 요청을 해석하는 방법, 응답을 형식화하는 방법, 엣지 케이스를 처리하는 방법을 제어합니다. 시스템 프롬프트는 예측할 수 없는 동작을 방지하고 모든 사용자 상호작용에 걸쳐 일관된 출력 품질을 보장합니다.'
          },
          {
            q: 'AI 에이전트가 사용자 프롬프트보다 시스템 프롬프트를 더 엄격하게 따릅니까?',
            a: '예. 시스템 프롬프트는 모델의 처리 순서에서 구조적 우선순위를 갖습니다. 모델은 시스템 프롬프트를 먼저 읽고 영구적인 제약 조건으로 적용합니다. 사용자 프롬프트는 시스템 프롬프트의 경계 내에서 평가됩니다. 이로 인해 시스템 프롬프트는 재정의하기 더 어렵고 엄격한 동작 규칙 적용에 더 신뢰할 수 있습니다.'
          },
          {
            q: '개발자 프롬프트란 무엇이며 시스템 프롬프트와 어떤 관계입니까?',
            a: '개발자 프롬프트는 프로덕션 애플리케이션에서 AI 동작을 제어하기 위해 엔지니어나 제품 팀이 작성한 시스템 프롬프트입니다. 자동화된 워크플로우, API, 비대화형 시스템을 위해 설계된 특수한 유형의 시스템 프롬프트입니다. 개발자 프롬프트는 대화적 자연스러움보다 정밀성과 측정 가능한 출력을 우선시합니다.'
          },
          {
            q: '시스템 프롬프트와 사용자 프롬프트 사이에 있는 프리-프롬프트란 무엇입니까?',
            a: '프리-프롬프트는 고급 프롬프팅 아키텍처에서 때때로 사용되는 중간 지침 블록입니다. 시스템 프롬프트를 직접 수정하지 않고 범위를 세부화하며, 논리적으로 시스템 프롬프트와 사용자 입력 사이에 위치합니다. 프리-프롬프트는 검색 결과를 맥락화하기 위해 RAG 시스템과 다중 턴 대화에서 일반적입니다.'
          },
          {
            q: '엄격한 JSON 출력을 적용하는 데 가장 효과적인 시스템 프롬프트 패턴은 무엇입니까?',
            a: '가장 효과적인 패턴은 역할 정의, 명시적 형식 제약 조건, 예시를 결합합니다. 구조: (1) 역할, (2) 출력 요건("유효한 JSON으로만 응답하십시오"), (3) 스키마 명세, (4) 이스케이프 규칙. 이 조합은 형식 지침만 사용하는 것보다 일관성을 더 잘 강제합니다.'
          },
          {
            q: '시스템 프롬프트가 일반 사용자 프롬프트보다 더 강력합니까?',
            a: '예. 시스템 프롬프트는 여러 모델에 걸친 PromptQuorum 테스트에 따르면 행동 일관성의 약 70%를 차지합니다. 사용자 프롬프트는 약 30%를 차지합니다. 잘 만들어진 시스템 프롬프트는 약한 사용자 프롬프트도 더 잘 작동하게 만들 수 있지만, 나쁜 시스템 프롬프트는 훌륭한 사용자 프롬프트도 무력화시킵니다.'
          },
          {
            q: '코어 프롬프트와 세션 프롬프트의 차이는 무엇입니까?',
            a: '코어 프롬프트는 영구적인 규칙과 역할을 정의하는 기본 시스템 프롬프트입니다. 세션 프롬프트는 대화 세션별로 동적으로 생성됩니다(예: 세션 ID, 사용자 메타데이터, 또는 컨텍스트 포함). 코어 프롬프트는 정적이며, 세션 프롬프트는 각 세션 시작 전에 맥락적으로 생성됩니다.'
          },
          {
            q: 'OpenAI, Claude, Gemini API에서 시스템 프롬프트가 어떻게 다르게 작동합니까?',
            a: '세 API 모두 메시지 배열에서 시스템 프롬프트를 지원하지만 미묘한 차이가 있습니다. OpenAI는 메시지 시작 시 `system` 역할을 사용합니다. Anthropic Claude는 `system` 매개변수를 사용합니다. Google Gemini는 `systemInstruction`을 별도 매개변수로 사용합니다. 기능은 동일하지만 구현 방식과 토큰 계산은 공급업체에 따라 약간 다릅니다.'
          },
        ],
      },

      sources: {
        title: '출처 및 추가 읽기',
        items: [
          '[OpenAI, 2024. "Prompt Engineering Guide"](https://platform.openai.com/docs/guides/prompt-engineering) — 시스템 프롬프트 및 사용자 프롬프트, 기법 및 모범 사례에 관한 공식 OpenAI 문서',
          '[Anthropic, 2024. "Prompt Engineering"](https://docs.anthropic.com/en/docs/build-a-Claude-app/prompt-engineering) — Claude 모델을 위한 프롬프트 구조화 및 시스템 지침 설계에 관한 Anthropic의 가이드',
          '[Schulhoff et al., 2024. "The Prompt Report: A Systematic Survey of Prompting Techniques"](https://arxiv.org/abs/2406.06608) — 58개 이상의 개별 프롬프팅 기법을 목록화한 종합 학술 조사',
        ],
      },
    },
  },
};
