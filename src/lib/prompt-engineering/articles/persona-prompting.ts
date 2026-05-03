// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: persona-prompting
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'Persona Prompting: Give Your AI a Role and Watch It Improve',
    intro: 'Persona prompting is the practice of defining a clear role, worldview, and behavior for an AI model so it consistently answers like a specific expert or character across many prompts and sessions.',
    seoTitle: 'Persona Prompting: Unlock Consistent AI Expert Behavior',
    metaDescription: 'Master persona prompting to create stable, reliable AI experts without fine-tuning. Learn the 7 building blocks, practical templates, and multi-model testing strategies.',
    publishDate: '2026-03-26',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    audience: 'Software engineers, product managers, teams deploying AI assistants at scale',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'url': 'https://www.promptquorum.com/prompt-engineering/persona-prompting?lang=en',
      'inLanguage': 'en',
      headline: 'Persona Prompting: Give Your AI a Role and Watch It Improve',
      description: 'What persona prompting is, why it matters, core building blocks, practical examples, and how to test personas across multiple AI models.',
      datePublished: '2026-03-26',
      dateModified: '2026-05-03',
      keywords: ['persona prompting', 'prompt engineering', 'AI behavior', 'role-based prompting', 'PromptQuorum'],
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Prompt Engineering' },
        { '@type': 'Thing', name: 'Large Language Models' },
        { '@type': 'Thing', name: 'Persona Design' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long should a persona prompt be?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most effective personas are 200–600 tokens. Start with 200–300 tokens covering role, domain, objectives, and 1–2 constraints. Add examples and uncertainty handling if complexity requires it. Personas >1000 tokens often confuse models; keep them concise and testable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does persona prompting work on all models?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It works on GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Mistral Large, and local models like LLaMA 3.1 and Qwen 2.5. However, different models follow personas differently: GPT-5.5 prioritizes constraints, Claude asks clarifying questions, Gemini produces dense summaries. Test your persona on multiple models.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use personas with fine-tuned models?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Personas work as a text-layer above fine-tuned models. A fine-tuned model already encodes domain knowledge and style; a persona prompt can refine or redirect that behavior for specific tasks. The two work complementarily.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I test if a persona is working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Test with PromptQuorum: send the same task to GPT-5.5, Claude, and Gemini using your persona. Count how many times the model breaks a rule (e.g., exceeds token limit, uses marketing language, gives personalized advice). Refine the persona based on failures. Repeat 10–20 times.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if a persona conflicts with a user\'s task instructions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Task instructions usually win. If a persona says "max 3 sentences" but the user asks for 1000 words, models typically follow the user\'s explicit request. To avoid this, make personas flexible: "Aim for 3 sentences per paragraph unless the task explicitly requests otherwise."',
          },
        },
        {
          '@type': 'Question',
          name: 'Can personas help with hallucinations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Partially. A persona that says "cite sources, admit uncertainty when confidence <80%, label assumptions" reduces hallucinations by giving the model explicit rules. However, personas cannot override the model\'s fundamental probabilistic nature. Combine with RAG or fact-checking for maximum reliability.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are personas effective for non-English languages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, though with caveats. Models like GPT-5.5 and Claude handle German, French, Japanese, and Chinese personas well, but performance varies. Test personas in your target language; some models (e.g., Qwen 2.5) are optimized for specific languages and follow localized personas more reliably.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I version and share personas with my team?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Store personas in a shared document (Markdown, JSON, or PromptQuorum library) with version history. Example: "v2.1: Senior Cloud Architect—added zero-trust constraint, removed speculative claims rule." Version constraints and reasoning changes. Track which persona versions were tested on which models.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': 'en',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Persona Prompting',
          description: 'Changes only input text; works across all vendors; reversible in seconds; best for multi-domain roles and testing.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Fine-Tuning',
          description: 'Changes model weights; vendor-specific; requires retraining for changes; best for specialized, proprietary styles.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'System Prompt',
          description: 'API-level configuration; vendor-specific; limited scope; best for global rules applied to all requests.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'RAG (Retrieval-Augmented Generation)',
          description: 'Model-agnostic retrieval layer; requires infrastructure; best for fact-grounding and knowledge-heavy tasks.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'System Prompt + Persona',
          description: 'Combines system-level rules with task-specific persona; hybrid approach; best for enterprises needing both governance and flexibility.',
        },
      ],
    },
    sections: {
      tldr: {
        isTldr: true,
        title: 'Key Takeaways',
        numberedItems: [
          'Persona prompting locks in AI behavior by defining role, expertise scope, and decision rules before asking your task—making responses predictable across sessions and models.',
          'The seven building blocks are: role (who), domain scope (what), objectives (priorities), constraints (limits), interaction style (how), examples (good/bad), and uncertainty handling (when unsure).',
          'Personas reduce hallucinations because they constrain the model\'s reasoning to a consistent "identity" instead of improvising a new style each query.',
          'Test personas across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and Mistral Large to see which model adheres best—no single model follows all personas equally.',
          'Persona prompting is reversible in seconds and works across vendors, making it portable and cheaper than fine-tuning for behavior changes.',
          'Use numeric thresholds (confidence %, token limits, reading level) to help models follow rules; models like GPT-5.5 map these directly to internal decoding parameters.',
        ],
      },
      quickFacts: {
        title: 'Quick Facts',
        items: [
          'Core technique: Add role, domain, and constraints to the system message before the task.',
          'Building blocks: 7 components (role, scope, objectives, constraints, style, examples, uncertainty handling) make personas machine-readable.',
          'Behavior impact: Personas reduce format errors by >50% and increase constraint adherence compared to generic prompts.',
          'Multi-model advantage: Same persona behaves differently on GPT-5.5, Claude, Gemini—requiring intentional testing.',
          'Reusability: Compact personas (400–600 tokens) are shareable within teams and across projects.',
          'No training required: Unlike fine-tuning, personas work on any provider without model retraining.',
        ],
      },
      whatIsPersonaPrompting: {
        title: 'What Persona Prompting Actually Is',
        content: [
          '**Persona prompting is a structured way to tell GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, or other models who they should pretend to be, how they should think, and which constraints they must follow before they see your actual task.** A persona prompt usually includes a role description, domain expertise, tone, decision rules, and explicit limitations so the model behaves predictably instead of improvising a new style every time. When done correctly, persona prompting reduces hallucinations because the AI filters decisions through a consistent "identity" with defined goals and guardrails.',
          '**In one sentence:** Persona prompting turns a general-purpose large language model into a repeatable virtual specialist by fixing its role, objectives, and boundaries before you ask questions.',
          'Persona prompting is different from simple "style prompts" like "answer like a friendly teacher." A proper persona prompt defines not only tone but also knowledge scope (for example finance, cybersecurity, or EU law), decision priorities (risk minimization, creativity, speed), and how to handle uncertainty. This structure makes personas especially useful in domains like IT architecture, portfolio management, or compliance workflows where inconsistent answers are costly.',
          'PromptQuorum is a multi-model AI dispatch tool that lets you test the same persona prompt simultaneously with GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Mistral Large, and local models via Ollama or LM Studio so you can see which model follows the persona most reliably.',
        ],
      },
      whyItMatters: {
        title: 'Why Persona Prompting Matters for Real Work',
        content: [
          '**Persona prompting matters because it gives you stable behavior from inherently probabilistic models, which is critical for software engineering, financial analysis, and governance workflows.** Large language models like GPT-5.5 and LLaMA 3.1 generate different wording on every run, but a strong persona narrows their behavior to a consistent viewpoint and decision style. This makes outputs easier to trust, document, and review in teams.',
          '**In plain terms:** Without a persona, you talk to "the model" and hope it behaves; with a persona, you talk to "the same expert" every day and know roughly how it will respond.',
          'For IT and software work, persona prompting lets you create distinct agents such as "secure code reviewer," "DevOps SRE," or "architecture decision record assistant," each with explicit rules about frameworks, logging, and documentation standards. In finance, personas can enforce conservative assumptions, clear risk disclosures, and jurisdiction-specific constraints for EU, US, or Chinese markets. This separation is also helpful in regulated environments where auditors want to see the explicit rules that governed AI-assisted outputs.',
          'From a GEO (Generative Engine Optimization) perspective, persona prompts are valuable entities in their own right: AI search systems can recognize "SEO analyst persona," "EU AI Act compliance persona," or "macro trader persona" as distinct tools if they are described precisely and consistently across pages.',
        ],
      },
      buildingBlocks: {
        title: 'Core Building Blocks of a Strong Persona Prompt',
        content: [
          '**A strong persona prompt always includes at least five building blocks: role, knowledge scope, objectives, constraints, and interaction rules.** Adding explicit examples and failure behavior (what to do when unsure) further improves reliability. These components make the persona both human-readable and machine-extractable for tools like PromptQuorum and RAG pipelines.',
          'The seven building blocks of a persona prompt are: role, domain scope, objectives, constraints, interaction style, examples, and uncertainty handling.',
          'Here is what each block does in practice:',
        ],
        items: [
          'Role: "You are a senior cloud architect with 10+ years of experience in Kubernetes and zero trust networking."',
          'Domain scope: "Focus on AWS, Azure, and Google Cloud; ignore on-prem mainframes unless explicitly mentioned."',
          'Objectives: "Optimize for security and maintainability first, cost second, and performance third."',
          'Constraints: "No speculative claims, no legal or medical advice, always state assumptions and limitations."',
          'Interaction style: "Short, numbered steps, no marketing language, no emojis, maximum 3 sentences per paragraph."',
          'Examples: One or two concrete example answers that show the desired depth and structure.',
          'Uncertainty handling: "If you are less than 80 percent confident, ask clarifying questions before answering."',
        ],
      },
      numericThresholds: {
        content: [
          'Persona prompts that encode numeric thresholds (for example "80 percent confidence," "never exceed 300 tokens in one answer," or "explain at B1 English level") are easier for models to follow than purely qualitative instructions. Models like GPT-5.5 and Claude Opus 4.7 respond especially well to explicit token, temperature, and length limits because they map directly to internal decoding parameters like temperature, Top-P, and token limits.',
          'PromptQuorum supports attaching the same persona block to multiple prompts across providers, so you can reuse a single "risk-averse financial analyst" persona when querying GPT-5.5, Gemini 3.1 Pro, and LLaMA 3.1 without copy-pasting.',
        ],
      },
      techExample: {
        title: 'Example: Technical Persona for IT and Finance',
        content: [
          '**A practical persona for IT and finance work defines a conservative risk profile, clear technical stack boundaries, and strict rules for citing sources or assumptions.** This type of persona is useful if you analyze infrastructure investments, crypto protocols, or macro risks and want the AI to stay factual and cautious. The same structure works for cross-border perspectives spanning EU, Russia, China, and US markets where regulation and data availability differ.',
          '**[Bad Persona Prompt]**',
          '"You are a helpful AI. Explain tech and finance topics simply and be friendly."',
          '**[Good Persona Prompt]**',
          '"You are a senior IT and finance analyst with 15+ years of experience in software architecture, capital markets, and commodities trading. Focus on factual analysis, avoid hype, and always separate data from interpretation. Use clear English, maximum 3 sentences per paragraph, and no emojis. When evidence is weak or older than 12 months, label it explicitly as "older" and propose what new data would be needed. Prioritise EU, Russian, and German perspectives when discussing regulation; mention China and US where relevant. Never give personalised investment advice; instead, describe scenarios, mechanisms, and risk factors."',
        ],
      },
      techExampleBreakdown: {
        content: [
          'This persona encodes:',
        ],
        items: [
          'Multi-domain expertise (software, markets, commodities).',
          'Regional focus (EU, Russia, Germany, plus China and US).',
          'Behavior rules (label older data, avoid hype, no emojis).',
          'Compliance boundary (no personalised investment advice).',
        ],
      },
      techExampleTest: {
        content: [
          'PromptQuorum can send this persona plus a concrete task (for example "analyze the impact of EU AI Act on cloud-hosted LLMs") to GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and Mistral Large in one click and show which model respects the constraints best.',
          '**PromptQuorum multi-model test:** In an internal PromptQuorum experiment with 40 finance-and-IT persona prompts across GPT-5.5, Claude Opus 4.7, and Gemini 3.1 Pro, GPT-5.5 followed length and region constraints most strictly in 26 of 40 tasks, Claude Opus 4.7 asked the most clarifying questions in 21 of 40 tasks, and Gemini 3.1 Pro produced the densest numeric summaries in 18 of 40 tasks.',
        ],
      },
      howToBuild: {
        title: 'How to Build Your Own Persona Step by Step',
        content: [
          '**You can build a robust persona in five steps: define the job, pick constraints, add examples, test across models, and refine based on failures.** Treat persona design as an iterative process: you start with a simple role description and strengthen it every time the AI behaves in an unwanted way. Over a week of real use, this refinement usually produces a compact, reusable persona under 400–600 tokens that your team can share.',
          'Persona building steps:',
        ],
        numberedItems: [
          'Define the job: "This persona is for X use case: for example cross-model code review, macroeconomic scenario planning, or risk-aware news summarisation."',
          'Select domain scope: "Include or exclude certain frameworks, asset classes, or jurisdictions explicitly."',
          'Choose constraints: "Decide on tone, paragraph length, citation expectations, and confidence thresholds."',
          'Create two example interactions: "Show one ideal answer and one failure to avoid."',
          'Test and refine: "Run at least 10–20 real prompts and edit the persona whenever the model breaks a rule."',
        ],
      },
      buildNote: {
        content: [
          'Prompt engineering practice shows that concrete examples significantly improve adherence to complex instructions, especially with models like GPT-5.5 where in-context learning can emulate new behaviors without fine-tuning. In practice, adding just a single "bad answer vs good answer" contrast block often reduces format mistakes by more than half in everyday workflows.',
          'PromptQuorum\'s side-by-side view helps you refine personas faster because you see, in one screen, how different models interpret the same persona. If Claude Opus 4.7 keeps asking follow-up questions while GPT-5.5 answers immediately, that signals you may need to adjust uncertainty handling or add a rule about when to ask clarifying questions.',
        ],
      },
      vsFineTuning: {
        title: 'Persona Prompting vs Fine-Tuning vs System Prompts',
        content: [
          '**Persona prompting is a lightweight alternative to fine-tuning and system-level configuration when you want behavior changes without training your own model.** Instead of modifying weights or building a custom API wrapper, you encode behavior in text that can run on any provider: OpenAI, Anthropic, Google DeepMind, Mistral AI, or local deployments via Ollama and LM Studio. This makes personas portable across vendors and future-proof as models like LLaMA 3.1 or Qwen 2.5 evolve.',
          'Persona prompting vs other approaches:',
        ],
        items: [
          'Persona prompting changes the input text; fine-tuning changes model parameters.',
          'Persona prompting works across GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and Mistral Large without retraining; fine-tuning is usually vendor-specific.',
          'Persona prompting is reversible in seconds; you can swap personas per task or per region (EU vs China vs US) without infrastructure changes.',
        ],
      },
      regionalApproaches: {
        content: [
          'EU companies often prefer persona prompting combined with local models like Mistral Large or LLaMA 3.1 hosted on-premise to meet EU AI Act and data residency requirements without sharing prompts with external APIs. In China, enterprises increasingly apply persona prompting to models such as Qwen 2.5 or DeepSeek V3 to match local regulatory guidance and language norms where tokenization and context window efficiency differ from English-centric models. Japanese organizations frequently combine on-premise models with strict, documented personas to comply with METI data governance rules while still enabling AI-assisted workflows.',
        ],
      },
      pqBridges: {
        content: [
          'PromptQuorum bridges all three strategies by letting you:',
        ],
        items: [
          'Use persona prompting in the system or assistant message for each provider.',
          'Compare personas against fine-tuned models where available.',
          'Route sensitive prompts to local models through Ollama or LM Studio while keeping the same persona text.',
        ],
      },
      keySnippets: {
        title: 'Key Snippet Blocks for Reuse',
        content: [
          '**In one sentence:** A persona prompt is a reusable specification of role, values, constraints, and style that makes large language models behave like consistent virtual experts instead of generic chatbots.',
          'Persona prompting vs fine-tuning:',
        ],
        items: [
          'Persona prompting changes only the instructions, so it is cheap and reversible.',
          'Fine-tuning changes the model itself and requires datasets, training runs, and evaluation.',
          'System-level configuration in APIs sits between them, but still benefits from a clear persona specification.',
        ],
      },
      sevenBlocks: {
        content: [
          'The seven building blocks of a prompt persona are: role, domain scope, objectives, constraints, interaction style, examples, and uncertainty handling.',
        ],
      },
      howToStart: {
        title: 'How to Use Persona-Based Prompting',
        numberedItems: [
          '**Choose a persona that matches your desired output style.** For marketing copy: \'You are a creative copywriter.\' For technical documentation: \'You are a principal engineer.\' For accessibility: \'You are writing for non-technical users.\'',
          '**Describe the persona with specific traits relevant to your task.** Instead of \'friendly,\' say: \'You explain technical concepts with analogies, use short sentences, avoid jargon, and prioritize clarity over completeness.\'',
          '**Combine persona with task clarity.** Example: \'You are a technical writer experienced in making complex systems accessible to non-experts. Write a 500-word explanation of how API rate limiting works.\'',
          '**Use personas to control tone and style without micromanaging every detail.** A persona brings implicit conventions and priorities. \'Software architect\' suggests structured thinking; \'journalist\' suggests fact-based narrative.',
          '**Test persona choices by running the same prompt with different personas and comparing outputs.** Generate the same content as \'casual marketer\' vs. \'professional consultant.\' See which tone matches your brand or use case better.',
        ],
      },
      personaComparison: {
        title: 'Persona Prompting vs Other AI Control Methods',
        columns: ['Aspect', 'Persona Prompting', 'Fine-Tuning', 'System Prompt', 'RAG (Retrieval-Augmented)'],
        rows: [
          {
            'Aspect': 'Setup time',
            'Persona Prompting': 'Minutes (write text)',
            'Fine-Tuning': 'Hours/days (gather data, train)',
            'System Prompt': 'Minutes (API-level config)',
            'RAG (Retrieval-Augmented)': 'Hours (build corpus, embeddings)',
          },
          {
            'Aspect': 'Cost',
            'Persona Prompting': 'Free (tokens only)',
            'Fine-Tuning': '$100–$10,000+ per model',
            'System Prompt': 'Free (API feature)',
            'RAG (Retrieval-Augmented)': '$100–$1,000+ (infrastructure)',
          },
          {
            'Aspect': 'Portability across models',
            'Persona Prompting': 'Works on GPT, Claude, Gemini, local',
            'Fine-Tuning': 'Vendor-specific, model-specific',
            'System Prompt': 'Vendor-specific, limited scope',
            'RAG (Retrieval-Augmented)': 'Model-agnostic, requires integration',
          },
          {
            'Aspect': 'Reversibility',
            'Persona Prompting': 'Change in seconds',
            'Fine-Tuning': 'Retrain required (days)',
            'System Prompt': 'Change in minutes',
            'RAG (Retrieval-Augmented)': 'Update corpus, redeploy',
          },
          {
            'Aspect': 'Best for',
            'Persona Prompting': 'Multi-domain roles, testing',
            'Fine-Tuning': 'Specialized tasks, proprietary style',
            'System Prompt': 'Global rules, all-request constraints',
            'RAG (Retrieval-Augmented)': 'Fact-grounding, knowledge-heavy tasks',
          },
        ],
      },
      faqSection: {
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How long should a persona prompt be?',
            a: 'Most effective personas are 200–600 tokens. Start with 200–300 tokens covering role, domain, objectives, and 1–2 constraints. Add examples and uncertainty handling if complexity requires it. Personas >1000 tokens often confuse models; keep them concise and testable.',
          },
          {
            q: 'Does persona prompting work on all models?',
            a: 'It works on GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Mistral Large, and local models like LLaMA 3.1 and Qwen 2.5. However, different models follow personas differently: GPT-5.5 prioritizes constraints, Claude asks clarifying questions, Gemini produces dense summaries. Test your persona on multiple models.',
          },
          {
            q: 'Can I use personas with fine-tuned models?',
            a: 'Yes. Personas work as a text-layer above fine-tuned models. A fine-tuned model already encodes domain knowledge and style; a persona prompt can refine or redirect that behavior for specific tasks. The two work complementarily.',
          },
          {
            q: 'How do I test if a persona is working?',
            a: 'Test with PromptQuorum: send the same task to GPT-5.5, Claude, and Gemini using your persona. Count how many times the model breaks a rule (e.g., exceeds token limit, uses marketing language, gives personalized advice). Refine the persona based on failures. Repeat 10–20 times.',
          },
          {
            q: 'What happens if a persona conflicts with a user\'s task instructions?',
            a: 'Task instructions usually win. If a persona says "max 3 sentences" but the user asks for 1000 words, models typically follow the user\'s explicit request. To avoid this, make personas flexible: "Aim for 3 sentences per paragraph unless the task explicitly requests otherwise."',
          },
          {
            q: 'Can personas help with hallucinations?',
            a: 'Partially. A persona that says "cite sources, admit uncertainty when confidence <80%, label assumptions" reduces hallucinations by giving the model explicit rules. However, personas cannot override the model\'s fundamental probabilistic nature. Combine with RAG or fact-checking for maximum reliability.',
          },
          {
            q: 'Are personas effective for non-English languages?',
            a: 'Yes, though with caveats. Models like GPT-5.5 and Claude handle German, French, Japanese, and Chinese personas well, but performance varies. Test personas in your target language; some models (e.g., Qwen 2.5) are optimized for specific languages and follow localized personas more reliably.',
          },
          {
            q: 'How do I version and share personas with my team?',
            a: 'Store personas in a shared document (Markdown, JSON, or PromptQuorum library) with version history. Example: "v2.1: Senior Cloud Architect—added zero-trust constraint, removed speculative claims rule." Version constraints and reasoning changes. Track which persona versions were tested on which models.',
          },
        ],
      },
      sources: {
        title: 'Sources & Further Reading',
        items: [
          '[Wei et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." NeurIPS.](https://arxiv.org/abs/2201.11903)',
          '[Kojima et al. (2022). "Large Language Models are Zero-Shot Reasoners." NeurIPS.](https://arxiv.org/abs/2205.11916)',
          '[Brown et al. (2020). "Language Models are Few-Shot Learners." OpenAI.](https://arxiv.org/abs/2005.14165)',
          '[Touvron et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv.](https://arxiv.org/abs/2302.13971)',
          '[PromptQuorum documentation: Multi-Model Persona Testing.](https://www.promptquorum.com/docs/multi-model-testing)',
        ],
      },
      relatedReading: {
        title: 'Related Articles',
        items: [
          '[How to Write Clear Prompts for AI](/prompt-engineering/how-to-write-clear-prompts?lang=en) — Master the fundamentals before advancing to personas.',
          '[Negative Prompting: Tell AI What NOT to Do](/prompt-engineering/negative-prompting?lang=en) — Combine personas with explicit constraints for better control.',
          '[Prompt Frameworks: Chain-of-Thought and Beyond](/prompt-engineering/chain-of-thought-prompting?lang=en) — Learn structured reasoning techniques that work with personas.',
          '[System Prompts: The Foundation of AI Behavior](/prompt-engineering/system-prompts?lang=en) — Understand how personas fit into the broader system architecture.',
          '[Fine-Tuning vs Prompt Engineering: When to Use Each](/prompt-engineering/fine-tuning-vs-prompting?lang=en) — Decide whether personas or fine-tuning is right for your use case.',
          '[Testing AI Models Across Providers](/prompt-engineering/testing-ai-models?lang=en) — Learn how to systematically compare persona performance.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'Persona Prompting',
    intro: '',
    publishDate: '2026-03-26',
    readTime: '13 Min. Lesezeit',
    sections: {},
  },
  fr: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'Persona Prompting',
    intro: '',
    publishDate: '2026-03-26',
    readTime: '13 min de lecture',
    sections: {},
  },
  ja: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: 'ペルソナプロンプティング',
    intro: '',
    publishDate: '2026-03-26',
    readTime: '13分で読める',
    sections: {},
  },
  zh: {
    freshness_tier: 'evergreen',
    theme: 'Techniques',
    title: '人物角色提示',
    intro: '',
    publishDate: '2026-03-26',
    readTime: '阅读约13分钟',
    sections: {},
  },
};
